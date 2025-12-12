import React, { useEffect, useMemo, useState } from "react";

/**
 * Preflop Quiz – Pattern + RangeSpec answer
 * - 6-max テーブル可視化（全員スタックBB表示）
 * - SB/BB はブラインド支払いをチップ表示で可視化
 * - 出題ハンドは常にランダム（デフォルト10問セット）
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
  const out = [];
  for (let i = Math.min(s, e); i <= Math.max(s, e); i++) out.push(RANKS[i] + RANKS[i]);
  return out;
}

function expandNonPairRange(token) {
  // AKs / AQo-AJo など
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
  const out = [];
  for (let i = Math.min(s, e); i <= Math.max(s, e); i++) out.push(a + RANKS[i] + sfx);
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
    if (/^[2-9TJQKA]\1(?:-([2-9TJQKA])\2)?$/i.test(handPart)) hands = expandPairRange(handPart);
    else if (/^[2-9TJQKA][2-9TJQKA][so](?:-[2-9TJQKA][2-9TJQKA][so])?$/i.test(handPart))
      hands = expandNonPairRange(handPart);
    else if (/^[2-9TJQKA][2-9TJQKA]$/i.test(handPart)) hands = [handPart.toUpperCase()];
    else if (/^[2-9TJQKA][2-9TJQKA][so]$/i.test(handPart)) hands = [handPart.toUpperCase()];
    else continue;

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
  // callがサイズ無しなら見た目だけ補う（Unopened系なら0でも良いがUI用）
  if (txt.startsWith("call") && !txt.match(/[0-9]/)) return "Call";
  if (txt.startsWith("fold")) return "Fold 0bb";
  if (txt.startsWith("limp")) return "Limp 1bb";
  return opt;
}

function PokerTable({ stacks, heroPos, heroHand, action }) {
  const coords = useMemo(() => sixMaxLayout(), []);
  return (
    <div style={styles.tableWrap}>
      <div style={styles.tableCircle}>
        {POSITIONS6.map((pos) => {
          const c = coords[pos];
          const isHero = pos === heroPos;
          const isSB = pos === "SB";
          const isBB = pos === "BB";
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
            </div>
          );
        })}
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
      options: ["Fold", "Open 2.2x", "Open 3x", "Limp"],
    }),
    // 원하는形式: action + range(spec文字列) で定義
    answerBuilder: (hand, _weight, options) => ({
      index: answerByRangeSpec(
        options,
        hand,
        [
          {
            action: "open",
            min: 0.5,
            range: `
AA:0.991, KK:0.991, QQ:0.999, JJ:0.999, TT:0.988, 99:0.998, 88-77,
AKs:0.991, AQs:0.995, AJs:0.989, ATs:0.976, A9s:0.001,
AKo:0.989, AQo-AJo, ATo:0.001, KQs:0.999, KJs:0.262
`.replace(/\n/g, " "),
          },
          // foldを明示したい場合はここに書けます（無くてもfallbackでfoldになります）
          { action: "fold", min: 0.0, range: `27o:1.000` },
        ],
        "fold",
        0.5
      ),
    }),
  },
  // 例: SB vs BTN open のパターンも同じ記法で作れます
  {
    id: "sb-vs-btn",
    label: "SB vs BTN 2.2x",
    questionBuilder: (hand) => ({
      hand,
      pos: "SB",
      eff: 25,
      facing: "BTN open 2.2x",
      stacks: { UTG: 25, MP: 25, CO: 25, BTN: 25, SB: 25, BB: 25 },
      options: ["Fold", "Call", "3bet 7bb", "Jam 25bb"],
    }),
    answerBuilder: (hand, _weight, options) => ({
      index: answerByRangeSpec(
        options,
        hand,
        [
          { action: "3bet", min: 0.9, range: `AA:1.0, KK:1.0, AKs:1.0, AQs:0.995` },
          { action: "call", min: 0.5, range: `AQs:0.995, AJs:0.989, KQs:0.999, KJs:0.262` },
        ],
        "fold",
        0.5
      ),
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
  const answerObj = pattern.answerBuilder(hand, null, optionsBB);

  return {
    id: `${pattern.id}-${qParams.eff}bb-${hand}`,
    hero: { hand, pos: qParams.pos, eff: qParams.eff, facing: qParams.facing },
    stacks: qParams.stacks,
    options: optionsBB,
    answer: answerObj.index,
    note: `${pattern.label} / ${hand} → ${optionsBB[answerObj.index]}`,
  };
}

function buildRandomSet(patternId, count, prevFirstHand = null) {
  const pattern = PATTERNS.find((p) => p.id === patternId) || PATTERNS[0];

  // 使えるハンド集合は「そのパターンのbandsに出てくるrangeから総取り」でもOKだが、
  // ここでは簡単に「最初のband range」を母集団にしています（必要なら拡張可）
  const baseBands = pattern.answerBuilder("__dummy__", null, ["Fold", "Open 2.2bb"]).index; // dummy
  // ↑この行は使わない（副作用避け）。代わりに下のように、PATTERNSで母集団を明示するのが安全。
  // しかし「全ハンド」を使いたい要望が多いので、ここでは全てのrange cacheキーから集合を作ります。

  const allMaps = [];
  for (const p of PATTERNS) {
    // パターン定義内のrange文字列を探し出すのはJSだと危険なので、ここでは「手動で母集団」を作る簡易版にします。
    // => 最低限、btn-open の spec を母集団にする
  }

  // 母集団（例として btn-open の range を母集団）
  const DEFAULT_POOL_RANGE = `
AA:0.991, KK:0.991, QQ:0.999, JJ:0.999, TT:0.988, 99:0.998, 88-77,
AKs:0.991, AQs:0.995, AJs:0.989, ATs:0.976, A9s:0.001,
AKo:0.989, AQo-AJo, ATo:0.001, KQs:0.999, KJs:0.262
`.replace(/\n/g, " ");
  const poolMap = getRangeMap(DEFAULT_POOL_RANGE);
  const poolHands = Array.from(poolMap.keys());
  const picked = sampleN(poolHands, count);

  // 直前の1問目のハンドと同じになりやすい場合の軽い回避
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

  // 初回セット生成
  useEffect(() => {
    const qs = buildRandomSet(patternId, count);
    setQuestions(qs);
    setStep(0);
    setSelected(null);
    setLocked(false);
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
            // パターンや問題数を反映して作り直し
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
};
