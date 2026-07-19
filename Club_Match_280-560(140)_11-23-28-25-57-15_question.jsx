// ============================================================
// AUTO-GENERATED from Club_Match_280-560(140)_11-23-28-25-57-15.zip
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

// blinds: BB=56000 / SB=28000 / ante=14000
export const CLUB_MATCH_280_560_140_11_23_28_25_57_15_STACKS_BB = [
  11.61,
  23.21,
  28.57,
  25.0,
  57.14,
  15.18
];

export const CLUB_MATCH_280_560_140_11_23_28_25_57_15_FACING_PRESETS = [
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
    "id": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@14.93",
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
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@14.93",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "SB:OPEN@3.5|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@14.93",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|BB:3BET@5|BTN:4BET@11",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|BB:3BET@5|BTN:4BET@14.93",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "BB",
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BTN:4BET@11",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BB:4BET@11",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "BB",
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@9|BTN:4BET@16",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 16.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@9|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BB",
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@24.75|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BB:3BET@5|CO:4BET@11",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BB:3BET@5|CO:4BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|CO:4BET@11",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|CO:4BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|BB:4BET@11",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@9|CO:4BET@16",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 16.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@9|CO:4BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@28.32|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|CO:4BET@11",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|CO:4BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@8.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@8.5|CO:4BET@15",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@8.5|CO:4BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@8.5|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@24.75|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@24.75|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
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
    "id": "HJ:OPEN@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BB:3BET@5|HJ:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BB:3BET@5|HJ:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|HJ:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|HJ:4BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|BB:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@9|HJ:4BET@16",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 16.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@9|HJ:4BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@22.96|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 22.96
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|HJ:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|HJ:4BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@8.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@8.5|HJ:4BET@15",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@8.5|HJ:4BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@8.5|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@24.75|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@24.75|SB:CALL@24.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 24.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@28.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@8.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
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
    "id": "HJ:OPEN@2|CO:3BET@5|HJ:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|HJ:4BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BB:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|SB:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@11",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
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
    "id": "HJ:OPEN@2|CO:3BET@8.5|HJ:4BET@15",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5|HJ:4BET@22.96",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5|SB:4BET@15",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5|BTN:4BET@15",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8.5|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@28.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
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
    "id": "HJ:OPEN@2|CO:3BET@28.32|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@28.32|SB:CALL@27.82",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 27.82
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@28.32|BTN:CALL@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
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
    "id": "LJ:OPEN@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BB:3BET@5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BB:3BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6|BB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@9|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@14.93|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.93
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@8.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@8.5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@8.5|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@24.75|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@24.75|SB:CALL@24.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 24.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@8.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
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
    "id": "LJ:OPEN@2|CO:3BET@5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|SB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@8.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
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
    "id": "LJ:OPEN@2|CO:3BET@8.5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@8.5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@8.5|SB:4BET@15",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@8.5|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@8.5|BTN:4BET@15",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@8.5|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
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
    "id": "LJ:OPEN@2|CO:3BET@28.32|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@28.32|SB:CALL@27.82",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 27.82
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@28.32|BTN:CALL@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
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
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 9.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@22.96",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@8.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@8.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.5
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
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
    "id": "LJ:OPEN@2|HJ:3BET@5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@22.96",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@11",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
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
    "id": "LJ:OPEN@2|HJ:3BET@8.5|LJ:4BET@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|BB:4BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|SB:4BET@15",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|SB:4BET@22.96",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|BTN:4BET@15",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|CO:4BET@15",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 15.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@8.5|CO:4BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@22.96",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 22.96
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
    "id": "LJ:OPEN@2|HJ:3BET@22.96|BB:CALL@13.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 22.96
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 13.93
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@22.96|SB:CALL@22.46",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 22.96
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 22.46
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@22.96|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 22.96
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@22.96|CO:4BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 22.96
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
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
    "id": "LJ:OPEN@11.36|SB:CALL@10.86",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 10.86
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|SB:CALL@10.86|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 10.86
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|SB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|BTN:CALL@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|BTN:CALL@11.36|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|BTN:CALL@11.36|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:CALL@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 11.36
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:CALL@11.36|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:CALL@11.36|SB:3BET@21.71",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 21.71
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:CALL@11.36|SB:3BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:CALL@11.36|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:3BET@21.71",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 21.71
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:3BET@21.71|SB:4BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 21.71
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:3BET@21.71|BTN:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 21.71
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|CO:3BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|HJ:CALL@11.36",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 11.36
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
    "id": "LJ:OPEN@11.36|HJ:CALL@11.36|BB:3BET@14.93",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.93
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|HJ:CALL@11.36|SB:3BET@22.96",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|HJ:CALL@11.36|BTN:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|HJ:CALL@11.36|CO:3BET@21.71",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 21.71
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|HJ:CALL@11.36|CO:3BET@28.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 11.36
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.32
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@11.36|HJ:3BET@22.96",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 11.36
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 22.96
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  }
];

export const CLUB_MATCH_280_560_140_11_23_28_25_57_15_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "open 2bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "open 2bb",
        "min": 0.0001,
        "range": "A5o:0.0801, 66:0.0005, 77:0.0345, 88:0.8493, A8o:0.0719, 99:0.0080, A9o:0.6946, TT:0.2365, KTo:0.0524, ATo:0.7219, JJ, QJo:0.2760, KJo:0.9995, AJo:0.5441, QTs:0.0001, QQ, KQo, K9s:0.0156, KK, AKo:0.0307, A2s:0.0047, A3s:0.8279, A4s:0.0737, A6s, A7s:0.9673, A8s:0.8577, ATs:0.0625, AJs:0.9514, AQs:0.9971, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.4045, 77:0.9654, 88:0.1507, 99:0.9920, TT:0.7635, ATo:0.2781, JTs, AJo:0.4559, QTs, QJs, AQo, K9s:0.0001, KTs, KJs, KQs, AKo:0.9693, A2s:0.0005, A3s:0.1640, A4s:0.9260, A5s, A7s:0.0326, A8s:0.1423, A9s, ATs:0.9375, AJs:0.0486, AQs:0.0029, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "open 2bb"
    ],
    "bands": [
      {
        "action": "open 2bb",
        "min": 0.0001,
        "range": "A4o:0.0011, A5o:0.6682, 66:0.0001, 77:0.0376, A7o:0.0243, 88:0.4132, A8o:0.0148, 99:0.8647, A9o:0.3441, TT, QTo:0.0001, KTo:0.0010, ATo, JTs:0.0235, JJ, QJo:0.0534, KJo:0.8273, AJo, QTs, QJs, QQ, KQo, AQo, K3s:0.0007, K4s:0.0024, K5s:0.2827, K6s:0.8003, K7s:0.6561, K8s:0.1112, K9s:0.7829, KTs:0.9997, KJs, KQs, KK, AKo, A2s:0.9975, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "open 2bb"
    ],
    "bands": [
      {
        "action": "open 2bb",
        "min": 0.0001,
        "range": "A4o:0.0041, A5o:0.2369, 66:0.1217, 77:0.1585, A7o:0.0012, 88:0.4159, A8o:0.0067, 99:0.6787, A9o:0.1237, TT, KTo:0.1972, ATo:0.8129, JTs:0.0105, JJ, QJo:0.1979, KJo:0.8300, AJo, Q8s:0.0313, Q9s:0.0427, QTs:0.6123, QJs:0.9998, QQ, KQo, AQo, K2s:0.0001, K3s:0.0370, K4s:0.5092, K5s:0.7117, K6s:0.6834, K7s:0.6836, K8s:0.7113, K9s:0.8156, KTs, KJs:0.9998, KQs, KK, AKo, A2s:0.4325, A3s:0.9060, A4s, A5s, A6s, A7s, A8s, A9s:0.9997, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "open 2bb"
    ],
    "bands": [
      {
        "action": "open 2bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.4752, A6o:0.0007, 77:0.0104, A7o:0.0181, 88:0.1205, A8o:0.0025, 99:0.9126, A9o:0.1429, TT, QTo:0.1152, KTo:0.4506, ATo, JTs:0.0031, JJ, QJo:0.6132, KJo:0.9975, AJo, Q8s:0.1555, Q9s:0.0158, QTs:0.9996, QJs, QQ, KQo, AQo, K3s:0.0001, K4s:0.0147, K5s:0.6803, K6s:0.9299, K7s:0.7156, K8s:0.4133, K9s:0.6812, KTs, KJs, KQs, KK, AKo, A2s:0.4464, A3s:0.9986, A4s:0.9990, A5s:0.9995, A6s:0.9998, A7s:0.9998, A8s:0.9998, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "open 3.5bb",
      "open 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "94o:0.0002, 95o:0.0001, AA:0.0002"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "32o:0.2397, 42o:0.5188, 52o:0.9759, 62o, 72o, 82o, 92o:0.9576, T2o:0.2990, J2o:0.5087, Q2o:0.2498, K2o:0.0402, 63o:0.0421, 73o:0.9933, 83o, 93o:0.2761, T3o:0.2106, J3o:0.0004, Q3o:0.1433, K3o:0.0001, 74o:0.0002, 84o:0.7602, 94o:0.9810, T4o:0.4783, J4o:0.2887, Q4o:0.0327, K4o:0.0131, 55:0.0002, 95o:0.0046, T5o:0.9986, J5o:0.3588, Q5o:0.1058, K5o:0.3178, 66:0.2317, J6o:0.1549, 77:0.0280, Q7o:0.0011, 88:0.6519, K8o:0.3919, 99:0.0213, K9o:0.2740, TT, ATo:0.0006, JJ, AJo:0.6017, QQ, AQo:0.8046, KQs:0.0253, KK, AKo, A8s:0.1052, A9s:0.0007, ATs, AJs, AQs, AKs, AA:0.9998"
      },
      {
        "action": "open 14.93bb",
        "min": 0.0001,
        "range": "22, 32o:0.7603, 42o:0.4811, 52o:0.0241, 92o:0.0424, T2o:0.7010, J2o:0.4913, Q2o:0.7502, K2o:0.9598, A2o, 32s, 33, 43o, 53o, 63o:0.9579, 73o:0.0067, 93o:0.7239, T3o:0.7894, J3o:0.9996, Q3o:0.8567, K3o, A3o, 42s, 43s, 44, 54o, 64o, 74o:0.9998, 84o:0.2398, 94o:0.0188, T4o:0.5217, J4o:0.7113, Q4o:0.9673, K4o:0.9869, A4o, 52s, 53s, 54s, 55:0.9998, 65o, 75o, 85o, 95o:0.9953, T5o:0.0014, J5o:0.6412, Q5o:0.8942, K5o:0.6822, A5o, 62s, 63s, 64s, 65s, 66:0.7683, 76o, 86o, 96o, T6o, J6o:0.8451, Q6o, K6o, A6o, 72s, 73s, 74s, 75s, 76s, 77:0.9720, 87o, 97o, T7o, J7o, Q7o:0.9989, K7o, A7o, 82s, 83s, 84s, 85s, 86s, 87s, 88:0.3481, 98o, T8o, J8o, Q8o, K8o:0.6081, A8o, 92s, 93s, 94s, 95s, 96s, 97s, 98s, 99:0.9787, T9o, J9o, Q9o, K9o:0.7259, A9o, T2s, T3s, T4s, T5s, T6s, T7s, T8s, T9s, JTo, QTo, KTo, ATo:0.9994, J2s, J3s, J4s, J5s, J6s, J7s, J8s, J9s, JTs, QJo, KJo, AJo:0.3983, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, KQo, AQo:0.1954, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs:0.9747, A2s, A3s, A4s, A5s, A6s, A7s, A8s:0.8948, A9s:0.9993"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "open 0bb",
      "open 3.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "open 0bb",
        "min": 0.0001,
        "range": "22:0.8491, 62o:0.0001, J2o:0.0414, K2o:0.0002, A2o:0.2814, 32s:0.0105, 33:0.7005, 63o:0.0251, 83o:0.0001, 93o:0.1923, T3o:0.0003, J3o:0.0243, Q3o:0.1209, K3o:0.9956, A3o:0.5940, 42s:0.2769, 43s:0.3056, 44:0.8034, 54o:0.3662, 64o:0.3635, 84o:0.0971, T4o:0.1034, J4o:0.0711, Q4o:0.6125, K4o:0.3813, A4o:0.6425, 52s:0.7952, 53s:0.1088, 54s:0.8445, 55:0.6978, 65o:0.2510, 75o:0.7533, 85o:0.0602, T5o:0.7851, J5o:0.3628, Q5o:0.1546, K5o:0.7580, A5o:0.2688, 62s:0.1545, 63s:0.8512, 64s:0.0197, 65s:0.5686, 66:0.2246, 76o:0.3730, 86o:0.1082, 96o:0.3488, T6o:0.0020, J6o:0.5391, Q6o:0.8578, K6o:0.8585, A6o:0.6173, 72s:0.8165, 73s:0.0426, 74s:0.0946, 75s:0.2108, 76s:0.6893, 77:0.9273, 87o:0.0118, 97o:0.0003, T7o:0.7253, J7o:0.5975, Q7o:0.1759, K7o:0.3635, A7o:0.2422, 82s:0.5600, 83s:0.1108, 84s:0.1276, 85s:0.4705, 86s:0.0783, 87s:0.1959, 88:0.8769, 98o:0.3157, T8o:0.9606, J8o:0.3889, Q8o:0.8861, K8o:0.8707, A8o:0.7913, 92s:0.2363, 93s:0.3072, 94s:0.4868, 95s:0.4236, 96s:0.0133, 97s:0.8245, 98s:0.6470, 99:0.8305, T9o:0.2729, J9o:0.9834, Q9o:0.9894, K9o:0.7767, A9o:0.0704, T2s:0.6221, T3s:0.4733, T4s:0.5973, T5s:0.1595, T6s:0.6689, T7s:0.8494, T8s:0.9220, T9s:0.6405, TT:0.5238, JTo:0.8854, QTo:0.9684, KTo:0.9841, ATo:0.2953, J2s:0.1118, J3s:0.0965, J4s:0.8288, J5s:0.3202, J6s:0.1928, J7s:0.3402, J8s:0.6098, J9s:0.9875, JTs:0.9973, JJ:0.3641, QJo:0.9950, KJo:0.9244, AJo:0.0005, Q2s:0.8101, Q3s:0.2004, Q4s:0.8805, Q5s:0.9095, Q6s:0.5853, Q7s:0.9678, Q8s:0.7258, Q9s:0.9551, QTs:0.9874, QJs:0.9668, QQ:0.0399, KQo:0.9066, AQo:0.0001, K2s:0.6811, K3s:0.3990, K4s:0.1990, K5s:0.4317, K6s:0.4127, K7s:0.4019, K8s:0.8011, K9s:0.9766, KTs:0.8710, KJs:0.8511, KQs:0.4114, KK:0.2225, AKo:0.0010, A2s:0.0766, A3s:0.5961, A4s:0.1370, A5s:0.1336, A6s:0.5278, A7s:0.9636, A8s:0.9953, A9s:0.1846, ATs:0.2230, AJs:0.0049, AQs:0.0211, AKs:0.0614, AA:0.0001"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "22:0.0025, 32o:0.0001, 42o:0.0009, 52o:0.0005, T2o:0.0004, J2o:0.0169, Q2o:0.0104, K2o:0.0246, A2o:0.0224, 32s:0.0045, 33:0.0004, 43o:0.0177, 53o:0.0103, 63o:0.0032, 83o:0.0016, T3o:0.0107, J3o:0.0153, Q3o:0.2948, K3o:0.0008, A3o:0.0014, 42s:0.0071, 43s:0.0012, 44:0.0005, 64o:0.0813, 84o:0.0001, 94o:0.0666, J4o:0.0525, Q4o:0.0505, K4o:0.5216, A4o:0.0143, 52s:0.0026, 53s:0.0971, 54s:0.0123, 55:0.0103, 65o:0.0664, 75o:0.0060, 95o:0.0014, T5o:0.0002, J5o:0.0409, Q5o:0.1122, K5o:0.0194, A5o:0.0123, 62s:0.2041, 63s:0.0103, 64s:0.5212, 65s:0.0185, 66:0.0006, 86o:0.0525, T6o:0.0113, J6o:0.0128, Q6o:0.0641, K6o:0.0027, A6o:0.0002, 72s:0.0777, 73s:0.0257, 74s:0.0028, 75s:0.0133, 76s:0.0173, 77:0.0093, 87o:0.0370, 97o:0.0004, J7o:0.0796, Q7o:0.0796, K7o:0.1644, A7o:0.0049, 83s:0.0507, 84s:0.0009, 85s:0.0002, 86s:0.0224, 87s:0.0617, 88:0.0765, 98o:0.0958, J8o:0.0617, Q8o:0.0138, K8o:0.0025, A8o:0.0001, 92s:0.0436, 93s:0.1432, 94s:0.2035, 95s:0.0678, 96s:0.1480, 97s:0.0001, 98s:0.0125, 99:0.0152, T9o:0.0651, J9o:0.0002, Q9o:0.0019, K9o:0.1466, A9o:0.0069, T2s:0.0161, T3s:0.0990, T4s:0.0982, T5s:0.0011, T6s:0.0596, T7s:0.0929, T8s:0.0278, T9s:0.1217, TT:0.4676, JTo:0.0265, QTo:0.0015, KTo:0.0002, ATo:0.0432, J2s:0.1947, J3s:0.0736, J4s:0.1179, J5s:0.0004, J6s:0.4354, J7s:0.0397, J8s:0.0005, J9s:0.0002, JTs:0.0003, JJ:0.3644, QJo:0.0001, KJo:0.0025, AJo:0.0530, Q2s:0.1086, Q3s:0.1909, Q4s:0.0735, Q5s:0.0404, Q6s:0.1208, Q7s:0.0007, Q8s:0.0028, Q9s:0.0230, QTs:0.0006, QJs:0.0025, QQ:0.9545, KQo:0.0528, AQo:0.0083, K2s:0.0170, K3s:0.1226, K4s:0.0828, K5s:0.0013, K6s:0.0373, K7s:0.1227, K8s:0.1114, K9s:0.0006, KTs:0.0388, KJs:0.1198, KQs:0.2919, KK:0.7768, AKo:0.0260, A2s:0.0274, A3s:0.0008, A4s:0.0052, A5s:0.0009, A6s:0.0017, A7s:0.0228, A8s:0.0003, ATs:0.3176, AJs:0.6830, AQs:0.0023, AKs:0.1698, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0963, 52o:0.0014, K2o:0.0186, A2o:0.6522, 33:0.2841, 53o:0.0017, J3o:0.0017, Q3o:0.0004, K3o:0.0029, A3o:0.4016, 42s:0.2624, 43s:0.0298, 44:0.1947, 64o:0.0001, T4o:0.0015, A4o:0.3286, 52s:0.0004, 53s:0.0088, 54s:0.0005, 55:0.1363, 85o:0.0001, J5o:0.0001, Q5o:0.0070, K5o:0.0615, A5o:0.7161, 62s:0.1436, 64s:0.2776, 65s:0.0089, 66:0.7743, 76o:0.0001, T6o:0.0001, Q6o:0.0012, K6o:0.1203, A6o:0.3808, 72s:0.0205, 73s:0.0021, 75s:0.0009, 76s:0.0269, 77:0.0577, 87o:0.0016, 97o:0.0282, T7o:0.0015, J7o:0.0195, Q7o:0.0031, K7o:0.0054, A7o:0.7525, 82s:0.3993, 83s:0.0078, 84s:0.0037, 85s:0.0205, 86s:0.0085, 87s:0.3564, 88:0.0466, 98o:0.0110, T8o:0.0001, J8o:0.3658, Q8o:0.0034, K8o:0.1108, A8o:0.2086, 92s:0.0074, 93s:0.0317, 94s:0.0412, 95s:0.0262, 96s:0.0794, 97s:0.1113, 98s:0.3180, 99:0.1538, T9o:0.0081, J9o:0.0030, Q9o:0.0005, K9o:0.0605, A9o:0.9220, T2s:0.0405, T3s:0.0645, T4s:0.0223, T5s:0.0086, T6s:0.0470, T7s:0.0135, T8s:0.0104, T9s:0.0065, TT:0.0087, JTo:0.0138, QTo:0.0130, KTo:0.0031, ATo:0.6615, J2s:0.1361, J3s:0.1869, J4s:0.0063, J5s:0.0054, J6s:0.2219, J7s:0.1877, J8s:0.3822, J9s:0.0095, JTs:0.0010, JJ:0.2715, QJo:0.0017, KJo:0.0724, AJo:0.9460, Q2s:0.0288, Q3s:0.1425, Q4s:0.0294, Q5s:0.0003, Q6s:0.2302, Q7s:0.0217, Q8s:0.2613, Q9s:0.0012, QTs:0.0104, QJs:0.0305, QQ:0.0056, KQo:0.0406, AQo:0.9916, K2s:0.1599, K3s:0.2109, K4s:0.0422, K5s:0.2812, K6s:0.4561, K7s:0.3743, K8s:0.0599, K9s:0.0090, KTs:0.0466, KJs:0.0280, KQs:0.2939, KK:0.0007, AKo:0.9730, A2s:0.8863, A3s:0.3960, A4s:0.8506, A5s:0.8474, A6s:0.4576, A7s:0.0078, A8s:0.0044, A9s:0.8154, ATs:0.4587, AJs:0.3119, AQs:0.9764, AKs:0.7689, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 14.93bb"
    ],
    "bands": [
      {
        "action": "3bet 14.93bb",
        "min": 0.0001,
        "range": "AA:0.0002"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@14.93",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, Q3o:0.0001, K4o:0.0001, 53s:0.0001, 55:0.0016, Q5o:0.0002, 62s:0.0001, 64s:0.0005, 66:0.0001, 77:0.0045, K7o:0.0012, 87s:0.0003, 88:0.0279, 93s:0.0005, 94s:0.0001, 95s:0.0002, 98s:0.0001, 99:0.0053, T9o:0.0002, K9o:0.0024, A9o:0.0002, T3s:0.0001, T7s:0.0004, T8s:0.0001, T9s:0.0003, TT:0.3662, JTo:0.0002, ATo:0.0270, J3s:0.0008, J4s:0.0013, JJ:0.3644, KJo:0.0007, AJo:0.0530, Q3s:0.0020, Q5s:0.0002, Q6s:0.0018, Q8s:0.0002, Q9s:0.0012, QJs:0.0002, QQ:0.9545, KQo:0.0391, AQo:0.0061, K2s:0.0002, K3s:0.0003, K4s:0.0002, K5s:0.0001, K6s:0.0005, K7s:0.0030, K8s:0.0003, K9s:0.0001, KTs:0.0025, KJs:0.1191, KQs:0.2894, KK:0.7768, AKo:0.0260, A2s:0.0027, A4s:0.0043, A5s:0.0001, A6s:0.0002, A7s:0.0001, ATs:0.3174, AJs:0.6779, AQs:0.0023, AKs:0.1698, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AA:0.0002"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "44:0.6952, A4o:0.0047, 54s:0.6646, 55:0.9994, A5o:0.8734, 65s:0.9973, 66:0.1686, A6o:0.0023, 75s:0.0005, 76s:0.9996, 77:0.4311, A7o:0.0005, 85s:0.0009, 86s:0.0025, 87s:0.9952, 88:0.8958, A8o:0.2519, 97s:0.0006, 98s:0.9971, 99:0.9992, A9o:0.6076, T7s:0.0003, T8s:0.9955, T9s:0.9997, TT:0.8667, JTo:0.3673, QTo:0.6206, KTo, J7s:0.0016, J8s:0.8341, J9s:0.9998, JTs:0.9993, JJ:0.9987, QJo:0.5747, KJo:0.9576, Q4s:0.0002, Q5s:0.0018, Q6s:0.4491, Q7s:0.0001, Q8s:0.9776, Q9s, QTs:0.5916, QJs:0.0026, QQ:0.9965, KQo:0.0019, K3s:0.0014, K4s:0.8384, K5s:0.9993, K6s:0.9797, K7s, K8s:0.9992, K9s, KTs:0.2890, KJs:0.0003, KK, A2s:0.9995, A3s:0.0135, A4s:0.0604, A5s:0.0234, A6s:0.0018, A7s:0.0012, A8s:0.0041, A9s:0.0002, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.2292, 44:0.3047, A4o:0.0001, 55:0.0006, A5o:0.1238, 66:0.8314, A6o:0.0360, 77:0.5689, A7o:0.0066, 88:0.1042, A8o:0.1614, 99:0.0008, A9o:0.2826, TT:0.1333, ATo, J9s:0.0001, JTs:0.0007, JJ:0.0013, QJo:0.4253, KJo:0.0424, AJo, QTs:0.4084, QJs:0.9974, QQ:0.0035, KQo:0.9981, AQo, K5s:0.0002, K6s:0.0184, KTs:0.7110, KJs:0.9997, KQs, AKo, A2s:0.0004, A3s:0.9864, A4s:0.9396, A5s:0.9766, A6s:0.9982, A7s:0.9988, A8s:0.9959, A9s:0.9998, ATs, AJs, AQs, AKs"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.2317, 77:0.0280, 88:0.6519, 99:0.0213, TT, ATo:0.0006, JJ, AJo:0.6017, QQ, AQo:0.8046, KQs:0.0253, KK, AKo, A8s:0.1052, A9s:0.0007, ATs, AJs, AQs, AKs, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@14.93",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66, 77, 88, 99, A9o, TT, ATo, JJ, AJo, QQ, KQo, AQo, KTs, KJs, KQs, KK, AKo, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3577, 32s:0.0152, 33:0.3491, 42s:0.5804, 43s:0.0305, 44:0.0102, K4o:0.0001, 52s:0.8936, 53s:0.5007, 54s:0.0036, 55:0.2005, 65o:0.5212, 63s:0.9925, 64s:0.3074, 65s:0.0013, 66:0.2256, K6o:0.0025, 72s:0.0003, 73s:0.0002, 74s:0.8305, 75s:0.2104, 76s:0.0072, 77:0.1472, K7o:0.0002, 84s:0.0357, 85s:0.8661, 86s:0.1404, 87s:0.0012, 88:0.9977, Q8o:0.0007, K8o:0.0022, A8o:0.0001, 93s:0.0008, 95s:0.0644, 96s:0.9986, 97s:0.9848, 98s:0.9985, 99, T9o:0.0854, J9o:0.0003, Q9o:0.5159, K9o:0.9503, A9o:0.0541, T2s:0.0021, T3s:0.0270, T4s:0.6420, T5s:0.4826, T6s:0.5556, T7s:0.7567, T8s:0.3310, T9s:0.7566, TT:0.5790, JTo:0.0955, QTo:0.0178, KTo:0.0640, ATo:0.0015, J2s:0.1508, J3s:0.6780, J4s:0.3658, J5s:0.0431, J6s:0.3872, J7s:0.0078, J8s:0.0032, J9s:0.0490, QJo:0.0002, KJo:0.0890, AJo:0.5009, Q2s:0.0070, Q3s:0.0001, Q4s:0.0001, Q5s:0.0023, Q6s:0.0012, Q7s:0.0010, Q8s:0.0006, Q9s:0.0005, QTs:0.0003, QJs:0.0001, KQo:0.0154, AQo:0.9611, K4s:0.0001, K5s:0.0001, K8s:0.0004, A2s:0.0001, A8s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.2070, AQs:0.0067"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.8506, K2o:0.3880, A2o:0.0047, 32s:0.0004, T3o:0.0001, J3o:0.0029, Q3o:0.6305, K3o:0.3873, A3o:0.0003, 42s:0.2448, 54o:0.0153, Q4o:0.8517, K4o:0.1246, 52s:0.0690, 53s:0.0001, 65o:0.0835, J5o:0.0098, Q5o:0.9600, K5o:0.0916, A5o:0.0001, 62s:0.0010, 63s:0.0003, 76o:0.0015, 86o:0.0002, J6o:0.0001, Q6o:0.3405, K6o:0.0001, A6o:0.4892, 72s:0.0001, 74s:0.0638, 87o:0.1753, J7o:0.0002, Q7o:0.3701, K7o:0.0001, A7o:0.1783, 82s:0.0004, 83s:0.0005, 84s:0.5226, 85s:0.0956, 88:0.0001, T8o:0.0008, J8o:0.0298, Q8o:0.8525, K8o:0.0007, A8o:0.5985, 93s:0.0006, 94s:0.0001, 95s:0.0008, 97s:0.0001, 99:0.0001, T9o:0.0004, J9o:0.0003, Q9o:0.4331, K9o:0.0001, A9o:0.9141, T2s:0.0018, T4s:0.0120, T5s:0.0568, T6s:0.0440, T7s:0.0009, T8s:0.0001, TT:0.0022, JTo:0.0001, ATo:0.0003, J2s:0.2974, J3s:0.0388, J4s:0.0046, J5s:0.1041, J6s:0.0001, JJ:0.8558, Q2s:0.0015, Q5s:0.0002, QQ:0.9994, AQo:0.0389, KK, AKo, AQs:0.9932, AKs:0.9991, AA"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "Q2o:0.0005, Q4o:0.0002, Q6o:0.0001, Q8o:0.0001, Q9o:0.0006, QQ:0.0006, AJs:0.0001, AQs:0.0001, AKs:0.0009"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.6422, K2o:0.0016, A2o:0.9953, 33:0.6509, K3o:0.0574, A3o:0.9997, 42s:0.0306, 43s:0.9695, 44:0.9898, K4o:0.6552, A4o, 52s:0.0121, 53s:0.4992, 54s:0.9963, 55:0.7995, K5o:0.5979, A5o, 62s:0.0001, 63s:0.0053, 64s:0.6925, 65s:0.9987, 66:0.7744, K6o:0.9964, A6o:0.5108, 74s:0.1053, 75s:0.7895, 76s:0.9928, 77:0.8528, K7o:0.9992, A7o:0.8217, 85s:0.0354, 86s:0.8596, 87s:0.9988, 88:0.0022, Q8o:0.0001, K8o:0.9864, A8o:0.4014, 96s:0.0013, 97s:0.0149, 98s:0.0014, J9o:0.0001, Q9o:0.0006, K9o:0.0496, A9o:0.0318, T2s:0.0003, T6s:0.3957, T7s:0.2421, T8s:0.6689, T9s:0.2434, TT:0.4188, JTo:0.9043, QTo:0.9822, KTo:0.9360, ATo:0.9982, J2s:0.0001, J3s:0.1478, J4s:0.6283, J5s:0.8385, J6s:0.6093, J7s:0.9921, J8s:0.9967, J9s:0.9509, JTs, JJ:0.1442, QJo:0.9998, KJo:0.9110, AJo:0.4991, Q2s:0.9906, Q3s, Q4s:0.9998, Q5s:0.9975, Q6s:0.9988, Q7s:0.9989, Q8s:0.9993, Q9s:0.9995, QTs:0.9997, QJs, KQo:0.9846, K2s, K3s, K4s, K5s, K6s, K7s, K8s:0.9995, K9s, KTs, KJs, KQs, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs:0.7929"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5943, 33:0.3574, 43s:0.0006, 44:0.0082, 53s:0.0226, 54s:0.8731, 55:0.6289, 63s:0.0001, 64s:0.5474, 65s:0.9972, 66:0.1608, 75s:0.0005, 76s:0.8890, 77:0.2014, 86s:0.5260, 87s:0.1453, 88:0.7605, A8o:0.0001, 97s:0.0035, 98s:0.9431, A9o:0.0003, T7s:0.0001, T8s:0.2976, T9s:0.9637, KTo:0.0002, ATo:0.0006, J6s:0.0001, J8s:0.0015, J9s:0.2025, JTs:0.4658, QJo:0.0002, KJo:0.1556, AJo:0.9909, Q2s:0.0001, Q6s:0.0026, Q7s:0.0003, Q8s:0.0048, Q9s:0.2018, QTs:0.1854, QJs:0.1743, KQo, K2s:0.0001, K3s:0.0003, K4s:0.0001, K5s:0.0003, K6s:0.0038, K7s:0.0042, K8s:0.1350, K9s:0.1084, KTs:0.0009, KJs:0.0577, KQs:0.8277, A2s:0.0317, A3s:0.0058, A4s:0.0060, A5s:0.1787, A6s:0.4275, A7s:0.8695, A8s:0.7061, A9s:0.2236, ATs:0.5266, AJs:0.9971"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0038, A3o:0.0510, A4o:0.3087, 53s:0.0001, A5o:0.0198, A6o:0.0003, A7o:0.0462, A8o:0.0335, 93s:0.0001, A9o:0.1285, ATo:0.2091, J4s:0.0001, AJo:0.0080, Q4s:0.0001, KK:0.0070, AKo:0.0008, A2s:0.1384, A3s:0.0093, A4s:0.0018, A5s:0.0009, A6s:0.0709, A8s:0.0002, A9s:0.0001, ATs:0.0006, AJs:0.0025, AQs:0.2275, AKs:0.6070, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4056, 33:0.6425, A3o:0.0001, 44:0.9917, 55:0.3710, A5o:0.0001, 66:0.8392, 77:0.7986, A7o:0.0001, 87s:0.0001, 88:0.2395, A8o:0.0001, 99, TT, ATo:0.0003, JTs:0.4979, JJ, AJo:0.0011, Q6s:0.0001, Q7s:0.0002, QTs:0.8133, QJs:0.8255, QQ, AQo, K4s:0.0001, K6s:0.0037, K8s:0.0001, K9s:0.6647, KTs:0.9981, KJs:0.9423, KQs:0.1723, KK:0.9930, AKo:0.9992, A2s:0.7698, A3s:0.9831, A4s:0.9892, A5s:0.8157, A6s:0.4973, A7s:0.1305, A8s:0.2918, A9s:0.7763, ATs:0.4728, AJs:0.0004, AQs:0.7725, AKs:0.3930"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0011, 88:0.0029, 99:0.1176, TT:0.1407, ATo:0.0036, JTs:0.0012, JJ:0.0597, QJo:0.0005, KJo:0.0001, AJo:0.3475, Q8s:0.0058, Q9s:0.0003, QTs:0.4746, QJs:0.2997, QQ:0.0499, AQo:0.1175, K5s:0.0070, K6s:0.0016, K7s:0.0003, K8s:0.0078, K9s:0.0338, KTs:0.0086, KJs:0.0103, KQs:0.0501, KK:0.0624, A2s:0.0021, A3s:0.0738, A4s:0.1364, A5s:0.3108, A6s:0.0279, A7s:0.0886, A8s:0.2416, A9s:0.0608, ATs:0.9611, AJs:0.2917, AQs:0.1582, AA:0.9987"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0692, A6o:0.0001, A7o:0.0003, 88:0.0068, A8o:0.0002, 99:0.0931, A9o:0.0038, TT:0.1163, ATo:0.0007, JTs:0.0001, JJ:0.1527, KJo:0.0001, AJo:0.1483, Q9s:0.0017, QTs:0.0293, QJs:0.0605, QQ:0.1607, AQo:0.4888, K6s:0.0001, K8s:0.0001, K9s:0.0054, KTs:0.0004, KJs:0.0959, KQs:0.0355, KK:0.2604, AKo:0.5767, A2s:0.0529, A3s:0.0920, A4s:0.0503, A5s:0.0630, A6s:0.0921, A7s:0.0730, A8s:0.0896, A9s:0.0635, ATs:0.0100, AJs:0.2893, AQs:0.3197, AKs:0.0454, AA:0.0010"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "A5o:0.0040, 77:0.0092, 88:0.1103, 99:0.7004, TT:0.7414, ATo:0.0069, JTs:0.0015, JJ:0.7876, QJo:0.0004, KJo:0.0002, AJo:0.0144, Q8s:0.0012, Q9s:0.0029, QTs:0.3152, QJs:0.1922, QQ:0.7894, KQo:0.0002, AQo:0.3927, K5s:0.0020, K6s:0.0115, K7s:0.0001, K8s:0.0002, K9s:0.0222, KTs:0.0226, KJs:0.4443, KQs:0.1313, KK:0.6773, AKo:0.4233, A2s:0.3656, A3s:0.7895, A4s:0.4988, A5s:0.6220, A6s:0.7446, A7s:0.7410, A8s:0.5957, A9s:0.5943, ATs:0.0285, AJs:0.4188, AQs:0.5221, AKs:0.9546, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@5|BTN:4BET@11",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "ATo:0.0001, AJo:0.0014, AJs:0.0011, AQs:0.0002, AKs:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AJo:0.0013, KK:0.0070, AKo:0.0008, ATs:0.0002, AJs:0.0003, AQs:0.2273, AKs:0.6066, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@5|BTN:4BET@14.93",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AJo:0.0003, KK:0.0070, AKo:0.0008, AJs:0.0016, AQs:0.2275, AKs:0.6070, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0361, 99:0.9126, TT, ATo:0.0006, JJ, AJo:0.0012, QQ, AQo:0.9136, KQs:0.0002, KK, AKo, A8s:0.0004, A9s:0.0007, ATs:0.0009, AJs:0.0015, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32s:0.0270, 33, 42s:0.0596, 43s:0.7736, 44, 54o:0.0004, 52s:0.4719, 53s:0.9998, 54s:0.9899, 55, 65o:0.4226, 75o:0.0003, 63s:0.6392, 64s:0.9765, 65s:0.9936, 66, 76o:0.0976, 86o:0.0001, 72s:0.0001, 74s:0.8045, 75s:0.9790, 76s:0.9978, 77:0.9997, 84s:0.8136, 85s:0.9841, 86s:0.9971, 87s:0.9994, 88:0.9869, 98o:0.0001, T8o:0.1955, 94s:0.0001, 95s:0.0005, 96s:0.7047, 97s:0.9974, 98s:0.9966, T3s:0.0019, T4s:0.0001, T5s:0.0059, T6s:0.9990, T7s:0.9683, T8s:0.9993, T9s:0.9846, JTo:0.5722, QTo:0.0016, KTo:0.9575, ATo:0.5664, J3s:0.0702, J4s:0.0159, J5s:0.3546, J6s:0.9731, J7s:0.9394, J8s:0.9951, J9s:0.9910, JTs:0.9403, QJo:0.5910, KJo:0.9946, AJo:0.9819, Q2s:0.0111, Q3s:0.2026, Q4s:0.4135, Q5s:0.6951, Q6s:0.6673, Q7s:0.9898, Q8s:0.9756, Q9s:0.9433, QTs:0.2107, QJs:0.3380, KQo:0.9978, AQo:0.0001, K2s:0.0044, K3s:0.9920, K4s:0.8715, K5s:0.6899, K6s:0.9911, K7s:0.9390, K8s:0.9880, K9s:0.9278, KTs:0.6367, KJs:0.3842, KQs:0.1767, A2s:0.6937, A3s:0.7292, A4s:0.5082, A5s:0.9820, A6s:0.9553, A7s:0.8997, A8s:0.6400, A9s:0.9601, ATs:0.3592, AJs:0.4870, AQs:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0204, A3o:0.1148, A4o:0.0252, 64s:0.0001, A6o:0.0060, A7o:0.0156, 88:0.0074, A8o:0.0546, 99:0.0518, A9o:0.0994, T9s:0.0020, TT:0.1070, ATo:0.2321, J9s:0.0003, JTs:0.0033, JJ:0.0264, AJo:0.0096, Q4s:0.0004, QTs:0.0001, QQ:0.1840, AQo:0.0001, K5s:0.0001, K8s:0.0001, K9s:0.0030, KTs:0.0001, KK:0.0009, AKo:0.0003, A2s:0.0013, A3s:0.0018, A4s:0.0005, A6s:0.0001, A7s:0.0003, A8s:0.0053, A9s:0.0020, AQs:0.0947, AKs:0.0314, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.0057, A8o:0.0001, 98s:0.0001, 99:0.9482, T9s:0.0130, TT:0.8930, KTo:0.0151, ATo:0.1748, J8s:0.0002, JTs:0.0559, JJ:0.9736, KJo:0.0019, AJo:0.0086, Q9s:0.0543, QTs:0.7890, QJs:0.6620, QQ:0.8160, KQo:0.0022, AQo:0.9998, K3s:0.0008, K4s:0.0105, K5s:0.0001, K6s:0.0010, K7s:0.0013, K8s:0.0001, K9s:0.0386, KTs:0.3627, KJs:0.6157, KQs:0.8233, KK:0.9991, AKo:0.9997, A2s:0.3038, A3s:0.2666, A4s:0.4911, A5s:0.0172, A6s:0.0441, A7s:0.0983, A8s:0.3518, A9s:0.0373, ATs:0.6408, AJs:0.5130, AQs:0.9052, AKs:0.9686, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1091, ATo:0.0029, JTs:0.0003, JJ:0.1144, AJo:0.0024, QTs:0.0003, QQ:0.1968, AQo:0.3126, K7s:0.0001, KJs:0.0021, KQs:0.0046, KK:0.1094, AKo:0.2119, A2s:0.0009, A3s:0.0006, A4s:0.0091, A5s:0.0026, A6s:0.0019, A7s:0.0001, A8s:0.0042, A9s:0.4945, ATs:0.3723, AJs:0.1415, AQs:0.3615, AKs:0.0002, AA:0.5120"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0002, A7o:0.0010, 88:0.0001, 99:0.0005, A9o:0.0004, ATo:0.0602, JJ:0.2546, KJo:0.0004, AJo:0.0109, QQ:0.0084, AQo:0.2247, K5s:0.0003, K7s:0.0002, KJs:0.0004, KQs:0.0016, KK:0.5245, AKo:0.6492, A2s:0.0225, A3s:0.0030, A4s:0.0082, A5s:0.0450, A6s:0.0083, A8s:0.0001, A9s:0.0053, ATs:0.0857, AJs:0.4165, AQs:0.3183, AKs:0.3768, AA:0.2869"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 99:0.0031, TT:0.0483, KTo:0.0004, ATo:0.0156, JJ:0.0533, AJo:0.0070, Q8s:0.0009, QTs:0.0016, QJs:0.0003, QQ:0.7699, AQo:0.2389, K5s:0.0007, K6s:0.0209, K7s:0.0013, K9s:0.0054, KTs:0.0003, KJs:0.0004, KQs:0.0001, KK:0.3384, AKo:0.1389, A2s:0.0779, A3s:0.0687, A4s:0.3875, A5s:0.3728, A6s:0.1221, A7s:0.0012, A8s:0.0072, A9s:0.0304, ATs:0.3117, AJs:0.4296, AQs:0.2791, AKs:0.6229, AA:0.2011"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0001, 44:0.0002, 52s:0.0001, 53s:0.0020, 55:0.0009, 63s:0.0003, 64s:0.0062, 66:0.0334, 75s:0.0072, 77:0.0046, 84s:0.0001, 86s:0.0026, 87s:0.0001, 88:0.0582, 97s:0.0297, 98s:0.0047, 99:0.0354, A9o:0.0035, T3s:0.0006, T6s:0.0005, T7s:0.0185, T8s:0.0022, T9s:0.0634, ATo:0.0001, J2s:0.0001, J3s:0.0050, J4s:0.0008, J6s:0.0029, J9s:0.0021, KJo:0.0001, AJo:0.0333, AQo:0.0008, AJs:0.0430, AQs:0.0003"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.1344, 33:0.0707, 43s:0.0008, 44:0.0037, 52s:0.0008, 53s:0.1079, 54s:0.0009, 55:0.1919, 65o:0.0803, 63s:0.3150, 64s:0.0741, 65s:0.0012, 66:0.1398, 74s:0.0332, 75s:0.1133, 76s:0.0060, 77:0.0301, 86s:0.0197, 87s:0.0002, 88:0.2710, 95s:0.0073, 96s:0.0864, 97s:0.1382, 98s:0.5797, 99:0.1364, T9o:0.0021, A9o:0.0042, T4s:0.0005, T6s:0.2804, T7s:0.3563, T8s:0.0303, T9s:0.5118, TT:0.4762, JTo:0.0223, QTo:0.0028, KTo:0.0009, ATo:0.0003, J3s:0.1296, J4s:0.0245, J5s:0.0065, J6s:0.2336, J7s:0.0010, J8s:0.0013, J9s:0.0009, KJo:0.0129, AJo:0.3890, Q2s:0.0001, Q5s:0.0001, Q6s:0.0005, Q7s:0.0001, Q9s:0.0003, QTs:0.0002, AQo:0.6073, K5s:0.0001, K8s:0.0001, A2s:0.0001, ATs:0.0001, AJs:0.0834, AQs:0.0061"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "22:0.0148, 33:0.0146, 42s:0.0001, 43s:0.0061, 44:0.0010, 52s:0.0024, 53s:0.0038, 54s:0.0022, 55:0.0045, 63s:0.2008, 64s:0.0283, 66:0.0360, 74s:0.0130, 75s:0.0009, 76s:0.0001, 77:0.1077, 86s:0.0010, 87s:0.0007, 88:0.0505, 95s:0.0005, 96s:0.2183, 97s:0.0202, 98s:0.1110, 99:0.7108, T9o:0.0008, Q9o:0.0037, K9o:0.0067, A9o:0.0101, T4s:0.0001, T5s:0.0016, T6s:0.0138, T7s:0.0161, T8s:0.0022, T9s:0.1229, TT:0.1023, JTo:0.0108, QTo:0.0003, KTo:0.0012, ATo:0.0011, J3s:0.0424, J4s:0.0963, J5s:0.0021, J6s:0.0139, J7s:0.0001, J9s:0.0019, KJo:0.0119, AJo:0.0539, Q5s:0.0004, Q6s:0.0002, Q7s:0.0005, Q8s:0.0001, QJs:0.0001, KQo:0.0023, AQo:0.3529, A9s:0.0001, AJs:0.0804, AQs:0.0003"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0002, TT:0.1239, JJ:0.5233, QQ:0.3539, AQo:0.0078, KK:0.1586, AKo:0.3122, AQs:0.3442, AKs:0.5559, AA:0.1922"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.1008, JJ:0.4767, QQ:0.6461, AQo:0.0038, KK:0.8414, AKo:0.6878, AJs:0.0001, AQs:0.3753, AKs:0.4441, AA:0.8078"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 66:0.0967, 77:0.0483, 88:0.5292, 99, TT:0.5790, AJo:0.0001, AQo:0.9611, AJs:0.1099, AQs:0.0067"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "77:0.0042, 88:0.0080, 99:0.0013, TT:0.0502, JJ:0.0293, AJo:0.0159, QQ:0.0001, AQo:0.0164, KTs:0.0003, KJs:0.0332, KK:0.0083, AKo:0.0098, A3s:0.0012, A4s:0.0003, A6s:0.0004, A7s:0.0004, A8s:0.0023, A9s:0.0144, ATs:0.0622, AJs:0.0255, AQs:0.0009, AKs:0.0029, AA:0.0300"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0020, 66:0.2063, 77:0.6914, 88:0.7273, 99:0.9986, TT:0.9498, ATo:0.0025, JJ:0.9707, AJo:0.9776, QQ, AQo:0.9754, KTs:0.0017, KJs:0.3786, KQs:0.0376, KK:0.9917, AKo:0.9902, A2s:0.0045, A3s:0.0665, A5s:0.7447, A6s:0.0544, A7s:0.0041, A8s:0.0141, A9s:0.9829, ATs:0.9370, AJs:0.9738, AQs:0.9991, AKs:0.9971, AA:0.9700"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0088, 88:0.0824, 99:0.1027, TT:0.0205, AJo:0.0002, QTs:0.0002, QJs:0.0001, QQ:0.3472, KQo:0.0001, AQo:0.1270, KTs:0.1210, KJs:0.0009, KQs:0.1432, KK:0.0002, A3s:0.0001, A5s:0.0043, A7s:0.0004, A8s:0.0008, A9s:0.1420, ATs:0.0812, AJs:0.0001, AQs:0.2254, AA:0.0003"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A9o:0.0001, TT:0.0435, ATo:0.0017, AJo:0.2260, QQ:0.0003, A3s:0.0011, A4s:0.0004, A5s:0.0002, A6s:0.1309, A7s:0.0143, A8s:0.0372, A9s:0.4730, ATs:0.0057, AJs:0.0005, AQs:0.0033, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0010, TT:0.7812, ATo:0.0004, JJ, AJo:0.0538, QJs:0.0001, QQ:0.6525, KQo:0.0001, AQo:0.8730, K5s:0.0001, K6s:0.0001, K7s:0.0001, K9s:0.0002, KTs:0.0005, KJs:0.9776, KQs:0.0022, KK:0.9998, AKo, A2s:0.0002, A3s:0.0360, A4s:0.2162, A5s:0.8883, A6s:0.0009, A7s:0.1123, A8s:0.0011, A9s:0.0009, ATs:0.9115, AJs:0.9993, AQs:0.7714, AKs"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BTN:4BET@11",
    "heroPos": "SB",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42s:0.0004, 52s:0.0001, 65o:0.0021, Q5o:0.0002, K5o:0.0001, Q6o:0.0001, A6o:0.0092, 74s:0.0002, 87o:0.0002, A7o:0.0006, 84s:0.0055, 85s:0.0002, Q8o:0.0003, A8o:0.0013, 95s:0.0003, 99:0.0001, Q9o:0.0028, A9o:0.1564, T5s:0.0001, J2s:0.0029, J3s:0.0023, J4s:0.0002, J5s:0.0009, JJ:0.5835, QQ:0.0030, AQo:0.0068, KK:0.1005, AKo:0.3614, AQs:0.0012, AKs:0.3780, AA:0.4479"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "A2o:0.0047, 32s:0.0004, Q3o:0.0001, A3o:0.0003, 42s:0.2441, 54o:0.0152, Q4o:0.0003, 52s:0.0689, 53s:0.0001, 65o:0.0811, Q5o:0.0318, K5o:0.0001, A5o:0.0001, 62s:0.0010, 63s:0.0003, 76o:0.0015, 86o:0.0002, Q6o:0.0010, A6o:0.4796, 72s:0.0001, 74s:0.0636, 87o:0.1750, A7o:0.1777, 82s:0.0004, 83s:0.0005, 84s:0.5143, 85s:0.0954, 88:0.0001, T8o:0.0008, Q8o:0.1285, A8o:0.5970, 95s:0.0004, 97s:0.0001, T9o:0.0004, Q9o:0.0277, A9o:0.7348, T2s:0.0017, T4s:0.0119, T5s:0.0559, T6s:0.0438, T7s:0.0009, T8s:0.0001, TT:0.0022, JTo:0.0001, ATo:0.0003, J2s:0.0034, J3s:0.0075, J4s:0.0024, J5s:0.0058, JJ:0.2299, Q2s:0.0014, Q5s:0.0002, QQ:0.9964, AQo:0.0321, KK:0.8995, AKo:0.6386, AQs:0.9919, AKs:0.6211, AA:0.5521"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BTN:4BET@24.75",
    "heroPos": "SB",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0022, JJ:0.8558, QQ:0.9994, AQo:0.0389, KK, AKo, AQs:0.9932, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.5937, QJs:0.0001, QQ:0.4613, KK:0.7157, AKo:0.2287, A4s:0.0001, A6s:0.0001, AQs:0.0347, AKs:0.0186"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0654, JJ:0.3453, QQ:0.5384, K7s:0.0001, KJs:0.0001, KQs:0.0001, KK:0.2843, AKo:0.7529, A5s:0.0001, A7s:0.0001, A9s:0.0001, AQs:0.0017, AKs:0.9138, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0050, K2o:0.0278, A2o:0.0001, 32s:0.0002, Q3o:0.1100, K3o:0.1121, A3o:0.0001, 42s:0.1367, 54o:0.0075, K4o:0.0448, 52s:0.0380, 53s:0.0001, 65o:0.0198, Q5o:0.0010, K5o:0.0031, 62s:0.0004, 63s:0.0001, 76o:0.0005, 86o:0.0001, Q6o:0.0002, A6o:0.0263, 72s:0.0001, 74s:0.0475, 87o:0.1128, Q7o:0.0080, A7o:0.0065, 83s:0.0001, 84s:0.3307, 85s:0.0793, 88:0.0001, J8o:0.0063, Q8o:0.0226, K8o:0.0001, A8o:0.1250, 93s:0.0001, 95s:0.0003, 97s:0.0001, T9o:0.0002, J9o:0.0003, Q9o:0.3032, K9o:0.0001, A9o:0.6441, T2s:0.0004, T4s:0.0005, T6s:0.0307, T7s:0.0008, T8s:0.0001, TT:0.0001, JTo:0.0001, J2s:0.0649, J3s:0.0355, J4s:0.0028, J5s:0.0914, J6s:0.0001, JJ:0.0443, Q2s:0.0011, Q5s:0.0001, QQ:0.1055, AQo:0.0184, KK:0.4368, AKo:0.1011, AQs:0.0535, AKs:0.0284, AA:0.1159"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "Q2o:0.0005, K2o:0.0066, Q3o:0.0001, K3o:0.0033, 42s:0.0006, K4o:0.0003, 52s:0.0009, 65o:0.0003, Q5o:0.0012, A6o:0.0282, 74s:0.0005, 87o:0.0002, Q7o:0.0033, A7o:0.0015, 84s:0.0005, 85s:0.0009, J8o:0.0007, Q8o:0.0009, A8o:0.0385, 99:0.0001, Q9o:0.0019, A9o:0.0413, T4s:0.0001, TT:0.0021, ATo:0.0003, J2s:0.0047, J3s:0.0009, J4s:0.0007, J5s:0.0110, JJ:0.8115, Q5s:0.0001, QQ:0.8939, AQo:0.0205, KK:0.5632, AKo:0.8989, AQs:0.9396, AKs:0.9706, AA:0.8841"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0001, JJ:0.5800, QQ:0.0009, KK:0.0030, AKo:0.1668, AKs:0.0397, AA:0.9978"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.4171, QQ:0.9991, KK:0.9970, AKo:0.8332, AKs:0.9603, AA:0.0022"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42s:0.0001, 52s:0.0024, 53s:0.0001, 65o:0.0017, K5o:0.0001, 63s:0.0002, 74s:0.0623, 87o:0.0706, A7o:0.0001, 84s:0.0863, 85s:0.0927, 88:0.0001, T8o:0.0005, J8o:0.0001, Q8o:0.0110, A8o:0.0519, 95s:0.0004, 97s:0.0001, 99:0.0001, T9o:0.0004, J9o:0.0001, Q9o:0.3751, K9o:0.0001, A9o:0.7682, T2s:0.0001, T4s:0.0066, T5s:0.0062, T6s:0.0440, T7s:0.0009, T8s:0.0001, TT:0.0022, JTo:0.0001, ATo:0.0003, J2s:0.0013, J3s:0.0018, J4s:0.0031, J5s:0.0854, JJ:0.8558, Q2s:0.0006, Q5s:0.0002, QQ:0.9994, AQo:0.0389, KK, AKo, AQs:0.9932, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@9",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "52o:0.0001, 92o:0.0001, T2o:0.0003, Q2o:0.0001, A2o:0.0001, 32s:0.0001, 33:0.0012, 53o:0.0001, 63o:0.0001, K3o:0.0002, A3o:0.0009, 42s:0.0004, 43s:0.0168, 44:0.0003, 64o:0.0001, 52s:0.0002, 53s:0.0003, 55:0.0003, 85o:0.0001, 95o:0.0003, Q5o:0.0003, A5o:0.0003, 62s:0.0001, 64s:0.0039, 66:0.0051, 76o:0.0001, A6o:0.0007, 73s:0.0001, 74s:0.0007, 76s:0.0014, 77:0.0052, J7o:0.0001, Q7o:0.0001, 82s:0.0023, 83s:0.0002, 84s:0.0002, 85s:0.0001, 88:0.0024, T8o:0.0001, K8o:0.0002, A8o:0.0002, 93s:0.0001, 94s:0.0003, 95s:0.0001, 96s:0.0001, 97s:0.0001, 98s:0.0002, 99:0.0010, T9o:0.0001, Q9o:0.0002, K9o:0.0002, A9o:0.0011, T2s:0.0064, T3s:0.0002, T5s:0.0002, T7s:0.0003, T8s:0.0001, T9s:0.0003, TT:0.0449, JTo:0.0017, QTo:0.0002, ATo:0.0004, J2s:0.0011, J4s:0.0005, J5s:0.0036, J6s:0.0003, J7s:0.0009, J8s:0.0068, J9s:0.0001, JTs:0.0014, JJ:0.7525, QJo:0.0012, KJo:0.0005, AJo:0.0002, Q3s:0.0001, Q5s:0.0005, Q6s:0.0024, Q7s:0.0022, Q8s:0.0005, Q9s:0.0009, QTs:0.0004, QJs:0.0822, QQ:0.9828, AQo:0.0793, K2s:0.0006, K3s:0.0005, K4s:0.0003, K5s:0.0001, K6s:0.0046, K7s:0.0006, K8s:0.0117, K9s:0.0002, KTs:0.0001, KJs:0.0008, KQs:0.0029, KK, AKo:0.5966, A2s:0.0020, A3s:0.0150, A4s:0.0006, A5s:0.0025, A6s:0.0016, A7s:0.0021, A8s:0.0012, A9s:0.0082, ATs:0.0042, AJs:0.2816, AQs:0.7561, AKs:0.2305, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@9",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0195, TT:0.0330, ATo:0.0059, JJ:0.0035, QTs:0.0004, QQ:0.0009, KQo:0.0132, K6s:0.0001, K7s:0.0022, K9s:0.0001, KTs:0.1194, KJs:0.1644, KK:0.0026, A2s:0.0001, A3s:0.0001, A4s:0.0064, A6s:0.0001, A7s:0.0033, A9s:0.0384, ATs:0.0888, AQs:0.0001, AA:0.0518"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "A5o:0.0093, 77:0.0001, A7o:0.0008, 88:0.0001, 99:0.0799, A9o:0.0060, TT:0.0508, QTo:0.0027, KTo:0.0004, JTs:0.0002, JJ:0.0143, QJo:0.0339, KJo:0.0122, Q8s:0.0018, Q9s:0.0001, QTs:0.0657, QJs:0.0125, QQ:0.2076, KQo:0.0398, AQo:0.0001, K4s:0.0007, K5s:0.0004, K6s:0.0002, K8s:0.0034, K9s:0.0001, KTs:0.0511, KJs:0.1522, KQs:0.0030, KK:0.0719, AKo:0.0603, A2s:0.0007, A3s:0.0616, A4s:0.0128, A5s:0.0080, A6s:0.0072, A7s:0.0644, A8s:0.0682, A9s:0.0633, ATs:0.1179, AJs:0.0221, AQs:0.0001, AKs:0.1103, AA:0.1841"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0004, 77:0.0026, A7o:0.0003, 88:0.0757, A8o:0.0001, 99:0.4832, A9o:0.0280, TT:0.7800, QTo:0.0112, KTo:0.0009, ATo:0.0279, JTs:0.0007, JJ:0.9821, QJo:0.1333, KJo:0.0869, AJo:0.6135, Q8s:0.0008, Q9s:0.0007, QTs:0.3559, QJs:0.4307, QQ:0.7913, KQo:0.0613, AQo:0.9979, K4s:0.0007, K5s:0.0161, K6s:0.0078, K7s:0.0011, K8s:0.0768, K9s:0.0420, KTs:0.1568, KJs:0.2922, KQs:0.1955, KK:0.9255, AKo:0.9396, A2s:0.1342, A3s:0.4237, A4s:0.2810, A5s:0.3241, A6s:0.1360, A7s:0.3988, A8s:0.3585, A9s:0.1578, ATs:0.2190, AJs:0.8317, AQs:0.9979, AKs:0.8897, AA:0.7641"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@9|BTN:4BET@16",
    "heroPos": "SB",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AJs:0.0001, AQs:0.0001, AKs:0.0009"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "QQ:0.0006"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@9|BTN:4BET@24.75",
    "heroPos": "SB",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0006, AQs:0.0001, AKs:0.0009"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0022, 77:0.0010, A7o:0.0001, 88:0.0003, A8o:0.0001, 99:0.0619, A9o:0.0043, TT:0.1162, KTo:0.0001, ATo:0.0046, JJ:0.5386, QJo:0.0031, KJo:0.0039, AJo:0.0072, Q8s:0.0105, Q9s:0.0003, QTs:0.0045, QJs:0.0317, QQ:0.6118, KQo:0.0173, AQo:0.0662, K4s:0.0011, K5s:0.0013, K6s:0.0413, K7s:0.0024, K8s:0.0247, K9s:0.0037, KTs:0.0583, KJs:0.0025, KQs:0.0449, KK:0.0011, AKo:0.0371, A3s:0.0281, A4s:0.0499, A5s:0.1575, A6s:0.0028, A7s:0.0489, A8s:0.0232, A9s:0.0269, ATs:0.1988, AJs:0.2337, AQs:0.0760, AKs:0.0083, AA:0.0362"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0052, 77:0.0009, A7o:0.0005, 88:0.0075, 99:0.0889, A9o:0.0042, TT:0.0535, QTo:0.0001, KTo:0.0093, ATo:0.0140, JJ:0.2363, QJo:0.0002, KJo:0.0074, AJo:0.0045, Q8s:0.0016, Q9s:0.0002, QTs:0.0142, QJs:0.1147, QQ:0.3873, KQo:0.0055, AQo:0.2376, K4s:0.0011, K5s:0.0346, K6s:0.0183, K7s:0.0912, K8s:0.0083, K9s:0.0036, KTs:0.0355, KJs:0.0014, KQs:0.0141, KK:0.9988, AKo:0.1146, A2s:0.1778, A3s:0.1031, A4s:0.0472, A5s:0.2224, A6s:0.0730, A7s:0.2386, A8s:0.0160, A9s:0.0350, ATs:0.0871, AJs:0.0128, AQs:0.2051, AKs:0.9463, AA:0.9635"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0005, Q4o:0.0002, Q6o:0.0001, Q8o:0.0001, Q9o:0.0006, QQ:0.0006, AJs:0.0001, AQs:0.0001, AKs:0.0009"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0002, 99:0.1223, TT, JJ, QQ, AQo:0.0001, KK, AKo, ATs:0.0001, AJs:0.5889, AQs:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT, JJ, QQ, KK, AKo:0.8364, AQs:0.0003, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@24.75|BB:CALL@13.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.8595, QQ, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0825, 66:0.0507, 77:0.0150, 88:0.1053, TT:0.0072, JJ:0.2779, QQ:0.7404, AQo:0.0549, KQs:0.4337, KK:0.0086, A5s:0.0021, ATs:0.0525, AJs:0.3949, AQs:0.9915"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A3o:0.0005, A4o:0.0719, A5o:0.0868, A6o:0.0017, A7o:0.0263, A8o:0.0101, ATo:0.0015, JJ:0.3476, AJo:0.0287, QQ:0.2461, KQo:0.0483, AQo:0.9088, K4s:0.0282, K5s:0.0195, K6s:0.1659, K7s:0.1110, K8s:0.0794, K9s:0.1092, KTs:0.0546, KQs:0.1729, KK:0.8617, AKo:0.2503, A2s:0.3876, A3s:0.3455, A4s:0.4111, A5s:0.5382, A6s:0.3329, A7s:0.3051, A8s:0.4399, A9s:0.2356, ATs:0.4777, AJs:0.2592, AQs:0.0080, AKs:0.3793, AA:0.9754"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "K4o:0.0113, A4o:0.0033, K5o:0.0152, A5o:0.0004, K6o:0.0011, A6o:0.0003, K7o:0.0072, A7o:0.0003, K8o:0.0054, JJ:0.0120, QQ:0.0118, KQo:0.0433, AQo:0.0221, K2s:0.0146, K3s:0.0008, K4s:0.0361, K6s:0.0198, K8s:0.0041, KQs:0.0060, KK:0.1183, AKo:0.0628, A3s:0.0017, A4s:0.0179, A5s:0.0112, A6s:0.0047, A7s:0.0074, A9s:0.0003, ATs:0.0044, AJs:0.0074, AQs:0.0002, AKs:0.1363, AA:0.0246"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0004, A5o:0.0004, 66:0.0006, 77:0.0004, 88:0.0005, 99:0.0001, TT:0.0004, JJ:0.0016, QQ:0.0017, AQo:0.0005, KJs:0.0011, KQs:0.0019, KK:0.0114, AKo:0.6868, A2s:0.0020, A3s:0.0022, A4s:0.0026, A5s:0.0025, A6s:0.0024, A7s:0.0013, A8s:0.0010, A9s:0.0013, ATs:0.0016, AJs:0.0022, AQs:0.0002, AKs:0.4844"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 28.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6654, 32s:0.6759, 33:0.5957, K3o:0.0002, 42s:0.4332, 43s:0.4029, 44:0.4951, 54o:0.1474, K4o:0.0002, 52s:0.7804, 53s:0.5056, 54s:0.0464, 55:0.6080, 65o:0.8204, K5o:0.0006, 62s:0.0031, 63s:0.7471, 64s:0.2643, 65s:0.1702, 66:0.7450, 76o:0.0183, K6o:0.0715, 72s:0.0003, 73s:0.0077, 74s:0.4415, 75s:0.3868, 76s:0.0194, 77:0.8838, K7o:0.2921, 83s:0.0001, 84s:0.3002, 85s:0.7847, 86s:0.6826, 87s:0.2846, 88:0.9990, 98o:0.0002, T8o:0.0006, Q8o:0.0490, K8o:0.4243, 92s:0.0112, 93s:0.0028, 94s:0.0015, 95s:0.2611, 96s:0.9651, 97s:0.7553, 98s:0.8183, 99, T9o:0.1959, J9o:0.0011, Q9o:0.4617, K9o:0.4499, A9o:0.0001, T2s:0.0004, T3s:0.1241, T4s:0.0563, T5s:0.4436, T6s:0.9989, T7s:0.9997, T8s, T9s:0.9998, TT, JTo:0.9621, QTo:0.9609, KTo:0.9259, ATo:0.3352, J2s:0.1129, J3s:0.5334, J4s:0.7009, J5s:0.2100, J6s:0.5474, J7s:0.4953, J8s:0.1259, J9s:0.1688, JTs:0.6175, JJ:0.4879, KJo:0.0704, AJo:0.4925, Q2s:0.0066, Q3s:0.1397, Q4s:0.0010, Q5s:0.0392, Q6s:0.0023, Q7s:0.0063, Q8s:0.0073, Q9s:0.0001, QTs:0.0013, QJs:0.0001, AQo, K4s:0.0001, KTs:0.2026, KJs:0.0025, KQs:0.0001, A9s:0.0019, ATs:0.6531, AJs:0.5690, AQs:0.9901"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "42o:0.0001, 52o:0.0006, 62o:0.0001, J2o:0.0536, Q2o:0.2985, K2o:0.6630, A2o:0.0235, 32s:0.1447, 43o:0.0736, 53o:0.0929, J3o:0.0721, Q3o:0.5393, K3o:0.4790, A3o:0.0123, 42s:0.4525, 43s:0.0248, 54o:0.3233, 64o:0.0191, 84o:0.0001, J4o:0.0642, Q4o:0.4914, K4o:0.2462, 52s:0.0702, 53s:0.0003, 65o:0.0840, 85o:0.0002, J5o:0.0110, Q5o:0.3624, K5o:0.2497, 62s:0.0709, 63s:0.0330, 64s:0.0010, 76o:0.1487, 96o:0.0004, J6o:0.0081, Q6o:0.2410, K6o:0.0850, A6o:0.5351, 72s:0.0001, 73s:0.0460, 74s:0.2733, 75s:0.0171, 87o:0.2551, 97o:0.0001, J7o:0.0506, Q7o:0.1974, K7o:0.0153, A7o:0.3127, 82s:0.0065, 83s:0.0004, 84s:0.1680, 85s:0.0565, 86s:0.0003, 98o:0.0060, T8o:0.0001, J8o:0.2645, Q8o:0.4170, K8o:0.0739, A8o:0.5083, 92s:0.0030, 94s:0.0017, 95s:0.0922, 96s:0.0008, 97s:0.0002, 98s:0.0033, J9o:0.0337, Q9o:0.1208, K9o:0.0001, A9o:0.6570, T3s:0.0006, T4s:0.0001, T6s:0.0001, T7s:0.0001, JTo:0.0312, QTo:0.0001, ATo:0.4455, J2s:0.3461, J3s:0.3715, J4s:0.0972, J5s:0.5447, J6s:0.2867, J7s:0.0522, JJ:0.4995, AJo:0.0535, Q4s:0.0001, Q6s:0.0012, QQ:0.9944, KK:0.9733, AKo:0.9905, AQs:0.0007, AKs, AA:0.9970"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "Q2o:0.0069, K2o:0.0254, Q3o:0.0007, K3o:0.0074, 42s:0.0116, Q4o:0.0021, K4o:0.0076, 52s:0.0015, Q5o:0.0006, K5o:0.0012, Q6o:0.0007, K6o:0.0047, Q7o:0.0004, K7o:0.0097, 88:0.0005, Q8o:0.0057, K8o:0.0026, Q9o:0.0034, ATo:0.0060, JJ:0.0126, Q2s:0.0006, Q3s:0.0007, QQ:0.0056, KK:0.0267, AKo:0.0095, AQs:0.0063, AA:0.0030"
      },
      {
        "action": "3bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.3346, K2o:0.1536, A2o:0.9765, 32s:0.0699, 33:0.4043, K3o:0.4187, A3o:0.9877, 42s:0.0898, 43s:0.5717, 44:0.5049, 54o:0.0089, K4o:0.7339, A4o, 52s:0.1371, 53s:0.4941, 54s:0.9536, 55:0.3920, 65o:0.0006, K5o:0.7303, A5o, 63s:0.2190, 64s:0.7344, 65s:0.8298, 66:0.2550, K6o:0.8388, A6o:0.4649, 73s:0.0001, 74s:0.2851, 75s:0.5961, 76s:0.9805, 77:0.1162, K7o:0.6829, A7o:0.6873, 83s:0.0001, 84s:0.0012, 85s:0.1588, 86s:0.3168, 87s:0.7153, 88:0.0005, Q8o:0.0001, K8o:0.4986, A8o:0.4917, 94s:0.0004, 96s:0.0330, 97s:0.2442, 98s:0.1783, 99:0.0001, J9o:0.0005, Q9o:0.3612, K9o:0.5498, A9o:0.3429, T6s:0.0005, T9s:0.0001, QTo:0.0389, KTo:0.0741, ATo:0.2133, J2s:0.0300, J3s:0.0647, J4s:0.1419, J5s:0.1439, J6s:0.1603, J7s:0.4513, J8s:0.8741, J9s:0.8312, JTs:0.3825, QJo, KJo:0.9296, AJo:0.4541, Q2s:0.9928, Q3s:0.8597, Q4s:0.9988, Q5s:0.9608, Q6s:0.9964, Q7s:0.9937, Q8s:0.9926, Q9s, QTs:0.9987, QJs, KQo, AQo:0.0001, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs:0.7974, KJs:0.9975, KQs, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s:0.9981, ATs:0.3469, AJs:0.4310, AQs:0.0029"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5969, 33:0.4820, 43s:0.0034, 44:0.5531, 53s:0.0018, 54s:0.3315, 55:0.6293, 64s:0.0009, 65s:0.8974, 66:0.4602, 76s:0.8888, 77:0.4452, 87s:0.0233, 88:0.7896, 98s:0.1384, 99:0.2851, T8s:0.4956, T9s:0.9255, J9s:0.0019, JTs:0.3440, AJo:0.7959, Q6s:0.0020, Q9s:0.0353, QTs:0.3002, QJs:0.2758, KQo:0.7991, K5s:0.0010, K6s:0.0003, K8s:0.0063, K9s:0.0036, KTs:0.3612, KJs:0.4367, KQs:0.5606, A2s:0.0004, A3s:0.1115, A4s:0.0488, A5s:0.2466, A6s:0.0480, A7s:0.5325, A8s:0.3496, A9s:0.6852, ATs:0.3363, AJs:0.9331, AQs:0.0002, AA:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A3o:0.0286, A4o:0.0399, A5o:0.0657, A6o:0.0003, A7o:0.0094, A8o:0.0274, A9o:0.0353, TT:0.0084, ATo:0.1359, AJo:0.0509, QQ:0.0844, AQo:0.0344, KK:0.0001, AKo:0.0106, A2s:0.3489, A3s:0.0936, A4s:0.1685, A5s:0.0166, A6s:0.1029, A7s:0.0316, A8s:0.2897, A9s:0.0272, ATs:0.0004, AQs:0.1543, AKs:0.2021, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4031, 33:0.5179, 44:0.4468, 55:0.3707, 66:0.5398, 77:0.5548, 88:0.2104, 99:0.7149, TT:0.9916, ATo:0.1805, JTs:0.3756, JJ, KJo:0.0414, AJo:0.1531, Q7s:0.0001, Q9s:0.2017, QTs:0.6650, QJs:0.7237, QQ:0.9156, KQo:0.2009, AQo:0.9656, K2s:0.0002, K3s:0.0011, K5s:0.0853, K7s:0.0721, K9s:0.2338, KTs:0.6383, KJs:0.5632, KQs:0.4394, KK, AKo:0.9894, A2s:0.4468, A3s:0.6416, A4s:0.7041, A5s:0.7355, A6s:0.3324, A7s:0.4092, A8s:0.3321, A9s:0.2875, ATs:0.6628, AJs:0.0669, AQs:0.8455, AKs:0.7979"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@5",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0010, 66:0.0701, 77:0.0372, 88:0.2860, 99:0.0998, A9o:0.0002, TT:0.3067, ATo:0.0199, JTs:0.0007, JJ:0.3698, AJo:0.2561, Q9s:0.0001, QTs:0.0204, QJs:0.3452, QQ:0.0935, AQo:0.2570, K7s:0.0001, K9s:0.0001, KTs:0.0260, KJs:0.0816, KQs:0.0002, KK:0.3303, A2s:0.0119, A3s:0.0159, A4s:0.0694, A5s:0.1583, A6s:0.1438, A7s:0.4580, A8s:0.2118, A9s:0.4299, ATs:0.7742, AJs:0.9585, AQs:0.1195, AA:0.9556"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0266, 66:0.0135, 77:0.0363, A7o:0.0002, 88:0.0143, 99:0.2533, A9o:0.0119, TT:0.2137, ATo:0.0499, JTs:0.0005, JJ:0.3672, AJo:0.0722, QTs:0.0629, QJs:0.0338, QQ:0.4274, AQo:0.4849, K4s:0.0001, K5s:0.0001, K6s:0.0001, K7s:0.0001, K9s:0.0001, KJs:0.0004, KQs:0.0001, KK:0.0793, AKo:0.7808, A2s:0.1266, A3s:0.2303, A4s:0.2054, A5s:0.2956, A6s:0.2502, A7s:0.1140, A8s:0.1615, A9s:0.1498, ATs:0.0689, AJs:0.0233, AQs:0.5562, AKs:0.8552, AA:0.0213"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "A5o:0.0006, 66:0.0377, 77:0.0823, 88:0.0640, 99:0.3037, TT:0.4282, ATo:0.0046, JTs:0.0018, JJ:0.2622, AJo:0.0005, Q9s:0.0021, QTs:0.1644, QJs:0.1529, QQ:0.4791, AQo:0.2553, K4s:0.0003, K5s:0.0109, K6s:0.0007, K7s:0.0001, K8s:0.0002, K9s:0.0318, KTs:0.0121, KJs:0.0293, KQs:0.0697, KK:0.5900, AKo:0.2192, A2s:0.1934, A3s:0.5643, A4s:0.5345, A5s:0.4761, A6s:0.2378, A7s:0.3325, A8s:0.3403, A9s:0.3057, ATs:0.1005, AJs:0.0176, AQs:0.3242, AKs:0.1448, AA:0.0231"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@5|CO:4BET@11",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0035, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0049, AJo:0.0018, QQ:0.0844, AQo:0.0222, KK:0.0001, AKo:0.0106, AQs:0.1543, AKs:0.2021, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@5|CO:4BET@14.93",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0084, AJo:0.0027, QQ:0.0844, AQo:0.0344, KK:0.0001, AKo:0.0106, ATs:0.0002, AQs:0.1543, AKs:0.2021, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0161, 99:0.4660, TT, JJ, QQ, AQo:0.5930, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 33, 42s:0.0018, 43s:0.2507, 44, 52s:0.0019, 53s:0.4439, 54s:0.9866, 55, 63s:0.0007, 64s:0.8669, 65s:0.9990, 66, 74s:0.4719, 75s:0.9507, 76s:0.9883, 77, 83s:0.0001, 84s:0.0001, 85s:0.5285, 86s:0.9861, 87s:0.9645, 88:0.7636, 92s:0.0001, 96s:0.7551, 97s:0.9883, 98s:0.9962, 99:0.0044, T6s:0.0004, T7s:0.5148, T8s:0.9397, T9s:0.9803, KTo:0.0167, ATo:0.2247, J4s:0.0003, J6s:0.0047, J7s:0.7125, J8s:0.9265, J9s:0.9921, JTs:0.9068, QJo:0.0332, KJo:0.9050, AJo:0.8069, Q3s:0.0013, Q4s:0.0069, Q5s:0.0608, Q6s:0.3488, Q7s:0.8665, Q8s:0.8752, Q9s:0.8746, QTs:0.6889, QJs:0.5411, KQo:0.9101, AQo:0.0011, K2s:0.0020, K3s:0.0137, K4s:0.0196, K5s:0.0662, K6s:0.6117, K7s:0.7912, K8s:0.8959, K9s:0.7547, KTs:0.8349, KJs:0.6103, KQs:0.6138, A2s:0.6202, A3s:0.6311, A4s:0.5751, A5s:0.8214, A6s:0.9652, A7s:0.7514, A8s:0.8072, A9s:0.6677, ATs:0.7440, AJs:0.6756, AQs:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0052, A3o:0.0624, A4o:0.0626, A5o:0.0350, A6o:0.0165, 75s:0.0001, A7o:0.0242, A8o:0.1055, 99:0.0556, A9o:0.0701, T4s:0.0001, TT:0.0723, ATo:0.0551, JJ:0.0703, AJo:0.0228, Q3s:0.0003, Q5s:0.0003, QTs:0.0001, QQ:0.0060, AQo:0.0371, KK:0.0001, A2s:0.0255, A3s:0.0040, A5s:0.0001, A6s:0.0235, A7s:0.0048, A8s:0.0046, A9s:0.0004, AQs:0.0390, AKs:0.1042, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0132, 66:0.0001, 88:0.2363, 98s:0.0001, 99:0.9400, T9s:0.0001, TT:0.9277, ATo:0.0334, J9s:0.0003, JTs:0.0931, JJ:0.9297, QJo:0.2213, KJo:0.0918, AJo:0.1697, Q5s:0.0001, Q8s:0.0001, Q9s:0.1208, QTs:0.3086, QJs:0.4587, QQ:0.9940, KQo:0.0893, AQo:0.9618, K4s:0.0042, K5s:0.0002, K6s:0.0017, K7s:0.0605, K8s:0.0064, K9s:0.2374, KTs:0.1649, KJs:0.3896, KQs:0.3862, KK, AKo, A2s:0.3416, A3s:0.3579, A4s:0.4245, A5s:0.1775, A6s:0.0095, A7s:0.2368, A8s:0.1869, A9s:0.3309, ATs:0.2560, AJs:0.3244, AQs:0.9609, AKs:0.8957"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0274, 77:0.0087, 88:0.0351, 99:0.0030, TT:0.0344, ATo:0.0665, JTs:0.0014, JJ:0.1179, AJo:0.1538, QJs:0.1914, QQ:0.4231, AQo:0.2327, KJs:0.0187, KK:0.1205, AKo:0.0710, A2s:0.0492, A3s:0.2334, A4s:0.1089, A5s:0.4095, A6s:0.0077, A7s:0.0436, A8s:0.0031, A9s:0.1809, ATs:0.1844, AJs:0.4457, AQs:0.2850, AKs:0.4293, AA:0.7304"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0001, 66:0.0003, 77:0.0008, 88:0.0005, 99:0.0307, A9o:0.0001, TT:0.0778, ATo:0.0027, JJ:0.1701, AJo:0.0631, QJs:0.0115, QQ:0.2105, AQo:0.2148, K4s:0.0001, K5s:0.0001, K9s:0.0001, KTs:0.0003, KJs:0.0033, KQs:0.0004, KK:0.1716, AKo:0.2719, A2s:0.0027, A3s:0.0936, A4s:0.0907, A5s:0.1156, A6s:0.0366, A7s:0.0317, A8s:0.0056, A9s:0.0302, ATs:0.1681, AJs:0.0563, AQs:0.2453, AKs:0.1961, AA:0.1476"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0008, 77:0.0007, 99:0.0042, TT:0.0037, ATo:0.0052, JTs:0.0010, JJ:0.6974, AJo:0.0137, Q8s:0.0001, QJs:0.0261, QQ:0.3428, AQo:0.1328, K4s:0.0003, K5s:0.0003, K6s:0.0001, K9s:0.0003, KTs:0.0024, KJs:0.0029, KQs:0.0008, KK:0.7079, AKo:0.6445, A2s:0.0905, A3s:0.2657, A4s:0.2894, A5s:0.1211, A6s:0.1882, A7s:0.0261, A8s:0.0721, A9s:0.0277, ATs:0.5283, AJs:0.3029, AQs:0.4656, AKs:0.3746, AA:0.1220"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 32s:0.0019, 33:0.0076, 43s:0.0001, 53s:0.0015, 54s:0.0084, 55:0.0839, 63s:0.0004, 64s:0.0100, 65s:0.0091, 66:0.0001, 75s:0.0049, 76s:0.0019, 77:0.0369, 84s:0.0001, 85s:0.0002, 86s:0.0001, 87s:0.0012, 88:0.0683, 95s:0.0001, 96s:0.0001, 98s:0.0545, 99:0.0841, T4s:0.0001, T5s:0.0004, T7s:0.0296, T8s:0.0060, T9s:0.0789, TT:0.0072, ATo:0.0048, J2s:0.0001, J4s:0.0001, J5s:0.0005, J6s:0.0010, J8s:0.0011, J9s:0.0002, JTs:0.0109, JJ:0.0005, AJo:0.1068, Q5s:0.0001, Q8s:0.0002, AQo:0.0704, KTs:0.0039, ATs:0.0980, AJs:0.5414, AQs:0.0314"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0526, 32s:0.0498, 33:0.0337, 43s:0.0334, 44:0.1469, 53s:0.0096, 54s:0.0041, 55:0.1245, 62s:0.0001, 64s:0.0270, 65s:0.0572, 66:0.1600, 74s:0.0002, 75s:0.1317, 76s:0.0085, 77:0.1813, 85s:0.0116, 86s:0.0551, 87s:0.0369, 88:0.2976, 94s:0.0001, 96s:0.0284, 97s:0.0002, 98s:0.2209, 99:0.2937, T3s:0.0001, T4s:0.0017, T5s:0.0027, T6s:0.0271, T7s:0.0146, T8s:0.0925, T9s:0.3668, TT:0.5043, QTo:0.0001, KTo:0.0001, ATo:0.0340, J2s:0.0003, J3s:0.0154, J4s:0.0587, J5s:0.0019, J6s:0.0014, J7s:0.0128, J8s:0.0036, J9s:0.0586, JTs:0.2514, JJ:0.1825, KJo:0.0006, AJo:0.0746, Q3s:0.0021, Q4s:0.0001, Q8s:0.0006, QTs:0.0004, AQo:0.6124, KTs:0.0262, KJs:0.0008, A9s:0.0001, ATs:0.2936, AJs:0.0171, AQs:0.2024"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "22:0.2253, 32s:0.0025, 33:0.0792, 42s:0.0001, 43s:0.0789, 44:0.2092, 52s:0.0004, 53s:0.0105, 54s:0.0025, 55:0.1678, 65o:0.0006, 62s:0.0001, 63s:0.1340, 64s:0.0443, 65s:0.0425, 66:0.5569, 74s:0.0417, 75s:0.1710, 76s:0.0056, 77:0.2841, 84s:0.0001, 85s:0.0038, 86s:0.0810, 87s:0.0293, 88:0.4632, K8o:0.0007, 96s:0.0561, 97s:0.1183, 98s:0.3588, 99:0.4326, T9o:0.0006, T3s:0.0003, T4s:0.0117, T5s:0.0019, T6s:0.0919, T7s:0.1451, T8s:0.2050, T9s:0.2128, TT:0.4884, JTo:0.0020, QTo:0.0025, KTo:0.0001, ATo:0.0436, J2s:0.0001, J3s:0.0071, J4s:0.0682, J5s:0.0022, J6s:0.0009, J7s:0.0041, J8s:0.0259, J9s:0.0419, JTs:0.3109, JJ:0.3043, KJo:0.0008, AJo:0.1024, Q3s:0.0100, Q4s:0.0002, Q5s:0.0001, Q7s:0.0003, Q8s:0.0016, QTs:0.0003, AQo:0.3171, KTs:0.0459, KJs:0.0007, A9s:0.0003, ATs:0.2476, AJs:0.0102, AQs:0.7550"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.2534, JJ:0.0730, QQ:0.0680, AQo:0.0006, KK:0.2818, AKo:0.1428, AQs:0.2852, AKs:0.0745, AA:0.4449"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.2021, JJ:0.9270, QQ:0.9320, AQo:0.0227, KK:0.7182, AKo:0.8572, AQs:0.2727, AKs:0.9254, AA:0.5551"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0003, 55:0.1675, 66:0.2406, 77:0.3430, 88:0.5801, 99:0.9990, TT, JTs:0.0001, JJ:0.4879, AJo:0.0601, AQo:0.9995, ATs:0.1179, AJs:0.3366, AQs:0.9901"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "55:0.0020, 66:0.0838, 77:0.3481, 88:0.4909, 99:0.2506, TT:0.7037, ATo:0.0358, JJ:0.7003, AJo:0.3504, QQ:0.7093, AQo:0.7303, KJs:0.0401, KQs:0.0260, KK:0.1310, AKo:0.2410, A3s:0.0005, A4s:0.0489, A5s:0.2013, A6s:0.0003, A7s:0.1606, A9s:0.5525, ATs:0.2836, AJs:0.4594, AQs:0.3334, AKs:0.5938, AA:0.9176"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0008, 66:0.1786, 77:0.3178, 88:0.2414, 99:0.7492, TT:0.2963, ATo:0.0081, JTs:0.0003, JJ:0.2997, AJo:0.6461, QJs:0.0020, QQ:0.2907, AQo:0.2607, K9s:0.0001, KJs:0.0622, KQs:0.1946, KK:0.8690, AKo:0.7590, A3s:0.0003, A4s:0.0119, A5s:0.1053, A6s:0.0001, A7s:0.0857, A8s:0.0038, A9s:0.4222, ATs:0.7161, AJs:0.5406, AQs:0.6665, AKs:0.4062, AA:0.0824"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0165, 77:0.0256, 88:0.1278, 99:0.0261, TT:0.0025, JJ:0.1318, QQ:0.1657, AQo:0.0554, KJs:0.0350, KQs:0.3888, A5s:0.0001, A9s:0.0470, ATs:0.0888, AJs:0.0634, AQs:0.2487, AA:0.0001"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "TT:0.0923, ATo:0.1762, JJ:0.1077, AJo:0.0926, QQ:0.0002, A4s:0.0247, A5s:0.0201, A6s:0.1885, A7s:0.2209, A8s:0.1426, A9s:0.1993, ATs:0.0820, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0230, JJ:0.7604, AJo:0.0039, QQ:0.8341, AQo:0.2080, KJs:0.1364, KQs:0.2418, KK, AKo, A2s:0.1057, A3s:0.4233, A4s:0.6464, A5s:0.8425, A6s:0.3054, A7s:0.2829, A8s:0.3665, A9s:0.3298, ATs:0.8213, AJs:0.9365, AQs:0.7513, AKs"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|CO:4BET@11",
    "heroPos": "SB",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0005, 32s:0.0343, 43o:0.0095, 53o:0.0120, K3o:0.0001, A3o:0.0001, 42s:0.1309, 43s:0.0150, 54o:0.1030, 64o:0.0029, 52s:0.0227, 53s:0.0001, 65o:0.0255, Q5o:0.0001, 62s:0.0128, 63s:0.0106, 64s:0.0004, 76o:0.0370, A6o:0.1108, 73s:0.0099, 74s:0.0961, 75s:0.0067, 87o:0.0547, Q7o:0.0001, A7o:0.0529, 82s:0.0010, 83s:0.0001, 84s:0.0383, 85s:0.0148, 86s:0.0001, 98o:0.0011, J8o:0.0001, A8o:0.1331, 92s:0.0003, 94s:0.0003, 95s:0.0357, 96s:0.0004, 97s:0.0001, 98s:0.0013, J9o:0.0018, Q9o:0.0023, A9o:0.1478, JTo:0.0027, ATo:0.2406, J2s:0.0012, J3s:0.0038, J4s:0.0048, J5s:0.0733, J6s:0.0630, J7s:0.0047, JJ:0.2811, AJo:0.0430, Q6s:0.0003, QQ:0.2272, KK:0.1629, AKo:0.5436, AQs:0.0004, AKs:0.4527, AA:0.4859"
      },
      {
        "action": "5bet 28.32bb",
        "min": 0.0001,
        "range": "A2o:0.0230, 32s:0.0760, 43o:0.0040, 53o:0.0082, K3o:0.0006, A3o:0.0122, 42s:0.2719, 43s:0.0096, 54o:0.1037, 64o:0.0023, Q4o:0.0001, K4o:0.0001, 52s:0.0386, 53s:0.0002, 65o:0.0312, Q5o:0.0008, K5o:0.0004, 62s:0.0212, 63s:0.0185, 64s:0.0006, 76o:0.0586, A6o:0.4020, 73s:0.0176, 74s:0.1556, 75s:0.0104, 87o:0.1241, Q7o:0.0001, A7o:0.2535, 82s:0.0003, 83s:0.0001, 84s:0.0703, 85s:0.0387, 86s:0.0002, 98o:0.0014, Q8o:0.0146, K8o:0.0001, A8o:0.3616, 94s:0.0001, 95s:0.0381, 96s:0.0003, 97s:0.0001, 98s:0.0020, J9o:0.0043, Q9o:0.0143, A9o:0.4738, JTo:0.0011, ATo:0.2048, J2s:0.0725, J3s:0.0650, J4s:0.0160, J5s:0.2206, J6s:0.1023, J7s:0.0317, JJ:0.2182, AJo:0.0105, Q4s:0.0001, Q6s:0.0008, QQ:0.7672, KK:0.8104, AKo:0.4469, AQs:0.0003, AKs:0.5472, AA:0.5111"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|CO:4BET@28.32",
    "heroPos": "SB",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.4995, QQ:0.9944, KK:0.9733, AKo:0.9905, AQs:0.0007, AKs, AA:0.9970"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0008, TT:0.3505, JJ:0.9966, QQ:0.9718, AQo:0.2365, KK:0.9610, AKo:0.9121, AQs:0.8408, AKs:0.8295, AA:0.8259"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.0281, KK:0.0390, AKo:0.0869, AQs:0.0001, AKs:0.1705, AA:0.1741"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0014, 32s:0.0114, Q3o:0.0001, K3o:0.0030, 42s:0.1427, 43s:0.0243, 54o:0.0053, Q4o:0.0001, K4o:0.0023, 52s:0.0251, 53s:0.0003, 65o:0.0270, K5o:0.0004, 62s:0.0011, 63s:0.0283, 64s:0.0010, 76o:0.0655, Q6o:0.0002, K6o:0.0206, A6o:0.0001, 73s:0.0014, 74s:0.2136, 75s:0.0170, 87o:0.2040, J7o:0.0001, K7o:0.0055, A7o:0.0026, 84s:0.0901, 85s:0.0555, 86s:0.0003, 98o:0.0057, T8o:0.0001, J8o:0.1029, Q8o:0.0076, K8o:0.0069, A8o:0.0002, 94s:0.0003, 95s:0.0608, 96s:0.0008, 97s:0.0002, 98s:0.0033, J9o:0.0323, Q9o:0.1058, K9o:0.0001, A9o:0.1598, T3s:0.0002, T4s:0.0001, T6s:0.0001, T7s:0.0001, JTo:0.0312, QTo:0.0001, ATo:0.4242, J2s:0.1331, J3s:0.3584, J4s:0.0631, J5s:0.4268, J6s:0.1621, J7s:0.0519, JJ:0.4573, AJo:0.0496, Q4s:0.0001, Q6s:0.0012, QQ:0.7897, KK:0.2558, AKo:0.0005, AKs:0.6851, AA:0.2177"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "K2o:0.0001, K3o:0.0001, A6o:0.0014, 74s:0.0009, 75s:0.0001, 87o:0.0004, A7o:0.0008, J8o:0.0004, A8o:0.0003, 95s:0.0001, J9o:0.0001, A9o:0.0914, ATo:0.0213, J2s:0.0004, J4s:0.0001, J5s:0.0003, J6s:0.0009, J7s:0.0001, JJ:0.0422, AJo:0.0039, QQ:0.2047, KK:0.7175, AKo:0.9900, AQs:0.0007, AKs:0.3148, AA:0.7793"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.2230, JJ:0.8973, QQ:0.0001, KK:0.0029, AKo:0.0104, AKs:0.0041, AA:0.9837"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0043, JJ:0.1012, QQ, KK:0.9971, AKo:0.9895, AKs:0.9959, AA:0.0163"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0487, 42s:0.0799, 43s:0.0237, 54o:0.0076, Q4o:0.0001, 52s:0.0593, 53s:0.0003, 65o:0.0013, 62s:0.0037, 63s:0.0295, 64s:0.0010, 76o:0.0113, K6o:0.0003, A6o:0.0003, 73s:0.0081, 74s:0.2701, 75s:0.0170, 87o:0.2411, Q7o:0.0005, K7o:0.0001, A7o:0.0081, 82s:0.0001, 84s:0.1620, 85s:0.0548, 86s:0.0003, 98o:0.0060, T8o:0.0001, J8o:0.0003, Q8o:0.0030, K8o:0.0242, A8o:0.1587, 94s:0.0004, 95s:0.0863, 96s:0.0008, 97s:0.0002, 98s:0.0033, J9o:0.0325, Q9o:0.1197, K9o:0.0001, A9o:0.5871, T3s:0.0005, T4s:0.0001, T6s:0.0001, T7s:0.0001, JTo:0.0312, QTo:0.0001, ATo:0.4455, J3s:0.3085, J4s:0.0837, J5s:0.3275, J6s:0.2170, J7s:0.0522, JJ:0.4995, AJo:0.0535, Q4s:0.0001, Q6s:0.0012, QQ:0.9944, KK:0.9733, AKo:0.9905, AQs:0.0007, AKs, AA:0.9970"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@9",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, 42s:0.0001, 43s:0.0001, 65s:0.0001, 66:0.0004, 74s:0.0001, 77:0.0005, 88:0.0056, A8o:0.0001, 99:0.0080, T8s:0.0001, KTo:0.0001, ATo:0.0008, J4s:0.0002, J7s:0.0001, JJ:0.4114, Q4s:0.0001, Q6s:0.0001, Q8s:0.0001, QTs:0.0002, QQ, AQo:0.0001, K8s:0.0002, KTs:0.0068, KJs:0.0001, KQs:0.0037, KK, AKo:0.9421, A3s:0.0022, A6s:0.0024, A7s:0.0003, A9s:0.0002, ATs:0.0017, AJs:0.0001, AQs:0.0149, AKs:0.9620, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@9",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0009, KTo:0.0002, QQ:0.2079, KQo:0.0177, AQo:0.1092, KTs:0.0087, KQs:0.0525, KK:0.0221, A4s:0.0023, A6s:0.0003, A7s:0.0037, A8s:0.0082, A9s:0.0047, AJs:0.0003, AQs:0.1576, AKs:0.0011, AA:0.0001"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "A5o:0.0004, 88:0.0371, 99:0.0263, TT:0.4490, KTo:0.0054, ATo:0.0027, JJ:0.2148, QJo:0.0005, KJo:0.0282, AJo:0.0674, QTs:0.0006, QJs:0.0011, QQ:0.0659, KQo:0.0009, AQo:0.0556, K4s:0.0003, K5s:0.0081, K6s:0.0002, K7s:0.0004, K8s:0.0043, K9s:0.0316, KTs:0.0352, KJs:0.0590, KQs:0.1273, KK:0.2295, AKo:0.0495, A3s:0.0001, A4s:0.0277, A5s:0.0267, A6s:0.0024, A7s:0.0467, A8s:0.0017, A9s:0.0277, ATs:0.5434, AJs:0.0890, AQs:0.1165, AKs:0.0729, AA:0.9761"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0178, 77:0.0280, 88:0.0374, 99:0.0768, TT:0.0513, ATo:0.0001, JJ:0.6536, KJo:0.0001, AJo:0.0090, Q8s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0143, QQ:0.6964, KQo:0.0016, AQo:0.3591, K3s:0.0003, K4s:0.0253, K5s:0.0570, K6s:0.0299, K8s:0.0001, K9s:0.0367, KTs:0.0004, KJs:0.0346, KQs:0.0572, KK:0.7484, AKo:0.9505, A2s:0.0013, A3s:0.0890, A4s:0.0946, A5s:0.0907, A6s:0.0417, A7s:0.1434, A8s:0.0656, A9s:0.2820, ATs:0.0042, AJs:0.2226, AQs:0.6764, AKs:0.9254, AA:0.0239"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@9|CO:4BET@16",
    "heroPos": "SB",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.32bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0022, K2o:0.0075, Q3o:0.0002, K3o:0.0024, 42s:0.0096, Q4o:0.0007, K4o:0.0025, 52s:0.0013, Q5o:0.0002, K5o:0.0004, Q6o:0.0003, K6o:0.0019, Q7o:0.0001, K7o:0.0035, 88:0.0005, Q8o:0.0025, K8o:0.0009, Q9o:0.0020, ATo:0.0059, JJ:0.0126, Q2s:0.0004, Q3s:0.0005, QQ:0.0056, KK:0.0257, AKo:0.0095, AQs:0.0063"
      },
      {
        "action": "5bet 28.32bb",
        "min": 0.0001,
        "range": "KK:0.0010, AA:0.0030"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@9|CO:4BET@28.32",
    "heroPos": "SB",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0005, JJ:0.0126, QQ:0.0056, KK:0.0267, AKo:0.0095, AQs:0.0061, AA:0.0030"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0004, 99:0.0078, A9o:0.0001, TT:0.0024, KTo:0.0001, ATo:0.0004, JJ:0.0048, QJo:0.0002, AJo:0.0006, QTs:0.0032, QJs:0.0008, QQ:0.0006, KQo:0.0004, AQo:0.0004, K3s:0.0002, K4s:0.0001, K5s:0.0001, K6s:0.0008, K7s:0.0070, K8s:0.0014, KTs:0.0026, KJs:0.0047, KQs:0.0014, KK:0.0194, AKo:0.0309, A2s:0.0016, A3s:0.0013, A4s:0.0053, A5s:0.0002, A6s:0.0007, A7s:0.0031, A8s:0.0016, A9s:0.0073, ATs:0.0185, AJs:0.0153, AQs:0.0026, AKs:0.0621, AA:0.3159"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0001, 77:0.0001, 88:0.0025, 99:0.0033, TT:0.0004, KTo:0.0001, ATo:0.0026, JTs:0.0001, JJ:0.0028, QJo:0.0006, AJo:0.0028, Q8s:0.0004, QTs:0.0001, QJs:0.0004, QQ:0.0965, KQo:0.0002, AQo:0.0016, K4s:0.0001, K5s:0.0002, K7s:0.0129, K9s:0.0020, KTs:0.0054, KJs:0.0052, KQs:0.0043, KK:0.9753, AKo:0.2809, A2s:0.0004, A3s:0.0018, A4s:0.0086, A5s:0.0034, A6s:0.0005, A7s:0.0035, A8s:0.0045, A9s:0.0057, ATs:0.0021, AJs:0.0215, AQs:0.0068, AKs:0.1229, AA:0.6841"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0069, K2o:0.0254, Q3o:0.0007, K3o:0.0074, 42s:0.0116, Q4o:0.0021, K4o:0.0076, 52s:0.0015, Q5o:0.0006, K5o:0.0012, Q6o:0.0007, K6o:0.0047, Q7o:0.0004, K7o:0.0097, 88:0.0005, Q8o:0.0057, K8o:0.0026, Q9o:0.0034, ATo:0.0060, JJ:0.0126, Q2s:0.0006, Q3s:0.0007, QQ:0.0056, KK:0.0267, AKo:0.0095, AQs:0.0063, AA:0.0030"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@28.32",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0004, 99, TT, JJ, QQ, AQo:0.0016, KK, AKo, AJs:0.9756, AQs:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ, QQ, KK, AKo:0.3657, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@28.32|BB:CALL@13.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9998, QQ, KK, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 28.32bb"
    ],
    "bands": [
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.2041, K2o:0.0253, A2o:0.0509, 33:0.0007, 63o:0.0001, Q3o:0.0520, K3o:0.0158, A3o:0.0050, 43s:0.0002, 44:0.0004, Q4o:0.2414, K4o:0.0169, A4o:0.0287, 53s:0.0001, 54s:0.0075, 55:0.0004, Q5o:0.0591, K5o:0.0024, A5o:0.0010, 62s:0.0006, 65s:0.0018, 76o:0.0004, Q6o:0.0829, K6o:0.0416, A6o:0.0090, 73s:0.0028, 74s:0.0458, 75s:0.0119, 76s:0.0134, 77:0.0510, 97o:0.0001, Q7o:0.1088, K7o:0.0012, A7o:0.0002, 82s:0.0225, 85s:0.0087, 88:0.0008, Q8o:0.0664, A8o:0.0021, 92s:0.0492, 93s:0.0170, 96s:0.0016, 97s:0.0079, 99:0.0040, Q9o:0.0004, K9o:0.0116, A9o:0.0114, T2s:0.0001, T3s:0.0002, TT:0.3215, QTo:0.0848, KTo:0.0023, ATo:0.0099, J4s:0.0026, J5s:0.0069, JJ:0.0073, QJo:0.0200, KJo:0.0042, Q2s:0.2344, Q3s:0.1947, Q4s:0.2305, Q5s:0.7356, Q6s:0.0674, Q7s:0.2875, Q8s:0.3689, Q9s:0.1802, QTs:0.3974, QJs:0.0026, QQ:0.3029, KQo:0.0509, AQo:0.9207, K2s:0.0345, K3s:0.0051, K4s:0.0593, K5s:0.0328, K6s:0.0124, K7s:0.0428, K8s:0.0115, K9s:0.1119, KJs:0.0097, KQs:0.0295, KK:0.3368, AKo:0.4708, A2s:0.1755, A3s:0.2724, A4s:0.0804, A5s:0.0514, A6s:0.0049, A7s:0.1788, A8s:0.0235, A9s:0.0606, ATs:0.0222, AJs:0.0509, AQs:0.6103, AKs:0.6844, AA:0.9894"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0002, Q2o:0.1462, K2o:0.0002, Q3o:0.1324, K3o:0.0045, Q4o:0.0785, 53s:0.0007, 54s:0.0004, Q5o:0.0093, 65s:0.0001, 66:0.0024, Q6o:0.0779, 76s:0.0192, Q7o:0.0157, 85s:0.0003, 87s:0.0049, Q8o:0.0438, K8o:0.0052, Q9o:0.0207, T9s:0.0005, TT:0.1127, QTo:0.1721, J4s:0.0001, JJ:0.0911, QJo:0.1544, KJo:0.0071, Q2s:0.2216, Q3s:0.4736, Q4s:0.0754, Q5s:0.0002, Q6s:0.3016, Q7s:0.4036, Q8s:0.1330, Q9s:0.2548, QTs:0.1953, QJs:0.0044, QQ:0.5935, KQo:0.1963, AQo:0.0505, K2s:0.2399, K3s:0.0168, K4s:0.2394, K5s:0.0013, K6s:0.0171, K7s:0.0024, K9s:0.0011, KTs:0.0025, KJs:0.0072, KQs:0.0116, KK:0.5826, AKo:0.5031, A2s:0.0001, A4s:0.0134, A5s:0.0038, A6s:0.0001, A7s:0.0122, A8s:0.0282, A9s:0.0001, ATs:0.0005, AJs:0.0333, AQs:0.2104, AKs:0.2861, AA:0.0103"
      },
      {
        "action": "3bet 28.32bb",
        "min": 0.0001,
        "range": "K2o:0.0014, A2o:0.0036, 33:0.0144, K3o:0.0027, 43s:0.0344, 44:0.0158, A4o:0.0023, 52s:0.0012, 53s:0.0001, 54s:0.0002, A5o:0.0096, 66:0.0011, K6o:0.0002, 73s:0.0021, 74s:0.0056, 75s:0.0004, 77:0.0064, A7o:0.0013, 83s:0.0002, 84s:0.0002, 85s:0.0007, 87s:0.0176, 88:0.0073, K8o:0.0020, A8o:0.0008, 98s:0.0027, 99:0.0025, T2s:0.0006, T5s:0.0004, TT:0.0342, J6s:0.0004, J8s:0.0001, JJ:0.0001, Q3s:0.0029, Q4s:0.0296, Q5s:0.0011, Q6s:0.0009, Q7s:0.0063, Q8s:0.0006, Q9s:0.0030, QTs:0.0005, QJs:0.0004, QQ:0.1036, KQo:0.6763, AQo:0.0254, K2s:0.0189, K3s:0.0226, K4s:0.0238, K5s:0.0427, K6s:0.0247, K7s:0.0260, K8s:0.0358, K9s:0.0318, KTs:0.0396, KJs:0.0085, KQs:0.9583, KK:0.0806, AKo:0.0261, A2s:0.0309, A3s:0.0188, A4s:0.0233, A5s:0.0393, A6s:0.0002, A7s:0.0344, A8s:0.0334, A9s:0.0224, ATs:0.0442, AJs:0.0289, AQs:0.1774, AKs:0.0289, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7069, 33:0.9908, 42s:0.0016, 43s:0.0031, 44:0.9543, 53s:0.1661, 54s:0.3884, 55:0.9411, 62s:0.0012, 63s:0.0152, 65s:0.2079, 66:0.9603, 86o:0.0007, K6o:0.0001, 72s:0.0012, 75s:0.0330, 76s:0.0016, 77:0.9803, 84s:0.0008, 86s:0.0560, 87s:0.0320, 88:0.9208, K8o:0.0001, 92s:0.0001, 93s:0.0011, 97s:0.0189, 98s:0.0452, 99:0.9569, T4s:0.0007, T9s:0.1463, TT:0.8402, J4s:0.0001, J6s:0.0012, J7s:0.0002, J8s:0.0005, JTs:0.1182, JJ:0.6263, KJo:0.0001, AQo:0.2326, K2s:0.0003, K4s:0.3931, K5s:0.0015, K7s:0.3333, K8s:0.0076, K9s:0.0041, KTs:0.0373, KJs:0.4028, KQs:0.0773, AKo:0.1535, A5s:0.7586, A7s:0.0249, A8s:0.0058, ATs:0.0264, AJs:0.3968, AQs:0.1879, AKs:0.1643"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "54s:0.0001, 63s:0.0008, 65s:0.0287, 88:0.0073, Q8o:0.0081, 97s:0.0108, TT:0.0073, J8s:0.0006, JJ:0.3182, KJo:0.0007, Q2s:0.0069, Q3s:0.0474, Q5s:0.0031, Q6s:0.0050, Q7s:0.0138, Q9s:0.0254, QJs:0.0872, QQ:0.1907, KQo:0.0117, AQo:0.4707, K4s:0.0061, K7s:0.0070, K8s:0.0102, KTs:0.0035, KQs:0.0309, KK:0.0006, AKo:0.2657, A4s:0.0774, A5s:0.0093, A6s:0.0299, A7s:0.0013, A9s:0.0392, ATs:0.0489, AJs:0.0069, AQs:0.0681, AKs:0.1237, AA:0.9989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "53s:0.0011, 54s:0.0001, 55:0.0001, JJ:0.0001, Q3s:0.0088, Q4s:0.0001, Q5s:0.0051, Q6s:0.0004, Q7s:0.0002, Q9s:0.0097, QQ:0.8092, KQo:0.2119, AQo:0.0430, K2s:0.0001, K4s:0.0083, K5s:0.0172, K6s:0.0001, K7s:0.0080, K8s:0.0001, K9s:0.0001, KTs:0.0058, KQs:0.8847, KK:0.9994, AKo:0.5806, A4s:0.0103, A5s:0.0024, A6s:0.0002, A7s:0.0206, A9s:0.0153, ATs:0.0082, AQs:0.7176, AKs:0.7119, AA:0.0011"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 88:0.0020, 99:0.0003, TT:0.0047, JJ:0.0220, KJo:0.0001, Q9s:0.0001, QTs:0.0226, QQ:0.1938, AQo:0.0004, K4s:0.0001, K5s:0.0057, K7s:0.0001, K8s:0.0108, K9s:0.0088, KTs:0.0159, KQs:0.0002, KK:0.0438, AKo:0.0002, A2s:0.0005, A3s:0.0031, A4s:0.0006, A5s:0.0025, A6s:0.0103, A8s:0.0005, ATs:0.0014, AJs:0.0485, AQs:0.0663, AKs:0.0004, AA:0.0630"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0202, 66:0.0636, 77:0.0389, 88:0.0407, 99:0.0124, TT:0.3166, ATo:0.0001, JJ:0.0025, AJo:0.0043, Q9s:0.0001, QTs:0.0006, QJs:0.0001, QQ:0.1046, AQo:0.0002, K4s:0.0001, K5s:0.0004, K6s:0.0001, K8s:0.0012, KTs:0.0118, KJs:0.0633, KK:0.3594, AKo:0.5141, A2s:0.0046, A3s:0.0001, A4s:0.0002, A5s:0.1815, A6s:0.1587, A7s:0.1128, A9s:0.0003, AJs:0.2489, AQs:0.3525, AKs:0.5514, AA:0.1482"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0007, 66:0.0175, 77:0.0346, 88:0.2828, 99:0.0039, A9o:0.0010, TT:0.0385, JJ:0.3240, KJo:0.0007, AJo:0.0209, Q8s:0.0001, Q9s:0.0003, QTs:0.0072, QJs:0.0131, QQ:0.0188, AQo:0.0001, K4s:0.0074, K5s:0.0074, K6s:0.0029, K7s:0.0038, K8s:0.0078, K9s:0.0188, KTs:0.0373, KJs:0.0034, KQs:0.0001, KK:0.5638, AKo:0.4733, A2s:0.0197, A3s:0.0044, A4s:0.0178, A5s:0.0151, A6s:0.0158, A7s:0.0107, A8s:0.1580, A9s:0.3943, ATs:0.0206, AJs:0.0769, AQs:0.0226, AKs:0.2615, AA:0.7888"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0017, 66:0.0141, 77:0.0042, 88:0.0250, TT:0.0010, JJ:0.0094, QQ:0.4208, AQo:0.0040, KQs:0.0090, KK:0.0005, A5s:0.0013, ATs:0.0139, AJs:0.0086, AQs:0.7434"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "55:0.0022, 66:0.0015, 77:0.0008, 88:0.0042, TT:0.0003, JJ:0.0088, QQ:0.0145, AQo:0.0001, KK:0.0008, A5s:0.0001, ATs:0.0019, AJs:0.0209, AQs:0.0132"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "55:0.0058, 66:0.0102, 77:0.0041, 88:0.0076, TT:0.0026, JJ:0.2188, QQ:0.1399, AQo:0.0002, KK:0.0073, A5s:0.0002, ATs:0.0031, AJs:0.0456, AQs:0.0132"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0006, TT:0.0056, JJ:0.0187, QQ:0.0178, K6s:0.0014, KTs:0.0028, KK:0.1363, AKo:0.1202, A2s:0.0068, A4s:0.0002, A5s:0.0011, A7s:0.0110, ATs:0.0002, AJs:0.0001, AKs:0.5646, AA:0.0277"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0002, TT:0.0573, JJ:0.0056, QTs:0.0001, QQ:0.0085, K4s:0.0006, K6s:0.0011, KTs:0.0061, KK:0.8635, AKo:0.8669, A2s:0.0090, A4s:0.0001, A5s:0.0006, A6s:0.0001, A7s:0.0174, A9s:0.0001, ATs:0.0004, AQs:0.0002, AKs:0.4270, AA:0.9723"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0020, TT:0.0005, JJ:0.0268, QQ:0.7271, KK:0.0086, AQs:0.0588"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0012, QJs:0.0003, QQ:0.0206, AQo:0.0240, K4s:0.0001, K9s:0.0354, KQs:0.0001, KK:0.0424, AKo:0.0001, A5s:0.0002, A6s:0.0223, A7s:0.0003, A9s:0.0154, AQs:0.0097, AKs:0.0289, AA:0.2006"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0007, A5o:0.0072, 66:0.0143, A7o:0.0002, A8o:0.0017, A9o:0.0242, TT:0.0867, ATo:0.0061, JTs:0.0009, JJ:0.0054, AJo:0.0027, QJs:0.0026, QQ:0.0003, KQo:0.0017, AQo:0.0195, K6s:0.0042, K8s:0.0001, K9s:0.0298, KTs:0.0936, AKo:0.1944, A3s:0.0390, A4s:0.3522, A5s:0.0377, A6s:0.1052, A7s:0.2379, A8s:0.1060, A9s:0.1988, ATs:0.2688, AQs:0.1547, AKs:0.0681, AA:0.7234"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0007, 77:0.0012, 99:0.0305, TT:0.1704, JTs:0.0005, JJ:0.2063, QQ:0.0804, K5s:0.0016, K6s:0.0427, K9s:0.0066, KTs:0.0395, KJs:0.0001, KK:0.9571, AKo:0.8050, A2s:0.0001, A3s:0.2313, A4s:0.0166, A5s:0.0009, A6s:0.0852, A7s:0.0757, A8s:0.3037, A9s:0.0088, ATs:0.0757, AJs:0.1171, AQs:0.0228, AKs:0.9025, AA:0.0760"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0004, TT:0.0001, QQ:0.4636, AQo:0.0056, ATs:0.0001, AJs:0.0010, AQs:0.5000"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "JJ:0.0021, AQo:0.0007, KK:0.0006, ATs:0.0003, AJs:0.0018, AQs:0.0058"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0014, 66:0.0085, 77:0.0011, 88:0.0201, TT:0.0017, JJ:0.0834, QQ:0.2623, AQo:0.0054, KK:0.0080, A5s:0.0001, ATs:0.0020, AJs:0.0070, AQs:0.2704"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0005, ATo:0.0001, QTs:0.0001, QQ:0.0001, K8s:0.0001, K9s:0.0001, KK:0.0003, A4s:0.0002, A8s:0.0022, ATs:0.0001, AJs:0.0002, AQs:0.1048, AKs:0.0003, AA:0.1368"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "88:0.0035, TT:0.0972, JJ:0.0016, QTs:0.0083, QJs:0.0110, QQ:0.0383, KQo:0.0895, AQo:0.0027, K4s:0.0300, K5s:0.0379, K8s:0.0432, K9s:0.0913, KTs:0.0017, KQs:0.0001, KK:0.0497, AKo:0.0328, A3s:0.0767, A4s:0.0009, A5s:0.0786, A6s:0.0017, A8s:0.0558, AA:0.1306"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0008, 66:0.0028, 88:0.0230, 99:0.0046, TT:0.0589, KTo:0.0024, JJ:0.0369, QJs:0.0002, QQ:0.1246, AQo:0.0040, K3s:0.0001, K4s:0.0005, K5s:0.0407, K9s:0.0006, KTs:0.0043, KJs:0.0104, KK:0.9457, AKo:0.9383, A2s:0.0022, A4s:0.0100, A5s:0.0223, A6s:0.0016, A7s:0.0001, A8s:0.0006, ATs:0.0004, AJs:0.0135, AQs:0.0023, AKs:0.9985, AA:0.7326"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1017, AQo:0.0001, KQs:0.0983, AJs:0.0003, AQs:0.0183"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "JJ:0.0010, QQ:0.0231, AQo:0.0009, KK:0.0053, AJs:0.0002, AQs:0.0137"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0180, 66:0.0044, 77:0.0018, 88:0.0217, TT:0.0016, JJ:0.0690, QQ:0.3241, AQo:0.0002, KQs:0.0104, KK:0.0033, A5s:0.0006, ATs:0.0048, AJs:0.0029, AQs:0.2183"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@28.32",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0012, TT:0.0008, JJ:0.0003, AJo:0.0001, QTs:0.0001, QQ:0.2170, K7s:0.0001, K8s:0.0002, KTs:0.0004, KJs:0.0001, KQs:0.0001, KK:0.9989, AKo:0.1332, A2s:0.0001, A5s:0.0002, A7s:0.0005, A8s:0.0001, AJs:0.0010, AQs:0.0032, AKs:0.4794, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@28.32",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0423, QQ:0.6247, KK:0.0086"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "K2o:0.3696, A2o:0.0100, 33:0.0006, K3o:0.1541, A3o:0.0044, K4o:0.0739, A4o:0.0039, 55:0.0981, K5o:0.3474, A5o:0.0056, 63s:0.0001, 66:0.2160, J6o:0.0001, K6o:0.0131, A6o:0.0022, 77:0.1495, K7o:0.1450, A7o:0.0009, 82s:0.0002, 88:0.3341, K8o:0.1980, A8o:0.0112, 99:0.3513, K9o:0.1142, A9o:0.0045, TT:0.2012, KTo:0.2181, ATo:0.0133, J4s:0.0001, J8s:0.0001, J9s:0.0008, JJ:0.4423, KJo:0.1541, AJo:0.0169, Q6s:0.0005, Q9s:0.0007, QTs:0.0005, QQ:0.4674, KQo:0.0417, AQo:0.0381, K2s:0.0990, K3s:0.0175, K4s:0.0945, K5s:0.1534, K6s:0.1713, K7s:0.2342, K8s:0.1249, K9s:0.1802, KTs:0.2490, KJs:0.0516, KQs:0.1788, KK:0.7088, AKo:0.9388, A2s:0.0079, A3s:0.0118, A4s:0.0001, A6s:0.0037, A7s:0.0037, A8s:0.0211, A9s:0.0034, ATs:0.0027, AJs:0.0205, AQs:0.1278, AKs:0.9524, AA"
      },
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.0134, A2o:0.0010, 33:0.0085, 42s:0.0005, 44:0.1153, 52s:0.0002, 54s:0.1151, 55:0.0089, A5o:0.0014, 63s:0.0001, 65s:0.2226, 66:0.0521, 74s:0.0001, 75s:0.0011, 76s:0.2386, 77:0.0634, 82s:0.0004, 84s:0.0025, 85s:0.0006, 86s:0.0020, 87s:0.3678, 88:0.0401, 95s:0.0019, 97s:0.0866, 98s:0.0080, 99:0.0648, A9o:0.0001, T8s:0.0086, T9s:0.0005, TT:0.0237, KTo:0.0224, ATo:0.0016, J7s:0.0005, J9s:0.0015, JTs:0.0087, JJ:0.1922, AJo:0.0039, Q6s:0.0018, Q9s:0.0001, QTs:0.0015, QJs:0.0008, QQ:0.3435, KQo:0.0001, AQo:0.0010, K2s:0.2358, K3s:0.2000, K4s:0.0678, K5s:0.2416, K6s:0.1064, K7s:0.2826, K8s:0.1106, K9s:0.2372, KTs:0.3001, KJs:0.5040, KQs:0.2471, KK:0.2912, AKo:0.0612, A2s:0.2688, A3s:0.2470, A4s:0.3823, A5s:0.3115, A6s:0.2669, A7s:0.2932, A8s:0.1640, A9s:0.2837, ATs:0.1950, AJs:0.2335, AQs:0.1626, AKs:0.0476, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0072, A2o:0.0011, 44:0.0025, 55:0.0052, 66:0.0001, 77:0.0425, 88:0.0012, 99:0.0213, TT:0.1590, JJ:0.1856, KJo:0.0058, QQ:0.2003, AQo:0.0228, K4s:0.0339, K5s:0.0104, K6s:0.0562, K7s:0.1112, K8s:0.0194, K9s:0.0201, KTs:0.0453, KJs:0.0615, KQs:0.0495, KK:0.1373, AKo:0.3568, A2s:0.0062, A4s:0.0515, A5s:0.0092, A6s:0.0038, A7s:0.0012, A8s:0.0064, A9s:0.0013, ATs:0.0090, AJs:0.0262, AQs:0.0934, AKs:0.4035, AA:0.8999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0029, 33:0.0007, 44:0.0126, 53s:0.0001, 54s:0.0005, 55:0.0012, 66:0.0002, 77:0.0137, 87s:0.0010, 88:0.0356, A8o:0.0006, 96s:0.0006, 99:0.0136, TT:0.0202, ATo:0.0003, JJ:0.7235, QQ:0.7838, AQo:0.0009, K4s:0.0316, K6s:0.0005, K7s:0.0226, K8s:0.0650, K9s:0.0843, KTs:0.0114, KJs:0.2827, KQs:0.0874, KK:0.8627, AKo:0.6432, A2s:0.0009, A4s:0.0044, A5s:0.0003, A7s:0.0006, A8s:0.0020, A9s:0.0019, ATs:0.0012, AJs:0.0436, AQs:0.0033, AKs:0.5965, AA:0.1001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.1209, 77:0.1001, 88:0.2322, 99:0.1549, TT:0.0605, JTs:0.0002, JJ:0.5100, QQ:0.9294, AQo:0.2000, K5s:0.0002, K6s:0.0231, K7s:0.0001, K9s:0.1235, KTs:0.2872, KJs:0.4512, KQs:0.2697, KK:0.0388, AKo:0.0037, A2s:0.0001, A3s:0.0001, A4s:0.0774, A5s:0.1080, A6s:0.0086, A7s:0.0906, A8s:0.2949, A9s:0.1236, ATs:0.2886, AJs:0.1047, AQs:0.9573"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0006, A5o:0.0239, A7o:0.0002, A8o:0.0011, A9o:0.0108, KTo:0.0129, ATo:0.0851, JJ:0.0048, KJo:0.0782, AJo:0.0970, KQo:0.0078, AQo:0.0923, K3s:0.0016, K4s:0.0582, K5s:0.0236, K6s:0.1041, K7s:0.1025, K8s:0.0854, K9s:0.0629, KTs:0.0209, KJs:0.0500, KQs:0.1139, AKo:0.1357, A2s:0.0423, A3s:0.0933, A4s:0.0752, A5s:0.0746, A6s:0.1154, A7s:0.1045, A8s:0.0994, A9s:0.1074, ATs:0.0692, AJs:0.1504, AQs:0.0424, AKs:0.2647, AA"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0250, 88:0.0971, 99:0.2519, TT:0.4222, ATo:0.0001, JJ:0.1594, AJo:0.0012, K4s:0.0001, K5s:0.0001, K6s:0.0031, K7s:0.0097, K8s:0.0004, K9s:0.0905, KTs:0.3651, KJs:0.2450, KQs:0.0002, KK:0.9612, AKo:0.8607, A2s:0.1165, A3s:0.1859, A4s:0.2257, A5s:0.4486, A6s:0.1239, A7s:0.1599, A8s:0.1313, A9s:0.2138, ATs:0.4130, AJs:0.0361, AKs:0.7353"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|CO:4BET@11",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0009, QQ:0.0094, AQo:0.0105, KK:0.0485, AKo:0.0002, A5s:0.0005, A6s:0.0001, A7s:0.0003, A9s:0.0001, ATs:0.0010, AJs:0.0017, AQs:0.0006, AA:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, JJ:0.0198, QQ:0.1360, AQo:0.2725, KK:0.5151, AKo:0.2494, A2s:0.0360, A3s:0.0745, A4s:0.1252, A5s:0.1948, A6s:0.0640, A7s:0.0472, A8s:0.1207, A9s:0.0121, ATs:0.0854, AJs:0.0544, AQs:0.0060, AKs:0.3793, AA:0.9749"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|CO:4BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0267, QQ:0.0316, KK:0.8617, AKo:0.2503, AKs:0.3793, AA:0.9754"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0108, QQ:0.4153, KTs:0.0001, KK:0.4985, AKo:0.3654, A3s:0.0003, A8s:0.0001, AJs:0.0002, AKs:0.5313, AA:0.8922"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "QQ:0.3113, KTs:0.0001, KK:0.5000, AJs:0.0001, AQs:0.0001, AKs:0.0158, AA:0.1078"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0793, QQ:0.1057, AQo:0.1334, K7s:0.0022, K9s:0.0002, KTs:0.0032, KQs:0.0146, KK:0.0010, AKo:0.0007, A3s:0.0002, A4s:0.0009, A5s:0.0467, A7s:0.0010, A8s:0.0007, A9s:0.0018, ATs:0.2048, AJs:0.0976, AQs:0.0064, AKs:0.1196, AA:0.0036"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "JJ:0.2683, QQ:0.1404, AQo:0.0588, KK:0.8607, AKo:0.2496, A2s:0.0007, A3s:0.0004, A4s:0.0007, A5s:0.0003, A7s:0.0004, A8s:0.0005, ATs:0.0006, AJs:0.0003, AQs:0.0012, AKs:0.2597, AA:0.9718"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0017, JJ:0.0358, QQ:0.2998, KK:0.9866, AKo:0.0034, AQs:0.0021, AKs:0.2957, AA:0.6096"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "QJs:0.0001, QQ:0.5014, KK:0.0133, AKo:0.0002, A4s:0.0001, A9s:0.0001, AQs:0.0003, AKs:0.0390, AA:0.3904"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.3323, AJo:0.0005, QQ:0.2461, AQo:0.0856, KTs:0.0001, KQs:0.0080, KK:0.8617, AKo:0.2503, A3s:0.0141, A4s:0.0002, A5s:0.0040, A6s:0.0018, A9s:0.0053, ATs:0.0598, AJs:0.0611, AQs:0.0031, AKs:0.3793, AA:0.9754"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "QQ:0.0006, KK:0.1600, AKo:0.0049, A7s:0.0001, ATs:0.0005, AKs:0.0067, AA:0.0069"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0013, ATo:0.0002, JJ:0.0007, QQ:0.0023, AQo:0.0009, KK:0.8368, AKo:0.5263, A6s:0.0004, A7s:0.0001, A9s:0.0001, ATs:0.0002, AQs:0.0007, AKs:0.9838, AA:0.9930"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0344, QQ:0.0075, AQo:0.0264, KK:0.0187, AKo:0.0001, A5s:0.0013, ATs:0.0009, AJs:0.0063, AQs:0.0003, AKs:0.0003, AA:0.0159"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.2174, QQ:0.2386, AQo:0.0782, K4s:0.0001, K5s:0.0002, K6s:0.0005, KTs:0.0008, KQs:0.0072, KK:0.8430, AKo:0.2501, A2s:0.0299, A3s:0.0151, A4s:0.0916, A5s:0.1456, A6s:0.0167, A7s:0.0438, A8s:0.0629, A9s:0.0111, ATs:0.0559, AJs:0.0332, AQs:0.0044, AKs:0.3790, AA:0.9595"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1496, QQ:0.0017, KK:0.9993, AQs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@28.32",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.3476, QQ:0.2461, AQo:0.0003, KK:0.8617, AKo:0.2143, AJs:0.0001, AQs:0.0043, AKs:0.3775, AA:0.9754"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.0593, K2o:0.0125, 33:0.2145, K3o:0.0259, 42s:0.0245, 43s:0.1156, 44:0.0156, K4o:0.0004, A4o:0.0209, 53s:0.0525, 54s:0.0101, 55:0.2849, K5o:0.0019, 62s:0.0080, 63s:0.0033, 64s:0.0008, 65s:0.0082, 66:0.2614, K6o:0.1842, 75s:0.0088, 76s:0.0068, 77:0.0613, K7o:0.0268, A7o:0.0240, 86s:0.0247, 87s:0.0007, 88:0.1444, K8o:0.0434, 93s:0.0506, 94s:0.0001, 95s:0.0234, 97s:0.0205, 98s:0.0331, 99:0.2739, K9o:0.0393, A9o:0.0090, T7s:0.0109, TT:0.4410, KTo:0.0720, ATo:0.0041, J9s:0.0053, JTs:0.0339, JJ:0.3664, KJo:0.0005, AJo:0.0193, Q8s:0.0518, QQ:0.7118, KQo:0.1786, AQo:0.2057, K2s:0.1099, K3s:0.0083, K4s:0.0525, K5s:0.0001, K6s:0.0935, K7s:0.1714, K8s:0.1407, K9s:0.2549, KTs:0.3761, KJs:0.0088, KK:0.1246, AKo:0.1859, A2s:0.1474, A3s:0.1476, A4s:0.1080, A5s:0.1001, A6s:0.1910, A7s:0.4531, A8s:0.1621, A9s:0.5892, ATs:0.2611, AJs:0.2836, AQs:0.1964, AKs:0.5449, AA:0.6412"
      },
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.0241, K2o:0.0031, A2o:0.0049, 33:0.3539, K3o:0.0022, A3o:0.2022, 44:0.2057, A4o:0.2366, 53s:0.0227, 54s:0.0005, 55:0.4874, 85o:0.0002, A5o:0.0015, 63s:0.0214, 64s:0.0004, 65s:0.1008, 66:0.4398, A6o:0.0125, 74s:0.0001, 75s:0.1036, 77:0.1852, K7o:0.0027, A7o:0.0781, 83s:0.0002, 86s:0.0925, 87s:0.1211, 88:0.2903, K8o:0.0061, A8o:0.0064, 92s:0.0003, 93s:0.0155, 94s:0.0001, 95s:0.0021, 97s:0.0170, 98s:0.2881, 99:0.4595, J9o:0.0001, K9o:0.0051, A9o:0.0062, T2s:0.0001, T4s:0.0001, T5s:0.0001, T6s:0.0014, T8s:0.0015, T9s:0.0001, TT:0.0871, QTo:0.0002, ATo:0.0849, J2s:0.0001, J7s:0.0004, J9s:0.0178, JJ:0.5235, QJo:0.0004, KJo:0.0144, AJo:0.2053, Q3s:0.0001, Q6s:0.0001, Q8s:0.0187, Q9s:0.0004, QJs:0.0003, QQ:0.1388, AQo:0.1548, K2s:0.2585, K3s:0.1260, K4s:0.0744, K5s:0.0513, K6s:0.0252, K7s:0.3032, K8s:0.2412, K9s:0.4017, KTs:0.2116, KJs:0.3842, KQs:0.2326, KK:0.8754, AKo:0.8136, A2s:0.7686, A3s:0.6915, A4s:0.4459, A5s:0.7457, A6s:0.6502, A7s:0.4586, A8s:0.8237, A9s:0.3236, ATs:0.7006, AJs:0.4484, AQs:0.7981, AKs:0.4547, AA:0.3588"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, J9s:0.0001, JJ:0.0001, QQ:0.0915, KK, AKo:0.9893, A4s:0.3312, A9s:0.0006, AJs:0.0378, AQs:0.1812, AKs:0.9907, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0020, AQo:0.0002, K7s:0.0001, K9s:0.0015, KTs:0.0037, KJs:0.0018, KQs:0.0003, A3s:0.0001, ATs:0.0001, AJs:0.0013, AQs:0.0001, AA:0.0204"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "88:0.0054, 99:0.0333, TT:0.0342, KTo:0.0013, JJ:0.0846, QQ:0.4995, KQo:0.1096, AQo:0.0109, K3s:0.0012, K4s:0.0012, K5s:0.0831, K6s:0.1042, K7s:0.0424, K8s:0.0038, K9s:0.0905, KTs:0.0487, KJs:0.2029, KQs:0.4174, KK:0.0003, AKo:0.1573, A3s:0.0027, A4s:0.0085, A5s:0.0373, A6s:0.0097, A7s:0.0190, A9s:0.0040, ATs:0.0898, AJs:0.0830, AQs:0.7867, AKs:0.2475, AA:0.8232"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0002, 99:0.0001, TT:0.0002, KTo:0.0023, KJo:0.0063, QQ:0.0003, AQo:0.0001, K3s:0.0005, K4s:0.0049, K5s:0.0035, K6s:0.0067, K7s:0.0144, K8s:0.0134, K9s:0.0131, KTs:0.1128, KJs:0.1327, KQs:0.0057, KK:0.9997, AKo:0.8427, A2s:0.0012, A3s:0.0168, A4s:0.1871, A5s:0.0710, A6s:0.0230, A7s:0.2772, A8s:0.0470, A9s:0.0012, ATs:0.1149, AJs:0.0667, AQs:0.0001, AKs:0.7525, AA:0.1564"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|CO:4BET@15",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0003, QQ:0.0004, AQo:0.0049, KK:0.0159, AKo:0.0291, A3s:0.0001, A4s:0.0023, A5s:0.0016, A6s:0.0005, A7s:0.0008, ATs:0.0010, AJs:0.0016, AQs:0.0001, AKs:0.0726"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0050, AQo:0.0010, KK:0.1016, AKo:0.0280, AKs:0.0636, AA:0.0246"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|CO:4BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0040, QQ:0.0053, KK:0.1183, AKo:0.0628, AKs:0.1363, AA:0.0246"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0005, TT:0.0003, ATo:0.0002, JJ:0.0001, Q9s:0.0002, QTs:0.0001, QJs:0.0001, QQ:0.0012, KQo:0.0003, AQo:0.0002, K5s:0.0004, K6s:0.0003, K7s:0.0006, KTs:0.0001, KQs:0.0003, KK:0.0555, AKo:0.0012, A2s:0.0001, A3s:0.0008, A4s:0.0010, A6s:0.0002, A7s:0.0066, A9s:0.0001, ATs:0.0049, AJs:0.0014, AKs:0.0979, AA:0.7531"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "88:0.0002, TT:0.0852, ATo:0.0001, JJ:0.1350, KJo:0.0001, AJo:0.0002, QJs:0.0002, QQ:0.0506, KQo:0.0001, K4s:0.0001, K5s:0.0014, K6s:0.0001, K8s:0.0001, K9s:0.0003, KJs:0.0005, KQs:0.0001, KK:0.8341, AKo:0.1991, A2s:0.0002, A3s:0.0001, A4s:0.0002, A6s:0.0001, A8s:0.0006, A9s:0.0001, ATs:0.0010, AJs:0.0032, AQs:0.0001, AKs:0.5959, AA:0.2468"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0033, A5o:0.0004, A6o:0.0001, A7o:0.0002, JJ:0.0120, QQ:0.0118, KQo:0.0002, AQo:0.0077, K2s:0.0001, K3s:0.0001, K4s:0.0039, K6s:0.0061, K8s:0.0022, KQs:0.0009, KK:0.1183, AKo:0.0628, A3s:0.0017, A4s:0.0179, A5s:0.0112, A6s:0.0047, A7s:0.0074, A9s:0.0003, ATs:0.0044, AJs:0.0074, AQs:0.0002, AKs:0.1363, AA:0.0246"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0001, QQ:0.0001, K5s:0.0001, KK:0.0047, A3s:0.0002, A5s:0.0001, A8s:0.0004, AJs:0.0003, AKs:0.0025, AA:0.0026"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0305, TT:0.0087, JJ:0.2459, AJo:0.0004, QTs:0.0001, QQ:0.9614, AQo:0.0431, K5s:0.0001, K6s:0.0001, KTs:0.0004, KJs:0.0001, KQs:0.0001, KK:0.9789, AKo:0.0369, A2s:0.0001, A3s:0.0004, A4s:0.0028, A6s:0.0001, A7s:0.0001, A8s:0.0071, ATs:0.0012, AJs:0.0232, AQs:0.3451, AKs:0.4911, AA:0.9974"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0011, QQ:0.0010, AQo:0.0001, KK:0.0978, AKo:0.0034, ATs:0.0001, AJs:0.0001, AKs:0.0949"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0109, QQ:0.0108, AQo:0.0019, KK:0.0205, AKo:0.0079, A4s:0.0004, A5s:0.0003, A6s:0.0001, A7s:0.0002, ATs:0.0003, AJs:0.0006, AKs:0.0177, AA:0.0246"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0079, 99:0.0020, JJ:0.6467, QQ:0.5992, K5s:0.0002, K9s:0.0001, KK:0.8783, AKo:0.0141, A4s:0.0001, A6s:0.0002, ATs:0.0002, AJs:0.0061, AQs:0.0002, AKs:0.0315, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@8.5|SB:4BET@28.32",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0120, QQ:0.0118, AQo:0.0008, KK:0.1183, AKo:0.0627, ATs:0.0002, AJs:0.0006, AQs:0.0001, AKs:0.1363, AA:0.0246"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@24.75",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.4379, 33:0.1584, 44:0.6217, 55:0.8790, 66:0.8856, 76s:0.0001, 77:0.9049, 88:0.9060, 99:0.9714, TT:0.9623, ATo:0.0001, JJ:0.9982, QQ:0.9978, KK, AKo:0.9771, A7s:0.0001, ATs:0.0001, AJs:0.0022, AQs:0.0232, AKs:0.9898, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@24.75",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0243, QQ:0.0563, KK, AKo:0.9009, AQs:0.0001, AKs:0.9784, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0077, QQ:0.0315, KK, AKo:0.9552, AKs:0.9832, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@24.75|BB:CALL@13.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0058, 99:0.3647, TT:0.2782, ATo:0.0001, JJ:0.0951, KJo:0.0002, AJo:0.0002, Q9s:0.0001, QTs:0.0002, QQ:0.4319, KQo:0.0001, K7s:0.0001, K8s:0.0001, KTs:0.0002, KJs:0.0022, KK:0.9957, A2s:0.0002, A3s:0.0003, A6s:0.0001, A7s:0.0005, A9s:0.0008, ATs:0.0004, AJs:0.0005, AQs:0.0001, AKs:0.0021, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@24.75|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KTs:0.0001, KK:0.3347, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0135, 55:0.0378, 65s:0.0061, 66:0.1262, 77:0.0199, 86s:0.0001, 88:0.1709, 99:0.0812, TT:0.3744, JJ:0.4291, AJo:0.0005, QJs:0.0025, QQ:0.7057, KQo:0.0605, AQo:0.5279, KTs:0.1905, KJs:0.0884, KQs:0.7612, KK:0.0006, A3s:0.0002, A5s:0.0004, ATs:0.2889, AJs:0.6799, AQs:0.8454, AKs:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0051, K3o:0.0037, A3o:0.1179, A4o:0.2882, A5o:0.2720, K6o:0.0015, A6o:0.0082, K7o:0.0030, A7o:0.1383, A8o:0.2205, K9o:0.0001, A9o:0.0008, TT:0.0834, KTo:0.0001, ATo:0.0963, JJ:0.3431, KJo:0.1576, AJo:0.3888, QQ:0.1741, KQo:0.4604, AQo:0.4498, K2s:0.0011, K3s:0.0692, K4s:0.0256, K5s:0.0625, K6s:0.1428, K7s:0.2223, K8s:0.0296, K9s:0.0214, KTs:0.0269, KJs:0.0406, KK:0.9982, AKo:0.2926, A2s:0.0858, A3s:0.2871, A4s:0.4824, A5s:0.4469, A6s:0.4808, A7s:0.5820, A8s:0.2615, A9s:0.0997, ATs:0.1421, AJs:0.0987, AQs:0.0005, AKs:0.7426, AA:0.9936"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "K3o:0.0001, K4o:0.0001, K8o:0.0001, TT:0.0003, JJ:0.0017, KJo:0.0003, AJo:0.0001, QQ:0.0055, KQo:0.0035, AQo:0.0005, K4s:0.0008, K9s:0.0003, KTs:0.0002, KJs:0.0007, KQs:0.0002, KK:0.0012, AKo:0.0007, A3s:0.0001, A4s:0.0001, A7s:0.0019, A9s:0.0003, AJs:0.0003, AKs:0.0012, AA:0.0064"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0017, 77:0.0172, 88:0.0328, 99:0.0532, TT:0.1377, JJ:0.2261, AJo:0.0001, QQ:0.1147, AQo:0.0219, KTs:0.0505, KJs:0.1556, KQs:0.2387, AKo:0.7066, A2s:0.2367, A3s:0.2423, A4s:0.2605, A5s:0.3138, A6s:0.1935, A7s:0.2419, A8s:0.1767, A9s:0.2112, ATs:0.2454, AJs:0.2199, AQs:0.1540, AKs:0.2562"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 54s:0.0002, 55:0.0776, 65s:0.0095, 66:0.1848, 77:0.0044, 88:0.2008, 98s:0.0002, 99:0.0794, TT:0.3454, JJ:0.4130, QTs:0.0002, QQ:0.9183, AQo:0.5280, KTs:0.0717, KJs:0.4309, KQs:0.9006, A4s:0.0002, A5s:0.0016, ATs:0.3628, AJs:0.8889, AQs:0.9495, AKs:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0104, A3o:0.0717, K4o:0.0070, A4o:0.4252, A5o:0.1153, A6o:0.0042, K7o:0.0001, A7o:0.0722, A8o:0.1479, 99:0.0003, A9o:0.0072, TT:0.1555, ATo:0.1142, JJ:0.5085, KJo:0.0877, AJo:0.2413, QQ:0.0006, KQo:0.2506, AQo:0.4494, K2s:0.0078, K3s:0.1139, K4s:0.0406, K5s:0.1075, K6s:0.3880, K7s:0.0238, K9s:0.0653, KJs:0.0386, KQs:0.0001, KK:0.9937, AKo:0.1331, A2s:0.2140, A3s:0.5665, A4s:0.7138, A5s:0.0845, A6s:0.5939, A7s:0.6898, A8s:0.2286, A9s:0.0573, ATs:0.1298, AJs:0.0001, AKs:0.8821, AA:0.9986"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "K2o:0.0001, K3o:0.0002, K5o:0.0013, K6o:0.0005, K7o:0.0002, TT:0.0031, JJ:0.0054, KJo:0.0001, QQ:0.0041, KQo:0.0045, AQo:0.0007, K2s:0.0022, K3s:0.0009, K4s:0.0016, K5s:0.0001, K6s:0.0002, K7s:0.0007, K8s:0.0001, K9s:0.0001, KJs:0.0006, KQs:0.0001, KK:0.0063, AKo:0.0029, A3s:0.0004, A4s:0.0018, A5s:0.0007, A7s:0.0003, AJs:0.0006, AKs:0.0011, AA:0.0014"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0337, 99:0.0483, TT:0.0718, JJ:0.0731, QQ:0.0770, KQo:0.0185, AQo:0.0217, K6s:0.0035, KTs:0.0364, KJs:0.0554, KQs:0.0988, AKo:0.8641, A2s:0.0634, A3s:0.0858, A4s:0.1379, A5s:0.1401, A6s:0.0937, A7s:0.0616, A8s:0.0785, A9s:0.1098, ATs:0.1204, AJs:0.1060, AQs:0.0505, AKs:0.1167"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5325, 32s:0.0001, 33:0.1680, 42s:0.0022, 43s:0.9516, 44:0.0512, 52s:0.9049, 53s:0.9659, 54s:0.0894, 55:0.6140, 65o:0.2948, 62s:0.0011, 63s:0.9824, 64s:0.9655, 65s:0.4893, 66:0.2282, K6o:0.0028, 74s:0.8522, 75s:0.9814, 76s:0.4657, 77:0.2961, K7o:0.1421, A7o:0.0025, 84s:0.0185, 85s:0.9940, 86s:0.9936, 87s:0.8266, 88:0.9955, K8o:0.0037, A8o:0.1846, 95s:0.0073, 96s:0.9945, 97s:0.9998, 98s, 99, T9o:0.0258, Q9o:0.0236, K9o:0.9926, A9o:0.8447, T3s:0.0115, T5s:0.0159, T6s:0.9705, T7s:0.9904, T8s:0.9995, T9s:0.9914, TT:0.7244, JTo:0.6834, QTo:0.6324, KTo:0.4708, ATo:0.6999, J2s:0.0009, J3s:0.2026, J4s:0.5044, J5s:0.8418, J6s:0.0750, J7s:0.8865, J8s:0.6118, J9s:0.7068, QJo:0.0001, KJo:0.0989, AJo:0.9884, Q2s:0.9317, Q3s:0.3755, Q4s:0.2601, Q5s:0.2173, Q6s:0.2515, Q7s:0.2997, Q8s:0.1790, Q9s:0.2888, QTs:0.0004, KQo:0.4167, AQo:0.9743, K4s:0.0020, K6s:0.0001, K8s:0.0119, K9s:0.0692, KTs:0.0002, KJs:0.0001, A6s:0.0003, A7s:0.0001, A8s:0.0011, A9s:0.6251, ATs:0.0589, AJs:0.9495, AQs:0.1280"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "J2o:0.0003, Q2o:0.3972, K2o:0.1325, A2o:0.4758, Q3o:0.6095, K3o:0.1845, A3o:0.0674, 43s:0.0001, J4o:0.0001, Q4o:0.8878, K4o:0.4420, A4o:0.0001, Q5o:0.5710, K5o:0.1046, A5o:0.0003, Q6o:0.2424, K6o:0.1115, A6o:0.9818, 74s:0.0098, Q7o:0.5964, K7o:0.1032, A7o:0.7705, 87s:0.0001, Q8o:0.4756, K8o:0.0493, A8o:0.7546, Q9o:0.1961, A9o:0.1492, T3s:0.0021, T4s:0.0005, T6s:0.0021, T7s:0.0002, TT:0.1835, JTo:0.0688, QTo:0.0004, ATo:0.0628, J2s:0.0020, J3s:0.0013, J4s:0.0008, J5s:0.0088, J7s:0.0001, JJ:0.9745, QJo:0.0001, Q2s:0.0013, Q3s:0.0009, Q4s:0.0007, Q7s:0.0004, QQ, AQo:0.0105, K8s:0.0001, KK:0.9985, AKo:0.9992, AQs:0.8684, AKs, AA"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "K2o:0.0002, Q3o:0.0004, K3o:0.0006, Q4o:0.0001, K4o:0.0004, K5o:0.0002, K6o:0.0001, K7o:0.0008, A7o:0.0057, Q8o:0.0122, K8o:0.0001, Q9o:0.0008, K9o:0.0001, TT:0.0210, J3s:0.0001, JJ:0.0011, Q4s:0.0002, KQo:0.0039, AQo:0.0019, KK:0.0015, AKo:0.0008, AQs:0.0016"
      },
      {
        "action": "3bet 22.96bb",
        "min": 0.0001,
        "range": "22:0.4675, A2o:0.5242, 33:0.8320, A3o:0.9326, 42s:0.0002, 43s:0.0482, 44:0.9488, K4o:0.0003, A4o, 53s:0.0339, 54s:0.9106, 55:0.3860, K5o:0.0024, A5o:0.9997, 64s:0.0345, 65s:0.5106, 66:0.7718, K6o:0.0379, A6o:0.0181, 75s:0.0182, 76s:0.5343, 77:0.7039, K7o:0.0088, A7o:0.2213, 85s:0.0001, 86s:0.0063, 87s:0.1733, 88:0.0045, K8o:0.0001, A8o:0.0607, 97s:0.0001, A9o:0.0061, T6s:0.0006, T7s:0.0092, T8s:0.0001, T9s:0.0086, TT:0.0711, JTo:0.2474, QTo:0.3672, KTo:0.5292, ATo:0.2373, J3s:0.0008, J4s:0.0291, J5s:0.0066, J6s:0.0087, J7s:0.1128, J8s:0.3881, J9s:0.2932, JTs, JJ:0.0244, QJo:0.9997, KJo:0.9011, AJo:0.0116, Q2s:0.0663, Q3s:0.6232, Q4s:0.7381, Q5s:0.7827, Q6s:0.7484, Q7s:0.6999, Q8s:0.8210, Q9s:0.7112, QTs:0.9996, QJs, KQo:0.5794, AQo:0.0133, K2s, K3s, K4s:0.9980, K5s, K6s, K7s, K8s:0.9880, K9s:0.9308, KTs:0.9998, KJs, KQs, A2s, A3s, A4s, A5s, A6s:0.9997, A7s:0.9998, A8s:0.9989, A9s:0.3749, ATs:0.9411, AJs:0.0505, AQs:0.0020"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6623, 33:0.3178, 44:0.2963, 52s:0.0002, 53s:0.0027, 54s:0.9774, 55:0.5460, 64s:0.4239, 65s:0.9747, 66:0.2861, 74s:0.0006, 75s:0.0086, 76s:0.9934, 77:0.3230, 85s:0.0001, 86s:0.7858, 87s:0.2568, 88:0.7173, 96s:0.0017, 97s:0.0605, 98s:0.6280, 99:0.0269, T8s:0.9330, T9s:0.9491, TT:0.0001, J8s:0.0085, J9s:0.5730, JTs:0.5130, KJo:0.4954, AJo:0.9994, Q4s:0.0001, Q5s:0.0002, Q7s:0.0016, Q8s:0.1248, Q9s:0.5415, QTs:0.0446, QJs:0.0464, KQo:0.9653, K3s:0.0003, K4s:0.0071, K6s:0.0032, K7s:0.0027, K8s:0.4020, K9s:0.3869, KTs:0.0194, KJs:0.0178, KQs:0.1751, A2s:0.0001, A3s:0.0588, A4s:0.0652, A5s:0.2586, A6s:0.2117, A7s:0.3168, A8s:0.6951, A9s:0.6681, ATs:0.4169, AJs, AQs:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0083, A3o:0.0045, A4o:0.1823, A5o:0.0054, A6o:0.0062, 73s:0.0001, A7o:0.0049, A8o:0.0210, 97s:0.0001, A9o:0.0892, ATo:0.0978, AJo:0.0006, Q6s:0.0001, Q9s:0.0002, AQo:0.0014, KK:0.0002, AKo:0.0022, A2s:0.4656, A3s:0.2084, A4s:0.0741, A5s:0.0001, A6s:0.0697, A7s:0.1019, A8s:0.1428, A9s:0.0038, AQs:0.2773, AKs:0.2706, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3377, 33:0.6822, 44:0.7037, 55:0.4539, 65s:0.0001, 66:0.7139, 77:0.6770, 88:0.2827, 98s:0.0008, 99:0.9731, T9s:0.0010, TT, KTo:0.0023, J9s:0.0037, JTs:0.4842, JJ, KJo:0.1892, Q8s:0.0008, Q9s:0.3806, QTs:0.9554, QJs:0.9536, QQ, KQo:0.0347, AQo:0.9986, K2s:0.0001, K3s:0.0164, K4s:0.0520, K5s:0.0179, K6s:0.0237, K7s:0.0008, K8s:0.0054, K9s:0.6027, KTs:0.9806, KJs:0.9822, KQs:0.8249, KK:0.9998, AKo:0.9978, A2s:0.4641, A3s:0.7177, A4s:0.8518, A5s:0.7413, A6s:0.6064, A7s:0.5449, A8s:0.1621, A9s:0.3277, ATs:0.5831, AQs:0.7225, AKs:0.7294"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@5",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0006, 66:0.0001, 77:0.0257, 88:0.1213, 99:0.0090, TT:0.1586, ATo:0.0842, JTs:0.0031, JJ:0.1795, AJo:0.1111, QTs:0.1952, QJs:0.1103, QQ:0.1112, AQo:0.1163, K5s:0.0061, K6s:0.0006, K7s:0.0161, K8s:0.0002, KTs:0.0018, KJs:0.0110, KQs:0.0754, KK:0.3180, A3s:0.0010, A4s:0.1913, A5s:0.0774, A6s:0.0776, A7s:0.0450, A8s:0.2180, A9s:0.1833, ATs:0.9097, AJs:0.9378, AQs:0.0396, AA:0.9163"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0116, 77:0.0001, A7o:0.0004, 88:0.0104, A8o:0.0007, 99:0.0004, A9o:0.0119, TT:0.0908, ATo:0.0102, JTs:0.0002, JJ:0.0913, AJo:0.1045, QTs:0.0001, QJs:0.0004, QQ:0.1071, AQo:0.1334, K5s:0.0001, K6s:0.0005, K9s:0.0002, KTs:0.0004, KK:0.0353, A2s:0.0002, A3s:0.0328, A4s:0.0216, A5s:0.0329, A6s:0.0158, A7s:0.0063, A8s:0.0127, A9s:0.0944, ATs:0.0001, AJs:0.0047, AQs:0.2942, AKs:0.1294, AA:0.0833"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "A5o:0.0039, 77:0.0118, 88:0.2816, 99:0.8550, A9o:0.0003, TT:0.7504, ATo:0.0019, JTs:0.0069, JJ:0.7292, QTs:0.0196, QJs:0.0401, QQ:0.7817, KQo:0.0001, AQo:0.7503, K5s:0.0001, K6s:0.0006, K7s:0.0052, K9s:0.0019, KTs:0.0068, KJs:0.0011, KQs:0.0030, KK:0.6467, AKo, A2s:0.9813, A3s:0.8505, A4s:0.6095, A5s:0.8433, A6s:0.9040, A7s:0.7258, A8s:0.4990, A9s:0.5963, ATs:0.0782, AJs:0.0532, AQs:0.6663, AKs:0.8706, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@5|HJ:4BET@11",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "AQs:0.0001, AKs:0.0002, AA:0.0034"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0082, AJo:0.0001, AQo:0.0014, KK:0.0002, AKo:0.0022, A3s:0.0083, A4s:0.0101, A6s:0.0006, A7s:0.0045, A8s:0.0149, A9s:0.0011, AQs:0.2772, AKs:0.2704, AA:0.9966"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@5|HJ:4BET@14.93",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AQo:0.0014, KK:0.0002, AKo:0.0022, AQs:0.2773, AKs:0.2706, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0511, 99:0.7250, TT, JJ, QQ, AQo:0.8090, KK, AKo, ATs:0.0008, AJs:0.0187, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32s:0.0001, 33, 42s:0.0059, 43s:0.0514, 44, 54o:0.0044, 52s:0.0954, 53s:0.9992, 54s:0.9986, 55, 65o:0.8111, 63s:0.8922, 64s:0.9969, 65s:0.9989, 66, 86o:0.0011, 73s:0.0005, 74s:0.9342, 75s:0.9974, 76s:0.9997, 77:0.9992, 87o:0.0082, 84s:0.2538, 85s:0.9746, 86s:0.9934, 87s:0.9977, 88:0.9627, 95s:0.1061, 96s:0.9708, 97s:0.9867, 98s:0.9924, 99:0.0007, T9o:0.0002, T5s:0.0090, T6s:0.4587, T7s:0.9954, T8s, T9s:0.9989, JTo:0.1634, KTo:0.4917, ATo:0.5536, J3s:0.0002, J4s:0.0316, J5s:0.0002, J6s:0.4318, J7s:0.7529, J8s:0.9989, J9s:0.9977, JTs:0.1653, QJo:0.9597, KJo:0.9971, AJo:0.9349, Q2s:0.0294, Q3s:0.2870, Q4s:0.9541, Q5s:0.7923, Q6s:0.9473, Q7s:0.9848, Q8s:0.9987, Q9s:0.9702, QTs:0.1362, QJs:0.0797, KQo:0.9985, AQo:0.0004, K2s:0.9469, K3s:0.4787, K4s:0.9967, K5s:0.9921, K6s:0.9860, K7s:0.9997, K8s:0.9680, K9s:0.9141, KTs:0.3036, KJs:0.2713, KQs:0.3381, A2s:0.4728, A3s:0.8348, A4s:0.4405, A5s:0.7076, A6s:0.9968, A7s:0.9144, A8s:0.4215, A9s:0.8893, ATs:0.4748, AJs:0.7281"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0039, A3o:0.0059, A4o:0.0010, A5o:0.0264, A6o:0.0736, A7o:0.0109, 88:0.0116, A8o:0.0502, 99:0.2325, A9o:0.0635, TT:0.0046, ATo:0.1374, J5s:0.0001, J9s:0.0001, JJ:0.0529, AJo:0.0637, Q3s:0.0001, QQ:0.0009, AQo:0.0005, K9s:0.0001, KK:0.0010, A2s:0.2065, A3s:0.0018, A4s:0.0008, A6s:0.0005, A7s:0.0059, A8s:0.0630, A9s:0.0006, ATs:0.0001, AQs:0.0769, AKs:0.0350, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0007, 87s:0.0001, 88:0.0257, 99:0.7668, T9s:0.0009, TT:0.9954, QTo:0.0116, KTo:0.0001, ATo:0.0031, J8s:0.0004, JTs:0.8344, JJ:0.9471, QJo:0.0163, AJo:0.0009, Q9s:0.0283, QTs:0.8622, QJs:0.9195, QQ:0.9991, KQo:0.0015, AQo:0.9990, K6s:0.0031, K8s:0.0316, K9s:0.0851, KTs:0.6963, KJs:0.7280, KQs:0.6619, KK:0.9990, AKo, A2s:0.2807, A3s:0.1530, A4s:0.5535, A5s:0.2896, A6s:0.0005, A7s:0.0781, A8s:0.5145, A9s:0.1076, ATs:0.5250, AJs:0.2719, AQs:0.9231, AKs:0.9650"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0024, 88:0.0293, 99:0.0410, TT:0.2208, JTs:0.0004, JJ:0.0429, AJo:0.0715, QTs:0.0217, QQ:0.0778, AQo:0.1603, KTs:0.0003, KJs:0.0001, KK:0.0927, AKo:0.0128, A2s:0.0187, A3s:0.0405, A5s:0.0107, A6s:0.0039, A7s:0.1790, A8s:0.0119, ATs:0.1796, AJs:0.4420, AQs:0.5631, AKs:0.0075, AA:0.5457"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0178, A7o:0.0002, 88:0.0003, 99:0.0035, A9o:0.0048, TT:0.0891, ATo:0.0214, JJ:0.3315, AJo:0.1287, QTs:0.0003, QJs:0.0009, QQ:0.2690, AQo:0.1497, KTs:0.0131, KJs:0.0001, KK:0.4359, AKo:0.4397, A2s:0.1821, A3s:0.2374, A4s:0.2685, A5s:0.0499, A6s:0.3167, A7s:0.1080, A8s:0.0173, A9s:0.0093, ATs:0.1970, AJs:0.3225, AQs:0.2498, AKs:0.4952, AA:0.0469"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0018, TT:0.2405, ATo:0.0006, JJ:0.3956, AJo:0.0602, QTs:0.0254, QJs:0.0132, QQ:0.6518, AQo:0.3758, KTs:0.0252, KJs:0.0125, KQs:0.0018, KK:0.4714, AKo:0.5475, A2s:0.1810, A3s:0.4307, A4s:0.0822, A5s:0.3423, A6s:0.1375, A7s:0.0952, A8s:0.0077, A9s:0.0276, ATs:0.5045, AJs:0.2230, AQs:0.1814, AKs:0.4973, AA:0.4074"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0030, 33:0.0043, 43s:0.0129, 44:0.0010, 52s:0.0001, 53s:0.0002, 54s:0.0093, 55:0.0830, 63s:0.0007, 64s:0.0020, 65s:0.0001, 66:0.0712, 74s:0.0075, 75s:0.1293, 76s:0.1037, 77:0.0579, 85s:0.0197, 86s:0.1570, 87s:0.0007, 88:0.3453, 97s:0.0002, 98s:0.1243, 99:0.0169, T6s:0.0008, T7s:0.0095, T8s:0.0148, T9s:0.0776, JTo:0.0001, ATo:0.0636, J4s:0.0001, J7s:0.0038, J8s:0.0072, J9s:0.1766, AJo:0.3298, Q2s:0.0001, Q5s:0.0001, Q7s:0.0033, Q8s:0.0072, Q9s:0.0696, QTs:0.0001, KQo:0.0001, AQo:0.0199, K4s:0.0004, K8s:0.0001, K9s:0.0098, A8s:0.0004, A9s:0.0234, ATs:0.0442, AJs:0.3137, AQs:0.0043"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0214, 33:0.0213, 43s:0.0019, 44:0.0145, 52s:0.0001, 53s:0.0057, 54s:0.0097, 55:0.0844, 64s:0.0168, 65s:0.1168, 66:0.0157, 74s:0.0078, 75s:0.0283, 76s:0.0706, 77:0.0294, 85s:0.0035, 86s:0.0392, 87s:0.0213, 88:0.1168, 97s:0.0199, 98s:0.1855, 99:0.1780, T6s:0.0031, T7s:0.0005, T8s:0.1574, T9s:0.2920, TT:0.0506, QTo:0.0001, ATo:0.0075, J3s:0.0026, J7s:0.0101, J8s:0.0078, J9s:0.1501, AJo:0.2958, Q7s:0.0224, Q8s:0.0012, Q9s:0.0600, KQo:0.0001, AQo:0.0480, K9s:0.0037, KTs:0.0001, A8s:0.0002, A9s:0.0599, ATs:0.0064, AJs:0.4838, AQs:0.0628"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "22:0.1306, 33:0.0748, 43s:0.0258, 44:0.0285, 53s:0.0591, 54s:0.0587, 55:0.2327, 63s:0.0041, 64s:0.6540, 65s:0.1052, 66:0.0887, 74s:0.1981, 75s:0.0749, 76s:0.1415, 77:0.1330, 85s:0.0084, 86s:0.1164, 87s:0.0766, 88:0.1438, 96s:0.0013, 97s:0.0732, 98s:0.5346, 99:0.7960, T9o:0.0006, A9o:0.0001, T6s:0.0405, T7s:0.0068, T8s:0.4087, T9s:0.4482, TT:0.6738, JTo:0.0108, QTo:0.0035, KTo:0.0097, ATo:0.0335, J3s:0.0014, J4s:0.0010, J5s:0.0001, J6s:0.0002, J7s:0.0992, J8s:0.0557, J9s:0.2708, KJo:0.0001, AJo:0.3016, Q2s:0.0004, Q3s:0.0002, Q4s:0.0400, Q5s:0.0024, Q7s:0.1606, Q8s:0.0431, Q9s:0.1323, QTs:0.0003, KQo:0.0066, AQo:0.9027, K4s:0.0001, K9s:0.0168, KTs:0.0001, A6s:0.0001, A7s:0.0001, A8s:0.0003, A9s:0.2180, ATs:0.0082, AJs:0.1513, AQs:0.0599"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.5280, JJ:0.8039, QQ:0.7570, AQo:0.0648, KK:0.0610, AKo:0.3841, AQs:0.5544, AKs:0.7588, AA:0.1304"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.3560, JJ:0.1961, QQ:0.2430, AQo:0.0317, KK:0.9390, AKo:0.6159, AQs:0.4337, AKs:0.2412, AA:0.8696"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0002, 44:0.0001, 55:0.3801, 66:0.1000, 77:0.2113, 88:0.7763, 99, TT:0.7244, AJo:0.0110, AQo:0.9743, A9s:0.0009, ATs:0.0273, AJs:0.8258, AQs:0.1280"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0006, 77:0.0174, 88:0.0328, 99:0.1752, TT:0.5053, JJ:0.0052, AJo:0.2206, QQ:0.0006, AQo:0.2320, KTs:0.0001, KJs:0.3997, KQs:0.0504, KK:0.0014, AKo:0.0014, A5s:0.0001, A7s:0.0173, A8s:0.0584, A9s:0.3461, ATs:0.3091, AJs:0.0017, AQs:0.1491, AKs:0.0024, AA:0.4369"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0076, 44:0.0018, 55:0.0807, 66:0.4210, 77:0.2790, 88:0.6046, 99:0.8204, TT:0.4939, JJ:0.9948, AJo:0.0993, QJs:0.0088, QQ:0.9994, AQo:0.7265, KTs:0.0045, KJs:0.5443, KQs:0.8246, KK:0.9986, AKo:0.9986, A3s:0.0136, A4s:0.0050, A5s:0.1125, A6s:0.0005, A7s:0.0011, A8s:0.0406, A9s:0.3020, ATs:0.6023, AJs:0.9977, AQs:0.8509, AKs:0.9976, AA:0.5631"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0015, 88:0.0390, 99:0.0128, TT:0.0008, QJs:0.0001, QQ:0.0387, AQo:0.0216, KQs:0.0329, A9s:0.0014, ATs:0.0149, AJs:0.0003, AQs:0.0059, AA:0.0068"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A8o:0.0001, ATo:0.0006, AJo:0.2460, AQo:0.0028, A2s:0.0145, A6s:0.0992, A7s:0.0833, A8s:0.1126, A9s:0.0426, ATs:0.2421, AJs:0.0010, AQs:0.0210, AA:0.9932"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.2554, TT:0.9872, JJ, AJo:0.0001, QJs:0.0011, QQ:0.9613, AQo:0.7796, KTs:0.0095, KJs:0.9741, KQs:0.5417, KK, AKo, A2s:0.0006, A3s:0.0040, A4s:0.0135, A5s:0.8086, A6s:0.0001, A7s:0.0074, A8s:0.0001, A9s:0.0323, ATs:0.6013, AJs:0.9987, AQs:0.9731, AKs"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|HJ:4BET@11",
    "heroPos": "SB",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0265, A3o:0.0043, K6o:0.0005, A6o:0.0389, 74s:0.0002, K7o:0.0002, A7o:0.0642, A8o:0.0746, Q9o:0.0013, A9o:0.0194, T6s:0.0001, TT:0.0004, ATo:0.0025, JJ:0.3477, Q4s:0.0001, QQ:0.0072, AQo:0.0009, KK:0.0238, AKo:0.0347, AQs:0.0668, AKs:0.0006, AA:0.2126"
      },
      {
        "action": "5bet 22.96bb",
        "min": 0.0001,
        "range": "A2o:0.4103, K3o:0.0002, A3o:0.0620, 43s:0.0001, K4o:0.0005, A4o:0.0001, Q5o:0.0038, K5o:0.0004, A5o:0.0003, K6o:0.0007, A6o:0.5685, 74s:0.0096, Q7o:0.0003, K7o:0.0005, A7o:0.6522, 87s:0.0001, Q8o:0.0054, A8o:0.4433, Q9o:0.0235, A9o:0.0819, T3s:0.0012, T4s:0.0004, T6s:0.0018, T7s:0.0002, TT:0.1831, JTo:0.0023, QTo:0.0001, ATo:0.0601, J4s:0.0001, J5s:0.0004, JJ:0.3053, Q2s:0.0002, Q3s:0.0005, Q4s:0.0005, Q7s:0.0002, QQ:0.9928, AQo:0.0096, KK:0.9747, AKo:0.9645, AQs:0.8016, AKs:0.9994, AA:0.7874"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|HJ:4BET@22.96",
    "heroPos": "SB",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1835, JJ:0.9745, QQ, AQo:0.0105, KK:0.9985, AKo:0.9992, AQs:0.8684, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0929, JJ:0.7095, QQ:0.3801, KK:0.5423, AKo:0.3052, A4s:0.0001, AQs:0.0004, AKs:0.2956, AA:0.4126"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0030, JJ:0.2492, QQ:0.6089, KJs:0.0001, KK:0.4577, AKo:0.6414, A4s:0.0001, AJs:0.0002, AQs:0.0001, AKs:0.6974, AA:0.5874"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0031, A2o:0.0113, Q3o:0.0001, K3o:0.0284, A3o:0.0379, 43s:0.0001, Q4o:0.0138, K4o:0.0808, Q5o:0.0091, K5o:0.0735, A5o:0.0002, Q6o:0.0051, K6o:0.0305, A6o:0.1328, 74s:0.0085, Q7o:0.0081, K7o:0.0569, A7o:0.0401, 87s:0.0001, Q8o:0.1758, K8o:0.0252, A8o:0.1961, Q9o:0.0713, A9o:0.1210, T3s:0.0009, T4s:0.0004, T6s:0.0021, T7s:0.0002, TT:0.1361, JTo:0.0678, QTo:0.0004, ATo:0.0599, J2s:0.0015, J3s:0.0011, J4s:0.0008, J5s:0.0087, J7s:0.0001, JJ:0.5928, QJo:0.0001, Q2s:0.0009, Q3s:0.0009, Q4s:0.0007, Q7s:0.0004, QQ:0.0757, AQo:0.0035, K8s:0.0001, KK:0.1329, AKo:0.0279, AKs:0.0177"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "A2o:0.0001, K3o:0.0001, A3o:0.0001, K4o:0.0001, Q5o:0.0002, A6o:0.0003, Q7o:0.0001, K7o:0.0001, A7o:0.0058, A8o:0.0024, A9o:0.0029, TT:0.0474, JTo:0.0006, ATo:0.0029, JJ:0.3817, QQ:0.9243, AQo:0.0070, KK:0.8656, AKo:0.9713, AQs:0.8684, AKs:0.9823, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0006, JJ:0.6325, QQ:0.0125, KK:0.0076, AKo:0.1430, AKs:0.0835, AA:0.9971"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0010, JJ:0.3609, QQ:0.9875, KK:0.9924, AKo:0.7751, AKs:0.9165, AA:0.0029"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0004, A3o:0.0006, 43s:0.0001, A5o:0.0003, A6o:0.0001, 74s:0.0026, A7o:0.0711, 87s:0.0001, Q8o:0.0001, A8o:0.3741, Q9o:0.1127, A9o:0.1394, T6s:0.0021, T7s:0.0002, TT:0.1835, JTo:0.0687, QTo:0.0004, ATo:0.0628, J2s:0.0001, J3s:0.0001, J4s:0.0001, J5s:0.0043, J7s:0.0001, JJ:0.9745, QJo:0.0001, Q3s:0.0001, Q4s:0.0006, Q7s:0.0004, QQ, AQo:0.0105, K8s:0.0001, KK:0.9985, AKo:0.9992, AQs:0.8684, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@9",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 43o:0.0001, Q4o:0.0001, A4o:0.0021, 53s:0.0001, 55:0.0001, 65s:0.0001, 66:0.0002, 72s:0.0004, 75s:0.0010, 77:0.0062, 83s:0.0001, 84s:0.0001, 88:0.0093, 98s:0.0002, 99:0.0005, K9o:0.0002, T3s:0.0001, T4s:0.0001, T9s:0.0002, TT:0.0243, ATo:0.0002, J6s:0.0003, J8s:0.0002, JTs:0.0002, JJ:0.8484, AJo:0.0013, Q5s:0.0002, QJs:0.0015, QQ:0.9997, AQo:0.1418, K3s:0.0001, K5s:0.0001, K9s:0.0003, KTs:0.0115, KJs:0.0008, KQs:0.0900, KK:0.9998, AKo:0.6564, A3s:0.0004, A4s:0.0007, A5s:0.0001, A7s:0.0002, A8s:0.0015, A9s:0.0043, AJs:0.0239, AQs:0.2634, AKs:0.9205, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@9",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0316, JTs:0.0002, JJ:0.0001, QJs:0.0001, K7s:0.0001, KTs:0.1539, KJs:0.0960, KQs:0.0528, KK:0.4695, AKo:0.0001, A2s:0.0002, A3s:0.0142, A4s:0.0002, A5s:0.0107, A8s:0.0007, A9s:0.0003, AJs:0.1063, AQs:0.0133, AKs:0.0235, AA:0.0063"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "77:0.0002, 88:0.0348, 99:0.1727, TT:0.3688, ATo:0.0435, JJ:0.0234, QJo:0.0026, AJo:0.0061, QTs:0.0214, QJs:0.1725, QQ:0.0133, KQo:0.0002, AQo:0.0213, K9s:0.0031, KTs:0.0152, KQs:0.0001, KK:0.4294, AKo:0.0124, A2s:0.0019, A3s:0.0532, A4s:0.0551, A5s:0.0526, A7s:0.0996, A8s:0.0335, A9s:0.1013, ATs:0.1844, AJs:0.0275, AQs:0.3772, AKs:0.3399, AA:0.3336"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0002, 77:0.0002, 88:0.0122, 99:0.0165, A9o:0.0001, TT:0.4466, ATo:0.0069, JTs:0.0008, JJ:0.9764, KJo:0.0002, AJo:0.0288, QTs:0.0051, QJs:0.0207, QQ:0.9867, KQo:0.0007, AQo:0.8792, K6s:0.0012, K7s:0.0001, K9s:0.0004, KTs:0.0337, KJs:0.0592, KQs:0.0008, KK:0.1011, AKo:0.9609, A2s:0.0002, A3s:0.0005, A4s:0.0015, A5s:0.0045, A6s:0.0001, A7s:0.0046, A8s:0.0010, A9s:0.0036, ATs:0.0568, AJs:0.2309, AQs:0.6005, AKs:0.6366, AA:0.6601"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@9|HJ:4BET@16",
    "heroPos": "SB",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0001, K3o:0.0004, K4o:0.0003, K5o:0.0001, K6o:0.0001, K7o:0.0006, A7o:0.0042, Q8o:0.0043, K8o:0.0001, Q9o:0.0004, K9o:0.0001, TT:0.0201, J3s:0.0001, JJ:0.0010, Q4s:0.0001, KQo:0.0032, AQo:0.0012, KK:0.0009, AKo:0.0003, AQs:0.0011"
      },
      {
        "action": "5bet 22.96bb",
        "min": 0.0001,
        "range": "A7o:0.0012, TT:0.0009, JJ:0.0001, KQo:0.0006, AQo:0.0007, KK:0.0006, AKo:0.0005, AQs:0.0005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@9|HJ:4BET@22.96",
    "heroPos": "SB",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0210, JJ:0.0011, AQo:0.0019, KK:0.0015, AKo:0.0008, AQs:0.0016"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0015, 77:0.0002, 88:0.0072, 99:0.0049, A9o:0.0001, TT:0.0135, ATo:0.0056, JTs:0.0001, JJ:0.0387, KJo:0.0108, AJo:0.0049, QTs:0.0307, QJs:0.0135, QQ:0.0673, KQo:0.0002, AQo:0.0030, K5s:0.0020, K6s:0.0027, K7s:0.0045, K9s:0.0003, KTs:0.0217, KJs:0.0029, KQs:0.0316, KK:0.1579, AKo:0.0549, A2s:0.0158, A3s:0.0223, A4s:0.0221, A5s:0.0039, A6s:0.0061, A7s:0.0022, A8s:0.0004, A9s:0.0751, ATs:0.0017, AJs:0.0020, AQs:0.0069, AKs:0.0923, AA:0.8237"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0002, 77:0.0001, A7o:0.0005, 88:0.0036, A8o:0.0002, 99:0.0149, A9o:0.0006, TT:0.0270, ATo:0.0148, JTs:0.0004, JJ:0.0375, KJo:0.0019, AJo:0.0054, QTs:0.0108, QJs:0.0006, QQ:0.6677, KQo:0.0215, AQo:0.0149, K5s:0.0004, K6s:0.0026, K7s:0.0001, K8s:0.0006, K9s:0.0008, KTs:0.0014, KJs:0.0047, KQs:0.0235, KK:0.8419, AKo:0.3277, A2s:0.0139, A3s:0.0057, A4s:0.0028, A6s:0.0078, A7s:0.0033, A8s:0.0004, A9s:0.1653, ATs:0.0274, AJs:0.0023, AQs:0.0318, AKs:0.2998, AA:0.1762"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0002, Q3o:0.0004, K3o:0.0006, Q4o:0.0001, K4o:0.0004, K5o:0.0002, K6o:0.0001, K7o:0.0008, A7o:0.0057, Q8o:0.0122, K8o:0.0001, Q9o:0.0008, K9o:0.0001, TT:0.0210, J3s:0.0001, JJ:0.0011, Q4s:0.0002, KQo:0.0039, AQo:0.0019, KK:0.0015, AKo:0.0008, AQs:0.0016"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@22.96",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0005, 99:0.5448, TT, JJ, QQ, KK, AKo:0.4862, AJs:0.0055, AQs:0.9988, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@22.96",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.9923, JJ, QQ, KK, AKo:0.8603, AJs:0.0395, AQs:0.9688, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@22.96|BB:CALL@13.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0019, QQ, KK, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0023, Q2o:0.2075, K2o:0.0083, A2o:0.0015, 33:0.0273, Q3o:0.5230, K3o:0.0019, A3o:0.0109, 43s:0.0036, 44:0.0027, Q4o:0.3539, K4o:0.0440, A4o:0.0147, 54s:0.0103, 55:0.2712, Q5o:0.1977, K5o:0.0191, A5o:0.0062, 64s:0.0105, 65s:0.0039, 66:0.0093, Q6o:0.1102, K6o:0.0076, 73s:0.0010, 74s:0.0039, 76s:0.0371, 77:0.2037, Q7o:0.4360, K7o:0.0026, 83s:0.0003, 85s:0.0016, 86s:0.0003, 87s:0.0039, 88:0.0031, Q8o:0.0366, K8o:0.0013, 95s:0.0004, 96s:0.0007, 97s:0.0005, 98s:0.0002, 99:0.0260, T9o:0.0001, Q9o:0.5324, K9o:0.0193, T2s:0.0001, T3s:0.0002, T7s:0.0004, T8s:0.0001, T9s:0.0018, TT:0.0512, QTo:0.0352, KTo:0.0036, J2s:0.0002, J3s:0.0018, J6s:0.0003, J7s:0.0001, J8s:0.0017, J9s:0.0317, JTs:0.0012, JJ:0.7684, QJo:0.7087, KJo:0.1457, AJo:0.0157, Q2s:0.3261, Q3s:0.8037, Q4s:0.3433, Q5s:0.1353, Q6s:0.0194, Q7s:0.0458, Q8s:0.0403, Q9s:0.0810, QTs:0.0097, QJs:0.1010, QQ:0.9091, KQo:0.0008, AQo:0.3971, K2s:0.0018, K3s:0.0642, K4s:0.0022, K5s:0.0019, K6s:0.0024, K7s:0.0049, K8s:0.0156, K9s:0.0017, KTs:0.0144, KJs:0.1409, KK:0.7128, AKo:0.6085, A2s:0.0210, A3s:0.0002, A4s:0.0415, A5s:0.0073, A6s:0.0157, A7s:0.0106, A8s:0.0178, A9s:0.3508, ATs:0.0003, AJs:0.2296, AQs:0.1260, AKs:0.4419, AA:0.9473"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0002, Q2o:0.0042, Q3o:0.0749, 43s:0.0002, 44:0.0002, Q4o:0.0036, 53s:0.0005, 54s:0.0001, 55:0.0214, Q5o:0.0560, K5o:0.0001, 65s:0.0001, 66:0.0020, 74s:0.0001, 75s:0.0003, 76s:0.0001, 77:0.0038, Q7o:0.0029, A7o:0.0001, 82s:0.0001, 85s:0.0014, 87s:0.0001, 88:0.0276, Q8o:0.0005, 94s:0.0001, 97s:0.0001, 98s:0.0002, 99:0.0015, Q9o:0.0455, K9o:0.0019, T7s:0.0003, T8s:0.0002, TT:0.0291, QTo:0.0114, J3s:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.2292, QJo:0.1350, KJo:0.0800, Q2s:0.0175, Q3s:0.0175, Q4s:0.0065, Q5s:0.0439, Q6s:0.0043, Q8s:0.0359, Q9s:0.0071, QTs:0.0215, QJs:0.0011, QQ:0.0894, AQo:0.0318, K2s:0.0006, K3s:0.0115, K4s:0.0224, K5s:0.0076, K6s:0.0001, K7s:0.0044, K9s:0.0001, KTs:0.0279, KJs:0.0107, KQs:0.0003, KK:0.2866, AKo:0.1065, A4s:0.0004, A6s:0.0002, A8s:0.0005, A9s:0.0001, AJs:0.0002, AQs:0.0045, AKs:0.1595, AA:0.0527"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.1247, A2o:0.0003, A3o:0.0001, 43s:0.0001, 44:0.0447, 53s:0.0002, 54s:0.4056, 55:0.0418, K5o:0.0001, 63s:0.0001, 65s:0.2300, 66:0.0319, Q6o:0.0001, 74s:0.0009, 75s:0.0002, 76s:0.0001, 77:0.2855, Q7o:0.0015, A7o:0.0002, 82s:0.0003, 85s:0.0023, 86s:0.0001, 87s:0.0290, 88:0.0113, Q8o:0.0002, 95s:0.0001, 96s:0.0001, 97s:0.0004, 99:0.0057, Q9o:0.0004, T7s:0.0001, T8s:0.0004, KTo:0.0001, J6s:0.0002, J7s:0.0001, JJ:0.0007, KJo:0.0011, AJo:0.0007, Q2s:0.0958, Q3s:0.1212, Q4s:0.6001, Q5s:0.4873, Q6s:0.3915, Q7s:0.9088, Q8s:0.6469, Q9s:0.8476, QTs:0.9439, QJs:0.8484, QQ:0.0015, KQo:0.9992, AQo:0.5709, K2s:0.1831, K3s:0.6025, K4s:0.5848, K5s:0.5581, K6s:0.9584, K7s:0.9697, K8s:0.7681, K9s:0.9650, KTs:0.8844, KJs:0.7945, KQs:0.9997, KK:0.0005, AKo:0.2850, A2s:0.2856, A3s:0.6058, A4s:0.9108, A5s:0.8178, A6s:0.8957, A7s:0.7187, A8s:0.2034, A9s:0.0811, ATs:0.3983, AJs:0.1775, AQs:0.8694, AKs:0.3985"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9984, 33:0.9996, K3o:0.0001, 43s:0.0920, 44:0.9993, 54o:0.0046, 52s:0.0023, 53s:0.0020, 54s:0.7846, 55:0.9601, 64s:0.6609, 65s:0.2230, 66:0.9993, 73s:0.0010, 74s:0.0020, 75s:0.0008, 76s:0.7722, 77:0.9948, 84s:0.0009, 86s:0.5188, 87s:0.2717, 88:0.9716, 92s:0.0002, 96s:0.0007, 98s:0.0211, 99:0.9907, T4s:0.0002, T5s:0.0004, T7s:0.1789, T8s:0.5742, T9s:0.0202, TT:0.9624, KTo:0.0500, J3s:0.0009, J4s:0.0010, J5s:0.0001, J8s:0.0431, J9s:0.0001, JTs:0.0012, JJ:0.7823, KJo:0.0407, Q8s:0.0002, Q9s:0.0008, QJs:0.0253, AQo:0.2251, K2s:0.0484, K3s:0.2965, K4s:0.0310, K6s:0.0580, K7s:0.0001, K8s:0.0525, K9s:0.0050, KTs:0.1697, KJs:0.8963, KQs:0.0005, AKo:0.0070, A4s:0.0006, A5s:0.0013, A6s:0.0546, A7s:0.0067, A8s:0.0001, A9s:0.0001, AJs:0.9099, AQs:0.3027, AKs:0.0030, AA:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "Q4o:0.0019, 55:0.0015, Q7o:0.0002, 87s:0.0007, 99:0.0086, TT:0.0035, JJ:0.2009, QJo:0.0621, Q2s:0.0277, Q3s:0.0095, Q4s:0.0157, Q6s:0.0002, Q8s:0.0721, Q9s:0.0108, QTs:0.0154, QJs:0.4202, QQ:0.0928, KQo:0.0293, AQo:0.4020, K2s:0.0002, K5s:0.0001, KTs:0.0010, KK:0.0722, AKo:0.0299, A9s:0.0001, AQs:0.0169, AKs:0.0783, AA:0.9981"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0180, JJ:0.0147, Q2s:0.0003, Q3s:0.0024, Q8s:0.0005, Q9s:0.0112, QTs:0.0929, QJs:0.1543, QQ:0.9072, KQo:0.7272, AQo:0.3334, K3s:0.0004, K5s:0.0069, K6s:0.0025, K7s:0.0456, K8s:0.0009, K9s:0.0001, KTs:0.0013, KJs:0.0140, KQs:0.9986, KK:0.9278, AKo:0.9631, A3s:0.0004, A9s:0.0001, AJs:0.0072, AQs:0.6776, AKs:0.9186, AA:0.0019"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0003, A7o:0.0005, 88:0.0003, 99:0.0001, TT:0.0995, JJ:0.0036, KJo:0.0001, QTs:0.0012, QJs:0.0001, QQ:0.0430, KQo:0.0005, AQo:0.0244, K5s:0.0064, K6s:0.0002, K7s:0.0491, K9s:0.0001, KTs:0.0001, KQs:0.0111, KK:0.0323, AKo:0.0371, A2s:0.0001, A3s:0.0001, A4s:0.0004, A5s:0.0268, A7s:0.0001, A8s:0.0130, A9s:0.0002, ATs:0.0024, AJs:0.0347, AQs:0.4302, AKs:0.0004, AA:0.1502"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0731, JJ:0.0099, QJs:0.0001, QQ:0.1453, KQo:0.0001, K6s:0.0001, K7s:0.0001, KJs:0.0002, KQs:0.0004, KK:0.2126, AKo:0.1473, A4s:0.0078, A5s:0.0440, A6s:0.0060, A7s:0.0124, A8s:0.0206, A9s:0.0111, ATs:0.0043, AKs:0.1006, AA:0.0987"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0099, 77:0.0022, A8o:0.0004, 99:0.0005, TT:0.0956, JTs:0.0002, JJ:0.3686, AJo:0.0335, QTs:0.0008, QQ:0.0727, AQo:0.0003, K5s:0.0003, K7s:0.0365, K9s:0.0069, KJs:0.2226, KQs:0.0001, KK:0.7550, AKo:0.8023, A2s:0.0437, A3s:0.1448, A4s:0.6636, A5s:0.2165, A6s:0.5249, A7s:0.5411, A8s:0.2385, A9s:0.2142, ATs:0.5408, AJs:0.0072, AQs:0.0799, AKs:0.8970, AA:0.7512"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0023, 66:0.0082, TT:0.0004, JJ:0.0115, QQ:0.1940, AQo:0.0010, KTs:0.0052, KJs:0.0002, KQs:0.0044, ATs:0.0049, AJs:0.0610, AQs:0.2342"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "55:0.0151, 65s:0.0016, 66:0.0441, 77:0.0015, 88:0.0468, 99:0.0154, TT:0.0437, JJ:0.2348, QQ:0.4439, AQo:0.0766, KTs:0.0010, KJs:0.0002, KQs:0.0030, A4s:0.0001, A5s:0.0009, ATs:0.0821, AJs:0.2219, AQs:0.3450, AKs:0.0001"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "66:0.0036, 77:0.0002, 88:0.0002, 99:0.0047, TT:0.0655, JJ:0.0309, QQ:0.2546, AQo:0.0112, KQs:0.0023, A5s:0.0003, ATs:0.0508, AJs:0.0086, AQs:0.1805"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0001, TT:0.0393, JJ:0.0082, QQ:0.3289, KK:0.8433, AKo:0.5126, A4s:0.0001, A5s:0.0001, ATs:0.0001, AJs:0.0002, AQs:0.0001, AKs:0.1286, AA:0.7769"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.1063, JJ:0.0657, QQ:0.4676, KQs:0.0001, KK:0.1566, AKo:0.4871, A5s:0.0004, ATs:0.0001, AJs:0.0007, AQs:0.0001, AKs:0.8713, AA:0.2231"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.1490, JJ:0.1007, QQ:0.9183, AQs:0.4469, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0019, QTs:0.0002, QQ:0.3289, K7s:0.0004, KTs:0.0008, KQs:0.0001, KK:0.0082, A5s:0.0002, A6s:0.0008, A8s:0.0019, ATs:0.0001, AJs:0.0013, AQs:0.3803, AKs:0.0014, AA:0.0186"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0031, A7o:0.0014, A8o:0.0001, TT:0.0333, ATo:0.0315, JJ:0.0003, KJo:0.0060, AJo:0.0157, QQ:0.0019, AQo:0.0058, K6s:0.0005, K7s:0.0043, KTs:0.0003, KJs:0.0089, KQs:0.0019, KK:0.0160, AKo:0.0076, A2s:0.0599, A3s:0.0489, A4s:0.3824, A5s:0.0748, A6s:0.0392, A8s:0.0257, A9s:0.0091, ATs:0.0152, AJs:0.0328, AQs:0.0671, AKs:0.0760, AA:0.9551"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0003, 88:0.0002, 99:0.0049, TT:0.2077, JJ:0.7867, KJo:0.0012, AJo:0.0642, QTs:0.0008, QQ:0.0385, AQo:0.0005, K6s:0.0002, K7s:0.0001, KTs:0.0010, KQs:0.0002, KK:0.9758, AKo:0.9922, A2s:0.3762, A3s:0.0001, A4s:0.0149, A5s:0.1393, A6s:0.3178, A7s:0.0010, A9s:0.0019, ATs:0.0010, AJs:0.3005, AQs:0.0030, AKs:0.9226, AA:0.0263"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0003, 66:0.0175, 77:0.0001, 88:0.0137, TT:0.0030, QQ:0.3440, AQo:0.0133, KTs:0.0072, KJs:0.0504, KQs:0.0893, A5s:0.0001, ATs:0.0481, AJs:0.1060, AQs:0.2106"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "TT:0.0012, QQ:0.1064, AQo:0.0017, KTs:0.0016, KJs:0.0065, KQs:0.0096, ATs:0.0090, AJs:0.0010, AQs:0.0057"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0029, 66:0.0069, 77:0.0002, 88:0.0080, 99:0.0024, TT:0.0158, JJ:0.2966, QQ:0.4671, AQo:0.1431, KJs:0.0125, KQs:0.0003, A5s:0.0001, ATs:0.0372, AJs:0.2105, AQs:0.6636, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0001, 88:0.0018, 99:0.0001, TT:0.0078, JJ:0.0098, QQ:0.1592, K7s:0.0001, K9s:0.0009, KTs:0.0016, KJs:0.0001, KK:0.0085, AKo:0.0092, A3s:0.0001, A8s:0.0015, ATs:0.0035, AQs:0.0126, AKs:0.0008, AA:0.0027"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0129, JJ:0.0609, KJo:0.0001, AJo:0.0001, QQ:0.1418, K7s:0.0002, KTs:0.0012, KJs:0.0029, KK:0.0410, AKo:0.2432, A3s:0.0002, A4s:0.0008, A8s:0.0026, ATs:0.0007, AJs:0.0029, AQs:0.0047, AKs:0.0651, AA:0.2206"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, A7o:0.0001, 88:0.0001, TT:0.1956, JJ:0.6649, AJo:0.0001, QJs:0.0017, QQ:0.2736, KQo:0.0004, AQo:0.0028, K6s:0.0022, K7s:0.0001, KTs:0.0022, KJs:0.1815, KK:0.9503, AKo:0.6786, A3s:0.0002, A4s:0.0001, A5s:0.0027, A6s:0.0004, A7s:0.0001, A8s:0.0880, A9s:0.0006, ATs:0.0568, AJs:0.0024, AQs:0.0191, AKs:0.9018, AA:0.7767"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0005, JJ:0.0004, QQ:0.3636, AQo:0.0348, KTs:0.0022, KJs:0.0319, KQs:0.0488, AQs:0.1890"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "TT:0.0005, JJ:0.0035, QQ:0.0117, AQo:0.0049, KTs:0.0002, KJs:0.0021, AJs:0.0037, AQs:0.0105"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0116, 77:0.0003, 88:0.0244, 99:0.0002, TT:0.0399, JJ:0.2702, QQ:0.5425, AQo:0.0298, KTs:0.0029, KJs:0.0158, KQs:0.0045, ATs:0.0197, AJs:0.0479, AQs:0.1869, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0365, JJ:0.9834, QQ:0.9977, KQs:0.0004, KK, AKo:0.9539, A4s:0.0001, ATs:0.0003, AJs:0.0001, AQs:0.0064, AKs:0.9926, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0011, QQ:0.9183, AQs:0.0003, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "K2o:0.1925, 33:0.0007, K3o:0.0481, A3o:0.0007, K4o:0.0865, K5o:0.0181, J6o:0.0001, K6o:0.0223, 77:0.0050, K7o:0.2985, 84s:0.0001, 88:0.0739, J8o:0.0001, K8o:0.1790, A8o:0.0001, 99:0.3199, K9o:0.5365, TT:0.4317, KTo:0.2850, J8s:0.0002, JJ:0.4773, QJo:0.0002, KJo:0.8358, AJo:0.0008, QJs:0.0001, QQ:0.4995, KQo:0.2133, AQo:0.0001, K2s:0.3492, K3s:0.0831, K4s:0.0483, K5s:0.0566, K6s:0.0005, K7s:0.0349, K8s:0.0488, K9s:0.0054, KTs:0.0005, KQs:0.0130, KK:0.7966, AKo:0.9753, A4s:0.0001, A7s:0.0003, A8s:0.0004, A9s:0.0003, AJs:0.0003, AQs:0.0002, AKs:0.9988, AA"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.0445, A2o:0.0004, 32s:0.0021, 33:0.0855, K3o:0.0002, A3o:0.0019, 42s:0.0004, 44:0.0052, A4o:0.0056, 52s:0.0005, 53s:0.0085, 54s:0.0121, 55:0.1334, 65o:0.0002, A5o:0.0451, 64s:0.0292, 65s:0.3722, 66:0.5403, K6o:0.0013, A6o:0.0001, 73s:0.0007, 74s:0.0001, 75s:0.0754, 76s:0.6102, 77:0.1298, K7o:0.0007, 82s:0.0003, 84s:0.0002, 85s:0.0003, 86s:0.0190, 87s:0.5331, 88:0.7356, K8o:0.0259, 92s:0.0001, 93s:0.0001, 95s:0.0012, 97s:0.0282, 98s:0.0496, 99:0.4530, T9o:0.0004, K9o:0.0034, A9o:0.0008, T3s:0.0002, T4s:0.0003, T5s:0.0021, T7s:0.0059, T8s:0.0036, T9s:0.0608, TT:0.5505, KTo:0.0714, ATo:0.0412, J2s:0.0001, J3s:0.0025, J6s:0.0004, J7s:0.0003, J8s:0.0785, J9s:0.0015, JTs:0.1226, JJ:0.5221, QJo:0.0006, KJo:0.1525, AJo:0.0814, Q2s:0.0007, Q4s:0.0001, Q5s:0.0003, Q6s:0.0001, Q8s:0.0013, Q9s:0.0439, QTs:0.0213, QJs:0.0688, QQ:0.5005, KQo:0.5644, AQo:0.0230, K2s:0.6355, K3s:0.7411, K4s:0.6626, K5s:0.9206, K6s:0.9833, K7s:0.8616, K8s:0.7694, K9s:0.7780, KTs:0.9952, KJs, KQs:0.9864, KK:0.2034, AKo:0.0247, A2s:0.4819, A3s:0.7966, A4s:0.9447, A5s:0.9993, A6s:0.9799, A7s:0.7531, A8s:0.8558, A9s:0.8088, ATs:0.9761, AJs:0.9869, AQs:0.9998, AKs:0.0012"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0001, 66:0.0691, 77:0.1229, 99:0.0251, TT:0.4067, JTs:0.0001, JJ:0.2899, Q6s:0.0001, QQ:0.5775, KQo:0.0521, AQo:0.1542, K9s:0.0200, KTs:0.0777, KJs:0.1986, KQs:0.0903, KK:0.0002, AKo:0.1542, A2s:0.0001, A3s:0.1277, A5s:0.0222, A6s:0.0001, A7s:0.0001, ATs:0.0075, AJs:0.0166, AQs:0.5303, AKs:0.1451, AA:0.8547"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0348, 44:0.0004, 55:0.0002, 66:0.0385, 77:0.0060, 88:0.0009, 99:0.1090, TT:0.3440, JTs:0.0003, JJ:0.6834, Q6s:0.0001, QJs:0.0001, QQ:0.4225, AQo:0.0135, K2s:0.0157, K3s:0.0002, K6s:0.0005, K7s:0.0007, K9s:0.0061, KTs:0.1968, KJs:0.5718, KQs:0.7565, KK:0.9998, AKo:0.8458, A2s:0.0001, A3s:0.0496, A4s:0.0052, A5s:0.1564, A6s:0.0009, A7s:0.0007, A8s:0.0003, A9s:0.0001, ATs:0.0577, AJs:0.0031, AQs:0.3907, AKs:0.8549, AA:0.1453"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0184, 88:0.1716, 99:0.0386, JJ:0.0570, QQ:0.8355, AQo:0.0009, K9s:0.0031, KTs:0.0157, KJs:0.0100, KQs:0.1107, A5s:0.0016, A7s:0.0021, A8s:0.0002, A9s:0.0334, ATs:0.1717, AJs:0.3372, AQs:0.7439"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0002, A5o:0.0448, A7o:0.0108, A8o:0.0075, A9o:0.0867, ATo:0.0256, JJ:0.0001, KJo:0.0008, AJo:0.0008, QQ:0.0106, KQo:0.0065, AQo:0.0509, K5s:0.0001, K7s:0.0009, K8s:0.0026, KTs:0.0001, KJs:0.0006, KQs:0.0034, AKo:0.0698, A2s:0.4757, A3s:0.2142, A4s:0.0267, A5s:0.0057, A6s:0.0287, A7s:0.0331, A8s:0.3134, A9s:0.2756, ATs:0.0055, AJs:0.0316, AQs:0.2516, AKs:0.2700, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0968, TT:0.0347, JJ:0.3390, QQ:0.0828, K6s:0.0001, K7s:0.0069, K9s:0.0745, KTs:0.7544, KJs:0.5688, KQs:0.0073, KK, AKo:0.9302, A2s:0.0503, A3s:0.4658, A4s:0.4137, A5s:0.9099, A6s:0.1630, A7s:0.2736, A8s:0.1928, A9s:0.4018, ATs:0.7067, AJs:0.3877, AQs:0.0003, AKs:0.7300"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|HJ:4BET@11",
    "heroPos": "BTN",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0012, AQo:0.0319, KK:0.0344, A2s:0.0011, A3s:0.0058, A4s:0.0003, A6s:0.0037, A7s:0.0313, A8s:0.0098, A9s:0.0001, ATs:0.0445, AKs:0.0003, AA:0.0198"
      },
      {
        "action": "5bet 22.96bb",
        "min": 0.0001,
        "range": "A3o:0.0015, A4o:0.0165, A5o:0.0012, A8o:0.0001, TT:0.0375, ATo:0.0001, JJ:0.1565, AJo:0.0031, QQ:0.0001, AQo:0.2537, KK:0.7665, AKo:0.1331, A2s:0.0837, A3s:0.3002, A4s:0.4780, A5s:0.0104, A6s:0.2684, A7s:0.2259, A8s:0.0492, A9s:0.0121, ATs:0.0668, AJs:0.0001, AKs:0.8818, AA:0.9788"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|HJ:4BET@22.96",
    "heroPos": "BTN",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1925, QQ:0.0006, KK:0.9937, AKo:0.1331, AKs:0.8821, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0005, JJ:0.0348, QJs:0.0002, QQ:0.1357, KTs:0.0001, KK:0.7500, AKo:0.3296, A6s:0.0002, A9s:0.0001, AQs:0.0111, AKs:0.7584, AA:0.2807"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0001, JJ:0.0418, QQ:0.6481, KK:0.2463, AKo:0.0173, A3s:0.0001, AKs:0.0746, AA:0.7193"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0980, JJ:0.2456, KJo:0.0001, AJo:0.0001, AQo:0.4251, K5s:0.0035, K6s:0.0116, K7s:0.0019, K9s:0.0090, KJs:0.0261, KK:0.1705, AKo:0.0111, A3s:0.0010, A4s:0.0030, A5s:0.0021, A6s:0.0001, A7s:0.0174, A8s:0.0012, A9s:0.0100, ATs:0.0005, AJs:0.0001, AKs:0.1353"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0536, JJ:0.2629, QQ:0.0006, AQo:0.0222, KK:0.8232, AKo:0.1220, A3s:0.0006, A6s:0.0002, A7s:0.0008, AKs:0.7467, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0391, QQ:0.8283, KK:0.7953, AKo:0.0709, AKs:0.4729, AA:0.8951"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0828, KK:0.2047, AKo:0.0011, AQs:0.0001, AKs:0.2421, AA:0.1049"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.1555, JJ:0.5085, AJo:0.0015, QQ:0.0006, AQo:0.2447, KK:0.9937, AKo:0.1331, A5s:0.0120, A7s:0.0001, A9s:0.0001, ATs:0.0424, AJs:0.0001, AKs:0.8821, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0003, QQ:0.0009, KK:0.3595, AKo:0.0002, AKs:0.0014, AA:0.0040"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.8069, AQo:0.0002, KK:0.6404, AKo:0.1651, A3s:0.0001, A6s:0.0002, AJs:0.0002, AQs:0.0046, AKs:0.9424, AA:0.9960"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "AQo:0.0014, KK:0.0256, AKo:0.0001, A2s:0.0009, A4s:0.0084, A8s:0.0002, A9s:0.0002, ATs:0.0006, AKs:0.0009"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0022, 99:0.0001, TT:0.1506, ATo:0.0001, JJ:0.5038, AJo:0.0025, QQ:0.0006, AQo:0.1594, KK:0.9681, AKo:0.1330, A2s:0.0139, A3s:0.0612, A4s:0.4791, A5s:0.0122, A6s:0.0544, A7s:0.1443, A8s:0.0261, A9s:0.0326, ATs:0.0822, AKs:0.8811, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1181, QQ:0.9756, KK, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1554, JJ:0.5085, QQ:0.0006, KK:0.9937, AKo:0.0632, AKs:0.8812, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.0191, 33:0.0046, 42s:0.0251, 44:0.0172, 53s:0.0356, 54s:0.0571, 55:0.0376, A5o:0.0193, 63s:0.0039, 65s:0.1832, 66:0.0105, 74s:0.0001, 75s:0.0012, 76s:0.0140, 77:0.0036, 82s:0.0084, 83s:0.0065, 98o:0.0008, J8o:0.0001, K8o:0.0001, 95s:0.0108, 97s:0.0037, 98s:0.1262, 99:0.1098, A9o:0.0001, T2s:0.0206, T4s:0.0009, T5s:0.0022, T7s:0.1338, T8s:0.0236, T9s:0.0092, TT:0.1925, JTo:0.0073, KTo:0.0825, ATo:0.0577, J3s:0.0031, J4s:0.0347, J5s:0.0078, J7s:0.1076, JJ:0.5038, QJo:0.0193, Q4s:0.0163, Q5s:0.0002, Q6s:0.0114, Q8s:0.0049, QTs:0.1025, QJs:0.0056, QQ:0.1953, AQo:0.0005, K2s:0.0736, K4s:0.0561, K8s:0.0096, KJs:0.0135, KQs:0.0639, KK:0.0053, AKo:0.1114, A2s:0.0013, A3s:0.0717, A5s:0.1787, A6s:0.3232, A7s:0.1101, A8s:0.3889, A9s:0.0453, ATs:0.5508, AJs:0.0299, AQs:0.5804, AKs:0.0460, AA:0.1268"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.3345, A2o:0.1311, 33:0.2845, A3o:0.0951, 42s:0.0485, 44:0.2165, A4o:0.1280, 52s:0.0021, 53s:0.2406, 54s:0.1285, 55:0.3006, 65o:0.0208, Q5o:0.0001, K5o:0.0001, A5o:0.2147, 62s:0.0065, 63s:0.0021, 64s:0.0107, 65s:0.4067, 66:0.1081, 76o:0.0009, 72s:0.1166, 73s:0.0854, 74s:0.0027, 75s:0.0555, 76s:0.0163, 77:0.1640, 97o:0.0015, K7o:0.0002, A7o:0.2322, 82s:0.1453, 83s:0.0011, 84s:0.0131, 85s:0.0340, 86s:0.0003, 87s:0.3231, 88:0.2549, K8o:0.0004, A8o:0.1381, 93s:0.0017, 95s:0.0201, 96s:0.0271, 97s:0.0593, 98s:0.3422, 99:0.3487, T4s:0.2034, T7s:0.2770, T8s:0.0511, T9s:0.0437, TT:0.4664, JTo:0.0664, KTo:0.1453, ATo:0.1319, J4s:0.2664, J5s:0.0092, J6s:0.0132, J7s:0.0251, J8s:0.0624, J9s:0.0268, JTs:0.9351, JJ:0.4845, KJo:0.0013, AJo:0.4860, Q3s:0.0208, Q4s:0.3435, Q5s:0.0276, Q6s:0.0280, Q7s:0.0002, Q8s:0.0898, Q9s:0.1825, QTs:0.3226, QJs:0.0332, QQ:0.8041, KQo:0.0024, AQo:0.6969, K2s:0.0160, K4s:0.0945, K5s:0.7939, K6s:0.0472, K7s:0.0825, K8s:0.0566, K9s:0.0018, KTs:0.0502, KJs:0.3024, KQs:0.6595, KK:0.9946, AKo:0.8862, A2s:0.1925, A3s:0.5438, A4s:0.7922, A5s:0.5448, A6s:0.4129, A7s:0.7313, A8s:0.2888, A9s:0.4183, ATs:0.2341, AJs:0.5195, AQs:0.2608, AKs:0.8592, AA:0.8732"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 93s:0.0003, T5s:0.0002, T6s:0.0001, T9s:0.0001, J7s:0.0001, JJ:0.3590, Q2s:0.0002, Q4s:0.0001, Q7s:0.0001, QQ:0.7468, K8s:0.0001, KQs:0.0004, KK, AKo:0.9777, A2s:0.0094, A3s:0.0852, A5s:0.0019, A6s:0.0025, A7s:0.0001, A9s:0.0005, ATs:0.2822, AJs:0.0135, AQs:0.0001, AKs:0.8742, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0029, QJs:0.0001, QQ:0.0510, KQo:0.0002, AQo:0.0018, K7s:0.0001, K9s:0.0001, KTs:0.0002, KQs:0.0372, KK:0.0076, A2s:0.0002, A3s:0.0015, A4s:0.0003, ATs:0.0002, AJs:0.0044, AQs:0.1020, AKs:0.0011"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "A5o:0.0056, 77:0.0003, A8o:0.0005, 99:0.0005, A9o:0.0003, TT:0.0298, KTo:0.0001, ATo:0.0008, JJ:0.0633, KJo:0.1246, AJo:0.0042, QTs:0.0001, QJs:0.0002, QQ:0.1127, KQo:0.0396, AQo:0.0001, K3s:0.0001, K4s:0.0003, K5s:0.0128, K6s:0.0793, K7s:0.0219, K8s:0.0058, K9s:0.0761, KTs:0.0015, KJs:0.1367, KQs:0.2284, KK:0.2007, AKo:0.5576, A2s:0.1707, A3s:0.0847, A4s:0.1187, A5s:0.0201, A7s:0.0382, A8s:0.0182, A9s:0.0610, ATs:0.0495, AJs:0.0013, AQs:0.0007, AKs:0.4610, AA:0.8270"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0015, 88:0.0043, 99:0.0137, TT:0.1749, JJ:0.2038, QTs:0.0001, QJs:0.0001, QQ:0.4254, AQo:0.0003, K6s:0.0038, K7s:0.0001, K9s:0.0005, KTs:0.0021, KQs:0.0036, KK:0.7918, AKo:0.4422, A2s:0.2227, A3s:0.1091, A4s:0.0971, A5s:0.1709, A6s:0.0526, A7s:0.1139, A8s:0.0701, A9s:0.0203, ATs:0.1218, AJs:0.0060, AQs:0.0768, AKs:0.5376, AA:0.1730"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|HJ:4BET@15",
    "heroPos": "BTN",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0007, JJ:0.0034, QQ:0.0035, KQo:0.0010, AQo:0.0002, KK:0.0058, AKo:0.0015, A3s:0.0001, A4s:0.0004, A5s:0.0002, A7s:0.0001, AJs:0.0001, AKs:0.0006"
      },
      {
        "action": "5bet 22.96bb",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0004, QQ:0.0003, KK:0.0003, AKo:0.0014, AKs:0.0005, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|HJ:4BET@22.96",
    "heroPos": "BTN",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0040, QQ:0.0039, KK:0.0063, AKo:0.0029, AKs:0.0011, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0010, 88:0.0004, A9o:0.0001, TT:0.0009, ATo:0.0002, JJ:0.0034, KJo:0.0028, AJo:0.0026, QTs:0.0003, QJs:0.0005, QQ:0.2684, KQo:0.0004, AQo:0.0005, K5s:0.0010, K6s:0.0042, K7s:0.0008, K8s:0.0003, K9s:0.0001, KTs:0.0026, KJs:0.0159, KQs:0.0047, KK:0.1653, AKo:0.0009, A2s:0.0042, A3s:0.0044, A4s:0.0052, A5s:0.0042, A6s:0.0184, A7s:0.0004, A9s:0.0155, ATs:0.0028, AJs:0.0041, AQs:0.0143, AKs:0.0090, AA:0.5419"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0002, 88:0.0038, A9o:0.0001, TT:0.0006, ATo:0.0002, JJ:0.0022, KJo:0.0002, QTs:0.0003, QQ:0.0553, KQo:0.0047, AQo:0.0011, K3s:0.0001, K5s:0.0004, K6s:0.0002, K7s:0.0020, K8s:0.0006, K9s:0.0063, KTs:0.0039, KJs:0.0036, KQs:0.0147, KK:0.7521, AKo:0.0001, A2s:0.0017, A3s:0.0209, A4s:0.0012, A5s:0.0210, A6s:0.0379, A7s:0.0002, A8s:0.0013, A9s:0.0089, ATs:0.0002, AJs:0.0043, AQs:0.0145, AKs:0.0181, AA:0.4580"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0031, JJ:0.0054, QQ:0.0041, KQo:0.0002, AQo:0.0001, K2s:0.0001, K4s:0.0002, K5s:0.0001, K6s:0.0001, K7s:0.0007, K8s:0.0001, K9s:0.0001, KJs:0.0006, KK:0.0063, AKo:0.0029, A3s:0.0004, A4s:0.0018, A5s:0.0007, A7s:0.0003, AJs:0.0006, AKs:0.0011, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0023, TT:0.0255, JJ:0.0001, AJo:0.0003, QTs:0.0006, QJs:0.0006, QQ:0.0029, AQo:0.0001, K5s:0.0001, K6s:0.0008, K7s:0.0001, K8s:0.0005, K9s:0.0005, KTs:0.0001, KQs:0.0019, KK:0.0449, AKo:0.0003, A2s:0.0002, A3s:0.0004, A4s:0.0010, A5s:0.0001, A6s:0.0003, A7s:0.0001, A8s:0.0006, A9s:0.0017, ATs:0.0058, AJs:0.0001, AQs:0.0001, AKs:0.0024, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0003, 88:0.0266, 99:0.0767, TT:0.0741, ATo:0.0009, JTs:0.0007, JJ:0.0856, KJo:0.0005, AJo:0.0002, QTs:0.0022, QJs:0.0077, QQ:0.1608, KQo:0.0041, AQo:0.0029, K5s:0.0012, K8s:0.0008, K9s:0.0008, KTs:0.1131, KJs:0.0001, KQs:0.0008, KK:0.9551, AKo:0.0006, A2s:0.0069, A4s:0.0005, A5s:0.0024, A6s:0.0043, A7s:0.0001, A8s:0.0003, A9s:0.0009, ATs:0.0044, AJs:0.0008, AQs:0.0257, AKs:0.1881, AA:0.9988"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0005, JJ:0.0028, QQ:0.0025, AQo:0.0006, KJs:0.0001, KK:0.0057, AKo:0.0028, AJs:0.0005, AKs:0.0010"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0026, QQ:0.0016, KK:0.0006, AKo:0.0001, AKs:0.0001, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0051, JJ:0.1270, KJo:0.0001, QTs:0.0002, QJs:0.0009, QQ:0.1674, KQo:0.0002, AQo:0.0001, K5s:0.0003, K9s:0.0022, KQs:0.0003, KK:0.9989, AKo:0.0001, A2s:0.0012, A3s:0.0001, A4s:0.0006, A5s:0.0012, A6s:0.0016, A7s:0.0001, ATs:0.0005, AJs:0.0036, AQs:0.0024, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@8.5|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0014, JJ:0.0054, QQ:0.0041, KK:0.0063, AKo:0.0029, AKs:0.0011, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@24.75",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0066, 55:0.0046, 66:0.1622, 77:0.2099, 88:0.3350, 99:0.7324, TT, JJ, QQ, AQo:0.0202, KK, AKo:0.8809, A8s:0.0002, AJs:0.0001, AQs:0.2391, AKs:0.9485, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@24.75",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0008, JJ:0.6397, QQ:0.9991, KK, AKo:0.6298, AKs:0.7708, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0390, QQ:0.7485, KK, AKo:0.6488, AKs:0.7327, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@24.75|BB:CALL@13.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0008, JJ:0.0001, QTs:0.0001, QQ:0.8008, AQo:0.0001, KK:0.9986, A2s:0.0001, A3s:0.0001, A4s:0.0001, A7s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@24.75|SB:CALL@24.25",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A3o:0.0055, Q4o:0.0011, A4o:0.0045, Q5o:0.0001, A5o:0.0001, 63s:0.0003, 66:0.0014, 76s:0.0003, A7o:0.0044, 88:0.1651, 93s:0.0005, 95s:0.0001, A9o:0.0002, T5s:0.0010, TT:0.0135, QTo:0.0001, J7s:0.0006, JJ:0.2591, QJo:0.0014, Q2s:0.0035, Q3s:0.0305, Q4s:0.0060, Q5s:0.0014, Q7s:0.0014, Q9s:0.0026, QTs:0.0017, QJs:0.0010, QQ:0.0173, KQo:0.0007, AQo:0.3768, K6s:0.0003, K7s:0.0006, K8s:0.0014, KTs:0.0012, KJs:0.0002, KK:0.0208, AKo:0.0008, A2s:0.1078, A3s:0.0302, A4s:0.0434, A5s:0.0880, A6s:0.0353, A7s:0.0046, A8s:0.0054, A9s:0.0189, ATs:0.0002, AJs:0.2713, AQs:0.1290, AKs:0.1278, AA:0.5000"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "Q2o:0.0351, Q3o:0.0084, A3o:0.0244, Q7o:0.0098, A8o:0.0046, 99:0.0001, QTo:0.0012, JJ:0.0002, Q3s:0.0167, Q4s:0.0119, Q5s:0.0003, Q7s:0.0015, Q8s:0.0206, Q9s:0.0080, QQ:0.1096, AQo:0.5011, K3s:0.0002, K4s:0.0005, K6s:0.0001, K7s:0.0001, KK:0.0035, AKo:0.1631, A3s:0.1810, A4s:0.0056, A5s:0.0001, A6s:0.0005, A7s:0.0538, A8s:0.1366, A9s:0.0560, ATs:0.0010, AJs:0.0062, AQs:0.0123, AKs:0.3354, AA:0.5000"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0009, A2o:0.0001, 33:0.0010, 43s:0.0003, 44:0.1379, 52s:0.0012, 54s:0.0770, 55:0.0553, K5o:0.0013, 65s:0.1254, 66:0.1688, 73s:0.0005, 75s:0.0121, 76s:0.0517, 77:0.3361, K7o:0.0002, 85s:0.0001, 87s:0.0155, 88:0.1619, K8o:0.0009, 99:0.0170, KTo:0.0005, JJ:0.0198, KJo:0.0003, Q2s:0.1035, Q3s:0.0024, Q4s:0.0636, Q5s:0.0211, Q7s:0.0001, Q8s:0.2357, Q9s:0.3632, QTs:0.0173, QJs:0.0123, QQ:0.8731, KQo:0.9901, AQo:0.1077, K2s:0.0057, K3s:0.3571, K4s:0.1343, K5s:0.2242, K6s:0.5552, K7s:0.2523, K8s:0.1730, K9s:0.1440, KTs:0.2796, KJs:0.0316, KQs:0.9992, KK:0.9757, AKo:0.8359, A2s:0.1728, A3s:0.0716, A4s:0.0577, A5s:0.5908, A6s:0.2501, A7s:0.1991, A8s:0.2147, A9s:0.0618, ATs:0.1815, AJs:0.0943, AQs:0.8532, AKs:0.5368"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 28.32bb"
    ],
    "bands": [
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "62o:0.0001, Q2o:0.3865, K2o:0.0004, A2o:0.0421, 32s:0.0016, 33:0.0103, Q3o:0.1200, K3o:0.0193, A3o:0.0738, 43s:0.0203, 44:0.0283, Q4o:0.2366, K4o:0.0021, A4o:0.0971, 52s:0.0022, 54s:0.0064, 55:0.0150, Q5o:0.1301, K5o:0.0164, A5o:0.1297, 62s:0.0292, 63s:0.0378, 65s:0.0001, 66:0.0168, Q6o:0.2731, K6o:0.0047, 75s:0.0025, 77:0.0075, Q7o:0.1850, K7o:0.0004, A7o:0.0047, 85s:0.0005, 87s:0.1900, 88:0.0007, Q8o:0.0934, K8o:0.0001, 96s:0.0012, 97s:0.0001, 99:0.0028, Q9o:0.1395, K9o:0.0059, T2s:0.0001, T6s:0.0001, T8s:0.0011, T9s:0.0017, TT:0.4064, QTo:0.0477, KTo:0.0043, ATo:0.0001, J4s:0.0022, J6s:0.0008, J7s:0.0015, J8s:0.0127, J9s:0.0040, JTs:0.0110, JJ:0.8897, QJo:0.6247, KJo:0.0647, AJo:0.0365, Q2s:0.1957, Q3s:0.5872, Q4s:0.1748, Q5s:0.0850, Q6s:0.0534, Q7s:0.6049, Q8s:0.1243, Q9s:0.0739, QTs:0.0221, QJs:0.8943, QQ:0.5441, KQo:0.0052, AQo:0.2926, K2s:0.0184, K3s:0.0290, K4s:0.3220, K5s:0.0086, K6s:0.0005, K7s:0.0039, K8s:0.0067, K9s:0.0014, KTs:0.0067, KJs:0.0935, KQs:0.0006, KK:0.3705, AKo:0.6212, A2s:0.4751, A3s:0.1269, A4s:0.0185, A5s:0.0001, A6s:0.4934, A7s:0.0659, A8s:0.0630, A9s:0.0317, ATs:0.0015, AJs:0.3610, AQs:0.0029, AKs:0.8775, AA:0.9983"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "Q2o:0.1451, K2o:0.0001, 32s:0.0013, 33:0.0001, Q3o:0.2460, K3o:0.0044, A3o:0.0002, 43s:0.0003, 44:0.2027, Q4o:0.0620, K4o:0.0005, 53s:0.0014, 55:0.0272, Q5o:0.0106, K5o:0.0307, 63s:0.0001, 65s:0.0001, 66:0.0030, Q6o:0.0072, K6o:0.0001, 73s:0.0016, 75s:0.0001, 77:0.0160, T7o:0.0002, Q7o:0.1386, K7o:0.0001, 88:0.0110, Q8o:0.1368, K8o:0.0004, 94s:0.0001, 98s:0.0001, Q9o:0.0080, K9o:0.0002, T3s:0.0004, T6s:0.0002, TT:0.2834, QTo:0.0007, KTo:0.0004, J3s:0.0001, J6s:0.0001, J7s:0.0020, J8s:0.0011, J9s:0.0007, JTs:0.0040, JJ:0.1084, QJo:0.1900, KJo:0.2179, Q2s:0.1969, Q3s:0.0349, Q4s:0.0686, Q5s:0.0258, Q6s:0.0249, Q7s:0.1978, Q8s:0.0526, Q9s:0.0274, QTs:0.0194, QQ:0.4557, KQo:0.0061, AQo:0.0310, K2s:0.0467, K3s:0.1034, K5s:0.0005, K7s:0.0001, K9s:0.0001, KTs:0.0009, KJs:0.0133, KQs:0.0002, KK:0.6282, AKo:0.0924, A2s:0.0001, A4s:0.0008, A9s:0.0006, ATs:0.0012, AJs:0.0352, AQs:0.0072, AKs:0.1224, AA:0.0015"
      },
      {
        "action": "3bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.0005, K2o:0.0034, A2o:0.0005, 33:0.0574, K3o:0.0001, A3o:0.0002, 43s:0.0002, 44:0.1598, 74o:0.0001, 52s:0.0001, 53s:0.0005, 54s:0.0010, 55:0.3790, K5o:0.0120, A5o:0.0001, 62s:0.0001, 63s:0.0004, 65s:0.0001, 66:0.2344, K6o:0.0001, 75s:0.0479, 77:0.0680, K7o:0.0005, 85s:0.0005, 86s:0.0628, 87s:0.0719, 88:0.3754, Q8o:0.0001, K8o:0.0003, 97s:0.0003, 98s:0.0009, 99:0.0242, K9o:0.0001, T7s:0.0002, QTo:0.0031, KTo:0.0004, J2s:0.0001, J5s:0.0027, J6s:0.0015, J8s:0.0001, JTs:0.0033, JJ:0.0003, QJo:0.0580, KJo:0.0131, AJo:0.0015, Q2s:0.3156, Q3s:0.1444, Q4s:0.6470, Q5s:0.6339, Q6s:0.4631, Q7s:0.1165, Q8s:0.5400, Q9s:0.8683, QTs:0.8930, QJs:0.0105, QQ:0.0002, KQo:0.9863, AQo:0.6736, K2s:0.5583, K3s:0.2850, K4s:0.5817, K5s:0.6350, K6s:0.9011, K7s:0.9200, K8s:0.8361, K9s:0.6749, KTs:0.7912, KJs:0.6243, KQs:0.9972, KK:0.0013, AKo:0.2864, A2s:0.2876, A3s:0.7133, A4s:0.4827, A5s:0.9230, A6s:0.3496, A7s:0.3215, A8s:0.4336, A9s:0.0796, ATs:0.0009, AJs:0.2016, AQs:0.9889, AKs:0.0001, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9988, 33:0.9987, 43s:0.0568, 44, 54o:0.0001, 52s:0.0485, 53s:0.4050, 54s:0.7868, 55:0.9994, 65o:0.0070, 62s:0.0101, 64s:0.1033, 65s:0.8043, 66:0.9990, 76o:0.0002, 73s:0.0005, 74s:0.1244, 75s:0.4215, 76s:0.0079, 77:0.9994, 85s:0.3366, 86s:0.7285, 87s:0.0823, 88:0.9950, 95s:0.0001, 97s:0.3428, 98s:0.6850, 99:0.9920, K9o:0.0101, T3s:0.0013, T6s:0.0042, T7s:0.0451, T8s:0.1882, T9s:0.0002, TT:0.9862, J2s:0.0001, J3s:0.0071, J4s:0.0016, J8s:0.0004, J9s:0.1325, JTs:0.0016, JJ:0.6868, KJo:0.0363, Q3s:0.0008, Q6s:0.0001, Q7s:0.0003, QTs:0.0318, QJs:0.0154, KQo:0.0005, AQo:0.2895, K2s:0.0009, K3s:0.6814, K4s:0.0881, K5s:0.4187, K6s:0.0567, K7s:0.2392, K8s:0.0331, K9s:0.1238, KTs:0.8955, KJs:0.3020, KQs:0.0483, AKo:0.0068, A2s:0.0003, A3s:0.0026, A5s:0.0316, ATs:0.0762, AJs:0.5941, AQs:0.1430, AKs:0.0004, AA:0.0002"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "Q3o:0.0019, Q4o:0.0033, 63s:0.0012, 64s:0.0008, Q6o:0.0008, 74s:0.0002, 77:0.0003, K7o:0.0001, 99:0.0001, Q9o:0.0008, TT:0.0014, KTo:0.0001, J2s:0.0003, J9s:0.0026, JJ:0.2832, QJo:0.0325, AJo:0.0015, Q2s:0.0035, Q4s:0.0246, Q5s:0.0094, Q6s:0.0371, Q7s:0.0008, Q8s:0.0014, QTs:0.0505, QJs:0.1095, QQ:0.1728, KQo:0.0085, AQo:0.3097, K3s:0.0001, K6s:0.0251, K8s:0.0322, KQs:0.0006, KK:0.0004, AKo:0.0268, A3s:0.0043, A4s:0.0600, A8s:0.0093, A9s:0.0001, ATs:0.0092, AJs:0.0184, AQs:0.3221, AKs:0.1651, AA:0.9978"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 76s:0.0005, 97s:0.0001, TT:0.0009, JJ:0.0281, Q8s:0.0030, QTs:0.0044, QJs:0.7777, QQ:0.8272, KQo:0.3611, AQo:0.3928, K2s:0.0007, K3s:0.0082, K5s:0.0481, K6s:0.0025, K9s:0.0013, KTs:0.0060, KJs:0.0832, KQs:0.9459, KK:0.9996, AKo:0.9663, A2s:0.0001, A3s:0.0019, A4s:0.0170, A8s:0.0002, AJs:0.0064, AQs:0.5346, AKs:0.8344, AA:0.0021"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@5",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 99:0.0001, JJ:0.0039, QQ:0.3648, AQo:0.0008, K7s:0.0014, KTs:0.0002, KJs:0.0003, KQs:0.0024, KK:0.0036, AKo:0.1173, A2s:0.0001, A3s:0.0004, A4s:0.0004, A5s:0.0113, A6s:0.0005, A7s:0.0009, A9s:0.0001, ATs:0.0019, AQs:0.1679, AKs:0.0120, AA:0.1865"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0201, A7o:0.0002, 88:0.0395, A8o:0.0001, 99:0.0033, A9o:0.0020, TT:0.0796, JJ:0.2721, AJo:0.0511, QJs:0.0001, QQ:0.2852, K6s:0.0004, K7s:0.0010, K9s:0.0014, KTs:0.0281, KJs:0.0003, KK:0.3862, AKo:0.3100, A2s:0.1185, A3s:0.0011, A4s:0.0477, A5s:0.1600, A6s:0.1538, A7s:0.0129, A8s:0.0359, A9s:0.0246, ATs:0.0462, AJs:0.0054, AQs:0.1302, AKs:0.2017, AA:0.3752"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0010, 88:0.0096, 99:0.0105, TT:0.0544, JTs:0.0002, JJ:0.3818, AJo:0.0033, QJs:0.0001, QQ:0.1091, AQo:0.0002, K5s:0.0023, K7s:0.0239, K9s:0.0002, KTs:0.0035, KJs:0.0015, KQs:0.0030, KK:0.6101, AKo:0.3188, A2s:0.0706, A3s:0.1228, A4s:0.3016, A5s:0.7097, A6s:0.0057, A7s:0.0703, A8s:0.2628, A9s:0.0087, ATs:0.0234, AJs:0.1129, AQs:0.1565, AKs:0.7824, AA:0.4382"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@5",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0173, 65s:0.0049, 66:0.0795, 77:0.0127, 88:0.0671, 99:0.0253, TT:0.0905, JJ:0.2342, QQ:0.2747, AQo:0.0961, KTs:0.0170, KJs:0.0483, KQs:0.0123, ATs:0.0012, AJs:0.2001, AQs:0.4011"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "55:0.0007, 66:0.0036, 77:0.0007, 88:0.0150, 99:0.0035, TT:0.0405, JJ:0.0361, QQ:0.2054, AQo:0.0234, KK:0.0004, ATs:0.0083, AJs:0.0095, AQs:0.0794"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "55:0.0080, 66:0.0103, 77:0.0032, 88:0.0270, 99:0.0374, TT:0.0976, JJ:0.0402, QQ:0.2255, AQo:0.0868, KQs:0.0003, KK:0.0002, ATs:0.0231, AJs:0.0413, AQs:0.3615, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0001, TT:0.0003, JJ:0.0157, QTs:0.0001, QQ:0.2397, K7s:0.0001, KK:0.9647, AKo:0.4467, AQs:0.0003, AKs:0.0400, AA:0.4327"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0108, QTs:0.0001, QQ:0.7594, KK:0.0353, AKo:0.5508, A4s:0.0001, A8s:0.0002, AQs:0.0003, AKs:0.9596, AA:0.5673"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0008, 88:0.0144, 99:0.0086, TT:0.0879, JJ:0.2955, QQ:0.7057, KQs:0.0004, KK:0.0006, AQs:0.3338, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.2546, AQo:0.0102, KTs:0.0001, KJs:0.0962, KK:0.0014, AKo:0.0004, A9s:0.0001, ATs:0.0001, AJs:0.0216, AQs:0.1980, AKs:0.0011, AA:0.0198"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0119, 88:0.0003, A8o:0.0019, 99:0.0017, A9o:0.0016, TT:0.0046, ATo:0.0723, JJ:0.0170, AJo:0.1407, QQ:0.0571, AQo:0.0086, K5s:0.0010, K6s:0.0038, K9s:0.0010, KTs:0.0002, KJs:0.0070, AKo:0.0064, A2s:0.0287, A3s:0.0220, A4s:0.0226, A5s:0.0313, A6s:0.0173, A7s:0.0387, A8s:0.0002, A9s:0.0117, ATs:0.1705, AJs:0.0135, AQs:0.0042, AKs:0.0127, AA:0.9739"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0019, 99:0.0038, TT:0.8003, JTs:0.0001, JJ:0.9750, AJo:0.1060, QQ:0.6786, K6s:0.0047, K7s:0.0002, KTs:0.0006, KJs:0.1204, KQs:0.0011, KK:0.9985, AKo:0.9915, A4s:0.0177, A5s:0.0432, A6s:0.2057, A7s:0.0015, A8s:0.0028, A9s:0.0340, ATs:0.5762, AJs:0.7241, AQs:0.0441, AKs:0.9860, AA:0.0062"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1371, QQ:0.4787, AQo:0.0061, KTs:0.0002, KJs:0.0401, KQs:0.0234, ATs:0.0245, AJs:0.3517, AQs:0.5821"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0003, QQ:0.0316, AQo:0.0001, KTs:0.0004, KJs:0.0001, ATs:0.0051, AJs:0.0007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0040, 66:0.0188, 88:0.0051, 99:0.0059, TT:0.0012, JJ:0.0160, QQ:0.1944, AQo:0.0372, KTs:0.0001, KQs:0.0001, KK:0.0006, A5s:0.0001, ATs:0.0506, AJs:0.0622, AQs:0.2262, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@9",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0043, QJs:0.0001, QQ:0.0832, K6s:0.0001, KK:0.0019, A4s:0.0007, A8s:0.0001, AQs:0.0090, AKs:0.0007, AA:0.0191"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "99:0.0029, TT:0.0117, JJ:0.0014, KJo:0.0330, QQ:0.0143, K4s:0.0001, K7s:0.0013, K8s:0.0006, K9s:0.0082, KTs:0.0008, KQs:0.1255, KK:0.1624, AKo:0.1826, A5s:0.0004, A7s:0.0124, A8s:0.0081, A9s:0.0016, ATs:0.0003, AJs:0.0017, AQs:0.0271, AKs:0.0033, AA:0.3379"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0004, TT:0.4391, JJ:0.8671, QJs:0.0001, QQ:0.4812, AQo:0.0007, K4s:0.0002, K6s:0.0001, K7s:0.0388, K9s:0.0391, KTs:0.0907, KJs:0.0259, KQs:0.0137, KK:0.8357, AKo:0.8118, A2s:0.0001, A3s:0.0003, A4s:0.0012, A5s:0.0073, A6s:0.0018, A8s:0.0238, ATs:0.0002, AQs:0.0017, AKs:0.9953, AA:0.6430"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@9",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, QQ:0.0983, KQo:0.0010, KJs:0.0035, KQs:0.0380, AJs:0.0288, AQs:0.0316"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0002, TT:0.0019, JJ:0.0025, QQ:0.0095, KJs:0.0006, KQs:0.0036, ATs:0.0002, AJs:0.0007, AQs:0.0057"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0042, 66:0.0161, 77:0.0022, 88:0.0183, 99:0.0068, TT:0.0137, JJ:0.1680, QQ:0.5628, KQo:0.0022, AQo:0.0055, KTs:0.1169, KJs:0.0099, KQs:0.2507, KK:0.0006, A5s:0.0001, ATs:0.0362, AJs:0.0900, AQs:0.1552, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0194, TT:0.0826, JJ:0.8314, QQ:0.9981, KTs:0.0001, KQs:0.0003, KK, AKo:0.9467, AQs:0.0870, AKs:0.9952, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0011, QQ:0.7057, KK:0.0006"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0005, 99:0.0005, A9o:0.0005, TT:0.0020, ATo:0.0012, JJ:0.1791, AJo:0.0019, QQ:0.0063, AQo:0.0198, K5s:0.0051, K7s:0.0049, K8s:0.0008, K9s:0.0005, KTs:0.0026, KJs:0.0018, KK:0.2330, AKo:0.0944, A2s:0.0005, A3s:0.0001, A4s:0.0602, A5s:0.0013, A6s:0.0004, A7s:0.0005, A8s:0.0261, ATs:0.0008, AJs:0.0002, AQs:0.1985, AKs:0.0143, AA:0.0024"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A5o:0.0004, A7o:0.0007, 88:0.0018, A8o:0.0002, 99:0.0002, A9o:0.0129, TT:0.0004, ATo:0.0908, JJ:0.0630, AJo:0.0103, QJs:0.0002, KQo:0.0001, AQo:0.0021, K5s:0.0008, KTs:0.0117, KQs:0.0001, KK:0.0612, AKo:0.4717, A2s:0.0403, A3s:0.0197, A4s:0.1579, A5s:0.0886, A6s:0.0161, A7s:0.1441, A8s:0.0351, A9s:0.0299, ATs:0.0074, AJs:0.1096, AQs:0.0048, AKs:0.3323, AA:0.6779"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0005, A7o:0.0015, 88:0.0096, 99:0.0001, A9o:0.0007, TT:0.0021, ATo:0.0575, JJ:0.0154, KJo:0.0052, AJo:0.0001, QTs:0.0024, QQ:0.1275, AQo:0.0131, K5s:0.0002, K6s:0.0602, K7s:0.0012, K8s:0.0030, K9s:0.0003, KJs:0.0362, KQs:0.0001, KK:0.7026, AKo:0.2768, A2s:0.6427, A3s:0.0365, A4s:0.4903, A5s:0.2481, A6s:0.1081, A7s:0.0200, A8s:0.3847, A9s:0.3113, ATs:0.0693, AJs:0.1402, AQs:0.0721, AKs:0.5423, AA:0.3197"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0271, 65s:0.0032, 66:0.1136, 77:0.0168, 88:0.1210, 99:0.0244, TT:0.1463, JJ:0.2656, QQ:0.4094, AQo:0.0370, KTs:0.0608, KJs:0.0166, KQs:0.0044, KK:0.0004, A5s:0.0001, ATs:0.0009, AJs:0.1056, AQs:0.6735"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0002, JJ:0.0003, QQ:0.0987, AQo:0.0484, KTs:0.0073, KQs:0.0001, KK:0.0001, ATs:0.0279, AJs:0.0143, AQs:0.0165"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0003, 77:0.0001, 88:0.0002, 99:0.0001, TT:0.0001, JJ:0.0046, QQ:0.0474, KQo:0.0001, AQo:0.1534, KQs:0.0100, ATs:0.0107, AJs:0.0174, AQs:0.1353, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@8.5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 88:0.0002, JJ:0.0002, QJs:0.0004, QQ:0.0441, K7s:0.0001, K8s:0.0001, K9s:0.0002, KQs:0.0002, KK:0.0207, AKo:0.0013, A2s:0.0001, A3s:0.0001, A4s:0.0009, A5s:0.0011, A6s:0.0003, A7s:0.0003, A8s:0.0001, A9s:0.0001, ATs:0.0007, AJs:0.0025, AQs:0.3621, AKs:0.0266, AA:0.0010"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "A7o:0.0005, 99:0.0001, A9o:0.0047, TT:0.0024, ATo:0.0089, JJ:0.0003, AJo:0.1027, QJs:0.0011, QQ:0.0010, AQo:0.0002, K6s:0.1331, KJs:0.0001, KQs:0.0001, KK:0.0739, AKo:0.0364, A2s:0.0002, A3s:0.0041, A4s:0.0015, A5s:0.0038, A6s:0.0953, A7s:0.0039, A8s:0.0783, A9s:0.0478, ATs:0.1321, AJs:0.0036, AQs:0.0021, AKs:0.1708, AA:0.4210"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0145, A7o:0.0001, 88:0.2354, 99:0.4787, A9o:0.0003, TT:0.5048, ATo:0.0025, JTs:0.0019, JJ:0.5217, QTs:0.0042, QJs:0.0072, QQ:0.0076, AQo:0.0035, K6s:0.0002, K7s:0.0046, K9s:0.0002, KTs:0.0843, KJs:0.0916, KQs:0.0014, KK:0.8854, AKo:0.9374, A2s:0.1331, A3s:0.0436, A4s:0.0396, A5s:0.0044, A6s:0.0497, A7s:0.4414, A8s:0.0544, A9s:0.0032, ATs:0.0071, AJs:0.2882, AQs:0.0603, AKs:0.7812, AA:0.5779"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@8.5",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0059, 88:0.0089, QQ:0.3509, AQo:0.0920, AJs:0.0007, AQs:0.2682"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "AQo:0.0002, AQs:0.0003"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "55:0.0004, 66:0.0029, 77:0.0004, 88:0.0225, 99:0.0024, TT:0.0161, JJ:0.0076, QQ:0.1283, AQo:0.0380, KTs:0.0058, KQs:0.0100, KK:0.0006, ATs:0.0664, AJs:0.0520, AQs:0.2370, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0013, QQ:0.0112, KJs:0.0001, KK, AKo:0.2656, AKs:0.9955, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.5526, KK:0.0006, AKs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A2o:0.0202, A3o:0.0089, A4o:0.0549, A5o:0.0280, 65s:0.0001, A6o:0.0061, A7o:0.0128, A8o:0.0004, 99:0.0010, A9o:0.0291, TT:0.0001, KTo:0.0013, ATo:0.1082, JJ:0.0010, AJo:0.0015, QJs:0.0001, QQ:0.0073, AQo:0.0010, K5s:0.0001, K9s:0.0034, KTs:0.0016, KJs:0.0021, AKo:0.0427, A2s:0.0726, A3s:0.0283, A5s:0.0148, A6s:0.0476, A7s:0.0025, A8s:0.1185, A9s:0.0016, ATs:0.0586, AJs:0.0736, AQs:0.0020, AKs:0.1325, AA:0.9988"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "64s:0.0001, T9s:0.0004, ATo:0.0001, JJ:0.0001, QTs:0.0001, K8s:0.0090, KJs:0.0003, KK, AKo:0.9572, A3s:0.0829, A4s:0.0001, A5s:0.0010, A6s:0.0094, A7s:0.0005, A8s:0.0002, A9s:0.0001, ATs:0.0006, AJs:0.0010, AQs:0.0002, AKs:0.8674, AA:0.0012"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "Q2o:0.0002, K2o:0.7627, 33:0.0003, K3o:0.1054, K4o:0.4108, K5o:0.2210, K6o:0.0538, 77:0.0026, K7o:0.1399, A7o:0.0001, 83s:0.0001, 88:0.1667, K8o:0.1394, A8o:0.0001, 99:0.0055, K9o:0.3483, A9o:0.0004, T6s:0.0001, T9s:0.0009, TT:0.0245, KTo:0.1219, ATo:0.0005, J2s:0.0002, JJ:0.3812, KJo:0.3663, AJo:0.0022, Q5s:0.0001, QTs:0.0003, QQ:0.3309, KQo:0.3424, AQo:0.0005, K2s:0.0635, K3s:0.0027, K4s:0.1767, K5s:0.0359, K6s:0.1653, K7s:0.0056, K8s:0.0003, K9s:0.0021, KTs:0.0001, KJs:0.0007, KQs:0.0001, KK:0.9998, AKo:0.9753, A2s:0.0001, A5s:0.0001, A6s:0.0002, A7s:0.0004, A8s:0.0004, ATs:0.0004, AKs:0.9893, AA"
      },
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.2451, A2o:0.0893, 33:0.2059, A3o:0.1826, 42s:0.0058, 43s:0.0683, 44:0.2377, A4o:0.0202, 53s:0.0464, 54s:0.3273, 55:0.2987, 65o:0.0004, K5o:0.0039, A5o:0.2890, 64s:0.2549, 65s:0.4163, 66:0.6151, A6o:0.0056, 73s:0.0016, 74s:0.0003, 75s:0.0740, 76s:0.4264, 77:0.4313, 87o:0.0003, A7o:0.1255, 85s:0.0096, 86s:0.5192, 87s:0.6870, 88:0.3703, K8o:0.0041, A8o:0.0182, 96s:0.0316, 97s:0.0807, 98s:0.2518, 99:0.4527, K9o:0.0928, A9o:0.0518, T3s:0.0002, T4s:0.0001, T6s:0.0001, T7s:0.0012, T8s:0.0015, T9s:0.2549, TT:0.6843, QTo:0.0003, KTo:0.3147, ATo:0.2595, J2s:0.0006, J4s:0.0001, J5s:0.0004, J6s:0.0002, J7s:0.0029, J8s:0.0330, J9s:0.1264, JTs:0.3849, JJ:0.6187, QJo:0.0003, KJo:0.4437, AJo:0.2651, Q3s:0.0007, Q5s:0.0032, Q6s:0.0010, Q7s:0.0002, Q8s:0.0064, Q9s:0.1069, QTs:0.2194, QJs:0.1961, QQ:0.6691, KQo:0.6352, AQo:0.7054, K2s:0.7074, K3s:0.9024, K4s:0.7765, K5s:0.7776, K6s:0.8326, K7s:0.9025, K8s:0.9995, K9s:0.9827, KTs:0.9974, KJs:0.9982, KQs:0.9993, KK:0.0002, AKo:0.0247, A2s:0.9971, A3s:0.9996, A4s:0.9840, A5s:0.9996, A6s:0.8250, A7s:0.9637, A8s:0.8846, A9s:0.6562, ATs:0.9880, AJs:0.9833, AQs, AKs:0.0106"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0001, 44:0.0291, 55:0.0596, 66:0.0676, 77:0.0130, 88:0.2900, 97s:0.0001, 99:0.1031, TT:0.3343, J5s:0.0001, JJ:0.9202, QTs:0.0003, QQ:0.5750, KQo:0.0264, AQo:0.5391, K3s:0.0002, K7s:0.0001, K8s:0.0308, K9s:0.0137, KTs:0.0221, KJs:0.0632, KQs:0.4657, KK:0.4190, AKo:0.7321, A2s:0.0461, A3s:0.0105, A4s:0.0399, A6s:0.0082, A7s:0.0299, A8s:0.0179, A9s:0.0971, AJs:0.1624, AQs:0.9728, AKs:0.7526, AA:0.9620"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0043, 33:0.0028, 44:0.0422, 55:0.1377, 65s:0.0012, 66:0.1252, 77:0.1202, 88:0.0734, 99:0.0502, TT:0.0690, J8s:0.0011, JJ:0.0785, QQ:0.4249, AQo:0.1837, K3s:0.0012, K4s:0.0016, K5s:0.0018, K6s:0.0033, K7s:0.0032, K8s:0.0383, K9s:0.0143, KTs:0.0037, KJs:0.0540, KQs:0.1518, KK:0.5810, AKo:0.2679, A2s:0.0286, A3s:0.0015, A4s:0.0053, A6s:0.0028, A8s:0.0079, A9s:0.0234, ATs:0.0036, AJs:0.0061, AQs:0.0270, AKs:0.2473, AA:0.0380"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0124, 88:0.0943, 99:0.0024, TT:0.0002, JJ:0.1060, QQ:0.4853, AQo:0.0002, KTs:0.0263, KQs:0.1301, A5s:0.0004, A7s:0.0001, A8s:0.0074, A9s:0.0002, ATs:0.1042, AJs:0.0235, AQs:0.9737, AKs:0.0001"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A4o:0.0004, A5o:0.0532, A7o:0.0067, A8o:0.0015, A9o:0.0537, ATo:0.0375, KJo:0.0002, AJo:0.0250, KQo:0.0006, AQo:0.0028, K6s:0.0002, K7s:0.0536, K8s:0.0013, K9s:0.0383, KTs:0.0012, KJs:0.0004, AKo:0.0826, A2s:0.0750, A3s:0.0370, A4s:0.0967, A5s:0.0046, A6s:0.0794, A7s:0.0547, A8s:0.0779, A9s:0.3700, ATs:0.0204, AJs:0.0181, AQs:0.0185, AKs:0.1524, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0131, TT:0.0087, JJ:0.3520, QQ:0.4367, AQo:0.0003, K6s:0.0007, K7s:0.0007, K9s:0.0660, KTs:0.2782, KJs:0.4567, KQs:0.2478, KK, AKo:0.9174, A2s:0.0578, A3s:0.3831, A4s:0.3319, A5s:0.7841, A6s:0.1311, A7s:0.4687, A8s:0.4727, A9s:0.0609, ATs:0.5259, AJs:0.4578, AQs:0.0018, AKs:0.8475"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|HJ:4BET@11",
    "heroPos": "CO",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0310, AJo:0.0076, QQ:0.0483, AQo:0.0345, KK:0.0580, A3s:0.0001, A4s:0.0006, A5s:0.0004, A6s:0.0002, A7s:0.0014, A8s:0.0003, A9s:0.0002, ATs:0.0397, AJs:0.0485, AQs:0.0003, AA:0.0105"
      },
      {
        "action": "5bet 22.96bb",
        "min": 0.0001,
        "range": "A3o:0.0082, A4o:0.0217, A5o:0.0009, A6o:0.0002, A7o:0.0122, A8o:0.0054, TT:0.0206, ATo:0.0030, JJ:0.1960, AJo:0.0271, QQ:0.0903, AQo:0.1003, KK:0.9134, AKo:0.2926, A2s:0.0392, A3s:0.1957, A4s:0.3666, A5s:0.3060, A6s:0.2472, A7s:0.4942, A8s:0.1423, A9s:0.0271, ATs:0.0868, AJs:0.0468, AQs:0.0002, AKs:0.7426, AA:0.9831"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|HJ:4BET@22.96",
    "heroPos": "CO",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0017, JJ:0.1604, QQ:0.1741, KK:0.9982, AKo:0.2926, AKs:0.7426, AA:0.9936"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@11",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.1829, QQ:0.5783, KK:0.8945, AKo:0.3733, AQs:0.0013, AKs:0.3413, AA:0.2242"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0004, QQ:0.4073, KK:0.1055, AJs:0.0001, AKs:0.3339, AA:0.7758"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@11",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0487, ATo:0.0001, JJ:0.2256, AJo:0.0093, QQ:0.1180, KQo:0.0229, AQo:0.4137, K8s:0.0007, K9s:0.0064, KTs:0.0231, KJs:0.0362, KK:0.8135, AKo:0.2008, A3s:0.0005, A4s:0.0003, A5s:0.0034, A6s:0.0009, A7s:0.0002, A8s:0.0003, A9s:0.0165, ATs:0.0424, AJs:0.0916, AQs:0.0004, AKs:0.2878, AA:0.0001"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "TT:0.0347, JJ:0.1175, AJo:0.0041, QQ:0.0561, KQo:0.0003, AQo:0.0358, KTs:0.0002, KJs:0.0008, KK:0.1847, AKo:0.0918, A3s:0.0006, A4s:0.0022, A5s:0.0004, A7s:0.0001, A8s:0.0021, A9s:0.0017, ATs:0.0011, AJs:0.0054, AQs:0.0001, AKs:0.4548, AA:0.9935"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0001, TT:0.0024, JJ:0.1227, QQ:0.5193, KK:0.4542, AKo:0.0444, AKs:0.2794, AA:0.9448"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0602, JJ:0.2426, QQ:0.4798, KK:0.5458, AQs:0.0002, AKs:0.5270, AA:0.0552"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0834, JJ:0.3431, AJo:0.0075, QQ:0.1741, KQo:0.0137, AQo:0.4213, K9s:0.0008, KTs:0.0027, KJs:0.0074, KK:0.9982, AKo:0.2926, A3s:0.0003, A4s:0.0149, A6s:0.0105, A7s:0.0070, A8s:0.0440, A9s:0.0281, ATs:0.0891, AJs:0.0780, AQs:0.0005, AKs:0.7426, AA:0.9936"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@11",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "QQ:0.0030, KK:0.0252, AKs:0.0127, AA:0.0024"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0403, QQ:0.6584, KK:0.9748, AKo:0.9861, A3s:0.0002, A5s:0.0021, A8s:0.0002, A9s:0.0003, ATs:0.0006, AJs:0.2152, AQs:0.1095, AKs:0.9796, AA:0.9976"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@11",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0001, QQ:0.0001, AQo:0.0065, KJs:0.0019, KK:0.1004, A2s:0.0001, A7s:0.0001, A8s:0.0020, A9s:0.0043, ATs:0.0026, AJs:0.0068, AQs:0.0001, AKs:0.0033"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0005, A7o:0.0001, A8o:0.0002, TT:0.0154, JJ:0.3424, AJo:0.0265, QQ:0.1740, AQo:0.1091, KK:0.8978, AKo:0.2926, A2s:0.0175, A3s:0.0295, A4s:0.2336, A5s:0.3168, A6s:0.0205, A7s:0.1415, A8s:0.0861, A9s:0.0340, ATs:0.1336, AJs:0.0900, AQs:0.0004, AKs:0.7393, AA:0.9936"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0165, QQ:0.9179, KK, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0667, JJ:0.3431, QQ:0.1741, KK:0.9982, AKo:0.0350, AKs:0.4271, AA:0.9936"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@11",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "QQ:0.0047, KTs:0.0002, KK:0.0159, AKo:0.0075, A2s:0.0001, A3s:0.0322, A5s:0.0045, A8s:0.0001, A9s:0.0212, AQs:0.0056, AKs:0.0081, AA:0.0121"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0017, JJ:0.0017, AJo:0.0046, QQ:0.0277, K9s:0.0001, KTs:0.0001, KK:0.0012, AKo:0.3011, A2s:0.0002, A3s:0.0236, A4s:0.1268, A5s:0.0379, A6s:0.0004, A7s:0.0973, A9s:0.0456, ATs:0.1546, AJs:0.0327, AQs:0.2673, AKs:0.5266, AA:0.9879"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@11",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0017, QQ:0.0022, AQo:0.0045, KK:0.0036, AKo:0.0017, A2s:0.0003, A3s:0.0002, A4s:0.0021, A5s:0.0023, A7s:0.0001, A8s:0.0020, A9s:0.0010, ATs:0.0014, AJs:0.0016, AKs:0.0030, AA:0.0005"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0191, A4o:0.0173, A5o:0.0697, A6o:0.0001, A7o:0.0057, A8o:0.0156, TT:0.0324, ATo:0.0016, JJ:0.0890, AJo:0.0203, QQ:0.0798, AQo:0.0794, KK:0.6692, AKo:0.2786, A2s:0.0367, A3s:0.1267, A4s:0.3730, A5s:0.4085, A6s:0.3188, A7s:0.4516, A8s:0.1766, A9s:0.0828, ATs:0.1114, AJs:0.0841, AQs:0.0004, AKs:0.7366, AA:0.9931"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9994, ATs:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0005, JJ:0.0012, QQ:0.0010, KK:0.9982, AKo:0.2243, AKs:0.7313, AA:0.9936"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.0989, 66:0.0132, 77:0.0065, J8s:0.0071, JJ:0.1442, Q8s:0.0001, QTs:0.0001, QQ:0.4280, AQo:0.0510, KQs:0.0001, KK:0.6537, AKo:0.1332, A3s:0.0290, A5s:0.0132, A8s:0.0025, AJs:0.2131, AKs:0.1214, AA:0.3911"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1024, 43s:0.0001, 54s:0.0228, 75s:0.0048, 86s:0.0001, 95s:0.0785, 99:0.0011, T5s:0.0001, J3s:0.0001, J8s:0.0006, JJ:0.0293, QTs:0.0001, QJs:0.0011, QQ:0.4527, K2s:0.0271, K3s:0.0002, KTs:0.0176, KQs:0.0010, KK:0.3443, AKo:0.8421, A3s:0.0263, A5s:0.0005, A7s:0.0080, A8s:0.0703, A9s:0.0043, ATs:0.0599, AJs:0.0307, AQs:0.0003, AKs:0.4880, AA:0.6089"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.3673, 52o:0.0004, K2o:0.0068, A2o:0.2108, 32s:0.0019, 33:0.0769, K3o:0.0038, A3o:0.0534, 43s:0.0093, 44:0.0619, Q4o:0.0194, A4o:0.0144, 52s:0.1078, 53s:0.0089, 54s:0.0345, 55:0.2152, A5o:0.0878, 63s:0.0988, 66:0.1628, 96o:0.0017, K6o:0.0003, A6o:0.0007, 73s:0.0004, 74s:0.1438, 76s:0.1106, 77:0.0458, A7o:0.5080, 82s:0.0169, 83s:0.0222, 84s:0.0103, 85s:0.0010, 86s:0.0231, 87s:0.0533, 88:0.1916, K8o:0.0021, A8o:0.1546, 93s:0.0185, 96s:0.0006, 97s:0.0537, 98s:0.0332, 99:0.0252, K9o:0.0003, A9o:0.3294, T2s:0.0503, T3s:0.0001, T4s:0.0027, T6s:0.0060, T7s:0.0075, T8s:0.3311, T9s:0.0180, TT:0.2536, JTo:0.0032, QTo:0.0116, KTo:0.0038, ATo:0.0157, J3s:0.0032, J5s:0.0001, J7s:0.3335, J8s:0.0197, JTs:0.0001, JJ:0.4082, QJo:0.0322, KJo:0.0497, AJo:0.0955, Q2s:0.0124, Q4s:0.0001, Q5s:0.0001, Q6s:0.0284, Q7s:0.0001, Q8s:0.0004, QTs:0.1024, QJs:0.0562, QQ:0.3351, KQo:0.0071, AQo:0.2654, K3s:0.0311, K5s:0.0085, K6s:0.0025, K7s:0.1110, K8s:0.0026, K9s:0.0023, KTs:0.0658, KJs:0.3455, KQs:0.0071, KK:0.0822, AKo:0.7140, A2s:0.2763, A3s:0.3538, A4s:0.2441, A5s:0.0448, A6s:0.3860, A7s:0.6122, A8s:0.2262, A9s:0.0163, ATs:0.1204, AJs:0.1559, AQs:0.2302, AKs:0.4931, AA:0.8471"
      },
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.0204, 62o:0.0004, A2o:0.0395, 32s:0.0003, 33:0.0653, 43o:0.0003, 93o:0.0003, T3o:0.0001, Q3o:0.0002, K3o:0.0041, A3o:0.0343, 42s:0.0002, 44:0.0652, K4o:0.0001, A4o:0.0083, 52s:0.0122, 53s:0.4825, 54s:0.4228, 55:0.0774, K5o:0.0004, A5o:0.2531, 63s:0.0595, 64s:0.0001, 65s:0.0018, 66:0.0684, 76o:0.0017, 74s:0.0128, 75s:0.0684, 76s:0.0604, 77:0.0019, 97o:0.0010, K7o:0.0007, A7o:0.2065, 82s:0.0512, 83s:0.0290, 84s:0.0011, 85s:0.0024, 86s:0.0004, 87s:0.0389, 88:0.0493, 98o:0.0006, T8o:0.0007, A8o:0.0487, 93s:0.0568, 94s:0.0023, 95s:0.1623, 96s:0.0043, 97s:0.0066, 98s:0.0704, J9o:0.0022, Q9o:0.0030, K9o:0.0067, T2s:0.0002, T3s:0.0008, T6s:0.0247, T7s:0.0024, T8s:0.1769, T9s:0.0023, TT:0.0753, JTo:0.0011, KTo:0.0017, ATo:0.0216, J2s:0.0002, J3s:0.0054, J5s:0.0161, J6s:0.0017, J7s:0.2494, J8s:0.0323, J9s:0.0044, JTs:0.0061, JJ:0.5725, QJo:0.0019, AJo:0.0276, Q3s:0.0037, Q4s:0.0013, Q5s:0.0023, Q6s:0.0042, Q8s:0.0029, Q9s:0.0007, QTs:0.0461, QJs:0.0071, QQ:0.6649, KQo:0.0023, AQo:0.0268, K2s:0.0017, K3s:0.0071, K4s:0.0078, K5s:0.0630, K6s:0.0048, K7s:0.0121, K9s:0.0055, KTs:0.0577, KJs:0.3828, KK:0.9178, AKo:0.2203, A2s:0.1090, A3s:0.2910, A4s:0.2946, A5s:0.0022, A6s:0.3750, A7s:0.1882, A8s:0.1363, A9s:0.6276, ATs:0.0428, AJs:0.8124, AQs:0.0075, AKs:0.4892, AA:0.1529"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0003, 42s:0.0001, 77:0.0001, 82s:0.0004, 83s:0.0001, 85s:0.0001, 86s:0.0001, 98s:0.0001, A9o:0.0001, T8s:0.0001, TT:0.0550, J7s:0.0001, J8s:0.0001, JTs:0.0001, JJ:0.2339, AJo:0.0001, Q3s:0.0001, Q6s:0.0002, QJs:0.0011, QQ:0.9162, K3s:0.0002, K5s:0.0001, K7s:0.0003, K8s:0.0001, KTs:0.0005, KJs:0.0026, KQs:0.0106, KK:0.9995, AKo:0.7626, A4s:0.0001, A6s:0.0004, A7s:0.0003, A9s:0.0001, AQs:0.3432, AKs:0.9872, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, ATo:0.0001, QQ:0.0038, K6s:0.0002, K9s:0.0004, KJs:0.0001, KQs:0.0269, KK:0.0094, A3s:0.0001, A6s:0.0029, A7s:0.0001, AJs:0.0003, AQs:0.0010, AKs:0.0002"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "A5o:0.0126, 77:0.0033, A7o:0.0005, 88:0.0053, A8o:0.0003, 99:0.0190, A9o:0.0018, TT:0.2009, ATo:0.0269, JJ:0.4116, KJo:0.0089, AJo:0.0600, QJs:0.0012, QQ:0.1268, KQo:0.0001, AQo:0.0064, K5s:0.0016, K6s:0.0163, K7s:0.0001, K8s:0.0007, K9s:0.0514, KTs:0.0371, KJs:0.0251, KQs:0.0048, KK:0.0548, AKo:0.6119, A2s:0.0249, A3s:0.0267, A6s:0.0069, A7s:0.0225, A8s:0.1224, A9s:0.0126, ATs:0.0904, AJs:0.1505, AQs:0.1903, AKs:0.5812, AA:0.9097"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0005, 77:0.0003, A7o:0.0001, 88:0.0005, A9o:0.0003, TT:0.0133, JJ:0.1494, KJo:0.0007, QQ:0.8534, KQo:0.0002, AQo:0.0001, K6s:0.0094, K7s:0.0017, K8s:0.0006, K9s:0.0052, KTs:0.0062, KJs:0.0092, KQs:0.0706, KK:0.9358, AKo:0.3881, A2s:0.0556, A3s:0.0522, A4s:0.0184, A5s:0.0139, A6s:0.1052, A7s:0.0128, A8s:0.0105, A9s:0.0174, ATs:0.0213, AJs:0.1861, AQs:0.2717, AKs:0.4183, AA:0.0903"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|HJ:4BET@15",
    "heroPos": "CO",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 22.96bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0017, QQ:0.0055, AQo:0.0005, KK:0.0012, AKo:0.0007, AJs:0.0003, AKs:0.0012"
      },
      {
        "action": "5bet 22.96bb",
        "min": 0.0001,
        "range": "AA:0.0064"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|HJ:4BET@22.96",
    "heroPos": "CO",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0010, QQ:0.0054, KK:0.0012, AKo:0.0007, AKs:0.0012, AA:0.0064"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0005, 77:0.0002, 88:0.0007, 99:0.0011, A9o:0.0006, TT:0.0254, ATo:0.0032, JJ:0.0051, KJo:0.0023, AJo:0.0015, QTs:0.0155, QJs:0.0178, QQ:0.3019, KQo:0.0028, AQo:0.0012, K5s:0.0006, K6s:0.0070, K7s:0.0154, K8s:0.0001, K9s:0.0031, KTs:0.0055, KJs:0.0005, KQs:0.0058, KK:0.0079, AKo:0.0126, A2s:0.0180, A3s:0.0010, A4s:0.0032, A5s:0.0170, A6s:0.0098, A7s:0.0090, A8s:0.0067, A9s:0.0062, ATs:0.0726, AJs:0.1090, AQs:0.0047, AKs:0.0237, AA:0.7176"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0007, 77:0.0004, 88:0.0006, 99:0.0001, TT:0.0001, ATo:0.0007, KJo:0.0003, AJo:0.0008, QTs:0.0059, QJs:0.0363, QQ:0.4718, KQo:0.0002, AQo:0.0071, K6s:0.0048, K7s:0.0045, KTs:0.0030, KJs:0.0010, KQs:0.0052, KK:0.9915, AKo:0.0145, A2s:0.0078, A3s:0.0006, A4s:0.0052, A5s:0.0035, A6s:0.0035, A7s:0.0028, A8s:0.0001, A9s:0.0192, ATs:0.0145, AJs:0.0003, AQs:0.0052, AKs:0.0259, AA:0.2824"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.0017, AJo:0.0001, QQ:0.0055, KQo:0.0001, AQo:0.0005, K4s:0.0008, K9s:0.0003, KTs:0.0002, KJs:0.0007, KQs:0.0002, KK:0.0012, AKo:0.0007, A3s:0.0001, A4s:0.0001, A7s:0.0019, A9s:0.0003, AJs:0.0003, AKs:0.0012, AA:0.0064"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|SB:4BET@15",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0001, 77:0.0001, 99:0.0002, A9o:0.0001, TT:0.0129, JJ:0.0014, AJo:0.0003, QTs:0.0002, QQ:0.4524, K6s:0.0009, K7s:0.0001, KTs:0.0002, KJs:0.0003, KQs:0.0001, KK:0.5991, AKo:0.1842, A2s:0.0025, A3s:0.0002, A4s:0.0088, A5s:0.0005, A6s:0.0018, A7s:0.0046, A8s:0.0001, ATs:0.0029, AQs:0.0006, AA:0.0027"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0007, 88:0.0212, 99:0.0147, A9o:0.0001, TT:0.0259, ATo:0.0010, JJ:0.0536, KJo:0.0001, AJo:0.0007, QJs:0.0097, QQ:0.2813, KQo:0.0001, AQo:0.0002, K6s:0.0002, K7s:0.0016, K8s:0.0006, KTs:0.0003, KJs:0.0011, KQs:0.0008, KK:0.4008, AKo:0.2839, A2s:0.0044, A3s:0.0011, A4s:0.0122, A5s:0.0131, A6s:0.0007, A7s:0.0180, A8s:0.0023, A9s:0.0001, ATs:0.0266, AJs:0.0010, AQs:0.0292, AKs:0.0863, AA:0.9969"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|SB:4BET@15",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0003, JJ:0.0013, QQ:0.0054, KK:0.0012, AKo:0.0002, AKs:0.0012, AA:0.0059"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0004, AKo:0.0005, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|SB:4BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0002, 99:0.0001, A9o:0.0001, TT:0.0003, ATo:0.0006, JJ:0.1260, AJo:0.0002, QTs:0.0013, QJs:0.0001, QQ:0.2827, KQo:0.0001, AQo:0.0003, K5s:0.0002, K6s:0.0011, K7s:0.0001, K8s:0.0007, K9s:0.0005, KTs:0.0007, KJs:0.0023, KQs:0.0101, KK:0.9921, AKo:0.0044, A2s:0.0001, A3s:0.0015, A4s:0.0007, A5s:0.0004, A8s:0.0003, ATs:0.0056, AJs:0.0004, AKs:0.1700, AA:0.9663"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.0055, KK:0.0012, AKo:0.0001, AKs:0.0002, AA:0.0064"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|BTN:4BET@15",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0002, 77:0.0001, 88:0.0016, 99:0.0028, A9o:0.0010, TT:0.0036, ATo:0.0008, JTs:0.0001, JJ:0.0050, QJo:0.0001, KJo:0.0030, AJo:0.0012, QTs:0.0009, QJs:0.0097, QQ:0.0112, KQo:0.0065, AQo:0.0103, K6s:0.0131, K7s:0.0009, K9s:0.0001, KTs:0.0969, KJs:0.0046, KQs:0.0097, KK:0.2501, AKo:0.0507, A2s:0.0009, A3s:0.0061, A4s:0.0637, A5s:0.0043, A6s:0.0041, A7s:0.0153, A8s:0.0039, A9s:0.0183, ATs:0.0183, AJs:0.0920, AQs:0.3877, AKs:0.1613, AA:0.0142"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0159, 77:0.0001, A7o:0.0002, 88:0.0013, 99:0.0006, A9o:0.0015, TT:0.0133, ATo:0.0099, JJ:0.0048, QJo:0.0014, KJo:0.0005, AJo:0.0005, QTs:0.0020, QJs:0.0087, QQ:0.6908, KQo:0.0012, AQo:0.0040, K4s:0.0001, K6s:0.1406, K7s:0.0035, K8s:0.0010, K9s:0.0020, KTs:0.0418, KJs:0.0064, KQs:0.0021, KK:0.0979, AKo:0.0007, A2s:0.0100, A3s:0.0032, A4s:0.0333, A5s:0.0107, A6s:0.0165, A7s:0.0332, A8s:0.0020, A9s:0.0178, ATs:0.0107, AJs:0.0131, AQs:0.1209, AKs:0.2015, AA:0.9854"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|BTN:4BET@15",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, KJo:0.0001, QQ:0.0009, KQo:0.0007, AQo:0.0001, K4s:0.0002, K9s:0.0001, KJs:0.0002, KK:0.0006, AKo:0.0007, A3s:0.0001, A4s:0.0001, A7s:0.0010, A9s:0.0001, AJs:0.0001, AKs:0.0012"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "KK:0.0006, AA:0.0064"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|BTN:4BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 88:0.0017, A8o:0.0001, 99:0.0005, TT:0.0052, ATo:0.0010, JTs:0.0004, JJ:0.0131, KJo:0.0004, AJo:0.0033, QTs:0.0007, QJs:0.0011, QQ:0.0114, KQo:0.0087, AQo:0.0049, K5s:0.0001, K6s:0.0022, K7s:0.0005, K8s:0.0004, K9s:0.0026, KTs:0.0025, KJs:0.0360, KQs:0.0089, KK:0.5527, AKo:0.0091, A2s:0.0083, A3s:0.0009, A4s:0.0033, A5s:0.0066, A6s:0.0019, A7s:0.0017, A8s:0.0007, A9s:0.0045, ATs:0.0146, AJs:0.0094, AQs:0.0015, AKs:0.3521, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8.5|BTN:4BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0055, KK:0.0012, AKo:0.0005, AKs:0.0012, AA:0.0064"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.7082, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0188, 66:0.0018, 77:0.0125, 88:0.1225, 99:0.3159, TT:0.9859, JJ, QQ, KK, AKo:0.8195, AQs:0.3832, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "BB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0042, JJ:0.9218, QQ, KK, AKo:0.4944, AKs:0.6036, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1897, QQ:0.8979, KK, AKo:0.4670, AKs:0.7112, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32|BB:CALL@13.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0001, QQ:0.2254, KK, AJs:0.0001, AKs:0.0009, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32|SB:CALL@27.82",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.32|BTN:CALL@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0002, QQ:0.0001, KQs:0.0001, ATs:0.0001, AQs:0.0002, AKs:0.0002, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0380, 66:0.0046, 76s:0.0009, 77:0.0001, 88:0.0013, 99:0.0823, TT:0.2701, JJ:0.0866, AJo:0.2690, KQo:0.0263, AQo:0.0025, KJs:0.0278, KQs:0.3106, AKo:0.0343, A5s:0.0069, ATs:0.2220, AJs:0.9985, AQs:0.0532, AKs:0.1066, AA:0.3081"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "K8o:0.1598, A8o:0.2278, 99:0.0008, TT:0.6521, JJ:0.8801, KJo:0.1595, Q8s:0.0001, QQ:0.9889, KQo:0.9712, AQo:0.9972, K8s:0.2575, KJs:0.0585, KQs:0.5097, KK:0.9859, AKo:0.8883, A8s:0.7837, ATs:0.4665, AJs:0.0002, AQs:0.9451, AKs:0.8156, AA:0.6919"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "TT:0.0004, QQ:0.0011, KQo:0.0008, AQo:0.0003, KQs:0.0001, KK:0.0141, AKo:0.0089, A3s:0.0006, A4s:0.0001, A5s:0.0095, A7s:0.0003, ATs:0.0002, AQs:0.0002, AKs:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0004, JJ:0.0332, QQ:0.0100, KQo:0.0015, KTs:0.0002, KJs:0.0625, KQs:0.1796, AKo:0.0685, A3s:0.0010, A4s:0.0017, A5s:0.0059, A6s:0.0019, A9s:0.0001, ATs:0.0523, AJs:0.0013, AQs:0.0015, AKs:0.0774"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0449, 65s:0.0271, 66:0.0546, 76s:0.0463, 77:0.0154, 88:0.1067, 99:0.3562, TT:0.3108, JJ:0.1847, AJo:0.8847, QTs:0.2305, KQo:0.2388, AQo:0.0007, KTs:0.0409, KJs:0.1219, KQs:0.0008, A4s:0.0095, A5s:0.0056, A6s:0.0012, A7s:0.0142, A9s:0.1462, ATs:0.3186, AJs:0.9981, AQs:0.2420, AKs:0.0023, AA:0.5912"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "Q8o:0.0065, A8o:0.0911, 99:0.0960, TT:0.6798, JJ:0.2899, QJo:0.0119, KJo:0.5990, AJo:0.1153, Q8s:0.0041, Q9s:0.0001, QTs:0.0001, QJs:0.0089, QQ:0.7095, KQo:0.6516, AQo:0.9962, K8s:0.0014, KTs:0.1896, KJs:0.3824, KQs:0.0193, KK:0.9231, AKo:0.3035, A3s:0.0312, A4s:0.1543, A5s:0.4716, A6s:0.0015, A7s:0.0046, A8s:0.3509, A9s:0.0012, ATs:0.3766, AJs:0.0012, AQs:0.7414, AKs:0.3000, AA:0.4088"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "TT:0.0087, JJ:0.0154, QQ:0.0004, KQo:0.0101, AQo:0.0031, KTs:0.0152, KJs:0.0391, KQs:0.0005, KK:0.0769, AKo:0.0250, A2s:0.0002, A3s:0.0602, A4s:0.0612, A5s:0.0521, A6s:0.0078, A7s:0.0122, A8s:0.0117, A9s:0.0002, ATs:0.0007, AQs:0.0158, AKs:0.0182"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0016, TT:0.0007, JJ:0.5100, QJs:0.0001, QQ:0.2900, KQo:0.0995, KTs:0.0283, KJs:0.4525, KQs:0.9794, AKo:0.6714, A3s:0.0718, A4s:0.6303, A5s:0.4472, A6s:0.0016, A7s:0.0075, A8s:0.4640, ATs:0.3041, AJs:0.0006, AQs:0.0008, AKs:0.6795"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0011, 65s:0.0794, 66:0.0215, 76s:0.2348, 77:0.0014, 87s:0.0028, 88:0.2544, 99:0.2216, TT:0.3102, JTs:0.0010, JJ:0.0067, AJo:0.8164, QTs:0.0477, QJs:0.0675, KQo:0.2248, AQo:0.0007, KTs:0.0086, KJs:0.0775, KQs:0.0134, A3s:0.0002, A4s:0.0001, A5s:0.0373, A7s:0.0001, A9s:0.0043, ATs:0.5544, AJs:0.7372, AQs:0.1233, AKs:0.0086, AA:0.5689"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "88:0.0010, Q8o:0.0134, K8o:0.0001, A8o:0.1526, 99:0.7580, TT:0.5737, ATo:0.0001, JJ:0.1703, QJo:0.5303, KJo:0.4444, AJo:0.1836, Q5s:0.0008, Q6s:0.0001, Q7s:0.0003, Q8s:0.1293, QJs:0.1572, QQ:0.9539, KQo:0.5289, AQo:0.9981, K4s:0.0004, K7s:0.0001, K8s:0.0033, K9s:0.0006, KTs:0.3120, KJs:0.0983, KQs:0.1327, KK:0.9906, AKo:0.1707, A3s:0.0001, A4s:0.0125, A5s:0.1189, A7s:0.0028, A8s:0.2087, A9s:0.0064, ATs:0.1232, AJs:0.2625, AQs:0.5394, AKs:0.4088, AA:0.4311"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "TT:0.0123, JJ:0.0023, QJs:0.0001, QQ:0.0346, KQo:0.0048, AQo:0.0010, KTs:0.0124, KJs:0.0132, KK:0.0094, A2s:0.0030, A3s:0.0139, A4s:0.0671, A5s:0.0140, A6s:0.0055, A7s:0.0011, AQs:0.0006, AKs:0.0187"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0005, TT:0.1038, JJ:0.8206, QJs:0.0091, QQ:0.0115, KQo:0.2414, AQo:0.0002, K5s:0.0001, KTs:0.1925, KJs:0.7710, KQs:0.8539, AKo:0.8293, A2s:0.0828, A3s:0.0967, A4s:0.5392, A5s:0.6718, A6s:0.0009, A7s:0.0333, A8s:0.0907, A9s:0.0006, ATs:0.3224, AJs:0.0002, AQs:0.3367, AKs:0.5638"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0008, 43s:0.0052, A4o:0.0007, 52s:0.0005, 53s:0.0017, 54s:0.2019, A5o:0.0103, 64s:0.0009, 65s:0.6564, 66:0.0001, 75s:0.0023, 76s:0.2119, 77:0.0030, 86s:0.4087, A8o:0.0001, 97s:0.0063, 98s:0.0106, A9o:0.1840, T8s:0.4009, T9s:0.1894, JTo:0.0001, QTo:0.0301, KTo:0.0001, ATo:0.0240, J7s:0.0001, J8s:0.0006, J9s:0.0339, JTs:0.0002, QJo:0.0276, KJo:0.1895, Q2s:0.1120, Q3s:0.0001, Q4s:0.0307, Q5s:0.0100, Q6s:0.0043, Q7s:0.0237, Q8s:0.0002, Q9s:0.0006, KQo:0.0712, K2s:0.0173, K3s:0.0048, K5s:0.0006, K8s:0.0001, A6s:0.0010, A7s:0.0009, A9s:0.4130, ATs:0.0469, AA:0.1675"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0305, 33:0.0023, 44:0.2324, A4o:0.3925, 54s:0.6557, 55:0.2604, A5o:0.9007, 65s:0.3225, 66:0.5613, 75s:0.0003, 76s:0.4466, 77:0.6844, 85s:0.0002, 86s:0.1798, 87s:0.3739, A8o:0.0028, 97s:0.0040, 98s:0.6787, 99:0.1221, A9o:0.0007, T8s:0.4103, T9s:0.5163, TT:0.9945, QTo:0.0055, KTo:0.5770, ATo:0.7376, J8s:0.0023, J9s:0.1374, JTs:0.0452, JJ:0.8639, QJo:0.0021, KJo:0.0003, AJo:0.0091, Q2s:0.0009, Q3s:0.0021, Q4s:0.0313, Q5s:0.3389, Q6s:0.4706, Q7s:0.0036, Q8s:0.2780, Q9s:0.0276, QTs:0.0022, QJs:0.0002, QQ:0.1753, K2s:0.5389, K3s:0.8754, K4s:0.7835, K5s:0.1187, K6s:0.0463, K7s:0.4586, K8s:0.0419, K9s:0.2030, KTs:0.0009, KK:0.9987, AKo:0.3214, A2s:0.0348, A3s:0.3204, A4s:0.3135, A5s:0.0290, A6s:0.2629, A7s:0.2026, A8s:0.0155, A9s:0.0296, ATs:0.3116, AJs:0.0037, AKs:0.9290, AA:0.8325"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0010, 33:0.1209, 44:0.6159, A4o:0.0016, 54s:0.1395, 55:0.6663, A5o:0.0028, 65s:0.0207, 66:0.3666, 76s:0.0372, 77:0.1625, 86s:0.0272, 87s:0.6202, 88:0.9227, A8o:0.0004, 97s:0.0006, 98s:0.2579, 99:0.7510, A9o:0.0013, T8s:0.1747, T9s:0.2726, TT:0.0015, QTo:0.0002, KTo:0.1372, ATo:0.2077, J7s:0.0001, J8s:0.0967, J9s:0.7616, JTs:0.8699, JJ:0.0655, QJo:0.7530, KJo:0.5929, AJo:0.9044, Q3s:0.0001, Q4s:0.0183, Q5s:0.2763, Q6s:0.1793, Q7s:0.0090, Q8s:0.6253, Q9s:0.3832, QTs:0.7147, QJs:0.9025, QQ:0.5876, KQo:0.1628, AQo:0.6367, K2s:0.3551, K3s:0.0692, K4s:0.1934, K5s:0.8455, K6s:0.8239, K7s:0.4666, K8s:0.9536, K9s:0.5610, KTs:0.6711, KJs:0.2836, KQs:0.0705, KK:0.0012, AKo:0.6696, A2s:0.8455, A3s:0.5750, A4s:0.4822, A5s:0.9184, A6s:0.6904, A7s:0.6461, A8s:0.5571, A9s:0.3064, ATs:0.4312, AJs:0.5404, AQs:0.3704, AKs:0.0706"
      },
      {
        "action": "3bet 14.93bb",
        "min": 0.0001,
        "range": "22:0.9678, 33:0.8767, 44:0.1518, A4o:0.0056, 55:0.0733, A5o:0.0035, 65s:0.0002, 66:0.0719, 76s:0.0001, 77:0.1500, 86s:0.0002, 87s:0.0056, 88:0.0773, A8o:0.0023, 97s:0.0003, 98s:0.0528, 99:0.1269, A9o:0.0036, T8s:0.0119, T9s:0.0216, TT:0.0039, QTo:0.0031, KTo:0.2353, ATo:0.0307, J8s:0.0015, J9s:0.0374, JTs:0.0847, JJ:0.0706, QJo:0.1357, KJo:0.2171, AJo:0.0865, Q2s:0.0003, Q3s:0.0003, Q4s:0.0306, Q5s:0.0169, Q6s:0.0099, Q7s:0.0037, Q8s:0.0965, Q9s:0.5886, QTs:0.2832, QJs:0.0972, QQ:0.2371, KQo:0.7660, AQo:0.3633, K2s:0.0876, K3s:0.0443, K4s:0.0231, K5s:0.0338, K6s:0.1298, K7s:0.0747, K8s:0.0045, K9s:0.2360, KTs:0.3280, KJs:0.7164, KQs:0.9295, KK:0.0001, AKo:0.0090, A2s:0.1197, A3s:0.1046, A4s:0.2042, A5s:0.0526, A6s:0.0456, A7s:0.1504, A8s:0.4273, A9s:0.2509, ATs:0.2102, AJs:0.4560, AQs:0.6296, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "3bet 11.36bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4631, 32s:0.0002, 33:0.8457, 42s:0.0039, 43s, 44:0.2662, A4o:0.0063, 52s:0.1154, 53s:0.9970, 54s:0.9997, 55:0.9638, 65o:0.0070, A5o:0.7054, 63s:0.9176, 64s:0.9991, 65s, 66:0.6636, 74s:0.0035, 75s:0.9997, 76s, 77:0.3462, 85s:0.9896, 86s:0.9992, 87s, A8o:0.0288, 95s:0.0001, 96s:0.7743, 97s:0.9985, 98s:0.9998, A9o:0.9998, T6s:0.0007, T7s:0.9954, T8s, T9s, QTo:0.8454, KTo:0.0042, ATo:0.9958, J5s:0.0002, J7s:0.0027, J8s:0.6815, J9s:0.9962, JTs:0.9344, QJo:0.2363, KJo:0.9998, Q2s:0.5635, Q3s:0.5630, Q4s:0.9536, Q5s:0.9982, Q6s:0.9901, Q7s:0.7805, Q8s:0.8476, Q9s:0.3712, QTs:0.0121, QJs:0.0021, KQo, K2s:0.8879, K3s:0.8613, K4s:0.9093, K5s:0.3410, K6s:0.9996, K7s:0.9912, K8s:0.3421, KTs:0.0015, KJs:0.0827, KQs:0.9116, A2s:0.0406, A3s:0.0001, A4s:0.0040, A5s:0.0010, A6s:0.0149, A7s:0.1732, A8s:0.0242, A9s:0.9971, ATs:0.7718, AA"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0014, A4o:0.0331, A5o:0.0491, J7o:0.0004, A7o:0.0392, 82s:0.0003, 84s:0.0002, 85s:0.0013, J8o:0.0385, Q8o:0.0032, A8o:0.8202, 97s:0.0001, ATo:0.0033, J2s:0.0001, J3s:0.0001, J6s:0.0009, J7s:0.0073, J8s:0.0529, JJ:0.0001, QJo:0.1798, AJo:0.0045, Q3s:0.0028, Q4s:0.0006, QQ:0.0046, AQo:0.0006, KK:0.9987, AKo:0.9943, A5s:0.0003, A6s:0.0001, A7s:0.0352, A8s:0.4273, A9s:0.0029, ATs:0.2248, AJs:0.2709, AQs:0.2863, AKs:0.9974"
      },
      {
        "action": "3bet 11.36bb",
        "min": 0.0001,
        "range": "22:0.5369, 33:0.1543, A3o:0.0001, 44:0.7338, 55:0.0362, A5o:0.0105, 66:0.3364, 77:0.6537, 88, A8o:0.0003, 99, TT, QTo:0.0003, KTo:0.0033, ATo:0.0008, J8s:0.0005, J9s:0.0003, JTs:0.0655, JJ, KJo:0.0002, AJo:0.9955, Q2s:0.0001, Q4s:0.0003, Q6s:0.0004, Q8s:0.1522, Q9s:0.6288, QTs:0.9879, QJs:0.9979, QQ:0.9954, AQo:0.9994, K3s:0.0283, K4s:0.0850, K5s:0.6574, K6s:0.0001, K7s:0.0088, K8s:0.6576, K9s, KTs:0.9985, KJs:0.9173, KQs:0.0884, KK:0.0013, AKo:0.0057, A2s:0.9594, A3s:0.9998, A4s:0.9960, A5s:0.9987, A6s:0.9849, A7s:0.7916, A8s:0.5485, ATs:0.0034, AJs:0.7291, AQs:0.7137, AKs:0.0026"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BB:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0302, KTo:0.0055, ATo:0.0441, QJo:0.0117, KJo:0.0143, AJo:0.0647, QTs:0.0001, KQo:0.0025, K9s:0.0016, A3s:0.0015, A4s:0.0021, A6s:0.0344, A7s:0.0003, A8s:0.0325, ATs:0.0016, AJs:0.0132, AA:0.2144"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0345, 88:0.8191, 99:0.0080, TT:0.2365, KTo:0.0430, ATo:0.2500, JJ, KJo:0.0175, AJo:0.4101, QQ, KQo:0.1992, K9s:0.0140, KK, AKo:0.0307, A2s:0.0012, A3s:0.2496, A4s:0.0569, A6s:0.1404, A7s:0.5392, A8s:0.0003, ATs:0.0609, AJs:0.9382, AQs:0.9971, AKs, AA:0.7856"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BB:3BET@5|LJ:4BET@11.36",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A8o:0.0011, ATo:0.0033, JJ:0.0001, AJo:0.0045, QQ:0.0046, AQo:0.0006, KK:0.9987, AKo:0.9943, A5s:0.0003, A6s:0.0001, A7s:0.0352, A8s:0.4273, A9s:0.0029, ATs:0.2248, AJs:0.2709, AQs:0.2863, AKs:0.9974"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BB:3BET@11.36",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0345, 88:0.8493, 99:0.0080, TT:0.2365, ATo:0.3109, JJ, AJo:0.5441, QQ, KK, AKo:0.0307, A8s:0.0003, ATs:0.0625, AJs:0.9514, AQs:0.9971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9862, 32s:0.0002, 33:0.9955, 42s:0.0003, 43s:0.0007, 44:0.9433, 52s:0.0007, 53s:0.5466, 54s:0.5178, 55:0.9883, 62s:0.0210, 64s:0.1644, 65s:0.1237, 66:0.9347, 74s:0.0290, 75s:0.0345, 76s:0.9381, 77:0.9781, 83s:0.0110, 86s:0.1059, 87s:0.0463, 88:0.9923, 96s:0.4820, 97s:0.6256, 98s:0.6831, 99:0.5921, T3s:0.0008, T8s:0.8979, T9s:0.1642, TT:0.0520, ATo:0.5252, J2s:0.0054, J3s:0.0001, J4s:0.0001, J6s:0.0017, J7s:0.0001, J8s:0.0235, J9s:0.0020, JTs:0.1315, JJ:0.0008, KJo:0.0539, AJo:0.0092, Q3s:0.0094, Q4s:0.2761, Q5s:0.0640, Q6s:0.7311, Q7s:0.0539, Q9s:0.0466, QTs:0.9663, QJs:0.1376, QQ:0.0002, KQo:0.8644, K2s:0.0769, K3s:0.0011, K4s:0.0120, K5s:0.5399, K7s:0.0359, K8s:0.0383, K9s:0.2242, KTs:0.2668, KJs:0.2891, KQs:0.9454, A2s:0.0001, A3s:0.2988, A4s:0.0035, A5s:0.0321, A6s:0.6083, A7s:0.0261, A8s:0.0003, A9s:0.6337, ATs:0.0944, AJs:0.0713, AQs:0.0002, AKs:0.0003"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "32s:0.0038, A5o:0.0095, 64s:0.0001, 66:0.0078, Q6o:0.0012, 77:0.0025, A7o:0.0001, 99:0.0034, A9o:0.0179, T3s:0.0003, TT:0.0108, ATo:0.0168, J3s:0.0006, J7s:0.0017, J8s:0.0036, J9s:0.0001, JJ:0.0096, AJo:0.0040, Q4s:0.0031, Q5s:0.0001, Q6s:0.0039, Q7s:0.0019, QTs:0.0026, QJs:0.0003, QQ:0.0250, AQo:0.0039, K3s:0.0001, K8s:0.0003, KJs:0.0046, KQs:0.0023, KK:0.0201, AKo:0.0017, A5s:0.0023, A6s:0.0005, A7s:0.0005, A9s:0.0015, ATs:0.0205, AJs:0.0095, AQs:0.0215, AKs:0.0079, AA:0.0883"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0097, 32s:0.0051, 33:0.0013, A3o:0.1352, 44:0.0542, A4o:0.0452, 53s:0.0035, A5o:0.1924, 62s:0.0004, 64s:0.0002, 66:0.0092, A6o:0.0001, 76s:0.0004, 77:0.0183, 87s:0.0067, 88:0.0071, A8o:0.0163, 98s:0.0001, 99:0.4021, Q9o:0.0001, A9o:0.0254, T7s:0.0012, T9s:0.0032, TT:0.9293, ATo:0.4566, J3s:0.0003, J7s:0.0004, J8s:0.0243, J9s:0.0224, JJ:0.9897, KJo:0.0081, AJo:0.9868, Q4s:0.0029, Q5s:0.1833, Q6s:0.0001, Q7s:0.0001, Q8s:0.3993, Q9s:0.7572, QTs:0.0005, QJs:0.8037, QQ:0.9748, KQo:0.0326, AQo:0.9960, K2s:0.0038, K3s:0.2430, K4s:0.0013, K6s:0.0001, K7s:0.0001, K8s:0.3158, K9s:0.0085, KTs:0.1159, KJs:0.4103, KQs:0.0521, KK:0.9798, AKo:0.9983, A2s:0.9991, A3s:0.5626, A4s:0.9760, A5s:0.8804, A6s:0.3512, A7s:0.6484, A8s:0.9322, A9s:0.3035, ATs:0.8828, AJs:0.9185, AQs:0.9781, AKs:0.9917, AA:0.9117"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0001, 88:0.0356, A8o:0.0002, 99:0.0030, A9o:0.0001, TT:0.0114, ATo:0.0222, JJ:0.2179, AJo:0.0285, QQ:0.0031, KK:0.0160, A2s:0.0001, A3s:0.0024, A4s:0.0003, A6s:0.0102, A7s:0.0005, A8s:0.0336, ATs:0.0010, AJs:0.0122, AQs:0.0008, AKs:0.0123"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0004, 77:0.0147, 88:0.0946, A8o:0.0001, 99:0.0021, A9o:0.0006, TT:0.1961, ATo:0.0136, JJ:0.5594, QJo:0.0003, KJo:0.0006, AJo:0.2413, QQ:0.9969, KQo:0.0016, K9s:0.0074, KK:0.9840, AKo:0.0307, A2s:0.0015, A3s:0.5069, A4s:0.0264, A6s:0.0131, A7s:0.1279, A8s:0.1071, ATs:0.0031, AJs:0.8976, AQs:0.9904, AKs:0.9875, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@5",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0002, A4o:0.0003, 53s:0.0004, 54s:0.1166, 65s:0.2918, 75s:0.0005, 76s:0.0049, 86s:0.0118, 98s:0.0002, A9o:0.0003, T8s:0.1578, T9s:0.0334, ATo:0.0078, J9s:0.0331, QJo:0.0033, KJo:0.0644, Q2s:0.0071, Q4s:0.0040, Q5s:0.0017, Q6s:0.0024, Q7s:0.0045, Q8s:0.0001, KQo:0.0382, K2s:0.0037, K3s:0.0021, K5s:0.0001, A6s:0.0003, A7s:0.0007, A9s:0.0007, ATs:0.0029, AA:0.0510"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0002, 53s:0.0001, 54s:0.0025, A5o:0.0003, 65s:0.2120, 77:0.0003, 86s:0.0031, A9o:0.0056, T8s:0.0398, T9s:0.0092, ATo:0.0070, KJo:0.0034, Q4s:0.0051, Q5s:0.0001, Q6s:0.0001, Q7s:0.0001, KQo:0.0052, K2s:0.0037, A9s:0.0079, ATs:0.0201, AA:0.0673"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0001, 53s:0.0001, 54s:0.0111, 65s:0.0603, 76s:0.0001, 77:0.0025, 86s:0.0017, A9o:0.0011, T8s:0.0492, T9s:0.0565, ATo:0.0034, QJo:0.0001, KJo:0.0058, Q4s:0.0004, Q7s:0.0001, KQo:0.0026, K2s:0.0011, A6s:0.0001, A9s:0.2438, ATs:0.0206, AA:0.0492"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0004, 77:0.0224, 88:0.8051, 99:0.0077, TT:0.2365, JJ, AJo:0.4716, QQ, KK, AKo:0.0307, ATs:0.0013, AJs:0.9494, AQs:0.9969, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0008, 66:0.0001, 77:0.0030, 86s:0.0001, ATo:0.0040, A9s:0.0258, ATs:0.0458, AA:0.1675"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0015, TT:0.0017, JJ:0.0251, QQ:0.0020, KK:0.0001, AKo:0.0183, AJs:0.0004, AQs:0.0111, AKs:0.0027, AA:0.0423"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.1046, 88:0.0676, 99:0.5973, TT:0.9981, JJ:0.9748, QQ:0.9980, KJs:0.0262, KQs:0.3116, KK, AKo:0.9792, ATs:0.0810, AJs:0.0284, AQs:0.9161, AKs:0.9973, AA:0.9577"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0272, 88:0.8487, 99:0.0077, ATo:0.5110, JJ:0.0007, AJo:0.1744, AKo:0.0061, A8s:0.0002, ATs:0.0540, AJs:0.1635, AQs:0.9145"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0006, 99:0.0003, TT:0.2365, ATo:0.1276, JJ:0.9993, AJo:0.3697, QQ, KK, AKo:0.0246, ATs:0.0085, AJs:0.7879, AQs:0.0826, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|LJ:4BET@11.36",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0305, 33:0.0023, 44:0.2324, A4o:0.3925, 54s:0.6557, 55:0.2604, A5o:0.9007, 65s:0.3225, 66:0.5613, 75s:0.0003, 76s:0.4466, 77:0.6844, 85s:0.0002, 86s:0.1798, 87s:0.3739, A8o:0.0028, 97s:0.0040, 98s:0.6787, 99:0.1221, A9o:0.0007, T8s:0.4103, T9s:0.5163, TT:0.9945, QTo:0.0055, KTo:0.5770, ATo:0.7376, J8s:0.0023, J9s:0.1374, JTs:0.0452, JJ:0.8639, QJo:0.0018, KJo:0.0003, AJo:0.0091, Q2s:0.0009, Q3s:0.0021, Q4s:0.0313, Q5s:0.3389, Q6s:0.4706, Q7s:0.0036, Q8s:0.2780, Q9s:0.0276, QTs:0.0022, QJs:0.0002, QQ:0.1753, K2s:0.5389, K3s:0.8754, K4s:0.7835, K5s:0.1187, K6s:0.0463, K7s:0.4586, K8s:0.0419, K9s:0.2030, KTs:0.0009, KK:0.9987, AKo:0.3214, A2s:0.0348, A3s:0.3204, A4s:0.3135, A5s:0.0290, A6s:0.2629, A7s:0.2026, A8s:0.0155, A9s:0.0296, ATs:0.3116, AJs:0.0037, AKs:0.9290, AA:0.8325"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0001, JJ:0.1136, AJo:0.0001, KK:0.0001, A3s:0.0001, A6s:0.0001, A7s:0.0005, A8s:0.0001, ATs:0.0001, AJs:0.0012, AQs:0.0143, AKs:0.0003, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0003, A9o:0.0001, ATo:0.0001, JJ:0.0293, KJo:0.0002, AJo:0.0001, QQ:0.8563, KQo:0.0002, KK, AKo:0.0002, A4s:0.0001, A6s:0.0001, A7s:0.0009, A8s:0.0003, ATs:0.0001, AJs:0.0012, AQs:0.0015, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@11",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0056, 33:0.0003, 44:0.0619, A4o:0.0220, 54s:0.0233, 55:0.1482, A5o:0.0213, 65s:0.0010, 66:0.2391, 76s:0.0977, 77:0.1859, 86s:0.1093, 87s:0.2148, 97s:0.0022, 98s:0.3646, 99:0.0390, T8s:0.2536, T9s:0.0845, TT:0.1657, QTo:0.0013, KTo:0.0360, ATo:0.5668, J8s:0.0006, J9s:0.0737, JTs:0.0246, JJ:0.3416, QJo:0.0006, AJo:0.0021, Q2s:0.0001, Q3s:0.0001, Q5s:0.0439, Q6s:0.2163, Q7s:0.0008, Q8s:0.2103, QTs:0.0013, QJs:0.0002, QQ:0.0008, K2s:0.0375, K3s:0.1433, K4s:0.0223, K5s:0.0015, K6s:0.0055, K7s:0.0403, K8s:0.0011, K9s:0.0141, KTs:0.0003, KK:0.1572, AKo:0.0600, A2s:0.0177, A3s:0.0927, A4s:0.2105, A5s:0.0142, A6s:0.0270, A7s:0.0575, A8s:0.0064, A9s:0.0055, ATs:0.1220, AJs:0.0004, AKs:0.0004, AA:0.0005"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "22:0.0045, 33:0.0008, 44:0.1145, A4o:0.0021, 54s:0.0056, 55:0.0796, A5o:0.0563, 65s:0.0016, 66:0.2801, 76s:0.0111, 77:0.2410, 86s:0.0265, 87s:0.0308, A8o:0.0001, 98s:0.0231, 99:0.0822, T8s:0.0095, T9s:0.0015, TT:0.8272, QTo:0.0007, KTo:0.0709, ATo:0.0409, J8s:0.0004, J9s:0.0107, JTs:0.0097, JJ:0.5223, AJo:0.0024, Q4s:0.0075, Q5s:0.0033, Q6s:0.1496, Q7s:0.0019, Q8s:0.0302, Q9s:0.0020, QTs:0.0007, QQ:0.1745, K2s:0.1520, K3s:0.0944, K4s:0.0013, K5s:0.0010, K6s:0.0001, K7s:0.0655, K8s:0.0049, K9s:0.0032, KTs:0.0001, KK:0.8415, AKo:0.2614, A2s:0.0042, A3s:0.0863, A4s:0.0858, A5s:0.0100, A6s:0.0333, A7s:0.0599, A8s:0.0075, A9s:0.0037, ATs:0.1861, AJs:0.0007, AKs:0.9286, AA:0.8320"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ, KK, AKs:0.6814, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0287, 33:0.0022, 44:0.2324, A4o:0.0008, 54s:0.1191, 55:0.2604, A5o:0.0014, 65s:0.0806, 66:0.5613, 76s:0.1470, 77:0.6843, 87s:0.0543, 98s:0.0005, 99:0.1221, T8s:0.0057, T9s:0.0023, TT:0.9945, KTo:0.0001, ATo:0.0018, JTs:0.0395, JJ:0.8639, QJo:0.0002, AJo:0.0023, Q4s:0.0004, Q5s:0.0075, Q6s:0.0655, Q7s:0.0001, Q8s:0.0157, Q9s:0.0059, QTs:0.0022, QJs:0.0002, QQ:0.1753, K2s:0.0002, K3s:0.0011, K4s:0.0353, K5s:0.0003, K6s:0.0071, K7s:0.0097, K8s:0.0002, K9s:0.0051, KTs:0.0004, KK:0.9987, AKo:0.3214, A2s:0.0317, A3s:0.2023, A4s:0.3095, A5s:0.0285, A6s:0.1851, A7s:0.1219, A8s:0.0148, A9s:0.0220, ATs:0.3078, AJs:0.0037, AKs:0.9290, AA:0.8325"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@9",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.8715, JJ, QQ, KK, AKo:0.0027, AQs:0.0013, AKs:0.7483, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@9",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "66:0.0005, 77:0.0342, 88:0.8492, 99:0.0080, TT:0.2365, ATo:0.5084, JJ:0.9998, AJo:0.5440, QQ:0.9893, AKo:0.0307, A8s:0.0105, ATs:0.0625, AJs:0.9512, AQs:0.9969, AKs:0.9961"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, ATo:0.0001, JJ:0.0002, AJo:0.0001, QQ:0.0107, KK, AJs:0.0002, AQs:0.0002, AKs:0.0038, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@9|LJ:4BET@11.36",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0010, 33:0.1209, 44:0.6159, A4o:0.0016, 54s:0.1395, 55:0.6663, A5o:0.0028, 65s:0.0207, 66:0.3666, 76s:0.0372, 77:0.1625, 86s:0.0272, 87s:0.6202, 88:0.9227, A8o:0.0004, 97s:0.0006, 98s:0.2579, 99:0.7510, A9o:0.0013, T8s:0.1747, T9s:0.2726, TT:0.0015, QTo:0.0002, KTo:0.1372, ATo:0.2077, J7s:0.0001, J8s:0.0967, J9s:0.7616, JTs:0.8699, JJ:0.0655, QJo:0.7530, KJo:0.5929, AJo:0.9044, Q3s:0.0001, Q4s:0.0183, Q5s:0.2763, Q6s:0.1793, Q7s:0.0090, Q8s:0.6253, Q9s:0.3832, QTs:0.7147, QJs:0.9025, QQ:0.5876, KQo:0.1628, AQo:0.6367, K2s:0.3551, K3s:0.0692, K4s:0.1934, K5s:0.8455, K6s:0.8239, K7s:0.4666, K8s:0.9536, K9s:0.5610, KTs:0.6711, KJs:0.2836, KQs:0.0705, KK:0.0012, AKo:0.6696, A2s:0.8455, A3s:0.5750, A4s:0.4822, A5s:0.9184, A6s:0.6904, A7s:0.6461, A8s:0.5571, A9s:0.3064, ATs:0.4312, AJs:0.5404, AQs:0.3704, AKs:0.0706"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.5503, KK, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@9|BB:4BET@14.93",
    "heroPos": "SB",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0010, 33:0.1209, 44:0.6159, A4o:0.0016, 54s:0.1395, 55:0.6661, A5o:0.0028, 65s:0.0207, 66:0.3666, 76s:0.0372, 77:0.1625, 86s:0.0272, 87s:0.6202, 88:0.9227, A8o:0.0004, 97s:0.0006, 98s:0.2579, 99:0.7510, A9o:0.0013, T8s:0.1747, T9s:0.2725, TT:0.0015, QTo:0.0002, KTo:0.1372, ATo:0.2077, J7s:0.0001, J8s:0.0967, J9s:0.7616, JTs:0.8699, JJ:0.0655, QJo:0.7530, KJo:0.5929, AJo:0.9044, Q3s:0.0001, Q4s:0.0183, Q5s:0.2763, Q6s:0.1792, Q7s:0.0090, Q8s:0.6250, Q9s:0.3822, QTs:0.7147, QJs:0.9025, QQ:0.5876, KQo:0.1628, AQo:0.6367, K2s:0.3551, K3s:0.0692, K4s:0.1934, K5s:0.8455, K6s:0.8239, K7s:0.4666, K8s:0.9536, K9s:0.5610, KTs:0.6711, KJs:0.2836, KQs:0.0705, KK:0.0012, AKo:0.6696, A2s:0.8455, A3s:0.5750, A4s:0.4822, A5s:0.9184, A6s:0.6903, A7s:0.6461, A8s:0.5571, A9s:0.3064, ATs:0.4312, AJs:0.5404, AQs:0.3704, AKs:0.0706"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@14.93",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0022, TT:0.9793, JJ, QQ, KK, AKo:0.0002, AQs:0.0011, AKs:0.5610, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0345, 88:0.8493, 99:0.0080, TT:0.2365, ATo:0.4801, JJ, AJo:0.5441, QQ, KQo:0.0210, KK, AKo:0.0307, ATs:0.0625, AJs:0.9514, AQs:0.9971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@14.93|BB:CALL@13.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
    "presetId": "LJ:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0057, 52o:0.0002, Q2o:0.0013, A2o:0.4335, 32s:0.0038, 33:0.2095, A3o:0.1213, 42s:0.0069, 43s:0.0010, 44:0.6068, K4o:0.0001, A4o:0.2819, 53s:0.0109, 54s:0.0278, 55:0.0064, A5o:0.3399, 62s:0.0298, 65s:0.1075, 66:0.0198, T6o:0.0001, K6o:0.0002, A6o:0.0082, 75s:0.0750, 76s:0.2643, 77:0.0002, A7o:0.0123, 85s:0.0641, 86s:0.0198, 87s:0.2329, 88:0.0698, T8o:0.0001, A8o:0.1155, 92s:0.0001, 96s:0.0002, 98s:0.4897, 99:0.1207, A9o:0.0036, T3s:0.0001, T4s:0.0007, T5s:0.0001, T7s:0.0230, T8s:0.0763, T9s:0.8442, TT:0.5289, QTo:0.0058, KTo:0.4037, ATo:0.6181, J8s:0.0002, JTs:0.0908, JJ:0.8935, AJo:0.4174, Q2s:0.0032, Q3s:0.0707, Q5s:0.0009, Q6s:0.0012, Q7s:0.0188, Q8s:0.2440, Q9s:0.2050, QTs:0.8075, QJs:0.0161, QQ:0.9974, KQo:0.6185, AQo:0.4553, K2s:0.2690, K3s:0.0326, K4s:0.0493, K5s:0.0174, K6s:0.3842, K7s:0.1374, K8s:0.5625, K9s:0.0024, KTs:0.7852, KJs:0.3242, KQs:0.5913, KK:0.8564, AKo:0.7082, A2s:0.3517, A3s:0.4533, A4s:0.2168, A5s:0.7332, A6s:0.3473, A7s:0.2335, A8s:0.4575, A9s:0.3999, ATs:0.4182, AJs:0.0145, AQs:0.2335, AKs:0.6132, AA:0.9505"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0004, A2o:0.0073, 32s:0.0022, 33:0.0635, A3o:0.0620, 43s:0.0007, 44:0.0354, A4o:0.0439, 52s:0.0002, 53s:0.0073, 54s:0.0018, 55:0.0048, A5o:0.0476, 65s:0.0193, 66:0.0181, A6o:0.0001, 75s:0.0128, 76s:0.0001, A7o:0.0008, 85s:0.0001, 86s:0.0001, 87s:0.0027, 88:0.0008, A8o:0.0368, 96s:0.0002, 98s:0.0999, 99:0.2024, A9o:0.0004, T3s:0.0002, T7s:0.0041, T9s:0.0015, TT:0.4650, QTo:0.0064, ATo:0.1091, J4s:0.0011, J5s:0.0004, JTs:0.0001, JJ:0.1061, AJo:0.1057, Q3s:0.0169, Q8s:0.0022, Q9s:0.1282, QTs:0.1344, QJs:0.0053, QQ:0.0022, KQo:0.0010, AQo:0.0982, K2s:0.0481, K3s:0.0093, K4s:0.0038, K6s:0.0369, K7s:0.2168, K8s:0.0484, KTs:0.0346, KJs:0.0414, KQs:0.0326, KK:0.1433, AKo:0.1994, A2s:0.1675, A3s:0.1425, A4s:0.2869, A5s:0.0544, A6s:0.2944, A7s:0.0448, A8s:0.0696, A9s:0.2941, ATs:0.1896, AJs:0.0200, AQs:0.0581, AKs:0.3638, AA:0.0495"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.0012, 32s:0.0001, 33:0.0009, A3o:0.0001, 42s:0.0001, 43s:0.0004, 44:0.0003, K4o:0.0001, A4o:0.0006, 53s:0.0002, 54s:0.0090, 55:0.0010, A5o:0.0007, 65s:0.0406, 76s:0.0010, 77:0.0017, 82s:0.0001, 84s:0.0002, 85s:0.0001, 86s:0.0002, 88:0.6818, 93s:0.0001, 96s:0.0003, 98s:0.0333, 99:0.5940, A9o:0.0001, T2s:0.0001, T4s:0.0002, T5s:0.0003, T6s:0.0003, T7s:0.0005, T9s:0.0003, TT:0.0046, ATo:0.0004, J4s:0.0005, JTs:0.0002, JJ:0.0003, AJo:0.1845, Q2s:0.0001, Q8s:0.0001, Q9s:0.0025, QJs:0.0126, QQ:0.0004, AQo:0.4466, K2s:0.0003, K3s:0.0001, K4s:0.0135, K6s:0.0035, K7s:0.0002, K8s:0.0011, K9s:0.0004, KTs:0.0018, KJs:0.0077, KQs:0.2674, KK:0.0003, AKo:0.0920, A2s:0.4454, A3s:0.3520, A4s:0.4949, A5s:0.2033, A6s:0.2087, A7s:0.6882, A8s:0.4445, A9s:0.2525, ATs:0.3855, AJs:0.9419, AQs:0.7081, AKs:0.0230"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9765, 33:0.9922, 43s:0.0020, 44:0.9926, 53s:0.2675, 54s:0.5339, 55:0.9881, 62s:0.0008, 64s:0.2202, 65s:0.0894, 66:0.9956, 75s:0.0210, 76s:0.0128, 77:0.9875, 84s:0.0456, 85s:0.0092, 86s:0.4245, 87s:0.0169, 88:0.9991, 93s:0.0005, 97s:0.8049, 98s:0.4849, 99:0.9384, T2s:0.0056, T4s:0.0270, T6s:0.0196, T8s:0.7150, T9s:0.1437, TT:0.0938, J7s:0.0005, J9s:0.0890, JJ:0.1014, Q4s:0.0007, Q6s:0.0013, Q9s:0.0001, QTs:0.0199, QQ:0.0016, KQo:0.8130, AQo:0.6065, K3s:0.0001, K5s:0.2631, K7s:0.0001, K9s:0.0106, KTs:0.3797, KJs:0.0021, KQs:0.8999, KK:0.0017, AKo:0.0653, A3s:0.0001, A4s:0.0027, A5s:0.0001, A6s:0.1419, A7s:0.0022, A8s:0.0011, A9s:0.0034, ATs:0.0004, AJs:0.8761, AQs:0.0980, AKs:0.0070"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0028, A5o:0.0214, 63s:0.0062, 72s:0.0002, 82s:0.0001, 84s:0.0195, 85s:0.0188, 86s:0.0013, A8o:0.0084, 94s:0.0026, 95s:0.0001, 98s:0.0157, 99:0.0030, A9o:0.0005, T2s:0.0228, T3s:0.0277, T4s:0.0177, T6s:0.0932, T7s:0.0142, T8s:0.0412, T9s:0.0037, TT:0.3354, QTo:0.0347, ATo:0.0588, JJ:0.1592, AJo:0.1248, Q2s:0.0051, Q7s:0.0311, QTs:0.1897, QQ:0.1612, KQo:0.0243, AQo:0.0591, K3s:0.0187, K8s:0.0001, KTs:0.0023, KQs:0.0017, KK:0.4094, AKo:0.4802, A2s:0.0034, A3s:0.0004, A4s:0.0081, A5s:0.0115, A6s:0.1252, A7s:0.0662, A8s:0.0865, A9s:0.0878, ATs:0.0013, AJs:0.0025, AQs:0.0836, AKs:0.1695, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A6o:0.0001, 82s:0.0001, T3s:0.0001, TT:0.5582, ATo:0.2744, JTs:0.0005, JJ:0.7261, Q7s:0.0004, Q9s:0.0019, QTs:0.0008, QQ:0.8372, AQo:0.3084, K4s:0.0157, K5s:0.0020, K7s:0.0001, K9s:0.0080, KTs:0.4802, KJs:0.0304, KQs:0.0177, KK:0.5889, AKo:0.4544, A2s:0.0454, A3s:0.3233, A4s:0.7724, A5s:0.8177, A6s:0.2381, A7s:0.5115, A8s:0.2071, A9s:0.0703, ATs:0.7334, AJs:0.1186, AQs:0.8183, AKs:0.8233, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A5o:0.0001, 88:0.0036, TT:0.0001, JJ:0.0736, AJo:0.0024, QQ:0.0170, KK:0.0094, A6s:0.0027, A8s:0.0027, ATs:0.0006, AJs:0.0547, AQs:0.2766, AKs:0.0278, AA:0.1209"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0006, 66:0.0001, 77:0.0201, 88:0.3722, A8o:0.0002, 99:0.0003, TT:0.1381, JJ:0.6262, AJo:0.0027, QQ:0.9827, KK:0.9902, AKo:0.0305, A2s:0.0013, A3s:0.0289, A4s:0.0110, A6s:0.0084, A7s:0.2743, A8s:0.0931, ATs:0.0056, AJs:0.1540, AQs:0.2173, AKs:0.9719, AA:0.8791"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@5",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0002, 65s:0.0320, 66:0.0081, 76s:0.0699, 77:0.0010, 87s:0.0004, 88:0.0772, 99:0.0157, TT:0.1027, JTs:0.0002, JJ:0.0010, AJo:0.1035, QTs:0.0118, QJs:0.0313, KQo:0.0019, AQo:0.0003, KTs:0.0020, KJs:0.0012, KQs:0.0048, A5s:0.0089, A9s:0.0004, ATs:0.2371, AJs:0.2270, AQs:0.0534, AA:0.2950"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "65s:0.0040, 66:0.0013, 76s:0.0314, 77:0.0001, 88:0.0203, 99:0.0281, TT:0.0971, JTs:0.0001, JJ:0.0001, AJo:0.0056, QTs:0.0002, QJs:0.0168, AQo:0.0001, KJs:0.0061, A5s:0.0070, A9s:0.0002, ATs:0.0247, AJs:0.0110, AQs:0.0431, AKs:0.0045, AA:0.1465"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "65s:0.0034, 66:0.0007, 76s:0.0185, 77:0.0001, 88:0.0806, 99:0.0050, TT:0.0643, JTs:0.0001, JJ:0.0056, AJo:0.0041, QTs:0.0010, QJs:0.0055, KQo:0.0001, AQo:0.0001, KTs:0.0001, KJs:0.0016, KQs:0.0001, A5s:0.0011, A9s:0.0001, ATs:0.0662, AJs:0.2099, AQs:0.0182, AKs:0.0041, AA:0.1274"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0279, JJ:0.9587, QQ, KK, AKo:0.0307, A6s:0.0002, AJs:0.0001, AQs:0.3002, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0017, 77:0.0001, 88:0.1488, 99:0.0198, TT:0.3086, JJ:0.0067, AQo:0.0003, ATs:0.0001, AJs:0.0002, AQs:0.0904, AKs:0.0086, AA:0.5689"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0027, 88:0.4537, 99:0.0057, A9o:0.0001, TT:0.1469, JJ:0.7021, AJo:0.0002, QQ:0.7530, KK:0.2143, AKo:0.0245, A6s:0.0049, A7s:0.0112, ATs:0.0508, AJs:0.7953, AQs:0.7170, AKs:0.4259"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0008, 88:0.0958, 99:0.0023, TT:0.0896, JJ:0.2978, AJo:0.0001, QQ:0.2470, KK:0.7857, AKo:0.0062, A3s:0.0001, A7s:0.0001, ATs:0.0080, AJs:0.1225, AQs:0.2801, AKs:0.5739, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0006, QJs:0.0001, KQo:0.0001, KQs:0.0004, ATs:0.0061, AJs:0.0647, AQs:0.0003, AA:0.0420"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "76s:0.0003, 99:0.0002, TT:0.0097, AJo:0.0019, QJs:0.0001, KJs:0.0002, A5s:0.0002, ATs:0.0001, AJs:0.0067, AA:0.0098"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0080, 77:0.0002, 88:0.0292, 99:0.0117, TT:0.2608, JJ:0.0067, QJs:0.0269, KQo:0.0325, AQo:0.0007, KJs:0.0619, KQs:0.0105, A5s:0.0004, ATs:0.0775, AJs:0.5096, AQs:0.1226, AKs:0.0086, AA:0.5171"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0015, 88:0.1705, 99:0.0058, TT:0.0972, JJ:0.8680, AJo:0.0012, QQ:0.8883, KK:0.7833, AKo:0.0272, A6s:0.0046, ATs:0.0001, AJs:0.1428, AQs:0.3747, AKs:0.6112, AA:0.0051"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0017, 88:0.0693, 99:0.0010, TT:0.1392, JJ:0.1305, AJo:0.0001, QQ:0.1117, KK:0.2167, AKo:0.0035, A6s:0.0022, A8s:0.0001, AJs:0.0240, AQs:0.4852, AKs:0.3887, AA:0.9949"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@9",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0076, TT:0.0017, AJs:0.0518, AQs:0.0002, AA:0.0028"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "88:0.0021, 99:0.0040, TT:0.0067, JJ:0.0001, AJo:0.0015, ATs:0.0004, AJs:0.0027, AQs:0.0014, AA:0.0119"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0055, 77:0.0005, 88:0.0286, 99:0.0277, TT:0.2923, JTs:0.0003, JJ:0.0066, AJo:0.0044, QTs:0.0031, QJs:0.0118, KQo:0.0067, AQo:0.0002, KTs:0.0021, KJs:0.0384, KQs:0.0058, ATs:0.0181, AJs:0.0880, AQs:0.1163, AKs:0.0086, AA:0.5541"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0082, 88:0.8476, 99:0.0080, TT:0.2365, ATo:0.0040, JJ, AJo:0.0839, QQ, KK, AKo:0.0307, A3s:0.0004, A6s:0.0105, A8s:0.0030, ATs:0.0017, AJs:0.6943, AQs:0.9945, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1620, JJ:0.0067, ATs:0.0001, AA:0.5689"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A2o:0.1260, 33:0.0198, A3o:0.0377, 42s:0.0002, 43s:0.0001, 44:0.0076, K4o:0.0038, A4o:0.2815, 55:0.0005, K5o:0.0086, A5o:0.1601, 65s:0.0060, 66:0.0029, K6o:0.0524, A6o:0.0552, 76s:0.0283, 77:0.0475, K7o:0.0412, 87s:0.0002, 88:0.0011, K8o:0.0010, 99:0.0189, A9o:0.0001, T3s:0.0002, T7s:0.0001, TT:0.3915, KTo:0.1641, ATo:0.1587, J4s:0.0003, J8s:0.0001, JJ:0.6615, KJo:0.0918, QTs:0.5280, QQ:0.3729, KQo:0.2349, AQo:0.0407, K2s:0.8271, K3s:0.4724, K4s:0.1508, K5s:0.2299, K6s:0.1515, K7s:0.5443, K8s:0.0579, K9s:0.1123, KTs:0.1176, KJs:0.0919, KQs:0.0384, KK:0.8637, AKo:0.7071, A2s:0.1093, A3s:0.0306, A6s:0.0545, A7s:0.1405, A9s:0.0011, ATs:0.0863, AJs:0.0128, AQs:0.0928, AKs:0.6406, AA:0.9436"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "33:0.0292, 42s:0.0001, 43s:0.0012, 44:0.1326, 53s:0.0003, 54s:0.0084, 55:0.0040, K5o:0.0017, A5o:0.0958, 62s:0.0003, 64s:0.0027, 65s:0.0535, 66:0.1143, K6o:0.0004, A6o:0.0001, 76s:0.3159, 77:0.1160, K7o:0.0001, 87s:0.0015, 88:0.1271, 93s:0.0003, 95s:0.0002, 98s:0.0004, 99:0.1749, K9o:0.0001, T7s:0.0004, T8s:0.0001, TT:0.0295, KTo:0.0011, ATo:0.0001, J4s:0.0007, J6s:0.0001, J8s:0.0001, JJ:0.3290, KJo:0.0049, Q6s:0.0003, Q9s:0.0002, QTs:0.0315, QJs:0.0273, QQ:0.6271, KQo:0.7218, AQo:0.9270, K2s:0.0649, K3s:0.1154, K4s:0.6322, K5s:0.5869, K6s:0.7533, K7s:0.3552, K8s:0.6362, K9s:0.6834, KTs:0.8302, KJs:0.8474, KQs:0.9604, KK:0.1363, AKo:0.2929, A2s:0.8269, A3s:0.8928, A4s:0.9995, A5s:0.9060, A6s:0.8896, A7s:0.7581, A8s:0.8018, A9s:0.7702, ATs:0.8098, AJs:0.8042, AQs:0.9069, AKs:0.3594, AA:0.0564"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "99:0.0100, TT:0.3225, JJ:0.0813, QQ:0.0432, K3s:0.0005, K4s:0.0089, KTs:0.1221, KJs:0.0085, KQs:0.0177, KK:0.0625, AKo:0.1371, A4s:0.0596, A5s:0.0548, A7s:0.0606, ATs:0.0133, AJs:0.0017, AQs:0.1753, AKs:0.4354, AA:0.4212"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0099, T7s:0.0010, TT:0.5001, JJ:0.2660, QQ:0.9568, AQo:0.0039, K4s:0.0105, K5s:0.0034, K7s:0.0007, K9s:0.0039, KTs:0.5764, KJs:0.0214, KQs:0.4911, KK:0.9375, AKo:0.8629, A2s:0.0082, A4s:0.1366, A5s:0.0035, A7s:0.0645, A8s:0.0011, A9s:0.0009, ATs:0.1292, AJs:0.0525, AQs:0.6635, AKs:0.5646, AA:0.5788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0029, AJo:0.0014, KK:0.0001, A3s:0.0007, A8s:0.0001, AJs:0.0468"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0344, 88:0.6577, 99:0.0080, TT:0.2365, ATo:0.0013, JJ, AJo:0.0166, QQ, KK, AKo:0.0307, A3s:0.0576, A4s:0.0263, A7s:0.0026, A8s:0.0003, ATs:0.0625, AJs:0.9045, AQs:0.9971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|LJ:4BET@11.36",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0008, 99:0.7580, TT:0.5737, JJ:0.1703, AJo:0.1836, QJs:0.0001, QQ:0.9539, KQo:0.1235, AQo:0.9981, K9s:0.0006, KTs:0.3117, KJs:0.0983, KQs:0.1327, KK:0.9906, AKo:0.1707, A3s:0.0001, A4s:0.0125, A5s:0.1189, A7s:0.0003, A8s:0.0483, A9s:0.0064, ATs:0.1232, AJs:0.2625, AQs:0.5394, AKs:0.4088, AA:0.4311"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0083, QQ:0.0086, KK:0.0160, AKo:0.0007, AKs:0.0384"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.3636, KK:0.9840, AJs:0.0001, AQs:0.0001, AKs:0.7481, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@11",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0008, 99:0.4283, TT:0.4261, JJ:0.1693, QJo:0.0001, KJo:0.0003, Q8s:0.0225, QJs:0.0860, QQ:0.1769, AQo:0.2415, KTs:0.0003, KJs:0.0079, KQs:0.0063, KK:0.7113, AKo:0.0382, A4s:0.0115, A5s:0.0020, A7s:0.0009, A8s:0.0124, A9s:0.0007, ATs:0.0048, AJs:0.1967, AQs:0.2812, AKs:0.2314, AA:0.1297"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "99:0.0432, TT:0.1435, JJ:0.0009, QJo:0.0001, KJo:0.0002, QJs:0.0001, QQ:0.7770, KQo:0.0001, AQo:0.0002, KJs:0.0005, KQs:0.0007, KK:0.2793, AKo:0.1325, A5s:0.0002, A8s:0.0015, ATs:0.0001, AJs:0.0019, AQs:0.0036, AKs:0.1774, AA:0.3014"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0010, QQ:0.6681, KK, AKs:0.9303, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0008, 99:0.3825, TT:0.5725, JJ:0.1703, QJo:0.0001, QJs:0.0001, QQ:0.9539, KQo:0.0003, AQo:0.0489, KTs:0.0001, KJs:0.0002, KQs:0.0061, KK:0.9906, AKo:0.1707, AJs:0.0001, AQs:0.3132, AKs:0.4088, AA:0.4311"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0001, TT:0.0003, JJ:0.0234, AJo:0.0001, QQ:0.0222, AKo:0.0029, A6s:0.0005, AJs:0.0001, AQs:0.0004, AKs:0.0537, AA:0.0112"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0174, JJ:0.6128, QQ:0.9775, KK, AKo:0.0278, A6s:0.0001, A7s:0.0001, AJs:0.0001, AQs:0.0755, AKs:0.9460, AA:0.9888"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@11",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0001, AJo:0.0001, QQ:0.0001, KQo:0.0001, KTs:0.0001, KQs:0.0003, KK:0.0015, A8s:0.0001, ATs:0.0001, AJs:0.0002, AQs:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.1076, TT:0.4096, JJ:0.1701, QJs:0.0001, QQ:0.9538, AQo:0.1393, KJs:0.0002, KQs:0.0003, KK:0.9891, AKo:0.1707, A4s:0.0009, A5s:0.0099, A8s:0.0139, ATs:0.0006, AJs:0.2056, AQs:0.3855, AKs:0.4088, AA:0.4311"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.7149, 99:0.0079, TT:0.2365, JJ, QQ, KK, AKo:0.0307, ATs:0.0016, AJs:0.1103, AQs:0.9464, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0009, TT:0.0177, JJ:0.1320, QQ:0.9539, KK:0.9906, AKo:0.1385, AQs:0.1971, AKs:0.3921, AA:0.4311"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.0419, 32o:0.0001, 33:0.0943, A3o:0.0855, 43s:0.0010, 44:0.0544, A4o:0.0087, 53s:0.0001, 55:0.0266, 95o:0.0003, 64s:0.0001, 65s:0.1439, 66:0.2571, K6o:0.0001, A6o:0.0004, 72s:0.0005, 73s:0.0003, 75s:0.0361, 76s:0.1188, 77:0.3014, Q7o:0.0120, 82s:0.0125, 84s:0.0001, 86s:0.0046, 88:0.1115, K8o:0.0526, A8o:0.0169, 92s:0.0002, 93s:0.0003, 95s:0.0001, 96s:0.0138, 97s:0.0044, 99:0.1083, T9o:0.0001, K9o:0.0306, T2s:0.0196, T3s:0.0003, T4s:0.0002, T9s:0.0224, TT:0.1672, J4s:0.0001, J5s:0.0005, J7s:0.0064, J9s:0.0090, JTs:0.0272, JJ:0.1748, KJo:0.0766, AJo:0.0493, Q4s:0.0130, Q5s:0.2684, Q7s:0.0602, Q8s:0.0173, Q9s:0.0173, QTs:0.0265, QJs:0.1116, QQ:0.0035, KQo:0.1607, AQo:0.1730, K3s:0.0025, K5s:0.0933, K6s:0.2081, K7s:0.3822, K8s:0.0847, K9s:0.0370, KTs:0.5378, KJs:0.0163, KQs:0.4417, KK:0.0052, AKo:0.5022, A2s:0.0593, A3s:0.0022, A4s:0.4581, A5s:0.1153, A6s:0.0905, A7s:0.0013, A8s:0.2801, A9s:0.0001, ATs:0.2300, AJs:0.4865, AQs:0.4807, AKs:0.4430, AA:0.6420"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.2692, A2o:0.0003, 32s:0.0191, 33:0.4242, 43o:0.0010, 63o:0.0001, Q3o:0.0019, A3o:0.0079, 42s:0.0239, 43s:0.0614, 44:0.3084, 64o:0.0002, Q4o:0.0002, K4o:0.0173, A4o:0.0105, 53s:0.0002, 54s:0.0634, 55:0.0619, 65o:0.0044, 95o:0.0001, 63s:0.0003, 64s:0.0001, 65s:0.1777, 66:0.1505, K6o:0.0007, A6o:0.0115, 72s:0.0013, 73s:0.0045, 74s:0.0054, 75s:0.0946, 76s:0.0871, 77:0.3295, J7o:0.0001, Q7o:0.0024, A7o:0.0098, 82s:0.0357, 83s:0.0016, 85s:0.0076, 86s:0.0953, 87s:0.0148, 88:0.0191, K8o:0.0465, A8o:0.0035, 92s:0.0036, 93s:0.0010, 94s:0.0001, 95s:0.0002, 96s:0.0009, 97s:0.0007, 99:0.1879, T9o:0.0004, J9o:0.0001, K9o:0.1502, T2s:0.0102, T3s:0.0004, T4s:0.0010, T5s:0.0001, T6s:0.0350, T8s:0.0035, T9s:0.1583, TT:0.7196, QTo:0.0178, KTo:0.0179, ATo:0.0002, J2s:0.0334, J4s:0.0001, J5s:0.1496, J6s:0.0580, J7s:0.0197, J8s:0.0706, J9s:0.0272, JTs:0.4507, JJ:0.4760, QJo:0.0211, KJo:0.2572, AJo:0.0279, Q2s:0.0002, Q3s:0.0352, Q4s:0.0138, Q5s:0.3786, Q6s:0.0016, Q7s:0.0002, Q8s:0.0014, Q9s:0.2945, QTs:0.1805, QJs:0.2672, QQ:0.9961, KQo:0.7069, AQo:0.0892, K2s:0.0592, K3s:0.0020, K4s:0.0691, K5s:0.0883, K6s:0.0911, K7s:0.3475, K8s:0.1007, K9s:0.1442, KTs:0.3474, KJs:0.2579, KQs:0.4549, KK:0.9948, AKo:0.4953, A2s:0.1454, A3s:0.2408, A4s:0.1376, A5s:0.1271, A6s:0.0495, A7s:0.0730, A8s:0.0235, A9s:0.1760, ATs:0.4254, AJs:0.1247, AQs:0.3751, AKs:0.5545, AA:0.3579"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "42o:0.0001, 33:0.0001, J3o:0.0001, 42s:0.0003, 44:0.0043, 53s:0.0001, 54s:0.0001, 63s:0.0005, 65s:0.0001, 73s:0.0002, 75s:0.0001, 77:0.0005, 88:0.0001, 92s:0.0003, 96s:0.0001, 97s:0.0001, 98s:0.0001, 99:0.0043, J9o:0.0001, A9o:0.0021, T2s:0.0001, T3s:0.0001, T4s:0.0003, T5s:0.0001, T6s:0.0001, T8s:0.0001, T9s:0.0004, TT:0.0057, J5s:0.0006, J6s:0.0002, J9s:0.0004, JJ:0.0994, AJo:0.0002, Q2s:0.0001, Q3s:0.0003, Q5s:0.0014, Q7s:0.0001, Q8s:0.0001, Q9s:0.0002, QTs:0.0004, QJs:0.0044, QQ:0.3544, KQo:0.0001, AQo:0.0008, K3s:0.0009, K4s:0.0001, K5s:0.0001, K7s:0.0001, K8s:0.0001, KTs:0.0002, KQs:0.0065, KK, AKo:0.1162, A2s:0.0003, A3s:0.0001, A5s:0.0001, A6s:0.0003, A7s:0.0005, A8s:0.0004, A9s:0.0003, ATs:0.0054, AJs:0.0028, AQs:0.3191, AKs:0.6601, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0046, 88:0.2045, 99:0.0021, TT:0.1612, ATo:0.0180, JJ:0.9934, AJo:0.0480, QQ:0.9985, KQo:0.0031, KK:0.9491, AKo:0.0290, A3s:0.0024, A4s:0.0001, A6s:0.0512, A7s:0.0278, A8s:0.0101, ATs:0.0149, AJs:0.7363, AQs:0.9702, AKs:0.9162"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0004, TT:0.0001, JJ:0.0009, AJo:0.0020, QQ:0.0015, KQo:0.0006, KK:0.0509, AKo:0.0017, A7s:0.0022, A8s:0.0002, ATs:0.0089, AJs:0.1675, AQs:0.0267, AKs:0.0837, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|LJ:4BET@11.36",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0123, JJ:0.0023, QJs:0.0001, QQ:0.0346, KQo:0.0048, AQo:0.0010, KTs:0.0124, KJs:0.0132, KK:0.0094, A2s:0.0030, A3s:0.0139, A4s:0.0671, A5s:0.0140, A6s:0.0055, A7s:0.0011, AQs:0.0006, AKs:0.0187"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0001, 88:0.0003, 99:0.0002, A9o:0.0001, TT:0.0022, KTo:0.0001, ATo:0.0011, JJ:0.0081, QJo:0.0002, KJo:0.0002, AJo:0.0006, QQ:0.3460, KQo:0.0011, K9s:0.0004, KK:0.9963, AKo:0.0005, A3s:0.0102, A4s:0.0004, A6s:0.0005, A7s:0.0029, A8s:0.0022, ATs:0.0001, AJs:0.0025, AQs:0.0293, AKs:0.0172, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|BB:4BET@14.93",
    "heroPos": "BTN",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0123, JJ:0.0023, QJs:0.0001, QQ:0.0346, KQo:0.0001, AQo:0.0010, KTs:0.0124, KJs:0.0036, KK:0.0094, A2s:0.0030, A3s:0.0139, A4s:0.0671, A5s:0.0140, A6s:0.0055, A7s:0.0011, AQs:0.0006, AKs:0.0187"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0131, 88:0.0646, A8o:0.0002, 99:0.0011, A9o:0.0013, TT:0.1315, KTo:0.0001, ATo:0.0001, JJ:0.7634, QJo:0.0001, AJo:0.0013, QQ:0.7461, KQo:0.0014, KK:0.9981, AKo:0.0148, A3s:0.0071, A6s:0.0005, A7s:0.0058, A8s:0.0042, ATs:0.0153, AJs:0.6273, AQs:0.4161, AKs:0.5427, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|SB:4BET@15",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0012, JJ:0.0003, QQ:0.0062, KQo:0.0001, KTs:0.0002, KJs:0.0002, KK:0.0038, A4s:0.0001, A6s:0.0001, AQs:0.0002, AKs:0.0014"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0098, JJ:0.0019, QQ:0.0284, AQo:0.0008, KK:0.0056, AQs:0.0004, AKs:0.0173"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, A9o:0.0001, TT:0.1503, JJ:0.4865, QJo:0.0001, KJo:0.0002, AJo:0.0001, QQ:0.9993, KK:0.9955, AKo:0.0295, A4s:0.0018, A6s:0.0001, A7s:0.0002, A8s:0.0006, ATs:0.0026, AJs:0.0033, AQs:0.0940, AKs:0.9976, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@8.5|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0123, JJ:0.0023, QQ:0.0346, KK:0.0094, AKs:0.0187"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@24.75",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0004, 66:0.0101, 77:0.0032, 88:0.0003, 99:0.0476, TT:0.9678, JJ, QQ, AQo:0.0009, KK, AKo, A8s:0.0001, ATs:0.0004, AJs:0.0011, AQs:0.2017, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@24.75",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.8200, QQ:0.9998, KK, AKo:0.9997, AJs:0.0005, AKs:0.9989, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0065, 88:0.3226, 99:0.0072, TT:0.2365, JJ, AJo:0.0001, QQ, KK, AKo:0.0307, AJs:0.6666, AQs:0.9822, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@24.75|BB:CALL@13.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0003, KK, AQs:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@24.75|SB:CALL@24.25",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0003, KK:0.0505, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0333, A3o:0.0114, A4o:0.0042, 54s:0.0007, A5o:0.0016, A6o:0.0102, 76s:0.0001, A7o:0.0007, 85s:0.0042, 88:0.0001, K8o:0.0007, A8o:0.0142, TT:0.2982, ATo:0.0287, JJ:0.2890, AJo:0.0200, Q2s:0.0213, Q8s:0.0160, Q9s:0.0009, QTs:0.0491, QQ:0.9148, KQo:0.0718, AQo:0.6770, K3s:0.0388, K4s:0.0732, K5s:0.0163, KJs:0.0004, KQs:0.2581, KK:0.9954, AKo:0.7515, A2s:0.1646, A3s:0.0318, A4s:0.5572, A5s:0.4159, A6s:0.2176, A7s:0.1710, A8s:0.6042, A9s:0.0036, ATs:0.5196, AJs:0.1503, AQs:0.6101, AKs:0.4886, AA:0.8465"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "A5o:0.0003, ATo:0.0003, JJ:0.0756, Q9s:0.0001, QQ:0.0422, AQo:0.0012, KK:0.0021, AKo:0.1015, A2s:0.0044, A5s:0.0253, A6s:0.0811, A7s:0.0432, A8s:0.0833, A9s:0.1529, ATs:0.1340, AJs:0.0011, AQs:0.0156, AKs:0.0195, AA:0.1521"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 96s:0.0001, JJ:0.0001, QQ:0.0406, AQo:0.0015, K3s:0.0009, K5s:0.0002, KQs:0.0014, KK:0.0021, AKo:0.1416, A2s:0.0047, A3s:0.2533, A4s:0.0298, A5s:0.0495, A6s:0.0643, A7s:0.0019, A8s:0.0012, A9s:0.0011, ATs:0.0112, AJs:0.0055, AQs:0.3669, AKs:0.4896, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 28.32bb"
    ],
    "bands": [
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0029, A2o:0.2114, 33:0.0055, K3o:0.0004, A3o:0.8082, 43s:0.0009, K4o:0.0001, A4o:0.2806, 53s:0.0005, 55:0.0048, A5o:0.3143, 64s:0.3607, 65s:0.4291, 66:0.0771, A6o:0.0009, 74s:0.0029, 75s:0.0481, 76s:0.2834, 77:0.2256, A7o:0.1778, 85s:0.0004, 86s:0.0659, 87s:0.5180, 88:0.3655, Q8o:0.0012, K8o:0.0327, A8o:0.0336, 98s:0.0001, 99:0.4654, K9o:0.0004, A9o:0.0021, T6s:0.0259, T8s:0.1689, T9s:0.2879, TT:0.8351, ATo:0.8049, J3s:0.0001, J8s:0.0439, JTs:0.1475, JJ:0.9942, QJo:0.0003, AJo:0.4794, Q4s:0.0225, Q5s:0.0014, Q6s:0.0009, Q7s:0.2428, Q8s:0.0044, Q9s:0.0014, QTs:0.6426, QJs:0.0589, QQ:0.9827, KQo:0.7926, AQo:0.7731, K2s:0.2593, K3s:0.4201, K4s:0.8807, K5s:0.0876, K6s:0.0200, K7s:0.1312, K8s:0.5585, K9s:0.4588, KTs:0.5518, KJs:0.0915, KQs:0.6059, KK:0.9073, AKo:0.3388, A2s:0.3613, A3s:0.2655, A4s:0.4512, A5s:0.0917, A6s:0.3430, A7s:0.4266, A8s:0.1953, A9s:0.3987, ATs:0.3492, AJs:0.2816, AQs:0.2675, AKs:0.6012, AA:0.6026"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0033, A2o:0.0620, A3o:0.0548, A4o:0.0559, 52s:0.0001, 54s:0.0050, 55:0.0193, A5o:0.0495, 65s:0.0001, 66:0.0738, A6o:0.0316, 74s:0.0002, 75s:0.0004, 76s:0.0038, 77:0.0003, A7o:0.0409, 82s:0.0001, 84s:0.0029, 85s:0.0007, 86s:0.0091, 87s:0.0004, 88:0.0041, 98s:0.0003, 99:0.0595, A9o:0.0017, T9s:0.0013, TT:0.0881, ATo:0.0511, J2s:0.0002, JTs:0.0015, JJ:0.0025, AJo:0.0320, Q3s:0.0001, Q4s:0.0017, Q6s:0.0122, Q7s:0.0006, Q8s:0.0008, Q9s:0.0247, QTs:0.0029, QJs:0.0059, QQ:0.0172, KQo:0.0413, AQo:0.0307, K2s:0.0041, K3s:0.0050, K4s:0.0324, K6s:0.1076, K7s:0.0081, K8s:0.0284, K9s:0.1984, KTs:0.0288, KJs:0.0002, KQs:0.0805, KK:0.0927, AKo:0.2666, A2s:0.0763, A3s:0.1264, A4s:0.0236, A5s:0.0239, A6s:0.0874, A7s:0.2588, A8s:0.0403, A9s:0.1053, ATs:0.0549, AJs:0.0033, AKs:0.1419, AA:0.3974"
      },
      {
        "action": "3bet 28.32bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0350, 53s:0.0004, 55:0.0002, A5o:0.0703, 63s:0.0003, 64s:0.0007, 65s:0.0024, 73s:0.0001, 74s:0.0005, 75s:0.0002, 76s:0.0103, 77:0.0618, 85s:0.0007, 86s:0.0054, 87s:0.0167, 88:0.4104, A8o:0.1788, 98s:0.0002, 99:0.4404, T6s:0.0001, T8s:0.0002, T9s:0.0004, TT:0.0696, KTo:0.0001, ATo:0.0008, J7s:0.0001, J8s:0.0002, JJ:0.0015, AJo:0.0448, Q3s:0.0001, Q6s:0.0002, Q7s:0.0001, Q8s:0.0006, QTs:0.0002, QQ:0.0001, KQo:0.0005, AQo:0.1954, K3s:0.0003, K4s:0.0002, K5s:0.0006, K7s:0.0070, K8s:0.0066, K9s:0.0002, KJs:0.0028, KQs:0.3079, KK:0.0001, AKo:0.3945, A2s:0.5475, A3s:0.5850, A4s:0.5118, A5s:0.8816, A6s:0.5064, A7s:0.2879, A8s:0.4727, A9s:0.4924, ATs:0.5938, AJs:0.7017, AQs:0.7323, AKs:0.2566"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9985, 33:0.9976, 43s:0.5266, 44:0.9915, 52s:0.0207, 53s:0.0188, 54s:0.3922, 55:0.9895, 65o:0.0584, 63s:0.0753, 64s:0.2280, 65s:0.8020, 66:0.9982, 74s:0.0018, 75s:0.0608, 76s:0.1911, 77:0.9382, 84s:0.0001, 86s:0.1895, 88:0.9893, 93s:0.0003, 97s:0.2199, 99:0.9770, T6s:0.0003, T7s:0.4316, T8s:0.0191, T9s:0.2113, TT:0.2729, J4s:0.0001, J5s:0.0001, J9s:0.0003, JTs:0.0385, JJ:0.4844, Q2s:0.0001, Q3s:0.0430, Q5s:0.0001, Q8s:0.1044, Q9s:0.0228, QTs:0.0001, QQ:0.0067, KQo:0.4252, AQo:0.4245, K2s:0.0042, K3s:0.0001, K5s:0.0004, K8s:0.0004, KTs:0.0538, KQs:0.9231, KK:0.0002, AKo:0.0016, A3s:0.0003, A4s:0.0082, A6s:0.0001, A7s:0.0069, A8s:0.0013, A9s:0.0059, AJs:0.8453, AQs:0.8862, AKs:0.0445, AA:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "52s:0.0002, A6o:0.0006, 75s:0.0020, A7o:0.0006, 93s:0.0127, 99:0.0019, A9o:0.1032, T5s:0.0025, T6s:0.0006, T9s:0.0732, TT:0.0382, ATo:0.1460, JJ:0.2917, AJo:0.0069, QTs:0.0054, QQ:0.0156, KQo:0.0001, AQo:0.1005, K4s:0.0026, K7s:0.0002, K9s:0.0037, KTs:0.0257, KK:0.1799, AKo:0.0982, A2s:0.0002, A3s:0.0372, A4s:0.2007, A5s:0.0253, A6s:0.0183, A8s:0.2095, A9s:0.0103, ATs:0.0167, AJs:0.0059, AQs:0.0560, AKs:0.3575, AA:0.9870"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, A4o:0.0680, 65s:0.0002, 75s:0.0005, 88:0.0003, T8s:0.0011, T9s:0.1589, TT:0.6884, ATo:0.0066, JJ:0.2227, AJo:0.0081, Q5s:0.0001, QTs:0.5088, QQ:0.9777, KQo:0.0004, AQo:0.4689, K8s:0.0001, KTs:0.0865, KJs:0.5101, KQs:0.0742, KK:0.8199, AKo:0.8998, A2s:0.1108, A3s:0.2958, A4s:0.4936, A5s:0.6487, A7s:0.1300, A8s:0.2618, A9s:0.3495, ATs:0.8049, AJs:0.1457, AQs:0.0572, AKs:0.5977, AA:0.0129"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0020, 99:0.0001, TT:0.0043, JJ:0.0042, AJo:0.0009, QQ:0.1303, KK:0.0277, AKo:0.0001, A3s:0.0039, A6s:0.0066, A7s:0.0200, A8s:0.0005, ATs:0.0002, AJs:0.1130, AQs:0.0096, AKs:0.0068, AA:0.0006"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0069, 88:0.2177, 99:0.0022, TT:0.1528, ATo:0.0178, JJ:0.2223, AJo:0.0014, QQ:0.8644, KK:0.9711, AKo:0.0305, A2s:0.0010, A3s:0.1378, A4s:0.0016, A6s:0.1439, A7s:0.1169, A8s:0.3416, ATs:0.0156, AJs:0.6194, AQs:0.5953, AKs:0.9890, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@5",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0141, 65s:0.0088, 66:0.0056, 76s:0.0196, 77:0.0009, 88:0.0132, 99:0.0094, TT:0.1036, JJ:0.0002, AJo:0.0002, QTs:0.0714, KQo:0.0089, AQo:0.0001, KTs:0.0059, KJs:0.0175, KQs:0.0002, A4s:0.0014, A5s:0.0004, A6s:0.0001, A7s:0.0022, A9s:0.0144, ATs:0.0249, AJs:0.4940, AQs:0.0742, AA:0.2657"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "54s:0.0081, 65s:0.0009, 66:0.0170, 76s:0.0050, 77:0.0044, 88:0.0085, 99:0.1133, TT:0.0172, JJ:0.0615, AJo:0.0283, QTs:0.0009, KQo:0.0009, KJs:0.0035, A4s:0.0014, A5s:0.0006, A6s:0.0001, A7s:0.0027, A9s:0.0028, ATs:0.0004, AJs:0.2449, AQs:0.0192, AKs:0.0022, AA:0.1716"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "54s:0.0191, 65s:0.0058, 66:0.0238, 76s:0.0140, 77:0.0075, 88:0.0270, 99:0.1152, TT:0.0966, JJ:0.1225, AJo:0.0247, QTs:0.0078, KQo:0.0014, AQo:0.0001, KJs:0.0093, KQs:0.0001, A4s:0.0027, A5s:0.0013, A6s:0.0002, A7s:0.0024, A9s:0.0012, ATs:0.0045, AJs:0.0808, AQs:0.1090, AKs:0.0001, AA:0.1539"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1892, QQ, KK, AKo:0.0305, A4s:0.0001, ATs:0.0001, AJs:0.0002, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0146, 99:0.1003, TT:0.3088, JJ:0.1847, AQo:0.0002, ATs:0.0004, AJs:0.0198, AQs:0.2367, AKs:0.0023, AA:0.5912"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.5453, 99:0.0036, TT:0.0022, JJ:0.4933, AJo:0.0756, QQ:0.9889, KQo:0.0691, KK:0.8750, AKo:0.0123, A4s:0.0001, A7s:0.0066, A8s:0.0106, ATs:0.0530, AJs:0.8446, AQs:0.7393, AKs:0.6506, AA:0.0033"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0649, 99:0.0043, TT:0.2343, JJ:0.5067, QQ:0.0111, KK:0.1250, AKo:0.0184, A7s:0.0005, AJs:0.0081, AQs:0.2571, AKs:0.3493, AA:0.9967"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0005, TT:0.0061, JJ:0.0004, KQo:0.0098, KJs:0.0001, KQs:0.0007, ATs:0.0191, AJs:0.0398, AQs:0.0258, AA:0.0296"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "54s:0.0001, 65s:0.0001, 66:0.0003, 76s:0.0021, 77:0.0009, 88:0.0004, 99:0.0018, TT:0.0629, JJ:0.0033, AJo:0.1013, QTs:0.0117, KQo:0.0006, KJs:0.0002, A4s:0.0045, A5s:0.0023, A6s:0.0006, A7s:0.0047, A9s:0.0093, ATs:0.1461, AJs:0.1740, AQs:0.0001, AA:0.5519"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0045, 77:0.0007, 88:0.0028, 99:0.0539, TT:0.1432, JJ:0.1807, KQo:0.0025, AQo:0.0006, KTs:0.0009, KJs:0.0064, KQs:0.0001, ATs:0.0016, AJs:0.0490, AQs:0.2161, AKs:0.0023, AA:0.0097"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@9",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0027, 88:0.0952, 99:0.0030, TT:0.0059, JJ:0.4995, QQ:0.9450, KK:0.5875, AKo:0.0281, A4s:0.0003, A6s:0.0003, ATs:0.0069, AJs:0.1738, AQs:0.4493, AKs:0.9993, AA:0.3399"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0009, 88:0.0118, 99:0.0037, TT:0.2305, JJ:0.3279, KJo:0.0001, QQ:0.0549, KK:0.4125, AKo:0.0026, A6s:0.0007, A7s:0.0001, ATs:0.0201, AJs:0.0125, AQs:0.4367, AKs:0.0006, AA:0.6601"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@9",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0015, JJ:0.0040, A4s:0.0001, A9s:0.0001, ATs:0.0002, AJs:0.0074, AQs:0.0148, AA:0.0180"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "88:0.0002, 99:0.0029, TT:0.0015, JJ:0.0004, AJo:0.0280, AQo:0.0001, KJs:0.0002, ATs:0.0004, AJs:0.0622, AQs:0.0315, AA:0.1667"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0167, 77:0.0020, 88:0.0060, 99:0.0752, TT:0.1672, JJ:0.1690, AJo:0.0168, KQo:0.0033, AQo:0.0001, KTs:0.0012, KJs:0.0081, A4s:0.0037, A5s:0.0015, A7s:0.0018, A9s:0.0177, ATs:0.0476, AJs:0.1879, AQs:0.1609, AKs:0.0023, AA:0.4066"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0343, 88:0.8479, 99:0.0080, A9o:0.0002, TT:0.2364, ATo:0.0012, JJ, AJo:0.0051, QQ, KQo:0.0001, KK, AKo:0.0307, A3s:0.0013, A6s:0.0013, A7s:0.0001, ATs:0.0013, AJs:0.7725, AQs:0.9926, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0009, JJ:0.0120, AA:0.5912"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0017, 99:0.0001, A9o:0.0001, TT:0.0007, ATo:0.0001, JJ:0.1700, AJo:0.0001, QQ:0.0487, KQo:0.0007, KK:0.0005, AKo:0.0002, A3s:0.0002, A4s:0.0001, A6s:0.0003, A7s:0.0001, A8s:0.0031, ATs:0.0005, AJs:0.0244, AQs:0.5687, AKs:0.0002, AA:0.0339"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0004, 77:0.0264, 88:0.4951, 99:0.0052, TT:0.2152, JJ:0.5226, AJo:0.0001, QQ:0.9508, KK:0.9995, AKo:0.0305, A3s:0.0003, A4s:0.0002, A6s:0.0001, AJs:0.0002, AQs:0.1644, AKs:0.9991, AA:0.9661"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0502, 76s:0.0013, 77:0.0109, 88:0.0241, 99:0.0105, TT:0.1376, JJ:0.0833, KQo:0.0050, AQo:0.0001, KTs:0.0002, KJs:0.0702, KQs:0.0004, A5s:0.0002, ATs:0.0417, AJs:0.0359, AQs:0.1907, AKs:0.0001, AA:0.0086"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "54s:0.0104, 65s:0.0001, 66:0.0011, 76s:0.0024, 88:0.0029, 99:0.0009, TT:0.0435, JJ:0.0574, AJo:0.1787, QTs:0.0009, KQo:0.0107, AQo:0.0002, KTs:0.0128, KJs:0.0107, KQs:0.0001, A4s:0.0007, A5s:0.0027, A6s:0.0001, A7s:0.0059, A9s:0.0428, ATs:0.0235, AJs:0.2887, AQs:0.0014, AKs:0.0021, AA:0.5613"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "54s:0.0008, 65s:0.0010, 66:0.0003, 76s:0.0003, 88:0.0001, 99:0.0093, TT:0.0047, JJ:0.0011, AJo:0.0001, QTs:0.0021, KQo:0.0139, KTs:0.0022, KJs:0.0073, KQs:0.0001, A4s:0.0008, A5s:0.0002, A7s:0.0001, A9s:0.0034, ATs:0.0059, AJs:0.0047, AQs:0.0204, AA:0.0213"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@8.5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "66:0.0001, 77:0.0096, 88:0.1448, A9o:0.0002, TT:0.0239, ATo:0.0004, JJ:0.2018, AJo:0.0007, QQ:0.6268, KQo:0.0001, KK:0.6517, AKo:0.0286, A3s:0.0011, A4s:0.0001, A6s:0.0001, A7s:0.0002, A8s:0.0027, ATs:0.0004, AQs:0.2666, AKs:0.9738, AA:0.4872"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.3609, A9o:0.0006, TT:0.2060, ATo:0.0003, JJ:0.1499, QJo:0.0001, KJo:0.0001, AJo:0.0002, QQ:0.0588, KQo:0.0003, KK:0.3483, AKo:0.0007, A3s:0.0002, A6s:0.0002, A8s:0.0045, ATs:0.0003, AJs:0.0041, AQs:0.1305, AKs:0.0191, AA:0.5128"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@8.5",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0011, A4s:0.0001, AJs:0.0018, AQs:0.0006, AA:0.0138"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "66:0.0256, 77:0.0057, 88:0.0459, 99:0.0931, TT:0.1146, JJ:0.0572, AJo:0.0306, QTs:0.0008, AQo:0.0001, KJs:0.0001, A4s:0.0011, A5s:0.0002, A6s:0.0001, A7s:0.0013, A9s:0.0244, ATs:0.0605, AJs:0.0615, AQs:0.0283, AKs:0.0018, AA:0.4666"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "54s:0.0043, 65s:0.0034, 66:0.0167, 76s:0.0066, 77:0.0037, 88:0.0229, 99:0.0297, TT:0.0508, JJ:0.0731, AJo:0.0008, QTs:0.0092, KTs:0.0006, KJs:0.0229, KQs:0.0001, A4s:0.0005, A5s:0.0008, A6s:0.0003, A7s:0.0022, A9s:0.0146, ATs:0.0329, AJs:0.1579, AQs:0.0720, AKs:0.0004, AA:0.1107"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0210, 88:0.6845, 99:0.0064, A9o:0.0003, TT:0.2081, ATo:0.0001, JJ:0.6930, KJo:0.0001, AJo:0.0002, QQ:0.9972, KK, AKo:0.0303, A3s:0.0008, A4s:0.0002, A6s:0.0036, A7s:0.0015, A8s:0.0035, ATs:0.0046, AJs:0.0194, AQs:0.2592, AKs:0.9518, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0015, TT:0.0279, JJ:0.0093, AJo:0.0004, ATs:0.0002, AJs:0.0003, AQs:0.0034, AKs:0.0017, AA:0.5911"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.0107, A3o:0.0250, A4o:0.0059, A5o:0.0874, A6o:0.0050, A8o:0.0003, T5s:0.0001, JJ:0.0001, QQ:0.0349, AQo:0.0210, K5s:0.0003, KTs:0.0010, KJs:0.0048, KQs:0.0018, AKo:0.0654, A2s:0.0977, A3s:0.0740, A4s:0.1047, A5s:0.4083, A7s:0.0041, A8s:0.3028, A9s:0.0687, ATs:0.0101, AJs:0.0005, AQs:0.0292, AKs:0.1403, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0142, 66:0.0267, 72s:0.0001, 76s:0.0001, 77:0.0251, K7o:0.0001, 88:0.0125, 99:0.0120, KTo:0.0003, JJ:0.0001, KJo:0.0002, QQ:0.0605, K2s:0.0278, K3s:0.0090, K4s:0.0040, K5s:0.2129, K6s:0.1989, K7s:0.1704, K8s:0.0218, K9s:0.0036, KTs:0.0114, KJs:0.0407, KQs:0.0216, KK, AKo:0.9346, A2s:0.0483, A3s:0.2552, A4s:0.5108, A5s:0.3712, A6s:0.0316, A7s:0.0005, A8s:0.0247, A9s:0.0093, ATs:0.0405, AJs:0.0005, AQs:0.0033, AKs:0.8597, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.0041, 33:0.0122, K3o:0.0003, A3o:0.1563, 43s:0.0010, 44:0.0278, K4o:0.1033, A4o:0.4873, 52s:0.0030, 54s:0.0097, 55:0.0648, K5o:0.0176, A5o:0.2895, 65s:0.0088, 66:0.0165, K6o:0.0032, A6o:0.0117, K7o:0.0202, A7o:0.0194, 88:0.0002, 99:0.0003, K9o:0.0001, A9o:0.0004, TT:0.0605, KTo:0.0315, J5s:0.0002, J6s:0.0001, JJ:0.2722, KJo:0.0175, AJo:0.0001, Q3s:0.0013, Q8s:0.0011, QJs:0.0053, QQ:0.0605, KQo:0.1278, AQo:0.0767, K2s:0.5132, K3s:0.0349, K4s:0.3104, K5s:0.0511, K6s:0.3426, K7s:0.2875, K8s:0.0270, K9s:0.1695, KTs:0.2140, KJs:0.0546, KQs:0.0013, KK:0.8192, AKo:0.2171, A2s:0.0002, A3s:0.0059, A4s:0.0018, A5s:0.0024, A6s:0.0022, A7s:0.0824, A8s:0.0021, ATs:0.0548, AJs:0.0079, AKs:0.7619, AA:0.9994"
      },
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.0015, A2o:0.0016, 33:0.0018, A3o:0.0025, 42s:0.0001, 43s:0.0003, 44:0.0145, A4o:0.1541, 52s:0.0005, 53s:0.0002, 54s:0.2046, A5o:0.0042, 64s:0.0148, 65s:0.0254, 66:0.0263, K6o:0.0001, 73s:0.0026, 75s:0.0010, 76s:0.0003, 77:0.0008, K7o:0.0005, A7o:0.0002, 87s:0.0012, 88:0.2608, 96s:0.0001, 99:0.5252, T8s:0.0001, TT:0.5266, KTo:0.0013, ATo:0.0002, J5s:0.0007, J7s:0.0001, J8s:0.0001, JTs:0.0002, JJ:0.5049, KJo:0.0005, AJo:0.0002, Q4s:0.0002, Q5s:0.0013, Q6s:0.0011, Q7s:0.0001, Q8s:0.0001, QTs:0.0009, QJs:0.0018, QQ:0.9395, KQo:0.6691, AQo:0.9216, K2s:0.1075, K3s:0.2336, K4s:0.4572, K5s:0.9229, K6s:0.5209, K7s:0.5576, K8s:0.7128, K9s:0.7080, KTs:0.5230, KJs:0.7342, KQs:0.9980, KK:0.1808, AKo:0.7829, A2s:0.9944, A3s:0.9893, A4s:0.9938, A5s:0.9913, A6s:0.9550, A7s:0.2820, A8s:0.9624, A9s:0.9945, ATs:0.7400, AJs:0.4635, AQs:0.9992, AKs:0.2381, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0952, JJ:0.3125, QQ:0.0141, K9s:0.0001, KJs:0.0315, KQs:0.0115, KK:0.0005, AKo:0.2985, A2s:0.0333, A5s:0.0109, A7s:0.0001, A9s:0.0065, ATs:0.0705, AJs:0.0001, AQs:0.3950, AKs:0.5214, AA:0.7312"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 88:0.0002, TT:0.8915, JJ:0.6642, QQ:0.9857, AQo:0.0001, K6s:0.0019, KTs:0.0016, KJs:0.0113, KQs:0.7300, KK:0.9995, AKo:0.7014, A2s:0.0026, A5s:0.1004, ATs:0.5505, AJs:0.0014, AQs:0.3638, AKs:0.4785, AA:0.2688"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0182, AJo:0.0002, KK:0.0012, ATs:0.0001, AJs:0.0109"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0310, 88:0.5798, 99:0.0080, TT:0.2365, ATo:0.0001, JJ, AJo:0.0013, QQ, KK:0.9988, AKo:0.0307, ATs:0.0623, AJs:0.9303, AQs:0.9971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|LJ:4BET@11.36",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0960, TT:0.6798, JJ:0.2899, AJo:0.1151, QQ:0.7095, KQo:0.2537, AQo:0.9962, KTs:0.1894, KJs:0.3824, KQs:0.0193, KK:0.9231, AKo:0.3035, A3s:0.0312, A4s:0.1543, A5s:0.4716, A6s:0.0012, A7s:0.0045, A8s:0.2838, A9s:0.0012, ATs:0.3766, AJs:0.0012, AQs:0.7414, AKs:0.3000, AA:0.4088"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0018, QQ:0.0196, KK:0.0435, AKo:0.0002, AKs:0.0153, AA:0.0460"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0851, QQ:0.8715, KK:0.9554, A3s:0.0001, A6s:0.0001, A7s:0.0001, AKs:0.1313, AA:0.9540"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@11",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0616, TT:0.6060, JJ:0.2722, AJo:0.0001, Q8s:0.0015, QJs:0.0013, QQ:0.6701, KQo:0.0004, AQo:0.0722, KTs:0.0065, KJs:0.0002, KQs:0.0138, KK:0.3747, AKo:0.1236, A3s:0.0052, A4s:0.0027, A5s:0.0500, A7s:0.0003, A8s:0.0001, ATs:0.0001, AJs:0.0003, AQs:0.6885, AKs:0.1089, AA:0.0007"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "99:0.0079, TT:0.0116, JJ:0.0135, KJo:0.0002, AJo:0.0005, QQ:0.0394, KQo:0.0001, AQo:0.0018, KTs:0.0006, KQs:0.0001, KK:0.5484, AKo:0.1799, A3s:0.0001, A4s:0.0009, A5s:0.0016, A8s:0.0012, ATs:0.0001, AQs:0.0045, AKs:0.1911, AA:0.4081"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0008, QQ:0.9673, KK, AKo:0.0001, AKs:0.2845, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0019, TT:0.6623, JJ:0.2899, KJo:0.0001, QQ:0.7095, KQo:0.0001, AQo:0.0020, KQs:0.0001, KK:0.9231, AKo:0.3035, A3s:0.0004, A4s:0.0018, A5s:0.0039, A8s:0.0015, ATs:0.0010, AQs:0.5547, AKs:0.3000, AA:0.4088"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0101, 99:0.0002, TT:0.0055, JJ:0.0251, AJo:0.0001, QQ:0.0716, KK:0.1832, AKo:0.0020, A6s:0.0001, A7s:0.0101, A8s:0.0019, ATs:0.0013, AJs:0.0008, AQs:0.0309, AKs:0.0820, AA:0.1252"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0024, 88:0.0365, 99:0.0018, TT:0.0736, JJ:0.7432, QQ:0.9268, KK:0.8168, AKo:0.0287, A3s:0.0001, A7s:0.0017, A8s:0.0016, AJs:0.1434, AQs:0.2921, AKs:0.9179, AA:0.8748"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@11",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0001, KK:0.0002, A4s:0.0001, ATs:0.0001, AQs:0.0011, AA:0.0132"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8o:0.0021, 99:0.0214, TT:0.1478, JJ:0.2331, KJo:0.0001, AJo:0.0175, QQ:0.7095, AQo:0.0931, KJs:0.0325, KQs:0.0008, KK:0.9229, AKo:0.3035, A3s:0.0078, A4s:0.0562, A5s:0.2584, A6s:0.0006, A7s:0.0013, A8s:0.1012, A9s:0.0006, ATs:0.1974, AJs:0.0007, AQs:0.3751, AKs:0.2999, AA:0.3956"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0011, 88:0.4054, 99:0.0080, TT:0.2365, JJ, QQ, KK, AKo:0.0307, A8s:0.0005, ATs:0.0032, AJs:0.0292, AQs:0.9941, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0008, JJ:0.0015, QQ:0.7095, KK:0.9231, AKo:0.0117, AKs:0.2092, AA:0.4088"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0001, 88:0.0014, TT:0.0001, JJ:0.0001, QQ:0.0050, KK:0.5263, AKo:0.0003, A3s:0.0001, A7s:0.0017, ATs:0.0011, AJs:0.0003, AQs:0.0146, AKs:0.2225, AA:0.5622"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0007, 99:0.0019, TT:0.0005, JJ:0.0572, QQ:0.0042, KK:0.2060, AKo:0.0216, A7s:0.0012, ATs:0.0023, AJs:0.0006, AQs:0.0087, AKs:0.6097, AA:0.4378"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@11",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, JJ:0.0005, QQ:0.0004, KQo:0.0001, AQo:0.0091, KK:0.0017, AKo:0.0001, A3s:0.0001, A4s:0.0001, A5s:0.0015, A8s:0.0001, ATs:0.0003, AQs:0.0030, AA:0.0004"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "A8o:0.0106, 99:0.0055, TT:0.1951, JJ:0.0297, AJo:0.0193, QJs:0.0001, QQ:0.4009, KQo:0.0019, AQo:0.1957, KTs:0.0030, KJs:0.0331, KQs:0.0034, KK:0.7789, AKo:0.2710, A3s:0.0257, A4s:0.1312, A5s:0.2203, A6s:0.0008, A7s:0.0015, A8s:0.1831, A9s:0.0008, ATs:0.3520, AJs:0.0003, AQs:0.7329, AKs:0.2996, AA:0.4084"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0001, 88:0.0172, 99:0.0051, TT:0.1937, JJ:0.6501, QQ:0.7827, KK, AKo:0.0307, A6s:0.0010, A8s:0.0001, AJs:0.0001, AQs:0.0016, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0018, JJ:0.0001, QQ:0.0229, KK:0.9231, AKo:0.2826, AKs:0.2887, AA:0.4088"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "JJ:0.0885, QQ:0.0081, AA:0.3690"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0459, 32s:0.0013, 43o:0.0001, 42s:0.0002, 43s:0.0047, 44:0.0686, K4o:0.0118, 53s:0.0021, 54s:0.0034, Q5o:0.0004, K5o:0.0522, 63s:0.0019, 64s:0.0036, 65s:0.0850, 66:0.1323, K6o:0.0323, 77:0.1397, 97o:0.0011, K7o:0.0510, 86s:0.0005, 87s:0.0201, 88:0.1972, 98o:0.0004, 93s:0.0048, 96s:0.1227, 98s:0.0293, 99:0.0600, Q9o:0.0014, T6s:0.0002, T7s:0.0073, TT:0.0466, QTo:0.0009, J4s:0.0014, JTs:0.0001, JJ:0.0110, KJo:0.0094, Q2s:0.0057, Q3s:0.0008, Q7s:0.0002, Q8s:0.0023, Q9s:0.0004, QTs:0.0059, QJs:0.0025, QQ:0.0293, KQo:0.0716, K2s:0.0003, K4s:0.0712, K5s:0.1306, K6s:0.1002, K7s:0.0648, K8s:0.0087, K9s:0.0237, KTs:0.2427, KQs:0.0919, KK, AKo:0.8386, A3s:0.0004, A4s:0.0021, A5s:0.0060, A8s:0.1281, AJs:0.0111, AQs:0.0580, AKs:0.9856, AA:0.6310"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.0013, 33:0.0033, 43s:0.0001, 44:0.0033, 52s:0.0048, 54s:0.0008, 55:0.0357, 66:0.0003, K6o:0.0011, 74s:0.0001, 77:0.0011, 84s:0.0007, 85s:0.0003, 88:0.0448, 92s:0.0007, 94s:0.0002, 95s:0.0007, 97s:0.0015, 99:0.0010, A9o:0.0001, T3s:0.0003, T7s:0.0018, TT:0.0977, JTo:0.0014, QTo:0.0001, J2s:0.0015, J3s:0.0065, J4s:0.0012, J8s:0.0008, J9s:0.0036, JTs:0.0549, JJ:0.0185, Q3s:0.0021, Q6s:0.0005, Q8s:0.0039, QTs:0.0067, QJs:0.1272, QQ:0.2216, KQo:0.0190, AQo:0.0034, K2s:0.0098, K3s:0.0249, K4s:0.0014, K6s:0.0003, K7s:0.0043, K9s:0.0053, KTs:0.0001, KQs:0.0009, KK:0.0218, AKo:0.0152, A3s:0.0118, A4s:0.0017, A7s:0.0114, A8s:0.0151, A9s:0.0001, ATs:0.0001, AJs:0.0136, AQs:0.0016, AKs:0.0288, AA:0.1918"
      },
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "22:0.4028, K2o:0.0001, 32s:0.0071, 33:0.0596, Q3o:0.0008, A3o:0.0006, 43s:0.0006, 44:0.1495, 54o:0.0004, K4o:0.0040, 52s:0.0490, 53s:0.3208, 54s:0.0358, 55:0.1229, 65o:0.0001, K5o:0.0026, A5o:0.0026, 63s:0.0007, 64s:0.0773, 65s:0.0630, 66:0.2495, 72s:0.0422, 74s:0.0794, 75s:0.2979, 76s:0.2057, 77:0.1305, 87o:0.0047, K7o:0.0002, A7o:0.0017, 84s:0.0330, 85s:0.0022, 86s:0.0001, 87s:0.0030, 88:0.0794, K8o:0.0352, A8o:0.0067, 92s:0.0044, 93s:0.0001, 95s:0.0006, 96s:0.0023, 97s:0.4255, 98s:0.0352, 99:0.2442, K9o:0.0530, A9o:0.0063, T2s:0.0001, T5s:0.0014, T6s:0.0248, T7s:0.0438, T8s:0.0261, T9s:0.0411, TT:0.1073, QTo:0.0009, KTo:0.0381, J2s:0.0001, J3s:0.0034, J4s:0.0012, J5s:0.0057, J6s:0.0001, J8s:0.4090, J9s:0.0042, JTs:0.5653, JJ:0.8250, KJo:0.2492, AJo:0.0020, Q3s:0.0511, Q4s:0.0005, Q5s:0.0086, Q6s:0.0027, Q7s:0.0013, Q8s:0.0100, Q9s:0.0046, QTs:0.0127, QJs:0.4607, QQ:0.7550, KQo:0.3264, AQo:0.0012, K2s:0.3381, K3s:0.2751, K4s:0.1415, K5s:0.4535, K6s:0.0737, K7s:0.2251, K8s:0.0793, K9s:0.3541, KTs:0.5961, KJs:0.3497, KQs:0.6593, KK:0.9782, AKo:0.9677, A2s:0.0823, A3s:0.2421, A4s:0.0479, A5s:0.0598, A6s:0.3294, A7s:0.0254, A8s:0.0523, A9s:0.0070, ATs:0.0629, AJs:0.0826, AQs:0.0685, AKs:0.9669, AA:0.8082"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0005, 65s:0.0004, 73s:0.0001, 86s:0.0001, 97s:0.0003, 99:0.0003, T6s:0.0001, T7s:0.0001, TT:0.0360, J2s:0.0001, JJ:0.0004, Q2s:0.0001, Q8s:0.0001, Q9s:0.0001, QJs:0.0002, QQ:0.3187, AQo:0.0001, K2s:0.0002, K3s:0.0002, K4s:0.0001, K6s:0.0001, K7s:0.0004, K9s:0.0001, KK, AKo:0.3984, A6s:0.0002, A7s:0.0007, A8s:0.0056, AJs:0.0006, AQs:0.0014, AKs:0.7332, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "66:0.0001, 77:0.0132, 88:0.2669, 99:0.0029, TT:0.2343, ATo:0.0308, JJ:0.9642, AJo:0.0918, QQ:0.9816, KQo:0.0001, KK:0.9900, AKo:0.0303, A7s:0.0026, A8s:0.0065, ATs:0.0214, AJs:0.7607, AQs:0.7248, AKs:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0174, QQ:0.0184, KK:0.0100, AKo:0.0004, ATs:0.0001, AJs:0.0032, AQs:0.2279, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|LJ:4BET@11.36",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0087, JJ:0.0154, QQ:0.0004, KQo:0.0101, AQo:0.0030, KTs:0.0152, KJs:0.0391, KQs:0.0005, KK:0.0769, AKo:0.0250, A2s:0.0002, A3s:0.0602, A4s:0.0612, A5s:0.0521, A6s:0.0078, A7s:0.0122, A8s:0.0117, A9s:0.0002, ATs:0.0007, AQs:0.0158, AKs:0.0182"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 88:0.0017, A9o:0.0002, KTo:0.0001, JJ:0.0017, QJo:0.0001, KJo:0.0001, QQ:0.0241, KQo:0.0010, KK:0.9535, AKo:0.0001, A4s:0.0001, A6s:0.0016, A7s:0.0016, A8s:0.0012, ATs:0.0001, AJs:0.0096, AQs:0.0014, AKs:0.0110, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|BB:4BET@14.93",
    "heroPos": "CO",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0087, JJ:0.0154, QQ:0.0004, KQo:0.0001, AQo:0.0012, KTs:0.0152, KJs:0.0391, KQs:0.0004, KK:0.0769, AKo:0.0250, A2s:0.0002, A3s:0.0602, A4s:0.0612, A5s:0.0521, A6s:0.0078, A7s:0.0122, A8s:0.0117, A9s:0.0002, ATs:0.0007, AQs:0.0158, AKs:0.0182"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|SB:4BET@15",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0050, 88:0.2504, A9o:0.0003, TT:0.2242, KTo:0.0002, ATo:0.0004, JJ:0.9176, QJo:0.0004, KJo:0.0055, AJo:0.0085, QQ:0.9949, KQo:0.0003, KK:0.9983, AKo:0.0077, A2s:0.0006, A3s:0.0499, A4s:0.0001, A6s:0.0692, A7s:0.0039, A8s:0.3140, ATs:0.0068, AJs:0.0284, AQs:0.5183, AKs:0.0162, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|SB:4BET@15",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0018, JJ:0.0058, KTs:0.0004, KJs:0.0019, KK:0.0175, AKo:0.0054, A3s:0.0003, A4s:0.0001, A5s:0.0073, A7s:0.0012, A8s:0.0013, AQs:0.0066, AKs:0.0078"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0047, JJ:0.0088, QQ:0.0004, AQo:0.0013, KTs:0.0003, KJs:0.0040, KK:0.0594, AKo:0.0114, A3s:0.0011, A4s:0.0044, A5s:0.0033, A7s:0.0044, A8s:0.0029, A9s:0.0001, ATs:0.0003, AQs:0.0074, AKs:0.0077"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|SB:4BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.1007, 99:0.0014, TT:0.0708, JJ:0.9982, QQ:0.9998, KQo:0.0001, KK, AKo:0.0045, A3s:0.0099, A4s:0.0005, ATs:0.0054, AJs:0.0098, AQs:0.0051, AKs:0.3257, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 28.57,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0015, JJ:0.0154, QQ:0.0004, KK:0.0769, AKo:0.0073, AQs:0.0006, AKs:0.0182"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|BTN:4BET@15",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0028, 88:0.0344, A8o:0.0008, 99:0.0001, A9o:0.0156, TT:0.0341, ATo:0.0040, JJ:0.0422, QJo:0.0005, KJo:0.0064, AJo:0.0047, QQ:0.4171, KQo:0.0335, K9s:0.0003, KK:0.2738, AKo:0.0061, A2s:0.0001, A3s:0.0188, A4s:0.0100, A6s:0.0096, A7s:0.2158, A8s:0.0809, ATs:0.0022, AJs:0.0685, AQs:0.4302, AKs:0.7746, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|BTN:4BET@15",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0038, JJ:0.0019, QQ:0.0001, KQo:0.0045, AQo:0.0019, KTs:0.0062, KJs:0.0121, KQs:0.0002, KK:0.0233, AKo:0.0173, A2s:0.0001, A3s:0.0436, A4s:0.0408, A5s:0.0369, A6s:0.0053, A7s:0.0085, A8s:0.0073, A9s:0.0001, ATs:0.0005, AQs:0.0113, AKs:0.0115"
      },
      {
        "action": "5bet 24.75bb",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0010, QQ:0.0002, AQo:0.0002, KJs:0.0007, KK:0.0258, AKo:0.0021, A3s:0.0056, A4s:0.0072, A5s:0.0038, A6s:0.0005, A7s:0.0013, A8s:0.0006, ATs:0.0001, AQs:0.0014, AKs:0.0011"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|BTN:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0067, 88:0.4989, 99:0.0054, A9o:0.0001, TT:0.1637, ATo:0.0002, JJ:0.6152, KJo:0.0001, AJo:0.0001, QQ:0.7809, KQo:0.0001, KK:0.9898, AKo:0.0224, A3s:0.0002, A4s:0.0001, A6s:0.1125, A7s:0.0026, A8s:0.0003, ATs:0.0001, AJs:0.0536, AQs:0.0268, AKs:0.9309, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@8.5|BTN:4BET@24.75",
    "heroPos": "CO",
    "eff": 25.0,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0020, JJ:0.0044, QQ:0.0001, KK:0.0769, AKo:0.0230, AKs:0.0182"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0017, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0002, 88:0.0013, 99:0.0338, TT:0.0973, JJ, QQ, AQo:0.0002, KK, AKo:0.9990, AJs:0.0002, AQs:0.0004, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0065, QQ:0.9997, KK, AKo:0.9810, AQs:0.0001, AKs:0.9787, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0037, 88:0.5392, 99:0.0080, TT:0.2365, JJ, QQ, KK, AKo:0.0307, AJs:0.1126, AQs:0.8957, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32|BB:CALL@13.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0004, KK:0.9948, AKs:0.0018, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32|SB:CALL@27.82",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0111, AQs:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@28.32|BTN:CALL@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "ATo:0.0001, KJo:0.0001, KK:0.0001, A8s:0.0001, AJs:0.0002, AQs:0.0005, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0183, K3o:0.0016, A3o:0.0021, 44:0.0099, A4o:0.0023, 54s:0.0041, K5o:0.0213, A5o:0.0954, 65s:0.0009, K6o:0.0100, A6o:0.0198, 74s:0.0003, 75s:0.0116, 76s:0.0021, A7o:0.0054, A8o:0.1856, 99:0.1758, A9o:0.0003, TT:0.0697, ATo:0.0018, JJ:0.0103, AJo:0.0003, Q4s:0.0002, Q8s:0.0112, Q9s:0.0020, QQ:0.8862, KQo:0.2978, AQo:0.7785, K2s:0.2652, K3s:0.0719, K4s:0.0206, K5s:0.0272, K6s:0.0755, K7s:0.0118, K8s:0.0065, K9s:0.3025, KQs:0.7805, KK:0.9242, AKo:0.8291, A2s:0.1311, A3s:0.3520, A4s:0.0207, A5s:0.0197, A6s:0.0038, A7s:0.3232, A8s:0.5933, A9s:0.0662, ATs:0.4877, AJs:0.1960, AQs:0.4926, AKs:0.8030, AA:0.6954"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "A3o:0.0069, 54s:0.0002, 66:0.0001, A6o:0.0001, 74s:0.0001, 75s:0.0006, 87s:0.0001, TT:0.0095, ATo:0.0033, J7s:0.0001, JJ:0.0141, Q3s:0.0044, QQ:0.0894, AQo:0.0234, K6s:0.0113, K9s:0.0414, KTs:0.0064, KQs:0.0441, KK:0.0677, AKo:0.0917, A2s:0.0190, A3s:0.1524, A4s:0.1370, A5s:0.0048, A7s:0.0147, A8s:0.0128, A9s:0.0202, ATs:0.1447, AJs:0.0186, AQs:0.0300, AKs:0.0045, AA:0.3029"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0007, 43s:0.0001, 54s:0.0013, 63s:0.0003, 64s:0.0017, 65s:0.0008, 66:0.0001, 77:0.0001, 87s:0.0002, 88:0.0003, 98s:0.0016, T4s:0.0009, Q3s:0.0003, QTs:0.0002, QQ:0.0228, K4s:0.0017, KTs:0.0015, KJs:0.0002, KQs:0.0001, KK:0.0080, AKo:0.0775, A3s:0.0022, A4s:0.0157, A5s:0.0058, A6s:0.0047, A8s:0.2297, ATs:0.0097, AJs:0.0205, AQs:0.4305, AKs:0.1913, AA:0.0017"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 5bb",
      "3bet 8.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0416, A3o:0.0669, 44:0.0051, K4o:0.0026, A4o:0.0175, 55:0.0004, A5o:0.0233, 65s:0.0109, A6o:0.0424, 88:0.0089, A8o:0.0033, 99:0.2402, T3s:0.0006, T8s:0.0025, TT:0.4257, KTo:0.0364, JJ:0.0007, Q3s:0.0009, QQ:0.8842, KQo:0.1935, AQo:0.4066, K5s:0.0056, KTs:0.0120, KJs:0.3413, KQs:0.3354, KK:0.8526, AKo:0.8143, A2s:0.2125, A3s:0.0048, A4s:0.0529, A5s:0.0010, A6s:0.2848, A7s:0.1974, A8s:0.4346, A9s:0.5226, ATs:0.2768, AJs:0.0301, AQs:0.8131, AKs:0.7024, AA:0.4836"
      },
      {
        "action": "3bet 8.5bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0278, A6o:0.0045, TT:0.0714, AJo:0.0014, Q7s:0.0003, QQ:0.1036, AQo:0.1594, KK:0.0985, AKo:0.1390, A2s:0.2629, A3s:0.0087, A4s:0.0953, A5s:0.0474, A6s:0.0435, A7s:0.0434, A8s:0.0399, A9s:0.0479, ATs:0.0276, AJs:0.0078, AQs:0.0639, AKs:0.2237, AA:0.5161"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "73s:0.0001, 77:0.0001, T4s:0.0001, T8s:0.0002, J9s:0.0001, AJo:0.0007, QQ:0.0007, AQo:0.0065, KQs:0.0001, KK:0.0488, AKo:0.0427, A2s:0.0155, A3s:0.0006, A4s:0.0198, A5s:0.0027, A6s:0.0527, A7s:0.0360, A8s:0.0673, A9s:0.0431, ATs:0.0023, AJs:0.0086, AQs:0.0056, AKs:0.0695, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 6bb",
      "3bet 9bb",
      "3bet 22.96bb"
    ],
    "bands": [
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0127, K2o:0.0290, A2o:0.1675, 33:0.0003, 44:0.0207, A4o:0.1415, 53s:0.0188, 55:0.0292, A5o:0.6652, 65s:0.1078, 66:0.0248, A6o:0.0498, 75s:0.0002, 76s:0.0002, 77:0.0357, A7o:0.1444, 84s:0.0050, 85s:0.0140, 86s:0.0267, 87s:0.0283, 88:0.0209, T8o:0.0001, K8o:0.0013, A8o:0.0701, 94s:0.0021, 96s:0.0013, 98s:0.0074, 99:0.1847, K9o:0.0041, A9o:0.0370, T5s:0.0011, T6s:0.0001, T8s:0.0001, TT:0.3693, KTo:0.1382, ATo:0.0790, J3s:0.0006, J4s:0.0001, JTs:0.0013, JJ:0.7153, AJo:0.0722, Q2s:0.0044, Q3s:0.0001, Q4s:0.0404, Q5s:0.0004, Q6s:0.0024, Q7s:0.0001, QTs:0.4876, QJs:0.0819, QQ:0.9926, KQo:0.6927, AQo:0.2364, K2s:0.2479, K3s:0.1548, K4s:0.4307, K5s:0.6237, K6s:0.1419, K7s:0.6837, K8s:0.0162, K9s:0.8227, KTs:0.5680, KJs:0.3810, KQs:0.1871, KK:0.9405, AKo:0.9574, A2s:0.4495, A3s:0.3864, A4s:0.2957, A5s:0.0203, A6s:0.5245, A7s:0.4731, A8s:0.3894, A9s:0.3763, ATs:0.2956, AJs:0.1490, AQs:0.0282, AKs:0.7373, AA:0.9229"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0219, A2o:0.0078, 33:0.0006, 42s:0.0001, 44:0.0044, A4o:0.0631, 52s:0.0002, 53s:0.0013, A5o:0.0071, A6o:0.0040, 75s:0.0023, 76s:0.0001, 77:0.0002, 82s:0.0001, 85s:0.0007, 86s:0.0018, 87s:0.0030, 88:0.0143, 96s:0.0001, 97s:0.0001, 99:0.0618, J9o:0.0010, A9o:0.0089, T5s:0.0008, T7s:0.0001, T8s:0.0006, T9s:0.0002, TT:0.2320, KTo:0.0017, ATo:0.0038, JTs:0.0028, JJ:0.1933, AJo:0.0043, Q5s:0.0200, Q6s:0.0005, Q8s:0.0010, QTs:0.0030, QQ:0.0063, KQo:0.0006, AQo:0.1061, K2s:0.0005, K3s:0.1025, K4s:0.0212, K5s:0.0113, K6s:0.0254, K7s:0.0008, KTs:0.0951, KJs:0.0124, KQs:0.0192, KK:0.0575, AKo:0.0123, A2s:0.0909, A3s:0.0018, A4s:0.0573, A5s:0.0035, A6s:0.0195, A7s:0.0938, A8s:0.0007, A9s:0.0422, ATs:0.2028, AJs:0.0637, AQs:0.3688, AKs:0.1690, AA:0.0757"
      },
      {
        "action": "3bet 22.96bb",
        "min": 0.0001,
        "range": "22:0.0198, A2o:0.0001, 42s:0.0005, 43s:0.0001, 44:0.0902, A4o:0.0951, A5o:0.0642, 64s:0.0002, 65s:0.1327, 66:0.0617, A6o:0.0041, 72s:0.0001, 75s:0.0021, 76s:0.0002, 77:0.0002, 85s:0.0006, 86s:0.1012, 87s:0.0952, 88:0.2287, 94s:0.0016, 97s:0.0008, 99:0.6826, Q9o:0.0004, A9o:0.0019, T2s:0.0002, T6s:0.0007, T8s:0.0007, TT:0.3050, KTo:0.0001, J4s:0.0001, J6s:0.0002, JTs:0.0044, JJ:0.0883, AJo:0.0650, Q2s:0.0003, Q3s:0.0003, Q4s:0.0064, Q5s:0.0002, QTs:0.1217, QJs:0.1345, QQ:0.0010, AQo:0.6471, K2s:0.0001, K3s:0.0030, K5s:0.0050, K6s:0.0098, K7s:0.0005, K8s:0.0004, K9s:0.0017, KTs:0.0060, KJs:0.2258, KQs:0.7838, KK:0.0020, AKo:0.0303, A2s:0.1642, A3s:0.0592, A4s:0.4676, A5s:0.4221, A6s:0.3066, A7s:0.3244, A8s:0.6086, A9s:0.1229, ATs:0.4000, AJs:0.6708, AQs:0.6018, AKs:0.0933, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9909, 33:0.9058, 43s:0.0004, 44:0.9870, 52s:0.0008, 53s:0.1523, 54s:0.5112, 55:0.9513, 65o:0.1777, 63s:0.0089, 64s:0.9184, 65s:0.1663, 66:0.9783, T6o:0.0001, 73s:0.0180, 75s:0.0610, 76s:0.1305, 77:0.9901, A7o:0.0001, 82s:0.0009, 85s:0.1201, 86s:0.2850, 87s:0.0966, 88:0.9832, 92s:0.0014, 95s:0.0090, 96s:0.3990, 97s:0.1132, 98s:0.0876, 99:0.8127, T5s:0.0001, T6s:0.0915, T7s:0.0659, T9s:0.0003, TT:0.6486, J8s:0.0004, JJ:0.9467, Q3s:0.0010, Q4s:0.0012, Q6s:0.0003, Q7s:0.0008, Q8s:0.3310, QTs:0.0366, QJs:0.0002, QQ:0.0348, KQo:0.0297, AQo:0.8496, K2s:0.0121, K3s:0.0002, K4s:0.0288, K7s:0.1435, K9s:0.0536, KTs:0.0018, KJs:0.0001, KQs:0.9255, KK:0.0001, AKo:0.1172, A2s:0.0077, A4s:0.0036, A5s:0.1012, A6s:0.0008, A8s:0.0003, A9s:0.0010, AJs:0.3923, AQs:0.8542, AKs:0.0084"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0040, A3o:0.0070, 43s:0.0002, A4o:0.0036, 54s:0.0002, 55:0.0001, A5o:0.0007, 75s:0.0017, A7o:0.0001, 82s:0.0033, 86s:0.0023, 88:0.0001, A8o:0.0001, 92s:0.0002, 96s:0.0010, 97s:0.0008, 99:0.0819, T8s:0.0001, TT:0.1077, ATo:0.0074, JJ:0.0049, AJo:0.0164, Q5s:0.0007, Q9s:0.0007, QQ:0.5562, KQo:0.0132, AQo:0.1130, K3s:0.1282, K4s:0.0017, K6s:0.0368, K7s:0.0117, K8s:0.2572, K9s:0.0346, KTs:0.0095, KQs:0.0024, KK:0.2053, AKo:0.4588, A2s:0.1100, A3s:0.1917, A4s:0.0811, A5s:0.1307, A6s:0.1192, A7s:0.0991, A8s:0.0230, A9s:0.0016, ATs:0.1861, AQs:0.0346, AKs:0.2920, AA:0.9919"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, 53s:0.0001, 54s:0.0005, 55:0.0002, 66:0.0001, 73s:0.0001, 86s:0.0009, 88:0.0001, 95s:0.0002, 98s:0.0038, T2s:0.0001, T6s:0.0001, T7s:0.0002, T8s:0.0001, TT:0.2183, ATo:0.0002, J8s:0.0008, JJ:0.0482, KJo:0.0004, AJo:0.0003, QTs:0.0004, QJs:0.0010, QQ:0.4090, AQo:0.0354, K3s:0.0002, K4s:0.0016, K7s:0.0350, K9s:0.0113, KTs:0.0443, KJs:0.0009, KQs:0.0465, KK:0.7946, AKo:0.4227, A2s:0.3115, A3s:0.2905, A4s:0.3141, A5s:0.1028, A6s:0.1254, A7s:0.2165, A8s:0.0005, A9s:0.0004, ATs:0.1998, AJs:0.0273, AQs:0.1098, AKs:0.6993, AA:0.0080"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0019, 88:0.0056, 99:0.0001, TT:0.0034, ATo:0.0001, JJ:0.0652, AJo:0.0007, QQ:0.1243, KK:0.0751, A3s:0.0034, A4s:0.0001, A7s:0.0003, A8s:0.0010, ATs:0.0183, AQs:0.0325, AKs:0.0222, AA:0.0161"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0001, 77:0.0003, 88:0.2045, 99:0.0007, TT:0.0071, ATo:0.0026, JJ:0.0288, AJo:0.0012, QQ:0.8672, KK:0.9246, AKo:0.0306, A2s:0.0001, A3s:0.0055, A4s:0.0001, A6s:0.0258, A7s:0.0001, A8s:0.0006, ATs:0.0222, AJs:0.1198, AQs:0.6321, AKs:0.9701, AA:0.9838"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@5",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "4bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0213, 66:0.0004, 76s:0.0001, 88:0.0003, 99:0.0083, TT:0.1061, JJ:0.0706, AJo:0.0006, KQo:0.0022, AQo:0.0008, KJs:0.0001, KQs:0.0524, A5s:0.0004, ATs:0.0907, AJs:0.5109, AQs:0.0299, AKs:0.0001, AA:0.1391"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "65s:0.0082, 66:0.0026, 88:0.0004, 99:0.0309, TT:0.0046, JJ:0.0020, AJo:0.0003, AQo:0.0011, KJs:0.0001, KQs:0.0225, AKo:0.0290, A5s:0.0033, ATs:0.0059, AJs:0.1072, AQs:0.0154, AKs:0.0909, AA:0.0851"
      },
      {
        "action": "4bet 14.93bb",
        "min": 0.0001,
        "range": "65s:0.0008, 66:0.0001, 88:0.0001, 99:0.0046, TT:0.0203, JJ:0.0047, AJo:0.0011, KJs:0.0014, KQs:0.0430, AKo:0.0053, A5s:0.0004, ATs:0.0392, AJs:0.0208, AQs:0.0070, AKs:0.0156, AA:0.0840"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0162, JJ:0.0096, QQ:0.9952, KK:0.9997, AKo:0.0300, A7s:0.0001, AQs:0.0267, AKs:0.9359, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0016, 88:0.0004, 99:0.0187, TT:0.2030, JJ:0.0866, AJo:0.0002, AKo:0.0343, AJs:0.0001, AQs:0.0016, AKs:0.1066, AA:0.3081"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0274, 99:0.0039, TT:0.0066, ATo:0.0012, JJ:0.6957, QQ:0.4125, KK:0.0163, AKo:0.0120, A3s:0.0031, ATs:0.0115, AJs:0.0004, AQs:0.5938, AKs:0.6126, AA:0.1132"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0440, 99:0.0014, TT:0.2299, ATo:0.0006, JJ:0.3043, AJo:0.0001, QQ:0.5875, KK:0.9837, AKo:0.0187, A7s:0.0006, A8s:0.0001, ATs:0.0002, AQs:0.1627, AKs:0.3863, AA:0.8868"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, AQo:0.0001, KJs:0.0001, KQs:0.0014, ATs:0.0005, AJs:0.0108, AQs:0.0073, AKs:0.0001, AA:0.0006"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0372, JJ:0.0004, AJo:0.0231, KQo:0.0001, AQo:0.0001, KJs:0.0003, KQs:0.0005, A5s:0.0002, ATs:0.0038, AJs:0.0939, AQs:0.0044, AA:0.3016"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0003, 88:0.0001, TT:0.1150, JJ:0.0862, KQo:0.0011, AQo:0.0002, KJs:0.0027, KQs:0.0974, AKo:0.0342, ATs:0.0002, AJs:0.0187, AQs:0.0383, AKs:0.1065, AA:0.0059"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@9",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0061, 88:0.1265, 99:0.0008, TT:0.1559, JJ:0.4300, AJo:0.0112, QQ:0.0608, KK:0.9560, AKo:0.0304, A7s:0.0248, ATs:0.0008, AJs:0.0039, AQs:0.3374, AKs:0.2200, AA:0.1162"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.0697, TT:0.0684, JJ:0.5011, QJo:0.0002, AJo:0.0002, QQ:0.9390, KQo:0.0002, KK:0.0440, AKo:0.0003, A3s:0.0001, A6s:0.0005, A8s:0.0001, ATs:0.0001, AJs:0.0010, AQs:0.2728, AKs:0.7208, AA:0.8838"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@9",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 16bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0010, JJ:0.0011, ATs:0.0001, AJs:0.0006, AQs:0.0034, AKs:0.0001, AA:0.0101"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "99:0.0011, TT:0.1669, JJ:0.0250, AJo:0.0010, AQo:0.0010, AKo:0.0227, AJs:0.1316, AQs:0.0293, AKs:0.0745, AA:0.2105"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0072, TT:0.0256, JJ:0.0573, AJo:0.0006, KQo:0.0005, AQo:0.0001, KJs:0.0006, KQs:0.0285, AKo:0.0115, AJs:0.0238, AQs:0.0060, AKs:0.0317, AA:0.0875"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@22.96",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0034, 88:0.2832, 99:0.0080, TT:0.2363, ATo:0.0006, JJ:0.9993, AJo:0.0368, QQ:0.9998, KK, AKo:0.0307, A6s:0.0009, A8s:0.0106, ATs:0.0053, AJs:0.0454, AQs:0.9914, AKs:0.9963, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@22.96",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0535, JJ:0.0842, AJs:0.0001, AKs:0.0012, AA:0.3081"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0094, A9o:0.0001, TT:0.0007, JJ:0.2884, QQ:0.1225, KK:0.0058, AKo:0.0002, A3s:0.0048, A4s:0.0003, A6s:0.0027, A7s:0.0001, A8s:0.0038, ATs:0.0002, AJs:0.0513, AQs:0.8159, AKs:0.0066, AA:0.3196"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.2500, 99:0.0056, TT:0.1829, ATo:0.0004, JJ:0.6411, AJo:0.0021, QQ:0.8766, KK:0.9942, AKo:0.0305, A6s:0.0001, A7s:0.0545, A8s:0.0018, ATs:0.0005, AJs:0.0313, AQs:0.1101, AKs:0.9933, AA:0.6804"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0055, 66:0.0015, 88:0.0003, TT:0.0372, JJ:0.0272, KJs:0.0030, KQs:0.0379, AKo:0.0013, ATs:0.0474, AJs:0.0158, AQs:0.0486, AKs:0.0004, AA:0.0068"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0664, JJ:0.0268, AJo:0.0500, KQo:0.0029, AQo:0.0017, KJs:0.0031, KQs:0.0128, AKo:0.0215, A5s:0.0024, ATs:0.0084, AJs:0.1321, AQs:0.0016, AKs:0.0536, AA:0.2957"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, AJo:0.0001, KQs:0.0001, AKo:0.0114, ATs:0.0002, AJs:0.0013, AQs:0.0001, AKs:0.0526, AA:0.0056"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@8.5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0051, 88:0.1164, 99:0.0025, TT:0.0379, ATo:0.0001, JJ:0.3295, KJo:0.0002, AJo:0.0015, QQ:0.6545, KQo:0.0001, KK:0.7991, AKo:0.0292, A3s:0.0003, A6s:0.0001, A7s:0.0059, A8s:0.0025, AJs:0.0507, AQs:0.3157, AKs:0.3376, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0010, 88:0.0711, 99:0.0002, TT:0.0245, ATo:0.0001, JJ:0.0001, QQ:0.0856, KQo:0.0001, KK:0.1985, AKo:0.0012, A3s:0.0002, A6s:0.0001, A7s:0.0017, A8s:0.0003, AJs:0.0099, AQs:0.0026, AKs:0.6579, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@8.5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0160, TT:0.0134, JJ:0.0182, KQs:0.0395, AKo:0.0089, AJs:0.1693, AQs:0.0087, AKs:0.0090, AA:0.0410"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "66:0.0009, 88:0.0001, 99:0.0163, TT:0.0516, JJ:0.0338, AJo:0.0023, KQo:0.0026, KJs:0.0042, KQs:0.0123, AKo:0.0143, ATs:0.0034, AJs:0.0330, AQs:0.0018, AKs:0.0630, AA:0.1321"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0017, 66:0.0006, 88:0.0001, 99:0.0053, TT:0.0237, JJ:0.0064, AJo:0.0042, KJs:0.0012, KQs:0.0171, AKo:0.0110, A5s:0.0001, ATs:0.0159, AJs:0.0734, AQs:0.0031, AKs:0.0345, AA:0.1349"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0134, 88:0.5791, 99:0.0038, A9o:0.0009, TT:0.1410, ATo:0.0001, JJ:0.9118, QJo:0.0001, AJo:0.0001, QQ:0.9728, KQo:0.0001, KK, AKo:0.0285, A3s:0.0001, A4s:0.0001, A6s:0.0012, A7s:0.0379, A8s:0.0108, ATs:0.0056, AJs:0.0484, AQs:0.3136, AKs:0.9711, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0010, JJ:0.0007, AJo:0.0002, AKo:0.0313, ATs:0.0010, AJs:0.0053, AQs:0.0002, AKs:0.0831, AA:0.3081"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0017, 88:0.0076, 99:0.0019, TT:0.0374, JJ:0.1512, KJo:0.0001, AJo:0.0001, QQ:0.3362, KK:0.0027, AKo:0.0002, A2s:0.0002, A3s:0.0004, A4s:0.0001, A6s:0.0009, A7s:0.0057, A8s:0.0125, ATs:0.0381, AJs:0.0234, AQs:0.8088, AKs:0.0053, AA:0.0295"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0181, 88:0.4382, 99:0.0047, A9o:0.0003, TT:0.1987, JJ:0.5449, QQ:0.6633, KK:0.9973, AKo:0.0305, A3s:0.0001, A6s:0.0006, A7s:0.0005, A8s:0.0007, ATs:0.0001, AJs:0.0017, AQs:0.1846, AKs:0.9945, AA:0.9705"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0039, 88:0.0002, 99:0.0081, TT:0.0174, JJ:0.0402, AJo:0.0001, AQo:0.0001, KJs:0.0037, KQs:0.0191, ATs:0.0003, AJs:0.0350, AQs:0.0444, AKs:0.0045, AA:0.0002"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "65s:0.0006, 99:0.0013, TT:0.0123, JJ:0.0125, AJo:0.0590, KQo:0.0019, AQo:0.0009, KJs:0.0012, KQs:0.0157, AKo:0.0249, A5s:0.0015, ATs:0.0313, AJs:0.2144, AQs:0.0070, AKs:0.0753, AA:0.3044"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0004, 88:0.0001, 99:0.0066, TT:0.0043, JJ:0.0036, KJs:0.0001, KQs:0.0251, AKo:0.0094, ATs:0.0001, AJs:0.0029, AQs:0.0001, AKs:0.0269, AA:0.0036"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@8.5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0006, 88:0.0017, A8o:0.0004, 99:0.0022, A9o:0.0007, TT:0.0284, KTo:0.0002, ATo:0.0001, JJ:0.0601, KJo:0.0001, AJo:0.0001, QQ:0.9850, KQo:0.0005, KK:0.1475, AKo:0.0243, A3s:0.0065, A4s:0.0054, A6s:0.0094, A7s:0.0182, A8s:0.1106, ATs:0.0006, AJs:0.0085, AQs:0.4377, AKs:0.6766"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0004, A9o:0.0001, TT:0.0006, ATo:0.0002, JJ:0.0093, QJo:0.0001, QQ:0.0091, KK:0.8520, AKo:0.0055, A3s:0.0070, A4s:0.0001, A7s:0.0042, A8s:0.0008, ATs:0.0002, AJs:0.0029, AQs:0.2874, AKs:0.3208, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@8.5",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0004, JJ:0.0001, KQs:0.0002, AJs:0.0002, AQs:0.0030, AA:0.0002"
      },
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0009, 99:0.0221, TT:0.0791, JJ:0.0249, AJo:0.0184, KQo:0.0003, AQo:0.0005, KJs:0.0005, KQs:0.0017, AKo:0.0185, A5s:0.0002, ATs:0.0397, AJs:0.0066, AQs:0.0139, AKs:0.0558, AA:0.2614"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0005, 99:0.0059, TT:0.0360, JJ:0.0286, KQo:0.0015, KJs:0.0017, KQs:0.0265, AKo:0.0157, A5s:0.0002, ATs:0.0006, AJs:0.0071, AQs:0.0051, AKs:0.0505, AA:0.0465"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0327, 88:0.8390, 99:0.0050, A9o:0.0008, TT:0.1913, ATo:0.0001, JJ:0.9385, KJo:0.0003, AJo:0.0007, QQ:0.9843, KQo:0.0015, KK:0.9998, AKo:0.0299, A3s:0.0002, A6s:0.0003, A8s:0.0044, ATs:0.0070, AJs:0.0008, AQs:0.8523, AKs:0.9986, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0004, TT:0.0213, JJ:0.0023, AKo:0.0306, ATs:0.0002, AJs:0.0030, AQs:0.0059, AKs:0.0842, AA:0.3081"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "A3o:0.0037, 42s:0.0001, A5o:0.1609, A7o:0.0254, A8o:0.0006, QQ:0.0159, AQo:0.0036, K2s:0.0115, K3s:0.0688, K4s:0.0690, K5s:0.0415, K6s:0.0821, K7s:0.0024, K8s:0.0044, K9s:0.0004, KTs:0.0041, KJs:0.0006, KQs:0.0003, AKo:0.4176, A2s:0.1721, A3s:0.0811, A4s:0.0371, A5s:0.1291, A6s:0.1654, A7s:0.0106, A8s:0.0237, A9s:0.0175, ATs:0.0738, AJs:0.0075, AQs:0.0165, AKs:0.2128, AA:0.9961"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0015, A4o:0.0001, 54s:0.0003, 55:0.1606, 65s:0.0241, 66:0.2022, 74s:0.0001, 75s:0.0002, 77:0.0315, 99:0.0524, TT:0.0138, KTo:0.0008, JJ:0.0105, QQ:0.9582, K2s:0.0138, K3s:0.0048, K4s:0.0193, K5s:0.3236, K6s:0.0708, K7s:0.0270, K9s:0.0006, KTs:0.0015, KJs:0.0007, KQs:0.2819, KK, AKo:0.5824, A2s:0.3242, A3s:0.7886, A4s:0.3534, A5s:0.7988, A6s:0.4515, A7s:0.5093, A8s:0.2064, A9s:0.2787, ATs:0.1551, AJs:0.0262, AQs:0.5273, AKs:0.7872, AA:0.0039"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "K3o:0.0004, A4o:0.0417, A5o:0.0176, 66:0.0001, K9o:0.0001, A9o:0.0022, TT:0.0008, QQ:0.0953, AQo:0.0056, K4s:0.0005, K7s:0.0017, K8s:0.0040, KTs:0.0002, KK:0.0024, AKo:0.2341, A2s:0.1475, A3s:0.5136, A4s:0.0503, A5s:0.0685, A6s:0.0858, A7s:0.0392, A8s:0.0045, A9s:0.3154, ATs:0.0013, AJs:0.1069, AQs:0.0003, AKs:0.3411, AA:0.9908"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0926, 55:0.0388, 66:0.0590, 77:0.0593, 87s:0.0002, 88:0.0192, 99:0.0015, TT:0.0702, JJ:0.0049, KJo:0.0002, QQ:0.2726, K2s:0.0014, K3s:0.0052, K4s:0.0037, K5s:0.0027, K6s:0.0067, K7s:0.0068, K8s:0.0001, K9s:0.0041, KTs:0.0022, KQs:0.0005, KK:0.9976, AKo:0.7659, A2s:0.1414, A3s:0.1380, A4s:0.5232, A5s:0.5067, A6s:0.1912, A7s:0.2505, A8s:0.0121, A9s:0.2246, ATs:0.2136, AJs:0.0005, AKs:0.6587, AA:0.0092"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "4bet 22.96bb"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "33:0.0033, K3o:0.0022, 44:0.1374, K4o:0.0005, 52s:0.0001, 54s:0.0004, 55:0.0796, K5o:0.0259, A5o:0.0270, 65s:0.0011, 66:0.4385, K6o:0.0029, 75s:0.0011, 76s:0.0006, 77:0.0056, K7o:0.0163, 86s:0.0002, 87s:0.0001, 88:0.0001, K8o:0.0001, 93s:0.0001, 99:0.0614, K9o:0.0032, A9o:0.0523, TT:0.0012, KTo:0.0035, J6s:0.0001, JJ:0.8463, KJo:0.5455, AJo:0.0003, QJs:0.0001, QQ:0.4908, KQo:0.1760, AQo:0.0176, K2s:0.0172, K3s:0.4149, K4s:0.0012, K5s:0.3283, K6s:0.3068, K7s:0.4973, K8s:0.0643, K9s:0.0995, KTs:0.0187, KJs:0.7192, KQs:0.3265, KK:0.8331, AKo:0.3590, A2s:0.1482, A3s:0.2790, A4s:0.1181, A5s:0.0147, A6s:0.0281, A7s:0.1145, A8s:0.0002, A9s:0.0077, ATs:0.0005, AJs:0.0015, AQs:0.0034, AKs:0.0669, AA:0.8124"
      },
      {
        "action": "4bet 22.96bb",
        "min": 0.0001,
        "range": "44:0.0706, 53s:0.0028, 54s:0.0414, 55:0.1528, 64s:0.0003, 65s:0.0031, 66:0.4087, K6o:0.0002, 75s:0.0050, 76s:0.0087, 77:0.1254, 84s:0.0002, 86s:0.0001, 88:0.0006, K8o:0.0001, 98s:0.0001, 99:0.0039, T3s:0.0001, T7s:0.0001, TT:0.2183, ATo:0.0002, J6s:0.0001, J8s:0.0009, JTs:0.0010, JJ:0.1440, KJo:0.0004, Q5s:0.0001, QQ:0.5092, KQo:0.0192, AQo:0.2625, K3s:0.0028, K4s:0.0001, K5s:0.0643, K6s:0.0492, K7s:0.1232, K9s:0.1194, KTs:0.0218, KJs:0.2710, KQs:0.5968, KK:0.1669, AKo:0.6410, A2s:0.6359, A3s:0.7136, A4s:0.8602, A5s:0.9615, A6s:0.1782, A7s:0.4770, A8s:0.2264, A9s:0.4570, ATs:0.4195, AJs:0.9198, AQs:0.9845, AKs:0.9331, AA:0.1876"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 11bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "55:0.0389, 66:0.0296, 99:0.0001, TT:0.0472, JJ:0.0624, QQ:0.7911, KK:0.3603, AKo:0.4989, A3s:0.0721, ATs:0.0018, AJs:0.0006, AQs:0.0013, AKs:0.4781, AA:0.2277"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0003, 66:0.1746, TT:0.0003, JJ:0.9299, QQ:0.2084, K3s:0.0001, KJs:0.0054, KQs:0.0001, KK:0.6397, AKo:0.5011, A2s:0.0033, A3s:0.1262, A4s:0.0711, A5s:0.0047, A6s:0.0011, A8s:0.0003, A9s:0.0005, ATs:0.0005, AJs:0.1413, AQs:0.0205, AKs:0.5219, AA:0.7723"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0002, KK:0.0002, A7s:0.0001, A8s:0.0001, AJs:0.0029"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0345, 88:0.7569, 99:0.0080, TT:0.2365, JJ, QQ, KK:0.9998, AKo:0.0307, A6s:0.0007, ATs:0.0001, AJs:0.4087, AQs:0.9971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|LJ:4BET@11.36",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0008, TT:0.6521, JJ:0.8801, QQ:0.9889, AQo:0.9972, KJs:0.0585, KQs:0.5097, KK:0.9859, AKo:0.8883, A8s:0.0009, ATs:0.4665, AJs:0.0002, AQs:0.9451, AKs:0.8156, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "QQ:0.2457, KK:0.0251, AKs:0.0466, AA:0.2007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.1317, KK:0.9545, AKs:0.3707, AA:0.7993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@11",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A8o:0.0001, 99:0.0004, TT:0.4216, JJ:0.5810, QQ:0.7924, AQo:0.0006, K8s:0.0024, KQs:0.0020, KK:0.7134, AKo:0.5976, A8s:0.0002, ATs:0.0001, AQs:0.0940, AKs:0.7525"
      },
      {
        "action": "5bet 14.93bb",
        "min": 0.0001,
        "range": "TT:0.0681, JJ:0.0568, QQ:0.1965, KQo:0.0002, AQo:0.0008, K8s:0.0010, KQs:0.0009, KK:0.2725, AKo:0.2907, A8s:0.0002, ATs:0.0004, AQs:0.0206, AKs:0.0631, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.3075, KK, AKs:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.2230, JJ:0.8781, QQ:0.9889, KQo:0.0001, AQo:0.0033, KJs:0.0001, KQs:0.0001, KK:0.9859, AKo:0.8883, A8s:0.0002, ATs:0.0001, AQs:0.0016, AKs:0.8156, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0002, JJ:0.0020, QQ:0.0355, KK:0.0982, AKo:0.0002, AJs:0.0003, AQs:0.0004, AKs:0.0941, AA:0.0233"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0128, JJ:0.5494, QQ:0.9609, KK:0.9018, AKo:0.0274, AJs:0.0005, AKs:0.9011, AA:0.9767"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@11",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0004, JJ:0.0008, AQo:0.0001, KK:0.0305, ATs:0.0008, AQs:0.0040"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.2952, JJ:0.8217, QQ:0.9889, AQo:0.0002, KQs:0.0001, KK:0.9554, AKo:0.5730, ATs:0.0002, AQs:0.0413, AKs:0.8027, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@22.96",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0482, 99:0.0007, TT:0.1749, JJ:0.9969, AJo:0.0001, QQ, KK, AKo:0.0307, A7s:0.0003, AJs:0.0197, AQs:0.3615, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@22.96",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1229, JJ:0.5436, QQ:0.9889, KK:0.9859, AKo:0.5076, AQs:0.0003, AKs:0.7939, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0010, ATo:0.0001, JJ:0.0010, QQ:0.0044, KK:0.3774, AKo:0.0008, A3s:0.0011, A4s:0.0001, A7s:0.0001, AJs:0.0257, AQs:0.0009, AKs:0.2790, AA:0.5509"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0003, JJ:0.1493, QQ:0.1256, KK:0.2658, AKo:0.0148, AJs:0.0815, AQs:0.1828, AKs:0.6281, AA:0.4491"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@11",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0229, JJ:0.1013, QQ:0.3130, KQo:0.0005, AQo:0.0017, KQs:0.0002, KK:0.0004, AKo:0.0009, A8s:0.0005, ATs:0.0081, AQs:0.3049, AKs:0.0015, AA:0.0264"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8o:0.0083, TT:0.0123, JJ:0.1489, KJo:0.0001, QQ:0.2684, KQo:0.0004, AQo:0.0529, K8s:0.0008, KJs:0.0002, KQs:0.0030, KK:0.9096, AKo:0.8235, A8s:0.0578, ATs:0.1039, AQs:0.3505, AKs:0.8124, AA:0.6655"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.1012, 99:0.0029, TT:0.1381, JJ:0.8655, QQ:0.7851, KK, AKo:0.0307, A3s:0.0001, A8s:0.0002, AJs:0.0004, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0011, JJ:0.0110, QQ:0.1746, KK:0.9859, AKo:0.2715, AKs:0.8141, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@11",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "77:0.0017, 88:0.0859, JJ:0.0002, QQ:0.0280, KK:0.4527, AKo:0.0087, A6s:0.0001, A8s:0.0002, AJs:0.0007, AQs:0.0045, AKs:0.3005, AA:0.0217"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0008, 88:0.0172, 99:0.0022, TT:0.1252, JJ:0.5577, QQ:0.0103, KK:0.5457, AKo:0.0204, A6s:0.0003, A8s:0.0006, AJs:0.0001, AQs:0.0276, AKs:0.6943, AA:0.9783"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@11",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "A8o:0.0006, TT:0.0001, QQ:0.1396, AQo:0.0018, KK:0.0076, AKo:0.0076, A8s:0.0020, ATs:0.0618, AQs:0.0101, AKs:0.0002, AA:0.0156"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8o:0.0029, 99:0.0003, TT:0.1628, JJ:0.2540, QQ:0.4900, AQo:0.0034, KJs:0.0001, KQs:0.0024, KK:0.9729, AKo:0.8804, A8s:0.1082, ATs:0.0761, AQs:0.1660, AKs:0.8144, AA:0.6763"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0014, TT:0.1240, JJ:0.3888, QQ:0.9906, KK, AKo:0.0306, AJs:0.0005, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0091, JJ:0.0175, QQ:0.8264, KK:0.9859, AKo:0.2463, AKs:0.7861, AA:0.6919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "32s:0.0001, K4o:0.0001, 53s:0.0001, 55:0.0001, 63s:0.0001, 75s:0.0003, 76s:0.0001, 83s:0.0003, 84s:0.0002, 88:0.0001, 97s:0.0002, 99:0.0001, A9o:0.0001, T2s:0.0003, T3s:0.0001, T4s:0.0001, J7s:0.0002, J8s:0.0001, JTs:0.0003, JJ:0.0109, Q2s:0.0003, Q3s:0.0001, Q4s:0.0002, Q5s:0.0003, Q8s:0.0003, Q9s:0.0001, QTs:0.0001, QJs:0.0003, QQ:0.4324, K2s:0.0004, K8s:0.0001, K9s:0.0004, KJs:0.0003, AKo:0.0008, A3s:0.0001, A4s:0.0019, A6s:0.0001, ATs:0.0001, AQs:0.3089, AKs:0.0001, AA:0.3602"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0001, 32s:0.0014, 33:0.0022, K3o:0.0040, 43s:0.0130, 44:0.0002, 53s:0.0096, 54s:0.0022, 55:0.0030, 75o:0.0001, 85o:0.0001, 64s:0.0001, 65s:0.0103, 66:0.0002, 73s:0.0001, 75s:0.0014, 77:0.0032, K7o:0.0003, 82s:0.0049, 84s:0.0315, 85s:0.0051, 88:0.3049, 95s:0.0001, 97s:0.0004, 98s:0.0001, A9o:0.0001, T2s:0.0026, T5s:0.0001, T9s:0.0019, TT:0.0016, KTo:0.0001, J2s:0.0010, J3s:0.0011, J4s:0.0164, J5s:0.0001, J6s:0.0001, J9s:0.0004, JJ:0.2929, QJo:0.0001, AJo:0.0022, Q2s:0.0008, Q3s:0.0091, Q4s:0.0004, Q5s:0.1006, Q6s:0.0114, Q7s:0.0339, Q8s:0.0025, Q9s:0.0021, QTs:0.0249, QJs:0.0034, QQ:0.3689, KQo:0.0747, AQo:0.0121, K2s:0.0025, K3s:0.0002, K4s:0.0054, K5s:0.0001, K6s:0.0001, K7s:0.0085, K9s:0.0116, KTs:0.1992, KJs:0.0194, KQs:0.4745, KK, AKo:0.7575, A2s:0.0001, A3s:0.0001, A4s:0.0220, A5s:0.0421, A6s:0.0773, A7s:0.0026, A8s:0.2536, A9s:0.0022, ATs:0.0027, AJs:0.0001, AQs:0.3373, AKs:0.8234, AA:0.6398"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "93o:0.0001, 42s:0.0001, 44:0.0001, 62s:0.0001, 72s:0.0001, 76s:0.0001, 85s:0.0001, 88:0.0002, 97s:0.0007, 98s:0.0010, 99:0.0002, JJ:0.0002, Q5s:0.0002, Q8s:0.0001, Q9s:0.0007, QTs:0.0001, KQo:0.0001, K2s:0.0003, K3s:0.0001, K8s:0.0001, K9s:0.0001, KQs:0.0003, KK:0.0458, A3s:0.0001, A5s:0.0001, A8s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0001, AQs:0.0003, AKs:0.0036, AA:0.1341"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0003, 33:0.0001, 42s:0.0056, 43s:0.0007, 44:0.4242, 53s:0.0003, 54s:0.0028, 63s:0.0003, 86o:0.0001, 74s:0.0001, 75s:0.0747, 77:0.0001, 87o:0.0001, J7o:0.0001, K7o:0.0001, 84s:0.0376, 85s:0.0002, 86s:0.0005, 87s:0.0010, 88:0.0003, 92s:0.0083, 93s:0.0003, 95s:0.0001, 96s:0.0001, 98s:0.0001, 99:0.0022, K9o:0.0001, T2s:0.0001, T3s:0.0001, T5s:0.0004, T6s:0.0030, T7s:0.0119, T8s:0.0202, T9s:0.0612, ATo:0.0002, J2s:0.0001, J3s:0.0002, J4s:0.0023, J5s:0.0030, J6s:0.0158, J7s:0.0093, J8s:0.0002, J9s:0.0522, JTs:0.0006, JJ:0.0030, AJo:0.0001, Q2s:0.0104, Q3s:0.0002, Q4s:0.0009, Q5s:0.0929, Q6s:0.0281, Q8s:0.0003, Q9s:0.0378, QTs:0.0001, QJs:0.0002, QQ:0.4970, KQo:0.0247, AQo:0.0012, K2s:0.0006, K3s:0.0471, K4s:0.0002, K5s:0.0027, K6s:0.4095, K7s:0.0336, K8s:0.2492, K9s:0.0024, KTs:0.0790, KJs:0.0864, KQs:0.0896, KK:0.9528, AKo:0.9015, A2s:0.1924, A3s:0.0009, A4s:0.0006, A5s:0.0001, A6s:0.0001, A7s:0.0293, A8s:0.0004, A9s:0.0101, ATs:0.0538, AJs:0.0129, AQs:0.0050, AKs:0.9582, AA:0.8658"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 15bb",
      "4bet 22.96bb"
    ],
    "bands": [
      {
        "action": "4bet 15bb",
        "min": 0.0001,
        "range": "22:0.0034, 42o:0.0001, 32s:0.2905, 33:0.0001, K3o:0.0014, 44:0.0151, 54o:0.0008, Q4o:0.0001, K4o:0.0257, 53s:0.0007, 54s:0.0004, 55:0.0415, 65s:0.0789, 66:0.0404, 96o:0.0003, K6o:0.0002, 72s:0.0046, 73s:0.0005, 74s:0.0051, 75s:0.0371, 76s:0.0780, 77:0.1237, K7o:0.0025, A7o:0.0001, 82s:0.0001, 84s:0.0032, 85s:0.0002, 87s:0.0002, 88:0.0388, 92s:0.0001, 93s:0.0001, 95s:0.0009, 97s:0.0009, 99:0.0007, J9o:0.0002, T3s:0.0004, T5s:0.0001, T6s:0.0201, T7s:0.2238, T9s:0.0068, TT:0.0048, QTo:0.0118, KTo:0.0002, ATo:0.0105, J2s:0.0008, J4s:0.0011, J6s:0.0004, J8s:0.0165, J9s:0.0099, JTs:0.0007, JJ:0.3942, KJo:0.0196, Q3s:0.0466, Q4s:0.0430, Q5s:0.0358, Q6s:0.0342, Q7s:0.1221, Q8s:0.0188, Q9s:0.0076, QTs:0.2074, QQ:0.6941, KQo:0.0889, AQo:0.2154, K2s:0.0044, K3s:0.0084, K5s:0.0164, K6s:0.0064, K7s:0.1996, K8s:0.0355, K9s:0.2796, KTs:0.0619, KJs:0.4359, KQs:0.0179, KK:0.2735, AKo:0.5143, A2s:0.0359, A3s:0.0003, A4s:0.0011, A5s:0.0369, A6s:0.1593, A7s:0.3985, A8s:0.4206, A9s:0.0097, AJs:0.3793, AQs:0.2601, AKs:0.0778, AA:0.1659"
      },
      {
        "action": "4bet 22.96bb",
        "min": 0.0001,
        "range": "22:0.3755, 32o:0.0002, 82o:0.0001, Q2o:0.0033, K2o:0.0406, A2o:0.0093, 32s:0.3050, 33:0.0524, K3o:0.0005, A3o:0.0183, 42s:0.0001, 43s:0.0004, 44:0.0219, 54o:0.0001, 94o:0.0001, J4o:0.0003, K4o:0.0001, 52s:0.8058, 53s:0.0030, 54s:0.0003, 55:0.3320, 65o:0.0001, 62s:0.0070, 64s:0.1523, 65s:0.5140, 66:0.7036, 76o:0.0001, 86o:0.0030, 96o:0.0010, Q6o:0.0051, K6o:0.0107, 72s:0.0106, 73s:0.0001, 74s:0.0671, 75s:0.0214, 76s:0.5514, 77:0.4265, K7o:0.0955, A7o:0.0153, 82s:0.0002, 84s:0.0247, 85s:0.0067, 86s:0.5836, 87s:0.1062, 88:0.1059, 98o:0.0001, 92s:0.0019, 93s:0.0278, 94s:0.0016, 95s:0.0026, 96s:0.0001, 97s:0.0015, 98s:0.0006, 99:0.3149, T9o:0.0001, J9o:0.0013, Q9o:0.0122, K9o:0.0027, A9o:0.2225, T2s:0.0234, T3s:0.0463, T4s:0.1150, T5s:0.0001, T6s:0.2772, T7s:0.2213, T8s:0.0854, T9s:0.0012, TT:0.7818, QTo:0.0437, KTo:0.0001, ATo:0.0176, J2s:0.0014, J3s:0.0003, J4s:0.0075, J5s:0.0006, J6s:0.0259, J7s:0.0002, J8s:0.0077, J9s:0.1718, JTs:0.0210, JJ:0.5454, QJo:0.0224, KJo:0.0310, AJo:0.0001, Q2s:0.2115, Q3s:0.2306, Q4s:0.0241, Q5s:0.2928, Q6s:0.0702, Q7s:0.1921, Q8s:0.0932, Q9s:0.0264, QTs:0.1104, QJs:0.0496, QQ:0.3058, KQo:0.2667, AQo:0.1232, K2s:0.0562, K3s:0.1744, K4s:0.0461, K5s:0.4178, K6s:0.3749, K7s:0.4022, K8s:0.1086, K9s:0.3803, KTs:0.1005, KJs:0.4459, KQs:0.0834, KK:0.7254, AKo:0.4688, A2s:0.4162, A3s:0.0020, A4s:0.0030, A5s:0.3485, A6s:0.3744, A7s:0.1926, A8s:0.2212, A9s:0.2867, ATs:0.0064, AJs:0.0495, AQs:0.2779, AKs:0.9002, AA:0.8341"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, J2o:0.0001, 33:0.0036, A3o:0.0002, 54o:0.0002, K4o:0.0003, 54s:0.0004, 65o:0.0002, A5o:0.0001, 62s:0.0003, 64s:0.0004, 66:0.0001, J6o:0.0001, 74s:0.0003, 76s:0.0005, 77:0.0001, 82s:0.0001, 83s:0.0012, 84s:0.0001, 86s:0.0006, 88:0.0001, K8o:0.0001, A8o:0.0002, 93s:0.0016, 96s:0.0001, 97s:0.0001, 98s:0.0001, 99:0.0056, T9o:0.0001, Q9o:0.0003, K9o:0.0002, T4s:0.0002, T6s:0.0001, T8s:0.0026, T9s:0.0008, TT:0.0045, JTo:0.0002, QTo:0.0001, J4s:0.0001, J6s:0.0008, J7s:0.0002, JJ:0.0512, KJo:0.0001, Q4s:0.0001, Q6s:0.0005, Q7s:0.0002, Q9s:0.0024, QJs:0.0003, QQ:0.9760, KQo:0.0001, AQo:0.0059, K3s:0.0003, K6s:0.0054, K7s:0.0001, K8s:0.0005, K9s:0.0034, KTs:0.0093, KJs:0.0039, KQs:0.0015, KK:0.9981, AKo:0.0014, A2s:0.0015, A3s:0.0002, A4s:0.0032, A5s:0.0003, A6s:0.0001, A8s:0.0001, A9s:0.0039, ATs:0.0019, AJs:0.0005, AQs:0.1123, AKs:0.9019, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "88:0.0922, 99:0.0003, TT:0.0867, JJ:0.7613, AJo:0.0010, QQ:0.9962, KK:0.9699, AKo:0.0306, A3s:0.0029, A4s:0.0001, A7s:0.0103, ATs:0.0036, AJs:0.1265, AQs:0.9398, AKs:0.8907, AA:0.0047"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0019, JJ:0.0177, QQ:0.0038, KQo:0.0001, KK:0.0301, AKo:0.0001, A8s:0.0001, AJs:0.0013, AQs:0.0570, AKs:0.1092, AA:0.9953"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|LJ:4BET@11.36",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, QQ:0.0011, KQo:0.0004, AQo:0.0002, KQs:0.0001, KK:0.0141, AKo:0.0078, A3s:0.0006, A4s:0.0001, A5s:0.0095, A7s:0.0003, ATs:0.0002, AQs:0.0002, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|BB:4BET@14.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0005, 88:0.0104, A8o:0.0001, 99:0.0001, A9o:0.0001, TT:0.0046, ATo:0.0003, JJ:0.0070, QJo:0.0001, KJo:0.0004, AJo:0.0001, QQ:0.0015, KQo:0.0003, KK:0.4057, AKo:0.0013, A3s:0.0033, A4s:0.0008, A6s:0.0013, A8s:0.0032, AJs:0.0145, AQs:0.0526, AKs:0.0052, AA:0.9979"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|BB:4BET@14.93",
    "heroPos": "HJ",
    "eff": 15.18,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, QQ:0.0011, AQo:0.0003, KQs:0.0001, KK:0.0141, AKo:0.0089, A3s:0.0006, A4s:0.0001, A5s:0.0095, A7s:0.0003, ATs:0.0002, AQs:0.0002, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|SB:4BET@15",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0002, 66:0.0004, 77:0.0002, 88:0.0533, 99:0.0010, A9o:0.0028, TT:0.0048, ATo:0.0022, JJ:0.0145, QJo:0.0006, KJo:0.0105, AJo:0.0008, QQ:0.6040, K9s:0.0006, KK:0.9979, AKo:0.0210, A3s:0.0010, A4s:0.0009, A6s:0.0010, A7s:0.0009, A8s:0.0042, ATs:0.0003, AJs:0.0027, AQs:0.0027, AKs:0.7656, AA:0.9990"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|SB:4BET@15",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0004, QQ:0.0011, KQo:0.0003, AQo:0.0003, KQs:0.0001, KK:0.0133, AKo:0.0087, A5s:0.0023, A7s:0.0001, ATs:0.0002, AQs:0.0002, AKs:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0008, AKo:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|SB:4BET@22.96",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0032, 99:0.0012, A9o:0.0006, TT:0.0912, KTo:0.0001, JJ:0.4139, QJo:0.0001, KJo:0.0002, AJo:0.0003, QQ:0.9868, KQo:0.0002, KK, A3s:0.0006, A6s:0.0010, A8s:0.0005, ATs:0.0001, AJs:0.0019, AQs:0.0258, AKs:0.5076, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|SB:4BET@22.96",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, QQ:0.0011, AQo:0.0001, KK:0.0141, AKo:0.0071, ATs:0.0001, AQs:0.0001, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|BTN:4BET@15",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0381, 77:0.0018, 88:0.1043, A8o:0.0028, 99:0.0035, A9o:0.0006, TT:0.0205, KTo:0.0004, ATo:0.0373, JJ:0.7787, QJo:0.0038, KJo:0.0241, AJo:0.0378, QQ:0.3526, KQo:0.0275, K9s:0.0015, KK:0.5871, AKo:0.0195, A2s:0.0011, A3s:0.0855, A4s:0.0430, A6s:0.0591, A7s:0.2966, A8s:0.0028, ATs:0.0166, AJs:0.2276, AQs:0.7223, AKs:0.3879, AA:0.8892"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|BTN:4BET@15",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0001, QQ:0.0002, KQo:0.0002, KK:0.0012, AKo:0.0013, A3s:0.0001, A5s:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0003, QQ:0.0009, KQo:0.0006, AQo:0.0003, KQs:0.0001, KK:0.0126, AKo:0.0076, A3s:0.0005, A4s:0.0001, A5s:0.0090, A7s:0.0003, ATs:0.0002, AQs:0.0002, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|BTN:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0002, 88:0.0029, A8o:0.0003, 99:0.0002, A9o:0.0023, TT:0.0193, ATo:0.0009, JJ:0.0346, KJo:0.0008, AJo:0.0002, QQ:0.3178, KQo:0.0013, KK:0.8830, AKo:0.0011, A3s:0.0002, A6s:0.0013, A7s:0.0823, A8s:0.0087, ATs:0.0008, AJs:0.1404, AQs:0.0026, AKs:0.7431, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|BTN:4BET@24.75",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, QQ:0.0008, KK:0.0141, AKo:0.0089, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|CO:4BET@15",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0059, 77:0.0006, 88:0.1712, A8o:0.0028, 99:0.0003, A9o:0.0031, TT:0.1060, KTo:0.0059, ATo:0.0328, JJ:0.0221, QJo:0.0076, KJo:0.0018, AJo:0.2050, QQ:0.4537, KQo:0.1851, K9s:0.0033, KK:0.7842, AKo:0.0018, A2s:0.0015, A3s:0.0612, A4s:0.0195, A7s:0.3946, A8s:0.5668, ATs:0.0103, AJs:0.0741, AQs:0.3635, AKs:0.0307, AA:0.9985"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|CO:4BET@15",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "QQ:0.0011, KK:0.0141, AKo:0.0088, AQs:0.0002, AKs:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|CO:4BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0005, 77:0.0042, 88:0.0045, A8o:0.0003, A9o:0.0017, TT:0.0019, KTo:0.0001, ATo:0.0021, JJ:0.0017, QJo:0.0001, KJo:0.0001, AJo:0.0010, QQ:0.7653, KQo:0.0005, K9s:0.0001, KK, AKo:0.0004, A3s:0.0354, A4s:0.0005, A6s:0.0017, A7s:0.0009, A8s:0.0064, ATs:0.0003, AJs:0.0036, AQs:0.0003, AKs:0.0711, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@8.5|CO:4BET@28.32",
    "heroPos": "HJ",
    "eff": 23.21,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0011, KK:0.0141, AKo:0.0089, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "97s:0.0001, QQ:0.3546, K8s:0.0001, KK, AKo:0.6131, A5s:0.0002, AKs:0.9948, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0003, 88:0.0001, JJ:0.0005, QQ:0.5398, KK, AKo:0.0759, AQs:0.0003, AKs:0.2689, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0011, 55:0.0217, 66:0.0002, 77:0.3346, 86s:0.0001, 88:0.0004, 92s:0.0001, 93s:0.0002, 99:0.1596, A9o:0.0001, TT:0.9173, ATo:0.0001, J8s:0.0001, JTs:0.0002, JJ:0.8752, Q9s:0.0001, QTs:0.0001, QJs:0.0007, QQ, AQo:0.0001, KTs:0.0001, KQs:0.0001, KK, AKo, A3s:0.0016, A7s:0.0001, ATs:0.0002, AJs:0.0041, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0003, 88:0.0001, 99:0.0001, TT:0.0001, JJ:0.0009, QQ:0.9989, K3s:0.0004, K7s:0.0001, KK:0.9998, AKo:0.9864, AQs:0.0003, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0004, 77:0.0216, 88:0.4796, 99:0.0078, TT:0.2364, JJ, QQ, KK, AKo:0.0307, AJs:0.0001, AQs:0.1360, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96|BB:CALL@13.93",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0005, QQ:0.0053, KK:0.5617, A3s:0.0001, A6s:0.0004, A7s:0.0001, AJs:0.0009, AQs:0.0002, AKs:0.0030, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96|SB:CALL@22.46",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0209, KK:0.9562, A3s:0.0001, A6s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96|BTN:4BET@24.75",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A9o:0.0003, JJ:0.0004, KJo:0.0001, AJo:0.0004, QQ:0.0017, KQo:0.0001, KK:0.0095, AJs:0.0010, AQs:0.0001, AKs:0.0006, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@22.96|CO:4BET@28.32",
    "heroPos": "LJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, JJ:0.0003, KJo:0.0001, QQ:0.0016, KK:0.0043, A6s:0.0001, A7s:0.0003, A8s:0.0002, AJs:0.0003, AKs:0.0030, AA:0.9964"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.9925, TT:0.4375, JJ:0.5039, QQ:0.0004, AQo:0.3932, KK:0.2738, AKo:0.0348, AQs:0.0005, AKs:0.0040, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0073, TT:0.5625, JJ:0.4961, QQ:0.9996, AQo:0.6068, KK:0.7262, AKo:0.9652, AQs:0.9995, AKs:0.9960"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 21.71bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0005, 99:0.9997, TT:0.9973, JJ:0.7348, QQ:0.0007, AQo:0.9413, KK:0.9589, AKo:0.0425, AJs:0.2636, AQs:0.0002, AKs:0.0001, AA"
      },
      {
        "action": "3bet 21.71bb",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0014, JJ:0.1158, QQ:0.5189, AQo:0.0581, KK:0.0396, AKo:0.5744, AJs:0.0101, AQs:0.3175, AKs:0.5337, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0013, JJ:0.1494, QQ:0.4803, AQo:0.0006, KK:0.0015, AKo:0.3831, AJs:0.0067, AQs:0.6823, AKs:0.4662"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.9840, TT:0.9869, JJ:0.0028, QQ:0.0001, AQo:0.7153, KK:0.9613, AKo:0.0010, AJs:0.8339, AQs:0.0025, AKs:0.0006, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0160, TT:0.0131, JJ:0.9972, QQ, AQo:0.2847, KK:0.0387, AKo:0.9990, AJs:0.0356, AQs:0.9975, AKs:0.9994, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 14.93bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.3664, 77:0.4775, 88:0.3991, 99:0.9349, TT:0.7354, ATo:0.8643, JJ:0.9987, AJo:0.5819, QQ:0.3923, AQo:0.0379, KQs:0.1234, KK:0.9821, AKo:0.9177, ATs:0.5697, AJs, AQs:0.5910, AKs:0.0238, AA:0.3667"
      },
      {
        "action": "3bet 14.93bb",
        "min": 0.0001,
        "range": "66:0.3638, 77:0.5225, 88:0.6009, 99:0.0651, TT:0.2646, ATo:0.1341, JJ:0.0013, AJo:0.4181, QQ:0.6077, AQo:0.9621, KQs:0.1175, KK:0.0179, AKo:0.0823, ATs:0.4303, AQs:0.4090, AKs:0.9762, AA:0.6333"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.3814, 88, 99, TT, JJ, AJo, QQ, AQo, KK, AKo, ATs:0.8095, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|SB:CALL@10.86",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0005, JJ:0.0076, QQ:0.0141, KK:0.0009, AA:0.0311"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.9922, QQ:0.9859, KK:0.9991, AA:0.9689"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|SB:CALL@10.86|BB:3BET@14.93",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.3664, 77:0.4775, 88:0.3991, 99:0.9349, TT:0.7354, ATo:0.8643, JJ:0.9987, AJo:0.5819, QQ:0.3923, AQo:0.0379, KQs:0.1234, KK:0.9821, AKo:0.9177, ATs:0.5697, AJs, AQs:0.5910, AKs:0.0238, AA:0.3667"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|SB:3BET@14.93",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0005, JJ:0.9976, QQ, KK, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|BTN:CALL@11.36",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0003, TT:0.8930, JJ:0.9983, QQ:0.9989, KK, AKo:0.9988, ATs:0.0005, AJs:0.0448, AQs:0.6555, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|BTN:CALL@11.36",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0064, QQ:0.0076, KK:0.0049, AKs:0.0010, AA:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.7869, KK:0.9951, AKs:0.0002, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|BTN:CALL@11.36|BB:3BET@14.93",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.9840, TT:0.9869, JJ:0.0028, QQ:0.0001, AQo:0.7153, KK:0.9613, AKo:0.0010, AJs:0.8339, AQs:0.0025, AKs:0.0006, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|BTN:CALL@11.36|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0019, JJ:0.0028, QQ:0.0001, AQo:0.0001, KK:0.9613, AKo:0.0010, AJs:0.0004, AKs:0.0006, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|BTN:3BET@24.75",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.8249, QQ, KK, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|BTN:3BET@24.75",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0022, QQ, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0009, KK, AKo:0.3955, AKs:0.9795, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 21.71bb",
      "3bet 28.32bb"
    ],
    "bands": [
      {
        "action": "3bet 21.71bb",
        "min": 0.0001,
        "range": "88:0.0005, TT:0.4214, JJ:0.9307, QQ:0.7040, KK:0.8662, AKo:0.4546, AJs:0.0035, AQs:0.2543, AKs:0.9796, AA:0.6755"
      },
      {
        "action": "3bet 28.32bb",
        "min": 0.0001,
        "range": "88:0.0002, TT:0.2439, JJ:0.0693, QQ:0.2960, KK:0.1338, AKo:0.5453, AJs:0.0046, AQs:0.4731, AKs:0.0204, AA:0.3245"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0016, QQ:0.0172, KK:0.0094, AKs:0.0001, AA:0.0033"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0016, QQ:0.9758, KK:0.9906, AKs:0.0001, AA:0.9967"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36|BB:3BET@14.93",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0005, 99:0.9997, TT:0.9973, JJ:0.7348, QQ:0.0007, AQo:0.9413, KK:0.9589, AKo:0.0425, AJs:0.2636, AQs:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36|SB:3BET@21.71",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "TT:0.0004, JJ:0.1684, QQ:0.0007, AQo:0.0024, KK:0.9389, AKo:0.0422, AJs:0.0001, AQs:0.0001, AKs:0.0001, AA:0.9942"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0003, KK:0.0200, AA:0.0057"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36|SB:3BET@28.32",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0009, JJ:0.0841, QQ:0.0007, AQo:0.0002, KK:0.9589, AKo:0.0015, AJs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:CALL@11.36|BTN:3BET@24.75",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0006, TT:0.0083, JJ:0.1528, AQo:0.0002, KK:0.9589, AJs:0.0003, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@21.71",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.2420, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@21.71",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "4bet 28.32bb"
    ],
    "bands": [
      {
        "action": "4bet 28.32bb",
        "min": 0.0001,
        "range": "99:0.0040, TT:0.0121, JJ:0.1516, QQ, K9s:0.0001, KK, AKo:0.0578, AKs:0.7258, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@21.71",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.2271, QQ:0.9998, KK, AKs:0.0018, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@21.71|SB:4BET@28.32",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0013, JJ:0.1109, QQ:0.5189, AQo:0.0581, KK:0.0396, AKo:0.5744, AJs:0.0101, AQs:0.3175, AKs:0.5337, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@21.71|BTN:4BET@24.75",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0014, JJ:0.1158, QQ:0.5189, AQo:0.0581, KK:0.0396, AKo:0.5744, AJs:0.0101, AQs:0.3175, AKs:0.5337, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@28.32",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.8005, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@28.32",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0204, QQ:0.9996, KK, AQs:0.0001, AKs:0.7329, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|CO:3BET@28.32",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0242, QQ:0.9982, KK, AKo:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 21.71bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 21.71bb",
        "min": 0.0001,
        "range": "JJ:0.0029, QQ:0.3815, KK:0.9585, AKo:0.6771, AKs:0.6364, AA:0.8630"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0700, QQ:0.2590, KK:0.0415, AKo:0.0880, AKs:0.2835, AA:0.1370"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.0322, KK, AKo:0.3833, AKs:0.9858, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "3bet 22.96bb"
    ],
    "bands": [
      {
        "action": "3bet 22.96bb",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.0023, 99:0.0004, TT:0.0020, JJ:0.9997, QQ, AQo:0.0067, KK, AKo:0.9993, AJs:0.2496, AQs:0.5905, AKs:0.9992, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "JJ:0.0542, QQ:0.0032, KK:0.0083, AKs:0.0001, AA:0.0100"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0241, QQ:0.9959, KK:0.9917, AKs:0.0002, AA:0.9900"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36|BB:3BET@14.93",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.9925, TT:0.4375, JJ:0.5039, QQ:0.0004, AQo:0.3932, KK:0.2738, AKo:0.0348, AQs:0.0005, AKs:0.0040, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36|SB:3BET@22.96",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0006, TT:0.0001, JJ:0.1479, QQ:0.0004, AQo:0.0001, KK:0.2738, AKo:0.0348, AKs:0.0040, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36|BTN:3BET@24.75",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0986, TT:0.0937, JJ:0.0193, QQ:0.0001, KK:0.2738, AKo:0.0013, AKs:0.0040, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36|CO:3BET@21.71",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
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
        "range": "99:0.0001, TT:0.0649, JJ:0.1736, QQ:0.0003, KK:0.2239, AKo:0.0315, AKs:0.0038, AA:0.0719"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0010, TT:0.0009, JJ:0.0188, QQ:0.0001, KK:0.0499, AKo:0.0033, AKs:0.0002, AA:0.9281"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:CALL@11.36|CO:3BET@28.32",
    "heroPos": "HJ",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0006, TT:0.0701, JJ:0.1193, QQ:0.0004, AQo:0.0014, KK:0.2738, AKo:0.0346, AKs:0.0040, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:3BET@22.96",
    "heroPos": "CO",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.9886, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:3BET@22.96",
    "heroPos": "BTN",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.4151, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:3BET@22.96",
    "heroPos": "SB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.5553, QQ, KK, AKo:0.0096, AKs:0.9984, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@11.36|HJ:3BET@22.96",
    "heroPos": "BB",
    "eff": 11.61,
    "stacks": [
      11.61,
      23.21,
      28.57,
      25.0,
      57.14,
      15.18
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0007, QQ, KK, AKs:0.0016, AA"
      }
    ]
  }
];

export const PATTERNS = __normalizePatterns([
{
    id: "CLUB_MATCH_280_560_140_11_23_28_25_57_15 chase",
    label: "Club Match 280-560(140) 11-23-28-25-57-15 chase",
    tags: ["clubmatch", "6left"],
    questionBuilder: (hand) => ({ stacks: CLUB_MATCH_280_560_140_11_23_28_25_57_15_STACKS_BB }),
    spots: __attachFacingLineToState(CLUB_MATCH_280_560_140_11_23_28_25_57_15_STATE, CLUB_MATCH_280_560_140_11_23_28_25_57_15_FACING_PRESETS).map(__makeSpotFromState),
  }
]);
