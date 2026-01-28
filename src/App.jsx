import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATTERNS } from "./question.jsx";

/**
 * Preflop Quiz – Pattern + RangeSpec answer
 * - 6-max テーブル可視化（全員スタックBB表示）
 * - SB/BB はブラインド支払いをチップ表示で可視化
 * - 出題ハンドはランダム（デフォルト10問セット）
 * - PATTERNSの回答は「action + range(HAND_RANGE_SPEC形式)」で定義
 * - Enter: 回答/次へ、R: 新しいセット作成
 */

/* ================= 基本 ================= */
const TABLE_SIZES = {
  3: ["BTN", "SB", "BB"],
  4: ["CO", "BTN", "SB", "BB"],
  5: ["HJ", "CO", "BTN", "SB", "BB"],
  6: ["LJ", "HJ", "CO", "BTN", "SB", "BB"],
  7: ["UTG", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
  8: ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
  9: ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
};


const BLIND_SIZES = { SB: 0.5, BB: 1 };

const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const RANK_INDEX = Object.fromEntries(RANKS.map((r, i) => [r, i]));

function getStack(stacks, pos, idx) {
  if (Array.isArray(stacks)) return stacks[idx];
  return stacks[pos];
}

// SP or tablet判定
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth <= breakpoint
  );

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}
function circularLayout(positions, radius = 40) {
  const step = 360 / positions.length;
  console.log(positions.length);
  console.log(positions);
  const start = -90;
  const coords = {};

  positions.forEach((pos, i) => {
    coords[pos] = polarToXY(radius, start + step * i);
  });

  return coords;
}

function calcBasePotBB() {
  return Number(BLIND_SIZES.SB + BLIND_SIZES.BB); // 0.5 + 1 = 1.5
}

function calcExtraPotByPatternId(patternId, facing, positions) {
  const id = String(patternId || "");
  const facingSize = String(facing || "");
  console.log(facingSize);
  const lower = id.toLowerCase();

  let extra = 0;

  // "chase" を含む場合：1人につき0.25BB
  if (lower.includes("chase")) {
    extra += 0.25 * positions.length;
  }

  // "Ante" を含む場合：+1BB（合計）
  if (lower.includes("ante")) {
    extra += 1.0;
  }

  // facing openスタックを追加する
  if(facingSize.split(" ")[1] && facingSize.split(" ")[1].includes("open")){
    // facing: "UTG open 2.3x",
    let size = Number(facingSize.split(" ")[2].replace("x",""));
    extra += size;
  }

  return Number(extra);
}

function calcTotalPotBB(patternId, facing, positions) {
  return calcBasePotBB() + calcExtraPotByPatternId(patternId, facing, positions);
}

/**
 * 例: AA:0.991, 88-77, AQo-AJo, KJs:0.262 ...
 * - weight省略は1.0として扱う
 * - "AQo-AJo" のように weightが無い場合も含められる（=1.0）
 */
function expandPairRange(token) {
  const m = token.match(/^([2-9TJQKA])\1(?:-([2-9TJQKA])\2)?$/i);
  const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
  const RANK_INDEX = Object.fromEntries(RANKS.map((r, i) => [r, i]));
  console.log(m)
  if (!m) return [];
  const start = m[1].toUpperCase();
  const end = (m[2] || m[1]).toUpperCase();
  const s = RANK_INDEX[start];
  const e = RANK_INDEX[end];
  if (s == null || e == null) return [];
  const out = [];
  for (let i = Math.min(s, e); i <= Math.max(s, e); i++) out.push(RANKS[i] + RANKS[i]);
  console.log(out)
  return out;
}

function buildQuestionFromSpot(group, spot, hand) {
  const qParams = spot.questionBuilder(hand);
  const optionsBB = (qParams.options || []).map(normalizeOptionToBB);

  const probs = probsByRangeSpec(optionsBB, hand, spot.bands || [], "fold");
  const answerIndex = answerByMaxProb(optionsBB, probs, "fold");

  return {
    id: `${group.id}::${spot.id}-${qParams.eff}bb-${hand}`,
    groupId: group.id,
    spotId: spot.id,
    hero: { hand, pos: qParams.pos, eff: qParams.eff, facing: qParams.facing },
    stacks: qParams.stacks,
    options: optionsBB,
    answer: answerIndex,
    note: `${group.label} / ${spot.label} / ${hand} → ${optionsBB[answerIndex]}`,
  };
}

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildRandomSet(groupId, count, prevFirst = null) {
  const group = PATTERNS.find((p) => p.id === groupId) || PATTERNS[0];
  const spots = group.spots || [];

  // 保険：spots が無い旧形式PATTERNも動くように
  const isLegacy = !Array.isArray(spots) || spots.length === 0;

  const poolHands = ALL_HANDS;
  const hands = sampleN(poolHands, count);

  if (prevFirst && hands.length && hands[0] === prevFirst) {
    const swap = hands.findIndex((h) => h !== prevFirst);
    if (swap > 0) [hands[0], hands[swap]] = [hands[swap], hands[0]];
  }

  return hands.map((hand) => {
    if (isLegacy) {
      // 旧：groupがそのまま spot 相当
      return buildQuestionFromPattern(group, hand);
    }
    const spot = pickOne(spots);
    return buildQuestionFromSpot(group, spot, hand);
  });
}

// function buildRandomSet(patternId, count, prevFirstHand = null) {
//   const pattern = PATTERNS.find((p) => p.id === patternId) || PATTERNS[0];

//   // 要望に合わせて「全169」からランダム出題
//   const poolHands = ALL_HANDS;
//   const picked = sampleN(poolHands, count);

//   // 直前の1問目と同じになりやすい場合の軽い回避
//   if (prevFirstHand && picked.length > 0 && picked[0] === prevFirstHand) {
//     const swap = picked.findIndex((h) => h !== prevFirstHand);
//     if (swap > 0) [picked[0], picked[swap]] = [picked[swap], picked[0]];
//   }

//   return picked.map((hand) => buildQuestionFromPattern(pattern, hand));
// }

function usePrefersDark() {
  const [dark, setDark] = React.useState(
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = e => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return dark;
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
    console.log(raw)
    console.log(handPartRaw)
    console.log(weightPartRaw)
    console.log(handPart)

    if (!handPart) continue;

    let hands = [];

    if (handPart.endsWith("+")) {
      hands = expandPlusRange(handPart);
      if (!hands.length) continue; // パース不能なら捨てる
    }
    // ペア（66, 88-77）
    else if (/^([2-9TJQKA])\1(?:-([2-9TJQKA])\2)?$/i.test(handPart)) {
      hands = expandPairRange(handPart);
    }
    // non-pair range（AQo-AJo など）※先頭ランク固定
    else if (/^([2-9TJQKA])([2-9TJQKA])([so])(?:-\1([2-9TJQKA])\3)?$/i.test(handPart)) {
      hands = expandNonPairRange(handPart);
    }
    // 単体 non-pair
    else if (/^[2-9TJQKA][2-9TJQKA][so]$/i.test(handPart)) {
      hands = [handPart.toUpperCase()];
    } 
    // 単体ペア
    else if (/^[2-9TJQKA][2-9TJQKA]$/i.test(handPart)) {
      hands = [handPart.toUpperCase()];
    }
    else {
      continue;
    }

    console.log(hands);

    const w = weightPart == null || weightPart === "" ? 1.0 : Number(weightPart);
    const weight = Number.isFinite(w) ? w : 1.0;

    for (const h of hands) map.set(h.toUpperCase(), weight);
  }

  console.log(map)

  return map;
}

function normalizeRangeText(s) {
  return String(s || "")
    .replace(/[‐-‒–—−ー－]/g, "-")  // ダッシュ系を全部 "-"
    .replace(/\s*-\s*/g, "-")
    .replace(/\s*-\s*/g, "-");      // "88 - 77" を "88-77" に
}

/* range文字列 -> Map をキャッシュ（毎回parseしない） */
const __rangeCache = new Map();
function getRangeMap(rangeStr) {
  const key = normalizeRangeText(rangeStr).replace(/\s+/g, " ").trim();
  console.log(key);
  if (!key) return new Map();
  if (__rangeCache.has(key)) return __rangeCache.get(key);
  const m = parseRangeSpec(key);
  console.log(m)
  __rangeCache.set(key, m);
  return m;
}

/** optionsの先頭単語で action を探す（open/call/3bet/jam/fold など） */
function findIndexByAction(options, action) {
  const target = actionKeyFromBand(action);
  if (!target) return 0;

  const opts = (options || []).map(o => actionKeyFromOption(o));

  // まずは完全一致（"3bet 10bb" などを正確に拾う）
  let idx = opts.findIndex(k => k === target);
  if (idx !== -1) return idx;

  // 次に「先頭単語一致」をフォールバック（"open" と "open 2.2bb" の互換用）
  const head = target.split(/\s+/)[0];
  idx = opts.findIndex(k => k.split(/\s+/)[0] === head);
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
function answerByRangeSpec(options, hand, bands, fallbackAction = "fold", defaultMin = 0.001) {
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

// bands の range(weight) を使って action別の「重み」を作り、
// 合計が 1.0 未満なら不足分を fold に寄せる（= fold が残り確率）
// 合計が 1.0 を超える場合だけ正規化して 1.0 に揃える
// bands の range(weight) を「確率」として解釈し、足りない分は fold に回す
function probsByRangeSpec(options, hand, bands, fallbackAction = "fold") {
  const h = (hand || "").toUpperCase();

  // options を「全文キー」で定義（"3bet 6bb" と "3bet 10bb" を分ける）
  const optionKeys = (options || []).map(actionKeyFromOption);

  const weights = Object.fromEntries(optionKeys.map(k => [k, 0]));

  for (const b of bands || []) {
    const bandKey = actionKeyFromBand(b.action);
    const rmap = getRangeMap(b.range);
    const w = Number(rmap.get(h) ?? 0);
    if (w <= 0) continue;

    // 1) 完全一致加算
    if (bandKey in weights) {
      weights[bandKey] += w;
      continue;
    }

    // 2) サイズ無し action 用に、先頭単語一致に加算（例: "open" -> "open 2.2bb"）
    const bandHead = bandKey.split(/\s+/)[0];
    for (const ok of optionKeys) {
      if (ok.split(/\s+/)[0] === bandHead) {
        weights[ok] += w;
      }
    }
  }

  // fold の「残り」：options の中に fold がある場合だけ残りを入れる
  const foldKey = optionKeys.find(k => k.split(/\s+/)[0] === "fold");
  if (foldKey) {
    const nonFoldSum = Object.entries(weights)
      .filter(([k]) => k !== foldKey)
      .reduce((a, [, v]) => a + v, 0);
    weights[foldKey] = Math.max(0, 1 - nonFoldSum);
  }

  // 正規化
  const sum = Object.values(weights).reduce((a, v) => a + v, 0);
  if (sum > 0) {
    for (const k in weights) weights[k] /= sum;
  }
  return weights;
}


// 文字列一致用：大小/余計な空白/表記ゆれ(x→bb)を潰したキー
function actionKeyFromOption(opt) {
  return String(opt || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/all[\s-]?in/g, "jam") // ★ ALLIN / ALL-IN を jam に寄せる
    .replace("ALLIN", "jam") // ★ ALLIN / ALL-IN を jam に寄せる
    .replace(/x\b/g, "bb"); // "2x" -> "2bb"
}

// band.action 用（"JAM" みたいなのも吸収）
function actionKeyFromBand(action) {
  return String(action || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/all[\s-]?in/g, "jam");    // ★ ALLIN / ALL-IN -> jam
}


function answerByMaxProb(options, probs, fallbackAction="fold") {
  let bestKey = actionKeyFromOption(fallbackAction);
  let best = 0;

  for (const opt of options || []) {
    const key = actionKeyFromOption(opt);
    const p = Number(probs?.[key] ?? 0);
    if (p > best) { best = p; bestKey = key; }
  }

  // 最大確率が極小なら fold（fold option がある前提で index を返す）
  if (best < 0.1) {
    const foldIdx = (options || []).findIndex(o => actionKeyFromOption(o).startsWith("fold"));
    return foldIdx !== -1 ? foldIdx : 0;
  }

  // bestKey を options の index に戻す
  const idx = (options || []).findIndex(o => actionKeyFromOption(o) === bestKey);
  return idx !== -1 ? idx : 0;
}

/* ================= テーブル可視化 ================= */
function polarToXY(r, deg) {
  const rad = (deg * Math.PI) / 180;
  return { left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%` };
}

function badgeStyleFor(action) {
  if (!action) return { background: "#e5e7eb", color: "#111" };
  const a = action.toLowerCase();
  if (a.startsWith("open")) return { background: "#f55353", color: "#1e40af" };
  if (a.startsWith("call")) return { background: "#5ab966", color: "#92400e" };
  if (a.startsWith("3bet") || a.startsWith("4bet")) return { background: "#d83b3b", color: "#9f1239" };
  if (a.startsWith("jam") || a.includes("all-in") || a.includes("allin")) {
    return { background: "#ab1717", color: "#065f46" };
  }
  if (a.startsWith("fold")) return { background: "#3b809b", color: "#999" };
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
  // const m = s.match(/^(UTG|MP|CO|BTN|SB|BB)\s+open\s+([0-9]+(?:\.[0-9]+)?)\s*(x|bb)\b/i);
  const m = s.match(/^(UTG(?:\+\d)?|LJ|MP|CO|BTN|SB|BB)\s+open\s+([0-9.]+)\s*(x|bb)/i);

  if (!m) return null;

  const pos = m[1].toUpperCase();
  const num = Number(m[2]);
  if (!Number.isFinite(num) || num <= 0) return null;

  // x でも bb でも UI上は bb として表示（あなたの要望: "2x"→"2BB支払い"）
  const amountBB = num;

  return { pos, amountBB };
}

function PokerTable({ positions, stacks, heroPos, heroHand, action, facing, patternId }) {
  const coords = useMemo(
    () => circularLayout(positions),
     [positions]
  );
  const facingOpen = useMemo(() => parseFacingOpen(facing), [facing]);
  const potBB = useMemo(
    () => calcBasePotBB() + calcExtraPotByPatternId(patternId, facing, positions),
    [patternId, facing, positions]
  );

  return (
    <div style={styles.tableWrap}>
      <div style={styles.tableCircle}>
        <div style={styles.potCenter}>
          <div style={styles.potLabel}>POT</div>
          <div style={styles.potValue}>{Math.round(potBB * 100) / 100}bb</div>
        </div>
        {positions.map((pos, idx) => {
          const c = coords[pos];
          const heroIndex = positions.indexOf(heroPos);
          const isHero = idx === heroIndex;
          const isSB = pos === "SB";
          const isBB = pos === "BB";
          const isOpener = facingOpen?.pos === pos;
          const openAmt = facingOpen?.amountBB ?? 0;
          const badge = badgeStyleFor(isHero ? action : null);
          const stackBB = getStack(stacks, pos, idx);
          console.log(stackBB);


          return (
            <div key={pos} style={{ ...styles.seat, ...coords[pos] }}>
              <div style={styles.seatPos}>{pos}</div>
              <div style={styles.seatStack}>[{stackBB}bb]</div>
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
    const key = actionKeyFromOption(opt);
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

// プリフロレンジを表示するモーダル機能
function fillStyle(p) {
  const ratio = Math.max(0, Math.min(1, Number(p ?? 0)));

  return {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "100%",          // ← 縦100%
    width: `${ratio * 100}%`, // ← 横に割合で塗る
    backgroundColor: "#ef4444", // 赤（画像に近い）
    pointerEvents: "none",
  };
}
function RangeMatrixModal({
  open,
  onClose,
  title,
  bands,
  options,
  focusKey,
  setFocusKey,
}) {
  if (!open) return null;

  const isMobile = useIsMobile();
  const optionKeys = (options || []).map(actionKeyFromOption);

  // best / actionKey のタブ
  const tabs = ["best", ...optionKeys];

  const data = useMemo(() => {
    const rows = [];
    for (let i = 0; i < RANKS.length; i++) {
      const r1 = RANKS[i];
      const row = [];
      for (let j = 0; j < RANKS.length; j++) {
        const r2 = RANKS[j];

        // 169ハンド表記に変換（対角=ペア、上=スーテッド、下=オフ）
        let hand;
        if (i === j) hand = r1 + r2;
        else if (i < j) hand = r1 + r2 + "s";
        else hand = r2 + r1 + "o";

        const probs = probsByRangeSpec(options, hand, bands || [], "fold");

        // best action を決める
        let bestKey = optionKeys[0] || "fold";
        let best = -1;
        for (const k of optionKeys) {
          const p = Number(probs?.[k] ?? 0);
          if (p > best) {
            best = p;
            bestKey = k;
          }
        }

        row.push({
          hand,
          probs,
          bestKey,
          bestP: best < 0 ? 0 : best,
        });
      }
      rows.push(row);
    }
    return rows;
  }, [bands, options]);

function cellStyle(cell) {
  const key = focusKey === "best" ? cell.bestKey : focusKey;
  const optLabel =
    (options || []).find(o => actionKeyFromOption(o) === key) || key;

  const base = badgeStyleFor(optLabel);
  const p = Number(cell.probs?.[key] ?? 0);

  // 参加頻度（0〜1）
  const ratio =
    focusKey === "best"
      ? Math.max(0, Math.min(1, cell.bestP))
      : Math.max(0, Math.min(1, p));

  const percent = (ratio * 100).toFixed(1); // 例: 39.5

  return {
    ...styles.matrixCell,
    backgroundImage: `linear-gradient(
      to right,
      ${base.background},
      ${base.background} ${percent}%,
      #e5e7eb ${percent}%,
      #e5e7eb 100%
    )`,
    color: base.color,
    opacity: 1, // ← opacityは使わない
    width: isMobile ? "25px" : "35px",
    height: isMobile ? "30px" : "40px",
  };
}

  function cellText(cell) {
    if (focusKey === "best") return (cell.bestP * 100).toFixed(0);
    const p = Number(cell.probs?.[focusKey] ?? 0);
    return (p * 100).toFixed(0);
  }

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <div style={styles.modalTitle}>{title}</div>
          <button style={styles.modalCloseBtn} onClick={onClose}>×</button>
        </div>

        <div style={styles.modalTabs}>
          {tabs
            .filter(k => k !== "best")
            .map((k) => (
            <button
              key={k}
              style={{
                ...styles.modalTab,
                ...(focusKey === k ? styles.modalTabActive : {}),
              }}
              onClick={() => setFocusKey(k)}
            >
              {/* {k === "best" ? "BEST" : (options || []).find(o => actionKeyFromOption(o) === k) || k} */}
              {k === "best" ? "" : (options || []).find(o => actionKeyFromOption(o) === k) || k}
            </button>
          ))}
        </div>

        <div style={styles.matrixWrap}>
          <div 
            style={{
              ...styles.matrixGrid,
              gridTemplateColumns: isMobile ? "repeat(13, minmax(26px, 0fr))" : "repeat(13, minmax(44px, 0fr))",
            }}
          >
            {data.map((row, ri) =>
              row.map((cell, ci) => (
                <div key={`${ri}-${ci}`} 
                  style={cellStyle(cell)} 
                  title={cell.hand}
                >
                  <div 
                    style={{
                      ...styles.matrixHand,
                      fontSize: isMobile ? "11px" : "12px",
                    }}
                  >
                    {cell.hand}
                  </div>
                  {/* <div style={styles.matrixVal}>{cellText(cell)}</div> */}
                </div>
              ))
            )}
          </div>
        </div>

        <div style={styles.modalFoot}>
          数字は確率(%)です（RangeSpec weight → probsByRangeSpec）。
        </div>
      </div>
    </div>
  );
}


/* ================= 出題セット生成 ================= */
function sampleN(arr, n) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

const DEFAULT_FALLBACK = "fold";
const DEFAULT_MIN = 0.5;

function getAnswerIndex(pattern, hand, optionsBB) {
  return answerByRangeSpec(optionsBB, hand, pattern.bands || [], DEFAULT_FALLBACK, DEFAULT_MIN);
}




function buildQuestionFromPattern(pattern, hand) {
  const qParams = pattern.questionBuilder(hand);
  const optionsBB = (qParams.options || []).map(normalizeOptionToBB);

  const probs = probsByRangeSpec(optionsBB, hand, pattern.bands || [], "fold");
  const answerIndex = answerByMaxProb(optionsBB, probs, "fold");

  return {
    id: `${pattern.id}-${qParams.eff}bb-${hand}`,
    hero: { hand, pos: qParams.pos, eff: qParams.eff, facing: qParams.facing },
    stacks: qParams.stacks,
    options: optionsBB,
    answer: answerIndex,
    note: `${pattern.label} / ${hand} → ${optionsBB[answerIndex]}`,
  };
}

function defaultAnswerBuilder(pattern, hand, _weight, optionsBB) {
  return {
    index: answerByRangeSpec(optionsBB, hand, pattern.bands || [], "fold", 0.5),
  };
}

/* ================= メイン ================= */
export default function PreflopQuiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDark = usePrefersDark();


  const navPatternId = location.state?.patternId;
  const navCount = location.state?.count;

  const [patternId, setPatternId] = useState(() => navPatternId ?? PATTERNS[0].id);
  const [count, setCount] = useState(() => (Number.isFinite(navCount) ? navCount : 10));

  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const [rangeOpen, setRangeOpen] = useState(false);
  const [rangeFocusKey, setRangeFocusKey] = useState("best"); // "best" or actionKey

  const navTableSize = location.state?.tableSize;
  console.log(location);
  console.log(location.state.tableSize);

  const [tableSize, setTableSize] = useState(() =>
    Number.isFinite(navTableSize) ? navTableSize : 6
  );

  useEffect(() => {
    if (Number.isFinite(navTableSize)) setTableSize(navTableSize);
  }, [navTableSize]);

  // const [tableSize, setTableSize] = useState(6);
  const positions = useMemo(() => TABLE_SIZES[tableSize], [tableSize]);



  // Home からの遷移で state が来た時に反映（同一コンポーネント再利用時も安全）
  useEffect(() => {
    if (navPatternId) setPatternId(navPatternId);
    if (Number.isFinite(navCount)) setCount(navCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navPatternId, navCount]);

  // patternId / count が変わったら問題セット作り直し
  useEffect(() => {
    const qs = buildRandomSet(patternId, count);
    setQuestions(qs);
    setStep(0);
    setSelected(null);
    setLocked(false);
  }, [patternId, count]);

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
  // const pattern = PATTERNS.find((p) => p.id === patternId) || PATTERNS[0];
  const pattern = PATTERNS.find((p) => p.id === patternId) || PATTERNS[0];
  const spot =
    pattern.spots?.find((s) => s.id === q.spotId) ||
    pattern; // 旧形式fallback

  const probs = probsByRangeSpec(q.options, q.hero.hand, spot.bands || [], "fold");
  const stacks = q.stacks || Object.fromEntries(positions.map((p) => [p, q.hero.eff]));
  const progress = Math.round(((step + 1) / Math.max(1, questions.length)) * 100);
  console.log(q.stacks);

  // setTableSize(q.stacks);
  // const positions = useMemo(() => TABLE_SIZES[tableSize], [tableSize]);

  return (
    <div
      style={{
        ...styles.wrap,
        background: isDark ? "#0f172a" : "#ffffff",
        color: isDark ? "#e5e7eb" : "#111111",
      }}
    >
      <h1 style={styles.h1}>Preflop Quiz（PATTERNS × RangeSpec）</h1>

      <button
        style={styles.backBtn}
        onClick={() => navigate("/")}
      >
        ← 問題選択に戻る
      </button>

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
      <div style={styles.card(isDark)}>
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
          positions={positions}
          stacks={q.stacks}
          heroPos={q.hero.pos}
          heroHand={q.hero.hand}
          action={locked && selected != null ? q.options[selected] : ""}
          facing={q.hero.facing}
          patternId={patternId}
        />

        {locked && (
          <>
            <div style={styles.rangeBtnRow}>
              <button
                style={styles.secondaryBtn}
                onClick={() => {
                  setRangeFocusKey("best");
                  setRangeOpen(true);
                }}
              >
                レンジを見る（モーダル）
              </button>
            </div>
            <ProbBarChart options={q.options} probs={probs} />
          </>
        )}

        <RangeMatrixModal
          open={rangeOpen}
          onClose={() => setRangeOpen(false)}
          title={`${pattern.label} / ${q.hero.pos} ${q.hero.eff}bb / ${q.hero.facing}`}
          bands={spot.bands || []}
          options={q.options}
          focusKey={rangeFocusKey}
          setFocusKey={setRangeFocusKey}
        />

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
    color: "#444",
  },

  progressWrap: { position: "relative", background: "#f3f4f6", height: 8, borderRadius: 999, marginBottom: 8 },
  progressBar: { position: "absolute", inset: 0, height: 8, borderRadius: 999, background: "#111" },
  progressText: { textAlign: "right", fontSize: 12, marginTop: 6, opacity: 0.7 },

  cardHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  spot: { fontWeight: 800 },
  facing: { fontSize: 12, opacity: 0.7 },
  hand: { fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", fontSize: 22, fontWeight: 900 },
  card: (dark) => ({
    border: "1px solid " + (dark ? "#334155" : "#e5e7eb"),
    borderRadius: 16,
    padding: 16,
    background: dark ? "#020617" : "#ffffff",
    boxShadow: dark
      ? "0 1px 2px rgba(0,0,0,.6)"
      : "0 1px 2px rgba(0,0,0,.04)",
    marginBottom: 12,
  }),


  choice: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    marginBottom: 8,
    background: "#fff",
    color: "#444",
  },
  right: { borderColor: "#86efac", background: "#f0fdf4" },
  wrong: { borderColor: "#fecaca", background: "#fef2f2" },
  optIndex: { fontWeight: 800, width: 18, display: "inline-block" },

  actions: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 },
  actionsCol: { display: "flex", flexDirection: "column", gap: 8, marginTop: 8 },
  hint: { fontSize: 12, opacity: 0.7 },
  note: { fontSize: 12, opacity: 0.75 },

  /* poker table */
  tableWrap: { position: "relative", width: "min(92vw, 720px)", aspectRatio: "3 / 2", margin: "0 auto 12px" },
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
    padding: 3,
    borderRadius: 12,
    background: "rgba(255,255,255,.9)",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 6px rgba(0,0,0,.08)",
    color: "#444",
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
  chipWrapSB: { bottom: 0, right: -70 },
  chipWrapBB: { bottom: 0, left: 80 },
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
    color: "#444",
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
  potCenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2px 0px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.92)",
    border: "1px solid rgba(229,231,235,0.9)",
    boxShadow: "0 6px 18px rgba(0,0,0,.18)",
    textAlign: "center",
    minWidth: 110,
    pointerEvents: "none",
    color: "#444",
  },
  potLabel: { fontSize: 12, fontWeight: 900, letterSpacing: 0.5, opacity: 0.8 },
  potValue: { fontSize: 18, fontWeight: 900, fontVariantNumeric: "tabular-nums" },
  backBtn: {
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    padding: "6px 12px",
    background: "#fff",
    cursor: "pointer",
    marginBottom: 12,
    fontSize: 14,
    color: "#444",
  },
  rangeBtnRow: { marginTop: 8, marginBottom: 8, display: "flex", gap: 8, justifyContent: "flex-end" },

  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 9999 },
  modalBody: { width: "min(570px, 90vw)", maxHeight: "92vh", overflow: "auto", borderRadius: 14, background: "#111827", color: "#fff", padding: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.35)" },
  modalHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "6px 6px 10px" },
  modalTitle: { fontSize: 16, fontWeight: 900 },
  modalCloseBtn: { border: "none", background: "transparent", color: "#fff", fontSize: 24, cursor: "pointer", padding: "0 8px" },

  modalTabs: { display: "flex", flexWrap: "wrap", gap: 6, padding: "0 6px 10px" },
  modalTab: {
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  borderRadius: 999,
  padding: "6px 10px",
  cursor: "pointer",
  fontWeight: 800,
  fontSize: 12,

  // ★追加：長文で崩れない
  maxWidth: 160,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
},
  modalTabActive: { background: "rgba(255,255,255,0.18)" },

  matrixWrap: { padding: 6 },
  matrixGrid: { display: "grid", gridTemplateColumns: "repeat(13, minmax(44px, 0fr))", gap: 0 },
  matrixHand: { fontSize: 12, fontWeight: 900, lineHeight: 1 },
  matrixVal: { fontSize: 12, fontWeight: 900, textAlign: "right", opacity: 0.95 },

  modalFoot: { padding: "6px 10px 10px", opacity: 0.8, fontSize: 12 },
  matrixCell: {
    position: "relative",
    width: 35,
    height: 40,
    border: "1px solid #1f1f1f",
    background: "#121212",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 600,
    color: "#e5e7eb",
    overflow: "hidden",
  },
  cellLabel: {
    position: "relative",
    zIndex: 1, // ← バーより前面に文字
  },
};
