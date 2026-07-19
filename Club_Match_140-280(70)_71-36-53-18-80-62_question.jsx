// ============================================================
// AUTO-GENERATED from Club_Match_140-280(70)_71-36-53-18-80-62.zip
// question.jsx compatible format / split by zip file
// Generated on 2026-03-26
// ============================================================

// ============================================================
// AUTO-GENERATED from uploaded Club Match zip files
// question.jsx compatible format / facingLine max 3
// Generated on 2026-03-26
// ============================================================

// ---- id normalization ----
function __slugId(v) {
  const s = String(v ?? "").trim();
  const out = s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return out || "x";
}

function __normalizePatterns(patterns) {
  const used = new Set();
  return (patterns || []).map((p, pi) => {
    const pKey = __slugId(p?.id ?? p?.label ?? `pattern-${pi}`);
    const spots = (p?.spots || []).map((s, si) => {
      const spotKey = __slugId(s?.id ?? s?.label ?? `spot-${si}`);
      const base = `${pKey}:${spotKey}`;
      let id = base;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      return { ...s, id };
    });
    return { ...p, spots };
  });
}

export function describeFacingLine(facingLine = []) {
  return (facingLine || [])
    .map(({ pos, act, size }) => `${pos} ${act} ${size}bb`)
    .join(" ");
}

export function facingId(facingLine = []) {
  return (facingLine || [])
    .map(({ pos, act, size }) => `${pos}:${String(act).toUpperCase()}@${size}`)
    .join("|");
}

function __makeSpotFromState(s) {
  const facingStr = describeFacingLine(s.facingLine || []);
  const labelFacing = facingStr || "Unopened";

  return {
    id: `${s.heroPos}-${s.presetId}`,
    label: `${s.heroPos} ${s.eff}bb vs ${labelFacing}`,
    questionBuilder: (hand) => ({
      hand,
      pos: s.heroPos,
      eff: s.eff,
      stacks: s.stacks,
      facing: labelFacing,
      facingLine: s.facingLine || [],
      options: s.options,
    }),
    bands: s.bands,
    answerBuilder: (pattern, hand, _weight, optionsBB) => ({
      index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5),
    }),
  };
}

function __attachFacingLineToState(stateArr, presetsArr) {
  const map = new Map();
  (presetsArr || []).forEach((p) => map.set(p.id, p.facingLine || []));
  return (stateArr || []).map((s) => ({ ...s, facingLine: map.get(s.presetId) || [] }));
}

// blinds: BB=28000 / SB=14000 / ante=7000
export const CLUB_MATCH_140_280_70_71_36_53_18_80_62_STACKS_BB = [
  71.43,
  35.71,
  53.57,
  17.86,
  80.36,
  62.5
];

export const CLUB_MATCH_140_280_70_71_36_53_18_80_62_FACING_PRESETS = [
  {
    "id": "START",
    "facingLine": [],
    "heroPositions": [
      "LJ",
      "HJ",
      "CO",
      "BTN",
      "SB"
    ]
  },
  {
    "id": "SB:CALL@0.5",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3.5",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 3.5
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@12",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 12.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@62.25",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.5",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.5|BB:3BET@9",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@3.5|BB:3BET@9|SB:4BET@18",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.5|BB:3BET@9|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.5|BB:3BET@62.25",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@17.61",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:CALL@1.8",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BB",
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@17.61",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@17.61",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@17.61|SB:CALL@17.11",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 17.61
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 17.11
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@17.61|SB:CALL@17.11|BB:3BET@62.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 17.61
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 17.11
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@17.61|SB:3BET@62.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 17.61
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@17.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@20",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:CALL@1.8",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@17.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@20",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@62.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@17.61",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@17.61",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@17.61|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@17.61|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:CALL@1.8",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|HJ:4BET@17.61",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@17.61",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@17.61|BB:4BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@17.61|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@17.61",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@35.46",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@17.61",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@53.32|BB:CALL@52.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 52.32
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@53.32|SB:4BET@62.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@17.61",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@20",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:CALL@1.8",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.8
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@20",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@17.61|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@17.61|SB:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@53.32|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@53.32|SB:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@35.46",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@11.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@20",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 20.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@35.46",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 35.46
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@35.46|BB:4BET@62.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 35.46
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 62.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@35.46|SB:4BET@71.18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 35.46
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 71.18
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@35.46|BTN:CALL@17.61",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 35.46
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 17.61
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@35.46|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 35.46
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  }
];

export const CLUB_MATCH_140_280_70_71_36_53_18_80_62_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0001, 44:0.3371, A4o:0.1306, 55:0.9998, K5o:0.0001, A5o, 65s:0.2055, 66, A6o:0.0035, 76s:0.7704, 77, A7o:0.9303, 87s:0.4718, 88, K8o:0.0001, A8o, 97s:0.4567, 98s:0.9916, 99, A9o, T7s:0.1922, T8s:0.9854, T9s:0.9993, TT, JTo:0.9819, QTo:0.9998, KTo, ATo, J7s:0.0001, J8s:0.9963, J9s, JTs:0.9996, JJ, QJo, KJo, AJo, Q5s:0.0018, Q6s:0.0763, Q7s:0.7830, Q8s:0.9997, Q9s:0.9997, QTs, QJs, QQ, KQo, AQo, K2s:0.0001, K3s:0.7905, K4s:0.9987, K5s, K6s, K7s:0.9994, K8s, K9s:0.9995, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "55:0.9244, A5o:0.0006, 66:0.9998, A6o:0.0001, 77, A7o:0.0001, 88, A8o:0.0048, 98s:0.1554, 99, K9o:0.0001, A9o:0.8080, T7s:0.0003, T8s:0.3450, T9s:0.9994, TT, QTo:0.0007, KTo:0.0051, ATo, J7s:0.0001, J8s:0.0010, J9s:0.9492, JTs, JJ, QJo:0.3376, KJo:0.9985, AJo, Q6s:0.0001, Q7s:0.0001, Q8s:0.2658, Q9s:0.9992, QTs, QJs, QQ, KQo, AQo, K3s:0.0009, K4s:0.0232, K5s:0.0600, K6s:0.9954, K7s:0.9908, K8s:0.9988, K9s, KTs, KJs, KQs, KK, AKo, A2s:0.9990, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0004, 44:0.2522, A4o:0.0008, 55, A5o:0.7148, 65s:0.0007, 66, A6o:0.0007, 76s:0.6925, 77, A7o:0.7777, 87s:0.9075, 88, K8o:0.0001, A8o, 97s:0.3054, 98s:0.9993, 99, K9o:0.0016, A9o, T7s:0.3223, T8s, T9s, TT, JTo:0.9987, QTo:0.8160, KTo, ATo, J5s:0.0001, J7s:0.0067, J8s:0.9906, J9s:0.9997, JTs:0.9996, JJ, QJo, KJo, AJo, Q4s:0.0006, Q5s:0.0001, Q6s:0.0008, Q7s:0.0308, Q8s, Q9s:0.9994, QTs, QJs, QQ, KQo, AQo, K2s:0.0013, K3s:0.6315, K4s:0.9942, K5s:0.9995, K6s:0.9993, K7s, K8s:0.9997, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "open 2.3bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0462, A4o, A5o:0.9576, A6o, A7o:0.0526, 87s:0.0010, 88:0.0058, A8o:0.0004, 97s:0.0169, 98s:0.7460, 99:0.5035, T9o:0.0044, J9o:0.4014, Q9o:0.3450, K9o:0.2284, T6s:0.0001, T7s:0.0017, T8s:0.7510, T9s:0.0001, TT, JTo:0.2976, QTo:0.7768, KTo:0.7037, J5s:0.0042, J7s:0.1766, J8s:0.9471, J9s:0.0009, JJ, QJo:0.5344, KJo:0.4173, AJo:0.0001, Q4s:0.0001, Q5s:0.0555, Q6s:0.0400, Q7s:0.0493, Q8s:0.9994, Q9s:0.0031, QQ, KQo:0.0001, AQo:0.0002, K4s:0.0386, K5s:0.9875, K6s:0.5175, K7s:0.9928, K8s:0.9988, K9s:0.0001, KJs:0.0105, KQs:0.0473, KK, AKo:0.8637, A2s:0.0001, A6s:0.0004, A7s:0.7337, A8s:0.2144, A9s:0.0069, ATs:0.8781, AJs, AQs, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, 33, 44, 55, A5o:0.0422, 66, 77, A7o:0.9474, 88:0.9942, A8o:0.9996, 98s:0.0007, 99:0.4965, A9o, T8s:0.1775, T9s, JTo:0.7023, QTo:0.2232, KTo:0.2963, ATo, J8s:0.0006, J9s:0.9990, JTs, QJo:0.4656, KJo:0.5827, AJo, Q9s:0.9969, QTs, QJs, KQo, AQo:0.9998, K6s:0.0002, K7s:0.0005, K9s, KTs, KJs:0.9895, KQs:0.9527, AKo:0.1363, A2s, A3s, A4s, A5s, A6s:0.9996, A7s:0.2663, A8s:0.7856, A9s:0.9931, ATs:0.1219"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "open 3.5bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8878, 32o:0.0010, 42o:0.0608, 52o:0.9953, 62o:0.0110, 82o:0.6372, 92o:0.9993, T2o:0.9995, J2o, Q2o:0.9969, K2o:0.7781, A2o:0.9548, 32s:0.1385, 33:0.9585, 43o:0.9844, 53o:0.7983, 63o:0.9996, 73o:0.9991, 83o:0.9960, 93o:0.9983, T3o:0.9998, J3o:0.9998, Q3o:0.9997, K3o:0.3574, A3o:0.9831, 42s:0.0078, 43s:0.3654, 44:0.2464, 54o:0.0197, 64o:0.9658, 74o:0.9995, 84o:0.9983, 94o, T4o:0.9939, J4o:0.6645, Q4o:0.5208, K4o:0.1736, A4o:0.9099, 52s:0.4551, 53s:0.8555, 54s:0.1597, 55:0.9846, 65o:0.0239, 75o:0.1977, 85o:0.8480, 95o:0.9938, T5o:0.9997, J5o:0.5948, Q5o:0.1641, K5o:0.8012, A5o:0.7656, 62s:0.3228, 63s:0.5757, 64s:0.4047, 65s:0.6734, 66:0.5891, 76o:0.3888, 86o:0.1414, 96o:0.7039, T6o:0.4400, J6o:0.9762, Q6o:0.6298, K6o:0.9031, A6o:0.7500, 72s:0.9501, 73s:0.0048, 74s:0.7194, 75s:0.3238, 76s:0.4657, 77:0.9258, 87o:0.7995, 97o:0.2372, T7o:0.1566, J7o:0.2664, Q7o:0.3695, K7o:0.5152, A7o:0.3462, 82s:0.1454, 83s:0.0028, 84s:0.4453, 85s:0.6325, 86s:0.7298, 87s:0.4206, 88:0.3140, 98o:0.2800, T8o:0.5944, J8o:0.7710, Q8o:0.6895, K8o:0.6684, A8o:0.8676, 92s:0.0198, 93s:0.1036, 94s:0.0168, 95s:0.4623, 96s:0.9946, 97s:0.8352, 98s:0.8563, 99:0.4526, T9o:0.7076, J9o:0.8483, Q9o:0.8920, K9o:0.4584, A9o:0.4868, T2s:0.0262, T3s:0.3447, T4s:0.0217, T5s:0.9987, T6s:0.3066, T7s:0.9979, T8s:0.4906, T9s:0.4779, TT:0.0747, JTo:0.6740, QTo:0.9560, KTo:0.8354, ATo:0.3449, J2s:0.1584, J3s:0.0373, J4s:0.8829, J5s:0.9882, J6s:0.9802, J7s:0.9068, J8s:0.3426, J9s:0.8913, JTs:0.2288, JJ:0.3906, QJo:0.7527, KJo:0.9665, AJo:0.0852, Q2s:0.9815, Q3s:0.8477, Q4s:0.8703, Q5s:0.7038, Q6s:0.9998, Q7s:0.9997, Q8s:0.0665, Q9s:0.6968, QTs:0.3203, QJs:0.8567, QQ:0.0028, KQo:0.1341, AQo:0.0004, K2s, K3s:0.9919, K4s:0.9860, K5s:0.2815, K6s:0.7807, K7s:0.6871, K8s:0.3657, K9s:0.9809, KTs:0.0310, KJs:0.0436, KQs:0.0583, KK:0.0478, AKo:0.2209, A2s:0.9953, A3s:0.9087, A4s:0.1679, A5s:0.3750, A6s:0.8037, A7s:0.1314, A8s:0.0368, A9s:0.0418, ATs:0.0717, AJs:0.0028, AQs:0.0013, AKs:0.6657, AA:0.6519"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "22:0.1122, 32o:0.0001, 42o:0.0017, 52o:0.0045, 62o:0.0001, 72o:0.0001, 82o:0.0001, 92o:0.0005, T2o:0.0005, Q2o:0.0031, K2o:0.2219, A2o:0.0452, 32s:0.8615, 33:0.0415, 43o:0.0156, 53o:0.2017, 63o:0.0002, 73o:0.0001, 83o:0.0008, 93o:0.0017, T3o:0.0002, J3o:0.0002, Q3o:0.0003, K3o:0.6426, A3o:0.0169, 42s:0.9922, 43s:0.6346, 44:0.7536, 54o:0.9803, 64o:0.0342, 74o:0.0005, 84o:0.0017, 94o:0.0001, T4o:0.0061, J4o:0.3355, Q4o:0.4792, K4o:0.8264, A4o:0.0901, 52s:0.5449, 53s:0.1445, 54s:0.8403, 55:0.0154, 65o:0.9761, 75o:0.8023, 85o:0.1520, 95o:0.0062, T5o:0.0003, J5o:0.4052, Q5o:0.8359, K5o:0.1988, A5o:0.2344, 62s:0.6772, 63s:0.4243, 64s:0.5953, 65s:0.3266, 66:0.4109, 76o:0.6112, 86o:0.8586, 96o:0.2961, T6o:0.5600, J6o:0.0238, Q6o:0.3702, K6o:0.0969, A6o:0.2500, 72s:0.0498, 73s:0.9952, 74s:0.2806, 75s:0.6762, 76s:0.5343, 77:0.0742, 87o:0.2005, 97o:0.7628, T7o:0.8434, J7o:0.7336, Q7o:0.6305, K7o:0.4848, A7o:0.6538, 82s:0.8546, 83s:0.9972, 84s:0.5547, 85s:0.3675, 86s:0.2702, 87s:0.5794, 88:0.6860, 98o:0.7200, T8o:0.4056, J8o:0.2290, Q8o:0.3105, K8o:0.3316, A8o:0.1324, 92s:0.9802, 93s:0.8964, 94s:0.9832, 95s:0.5377, 96s:0.0054, 97s:0.1648, 98s:0.1437, 99:0.5474, T9o:0.2924, J9o:0.1517, Q9o:0.1080, K9o:0.5416, A9o:0.5132, T2s:0.9738, T3s:0.6553, T4s:0.9783, T5s:0.0013, T6s:0.6934, T7s:0.0021, T8s:0.5094, T9s:0.5221, TT:0.9253, JTo:0.3260, QTo:0.0440, KTo:0.1646, ATo:0.6551, J2s:0.8416, J3s:0.9627, J4s:0.1171, J5s:0.0118, J6s:0.0198, J7s:0.0932, J8s:0.6574, J9s:0.1087, JTs:0.7712, JJ:0.6094, QJo:0.2473, KJo:0.0335, AJo:0.9148, Q2s:0.0185, Q3s:0.1523, Q4s:0.1297, Q5s:0.2962, Q6s:0.0002, Q7s:0.0003, Q8s:0.9335, Q9s:0.3032, QTs:0.6797, QJs:0.1433, QQ:0.9972, KQo:0.8659, AQo:0.9996, K2s:0.0001, K3s:0.0081, K4s:0.0140, K5s:0.7185, K6s:0.2193, K7s:0.3129, K8s:0.6343, K9s:0.0191, KTs:0.9690, KJs:0.9564, KQs:0.9417, KK:0.9522, AKo:0.7791, A2s:0.0047, A3s:0.0913, A4s:0.8321, A5s:0.6250, A6s:0.1963, A7s:0.8686, A8s:0.9632, A9s:0.9582, ATs:0.9283, AJs:0.9972, AQs:0.9987, AKs:0.3343, AA:0.3481"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "open 0bb",
      "open 3.5bb"
    ],
    "bands": [
      {
        "action": "open 0bb",
        "min": 0.0001,
        "range": "22:0.9462, 32o:0.8282, 42o:0.8745, 52o:0.1866, 62o:0.7583, 72o:0.5922, 82o:0.3255, 92o:0.9903, T2o:0.7866, J2o:0.5099, Q2o:0.4427, K2o:0.3388, A2o:0.7170, 32s:0.4302, 33:0.9973, 43o:0.9036, 53o:0.3937, 63o:0.9104, 73o:0.3280, 83o:0.7671, 93o:0.3814, T3o:0.8593, J3o:0.8656, Q3o:0.9996, K3o:0.9598, A3o:0.9442, 42s:0.7304, 43s:0.9961, 44:0.6665, 54o:0.8962, 64o:0.7258, 74o:0.6308, 84o:0.2697, 94o:0.7442, T4o:0.7524, J4o:0.7124, Q4o:0.9272, K4o:0.8013, A4o:0.9765, 52s:0.8636, 53s:0.8029, 54s:0.9677, 55:0.7846, 65o:0.3159, 75o:0.8989, 85o:0.7605, 95o:0.7641, T5o:0.9097, J5o:0.8364, Q5o:0.8442, K5o:0.9586, A5o:0.7555, 62s:0.6028, 63s:0.9208, 64s:0.7823, 65s:0.9923, 66:0.5000, 76o:0.7009, 86o:0.8863, 96o:0.8258, T6o:0.2322, J6o:0.9046, Q6o:0.5513, K6o:0.1692, A6o:0.9207, 72s:0.7199, 73s:0.9037, 74s:0.8777, 75s:0.9719, 76s:0.8121, 77:0.6447, 87o:0.8465, 97o:0.7964, T7o:0.2713, J7o:0.4237, Q7o:0.8386, K7o:0.2177, A7o:0.2869, 82s:0.5656, 83s:0.8151, 84s:0.9841, 85s:0.8454, 86s:0.9388, 87s:0.9940, 88:0.5133, 98o:0.6342, T8o:0.9260, J8o:0.5908, Q8o:0.7329, K8o:0.6684, A8o:0.1866, 92s:0.9952, 93s:0.9213, 94s:0.6494, 95s:0.9980, 96s, 97s:0.9819, 98s:0.8474, 99:0.2917, T9o:0.7161, J9o:0.5894, Q9o:0.6381, K9o:0.3440, A9o:0.4381, T2s:0.9420, T3s:0.9364, T4s:0.6321, T5s:0.9869, T6s:0.9876, T7s:0.9965, T8s:0.9997, T9s:0.8851, TT:0.4551, JTo:0.9280, QTo:0.6236, KTo:0.8516, ATo:0.1898, J2s:0.6474, J3s, J4s:0.5308, J5s:0.9998, J6s:0.9816, J7s:0.9818, J8s:0.9809, J9s:0.9904, JTs:0.9213, JJ:0.5368, QJo:0.7894, KJo:0.6214, AJo:0.5001, Q2s:0.8064, Q3s:0.9978, Q4s:0.9816, Q5s:0.8790, Q6s:0.9996, Q7s:0.9998, Q8s:0.9997, Q9s, QTs:0.9889, QJs:0.7803, QQ:0.3168, KQo:0.0334, AQo:0.0419, K2s:0.9951, K3s:0.9822, K4s:0.9792, K5s:0.9906, K6s:0.9972, K7s:0.8019, K8s, K9s, KTs:0.5798, KJs:0.9769, KQs:0.0646, A2s:0.1597, A3s:0.9523, A4s:0.2917, A5s:0.0269, A6s:0.9254, A7s:0.2354, A8s:0.0391, A9s:0.0068, ATs:0.0012, AJs:0.0136, AQs:0.0026, AKs:0.0002"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "22:0.0538, 32o:0.1718, 42o:0.1255, 52o:0.8134, 62o:0.2417, 72o:0.4077, 82o:0.6745, 92o:0.0097, T2o:0.2134, J2o:0.4901, Q2o:0.5573, K2o:0.6612, A2o:0.2830, 32s:0.5697, 33:0.0027, 43o:0.0964, 53o:0.6063, 63o:0.0896, 73o:0.6720, 83o:0.2329, 93o:0.6186, T3o:0.1407, J3o:0.1344, Q3o:0.0004, K3o:0.0402, A3o:0.0558, 42s:0.2696, 43s:0.0039, 44:0.3335, 54o:0.1038, 64o:0.2742, 74o:0.3692, 84o:0.7303, 94o:0.2558, T4o:0.2476, J4o:0.2876, Q4o:0.0728, K4o:0.1987, A4o:0.0235, 52s:0.1364, 53s:0.1971, 54s:0.0323, 55:0.2154, 65o:0.6841, 75o:0.1011, 85o:0.2395, 95o:0.2359, T5o:0.0903, J5o:0.1636, Q5o:0.1558, K5o:0.0414, A5o:0.2445, 62s:0.3972, 63s:0.0792, 64s:0.2177, 65s:0.0077, 66:0.5000, 76o:0.2991, 86o:0.1137, 96o:0.1742, T6o:0.7678, J6o:0.0954, Q6o:0.4487, K6o:0.8308, A6o:0.0793, 72s:0.2801, 73s:0.0963, 74s:0.1223, 75s:0.0281, 76s:0.1879, 77:0.3553, 87o:0.1535, 97o:0.2036, T7o:0.7287, J7o:0.5763, Q7o:0.1614, K7o:0.7823, A7o:0.7131, 82s:0.4344, 83s:0.1849, 84s:0.0159, 85s:0.1546, 86s:0.0612, 87s:0.0060, 88:0.4867, 98o:0.3658, T8o:0.0740, J8o:0.4092, Q8o:0.2671, K8o:0.3316, A8o:0.8134, 92s:0.0048, 93s:0.0787, 94s:0.3506, 95s:0.0020, 97s:0.0181, 98s:0.1526, 99:0.7083, T9o:0.2839, J9o:0.4106, Q9o:0.3619, K9o:0.6560, A9o:0.5619, T2s:0.0580, T3s:0.0636, T4s:0.3679, T5s:0.0130, T6s:0.0124, T7s:0.0035, T8s:0.0003, T9s:0.1149, TT:0.5449, JTo:0.0720, QTo:0.3764, KTo:0.1484, ATo:0.8102, J2s:0.3526, J4s:0.4692, J5s:0.0002, J6s:0.0184, J7s:0.0182, J8s:0.0191, J9s:0.0096, JTs:0.0787, JJ:0.4632, QJo:0.2106, KJo:0.3786, AJo:0.4999, Q2s:0.1936, Q3s:0.0022, Q4s:0.0184, Q5s:0.1210, Q6s:0.0004, Q7s:0.0002, Q8s:0.0003, Q9s:0.0001, QTs:0.0111, QJs:0.2197, QQ:0.6832, KQo:0.9666, AQo:0.9581, K2s:0.0049, K3s:0.0178, K4s:0.0208, K5s:0.0094, K6s:0.0028, K7s:0.1981, KTs:0.4202, KJs:0.0231, KQs:0.9354, KK, AKo, A2s:0.8403, A3s:0.0477, A4s:0.7083, A5s:0.9731, A6s:0.0746, A7s:0.7646, A8s:0.9609, A9s:0.9932, ATs:0.9988, AJs:0.9864, AQs:0.9974, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 12bb",
      "3bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8878, K2o:0.0012, A2o:0.2428, 32s:0.1144, 33:0.9585, K3o:0.0205, A3o:0.2967, 42s:0.0072, 43s:0.3654, 44:0.2464, 54o:0.0151, K4o:0.1253, A4o:0.5209, 52s:0.4546, 53s:0.8547, 54s:0.1597, 55:0.9846, 65o:0.0166, Q5o:0.0483, K5o:0.7684, A5o:0.6801, 63s:0.5755, 64s:0.4046, 65s:0.6733, 66:0.5891, 76o:0.3802, 86o:0.0004, Q6o:0.3861, K6o:0.8992, A6o:0.3987, 73s:0.0048, 74s:0.7185, 75s:0.3238, 76s:0.4657, 77:0.9258, 87o:0.7974, 97o:0.2166, T7o:0.1418, J7o:0.1916, Q7o:0.3117, K7o:0.5080, A7o:0.3304, 83s:0.0019, 84s:0.4450, 85s:0.6324, 86s:0.7298, 87s:0.4206, 88:0.3140, 98o:0.2597, T8o:0.5944, J8o:0.7709, Q8o:0.6665, K8o:0.6684, A8o:0.8589, 92s:0.0099, 93s:0.1013, 94s:0.0168, 95s:0.4622, 96s:0.9946, 97s:0.8352, 98s:0.8563, 99:0.4526, T9o:0.7076, J9o:0.8482, Q9o:0.8920, K9o:0.4584, A9o:0.4868, T2s:0.0261, T3s:0.3447, T4s:0.0217, T5s:0.9987, T6s:0.3066, T7s:0.9979, T8s:0.4906, T9s:0.4779, TT:0.0747, JTo:0.6740, QTo:0.9560, KTo:0.8354, ATo:0.3449, J2s:0.1582, J3s:0.0373, J4s:0.8826, J5s:0.9882, J6s:0.9799, J7s:0.9067, J8s:0.3426, J9s:0.8913, JTs:0.2288, JJ:0.3906, QJo:0.7527, KJo:0.9664, AJo:0.0852, Q2s:0.9814, Q3s:0.8477, Q4s:0.8702, Q5s:0.7038, Q6s:0.9996, Q7s:0.9996, Q8s:0.0665, Q9s:0.6968, QTs:0.3203, QJs:0.8566, QQ:0.0028, KQo:0.1341, AQo:0.0004, K2s:0.9998, K3s:0.9917, K4s:0.9860, K5s:0.2815, K6s:0.7807, K7s:0.6871, K8s:0.3657, K9s:0.9809, KTs:0.0310, KJs:0.0436, KQs:0.0583, A2s:0.9952, A3s:0.9087, A4s:0.1679, A5s:0.3750, A6s:0.8037, A7s:0.1314, A8s:0.0368, A9s:0.0418, ATs:0.0717, AJs:0.0028, AQs:0.0013"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "K2o:0.0260, A2o:0.7120, Q3o:0.0056, K3o:0.3337, A3o:0.6864, T4o:0.0391, J4o:0.0003, Q4o:0.1540, K4o:0.0483, A4o:0.3890, 52s:0.0001, 85o:0.1211, 95o:0.0244, T5o:0.1146, J5o:0.0262, Q5o:0.0125, K5o:0.0328, A5o:0.0855, 86o:0.0587, 96o:0.1454, T6o:0.0887, Q6o:0.0001, K6o:0.0037, A6o:0.3512, 87o:0.0018, 97o:0.0197, T7o:0.0146, J7o:0.0719, Q7o:0.0482, K7o:0.0072, A7o:0.0158, 98o:0.0202, Q8o:0.0230, A8o:0.0087, 93s:0.0016, J9o:0.0001, J4s:0.0001, J6s:0.0001, J7s:0.0001, KJo:0.0001, Q7s:0.0001, K3s:0.0001, KK:0.0478, AKo:0.2209, AKs:0.6657, AA:0.6519"
      },
      {
        "action": "3bet 62.25bb",
        "min": 0.0001,
        "range": "A6o:0.0001, A2s:0.0001"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@12",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 20.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0019, 44:0.3238, A4o:0.0013, 53s:0.0076, 54s:0.0230, 55:0.0884, A5o:0.0170, 64s:0.0022, 65s:0.0025, 66:0.4148, A6o:0.0001, 75s:0.0178, 76s:0.1822, 77:0.2217, A7o:0.0066, 85s:0.0003, 86s:0.0181, 87s:0.0029, 88:0.4424, K8o:0.0001, A8o:0.0538, 98s:0.1162, 99:0.2863, K9o:0.0011, A9o:0.0273, T7s:0.0004, T8s:0.0002, T9s:0.0903, TT:0.3574, KTo:0.0015, ATo:0.3416, J7s:0.0009, J8s:0.0080, J9s:0.0039, JTs:0.0608, JJ:0.0970, KJo:0.0015, AJo:0.0139, Q8s:0.0001, QTs:0.0106, QJs:0.1890, QQ:0.6134, KQo:0.0072, AQo:0.8750, K3s:0.0001, K5s:0.0032, K7s:0.1484, KTs:0.3381, KJs:0.0130, KQs:0.8759, KK:0.1718, A2s:0.0086, A3s:0.0085, A4s:0.4683, A5s:0.5020, A6s:0.0414, A7s:0.1739, A8s:0.0304, A9s:0.0361, ATs:0.1802, AJs:0.3818, AQs:0.6633, AA:0.0012"
      },
      {
        "action": "4bet 20.5bb",
        "min": 0.0001,
        "range": "A2o:0.0884, A3o:0.0354, A4o:0.0095, A5o:0.0249, K6o:0.0002, A6o:0.0510, 72s:0.0001, K7o:0.0001, A7o:0.1137, A8o:0.3080, 99:0.0001, K9o:0.0001, A9o:0.2367, TT:0.0002, ATo:0.0175, AJo:0.3798, QQ:0.0001, AQo:0.0497, AKo:0.0025, A2s:0.0208, A3s:0.0310, A4s:0.0171, A5s:0.0025, A6s:0.0083, A7s:0.0102, A8s:0.0020, A9s:0.0069, ATs:0.1049, AJs:0.2364, AQs:0.2461, AKs:0.5011, AA:0.9988"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0022, A2o:0.0001, 32s:0.0001, 44:0.0065, A4o:0.0003, 55:0.1264, A5o:0.0190, 66:0.0847, A6o:0.0001, 74s:0.0002, 77:0.1328, A7o:0.1548, 87s:0.0013, 88:0.0439, K8o:0.0002, A8o:0.4065, 98s:0.0021, 99:0.4209, A9o:0.1641, T9s:0.0020, TT:0.1867, KTo:0.0037, ATo:0.4408, J8s:0.0036, JTs:0.0074, JJ:0.3661, KJo:0.0010, AJo:0.1024, QJs:0.0001, QQ:0.0697, KQo:0.0035, AQo:0.0257, K3s:0.0002, K5s:0.0001, K7s:0.0012, KTs:0.0771, KJs:0.0006, KQs:0.0057, KK:0.8282, AKo:0.9975, A2s:0.7894, A3s:0.0049, A4s:0.2065, A5s:0.4671, A6s:0.0249, A7s:0.5751, A8s:0.9204, A9s:0.9498, ATs:0.7137, AJs:0.3669, AQs:0.0881, AKs:0.4986"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@62.25",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 77:0.0005, 88:0.0283, 99:0.0003, TT:0.0641, JJ:0.1986, AJo:0.0001, QQ:0.6829, AQo:0.3732, KQs:0.0188, KK, AKo:0.6583, A5s:0.0023, A7s:0.0008, A8s:0.0030, A9s:0.0151, ATs:0.0500, AJs:0.0003, AQs:0.8587, AKs:0.5890, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9903, K2o:0.0581, A2o:0.5304, 32s:0.9574, 33:0.7749, 53o:0.0001, Q3o:0.0001, K3o:0.3961, A3o:0.6807, 42s:0.9831, 43s:0.9667, 44, 54o:0.3682, K4o:0.4486, A4o:0.9943, 52s:0.6553, 53s:0.9998, 54s:0.9961, 55:0.9978, 65o:0.6011, Q5o:0.3736, K5o:0.9585, A5o:0.9876, 63s:0.9973, 64s:0.9990, 65s:0.9851, 66, 76o:0.9441, 86o:0.2983, 96o:0.0001, Q6o:0.6999, K6o:0.8614, A6o:0.6664, 72s:0.0003, 73s:0.4914, 74s:0.8724, 75s, 76s:0.9595, 77, 87o:0.9950, 97o:0.9401, T7o:0.7393, J7o:0.7581, Q7o:0.9584, K7o:0.9863, A7o:0.9862, 82s:0.0001, 83s:0.0491, 84s:0.7568, 85s:0.9992, 86s:0.9947, 87s:0.9998, 88, 98o:0.9396, T8o:0.8053, J8o:0.8596, Q8o:0.8371, K8o:0.9919, A8o:0.9976, 92s:0.7324, 93s:0.1752, 94s:0.6838, 95s:0.9793, 96s:0.9925, 97s:0.9990, 98s, 99, T9o:0.9989, J9o:0.9506, Q9o:0.9982, K9o:0.9993, A9o:0.9841, T2s:0.9910, T3s:0.5034, T4s:0.9991, T5s:0.9911, T6s:0.9925, T7s, T8s:0.9998, T9s, TT, JTo:0.9709, QTo:0.9883, KTo:0.8543, ATo:0.9849, J2s:0.9928, J3s:0.9911, J4s:0.9998, J5s, J6s:0.9994, J7s:0.9997, J8s, J9s, JTs:0.9997, JJ, QJo:0.9998, KJo:0.9888, AJo:0.9214, Q2s:0.9487, Q3s:0.9994, Q4s:0.9974, Q5s:0.9997, Q6s:0.9995, Q7s, Q8s:0.9995, Q9s, QTs, QJs, QQ, KQo:0.9669, AQo:0.9863, K2s, K3s:0.7826, K4s:0.9421, K5s:0.9107, K6s:0.9980, K7s, K8s, K9s:0.9970, KTs:0.8196, KJs:0.9964, KQs, KK:0.5903, A2s:0.7385, A3s:0.9499, A4s:0.9848, A5s:0.8959, A6s:0.8411, A7s:0.9990, A8s, A9s:0.9859, ATs, AJs, AQs:0.7853"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0095, K2o:0.1213, A2o:0.4695, 32s:0.0045, 33:0.2250, 53o:0.0002, K3o:0.0235, A3o:0.3192, 42s:0.0002, 43s:0.0320, 54o:0.0595, J4o:0.0001, Q4o:0.0106, K4o:0.5432, A4o:0.0056, 52s:0.3376, 54s:0.0038, 55:0.0021, 65o:0.3152, 75o:0.0011, 95o:0.0001, Q5o:0.1304, K5o:0.0387, A5o:0.0122, 62s:0.0001, 63s:0.0011, 64s:0.0007, 65s:0.0146, 76o:0.0004, 86o:0.0660, T6o:0.0004, Q6o:0.1582, K6o:0.1374, A6o:0.3335, 72s:0.0002, 73s:0.0038, 74s:0.1259, 76s:0.0403, 97o:0.0421, T7o:0.2019, J7o:0.1956, Q7o:0.0027, K7o:0.0137, A7o:0.0137, 83s:0.0001, 84s:0.2322, 86s:0.0037, 98o:0.0600, T8o:0.1937, J8o:0.1403, Q8o:0.1625, K8o:0.0078, A8o:0.0024, 92s:0.0406, 93s:0.8227, 94s:0.2791, 95s:0.0202, 96s:0.0074, 97s:0.0009, T9o:0.0009, J9o:0.0494, Q9o:0.0018, K9o:0.0006, A9o:0.0159, T2s:0.0043, T3s:0.4961, T4s:0.0005, T5s:0.0072, T6s:0.0075, T7s:0.0001, JTo:0.0291, QTo:0.0117, KTo:0.1456, ATo:0.0150, J2s:0.0045, J3s:0.0081, J4s:0.0001, J6s:0.0004, J7s:0.0002, JTs:0.0003, QJo:0.0002, KJo:0.0112, AJo:0.0785, Q2s:0.0511, Q3s:0.0001, Q4s:0.0025, Q5s:0.0001, Q6s:0.0002, Q8s:0.0004, QQ:0.0001, KQo:0.0330, AQo:0.0137, K3s:0.2170, K4s:0.0579, K5s:0.0892, K6s:0.0020, K9s:0.0030, KTs:0.1803, KJs:0.0036, KQs:0.0001, KK:0.4097, AKo:0.9996, A2s:0.2614, A3s:0.0500, A4s:0.0151, A5s:0.1041, A6s:0.1589, A7s:0.0010, A9s:0.0138, AQs:0.2144, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0001, A4o:0.0001, 55:0.0001, A5o:0.0002, 66:0.0001, A6o:0.0001, A7o:0.0001, 86s:0.0001, 87s:0.0001, T3s:0.0001, ATo:0.0001, AJo:0.0001, Q4s:0.0001, Q9s:0.0001, AQo:0.0001, K3s:0.0002, K5s:0.0001, AKo:0.0004, A2s:0.0001, A4s:0.0001, A5s:0.0001, A7s:0.0001, A9s:0.0003, ATs:0.0001, AQs:0.0003, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@9",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1119, 33:0.0415, 42s:0.0025, 43s:0.3674, 44:0.7495, K4o:0.0001, A4o:0.0561, 52s:0.1355, 53s:0.1377, 54s:0.8387, 55:0.0154, 65o:0.0676, K5o:0.0004, A5o:0.0222, 62s:0.0001, 63s:0.1958, 64s:0.5736, 65s:0.3261, 66:0.4109, 76o:0.0017, K6o:0.0011, A6o:0.0131, 74s:0.0120, 75s:0.6685, 76s:0.5326, 77:0.0741, 87o:0.0003, K7o:0.0153, A7o:0.2008, 84s:0.0227, 85s:0.3055, 86s:0.2671, 87s:0.5789, 88:0.6859, 98o:0.0136, T8o:0.1250, J8o:0.0013, K8o:0.0019, A8o:0.0906, 94s:0.0001, 95s:0.3133, 96s:0.0043, 97s:0.1646, 98s:0.1434, 99:0.5471, T9o:0.2616, J9o:0.0154, Q9o:0.0020, K9o:0.1845, A9o:0.1934, T3s:0.0002, T4s:0.0021, T5s:0.0012, T6s:0.6905, T7s:0.0020, T8s:0.5072, T9s:0.5219, TT:0.9251, JTo:0.3208, QTo:0.0438, KTo:0.1642, ATo:0.6365, J2s:0.0319, J4s:0.0560, J5s:0.0112, J6s:0.0138, J7s:0.0931, J8s:0.6563, J9s:0.1086, JTs:0.7703, JJ:0.6093, QJo:0.2422, KJo:0.0335, AJo:0.6551, Q3s:0.0102, Q4s:0.1242, Q5s:0.2946, Q6s:0.0002, Q7s:0.0003, Q8s:0.9278, Q9s:0.3025, QTs:0.6791, QJs:0.1432, QQ:0.9964, KQo:0.8655, AQo:0.8953, K3s:0.0023, K4s:0.0133, K5s:0.7049, K6s:0.2185, K7s:0.3127, K8s:0.6271, K9s:0.0191, KTs:0.9687, KJs:0.9533, KQs:0.9416, KK:0.1760, A2s:0.0045, A3s:0.0909, A4s:0.8292, A5s:0.6236, A6s:0.1949, A7s:0.8636, A8s:0.9617, A9s:0.9573, ATs:0.9264, AJs:0.9963, AQs:0.9983"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "K2o:0.0537, A2o:0.0452, 32s:0.0001, K3o:0.1340, A3o:0.0169, 43s:0.0019, K4o:0.1189, A4o:0.0340, 52s:0.0007, 53s:0.0001, 54s:0.0002, Q5o:0.0003, K5o:0.0966, A5o:0.2120, 65s:0.0001, 76o:0.0003, T6o:0.0001, K6o:0.0097, A6o:0.2369, 73s:0.0022, 75s:0.0005, 76s:0.0001, T7o:0.0009, J7o:0.0016, Q7o:0.0006, K7o:0.0871, A7o:0.4529, 86s:0.0003, 87s:0.0001, J8o:0.0001, K8o:0.0219, A8o:0.0417, 92s:0.0002, 93s:0.0004, 94s:0.0013, K9o:0.1324, A9o:0.3198, T2s:0.0002, T3s:0.0012, T4s:0.0061, T6s:0.0001, T8s:0.0006, KTo:0.0002, ATo:0.0183, J2s:0.0003, J3s:0.0003, J8s:0.0001, JTs:0.0002, AJo:0.2596, Q5s:0.0002, QTs:0.0001, QJs:0.0001, KQo:0.0001, AQo:0.1042, K3s:0.0054, K4s:0.0006, K5s:0.0134, K6s:0.0004, K8s:0.0060, KJs:0.0022, KK:0.7752, AKo:0.3740, A2s:0.0002, A3s:0.0003, A4s:0.0021, A5s:0.0001, A6s:0.0012, A7s:0.0044, A8s:0.0008, A9s:0.0005, ATs:0.0011, AJs:0.0001, AQs:0.0001, AKs:0.3137, AA:0.3481"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0002, 32s:0.0001, 44:0.0041, 54s:0.0002, A5o:0.0001, 63s:0.0001, 73s:0.0001, 75s:0.0005, 76s:0.0002, A7o:0.0001, 86s:0.0001, 87s:0.0003, 88:0.0001, A8o:0.0001, 93s:0.0004, 94s:0.0001, 98s:0.0001, 99:0.0003, K9o:0.0001, T8s:0.0001, T9s:0.0001, TT:0.0002, ATo:0.0003, J9s:0.0001, JTs:0.0003, JJ:0.0001, AJo:0.0001, Q5s:0.0001, Q9s:0.0001, QTs:0.0001, QQ:0.0008, KQo:0.0002, AQo:0.0001, K5s:0.0001, K8s:0.0001, KTs:0.0002, KK:0.0010, AKo:0.4051, A4s:0.0007, A5s:0.0013, A6s:0.0002, A7s:0.0005, A8s:0.0009, A9s:0.0004, ATs:0.0007, AJs:0.0008, AQs:0.0002, AKs:0.0206"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@9|SB:4BET@18",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0114, A3o:0.0179, 43s:0.0136, K4o:0.0079, 52s:0.0038, 54s:0.0036, 55:0.0001, 65o:0.0198, A5o:0.0047, 63s:0.0003, 64s:0.0006, 65s:0.0061, K6o:0.0129, A6o:0.0156, 74s:0.0207, 76s:0.0253, T7o:0.0002, A7o:0.0109, 84s:0.0034, 86s:0.0028, 98o:0.0009, T8o:0.0142, A8o:0.0020, 92s:0.0001, 93s:0.0011, 95s:0.0030, 96s:0.0017, 97s:0.0003, T9o:0.0007, J9o:0.0032, K9o:0.0002, A9o:0.0154, T3s:0.0207, T5s:0.0008, T6s:0.0017, T7s:0.0001, JTo:0.0267, QTo:0.0084, KTo:0.0618, ATo:0.0141, JTs:0.0003, QJo:0.0001, KJo:0.0056, AJo:0.0782, Q2s:0.0003, Q5s:0.0001, Q6s:0.0001, Q8s:0.0002, QQ:0.0001, KQo:0.0294, AQo:0.0137, K3s:0.0003, K4s:0.0019, K5s:0.0029, K6s:0.0001, K9s:0.0010, KTs:0.0201, KJs:0.0016, A2s:0.0009, A3s:0.0006, A4s:0.0080, A5s:0.0026, A6s:0.0283, A7s:0.0009, A9s:0.0123, AQs:0.2136, AA:0.2285"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0092, A2o:0.1222, 33:0.2123, K3o:0.0005, A3o:0.0450, 43s:0.0015, K4o:0.0435, A4o:0.0020, 54s:0.0001, 55:0.0020, A5o:0.0062, 65s:0.0084, K6o:0.0230, A6o:0.0163, 76s:0.0140, K7o:0.0002, A7o:0.0015, 84s:0.0010, 86s:0.0007, T8o:0.0002, K8o:0.0012, A8o:0.0004, 95s:0.0015, 96s:0.0004, 97s:0.0001, K9o:0.0001, A9o:0.0003, T3s:0.0072, T6s:0.0007, JTo:0.0003, KTo:0.0792, ATo:0.0009, KJo:0.0053, AJo:0.0003, KQo:0.0029, K3s:0.2109, K4s:0.0542, K5s:0.0837, K6s:0.0018, K9s:0.0019, KTs:0.1596, KJs:0.0020, KQs:0.0001, KK:0.4097, AKo:0.9996, A2s:0.2570, A3s:0.0490, A4s:0.0071, A5s:0.1015, A6s:0.1304, A7s:0.0001, A9s:0.0015, AQs:0.0008, AKs, AA:0.7715"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@9|SB:4BET@62.25",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AJo:0.0001, AQo:0.0001, KK:0.4097, AKo:0.9984, A9s:0.0003, AQs:0.0065, AKs:0.9949, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@62.25",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0008, A7o:0.0001, 82s:0.0001, 88:0.0002, 99:0.5447, A9o:0.0018, T3s:0.0001, TT:0.9241, ATo:0.0022, J8s:0.0004, JJ:0.6081, AJo:0.0449, QQ:0.9936, AQo:0.2916, K6s:0.0001, KTs:0.0007, KJs:0.0003, KQs:0.0008, KK:0.9522, AKo:0.7788, A3s:0.0001, A4s:0.0017, A5s:0.0001, A6s:0.0004, A7s:0.0002, A8s:0.0015, A9s:0.0222, ATs:0.0939, AJs:0.1610, AQs:0.9934, AKs:0.3320, AA:0.3481"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0096, 54s:0.1691, 55:0.1316, 64s:0.0001, 65s:0.0346, 66:0.2275, 75s:0.0008, 76s:0.1566, 77:0.0359, 86s:0.0002, 87s:0.0432, 88:0.7104, A8o:0.0001, 96s:0.0001, 98s:0.0003, 99:0.0174, A9o:0.0798, T7s:0.0002, T8s:0.0014, T9s:0.4271, JTo:0.0004, QTo:0.0002, KTo:0.0096, ATo:0.1225, J6s:0.0003, J8s:0.0071, J9s:0.1913, JTs:0.0695, QJo:0.1331, KJo:0.3695, Q3s:0.0002, Q8s:0.0009, Q9s:0.1256, QTs:0.2303, QJs:0.0202, KQo:0.0498, K3s:0.0002, K4s:0.0001, K5s:0.0010, K6s:0.0002, K8s:0.3410, K9s:0.0406, KTs:0.1591, KJs:0.3682, KQs:0.1194, A3s:0.0012, A4s:0.0072, A5s:0.0004, A6s:0.0029, A7s:0.0003, A8s:0.8617, A9s:0.2412, ATs:0.7890, AJs:0.0050, AQs:0.0854, AA:0.0582"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.9996, A2o:0.3048, 33:0.9996, A3o:0.9948, 43s:0.0001, 44:0.9872, A4o:0.9004, 54s:0.0007, 55:0.8684, A5o:0.9950, 64s:0.0001, 66:0.7725, 77:0.9641, A7o:0.0419, 87s:0.0001, 88:0.2896, A8o:0.0066, 96s:0.0001, 97s:0.0001, 99:0.9826, A9o:0.5034, T8s:0.0019, T9s:0.0626, TT, JTo:0.0016, QTo:0.0005, KTo:0.0003, ATo:0.8775, J2s:0.0002, J9s:0.5106, JTs:0.9304, JJ, QJo:0.8668, KJo:0.6305, AJo, Q2s:0.0002, Q3s:0.0001, Q4s:0.0001, Q5s:0.0006, Q6s:0.0031, Q7s:0.0001, Q8s:0.0017, Q9s:0.7933, QTs:0.7697, QJs:0.9798, QQ, KQo:0.9502, AQo, K2s:0.0078, K3s:0.1996, K4s:0.0210, K5s:0.9855, K6s:0.6492, K7s:0.9872, K8s:0.1966, K9s:0.9591, KTs:0.8408, KJs:0.6318, KQs:0.8806, KK, AKo, A2s, A3s:0.9984, A4s:0.9927, A5s:0.9996, A6s:0.9971, A7s:0.9995, A8s:0.1382, A9s:0.7588, ATs:0.2110, AJs:0.9950, AQs:0.9146, AKs, AA:0.9418"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.9973, 53o:0.0001, K3o:0.1475, A3o:0.0005, 42s:0.9965, 43s:0.9833, 54o:0.9851, 64o:0.0003, K4o:0.0008, A4o:0.0014, 52s:0.9995, 53s:0.9995, 54s:0.9963, 65o:0.7313, 85o:0.0001, Q5o:0.0013, K5o:0.0480, A5o:0.0053, 62s:0.9134, 63s:0.9984, 64s:0.9976, 65s:0.9945, 76o:0.8921, 86o:0.0015, Q6o:0.0006, K6o:0.2621, A6o:0.2348, 72s:0.7480, 73s:0.9959, 74s:0.9970, 75s:0.9995, 76s:0.7940, 87o:0.6854, T7o:0.0001, Q7o:0.7360, K7o:0.9296, A7o:0.0548, 82s:0.9150, 83s:0.5574, 84s:0.9960, 85s:0.9964, 86s, 87s:0.9991, 98o:0.6917, T8o:0.5258, J8o:0.8542, Q8o:0.9974, K8o:0.9968, A8o:0.9814, 92s:0.8644, 93s:0.9260, 94s:0.3325, 95s, 96s:0.9531, 97s:0.9599, 98s:0.9478, T9o:0.9696, J9o:0.6864, Q9o:0.5382, K9o:0.6877, A9o:0.4988, T2s:0.9951, T3s:0.9981, T4s:0.9978, T5s:0.9935, T6s:0.9929, T7s:0.9839, T8s:0.8136, T9s:0.3219, JTo:0.0035, QTo:0.0300, KTo:0.9215, ATo:0.9320, J2s:0.9821, J3s:0.9147, J4s:0.7026, J5s:0.6671, J6s:0.7550, J7s:0.4376, J8s:0.7820, J9s:0.0113, QJo:0.4607, KJo:0.9900, AJo:0.0002, Q2s:0.4026, Q3s:0.2355, Q4s:0.2360, Q5s:0.0060, Q6s:0.1206, Q7s:0.3686, Q8s:0.8221, Q9s:0.1043, QTs:0.0027, QJs:0.6309, KQo:0.9852, K2s:0.0273, K3s:0.0028, K4s:0.0031, K5s:0.0025, K6s:0.0056, K7s:0.0381, K8s:0.9715, K9s:0.5429, KTs:0.8671, KJs:0.7548, KQs:0.9954, A2s:0.0002, A3s:0.0003, A4s:0.0284, A5s:0.1466, A6s:0.6816, A7s:0.3666, A8s:0.9516, A9s:0.9990, ATs, AJs:0.3481, AQs:0.0025, AA"
      },
      {
        "action": "3bet 17.61bb",
        "min": 0.0001,
        "range": "22, K2o:0.0001, A2o, 33, K3o:0.3033, A3o:0.9995, 42s:0.0011, 43s:0.0166, 44, K4o:0.0171, A4o:0.9986, 52s:0.0001, 53s:0.0004, 54s:0.0037, 55, K5o:0.5455, A5o:0.9947, 64s:0.0022, 65s:0.0055, 66, K6o:0.7026, A6o:0.7651, 73s:0.0004, 74s:0.0002, 75s:0.0005, 76s:0.2060, 77, Q7o:0.0001, K7o:0.0698, A7o:0.9452, 82s:0.0001, 84s:0.0001, 85s:0.0022, 87s:0.0009, 88, Q8o:0.0005, K8o:0.0002, A8o:0.0186, 93s:0.0005, 94s:0.0017, 96s:0.0467, 97s:0.0401, 98s:0.0522, 99, T9o:0.0302, J9o:0.3135, Q9o:0.4617, K9o:0.3123, A9o:0.5012, T2s:0.0001, T3s:0.0016, T4s:0.0001, T5s:0.0055, T6s:0.0069, T7s:0.0160, T8s:0.1864, T9s:0.6781, TT, JTo:0.9965, QTo:0.9700, KTo:0.0785, ATo:0.0680, J2s:0.0177, J3s:0.0851, J4s:0.2973, J5s:0.3323, J6s:0.2450, J7s:0.5624, J8s:0.2180, J9s:0.9887, JTs, JJ, QJo:0.5393, KJo:0.0100, AJo:0.9998, Q2s:0.5971, Q3s:0.7644, Q4s:0.7640, Q5s:0.9939, Q6s:0.8793, Q7s:0.6313, Q8s:0.1778, Q9s:0.8957, QTs:0.9973, QJs:0.3691, QQ, KQo:0.0148, AQo, K2s:0.9727, K3s:0.9972, K4s:0.9969, K5s:0.9975, K6s:0.9944, K7s:0.9618, K8s:0.0285, K9s:0.4571, KTs:0.1329, KJs:0.2452, KQs:0.0046, KK, AKo, A2s:0.9998, A3s:0.9997, A4s:0.9716, A5s:0.8534, A6s:0.3184, A7s:0.6334, A8s:0.0484, A9s:0.0010, AJs:0.6519, AQs:0.9975, AKs"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@17.61",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A7o:0.0422, 88:0.0058, A8o:0.0004, 99:0.5035, TT, JJ, AJo:0.0001, QQ, KQo:0.0001, AQo:0.0002, KJs:0.0105, KQs:0.0473, KK, AKo:0.8637, A6s:0.0004, A7s:0.7337, A8s:0.2144, A9s:0.0069, ATs:0.8781, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6589, A2o:0.0012, 33:0.9828, 42s:0.0437, 43s:0.0115, 44:0.8391, 52s:0.3667, 53s:0.0850, 54s:0.8180, 55:0.9753, A5o:0.0002, 62s:0.2159, 63s:0.5706, 64s:0.8782, 65s:0.7679, 66:0.9841, 86o:0.0060, 74s:0.3239, 75s:0.0020, 76s:0.3283, 77:0.9597, 87o:0.0569, A7o:0.0013, 84s:0.8273, 85s:0.4031, 86s:0.4673, 87s:0.1721, 88:0.9787, Q8o:0.0418, A8o:0.1452, 94s:0.4089, 95s:0.2238, 96s:0.7537, 97s:0.1710, 98s:0.7065, 99:0.6133, Q9o:0.0047, A9o:0.7097, T6s:0.0433, T7s:0.0001, T8s:0.6666, T9s:0.5137, TT:0.0001, QTo:0.3376, ATo:0.7587, J3s:0.0794, J5s:0.3707, J6s:0.0906, J7s:0.2911, J8s:0.4555, J9s:0.2055, JTs:0.2700, JJ:0.0386, QJo:0.2840, KJo:0.8956, AJo:0.1181, Q2s:0.0254, Q4s:0.1754, Q5s:0.0981, Q6s:0.7908, Q7s:0.0013, Q8s:0.0632, Q9s:0.1871, QTs:0.0059, QJs:0.2883, QQ:0.0076, KQo:0.7706, AQo:0.0022, K2s:0.3647, K3s:0.0115, K4s:0.0056, K6s:0.2692, K7s:0.3846, K8s:0.0810, K9s:0.8064, KTs:0.9343, KJs:0.6946, KQs:0.9789, KK:0.0104, AKo:0.0023, A2s:0.6913, A3s:0.1425, A4s:0.2634, A5s:0.4881, A6s:0.4013, A7s:0.9045, A8s:0.6511, A9s:0.5932, ATs:0.1165, AJs:0.8609, AQs:0.0181, AKs:0.0008, AA:0.0006"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.3266, A2o:0.6283, 33:0.0111, K3o:0.0001, A3o:0.5275, 42s:0.0003, 43s:0.0011, 44:0.1376, A4o:0.4289, 53s:0.0096, 54s:0.0069, A5o:0.4767, 62s:0.0111, 63s:0.0002, 65s:0.0811, 66:0.0028, A6o:0.0427, 76s:0.0844, 77:0.0190, K7o:0.0007, A7o:0.0042, 84s:0.0002, 85s:0.0001, 86s:0.1190, 87s:0.0032, 88:0.0104, Q8o:0.0008, A8o:0.0155, 92s:0.0007, 96s:0.0092, 97s:0.0602, 99:0.3818, Q9o:0.0090, A9o:0.1037, T2s:0.0104, T3s:0.0010, T4s:0.0154, T6s:0.0165, T8s:0.0800, T9s:0.1522, TT, JTo:0.0038, QTo:0.1828, ATo:0.2340, J3s:0.0036, J6s:0.0068, J7s:0.0243, J8s:0.0014, J9s:0.5363, JTs:0.1040, JJ:0.9610, QJo:0.1212, KJo:0.0006, AJo:0.8798, Q2s:0.1784, Q3s:0.0317, Q4s:0.0712, Q5s:0.0791, Q6s:0.0580, Q7s:0.1050, Q8s:0.0879, Q9s:0.4826, QTs:0.9677, QJs:0.6703, QQ:0.9919, KQo:0.1674, AQo:0.9954, K2s:0.2317, K3s:0.0378, K4s:0.5203, K5s:0.0720, K6s:0.6352, K7s:0.3445, K8s:0.0703, K9s:0.0302, KTs:0.0194, KJs:0.2773, KQs:0.0170, KK:0.9895, AKo:0.9976, A2s:0.1718, A3s:0.8178, A4s:0.7217, A5s:0.4891, A6s:0.5740, A7s:0.0582, A8s:0.2574, A9s:0.3884, ATs:0.8398, AJs:0.1388, AQs:0.9818, AKs:0.9992, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0056, 99:0.4974, TT:0.9996, J8s:0.0001, JJ:0.0023, AJo:0.0001, QQ:0.1625, KJs:0.0042, KQs:0.0053, KK:0.0148, AKo:0.1263, A8s:0.0003, ATs:0.6450, AJs:0.2339, AQs:0.6127, AKs:0.2193"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0059, TT:0.0003, JJ:0.9977, QQ:0.8375, AQo:0.0002, KK:0.9852, AKo:0.7374, A8s:0.0002, ATs:0.1355, AJs:0.7613, AQs:0.3868, AKs:0.7807, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0269, 66:0.0510, 77:0.0028, 88:0.0233, 99:0.0005, T9s:0.0018, JTs:0.0010, QTs:0.0505, QJs:0.0041, KJs:0.0145, KQs:0.0720, A8s:0.0017, A9s:0.0027, ATs:0.0824, AJs:0.0048, AQs:0.0553, AA:0.0001"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "54s:0.0004, 88:0.0006, 99:0.0009, A9o:0.0099, ATo:0.0075, J9s:0.0015, KJo:0.0075, Q9s:0.0001, QTs:0.0002, QJs:0.0001, KQo:0.0006, K8s:0.0001, KJs:0.0008, KQs:0.0001, A3s:0.0002, A4s:0.0011, A5s:0.0001, A6s:0.0002, A8s:0.1088, A9s:0.0263, ATs:0.0415, AQs:0.0283, AA:0.0581"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0071, 66:0.0029, 77:0.0061, 88:0.1198, 99:0.0038, T9s:0.0051, JTs:0.0002, Q9s:0.0022, QTs:0.0087, QJs:0.0005, KQo:0.0053, K9s:0.0003, KTs:0.0303, KJs:0.2507, KQs:0.0404, A6s:0.0001, A9s:0.0001, ATs:0.0092, AJs:0.0001, AQs:0.0017"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "33:0.0010, 54s:0.0001, 55:0.0051, 66:0.0059, 88:0.0015, 99:0.0003, TT:0.0010, JJ:0.0506, AJo:0.0022, QQ:0.0071, KQo:0.0001, AQo:0.2887, K5s:0.0015, K8s:0.0008, KJs:0.0018, KK:0.0004, AKo:0.0001, A2s:0.1198, A3s:0.0832, A4s:0.0081, A5s:0.1999, A6s:0.0828, A7s:0.2933, A8s:0.1172, A9s:0.0187, ATs:0.0224, AJs:0.0037, AQs:0.0405, AA:0.6605"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0001, 44:0.0001, 88:0.0003, TT:0.0031, JJ:0.0384, AJo:0.0027, AQo:0.1113, K6s:0.0010, A2s:0.0139, A3s:0.0517, A4s:0.0063, A6s:0.0551, A7s:0.0167, A8s:0.0601, A9s:0.0563, ATs:0.0462, AJs:0.1999, AQs:0.0102, AKs:0.0007, AA:0.3395"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0005, 55:0.0061, 66:0.0771, 77:0.0089, 88:0.6431, 99:0.0163, TT:0.4698, J8s:0.0001, JJ:0.9108, KJo:0.0001, AJo:0.0001, QTs:0.0010, QJs:0.0016, QQ:0.9928, KQo:0.0185, AQo:0.2157, K2s:0.0001, K4s:0.0011, K5s:0.0004, K6s:0.0296, K8s:0.0121, K9s:0.0136, KTs:0.0013, KJs:0.6178, KQs, KK:0.9996, AKo, A2s:0.1583, A3s:0.1655, A4s:0.7308, A5s:0.4933, A6s:0.0461, A7s:0.1605, A8s:0.4745, A9s:0.0147, ATs:0.2623, AJs:0.0605, AQs:0.9491, AKs:0.9993, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0058, 99:0.5035, TT:0.9996, JJ:0.0026, AJo:0.0001, AQo:0.0002, KJs:0.0009, KQs:0.0473, AKo:0.1428, A7s:0.2985, A8s:0.1819, A9s:0.0069, ATs:0.8778, AJs:0.6448, AQs:0.3183, AKs:0.0017"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0004, JJ:0.9974, QQ, KK, AKo:0.7209, ATs:0.0003, AJs:0.3552, AQs:0.6817, AKs:0.9983, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@17.61",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9996, A2o:0.3048, 33:0.9996, A3o:0.9948, 43s:0.0001, 44:0.9872, A4o:0.9004, 54s:0.0007, 55:0.8684, A5o:0.9950, 64s:0.0001, 66:0.7725, 77:0.9641, A7o:0.0419, 87s:0.0001, 88:0.2896, A8o:0.0066, 96s:0.0001, 97s:0.0001, 99:0.9826, A9o:0.5034, T8s:0.0019, T9s:0.0626, TT, JTo:0.0016, QTo:0.0005, KTo:0.0003, ATo:0.8775, J2s:0.0002, J9s:0.5106, JTs:0.9304, JJ, QJo:0.8668, KJo:0.6305, AJo, Q2s:0.0002, Q3s:0.0001, Q4s:0.0001, Q5s:0.0006, Q6s:0.0031, Q7s:0.0001, Q8s:0.0017, Q9s:0.7933, QTs:0.7697, QJs:0.9798, QQ, KQo:0.9502, AQo, K2s:0.0078, K3s:0.1996, K4s:0.0210, K5s:0.9855, K6s:0.6492, K7s:0.9872, K8s:0.1966, K9s:0.9591, KTs:0.8408, KJs:0.6318, KQs:0.8806, KK, AKo, A2s, A3s:0.9984, A4s:0.9927, A5s:0.9996, A6s:0.9971, A7s:0.9995, A8s:0.1382, A9s:0.7588, ATs:0.2110, AJs:0.9950, AQs:0.9146, AKs, AA:0.9418"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0010, 98s:0.0001, 99:0.0063, TT:0.1949, JJ:0.8617, Q8s:0.0001, QQ:0.9606, AQo:0.0001, KK, AKo:0.8637, ATs:0.0120, AJs:0.0747, AQs:0.9944, AKs:0.9987, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0856, 33:0.0001, A3o:0.0005, 44:0.0002, 55:0.0225, 66:0.0108, 77:0.0001, 88:0.0801, 99:0.0061, T8s:0.0003, T9s:0.0011, TT:0.2246, ATo:0.0190, J9s:0.0002, JTs:0.1091, JJ:0.0264, AJo:0.0279, Q9s:0.0031, QTs:0.0952, QJs:0.0050, QQ:0.0590, KQo:0.0003, AQo:0.4034, K5s:0.0004, K6s:0.0003, K7s:0.0010, K8s:0.0082, K9s:0.3815, KJs:0.0195, KQs:0.0009, KK:0.7153, AKo:0.0549, A2s:0.0001, A3s:0.0523, A4s:0.1807, A5s:0.0025, A6s:0.0788, A7s:0.0837, A8s:0.0109, A9s:0.2506, ATs:0.0002, AJs:0.0002, AQs:0.7195, AKs:0.2073, AA:0.2489"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0411, A2o:0.2230, A3o:0.3427, 44:0.0025, A4o:0.0054, 54s:0.0002, 55:0.0102, A5o:0.7564, 66:0.0242, 77:0.0011, A7o:0.0019, 88:0.0020, A8o:0.0010, A9o:0.3371, T9s:0.0035, TT:0.4924, ATo:0.0653, J9s:0.1898, JTs:0.0380, JJ:0.0499, QJo:0.0006, KJo:0.0042, AJo:0.6262, Q9s:0.0021, QTs:0.0351, QJs:0.0219, QQ:0.0334, KQo:0.0004, AQo:0.5422, K2s:0.0005, K3s:0.0008, K4s:0.0017, K5s:0.0079, K6s:0.0471, K7s:0.0561, K8s:0.0397, K9s:0.1227, KTs:0.0748, KJs:0.1290, KQs:0.0021, KK:0.2434, AKo:0.9407, A2s:0.6659, A3s:0.6112, A4s:0.6985, A5s:0.9858, A6s:0.1737, A7s:0.8144, A8s:0.0262, A9s:0.3813, ATs:0.2079, AJs:0.9915, AQs:0.1905, AKs:0.7852, AA:0.6929"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 99:0.0002, T8s:0.0002, TT:0.6619, J8s:0.0015, JJ:0.6321, QQ:0.9994, AQo:0.0001, K5s:0.0003, KK:0.9988, AKo:0.8635, A7s:0.0002, ATs:0.0162, AJs:0.0491, AQs:0.8245, AKs:0.9951, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0260, 33:0.0001, 44:0.0001, A4o:0.0001, 55:0.0685, A5o:0.0289, 66:0.0001, 88:0.0119, 99:0.0563, A9o:0.0003, T9s:0.0028, TT:0.0851, ATo:0.0670, J9s:0.0005, JTs:0.0031, JJ:0.0044, QJo:0.0001, KJo:0.0001, AJo:0.0061, Q6s:0.0001, Q9s:0.0064, QTs:0.0300, QJs:0.0061, QQ:0.0213, AQo:0.0058, K2s:0.0001, K4s:0.0069, K5s:0.0001, K6s:0.0019, K9s:0.0429, KTs:0.0040, KJs:0.0025, KQs:0.0081, KK:0.1072, AKo:0.0061, A2s:0.0378, A3s:0.0047, A4s:0.0766, A5s:0.2846, A6s:0.0070, A7s:0.0166, A8s:0.0113, A9s:0.0008, ATs:0.0003, AJs:0.2032, AQs:0.5232, AKs:0.4172, AA:0.1083"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0359, A2o:0.0399, 33:0.0127, A3o:0.4751, 44:0.0100, A4o:0.0318, 54s:0.0001, 55:0.0030, A5o:0.2198, 66:0.0843, 77:0.0066, A7o:0.0197, 88:0.0470, A8o:0.0003, 99:0.0992, A9o:0.0752, T8s:0.0001, T9s:0.0092, TT:0.0412, ATo:0.1691, J9s:0.2626, JTs:0.2329, JJ:0.2586, QJo:0.0003, KJo:0.0005, AJo:0.6513, Q6s:0.0001, Q9s:0.1088, QTs:0.3397, QJs:0.1702, QQ:0.0278, AQo:0.9578, K2s:0.0001, K3s:0.0044, K4s:0.0004, K5s:0.0121, K6s:0.0890, K7s:0.0708, K8s:0.0077, K9s:0.2876, KTs:0.0008, KJs:0.0025, KQs:0.0659, KK:0.8284, AKo:0.9501, A2s:0.1225, A3s:0.5601, A4s:0.8264, A5s:0.3795, A6s:0.2335, A7s:0.5183, A8s:0.0646, A9s:0.3912, ATs:0.1950, AJs:0.7827, AQs:0.0924, AKs:0.5532, AA:0.8335"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0081, TT:0.8082, JJ:0.9998, QQ, KK, AKo:0.8637, ATs:0.0003, AQs:0.6326, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0012, QQ, KK, AKo:0.9994, AQs:0.0001, AKs:0.9975, AA:0.9418"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@17.61",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.9996, 66:0.9967, 77:0.9974, 88:0.9764, 99:0.3941, A9o, TT:0.0061, ATo:0.5915, JJ:0.5397, AJo:0.9032, QQ:0.0085, AQo:0.0047, KJs:0.0002, KQs:0.8542, KK, A8s:0.7938, A9s:0.2913, ATs:0.0069, AJs:0.1563, AQs:0.0053, AKs:0.0109, AA"
      },
      {
        "action": "3bet 62.25bb",
        "min": 0.0001,
        "range": "55:0.0004, 66:0.0033, 77:0.0026, 88:0.0236, 99:0.6059, TT:0.9939, ATo:0.4085, JJ:0.4603, AJo:0.0968, QQ:0.9915, AQo:0.9953, KQs:0.1458, KK:0.0001, AKo, A8s:0.2061, A9s:0.7087, ATs:0.9931, AJs:0.8437, AQs:0.9947, AKs:0.9891"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@17.61",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.9909, 55, 66, 77, 88, A8o:0.9484, 99, A9o, TT, ATo, JJ, AJo, QQ, KQo, AQo, KJs, KQs, KK, AKo, A6s:0.0006, A7s:0.9970, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@17.61|SB:CALL@17.11",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0987, QQ:0.0041, AQo:0.0004, AKo:0.0001, AJs:0.0004, AQs:0.0081, AKs:0.0002, AA:0.0324"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0860, JJ:0.8954, QQ:0.9959, AQo:0.3076, KK, AKo:0.9996, AJs:0.3186, AQs:0.9905, AKs:0.9997, AA:0.9676"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@17.61|SB:CALL@17.11|BB:3BET@62.25",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0085, KK, AKs:0.0109, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@17.61|SB:3BET@62.25",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0017, QQ:0.9989, KK, AKs:0.0008, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0412, 77:0.0051, 88:0.0094, 98s:0.0006, ATo:0.0291, JTs:0.0207, KJo:0.0001, AJo:0.0007, QTs:0.0203, QJs:0.0067, KQo:0.0313, KTs:0.0099, KJs:0.0341, KK:0.0003, A3s:0.0004, A4s:0.0001, A5s:0.0003, A6s:0.0012, A7s:0.0001, A8s:0.0252, A9s:0.0250, ATs:0.1955, AJs:0.0315, AA:0.0883"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0001, 66:0.0853, A6o:0.0007, 77:0.2562, A7o:0.2059, 88:0.2577, A8o:0.2616, 99:0.0471, A9o:0.5836, TT:0.1633, ATo:0.0291, JJ:0.1498, QJo:0.0006, KJo:0.0001, AJo:0.2816, Q8s:0.0001, QQ:0.9971, KQo:0.4619, AQo:0.0114, KJs:0.0001, KQs:0.0006, KK:0.9997, AKo:0.2494, A2s:0.1037, A4s:0.0233, A6s:0.0612, A7s:0.0058, A8s:0.0782, A9s:0.1949, ATs:0.1441, AJs:0.1315, AQs:0.4241, AKs:0.9436, AA:0.9117"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0097, 44:0.0141, 55:0.0186, 66:0.8734, 77:0.7386, 88:0.7329, 99:0.9529, T9s:0.0006, TT:0.8367, JTs:0.2026, JJ:0.8502, AJo:0.7177, QTs:0.8705, QJs:0.9933, QQ:0.0028, KQo:0.5068, AQo:0.9886, K9s:0.0005, KTs:0.9854, KJs:0.9658, KQs:0.9994, AKo:0.7506, A3s:0.0035, A4s:0.0981, A5s:0.1081, A7s:0.0079, A8s:0.2048, A9s:0.7784, ATs:0.6604, AJs:0.8370, AQs:0.5759, AKs:0.0564"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9980, 33, 44, 53s:0.0063, 54s:0.9845, 55, 64s:0.0266, 65s:0.9980, 66, 75s:0.4153, 76s:0.9955, 77, 85s:0.0009, 86s:0.9982, 87s:0.9897, 88, 96s:0.0296, 97s:0.9791, 98s:0.9979, 99, A9o:0.6185, T7s:0.0135, T8s:0.9997, T9s:0.9998, TT, JTo:0.0001, QTo:0.0225, KTo:0.8868, ATo, J7s:0.0001, J8s:0.9787, J9s:0.9984, JTs:0.9998, JJ:0.9915, QJo:0.9792, KJo:0.9992, AJo, Q3s:0.0002, Q6s:0.0021, Q7s:0.0004, Q8s:0.9662, Q9s:0.9986, QTs, QJs, KQo, AQo, K3s:0.0150, K4s:0.1756, K5s:0.8511, K6s:0.9990, K7s:0.9522, K8s:0.9955, K9s:0.9996, KTs, KJs, KQs, AKo:0.1802, A2s:0.6698, A3s:0.9598, A4s:0.9988, A5s:0.9992, A6s:0.9982, A7s, A8s, A9s, ATs, AJs, AQs"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0825, K2o:0.6318, A2o:0.9248, Q3o:0.0171, K3o:0.4904, A3o:0.9624, 42s:0.0001, Q4o:0.0251, K4o:0.1156, A4o:0.9761, Q5o:0.0038, K5o:0.0311, A5o:0.9251, 64s:0.0002, Q6o:0.0302, K6o:0.2694, A6o:0.8245, Q7o:0.1296, K7o:0.0995, A7o:0.8708, Q8o:0.0001, K8o:0.1684, A8o:0.8045, Q9o:0.0788, K9o:0.4802, A9o:0.3774, QTo:0.2288, KTo:0.1057, ATo:0.0001, J6s:0.0001, J7s:0.0001, J8s:0.0007, JJ:0.0085, QJo:0.0101, KJo:0.0008, Q2s:0.1672, Q3s:0.0642, Q4s:0.0051, Q5s:0.0002, Q6s:0.0536, Q7s:0.0331, Q8s:0.0013, QJs:0.0001, QQ, K2s:0.7971, K3s:0.8118, K4s:0.6381, K5s:0.0824, K6s:0.0003, K7s:0.0345, K8s:0.0043, K9s:0.0002, KK, AKo:0.8198, A2s:0.3300, A3s:0.0401, A4s:0.0011, A5s:0.0008, A6s:0.0017, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9996, K2o:0.0087, A2o:0.2011, 32s:0.9990, 33, 43o:0.0005, 53o:0.4690, K3o:0.0888, A3o:0.3028, 42s:0.9936, 43s, 44, 54o:0.9982, 64o:0.7631, K4o:0.2749, A4o:0.3242, 52s:0.9995, 53s:0.9998, 54s:0.9989, 55, 65o:0.9997, 75o:0.9942, K5o:0.4612, A5o:0.5411, 62s:0.9989, 63s:0.9969, 64s:0.9996, 65s:0.9997, 66, 76o:0.9951, 86o:0.7173, Q6o:0.0734, K6o:0.9162, A6o:0.2756, 72s:0.9814, 73s:0.9943, 74s:0.9997, 75s:0.9975, 76s:0.9990, 77, 87o:0.9674, 97o:0.9992, T7o:0.1521, J7o:0.0005, Q7o:0.2799, K7o:0.8134, A7o:0.9234, 82s:0.9517, 83s:0.9931, 84s:0.9994, 85s, 86s:0.9967, 87s, 88, 98o:0.9909, T8o:0.9920, J8o:0.9877, Q8o:0.5652, K8o:0.9994, A8o:0.8402, 92s:0.9001, 93s:0.9963, 94s:0.9887, 95s:0.9915, 96s:0.9996, 97s:0.9996, 98s, 99, T9o:0.9935, J9o:0.6904, Q9o:0.9769, K9o:0.8826, A9o:0.9997, T2s:0.9873, T3s:0.9975, T4s:0.9957, T5s, T6s:0.9991, T7s, T8s, T9s:0.9972, TT, JTo, QTo, KTo, ATo, J2s:0.9993, J3s:0.9998, J4s:0.9991, J5s:0.9994, J6s:0.9996, J7s, J8s:0.9994, J9s:0.9998, JTs, JJ, QJo, KJo, AJo, Q2s, Q3s:0.9991, Q4s:0.9998, Q5s:0.9993, Q6s, Q7s:0.9996, Q8s:0.9998, Q9s, QTs, QJs, QQ:0.9992, KQo, AQo, K2s:0.9949, K3s:0.9987, K4s:0.9993, K5s:0.9998, K6s:0.9996, K7s:0.9760, K8s:0.9998, K9s, KTs, KJs, KQs, AKo:0.4983, A2s:0.8613, A3s:0.5228, A4s, A5s:0.9991, A6s:0.9290, A7s:0.9992, A8s, A9s, ATs, AJs, AQs, AKs:0.4601"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0004, 52o:0.0002, Q2o:0.0013, K2o:0.1866, A2o:0.7988, 32s:0.0002, 43o:0.0076, 53o:0.0014, K3o:0.1566, A3o:0.6972, 42s:0.0039, 43s:0.0001, 64o:0.0045, 74o:0.0001, Q4o:0.0038, K4o:0.6421, A4o:0.6757, 52s:0.0002, 54s:0.0010, 75o:0.0003, Q5o:0.0002, K5o:0.5068, A5o:0.4589, 62s:0.0001, 63s:0.0016, 64s:0.0001, 65s:0.0002, 86o:0.0151, 96o:0.0023, K6o:0.0833, A6o:0.7244, 72s:0.0006, 73s:0.0022, 75s:0.0024, 76s:0.0010, 87o:0.0258, 97o:0.0006, T7o:0.1735, J7o:0.0271, Q7o:0.0476, K7o:0.1865, A7o:0.0766, 82s:0.0006, 84s:0.0002, 86s:0.0030, 98o:0.0072, T8o:0.0066, J8o:0.0097, Q8o:0.4305, K8o:0.0003, A8o:0.1597, 92s:0.0989, 93s:0.0002, 94s:0.0022, 95s:0.0078, 96s:0.0001, 97s:0.0003, T9o:0.0062, J9o:0.3094, Q9o:0.0226, K9o:0.1169, A9o:0.0003, T2s:0.0001, T3s:0.0019, T9s:0.0028, J2s:0.0001, J4s:0.0007, J5s:0.0001, J6s:0.0001, J8s:0.0003, J9s:0.0001, KJo:0.0001, Q3s:0.0006, Q5s:0.0005, Q6s:0.0001, Q7s:0.0001, Q8s:0.0001, Q9s:0.0001, QQ:0.0008, K2s:0.0049, K3s:0.0012, K4s:0.0001, K5s:0.0001, K6s:0.0003, K7s:0.0240, K8s:0.0002, KJs:0.0001, KK, AKo:0.5017, A2s:0.1387, A3s:0.4772, A5s:0.0009, A6s:0.0710, A7s:0.0007, A8s:0.0001, AKs:0.5399, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0741, 55:0.6589, A5o:0.0023, 65s:0.0001, 66:0.5010, 76s:0.0008, 77:0.8870, 88:0.8109, 99:0.9448, T9s:0.0391, TT:0.7443, ATo:0.0039, JTs:0.0002, JJ:0.9059, AJo:0.1142, Q8s:0.0001, QJs:0.1730, QQ:0.9996, KQo:0.0470, AQo:0.8977, K3s:0.0389, K5s:0.0114, K6s:0.0001, K7s:0.1949, K8s:0.6968, K9s:0.2631, KTs:0.9931, KJs:0.9983, KQs:0.9851, KK:0.0593, A3s:0.1522, A4s:0.1533, A5s:0.9206, A6s:0.7928, A7s:0.3287, A8s:0.7797, A9s:0.9755, ATs:0.9666, AJs:0.8546, AQs:0.9994, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0002, A5o:0.0399, A7o:0.0665, A8o:0.0888, A9o:0.0198, TT:0.0002, ATo:0.4350, JTs:0.0002, JJ:0.0002, AJo:0.0868, QQ:0.0001, AQo:0.0091, K3s:0.0003, K5s:0.0002, K9s:0.0001, KK:0.0006, AKo:0.0017, A2s:0.0569, A3s:0.4212, A4s:0.5126, A5s:0.0035, A6s:0.0325, A7s:0.0420, A8s:0.0387, AJs:0.0379, AQs:0.0001, AKs:0.4539, AA:0.9723"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0002, A7o:0.0027, A8o:0.0034, A9o:0.0027, TT:0.0002, ATo:0.0050, AJo:0.0082, QQ:0.0001, AQo:0.0031, K5s:0.0002, K7s:0.0002, K9s:0.0001, KTs:0.0001, KJs:0.0001, KQs:0.0001, KK:0.0004, AKo:0.0041, A2s:0.0187, A3s:0.0007, A4s:0.0193, A6s:0.0002, A7s:0.0024, A8s:0.0007, ATs:0.0006, AJs:0.0023, AQs:0.0001, AKs:0.0102, AA:0.0276"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0016, A5o:0.0001, 66:0.0008, 77:0.0003, 88:0.1186, 99:0.0200, TT:0.2435, ATo:0.0070, JTs:0.0007, JJ:0.0926, AJo:0.0002, Q8s:0.0001, QJs:0.0001, QQ:0.0002, AQo:0.0021, K3s:0.0001, K5s:0.0023, K7s:0.0007, K8s:0.0043, KTs:0.0042, KJs:0.0005, KQs:0.0014, KK:0.9396, AKo:0.9941, A2s:0.4233, A3s:0.0715, A4s:0.2585, A5s:0.0659, A6s:0.0276, A7s:0.5349, A8s:0.1794, A9s:0.0234, ATs:0.0328, AJs:0.1050, AQs:0.0004, AKs:0.5359"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@17.7",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0121, A3o:0.0105, A4o:0.0299, 54s:0.0006, A5o:0.0033, A6o:0.0035, 75s:0.0008, T7o:0.0002, A7o:0.0015, 86s:0.0003, Q8o:0.0066, A8o:0.0912, 92s:0.0005, 95s:0.0001, 96s:0.0001, T9o:0.0006, J9o:0.0072, Q9o:0.0025, K9o:0.0025, A9o:0.0001, T9s:0.0025, J8s:0.0002, J9s:0.0001, Q3s:0.0001, Q5s:0.0004, Q6s:0.0001, Q9s:0.0001, QQ:0.0008, K2s:0.0013, K3s:0.0002, K4s:0.0001, K5s:0.0001, K6s:0.0002, K7s:0.0108, K8s:0.0001, KJs:0.0001, KK:0.1976, AKo:0.0024, A2s:0.0009, A3s:0.0077, A6s:0.0010, A7s:0.0001, AKs:0.0396, AA:0.0411"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "22:0.0004, A2o:0.3531, A3o:0.3336, 42s:0.0002, K4o:0.0001, A4o:0.4429, 54s:0.0002, K5o:0.0001, A5o:0.4494, 63s:0.0009, 64s:0.0001, 65s:0.0002, A6o:0.2073, 75s:0.0008, 76s:0.0010, 87o:0.0064, K7o:0.0001, A7o:0.0621, 86s:0.0027, A8o:0.0672, 92s:0.0019, 95s:0.0001, 97s:0.0003, T9o:0.0001, K9o:0.0004, A9o:0.0002, T9s:0.0001, K2s:0.0002, K7s:0.0003, KK:0.8024, AKo:0.4993, A2s:0.1376, A3s:0.4694, A5s:0.0009, A6s:0.0700, A7s:0.0006, A8s:0.0001, AKs:0.5003, AA:0.9589"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@20",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0244, K3o:0.0082, A3o:0.0991, 64o:0.0002, A4o:0.1109, 54s:0.0003, K5o:0.0416, A5o:0.0624, 86o:0.0001, K6o:0.0006, A6o:0.0038, 73s:0.0003, 75s:0.0001, 76s:0.0002, J7o:0.0005, Q7o:0.0007, K7o:0.0081, A7o:0.0219, 86s:0.0003, 98o:0.0004, T8o:0.0002, J8o:0.0007, Q8o:0.0332, A8o:0.0572, 94s:0.0003, 95s:0.0001, T9o:0.0008, J9o:0.0100, A9o:0.0003, T9s:0.0005, J4s:0.0004, J8s:0.0001, Q6s:0.0001, QQ:0.0002, K2s:0.0007, K3s:0.0002, K7s:0.0022, KK:0.0635, AKo:0.0021, A2s:0.0268, A3s:0.0792, A6s:0.0050, A7s:0.0003, A8s:0.0001, AKs:0.0254, AA:0.2867"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "22:0.0004, K2o:0.0004, A2o:0.2904, 53o:0.0001, K3o:0.0009, A3o:0.0752, 42s:0.0006, 43s:0.0001, 64o:0.0002, K4o:0.0364, A4o:0.2724, 54s:0.0006, K5o:0.0005, A5o:0.1646, 63s:0.0009, 64s:0.0001, 65s:0.0001, 86o:0.0037, A6o:0.1007, 72s:0.0001, 73s:0.0004, 75s:0.0008, 76s:0.0004, 87o:0.0013, 97o:0.0001, J7o:0.0002, K7o:0.0003, A7o:0.0167, 84s:0.0001, 86s:0.0020, A8o:0.0340, 92s:0.0107, 95s:0.0023, 96s:0.0001, 97s:0.0002, T9o:0.0001, J9o:0.0115, Q9o:0.0004, K9o:0.0005, T9s:0.0015, J4s:0.0001, Q3s:0.0001, QQ:0.0005, K3s:0.0001, K7s:0.0010, KK:0.9365, AKo:0.4996, A2s:0.0991, A3s:0.3976, A5s:0.0008, A6s:0.0515, A7s:0.0003, AKs:0.5145, AA:0.7133"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0003, KK, AKo:0.5017, AKs:0.5399, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32s:0.9774, 33, 43o:0.3561, 53o:0.9307, A3o:0.0499, 42s:0.9818, 43s:0.9980, 44:0.9998, 54o, 64o:0.9873, A4o:0.4126, 52s:0.9891, 53s:0.9991, 54s:0.7923, 55, 65o:0.9983, 75o:0.9820, 85o:0.0001, A5o:0.5155, 62s:0.9926, 63s:0.9930, 64s:0.9980, 65s:0.9718, 66, 76o:0.9972, 86o:0.9754, 96o:0.6725, K6o:0.1887, A6o:0.8335, 72s:0.0058, 73s:0.9872, 74s:0.9949, 75s:0.9995, 76s:0.9990, 77, 87o:0.9966, 97o:0.9857, K7o:0.6770, A7o:0.8664, 82s:0.9526, 83s:0.9317, 84s:0.9897, 85s:0.9989, 86s:0.9008, 87s, 88, 98o:0.9918, T8o:0.9759, J8o:0.0587, Q8o:0.1148, K8o:0.4608, A8o:0.6387, 92s:0.9536, 93s:0.9638, 94s:0.9878, 95s:0.9946, 96s:0.9988, 97s:0.9989, 98s:0.9820, 99, T9o:0.9122, J9o:0.9685, Q9o:0.7500, K9o:0.7960, A9o:0.8373, T2s:0.5871, T3s:0.9455, T4s:0.9782, T5s:0.9847, T6s:0.9947, T7s:0.9511, T8s:0.9213, T9s:0.7818, TT:0.9995, JTo:0.9644, QTo:0.7302, KTo:0.4948, ATo:0.8115, J2s:0.8365, J3s:0.9892, J4s:0.9668, J5s:0.9761, J6s:0.9026, J7s:0.9908, J8s:0.9984, J9s:0.9992, JTs:0.9997, JJ:0.8917, QJo:0.9640, KJo:0.9870, AJo:0.9990, Q2s:0.9614, Q3s:0.9831, Q4s:0.9741, Q5s:0.8569, Q6s:0.9801, Q7s:0.2234, Q8s:0.9916, Q9s:0.8434, QTs:0.9976, QJs:0.8743, QQ:0.0679, KQo:0.7343, AQo:0.0422, K2s:0.4699, K3s:0.9964, K4s:0.8517, K5s:0.9597, K6s:0.8599, K7s:0.9920, K8s:0.9974, K9s:0.9978, KTs:0.9927, KJs, KQs:0.9988, AKo:0.3685, A2s:0.9918, A3s:0.9727, A4s:0.9911, A5s:0.3460, A6s:0.6801, A7s:0.8750, A8s:0.9994, A9s:0.9974, ATs, AJs, AQs:0.7968, AKs:0.0012"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0266, A2o:0.0469, 32s:0.0004, 63o:0.0002, J3o:0.0001, K3o:0.0011, A3o:0.6542, 42s:0.0169, Q4o:0.0005, K4o:0.0421, A4o:0.5826, 53s:0.0004, 54s:0.2073, Q5o:0.0008, K5o:0.0199, A5o:0.4817, 62s:0.0001, 63s:0.0013, 64s:0.0013, 65s:0.0261, 76o:0.0013, 96o:0.0068, Q6o:0.0009, K6o:0.2846, A6o:0.0762, 74s:0.0022, Q7o:0.0011, K7o:0.0004, A7o:0.1181, 82s:0.0005, 83s:0.0001, 85s:0.0006, 86s:0.0986, 87s:0.0001, T8o:0.0213, J8o:0.2044, Q8o:0.0048, K8o:0.0064, A8o:0.3589, 93s:0.0001, 97s:0.0004, 98s:0.0172, T9o:0.0762, J9o:0.0172, Q9o:0.1910, K9o:0.1923, A9o:0.1597, T2s:0.0005, T3s:0.0005, T5s:0.0049, T6s:0.0036, T7s:0.0433, T8s:0.0775, T9s:0.2177, TT:0.0005, JTo:0.0345, QTo:0.2692, KTo:0.5029, ATo:0.1882, J2s:0.0010, J3s:0.0054, J4s:0.0001, J5s:0.0121, J6s:0.0943, J8s:0.0006, JJ:0.1083, QJo:0.0356, KJo:0.0127, AJo:0.0008, Q2s:0.0241, Q3s:0.0001, Q4s:0.0238, Q5s:0.1413, Q6s:0.0195, Q7s:0.7755, Q8s:0.0073, Q9s:0.1556, QTs:0.0019, QJs:0.1257, QQ:0.9321, KQo:0.2657, AQo:0.9578, K2s:0.5270, K3s:0.0020, K4s:0.1456, K5s:0.0401, K6s:0.1397, K7s:0.0076, K8s:0.0018, K9s:0.0001, KTs:0.0073, KQs:0.0012, KK, AKo:0.6315, A2s:0.0081, A3s:0.0273, A4s:0.0082, A5s:0.6540, A6s:0.3199, A7s:0.1249, A8s:0.0003, A9s:0.0015, AQs:0.2032, AKs:0.9988, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0154, 66:0.0231, 77:0.0299, 87s:0.0065, 88:0.0144, TT:0.0214, JJ:0.0351, QQ:0.3900, AQo:0.0251, KTs:0.0581, KJs:0.0155, KQs:0.0240, AKo:0.0001, A8s:0.0010, A9s:0.0003, ATs:0.0003, AJs:0.0149, AQs:0.6889, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0002, A5o:0.1167, A7o:0.1044, 88:0.0001, A8o:0.0268, A9o:0.0001, TT:0.0022, ATo:0.0028, JJ:0.0001, AJo:0.0273, QQ:0.0002, AQo:0.1149, K4s:0.0013, K5s:0.0003, K6s:0.0001, K7s:0.0006, KJs:0.0001, KK:0.0002, A2s:0.0815, A3s:0.2306, A4s:0.1545, A5s:0.1781, A6s:0.0099, A7s:0.2098, A8s:0.0146, A9s:0.0742, ATs:0.0489, AJs:0.0501, AQs:0.0940, AKs:0.2305, AA:0.8686"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0002, A7o:0.0033, 88:0.0001, A9o:0.0003, TT:0.0006, ATo:0.0019, JJ:0.0003, AJo:0.0006, QQ:0.0647, AQo:0.0610, K4s:0.0029, K8s:0.0003, KTs:0.0007, KJs:0.0057, KQs:0.0002, KK:0.0001, AKo:0.0001, A2s:0.0003, A3s:0.0075, A4s:0.0024, A5s:0.0036, A6s:0.0014, A7s:0.0001, A8s:0.0015, A9s:0.0020, ATs:0.0347, AJs:0.0224, AQs:0.0501, AKs:0.0084, AA:0.1313"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0156, 55:0.0005, 66:0.0688, 77:0.0301, 88:0.1419, 99:0.0005, TT:0.1518, JJ:0.3752, QQ:0.5450, AQo:0.0064, K4s:0.0072, K5s:0.0025, K6s:0.0001, K7s:0.0059, K8s:0.0752, K9s:0.0017, KTs:0.1332, KJs:0.1543, KQs:0.0463, KK:0.9997, AKo:0.9998, A2s:0.0037, A3s:0.0077, A4s:0.3084, A5s:0.5375, A6s:0.1492, A7s:0.1892, A8s:0.0422, A9s:0.0161, ATs:0.2887, AJs:0.1267, AQs:0.1199, AKs:0.7612"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1067, 33:0.0135, 54s:0.0174, 55:0.9346, 65s:0.0015, 66:0.9263, 75s:0.0138, 76s:0.4227, 77:0.8113, 87s:0.1191, 88:0.8914, 97s:0.0055, 98s:0.0001, 99:0.9975, T8s:0.1659, TT:0.9961, KTo:0.0053, ATo:0.0760, J9s:0.0032, JTs:0.2160, JJ:0.9908, AJo:0.0025, Q8s:0.0065, Q9s:0.1481, QTs:0.9905, QJs:0.5025, KQo:0.4753, AQo:0.9963, K4s:0.0042, K5s:0.0010, K6s:0.6245, K7s:0.0125, K8s:0.1910, K9s:0.6007, KTs:0.9909, KJs:0.7682, KQs:0.9269, A2s:0.0004, A3s:0.0233, A4s:0.8434, A5s:0.4706, A6s:0.0995, A7s:0.3517, A8s:0.4522, A9s:0.9584, ATs:0.9946, AJs:0.9908, AQs:0.9927"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "76s:0.0001, JJ:0.0001, KQo:0.0001, AKo:0.0001"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0446, 33:0.0022, 44:0.3077, 55:0.0010, 65s:0.0010, 66:0.0207, 76s:0.0014, 77:0.0389, 88:0.1043, 97s:0.0001, 99:0.0004, T8s:0.0001, T9s:0.0002, TT:0.0003, JJ:0.0002, KJo:0.0003, AJo:0.0007, Q8s:0.0002, Q9s:0.0007, KQo:0.0167, AQo:0.0030, K6s:0.0006, K7s:0.0011, K9s:0.0003, KTs:0.0030, KJs:0.0637, KQs:0.0722, AKo:0.1801, A2s:0.0585, A3s:0.6360, A4s:0.0277, A5s:0.1920, A6s:0.0069, A7s:0.1776, A8s:0.0168, A9s:0.0016, ATs:0.0044, AJs:0.0084, AQs:0.0073"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0039, A3o:0.0002, A4o:0.0039, A5o:0.1447, 84s:0.0001, A9o:0.0005, T4s:0.0001, T8s:0.0001, TT:0.0001, ATo:0.0105, AJo:0.1205, AQo:0.0898, K8s:0.0047, K9s:0.0001, AKo:0.0001, A2s:0.0475, A3s:0.0658, A4s:0.0156, A5s:0.1478, A6s:0.1504, A7s:0.0051, A8s:0.0441, A9s:0.0661, ATs:0.1341, AJs:0.2260, AQs:0.2590, AKs:0.3019, AA:0.7720"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A3o:0.0007, A4o:0.0015, A5o:0.0044, A6o:0.0002, A7o:0.0011, A9o:0.0158, ATo:0.0064, J9s:0.0001, AJo:0.0010, AQo:0.0377, AKo:0.0003, A3s:0.0502, A4s:0.0676, A5s:0.0024, A6s:0.0221, A7s:0.0354, A8s:0.0512, A9s:0.0687, ATs:0.0190, AJs:0.0982, AQs:0.0548, AKs:0.0327, AA:0.2280"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0002, 55:0.0035, 63s:0.0002, 66:0.0282, 75s:0.0007, 77:0.0442, 99:0.0365, A9o:0.0012, TT:0.0609, J9s:0.0003, JJ:0.2885, AJo:0.0002, QQ, AQo:0.0087, K2s:0.0008, K4s:0.0089, K5s:0.0006, K6s:0.0210, K7s:0.0227, K9s:0.0020, KTs:0.0011, KJs:0.0466, KQs:0.4920, KK, AKo:0.9997, A2s:0.2180, A3s:0.0882, A4s:0.1199, A5s:0.7463, A6s:0.3323, A7s:0.4108, A8s:0.2129, A9s:0.2995, ATs:0.1607, AJs:0.2637, AQs:0.5998, AKs:0.6654"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0316, 66:0.0500, 77:0.0303, 88:0.0438, 99:0.0366, JJ:0.0398, QQ:0.0446, KQo:0.0404, AQo:0.0324, KTs:0.0188, KJs:0.0958, KQs:0.0051, KK:0.0129, A7s:0.0001, ATs:0.2611, AJs:0.2061, AQs:0.0005, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0086, A7o:0.0026, A8o:0.0266, A9o:0.0004, ATo:0.0078, AJo:0.0188, AQo:0.3850, A2s:0.0028, A3s:0.1964, A4s:0.1317, A5s:0.4034, A6s:0.1031, A7s:0.0186, A8s:0.2895, A9s:0.0346, ATs:0.0098, AJs:0.2966, AQs:0.0027, AKs:0.2736, AA:0.9435"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0004, A7o:0.0005, ATo:0.0002, AQo:0.0699, A2s:0.0001, A3s:0.0031, A4s:0.0006, A5s:0.0018, A7s:0.0002, A8s:0.0001, A9s:0.0085, ATs:0.0018, AJs:0.0042, AQs:0.0007, AKs:0.1089, AA:0.0564"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0015, 55:0.0772, 66:0.2122, 77:0.5837, 88:0.8042, 99:0.9381, TT:0.9998, ATo:0.0001, J8s:0.0002, JJ:0.9602, Q9s:0.0004, QTs:0.2781, QJs:0.0706, QQ:0.9554, KQo:0.6252, AQo:0.3389, K3s:0.0001, K5s:0.0002, K8s:0.0007, K9s:0.0016, KTs:0.5454, KJs:0.4549, KQs:0.9949, KK:0.9871, AKo, A2s:0.0009, A3s:0.0027, A4s:0.0010, A5s:0.3103, A6s:0.0003, A7s:0.0464, A8s:0.0101, A9s:0.0065, ATs:0.6220, AJs:0.4711, AQs:0.9961, AKs:0.6174"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0016, A3o:0.0006, A4o:0.0128, A5o:0.0797, A6o:0.0287, A7o:0.0387, A8o:0.0126, A9o:0.0211, KTo:0.0019, J8s:0.0001, Q6s:0.0007, QQ:0.5486, K3s:0.0361, K4s:0.1394, K5s:0.0276, K6s:0.0001, K7s:0.0197, K8s:0.0014, K9s:0.0001, KK:0.0225, AKo:0.0007, A2s:0.0007, A3s:0.0001, AKs:0.0009, AA:0.1491"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "A2o:0.3456, A3o:0.6819, A4o:0.5001, A5o:0.4098, 64s:0.0002, A6o:0.4460, A7o:0.3347, A8o:0.4070, A9o:0.0828, ATo:0.0001, J8s:0.0006, JJ:0.0085, QQ:0.4513, K3s:0.0037, K4s:0.0015, K5s:0.0001, K7s:0.0016, K8s:0.0002, KK:0.9774, AKo:0.8191, A2s:0.3291, A3s:0.0400, A4s:0.0011, A5s:0.0008, A6s:0.0017, AKs:0.9991, AA:0.8509"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@20",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0085, K3o:0.0152, A3o:0.0412, A4o:0.1001, A5o:0.1823, K6o:0.0007, A6o:0.0320, A7o:0.0958, K8o:0.0172, A8o:0.1933, K9o:0.0015, A9o:0.0162, QTo:0.0084, KTo:0.0228, JJ:0.0004, QJo:0.0005, KJo:0.0001, Q2s:0.0030, Q3s:0.0028, Q6s:0.0010, Q7s:0.0001, QQ:0.5551, K2s:0.0066, K3s:0.0069, K4s:0.0411, K5s:0.0036, K8s:0.0004, KK:0.0157, AKo:0.0006, A2s:0.0894, A3s:0.0007, A5s:0.0002, A6s:0.0002, AKs:0.1118, AA:0.2596"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "K2o:0.0477, A2o:0.0541, K3o:0.0342, A3o:0.6354, 42s:0.0001, K4o:0.0252, A4o:0.4443, K5o:0.0032, A5o:0.3388, 64s:0.0001, K6o:0.0412, A6o:0.1649, K7o:0.0034, A7o:0.2285, K8o:0.0116, A8o:0.2865, Q9o:0.0004, K9o:0.0972, A9o:0.0797, KTo:0.0200, ATo:0.0001, J7s:0.0001, J8s:0.0006, JJ:0.0080, QJo:0.0003, KJo:0.0001, Q2s:0.0012, Q3s:0.0032, Q6s:0.0009, QQ:0.4429, K2s:0.2259, K3s:0.5089, K4s:0.1849, K5s:0.0387, K6s:0.0001, K7s:0.0219, K8s:0.0019, K9s:0.0001, KK:0.9825, AKo:0.8185, A2s:0.1788, A3s:0.0297, A4s:0.0011, A5s:0.0006, A6s:0.0009, AKs:0.8875, AA:0.7404"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0085, QQ, KK, AKo:0.8198, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, K6s:0.0001, KK:0.0001, A3s:0.0002, AKs:0.1404, AA:0.3435"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0001, 88:0.0001, T9s:0.0266, TT:0.0001, J9s:0.0010, JJ:0.0008, Q9s:0.0001, QQ:0.0001, AQo:0.0017, K7s:0.0004, K8s:0.0004, KK:0.2311, AKo:0.7892, A2s:0.0416, A3s:0.0013, A4s:0.0261, A5s:0.5265, A6s:0.0338, A7s:0.0394, A8s:0.0009, A9s:0.0143, ATs:0.0034, AJs:0.0044, AQs:0.0641, AKs:0.8187, AA:0.6565"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0031, A3o:0.0151, A4o:0.0628, A5o:0.0074, A6o:0.0438, A7o:0.0413, A8o:0.1142, A9o:0.0052, ATo:0.0001, J8s:0.0001, JJ:0.0077, Q3s:0.0060, Q4s:0.0009, Q6s:0.0004, Q7s:0.0049, QQ:0.8607, K2s:0.0002, K3s:0.0142, K4s:0.0921, K5s:0.0018, K6s:0.0001, K7s:0.0008, K8s:0.0001, K9s:0.0001, KK:0.5363, AKo:0.2177, A2s:0.0523, A3s:0.0015, A6s:0.0001, AKs:0.0743, AA:0.0345"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.5970, K3o:0.0008, A3o:0.4007, A4o:0.5562, A5o:0.5919, 64s:0.0001, A6o:0.3155, A7o:0.3185, A8o:0.1130, Q9o:0.0001, A9o:0.0970, JJ:0.0003, Q2s:0.0003, Q6s:0.0002, QQ:0.0278, K2s:0.0046, K3s:0.0055, K4s:0.0069, K5s:0.0004, K7s:0.0007, K8s:0.0003, KK:0.4637, AKo:0.6021, A2s:0.2487, A3s:0.0386, A4s:0.0011, A5s:0.0008, A6s:0.0016, AKs:0.9256, AA:0.9655"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 88:0.0002, 97s:0.0001, T8s:0.0001, J9s:0.0001, JJ:0.0001, Q9s:0.0008, QQ:0.0002, K5s:0.0002, K6s:0.0001, KJs:0.0007, KK:0.0001, AKo:0.0001, A4s:0.0008, A5s:0.0011, A6s:0.0001, A8s:0.0003, A9s:0.0004, ATs:0.0004, AJs:0.0026, AKs:0.0010, AA:0.0144"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0078, 66:0.0118, 76s:0.0060, 98s:0.0028, 99:0.0018, A9o:0.0001, T8s:0.0501, J8s:0.0001, J9s:0.0002, JJ:0.0022, KJo:0.0001, AJo:0.0002, QQ:0.0002, AQo:0.0004, K4s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0015, K9s:0.0001, KJs:0.0002, KK:0.1258, AKo:0.6799, A3s:0.0053, A4s:0.2483, A5s:0.1137, A6s:0.1489, A7s:0.1998, A8s:0.1297, A9s:0.0664, ATs:0.5706, AJs:0.0265, AQs:0.0979, AKs:0.8001, AA:0.9856"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0069, A4o:0.1400, A5o:0.0001, A6o:0.0773, A7o:0.0932, A8o:0.0430, K9o:0.0012, A9o:0.0327, KTo:0.0047, J8s:0.0001, JJ:0.0009, Q2s:0.0284, Q4s:0.0005, Q7s:0.0037, Q8s:0.0001, QQ:0.0283, K2s:0.0005, K3s:0.0346, K4s:0.0220, K5s:0.0002, K7s:0.0012, KK:0.2031, AKo:0.0513, A2s:0.0653, A3s:0.0001, A6s:0.0001, AKs:0.6711, AA:0.1563"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.3066, K3o:0.0003, A3o:0.4714, A4o:0.1181, A5o:0.3874, 64s:0.0001, K6o:0.0001, A6o:0.1696, A7o:0.1512, K8o:0.0002, A8o:0.1685, Q9o:0.0001, A9o:0.2476, KTo:0.0001, J8s:0.0003, JJ:0.0027, Q2s:0.0027, Q3s:0.0021, Q4s:0.0001, Q6s:0.0016, Q7s:0.0008, Q8s:0.0001, QQ:0.3839, K2s:0.0014, K3s:0.0063, K4s:0.0153, K5s:0.0013, K7s:0.0005, KK:0.7651, AKo:0.7651, A2s:0.1341, A3s:0.0362, A4s:0.0009, A5s:0.0007, A6s:0.0006, AKs:0.3289, AA:0.8437"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.2333, KK, AKo:0.5280, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 62.25bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0532, A2o:0.2094, 33:0.2969, A3o:0.0002, 42s:0.0001, 44:0.4801, A4o:0.0384, 52s:0.0001, 55:0.3168, A5o:0.0079, 63s:0.0023, 65s:0.1884, 66:0.4737, A6o:0.0959, 75s:0.0186, 76s:0.5132, 77:0.0850, 87o:0.0652, A7o:0.4568, 83s:0.0016, 84s:0.0019, 85s:0.0071, 86s:0.0016, 88:0.5712, A8o:0.5078, 94s:0.0254, 95s:0.0001, 96s:0.0203, 97s:0.0350, 98s:0.0537, 99:0.7442, A9o:0.4577, T7s:0.1499, T8s:0.7072, T9s:0.0160, TT:0.8795, ATo:0.5114, J6s:0.0883, J8s:0.0051, J9s:0.4884, JTs:0.0195, JJ:0.9758, AJo:0.9184, Q3s:0.0053, Q4s:0.0358, Q7s:0.0002, Q8s:0.0457, Q9s:0.0351, QJs:0.0107, QQ:0.7543, AQo:0.6341, K2s:0.0117, K3s:0.0057, K4s:0.0999, K5s:0.0079, K6s:0.0159, K7s:0.0140, K9s:0.0905, KTs:0.0135, KJs:0.1264, KQs:0.1348, KK:0.9968, AKo:0.5784, A2s:0.0954, A3s:0.3218, A4s:0.5307, A5s:0.4974, A6s:0.2752, A7s:0.3583, A8s:0.3905, A9s:0.5320, ATs:0.7740, AJs:0.5483, AQs:0.3786, AKs:0.8560, AA:0.9667"
      },
      {
        "action": "3bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0008, 33:0.0067, A3o:0.0013, 42s:0.0048, 43s:0.0021, 54o:0.0001, 53s:0.0008, 54s:0.0015, 63s:0.0008, 65s:0.0565, 66:0.3431, A6o:0.0093, 72s:0.0001, 74s:0.0360, 75s:0.0510, 76s:0.0951, 77:0.8034, A7o:0.0002, 85s:0.0252, 86s:0.0001, 87s:0.0001, 88:0.4286, A8o:0.0577, 93s:0.0001, 94s:0.0011, 97s:0.0285, 98s:0.0950, 99:0.2412, A9o:0.1517, T5s:0.0001, T7s:0.0192, T8s:0.0075, T9s:0.0253, TT:0.1178, ATo:0.0338, J4s:0.0001, J6s:0.0146, J7s:0.0001, J8s:0.0283, J9s:0.0001, JTs:0.0254, JJ:0.0242, AJo:0.0807, Q3s:0.0037, Q4s:0.0676, Q5s:0.0002, Q8s:0.0048, Q9s:0.0452, QJs:0.0002, QQ:0.2452, KQo:0.0019, AQo:0.3634, K2s:0.0456, K3s:0.0069, K4s:0.0081, K5s:0.0196, K6s:0.0436, K7s:0.0208, K9s:0.0184, KTs:0.0091, KJs:0.0879, KQs:0.7721, KK:0.0032, AKo:0.4216, A2s:0.2876, A3s:0.0038, A4s:0.3223, A5s:0.2880, A6s:0.3929, A7s:0.3526, A8s:0.1371, A9s:0.2093, ATs:0.2233, AJs:0.4516, AQs:0.6207, AKs:0.1440, AA:0.0333"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9296, A2o:0.0001, 32s:0.0281, 33:0.9072, 42s:0.4150, 43s:0.3022, 44:0.9461, A4o:0.0012, 52s:0.0015, 53s:0.3371, 55:0.3907, 63s:0.0674, 64s:0.6601, 66:0.6836, Q6o:0.0001, 72s:0.0006, 73s:0.0295, 76s:0.0085, 77:0.4334, 83s:0.0001, 85s:0.0416, 87s:0.0164, 88:0.0009, A8o:0.0001, 94s:0.0003, 95s:0.0097, 96s:0.5651, 97s:0.1437, 98s:0.1915, 99:0.6087, A9o:0.0002, T2s:0.0053, T3s:0.0001, T8s:0.7840, T9s:0.1549, TT:0.1637, KTo:0.0003, ATo:0.0872, J2s:0.0578, J3s:0.0008, J6s:0.0637, J8s:0.5572, J9s:0.0532, JTs:0.5869, JJ:0.0701, QJo:0.0001, AJo:0.0007, Q4s:0.0052, Q5s:0.0003, Q6s:0.1858, Q7s:0.0039, Q8s:0.0269, Q9s:0.1232, QTs:0.0025, QJs:0.5570, QQ:0.4310, KQo:0.8419, AQo:0.0585, K2s:0.0018, K3s:0.0887, K5s:0.0270, K6s:0.0021, K7s:0.0012, K8s:0.0001, K9s:0.0113, KTs:0.0024, KJs:0.5669, KQs:0.7710, KK:0.0382, AKo:0.0264, A2s:0.0006, A3s:0.0005, A4s:0.1788, A5s:0.1181, A6s:0.4142, A7s:0.2346, A8s:0.0174, A9s:0.1200, ATs:0.6670, AJs:0.9899, AQs:0.2757, AKs:0.7521, AA:0.0237"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0185, 32s:0.0003, 33:0.0347, A3o:0.2111, 43s:0.0044, 44:0.0001, A4o:0.0061, 53s:0.0002, 55:0.0029, A5o:0.1112, 64s:0.0396, 65s:0.0006, 66:0.0621, A6o:0.0392, 73s:0.0596, 76s:0.0754, 77:0.2769, A7o:0.2608, 83s:0.0001, 84s:0.0129, 85s:0.0063, 86s:0.0270, 87s:0.0030, 88:0.8323, A8o:0.2203, 96s:0.1775, 97s:0.3221, 98s:0.0808, 99:0.1522, A9o:0.3086, T8s:0.0007, T9s:0.0090, TT:0.7883, ATo:0.6778, J2s:0.0001, J5s:0.0840, J9s:0.1066, JTs:0.0528, JJ:0.9115, AJo:0.9733, Q4s:0.0003, Q6s:0.0003, Q7s:0.0016, Q8s:0.1775, QQ:0.5563, AQo:0.5170, K2s:0.0041, K3s:0.0011, K6s:0.1302, K7s:0.0002, K8s:0.0435, K9s:0.0310, KTs:0.0010, KJs:0.0458, KQs:0.0050, KK:0.8714, AKo:0.9246, A2s:0.5465, A3s:0.6109, A4s:0.5953, A5s:0.4489, A6s:0.1734, A7s:0.2402, A8s:0.7117, A9s:0.3776, ATs:0.1788, AJs:0.0027, AQs:0.5118, AKs:0.1531, AA:0.9730"
      },
      {
        "action": "3bet 53.32bb",
        "min": 0.0001,
        "range": "33:0.0090, A4o:0.0001, 55:0.0050, 65s:0.0023, 66:0.0001, 72s:0.0001, 73s:0.0005, 76s:0.0121, 77:0.0700, 87s:0.0771, 88:0.1144, A8o:0.0575, 95s:0.0049, 97s:0.1325, 98s:0.0059, 99:0.2213, T8s:0.0060, T9s:0.0075, TT:0.0147, KTo:0.0015, ATo:0.0386, J2s:0.0001, J6s:0.0001, J7s:0.0012, J9s:0.0429, JTs:0.0109, JJ:0.0143, AJo:0.0064, Q4s:0.0001, Q7s:0.0013, Q8s:0.0013, QJs:0.0034, QQ:0.0126, AQo:0.4144, K2s:0.0072, K5s:0.0009, K6s:0.0035, K8s:0.0039, K9s:0.0093, KTs:0.0091, KJs:0.0009, KQs:0.1144, KK:0.0903, AKo:0.0377, A2s:0.1344, A3s:0.1493, A4s:0.0002, A5s:0.2223, A6s:0.0294, A7s:0.2224, A8s:0.1958, A9s:0.2407, ATs:0.0411, AJs:0.0046, AQs:0.2116, AKs:0.0949, AA:0.0033"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0005, A5o:0.0001, 66:0.0001, 76s:0.0001, 77:0.0006, A7o:0.0003, 87s:0.0003, A8o:0.0005, 99:0.0002, A9o:0.0002, T8s:0.0001, T9s:0.0001, TT:0.0194, QTo:0.0002, J9s:0.0012, JTs:0.0001, JJ:0.0039, QJo:0.0001, KJo:0.0005, AJo:0.0013, Q8s:0.0003, QTs:0.0001, QJs:0.0003, QQ:0.0472, KQo:0.0003, AQo:0.0014, K3s:0.0003, K5s:0.0001, K6s:0.0001, K7s:0.0001, K9s:0.0001, KTs:0.0002, KJs:0.0001, KK:0.1071, AKo:0.0017, A3s:0.0002, A4s:0.0002, A5s:0.0001, A6s:0.0033, A7s:0.0004, A8s:0.0001, A9s:0.0009, ATs:0.1947, AJs:0.0109, AQs:0.0169, AKs:0.0217, AA:0.5519"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0002, 66:0.0001, 76s:0.0019, A7o:0.0002, 87s:0.0001, 88:0.0555, 97s:0.0067, 99:0.0079, A9o:0.0001, T8s:0.0005, T9s:0.0010, TT:0.0465, JTo:0.0001, ATo:0.0095, J8s:0.0678, J9s:0.0002, JTs:0.0818, JJ:0.0379, KJo:0.0001, AJo:0.0001, Q8s:0.0001, Q9s:0.0003, QTs:0.0004, QJs:0.0014, QQ:0.0010, KQo:0.0001, AQo:0.0004, K3s:0.0001, K4s:0.0002, K5s:0.0001, K6s:0.0004, K7s:0.0137, KTs:0.0020, KJs:0.0037, KQs:0.0056, KK:0.0545, AKo:0.1620, A3s:0.0484, A4s:0.0004, A5s:0.0846, A8s:0.0021, A9s:0.0556, ATs:0.0628, AJs:0.0061, AQs:0.0355, AKs:0.0726, AA:0.3030"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "76s:0.0180, 77:0.0004, 88:0.0028, 99:0.0006, A9o:0.0787, TT:0.1996, QTo:0.0001, KTo:0.0001, ATo:0.0002, JTs:0.0001, JJ:0.0068, AJo:0.0001, Q9s:0.0003, QTs:0.0308, QQ:0.1306, AQo:0.0008, K3s:0.0001, K5s:0.0002, K6s:0.1208, K8s:0.0074, KTs:0.0027, KJs:0.0002, KQs:0.0591, KK:0.4011, AKo:0.0013, A2s:0.1484, A3s:0.0348, A4s:0.0002, A5s:0.1054, A6s:0.0006, A8s:0.0038, A9s:0.1513, ATs:0.0213, AJs:0.1538, AQs:0.2330, AKs:0.2854, AA:0.0643"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0004, 55:0.0002, A5o:0.0010, 66:0.0003, 76s:0.0242, 77:0.0106, A7o:0.0002, 87s:0.0001, 88:0.0309, A8o:0.0002, 97s:0.0541, 98s:0.0003, 99:0.0126, A9o:0.0682, T7s:0.0059, T9s:0.0021, TT:0.0216, JTo:0.0001, QTo:0.0002, KTo:0.0010, ATo:0.0004, J8s:0.0034, J9s:0.0001, JTs:0.0014, JJ:0.0090, AJo:0.0008, Q8s:0.0001, Q9s:0.0004, QTs:0.1438, QJs:0.0002, QQ:0.6558, KQo:0.0015, AQo:0.0047, K3s:0.0009, K4s:0.0074, K5s:0.0526, K6s:0.0005, K7s:0.0015, K8s:0.0004, K9s:0.0006, KTs:0.3404, KJs:0.3605, KQs:0.1888, KK:0.4373, AKo:0.7137, A2s:0.1036, A3s:0.6767, A4s:0.0994, A5s:0.2499, A6s:0.0148, A7s:0.0011, A8s:0.8685, A9s:0.1325, ATs:0.3829, AJs:0.3521, AQs:0.0343, AKs:0.6110, AA:0.0808"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0030, ATs:0.0004, AJs:0.0001, AA:0.0003"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0095, 77:0.0020, 88:0.0064, AJo:0.0007, KK:0.0003, ATs:0.0478, AJs:0.0314, AA:0.0880"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0009, A5o:0.0001, 66:0.0025, 76s:0.0004, 77:0.0151, A7o:0.0024, 87s:0.0009, 88:0.0364, A8o:0.0034, 98s:0.0015, 99:0.0662, A9o:0.0002, T7s:0.0034, T8s:0.0025, T9s:0.0145, TT:0.0042, JTo:0.0015, KTo:0.0001, ATo:0.0055, J8s:0.0053, J9s:0.0006, JTs:0.0043, JJ:0.1222, QJo:0.0012, KJo:0.0004, AJo:0.0079, Q7s:0.0002, Q8s:0.0027, Q9s:0.0051, QTs:0.0038, QJs:0.0007, QQ:0.7982, KQo:0.0029, AQo:0.0062, K3s:0.0072, K4s:0.0036, K6s:0.0013, K7s:0.0046, K8s:0.0004, K9s:0.0040, KTs:0.0015, KJs:0.0015, KQs:0.0036, KK:0.9650, AKo:0.1793, A2s:0.0051, A3s:0.0008, A4s:0.0004, A5s:0.0097, A6s:0.0019, A7s:0.0025, A8s:0.0139, A9s:0.0096, ATs:0.0175, AJs:0.0137, AQs:0.0758, AKs:0.5424, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0336, 77:0.0050, 88:0.0094, ATo:0.0010, KK:0.0003, A9s:0.0004, ATs:0.0637, AJs:0.0148, AA:0.0883"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 76s:0.0001, 77:0.0004, A7o:0.0001, 87s:0.0002, A8o:0.0003, 98s:0.0001, 99:0.0003, A9o:0.0001, T8s:0.0001, T9s:0.0003, TT:0.0004, KTo:0.0001, J8s:0.0001, J9s:0.0003, JTs:0.0002, JJ:0.1533, QJo:0.0001, KJo:0.0001, QJs:0.0010, QQ:0.0835, KQo:0.0004, K4s:0.0001, K5s:0.0001, K6s:0.0005, K7s:0.0013, K9s:0.0008, KJs:0.0003, KK:0.0010, AKo:0.0003, A2s:0.0007, A3s:0.0033, A4s:0.0002, A5s:0.0005, A6s:0.0037, A8s:0.0013, A9s:0.0028, ATs:0.0239, AJs:0.1149, AQs:0.1465, AKs:0.0140, AA:0.0371"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0001, 66:0.0197, 87s:0.0001, 88:0.0002, A8o:0.0001, 99:0.0283, A9o:0.0005, T8s:0.0003, T9s:0.0002, TT:0.0001, JTo:0.0001, KTo:0.0001, J8s:0.0002, JTs:0.0002, JJ:0.2583, Q9s:0.0001, QTs:0.0293, QJs:0.0001, QQ:0.0076, K5s:0.0251, K6s:0.1308, K7s:0.0001, K8s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0001, KK:0.4731, A2s:0.0002, A3s:0.0006, A5s:0.0006, A6s:0.0001, A7s:0.4085, A8s:0.0001, A9s:0.0041, ATs:0.0026, AJs:0.0045, AQs:0.0108, AKs:0.0164, AA:0.4693"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0001, 66:0.0134, 88:0.0001, A8o:0.0233, A9o:0.0001, T8s:0.0001, TT:0.0018, JTo:0.0001, J8s:0.1478, JTs:0.0001, JJ:0.0192, QJo:0.0001, Q8s:0.1952, Q9s:0.0001, QTs:0.0001, QQ:0.3321, AQo:0.1133, K4s:0.0500, K5s:0.0001, K7s:0.0141, K9s:0.0320, KTs:0.0002, KJs:0.0001, KQs:0.0002, KK:0.2300, AKo:0.0003, A2s:0.0597, A3s:0.0807, A5s:0.1483, A6s:0.0030, A7s:0.0317, A8s:0.0941, A9s:0.0244, ATs:0.0001, AJs:0.0236, AQs:0.4079, AKs:0.0017, AA:0.1982"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.0001, 66:0.0001, 77:0.0004, 88:0.0042, A8o:0.0002, 98s:0.0013, 99:0.0002, A9o:0.0001, T7s:0.0002, T8s:0.0086, TT:0.0004, QTo:0.0002, J9s:0.0001, JTs:0.0001, JJ:0.0174, KJo:0.0130, AJo:0.0004, QTs:0.0008, QJs:0.0001, QQ:0.5501, AQo:0.0004, K4s:0.0493, K5s:0.0107, K7s:0.0027, K8s:0.0002, K9s:0.0010, KTs:0.1310, KJs:0.4259, KQs:0.1661, KK:0.2956, AKo:0.9868, A3s:0.2628, A4s:0.0933, A5s:0.3809, A6s:0.0524, A7s:0.0004, A8s:0.0003, A9s:0.0032, ATs:0.1068, AJs:0.1150, AQs:0.0410, AKs:0.8820, AA:0.2954"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0007, 77:0.0024, 88:0.0029, ATs:0.0176, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0220, 77:0.0027, 88:0.0065, AJo:0.0007, KK:0.0003, ATs:0.0895, AJs:0.0315, AA:0.0882"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@62.25",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, A5o:0.0001, 66:0.0001, 76s:0.0001, 77:0.0015, 87s:0.0002, 88:0.0009, 98s:0.0003, 99:0.0003, T8s:0.0005, T9s:0.0004, TT:0.0014, JTo:0.0002, KTo:0.0001, ATo:0.0006, J9s:0.0003, JTs:0.0002, JJ:0.0856, QJo:0.0008, AJo:0.0008, Q8s:0.0012, Q9s:0.0011, QTs:0.0001, QJs:0.0010, QQ:0.8191, KQo:0.0001, AQo:0.0007, K6s:0.0012, K8s:0.0004, K9s:0.0001, KTs:0.0002, KJs:0.0003, KQs:0.0007, KK, AKo:0.0001, A2s:0.0008, A3s:0.0030, A4s:0.0001, A8s:0.0004, A9s:0.0001, ATs:0.0022, AJs:0.0038, AQs:0.0026, AKs:0.0124, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0040, 77:0.0051, 88:0.0094, AJo:0.0001, KK:0.0003, ATs:0.0578, AJs:0.0248, AA:0.0883"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0001, 86s:0.0001, 88:0.6877, 99:0.8622, TT:0.9038, JJ:0.7348, Q9s:0.0001, QTs:0.0007, QQ:0.2859, KQo:0.0154, AQo:0.5778, K4s:0.0023, K7s:0.0039, K8s:0.0718, K9s:0.0249, KTs:0.3455, KJs:0.5304, KQs:0.5255, KK:0.7281, AKo:0.8374, A2s:0.0068, A3s:0.0019, A4s:0.0104, A5s:0.0045, ATs:0.2451, AJs:0.5368, AQs:0.2174, AKs:0.8710, AA"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.1582, 99:0.1124, TT:0.0959, JJ:0.2652, KJo:0.0001, Q9s:0.0010, QTs:0.0014, QQ:0.7141, KQo:0.0001, AQo:0.1463, K9s:0.0059, KTs:0.0009, KJs:0.0005, KQs:0.2582, KK:0.2719, AKo:0.1626, A4s:0.0001, A5s:0.0153, A6s:0.0007, ATs:0.0903, AJs:0.0861, AQs:0.7825, AKs:0.1290, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "55:0.0002, 77:0.0014, 88:0.3454, 99:0.6714, TT:0.7557, JJ:0.5337, Q9s:0.0002, QQ:0.3597, KQo:0.0005, AQo:0.7746, K4s:0.0077, K5s:0.0039, K8s:0.0332, KTs:0.5615, KJs:0.2797, KQs:0.8677, KK:0.8686, AKo:0.6999, A3s:0.0201, A8s:0.0037, ATs:0.2756, AJs:0.3333, AQs:0.5359, AKs:0.6895, AA"
      },
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0003, 88:0.0458, 99:0.0300, TT:0.2437, JJ:0.4663, QQ:0.6403, KQo:0.0004, AQo:0.0084, K5s:0.0058, K8s:0.0138, K9s:0.0013, KTs:0.0573, KQs:0.1072, KK:0.1314, AKo:0.3001, A3s:0.0412, A4s:0.0148, A5s:0.0104, A7s:0.0002, A8s:0.0083, ATs:0.0565, AJs:0.0204, AQs:0.4637, AKs:0.3105, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, 77:0.0119, 99:0.0044, TT:0.0001, JTs:0.0044, AJo:0.0014, QTs:0.0937, QJs:0.0004, K6s:0.0001, KTs:0.0325, KJs:0.0226, A3s:0.0001, A4s:0.0002, A8s:0.0052, A9s:0.0102, ATs:0.1472, AJs:0.0001, AA:0.0421"
      },
      {
        "action": "4bet 17.61bb",
        "min": 0.0001,
        "range": "44:0.0121, 55:0.1801, 66:0.3859, 77:0.9706, 88, 99:0.9956, TT, ATo:0.0217, JJ, AJo:0.9980, QJs:0.0003, QQ, KQo:0.5242, AQo, KTs:0.0256, KJs:0.0081, KQs, KK, AKo, A2s:0.0003, A3s:0.1291, A4s:0.0007, A5s:0.1977, A6s:0.0001, A7s:0.0014, A8s:0.1969, A9s:0.0009, ATs:0.8527, AJs, AQs, AKs, AA:0.9579"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@17.61",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0853, 77:0.2562, 88:0.2577, 99:0.0471, TT:0.1633, ATo:0.0016, JJ:0.1498, AJo:0.2816, QQ:0.9971, KQo:0.4407, AQo:0.0114, KJs:0.0001, KQs:0.0006, KK:0.9997, AKo:0.2494, A8s:0.0214, A9s:0.1942, ATs:0.1441, AJs:0.1315, AQs:0.4241, AKs:0.9436, AA:0.9117"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, JJ:0.0016, QQ:0.0070, KQs:0.0001, KK:0.0014, AA:0.0867"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0003, 97s:0.0020, 99:0.0048, TT:0.0714, JJ:0.0760, Q9s:0.0001, QQ:0.2114, AQo:0.0195, K3s:0.0463, K7s:0.0002, KTs:0.0001, KQs:0.0010, KK:0.9985, AKo:0.9981, A2s:0.0211, A3s:0.0372, A4s:0.0154, A5s:0.0499, A8s:0.1387, ATs:0.0120, AJs:0.0460, AQs:0.1650, AKs:0.9961, AA:0.9133"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0792, 77:0.2247, 88:0.2440, 99:0.0471, TT:0.1633, ATo:0.0002, JJ:0.1498, AJo:0.0985, QQ:0.9971, AQo:0.0114, KQs:0.0005, KK:0.9997, AKo:0.2494, A4s:0.0001, A6s:0.0001, A8s:0.0015, A9s:0.0069, ATs:0.1212, AJs:0.1315, AQs:0.4241, AKs:0.9436, AA:0.9117"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, T8s:0.0001, TT:0.0001, J9s:0.0001, JJ:0.0001, Q9s:0.0001, QQ:0.0575, K8s:0.0001, KQs:0.0002, KK, A2s:0.0001, A4s:0.0001, A6s:0.0001, ATs:0.0002, AQs:0.0002, AKs:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0787, 77:0.2386, 88:0.2577, 99:0.0471, A9o:0.0012, TT:0.1633, ATo:0.0002, JJ:0.1498, AJo:0.0416, QQ:0.9971, KQo:0.0029, AQo:0.0114, KQs:0.0006, KK:0.9997, AKo:0.2494, A2s:0.0009, A4s:0.0030, A6s:0.0052, A8s:0.0188, A9s:0.0349, ATs:0.0756, AJs:0.1303, AQs:0.4238, AKs:0.9436, AA:0.9117"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.0224, A4s:0.0001, AA:0.0723"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0028, QQ:0.0090, KK:0.9771, AKo:0.7847, A4s:0.0003, A5s:0.0054, ATs:0.0016, AKs:0.9965, AA:0.9277"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0568, 77:0.1743, 88:0.2577, 99:0.0471, TT:0.1633, JJ:0.1498, AJo:0.0209, QQ:0.9971, KQo:0.0002, AQo:0.0114, KJs:0.0001, KQs:0.0006, KK:0.9997, AKo:0.2494, A2s:0.0016, A4s:0.0043, A6s:0.0005, A7s:0.0006, A8s:0.0025, A9s:0.0162, ATs:0.1425, AJs:0.1314, AQs:0.4241, AKs:0.9436, AA:0.9117"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@62.25",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0001, TT:0.0001, JTs:0.0001, JJ:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.2225, K7s:0.0001, KJs:0.0001, KK:0.9993, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0544, 77:0.1389, 88:0.2304, 99:0.0471, A9o:0.0001, TT:0.1633, ATo:0.0001, JJ:0.1498, AJo:0.0222, QQ:0.9971, KQo:0.0228, AQo:0.0114, KJs:0.0001, KQs:0.0006, KK:0.9997, AKo:0.2494, A2s:0.0004, A7s:0.0001, A8s:0.0014, ATs:0.0765, AJs:0.1245, AQs:0.4241, AKs:0.9436, AA:0.9117"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "88:0.6907, 99, TT, JJ, QQ, AQo:0.9998, KK, AKo, AJs:0.2797, AQs:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "88:0.2317, 99:0.9997, TT, JJ, QQ, AQo, KK, AKo, AJs:0.3221, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0195, 77, 88, 99, TT, ATo:0.0036, JJ, AJo, QQ, KQo:0.0794, AQo, KJs:0.0007, KQs:0.9998, KK, AKo, ATs:0.9997, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@17.61|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0530, KK, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@17.61|SB:4BET@62.25",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0144, KK, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0024, 55:0.0005, 63s:0.0001, 65s:0.1012, 66:0.1138, 76s:0.0084, 77:0.0023, 87s:0.0002, 88:0.4780, 99:0.1513, TT:0.9635, J9s:0.0001, JTs:0.0006, JJ:0.6484, AJo:0.0011, QTs:0.1622, QJs:0.0993, QQ:0.1243, KQo:0.0045, AQo:0.3435, KTs:0.3933, KJs:0.6601, KQs:0.9977, KK:0.1417, A2s:0.0001, A4s:0.0117, A5s:0.3160, A6s:0.0003, A8s:0.0041, A9s:0.1244, ATs:0.9552, AJs:0.9991, AQs:0.9996, AKs:0.0001, AA:0.0004"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0225, A3o:0.3632, A4o:0.6879, 55:0.0001, A5o:0.1541, A6o:0.0459, K7o:0.0001, A7o:0.0244, A8o:0.0176, 99:0.0001, A9o:0.0201, TT:0.0001, ATo:0.0739, JJ:0.3516, KJo:0.2313, AJo:0.8575, QJs:0.0008, QQ:0.8756, KQo:0.9893, AQo:0.6565, K2s:0.0166, K3s:0.0033, K4s:0.0472, K5s:0.0028, K6s:0.0381, K7s:0.0065, K8s:0.0544, K9s:0.0446, KTs:0.0637, KJs:0.3093, KQs:0.0015, KK:0.8583, AKo:0.3404, A2s:0.3740, A3s:0.9820, A4s:0.6970, A5s:0.2644, A6s:0.0901, A7s:0.1105, A8s:0.4224, A9s:0.1752, ATs:0.0159, AJs:0.0004, AQs:0.0004, AKs:0.9841, AA:0.9996"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0008, TT:0.0362, KQs:0.0007, AKo:0.6596, A3s:0.0071, A4s:0.0471, A5s:0.1415, A6s:0.0001, A8s:0.0092, ATs:0.0278, AJs:0.0005, AKs:0.0158"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0018, 77:0.0802, 88:0.0976, 99:0.0013, T9s:0.0008, ATo:0.0002, JTs:0.0236, AJo:0.0687, QTs:0.0146, QJs:0.0006, KQo:0.0085, KTs:0.0176, KJs:0.1864, KQs:0.1581, KK:0.0001, A3s:0.0001, A5s:0.0026, A7s:0.0002, A8s:0.0001, A9s:0.0248, ATs:0.2680, AJs:0.3775, AQs:0.0001, AA:0.1562"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "77:0.0055, 88:0.7709, A8o:0.0289, 99:0.6733, A9o:0.0010, TT:0.7678, ATo:0.1838, JJ:0.9910, AJo:0.6746, QTs:0.0001, QJs:0.0011, QQ, KQo:0.8856, AQo:0.7286, KTs:0.0236, KJs:0.3704, KQs:0.1910, KK:0.9996, AKo:0.7424, A2s:0.0133, A3s:0.0001, A6s:0.0004, A8s:0.9396, A9s:0.2738, ATs:0.5450, AJs:0.3158, AQs:0.9416, AKs:0.7918, AA:0.8260"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0018, 77:0.0044, 88:0.1315, 99:0.3254, TT:0.2322, JTs:0.0004, JJ:0.0090, AJo:0.0016, Q9s:0.0001, QTs:0.0037, QJs:0.2859, QQ:0.0001, KQo:0.0001, AQo:0.2714, K9s:0.0001, KTs:0.1585, KJs:0.4426, KQs:0.6509, KK:0.0003, AKo:0.2576, A2s:0.0001, A3s:0.0001, A4s:0.0005, A5s:0.0009, A8s:0.0001, ATs:0.1870, AJs:0.3066, AQs:0.0582, AKs:0.2082, AA:0.0179"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9823, 33:0.9977, 44:0.9998, 54s:0.3904, 55, 64s:0.0004, 65s:0.9725, 66, 75s:0.0001, 76s:0.8954, 77, 86s:0.8900, 87s:0.9702, 88, 96s:0.0014, 97s:0.0069, 98s:0.9861, 99, T7s:0.0152, T8s:0.9788, T9s:0.9827, TT:0.9997, KTo:0.0663, ATo:0.8382, J8s:0.1052, J9s:0.9558, JTs:0.9998, QJo:0.1162, KJo:0.2206, AJo, Q5s:0.0015, Q6s:0.0073, Q7s:0.0188, Q8s:0.3174, Q9s:0.6754, QTs:0.9998, QJs, KQo:0.8603, AQo:0.9992, K3s:0.0007, K4s:0.0050, K5s:0.1705, K6s:0.0716, K7s:0.9633, K8s:0.9814, K9s:0.9960, KTs:0.9998, KJs, KQs, A2s:0.4168, A3s:0.8858, A4s:0.9992, A5s:0.9978, A6s:0.9299, A7s:0.9992, A8s:0.9931, A9s:0.9998, ATs, AJs, AQs:0.9992"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0005, K2o:0.0017, A2o:0.9402, Q3o:0.0018, K3o:0.5380, A3o:0.9827, Q4o:0.0013, K4o:0.3695, A4o:0.5066, K5o:0.0012, A5o:0.2375, Q6o:0.0004, K6o:0.0313, A6o:0.1496, Q7o:0.0004, K7o:0.0008, A7o:0.3495, Q8o:0.0016, K8o:0.1449, A8o:0.1276, 93s:0.0001, K9o:0.0001, A9o:0.1072, T8s:0.0001, TT:0.0003, QTo:0.0200, KTo:0.0483, ATo:0.1612, JJ, QJo:0.5747, KJo:0.7776, Q2s:0.2812, Q3s:0.0608, Q4s:0.0930, Q5s:0.0019, Q6s:0.0227, Q8s:0.0039, Q9s:0.0007, QTs:0.0001, QQ, KQo:0.1397, AQo:0.0008, K2s:0.1332, K3s:0.2449, K4s:0.1948, K5s:0.0215, K6s:0.4288, K7s:0.0019, K8s:0.0133, KTs:0.0001, KK, AKo, A2s:0.5822, A3s:0.1123, A4s:0.0002, A5s:0.0013, A6s:0.0697, A7s:0.0007, A8s:0.0061, A9s:0.0001, AQs:0.0008, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 35.46bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, A2o:0.0001, 32s:0.9880, 33, 53o:0.4723, 63o:0.0001, A3o:0.6506, 42s:0.9996, 43s:0.9997, 44, 54o:0.9937, 64o:0.8085, A4o:0.0818, 52s:0.9997, 53s:0.9998, 54s:0.9998, 55, 65o, 75o:0.9065, Q5o:0.0001, K5o:0.1182, A5o:0.9444, 62s:0.9991, 63s, 64s, 65s:0.9998, 66, 76o:0.9992, 86o:0.9954, 96o:0.0001, Q6o:0.0123, K6o:0.9041, A6o:0.6098, 72s:0.8106, 73s, 74s, 75s:0.9994, 76s, 77, 87o:0.9921, 97o:0.4219, T7o:0.3823, J7o:0.0010, Q7o:0.1577, K7o:0.9773, A7o:0.8832, 82s:0.9780, 83s:0.9796, 84s:0.9984, 85s:0.9998, 86s, 87s, 88, 98o:0.9951, T8o:0.9997, J8o:0.5126, Q8o:0.8108, K8o:0.9223, A8o:0.7790, 92s:0.9861, 93s:0.9987, 94s:0.9853, 95s:0.9970, 96s, 97s, 98s, 99, T9o:0.9997, J9o:0.9950, Q9o:0.9740, K9o:0.9437, A9o, T2s:0.9980, T3s:0.9997, T4s:0.9996, T5s, T6s:0.9995, T7s, T8s, T9s, TT:0.9998, JTo:0.9998, QTo, KTo, ATo, J2s:0.9939, J3s:0.9994, J4s:0.9965, J5s:0.9987, J6s:0.9998, J7s:0.9997, J8s, J9s, JTs, JJ:0.6812, QJo, KJo, AJo, Q2s, Q3s:0.9993, Q4s:0.9996, Q5s, Q6s:0.9984, Q7s:0.9997, Q8s, Q9s, QTs, QJs, KQo, AQo, K2s, K3s:0.9998, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, A2s:0.9228, A3s:0.8932, A4s:0.9047, A5s:0.9442, A6s:0.9916, A7s:0.9693, A8s:0.9972, A9s, ATs, AJs, AQs:0.9997"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.1155, K2o:0.6565, A2o:0.9940, 32s:0.0017, Q3o:0.0267, K3o:0.5920, A3o:0.3191, 42s:0.0001, 43s:0.0002, J4o:0.0009, Q4o:0.3326, K4o:0.3111, A4o:0.8626, 53s:0.0001, Q5o:0.0086, K5o:0.6496, A5o:0.0200, 65s:0.0001, Q6o:0.0056, K6o:0.0095, A6o:0.3897, J7o:0.0001, Q7o:0.0736, K7o:0.0224, A7o:0.1167, 83s:0.0063, 84s:0.0014, Q8o:0.1858, K8o:0.0760, A8o:0.2209, Q9o:0.0254, K9o:0.0510, A9o:0.0001, T2s:0.0001, T6s:0.0002, TT:0.0002, KTo:0.0001, J2s:0.0006, J4s:0.0017, JTs:0.0001, JJ:0.3015, Q3s:0.0007, Q4s:0.0002, Q6s:0.0015, Q7s:0.0002, QQ, AQo:0.0001, K2s:0.0001, KK, AKo:0.8937, A2s:0.0004, AQs:0.0002, AKs:0.9989, AA"
      },
      {
        "action": "3bet 35.46bb",
        "min": 0.0001,
        "range": "A2o:0.0054, A3o:0.0302, 43s:0.0001, 44:0.0001, A4o:0.0552, A5o:0.0354, TT:0.0001, JJ:0.0172, Q9s:0.0001, QTs:0.0001, KJs:0.0001, KQs:0.0001, AKo:0.1063, A2s:0.0767, A3s:0.1068, A4s:0.0953, A5s:0.0558, A6s:0.0084, A7s:0.0307, A8s:0.0028, AQs:0.0001, AKs:0.0011"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.2269, 66:0.0971, 77:0.0976, 88:0.2363, 99:0.0913, T9s:0.0002, TT:0.0775, QTs:0.0051, QJs:0.0008, AQo:0.4091, KTs:0.3081, KJs:0.2234, KQs:0.4359, A4s:0.0052, A5s:0.1755, A6s:0.0018, A7s:0.0138, A8s:0.2126, A9s:0.3001, ATs:0.4706, AQs:0.0574, AA:0.7571"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0379, 77:0.0897, 88:0.2448, 99:0.7742, TT:0.8918, JJ, AJo:0.0015, QTs:0.0001, QJs:0.0446, QQ, KQo:0.0001, AQo:0.3615, KTs:0.0026, KJs:0.1410, KQs:0.5635, KK, AKo, A2s:0.0003, A3s:0.0046, A4s:0.0052, A5s:0.2157, A6s:0.0105, A7s:0.1233, A8s:0.1507, A9s:0.4410, ATs:0.5251, AJs, AQs:0.9426, AKs, AA:0.2429"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@35.46",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.3015, QQ, AQo:0.0001, KK, AKo:0.8937, AQs:0.0002, AKs:0.9989, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@35.46",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.2665, 88:0.1641, 99:0.0074, TT:0.6615, JJ:0.7892, QQ:0.8196, AQo:0.0121, K8s:0.0001, KQs:0.0002, KK, AKo:0.9946, A2s:0.0001, A4s:0.0001, A7s:0.0001, A9s:0.0002, ATs:0.0014, AJs:0.0115, AQs:0.2121, AKs:0.9988, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9998, 32s:0.8711, 33, 42s:0.6631, 43s:0.9814, 44:0.9989, 54o:0.9703, 64o:0.8420, 52s:0.9573, 53s:0.9956, 54s:0.9996, 55:0.9997, 65o:0.9655, 75o:0.5286, K5o:0.0001, 62s:0.4212, 63s:0.9399, 64s:0.9880, 65s:0.9920, 66, 76o:0.9922, 86o:0.6408, 72s:0.0270, 73s:0.7805, 74s:0.9987, 75s:0.9948, 76s:0.9842, 77:0.9998, 87o:0.8973, 97o:0.0076, 82s:0.0001, 84s:0.8996, 85s:0.9887, 86s:0.9960, 87s:0.9979, 88, 98o:0.7939, T8o:0.1435, K8o:0.0360, A8o:0.0002, 93s:0.2342, 94s:0.2584, 95s:0.5986, 96s:0.9677, 97s:0.9792, 98s:0.9982, 99:0.9997, T9o:0.8344, J9o:0.0038, K9o:0.2478, A9o:0.2469, T2s:0.0028, T3s:0.4886, T4s:0.9710, T5s:0.4609, T6s:0.9976, T7s:0.9919, T8s:0.9790, T9s:0.9990, TT:0.9805, JTo:0.9849, QTo:0.8394, KTo:0.6813, ATo:0.7112, J2s:0.0343, J3s:0.6632, J4s:0.3882, J5s:0.8640, J6s:0.4980, J7s:0.9529, J8s:0.9795, J9s:0.9967, JTs:0.9987, JJ:0.0004, QJo:0.9747, KJo:0.6622, AJo:0.9978, Q2s:0.1864, Q3s:0.7113, Q4s:0.8910, Q5s:0.9911, Q6s:0.9563, Q7s:0.8706, Q8s:0.7423, Q9s:0.9938, QTs:0.9933, QJs:0.9916, KQo:0.8049, AQo:0.9874, K2s:0.6604, K3s:0.6497, K4s:0.9458, K5s:0.9531, K6s:0.9287, K7s:0.9841, K8s:0.9916, K9s:0.9979, KTs:0.9962, KJs:0.9986, KQs:0.9995, A2s:0.9957, A3s:0.9439, A4s:0.9963, A5s:0.9985, A6s:0.9830, A7s:0.9992, A8s:0.9883, A9s:0.9909, ATs:0.9987, AJs:0.9984, AQs:0.8415, AKs:0.0001"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0001, Q2o:0.0002, K2o:0.1031, A2o:0.0053, 32s:0.0055, T3o:0.0078, Q3o:0.0328, K3o:0.0160, A3o:0.0582, 42s:0.0002, 43s:0.0004, J4o:0.0001, Q4o:0.0159, K4o:0.0933, A4o:0.6212, Q5o:0.2380, K5o:0.1596, A5o:0.6833, 62s:0.0007, 63s:0.0406, Q6o:0.0201, K6o:0.0052, A6o:0.0312, 72s:0.0006, 74s:0.0001, 75s:0.0002, 76s:0.0028, 87o:0.0055, J7o:0.0375, K7o:0.2004, A7o:0.6136, 82s:0.0001, 84s:0.0003, 86s:0.0001, T8o:0.0036, J8o:0.0014, Q8o:0.0380, K8o:0.1184, A8o:0.3679, 92s:0.0002, 93s:0.0005, 96s:0.0051, 99:0.0001, Q9o:0.0219, K9o:0.2505, A9o:0.0003, T2s:0.0027, T3s:0.0099, T4s:0.0004, T5s:0.2223, T7s:0.0001, T8s:0.0169, TT:0.0192, QTo:0.1508, KTo:0.3098, ATo:0.2836, J2s:0.0010, J3s:0.2277, J4s:0.3231, J5s:0.0364, J6s:0.0035, J7s:0.0004, J9s:0.0002, JTs:0.0003, JJ:0.9996, QJo:0.0104, KJo:0.3344, AJo:0.0018, Q2s:0.6766, Q3s:0.1640, Q4s:0.0928, Q5s:0.0028, Q6s:0.0112, Q7s:0.1153, Q8s:0.2311, Q9s:0.0007, QTs:0.0051, QJs:0.0068, QQ, KQo:0.1942, AQo:0.0125, K2s:0.3271, K3s:0.3066, K4s:0.0505, K5s:0.0233, K6s:0.0663, K7s:0.0004, K8s:0.0017, K9s:0.0001, KTs:0.0014, KJs:0.0001, KK, AKo, A2s:0.0018, A3s:0.0550, A4s:0.0001, A5s:0.0009, A6s:0.0134, A7s:0.0001, A8s:0.0111, A9s:0.0087, ATs:0.0003, AJs:0.0014, AQs:0.1585, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0044, 88:0.0152, 99:0.0040, TT:0.0522, JTs:0.0026, Q8s:0.0002, Q9s:0.0003, QTs:0.0087, QQ:0.0004, AQo:0.0444, KTs:0.0052, KJs:0.0012, KQs:0.0681, A7s:0.0001, A9s:0.0027, ATs:0.0329, AJs:0.1763, AQs:0.0447, AA:0.1352"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1094, 66:0.4057, 77:0.1846, 88:0.0303, 98s:0.0003, 99:0.6802, TT:0.6855, J9s:0.0009, JTs:0.0077, JJ:0.9994, KJo:0.0050, AJo:0.0036, Q8s:0.0004, Q9s:0.0008, QTs:0.0001, QJs:0.0015, QQ:0.9996, AQo:0.2058, K6s:0.0049, K7s:0.0080, K9s:0.0002, KTs:0.0113, KJs:0.6522, KQs:0.9237, KK, AKo, A2s:0.0142, A3s:0.0137, A4s:0.2598, A5s:0.3579, A6s:0.0181, A7s:0.0021, A8s:0.2546, A9s:0.0579, ATs:0.0811, AJs:0.8169, AQs:0.9546, AKs, AA:0.8648"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0012, 44:0.0032, 54s:0.0091, 55:0.2797, 65s:0.0334, 76s:0.0374, 77:0.5015, 87s:0.0364, 88:0.8086, 99:0.1175, TT:0.8639, JTs:0.0030, Q9s:0.2402, QTs:0.3431, QJs:0.0112, KQo:0.0056, AQo:0.1890, K5s:0.0831, K6s:0.0010, K7s:0.0011, K9s:0.0106, KTs:0.4440, KJs:0.5604, KQs:0.9532, A3s:0.0077, A4s:0.0237, A5s:0.7345, A6s:0.1780, A7s:0.1737, ATs:0.4838, AJs:0.9052, AQs:0.9961"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "TT:0.0001, QTs:0.0001, KJs:0.0018, KQs:0.0005, AQs:0.0012"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0002, 65s:0.0001, 76s:0.0001, 86s:0.0004, 99:0.0002, T9s:0.0002, TT:0.0004, ATo:0.0003, JTs:0.0001, AJo:0.0002, QTs:0.0006, QJs:0.0001, KQo:0.0003, AQo:0.0005, K5s:0.0002, K7s:0.0006, K9s:0.0001, KJs:0.0004, KQs:0.0001, A2s:0.0001, A3s:0.0014, A4s:0.0005, A5s:0.0002, A7s:0.0006, A8s:0.0006, A9s:0.0002, ATs:0.0004, AJs:0.0005, AQs:0.0012"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0112, A4o:0.0071, A5o:0.0169, A6o:0.0009, A7o:0.0186, A8o:0.0799, TT:0.0179, ATo:0.0012, JJ:0.0001, Q2s:0.0002, QTs:0.0002, QQ:0.2724, AQo:0.0034, KQs:0.0002, AKo:0.0001, A2s:0.1780, A3s:0.0540, A4s:0.0768, A5s:0.0511, A6s:0.2099, A7s:0.0662, A8s:0.1305, A9s:0.1665, ATs:0.0653, AJs:0.0063, AQs:0.2840, AKs:0.0482, AA:0.6199"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0048, A4o:0.0035, A5o:0.0028, A6o:0.0019, 88:0.0001, A9o:0.0008, ATo:0.0030, QQ:0.0291, AQo:0.0915, K6s:0.0011, K9s:0.0004, KK:0.0001, AKo:0.0017, A2s:0.0040, A3s:0.0047, A4s:0.1574, A5s:0.1195, A6s:0.0185, A7s:0.0201, A8s:0.1190, A9s:0.0096, ATs:0.0721, AJs:0.0312, AQs:0.0853, AKs:0.0040, AA:0.3801"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0007, 88:0.0194, 99:0.0001, TT:0.0011, JJ:0.0006, QTs:0.0001, QQ:0.0005, AQo:0.0002, K9s:0.0018, KQs:0.0022, KK:0.9998, AKo:0.9982, A3s:0.1284, A4s:0.0044, A5s:0.1387, A6s:0.0313, A7s:0.1111, A8s:0.0152, A9s:0.2781, ATs:0.0156, AJs:0.0058, AQs:0.0007, AKs:0.9477"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0069, 66:0.0051, 88:0.0117, 99:0.0014, TT:0.0006, KQo:0.0012, AQo:0.0011, KJs:0.0335, KQs:0.0009, A8s:0.0005, A9s:0.0001, ATs:0.0015, AJs:0.1227, AQs:0.0009, AA:0.0482"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1302, 66:0.2710, 77:0.2660, 88:0.4016, 99:0.3291, TT:0.9980, JTs:0.0001, JJ, AJo:0.0001, QJs:0.4582, QQ, AQo:0.5868, KTs:0.0005, KJs:0.3355, KQs:0.9991, KK, AKo, A2s:0.0001, A3s:0.0080, A4s:0.0001, A5s:0.2932, A6s:0.0005, A8s:0.0001, A9s:0.0001, ATs:0.0274, AJs:0.8752, AQs:0.9991, AKs, AA:0.9518"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@35.46",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ, QQ, AQo:0.0006, KK, AKo, AQs:0.0008, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0001, Q8s:0.0001, Q9s:0.0001, QQ:0.0022, KTs:0.0001, KK:0.0009, A5s:0.0005, A9s:0.0025, AA:0.2023"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, TT:0.0003, JJ:0.0001, Q9s:0.0001, QQ:0.2589, AQo:0.0325, K8s:0.0001, KTs:0.0001, KK:0.4476, AKo:0.4794, A7s:0.0001, A8s:0.0256, A9s:0.0002, ATs:0.0645, AJs:0.0022, AQs:0.4692, AKs:0.7368, AA:0.7977"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.1662, K3o:0.0001, A3o:0.1334, A4o:0.2346, A5o:0.1741, A6o:0.0343, A7o:0.0970, A8o:0.0414, A9o:0.0700, TT:0.0002, ATo:0.0468, JJ:0.4697, KJo:0.0001, Q2s:0.0048, Q4s:0.0116, Q5s:0.0010, Q6s:0.0019, Q8s:0.0021, Q9s:0.0002, QQ:0.3448, AQo:0.0008, K3s:0.0454, K4s:0.0073, K5s:0.0024, K6s:0.0654, K7s:0.0007, K8s:0.0007, KK:0.4738, AKo:0.5098, A2s:0.2382, A3s:0.0320, A4s:0.0001, A5s:0.0004, A6s:0.0284, A7s:0.0005, A8s:0.0049, A9s:0.0001, AQs:0.0006, AKs:0.7570, AA:0.2645"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "A2o:0.2666, K3o:0.0004, A3o:0.1244, A4o:0.1684, A5o:0.0350, A6o:0.0087, A7o:0.1127, A8o:0.0047, A9o:0.0066, ATo:0.1051, JJ:0.0278, Q2s:0.0001, QQ:0.0412, KQo:0.0001, K2s:0.0004, K3s:0.0041, K4s:0.0013, K7s:0.0001, KK:0.4092, AKo:0.4660, A2s:0.2551, A3s:0.0768, A4s:0.0001, A5s:0.0009, A6s:0.0322, A7s:0.0001, A8s:0.0009, AQs:0.0002, AKs:0.2421, AA:0.7355"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, JJ:0.0001, QTs:0.0002, QJs:0.0001, QQ:0.0001, KQs:0.0002, KK:0.0268, AKo:0.0010, A2s:0.0001, A3s:0.0001, A6s:0.0001, A9s:0.0008, AJs:0.0001, AKs:0.0833, AA:0.0596"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A9o:0.0002, TT:0.0001, JJ:0.0002, QJo:0.0001, AJo:0.0001, Q9s:0.0001, QTs:0.0001, QQ:0.0232, AQo:0.0001, K7s:0.0002, K8s:0.0001, K9s:0.0001, KTs:0.0002, KJs:0.0001, KK:0.0290, AKo:0.4356, A2s:0.0008, A3s:0.0001, A4s:0.0005, A7s:0.0001, A8s:0.0002, A9s:0.0051, AJs:0.2447, AQs:0.0002, AKs:0.6956, AA:0.9404"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0567, A3o:0.0855, A4o:0.0737, A5o:0.0203, A6o:0.0089, A7o:0.0096, A8o:0.0705, A9o:0.0122, TT:0.0001, ATo:0.0313, JJ:0.2105, QJo:0.0002, KJo:0.0001, Q3s:0.0011, Q4s:0.0008, QQ:0.3377, AQo:0.0007, K2s:0.0011, K3s:0.0002, K4s:0.0001, K5s:0.0017, K6s:0.0002, KK:0.1054, AKo:0.3650, A2s:0.0445, A3s:0.0278, A5s:0.0003, A6s:0.0133, A7s:0.0002, A8s:0.0025, AQs:0.0007, AKs:0.0921, AA:0.5036"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "A2o:0.4280, A3o:0.3214, A4o:0.1000, A5o:0.0780, A6o:0.0097, A7o:0.0662, A8o:0.0255, A9o:0.0192, TT:0.0001, ATo:0.0301, JJ:0.0763, QJo:0.0001, KJo:0.0003, Q2s:0.0003, Q3s:0.0004, Q4s:0.0003, Q5s:0.0001, Q6s:0.0011, QQ:0.2060, K2s:0.0094, K3s:0.0398, K4s:0.0044, K5s:0.0011, K6s:0.0056, KK:0.6925, AKo:0.5566, A2s:0.2488, A3s:0.0600, A4s:0.0002, A5s:0.0010, A6s:0.0515, A7s:0.0005, A8s:0.0028, A9s:0.0001, AKs:0.9073, AA:0.4964"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0002, KK, AKs:0.4545, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0017, KK, AKo:0.4653, AKs:0.9899, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 62.25bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0016, 33:0.0042, A3o:0.0041, 43s:0.0010, 44:0.1006, A4o:0.0029, 53s:0.0017, 55:0.1403, A5o:0.0335, 66:0.0983, A6o:0.0029, 72s:0.0003, 75s:0.0010, 76s:0.1390, 77:0.2078, 84s:0.0184, 85s:0.2003, 86s:0.0015, 87s:0.0145, 88:0.6332, 98o:0.0001, A8o:0.7599, 96s:0.0042, 97s:0.0090, 98s:0.2937, 99:0.1749, A9o:0.0582, T3s:0.0002, T8s:0.1363, T9s:0.0039, TT:0.7760, ATo:0.0257, J7s:0.0031, J8s:0.0163, JTs:0.0352, JJ:0.7831, AJo:0.7997, Q3s:0.0004, Q5s:0.0011, Q8s:0.1270, Q9s:0.0375, QTs:0.0643, QJs:0.0389, QQ:0.3223, KQo:0.0006, AQo:0.3491, K3s:0.0051, K4s:0.0341, K6s:0.0044, K8s:0.1284, K9s:0.0047, KTs:0.0013, KJs:0.1417, KQs:0.3463, KK:0.7796, AKo:0.4959, A2s:0.1333, A3s:0.5569, A4s:0.1224, A5s:0.1581, A6s:0.1190, A7s:0.0361, A8s:0.4057, A9s:0.3678, ATs:0.4278, AJs:0.0385, AQs:0.0289, AKs:0.8765, AA:0.9957"
      },
      {
        "action": "3bet 62.25bb",
        "min": 0.0001,
        "range": "33:0.0072, A3o:0.0041, 43s:0.0022, 44:0.0054, 52s:0.0001, 55:0.0002, 63s:0.0046, 64s:0.0003, 66:0.1746, 72s:0.0001, 75s:0.0010, 77:0.0896, 84s:0.0017, 86s:0.0011, 87s:0.0502, 88:0.3652, A8o:0.0153, 92s:0.0002, 93s:0.0124, 95s:0.0017, 96s:0.0077, 98s:0.5779, 99:0.8240, A9o:0.0093, T8s:0.0009, T9s:0.0002, TT:0.2200, ATo:0.0853, J4s:0.0001, J6s:0.0002, J7s:0.0001, J9s:0.0397, JTs:0.0134, JJ:0.2161, AJo:0.1977, Q3s:0.0007, Q4s:0.0001, Q8s:0.0004, Q9s:0.0017, QTs:0.3520, QJs:0.0094, QQ:0.6777, KQo:0.0084, AQo:0.6505, K2s:0.0065, K3s:0.0023, K4s:0.0345, K5s:0.0047, K6s:0.0001, K8s:0.1611, K9s:0.0391, KTs:0.0003, KJs:0.2979, KQs:0.4209, KK:0.2204, AKo:0.5040, A2s:0.0402, A3s:0.2596, A4s:0.7765, A5s:0.7946, A6s:0.7162, A7s:0.4514, A8s:0.2112, A9s:0.5956, ATs:0.4778, AJs:0.9613, AQs:0.9666, AKs:0.1235, AA:0.0043"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 35.46bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9192, 33:0.9814, 43s:0.2837, 44:0.9526, J4o:0.0001, 52s:0.0001, 53s:0.1847, 54s:0.3951, 55:0.9648, 62s:0.0821, 63s:0.0028, 65s:0.0544, 66:0.8855, 72s:0.0007, 73s:0.0002, 74s:0.0045, 75s:0.0007, 76s:0.1507, 77:0.9621, K7o:0.0001, 83s:0.0285, 85s:0.8948, 86s:0.5575, 87s:0.2625, 88:0.3851, A8o:0.0005, 92s:0.0980, 94s:0.0006, 96s:0.2037, 97s:0.0585, 98s:0.2430, 99:0.0064, T9o:0.0031, K9o:0.0007, T2s:0.0007, T4s:0.0002, T5s:0.1071, T6s:0.0003, T7s:0.2377, T8s:0.0015, T9s:0.0287, TT:0.0494, JTo:0.0001, ATo:0.0032, J2s:0.0004, J5s:0.0010, J6s:0.0044, J8s:0.0045, J9s:0.1544, JTs:0.0001, JJ:0.1293, KJo:0.0082, AJo:0.0002, Q4s:0.0018, Q7s:0.1133, Q9s:0.0027, QTs:0.2254, QJs:0.2541, QQ:0.0625, KQo:0.7549, AQo:0.0434, K3s:0.0136, K4s:0.0007, K5s:0.0082, K6s:0.0056, K7s:0.1352, K8s:0.5415, K9s:0.0040, KTs:0.3633, KJs:0.0001, KQs:0.2147, KK:0.0191, AKo:0.0008, A2s:0.0106, A3s:0.0445, A4s:0.0074, A5s:0.0973, A6s:0.0112, A7s:0.0228, A8s:0.0463, A9s:0.0024, ATs:0.0772, AJs:0.1454, AQs:0.0431, AKs:0.2637, AA:0.0436"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0026, 33:0.0001, 43s:0.0182, 44:0.0046, A4o:0.2500, 53s:0.0619, 54s:0.0156, A5o:0.0302, 63s:0.0026, 65s:0.0528, 66:0.0001, A6o:0.0237, 73s:0.0431, 76s:0.0081, 77:0.0044, A7o:0.1365, 83s:0.0903, 85s:0.0002, 87s:0.1888, 88:0.3229, A8o:0.0970, 94s:0.0023, 97s:0.0550, 98s:0.0026, 99:0.6811, A9o:0.0250, T6s:0.0046, T9s:0.2279, TT:0.2941, ATo:0.0099, J5s:0.0001, J8s:0.0957, JTs:0.0644, JJ:0.0398, KJo:0.0005, AJo:0.9511, Q4s:0.0008, Q6s:0.0915, Q9s:0.0551, QTs:0.1242, QJs:0.0070, QQ:0.6449, AQo:0.3796, K3s:0.0001, K4s:0.0001, K6s:0.0002, K8s:0.2033, K9s:0.7633, KTs:0.0016, KJs:0.0001, KQs:0.2440, KK:0.9324, AKo:0.5925, A2s:0.4486, A3s:0.1234, A4s:0.1308, A5s:0.1798, A6s:0.5300, A7s:0.2002, A8s:0.3048, A9s:0.5114, ATs:0.1688, AJs:0.1598, AQs:0.1476, AKs:0.5940, AA:0.9561"
      },
      {
        "action": "3bet 35.46bb",
        "min": 0.0001,
        "range": "22:0.0017, 32s:0.0001, A3o:0.0046, 43s:0.0304, 53s:0.0001, A5o:0.0094, 63s:0.0008, 66:0.0064, 73s:0.0060, 75s:0.0004, 76s:0.0162, 77:0.0018, 85s:0.0001, 86s:0.0167, 87s:0.0662, 88:0.2673, 94s:0.0019, 95s:0.0194, 96s:0.0004, 97s:0.0302, 98s:0.0007, 99:0.3114, T2s:0.0012, T4s:0.0004, T7s:0.0015, T8s:0.0050, T9s:0.0836, TT:0.6563, ATo:0.0088, J5s:0.0001, J9s:0.1778, JJ:0.8241, AJo:0.0162, Q4s:0.0001, Q5s:0.0016, Q7s:0.0798, QTs:0.5096, QQ:0.2926, AQo:0.5769, K3s:0.0029, K6s:0.0029, K7s:0.0013, K8s:0.0033, K9s:0.0039, KTs:0.0023, KQs:0.4948, KK:0.0485, AKo:0.4067, A2s:0.3346, A3s:0.4907, A4s:0.6483, A5s:0.1993, A6s:0.4505, A7s:0.7348, A8s:0.3559, A9s:0.3882, ATs:0.6115, AJs:0.6594, AQs:0.8093, AKs:0.1422, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 99:0.0001, TT:0.0004, J9s:0.0001, JJ:0.0310, KJo:0.0001, AJo:0.0003, Q9s:0.0004, QJs:0.0005, QQ:0.1177, KQo:0.0001, K6s:0.0001, K7s:0.0001, K9s:0.0001, KQs:0.0001, KK:0.0001, AKo:0.0217, A2s:0.0001, A4s:0.0001, A5s:0.0007, A6s:0.0011, A7s:0.0037, ATs:0.0002, AJs:0.0221, AQs:0.1687, AKs:0.0010, AA:0.1983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.2879, A5o:0.0001, 66:0.0001, 77:0.0001, 88:0.0030, 98s:0.0082, 99:0.0433, A9o:0.0012, T8s:0.0038, TT:0.1035, ATo:0.0009, J9s:0.0029, JJ:0.1271, AJo:0.0009, Q9s:0.0027, QTs:0.0100, QJs:0.0007, QQ:0.8773, KQo:0.0017, AQo:0.0003, K5s:0.0002, K6s:0.0109, K7s:0.0003, K8s:0.2384, K9s:0.0012, KTs:0.0765, KJs:0.0020, KQs:0.4455, KK:0.9998, AKo:0.9659, A3s:0.0002, A4s:0.0003, A5s:0.0017, A6s:0.0525, A7s:0.0385, A8s:0.1969, A9s:0.0007, ATs:0.0374, AJs:0.0481, AQs:0.6619, AKs:0.9944, AA:0.8017"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0008, 88:0.0593, 99:0.0004, KQs:0.0001, AJs:0.0159, AA:0.0039"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0073, 88:0.0102, 99:0.0009, AJo:0.0008, KJs:0.0001, KK:0.0001, ATs:0.0002, AJs:0.3202, AQs:0.0001, AA:0.1523"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@35.46",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0058, 88:0.0003, 99:0.0006, T9s:0.0004, TT:0.1039, ATo:0.0002, J9s:0.0005, JTs:0.0002, JJ:0.4925, QJo:0.0001, KJo:0.0005, Q8s:0.0002, Q9s:0.0006, QTs:0.0001, QQ:0.9978, KQo:0.0013, AQo:0.0024, K7s:0.0003, K8s:0.0001, K9s:0.0002, KTs:0.0020, KJs:0.0013, KQs:0.0008, KK, AKo:0.0013, A2s:0.0002, A3s:0.0004, A4s:0.0003, A5s:0.0005, A6s:0.0006, A7s:0.0002, A8s:0.0007, A9s:0.0004, ATs:0.0021, AJs:0.0002, AQs:0.0002, AKs:0.0337, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@35.46",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0034, 88:0.0460, 99:0.0013, AJo:0.0006, KQs:0.0001, KK:0.0001, ATs:0.0002, AJs:0.2388, AQs:0.0001, AA:0.1562"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 77:0.0002, 88:0.0011, 99:0.0005, TT:0.0350, ATo:0.0003, JTs:0.0001, JJ:0.2710, KJo:0.0001, Q8s:0.0001, QJs:0.0002, QQ:0.0083, K7s:0.0002, K8s:0.0010, KQs:0.0009, KK:0.0049, AKo:0.0002, A2s:0.0041, A4s:0.0002, A5s:0.0040, A6s:0.0001, A7s:0.0002, ATs:0.0013, AJs:0.0005, AQs:0.3809, AKs:0.1593, AA:0.8432"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0012, 77:0.0067, 88:0.0053, 99:0.0248, A9o:0.0001, T8s:0.0040, TT:0.0253, ATo:0.0001, J9s:0.0002, JTs:0.0004, JJ:0.2849, AJo:0.0003, Q8s:0.0001, QJs:0.0375, QQ:0.9669, KQo:0.0001, AQo:0.0002, K6s:0.0073, K7s:0.1802, K9s:0.0001, KTs:0.0050, KJs:0.0236, KQs:0.0597, KK:0.9951, AKo:0.9191, A2s:0.0004, A3s:0.0001, A4s:0.0065, A5s:0.0119, A6s:0.0022, A7s:0.0007, A8s:0.0005, A9s:0.0025, ATs:0.0001, AJs:0.0044, AQs:0.3579, AKs:0.8406, AA:0.1568"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 88:0.0116, AJo:0.0002, ATs:0.0013, AJs:0.0280, AA:0.0007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0079, 88:0.0363, 99:0.0013, AJo:0.0002, KK:0.0001, ATs:0.0002, AJs:0.3062, AQs:0.0001, AA:0.1555"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@62.25",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0002, 77:0.0001, 88:0.0005, 98s:0.0001, 99:0.0007, A9o:0.0001, T8s:0.0001, TT:0.0048, ATo:0.0001, JTs:0.0010, JJ:0.5593, QJo:0.0002, KJo:0.0001, Q8s:0.0001, QTs:0.0003, QJs:0.0001, QQ:0.9986, AQo:0.0029, K6s:0.0001, K9s:0.0006, KTs:0.0003, KJs:0.0001, KQs:0.0005, KK, AKo:0.0013, A2s:0.0001, A3s:0.0001, A6s:0.0002, A7s:0.0001, A9s:0.0004, ATs:0.0001, AJs:0.0018, AQs:0.0067, AKs:0.0919, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0117, 88:0.0797, 99:0.0013, AJo:0.0005, KK:0.0001, ATs:0.0023, AJs:0.3587, AQs:0.0001, AA:0.1562"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "33:0.0013, 44:0.0003, 76s:0.0001, 77:0.0002, 88:0.0005, 99:0.6999, TT:0.9309, JJ:0.7619, QQ:0.5017, AQo:0.7357, K9s:0.0001, KJs:0.1656, KQs:0.6022, KK:0.7483, AKo:0.7109, A3s:0.0001, ATs:0.0077, AJs:0.0006, AQs:0.2547, AKs:0.7505, AA:0.8408"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "77:0.0005, 88:0.0001, 99:0.2251, TT:0.0689, JJ:0.2381, QQ:0.4983, AQo:0.1840, KJs:0.0001, KQs:0.0064, KK:0.2517, AKo:0.2891, A3s:0.0015, A8s:0.0007, ATs:0.0002, AJs:0.0122, AQs:0.7417, AKs:0.2494, AA:0.1592"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 35.46bb"
    ],
    "bands": [
      {
        "action": "4bet 35.46bb",
        "min": 0.0001,
        "range": "44:0.0006, 66:0.0032, 88:0.0013, 97s:0.0001, 99:0.8836, TT:0.9991, JJ, QQ, AQo:0.6523, K5s:0.0001, KTs:0.0016, KJs:0.0271, KQs:0.2286, KK, AKo, A2s:0.0018, A5s:0.0180, A6s:0.0001, A8s:0.0003, A9s:0.0026, ATs:0.1922, AJs:0.2307, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0048, 88:0.0032, AJo:0.0001, QJs:0.0003, KTs:0.0002, KJs:0.0001, KQs:0.0744, A5s:0.0002, ATs:0.0291, AJs:0.0005, AA:0.0145"
      },
      {
        "action": "4bet 17.61bb",
        "min": 0.0001,
        "range": "55:0.1211, 66:0.2170, 77:0.1454, 88:0.9102, 99, TT, JJ, AJo:0.1730, QQ, KQo:0.0002, AQo, KTs:0.0364, KJs:0.0023, KQs:0.2840, KK, AKo, ATs:0.1655, AJs:0.9995, AQs, AKs, AA:0.9855"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|HJ:4BET@17.61",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0055, 88:0.7709, 99:0.6733, TT:0.7678, JJ:0.9910, AJo:0.3090, QTs:0.0001, QJs:0.0010, QQ, KQo:0.0002, AQo:0.7286, KTs:0.0236, KJs:0.3703, KQs:0.1910, KK:0.9996, AKo:0.7424, ATs:0.5436, AJs:0.3158, AQs:0.9416, AKs:0.7918, AA:0.8260"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@35.46",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0039, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@35.46",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0011, 88:0.4530, 99:0.6687, TT:0.7678, JJ:0.9910, AJo:0.0001, QQ, KQo:0.0001, AQo:0.7062, KJs:0.0004, KQs:0.0005, KK:0.9996, AKo:0.7424, A8s:0.0001, ATs:0.0094, AJs:0.1358, AQs:0.9416, AKs:0.7918, AA:0.8260"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0198, KK:0.0117, AKs:0.0174"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0387, KJs:0.0001, KK:0.9883, AKo:0.0828, A5s:0.0002, AKs:0.7699, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0039, 88:0.3105, 99:0.6699, TT:0.7665, JJ:0.9910, AJo:0.0003, QQ, AQo:0.6979, KJs:0.0113, KK:0.9996, AKo:0.7424, A8s:0.0007, A9s:0.0005, ATs:0.0009, AJs:0.0653, AQs:0.9416, AKs:0.7918, AA:0.8260"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@62.25",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0001, 99:0.0001, T9s:0.0001, TT:0.0001, J9s:0.0001, JJ:0.0003, QTs:0.0001, QQ:0.1525, AQo:0.0002, K8s:0.0001, KTs:0.0002, KJs:0.0001, KQs:0.0001, KK, AKo:0.0003, A4s:0.0003, A5s:0.0001, A7s:0.0001, A8s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0029, 88:0.5237, 99:0.5306, TT:0.7678, ATo:0.0001, JJ:0.9910, AJo:0.0080, QJs:0.0002, QQ, KQo:0.0016, AQo:0.7057, KTs:0.0003, KJs:0.0013, KQs:0.0494, KK:0.9996, AKo:0.7424, A8s:0.0034, A9s:0.0002, ATs:0.0053, AJs:0.0665, AQs:0.9413, AKs:0.7918, AA:0.8260"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0067, 99:0.8204, TT, JJ, QQ, AQo:0.2559, KK, AKo, A6s:0.0001, AQs:0.9996, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 35.46bb"
    ],
    "bands": [
      {
        "action": "4bet 35.46bb",
        "min": 0.0001,
        "range": "88:0.0011, 99:0.5623, TT, JTs:0.0001, JJ, QQ, AQo:0.4476, K8s:0.0001, KJs:0.0001, KQs:0.0001, KK, AKo, A7s:0.0001, A9s:0.0006, ATs:0.0001, AJs:0.0001, AQs:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0016, 77:0.0547, 88:0.9997, 99, TT, JJ, AJo:0.2706, QQ, AQo, K9s:0.0001, KJs:0.0061, KQs:0.3429, KK, AKo, ATs:0.0089, AJs:0.9998, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@17.61|BB:4BET@35.46",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 99:0.0003, TT:0.0002, JTs:0.0001, JJ:0.0013, AJo:0.0001, QQ:0.9972, AQo:0.0001, KQs:0.0006, KK, AKo:0.0001, A2s:0.0001, A3s:0.0001, A4s:0.0001, A6s:0.0001, A7s:0.0001, ATs:0.0004, AJs:0.0001, AQs:0.0019, AKs:0.0031, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@17.61|SB:4BET@62.25",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0004, 99:0.0003, J9s:0.0001, JJ:0.0001, QTs:0.0001, QQ:0.1090, KQo:0.0001, K7s:0.0001, K8s:0.0001, KTs:0.0001, KJs:0.0001, KK, AKo:0.0001, A5s:0.0001, A6s:0.0001, A9s:0.0001, AQs:0.0004, AKs:0.0027, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "65s:0.0002, 66:0.0006, 88:0.0005, 99:0.0182, TT:0.5303, JTo:0.0251, JTs:0.1045, JJ:0.7944, QJo:0.0080, KJo:0.0042, AJo:0.0023, QTs:0.1256, QJs:0.2023, QQ:0.0644, KQo:0.0105, AQo:0.7492, K3s:0.0001, KTs:0.0279, KJs:0.4957, KQs:0.1816, KK:0.8081, AKo:0.4389, A4s:0.0003, A8s:0.0001, ATs:0.0171, AJs:0.2397, AQs:0.8635, AKs:0.1413, AA:0.9216"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0001, 55:0.0001, 88:0.0004, 99:0.0003, TT:0.4684, JJ:0.2056, QJs:0.3255, QQ:0.9356, KQo:0.0272, AQo:0.2481, K3s:0.0001, KTs:0.0014, KJs:0.4612, KQs:0.8086, KK:0.1919, AKo:0.5611, A2s:0.0010, A3s:0.0005, A4s:0.0005, ATs:0.0107, AJs:0.0661, AQs:0.1364, AKs:0.8587, AA:0.0784"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 62.25bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0002, Q2o:0.4113, K2o:0.0946, A2o:0.0174, 32s:0.0029, 33:0.0011, T3o:0.0001, Q3o:0.0443, K3o:0.0516, A3o:0.1357, 42s:0.0007, 43s:0.0017, 44:0.0046, T4o:0.0002, Q4o:0.0585, K4o:0.5075, A4o:0.5518, 52s:0.0089, 55:0.0685, J5o:0.0003, Q5o:0.0746, K5o:0.3393, A5o:0.4079, 62s:0.0085, 65s:0.0313, 66:0.0002, 76o:0.0002, Q6o:0.0111, K6o:0.0455, A6o:0.0026, 73s:0.0004, 74s:0.0014, 75s:0.0101, 76s:0.0232, 77:0.0020, Q7o:0.3724, K7o:0.0344, A7o:0.0072, 82s:0.0017, 87s:0.0554, 88:0.0029, 98o:0.0003, Q8o:0.0008, K8o:0.1740, A8o:0.1469, 93s:0.0105, 95s:0.0006, 98s:0.0002, 99:0.1072, Q9o:0.0004, K9o:0.0084, A9o:0.0011, T3s:0.0030, T5s:0.0024, T6s:0.0014, T7s:0.0034, T8s:0.0037, TT:0.5771, JTo:0.0003, QTo:0.0242, KTo:0.0190, ATo:0.0048, J4s:0.0003, J5s:0.0001, J6s:0.0036, J8s:0.0001, J9s:0.0006, JTs:0.0005, JJ:0.9724, QJo:0.5235, KJo:0.4861, AJo:0.3402, Q2s:0.1110, Q3s:0.0877, Q4s:0.3928, Q5s:0.0843, Q6s:0.4955, Q8s:0.7261, Q9s:0.0610, QTs:0.2305, QJs:0.2712, QQ:0.9998, KQo:0.0019, AQo:0.3132, K2s:0.4196, K3s:0.6368, K4s:0.0161, K5s:0.4036, K6s:0.3535, K7s:0.3122, K8s:0.0546, K9s:0.1607, KTs:0.0012, KQs:0.0055, KK:0.9977, AKo:0.9851, A2s:0.0482, A3s:0.0135, A4s:0.0802, A5s:0.1080, A6s:0.3565, A7s:0.1360, A8s:0.1104, A9s:0.0515, ATs:0.2266, AJs:0.0088, AQs:0.7624, AKs:0.7703, AA"
      },
      {
        "action": "3bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.2479, K2o:0.0005, A2o:0.0014, 33:0.1988, Q3o:0.0003, A3o:0.0032, 42s:0.0001, 43s:0.0018, 44:0.5703, K4o:0.0004, A4o:0.0001, 52s:0.0008, 54s:0.0655, 55:0.5672, 65o:0.0006, A5o:0.0001, 62s:0.0024, 64s:0.0001, 65s:0.1058, 66:0.2383, A6o:0.0011, 73s:0.0004, 74s:0.0033, 75s:0.0097, 76s:0.0075, 77:0.5113, 82s:0.0022, 85s:0.0030, 86s:0.0014, 88:0.0799, A8o:0.0057, 92s:0.0028, 96s:0.0020, 97s:0.0001, 99:0.1480, A9o:0.0005, T4s:0.0009, T5s:0.0012, T7s:0.0032, T8s:0.0002, TT:0.3451, JTo:0.0003, QTo:0.0002, KTo:0.1000, ATo:0.0014, J3s:0.0009, J4s:0.0014, J5s:0.0012, J6s:0.0004, J9s:0.0002, JJ:0.0276, QJo:0.0002, KJo:0.0080, AJo:0.0004, Q2s:0.0009, Q3s:0.0061, Q4s:0.0067, Q5s:0.0323, Q6s:0.0157, Q7s:0.0005, Q8s:0.0589, Q9s:0.0238, QTs:0.3071, QJs:0.6206, QQ:0.0002, KQo:0.9968, AQo:0.6865, K2s:0.2997, K3s:0.1525, K4s:0.2183, K5s:0.2604, K6s:0.4695, K7s:0.1837, K8s:0.6013, K9s:0.6371, KTs:0.7926, KJs:0.9969, KQs:0.9912, KK:0.0023, AKo:0.0149, A2s:0.8938, A3s:0.9301, A4s:0.8959, A5s:0.8580, A6s:0.4693, A7s:0.3642, A8s:0.8491, A9s:0.8343, ATs:0.5388, AJs:0.5521, AQs:0.2375, AKs:0.2297"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9973, 33:0.8954, 43s:0.1766, 44:0.9940, 54o:0.0005, 53s:0.0355, 54s:0.0079, 55:0.8553, 65o:0.0015, 63s:0.1562, 64s:0.7797, 65s:0.7784, 66:0.7970, 72s:0.0002, 73s:0.0006, 76s:0.0038, 77:0.9356, 82s:0.0057, 85s:0.0132, 86s:0.4502, 87s:0.1033, 88:0.9804, 92s:0.0059, 95s:0.0315, 97s:0.0001, 98s:0.3905, 99:0.9889, A9o:0.0001, T5s:0.0003, T7s:0.0253, T8s:0.2168, T9s:0.9203, TT:0.1746, KTo:0.0015, J3s:0.0004, J7s:0.0011, J8s:0.0008, J9s:0.4127, JTs:0.7314, JJ:0.0392, QJo:0.0005, KJo:0.0001, AJo:0.1535, Q5s:0.0869, Q6s:0.0014, Q7s:0.0011, Q8s:0.0237, QTs:0.0089, QJs:0.1281, QQ:0.0001, KQo:0.0139, AQo:0.0506, K2s:0.1892, K3s:0.0209, K4s:0.0124, K5s:0.2073, K6s:0.0562, K7s:0.0767, K8s:0.1514, K9s:0.2002, KTs:0.3896, KJs:0.4009, KQs:0.0015, KK:0.0009, AKo:0.0004, A2s:0.4757, A3s:0.0354, A4s:0.4881, A5s:0.0720, A6s:0.0036, A7s:0.2166, A8s:0.2495, A9s:0.3146, ATs:0.7019, AJs:0.8715, AQs:0.0048, AKs:0.0014, AA:0.0001"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0061, A2o:0.0589, 32s:0.0298, 53o:0.0014, Q3o:0.0023, K3o:0.0009, A3o:0.4680, 42s:0.0009, 43s:0.0003, Q4o:0.0192, K4o:0.7805, A4o:0.0587, 53s:0.0008, 54s:0.0126, 55:0.0003, J5o:0.0021, Q5o:0.0161, K5o:0.6610, A5o:0.3460, 62s:0.0073, 63s:0.0019, 64s:0.0175, 65s:0.0009, Q6o:0.0002, K6o:0.1425, A6o:0.2033, 72s:0.0211, 74s:0.0005, 77:0.0025, J7o:0.0006, Q7o:0.0187, K7o:0.0038, A7o:0.0037, 83s:0.0190, 86s:0.0238, 87s:0.0150, 88:0.0064, T8o:0.0006, Q8o:0.0013, K8o:0.0011, A8o:0.0233, 92s:0.0001, 97s:0.0139, 98s:0.0237, 99:0.0062, T9o:0.0003, Q9o:0.0056, K9o:0.1168, A9o:0.0157, T4s:0.0210, T8s:0.0391, TT:0.8051, QTo:0.0019, KTo:0.0011, ATo:0.0092, J6s:0.0001, J8s:0.0035, J9s:0.0239, JTs:0.0017, JJ:0.9607, QJo:0.0446, KJo:0.4383, AJo:0.2132, Q2s:0.0731, Q3s:0.0252, Q4s:0.0760, Q5s:0.2493, Q6s:0.4339, Q7s:0.1219, Q8s:0.2280, Q9s:0.0293, QTs:0.0592, QJs:0.4720, QQ:0.9832, KQo:0.5372, AQo:0.8869, K2s:0.2655, K3s:0.5679, K5s:0.3120, K6s:0.3958, K7s:0.3539, K8s:0.2807, K9s:0.0905, KTs:0.0005, KJs:0.0009, KQs:0.0002, KK:0.9985, AKo:0.8373, A2s:0.0919, A3s:0.1679, A4s:0.0555, A5s:0.1916, A6s:0.7521, A7s:0.0274, A8s:0.0504, A9s:0.0002, ATs:0.0219, AJs:0.0026, AQs:0.9254, AKs:0.9811, AA"
      },
      {
        "action": "3bet 53.32bb",
        "min": 0.0001,
        "range": "K2o:0.0006, 32s:0.0017, 33:0.0927, 42s:0.0015, 43s:0.0574, 44:0.0001, A4o:0.0219, 53s:0.0114, 54s:0.0005, 55:0.0752, A5o:0.0087, 63s:0.0005, 64s:0.0013, 65s:0.0001, 66:0.1822, K6o:0.0003, A6o:0.0004, 74s:0.0102, 77:0.0201, 87s:0.0083, 88:0.0029, A8o:0.0002, 98s:0.0045, 99:0.0005, K9o:0.0014, A9o:0.0001, T9s:0.0001, TT:0.0001, QTo:0.0050, J2s:0.0001, JTs:0.0001, JJ:0.0001, QJo:0.0062, AJo:0.0034, Q2s:0.0623, Q3s:0.0049, Q4s:0.0192, Q5s:0.0226, Q6s:0.0017, Q7s:0.0111, Q8s:0.0800, Q9s:0.0217, QTs:0.1728, QJs:0.0425, QQ:0.0167, KQo:0.4332, AQo:0.0615, K2s:0.0053, K3s:0.0670, K4s:0.2197, K5s:0.1101, K6s:0.1961, K7s:0.1263, K8s:0.1964, K9s:0.4034, KTs:0.4826, KJs:0.5969, KQs:0.9979, KK:0.0005, AKo:0.1622, A2s:0.0001, A3s:0.6354, A4s:0.1652, A5s:0.7029, A6s:0.1723, A7s:0.1602, A8s:0.0161, A9s:0.0798, ATs:0.0506, AJs:0.1109, AQs:0.0697, AKs:0.0175"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0791, 66:0.0832, 99:0.0094, TT:0.0651, JJ:0.0011, Q9s:0.0001, QQ:0.0143, AQo:0.1506, KTs:0.0002, KJs:0.0658, KQs:0.0751, A4s:0.0043, A5s:0.1749, A6s:0.0108, A7s:0.0003, A8s:0.2447, A9s:0.0015, AJs:0.0033, AQs:0.2041, AA:0.5810"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0502, 66:0.0626, 77:0.0033, 88:0.0171, 99:0.3491, T9s:0.0010, TT:0.7671, JTs:0.0003, JJ:0.9988, AJo:0.0081, Q9s:0.0011, QTs:0.0026, QJs:0.0075, QQ:0.9857, AQo:0.3144, K6s:0.0341, K7s:0.0004, K8s:0.0136, K9s:0.0001, KTs:0.8969, KJs:0.3912, KQs:0.6080, KK, AKo:0.9998, A2s:0.1379, A3s:0.0121, A4s:0.8585, A5s:0.0057, A6s:0.2695, A7s:0.0517, A8s:0.0205, A9s:0.0125, ATs:0.6175, AJs:0.2885, AQs:0.7863, AKs, AA:0.4190"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0039, 77:0.0020, 88:0.0190, TT:0.0001, JJ:0.2939, QQ:0.1217, AQo:0.0124, KQs:0.0467, KK:0.0011, A5s:0.0431, ATs:0.0003, AJs:0.0141, AQs:0.5240"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "88:0.0076, TT:0.0001, JJ:0.0032, AJo:0.0001, KQo:0.0001, AQo:0.0022, KTs:0.0201, KJs:0.0388, KQs:0.0042, KK:0.0759, A4s:0.0005, A5s:0.0265, A8s:0.0005, A9s:0.0070, ATs:0.0473, AJs:0.0876, AQs:0.0064, AA:0.0003"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "AQo:0.0060, KTs:0.0025, KJs:0.0017, KK:0.0635, A4s:0.0006, A5s:0.0113, A8s:0.0002, A9s:0.0032, AJs:0.0135, AQs:0.0524, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0023, AQo:0.0010, KQs:0.0032, KK:0.0011, A5s:0.0021, ATs:0.0006, AJs:0.0005, AQs:0.0580, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0001, 99:0.2591, TT:0.7049, JJ:0.8544, Q9s:0.0001, QQ:0.9978, AQo:0.0043, K8s:0.0001, KJs:0.0003, KQs:0.0005, KK:0.9998, AKo:0.9986, A4s:0.0004, ATs:0.0001, AJs:0.0001, AQs:0.7912, AKs:0.9802, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0014, QQ:0.1243, KK:0.1417, AJs:0.0001, AQs:0.0001, AKs:0.0001, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0030, TT:0.0199, JJ:0.0017, AQo:0.0090, K9s:0.0001, KTs:0.0069, KJs:0.0527, KQs:0.0035, KK:0.0004, A2s:0.0004, A5s:0.0032, A6s:0.0064, A7s:0.0001, A8s:0.0224, A9s:0.0021, ATs:0.0047, AJs:0.0674, AQs:0.2027, AKs:0.0007, AA:0.1771"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0376, 66:0.0013, 77:0.0012, 88:0.1026, 99:0.0927, T8s:0.0033, TT:0.9614, JTs:0.0435, JJ:0.9934, QJo:0.0001, KJo:0.0019, AJo:0.0006, Q8s:0.0003, QQ, KQo:0.0121, AQo:0.5735, K5s:0.0001, K6s:0.0057, K7s:0.0322, K9s:0.2199, KTs:0.1792, KJs:0.2652, KQs:0.7814, KK:0.9996, AKo, A2s:0.0082, A3s:0.0006, A4s:0.0803, A5s:0.4551, A6s:0.1507, A8s:0.1004, A9s:0.6929, ATs:0.1354, AJs:0.8868, AQs:0.7613, AKs:0.9986, AA:0.8229"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0163, 77:0.0001, 88:0.0612, TT:0.0001, JJ:0.1841, QQ:0.1132, AQo:0.0021, KQs:0.2294, A9s:0.0004, ATs:0.0001, AJs:0.0341, AQs:0.4770"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "AQo:0.0135, KK:0.0241, A4s:0.0005, A8s:0.0001, ATs:0.0053, AJs:0.0173, AQs:0.0227, AA:0.0004"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "TT:0.0143, JJ:0.0021, AJo:0.0001, QQ:0.0003, AQo:0.0009, KTs:0.0166, KJs:0.0032, KQs:0.0061, KK:0.0483, A4s:0.0009, A5s:0.0027, A8s:0.0005, A9s:0.0049, ATs:0.0519, AJs:0.0035"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0264, 99:0.0062, TT:0.0450, JJ:0.0025, QQ:0.0108, AQo:0.0012, KQs:0.0030, KK:0.0693, A5s:0.0001, ATs:0.0002, AQs:0.1403, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@62.25",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.2632, TT:0.8798, JJ:0.9840, QQ, AQo:0.0113, KK, AKo:0.9837, AJs:0.0006, AQs:0.4558, AKs:0.9985, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@62.25",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0049, QQ:0.1243, KK:0.1417, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0004, 66:0.0005, 77:0.0001, T9s:0.0010, TT:0.0092, JTs:0.0025, JJ:0.0043, KJo:0.0001, AJo:0.0001, Q8s:0.0001, QTs:0.0003, QJs:0.0001, QQ:0.0410, KQo:0.0008, AQo:0.0074, K8s:0.0002, K9s:0.0106, KTs:0.0063, KJs:0.0019, KQs:0.0043, KK:0.0056, AKo:0.0008, A3s:0.0016, A7s:0.0002, A9s:0.0001, ATs:0.0002, AQs:0.3727, AKs:0.0449, AA:0.1033"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0065, 66:0.0242, 77:0.0403, 88:0.0623, 98s:0.0014, 99:0.2654, TT:0.8763, JTs:0.0022, JJ:0.9933, AJo:0.0001, QTs:0.0002, QQ:0.9590, AQo:0.0001, K7s:0.0017, K9s:0.0005, KTs:0.0002, KJs:0.4329, KQs:0.0044, KK:0.9944, AKo:0.9991, A5s:0.0064, A8s:0.0002, A9s:0.0006, AJs:0.0001, AQs:0.4282, AKs:0.9549, AA:0.8967"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0022, 66:0.0516, 76s:0.0040, 77:0.0001, 88:0.1580, 99:0.0143, TT:0.1921, AQo:0.0758, KTs:0.0004, KJs:0.1055, KQs:0.0398, A4s:0.0020, ATs:0.0106, AJs:0.0746, AQs:0.3324"
      },
      {
        "action": "4bet 17.61bb",
        "min": 0.0001,
        "range": "66:0.0010, 88:0.0029, 99:0.0005, TT:0.5945, JJ:0.6484, QQ:0.1243, AQo:0.0503, KJs:0.0001, KK:0.1417, AJs:0.0002, AQs:0.6602, AKs:0.0001, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@17.61",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0072, 99:0.0061, TT:0.1056, JTs:0.0001, JJ:0.8597, Q9s:0.0001, QQ:0.9203, K7s:0.0002, K9s:0.0003, KTs:0.0001, KJs:0.0001, KQs:0.0001, KK:0.6438, AKo:0.9191, A5s:0.0001, A9s:0.0001, AJs:0.0004, AQs:0.0930, AKs:0.3344, AA:0.5798"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0002, 88:0.0002, 99:0.0081, TT:0.0893, JTs:0.0001, JJ:0.1341, QTs:0.0001, QJs:0.0001, QQ:0.0797, K9s:0.0003, KQs:0.0001, KK:0.3561, AKo:0.0804, A2s:0.0001, A5s:0.0003, A7s:0.0026, AJs:0.0002, AQs:0.0484, AKs:0.6624, AA:0.4202"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@17.61",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0408, 77:0.0017, 88:0.0575, 99:0.0517, TT:0.9634, JJ:0.6484, QQ:0.1243, AQo:0.0699, KQs:0.0004, KK:0.1417, ATs:0.0001, AJs:0.0012, AQs:0.9978, AKs:0.0001, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1128, 66:0.1186, 77:0.1007, 88:0.3455, 99:0.3811, TT:0.9681, JJ:0.9991, QQ, AQo:0.9998, KQs:0.0016, KK, AKo, A7s:0.0002, ATs:0.0001, AJs:0.7283, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "22:0.0013, K2o:0.2276, A2o:0.0046, 33:0.0009, K3o:0.0533, 42s:0.0007, 44:0.0005, K4o:0.0001, A4o:0.0001, 52s:0.0007, K5o:0.1075, A5o:0.0030, 65s:0.0002, 66:0.0770, K6o:0.0022, A6o:0.0065, 77:0.0666, K7o:0.0441, A7o:0.0195, 88:0.1957, K8o:0.3271, A8o:0.0609, 99:0.0930, K9o:0.0040, A9o:0.0001, T9s:0.0002, TT:0.2541, KTo:0.0480, ATo:0.0120, AJo:0.0025, QQ:0.0781, KQo:0.1201, AQo:0.0023, K2s:0.6597, K3s:0.1537, K5s:0.0306, K6s:0.0657, K7s:0.3467, K8s:0.5893, K9s:0.2897, KTs:0.3947, KJs:0.1102, KQs:0.0323, KK:0.8422, AKo:0.7087, A2s:0.0119, A3s:0.0098, A4s:0.0032, A5s:0.0921, A6s:0.0016, A7s:0.0223, A8s:0.0274, A9s:0.0123, ATs:0.8339, AJs:0.3374, AQs:0.0356, AKs:0.8694, AA"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "22:0.0006, 33:0.0275, 42s:0.0004, A4o:0.0004, 52s:0.0002, 54s:0.0070, A5o:0.0088, 65s:0.0104, 66:0.0013, A6o:0.0137, 75s:0.0089, 76s:0.0461, 77:0.0198, A7o:0.0206, 87s:0.0034, 88:0.0376, A8o:0.0042, 98s:0.0064, 99:0.0119, A9o:0.0017, T9s:0.0023, TT:0.0425, QJs:0.0002, QQ:0.7922, K2s:0.0096, K3s:0.0260, K4s:0.0269, K5s:0.0063, K6s:0.0688, K7s:0.0775, K8s:0.0184, K9s:0.0244, KTs:0.0501, KJs:0.0131, KQs:0.0613, KK:0.1578, AKo:0.2913, A2s:0.5654, A3s:0.2040, A4s:0.4437, A5s:0.2366, A6s:0.0980, A7s:0.4967, A8s:0.6277, A9s:0.0713, ATs:0.1080, AJs:0.2000, AQs:0.6724, AKs:0.1306"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A2o:0.0512, K3o:0.0036, A3o:0.3292, A4o:0.0086, 52s:0.0001, 54s:0.0001, 55:0.0636, K5o:0.0007, A5o:0.0008, 63s:0.0001, 65s:0.0002, 66:0.0643, K6o:0.0414, A6o:0.0027, 75s:0.0001, 77:0.0116, K7o:0.0709, A7o:0.0427, 88:0.0541, A8o:0.0028, 97s:0.0002, 98s:0.0008, 99:0.0604, K9o:0.0035, A9o:0.0053, TT:0.0004, KTo:0.0924, ATo:0.0036, J8s:0.0001, AJo:0.0003, Q3s:0.0004, QQ:0.0205, AQo:0.0052, K2s:0.0053, K3s:0.0034, K4s:0.0003, K5s:0.0076, K6s:0.0113, K7s:0.0152, K8s:0.0095, KQs:0.0003, KK:0.2836, AKo:0.1591, A2s:0.1267, A3s:0.1240, A4s:0.0003, A5s:0.3027, A6s:0.0615, A7s:0.1934, A8s:0.2562, A9s:0.3018, ATs:0.0974, AJs:0.0640, AQs:0.0060, AKs:0.0662, AA"
      },
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "A2o:0.0016, A3o:0.0003, A4o:0.0008, 52s:0.0001, 54s:0.0015, A5o:0.0021, 65s:0.0003, 75s:0.0010, 77:0.3782, A7o:0.0001, 85s:0.0001, 87s:0.0002, 88:0.1898, A8o:0.0014, 97s:0.0025, 98s:0.0023, TT:0.1794, ATo:0.0014, QQ:0.0022, AQo:0.0002, K2s:0.0018, K3s:0.0007, K4s:0.0003, K5s:0.0007, K6s:0.0019, K7s:0.0047, K8s:0.0037, K9s:0.0018, KJs:0.0026, KQs:0.0032, KK:0.7164, AKo:0.8402, A2s:0.2243, A3s:0.1219, A4s:0.1173, A5s:0.2796, A6s:0.1505, A7s:0.1672, A8s:0.0576, A9s:0.2229, ATs:0.2154, AJs:0.0216, AKs:0.9338"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0331, 77:0.0059, 88:0.0199, 99:0.0134, TT:0.0011, JJ:0.0530, QTs:0.0001, QQ:0.0013, AQo:0.0024, KQs:0.0033, A7s:0.0004, A9s:0.0007, ATs:0.0002, AJs:0.0014, AQs:0.4037, AA:0.0403"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0015, 66:0.1727, 77:0.0871, 88:0.2446, 99:0.4060, TT:0.2554, JJ:0.9256, Q9s:0.0001, QTs:0.0008, QJs:0.0002, QQ:0.9987, KQo:0.0281, AQo:0.0085, K6s:0.0001, K7s:0.0001, K8s:0.0029, K9s:0.0240, KTs:0.9689, KJs:0.4522, KQs:0.9955, KK, AKo, A2s:0.0808, A3s:0.1275, A4s:0.5410, A5s:0.9773, A6s:0.0952, A7s:0.5564, A8s:0.1249, A9s:0.3009, ATs:0.8618, AJs:0.5826, AQs:0.5962, AKs, AA:0.9597"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@35.46",
    "heroPos": "CO",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.3516, QQ:0.8756, KK:0.8583, AKo:0.3404, AKs:0.9841, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AQo:0.0003, KK:0.1171, AKo:0.0471, A8s:0.0014, A9s:0.0007, AJs:0.0029, AKs:0.0500, AA:0.0201"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0001, 88:0.0008, TT:0.0003, JTs:0.0001, JJ:0.0023, AJo:0.0488, QJs:0.0002, QQ:0.0058, AQo:0.1842, KTs:0.0003, KJs:0.0185, KK:0.8464, AKo:0.3397, A2s:0.0164, A5s:0.0668, A6s:0.0002, A7s:0.0001, A8s:0.0003, A9s:0.0170, ATs:0.4294, AJs:0.3604, AQs:0.0768, AKs:0.9307, AA:0.9798"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "ATo:0.0005, JJ:0.0065, AJo:0.0916, QQ:0.0334, AQo:0.0165, K8s:0.0002, KTs:0.0018, KK:0.0990, AKo:0.0099, A3s:0.0061, A4s:0.0493, A5s:0.0068, A7s:0.0055, A8s:0.0037, A9s:0.0252, ATs:0.0018, AJs:0.0001, AQs:0.0003, AKs:0.0160, AA:0.0864"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0048, A3o:0.0004, A4o:0.0420, A5o:0.0319, A7o:0.0001, A8o:0.0001, A9o:0.0001, ATo:0.0015, JJ:0.0015, AJo:0.0021, QQ:0.0306, KQo:0.0117, AQo:0.0260, K4s:0.0002, K8s:0.0020, KTs:0.0006, KJs:0.0411, KK:0.6757, AKo:0.3288, A2s:0.1320, A3s:0.5067, A4s:0.5839, A5s:0.2152, A6s:0.0633, A7s:0.0498, A8s:0.2727, A9s:0.0841, ATs:0.0127, AJs:0.0003, AQs:0.0001, AKs:0.9669, AA:0.9132"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, JJ:0.0008, QQ:0.0006, KK, AKo:0.0116, A9s:0.0016, ATs:0.0002, AKs:0.3066, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0008, QQ:0.0079, KK:0.8583, AKo:0.1087, AKs:0.3909, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.3584, AKo:0.0466, A5s:0.0001, AQs:0.0012, AKs:0.0803, AA:0.0295"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.1682, JJ:0.2957, QQ:0.5076, AQo:0.0003, KK:0.6416, AKo:0.8512, A4s:0.0010, A5s:0.0006, A7s:0.0003, A8s:0.0152, A9s:0.0001, ATs:0.0440, AJs:0.0007, AQs:0.0192, AKs:0.8906, AA:0.9705"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0043, AJo:0.0016, QQ:0.0818, AQo:0.0132, KK:0.0260, AKo:0.0002, A5s:0.0018, A6s:0.0001, A8s:0.0003, A9s:0.0124, ATs:0.0015, AJs:0.0001, AQs:0.0004, AA:0.0049"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0017, A5o:0.0009, ATo:0.0002, JJ:0.1428, AJo:0.0028, QQ:0.3840, AQo:0.0078, KK:0.8323, AKo:0.3402, A2s:0.0579, A3s:0.7457, A4s:0.2532, A5s:0.0680, A6s:0.0160, A7s:0.0187, A8s:0.1302, A9s:0.0163, ATs:0.0042, AKs:0.9841, AA:0.9947"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@62.25",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0943, JJ:0.0647, QQ:0.4318, KJs:0.0001, KQs:0.0001, KK, AKo:0.0066, AKs:0.9277, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@62.25",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0457, QQ:0.7449, KK:0.8583, AKo:0.0053, AKs:0.5649, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@17.61",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.6987, QQ:0.3379, KK:0.4591, AKo:0.1245, AKs:0.0632, AA:0.9607"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.2689, QQ:0.6617, KK:0.5409, AKo:0.0517, AKs:0.9251, AA:0.0393"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@17.61",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 99:0.0001, TT:0.0001, JJ:0.3516, KJo:0.2236, AJo:0.2537, QJs:0.0008, QQ:0.8756, KQo:0.3875, AQo:0.6565, K2s:0.0077, K3s:0.0032, K4s:0.0415, K5s:0.0028, K6s:0.0381, K7s:0.0062, K8s:0.0544, K9s:0.0446, KTs:0.0637, KJs:0.3093, KQs:0.0015, KK:0.8583, AKo:0.3404, A2s:0.3244, A3s:0.9819, A4s:0.6944, A5s:0.2644, A6s:0.0199, A7s:0.1075, A8s:0.4202, A9s:0.1744, ATs:0.0159, AJs:0.0004, AQs:0.0004, AKs:0.9841, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0005, 44:0.0032, 66:0.0005, 77:0.0422, 88:0.0055, 99:0.0034, TT:0.9997, JJ:0.9998, QJs:0.0002, QQ:0.9978, KTs:0.0001, KK, AKo:0.8041, A6s:0.0001, AQs:0.0001, AKs:0.9529, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 88:0.0154, 99:0.0008, TT:0.3133, JJ:0.9289, QQ:0.9290, KK, AKo:0.6965, AKs:0.7754, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0021, TT:0.0005, JJ:0.0044, QQ:0.0809, KQs:0.0001, KK, AKo:0.5539, AKs:0.6512, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0575, QQ:0.0656, KK, AKo:0.9348, AKs:0.9809, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32|BB:CALL@52.32",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 77:0.0001, 88:0.0002, 98s:0.0001, 99:0.0002, T9s:0.0003, TT:0.0002, ATo:0.0005, J9s:0.0007, JTs:0.0008, JJ:0.0002, KJo:0.0003, AJo:0.0001, Q9s:0.0001, QJs:0.0001, QQ:0.0003, AQo:0.0005, K5s:0.0001, K7s:0.0004, K8s:0.0002, KJs:0.0001, KQs:0.0009, KK:0.0175, AKo:0.0001, A3s:0.0002, A4s:0.0018, A6s:0.0009, A7s:0.0002, A8s:0.0001, ATs:0.0009, AJs:0.0009, AQs:0.0001, AKs:0.0030, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32|SB:4BET@62.25",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T9s:0.0003, J9s:0.0001, JJ:0.0002, QJs:0.0001, QQ:0.0004, KQo:0.0001, K9s:0.0001, KTs:0.0008, KJs:0.0001, KQs:0.0005, KK:0.0042, AKo:0.0001, A5s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0003, AJs:0.0005, AQs:0.0005, AKs:0.0010, AA:0.9992"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@17.61",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0080, 66:0.0001, 77:0.0066, 88:0.0091, 99:0.0536, A9o:0.0002, T9s:0.0001, TT:0.6435, ATo:0.0001, J9s:0.0032, JTs:0.0015, JJ:0.9257, QJo:0.0001, KJo:0.0001, AJo:0.0004, Q8s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0077, QQ:0.9934, KQo:0.0002, AQo:0.0002, K6s:0.0001, K7s:0.0003, K8s:0.0001, K9s:0.0001, KTs:0.0002, KQs:0.0001, KK, AKo:0.0005, A2s:0.0002, A4s:0.0002, A6s:0.0001, A7s:0.0002, A8s:0.0002, A9s:0.0002, ATs:0.0004, AJs:0.0007, AQs:0.0006, AKs:0.2931, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0025, 65s:0.0257, 66:0.1033, 77:0.0084, 88:0.1632, 99:0.1209, TT:0.1959, JJ:0.5392, QQ:0.3379, AQo:0.0001, KTs:0.0004, KJs:0.0001, KQs:0.8694, KK:0.0044, AKo:0.1350, A9s:0.0053, ATs:0.2098, AJs:0.7273, AQs:0.9732, AKs:0.0842"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0015, A3o:0.0293, A4o:0.0075, A5o:0.0282, K6o:0.0001, A6o:0.0337, A7o:0.0610, A8o:0.0021, A9o:0.0261, TT:0.0002, JJ:0.4608, KJo:0.0334, AJo:0.1113, QQ:0.5613, KQo:0.3205, AQo, K2s:0.1079, K3s:0.0016, K4s:0.0953, K6s:0.0384, K7s:0.0053, K8s:0.0120, K9s:0.0067, KTs:0.0037, KJs:0.4827, KQs:0.1067, KK:0.9956, AKo:0.2780, A2s:0.6750, A3s:0.7941, A4s:0.3852, A5s:0.6077, A6s:0.6811, A7s:0.2196, A8s:0.1178, A9s:0.5363, ATs:0.0151, AJs:0.2724, AQs:0.0001, AKs:0.8798, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.1007, KQs:0.0239, AKo:0.5871, AQs:0.0268, AKs:0.0360"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0004, 54s:0.0045, 55:0.0618, 64s:0.0002, 65s:0.1686, 66:0.4035, 76s:0.0015, 77:0.1975, 88:0.8964, 99:0.7560, TT:0.6880, JTs:0.1704, JJ:0.9723, AJo:0.5073, Q9s:0.0004, QTs:0.7991, QJs:0.7180, QQ, KQo:0.2697, AQo:0.4472, K6s:0.0186, K9s:0.0581, KTs:0.9748, KJs:0.7635, KQs:0.9803, KK:0.8993, AKo:0.0001, A3s:0.0006, A4s:0.3804, A5s:0.6575, A6s:0.0084, A7s:0.0390, A8s:0.7418, A9s:0.7646, ATs:0.9937, AJs:0.9933, AQs:0.9997, AKs:0.0003"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0002, A4o:0.0006, A5o:0.0069, 66:0.0135, 77:0.0001, A7o:0.0014, 87s:0.0001, 88:0.0615, A8o:0.0002, 99:0.2381, A9o:0.0003, TT:0.3119, ATo:0.0015, JJ:0.0277, AJo:0.2334, KQo:0.0050, AQo:0.5528, K5s:0.0002, K6s:0.0033, K7s:0.0060, K9s:0.2446, KTs:0.0114, KJs:0.2357, KQs:0.0187, KK:0.1007, AKo:0.0030, A2s:0.6683, A3s:0.9990, A4s:0.5843, A5s:0.3408, A6s:0.8932, A7s:0.4307, A8s:0.0293, A9s:0.2325, ATs:0.0060, AJs:0.0066, AQs:0.0003, AKs:0.6782, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.9969, AKs:0.3215"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0394, 65s:0.0005, 66:0.0230, 77:0.0002, 88:0.0079, 98s:0.0007, T9s:0.0001, ATo:0.0156, JTs:0.0223, Q9s:0.0003, QTs:0.0018, QJs:0.0614, KQo:0.0189, K9s:0.0001, KTs:0.0316, KJs:0.0700, KK:0.0001, A5s:0.0233, A6s:0.0003, A7s:0.0002, A8s:0.0319, A9s:0.0229, ATs:0.2995, AJs:0.0127, AA:0.0800"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0023, 55:0.0062, A5o:0.0291, 66:0.2129, A6o:0.0911, 77:0.0611, A7o:0.0319, 88:0.4913, A8o:0.0136, 99:0.1018, A9o:0.5659, TT:0.2389, ATo:0.0088, JJ:0.0168, QJo:0.0060, KJo:0.0092, AJo:0.5039, QQ:0.9983, KQo:0.4419, AQo:0.1982, K7s:0.0001, K8s:0.0001, KK, AKo:0.1853, A2s:0.3924, A3s:0.1704, A5s:0.0030, A6s:0.3722, A7s:0.0096, A8s:0.1759, A9s:0.0715, ATs:0.0686, AJs:0.1154, AQs:0.1305, AKs:0.6307, AA:0.9200"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0015, 44:0.0036, 55:0.0536, 66:0.7637, 77:0.9387, 88:0.5008, 99:0.8982, TT:0.7611, JTs:0.2797, JJ:0.9832, AJo:0.4961, QTs:0.7773, QJs:0.9385, QQ:0.0017, KQo:0.5392, AQo:0.8018, K9s:0.0001, KTs:0.9581, KJs:0.9300, KQs, KK:0.0001, AKo:0.8147, A4s:0.0005, A5s:0.0504, A7s:0.0001, A8s:0.1610, A9s:0.9050, ATs:0.6319, AJs:0.8718, AQs:0.8694, AKs:0.3693"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9994, 33:0.9997, 43s:0.0126, 44, 52s:0.0001, 53s:0.5531, 54s:0.9933, 55, 64s:0.6224, 65s:0.9530, 66:0.9476, 75s:0.9825, 76s:0.8635, 77, 85s:0.0214, 86s:0.8604, 87s:0.9872, 88, 96s:0.5119, 97s:0.9991, 98s:0.9914, 99, A9o:0.6680, T7s:0.9111, T8s:0.9996, T9s:0.9996, TT, QTo:0.2445, KTo:0.4200, ATo:0.8944, J7s:0.0009, J8s:0.7064, J9s:0.9995, JTs:0.9995, JJ:0.9310, QJo:0.8720, KJo:0.3071, AJo, Q4s:0.0018, Q6s:0.2575, Q7s:0.0770, Q8s:0.9711, Q9s:0.9994, QTs, QJs, QQ:0.9692, KQo:0.8729, AQo:0.0654, K2s:0.0002, K3s:0.2705, K4s:0.8584, K5s:0.7954, K6s:0.7170, K7s:0.5908, K8s:0.9975, K9s:0.9062, KTs, KJs:0.9998, KQs, KK:0.0001, AKo:0.6394, A2s:0.0027, A3s:0.0847, A4s:0.1479, A5s:0.3778, A6s:0.0681, A7s:0.1809, A8s:0.9950, A9s:0.9998, ATs, AJs, AQs, AKs:0.0436"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0004, A2o:0.0100, 33:0.0002, K3o:0.0003, A3o:0.0904, 43s:0.0245, K4o:0.0002, A4o:0.7456, 53s:0.1432, A5o:0.7436, 64s:0.3580, 65s:0.0469, 66:0.0524, K6o:0.0003, A6o:0.0259, 74s:0.0026, 75s:0.0046, 76s:0.1362, K7o:0.0003, A7o:0.3395, 86s:0.1212, 87s:0.0126, K8o:0.0008, A8o:0.3700, 96s:0.1955, 97s:0.0001, 98s:0.0083, A9o:0.3311, T5s:0.0001, T7s:0.0630, QTo:0.1384, KTo:0.5774, ATo:0.1056, J7s:0.0123, J8s:0.2701, J9s:0.0001, JTs:0.0001, JJ:0.0690, QJo:0.1270, KJo:0.6926, AJo:0.0001, Q4s:0.0071, Q5s:0.0041, Q6s:0.3981, Q7s:0.0004, Q8s:0.0280, QQ:0.0308, KQo:0.1271, AQo:0.9346, K2s:0.9379, K3s:0.7188, K4s:0.1411, K5s:0.2042, K6s:0.2830, K7s:0.4077, K8s:0.0019, K9s:0.0936, KJs:0.0001, KK, AKo:0.3606, A2s:0.9971, A3s:0.9153, A4s:0.8520, A5s:0.6221, A6s:0.9318, A7s:0.8191, A8s:0.0050, A9s:0.0002, AKs:0.9564, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9994, 32s:0.9966, 33, A3o:0.4177, 42s:0.9756, 43s:0.9995, 44, 54o:0.9418, A4o:0.8885, 52s:0.9979, 53s:0.9956, 54s:0.9987, 55:0.9878, 65o:0.9998, A5o:0.9674, 62s:0.9877, 63s:0.9996, 64s:0.9998, 65s:0.9998, 66:0.9985, 76o:0.9914, 86o:0.0007, K6o:0.5935, A6o:0.8925, 72s:0.0142, 73s:0.9913, 74s:0.9997, 75s:0.9875, 76s, 77, 87o:0.7885, 97o:0.0052, K7o:0.0006, A7o:0.9327, 82s:0.2645, 83s:0.0064, 84s:0.9971, 85s:0.9969, 86s, 87s, 88, 98o:0.9940, T8o:0.6862, Q8o:0.0613, K8o:0.9786, A8o:0.9906, 92s:0.3457, 93s:0.9692, 94s:0.9488, 95s:0.9992, 96s, 97s, 98s:0.9998, 99, T9o:0.9986, J9o:0.9860, Q9o:0.9532, K9o:0.9990, A9o:0.9973, T2s:0.6687, T3s:0.9310, T4s:0.9456, T5s:0.9012, T6s:0.9803, T7s:0.9976, T8s, T9s:0.9631, TT, JTo:0.9771, QTo:0.9857, KTo:0.9994, ATo:0.9997, J2s:0.9529, J3s:0.9996, J4s:0.9996, J5s:0.9995, J6s:0.9976, J7s:0.9921, J8s:0.9401, J9s:0.9998, JTs, JJ, QJo:0.9996, KJo:0.9996, AJo, Q2s, Q3s:0.9988, Q4s:0.9985, Q5s:0.9790, Q6s, Q7s:0.9993, Q8s, Q9s:0.9998, QTs, QJs, QQ, KQo, AQo, K2s, K3s:0.9992, K4s:0.9993, K5s:0.9996, K6s:0.9998, K7s, K8s:0.9996, K9s:0.9993, KTs, KJs, KQs, KK:0.9992, AKo:0.9821, A2s:0.9661, A3s:0.9236, A4s:0.9942, A5s:0.9714, A6s:0.9956, A7s:0.9468, A8s, A9s, ATs, AJs, AQs, AKs:0.9807, AA:0.7298"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0006, K2o:0.0002, A2o:0.0014, K3o:0.0002, A3o:0.0259, 42s:0.0199, 43s:0.0001, 54o:0.0085, A4o:0.1100, 52s:0.0011, 53s:0.0029, 54s:0.0011, 55:0.0122, K5o:0.0001, A5o:0.0325, 66:0.0015, 76o:0.0056, 86o:0.0098, K6o:0.0101, A6o:0.0836, 73s:0.0002, 75s:0.0124, 76s:0.0001, 87o:0.0015, K7o:0.0003, A7o:0.0660, 85s:0.0005, T8o:0.0010, Q8o:0.0001, K8o:0.0041, A8o:0.0093, 95s:0.0005, T9o:0.0005, J9o:0.0075, Q9o:0.0198, A9o:0.0027, T4s:0.0039, T5s:0.0001, T6s:0.0179, T7s:0.0005, T9s:0.0368, JTo:0.0225, QTo:0.0142, KTo:0.0006, ATo:0.0003, J4s:0.0001, J6s:0.0006, J7s:0.0078, J8s:0.0595, QJo:0.0002, KJo:0.0003, Q4s:0.0001, Q5s:0.0194, Q7s:0.0004, Q9s:0.0001, K3s:0.0006, K4s:0.0005, K5s:0.0002, K6s:0.0001, K8s:0.0003, K9s:0.0007, KK:0.0008, AKo:0.0179, A2s:0.0339, A3s:0.0764, A4s:0.0058, A5s:0.0286, A6s:0.0044, A7s:0.0532, A9s:0.0001, AJs:0.0001, AKs:0.0193, AA:0.2702"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1370, A4o:0.0007, 55:0.2792, A5o:0.3266, 65s:0.1473, 66:0.8044, 76s:0.1713, 77:0.8603, A7o:0.0010, 87s:0.0227, 88:0.9840, A8o:0.0179, 97s:0.0107, 99:0.9185, A9o:0.0001, T8s:0.0196, T9s:0.6256, TT:0.9933, KTo:0.0002, ATo:0.2892, J8s:0.2710, J9s:0.1555, JTs:0.6291, JJ:0.9972, AJo:0.7911, Q6s:0.0049, Q7s:0.0025, Q8s:0.0562, Q9s:0.2871, QTs:0.1631, QJs:0.3674, QQ:0.9986, KQo:0.0021, AQo:0.6140, K4s:0.0012, K5s:0.0004, K9s:0.0124, KTs:0.2250, KJs:0.0325, KQs:0.5492, KK:0.9743, AKo:0.9260, A2s:0.3446, A3s:0.4830, A4s:0.3605, A5s:0.9556, A6s:0.3530, A7s:0.8905, A8s:0.9651, A9s:0.9556, ATs:0.9972, AJs:0.9741, AQs:0.9961, AKs:0.8163, AA:0.0004"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0046, A5o:0.1549, A7o:0.1549, 87s:0.0008, 88:0.0005, A8o:0.1359, 99:0.0006, A9o:0.0622, T7s:0.0002, KTo:0.0062, ATo:0.2005, J8s:0.0008, JTs:0.0005, JJ:0.0003, AJo:0.0812, Q6s:0.0001, Q7s:0.0021, Q9s:0.0001, QJs:0.0006, KQo:0.0039, AQo:0.1186, K5s:0.0108, K6s:0.0040, K7s:0.0005, K8s:0.0034, K9s:0.0047, KTs:0.0011, KJs:0.0010, KQs:0.0028, KK:0.0187, AKo:0.0282, A2s:0.1147, A3s:0.1241, A4s:0.1477, A5s:0.0067, A6s:0.2001, A7s:0.0015, A8s:0.0064, ATs:0.0001, AJs:0.0053, AKs:0.1476, AA:0.8236"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0046, A5o:0.0839, 77:0.0001, A7o:0.0057, 87s:0.0001, A8o:0.0760, 97s:0.0001, A9o:0.0052, KTo:0.0001, ATo:0.0129, JJ:0.0002, AJo:0.0042, Q7s:0.0005, QJs:0.0001, QQ:0.0001, KQo:0.0003, AQo:0.0179, K3s:0.0001, K4s:0.0008, K5s:0.0001, K6s:0.0001, K7s:0.0006, K8s:0.0003, K9s:0.0003, KTs:0.0002, KJs:0.0003, KQs:0.0005, KK:0.0026, AKo:0.0102, A2s:0.0324, A3s:0.0032, A4s:0.0126, A5s:0.0124, A6s:0.0768, A7s:0.0011, A8s:0.0033, A9s:0.0052, ATs:0.0005, AJs:0.0010, AQs:0.0017, AKs:0.0310, AA:0.1760"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0001, A5o:0.0001, 66:0.0002, 77:0.0011, 87s:0.0007, 88:0.0001, 97s:0.0001, 98s:0.0003, 99:0.0003, A9o:0.0005, T7s:0.0001, TT:0.0001, QTo:0.0004, ATo:0.0001, JTs:0.0001, JJ:0.0002, AJo:0.0002, Q7s:0.0002, Q9s:0.0001, QJs:0.0003, QQ:0.0012, KQo:0.0007, AQo:0.0007, K5s:0.0001, K6s:0.0007, K7s:0.0012, K8s:0.0011, K9s:0.0004, KTs:0.0001, KJs:0.0009, KQs:0.0002, KK:0.0044, AKo:0.0355, A2s:0.0007, A3s:0.0020, A4s:0.0026, A5s:0.0038, A6s:0.0026, A7s:0.0001, A8s:0.0012, A9s:0.0022, ATs:0.0005, AJs:0.0017, AQs:0.0012, AKs:0.0051"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@17.7",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0006, A4o:0.0002, 53s:0.0001, 54s:0.0002, 55:0.0122, A5o:0.0007, 66:0.0015, A6o:0.0083, 75s:0.0033, A7o:0.0068, A8o:0.0025, A9o:0.0016, T9s:0.0291, QTo:0.0002, ATo:0.0003, J7s:0.0004, J8s:0.0001, KK:0.0008, AKo:0.0139, A2s:0.0001, A4s:0.0004, A5s:0.0032, A6s:0.0001, A7s:0.0252, AJs:0.0001, AKs:0.0177, AA:0.0520"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0082, A4o:0.0542, A5o:0.0234, A6o:0.0202, A7o:0.0127, A8o:0.0002, A9o:0.0007, AKo:0.0040, A2s:0.0336, A3s:0.0754, A4s:0.0053, A5s:0.0247, A6s:0.0043, A7s:0.0278, A9s:0.0001, AKs:0.0016, AA:0.2182"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@20",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0002, A4o:0.0127, 55:0.0027, A5o:0.0062, 66:0.0012, A6o:0.0134, A7o:0.0098, T8o:0.0001, A8o:0.0055, J9o:0.0002, A9o:0.0010, T9s:0.0065, JTo:0.0012, QTo:0.0007, ATo:0.0002, J7s:0.0002, J8s:0.0001, Q5s:0.0005, KK:0.0006, AKo:0.0114, A2s:0.0001, A3s:0.0153, A4s:0.0005, A5s:0.0104, A6s:0.0004, A7s:0.0251, AJs:0.0001, AKs:0.0186, AA:0.0624"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0151, A4o:0.0460, A5o:0.0075, 66:0.0001, A6o:0.0198, 75s:0.0005, A7o:0.0306, A8o:0.0004, A9o:0.0010, T9s:0.0170, J8s:0.0008, AKo:0.0063, A2s:0.0314, A3s:0.0584, A4s:0.0050, A5s:0.0122, A6s:0.0036, A7s:0.0233, A9s:0.0001, AKs:0.0007, AA:0.2078"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@62.25",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0008, AKo:0.0149, AKs:0.0178, AA:0.2702"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, A2o:0.0101, 32s:0.9843, 33, 43o:0.2145, 53o:0.5862, 63o:0.0013, A3o:0.5203, 42s:0.9848, 43s:0.9984, 44, 54o:0.9982, 64o:0.9972, A4o:0.4557, 52s:0.9982, 53s:0.9993, 54s:0.9998, 55:0.9998, 65o:0.9712, 75o:0.9944, 85o:0.0009, A5o:0.6363, 62s:0.9886, 63s:0.9973, 64s, 65s, 66, 76o:0.9946, 86o:0.9022, K6o:0.3727, A6o:0.7137, 72s:0.0379, 73s:0.9996, 74s:0.9969, 75s:0.9980, 76s:0.9996, 77, 87o:0.9992, 97o:0.9879, K7o:0.3131, A7o:0.3810, 82s:0.6958, 83s:0.3669, 84s:0.9898, 85s:0.9990, 86s:0.9997, 87s:0.9973, 88, 98o:0.9915, T8o:0.3028, J8o:0.0002, K8o:0.4858, A8o:0.8046, 92s:0.3804, 93s:0.9788, 94s:0.9764, 95s:0.9789, 96s:0.8425, 97s:0.9996, 98s, 99, T9o:0.9779, J9o:0.9370, Q9o:0.8449, K9o:0.6184, A9o:0.9635, T2s:0.9563, T3s:0.4251, T4s:0.9740, T5s:0.9824, T6s:0.9955, T7s:0.9985, T8s:0.9227, T9s, TT, JTo:0.9974, QTo:0.9994, KTo:0.8827, ATo:0.9530, J2s:0.9014, J3s:0.9787, J4s:0.9877, J5s:0.9939, J6s:0.9979, J7s:0.9973, J8s:0.6252, J9s:0.4977, JTs, JJ, QJo:0.9693, KJo:0.9997, AJo:0.9998, Q2s:0.7518, Q3s:0.9745, Q4s:0.9966, Q5s:0.9974, Q6s:0.9222, Q7s:0.9148, Q8s:0.9978, Q9s:0.9993, QTs:0.9979, QJs, QQ:0.3615, KQo:0.6416, AQo:0.7978, K2s:0.9993, K3s:0.9163, K4s, K5s:0.9894, K6s:0.9993, K7s:0.9982, K8s:0.8846, K9s:0.9943, KTs:0.9998, KJs, KQs, AKo:0.0003, A2s:0.8700, A3s:0.9997, A4s:0.5216, A5s:0.4758, A6s:0.8620, A7s:0.9985, A8s:0.9996, A9s:0.7668, ATs:0.9994, AJs, AQs:0.3377, AKs:0.0021"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0008, A2o:0.2486, 32s:0.0005, K3o:0.0004, A3o:0.2212, K4o:0.0046, A4o:0.4732, 65o:0.0282, Q5o:0.0001, K5o:0.2187, A5o:0.3614, Q6o:0.0003, K6o:0.0421, A6o:0.1239, K7o:0.0237, A7o:0.3587, J8o:0.0077, K8o:0.0074, A8o:0.1800, 93s:0.0008, 95s:0.0189, 96s:0.1560, 97s:0.0002, Q9o:0.0080, K9o:0.3760, A9o:0.0349, T2s:0.0008, T5s:0.0017, T6s:0.0010, T8s:0.0773, QTo:0.0001, KTo:0.1165, ATo:0.0467, J2s:0.0494, J3s:0.0029, J6s:0.0002, J8s:0.3658, J9s:0.5016, QJo:0.0298, KJo:0.0002, Q2s:0.2329, Q3s:0.0020, Q4s:0.0005, Q6s:0.0777, Q7s:0.0842, QTs:0.0004, QQ:0.6385, KQo:0.3581, AQo:0.2020, K2s:0.0002, K3s:0.0834, K5s:0.0097, K8s:0.1153, K9s:0.0042, KK, AKo:0.9997, A2s:0.1299, A4s:0.4781, A5s:0.5241, A6s:0.1374, A7s:0.0014, A9s:0.2330, ATs:0.0001, AQs:0.6623, AKs:0.9979, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1849, 55:0.2711, 65s:0.0018, 66:0.5033, 77:0.3631, 87s:0.0008, 88:0.3746, A8o:0.0005, 97s:0.0007, 98s:0.0049, 99:0.3766, A9o:0.0001, T8s:0.0031, TT:0.2438, J8s:0.0004, JTs:0.1980, JJ:0.7889, QTs:0.1252, QJs:0.0088, QQ:0.9980, AQo:0.5979, K6s:0.0320, K7s:0.0048, K9s:0.0055, KTs:0.5793, KJs:0.8503, KQs:0.9566, KK:0.5504, AKo:0.1240, A2s:0.0315, A3s:0.1281, A4s:0.1807, A5s:0.9707, A6s:0.0132, A7s:0.1186, A8s:0.1918, A9s:0.9655, ATs:0.8608, AJs:0.7885, AQs:0.9947, AKs:0.1255"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0211, A5o:0.0275, A6o:0.0008, A7o:0.0231, 87s:0.0002, A8o:0.0069, A9o:0.0163, KTo:0.0008, ATo:0.0408, KJo:0.0003, AJo:0.0404, KQo:0.0002, AQo:0.0779, K3s:0.1037, K4s:0.0005, K6s:0.0166, K7s:0.0001, K8s:0.0001, K9s:0.0690, KJs:0.0116, KQs:0.0077, KK:0.0002, AKo:0.0209, A2s:0.2173, A3s:0.2277, A4s:0.1564, A5s:0.0145, A6s:0.3588, A7s:0.0093, A8s:0.0346, A9s:0.0009, ATs:0.1091, AJs:0.1055, AKs:0.1867, AA:0.5314"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0098, A5o:0.1315, A6o:0.0001, A7o:0.0317, A8o:0.0027, 98s:0.0003, A9o:0.0028, T7s:0.0002, T9s:0.0001, KTo:0.0097, ATo:0.2097, JJ:0.0001, KJo:0.0006, AJo:0.0076, Q7s:0.0001, QQ:0.0002, KQo:0.0004, AQo:0.0491, K3s:0.0199, K5s:0.0039, K6s:0.0088, K7s:0.0319, K8s:0.0004, K9s:0.0024, KTs:0.0005, KJs:0.0009, KQs:0.0059, KK:0.0027, AKo:0.0148, A2s:0.1544, A3s:0.1472, A4s:0.0339, A6s:0.0459, A7s:0.0722, A8s:0.0799, A9s:0.0023, AJs:0.0457, AQs:0.0016, AKs:0.2002, AA:0.4686"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8o:0.0009, T9s:0.0006, ATo:0.0003, JJ:0.0006, AJo:0.0003, QQ:0.0005, AQo:0.0001, K6s:0.0023, K7s:0.0006, K8s:0.0005, K9s:0.0002, KTs:0.0011, KJs:0.0026, KQs:0.0013, KK:0.4467, AKo:0.8403, A2s:0.0040, A3s:0.0009, A4s:0.0017, A5s:0.0005, A6s:0.0034, A7s:0.0001, A8s:0.0021, A9s:0.0015, ATs:0.0006, AJs:0.0054, AQs:0.0034, AKs:0.4876"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3998, 33:0.0056, 44:0.0226, 53s:0.0018, 54s:0.0035, 55:0.4629, 64s:0.0001, 65s:0.0433, 66:0.3679, 76s:0.0281, 77:0.4672, 87s:0.0179, 88:0.8115, 97s:0.0047, 98s:0.0189, 99:0.9107, T7s:0.0005, T8s:0.0115, T9s:0.0002, TT:0.4082, ATo:0.0006, J8s:0.0030, J9s:0.0036, JTs:0.0582, JJ:0.9186, AJo:0.0002, Q9s:0.0068, QTs:0.0158, QJs:0.0285, QQ:0.9635, KQo:0.0534, AQo:0.0624, K4s:0.1324, K5s:0.0169, K6s:0.1040, K7s:0.0769, K8s:0.0011, K9s:0.0246, KTs:0.9196, KJs:0.7933, KQs:0.9948, AKo:0.0104, A3s:0.0059, A4s:0.0891, A5s:0.3389, A6s:0.0280, A7s:0.0709, A8s:0.9248, A9s:0.8325, ATs:0.9460, AJs:0.9506, AQs:0.9845, AKs:0.0045"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "KTo:0.0005, KQo:0.0039, K4s:0.0033, K5s:0.0054, K7s:0.0030, K8s:0.0001, KTs:0.0015, KJs:0.0009, KK:0.0001, AKo:0.0006, AKs:0.0093"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "44:0.0001, 54s:0.0020, 55:0.0070, 65s:0.0009, 66:0.0251, 75s:0.0010, 76s:0.0002, 77:0.0418, 88:0.0056, 98s:0.0041, 99:0.0195, T8s:0.0001, TT:0.2761, JTs:0.0020, JJ:0.0094, AJo:0.0009, QQ:0.0022, AQo:0.0002, K3s:0.0001, K4s:0.0106, K5s:0.0006, K6s:0.0001, K7s:0.0014, K8s:0.0042, K9s:0.0150, KTs:0.0125, KJs:0.0023, KQs:0.0002, AKo:0.6283, A2s:0.0002, A3s:0.0073, A4s:0.0099, A5s:0.0309, A6s:0.0018, A7s:0.0096, A8s:0.0367, A9s:0.0550, ATs:0.0403, AJs:0.0485, AQs:0.0154, AKs:0.0298"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0012, A3o:0.0058, A4o:0.0001, 54s:0.0001, A5o:0.0014, A6o:0.0215, A7o:0.0224, A8o:0.0005, A9o:0.0005, T4s:0.0001, TT:0.0001, ATo:0.0001, QQ:0.0003, AQo:0.1267, A2s:0.0652, A3s:0.0001, A4s:0.0149, A5s:0.0850, A6s:0.1508, A7s:0.0682, A8s:0.0854, A9s:0.0198, ATs:0.0086, AJs:0.0008, AQs:0.4943, AKs:0.0033, AA:0.5413"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0229, A4o:0.0351, A5o:0.0093, 76s:0.0001, A8o:0.0008, K9o:0.0001, A9o:0.0017, AJo:0.0046, QJs:0.0002, QQ:0.0012, AQo:0.1906, K2s:0.0001, K5s:0.0001, K7s:0.0001, K8s:0.0007, KQs:0.0004, A2s:0.0768, A3s:0.0080, A5s:0.1218, A6s:0.0427, A7s:0.0206, A8s:0.0386, A9s:0.0370, AJs:0.0066, AQs:0.0994, AKs:0.0259, AA:0.4587"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0005, 88:0.0002, TT:0.0001, Q8s:0.0001, AQo:0.0001, K2s:0.0002, K3s:0.0002, K4s:0.0001, K7s:0.0025, K8s:0.0004, K9s:0.0002, KTs:0.0043, KJs:0.0001, KQs:0.0024, KK, AKo, A2s:0.2152, A3s:0.0001, A5s:0.2859, A6s:0.0024, A7s:0.0042, A8s:0.0074, A9s:0.0140, ATs:0.0030, AJs:0.0243, AQs:0.0047, AKs:0.9707"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 71.43,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.4119, 65s:0.0453, 66:0.8831, 76s:0.0221, 77:0.7921, 88:0.9860, 99:0.8802, T8s:0.0001, TT:0.9935, KTo:0.0006, ATo:0.0642, JTs:0.2873, JJ:0.9974, KJo:0.0040, AJo:0.1986, QTs:0.0507, QJs:0.2994, QQ, KQo:0.1734, AQo:0.8558, K3s:0.0778, K4s:0.3899, K5s:0.0074, K6s:0.5795, K7s:0.0950, K9s:0.0062, KTs:0.9963, KJs:0.9940, KQs:0.9990, KK:0.9121, A2s:0.0003, A3s:0.1471, A4s:0.8108, A5s:0.6150, A6s:0.0116, A7s:0.7789, A8s:0.8439, A9s:0.9955, ATs:0.9995, AJs:0.9973, AQs:0.8415"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0004, A4o:0.0021, 55:0.0368, A5o:0.0005, 66:0.0032, 77:0.0914, A7o:0.0134, A8o:0.0113, 99:0.0023, A9o:0.0454, ATo:0.1220, AJo:0.0169, QJs:0.0001, AQo:0.0959, A2s:0.1714, A3s:0.4726, A4s:0.0699, A5s:0.2322, A6s:0.3871, A7s:0.1713, A8s:0.1358, A9s:0.0004, AQs:0.1038, AKs:0.0016, AA:0.6779"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0038, 55:0.0066, A5o:0.0075, 66:0.0003, A6o:0.0001, A7o:0.0152, A8o:0.0001, A9o:0.0691, ATo:0.0141, AJo:0.0295, AQo:0.0480, A2s:0.2713, A3s:0.0973, A4s:0.0269, A5s:0.0951, A6s:0.1231, A7s:0.0058, A8s:0.0001, A9s:0.0003, AQs:0.0547, AA:0.3221"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0002, T8s:0.0001, TT:0.0025, JJ:0.0001, K3s:0.0001, K4s:0.0004, K5s:0.0005, K6s:0.0004, K7s:0.0016, K8s:0.0001, K9s:0.0002, KTs:0.0020, KJs:0.0003, KQs:0.0003, KK:0.0879, AKo, A2s:0.0093, A3s:0.0427, A4s:0.0220, A5s:0.0085, A6s:0.0143, A7s:0.0388, A8s:0.0202, A9s:0.0001, ATs:0.0004, AJs:0.0026, AKs:0.9984"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@17.7",
    "heroPos": "SB",
    "eff": 71.43,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 71.18bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, A3o:0.0003, 43s:0.0003, A4o:0.0035, 53s:0.0001, A5o:0.0596, 64s:0.0147, 65s:0.0304, 66:0.0524, 75s:0.0009, 76s:0.1308, A7o:0.0226, 86s:0.0162, 87s:0.0108, A8o:0.1007, 96s:0.0010, 98s:0.0079, A9o:0.1204, T7s:0.0081, ATo:0.0908, J8s:0.0996, JTs:0.0001, JJ:0.0688, AJo:0.0001, Q8s:0.0004, QQ:0.0308, AQo:0.6699, K2s:0.0028, K4s:0.0002, K5s:0.0001, K6s:0.0109, K7s:0.0009, K9s:0.0006, KK:0.9971, AKo:0.2283, A2s:0.0009, A3s:0.0028, A4s:0.0051, A5s:0.0156, A6s:0.0471, A7s:0.3321, A8s:0.0021, A9s:0.0002, AKs:0.8266, AA:0.0058"
      },
      {
        "action": "5bet 71.18bb",
        "min": 0.0001,
        "range": "A2o:0.0007, A3o:0.0142, A4o:0.1385, A5o:0.1258, 64s:0.0002, 65s:0.0001, A6o:0.0006, A7o:0.0728, 86s:0.0001, 87s:0.0006, A8o:0.1126, 98s:0.0001, A9o:0.0081, ATo:0.0140, J8s:0.0002, JJ:0.0002, Q6s:0.0001, AQo:0.2647, K9s:0.0002, KK:0.0027, AKo:0.1323, A2s:0.9934, A3s:0.9106, A4s:0.8448, A5s:0.6064, A6s:0.8826, A7s:0.4869, A8s:0.0029, AKs:0.1297, AA:0.9942"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@20",
    "heroPos": "SB",
    "eff": 71.43,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 71.18bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 53s:0.0027, A5o:0.0258, 64s:0.0047, 65s:0.0011, 66:0.0519, A6o:0.0001, 75s:0.0008, 76s:0.0277, A7o:0.0058, 87s:0.0014, A8o:0.0410, A9o:0.1258, ATo:0.0761, J8s:0.0001, JJ:0.0675, AJo:0.0001, Q6s:0.0003, Q8s:0.0001, QQ:0.0300, AQo:0.6862, K2s:0.0003, K3s:0.0005, K7s:0.0026, KK:0.9768, AKo:0.0898, A2s:0.0002, A3s:0.0630, A4s:0.1620, A5s:0.0054, A6s:0.4187, A7s:0.0423, A8s:0.0025, A9s:0.0002, AKs:0.7363, AA:0.2495"
      },
      {
        "action": "5bet 71.18bb",
        "min": 0.0001,
        "range": "A2o:0.0004, A3o:0.0107, A4o:0.0410, A5o:0.2272, 65s:0.0001, 66:0.0001, A6o:0.0005, 76s:0.0005, A7o:0.0209, 86s:0.0002, 87s:0.0013, A8o:0.0787, A9o:0.0044, ATo:0.0293, J8s:0.0011, QQ:0.0007, AQo:0.2482, K2s:0.0004, K7s:0.0007, KK:0.0033, AKo:0.2704, A2s:0.9797, A3s:0.8388, A4s:0.6893, A5s:0.6136, A6s:0.4999, A7s:0.7751, A8s:0.0025, AKs:0.2199, AA:0.7505"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@71.18",
    "heroPos": "SB",
    "eff": 71.43,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK, AKo:0.3563, AKs:0.9563, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 99:0.0001, ATo:0.0001, JTs:0.0001, QJs:0.0002, QQ:0.0001, AQo:0.0001, K9s:0.0001, KK:0.0002, AKo:0.0028, A5s:0.0001, A7s:0.0004, A9s:0.0001, ATs:0.0008, AJs:0.0001, AQs:0.0567, AKs:0.0034, AA:0.3253"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0002, 55:0.0012, 76s:0.0025, A7o:0.0031, 88:0.0004, A8o:0.0330, A9o:0.0006, T8s:0.0082, TT:0.0002, JTs:0.0001, JJ:0.0001, Q8s:0.0007, QJs:0.0003, QQ:0.0107, AQo:0.0027, K3s:0.0001, K5s:0.0029, KJs:0.0002, KK:0.0101, AKo:0.0420, A2s:0.3466, A3s:0.4112, A4s:0.0317, A5s:0.3062, A6s:0.4928, A7s:0.0087, A8s:0.3185, A9s:0.0343, ATs:0.3001, AJs:0.2544, AQs:0.1937, AKs:0.2268, AA:0.6746"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0002, A3o:0.0002, 43s:0.0057, 53s:0.0385, A5o:0.0384, 64s:0.1239, 65s:0.0093, 66:0.0475, A6o:0.0001, 74s:0.0001, 75s:0.0001, 76s:0.0161, A7o:0.0329, 86s:0.0151, 87s:0.0048, A8o:0.0147, 96s:0.0756, A9o:0.0143, T7s:0.0256, KTo:0.0001, ATo:0.0046, J8s:0.0112, JJ:0.0323, Q8s:0.0001, QQ:0.0173, AQo:0.5366, K2s:0.0003, K4s:0.0003, K5s:0.0002, K6s:0.0003, K7s:0.0005, K8s:0.0004, K9s:0.0025, KK:0.9779, AKo:0.1031, A2s:0.0452, A3s:0.0640, A4s:0.0943, A5s:0.0519, A6s:0.0015, A7s:0.0496, A8s:0.0007, A9s:0.0001, AKs:0.0871, AA:0.1641"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "A2o:0.0016, A3o:0.0210, 43s:0.0011, A4o:0.1983, 53s:0.0018, A5o:0.1863, 64s:0.0063, 65s:0.0008, A6o:0.0004, 74s:0.0002, 75s:0.0003, 76s:0.0020, A7o:0.0220, 86s:0.0022, 87s:0.0006, A8o:0.0328, 96s:0.0005, 98s:0.0002, A9o:0.0520, T7s:0.0030, KTo:0.0001, ATo:0.0787, J8s:0.0063, JJ:0.0138, Q6s:0.0001, AQo:0.1601, K5s:0.0005, K6s:0.0011, K7s:0.0031, K9s:0.0010, KK:0.0183, AKo:0.2571, A2s:0.9396, A3s:0.6539, A4s:0.7540, A5s:0.5588, A6s:0.6680, A7s:0.7370, A8s:0.0030, A9s:0.0001, AKs:0.8681, AA:0.8359"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "LJ",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0006, JJ:0.0011, K8s:0.0004, K9s:0.0002, KTs:0.0001, KK:0.0004, AKo:0.0599, A2s:0.0002, A7s:0.0432, A8s:0.0001, ATs:0.0164, AJs:0.0102, AQs:0.1822, AKs:0.3946, AA:0.5698"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0016, 55:0.0003, A5o:0.0105, 66:0.0006, A7o:0.0001, 87s:0.0007, A8o:0.0008, 97s:0.0004, 99:0.0001, A9o:0.0260, T7s:0.0013, T8s:0.0002, T9s:0.0006, TT:0.0001, KTo:0.0001, ATo:0.0337, JTs:0.0010, JJ:0.0013, AJo:0.0013, Q8s:0.0002, Q9s:0.0012, QTs:0.0006, QQ:0.0007, AQo:0.0001, K4s:0.0002, K5s:0.0001, K9s:0.0001, KTs:0.0013, KJs:0.0007, KQs:0.0003, KK:0.0189, AKo:0.1157, A2s:0.0045, A3s:0.0640, A4s:0.0260, A5s:0.0338, A6s:0.0142, A7s:0.0057, A8s:0.0016, A9s:0.0001, ATs:0.0389, AJs:0.0644, AQs:0.0485, AKs:0.1028, AA:0.4301"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0014, A4o:0.0005, 53s:0.0002, A5o:0.0051, 64s:0.0341, 65s:0.0089, 66:0.0261, 76s:0.0513, A7o:0.0041, 86s:0.0018, A8o:0.0217, 98s:0.0007, A9o:0.0035, ATo:0.0075, J7s:0.0004, J8s:0.0016, JJ:0.0283, QQ:0.0059, AQo:0.2563, K2s:0.0001, K3s:0.0001, K4s:0.0003, K5s:0.0006, K6s:0.0074, K9s:0.0003, KK:0.3100, AKo:0.0281, A2s:0.0528, A3s:0.0303, A4s:0.0134, A5s:0.0300, A6s:0.0423, A7s:0.1889, A8s:0.0011, A9s:0.0001, AKs:0.1963, AA:0.1306"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "A2o:0.0039, A3o:0.0533, 43s:0.0001, A4o:0.2271, 53s:0.0416, A5o:0.0817, 64s:0.0618, 65s:0.0002, 66:0.0108, A6o:0.0002, 74s:0.0004, 75s:0.0002, 76s:0.0258, A7o:0.0073, 86s:0.0355, 87s:0.0078, A8o:0.0262, 96s:0.0162, 98s:0.0008, A9o:0.0725, T7s:0.0006, KTo:0.0001, ATo:0.0453, J8s:0.0010, JJ:0.0173, Q6s:0.0001, QQ:0.0002, KQo:0.0001, AQo:0.4122, K2s:0.0050, K3s:0.0005, K4s:0.0002, K5s:0.0001, K6s:0.0061, K7s:0.0003, K9s:0.0001, KK:0.3256, AKo:0.3297, A2s:0.6608, A3s:0.8027, A4s:0.8268, A5s:0.5578, A6s:0.8439, A7s:0.5595, A8s:0.0037, A9s:0.0001, AKs:0.7599, AA:0.8694"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.4484, AKo:0.0001, AKs:0.0182, AA:0.4373"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0003, KK:0.5515, AKo:0.0020, AKs:0.0305, AA:0.5627"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@62.25",
    "heroPos": "SB",
    "eff": 62.5,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0003, QQ:0.0002, KK, AKo:0.2384, AKs:0.9560, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.1293, A2o:0.0394, 33:0.6939, A3o:0.3496, 42s:0.0001, 44:0.1317, A4o:0.3594, 52s:0.0007, 53s:0.0009, 54s:0.0056, 55:0.2496, A5o:0.1497, 62s:0.0425, 63s:0.0003, 64s:0.0123, 65s:0.0494, 66:0.7915, 76o:0.0004, K6o:0.0006, A6o:0.7325, 72s:0.0206, 74s:0.1304, 75s:0.0083, 76s:0.2098, 77:0.9600, A7o:0.5903, 86s:0.1815, 87s:0.1499, 88:0.9515, A8o:0.0859, 92s:0.0060, 97s:0.0064, 98s:0.0286, 99:0.9884, J9o:0.0020, Q9o:0.0024, A9o:0.2552, T2s:0.0980, T4s:0.0022, T7s:0.0001, T9s:0.0476, TT:0.9898, ATo:0.7150, J5s:0.0004, J9s:0.0002, JJ:0.9599, AJo:0.9648, Q2s:0.0005, Q4s:0.0012, Q5s:0.0024, Q6s:0.0002, Q8s:0.0518, Q9s:0.0394, QTs:0.0001, QJs:0.5799, QQ, KQo:0.0448, AQo:0.9968, K2s:0.0009, K3s:0.0291, K4s:0.0001, K6s:0.0030, K7s:0.0303, K8s:0.0010, KJs:0.0004, KQs:0.0482, KK, AKo:0.9994, A2s:0.9452, A3s:0.4307, A4s:0.2689, A5s:0.7106, A6s:0.6976, A7s:0.6032, A8s:0.2525, A9s:0.9907, ATs:0.8908, AJs:0.9922, AQs:0.9831, AKs:0.9902, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9831, 33:0.8744, 42s:0.1012, 44:0.9624, 52s:0.1727, 54s:0.2289, 55:0.9724, A5o:0.0002, 62s:0.3571, 64s:0.1370, 65s:0.0289, 66:0.8919, 75s:0.4762, 77:0.8851, 86s:0.0702, 87s:0.6106, 88:0.9140, 93s:0.0023, 96s:0.0011, 97s:0.2431, 98s:0.0361, 99:0.2879, T8s:0.7828, T9s:0.7903, TT:0.6830, ATo:0.0059, J4s:0.0157, J7s:0.0002, J9s:0.0008, JJ:0.7967, AJo:0.0181, Q2s:0.0003, Q3s:0.0001, Q5s:0.0009, Q6s:0.0638, Q7s:0.0051, Q9s:0.2139, QTs:0.0004, QJs:0.7475, QQ:0.9858, KQo:0.2792, AQo:0.4583, K5s:0.0002, K7s:0.0001, K9s:0.0869, KJs:0.0727, KQs:0.8069, KK:0.0254, AKo:0.3495, A2s:0.0002, A3s:0.0931, A4s:0.1462, A5s:0.5131, A6s:0.0784, A7s:0.0115, A8s:0.3786, ATs:0.2270, AJs:0.4286, AQs:0.3185, AKs:0.2242, AA:0.0222"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0561, A3o:0.0735, 44:0.0011, A4o:0.0641, 54s:0.0046, A5o:0.2280, 64s:0.0307, 65s:0.1526, 66:0.0670, 76s:0.0325, 77:0.0653, A7o:0.0562, 85s:0.0287, 86s:0.0034, 87s:0.1377, 88:0.0278, A8o:0.2435, 94s:0.0046, 97s:0.0015, 98s:0.0123, 99:0.6597, A9o:0.0536, T3s:0.0001, T8s:0.0012, T9s:0.0091, TT:0.2105, ATo:0.5475, J4s:0.0005, J6s:0.0024, J7s:0.0016, J8s:0.0115, JTs:0.0266, JJ:0.1822, AJo:0.9474, Q3s:0.0063, Q7s:0.0321, QTs:0.0001, QQ:0.0107, KQo:0.0007, AQo:0.5345, K4s:0.0004, K5s:0.0001, K6s:0.0174, K7s:0.0019, K8s:0.0004, KJs:0.0005, KQs:0.0003, KK:0.9685, AKo:0.0621, A2s:0.0207, A3s:0.6481, A4s:0.5058, A5s:0.2072, A6s:0.6426, A7s:0.2866, A8s:0.0872, A9s:0.0259, ATs:0.5004, AJs:0.5382, AQs:0.6504, AKs:0.3502, AA:0.9747"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0011, 82s:0.0001, 99:0.0010, T6s:0.0005, TT:0.0024, ATo:0.0002, J9s:0.0001, JTs:0.0001, JJ:0.0069, AJo:0.0001, QTs:0.0004, QQ:0.0035, KQo:0.0001, AQo:0.0001, K5s:0.0004, K6s:0.0041, K7s:0.0001, KTs:0.0001, KJs:0.0010, KK:0.0061, AKo:0.5873, A2s:0.0007, A3s:0.0007, A4s:0.0001, A5s:0.0006, A6s:0.0001, A7s:0.0171, A8s:0.0023, A9s:0.0003, AJs:0.0005, AQs:0.0169, AKs:0.4254, AA:0.0032"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0002, 55:0.0002, A5o:0.0006, 66:0.0002, 76s:0.0010, 77:0.0003, A7o:0.0004, 88:0.0004, A8o:0.0008, 97s:0.0002, 99:0.0001, A9o:0.0002, T9s:0.0001, TT:0.0004, JTo:0.0001, QTo:0.0001, ATo:0.0008, J9s:0.0001, JTs:0.0004, JJ:0.0147, QJo:0.0003, KJo:0.0003, AJo:0.0004, Q7s:0.0015, Q9s:0.0002, QTs:0.2172, QQ:0.1687, KQo:0.0001, AQo:0.0539, K3s:0.0002, K6s:0.0004, K7s:0.0001, K8s:0.0002, K9s:0.0002, KTs:0.0014, KJs:0.0002, KQs:0.0039, KK:0.0919, AKo:0.1138, A2s:0.0001, A3s:0.0035, A4s:0.0005, A5s:0.0117, A6s:0.0003, A7s:0.0001, A8s:0.0087, A9s:0.0042, ATs:0.0176, AJs:0.0004, AQs:0.2228, AKs:0.0324, AA:0.0029"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0001, A5o:0.0079, 65s:0.0222, 66:0.0074, 76s:0.1814, 77:0.0031, A7o:0.0001, 87s:0.0201, 88:0.0100, A8o:0.0393, 97s:0.0040, 98s:0.1053, 99:0.1356, A9o:0.0001, T7s:0.0157, T8s:0.0136, T9s:0.0010, TT:0.0036, JTo:0.0001, KTo:0.0009, ATo:0.0630, J8s:0.0019, J9s:0.0009, JTs:0.0002, JJ:0.0025, KJo:0.0001, AJo:0.2650, Q6s:0.0003, Q7s:0.0005, Q8s:0.0001, Q9s:0.0148, QTs:0.0066, QJs:0.0032, QQ:0.3516, AQo:0.2613, K4s:0.0517, K5s:0.0412, K6s:0.0024, K7s:0.1512, K8s:0.0058, K9s:0.0297, KTs:0.1687, KJs:0.0024, KQs:0.0528, KK:0.0619, AKo:0.0223, A2s:0.0829, A3s:0.2112, A4s:0.0887, A5s:0.0075, A6s:0.0024, A7s:0.0001, A8s:0.0370, A9s:0.0001, ATs:0.0293, AJs:0.0002, AQs:0.0975, AKs:0.0431, AA:0.8199"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0018, 66:0.0053, 76s:0.0072, 87s:0.0003, 88:0.0005, A8o:0.0487, 97s:0.0043, 98s:0.0100, 99:0.0008, A9o:0.0001, T8s:0.0560, T9s:0.0005, TT:0.0020, QTo:0.0001, KTo:0.0001, ATo:0.0001, J8s:0.0002, J9s:0.0138, JTs:0.0006, JJ:0.0758, QJo:0.0001, KJo:0.0001, Q8s:0.0001, Q9s:0.0003, QTs:0.0056, QJs:0.0089, QQ:0.1550, AQo:0.0008, K3s:0.0002, K4s:0.0001, K5s:0.0192, K6s:0.0041, K8s:0.0340, K9s:0.0092, KTs:0.0024, KJs:0.0010, KQs:0.0002, KK:0.0054, AKo:0.0107, A2s:0.1718, A3s:0.0001, A4s:0.0122, A5s:0.0003, A6s:0.1602, A7s:0.0002, A8s:0.0008, A9s:0.0002, ATs:0.0010, AJs:0.0002, AQs:0.0968, AKs:0.0015, AA:0.1725"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "44:0.0470, A4o:0.0117, 55:0.0001, A5o:0.1428, 65s:0.0054, 66:0.1683, A6o:0.0002, 76s:0.2805, 77:0.2887, A7o:0.0001, 87s:0.0129, 88:0.2950, K8o:0.0001, A8o:0.1808, 97s:0.0016, 98s:0.0150, 99:0.0822, A9o:0.0944, T7s:0.0030, T8s:0.0389, T9s:0.4717, TT:0.0041, JTo:0.0001, QTo:0.0022, KTo:0.0011, ATo:0.0740, J8s:0.1617, J9s:0.2542, JTs:0.0029, JJ:0.0144, KJo:0.0001, AJo:0.0080, Q7s:0.0081, Q8s:0.0342, Q9s:0.0024, QTs:0.0002, QJs:0.0166, QQ:0.0242, KQo:0.0006, AQo:0.0984, K3s:0.4859, K4s:0.8135, K5s:0.1110, K6s:0.8581, K7s:0.5042, K8s:0.1243, K9s:0.4829, KTs:0.0169, KJs:0.0470, KQs:0.6734, KK:0.8409, AKo:0.8059, A2s:0.0394, A3s:0.1028, A4s:0.5456, A5s:0.2372, A6s:0.0006, A7s:0.0002, A8s:0.8225, A9s:0.3671, ATs:0.0709, AJs:0.6387, AQs:0.5475, AKs:0.9189, AA:0.0048"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0060, 66:0.0057, 77:0.0001, 88:0.0030, ATs:0.0186, AJs:0.0001, AA:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0101, 66:0.0090, 77:0.0001, 88:0.0049, KK:0.0001, ATs:0.0442, AJs:0.0126, AA:0.0798"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@62.25",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0031, 55:0.0048, A5o:0.0004, 65s:0.0002, 66:0.0005, 76s:0.0039, 77:0.0101, A7o:0.0004, 87s:0.0006, A8o:0.0028, 97s:0.0030, 98s:0.0012, 99:0.0058, A9o:0.0002, T7s:0.0007, T8s:0.0002, T9s:0.0139, TT:0.1582, JTo:0.0037, QTo:0.0006, KTo:0.0009, ATo:0.0017, J8s:0.0022, J9s:0.0006, JTs:0.0204, JJ:0.0047, QJo:0.0032, KJo:0.0080, AJo:0.0013, Q7s:0.0004, Q8s:0.0425, Q9s:0.0358, QTs:0.0406, QJs:0.0004, QQ:0.5498, KQo:0.0024, AQo:0.0061, K3s:0.0002, K4s:0.0512, K5s:0.0049, K6s:0.0203, K7s:0.0063, K8s:0.0095, K9s:0.0030, KTs:0.0057, KJs:0.0066, KQs:0.0021, KK, AKo:0.8543, A2s:0.0008, A3s:0.0017, A4s:0.0140, A5s:0.0005, A6s:0.0023, A7s:0.0138, A8s:0.0974, A9s:0.0073, ATs:0.0102, AJs:0.0089, AQs:0.0130, AKs:0.2184, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0393, 66:0.0229, 77:0.0002, 88:0.0079, KK:0.0001, ATs:0.0002, AA:0.0800"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0004, A8o:0.0001, A9o:0.0001, T9s:0.0001, TT:0.0001, ATo:0.0001, J9s:0.0002, JTs:0.0002, JJ:0.0005, Q7s:0.0005, QQ:0.2987, K3s:0.0001, K8s:0.0004, K9s:0.0001, KJs:0.0001, KQs:0.0012, KK:0.1390, A4s:0.0006, A5s:0.0006, A9s:0.0001, ATs:0.0002, AJs:0.1007, AQs:0.0007, AKs:0.0044, AA:0.1813"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0055, A4o:0.0031, A5o:0.0083, 66:0.0603, 77:0.0004, A7o:0.0027, 88:0.0001, 97s:0.0020, 98s:0.0163, 99:0.0050, TT:0.0003, ATo:0.0001, J8s:0.0001, J9s:0.0002, JJ:0.1496, AJo:0.0299, Q9s:0.0301, QTs:0.0034, QQ:0.0200, AQo:0.0028, K3s:0.0003, K4s:0.0012, K8s:0.0015, K9s:0.0074, KQs:0.0096, KK:0.0010, AKo:0.0009, A2s:0.0098, A3s:0.0136, A5s:0.2312, A6s:0.0880, A7s:0.0409, A8s:0.0986, A9s:0.0226, ATs:0.0882, AJs:0.1783, AQs:0.0012, AKs:0.0325, AA:0.5010"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "44:0.0174, 55:0.0001, A5o:0.0063, 76s:0.0001, 77:0.0075, TT:0.0003, ATo:0.0007, JJ:0.0065, AJo:0.0007, Q9s:0.0014, QQ:0.0007, AQo:0.0443, K3s:0.0353, K8s:0.0002, K9s:0.0006, KTs:0.0048, KQs:0.0001, KK:0.0176, AKo:0.0162, A2s:0.0002, A4s:0.0005, A5s:0.1039, A6s:0.0007, A7s:0.0955, A8s:0.0158, A9s:0.0035, ATs:0.0898, AJs:0.1931, AQs:0.0057, AKs:0.0202, AA:0.2993"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0017, A4o:0.0124, 55:0.2134, A5o:0.0141, 66:0.3755, 77:0.0184, A7o:0.0006, 88:0.1549, 97s:0.0009, 98s:0.0001, 99:0.1593, T8s:0.0011, T9s:0.0014, TT:0.0114, ATo:0.0096, J8s:0.2444, J9s:0.0001, JTs:0.0073, JJ:0.0652, KJo:0.1023, AJo:0.0441, Q6s:0.0055, Q9s:0.0395, QTs:0.0107, QQ:0.6550, KQo:0.0394, AQo:0.1182, K3s:0.4679, K4s:0.6531, K5s:0.1285, K6s:0.2434, K7s:0.1201, K8s:0.6308, K9s:0.3088, KTs:0.0511, KJs:0.1685, KQs:0.7657, KK:0.8424, AKo:0.9792, A2s:0.0344, A3s:0.3532, A4s:0.0330, A5s:0.3652, A6s:0.0618, A7s:0.0307, A8s:0.2508, A9s:0.2468, ATs:0.1846, AJs:0.1372, AQs:0.9836, AKs:0.9393, AA:0.0184"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0054, 88:0.0003, ATs:0.0195, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0111, 66:0.0168, 77:0.0002, 88:0.0076, KK:0.0001, ATs:0.0431, AJs:0.0127, AA:0.0799"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 71.18bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "33:0.0009, 55:0.0005, 77:0.0005, 88:0.5446, 99:0.8693, TT:0.9990, JJ, QTs:0.0058, QQ, KQo:0.2122, AQo:0.8031, K3s:0.0006, K6s:0.0003, K7s:0.0121, K8s:0.0552, K9s:0.0086, KTs:0.7829, KJs:0.5035, KQs:0.9978, KK:0.9944, AKo:0.9960, A2s:0.0023, ATs:0.4538, AJs:0.4950, AQs:0.9991, AKs:0.9870, AA"
      },
      {
        "action": "4bet 71.18bb",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0002, JJ:0.0001, QQ:0.0001, KTs:0.0017, KJs:0.0001, KK:0.0056, AKo:0.0040, A7s:0.0001, A9s:0.0027, ATs:0.0111, AJs:0.0020, AQs:0.0002, AKs:0.0129, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0003, 88:0.3103, 99:0.6649, TT:0.9228, JJ:0.9986, Q9s:0.0001, QQ:0.9580, KQo:0.1278, AQo:0.7676, K4s:0.0019, K9s:0.0025, KTs:0.4783, KJs:0.2013, KQs:0.7584, KK:0.9675, AKo:0.9156, A3s:0.0009, A4s:0.0070, A5s:0.0010, ATs:0.2373, AJs:0.0361, AQs:0.9987, AKs:0.8357, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0130, TT:0.0698, QJs:0.0001, QQ:0.0420, K4s:0.0001, KTs:0.0026, KJs:0.0024, KQs:0.1011, KK:0.0325, AKo:0.0844, A3s:0.0001, A4s:0.0004, A5s:0.0002, ATs:0.0123, AJs:0.0004, AQs:0.0006, AKs:0.1643, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0616, 76s:0.0001, 77:0.0064, J9s:0.0002, JTs:0.0007, JJ:0.0001, AJo:0.0003, Q9s:0.0008, QTs:0.0374, QJs:0.0174, KQo:0.0001, KTs:0.1255, KJs:0.0002, KQs:0.0001, A4s:0.0010, A5s:0.0005, A6s:0.0001, A7s:0.0001, A8s:0.0007, A9s:0.0306, ATs:0.2159, AJs:0.0001, AA:0.0177"
      },
      {
        "action": "4bet 17.61bb",
        "min": 0.0001,
        "range": "44:0.1024, 55:0.5626, 66:0.6366, 77:0.9795, 88, 99, TT, JJ, AJo:0.9991, QTs:0.0003, QQ, KQo:0.5873, AQo, KTs:0.0863, KJs:0.0013, KQs, KK, AKo, A3s:0.0001, A4s:0.1353, A5s:0.3725, A6s:0.0002, A7s:0.0351, A8s:0.0047, A9s:0.0027, ATs:0.7836, AJs, AQs, AKs, AA:0.9823"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@17.61",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0062, 66:0.2129, 77:0.0611, 88:0.4913, 99:0.1018, TT:0.2389, ATo:0.0026, JJ:0.0168, AJo:0.5039, QQ:0.9983, KQo:0.3993, AQo:0.1982, KK, AKo:0.1853, A5s:0.0002, A8s:0.0837, A9s:0.0710, ATs:0.0686, AJs:0.1154, AQs:0.1305, AKs:0.6307, AA:0.9200"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0034, QQ:0.3472, KK:0.0002, AQs:0.0776, AA:0.1114"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0001, 65s:0.0001, 88:0.0101, 99:0.0011, T9s:0.0001, TT:0.3592, JJ:0.1632, QQ:0.2640, AQo:0.0001, K6s:0.0091, KTs:0.0003, KJs:0.0003, KQs:0.2364, KK:0.9998, AKo:0.9996, A2s:0.0969, A3s:0.2983, A4s:0.0496, A5s:0.0552, A6s:0.1134, A7s:0.0140, A8s:0.1513, A9s:0.2404, ATs:0.3585, AJs:0.3476, AQs:0.1799, AKs:0.9997, AA:0.8886"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0047, 66:0.1771, 77:0.0339, 88:0.4483, 99:0.1017, TT:0.2389, JJ:0.0168, AJo:0.0002, QQ:0.9983, AQo:0.1979, KK, AKo:0.1853, A3s:0.0116, A5s:0.0002, A8s:0.0002, A9s:0.0021, ATs:0.0102, AJs:0.0688, AQs:0.1305, AKs:0.6307, AA:0.9200"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0005, 66:0.0002, 77:0.0004, 88:0.0001, 98s:0.0003, 99:0.0002, T8s:0.0001, TT:0.0011, JTo:0.0001, J8s:0.0002, J9s:0.0001, JJ:0.0004, KJo:0.0001, AJo:0.0001, Q7s:0.0001, QTs:0.0019, QJs:0.0005, QQ:0.3346, KQo:0.0002, AQo:0.0004, K4s:0.0001, K5s:0.0001, K6s:0.0004, K7s:0.0005, K9s:0.0007, KTs:0.0003, KJs:0.0002, KQs:0.0006, KK, A2s:0.0003, A7s:0.0002, A8s:0.0001, A9s:0.0002, ATs:0.0004, AJs:0.0004, AQs:0.0003, AKs:0.0071, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@62.25",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0057, 66:0.1895, 77:0.0557, 88:0.3670, 99:0.0952, A9o:0.0001, TT:0.2384, JJ:0.0168, AJo:0.0029, QQ:0.9983, KQo:0.0001, AQo:0.0050, KK, AKo:0.1853, A2s:0.0053, A3s:0.0197, A5s:0.0001, A6s:0.0027, A7s:0.0004, A8s:0.0028, A9s:0.0022, ATs:0.0092, AJs:0.0758, AQs:0.1088, AKs:0.6307, AA:0.9200"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0404, KK:0.0010, AQs:0.0703, AA:0.0464"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 76s:0.0001, 88:0.0006, JTs:0.0003, JJ:0.2390, QQ:0.1624, K8s:0.0001, K9s:0.0001, KK:0.9990, AKo:0.9991, A2s:0.0064, A5s:0.0035, A6s:0.0879, A7s:0.0003, A8s:0.0001, ATs:0.1726, AJs:0.0001, AQs:0.0001, AKs:0.9993, AA:0.9535"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0061, 66:0.1928, 77:0.0571, 88:0.4904, 99:0.1018, TT:0.2389, JJ:0.0168, AJo:0.0140, QQ:0.9983, KQo:0.0001, AQo:0.1982, KK, AKo:0.1853, A2s:0.0001, A5s:0.0006, ATs:0.0526, AJs:0.1151, AQs:0.1305, AKs:0.6307, AA:0.9200"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@71.18",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0012, 55:0.0006, A5o:0.0041, 65s:0.0001, 66:0.0048, 76s:0.0002, 77:0.0015, 87s:0.0072, 88:0.0016, A8o:0.0005, 99:0.0014, A9o:0.0013, T7s:0.0001, T8s:0.0009, T9s:0.0003, TT:0.0017, KTo:0.0021, ATo:0.0001, J8s:0.0017, J9s:0.0037, JJ:0.0035, QJo:0.0006, KJo:0.0008, AJo:0.0001, Q7s:0.0005, Q8s:0.0044, Q9s:0.0027, QTs:0.0048, QJs:0.0038, QQ:0.0128, KQo:0.0003, AQo:0.0103, K3s:0.0024, K4s:0.0012, K5s:0.0001, K7s:0.0007, K8s:0.0054, K9s:0.0040, KTs:0.0030, KJs:0.0004, KQs:0.0016, KK:0.9416, AKo:0.0012, A2s:0.0031, A3s:0.0009, A4s:0.0072, A5s:0.0023, A6s:0.0009, A7s:0.0004, A8s:0.0044, A9s:0.0016, ATs:0.0060, AJs:0.0081, AQs:0.0019, AKs:0.0054, AA:0.9807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@71.18",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0052, A5o:0.0001, 66:0.2129, A6o:0.0014, 77:0.0471, 88:0.4913, A8o:0.0001, 99:0.0996, A9o:0.0041, TT:0.2389, ATo:0.0002, JJ:0.0168, KJo:0.0001, AJo:0.0802, QQ:0.9983, KQo:0.0012, AQo:0.1700, KK, AKo:0.1853, A2s:0.0741, A3s:0.0440, A5s:0.0025, A6s:0.1264, A7s:0.0044, A8s:0.0156, A9s:0.0315, ATs:0.0337, AJs:0.0990, AQs:0.1305, AKs:0.6307, AA:0.9200"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "SB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 71.18bb"
    ],
    "bands": [
      {
        "action": "4bet 71.18bb",
        "min": 0.0001,
        "range": "88:0.0156, 99:0.9988, TT, JJ, QQ, AQo:0.9626, KK, AKo, AQs:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "BB",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.1765, 99, TT, JJ, QQ, AQo:0.9982, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.7745, 77, 88, 99, TT, ATo:0.0107, JJ, AJo, QQ, KQo:0.1596, AQo, KJs:0.0844, KQs, KK, AKo, A9s:0.0006, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@17.61|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0088, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@17.61|SB:4BET@71.18",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "66:0.0210, 88:0.0001, 99:0.0304, Q9o:0.0020, TT:0.7491, JJ:0.8681, QJo:0.0067, Q6s:0.0077, Q9s:0.0057, QTs:0.2511, QJs:0.0432, QQ:0.4405, KQo:0.4581, AQo:0.6375, KTs:0.0003, KJs:0.1347, KQs:0.2089, KK:0.1835, AKo:0.4044, AQs:0.5260, AKs:0.8274, AA:0.9995"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.3074, TT:0.2501, JJ:0.1319, QJo:0.0001, QTs:0.0016, QJs:0.0264, QQ:0.5595, KQo:0.0963, AQo:0.3622, K7s:0.0001, KTs:0.0249, KJs:0.8438, KQs:0.7906, KK:0.8165, AKo:0.5956, A2s:0.0001, A4s:0.0001, A5s:0.0001, AQs:0.4740, AKs:0.1726, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0004, Q2o:0.0096, K2o:0.0095, A2o:0.0599, 32s:0.0001, Q3o:0.0149, K3o:0.0808, A3o:0.0574, 43s:0.0009, Q4o:0.0337, K4o:0.1297, A4o:0.1063, 54s:0.0002, 55:0.0211, 65o:0.0002, Q5o:0.0641, K5o:0.4196, A5o:0.2348, 62s:0.0006, 66:0.0001, Q6o:0.0287, K6o:0.0850, A6o:0.3381, 73s:0.0001, 74s:0.0007, 77:0.0009, Q7o:0.0012, K7o:0.0090, A7o:0.0005, 82s:0.0022, 88:0.0227, Q8o:0.0041, K8o:0.0785, A8o:0.0004, 96s:0.0001, Q9o:0.0002, TT:0.0004, QTo:0.0001, KTo:0.0003, ATo:0.0001, JJ:0.0004, AJo:0.0005, Q2s:0.1422, Q3s:0.2238, Q4s:0.0146, Q5s:0.2930, Q6s:0.0536, Q7s:0.0015, Q9s:0.0026, QQ:0.9998, KQo:0.9992, AQo, K2s:0.0248, K3s:0.0178, K4s:0.5231, K5s:0.3392, K6s:0.0213, K7s:0.0729, K8s:0.0195, K9s:0.0771, KTs:0.1499, KJs:0.0100, KQs:0.9972, KK, AKo:0.9998, A2s:0.8924, A3s:0.8494, A4s:0.5789, A5s:0.6288, A6s:0.7513, A7s:0.6743, A8s:0.0644, A9s:0.4890, ATs:0.0044, AJs:0.0176, AQs:0.9963, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9792, 33:0.9998, 43s:0.9928, 44:0.9864, 52s:0.1005, 53s:0.4088, 54s:0.8957, 55:0.9971, 65o:0.3061, 63s:0.0007, 64s:0.8658, 65s:0.9628, 66:0.9894, 74s:0.6030, 75s:0.8851, 76s:0.7414, 77:0.9614, 83s:0.0001, 85s:0.0779, 86s:0.3748, 87s:0.6982, 88:0.9989, 92s:0.0001, 94s:0.0001, 95s:0.0137, 96s:0.2473, 97s:0.8345, 98s:0.8635, 99:0.9966, T4s:0.0009, T7s:0.2690, T8s:0.5911, T9s:0.8145, TT:0.9791, J3s:0.0001, J4s:0.0197, J7s:0.0001, J8s:0.3812, J9s:0.7029, JTs:0.6962, JJ:0.9996, KJo:0.1580, AJo:0.7744, Q4s:0.0001, Q5s:0.0001, Q7s:0.0349, Q8s:0.0002, Q9s:0.4701, QTs:0.5415, QJs:0.6893, QQ:0.9986, KQo:0.6647, AQo:0.3500, K2s:0.0780, K3s:0.1612, K4s:0.4402, K5s:0.0013, K6s:0.5638, K7s:0.3148, K8s:0.3428, K9s:0.8416, KTs:0.7939, KJs:0.9800, KQs:0.6649, AKo:0.0002, A2s:0.1214, A3s:0.7612, A4s:0.1189, A5s:0.4995, A6s:0.9301, A7s:0.9060, A8s:0.6748, A9s:0.9768, ATs:0.9808, AJs:0.9928, AQs:0.5336"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0005, K2o:0.0411, A2o:0.0016, 32s:0.0001, Q3o:0.0002, K3o:0.0060, A3o:0.0387, 44:0.0063, K4o:0.2949, A4o:0.1110, K5o:0.1633, A5o:0.4719, 63s:0.0001, 65s:0.0002, 66:0.0105, K6o:0.4374, A6o:0.0017, 72s:0.0002, 74s:0.0037, 75s:0.0049, 76s:0.0001, 77:0.0323, K7o:0.0214, A7o:0.1899, 85s:0.0048, K8o:0.0005, A8o:0.0118, K9o:0.0362, TT:0.0021, KTo:0.0459, ATo:0.0001, J3s:0.0001, J9s:0.0009, KJo:0.0011, Q3s:0.0117, Q4s:0.0006, Q5s:0.0035, Q7s:0.0091, Q9s:0.0002, QTs:0.0374, QJs:0.0072, QQ:0.0013, KQo:0.3278, AQo:0.6488, K2s:0.6443, K3s:0.0735, K4s:0.2708, K5s:0.9551, K6s:0.3123, K7s:0.6656, K8s:0.1451, K9s:0.0432, KTs:0.1608, KJs:0.0004, KQs:0.3329, KK, AKo:0.1109, A2s:0.8364, A3s:0.1126, A4s:0.8696, A5s:0.4761, A6s:0.0338, A7s:0.0810, A8s:0.1906, ATs:0.0015, AQs:0.4653, AKs:0.4826, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0003, A5o:0.0001, 99:0.0002, Q9s:0.0003, QQ:0.0001, K2s:0.0011, K3s:0.0004, K4s:0.0015, K5s:0.0016, K6s:0.0007, K7s:0.0028, KTs:0.0007, KJs:0.0005, KQs:0.0005, KK:0.0001, AKo:0.8889, A2s:0.0011, A3s:0.0014, A4s:0.0013, A7s:0.0005, A8s:0.0002, AQs:0.0001, AKs:0.5174"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.1229, 66:0.0585, 76s:0.1106, 77:0.6521, 87s:0.0285, 88:0.1891, 99:0.0371, T8s:0.0001, TT:0.2107, KTo:0.0238, ATo:0.0003, QQ:0.2569, KQo:0.0053, AQo:0.4645, K5s:0.0487, K8s:0.7222, K9s:0.0119, KTs:0.0777, KJs:0.0314, KQs:0.7299, KK:0.9562, AKo:0.0599, A2s:0.1129, A4s:0.0284, A5s:0.0237, A6s:0.5420, A7s:0.1060, A8s:0.0001, A9s:0.5280, ATs:0.2864, AJs:0.3516, AQs:0.6148, AKs:0.0045"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0378, A5o:0.0920, 66:0.0001, A6o:0.0003, 76s:0.0004, 77:0.0006, A7o:0.0473, 88:0.0001, A8o:0.0484, A9o:0.0001, ATo:0.0635, J9s:0.0004, JJ:0.0002, AJo:0.0381, QTs:0.0004, QQ:0.0010, AQo:0.2238, K3s:0.0002, K4s:0.0001, K5s:0.0002, K9s:0.0003, KTs:0.0006, KJs:0.0002, KK:0.0064, AKo:0.0746, A2s:0.0314, A3s:0.0170, A4s:0.0082, A5s:0.0668, A6s:0.0112, A7s:0.0238, A8s:0.1851, A9s:0.0336, ATs:0.0415, AJs:0.1190, AQs:0.1344, AKs:0.2204, AA:0.5519"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0388, A5o:0.1601, A6o:0.0001, 77:0.0018, A7o:0.0870, A8o:0.0363, 98s:0.0002, A9o:0.0577, T9s:0.0001, ATo:0.0210, J9s:0.0005, JJ:0.0003, AJo:0.0211, Q7s:0.0001, Q9s:0.0001, QQ:0.0004, KQo:0.0001, AQo:0.0190, K3s:0.0002, K4s:0.0001, K5s:0.0003, K6s:0.0005, K7s:0.0009, K8s:0.0036, K9s:0.0145, KTs:0.0037, KJs:0.0003, KQs:0.0013, KK:0.0114, AKo:0.0185, A2s:0.0146, A3s:0.0761, A4s:0.1227, A5s:0.0174, A7s:0.0105, A8s:0.3375, A9s:0.0697, ATs:0.0144, AJs:0.0409, AQs:0.0733, AKs:0.1513, AA:0.4481"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "A5o:0.0003, 77:0.0008, A7o:0.0001, 88:0.0004, 98s:0.0007, TT:0.0005, ATo:0.0001, J9s:0.0004, JJ:0.0002, QTs:0.0001, QQ:0.0006, AQo:0.0018, K3s:0.0015, K4s:0.0003, K5s:0.0002, K6s:0.0010, K8s:0.0005, K9s:0.0015, KTs:0.0004, KJs:0.0005, KQs:0.0012, KK:0.0260, AKo:0.8470, A2s:0.5664, A3s:0.5438, A4s:0.6809, A5s:0.7006, A6s:0.0051, A7s:0.6688, A8s:0.0157, A9s:0.2648, ATs:0.5256, AJs:0.0174, AQs:0.0017, AKs:0.6237"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0002, 55:0.0052, 66:0.2038, 77:0.0943, 88:0.0513, 99:0.0547, TT:0.0296, JJ:0.0896, QQ:0.6958, AQo:0.0742, K9s:0.0016, KTs:0.0472, KJs:0.0166, KQs:0.0698, KK:0.0024, A3s:0.0002, A4s:0.0433, A5s:0.1902, A7s:0.0017, A8s:0.1371, A9s:0.0006, ATs:0.3537, AJs:0.1490, AQs:0.7929"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "TT:0.0004, AJo:0.0038, KQo:0.0139, K6s:0.0098, K9s:0.0324, KTs:0.4428, KJs:0.3540, KK:0.6577, A4s:0.0096, A5s:0.0577, A6s:0.0001, A7s:0.0136, A8s:0.0071, A9s:0.0055, ATs:0.0015, AJs:0.1706"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "AJo:0.0023, KQo:0.0006, AQo:0.0002, K6s:0.0041, K9s:0.0012, KTs:0.0586, KJs:0.0368, KK:0.2391, A4s:0.0003, A5s:0.0001, A6s:0.0004, A7s:0.0031, A8s:0.0001, A9s:0.0261, ATs:0.0195, AJs:0.0150"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0006, QQ:0.0003, AQo:0.0211, AKo:0.0001, A5s:0.0009, A9s:0.0010, ATs:0.0008, AJs:0.0001, AQs:0.2047, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@62.25",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0019, 88:0.0008, A9o:0.0001, TT:0.0003, JJ:0.0005, QQ:0.0504, AQo:0.0001, K7s:0.0001, KQs:0.0001, KK:0.9997, AKo:0.9969, ATs:0.0001, AKs:0.9987, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@62.25",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0006, KK:0.8993, AKo:0.0001, AQs:0.0001, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0064, 55:0.0027, 66:0.0783, 77:0.0058, QTs:0.0001, QQ:0.1937, AQo:0.0182, KTs:0.0008, KQs:0.0339, KK:0.2104, AKo:0.0107, A4s:0.0660, A6s:0.0010, A7s:0.0442, A8s:0.0145, A9s:0.0354, AJs:0.0066, AQs:0.3106, AKs:0.0028, AA:0.0004"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0086, A5o:0.0083, A6o:0.0005, A7o:0.0423, A8o:0.0038, A9o:0.0214, ATo:0.0018, JJ:0.0001, AJo:0.0001, Q8s:0.0003, QTs:0.0008, AQo:0.0007, KJs:0.0003, KQs:0.0001, KK:0.0004, A2s:0.2140, A3s:0.0874, A4s:0.2752, A5s:0.1014, A6s:0.1961, A7s:0.1311, A8s:0.3236, A9s:0.1756, ATs:0.0294, AJs:0.2637, AQs:0.2316, AKs:0.0047, AA:0.7429"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "55:0.0004, A5o:0.0084, A6o:0.0004, A7o:0.0015, A8o:0.0096, A9o:0.0078, ATo:0.0008, AJo:0.0133, Q9s:0.0007, AQo:0.0004, K7s:0.0003, K8s:0.0040, KTs:0.0011, KK:0.0064, A2s:0.0399, A3s:0.0002, A4s:0.0955, A5s:0.0104, A6s:0.0537, A7s:0.0211, A8s:0.2311, A9s:0.0021, ATs:0.0979, AJs:0.0777, AQs:0.0078, AKs:0.0248, AA:0.2562"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0002, A8o:0.0003, A9o:0.0002, J8s:0.0002, J9s:0.0003, JJ:0.0002, AJo:0.0002, QQ:0.0006, K8s:0.0001, KK:0.7829, AKo:0.9891, A2s:0.0004, A3s:0.0017, A4s:0.0001, A5s:0.0004, A7s:0.0003, A9s:0.0004, ATs:0.0004, AQs:0.0003, AKs:0.9676, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0149, 77:0.0005, 88:0.0115, QQ:0.0299, AQo:0.0041, KK:0.0031, A8s:0.0001, A9s:0.0003, ATs:0.0001, AQs:0.0841"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "JJ:0.0002, AJo:0.0004, QQ:0.0002, AQo:0.0004, K6s:0.0002, K9s:0.0004, KTs:0.0125, KJs:0.0132, KK:0.0462, A7s:0.0003, A8s:0.0007, A9s:0.0041, ATs:0.0073, AJs:0.0103"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "JJ:0.0001, AJo:0.0045, K6s:0.0001, K9s:0.0032, KTs:0.0117, KJs:0.0165, KK:0.1099, AKo:0.0001, A4s:0.0071, A5s:0.0001, A6s:0.0001, A7s:0.0004, A8s:0.0009, A9s:0.0228, ATs:0.0076, AJs:0.0222, AQs:0.0005, AKs:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.1664, 77:0.0013, 88:0.1762, 99:0.2275, TT:0.0912, JJ:0.2757, QQ:0.9696, AQo:0.0567, KJs:0.0037, KQs:0.0006, KK:0.7401, A3s:0.0004, A4s:0.2330, A5s:0.5981, A6s:0.0011, A7s:0.0166, A8s:0.2154, A9s:0.0372, ATs:0.4270, AJs:0.2482, AQs:0.8954, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 65s:0.0100, 66:0.0019, 76s:0.1112, 87s:0.0083, 88:0.0006, 97s:0.0001, 98s:0.0009, 99:0.0009, T8s:0.0005, T9s:0.0001, TT:0.0807, JTs:0.0002, JJ:0.0037, Q9s:0.0002, QJs:0.0015, QQ:0.2985, AQo:0.2065, K6s:0.0166, K9s:0.0001, KTs:0.0016, KJs:0.0982, KQs:0.0209, KK:0.0075, AKo:0.1348, A2s:0.0124, A3s:0.0147, A4s:0.0001, A5s:0.0476, A6s:0.0005, A7s:0.0453, A8s:0.0021, A9s:0.0133, ATs:0.0007, AJs:0.0050, AQs:0.9662, AA:0.3150"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "44:0.0938, 55:0.2057, 65s:0.0006, 66:0.0025, 76s:0.0005, 77:0.0615, 87s:0.0001, 88:0.1044, 99:0.0792, T9s:0.0001, TT:0.8191, JJ:0.9962, QJs:0.0010, QQ:0.6874, AQo:0.0001, K8s:0.0003, K9s:0.0002, KJs:0.1493, KQs:0.0076, KK:0.3694, AKo:0.3055, A2s:0.0001, A3s:0.0211, A4s:0.0214, A5s:0.0059, A6s:0.0003, A7s:0.0383, A8s:0.0001, A9s:0.0008, ATs:0.0196, AJs:0.1955, AQs:0.0069, AKs:0.8851, AA:0.6230"
      },
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0014, TT:0.0346, JJ:0.0001, Q7s:0.0001, QJs:0.0004, QQ:0.0142, AQo:0.0020, K8s:0.0418, K9s:0.0027, KTs:0.0032, KJs:0.1098, KQs:0.0002, KK:0.6231, AKo:0.5595, A2s:0.0130, A5s:0.6501, A9s:0.0010, ATs:0.0804, AJs:0.0520, AQs:0.0020, AKs:0.1148, AA:0.0620"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0087, 66:0.0087, 77:0.0096, 88:0.0363, 99:0.0273, TT:0.0118, JTs:0.0007, QTs:0.0001, QJs:0.0394, QQ:0.0011, AQo:0.0031, K6s:0.0002, KTs:0.0184, KJs:0.0331, KQs:0.0538, KK:0.0011, A3s:0.0002, A4s:0.0011, A5s:0.0786, A8s:0.0001, ATs:0.0004, AJs:0.0010, AQs:0.2363"
      },
      {
        "action": "4bet 17.61bb",
        "min": 0.0001,
        "range": "55:0.0364, 66:0.2875, 77:0.1065, 88:0.2013, 99:0.3758, TT:0.6658, JJ:0.9723, QQ:0.9989, AQo:0.3945, KK:0.8982, AKo:0.0001, ATs:0.0002, AQs:0.7624, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0007, 88:0.0007, 98s:0.0001, TT:0.3372, JJ:0.9622, QQ:0.9857, KQs:0.0001, KK:0.2941, AKo:0.8865, A3s:0.0001, A7s:0.0001, ATs:0.0036, AQs:0.5197, AKs:0.8311, AA:0.9616"
      },
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "77:0.0007, TT:0.0033, JJ:0.0266, QQ:0.0143, KK:0.7059, AKo:0.1134, ATs:0.0004, AQs:0.0149, AKs:0.1687, AA:0.0384"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@17.61",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0005, 66:0.1732, 77:0.1091, 88:0.2735, 99:0.6716, TT:0.6879, JJ:0.9722, QQ, AQo:0.1877, KQs:0.0066, KK:0.8993, AKo:0.0001, AJs:0.0004, AQs:0.9996, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0008, 88:0.0065, 99:0.8055, TT, JJ, QQ, AQo:0.6803, KK, AKo, A9s:0.0001, ATs:0.0058, AJs:0.0015, AQs:0.9993, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 71.18bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "K2o:0.0110, A2o:0.0467, K3o:0.0142, A3o:0.2924, 44:0.0001, K4o:0.0125, A4o:0.0146, K5o:0.0056, A5o:0.2244, K6o:0.0022, A6o:0.1163, K7o:0.0081, A7o:0.0432, K8o:0.0052, A8o:0.1221, 95s:0.0004, A9o:0.0286, ATo:0.1358, JJ:0.0223, KJo:0.0005, AJo:0.0323, QQ:0.0001, AQo:0.0009, K2s:0.0280, K3s:0.0067, K4s:0.0036, K5s:0.1526, K6s:0.0676, K7s:0.0492, K8s:0.0021, K9s:0.0072, KTs:0.0965, KJs:0.0182, KQs:0.0010, KK:0.9996, AKo:0.2201, A2s:0.5227, A3s:0.2261, A4s:0.4735, A5s:0.0773, A6s:0.7854, A7s:0.5491, A8s:0.3408, A9s:0.0531, ATs:0.1255, AJs:0.3271, AKs:0.0300, AA"
      },
      {
        "action": "4bet 71.18bb",
        "min": 0.0001,
        "range": "44:0.0006, 54s:0.0002, 96s:0.0001, J8s:0.0002, JJ:0.0003, Q9s:0.0003, QJs:0.0002, QQ:0.0010, K7s:0.0005, KTs:0.0003, KQs:0.0011, KK:0.0004, AKo:0.7799, A2s:0.0714, A3s:0.0030, A4s:0.0837, A5s:0.0266, A7s:0.0014, A8s:0.0012, ATs:0.0048, AJs:0.0015, AQs:0.0001, AKs:0.9700"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0312, K3o:0.0033, A3o:0.0101, A4o:0.1449, A5o:0.1167, K6o:0.0013, A6o:0.0362, 74s:0.0003, 75s:0.0001, A7o:0.1470, A8o:0.0215, A9o:0.0003, T9s:0.0001, TT:0.0008, ATo:0.0007, J2s:0.0001, J5s:0.0003, JJ:0.0005, AJo:0.0007, AQo:0.0005, K3s:0.0044, K6s:0.0062, K7s:0.0163, KQs:0.0020, KK:0.1749, AKo:0.0235, A2s:0.1068, A3s:0.0414, A4s:0.0823, A5s:0.2651, A6s:0.1044, A7s:0.1027, A8s:0.2117, A9s:0.0457, ATs:0.1546, AJs:0.0528, AQs:0.0769, AKs:0.1071, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8o:0.0001, T4s:0.0004, TT:0.0001, KJs:0.0002, KQs:0.0026, KK:0.4185, AKo:0.9756, A2s:0.0221, A3s:0.0449, A4s:0.0871, A5s:0.2619, A6s:0.0131, A7s:0.0152, A8s:0.0005, A9s:0.0027, ATs:0.0007, AJs:0.0002, AQs:0.0006, AKs:0.8915"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1636, 55:0.7197, 65s:0.0866, 66:0.5059, 76s:0.5367, 77:0.9020, 88:0.8075, 98s:0.0001, 99:0.9030, T8s:0.0066, T9s:0.8195, TT:0.9805, ATo:0.0010, JTs:0.0018, JJ:0.9978, QTs:0.1672, QQ, AQo:0.9939, K4s:0.0005, K5s:0.3148, K6s:0.0370, K7s:0.0940, K8s:0.0006, K9s:0.3286, KTs:0.8033, KJs:0.9490, KQs:0.1259, KK:0.9715, AKo:0.0001, A2s:0.0029, A3s:0.0253, A4s:0.0290, A5s:0.1899, A6s:0.3584, A7s:0.4654, A8s:0.5357, A9s:0.9340, ATs:0.5876, AJs:0.9023, AQs:0.9994, AKs:0.0002"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.1095, A5o:0.2888, A6o:0.0025, A7o:0.0336, A8o:0.4625, A9o:0.1579, TT:0.0038, KTo:0.0105, ATo:0.1699, JJ:0.0003, KJo:0.0001, AJo:0.0241, AQo:0.0016, K3s:0.0770, K4s:0.0009, K5s:0.0016, K6s:0.0127, K7s:0.0102, K8s:0.0130, K9s:0.0014, KTs:0.0002, KJs:0.0013, KQs:0.0003, KK:0.0196, AKo:0.0339, A2s:0.0857, A3s:0.0399, A4s:0.0139, A5s:0.0062, A6s:0.1867, A7s:0.0017, A8s:0.0044, A9s:0.0154, ATs:0.0208, AJs:0.0004, AKs:0.4834, AA"
      },
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "44:0.0029, 55:0.0269, A5o:0.0437, 66:0.0104, 76s:0.0005, 77:0.0808, A7o:0.0001, 87s:0.0005, 88:0.1221, A8o:0.0001, 99:0.0023, TT:0.0001, ATo:0.0076, JJ:0.0004, AJo:0.0065, QQ:0.0001, AQo:0.0001, K4s:0.0004, K5s:0.0001, K6s:0.0022, K7s:0.0015, K8s:0.0001, KQs:0.0003, KK:0.0089, AKo:0.9661, A2s:0.9050, A3s:0.9323, A4s:0.9495, A5s:0.8017, A6s:0.4371, A7s:0.5191, A8s:0.4369, A9s:0.0494, ATs:0.3715, AJs:0.0972, AQs:0.0001, AKs:0.5164"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@18",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0098, 88:0.0015, 99:0.0036, TT:0.0909, JJ:0.0234, AJo:0.0126, AQo:0.1159, KK:0.0812, A2s:0.0001, A4s:0.0049, A5s:0.0635, A6s:0.0319, A7s:0.0006, A8s:0.0020, A9s:0.0287, ATs:0.0057, AJs:0.0061, AQs:0.0003, AKs:0.0003, AA:0.2142"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0004, 88:0.0010, 99:0.0163, TT:0.0131, JJ:0.0011, AJo:0.0001, AQo:0.0007, KK:0.0195, AKo:0.0030, A2s:0.0353, A3s:0.5185, A4s:0.4064, A5s:0.0204, A6s:0.5225, A7s:0.0149, A8s:0.0013, A9s:0.0061, ATs:0.0003, AJs:0.0003, AKs:0.6779, AA:0.7858"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0088, JJ:0.0053, KK:0.1007, AKo:0.0030, AKs:0.6750, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, A8o:0.0003, A9o:0.0001, ATo:0.0102, J9s:0.0001, QTs:0.0001, QQ:0.0003, K9s:0.0001, KTs:0.0004, KK:0.1265, AKo:0.3973, A3s:0.0998, A6s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.1557, AJs:0.0005, AQs:0.2512, AKs:0.0020, AA:0.5669"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "55:0.0011, A5o:0.0050, 66:0.0186, 76s:0.0001, 77:0.0036, A7o:0.0043, 88:0.0001, A8o:0.0001, A9o:0.0072, T8s:0.0006, T9s:0.0002, JTo:0.0001, QTo:0.0004, ATo:0.0006, J8s:0.0020, J9s:0.0006, JJ:0.0075, QTs:0.0006, QJs:0.0002, QQ:0.0004, KQo:0.0003, AQo:0.0009, K3s:0.0002, K5s:0.0006, K7s:0.0003, K9s:0.0001, KTs:0.0016, KK:0.5401, AKo:0.5299, A2s:0.0411, A3s:0.0076, A4s:0.1129, A5s:0.0358, A6s:0.1277, A7s:0.1999, A8s:0.0005, A9s:0.0002, ATs:0.4257, AJs:0.0009, AQs:0.0205, AKs:0.9751, AA:0.4330"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0007, 88:0.0021, 99:0.0423, TT:0.0221, JJ:0.0001, AJo:0.0110, AQo:0.0534, KJs:0.0002, KK:0.0630, A3s:0.0026, A4s:0.0172, A5s:0.0009, A6s:0.0339, A7s:0.0004, A8s:0.0045, A9s:0.0334, ATs:0.0011, AJs:0.0047, AQs:0.0002, AKs:0.0524, AA:0.1445"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0010, JJ:0.0001, AJo:0.0007, K7s:0.0001, K9s:0.0039, KTs:0.0004, KJs:0.0105, KQs:0.0009, KK:0.0377, AKo:0.0028, A2s:0.1810, A3s:0.2484, A4s:0.1890, A5s:0.2165, A6s:0.1476, A7s:0.1983, A8s:0.0071, A9s:0.0299, ATs:0.0038, AJs:0.0011, AKs:0.6250, AA:0.8555"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0001, TT:0.0014, KTo:0.0001, ATo:0.0001, J9s:0.0002, JJ:0.0007, AJo:0.0001, QJs:0.0001, QQ:0.0001, AQo:0.0001, K4s:0.0001, KK:0.9990, AKo:0.0010, A2s:0.0001, A3s:0.0001, A4s:0.0001, A7s:0.0002, A8s:0.0001, AKs:0.1177, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@62.25",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1007, AKo:0.0008, AKs:0.3040, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0007, TT:0.0001, KK:0.1957, AKo:0.0661, A6s:0.0003, A7s:0.0131, A8s:0.0612, A9s:0.0015, AQs:0.0001, AKs:0.1924, AA:0.2788"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0003, 76s:0.0001, 88:0.0001, T7s:0.0001, J9s:0.0007, JJ:0.0001, Q9s:0.0001, QQ:0.0002, K4s:0.0005, K5s:0.0098, K8s:0.0081, KTs:0.0203, KJs:0.0007, KQs:0.0001, KK:0.7752, AKo:0.4354, A2s:0.0136, A3s:0.0608, A4s:0.1503, A5s:0.1156, A6s:0.0708, A7s:0.0633, A8s:0.2415, A9s:0.0206, ATs:0.0998, AJs:0.0034, AQs:0.0442, AKs:0.7474, AA:0.7212"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0024, 99:0.0101, TT:0.0283, JJ:0.0054, AJo:0.0004, AQo:0.0595, KJs:0.0009, KK:0.0003, A5s:0.0008, A7s:0.0113, A8s:0.0010, A9s:0.0108, ATs:0.0019, AJs:0.0055, AQs:0.0003, AKs:0.0004, AA:0.0690"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0037, 88:0.0129, 99:0.1025, TT:0.0603, JJ:0.0071, KQo:0.0012, AQo:0.0013, K5s:0.0001, K6s:0.0022, K7s:0.0036, K9s:0.2081, KTs:0.0089, KJs:0.1428, KQs:0.0165, KK:0.1004, AKo:0.0030, A2s:0.0492, A3s:0.3094, A4s:0.0211, A5s:0.1322, A6s:0.0079, A7s:0.1601, A8s:0.0005, A9s:0.0106, ATs:0.0020, AJs:0.0004, AKs:0.6777, AA:0.9310"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@71.18",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, A8o:0.0001, 99:0.0002, TT:0.0051, ATo:0.0001, Q9s:0.0002, QQ:0.0004, AQo:0.0002, KTs:0.0001, KQs:0.0013, KK:0.9661, AKo:0.0001, A2s:0.0002, A6s:0.0003, A7s:0.0006, A9s:0.0001, ATs:0.0001, AQs:0.0007, AKs:0.3909, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@71.18",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, KK:0.1007, AKo:0.0030, AKs:0.6762, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9832, QQ:0.9989, KQs:0.0002, KK, AKo:0.1983, A7s:0.0001, A8s:0.0001, AQs:0.0018, AKs:0.9107, AA:0.8940"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0008, QQ:0.0010, KK:0.0001, ATs:0.0001, AQs:0.0001, AKs:0.0048, AA:0.1060"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@17.61",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0135, 77:0.0001, 87s:0.0001, 88:0.0615, 99:0.2381, TT:0.3119, JJ:0.0277, AJo:0.0026, KQo:0.0002, AQo:0.5528, K5s:0.0001, K6s:0.0030, K7s:0.0045, K9s:0.1349, KTs:0.0114, KJs:0.2357, KQs:0.0187, KK:0.1007, AKo:0.0030, A2s:0.6635, A3s:0.9989, A4s:0.5401, A5s:0.3408, A6s:0.1197, A7s:0.4188, A8s:0.0051, A9s:0.0988, ATs:0.0060, AJs:0.0066, AQs:0.0003, AKs:0.6782, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0088, 44:0.2799, 55:0.6749, 66:0.6209, 77:0.7542, 88:0.8516, 99:0.8190, TT, JJ, QQ:0.9988, KK, AKo:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 71.18bb"
    ],
    "bands": [
      {
        "action": "4bet 71.18bb",
        "min": 0.0001,
        "range": "44:0.0002, 66:0.0012, JJ:0.0037, QQ:0.0001, KK, AKo:0.9994, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, KK, AKo:0.9985, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0004, 77:0.0001, 88:0.0043, 97s:0.0029, T9s:0.0002, TT:0.0003, JTo:0.0001, JJ:0.0042, QJo:0.0001, Q7s:0.0002, Q8s:0.0001, Q9s:0.0004, QJs:0.0001, QQ:0.0155, AQo:0.0001, K5s:0.0002, K6s:0.0005, KK:0.0122, A3s:0.0002, A4s:0.0003, A5s:0.0004, A6s:0.0003, A7s:0.0010, A8s:0.0034, A9s:0.0004, ATs:0.0003, AJs:0.0001, AQs:0.0018, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32|SB:4BET@71.18",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0001, 88:0.0001, 97s:0.0001, 99:0.0002, ATo:0.0004, JJ:0.0002, AJo:0.0001, Q7s:0.0002, Q9s:0.0002, QJs:0.0001, QQ:0.0005, K3s:0.0001, K4s:0.0002, K7s:0.0001, K8s:0.0002, K9s:0.0003, KTs:0.0001, KJs:0.0002, KQs:0.0001, KK:0.0077, AKo:0.0006, A2s:0.0015, A3s:0.0002, A7s:0.0002, A8s:0.0001, A9s:0.0005, AJs:0.0005, AQs:0.0003, AKs:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0048, 77:0.0185, 88:0.0383, 99:0.0051, T8s:0.0002, TT:0.0637, JJ:0.9544, QQ:0.9929, AQo:0.0001, K9s:0.0001, KTs:0.0001, KK, AKo:0.0001, A7s:0.0001, AQs:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0004, 32s:0.0005, Q3o:0.0078, A3o:0.0126, 44:0.0668, A4o:0.0351, 52s:0.0005, Q5o:0.0205, A5o:0.6050, 63s:0.0005, 64s:0.0123, 66:0.0646, 86o:0.0003, A6o:0.0393, 76s:0.0169, 77:0.1167, Q7o:0.0001, A7o:0.0578, 86s:0.0064, 87s:0.0057, 88:0.0067, Q8o:0.0003, 97s:0.0012, 98s:0.0003, T4s:0.0005, T5s:0.0170, T6s:0.0051, T8s:0.0001, TT:0.2593, KTo:0.0001, ATo:0.0171, J6s:0.0086, J7s:0.0003, J9s:0.0002, JJ:0.0062, Q2s:0.0423, Q3s:0.3274, Q4s:0.0052, Q5s:0.0029, Q6s:0.0078, Q7s:0.0696, Q8s:0.0357, Q9s:0.1001, QTs:0.1395, QJs:0.0339, QQ:0.9456, KQo:0.7729, AQo:0.9923, K2s:0.0003, K3s:0.0007, K4s:0.0036, K5s:0.1091, K6s:0.0392, K8s:0.0012, KTs:0.0157, KJs:0.0005, KQs:0.7144, KK:0.9159, AKo:0.5597, A2s:0.2512, A3s:0.6711, A4s:0.5970, A5s:0.1630, A6s:0.5029, A7s:0.1420, A8s:0.0515, A9s:0.0190, ATs:0.0663, AQs:0.9570, AKs:0.7044, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, 42s:0.0020, 55:0.0066, 77:0.0011, A7o:0.0002, 86s:0.0002, 88:0.0022, T7s:0.0001, T8s:0.0003, TT:0.0575, JJ:0.0010, Q3s:0.0004, Q4s:0.0077, Q5s:0.0008, Q7s:0.0003, Q8s:0.0033, Q9s:0.0018, QTs:0.0050, QQ:0.0544, KQo:0.0340, AQo:0.0053, K2s:0.0019, K3s:0.0928, K4s:0.0001, K5s:0.0084, K7s:0.0001, K8s:0.0459, K9s:0.0038, KTs:0.0020, KJs:0.0008, KQs:0.2502, KK:0.0841, AKo:0.4403, A2s:0.0636, A3s:0.0028, A4s:0.0096, A5s:0.2637, A6s:0.1002, A8s:0.0014, ATs:0.0011, AQs:0.0089, AKs:0.2954"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "65s:0.0001, 77:0.0039, 88:0.0004, TT:0.0525, JJ:0.6685, QJs:0.0239, QQ:0.1794, KQo:0.0037, AQo:0.2641, KJs:0.0093, KQs:0.0179, KK:0.0017, AKo:0.1708, ATs:0.0001, AJs:0.0058, AQs:0.2813, AKs:0.2820, AA:0.6455"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0004, 77:0.0002, 88:0.0004, TT:0.0559, JJ:0.3315, Q2s:0.0001, QJs:0.0794, QQ:0.8206, KQo:0.0060, AQo:0.4405, K7s:0.0003, K9s:0.0034, KJs:0.3150, KQs:0.9804, KK:0.9983, AKo:0.8292, ATs:0.0001, AJs:0.4375, AQs:0.7179, AKs:0.7180, AA:0.3545"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0002, 92o:0.0002, Q2o:0.0054, K2o:0.0005, A2o:0.2732, 32s:0.0067, Q3o:0.0305, K3o:0.0086, A3o:0.0872, 42s:0.0036, 43s:0.0006, 44:0.0004, Q4o:0.1900, K4o:0.0003, A4o:0.1953, 54s:0.0704, 55:0.0274, Q5o:0.2089, K5o:0.0409, 64s:0.0024, 65s:0.0292, Q6o:0.0306, K6o:0.0046, A6o:0.0001, 72s:0.0019, 74s:0.0003, 75s:0.0001, 77:0.0036, Q7o:0.0548, A7o:0.0767, 82s:0.0039, 85s:0.0001, 88:0.0031, Q8o:0.0057, K8o:0.0137, A8o:0.0002, 95s:0.0029, 96s:0.0112, 97s:0.0003, Q9o:0.0011, K9o:0.0003, T2s:0.0001, T5s:0.0223, T8s:0.0047, TT:0.0059, QTo:0.0008, J2s:0.0003, J3s:0.0019, J6s:0.0060, J7s:0.0001, J8s:0.0042, JTs:0.0111, JJ:0.5166, QJo:0.0793, KJo:0.0164, AJo:0.0001, Q2s:0.0041, Q3s:0.2942, Q4s:0.1158, Q5s:0.6135, Q6s:0.1648, Q7s:0.0701, Q8s:0.3529, Q9s:0.2953, QTs:0.1920, QJs:0.1104, QQ, KQo:0.2280, AQo:0.9187, K2s:0.0662, K3s:0.0006, K5s:0.0007, K6s:0.0110, K7s:0.0003, K8s:0.0003, K9s:0.0001, KTs:0.0004, KJs:0.0003, KQs:0.9815, KK, AKo:0.9998, A2s:0.7284, A3s:0.5073, A5s:0.4864, A6s:0.1526, A7s:0.6605, A8s:0.2653, A9s:0.2339, ATs:0.0685, AJs:0.9820, AQs:0.9899, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9910, 33:0.9560, 43s:0.0674, 44:0.9674, 52s:0.0029, 53s:0.0606, 54s:0.5600, 55:0.6049, 62s:0.0003, 63s:0.0094, 64s:0.1131, 65s:0.5412, 66:0.8919, 73s:0.0001, 74s:0.0012, 75s:0.1062, 76s:0.1611, 77:0.9719, 85s:0.0089, 86s:0.0320, 87s:0.3364, 88:0.8360, 95s:0.0306, 96s:0.5382, 97s:0.0175, 98s:0.4142, 99:0.8723, T7s:0.1912, T8s:0.1883, T9s:0.1001, TT:0.7217, J2s:0.0007, J8s:0.0714, JTs:0.1353, JJ:0.9646, Q3s:0.0001, Q4s:0.1899, Q5s:0.0024, Q7s:0.0041, Q8s:0.0185, QTs:0.5691, QJs:0.1252, QQ:0.0187, KQo:0.2919, AQo:0.0207, K2s:0.0625, K4s:0.0698, K5s:0.4823, K6s:0.0260, K7s:0.0971, K8s:0.2814, K9s:0.6917, KTs:0.3133, KJs:0.0084, KQs:0.0099, KK:0.0003, AKo:0.0020, A2s:0.4905, A3s:0.0271, A4s:0.3455, A5s:0.3664, A6s:0.0399, A7s:0.6400, A8s:0.0047, A9s:0.7769, ATs:0.7139, AJs:0.7953, AQs:0.0045, AKs:0.0001, AA:0.0001"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.1330, A2o:0.1726, 32s:0.0011, 33:0.0073, Q3o:0.0054, K3o:0.0011, A3o:0.2504, 42s:0.0002, Q4o:0.0452, K4o:0.0075, A4o:0.1975, 54s:0.0850, 55:0.3805, Q5o:0.1088, A5o:0.1554, 63s:0.0001, 64s:0.0003, 65s:0.0002, 66:0.0567, K6o:0.0001, A6o:0.0001, 74s:0.0043, 75s:0.0371, 76s:0.0091, 77:0.0011, Q7o:0.0220, K7o:0.0209, A7o:0.0006, 88:0.1385, Q8o:0.0029, K8o:0.0040, 92s:0.0006, 96s:0.0075, 97s:0.0013, 98s:0.0009, 99:0.0169, A9o:0.0070, T8s:0.0005, T9s:0.0017, TT:0.0253, QTo:0.0036, ATo:0.0013, J7s:0.0028, Q2s:0.1542, Q3s:0.5480, Q4s:0.1514, Q5s:0.1833, Q6s:0.0039, Q7s:0.1077, Q9s:0.2925, QTs:0.0007, QQ:0.4153, KQo:0.1645, AQo:0.9754, K4s:0.2606, K5s:0.0373, K6s:0.1241, K7s:0.0033, K8s:0.1340, K9s:0.0030, KTs:0.0224, KJs:0.0109, KQs:0.3846, KK:0.9790, AKo:0.7594, A2s:0.0883, A3s:0.1401, A4s:0.3235, A5s:0.4037, A6s:0.2982, A7s:0.1124, A8s:0.0017, A9s:0.0077, ATs:0.0353, AJs:0.0188, AQs:0.6623, AKs:0.7050, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0011, 63s:0.0060, 65s:0.0070, 77:0.0001, 88:0.0172, 95s:0.0002, 96s:0.0030, 99:0.0807, T7s:0.0001, TT:0.1012, J8s:0.0015, Q7s:0.0003, Q9s:0.0002, QTs:0.0006, QQ:0.5657, KQo:0.3459, AQo:0.0008, K2s:0.0724, K4s:0.0220, K5s:0.0141, K6s:0.0156, K7s:0.0246, K8s:0.0035, KTs:0.0325, KJs:0.0210, KQs:0.6027, KK:0.0208, AKo:0.2384, A2s:0.0039, A3s:0.0131, A4s:0.1048, A5s:0.0008, A6s:0.0841, A7s:0.0070, A8s:0.0974, A9s:0.0043, ATs:0.0137, AJs:0.0122, AQs:0.3275, AKs:0.2948"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "4bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0053, 55:0.1480, 65s:0.0562, 66:0.0014, 77:0.0596, A7o:0.0140, 99:0.0002, T8s:0.0001, T9s:0.0016, TT:0.0120, ATo:0.0005, JJ:0.0003, QTs:0.0007, QQ:0.4531, AQo:0.1077, K8s:0.0021, KTs:0.0018, KJs:0.0045, KQs:0.2774, KK:0.2992, AKo:0.0266, A2s:0.0045, A3s:0.0538, A6s:0.0106, A7s:0.0007, A8s:0.3126, A9s:0.0088, AJs:0.0781, AQs:0.8230, AKs:0.0553, AA:0.0276"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0031, A4o:0.0052, 55:0.0123, A5o:0.0429, 66:0.1017, A6o:0.0008, 76s:0.0081, 87s:0.0008, 88:0.0397, A8o:0.0362, 98s:0.0038, 99:0.0183, TT:0.0256, KTo:0.0033, ATo:0.0286, J9s:0.0002, KJo:0.1545, AJo:0.0002, Q7s:0.0027, Q8s:0.0006, QTs:0.0001, QJs:0.0001, QQ:0.0219, KQo:0.0027, AQo:0.0067, K3s:0.0232, K4s:0.0703, K6s:0.0055, K7s:0.0009, K8s:0.0968, K9s:0.0221, KTs:0.0135, KJs:0.0309, KQs:0.0202, KK:0.0392, AKo:0.0246, A2s:0.0244, A3s:0.2267, A4s:0.3234, A5s:0.0103, A6s:0.0341, A7s:0.1035, A8s:0.0078, A9s:0.0083, AJs:0.0737, AQs:0.0002, AKs:0.2972, AA:0.6513"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "44:0.0020, A4o:0.0002, 66:0.0027, A7o:0.0001, 87s:0.0003, 88:0.0006, 98s:0.0077, A9o:0.0052, T8s:0.0198, TT:0.0001, KTo:0.1418, ATo:0.0001, J8s:0.0017, JTs:0.0002, JJ:0.0078, KJo:0.1422, QJs:0.0001, K3s:0.4424, K4s:0.0705, K6s:0.0934, K7s:0.3170, K8s:0.4974, K9s:0.0025, KTs:0.0786, KJs:0.0030, KQs:0.0705, KK:0.6504, AKo:0.0161, A2s:0.0105, A3s:0.0239, A4s:0.0143, A5s:0.0105, A6s:0.0192, A7s:0.0329, A8s:0.0692, ATs:0.0001, AJs:0.0081, AKs:0.0495, AA:0.3199"
      },
      {
        "action": "4bet 62.25bb",
        "min": 0.0001,
        "range": "55:0.3101, A5o:0.0955, 65s:0.0008, 66:0.2624, A6o:0.0004, 76s:0.0004, 87s:0.0045, 88:0.0022, A8o:0.0017, 98s:0.0786, 99:0.0687, T8s:0.0004, TT:0.1017, ATo:0.0014, JTs:0.0019, AJo:0.0057, Q9s:0.0008, QQ:0.0021, K3s:0.0019, K6s:0.0415, K7s:0.1253, K8s:0.1196, K9s:0.1580, KTs:0.6635, KJs:0.0075, KK:0.0112, AKo:0.9312, A2s:0.3971, A3s:0.2544, A4s:0.1806, A5s:0.3941, A6s:0.4345, A7s:0.1054, A8s:0.4596, A9s:0.0392, AJs:0.1821, AQs:0.0001, AKs:0.5939, AA:0.0012"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1869, AJs:0.0017, AQs:0.3701"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0108, TT:0.0338, JJ:0.0728, QQ:0.1275, KK:0.0044, AKo:0.1350, AJs:0.0016, AQs:0.2508, AKs:0.0842"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@62.25",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 76s:0.0001, 77:0.0001, 88:0.0005, 99:0.1265, TT:0.0239, J8s:0.0005, JTs:0.0001, JJ:0.0171, QJo:0.0001, KJo:0.0001, AJo:0.0001, Q8s:0.0001, Q9s:0.0002, QTs:0.0001, QJs:0.0001, QQ:0.5371, K4s:0.0001, K7s:0.0001, KTs:0.0001, KJs:0.0001, KQs:0.0005, KK:0.9986, AKo:0.2305, A3s:0.0001, A5s:0.0007, A6s:0.0004, A8s:0.0001, A9s:0.0002, ATs:0.0006, AJs:0.0002, AQs:0.0005, AKs:0.4329, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@62.25",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0140, JJ:0.0785, QQ:0.2618, KK:0.0044, AKo:0.0363, AKs:0.0623"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "87s:0.0001, JJ:0.0001, QQ:0.0104, KJs:0.0001, KQs:0.0001, KK:0.1300, A6s:0.0001, A7s:0.0349, ATs:0.0135, AJs:0.0007, AQs:0.1569, AKs:0.0040, AA:0.0386"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0028, A5o:0.0099, 65s:0.0006, 66:0.0089, 76s:0.0002, A7o:0.0494, 87s:0.0008, 88:0.0075, A8o:0.0185, A9o:0.1355, T7s:0.0007, T8s:0.0066, T9s:0.0030, TT:0.0004, ATo:0.0725, JTs:0.0035, JJ:0.0029, AJo:0.0028, Q7s:0.0035, Q9s:0.0105, QTs:0.0002, QQ:0.0108, AQo:0.0017, K5s:0.0106, K8s:0.0186, K9s:0.0009, KTs:0.0001, KJs:0.0094, KK:0.0126, AKo:0.0213, A2s:0.1594, A3s:0.1103, A4s:0.0783, A5s:0.0099, A6s:0.0922, A7s:0.1109, A8s:0.0929, A9s:0.0138, ATs:0.0523, AJs:0.1325, AQs:0.1136, AKs:0.0149, AA:0.5792"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0208, 99:0.0031, A9o:0.0280, ATo:0.0490, JJ:0.0011, AJo:0.0168, QQ:0.0014, K6s:0.0002, K8s:0.0117, KTs:0.0005, KJs:0.0221, KK:0.0001, AKo:0.0029, A2s:0.1430, A3s:0.0669, A4s:0.0072, A5s:0.0032, A6s:0.0008, A7s:0.0333, A8s:0.0023, A9s:0.2373, ATs:0.0803, AJs:0.0363, AQs:0.0008, AKs:0.0004, AA:0.3816"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "87s:0.0075, 88:0.0390, 99:0.0073, T9s:0.0001, JJ:0.0022, QTs:0.0005, K3s:0.0008, K5s:0.0002, K8s:0.0002, KTs:0.0009, KJs:0.0005, KK:0.8570, AKo:0.9680, A3s:0.3073, A4s:0.5622, A5s:0.9155, A6s:0.0671, A7s:0.0557, A9s:0.0047, ATs:0.0001, AJs:0.2081, AQs:0.0001, AKs:0.9778, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0682, KQs:0.0003, ATs:0.0003, AJs:0.0007, AQs:0.0998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0009, 88:0.0024, 99:0.0003, TT:0.0913, JJ:0.2117, QQ:0.2697, KK:0.0044, AKo:0.1350, ATs:0.0006, AJs:0.0001, AQs:0.2894, AKs:0.0842"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 35.46bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0148, A5o:0.0010, 65s:0.0029, 66:0.0168, 87s:0.0045, 88:0.0001, A8o:0.0002, 97s:0.0008, 98s:0.0007, 99:0.0001, A9o:0.0001, T8s:0.0031, T9s:0.0049, TT:0.0008, ATo:0.0001, J8s:0.0060, J9s:0.0003, JTs:0.0029, JJ:0.1360, QJo:0.0003, Q7s:0.0037, Q8s:0.0001, Q9s:0.0002, QTs:0.0002, QJs:0.0250, QQ:0.0117, AQo:0.0001, K4s:0.0013, K5s:0.0046, K6s:0.0003, K7s:0.0115, K8s:0.0011, KTs:0.0665, KJs:0.0096, KQs:0.0064, KK:0.0818, AKo:0.0370, A2s:0.0064, A3s:0.3364, A4s:0.0569, A5s:0.0001, A6s:0.0112, A7s:0.0030, A8s:0.0085, A9s:0.0006, ATs:0.0007, AJs:0.0004, AQs:0.2439, AKs:0.1664, AA:0.1609"
      },
      {
        "action": "4bet 35.46bb",
        "min": 0.0001,
        "range": "44:0.2028, 55:0.0162, 65s:0.0001, 66:0.3058, 76s:0.0001, 77:0.2806, A7o:0.0001, 87s:0.0039, 88:0.1609, A8o:0.0004, 98s:0.0663, 99:0.4027, T8s:0.0002, T9s:0.0021, TT:0.5526, QTo:0.0001, KTo:0.0001, ATo:0.0002, J9s:0.0001, JTs:0.0038, JJ:0.8571, KJo:0.0001, AJo:0.0006, Q7s:0.0002, Q8s:0.0657, QJs:0.0048, QQ:0.9882, KQo:0.0001, AQo:0.0002, K4s:0.0004, K5s:0.0005, K6s:0.0003, K7s:0.0070, K8s:0.0001, KTs:0.0062, KJs:0.0846, KQs:0.0070, KK:0.9182, AKo:0.9615, A2s:0.0007, A3s:0.4099, A4s:0.0913, A5s:0.0003, A6s:0.0032, A7s:0.0819, A8s:0.0120, A9s:0.0015, ATs:0.1276, AJs:0.0355, AQs:0.2912, AKs:0.8071, AA:0.8391"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.61bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0014, 66:0.0036, 88:0.0040, 99:0.0073, TT:0.0060, JJ:0.0687, AJs:0.0038, AQs:0.2820"
      },
      {
        "action": "4bet 17.61bb",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0188, 77:0.0006, 88:0.0205, 99:0.0248, TT:0.0052, JJ:0.4704, QQ:0.3379, KK:0.0044, AKo:0.1350, AJs:0.0001, AQs:0.2232, AKs:0.0842"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 35.46bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0203, 77:0.0165, 88:0.0007, 97s:0.0001, 98s:0.0001, 99:0.0149, TT:0.2399, J8s:0.0005, JJ:0.0269, QJs:0.0001, QQ:0.6122, KQo:0.0001, K6s:0.0002, K8s:0.0002, KTs:0.0002, KJs:0.0002, KK:0.1558, AKo:0.0582, A5s:0.0021, A9s:0.0001, AJs:0.0001, AQs:0.0302, AKs:0.0049, AA:0.3809"
      },
      {
        "action": "4bet 35.46bb",
        "min": 0.0001,
        "range": "55:0.0017, A5o:0.0001, 65s:0.0002, 66:0.0435, 77:0.0008, 88:0.0004, A8o:0.0001, 99:0.0033, T8s:0.0003, TT:0.0751, ATo:0.0001, J8s:0.0004, JTs:0.0001, JJ:0.3273, QTs:0.0001, QJs:0.0008, QQ:0.3877, K6s:0.0002, K8s:0.0012, K9s:0.0001, KQs:0.0001, KK:0.8442, AKo:0.9396, A3s:0.0006, A5s:0.0025, A6s:0.0001, A9s:0.0001, ATs:0.0002, AJs:0.0001, AQs:0.0516, AKs:0.9946, AA:0.6191"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@17.61",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0067, 77:0.0004, 88:0.0075, 99:0.0631, TT:0.0846, JJ:0.4722, QQ:0.3379, KK:0.0044, AKo:0.1350, AQs:0.2612, AKs:0.0842"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "4bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0176, 65s:0.0114, 66:0.2663, 77:0.4908, 87s:0.0468, 88:0.0339, A8o:0.0005, 97s:0.0001, 99:0.4159, T7s:0.0024, TT:0.0560, QTo:0.0001, ATo:0.0002, J9s:0.0034, JJ:0.0007, Q6s:0.0012, Q8s:0.0007, Q9s:0.0055, QTs:0.1649, QQ:0.5179, AQo:0.3898, K3s:0.0001, K4s:0.0001, K5s:0.0051, K6s:0.0003, K7s:0.0109, K8s:0.0029, KTs:0.2799, KJs:0.0105, KQs:0.0645, KK:0.1445, AKo:0.0197, A2s:0.0065, A3s:0.0045, A4s:0.2052, A5s:0.4977, A6s:0.0004, A7s:0.0218, A8s:0.1127, A9s:0.0006, ATs:0.0001, AJs:0.0071, AQs:0.5091, AKs:0.2936"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A4o:0.0642, A5o:0.1129, 66:0.0029, A6o:0.0002, 76s:0.0012, A7o:0.1725, 88:0.0026, A8o:0.0440, A9o:0.0221, T7s:0.0180, T9s:0.0209, TT:0.0005, KTo:0.0102, ATo:0.0405, JJ:0.0079, KJo:0.0151, AJo:0.0566, Q6s:0.0001, Q8s:0.0002, Q9s:0.0012, QQ:0.0003, AQo:0.0002, K3s:0.0973, K4s:0.3288, K5s:0.1012, K6s:0.3976, K7s:0.0326, K8s:0.1476, K9s:0.0038, KTs:0.0340, KJs:0.2012, KQs:0.0013, KK:0.3270, AKo:0.1134, A2s:0.2729, A3s:0.0853, A4s:0.0140, A5s:0.0201, A6s:0.1717, A7s:0.0851, A8s:0.0645, A9s:0.1599, ATs:0.2329, AJs:0.1704, AQs:0.0809, AKs:0.1767, AA:0.9961"
      },
      {
        "action": "4bet 53.32bb",
        "min": 0.0001,
        "range": "44:0.0065, A4o:0.0004, 55:0.0600, 65s:0.0067, 66:0.0025, A7o:0.0284, 88:0.0199, A8o:0.0344, 97s:0.0002, 98s:0.0031, 99:0.0619, A9o:0.0022, T7s:0.0001, T8s:0.0082, T9s:0.0098, TT:0.2413, KTo:0.0201, ATo:0.0014, J9s:0.0001, JTs:0.0015, JJ:0.0456, KJo:0.0074, AJo:0.0167, QTs:0.0288, QQ:0.0008, AQo:0.0004, K4s:0.2587, K5s:0.2841, K6s:0.2810, K7s:0.3533, K8s:0.0104, K9s:0.0164, KTs:0.2312, KJs:0.0155, KQs:0.0005, KK:0.5284, AKo:0.8645, A2s:0.2910, A3s:0.3717, A4s:0.1311, A5s:0.2793, A6s:0.2564, A7s:0.2068, A8s:0.0941, A9s:0.1425, ATs:0.0464, AJs:0.1610, AQs:0.1132, AKs:0.5275, AA:0.0039"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, 65s:0.0004, 66:0.0549, 77:0.0024, 88:0.0757, 99:0.0088, TT:0.0045, JJ:0.0712, QQ:0.1280, ATs:0.0003, AJs:0.0038, AQs:0.6623"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0041, 99:0.0003, TT:0.0132, JJ:0.0105, QQ:0.2098, KK:0.0044, AKo:0.1350, A9s:0.0002, ATs:0.0054, AJs:0.0194, AQs:0.3088, AKs:0.0842"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@53.32",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0007, A5o:0.0002, 66:0.0004, 76s:0.0002, 77:0.0055, 88:0.1743, A8o:0.0001, 99:0.1177, A9o:0.0002, T9s:0.0002, TT:0.3027, KTo:0.0001, ATo:0.0001, J8s:0.0001, J9s:0.0005, JJ:0.0632, KJo:0.0001, AJo:0.0002, Q7s:0.0002, Q8s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.6537, KQo:0.0001, AQo:0.0004, K4s:0.0009, K5s:0.0002, K8s:0.0003, K9s:0.0002, KTs:0.0010, KQs:0.0002, KK, AKo:0.9260, A3s:0.0003, A4s:0.0017, A8s:0.0017, A9s:0.0004, ATs:0.0005, AJs:0.0001, AQs:0.0002, AKs:0.8884, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@53.32",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0130, QQ:0.2681, KK:0.0044, AKo:0.1305, AKs:0.0840"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 11.7bb",
      "4bet 20bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.7bb",
        "min": 0.0001,
        "range": "A3o:0.1246, K4o:0.0006, A4o:0.0723, A5o:0.0230, 66:0.0011, A6o:0.0112, 77:0.0259, A7o:0.0057, 88:0.0458, K8o:0.0001, A8o:0.0114, 99:0.0223, K9o:0.0002, A9o:0.0284, TT:0.0619, ATo:0.1035, JJ:0.0001, AJo:0.1800, QQ:0.0051, AQo:0.0004, K3s:0.0115, K4s:0.0037, K7s:0.0056, K8s:0.0006, K9s:0.0238, KJs:0.0004, KQs:0.0011, KK:0.1031, AKo:0.0092, A2s:0.0700, A3s:0.0971, A4s:0.0567, A5s:0.0598, A6s:0.0876, A7s:0.0200, A8s:0.0003, A9s:0.0590, ATs:0.1535, AJs:0.0030, AKs:0.1399, AA:0.9756"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "K2o:0.0018, K3o:0.0019, 66:0.0001, 77:0.0069, 88:0.0153, TT:0.0090, K3s:0.0012, K4s:0.0107, K5s:0.0029, K6s:0.0003, K7s:0.0074, K9s:0.0025, KTs:0.0073, KJs:0.0058, KQs:0.0004, KK:0.0440, AKo:0.0074, A2s:0.0002, A4s:0.0005, A5s:0.0002, A7s:0.0001, AJs:0.0006, AKs:0.1098, AA:0.0242"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.1776, 77:0.0606, 99:0.0213, QQ:0.0001, KK:0.8529, AKo:0.9834, A2s:0.1221, A3s:0.0943, A4s:0.3124, A5s:0.6985, A6s:0.0283, A8s:0.0010, ATs:0.0016, AJs:0.0002, AKs:0.7503, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 55:0.1436, 66:0.0007, 77:0.0019, 88:0.1263, 99:0.0282, TT:0.0544, JJ:0.9951, QQ, AQo:0.2589, KK, AKo, ATs:0.0001, AJs:0.0004, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "4bet 71.18bb"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "K2o:0.0547, K3o:0.0118, K4o:0.0027, 55:0.0002, K5o:0.0489, 77:0.0002, K8o:0.0186, 99:0.0001, K9o:0.0246, KTo:0.0339, JJ:0.0009, KJo:0.0057, QQ:0.7810, KQo:0.4235, K2s:0.0509, K3s:0.0397, K4s:0.1086, K5s:0.3633, K6s:0.2056, K7s:0.1757, K8s:0.3230, K9s:0.4289, KTs:0.0310, KJs:0.1564, KQs:0.4510, KK:0.9110, AKo:0.5012, A2s:0.0001, A4s:0.0114, A5s:0.0007, A6s:0.0002, A8s:0.0001, A9s:0.0002, ATs:0.0928, AQs:0.0238, AKs:0.4078, AA:0.9953"
      },
      {
        "action": "4bet 71.18bb",
        "min": 0.0001,
        "range": "55:0.0117, T6s:0.0001, QQ:0.0001, AQo:0.0007, K5s:0.0001, K7s:0.0005, K9s:0.0005, KTs:0.0004, KK:0.0890, AKo:0.4988, A2s:0.0061, A3s:0.1068, A4s:0.0504, A5s:0.0436, A6s:0.0209, A7s:0.0007, A8s:0.0001, A9s:0.0020, ATs:0.0200, AKs:0.5922, AA:0.0047"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "K2o:0.0038, K3o:0.0732, K4o:0.0001, A4o:0.0001, K5o:0.0110, 66:0.0007, K6o:0.0406, K7o:0.0510, K8o:0.0566, A8o:0.0001, K9o:0.0598, T8s:0.0001, TT:0.0002, KTo:0.1130, JJ:0.0004, KJo:0.0933, QQ:0.0659, KQo:0.0093, K2s:0.2830, K4s:0.4887, K5s:0.2594, K6s:0.1198, K7s:0.3103, K8s:0.1744, K9s:0.3558, KTs:0.1584, KJs:0.1349, KQs:0.0005, KK:0.9647, AKo:0.5719, A2s:0.0001, A5s:0.0005, A6s:0.0004, A9s:0.0025, ATs:0.0026, AJs:0.0007, AQs:0.0004, AKs:0.8669, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, QQ:0.0001, K9s:0.0003, KQs:0.0001, KK:0.0353, AKo:0.4280, A5s:0.0006, AJs:0.0002, AKs:0.1331"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 35.46bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0035, 55:0.3775, 65s:0.1859, 66:0.1584, 76s:0.1247, 77:0.2951, 87s:0.0142, 88:0.3377, 97s:0.0021, 98s:0.0001, 99:0.2138, T8s:0.0079, T9s:0.0306, TT:0.1686, J8s:0.0001, JTs:0.0341, JJ:0.0595, QQ:0.2287, AQo:0.5436, K5s:0.0024, K7s:0.0359, K8s:0.0254, K9s:0.0126, KTs:0.1468, KJs:0.2969, KQs:0.4408, A6s:0.0001, A7s:0.0013, A8s:0.0118, A9s:0.0682, ATs:0.0005, AJs:0.0002, AQs:0.9995, AKs:0.0003, AA:0.0078"
      },
      {
        "action": "4bet 35.46bb",
        "min": 0.0001,
        "range": "44:0.0011, 55:0.0256, 65s:0.0001, 66:0.0922, 76s:0.0001, 77:0.3629, 87s:0.0005, 88:0.5176, 98s:0.0001, 99:0.4398, A9o:0.0001, T8s:0.0003, TT:0.7700, ATo:0.0110, J9s:0.0002, JTs:0.0014, JJ:0.9394, AJo:0.0021, QQ:0.7713, AQo:0.0028, K3s:0.0095, K4s:0.0015, K5s:0.1070, K6s:0.0703, K7s:0.0343, K8s:0.0523, K9s:0.3831, KTs:0.8509, KJs:0.7013, KQs:0.5557, KK, AKo, A2s:0.9621, A3s:0.9994, A4s, A5s, A6s:0.9971, A7s:0.8429, A8s:0.9617, A9s:0.7416, ATs:0.9994, AJs:0.9997, AQs:0.0005, AKs:0.9997, AA:0.9922"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@35.46",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.4586, QQ:0.5613, KK:0.9956, AKo:0.2779, AKs:0.8798, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@18",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 62.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, K6s:0.0001, KK:0.3140, A4s:0.0231, AJs:0.1377, AKs:0.0561, AA:0.0169"
      },
      {
        "action": "5bet 62.25bb",
        "min": 0.0001,
        "range": "66:0.0056, A7o:0.0009, 88:0.0001, 99:0.0454, T9s:0.0005, TT:0.0114, ATo:0.0004, JJ:0.0194, AJo:0.0001, Q8s:0.0004, QTs:0.0001, K5s:0.0001, K7s:0.0002, KTs:0.0003, KK:0.0053, AKo:0.9318, A2s:0.0279, A3s:0.0105, A4s:0.1388, A5s:0.4017, A6s:0.0061, A7s:0.0433, A8s:0.2414, A9s:0.0426, ATs:0.0616, AJs:0.1127, AQs:0.0284, AKs:0.9090, AA:0.9831"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@18",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0146, AQo:0.0001, KK:0.0552, AKo:0.0002, A2s:0.0001, A5s:0.0018, ATs:0.0004, AJs:0.0208, AKs:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.2644, QQ:0.5029, AQo:0.0001, KK:0.9404, AKo:0.2778, A2s:0.0186, A3s:0.0985, A4s:0.0484, A5s:0.0331, A6s:0.0279, A8s:0.0027, A9s:0.0001, ATs:0.0002, AJs:0.0016, AKs:0.8796, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, A5o:0.0001, A7o:0.0001, 88:0.0001, A8o:0.0001, 97s:0.0002, 98s:0.0001, 99:0.0001, T8s:0.0003, T9s:0.0001, TT:0.0135, KTo:0.0001, JJ:0.0178, KJo:0.0005, AJo:0.0002, Q7s:0.0001, Q8s:0.0002, Q9s:0.0001, QTs:0.0002, QJs:0.0001, QQ:0.0046, K4s:0.0001, K5s:0.0001, K6s:0.0002, K7s:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0001, KJs:0.0002, KQs:0.0002, KK:0.9997, AKo:0.1252, A2s:0.0001, A3s:0.0002, A4s:0.0003, A5s:0.0001, A6s:0.0002, A8s:0.0001, A9s:0.0002, ATs:0.0007, AJs:0.0015, AQs:0.0013, AKs:0.6096, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@62.25",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.2696, QQ:0.2788, KQo:0.0001, AQo:0.0001, KJs:0.0004, KQs:0.0001, KK:0.9956, AKo:0.2770, A3s:0.0001, A5s:0.0001, A6s:0.0001, A8s:0.0001, A9s:0.0001, AJs:0.0004, AKs:0.8721, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@18",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "98s:0.0001, QQ:0.0001, KK:0.1074, A3s:0.0500, AKs:0.0370, AA:0.0770"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, A4o:0.0012, 55:0.0006, A5o:0.0351, 87s:0.0004, A9o:0.0125, ATo:0.0032, J9s:0.0007, AJo:0.0013, AQo:0.0002, K6s:0.0005, KK:0.0088, AKo:0.8743, A2s:0.0146, A3s:0.0776, A4s:0.3096, A5s:0.5492, A6s:0.0525, A7s:0.0396, A8s:0.3099, A9s:0.0498, ATs:0.0025, AJs:0.0101, AQs:0.0038, AKs:0.8290, AA:0.9230"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@18",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0013, KK:0.0137, A3s:0.0003, A5s:0.0001, A7s:0.0001, A8s:0.0001, ATs:0.0006, AJs:0.0282, AQs:0.0001, AKs:0.0015, AA:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.1445, QQ:0.5509, AQo:0.0088, KK:0.9819, AKo:0.2780, A3s:0.0420, A4s:0.0090, A5s:0.1654, A6s:0.0029, A7s:0.0003, A8s:0.0005, A9s:0.0009, ATs:0.0037, AJs:0.0123, AKs:0.8783, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@71.18",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 88:0.0003, 99:0.0004, QTo:0.0001, JJ:0.0001, AJo:0.0002, QTs:0.0001, QQ:0.0006, AQo:0.0001, K4s:0.0001, K6s:0.0004, KJs:0.0001, KQs:0.0004, KK:0.9845, AKo:0.0002, A4s:0.0001, A7s:0.0001, A9s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0416, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@71.18",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0513, QQ:0.1132, AQo:0.0001, KJs:0.0001, KQs:0.0001, KK:0.9956, AKo:0.2767, A2s:0.0001, A5s:0.0001, A7s:0.0001, A9s:0.0001, AJs:0.0001, AKs:0.8736, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 35.46bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.8081, KK:0.9430, AKo:0.1158, A9s:0.0002, AKs:0.5610, AA:0.7492"
      },
      {
        "action": "5bet 35.46bb",
        "min": 0.0001,
        "range": "QQ:0.1307, KK:0.0570, AKo:0.0217, A3s:0.0001, A9s:0.0002, AQs:0.0001, AKs:0.2983, AA:0.2508"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@17.61",
    "heroPos": "HJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.4608, QQ:0.5613, AQo:0.9972, K9s:0.0001, KTs:0.0023, KJs:0.3220, KQs:0.0222, KK:0.9956, AKo:0.2780, A2s:0.0018, A3s:0.1618, A4s:0.3839, A5s:0.6065, A6s:0.0014, A7s:0.0177, A8s:0.0606, A9s:0.0042, ATs:0.0091, AJs:0.1273, AQs:0.0001, AKs:0.8798, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@11.7",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 76s:0.0002, 77:0.0002, 98s:0.0002, TT:0.0003, JJ:0.0033, Q8s:0.0002, Q9s:0.0002, QTs:0.0003, QJs:0.0001, QQ:0.0026, AQo:0.0183, K3s:0.0001, K6s:0.0117, K7s:0.0001, KQs:0.0001, KK:0.2620, AKo:0.0120, A2s:0.0001, A3s:0.0042, A4s:0.0002, A5s:0.0002, A6s:0.0001, A8s:0.0018, A9s:0.1156, ATs:0.0854, AJs:0.0520, AQs:0.2756, AKs:0.0180, AA:0.1657"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "A4o:0.0391, A5o:0.0321, 76s:0.0001, 77:0.0001, A7o:0.1795, 87s:0.0016, 99:0.0001, A9o:0.0011, T7s:0.0002, T8s:0.0001, TT:0.0001, J8s:0.0003, JJ:0.0351, AJo:0.2426, Q8s:0.0001, Q9s:0.0029, QQ:0.0006, AQo:0.0310, K3s:0.0004, K6s:0.0004, KK:0.0001, AKo:0.6574, A2s:0.4680, A3s:0.6318, A4s:0.7462, A5s:0.5220, A6s:0.4632, A7s:0.1986, A8s:0.6256, A9s:0.3307, ATs:0.1332, AJs:0.6181, AQs:0.1868, AKs:0.8595, AA:0.8343"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@11.7",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1704, AJo:0.0048, QQ:0.2015, AQo:0.0443, KJs:0.0018, KQs:0.0004, KK:0.1001, AKo:0.0678, A2s:0.0099, A3s:0.1136, A4s:0.0094, A5s:0.0663, A7s:0.0448, A8s:0.0374, A9s:0.2552, ATs:0.0133, AJs:0.2546, AQs:0.0001, AKs:0.3944, AA:0.2455"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0003, A5o:0.0012, A6o:0.0005, A7o:0.0002, JJ:0.0691, AJo:0.0020, QQ:0.1495, AQo:0.0512, KJs:0.0055, KK:0.8871, AKo:0.2101, A2s:0.1241, A3s:0.4460, A4s:0.1591, A5s:0.2611, A6s:0.1174, A7s:0.0756, A8s:0.0441, A9s:0.0215, ATs:0.0017, AJs:0.0083, AKs:0.4849, AA:0.7545"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@20",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 53.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0012, 66:0.0039, 76s:0.0005, 77:0.0005, 87s:0.0002, 88:0.0001, 97s:0.0006, 99:0.0024, A9o:0.0004, T8s:0.0026, T9s:0.0032, TT:0.0009, JTo:0.0006, QTo:0.0027, ATo:0.0003, J8s:0.0004, J9s:0.0007, JTs:0.0003, JJ:0.0017, KJo:0.0008, AJo:0.0002, Q6s:0.0002, Q7s:0.0002, Q8s:0.0008, Q9s:0.0002, QTs:0.0049, QJs:0.0004, QQ:0.0014, KQo:0.0001, AQo:0.0004, K3s:0.0004, K4s:0.0296, K5s:0.0001, K6s:0.0005, K7s:0.0042, KTs:0.0049, KJs:0.0102, KQs:0.0011, KK:0.0725, AKo:0.0010, A2s:0.0019, A3s:0.0017, A4s:0.0023, A5s:0.0057, A6s:0.0004, A7s:0.0001, A8s:0.0006, A9s:0.0005, ATs:0.0002, AJs:0.0084, AQs:0.0128, AKs:0.0494"
      },
      {
        "action": "5bet 53.32bb",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0001, 55:0.0246, A5o:0.0001, 66:0.0012, 76s:0.1360, 77:0.0014, A7o:0.0217, 87s:0.0004, 88:0.0013, 97s:0.0008, 98s:0.0018, 99:0.0002, A9o:0.0155, T8s:0.0028, T9s:0.0002, TT:0.0007, JTo:0.0002, QTo:0.0001, KTo:0.0001, ATo:0.0001, J8s:0.0281, J9s:0.0001, JTs:0.0001, JJ:0.0559, KJo:0.0033, AJo:0.0004, Q7s:0.0002, Q8s:0.0391, Q9s:0.0001, QTs:0.0351, QJs:0.0003, QQ:0.0015, KQo:0.0002, AQo:0.0001, K3s:0.0013, K4s:0.0048, K5s:0.0465, K6s:0.0947, K7s:0.0468, K8s:0.0429, K9s:0.0225, KTs:0.0012, KJs:0.0107, KQs:0.0013, KK:0.8635, AKo:0.3637, A2s:0.0003, A3s:0.0356, A4s:0.1408, A5s:0.0057, A6s:0.0858, A7s:0.5151, A8s:0.0060, A9s:0.0003, ATs:0.7369, AJs:0.1705, AQs:0.3837, AKs:0.6095, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@20",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, JJ:0.0088, QQ:0.0135, AQo:0.0027, KTs:0.0001, KJs:0.0038, KK:0.0233, AKo:0.0036, A2s:0.0029, A3s:0.0150, A4s:0.0023, A6s:0.0123, A7s:0.0004, A9s:0.0095, ATs:0.0001, AJs:0.0001, AKs:0.0313, AA:0.0129"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, A9o:0.0015, JJ:0.0665, QQ:0.1923, K2s:0.0002, K6s:0.0005, KJs:0.0012, KK:0.9723, AKo:0.2742, A2s:0.0448, A3s:0.2362, A4s:0.0545, A5s:0.2340, A6s:0.0003, A7s:0.0214, A8s:0.0272, A9s:0.0452, ATs:0.0002, AJs:0.0001, AKs:0.8425, AA:0.9871"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@53.32",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, TT:0.0005, JJ:0.0087, KQs:0.0001, KK, AKo:0.0001, A3s:0.0001, A7s:0.0001, AJs:0.0001, AKs:0.1759, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@53.32",
    "heroPos": "HJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0682, QQ:0.0848, KK:0.9956, AKo:0.2778, AKs:0.8791, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46",
    "heroPos": "CO",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.5881, KK, AKo:0.5753, AKs:0.7448, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46",
    "heroPos": "BTN",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0050, 66:0.0032, 77:0.0053, 88:0.0130, 99:0.0550, TT:0.1441, JJ:0.6242, QQ:0.9998, KK, AKo:0.8625, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46",
    "heroPos": "SB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "4bet 71.18bb"
    ],
    "bands": [
      {
        "action": "4bet 71.18bb",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.6442, 77:0.0746, TT:0.0650, JJ:0.5770, QQ:0.9945, KK, AKo:0.7667, AKs:0.9662, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46",
    "heroPos": "BB",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0004, TT:0.0001, QQ, KK, AKo:0.8522, AKs:0.9461, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0136, 99:0.2222, TT:0.7857, JJ:0.5818, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46|BB:4BET@62.25",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0004, 76s:0.0002, 77:0.0002, 88:0.0004, A8o:0.0001, 99:0.0002, A9o:0.0004, T9s:0.0004, TT:0.0008, QTo:0.0001, KTo:0.0001, ATo:0.0003, J9s:0.0004, JJ:0.0004, KJo:0.0001, AJo:0.0001, Q7s:0.0003, QTs:0.0001, QJs:0.0001, QQ:0.0153, KQo:0.0003, K4s:0.0005, K6s:0.0009, K7s:0.0002, K8s:0.0005, K9s:0.0001, KTs:0.0002, KJs:0.0002, KQs:0.0006, KK:0.2870, AKo:0.0009, A2s:0.0004, A3s:0.0006, A4s:0.0002, A5s:0.0002, A7s:0.0008, A8s:0.0018, A9s:0.0007, ATs:0.0008, AQs:0.0001, AKs:0.0028, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46|SB:4BET@71.18",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0002, 77:0.0001, A7o:0.0001, 88:0.0003, 99:0.0002, TT:0.0001, JJ:0.0004, KJo:0.0004, Q7s:0.0001, QTs:0.0004, QJs:0.0001, QQ:0.0009, K3s:0.0002, K5s:0.0001, K6s:0.0003, KTs:0.0010, KJs:0.0010, KQs:0.0002, KK:0.4754, A2s:0.0001, A4s:0.0002, A6s:0.0001, A9s:0.0002, AJs:0.0005, AQs:0.0001, AKs:0.0004, AA:0.9985"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46|BTN:CALL@17.61",
    "heroPos": "LJ",
    "eff": 17.86,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1509, 55:0.7184, A5o:0.0001, 66:0.6503, 76s:0.0001, 77:0.3082, 87s:0.0012, 88:0.0113, 98s:0.0001, 99:0.8262, T8s:0.0002, T9s:0.0009, TT:0.1825, KTo:0.0002, ATo:0.0002, J8s:0.0001, JTs:0.0002, JJ:0.3336, QJo:0.0001, Q7s:0.0002, Q8s:0.0001, Q9s:0.0041, QTs:0.0005, QJs:0.0032, QQ, KQo:0.0003, AQo:0.0008, K4s:0.0002, K5s:0.0001, K7s:0.0006, K8s:0.0006, KTs:0.0004, KJs:0.0006, KK, AKo:0.0009, A3s:0.0002, A6s:0.0002, A7s:0.0001, A8s:0.0012, A9s:0.0002, AJs:0.0013, AQs:0.0003, AKs:0.0449, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@35.46|CO:4BET@53.32",
    "heroPos": "LJ",
    "eff": 35.71,
    "stacks": [
      71.43,
      35.71,
      53.57,
      17.86,
      80.36,
      62.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 65s:0.0001, 66:0.0003, 76s:0.0001, 77:0.0014, 87s:0.0004, 88:0.0001, A8o:0.0006, A9o:0.0001, T7s:0.0001, T8s:0.0001, TT:0.0004, JTo:0.0001, QTo:0.0005, ATo:0.0009, J8s:0.0001, J9s:0.0005, JTs:0.0001, JJ:0.0001, KJo:0.0001, AJo:0.0014, QJs:0.0005, QQ:0.0015, KQo:0.0012, AQo:0.0003, K3s:0.0005, K5s:0.0004, K7s:0.0012, K8s:0.0003, K9s:0.0026, KTs:0.0001, KQs:0.0015, KK:0.8501, AKo:0.0034, A2s:0.0006, A3s:0.0011, A4s:0.0010, A6s:0.0116, A7s:0.0003, A8s:0.0009, ATs:0.0001, AJs:0.0006, AQs:0.0009, AKs:0.0051, AA"
      }
    ]
  }
];

export const PATTERNS = __normalizePatterns([
{
    id: "CLUB_MATCH_140_280_70_71_36_53_18_80_62 chase",
    label: "Club Match 140-280(70) 71-36-53-18-80-62 chase",
    tags: ["clubmatch", "6left"],
    questionBuilder: (hand) => ({ stacks: CLUB_MATCH_140_280_70_71_36_53_18_80_62_STACKS_BB }),
    spots: __attachFacingLineToState(CLUB_MATCH_140_280_70_71_36_53_18_80_62_STATE, CLUB_MATCH_140_280_70_71_36_53_18_80_62_FACING_PRESETS).map(__makeSpotFromState),
  }
]);
