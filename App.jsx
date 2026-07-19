import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const __QUESTION_MODULES = import.meta.glob("./*question.jsx", { eager: true });

function __questionSourceName(path) {
  return String(path || "")
    .split("/")
    .pop()
    ?.replace(/\.jsx$/i, "") || "question";
}

function __readPatternsFromQuestionModule(mod) {
  const candidate = mod?.PATTERNS ?? mod?.default?.PATTERNS ?? mod?.default;
  return Array.isArray(candidate) ? candidate : [];
}

function __buildCombinedPatterns(modules) {
  const usedIds = new Set();
  const entries = Object.entries(modules || {}).sort(([a], [b]) => {
    if (a === "./question.jsx") return -1;
    if (b === "./question.jsx") return 1;
    return a.localeCompare(b, "ja");
  });

  const out = [];

  for (const [path, mod] of entries) {
    const sourceFile = __questionSourceName(path);
    const patterns = __readPatternsFromQuestionModule(mod);

    patterns.forEach((pattern, index) => {
      const baseId = String(pattern?.id ?? pattern?.label ?? `${sourceFile}-${index + 1}`);
      let id = baseId;

      if (usedIds.has(id)) {
        let n = 2;
        id = `${baseId}__${sourceFile}`;
        while (usedIds.has(id)) id = `${baseId}__${sourceFile}_${n++}`;
      }

      usedIds.add(id);
      out.push({
        ...pattern,
        id,
        originalId: baseId,
        sourceFile,
      });
    });
  }

  return out;
}

function displayPatternLabel(pattern) {
  const base = String(pattern?.label ?? pattern?.id ?? "");
  const sourceFile = String(pattern?.sourceFile ?? "");
  if (!sourceFile || sourceFile === "question") return base;
  return `${base} [${sourceFile}]`;
}

const PATTERNS = __buildCombinedPatterns(__QUESTION_MODULES);

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

const HERO_POS_FILTER_ALL = "all";
const QUIZ_MODE_NORMAL = "normal";
const QUIZ_MODE_RANDOM = "random";
const POSITION_ORDER = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"];

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

function calcExtraPotByPatternId(patternId, facing, positions, facingLine) {
  const id = String(patternId || "");
  const lower = id.toLowerCase();

  let extra = 0;

  // "chase" を含む場合：1人につき0.25BB
  if (lower.includes("chase")) {
    extra += 0.25 * (positions?.length || 0);
  }

  // "Ante" を含む場合：+1BB（合計）
  if (lower.includes("ante")) {
    extra += 1.0;
  }

  // facing 由来のベット額を合算（base pot には SB/BB が含まれる前提なので、SB/BB は差分だけ足す）
  const blindMap = { SB: Number(BLIND_SIZES.SB), BB: Number(BLIND_SIZES.BB) };

  function addAmount(pos, amountBB) {
    const p = String(pos || "").toUpperCase();
    const a = Number(amountBB);
    if (!Number.isFinite(a) || a <= 0) return;
    // SB/BB はブラインド分を引く（base pot に含まれているため）
    if (p === "SB" || p === "BB") {
      extra += Math.max(0, a - (blindMap[p] || 0));
    } else {
      extra += a;
    }
  }

  function isBetLike(act) {
    const k = String(act || "").toLowerCase();
    return (
      k === "open" ||
      k === "raise" ||
      k === "bet" ||
      k.endsWith("bet") || // 3bet/4bet/5bet...
      k === "jam" ||
      k === "allin" ||
      k === "all-in"
    );
  }

  if (Array.isArray(facingLine) && facingLine.length) {
    for (const step of facingLine) {
      if (!step) continue;
      if (isBetLike(step.act) || (String(step.act || "").toLowerCase() === "call" && step.size != null)) {
        addAmount(step.pos, step.size);
      }
    }
    return Number(extra);
  }

  // 旧：文字列をパース（複数アクション対応）
  const s = String(facing || "");
  const re = /(UTG(?:\+\d)?|LJ|HJ|CO|BTN|SB|BB)\s+(open|raise|bet|[3-9]bet|jam|all[\s-]?in)\s+([0-9.]+)\s*(x|bb)\b/ig;
  let m;
  while ((m = re.exec(s)) !== null) {
    const pos = m[1];
    const act = m[2];
    const num = Number(m[3]);
    if (!Number.isFinite(num) || num <= 0) continue;
    if (isBetLike(act)) addAmount(pos, num);
  }

  return Number(extra);
}

function calcTotalPotBB(patternId, facing, positions, facingLine) {
  return calcBasePotBB() + calcExtraPotByPatternId(patternId, facing, positions, facingLine);
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


function hasUsableBands(bands) {
  return Array.isArray(bands) && bands.some((b) => String(b?.range || "").trim());
}

function getQuestionBands(group, spot, qParams) {
  if (hasUsableBands(spot?.bands)) return spot.bands;
  if (hasUsableBands(qParams?.bands)) return qParams.bands;
  if (hasUsableBands(group?.bands)) return group.bands;
  return [];
}

function spotHasUsableBands(group, spot) {
  if (hasUsableBands(spot?.bands) || hasUsableBands(group?.bands)) return true;

  if (typeof spot?.questionBuilder === "function") {
    try {
      const probe = spot.questionBuilder("AsKs");
      return hasUsableBands(probe?.bands);
    } catch (_err) {
      return false;
    }
  }

  return false;
}

function buildQuestionFromSpot(group, spot, hand) {
  const qParams = spot.questionBuilder(hand);
  const optionsBB = (qParams.options || []).map(normalizeOptionToBB);
  const bands = getQuestionBands(group, spot, qParams);

  const probs = probsByRangeSpec(optionsBB, hand, bands, "fold");
  const answerIndex = answerByMaxProb(optionsBB, probs, "fold");

  return {
    id: `${group.id}::${spot.id}-${qParams.eff}bb-${hand}`,
    groupId: group.id,
    spotId: spot.id,
    hero: {
      hand,
      pos: qParams.pos,
      eff: qParams.eff,
      facing: qParams.facing || (qParams.facingLine ? describeFacingLine(qParams.facingLine) : ""),
      facingLine: qParams.facingLine || null,
    },
    stacks: qParams.stacks,
    options: optionsBB,
    bands,
    answer: answerIndex,
    note: `${group.label} / ${spot.label} / ${hand} → ${optionsBB[answerIndex]}`,
  };
}

function getSpotFacingLine(spot) {
  if (!spot) return [];

  if (Array.isArray(spot.facingLine)) return spot.facingLine;

  if (typeof spot.questionBuilder === "function") {
    try {
      const probe = spot.questionBuilder("AsKs");
      if (Array.isArray(probe?.facingLine)) return probe.facingLine;
    } catch (_err) {
      // questionBuilder が特殊でも出題処理は継続する
    }
  }

  return [];
}

function normalizeFacingAct(act) {
  return String(act || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/-/g, "");
}

function getSpotFilterKind(spot) {
  const facingLine = getSpotFacingLine(spot);
  const depth = facingLine.length;

  if (depth === 0) return "noFacing";

  const firstAct = normalizeFacingAct(facingLine[0]?.act);

  // 「openのみ」は 1アクション かつ open の時だけに限定する。
  // SB limp など 1行でも open ではない spot は multiLine 側へ寄せる。
  if (depth === 1 && firstAct === "open") return "openOnly";

  return "multiLine";
}

function spotMatchesFilter(spot, spotFilter) {
  const kind = getSpotFilterKind(spot);

  if (spotFilter === "noFacing") return kind === "noFacing";
  if (spotFilter === "openOnly") return kind === "openOnly";
  if (spotFilter === "multiLine") return kind === "multiLine";

  return true;
}

function normalizeHeroPos(pos) {
  return String(pos || "").trim();
}

function getSpotHeroPos(spot) {
  if (!spot) return "";

  if (spot.heroPos) return normalizeHeroPos(spot.heroPos);

  if (typeof spot.questionBuilder === "function") {
    try {
      const probe = spot.questionBuilder("AsKs");
      return normalizeHeroPos(probe?.pos);
    } catch (_err) {
      // questionBuilder が特殊でも出題処理は継続
    }
  }

  return "";
}

function sortHeroPositions(positions) {
  const list = Array.from(new Set((positions || []).filter(Boolean)));
  return list.sort((a, b) => {
    const ai = POSITION_ORDER.indexOf(a);
    const bi = POSITION_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return String(a).localeCompare(String(b), "ja");
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

function getPatternHeroPositions(pattern) {
  const spots = Array.isArray(pattern?.spots) ? pattern.spots : [];

  if (spots.length) {
    return sortHeroPositions(spots.map(getSpotHeroPos));
  }

  if (typeof pattern?.questionBuilder === "function") {
    try {
      const probe = pattern.questionBuilder("AsKs");
      return sortHeroPositions([probe?.pos]);
    } catch (_err) {
      // プレビュー不可でも出題処理は継続
    }
  }

  return [];
}

function spotMatchesHeroPos(spot, heroPosFilter) {
  if (heroPosFilter === HERO_POS_FILTER_ALL) return true;
  return getSpotHeroPos(spot) === heroPosFilter;
}

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildRandomSet(groupId, count, prevFirst = null, spotFilter = "all", heroPosFilter = HERO_POS_FILTER_ALL) {
  const group = PATTERNS.find((p) => p.id === groupId) || PATTERNS[0];
  if (!group) return [];
  const rawSpots = group.spots || [];

  // 保険：spots が無い旧形式PATTERNも動くように
  const isLegacy = !Array.isArray(rawSpots) || rawSpots.length === 0;
  const spots = isLegacy
    ? []
    : rawSpots.filter((spot) =>
        spotMatchesFilter(spot, spotFilter) &&
        spotMatchesHeroPos(spot, heroPosFilter) &&
        spotHasUsableBands(group, spot)
      );

  if (!isLegacy && spots.length === 0) return [];

  if (isLegacy && heroPosFilter !== HERO_POS_FILTER_ALL) {
    try {
      const probe = group.questionBuilder?.("AsKs");
      if (normalizeHeroPos(probe?.pos) !== heroPosFilter) return [];
    } catch (_err) {
      return [];
    }
  }

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

function patternMatchesQuizFilters(pattern, spotFilter = "all", heroPosFilter = HERO_POS_FILTER_ALL) {
  if (!pattern) return false;

  const rawSpots = Array.isArray(pattern.spots) ? pattern.spots : [];

  if (rawSpots.length > 0) {
    return rawSpots.some((spot) =>
      spotMatchesFilter(spot, spotFilter) &&
      spotMatchesHeroPos(spot, heroPosFilter) &&
      spotHasUsableBands(pattern, spot)
    );
  }

  // 旧形式PATTERN用
  if (typeof pattern.questionBuilder !== "function") return false;

  try {
    const probe = pattern.questionBuilder("AsKs");
    if (!hasUsableBands(getQuestionBands(pattern, pattern, probe))) return false;
    if (heroPosFilter === HERO_POS_FILTER_ALL) return true;
    return normalizeHeroPos(probe?.pos) === heroPosFilter;
  } catch (_err) {
    return false;
  }
}

function getRandomPatternId(candidatePatternIds = [], prevPatternId = null, spotFilter = "all", heroPosFilter = HERO_POS_FILTER_ALL) {
  const candidateSet = Array.isArray(candidatePatternIds) && candidatePatternIds.length
    ? new Set(candidatePatternIds.map(String))
    : null;

  let candidates = (PATTERNS || []).filter((pattern) => {
    if (candidateSet && !candidateSet.has(String(pattern.id))) return false;
    return patternMatchesQuizFilters(pattern, spotFilter, heroPosFilter);
  });

  // 2件以上ある時は、直前と同じパターンを避ける
  if (prevPatternId && candidates.length > 1) {
    const withoutPrev = candidates.filter((pattern) => pattern.id !== prevPatternId);
    if (withoutPrev.length) candidates = withoutPrev;
  }

  return pickOne(candidates)?.id || (PATTERNS[0]?.id ?? "");
}

function buildRandomQuestionAcrossPatterns(candidatePatternIds = [], prevHand = null, prevPatternId = null, spotFilter = "all", heroPosFilter = HERO_POS_FILTER_ALL) {
  const randomPatternId = getRandomPatternId(candidatePatternIds, prevPatternId, spotFilter, heroPosFilter);
  const questions = buildRandomSet(randomPatternId, 1, prevHand, spotFilter, heroPosFilter);

  // フィルタの都合で空になるケースの保険
  if (questions.length) return questions;

  for (const pattern of PATTERNS || []) {
    if (!patternMatchesQuizFilters(pattern, spotFilter, heroPosFilter)) continue;
    const fallback = buildRandomSet(pattern.id, 1, prevHand, spotFilter, heroPosFilter);
    if (fallback.length) return fallback;
  }

  return [];
}

function getTableSizeFromQuestion(question, fallback = 6) {
  const n = Array.isArray(question?.stacks) ? question.stacks.length : 0;
  if (n >= 3 && n <= 9) return n;
  return fallback;
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
  const ux = Math.cos(rad);
  const uy = Math.sin(rad);
  return {
    left: `${50 + r * ux}%`,
    top: `${50 + r * uy}%`,
    ux,
    uy,
    deg,
  };
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

function parseFacingOpen(facing, facingLine) {
  // B案：facingLine があればそれを優先（open の 1st action を取る）
  if (Array.isArray(facingLine) && facingLine.length) {
    const open = facingLine.find((x) => String(x?.act || "").toLowerCase() === "open");
    if (open && open.pos && Number(open.size) > 0) {
      return { pos: String(open.pos).toUpperCase(), amountBB: Number(open.size) };
    }
  }

  // 文字列（旧互換 / "UTG open 2.3bb CO 3bet 6.9bb" のような複数アクションも対応）
  const s = String(facing || "").trim();
  // 例: "BTN open 2x", "BTN open 2bb", "UTG open 2.3bb CO 3bet 6.9bb"
  const m = s.match(/(?:^|\s)(UTG(?:\+\d)?|LJ|HJ|CO|BTN|SB|BB)\s+open\s+([0-9.]+)\s*(x|bb)\b/i);
  if (!m) return null;

  const pos = m[1].toUpperCase();
  const num = Number(m[2]);
  if (!Number.isFinite(num) || num <= 0) return null;

  return { pos, amountBB: num };
}

function describeFacingLine(facingLine = []) {
  return (facingLine || [])
    .map(({ pos, act, size }) => `${pos} ${act} ${size}bb`)
    .join(" ");
}


function PokerTable({ positions, stacks, heroPos, heroHand, action, facing, facingLine, patternId }) {
  const coords = useMemo(
    () => circularLayout(positions),
     [positions]
  );
  const facingOpen = useMemo(() => parseFacingOpen(facing, facingLine), [facing, facingLine]);
  const potBB = useMemo(
    () => calcTotalPotBB(patternId, facing, positions, facingLine),
    [patternId, facing, positions, facingLine]
  );
  const isMobile = useIsMobile();

  const contributedByPos = useMemo(() => {
    const map = new Map();

    // まずブラインドを初期値として入れる
    if (positions.includes("SB")) map.set("SB", Number(BLIND_SIZES.SB));
    if (positions.includes("BB")) map.set("BB", Number(BLIND_SIZES.BB));

    if (!Array.isArray(facingLine)) return map;

    for (const step of facingLine) {
      const pos = step?.pos;
      const act = String(step?.act || "").toLowerCase();
      const size = Number(step?.size);

      if (!pos || !Number.isFinite(size) || size <= 0) continue;

      const prev = Number(map.get(pos) || 0);

      // blind の再掲は二重加算しない
      if (
        (pos === "SB" && (act === "sb" || act === "post" || act === "blind") && size === Number(BLIND_SIZES.SB)) ||
        (pos === "BB" && (act === "bb" || act === "post" || act === "blind") && size === Number(BLIND_SIZES.BB))
      ) {
        map.set(pos, prev);
        continue;
      }

      // 総額を表すアクションは上書き
      if (
        act === "open" ||
        act === "bet" ||
        act === "raise" ||
        act === "3bet" ||
        act === "4bet" ||
        act === "5bet" ||
        act === "jam" ||
        act === "allin" ||
        act === "all-in"
      ) {
        map.set(pos, size);
        continue;
      }

      // call は追加額として加算
      if (act === "call") {
        map.set(pos, prev + size);
        continue;
      }

      // limped / complete などは総額扱いにしたいなら上書き
      if (act === "limp" || act === "complete") {
        map.set(pos, size);
        continue;
      }

      // その他は安全側で「今までより大きければ採用」
      map.set(pos, Math.max(prev, size));
    }

    for (const [pos, amt] of map.entries()) {
      map.set(pos, Math.round(amt * 100) / 100);
    }

    return map;
  }, [facingLine, positions]);

  const facingLinesText = useMemo(() => {
  if (!Array.isArray(facingLine) || facingLine.length === 0) return [];

  return facingLine.map((step) => {
    const pos = step?.pos ?? "";
    const act = step?.act ?? "";
    const size =
      typeof step?.size === "number"
        ? `${Math.round(step.size * 100) / 100}bb`
        : "";

    return [pos, act, size].filter(Boolean).join(" ");
  });
}, [facingLine]);

  // チップ位置：席→中心方向へ寄せる（左右で補正を分岐）
  const chipTowardCenterStyle = (pos, extra = {}) => {
    const v = coords[pos];
    if (!v) return { ...styles.chipWrapToCenter, ...extra };

    // 席の中心からテーブル中央へ寄せる距離
    const BASE_INWARD = 100;

    // 左右席だけ少し文字ラベルぶん補正
    const SIDE_BIAS_X_RIGHT = 12;
    const SIDE_BIAS_X_LEFT = -12;

    const inwardX = -v.ux * BASE_INWARD;
    const inwardY = -v.uy * BASE_INWARD / 2;

    const theta = Math.atan2(v.uy, v.ux);
    const norm = theta < 0 ? theta + Math.PI * 2 : theta;

    // 左半分にある席かどうか
    const isLeft = norm > Math.PI / 2 && norm < Math.PI * 1.5;
    const biasX = isLeft ? SIDE_BIAS_X_LEFT : SIDE_BIAS_X_RIGHT;

    return {
      ...styles.chipWrapToCenter,
      transform: `translate(calc(-50% + ${inwardX + biasX}px), calc(-50% + ${inwardY}px))`,
      ...extra,
    };
  };

  return (
    <div
      style={{
        ...styles.tableWrap,
        width: isMobile ? "100%" : "min(92vw, 650px)",
        maxWidth: isMobile ? "100%" : 650,
        aspectRatio: isMobile ? "7 / 9" : "1 / 1",
        margin: isMobile ? "0 0 12px" : "0px auto 12px",
      }}
    >
      <div style={styles.tableCircle}>
        <div style={styles.potCenter}>
          <div style={styles.potLabel}>POT</div>
          <div style={styles.potValue}>{Math.round(potBB * 100) / 100}bb</div>
        </div>

        {facingLinesText.length > 0 && (
            <div style={{
              ...styles.facingLineBox,
              opacity: isMobile ? "0" : "1",
            }}>
              {facingLinesText.map((line, i) => (
                <div key={i} style={styles.facingLineText}>
                  {line}
                </div>
              ))}
            </div>
          )}
        {positions.map((pos, idx) => {
          const c = coords[pos];
          const heroIndex = positions.indexOf(heroPos);
          const isHero = idx === heroIndex;
          const isSB = pos === "SB";
          const isBB = pos === "BB";
          // const isOpener = facingOpen?.pos === pos;
          // const openAmt = facingOpen?.amountBB ?? 0;
          const badge = badgeStyleFor(isHero ? action : null);
          const stackBB = getStack(stacks, pos, idx);
          const contributed = contributedByPos.get(pos) || 0;

          return (
            <div key={pos} style={{ ...styles.seat, ...coords[pos] }}>
              <div>
                <div style={styles.seatPos}>{pos}</div>
                <div style={styles.seatStack}>[{stackBB}bb]</div>
                {/*isHero && <div style={styles.seatHand}>{heroHand}</div>*/}
                {isHero && <HandDisplay hand={heroHand} />}

                {/* SB/BB ブラインドチップ表示 */}
                {/* {isSB && (
                  <div style={chipTowardCenterStyle(pos, styles.chipWrapSB)}>
                    <div style={{ ...styles.chip, ...styles.chipSB }} />
                    <div style={styles.chipText}>{BLIND_SIZES.SB}bb</div>
                  </div>
                )}
                {isBB && (
                  <div style={chipTowardCenterStyle(pos, styles.chipWrapBB)}>
                    <div style={{ ...styles.chip, ...styles.chipBB }} />
                    <div style={styles.chipText}>{BLIND_SIZES.BB}bb</div>
                  </div>
                )} */}
              </div>

              <span>
                {/* facing が "BTN open 2x" などの時、オープンした席にチップ表示 */}
                {contributed > 0 && (
                  <div style={chipTowardCenterStyle(pos, styles.chipWrapAction)}>
                    <div style={{ ...styles.chip, ...styles.chipCommitted }} />
                    <div style={styles.chipText}>{contributed}bb</div>
                  </div>
                )}
              </span>
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
          {tabs.map((k) => {

            const labelForTab = (k) =>
              k === "best"
                ? "BEST"
                : (options || []).find(o => actionKeyFromOption(o) === k) || k;

            const label = labelForTab(k);
            const isActive = focusKey === k;

            const colorStyle =
              k === "best"
                ? {}
                : {
                    backgroundColor: badgeStyleFor(label).background,
                    borderColor: badgeStyleFor(label).background,
                  };

            return(
              <button
                key={k}
                style={{
                  ...styles.modalTab,
                  ...(isActive ? styles.modalTabActive : colorStyle),
                }}
                onClick={() => setFocusKey(k)}
              >
                {k === "best" ? "BEST" : (options || []).find(o => actionKeyFromOption(o) === k) || k}
              </button>
            )
            
          })}
        </div>

        <div style={styles.matrixWrap}>
          <div 
            style={{
              ...styles.matrixGrid,
              gridTemplateColumns: isMobile ? "repeat(13, minmax(23px, 0fr))" : "repeat(13, minmax(40px, 0fr))",
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
                </div>
              ))
            )}
          </div>
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


// 出題内容の制御

function parseHand(hand) {
  // 例: "A4s" → ["A♠", "4♠"] 的に変換
  const r1 = hand[0];
  const r2 = hand[1];

  const suited = hand.endsWith("s");
  const offsuit = hand.endsWith("o");

  const suit1 = "♠";
  let suit2 = suited ? "♠" : "♥";

  return [
    { rank: r1, suit: suit1 },
    { rank: r2, suit: suit2 },
  ];
}

function Card({ rank, suit }) {
  const isRed = suit === "♥" || suit === "♦";

  return (
    <div style={{
      borderRadius: 8,
      background: "#fff",
      border: "2px solid #333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 6,
      color: isRed ? "#d00" : "#000",
      fontWeight: "bold",
      boxShadow: "0 3px 6px rgba(0,0,0,0.3)"
    }}>
      <div>{rank}{suit}</div>
      {/* <div style={{ alignSelf: "center", fontSize: 28 }}>
        {suit}
      </div>
      <div style={{ transform: "rotate(180deg)" }}>
        {rank}{suit}
      </div> */}
    </div>
  );
}

function HandDisplay({ hand }) {
  const cards = parseHand(hand);

  return (
    <div style={{
      display: "flex",
      gap: 10,
      justifyContent: "center",
      alignItems: "center"
    }}>
      {cards.map((c, i) => (
        <Card key={i} rank={c.rank} suit={c.suit} />
      ))}
    </div>
  );
}

function buildQuestionFromPattern(pattern, hand) {
  const qParams = pattern.questionBuilder(hand);
  const optionsBB = (qParams.options || []).map(normalizeOptionToBB);
  const bands = getQuestionBands(pattern, pattern, qParams);

  const probs = probsByRangeSpec(optionsBB, hand, bands, "fold");
  const answerIndex = answerByMaxProb(optionsBB, probs, "fold");

  return {
    id: `${pattern.id}-${qParams.eff}bb-${hand}`,
    groupId: pattern.id,
    spotId: pattern.id,
    hero: {
      hand,
      pos: qParams.pos,
      eff: qParams.eff,
      facing: qParams.facing || (qParams.facingLine ? describeFacingLine(qParams.facingLine) : ""),
      facingLine: qParams.facingLine || null,
    },
    stacks: qParams.stacks,
    options: optionsBB,
    bands,
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
  const isMobile = useIsMobile();

  const pageWrapStyle = {
    ...styles.wrap,
    ...(isMobile ? styles.wrapMobile : {}),
    overflowX: "hidden",
    background: isDark ? "#0f172a" : "#ffffff",
    color: isDark ? "#e5e7eb" : "#111111",
    minWidth: 0,
  };

  const navPatternId = location.state?.patternId;
  const navCount = location.state?.count;
  const navSpotFilter = location.state?.spotFilter;
  const navHeroPosFilter = location.state?.heroPosFilter;
  const navQuizMode = location.state?.quizMode;
  const navCandidatePatternIds = Array.isArray(location.state?.candidatePatternIds)
    ? location.state.candidatePatternIds
    : [];

  const [patternId, setPatternId] = useState(() => navPatternId ?? PATTERNS[0]?.id ?? "");
  const [count, setCount] = useState(() => (Number.isFinite(navCount) ? navCount : 10));
  const [spotFilter, setSpotFilter] = useState(() => navSpotFilter || "all");
  const [heroPosFilter, setHeroPosFilter] = useState(() => navHeroPosFilter || HERO_POS_FILTER_ALL);
  const [quizMode, setQuizMode] = useState(() =>
    navQuizMode === QUIZ_MODE_RANDOM ? QUIZ_MODE_RANDOM : QUIZ_MODE_NORMAL
  );
  const [candidatePatternIds, setCandidatePatternIds] = useState(() => navCandidatePatternIds);

  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const [rangeOpen, setRangeOpen] = useState(false);
  const [rangeFocusKey, setRangeFocusKey] = useState("best"); // "best" or actionKey

  const navTableSize = location.state?.tableSize;
  console.log(location);
  console.log(location.state?.tableSize);

  const [tableSize, setTableSize] = useState(() =>
    Number.isFinite(navTableSize) ? navTableSize : 6
  );

  useEffect(() => {
    if (Number.isFinite(navTableSize)) setTableSize(navTableSize);
  }, [navTableSize]);

  // const [tableSize, setTableSize] = useState(6);
  const positions = useMemo(() => TABLE_SIZES[tableSize], [tableSize]);

  useEffect(() => {
    const nextTableSize = getTableSizeFromQuestion(questions?.[step], tableSize);
    if (nextTableSize !== tableSize) setTableSize(nextTableSize);
  }, [questions, step, tableSize]);



  // Home からの遷移で state が来た時に反映（同一コンポーネント再利用時も安全）
  useEffect(() => {
    if (navPatternId) setPatternId(navPatternId);
    if (Number.isFinite(navCount)) setCount(navCount);
    if (navSpotFilter) setSpotFilter(navSpotFilter);
    if (navHeroPosFilter) setHeroPosFilter(navHeroPosFilter);
    if (navQuizMode === QUIZ_MODE_RANDOM || navQuizMode === QUIZ_MODE_NORMAL) {
      setQuizMode(navQuizMode);
    }
    if (Array.isArray(navCandidatePatternIds)) {
      setCandidatePatternIds(navCandidatePatternIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navPatternId, navCount, navSpotFilter, navHeroPosFilter, navQuizMode]);

  const currentPattern = useMemo(
    () => PATTERNS.find((p) => p.id === patternId) || PATTERNS[0] || null,
    [patternId]
  );

  const currentPatternHeroPositions = useMemo(() => {
    if (!currentPattern) return [];
    return getPatternHeroPositions(currentPattern);
  }, [currentPattern]);

  // patternId / count / モードが変わったら問題を作り直し
  useEffect(() => {
    const qs = quizMode === QUIZ_MODE_RANDOM
      ? buildRandomQuestionAcrossPatterns(candidatePatternIds, null, null, spotFilter, heroPosFilter)
      : buildRandomSet(patternId, count, null, spotFilter, heroPosFilter);

    setQuestions(qs);
    setStep(0);
    setSelected(null);
    setLocked(false);
  }, [patternId, count, spotFilter, heroPosFilter, quizMode, candidatePatternIds]);

  function regenerate() {
    const prevFirstHand = questions?.[0]?.hero?.hand || null;
    const prevPatternId = questions?.[0]?.groupId || null;
    const qs = quizMode === QUIZ_MODE_RANDOM
      ? buildRandomQuestionAcrossPatterns(candidatePatternIds, prevFirstHand, prevPatternId, spotFilter, heroPosFilter)
      : buildRandomSet(patternId, count, prevFirstHand, spotFilter, heroPosFilter);

    setQuestions(qs);
    setStep(0);
    setSelected(null);
    setLocked(false);
  }

  function next() {
    if (!locked) return;

    // ランダムモード：表示中の候補パターン一覧から、毎回パターンごと抽選する
    if (quizMode === QUIZ_MODE_RANDOM) {
      const prevHand = questions?.[step]?.hero?.hand || questions?.[0]?.hero?.hand || null;
      const prevPatternId = questions?.[step]?.groupId || questions?.[0]?.groupId || null;
      const qs = buildRandomQuestionAcrossPatterns(candidatePatternIds, prevHand, prevPatternId, spotFilter, heroPosFilter);
      setQuestions(qs);
      setStep(0);
      setSelected(null);
      setLocked(false);
      return;
    }

    // ノーマルモード：最初に作った問題セットを順番に進める
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
  }, [locked, selected, step, questions.length, patternId, count, spotFilter, heroPosFilter, quizMode, candidatePatternIds]);

  if (!PATTERNS.length) {
    return (
      <div style={styles.wrap}>
        <h1 style={styles.h1}>Preflop Quiz</h1>
        <button
          style={styles.backBtn}
          onClick={() => navigate("/")}
        >
          ← 問題選択に戻る
        </button>

        <div style={styles.card(isDark)}>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
            question.jsx 系ファイルが見つかりません
          </div>
          <div style={{ lineHeight: 1.6, opacity: 0.85 }}>
            src 配下に <code>question.jsx</code> または <code>*question.jsx</code> を置くと自動で読み込みます。
          </div>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div style={styles.wrap}>
        <h1 style={styles.h1}>Preflop Quiz</h1>
        <button
          style={styles.backBtn}
          onClick={() => navigate("/")}
        >
          ← 問題選択に戻る
        </button>

        <div style={styles.card(isDark)}>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
            条件に合う問題がありません
          </div>
          <div style={{ lineHeight: 1.6, opacity: 0.85 }}>
            選択中のフィルタ：
            {spotFilter === "noFacing"
              ? " facingなし"
              : spotFilter === "openOnly"
              ? " openのみ"
              : spotFilter === "multiLine"
              ? " スクイーズ+vs3bet"
              : " すべて"}
            ／ actionプレイヤー：{heroPosFilter === HERO_POS_FILTER_ALL ? "すべて" : heroPosFilter}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[step];
  // ランダムモードでは q.groupId が毎問変わるため、表示中の問題から pattern を逆引きする
  const pattern = PATTERNS.find((p) => p.id === q.groupId) || currentPattern || PATTERNS[0];
  const spot =
    pattern.spots?.find((s) => s.id === q.spotId) ||
    pattern; // 旧形式fallback

  const activeBands = hasUsableBands(q.bands) ? q.bands : getQuestionBands(pattern, spot, q);
  const probs = probsByRangeSpec(q.options, q.hero.hand, activeBands || [], "fold");
  const stacks = q.stacks || Object.fromEntries(positions.map((p) => [p, q.hero.eff]));
  const progress = Math.round(((step + 1) / Math.max(1, questions.length)) * 100);
  console.log(q.stacks);

  // setTableSize(q.stacks);
  // const positions = useMemo(() => TABLE_SIZES[tableSize], [tableSize]);

  return (
    <div style={pageWrapStyle}>
      {/* 横スクロール対策（iOS/Safari含む） */}
      <style>{`
        html, body, #root {
          width: 100%;
          max-width: 100%;
          margin: 0;
          overflow-x: hidden;
          overscroll-behavior-x: none;
          padding: 5px;
        }
        *, *::before, *::after { box-sizing: border-box; }
        img, svg, canvas { max-width: 100%; height: auto; }
      `}</style>
      <h1 style={styles.h1}>Preflop Quiz</h1>

      <button
        style={styles.backBtn}
        onClick={() => navigate("/")}
      >
        ← 問題選択に戻る
      </button>

      {/* 設定 */}
      <div style={styles.toolbar}>
        <div style={styles.field}>
          {/* <label>パターン：</label> */}
          {/* <select value={patternId} onChange={(e) => setPatternId(e.target.value)}>
            {PATTERNS.map((p) => (
              <option key={p.id} value={p.id}>
                {displayPatternLabel(p)}
              </option>
            ))}
          </select> */}
        </div>

        <div style={styles.field}>
          <label>モード：</label>
          <select value={quizMode} onChange={(e) => setQuizMode(e.target.value)}>
            <option value={QUIZ_MODE_NORMAL}>ノーマル</option>
            <option value={QUIZ_MODE_RANDOM}>ランダム</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>actionプレイヤー：</label>
          <select value={heroPosFilter} onChange={(e) => setHeroPosFilter(e.target.value)}>
            <option value={HERO_POS_FILTER_ALL}>すべて</option>
            {currentPatternHeroPositions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        {/* <div style={styles.field}>
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
        </button> */}
      </div>

      {/* 進捗 */}
      {/* <div style={styles.progressWrap}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
        <div style={styles.progressText}>
          {step + 1} / {questions.length}
        </div>
      </div> */}

      {/* 問題 */}
      <div style={styles.card(isDark)}>
        <div style={styles.cardHeader}>
          <div>
            {/* <div style={styles.spot}>
              {q.hero.pos} / {q.hero.eff}bb
            </div> */}
            {/* <div style={styles.facing}>{q.hero.facing}</div> */}
          </div>
          {/* <div style={styles.hand}>{q.hero.hand}</div> */}
        </div>

        <PokerTable
          positions={positions}
          stacks={q.stacks}
          heroPos={q.hero.pos}
          heroHand={q.hero.hand}
          action={locked && selected != null ? q.options[selected] : ""}
          facing={q.hero.facing}
          facingLine={q.hero.facingLine}
          patternId={q.groupId || patternId}
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
          title={`${displayPatternLabel(pattern)} / ${q.hero.pos} ${q.hero.eff}bb / ${q.hero.facing}`}
          bands={activeBands || []}
          options={q.options}
          focusKey={rangeFocusKey}
          setFocusKey={setRangeFocusKey}
        />

        <div style = {{display:"inline-block"}}>
          {q.options.map((opt, i) => {
            const isRight = locked && i === q.answer;
            const isWrong = locked && selected === i && i !== q.answer;
            const isPicked = !locked && selected === i;
            return (
              <button
                key={i}
                type="button"
                disabled={locked}
                onClick={() => {
                  if (locked) return;
                  // ボタン押下 = 回答確定（即表示）
                  setSelected(i);
                  setLocked(true);
                }}
                style={{
                  ...styles.choiceBtn,
                  ...(isPicked ? styles.choicePicked : {}),
                  ...(isRight ? styles.right : isWrong ? styles.wrong : {}),
                  width: isMobile ? "40vw" : "100%" 
                }}
                aria-pressed={selected === i}
              >
                <span style={styles.optIndex}>{i + 1}.</span>
                <span style={styles.choiceText}>{opt}</span>
              </button>
            );
          })}  
        </div>

        {!locked ? ""
        // (
        //   <div style={styles.actions}>
        //     <button style={styles.primaryBtn} onClick={() => setLocked(true)} disabled={selected == null}>
        //       回答する（Enter）
        //     </button>
        //     <span style={styles.hint}>Enter:回答 / R:新セット</span>
        //   </div>
        // ) 
        : (
          <div style={styles.actionsCol}>
            <div style={{ fontWeight: 800 }}>
              正解: <span style={{ fontWeight: 900 }}>{q.options[q.answer]}</span>
            </div>
            <div style={styles.note}>{q.note}</div>
            <button
              style={styles.primaryBtn}
              onClick={next}
              disabled={quizMode === QUIZ_MODE_NORMAL && step === questions.length - 1}
            >
              {quizMode === QUIZ_MODE_RANDOM ? "次のランダム問題（Enter）" : "次の問題（Enter）"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= スタイル ================= */
const styles = {
  wrap: { maxWidth: 920, margin: "0 auto"},
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


  choiceBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    marginBottom: 8,
    background: "#fff",
    color: "#444",
    cursor: "pointer",
    textAlign: "left",
    margin: "0px 3px"
  },
  choicePicked: { borderColor: "#94a3b8", background: "#f8fafc" },
  right: { borderColor: "#86efac", background: "#f0fdf4" },
  wrong: { borderColor: "#fecaca", background: "#fef2f2" },
  optIndex: { fontWeight: 800, width: 18, display: "inline-block" },
  choiceText: { flex: 1 },

  actions: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 },
  actionsCol: { display: "flex", flexDirection: "column", gap: 8, marginTop: 8 },
  hint: { fontSize: 12, opacity: 0.7 },
  note: { fontSize: 12, opacity: 0.75 },

  /* poker table */
  // スマホで横揺れ（横スクロール）が出る場合があるため、
  // テーブル外へはみ出す要素（チップ等）をクリップする
  tableWrap: { position: "relative", width: "min(92vw, 650px)", aspectRatio: "1 / 1", margin: "0 auto 12px", overflow: "hidden" },
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

  // ブラインド/ベットチップ
  // chipは「各席の中心」から「テーブル中央」方向へ寄せて表示
  chipWrap: { position: "absolute", display: "flex", alignItems: "center", gap: 6, pointerEvents: "none" },
  chipWrapToCenter: {position: "absolute", left: "50%", top: "50%" },
  // 個別の微調整（必要なら）
  chipWrapSB: {},
  chipWrapBB: {},

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
    width: 50,
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
  chipWrapOpen: {},
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
  matrixGrid: { display: "grid", gridTemplateColumns: "repeat(13, minmax(40px, 0fr))", gap: 0 },
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

  facingLineBox: {
    position: "absolute",
    left: "50%",
    top: "65%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
    minWidth: 150,
    maxWidth: "70%",
    padding: "8px 10px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.92)",
    boxShadow: "0 4px 12px rgba(0,0,0,.16)",
    textAlign: "center",
    pointerEvents: "none",
  },

  facingLineText: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 1.45,
    whiteSpace: "nowrap",
  },

  chipWrapAction: {},

  chipCall: {
    background:
      "radial-gradient(circle at 35% 35%, #bbf7d0 0%, #22c55e 60%, #166534 100%)",
  },

  chip3bet: {
    background:
      "radial-gradient(circle at 35% 35%, #fbcfe8 0%, #ec4899 60%, #9d174d 100%)",
  },

  chip4bet: {
    background:
      "radial-gradient(circle at 35% 35%, #ddd6fe 0%, #8b5cf6 60%, #5b21b6 100%)",
  },

  chipCommitted: {
    background:
      "radial-gradient(circle at 35% 35%, #fde68a 0%, #f59e0b 60%, #92400e 100%)",
  },
};
