import React from "react";
import { useNavigate } from "react-router-dom";

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

// 問題選択画面　レイアウト
const TABLE_SIZES = {
  3: ["BTN", "SB", "BB"],
  4: ["CO", "BTN", "SB", "BB"],
  5: ["HJ", "CO", "BTN", "SB", "BB"],
  6: ["LJ", "HJ", "CO", "BTN", "SB", "BB"],
  7: ["UTG", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
  8: ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
  9: ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
};

const SPOT_FILTERS = [
  { key: "all", label: "すべて" },
  { key: "noFacing", label: "facingなし" },
  { key: "openOnly", label: "openのみ" },
  { key: "multiLine", label: "スクイーズ+vs3bet" },
];

const HERO_POS_FILTER_ALL = "all";

/*
const ACTION_FILTER_ALL = "all";

function normalizeActionOption(option) {
  return String(option || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/all[\s-]?in/g, "jam")
    .replace(/x\b/g, "bb");
}

function getSpotQuestionPreview(spot) {
  if (!spot || typeof spot.questionBuilder !== "function") return null;
  try {
    return spot.questionBuilder("AsKs");
  } catch (_err) {
    return null;
  }
}

function getPatternActionItems(pattern) {
  const targets = Array.isArray(pattern?.spots) && pattern.spots.length
    ? pattern.spots
    : [pattern];

  const out = [];
  for (const spot of targets) {
    const q = getSpotQuestionPreview(spot);
    const pos = normalizeHeroPos(spot?.heroPos || q?.pos);
    if (!pos || !Array.isArray(q?.options)) continue;

    for (const label of q.options) {
      const actionKey = normalizeActionOption(label);
      if (!actionKey) continue;
      out.push({ pos, actionKey, label: String(label), patternId: pattern.id });
    }
  }
  return out;
}
*/

const QUIZ_MODE_NORMAL = "normal";
const QUIZ_MODE_RANDOM = "random";
const POSITION_ORDER = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"];

function getStack(stacks, pos, idx) {
  if (Array.isArray(stacks)) return stacks[idx];
  return stacks?.[pos];
}

function polarToXY(r, deg) {
  const rad = (deg * Math.PI) / 180;
  return { left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%` };
}

function circularLayout(positions, radius = 40) {
  const step = 360 / positions.length;
  const start = -90;
  const coords = {};
  positions.forEach((pos, i) => {
    coords[pos] = polarToXY(radius, start + step * i);
  });
  return coords;
}

function normalizeStacksForPositions(stacks, positions, fallbackEff = 0) {
  if (Array.isArray(stacks)) {
    return positions.map((_, i) => (Number.isFinite(stacks[i]) ? stacks[i] : fallbackEff));
  }
  if (stacks && typeof stacks === "object") {
    const out = {};
    for (const p of positions) out[p] = Number.isFinite(stacks[p]) ? stacks[p] : fallbackEff;
    return out;
  }
  return Object.fromEntries(positions.map((p) => [p, fallbackEff]));
}

function getSpotFacingLine(spot) {
  if (!spot) return [];

  if (Array.isArray(spot.facingLine)) return spot.facingLine;

  if (typeof spot.questionBuilder === "function") {
    try {
      const probe = spot.questionBuilder("AsKs");
      if (Array.isArray(probe?.facingLine)) return probe.facingLine;
    } catch (_err) {
      // 特殊な questionBuilder でも一覧表示は継続する
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
  const line = getSpotFacingLine(spot);
  const depth = line.length;

  if (depth === 0) return "noFacing";

  const firstAct = normalizeFacingAct(line[0]?.act);

  // 「openのみ」は 1アクション かつ open の時だけに限定する。
  // SB limp など 1行でも open ではない spot は multiLine 側へ寄せる。
  if (depth === 1 && firstAct === "open") return "openOnly";

  return "multiLine";
}

function getSpotStats(pattern) {
  const spots = Array.isArray(pattern?.spots) ? pattern.spots : [];
  const stats = {
    total: spots.length,
    noFacing: 0,
    openOnly: 0,
    multiLine: 0,
  };

  for (const spot of spots) {
    const kind = getSpotFilterKind(spot);
    stats[kind] += 1;
  }

  return stats;
}

function matchesSpotFilter(pattern, spotFilter) {
  if (spotFilter === "all") return true;
  const stats = getSpotStats(pattern);
  if (spotFilter === "noFacing") return stats.noFacing > 0;
  if (spotFilter === "openOnly") return stats.openOnly > 0;
  if (spotFilter === "multiLine") return stats.multiLine > 0;
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
      // questionBuilder が特殊でも一覧表示は継続する
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
      // プレビュー不可でも一覧表示は継続
    }
  }

  return [];
}

function matchesHeroPosFilter(pattern, heroPosFilter) {
  if (heroPosFilter === HERO_POS_FILTER_ALL) return true;
  return getPatternHeroPositions(pattern).includes(heroPosFilter);
}

function StackPreview({ tableSize, stacks, heroPos, heroHand }) {
  const positions = TABLE_SIZES[tableSize] || TABLE_SIZES[6];
  const coords = React.useMemo(() => circularLayout(positions, 40), [positions]);

  return (
    <div style={pv.wrap}>
      <div style={pv.circle}>
        {positions.map((pos, idx) => {
          const stackBB = getStack(stacks, pos, idx);
          const isHero = pos === heroPos;

          return (
            <div
              key={pos}
              style={{
                ...pv.seat,
                ...coords[pos],
                ...(isHero ? pv.seatHero : null),
              }}
            >
              <div style={pv.pos}>{pos}</div>
              <div style={pv.stack}>{Number.isFinite(stackBB) ? `${stackBB}bb` : "—"}</div>
              {isHero && heroHand && <div style={pv.hand}>{heroHand}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const pv = {
  wrap: { width: "100%", display: "flex", justifyContent: "center" },
  circle: {
    position: "relative",
    width: "min(100%, 420px)",
    aspectRatio: "3 / 2",
    borderRadius: "50%",
    background: "radial-gradient(circle at 50% 50%, #065f46 0%, #064e3b 60%, #052e2b 100%)",
    boxShadow: "inset 0 0 0 8px rgba(255,255,255,0.06)",
    color: "#444",
  },
  seat: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    minWidth: 70,
    textAlign: "center",
    padding: 8,
    borderRadius: 12,
    background: "rgba(255,255,255,.92)",
    border: "1px solid #e5e7eb",
    color: "#444",
  },
  seatHero: { border: "2px solid #111" },
  pos: { fontSize: 12, fontWeight: 800 },
  stack: { fontSize: 12, opacity: 0.85 },
  hand: { marginTop: 2, fontSize: 12, fontWeight: 900, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" },
};



/* ================= アクション分岐デモ ================= */
function normalizeBranchAct(act) {
  return String(act || "")
    .trim()
    .toLowerCase()
    .replace(/all[\s-]?in/g, "allin")
    .replace(/\s+/g, "");
}

function normalizeBranchLine(line) {
  return (Array.isArray(line) ? line : []).map((step) => ({
    pos: String(step?.pos || "").trim(),
    act: normalizeBranchAct(step?.act),
    size: Number.isFinite(Number(step?.size)) ? Number(step.size) : null,
  }));
}

function branchLineEquals(a, b) {
  const aa = normalizeBranchLine(a);
  const bb = normalizeBranchLine(b);
  if (aa.length !== bb.length) return false;
  return aa.every((x, i) => {
    const y = bb[i];
    return x.pos === y.pos && x.act === y.act && x.size === y.size;
  });
}

function getPatternBranchRecords(pattern) {
  const targets = Array.isArray(pattern?.spots) && pattern.spots.length
    ? pattern.spots
    : [pattern];

  const records = [];
  for (const spot of targets) {
    if (!spot || typeof spot.questionBuilder !== "function") continue;
    try {
      const q = spot.questionBuilder("AsKs");
      if (!q?.pos || !Array.isArray(q?.options)) continue;
      records.push({
        spot,
        pos: String(q.pos),
        options: q.options.map(String),
        facingLine: normalizeBranchLine(q.facingLine),
        stacks: q.stacks,
        eff: q.eff,
      });
    } catch (_err) {
      // デモ生成不能なspotは除外
    }
  }
  return records;
}

function optionCandidateSteps(pos, option, currentLine) {
  const text = String(option || "").trim();
  const lower = text.toLowerCase().replace(/all[\s-]?in/g, "allin");
  if (lower.startsWith("fold")) return [null];

  const sizeMatch = lower.match(/([0-9]+(?:\.[0-9]+)?)/);
  const size = sizeMatch ? Number(sizeMatch[1]) : null;
  const hasAggression = currentLine.some((x) =>
    ["open", "raise", "bet", "3bet", "4bet", "5bet", "allin", "jam"].includes(normalizeBranchAct(x.act))
  );

  let acts = [];
  if (lower.startsWith("open")) acts = ["open", "raise"];
  else if (lower.startsWith("raise")) acts = hasAggression ? ["raise", "3bet", "4bet"] : ["open", "raise"];
  else if (/^[3-9]bet/.test(lower)) acts = [lower.match(/^[3-9]bet/)[0]];
  else if (lower.startsWith("call")) acts = ["call"];
  else if (lower.startsWith("limp")) acts = ["limp", "call"];
  else if (lower.startsWith("check")) acts = ["check"];
  else if (lower.startsWith("allin") || lower.startsWith("jam")) acts = ["allin", "jam"];
  else acts = [lower.split(/\s+/)[0]];

  return acts.map((act) => ({ pos, act, size }));
}

function branchLineStartsWith(line, prefix) {
  const full = normalizeBranchLine(line);
  const head = normalizeBranchLine(prefix);
  if (full.length < head.length) return false;
  return head.every((step, index) => branchLineEquals([step], [full[index]]));
}

function uniqueBranchSteps(steps) {
  const seen = new Set();
  const out = [];
  for (const step of steps || []) {
    const normalized = normalizeBranchLine([step])[0];
    if (!normalized) continue;
    const key = `${normalized.pos}|${normalized.act}|${normalized.size}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(normalized);
  }
  return out;
}

function getChildSteps(records, currentLine, actor) {
  const prefix = normalizeBranchLine(currentLine);
  return uniqueBranchSteps(
    records
      .map((record) => normalizeBranchLine(record.facingLine))
      .filter((line) => line.length === prefix.length + 1 && branchLineStartsWith(line, prefix))
      .map((line) => line[prefix.length])
      .filter((step) => step?.pos === actor)
  );
}

function optionMatchesStep(option, step, siblingSteps = []) {
  const text = String(option || "").trim().toLowerCase().replace(/all[\s-]?in/g, "allin");
  const act = normalizeBranchAct(step?.act);
  const sizeMatch = text.match(/([0-9]+(?:\.[0-9]+)?)/);
  const optionSize = sizeMatch ? Number(sizeMatch[1]) : null;
  const stepSize = Number.isFinite(Number(step?.size)) ? Number(step.size) : null;
  const sizeMatches = optionSize == null || stepSize == null || Math.abs(optionSize - stepSize) < 0.011;

  if (text.startsWith("call")) return act === "call" && sizeMatches;
  if (text.startsWith("check")) return act === "check";
  if (text.startsWith("limp")) return ["limp", "call"].includes(act) && sizeMatches;
  if (text.startsWith("open")) return ["open", "raise"].includes(act) && sizeMatches;
  if (text.startsWith("raise")) return ["raise", "3bet", "4bet", "5bet"].includes(act) && sizeMatches;

  const betMatch = text.match(/^([3-9]bet)/);
  if (betMatch) return act === betMatch[1] && sizeMatches;

  if (text.startsWith("allin") || text.startsWith("jam")) {
    if (["allin", "jam"].includes(act)) return true;
    if (!["open", "raise", "3bet", "4bet", "5bet", "6bet"].includes(act)) return false;
    const aggressive = siblingSteps.filter((x) =>
      ["open", "raise", "3bet", "4bet", "5bet", "6bet", "allin", "jam"].includes(normalizeBranchAct(x.act))
    );
    const maxSize = Math.max(...aggressive.map((x) => Number(x.size)).filter(Number.isFinite), -Infinity);
    return stepSize != null && stepSize === maxSize;
  }

  return act === normalizeBranchAct(text.split(/\s+/)[0]) && sizeMatches;
}

function resolveSelectedLine(currentLine, actor, option, records) {
  const text = String(option || "").trim().toLowerCase();
  if (text.startsWith("fold")) {
    return { ok: true, folded: true, line: normalizeBranchLine(currentLine), step: null };
  }

  const childSteps = getChildSteps(records, currentLine, actor);
  const step = childSteps.find((candidate) => optionMatchesStep(option, candidate, childSteps));
  if (!step) {
    return { ok: false, folded: false, line: normalizeBranchLine(currentLine), step: null };
  }

  return {
    ok: true,
    folded: false,
    line: normalizeBranchLine([...currentLine, step]),
    step,
  };
}

function getSeatOrder(records) {
  const stackCount = records.find((record) => Array.isArray(record.stacks))?.stacks?.length;
  return TABLE_SIZES[stackCount]
    || POSITION_ORDER.filter((pos) => records.some((record) => record.pos === pos));
}

function nextPositionClockwise(currentPos, candidatePositions, seatOrder) {
  const candidates = new Set(candidatePositions || []);
  if (!candidates.size) return null;

  const start = seatOrder.indexOf(currentPos);
  for (let offset = 1; offset <= seatOrder.length; offset += 1) {
    const pos = seatOrder[(Math.max(start, -1) + offset) % seatOrder.length];
    if (candidates.has(pos)) return pos;
  }
  return candidatePositions[0] || null;
}

function findNextRecord(records, line, currentActor, foldedPositions, seatOrder) {
  const candidates = records.filter(
    (record) =>
      branchLineEquals(record.facingLine, line)
      && !foldedPositions.has(record.pos)
  );
  if (!candidates.length) return null;

  const nextPos = nextPositionClockwise(
    currentActor,
    candidates.map((record) => record.pos),
    seatOrder
  );
  return candidates.find((record) => record.pos === nextPos) || null;
}

function findNextRecords(records, line, currentActor, foldedPositions, seatOrder) {
  const candidates = records.filter(
    (record) =>
      branchLineEquals(record.facingLine, line)
      && !foldedPositions.has(record.pos)
  );
  if (!candidates.length) return [];

  const start = seatOrder.indexOf(currentActor);
  const distance = (pos) => {
    const index = seatOrder.indexOf(pos);
    if (index < 0) return seatOrder.length + 1;
    return (index - Math.max(start, -1) + seatOrder.length) % seatOrder.length || seatOrder.length;
  };

  const seen = new Set();
  return [...candidates]
    .sort((a, b) => distance(a.pos) - distance(b.pos))
    .filter((record) => {
      if (seen.has(record.pos)) return false;
      seen.add(record.pos);
      return true;
    });
}

function countReachableBranchRecords(records, line, foldedPositions) {
  return records.filter((record) =>
    !foldedPositions.has(record.pos)
    && branchLineStartsWith(record.facingLine, line)
  ).length;
}

function getThreeBetResponderInfo(records, line, foldedPositions) {
  const normalizedLine = normalizeBranchLine(line);
  const acts = normalizedLine.map((step) => normalizeBranchAct(step.act));
  const threeBetIndex = acts.lastIndexOf("3bet");
  if (threeBetIndex < 0) return [];

  const hasLaterAggression = normalizedLine.slice(threeBetIndex + 1).some((step) =>
    ["4bet", "5bet", "6bet", "allin", "jam"].includes(normalizeBranchAct(step.act))
  );
  if (hasLaterAggression) return [];

  const threeBettor = normalizedLine[threeBetIndex]?.pos;
  const openerStep = normalizedLine.slice(0, threeBetIndex).find((step) =>
    ["open", "raise"].includes(normalizeBranchAct(step.act))
  );
  if (!openerStep) return [];

  const responderRoles = new Map([[openerStep.pos, "オープナー"]]);
  normalizedLine.slice(0, threeBetIndex).forEach((step) => {
    if (normalizeBranchAct(step.act) === "call" && step.pos !== openerStep.pos) {
      responderRoles.set(step.pos, "オープンコーラー");
    }
  });

  const seen = new Set();
  return records
    .filter((record) =>
      branchLineEquals(record.facingLine, normalizedLine)
      && responderRoles.has(record.pos)
      && record.pos !== threeBettor
      && !foldedPositions.has(record.pos)
    )
    .filter((record) => {
      if (seen.has(record.pos)) return false;
      seen.add(record.pos);
      return true;
    })
    .map((record) => ({ record, role: responderRoles.get(record.pos), threeBettor }));
}

function buildBranchDemo(pattern, selections) {
  const records = getPatternBranchRecords(pattern);
  if (!records.length) {
    return {
      rows: [], records, complete: false, invalid: true,
      invalidMessage: "存在しないパターンです", completeMessage: "",
    };
  }

  const seatOrder = getSeatOrder(records);
  const rootRecords = records.filter((record) => branchLineEquals(record.facingLine, []));
  const rootPos = seatOrder.find((pos) => rootRecords.some((record) => record.pos === pos));
  let currentRecord = rootRecords.find((record) => record.pos === rootPos) || rootRecords[0] || null;

  if (!currentRecord) {
    return {
      rows: [], records, complete: false, invalid: true,
      invalidMessage: "開始地点が見つかりません", completeMessage: "",
    };
  }

  const rows = [];
  const foldedPositions = new Set();
  let line = [];

  for (let rowIndex = 0; rowIndex <= (selections?.length || 0); rowIndex += 1) {
    if (!currentRecord) break;

    const selectedOption = selections?.[rowIndex]?.option ?? null;
    rows.push({
      ...currentRecord,
      selectedOption,
      rowIndex,
      lineBefore: normalizeBranchLine(line),
      foldedBefore: Array.from(foldedPositions),
      seatOrder,
    });
    if (!selectedOption) break;

    if (!currentRecord.options.includes(selectedOption)) {
      return {
        rows, records, complete: false, invalid: true,
        invalidMessage: "存在しないパターンです", completeMessage: "",
      };
    }

    const resolved = resolveSelectedLine(
      line,
      currentRecord.pos,
      selectedOption,
      records
    );

    if (!resolved.ok) {
      return {
        rows, records, complete: false, invalid: true,
        invalidMessage: "選択したアクションに対応する分岐が見つかりません", completeMessage: "",
      };
    }

    if (resolved.folded) foldedPositions.add(currentRecord.pos);
    line = resolved.line;

    const nextRecord = findNextRecord(
      records,
      line,
      currentRecord.pos,
      foldedPositions,
      seatOrder
    );

    if (!nextRecord) {
      return {
        rows, records, complete: true, invalid: false,
        invalidMessage: "",
        completeMessage: "このアクションラインはここで完了です。",
      };
    }

    currentRecord = nextRecord;
  }

  return {
    rows, records, complete: false, invalid: false,
    invalidMessage: "", completeMessage: "",
  };
}


const STUDY_RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const __studyRangeCache = new Map();

function studyActionKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/all[\s-]?in/g, "jam")
    .replace(/\s+/g, " ")
    .replace(/x\b/g, "bb");
}

function studyHandIndex(rank) {
  return STUDY_RANKS.indexOf(String(rank || "").toUpperCase());
}

function studyNormalizeHand(token) {
  const m = String(token || "").trim().toUpperCase().match(/^([AKQJT2-9])([AKQJT2-9])(S|O)?$/);
  if (!m) return null;
  const [, a, b, suffix = ""] = m;
  if (a === b) return `${a}${b}`;
  const ai = studyHandIndex(a);
  const bi = studyHandIndex(b);
  return ai <= bi ? `${a}${b}${suffix.toLowerCase()}` : `${b}${a}${suffix.toLowerCase()}`;
}

function studyExpandPlus(base) {
  const hand = studyNormalizeHand(base);
  if (!hand) return [];
  if (hand.length === 2) {
    const start = studyHandIndex(hand[0]);
    return STUDY_RANKS.slice(0, start + 1).map((r) => `${r}${r}`);
  }
  const high = hand[0];
  const low = hand[1];
  const suffix = hand[2];
  const hi = studyHandIndex(high);
  const li = studyHandIndex(low);
  if (hi < 0 || li < 0) return [hand];
  const out = [];
  for (let i = hi + 1; i <= li; i += 1) out.push(`${high}${STUDY_RANKS[i]}${suffix}`);
  return out;
}

function studyParseRange(rangeText) {
  const cacheKey = String(rangeText || "");
  if (__studyRangeCache.has(cacheKey)) return __studyRangeCache.get(cacheKey);
  const map = new Map();
  for (const rawPart of cacheKey.replace(/[–—]/g, "-").split(",")) {
    const part = rawPart.trim();
    if (!part) continue;
    const colon = part.lastIndexOf(":");
    const rawToken = (colon >= 0 ? part.slice(0, colon) : part).trim();
    const parsedWeight = colon >= 0 ? Number(part.slice(colon + 1).trim()) : 1;
    const weight = Number.isFinite(parsedWeight) ? Math.max(0, Math.min(1, parsedWeight)) : 1;
    const tokens = rawToken.endsWith("+")
      ? studyExpandPlus(rawToken.slice(0, -1))
      : rawToken.includes("-")
        ? rawToken.split("-").map(studyNormalizeHand).filter(Boolean)
        : [studyNormalizeHand(rawToken)].filter(Boolean);
    for (const hand of tokens) map.set(hand.toUpperCase(), weight);
  }
  __studyRangeCache.set(cacheKey, map);
  return map;
}

function studyProbabilities(options, bands, hand) {
  const keys = (options || []).map(studyActionKey);
  const probs = Object.fromEntries(keys.map((key) => [key, 0]));
  for (const band of bands || []) {
    const bandKey = studyActionKey(band?.action);
    const value = Number(studyParseRange(band?.range).get(String(hand).toUpperCase()) || 0);
    if (value <= 0) continue;
    if (Object.prototype.hasOwnProperty.call(probs, bandKey)) {
      probs[bandKey] += value;
      continue;
    }
    const head = bandKey.split(" ")[0];
    const matching = keys.filter((key) => key.split(" ")[0] === head);
    for (const key of matching) probs[key] += value;
  }
  const foldKey = keys.find((key) => key.startsWith("fold"));
  if (foldKey) {
    const used = Object.entries(probs).filter(([key]) => key !== foldKey).reduce((sum, [, value]) => sum + value, 0);
    probs[foldKey] = Math.max(0, 1 - used);
  }
  const total = Object.values(probs).reduce((sum, value) => sum + value, 0);
  if (total > 1.000001) for (const key of keys) probs[key] /= total;
  return probs;
}

function studyActionStyle(label) {
  const key = studyActionKey(label);
  if (key.startsWith("fold")) return { background: "#3b809b", color: "#f8fafc" };
  if (key.startsWith("call") || key.startsWith("check")) return { background: "#22a35a", color: "#fff" };
  if (key.startsWith("jam")) return { background: "#991b1b", color: "#fff" };
  if (key.startsWith("open") || key.includes("bet") || key.startsWith("raise")) return { background: "#dc2626", color: "#fff" };
  return { background: "#64748b", color: "#fff" };
}

function StudyRangeModal({ target, onClose }) {
  const [focusKey, setFocusKey] = React.useState("best");
  const [trail, setTrail] = React.useState([]);

  React.useEffect(() => {
    setFocusKey("best");
    if (!target) {
      setTrail([]);
      return;
    }
    setTrail([{
      record: target,
      line: normalizeBranchLine(target.lineBefore || target.facingLine || []),
      folded: new Set(target.foldedBefore || []),
      viaAction: null,
      viaActor: null,
    }]);
  }, [target]);

  React.useEffect(() => {
    if (!target) return undefined;
    const close = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [target, onClose]);

  if (!target || !trail.length) return null;

  const current = trail[trail.length - 1];
  const record = current.record;
  const options = record.options || [];
  const bands = record.spot?.bands || [];
  const optionKeys = options.map(studyActionKey);
  const tabs = ["best", ...optionKeys];
  const records = target.records || [];
  const seatOrder = target.seatOrder || getSeatOrder(records);
  const threeBetResponders = getThreeBetResponderInfo(records, current.line, current.folded);

  const matrix = STUDY_RANKS.map((r1, i) => STUDY_RANKS.map((r2, j) => {
    const hand = i === j ? `${r1}${r2}` : i < j ? `${r1}${r2}s` : `${r2}${r1}o`;
    const probs = studyProbabilities(options, bands, hand);
    let bestKey = optionKeys[0] || "fold";
    let bestValue = -1;
    for (const key of optionKeys) {
      const value = Number(probs[key] || 0);
      if (value > bestValue) { bestValue = value; bestKey = key; }
    }
    return { hand, probs, bestKey, bestValue: Math.max(0, bestValue) };
  }));

  const continuationItems = options.map((option) => {
    const resolved = resolveSelectedLine(current.line, record.pos, option, records);
    if (!resolved.ok) {
      return {
        option,
        nextRecords: [],
        line: current.line,
        folded: current.folded,
        invalid: true,
        spotCount: 0,
      };
    }

    const nextFolded = new Set(current.folded);
    if (resolved.folded) nextFolded.add(record.pos);
    const nextLine = resolved.line;
    const nextRecords = findNextRecords(records, nextLine, record.pos, nextFolded, seatOrder);
    return {
      option,
      nextRecords,
      line: nextLine,
      folded: nextFolded,
      invalid: false,
      spotCount: countReachableBranchRecords(records, nextLine, nextFolded),
    };
  });

  const openContinuation = (item, nextRecord) => {
    if (!nextRecord) return;
    setFocusKey("best");
    setTrail((prev) => [...prev, {
      record: nextRecord,
      line: item.line,
      folded: new Set(item.folded),
      viaAction: item.option,
      viaActor: record.pos,
    }]);
  };

  const jumpToTrail = (index) => {
    setFocusKey("best");
    setTrail((prev) => prev.slice(0, index + 1));
  };

  const switchThreeBetResponder = (nextRecord) => {
    setFocusKey("best");
    setTrail((prev) => {
      const next = [...prev];
      const currentNode = next[next.length - 1];
      next[next.length - 1] = { ...currentNode, record: nextRecord };
      return next;
    });
  };

  return (
    <div style={ui.studyOverlay} onClick={onClose}>
      <div style={ui.studyExplorerModal} onClick={(event) => event.stopPropagation()}>
        <div style={ui.studyModalHeader}>
          <div>
            <div style={ui.studyModalTitle}>レンジエクスプローラー</div>
            <div style={ui.studyModalSub}>Open → Call → 3bet後は、オープナーとコーラー双方の対応レンジを切り替えて確認できます。</div>
          </div>
          <button type="button" style={ui.studyCloseBtn} onClick={onClose} aria-label="閉じる">×</button>
        </div>

        <div style={ui.studyExplorerBody}>
          <section style={ui.studyRangePane}>
            <div style={ui.studyCurrentSpot}>
              <div style={ui.studyCurrentSpotTop}>
                <div>
                  <b>{record.pos}</b> {Number.isFinite(Number(record.eff)) ? `${record.eff}bb` : ""}
                </div>
                <span style={ui.studyDepthBadge}>深さ {current.line.length}</span>
              </div>
              <div style={ui.studyFacingText}>
                {current.line.length
                  ? current.line.map((step) => `${step.pos} ${step.act}${Number.isFinite(Number(step.size)) ? ` ${step.size}bb` : ""}`).join(" → ")
                  : "Unopened"}
              </div>
            </div>

            <div style={ui.studyTabs}>
              {tabs.map((key) => {
                const label = key === "best" ? "BEST" : options.find((option) => studyActionKey(option) === key) || key;
                const active = focusKey === key;
                const actionStyle = key === "best" ? {} : studyActionStyle(label);
                return <button key={key} type="button" style={{ ...ui.studyTab, ...actionStyle, ...(active ? ui.studyTabActive : null) }} onClick={() => setFocusKey(key)}>{label}</button>;
              })}
            </div>

            <div style={ui.studyMatrixWrap}>
              <div style={ui.studyMatrix}>
                {matrix.flat().map((cell) => {
                  const key = focusKey === "best" ? cell.bestKey : focusKey;
                  const value = focusKey === "best" ? cell.bestValue : Number(cell.probs[key] || 0);
                  const label = options.find((option) => studyActionKey(option) === key) || key;
                  const actionStyle = studyActionStyle(label);
                  const pct = Math.round(Math.max(0, Math.min(1, value)) * 1000) / 10;
                  return (
                    <div key={cell.hand} title={`${cell.hand}: ${pct}% ${label}`} style={{ ...ui.studyCell, backgroundImage: `linear-gradient(to right, ${actionStyle.background} 0%, ${actionStyle.background} ${pct}%, #1f2937 ${pct}%, #1f2937 100%)` }}>
                      <span style={ui.studyHand}>{cell.hand}</span>
                      <span style={ui.studyPct}>{Math.round(pct)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={ui.studyFoot}>セル内の数字は選択アクションの頻度（%）です。BESTでは最も高い頻度のアクションを表示します。</div>
          </section>

          <aside style={ui.studyExplorerSide}>
            <div style={ui.studySideTitle}>分岐ツリー・現在の経路</div>
            <div style={ui.studyTrail}>
              {trail.map((node, index) => (
                <button key={`${index}-${node.record.pos}`} type="button" style={{ ...ui.studyTrailItem, ...(index === trail.length - 1 ? ui.studyTrailItemActive : null) }} onClick={() => jumpToTrail(index)}>
                  <span style={ui.studyTrailRail} aria-hidden="true">
                    <span style={ui.studyTrailDot} />
                    {index < trail.length - 1 && <span style={ui.studyTrailLine} />}
                  </span>
                  <span style={ui.studyTrailStep}>{index + 1}</span>
                  <span style={ui.studyTrailCopy}>
                    {node.viaAction && <span style={ui.studyTrailVia}>{node.viaActor} {node.viaAction}</span>}
                    <b>{node.record.pos}</b> のレンジ
                  </span>
                </button>
              ))}
            </div>

            {threeBetResponders.length > 0 && (
              <>
                <div style={ui.studySideTitle}>3betに直面しているプレイヤー</div>
                <div style={ui.studyResponderPanel}>
                  <div style={ui.studyResponderHelp}>
                    オープナーと、オープンへコールしたプレイヤーを切り替えて、それぞれの3bet対応レンジを確認できます。
                  </div>
                  <div style={ui.studyResponderList}>
                    {threeBetResponders.map(({ record: responderRecord, role, threeBettor }) => {
                      const active = responderRecord.pos === record.pos;
                      return (
                        <button
                          key={`3bet-responder-${responderRecord.pos}`}
                          type="button"
                          style={{ ...ui.studyResponderBtn, ...(active ? ui.studyResponderBtnActive : null) }}
                          onClick={() => switchThreeBetResponder(responderRecord)}
                        >
                          <span style={ui.studyResponderIdentity}>
                            <b>{responderRecord.pos}</b>
                            <span style={ui.studyResponderRole}>{role}</span>
                          </span>
                          <span style={ui.studyResponderMeta}>
                            vs {threeBettor} 3bet · {(responderRecord.options || []).join(" / ")}
                          </span>
                          <span style={ui.studyBranchArrow}>›</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            <div style={ui.studySideTitle}>このプレイヤーのアクション分岐</div>
            <div style={ui.studyBranchGroups}>
              {continuationItems.map((item) => {
                const actionStyle = studyActionStyle(item.option);
                return (
                  <div key={item.option} style={ui.studyBranchGroup}>
                    <div style={{ ...ui.studyBranchActionHead, ...actionStyle }}>
                      <span>{record.pos} {item.option}</span>
                      <span style={ui.studySpotCount}>{item.spotCount} spots</span>
                    </div>

                    {item.nextRecords.length ? (
                      <div style={ui.studyBranchDestinations}>
                        {item.nextRecords.map((nextRecord) => (
                          <button
                            key={`${item.option}-${nextRecord.pos}`}
                            type="button"
                            style={ui.studyBranchDestinationBtn}
                            onClick={() => openContinuation(item, nextRecord)}
                          >
                            <span style={ui.studyBranchFork}>├─</span>
                            <span><b>{nextRecord.pos}</b> の次レンジ</span>
                            <span style={ui.studyBranchArrow}>›</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div style={ui.studyBranchEnd}>
                        <span style={ui.studyBranchFork}>└─</span>
                        {item.invalid ? "対応する分岐データなし" : "ライン終了 / ポストフロップへ"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {trail.length > 1 && (
              <button type="button" style={ui.studyExplorerBack} onClick={() => jumpToTrail(trail.length - 2)}>
                1つ前のレンジへ
              </button>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

function ActionBranchDemo({ pattern, selections, onSelect, onBack, onReset }) {
  const [rangeTarget, setRangeTarget] = React.useState(null);
  const demo = React.useMemo(
    () => buildBranchDemo(pattern, selections),
    [pattern, selections]
  );

  if (!pattern) return null;

  return (
    <div style={ui.branchDemo}>
      <div style={ui.branchHeader}>
        <div>
          <div style={ui.branchTitle}>アクション分岐デモ</div>
          <div style={ui.helperText}>
            選択履歴と facingLine を照合し、2人目・3人目以降もデータに沿って表示します。
          </div>
        </div>
        <div style={ui.branchHeaderButtons}>
          <button
            type="button"
            style={{
              ...ui.branchBackBtn,
              ...(selections.length === 0 ? ui.branchActionBtnDisabled : null),
            }}
            disabled={selections.length === 0}
            onClick={onBack}
          >
            1つ戻る
          </button>
          <button type="button" style={ui.branchResetBtn} onClick={onReset}>
            最初から
          </button>
        </div>
      </div>

      {demo.rows.length === 0 && !demo.invalid ? (
        <div style={ui.empty}>
          この問題には、UTGから開始できる連続アクションデータがありません。
        </div>
      ) : (
        <div style={ui.branchRows}>
          {demo.rows.map((row, rowListIndex) => (
            <div key={`${row.rowIndex}-${row.pos}`} style={ui.branchTreeRow}>
              <div style={ui.branchTreeRail} aria-hidden="true">
                <div style={ui.branchTreeDot} />
                {rowListIndex < demo.rows.length - 1 && <div style={ui.branchTreeLine} />}
              </div>
              <div style={ui.branchPlayer}>
              <div style={ui.branchPlayerHead}>
                <div style={ui.branchPlayerIdentity}>
                  <b>{row.pos}</b>
                  <span>{Number.isFinite(Number(row.eff)) ? `${row.eff}bb` : ""}</span>
                </div>
                <button
                  type="button"
                  style={{
                    ...ui.branchRangeBtn,
                    ...(!(Array.isArray(row.spot?.bands) && row.spot.bands.some((band) => String(band?.range || "").trim())) ? ui.branchRangeBtnDisabled : null),
                  }}
                  disabled={!(Array.isArray(row.spot?.bands) && row.spot.bands.some((band) => String(band?.range || "").trim()))}
                  onClick={() => setRangeTarget({ ...row, records: demo.records })}
                >
                  {Array.isArray(row.spot?.bands) && row.spot.bands.some((band) => String(band?.range || "").trim()) ? "レンジを見る" : "レンジなし"}
                </button>
              </div>

              <div style={ui.branchActions}>
                {row.options.map((option) => {
                  const active = row.selectedOption === option;
                  const disabled = demo.invalid || demo.complete;

                  return (
                    <button
                      key={option}
                      type="button"
                      className={`action ${active ? "action--selected" : ""}`}
                      style={{
                        ...ui.branchActionBtn,
                        ...(active ? ui.branchActionBtnSelected : null),
                        ...(disabled && !active ? ui.branchActionBtnDisabled : null),
                      }}
                      disabled={disabled}
                      onClick={() => onSelect(row.rowIndex, row.pos, option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
            </div>
          ))}
        </div>
      )}

      {demo.invalid && (
        <div style={ui.branchInvalid} role="alert">
          <div style={ui.branchInvalidTitle}>{demo.invalidMessage}</div>
          <div style={ui.branchInvalidText}>
            この先のアクションデータがないため、分岐を終了しました。
          </div>
          <button type="button" style={ui.branchInvalidResetBtn} onClick={onReset}>
            最初からやり直す
          </button>
        </div>
      )}

      {demo.complete && (
        <div style={ui.branchComplete}>{demo.completeMessage || "アクション選択が完了しました。"}</div>
      )}

      <StudyRangeModal target={rangeTarget} onClose={() => setRangeTarget(null)} />
    </div>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

function Home({ initialPatternId, initialCount }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [query, setQuery] = React.useState("");
  const [count, setCount] = React.useState(Number.isFinite(initialCount) ? initialCount : 9999);
  const [onlyAnte, setOnlyAnte] = React.useState(false);
  const [onlyChase, setOnlyChase] = React.useState(false);
  const [spotFilter, setSpotFilter] = React.useState("all");
  const [heroPosFilter, setHeroPosFilter] = React.useState(HERO_POS_FILTER_ALL);
  const [quizMode, setQuizMode] = React.useState(QUIZ_MODE_NORMAL);

  const patternMetaById = React.useMemo(() => {
    const map = new Map();
    for (const pattern of PATTERNS || []) {
      map.set(pattern.id, getSpotStats(pattern));
    }
    return map;
  }, []);

  const patternHeroPosById = React.useMemo(() => {
    const map = new Map();
    for (const pattern of PATTERNS || []) {
      map.set(pattern.id, getPatternHeroPositions(pattern));
    }
    return map;
  }, []);

  const heroPosOptions = React.useMemo(() => {
    const out = new Set();
    for (const pattern of PATTERNS || []) {
      for (const pos of getPatternHeroPositions(pattern)) out.add(pos);
    }
    return sortHeroPositions(Array.from(out));
  }, []);

  const filtered = React.useMemo(() => {
    const q = (query || "").trim().toLowerCase();
    return (PATTERNS || []).filter((p) => {
      if (onlyAnte && !String(p.id).toLowerCase().includes("ante")) return false;
      if (onlyChase && !String(p.id).toLowerCase().includes("chase")) return false;
      if (!matchesSpotFilter(p, spotFilter)) return false;
      if (!matchesHeroPosFilter(p, heroPosFilter)) return false;
      if (!q) return true;

      const hay = `${p.id} ${p.originalId || ""} ${p.label || ""} ${p.sourceFile || ""} ${displayPatternLabel(p)}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, onlyAnte, onlyChase, spotFilter, heroPosFilter]);

  const [selectedId, setSelectedId] = React.useState(initialPatternId ?? (PATTERNS?.[0]?.id ?? ""));

  const selected = React.useMemo(
    () => (PATTERNS || []).find((p) => p.id === selectedId) || null,
    [selectedId]
  );

  const [branchSelections, setBranchSelections] = React.useState([]);

  React.useEffect(() => {
    setBranchSelections([]);
  }, [selectedId]);

  const selectBranchAction = React.useCallback((rowIndex, pos, option) => {
    setBranchSelections((prev) => [
      ...prev.slice(0, rowIndex),
      { pos, option },
    ]);
  }, []);

  const backBranchAction = React.useCallback(() => {
    setBranchSelections((prev) => prev.slice(0, -1));
  }, []);

  React.useEffect(() => {
    if (!filtered.length) return;
    if (!filtered.some((p) => p.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  const previewQuestion = React.useMemo(() => {
    if (!selected) return null;

    const spots = Array.isArray(selected.spots) ? selected.spots : [];
    const previewTarget = spots.length
      ? spots.find((spot) => heroPosFilter === HERO_POS_FILTER_ALL || getSpotHeroPos(spot) === heroPosFilter) || spots[0]
      : selected;

    if (!previewTarget || typeof previewTarget.questionBuilder !== "function") return null;

    try {
      return previewTarget.questionBuilder("AsKs");
    } catch (_err) {
      return null;
    }
  }, [selected, heroPosFilter]);

  const derivedTableSize = React.useMemo(() => {
    const n = Array.isArray(previewQuestion?.stacks) ? previewQuestion.stacks.length : 0;
    if (n >= 3 && n <= 9) return n;
    return 6;
  }, [previewQuestion]);

  const preview = React.useMemo(() => {
    if (!previewQuestion) return null;
    return {
      pos: previewQuestion?.pos,
      eff: previewQuestion?.eff,
      facing: previewQuestion?.facing,
      stacksRaw: previewQuestion?.stacks,
      hand: "AsKs",
    };
  }, [previewQuestion]);

  const previewPositions = React.useMemo(() => {
    return TABLE_SIZES[derivedTableSize] || TABLE_SIZES[6];
  }, [derivedTableSize]);

  const previewStacks = React.useMemo(() => {
    if (!preview) return null;
    return normalizeStacksForPositions(preview.stacksRaw, previewPositions, preview.eff ?? 0);
  }, [preview, previewPositions]);

  const selectedStats = React.useMemo(() => {
    if (!selected) return null;
    return patternMetaById.get(selected.id) || getSpotStats(selected);
  }, [selected, patternMetaById]);

  const selectedHeroPositions = React.useMemo(() => {
    if (!selected) return [];
    return patternHeroPosById.get(selected.id) || getPatternHeroPositions(selected);
  }, [selected, patternHeroPosById]);

  const startSelected = React.useCallback(() => {
    if (!selectedId) return;
    navigate("/quiz", {
      state: {
        patternId: selectedId,
        count,
        tableSize: derivedTableSize,
        spotFilter,
        heroPosFilter,
        quizMode,
        candidatePatternIds: filtered.map((p) => p.id),
        actionPath: branchSelections,
      },
    });
  }, [navigate, selectedId, count, derivedTableSize, spotFilter, heroPosFilter, quizMode, filtered, branchSelections]);

  return (
    <div style={ui.wrap}>
      <div style={{ ...ui.header, flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center" }}>
        <div>
          <div style={ui.title}>問題選択</div>
          <div style={ui.subtitle}>PATTERNS から出題パターンを選択して開始します</div>
        </div>

        <div style={{ ...ui.headerActions, width: isMobile ? "100%" : "auto" }}>
          <button style={{ ...ui.primaryBtn, width: isMobile ? "100%" : "auto" }} disabled={!selectedId} onClick={startSelected}>
            {quizMode === QUIZ_MODE_RANDOM ? "表示中からランダム開始" : "選択中で開始"}
          </button>
        </div>
      </div>

      <div style={ui.controlPanel}>
        <div style={ui.searchRow}>
          <input
            style={ui.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="検索（例: BTN / 50bb / SB vs BTN / chase / ante）"
          />

          <div style={ui.countBox}>
            <div style={ui.countLabel}>問題数</div>
            <input
              type="number"
              min={1}
              max={9999}
              value={count}
              onChange={(e) => setCount(Number(e.target.value || 9999))}
              style={ui.countInput}
            />
          </div>
        </div>

        <div style={ui.filterSection}>
          <div style={ui.filterLabel}>出題モード</div>
          <div style={ui.segmentWrap}>
            <button
              type="button"
              style={{ ...ui.segmentBtn, ...(quizMode === QUIZ_MODE_NORMAL ? ui.segmentBtnActive : null) }}
              onClick={() => setQuizMode(QUIZ_MODE_NORMAL)}
            >
              ノーマル
            </button>
            <button
              type="button"
              style={{ ...ui.segmentBtn, ...(quizMode === QUIZ_MODE_RANDOM ? ui.segmentBtnActive : null) }}
              onClick={() => setQuizMode(QUIZ_MODE_RANDOM)}
            >
              ランダム
            </button>
          </div>
          <div style={ui.helperText}>
            ノーマルでは選択中の1パターンを出題し、ランダムでは現在表示中のパターン一覧から毎問抽選します。
          </div>
        </div>

        <div style={ui.filterSection}>
          <div style={ui.filterLabel}>ゲーム条件</div>
          <div style={ui.filterRow}>
            <label style={ui.chkPill}>
              <input type="checkbox" checked={onlyAnte} onChange={(e) => setOnlyAnte(e.target.checked)} />
              <span>トーナメントのみ</span>
            </label>

            <label style={ui.chkPill}>
              <input type="checkbox" checked={onlyChase} onChange={(e) => setOnlyChase(e.target.checked)} />
              <span>Poker Chaseのみ</span>
            </label>
          </div>
        </div>

        <div style={ui.filterSection}>
          <div style={ui.filterLabel}>スポット種別</div>
          <div style={ui.segmentWrap}>
            {SPOT_FILTERS.map((item) => {
              const active = spotFilter === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  style={{ ...ui.segmentBtn, ...(active ? ui.segmentBtnActive : null) }}
                  onClick={() => setSpotFilter(item.key)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div style={ui.helperText}>
            facingなし= facingLine 0件、openのみ= 1件かつ act が open、その他は スクイーズ+vs3bet として分類しています。
          </div>
        </div>

        <div style={ui.filterSection}>
          <div style={ui.filterLabel}>action プレイヤー</div>
          <div style={ui.filterRow}>
            <select style={ui.filterSelect} value={heroPosFilter} onChange={(e) => setHeroPosFilter(e.target.value)}>
              <option value={HERO_POS_FILTER_ALL}>すべて</option>
              {heroPosOptions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>
          <div style={ui.helperText}>question.jsx の heroPos を参照して、action するプレイヤーを絞り込みます。</div>
        </div>

        <div style={ui.metaRow}>
          <div style={ui.meta}>表示: <b>{filtered.length}</b> 件 / 全 <b>{PATTERNS?.length ?? 0}</b> 件</div>
          <div style={ui.meta}>現在のスポット条件: <b>{SPOT_FILTERS.find((x) => x.key === spotFilter)?.label || "すべて"}</b></div>
          <div style={ui.meta}>現在のactionプレイヤー: <b>{heroPosFilter === HERO_POS_FILTER_ALL ? "すべて" : heroPosFilter}</b></div>
          <div style={ui.meta}>出題モード: <b>{quizMode === QUIZ_MODE_RANDOM ? "ランダム" : "ノーマル"}</b></div>
        </div>
      </div>

      <div style={{ ...ui.grid, gridTemplateColumns: isMobile ? "1fr" : "minmax(360px, 1.15fr) minmax(320px, 0.95fr)" }}>
        <div style={{ ...ui.list, maxHeight: isMobile ? "300px" : "calc(100vh - 250px)" }}>
          {PATTERNS.length === 0 ? (
            <div style={ui.empty}>question.jsx 系ファイルが見つかりません。<code>question.jsx</code> または <code>*question.jsx</code> を同じフォルダに置くと自動で一覧へ追加されます。</div>
          ) : filtered.length === 0 ? (
            <div style={ui.empty}>条件に一致するパターンがありません。検索やフィルタを変更してください。</div>
          ) : (
            filtered.map((p) => {
              const active = p.id === selectedId;
              const stats = patternMetaById.get(p.id) || getSpotStats(p);
              return (
                <button
                  key={p.id}
                  style={{ ...ui.cardBtn, ...(active ? ui.cardBtnActive : null) }}
                  onClick={() => setSelectedId(p.id)}
                >
                  <div style={ui.cardTop}>
                    <div style={ui.cardTitle}>{displayPatternLabel(p)}</div>
                    <div style={ui.badges}>
                      {String(p.id).toLowerCase().includes("ante") && <span style={ui.badge}>BBante</span>}
                      {String(p.id).toLowerCase().includes("chase") && <span style={ui.badge}>chase</span>}
                    </div>
                  </div>
                  <div style={ui.cardId}>{p.id}</div>
                  {p.sourceFile && p.sourceFile !== "question" && <div style={ui.cardId}>source: {p.sourceFile}</div>}
                  <div style={ui.statPills}>
                    <span style={ui.statPill}>facingなし {stats.noFacing}</span>
                    <span style={ui.statPill}>openのみ {stats.openOnly}</span>
                    <span style={ui.statPill}>スクイーズ+vs3bet {stats.multiLine}</span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div style={ui.detail}>
          {selected ? (
            <>
              <div style={{ ...ui.detailHeader, flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center" }}>
                <div>
                  <div style={ui.detailTitle}>{displayPatternLabel(selected)}</div>
                  <div style={ui.detailId}>{selected.id}</div>
                  {selected.sourceFile && selected.sourceFile !== "question" && <div style={ui.detailId}>source: {selected.sourceFile}</div>}
                </div>
                <button style={{ ...ui.primaryBtn, width: isMobile ? "100%" : "auto" }} disabled={!selectedId} onClick={startSelected}>
                  {quizMode === QUIZ_MODE_RANDOM ? "この条件でランダム開始" : "このパターンで開始"}
                </button>
              </div>

              <div style={ui.detailBody}>
                <ActionBranchDemo
                  pattern={selected}
                  selections={branchSelections}
                  onSelect={selectBranchAction}
                  onBack={backBranchAction}
                  onReset={() => setBranchSelections([])}
                />

                <div style={ui.summaryGrid}>
                  <div style={ui.summaryCard}>
                    <div style={ui.summaryLabel}>問題数</div>
                    <div style={ui.summaryValue}>{count}</div>
                  </div>
                  <div style={ui.summaryCard}>
                    <div style={ui.summaryLabel}>table</div>
                    <div style={ui.summaryValue}>{derivedTableSize}-max</div>
                  </div>
                  <div style={ui.summaryCard}>
                    <div style={ui.summaryLabel}>mode</div>
                    <div style={ui.summaryValue}>{quizMode === QUIZ_MODE_RANDOM ? "ランダム" : "ノーマル"}</div>
                  </div>
                  <div style={ui.summaryCard}>
                    <div style={ui.summaryLabel}>bands</div>
                    <div style={ui.summaryValue}>{Array.isArray(selected.bands) ? selected.bands.length : 0}</div>
                  </div>
                </div>

                {selectedStats && (
                  <div style={ui.block}>
                    <div style={ui.blockTitle}>spot 内訳</div>
                    <div style={ui.statPillsLarge}>
                      <span style={ui.statPill}>facingなし {selectedStats.noFacing}</span>
                      <span style={ui.statPill}>openのみ {selectedStats.openOnly}</span>
                      <span style={ui.statPill}>スクイーズ+vs3bet {selectedStats.multiLine}</span>
                    </div>
                  </div>
                )}

                <div style={ui.block}>
                  <div style={ui.blockTitle}>パターン情報</div>
                  <div style={ui.kvList}>
                    <div style={ui.kv}><div style={ui.k}>questionBuilder</div><div style={ui.v}>{typeof selected.questionBuilder === "function" ? "あり" : "なし"}</div></div>
                    <div style={ui.kv}><div style={ui.k}>spots</div><div style={ui.v}>{Array.isArray(selected.spots) ? selected.spots.length : 0}</div></div>
                    <div style={ui.kv}><div style={ui.k}>選択中スポット条件</div><div style={ui.v}>{SPOT_FILTERS.find((x) => x.key === spotFilter)?.label || "すべて"}</div></div>
                    <div style={ui.kv}><div style={ui.k}>選択中actionプレイヤー</div><div style={ui.v}>{heroPosFilter === HERO_POS_FILTER_ALL ? "すべて" : heroPosFilter}</div></div>
                    <div style={ui.kv}><div style={ui.k}>出題モード</div><div style={ui.v}>{quizMode === QUIZ_MODE_RANDOM ? "ランダム" : "ノーマル"}</div></div>
                    <div style={ui.kv}><div style={ui.k}>対象heroPos</div><div style={ui.v}>{selectedHeroPositions.length ? selectedHeroPositions.join(" / ") : "—"}</div></div>
                  </div>
                </div>

                <div style={ui.block}>
                  <div style={ui.blockTitle}>スタック状況プレビュー（{derivedTableSize}-max）</div>
                  {preview && previewStacks ? (
                    <StackPreview tableSize={derivedTableSize} stacks={previewStacks} heroPos={preview.pos} heroHand={preview.hand} />
                  ) : (
                    <div style={ui.empty}>このパターンはスタック情報のプレビューを生成できません。</div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div style={ui.empty}>左の一覧からパターンを選択してください。</div>
          )}
        </div>
      </div>
    </div>
  );
}

const ui = {
  wrap: { maxWidth: 1160, margin: "0 auto", padding: 16 },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 14,
  },
  headerActions: { display: "flex", gap: 10, justifyContent: "flex-end" },
  title: { fontSize: 24, fontWeight: 900, color: "#111827" },
  subtitle: { fontSize: 13, color: "#6b7280", marginTop: 4 },

  controlPanel: {
    display: "grid",
    gap: 12,
    padding: 14,
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    background: "#fff",
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
    marginBottom: 14,
  },
  searchRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
  },
  search: {
    flex: "1 1 420px",
    minWidth: 260,
    padding: "11px 13px",
    borderRadius: 12,
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: 14,
  },
  filterSection: { display: "grid", gap: 8 },
  filterLabel: { fontSize: 12, fontWeight: 800, color: "#6b7280" },
  filterRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  chkPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    background: "#f9fafb",
    fontSize: 13,
    color: "#374151",
  },
  segmentWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  segmentBtn: {
    border: "1px solid #d1d5db",
    borderRadius: 999,
    background: "#fff",
    color: "#374151",
    padding: "8px 12px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
  },
  segmentBtnActive: {
    background: "#111827",
    color: "#fff",
    borderColor: "#111827",
  },
  helperText: { fontSize: 12, color: "#6b7280", lineHeight: 1.5 },
  filterSelect: {
    minWidth: 160,
    padding: "9px 10px",
    borderRadius: 10,
    border: "1px solid #d1d5db",
    fontSize: 14,
    background: "#fff",
    color: "#111827",
  },
  countBox: { display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" },
  countLabel: { fontSize: 12, color: "#6b7280", fontWeight: 700 },
  countInput: {
    width: 92,
    padding: "9px 10px",
    borderRadius: 10,
    border: "1px solid #d1d5db",
    fontSize: 14,
  },
  metaRow: { display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between" },
  meta: { fontSize: 12, color: "#6b7280" },

  grid: { display: "grid", gap: 14 },
  list: {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    background: "#fff",
    padding: 10,
    overflow: "auto",
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
  },
  detail: {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    background: "#fff",
    padding: 14,
    minHeight: 280,
    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
  },
  empty: { padding: 16, color: "#6b7280", fontSize: 13 },

  cardBtn: {
    width: "100%",
    textAlign: "left",
    padding: 12,
    borderRadius: 14,
    border: "1px solid #f3f4f6",
    background: "#fff",
    cursor: "pointer",
    marginBottom: 8,
  },
  cardBtnActive: {
    borderColor: "#111827",
    boxShadow: "0 0 0 2px rgba(17,24,39,0.10)",
    background: "#fcfcfd",
  },
  cardTop: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 },
  cardTitle: { fontWeight: 800, fontSize: 14, color: "#111827", lineHeight: 1.45 },
  cardId: { fontSize: 12, color: "#6b7280", marginTop: 6, wordBreak: "break-word" },
  badges: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" },
  badge: {
    fontSize: 11,
    padding: "2px 8px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    color: "#374151",
    background: "#f9fafb",
    whiteSpace: "nowrap",
  },
  statPills: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 },
  statPillsLarge: { display: "flex", flexWrap: "wrap", gap: 8 },
  statPill: {
    fontSize: 11,
    fontWeight: 700,
    padding: "4px 8px",
    borderRadius: 999,
    background: "#f3f4f6",
    color: "#374151",
  },

  detailHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 },
  detailTitle: { fontSize: 18, fontWeight: 900, color: "#111827" },
  detailId: { fontSize: 12, color: "#6b7280", marginTop: 4, wordBreak: "break-word" },
  detailBody: { marginTop: 14, display: "grid", gap: 12 },
  summaryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10 },
  summaryCard: {
    padding: 12,
    borderRadius: 14,
    background: "#f9fafb",
    border: "1px solid #eef2f7",
  },
  summaryLabel: { fontSize: 12, color: "#6b7280", fontWeight: 700, textTransform: "uppercase" },
  summaryValue: { fontSize: 18, fontWeight: 900, color: "#111827", marginTop: 4 },
  block: { display: "grid", gap: 8 },
  blockTitle: { fontSize: 12, color: "#6b7280", fontWeight: 800 },
  kvList: { display: "grid", gap: 8 },
  kv: { display: "grid", gridTemplateColumns: "128px 1fr", gap: 10, alignItems: "center" },
  k: { fontSize: 12, color: "#6b7280" },
  v: { fontSize: 13, color: "#111827" },

  branchDemo: {
    display: "grid",
    gap: 10,
    padding: 12,
    borderRadius: 14,
    border: "1px solid #d1fae5",
    background: "#0f172a",
    color: "#e5e7eb",
  },
  branchHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 },
  branchTitle: { fontSize: 15, fontWeight: 900, color: "#bbf7d0" },
  branchHeaderButtons: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" },
  branchBackBtn: {
    border: "1px solid rgba(255,255,255,.26)",
    borderRadius: 9,
    background: "rgba(255,255,255,.08)",
    color: "#f8fafc",
    padding: "7px 10px",
    fontWeight: 800,
    cursor: "pointer",
  },
  branchResetBtn: {
    border: "1px solid #475569",
    borderRadius: 9,
    padding: "7px 10px",
    background: "#1e293b",
    color: "#fff",
    cursor: "pointer",
  },
  branchRows: { display: "grid", gap: 0 },
  branchTreeRow: {
    display: "grid",
    gridTemplateColumns: "24px minmax(0, 1fr)",
    alignItems: "stretch",
    gap: 8,
  },
  branchTreeRail: { position: "relative", display: "flex", justifyContent: "center" },
  branchTreeDot: {
    position: "absolute",
    top: 19,
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 0 4px rgba(34,197,94,.18)",
    zIndex: 2,
  },
  branchTreeLine: {
    position: "absolute",
    top: 25,
    bottom: -19,
    width: 2,
    background: "rgba(134,239,172,.45)",
  },
  branchPlayer: {
    border: "1px solid #334155",
    borderRadius: 10,
    overflow: "hidden",
    background: "#111827",
  },
  branchPlayerHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 10px",
    color: "#cbd5e1",
    borderBottom: "1px solid #334155",
  },
  branchPlayerIdentity: { display: "flex", alignItems: "center", gap: 8 },
  branchRangeBtn: {
    border: "1px solid rgba(134,239,172,.55)",
    borderRadius: 8,
    background: "rgba(34,197,94,.14)",
    color: "#bbf7d0",
    padding: "5px 9px",
    fontSize: 12,
    fontWeight: 900,
    cursor: "pointer",
  },
  branchRangeBtnDisabled: { opacity: 0.42, cursor: "not-allowed" },
  branchActions: { display: "grid", gap: 3, padding: 5 },
  studyOverlay: { position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: 12, background: "rgba(2,6,23,.78)" },
  studyModal: { width: "min(680px, 96vw)", maxHeight: "94vh", overflow: "auto", borderRadius: 16, border: "1px solid #334155", background: "#0f172a", color: "#f8fafc", boxShadow: "0 24px 70px rgba(0,0,0,.5)" },
  studyExplorerModal: { width: "min(1120px, 98vw)", maxHeight: "96vh", overflow: "auto", borderRadius: 16, border: "1px solid #334155", background: "#0f172a", color: "#f8fafc", boxShadow: "0 24px 70px rgba(0,0,0,.5)" },
  studyExplorerBody: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 12, padding: "0 14px 14px" },
  studyRangePane: { minWidth: 0, border: "1px solid #273449", borderRadius: 12, overflow: "hidden", background: "#111827" },
  studyCurrentSpot: { display: "grid", gap: 4, padding: "10px 14px", borderBottom: "1px solid #273449", background: "#172033" },
  studyCurrentSpotTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 },
  studyDepthBadge: { padding: "3px 8px", borderRadius: 999, border: "1px solid #475569", background: "#0f172a", color: "#bbf7d0", fontSize: 10, fontWeight: 900 },
  studyFacingText: { fontSize: 12, color: "#94a3b8", lineHeight: 1.5, overflowWrap: "anywhere" },
  studyExplorerSide: { display: "grid", alignContent: "start", gap: 10, padding: 12, border: "1px solid #273449", borderRadius: 12, background: "#111827" },
  studySideTitle: { marginTop: 2, fontSize: 12, fontWeight: 900, letterSpacing: ".04em", color: "#94a3b8" },
  studyResponderPanel: { display: "grid", gap: 8, padding: 10, border: "1px solid #334155", borderRadius: 11, background: "rgba(15,23,42,.68)" },
  studyResponderHelp: { fontSize: 11, lineHeight: 1.55, color: "#cbd5e1" },
  studyResponderList: { display: "grid", gap: 7 },
  studyResponderBtn: { display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", alignItems: "center", gap: 4, width: "100%", border: "1px solid #475569", borderRadius: 9, padding: "9px 10px", background: "#1e293b", color: "#f8fafc", textAlign: "left", cursor: "pointer" },
  studyResponderBtnActive: { borderColor: "#38bdf8", boxShadow: "0 0 0 2px rgba(56,189,248,.18) inset", background: "#0f3347" },
  studyResponderIdentity: { display: "flex", alignItems: "center", gap: 7, minWidth: 0 },
  studyResponderRole: { border: "1px solid #64748b", borderRadius: 999, padding: "2px 6px", fontSize: 10, fontWeight: 800, color: "#bae6fd", whiteSpace: "nowrap" },
  studyResponderMeta: { gridColumn: "1 / 2", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 10, color: "#94a3b8" },
  studyTrail: { display: "grid", gap: 6 },
  studyTrailItem: { position: "relative", display: "flex", alignItems: "center", gap: 8, width: "100%", border: "1px solid #334155", borderRadius: 9, padding: "8px 9px", background: "#172033", color: "#e2e8f0", textAlign: "left", cursor: "pointer" },
  studyTrailItemActive: { borderColor: "#86efac", boxShadow: "0 0 0 1px rgba(134,239,172,.25)" },
  studyTrailRail: { position: "relative", alignSelf: "stretch", width: 12, flex: "0 0 12px" },
  studyTrailDot: { position: "absolute", top: "50%", left: 3, width: 7, height: 7, marginTop: -3, borderRadius: "50%", background: "#86efac" },
  studyTrailLine: { position: "absolute", top: "50%", left: 6, width: 1, height: "calc(100% + 13px)", background: "rgba(134,239,172,.42)" },
  studyTrailStep: { display: "inline-grid", placeItems: "center", flex: "0 0 auto", width: 22, height: 22, borderRadius: "50%", background: "#334155", fontSize: 11, fontWeight: 900 },
  studyTrailCopy: { display: "grid", gap: 2 },
  studyTrailVia: { display: "block", color: "#86efac", fontSize: 11 },
  studyBranchGroups: { display: "grid", gap: 9 },
  studyBranchGroup: { overflow: "hidden", border: "1px solid #334155", borderRadius: 10, background: "#0f172a" },
  studyBranchActionHead: { display: "flex", justifyContent: "space-between", gap: 8, padding: "8px 10px", fontWeight: 900 },
  studySpotCount: { alignSelf: "center", padding: "2px 6px", borderRadius: 999, background: "rgba(15,23,42,.32)", fontSize: 10, whiteSpace: "nowrap" },
  studyBranchDestinations: { display: "grid", padding: "4px" },
  studyBranchDestinationBtn: { display: "grid", gridTemplateColumns: "24px 1fr auto", alignItems: "center", gap: 5, width: "100%", border: 0, borderRadius: 7, padding: "8px 7px", background: "transparent", color: "#e2e8f0", textAlign: "left", cursor: "pointer" },
  studyBranchFork: { color: "#64748b", fontFamily: "monospace", fontWeight: 900 },
  studyBranchArrow: { color: "#86efac", fontSize: 20, lineHeight: 1 },
  studyBranchEnd: { display: "grid", gridTemplateColumns: "24px 1fr", gap: 5, padding: "9px 11px", color: "#94a3b8", fontSize: 12 },
  studyContinuationList: { display: "grid", gap: 7 },
  studyContinuationBtn: { display: "grid", gap: 3, width: "100%", border: "1px solid rgba(255,255,255,.25)", borderRadius: 9, padding: "9px 10px", textAlign: "left", fontWeight: 900, cursor: "pointer" },
  studyContinuationBtnDisabled: { opacity: .42, cursor: "not-allowed", filter: "grayscale(.3)" },
  studyContinuationNext: { fontSize: 11, fontWeight: 700, opacity: .82 },
  studyExplorerBack: { width: "100%", border: "1px solid #475569", borderRadius: 9, padding: "8px 10px", background: "#1e293b", color: "#fff", fontWeight: 800, cursor: "pointer" },
  studyModalHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 16px 10px" },
  studyModalTitle: { fontSize: 18, fontWeight: 900 },
  studyModalSub: { marginTop: 3, fontSize: 12, color: "#94a3b8" },
  studyCloseBtn: { border: 0, background: "transparent", color: "#fff", fontSize: 28, cursor: "pointer", lineHeight: 1 },
  studyTabs: { display: "flex", flexWrap: "wrap", gap: 7, padding: "0 16px 12px" },
  studyTab: { border: "1px solid rgba(255,255,255,.24)", borderRadius: 999, background: "#334155", color: "#fff", padding: "6px 10px", fontSize: 12, fontWeight: 900, cursor: "pointer" },
  studyTabActive: { outline: "3px solid rgba(255,255,255,.45)", outlineOffset: 1 },
  studyMatrixWrap: { overflowX: "auto", padding: "0 10px 8px" },
  studyMatrix: { minWidth: 520, display: "grid", gridTemplateColumns: "repeat(13, minmax(38px, 1fr))", borderTop: "1px solid #334155", borderLeft: "1px solid #334155" },
  studyCell: { position: "relative", height: 42, borderRight: "1px solid #334155", borderBottom: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  studyHand: { position: "relative", zIndex: 1, fontSize: 12, fontWeight: 900, textShadow: "0 1px 2px #000" },
  studyPct: { position: "absolute", right: 3, bottom: 1, zIndex: 1, fontSize: 9, color: "#cbd5e1" },
  studyFoot: { padding: "4px 16px 16px", color: "#94a3b8", fontSize: 11, lineHeight: 1.5 },
  branchActionBtn: {
    width: "100%",
    border: "1px solid transparent",
    borderRadius: 6,
    padding: "7px 9px",
    background: "transparent",
    color: "#e5e7eb",
    textAlign: "left",
    cursor: "pointer",
    fontSize: 14,
  },
  branchActionBtnSelected: {
    background: "#4b5563",
    borderColor: "#86efac",
    color: "#fff",
    boxShadow: "0 0 0 1px rgba(134,239,172,.35)",
  },
  branchActionBtnDisabled: {
    opacity: 0.45,
    cursor: "not-allowed",
  },
  branchInvalid: {
    display: "grid",
    gap: 8,
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #f87171",
    background: "#450a0a",
    color: "#fee2e2",
  },
  branchInvalidTitle: {
    fontSize: 15,
    fontWeight: 900,
  },
  branchInvalidText: {
    fontSize: 13,
    lineHeight: 1.6,
    color: "#fecaca",
  },
  branchInvalidResetBtn: {
    justifySelf: "start",
    border: "1px solid #fca5a5",
    borderRadius: 8,
    padding: "7px 10px",
    background: "#7f1d1d",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
  },
  branchComplete: {
    padding: "9px 10px",
    borderRadius: 9,
    background: "#064e3b",
    color: "#d1fae5",
    fontWeight: 800,
    fontSize: 13,
  },

  primaryBtn: {
    border: "none",
    borderRadius: 12,
    padding: "10px 14px",
    background: "#111827",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};

export default Home;
