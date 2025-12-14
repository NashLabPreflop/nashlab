import React, { useEffect, useMemo, useState } from "react";

/**
 * Preflop Quiz – Pattern + RangeSpec answer
 * - 6-max テーブル可視化（全員スタックBB表示）
 * - SB/BB はブラインド支払いをチップ表示で可視化
 * - 出題ハンドはランダム（デフォルト10問セット）
 * - PATTERNSの回答は「action + range(HAND_RANGE_SPEC形式)」で定義
 * - Enter: 回答/次へ、R: 新しいセット作成
 */

/* ================= 基本 ================= */
const POSITIONS6 = ["UTG", "MP", "CO", "BTN", "SB", "BB"];
const BLIND_SIZES = { SB: 0.5, BB: 1 };

const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const RANK_INDEX = Object.fromEntries(RANKS.map((r, i) => [r, i]));

/**
 * 例: AA:0.991, 88-77, AQo-AJo, KJs:0.262 ...
 * - weight省略は1.0として扱う
 * - "AQo-AJo" のように weightが無い場合も含められる（=1.0）
 */
function expandPairRange(token) {
  const m = token.match(/^([2-9TJQKA])\1(?:-([2-9TJQKA])\2)?$/i);
  if (!m) return [];
  const start = m[1].toUpperCase();
  const end = (m[2] || m[1]).toUpperCase();
  const s = RANK_INDEX[start];
  const e = RANK_INDEX[end];
  if (s == null || e == null) return [];
  const out = [];
  for (let i = Math.min(s, e); i <= Math.max(s, e); i++) out.push(RANKS[i] + RANKS[i]);
  return out;
}

function expandNonPairRange(token) {
  // AKs / AQo-AJo など（先頭ランク固定）
  const m = token.match(/^([2-9TJQKA])([2-9TJQKA])([so])(?:-([2-9TJQKA])([2-9TJQKA])\3)?$/i);
  if (!m) return [];
  const a = m[1].toUpperCase();
  const b = m[2].toUpperCase();
  const sfx = m[3].toLowerCase();
  const a2 = (m[4] || a).toUpperCase();
  const b2 = (m[5] || b).toUpperCase();
  if (a !== a2) return [];
  const s = RANK_INDEX[b];
  const e = RANK_INDEX[b2];
  if (s == null || e == null) return [];
  const out = [];
  for (let i = Math.min(s, e); i <= Math.max(s, e); i++) out.push(a + RANKS[i] + sfx);
  return out;
}

function expandPlusRange(token) {
  // 66+
  let m = token.match(/^([2-9TJQKA])\1\+$/i);
  if (m) {
    const start = m[1].toUpperCase();
    const s = RANK_INDEX[start];
    if (s == null) return [];
    // A,K,Q,...,2 の順なので「start(例:6)より強いペア」を含めるには index を 0..s
    return RANKS.slice(0, s + 1).map((r) => r + r);
  }

  // A5s+ / KTo+（上側ランク固定で、下側を強い方（=index小）へ伸ばす）
  // 例: A5s+ => A5s,A6s,...,AKs（AAsは除外）
  m = token.match(/^([2-9TJQKA])([2-9TJQKA])([so])\+$/i);
  if (!m) return [];

  const hi = m[1].toUpperCase(); // 例: A
  const lo = m[2].toUpperCase(); // 例: 5
  const sfx = m[3].toLowerCase();

  const hiIdx = RANK_INDEX[hi];
  const loIdx = RANK_INDEX[lo];
  if (hiIdx == null || loIdx == null) return [];

  // hi は常に lo より強い必要がある（A5 はOK, 55o みたいなのは弾く）
  if (loIdx <= hiIdx) return [];

  const out = [];
  // loIdx(弱い) -> hiIdx+1(強い側) へ indexを下げていく
  // 例: loIdx=9(5), hiIdx=0(A) => i=9..1 を作る => 5,6,7,8,9,T,J,Q,K
  for (let i = loIdx; i >= hiIdx + 1; i--) {
    out.push(hi + RANKS[i] + sfx);
  }
  return out;
}

function parseRangeSpec(spec) {
  const items = (spec || "").split(/\s*,\s*/).filter(Boolean);
  const map = new Map(); // hand -> weight

  for (const raw of items) {
    const [handPartRaw, weightPartRaw] = raw.split(":");
    const handPart = (handPartRaw || "").trim();
    const weightPart = weightPartRaw != null ? String(weightPartRaw).trim() : null;

    if (!handPart) continue;

    let hands = [];

    if (handPart.endsWith("+")) {
      hands = expandPlusRange(handPart);
      if (!hands.length) continue; // パース不能なら捨てる
    }
    // ペア（66, 88-77）
    else if (/^[2-9TJQKA]\1(?:-([2-9TJQKA])\2)?$/i.test(handPart)) {
      hands = expandPairRange(handPart);
    }
    // non-pair range（AQo-AJo など）※先頭ランク固定
    else if (/^([2-9TJQKA])([2-9TJQKA])([so])(?:-\1([2-9TJQKA])\3)?$/i.test(handPart)) {
      hands = expandNonPairRange(handPart);
    }
    // 単体ペア
    else if (/^[2-9TJQKA]\1$/i.test(handPart)) {
      hands = [handPart.toUpperCase()];
    }
    // 単体 non-pair
    else if (/^[2-9TJQKA][2-9TJQKA][so]$/i.test(handPart)) {
      hands = [handPart.toUpperCase()];
    } else {
      continue;
    }

    const w = weightPart == null || weightPart === "" ? 1.0 : Number(weightPart);
    const weight = Number.isFinite(w) ? w : 1.0;

    for (const h of hands) map.set(h.toUpperCase(), weight);
  }

  return map;
}

/* range文字列 -> Map をキャッシュ（毎回parseしない） */
const __rangeCache = new Map();
function getRangeMap(rangeStr) {
  const key = (rangeStr || "").replace(/\s+/g, " ").trim();
  if (!key) return new Map();
  if (__rangeCache.has(key)) return __rangeCache.get(key);
  const m = parseRangeSpec(key);
  __rangeCache.set(key, m);
  return m;
}

/** optionsの先頭単語で action を探す（open/call/3bet/jam/fold など） */
function findIndexByAction(options, action) {
  const a = (action || "").toLowerCase();
  if (!a) return 0;
  const idx = (options || []).findIndex((o) => (o || "").toLowerCase().startsWith(a));
  return idx !== -1 ? idx : 0;
}

/* ========= 全169ハンド生成 ========= */
function allHands169() {
  const out = [];
  // ペア 13
  for (const r of RANKS) out.push(r + r);
  // スーテッド 78 & オフスート 78（常に高位→低位の順）
  for (let i = 0; i < RANKS.length; i++) {
    for (let j = i + 1; j < RANKS.length; j++) {
      out.push(RANKS[i] + RANKS[j] + "s");
      out.push(RANKS[i] + RANKS[j] + "o");
    }
  }
  return out;
}

const ALL_HANDS = allHands169();

/**
 * bands = [{action, range, min?}, ...]
 * - 上から順に「rangeにhandが含まれ、weight>=min（省略時defaultMin）」のものを採用
 * - どれにも当たらなければ fallbackAction
 */
function answerByRangeSpec(options, hand, bands, fallbackAction = "fold", defaultMin = 0.5) {
  const h = (hand || "").toUpperCase();
  for (const b of bands || []) {
    const action = (b.action || "").toLowerCase();
    const min = typeof b.min === "number" ? b.min : defaultMin;
    const rmap = getRangeMap(b.range);
    if (!rmap.has(h)) continue;
    const w = Number(rmap.get(h) ?? 0);
    if (w >= min) return findIndexByAction(options, action);
  }
  return findIndexByAction(options, fallbackAction);
}

// bands の range(weight) を使って action別の「重み」を作り、正規化して確率にする
function probsByRangeSpec(options, hand, bands, fallbackAction = "fold") {
  const h = (hand || "").toUpperCase();
  const weights = {}; // action(lower) -> rawWeight

  // 初期化：optionsに含まれる action を全部0に
  for (const opt of options || []) {
    const a = String(opt || "").trim().split(/\s+/)[0]?.toLowerCase();
    if (a) weights[a] = 0;
  }

  // bandごとに加算（同じactionが複数bandにある場合は足し算）
  for (const b of bands || []) {
    const action = (b.action || "").toLowerCase();
    const rmap = getRangeMap(b.range);
    const w = Number(rmap.get(h) ?? 0);
    if (!Number.isFinite(w) || w <= 0) continue;
    weights[action] = (weights[action] ?? 0) + w;
  }

  // どのbandにも無ければ fallback を 1.0
  const sum = Object.values(weights).reduce((a, v) => a + (Number(v) || 0), 0);
  if (sum <= 0) {
    // fallbackAction に寄せる（optionsに無い場合は最初に寄せる）
    const fb = (fallbackAction || "").toLowerCase();
    const fbKey = weights[fb] != null ? fb : Object.keys(weights)[0] || fb;
    const out = {};
    for (const k of Object.keys(weights)) out[k] = 0;
    if (fbKey) out[fbKey] = 1;
    return out;
  }

  // 正規化
  const out = {};
  for (const k of Object.keys(weights)) out[k] = (weights[k] || 0) / sum;
  return out;
}

/* ================= テーブル可視化 ================= */
function polarToXY(r, deg) {
  const rad = (deg * Math.PI) / 180;
  return { left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%` };
}

function sixMaxLayout() {
  const angles = { UTG: -90, MP: -30, CO: 30, BTN: 90, SB: 150, BB: -150 };
  const r = 40;
  const coords = {};
  for (const p of POSITIONS6) coords[p] = polarToXY(r, angles[p]);
  return coords;
}

function badgeStyleFor(action) {
  if (!action) return { background: "#e5e7eb", color: "#111" };
  const a = action.toLowerCase();
  if (a.startsWith("open")) return { background: "#dbeafe", color: "#1e40af" };
  if (a.startsWith("call")) return { background: "#fef3c7", color: "#92400e" };
  if (a.startsWith("3bet") || a.startsWith("4bet")) return { background: "#ffe4e6", color: "#9f1239" };
  if (a.startsWith("jam") || a.includes("all-in")) return { background: "#dcfce7", color: "#065f46" };
  if (a.startsWith("fold")) return { background: "#f3f4f6", color: "#6b7280" };
  return { background: "#e5e7eb", color: "#111" };
}

function normalizeOptionToBB(opt) {
  if (!opt) return opt;
  const txt = opt.toLowerCase().trim();
  // "2.2x" -> "2.2bb"
  if (txt.includes("x")) return opt.replace(/x/gi, "bb");
  // callがサイズ無しなら見た目だけ補う
  if (txt.startsWith("call") && !txt.match(/[0-9]/)) return "Call";
  if (txt.startsWith("fold")) return "Fold 0bb";
  if (txt.startsWith("limp")) return "Limp 1bb";
  return opt;
}

function parseFacingOpen(facing) {
  const s = String(facing || "").trim();
  // 例: "BTN open 2x", "BTN open 2bb", "BTN open 2.2x"
  const m = s.match(/^(UTG|MP|CO|BTN|SB|BB)\s+open\s+([0-9]+(?:\.[0-9]+)?)\s*(x|bb)\b/i);
  if (!m) return null;

  const pos = m[1].toUpperCase();
  const num = Number(m[2]);
  if (!Number.isFinite(num) || num <= 0) return null;

  // x でも bb でも UI上は bb として表示（あなたの要望: "2x"→"2BB支払い"）
  const amountBB = num;

  return { pos, amountBB };
}

function PokerTable({ stacks, heroPos, heroHand, action, facing }) {
  const coords = useMemo(() => sixMaxLayout(), []);
  const facingOpen = useMemo(() => parseFacingOpen(facing), [facing]);
  return (
    <div style={styles.tableWrap}>
      <div style={styles.tableCircle}>
        {POSITIONS6.map((pos) => {
          const c = coords[pos];
          const isHero = pos === heroPos;
          const isSB = pos === "SB";
          const isBB = pos === "BB";
          const isOpener = facingOpen?.pos === pos;
          const openAmt = facingOpen?.amountBB ?? 0;
          const badge = badgeStyleFor(isHero ? action : null);

          return (
            <div
              key={pos}
              style={{
                ...styles.seat,
                ...c,
                ...(isHero ? styles.seatHero : {}),
                ...(isSB ? styles.sbSeat : {}),
                ...(isBB ? styles.bbSeat : {}),
              }}
            >
              <div style={styles.seatPos}>{pos}</div>
              <div style={styles.seatStack}>[{stacks[pos]}bb]</div>
              {isHero && <div style={styles.seatHand}>{heroHand}</div>}
              {isHero && action && (
                <div style={{ ...styles.badge, background: badge.background, color: badge.color }}>{action}</div>
              )}

              {/* SB/BB ブラインドチップ表示 */}
              {isSB && (
                <div style={{ ...styles.chipWrap, ...styles.chipWrapSB }}>
                  <div style={{ ...styles.chip, ...styles.chipSB }} />
                  <div style={styles.chipText}>{BLIND_SIZES.SB}bb</div>
                </div>
              )}
              {isBB && (
                <div style={{ ...styles.chipWrap, ...styles.chipWrapBB }}>
                  <div style={{ ...styles.chip, ...styles.chipBB }} />
                  <div style={styles.chipText}>{BLIND_SIZES.BB}bb</div>
                </div>
              )}

              {/* facing が "BTN open 2x" などの時、オープンした席にチップ表示 */}
              {isOpener && openAmt > 0 && (
               <div style={{ ...styles.chipWrap, ...styles.chipWrapOpen }}>
                 <div style={{ ...styles.chip, ...styles.chipOpen }} />
                 <div style={styles.chipText}>{openAmt}bb</div>
               </div>
             )}

            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProbBarChart({ options, probs }) {
  // options: ["Fold", "Open 2.2bb"] など
  // probs: { fold:0.2, open:0.8 } など（actionキーは小文字）
  const rows = (options || []).map((opt) => {
    const key = String(opt || "").trim().split(/\s+/)[0]?.toLowerCase();
    const p = Math.max(0, Math.min(1, Number(probs?.[key] ?? 0)));
    return { opt, key, p };
  });

  return (
    <div style={styles.probWrap}>
      <div style={styles.probTitle}>アクション確率（RangeSpec weightベース）</div>
      <div style={styles.probGrid}>
        {rows.map((r) => (
          <div key={r.opt} style={styles.probRow}>
            <div style={styles.probLabel}>{r.opt}</div>
            <div style={styles.probBarOuter}>
              <div style={{ ...styles.probBarInner, width: `${Math.round(r.p * 1000) / 10}%` }} />
            </div>
            <div style={styles.probPct}>{(Math.round(r.p * 1000) / 10).toFixed(1)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= PATTERNS（回答は range 文字列で定義） ================= */
const PATTERNS = [
  {
    id: "btn-open",
    label: "BTN Open（Unopened）",
    questionBuilder: (hand) => ({
      hand,
      pos: "BTN",
      eff: 40,
      facing: "Unopened",
      stacks: { UTG: 40, MP: 40, CO: 40, BTN: 40, SB: 40, BB: 40 },
      options: ["Fold", "Open 2.2x"],
    }),
    bands: [
      {
        action: "open",
        range: `
              66+, 55:0.998, 44:0.686, A5s+, A4s:0.996, A3s:0.994, A2s:0.997, AKo, AQo:0.992, AJo-A7o,
              A6o:0.809, A5o:0.999, A4o:0.012, K6s+, K5s:0.999, K4s, K3s:0.489, K2s:0.004,
              KTo+, K9o:0.499, Q8s+, Q7s:0.999, Q6s:0.995, Q5s:0.990, Q3s:0.001, QTo+, Q9o:0.493,
              J8s+, J7s:0.999, J6s:0.001, JTo, J9o:0.054, T9s, T8s:0.999, T7s:0.972, T9o:0.351,
              98s, 97s:0.989, 87s:0.999, 76s:0.314, 65s:0.006, 54s:0.001
        `.replace(/\n/g, " "),
      },
    ],
    answerBuilder: (hand, _weight, options) => ({
      index: answerByRangeSpec(options, hand, PATTERNS.find(p=>p.id==="btn-open").bands, "fold", 0.5),
    }),
  },
  {
    id: "sb-vs-btn",
    label: "SB vs BTN 2x",
    questionBuilder: (hand) => ({
      hand,
      pos: "SB",
      eff: 25,
      facing: "BTN open 2x",
      stacks: { UTG: 25, MP: 25, CO: 25, BTN: 25, SB: 25, BB: 25 },
      options: ["Fold", "Call", "3bet 7bb", "Jam 25bb"],
    }),
    bands: [
          { action: "JAM", min: 0.3, range: `JJ:0.598, TT:0.760, 99:0.883, 88:0.314, 77:0.024, 66:0.131, 55:0.081, 44:0.677, 33:0.688, 22:0.630, AQs:0.390, ATs:0.001, A8s:0.758, A6s:0.071, A5s:0.588, A4s:0.432, A3s:0.608, A2s:0.546, AKo:0.801, AQo:0.989, AJo:0.375, ATo:0.017, KQs:0.750, KJs:0.608, KTs:0.865, K9s:0.011, K8s:0.006, K7s:0.032, K6s:0.028, K4s:0.040, KQo:0.444, KJo:0.913, KTo:0.489, QJs:0.698, QTs:0.928, Q9s:0.221, Q8s:0.069, QJo:0.254, QTo:0.006, JTs:0.354, J8s:0.004, JTo:0.043, T9s:0.053, 76s:0.001` },
          { action: "3bet", min: 0.3, range: `QQ+, JJ:0.198, TT:0.233, 99:0.028, 88:0.254, 77:0.258, 66:0.220, 55:0.437, 44:0.098, 33:0.021, AKs, AQs:0.389, AJs:0.806, ATs:0.122, A8s:0.048, A7s:0.559, A6s:0.903, A5s:0.409, A4s:0.439, A3s:0.364, A2s:0.416, AKo:0.199, AQo:0.011, AJo:0.446, ATo:0.769, A9o:0.104, A8o:0.006, A6o:0.002, A5o:0.120, A4o:0.001, A3o:0.001, KQs:0.032, KJs:0.013, KTs:0.004, K9s:0.218, K8s:0.255, K7s:0.559, K6s:0.667, K5s:0.760, K4s:0.005, K3s:0.079, K2s:0.001, KQo:0.538, KJo:0.054, KTo:0.335, QJs:0.076, Q9s:0.398, Q8s:0.263, Q7s:0.026, Q6s:0.003, Q5s:0.081, Q4s:0.007, QJo:0.359, QTo:0.027, JTs:0.096, J9s:0.379, J8s:0.057, J7s:0.008, J6s:0.012, J5s:0.002, JTo:0.107, T9s:0.789, T8s:0.081, T7s:0.064, T6s:0.003, 98s:0.604, 87s:0.229, 76s:0.043, 54s:0.015` },
          { action: "call", min: 0.3, range: `JJ:0.204, TT:0.008, 99:0.088, 88:0.432, 77:0.719, 66:0.650, 55:0.482, 44:0.221, 33:0.101, 22:0.006, AQs:0.221, AJs:0.194, ATs:0.877, A9s, A8s:0.194, A7s:0.441, A6s:0.025, A5s:0.003, A4s:0.130, A3s:0.027, A2s:0.037, AJo:0.179, ATo:0.215, A9o:0.128, KQs:0.219, KJs:0.379, KTs:0.131, K9s:0.770, K8s:0.647, K7s:0.064, K6s:0.008, K5s:0.001, KQo:0.018, KJo:0.033, KTo:0.072, QJs:0.227, QTs:0.071, Q9s:0.380, Q8s:0.319, Q7s:0.002, QJo:0.270, QTo:0.012, JTs:0.550, J9s:0.614, J8s:0.009, J7s:0.001, JTo:0.021, T9s:0.155, T8s:0.001, 98s:0.121, 97s:0.001, 87s:0.010, 86s:0.001, 76s:0.001, 64s:0.002, 54s:0.009` },
    ],
    answerBuilder: (hand, _weight, options) => ({
      index: answerByRangeSpec(options, hand, PATTERNS.find(p=>p.id==="btn-open").bands, "fold", 0.5),
    }),
  },
  {
    id: "btn open2",
    label: "BTN Open（Unopened）",
    questionBuilder: (hand) => ({
      hand,
      pos: "BTN",
      eff: 15,
      facing: "Unopened",
      stacks: { UTG: 15, MP: 15, CO: 15, BTN: 15, SB: 15, BB: 15 },
      options: ["Fold","open 2bb", "Jam 15bb"],
    }),
    bands: [
          { action: "Jam", min: 0.9, range: `QTs, JTs, KTs, A2s-A8s, QT-KT, A5o-AJo, KQo, 22-88, 99: 0.003, 67s: 0.3, 78s: 0.55` },
          { action: "open", min: 0.9, range: `AQo+, TT+, 99: 0.997, A2o-A5o, KJs+, KJo+, QJs, 54s: 0.50, A9s+, K6s-K9s, Q9s` },
    ],
    answerBuilder: (hand, _weight, options) => ({
      index: answerByRangeSpec(options, hand, PATTERNS.find(p=>p.id==="btn-open").bands, "fold", 0.5),
    }),
  },
];

/* ================= 出題セット生成 ================= */
function sampleN(arr, n) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

function buildQuestionFromPattern(pattern, hand) {
  const qParams = pattern.questionBuilder(hand);
  const optionsBB = (qParams.options || []).map((o) => normalizeOptionToBB(o));

  const answerIndex = answerByRangeSpec(optionsBB, hand, pattern.bands || [], "fold", 0.5); // ✅ここで計算

  return {
    id: `${pattern.id}-${qParams.eff}bb-${hand}`,
    hero: { hand, pos: qParams.pos, eff: qParams.eff, facing: qParams.facing },
    stacks: qParams.stacks,
    options: optionsBB,
    answer: answerIndex,
    note: `${pattern.label} / ${hand} → ${optionsBB[answerIndex]}`,
  };
}


function buildRandomSet(patternId, count, prevFirstHand = null) {
  const pattern = PATTERNS.find((p) => p.id === patternId) || PATTERNS[0];

  // 要望に合わせて「全169」からランダム出題
  const poolHands = ALL_HANDS;
  const picked = sampleN(poolHands, count);

  // 直前の1問目と同じになりやすい場合の軽い回避
  if (prevFirstHand && picked.length > 0 && picked[0] === prevFirstHand) {
    const swap = picked.findIndex((h) => h !== prevFirstHand);
    if (swap > 0) [picked[0], picked[swap]] = [picked[swap], picked[0]];
  }

  return picked.map((hand) => buildQuestionFromPattern(pattern, hand));
}

/* ================= メイン ================= */
export default function PreflopQuiz() {
  const [patternId, setPatternId] = useState(PATTERNS[0].id);
  const [count, setCount] = useState(10);

  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);

  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  // 初回セット生成（起動時に1回）
  useEffect(() => {
    const qs = buildRandomSet(patternId, count);
    setQuestions(qs);
    setStep(0);
    setSelected(null);
    setLocked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function regenerate() {
    const prevFirstHand = questions?.[0]?.hero?.hand || null;
    const qs = buildRandomSet(patternId, count, prevFirstHand);
    setQuestions(qs);
    setStep(0);
    setSelected(null);
    setLocked(false);
  }

  function next() {
    if (!locked) return;
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
      setSelected(null);
      setLocked(false);
    }
  }

  // Enter: 回答/次へ、R: 再生成
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter") {
        if (!locked && selected != null) setLocked(true);
        else if (locked) next();
      } else if (e.key.toLowerCase() === "r") {
        regenerate();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locked, selected, step, questions.length, patternId, count]);

  if (!questions.length) return <div style={styles.wrap}>Loading...</div>;

  const q = questions[step];
  const pattern = PATTERNS.find((p) => p.id === patternId) || PATTERNS[0];
  const probs = probsByRangeSpec(q.options, q.hero.hand, pattern.bands || [], "fold");
  const stacks = q.stacks || Object.fromEntries(POSITIONS6.map((p) => [p, q.hero.eff]));
  const progress = Math.round(((step + 1) / Math.max(1, questions.length)) * 100);

  return (
    <div style={styles.wrap}>
      <h1 style={styles.h1}>Preflop Quiz（PATTERNS × RangeSpec）</h1>

      {/* 設定 */}
      <div style={styles.toolbar}>
        <div style={styles.field}>
          <label>パターン：</label>
          <select value={patternId} onChange={(e) => setPatternId(e.target.value)}>
            {PATTERNS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.field}>
          <label>問題数：</label>
          <input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Number(e.target.value || 10))}
            style={{ width: 72 }}
          />
        </div>

        <button style={styles.secondaryBtn} onClick={regenerate}>
          新しいセット作成（R）
        </button>

        <button
          style={styles.primaryBtn}
          onClick={() => {
            const prevFirstHand = questions?.[0]?.hero?.hand || null;
            const qs = buildRandomSet(patternId, count, prevFirstHand);
            setQuestions(qs);
            setStep(0);
            setSelected(null);
            setLocked(false);
          }}
        >
          この設定で開始
        </button>
      </div>

      {/* 進捗 */}
      <div style={styles.progressWrap}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
        <div style={styles.progressText}>
          {step + 1} / {questions.length}
        </div>
      </div>

      {/* 問題 */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <div>
            <div style={styles.spot}>
              {q.hero.pos} / {q.hero.eff}bb
            </div>
            <div style={styles.facing}>{q.hero.facing}</div>
          </div>
          <div style={styles.hand}>{q.hero.hand}</div>
        </div>

        <PokerTable
          stacks={stacks}
          heroPos={q.hero.pos}
          heroHand={q.hero.hand}
          action={selected != null ? q.options[selected] : null}
          facing={q.hero.facing}
        />

        {locked && <ProbBarChart options={q.options} probs={probs} />}

        <div>
          {q.options.map((opt, i) => {
            const isRight = locked && i === q.answer;
            const isWrong = locked && selected === i && i !== q.answer;
            return (
              <label key={i} style={{ ...styles.choice, ...(isRight ? styles.right : isWrong ? styles.wrong : {}) }}>
                <input
                  type="radio"
                  name={`opt-${q.id}`}
                  value={i}
                  checked={selected === i}
                  onChange={() => !locked && setSelected(i)}
                  disabled={locked}
                  style={{ marginRight: 8 }}
                />
                <span style={styles.optIndex}>{i + 1}.</span> {opt}
              </label>
            );
          })}
        </div>

        {!locked ? (
          <div style={styles.actions}>
            <button style={styles.primaryBtn} onClick={() => setLocked(true)} disabled={selected == null}>
              回答する（Enter）
            </button>
            <span style={styles.hint}>Enter:回答 / R:新セット</span>
          </div>
        ) : (
          <div style={styles.actionsCol}>
            <div style={{ fontWeight: 800 }}>
              正解: <span style={{ fontWeight: 900 }}>{q.options[q.answer]}</span>
            </div>
            <div style={styles.note}>{q.note}</div>
            <button style={styles.primaryBtn} onClick={next} disabled={step === questions.length - 1}>
              次の問題（Enter）
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= スタイル ================= */
const styles = {
  wrap: { maxWidth: 920, margin: "0 auto", padding: 16 },
  h1: { fontSize: 24, fontWeight: 900, marginBottom: 12 },

  toolbar: { display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 12 },
  field: { display: "flex", alignItems: "center", gap: 8 },

  primaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #111",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  },

  progressWrap: { position: "relative", background: "#f3f4f6", height: 8, borderRadius: 999, marginBottom: 8 },
  progressBar: { position: "absolute", inset: 0, height: 8, borderRadius: 999, background: "#111" },
  progressText: { textAlign: "right", fontSize: 12, marginTop: 6, opacity: 0.7 },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 1px 2px rgba(0,0,0,.04)",
    marginBottom: 12,
  },
  cardHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  spot: { fontWeight: 800 },
  facing: { fontSize: 12, opacity: 0.7 },
  hand: { fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", fontSize: 22, fontWeight: 900 },

  choice: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    marginBottom: 8,
    background: "#fff",
  },
  right: { borderColor: "#86efac", background: "#f0fdf4" },
  wrong: { borderColor: "#fecaca", background: "#fef2f2" },
  optIndex: { fontWeight: 800, width: 18, display: "inline-block" },

  actions: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 },
  actionsCol: { display: "flex", flexDirection: "column", gap: 8, marginTop: 8 },
  hint: { fontSize: 12, opacity: 0.7 },
  note: { fontSize: 12, opacity: 0.75 },

  /* poker table */
  tableWrap: { position: "relative", width: "min(92vw, 720px)", aspectRatio: "1 / 1", margin: "0 auto 12px" },
  tableCircle: {
    position: "absolute",
    inset: 0,
    margin: "auto",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "radial-gradient(circle at 50% 50%, #065f46 0%, #064e3b 60%, #052e2b 100%)",
    boxShadow: "inset 0 0 0 8px rgba(255,255,255,0.06), 0 12px 30px rgba(0,0,0,.25)",
  },
  seat: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    minWidth: "clamp(72px, 14vw, 110px)",
    textAlign: "center",
    padding: 8,
    borderRadius: 12,
    background: "rgba(255,255,255,.9)",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 6px rgba(0,0,0,.08)",
  },
  seatHero: { border: "2px solid #111", boxShadow: "0 4px 10px rgba(0,0,0,.18)" },

  // SB/BB 強調
  sbSeat: { border: "2px solid #60a5fa", background: "rgba(219,234,254,.9)" },
  bbSeat: { border: "2px solid #2563eb", background: "rgba(191,219,254,.9)" },

  seatPos: { fontSize: 12, fontWeight: 800 },
  seatStack: { fontSize: 12, opacity: 0.85 },
  seatHand: { fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", fontWeight: 900, marginTop: 2 },

  badge: { display: "inline-block", marginTop: 6, padding: "4px 8px", borderRadius: 999, fontSize: 12, fontWeight: 800 },

  // ブラインドチップ
  chipWrap: { position: "absolute", display: "flex", alignItems: "center", gap: 6, pointerEvents: "none" },
  chipWrapSB: { bottom: -8, right: -10 },
  chipWrapBB: { bottom: -8, left: -10 },
  chip: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    boxShadow: "0 1px 3px rgba(0,0,0,.3), inset 0 0 0 2px rgba(255,255,255,.7)",
  },
  chipSB: { background: "radial-gradient(circle at 35% 35%, #fde68a 0%, #f59e0b 60%, #b45309 100%)" },
  chipBB: { background: "radial-gradient(circle at 35% 35%, #93c5fd 0%, #3b82f6 60%, #1e40af 100%)" },
  chipText: {
    fontSize: 12,
    fontWeight: 900,
    background: "rgba(255,255,255,.92)",
    border: "1px solid #e5e7eb",
    padding: "2px 6px",
    borderRadius: 999,
  },
  probWrap: {
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  padding: 12,
  margin: "8px 0 12px",
  background: "#fff",
  },
  probTitle: { fontWeight: 900, marginBottom: 8, fontSize: 13 },
  probGrid: { display: "flex", flexDirection: "column", gap: 8 },
  probRow: { display: "grid", gridTemplateColumns: "120px 1fr 60px", gap: 10, alignItems: "center" },
  probLabel: { fontSize: 12, fontWeight: 800, opacity: 0.85 },
  probBarOuter: { height: 10, background: "#f3f4f6", borderRadius: 999, overflow: "hidden", border: "1px solid #e5e7eb" },
  probBarInner: { height: 10, background: "#111", borderRadius: 999 },
  probPct: { textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: 12, fontWeight: 900, opacity: 0.85 },
  chipWrapOpen: { top: -10, left: "50%", transform: "translateX(-50%)" },
  chipOpen: { background: "radial-gradient(circle at 35% 35%, #e5e7eb 0%, #9ca3af 60%, #374151 100%)" },
};
