// ============================================================
// AUTO-GENERATED from Club_Match_140-280(70)_54-54-54-54-54-54.zip
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
export const CLUB_MATCH_140_280_70_54_54_54_54_54_54_STACKS_BB = [
  53.57,
  53.57,
  53.57,
  53.57,
  53.57,
  53.57
];

export const CLUB_MATCH_140_280_70_54_54_54_54_54_54_FACING_PRESETS = [
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
    "id": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@9",
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
        "size": 9.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@2.5",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 2.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@2.5|BB:3BET@9",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 2.5
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
    "id": "SB:OPEN@2.5|BB:3BET@9|SB:4BET@15.5",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 2.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 15.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@2.5|BB:3BET@9|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 2.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 9.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
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
    "id": "BTN:OPEN@2.3|BB:3BET@10",
    "facingLine": [
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@17.7",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@14",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@14|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
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
    "id": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@17.7",
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
        "size": 17.7
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@53.32",
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
        "size": 53.32
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
    "id": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@14",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "BB",
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@14|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
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
    "id": "CO:OPEN@2.3|BB:3BET@14",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BB:3BET@14|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
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
    "id": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@14",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@14|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
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
    "id": "CO:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
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
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
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
        "size": 14.0
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
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@5.5|CO:4BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@5.5|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
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
    "id": "CO:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
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
    "id": "CO:OPEN@2.3|BTN:3BET@8",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@8|CO:4BET@13.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@8|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
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
    "id": "CO:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
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
    "id": "CO:OPEN@2.3|BTN:3BET@10",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@10|CO:4BET@17.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@10|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
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
    "id": "CO:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
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
    "id": "CO:OPEN@2.3|BTN:3BET@53.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@53.32|BB:CALL@52.32",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@53.32|SB:CALL@52.82",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 52.82
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
    "id": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@17.7",
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
        "size": 17.7
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@14",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@14|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
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
    "id": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@17.7",
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
        "size": 17.7
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@53.32",
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
        "size": 53.32
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
    "id": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@14",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@14|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
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
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5|HJ:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8|HJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10|HJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@53.32|BB:CALL@52.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
    "id": "HJ:OPEN@2.3|BTN:3BET@53.32|SB:CALL@52.82",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 52.82
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
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@14",
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
        "size": 14.0
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
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@8",
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
        "size": 8.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@10",
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
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@5.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|HJ:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
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
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
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
    "id": "HJ:OPEN@2.3|CO:3BET@8",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
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
    "id": "HJ:OPEN@2.3|CO:3BET@8|HJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@8|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@8|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
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
    "id": "HJ:OPEN@2.3|CO:3BET@8|SB:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@8|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
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
    "id": "HJ:OPEN@2.3|CO:3BET@8|BTN:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@8|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
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
    "id": "HJ:OPEN@2.3|CO:3BET@10",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
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
    "id": "HJ:OPEN@2.3|CO:3BET@10|HJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@10|HJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
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
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@10|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
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
    "id": "HJ:OPEN@2.3|CO:3BET@10|SB:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@10|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
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
    "id": "HJ:OPEN@2.3|CO:3BET@10|BTN:4BET@17.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@10|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
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
    "id": "HJ:OPEN@2.3|CO:3BET@53.32|SB:CALL@52.82",
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
        "act": "call",
        "size": 52.82
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@14",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@14|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@14",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      }
    ],
    "heroPositions": [
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@14|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 14.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5|LJ:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8|LJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10|LJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@53.32|BB:CALL@52.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
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
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@53.32|SB:CALL@52.82",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 52.82
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
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@8",
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
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@10",
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
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|LJ:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
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
    "id": "LJ:OPEN@2.3|CO:3BET@8|LJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
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
    "id": "LJ:OPEN@2.3|CO:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8|SB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8|BTN:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@8|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
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
    "id": "LJ:OPEN@2.3|CO:3BET@10|LJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
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
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
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
    "id": "LJ:OPEN@2.3|CO:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
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
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10|SB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10|BTN:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@10|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|CO:3BET@53.32|BB:CALL@52.32",
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
        "act": "call",
        "size": 52.32
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@53.32|SB:CALL@52.82",
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
        "act": "call",
        "size": 52.82
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@53.32",
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
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@14",
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
        "size": 14.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@8",
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
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@10",
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
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@53.32",
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
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@8",
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
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@10",
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
        "size": 10.0
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
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|LJ:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|BB:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|SB:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|BTN:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|CO:4BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@5.5|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.3|HJ:3BET@8",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
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
    "id": "LJ:OPEN@2.3|HJ:3BET@8|LJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@8|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@8|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@8|SB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@8|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@8|BTN:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@8|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@8|CO:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@8|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|LJ:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
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
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|LJ:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
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
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BB",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "SB",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 17.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10.0
      },
      {
        "pos": "BTN",
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@17.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
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
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
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
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 53.32
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
    "id": "LJ:OPEN@2.3|HJ:3BET@53.32|BB:CALL@52.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
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
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@53.32|SB:CALL@52.82",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 52.82
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@53.32|BTN:CALL@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@53.32|CO:CALL@53.32",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 53.32
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 53.32
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  }
];

export const CLUB_MATCH_140_280_70_54_54_54_54_54_54_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "44:0.0012, A4o:0.0002, 55:0.9956, A5o:0.6667, 65s:0.0168, 66, A6o:0.0001, 76s:0.6130, 77, A7o:0.0002, 87s:0.3340, 88, A8o:0.3221, 98s:0.3952, 99, A9o:0.9998, T8s:0.9893, T9s:0.9974, TT, JTo:0.0001, QTo:0.0002, KTo:0.7392, ATo, J9s:0.9883, JTs:0.9998, JJ, QJo:0.8700, KJo, AJo, Q8s:0.2770, Q9s:0.9925, QTs, QJs, QQ, KQo, AQo, K3s:0.0001, K4s:0.1035, K5s:0.9968, K6s:0.9996, K7s:0.9998, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.9397, A4o:0.0065, 55, A5o, 65s:0.9244, 66, A6o:0.0004, 76s:0.9674, 77, A7o:0.8367, 86s:0.0291, 87s:0.7535, 88, A8o, 97s:0.8893, 98s:0.9985, 99, K9o:0.0003, A9o, T7s:0.3208, T8s:0.9989, T9s, TT, JTo:0.9199, QTo:0.8309, KTo, ATo, J7s:0.0001, J8s:0.9981, J9s:0.9990, JTs, JJ, QJo, KJo, AJo, Q6s:0.0435, Q7s:0.0038, Q8s:0.9973, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.0074, K3s:0.9781, K4s:0.9997, K5s, K6s, K7s:0.9998, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.0003, 33:0.9947, A3o:0.1638, 44, A4o, 54s:0.8798, 55, K5o:0.0001, A5o, 64s:0.0001, 65s:0.9987, 66, K6o:0.0001, A6o, 75s:0.9196, 76s:0.9966, 77, K7o:0.0002, A7o, 85s:0.0004, 86s:0.9925, 87s:0.9986, 88, K8o:0.4755, A8o, 96s:0.4579, 97s:0.9997, 98s:0.9994, 99, T9o:0.9344, J9o:0.3706, Q9o:0.1844, K9o, A9o, T6s:0.2979, T7s:0.9995, T8s:0.9997, T9s, TT, JTo, QTo, KTo, ATo, J6s:0.0005, J7s:0.9926, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q4s:0.3247, Q5s:0.9941, Q6s, Q7s:0.9998, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.9994, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "22, A2o, 33, A3o, 43s:0.0479, 44, K4o:0.4201, A4o, 53s:0.9980, 54s:0.9998, 55, 65o:0.0002, K5o:0.9995, A5o, 63s:0.0004, 64s, 65s, 66, 76o:0.1041, K6o, A6o, 74s:0.9613, 75s, 76s, 77, 87o:0.4151, 97o:0.0068, T7o:0.2404, J7o:0.0001, Q7o:0.5906, K7o, A7o, 83s:0.0001, 85s:0.9995, 86s, 87s, 88, 98o:0.9997, T8o, J8o:0.9995, Q8o, K8o, A8o, 95s:0.9996, 96s, 97s, 98s, 99, T9o, J9o, Q9o, K9o, A9o, T2s:0.0003, T3s:0.0330, T4s:0.9988, T5s, T6s, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J2s:0.0659, J3s:0.9945, J4s:0.9995, J5s, J6s, J7s, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "open 2.5bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9962, 52o:0.0465, 92o:0.7675, T2o:0.9994, J2o:0.9996, Q2o, K2o, A2o:0.9915, 32s:0.9964, 33:0.9998, 43o:0.8851, 53o:0.9998, 63o:0.7432, 93o:0.9886, T3o:0.9994, J3o:0.9992, Q3o, K3o, A3o:0.8663, 42s:0.9515, 43s:0.6909, 44:0.9994, 54o:0.9835, 64o:0.9994, 74o:0.9991, 84o:0.9954, 94o:0.9946, T4o, J4o, Q4o, K4o:0.8592, A4o:0.9324, 52s:0.9038, 53s:0.5230, 54s:0.8841, 55:0.9150, 65o:0.6938, 75o:0.9969, 85o, 95o:0.9998, T5o, J5o, Q5o:0.9714, K5o:0.7441, A5o:0.9090, 62s:0.9961, 63s:0.6763, 64s:0.9512, 65s:0.9997, 66:0.9701, 76o:0.8602, 86o:0.9954, 96o:0.9997, T6o:0.9997, J6o, Q6o:0.8903, K6o:0.8143, A6o:0.8238, 72s, 73s:0.9770, 74s:0.6422, 75s:0.9763, 76s:0.9998, 77:0.8132, 87o:0.8717, 97o:0.8409, T7o:0.6137, J7o:0.9812, Q7o:0.7745, K7o:0.8429, A7o:0.8125, 82s:0.9997, 83s, 84s:0.7065, 85s:0.7929, 86s:0.8728, 87s:0.9316, 88:0.9021, 98o:0.8096, T8o:0.8563, J8o:0.7519, Q8o:0.8132, K8o:0.7922, A8o:0.9567, 92s, 93s:0.9961, 94s:0.9183, 95s:0.4715, 96s:0.9307, 97s:0.9998, 98s:0.9898, 99:0.9996, T9o:0.8986, J9o:0.9824, Q9o:0.7881, K9o:0.8893, A9o:0.8696, T2s:0.8100, T3s:0.4368, T4s:0.8205, T5s:0.9026, T6s:0.9997, T7s:0.9992, T8s:0.9238, T9s:0.8262, TT:0.9305, JTo:0.8601, QTo:0.9859, KTo:0.9176, ATo:0.8926, J2s:0.7402, J3s:0.8228, J4s:0.1754, J5s:0.9371, J6s:0.9748, J7s, J8s, J9s:0.8538, JTs:0.8426, JJ:0.9882, QJo:0.8198, KJo:0.9536, AJo:0.9508, Q2s:0.9480, Q3s:0.9902, Q4s:0.9992, Q5s:0.7110, Q6s:0.9994, Q7s:0.9995, Q8s, Q9s:0.9998, QTs:0.8832, QJs:0.8610, QQ:0.8081, KQo:0.7976, AQo:0.8821, K2s, K3s, K4s:0.9923, K5s, K6s:0.9967, K7s:0.9997, K8s, K9s, KTs:0.8162, KJs:0.6125, KQs:0.9586, KK:0.5369, AKo:0.8157, A2s, A3s:0.9553, A4s, A5s:0.5643, A6s:0.9429, A7s:0.8943, A8s:0.2819, A9s:0.9365, ATs:0.7157, AJs:0.5147, AQs:0.6085, AKs:0.7046, AA:0.5295"
      },
      {
        "action": "open 2.5bb",
        "min": 0.0001,
        "range": "22:0.0038, K2o:0.0001, A2o:0.0085, 32s:0.0035, 33:0.0002, 53o:0.0001, A3o:0.1337, 42s:0.0482, 43s:0.3091, 44:0.0006, 54o:0.0165, 64o:0.0002, Q4o:0.0001, K4o:0.1408, A4o:0.0676, 52s:0.0961, 53s:0.4770, 54s:0.1158, 55:0.0850, 65o:0.3062, 75o:0.0030, 95o:0.0001, Q5o:0.0286, K5o:0.2559, A5o:0.0910, 62s:0.0038, 63s:0.3237, 64s:0.0488, 65s:0.0002, 66:0.0299, 76o:0.1398, 86o:0.0046, 96o:0.0003, T6o:0.0003, J6o:0.0001, Q6o:0.1097, K6o:0.1857, A6o:0.1762, 73s:0.0230, 74s:0.3578, 75s:0.0237, 76s:0.0002, 77:0.1868, 87o:0.1283, 97o:0.1591, T7o:0.3863, J7o:0.0188, Q7o:0.2255, K7o:0.1571, A7o:0.1875, 82s:0.0002, 84s:0.2935, 85s:0.2071, 86s:0.1272, 87s:0.0684, 88:0.0979, 98o:0.1904, T8o:0.1437, J8o:0.2481, Q8o:0.1868, K8o:0.2078, A8o:0.0433, 93s:0.0038, 94s:0.0817, 95s:0.5285, 96s:0.0693, 97s:0.0002, 98s:0.0102, 99:0.0004, T9o:0.1014, J9o:0.0176, Q9o:0.2119, K9o:0.1107, A9o:0.1304, T2s:0.1899, T3s:0.5632, T4s:0.1794, T5s:0.0974, T6s:0.0003, T7s:0.0008, T8s:0.0762, T9s:0.1738, TT:0.0695, JTo:0.1399, QTo:0.0141, KTo:0.0824, ATo:0.1074, J2s:0.2598, J3s:0.1772, J4s:0.8246, J5s:0.0629, J6s:0.0252, J8s:0.0001, J9s:0.1462, JTs:0.1574, JJ:0.0118, QJo:0.1802, KJo:0.0464, AJo:0.0492, Q2s:0.0520, Q3s:0.0098, Q4s:0.0008, Q5s:0.2890, Q6s:0.0006, Q7s:0.0005, Q9s:0.0002, QTs:0.1168, QJs:0.1390, QQ:0.1919, KQo:0.2024, AQo:0.1179, K2s:0.0001, K3s:0.0001, K4s:0.0077, K5s:0.0001, K6s:0.0033, K7s:0.0003, K9s:0.0001, KTs:0.1838, KJs:0.3875, KQs:0.0414, KK:0.4631, AKo:0.1843, A2s:0.0001, A3s:0.0447, A5s:0.4357, A6s:0.0571, A7s:0.1057, A8s:0.7181, A9s:0.0635, ATs:0.2843, AJs:0.4853, AQs:0.3915, AKs:0.2954, AA:0.4705"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.2483, 32o:0.6887, 42o:0.9181, 52o:0.3638, 62o:0.8086, 72o:0.8412, 82o:0.3119, 92o:0.4103, T2o:0.0812, J2o:0.9433, Q2o:0.3864, K2o:0.1693, A2o:0.8157, 32s:0.9821, 33:0.6837, 43o:0.7074, 53o:0.9499, 63o:0.0655, 73o:0.1873, 83o:0.9696, 93o:0.8447, T3o:0.7011, J3o:0.0798, Q3o:0.8330, K3o:0.7019, A3o:0.8228, 42s:0.9937, 43s:0.9896, 44:0.8241, 54o:0.6895, 64o:0.7549, 74o:0.6005, 84o:0.2100, 94o:0.5036, T4o:0.6958, J4o:0.8026, Q4o:0.8334, K4o:0.8349, A4o:0.9257, 52s:0.7968, 53s:0.7068, 54s:0.2889, 55:0.9860, 65o:0.9765, 75o:0.2054, 85o:0.1519, 95o:0.8921, T5o:0.8099, J5o:0.6232, Q5o:0.7831, K5o:0.8975, A5o:0.7164, 62s:0.5382, 63s:0.8126, 64s:0.7425, 65s:0.1828, 66:0.8443, 76o:0.7916, 86o:0.8848, 96o:0.3335, T6o:0.3003, J6o:0.7899, Q6o:0.7129, K6o:0.5848, A6o:0.9294, 72s:0.8498, 73s:0.9935, 74s:0.7928, 75s:0.2232, 76s:0.3486, 77:0.7859, 87o:0.8891, 97o:0.9122, T7o:0.7628, J7o:0.4534, Q7o:0.8895, K7o:0.8168, A7o:0.8872, 82s, 83s:0.8584, 84s:0.9822, 85s:0.9370, 86s:0.7092, 87s:0.8389, 88:0.5526, 98o:0.7451, T8o:0.8073, J8o:0.8929, Q8o:0.4192, K8o:0.4084, A8o:0.2400, 92s:0.9389, 93s:0.9932, 94s:0.9490, 95s:0.9966, 96s:0.9998, 97s:0.5384, 98s:0.7579, 99:0.3929, T9o:0.9807, J9o:0.7025, Q9o:0.9752, K9o:0.7016, A9o:0.4687, T2s:0.9855, T3s:0.8483, T4s:0.9994, T5s, T6s:0.9863, T7s:0.6869, T8s:0.8840, T9s:0.5368, TT:0.5969, JTo:0.7903, QTo:0.9242, KTo:0.9388, ATo:0.3016, J2s:0.9725, J3s:0.9706, J4s:0.9975, J5s:0.9988, J6s:0.9971, J7s:0.6995, J8s:0.7007, J9s:0.8725, JTs:0.4223, JJ:0.1154, QJo:0.9657, KJo:0.6878, AJo:0.0066, Q2s:0.9552, Q3s, Q4s:0.9937, Q5s:0.9990, Q6s, Q7s:0.9973, Q8s:0.9876, Q9s:0.9983, QTs:0.7001, QJs:0.9044, QQ:0.0004, KQo:0.0955, AQo:0.0004, K2s:0.8628, K3s:0.9997, K4s:0.9051, K5s:0.9986, K6s:0.9446, K7s:0.9912, K8s:0.2611, K9s:0.1315, KTs:0.1069, KJs:0.4745, KQs:0.0478, A2s:0.1841, A3s:0.3362, A4s:0.8692, A5s:0.0202, A6s:0.8971, A7s:0.3671, A8s:0.1769, A9s:0.0087, ATs:0.0165, AJs:0.0930, AQs:0.0003"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "22:0.7517, 32o:0.3113, 42o:0.0819, 52o:0.6362, 62o:0.1914, 72o:0.1588, 82o:0.6881, 92o:0.5897, T2o:0.9188, J2o:0.0567, Q2o:0.6136, K2o:0.8307, A2o:0.1843, 32s:0.0178, 33:0.3163, 43o:0.2926, 53o:0.0501, 63o:0.9345, 73o:0.8127, 83o:0.0304, 93o:0.1553, T3o:0.2989, J3o:0.9202, Q3o:0.1670, K3o:0.2981, A3o:0.1772, 42s:0.0063, 43s:0.0104, 44:0.1759, 54o:0.3105, 64o:0.2451, 74o:0.3995, 84o:0.7900, 94o:0.4964, T4o:0.3042, J4o:0.1974, Q4o:0.1666, K4o:0.1651, A4o:0.0743, 52s:0.2032, 53s:0.2932, 54s:0.7111, 55:0.0140, 65o:0.0235, 75o:0.7946, 85o:0.8481, 95o:0.1079, T5o:0.1901, J5o:0.3768, Q5o:0.2169, K5o:0.1025, A5o:0.2836, 62s:0.4618, 63s:0.1874, 64s:0.2575, 65s:0.8172, 66:0.1557, 76o:0.2084, 86o:0.1152, 96o:0.6665, T6o:0.6997, J6o:0.2101, Q6o:0.2871, K6o:0.4152, A6o:0.0706, 72s:0.1502, 73s:0.0065, 74s:0.2072, 75s:0.7768, 76s:0.6514, 77:0.2141, 87o:0.1109, 97o:0.0878, T7o:0.2372, J7o:0.5466, Q7o:0.1105, K7o:0.1832, A7o:0.1128, 83s:0.1416, 84s:0.0178, 85s:0.0630, 86s:0.2908, 87s:0.1611, 88:0.4474, 98o:0.2549, T8o:0.1927, J8o:0.1071, Q8o:0.5808, K8o:0.5916, A8o:0.7600, 92s:0.0611, 93s:0.0068, 94s:0.0510, 95s:0.0034, 96s:0.0002, 97s:0.4616, 98s:0.2421, 99:0.6071, T9o:0.0193, J9o:0.2975, Q9o:0.0248, K9o:0.2984, A9o:0.5313, T2s:0.0145, T3s:0.1517, T4s:0.0006, T6s:0.0137, T7s:0.3131, T8s:0.1160, T9s:0.4632, TT:0.4031, JTo:0.2097, QTo:0.0758, KTo:0.0612, ATo:0.6984, J2s:0.0275, J3s:0.0294, J4s:0.0025, J5s:0.0012, J6s:0.0029, J7s:0.3005, J8s:0.2993, J9s:0.1275, JTs:0.5777, JJ:0.8846, QJo:0.0343, KJo:0.3122, AJo:0.9934, Q2s:0.0448, Q4s:0.0063, Q5s:0.0010, Q7s:0.0027, Q8s:0.0124, Q9s:0.0017, QTs:0.2999, QJs:0.0956, QQ:0.9996, KQo:0.9045, AQo:0.9996, K2s:0.1372, K3s:0.0003, K4s:0.0949, K5s:0.0014, K6s:0.0554, K7s:0.0088, K8s:0.7389, K9s:0.8685, KTs:0.8931, KJs:0.5255, KQs:0.9522, KK, AKo, A2s:0.8159, A3s:0.6638, A4s:0.1308, A5s:0.9798, A6s:0.1029, A7s:0.6329, A8s:0.8231, A9s:0.9913, ATs:0.9835, AJs:0.9070, AQs:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.9962, A2o:0.2309, 33:0.9998, A3o:0.3689, 43s:0.6265, 44:0.9994, 54o:0.0001, K4o:0.1784, A4o:0.4917, 52s:0.0043, 53s:0.5211, 54s:0.8786, 55:0.9150, 65o:0.0001, K5o:0.4130, A5o:0.5500, 63s:0.6151, 64s:0.9397, 65s:0.9996, 66:0.9701, 76o:0.3609, Q6o:0.0019, K6o:0.7204, A6o:0.4355, 74s:0.6366, 75s:0.9761, 76s:0.9925, 77:0.8132, 87o:0.8014, 97o:0.1668, T7o:0.4035, J7o:0.1816, Q7o:0.1235, K7o:0.8422, A7o:0.7685, 84s:0.6882, 85s:0.7875, 86s:0.8705, 87s:0.9309, 88:0.9021, 98o:0.7822, T8o:0.8363, J8o:0.6492, Q8o:0.7576, K8o:0.7395, A8o:0.9561, 94s:0.1918, 95s:0.4612, 96s:0.9139, 97s:0.9998, 98s:0.9385, 99:0.9996, T9o:0.8640, J9o:0.8874, Q9o:0.7879, K9o:0.8725, A9o:0.8253, T2s:0.0026, T3s:0.2985, T4s:0.8197, T5s:0.8975, T6s:0.9996, T7s:0.9876, T8s:0.8699, T9s:0.7336, TT:0.9305, JTo:0.8601, QTo:0.9859, KTo:0.8881, ATo:0.8926, J2s:0.7023, J3s:0.8053, J4s:0.1753, J5s:0.9369, J6s:0.9747, J7s, J8s:0.9998, J9s:0.8538, JTs:0.8426, JJ:0.9881, QJo:0.8198, KJo:0.9121, AJo:0.9507, Q2s:0.9469, Q3s:0.9892, Q4s:0.9932, Q5s:0.6716, Q6s:0.9986, Q7s:0.9995, Q8s, Q9s:0.9998, QTs:0.8832, QJs:0.8610, QQ:0.8075, KQo:0.7964, AQo:0.4352, K2s, K3s:0.9997, K4s:0.9923, K5s:0.8157, K6s:0.9967, K7s:0.9997, K8s, K9s, KTs:0.8106, KJs:0.5773, KQs:0.9586, A2s:0.9361, A3s:0.9336, A4s:0.9864, A5s:0.5537, A6s:0.9429, A7s:0.8939, A8s:0.2816, A9s:0.9275, ATs:0.7157, AJs:0.5146, AQs:0.4759"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0029, A2o:0.4451, K3o:0.0706, A3o:0.1243, 43s:0.0478, 54o:0.0004, K4o:0.2278, A4o:0.2502, 53s:0.0012, 54s:0.0054, 65o:0.0262, 75o:0.0012, Q5o:0.0075, K5o:0.3295, A5o:0.2932, 62s:0.0026, 63s:0.0388, 64s:0.0113, 76o:0.0884, Q6o:0.0020, K6o:0.0937, A6o:0.3521, 74s:0.0053, 76s:0.0073, 87o:0.0002, 97o:0.2162, T7o:0.1165, J7o:0.0471, Q7o:0.0183, K7o:0.0003, A7o:0.0419, 82s:0.0002, 84s:0.0001, 85s:0.0047, 86s:0.0020, 87s:0.0007, 98o:0.0269, T8o:0.0200, J8o:0.1023, Q8o:0.0555, K8o:0.0527, A8o:0.0006, 94s:0.0553, 95s:0.0095, 96s:0.0168, 98s:0.0513, T9o:0.0343, J9o:0.0949, Q9o:0.0001, K9o:0.0167, A9o:0.0433, T2s:0.0022, T3s:0.1350, T5s:0.0048, T7s:0.0116, T8s:0.0539, T9s:0.0926, KTo:0.0295, J2s:0.0155, J3s:0.0156, J4s:0.0001, J5s:0.0001, J8s:0.0001, JJ:0.0001, KJo:0.0415, Q2s:0.0004, Q4s:0.0059, Q5s:0.0394, Q6s:0.0004, QQ:0.0006, KQo:0.0012, AQo:0.4468, K3s:0.0002, K5s:0.1841, KTs:0.0056, KJs:0.0352, KK:0.5369, AKo:0.3906, A5s:0.0030, A7s:0.0003, A8s:0.0003, A9s:0.0090, AJs:0.0001, AQs:0.1325, AKs:0.7046, AA:0.5295"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.3155, A3o:0.3731, A4o:0.1906, A5o:0.0657, A6o:0.0362, A7o:0.0020, A9o:0.0010, AKo:0.4251, A2s:0.0638, A3s:0.0217, A4s:0.0136, A5s:0.0076, AJs:0.0001"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@9",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 14.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7118, A2o:0.0008, 32s:0.0018, 33:0.2802, A3o:0.0430, 42s:0.0045, 43s:0.0094, 44:0.1402, 54o:0.0137, A4o:0.0085, 52s:0.0950, 53s:0.2879, 54s:0.7069, 55:0.0139, 65o:0.0001, Q5o:0.0006, A5o:0.0972, 62s:0.0004, 63s:0.1209, 64s:0.2451, 65s:0.8138, 66:0.1555, A6o:0.0033, 73s:0.0003, 74s:0.1286, 75s:0.7517, 76s:0.6469, 77:0.2136, A7o:0.0660, 83s:0.0065, 84s:0.0033, 85s:0.0027, 86s:0.2895, 87s:0.1603, 88:0.4463, 98o:0.0043, T8o:0.0313, K8o:0.0064, A8o:0.3505, 92s:0.0001, 95s:0.0009, 96s:0.0001, 97s:0.4592, 98s:0.2416, 99:0.6002, T9o:0.0021, J9o:0.0040, K9o:0.0528, A9o:0.3245, T2s:0.0001, T4s:0.0001, T6s:0.0094, T7s:0.3000, T8s:0.1150, T9s:0.4614, TT:0.4021, JTo:0.1869, QTo:0.0606, KTo:0.0609, ATo:0.4746, J3s:0.0011, J4s:0.0008, J5s:0.0011, J7s:0.2875, J8s:0.2990, J9s:0.1274, JTs:0.5731, JJ:0.8750, QJo:0.0241, KJo:0.3115, AJo:0.4148, Q4s:0.0007, Q5s:0.0008, Q7s:0.0024, Q8s:0.0121, Q9s:0.0017, QTs:0.2947, QJs:0.0952, QQ:0.9986, KQo:0.9024, AQo:0.9481, K2s:0.1242, K3s:0.0003, K4s:0.0935, K5s:0.0014, K6s:0.0521, K7s:0.0088, K8s:0.7277, K9s:0.8660, KTs:0.8873, KJs:0.5194, KQs:0.9505, KK:0.7450, A2s:0.0818, A3s:0.3898, A4s:0.0834, A5s:0.5969, A6s:0.0464, A7s:0.4130, A8s:0.6034, A9s:0.9806, ATs:0.7787, AJs:0.8539, AQs:0.9972"
      },
      {
        "action": "4bet 14.5bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.1171, A3o:0.1322, 54o:0.0007, 94o:0.0001, A4o:0.0650, 54s:0.0006, 75o:0.0008, K5o:0.0001, A5o:0.1801, 62s:0.0003, 63s:0.0016, 64s:0.0016, 65s:0.0013, 86o:0.0001, 96o:0.0001, T6o:0.0001, A6o:0.0655, 72s:0.0001, 73s:0.0001, 74s:0.0087, 75s:0.0070, 76s:0.0001, 87o:0.0013, T7o:0.0002, K7o:0.0005, A7o:0.0428, 85s:0.0192, 98o:0.0001, T8o:0.0055, Q8o:0.0001, K8o:0.0009, A8o:0.3975, 94s:0.0001, 95s:0.0001, 97s:0.0001, 98s:0.0001, T9o:0.0054, J9o:0.0005, K9o:0.0050, A9o:0.1980, T6s:0.0001, T7s:0.0027, T9s:0.0003, JTo:0.0012, QTo:0.0122, ATo:0.1921, J7s:0.0093, JTs:0.0001, JJ:0.0001, QJo:0.0058, AJo:0.5635, Q4s:0.0001, Q5s:0.0001, Q7s:0.0001, QTs:0.0004, QJs:0.0001, AQo:0.0508, K6s:0.0032, KK:0.2153, AKo:0.0930, A2s:0.0199, A3s:0.0011, A4s:0.0003, A5s:0.0010, A6s:0.0161, A7s:0.0001, A8s:0.0018, A9s:0.0012, ATs:0.0001, AJs:0.0005, AQs:0.0003, AKs:0.9972, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0375, A2o:0.0075, 33:0.0361, A3o:0.0002, 44:0.0355, 54s:0.0011, 55:0.0001, A5o:0.0063, 62s:0.0004, 64s:0.0012, 65s:0.0001, 66:0.0001, K6o:0.0002, A6o:0.0003, 72s:0.0001, 76s:0.0010, 77:0.0004, A7o:0.0039, 87s:0.0001, 88:0.0010, K8o:0.0006, A8o:0.0112, 97s:0.0006, 98s:0.0004, 99:0.0069, J9o:0.0001, K9o:0.0004, A9o:0.0089, T7s:0.0004, T8s:0.0009, TT:0.0010, KTo:0.0002, ATo:0.0316, J7s:0.0001, JTs:0.0029, JJ:0.0096, KJo:0.0006, AJo:0.0151, QTs:0.0047, QJs:0.0003, QQ:0.0010, KQo:0.0014, AQo:0.0007, K2s:0.0009, K4s:0.0011, K8s:0.0050, K9s:0.0019, KTs:0.0057, KJs:0.0060, KQs:0.0016, KK:0.0398, AKo:0.9070, A2s:0.7130, A3s:0.2726, A4s:0.0471, A5s:0.3818, A6s:0.0403, A7s:0.2197, A8s:0.2178, A9s:0.0095, ATs:0.2046, AJs:0.0524, AQs:0.0023, AKs:0.0028"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0074, 99:0.2233, A9o:0.0001, TT:0.2933, JJ:0.6987, QQ:0.9047, AQo:0.0003, KK, AKo, A3s:0.0001, ATs:0.0044, AJs:0.0175, AQs:0.0006, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@2.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 9bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9844, J2o:0.2010, Q2o:0.5446, K2o:0.9085, A2o:0.0372, 32s:0.9929, 33:0.8911, 43o:0.4309, 53o:0.5143, T3o:0.1931, J3o:0.4554, Q3o:0.9591, K3o:0.8949, A3o:0.8262, 42s:0.9882, 43s:0.9975, 44, 54o:0.9988, 64o:0.9677, 74o:0.0013, 84o:0.0006, T4o:0.4911, J4o:0.8371, Q4o:0.9529, K4o:0.9930, A4o:0.9761, 52s:0.9759, 53s:0.9994, 54s:0.9949, 55, 65o:0.9960, 75o:0.8734, 85o:0.7970, 95o:0.0061, T5o:0.1909, J5o:0.9702, Q5o:0.9913, K5o:0.9755, A5o:0.7974, 62s:0.9819, 63s:0.9992, 64s:0.9793, 65s:0.9985, 66, 76o:0.9980, 86o:0.9955, 96o:0.9199, T6o:0.9448, J6o:0.6306, Q6o:0.9933, K6o:0.9846, A6o:0.8412, 72s:0.9747, 73s:0.9767, 74s:0.7683, 75s:0.9974, 76s:0.9990, 77, 87o:0.9939, 97o:0.9981, T7o:0.9989, J7o:0.9996, Q7o:0.9949, K7o:0.9981, A7o:0.9975, 82s:0.9469, 83s:0.9997, 84s:0.9935, 85s, 86s:0.9881, 87s:0.9985, 88, 98o:0.9998, T8o:0.9995, J8o:0.9702, Q8o:0.9992, K8o:0.9994, A8o:0.9823, 92s:0.9970, 93s:0.9973, 94s:0.9958, 95s:0.9984, 96s:0.9987, 97s, 98s:0.9884, 99:0.9998, T9o, J9o, Q9o:0.9998, K9o:0.9998, A9o:0.9989, T2s:0.9997, T3s:0.9983, T4s:0.9985, T5s:0.9958, T6s:0.9997, T7s:0.9989, T8s:0.9914, T9s, TT:0.9998, JTo:0.9996, QTo, KTo, ATo:0.9759, J2s:0.9994, J3s:0.9998, J4s:0.9988, J5s:0.9998, J6s:0.9907, J7s, J8s, J9s:0.9995, JTs, JJ:0.9994, QJo, KJo, AJo:0.9867, Q2s:0.9996, Q3s:0.9992, Q4s:0.9994, Q5s:0.9992, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ:0.9991, KQo, AQo:0.9616, K2s:0.9904, K3s:0.8752, K4s, K5s:0.9065, K6s:0.9888, K7s, K8s, K9s:0.9998, KTs, KJs, KQs, KK:0.7478, A2s:0.9155, A3s:0.9990, A4s, A5s, A6s, A7s, A8s:0.9983, A9s, ATs:0.9998, AJs:0.9703, AQs:0.9580"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.0155, 32o:0.0040, 42o:0.0159, 52o:0.1518, 72o:0.0010, 82o:0.0008, 92o:0.0232, T2o:0.2174, J2o:0.0594, Q2o:0.4304, K2o:0.0909, A2o:0.9628, 32s:0.0015, 33:0.1089, 43o:0.3040, 53o:0.2021, 63o:0.1239, 83o:0.0028, 93o:0.1765, T3o:0.0086, J3o:0.1803, Q3o:0.0205, K3o:0.1046, A3o:0.1737, 42s:0.0062, 43s:0.0017, 64o:0.0269, 74o:0.0530, 84o:0.1891, T4o:0.0516, J4o:0.0052, Q4o:0.0435, K4o:0.0069, A4o:0.0239, 52s:0.0177, 54s:0.0050, 55:0.0001, 65o:0.0037, 75o:0.1177, 85o:0.1529, 95o:0.1316, T5o:0.2607, J5o:0.0024, Q5o:0.0063, K5o:0.0241, A5o:0.2026, 62s:0.0026, 63s:0.0005, 64s:0.0193, 65s:0.0013, 76o:0.0004, 86o:0.0031, 96o:0.0673, T6o:0.0375, J6o:0.3592, Q6o:0.0059, K6o:0.0153, A6o:0.1588, 72s:0.0133, 73s:0.0129, 74s:0.2298, 75s:0.0006, 76s:0.0003, 87o:0.0035, J7o:0.0003, Q7o:0.0049, K7o:0.0018, A7o:0.0025, 82s:0.0189, 84s:0.0040, 86s:0.0118, 87s:0.0013, T8o:0.0004, J8o:0.0297, Q8o:0.0005, K8o:0.0006, A8o:0.0177, 92s:0.0015, 93s:0.0018, 94s:0.0008, 96s:0.0012, 97s:0.0001, 98s:0.0116, 99:0.0002, T9o:0.0001, Q9o:0.0001, K9o:0.0002, A9o:0.0011, T2s:0.0002, T3s:0.0006, T4s:0.0001, T5s:0.0027, T6s:0.0001, T7s:0.0005, T8s:0.0086, TT:0.0002, JTo:0.0003, KTo:0.0001, ATo:0.0241, J2s:0.0004, J3s:0.0001, J4s:0.0010, J5s:0.0001, J6s:0.0082, J9s:0.0004, JJ:0.0006, AJo:0.0133, Q2s:0.0001, Q3s:0.0003, Q4s:0.0003, Q5s:0.0003, Q9s:0.0001, QQ:0.0009, AQo:0.0384, K2s:0.0093, K3s:0.1247, K4s:0.0001, K5s:0.0935, K6s:0.0112, K9s:0.0001, KK:0.2522, AKo, A2s:0.0845, A3s:0.0010, A8s:0.0017, ATs:0.0002, AJs:0.0297, AQs:0.0420, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@2.5|BB:3BET@9",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 15.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, A3o:0.0003, 44:0.0006, 54s:0.0682, 55:0.0848, A5o:0.0002, 64s:0.0339, 65s:0.0001, 66:0.0299, A6o:0.0002, 75s:0.0066, 76s:0.0002, 77:0.1867, A7o:0.0003, 86s:0.0076, 87s:0.0666, 88:0.0978, A8o:0.0001, 95s:0.0001, 96s:0.0002, 97s:0.0001, 98s:0.0091, 99:0.0004, T9o:0.0002, A9o:0.0003, T5s:0.0006, T8s:0.0585, T9s:0.1732, TT:0.0686, JTo:0.0001, KTo:0.0016, ATo:0.0033, J8s:0.0001, J9s:0.1458, JTs:0.1571, JJ:0.0118, KJo:0.0006, AJo:0.0009, Q5s:0.0008, Q9s:0.0001, QTs:0.1071, QJs:0.1376, QQ:0.1918, KQo:0.0035, AQo:0.0007, K4s:0.0020, K5s:0.0001, K6s:0.0025, K7s:0.0002, KTs:0.1830, KJs:0.3653, KQs:0.0376, KK:0.1368, A3s:0.0254, A5s:0.3807, A6s:0.0424, A7s:0.0312, A8s:0.5663, A9s:0.0512, ATs:0.2626, AJs:0.4593, AQs:0.3805"
      },
      {
        "action": "4bet 15.5bb",
        "min": 0.0001,
        "range": "A2o:0.0070, A3o:0.1327, K4o:0.0015, A4o:0.0674, K5o:0.0006, A5o:0.0906, K6o:0.0001, A6o:0.1734, K7o:0.0040, A7o:0.1868, K8o:0.0007, A8o:0.0431, K9o:0.0021, A9o:0.1298, TT:0.0004, KTo:0.0117, ATo:0.1041, KJo:0.0135, AJo:0.0483, QQ:0.0001, KQo:0.0260, AQo:0.1169, K4s:0.0006, K6s:0.0001, KTs:0.0002, KJs:0.0202, KQs:0.0004, KK:0.3263, AKo:0.1616, A3s:0.0183, A5s:0.0498, A6s:0.0144, A7s:0.0740, A8s:0.1483, A9s:0.0122, ATs:0.0206, AJs:0.0258, AQs:0.0109, AKs:0.2912, AA:0.4705"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, A5o:0.0001, A6o:0.0001, 77:0.0001, A7o:0.0001, 88:0.0001, 96s:0.0001, A9o:0.0003, T9s:0.0001, TT:0.0005, J9s:0.0002, JTs:0.0001, AJo:0.0001, AQo:0.0002, KTs:0.0005, KJs:0.0005, AKo:0.0227, A3s:0.0009, A5s:0.0053, A6s:0.0002, A7s:0.0005, A8s:0.0035, A9s:0.0001, ATs:0.0011, AJs:0.0002, AQs:0.0001, AKs:0.0042"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@2.5|BB:3BET@9|SB:4BET@15.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.0041, K2o:0.0101, A2o:0.1926, 32s:0.0004, 33:0.0170, 53o:0.0019, K3o:0.0190, A3o:0.0280, 42s:0.0003, 43s:0.0008, 64o:0.0007, K4o:0.0006, A4o:0.0147, 52s:0.0139, 54s:0.0049, 55:0.0001, 65o:0.0014, 75o:0.0055, 85o:0.0005, T5o:0.0002, K5o:0.0004, A5o:0.1181, 62s:0.0007, 63s:0.0001, 64s:0.0176, 65s:0.0008, 76o:0.0001, 86o:0.0002, 96o:0.0001, T6o:0.0001, J6o:0.0004, K6o:0.0013, A6o:0.0267, 73s:0.0017, 74s:0.2231, 75s:0.0004, 76s:0.0003, 87o:0.0016, J7o:0.0001, K7o:0.0010, A7o:0.0024, 82s:0.0036, 84s:0.0019, 86s:0.0094, 87s:0.0013, T8o:0.0004, J8o:0.0296, Q8o:0.0002, K8o:0.0001, A8o:0.0176, 92s:0.0012, 93s:0.0006, 94s:0.0001, 96s:0.0012, 97s:0.0001, 98s:0.0112, 99:0.0002, T9o:0.0001, Q9o:0.0001, K9o:0.0002, A9o:0.0011, T2s:0.0001, T3s:0.0006, T4s:0.0001, T5s:0.0023, T6s:0.0001, T7s:0.0005, T8s:0.0085, TT:0.0002, JTo:0.0003, KTo:0.0001, ATo:0.0238, J2s:0.0004, J4s:0.0010, J5s:0.0001, J6s:0.0082, J9s:0.0004, JJ:0.0006, AJo:0.0132, Q2s:0.0001, Q3s:0.0003, Q4s:0.0002, Q5s:0.0002, Q9s:0.0001, QQ:0.0009, AQo:0.0384, K2s:0.0045, K3s:0.0302, K5s:0.0361, K6s:0.0021, K9s:0.0001, KK:0.0008, A2s:0.0158, A3s:0.0002, A8s:0.0015, ATs:0.0002, AJs:0.0294, AQs:0.0420, AKs:0.0013, AA:0.4243"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0114, K2o:0.0062, A2o:0.4504, 33:0.0917, 53o:0.0001, K3o:0.0258, A3o:0.0934, 42s:0.0001, 43s:0.0006, 84o:0.0001, A4o:0.0031, 54s:0.0001, 85o:0.0001, K5o:0.0015, A5o:0.0813, 64s:0.0016, 65s:0.0005, K6o:0.0010, A6o:0.0024, 74s:0.0021, 75s:0.0002, K7o:0.0002, 84s:0.0001, 86s:0.0024, K8o:0.0002, A8o:0.0001, 98s:0.0004, ATo:0.0003, AJo:0.0001, K2s:0.0048, K3s:0.0938, K4s:0.0001, K5s:0.0571, K6s:0.0090, KK:0.2514, AKo, A2s:0.0683, A3s:0.0008, A8s:0.0002, AJs:0.0003, AKs:0.9987, AA:0.5757"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@2.5|BB:3BET@9|SB:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0001, ATo:0.0002, JJ:0.0006, AJo:0.0010, QQ:0.0009, AQo:0.0205, KK:0.2522, AKo, AJs:0.0073, AQs:0.0263, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.4500, 44:0.9908, 55, 65s:0.2526, 66, 76s:0.9873, 77, 87s:0.5333, 88, 97s:0.0001, 98s:0.6092, 99, A9o:0.8669, T8s:0.8421, T9s:0.9997, TT:0.9897, JTo:0.0896, QTo:0.0576, KTo:0.4823, ATo, J8s:0.3127, J9s:0.9998, JTs, JJ:0.9798, QJo:0.9935, KJo:0.8289, AJo, Q8s:0.9200, Q9s:0.9996, QTs, QJs, QQ:0.1256, KQo:0.9166, AQo:0.8150, K4s:0.0021, K5s:0.3055, K6s:0.3558, K7s:0.9863, K8s:0.9990, K9s, KTs, KJs, KQs, AKo:0.0588, A2s:0.0457, A3s:0.8843, A4s:0.9981, A5s:0.9997, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs:0.7232"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0041, K2o:0.0001, A2o:0.4989, 33:0.0018, K3o:0.0018, A3o:0.8735, 44:0.0091, K4o:0.0424, A4o:0.9562, K5o:0.0155, A5o:0.9893, K6o:0.0149, A6o:0.8301, K7o:0.0035, A7o:0.8534, A8o:0.3754, K9o:0.1056, A9o:0.1317, TT:0.0103, QTo:0.3006, KTo:0.5171, ATo:0.0001, JJ:0.0202, QJo:0.0038, KJo:0.1710, Q4s:0.0020, Q5s:0.0008, Q6s:0.0001, QQ:0.7344, KQo:0.0162, AQo:0.1532, K2s:0.6415, K3s:0.6236, K4s:0.9258, K5s:0.5853, K6s:0.5699, K7s:0.0083, KK, AKo:0.8943, A2s:0.9543, A3s:0.1157, A4s:0.0019, A5s:0.0003, A6s:0.0001, A9s:0.0001, AKs:0.2361, AA:0.9990"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, A2o:0.0109, Q3o:0.0003, K3o:0.0012, A3o:0.0169, Q4o:0.0004, K4o:0.0001, A4o:0.0276, K5o:0.0017, A5o:0.0055, Q6o:0.0005, K6o:0.0050, A6o:0.0052, K7o:0.0098, A7o:0.0075, Q8o:0.0001, A8o:0.0008, K9o:0.0058, QTo:0.0245, QJo:0.0003, Q2s:0.0083, Q3s:0.0081, Q4s:0.0214, Q5s:0.0007, Q6s:0.0047, Q7s:0.0460, Q8s:0.0002, QQ:0.1400, KQo:0.0671, AQo:0.0318, K2s:0.0149, K3s:0.0103, K4s:0.0069, K5s:0.0029, K6s:0.0737, K7s:0.0031, AKo:0.0469, AKs:0.0407, AA:0.0010"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, Q2o:0.1122, K2o:0.6718, A2o:0.0007, 32s:0.9996, 33, 43o:0.0001, 53o:0.8355, Q3o:0.9101, K3o:0.8970, A3o:0.3830, 42s:0.9716, 43s:0.9918, 44, 54o:0.9744, 64o:0.9033, J4o:0.0846, Q4o:0.9811, K4o:0.8358, A4o:0.9677, 52s:0.9997, 53s, 54s:0.8839, 55, 65o:0.8655, 75o:0.9936, 85o:0.5941, J5o:0.9532, Q5o:0.9819, K5o:0.7686, A5o:0.8463, 62s, 63s, 64s, 65s:0.9500, 66, 76o:0.9797, 86o:0.9667, 96o:0.7558, T6o:0.5989, J6o:0.8611, Q6o:0.9693, K6o:0.9557, A6o:0.9198, 72s:0.9946, 73s:0.9997, 74s, 75s, 76s, 77, 87o:0.9926, 97o:0.9526, T7o:0.7643, J7o:0.9577, Q7o:0.9154, K7o:0.9154, A7o, 82s:0.9974, 83s:0.6820, 84s:0.9988, 85s:0.9980, 86s, 87s:0.9966, 88, 98o:0.9998, T8o:0.9469, J8o:0.9792, Q8o:0.9796, K8o:0.9992, A8o, 92s, 93s:0.9856, 94s:0.9994, 95s, 96s, 97s:0.9971, 98s, 99, T9o:0.9655, J9o:0.9216, Q9o, K9o, A9o, T2s:0.9730, T3s:0.9963, T4s:0.9887, T5s, T6s:0.8109, T7s:0.8278, T8s:0.9978, T9s:0.9795, TT, JTo:0.9808, QTo:0.9997, KTo:0.9993, ATo, J2s, J3s, J4s:0.9998, J5s, J6s, J7s, J8s:0.9915, J9s, JTs, JJ, QJo, KJo:0.8822, AJo, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ:0.9627, KQo:0.9543, AQo:0.8943, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs:0.9997, KJs, KQs:0.9942, A2s, A3s:0.9982, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs:0.9992"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "52o:0.0001, Q2o:0.1881, K2o:0.3282, A2o:0.0434, 43o:0.0674, 53o:0.1416, J3o:0.0001, Q3o:0.0694, K3o:0.1027, A3o:0.2547, 42s:0.0284, 43s:0.0082, 54o:0.0253, 64o:0.0759, T4o:0.0002, J4o:0.0517, Q4o:0.0186, K4o:0.1642, A4o:0.0298, 52s:0.0002, 54s:0.1160, 65o:0.1343, 75o:0.0060, 85o:0.0085, 95o:0.0007, J5o:0.0408, Q5o:0.0174, K5o:0.2313, A5o:0.1537, 65s:0.0500, 76o:0.0203, 86o:0.0333, 96o:0.1473, T6o:0.2038, J6o:0.0554, Q6o:0.0307, K6o:0.0443, A6o:0.0721, 72s:0.0026, 73s:0.0001, 87o:0.0070, 97o:0.0473, T7o:0.2356, J7o:0.0422, Q7o:0.0845, K7o:0.0846, 82s:0.0008, 83s:0.3176, 84s:0.0011, 85s:0.0020, 87s:0.0034, 98o:0.0002, T8o:0.0531, J8o:0.0207, Q8o:0.0204, K8o:0.0008, 93s:0.0144, 94s:0.0005, 97s:0.0029, T9o:0.0345, J9o:0.0784, T2s:0.0269, T3s:0.0037, T4s:0.0113, T6s:0.1891, T7s:0.1722, T8s:0.0022, T9s:0.0205, JTo:0.0192, QTo:0.0003, KTo:0.0007, J4s:0.0001, J8s:0.0085, KJo:0.1178, Q3s:0.0001, QQ:0.0023, KQo:0.0457, AQo:0.1057, KTs:0.0003, KQs:0.0058, KK, AKo:0.4226, A3s:0.0018, AQs:0.0008, AKs:0.8296, AA:0.0006"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "52o:0.2219, T2o:0.0012, J2o:0.0492, Q2o:0.1563, A2o:0.9559, 43o:0.0775, 53o:0.0196, 63o:0.0497, 73o:0.0001, 83o:0.0007, T3o:0.0485, J3o:0.0093, Q3o:0.0187, K3o:0.0002, A3o:0.3623, 54o:0.0002, 64o:0.0192, 74o:0.4126, T4o:0.1014, J4o:0.0870, A4o:0.0025, 75o:0.0001, 85o:0.2853, 95o:0.1622, T5o:0.0934, J5o:0.0018, Q5o:0.0004, K5o:0.0001, 96o:0.0905, T6o:0.1918, J6o:0.0779, A6o:0.0081, 72s:0.0001, 82s:0.0001, QQ:0.0350, KK:0.0001, AKo:0.5774, AKs:0.1704, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0009, 33:0.7661, 44:0.8846, 54s:0.5506, 55:0.9921, A5o:0.1610, 64s:0.0005, 65s:0.2516, 66:0.9976, 74s:0.0001, 75s:0.2101, 76s:0.9129, 77:0.9983, K7o:0.0036, A7o:0.0015, 86s:0.0009, 87s:0.9896, 88:0.9980, A8o:0.0015, 96s:0.0004, 97s:0.1324, 98s:0.8976, 99:0.9633, A9o:0.0007, T8s:0.7980, T9s:0.8489, TT:0.9983, KTo:0.9257, ATo:0.5409, J7s:0.1518, J8s:0.2332, J9s:0.7754, JTs:0.9903, JJ:0.9953, KJo:0.9871, AJo:0.9120, Q7s:0.0322, Q8s:0.0129, Q9s:0.1936, QTs:0.9968, QJs:0.9047, QQ:0.9978, KQo:0.9980, AQo:0.9993, K2s:0.1405, K3s:0.0501, K4s:0.8185, K5s:0.9398, K6s:0.9918, K7s:0.9859, K8s:0.6129, K9s:0.9588, KTs:0.6831, KJs:0.8276, KQs:0.9607, KK:0.0010, A2s:0.6790, A3s:0.8265, A4s:0.9890, A5s:0.9832, A6s:0.8827, A7s:0.9912, A8s:0.9499, A9s:0.8924, ATs:0.9984, AJs:0.9096, AQs:0.9970, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0438, A3o:0.0600, A4o:0.0385, K5o:0.0007, A5o:0.1417, K6o:0.0006, A6o:0.2444, 74s:0.0001, K7o:0.0001, A7o:0.0015, A8o:0.2019, 99:0.0006, A9o:0.2594, KTo:0.0003, ATo:0.1258, JJ:0.0010, KJo:0.0002, AJo:0.0521, Q3s:0.0001, Q5s:0.0001, Q7s:0.0001, QQ:0.0001, AQo:0.0001, K2s:0.0033, K3s:0.0003, K4s:0.0040, K5s:0.0019, K6s:0.0021, K7s:0.0009, K8s:0.0031, KK:0.0287, AKo:0.0052, A2s:0.0005, A3s:0.0050, A4s:0.0001, A5s:0.0075, A6s:0.0010, A7s:0.0001, A9s:0.0003, ATs:0.0002, AJs:0.0001, AQs:0.0008, AKs:0.0281, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.6239, A2o:0.0001, 33:0.1082, A3o:0.0001, 44:0.1087, A4o:0.0020, 55:0.0068, A5o:0.0010, 66:0.0021, 77:0.0015, A7o:0.0001, 86s:0.0001, 87s:0.0004, 88:0.0016, A8o:0.0031, 98s:0.0005, 99:0.0360, A9o:0.0005, T7s:0.0001, T9s:0.0017, TT:0.0017, ATo:0.0052, JTs:0.0001, JJ:0.0037, KJo:0.0008, AJo:0.0020, Q3s:0.0001, Q6s:0.0001, Q8s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0015, QQ:0.0020, KQo:0.0009, AQo:0.0006, K2s:0.1314, K3s:0.0193, K4s:0.1333, K5s:0.0168, K6s:0.0007, K7s:0.0071, K8s:0.3794, K9s:0.0389, KTs:0.3162, KJs:0.1724, KQs:0.0390, KK:0.9703, AKo:0.9948, A2s:0.3195, A3s:0.1674, A4s:0.0105, A5s:0.0091, A6s:0.1138, A7s:0.0073, A8s:0.0501, A9s:0.1072, ATs:0.0012, AJs:0.0890, AQs:0.0022, AKs:0.9719"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@17.7",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0001, 42s:0.0010, 43s:0.0021, 54o:0.0004, 54s:0.0002, A5o:0.0002, 65s:0.0001, K6o:0.0001, A6o:0.0002, T7o:0.0042, T8o:0.0041, T9o:0.0005, J9o:0.0056, T2s:0.0046, T3s:0.0001, T4s:0.0017, T6s:0.0241, T7s:0.0100, T8s:0.0005, T9s:0.0002, JTo:0.0004, KJo:0.0009, QQ:0.0023, KQo:0.0111, AQo:0.0201, KQs:0.0004, KK:0.2451, AKo:0.0194, AQs:0.0002, AKs:0.1109, AA:0.0006"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0006, A2o:0.0425, 43o:0.0004, 53o:0.0023, K3o:0.0003, A3o:0.2525, 42s:0.0089, 43s:0.0060, 54o:0.0141, 64o:0.0033, K4o:0.0025, A4o:0.0294, 54s:0.1157, 65o:0.0681, 75o:0.0048, 85o:0.0001, K5o:0.0018, A5o:0.1503, 65s:0.0494, 76o:0.0179, 86o:0.0027, K6o:0.0001, A6o:0.0703, 72s:0.0002, 73s:0.0001, 87o:0.0064, 97o:0.0208, T7o:0.0490, J7o:0.0004, K7o:0.0090, 83s:0.0635, 84s:0.0006, 85s:0.0018, 87s:0.0033, 98o:0.0001, T8o:0.0025, J8o:0.0005, 93s:0.0011, 97s:0.0027, T9o:0.0228, J9o:0.0460, T3s:0.0014, T4s:0.0043, T6s:0.1566, T7s:0.1605, T8s:0.0016, T9s:0.0203, JTo:0.0179, QTo:0.0001, KTo:0.0001, J4s:0.0001, J8s:0.0081, KJo:0.0547, Q3s:0.0001, KQo:0.0204, AQo:0.0856, KTs:0.0003, KQs:0.0054, KK:0.7548, AKo:0.4032, A3s:0.0018, AQs:0.0006, AKs:0.7187"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0002, AQo:0.0008, KK, AKo:0.4226, AKs:0.8296, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0084, 44:0.0766, A4o:0.0527, 54s:0.0098, 55:0.2326, A5o:0.2504, 65s:0.0015, 66:0.3015, 76s:0.2762, 77:0.0102, A7o:0.0001, 87s:0.2134, 88:0.0429, A8o:0.0002, 97s:0.0005, 98s:0.0444, A9o:0.0008, T8s:0.0065, T9s:0.2986, TT:0.2097, ATo:0.2986, JTs:0.0132, JJ:0.0364, AJo:0.3356, Q8s:0.0007, Q9s:0.0031, QTs:0.1137, QJs:0.2876, QQ:0.7618, AQo:0.3075, K3s:0.0006, K9s:0.0014, KTs:0.0317, KQs:0.3076, A2s:0.0187, A3s:0.1213, A4s:0.0069, A5s:0.0273, A6s:0.0478, A7s:0.0008, A9s:0.0002, ATs:0.1475, AJs:0.1505, AQs:0.3330, AA:0.2461"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0072, A3o:0.0166, 44:0.4173, A4o:0.0062, 55:0.6679, A5o:0.0400, 66:0.6956, A6o:0.0145, 75s:0.0001, 77:0.9897, A7o:0.1333, 85s:0.0001, 86s:0.0004, 87s:0.0009, 88:0.9551, A8o:0.5492, 98s:0.0005, 99:0.9998, A9o:0.3981, T8s:0.0003, T9s:0.0003, TT:0.7879, ATo:0.6632, J9s:0.0001, JTs:0.0003, JJ:0.9635, AJo:0.6609, Q6s:0.0001, Q8s:0.0011, Q9s:0.0077, QTs:0.0057, QQ:0.2382, AQo:0.6924, K8s:0.0014, KTs:0.0017, KJs:0.0001, KQs:0.0288, KK, AKo, A2s:0.8792, A3s:0.8694, A4s:0.9905, A5s:0.9718, A6s:0.9515, A7s:0.9991, A8s, A9s:0.9997, ATs:0.8524, AJs:0.8494, AQs:0.6670, AKs, AA:0.7539"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@14|BTN:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0350, KK:0.0001, AKo:0.5774, AKs:0.1704, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2079, A2o:0.0001, 32s:0.9983, 33:0.0386, 43o:0.1320, 53o:0.9937, 42s:0.9970, 43s:0.9992, 44:0.2800, 54o:0.9992, 64o:0.9973, A4o:0.0074, 52s:0.9974, 53s:0.9997, 54s:0.9993, 55:0.9865, 65o:0.9995, 75o:0.9933, K5o:0.4325, A5o:0.0021, 62s:0.9968, 63s, 64s:0.9991, 65s:0.9814, 66:0.9970, 76o:0.9997, 86o:0.9933, K6o:0.9684, A6o:0.0277, 72s:0.3812, 73s:0.9711, 74s:0.9983, 75s, 76s:0.9993, 77:0.9995, 87o:0.9994, 97o:0.9943, T7o:0.9621, Q7o:0.0191, K7o:0.9781, A7o:0.1190, 82s:0.1090, 83s:0.9280, 84s:0.9990, 85s:0.9990, 86s:0.9988, 87s:0.9998, 88, 98o:0.9944, T8o:0.9986, J8o:0.9560, Q8o:0.8955, K8o:0.9986, A8o:0.5735, 92s:0.9667, 93s:0.9581, 94s:0.9960, 95s:0.9985, 96s:0.9993, 97s, 98s:0.9995, 99, T9o:0.9996, J9o:0.9992, Q9o:0.9923, K9o:0.9983, A9o:0.7774, T2s:0.9880, T3s:0.9971, T4s:0.9959, T5s:0.9991, T6s:0.9997, T7s, T8s:0.9995, T9s, TT, JTo, QTo:0.9988, KTo, ATo:0.8542, J2s:0.5754, J3s:0.9410, J4s:0.9547, J5s:0.6700, J6s:0.9588, J7s:0.8704, J8s:0.9770, J9s:0.8954, JTs:0.9985, QJo:0.0115, KJo:0.0639, AJo:0.9038, Q2s:0.7728, Q3s:0.4971, Q4s:0.7455, Q5s:0.9723, Q6s:0.9650, Q7s:0.9986, Q8s:0.8740, Q9s:0.9835, QTs:0.9991, QJs:0.0302, KQo:0.9096, K2s:0.0537, K3s:0.4887, K4s:0.1832, K5s:0.5137, K6s:0.1612, K7s:0.5736, K8s:0.9986, K9s:0.9996, KTs:0.9950, KJs:0.0071, KQs:0.6170, A2s:0.0007, A3s:0.0003, A4s:0.1228, A5s:0.0495, A6s:0.3035, A7s:0.4217, A8s:0.9743, A9s:0.9995, ATs, AJs:0.9981, AQs:0.0016"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0097, K2o:0.0050, A2o:0.1078, Q3o:0.1323, K3o:0.0741, A3o:0.3104, Q4o:0.0623, K4o:0.0313, A4o:0.4034, Q5o:0.2253, K5o:0.0821, A5o:0.1657, 64s:0.0003, Q6o:0.0067, A6o:0.6092, Q7o:0.0566, K7o:0.0002, A7o:0.2191, 82s:0.0001, 86s:0.0001, Q8o:0.1016, A8o:0.4085, 92s:0.0001, 93s:0.0010, 94s:0.0008, 96s:0.0001, 98s:0.0001, Q9o:0.0063, K9o:0.0003, A9o:0.2225, QTo:0.0011, ATo:0.1457, J4s:0.0001, JJ:0.0142, AJo:0.0137, Q2s:0.0171, Q3s:0.0071, Q4s:0.0233, Q5s:0.0008, Q7s:0.0007, Q8s:0.0001, QQ:0.2984, AQo:0.0096, K3s:0.0001, K6s:0.0001, KK:0.1123, AKo:0.0511, A2s:0.0007, A5s:0.0002, AQs:0.4249, AKs:0.5925, AA:0.9983"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "J2o:0.0011, Q2o:0.0005, K2o:0.3110, A2o:0.0109, K3o:0.4838, A3o:0.0398, J4o:0.0001, K4o:0.3170, A4o:0.0071, Q5o:0.0003, K5o:0.2521, A5o:0.0002, K6o:0.0123, A6o:0.0912, J7o:0.0006, K7o:0.0084, A7o:0.1955, K8o:0.0011, A8o:0.0143, Q9o:0.0001, J2s:0.0003, J3s:0.0023, J4s:0.0003, J6s:0.0001, JJ:0.0542, Q2s:0.0001, Q3s:0.0001, Q4s:0.0001, Q5s:0.0001, Q7s:0.0001, QQ:0.0021, KK:0.8877, AKo:0.1308, AQs:0.1227, AKs:0.4071, AA:0.0017"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.7921, K2o:0.0005, A2o:0.8807, 33:0.9613, K3o:0.0048, A3o:0.6497, 42s:0.0002, 43s:0.0002, 44:0.7200, K4o:0.0781, A4o:0.5820, 53s:0.0002, 54s:0.0006, 55:0.0135, K5o:0.1676, A5o:0.8321, 65s:0.0186, 66:0.0030, K6o:0.0145, A6o:0.2717, 76s:0.0005, 77:0.0005, K7o:0.0105, A7o:0.4662, J8o:0.0007, K8o:0.0001, A8o:0.0035, 95s:0.0001, J2s:0.4211, J3s:0.0513, J4s:0.0427, J5s:0.3293, J6s:0.0404, J7s:0.1296, J8s:0.0228, J9s:0.1045, JTs:0.0014, JJ:0.9316, QJo:0.9884, KJo:0.9361, AJo:0.0825, Q2s:0.2095, Q3s:0.4956, Q4s:0.2302, Q5s:0.0258, Q6s:0.0349, Q7s:0.0003, Q8s:0.1257, Q9s:0.0164, QTs:0.0009, QJs:0.9698, QQ:0.6995, KQo:0.0904, AQo:0.9904, K2s:0.9462, K3s:0.5110, K4s:0.8168, K5s:0.4862, K6s:0.8387, K7s:0.4262, K8s:0.0014, K9s:0.0004, KTs:0.0049, KJs:0.9929, KQs:0.3830, AKo:0.8181, A2s:0.9986, A3s:0.9997, A4s:0.8772, A5s:0.9503, A6s:0.6964, A7s:0.5783, A8s:0.0256, A9s:0.0005, AJs:0.0019, AQs:0.4508, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0029, 54s:0.0968, 55:0.4182, 65s:0.0856, 66:0.0609, 76s:0.0101, 77:0.3002, 87s:0.0049, 88:0.5137, 99:0.1381, TT:0.2492, ATo:0.0007, JJ:0.3721, AJo:0.0956, Q6s:0.0017, Q9s:0.0015, QTs:0.0376, QQ:0.5809, AQo:0.6499, K2s:0.0364, K5s:0.0097, K6s:0.0003, K7s:0.0003, K9s:0.0189, KTs:0.2785, KJs:0.1841, KQs:0.4124, KK:0.2044, A3s:0.0001, A4s:0.0023, A5s:0.1020, A6s:0.0450, A7s:0.2413, A8s:0.1085, A9s:0.1429, ATs:0.3458, AJs:0.4806, AQs:0.1604, AA:0.0010"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0402, A3o:0.0100, K4o:0.0003, A4o:0.1440, 55:0.0003, A5o:0.0180, 65s:0.0005, 66:0.0001, A6o:0.0195, A7o:0.0714, 85s:0.0003, 87s:0.0001, K8o:0.0001, A8o:0.0999, 99:0.0003, A9o:0.1697, T4s:0.0016, T7s:0.0002, TT:0.0039, QTo:0.0001, KTo:0.0001, ATo:0.2049, JTs:0.0094, JJ:0.0261, QJo:0.0001, KJo:0.0003, AJo:0.5331, Q7s:0.0001, QQ:0.0024, KQo:0.0001, AQo:0.0197, K2s:0.0001, K3s:0.0015, K4s:0.0001, K5s:0.0003, K7s:0.0005, K8s:0.0017, K9s:0.0003, KTs:0.0009, KQs:0.0010, KK:0.0028, AKo:0.2502, A2s:0.0001, A3s:0.0187, A4s:0.0150, A5s:0.0011, A6s:0.2363, A7s:0.0778, A8s:0.0063, A9s:0.0235, ATs:0.1334, AJs:0.0621, AQs:0.3512, AKs:0.4892, AA:0.9990"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0796, A2o:0.0001, 33:0.0025, A3o:0.0747, 44:0.0049, A4o:0.1765, 54s:0.0001, 55:0.1233, A5o:0.1175, 65s:0.0126, 66:0.0034, A6o:0.0005, 77:0.0050, 85s:0.0001, 86s:0.0009, 87s:0.0053, 88:0.0118, A8o:0.0008, 95s:0.0005, 97s:0.0241, 98s:0.0011, 99:0.1362, A9o:0.0189, T7s:0.0004, T8s:0.0070, T9s:0.0258, TT:0.3555, ATo:0.1734, J4s:0.0002, J8s:0.0003, J9s:0.0007, JJ:0.2615, QJo:0.0145, KJo:0.0001, AJo:0.0998, Q2s:0.0006, Q5s:0.0008, Q6s:0.0184, Q8s:0.0057, Q9s:0.0242, QTs:0.1318, QJs:0.0342, QQ:0.4158, KQo:0.0025, AQo:0.3298, K2s:0.0160, K3s:0.0004, K4s:0.0006, K5s:0.0433, K6s:0.0373, K7s:0.0010, K8s:0.0042, K9s:0.2190, KTs:0.1533, KJs:0.2061, KQs:0.5067, KK:0.7927, AKo:0.7498, A2s:0.9915, A3s:0.3569, A4s:0.8940, A5s:0.8905, A6s:0.6500, A7s:0.4801, A8s:0.8459, A9s:0.7836, ATs:0.5124, AJs:0.4152, AQs:0.4879, AKs:0.5108"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.1300, 65s:0.0044, 66:0.0579, 77:0.4564, 88:0.5158, 99:0.4616, TT:0.4776, ATo:0.0011, J8s:0.0001, JTs:0.0135, JJ:0.6906, AJo:0.0189, QTs:0.1699, QJs:0.3311, QQ:0.0687, KQo:0.0277, AQo:0.2707, K8s:0.0005, K9s:0.0500, KTs:0.0945, KJs:0.0665, KQs:0.4004, A3s:0.0003, A4s:0.0025, A5s:0.0561, A7s:0.0756, A8s:0.8485, A9s:0.3857, ATs:0.7489, AJs:0.9685, AQs:0.4095"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A9o:0.0023, ATo:0.0109, QJo:0.0022, AJo:0.0296, Q8s:0.0001, QTs:0.0020, KQo:0.0083, AQo:0.0034, K5s:0.0009, K9s:0.0017, KJs:0.0011, KQs:0.0014, A2s:0.0002, A3s:0.0016, A4s:0.0007, A5s:0.0006, A6s:0.0016, A7s:0.0005, AQs:0.0419, AKs:0.0873"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0008, 55:0.0136, 66:0.0001, 77:0.0026, 88:0.0004, 98s:0.0001, 99:0.2925, TT:0.3635, ATo:0.0004, JTs:0.0001, JJ:0.2802, AJo:0.0506, QTs:0.0514, QJs:0.0103, QQ:0.0569, KQo:0.0011, AQo:0.5404, K5s:0.0002, K7s:0.0003, K8s:0.0021, K9s:0.0203, KTs:0.0075, KJs:0.1920, KQs:0.5819, AKo:0.0588, A2s:0.0427, A3s:0.4881, A4s:0.7871, A5s:0.7845, A6s:0.3191, A7s:0.1693, A8s:0.0216, A9s:0.5762, ATs:0.2507, AJs:0.0292, AQs:0.5481, AKs:0.6359"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.2568, 66:0.1016, A6o:0.0050, 77:0.3536, A7o:0.0116, 88:0.4442, 97s:0.0006, 99:0.1575, K9o:0.0058, TT:0.2263, KTo:0.1681, ATo:0.0120, JTs:0.0018, JJ:0.1505, KJo:0.1516, AJo:0.0156, Q5s:0.0006, Q8s:0.0007, Q9s:0.0006, QTs:0.0005, QQ:0.6948, KQo:0.3707, AQo:0.0582, K4s:0.0025, K5s:0.1880, K6s:0.1784, K7s:0.5247, K8s:0.3964, K9s:0.8651, KTs:0.6025, KJs:0.1596, KQs:0.6316, KK:0.0001, AKo:0.0004, A2s:0.0210, A3s:0.2366, A4s:0.3067, A5s:0.6133, A6s:0.2453, A7s:0.0869, A8s:0.0173, A9s:0.5071, ATs:0.1338, AJs:0.3938, AQs:0.5984, AA:0.5613"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0011, A2o:0.0001, 33:0.0002, A3o:0.0054, 43s:0.0002, 44:0.0064, A4o:0.0004, 53s:0.0005, 54s:0.0011, 55:0.0191, K5o:0.0002, A5o:0.0302, 66:0.0018, K6o:0.0007, A6o:0.0002, 74s:0.0001, 75s:0.0027, 76s:0.0006, 77:0.0269, 87s:0.0002, 88:0.0067, A8o:0.0003, 99:0.1434, K9o:0.0012, A9o:0.0001, T5s:0.0004, T6s:0.0001, T8s:0.0021, TT:0.0791, KTo:0.0982, ATo:0.0057, J3s:0.0001, J7s:0.0004, J8s:0.0064, JTs:0.0371, JJ:0.4229, KJo:0.0047, AJo:0.0175, Q3s:0.0001, Q8s:0.0011, QTs:0.0061, QJs:0.0002, QQ:0.2526, KQo:0.0453, AQo:0.0455, K2s:0.0009, K3s:0.0618, K4s:0.0103, K5s:0.0114, K6s:0.2325, K7s:0.1795, K8s:0.0892, K9s:0.0125, KTs:0.3930, KJs:0.6821, KQs:0.3618, KK, AKo:0.9996, A2s:0.1530, A3s:0.0340, A4s:0.1658, A5s:0.2386, A6s:0.1598, A7s:0.5146, A8s:0.8794, A9s:0.3159, ATs:0.6177, AJs:0.6031, AQs:0.2902, AKs, AA:0.4387"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0040, 77:0.0164, 88:0.0322, 99:0.0191, TT:0.0006, JJ:0.0344, QQ:0.0337, KQo:0.0017, AQo:0.0004, K7s:0.0128, K8s:0.0005, K9s:0.1348, KTs:0.0829, KJs:0.1346, KQs:0.2281, A2s:0.0001, A4s:0.0021, A5s:0.0002, A6s:0.0003, A7s:0.0051, A8s:0.0092, A9s:0.1208, ATs:0.0001, AJs:0.0004, AQs:0.0770"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0005, 55:0.0043, 66:0.0007, 76s:0.0003, 77:0.0077, 88:0.0043, 99:0.0768, T9s:0.0010, TT:0.3867, KTo:0.0017, ATo:0.0006, JJ:0.6580, KJo:0.0524, AJo:0.0454, QJs:0.0006, QQ:0.0915, KQo:0.0354, AQo:0.0645, K5s:0.0020, K6s:0.0195, K7s:0.0008, K8s:0.0091, K9s:0.2555, KTs:0.7566, KJs:0.6289, KQs:0.7232, AKo:0.0588, A2s:0.0003, A3s:0.1020, A4s:0.7366, A5s:0.6377, A6s:0.1759, A7s:0.5363, A8s:0.3608, A9s:0.5791, ATs:0.7948, AJs:0.8530, AQs:0.9091, AKs:0.7232"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.9995, QQ, KK, AKo, AQs:0.9270, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9798, QQ:0.1256, AQo:0.0111, AKo:0.0588, AQs:0.9998, AKs:0.7232"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.1676, A3o:0.0242, A4o:0.0047, A5o:0.0423, A6o:0.0005, A7o:0.0035, A8o:0.0269, A9o:0.0115, ATo:0.0019, JJ:0.0803, KJo:0.0039, AJo:0.0553, Q4s:0.0002, Q8s:0.0002, QQ:0.0239, KQo:0.0494, AQo:0.7214, K2s:0.0196, K3s:0.0107, K8s:0.0015, K9s:0.0030, KTs:0.0003, KJs:0.0158, KQs:0.0001, AKo:0.0043, A2s:0.0143, A3s:0.0517, A4s:0.0088, A5s:0.1183, A6s:0.0187, A7s:0.0668, A8s:0.0860, A9s:0.0249, ATs:0.0163, AJs:0.1166, AQs:0.0477, AKs:0.8028, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0004, 55:0.0009, 66:0.0137, 77:0.0043, 88:0.2528, 99:0.2450, TT:0.8788, JJ:0.7059, QQ:0.9761, KQo:0.1109, AQo:0.0450, K5s:0.0001, K6s:0.0007, K7s:0.0001, K8s:0.0005, K9s:0.1638, KTs:0.8561, KJs:0.5076, KQs:0.9990, KK, AKo:0.9957, A2s:0.0013, A3s:0.0104, A4s:0.3170, A5s:0.4256, A6s:0.0002, A7s:0.4540, A8s:0.1691, A9s:0.4240, ATs:0.5992, AJs:0.3662, AQs:0.9506, AKs:0.1972"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.2076, 54s:0.1306, 55:0.4725, 65s:0.0777, 66:0.6685, 76s:0.3562, 77:0.4760, 87s:0.0145, 88:0.4268, 98s:0.0093, 99:0.2668, T9s:0.0440, TT:0.4845, KTo:0.0021, ATo:0.0786, J8s:0.0021, JTs:0.1170, JJ:0.4747, KJo:0.1610, AJo:0.0192, Q9s:0.0002, QTs:0.4932, QJs:0.0003, QQ:0.0757, KQo:0.2687, AQo:0.8209, K4s:0.4600, K5s:0.2339, K6s:0.0952, K7s:0.0069, K9s:0.0045, KTs:0.2470, KJs:0.2322, KQs:0.0007, A3s:0.0872, A4s:0.0097, A5s:0.0174, A6s:0.0337, A7s:0.1604, A8s:0.2247, A9s:0.6939, ATs:0.9996, AJs:0.8980, AQs:0.9404, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.1509, A3o:0.1391, A4o:0.0407, A5o:0.2973, A6o:0.0632, A7o:0.0043, A8o:0.3227, K9o:0.0004, A9o:0.0594, KTo:0.0001, ATo:0.0010, KJo:0.0065, AJo:0.2735, Q2s:0.0001, Q3s:0.0001, Q6s:0.0001, Q7s:0.0020, Q9s:0.0001, QTs:0.0001, AQo:0.0714, K2s:0.0030, K3s:0.0021, K4s:0.0251, K6s:0.0044, K7s:0.0001, K8s:0.0016, K9s:0.0002, AKo:0.0541, A2s:0.0005, A3s:0.0077, A4s:0.0608, A5s:0.0003, A6s:0.0196, A8s:0.0023, A9s:0.0001, AJs:0.0016, AQs:0.0155, AKs:0.9966, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3641, 33:0.5579, 44:0.5242, 55:0.5273, 65s:0.0013, 66:0.3308, 75s:0.0001, 76s:0.0019, 77:0.5240, 88:0.5732, 96s:0.0001, 98s:0.0001, 99:0.7330, T8s:0.0006, T9s:0.0204, TT:0.5155, KTo:0.0104, J9s:0.0041, JTs:0.0648, JJ:0.5253, KJo:0.0424, AJo:0.0001, Q6s:0.0006, Q8s:0.0001, Q9s:0.4584, QTs:0.4321, QJs:0.9951, QQ:0.9243, KQo:0.7312, AQo:0.1076, K2s:0.0029, K3s:0.0077, K4s:0.0249, K5s:0.1555, K6s:0.7081, K7s:0.7032, K8s:0.9689, K9s:0.9936, KTs:0.7530, KJs:0.7678, KQs:0.9993, KK, AKo:0.9459, A2s:0.9150, A3s:0.6484, A4s:0.6263, A5s:0.9779, A6s:0.8426, A7s:0.8391, A8s:0.7718, A9s:0.3059, ATs:0.0004, AJs:0.1004, AQs:0.0441, AKs:0.0034"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0036, A5o:0.0521, A6o:0.0004, A7o:0.0021, A8o:0.0312, A9o:0.0047, QTo:0.0340, KTo:0.0123, JJ:0.0008, QQ:0.1345, KQo:0.0018, AQo:0.1532, K3s:0.0147, K4s:0.0451, K5s:0.0029, K6s:0.1229, K7s:0.0005, KK:0.0001, A2s:0.0108, A3s:0.0015, AA:0.1997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0041, A2o:0.0031, 33:0.0018, A3o:0.1458, 44:0.0091, A4o:0.4542, A5o:0.4868, A6o:0.3648, A7o:0.2979, A8o:0.0619, K9o:0.0001, A9o:0.0092, TT:0.0103, QTo:0.0009, KTo:0.0105, ATo:0.0001, JJ:0.0194, Q4s:0.0002, QQ:0.5998, K2s:0.0012, K3s:0.0175, K4s:0.0056, K5s:0.0334, K6s:0.0069, K7s:0.0034, KK, AKo:0.8943, A2s:0.9429, A3s:0.1137, A4s:0.0019, A5s:0.0003, A6s:0.0001, A9s:0.0001, AKs:0.2361, AA:0.7993"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0103, JJ:0.0202, QQ:0.7344, KK, AKo:0.8943, AKs:0.2361, AA:0.9990"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "QQ:0.0461, AQo:0.0170, KK:0.0056, ATs:0.0004, AQs:0.0421, AKs:0.0478, AA:0.2675"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0004, A3o:0.0001, 55:0.0011, A5o:0.0014, 65s:0.0012, 66:0.0002, A6o:0.0274, 74s:0.0011, A7o:0.0003, 86s:0.0001, 87s:0.0170, 88:0.0198, A8o:0.0126, 98s:0.0727, 99:0.0222, T8s:0.0128, ATo:0.0192, J3s:0.0002, J4s:0.0001, J7s:0.0161, J8s:0.0003, JTs:0.0226, JJ:0.1321, AJo:0.1907, Q9s:0.0264, QQ:0.2076, AQo:0.0645, K3s:0.0265, K4s:0.0002, K6s:0.0026, K7s:0.0030, K8s:0.0087, KTs:0.0647, KJs:0.0554, KQs:0.0066, KK:0.9938, AKo, A2s:0.1656, A3s:0.3076, A4s:0.1470, A5s:0.1333, A6s:0.2131, A7s:0.1392, A8s:0.2616, A9s:0.0091, ATs:0.0077, AJs:0.0854, AQs:0.3687, AKs:0.9333, AA:0.7325"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.0023, A2o:0.0102, 33:0.0007, A3o:0.0114, 44:0.0048, A4o:0.0144, A5o:0.0231, A6o:0.0061, A7o:0.0120, A8o:0.0020, A9o:0.0018, TT:0.0020, JJ:0.0001, QQ:0.6409, AQo:0.1465, K2s:0.0001, K3s:0.0018, K4s:0.0090, K5s:0.0386, K6s:0.0360, K7s:0.0001, KK:0.0210, AKo:0.0563, A2s:0.0081, A3s:0.0120, A4s:0.0001, AKs:0.0101, AA:0.0472"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0010, A2o:0.0430, 33:0.0008, A3o:0.2252, 44:0.0037, A4o:0.3718, A5o:0.3930, A6o:0.0545, A7o:0.3020, A8o:0.0224, A9o:0.0080, TT:0.0079, ATo:0.0001, JJ:0.0201, QQ:0.0919, AQo:0.0066, K2s:0.0031, K3s:0.0015, K5s:0.0078, K6s:0.0068, KK:0.9788, AKo:0.8380, A2s:0.9117, A3s:0.1018, A4s:0.0017, A5s:0.0003, A6s:0.0001, A9s:0.0001, AKs:0.2260, AA:0.9518"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0003, KK, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.7344, KK, AKo:0.7722, AKs:0.2359, AA:0.9990"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@14",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1278, 33:0.0375, 43s:0.0046, 44:0.1212, 52s:0.0037, 53s:0.0002, 54s:0.0001, 55:0.1163, A5o:0.0030, 64s:0.0003, 65s:0.0006, 66:0.0544, 73s:0.0011, 74s:0.0001, 75s:0.0004, 76s:0.0007, 77:0.0348, 85s:0.0001, 86s:0.0009, 87s:0.0004, 88:0.4379, Q8o:0.0008, 92s:0.0013, 97s:0.0013, 98s:0.0004, 99:0.1779, TT:0.2868, QTo:0.0027, ATo:0.0001, J3s:0.0001, J8s:0.0079, JTs:0.0023, JJ:0.4762, QJo:0.0030, Q4s:0.0001, Q5s:0.0005, Q6s:0.0076, Q7s:0.0025, Q8s:0.2758, Q9s:0.0334, QTs:0.0765, QJs:0.0274, QQ, KQo:0.1831, AQo:0.2242, K3s:0.0094, K5s:0.0006, K6s:0.0004, K7s:0.0029, K8s:0.0002, K9s:0.0115, KTs:0.0409, KJs:0.0007, KQs:0.3372, KK, AKo, A2s:0.0109, A4s:0.1138, A5s:0.0526, A6s:0.0002, A7s:0.0101, A8s:0.0003, A9s:0.0253, ATs:0.0145, AJs:0.0095, AQs:0.6124, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "33:0.0065, 43s:0.0030, 53s:0.0001, 54s:0.0582, 55:0.0116, A5o:0.0115, 64s:0.0076, 65s:0.0503, 66:0.0320, 75s:0.0740, 76s:0.0881, 77:0.0912, A7o:0.0023, 85s:0.0713, 86s:0.0720, 87s:0.0873, 88:0.0579, Q8o:0.0147, A8o:0.0002, 96s:0.0217, 98s:0.0013, 99:0.1297, Q9o:0.0195, T6s:0.0071, T8s:0.0002, T9s:0.1083, TT:0.1482, QTo:0.1126, KTo:0.0644, ATo:0.0760, J5s:0.0621, J8s:0.0108, J9s:0.0778, JTs:0.0770, JJ:0.4832, QJo:0.1470, AJo:0.0399, Q3s:0.0718, Q4s:0.0106, Q5s:0.0233, Q6s:0.0811, Q8s:0.0320, Q9s:0.0322, QTs:0.1971, QJs:0.1450, QQ:0.0006, KQo:0.4637, AQo:0.9882, K2s:0.0240, K3s:0.0622, K4s:0.0085, K5s:0.0340, K6s:0.0575, K7s:0.0118, K8s:0.0017, K9s:0.0527, KTs:0.3288, KJs:0.1539, KQs:0.4432, KK:0.0009, A2s:0.0712, A3s:0.1538, A4s:0.1340, A5s:0.1784, A6s:0.1366, A7s:0.1261, A8s:0.1271, A9s:0.1227, ATs:0.6311, AJs:0.3391, AQs:0.9814, AKs:0.0002, AA:0.4664"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4439, 33:0.3668, A3o:0.0004, 43s:0.0001, 44:0.5917, A4o:0.0019, 53s:0.0007, 54s:0.0104, 55:0.6555, A5o:0.0009, 64s:0.0001, 65s:0.0167, 66:0.6089, K6o:0.0001, 74s:0.0005, 75s:0.0002, 76s:0.0204, 77:0.6765, 87o:0.0002, Q7o:0.0002, K7o:0.0003, A7o:0.0055, 85s:0.0034, 86s:0.0008, 87s:0.0011, 88:0.7809, Q8o:0.0154, K8o:0.0002, 97s:0.0250, 98s:0.0235, 99:0.5710, Q9o:0.0207, A9o:0.0074, T8s:0.0009, T9s:0.0127, TT:0.7561, QTo:0.0325, KTo:0.0022, ATo:0.0008, J4s:0.0007, J5s:0.0009, J6s:0.0004, J7s:0.0007, J8s:0.0001, J9s:0.0081, JTs:0.0163, JJ:0.4311, QJo:0.0257, KJo:0.0002, AJo:0.0002, Q2s:0.0019, Q3s:0.0027, Q4s:0.2465, Q5s:0.0847, Q6s:0.1163, Q7s:0.2599, Q8s:0.1679, Q9s:0.4116, QTs:0.4726, QJs:0.6733, QQ:0.9993, KQo:0.4020, AQo:0.0051, K2s:0.0758, K3s:0.0364, K4s:0.0114, K5s:0.2344, K6s:0.0149, K7s:0.1316, K8s:0.0588, K9s:0.1746, KTs:0.1754, KJs:0.1444, KQs:0.4879, KK:0.9991, AKo, A2s:0.2038, A3s:0.3881, A4s:0.2914, A5s:0.3855, A6s:0.0705, A7s:0.2216, A8s:0.0429, A9s:0.5146, ATs:0.2359, AJs:0.4228, AQs:0.0144, AKs:0.9998, AA:0.5336"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@14|BTN:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1400, AKo:0.0469, AKs:0.0407, AA:0.0010"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0002, 74s:0.0001, 86s:0.0001, 95s:0.0001, TT:0.0002, ATo:0.0001, J5s:0.0001, J7s:0.0009, J9s:0.0001, JJ:0.0004, AJo:0.0003, Q5s:0.0004, Q6s:0.0002, Q7s:0.0013, Q9s:0.0031, QTs:0.0001, QJs:0.0001, QQ:0.0133, AQo:0.0006, K2s:0.0002, K3s:0.0003, K5s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0001, K9s:0.0004, KTs:0.0007, KJs:0.0001, KQs:0.0023, KK:0.9374, AKo:0.0005, A3s:0.0001, A4s:0.0003, A6s:0.0001, A7s:0.0002, A8s:0.0001, A9s:0.0008, ATs:0.0021, AQs:0.0026, AKs:0.0437, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1225, AKo:0.0469, AKs:0.0407, AA:0.0010"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 44:0.0122, 54s:0.0026, 55:0.7992, 65s:0.1310, 66:0.6783, 76s:0.0058, 77:0.9311, 87s:0.0333, 88:0.9296, 98s:0.0648, 99:0.9933, T8s:0.0199, T9s:0.7310, TT:0.9998, ATo:0.5935, J9s:0.0706, JTs:0.9259, JJ:0.6495, KJo:0.0186, AJo:0.6714, Q9s:0.2609, QTs:0.9998, QJs, QQ:0.9620, KQo:0.8682, AQo:0.5881, K5s:0.0002, K7s:0.2323, K8s:0.1047, K9s:0.9947, KTs:0.9993, KJs:0.9401, KQs, AKo:0.4396, A2s:0.0088, A3s:0.0047, A4s:0.3212, A5s:0.6114, A6s:0.0115, A7s:0.5155, A8s:0.7875, A9s:0.9998, ATs:0.9996, AJs:0.9997, AQs, AKs:0.4548"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0003, A4o:0.0034, 55:0.0793, A5o:0.0209, 65s:0.0074, 66:0.1475, A6o:0.0001, 77:0.0688, A7o:0.0031, 88:0.0704, A8o:0.0012, 99:0.0067, A9o:0.0181, T9s:0.0188, TT:0.0002, ATo:0.1848, J8s:0.0091, J9s:0.1708, JTs:0.0730, JJ:0.1390, QJo:0.0179, KJo:0.2322, AJo:0.1367, Q8s:0.0037, Q9s:0.0001, QQ:0.0066, KQo:0.0069, AQo:0.2340, K3s:0.0001, K5s:0.0044, K6s:0.0026, K7s:0.0372, K8s:0.0001, K9s:0.0049, KTs:0.0002, KJs:0.0596, AKo:0.0546, A2s:0.1218, A3s:0.3144, A4s:0.5253, A5s:0.3180, A6s:0.2757, A7s:0.1082, A8s:0.2072, ATs:0.0003, AKs:0.3727, AA:0.2877"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.1144, A3o:0.1031, K4o:0.0001, A4o:0.1436, 55:0.0003, K5o:0.0003, A5o:0.2026, 66:0.0380, A6o:0.0244, A7o:0.1253, K8o:0.0001, A8o:0.0433, A9o:0.0923, KTo:0.0002, ATo:0.1639, J9s:0.0028, JJ:0.0937, KJo:0.0205, AJo:0.1910, QQ:0.0293, KQo:0.0014, AQo:0.1766, K2s:0.0001, K4s:0.0028, K6s:0.0042, K7s:0.0020, K8s:0.0007, KTs:0.0003, KK:0.0053, AKo:0.1353, A2s:0.4050, A3s:0.5127, A4s:0.1415, A5s:0.0606, A6s:0.2073, A7s:0.1269, A8s:0.0051, A9s:0.0001, ATs:0.0001, AKs:0.1155, AA:0.5059"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.2151, K3o:0.0062, A3o:0.0847, K4o:0.0027, A4o:0.1095, K5o:0.0019, A5o:0.2389, 66:0.0001, K6o:0.0797, A6o:0.1154, K7o:0.0842, A7o:0.2150, K8o:0.0122, A8o:0.1751, K9o:0.1081, A9o:0.0818, KTo:0.1355, ATo:0.0574, JJ:0.1179, KJo:0.4144, AJo:0.0009, QQ:0.0021, KQo:0.1235, AQo:0.0013, K2s:0.5727, K3s:0.5008, K4s:0.0956, K5s:0.1563, K6s:0.1763, K7s:0.1599, K8s:0.0201, KJs:0.0001, KK:0.9947, AKo:0.3685, A2s:0.4631, A3s:0.1662, A4s:0.0107, A5s:0.0093, A6s:0.5044, A7s:0.2486, A8s:0.0001, AKs:0.0567, AA:0.2064"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.0011, 66:0.0002, 77:0.0001, KJs:0.0001, AKo:0.0019, A2s:0.0010, A3s:0.0019, A4s:0.0013, A5s:0.0007, A6s:0.0010, A7s:0.0007, A8s:0.0001, AJs:0.0003, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5757, 33:0.9875, 44:0.9998, 54s:0.5313, 55, 65s:0.9941, 66, 75s:0.0025, 76s:0.9977, 77, 86s:0.1696, 87s:0.9864, 88, 97s:0.0817, 98s:0.9985, 99, A9o:0.6098, T8s:0.9807, T9s:0.9993, TT, KTo:0.5300, ATo, J8s:0.4220, J9s:0.9981, JTs, JJ, QJo:0.7816, KJo:0.9095, AJo, Q8s:0.9368, Q9s:0.9977, QTs, QJs, QQ:0.6525, KQo:0.7495, AQo:0.8640, K4s:0.0001, K5s:0.3826, K6s:0.4982, K7s:0.6591, K8s:0.9994, K9s, KTs, KJs, KQs, AKo:0.5141, A2s:0.0246, A3s:0.2647, A4s:0.9520, A5s:0.9956, A6s:0.6236, A7s:0.9986, A8s, A9s, ATs, AJs, AQs, AKs:0.1128"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0227, A2o:0.0686, 33:0.0115, K3o:0.0002, A3o:0.3723, A4o:0.4728, K5o:0.0001, A5o:0.8256, K6o:0.0001, A6o:0.4728, A7o:0.6206, A8o:0.7179, K9o:0.0003, A9o:0.3807, KTo:0.2753, QJo:0.0376, KJo:0.0904, QQ:0.2760, KQo:0.1285, AQo:0.1052, K2s:0.3928, K3s:0.0688, K4s:0.4609, K5s:0.3634, K6s:0.3201, K7s:0.2773, K8s:0.0006, KK:0.8019, AKo:0.4292, A2s:0.9748, A3s:0.7352, A4s:0.0480, A5s:0.0044, A6s:0.3763, A7s:0.0014, AKs:0.7492, AA:0.9841"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "A2o:0.0032, A3o:0.0541, A4o:0.0143, K5o:0.0001, A5o:0.0534, A6o:0.0288, K7o:0.0001, A7o:0.0244, A8o:0.0059, A9o:0.0001, KTo:0.0066, QJo:0.0061, QQ:0.0715, KQo:0.1221, AQo:0.0307, K2s:0.2127, K3s:0.0869, K4s:0.1356, K5s:0.1468, K6s:0.1781, K7s:0.0566, KK:0.1981, AKo:0.0567, AKs:0.1380, AA:0.0159"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, K2o:0.0002, A2o:0.0002, 32s:0.9994, 33, A3o:0.1802, 42s, 43s, 44, 54o:0.8757, 64o:0.4930, K4o:0.8061, A4o:0.8623, 52s:0.9992, 53s, 54s, 55, 65o:0.9983, 75o:0.9391, 85o:0.0004, K5o:0.5957, A5o:0.4925, 62s:0.9992, 63s, 64s:0.9987, 65s:0.9987, 66, 76o, 86o:0.9760, Q6o:0.5116, K6o:0.7961, A6o:0.5022, 72s:0.9420, 73s:0.9983, 74s, 75s, 76s:0.9195, 77, 87o:0.9995, 97o:0.9745, T7o:0.6916, J7o:0.3507, Q7o:0.9878, K7o:0.9452, A7o:0.9443, 82s:0.9816, 83s:0.9976, 84s, 85s:0.9997, 86s:0.9879, 87s:0.9995, 88, 98o:0.9995, T8o:0.9958, J8o:0.9636, Q8o:0.9148, K8o:0.9914, A8o, 92s:0.9957, 93s:0.9958, 94s:0.9987, 95s:0.9993, 96s:0.9998, 97s, 98s, 99, T9o, J9o:0.9493, Q9o:0.9373, K9o:0.9345, A9o, T2s:0.9940, T3s:0.9993, T4s:0.9994, T5s:0.9983, T6s, T7s, T8s:0.9980, T9s:0.9998, TT, JTo, QTo:0.9949, KTo:0.9830, ATo, J2s:0.9995, J3s:0.9996, J4s:0.9998, J5s, J6s, J7s, J8s, J9s:0.9738, JTs, JJ, QJo:0.9945, KJo:0.9602, AJo, Q2s:0.9998, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s:0.9997, Q9s, QTs, QJs, QQ:0.9997, KQo:0.8092, AQo:0.9837, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, AKo:0.5452, A2s:0.5500, A3s:0.9656, A4s, A5s:0.9998, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs:0.0415"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0972, A2o:0.0415, Q3o:0.0001, K3o:0.1907, A3o:0.1584, 54o:0.1238, 64o:0.0001, K4o:0.1562, A4o:0.1015, 52s:0.0005, 65o:0.0016, 75o:0.0025, Q5o:0.0390, K5o:0.3724, A5o:0.3696, 62s:0.0001, 64s:0.0013, 65s:0.0013, 86o:0.0228, 96o:0.0001, Q6o:0.0104, K6o:0.2036, A6o:0.1595, 76s:0.0804, 97o:0.0047, T7o:0.1494, J7o:0.1162, Q7o:0.0019, K7o:0.0548, A7o:0.0175, 82s:0.0001, 85s:0.0002, 86s:0.0121, 87s:0.0005, 98o:0.0005, T8o:0.0040, J8o:0.0362, Q8o:0.0851, K8o:0.0086, A8o:0.0001, 93s:0.0006, 94s:0.0001, 95s:0.0007, J9o:0.0505, Q9o:0.0626, K9o:0.0654, T2s:0.0054, T5s:0.0016, T8s:0.0020, T9s:0.0001, QTo:0.0051, KTo:0.0170, J2s:0.0002, J9s:0.0262, QJo:0.0055, KJo:0.0398, Q2s:0.0001, Q8s:0.0003, QQ:0.0002, KQo:0.1908, AQo:0.0163, K2s:0.0001, K8s:0.0001, KK:0.9996, AKo:0.3581, A2s:0.4500, A3s:0.0344, A5s:0.0002, AKs:0.5234, AA:0.0019"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "52o:0.0001, K2o:0.0007, A2o:0.9583, 53o:0.0001, K3o:0.0003, A3o:0.6614, 64o:0.0001, A4o:0.0363, 75o:0.0016, 85o:0.0237, K5o:0.0309, A5o:0.1380, 62s:0.0001, Q6o:0.0001, K6o:0.0003, A6o:0.3382, 97o:0.0203, T7o:0.0746, A7o:0.0382, 82s:0.0056, QQ:0.0001, KK:0.0004, AKo:0.0967, AKs:0.4351, AA:0.9981"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.2692, 44:0.4744, 54s:0.0043, 55:0.9794, A5o:0.0003, 65s:0.0002, 66:0.9229, 76s:0.0007, 77:0.9077, 87s:0.0103, 88:0.9946, 98s:0.1931, 99:0.9671, A9o:0.0009, T7s:0.0004, T8s:0.0219, T9s:0.3512, TT:0.8957, KTo:0.0697, ATo:0.0001, J9s:0.0127, JTs:0.9679, JJ:0.9944, KJo:0.5349, AJo:0.2094, Q8s:0.0001, QTs:0.1221, QJs:0.1658, QQ:0.9995, KQo:0.9862, AQo:0.9607, K4s:0.0804, K5s:0.2589, K6s:0.5863, K7s:0.4384, K8s:0.6986, K9s:0.9449, KTs:0.8558, KJs:0.9179, KQs:0.9948, KK:0.0004, A3s:0.5418, A4s:0.8517, A5s:0.9814, A6s:0.8464, A7s:0.9777, A8s:0.9902, A9s:0.9969, ATs:0.9978, AJs:0.9951, AQs:0.9967"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0441, A4o:0.2220, A5o:0.0500, A6o:0.1248, A7o:0.0905, A8o:0.0117, 97s:0.0001, A9o:0.0678, TT:0.0005, KTo:0.0001, ATo:0.2595, JTs:0.0003, JJ:0.0003, AJo:0.2463, Q5s:0.0001, AQo:0.0055, K3s:0.0016, K9s:0.0001, KJs:0.0001, KK:0.0004, AKo:0.0011, A2s:0.1832, A3s:0.3882, A4s:0.0331, A5s:0.0105, A6s:0.0383, A8s:0.0003, A9s:0.0001, ATs:0.0014, AJs:0.0043, AQs:0.0027, AKs:0.7957, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0051, 44:0.2464, A4o:0.0018, 55:0.0007, A5o:0.0002, 66:0.0624, 76s:0.0001, 77:0.0903, A7o:0.0002, 88:0.0037, 99:0.0320, A9o:0.0009, T7s:0.0001, T8s:0.0008, TT:0.1037, KTo:0.0023, ATo:0.0008, JTs:0.0004, JJ:0.0049, KJo:0.0082, AJo:0.0014, Q5s:0.0001, Q9s:0.0002, QTs:0.0015, QJs:0.0009, QQ:0.0005, KQo:0.0005, AQo:0.0012, K2s:0.0204, K3s:0.0087, K4s:0.0020, K6s:0.0043, K7s:0.2782, K8s:0.0579, K9s:0.0415, KTs:0.1434, KJs:0.0805, KQs:0.0032, KK:0.9992, AKo:0.9989, A2s:0.1358, A3s:0.0106, A4s:0.0211, A5s:0.0079, A6s:0.0086, A7s:0.0214, A8s:0.0092, A9s:0.0026, ATs:0.0006, AJs:0.0006, AQs:0.0002, AKs:0.2043"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@17.7",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0019, A4o:0.0003, A5o:0.0007, A6o:0.0021, 76s:0.0010, A7o:0.0013, 86s:0.0002, T8s:0.0003, QTo:0.0001, KTo:0.0001, J9s:0.0007, QJo:0.0001, KJo:0.0004, Q8s:0.0001, QQ:0.0001, KQo:0.0017, AQo:0.0162, KK:0.0310, AKo:0.0002, A2s:0.0005, A3s:0.0001, AKs:0.0045, AA:0.0018"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0223, A3o:0.0790, A4o:0.0903, 65o:0.0001, A5o:0.3661, 64s:0.0012, 65s:0.0013, A6o:0.1050, 76s:0.0792, A7o:0.0154, 85s:0.0001, 86s:0.0118, 87s:0.0005, A8o:0.0001, 95s:0.0002, T8s:0.0012, T9s:0.0001, J9s:0.0252, QQ:0.0001, AQo:0.0001, KK:0.9686, AKo:0.3579, A2s:0.4495, A3s:0.0342, A5s:0.0002, AKs:0.5189, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9996, AKo:0.2758, AKs:0.5234, AA:0.0019"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0044, 44:0.0936, A4o:0.0062, 54s:0.0286, 55:0.5180, A5o:0.1291, 66:0.3373, 77:0.4647, 88:0.4588, A8o:0.0001, 99:0.1331, A9o:0.0006, T8s:0.0018, TT:0.0158, ATo:0.3767, JTs:0.0018, JJ:0.0441, AJo:0.1572, QTs:0.0011, QJs:0.0001, QQ:0.5049, AQo:0.9018, K6s:0.0001, KJs:0.0002, KQs:0.0001, KK:0.3433, A2s:0.0006, A3s:0.5105, A4s:0.0423, A5s:0.0288, A6s:0.7329, A7s:0.1931, A8s:0.2158, A9s:0.0075, ATs:0.3729, AJs:0.6808, AQs:0.6374, AA:0.9991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0842, A4o:0.0146, 55:0.0684, A5o:0.0117, 66:0.0013, 77:0.2351, A7o:0.0020, 87s:0.0157, 88:0.2622, A8o:0.0117, 97s:0.0004, 98s:0.0002, 99:0.8345, A9o:0.2527, T7s:0.0001, T8s:0.0022, T9s:0.1474, TT:0.9832, ATo:0.2815, J9s:0.0006, JTs:0.0091, JJ:0.9497, AJo:0.3911, QTs:0.0051, QQ:0.4844, AQo:0.0043, K5s:0.0001, K6s:0.0002, KTs:0.0002, KJs:0.0001, KQs:0.0001, KK:0.6567, AKo, A2s:0.0048, A3s:0.0161, A4s:0.9562, A5s:0.9710, A6s:0.2302, A7s:0.8057, A8s:0.7804, A9s:0.9903, ATs:0.6270, AJs:0.3191, AQs:0.3625, AKs, AA:0.0009"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@14|CO:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.0004, AKo:0.0967, AKs:0.4351, AA:0.9981"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9574, 32s:0.9796, 33:0.9910, 53o:0.7352, A3o:0.0041, 42s:0.9953, 43s:0.9987, 44:0.9951, 54o:0.9983, 64o:0.6276, A4o:0.3305, 52s:0.9973, 53s, 54s, 55:0.9958, 65o:0.9979, 75o:0.7388, A5o:0.2527, 62s:0.9933, 63s:0.9984, 64s, 65s, 66:0.9994, 76o:0.9993, 86o:0.9898, K6o:0.0040, A6o:0.5974, 72s:0.0179, 73s:0.9959, 74s:0.9997, 75s, 76s:0.9995, 77:0.9991, 87o:0.9994, 97o:0.9716, K7o:0.0099, A7o:0.7397, 82s:0.1659, 83s:0.8490, 84s:0.9920, 85s:0.9954, 86s, 87s, 88:0.9998, 98o:0.9965, T8o:0.9897, Q8o:0.1114, K8o:0.9274, A8o:0.7385, 92s:0.0019, 93s:0.8938, 94s:0.9907, 95s:0.9991, 96s, 97s:0.9998, 98s:0.9993, 99, T9o:0.9950, J9o:0.9954, Q9o:0.9568, K9o:0.9613, A9o:0.9983, T2s:0.6929, T3s:0.9480, T4s:0.9575, T5s:0.9991, T6s:0.9990, T7s, T8s, T9s, TT, JTo:0.9998, QTo:0.9993, KTo:0.9997, ATo, J2s:0.8901, J3s:0.9916, J4s:0.9976, J5s:0.9974, J6s:0.9954, J7s:0.9998, J8s:0.9990, J9s:0.9998, JTs:0.9997, JJ:0.9479, QJo:0.9997, KJo:0.9997, AJo:0.9995, Q2s:0.5109, Q3s:0.9969, Q4s:0.9972, Q5s:0.9984, Q6s:0.9976, Q7s:0.9992, Q8s:0.9998, Q9s:0.9994, QTs:0.9997, QJs:0.9997, KQo:0.9953, AQo:0.6724, K2s:0.9927, K3s:0.9982, K4s:0.9810, K5s:0.9928, K6s:0.9775, K7s:0.9992, K8s, K9s, KTs, KJs:0.9989, KQs:0.9596, A2s:0.4418, A3s:0.6158, A4s:0.8763, A5s:0.8487, A6s:0.9638, A7s:0.9984, A8s:0.9854, A9s, ATs, AJs, AQs:0.9576"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0069, K2o:0.0329, A2o:0.7778, Q3o:0.0025, K3o:0.0923, A3o:0.7456, Q4o:0.0001, K4o:0.0420, A4o:0.3956, Q5o:0.0362, K5o:0.3096, A5o:0.4741, Q6o:0.0008, K6o:0.3420, A6o:0.3467, Q7o:0.1382, K7o:0.1068, A7o:0.2290, Q8o:0.3478, K8o:0.0104, A8o:0.2604, 95s:0.0001, Q9o:0.0169, K9o:0.0348, A9o:0.0008, QTo:0.0003, JJ:0.0188, KJo:0.0001, AJo:0.0002, Q2s:0.4739, Q3s:0.0013, Q4s:0.0010, Q5s:0.0002, Q6s:0.0015, QQ:0.7357, AQo:0.3170, K2s:0.0015, K3s:0.0002, K4s:0.0035, K5s:0.0008, KK:0.6934, AKo:0.1555, A2s:0.0093, A3s:0.0001, A6s:0.0001, A8s:0.0001, AQs:0.0421, AKs:0.8926, AA:0.9996"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.1641, A2o:0.0686, Q3o:0.0072, K3o:0.0448, A3o:0.0919, K4o:0.1043, A4o:0.0864, K5o:0.0538, A5o:0.0196, Q6o:0.0021, K6o:0.0787, A6o:0.0051, Q7o:0.0011, K7o:0.0065, A7o:0.0259, Q8o:0.0184, K8o:0.0352, A8o:0.0004, Q9o:0.0147, JJ:0.0003, Q2s:0.0122, Q3s:0.0002, Q4s:0.0001, QQ:0.2081, KQo:0.0006, AQo:0.0106, K2s:0.0045, K3s:0.0002, K4s:0.0001, KK:0.3066, AKo:0.0984, AKs:0.0691, AA:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0426, A2o:0.1334, 33:0.0090, A3o:0.1284, 43s:0.0002, 44:0.0049, A4o:0.1706, 52s:0.0001, 55:0.0042, A5o:0.2531, 66:0.0006, A6o:0.0005, 76s:0.0001, 77:0.0009, 88:0.0002, J9s:0.0001, JJ:0.0330, QJo:0.0001, KJo:0.0002, AJo:0.0002, Q3s:0.0002, Q5s:0.0003, Q7s:0.0006, Q8s:0.0001, Q9s:0.0002, QTs:0.0001, QJs:0.0003, QQ:0.0563, KQo:0.0041, AQo:0.0001, K2s:0.0010, K3s:0.0005, K4s:0.0150, K5s:0.0062, K6s:0.0225, K7s:0.0007, K8s:0.0001, K9s:0.0001, KJs:0.0011, KQs:0.0404, AKo:0.7461, A2s:0.5488, A3s:0.3841, A4s:0.1235, A5s:0.1513, A6s:0.0361, A7s:0.0015, A8s:0.0145, AQs:0.0003, AKs:0.0383"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.2078, 65s:0.1037, 66:0.5312, 88:0.3861, 96s:0.0014, 98s:0.0001, 99:0.0570, TT:0.1662, ATo:0.0007, JTs:0.0004, JJ:0.3838, QTs:0.0025, QQ:0.4436, KQo:0.0097, AQo:0.7252, K3s:0.0006, K4s:0.0518, K6s:0.0026, K7s:0.1986, K9s:0.2083, KTs:0.3521, KJs:0.0893, KQs:0.3225, KK:0.0647, A3s:0.0035, A4s:0.0508, A5s:0.1718, A7s:0.0161, A8s:0.4472, A9s:0.0223, ATs:0.3555, AJs:0.2135, AQs:0.0880, AKs:0.0002, AA:0.0004"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0082, A4o:0.0381, 55:0.0010, A5o:0.0950, A6o:0.0001, 77:0.0063, A7o:0.1096, A8o:0.0040, 99:0.0241, A9o:0.0372, TT:0.0030, KTo:0.0066, ATo:0.0885, J7s:0.0001, JJ:0.0007, KJo:0.0153, AJo:0.1842, Q5s:0.0005, QTs:0.0003, QJs:0.0032, QQ:0.0001, KQo:0.0181, AQo:0.2151, K2s:0.0640, K5s:0.0363, K6s:0.0003, K7s:0.0202, K9s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0005, KK:0.0001, AKo:0.0627, A2s:0.5084, A3s:0.1764, A4s:0.0554, A5s:0.0709, A6s:0.0243, A7s:0.1690, A8s:0.0031, A9s:0.0082, ATs:0.0027, AJs:0.1136, AQs:0.0341, AKs:0.7552, AA:0.9996"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0004, 55:0.0008, A5o:0.0001, 65s:0.0001, 77:0.0071, 88:0.0028, 99:0.4430, A9o:0.0003, T9s:0.0008, TT:0.0286, ATo:0.0205, J9s:0.0001, JJ:0.1238, AJo:0.0015, Q9s:0.0001, QTs:0.2773, QJs:0.1587, QQ:0.5563, KQo:0.6100, AQo:0.0524, K3s:0.0016, K4s:0.1093, K5s:0.0004, K6s:0.0077, K7s:0.0237, K8s:0.0001, K9s:0.4723, KTs:0.3951, KJs:0.8191, KQs:0.6560, KK:0.9352, AKo:0.9373, A2s:0.2158, A3s:0.3705, A4s:0.3636, A5s:0.2493, A6s:0.4764, A7s:0.6459, A8s:0.0137, A9s:0.9064, ATs:0.5420, AJs:0.2870, AQs:0.8779, AKs:0.2446"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0017, 55:0.1323, 66:0.1055, 77:0.3304, 88:0.6340, 99:0.0427, TT:0.1269, JJ:0.6344, QTs:0.0005, QJs:0.0047, QQ:0.1921, AQo:0.3586, K5s:0.0363, K6s:0.0014, K8s:0.2744, K9s:0.0584, KTs:0.4164, KJs:0.1272, KQs:0.1987, A4s:0.0029, A5s:0.0639, A6s:0.1108, A7s:0.0033, A8s:0.2967, A9s:0.4416, ATs:0.8649, AJs:0.2187, AQs:0.7012, AKs:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "QJo:0.0047, AJo:0.0071, Q9s:0.0028, QJs:0.0003, KQo:0.0031, AQo:0.0039, K7s:0.0003, K8s:0.0001, K9s:0.0002, KTs:0.0002, KJs:0.0006, A3s:0.0001, A4s:0.0018, A5s:0.0011, A6s:0.0139, A7s:0.0002, A8s:0.0006, AQs:0.0233, AKs:0.0236"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0004, 55:0.0289, 66:0.0001, 76s:0.0001, 77:0.0001, 87s:0.0001, 88:0.0289, 98s:0.0002, 99:0.0240, T9s:0.0001, TT:0.7400, JTs:0.0001, JJ:0.1516, AJo:0.0022, Q9s:0.0012, QTs:0.0491, QJs:0.1372, QQ:0.4604, KQo:0.0259, AQo:0.4731, K5s:0.0021, K6s:0.0028, K7s:0.0031, K8s:0.0038, K9s:0.0328, KTs:0.0089, KJs:0.7017, KQs:0.8012, AKo:0.5141, A2s:0.0014, A3s:0.0528, A4s:0.0956, A5s:0.5313, A6s:0.0476, A7s:0.4765, A8s:0.0431, A9s:0.0492, ATs:0.0865, AJs:0.5103, AQs:0.2751, AKs:0.0890"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "54s:0.0001, 55:0.2589, 66:0.3547, 75s:0.0134, 76s:0.0004, 77:0.0076, 86s:0.0093, 87s:0.0490, 88:0.1162, K8o:0.0055, 97s:0.0010, 99:0.2723, TT:0.0146, KTo:0.1156, ATo:0.0019, JJ:0.3909, AJo:0.0018, Q5s:0.0104, Q6s:0.0096, Q8s:0.0151, Q9s:0.0361, QJs:0.0058, QQ:0.2666, KQo:0.3341, AQo:0.3760, K4s:0.1682, K5s:0.0956, K6s:0.0024, K7s:0.0047, K8s:0.2967, K9s:0.5627, KTs:0.2535, KJs:0.1362, KQs:0.4107, AKo:0.0038, A2s:0.0028, A3s:0.1094, A4s:0.1750, A5s:0.1830, A6s:0.0043, A7s:0.2684, A8s:0.1687, A9s:0.0554, ATs:0.4412, AJs:0.0409, AQs:0.1293, AKs:0.0147, AA:0.6610"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0560, 55:0.2050, A5o:0.0137, 66:0.0405, 75s:0.0002, 76s:0.0158, 77:0.2425, A7o:0.0010, 86s:0.0010, 87s:0.0022, 88:0.2122, 97s:0.0153, 99:0.2152, A9o:0.0001, T9s:0.0005, TT:0.0736, KTo:0.0212, J7s:0.0003, J8s:0.0001, JJ:0.0245, QJo:0.0077, AJo:0.0007, Q4s:0.0017, Q5s:0.0113, Q6s:0.0030, Q7s:0.0735, Q8s:0.0372, Q9s:0.0023, QTs:0.0001, QJs:0.0891, QQ:0.7328, KQo:0.3177, AQo:0.2156, K3s:0.3391, K4s:0.3182, K5s:0.2447, K6s:0.1999, K7s:0.0275, K8s:0.0253, K9s:0.0787, KTs:0.4239, KJs:0.5089, KQs:0.5880, KK, AKo:0.9962, A3s:0.1519, A4s:0.4948, A5s:0.6410, A6s:0.5158, A7s:0.5132, A8s:0.5095, A9s:0.7881, ATs:0.2956, AJs:0.1766, AQs:0.8186, AKs:0.9852, AA:0.3390"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "77:0.0149, 88:0.0170, 99:0.0048, TT:0.0031, QQ:0.0430, AQo:0.0049, K8s:0.0141, KTs:0.0235, KJs:0.0096, KQs:0.1039, A3s:0.0001, A6s:0.0254, ATs:0.0229, AJs:0.1042, AQs:0.0032, AKs:0.0011"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0003, 54s:0.0006, 55:0.0011, 65s:0.0019, 66:0.0001, 77:0.0217, 88:0.0585, 99:0.0064, T8s:0.0004, TT:0.1435, ATo:0.0007, J9s:0.0008, JJ:0.4180, QJo:0.0005, AJo:0.0003, Q8s:0.0001, Q9s:0.0036, QTs:0.0063, QJs:0.0036, QQ:0.6085, KQo:0.0505, AQo:0.1489, K5s:0.0001, K6s:0.0187, K7s:0.0023, K8s:0.0096, K9s:0.1139, KTs:0.4929, KJs:0.3050, KQs:0.7107, AKo:0.5141, A2s:0.0006, A3s:0.0029, A4s:0.0228, A5s:0.0899, A6s:0.0102, A7s:0.0305, A8s:0.2195, A9s:0.0719, ATs:0.0528, AJs:0.0410, AQs:0.9934, AKs:0.1117"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0202, JJ:0.0175, QQ:0.7201, KK, AKo:0.9986, AQs:0.0002, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0163, TT:0.2547, JJ:0.4790, QQ:0.6525, AKo:0.5136, AJs:0.0002, AQs:0.0040, AKs:0.1128"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.2007, A3o:0.1982, A4o:0.0185, A5o:0.0029, K6o:0.0006, A6o:0.0063, A7o:0.0141, 99:0.0009, A9o:0.0099, JJ:0.0018, KJo:0.0003, AJo:0.0399, QQ:0.0125, KQo:0.0018, AQo:0.2771, K2s:0.0154, K3s:0.0049, K5s:0.0001, K6s:0.0011, KTs:0.0006, KJs:0.0006, KQs:0.0034, AKo:0.0396, A2s:0.0140, A3s:0.1627, A4s:0.0270, A5s:0.0713, A6s:0.0004, A7s:0.0442, A8s:0.0161, A9s:0.0041, ATs:0.0123, AJs:0.0117, AQs:0.1374, AKs:0.2434, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0018, 66:0.0390, 77:0.0162, 88:0.0995, 97s:0.0001, 99:0.0174, TT:0.1812, JTs:0.0001, JJ:0.4587, QQ:0.9871, K4s:0.0001, K5s:0.0001, K6s:0.1289, K9s:0.0011, KTs:0.6316, KJs:0.1492, KQs:0.4392, KK, AKo:0.9604, A2s:0.1914, A3s:0.4936, A4s:0.3149, A5s:0.1837, A6s:0.1781, A7s:0.2876, A8s:0.1892, A9s:0.1418, ATs:0.3220, AJs:0.4477, AQs:0.8402, AKs:0.7566"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1417, 55:0.6164, 65s:0.0136, 66:0.5170, 77:0.5920, 88:0.7963, 99:0.3560, T7s:0.0001, T9s:0.1084, TT:0.3773, ATo:0.0289, JTs:0.0729, JJ:0.4776, AJo:0.0087, QTs:0.0001, QJs:0.0465, QQ:0.8006, KQo:0.4101, AQo:0.7546, K3s:0.0054, K4s:0.0238, K5s:0.0163, K6s:0.5023, K7s:0.0013, K8s:0.0410, K9s:0.1434, KTs:0.6476, KJs:0.3063, KQs:0.1590, KK:0.0001, A4s:0.0001, A5s:0.2319, A6s:0.0011, A7s:0.1296, A8s:0.5601, A9s:0.7632, ATs:0.8844, AJs:0.9229, AQs:0.9677"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.1533, A4o:0.1058, A5o:0.1719, A6o:0.0874, A7o:0.0859, A8o:0.0602, A9o:0.0386, ATo:0.0003, AJo:0.2113, KQo:0.0015, AQo:0.2432, K2s:0.0181, K3s:0.0117, K4s:0.0002, K5s:0.0040, K6s:0.0009, K7s:0.0001, K9s:0.0001, KQs:0.0001, AKo:0.0041, A2s:0.0654, A3s:0.0647, A4s:0.0056, A5s:0.0633, A6s:0.0111, A7s:0.1041, A9s:0.0830, AJs:0.0383, AQs:0.0012, AKs:0.6972, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0496, 44:0.2291, A4o:0.0001, 55:0.0025, 66:0.4684, 75s:0.0001, 76s:0.0005, 77:0.3876, 88:0.1891, 99:0.6370, T9s:0.0004, TT:0.6226, KTo:0.0001, JTs:0.0002, JJ:0.5224, QTs:0.0018, QJs:0.0001, QQ:0.1994, KQo:0.0686, AQo:0.0012, K3s:0.0157, K4s:0.0006, K5s:0.0687, K6s:0.1548, K7s:0.0150, K8s:0.0016, K9s:0.4523, KTs:0.3518, KJs:0.6929, KQs:0.8409, KK, AKo:0.9959, A2s:0.6537, A3s:0.8132, A4s:0.9850, A5s:0.5293, A6s:0.3451, A7s:0.6144, A8s:0.4380, A9s:0.1015, ATs:0.1155, AJs:0.0387, AQs:0.0310, AKs:0.3028"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "33:0.0004, A5o:0.0035, A6o:0.0002, A7o:0.0059, A8o:0.0046, A9o:0.0040, QQ:0.1626, AQo:0.1048, K3s:0.0002, K4s:0.0019, K5s:0.0002, K6s:0.0016, K7s:0.0052, KK:0.1138, A2s:0.0005, A3s:0.0012, A6s:0.0032, AA:0.0361"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0227, A2o:0.0221, 33:0.0111, A3o:0.1047, A4o:0.1905, A5o:0.3458, A6o:0.0144, A7o:0.1292, A8o:0.0831, A9o:0.0754, QQ:0.1133, AQo:0.0004, K3s:0.0001, K5s:0.0174, K6s:0.0041, K7s:0.0071, K8s:0.0001, KK:0.6881, AKo:0.4292, A2s:0.9738, A3s:0.7330, A4s:0.0480, A5s:0.0044, A6s:0.3728, A7s:0.0014, AKs:0.7492, AA:0.9480"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.2760, KK:0.8019, AKo:0.4292, AKs:0.7492, AA:0.9841"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "AQo:0.0278, KK:0.1904, AKo:0.0077, ATs:0.0003, AJs:0.0039, AQs:0.0248, AKs:0.0601, AA:0.1611"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0027, 54s:0.0019, 55:0.0005, A5o:0.0070, 66:0.0023, 76s:0.0292, A7o:0.0003, 86s:0.0001, 88:0.0001, 98s:0.0006, T9s:0.0001, ATo:0.0033, J7s:0.0004, J8s:0.0010, JJ:0.0004, Q7s:0.0001, Q9s:0.0026, QQ:0.0015, AQo:0.0053, K3s:0.0023, K4s:0.0002, K6s:0.0001, K8s:0.0006, KQs:0.0007, KK:0.4792, AKo:0.9158, A2s:0.0028, A3s:0.0495, A4s:0.5826, A5s:0.1369, A6s:0.0002, A7s:0.0042, A8s:0.0557, A9s:0.1499, ATs:0.0378, AJs:0.0719, AQs:0.1433, AKs:0.8882, AA:0.8389"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.0075, A2o:0.0001, 33:0.0050, A3o:0.0088, A4o:0.0018, A5o:0.0593, A6o:0.0001, A7o:0.0092, A8o:0.0279, A9o:0.0031, QQ:0.1390, AQo:0.0975, K5s:0.0034, K7s:0.0008, KK:0.2568, AKo:0.0008, A2s:0.0010, A3s:0.0916, A4s:0.0008, A5s:0.0001, A6s:0.0059, A7s:0.0001, AKs:0.0154, AA:0.0911"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0060, A2o:0.0022, 33:0.0008, A3o:0.0410, A4o:0.1311, A5o:0.2885, A6o:0.0017, A7o:0.0223, A8o:0.1705, A9o:0.0115, QQ:0.0047, AQo:0.0077, K4s:0.0001, K7s:0.0002, KK:0.5451, AKo:0.4284, A2s:0.8178, A3s:0.5482, A4s:0.0469, A5s:0.0043, A6s:0.3660, A7s:0.0013, AKs:0.7338, AA:0.8930"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1693, KK:0.8019, AKo:0.3658, AKs:0.7492, AA:0.9841"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@14",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0763, Q2o:0.0001, A2o:0.0001, 32s:0.0043, 33:0.0559, 43s:0.0051, 44:0.1036, 52s:0.0001, 54s:0.0001, 55:0.0471, 65s:0.0104, 66:0.0792, 74s:0.0002, 75s:0.0068, 77:0.0727, 88:0.2040, 97s:0.0004, 99:0.1210, A9o:0.0002, T6s:0.0001, T7s:0.0004, TT:0.1616, QTo:0.0031, ATo:0.0001, J3s:0.0001, J6s:0.0002, J7s:0.0001, J8s:0.0002, J9s:0.0014, JJ:0.3028, QJo:0.0066, AJo:0.0041, Q3s:0.0006, Q5s:0.0002, Q6s:0.0474, Q7s:0.0780, Q9s:0.0533, QTs:0.0201, QJs:0.1008, QQ:0.7010, KQo:0.2504, AQo:0.2141, K2s:0.0337, K4s:0.0257, K5s:0.0002, K6s:0.0506, K7s:0.0014, K8s:0.0457, K9s:0.0248, KTs:0.0088, KJs:0.1667, KQs:0.4696, KK, AKo, A2s:0.0013, A3s:0.0051, A4s:0.2242, A5s:0.3805, A6s:0.0603, A7s:0.0470, A8s:0.0161, A9s:0.4821, ATs:0.0028, AJs:0.1469, AQs:0.6454, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0158, 55:0.1512, A5o:0.0002, 65s:0.0033, 66:0.2613, 76s:0.1374, 77:0.1533, 88:0.1041, 99:0.0915, T7s:0.0005, T9s:0.0055, TT:0.1342, KTo:0.0513, ATo:0.0016, J9s:0.0032, JJ:0.1205, KJo:0.0002, AJo:0.0038, Q8s:0.0037, Q9s:0.0013, QTs:0.0181, QJs:0.0175, QQ:0.7550, KQo:0.5982, AQo:0.7043, K2s:0.0001, K3s:0.0001, K4s:0.0071, K5s:0.0022, K6s:0.2171, K7s:0.0094, K8s:0.0730, K9s:0.2700, KTs:0.3694, KJs:0.4117, KQs:0.6857, KK:0.0001, A2s:0.0003, A3s:0.0016, A4s:0.0804, A5s:0.0318, A6s:0.0058, A7s:0.0110, A8s:0.1810, A9s:0.0276, ATs:0.4000, AJs:0.6069, AQs:0.9507, AA:0.5143"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.1338, 44:0.3102, A4o:0.0005, 54s:0.0003, 55:0.2285, A5o:0.0003, 65s:0.0022, 66:0.1790, 76s:0.0004, 77:0.4995, 88:0.4384, 98s:0.0008, 99:0.5304, Q9o:0.0002, A9o:0.0006, T9s:0.0074, TT:0.5621, QTo:0.0027, KTo:0.0002, JTs:0.0048, JJ:0.7239, QJo:0.0011, KJo:0.0011, AJo:0.0043, Q4s:0.0001, Q5s:0.0002, Q6s:0.0026, Q7s:0.0073, Q8s:0.0099, Q9s:0.1090, QTs:0.0985, QJs:0.1998, QQ:0.2450, KQo:0.2426, AQo:0.0362, K2s:0.0027, K3s:0.0003, K4s:0.1333, K5s:0.0645, K6s:0.0060, K7s:0.0375, K8s:0.0343, K9s:0.0431, KTs:0.2582, KJs:0.1544, KQs:0.2569, KK, AKo, A2s:0.3312, A3s:0.2157, A4s:0.3224, A5s:0.3083, A6s:0.0706, A7s:0.2256, A8s:0.2458, A9s:0.3876, ATs:0.2677, AJs:0.2128, AQs:0.0348, AKs, AA:0.4857"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@14|CO:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0715, KK:0.1981, AKo:0.0567, AKs:0.1380, AA:0.0159"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 88:0.0004, 99:0.0001, T7s:0.0004, T8s:0.0002, J9s:0.0001, JJ:0.0008, KJo:0.0001, Q8s:0.0001, QQ:0.0082, AQo:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0001, KK:0.9551, AKo:0.0004, A2s:0.0001, A4s:0.0001, A9s:0.0006, ATs:0.0002, AQs:0.0012, AKs:0.0010, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0604, KK:0.1981, AKo:0.0305, AKs:0.1380, AA:0.0159"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0030, Q2o:0.0001, A2o:0.1864, 33:0.0003, Q3o:0.0002, K3o:0.0006, A3o:0.2982, 44:0.0017, Q4o:0.0002, K4o:0.0003, A4o:0.2348, 53s:0.0001, 54s:0.0018, 55:0.0008, Q5o:0.0004, K5o:0.0001, A5o:0.4005, A6o:0.0286, Q7o:0.0001, A7o:0.0037, 88:0.0107, A8o:0.1812, A9o:0.0061, ATo:0.0003, JJ:0.3471, QJo:0.0214, KJo:0.0391, AJo:0.4796, Q2s:0.0684, Q3s:0.0003, Q4s:0.0010, Q5s:0.0002, Q6s:0.0262, Q8s:0.0009, Q9s:0.0001, QTs:0.0003, QJs:0.0210, QQ:0.0269, KQo:0.0003, AQo:0.1739, K2s:0.0853, K3s:0.0002, K4s:0.0100, K5s:0.0008, K6s:0.0484, K7s:0.0010, K8s:0.0043, K9s:0.0002, KTs:0.0044, KJs:0.0240, KK:0.0948, AKo:0.0908, A2s:0.1232, A3s:0.0291, A4s:0.1482, A5s:0.0416, A6s:0.2006, A7s:0.0749, A8s:0.2684, A9s:0.1052, ATs:0.0189, AJs:0.2295, AQs:0.0023, AKs:0.2356, AA:0.9991"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.2579, A2o:0.0174, Q3o:0.0015, K3o:0.0756, A3o:0.1479, K4o:0.1560, A4o:0.1349, K5o:0.0435, A5o:0.0255, Q6o:0.0004, K6o:0.0250, A6o:0.0295, K7o:0.0015, 88:0.0002, Q8o:0.0001, A8o:0.0007, A9o:0.0002, TT:0.0003, KTo:0.0389, JJ:0.0993, QJo:0.0011, KJo:0.0626, AJo:0.0793, Q2s:0.0020, Q3s:0.0014, Q4s:0.0006, Q6s:0.0001, Q8s:0.0008, QJs:0.0017, QQ:0.0057, KQo:0.0372, AQo:0.0014, K2s:0.3705, K3s:0.2262, K4s:0.3358, K5s:0.2252, K6s:0.0180, K7s:0.0007, K8s:0.0005, KJs:0.0054, KK:0.9052, AKo:0.0393, A2s:0.0126, A3s:0.0237, A4s:0.0123, A5s:0.0014, A6s:0.0004, A7s:0.0094, A8s:0.0007, ATs:0.0001, AJs:0.0144, AQs:0.0002, AKs:0.6007, AA:0.0009"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3149, A2o:0.0020, 33:0.3913, A3o:0.0001, 43s:0.0063, 44:0.4509, A4o:0.0413, 53s:0.0006, 54s:0.0002, 55:0.3005, A5o:0.1015, 65s:0.0001, 66:0.2236, A6o:0.0015, 77:0.2814, 82s:0.0001, 85s:0.0001, 87s:0.0001, 88:0.3528, 99:0.0237, TT:0.0080, JJ:0.5432, QJo:0.2122, AJo:0.0002, Q2s:0.5064, Q3s:0.4909, Q4s:0.5304, Q5s:0.5541, Q6s:0.5200, Q7s:0.3627, Q8s:0.4942, Q9s:0.6154, QTs:0.7915, QJs:0.8246, QQ:0.9674, KQo:0.9624, AQo:0.8248, K2s:0.4074, K3s:0.3993, K4s:0.4765, K5s:0.5014, K6s:0.4165, K7s:0.3661, K8s:0.1619, K9s:0.2927, KTs:0.4938, KJs:0.8052, KQs, AKo:0.8700, A2s:0.7471, A3s:0.8986, A4s:0.8080, A5s:0.8781, A6s:0.7227, A7s:0.6467, A8s:0.6474, A9s:0.3667, ATs:0.5416, AJs:0.7085, AQs:0.9974, AKs:0.1637"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9556, 33:0.7916, 43s:0.8617, 44:0.5707, 54o:0.0558, 52s:0.1317, 53s:0.9885, 54s:0.9965, 55:0.7236, 65o:0.2331, 63s:0.1301, 64s:0.9456, 65s:0.9932, 66:0.9806, 72s:0.0001, 74s:0.0319, 75s:0.9762, 76s:0.9673, 77:0.9996, 84s:0.0011, 85s:0.6006, 86s:0.9906, 87s:0.9930, 88, 96s:0.5132, 97s:0.9804, 98s:0.9793, 99, T3s:0.0004, T6s:0.0005, T7s:0.5520, T8s:0.9371, T9s:0.9797, TT:0.9998, JTo:0.0001, KTo:0.1579, ATo:0.8429, J4s:0.0002, J5s:0.0001, J7s:0.6631, J8s:0.9815, J9s:0.9810, JTs:0.9964, JJ:0.9995, QJo:0.9042, KJo:0.9524, AJo:0.9981, Q3s:0.0169, Q4s:0.0747, Q5s:0.5582, Q6s:0.0635, Q7s:0.4055, Q8s:0.7344, Q9s:0.7192, QTs:0.7959, QJs:0.8135, KQo:0.4486, AQo:0.1311, K2s:0.1815, K3s:0.6470, K4s:0.2268, K5s:0.6943, K6s:0.5611, K7s:0.8539, K8s:0.8070, K9s:0.9958, KTs:0.9974, KJs:0.9995, KQs:0.1640, A2s:0.1939, A3s:0.3324, A4s:0.5295, A5s:0.4950, A6s:0.6858, A7s:0.7272, A8s:0.7236, A9s:0.9991, ATs:0.9963, AJs:0.9997, AQs:0.6369"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0007, A2o:0.1443, 33:0.0005, Q3o:0.0008, K3o:0.0003, A3o:0.0941, 43s:0.0007, 44:0.0001, Q4o:0.0008, A4o:0.1210, 53s:0.0001, Q5o:0.0003, K5o:0.0002, A5o:0.4782, 63s:0.0001, Q6o:0.0002, K6o:0.0029, A6o:0.0099, Q7o:0.0001, K7o:0.0021, A7o:0.0908, 87s:0.0001, K8o:0.0017, A8o:0.2706, K9o:0.0001, A9o:0.0368, T8s:0.0025, QTo:0.0008, KTo:0.0004, ATo:0.0792, JJ:0.0004, QJo:0.0002, AJo:0.0012, Q2s:0.0074, Q3s:0.0011, Q4s:0.0016, Q5s:0.0006, Q6s:0.0053, Q8s:0.0038, Q9s:0.0128, QTs:0.0003, QJs:0.0002, QQ:0.2354, KQo:0.0123, AQo:0.5659, K2s:0.0303, K3s:0.0302, K4s:0.0015, K5s:0.0226, K6s:0.0029, K7s:0.0161, K8s:0.0215, K9s:0.0016, KTs:0.0001, KK:0.0486, AKo:0.0225, A2s:0.2915, A3s:0.2939, A4s:0.0749, A5s:0.0853, A6s:0.0761, A8s:0.1268, A9s:0.0001, ATs:0.0015, AJs:0.0001, AQs:0.0012, AKs:0.3823, AA:0.8609"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "Q2o:0.0045, K2o:0.2279, A2o:0.1904, Q3o:0.0193, K3o:0.1518, A3o:0.1638, K4o:0.0015, A4o:0.1672, Q5o:0.0046, K5o:0.1786, A5o:0.0515, K6o:0.0007, Q7o:0.0007, K7o:0.0583, A7o:0.0130, K8o:0.1954, A8o:0.0137, K9o:0.0283, A9o:0.0227, QTo:0.0001, ATo:0.0226, QJo:0.0002, AJo:0.0001, Q2s:0.0095, Q3s:0.0084, Q4s:0.0092, Q5s:0.0142, Q6s:0.0028, Q7s:0.0035, Q9s:0.0008, QQ:0.0514, KQo:0.0437, AQo:0.0319, K2s:0.4836, K3s:0.0084, K4s:0.5133, K5s:0.0285, K6s:0.0908, K7s:0.0005, K8s:0.0004, KK:0.9514, AKo:0.0923, A2s:0.0018, A3s:0.0004, A4s:0.0002, A5s:0.0001, A6s:0.0004, A7s:0.0003, A9s:0.0002, AQs:0.0007, AKs:0.6028, AA:0.1391"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0444, A2o:0.1226, 33:0.2079, A3o:0.1306, 44:0.4290, A4o:0.1131, 55:0.2762, A5o:0.0567, 66:0.0193, A6o:0.0001, TT:0.0001, AJo:0.0001, Q2s:0.0622, Q3s:0.2221, Q4s:0.2587, Q5s:0.1203, Q6s:0.0338, Q7s:0.2043, Q8s:0.1018, Q9s:0.2502, QTs:0.2024, QJs:0.1858, QQ:0.7132, KQo:0.4953, AQo:0.2711, K2s:0.2003, K3s:0.2686, K4s:0.2068, K5s:0.2201, K6s:0.2877, K7s:0.1076, K8s:0.1592, K9s:0.0013, KTs:0.0012, KQs:0.8360, AKo:0.8851, A2s:0.5065, A3s:0.3712, A4s:0.3951, A5s:0.4194, A6s:0.2370, A7s:0.2720, A8s:0.1467, A9s:0.0002, ATs:0.0009, AJs:0.0001, AQs:0.3612, AKs:0.0149"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0003, 66:0.1205, 77:0.0310, 88:0.0732, 99:0.0001, JJ:0.0097, Q4s:0.0009, QTs:0.0001, QQ:0.5359, AQo:0.1613, K9s:0.0030, KTs:0.0001, KJs:0.0021, KK:0.2144, AKo:0.0001, A3s:0.0045, A4s:0.0315, A5s:0.0429, A6s:0.0009, A7s:0.2711, A9s:0.1486, ATs:0.1063, AJs:0.0253, AQs:0.9557, AKs:0.0003, AA:0.0024"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0002, A4o:0.0262, A5o:0.0411, A6o:0.0036, 75s:0.0008, A7o:0.0615, 86s:0.0016, 88:0.0007, K8o:0.0001, A8o:0.0371, K9o:0.0013, A9o:0.0322, T6s:0.0001, T9s:0.0002, KTo:0.0010, ATo:0.1278, J7s:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0034, KJo:0.0002, AJo:0.0988, Q5s:0.0003, QJs:0.0001, QQ:0.0005, KQo:0.0003, AQo:0.1551, K3s:0.0008, K4s:0.0081, K5s:0.0010, K6s:0.0008, K7s:0.0002, K9s:0.0040, KTs:0.0002, KJs:0.0025, KQs:0.0001, KK:0.0007, AKo:0.2405, A2s:0.0525, A3s:0.0504, A4s:0.1268, A5s:0.0028, A6s:0.3069, A7s:0.0448, A8s:0.0331, A9s:0.1388, ATs:0.0146, AJs:0.0543, AQs:0.0337, AKs:0.0247, AA:0.9974"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0148, 54s:0.0312, 55:0.0066, 66:0.0046, A6o:0.0041, 75s:0.0003, 76s:0.0003, 77:0.0163, A7o:0.0052, 86s:0.0053, 88:0.0202, A8o:0.0073, 96s:0.0011, 97s:0.0003, 98s:0.0044, 99:0.0066, K9o:0.0118, T6s:0.0001, T7s:0.0001, T9s:0.0068, TT:0.0222, KTo:0.0027, ATo:0.0150, JJ:0.0884, AJo:0.0001, Q4s:0.0009, Q8s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.1513, KQo:0.0090, AQo:0.0279, K2s:0.0196, K3s:0.0677, K4s:0.0081, K5s:0.0621, K6s:0.0493, K7s:0.1813, K8s:0.0259, K9s:0.0241, KTs:0.0003, KJs:0.0547, KQs:0.2742, KK:0.7849, AKo:0.7593, A2s:0.5198, A3s:0.1154, A4s:0.7505, A5s:0.1514, A6s:0.3202, A7s:0.0786, A8s:0.8374, A9s:0.3865, ATs:0.5582, AJs:0.8870, AQs:0.0098, AKs:0.9750, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0048, 55:0.0500, 65s:0.0824, 66:0.2977, 76s:0.0020, 77:0.0520, 88:0.4557, 99:0.0133, TT:0.1527, JJ:0.3280, AJo:0.0003, QQ:0.7552, AQo:0.4906, K7s:0.0003, KTs:0.1746, KJs:0.0004, KQs:0.0940, A3s:0.0001, A5s:0.0261, A6s:0.0004, A7s:0.0107, A8s:0.1334, A9s:0.1657, ATs:0.3109, AJs:0.0897, AQs:0.9635"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "QQ:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0010, 55:0.0002, 66:0.0100, 77:0.0039, 88:0.0803, 99:0.0923, TT:0.1588, ATo:0.0037, JJ:0.0349, AJo:0.0089, Q9s:0.0001, QQ:0.2063, AQo:0.0262, K7s:0.0084, K8s:0.0001, K9s:0.0017, KTs:0.0834, KJs:0.0337, KQs:0.0890, AKo:0.4396, A2s:0.0070, A3s:0.0035, A4s:0.3082, A5s:0.4845, A6s:0.0096, A7s:0.4429, A8s:0.3002, A9s:0.6513, ATs:0.4412, AJs:0.8548, AQs:0.0360, AKs:0.4548"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0576, 77:0.0899, 88:0.0001, 99:0.0001, TT:0.0003, JJ:0.0834, Q6s:0.0008, Q9s:0.0009, QJs:0.0001, QQ:0.2032, KQo:0.0006, AQo:0.0051, K3s:0.0006, K5s:0.0201, K6s:0.0319, K7s:0.0376, K8s:0.1406, K9s:0.0122, KTs:0.0484, KJs:0.2744, KQs:0.5296, A4s:0.0013, A5s:0.1434, A7s:0.2068, A8s:0.0001, A9s:0.0869, ATs:0.4546, AJs:0.1145, AQs:0.0542, AA:0.2353"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0004, A4o:0.0007, 54s:0.0002, 55:0.0039, A5o:0.0040, 65s:0.0062, 66:0.0641, A6o:0.0031, 76s:0.0369, 77:0.0013, A7o:0.0001, 86s:0.0004, 87s:0.0080, 88:0.0033, K8o:0.0041, A8o:0.0018, 97s:0.0027, 98s:0.0023, 99:0.0018, A9o:0.0015, T9s:0.0003, TT:0.4907, QTo:0.0009, KTo:0.0153, ATo:0.0019, J9s:0.0001, JJ:0.1082, Q5s:0.0033, Q6s:0.0037, Q7s:0.0044, Q8s:0.0010, Q9s:0.0078, QTs:0.0078, QJs:0.0017, QQ:0.0302, KQo:0.0187, AQo:0.0042, K2s:0.0067, K3s:0.0025, K4s:0.0713, K5s:0.1154, K6s:0.1783, K7s:0.1342, K8s:0.4279, K9s:0.2543, KTs:0.1998, KJs:0.1196, KQs:0.0566, KK, AKo, A2s:0.0014, A3s:0.1999, A4s:0.5257, A5s:0.4994, A6s:0.0404, A7s:0.0847, A8s:0.0932, A9s:0.4377, ATs:0.4169, AJs:0.1858, AQs:0.2968, AKs, AA:0.7647"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0239, 66:0.0317, 77:0.0317, 88:0.0051, 99:0.0019, JJ:0.0001, QQ:0.1713, KQo:0.0003, AQo:0.0023, K7s:0.0076, K9s:0.0388, KTs:0.0625, KJs:0.0905, KQs:0.1802, A3s:0.0003, A4s:0.0338, A5s:0.0399, A6s:0.0016, A8s:0.0369, A9s:0.0031, ATs:0.0061, AJs:0.2073, AQs:0.1595"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0006, 66:0.0010, 77:0.1047, 88:0.0901, 99:0.0634, TT:0.0776, JJ:0.0691, AJo:0.0001, QQ:0.4206, KQo:0.0018, AQo:0.0070, K7s:0.0133, K8s:0.0342, K9s:0.4279, KTs:0.4537, KJs:0.6292, KQs:0.1617, AKo:0.4396, A2s:0.0004, A3s:0.0020, A4s:0.0165, A5s:0.4993, A6s:0.0054, A7s:0.2710, A8s:0.0035, A9s:0.1259, ATs:0.6751, AJs:0.6534, AQs:0.4158, AKs:0.4548"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, JJ:0.0002, QQ, KK, AKo:0.5139, AKs:0.9436, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.9620, AKo:0.3829, AQs:0.0037, AKs:0.4548"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0004, 65s:0.0942, 66:0.0995, 87s:0.0002, 88:0.1245, T9s:0.0005, JTs:0.0001, JJ:0.0199, QJs:0.0001, QQ:0.1249, AQo:0.1524, K4s:0.0004, KJs:0.0322, KQs:0.0007, KK:0.2313, A3s:0.0001, A4s:0.0336, A5s:0.1021, A6s:0.0007, A8s:0.0068, A9s:0.0154, ATs:0.0178, AJs:0.1584, AQs:0.7139, AKs:0.0001, AA:0.0009"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "33:0.0001, A3o:0.0168, 44:0.0006, A4o:0.0955, 54s:0.0040, A5o:0.0342, 65s:0.0017, A6o:0.0755, A7o:0.0696, 86s:0.0003, K8o:0.0009, A8o:0.0983, K9o:0.0014, A9o:0.0159, T6s:0.0003, T9s:0.0014, TT:0.0001, KTo:0.0003, ATo:0.0511, J7s:0.0001, J9s:0.0002, JTs:0.0001, JJ:0.0001, KJo:0.0007, AJo:0.0621, Q4s:0.0001, Q8s:0.0026, Q9s:0.0034, QJs:0.0019, QQ:0.0141, KQo:0.0006, AQo:0.1274, K2s:0.0004, K3s:0.0015, K4s:0.0056, K5s:0.0007, K6s:0.0045, K7s:0.0014, K8s:0.0009, K9s:0.0019, KTs:0.0005, KJs:0.0010, KQs:0.0006, AKo:0.2019, A2s:0.0345, A3s:0.1747, A4s:0.0578, A5s:0.0169, A6s:0.1623, A7s:0.1629, A8s:0.0771, A9s:0.0191, ATs:0.1433, AJs:0.0049, AQs:0.0038, AKs:0.2209, AA:0.9991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0051, A3o:0.0255, A4o:0.0165, 54s:0.0116, 55:0.0100, A5o:0.0262, 65s:0.0008, 66:0.0408, A6o:0.0024, 75s:0.0062, 77:0.0262, A7o:0.0967, 86s:0.0005, 87s:0.0047, 88:0.0764, K8o:0.0004, A8o:0.0093, 97s:0.0002, 98s:0.0001, 99:0.0952, K9o:0.0007, A9o:0.0027, T6s:0.0001, T8s:0.0004, T9s:0.0012, TT:0.1256, ATo:0.0967, J7s:0.0001, J8s:0.0004, J9s:0.0021, JJ:0.1248, KJo:0.0003, AJo:0.0541, Q8s:0.0002, Q9s:0.0018, QJs:0.0047, QQ:0.8590, KQo:0.0726, AQo:0.1067, K2s:0.0139, K3s:0.0011, K4s:0.1378, K5s:0.0001, K6s:0.0191, K7s:0.0058, K8s:0.0026, K9s:0.1046, KTs:0.1285, KJs:0.0255, KQs:0.3958, KK:0.7687, AKo:0.7981, A2s:0.5055, A3s:0.2967, A4s:0.3346, A5s:0.7793, A6s:0.4846, A7s:0.5863, A8s:0.4434, A9s:0.4102, ATs:0.7050, AJs:0.7979, AQs:0.2790, AKs:0.7788"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.1236, 66:0.1784, 77:0.2255, 87s:0.0010, 88:0.3756, 98s:0.0006, 99:0.0859, TT:0.0006, JJ:0.4462, QTs:0.0112, QQ:0.3339, AQo:0.3293, K7s:0.0007, K9s:0.0016, KTs:0.0091, KJs:0.0119, KQs:0.2139, A4s:0.0301, A5s:0.0632, A8s:0.1336, A9s:0.0357, ATs:0.0875, AJs:0.5424, AQs:0.9293"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "KTs:0.0001, ATs:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0009, 66:0.0110, 77:0.0003, 88:0.0029, 99:0.0034, T9s:0.0001, TT:0.0974, ATo:0.0002, JJ:0.0677, AJo:0.0046, QQ:0.6274, KQo:0.0036, AQo:0.0632, K7s:0.0005, K9s:0.0156, KTs:0.0192, KJs:0.0719, KQs:0.1088, AKo:0.4396, A2s:0.0025, A3s:0.0012, A4s:0.1988, A5s:0.2867, A6s:0.0025, A7s:0.2262, A8s:0.2785, A9s:0.4605, ATs:0.5385, AJs:0.3083, AQs:0.0701, AKs:0.4548"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0333, 77:0.0050, TT:0.0295, KJo:0.0383, QQ:0.2050, KQo:0.0055, AQo:0.0005, K4s:0.0457, K5s:0.0017, K7s:0.0034, K9s:0.0011, KJs:0.0449, KQs:0.1212, A5s:0.0348, A7s:0.0434, A8s:0.0824, A9s:0.0177, ATs:0.0612, AJs:0.3219, AQs:0.0832, AKs:0.0044, AA:0.1495"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0231, A4o:0.0006, 54s:0.0047, 55:0.0003, A5o:0.0049, 66:0.4894, A6o:0.0002, 75s:0.0004, 77:0.0181, 87s:0.0013, 88:0.0300, 98s:0.0031, 99:0.0089, T9s:0.0002, TT:0.2506, KTo:0.0014, JTs:0.0023, JJ:0.1588, KJo:0.0093, AJo:0.0049, Q9s:0.0002, QTs:0.0003, QJs:0.0011, QQ:0.1028, KQo:0.0143, AQo:0.0081, K3s:0.0081, K4s:0.1651, K5s:0.4203, K7s:0.3719, K8s:0.1475, K9s:0.1019, KTs:0.7496, KJs:0.1280, KQs:0.7906, KK, AKo, A2s:0.0084, A3s:0.5640, A4s:0.0574, A5s:0.1699, A6s:0.0066, A7s:0.0564, A8s:0.0350, A9s:0.4074, ATs:0.0559, AJs:0.2948, AQs:0.7698, AKs:0.9956, AA:0.8505"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0066, 77:0.0003, TT:0.0008, JJ:0.0001, QQ:0.1354, KQo:0.0046, AQo:0.0010, KTs:0.0387, KJs:0.0412, KQs:0.0781, A4s:0.0621, A7s:0.0004, A8s:0.0258, ATs:0.0318, AJs:0.0069, AQs:0.1526"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0016, 66:0.0005, 77:0.0399, 88:0.0843, TT:0.1368, JTs:0.0005, JJ:0.2912, QTs:0.0001, QJs:0.0001, QQ:0.6026, KQo:0.0001, AQo:0.0030, K7s:0.0493, K8s:0.0269, K9s:0.1688, KTs:0.3737, KJs:0.3395, KQs:0.5782, AKo:0.4396, A3s:0.0019, A4s:0.0646, A5s:0.3140, A6s:0.0001, A7s:0.1968, A8s:0.1829, A9s:0.0488, ATs:0.6764, AJs:0.3042, AQs:0.5029, AKs:0.4548"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.2403, QQ, KK, AKo:0.0624, AQs:0.0022, AKs:0.9338, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.3494, QQ:0.9620, AKo:0.1514, AQs:0.0002, AKs:0.4548"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0006, 33:0.0034, A3o:0.0090, A4o:0.0717, 55:0.0071, A5o:0.0023, 65s:0.0004, 66:0.1611, A6o:0.0001, 75s:0.0089, 76s:0.0001, 77:0.0827, A7o:0.0005, 85s:0.0001, 86s:0.0001, 88:0.0439, A8o:0.1134, 94s:0.0014, 99:0.1302, A9o:0.0330, T9s:0.0366, TT:0.1498, ATo:0.0008, J2s:0.0001, J5s:0.0003, J6s:0.0003, J8s:0.0218, J9s:0.0011, JTs:0.0002, JJ:0.1798, KJo:0.0003, AJo:0.0020, Q4s:0.0001, Q9s:0.0234, QTs:0.0172, QJs:0.0080, QQ:0.3843, KQo:0.0005, AQo:0.7168, K4s:0.0002, K5s:0.0120, K7s:0.0221, K9s:0.0001, KTs:0.0021, KJs:0.0009, KQs:0.0004, KK:0.0650, AKo:0.0092, A2s:0.0012, A3s:0.0004, A4s:0.0707, A5s:0.1180, A6s:0.4380, A7s:0.0405, A8s:0.0184, A9s:0.2781, ATs:0.1638, AJs:0.1000, AQs:0.6455, AKs:0.0664, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3421, A2o:0.0252, 33:0.0994, A3o:0.2016, 44:0.1076, A4o:0.1160, 55:0.4149, A5o:0.1063, 65s:0.0008, 66:0.0092, A6o:0.0015, 75s:0.0035, 76s:0.0101, 77:0.2011, A7o:0.0035, 87s:0.0081, 88:0.0145, 95s:0.0002, 99:0.0268, T9s:0.0007, TT:0.0270, ATo:0.0164, J8s:0.0099, JJ:0.4199, AJo:0.2951, Q5s:0.0013, Q9s:0.0002, QJs:0.0003, QQ:0.6133, AQo:0.1182, K3s:0.0018, K4s:0.0014, K5s:0.0004, K7s:0.0012, K9s:0.0003, KJs:0.0006, KK:0.9350, AKo:0.9908, A2s:0.9972, A3s:0.9543, A4s:0.8497, A5s:0.7400, A6s:0.3789, A7s:0.7978, A8s:0.9513, A9s:0.6029, ATs:0.7071, AJs:0.6908, AQs:0.3515, AKs:0.9336"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0019, A2o:0.0002, 33:0.0018, Q3o:0.0002, A3o:0.0113, 43s:0.0001, 44:0.0015, A4o:0.0026, 55:0.0265, K5o:0.0001, A5o:0.0383, 65s:0.0002, 66:0.0005, K6o:0.0001, 72s:0.0001, 76s:0.0007, 77:0.1022, A7o:0.0852, 82s:0.0008, 85s:0.0001, 88:0.2117, K8o:0.0001, A8o:0.0360, 93s:0.0001, 97s:0.0004, 98s:0.0003, 99:0.2422, K9o:0.0003, A9o:0.0040, T2s:0.0002, T4s:0.0046, T5s:0.0002, T9s:0.0001, TT:0.1311, ATo:0.0028, J8s:0.0001, J9s:0.0003, JJ:0.1477, AJo:0.0046, Q4s:0.0012, Q6s:0.0031, Q7s:0.0022, Q8s:0.0156, QTs:0.0002, QJs:0.0028, QQ:0.5916, KQo:0.0003, AQo:0.8249, K3s:0.0002, K4s:0.0001, K5s:0.0475, K6s:0.0138, K7s:0.0169, K8s:0.0024, K9s:0.0565, KTs:0.0005, KJs:0.0592, KQs:0.0083, KK:0.3052, AKo:0.0002, A2s:0.0929, A3s:0.0338, A4s:0.0220, A5s:0.2015, A6s:0.1727, A7s:0.1717, A8s:0.1882, A9s:0.2455, ATs:0.3980, AJs:0.1944, AQs:0.5148, AKs:0.1345, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0478, A2o:0.0432, 33:0.0238, A3o:0.1246, 44:0.2943, A4o:0.1437, 54s:0.0015, 55:0.1034, A5o:0.1042, 66:0.0222, A6o:0.0017, 76s:0.0001, 77:0.1493, A7o:0.0593, 87s:0.0009, 88:0.1668, A8o:0.0292, 96s:0.0001, 99:0.0056, A9o:0.0162, T4s:0.0019, T8s:0.0002, T9s:0.0001, TT:0.0397, ATo:0.0016, JJ:0.8037, AJo:0.0124, Q8s:0.0001, QJs:0.0002, QQ:0.4080, AQo:0.0410, K6s:0.0001, K8s:0.0002, K9s:0.0194, KQs:0.0003, KK:0.6948, AKo:0.9998, A2s:0.8815, A3s:0.8856, A4s:0.9526, A5s:0.7237, A6s:0.7844, A7s:0.5532, A8s:0.2657, A9s:0.5388, ATs:0.4509, AJs:0.7169, AQs:0.4850, AKs:0.8655"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, 33:0.4847, 44:0.4478, 54s:0.4818, 55:0.6878, 64s:0.0001, 65s:0.8802, 66:0.9583, 75s:0.0001, 76s:0.7402, 77:0.8161, 85s:0.0001, 86s:0.4541, 87s:0.6310, 88:0.9678, A8o:0.0001, 96s:0.0001, 97s:0.0573, 98s:0.3219, 99:0.8362, T7s:0.0855, T8s:0.8587, T9s:0.8711, TT:0.9113, KTo:0.0001, ATo:0.0293, J8s:0.0239, J9s:0.6054, JTs:0.9182, JJ:0.7675, KJo:0.4807, AJo:0.6390, Q5s:0.0001, Q7s:0.0036, Q8s:0.3062, Q9s:0.3276, QTs:0.7394, QJs:0.9140, QQ:0.5845, KQo:0.2883, AQo:0.7248, K2s:0.0183, K4s:0.0534, K5s:0.1049, K6s:0.3877, K7s:0.5176, K8s:0.7638, K9s:0.3164, KTs:0.9604, KJs:0.9928, KQs:0.9632, KK:0.7082, AKo:0.0003, A2s:0.0274, A3s:0.0024, A4s:0.0374, A5s:0.0588, A6s:0.3377, A7s:0.0091, A8s:0.1429, A9s:0.3368, ATs:0.7592, AJs:0.9017, AQs:0.8099, AKs:0.0093"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "33:0.0178, A3o:0.0073, 44:0.0005, A4o:0.0025, 54s:0.0931, 55:0.0066, A5o:0.2421, 65s:0.0784, 66:0.0118, 75s:0.0062, 76s:0.0063, 77:0.1126, A7o:0.0072, 86s:0.0616, 87s:0.0022, 88:0.0296, A8o:0.0745, 96s:0.0001, 97s:0.0082, 98s:0.0118, 99:0.1599, A9o:0.0051, T7s:0.0006, T8s:0.0001, T9s:0.0452, TT:0.0787, KTo:0.0001, ATo:0.1583, J7s:0.0008, J8s:0.0014, J9s:0.2023, JTs:0.0362, JJ:0.0015, QJo:0.0004, AJo:0.0075, Q4s:0.0001, Q5s:0.0007, Q7s:0.0040, Q8s:0.0011, Q9s:0.0087, QTs:0.2110, QJs:0.0084, QQ:0.0099, KQo:0.0003, AQo:0.2744, K2s:0.0003, K3s:0.0001, K4s:0.0030, K5s:0.0001, K6s:0.0006, K7s:0.0008, K8s:0.0028, K9s:0.0015, KTs:0.0006, KJs:0.0002, KQs:0.0343, KK:0.0009, AKo:0.0084, A2s:0.0378, A3s:0.0280, A4s:0.0323, A5s:0.0444, A6s:0.0636, A7s:0.1403, A8s:0.3395, A9s:0.3596, ATs:0.0004, AJs:0.0006, AQs:0.1807, AKs:0.1338, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.4865, A3o:0.0058, 44:0.5472, A4o:0.1528, 54s:0.0026, 55:0.2997, A5o:0.0461, 65s:0.0005, 66:0.0297, A6o:0.0014, 76s:0.0012, 77:0.0708, A7o:0.0153, 86s:0.0009, 87s:0.0038, 88:0.0019, A8o:0.0268, 96s:0.0004, 97s:0.0006, 98s:0.0004, 99:0.0021, A9o:0.0006, T7s:0.0010, T8s:0.0005, T9s:0.0002, TT:0.0094, KTo:0.0001, ATo:0.0468, J7s:0.0015, J8s:0.0139, J9s:0.0101, JTs:0.0251, JJ:0.2310, AJo:0.3511, Q4s:0.0014, Q5s:0.0004, Q7s:0.0006, Q8s:0.0002, Q9s:0.0001, QTs:0.0079, QJs:0.0345, QQ:0.4056, KQo:0.0002, AQo:0.0008, K2s:0.0002, K3s:0.0002, K4s:0.0018, K5s:0.0001, K7s:0.0040, K8s:0.0005, K9s:0.0001, KTs:0.0004, KJs:0.0033, KQs:0.0020, KK:0.2909, AKo:0.9913, A2s:0.9018, A3s:0.9625, A4s:0.9280, A5s:0.8829, A6s:0.5817, A7s:0.8474, A8s:0.5087, A9s:0.3014, ATs:0.2403, AJs:0.0975, AQs:0.0094, AKs:0.8569"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|CO:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0791, 65s:0.0074, 66:0.1474, 77:0.0687, 88:0.0704, 99:0.0067, A9o:0.0003, T9s:0.0187, TT:0.0002, ATo:0.0293, J8s:0.0088, J9s:0.1707, JTs:0.0729, JJ:0.1390, QJo:0.0024, KJo:0.0595, AJo:0.0570, Q8s:0.0017, Q9s:0.0001, QQ:0.0066, AQo:0.2311, K3s:0.0001, K5s:0.0006, K6s:0.0019, K7s:0.0262, K8s:0.0001, K9s:0.0049, KTs:0.0002, KJs:0.0585, AKo:0.0208, A2s:0.0785, A3s:0.0973, A4s:0.1929, A5s:0.1182, A6s:0.0806, A7s:0.0413, A8s:0.1502, ATs:0.0003, AKs:0.1669, AA:0.1952"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, ATo:0.0011, AJo:0.0082, AQo:0.0028, AKo:0.0338, A2s:0.0306, A3s:0.1624, A4s:0.1932, A5s:0.1583, A6s:0.0969, A7s:0.0195, A8s:0.0433, AKs:0.2058, AA:0.0925"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|CO:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1214, QQ:0.0066, AKo:0.0534, AKs:0.3727, AA:0.2877"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "54s:0.0001, 98s:0.0015, 99:0.0002, T7s:0.0008, T9s:0.0005, J7s:0.0001, JJ:0.0066, Q8s:0.0001, QTs:0.0001, QQ:0.0925, AQo:0.0572, K3s:0.0001, K5s:0.0002, K9s:0.0001, KTs:0.0010, KK:0.3010, AKo:0.0121, A2s:0.0067, A3s:0.0001, A4s:0.0001, A5s:0.0002, A6s:0.0001, A9s:0.0257, ATs:0.0101, AJs:0.0320, AQs:0.3707, AA:0.2086"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0008, A3o:0.0010, A4o:0.1230, A5o:0.0023, A6o:0.0248, 76s:0.0001, A7o:0.0344, 86s:0.0006, A8o:0.1535, 98s:0.0026, A9o:0.0017, T8s:0.0020, T9s:0.0014, ATo:0.0436, JTs:0.0003, JJ:0.0024, AJo:0.0001, Q6s:0.0003, Q7s:0.0003, Q8s:0.0001, QTs:0.0003, QQ:0.0014, AQo:0.0009, K2s:0.0007, K3s:0.0286, K4s:0.0022, K5s:0.0001, K6s:0.0445, K7s:0.0003, K8s:0.0083, K9s:0.0115, KTs:0.0081, KJs:0.0277, KQs:0.0001, KK:0.6989, AKo:0.9717, A2s:0.3915, A3s:0.4581, A4s:0.4640, A5s:0.5375, A6s:0.1536, A7s:0.2884, A8s:0.4218, A9s:0.3199, ATs:0.2138, AJs:0.3621, AQs:0.0426, AKs:0.9974, AA:0.7914"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0742, 65s:0.0074, 66:0.1408, 77:0.0616, 88:0.0704, 99:0.0067, T9s:0.0183, TT:0.0002, ATo:0.0001, J8s:0.0050, J9s:0.1175, JTs:0.0720, JJ:0.1385, KJo:0.0444, AJo:0.0020, QQ:0.0066, AQo:0.2339, K5s:0.0005, K6s:0.0013, K7s:0.0228, K9s:0.0047, KTs:0.0002, KJs:0.0589, AKo:0.0427, A2s:0.0183, A3s:0.0398, A4s:0.3367, A5s:0.0856, A6s:0.0103, A7s:0.0221, A8s:0.0565, ATs:0.0002, AKs:0.3081, AA:0.1476"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, ATo:0.0002, JJ:0.0001, AJo:0.0005, AQo:0.0001, K7s:0.0004, KJs:0.0003, AKo:0.0119, A2s:0.0199, A3s:0.0559, A4s:0.1419, A5s:0.0801, A6s:0.0211, A7s:0.0061, A8s:0.0014, AKs:0.0646, AA:0.1401"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.1498, KK, AKo:0.0002, A8s:0.0001, AKs:0.0637, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0603, QQ:0.0066, AKo:0.0527, AKs:0.3634, AA:0.2877"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "33:0.0002, 76s:0.0926, 99:0.0001, T6s:0.0001, T9s:0.0001, TT:0.0001, J7s:0.0001, JTs:0.0002, JJ:0.0174, AJo:0.0006, Q4s:0.0006, Q7s:0.0003, QTs:0.0001, QJs:0.0002, QQ:0.2117, AQo:0.0293, K2s:0.0001, K6s:0.0012, KJs:0.0025, KQs:0.0001, KK:0.4805, AKo:0.0501, A2s:0.0001, A4s:0.0008, A5s:0.0002, A6s:0.0003, A7s:0.0280, A8s:0.0202, A9s:0.0004, AJs:0.0003, AQs:0.0865, AKs:0.5376, AA:0.1626"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0017, A3o:0.0052, 44:0.0088, A4o:0.0002, 55:0.0018, A5o:0.0511, 66:0.0069, A6o:0.0005, 76s:0.0001, 77:0.0005, A7o:0.0065, 86s:0.0098, 97s:0.0028, 98s:0.0044, 99:0.0014, A9o:0.0003, T6s:0.0002, ATo:0.0007, J8s:0.0001, J9s:0.0005, JTs:0.0001, JJ:0.0002, AJo:0.0196, Q4s:0.0003, Q5s:0.0034, Q6s:0.0010, QTs:0.0114, QJs:0.0002, QQ:0.0162, KQo:0.0042, AQo:0.0552, K2s:0.0003, K3s:0.0023, K6s:0.0201, K7s:0.0001, K8s:0.0007, K9s:0.0001, KJs:0.0001, KQs:0.0011, KK:0.5055, AKo:0.4401, A2s:0.1964, A3s:0.2448, A4s:0.2965, A5s:0.4884, A6s:0.0311, A7s:0.1274, A8s:0.4687, A9s:0.1325, ATs:0.3838, AJs:0.0082, AQs:0.2655, AKs:0.4528, AA:0.8374"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0736, 65s:0.0071, 66:0.1459, 77:0.0685, 88:0.0692, 99:0.0067, T9s:0.0112, TT:0.0002, ATo:0.0001, J8s:0.0016, J9s:0.1686, JTs:0.0573, JJ:0.1387, KJo:0.0194, AJo:0.0009, QQ:0.0066, AQo:0.2197, K3s:0.0001, K5s:0.0028, K6s:0.0013, K7s:0.0322, K8s:0.0001, K9s:0.0048, KTs:0.0002, KJs:0.0529, AKo:0.0434, A2s:0.0368, A3s:0.0762, A4s:0.0723, A5s:0.1430, A6s:0.0362, A7s:0.0028, A8s:0.0737, ATs:0.0001, AKs:0.3108, AA:0.1185"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0203, JJ:0.0002, AJo:0.0027, AQo:0.0046, KJs:0.0004, AKo:0.0112, A2s:0.0408, A3s:0.0592, A4s:0.1636, A5s:0.1074, A6s:0.0291, A7s:0.0066, A8s:0.0087, ATs:0.0002, AKs:0.0619, AA:0.1692"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0001, QQ:0.0211, KK, AKs:0.0044, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0881, QQ:0.0066, AKo:0.0433, AKs:0.3657, AA:0.2877"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A2o:0.0008, 33:0.0007, A3o:0.0767, 42s:0.0001, A4o:0.0006, 52s:0.0001, 53s:0.0003, 55:0.0005, K5o:0.0003, A5o:0.0254, 63s:0.0001, 66:0.0243, K6o:0.0008, A6o:0.0566, A7o:0.0151, 88:0.0018, A8o:0.0233, A9o:0.0209, ATo:0.0100, J7s:0.0016, JJ:0.0624, AJo:0.0425, QTs:0.0001, QJs:0.0030, QQ:0.4829, AQo:0.7344, K3s:0.0156, K4s:0.0048, K5s:0.0040, K6s:0.0190, K7s:0.0001, K8s:0.0033, K9s:0.0011, KJs:0.0006, KQs:0.0134, KK:0.1282, AKo:0.0005, A2s:0.0966, A3s:0.0790, A4s:0.0186, A5s:0.0947, A6s:0.0393, A7s:0.0791, A8s:0.0526, A9s:0.0065, ATs:0.0274, AJs:0.2539, AQs:0.4480, AKs:0.1074, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "53s:0.0004, 55:0.0127, A5o:0.0362, 66:0.1539, 77:0.2386, 88:0.1799, 99:0.1308, T9s:0.0001, TT:0.1692, J8s:0.0001, JJ:0.0097, QTs:0.0001, QQ:0.4149, K2s:0.0002, K6s:0.0001, K7s:0.0011, K8s:0.0012, K9s:0.0004, KTs:0.0001, KJs:0.0012, KK:0.8718, AKo:0.9995, A2s:0.6483, A3s:0.6212, A4s:0.9071, A5s:0.4940, A6s:0.6768, A7s:0.5038, A8s:0.2151, A9s:0.2217, ATs:0.8713, AJs:0.6000, AQs:0.4693, AKs:0.8926"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K2o:0.0010, A2o:0.0907, A3o:0.0678, 43s:0.0001, A4o:0.0253, 52s:0.0002, 53s:0.0015, A5o:0.0463, 64s:0.0001, 66:0.0149, A6o:0.0449, 77:0.0138, A7o:0.0014, 84s:0.0006, 88:0.0237, K8o:0.0002, A8o:0.0042, 99:0.0014, K9o:0.0013, A9o:0.0081, T5s:0.0005, T6s:0.0001, T9s:0.0004, TT:0.0134, ATo:0.0078, J8s:0.0004, J9s:0.0053, JTs:0.0008, JJ:0.0039, KJo:0.0008, AJo:0.0038, Q7s:0.0008, QQ:0.2053, KQo:0.0087, AQo:0.7532, K2s:0.0011, K3s:0.0066, K5s:0.0037, K6s:0.0049, K7s:0.0354, K8s:0.0010, K9s:0.0032, KTs:0.0140, KJs:0.0381, KQs:0.0232, KK:0.0746, AKo:0.0376, A2s:0.0106, A3s:0.0029, A4s:0.0679, A5s:0.0890, A6s:0.0338, A7s:0.2430, A8s:0.0344, A9s:0.0836, ATs:0.0569, AJs:0.0461, AQs:0.6289, AKs:0.0769, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0001, A3o:0.0069, 44:0.0040, 53s:0.0005, 54s:0.0001, 55:0.0009, A5o:0.0320, 64s:0.0001, 66:0.0020, 76s:0.0001, 77:0.0258, 88:0.2582, A8o:0.0498, 97s:0.0001, 99:0.0515, A9o:0.0245, TT:0.1282, ATo:0.0081, JJ:0.5451, AJo:0.0263, QQ:0.7861, KQo:0.0002, AQo:0.0173, K2s:0.0009, K5s:0.0004, K6s:0.0013, K7s:0.0100, K8s:0.0004, K9s:0.0018, KTs:0.0437, KJs:0.0191, KQs:0.0104, KK:0.9254, AKo:0.9624, A2s:0.8934, A3s:0.8169, A4s:0.6222, A5s:0.6955, A6s:0.1564, A7s:0.5193, A8s:0.5699, A9s:0.4543, ATs:0.8473, AJs:0.4870, AQs:0.3680, AKs:0.9231"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0175, 55:0.2066, 65s:0.0013, 66:0.8399, 76s:0.1176, 77:0.4736, 88:0.7123, 99:0.3637, T8s:0.0007, T9s:0.0024, TT:0.5877, ATo:0.0034, J9s:0.0457, JTs:0.1168, JJ:0.1299, KJo:0.0002, AJo:0.2115, QTs:0.0806, QJs:0.1044, QQ:0.2662, KQo:0.0009, AQo:0.4094, K2s:0.0002, K4s:0.0001, K5s:0.0001, K6s:0.0017, K9s:0.0001, KTs:0.0643, KJs:0.5769, KQs:0.3226, KK:0.4893, A2s:0.0015, A3s:0.3008, A4s:0.1180, A5s:0.1291, A6s:0.0723, A7s:0.0199, A8s:0.2101, A9s:0.2963, ATs:0.7935, AJs:0.8754, AQs:0.9779"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "33:0.0813, A3o:0.0501, 44:0.0004, A4o:0.1131, 54s:0.0001, 55:0.0194, A5o:0.0734, 65s:0.0034, 66:0.0199, A6o:0.0821, 76s:0.1432, 77:0.0350, A7o:0.0515, 86s:0.0069, 87s:0.0020, 88:0.0014, A8o:0.0067, 98s:0.0001, 99:0.0025, A9o:0.0003, T6s:0.0014, T8s:0.0039, T9s:0.0001, TT:0.0067, KTo:0.0016, ATo:0.1071, J9s:0.0062, JTs:0.0036, JJ:0.0024, KJo:0.0079, AJo:0.0256, Q8s:0.0001, Q9s:0.0009, QTs:0.0018, QJs:0.0367, QQ:0.0122, KQo:0.0040, AQo:0.5762, K2s:0.0058, K3s:0.0114, K4s:0.0004, K5s:0.0034, K6s:0.0331, K7s:0.0877, K8s:0.0136, K9s:0.0085, KTs:0.0371, KJs:0.0821, KQs:0.2203, KK:0.0023, AKo:0.0148, A2s:0.0221, A3s:0.0221, A4s:0.0195, A5s:0.0405, A6s:0.0738, A7s:0.0231, A8s:0.0330, A9s:0.0202, ATs:0.0079, AJs:0.0015, AQs:0.0052, AKs:0.8823, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0781, 44:0.3058, A4o:0.0042, 55:0.1849, A5o:0.0007, 66:0.1178, 76s:0.0064, 77:0.4520, 87s:0.0038, 88:0.2466, 99:0.5915, K9o:0.0001, TT:0.3990, KTo:0.0008, ATo:0.0189, J8s:0.0002, J9s:0.1140, JTs:0.7082, JJ:0.8676, KJo:0.0024, AJo:0.5544, QTs:0.0581, QJs:0.3717, QQ:0.7211, KQo:0.0002, AQo:0.0101, K2s:0.0044, K3s:0.0145, K4s:0.0027, K5s:0.0134, K6s:0.0054, K7s:0.0009, K8s:0.0155, K9s:0.0296, KTs:0.0372, KJs:0.0599, KQs:0.2790, KK:0.5084, AKo:0.9852, A2s:0.9070, A3s:0.5592, A4s:0.7294, A5s:0.8103, A6s:0.8161, A7s:0.9352, A8s:0.7093, A9s:0.6601, ATs:0.1929, AJs:0.1223, AQs:0.0163, AKs:0.1177"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|CO:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.0001, A3o:0.0014, A4o:0.0005, 55:0.0003, A5o:0.0057, 66:0.0378, A7o:0.0037, A8o:0.0006, A9o:0.0032, ATo:0.0209, J9s:0.0028, JJ:0.0932, KJo:0.0092, AJo:0.0207, QQ:0.0293, AQo:0.1761, K2s:0.0001, K4s:0.0014, K6s:0.0041, K7s:0.0020, K8s:0.0007, KTs:0.0003, KK:0.0049, A2s:0.0347, A3s:0.0128, A4s:0.0354, A5s:0.0042, A6s:0.0967, A7s:0.0855, A8s:0.0011, A9s:0.0001, ATs:0.0001, AKs:0.0002, AA:0.1471"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0034, A3o:0.0029, A4o:0.0168, A5o:0.0734, 66:0.0002, A7o:0.0006, A8o:0.0001, A9o:0.0006, ATo:0.0342, JJ:0.0005, AJo:0.0286, AQo:0.0005, KK:0.0004, AKo:0.1353, A2s:0.3697, A3s:0.4985, A4s:0.1060, A5s:0.0564, A6s:0.1104, A7s:0.0411, A8s:0.0040, AKs:0.1153, AA:0.3588"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|CO:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0937, QQ:0.0293, KK:0.0053, AKo:0.1188, AKs:0.1155, AA:0.5059"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0001, 99:0.0001, T8s:0.0003, TT:0.0001, J8s:0.0001, J9s:0.0001, JJ:0.0109, Q8s:0.0001, Q9s:0.0002, QTs:0.0001, AQo:0.0753, K9s:0.0002, KK:0.5586, AKo:0.1524, A2s:0.0001, A4s:0.0001, A5s:0.0548, A6s:0.0016, A8s:0.0003, A9s:0.1281, ATs:0.0003, AJs:0.0092, AQs:0.4093, AKs:0.4718, AA:0.3597"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0166, A3o:0.0379, A4o:0.0015, 54s:0.0007, 55:0.0150, A5o:0.0001, 65s:0.0005, 66:0.0006, A6o:0.0011, 75s:0.0003, A7o:0.0097, 88:0.0105, K8o:0.0001, A8o:0.0291, 96s:0.0006, 97s:0.0001, 99:0.0006, T6s:0.0007, T8s:0.0007, T9s:0.0044, TT:0.0003, ATo:0.0004, J8s:0.0248, J9s:0.0141, JTs:0.0008, JJ:0.0217, AJo:0.0016, Q4s:0.0003, Q5s:0.0048, Q7s:0.0003, Q9s:0.0003, QTs:0.0001, QJs:0.0010, QQ:0.0302, AQo:0.0001, K2s:0.0008, K4s:0.0042, K5s:0.0012, K6s:0.0011, K7s:0.0001, K9s:0.0001, KTs:0.0175, KJs:0.0397, KQs:0.0007, KK:0.4378, AKo:0.7252, A2s:0.2072, A3s:0.3096, A4s:0.5882, A5s:0.4440, A6s:0.2404, A7s:0.3092, A8s:0.0261, A9s:0.1620, ATs:0.4097, AJs:0.0681, AQs:0.2502, AKs:0.4241, AA:0.6403"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.0001, A3o:0.0002, A4o:0.0013, 55:0.0003, A5o:0.0012, 66:0.0376, A7o:0.0003, A8o:0.0006, A9o:0.0044, KTo:0.0001, ATo:0.0349, J9s:0.0027, JJ:0.0934, KJo:0.0052, AJo:0.0328, QQ:0.0291, KQo:0.0001, AQo:0.1571, K4s:0.0020, K6s:0.0039, K7s:0.0007, K8s:0.0007, KTs:0.0003, KK:0.0030, AKo:0.0227, A2s:0.1280, A3s:0.2161, A4s:0.0514, A5s:0.0339, A6s:0.0718, A7s:0.1146, A8s:0.0047, A9s:0.0001, ATs:0.0001, AKs:0.0297, AA:0.2181"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0011, A3o:0.0017, A4o:0.0060, A5o:0.0052, 66:0.0004, A6o:0.0006, A7o:0.0013, A8o:0.0004, A9o:0.0017, ATo:0.0114, JJ:0.0003, AJo:0.0036, QQ:0.0002, AQo:0.0195, K4s:0.0001, K7s:0.0001, KK:0.0023, AKo:0.1126, A2s:0.2366, A3s:0.2398, A4s:0.0764, A5s:0.0265, A6s:0.0608, A7s:0.0120, A8s:0.0003, AKs:0.0858, AA:0.2878"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, JJ:0.0002, QQ:0.0023, KK, A4s:0.0001, AQs:0.0002, AKs:0.0009, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0051, QQ:0.0287, KK:0.0053, AKo:0.1325, AKs:0.1145, AA:0.5059"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "54s:0.0002, 66:0.0002, 88:0.0001, ATo:0.0001, Q5s:0.0001, QTs:0.0002, QJs:0.0001, K7s:0.0002, KK:0.4233, AKo:0.3267, A2s:0.0002, A3s:0.0001, A4s:0.0001, A7s:0.0020, A8s:0.0001, ATs:0.0001, AJs:0.0002, AQs:0.1225, AKs:0.0615, AA:0.3839"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0110, 54s:0.0006, 66:0.0001, A6o:0.0208, 88:0.0001, 96s:0.0010, 98s:0.0001, 99:0.0001, T8s:0.0005, J7s:0.0001, J9s:0.0001, JJ:0.0002, Q5s:0.0001, QJs:0.0001, AQo:0.0001, K4s:0.0053, K5s:0.0004, K7s:0.0008, K8s:0.0001, K9s:0.0003, KTs:0.0393, KJs:0.0230, KQs:0.0240, KK:0.5468, AKo:0.6663, A2s:0.1668, A3s:0.1863, A4s:0.0007, A5s:0.2203, A6s:0.1111, A7s:0.1373, A8s:0.2921, A9s:0.2131, ATs:0.0052, AJs:0.2761, AQs:0.0003, AKs:0.9175, AA:0.6161"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "22:0.0001, A2o:0.0035, A3o:0.0006, A4o:0.0017, 55:0.0003, K5o:0.0001, A5o:0.0366, 66:0.0380, A6o:0.0009, A7o:0.0057, A8o:0.0024, A9o:0.0074, KTo:0.0001, ATo:0.0147, J9s:0.0024, JJ:0.0934, KJo:0.0060, AJo:0.0231, QQ:0.0293, KQo:0.0002, AQo:0.1735, K2s:0.0001, K4s:0.0025, K6s:0.0040, K7s:0.0018, K8s:0.0005, KTs:0.0003, KK:0.0051, AKo:0.0789, A2s:0.1299, A3s:0.1768, A4s:0.0560, A5s:0.0218, A6s:0.0821, A7s:0.1019, A8s:0.0043, A9s:0.0001, AKs:0.0777, AA:0.3464"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0041, A3o:0.0008, A4o:0.0177, A5o:0.0140, A6o:0.0001, A7o:0.0007, A8o:0.0005, A9o:0.0005, ATo:0.0032, JJ:0.0003, AJo:0.0043, KK:0.0002, AKo:0.0564, A2s:0.1882, A3s:0.2820, A4s:0.0729, A5s:0.0356, A6s:0.0697, A7s:0.0147, A8s:0.0003, ATs:0.0001, AKs:0.0378, AA:0.1595"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0001, QQ:0.0040, KK, A5s:0.0001, AJs:0.0007, AKs:0.0011, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0086, QQ:0.0201, KK:0.0053, AKo:0.1267, AKs:0.1151, AA:0.5059"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0082, A3o:0.0034, A4o:0.1031, A5o:0.0237, A6o:0.1184, A7o:0.0100, K8o:0.0001, A8o:0.0024, T6s:0.0001, TT:0.0001, ATo:0.1168, QQ:0.2289, KQo:0.0006, AQo:0.2094, K3s:0.0035, K6s:0.0022, K7s:0.0001, K8s:0.0005, K9s:0.0032, KTs:0.0002, KJs:0.0006, KQs:0.0010, AKo:0.0454, A3s:0.0655, A4s:0.1336, A5s:0.3374, A6s:0.0550, A7s:0.0758, A8s:0.2097, A9s:0.1310, ATs:0.2290, AJs:0.1066, AQs:0.2694, AKs:0.0878, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 44:0.0008, 54s:0.0010, 55:0.0015, 66:0.0004, 76s:0.0010, 77:0.0039, K7o:0.0014, 88:0.0023, K8o:0.0010, 98s:0.0015, 99:0.0023, K9o:0.0002, TT:0.0667, KTo:0.0017, JJ:0.0022, KJo:0.0010, QQ:0.0211, KQo:0.0054, K3s:0.0031, K4s:0.0080, K5s:0.0056, K6s:0.0058, K7s:0.0048, K8s:0.0024, K9s:0.0082, KTs:0.3035, KJs:0.0087, KQs:0.6828, KK, AKo:0.9546, A2s:0.0112, A4s:0.0005, A5s:0.0043, A7s:0.0032, A8s:0.0114, A9s:0.0033, ATs:0.0054, AJs:0.0084, AQs:0.0030, AKs:0.9122"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0008, A2o:0.0181, A3o:0.0129, K4o:0.0002, A4o:0.0600, 55:0.0002, A5o:0.0208, A6o:0.0740, K7o:0.0003, A7o:0.0927, K8o:0.0004, A8o:0.0295, 99:0.0013, K9o:0.0002, A9o:0.0038, T8s:0.0001, TT:0.0005, KTo:0.0006, ATo:0.0176, JJ:0.0011, KJo:0.0002, AJo:0.0110, QQ:0.1534, KQo:0.0001, AQo:0.2333, K2s:0.0002, K3s:0.0002, K4s:0.0006, K5s:0.0060, K6s:0.0600, K7s:0.0411, K9s:0.0003, KTs:0.0001, KJs:0.0014, KQs:0.0063, KK:0.0021, AKo:0.0654, A2s:0.0001, A3s:0.0216, A4s:0.3377, A5s:0.0825, A6s:0.0549, A7s:0.3618, A8s:0.0100, A9s:0.0907, ATs:0.1231, AJs:0.0484, AQs:0.5979, AKs:0.1534, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0041, K4o:0.0001, 54s:0.0003, 55:0.0064, 66:0.0024, K6o:0.0001, 76s:0.0002, K7o:0.0001, 88:0.0054, 99:0.0047, K9o:0.0003, TT:0.0045, KTo:0.0023, JJ:0.0009, KJo:0.0009, QQ:0.0109, KQo:0.0007, K2s:0.0096, K3s:0.0164, K4s:0.0008, K5s:0.0114, K6s:0.0021, K7s:0.0162, K8s:0.0062, K9s:0.0114, KTs:0.5060, KJs:0.1132, KQs:0.6201, KK:0.9979, AKo:0.9346, A2s:0.0159, A4s:0.0172, A5s:0.0092, A6s:0.0052, A7s:0.0047, A8s:0.0049, A9s:0.0056, ATs:0.0118, AJs:0.0008, AQs:0.0198, AKs:0.8466"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0151, 66:0.1059, 77:0.0220, 88:0.1641, 99:0.0026, TT:0.0127, KTo:0.0002, JJ:0.0561, KJo:0.0244, QJs:0.0005, QQ:0.2251, KQo:0.0513, AQo:0.0007, K6s:0.0116, K7s:0.0056, K9s:0.0013, KTs:0.0106, KJs:0.1312, KQs:0.0547, A5s:0.0055, A6s:0.0157, A7s:0.0098, A8s:0.0066, A9s:0.1327, ATs:0.2142, AJs:0.5714, AQs:0.5114"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0038, A4o:0.0441, A5o:0.0839, 66:0.0009, A6o:0.1983, A7o:0.1164, 86s:0.0005, 88:0.0001, K8o:0.0001, A8o:0.0022, K9o:0.0005, A9o:0.0261, TT:0.0005, KTo:0.0008, ATo:0.0586, JJ:0.0007, KJo:0.0010, AJo:0.0081, QTs:0.0002, QJs:0.0004, QQ:0.0014, KQo:0.0005, AQo:0.3312, K4s:0.0005, K5s:0.0002, K6s:0.0004, K7s:0.0001, K8s:0.0005, K9s:0.0009, KTs:0.0007, KJs:0.0007, KQs:0.0002, KK:0.0001, AKo:0.0150, A2s:0.0661, A3s:0.0837, A4s:0.0495, A5s:0.2438, A6s:0.1104, A7s:0.0734, A8s:0.1232, A9s:0.1800, ATs:0.0400, AJs:0.0103, AQs:0.1632, AKs:0.7567, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0100, 44:0.2013, 55:0.1479, A5o:0.0003, 66:0.4299, A6o:0.0001, 77:0.6259, 88:0.6615, 99:0.9452, K9o:0.0001, A9o:0.0001, TT:0.9719, KTo:0.0290, JJ:0.9216, KJo:0.1422, AJo:0.0001, QQ:0.7735, KQo:0.0284, K2s:0.0002, K3s:0.2666, K4s:0.1945, K5s:0.3848, K6s:0.6427, K7s:0.8319, K8s:0.3802, K9s:0.7180, KTs:0.9795, KJs:0.8605, KQs:0.9446, KK, AKo:0.9850, A2s:0.1343, A3s:0.5103, A4s:0.5506, A5s:0.7094, A6s:0.2777, A7s:0.3926, A8s:0.2647, A9s:0.2909, ATs:0.6871, AJs:0.4018, AQs:0.3243, AKs:0.2433"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|CO:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0020, A3o:0.0030, A4o:0.0053, A5o:0.0112, A6o:0.0012, A7o:0.0110, A8o:0.0044, A9o:0.0082, KTo:0.0010, ATo:0.0264, JJ:0.0413, KJo:0.0163, AJo:0.0008, QQ:0.0020, KQo:0.0014, AQo:0.0013, K2s:0.0108, K3s:0.0003, K4s:0.0014, K5s:0.0410, K6s:0.0701, K7s:0.0285, K8s:0.0001, KJs:0.0001, KK:0.1233, AKo:0.0005, A2s:0.0004, A3s:0.0004, A4s:0.0001, A5s:0.0001, A6s:0.0164, A7s:0.0771, AKs:0.0002, AA:0.2027"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0864, A3o:0.0464, A4o:0.0495, A5o:0.1336, 66:0.0001, A6o:0.0119, A7o:0.0283, A8o:0.0368, A9o:0.0115, ATo:0.0299, JJ:0.0766, AJo:0.0001, QQ:0.0001, K2s:0.0071, K3s:0.0027, K6s:0.0030, K7s:0.0311, KK:0.8714, AKo:0.3680, A2s:0.4560, A3s:0.1638, A4s:0.0105, A5s:0.0092, A6s:0.4855, A7s:0.1705, A8s:0.0001, AKs:0.0565, AA:0.0037"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|CO:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1179, QQ:0.0021, KK:0.9947, AKo:0.3646, AKs:0.0567, AA:0.2064"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "J7s:0.0001, JJ:0.0097, QQ:0.0107, AQo:0.0006, K4s:0.0001, K6s:0.0001, KQs:0.0001, KK:0.0445, A9s:0.0001, AQs:0.0690, AKs:0.0358, AA:0.1459"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0007, A6o:0.0026, 75s:0.0001, 76s:0.0001, 77:0.0137, 88:0.0005, A8o:0.0217, 96s:0.0005, 97s:0.0011, 98s:0.0026, 99:0.0199, T9o:0.0002, A9o:0.0008, T8s:0.0106, T9s:0.0534, TT:0.0362, ATo:0.0401, JJ:0.0352, QJo:0.0005, KJo:0.0002, Q6s:0.0004, Q7s:0.0016, Q9s:0.0025, QTs:0.0013, QQ:0.0059, AQo:0.0019, K2s:0.0002, K6s:0.0380, K7s:0.0012, K9s:0.0034, KTs:0.0002, KQs:0.0010, KK:0.8679, AKo:0.9463, A2s:0.0020, A3s:0.0747, A4s:0.0025, A5s:0.5197, A6s:0.0289, A7s:0.1541, A8s:0.1512, A9s:0.1757, ATs:0.0879, AJs:0.0469, AQs:0.0905, AKs:0.9203, AA:0.8541"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0054, A3o:0.0034, A4o:0.0042, A5o:0.0129, 66:0.0001, A6o:0.0026, A7o:0.0090, A8o:0.0187, K9o:0.0001, A9o:0.0111, ATo:0.0331, JJ:0.0483, KJo:0.0006, AJo:0.0006, QQ:0.0020, KQo:0.0001, AQo:0.0013, K2s:0.0001, K3s:0.0022, K4s:0.0016, K5s:0.0006, K6s:0.0016, K7s:0.0037, K8s:0.0002, KJs:0.0001, KK:0.1081, AKo:0.0061, A2s:0.0501, A3s:0.0304, A4s:0.0011, A5s:0.0005, A6s:0.1302, A7s:0.0509, AKs:0.0144, AA:0.2059"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0355, A3o:0.0116, A4o:0.0145, A5o:0.0888, A6o:0.0068, A7o:0.0201, A8o:0.0341, A9o:0.0049, ATo:0.0114, JJ:0.0658, AJo:0.0002, QQ:0.0001, KQo:0.0001, K2s:0.0029, K3s:0.0102, K4s:0.0002, K5s:0.0004, K6s:0.0010, K7s:0.0042, K8s:0.0004, KK:0.8866, AKo:0.3624, A2s:0.3964, A3s:0.1312, A4s:0.0095, A5s:0.0087, A6s:0.3630, A7s:0.1872, A8s:0.0001, AKs:0.0423, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, QQ:0.0855, KTs:0.0001, KK, AKo:0.0014, A6s:0.0001, A8s:0.0001, AKs:0.0011, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0061, QQ:0.0002, KK:0.9947, AKo:0.3595, AKs:0.0561, AA:0.2064"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0001, A7o:0.0001, QQ:0.0216, AQo:0.0269, KQs:0.0001, KK:0.0344, AKo:0.1235, A3s:0.0001, A4s:0.0001, A8s:0.0036, ATs:0.0006, AJs:0.0943, AQs:0.0091, AKs:0.1896, AA:0.4782"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0003, 75s:0.0118, 77:0.0011, A7o:0.0074, 87s:0.0416, 98s:0.0001, 99:0.0197, TT:0.0168, ATo:0.0005, J8s:0.0003, JTs:0.0044, JJ:0.0130, AJo:0.0156, Q8s:0.0002, Q9s:0.0001, QJs:0.0006, AQo:0.0096, KJs:0.0005, KQs:0.0003, KK:0.6957, AKo:0.4637, A2s:0.0969, A3s:0.1334, A4s:0.0068, A6s:0.0533, A7s:0.1121, A8s:0.1177, A9s:0.0948, ATs:0.0003, AJs:0.6726, AQs:0.0498, AKs:0.6405, AA:0.5218"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0002, A4o:0.0010, A5o:0.0250, 66:0.0001, A6o:0.0004, A7o:0.0247, A8o:0.0269, A9o:0.0077, ATo:0.0200, JJ:0.1095, AJo:0.0008, QQ:0.0021, AQo:0.0013, K5s:0.0006, K6s:0.0121, K7s:0.0062, KJs:0.0001, KK:0.1644, AKo:0.1041, A2s:0.0365, A3s:0.0217, A4s:0.0024, A5s:0.0029, A6s:0.1429, A7s:0.0769, AKs:0.0204, AA:0.2056"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0461, A3o:0.0247, A4o:0.0208, A5o:0.0429, A6o:0.0025, A7o:0.0192, A8o:0.0052, A9o:0.0076, ATo:0.0033, JJ:0.0073, KQo:0.0003, K3s:0.0080, K6s:0.0004, K7s:0.0023, KK:0.8303, AKo:0.2643, A2s:0.4039, A3s:0.1434, A4s:0.0082, A5s:0.0064, A6s:0.3586, A7s:0.1689, A8s:0.0001, AKs:0.0363, AA:0.0008"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0052, QQ:0.0878, KK:0.9994, AKo:0.0011, AJs:0.0005, AKs:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0011, QQ:0.0002, KK:0.9947, AKo:0.3531, AKs:0.0549, AA:0.2064"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52s:0.0001, 84s:0.0001, 88:0.0098, 99:0.1415, TT:0.2087, JJ:0.0469, QQ:0.1135, K2s:0.0001, KTs:0.0002, KJs:0.0003, KK:0.9961, AKo:0.6018, AKs:0.6719, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 88:0.4732, TT:0.1870, J2s:0.0001, JJ:0.2322, AJo:0.0001, QQ:0.3282, K4s:0.0001, K9s:0.0001, KK:0.9984, AKo:0.1913, ATs:0.0001, AJs:0.0001, AQs:0.0005, AKs:0.4811, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0033, JJ:0.2886, QQ:0.1305, KK, AKo:0.9035, AJs:0.0001, AKs:0.9622, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@53.32|BB:CALL@52.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0127, A3o:0.0008, 44:0.0017, A4o:0.0002, 55:0.0003, A5o:0.0002, A6o:0.0004, 75s:0.0032, 77:0.0005, 86s:0.0210, 87s:0.0005, 88:0.0008, K8o:0.0010, A8o:0.0027, 96s:0.0007, 97s:0.0006, 98s:0.0066, 99:0.0064, A9o:0.0002, T7s:0.0138, T8s:0.0007, T9s:0.0092, TT:0.0022, JTo:0.0010, QTo:0.0002, ATo:0.0002, J7s:0.0108, J8s:0.0006, J9s:0.0041, JTs:0.0022, JJ:0.0195, QJo:0.0007, KJo:0.0003, AJo:0.0008, Q5s:0.0025, Q7s:0.0044, Q8s:0.0026, Q9s:0.0073, QJs:0.0227, QQ:0.0098, KQo:0.0005, K2s:0.0037, K3s:0.0043, K7s:0.0128, K9s:0.0009, KTs:0.0129, KQs:0.0002, KK:0.0385, AKo:0.0075, A2s:0.0649, A3s:0.0092, A7s:0.0219, A8s:0.0111, ATs:0.0001, AJs:0.0039, AKs:0.0623, AA:0.9006"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@53.32|SB:CALL@52.82",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0005, A4o:0.0002, 54s:0.0025, 55:0.0004, A5o:0.0006, 65s:0.0010, 66:0.0005, 75s:0.0006, 77:0.0013, 86s:0.0064, 88:0.0060, A8o:0.0026, 96s:0.0014, 97s:0.0018, K9o:0.0007, A9o:0.0022, T6s:0.0004, T7s:0.0506, T8s:0.0320, T9s:0.0018, TT:0.0021, QTo:0.0017, KTo:0.0003, ATo:0.0002, J7s:0.0031, J9s:0.0039, JTs:0.0059, JJ:0.0021, QJo:0.0011, AJo:0.0002, Q6s:0.0011, Q7s:0.0014, Q8s:0.0033, QTs:0.0004, QJs:0.0017, QQ:0.0324, KQo:0.0002, AQo:0.0003, K2s:0.0056, K4s:0.0010, K5s:0.0010, K6s:0.0015, K8s:0.0119, K9s:0.0020, KJs:0.0023, KQs:0.0028, KK:0.0102, AKo:0.0027, A2s:0.0190, A4s:0.0131, A6s:0.0027, A8s:0.0075, ATs:0.0062, AJs:0.0023, AQs:0.0187, AKs:0.0100, AA:0.9716"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0004, 54s:0.0015, 55:0.1473, 65s:0.0303, 66:0.5057, 75s:0.0002, 76s:0.1017, 77:0.6518, 88:0.9854, 99:0.9515, TT:0.9921, ATo:0.1581, JTs:0.9358, JJ:0.9233, AJo:0.7310, QTs:0.9573, QJs:0.9933, QQ:0.9808, KQo:0.9177, AQo:0.8044, K6s:0.0461, K9s:0.7154, KTs:0.9945, KJs:0.9997, KQs, KK:0.9185, A2s:0.0033, A3s:0.1568, A4s:0.6506, A5s:0.8237, A6s:0.0145, A7s:0.2980, A8s:0.8669, A9s:0.9723, ATs:0.9987, AJs:0.9995, AQs:0.9995"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A5o:0.0001, 66:0.0429, 77:0.0066, A7o:0.0002, 88:0.0134, 99:0.0477, TT:0.0078, ATo:0.0116, JJ:0.0390, AJo:0.0544, QQ:0.0082, KQo:0.0422, AQo:0.0770, K5s:0.0001, K6s:0.0001, K9s:0.0420, KTs:0.0018, KK:0.0086, AKo:0.0001, A2s:0.0336, A3s:0.0221, A4s:0.1106, A5s:0.1395, A6s:0.1123, A7s:0.1551, A8s:0.0328, A9s:0.0202, ATs:0.0010, AQs:0.0005, AKs:0.1061, AA:0.0931"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0149, K4o:0.0001, A4o:0.0029, A5o:0.0989, K6o:0.0001, A6o:0.0022, 77:0.0366, A7o:0.0004, 88:0.0003, A8o:0.0003, A9o:0.0302, KTo:0.0002, ATo:0.1482, JJ:0.0377, AJo:0.1228, QQ:0.0110, KQo:0.0006, AQo:0.1124, K2s:0.0003, K4s:0.0001, K6s:0.0001, KK:0.0271, AKo:0.0004, A2s:0.3955, A3s:0.5618, A4s:0.1992, A5s:0.0249, A6s:0.6116, A7s:0.4413, A8s:0.0849, A9s:0.0011, ATs:0.0001, AJs:0.0001, AKs:0.3259, AA:0.3803"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.1905, K3o:0.0007, A3o:0.2051, K4o:0.0004, A4o:0.1288, K5o:0.0003, A5o:0.0603, K6o:0.0052, A6o:0.0062, K7o:0.0050, A7o:0.0155, A8o:0.0447, A9o:0.0260, KTo:0.0001, ATo:0.0931, KJo:0.0014, AJo:0.0905, KQo:0.0106, AQo:0.0061, K2s:0.0254, K3s:0.0426, K4s:0.0001, K5s:0.0003, K6s:0.0165, K7s:0.0101, K8s:0.0030, K9s:0.0018, KTs:0.0006, KK:0.0457, AKo:0.0044, A2s:0.5645, A3s:0.2575, A4s:0.0394, A5s:0.0117, A6s:0.2283, A7s:0.0873, A8s:0.0122, A9s:0.0063, ATs:0.0001, AJs:0.0004, AKs:0.2582, AA:0.5266"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.9950, AKs:0.3098"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.1634, 54s:0.1761, 55:0.8535, 65s:0.4812, 66:0.8348, 76s:0.2132, 77:0.9064, 87s:0.0054, 88, 98s:0.1843, 99:0.9681, T7s:0.0003, T8s:0.0026, T9s:0.9163, TT:0.9996, ATo:0.6327, J9s:0.6475, JTs:0.9978, JJ:0.8893, KJo:0.0004, AJo:0.9475, Q9s:0.4621, QTs:0.9992, QJs:0.9997, QQ:0.9854, KQo:0.9396, AQo:0.5556, K6s:0.0850, K7s:0.3583, K8s:0.2281, K9s:0.8486, KTs:0.9986, KJs:0.9943, KQs:0.9998, AKo:0.5833, A2s:0.0047, A3s:0.0245, A4s:0.4229, A5s:0.7951, A6s:0.0822, A7s:0.5767, A8s:0.9072, A9s:0.9974, ATs, AJs, AQs, AKs:0.3913"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A3o:0.0002, 44:0.0002, A4o:0.0003, 54s:0.0002, 55:0.0508, A5o:0.0003, 65s:0.0727, 66:0.1330, A6o:0.0001, 76s:0.0025, 77:0.0326, A7o:0.0026, 98s:0.0139, 99:0.0319, A9o:0.0207, T9s:0.0400, TT:0.0004, ATo:0.0632, J9s:0.1636, JTs:0.0002, JJ:0.0582, KJo:0.1021, AJo:0.0255, Q6s:0.0007, Q9s:0.0280, QQ:0.0034, KQo:0.0169, AQo:0.1315, K4s:0.0054, K6s:0.0117, K7s:0.0054, K8s:0.0003, K9s:0.0797, KTs:0.0012, KJs:0.0057, KK:0.0489, AKo:0.0392, A2s:0.0485, A3s:0.0873, A4s:0.2008, A5s:0.0448, A6s:0.1886, A7s:0.1374, A8s:0.0304, A9s:0.0025, AQs:0.0001, AKs:0.2354, AA:0.1004"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.0013, A3o:0.0093, A4o:0.0826, A5o:0.2151, 65s:0.0001, 66:0.0299, A6o:0.0215, 76s:0.0488, 77:0.0597, A7o:0.0339, 87s:0.0011, A8o:0.0702, A9o:0.1001, ATo:0.2116, JJ:0.0525, KJo:0.1607, AJo:0.0021, QQ:0.0111, KQo:0.0068, AQo:0.2231, K3s:0.0002, K4s:0.0055, K6s:0.0897, K7s:0.0209, K8s:0.0142, K9s:0.0641, KK:0.1942, AKo:0.0844, A2s:0.2392, A3s:0.1067, A4s:0.1810, A5s:0.1502, A6s:0.3277, A7s:0.1788, A8s:0.0460, A9s:0.0001, AKs:0.1000, AA:0.3509"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0053, A2o:0.1976, K3o:0.0031, A3o:0.1826, K4o:0.0002, A4o:0.2382, K5o:0.0010, A5o:0.2513, 66:0.0004, K6o:0.0194, A6o:0.0363, K7o:0.0006, A7o:0.2726, K8o:0.0012, A8o:0.2490, K9o:0.0003, A9o:0.1605, KTo:0.1067, ATo:0.0871, KJo:0.1224, AJo:0.0249, KQo:0.0367, AQo:0.0898, K2s:0.0259, K3s:0.3966, K4s:0.1229, K5s:0.0271, K6s:0.3196, K7s:0.2565, K8s:0.2426, K9s:0.0001, KTs:0.0001, KQs:0.0001, KK:0.7569, AKo:0.2905, A2s:0.7060, A3s:0.7811, A4s:0.1944, A5s:0.0089, A6s:0.4008, A7s:0.1069, A8s:0.0161, AKs:0.2723, AA:0.5487"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0002, 44:0.0007, 55:0.0004, 66:0.0002, 77:0.0008, AKo:0.0025, A2s:0.0009, A3s:0.0002, A4s:0.0006, A5s:0.0008, A6s:0.0004, A7s:0.0001, A8s:0.0002, AKs:0.0011"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3159, 33:0.9936, 44:0.9998, 54s:0.9393, 55:0.9998, 65s:0.9976, 66, 75s:0.0585, 76s:0.9873, 77, 86s:0.0001, 87s:0.8087, 88, 97s:0.1936, 98s:0.9382, 99, T8s:0.5655, T9s:0.9993, TT, ATo:0.8804, J9s:0.9649, JTs, JJ, QJo:0.0007, KJo:0.7821, AJo:0.9993, Q8s:0.0001, Q9s:0.9933, QTs:0.9998, QJs, QQ, KQo:0.7828, AQo:0.8881, K5s:0.0011, K6s:0.1347, K7s:0.7682, K8s:0.9677, K9s:0.9982, KTs, KJs, KQs, AKo:0.7636, A2s:0.0029, A3s:0.0254, A4s:0.4541, A5s:0.9833, A6s:0.0738, A7s:0.8020, A8s:0.9995, A9s, ATs, AJs, AQs, AKs:0.0875"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.1761, A3o:0.2514, A4o:0.3106, K5o:0.0001, A5o:0.7036, K6o:0.0001, A6o:0.1932, K7o:0.0009, A7o:0.2726, K8o:0.0001, A8o:0.2904, 96s:0.0001, A9o:0.4909, KTo:0.0945, ATo:0.1187, KJo:0.2132, AJo:0.0007, Q7s:0.0001, QQ:0.0001, KQo:0.2103, AQo:0.1119, K2s:0.0950, K3s:0.0015, K4s:0.0903, K5s:0.1490, K6s:0.7953, K7s:0.2096, K8s:0.0002, KK:0.9737, AKo:0.2071, A2s:0.9949, A3s:0.9745, A4s:0.5432, A5s:0.0167, A6s:0.9261, A7s:0.1980, A8s:0.0005, AKs:0.8980, AA:0.9405"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "A2o:0.0040, K3o:0.0011, A3o:0.0209, K4o:0.0022, A4o:0.0203, A5o:0.0383, K6o:0.0021, A6o:0.0250, K7o:0.0021, A7o:0.0203, A8o:0.0088, A9o:0.0122, KTo:0.0039, ATo:0.0007, KQo:0.0069, K2s:0.0203, K3s:0.0044, K4s:0.0175, K5s:0.0205, K6s:0.0129, K7s:0.0064, K8s:0.0083, KK:0.0263, AKo:0.0293, A2s:0.0011, A4s:0.0001, AKs:0.0145, AA:0.0595"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, A2o:0.0703, 32s:0.9986, 33, A3o:0.0799, 42s:0.9995, 43s, 44, 54o:0.9919, 64o:0.0543, A4o:0.8555, 52s, 53s, 54s, 55, 65o, 75o:0.2912, K5o:0.0001, A5o:0.4699, 62s:0.9992, 63s, 64s, 65s:0.9923, 66, 76o:0.9997, 86o:0.1524, K6o:0.8435, A6o:0.4901, 72s:0.0001, 73s, 74s, 75s, 76s:0.9126, 77, 87o:0.9993, 97o:0.7136, T7o:0.0001, K7o:0.8514, A7o:0.8875, 82s:0.6159, 83s:0.0606, 84s:0.9978, 85s, 86s, 87s, 88, 98o:0.9997, T8o:0.9769, Q8o:0.8959, K8o:0.9924, A8o:0.9011, 92s:0.7540, 93s:0.9562, 94s:0.9729, 95s, 96s, 97s, 98s, 99, T9o, J9o:0.9403, Q9o:0.9563, K9o:0.7565, A9o:0.9998, T2s:0.9987, T3s:0.9958, T4s:0.9997, T5s:0.9990, T6s, T7s, T8s, T9s, TT, JTo, QTo:0.9634, KTo:0.9875, ATo, J2s:0.9933, J3s:0.9964, J4s:0.9987, J5s:0.9996, J6s, J7s, J8s, J9s:0.9998, JTs, JJ, QJo, KJo, AJo, Q2s:0.9997, Q3s, Q4s:0.9998, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo:0.8561, AQo:0.9898, K2s, K3s:0.9970, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, AKo:0.6360, A2s:0.8572, A3s:0.8618, A4s:0.9854, A5s, A6s:0.9929, A7s, A8s, A9s, ATs, AJs, AQs, AKs:0.0896"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0007, A2o:0.4135, K3o:0.0327, A3o:0.2865, 44:0.0001, 54o:0.0042, K4o:0.2011, A4o:0.1336, K5o:0.2942, A5o:0.3089, 65s:0.0077, K6o:0.1369, A6o:0.1892, 76s:0.0874, 97o:0.0007, K7o:0.1205, A7o:0.0394, 83s:0.0001, T8o:0.0229, J8o:0.0658, Q8o:0.0448, K8o:0.0069, A8o:0.0080, J9o:0.0585, Q9o:0.0436, K9o:0.2434, A9o:0.0002, T2s:0.0001, QTo:0.0366, KTo:0.0125, KQo:0.1439, AQo:0.0102, K2s:0.0001, K3s:0.0029, K4s:0.0001, KK:0.9735, AKo:0.2390, A2s:0.1428, A3s:0.1382, A4s:0.0146, A6s:0.0071, AKs:0.7917, AA:0.1308"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.5118, K3o:0.0006, A3o:0.6331, K4o:0.0102, A4o:0.0108, K5o:0.0001, A5o:0.2211, K6o:0.0099, A6o:0.3207, A7o:0.0730, K8o:0.0001, A8o:0.0909, KK:0.0265, AKo:0.1250, AKs:0.1186, AA:0.8692"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.2750, 55:0.7638, A5o:0.0003, 65s:0.0361, 66:0.6865, 76s:0.0017, 77:0.6259, 88:0.9445, 99:0.9411, A9o:0.0004, T9s:0.0045, TT:0.7804, KTo:0.0535, ATo:0.0039, J9s:0.0017, JJ:0.9773, KJo:0.0069, AJo:0.0063, QTs:0.0241, QJs:0.0167, QQ:0.9988, KQo:0.7350, AQo:0.7020, K3s:0.0001, K4s:0.0975, K5s:0.0491, K6s:0.5692, K7s:0.1805, K8s:0.0591, K9s:0.4595, KTs:0.7341, KJs:0.7540, KQs:0.9935, A2s:0.0111, A3s:0.0007, A4s:0.5890, A5s:0.8989, A6s:0.3087, A7s:0.6718, A8s:0.9413, A9s:0.9533, ATs:0.9803, AJs:0.9946, AQs:0.9993"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0008, A5o:0.1817, A6o:0.0001, A7o:0.1005, A8o:0.0995, 99:0.0001, A9o:0.0046, KTo:0.0045, ATo:0.1751, KJo:0.0020, AJo:0.3059, QTs:0.0001, KQo:0.0009, AQo:0.0284, K3s:0.0280, K4s:0.0533, K5s:0.0072, K8s:0.0050, K9s:0.0008, KTs:0.0002, KJs:0.0001, AKo:0.0259, A2s:0.3203, A3s:0.3808, A4s:0.1770, A5s:0.0362, A6s:0.2161, A7s:0.1315, A8s:0.0127, A9s:0.0073, ATs:0.0014, AJs:0.0025, AQs:0.0004, AKs:0.8685, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0012, A5o:0.0004, 65s:0.0001, 66:0.0259, 76s:0.0002, 77:0.0167, A7o:0.0003, 88:0.0403, A8o:0.0002, 99:0.0223, T8s:0.0004, T9s:0.0001, TT:0.2174, KTo:0.0002, ATo:0.0003, JJ:0.0215, KJo:0.0001, QQ:0.0011, AQo:0.0001, K4s:0.0070, K6s:0.0008, K7s:0.1175, K8s:0.0387, K9s:0.0921, KTs:0.2601, KJs:0.2394, KQs:0.0058, KK, AKo:0.9741, A2s:0.0165, A3s:0.0818, A4s:0.0194, A5s:0.0289, A6s:0.0170, A7s:0.0103, A8s:0.0415, A9s:0.0028, ATs:0.0182, AJs:0.0029, AQs:0.0003, AKs:0.1315"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@17.7",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0100, 54o:0.0003, A5o:0.0127, 65s:0.0008, A6o:0.0002, 76s:0.0098, A7o:0.0024, T8o:0.0001, A8o:0.0002, J9o:0.0001, Q9o:0.0001, QTo:0.0110, KQo:0.0050, AQo:0.0102, K3s:0.0001, KK:0.0376, A2s:0.0069, A3s:0.0051, A4s:0.0006, A6s:0.0004, AKs:0.0018, AA:0.0453"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1350, A3o:0.0255, 44:0.0001, A4o:0.0484, A5o:0.1715, 65s:0.0067, A6o:0.1203, 76s:0.0741, A7o:0.0064, A8o:0.0010, A9o:0.0001, KK:0.9359, AKo:0.2390, A2s:0.1344, A3s:0.1310, A4s:0.0140, A6s:0.0067, AKs:0.7899, AA:0.0855"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9735, AKo:0.1264, AKs:0.7917, AA:0.1308"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0250, A4o:0.0006, 55:0.2517, A5o:0.0343, 66:0.3816, 77:0.2596, A7o:0.0013, 87s:0.0001, 88:0.5116, A8o:0.0008, 99:0.0550, A9o:0.0001, T9s:0.0027, TT:0.0258, KTo:0.0001, ATo:0.2509, JTs:0.0001, JJ:0.1174, KJo:0.0001, AJo:0.3821, QTs:0.0009, QJs:0.0002, QQ:0.6763, KQo:0.0001, AQo:0.9711, K5s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0004, KTs:0.0003, KJs:0.0044, KQs:0.0080, KK:0.5745, A2s:0.0151, A3s:0.3261, A4s:0.0865, A5s:0.7722, A6s:0.0228, A7s:0.2116, A8s:0.6600, A9s:0.2022, ATs:0.1373, AJs:0.8287, AQs:0.6847, AKs:0.0013, AA:0.9985"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0043, 55:0.0015, A5o:0.0010, 66:0.0013, 76s:0.0006, 77:0.0031, A7o:0.0029, 86s:0.0001, 88:0.2226, A8o:0.0001, 99:0.2766, A9o:0.0001, T8s:0.0005, T9s:0.0069, TT:0.8734, KTo:0.0001, ATo:0.0333, JTs:0.0168, JJ:0.8524, AJo:0.0610, QTs:0.0009, QQ:0.0971, KQo:0.0002, AQo:0.0014, K6s:0.0001, K7s:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0002, KJs:0.0075, KQs:0.0002, KK:0.4248, AKo, A2s:0.3337, A3s:0.0432, A4s:0.8441, A5s:0.2144, A6s:0.0503, A7s:0.7865, A8s:0.3285, A9s:0.7766, ATs:0.8600, AJs:0.1710, AQs:0.3143, AKs:0.9987, AA:0.0015"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@14|HJ:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0265, AKo:0.1250, AKs:0.1186, AA:0.8692"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8756, 32s:0.8750, 33:0.7770, 53o:0.1750, 63o:0.0002, 42s:0.9956, 43s:0.9994, 44:0.8578, 54o:0.9974, 64o:0.9340, 52s:0.9963, 53s:0.9992, 54s, 55:0.9066, 65o:0.9994, 75o:0.3055, A5o:0.2393, 62s:0.9857, 63s:0.9979, 64s:0.9998, 65s, 66:0.8981, 76o:0.9995, 86o:0.9358, 96o:0.0005, K6o:0.0001, 72s:0.0004, 73s:0.9841, 74s:0.9996, 75s:0.9997, 76s, 77:0.9988, 87o:0.9865, 97o:0.9823, 82s:0.0034, 84s:0.9971, 85s:0.9982, 86s, 87s, 88, 98o:0.9782, T8o:0.2700, K8o:0.0001, A8o:0.7797, 92s:0.0008, 93s:0.9489, 94s:0.9913, 95s, 96s:0.9940, 97s:0.9989, 98s:0.9994, 99, T9o:0.9641, J9o:0.4729, Q9o:0.4044, K9o:0.4298, A9o:0.9377, T3s:0.4378, T4s:0.8816, T5s:0.9653, T6s:0.9936, T7s:0.9988, T8s:0.9998, T9s, TT, JTo:0.9972, QTo:0.9803, KTo:0.9823, ATo:0.9994, J2s:0.3446, J3s:0.9382, J4s:0.9367, J5s:0.9852, J6s:0.9568, J7s:0.9996, J8s:0.9988, J9s, JTs, JJ:0.9994, QJo:0.9997, KJo:0.9992, AJo:0.9995, Q2s:0.9850, Q3s:0.9951, Q4s:0.9928, Q5s:0.9976, Q6s:0.9978, Q7s:0.9969, Q8s:0.9951, Q9s:0.9703, QTs:0.9998, QJs, QQ:0.2506, KQo:0.7840, AQo:0.5038, K2s:0.8551, K3s:0.9081, K4s:0.9746, K5s:0.9735, K6s:0.9978, K7s:0.9556, K8s:0.9995, K9s:0.9998, KTs:0.9970, KJs:0.9998, KQs:0.7840, A2s:0.6491, A3s:0.6715, A4s:0.5530, A5s:0.6803, A6s:0.8674, A7s:0.8275, A8s:0.9339, A9s:0.9861, ATs, AJs, AQs:0.8879"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0277, A2o:0.5762, Q3o:0.0007, K3o:0.0183, A3o:0.3664, Q4o:0.0004, K4o:0.0006, A4o:0.5433, 52s:0.0001, Q5o:0.0001, K5o:0.0593, A5o:0.3974, Q6o:0.0313, K6o:0.3578, A6o:0.4890, A7o:0.3246, 85s:0.0001, Q8o:0.0023, K8o:0.0003, A8o:0.1711, 96s:0.0001, Q9o:0.0002, K9o:0.2271, A9o:0.0520, QTo:0.0178, KTo:0.0171, J3s:0.0004, JJ:0.0003, KJo:0.0001, AJo:0.0004, Q2s:0.0001, Q3s:0.0002, Q4s:0.0005, Q5s:0.0008, Q7s:0.0011, Q8s:0.0003, Q9s:0.0006, QQ:0.3131, KQo:0.0523, AQo:0.4828, K3s:0.0023, K4s:0.0005, K5s:0.0009, K6s:0.0001, K7s:0.0003, K8s:0.0002, K9s:0.0001, KK:0.6552, AKo:0.2172, A2s:0.0024, A4s:0.0002, A5s:0.0001, A6s:0.0007, A7s:0.0004, A8s:0.0001, A9s:0.0001, AKs:0.6515, AA:0.9995"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.1393, A2o:0.0396, Q3o:0.0003, K3o:0.0370, A3o:0.0515, K4o:0.0136, A4o:0.0727, K5o:0.1034, A5o:0.0199, K6o:0.0647, A6o:0.0030, Q7o:0.0003, K7o:0.0185, A7o:0.0246, K8o:0.0289, A8o:0.0014, K9o:0.0270, A9o:0.0015, JJ:0.0003, Q2s:0.0002, Q4s:0.0005, Q6s:0.0005, Q7s:0.0002, QQ:0.0131, KQo:0.0008, K2s:0.0001, K3s:0.0001, K5s:0.0074, K8s:0.0001, KK:0.3448, AKo:0.0381, AKs:0.2561, AA:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1243, A2o:0.1682, 33:0.2230, A3o:0.2413, 44:0.1422, A4o:0.2644, 55:0.0934, A5o:0.2396, 66:0.1019, A6o:0.0811, 77:0.0012, A7o:0.0017, A8o:0.0007, Q4s:0.0001, Q5s:0.0014, Q6s:0.0015, Q7s:0.0001, Q8s:0.0005, Q9s:0.0289, QTs:0.0001, QQ:0.4232, KQo:0.1628, AQo:0.0134, K2s:0.1446, K3s:0.0892, K4s:0.0247, K5s:0.0151, K6s:0.0007, K7s:0.0436, K8s:0.0001, KTs:0.0029, KJs:0.0002, KQs:0.2159, AKo:0.7447, A2s:0.3485, A3s:0.3283, A4s:0.4468, A5s:0.3194, A6s:0.1316, A7s:0.1720, A8s:0.0659, A9s:0.0138, AQs:0.1121, AKs:0.0924"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0061, 55:0.0989, 66:0.4191, 76s:0.1390, 77:0.0147, 87s:0.0002, 88:0.3865, 99:0.1010, T9s:0.1714, TT:0.2668, JJ:0.0478, AJo:0.0019, Q9s:0.0004, QTs:0.0073, QQ:0.8024, AQo:0.5597, K3s:0.0011, K8s:0.0040, K9s:0.0538, KTs:0.3740, KJs:0.0681, KQs:0.5002, KK:0.2496, AKo:0.0042, A2s:0.0002, A3s:0.1748, A4s:0.0944, A5s:0.1509, A6s:0.0010, A7s:0.1406, A8s:0.2263, A9s:0.1710, ATs:0.2877, AJs:0.1095, AQs:0.7564, AKs:0.0007, AA:0.0024"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0105, A4o:0.0007, 55:0.0149, A5o:0.1255, 65s:0.0001, 66:0.0250, 76s:0.0025, A7o:0.0592, 88:0.0019, A8o:0.0122, 99:0.0002, A9o:0.0212, TT:0.0009, JTo:0.0003, KTo:0.0547, ATo:0.0200, JJ:0.0001, KJo:0.0164, AJo:0.0196, Q9s:0.0026, QJs:0.0005, QQ:0.0001, KQo:0.0486, AQo:0.3532, K3s:0.0188, K4s:0.0609, K5s:0.0014, K6s:0.0096, K7s:0.0276, K8s:0.0987, K9s:0.0129, KTs:0.0070, KJs:0.0124, KQs:0.0327, KK:0.0017, AKo:0.0408, A2s:0.0338, A3s:0.0027, A4s:0.2533, A5s:0.2311, A6s:0.0163, A7s:0.0090, A8s:0.0421, A9s:0.0202, ATs:0.0407, AJs:0.0128, AQs:0.0177, AKs:0.6976, AA:0.9976"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0016, 76s:0.0008, 77:0.1438, 88:0.0519, 99:0.2738, TT:0.2688, ATo:0.0036, JJ:0.0725, AJo:0.0009, Q9s:0.1000, QTs:0.0470, QJs:0.0003, QQ:0.1971, KQo:0.0527, AQo:0.0098, K4s:0.0038, K6s:0.0854, K8s:0.1115, K9s:0.1482, KTs:0.1735, KJs:0.1914, KQs:0.3177, KK:0.7487, AKo:0.9549, A2s:0.0459, A3s:0.1858, A4s:0.1063, A5s:0.1721, A6s:0.1504, A7s:0.4612, A8s:0.0975, A9s:0.2519, ATs:0.2479, AJs:0.4058, AQs:0.2257, AKs:0.3017"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0761, 66:0.2972, 77:0.1146, 88:0.5410, 99:0.1330, TT:0.2374, JTs:0.0001, JJ:0.2421, QQ:0.4246, AQo:0.2225, K7s:0.0011, K8s:0.0017, K9s:0.1877, KTs:0.3779, KQs:0.2603, A3s:0.0001, A4s:0.0169, A5s:0.1501, A7s:0.0324, A8s:0.0996, A9s:0.1282, ATs:0.2447, AJs:0.2656, AQs:0.5744"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "77:0.0001, T8s:0.0001, TT:0.0018, ATo:0.0003, JJ:0.0001, KJo:0.0002, Q9s:0.0002, QJs:0.0005, QQ:0.0016, KQo:0.0004, AQo:0.0503, K8s:0.0001, K9s:0.0001, KTs:0.0007, KQs:0.0003, AKo:0.0024, A4s:0.0001, A5s:0.0001, ATs:0.0001, AQs:0.0016, AKs:0.0452"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0009, 55:0.0021, 66:0.0055, 77:0.0005, 88:0.0542, 99:0.0196, TT:0.2110, JJ:0.0535, KJo:0.0005, AJo:0.0003, Q9s:0.0259, QTs:0.0098, QJs:0.0267, QQ:0.5737, KQo:0.1026, AQo:0.1316, K7s:0.0587, K9s:0.0703, KTs:0.4126, KJs:0.1331, KQs:0.6571, AKo:0.7612, A2s:0.0002, A3s:0.0024, A4s:0.0818, A5s:0.2066, A6s:0.0159, A7s:0.1128, A8s:0.3832, A9s:0.2715, ATs:0.7487, AJs:0.7102, AQs:0.4224, AKs:0.0423"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.3941, 88:0.1566, 99:0.0102, TT:0.1803, KTo:0.0698, JJ:0.1570, KJo:0.0170, QQ:0.3000, KQo:0.1083, AQo:0.0055, K3s:0.0008, K4s:0.0058, K5s:0.1119, K6s:0.0025, K7s:0.1382, K8s:0.0198, K9s:0.2856, KTs:0.1595, KJs:0.5173, KQs:0.6815, KK:0.0002, AKo:0.0004, A3s:0.2738, A4s:0.0008, A5s:0.3484, A6s:0.3787, A7s:0.0149, A8s:0.0373, A9s:0.2071, ATs:0.0017, AJs:0.2109, AQs:0.3356, AKs:0.0001, AA:0.6027"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0009, A5o:0.0015, 77:0.0115, 87s:0.0001, 88:0.0194, 99:0.0538, A9o:0.0018, TT:0.1944, J9s:0.0002, JTs:0.0001, JJ:0.0483, KJo:0.0028, AJo:0.0054, QTs:0.0004, QJs:0.0005, QQ:0.0458, KQo:0.0010, AQo:0.0074, K3s:0.0061, K4s:0.1938, K6s:0.0841, K7s:0.1405, K8s:0.0611, K9s:0.1225, KTs:0.8135, KJs:0.2665, KQs:0.2690, KK:0.9997, AKo:0.9980, A2s:0.0511, A3s:0.0645, A4s:0.5360, A5s:0.4689, A6s:0.0187, A7s:0.2714, A8s:0.2500, A9s:0.2008, ATs:0.4839, AJs:0.0609, AQs:0.6165, AKs, AA:0.3973"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0038, 77:0.0004, 88:0.0017, 99:0.0043, QQ:0.0252, KTs:0.0161, KJs:0.1200, KQs:0.0092, A5s:0.0106, A7s:0.0012, A8s:0.0359, AQs:0.0088"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0042, 54s:0.0006, 55:0.0037, 65s:0.0001, 66:0.0065, 77:0.0953, 88:0.0698, 97s:0.0001, 99:0.2275, T9s:0.0013, TT:0.2043, ATo:0.0004, JTs:0.0001, JJ:0.3741, Q9s:0.0011, QTs:0.0016, QQ:0.4859, KQo:0.0065, AQo:0.0028, K5s:0.0002, K6s:0.0180, K7s:0.2953, K8s:0.2114, K9s:0.2008, KTs:0.9436, KJs:0.3106, KQs:0.5790, AKo:0.7633, A2s:0.0001, A3s:0.0048, A4s:0.3270, A5s:0.2010, A6s:0.0083, A7s:0.0156, A8s:0.0850, A9s:0.2031, ATs:0.5046, AJs:0.4237, AQs:0.6283, AKs:0.0875"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0003, TT:0.0302, JJ:0.0257, QQ:0.8723, KK, AKo:0.4469, AQs:0.0001, AKs:0.6276, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0419, 88:0.0292, 99:0.0458, TT:0.0949, JJ:0.0761, QQ:0.8905, AKo:0.3077, AKs:0.0710"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.1012, A3o:0.1744, A4o:0.1106, A5o:0.0135, A6o:0.0061, A7o:0.0061, ATo:0.0146, KJo:0.0026, AJo:0.0005, QQ:0.0008, KQo:0.0029, AQo:0.2347, K2s:0.0225, K3s:0.0286, K4s:0.0031, K5s:0.0013, K6s:0.0163, K7s:0.0001, K8s:0.0024, K9s:0.0063, KTs:0.0002, KJs:0.0001, KQs:0.0170, AKo:0.0251, A2s:0.0002, A3s:0.1113, A4s:0.1542, A5s:0.0179, A6s:0.0156, A7s:0.0257, A8s:0.0220, A9s:0.0008, ATs:0.0118, AJs:0.1398, AQs:0.3356, AKs:0.4246, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, T9s:0.0001, TT:0.0003, JJ:0.0001, QQ:0.0001, K2s:0.0003, K7s:0.0007, K9s:0.0064, KTs:0.0005, KJs:0.0001, KQs:0.0531, KK, AKo:0.9749, A2s:0.0006, A3s:0.0764, A4s:0.0348, A5s:0.0497, A6s:0.0108, A7s:0.0213, ATs:0.0002, AQs:0.0493, AKs:0.5754"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1344, 55:0.2259, 66:0.7131, 77:0.1004, 88:0.6114, 99:0.3863, T9s:0.0003, TT:0.1871, JJ:0.5902, AJo:0.0017, QTs:0.0001, QQ:0.9980, KQo:0.0117, AQo:0.5071, K4s:0.0834, K6s:0.2874, K7s:0.0410, K9s:0.0001, KTs:0.0233, KJs:0.4353, KQs:0.8751, A3s:0.0162, A4s:0.0030, A5s:0.0998, A6s:0.0364, A7s:0.0060, A8s:0.2335, A9s:0.8825, ATs:0.9888, AJs:0.9636, AQs:0.9878"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0052, A5o:0.0947, A6o:0.0003, A7o:0.0695, A8o:0.0094, A9o:0.0007, TT:0.0002, ATo:0.1098, AJo:0.0857, AQo:0.4168, K2s:0.0005, K3s:0.0082, K4s:0.0004, K5s:0.0003, K6s:0.0483, K7s:0.0019, K8s:0.0001, KTs:0.0003, KQs:0.0001, A2s:0.2083, A3s:0.0759, A4s:0.0002, A5s:0.0002, A6s:0.0722, A7s:0.0570, A8s:0.0870, A9s:0.0114, ATs:0.0006, AJs:0.0353, AQs:0.0107, AKs:0.2945, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0123, 55:0.0006, 65s:0.0002, 66:0.0198, 77:0.6731, 88:0.3700, 99:0.2138, T9s:0.0005, TT:0.8073, J9s:0.0002, JJ:0.4089, QTs:0.0002, QQ:0.0020, KQo:0.0001, K3s:0.0065, K4s:0.0015, K6s:0.0033, K7s:0.0509, K8s:0.0060, K9s:0.0101, KTs:0.9682, KJs:0.5436, KQs:0.1208, KK, AKo, A2s:0.6442, A3s:0.5922, A4s:0.8862, A5s:0.8982, A6s:0.3291, A7s:0.2492, A8s:0.5353, A9s:0.0421, ATs:0.0104, AJs:0.0005, AQs:0.0014, AKs:0.7055"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0021, A3o:0.0001, A5o:0.0008, A7o:0.0001, A9o:0.0001, ATo:0.0042, QQ:0.0001, AQo:0.1091, KK:0.4207, AKo:0.0031, A2s:0.0131, A3s:0.0054, A4s:0.0038, A6s:0.0435, A7s:0.0015, AKs:0.0089, AA:0.0276"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0021, A3o:0.0004, A4o:0.0804, A5o:0.1441, A7o:0.0041, A9o:0.0006, ATo:0.0206, AJo:0.0006, AQo:0.0027, KK:0.5530, AKo:0.2040, A2s:0.9664, A3s:0.9669, A4s:0.5355, A5s:0.0166, A6s:0.8809, A7s:0.1953, A8s:0.0005, AKs:0.8891, AA:0.9129"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.9737, AKo:0.2070, AKs:0.8980, AA:0.9405"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "JJ:0.0007, AQo:0.0002, KK:0.1016, A3s:0.0009, ATs:0.0032, AJs:0.0387, AQs:0.0573, AKs:0.0001, AA:0.0081"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 88:0.0353, A8o:0.0011, 97s:0.0008, 98s:0.0002, T7s:0.0001, ATo:0.0001, J8s:0.0006, JJ:0.2204, Q8s:0.0006, Q9s:0.0001, QTs:0.0016, AQo:0.0002, KQs:0.0003, KK:0.1050, AKo:0.9880, A2s:0.3346, A3s:0.4043, A4s:0.3133, A5s:0.3033, A6s:0.5001, A7s:0.3785, A8s:0.2377, A9s:0.0050, ATs:0.2097, AJs:0.1431, AQs:0.0112, AKs:0.9968, AA:0.9919"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0004, A7o:0.0005, A9o:0.0001, ATo:0.0001, QQ:0.0001, AQo:0.0690, K4s:0.0001, K7s:0.0001, KK:0.4254, AKo:0.0002, A2s:0.0354, A3s:0.0008, A4s:0.0633, A5s:0.0041, A6s:0.0774, A7s:0.0317, A8s:0.0001, AKs:0.0271, AA:0.0098"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0014, A3o:0.0059, A4o:0.0071, A5o:0.0839, A6o:0.0032, A7o:0.0120, A8o:0.0112, A9o:0.0051, ATo:0.0028, AQo:0.0006, K4s:0.0001, K5s:0.0002, K6s:0.0001, K7s:0.0005, KK:0.5463, AKo:0.2069, A2s:0.6844, A3s:0.6968, A4s:0.4107, A5s:0.0088, A6s:0.6860, A7s:0.1249, A8s:0.0003, AKs:0.8709, AA:0.9307"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0001, QQ:0.0004, KK, A9s:0.0002, AKs:0.0092, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9737, AKo:0.1616, AKs:0.8980, AA:0.9405"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@14",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0196, K2o:0.0018, A2o:0.0080, 33:0.0169, K3o:0.0041, A3o:0.0230, 43s:0.0063, 44:0.1173, K4o:0.0066, A4o:0.0094, 52s:0.0046, 53s:0.0042, 55:0.0381, 95o:0.0001, K5o:0.0037, A5o:0.0595, 64s:0.0022, 66:0.0125, K6o:0.0074, A6o:0.0172, 75s:0.0002, 77:0.1337, K7o:0.0064, A7o:0.0102, 84s:0.0022, 85s:0.0001, 86s:0.0008, 87s:0.0004, 88:0.1394, K8o:0.0088, A8o:0.0209, 93s:0.0001, 94s:0.0001, 97s:0.0003, 99:0.0763, K9o:0.0120, A9o:0.0285, T2s:0.0003, T3s:0.0001, T4s:0.0001, T8s:0.0094, TT:0.0828, KTo:0.0103, ATo:0.0118, J2s:0.0005, J4s:0.0004, J6s:0.0009, J9s:0.0759, JTs:0.0001, JJ:0.3027, KJo:0.0222, AJo:0.1008, Q2s:0.0001, Q5s:0.0001, Q8s:0.0001, QTs:0.0007, QQ:0.4161, KQo:0.0131, AQo:0.0150, K2s:0.0313, K3s:0.0615, K4s:0.0134, K5s:0.0300, K6s:0.0560, K7s:0.0502, K8s:0.0051, K9s:0.0181, KTs:0.0292, KJs:0.0792, KQs:0.0208, KK, AKo:0.9997, A2s:0.4077, A3s:0.1943, A4s:0.3196, A5s:0.5624, A6s:0.3707, A7s:0.7287, A8s:0.1885, A9s:0.2289, ATs:0.0931, AJs:0.0115, AQs:0.5474, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0985, 66:0.0488, 77:0.0238, A7o:0.0003, 88:0.0097, A8o:0.0007, 99:0.0186, A9o:0.0006, T8s:0.0001, TT:0.0025, ATo:0.0002, J9s:0.0009, JTs:0.0001, JJ:0.1413, AJo:0.0011, QTs:0.0026, QJs:0.0003, QQ:0.3709, KQo:0.0150, AQo:0.2210, K7s:0.0001, K9s:0.0378, KTs:0.0515, KJs:0.0113, KQs:0.1435, KK:0.1563, AKo:0.0011, A2s:0.0006, A3s:0.0083, A4s:0.0170, A5s:0.0148, A6s:0.0001, A7s:0.1160, A8s:0.0594, A9s:0.6164, ATs:0.4202, AJs:0.2966, AQs:0.5969, AA:0.4470"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.1026, 55:0.1981, 65s:0.0004, 66:0.1672, 76s:0.0004, 77:0.2037, 86s:0.0001, 88:0.4207, 99:0.4971, A9o:0.0001, T8s:0.0007, T9s:0.0001, TT:0.8714, KTo:0.0146, J9s:0.0001, JJ:0.6835, KJo:0.0135, AJo:0.0141, QTs:0.0004, QQ:0.4890, KQo:0.0051, AQo:0.0006, K3s:0.0381, K4s:0.0004, K5s:0.0078, K6s:0.0325, K7s:0.0337, K8s:0.0064, K9s:0.0161, KTs:0.0417, KJs:0.0230, KQs:0.0185, KK:0.8437, AKo:0.9989, A2s:0.0729, A3s:0.0885, A4s:0.5471, A5s:0.5408, A6s:0.6834, A7s:0.3387, A8s:0.5928, A9s:0.1797, ATs:0.3833, AJs:0.2737, AQs:0.3101, AKs, AA:0.5530"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@14|HJ:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0263, AKo:0.0293, AKs:0.0145, AA:0.0595"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 77:0.0028, 88:0.0012, 97s:0.0001, 99:0.0002, T8s:0.0001, T9s:0.0001, TT:0.0001, JTo:0.0001, J9s:0.0001, JJ:0.0654, QTs:0.0002, QQ:0.0522, AQo:0.0002, K5s:0.0003, K7s:0.0003, K8s:0.0007, KTs:0.0005, KQs:0.0003, KK:0.9997, A2s:0.0001, A6s:0.0002, ATs:0.0002, AJs:0.0002, AQs:0.0006, AKs:0.1165, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0263, AKo:0.0281, AKs:0.0139, AA:0.0595"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0006, K2o:0.0023, A2o:0.0781, Q3o:0.0001, A3o:0.3200, 44:0.0019, Q4o:0.0001, A4o:0.1043, Q5o:0.0002, K5o:0.0066, A5o:0.0847, 63s:0.0001, 64s:0.0005, Q6o:0.0003, A6o:0.0134, 77:0.0003, Q7o:0.0008, K7o:0.0005, A7o:0.0065, 88:0.0004, Q8o:0.0001, K8o:0.0004, A8o:0.0680, 99:0.0024, K9o:0.0003, A9o:0.0110, TT:0.0024, QTo:0.0001, JJ:0.2803, KJo:0.0096, AJo:0.0654, Q2s:0.0009, Q3s:0.0003, Q4s:0.0001, Q5s:0.0004, Q8s:0.0004, Q9s:0.0008, QJs:0.0006, QQ:0.0312, KQo:0.0401, AQo:0.6513, K2s:0.0114, K3s:0.0515, K4s:0.0259, K5s:0.0099, K6s:0.0204, K7s:0.0001, K8s:0.0001, K9s:0.0034, KTs:0.0059, KJs:0.0001, KQs:0.0070, KK:0.0736, AKo:0.0352, A2s:0.3889, A3s:0.3957, A4s:0.3319, A5s:0.1798, A6s:0.3348, A7s:0.0767, A8s:0.1835, A9s:0.0806, ATs:0.0396, AJs:0.2473, AQs:0.2521, AKs:0.2325, AA:0.9928"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "Q2o:0.0006, K2o:0.0236, A2o:0.0598, Q3o:0.0003, K3o:0.0078, A3o:0.0466, K4o:0.0501, A4o:0.0009, K5o:0.0390, A5o:0.0023, Q6o:0.0001, K6o:0.0324, A6o:0.0028, K7o:0.0201, A7o:0.0266, K8o:0.0056, Q9o:0.0001, JJ:0.2641, QJo:0.0002, KJo:0.1486, AJo:0.1615, Q2s:0.0019, Q5s:0.0002, Q6s:0.0013, Q7s:0.0002, Q8s:0.0003, QJs:0.0001, QQ:0.0462, KQo:0.5174, AQo:0.0702, K2s:0.1580, K3s:0.2104, K4s:0.1861, K5s:0.2199, K6s:0.2034, K7s:0.0117, K8s:0.0459, K9s:0.0424, KTs:0.0099, KJs:0.0118, KQs:0.0040, KK:0.9264, AKo:0.1015, A2s:0.1655, A3s:0.0625, A4s:0.0448, A5s:0.0308, A6s:0.0049, A7s:0.1189, A8s:0.0330, A9s:0.0070, ATs:0.0023, AJs:0.0325, AQs:0.0216, AKs:0.4369, AA:0.0072"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0530, A2o:0.0007, 33:0.0757, A3o:0.0119, 44:0.0852, A4o:0.0253, 55:0.0430, A5o:0.0169, 66:0.0389, 77:0.0345, 88:0.0348, 99:0.0351, TT:0.0014, JJ:0.1085, Q2s:0.0639, Q3s:0.0111, Q4s:0.0306, Q5s:0.0325, Q6s:0.0461, Q7s:0.0311, Q8s:0.0203, Q9s:0.0593, QTs:0.0604, QJs:0.3371, QQ:0.9226, KQo:0.3447, AQo:0.2785, K2s:0.0651, K3s:0.0233, K4s:0.1058, K5s:0.0105, K6s:0.0840, K7s:0.0562, K8s:0.0010, K9s:0.0343, KTs:0.0460, KJs:0.0538, KQs:0.9699, AKo:0.8633, A2s:0.2123, A3s:0.3456, A4s:0.2859, A5s:0.4016, A6s:0.0711, A7s:0.0808, A8s:0.1527, A9s:0.1800, ATs:0.0618, AJs:0.0828, AQs:0.7262, AKs:0.3306"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7885, 33:0.6737, 42s:0.5825, 43s:0.9407, 44:0.7060, 54o:0.0821, 52s:0.4300, 53s:0.9662, 54s:0.9721, 55:0.7666, 65o:0.4169, 63s:0.6113, 64s:0.9988, 65s:0.9918, 66:0.7673, 73s:0.0003, 74s:0.1506, 75s:0.8372, 76s:0.9902, 77:0.9989, 84s:0.0022, 85s:0.8166, 86s:0.9859, 87s:0.9705, 88, 95s:0.0003, 96s:0.9652, 97s:0.9479, 98s:0.9568, 99, T2s:0.0002, T6s:0.0632, T7s:0.7973, T8s:0.9896, T9s:0.9828, TT, ATo:0.2255, J3s:0.0003, J5s:0.0003, J6s:0.0001, J7s:0.0540, J8s:0.8287, J9s:0.9787, JTs:0.9949, JJ:0.9998, QJo:0.6149, KJo:0.8858, AJo:0.9988, Q5s:0.5557, Q6s:0.0958, Q7s:0.6574, Q8s:0.7629, Q9s:0.8877, QTs:0.9264, QJs:0.9867, QQ:0.0932, KQo:0.5883, AQo:0.1269, K2s:0.1207, K3s:0.1498, K4s:0.7146, K5s:0.5119, K6s:0.7059, K7s:0.8528, K8s:0.7703, K9s:0.8839, KTs:0.9985, KJs:0.9981, KQs:0.5132, A2s:0.2339, A3s:0.4763, A4s:0.4024, A5s:0.4259, A6s:0.3414, A7s:0.5523, A8s:0.7303, A9s:0.9851, ATs:0.9955, AJs:0.9983, AQs:0.6072"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0015, K2o:0.0016, A2o:0.6860, Q3o:0.0004, K3o:0.0017, A3o:0.4210, K4o:0.0038, A4o:0.2105, 53s:0.0002, A5o:0.3656, 63s:0.0001, Q6o:0.0006, K6o:0.0001, A6o:0.2297, Q7o:0.0002, K7o:0.0002, A7o:0.2549, Q8o:0.0002, A8o:0.0242, K9o:0.0424, A9o:0.1518, QTo:0.0001, ATo:0.0001, J5s:0.0003, JJ:0.0002, QJo:0.0001, Q3s:0.0125, Q5s:0.0067, Q7s:0.0004, Q8s:0.0049, Q9s:0.0041, QQ:0.3401, KQo:0.0080, AQo:0.6444, K2s:0.0006, K3s:0.0063, K4s:0.0010, K5s:0.0244, K6s:0.0230, K7s:0.0356, K9s:0.0002, KTs:0.0006, KQs:0.0028, KK:0.4170, AKo:0.1750, A2s:0.2407, A3s:0.0070, A4s:0.0757, A5s:0.0891, A6s:0.1593, A7s:0.0022, A8s:0.0045, A9s:0.0027, AQs:0.0004, AKs:0.4975, AA:0.9982"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.3402, A2o:0.0552, K3o:0.0953, A3o:0.0481, K4o:0.0226, A4o:0.0848, K5o:0.0264, A5o:0.0049, K6o:0.0331, A6o:0.0004, K7o:0.0529, Q8o:0.0001, K8o:0.0150, A8o:0.0264, K9o:0.0230, A9o:0.0033, ATo:0.0004, Q2s:0.0001, Q3s:0.0001, Q5s:0.0001, Q7s:0.0001, Q8s:0.0002, QQ:0.0266, KQo:0.0001, AQo:0.0007, K2s:0.4328, K3s:0.2152, K4s:0.0048, K5s:0.0576, K6s:0.0184, K7s:0.0023, K8s:0.0588, KQs:0.0001, KK:0.5830, AKo:0.1285, A2s:0.0128, A3s:0.0005, A6s:0.0135, A7s:0.0010, A9s:0.0005, AKs:0.3349, AA:0.0018"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2115, A2o:0.0016, 33:0.3230, A3o:0.2250, 44:0.2940, A4o:0.1218, 55:0.2333, A5o:0.0324, 66:0.2327, 77:0.0011, Q2s:0.0381, Q3s:0.0087, Q4s:0.0012, Q5s:0.0358, Q6s:0.0348, Q7s:0.0001, Q8s:0.0401, Q9s:0.0223, QTs:0.0686, QJs:0.0127, QQ:0.5401, KQo:0.4037, AQo:0.2280, K2s:0.1398, K3s:0.3446, K4s:0.2264, K5s:0.3378, K6s:0.2420, K7s:0.0974, K8s:0.1562, K9s:0.1024, KTs:0.0002, KJs:0.0010, KQs:0.4839, AKo:0.6965, A2s:0.4974, A3s:0.5146, A4s:0.5208, A5s:0.4838, A6s:0.4729, A7s:0.4412, A8s:0.2639, A9s:0.0092, ATs:0.0010, AJs:0.0017, AQs:0.3924, AKs:0.1676"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.1251, 66:0.0901, 76s:0.0380, 77:0.0082, A7o:0.0002, 87s:0.0131, 88:0.2375, 99:0.0042, QJs:0.0001, QQ:0.6025, KQo:0.0004, AQo:0.1509, KQs:0.0314, KK:0.0421, A2s:0.0025, A3s:0.0025, A5s:0.0019, A8s:0.0048, A9s:0.0010, ATs:0.0038, AJs:0.0001, AQs:0.9483, AA:0.0015"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0002, 55:0.0367, A5o:0.0666, 65s:0.0158, 66:0.0046, 76s:0.0012, A7o:0.0604, 86s:0.0006, 88:0.0309, A8o:0.0026, 99:0.0218, A9o:0.0155, T9s:0.0029, TT:0.0444, KTo:0.0001, ATo:0.0242, JJ:0.0239, KJo:0.0010, AJo:0.0006, Q9s:0.0003, QQ:0.0264, AQo:0.6009, K3s:0.0312, K4s:0.0030, K5s:0.0256, K6s:0.1465, K7s:0.0037, K8s:0.0998, K9s:0.2152, KTs:0.0702, KJs:0.1023, KQs:0.0093, KK:0.0056, AKo:0.0077, A2s:0.0176, A3s:0.0560, A4s:0.0311, A5s:0.0112, A6s:0.0009, A7s:0.0045, A8s:0.0268, A9s:0.0479, ATs:0.0083, AJs:0.1373, AQs:0.0019, AKs:0.8498, AA:0.9984"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, A5o:0.0006, 65s:0.0143, 66:0.0008, 76s:0.1484, 77:0.0169, A7o:0.0009, 87s:0.0096, 88:0.0440, A8o:0.0131, 99:0.1128, T8s:0.0002, T9s:0.0001, TT:0.0111, KTo:0.0002, ATo:0.0047, J8s:0.0003, JTs:0.0014, JJ:0.0551, KJo:0.0011, AJo:0.0002, Q9s:0.0001, QTs:0.0001, QJs:0.0668, QQ:0.2934, KQo:0.0119, AQo:0.0055, K2s:0.0001, K3s:0.0034, K4s:0.0088, K5s:0.0084, K6s:0.0037, K7s:0.0347, K8s:0.0176, K9s:0.4994, KTs:0.0007, KJs:0.1214, KQs:0.5150, KK:0.9523, AKo:0.9923, A2s:0.3045, A3s:0.3582, A4s:0.4557, A5s:0.6458, A6s:0.1821, A7s:0.2603, A8s:0.3821, A9s:0.0309, ATs:0.6371, AJs:0.3715, AQs:0.0429, AKs:0.1502, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0330, 54s:0.0150, 55:0.1978, 65s:0.0177, 66:0.2533, 76s:0.0179, 77:0.3609, 88:0.0528, 99:0.1659, TT:0.1124, JTs:0.0180, JJ:0.2471, QQ:0.5969, AQo:0.3394, K6s:0.0009, K7s:0.0032, K9s:0.0008, KTs:0.2492, KJs:0.2178, KQs:0.1183, A4s:0.0030, A5s:0.1768, A8s:0.0704, A9s:0.0011, ATs:0.2245, AJs:0.1160, AQs:0.7761, AKs:0.0391"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "AJo:0.0005, QJs:0.0001, QQ:0.0024, KQo:0.0006, AQo:0.0001, K6s:0.0001, K7s:0.0010, KTs:0.0035, KJs:0.0049, KQs:0.0061, AKo:0.0005, A5s:0.0001, ATs:0.0001, AJs:0.0001, AKs:0.0246"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0183, 66:0.0387, 77:0.0026, 99:0.0317, T9s:0.0001, TT:0.0171, JJ:0.0272, AJo:0.0003, QQ:0.3611, AQo:0.1753, K6s:0.0003, K7s:0.0021, K9s:0.2570, KTs:0.0263, KJs:0.2752, KQs:0.5452, AKo:0.5828, A3s:0.0054, A4s:0.1592, A5s:0.2583, A6s:0.0362, A7s:0.0274, A8s:0.0925, A9s:0.5485, ATs:0.2379, AJs:0.4390, AQs:0.2236, AKs:0.3276"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0210, TT:0.0015, JJ:0.0048, KJo:0.0066, QTs:0.0009, QQ:0.1510, KQo:0.0457, AQo:0.0005, K4s:0.0008, K5s:0.0324, K6s:0.0382, K9s:0.0427, KTs:0.1603, KJs:0.1769, KQs:0.2444, KK:0.0004, A3s:0.1130, A4s:0.0348, A5s:0.0010, A6s:0.0206, A8s:0.0559, A9s:0.0760, ATs:0.0247, AJs:0.0023, AQs:0.0229, AKs:0.0019, AA:0.1406"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0007, 55:0.0010, A5o:0.0001, 65s:0.0001, 77:0.0330, 88:0.0001, 97s:0.0002, 98s:0.0026, 99:0.0288, T7s:0.0001, T9s:0.0001, TT:0.6195, KTo:0.0047, ATo:0.0001, J9s:0.0001, JTs:0.0002, JJ:0.2414, KJo:0.0053, QTs:0.0002, QJs:0.0006, QQ:0.2237, KQo:0.0022, AQo:0.0004, K3s:0.0319, K5s:0.1108, K6s:0.4901, K7s:0.0224, K8s:0.0783, K9s:0.0737, KTs:0.3222, KJs:0.1421, KQs:0.6444, KK:0.9996, AKo, A2s:0.0910, A3s:0.3503, A4s:0.4105, A5s:0.2069, A6s:0.3191, A7s:0.3262, A8s:0.2788, A9s:0.1329, ATs:0.5392, AJs:0.1700, AQs:0.4067, AKs:0.9979, AA:0.8594"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0155, 66:0.0007, 77:0.0076, 88:0.0703, JJ:0.0074, QQ:0.2116, AQo:0.0003, K6s:0.0001, K7s:0.0021, K9s:0.0019, KTs:0.0359, KJs:0.1923, KQs:0.1431, A3s:0.0013, A4s:0.0267, A6s:0.0010, A7s:0.0340, A9s:0.0011, ATs:0.0471, AJs:0.0015, AQs:0.1011, AKs:0.0008"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0968, 66:0.0439, 77:0.0761, 88:0.1029, 99:0.0096, TT:0.0224, ATo:0.0001, J9s:0.0008, JTs:0.0004, JJ:0.1843, QQ:0.1500, KQo:0.0144, AQo:0.0001, K6s:0.0031, K7s:0.0140, K8s:0.0075, K9s:0.2262, KTs:0.7846, KJs:0.4649, KQs:0.3383, AKo:0.5832, A2s:0.0003, A3s:0.0025, A4s:0.0258, A5s:0.6246, A6s:0.0128, A7s:0.0828, A8s:0.2191, A9s:0.6998, ATs:0.0901, AJs:0.1313, AQs:0.6967, AKs:0.3905"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0008, JJ:0.1483, QQ:0.9572, KK, AKo:0.2242, AQs:0.0001, AKs:0.4404, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.2196, JJ:0.1126, QQ:0.9235, AKo:0.2121, AKs:0.2062"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0165, 66:0.2203, 88:0.0495, TT:0.0018, JJ:0.0674, QQ:0.4367, AQo:0.2582, KQs:0.0054, KK:0.1274, A9s:0.0018, AQs:0.8701, AKs:0.0007, AA:0.0014"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0001, 55:0.0025, A5o:0.0489, 65s:0.0079, 77:0.0001, A7o:0.0275, 88:0.0002, A8o:0.0750, 97s:0.0001, 98s:0.0001, 99:0.0001, A9o:0.0229, T7s:0.0001, T8s:0.0027, TT:0.0002, ATo:0.0746, JTs:0.0007, JJ:0.1393, KJo:0.0004, AJo:0.0073, Q8s:0.0001, Q9s:0.0003, QQ:0.0403, KQo:0.0001, AQo:0.3524, K3s:0.0001, K4s:0.0007, K5s:0.0023, K6s:0.0003, K7s:0.0036, K9s:0.0001, KJs:0.0007, KK:0.0006, AKo:0.2101, A2s:0.1271, A3s:0.0057, A4s:0.2371, A5s:0.0463, A6s:0.1116, A7s:0.0279, A8s:0.0106, A9s:0.1556, ATs:0.0604, AJs:0.0588, AQs:0.0088, AKs:0.0908, AA:0.9982"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0006, 55:0.0258, A5o:0.0011, 66:0.0324, 77:0.0331, 86s:0.0002, 87s:0.0007, 88:0.0022, A8o:0.0001, 97s:0.0001, 99:0.0004, A9o:0.0049, TT:0.1360, ATo:0.0092, JJ:0.5212, KJo:0.0006, AJo:0.0778, Q8s:0.0010, QTs:0.0002, QJs:0.0002, QQ:0.3309, KQo:0.0037, AQo:0.0342, K2s:0.0001, K3s:0.0004, K4s:0.0255, K5s:0.0700, K6s:0.0051, K7s:0.0145, K9s:0.0315, KTs:0.1899, KJs:0.2238, KQs:0.0901, KK:0.8720, AKo:0.7899, A2s:0.4171, A3s:0.7625, A4s:0.5406, A5s:0.8173, A6s:0.2420, A7s:0.8183, A8s:0.7574, A9s:0.5600, ATs:0.6079, AJs:0.6850, AQs:0.1051, AKs:0.9084, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0061, 55:0.0581, 66:0.1044, 76s:0.0026, 77:0.0355, 88:0.2343, 99:0.0265, TT:0.0300, JJ:0.1143, QQ:0.4216, AQo:0.1498, K9s:0.0070, KTs:0.0728, KJs:0.0325, KQs:0.0152, A5s:0.0037, A8s:0.0024, ATs:0.0166, AJs:0.0001, AQs:0.9416"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "KQs:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0037, 55:0.0003, 66:0.0223, 77:0.0001, 88:0.0349, 99:0.0349, TT:0.0162, JJ:0.2944, AJo:0.0302, Q9s:0.0001, QQ:0.5478, AQo:0.0066, K7s:0.0007, K8s:0.0037, K9s:0.0043, KTs:0.1162, KJs:0.0870, KQs:0.0809, AKo:0.5833, A2s:0.0027, A3s:0.0121, A4s:0.2110, A5s:0.6358, A6s:0.0403, A7s:0.2675, A8s:0.3480, A9s:0.6584, ATs:0.8926, AJs:0.8040, AQs:0.0572, AKs:0.3913"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0196, 65s:0.0200, 66:0.0001, 77:0.0093, 86s:0.0002, 88:0.0358, 99:0.0092, TT:0.0029, QTs:0.0009, QQ:0.2210, KQo:0.0279, AQo:0.0101, K4s:0.0129, K5s:0.0061, K6s:0.0014, K7s:0.0071, K8s:0.0107, K9s:0.0050, KTs:0.0726, KJs:0.1297, KQs:0.1299, KK:0.0010, A3s:0.0048, A5s:0.0413, A6s:0.0135, A7s:0.0018, A8s:0.0001, ATs:0.0025, AJs:0.0080, AQs:0.2858, AKs:0.0204, AA:0.1565"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0042, 55:0.0144, A5o:0.0043, 65s:0.0087, 66:0.0059, 76s:0.0017, 77:0.0374, A7o:0.0003, 87s:0.0002, 88:0.0426, A8o:0.0002, 99:0.1270, T9s:0.0013, TT:0.0233, KTo:0.0100, JTs:0.0023, JJ:0.0111, KJo:0.0837, AJo:0.0005, Q8s:0.0024, Q9s:0.0034, QTs:0.0070, QJs:0.0030, QQ:0.1607, KQo:0.0627, AQo:0.0077, K2s:0.0018, K3s:0.0506, K4s:0.0361, K5s:0.0748, K6s:0.2169, K7s:0.0564, K8s:0.0429, K9s:0.4649, KTs:0.2312, KJs:0.7332, KQs:0.2222, KK:0.9990, AKo, A2s:0.0999, A3s:0.3994, A4s:0.2749, A5s:0.8378, A6s:0.0105, A7s:0.1176, A8s:0.5733, A9s:0.2021, ATs:0.6322, AJs:0.5746, AQs:0.0149, AKs:0.9795, AA:0.8435"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0033, 66:0.0034, 77:0.0313, 88:0.0166, 99:0.0241, JJ:0.0010, QQ:0.0862, KQo:0.0032, AQo:0.0036, K6s:0.0026, K7s:0.0016, K8s:0.0041, K9s:0.0233, KTs:0.0831, KJs:0.0487, KQs:0.1670, A8s:0.0200, AQs:0.3485"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0252, 66:0.0013, 77:0.0266, 88:0.0417, 99:0.0053, TT:0.0112, JJ:0.5555, QJs:0.0006, QQ:0.5412, KQo:0.0090, AQo:0.0083, K8s:0.0023, K9s:0.0100, KTs:0.2409, KJs:0.5338, KQs:0.3012, AKo:0.5833, A2s:0.0013, A3s:0.0003, A4s:0.0814, A5s:0.5216, A6s:0.0028, A7s:0.1402, A8s:0.2175, A9s:0.2778, ATs:0.3338, AJs:0.6421, AQs:0.0545, AKs:0.3913"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.9795, KK, AKo:0.4271, AQs:0.0002, AKs:0.7144, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0028, JJ:0.1258, QQ:0.9819, AKo:0.3803, AKs:0.3178"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "42s:0.0003, 43s:0.0012, A4o:0.0024, 53s:0.0032, K5o:0.0001, A5o:0.0064, 66:0.0020, 74s:0.0002, 77:0.0922, A7o:0.0061, 86s:0.0002, 88:0.0181, A8o:0.0001, 95s:0.0004, 97s:0.0010, 99:0.0092, A9o:0.0071, TT:0.0243, ATo:0.0010, J2s:0.0021, J4s:0.0002, J6s:0.0001, JTs:0.0525, JJ:0.1195, AJo:0.0004, Q2s:0.0002, Q4s:0.0006, Q7s:0.0006, Q8s:0.0002, QJs:0.0067, QQ:0.5049, AQo:0.3968, K2s:0.0004, K3s:0.0021, K5s:0.0004, K6s:0.0172, K7s:0.0008, K8s:0.0041, K9s:0.0212, KQs:0.0078, KK:0.1511, AKo:0.0007, A2s:0.0691, A3s:0.3472, A4s:0.0998, A5s:0.3244, A6s:0.0974, A7s:0.0492, A8s:0.5999, A9s:0.1585, ATs:0.1000, AJs:0.1862, AQs:0.4257, AKs:0.0028, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0940, A2o:0.0004, 33:0.2384, A3o:0.0115, 44:0.0904, 54s:0.0422, 55:0.2320, A5o:0.0324, 66:0.0115, 74s:0.0004, 76s:0.0021, 77:0.3238, A7o:0.0199, 86s:0.0034, 88:0.3636, A8o:0.0004, 99:0.0370, A9o:0.0009, T8s:0.0001, TT:0.0415, ATo:0.0002, JJ:0.4980, Q2s:0.0004, Q4s:0.0034, Q5s:0.0010, Q7s:0.0011, Q9s:0.0025, QQ:0.2579, AQo:0.0009, K7s:0.0001, K8s:0.0039, KTs:0.0103, KQs:0.0045, KK:0.8489, AKo:0.9993, A2s:0.7566, A3s:0.2360, A4s:0.4786, A5s:0.4128, A6s:0.3444, A7s:0.6712, A8s:0.2146, A9s:0.4987, ATs:0.3368, AJs:0.4166, AQs:0.2722, AKs:0.9971"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0018, A3o:0.0002, 43s:0.0052, A4o:0.0744, 53s:0.0001, 55:0.0025, A5o:0.0080, 64s:0.0018, 66:0.0021, T6o:0.0002, A6o:0.0005, 75s:0.0004, 76s:0.0001, 77:0.0404, A7o:0.0444, 82s:0.0002, 85s:0.0013, 87s:0.0007, 88:0.1668, 92s:0.0002, 93s:0.0009, 95s:0.0440, 96s:0.0001, 98s:0.0743, 99:0.0065, K9o:0.0001, A9o:0.0017, TT:0.0381, KTo:0.0004, ATo:0.0492, J2s:0.0006, J6s:0.0015, JTs:0.0003, JJ:0.1560, AJo:0.0005, Q2s:0.0001, Q3s:0.0001, Q5s:0.0095, Q7s:0.0014, QTs:0.0010, QJs:0.0043, QQ:0.5735, AQo:0.3334, K2s:0.0006, K6s:0.0250, K8s:0.0003, K9s:0.0055, KTs:0.0007, KJs:0.1674, KQs:0.0041, KK:0.1271, AKo:0.0035, A2s:0.3408, A3s:0.0977, A4s:0.1245, A5s:0.2539, A6s:0.6646, A7s:0.3500, A8s:0.0226, A9s:0.0008, ATs:0.1326, AJs:0.0379, AQs:0.9293, AKs:0.0292, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0976, A2o:0.0166, 33:0.0459, A3o:0.0351, 44:0.1190, A4o:0.0359, 55:0.0388, A5o:0.1712, 66:0.0014, 73s:0.0003, 77:0.0200, A7o:0.0006, 83s:0.0001, 87s:0.0001, 88:0.0623, A8o:0.0032, 98s:0.0148, 99:0.0763, A9o:0.0252, T2s:0.0001, TT:0.3524, ATo:0.0270, J9s:0.0002, JJ:0.1912, AJo:0.0001, Q9s:0.0001, QJs:0.0006, QQ:0.3351, AQo:0.0593, K6s:0.0007, KQs:0.0020, KK:0.8729, AKo:0.9945, A2s:0.4659, A3s:0.4723, A4s:0.6040, A5s:0.2962, A6s:0.0751, A7s:0.5247, A8s:0.2184, A9s:0.4180, ATs:0.3817, AJs:0.0777, AQs:0.0550, AKs:0.9704, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.6997, 55:0.6392, 65s:0.8799, 66:0.9596, 76s:0.9236, 77:0.9287, 86s:0.0008, 87s:0.0334, 88:0.8256, A8o:0.0001, 97s:0.0605, 98s:0.3198, 99:0.9072, T7s:0.0036, T8s:0.1258, T9s:0.8817, TT:0.9735, J8s:0.0003, J9s:0.7207, JTs:0.7047, JJ:0.7946, KJo:0.3083, AJo:0.6894, Q8s:0.0201, Q9s:0.4929, QTs:0.4104, QJs:0.8117, QQ:0.9599, KQo:0.1403, AQo:0.6421, K3s:0.0004, K4s:0.0543, K5s:0.0125, K6s:0.2247, K7s:0.1278, K8s:0.3704, K9s:0.3506, KTs:0.9332, KJs:0.9719, KQs:0.9679, KK:0.5469, A2s:0.2114, A3s:0.1736, A4s:0.3994, A5s:0.1824, A6s:0.4942, A7s:0.5247, A8s:0.3279, A9s:0.6221, ATs:0.9594, AJs:0.8478, AQs:0.9744"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "44:0.0020, 55:0.0162, A5o:0.0117, 65s:0.0002, 66:0.0232, 76s:0.0018, 77:0.0242, A7o:0.0157, 87s:0.0060, 88:0.0582, A8o:0.0233, 97s:0.0004, 98s:0.0037, 99:0.0554, A9o:0.0317, T7s:0.0001, T8s:0.0157, T9s:0.0119, TT:0.0214, QTo:0.0001, ATo:0.2227, J8s:0.0330, JTs:0.0091, JJ:0.0405, QJo:0.0003, KJo:0.0001, AJo:0.0658, Q8s:0.0024, Q9s:0.0161, QTs:0.0827, QJs:0.0919, QQ:0.0339, AQo:0.3559, K3s:0.0001, K4s:0.0243, K6s:0.0013, K7s:0.0004, K8s:0.0031, K9s:0.0702, KTs:0.0199, KJs:0.0078, KQs:0.0263, KK:0.0004, AKo:0.0377, A2s:0.0723, A3s:0.3160, A4s:0.2252, A5s:0.4574, A6s:0.2632, A7s:0.2407, A8s:0.2457, A9s:0.3270, ATs:0.0342, AJs:0.0028, AQs:0.0255, AKs:0.1730, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.2252, 55:0.3264, A5o:0.0016, 65s:0.0004, 66:0.0153, 76s:0.0002, 77:0.0458, A7o:0.0004, 87s:0.0001, 88:0.1151, A8o:0.0025, 97s:0.0001, 98s:0.0013, 99:0.0358, T7s:0.0001, T8s:0.0005, T9s:0.0005, TT:0.0035, ATo:0.0035, J8s:0.0002, J9s:0.0019, JTs:0.0006, JJ:0.1643, AJo:0.1315, Q8s:0.0001, Q9s:0.0001, QTs:0.0024, QJs:0.0110, QQ:0.0061, KQo:0.0004, AQo:0.0017, K3s:0.0003, K4s:0.0004, K5s:0.0001, K6s:0.0014, K7s:0.0007, K8s:0.0001, K9s:0.0005, KTs:0.0025, KJs:0.0009, KQs:0.0005, KK:0.4527, AKo:0.9623, A2s:0.5140, A3s:0.4886, A4s:0.3724, A5s:0.3533, A6s:0.1985, A7s:0.2173, A8s:0.3851, A9s:0.0478, ATs:0.0063, AJs:0.1493, AQs:0.0001, AKs:0.8270"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|HJ:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0002, 54s:0.0002, 55:0.0507, 65s:0.0720, 66:0.1326, 76s:0.0024, 77:0.0326, 98s:0.0139, 99:0.0319, T9s:0.0399, TT:0.0004, ATo:0.0286, J9s:0.1623, JTs:0.0002, JJ:0.0582, KJo:0.0016, AJo:0.0220, Q9s:0.0131, QQ:0.0034, KQo:0.0002, AQo:0.1198, K4s:0.0008, K6s:0.0029, K7s:0.0008, K8s:0.0001, K9s:0.0576, KTs:0.0012, KJs:0.0056, KK:0.0488, AKo:0.0166, A2s:0.0160, A3s:0.0279, A4s:0.0410, A5s:0.0270, A6s:0.0323, A7s:0.0208, A8s:0.0197, A9s:0.0024, AQs:0.0001, AKs:0.1232, AA:0.0741"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0003, AJo:0.0008, AQo:0.0117, KK:0.0001, AKo:0.0226, A2s:0.0188, A3s:0.0371, A4s:0.0762, A5s:0.0150, A6s:0.0415, A7s:0.0229, A8s:0.0027, AKs:0.1122, AA:0.0263"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|HJ:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0346, QQ:0.0034, KK:0.0489, AKo:0.0361, AKs:0.2354, AA:0.1004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0004, 76s:0.0001, 88:0.0025, 97s:0.0001, 98s:0.0004, 99:0.0005, T7s:0.0001, T8s:0.0001, TT:0.0011, JTo:0.0001, ATo:0.0001, JTs:0.0001, JJ:0.0003, KJo:0.0002, Q8s:0.0004, Q9s:0.0001, QJs:0.0007, QQ:0.0900, AQo:0.1779, K4s:0.0001, K5s:0.0017, K7s:0.0001, K9s:0.0001, KJs:0.0001, KK:0.3253, AKo:0.0124, A2s:0.0004, A3s:0.0013, A4s:0.0001, A9s:0.0003, ATs:0.0003, AJs:0.0001, AQs:0.1845, AKs:0.3083, AA:0.1679"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0010, 55:0.0014, A5o:0.2287, 65s:0.0454, 76s:0.0287, A7o:0.0004, 87s:0.0772, 88:0.0029, A8o:0.0305, 97s:0.0007, A9o:0.1453, T8s:0.0003, T9s:0.0002, TT:0.0004, KTo:0.0006, ATo:0.0868, J8s:0.0005, JTs:0.0007, JJ:0.0002, KJo:0.0001, AJo:0.2295, QJs:0.0001, QQ:0.0002, AQo:0.0001, K3s:0.0176, K4s:0.0004, K5s:0.0394, K7s:0.0001, K9s:0.0004, KJs:0.0002, KQs:0.0011, KK:0.6383, AKo:0.9048, A2s:0.7541, A3s:0.0066, A4s:0.0242, A5s:0.8134, A6s:0.0290, A7s:0.2142, A8s:0.2341, A9s:0.5420, ATs:0.3573, AJs:0.6661, AQs:0.2374, AKs:0.6533, AA:0.8321"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0002, 54s:0.0002, 55:0.0435, 65s:0.0648, 66:0.1313, 76s:0.0006, 77:0.0212, 98s:0.0085, 99:0.0318, T9s:0.0144, TT:0.0004, ATo:0.0001, J9s:0.0422, JTs:0.0002, JJ:0.0575, KJo:0.0071, AJo:0.0001, QQ:0.0034, AQo:0.1114, K4s:0.0006, K6s:0.0003, K7s:0.0013, K9s:0.0190, KTs:0.0009, KJs:0.0055, KK:0.0410, AKo:0.0254, A2s:0.0009, A3s:0.0115, A4s:0.0060, A5s:0.0259, A6s:0.0120, A7s:0.0111, A8s:0.0062, A9s:0.0021, AQs:0.0001, AKs:0.1222, AA:0.0707"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0012, J9s:0.0001, JJ:0.0005, AJo:0.0007, AQo:0.0040, K9s:0.0001, KK:0.0079, AKo:0.0138, A2s:0.0139, A3s:0.0342, A4s:0.0488, A5s:0.0162, A6s:0.0287, A7s:0.0068, A8s:0.0099, A9s:0.0003, AKs:0.1132, AA:0.0297"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 77:0.0001, TT:0.0001, KTo:0.0001, JJ:0.0004, QTs:0.0001, QQ:0.0822, KK, A4s:0.0001, A9s:0.0003, ATs:0.0004, AKs:0.3780, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0005, QQ:0.0034, KK:0.0489, AKo:0.0301, AKs:0.2213, AA:0.1004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0002, 76s:0.0004, 87s:0.0001, A8o:0.0001, 97s:0.0001, 99:0.0001, T8s:0.0001, T9s:0.0001, TT:0.0003, J8s:0.0001, JJ:0.0001, KJo:0.0001, Q8s:0.0001, QTs:0.0001, QJs:0.0003, QQ:0.1683, K3s:0.0004, K4s:0.0001, K5s:0.0001, K6s:0.0619, K7s:0.0036, K8s:0.0001, KJs:0.0006, KQs:0.0001, KK:0.2427, AKo:0.0010, A2s:0.0013, A3s:0.0002, A4s:0.0008, A5s:0.0001, A7s:0.0001, A8s:0.0043, ATs:0.0137, AJs:0.0001, AQs:0.0003, AKs:0.3582, AA:0.1475"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0016, A5o:0.4560, 66:0.0001, 77:0.0012, A7o:0.0004, 88:0.0054, A8o:0.0023, 97s:0.0001, 99:0.0002, T8s:0.0008, T9s:0.0010, J8s:0.0001, J9s:0.0022, JTs:0.0005, JJ:0.0001, Q9s:0.0002, QTs:0.0029, QJs:0.0014, QQ:0.0112, KQo:0.0001, K5s:0.0001, K6s:0.0402, K7s:0.0268, K8s:0.0114, K9s:0.0019, KTs:0.0001, KJs:0.0002, KQs:0.0003, KK:0.3245, AKo:0.2321, A2s:0.3548, A3s:0.1750, A4s:0.3418, A6s:0.0027, A7s:0.1464, A8s:0.6829, A9s:0.1271, ATs:0.1732, AJs:0.5458, AQs:0.0697, AKs:0.6164, AA:0.8525"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0002, 54s:0.0002, 55:0.0504, 65s:0.0714, 66:0.1283, 76s:0.0023, 77:0.0281, 98s:0.0121, 99:0.0316, A9o:0.0001, T9s:0.0240, TT:0.0004, ATo:0.0052, J9s:0.1059, JTs:0.0001, JJ:0.0579, KJo:0.0169, Q6s:0.0001, Q9s:0.0044, QQ:0.0034, AQo:0.1135, K4s:0.0025, K6s:0.0085, K7s:0.0052, K8s:0.0001, K9s:0.0413, KTs:0.0012, KJs:0.0044, KK:0.0415, AKo:0.0306, A2s:0.0124, A3s:0.0544, A4s:0.0610, A5s:0.0115, A6s:0.0444, A7s:0.0335, A8s:0.0139, A9s:0.0022, AQs:0.0001, AKs:0.1336, AA:0.0588"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0002, AQo:0.0034, K9s:0.0006, KK:0.0074, AKo:0.0086, A2s:0.0149, A3s:0.0144, A4s:0.0772, A5s:0.0185, A6s:0.0305, A7s:0.0298, A8s:0.0021, AKs:0.1018, AA:0.0416"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 99:0.0003, AJo:0.0002, QQ:0.0023, KJs:0.0001, KK, AKo:0.0025, A5s:0.0002, AQs:0.0001, AKs:0.0580, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0340, QQ:0.0031, KK:0.0489, AKo:0.0010, AKs:0.0489, AA:0.1004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A2o:0.0183, K3o:0.0001, A3o:0.0326, K4o:0.0013, A4o:0.0004, 55:0.0014, A5o:0.0001, 66:0.0057, K6o:0.0001, 76s:0.0001, 77:0.0667, A7o:0.0056, 86s:0.0028, 88:0.0109, A8o:0.0059, 94s:0.0004, 98s:0.0022, 99:0.0049, TT:0.0251, JTs:0.0042, JJ:0.0236, KJo:0.0029, AJo:0.0003, Q3s:0.0001, Q7s:0.0012, Q8s:0.0002, Q9s:0.0003, QQ:0.5258, AQo:0.5099, K2s:0.0045, K3s:0.0133, K4s:0.0394, K5s:0.0039, K7s:0.1369, K9s:0.0408, KTs:0.0020, KJs:0.1256, KQs:0.0806, KK:0.1783, AKo:0.0009, A2s:0.2234, A3s:0.2954, A4s:0.1484, A5s:0.0526, A6s:0.0645, A7s:0.2615, A8s:0.3422, A9s:0.2256, ATs:0.1628, AJs:0.3389, AQs:0.7060, AKs:0.0004, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0012, 44:0.0132, A4o:0.0079, 63s:0.0014, 64s:0.0036, 65s:0.0001, 66:0.0002, A6o:0.0019, 76s:0.0015, 77:0.0498, 86s:0.0002, 87s:0.0299, 88:0.0013, A8o:0.0093, 98s:0.0010, 99:0.0571, A9o:0.0001, TT:0.0358, ATo:0.0284, JJ:0.0396, QQ:0.0005, K2s:0.0001, K5s:0.0044, K8s:0.0113, K9s:0.0001, KTs:0.0363, KJs:0.0081, KQs:0.0002, KK:0.8217, AKo:0.9989, A2s:0.2467, A3s:0.2152, A4s:0.3602, A5s:0.2114, A6s:0.0865, A7s:0.1970, A8s:0.1026, A9s:0.1422, ATs:0.2007, AJs:0.1116, AQs:0.1587, AKs:0.9996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0053, A2o:0.0295, 33:0.0031, A3o:0.0128, A4o:0.0008, 53s:0.0001, A5o:0.0820, 66:0.0009, K6o:0.0001, A6o:0.0029, 76s:0.0001, 77:0.0020, K7o:0.0028, A7o:0.0058, 86s:0.0006, 88:0.0106, K8o:0.0006, A8o:0.0012, A9o:0.0064, T9s:0.0004, ATo:0.0016, J8s:0.0031, J9s:0.0067, JJ:0.2024, AJo:0.0016, Q8s:0.0106, Q9s:0.0001, QJs:0.0028, QQ:0.5091, AQo:0.5816, K2s:0.0045, K3s:0.0130, K4s:0.0143, K6s:0.0121, K7s:0.0043, K8s:0.0090, K9s:0.0122, KJs:0.0022, KQs:0.0388, KK:0.1083, AKo:0.0005, A2s:0.0922, A3s:0.0845, A4s:0.0178, A5s:0.0045, A6s:0.2265, A7s:0.0779, A8s:0.0409, A9s:0.0553, ATs:0.1617, AJs:0.0141, AQs:0.6127, AKs:0.0016, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0014, A2o:0.0001, 33:0.0513, A3o:0.0063, 43s:0.0010, 44:0.2566, A4o:0.0001, 54s:0.0001, 55:0.0001, K5o:0.0001, A5o:0.0013, 65s:0.0001, 66:0.1021, 77:0.0335, 85s:0.0002, 87s:0.0001, 88:0.1360, 96s:0.0002, 97s:0.0008, 99:0.0637, T9s:0.0005, TT:0.1224, J8s:0.0013, JJ:0.0003, AJo:0.0001, Q2s:0.0001, Q5s:0.0001, Q6s:0.0001, Q7s:0.0002, Q8s:0.0001, Q9s:0.0004, QQ:0.0005, AQo:0.0002, K2s:0.0004, K4s:0.0003, K6s:0.0001, K7s:0.0005, K8s:0.0017, K9s:0.0011, KJs:0.0008, KQs:0.0005, KK:0.8917, AKo:0.9995, A2s:0.1660, A3s:0.3138, A4s:0.1251, A5s:0.4765, A6s:0.2740, A7s:0.0572, A8s:0.3233, A9s:0.4120, ATs:0.1164, AJs:0.1695, AQs:0.0215, AKs:0.9977"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0008, 55:0.0558, 66:0.6682, 77:0.6166, 88:0.5967, 99:0.7635, T8s:0.0002, T9s:0.0741, TT:0.4545, ATo:0.0126, JTs:0.1174, JJ:0.1986, KJo:0.0119, AJo:0.1157, QTs:0.0002, QJs:0.0042, QQ:0.8995, KQo:0.0001, AQo:0.2503, K5s:0.0027, K6s:0.0534, K8s:0.0008, K9s:0.0051, KTs:0.2151, KJs:0.6193, KQs:0.4885, KK:0.3068, A2s:0.0367, A3s:0.0763, A4s:0.0991, A5s:0.3597, A6s:0.0197, A7s:0.0402, A8s:0.2775, A9s:0.4039, ATs:0.8445, AJs:0.6204, AQs:0.9714"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "44:0.0019, A4o:0.0001, 55:0.0002, A5o:0.0008, 66:0.0554, 77:0.1251, A7o:0.0117, 87s:0.0005, 88:0.0175, A8o:0.0136, 99:0.0185, A9o:0.0027, T9s:0.0010, TT:0.3285, ATo:0.0619, J8s:0.0018, J9s:0.0009, JTs:0.0004, JJ:0.0033, KJo:0.0139, AJo:0.0894, Q8s:0.0001, QTs:0.0014, QJs:0.0087, QQ:0.0266, KQo:0.0036, AQo:0.7481, K3s:0.0029, K4s:0.0288, K5s:0.0083, K6s:0.0528, K7s:0.0141, K8s:0.0065, K9s:0.0064, KTs:0.1007, KJs:0.0285, KQs:0.0086, KK:0.0005, AKo:0.0470, A2s:0.0666, A3s:0.1924, A4s:0.2119, A5s:0.0133, A6s:0.1322, A7s:0.5633, A8s:0.0880, A9s:0.2055, ATs:0.0046, AJs:0.0082, AQs:0.0273, AKs:0.6674, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.1292, 55:0.3653, A5o:0.0036, 66:0.0961, 77:0.1577, A7o:0.0002, 87s:0.0007, 88:0.3767, A8o:0.0001, 99:0.0735, A9o:0.0005, T9s:0.0028, TT:0.0927, ATo:0.0046, JTs:0.0001, JJ:0.7977, KJo:0.0002, AJo:0.0696, QTs:0.0001, QJs:0.0011, QQ:0.0734, AQo:0.0004, K3s:0.0256, K4s:0.0026, K5s:0.0155, K6s:0.0132, K7s:0.0149, K8s:0.0043, K9s:0.0478, KTs:0.0485, KJs:0.2523, KQs:0.1682, KK:0.6926, AKo:0.9529, A2s:0.6957, A3s:0.5680, A4s:0.5560, A5s:0.4540, A6s:0.2989, A7s:0.2987, A8s:0.3367, A9s:0.2033, ATs:0.1482, AJs:0.3668, AQs:0.0004, AKs:0.3326"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|HJ:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0060, 65s:0.0001, 66:0.0299, 76s:0.0487, 77:0.0597, 87s:0.0011, ATo:0.0212, JJ:0.0326, KJo:0.0736, AJo:0.0002, QQ:0.0111, AQo:0.2231, K3s:0.0001, K4s:0.0034, K6s:0.0569, K7s:0.0170, K8s:0.0120, K9s:0.0625, KK:0.1416, AKo:0.0043, A2s:0.0464, A3s:0.0626, A4s:0.1060, A5s:0.0751, A6s:0.1346, A7s:0.0997, A8s:0.0344, A9s:0.0001, AKs:0.0234, AA:0.2442"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0003, A5o:0.0031, A9o:0.0003, ATo:0.0546, JJ:0.0199, AJo:0.0003, KK:0.0526, AKo:0.0801, A2s:0.1143, A3s:0.0432, A4s:0.0747, A5s:0.0749, A6s:0.1227, A7s:0.0493, A8s:0.0113, AKs:0.0766, AA:0.1067"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|HJ:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0524, QQ:0.0111, KK:0.1942, AKo:0.0146, AKs:0.0667, AA:0.3509"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "ATo:0.0002, JJ:0.0001, QQ:0.0002, AQo:0.2979, K3s:0.0001, K7s:0.0001, K8s:0.0001, KK:0.2749, AKo:0.0455, A2s:0.0004, A3s:0.0002, A7s:0.0015, A9s:0.0003, AQs:0.0283, AKs:0.3250, AA:0.1435"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0317, A4o:0.0003, 55:0.0001, A5o:0.0153, 65s:0.0095, 76s:0.0063, A7o:0.0904, 87s:0.0002, A8o:0.0587, 97s:0.0001, 99:0.0001, A9o:0.0720, T7s:0.0001, TT:0.0002, ATo:0.0669, JJ:0.0003, AJo:0.0030, Q6s:0.0006, Q8s:0.0017, QTs:0.0001, QJs:0.0028, QQ:0.0104, AQo:0.0007, K3s:0.0059, K5s:0.0002, K6s:0.0190, K7s:0.0006, K8s:0.0211, KTs:0.0350, KJs:0.0004, KK:0.4913, AKo:0.3706, A2s:0.2808, A3s:0.2100, A4s:0.1353, A5s:0.1062, A6s:0.1434, A7s:0.1165, A8s:0.1020, A9s:0.1365, ATs:0.1190, AJs:0.1506, AQs:0.1893, AKs:0.6690, AA:0.8565"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0001, A5o:0.0035, 65s:0.0001, 66:0.0297, 76s:0.0417, 77:0.0557, A7o:0.0002, 87s:0.0009, A8o:0.0008, A9o:0.0002, ATo:0.0140, JJ:0.0492, KJo:0.0141, AJo:0.0001, QQ:0.0110, KQo:0.0001, AQo:0.2090, K3s:0.0001, K4s:0.0021, K6s:0.0471, K7s:0.0121, K8s:0.0050, K9s:0.0312, KK:0.1148, AKo:0.0558, A2s:0.0997, A3s:0.0397, A4s:0.0749, A5s:0.0766, A6s:0.0741, A7s:0.0753, A8s:0.0204, A9s:0.0001, AKs:0.0700, AA:0.2302"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0075, A5o:0.0233, A6o:0.0003, 77:0.0001, A7o:0.0005, A8o:0.0008, A9o:0.0007, ATo:0.0110, JJ:0.0002, AJo:0.0003, AQo:0.0023, K6s:0.0001, K7s:0.0002, K9s:0.0049, KK:0.0794, AKo:0.0286, A2s:0.0803, A3s:0.0418, A4s:0.0636, A5s:0.0558, A6s:0.1117, A7s:0.0318, A8s:0.0156, AKs:0.0300, AA:0.1207"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0009, 88:0.0001, 99:0.0001, QQ:0.0014, K7s:0.0002, KQs:0.0001, KK, AKo:0.0011, A2s:0.0001, AQs:0.0004, AKs:0.0080, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0129, QQ:0.0030, KK:0.1942, AKo:0.0485, AKs:0.0672, AA:0.3509"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "TT:0.0001, J9s:0.0002, QJs:0.0001, QQ:0.0004, K7s:0.0004, KQs:0.0002, KK:0.1939, AKo:0.1077, A3s:0.0001, A8s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0031, AQs:0.3970, AKs:0.2364, AA:0.2893"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0081, 66:0.0003, 77:0.0002, A9o:0.0368, T9s:0.0002, TT:0.0011, ATo:0.0757, J8s:0.0016, JJ:0.0005, AJo:0.0188, Q8s:0.0002, QJs:0.0003, QQ:0.0002, AQo:0.0011, K5s:0.0008, K7s:0.0002, KJs:0.0008, KQs:0.0007, KK:0.6926, AKo:0.6506, A2s:0.1570, A3s:0.1000, A4s:0.3549, A5s:0.0845, A6s:0.0284, A7s:0.3039, A8s:0.3153, A9s:0.1629, ATs:0.5046, AJs:0.0534, AQs:0.3427, AKs:0.6680, AA:0.7107"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0007, A5o:0.0011, 65s:0.0001, 66:0.0297, A6o:0.0001, 76s:0.0478, 77:0.0586, A7o:0.0005, 87s:0.0011, A8o:0.0004, A9o:0.0022, ATo:0.0032, JJ:0.0522, KJo:0.0021, AJo:0.0001, QQ:0.0111, AQo:0.2160, K4s:0.0027, K6s:0.0484, K7s:0.0047, K8s:0.0016, K9s:0.0421, KK:0.1321, AKo:0.0737, A2s:0.0409, A3s:0.0218, A4s:0.0490, A5s:0.0362, A6s:0.0669, A7s:0.1208, A8s:0.0303, AKs:0.0914, AA:0.1428"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0003, A4o:0.0045, A5o:0.0134, 66:0.0001, A6o:0.0002, 76s:0.0001, 77:0.0001, A8o:0.0009, A9o:0.0021, ATo:0.0135, JJ:0.0001, AJo:0.0001, AQo:0.0069, K4s:0.0001, KK:0.0621, AKo:0.0107, A2s:0.1010, A3s:0.0431, A4s:0.0914, A5s:0.0768, A6s:0.0620, A7s:0.0323, A8s:0.0095, AKs:0.0086, AA:0.2081"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, JJ:0.0001, QQ:0.0004, KK, A6s:0.0001, A7s:0.0002, A8s:0.0001, AKs:0.0188, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0224, QQ:0.0057, KK:0.1942, AKo:0.0831, AKs:0.1000, AA:0.3509"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0438, K3o:0.0039, A3o:0.0024, K4o:0.0002, A4o:0.0137, 55:0.0001, K5o:0.0022, A5o:0.0002, 65s:0.0010, K6o:0.0016, A6o:0.0488, K7o:0.0002, A7o:0.0014, 88:0.0040, A8o:0.0037, 99:0.0005, A9o:0.0047, TT:0.0066, KTo:0.0004, ATo:0.0257, AJo:0.0054, QQ:0.0278, KQo:0.0029, AQo:0.2806, K2s:0.0017, K3s:0.0107, K4s:0.0935, K5s:0.0230, K6s:0.0823, K7s:0.0890, K8s:0.0725, K9s:0.0101, KTs:0.0053, KJs:0.0766, KQs:0.1149, KK:0.0015, AKo:0.3778, A2s:0.0009, A3s:0.0124, A4s:0.0626, A5s:0.0475, A6s:0.0062, A7s:0.0027, A8s:0.0139, A9s:0.0220, ATs:0.0484, AJs:0.1547, AQs:0.4386, AKs:0.1672, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "74s:0.0001, 75s:0.0001, A9o:0.0001, QQ:0.0001, K2s:0.0090, K3s:0.0064, K4s:0.0004, K5s:0.0553, K6s:0.0194, K7s:0.0776, K8s:0.0557, K9s:0.0095, KTs:0.1315, KJs:0.0839, KQs:0.0149, KK:0.9985, AKo:0.6222, A2s:0.0004, A3s:0.0249, A4s:0.0934, A5s:0.0001, A6s:0.0001, A8s:0.0076, ATs:0.0006, AJs:0.0006, AQs:0.0327, AKs:0.8328"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0063, A2o:0.0111, K3o:0.0017, A3o:0.0096, K4o:0.0191, A4o:0.0603, K5o:0.0001, A5o:0.0087, K6o:0.0083, A6o:0.0022, K7o:0.0063, A7o:0.0001, A8o:0.0003, A9o:0.0003, KTo:0.0053, ATo:0.0209, JJ:0.0945, KJo:0.0041, AJo:0.0227, QQ:0.1839, KQo:0.0267, AQo:0.0949, K2s:0.0135, K3s:0.1207, K4s:0.0766, K5s:0.0054, K6s:0.0334, K7s:0.0853, K8s:0.0628, K9s:0.0043, KTs:0.0475, KJs:0.0051, KQs:0.0188, AKo:0.0258, A2s:0.0063, A4s:0.1958, A5s:0.2366, A6s:0.1337, A7s:0.0038, A8s:0.2996, A9s:0.3537, ATs:0.0264, AJs:0.1028, AQs:0.3487, AKs:0.1260, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0033, JJ:0.0001, K3s:0.0001, K4s:0.0024, K5s:0.0001, K6s:0.0020, K8s:0.0069, KTs:0.1311, KJs:0.2487, KQs:0.0494, KK, AKo:0.9742, A3s:0.0041, A5s:0.0008, A6s:0.0153, A9s:0.0002, ATs:0.0002, AKs:0.8740"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0370, 66:0.0669, 77:0.2094, 88:0.2074, 99:0.0068, TT:0.0789, JJ:0.0391, QQ:0.6641, K3s:0.0021, K4s:0.0123, K6s:0.0433, K7s:0.0282, K8s:0.0061, K9s:0.0007, KTs:0.0747, KJs:0.0545, KQs:0.4065, A3s:0.0016, A6s:0.0002, A8s:0.1024, A9s:0.0384, ATs:0.6965, AJs:0.8500, AQs:0.7881"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0002, A5o:0.0575, A7o:0.0021, 88:0.0004, A8o:0.0026, TT:0.0163, KTo:0.0030, ATo:0.2088, JJ:0.0289, KJo:0.0003, AJo:0.0362, QQ:0.0487, KQo:0.0009, AQo:0.6701, K3s:0.0847, K6s:0.1354, K7s:0.0233, K8s:0.0110, K9s:0.0014, KTs:0.0641, AKo:0.0930, A2s:0.0177, A3s:0.0668, A4s:0.0408, A5s:0.1455, A6s:0.1861, A7s:0.0747, A8s:0.1436, A9s:0.1150, ATs:0.1766, AJs:0.1044, AQs:0.2086, AKs:0.3694, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.1456, 55:0.0527, 66:0.0954, 77:0.4015, 88:0.6024, 99:0.6078, TT:0.5723, KTo:0.0001, JJ:0.8132, QQ:0.2845, KQo:0.0002, K3s:0.0023, K4s:0.0040, K5s:0.0011, K6s:0.0598, K7s:0.2316, K8s:0.0097, K9s:0.1999, KTs:0.7050, KJs:0.8683, KQs:0.5280, KK, AKo:0.9070, A2s:0.2391, A3s:0.0937, A4s:0.4955, A5s:0.5734, A6s:0.1485, A7s:0.1371, A8s:0.5724, A9s:0.3643, ATs:0.1215, AJs:0.0406, AQs:0.0033, AKs:0.6306"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|HJ:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0002, A3o:0.0004, A4o:0.0052, A5o:0.0510, 66:0.0004, A6o:0.0014, A7o:0.0005, A8o:0.0067, A9o:0.0048, ATo:0.0588, KJo:0.0526, AJo:0.0133, KQo:0.0013, AQo:0.0887, K3s:0.0935, K4s:0.0463, K5s:0.0119, K6s:0.1944, K7s:0.1793, K8s:0.0529, K9s:0.0001, KTs:0.0001, KQs:0.0001, KK:0.1597, AKo:0.0403, A2s:0.2711, A3s:0.4008, A4s:0.0949, A5s:0.0047, A6s:0.1661, A7s:0.0549, A8s:0.0074, AKs:0.0396, AA:0.1680"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0034, A3o:0.0051, A4o:0.0143, A5o:0.0138, A6o:0.0006, A7o:0.0031, A8o:0.0014, A9o:0.0013, ATo:0.0105, AJo:0.0116, AQo:0.0011, K6s:0.0003, K7s:0.0002, K8s:0.0035, KK:0.5972, AKo:0.2502, A2s:0.4202, A3s:0.3702, A4s:0.0994, A5s:0.0042, A6s:0.2331, A7s:0.0492, A8s:0.0085, AKs:0.2327, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|HJ:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.7569, AKo:0.1577, AKs:0.2723, AA:0.5487"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "QQ:0.0003, KK:0.1010, A6s:0.0002, AJs:0.0002, AQs:0.1530, AKs:0.0007, AA:0.1921"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0435, A4o:0.0005, 55:0.0001, 65s:0.0150, 66:0.0090, 77:0.0356, A7o:0.0016, 87s:0.0029, A8o:0.0070, 99:0.0679, A9o:0.0018, TT:0.0877, ATo:0.0332, J8s:0.0028, JTs:0.0400, JJ:0.0293, QTs:0.0003, QJs:0.0001, QQ:0.2429, AQo:0.0007, K3s:0.0001, K6s:0.0001, K8s:0.0003, K9s:0.0017, KQs:0.0004, KK:0.7229, AKo:0.4516, A2s:0.1186, A3s:0.1098, A4s:0.1541, A5s:0.3040, A6s:0.1692, A7s:0.0853, A8s:0.2246, A9s:0.0171, ATs:0.0785, AJs:0.1681, AQs:0.0666, AKs:0.8819, AA:0.8079"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0048, A3o:0.0165, A4o:0.0064, A5o:0.0347, 66:0.0004, A6o:0.0023, A7o:0.0235, A8o:0.0203, A9o:0.0551, ATo:0.0638, AJo:0.0164, AQo:0.0733, K3s:0.0017, K6s:0.0002, K7s:0.0004, KK:0.5126, AKo:0.0827, A2s:0.2899, A3s:0.0701, A4s:0.0341, A5s:0.0036, A6s:0.0933, A7s:0.0565, A8s:0.0103, AKs:0.0907, AA:0.1699"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0324, A3o:0.0119, A4o:0.0490, A5o:0.0374, A6o:0.0012, A7o:0.0286, A8o:0.0071, A9o:0.0001, ATo:0.0015, AJo:0.0017, AQo:0.0078, K6s:0.0004, KK:0.2396, AKo:0.2078, A2s:0.3791, A3s:0.6780, A4s:0.1369, A5s:0.0051, A6s:0.2727, A7s:0.0205, A8s:0.0054, AKs:0.1816, AA:0.3788"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, QQ:0.0040, KTs:0.0002, KK:0.9998, AKo:0.0001, A7s:0.0001, AKs:0.0034, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.7569, AKo:0.2682, AKs:0.2707, AA:0.5487"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "QJs:0.0001, KK:0.0103, AKo:0.0067, A2s:0.0001, A6s:0.0001, AA:0.0032"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0067, A5o:0.0006, 66:0.0043, 76s:0.0074, 77:0.0063, 86s:0.0002, 87s:0.0032, 98s:0.0014, A9o:0.0021, TT:0.0049, ATo:0.0136, J8s:0.0001, JTs:0.0002, JJ:0.0096, Q9s:0.0001, QQ:0.0240, K3s:0.0003, K4s:0.0002, K6s:0.0002, KK:0.0167, AKo:0.7838, A2s:0.0445, A3s:0.0003, A4s:0.0316, A5s:0.0001, A6s:0.1030, A7s:0.0119, A8s:0.0341, A9s:0.0065, ATs:0.2771, AJs:0.0142, AQs:0.0291, AKs:0.8907, AA:0.9968"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0068, A3o:0.0096, A4o:0.0093, A5o:0.0140, 66:0.0003, A6o:0.0016, A7o:0.0158, A8o:0.0153, A9o:0.0137, KTo:0.0016, ATo:0.0207, KJo:0.0033, AJo:0.0073, KQo:0.0009, AQo:0.0878, K3s:0.0025, K4s:0.0049, K5s:0.0009, K6s:0.0073, K7s:0.0168, K8s:0.0006, KK:0.2843, AKo:0.0192, A2s:0.2157, A3s:0.2204, A4s:0.0593, A5s:0.0042, A6s:0.1472, A7s:0.0505, A8s:0.0078, AKs:0.0252, AA:0.0888"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0186, A3o:0.0029, A4o:0.0181, A5o:0.0097, 66:0.0001, A6o:0.0008, A7o:0.0076, A8o:0.0012, A9o:0.0022, ATo:0.0023, AQo:0.0010, K4s:0.0002, K6s:0.0002, K7s:0.0003, KK:0.4726, AKo:0.2713, A2s:0.4319, A3s:0.4943, A4s:0.1213, A5s:0.0045, A6s:0.1806, A7s:0.0489, A8s:0.0080, AKs:0.2471, AA:0.4599"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0001, KK, A4s:0.0001, AQs:0.0005, AKs:0.3354, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.7569, AKo:0.2390, AKs:0.2720, AA:0.5487"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "53s:0.0002, 65s:0.0004, 77:0.0002, A7o:0.0001, 99:0.3803, TT:0.2384, JJ:0.1032, QQ:0.2562, K3s:0.0001, K7s:0.0001, KK:0.9854, AKo:0.1243, AJs:0.0002, AQs:0.0001, AKs:0.4277, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, 77:0.0003, 99:0.2258, T7s:0.0001, T8s:0.0001, TT:0.1152, J5s:0.0002, J8s:0.0002, JJ:0.1768, QQ:0.0310, K3s:0.0001, KJs:0.0001, KQs:0.0001, KK:0.9900, AKo:0.0357, A3s:0.0001, AKs:0.1783, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.1809, TT:0.2344, JJ:0.1885, QQ:0.2052, KK, AKo:0.4343, AKs:0.4907, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@53.32|BB:CALL@52.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0157, A5o:0.0005, 65s:0.0116, 66:0.0015, 76s:0.0156, 77:0.0036, 87s:0.0176, 88:0.0006, A8o:0.0023, 98s:0.0038, 99:0.0508, A9o:0.0010, T7s:0.0013, T8s:0.0052, T9s:0.0813, TT:0.0673, JTo:0.0004, KTo:0.0020, ATo:0.0035, J8s:0.0008, JTs:0.0668, JJ:0.0045, QJo:0.0009, KJo:0.0008, AJo:0.0001, Q7s:0.0002, Q8s:0.0074, Q9s:0.0046, QTs:0.0034, QJs:0.0053, QQ:0.0081, AQo:0.0008, K3s:0.0077, K4s:0.0029, K5s:0.0063, K6s:0.0059, K7s:0.0020, K8s:0.0078, K9s:0.0033, KTs:0.0081, KQs:0.0019, KK:0.1729, AKo:0.0001, A2s:0.0982, A3s:0.0015, A4s:0.0141, A5s:0.0062, A6s:0.0012, A7s:0.0174, A9s:0.0029, ATs:0.0061, AJs:0.0024, AQs:0.0045, AKs:0.0936, AA:0.9928"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@53.32|SB:CALL@52.82",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0065, 55:0.0247, A5o:0.0097, 65s:0.0012, 66:0.0013, 76s:0.0046, 77:0.0352, 88:0.0453, A8o:0.0053, 97s:0.0272, 99:0.0026, T9s:0.0033, TT:0.0031, JTo:0.0010, QTo:0.0001, ATo:0.0026, J9s:0.0009, JTs:0.0117, JJ:0.0618, QJo:0.0014, KJo:0.0001, Q6s:0.0016, Q8s:0.0032, Q9s:0.0134, QJs:0.0013, QQ:0.0337, KQo:0.0008, AQo:0.0004, K3s:0.0047, K4s:0.0077, K5s:0.0001, K6s:0.0076, K8s:0.0024, KJs:0.0511, KK:0.0302, AKo:0.0064, A2s:0.0005, A4s:0.0006, A6s:0.0103, A7s:0.0143, ATs:0.0049, AJs:0.0326, AQs:0.0018, AKs:0.0043, AA:0.9510"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "44:0.0004, 54s:0.0006, 55:0.0002, 65s:0.0340, 66:0.0356, 76o:0.0001, 75s:0.0006, 76s:0.0005, 77:0.0146, 86s:0.0001, 88:0.0460, Q8o:0.0002, 95s:0.0001, 97s:0.0001, 99:0.0848, Q9o:0.0001, T8s:0.0001, TT:0.0030, J6s:0.0002, JJ:0.2876, QJo:0.0002, KJo:0.0004, Q3s:0.0003, Q5s:0.0011, Q8s:0.0017, QTs:0.0003, QQ:0.3547, KQo:0.1125, AQo:0.1559, K2s:0.0017, K3s:0.0168, K4s:0.0001, K5s:0.1515, K6s:0.0367, K7s:0.0065, K8s:0.0002, K9s:0.0037, KJs:0.1726, KQs:0.0589, KK:0.0597, AKo:0.0009, A3s:0.0513, A4s:0.1280, A5s:0.0386, A6s:0.0035, A7s:0.2254, A8s:0.1578, A9s:0.0483, ATs:0.3136, AJs:0.4587, AQs:0.2867, AKs:0.0997, AA:0.2289"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0001, Q3o:0.0001, K3o:0.0008, A3o:0.0144, 44:0.0001, Q4o:0.0001, K4o:0.0209, A4o:0.0219, 55:0.0611, Q5o:0.0001, K5o:0.0310, A5o:0.0372, 66:0.0336, A6o:0.0010, A7o:0.0010, 88:0.0518, A8o:0.0006, 99:0.0226, A9o:0.0003, TT:0.0239, QTo:0.0002, JJ:0.1838, KJo:0.0001, AJo:0.0002, Q3s:0.0002, Q4s:0.0011, Q6s:0.0035, Q7s:0.0193, Q8s:0.0038, Q9s:0.0161, QTs:0.0266, QJs:0.0052, QQ:0.4922, KQo:0.8307, AQo:0.7477, K2s:0.1751, K3s:0.1980, K4s:0.2146, K5s:0.4011, K6s:0.2020, K7s:0.2377, K8s:0.1740, K9s:0.1616, KTs:0.0710, KJs:0.1486, KQs:0.3785, KK:0.9064, AKo:0.0811, A2s:0.3094, A3s:0.5224, A4s:0.5636, A5s:0.6676, A6s:0.3588, A7s:0.1063, A8s:0.3008, A9s:0.0254, ATs:0.0478, AJs:0.0912, AQs:0.6799, AKs:0.2920, AA:0.4773"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0010, A2o:0.1221, Q3o:0.0026, K3o:0.0019, A3o:0.1201, Q4o:0.0001, K4o:0.0008, 54s:0.0011, 55:0.0010, K5o:0.0011, A5o:0.0256, 64s:0.0001, K6o:0.0020, A6o:0.0100, 77:0.0001, A7o:0.0138, Q8o:0.0001, K9o:0.0002, A9o:0.0022, T6s:0.0001, TT:0.0077, QTo:0.0003, KTo:0.0009, JJ:0.0091, Q3s:0.0082, Q5s:0.0107, Q6s:0.0143, Q8s:0.0003, Q9s:0.0013, QTs:0.0141, QJs:0.0001, QQ:0.1526, KQo:0.0453, AQo:0.0964, K2s:0.0009, K3s:0.0140, K4s:0.0162, K5s:0.0597, K6s:0.0016, K7s:0.0028, K8s:0.0132, K9s:0.0004, KTs:0.0013, KJs:0.0003, KQs:0.0128, KK:0.0339, AKo:0.0183, A2s:0.2307, A3s:0.0596, A4s:0.1913, A5s:0.0841, A6s:0.2516, A7s:0.1380, A8s:0.0217, A9s:0.0158, ATs:0.0717, AJs:0.0032, AQs:0.0325, AKs:0.1812, AA:0.2938"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, 33:0.0001, 44:0.0002, 55:0.0002, 66:0.0002, 88:0.0002, JJ:0.0004, QTs:0.0001, QQ:0.0005, KQo:0.0112, K2s:0.1508, K3s:0.2956, K4s:0.2383, K5s:0.1281, K6s:0.4272, K7s:0.2280, K8s:0.2311, K9s:0.3383, KTs:0.3554, KJs:0.3100, KQs:0.5488, AKo:0.8997, A2s:0.1512, A3s:0.1579, A4s:0.1023, A5s:0.0959, A6s:0.0019, A7s:0.0131, A8s:0.0075, A9s:0.0144, AJs:0.0007, AQs:0.0009, AKs:0.4271"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0039, Q2o:0.0001, K2o:0.0111, A2o:0.1260, 33:0.0008, K3o:0.0315, A3o:0.2564, Q4o:0.0008, K4o:0.0303, A4o:0.3148, 52s:0.0006, 55:0.0017, Q5o:0.0028, K5o:0.0264, A5o:0.1590, 66:0.0032, Q6o:0.0006, K6o:0.0602, A6o:0.1138, 77:0.0032, Q7o:0.0005, A7o:0.0045, A8o:0.0026, A9o:0.0090, TT:0.0001, QTo:0.0001, JJ:0.0009, Q2s:0.0112, Q3s:0.0240, Q4s:0.0003, Q5s:0.0159, Q6s:0.0259, Q7s:0.0034, Q8s:0.0241, Q9s:0.0042, QTs:0.0028, QJs:0.0143, QQ:0.4525, KQo:0.4207, AQo:0.6964, K2s:0.2157, K3s:0.1746, K4s:0.2124, K5s:0.1301, K6s:0.0287, K7s:0.0523, K8s:0.0028, K9s:0.0681, KTs:0.0104, KQs:0.0547, KK:0.5346, AKo:0.0846, A2s:0.6985, A3s:0.7167, A4s:0.4046, A5s:0.4623, A6s:0.3377, A7s:0.0164, A8s:0.1382, A9s:0.0974, ATs:0.0003, AJs:0.0001, AQs:0.8987, AKs:0.5583, AA:0.9470"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0519, A2o:0.0024, K3o:0.0207, A3o:0.0142, K4o:0.0241, A4o:0.0150, Q5o:0.0003, K5o:0.0300, A5o:0.0001, K6o:0.0188, Q7o:0.0001, K7o:0.0169, A7o:0.0006, Q8o:0.0004, K9o:0.0015, A9o:0.0005, QTo:0.0001, KTo:0.0001, JJ:0.0024, Q2s:0.0165, Q4s:0.0029, Q5s:0.0031, Q7s:0.0004, Q8s:0.0010, Q9s:0.0006, QTs:0.0006, QJs:0.0001, QQ:0.5473, KQo:0.4583, AQo:0.3035, K2s:0.0041, K3s:0.0194, K4s:0.0439, K5s:0.0012, K6s:0.0009, K8s:0.0009, K9s:0.0040, KTs:0.0004, KQs:0.0001, KK:0.4654, AKo:0.0016, A2s:0.0179, A3s:0.0247, A4s:0.0007, A5s:0.0003, A6s:0.0026, A7s:0.0004, A8s:0.0020, A9s:0.0098, ATs:0.0019, AQs:0.0942, AKs:0.0269, AA:0.0530"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0010, 44:0.0028, A4o:0.0004, 55:0.0001, 66:0.0076, 76s:0.0019, 77:0.0049, JJ:0.0001, Q4s:0.0005, Q8s:0.0001, QTs:0.0005, QQ:0.0001, KQo:0.0773, AQo:0.0001, K2s:0.1867, K3s:0.4121, K4s:0.2632, K5s:0.3323, K6s:0.5251, K7s:0.2183, K8s:0.1548, K9s:0.3430, KTs:0.3699, KJs:0.1951, KQs:0.9451, AKo:0.9138, A2s:0.1470, A3s:0.1295, A4s:0.2558, A5s:0.0939, A6s:0.0133, A7s:0.0399, A8s:0.0001, A9s:0.0108, ATs:0.0001, AQs:0.0069, AKs:0.4147"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9998, 33:0.9944, 43s:0.9368, 44:0.9974, 54o:0.0103, 52s:0.6603, 53s:0.9861, 54s:0.9621, 55:0.9991, 65o:0.1314, 63s:0.0805, 64s:0.9725, 65s:0.9741, 66:0.9921, 74s:0.0242, 75s:0.9272, 76s:0.9195, 77, 85s:0.8658, 86s:0.8841, 87s:0.9867, 88, 92s:0.0005, 95s:0.0994, 96s:0.9433, 97s:0.9590, 98s:0.9533, 99:0.9992, T7s:0.4055, T8s:0.9468, T9s:0.9898, TT:0.9983, KTo:0.0005, J6s:0.0001, J7s:0.0944, J8s:0.6056, J9s:0.8511, JTs:0.9825, JJ:0.9998, KJo:0.8270, AJo:0.9717, Q5s:0.0003, Q6s:0.0058, Q7s:0.0014, Q9s:0.0001, QTs:0.9239, QJs:0.9883, QQ:0.8362, KQo:0.2245, AQo:0.0224, K2s:0.0038, K3s:0.0860, K4s:0.5804, K5s:0.0815, K6s:0.2217, K7s:0.2215, K8s:0.5768, K9s:0.4841, KTs:0.9452, KJs:0.9994, KQs:0.7644, A2s:0.1820, A3s:0.6848, A4s:0.7225, A5s:0.3954, A6s:0.6802, A7s:0.7284, A8s:0.7874, A9s:0.9926, ATs:0.9968, AJs:0.9989, AQs:0.2431"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0019, K2o:0.1029, A2o:0.0200, 33:0.0037, Q3o:0.0019, K3o:0.0454, A3o:0.0582, 44:0.0025, K4o:0.0265, A4o:0.0297, 54s:0.0001, 55:0.0001, Q5o:0.0005, K5o:0.0762, A5o:0.2732, 65s:0.0071, 66:0.0069, K6o:0.1598, A6o:0.0110, 76s:0.0001, Q7o:0.0004, A7o:0.0088, 86s:0.0014, Q8o:0.0003, K8o:0.1426, Q9o:0.0003, K9o:0.0034, T8s:0.0001, TT:0.0001, KTo:0.0003, QJo:0.0004, KJo:0.0245, Q2s:0.0125, Q3s:0.0164, Q4s:0.0381, Q5s:0.0366, Q6s:0.2432, Q7s:0.0906, Q8s:0.0002, Q9s:0.0096, QTs:0.0317, QJs:0.0009, QQ:0.1554, KQo:0.7600, AQo:0.9711, K2s:0.3399, K3s:0.6255, K4s:0.1583, K5s:0.5418, K6s:0.4576, K7s:0.5249, K8s:0.1167, K9s:0.2103, KTs:0.0013, KJs:0.0001, KQs:0.0676, KK:0.9719, AKo:0.4239, A2s:0.6084, A3s:0.1118, A4s:0.2178, A5s:0.4655, A6s:0.1330, A7s:0.2368, A8s:0.1942, A9s:0.0016, ATs:0.0005, AJs:0.0002, AQs:0.6363, AKs:0.6089, AA:0.7367"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "Q2o:0.0003, K2o:0.0068, A2o:0.0063, K3o:0.0028, A3o:0.1505, K4o:0.0057, A4o:0.0027, Q5o:0.0002, K5o:0.0083, A5o:0.1323, 62s:0.0001, K6o:0.0032, A6o:0.0005, 75s:0.0002, A7o:0.0039, K8o:0.0045, A8o:0.0015, A9o:0.0432, KTo:0.0121, ATo:0.0015, J7s:0.0001, JJ:0.0002, AJo:0.0004, Q2s:0.0001, Q3s:0.0003, Q4s:0.0001, Q5s:0.0053, Q6s:0.0016, Q7s:0.0002, QTs:0.0003, QJs:0.0003, QQ:0.0080, KQo:0.0071, AQo:0.0061, K2s:0.0074, K3s:0.0009, K4s:0.0147, K5s:0.0058, K6s:0.0004, K7s:0.0147, K8s:0.0005, K9s:0.0133, KJs:0.0001, KQs:0.0001, KK:0.0281, AKo:0.0681, A2s:0.0548, A3s:0.0097, A4s:0.0045, A5s:0.0010, A6s:0.0523, A7s:0.0010, A8s:0.0074, A9s:0.0009, ATs:0.0002, AJs:0.0001, AQs:0.1204, AKs:0.0237, AA:0.2633"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0018, Q2s:0.0001, QQ:0.0004, KQo:0.0083, AQo:0.0005, K2s:0.4624, K3s:0.2738, K4s:0.2445, K5s:0.3572, K6s:0.3022, K7s:0.2294, K8s:0.3002, K9s:0.2662, KTs:0.0429, KJs:0.0001, KQs:0.1678, AKo:0.5080, A2s:0.1482, A3s:0.1933, A4s:0.0504, A5s:0.1369, A6s:0.0353, A7s:0.0320, A8s:0.0053, A9s:0.0001, ATs:0.0012, AQs:0.0002, AKs:0.3673"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0224, 55:0.0001, 66:0.0280, 77:0.0003, 88:0.1129, QQ:0.2437, AQo:0.0165, KJs:0.0075, KQs:0.0657, KK:0.1172, A5s:0.0001, A6s:0.0136, A7s:0.0012, A8s:0.0002, ATs:0.0005, AJs:0.0053, AQs:0.9627, AKs:0.0003, AA:0.0008"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0015, 55:0.0005, A5o:0.2132, 77:0.0025, A7o:0.1350, 88:0.0095, A8o:0.0265, 99:0.0006, A9o:0.0340, ATo:0.0582, J8s:0.0001, J9s:0.0002, JJ:0.0003, AJo:0.1361, QQ:0.0106, AQo:0.1292, K4s:0.0004, K5s:0.0001, K6s:0.0001, KTs:0.0005, KJs:0.0015, AKo:0.0196, A2s:0.1097, A3s:0.0631, A4s:0.0339, A5s:0.0471, A6s:0.1071, A7s:0.0755, A8s:0.1424, A9s:0.2314, ATs:0.0635, AJs:0.0099, AQs:0.0001, AKs:0.5097, AA:0.9991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0116, A5o:0.0148, 65s:0.0006, 66:0.0076, 76s:0.0004, 77:0.0042, A7o:0.0006, 87s:0.0074, 88:0.1949, 99:0.0132, T8s:0.0002, ATo:0.0023, JJ:0.0071, AJo:0.0079, Q8s:0.0001, QJs:0.0001, QQ:0.0080, KQo:0.0006, K3s:0.1487, K4s:0.2100, K5s:0.2070, K6s:0.1474, K7s:0.0234, K8s:0.1409, K9s:0.0376, KTs:0.0968, KJs:0.3160, KQs:0.0294, KK:0.8828, AKo:0.9803, A2s:0.5497, A3s:0.3827, A4s:0.6019, A5s:0.5860, A6s:0.4558, A7s:0.4628, A8s:0.3379, A9s:0.2488, ATs:0.4223, AJs:0.5618, AQs:0.0317, AKs:0.4900"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0047, 65s:0.0016, 66:0.1793, 76s:0.0003, 77:0.2764, 88:0.4753, 99:0.0053, TT:0.2314, JJ:0.3817, QQ:0.9625, AQo:0.5361, K6s:0.0001, KTs:0.1216, KJs:0.0243, KQs:0.8478, KK:0.0001, A3s:0.0171, A4s:0.0010, A5s:0.4498, A7s:0.0633, A8s:0.0978, A9s:0.0018, ATs:0.0253, AJs:0.0040, AQs:0.9855"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0001, TT:0.0004, ATo:0.0016, JJ:0.0007, AJo:0.0078, QQ:0.0013, KQo:0.0165, AQo:0.0136, K6s:0.0003, K9s:0.1661, KTs:0.1714, KJs:0.6415, KQs:0.0130, KK:0.9183, A2s:0.0009, A3s:0.0461, A4s:0.0709, A5s:0.0189, A6s:0.0001, A7s:0.0465, A8s:0.0884, A9s:0.1422, ATs:0.0460, AJs:0.0541, AQs:0.0135"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0005, 77:0.0003, QQ:0.0162, AQo:0.0218, KTs:0.0006, A5s:0.0002, A8s:0.0012, A9s:0.0006, ATs:0.0003, AQs:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0273, 66:0.0209, 76s:0.0005, 77:0.0018, 88:0.0142, JJ:0.0516, QQ:0.0565, KQo:0.0457, AQo:0.3193, K4s:0.0003, K7s:0.0001, K9s:0.0001, KK:0.1985, A2s:0.0297, A3s:0.1347, A4s:0.0062, A5s:0.0524, A8s:0.3406, A9s:0.3857, ATs:0.0235, AJs:0.1896, AQs:0.1244, AKs:0.0164, AA:0.4287"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0070, A4o:0.0005, 55:0.0452, A5o:0.0180, 65s:0.0086, 66:0.0248, 76s:0.0009, 77:0.1190, A7o:0.0179, 86s:0.0002, 88:0.1159, A8o:0.0656, 97s:0.0012, 98s:0.0008, 99:0.0456, A9o:0.0322, T7s:0.0028, T8s:0.0012, T9s:0.0083, TT:0.0815, KTo:0.0128, ATo:0.0186, J8s:0.0005, JTs:0.0316, JJ:0.0407, KJo:0.0008, AJo:0.0234, Q6s:0.0007, Q9s:0.0110, QJs:0.0030, QQ:0.1029, KQo:0.0373, AQo:0.0951, K2s:0.0001, K3s:0.0018, K4s:0.0619, K5s:0.0373, K6s:0.1097, K7s:0.0804, K8s:0.0681, K9s:0.1442, KTs:0.1326, KJs:0.0965, KQs:0.0603, KK:0.8014, AKo:0.9997, A2s:0.0740, A3s:0.5128, A4s:0.1377, A5s:0.6428, A6s:0.7017, A7s:0.2007, A8s:0.3814, A9s:0.1907, ATs:0.8168, AJs:0.3538, AQs:0.6933, AKs:0.9827, AA:0.5713"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0387, 88:0.0907, 99:0.0357, JTs:0.0001, JJ:0.0336, QQ:0.1119, AQo:0.1064, K9s:0.0001, KTs:0.0137, KJs:0.0001, KQs:0.0986, KK:0.5011, A4s:0.0481, A5s:0.0904, A7s:0.0135, A8s:0.2351, A9s:0.0141, ATs:0.1357, AJs:0.2537, AQs:0.4785"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0001, 77:0.0008, 88:0.0010, 99:0.0096, TT:0.0676, JTs:0.0001, JJ:0.0011, QQ:0.5829, AQo:0.0939, K9s:0.0009, KTs:0.0024, KJs:0.0002, KQs:0.0003, KK:0.4174, A3s:0.0039, A4s:0.1047, A5s:0.2073, A6s:0.0025, A7s:0.0051, A8s:0.0343, A9s:0.2466, ATs:0.0448, AJs:0.3922, AQs:0.4653"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, TT:0.0002, JJ:0.1928, QQ:0.0381, KK, AKo:0.9994, AQs:0.0002, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0018, QQ:0.3750, KK:0.9185"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0508, 66:0.0012, 88:0.0379, QQ:0.2608, AQo:0.0178, K3s:0.0002, KQs:0.1362, KK:0.0165, A8s:0.0001, AJs:0.0004, AQs:0.5009, AKs:0.0017, AA:0.0773"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0355, A7o:0.0058, A8o:0.0861, 99:0.0003, A9o:0.1041, T8s:0.0009, KTo:0.0001, ATo:0.0174, JTs:0.0002, AJo:0.0190, QQ:0.0092, AQo:0.1855, K3s:0.0001, K4s:0.0001, K5s:0.0045, K7s:0.0023, KTs:0.0001, KJs:0.0004, AKo:0.0065, A2s:0.0356, A3s:0.2570, A4s:0.1109, A5s:0.0061, A6s:0.1385, A7s:0.0568, A8s:0.2541, A9s:0.1087, ATs:0.3241, AJs:0.0149, AQs:0.0902, AKs:0.2911, AA:0.9227"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 65s:0.0001, 77:0.0014, 86s:0.0002, 87s:0.0012, 99:0.0001, T8s:0.0019, TT:0.0009, KTo:0.0003, J9s:0.0001, JJ:0.0067, KJo:0.0005, AJo:0.0002, QQ:0.0030, KQo:0.0012, K2s:0.0001, K3s:0.0267, K4s:0.0583, K5s:0.0187, K6s:0.3460, K7s:0.1561, K8s:0.3080, K9s:0.7579, KTs:0.5204, KJs:0.2617, KQs:0.2203, KK:0.9835, AKo:0.9935, A2s:0.4093, A3s:0.0915, A4s:0.3533, A5s:0.7955, A6s:0.3767, A7s:0.2153, A8s:0.1262, A9s:0.3331, ATs:0.1259, AJs:0.1778, AQs:0.0136, AKs:0.7072"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0300, 66:0.1437, 76s:0.0147, 77:0.0363, 88:0.1480, 99:0.0418, JTs:0.0001, JJ:0.0196, QQ:0.4331, AQo:0.1006, KTs:0.0354, KJs:0.0373, KQs:0.2142, KK:0.0002, A4s:0.0397, A5s:0.0516, A6s:0.0008, A7s:0.0142, A8s:0.0005, A9s:0.0037, ATs:0.0021, AJs:0.0106, AQs:0.5344"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "ATo:0.0002, AJo:0.0006, AQo:0.0002, K6s:0.0002, K9s:0.0031, KTs:0.0045, KJs:0.0052, KQs:0.0012, KK:0.0382, A3s:0.0001, A4s:0.0003, A7s:0.0001, A8s:0.0010, A9s:0.0012, ATs:0.0003, AJs:0.0011, AQs:0.0011"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0024, 77:0.0020, 88:0.0355, 99:0.0643, TT:0.1038, JJ:0.0931, QQ:0.5154, AQo:0.2279, K6s:0.0057, K9s:0.1349, KTs:0.4061, KJs:0.2231, KQs:0.0116, KK:0.8802, A2s:0.0013, A3s:0.1187, A4s:0.3345, A5s:0.3791, A6s:0.0031, A7s:0.0477, A8s:0.3024, A9s:0.5857, ATs:0.6595, AJs:0.5891, AQs:0.4639"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.1356, QQ:0.6311, AQo:0.1179, KJs:0.0005, KQs:0.0693, KK:0.0016, AKo:0.0250, A3s:0.0004, A4s:0.0017, A5s:0.0012, A6s:0.0255, A7s:0.0215, A8s:0.0037, AJs:0.0038, AQs:0.4622, AKs:0.2884, AA:0.2298"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0033, A4o:0.0001, 55:0.0112, A5o:0.0648, 66:0.0142, 76s:0.0048, 77:0.0007, A7o:0.0002, 86s:0.0001, 87s:0.0011, 88:0.0005, A8o:0.0015, 97s:0.0005, 98s:0.0024, 99:0.0011, A9o:0.0021, T8s:0.0001, T9s:0.0001, TT:0.0124, KTo:0.0313, ATo:0.0174, J8s:0.0001, J9s:0.0001, JJ:0.0162, KJo:0.2216, AJo:0.0082, Q8s:0.0004, Q9s:0.0030, QTs:0.0012, QQ:0.1135, KQo:0.4293, AQo:0.1035, K2s:0.0018, K3s:0.0804, K4s:0.1273, K5s:0.2335, K6s:0.3074, K7s:0.2261, K8s:0.2961, K9s:0.2594, KTs:0.3325, KJs:0.4652, KQs:0.3066, KK:0.9984, AKo:0.8979, A2s:0.0418, A3s:0.3292, A4s:0.4646, A5s:0.7049, A6s:0.0940, A7s:0.1627, A8s:0.4638, A9s:0.1308, ATs:0.5277, AJs:0.2501, AQs:0.1277, AKs:0.7088, AA:0.7702"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "QQ:0.1071, AQo:0.0175, KTs:0.0005, KQs:0.0001, A8s:0.0002, ATs:0.0135, AJs:0.0036, AQs:0.1429"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0016, 66:0.0062, 76s:0.0011, 77:0.0087, 88:0.0098, 99:0.0324, TT:0.0261, JJ:0.0061, AJo:0.0092, QJs:0.0049, QQ:0.4083, KQo:0.0598, AQo:0.1926, K6s:0.0015, K9s:0.1952, KTs:0.1268, KJs:0.1000, KQs:0.1206, KK:0.9185, A2s:0.0007, A3s:0.0187, A4s:0.3107, A5s:0.1817, A6s:0.0019, A7s:0.0655, A8s:0.1434, A9s:0.0935, ATs:0.1261, AJs:0.1872, AQs:0.6981"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.3252, KK, AKo:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.4265, KK:0.9185"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@5.5",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0521, 65s:0.0102, 66:0.0219, 76s:0.0081, 88:0.1352, 97s:0.0009, 98s:0.0002, 99:0.0001, JTs:0.0518, JJ:0.0014, QJs:0.0003, QQ:0.5890, AQo:0.2462, K3s:0.0003, K7s:0.0040, K8s:0.0041, K9s:0.0202, KTs:0.0250, KJs:0.0256, KQs:0.0027, KK:0.2199, AKo:0.0002, A2s:0.0002, A3s:0.0130, A6s:0.0198, A7s:0.0002, A8s:0.0001, ATs:0.0006, AJs:0.0001, AQs:0.0524, AKs:0.0039, AA:0.0232"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "44:0.0273, A4o:0.0004, 55:0.0160, A5o:0.0251, 65s:0.1111, 66:0.0009, 76s:0.0021, A7o:0.0092, 87s:0.0004, 88:0.0829, A8o:0.0176, 97s:0.0052, 98s:0.0002, A9o:0.0002, T7s:0.0001, T8s:0.0003, T9s:0.0001, TT:0.0938, KTo:0.0003, J9s:0.0004, JTs:0.0036, JJ:0.0100, AJo:0.0072, Q6s:0.0001, QTs:0.0005, QJs:0.0207, QQ:0.3757, KQo:0.0042, AQo:0.6710, K3s:0.0315, K4s:0.0003, K6s:0.0034, K7s:0.0225, K8s:0.0140, K9s:0.0100, KTs:0.0005, KJs:0.0844, KQs:0.0422, KK:0.0017, AKo:0.0649, A2s:0.1310, A3s:0.2401, A4s:0.0728, A5s:0.0385, A6s:0.2170, A7s:0.3513, A8s:0.0546, A9s:0.1433, ATs:0.0099, AJs:0.0897, AQs:0.7975, AKs:0.1613, AA:0.9727"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0504, 55:0.0505, A5o:0.0077, 65s:0.0226, 66:0.0104, 76s:0.0055, 77:0.0062, 87s:0.0120, 88:0.0750, A8o:0.0042, 97s:0.0046, 99:0.0017, A9o:0.0012, T7s:0.0001, T8s:0.0003, T9s:0.0003, TT:0.0010, KTo:0.0011, JTs:0.0036, JJ:0.0026, KJo:0.0045, AJo:0.0030, QTs:0.0087, QQ:0.0260, KQo:0.0038, AQo:0.0004, K2s:0.0020, K3s:0.1942, K4s:0.0921, K5s:0.2024, K6s:0.4002, K7s:0.2234, K8s:0.0170, K9s:0.1934, KTs:0.2182, KJs:0.2761, KQs:0.0014, KK:0.7784, AKo:0.9344, A2s:0.1936, A3s:0.4879, A4s:0.8527, A5s:0.6612, A6s:0.4491, A7s:0.0432, A8s:0.4898, A9s:0.6324, ATs:0.1697, AJs:0.7612, AQs:0.0094, AKs:0.8346, AA:0.0041"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@5.5",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0004, 54s:0.0014, 55:0.1455, 65s:0.0190, 66:0.4007, 76s:0.0153, 77:0.6210, 88:0.6267, 99:0.4122, TT:0.1165, JTs:0.3523, JJ:0.9169, QTs:0.0907, QJs:0.1953, QQ:0.7533, KQo:0.1385, AQo:0.1318, K6s:0.0120, K9s:0.3450, KTs:0.5065, KJs:0.7525, KQs:0.7871, KK:0.1159, A2s:0.0003, A3s:0.0691, A4s:0.1695, A5s:0.6118, A6s:0.0063, A7s:0.1444, A8s:0.3156, A9s:0.4370, ATs:0.3357, AJs:0.6247, AQs:0.4070"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "65s:0.0009, 66:0.0133, 76s:0.0001, 77:0.0166, 88:0.0071, 99:0.0140, TT:0.0002, ATo:0.0001, JTs:0.0003, JJ:0.0001, AJo:0.0428, QTs:0.0004, QQ:0.0016, KQo:0.0573, AQo:0.0343, K6s:0.0028, K9s:0.0258, KTs:0.0744, KJs:0.0039, KQs:0.0048, KK:0.3437, A2s:0.0006, A3s:0.0207, A4s:0.0355, A5s:0.0132, A6s:0.0004, A7s:0.0100, A8s:0.0215, A9s:0.0649, ATs:0.0277, AJs:0.2631, AQs:0.0156"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0006, 66:0.0025, 77:0.0027, 88:0.0015, 99:0.0015, TT:0.0004, JJ:0.0030, AJo:0.0002, QTs:0.0003, QQ:0.2256, KQo:0.0044, AQo:0.6380, K9s:0.0668, KTs:0.0058, KJs:0.0001, KQs:0.0755, KK:0.4589, A2s:0.0010, A3s:0.0392, A4s:0.1357, A5s:0.1680, A6s:0.0013, A7s:0.0483, A8s:0.0771, A9s:0.1413, ATs:0.4613, AJs:0.0103, AQs:0.5765"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@8",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0002, 66:0.0595, 77:0.0025, 88:0.0003, 97s:0.0001, JJ:0.0002, QQ:0.1018, AQo:0.0019, K7s:0.0004, KJs:0.0001, KQs:0.0285, KK:0.0008, AKo:0.0010, A3s:0.0002, A6s:0.0002, A8s:0.0001, A9s:0.0038, ATs:0.0037, AJs:0.0002, AQs:0.2255, AKs:0.0002, AA:0.0382"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A4o:0.0002, A5o:0.0035, 65s:0.0006, 77:0.0010, A7o:0.0002, 86s:0.0001, 87s:0.0026, A8o:0.0009, 98s:0.0036, 99:0.0024, A9o:0.0004, T7s:0.0001, T8s:0.0024, ATo:0.0008, JTs:0.0003, JJ:0.0036, QJo:0.0001, KJo:0.0021, AJo:0.0321, QTs:0.0029, QQ:0.4264, AQo:0.5576, K3s:0.0005, K4s:0.0002, K5s:0.0058, K6s:0.0001, K7s:0.0060, K8s:0.0005, K9s:0.0027, KTs:0.0013, KJs:0.0004, A2s:0.0049, A3s:0.2720, A4s:0.1088, A5s:0.0884, A6s:0.1597, A7s:0.2022, A8s:0.3485, A9s:0.1807, ATs:0.4699, AJs:0.0093, AQs:0.6183, AKs:0.4480, AA:0.9617"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0317, 55:0.0034, A5o:0.0194, 65s:0.0007, 66:0.0047, 77:0.0007, A7o:0.0034, 87s:0.0004, 88:0.0001, A8o:0.0001, 98s:0.0001, 99:0.0143, A9o:0.0008, T8s:0.0004, T9s:0.0031, TT:0.0224, KTo:0.0063, JTs:0.0002, JJ:0.0597, AJo:0.0006, QTs:0.0001, QJs:0.0001, QQ:0.0370, KQo:0.0003, AQo:0.0019, K2s:0.0004, K3s:0.2702, K4s:0.1803, K5s:0.3088, K6s:0.0939, K7s:0.3192, K8s:0.1441, K9s:0.3673, KTs:0.4845, KJs:0.3719, KQs:0.0094, KK:0.9992, AKo:0.9990, A2s:0.3011, A3s:0.1495, A4s:0.4767, A5s:0.3171, A6s:0.3066, A7s:0.2119, A8s:0.0473, A9s:0.0407, ATs:0.2085, AJs:0.1153, AQs:0.0677, AKs:0.5519"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@8",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0208, 65s:0.0005, 66:0.2788, 77:0.0840, 88:0.4351, 99:0.0843, TT:0.0948, JJ:0.4266, QQ:0.6002, KQo:0.0008, AQo:0.2807, K9s:0.0019, KTs:0.1228, KJs:0.0051, KQs:0.6750, KK:0.0014, A3s:0.0038, A4s:0.0028, A5s:0.2790, A7s:0.0257, A8s:0.0183, A9s:0.0088, ATs:0.0767, AJs:0.2684, AQs:0.3802"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "55:0.0033, 88:0.0029, TT:0.0194, ATo:0.0008, JJ:0.0015, AJo:0.0073, KQo:0.0126, AQo:0.0002, K6s:0.0124, K9s:0.1257, KTs:0.2162, KJs:0.2129, KQs:0.0006, KK:0.3391, A2s:0.0001, A3s:0.0021, A4s:0.0390, A5s:0.0160, A6s:0.0002, A7s:0.0777, A8s:0.0394, A9s:0.1215, ATs:0.0265, AJs:0.0117"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0016, 66:0.0503, 88:0.0470, 99:0.0009, TT:0.0005, ATo:0.0001, JJ:0.0010, AJo:0.0001, QJs:0.0001, QQ:0.3804, KQo:0.0031, AQo:0.3722, K6s:0.0011, K9s:0.1837, KTs:0.3131, KJs:0.0162, KQs:0.0829, KK:0.5780, A2s:0.0014, A3s:0.0745, A4s:0.3578, A5s:0.3426, A6s:0.0045, A7s:0.0881, A8s:0.1864, A9s:0.1687, ATs:0.3039, AJs:0.2142, AQs:0.6190"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0310, 77:0.0511, 87s:0.0001, 88:0.0276, QQ:0.2820, KQo:0.0001, AQo:0.0853, K3s:0.0001, K5s:0.0021, KQs:0.0350, KK:0.2673, AKo:0.0001, A2s:0.0115, A3s:0.0271, A4s:0.0650, A5s:0.0004, A6s:0.0163, A7s:0.0001, A8s:0.0019, A9s:0.0054, ATs:0.0616, AJs:0.0001, AQs:0.9293, AA:0.0222"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0017, 66:0.0008, 77:0.0005, 86s:0.0001, 87s:0.0007, A8o:0.0061, 98s:0.0088, A9o:0.0083, T8s:0.0022, T9s:0.0037, TT:0.0142, ATo:0.0704, JJ:0.0416, AJo:0.0904, QTs:0.0001, QJs:0.0026, QQ:0.0193, AQo:0.2478, K4s:0.0036, K7s:0.0006, K8s:0.0023, K9s:0.0019, KTs:0.0003, KJs:0.0001, KQs:0.0002, KK:0.0133, AKo:0.0989, A2s:0.1285, A3s:0.0528, A4s:0.0298, A5s:0.1043, A6s:0.2147, A7s:0.1863, A8s:0.0196, A9s:0.1433, ATs:0.0134, AJs:0.2729, AQs:0.0022, AKs:0.3509, AA:0.9777"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0069, 55:0.0700, A5o:0.0345, 65s:0.0356, 66:0.0362, 76s:0.0007, 77:0.0184, 86s:0.0005, 87s:0.0357, 88:0.0719, A8o:0.0022, 98s:0.0002, A9o:0.0021, T9s:0.0090, TT:0.0693, ATo:0.0089, JTs:0.0005, JJ:0.0032, QJo:0.0001, AJo:0.0059, QTs:0.0108, QQ:0.0027, KQo:0.0128, AQo:0.0061, K2s:0.0003, K4s:0.0429, K5s:0.0062, K7s:0.0182, K8s:0.0614, K9s:0.0095, KTs:0.1675, KJs:0.0035, KQs:0.0345, KK:0.7194, AKo:0.9009, A2s:0.0152, A3s:0.7351, A4s:0.1865, A5s:0.2771, A6s:0.0408, A7s:0.5244, A8s:0.0030, A9s:0.1277, ATs:0.3401, AJs:0.5609, AQs:0.0379, AKs:0.6491, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0154, 66:0.1459, 77:0.0694, 88:0.0101, 99:0.0227, TT:0.0825, JJ:0.0013, QQ:0.4455, AQo:0.1281, KTs:0.0010, KQs:0.0062, KK:0.0001, A4s:0.0021, A5s:0.0031, A6s:0.0002, A7s:0.0405, A8s:0.1140, A9s:0.0199, ATs:0.2485, AJs:0.0011, AQs:0.3661"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0086, ATo:0.0001, JTs:0.0016, JJ:0.0058, AJo:0.0101, QQ:0.0023, KQo:0.0187, AQo:0.0338, K6s:0.0042, K9s:0.0175, KTs:0.0305, KJs:0.0312, KQs:0.0487, KK:0.2078, A3s:0.0018, A4s:0.0012, A5s:0.0023, A8s:0.0352, A9s:0.0121, ATs:0.0325, AJs:0.0035, AQs:0.0265"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0046, 66:0.0106, 76s:0.0001, 77:0.0702, 88:0.0105, 99:0.0364, TT:0.2796, JJ:0.1064, QTs:0.0004, QJs:0.0002, QQ:0.5110, KQo:0.0009, AQo:0.3094, K6s:0.0002, K9s:0.0007, KTs:0.0101, KJs:0.0047, KQs:0.0138, KK:0.7106, A2s:0.0001, A3s:0.0691, A4s:0.1145, A5s:0.5628, A6s:0.0005, A7s:0.0477, A8s:0.5044, A9s:0.5242, ATs:0.1282, AJs:0.5926, AQs:0.6051"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0003, TT:0.0002, JJ:0.0026, QQ:0.0491, KK, AKo:0.9963, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0026, JJ:0.0284, QQ:0.2927, KK:0.9185"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0004, A2o:0.0123, A3o:0.0740, 42s:0.0003, A4o:0.0346, 54s:0.0003, A5o:0.1021, K6o:0.0001, 77:0.0006, 86s:0.0061, 88:0.0027, A8o:0.0541, 95s:0.0031, 98s:0.0017, 99:0.1251, A9o:0.0615, T4s:0.0003, T6s:0.0001, T9s:0.0018, ATo:0.0041, J7s:0.0013, J8s:0.0008, JJ:0.0056, AJo:0.0223, Q3s:0.0003, Q8s:0.0044, QQ:0.2223, AQo:0.0412, K4s:0.1446, K5s:0.0020, K6s:0.0015, K8s:0.0038, K9s:0.0002, KTs:0.0016, KJs:0.0017, KQs:0.0001, KK:0.0655, AKo:0.0004, A2s:0.0397, A3s:0.0104, A4s:0.0342, A5s:0.0190, A6s:0.0868, A7s:0.0338, A8s:0.1194, A9s:0.0080, ATs:0.2467, AJs:0.0783, AQs:0.6317, AKs:0.1010, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0178, 33:0.0049, A3o:0.0013, 44:0.0693, A4o:0.0771, 55:0.0220, A5o:0.0680, 65s:0.0003, 66:0.0059, A6o:0.0032, A7o:0.0016, 88:0.0042, A8o:0.0011, 98s:0.0059, T3s:0.0002, ATo:0.0313, JJ:0.0304, AJo:0.0173, QQ:0.1161, AQo:0.0123, K4s:0.0007, K5s:0.0339, K6s:0.0004, K9s:0.0004, KJs:0.0003, KQs:0.0005, KK:0.9345, AKo:0.9995, A2s:0.4331, A3s:0.6305, A4s:0.8505, A5s:0.8406, A6s:0.3178, A7s:0.5735, A8s:0.5437, A9s:0.4397, ATs:0.5300, AJs:0.4155, AQs:0.0146, AKs:0.8978, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0124, 33:0.0016, A3o:0.0229, 43s:0.0010, 44:0.0001, 55:0.0072, A5o:0.0092, 63s:0.0003, 64s:0.0013, 65s:0.0005, 66:0.0110, A6o:0.0112, 72s:0.0008, 76s:0.0006, J7o:0.0002, A7o:0.0001, 85s:0.0009, 87s:0.0049, 88:0.0651, 96s:0.0067, 99:0.1149, K9o:0.0003, A9o:0.0439, T3s:0.0118, T5s:0.0002, T9s:0.0118, TT:0.0113, J5s:0.0006, J6s:0.0001, J8s:0.0001, JTs:0.0015, JJ:0.0359, KJo:0.0002, Q3s:0.0031, Q4s:0.0104, Q5s:0.0371, Q7s:0.0004, Q8s:0.0209, Q9s:0.0104, QTs:0.0005, QJs:0.0018, QQ:0.6016, AQo:0.6767, K2s:0.0051, K4s:0.0593, K5s:0.0033, K9s:0.0498, KTs:0.0362, KJs:0.0010, KQs:0.0046, KK:0.4630, AKo:0.0058, A2s:0.0261, A3s:0.0419, A4s:0.2002, A5s:0.0606, A6s:0.2313, A7s:0.1666, A8s:0.2110, A9s:0.3087, ATs:0.0005, AJs:0.2381, AQs:0.7604, AKs:0.1225, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0404, 33:0.0265, 42s:0.0001, 44:0.0060, A4o:0.0053, 55:0.0709, 66:0.0001, 86s:0.0001, 88:0.0001, 99:0.0251, TT:0.0063, JJ:0.0002, QQ:0.0128, AQo:0.0001, K8s:0.0002, KJs:0.0002, KQs:0.0036, KK:0.5361, AKo:0.9913, A2s:0.4495, A3s:0.3159, A4s:0.6789, A5s:0.3979, A6s:0.4186, A7s:0.1980, A8s:0.0629, A9s:0.2539, ATs:0.1037, AJs:0.1723, AQs:0.1258, AKs:0.8773"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0032, A2o:0.0001, 33:0.0049, Q3o:0.0001, A3o:0.0721, 44:0.0209, K4o:0.0001, A4o:0.0401, 53s:0.0005, 65s:0.0067, 66:0.0001, A6o:0.0354, 76s:0.0009, 77:0.0359, A7o:0.0077, 83s:0.0002, 84s:0.0004, 87s:0.0003, 88:0.0270, A8o:0.0007, 92s:0.0001, 96s:0.0004, 97s:0.0446, 99:0.0051, Q9o:0.0002, A9o:0.0011, T2s:0.0002, T4s:0.0003, T6s:0.0008, T8s:0.0639, TT:0.1687, QTo:0.0004, ATo:0.0613, J4s:0.0003, J5s:0.0002, J6s:0.0008, JTs:0.0004, JJ:0.0224, AJo:0.0635, Q3s:0.0001, Q4s:0.0004, Q6s:0.0048, Q7s:0.0035, Q8s:0.0070, Q9s:0.0001, QTs:0.0001, QJs:0.0018, QQ:0.2999, KQo:0.0017, AQo:0.3415, K2s:0.0001, K3s:0.0068, K5s:0.0450, K6s:0.0244, K8s:0.0133, K9s:0.0203, KTs:0.0003, KJs:0.0015, KQs:0.0115, KK:0.3017, AKo:0.0216, A2s:0.0642, A3s:0.1193, A4s:0.0212, A5s:0.0373, A6s:0.0012, A7s:0.2761, A8s:0.2445, A9s:0.0303, ATs:0.0835, AJs:0.1771, AQs:0.8447, AKs:0.0005, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0171, 32s:0.0001, 33:0.0011, A3o:0.0690, 44:0.0540, A4o:0.0022, 53s:0.0007, A5o:0.0048, 65s:0.0001, 66:0.0120, 72s:0.0001, 76s:0.0001, 77:0.0851, 86s:0.0001, 87s:0.0001, 88:0.0125, 99:0.0002, A9o:0.0004, T8s:0.0001, TT:0.0410, J5s:0.0009, J7s:0.0001, JTs:0.0001, JJ:0.0337, Q3s:0.0001, Q5s:0.0001, Q8s:0.0002, QQ:0.0212, AQo:0.0017, K2s:0.0002, K4s:0.0003, K5s:0.0001, K9s:0.0008, KTs:0.0017, KJs:0.0014, KQs:0.0020, KK:0.6983, AKo:0.9779, A2s:0.7793, A3s:0.7149, A4s:0.9378, A5s:0.7935, A6s:0.0219, A7s:0.6257, A8s:0.3679, A9s:0.4424, ATs:0.2586, AJs:0.0797, AQs:0.0995, AKs:0.9995, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.8149, 55:0.7085, 65s:0.4840, 66:0.9812, 76s:0.7908, 77:0.8310, A7o:0.0002, 86s:0.0049, 87s:0.1554, 88:0.9394, 97s:0.0026, 98s:0.2353, 99:0.7434, A9o:0.0001, T7s:0.0005, T8s:0.4310, T9s:0.6543, TT:0.9258, ATo:0.0002, J8s:0.0002, J9s:0.6787, JTs:0.3445, JJ:0.9562, AJo:0.4465, Q8s:0.0005, Q9s:0.1598, QTs:0.4738, QJs:0.2067, QQ:0.9588, KQo:0.2732, AQo:0.7420, K3s:0.0020, K4s:0.2003, K5s:0.0311, K6s:0.1470, K7s:0.0631, K8s:0.2954, K9s:0.3774, KTs:0.8077, KJs:0.8143, KQs:0.8181, KK:0.7816, AKo:0.0456, A2s:0.0754, A3s:0.0712, A4s:0.0157, A5s:0.0447, A6s:0.1013, A7s:0.4859, A8s:0.3350, A9s:0.6262, ATs:0.5984, AJs:0.4935, AQs:0.9759, AKs:0.0174"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "44:0.0034, 55:0.0603, A5o:0.1951, 65s:0.0039, 66:0.0036, 76s:0.0003, 77:0.0697, A7o:0.0085, 86s:0.0076, 87s:0.0713, 88:0.0072, A8o:0.0036, 97s:0.0003, 98s:0.0012, 99:0.2432, A9o:0.0028, T7s:0.0001, T8s:0.0390, T9s:0.0022, TT:0.0692, ATo:0.1659, J8s:0.0156, J9s:0.0011, JTs:0.1460, JJ:0.0392, AJo:0.0280, Q8s:0.0014, Q9s:0.1032, QTs:0.0865, QJs:0.0017, QQ:0.0009, KQo:0.0003, AQo:0.2430, K3s:0.0099, K4s:0.0109, K5s:0.0003, K6s:0.0007, K7s:0.0009, K8s:0.0080, K9s:0.0226, KTs:0.0708, KJs:0.0446, KQs:0.0005, KK:0.0011, AKo:0.0341, A2s:0.0911, A3s:0.2461, A4s:0.0297, A5s:0.0275, A6s:0.1084, A7s:0.1534, A8s:0.1902, A9s:0.0227, ATs:0.0761, AJs:0.2177, AQs:0.0241, AKs:0.2276, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0001, 55:0.0499, A5o:0.1433, 65s:0.0007, 66:0.0049, 76s:0.0001, 77:0.0743, A7o:0.0025, 87s:0.0004, 88:0.0275, A8o:0.0009, 97s:0.0029, 98s:0.0014, 99:0.0027, A9o:0.0013, T8s:0.0083, T9s:0.0005, TT:0.0009, KTo:0.0003, ATo:0.0129, J9s:0.0005, JTs:0.0002, JJ:0.0041, AJo:0.2211, Q8s:0.0004, Q9s:0.0066, QTs:0.0022, QJs:0.0299, QQ:0.0402, AQo:0.0150, K4s:0.0078, K5s:0.0024, K6s:0.0002, K7s:0.0002, K8s:0.0005, K9s:0.0012, KTs:0.0034, KJs:0.0357, KQs:0.1301, KK:0.2174, AKo:0.9203, A2s:0.7263, A3s:0.6329, A4s:0.9519, A5s:0.9127, A6s:0.7202, A7s:0.2774, A8s:0.4691, A9s:0.2987, ATs:0.3218, AJs:0.2880, AKs:0.7550"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|HJ:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0429, 77:0.0066, 88:0.0134, 99:0.0477, TT:0.0078, ATo:0.0038, JJ:0.0390, AJo:0.0354, QQ:0.0082, KQo:0.0001, AQo:0.0767, K6s:0.0001, K9s:0.0336, KTs:0.0018, KK:0.0086, AKo:0.0001, A2s:0.0086, A3s:0.0124, A4s:0.0765, A5s:0.0717, A6s:0.0259, A7s:0.0750, A8s:0.0298, A9s:0.0192, ATs:0.0010, AQs:0.0005, AKs:0.0833, AA:0.0383"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2s:0.0080, A3s:0.0054, A4s:0.0324, A5s:0.0127, A6s:0.0193, A7s:0.0153, A8s:0.0023, A9s:0.0002, AKs:0.0228, AA:0.0548"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|HJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0092, QQ:0.0082, KK:0.0086, AKo:0.0001, AKs:0.1061, AA:0.0931"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0002, 66:0.0058, 76s:0.0006, 87s:0.0003, 99:0.0006, TT:0.0002, QTo:0.0002, ATo:0.0005, J9s:0.0042, JTs:0.0031, JJ:0.0017, Q8s:0.0004, QTs:0.0002, QJs:0.0004, QQ:0.0097, AQo:0.0001, K3s:0.0022, K4s:0.0005, K5s:0.0002, K6s:0.0001, K7s:0.0014, K8s:0.0006, K9s:0.0001, KJs:0.0009, KQs:0.0002, KK:0.5625, AKo:0.2216, A2s:0.0004, A3s:0.0001, A4s:0.0002, A5s:0.0001, A6s:0.0002, A7s:0.0004, A8s:0.0046, A9s:0.0003, ATs:0.0074, AQs:0.1410, AKs:0.0062, AA:0.2324"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0028, A4o:0.0001, 55:0.0001, A5o:0.0002, 65s:0.0521, 66:0.0002, 77:0.0044, 87s:0.0001, 88:0.0007, 97s:0.0007, 98s:0.0439, 99:0.0019, A9o:0.0135, T7s:0.0001, T8s:0.0331, TT:0.0058, ATo:0.0011, J9s:0.0008, JTs:0.0226, JJ:0.0062, AJo:0.0210, Q8s:0.0009, QTs:0.0012, QQ:0.0054, AQo:0.0023, K3s:0.0001, K4s:0.0088, K5s:0.0049, K7s:0.0009, K9s:0.0004, KTs:0.0268, KQs:0.0038, KK:0.2449, AKo:0.5301, A2s:0.0450, A3s:0.0095, A4s:0.0009, A5s:0.0251, A6s:0.0180, A7s:0.0441, A8s:0.1705, ATs:0.0495, AJs:0.0477, AQs:0.2541, AKs:0.9602, AA:0.7676"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0426, 77:0.0042, 88:0.0130, 99:0.0258, TT:0.0061, ATo:0.0003, JJ:0.0374, AJo:0.0069, QQ:0.0082, KQo:0.0018, AQo:0.0558, K5s:0.0001, K9s:0.0176, KTs:0.0015, KK:0.0086, AKo:0.0001, A2s:0.0146, A3s:0.0060, A4s:0.0493, A5s:0.0601, A6s:0.0235, A7s:0.0779, A8s:0.0106, A9s:0.0103, ATs:0.0006, AQs:0.0004, AKs:0.0868, AA:0.0571"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 99:0.0007, JJ:0.0001, AJo:0.0005, AQo:0.0062, K9s:0.0001, A2s:0.0089, A3s:0.0035, A4s:0.0234, A5s:0.0282, A6s:0.0113, A7s:0.0220, A8s:0.0045, A9s:0.0016, ATs:0.0001, AQs:0.0001, AKs:0.0193, AA:0.0360"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 88:0.0001, 99:0.0004, T8s:0.0001, TT:0.0046, JTs:0.0001, JJ:0.0048, QTs:0.0001, QQ:0.0057, KK, AKo:0.0697, A2s:0.0001, A6s:0.0002, ATs:0.0001, AJs:0.0021, AKs:0.0508, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0006, QQ:0.0020, KK:0.0086, AKo:0.0001, AKs:0.1061, AA:0.0931"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0001, 55:0.0001, 65s:0.0022, 77:0.0121, 87s:0.0001, 88:0.0015, A8o:0.0002, 97s:0.0001, 98s:0.0012, 99:0.0026, T9s:0.0041, TT:0.0002, ATo:0.0003, J9s:0.0009, JJ:0.0135, QJo:0.0001, KJo:0.0001, AJo:0.0001, Q9s:0.0004, QTs:0.0003, QJs:0.0001, QQ:0.1077, KQo:0.0002, AQo:0.0001, K4s:0.0001, K5s:0.0001, K6s:0.0015, K9s:0.0001, KJs:0.0001, KQs:0.0021, KK:0.5735, AKo:0.3892, A4s:0.0001, A5s:0.0006, A6s:0.0006, A7s:0.0020, AJs:0.0032, AQs:0.2719, AKs:0.0038, AA:0.3420"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0111, 55:0.0001, A5o:0.0074, 76s:0.0013, 87s:0.0190, 88:0.0010, 97s:0.0052, 98s:0.0033, 99:0.0008, A9o:0.0001, T8s:0.0001, T9s:0.0004, TT:0.0017, ATo:0.0007, J9s:0.0002, JTs:0.0002, JJ:0.0206, AJo:0.0080, Q9s:0.0001, QTs:0.0004, QJs:0.0076, QQ:0.0103, KQo:0.0001, AQo:0.0360, K4s:0.0474, K6s:0.0128, K7s:0.0008, KTs:0.0001, KJs:0.0003, KQs:0.0009, KK:0.3595, AKo:0.2088, A2s:0.2408, A4s:0.5102, A5s:0.2781, A6s:0.0001, A7s:0.3016, A8s:0.0678, A9s:0.0360, ATs:0.4031, AJs:0.0004, AQs:0.3696, AKs:0.8314, AA:0.6580"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0422, 77:0.0065, 88:0.0119, 99:0.0421, TT:0.0064, ATo:0.0010, JJ:0.0376, AJo:0.0009, QQ:0.0082, KQo:0.0001, AQo:0.0555, K5s:0.0001, K6s:0.0001, K9s:0.0319, KTs:0.0018, KK:0.0086, AKo:0.0001, A2s:0.0116, A3s:0.0031, A4s:0.0793, A5s:0.0721, A6s:0.0230, A7s:0.0591, A8s:0.0158, A9s:0.0158, ATs:0.0007, AQs:0.0005, AKs:0.0580, AA:0.0711"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0001, AJo:0.0002, AQo:0.0007, K9s:0.0001, A2s:0.0040, A3s:0.0021, A4s:0.0095, A5s:0.0176, A6s:0.0059, A7s:0.0071, A8s:0.0020, A9s:0.0003, ATs:0.0001, AKs:0.0481, AA:0.0220"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0001, A7o:0.0001, 87s:0.0002, 88:0.0024, 97s:0.0001, 99:0.0009, TT:0.0002, KTo:0.0001, JJ:0.0009, AJo:0.0001, QQ:0.0006, AQo:0.0003, K5s:0.0001, KTs:0.0004, KJs:0.0001, KK, AKo:0.0978, A5s:0.0002, A6s:0.0001, A7s:0.0001, A9s:0.0001, ATs:0.0007, AKs:0.9779, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.0086, AKo:0.0001, AKs:0.1018, AA:0.0931"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0008, 55:0.0002, 65s:0.0003, 66:0.0015, 76s:0.0001, 77:0.0001, 87s:0.0002, 88:0.0002, 97s:0.0001, 98s:0.0002, T7s:0.0443, T9s:0.0001, TT:0.0003, JTo:0.0001, KTo:0.0001, ATo:0.0001, J8s:0.0130, J9s:0.0378, JTs:0.0002, JJ:0.0080, KJo:0.0001, AJo:0.0002, Q6s:0.0021, Q7s:0.0001, Q8s:0.0001, Q9s:0.0003, QTs:0.0003, QJs:0.0007, QQ:0.0003, AQo:0.1195, K4s:0.0015, K5s:0.0010, K6s:0.0652, K8s:0.0007, KTs:0.0005, KJs:0.0035, KQs:0.0005, KK:0.5612, AKo:0.0727, A2s:0.0085, A4s:0.0001, A5s:0.1126, A6s:0.0001, A7s:0.3055, A8s:0.0253, A9s:0.0269, ATs:0.0015, AJs:0.7929, AQs:0.4551, AKs:0.0094, AA:0.2007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0115, 65s:0.0001, 66:0.0001, 76s:0.0001, 77:0.0005, A7o:0.0001, 87s:0.0002, A8o:0.0002, T8s:0.0012, TT:0.0044, J8s:0.0142, J9s:0.0047, JTs:0.0001, JJ:0.0002, AJo:0.0381, QTs:0.0005, QJs:0.0011, QQ:0.0008, KQo:0.0001, K3s:0.0312, K4s:0.0050, K6s:0.0013, K7s:0.0002, K9s:0.0002, KJs:0.0040, KQs:0.0007, KK:0.0459, AKo:0.7396, A2s:0.0353, A3s:0.0001, A4s:0.0500, A5s:0.1081, A6s:0.2149, A7s:0.0276, A8s:0.1970, A9s:0.3600, ATs:0.0951, AJs:0.1016, AQs:0.0074, AKs:0.5432, AA:0.7993"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0397, 77:0.0063, 88:0.0117, 99:0.0269, TT:0.0039, ATo:0.0007, JJ:0.0324, AJo:0.0089, QQ:0.0078, KQo:0.0014, AQo:0.0370, K9s:0.0022, KTs:0.0006, KK:0.0086, AKo:0.0001, A2s:0.0019, A3s:0.0006, A4s:0.0060, A5s:0.0287, A6s:0.0113, A7s:0.0236, A8s:0.0113, A9s:0.0155, ATs:0.0006, AQs:0.0005, AKs:0.0767, AA:0.0281"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0005, AJo:0.0110, A2s:0.0163, A3s:0.0094, A4s:0.0433, A5s:0.0753, A6s:0.0358, A7s:0.0680, A8s:0.0155, A9s:0.0010, ATs:0.0004, AKs:0.0294, AA:0.0650"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0002, T8s:0.0001, TT:0.0001, J9s:0.0004, JJ:0.0002, Q8s:0.0001, QJs:0.0001, QQ:0.0001, KJs:0.0004, KK:0.9748, AKo:0.0134, A5s:0.0001, A7s:0.0001, AJs:0.0003, AQs:0.0014, AKs:0.1180, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0008, QQ:0.0012, KK:0.0086, AKo:0.0001, AKs:0.1061, AA:0.0931"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0894, A3o:0.0159, A4o:0.0021, 54s:0.0001, A5o:0.0558, A6o:0.0149, 76s:0.0005, A7o:0.0849, 85s:0.0004, A8o:0.1773, 93s:0.0001, 98s:0.0004, T8s:0.0005, TT:0.0004, ATo:0.0225, J8s:0.0010, JJ:0.0094, AJo:0.0925, QQ:0.1592, AQo:0.0840, K2s:0.0003, K3s:0.0004, K4s:0.0005, K5s:0.0013, K6s:0.0003, K9s:0.0011, KTs:0.0020, KJs:0.0014, KQs:0.0005, KK:0.0291, AKo:0.0034, A2s:0.0072, A3s:0.1800, A4s:0.2866, A5s:0.0278, A6s:0.1052, A7s:0.0224, A8s:0.1417, A9s:0.0596, ATs:0.0496, AJs:0.0983, AQs:0.4241, AKs:0.1077, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0010, A4o:0.0129, A5o:0.0165, 76s:0.0003, 77:0.0001, A7o:0.0105, 93s:0.0001, 98s:0.0082, T8s:0.0001, TT:0.0004, ATo:0.0014, J8s:0.0001, JJ:0.0006, AJo:0.0001, QQ:0.0009, K2s:0.0001, K3s:0.0003, K4s:0.0009, K8s:0.0001, KTs:0.0068, KJs:0.0002, KQs:0.0015, KK:0.9709, AKo:0.9966, A2s:0.8091, A3s:0.4324, A4s:0.5276, A5s:0.8871, A6s:0.7976, A7s:0.7581, A8s:0.4545, A9s:0.2822, ATs:0.9028, AJs:0.0878, AQs:0.0508, AKs:0.8923"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.0386, 33:0.0002, A3o:0.0289, K4o:0.0014, A4o:0.0769, 54s:0.0185, 66:0.0050, 86o:0.0001, A6o:0.0202, 74s:0.0001, 76s:0.0006, A7o:0.0535, 83s:0.0001, 84s:0.0001, 87s:0.0125, 88:0.0396, A8o:0.0201, 92s:0.0002, 93s:0.0001, 99:0.0132, A9o:0.0192, T3s:0.0006, T6s:0.0001, TT:0.0008, ATo:0.0060, J4s:0.0008, J9s:0.0002, JJ:0.0493, KJo:0.0007, AJo:0.0697, QTs:0.0002, QQ:0.1636, AQo:0.4465, K2s:0.0138, K3s:0.0617, K4s:0.0561, K6s:0.0165, K7s:0.0481, K8s:0.0257, K9s:0.0316, KTs:0.0595, KJs:0.0207, KQs:0.0317, KK:0.3364, AKo:0.0110, A2s:0.0408, A3s:0.0656, A4s:0.1531, A5s:0.0575, A6s:0.1799, A7s:0.0849, A8s:0.1416, A9s:0.2428, ATs:0.0573, AJs:0.2541, AQs:0.3863, AKs:0.0512, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0004, 64s:0.0001, 75s:0.0003, 77:0.0012, 88:0.0011, 99:0.0002, TT:0.0001, ATo:0.0001, J4s:0.0001, JJ:0.0031, Q4s:0.0001, AQo:0.0033, K3s:0.0005, K5s:0.0008, K9s:0.0007, KTs:0.0001, KQs:0.0013, KK:0.6636, AKo:0.9889, A2s:0.6387, A3s:0.7784, A4s:0.4374, A5s:0.8274, A6s:0.7426, A7s:0.7759, A8s:0.7875, A9s:0.3735, ATs:0.4162, AJs:0.4034, AQs:0.1176, AKs:0.9487"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0054, A2o:0.0625, A3o:0.0394, A4o:0.0463, A5o:0.0043, A6o:0.0290, 72s:0.0002, 77:0.1078, A7o:0.0107, 85s:0.0001, 88:0.0904, A8o:0.2031, 97s:0.0029, 98s:0.0021, 99:0.0028, K9o:0.0002, T9s:0.0221, ATo:0.0021, JJ:0.0083, KJo:0.0002, AJo:0.0019, Q3s:0.0005, Q6s:0.0001, Q9s:0.0009, QQ:0.0528, AQo:0.4412, K3s:0.0013, K4s:0.0014, K5s:0.0031, K6s:0.0018, K7s:0.0050, K8s:0.0152, KTs:0.0273, KQs:0.0001, KK:0.3502, AKo:0.0033, A2s:0.0393, A3s:0.0303, A4s:0.0160, A5s:0.0751, A6s:0.2373, A7s:0.0416, A8s:0.1512, A9s:0.1652, ATs:0.1102, AJs:0.0753, AQs:0.7656, AKs:0.0894, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0250, 99:0.0132, JTs:0.0001, JJ:0.0002, QQ:0.0001, K6s:0.0001, KTs:0.0085, KJs:0.0002, KQs:0.0005, KK:0.6498, AKo:0.9965, A2s:0.7799, A3s:0.8571, A4s:0.5340, A5s:0.7533, A6s:0.1583, A7s:0.7613, A8s:0.7903, A9s:0.6436, ATs:0.5461, AJs:0.3129, AQs:0.1242, AKs:0.9103"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.2257, 66:0.9316, 76s:0.0010, 77:0.4513, 88:0.8708, 99:0.1934, T9s:0.0051, TT:0.3058, ATo:0.0024, J9s:0.0058, JTs:0.0014, JJ:0.4530, AJo:0.1235, QQ:0.8955, AQo:0.5610, K3s:0.0005, K6s:0.0001, K7s:0.0003, K8s:0.0001, K9s:0.0005, KTs:0.2148, KJs:0.3975, KQs:0.0007, KK:0.6814, A3s:0.1677, A4s:0.0868, A5s:0.0002, A6s:0.2743, A7s:0.0691, A8s:0.2722, A9s:0.4602, ATs:0.6672, AJs:0.8719, AQs:0.9189, AKs:0.0059"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.1289, A4o:0.0024, 55:0.0103, A5o:0.0813, 66:0.0050, 76s:0.0033, 77:0.0052, A7o:0.0327, 87s:0.0001, 88:0.0333, A8o:0.0599, 97s:0.0011, 99:0.0159, A9o:0.0083, T9s:0.0004, TT:0.0062, ATo:0.0738, J8s:0.0003, J9s:0.0003, JJ:0.0028, AJo:0.0028, Q9s:0.0004, QJs:0.0054, QQ:0.0092, KQo:0.0003, AQo:0.4355, K2s:0.0005, K3s:0.1411, K4s:0.0348, K5s:0.0642, K6s:0.0135, K8s:0.0034, K9s:0.0110, KTs:0.0085, KJs:0.0038, KQs:0.0178, KK:0.0022, AKo:0.0998, A2s:0.0469, A3s:0.1154, A4s:0.0454, A5s:0.0385, A6s:0.3303, A7s:0.2789, A8s:0.3049, A9s:0.1887, ATs:0.0022, AJs:0.0003, AQs:0.0770, AKs:0.5312, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0099, 55:0.0793, A5o:0.0003, 65s:0.0001, 66:0.0042, 76s:0.0004, 77:0.0541, A7o:0.0037, 88:0.0584, A8o:0.0009, 97s:0.0003, 98s:0.0015, 99:0.2578, A9o:0.0105, T8s:0.0001, T9s:0.0001, TT:0.1230, KTo:0.0006, ATo:0.0010, J9s:0.0188, JJ:0.5346, AJo:0.0316, QQ:0.0946, KQo:0.0002, K3s:0.0011, K4s:0.0038, K5s:0.0013, K6s:0.0030, K7s:0.0026, K8s:0.0042, K9s:0.0073, KTs:0.0030, KJs:0.0341, KQs:0.0078, KK:0.3164, AKo:0.9002, A2s:0.9384, A3s:0.7080, A4s:0.7564, A5s:0.9595, A6s:0.1653, A7s:0.6316, A8s:0.1859, A9s:0.2586, ATs:0.3293, AJs:0.1212, AQs:0.0001, AKs:0.4630"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|HJ:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0004, 77:0.0366, 88:0.0003, A9o:0.0001, KTo:0.0001, ATo:0.0059, JJ:0.0377, AJo:0.0067, QQ:0.0110, AQo:0.1124, K2s:0.0002, K4s:0.0001, K6s:0.0001, KK:0.0269, A2s:0.0276, A3s:0.0692, A4s:0.0658, A5s:0.0160, A6s:0.0727, A7s:0.0884, A8s:0.0784, A9s:0.0011, ATs:0.0001, AJs:0.0001, AKs:0.0159, AA:0.1161"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0002, AKo:0.0004, A2s:0.1931, A3s:0.4479, A4s:0.1228, A5s:0.0069, A6s:0.1116, A7s:0.0902, A8s:0.0011, AKs:0.3100, AA:0.2642"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|HJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0377, QQ:0.0110, KK:0.0271, AKo:0.0004, AKs:0.3259, AA:0.3803"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "76s:0.0002, 97s:0.0001, 99:0.0001, T8s:0.0001, JJ:0.0001, QQ:0.0020, AQo:0.0275, K8s:0.0006, K9s:0.0001, KTs:0.0001, KJs:0.0002, KK:0.4294, AKo:0.0001, A2s:0.0002, A3s:0.0038, A4s:0.0005, A5s:0.0002, A6s:0.0062, A7s:0.0016, A9s:0.2098, AQs:0.1859, AKs:0.4134, AA:0.5492"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0073, 66:0.0057, 76s:0.0027, A7o:0.1717, ATo:0.0766, J9s:0.0018, JJ:0.0001, AJo:0.0061, QQ:0.0223, AQo:0.0010, K4s:0.0141, K5s:0.0003, K8s:0.0176, KTs:0.0001, KQs:0.0047, KK:0.3049, AKo:0.6964, A2s:0.0068, A3s:0.4761, A4s:0.1850, A5s:0.6730, A6s:0.3261, A7s:0.0044, A9s:0.0323, ATs:0.3920, AJs:0.1773, AQs:0.2645, AKs:0.5570, AA:0.4508"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BB:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0006, 77:0.0356, 88:0.0003, A9o:0.0002, KTo:0.0001, ATo:0.0019, JJ:0.0375, AJo:0.0028, QQ:0.0110, AQo:0.0967, K4s:0.0001, K6s:0.0001, KK:0.0248, AKo:0.0001, A2s:0.0352, A3s:0.0857, A4s:0.0640, A5s:0.0005, A6s:0.1803, A7s:0.0744, A8s:0.0404, A9s:0.0008, ATs:0.0001, AJs:0.0001, AKs:0.0163, AA:0.1841"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, ATo:0.0002, AJo:0.0001, KK:0.0023, AKo:0.0003, A2s:0.1636, A3s:0.1531, A4s:0.0754, A5s:0.0191, A6s:0.1263, A7s:0.1017, A8s:0.0200, A9s:0.0001, AKs:0.3093, AA:0.1962"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0004, Q9s:0.0001, QQ:0.0002, KTs:0.0002, KQs:0.0001, KK:0.9994, AKo:0.0218, A3s:0.0003, AQs:0.0003, AKs:0.1753, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0015, QQ:0.0019, KK:0.0271, AKo:0.0004, AKs:0.3259, AA:0.3803"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|SB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0001, 76s:0.0021, A7o:0.0001, 88:0.0001, 97s:0.0001, 99:0.0001, JTs:0.0003, JJ:0.0184, QTs:0.0002, QJs:0.0001, QQ:0.0239, AQo:0.0323, K9s:0.0001, KK:0.2601, AKo:0.0460, A2s:0.0007, A4s:0.0002, A5s:0.0005, A7s:0.0004, A8s:0.0004, A9s:0.0715, ATs:0.0005, AQs:0.2422, AKs:0.3310, AA:0.1141"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0001, 66:0.0006, A7o:0.0003, 87s:0.0008, 88:0.0005, 99:0.0006, TT:0.0001, ATo:0.0548, JTs:0.0004, JJ:0.0020, Q9s:0.0005, QTs:0.0003, QJs:0.0003, QQ:0.0402, AQo:0.0019, K5s:0.0005, K7s:0.0027, K8s:0.0001, K9s:0.0001, KTs:0.0033, KK:0.6781, AKo:0.8018, A2s:0.0017, A3s:0.1684, A4s:0.5005, A5s:0.0004, A6s:0.0007, A7s:0.0439, A8s:0.0149, A9s:0.1291, ATs:0.0331, AJs:0.0578, AQs:0.0649, AKs:0.5551, AA:0.8859"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|SB:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "77:0.0365, 88:0.0003, ATo:0.0044, JJ:0.0377, AJo:0.0090, QQ:0.0110, AQo:0.0790, KK:0.0262, AKo:0.0001, A2s:0.0867, A3s:0.0558, A4s:0.0764, A5s:0.0206, A6s:0.1089, A7s:0.1146, A8s:0.0697, A9s:0.0010, ATs:0.0001, AJs:0.0001, AKs:0.1110, AA:0.1139"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, AJo:0.0031, AQo:0.0333, KK:0.0009, AKo:0.0003, A2s:0.0715, A3s:0.1961, A4s:0.0338, A5s:0.0014, A6s:0.1039, A7s:0.0597, A8s:0.0056, AKs:0.2149, AA:0.2664"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 99:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0010, QQ:0.0025, KK, AJs:0.0001, AKs:0.5712, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0155, QQ:0.0044, KK:0.0271, AKo:0.0004, AKs:0.3259, AA:0.3803"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BTN:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0007, 65s:0.0004, 66:0.0001, 76s:0.0008, A8o:0.0002, 98s:0.0060, 99:0.0053, T7s:0.0001, T8s:0.0008, TT:0.0001, J8s:0.0004, J9s:0.0006, JJ:0.0008, AJo:0.0357, Q8s:0.0029, Q9s:0.0010, QTs:0.0002, QJs:0.0015, QQ:0.0058, AQo:0.0911, K5s:0.0001, K9s:0.0022, KTs:0.0001, KQs:0.0002, KK:0.5037, AKo:0.0884, A2s:0.0013, A3s:0.2843, A4s:0.0006, A5s:0.0016, A6s:0.0001, A7s:0.0001, A8s:0.1170, A9s:0.0588, ATs:0.0006, AJs:0.0881, AQs:0.0714, AKs:0.2443, AA:0.4879"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0017, A4o:0.0003, A5o:0.0065, 65s:0.0001, 76s:0.0015, A7o:0.0187, 98s:0.0025, ATo:0.3116, JJ:0.0038, QQ:0.0011, AQo:0.0611, K6s:0.0039, K8s:0.0007, KTs:0.0005, KK:0.0341, AKo:0.6208, A2s:0.4722, A3s:0.2808, A4s:0.0013, A5s:0.0128, A6s:0.0034, A7s:0.3951, A8s:0.6517, A9s:0.0015, ATs:0.0681, AJs:0.1909, AQs:0.6831, AKs:0.7318, AA:0.5121"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BTN:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0005, 77:0.0361, 88:0.0003, A9o:0.0004, ATo:0.0027, JJ:0.0352, AJo:0.0072, QQ:0.0110, AQo:0.0894, KK:0.0264, AKo:0.0002, A2s:0.0108, A3s:0.0633, A4s:0.0163, A5s:0.0021, A6s:0.1036, A7s:0.0105, A8s:0.0375, A9s:0.0007, ATs:0.0001, AJs:0.0001, AKs:0.1168, AA:0.0746"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, 77:0.0001, ATo:0.0001, AQo:0.0003, KK:0.0007, AKo:0.0002, A2s:0.1235, A3s:0.2118, A4s:0.0706, A5s:0.0102, A6s:0.1421, A7s:0.1677, A8s:0.0309, A9s:0.0002, AKs:0.2088, AA:0.3057"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BTN:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, QQ:0.0007, KTs:0.0001, KQs:0.0001, KK, A5s:0.0001, ATs:0.0001, AKs:0.1450, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@8|BTN:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0025, QQ:0.0008, KK:0.0271, AKo:0.0004, AKs:0.3259, AA:0.3803"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.1094, A3o:0.0105, A4o:0.0003, 55:0.0024, K5o:0.0004, A5o:0.0015, 62s:0.0002, K6o:0.0009, A6o:0.1079, 76s:0.0012, K7o:0.0009, A7o:0.0066, A8o:0.0128, 99:0.0001, K9o:0.0014, A9o:0.0106, T9s:0.0002, TT:0.0024, ATo:0.0017, AJo:0.0046, QTs:0.0001, QJs:0.0001, QQ:0.0026, AQo:0.1178, K2s:0.0094, K3s:0.0003, K4s:0.0059, K6s:0.0032, K7s:0.0020, K9s:0.0002, KTs:0.0537, KJs:0.0158, KK:0.0207, AKo:0.0294, A3s:0.0011, A4s:0.0926, A5s:0.0896, A6s:0.0305, A7s:0.4284, A8s:0.3848, A9s:0.0160, ATs:0.0106, AJs:0.0987, AQs:0.3078, AKs:0.0990, AA:0.9995"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 54s:0.0001, TT:0.0002, QJs:0.0001, QQ:0.0003, AQo:0.0001, K3s:0.0040, K4s:0.0001, K6s:0.0015, K7s:0.0062, K9s:0.0029, KTs:0.0425, KJs:0.0473, KQs:0.0044, KK:0.9793, AKo:0.9706, A4s:0.1084, A5s:0.3183, A6s:0.0047, A7s:0.0032, A8s:0.3138, ATs:0.0865, AJs:0.0411, AQs:0.0004, AKs:0.9010, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0054, A4o:0.0407, A5o:0.0130, K6o:0.0032, A6o:0.0019, A7o:0.0099, 88:0.0003, K8o:0.0014, A8o:0.1292, 99:0.0001, A9o:0.0035, TT:0.0001, ATo:0.0285, JJ:0.0073, KJo:0.0018, AJo:0.0745, QQ:0.0001, KQo:0.0006, AQo:0.3333, K2s:0.0002, K3s:0.0003, K4s:0.0032, K5s:0.0100, K6s:0.0029, K7s:0.0025, KTs:0.0209, KQs:0.0007, KK:0.0747, AKo:0.0186, A2s:0.0238, A3s:0.0432, A4s:0.0751, A5s:0.0873, A6s:0.1141, A7s:0.0523, A8s:0.3556, A9s:0.0419, ATs:0.1048, AJs:0.0188, AQs:0.2854, AKs:0.5437, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0002, 55:0.0002, 88:0.0001, 99:0.0003, T4s:0.0001, TT:0.0001, JJ:0.0001, Q9s:0.0001, QQ:0.0002, KQo:0.0001, K5s:0.0009, K6s:0.0001, K7s:0.0002, K8s:0.0001, K9s:0.0004, KTs:0.0042, KQs:0.0001, KK:0.9253, AKo:0.9814, A2s:0.0055, A3s:0.0600, A4s:0.4377, A5s:0.0621, A7s:0.4857, A9s:0.0615, ATs:0.5087, AJs:0.4640, AQs:0.3295, AKs:0.4562, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0023, A3o:0.0547, K4o:0.0020, A4o:0.0035, 52s:0.0001, K5o:0.0003, A5o:0.0412, 64s:0.0001, A6o:0.0293, 77:0.0007, 83s:0.0001, K8o:0.0006, A8o:0.0172, K9o:0.0001, A9o:0.0437, ATo:0.0065, J2s:0.0001, KJo:0.0037, AJo:0.1975, QTs:0.0001, QQ:0.0242, AQo:0.1535, K2s:0.0226, K3s:0.0011, K4s:0.0026, K5s:0.0001, K6s:0.0084, K7s:0.0140, K8s:0.0244, K9s:0.0100, KTs:0.0069, KJs:0.0001, KQs:0.0080, KK:0.2031, AKo:0.1297, A3s:0.0049, A4s:0.0537, A5s:0.0075, A6s:0.0554, A7s:0.2998, A8s:0.2407, A9s:0.2517, ATs:0.2015, AJs:0.2268, AQs:0.5426, AKs:0.4586, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 88:0.0001, JJ:0.0001, QQ:0.0001, KQo:0.0001, K3s:0.0001, K4s:0.0020, K5s:0.0002, K6s:0.0035, K7s:0.0083, K9s:0.0009, KTs:0.0001, KJs:0.0030, KQs:0.0256, KK:0.7969, AKo:0.8702, A2s:0.0006, A3s:0.1452, A4s:0.8381, A5s:0.8194, A6s:0.0001, A7s:0.0429, A8s:0.2068, A9s:0.2687, ATs:0.2541, AJs:0.6671, AQs:0.0774, AKs:0.5414"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0052, 66:0.2590, 77:0.0292, 88:0.2573, 99:0.0235, TT:0.0298, JJ:0.0582, QQ:0.6582, AQo:0.0457, K9s:0.0001, KJs:0.0001, KQs:0.0166, KK:0.1438, A3s:0.0164, A7s:0.0008, A8s:0.2241, A9s:0.0106, ATs:0.4304, AJs:0.3243, AQs:0.6513"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0003, A5o:0.0279, 65s:0.0002, A6o:0.0001, A7o:0.0014, 88:0.0013, A8o:0.0626, 99:0.0031, A9o:0.0024, T9s:0.0001, TT:0.0008, KTo:0.0144, ATo:0.0783, JJ:0.0018, KJo:0.0004, AJo:0.4342, QQ:0.0058, KQo:0.0020, AQo:0.3093, K3s:0.0002, K4s:0.0036, K5s:0.0044, K6s:0.0003, K7s:0.0023, K8s:0.0006, K9s:0.0008, KTs:0.0001, KJs:0.0054, KQs:0.0069, AKo:0.0090, A2s:0.0005, A3s:0.0011, A4s:0.0091, A5s:0.0053, A6s:0.0017, A7s:0.0008, A8s:0.0248, A9s:0.0137, ATs:0.0559, AJs:0.1113, AQs:0.2911, AKs:0.2439, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.0271, A5o:0.0463, 65s:0.0001, 66:0.0030, 77:0.0823, 88:0.2198, 98s:0.0002, 99:0.2163, TT:0.3603, KTo:0.0017, ATo:0.0886, JJ:0.5625, KJo:0.0001, AJo:0.0073, QQ:0.0036, KQo:0.0002, K3s:0.0023, K4s:0.0134, K5s:0.0734, K6s:0.1275, K7s:0.0993, K8s:0.0192, K9s:0.1177, KTs:0.2070, KJs:0.1428, KQs:0.1550, KK:0.8562, AKo:0.9910, A2s:0.8496, A3s:0.7969, A4s:0.9234, A5s:0.9728, A6s:0.8828, A7s:0.9257, A8s:0.5925, A9s:0.9126, ATs:0.4925, AJs:0.4760, AQs:0.0452, AKs:0.7561"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|HJ:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0065, A5o:0.0030, A7o:0.0009, A8o:0.0013, A9o:0.0002, ATo:0.0157, AJo:0.0656, AQo:0.0060, K2s:0.0021, K6s:0.0100, K7s:0.0026, K8s:0.0002, K9s:0.0003, KTs:0.0005, KK:0.0429, AKo:0.0009, A2s:0.2222, A3s:0.0459, A4s:0.0051, A5s:0.0054, A6s:0.1445, A7s:0.0463, A8s:0.0098, A9s:0.0046, ATs:0.0001, AJs:0.0003, AKs:0.1093, AA:0.2409"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0002, A4o:0.0002, A5o:0.0001, ATo:0.0026, AJo:0.0063, AQo:0.0001, KK:0.0028, AKo:0.0035, A2s:0.3101, A3s:0.1971, A4s:0.0339, A5s:0.0061, A6s:0.0634, A7s:0.0400, A8s:0.0018, A9s:0.0017, AJs:0.0001, AKs:0.1489, AA:0.2857"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|HJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0457, AKo:0.0044, AKs:0.2582, AA:0.5266"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "J9s:0.0001, JJ:0.0002, AJo:0.0001, Q9s:0.0001, QJs:0.0001, QQ:0.0562, K6s:0.0001, K7s:0.0002, KK:0.1315, A3s:0.0001, A7s:0.0001, ATs:0.0742, AJs:0.0036, AQs:0.1794, AKs:0.2737, AA:0.6755"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0005, 55:0.0467, A5o:0.0014, 65s:0.0109, 66:0.0003, 76s:0.0002, 77:0.0002, 88:0.0004, A8o:0.0018, 97s:0.0004, 99:0.0489, T7s:0.0002, TT:0.0139, J9s:0.0046, JTs:0.0004, JJ:0.0037, AJo:0.0001, QJs:0.0018, QQ:0.0316, AQo:0.0088, K4s:0.0025, K5s:0.0001, K7s:0.0064, K8s:0.0001, KTs:0.0017, KK:0.4270, AKo:0.9295, A2s:0.1338, A3s:0.1090, A4s:0.0077, A5s:0.1377, A6s:0.0876, A7s:0.0008, A8s:0.0305, A9s:0.0070, ATs:0.0865, AJs:0.0292, AQs:0.1927, AKs:0.6879, AA:0.3245"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0014, A3o:0.0024, A4o:0.0028, A5o:0.0028, A7o:0.0010, A8o:0.0001, A9o:0.0017, ATo:0.0180, AJo:0.0489, AQo:0.0056, K2s:0.0025, K6s:0.0039, K7s:0.0006, K8s:0.0001, K9s:0.0001, KTs:0.0002, KK:0.0300, AKo:0.0006, A2s:0.1587, A3s:0.0563, A4s:0.0108, A5s:0.0041, A6s:0.0789, A7s:0.0413, A8s:0.0050, A9s:0.0039, ATs:0.0001, AJs:0.0004, AKs:0.0099, AA:0.0579"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0225, A3o:0.0095, A4o:0.0149, A5o:0.0078, A6o:0.0003, A7o:0.0001, ATo:0.0101, AJo:0.0002, K2s:0.0033, K3s:0.0039, K6s:0.0030, K7s:0.0020, K8s:0.0002, K9s:0.0002, KTs:0.0001, KK:0.0155, AKo:0.0038, A2s:0.2117, A3s:0.1026, A4s:0.0168, A5s:0.0053, A6s:0.0727, A7s:0.0278, A8s:0.0038, A9s:0.0015, AKs:0.2483, AA:0.4687"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 99:0.0005, TT:0.0011, JJ:0.0005, QQ:0.0006, KQs:0.0001, KK, AKo:0.0002, A2s:0.0008, A7s:0.0001, ATs:0.0002, AJs:0.0006, AQs:0.0002, AKs:0.0014, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0457, AKo:0.0043, AKs:0.2568, AA:0.5266"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|SB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0001, T8s:0.0001, T9s:0.0001, JJ:0.0002, AQo:0.0001, K4s:0.0002, K7s:0.0002, K9s:0.0003, KQs:0.0002, KK:0.1496, AKo:0.0149, A2s:0.0001, A3s:0.0001, A5s:0.0001, A7s:0.0001, A8s:0.0001, A9s:0.0008, AJs:0.0001, AQs:0.0014, AKs:0.0028, AA:0.0933"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, A4o:0.0012, 55:0.0035, 99:0.0032, T8s:0.0001, T9s:0.0001, J9s:0.0002, JTs:0.0021, JJ:0.0008, AJo:0.0010, QQ:0.0008, AQo:0.0336, K3s:0.0038, K4s:0.0002, K8s:0.0005, K9s:0.0001, KJs:0.0001, KK:0.0102, AKo:0.7932, A2s:0.0018, A3s:0.3098, A4s:0.1730, A5s:0.0791, A6s:0.3066, A7s:0.3770, A8s:0.0042, A9s:0.7164, ATs:0.0260, AJs:0.2661, AQs:0.0060, AKs:0.9727, AA:0.9067"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|SB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0046, A4o:0.0018, A5o:0.0022, A7o:0.0001, A8o:0.0007, A9o:0.0002, ATo:0.0140, AJo:0.0268, AQo:0.0058, K3s:0.0001, K9s:0.0001, KTs:0.0001, KK:0.0427, AKo:0.0002, A2s:0.1504, A3s:0.0421, A4s:0.0041, A5s:0.0014, A6s:0.0797, A7s:0.0410, A8s:0.0072, A9s:0.0039, ATs:0.0001, AJs:0.0003, AKs:0.0192, AA:0.1810"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0013, A3o:0.0039, A4o:0.0018, A5o:0.0016, A6o:0.0001, A7o:0.0001, A8o:0.0002, A9o:0.0001, ATo:0.0019, AJo:0.0016, AQo:0.0001, KK:0.0027, AKo:0.0042, A2s:0.3206, A3s:0.1541, A4s:0.0166, A5s:0.0076, A6s:0.0372, A7s:0.0114, A8s:0.0003, A9s:0.0008, AJs:0.0001, AKs:0.2389, AA:0.3456"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0001, JJ:0.0001, QQ:0.0008, K7s:0.0001, KJs:0.0001, KQs:0.0001, KK, A7s:0.0001, AQs:0.0002, AKs:0.0009, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0457, AKo:0.0042, AKs:0.2579, AA:0.5266"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BTN:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "65s:0.0002, 76s:0.0002, 98s:0.0004, 99:0.0001, T8s:0.0001, TT:0.0001, AJo:0.0001, QJs:0.0001, QQ:0.0107, AQo:0.0002, K3s:0.0002, K7s:0.0001, K8s:0.0002, KQs:0.0002, KK:0.0594, AKo:0.0363, A2s:0.0001, A3s:0.0001, A5s:0.0002, A6s:0.0032, A7s:0.0001, A8s:0.0003, ATs:0.1198, AJs:0.0022, AQs:0.0174, AKs:0.0025, AA:0.0071"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0033, A5o:0.0029, 65s:0.0004, 66:0.0039, 88:0.0054, A8o:0.0028, 97s:0.0006, 98s:0.0041, 99:0.0024, A9o:0.0033, T7s:0.0002, T8s:0.0016, TT:0.0007, KTo:0.0016, ATo:0.0008, J8s:0.0006, J9s:0.0008, JTs:0.0009, JJ:0.0001, Q6s:0.0001, Q9s:0.0009, QTs:0.0030, QJs:0.0006, QQ:0.0122, AQo:0.0040, K3s:0.0029, K5s:0.0029, K7s:0.0020, K8s:0.0029, KTs:0.0003, KK:0.0096, AKo:0.9325, A2s:0.2289, A3s:0.3036, A4s:0.4187, A5s:0.0049, A6s:0.5095, A7s:0.3795, A8s:0.1532, A9s:0.1858, ATs:0.6127, AJs:0.0794, AQs:0.0020, AKs:0.9202, AA:0.9929"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BTN:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0011, A3o:0.0004, A7o:0.0001, A8o:0.0013, A9o:0.0087, ATo:0.0390, AJo:0.0321, AQo:0.0033, KTs:0.0002, KK:0.0432, AKo:0.0023, A2s:0.1954, A3s:0.0679, A4s:0.0092, A5s:0.0028, A6s:0.0656, A7s:0.0385, A8s:0.0059, A9s:0.0032, ATs:0.0001, AJs:0.0003, AKs:0.1415, AA:0.0617"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0032, A3o:0.0227, A4o:0.0147, A5o:0.0050, A6o:0.0001, A7o:0.0001, A8o:0.0002, A9o:0.0005, ATo:0.0032, AJo:0.0024, KK:0.0020, AKo:0.0019, A2s:0.2306, A3s:0.1174, A4s:0.0153, A5s:0.0062, A6s:0.0750, A7s:0.0278, A8s:0.0061, A9s:0.0010, AJs:0.0001, AKs:0.1167, AA:0.4649"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BTN:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0007, TT:0.0002, QJs:0.0001, KJs:0.0001, KK:0.9991, AKo:0.0012, A8s:0.0001, A9s:0.0007, AQs:0.0007, AKs:0.0697, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@10|BTN:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0457, AKo:0.0044, AKs:0.2582, AA:0.5266"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.9993, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.9991, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.9991, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32|BB:CALL@52.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0090, 76s:0.0001, 77:0.0001, 99:0.0001, T9s:0.0002, Q9s:0.0001, QQ:0.0011, K4s:0.0001, K5s:0.0001, KQs:0.0003, KK:0.0005, A6s:0.0001, A7s:0.0001, ATs:0.0001, AQs:0.0001, AKs:0.0664, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32|SB:CALL@52.82",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0001, 97s:0.0002, 99:0.0001, T8s:0.0002, JJ:0.0007, QQ:0.0133, K8s:0.0002, K9s:0.0001, KK:0.0006, A4s:0.0003, A6s:0.0002, A7s:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0016, 76s:0.0004, 87s:0.0003, 88:0.0001, 97s:0.0001, 98s:0.0001, 99:0.0004, T7s:0.0001, TT:0.0233, JJ:0.0001, Q9s:0.0002, QQ:0.0024, K8s:0.0001, K9s:0.0002, KK:0.0026, A5s:0.0001, A7s:0.0003, ATs:0.0001, AJs:0.0001, AKs:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0011, 65s:0.3721, 66:0.2614, 76s:0.0457, 77:0.3336, 88:0.9123, 99:0.9296, TT:0.9644, JTs:0.3942, JJ:0.9579, AJo:0.4900, QTs:0.3321, QJs:0.9478, QQ:0.9995, KQo:0.2579, AQo:0.4689, KTs:0.9098, KJs:0.9980, KQs:0.9996, KK:0.4725, AKo:0.6906, A2s:0.0002, A3s:0.0020, A4s:0.2803, A5s:0.8007, A6s:0.0191, A7s:0.0559, A8s:0.0958, A9s:0.9065, ATs:0.9745, AJs:0.9996, AQs:0.9997, AKs:0.5619"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0025, 77:0.0043, 88:0.0580, 99:0.0289, A9o:0.0001, TT:0.0347, ATo:0.0064, JJ:0.0417, AJo:0.0301, QQ:0.0005, KQo:0.0703, AQo:0.1097, K8s:0.0026, KTs:0.0780, KJs:0.0018, KQs:0.0002, KK:0.0898, AKo:0.0112, A2s:0.0580, A3s:0.0353, A4s:0.1243, A5s:0.0958, A6s:0.0355, A7s:0.2207, A8s:0.1314, A9s:0.0434, ATs:0.0234, AJs:0.0002, AQs:0.0003, AKs:0.1357, AA:0.0788"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0009, A3o:0.0002, A4o:0.0763, A5o:0.0892, 66:0.0015, A6o:0.0040, 77:0.0114, A7o:0.0290, 88:0.0114, K8o:0.0001, A8o:0.0070, 99:0.0327, A9o:0.0240, KTo:0.0004, ATo:0.1134, JJ:0.0004, AJo:0.1387, KQo:0.0827, AQo:0.3547, K4s:0.0091, K5s:0.0016, K6s:0.0019, K7s:0.0042, K8s:0.0022, KTs:0.0076, KQs:0.0002, KK:0.2688, AKo:0.0971, A2s:0.7112, A3s:0.6895, A4s:0.4392, A5s:0.0881, A6s:0.6336, A7s:0.3343, A8s:0.6042, A9s:0.0290, ATs:0.0013, AKs:0.2499, AA:0.5405"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0331, A3o:0.1162, K4o:0.0001, A4o:0.0540, K5o:0.0001, A5o:0.0874, K6o:0.0003, A6o:0.0994, K7o:0.0008, A7o:0.0341, A8o:0.0118, A9o:0.0531, ATo:0.0297, AJo:0.0205, KQo:0.0785, AQo:0.0668, K3s:0.0002, K4s:0.0046, K8s:0.0001, K9s:0.0002, KK:0.1688, AKo:0.2011, A2s:0.2152, A3s:0.2679, A4s:0.1505, A5s:0.0096, A6s:0.2765, A7s:0.3854, A8s:0.1637, A9s:0.0157, ATs:0.0001, AJs:0.0001, AKs:0.0526, AA:0.3807"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0016, 54s:0.0054, 55:0.3358, 65s:0.5295, 66:0.5438, 76s:0.0014, 77:0.8138, 88:0.9594, 97s:0.0004, 99:0.9879, T9s:0.3569, TT:0.9322, JTs:0.9193, JJ:0.9920, AJo:0.8621, QTs:0.8854, QJs:0.9938, QQ:0.9991, KQo:0.4993, AQo:0.5368, KTs:0.9691, KJs:0.9968, KQs:0.9994, KK:0.2748, AKo:0.7502, A2s:0.0001, A3s:0.0304, A4s:0.0764, A5s:0.8716, A6s:0.0125, A7s:0.3245, A8s:0.3253, A9s:0.9853, ATs:0.9982, AJs:0.9998, AQs:0.9966, AKs:0.3921"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A4o:0.0001, 66:0.0082, 77:0.0620, 88:0.0196, 99:0.0089, A9o:0.0001, T9s:0.0053, TT:0.0678, ATo:0.0264, JTs:0.0006, JJ:0.0067, AJo:0.0023, QQ:0.0008, KQo:0.0822, AQo:0.0890, K6s:0.0001, K7s:0.0002, K9s:0.0401, KTs:0.0167, KJs:0.0029, KQs:0.0002, KK:0.0673, AKo:0.0148, A2s:0.0202, A3s:0.0585, A4s:0.0155, A5s:0.0304, A6s:0.0162, A7s:0.1636, A8s:0.0466, A9s:0.0041, AJs:0.0001, AQs:0.0034, AKs:0.2162, AA:0.0326"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0087, A4o:0.0912, A5o:0.1661, 66:0.0170, A6o:0.0004, 77:0.0201, A7o:0.0010, 88:0.0208, A8o:0.0001, 99:0.0026, A9o:0.0813, KTo:0.0001, ATo:0.2462, JJ:0.0013, AJo:0.1122, KQo:0.2746, AQo:0.3050, K3s:0.0052, K4s:0.1610, K5s:0.0229, K6s:0.1039, K7s:0.0985, K9s:0.0253, KTs:0.0134, KJs:0.0001, KK:0.4497, AKo:0.1245, A2s:0.5033, A3s:0.5443, A4s:0.7596, A5s:0.0911, A6s:0.4833, A7s:0.3324, A8s:0.5839, A9s:0.0070, ATs:0.0017, AJs:0.0001, AKs:0.3206, AA:0.5128"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0406, K3o:0.0014, A3o:0.1849, K4o:0.0019, A4o:0.1657, K5o:0.0001, A5o:0.0752, K6o:0.0019, A6o:0.0105, K7o:0.0003, A7o:0.0616, K8o:0.0003, A8o:0.0703, K9o:0.0005, A9o:0.0578, KTo:0.0025, ATo:0.1521, KJo:0.0022, AJo:0.0115, KQo:0.0604, AQo:0.0692, K2s:0.0048, K3s:0.0010, K4s:0.0191, K5s:0.0048, K6s:0.0083, K7s:0.0106, K8s:0.0172, K9s:0.0107, KTs:0.0002, KK:0.2075, AKo:0.1105, A2s:0.4520, A3s:0.3656, A4s:0.1484, A5s:0.0063, A6s:0.4454, A7s:0.1747, A8s:0.0438, A9s:0.0034, AKs:0.0710, AA:0.4547"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0008"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0007, 44:0.2017, 54s:0.1621, 55:0.9554, 64s:0.0020, 65s:0.8872, 66:0.9405, 76s:0.3439, 77:0.9720, 88:0.9985, 98s:0.1819, 99:0.9838, T7s:0.0003, T8s:0.1101, T9s:0.9650, TT:0.9993, ATo:0.5554, JTs:0.9980, JJ:0.9866, AJo:0.9942, Q9s:0.3290, QTs:0.9946, QJs:0.9987, QQ:0.9996, KQo:0.9434, AQo:0.8019, K4s:0.0017, K5s:0.0001, K6s:0.3478, K7s:0.0031, K8s:0.1466, K9s:0.9746, KTs:0.9994, KJs, KQs:0.9995, KK:0.6717, A2s:0.0328, A3s:0.0599, A4s:0.3381, A5s:0.9352, A6s:0.0171, A7s:0.7710, A8s:0.7199, A9s:0.9993, ATs:0.9998, AJs, AQs"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "44:0.0196, 55:0.0003, 65s:0.0013, 66:0.0120, A6o:0.0001, 76s:0.0147, 77:0.0159, 87s:0.0006, 88:0.0013, A8o:0.0001, 98s:0.0073, 99:0.0161, A9o:0.0001, T8s:0.0002, T9s:0.0047, TT:0.0005, KTo:0.0011, ATo:0.0228, J9s:0.0339, JJ:0.0134, KJo:0.0302, AJo:0.0004, QJs:0.0007, QQ:0.0004, KQo:0.0096, AQo:0.0381, K5s:0.0001, K6s:0.0054, K7s:0.0545, K9s:0.0001, KTs:0.0005, KQs:0.0002, KK:0.0503, AKo:0.0005, A2s:0.0025, A3s:0.0365, A4s:0.0886, A5s:0.0178, A6s:0.0579, A7s:0.0491, A8s:0.0302, A9s:0.0004, ATs:0.0001, AQs:0.0001, AKs:0.0554, AA:0.0391"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0105, A3o:0.0183, A4o:0.2117, 55:0.0003, A5o:0.0370, 66:0.0387, A6o:0.0002, 77:0.0120, A7o:0.0618, 88:0.0001, A8o:0.0766, A9o:0.0644, KTo:0.0001, ATo:0.2022, KJo:0.0134, AJo:0.0027, KQo:0.0405, AQo:0.1224, K3s:0.0026, K4s:0.0011, K5s:0.0815, K6s:0.0162, K7s:0.0002, K9s:0.0005, KQs:0.0002, KK:0.1408, AKo:0.0010, A2s:0.3749, A3s:0.6662, A4s:0.3400, A5s:0.0427, A6s:0.6940, A7s:0.1464, A8s:0.2467, A9s:0.0002, ATs:0.0001, AKs:0.3734, AA:0.5061"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0024, A2o:0.0750, K3o:0.0001, A3o:0.2025, 44:0.0001, K4o:0.0007, A4o:0.2017, K5o:0.0004, A5o:0.0306, K6o:0.0014, A6o:0.1331, A7o:0.0501, A8o:0.0460, K9o:0.0001, A9o:0.0305, KTo:0.0002, ATo:0.1421, KJo:0.0009, AJo:0.0026, KQo:0.0020, AQo:0.0376, K3s:0.0001, K4s:0.0079, K5s:0.0032, K6s:0.0003, K7s:0.0075, K8s:0.0019, K9s:0.0006, KQs:0.0001, KK:0.1372, AKo:0.0046, A2s:0.5803, A3s:0.2373, A4s:0.2331, A5s:0.0042, A6s:0.2215, A7s:0.0331, A8s:0.0027, AKs:0.3187, AA:0.4548"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.9940, AKs:0.2525"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.5823, 44:0.9965, 54s:0.5743, 55:0.9994, 65s:0.9891, 66, 75s:0.1237, 76s:0.9908, 77, 86s:0.0001, 87s:0.4992, 88, 97s:0.0027, 98s:0.9070, 99, T8s:0.3304, T9s:0.9985, TT, ATo:0.5349, J8s:0.0007, J9s:0.1183, JTs:0.9994, JJ, KJo:0.0467, AJo:0.9515, Q9s:0.3663, QTs:0.9998, QJs:0.9997, QQ, KQo:0.8094, AQo:0.7700, K6s:0.0609, K7s:0.1996, K8s:0.2219, K9s:0.9892, KTs:0.9998, KJs, KQs, AKo:0.7138, A3s:0.0027, A4s:0.0325, A5s:0.9811, A6s:0.2118, A7s:0.5738, A8s:0.9786, A9s, ATs, AJs, AQs, AKs:0.2083"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.2846, A3o:0.4039, K4o:0.0004, A4o:0.3954, A5o:0.3225, A6o:0.0290, A7o:0.1761, K8o:0.0001, A8o:0.1135, K9o:0.0001, A9o:0.1374, KTo:0.0001, ATo:0.4284, KJo:0.1769, AJo:0.0450, KQo:0.1563, AQo:0.2278, K2s:0.0002, K3s:0.0003, K4s:0.0835, K5s:0.0903, K6s:0.4918, K7s:0.1401, K8s:0.3633, K9s:0.0006, KTs:0.0001, KK:0.9473, AKo:0.1998, A2s:0.9925, A3s:0.9845, A4s:0.9659, A5s:0.0188, A6s:0.7766, A7s:0.4255, A8s:0.0188, AKs:0.6264, AA:0.9613"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "A2o:0.0182, K3o:0.0004, A3o:0.0105, K4o:0.0003, A4o:0.0486, K5o:0.0017, A5o:0.0281, A6o:0.0010, K7o:0.0002, A7o:0.0104, K8o:0.0003, A8o:0.0101, A9o:0.0033, ATo:0.0140, KJo:0.0086, AJo:0.0035, KQo:0.0341, AQo:0.0022, K2s:0.0003, K3s:0.0097, K4s:0.0359, K5s:0.0033, K6s:0.0381, K7s:0.0649, K8s:0.0357, KK:0.0527, AKo:0.0864, A2s:0.0072, A3s:0.0127, A4s:0.0015, A6s:0.0111, A7s:0.0002, A8s:0.0025, AKs:0.1653, AA:0.0387"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32s:0.8824, 33:0.9996, 42s:0.9967, 43s:0.9989, 44, 54o:0.6872, 64o:0.0007, A4o:0.3260, 52s:0.9998, 53s, 54s, 55, 65o:0.9998, 75o:0.0001, A5o:0.6082, 62s:0.9963, 63s, 64s, 65s, 66, 76o:0.9940, 86o:0.0006, A6o:0.5847, 72s:0.0001, 73s:0.9963, 74s, 75s, 76s, 77, 87o:0.8305, 97o:0.0032, K7o:0.0001, A7o:0.7958, 82s:0.0139, 83s:0.0629, 84s:0.9975, 85s, 86s, 87s, 88, 98o:0.9546, T8o:0.9968, Q8o:0.0004, K8o:0.0491, A8o:0.6807, 92s:0.0044, 93s:0.0303, 94s:0.0060, 95s:0.9879, 96s, 97s, 98s, 99, T9o:0.9987, J9o:0.8098, Q9o:0.8402, K9o:0.9267, A9o, T3s:0.8622, T4s:0.9823, T5s:0.9990, T6s:0.9993, T7s, T8s, T9s, TT, JTo, QTo:0.9389, KTo:0.9098, ATo:0.9998, J2s:0.3229, J3s:0.9499, J4s:0.9972, J5s:0.9905, J6s:0.9970, J7s, J8s, J9s, JTs, JJ, QJo:0.9736, KJo:0.9567, AJo, Q2s:0.9994, Q3s:0.9993, Q4s:0.9992, Q5s, Q6s, Q7s:0.9997, Q8s, Q9s, QTs, QJs, QQ, KQo:0.9743, AQo:0.9508, K2s:0.9543, K3s:0.9953, K4s:0.9998, K5s:0.9869, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK:0.3874, AKo:0.8379, A2s:0.7199, A3s:0.8123, A4s:0.9024, A5s, A6s:0.9967, A7s:0.9672, A8s:0.9061, A9s, ATs, AJs, AQs, AKs:0.4800"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.0295, 33:0.0004, K3o:0.0003, A3o:0.2638, 54o:0.0206, K4o:0.0227, A4o:0.3625, K5o:0.0006, A5o:0.2834, K6o:0.0470, A6o:0.0876, 87o:0.0001, K7o:0.1535, A7o:0.0902, Q8o:0.0040, K8o:0.0129, A8o:0.0805, J9o:0.0006, Q9o:0.0008, K9o:0.0517, T5s:0.0005, QTo:0.0610, KTo:0.0902, ATo:0.0002, J4s:0.0003, QJo:0.0264, KJo:0.0433, Q4s:0.0004, KQo:0.0257, AQo:0.0492, K2s:0.0457, K3s:0.0046, K4s:0.0001, K5s:0.0131, KK:0.4572, AKo:0.1032, A2s:0.2801, A3s:0.1877, A4s:0.0976, A5s:0.0001, A6s:0.0033, A7s:0.0328, A8s:0.0939, AKs:0.3103, AA:0.3810"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "A2o:0.1143, A3o:0.3547, K4o:0.0005, A4o:0.3085, A5o:0.1080, A6o:0.2699, A7o:0.1126, K8o:0.0001, A8o:0.2386, K3s:0.0001, KK:0.1554, AKo:0.0590, AKs:0.2098, AA:0.6190"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.6423, 65s:0.0089, 66:0.3716, 76s:0.0042, 77:0.4064, 88:0.4711, 98s:0.0003, 99:0.4907, TT:0.6774, J9s:0.0001, JJ:0.9711, AJo:0.0095, QJs:0.0032, QQ:0.9897, KQo:0.1381, AQo:0.5249, K5s:0.0131, K6s:0.1131, K7s:0.0181, K8s:0.0047, K9s:0.1209, KTs:0.7118, KJs:0.8822, KQs:0.9896, KK:0.0001, A3s:0.0059, A4s:0.1985, A5s:0.8640, A6s:0.0173, A7s:0.3445, A8s:0.6733, A9s:0.8830, ATs:0.9884, AJs:0.9985, AQs, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0002, A5o:0.1957, A8o:0.0786, 98s:0.0002, A9o:0.0226, TT:0.0001, KTo:0.0033, ATo:0.0992, KJo:0.0097, AJo:0.2108, KQo:0.0087, AQo:0.1287, K4s:0.0009, K5s:0.0052, K7s:0.0032, K8s:0.0052, K9s:0.0016, KTs:0.0013, KJs:0.0001, KQs:0.0010, KK:0.0002, AKo:0.0018, A2s:0.4148, A3s:0.1276, A4s:0.2756, A5s:0.0070, A6s:0.2407, A7s:0.1373, A8s:0.0710, A9s:0.0196, ATs:0.0047, AJs:0.0003, AKs:0.5184, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0012, A5o:0.0001, 66:0.0004, 88:0.0013, 99:0.0011, TT:0.0122, JJ:0.0094, AJo:0.0001, QQ:0.0030, K6s:0.0022, K7s:0.0019, K8s:0.0066, K9s:0.1209, KTs:0.2064, KJs:0.1129, KQs:0.0045, KK:0.9998, AKo:0.9982, A2s:0.0215, A3s:0.1209, A4s:0.0030, A5s:0.0402, A6s:0.0285, A7s:0.0046, A8s:0.0024, A9s:0.0454, ATs:0.0024, AJs:0.0006, AQs:0.0001, AKs:0.4816"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@17.7",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "33:0.0002, A3o:0.0001, A4o:0.0001, A5o:0.0088, A6o:0.0001, A7o:0.0005, A8o:0.0061, ATo:0.0001, AQo:0.0492, KK:0.1442, A2s:0.0003, A3s:0.0002, A4s:0.0018, A7s:0.0040, A8s:0.0236, AA:0.0174"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, A3o:0.0477, A4o:0.1340, A5o:0.0833, A6o:0.0126, A7o:0.0119, A8o:0.0078, ATo:0.0001, KK:0.3130, AKo:0.1032, A2s:0.2798, A3s:0.1875, A4s:0.0956, A5s:0.0001, A6s:0.0033, A7s:0.0288, A8s:0.0703, AKs:0.3103, AA:0.3636"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.4572, AKo:0.1026, AKs:0.3103, AA:0.3810"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.3617, A5o:0.0179, 65s:0.0001, 66:0.1993, 77:0.1007, 88:0.4313, A8o:0.0007, 98s:0.0004, 99:0.2030, TT:0.1661, ATo:0.0694, JJ:0.1418, AJo:0.2329, QQ:0.8290, AQo:0.5120, K6s:0.0001, KJs:0.0004, KQs:0.0003, KK:0.1832, A2s:0.0070, A3s:0.0188, A4s:0.2765, A5s:0.5898, A6s:0.0147, A7s:0.2091, A8s:0.9155, A9s:0.2513, ATs:0.5653, AJs:0.9831, AQs:0.9975, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0004, A5o:0.0011, 66:0.0004, 77:0.0001, 88:0.0002, A8o:0.0002, 98s:0.0001, 99:0.0241, T9s:0.0038, TT:0.2304, ATo:0.0173, J9s:0.0003, JTs:0.0003, JJ:0.7686, QJs:0.0006, QQ:0.1399, AQo:0.0002, K7s:0.0001, K9s:0.0002, KTs:0.0001, KJs:0.0006, KQs:0.0002, KK:0.8151, AKo, A2s:0.1609, A3s:0.0718, A4s:0.0652, A5s:0.3868, A6s:0.1522, A7s:0.3468, A8s:0.0267, A9s:0.6982, ATs:0.4344, AJs:0.0164, AQs:0.0014, AKs, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@14|LJ:4BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1554, AKo:0.0590, AKs:0.2098, AA:0.6190"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9242, 32s:0.9559, 33:0.9129, 53o:0.0006, 42s:0.9534, 43s:0.9902, 44:0.8700, 54o:0.9666, 64o:0.0521, 52s:0.9952, 53s:0.9981, 54s:0.9998, 55:0.9378, 65o:0.9991, 75o:0.0496, 62s:0.8038, 63s:0.9993, 64s:0.9991, 65s:0.9990, 66:0.9603, 76o:0.9479, 86o:0.5804, 73s:0.6130, 74s:0.9620, 75s:0.9970, 76s:0.9996, 77, 87o:0.8815, 82s:0.0013, 83s:0.0019, 84s:0.9482, 85s:0.9843, 86s:0.9988, 87s, 88, 98o:0.7989, T8o:0.2057, K8o:0.0001, 92s:0.0002, 93s:0.2012, 94s:0.1525, 95s:0.9896, 96s:0.9984, 97s:0.9996, 98s:0.9996, 99, T9o:0.7216, A9o:0.0083, T2s:0.0018, T3s:0.6796, T4s:0.0923, T5s:0.0008, T6s:0.9981, T7s:0.9991, T8s:0.9980, T9s:0.9997, TT:0.9994, JTo:0.9922, QTo:0.9860, KTo:0.8092, ATo:0.9078, J3s:0.7231, J4s:0.8310, J5s:0.9405, J6s:0.9569, J7s:0.9966, J8s:0.9989, J9s:0.9863, JTs:0.9997, JJ:0.9996, QJo:0.9810, KJo:0.9273, AJo:0.9007, Q2s:0.1734, Q3s:0.8677, Q4s:0.9500, Q5s:0.9837, Q6s:0.9900, Q7s:0.9938, Q8s:0.9803, Q9s:0.9970, QTs, QJs, QQ:0.3676, KQo:0.6267, AQo:0.7460, K2s:0.7084, K3s:0.8372, K4s:0.9780, K5s:0.8627, K6s:0.9738, K7s:0.9976, K8s:0.9919, K9s:0.9976, KTs:0.9970, KJs, KQs:0.8016, A2s:0.2320, A3s:0.5620, A4s:0.6965, A5s:0.8163, A6s:0.9401, A7s:0.9759, A8s:0.9433, A9s:0.9945, ATs:0.9990, AJs:0.9973, AQs:0.8135"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0050, A2o:0.2345, K3o:0.0236, A3o:0.3299, K4o:0.0001, A4o:0.5228, K5o:0.0900, A5o:0.5206, K6o:0.0686, A6o:0.1966, K7o:0.2376, A7o:0.2151, K8o:0.0119, A8o:0.0742, K9o:0.1032, A9o:0.0378, T3s:0.0002, TT:0.0006, KTo:0.1838, ATo:0.0902, JJ:0.0002, KJo:0.0717, AJo:0.0989, Q8s:0.0001, QQ:0.1347, KQo:0.1484, AQo:0.1619, K2s:0.2882, K3s:0.1557, K4s:0.0053, K5s:0.1361, K6s:0.0250, K7s:0.0001, K8s:0.0012, K9s:0.0006, KQs:0.0002, KK:0.9931, AKo:0.2188, A2s:0.2939, A3s:0.0283, A4s:0.0114, A5s:0.0015, A6s:0.0018, A7s:0.0023, A8s:0.0006, A9s:0.0034, ATs:0.0008, AJs:0.0025, AQs:0.0140, AKs:0.3417, AA:0.7543"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0027, A2o:0.0947, K3o:0.0070, A3o:0.1028, K4o:0.0001, A4o:0.1118, A5o:0.0221, A6o:0.0872, K7o:0.0090, A7o:0.0241, K8o:0.0001, A8o:0.1076, K9o:0.0001, A9o:0.0193, QQ:0.1233, KQo:0.0002, K2s:0.0006, K3s:0.0024, K4s:0.0011, K5s:0.0001, K6s:0.0002, K8s:0.0002, KTs:0.0001, KQs:0.0001, KK:0.0069, AKo:0.0516, A2s:0.0001, A4s:0.0001, AKs:0.2112, AA:0.2457"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0758, A2o:0.0714, 33:0.0871, A3o:0.1084, 44:0.1296, A4o:0.0948, 55:0.0622, A5o:0.0462, 66:0.0396, JJ:0.0002, QQ:0.3743, KQo:0.2244, AQo:0.0921, K3s:0.0013, K4s:0.0002, K5s:0.0001, K6s:0.0005, K8s:0.0003, K9s:0.0004, KTs:0.0022, KQs:0.1980, AKo:0.7295, A2s:0.4734, A3s:0.4095, A4s:0.2918, A5s:0.1817, A6s:0.0566, A7s:0.0214, A8s:0.0559, A9s:0.0008, ATs:0.0001, AQs:0.1724, AKs:0.4471"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.2548, 65s:0.0021, 66:0.0753, 77:0.1660, 88:0.0004, 99:0.1203, TT:0.0356, JJ:0.1979, AJo:0.0001, QQ:0.8182, AQo:0.0175, K4s:0.0004, K6s:0.0806, K8s:0.0029, KTs:0.0406, KJs:0.5024, KQs:0.5080, KK:0.1916, A4s:0.0332, A5s:0.1421, A6s:0.0001, A7s:0.0090, A8s:0.0877, A9s:0.0084, ATs:0.7463, AJs:0.3612, AQs:0.9347, AKs:0.0013, AA:0.0012"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0099, 66:0.0002, 77:0.0002, 88:0.0004, A8o:0.0027, A9o:0.0552, TT:0.0209, KTo:0.0120, ATo:0.0298, JJ:0.0011, AJo:0.0781, QTs:0.0001, QQ:0.0145, KQo:0.0011, AQo:0.3199, K5s:0.0018, K6s:0.0105, K8s:0.0232, KJs:0.0003, KQs:0.0121, KK:0.0001, AKo:0.0173, A2s:0.0766, A3s:0.2217, A4s:0.1235, A5s:0.3028, A6s:0.2093, A7s:0.0134, A8s:0.0528, A9s:0.0152, ATs:0.0949, AJs:0.1158, AQs:0.0476, AKs:0.2389, AA:0.9988"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0221, A5o:0.0009, 66:0.0010, 76s:0.0027, 77:0.0445, 88:0.0115, 99:0.0293, T9s:0.0016, TT:0.0769, JJ:0.0231, AJo:0.0002, QTs:0.0002, QQ:0.0110, AQo:0.0005, K4s:0.0088, K6s:0.1660, K7s:0.1251, K8s:0.1584, K9s:0.0794, KTs:0.1635, KJs:0.3653, KQs:0.0006, KK:0.8083, AKo:0.9827, A2s:0.1658, A3s:0.1277, A4s:0.1794, A5s:0.3607, A6s:0.0358, A7s:0.1019, A8s:0.1561, A9s:0.0636, ATs:0.0233, AJs:0.0895, AQs:0.0047, AKs:0.7598, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0043, 65s:0.0170, 66:0.3264, 77:0.2119, 88:0.1689, 99:0.1712, TT:0.4599, JJ:0.0823, QQ:0.7969, K7s:0.0012, K8s:0.0012, K9s:0.0005, KJs:0.4268, KQs:0.3585, A4s:0.0007, A5s:0.1273, A6s:0.0009, A7s:0.0821, A8s:0.1892, A9s:0.2148, ATs:0.4869, AJs:0.6877, AQs:0.9997, AKs:0.0003"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0016, 44:0.0005, 55:0.0264, 66:0.3068, 76s:0.0005, 77:0.0021, 87s:0.0017, 88:0.2656, 98s:0.0001, 99:0.0403, TT:0.0855, JJ:0.2674, AJo:0.0004, QTs:0.0005, QQ:0.0066, K7s:0.0365, K9s:0.2375, KTs:0.0713, KJs:0.5027, KQs:0.1214, AKo:0.7138, A3s:0.0011, A4s:0.0153, A5s:0.4395, A6s:0.0477, A7s:0.0145, A8s:0.2764, A9s:0.1537, ATs:0.4990, AJs:0.1038, AQs:0.0001, AKs:0.2080"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0344, A5o:0.0295, 66:0.2232, 77:0.1516, 88:0.2009, A8o:0.0127, 99:0.0376, A9o:0.0092, TT:0.5267, ATo:0.2218, J9s:0.0021, JJ:0.0269, AJo:0.0754, QJs:0.0006, QQ:0.2032, AQo:0.1769, K4s:0.0037, K6s:0.0165, K9s:0.0064, KTs:0.0043, KJs:0.0020, KQs:0.2877, KK:0.4726, A2s:0.0011, A3s:0.0024, A4s:0.0254, A5s:0.7138, A6s:0.1343, A7s:0.3605, A8s:0.3718, A9s:0.1078, ATs:0.4953, AJs:0.5107, AQs:0.9676, AKs:0.1761, AA:0.6735"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0026, A5o:0.0006, 66:0.0212, 76s:0.0001, 77:0.0026, 88:0.0033, 98s:0.0001, 99:0.0188, A9o:0.0004, T8s:0.0006, T9s:0.0043, TT:0.1328, ATo:0.0163, J9s:0.0071, JTs:0.0003, JJ:0.0947, KJo:0.0008, AJo:0.0066, Q8s:0.0001, Q9s:0.0050, QTs:0.0040, QJs:0.0002, QQ:0.1625, KQo:0.0010, AQo:0.0013, K4s:0.0001, K5s:0.0001, K7s:0.0113, K8s:0.0013, K9s:0.0143, KTs:0.0186, KJs:0.0052, KQs:0.0241, KK:0.5101, AKo:0.9995, A2s:0.0654, A3s:0.0004, A4s:0.0131, A5s:0.0330, A6s:0.0837, A7s:0.0339, A8s:0.2706, A9s:0.2357, ATs:0.0824, AJs:0.1811, AQs:0.0107, AKs:0.8237, AA:0.3265"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@14",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0001, 99:0.0014, TT:0.0001, JJ:0.0002, QQ:0.0052, A5s:0.0016, ATs:0.0193, AJs:0.0036, AQs:0.1627"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0531, 55:0.0049, 66:0.0932, 75s:0.0013, 77:0.1221, 87s:0.0004, 88:0.0531, 99:0.0450, T9s:0.0155, TT:0.0219, JJ:0.1419, QJs:0.0001, QQ:0.5676, AQo:0.1507, K8s:0.0006, K9s:0.0037, KTs:0.0051, KJs:0.0004, KQs:0.0094, AKo:0.7137, A4s:0.0097, A5s:0.3249, A6s:0.0593, A7s:0.0165, A8s:0.1867, A9s:0.3441, ATs:0.3160, AJs:0.1960, AQs:0.5592, AKs:0.2082"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, JJ:0.0382, QQ:0.8138, KK, AKo:0.3774, AKs:0.5529, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0424, JJ:0.0783, QQ:0.8397, AKo:0.1946, AKs:0.1086"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0765, K3o:0.0022, A3o:0.1122, A4o:0.1082, K6o:0.0004, A6o:0.1397, A7o:0.0001, K8o:0.0003, 99:0.0028, A9o:0.0014, ATo:0.0003, JJ:0.0022, KJo:0.0018, AJo:0.0042, AQo:0.1129, K2s:0.0042, K3s:0.0255, K4s:0.1461, K5s:0.0091, K7s:0.0001, K8s:0.0055, K9s:0.0002, KTs:0.0041, KJs:0.0005, KQs:0.0052, KK:0.0001, AKo:0.1583, A2s:0.1091, A3s:0.0900, A4s:0.0034, A5s:0.0056, A6s:0.0025, A7s:0.0610, A8s:0.0942, A9s:0.1048, ATs:0.1556, AJs:0.1851, AQs:0.0792, AKs:0.1461, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "86s:0.0001, QQ:0.0001, K2s:0.0003, K5s:0.0002, K6s:0.0002, K7s:0.0003, KTs:0.0004, KJs:0.0354, KQs:0.0110, KK, AKo:0.8416, A2s:0.0512, A3s:0.0245, A4s:0.0006, A5s:0.0184, A6s:0.0218, A7s:0.0319, A8s:0.0020, A9s:0.0164, ATs:0.0239, AJs:0.0121, AQs:0.0003, AKs:0.8539"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.2761, 65s:0.0045, 66:0.5143, 76s:0.0449, 77:0.0667, 88:0.2827, 99:0.0146, T9s:0.0001, TT:0.1902, JJ:0.4874, QQ:0.9881, AQo:0.2299, K6s:0.0444, KTs:0.0887, KJs:0.1465, KQs:0.6218, A2s:0.0001, A4s:0.0400, A5s:0.0661, A6s:0.0034, A7s:0.0007, A8s:0.2079, A9s:0.0128, ATs:0.8262, AJs:0.9299, AQs:0.8498"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0011, 88:0.0005, A8o:0.0397, A9o:0.0049, TT:0.0003, JJ:0.0088, AJo:0.0658, QQ:0.0070, AQo:0.5300, K5s:0.0001, K6s:0.0230, K7s:0.0009, K8s:0.0025, KTs:0.0001, KJs:0.0024, KQs:0.0001, KK:0.0001, AKo:0.0005, A2s:0.1236, A3s:0.0776, A4s:0.0047, A5s:0.0103, A6s:0.2008, A7s:0.0793, A8s:0.2263, A9s:0.0326, ATs:0.0072, AJs:0.0664, AQs:0.1498, AKs:0.0464, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0141, 77:0.1803, 88:0.2050, 99:0.6379, TT:0.1500, JJ:0.4639, QQ:0.0002, K6s:0.0365, K8s:0.0013, K9s:0.1010, KTs:0.5594, KJs:0.6918, KQs:0.0402, KK, AKo:0.9995, A2s:0.3279, A3s:0.4562, A4s:0.2405, A5s:0.8787, A6s:0.1258, A7s:0.3934, A8s:0.0761, A9s:0.1565, ATs:0.1656, AJs:0.0002, AQs:0.0002, AKs:0.9536"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0001, ATo:0.0003, AJo:0.0003, AQo:0.1788, KK:0.4767, AKo:0.0129, A2s:0.0382, A3s:0.0088, A4s:0.0045, A5s:0.0007, A6s:0.0783, A7s:0.0268, A8s:0.0032, AKs:0.0204, AA:0.0589"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0002, A4o:0.0007, A5o:0.0002, ATo:0.0031, AJo:0.0176, AQo:0.0490, KK:0.4409, AKo:0.1869, A2s:0.9346, A3s:0.7853, A4s:0.9493, A5s:0.0168, A6s:0.5201, A7s:0.3836, A8s:0.0050, AKs:0.6060, AA:0.9024"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9473, AKo:0.1995, AKs:0.6264, AA:0.9613"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "TT:0.0001, AJo:0.0057, QQ:0.0003, K6s:0.0002, KK:0.0557, AKo:0.0001, A3s:0.0167, A6s:0.0001, A8s:0.0004, ATs:0.0261, AJs:0.0223, AQs:0.0252, AKs:0.0901, AA:0.1330"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, QTs:0.0001, QQ:0.0014, K8s:0.0001, K9s:0.0002, KJs:0.0004, KK:0.0129, AKo:0.9940, A2s:0.0132, A4s:0.0008, A6s:0.0267, A7s:0.0005, A8s:0.0116, A9s:0.0015, ATs:0.0005, AJs:0.0055, AQs:0.0062, AKs:0.8701, AA:0.8670"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0019, A3o:0.0015, A4o:0.0181, A5o:0.0171, A6o:0.0002, A7o:0.0034, A8o:0.0004, A9o:0.0068, ATo:0.0621, AJo:0.0120, AQo:0.1475, K5s:0.0039, K7s:0.0001, KK:0.4633, AKo:0.0001, A2s:0.0714, A3s:0.0147, A4s:0.0717, A5s:0.0025, A6s:0.0603, A7s:0.1087, A8s:0.0054, AKs:0.0185, AA:0.0149"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0005, A3o:0.0017, A4o:0.0004, A5o:0.0620, A6o:0.0022, A7o:0.0016, A8o:0.0022, A9o:0.0014, ATo:0.0023, AJo:0.0012, AQo:0.0005, KK:0.3614, AKo:0.1997, A2s:0.3399, A3s:0.7976, A4s:0.8061, A5s:0.0160, A6s:0.5498, A7s:0.1372, A8s:0.0103, AKs:0.6078, AA:0.9464"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0002, TT:0.0002, QQ:0.0002, KK, A2s:0.0001, AQs:0.0001, AKs:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9473, AKo:0.0328, AKs:0.6261, AA:0.9613"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@14",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2078, A2o:0.0376, 32s:0.0081, 33:0.2336, A3o:0.0557, 44:0.1984, A4o:0.0363, 54s:0.0352, 55:0.1909, A5o:0.0041, 66:0.1433, K6o:0.0124, A6o:0.0225, 74s:0.0005, 75s:0.0341, 76s:0.0209, 77:0.3378, 97o:0.0001, K7o:0.0001, A7o:0.0044, 87s:0.0001, 88:0.2037, A8o:0.0072, 92s:0.0003, 95s:0.0018, 96s:0.0004, 97s:0.0393, 98s:0.0003, 99:0.6756, K9o:0.0133, A9o:0.0142, TT:0.3401, KTo:0.0098, ATo:0.0147, J5s:0.0001, J9s:0.0024, JTs:0.0006, JJ:0.1355, KJo:0.0148, AJo:0.0050, Q5s:0.0012, Q6s:0.0001, Q7s:0.0001, Q9s:0.0003, QJs:0.0015, QQ:0.1926, KQo:0.0003, AQo:0.0194, K2s:0.0662, K3s:0.1014, K4s:0.2922, K5s:0.0348, K6s:0.0702, K7s:0.1035, K8s:0.0146, K9s:0.0742, KTs:0.0757, KJs:0.0404, KQs:0.0423, KK:0.9993, AKo, A2s:0.0791, A3s:0.1230, A4s:0.0974, A5s:0.1010, A6s:0.1673, A7s:0.0985, A8s:0.0265, A9s:0.0520, ATs:0.0484, AJs:0.0633, AQs:0.0308, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.2237, A5o:0.0003, 66:0.2539, 76s:0.0012, 77:0.1847, 88:0.2593, 98s:0.0001, 99:0.0471, T9s:0.0003, TT:0.1399, ATo:0.0033, J9s:0.0011, JJ:0.3279, AJo:0.0185, QQ:0.9135, KQo:0.0265, AQo:0.1334, K5s:0.0017, K7s:0.2484, K9s:0.0202, KTs:0.0535, KJs:0.3206, KQs:0.3472, KK:0.0649, A2s:0.0010, A3s:0.0616, A4s:0.0018, A5s:0.0672, A6s:0.0041, A7s:0.0348, A8s:0.0742, A9s:0.2500, ATs:0.2812, AJs:0.6429, AQs:0.5860, AKs:0.0227, AA:0.0500"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0538, A5o:0.0026, 66:0.0686, 76s:0.0003, 77:0.1659, 88:0.0314, A8o:0.0001, 98s:0.0001, 99:0.2522, T9s:0.0001, TT:0.0841, KTo:0.0006, J9s:0.0002, JJ:0.1623, KJo:0.0015, AJo:0.0004, QJs:0.0002, QQ:0.0029, KQo:0.0028, AQo:0.0001, K4s:0.0072, K5s:0.0449, K6s:0.0633, K7s:0.0436, K8s:0.0060, K9s:0.0073, KTs:0.0475, KJs:0.0486, KQs:0.0120, KK:0.9350, AKo, A2s:0.1597, A3s:0.0542, A4s:0.0535, A5s:0.0940, A6s:0.0366, A7s:0.0245, A8s:0.0024, A9s:0.1679, ATs:0.0307, AJs:0.0218, AQs:0.0729, AKs:0.9773, AA:0.9500"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@14|LJ:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0527, AKo:0.0594, AKs:0.1509, AA:0.0387"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0001, 76s:0.0001, 77:0.0002, 88:0.0005, 99:0.0001, A9o:0.0002, T8s:0.0001, T9s:0.0001, J9s:0.0002, JJ:0.0024, AJo:0.0001, Q8s:0.0001, Q9s:0.0001, QJs:0.0001, QQ:0.0007, KQo:0.0001, AQo:0.0001, K6s:0.0002, K7s:0.0001, K8s:0.0002, K9s:0.0002, KJs:0.0001, KQs:0.0016, KK:0.8356, AKo:0.0001, A2s:0.0001, A3s:0.0001, A4s:0.0001, A5s:0.0001, A7s:0.0002, A9s:0.0001, ATs:0.0003, AJs:0.0004, AQs:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@14|BB:4BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0527, AKo:0.0535, AKs:0.1256, AA:0.0387"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "Q2o:0.0002, K2o:0.0890, A2o:0.3091, Q3o:0.0001, K3o:0.0085, A3o:0.2155, 44:0.0010, Q4o:0.0009, K4o:0.1112, A4o:0.1861, 54s:0.0001, Q5o:0.0001, K5o:0.0019, A5o:0.1218, 66:0.0003, K6o:0.0322, A6o:0.0197, 73s:0.0001, Q7o:0.0007, K7o:0.0002, A7o:0.0041, 88:0.0130, A8o:0.0451, A9o:0.0030, TT:0.0002, JJ:0.0011, Q2s:0.0001, Q5s:0.0006, Q6s:0.0009, Q7s:0.0001, Q8s:0.0022, Q9s:0.0021, QTs:0.0001, QQ:0.6865, KQo:0.6865, AQo:0.8827, K2s:0.1234, K3s:0.0150, K4s:0.1856, K5s:0.2690, K6s:0.0157, K7s:0.3622, K8s:0.0049, K9s:0.0019, KQs:0.2616, KK:0.9063, AKo:0.2099, A2s:0.7952, A3s:0.5458, A4s:0.8016, A5s:0.3990, A6s:0.6266, A7s:0.2495, A8s:0.3460, A9s:0.2090, ATs:0.0584, AJs:0.0004, AQs:0.7759, AKs:0.3708, AA:0.9313"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0121, Q3o:0.0028, K3o:0.0159, A3o:0.0118, K4o:0.0123, A4o:0.0021, K6o:0.0060, A6o:0.0001, K7o:0.0006, K9o:0.0002, JJ:0.0010, Q3s:0.0096, Q7s:0.0012, QQ:0.2784, KQo:0.2522, AQo:0.1151, K2s:0.0082, K3s:0.0102, K4s:0.0893, K5s:0.0275, K6s:0.0243, K7s:0.0368, K8s:0.0015, K9s:0.0001, KTs:0.0001, KJs:0.0005, KQs:0.1184, KK:0.0937, AKo:0.0264, A2s:0.0001, A3s:0.0072, A4s:0.0168, A5s:0.0141, A7s:0.0003, A9s:0.0003, AQs:0.1671, AKs:0.0302, AA:0.0687"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0010, 33:0.0632, 44:0.1836, 55:0.0096, 66:0.0052, 77:0.0097, 88:0.0116, JJ:0.0019, QQ:0.0351, KQo:0.0055, AQo:0.0022, K3s:0.0590, K4s:0.1274, K5s:0.0068, K6s:0.0025, K7s:0.0093, K8s:0.0385, K9s:0.0003, KTs:0.0739, KQs:0.6195, AKo:0.7638, A2s:0.1353, A3s:0.2256, A4s:0.0254, A5s:0.2296, A6s:0.0179, A7s:0.1587, A8s:0.0700, A9s:0.0083, ATs:0.0295, AQs:0.0563, AKs:0.5991"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9994, 33:0.9991, 43s:0.4560, 44:0.8803, 53s:0.8196, 54s:0.9965, 55, 65o:0.1797, 63s:0.4989, 64s:0.9500, 65s:0.9866, 66:0.9995, 74s:0.3813, 75s:0.9195, 76s:0.9865, 77:0.9929, 85s:0.5219, 86s:0.9062, 87s:0.9639, 88:0.9998, 96s:0.8657, 97s:0.9004, 98s:0.9504, 99:0.9997, T7s:0.6623, T8s:0.9310, T9s:0.9449, TT:0.9998, J4s:0.0002, J7s:0.0002, J8s:0.7726, J9s:0.9449, JTs:0.9593, JJ:0.9821, KJo:0.5332, AJo:0.9809, Q5s:0.0002, Q6s:0.3879, Q7s:0.3238, Q8s:0.3065, Q9s:0.5012, QTs:0.9737, QJs:0.9960, QQ:0.9876, KQo:0.9512, AQo:0.2029, K2s:0.0020, K3s:0.2158, K4s:0.3974, K5s:0.8410, K6s:0.5143, K7s:0.4249, K8s:0.9565, K9s:0.8980, KTs:0.9885, KJs:0.9834, KQs:0.9823, AKo:0.0001, A2s:0.0809, A3s:0.0729, A4s:0.3788, A5s:0.7608, A6s:0.5601, A7s:0.7294, A8s:0.4316, A9s:0.9895, ATs:0.9916, AJs:0.9998, AQs:0.9286"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0002, Q2o:0.0001, A2o:0.3066, 33:0.0001, Q3o:0.0003, K3o:0.0011, A3o:0.0918, A4o:0.2386, A5o:0.3411, A6o:0.0052, Q7o:0.0001, A7o:0.0801, A8o:0.1443, A9o:0.0522, ATo:0.0003, JJ:0.0001, Q2s:0.0004, Q3s:0.0036, Q4s:0.0086, Q5s:0.0012, Q6s:0.0015, Q7s:0.0004, QQ:0.0094, KQo:0.0046, AQo:0.7638, K2s:0.0073, K4s:0.0387, K5s:0.0008, K6s:0.0022, K7s:0.0019, KK:0.3951, AKo:0.0242, A2s:0.2991, A3s:0.4183, A4s:0.1113, A5s:0.1792, A6s:0.4018, A7s:0.0763, A8s:0.2865, ATs:0.0001, AQs:0.0674, AKs:0.2887, AA:0.8178"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0843, A2o:0.0301, K3o:0.0171, A3o:0.0851, K4o:0.1372, A4o:0.1665, K5o:0.0007, A5o:0.1711, K6o:0.0104, K7o:0.1262, A7o:0.0223, 86s:0.0001, 87s:0.0001, K8o:0.0048, A8o:0.0019, A9o:0.0233, JJ:0.0177, KJo:0.0787, AJo:0.0056, QTs:0.0001, QJs:0.0002, KQo:0.0348, AQo:0.0332, K2s:0.1189, K3s:0.4637, K4s:0.0093, K5s:0.0151, K6s:0.0168, K7s:0.1163, K8s:0.0004, K9s:0.0126, KJs:0.0001, KK:0.6048, AKo:0.0734, A2s:0.0080, A3s:0.0004, A4s:0.0007, A6s:0.0028, A7s:0.0012, A8s:0.0056, AQs:0.0031, AKs:0.2419, AA:0.1822"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0008, 44:0.1197, A4o:0.0008, 66:0.0001, 76s:0.0001, 77:0.0070, 86s:0.0001, Q3s:0.0001, Q4s:0.0001, Q9s:0.0001, QQ:0.0029, KQo:0.0034, AQo:0.0001, K2s:0.0240, K3s:0.0573, K4s:0.5226, K5s:0.0027, K6s:0.3649, K7s:0.3936, K8s:0.0002, K9s:0.0429, KTs:0.0031, KJs:0.0002, KQs:0.0177, KK:0.0001, AKo:0.9023, A2s:0.6042, A3s:0.4959, A4s:0.5031, A5s:0.0519, A6s:0.0142, A7s:0.1876, A8s:0.2589, A9s:0.0004, ATs:0.0053, AQs:0.0009, AKs:0.4694"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.0676, 65s:0.0002, 66:0.1096, 76s:0.0219, 77:0.0035, 88:0.1901, 99:0.0035, TT:0.0897, JJ:0.0591, QQ:0.1250, AQo:0.1098, K8s:0.0004, KK:0.1724, AKo:0.0003, A8s:0.0005, A9s:0.0002, ATs:0.1146, AJs:0.0015, AQs:0.9631, AA:0.0178"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.1405, 66:0.1140, 77:0.0012, 87s:0.0030, 88:0.0016, A8o:0.0279, A9o:0.2003, KTo:0.0064, ATo:0.0070, J9s:0.0001, JJ:0.0001, KJo:0.0001, AJo:0.0040, Q9s:0.0001, QQ:0.0117, AQo:0.4379, K5s:0.0744, K6s:0.0364, K8s:0.0032, K9s:0.0347, KTs:0.0095, KJs:0.0202, AKo:0.0503, A2s:0.0214, A3s:0.1651, A4s:0.0130, A5s:0.0492, A6s:0.0360, A7s:0.0293, A8s:0.0163, A9s:0.0259, ATs:0.0579, AJs:0.1823, AQs:0.0078, AKs:0.6486, AA:0.9821"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0078, A5o:0.0061, 66:0.0067, 76s:0.0003, 77:0.0001, 88:0.0001, 99:0.0013, A9o:0.0288, T9s:0.0026, TT:0.0018, KTo:0.0035, ATo:0.0052, J9s:0.0010, JTs:0.0001, JJ:0.0002, AJo:0.0012, QQ:0.0030, KQo:0.0007, AQo:0.0007, K4s:0.0001, K5s:0.0122, K6s:0.0564, K8s:0.0285, K9s:0.1816, KTs:0.0113, KJs:0.3940, KQs:0.0678, KK:0.8276, AKo:0.9494, A2s:0.8550, A3s:0.6685, A4s:0.8873, A5s:0.8035, A6s:0.7369, A7s:0.9505, A8s:0.7375, A9s:0.3401, ATs:0.3544, AJs:0.4141, AQs:0.0011, AKs:0.3514"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0089, 55:0.2560, 65s:0.0018, 66:0.3034, 76s:0.0128, 77:0.0180, 88:0.4273, TT:0.1079, QJs:0.0001, QQ:0.9705, AQo:0.4856, KTs:0.2613, KJs:0.3009, KK:0.1723, A4s:0.0075, A5s:0.0216, A6s:0.0004, A7s:0.0658, A8s:0.0852, A9s:0.1243, ATs:0.0885, AJs:0.3136, AQs:0.7424"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "QQ:0.0003, AQo:0.0003, KK:0.0015, ATs:0.0001, AJs:0.0004, AQs:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0599, 66:0.0497, 76s:0.0216, 88:0.0383, 99:0.1219, TT:0.0017, JJ:0.0082, QQ:0.0237, AQo:0.0957, K6s:0.0295, K7s:0.0002, K8s:0.0002, K9s:0.0561, KTs:0.0222, KJs:0.0428, KQs:0.0049, KK:0.4979, A2s:0.0015, A3s:0.0250, A4s:0.0968, A5s:0.3824, A6s:0.0040, A7s:0.2267, A8s:0.1822, A9s:0.2252, ATs:0.3383, AJs:0.1364, AQs:0.2525"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0022, 77:0.0393, JJ:0.0093, QQ:0.0527, K6s:0.2007, K7s:0.0006, K8s:0.0067, K9s:0.0119, KJs:0.1663, KQs:0.1372, A2s:0.0002, A3s:0.0092, A5s:0.1357, A6s:0.0566, A7s:0.0335, A8s:0.0627, A9s:0.0369, ATs:0.0302, AJs:0.1295, AQs:0.5808, AKs:0.0005, AA:0.2475"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0029, 66:0.0108, 76s:0.0030, 77:0.1172, 88:0.0021, A8o:0.0027, 99:0.0424, A9o:0.0004, TT:0.0190, KTo:0.0001, JJ:0.0205, KJo:0.0002, AJo:0.0047, QQ:0.0113, AQo:0.0002, K4s:0.0035, K5s:0.4013, K6s:0.1742, K7s:0.0510, K8s:0.1213, K9s:0.2669, KTs:0.2236, KJs:0.1046, KQs:0.0672, KK, AKo, A2s:0.1689, A3s:0.1898, A4s:0.4339, A5s:0.8569, A6s:0.3991, A7s:0.3518, A8s:0.4771, A9s:0.1119, ATs:0.1852, AJs:0.5051, AQs:0.1776, AKs:0.9995, AA:0.7525"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0693, 77:0.0049, 88:0.0945, JJ:0.0006, QQ:0.2018, KQo:0.0020, K6s:0.0005, K9s:0.0226, KTs:0.0724, KJs:0.2279, KQs:0.0393, KK:0.0703, A4s:0.0538, A7s:0.1135, A8s:0.0284, A9s:0.0149, ATs:0.0207, AJs:0.0561, AQs:0.1010"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0111, 65s:0.0021, 66:0.0519, 77:0.0001, 88:0.0012, 99:0.0262, TT:0.1445, JJ:0.0566, QQ:0.1015, AQo:0.0005, K6s:0.0006, K8s:0.0010, K9s:0.5304, KTs:0.4109, KJs:0.1447, KQs:0.1029, KK:0.6014, A2s:0.0197, A3s:0.0375, A4s:0.0272, A5s:0.4993, A6s:0.0088, A7s:0.5024, A8s:0.3240, A9s:0.0835, ATs:0.6695, AJs:0.8248, AQs:0.6777"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0012, JJ:0.0014, QQ:0.0280, KK, AKo:0.9780, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.3339, QQ:0.2105, KK:0.6717"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0019, 66:0.1162, 88:0.0191, QQ:0.3051, AQo:0.0379, K6s:0.0014, KTs:0.0004, KQs:0.0168, KK:0.0007, AKo:0.0001, A5s:0.0002, A6s:0.0005, A9s:0.0002, ATs:0.0002, AQs:0.8344, AKs:0.0001, AA:0.0020"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0011, A5o:0.0389, 66:0.0005, 76s:0.0003, 77:0.0007, 88:0.0036, A8o:0.0217, 98s:0.0001, 99:0.0006, A9o:0.0462, T8s:0.0001, TT:0.0018, ATo:0.1147, JJ:0.0007, AJo:0.0395, QTs:0.0023, QQ:0.0317, AQo:0.0700, K5s:0.0017, K6s:0.0152, K7s:0.0015, K9s:0.0003, KTs:0.0004, KK:0.0003, AKo:0.0106, A2s:0.0578, A3s:0.0601, A4s:0.0025, A5s:0.2213, A6s:0.1347, A7s:0.2201, A8s:0.1938, A9s:0.2000, ATs:0.1756, AJs:0.1174, AQs:0.0134, AKs:0.3168, AA:0.9979"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0024, 66:0.0005, 76s:0.0005, 77:0.0013, 88:0.0004, 98s:0.0001, 99:0.0006, A9o:0.0001, T8s:0.0021, TT:0.0029, KTo:0.0014, ATo:0.0001, JJ:0.0006, KJo:0.0006, QJs:0.0001, QQ:0.0005, K4s:0.0042, K5s:0.3265, K6s:0.4361, K7s:0.1913, K8s:0.4871, K9s:0.3731, KTs:0.7473, KJs:0.5645, KQs:0.1036, KK:0.9990, AKo:0.9893, A2s:0.5794, A3s:0.3819, A4s:0.5941, A5s:0.5745, A6s:0.1949, A7s:0.3275, A8s:0.2717, A9s:0.0259, ATs:0.3039, AJs:0.6152, AQs:0.0011, AKs:0.6832"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0627, 66:0.1107, 77:0.1443, 88:0.1054, 99:0.0068, JJ:0.0374, QQ:0.3753, AQo:0.1795, K9s:0.0006, KTs:0.0068, KJs:0.1200, KQs:0.0535, KK:0.0011, A4s:0.0001, A5s:0.0002, A7s:0.0072, A8s:0.0078, A9s:0.0534, ATs:0.2231, AQs:0.8301"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "QQ:0.0010, KQo:0.0006, AQo:0.0029, KJs:0.0001, KQs:0.0001, KK:0.0026, A8s:0.0001, AQs:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0591, 66:0.2979, 77:0.1352, 88:0.0748, 99:0.0513, TT:0.2195, JJ:0.0924, QQ:0.5973, AQo:0.1578, K6s:0.0055, K7s:0.0002, K8s:0.0044, K9s:0.2798, KTs:0.4294, KJs:0.2337, KQs:0.2934, KK:0.6679, A2s:0.0044, A3s:0.0263, A4s:0.1042, A5s:0.7636, A6s:0.0046, A7s:0.2665, A8s:0.1078, A9s:0.2961, ATs:0.1429, AJs:0.0069, AQs:0.1675"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "76s:0.0114, 77:0.0012, 88:0.0384, 99:0.0001, QQ:0.2352, KQo:0.0860, AQo:0.0389, K6s:0.0036, K7s:0.0032, K9s:0.0010, KTs:0.0001, KQs:0.2465, KK:0.0007, AKo:0.0153, A3s:0.0003, A4s:0.0138, A5s:0.0002, A8s:0.0016, ATs:0.0046, AQs:0.7052, AKs:0.0374, AA:0.1764"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0300, A5o:0.0611, 66:0.0017, 76s:0.0086, 77:0.0130, 88:0.0001, A8o:0.0001, 98s:0.0009, 99:0.0145, T8s:0.0057, TT:0.0058, KTo:0.0001, ATo:0.0255, JTs:0.0010, JJ:0.0195, KJo:0.0025, AJo:0.0505, Q9s:0.0001, QTs:0.0913, QJs:0.0033, QQ:0.4801, KQo:0.2407, AQo:0.3217, K4s:0.0072, K5s:0.0031, K6s:0.0701, K7s:0.0369, K8s:0.0211, K9s:0.0039, KTs:0.0198, KJs:0.0010, KQs:0.3781, KK:0.9993, AKo:0.9847, A2s:0.1146, A3s:0.3435, A4s:0.3666, A5s:0.3767, A6s:0.5367, A7s:0.3741, A8s:0.0630, A9s:0.1590, ATs:0.3770, AJs:0.0685, AQs:0.2033, AKs:0.9626, AA:0.8236"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@14",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "QTs:0.0001, QQ:0.1452, AQo:0.0160, KJs:0.0076, KQs:0.0799, KK:0.0103, A4s:0.0017, A7s:0.0004, A8s:0.0004, ATs:0.0053, AJs:0.0054, AQs:0.3000"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0041, 55:0.0688, 66:0.0103, 77:0.0303, 88:0.0385, 99:0.1148, TT:0.0464, JJ:0.0900, AJo:0.0033, Q9s:0.0001, QQ:0.7135, KQo:0.0075, AQo:0.1919, K6s:0.0040, K7s:0.0002, K9s:0.0166, KTs:0.0855, KJs:0.0474, KQs:0.3181, KK:0.6614, A2s:0.0064, A3s:0.0182, A4s:0.0020, A5s:0.2888, A6s:0.0019, A7s:0.1722, A8s:0.0081, A9s:0.3163, ATs:0.0682, AJs:0.3553, AQs:0.6018"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0002, JJ:0.0824, QQ:0.3010, KK, AKo:0.7940, AKs:0.9937, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0365, QQ:0.4131, KK:0.6717"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "33:0.0213, K4o:0.0041, A4o:0.0053, 52s:0.0082, 53s:0.0008, 55:0.0410, A5o:0.0032, 64s:0.0025, 65s:0.0009, 66:0.0021, A6o:0.0398, 75s:0.0007, 76s:0.0008, 77:0.0630, K7o:0.0061, A7o:0.0075, 82s:0.0010, 83s:0.0003, 84s:0.0004, 86s:0.0020, 87s:0.0334, 88:0.0527, K8o:0.0032, 95s:0.0004, 97s:0.0001, 99:0.0024, A9o:0.0054, T4s:0.0006, T8s:0.0047, T9s:0.0006, TT:0.0059, J5s:0.0024, J6s:0.0053, J7s:0.0122, J8s:0.0415, J9s:0.0003, JJ:0.0068, KJo:0.0022, AJo:0.0195, Q4s:0.0001, Q6s:0.0003, Q7s:0.0089, Q9s:0.0524, QTs:0.0020, QJs:0.0223, QQ:0.2554, KQo:0.0001, AQo:0.1139, K2s:0.0705, K4s:0.0485, K6s:0.0064, K7s:0.0030, K8s:0.0018, K9s:0.0001, KTs:0.1056, KJs:0.0147, KQs:0.0101, KK:0.2690, AKo:0.1569, A2s:0.0522, A3s:0.2600, A4s:0.0736, A5s:0.3693, A6s:0.0046, A7s:0.0109, A8s:0.0292, A9s:0.5957, ATs:0.0023, AJs:0.1036, AQs:0.1395, AKs:0.0068, AA:0.7584"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0177, 33:0.0375, 53s:0.0011, 54s:0.0002, A5o:0.0002, 75s:0.0017, A7o:0.0059, 88:0.0006, 96s:0.0003, 97s:0.0013, 98s:0.0008, T7s:0.0001, TT:0.0001, JJ:0.0230, KJo:0.0001, AJo:0.0015, Q9s:0.0004, QQ:0.0020, AQo:0.0022, K2s:0.0599, K7s:0.0016, K9s:0.0003, KTs:0.0004, KJs:0.1114, KQs:0.0050, KK:0.7309, AKo:0.8396, A2s:0.3174, A3s:0.3418, A4s:0.1520, A5s:0.3067, A6s:0.0016, A7s:0.0402, A8s:0.0884, A9s:0.1660, ATs:0.0149, AJs:0.1215, AQs:0.0571, AKs:0.9911, AA:0.2416"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0034, A2o:0.0008, 32s:0.0022, 33:0.0037, A3o:0.0001, 43s:0.0025, 44:0.0007, A4o:0.0169, 52s:0.0009, J5o:0.0001, K5o:0.0017, A5o:0.0002, 62s:0.0003, 64s:0.0322, 65s:0.0038, 66:0.0023, K6o:0.0001, A6o:0.0008, 76s:0.0162, 77:0.0005, T7o:0.0001, A7o:0.0015, 82s:0.0005, 87s:0.0111, 88:0.0739, Q8o:0.0001, K8o:0.0007, A8o:0.0553, 95s:0.0016, 96s:0.0004, 97s:0.0365, 98s:0.0002, 99:0.0218, A9o:0.0078, T4s:0.0013, T6s:0.0003, T8s:0.2109, TT:0.0251, KTo:0.0004, J2s:0.0001, J7s:0.0102, J9s:0.0003, JTs:0.2284, JJ:0.1648, KJo:0.0002, AJo:0.0099, Q2s:0.0010, Q4s:0.0019, Q5s:0.0012, Q8s:0.0107, QJs:0.0152, QQ:0.2558, AQo:0.2230, K2s:0.0703, K3s:0.0030, K4s:0.0141, K5s:0.0064, K6s:0.0012, K7s:0.0434, K8s:0.1197, K9s:0.0002, KJs:0.4005, KK:0.2916, AKo:0.1246, A2s:0.0593, A3s:0.4190, A4s:0.0225, A5s:0.0309, A6s:0.0043, A7s:0.3962, A8s:0.1987, A9s:0.1424, ATs:0.0964, AJs:0.0954, AQs:0.3569, AKs:0.2593, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 87s:0.0371, A8o:0.0021, 98s:0.0001, T8s:0.0003, J9s:0.0016, JJ:0.0008, Q6s:0.0002, QQ:0.0835, AQo:0.0004, K7s:0.0004, K9s:0.0002, KTs:0.0003, KJs:0.1328, KQs:0.0002, KK:0.7073, AKo:0.8569, A2s:0.0022, A3s:0.2140, A4s:0.2763, A5s:0.2589, A6s:0.0270, A7s:0.0001, A8s:0.0574, A9s:0.0319, ATs:0.0206, AJs:0.0118, AQs:0.0645, AKs:0.7377, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0009, 55:0.8974, 65s:0.0068, 66:0.7976, 76s:0.3658, 77:0.8673, 87s:0.0874, 88:0.9627, A8o:0.0019, 98s:0.0489, 99:0.7034, T8s:0.2308, T9s:0.1685, TT:0.8683, ATo:0.0119, J9s:0.4190, JTs:0.0402, JJ:0.8636, KJo:0.0880, AJo:0.0203, Q8s:0.0001, Q9s:0.3079, QTs:0.0170, QJs:0.0838, QQ:0.9232, KQo:0.0094, AQo:0.6832, K4s:0.0174, K5s:0.0250, K6s:0.3016, K7s:0.0071, K8s:0.0685, K9s:0.4534, KTs:0.9715, KJs:0.8898, KQs:0.8028, KK:0.6515, A2s:0.0492, A3s:0.2563, A4s:0.0815, A5s:0.1287, A6s:0.1397, A7s:0.1276, A8s:0.4943, A9s:0.5626, ATs:0.7538, AJs:0.6931, AQs:0.6781, AKs:0.0008, AA:0.0001"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0281, A5o:0.0050, 66:0.0430, 76s:0.0001, 77:0.0273, 87s:0.0208, 88:0.0223, A8o:0.0023, 98s:0.0147, 99:0.2436, A9o:0.0089, T8s:0.0094, T9s:0.0088, TT:0.1220, ATo:0.0895, J9s:0.0258, JTs:0.0100, JJ:0.1185, KJo:0.0016, AJo:0.1102, Q8s:0.0002, Q9s:0.0007, QTs:0.1062, QJs:0.0591, QQ:0.0765, KQo:0.0001, AQo:0.3157, K4s:0.0001, K5s:0.0007, K6s:0.0023, K7s:0.0729, K8s:0.0995, K9s:0.0090, KTs:0.0029, KJs:0.0008, KQs:0.0286, KK:0.0039, AKo:0.0376, A2s:0.3109, A3s:0.0870, A4s:0.0150, A5s:0.1476, A6s:0.0802, A7s:0.6273, A8s:0.0246, A9s:0.3047, ATs:0.1170, AJs:0.2842, AQs:0.3209, AKs:0.1594, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0068, A5o:0.0051, 66:0.0214, 77:0.0291, 87s:0.0098, 88:0.0005, 98s:0.0041, 99:0.0003, A9o:0.0043, TT:0.0030, ATo:0.0036, JTs:0.0032, JJ:0.0096, QJo:0.0001, AJo:0.0229, QQ:0.0002, KQo:0.0001, AQo:0.0007, K4s:0.0001, K5s:0.0311, K6s:0.0488, K7s:0.0013, K8s:0.0112, K9s:0.1921, KTs:0.0015, KJs:0.0634, KQs:0.0046, KK:0.3446, AKo:0.9623, A2s:0.5334, A3s:0.3457, A4s:0.8759, A5s:0.6548, A6s:0.4461, A7s:0.1414, A8s:0.4729, A9s:0.1101, ATs:0.0803, AJs:0.0204, AQs:0.0004, AKs:0.8398"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|LJ:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0193, 55:0.0003, 65s:0.0012, 66:0.0120, 76s:0.0131, 77:0.0155, 87s:0.0005, 88:0.0013, 98s:0.0053, 99:0.0161, T8s:0.0002, T9s:0.0038, TT:0.0005, KTo:0.0001, ATo:0.0105, J9s:0.0335, JJ:0.0134, KJo:0.0050, AJo:0.0004, QJs:0.0007, QQ:0.0004, KQo:0.0030, AQo:0.0311, K6s:0.0008, K7s:0.0025, K9s:0.0001, KTs:0.0005, KQs:0.0002, KK:0.0503, A2s:0.0013, A3s:0.0276, A4s:0.0576, A5s:0.0127, A6s:0.0056, A7s:0.0272, A8s:0.0227, A9s:0.0003, ATs:0.0001, AQs:0.0001, AKs:0.0033, AA:0.0302"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0070, AKo:0.0005, A2s:0.0005, A3s:0.0068, A4s:0.0259, A5s:0.0044, A6s:0.0086, A7s:0.0097, A8s:0.0052, AKs:0.0521, AA:0.0089"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|LJ:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0005, KK:0.0503, AKo:0.0005, AKs:0.0554, AA:0.0391"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0002, 66:0.0009, 77:0.0027, 87s:0.0002, 88:0.0015, 99:0.0043, A9o:0.0001, T8s:0.0012, T9s:0.0002, TT:0.0011, KTo:0.0002, J9s:0.0001, JJ:0.0016, QJo:0.0003, KJo:0.0002, AJo:0.0058, Q8s:0.0003, QTs:0.0008, QQ:0.0003, K5s:0.0004, K6s:0.0103, K7s:0.0001, K8s:0.0002, K9s:0.0005, KTs:0.0001, KQs:0.0011, KK:0.7882, AKo:0.0584, A2s:0.0091, A3s:0.0004, A4s:0.0032, A5s:0.0064, A6s:0.0054, A7s:0.0007, A8s:0.0003, A9s:0.0080, ATs:0.0024, AJs:0.0008, AQs:0.0001, AKs:0.7100, AA:0.4311"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0004, 66:0.0026, 76s:0.0006, 77:0.0002, 87s:0.0051, 88:0.0610, 98s:0.0002, 99:0.0093, A9o:0.0001, T8s:0.0182, T9s:0.0762, TT:0.0002, KTo:0.0004, ATo:0.0458, J9s:0.0002, JTs:0.0002, JJ:0.0001, KJo:0.0001, AJo:0.0448, Q8s:0.0001, Q9s:0.0004, QTs:0.0015, QQ:0.0007, KQo:0.0001, AQo:0.0002, K5s:0.0002, K6s:0.0052, K7s:0.0005, K8s:0.0778, K9s:0.0033, KTs:0.0001, KJs:0.0006, KQs:0.0003, KK:0.2086, AKo:0.3736, A2s:0.0002, A3s:0.0604, A4s:0.0486, A5s:0.0572, A6s:0.0338, A7s:0.0710, A9s:0.1094, ATs:0.0037, AJs:0.0017, AQs:0.0086, AKs:0.2304, AA:0.5689"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0195, 55:0.0003, 65s:0.0010, 66:0.0119, 76s:0.0107, 77:0.0152, 87s:0.0002, 88:0.0013, 98s:0.0039, 99:0.0159, T8s:0.0002, T9s:0.0019, TT:0.0005, ATo:0.0006, J9s:0.0102, JJ:0.0129, KJo:0.0013, AJo:0.0001, QJs:0.0002, QQ:0.0004, KQo:0.0004, AQo:0.0333, K6s:0.0002, K7s:0.0031, KTs:0.0002, KQs:0.0001, KK:0.0501, AKo:0.0003, A2s:0.0021, A3s:0.0140, A4s:0.0354, A5s:0.0041, A6s:0.0129, A7s:0.0368, A8s:0.0190, A9s:0.0003, ATs:0.0001, AQs:0.0001, AKs:0.0368, AA:0.0231"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, ATo:0.0003, KK:0.0002, AKo:0.0002, A2s:0.0001, A3s:0.0042, A4s:0.0048, A5s:0.0029, A6s:0.0016, A7s:0.0018, A8s:0.0001, AKs:0.0186, AA:0.0160"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0019, 77:0.0004, 87s:0.0002, 88:0.0201, A8o:0.0003, 98s:0.0001, 99:0.0010, T9s:0.0002, TT:0.0005, KTo:0.0004, ATo:0.0011, J9s:0.0001, JTs:0.0002, JJ:0.0433, QJo:0.0001, KJo:0.0002, AJo:0.0001, Q8s:0.0002, Q9s:0.0003, QTs:0.0008, QJs:0.0001, QQ:0.0798, KQo:0.0019, AQo:0.0003, K4s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0010, K9s:0.0002, KTs:0.0007, KJs:0.0004, KQs:0.0006, KK:0.9425, AKo:0.1456, A2s:0.0002, A3s:0.0005, A4s:0.0083, A5s:0.0002, A7s:0.0004, A8s:0.0001, ATs:0.0001, AJs:0.0032, AQs:0.0001, AKs:0.0180, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0503, AKs:0.0170, AA:0.0391"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0002, 76s:0.0001, 77:0.0008, 87s:0.0002, 88:0.0001, 99:0.0004, A9o:0.0012, T8s:0.0004, T9s:0.0002, TT:0.0016, ATo:0.0005, J9s:0.0007, JTs:0.0001, JJ:0.0009, QJo:0.0003, AJo:0.0004, Q9s:0.0022, QTs:0.0039, QJs:0.0008, AQo:0.0008, K5s:0.0006, K7s:0.0019, K8s:0.0011, K9s:0.0159, KTs:0.0001, KQs:0.0034, KK:0.8819, AKo:0.0012, A2s:0.0007, A3s:0.0003, A4s:0.2998, A5s:0.0008, A6s:0.0002, A8s:0.0570, A9s:0.0110, ATs:0.0011, AJs:0.0002, AQs:0.0499, AKs:0.0191, AA:0.1177"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0426, A5o:0.0014, 65s:0.0003, 66:0.0048, 76s:0.0001, 77:0.0165, 88:0.0004, A8o:0.0001, 98s:0.1007, 99:0.0037, A9o:0.0299, T8s:0.0004, T9s:0.0114, TT:0.0059, ATo:0.0229, J9s:0.0149, JTs:0.0246, JJ:0.0042, QJo:0.0001, KJo:0.0008, AJo:0.0115, Q8s:0.0001, Q9s:0.0001, QTs:0.0015, QJs:0.0003, QQ:0.0025, KQo:0.0004, AQo:0.0024, K5s:0.0026, K6s:0.0004, K7s:0.0052, K8s:0.0091, K9s:0.0387, KTs:0.0001, KJs:0.0036, KQs:0.0004, KK:0.0352, AKo:0.2032, A3s:0.0001, A4s:0.0132, A5s:0.0140, A6s:0.0183, A7s:0.0004, A8s:0.1892, A9s:0.0031, ATs:0.4718, AJs:0.0245, AQs:0.2339, AKs:0.5900, AA:0.8823"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "44:0.0194, 55:0.0003, 65s:0.0012, 66:0.0119, 76s:0.0091, 77:0.0156, 87s:0.0006, 88:0.0012, 98s:0.0036, 99:0.0149, T8s:0.0001, T9s:0.0024, TT:0.0005, J9s:0.0127, JJ:0.0126, KJo:0.0005, AJo:0.0001, QJs:0.0001, QQ:0.0004, AQo:0.0312, K6s:0.0011, K7s:0.0087, KTs:0.0001, KQs:0.0001, KK:0.0389, AKo:0.0002, A2s:0.0002, A3s:0.0188, A4s:0.0544, A5s:0.0069, A6s:0.0149, A7s:0.0147, A8s:0.0121, A9s:0.0004, ATs:0.0001, AQs:0.0001, AKs:0.0237, AA:0.0290"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0002, KK:0.0114, AKo:0.0003, A2s:0.0002, A3s:0.0013, A4s:0.0024, A5s:0.0010, A6s:0.0004, A7s:0.0074, A8s:0.0008, AKs:0.0317, AA:0.0101"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0003, 77:0.0002, 88:0.0021, 99:0.0018, A9o:0.0001, T8s:0.0001, T9s:0.0003, TT:0.0002, KTo:0.0003, ATo:0.0003, J9s:0.0014, JTs:0.0001, JJ:0.0873, QJo:0.0003, KJo:0.0003, AJo:0.0014, Q9s:0.0002, QTs:0.0032, QJs:0.0003, QQ:0.0043, AQo:0.0090, K4s:0.0001, K5s:0.0021, K7s:0.0005, K9s:0.0005, KTs:0.0003, KK:0.8250, AKo:0.0009, A2s:0.0007, A3s:0.0001, A5s:0.0003, A6s:0.0003, A7s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0007, AJs:0.0025, AQs:0.0030, AKs:0.0781, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@5.5|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.0496, AKs:0.0189, AA:0.0391"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A2o:0.0315, A3o:0.0172, A4o:0.0011, 53s:0.0001, 54s:0.0001, K5o:0.0001, A5o:0.0257, 65s:0.0001, A6o:0.0234, 74s:0.0007, 77:0.0003, A7o:0.0735, 82s:0.0001, 88:0.0028, A8o:0.0051, 98s:0.0001, 99:0.0001, A9o:0.0567, T3s:0.0008, ATo:0.0006, JJ:0.0140, AJo:0.0253, Q4s:0.0005, QTs:0.0001, QQ:0.0008, AQo:0.2084, K2s:0.0004, K3s:0.0043, K4s:0.0006, K6s:0.0119, K7s:0.0003, K8s:0.0021, K9s:0.0116, KTs:0.0255, KJs:0.0267, KQs:0.0131, KK:0.0729, AKo:0.2688, A2s:0.3490, A3s:0.0221, A4s:0.0109, A5s:0.0903, A6s:0.2744, A7s:0.4177, A8s:0.2385, A9s:0.0053, ATs:0.0124, AJs:0.2418, AQs:0.4054, AKs:0.0384, AA:0.9986"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0001, 74s:0.0001, ATo:0.0040, QTs:0.0039, QQ:0.0004, AQo:0.0014, K2s:0.0005, K3s:0.0001, K4s:0.0004, K9s:0.0013, KQs:0.0016, KK:0.9271, AKo:0.7310, A2s:0.0060, A4s:0.0082, A5s:0.0953, A6s:0.0231, A7s:0.0066, A8s:0.0347, A9s:0.0043, ATs:0.0139, AJs:0.0038, AQs:0.0040, AKs:0.9616, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0002, 33:0.0002, A3o:0.0047, 43s:0.0001, A4o:0.0041, 54s:0.0003, A5o:0.0733, A6o:0.0003, 74s:0.0011, 76s:0.0021, 77:0.0030, T7o:0.0004, A7o:0.0072, 87s:0.0062, A8o:0.0001, 94s:0.0002, 97s:0.0001, 99:0.0005, A9o:0.0019, T3s:0.0002, T6s:0.0004, T8s:0.0001, T9s:0.0007, TT:0.0006, KTo:0.0002, ATo:0.0010, J9s:0.0012, QTs:0.0003, QQ:0.0071, KQo:0.0014, AQo:0.1568, K2s:0.0026, K3s:0.0080, K4s:0.0090, K6s:0.0093, K7s:0.0263, K8s:0.0082, K9s:0.0014, KTs:0.0227, KJs:0.0111, KK:0.1199, AKo:0.0874, A2s:0.0667, A3s:0.2024, A4s:0.0252, A5s:0.1277, A6s:0.2177, A7s:0.2567, A8s:0.0692, A9s:0.4740, ATs:0.0007, AJs:0.5150, AQs:0.6998, AKs:0.5603, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, J9s:0.0001, K4s:0.0002, K6s:0.0001, K9s:0.0008, KTs:0.0269, KJs:0.0183, KK:0.8801, AKo:0.9123, A4s:0.0004, A5s:0.0269, A7s:0.0060, A8s:0.0006, A9s:0.0003, AJs:0.0585, AQs:0.0031, AKs:0.4396"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.3212, 66:0.6548, 77:0.0166, 88:0.7940, 99:0.2270, T9s:0.0007, TT:0.2887, JTs:0.0001, JJ:0.8038, QQ:0.9851, AQo:0.4022, K5s:0.0226, K9s:0.0050, KTs:0.4010, KJs:0.0490, KQs:0.3284, KK:0.4759, A3s:0.0047, A4s:0.2752, A5s:0.1193, A6s:0.0171, A7s:0.0001, A8s:0.7352, A9s:0.1827, ATs:0.7561, AJs:0.9713, AQs:0.8253"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "55:0.0044, A5o:0.0478, 66:0.0002, 76s:0.0007, 77:0.0714, 88:0.0176, A8o:0.0539, 98s:0.0002, 99:0.0273, A9o:0.0710, TT:0.0011, ATo:0.0126, J9s:0.0003, JJ:0.0139, KJo:0.0030, AJo:0.1042, Q9s:0.0001, QJs:0.0065, QQ:0.0084, KQo:0.0001, AQo:0.4542, K4s:0.0005, K5s:0.0077, K6s:0.0096, K7s:0.0352, K8s:0.0001, K9s:0.0403, KTs:0.0026, KJs:0.0168, KQs:0.0237, KK:0.0014, AKo:0.0145, A2s:0.0233, A3s:0.0077, A4s:0.0552, A5s:0.0433, A6s:0.1698, A7s:0.2538, A8s:0.0556, A9s:0.1078, ATs:0.0282, AJs:0.0055, AQs:0.1742, AKs:0.2952, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0029, A5o:0.0001, 66:0.0002, 76s:0.0005, 77:0.1251, 88:0.0022, 98s:0.0001, 99:0.2959, A9o:0.0005, TT:0.0125, JJ:0.1029, QQ:0.0003, K5s:0.0011, K6s:0.0042, K7s:0.0617, K8s:0.0089, K9s:0.0396, KTs:0.0724, KJs:0.0740, KQs:0.0015, KK:0.5227, AKo:0.9855, A2s:0.9079, A3s:0.9268, A4s:0.4528, A5s:0.8074, A6s:0.6901, A7s:0.7062, A8s:0.2041, A9s:0.6464, ATs:0.1892, AJs:0.0227, AKs:0.7048"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|LJ:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0003, 66:0.0387, 77:0.0120, 88:0.0001, ATo:0.0002, KJo:0.0015, AJo:0.0005, AQo:0.1132, K3s:0.0005, K4s:0.0001, K5s:0.0453, K6s:0.0043, K9s:0.0004, KQs:0.0001, KK:0.1384, A2s:0.0436, A3s:0.1352, A4s:0.1230, A5s:0.0152, A6s:0.1856, A7s:0.0445, A8s:0.1568, A9s:0.0002, ATs:0.0001, AKs:0.0043, AA:0.1040"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0092, KK:0.0024, AKo:0.0010, A2s:0.2130, A3s:0.5073, A4s:0.2137, A5s:0.0246, A6s:0.1312, A7s:0.0250, A8s:0.0576, AKs:0.3691, AA:0.4021"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|LJ:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1408, AKo:0.0010, AKs:0.3734, AA:0.5061"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0001, 87s:0.0002, 98s:0.0001, T8s:0.0007, JJ:0.0001, QTs:0.0001, QQ:0.0004, K6s:0.0002, K7s:0.0001, KK:0.4653, AKo:0.0084, A5s:0.0004, A8s:0.0001, A9s:0.0007, ATs:0.0062, AJs:0.1008, AQs:0.0010, AKs:0.0104, AA:0.1982"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0004, A5o:0.0029, 65s:0.0001, 66:0.0013, 76s:0.0001, 77:0.0341, 87s:0.0033, A8o:0.0012, 99:0.0047, A9o:0.0008, T8s:0.0011, T9s:0.0001, TT:0.0002, J9s:0.0006, JJ:0.0016, AJo:0.0027, Q8s:0.0005, Q9s:0.0047, QTs:0.0001, QQ:0.0046, AQo:0.0001, K6s:0.0015, K7s:0.0001, K8s:0.0002, KJs:0.0058, KQs:0.0058, KK:0.2251, AKo:0.9712, A2s:0.0050, A3s:0.0001, A4s:0.0215, A5s:0.0044, A6s:0.0930, A7s:0.0053, A8s:0.1125, A9s:0.0350, ATs:0.0139, AJs:0.0932, AQs:0.0320, AKs:0.9832, AA:0.8018"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|BB:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0001, A3o:0.0002, A4o:0.0023, 55:0.0003, A5o:0.0003, 66:0.0384, 77:0.0118, A7o:0.0001, 88:0.0001, A8o:0.0003, A9o:0.0008, ATo:0.0181, KJo:0.0001, AJo:0.0010, AQo:0.1204, K3s:0.0006, K4s:0.0002, K5s:0.0039, K6s:0.0018, K9s:0.0001, KQs:0.0001, KK:0.1397, A2s:0.1205, A3s:0.0557, A4s:0.1076, A5s:0.0115, A6s:0.2163, A7s:0.0756, A8s:0.1189, A9s:0.0002, ATs:0.0001, AKs:0.0087, AA:0.1734"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0004, A5o:0.0002, 66:0.0002, 77:0.0001, A7o:0.0003, A8o:0.0001, ATo:0.0009, K5s:0.0003, KK:0.0011, AKo:0.0010, A2s:0.0515, A3s:0.2747, A4s:0.1262, A5s:0.0066, A6s:0.1370, A7s:0.0218, A8s:0.0753, AKs:0.3647, AA:0.3327"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0005, J9s:0.0001, JTs:0.0001, JJ:0.0038, QQ:0.0001, K9s:0.0001, KJs:0.0001, KK:0.9992, A2s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0001, AQs:0.0012, AKs:0.0033, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1408, AKs:0.3323, AA:0.5061"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "99:0.0017, TT:0.0006, ATo:0.0001, J9s:0.0001, JTs:0.0001, AJo:0.0001, QQ:0.0002, K9s:0.0003, KTs:0.0001, KQs:0.0001, KK:0.4319, AKo:0.0049, A2s:0.0004, A3s:0.0264, A4s:0.0084, A6s:0.0001, A8s:0.0001, A9s:0.0587, ATs:0.0001, AJs:0.0014, AQs:0.3922, AKs:0.0190, AA:0.3498"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0059, A5o:0.0333, 66:0.0011, 87s:0.0001, 88:0.0162, 98s:0.0001, TT:0.0032, ATo:0.0007, J9s:0.0013, JTs:0.0011, JJ:0.0001, QJo:0.0001, AJo:0.0002, Q8s:0.0003, QQ:0.0005, AQo:0.0112, K6s:0.0001, K7s:0.0134, K8s:0.0132, K9s:0.0003, KTs:0.0171, KQs:0.0013, KK:0.0521, AKo:0.8966, A2s:0.0370, A3s:0.0023, A4s:0.0742, A5s:0.0795, A6s:0.0925, A7s:0.0672, A8s:0.0021, A9s:0.0700, ATs:0.0351, AJs:0.0020, AQs:0.0977, AKs:0.8442, AA:0.6502"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|SB:4BET@13.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0001, 55:0.0003, A5o:0.0001, 66:0.0372, 77:0.0119, A7o:0.0006, 88:0.0001, A8o:0.0001, ATo:0.0231, AJo:0.0008, AQo:0.1077, K6s:0.0044, K9s:0.0003, KQs:0.0002, KK:0.1404, AKo:0.0001, A2s:0.0352, A3s:0.1494, A4s:0.0667, A5s:0.0207, A6s:0.1530, A7s:0.0872, A8s:0.1191, A9s:0.0002, ATs:0.0001, AKs:0.0361, AA:0.1543"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0009, A4o:0.0164, A5o:0.0024, 66:0.0015, ATo:0.0110, AQo:0.0002, KK:0.0004, AKo:0.0009, A2s:0.1413, A3s:0.1825, A4s:0.0876, A5s:0.0151, A6s:0.1748, A7s:0.0351, A8s:0.0765, AKs:0.3373, AA:0.3518"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0002, TT:0.0002, ATo:0.0001, JJ:0.0006, QQ:0.0005, K5s:0.0001, KQs:0.0002, KK:0.9826, AKo:0.0085, A3s:0.0004, A4s:0.0001, A8s:0.0002, ATs:0.0002, AJs:0.0001, AQs:0.0007, AKs:0.0070, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@8|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1408, AKo:0.0003, AKs:0.2239, AA:0.5061"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0472, 43s:0.0002, K4o:0.0002, A4o:0.0022, 53s:0.0001, K5o:0.0001, A5o:0.0217, 64s:0.0001, A6o:0.0185, 77:0.0008, A7o:0.0917, 87s:0.0004, A8o:0.0090, A9o:0.0281, TT:0.0001, KTo:0.0051, ATo:0.0120, KJo:0.0002, AJo:0.0915, Q7s:0.0003, QQ:0.0006, AQo:0.1548, K4s:0.0011, K6s:0.0217, K7s:0.0006, K9s:0.0077, KQs:0.0044, KK:0.1353, AKo:0.0230, A2s:0.1672, A3s:0.0023, A4s:0.0241, A5s:0.0902, A6s:0.0101, A7s:0.3539, A8s:0.1171, A9s:0.0144, ATs:0.0073, AJs:0.1976, AQs:0.4173, AKs:0.4169, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0003, 65s:0.0004, 86s:0.0001, 87s:0.0001, TT:0.0002, K2s:0.0001, K6s:0.0007, K7s:0.0133, K9s:0.0266, KJs:0.0033, KQs:0.0069, KK:0.8647, AKo:0.9770, A3s:0.0017, A4s:0.0064, A5s:0.1321, A6s:0.0004, A7s:0.0894, A8s:0.0193, A9s:0.0001, ATs:0.0085, AJs:0.0584, AKs:0.5831"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.1309, K3o:0.0010, A4o:0.0014, A5o:0.0395, 63s:0.0001, K6o:0.0014, A6o:0.0173, A7o:0.0024, 88:0.0004, K8o:0.0016, A8o:0.0149, A9o:0.0202, ATo:0.0239, J8s:0.0001, JJ:0.0008, AJo:0.0001, QQ:0.0004, AQo:0.0003, K2s:0.0006, K5s:0.0013, K6s:0.0024, K7s:0.0031, K9s:0.0003, KJs:0.0004, KQs:0.0154, KK:0.0304, AKo:0.1137, A2s:0.0477, A3s:0.1253, A4s:0.0431, A5s:0.0073, A6s:0.1724, A7s:0.3274, A8s:0.1408, A9s:0.1558, ATs:0.3162, AJs:0.3213, AQs:0.4294, AKs:0.5226, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0001, 75s:0.0003, 77:0.0001, 88:0.0001, TT:0.0002, Q9s:0.0001, K2s:0.0011, K4s:0.0006, K5s:0.0001, K6s:0.0005, K9s:0.0006, KJs:0.0027, KQs:0.0028, KK:0.9696, AKo:0.8863, A2s:0.0001, A4s:0.0002, A6s:0.0140, ATs:0.1291, AJs:0.0051, AQs:0.0032, AKs:0.4774"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0231, 66:0.3513, 77:0.0862, 88:0.2455, 99:0.1493, TT:0.1162, JJ:0.1917, QQ:0.7936, AQo:0.2069, K9s:0.0002, KJs:0.0008, KQs:0.0073, KK:0.2355, A2s:0.0080, A3s:0.0008, A4s:0.0337, A5s:0.0741, A7s:0.0062, A8s:0.2909, A9s:0.3383, ATs:0.8324, AJs:0.3772, AQs:0.7838"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0423, 66:0.0005, 76s:0.0006, 77:0.0090, 88:0.0008, A8o:0.0440, 99:0.0001, A9o:0.0655, ATo:0.1061, JJ:0.0255, KJo:0.0003, AJo:0.1509, QQ:0.0642, KQo:0.0027, AQo:0.5215, K4s:0.0005, K6s:0.0031, K7s:0.0073, K8s:0.0008, KTs:0.0068, KJs:0.0015, KQs:0.0107, AKo:0.0025, A2s:0.0111, A3s:0.0024, A4s:0.0020, A5s:0.0053, A6s:0.0270, A7s:0.0806, A8s:0.0722, A9s:0.0895, ATs:0.0046, AJs:0.1298, AQs:0.1897, AKs:0.4121, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0140, 66:0.0130, 77:0.0424, 88:0.0686, 99:0.2316, TT:0.0881, JJ:0.3764, KJo:0.0006, QQ:0.0609, KQo:0.0001, K4s:0.0002, K5s:0.0063, K6s:0.0006, K7s:0.0142, K8s:0.0047, K9s:0.0105, KTs:0.0733, KJs:0.0747, KQs:0.0244, KK:0.7645, AKo:0.9975, A2s:0.5778, A3s:0.6727, A4s:0.2298, A5s:0.9033, A6s:0.7731, A7s:0.7968, A8s:0.2471, A9s:0.4771, ATs:0.1122, AJs:0.4917, AQs:0.0143, AKs:0.5879"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|LJ:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0008, A3o:0.0036, 44:0.0001, A4o:0.0119, A5o:0.0069, K6o:0.0001, A6o:0.0001, A8o:0.0002, ATo:0.0156, AJo:0.0016, KQo:0.0001, AQo:0.0367, K3s:0.0001, K4s:0.0073, K5s:0.0030, K6s:0.0003, K7s:0.0059, K8s:0.0010, K9s:0.0006, KQs:0.0001, KK:0.1318, AKo:0.0009, A2s:0.1398, A3s:0.0769, A4s:0.0595, A5s:0.0019, A6s:0.1216, A7s:0.0079, A8s:0.0006, AKs:0.0329, AA:0.1297"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0013, A4o:0.0021, A5o:0.0003, ATo:0.0001, AQo:0.0009, KK:0.0054, AKo:0.0037, A2s:0.4175, A3s:0.1543, A4s:0.1736, A5s:0.0023, A6s:0.0774, A7s:0.0216, A8s:0.0020, AKs:0.2858, AA:0.3251"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|LJ:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1372, AKo:0.0046, AKs:0.3187, AA:0.4548"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "99:0.0001, JJ:0.0001, AJo:0.0013, Q9s:0.0001, QQ:0.0032, K8s:0.0001, K9s:0.0001, KJs:0.0001, KK:0.1680, AKo:0.0004, A3s:0.0002, A4s:0.0001, A5s:0.0003, A7s:0.0082, A9s:0.0007, ATs:0.0189, AJs:0.0834, AQs:0.2331, AKs:0.0594, AA:0.1923"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0081, 65s:0.0001, 76s:0.0003, 88:0.0016, 99:0.0007, A9o:0.0301, TT:0.0002, KTo:0.0001, ATo:0.0037, JTs:0.0037, AJo:0.0066, QTs:0.0001, QJs:0.0001, QQ:0.0029, AQo:0.0039, K6s:0.0015, K7s:0.0001, KJs:0.0015, KK:0.0017, AKo:0.9500, A2s:0.0124, A3s:0.0003, A4s:0.0137, A5s:0.0034, A6s:0.0062, A7s:0.0826, A8s:0.0077, A9s:0.0002, ATs:0.0323, AJs:0.0869, AQs:0.0326, AKs:0.8351, AA:0.8075"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|BB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0001, A3o:0.0001, 44:0.0001, A4o:0.0001, A5o:0.0008, A7o:0.0019, A8o:0.0038, A9o:0.0005, ATo:0.0203, AJo:0.0013, AQo:0.0344, K4s:0.0001, K7s:0.0002, K8s:0.0001, KK:0.1277, AKo:0.0001, A2s:0.0455, A3s:0.0167, A4s:0.0330, A5s:0.0002, A6s:0.0305, A7s:0.0090, A8s:0.0007, AKs:0.0010, AA:0.1018"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0016, A3o:0.0079, A4o:0.0184, A5o:0.0024, A6o:0.0005, A7o:0.0026, A8o:0.0003, A9o:0.0010, ATo:0.0024, AQo:0.0002, KK:0.0093, AKo:0.0045, A2s:0.3569, A3s:0.1416, A4s:0.1632, A5s:0.0023, A6s:0.0842, A7s:0.0137, A8s:0.0017, AKs:0.3177, AA:0.3530"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0007, JJ:0.0001, QJs:0.0002, QQ:0.0005, KQo:0.0001, AQo:0.0002, K7s:0.0001, K8s:0.0001, K9s:0.0002, KJs:0.0001, KK:0.9998, A3s:0.0004, A4s:0.0002, A6s:0.0001, A7s:0.0010, A9s:0.0004, AJs:0.0001, AKs:0.0008, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|BB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1372, AKo:0.0026, AKs:0.3186, AA:0.4548"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "76s:0.0001, 88:0.0001, 98s:0.0001, 99:0.0002, JJ:0.0001, Q8s:0.0004, K9s:0.0001, KK:0.3072, A2s:0.0004, A3s:0.0001, A4s:0.0007, A6s:0.0002, A8s:0.0001, A9s:0.0003, AJs:0.0004, AQs:0.3002, AKs:0.2386, AA:0.3673"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0005, 76s:0.0044, 87s:0.0003, 98s:0.0001, 99:0.0001, A9o:0.0002, ATo:0.0001, J9s:0.0006, JTs:0.0274, JJ:0.0001, AJo:0.0001, QJs:0.0030, QQ:0.0002, AQo:0.0001, K5s:0.0001, K7s:0.0001, K8s:0.0007, KK:0.2422, AKo:0.9681, A2s:0.0313, A3s:0.2222, A4s:0.0012, A5s:0.2149, A6s:0.0016, A8s:0.4574, ATs:0.0001, AJs:0.0844, AQs:0.0357, AKs:0.7602, AA:0.6323"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|SB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0001, 44:0.0001, A4o:0.0012, A6o:0.0002, A7o:0.0004, A8o:0.0056, A9o:0.0024, ATo:0.0335, AJo:0.0011, AQo:0.0372, K5s:0.0002, K7s:0.0006, KK:0.0848, AKo:0.0010, A2s:0.0231, A3s:0.0674, A4s:0.0443, A5s:0.0008, A6s:0.0874, A7s:0.0101, A8s:0.0010, AKs:0.0384, AA:0.0910"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0051, A3o:0.0001, A4o:0.0253, A5o:0.0019, A6o:0.0002, A8o:0.0002, ATo:0.0001, AQo:0.0001, KK:0.0524, AKo:0.0036, A2s:0.3587, A3s:0.1102, A4s:0.1098, A5s:0.0021, A6s:0.0318, A7s:0.0122, A8s:0.0006, AKs:0.2800, AA:0.3638"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, A5o:0.0001, 99:0.0002, TT:0.0001, JJ:0.0004, Q8s:0.0001, Q9s:0.0001, QTs:0.0003, QQ:0.0017, AQo:0.0001, KQs:0.0002, KK:0.9998, A5s:0.0001, A6s:0.0002, A7s:0.0003, ATs:0.0004, AKs:0.0028, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@10|SB:4BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1372, AKo:0.0046, AKs:0.3186, AA:0.4548"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.9998, AKo:0.9995, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.9989, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
    "presetId": "LJ:OPEN@2.3|BTN:3BET@53.32|BB:CALL@52.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0002, K7s:0.0001, KTs:0.0004, KJs:0.0002, KQs:0.0001, KK:0.0003, A2s:0.0003, A4s:0.0003, A6s:0.0001, A7s:0.0001, A9s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0004, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@53.32|SB:CALL@52.82",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0001, QJs:0.0001, QQ:0.0006, AQo:0.0001, K5s:0.0001, K7s:0.0001, KTs:0.0001, KQs:0.0001, KK:0.0086, A2s:0.0005, A5s:0.0001, A6s:0.0003, A8s:0.0002, ATs:0.0002, AQs:0.0001, AKs:0.0084, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "33:0.0065, 44:0.0006, 55:0.0149, A5o:0.0003, 66:0.0016, 74s:0.0002, 76s:0.0567, 88:0.2431, A8o:0.0015, 99:0.0045, TT:0.0016, JJ:0.1999, Q3s:0.0010, Q4s:0.0003, Q7s:0.0001, QJs:0.0065, QQ:0.0354, KQo:0.1117, AQo:0.1936, K3s:0.0213, K4s:0.0011, K5s:0.0484, K6s:0.0025, K7s:0.0434, K8s:0.0258, K9s:0.1055, KTs:0.0009, KJs:0.2218, KQs:0.0131, KK:0.3076, AKo:0.0145, A2s:0.0050, A3s:0.0230, A4s:0.0082, A6s:0.0406, A7s:0.0073, A8s:0.0234, ATs:0.0018, AJs:0.0879, AQs:0.2094, AKs:0.0108, AA:0.1175"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0023, K2o:0.0002, A2o:0.0004, 33:0.0003, A3o:0.0039, K4o:0.0003, A4o:0.0055, K5o:0.0105, A5o:0.0037, 64s:0.0001, 66:0.0055, 76s:0.0018, 77:0.0949, A7o:0.0686, 83s:0.0002, 88:0.3252, K8o:0.0004, 99:0.0006, TT:0.0141, JJ:0.3525, Q3s:0.0002, Q7s:0.0001, QTs:0.0002, QJs:0.0002, QQ:0.0346, KQo:0.3547, AQo:0.6652, K2s:0.0067, K3s:0.2109, K4s:0.1185, K5s:0.2840, K6s:0.1442, K7s:0.3590, K8s:0.0895, K9s:0.0551, KTs:0.1323, KJs:0.2091, KQs:0.0319, KK:0.6737, AKo:0.2982, A2s:0.1870, A3s:0.2888, A4s:0.1251, A5s:0.9515, A6s:0.0252, A7s:0.6229, A8s:0.1081, ATs:0.0084, AJs:0.7382, AQs:0.0640, AKs:0.5601, AA:0.4680"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0077, K3o:0.0005, A3o:0.0085, A4o:0.0198, A5o:0.1728, K6o:0.0001, K7o:0.0006, A7o:0.0162, 88:0.0007, K8o:0.0012, JJ:0.0145, AJo:0.0475, Q9s:0.0004, QQ:0.0515, KQo:0.0060, AQo:0.0965, K2s:0.0005, K3s:0.0092, K4s:0.0002, K6s:0.0011, K7s:0.0006, K8s:0.0130, K9s:0.0008, KTs:0.0002, KJs:0.0003, KQs:0.0030, KK:0.0187, AKo:0.0129, A2s:0.5091, A3s:0.3171, A4s:0.1710, A5s:0.0215, A6s:0.1730, A7s:0.0131, A8s:0.0815, A9s:0.0667, ATs:0.0848, AJs:0.0537, AQs:0.0012, AKs:0.2585, AA:0.4146"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0683, 44:0.0159, 66:0.0102, 77:0.0659, TT:0.0010, QQ:0.8786, KQo:0.4927, AQo:0.0443, KJs:0.0001, KQs:0.9366, AKo:0.6744, A2s:0.0184, A3s:0.1621, A4s:0.4816, A5s:0.0131, A6s:0.0197, A8s:0.1081, ATs:0.0001, AQs:0.7254, AKs:0.1706"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.0020, A2o:0.3060, A3o:0.1299, 44:0.0001, K4o:0.0078, A4o:0.0566, K5o:0.0017, A5o:0.1901, A6o:0.0405, 77:0.0003, K7o:0.0057, A7o:0.0017, A8o:0.0098, A9o:0.0023, TT:0.0003, JJ:0.1829, KJo:0.0009, AJo:0.0943, Q4s:0.0002, Q8s:0.0001, QTs:0.0006, QQ:0.2355, KQo:0.0406, AQo:0.5559, K2s:0.0674, K3s:0.1240, K4s:0.0120, K5s:0.0351, K6s:0.1537, K7s:0.0949, K8s:0.0523, KJs:0.0187, KQs:0.0018, KK:0.1900, AKo:0.0335, A2s:0.6965, A3s:0.5651, A4s:0.4004, A5s:0.0832, A6s:0.1665, A7s:0.1493, A8s:0.6159, A9s:0.0070, ATs:0.0231, AJs:0.1121, AQs:0.2079, AKs:0.2332, AA:0.9980"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0031, A2o:0.0002, K3o:0.1140, A3o:0.0008, K4o:0.2157, A4o:0.0005, K5o:0.0003, K6o:0.0366, K7o:0.0002, A7o:0.0001, A8o:0.0016, TT:0.0003, KTo:0.0002, ATo:0.0001, JJ:0.0500, Q6s:0.0001, QQ:0.0001, KQo:0.0822, AQo:0.0315, K2s:0.3475, K3s:0.2863, K4s:0.3816, K5s:0.2017, K6s:0.0782, K7s:0.0944, K8s:0.0391, K9s:0.0237, KTs:0.0011, KJs:0.0866, KQs:0.1838, KK:0.8100, AKo:0.0455, A2s:0.0100, A3s:0.0645, A4s:0.0087, A5s:0.1743, A6s:0.0005, A8s:0.0002, A9s:0.0002, ATs:0.0406, AJs:0.0373, AQs:0.0002, AKs:0.3850, AA:0.0019"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0074, 44:0.0158, 55:0.0015, 66:0.0086, 77:0.0008, TT:0.0002, QTs:0.0002, QQ:0.7644, KQo:0.3873, AQo:0.1688, K3s:0.0061, K5s:0.0009, K6s:0.0003, K7s:0.0081, KQs:0.7393, AKo:0.9210, A2s:0.0514, A3s:0.1012, A4s:0.0953, A5s:0.1113, A6s:0.0016, A7s:0.0019, A8s:0.0010, A9s:0.0002, ATs:0.0178, AQs:0.7913, AKs:0.3818"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8395, 33:0.8592, 43s:0.6788, 44:0.7182, 54o:0.0260, 52s:0.2907, 53s:0.9632, 54s:0.9682, 55:0.8259, 65o:0.3572, 63s:0.8104, 64s:0.9850, 65s:0.9930, 66:0.8513, 74s:0.0190, 75s:0.7275, 76s:0.9569, 77:0.8590, 85s:0.8748, 86s:0.9358, 87s:0.9030, 88:0.9490, 96s:0.9395, 97s:0.9486, 98s:0.9405, 99:0.9997, T7s:0.7489, T8s:0.8414, T9s:0.9770, TT:0.9979, J5s:0.0004, J6s:0.0001, J7s:0.0001, J8s:0.5194, J9s:0.7857, JTs:0.9241, JJ:0.9996, AJo:0.5884, Q3s:0.0004, Q5s:0.0010, Q7s:0.0001, Q8s:0.2870, Q9s:0.6823, QTs:0.9275, QJs:0.9959, QQ:0.9585, KQo:0.9390, AQo:0.8862, K3s:0.0350, K4s:0.0020, K5s:0.1105, K6s:0.9321, K7s:0.7838, K8s:0.6894, K9s:0.4972, KTs:0.9675, KJs:0.9944, KQs:0.9600, AKo:0.0002, A2s:0.5263, A3s:0.3991, A4s:0.7768, A5s:0.9651, A6s:0.4562, A7s:0.8817, A8s:0.7933, A9s:0.9273, ATs:0.9931, AJs, AQs:0.9610, AKs:0.0003"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0025, A2o:0.0790, K3o:0.0013, A3o:0.0412, 44:0.0002, K4o:0.0023, A4o:0.1120, 54s:0.0001, K5o:0.0043, A5o:0.3182, 65s:0.0005, K6o:0.0012, A6o:0.0116, K7o:0.0004, A7o:0.0025, 84s:0.0001, A8o:0.1523, Q9o:0.0001, A9o:0.0853, TT:0.0007, KTo:0.0085, ATo:0.0577, J6s:0.0001, JJ:0.0002, AJo:0.0111, Q3s:0.0001, Q5s:0.0001, Q9s:0.0009, QQ:0.0013, KQo:0.0004, AQo:0.0881, K2s:0.0079, K3s:0.1173, K4s:0.0070, K5s:0.1304, K6s:0.0170, K7s:0.0222, K8s:0.0011, KTs:0.0017, KQs:0.0013, KK:0.3419, AKo:0.0462, A2s:0.2303, A3s:0.4873, A4s:0.1691, A5s:0.0305, A6s:0.4997, A7s:0.0342, A8s:0.1590, A9s:0.0704, ATs:0.0036, AQs:0.0071, AKs:0.1687, AA:0.6077"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0639, A2o:0.1296, K3o:0.0227, A3o:0.1300, K4o:0.0230, A4o:0.3457, K5o:0.0044, A5o:0.1384, K6o:0.0477, A6o:0.0003, A7o:0.0002, K8o:0.0214, JJ:0.0001, KJo:0.0028, AJo:0.0001, Q2s:0.0001, QQ:0.0001, KQo:0.0165, AQo:0.0001, K2s:0.1235, K3s:0.1865, K4s:0.3095, K5s:0.4435, K6s:0.0017, K7s:0.0122, K8s:0.0160, K9s:0.0159, KTs:0.0010, KQs:0.0001, KK:0.5111, AKo:0.1573, A2s:0.1435, A3s:0.1074, A4s:0.0249, A5s:0.0002, A6s:0.0151, A7s:0.0031, A8s:0.0001, ATs:0.0002, AQs:0.0001, AKs:0.1887, AA:0.3923"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1604, 33:0.1394, 44:0.2816, 55:0.1718, 64s:0.0001, 66:0.1484, 76s:0.0001, 77:0.1409, 88:0.0509, TT:0.0007, Q3s:0.0010, Q4s:0.0003, Q5s:0.0007, Q7s:0.0001, Q9s:0.0001, QJs:0.0001, QQ:0.0401, KQo:0.0269, AQo:0.0254, K7s:0.0001, K8s:0.0006, K9s:0.0001, KQs:0.0378, KK:0.1470, AKo:0.7963, A2s:0.0046, A3s:0.0007, A4s:0.0071, A5s:0.0009, A6s:0.0003, A7s:0.0009, A8s:0.0008, A9s:0.0003, ATs:0.0012, AQs:0.0318, AKs:0.6424"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0010, 66:0.0088, 88:0.3280, T8s:0.0001, TT:0.0002, QQ:0.0578, AQo:0.0243, K9s:0.0001, KTs:0.0265, KK:0.4893, AKo:0.0059, A4s:0.0931, A5s:0.0049, A6s:0.0223, A7s:0.0350, A8s:0.0037, A9s:0.0003, ATs:0.2832, AJs:0.4842, AQs:0.6047, AKs:0.1688, AA:0.0042"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0001, 88:0.0704, A8o:0.0163, 99:0.0066, A9o:0.0001, TT:0.0002, ATo:0.0096, JJ:0.0052, AJo:0.0297, Q8s:0.0004, Q9s:0.0001, QQ:0.0004, KQo:0.0012, AQo:0.3000, K4s:0.0006, K5s:0.0005, K6s:0.0050, K7s:0.0028, K8s:0.0034, K9s:0.0106, KTs:0.0039, KJs:0.0015, KQs:0.0066, KK:0.0009, AKo:0.0048, A2s:0.0630, A3s:0.1379, A4s:0.0207, A5s:0.0005, A6s:0.0761, A7s:0.4652, A8s:0.4311, A9s:0.0063, ATs:0.4745, AJs:0.0543, AQs:0.0631, AKs:0.1984, AA:0.9955"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0070, A5o:0.0001, 66:0.0007, 88:0.0013, A8o:0.0001, 99:0.0074, T8s:0.0017, T9s:0.0018, TT:0.0006, KTo:0.0001, ATo:0.0022, JTs:0.0001, JJ:0.0028, AJo:0.0005, QQ:0.0014, AQo:0.0009, K4s:0.0005, K6s:0.0009, K7s:0.0018, K8s:0.0002, K9s:0.0113, KTs:0.0072, KJs:0.0401, KQs:0.0049, KK:0.5097, AKo:0.9892, A2s:0.0451, A3s:0.0135, A4s:0.1394, A5s:0.0558, A6s:0.0339, A7s:0.1126, A8s:0.1350, A9s:0.0091, ATs:0.0112, AJs:0.0074, AQs:0.0084, AKs:0.6327, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0680, 66:0.1872, 76s:0.0006, 77:0.0623, 88:0.2049, 99:0.0159, TT:0.1591, JJ:0.0033, QQ:0.4648, AQo:0.0843, KTs:0.0840, KJs:0.0695, KQs:0.1043, KK:0.1510, AKo:0.0015, A4s:0.0048, A5s:0.0320, A6s:0.0001, A7s:0.0009, A8s:0.0083, A9s:0.1308, ATs:0.4240, AJs:0.2320, AQs:0.8267, AKs:0.0002"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "QQ:0.0011, KQo:0.0005, AQo:0.0003, KTs:0.0008, KJs:0.0008, KQs:0.0013, KK:0.0005, AKo:0.0015, A7s:0.0001, A9s:0.0005, ATs:0.0001, AQs:0.0008, AKs:0.0027"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0006, 66:0.0518, 77:0.0056, 88:0.0028, 99:0.1272, TT:0.0635, JJ:0.1731, AJo:0.0789, QQ:0.0014, KTs:0.0776, KJs:0.0821, KQs:0.0021, KK:0.1234, AKo:0.7472, A2s:0.0001, A3s:0.0214, A4s:0.0484, A5s:0.7396, A6s:0.0102, A7s:0.2502, A8s:0.2672, A9s:0.6537, ATs:0.3481, AJs:0.4858, AQs:0.1528, AKs:0.3893"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0969, A5o:0.0058, 77:0.0064, 88:0.0111, 99:0.0014, TT:0.0014, KTo:0.0039, JJ:0.0070, QQ:0.0089, K5s:0.0061, K6s:0.0064, K8s:0.0019, K9s:0.0011, KTs:0.0152, KJs:0.0219, KQs:0.0542, KK:0.1935, AKo:0.0018, A4s:0.1630, A5s:0.2115, A6s:0.0763, A7s:0.0015, A8s:0.0660, A9s:0.0013, ATs:0.0812, AJs:0.0123, AQs:0.2033, AKs:0.0342, AA:0.0508"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0102, A5o:0.0041, 66:0.0332, 77:0.0008, 88:0.0095, 99:0.0161, A9o:0.0431, T8s:0.0006, T9s:0.0023, TT:0.0099, KTo:0.0041, JTs:0.0003, JJ:0.0062, Q8s:0.0001, QQ:0.0049, AQo:0.0003, K4s:0.0047, K5s:0.0007, K6s:0.0303, K7s:0.1320, K8s:0.0625, K9s:0.0215, KTs:0.1229, KJs:0.1457, KQs:0.1339, KK:0.8063, AKo:0.9977, A2s:0.2545, A3s:0.2905, A4s:0.4354, A5s:0.4803, A6s:0.1127, A7s:0.0047, A8s:0.5428, A9s:0.0928, ATs:0.4182, AJs:0.5421, AQs:0.4778, AKs:0.9656, AA:0.9492"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0231, 66:0.0592, 99:0.0892, TT:0.0007, JJ:0.0073, QQ:0.0444, AQo:0.0001, KTs:0.0677, KJs:0.0084, KQs:0.0226, KK:0.1156, AKo:0.0010, A4s:0.0175, A5s:0.0228, A7s:0.0010, A8s:0.0394, A9s:0.0710, ATs:0.0707, AJs:0.0703, AQs:0.4111, AKs:0.0045"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0021, 66:0.0036, 77:0.0167, 88:0.0039, 99:0.0050, TT:0.0213, JJ:0.0717, AJo:0.0005, QQ:0.0081, AQo:0.0017, KTs:0.1529, KJs:0.0457, KK:0.1591, AKo:0.7488, A3s:0.0019, A4s:0.0112, A5s:0.6175, A6s:0.0086, A7s:0.1062, A8s:0.0384, A9s:0.4699, ATs:0.7388, AJs:0.1109, AQs:0.3932, AKs:0.3874"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0573, JJ:0.0775, QQ:0.2127, KK, AKo:0.4007, AKs:0.4504, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0233, TT:0.0738, JJ:0.0456, QQ:0.3809, KK:0.2748, AKo:0.2686, AQs:0.0004, AKs:0.1788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0851, 77:0.0120, 88:0.0344, QQ:0.1192, AQo:0.0025, KTs:0.0005, KK:0.1071, AKo:0.0012, A2s:0.0174, A4s:0.0147, A5s:0.0411, A7s:0.0004, A8s:0.0002, A9s:0.0290, ATs:0.0006, AJs:0.0172, AQs:0.4824, AKs:0.0039, AA:0.0003"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0928, 88:0.0002, A8o:0.0440, 98s:0.0001, A9o:0.0441, T8s:0.0013, TT:0.0014, ATo:0.2462, JJ:0.0002, AJo:0.0085, QJs:0.0001, QQ:0.0017, AQo:0.1433, K6s:0.0027, K7s:0.0007, K8s:0.0006, K9s:0.0001, KTs:0.0003, KJs:0.0008, KK:0.0003, AKo:0.0377, A2s:0.0751, A3s:0.0577, A4s:0.2189, A5s:0.0607, A6s:0.1524, A7s:0.2090, A8s:0.0320, A9s:0.2426, ATs:0.0833, AJs:0.0228, AQs:0.0323, AKs:0.3054, AA:0.9983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0007, 66:0.0012, 76s:0.0006, 77:0.0112, 87s:0.0019, 88:0.0143, 99:0.0066, T9s:0.0002, TT:0.0680, QJs:0.0013, QQ:0.0006, KQo:0.0012, AQo:0.0002, K6s:0.0072, K7s:0.1052, K8s:0.0130, K9s:0.0066, KTs:0.0764, KJs:0.0577, KQs:0.0017, KK:0.8926, AKo:0.9611, A2s:0.2730, A3s:0.6403, A4s:0.1168, A5s:0.5487, A6s:0.5018, A7s:0.3076, A8s:0.4175, A9s:0.2754, ATs:0.2210, AJs:0.2649, AQs:0.0006, AKs:0.6906, AA:0.0015"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0006, 55:0.0868, 65s:0.0042, 66:0.1781, 77:0.0391, 88:0.1109, 99:0.0034, JJ:0.0302, QQ:0.3595, AQo:0.0270, KTs:0.0597, KJs:0.0827, KK:0.0446, AKo:0.0003, A7s:0.0005, ATs:0.0147, AQs:0.9448, AKs:0.0022"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "QQ:0.0003, AQo:0.0001, KQs:0.0009, KK:0.0007, AKo:0.0003, AKs:0.0008"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0071, 65s:0.0001, 66:0.0028, 77:0.0026, 88:0.1256, 99:0.0121, TT:0.0263, JJ:0.5119, QQ:0.1774, AQo:0.0005, KTs:0.0270, KJs:0.0754, KQs:0.0126, KK:0.2295, AKo:0.7496, A3s:0.0129, A4s:0.0661, A5s:0.5361, A6s:0.0045, A7s:0.0240, A8s:0.0942, A9s:0.4379, ATs:0.4420, AJs:0.8440, AQs:0.0025, AKs:0.3891"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0006, JTs:0.0001, JJ:0.0030, Q9s:0.0047, QQ:0.0793, KQo:0.0125, K6s:0.0305, K8s:0.0001, K9s:0.0923, KTs:0.0072, KJs:0.0142, KQs:0.0092, KK:0.0002, A4s:0.0208, A5s:0.0029, A7s:0.0005, A8s:0.0117, A9s:0.0163, ATs:0.0002, AJs:0.0129, AQs:0.0763, AKs:0.0038, AA:0.0702"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0959, A5o:0.0026, 66:0.0701, 76s:0.0015, 77:0.0022, 87s:0.0053, 88:0.0017, A8o:0.0003, 98s:0.0004, 99:0.0404, T9s:0.0055, TT:0.1146, ATo:0.0007, J9s:0.0004, JTs:0.0001, JJ:0.1241, KJo:0.0268, Q9s:0.0017, QQ:0.0116, KQo:0.0184, K5s:0.0006, K6s:0.0738, K7s:0.1787, K8s:0.3277, K9s:0.1489, KTs:0.3687, KJs:0.1425, KQs:0.0048, KK:0.9998, AKo, A2s:0.2250, A3s:0.0518, A4s:0.2291, A5s:0.6857, A6s:0.2398, A7s:0.3622, A8s:0.2740, A9s:0.1506, ATs:0.1316, AJs:0.3025, AQs:0.0030, AKs:0.9961, AA:0.9298"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@14",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0053, 66:0.0141, 77:0.0388, 88:0.0157, JJ:0.0045, QQ:0.1121, KQo:0.0052, KTs:0.0363, KJs:0.3010, KQs:0.2614, KK:0.0075, AKo:0.0068, A4s:0.0002, A5s:0.0046, A6s:0.0002, A7s:0.0004, A8s:0.0001, A9s:0.1214, ATs:0.0004, AJs:0.0173, AQs:0.0555, AKs:0.0141"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0052, 88:0.0022, 99:0.0005, TT:0.0385, JTs:0.0001, JJ:0.0635, QTs:0.0001, QQ:0.0022, KTs:0.4059, KJs:0.4282, KQs:0.0008, KK:0.2673, AKo:0.7428, A3s:0.0060, A4s:0.0041, A5s:0.5864, A6s:0.0037, A7s:0.1075, A8s:0.0907, A9s:0.2797, ATs:0.4021, AJs:0.2355, AQs:0.0259, AKs:0.3776"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1889, KK, AKo:0.4188, AKs:0.9923, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.5530, KK:0.2748, AKo:0.3576, AKs:0.3902"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@5.5",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0296, 66:0.0010, 77:0.0790, 87s:0.0078, 88:0.0227, 98s:0.0285, 99:0.0668, ATo:0.0001, JJ:0.0009, Q8s:0.0002, Q9s:0.0004, QJs:0.0039, QQ:0.3079, AQo:0.0023, K4s:0.0015, K6s:0.0001, K7s:0.1079, K8s:0.0001, KQs:0.0193, KK:0.0657, AKo:0.0011, A3s:0.0417, A4s:0.0002, A5s:0.0001, A6s:0.0004, A7s:0.0018, A8s:0.0008, A9s:0.0501, ATs:0.0002, AJs:0.0236, AQs:0.3937, AKs:0.0008, AA:0.0269"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "55:0.0260, A5o:0.0158, 66:0.0001, 76s:0.0020, 77:0.0826, 87s:0.0007, 88:0.1513, A8o:0.0001, 98s:0.0075, 99:0.0122, A9o:0.0072, T8s:0.0070, T9s:0.0780, TT:0.0171, ATo:0.0144, JTs:0.0004, JJ:0.0867, KJo:0.0003, AJo:0.0256, Q8s:0.0004, QJs:0.0078, QQ:0.2935, KQo:0.0006, AQo:0.2990, K4s:0.0005, K5s:0.0063, K6s:0.0008, K7s:0.0010, K8s:0.0944, K9s:0.0288, KTs:0.1573, KQs:0.0028, KK:0.0276, AKo:0.0467, A2s:0.1696, A3s:0.0382, A4s:0.4241, A5s:0.0129, A6s:0.0793, A7s:0.0462, A8s:0.0270, A9s:0.1683, ATs:0.0882, AJs:0.0816, AQs:0.4892, AKs:0.0317, AA:0.7001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.1956, A5o:0.0098, 66:0.0484, 76s:0.0051, 77:0.0675, 87s:0.0122, 88:0.0683, 98s:0.0054, 99:0.0461, T8s:0.0071, T9s:0.0003, TT:0.0114, KTo:0.0118, ATo:0.0045, JJ:0.0357, KJo:0.0127, AJo:0.0001, QTs:0.0015, QQ:0.0284, KQo:0.0082, AQo:0.0136, K4s:0.0016, K5s:0.1942, K6s:0.0656, K7s:0.1022, K8s:0.0828, K9s:0.0496, KTs:0.3501, KJs:0.0002, KQs:0.1539, KK:0.9067, AKo:0.9520, A2s:0.1617, A3s:0.4226, A4s:0.0240, A5s:0.2533, A6s:0.3591, A7s:0.1382, A8s:0.1552, A9s:0.1927, ATs:0.0862, AJs:0.0354, AQs:0.0181, AKs:0.9673, AA:0.2730"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@5.5",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0014, 54s:0.0039, 55:0.3152, 65s:0.4586, 66:0.4730, 76s:0.0005, 77:0.4119, 88:0.8768, 99:0.3877, T9s:0.2437, TT:0.3106, JTs:0.2273, JJ:0.9830, AJo:0.0003, QTs:0.0039, QJs:0.2578, QQ:0.9128, KQo:0.0001, AQo:0.3088, KTs:0.2079, KJs:0.6730, KQs:0.6257, KK:0.0001, AKo:0.0238, A2s:0.0001, A3s:0.0259, A4s:0.0367, A5s:0.3072, A6s:0.0103, A7s:0.0067, A8s:0.2435, A9s:0.6796, ATs:0.5778, AJs:0.6144, AQs:0.9481, AKs:0.0007"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "55:0.0014, 65s:0.0001, 77:0.0243, 88:0.0001, 99:0.0339, TT:0.0058, JTs:0.0001, JJ:0.0002, AJo:0.0001, QTs:0.0254, QJs:0.0013, QQ:0.0601, KQo:0.0060, AQo:0.0863, KTs:0.1318, KJs:0.0015, KQs:0.0025, KK:0.2700, AKo:0.0008, A4s:0.0004, A5s:0.0083, A6s:0.0003, A7s:0.0018, A8s:0.0246, A9s:0.0041, ATs:0.0041, AJs:0.0460, AQs:0.0006, AKs:0.0007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0038, 65s:0.0001, 66:0.0067, 77:0.0067, 88:0.0012, 99:0.0087, TT:0.0125, JJ:0.0012, AJo:0.0015, QJs:0.0021, QQ:0.0222, KQo:0.0041, AQo:0.0204, KTs:0.1091, KJs:0.2172, KQs:0.0559, KK:0.0047, AKo:0.7255, A3s:0.0019, A4s:0.0304, A5s:0.2165, A6s:0.0012, A7s:0.0533, A8s:0.0071, A9s:0.0110, ATs:0.1177, AJs:0.0213, AQs:0.0461, AKs:0.3907"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@8",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0113, 88:0.0463, 99:0.0032, JJ:0.0068, QQ:0.2509, AQo:0.0254, K7s:0.0008, K9s:0.0001, KTs:0.0001, KJs:0.0001, KQs:0.0198, KK:0.0223, AKo:0.0007, A3s:0.0001, A8s:0.0001, AJs:0.0046, AQs:0.1929, AKs:0.0001, AA:0.0031"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "55:0.0005, A5o:0.0497, 66:0.0005, 88:0.0015, A8o:0.0016, 99:0.0023, A9o:0.0029, T8s:0.0001, TT:0.0006, KTo:0.0006, ATo:0.0030, J9s:0.0003, JTs:0.0094, JJ:0.3238, AJo:0.0215, Q9s:0.0001, QTs:0.0054, QJs:0.0005, QQ:0.2564, AQo:0.3316, K5s:0.0156, K6s:0.0007, K7s:0.0001, K8s:0.0037, K9s:0.0180, KTs:0.0030, KJs:0.0619, KQs:0.0001, KK:0.0137, AKo:0.0136, A2s:0.0377, A3s:0.0008, A4s:0.3094, A5s:0.4455, A6s:0.1383, A7s:0.2184, A8s:0.6565, A9s:0.1031, ATs:0.1751, AJs:0.1066, AQs:0.5409, AKs:0.0797, AA:0.9967"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0004, 55:0.0001, A5o:0.0005, 66:0.0442, 77:0.0886, 88:0.1053, 98s:0.0003, 99:0.2746, T8s:0.0002, T9s:0.0001, TT:0.0473, JJ:0.0022, KJo:0.0001, AJo:0.0005, Q9s:0.0001, QQ:0.0002, K4s:0.0108, K5s:0.1393, K6s:0.0818, K7s:0.0352, K8s:0.0131, K9s:0.3369, KTs:0.1543, KJs:0.3044, KQs:0.0664, KK:0.9640, AKo:0.9857, A2s:0.3849, A3s:0.1330, A4s:0.2012, A5s:0.2596, A6s:0.3452, A7s:0.1054, A8s:0.0059, A9s:0.0001, ATs:0.2735, AJs:0.0955, AQs:0.0004, AKs:0.9201, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@8",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0801, 65s:0.0139, 66:0.0754, 77:0.3883, 88:0.5579, 99:0.0286, T9s:0.0090, TT:0.0227, JTs:0.0001, JJ:0.4440, QQ:0.9758, AQo:0.1479, KTs:0.0218, KJs:0.1786, KQs:0.3257, AKo:0.0016, A3s:0.0053, A4s:0.0386, A5s:0.3125, A6s:0.0001, A7s:0.2261, A8s:0.0045, A9s:0.1609, ATs:0.1081, AJs:0.5615, AQs:0.9530"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "66:0.0054, 77:0.0122, 88:0.0001, TT:0.0007, JTs:0.0050, JJ:0.0022, QJs:0.0002, QQ:0.0012, KQo:0.0045, AQo:0.0643, KTs:0.1649, KJs:0.1080, KQs:0.0859, KK:0.1343, AKo:0.0655, A5s:0.0001, A7s:0.0001, A9s:0.0121, ATs:0.0004, AJs:0.0242, AQs:0.0044, AKs:0.0013"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0003, 77:0.0023, 88:0.0003, 99:0.0001, TT:0.0259, JJ:0.2890, AJo:0.0009, QQ:0.0194, AQo:0.0001, KTs:0.1014, KJs:0.0747, KQs:0.0377, KK:0.1405, AKo:0.6831, A3s:0.0075, A4s:0.0052, A5s:0.1877, A6s:0.0018, A7s:0.0413, A8s:0.0006, A9s:0.1568, ATs:0.2927, AJs:0.2152, AQs:0.0047, AKs:0.3908"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0471, 77:0.0067, 88:0.0066, 99:0.0112, T8s:0.0007, TT:0.0083, J9s:0.0002, JJ:0.0019, QQ:0.1040, AQo:0.0077, KTs:0.0040, KJs:0.0017, KQs:0.0010, KK:0.0616, AKo:0.0099, A4s:0.0221, A6s:0.0139, A7s:0.0096, A8s:0.0019, A9s:0.1786, ATs:0.0229, AJs:0.0163, AQs:0.4623, AKs:0.0036, AA:0.0085"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0135, 88:0.0002, A8o:0.0337, A9o:0.0310, TT:0.0068, ATo:0.0200, JJ:0.0008, AJo:0.0696, QTs:0.0001, QQ:0.0382, KQo:0.0002, AQo:0.2098, K4s:0.0007, K6s:0.0001, K8s:0.0098, K9s:0.0019, KTs:0.0018, KJs:0.0001, KQs:0.0004, AKo:0.0431, A2s:0.1856, A3s:0.0055, A4s:0.0001, A5s:0.0763, A6s:0.4081, A7s:0.0148, A8s:0.1377, A9s:0.0028, ATs:0.0202, AJs:0.1637, AQs:0.1292, AKs:0.1067, AA:0.9834"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0073, A5o:0.0043, 65s:0.0001, 66:0.0504, 76s:0.0002, 77:0.0334, 87s:0.0002, 88:0.1354, 98s:0.0001, 99:0.0294, T8s:0.0002, T9s:0.0001, TT:0.0901, KTo:0.0001, J9s:0.0061, JTs:0.0003, JJ:0.1261, KJo:0.0005, Q8s:0.0001, Q9s:0.0003, QTs:0.0001, QQ:0.0038, KQo:0.0001, AQo:0.0012, K5s:0.0060, K6s:0.0005, K7s:0.0010, K8s:0.0008, KTs:0.0002, KJs:0.0007, KQs:0.0153, KK:0.9295, AKo:0.9469, A2s:0.1767, A3s:0.8216, A4s:0.2670, A5s:0.8165, A6s:0.1772, A7s:0.8021, A8s:0.3965, A9s:0.0354, ATs:0.3807, AJs:0.6608, AQs:0.1989, AKs:0.8896, AA:0.0080"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0232, 66:0.0053, 77:0.1568, 88:0.2904, 99:0.0278, TT:0.0014, JJ:0.1659, QQ:0.5719, AQo:0.0070, KQs:0.0064, KK:0.0794, AKo:0.0002, A3s:0.0007, A4s:0.0083, A5s:0.1554, A7s:0.0078, A8s:0.0079, A9s:0.0306, ATs:0.1071, AJs:0.7102, AQs:0.7606"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0001, JTs:0.0001, JJ:0.0001, AQo:0.0001, KTs:0.0001, KJs:0.0001, KQs:0.0001, KK:0.0003, A5s:0.0002, A8s:0.0001, A9s:0.0002, ATs:0.0001, AQs:0.0001, AKs:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0001, 65s:0.0036, 66:0.0047, 77:0.0186, 88:0.0327, 99:0.0358, TT:0.1160, JJ:0.2606, AJo:0.0459, QQ:0.1985, AQo:0.0075, KTs:0.0136, KJs:0.0033, KQs:0.0237, KK:0.1951, AKo:0.7499, A3s:0.0073, A4s:0.0337, A5s:0.3411, A6s:0.0007, A7s:0.1301, A8s:0.0650, A9s:0.1787, ATs:0.0438, AJs:0.1632, AQs:0.2270, AKs:0.3918"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0011, QQ:0.6937, KK, AKo:0.2288, AKs:0.9314, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0030, QQ:0.7147, KK:0.2748, AKo:0.0609, AKs:0.3585"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0045, A2o:0.0096, 33:0.0005, A3o:0.0260, 43s:0.0003, K4o:0.0005, 54s:0.0511, A5o:0.0040, 63s:0.0004, A6o:0.0047, 75s:0.0277, A7o:0.0001, 83s:0.0003, 87s:0.0065, 88:0.1459, 92s:0.0002, 95s:0.0002, 96s:0.0011, 98s:0.0005, 99:0.0712, A9o:0.0193, T3s:0.0003, T4s:0.0005, T8s:0.0086, T9s:0.0062, TT:0.0895, J2s:0.0113, J3s:0.0075, J4s:0.0001, J6s:0.0004, J8s:0.0050, JTs:0.0048, JJ:0.4000, AJo:0.0002, QTs:0.0025, QJs:0.0031, QQ:0.2781, AQo:0.1360, K3s:0.0773, K4s:0.0002, K7s:0.0026, K8s:0.0214, KTs:0.0598, KQs:0.0132, KK:0.0568, AKo:0.0056, A2s:0.0508, A3s:0.1141, A4s:0.0013, A5s:0.1197, A6s:0.3728, A7s:0.0026, A8s:0.3887, A9s:0.0002, ATs:0.2294, AJs:0.3754, AQs:0.2293, AKs:0.0381, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0012, A3o:0.0004, 43s:0.0003, 54s:0.0031, A5o:0.0001, 63s:0.0011, 65s:0.0664, 66:0.0007, 75s:0.0001, 77:0.0075, A7o:0.0001, 87s:0.0022, 88:0.0003, 96s:0.0003, T9s:0.0028, J5s:0.0001, J9s:0.0001, JTs:0.0004, JJ:0.0001, AJo:0.0002, QJs:0.0001, QQ:0.0043, AQo:0.0021, K2s:0.0017, K3s:0.0311, K4s:0.0159, K6s:0.0024, K8s:0.0001, K9s:0.0361, KTs:0.3027, KJs:0.0012, KQs:0.0004, KK:0.9427, AKo:0.9929, A2s:0.0196, A3s:0.7136, A4s:0.0205, A5s:0.1288, A6s:0.0646, A7s:0.0856, A8s:0.0206, A9s:0.0003, ATs:0.4191, AJs:0.0412, AQs:0.0014, AKs:0.9613, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0129, 33:0.0056, A3o:0.0022, 42s:0.0052, 44:0.0223, A4o:0.0004, 53s:0.0015, 54s:0.0611, 55:0.0370, A5o:0.0950, 66:0.0124, K6o:0.0005, 72s:0.0001, 76s:0.0983, 77:0.0126, A7o:0.0002, 86s:0.0104, 87s:0.0026, 92s:0.0162, 98s:0.0709, 99:0.0514, A9o:0.0003, T4s:0.0001, T7s:0.0001, T8s:0.0024, TT:0.1552, KTo:0.0093, ATo:0.0120, J4s:0.0008, J6s:0.0015, J7s:0.0006, J8s:0.0027, JTs:0.0034, JJ:0.3729, QJo:0.0004, AJo:0.0052, Q4s:0.0004, QJs:0.0013, QQ:0.0410, AQo:0.0685, K2s:0.0319, K3s:0.0277, K4s:0.0014, K5s:0.0053, K7s:0.0858, K8s:0.0559, K9s:0.0422, KTs:0.2007, KJs:0.4713, KK:0.3066, AKo:0.0099, A3s:0.0326, A4s:0.0216, A5s:0.0192, A6s:0.3405, A7s:0.0378, A8s:0.1655, A9s:0.1898, ATs:0.0466, AJs:0.5132, AQs:0.4833, AKs:0.0818, AA:0.9524"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0519, 33:0.1703, A4o:0.0210, 55:0.1885, A5o:0.0433, 66:0.1566, T8s:0.0041, TT:0.1001, JTs:0.0047, Q9s:0.0002, QTs:0.0006, AQo:0.0003, K2s:0.2487, K4s:0.2932, K5s:0.1223, K6s:0.0010, K7s:0.0033, KTs:0.0968, KQs:0.0012, KK:0.6933, AKo:0.9896, A2s:0.2804, A3s:0.3006, A4s:0.2629, A5s:0.2192, A6s:0.2314, A7s:0.0004, A8s:0.3371, A9s:0.0377, ATs:0.2162, AJs:0.3129, AQs:0.0670, AKs:0.9147, AA:0.0476"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "T2o:0.0001, A2o:0.0006, T3o:0.0001, A3o:0.0178, 44:0.0042, J4o:0.0003, A4o:0.0069, 52s:0.0009, 54s:0.0443, J5o:0.0003, A5o:0.0061, 64s:0.0002, 65s:0.0001, 66:0.0431, A6o:0.0038, 76s:0.0397, A7o:0.0023, 82s:0.0007, 83s:0.0005, 85s:0.0002, 88:0.0036, A8o:0.0058, 92s:0.0001, 97s:0.0031, 98s:0.0003, 99:0.0033, A9o:0.0026, T3s:0.0008, T8s:0.0048, T9s:0.0002, TT:0.0268, J2s:0.0002, J5s:0.0001, J6s:0.0301, J7s:0.0065, J8s:0.0001, J9s:0.0247, JJ:0.1428, Q4s:0.0002, Q8s:0.0003, QTs:0.0119, QQ:0.1074, AQo:0.0796, K2s:0.0003, K4s:0.0120, K6s:0.0021, K7s:0.0009, K8s:0.0013, K9s:0.0311, KJs:0.1410, KQs:0.1229, KK:0.4881, AKo:0.0112, A2s:0.0021, A3s:0.2853, A4s:0.0100, A5s:0.3451, A6s:0.3205, A7s:0.0616, A8s:0.0734, A9s:0.0269, ATs:0.5381, AJs:0.7528, AQs:0.5059, AKs:0.0983, AA:0.9111"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "Q4o:0.0001, K4o:0.0001, 54s:0.0002, 62s:0.0001, 65s:0.0007, A6o:0.0002, 74s:0.0014, 76s:0.0001, 77:0.0001, 82s:0.0001, 84s:0.0001, 85s:0.0001, 92s:0.0008, 99:0.0001, T2s:0.0001, T3s:0.0001, ATo:0.0008, J2s:0.0001, J6s:0.0004, J9s:0.0003, JTs:0.0017, JJ:0.0001, KJo:0.0001, AJo:0.0003, Q2s:0.0002, Q7s:0.0001, Q9s:0.0004, QTs:0.0006, QQ:0.0003, AQo:0.0001, K3s:0.0003, K5s:0.0001, KK:0.5117, AKo:0.9877, A2s:0.0039, A3s:0.0012, A4s:0.0462, A5s:0.1014, A6s:0.0607, A7s:0.1054, A8s:0.0116, A9s:0.0013, ATs:0.0019, AJs:0.0067, AQs:0.0011, AKs:0.8973, AA:0.0889"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0008, 55:0.8853, 65s:0.0123, 66:0.7770, 76s:0.4685, 77:0.8486, 87s:0.1454, 88:0.8308, 98s:0.0730, 99:0.8233, A9o:0.0001, T8s:0.3561, T9s:0.6667, TT:0.9577, KTo:0.0001, ATo:0.0001, J9s:0.0520, JTs:0.4716, JJ:0.8556, AJo:0.0026, Q9s:0.0004, QTs:0.0576, QJs:0.0694, QQ:0.9516, KQo:0.3142, AQo:0.7362, K4s:0.0162, K5s:0.0917, K6s:0.0952, K7s:0.1802, K8s:0.0468, K9s:0.4273, KTs:0.7584, KJs:0.9335, KQs:0.9321, KK:0.3757, AKo:0.0001, A2s:0.2400, A3s:0.1352, A4s:0.0138, A5s:0.2066, A6s:0.0500, A7s:0.1987, A8s:0.7284, A9s:0.4432, ATs:0.5108, AJs:0.6002, AQs:0.7130"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "55:0.0309, A5o:0.0078, 65s:0.0009, 66:0.0304, 76s:0.0002, 77:0.0132, 87s:0.0236, 88:0.1146, A8o:0.0040, 98s:0.0492, 99:0.1304, A9o:0.0015, T8s:0.0072, T9s:0.0150, TT:0.0310, KTo:0.0006, ATo:0.0254, J9s:0.0524, JTs:0.0441, JJ:0.1373, KJo:0.0138, AJo:0.0072, Q8s:0.0012, Q9s:0.0013, QTs:0.0111, QJs:0.0548, QQ:0.0484, AQo:0.2634, K4s:0.0094, K5s:0.0008, K6s:0.0030, K7s:0.0055, K8s:0.0141, K9s:0.0037, KTs:0.2069, KJs:0.0455, KQs:0.0007, KK:0.0003, AKo:0.0016, A2s:0.1998, A3s:0.2644, A4s:0.1953, A5s:0.4934, A6s:0.1068, A7s:0.5758, A8s:0.0335, A9s:0.4171, ATs:0.3417, AJs:0.3140, AQs:0.2868, AKs:0.0156, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0004, 55:0.0770, A5o:0.0010, 65s:0.0001, 66:0.1013, 76s:0.0001, 77:0.0677, 87s:0.0003, 88:0.0498, 98s:0.0004, 99:0.0373, T9s:0.0003, TT:0.0061, ATo:0.0001, JTs:0.0074, JJ:0.0051, AJo:0.0023, Q9s:0.0002, K4s:0.0001, K5s:0.0800, K6s:0.0723, K7s:0.0004, K8s:0.0078, K9s:0.0229, KTs:0.0178, KJs:0.0001, KK:0.6240, AKo:0.9983, A2s:0.2557, A3s:0.4306, A4s:0.5165, A5s:0.2103, A6s:0.1205, A7s:0.1944, A8s:0.2036, A9s:0.0747, ATs:0.0816, AJs:0.0736, AQs:0.0001, AKs:0.9844"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|LJ:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0082, 77:0.0618, 88:0.0196, 99:0.0089, T9s:0.0050, TT:0.0677, ATo:0.0015, JTs:0.0006, JJ:0.0067, AJo:0.0001, QQ:0.0008, KQo:0.0024, AQo:0.0619, K9s:0.0046, KTs:0.0111, KJs:0.0029, KQs:0.0001, KK:0.0673, AKo:0.0077, A2s:0.0043, A3s:0.0442, A4s:0.0083, A5s:0.0258, A6s:0.0030, A7s:0.0771, A8s:0.0242, A9s:0.0031, AJs:0.0001, AQs:0.0024, AKs:0.1203, AA:0.0213"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0269, AKo:0.0071, A2s:0.0009, A3s:0.0092, A4s:0.0026, A5s:0.0039, A6s:0.0007, A7s:0.0078, A8s:0.0065, AQs:0.0010, AKs:0.0959, AA:0.0113"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|LJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.0001, KK:0.0673, AKo:0.0117, AKs:0.2157, AA:0.0326"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0004, 77:0.0009, 87s:0.0001, 88:0.0007, 98s:0.0011, T8s:0.0001, TT:0.0042, KTo:0.0004, ATo:0.0001, J9s:0.0268, JTs:0.0001, JJ:0.0070, KJo:0.0001, Q9s:0.0005, QJs:0.0003, AQo:0.0001, K5s:0.0001, K6s:0.0022, K8s:0.0007, KTs:0.0001, KJs:0.0006, KQs:0.0001, KK:0.4615, AKo:0.0016, A3s:0.0006, A4s:0.0008, A5s:0.0004, A6s:0.0001, A7s:0.0010, A9s:0.0014, ATs:0.1121, AJs:0.0001, AKs:0.0163, AA:0.1647"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0004, A5o:0.0643, 65s:0.0001, 77:0.0001, 87s:0.0001, 88:0.0007, A8o:0.0008, 98s:0.0007, 99:0.0002, A9o:0.0996, T8s:0.0046, T9s:0.0141, TT:0.0074, ATo:0.0887, J9s:0.0075, JTs:0.0028, JJ:0.0007, KJo:0.0001, AJo:0.0016, Q9s:0.0001, QTs:0.0026, QJs:0.0077, QQ:0.0132, AQo:0.0346, K4s:0.0007, K5s:0.0279, K6s:0.0003, K7s:0.0414, K8s:0.0013, K9s:0.0001, KTs:0.0001, KJs:0.0168, KQs:0.0126, KK:0.2889, AKo:0.6279, A2s:0.0615, A3s:0.2225, A4s:0.0481, A5s:0.3090, A6s:0.0007, A7s:0.7102, A8s:0.1062, A9s:0.2841, ATs:0.2000, AJs:0.1508, AQs:0.3057, AKs:0.5665, AA:0.8353"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0081, 77:0.0609, 88:0.0195, 99:0.0080, T9s:0.0016, TT:0.0489, JTs:0.0003, JJ:0.0064, QQ:0.0008, AQo:0.0582, K7s:0.0001, K9s:0.0086, KTs:0.0070, KJs:0.0010, KQs:0.0001, KK:0.0670, AKo:0.0088, A2s:0.0032, A3s:0.0192, A4s:0.0038, A5s:0.0097, A6s:0.0070, A7s:0.0521, A8s:0.0260, A9s:0.0013, AJs:0.0001, AQs:0.0034, AKs:0.1784, AA:0.0087"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0001, KK:0.0003, AKo:0.0060, A2s:0.0042, A3s:0.0109, A4s:0.0058, A5s:0.0163, A7s:0.0081, A8s:0.0057, A9s:0.0003, AKs:0.0377, AA:0.0239"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "87s:0.0001, 88:0.0008, 99:0.0121, T8s:0.0011, TT:0.0020, ATo:0.0001, J9s:0.0001, JJ:0.0084, Q9s:0.0001, QTs:0.0005, QJs:0.0002, QQ:0.0055, AQo:0.0002, K5s:0.0001, K7s:0.0010, K9s:0.0002, KTs:0.0003, KJs:0.0001, KQs:0.0003, KK:0.9948, AKo:0.0002, A2s:0.0003, A3s:0.0006, A4s:0.0008, A5s:0.0005, A6s:0.0006, A8s:0.0125, A9s:0.0002, ATs:0.0001, AJs:0.0003, AQs:0.0001, AKs:0.1055, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0673, AKo:0.0118, AKs:0.2135, AA:0.0326"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0003, 77:0.0004, 98s:0.0007, A9o:0.0001, TT:0.0017, Q9s:0.0001, QTs:0.0010, QJs:0.0002, QQ:0.0002, KQo:0.0002, AQo:0.0001, K5s:0.0001, K6s:0.0004, K8s:0.0003, K9s:0.0011, KQs:0.0003, KK:0.4349, AKo:0.0001, A2s:0.0032, A3s:0.0015, A4s:0.0049, A5s:0.0013, A6s:0.0065, A7s:0.0003, A8s:0.0200, ATs:0.0001, AJs:0.0016, AQs:0.0004, AKs:0.0741, AA:0.3751"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0009, A5o:0.0947, 76s:0.0001, 77:0.0003, 87s:0.0001, 88:0.0009, A8o:0.0001, 98s:0.0002, A9o:0.0225, TT:0.0013, ATo:0.0001, JTs:0.0009, JJ:0.0001, AJo:0.0002, Q8s:0.0004, Q9s:0.0013, QTs:0.0003, QQ:0.0012, KQo:0.0001, AQo:0.0029, K4s:0.0126, K5s:0.0001, K6s:0.0015, K8s:0.0001, K9s:0.0004, KJs:0.0726, KQs:0.0010, KK:0.4682, AKo:0.1917, A2s:0.4588, A3s:0.0013, A4s:0.2469, A5s:0.7103, A6s:0.0887, A7s:0.1206, A8s:0.0447, A9s:0.4759, ATs:0.0018, AJs:0.0997, AQs:0.0003, AKs:0.7224, AA:0.6249"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0081, 77:0.0351, 88:0.0190, 99:0.0057, T9s:0.0008, TT:0.0500, ATo:0.0002, JTs:0.0001, JJ:0.0066, AJo:0.0002, QQ:0.0008, KQo:0.0075, AQo:0.0546, K9s:0.0055, KTs:0.0037, KJs:0.0006, KQs:0.0001, KK:0.0633, AKo:0.0082, A2s:0.0004, A3s:0.0175, A4s:0.0061, A5s:0.0116, A6s:0.0053, A7s:0.0294, A8s:0.0068, A9s:0.0009, AJs:0.0001, AQs:0.0034, AKs:0.1326, AA:0.0117"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0037, K9s:0.0009, KTs:0.0013, KJs:0.0001, KK:0.0040, AKo:0.0066, A2s:0.0051, A3s:0.0182, A4s:0.0052, A5s:0.0052, A6s:0.0032, A7s:0.0249, A8s:0.0066, A9s:0.0003, AKs:0.0835, AA:0.0209"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 76s:0.0001, 77:0.0001, 88:0.0032, TT:0.0043, ATo:0.0003, J9s:0.0002, JJ:0.0006, AJo:0.0001, QJs:0.0001, QQ:0.0169, AQo:0.0001, K5s:0.0001, K7s:0.0004, K9s:0.0003, KTs:0.0001, KQs:0.0004, KK, AKo:0.0053, A2s:0.0001, A3s:0.0001, A4s:0.0004, A7s:0.0003, A9s:0.0001, ATs:0.0001, AJs:0.0001, AQs:0.0003, AKs:0.2129, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0673, AKo:0.0007, AKs:0.1487, AA:0.0326"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0001, A5o:0.0004, 65s:0.0001, 66:0.0025, 76s:0.0001, 77:0.0090, 88:0.0043, 98s:0.0004, 99:0.0009, T8s:0.0005, T9s:0.0006, TT:0.0033, ATo:0.0003, J9s:0.0022, JTs:0.0011, JJ:0.0311, QJo:0.0004, KJo:0.0001, AJo:0.0057, Q8s:0.0011, Q9s:0.0036, QTs:0.0004, QJs:0.0003, QQ:0.1789, AQo:0.0004, K4s:0.0001, K5s:0.0012, K6s:0.0002, K8s:0.0002, KTs:0.0002, KJs:0.0007, KK:0.0282, AKo:0.0541, A2s:0.0021, A3s:0.0051, A4s:0.0002, A6s:0.0002, A7s:0.0062, A8s:0.0013, A9s:0.0060, ATs:0.0164, AJs:0.0002, AQs:0.0823, AKs:0.4942, AA:0.3582"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0205, 65s:0.0001, 66:0.0001, 77:0.0009, A7o:0.0001, 87s:0.0001, 88:0.0001, 99:0.0001, A9o:0.0149, T8s:0.0002, TT:0.0001, ATo:0.0001, J9s:0.0011, JJ:0.0011, AJo:0.0015, Q8s:0.0001, Q9s:0.0001, QTs:0.0005, QJs:0.0010, QQ:0.0003, AQo:0.0012, K5s:0.0001, K6s:0.0101, K7s:0.0001, K8s:0.0004, K9s:0.0007, KTs:0.0001, KQs:0.0001, KK:0.0018, AKo:0.0465, A2s:0.0004, A3s:0.2478, A4s:0.2877, A5s:0.2253, A6s:0.1785, A7s:0.0010, A8s:0.0353, A9s:0.4127, ATs:0.1352, AJs:0.0390, AQs:0.5986, AKs:0.1506, AA:0.6418"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0074, 77:0.0571, 88:0.0120, 99:0.0059, T9s:0.0004, TT:0.0495, ATo:0.0019, JTs:0.0002, JJ:0.0066, AJo:0.0014, QQ:0.0007, KQo:0.0147, AQo:0.0733, K9s:0.0187, KTs:0.0062, KJs:0.0017, KQs:0.0001, KK:0.0466, AKo:0.0092, A2s:0.0051, A3s:0.0308, A4s:0.0080, A5s:0.0143, A6s:0.0015, A7s:0.0827, A8s:0.0119, A9s:0.0016, AJs:0.0001, AQs:0.0023, AKs:0.1322, AA:0.0009"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0039, QQ:0.0001, AQo:0.0090, KK:0.0205, AKo:0.0049, A2s:0.0041, A3s:0.0192, A4s:0.0058, A5s:0.0083, A6s:0.0025, A7s:0.0269, A8s:0.0036, A9s:0.0011, AQs:0.0010, AKs:0.0840, AA:0.0317"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0001, 88:0.0001, 99:0.0001, T8s:0.0003, TT:0.0011, J9s:0.0004, JTs:0.0001, AJo:0.0003, QTs:0.0001, QQ:0.0047, KQo:0.0002, AQo:0.0028, K6s:0.0001, K8s:0.0005, KTs:0.0003, KJs:0.0003, KQs:0.0001, KK:0.9329, AKo:0.0109, A7s:0.0001, A8s:0.0012, ATs:0.0001, AJs:0.0008, AQs:0.0002, AKs:0.3110, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@5.5|BTN:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0673, AKo:0.0006, AKs:0.1277, AA:0.0326"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A2o:0.0014, A3o:0.0403, 44:0.0016, A4o:0.0574, 52s:0.0001, K5o:0.0001, A5o:0.0222, A6o:0.0001, A7o:0.0014, 88:0.1017, A8o:0.0527, 99:0.0806, K9o:0.0002, A9o:0.0202, TT:0.0025, ATo:0.0225, JJ:0.1225, KJo:0.0074, AJo:0.0079, QQ:0.2451, AQo:0.1860, K2s:0.0415, K3s:0.0774, K4s:0.0288, K5s:0.0295, K6s:0.0156, K7s:0.0842, K8s:0.1400, K9s:0.0198, KJs:0.0323, KQs:0.0140, KK:0.0153, AKo:0.1033, A2s:0.1705, A3s:0.0173, A4s:0.0921, A5s:0.3086, A6s:0.0029, A7s:0.1045, A8s:0.4566, A9s:0.0801, ATs:0.0801, AJs:0.0511, AQs:0.5345, AKs:0.0732, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "74s:0.0001, K2s:0.0441, K3s:0.0219, K4s:0.0469, K5s:0.0175, K6s:0.1338, K7s:0.1369, K8s:0.0776, K9s:0.0954, KTs:0.1393, KJs:0.0532, KQs:0.1202, KK:0.9778, AKo:0.8967, A2s:0.0534, A3s:0.0844, A4s:0.1727, A5s:0.0286, A6s:0.0636, A7s:0.0009, A8s:0.0151, A9s:0.0251, AQs:0.0001, AKs:0.9268, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0037, 33:0.0077, K3o:0.0006, A4o:0.0090, 55:0.0138, K5o:0.0097, A5o:0.0120, 65s:0.0036, 66:0.0258, K6o:0.0082, 77:0.0268, A7o:0.0004, 88:0.0174, K8o:0.0120, A8o:0.0041, 96s:0.0001, 99:0.0310, K9o:0.0096, A9o:0.0128, T3s:0.0001, TT:0.0013, KTo:0.0076, ATo:0.0001, J9s:0.0002, JJ:0.1007, KJo:0.0142, AJo:0.0022, QQ:0.0048, AQo:0.2001, K2s:0.0149, K3s:0.0322, K4s:0.0273, K5s:0.0246, K6s:0.0238, K7s:0.1609, K8s:0.0150, K9s:0.0691, KJs:0.0922, KQs:0.0105, KK:0.0033, AKo:0.0812, A2s:0.0019, A3s:0.0402, A4s:0.1216, A5s:0.0521, A6s:0.0926, A7s:0.1223, A8s:0.0702, A9s:0.0765, ATs:0.0037, AJs:0.1333, AQs:0.5528, AKs:0.1399, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0031, A4o:0.0015, 64s:0.0004, 65s:0.0058, 66:0.0270, 77:0.0026, 87s:0.0005, 88:0.0013, 98s:0.0002, 99:0.0001, TT:0.0001, Q7s:0.0003, K2s:0.0002, K4s:0.1306, K5s:0.0001, K6s:0.0745, K7s:0.0954, K8s:0.0649, K9s:0.1516, KTs:0.1500, KJs:0.1046, KQs:0.1193, KK:0.9967, AKo:0.9187, A2s:0.2708, A3s:0.4885, A4s:0.4553, A5s:0.2912, A6s:0.0666, A7s:0.0253, A8s:0.0257, A9s:0.1633, ATs:0.0880, AJs:0.0396, AQs:0.0194, AKs:0.8600, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0037, A3o:0.0002, 44:0.0030, A4o:0.0009, A5o:0.0210, 62s:0.0001, 66:0.0181, K6o:0.0004, A6o:0.0001, 76s:0.0001, 77:0.0020, A7o:0.0320, 88:0.0502, A8o:0.0865, 99:0.0060, K9o:0.0057, A9o:0.0002, ATo:0.0004, JJ:0.0445, KJo:0.0028, AJo:0.0031, Q3s:0.0005, QQ:0.1230, AQo:0.2137, K2s:0.0024, K3s:0.0073, K4s:0.0098, K5s:0.1616, K6s:0.0227, K7s:0.1677, K8s:0.0267, K9s:0.0154, KTs:0.0483, KJs:0.0886, KQs:0.0036, KK:0.0823, AKo:0.1549, A2s:0.1541, A3s:0.1866, A4s:0.0932, A5s:0.2283, A6s:0.1899, A7s:0.1841, A8s:0.1622, A9s:0.1693, ATs:0.1577, AJs:0.1732, AQs:0.6604, AKs:0.3191, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, 93s:0.0002, AQo:0.0001, K3s:0.0216, K4s:0.0003, K8s:0.0007, K9s:0.0494, KTs:0.2821, KQs:0.0002, KK:0.9177, AKo:0.8451, A2s:0.4339, A3s:0.4482, A4s:0.0037, A5s:0.2521, A6s:0.0015, A7s:0.2270, A9s:0.0152, ATs:0.0933, AKs:0.6806"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0696, 66:0.3834, 76s:0.0001, 77:0.1692, 88:0.5314, 99:0.0822, T9s:0.0003, TT:0.1132, JJ:0.5388, QQ:0.9602, AQo:0.2756, KTs:0.0087, KJs:0.0403, KQs:0.7607, KK:0.0683, A2s:0.0021, A3s:0.0051, A4s:0.0185, A5s:0.1117, A7s:0.0002, A8s:0.0234, A9s:0.0830, ATs:0.2255, AJs:0.7854, AQs:0.9852, AKs:0.0005"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0678, A5o:0.0001, 66:0.0080, 76s:0.0001, 77:0.0337, 87s:0.0001, 88:0.0767, A8o:0.0100, 98s:0.0001, 99:0.0217, A9o:0.0020, TT:0.0071, ATo:0.0035, JTs:0.0013, JJ:0.1996, KJo:0.0330, AJo:0.0198, QQ:0.0386, AQo:0.4774, K4s:0.0022, K5s:0.0002, K6s:0.0175, K7s:0.0112, K8s:0.0001, K9s:0.0636, KTs:0.0978, KJs:0.1904, KQs:0.0095, KK:0.0001, AKo:0.0111, A2s:0.0003, A3s:0.2527, A4s:0.0153, A5s:0.0042, A6s:0.0490, A7s:0.2444, A8s:0.3327, A9s:0.4707, ATs:0.1260, AJs:0.1186, AQs:0.0146, AKs:0.4031, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.2060, A5o:0.0001, 66:0.0785, 77:0.0715, 87s:0.0001, 88:0.0563, 99:0.4969, TT:0.3960, JJ:0.2203, K5s:0.0297, K6s:0.0139, K7s:0.0091, K9s:0.0950, KTs:0.2652, KJs:0.1567, KQs:0.0002, KK:0.9316, AKo:0.9889, A2s:0.2705, A3s:0.3270, A4s:0.4663, A5s:0.4913, A6s:0.2937, A7s:0.3451, A8s:0.1735, A9s:0.2749, ATs:0.0757, AJs:0.0307, AKs:0.5964"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|LJ:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0170, 77:0.0201, 88:0.0208, 99:0.0026, ATo:0.0123, JJ:0.0013, AJo:0.0038, AQo:0.3038, K4s:0.0202, K5s:0.0011, K6s:0.0349, K7s:0.0002, K9s:0.0127, KTs:0.0127, KJs:0.0001, KK:0.4130, AKo:0.0175, A2s:0.1066, A3s:0.1760, A4s:0.2521, A5s:0.0372, A6s:0.0120, A7s:0.0556, A8s:0.3444, A9s:0.0062, ATs:0.0011, AKs:0.0469, AA:0.0913"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0028, AJo:0.0270, KK:0.0367, AKo:0.1070, A2s:0.1712, A3s:0.3519, A4s:0.5025, A5s:0.0515, A6s:0.0732, A7s:0.0461, A8s:0.0787, A9s:0.0004, ATs:0.0006, AJs:0.0001, AKs:0.2737, AA:0.4215"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|LJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0005, KK:0.4497, AKo:0.0718, AKs:0.3201, AA:0.5128"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "77:0.0067, 88:0.0003, AQo:0.0009, KK:0.2625, AKo:0.0026, A2s:0.0353, A3s:0.0430, A4s:0.0001, A8s:0.1557, A9s:0.0255, ATs:0.0287, AJs:0.0002, AQs:0.1205, AKs:0.0004, AA:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0239, 66:0.0003, 76s:0.0770, 77:0.0003, A8o:0.0117, 98s:0.0006, 99:0.0105, A9o:0.0671, T9s:0.0077, TT:0.0003, ATo:0.1814, J9s:0.0085, JJ:0.0019, AJo:0.1135, QTs:0.0110, QQ:0.0406, AQo:0.2822, K4s:0.0005, K6s:0.0245, K7s:0.0016, K8s:0.0292, K9s:0.0262, KTs:0.0002, KJs:0.0032, KQs:0.0088, KK:0.6886, AKo:0.8416, A2s:0.2746, A3s:0.4755, A4s:0.2957, A5s:0.7225, A6s:0.5481, A7s:0.5476, A8s:0.1165, A9s:0.2422, ATs:0.4853, AJs:0.1278, AQs:0.6692, AKs:0.9812, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BB:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0007, 66:0.0169, 77:0.0201, 88:0.0207, 99:0.0026, A9o:0.0001, ATo:0.0016, JJ:0.0013, AJo:0.0007, KQo:0.0012, AQo:0.2223, K4s:0.0204, K5s:0.0011, K6s:0.0115, K7s:0.0003, K9s:0.0084, KTs:0.0072, KJs:0.0001, KK:0.3773, AKo:0.0281, A2s:0.1155, A3s:0.0444, A4s:0.2359, A5s:0.0088, A6s:0.2594, A7s:0.1692, A8s:0.3539, A9s:0.0054, ATs:0.0014, AJs:0.0001, AKs:0.0816, AA:0.1888"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0003, ATo:0.0001, AQo:0.0001, K4s:0.0004, K6s:0.0001, K7s:0.0020, KTs:0.0005, KK:0.0724, AKo:0.0964, A2s:0.0179, A3s:0.1628, A4s:0.0989, A5s:0.0334, A6s:0.1126, A7s:0.0109, A8s:0.1309, A9s:0.0002, ATs:0.0001, AKs:0.2390, AA:0.3240"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, QQ:0.0009, KK:0.9588, AKo:0.0001, A6s:0.0001, A8s:0.0001, AKs:0.0344, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.4497, AKo:0.0896, AKs:0.3203, AA:0.5128"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|SB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "T9s:0.0001, QQ:0.0182, K5s:0.0001, KTs:0.0001, KK:0.2036, AKo:0.0201, A4s:0.0107, A7s:0.0001, A8s:0.0002, A9s:0.1107, ATs:0.0201, AQs:0.2462, AKs:0.0100, AA:0.0409"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0575, 66:0.0001, 76s:0.0001, 77:0.0001, 87s:0.0003, A8o:0.0387, A9o:0.0843, T8s:0.0524, T9s:0.0003, TT:0.0168, ATo:0.1370, J9s:0.0002, JTs:0.0001, JJ:0.0129, AJo:0.1674, Q9s:0.0003, QTs:0.0001, QQ:0.0765, AQo:0.1624, K8s:0.0005, KK:0.1066, AKo:0.4833, A2s:0.0708, A3s:0.1641, A4s:0.1824, A5s:0.4389, A6s:0.0908, A7s:0.2754, A8s:0.2094, A9s:0.2735, ATs:0.2216, AJs:0.3045, AQs:0.2019, AKs:0.9351, AA:0.9591"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|SB:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0001, 66:0.0167, 77:0.0192, 88:0.0201, 99:0.0024, ATo:0.0263, JJ:0.0013, AJo:0.0079, AQo:0.1776, K5s:0.0001, K9s:0.0021, KTs:0.0035, KK:0.4494, AKo:0.0059, A2s:0.0031, A3s:0.1096, A4s:0.2287, A5s:0.0323, A6s:0.1415, A7s:0.0529, A8s:0.3339, A9s:0.0045, ATs:0.0011, AJs:0.0001, AKs:0.0606, AA:0.0856"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0005, 66:0.0002, 77:0.0008, 88:0.0006, ATo:0.0002, AJo:0.0001, AQo:0.0002, KK:0.0002, AKo:0.1186, A2s:0.2421, A3s:0.2372, A4s:0.3293, A5s:0.0499, A6s:0.0839, A7s:0.0380, A8s:0.0056, A9s:0.0004, ATs:0.0004, AKs:0.2600, AA:0.4272"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, QTs:0.0001, QQ:0.0011, KK, AKs:0.1267, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.4497, AKo:0.0645, AKs:0.2926, AA:0.5128"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BTN:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0001, 88:0.0098, JTs:0.0001, JJ:0.0002, QQ:0.0003, K7s:0.0002, K9s:0.0001, KK:0.0590, AKo:0.0033, A2s:0.0007, A3s:0.0004, A6s:0.0036, A7s:0.0001, A8s:0.0022, A9s:0.0002, ATs:0.0394, AJs:0.0199, AQs:0.0327, AKs:0.1810, AA:0.0015"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.1031, 66:0.0078, 76s:0.0004, 98s:0.0003, A9o:0.0177, T9s:0.0001, TT:0.0239, ATo:0.0368, JJ:0.0001, AJo:0.1785, Q8s:0.0002, Q9s:0.0001, QTs:0.0002, QQ:0.4746, AQo:0.1625, K7s:0.0001, K9s:0.0031, KK:0.7065, AKo:0.6937, A2s:0.2564, A3s:0.0465, A4s:0.3457, A5s:0.5569, A6s:0.0860, A7s:0.3121, A8s:0.1330, A9s:0.2405, ATs:0.5080, AJs:0.6036, AQs:0.4649, AKs:0.8148, AA:0.9985"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BTN:4BET@13.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0168, 77:0.0197, 88:0.0205, 99:0.0025, A9o:0.0001, ATo:0.0018, JJ:0.0012, AJo:0.0358, AQo:0.2013, K9s:0.0001, KK:0.3620, AKo:0.0538, A2s:0.0806, A3s:0.0356, A4s:0.3073, A5s:0.0453, A6s:0.0047, A7s:0.1579, A8s:0.3730, A9s:0.0051, ATs:0.0010, AJs:0.0001, AKs:0.1562, AA:0.0035"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0010, A5o:0.0022, 66:0.0002, 77:0.0002, 88:0.0003, ATo:0.0130, JJ:0.0001, AJo:0.0041, AQo:0.0009, KK:0.0877, AKo:0.0703, A2s:0.1295, A3s:0.1622, A4s:0.3007, A5s:0.0318, A6s:0.0525, A7s:0.1173, A8s:0.0554, A9s:0.0009, ATs:0.0006, AKs:0.1644, AA:0.5093"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BTN:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 99:0.0001, JJ:0.0002, QQ:0.0001, KK, AKo:0.0001, A3s:0.0002, A8s:0.0001, A9s:0.0001, AQs:0.0001, AKs:0.0168, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@8|BTN:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.4497, AKo:0.0645, AKs:0.2706, AA:0.5128"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0599, A3o:0.0158, A4o:0.0116, 66:0.0001, A6o:0.0131, 77:0.0039, A7o:0.1095, 88:0.0050, A8o:0.0025, 99:0.0030, A9o:0.0005, T7s:0.0001, TT:0.0003, ATo:0.0184, JJ:0.0049, AJo:0.0014, QQ:0.0283, AQo:0.0655, K2s:0.0006, K4s:0.0423, K5s:0.0211, K6s:0.0008, K8s:0.0031, K9s:0.0174, KTs:0.0046, KJs:0.0002, KQs:0.0036, KK:0.0001, AKo:0.0390, A2s:0.1584, A3s:0.0429, A4s:0.0104, A5s:0.0509, A6s:0.0027, A7s:0.0081, A8s:0.0148, A9s:0.4465, ATs:0.0010, AJs:0.0575, AQs:0.3842, AKs:0.1890, AA:0.9996"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, T9s:0.0002, J9s:0.0002, K2s:0.0002, K6s:0.0031, K7s:0.0005, K8s:0.0234, KTs:0.0023, KJs:0.0085, KQs:0.0076, KK, AKo:0.9609, A2s:0.1026, A3s:0.0048, A4s:0.1739, A5s:0.1748, A6s:0.1014, A7s:0.1825, A8s:0.0101, A9s:0.1686, ATs:0.1854, AJs:0.0004, AKs:0.8110, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0589, K3o:0.0005, A3o:0.0091, K4o:0.0009, A4o:0.0174, A5o:0.0011, A6o:0.0226, A8o:0.0017, 99:0.0001, K9o:0.0005, A9o:0.0009, TT:0.0113, ATo:0.0026, J7s:0.0001, JJ:0.0013, KJo:0.0014, AJo:0.0015, QQ:0.0163, KQo:0.0001, AQo:0.2226, K2s:0.0051, K3s:0.0003, K4s:0.0047, K5s:0.0014, K6s:0.0077, K7s:0.0316, K8s:0.0067, K9s:0.1243, KTs:0.0323, KJs:0.0306, KQs:0.0276, KK:0.0404, AKo:0.0543, A2s:0.0582, A3s:0.0473, A4s:0.0987, A5s:0.0025, A6s:0.0936, A7s:0.0017, A8s:0.0140, A9s:0.0689, ATs:0.1020, AJs:0.2689, AQs:0.3127, AKs:0.6977, AA:0.9991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 54s:0.0002, 55:0.0010, 66:0.0004, 87s:0.0001, 93s:0.0001, 95s:0.0003, TT:0.0003, ATo:0.0001, JJ:0.0004, KJo:0.0001, K2s:0.0076, K3s:0.0015, K4s:0.0002, K5s:0.0010, K6s:0.0007, K7s:0.0014, K8s:0.0002, K9s:0.0099, KTs:0.0023, KJs:0.0487, KQs:0.0174, KK:0.9596, AKo:0.9457, A2s:0.0023, A4s:0.2219, A5s:0.1175, A6s:0.0917, A8s:0.0006, A9s:0.1276, ATs:0.1346, AJs:0.0045, AQs:0.0006, AKs:0.3022, AA:0.0009"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0017, A2o:0.0074, K3o:0.0003, A3o:0.0030, A4o:0.0057, A5o:0.0240, 66:0.0001, A6o:0.0013, 76s:0.0002, 77:0.0002, A7o:0.0167, 86s:0.0002, A8o:0.0805, 92s:0.0001, 99:0.0001, K9o:0.0002, A9o:0.0015, T4s:0.0001, T7s:0.0001, JJ:0.0010, AJo:0.0110, QQ:0.0018, AQo:0.0935, K2s:0.0522, K3s:0.0478, K4s:0.0139, K5s:0.0026, K6s:0.1745, K7s:0.0328, K8s:0.0031, K9s:0.0012, KTs:0.0466, KJs:0.0253, KQs:0.0187, KK:0.0212, AKo:0.1050, A2s:0.0046, A3s:0.1282, A4s:0.0015, A5s:0.0505, A6s:0.0540, A7s:0.2777, A8s:0.0103, A9s:0.2187, ATs:0.1212, AJs:0.0203, AQs:0.4988, AKs:0.2993, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, 64s:0.0003, 76s:0.0001, 86s:0.0004, 99:0.0003, KTo:0.0001, QQ:0.0002, K2s:0.0001, K3s:0.0001, K5s:0.0001, K6s:0.0002, K8s:0.0068, K9s:0.0006, KTs:0.0006, KJs:0.0029, KQs:0.0030, KK:0.9788, AKo:0.8950, A2s:0.0556, A3s:0.2493, A4s:0.3179, A5s:0.1614, A6s:0.1148, A7s:0.0973, A8s:0.1268, A9s:0.0772, ATs:0.1912, AJs:0.0583, AQs:0.0002, AKs:0.7006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0640, 66:0.1788, 77:0.0297, 88:0.1786, 99:0.0010, TT:0.0188, JJ:0.0295, QQ:0.6574, K9s:0.0003, KTs:0.0005, KQs:0.0116, A6s:0.0003, A7s:0.0005, A8s:0.1034, A9s:0.0129, ATs:0.4877, AJs:0.2541, AQs:0.8296"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0113, 66:0.0085, 88:0.0017, A8o:0.0166, 99:0.0001, A9o:0.0220, TT:0.0005, ATo:0.0005, JJ:0.0022, KJo:0.0014, AJo:0.0626, QQ:0.1158, KQo:0.0575, AQo:0.3536, K4s:0.0022, K5s:0.0001, K6s:0.0494, K7s:0.0728, K8s:0.0005, K9s:0.0590, KTs:0.0019, KJs:0.0217, KQs:0.2105, AKo:0.0016, A2s:0.0141, A3s:0.0109, A4s:0.0040, A5s:0.0115, A6s:0.4396, A7s:0.1873, A8s:0.0762, A9s:0.1343, ATs:0.0161, AJs:0.2794, AQs:0.1475, AKs:0.2552, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0624, 66:0.0191, 77:0.1094, 88:0.1991, 99:0.3386, TT:0.4457, JJ:0.5540, KJo:0.0001, QQ:0.0427, KQo:0.0001, K4s:0.0006, K5s:0.0051, K6s:0.0063, K7s:0.0172, K8s:0.0055, K9s:0.0807, KTs:0.1323, KJs:0.1962, KQs:0.0946, KK, AKo:0.9984, A2s:0.1532, A3s:0.1924, A4s:0.2186, A5s:0.9123, A6s:0.1458, A7s:0.2919, A8s:0.4170, A9s:0.4214, ATs:0.3136, AJs:0.3180, AQs:0.0001, AKs:0.7448"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|LJ:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0006, ATo:0.0011, AJo:0.0005, AQo:0.0554, KK:0.2005, AKo:0.0313, A2s:0.0169, A3s:0.0571, A4s:0.0261, A5s:0.0009, A6s:0.1580, A7s:0.0343, A8s:0.0234, A9s:0.0020, AKs:0.0093, AA:0.0771"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0003, AJo:0.0002, AQo:0.0137, KK:0.0070, AKo:0.0792, A2s:0.2653, A3s:0.2631, A4s:0.1059, A5s:0.0048, A6s:0.1301, A7s:0.0633, A8s:0.0092, A9s:0.0002, AKs:0.0617, AA:0.3776"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|LJ:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2075, AKo:0.0715, AKs:0.0710, AA:0.4547"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "88:0.0002, A9o:0.0002, T8s:0.0005, TT:0.0004, QQ:0.0364, AQo:0.0001, KK:0.0018, AKo:0.0055, AJs:0.0001, AQs:0.0002, AKs:0.0019, AA:0.0572"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, 76s:0.0001, 88:0.0004, 99:0.0005, A9o:0.0001, TT:0.0102, JTs:0.0010, JJ:0.0115, QQ:0.0432, AQo:0.0016, K7s:0.0067, K8s:0.0012, KJs:0.0041, KK:0.0741, AKo:0.8669, A2s:0.0638, A3s:0.0001, A4s:0.0502, A5s:0.0167, A6s:0.5844, A7s:0.0118, A8s:0.2300, A9s:0.1445, ATs:0.0046, AJs:0.5537, AQs:0.0024, AKs:0.9944, AA:0.9428"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A3o:0.0001, A4o:0.0003, A5o:0.0001, A7o:0.0001, A8o:0.0001, A9o:0.0054, ATo:0.0339, AJo:0.0027, AQo:0.0520, K5s:0.0001, KK:0.1868, AKo:0.0166, A2s:0.0924, A3s:0.0742, A4s:0.0619, A5s:0.0019, A6s:0.1258, A7s:0.0594, A8s:0.0241, A9s:0.0021, AA:0.0627"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0030, A4o:0.0014, A5o:0.0004, A7o:0.0003, A8o:0.0008, A9o:0.0002, ATo:0.0025, AQo:0.0001, KK:0.0185, AKo:0.0939, A2s:0.1023, A3s:0.1125, A4s:0.0248, A5s:0.0024, A6s:0.1240, A7s:0.0386, A8s:0.0056, A9s:0.0006, AKs:0.0710, AA:0.3920"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JTs:0.0001, JJ:0.0001, QQ:0.0018, KK, A3s:0.0006, A8s:0.0001, A9s:0.0002, AQs:0.0025, AKs:0.0013, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2075, AKo:0.0870, AKs:0.0661, AA:0.4547"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|SB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0001, 99:0.0004, JJ:0.0007, KK:0.0874, AKo:0.0352, A8s:0.0007, A9s:0.0140, ATs:0.0002, AJs:0.0004, AQs:0.0433, AKs:0.0042, AA:0.0260"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0116, A5o:0.0007, 66:0.0001, 76s:0.0001, 77:0.0054, 87s:0.0010, 99:0.0015, T9s:0.0010, TT:0.0117, ATo:0.0050, J9s:0.0036, JTs:0.0204, JJ:0.0006, AJo:0.0036, QTs:0.0016, QQ:0.0372, K7s:0.0072, KQs:0.0010, KK:0.0830, AKo:0.7673, A2s:0.0111, A3s:0.0147, A4s:0.0258, A5s:0.0047, A6s:0.0045, A7s:0.0162, A8s:0.0036, A9s:0.0224, ATs:0.0201, AQs:0.0236, AKs:0.9245, AA:0.9740"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|SB:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0001, A5o:0.0002, A6o:0.0002, A7o:0.0004, A8o:0.0016, A9o:0.0003, ATo:0.0067, AJo:0.0001, AQo:0.0406, K7s:0.0003, K8s:0.0014, KK:0.1826, AKo:0.0026, A2s:0.0935, A3s:0.0256, A4s:0.0232, A5s:0.0008, A6s:0.0591, A7s:0.0502, A8s:0.0135, A9s:0.0007, AKs:0.0095, AA:0.0210"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0086, A4o:0.0122, A5o:0.0092, A7o:0.0025, A8o:0.0024, ATo:0.0099, AQo:0.0001, KK:0.0244, AKo:0.1079, A2s:0.1860, A3s:0.2268, A4s:0.0799, A5s:0.0041, A6s:0.2263, A7s:0.0413, A8s:0.0169, A9s:0.0016, AKs:0.0615, AA:0.4337"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0008, JJ:0.0002, QJs:0.0001, QQ:0.0093, KQs:0.0001, KK, AKo:0.0008, A8s:0.0001, AJs:0.0038, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|SB:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2075, AKo:0.0877, AKs:0.0709, AA:0.4547"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BTN:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0001, 77:0.0001, 88:0.0008, TT:0.0003, ATo:0.0002, JTs:0.0002, JJ:0.0001, AJo:0.0001, Q9s:0.0001, QJs:0.0001, AQo:0.0001, K6s:0.0014, K9s:0.0001, KJs:0.0002, KQs:0.0002, KK:0.2152, AKo:0.0002, A3s:0.0001, A5s:0.0020, A6s:0.0016, A8s:0.0001, A9s:0.0105, ATs:0.0466, AQs:0.0096, AKs:0.0843, AA:0.0007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0006, A5o:0.0349, 66:0.0341, 76s:0.0072, 77:0.0018, 87s:0.0003, 88:0.0215, A8o:0.0061, 99:0.0001, T8s:0.0058, ATo:0.0007, JTs:0.0006, JJ:0.0001, Q8s:0.0001, QTs:0.0014, QJs:0.0182, QQ:0.0517, K5s:0.0006, K6s:0.0001, K8s:0.0212, K9s:0.0230, KTs:0.0019, KQs:0.0156, KK:0.1286, AKo:0.8926, A2s:0.0135, A3s:0.1651, A4s:0.3136, A5s:0.0211, A6s:0.0210, A7s:0.3023, A8s:0.5527, A9s:0.1247, ATs:0.1865, AJs:0.1450, AQs:0.1484, AKs:0.8507, AA:0.9992"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BTN:4BET@17.7",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "ATo:0.0114, AJo:0.0007, AQo:0.0229, KK:0.1554, AKo:0.0091, A2s:0.0034, A3s:0.0238, A4s:0.0108, A5s:0.0008, A6s:0.0029, A7s:0.0113, A8s:0.0061, A9s:0.0007, AKs:0.0035, AA:0.0037"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0119, A4o:0.0393, A5o:0.0060, A6o:0.0002, A7o:0.0017, A8o:0.0010, A9o:0.0001, ATo:0.0069, AJo:0.0006, AQo:0.0048, KK:0.0439, AKo:0.1013, A2s:0.1730, A3s:0.2240, A4s:0.1242, A5s:0.0044, A6s:0.2504, A7s:0.1255, A8s:0.0289, A9s:0.0023, AKs:0.0675, AA:0.4510"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BTN:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, TT:0.0002, JJ:0.0001, QQ:0.0009, KK, A8s:0.0002, AJs:0.0002, AQs:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@10|BTN:4BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2075, AKo:0.0821, AKs:0.0689, AA:0.4547"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0008, 32o:0.0017, 62o:0.0002, 92o:0.0009, J2o:0.0006, K2o:0.0032, A2o:0.0017, 33:0.0051, 63o:0.0003, 73o:0.0004, 83o:0.0015, 93o:0.0003, T3o:0.0039, J3o:0.0005, Q3o:0.0050, K3o:0.0008, 42s:0.0021, 44:0.3783, 74o:0.0037, T4o:0.0006, Q4o:0.0028, 52s:0.0020, 54s:0.0024, 55:0.1232, 85o:0.0005, 95o:0.0006, T5o:0.0006, K5o:0.0032, A5o:0.0006, 63s:0.0114, 64s:0.0009, 65s:0.0009, 96o:0.0016, Q6o:0.0004, K6o:0.0028, A6o:0.0019, 73s:0.0013, 75s:0.0075, 77:0.0411, 87o:0.0002, 97o:0.0005, T7o:0.0002, J7o:0.0010, A7o:0.0008, 84s:0.0044, 86s:0.0114, 87s:0.0837, 88:0.0020, 98o:0.0007, T8o:0.0008, J8o:0.0042, Q8o:0.0018, K8o:0.0014, A8o:0.0141, 94s:0.0018, 96s:0.0022, 97s:0.0016, 98s:0.0464, 99:0.3663, T9o:0.0018, Q9o:0.0023, K9o:0.0005, A9o:0.0054, T2s:0.0003, T3s:0.0062, T4s:0.0143, T6s:0.0032, T7s:0.0583, T8s:0.0188, T9s:0.0056, TT:0.1990, JTo:0.0005, QTo:0.0018, KTo:0.0008, ATo:0.0004, J4s:0.0075, J5s:0.0302, J7s:0.1087, J9s:0.0329, JTs:0.0016, JJ:0.5606, QJo:0.0013, KJo:0.0009, AJo:0.0016, Q2s:0.0107, Q3s:0.0204, Q4s:0.3642, Q6s:0.0042, Q7s:0.0219, Q8s:0.0291, Q9s:0.1093, QTs:0.0062, QJs:0.0082, QQ:0.8353, KQo:0.0010, AQo:0.0139, K3s:0.0044, K4s:0.0177, K5s:0.0040, K7s:0.1789, K8s:0.0617, K9s:0.5331, KJs:0.0091, KQs:0.0798, KK, AKo:0.0029, A2s:0.0084, A3s:0.6397, A5s:0.0018, A6s:0.6595, A7s:0.0029, A9s:0.0904, ATs:0.7100, AJs:0.1031, AQs:0.5134, AKs:0.0608, AA:0.9673"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0009, 32o:0.0007, 42o:0.0006, 52o:0.0040, 62o:0.0016, J2o:0.0008, Q2o:0.0008, A2o:0.0024, 33:0.0011, 53o:0.0005, 73o:0.0013, T3o:0.0009, Q3o:0.0004, K3o:0.0002, A3o:0.0009, 43s:0.0172, 44:0.0053, 54o:0.0017, 64o:0.0035, 84o:0.0004, 94o:0.0005, T4o:0.0008, J4o:0.0013, K4o:0.0005, 52s:0.0113, 54s:0.0120, 55:0.0033, 85o:0.0004, 95o:0.0050, K5o:0.0043, A5o:0.0008, 62s:0.0027, 64s:0.1675, 65s:0.0095, 66:0.0208, 76o:0.0006, 86o:0.0038, J6o:0.0025, K6o:0.0024, 72s:0.0008, 74s:0.0525, 76s:0.1970, 77:0.0031, 87o:0.0014, A7o:0.0091, 82s:0.0074, 84s:0.0063, 85s:0.0001, 88:0.0371, 98o:0.0009, T8o:0.0034, J8o:0.0018, Q8o:0.0004, K8o:0.0012, A8o:0.0004, 94s:0.0224, 96s:0.0022, 97s:0.0202, 98s:0.0149, 99:0.0018, T9o:0.0009, J9o:0.0030, Q9o:0.0010, K9o:0.0031, A9o:0.0020, T2s:0.0043, T4s:0.0047, T5s:0.0057, TT:0.6979, JTo:0.0008, QTo:0.0644, ATo:0.0071, J2s:0.0028, J3s:0.0133, J4s:0.0025, J8s:0.0005, J9s:0.0913, JTs:0.0117, JJ:0.6315, QJo:0.0027, KJo:0.0024, AJo:0.0059, Q2s:0.0072, Q3s:0.0020, Q4s:0.0029, Q5s:0.0666, Q6s:0.0086, Q9s:0.1036, QTs:0.0086, QJs:0.0001, QQ:0.6540, KQo:0.0307, AQo:0.0171, K2s:0.0402, K3s:0.0340, K5s:0.2492, K7s:0.4220, K9s:0.1137, KTs:0.3701, KJs:0.4921, KQs:0.0014, KK:0.8823, A2s:0.0801, A3s:0.0027, A4s:0.2902, A5s:0.0030, A6s:0.0003, A7s:0.1352, A8s:0.4849, A9s:0.0140, ATs:0.1871, AJs:0.0232, AQs:0.0420, AKs:0.0315, AA:0.9890"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0025, 32o:0.0057, 52o:0.0003, 72o:0.0007, 82o:0.0004, 92o:0.0012, J2o:0.0007, Q2o:0.0020, A2o:0.0009, 33:0.0021, 43o:0.0011, 63o:0.0004, 73o:0.0020, 93o:0.0008, J3o:0.0031, Q3o:0.0001, A3o:0.0023, 42s:0.0029, 43s:0.0108, 44:0.0007, 64o:0.0005, 74o:0.0057, 84o:0.0017, A4o:0.0017, 52s:0.0014, 65o:0.0011, 85o:0.0002, 95o:0.0010, T5o:0.0002, J5o:0.0190, Q5o:0.0008, K5o:0.0004, 64s:0.0001, 65s:0.0091, 66:0.0065, 76o:0.0023, 86o:0.0002, 96o:0.0003, J6o:0.0007, Q6o:0.0004, K6o:0.0009, A6o:0.0015, 72s:0.0062, 73s:0.0011, 74s:0.0049, 75s:0.0083, 76s:0.0012, 77:0.4203, Q7o:0.0021, K7o:0.0040, A7o:0.0009, 84s:0.0052, 85s:0.0017, 86s:0.0191, 88:0.2107, J8o:0.0079, Q8o:0.0012, K8o:0.0032, 95s:0.0208, 96s:0.0106, 98s:0.3285, 99:0.4281, T9o:0.0006, J9o:0.0009, K9o:0.0006, T2s:0.0016, T4s:0.0100, T6s:0.2059, T7s:0.0028, T8s:0.0251, TT:0.5765, JTo:0.0004, QTo:0.0008, ATo:0.0002, J2s:0.0288, J3s:0.0605, J4s:0.0031, J8s:0.0050, J9s:0.0049, JTs:0.0090, JJ:0.9928, QJo:0.0004, KJo:0.0100, AJo:0.0010, Q2s:0.0781, Q3s:0.0051, Q5s:0.1200, Q6s:0.2609, Q8s:0.0032, Q9s:0.0008, QTs:0.0366, QJs:0.0008, QQ:0.9543, KQo:0.0006, AQo:0.0637, K4s:0.0385, K5s:0.2048, K8s:0.4179, K9s:0.0121, KTs:0.0109, KJs:0.0675, KQs:0.1152, KK, AKo:0.0120, A2s:0.0060, A4s:0.0063, A5s:0.0019, A6s:0.0890, A7s:0.4785, A8s:0.0227, A9s:0.0130, AJs:0.4968, AQs:0.3472, AKs:0.7821, AA:0.9721"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, A5o:0.0001, 66:0.0060, 77:0.0004, 88:0.0010, A8o:0.0001, 98s:0.0001, 99:0.0001, A9o:0.0005, T8s:0.0010, T9s:0.0004, TT:0.0003, KTo:0.0002, ATo:0.0016, J9s:0.0002, JJ:0.3180, QJo:0.0001, KJo:0.0012, AJo:0.0002, Q9s:0.0001, QTs:0.0006, QJs:0.0004, QQ:0.9566, KQo:0.0013, AQo:0.0008, K5s:0.0083, K6s:0.0040, K7s:0.0003, K8s:0.0001, K9s:0.0003, KTs:0.0004, KJs:0.0012, KQs:0.0018, KK:0.9983, AKo:0.0055, A2s:0.0021, A3s:0.0038, A4s:0.0020, A5s:0.0052, A6s:0.0002, A7s:0.0004, A8s:0.0015, ATs:0.0011, AJs:0.0013, AQs:0.4053, AKs:0.4980, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32|BB:CALL@52.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.2807, 65s:0.0022, 76s:0.1279, 77:0.1577, 88:0.0164, A8o:0.0384, T9s:0.1248, ATo:0.0252, J9s:0.0663, JTs:0.4716, JJ:0.3607, QJo:0.0308, AJo:0.3141, Q8s:0.0091, Q9s:0.0788, QTs:0.1913, QQ:0.1715, KQo:0.1202, K4s:0.0089, K5s:0.4736, K6s:0.0560, K8s:0.0953, K9s:0.0001, KTs:0.0484, KK:0.8120, AKo:0.0524, A2s:0.8066, A3s:0.0587, A5s:0.0803, A8s:0.2182, ATs:0.1895, AJs:0.0782, AQs:0.0213, AKs:0.7576, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32|SB:CALL@52.82",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0160, 65s:0.0019, 66:0.0882, 87s:0.2363, 88:0.0302, A8o:0.0063, A9o:0.0083, T8s:0.5594, TT:0.2429, KTo:0.0593, ATo:0.0053, JTs:0.1442, QJo:0.0055, KJo:0.0239, AJo:0.0185, Q8s:0.0053, Q9s:0.0745, QJs:0.1013, QQ:0.5840, KQo:0.2960, AQo:0.0212, K4s:0.0209, K6s:0.1440, K7s:0.2526, K8s:0.0743, K9s:0.3138, KTs:0.0126, KJs:0.8343, KQs:0.0371, KK:0.3771, AKo:0.1358, A2s:0.1254, A3s:0.0698, A4s:0.0042, A5s:0.0249, A6s:0.1733, A7s:0.4975, A9s:0.2930, AJs:0.4288, AQs:0.2236, AKs:0.8144, AA:0.5636"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@53.32|BTN:CALL@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0195, A5o:0.0477, 66:0.0650, 77:0.1366, 87s:0.0913, 88:0.0299, 98s:0.0153, 99:0.0916, A9o:0.0771, T8s:0.3194, T9s:0.0041, TT:0.1838, KTo:0.0057, ATo:0.0488, JTs:0.2999, JJ:0.0467, QJo:0.0104, AJo:0.0667, Q9s:0.0412, QJs:0.0482, QQ:0.1641, KQo:0.0594, AQo:0.0474, K6s:0.0476, K8s:0.0524, K9s:0.0802, KTs:0.0464, KQs:0.1519, KK:0.8261, AKo:0.0322, A2s:0.0371, A3s:0.1199, A4s:0.3687, A5s:0.0158, A7s:0.3979, A9s:0.1753, AJs:0.3894, AQs:0.1614, AKs:0.2150, AA:0.3375"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0001, 33:0.0012, A3o:0.0001, 44:0.0002, A5o:0.0002, 66:0.0012, 77:0.0135, 88:0.0054, 96s:0.0003, 99:0.0020, K9o:0.0001, QTo:0.0002, JJ:0.1406, QJs:0.0002, QQ:0.0457, KQo:0.0049, AQo:0.0192, K2s:0.0004, K3s:0.0018, K4s:0.0001, K5s:0.0125, K6s:0.0204, K7s:0.0336, K8s:0.0028, K9s:0.0008, KTs:0.0242, KJs:0.0228, KQs:0.0305, KK:0.0612, AKo:0.0275, A2s:0.0013, A3s:0.0304, A4s:0.0054, A5s:0.0285, A6s:0.0096, A7s:0.0064, A8s:0.0059, A9s:0.0149, ATs:0.0043, AJs:0.0232, AQs:0.4392, AKs:0.0178, AA:0.0408"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0004, 33:0.0002, A3o:0.0011, 44:0.0002, A4o:0.0002, 54s:0.0001, 55:0.0001, A5o:0.0024, 66:0.0009, A7o:0.0018, 88:0.0002, 99:0.0097, TT:0.0101, JJ:0.0812, Q2s:0.0001, Q3s:0.0001, Q4s:0.0002, Q6s:0.0001, Q7s:0.0021, QJs:0.0002, QQ:0.0125, KQo:0.0041, AQo:0.2679, K2s:0.0039, K3s:0.0519, K4s:0.0296, K5s:0.0644, K6s:0.0626, K7s:0.0060, K8s:0.0007, K9s:0.0001, KTs:0.0020, KJs:0.0929, KQs:0.0117, KK:0.0794, AKo:0.0149, A2s:0.3461, A3s:0.0776, A4s:0.0568, A5s:0.0576, A6s:0.0802, A7s:0.0062, A8s:0.0017, A9s:0.0428, ATs:0.0614, AJs:0.0038, AQs:0.1018, AKs:0.0279, AA:0.2487"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0203, A2o:0.0075, K3o:0.0070, A3o:0.0115, 43s:0.0001, 44:0.0056, K4o:0.1733, A4o:0.2360, 55:0.0009, K5o:0.0130, A5o:0.0908, K6o:0.0454, 77:0.0101, K7o:0.0331, 88:0.0016, 99:0.0001, K9o:0.0031, JJ:0.0979, QQ:0.2912, KQo:0.0722, AQo:0.6680, K2s:0.4509, K3s:0.1775, K4s:0.0508, K5s:0.3848, K6s:0.7091, K7s:0.1438, K8s:0.4744, K9s:0.0001, KTs:0.0062, KQs:0.1668, KK:0.8500, AKo:0.9523, A2s:0.1264, A3s:0.8176, A4s:0.8008, A5s:0.5670, A6s:0.0579, A7s:0.0639, A8s:0.0197, ATs:0.1503, AQs:0.0579, AKs:0.9497, AA:0.7104"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0013, 66:0.0006, 77:0.0003, QJs:0.0001, QQ:0.6506, KQo:0.4770, K2s:0.0006, K4s:0.0024, K7s:0.0004, K8s:0.0012, KTs:0.0010, KJs:0.0001, KQs:0.7750, KK:0.0094, AKo:0.0053, A2s:0.0022, A3s:0.0004, A4s:0.0037, A5s:0.0016, A6s:0.0003, A7s:0.0002, A9s:0.0002, AQs:0.3955, AKs:0.0046"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "3bet 8bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "22:0.0001, 54s:0.0001, 65s:0.0338, 66:0.0005, 74s:0.0003, 76s:0.0001, 77:0.0116, K7o:0.0005, 88:0.0693, 99:0.0032, TT:0.0075, JJ:0.1469, Q4s:0.0006, Q7s:0.0008, Q8s:0.0001, QQ:0.0522, KQo:0.0033, AQo:0.0976, K2s:0.0004, K4s:0.0010, K5s:0.0124, K6s:0.0088, K7s:0.0183, K8s:0.0094, K9s:0.0036, KTs:0.1418, KJs:0.0417, KQs:0.0477, KK:0.0016, AKo:0.0087, A2s:0.0010, A3s:0.0085, A4s:0.0001, A5s:0.1361, A7s:0.0138, A8s:0.0358, A9s:0.0041, ATs:0.0002, AJs:0.0021, AQs:0.1776, AKs:0.0680, AA:0.1418"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0006, 33:0.0006, A3o:0.0010, 44:0.0024, K4o:0.0003, 55:0.0032, A5o:0.0027, 65s:0.0136, 75s:0.0004, 76s:0.0010, 77:0.0511, 88:0.0086, A8o:0.0002, 96s:0.0001, A9o:0.0001, TT:0.0179, JJ:0.1447, Q3s:0.0004, Q6s:0.0001, Q8s:0.0001, Q9s:0.0001, QTs:0.0001, QQ:0.0423, KQo:0.0458, AQo:0.6193, K2s:0.0073, K3s:0.0048, K4s:0.0498, K5s:0.1276, K6s:0.0917, K7s:0.0664, K8s:0.0392, K9s:0.0020, KTs:0.1996, KJs:0.2683, KQs:0.0049, KK:0.1317, AKo:0.0488, A2s:0.0992, A3s:0.0404, A4s:0.0543, A5s:0.4567, A6s:0.0659, A7s:0.2540, A8s:0.0469, A9s:0.0215, ATs:0.0093, AJs:0.0005, AQs:0.1003, AKs:0.2359, AA:0.4608"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0041, A2o:0.0153, 33:0.0001, K3o:0.0028, A3o:0.1948, 44:0.0270, K4o:0.0269, A4o:0.0310, 55:0.0004, A5o:0.0191, 66:0.0012, K6o:0.0036, A6o:0.0071, 77:0.0002, K7o:0.0188, 88:0.0046, K8o:0.0017, K9o:0.0001, TT:0.0018, KTo:0.0004, JJ:0.1623, Q3s:0.0001, Q4s:0.0001, QQ:0.0111, KQo:0.2236, AQo:0.1130, K2s:0.7229, K3s:0.3234, K4s:0.2851, K5s:0.4205, K6s:0.0460, K7s:0.4116, K8s:0.0177, K9s:0.1835, KTs:0.1807, KJs:0.0133, KQs:0.0047, KK:0.8665, AKo:0.9408, A2s:0.1823, A3s:0.1158, A4s:0.1431, A5s:0.0858, A6s:0.0192, A7s:0.2955, A8s:0.0178, A9s:0.0038, ATs:0.0753, AJs:0.0182, AQs:0.0387, AKs:0.6941, AA:0.3974"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, 99:0.0004, TT:0.0007, QQ:0.8944, KQo:0.2870, AQo:0.0544, KQs:0.9395, KK:0.0001, AKo:0.0017, AQs:0.6816, AKs:0.0020"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0077, A2o:0.0265, 33:0.0005, K3o:0.0002, A3o:0.1499, K4o:0.0098, A4o:0.0643, K5o:0.0280, A5o:0.1911, 63s:0.0002, 66:0.0112, K6o:0.0045, A6o:0.0020, K7o:0.0018, K8o:0.0142, A8o:0.0003, 99:0.0731, T2s:0.0001, JJ:0.0286, KJo:0.0001, QQ:0.0820, KQo:0.2076, AQo:0.8687, K2s:0.0182, K3s:0.2265, K4s:0.1556, K5s:0.0198, K6s:0.3227, K7s:0.2196, K8s:0.1451, K9s:0.0553, KTs:0.0824, KJs:0.0041, KQs:0.0167, KK:0.7880, AKo:0.1548, A2s:0.5337, A3s:0.2246, A4s:0.2144, A5s:0.6689, A6s:0.2056, A7s:0.2960, A8s:0.0296, A9s:0.3877, ATs:0.3101, AJs:0.0019, AQs:0.3099, AKs:0.2090, AA:0.8653"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0199, A2o:0.0020, K3o:0.0154, A3o:0.0071, K4o:0.0001, A4o:0.0316, K5o:0.0171, A5o:0.0002, K6o:0.0125, K7o:0.0282, K9o:0.0009, JJ:0.0014, KJo:0.0317, AJo:0.0004, Q3s:0.0001, QQ:0.0019, KQo:0.0214, AQo:0.0480, K2s:0.0006, K3s:0.1119, K4s:0.1685, K5s:0.0130, K6s:0.1067, K7s:0.0301, K8s:0.0131, K9s:0.0010, KTs:0.0004, KJs:0.0549, KK:0.1802, AKo:0.0603, A2s:0.0001, A3s:0.0312, A4s:0.0922, A5s:0.0007, A6s:0.0003, A7s:0.0434, A8s:0.0526, A9s:0.0001, ATs:0.0008, AJs:0.0247, AKs:0.0490, AA:0.1347"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 66:0.0056, 77:0.0480, 88:0.0054, TT:0.0064, Q8s:0.0005, QTs:0.0003, QQ:0.9161, KQo:0.3657, AQo:0.0603, K2s:0.1326, K3s:0.1457, K4s:0.1064, K5s:0.1794, K6s:0.0128, K7s:0.1474, K8s:0.1876, K9s:0.0254, KTs:0.1250, KJs:0.0393, KQs:0.9806, KK:0.0318, AKo:0.7848, A2s:0.0438, A3s:0.1965, A4s:0.2296, A5s:0.1761, A6s:0.0474, A7s:0.0100, A8s:0.0092, ATs:0.0018, AJs:0.0004, AQs:0.6893, AKs:0.7420"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 10bb",
      "3bet 14bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 33:0.9992, 42s:0.0007, 43s:0.9077, 44:0.9983, 53s:0.9810, 54s:0.9806, 55, 65o:0.5600, 63s:0.7655, 64s:0.9604, 65s:0.9832, 66:0.9998, 75s:0.8711, 76s:0.9791, 77:0.9997, 85s:0.5664, 86s:0.9054, 87s:0.7853, 88:0.9988, 93s:0.0001, 95s:0.0002, 96s:0.0180, 97s:0.8104, 98s:0.9040, 99, T2s:0.0022, T7s:0.0948, T8s:0.7863, T9s:0.9809, TT:0.9984, J5s:0.0008, J8s:0.0396, J9s:0.6831, JTs:0.8910, JJ:0.9998, Q9s:0.5666, QTs:0.9973, QJs:0.9513, QQ:0.9938, KQo:0.8298, AQo:0.8709, K4s:0.2878, K6s:0.1573, K7s:0.1327, K8s:0.4924, K9s:0.3718, KTs:0.9478, KJs:0.9966, KQs:0.9936, AKo:0.0010, A2s:0.0906, A3s:0.5445, A4s:0.5939, A5s:0.7330, A6s:0.3618, A7s:0.5170, A8s:0.8265, A9s:0.8438, ATs:0.9745, AJs:0.9963, AQs:0.9804"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0074, A2o:0.2026, 32s:0.0001, K3o:0.0479, A3o:0.0476, K4o:0.0008, A4o:0.4401, K5o:0.0500, A5o:0.1866, K6o:0.0003, A6o:0.0106, 75s:0.0001, K7o:0.0255, A7o:0.0721, A8o:0.0004, KTo:0.0006, ATo:0.2140, JJ:0.0001, KJo:0.0001, Q8s:0.0001, Q9s:0.0001, QQ:0.0013, KQo:0.0126, AQo:0.1226, K2s:0.0463, K3s:0.4259, K4s:0.3185, K5s:0.5034, K6s:0.3816, K7s:0.2824, K8s:0.1007, K9s:0.0035, KTs:0.0390, KJs:0.0003, KK:0.9834, AKo:0.0039, A2s:0.7951, A3s:0.3833, A4s:0.4016, A5s:0.2555, A6s:0.5399, A7s:0.3596, A8s:0.0188, A9s:0.0746, ATs:0.0100, AQs:0.0151, AKs:0.3799, AA:0.9273"
      },
      {
        "action": "3bet 14bb",
        "min": 0.0001,
        "range": "K2o:0.0009, A2o:0.0087, K3o:0.0002, K4o:0.0017, A4o:0.0140, K5o:0.0004, A5o:0.0362, K6o:0.0004, 75s:0.0001, K7o:0.0006, A7o:0.0080, 87s:0.0001, A8o:0.0004, K9o:0.0007, TT:0.0001, AJo:0.0047, Q7s:0.0001, QQ:0.0002, KQo:0.0003, K2s:0.0005, K3s:0.0003, K4s:0.0026, K5s:0.0001, K6s:0.0064, K7s:0.0056, K8s:0.0044, K9s:0.0048, KTs:0.0017, KK:0.0159, AKo:0.0002, A2s:0.0374, A3s:0.0106, A4s:0.0008, A5s:0.0043, A6s:0.0045, A7s:0.0138, A9s:0.0001, ATs:0.0002, AJs:0.0003, AQs:0.0001, AKs:0.0405, AA:0.0727"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QJs:0.0001, QQ:0.0047, KQo:0.0028, AQo:0.0013, K2s:0.0004, K4s:0.0005, K5s:0.0001, K6s:0.0012, K7s:0.0029, K8s:0.0008, K9s:0.0005, KQs:0.0058, KK:0.0007, AKo:0.9949, A2s:0.0015, A3s:0.0003, A4s:0.0003, ATs:0.0018, AQs:0.0038, AKs:0.5796"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0033, 66:0.0781, 77:0.0052, 88:0.0438, 99:0.0013, J9s:0.0007, QQ:0.0141, K9s:0.0083, KTs:0.0010, KJs:0.0325, KK:0.1213, AKo:0.0269, A3s:0.0014, A4s:0.0084, A5s:0.0364, A6s:0.0001, A7s:0.0031, A8s:0.0169, A9s:0.0019, ATs:0.0310, AJs:0.0526, AQs:0.5354, AKs:0.0025, AA:0.0051"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0177, 76s:0.0001, 77:0.0001, A8o:0.0552, 99:0.0018, A9o:0.0258, TT:0.0213, ATo:0.0383, JJ:0.0004, AJo:0.0386, QTs:0.0004, QQ:0.0028, AQo:0.3048, K4s:0.0001, K6s:0.0211, K7s:0.0004, KJs:0.0043, KQs:0.0096, KK:0.0026, AKo:0.1092, A2s:0.0318, A3s:0.0255, A4s:0.0040, A5s:0.0341, A6s:0.1385, A7s:0.0808, A8s:0.2016, A9s:0.2188, ATs:0.0577, AJs:0.0018, AQs:0.2290, AKs:0.0113, AA:0.9947"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0008, 76s:0.0001, 77:0.0002, 88:0.0001, 99:0.0014, T8s:0.0001, TT:0.0001, QQ:0.0001, K8s:0.0001, KJs:0.0001, KK:0.8761, AKo:0.8637, A3s:0.0368, A4s:0.0009, A5s:0.0099, A6s:0.0011, A7s:0.0025, ATs:0.0014, AJs:0.0056, AKs:0.9860, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0793, 77:0.1213, 88:0.1585, 99:0.0581, TT:0.0234, JJ:0.0611, QQ:0.2182, AQo:0.0018, KTs:0.0435, KJs:0.0543, KQs:0.2994, KK:0.0329, AKo:0.0002, A5s:0.0114, A7s:0.0016, A9s:0.0111, ATs:0.3192, AJs:0.0417, AQs:0.6631"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "AJo:0.0001, QQ:0.0001, KQo:0.0042, AQo:0.0001, KJs:0.0318, KQs:0.0106, KK:0.0455, A4s:0.0001, A9s:0.0002, AJs:0.0001, AQs:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0001, 88:0.0001, 99:0.0022, JTs:0.0001, JJ:0.0010, QQ:0.0016, KTs:0.3750, KJs:0.4119, KQs:0.1752, KK:0.3941, AKo:0.6904, A2s:0.0001, A3s:0.0019, A4s:0.0353, A5s:0.7439, A6s:0.0159, A7s:0.0494, A8s:0.0434, A9s:0.5054, ATs:0.4851, AJs:0.8070, AQs:0.0849, AKs:0.5619"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "99:0.0001, TT:0.0015, ATo:0.0582, JJ:0.0125, AJo:0.0359, QTs:0.0004, QJs:0.0001, AQo:0.0295, K6s:0.0024, K9s:0.0002, KTs:0.0009, KJs:0.0097, KQs:0.0002, KK:0.2303, AKo:0.0006, A2s:0.0127, A3s:0.1268, A6s:0.0198, A7s:0.0147, A9s:0.1643, AJs:0.0335, AQs:0.3126, AKs:0.0175, AA:0.3261"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0181, A5o:0.0423, 65s:0.0002, 66:0.0295, 76s:0.0528, 77:0.0075, 88:0.0279, 98s:0.0068, 99:0.0851, A9o:0.0029, T9s:0.0782, TT:0.0346, ATo:0.0115, JTs:0.0004, JJ:0.0143, QQ:0.1225, K4s:0.0004, K5s:0.0160, K6s:0.0219, K7s:0.0262, K9s:0.0123, KJs:0.0099, KQs:0.0100, KK:0.6335, AKo:0.9975, A2s:0.2530, A3s:0.0464, A4s:0.0001, A5s:0.0918, A6s:0.1048, A7s:0.6607, A8s:0.4448, A9s:0.1744, ATs:0.1362, AJs:0.7487, AQs:0.5875, AKs:0.9821, AA:0.6739"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "99:0.0001, JJ:0.0027, QQ:0.0009, AQo:0.0001, KTs:0.0896, KJs:0.0010, KK:0.1794, A3s:0.0001, A4s:0.0189, A5s:0.0004, AJs:0.1499, AQs:0.0574"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0012, 66:0.0161, 77:0.0030, 88:0.0266, 99:0.0101, TT:0.0260, JJ:0.1112, AJo:0.0002, QJs:0.0002, QQ:0.1589, KQo:0.0020, AQo:0.0001, KTs:0.0053, KJs:0.0446, KQs:0.0001, KK:0.2930, AKo:0.6899, A3s:0.0010, A4s:0.1162, A5s:0.4540, A6s:0.0085, A7s:0.0010, A8s:0.0188, A9s:0.0712, ATs:0.1994, AJs:0.4357, AQs:0.1273, AKs:0.5618"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0180, KJs:0.0001, KK, AKo:0.9867, AQs:0.0017, AKs:0.9755, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0035, KK:0.4725, AKo:0.6595, AKs:0.5434"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0035, 77:0.0201, 88:0.0145, QQ:0.1261, KTs:0.0091, KK:0.0530, AKo:0.0094, A4s:0.0011, A5s:0.0029, A7s:0.0042, A8s:0.0244, AJs:0.0038, AQs:0.2742, AKs:0.0012, AA:0.0004"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.1732, 66:0.0042, 88:0.0041, A8o:0.0034, A9o:0.0368, TT:0.0005, ATo:0.1110, JJ:0.0202, AJo:0.0036, QQ:0.0001, AQo:0.0479, K4s:0.0001, K5s:0.0015, K8s:0.0001, K9s:0.0091, KK:0.0001, AKo:0.0310, A2s:0.0952, A3s:0.1131, A4s:0.0855, A5s:0.0336, A6s:0.0257, A7s:0.2685, A8s:0.2251, A9s:0.0453, ATs:0.1495, AJs:0.0495, AQs:0.0128, AKs:0.1505, AA:0.9989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0306, 76s:0.0001, 77:0.0022, 87s:0.0048, 88:0.0229, 99:0.0010, T8s:0.0002, JJ:0.0012, K4s:0.0391, K5s:0.0007, K6s:0.0868, K7s:0.0082, K8s:0.3370, K9s:0.0021, KTs:0.1379, KJs:0.0552, KQs:0.0060, KK:0.9469, AKo:0.9596, A2s:0.4997, A3s:0.3071, A4s:0.5231, A5s:0.4651, A6s:0.3056, A7s:0.2383, A8s:0.4410, A9s:0.0487, ATs:0.1382, AJs:0.3174, AQs:0.0078, AKs:0.8482, AA:0.0007"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0006, 66:0.0993, 77:0.0887, 88:0.0858, 99:0.0237, TT:0.0705, JJ:0.0531, QQ:0.4652, AQo:0.0117, KTs:0.0154, KJs:0.2548, KK:0.0028, AKo:0.0009, A4s:0.0263, A5s:0.0352, A7s:0.0014, A9s:0.0296, ATs:0.2297, AJs:0.0565, AQs:0.9684, AKs:0.0039"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, JTs:0.0001, JJ:0.0001, KTs:0.0172, KJs:0.0115, KQs:0.0010, KK:0.0058, AKo:0.0008, A5s:0.0001, A8s:0.0001, A9s:0.0013, ATs:0.0001, AKs:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0066, 77:0.0063, 88:0.0598, 99:0.2072, TT:0.0612, JJ:0.1606, QQ:0.0058, KTs:0.0052, KJs:0.0523, KQs:0.0075, KK:0.4639, AKo:0.6889, A3s:0.0004, A4s:0.0266, A5s:0.4207, A6s:0.0013, A7s:0.0030, A8s:0.0052, A9s:0.0840, ATs:0.2058, AJs:0.1771, AQs:0.0003, AKs:0.5574"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@14",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "99:0.0003, TT:0.0001, JJ:0.0031, QQ:0.0100, K7s:0.0055, KJs:0.0003, KQs:0.0020, KK:0.2713, AKo:0.0020, A2s:0.0005, A4s:0.0010, A5s:0.1202, A7s:0.0500, A8s:0.0287, A9s:0.0029, ATs:0.0001, AJs:0.1510, AKs:0.0406, AA:0.0454"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0228, 66:0.1525, 77:0.0053, 88:0.0284, A8o:0.0020, 99:0.0300, A9o:0.0006, T8s:0.0012, T9s:0.0001, TT:0.1080, KTo:0.0064, ATo:0.0010, JTs:0.0010, JJ:0.0783, AJo:0.0014, QQ:0.0309, KQo:0.0028, AQo:0.0246, K4s:0.0014, K6s:0.0020, K7s:0.0012, K8s:0.0132, K9s:0.0047, KTs:0.0016, KJs:0.0155, KQs:0.0020, KK:0.6919, AKo:0.9975, A2s:0.1626, A3s:0.0962, A4s:0.3177, A5s:0.3219, A6s:0.2131, A7s:0.1241, A9s:0.0741, ATs:0.0244, AJs:0.1095, AQs:0.0006, AKs:0.9591, AA:0.9546"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@14",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "65s:0.0236, 66:0.0002, 77:0.0284, 88:0.0655, JJ:0.0894, QQ:0.1860, AQo:0.0002, KJs:0.0001, KQs:0.0193, KK:0.1710, AKo:0.0073, A5s:0.0010, A7s:0.0008, A9s:0.0672, ATs:0.0206, AJs:0.1913, AQs:0.4155, AKs:0.0002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0111, 77:0.0009, 88:0.0052, 99:0.0023, TT:0.0400, JJ:0.3506, QQ:0.2158, KTs:0.0065, KJs:0.0009, KK:0.3015, AKo:0.6833, A4s:0.0004, A5s:0.1996, A6s:0.0036, A7s:0.0001, A8s:0.0100, A9s:0.0018, ATs:0.2331, AJs:0.0266, AQs:0.2072, AKs:0.5616"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0204, KK, AKo:0.5975, AKs:0.2885, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.2216, KK:0.4725, AKo:0.1124, AKs:0.4373"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@5.5",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.0511, 65s:0.0003, 66:0.0148, 77:0.0804, 88:0.1765, 99:0.0051, T9s:0.0083, TT:0.0093, JJ:0.0226, QTs:0.0775, QJs:0.0013, QQ:0.3051, K5s:0.0015, K7s:0.0561, K8s:0.0084, KJs:0.0324, KQs:0.0002, KK:0.3580, AKo:0.1988, A2s:0.0660, A3s:0.0001, A4s:0.0003, A5s:0.0175, A6s:0.0008, A7s:0.0008, A8s:0.0366, A9s:0.1685, ATs:0.0019, AJs:0.0019, AQs:0.1546, AKs:0.2848, AA:0.0060"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "55:0.0068, A5o:0.0234, 66:0.0272, 76s:0.0009, 77:0.0395, 87s:0.0050, A8o:0.0119, 98s:0.0018, 99:0.0185, A9o:0.0016, T8s:0.0223, TT:0.0815, ATo:0.0022, JTs:0.0014, JJ:0.0396, AJo:0.0361, QTs:0.0051, QJs:0.0016, QQ:0.4621, AQo:0.1701, K4s:0.0002, K5s:0.0024, K6s:0.0012, K7s:0.0015, K8s:0.1868, K9s:0.0125, KJs:0.0502, KQs:0.0006, KK:0.0430, AKo:0.0347, A2s:0.3549, A3s:0.0073, A4s:0.0533, A5s:0.4682, A6s:0.1278, A7s:0.1911, A8s:0.5767, A9s:0.0180, ATs:0.1103, AJs:0.2313, AQs:0.0451, AKs:0.0153, AA:0.9795"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0138, A5o:0.0217, 66:0.0304, 76s:0.0498, 77:0.0204, 87s:0.0038, 88:0.0109, A8o:0.0238, 98s:0.0039, 99:0.0114, A9o:0.0008, T8s:0.0012, ATo:0.0033, J9s:0.0001, JJ:0.0849, AJo:0.0231, QJs:0.0001, QQ:0.0994, KQo:0.0019, AQo:0.0175, K4s:0.0025, K5s:0.0096, K6s:0.0009, K7s:0.0001, K8s:0.0679, K9s:0.0004, KTs:0.0215, KJs:0.0082, KQs:0.1313, KK:0.5989, AKo:0.7659, A2s:0.3077, A3s:0.3430, A4s:0.2503, A5s:0.2290, A6s:0.0695, A7s:0.0475, A8s:0.1113, A9s:0.1391, ATs:0.1680, AJs:0.0818, AQs:0.1395, AKs:0.6984, AA:0.0145"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@5.5",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0007, 65s:0.3084, 66:0.2453, 76s:0.0025, 77:0.3070, 88:0.5099, 99:0.4647, TT:0.6143, JTs:0.0597, JJ:0.8092, QTs:0.0494, QJs:0.1138, QQ:0.9798, AQo:0.2849, KTs:0.5163, KJs:0.3865, KQs:0.4761, KK:0.0657, AKo:0.1834, A2s:0.0001, A3s:0.0004, A4s:0.0118, A5s:0.5166, A6s:0.0026, A7s:0.0022, A8s:0.0479, A9s:0.1350, ATs:0.3470, AJs:0.1939, AQs:0.9648, AKs:0.0369"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0012, 88:0.0622, 99:0.0107, TT:0.0163, JTs:0.0007, JJ:0.0167, AJo:0.0003, QTs:0.0005, QJs:0.0012, QQ:0.0055, KQo:0.0006, AQo:0.1370, KTs:0.0537, KJs:0.0567, KQs:0.0053, KK:0.1911, AKo:0.0078, A4s:0.0002, A5s:0.0040, A6s:0.0005, A7s:0.0009, A8s:0.0018, A9s:0.0047, ATs:0.0043, AJs:0.0174, AQs:0.0018, AKs:0.0049"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0110, 76s:0.0018, 77:0.0001, 88:0.1732, 99:0.0131, TT:0.0206, JJ:0.0065, AJo:0.0004, QQ:0.0007, KQo:0.0018, AQo:0.0006, KTs:0.0069, KJs:0.0068, KQs:0.0110, KK:0.2157, AKo:0.4986, A2s:0.0001, A3s:0.0006, A4s:0.1638, A5s:0.1457, A6s:0.0079, A7s:0.0117, A8s:0.0090, A9s:0.0422, ATs:0.1910, AJs:0.2949, AQs:0.0262, AKs:0.5195"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@8",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0155, 66:0.0176, 77:0.0527, 99:0.0001, T8s:0.0015, QQ:0.3878, AQo:0.0010, K5s:0.0002, K7s:0.0012, KQs:0.0773, KK:0.1002, AKo:0.0002, A2s:0.0008, A3s:0.0008, A4s:0.0047, A6s:0.0161, A7s:0.0044, A8s:0.0203, ATs:0.0166, AJs:0.0424, AQs:0.4300, AKs:0.0090, AA:0.0001"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A5o:0.1105, 65s:0.0032, 66:0.0197, 77:0.0702, 88:0.0021, 98s:0.0073, 99:0.0001, A9o:0.0129, TT:0.0616, ATo:0.0070, J9s:0.0005, JTs:0.0011, JJ:0.1314, AJo:0.0094, Q8s:0.0050, QTs:0.0006, QJs:0.0007, QQ:0.1571, AQo:0.3944, K5s:0.0004, K6s:0.0002, K7s:0.0102, K8s:0.0051, KJs:0.0052, KQs:0.0002, KK:0.0549, AKo:0.0003, A2s:0.0778, A3s:0.0915, A4s:0.1463, A5s:0.0651, A6s:0.1490, A7s:0.1452, A8s:0.2054, A9s:0.0130, ATs:0.0371, AJs:0.3388, AQs:0.4476, AKs:0.1275, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0065, A5o:0.0005, 65s:0.0002, 66:0.0580, 76s:0.0001, 77:0.2182, 88:0.1138, A8o:0.0003, 98s:0.0019, 99:0.1216, A9o:0.0002, T8s:0.0001, TT:0.0999, ATo:0.0004, JTs:0.0006, JJ:0.0453, KJo:0.0001, Q9s:0.0002, QJs:0.0001, QQ:0.0018, AQo:0.0001, K5s:0.0025, K6s:0.0894, K7s:0.0568, K9s:0.0158, KJs:0.1765, KQs:0.0001, KK:0.8449, AKo:0.9992, A2s:0.1099, A3s:0.3949, A4s:0.4515, A5s:0.4793, A6s:0.3580, A7s:0.4390, A8s:0.1636, A9s:0.7558, ATs:0.2089, AJs:0.0845, AQs:0.0007, AKs:0.8635, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@8",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0009, 65s:0.0012, 66:0.1744, 76s:0.0149, 77:0.0700, 88:0.4438, 99:0.0013, TT:0.0990, JTs:0.0251, JJ:0.1989, QJs:0.0011, QQ:0.9495, AQo:0.0319, KTs:0.2305, KJs:0.0303, KK:0.0049, AKo:0.1198, A3s:0.0001, A4s:0.0034, A5s:0.3397, A6s:0.0017, A7s:0.0016, A8s:0.0094, A9s:0.0146, ATs:0.1005, AJs:0.0005, AQs:0.9969, AKs:0.1748"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "65s:0.0001, 76s:0.0009, 77:0.0155, 88:0.0068, 99:0.0001, TT:0.0133, JTs:0.0054, JJ:0.0102, AJo:0.0091, QJs:0.0004, QQ:0.0002, KQo:0.0013, AQo:0.0034, KTs:0.0658, KJs:0.2061, KQs:0.0083, KK:0.1923, AKo:0.0273, A3s:0.0001, A4s:0.0061, A5s:0.0050, A6s:0.0002, A7s:0.0022, A8s:0.0013, A9s:0.0062, ATs:0.0025, AJs:0.0198, AQs:0.0005, AKs:0.0085"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0089, 77:0.0002, 88:0.0212, 99:0.0011, TT:0.0005, JJ:0.3986, AJo:0.0008, QJs:0.0002, QQ:0.0084, KQo:0.0002, AQo:0.0011, KTs:0.0012, KJs:0.0003, KQs:0.0010, KK:0.2753, AKo:0.5421, A3s:0.0001, A4s:0.0299, A5s:0.1172, A6s:0.0014, A7s:0.0014, A8s:0.0037, A9s:0.0215, ATs:0.0683, AJs:0.2930, AQs:0.0005, AKs:0.3787"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0130, 77:0.0047, 99:0.0004, TT:0.0003, JJ:0.0002, QQ:0.0353, K8s:0.0026, KJs:0.0006, KQs:0.0002, KK:0.0017, AKo:0.0001, A4s:0.0001, A6s:0.0010, A7s:0.0001, A8s:0.0004, A9s:0.0001, ATs:0.0074, AJs:0.0010, AQs:0.0007, AKs:0.0004, AA:0.0131"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0417, 77:0.0196, A8o:0.0605, A9o:0.0046, TT:0.0455, ATo:0.0477, AJo:0.0010, QJs:0.0001, QQ:0.0150, AQo:0.1392, K6s:0.0043, K7s:0.0271, K8s:0.0003, K9s:0.0009, KTs:0.0001, KJs:0.0001, KQs:0.0123, KK:0.0031, AKo:0.4100, A2s:0.0165, A4s:0.0468, A5s:0.1664, A6s:0.0674, A7s:0.0621, A8s:0.3876, A9s:0.0312, ATs:0.2139, AJs:0.0818, AQs:0.1542, AKs:0.7536, AA:0.9867"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0071, A5o:0.0049, 65s:0.0018, 66:0.0928, 76s:0.0001, 77:0.1394, 87s:0.0082, 88:0.1431, 99:0.2444, A9o:0.0001, T9s:0.0017, TT:0.0959, JJ:0.6845, QQ:0.2135, K4s:0.0511, K5s:0.0731, K6s:0.1804, K7s:0.0001, K8s:0.0231, K9s:0.0749, KTs:0.4873, KJs:0.6645, KQs:0.2279, KK:0.9952, AKo:0.5899, A2s:0.8180, A3s:0.7332, A4s:0.7294, A5s:0.4092, A6s:0.3298, A7s:0.0823, A8s:0.2865, A9s:0.0727, ATs:0.1550, AJs:0.1603, AQs:0.0929, AKs:0.2454, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0627, 76s:0.0001, 77:0.1697, 88:0.1179, 99:0.0159, TT:0.0042, JJ:0.0384, QQ:0.9531, KTs:0.0560, KQs:0.0587, AKo:0.0696, A3s:0.0002, A4s:0.0396, A5s:0.1065, A6s:0.0001, A7s:0.0130, A8s:0.0074, A9s:0.0598, ATs:0.1879, AJs:0.1009, AQs:0.0179, AKs:0.0358"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "66:0.0001, JJ:0.0001, AJo:0.0002, QQ:0.0001, KQo:0.0091, KTs:0.2632, KJs:0.1200, KQs:0.0371, KK:0.4101, AKo:0.0253, A4s:0.0075, A5s:0.0843, A6s:0.0010, A7s:0.0010, A8s:0.0103, A9s:0.0151, ATs:0.1485, AJs:0.0725, AQs:0.0120, AKs:0.0120"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0014, 77:0.0005, 88:0.0010, 99:0.0027, TT:0.0008, JJ:0.0052, QJs:0.0001, QQ:0.0003, KTs:0.0001, KJs:0.0002, KQs:0.0006, KK:0.0624, AKo:0.5957, A4s:0.0004, A5s:0.0014, A9s:0.0001, ATs:0.0012, AJs:0.0013, AQs:0.0005, AKs:0.5140"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0003, QQ:0.9740, KK, AKo:0.0040, AKs:0.0293, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.9867, KK:0.4725, AKo:0.0014, AQs:0.0897, AKs:0.0015"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@5.5",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0003, 66:0.0902, 77:0.0003, 88:0.0001, 99:0.0001, T9s:0.0001, TT:0.0544, J9s:0.0007, JJ:0.0284, KJo:0.0001, QQ:0.2677, AQo:0.0153, K5s:0.0006, K6s:0.0092, K8s:0.0002, K9s:0.0536, KTs:0.0002, KJs:0.0001, KQs:0.0003, KK:0.0866, AKo:0.0012, A2s:0.0107, A5s:0.0092, A6s:0.2280, A7s:0.0026, A8s:0.0026, AJs:0.0796, AQs:0.1864, AA:0.0018"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "55:0.0042, A5o:0.0564, 65s:0.0002, 66:0.0108, 76s:0.0001, 77:0.0003, 87s:0.0005, 88:0.0052, A8o:0.0032, 99:0.0028, A9o:0.0411, T8s:0.0282, T9s:0.0047, TT:0.0006, KTo:0.0024, ATo:0.0172, J9s:0.0044, JTs:0.0124, JJ:0.0463, AJo:0.0027, Q8s:0.0001, Q9s:0.0004, QJs:0.0340, QQ:0.3472, KQo:0.0013, AQo:0.4197, K4s:0.0041, K5s:0.0063, K6s:0.0036, K7s:0.0063, K8s:0.0207, K9s:0.0043, KTs:0.0007, KJs:0.0127, KQs:0.0040, KK:0.0925, AKo:0.0114, A2s:0.0049, A3s:0.1623, A4s:0.0102, A5s:0.3222, A6s:0.1052, A7s:0.2701, A8s:0.0567, A9s:0.0377, ATs:0.0001, AJs:0.2095, AQs:0.3617, AKs:0.0003, AA:0.9556"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0847, A5o:0.0005, 65s:0.0005, 66:0.2135, 76s:0.0145, 77:0.0634, 87s:0.0033, 88:0.0540, A8o:0.0123, 98s:0.0001, 99:0.0518, A9o:0.0028, T8s:0.0014, T9s:0.0006, TT:0.3377, KTo:0.0126, ATo:0.0003, J9s:0.0006, JTs:0.0036, KJo:0.0117, AJo:0.0002, QTs:0.0001, QQ:0.0002, AQo:0.0001, K4s:0.0301, K6s:0.0225, K7s:0.0294, K9s:0.0482, KTs:0.0174, KJs:0.0597, KQs:0.0087, KK:0.8209, AKo:0.9873, A2s:0.4020, A3s:0.0712, A4s:0.0149, A5s:0.3547, A6s:0.3844, A7s:0.0909, A8s:0.0855, A9s:0.0002, ATs:0.1184, AJs:0.1124, AQs:0.0121, AKs:0.9988, AA:0.0425"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@5.5",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0010, 65s:0.2465, 66:0.1913, 76s:0.0327, 77:0.2462, 88:0.8587, 99:0.3890, TT:0.3755, JTs:0.1476, JJ:0.8916, QTs:0.0007, QJs:0.0041, QQ:0.8974, AQo:0.2492, KTs:0.0778, KJs:0.8202, KQs:0.6205, KK:0.0002, AKo:0.0838, A3s:0.0004, A4s:0.2341, A5s:0.4584, A6s:0.0098, A7s:0.0384, A8s:0.0631, A9s:0.0060, ATs:0.1858, AJs:0.7821, AQs:0.8170, AKs:0.1255"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "65s:0.0013, 66:0.0101, 77:0.0169, 88:0.0036, 99:0.0104, TT:0.0108, JTs:0.0032, JJ:0.0118, AJo:0.0056, QTs:0.0036, QJs:0.0042, QQ:0.0059, KQo:0.0045, AQo:0.0963, KTs:0.0852, KJs:0.0388, KQs:0.0328, KK:0.2709, AKo:0.0186, A4s:0.0064, A5s:0.0155, A6s:0.0006, A7s:0.0004, A8s:0.0022, A9s:0.0129, ATs:0.0375, AJs:0.0421, AQs:0.0336, AKs:0.0542"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0003, 77:0.0141, 88:0.0012, 99:0.1051, TT:0.0615, JTs:0.0001, JJ:0.0001, AJo:0.0002, QQ:0.0819, AQo:0.0049, KTs:0.0018, KJs:0.0137, KQs:0.1716, KK:0.2013, AKo:0.5854, A3s:0.0006, A4s:0.0153, A5s:0.0962, A6s:0.0003, A7s:0.0013, A8s:0.0001, A9s:0.2244, ATs:0.0326, AJs:0.0568, AQs:0.1447, AKs:0.3820"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@8",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0346, 77:0.0218, 88:0.0038, T8s:0.0002, TT:0.0515, JTs:0.0001, QTs:0.0009, QQ:0.0813, AQo:0.0673, K7s:0.0001, KTs:0.0005, KK:0.2161, AKo:0.0120, A2s:0.0005, A3s:0.0014, A5s:0.0046, A7s:0.0009, A8s:0.0003, A9s:0.0013, AJs:0.0024, AQs:0.4122, AKs:0.1450, AA:0.0028"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0008, A5o:0.0851, 76s:0.0565, 77:0.0008, A8o:0.0074, 99:0.0097, A9o:0.0696, T8s:0.0025, TT:0.0315, ATo:0.0204, J9s:0.2337, JTs:0.0013, JJ:0.0297, AJo:0.0027, Q9s:0.0016, QJs:0.0022, QQ:0.0001, AQo:0.2194, K4s:0.0072, K5s:0.0002, K7s:0.0012, K8s:0.0160, K9s:0.0297, KTs:0.0174, KJs:0.0004, KK:0.1086, AKo:0.0002, A2s:0.0533, A3s:0.1234, A4s:0.0401, A5s:0.0371, A6s:0.1366, A7s:0.0065, A8s:0.3477, A9s:0.4697, ATs:0.0292, AJs:0.1586, AQs:0.1862, AKs:0.2959, AA:0.9963"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0028, A5o:0.0319, 77:0.0001, A9o:0.0040, T8s:0.0001, TT:0.0926, JTs:0.0003, JJ:0.0071, AJo:0.0005, QQ:0.0108, AQo:0.0001, K4s:0.0001, K5s:0.0002, K6s:0.0001, K7s:0.0007, K8s:0.0009, K9s:0.0012, KTs:0.0007, KJs:0.0008, KK:0.6752, AKo:0.9408, A2s:0.6320, A3s:0.0161, A4s:0.1088, A5s:0.2035, A6s:0.1266, A7s:0.1430, A8s:0.0201, A9s:0.1007, ATs:0.1233, AJs:0.0455, AQs:0.0675, AKs:0.5495, AA:0.0009"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@8",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0008, 65s:0.0342, 66:0.1571, 76s:0.0277, 77:0.0595, 88:0.3303, 99:0.1051, TT:0.1169, JJ:0.0869, QQ:0.8723, AQo:0.0711, KTs:0.1685, KQs:0.0018, KK:0.0519, AKo:0.0167, A4s:0.0114, A5s:0.0241, A7s:0.0042, A9s:0.0982, ATs:0.0181, AJs:0.0338, AQs:0.9180, AKs:0.0851"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "66:0.0004, 77:0.0003, 88:0.0018, JJ:0.0002, AJo:0.0001, QJs:0.0002, QQ:0.0006, KQo:0.0001, AQo:0.0008, KTs:0.0220, KJs:0.0185, KQs:0.0097, KK:0.0427, AKo:0.0075, A5s:0.0109, A7s:0.0005, A8s:0.0004, A9s:0.0041, ATs:0.0073, AJs:0.0021, AQs:0.0009, AKs:0.0041"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0307, 76s:0.0005, 88:0.0202, 99:0.1948, TT:0.0587, JJ:0.2799, AJo:0.0030, QTs:0.0002, QQ:0.0501, AQo:0.0170, KTs:0.0066, KQs:0.0139, KK:0.3779, AKo:0.6541, A2s:0.0001, A3s:0.0014, A4s:0.1355, A5s:0.5490, A6s:0.0035, A7s:0.0303, A8s:0.0162, A9s:0.2443, ATs:0.2317, AJs:0.6821, AQs:0.0600, AKs:0.4726"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0253, 66:0.0127, 88:0.0056, 99:0.0018, TT:0.0037, QQ:0.1549, K4s:0.0001, K9s:0.0006, KJs:0.0002, KQs:0.0013, KK:0.0001, A4s:0.0003, A6s:0.0130, A8s:0.0106, A9s:0.0054, AJs:0.0001, AQs:0.3056, AKs:0.0012"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0671, 77:0.0025, A8o:0.0359, A9o:0.0479, TT:0.0186, KTo:0.0058, ATo:0.0967, JJ:0.0164, KJo:0.0480, AJo:0.0944, Q9s:0.0001, QTs:0.0002, QQ:0.0004, AQo:0.1307, K4s:0.0002, K5s:0.0004, K6s:0.0081, K7s:0.1190, K8s:0.0174, K9s:0.2070, KTs:0.0084, KJs:0.0045, KQs:0.0005, KK:0.0022, AKo:0.1581, A2s:0.0666, A3s:0.0591, A4s:0.0220, A5s:0.0007, A6s:0.2169, A7s:0.0045, A8s:0.4152, A9s:0.2278, ATs:0.0303, AJs:0.1007, AQs:0.0023, AKs:0.7434, AA:0.9981"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0474, 65s:0.0019, 66:0.3546, 76s:0.0038, 77:0.2274, 87s:0.0036, 88:0.1376, 98s:0.0006, 99:0.2262, T9s:0.0018, TT:0.0741, JJ:0.4191, QQ:0.6993, AQo:0.0019, K4s:0.0015, K5s:0.0206, K6s:0.0070, K7s:0.0001, K8s:0.2789, K9s:0.0539, KTs:0.1405, KJs:0.7521, KQs:0.0770, KK:0.9976, AKo:0.8419, A2s:0.3355, A3s:0.3203, A4s:0.5071, A5s:0.9789, A6s:0.0223, A7s:0.6881, A8s:0.2642, A9s:0.1069, ATs:0.5005, AJs:0.6766, AQs:0.1551, AKs:0.2554, AA:0.0019"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0725, 77:0.0758, 88:0.0546, 99:0.0180, TT:0.0026, JJ:0.0004, QQ:0.5303, KJs:0.0217, KQs:0.0096, AKo:0.0009, A4s:0.0015, A5s:0.0155, A6s:0.0001, A8s:0.0003, A9s:0.0021, ATs:0.0001, AJs:0.0030, AQs:0.6005, AKs:0.0068"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "TT:0.0009, JTs:0.0001, JJ:0.0001, AJo:0.0031, KQo:0.0005, AQo:0.0003, KTs:0.1035, KJs:0.1652, KQs:0.0007, KK:0.1841, AKo:0.0084, A4s:0.0061, A5s:0.0252, A6s:0.0001, A7s:0.0031, A8s:0.0035, A9s:0.0179, ATs:0.0080, AJs:0.0042, AQs:0.0001, AKs:0.0028"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0121, 99:0.0001, TT:0.0913, JJ:0.0028, QQ:0.0001, KTs:0.0005, KJs:0.0007, KQs:0.0001, KK:0.2884, AKo:0.6813, A5s:0.0001, ATs:0.0002, AJs:0.0001, AKs:0.5523"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0010, TT:0.0021, QQ:0.9606, AQo:0.0348, KK, AKo:0.0603, AQs:0.1586, AKs:0.2912, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9145, KK:0.4725, AKo:0.0026, AQs:0.0574, AKs:0.1577"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0030, 44:0.0134, A4o:0.0214, 53s:0.0031, 55:0.0300, A5o:0.0026, 63s:0.0002, 64s:0.0005, 65s:0.0865, 66:0.0002, 75s:0.0014, 76s:0.0151, 77:0.0007, 87o:0.0001, A7o:0.0337, 83s:0.0001, 87s:0.0010, A8o:0.0004, 96s:0.0001, 97s:0.0001, 99:0.0609, A9o:0.0007, T3s:0.0002, T6s:0.0001, T7s:0.0005, T9s:0.0001, TT:0.0856, ATo:0.0103, J5s:0.0003, J6s:0.0012, J7s:0.0012, JJ:0.2591, KJo:0.0041, AJo:0.0199, Q6s:0.0002, QQ:0.1806, KQo:0.0008, AQo:0.0620, K2s:0.0243, K3s:0.0004, K4s:0.0472, K5s:0.0009, K6s:0.1110, K7s:0.0001, K8s:0.0419, K9s:0.0022, KJs:0.0147, KK:0.0523, AKo:0.0406, A2s:0.0643, A3s:0.2688, A4s:0.1166, A5s:0.1362, A6s:0.0581, A7s:0.0437, A8s:0.0022, A9s:0.1621, ATs:0.8050, AJs:0.1195, AQs:0.5060, AKs:0.1311, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0006, 53s:0.0017, 55:0.0001, 64s:0.0145, 65s:0.0012, 86s:0.0001, A8o:0.0009, 96s:0.0001, 99:0.0012, ATo:0.0005, J2s:0.0001, J5s:0.0001, JJ:0.0013, Q5s:0.0001, QJs:0.0010, QQ:0.0106, AQo:0.0011, K4s:0.0046, K6s:0.0140, KTs:0.0463, KJs:0.0036, KQs:0.0008, KK:0.9477, AKo:0.9582, A2s:0.0190, A3s:0.0121, A4s:0.4324, A5s:0.0813, A6s:0.0159, A7s:0.0038, A8s:0.0098, A9s:0.1029, ATs:0.0018, AJs:0.0202, AKs:0.8684"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0013, K2o:0.0001, A2o:0.0002, A3o:0.0824, 44:0.0033, A4o:0.0048, 54s:0.0003, A5o:0.0149, A6o:0.0044, 74s:0.0092, 76s:0.0001, A7o:0.0128, 88:0.0435, A8o:0.0005, 95s:0.0002, 98s:0.0007, T4s:0.0002, T7s:0.0001, T9s:0.0006, TT:0.0015, J8s:0.0064, J9s:0.0195, JTs:0.0004, JJ:0.5560, KJo:0.0242, QQ:0.0553, KQo:0.0003, AQo:0.0949, K3s:0.0796, K4s:0.2256, K5s:0.0464, K6s:0.0079, K7s:0.0246, K9s:0.0048, KTs:0.0090, KJs:0.0288, KQs:0.1888, KK:0.0165, AKo:0.0909, A2s:0.0023, A3s:0.1888, A4s:0.0719, A5s:0.0184, A6s:0.0223, A7s:0.2322, A8s:0.1922, A9s:0.1723, ATs:0.3728, AJs:0.1146, AQs:0.5484, AKs:0.0023, AA:0.9917"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0002, 44:0.0068, A4o:0.0024, A5o:0.0024, 65s:0.0128, A6o:0.0003, 76s:0.0004, A7o:0.0055, 88:0.0001, A8o:0.0006, 98s:0.0002, TT:0.0001, ATo:0.0003, J2s:0.0009, J6s:0.0009, AJo:0.0008, Q8s:0.0003, QTs:0.0004, AQo:0.0013, K2s:0.0268, K4s:0.1482, K7s:0.0709, K9s:0.0352, KTs:0.0317, KJs:0.0002, KQs:0.0001, KK:0.9833, AKo:0.9084, A2s:0.0058, A3s:0.0949, A4s:0.2419, A5s:0.1687, A6s:0.3071, A7s:0.0411, A8s:0.0177, A9s:0.2670, ATs:0.0823, AJs:0.0189, AQs:0.0063, AKs:0.9976, AA:0.0083"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 42s:0.0001, 44:0.0007, 52s:0.0001, 53s:0.0042, 55:0.0504, K5o:0.0001, A5o:0.0001, 63s:0.0001, 65s:0.0501, 66:0.0263, 74s:0.0004, A7o:0.0003, 87s:0.0063, 88:0.0306, A8o:0.0003, 93s:0.0001, 97s:0.0004, 99:0.0780, T6s:0.0001, T9s:0.0464, ATo:0.0044, J3s:0.0005, J5s:0.0001, J6s:0.0027, J7s:0.0004, J9s:0.0004, JTs:0.0379, JJ:0.4045, KJo:0.0111, AJo:0.0202, Q4s:0.0028, Q5s:0.0001, Q8s:0.0052, Q9s:0.0002, QQ:0.4818, AQo:0.2369, K3s:0.0002, K6s:0.0003, K7s:0.0023, K9s:0.0022, KTs:0.0015, KJs:0.1190, KQs:0.0001, KK:0.0637, AKo:0.0046, A2s:0.3250, A3s:0.0038, A4s:0.1679, A5s:0.0565, A6s:0.2721, A7s:0.2692, A8s:0.1534, A9s:0.1233, ATs:0.3006, AJs:0.0050, AQs:0.2534, AKs:0.0074, AA:0.9481"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, A3o:0.0001, 44:0.0145, 52s:0.0003, 66:0.0017, 76s:0.0082, A7o:0.0047, 85s:0.0001, 86s:0.0001, 87s:0.0008, 97s:0.0003, TT:0.0019, ATo:0.0008, J7s:0.0003, JJ:0.0009, AJo:0.0004, Q7s:0.0001, Q8s:0.0001, QQ:0.0057, AQo:0.0013, K2s:0.0001, K3s:0.0020, K6s:0.0610, K7s:0.0063, K9s:0.0006, KTs:0.0003, KJs:0.0055, KK:0.9362, AKo:0.9913, A2s:0.0816, A3s:0.2700, A4s:0.4817, A5s:0.0945, A6s:0.1584, A7s:0.1685, A8s:0.0013, A9s:0.0197, ATs:0.0871, AJs:0.0114, AQs:0.0053, AKs:0.9909, AA:0.0519"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "22:0.0005, 32s:0.0004, A3o:0.0077, 43s:0.0002, A4o:0.0268, 55:0.0002, A5o:0.0002, 63s:0.0001, 65s:0.0464, 75s:0.0002, 76s:0.0006, 77:0.0001, K7o:0.0003, A7o:0.0011, 86s:0.0001, 87s:0.0003, 88:0.1053, A8o:0.0219, 95s:0.0001, 97s:0.0074, 98s:0.0012, 99:0.0965, T6s:0.0187, T8s:0.0019, TT:0.1933, ATo:0.0080, J4s:0.0007, J6s:0.0001, JTs:0.0001, JJ:0.2879, KJo:0.0044, AJo:0.0003, QQ:0.4619, AQo:0.1978, K2s:0.0007, K3s:0.0048, K4s:0.0037, K5s:0.0183, K6s:0.0872, K7s:0.0020, K8s:0.0188, K9s:0.0267, KTs:0.0007, KJs:0.0051, KQs:0.0006, KK:0.2481, AKo:0.0826, A2s:0.0085, A3s:0.3509, A4s:0.0320, A5s:0.2147, A6s:0.0311, A7s:0.5283, A8s:0.1762, A9s:0.4440, ATs:0.2680, AJs:0.5185, AQs:0.0612, AKs:0.0431, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0020, A4o:0.0177, 54s:0.0001, A5o:0.0007, 65s:0.0064, 76s:0.0607, 88:0.0033, TT:0.0001, JJ:0.0027, K4s:0.0189, K6s:0.0001, K8s:0.0740, K9s:0.0001, KJs:0.0157, KQs:0.0001, KK:0.7519, AKo:0.9140, A2s:0.0710, A3s:0.2484, A4s:0.1063, A5s:0.0472, A6s:0.0436, A7s:0.0007, A8s:0.0580, A9s:0.0700, ATs:0.0065, AJs:0.0338, AKs:0.9569"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0010, 55:0.6644, 65s:0.0134, 66:0.6701, 76s:0.2922, 77:0.3280, 87s:0.0016, 88:0.9134, 98s:0.0002, 99:0.8225, T8s:0.3622, T9s:0.7866, TT:0.7720, KTo:0.0177, ATo:0.0001, J9s:0.0607, JTs:0.0484, JJ:0.9207, QTs:0.0184, QJs:0.0013, QQ:0.8794, KQo:0.0321, AQo:0.7651, K4s:0.0788, K5s:0.2606, K6s:0.1158, K7s:0.0478, K8s:0.2391, K9s:0.1355, KTs:0.6259, KJs:0.9183, KQs:0.9030, KK:0.5027, A2s:0.0362, A3s:0.0733, A4s:0.1621, A5s:0.0163, A6s:0.0153, A7s:0.2354, A8s:0.2958, A9s:0.4887, ATs:0.5653, AJs:0.6934, AQs:0.9656, AKs:0.0002"
      },
      {
        "action": "4bet 10bb",
        "min": 0.0001,
        "range": "55:0.0634, 65s:0.0001, 66:0.0393, 76s:0.0001, 77:0.0129, 88:0.0498, A8o:0.0002, 98s:0.0013, 99:0.1002, A9o:0.0005, T8s:0.0095, T9s:0.0842, TT:0.1861, KTo:0.0001, ATo:0.0066, J9s:0.0169, JTs:0.0023, JJ:0.0769, KJo:0.0036, AJo:0.0330, Q9s:0.0001, QTs:0.0038, QJs:0.0020, QQ:0.1206, AQo:0.2202, K4s:0.0003, K5s:0.0010, K6s:0.0005, K8s:0.0382, K9s:0.2251, KTs:0.3152, KJs:0.0136, KQs:0.0011, KK:0.1108, AKo:0.0005, A2s:0.0735, A3s:0.1125, A4s:0.1434, A5s:0.1126, A6s:0.2619, A7s:0.2665, A8s:0.2799, A9s:0.3072, ATs:0.1699, AJs:0.2446, AQs:0.0339, AKs:0.0587, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1946, A5o:0.0001, 66:0.1287, 76s:0.0001, 77:0.1581, 87s:0.0004, 88:0.0083, 98s:0.0003, 99:0.0040, T8s:0.0001, T9s:0.0006, TT:0.0005, ATo:0.0002, JTs:0.0002, JJ:0.0016, AJo:0.0002, QJs:0.0001, K4s:0.0076, K5s:0.1680, K6s:0.0473, K7s:0.0359, K8s:0.0028, K9s:0.0441, KTs:0.0487, KJs:0.0173, KQs:0.0003, KK:0.3865, AKo:0.9995, A2s:0.4799, A3s:0.5563, A4s:0.5702, A5s:0.8623, A6s:0.1897, A7s:0.2016, A8s:0.2579, A9s:0.1516, ATs:0.0015, AJs:0.0292, AKs:0.9411"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|LJ:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0025, 77:0.0043, 88:0.0579, 99:0.0285, TT:0.0347, JJ:0.0417, AJo:0.0004, QQ:0.0005, AQo:0.1046, KTs:0.0391, KJs:0.0017, KQs:0.0001, KK:0.0898, AKo:0.0106, A2s:0.0099, A3s:0.0207, A4s:0.0210, A5s:0.0663, A6s:0.0020, A7s:0.0519, A8s:0.0438, A9s:0.0399, ATs:0.0232, AJs:0.0002, AQs:0.0003, AKs:0.1255, AA:0.0167"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AJo:0.0002, AQo:0.0043, AKo:0.0006, A2s:0.0232, A3s:0.0118, A4s:0.0620, A5s:0.0239, A6s:0.0009, A7s:0.0454, A8s:0.0038, A9s:0.0002, ATs:0.0001, AKs:0.0102, AA:0.0621"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|LJ:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0898, AKo:0.0110, AKs:0.1357, AA:0.0788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BB:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0099, 66:0.0003, 77:0.0001, A8o:0.0001, TT:0.0005, ATo:0.0001, J9s:0.0002, JJ:0.0034, KJo:0.0001, QTs:0.0001, QJs:0.0002, QQ:0.0194, AQo:0.0001, K6s:0.0006, K7s:0.0001, K9s:0.0002, KJs:0.0032, KK:0.1944, AKo:0.0002, A2s:0.0010, A3s:0.0040, A4s:0.0054, A5s:0.0088, A6s:0.0029, A8s:0.0007, A9s:0.0179, AJs:0.0008, AQs:0.0512, AKs:0.0056, AA:0.0225"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, A5o:0.0049, 66:0.0001, 76s:0.0013, 88:0.0004, T8s:0.0001, TT:0.0004, ATo:0.1439, J9s:0.0002, JTs:0.0001, JJ:0.0005, KJo:0.0001, QQ:0.0009, AQo:0.0114, K4s:0.0003, K6s:0.0001, K7s:0.0018, K9s:0.0089, KJs:0.0001, KQs:0.0001, KK:0.2840, AKo:0.4636, A2s:0.1004, A3s:0.3807, A4s:0.0104, A5s:0.0552, A6s:0.3268, A7s:0.3127, A8s:0.1771, A9s:0.3411, ATs:0.4632, AJs:0.1757, AQs:0.2791, AKs:0.9831, AA:0.9775"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BB:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0025, 77:0.0042, 88:0.0517, 99:0.0201, TT:0.0270, JJ:0.0403, QQ:0.0005, AQo:0.0852, KTs:0.0289, KJs:0.0014, KQs:0.0001, KK:0.0898, AKo:0.0040, A2s:0.0139, A3s:0.0043, A4s:0.0615, A5s:0.0405, A6s:0.0009, A7s:0.0275, A8s:0.0673, A9s:0.0096, ATs:0.0145, AJs:0.0002, AQs:0.0003, AKs:0.0397, AA:0.0471"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.0072, A2s:0.0175, A3s:0.0050, A4s:0.0175, A5s:0.0230, A6s:0.0030, A7s:0.0938, A8s:0.0119, A9s:0.0004, ATs:0.0073, AKs:0.0960, AA:0.0317"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.0001, A8o:0.0001, 98s:0.0003, 99:0.0003, JTs:0.0001, JJ:0.0001, QJo:0.0001, AJo:0.0001, QJs:0.0002, QQ:0.0003, K9s:0.0001, KJs:0.0002, KQs:0.0006, KK, AKo:0.0001, A6s:0.0002, A9s:0.0001, AKs:0.0899, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0898, AKo:0.0059, AKs:0.1282, AA:0.0788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|SB:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0004, 76s:0.0001, 77:0.0001, 87s:0.0001, 99:0.0001, A9o:0.0010, TT:0.0008, JTs:0.0018, Q8s:0.0003, QQ:0.0013, AQo:0.0003, K5s:0.0001, K7s:0.0010, KTs:0.0001, KK:0.5004, AKo:0.0001, A4s:0.0001, A5s:0.0215, A6s:0.0001, A9s:0.0087, ATs:0.0151, AJs:0.0063, AQs:0.0803, AKs:0.7355, AA:0.3057"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, 76s:0.0007, 77:0.0017, 87s:0.0004, 98s:0.0004, 99:0.0001, T8s:0.0096, TT:0.0007, ATo:0.0008, J9s:0.0011, JTs:0.0009, JJ:0.0001, AJo:0.0509, Q8s:0.0001, QJs:0.0001, QQ:0.0027, AQo:0.0037, K6s:0.0091, K7s:0.0003, K8s:0.0020, KTs:0.0015, KQs:0.0001, KK:0.0063, AKo:0.1661, A2s:0.1177, A3s:0.2143, A4s:0.2803, A5s:0.3006, A6s:0.0015, A7s:0.1195, A8s:0.2887, A9s:0.0821, ATs:0.1510, AJs:0.1230, AQs:0.2791, AKs:0.1741, AA:0.6943"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|SB:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0024, 77:0.0043, 88:0.0575, 99:0.0193, TT:0.0121, JJ:0.0382, QQ:0.0005, AQo:0.0800, K8s:0.0001, KTs:0.0464, KJs:0.0006, KK:0.0895, AKo:0.0066, A2s:0.0064, A3s:0.0024, A4s:0.0409, A5s:0.0301, A6s:0.0140, A7s:0.0350, A8s:0.0498, A9s:0.0268, ATs:0.0152, AQs:0.0003, AKs:0.0808, AA:0.0302"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0026, AJo:0.0079, KTs:0.0001, KK:0.0003, AKo:0.0046, A2s:0.0084, A3s:0.0043, A4s:0.0323, A5s:0.0308, A6s:0.0053, A7s:0.0435, A8s:0.0162, A9s:0.0006, ATs:0.0024, AJs:0.0002, AKs:0.0548, AA:0.0486"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0009, 99:0.0001, T9s:0.0002, TT:0.0010, JJ:0.0006, QQ:0.0019, AQo:0.0001, K9s:0.0003, KJs:0.0006, KK:0.9945, AKo:0.0005, A5s:0.0005, A6s:0.0002, A9s:0.0002, AJs:0.0001, AQs:0.0015, AKs:0.0005, AA:0.9987"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0898, AKo:0.0016, AKs:0.1292, AA:0.0788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BTN:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0037, 76s:0.0002, 87s:0.0005, 88:0.0001, 98s:0.0002, T9s:0.0001, TT:0.0002, ATo:0.0002, JTs:0.0005, JJ:0.0026, QJo:0.0002, Q9s:0.0003, QTs:0.0015, QJs:0.0023, QQ:0.0014, K7s:0.0007, K8s:0.0003, K9s:0.0006, KTs:0.0005, KJs:0.0002, KK:0.6624, AKo:0.0247, A2s:0.0018, A3s:0.0004, A4s:0.0009, A5s:0.0446, A6s:0.0209, A7s:0.0006, A8s:0.1213, A9s:0.2728, ATs:0.0294, AJs:0.1065, AQs:0.0978, AKs:0.0698, AA:0.0565"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0597, 65s:0.0003, 66:0.0005, 77:0.0045, A8o:0.0234, A9o:0.0247, T8s:0.0001, TT:0.0001, ATo:0.0780, JTs:0.0001, AJo:0.0531, Q9s:0.0003, QTs:0.0238, QJs:0.0001, QQ:0.0283, AQo:0.0073, K5s:0.0131, K6s:0.0002, K7s:0.0001, K8s:0.0002, KJs:0.0001, KQs:0.0001, KK:0.2831, AKo:0.5133, A2s:0.2060, A3s:0.1467, A4s:0.7051, A5s:0.0173, A6s:0.1653, A7s:0.3024, A8s:0.0851, A9s:0.0861, ATs:0.6618, AJs:0.5085, AQs:0.7323, AKs:0.8816, AA:0.9435"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BTN:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0025, 77:0.0041, 88:0.0359, 99:0.0124, TT:0.0152, ATo:0.0001, JJ:0.0339, AJo:0.0020, QQ:0.0005, AQo:0.0478, KTs:0.0016, KQs:0.0001, KK:0.0891, AKo:0.0052, A2s:0.0046, A3s:0.0022, A4s:0.0162, A5s:0.0184, A6s:0.0047, A7s:0.0339, A8s:0.0196, A9s:0.0033, ATs:0.0114, AJs:0.0001, AQs:0.0003, AKs:0.0630, AA:0.0003"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0003, JJ:0.0001, AQo:0.0130, KK:0.0007, AKo:0.0060, A2s:0.0207, A3s:0.0103, A4s:0.0340, A5s:0.0365, A6s:0.0123, A7s:0.0631, A8s:0.0301, A9s:0.0117, ATs:0.0066, AKs:0.0727, AA:0.0785"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BTN:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0011, ATo:0.0001, J9s:0.0001, JJ:0.0005, QTs:0.0001, QJs:0.0001, QQ:0.0033, KQo:0.0001, KQs:0.0001, KK, AKo:0.0012, A2s:0.0001, A8s:0.0002, ATs:0.0001, AJs:0.0011, AQs:0.0001, AKs:0.2324, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|BTN:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0898, AKo:0.0021, AKs:0.1105, AA:0.0788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|CO:4BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0001, 99:0.0014, T8s:0.0001, TT:0.0001, JJ:0.0101, Q9s:0.0001, QJs:0.0001, QQ:0.0460, KQo:0.0001, AQo:0.0004, K6s:0.0010, K7s:0.0007, K9s:0.0001, KJs:0.0004, KK:0.2248, AKo:0.0294, A2s:0.0023, A3s:0.0171, A5s:0.0122, A6s:0.0002, A7s:0.0022, A8s:0.0003, A9s:0.0001, ATs:0.0023, AJs:0.0212, AQs:0.2159, AKs:0.0939, AA:0.0610"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0280, 77:0.0002, 88:0.0002, 99:0.0125, A9o:0.0103, T8s:0.0001, KTo:0.0001, AJo:0.0001, Q8s:0.0010, Q9s:0.0007, QTs:0.0001, QQ:0.0088, AQo:0.0435, K4s:0.0004, K6s:0.0013, K7s:0.0002, KTs:0.0311, KJs:0.0317, KK:0.0392, AKo:0.2357, A2s:0.1934, A3s:0.1986, A4s:0.0002, A5s:0.2528, A6s:0.0217, A7s:0.0059, A8s:0.0793, A9s:0.3691, ATs:0.0331, AJs:0.5524, AQs:0.3181, AKs:0.5033, AA:0.9390"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|CO:4BET@10",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0023, 77:0.0041, 88:0.0556, 99:0.0126, TT:0.0078, JJ:0.0370, QQ:0.0005, AQo:0.0616, K8s:0.0005, KTs:0.0068, KJs:0.0001, KQs:0.0001, KK:0.0853, AKo:0.0055, A2s:0.0065, A3s:0.0042, A4s:0.0020, A5s:0.0268, A6s:0.0005, A7s:0.0332, A8s:0.0015, A9s:0.0017, ATs:0.0096, AJs:0.0001, AQs:0.0003, AKs:0.0650, AA:0.0024"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "ATo:0.0006, JJ:0.0002, AJo:0.0026, AQo:0.0084, KK:0.0045, AKo:0.0057, A2s:0.0298, A3s:0.0176, A4s:0.0486, A5s:0.0625, A6s:0.0145, A7s:0.0852, A8s:0.0700, A9s:0.0225, ATs:0.0113, AKs:0.0707, AA:0.0764"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|CO:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 88:0.0004, 99:0.0002, T9s:0.0002, TT:0.0001, JJ:0.0015, Q9s:0.0001, QTs:0.0001, QJs:0.0004, QQ:0.0023, KQo:0.0001, K7s:0.0002, K8s:0.0002, K9s:0.0002, KTs:0.0001, KJs:0.0003, KQs:0.0001, KK:0.9945, AKo:0.0011, A4s:0.0006, A5s:0.0005, A6s:0.0005, A7s:0.0004, A8s:0.0004, ATs:0.0005, AJs:0.0001, AQs:0.0002, AKs:0.0249, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@5.5|CO:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0898, AKo:0.0001, AKs:0.0677, AA:0.0788"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K2o:0.0063, A2o:0.0492, 33:0.0012, K3o:0.0134, A3o:0.0398, A4o:0.0066, A5o:0.0097, 64s:0.0001, 66:0.0016, 77:0.0001, 84s:0.0025, 88:0.0081, K8o:0.0001, A8o:0.0662, K9o:0.0024, A9o:0.0036, T2s:0.0001, ATo:0.0001, J6s:0.0001, J7s:0.0001, AJo:0.0081, QQ:0.0127, K3s:0.0099, K6s:0.0333, K7s:0.0006, K8s:0.0009, K9s:0.0002, KTs:0.0008, KJs:0.0085, KK:0.0020, AKo:0.0242, A2s:0.0995, A3s:0.0752, A4s:0.1757, A5s:0.2091, A6s:0.1216, A7s:0.1695, A8s:0.2655, A9s:0.1789, ATs:0.0019, AJs:0.0759, AQs:0.5087, AKs:0.3195, AA:0.9992"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0001, A5o:0.0047, 64s:0.0001, 65s:0.0028, A9o:0.0016, K5s:0.0001, KTs:0.0102, KJs:0.0008, KK:0.9980, AKo:0.9758, A2s:0.0144, A3s:0.0097, A4s:0.0292, A5s:0.3747, A6s:0.0089, A7s:0.0134, A8s:0.0094, A9s:0.0016, ATs:0.0049, AJs:0.0019, AKs:0.6805, AA:0.0008"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K3o:0.0012, A3o:0.0373, 54s:0.0001, K5o:0.0054, A5o:0.0443, 64s:0.0001, K6o:0.0020, A6o:0.0140, 77:0.0121, A7o:0.0035, 88:0.0525, K8o:0.0031, A8o:0.0019, A9o:0.0345, TT:0.0027, ATo:0.0052, JJ:0.0001, AJo:0.0293, AQo:0.0705, K2s:0.0104, K3s:0.0186, K5s:0.0377, K6s:0.0697, K8s:0.0042, K9s:0.0165, KTs:0.0012, KJs:0.0236, KQs:0.0002, KK:0.0051, AKo:0.1059, A2s:0.0703, A3s:0.1481, A4s:0.0135, A5s:0.0305, A6s:0.0407, A7s:0.0552, A8s:0.1789, A9s:0.1570, ATs:0.1321, AJs:0.3014, AQs:0.2042, AKs:0.2635, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0002, 77:0.0002, 88:0.0001, K4s:0.0073, K6s:0.0309, K7s:0.0100, K9s:0.0013, KTs:0.0018, KJs:0.0081, KK:0.9949, AKo:0.8935, A2s:0.0284, A3s:0.0852, A4s:0.1542, A5s:0.1315, A6s:0.0200, A7s:0.1187, A8s:0.0491, A9s:0.0049, ATs:0.0048, AJs:0.0025, AQs:0.0007, AKs:0.7364"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K3o:0.0001, A3o:0.0369, A4o:0.0116, K5o:0.0111, A5o:0.0079, 66:0.0009, K6o:0.0002, A6o:0.0001, K7o:0.0002, A7o:0.0001, 88:0.0007, A8o:0.0054, 98s:0.0002, 99:0.0053, K9o:0.0002, A9o:0.0596, T8s:0.0002, TT:0.0175, ATo:0.0007, JJ:0.0001, KJo:0.0011, AJo:0.0111, QQ:0.0001, AQo:0.0428, K2s:0.0002, K3s:0.0331, K4s:0.0002, K5s:0.0183, K6s:0.0601, K7s:0.0216, K8s:0.0094, K9s:0.0592, KTs:0.0385, KJs:0.0205, KQs:0.0024, KK:0.0014, AKo:0.1037, A2s:0.1103, A3s:0.0971, A4s:0.0020, A5s:0.1489, A6s:0.2705, A7s:0.2069, A8s:0.5408, A9s:0.0170, ATs:0.0114, AJs:0.1248, AQs:0.3649, AKs:0.1497, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0004, T8s:0.0002, JJ:0.0002, QQ:0.0005, KQo:0.0001, K3s:0.0769, K4s:0.0001, K5s:0.0002, K6s:0.0061, K7s:0.0041, K8s:0.0025, K9s:0.0153, KTs:0.0082, KQs:0.0009, KK:0.9986, AKo:0.8963, A2s:0.0018, A3s:0.0001, A4s:0.2086, A5s:0.5706, A6s:0.0212, A7s:0.0221, A8s:0.0142, AJs:0.0121, AQs:0.0016, AKs:0.8501"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K3o:0.0001, A3o:0.0494, K4o:0.0014, A4o:0.0032, K5o:0.0051, A5o:0.0002, K6o:0.0086, A7o:0.0001, 88:0.0097, K8o:0.0044, A8o:0.0106, 98s:0.0026, 99:0.0029, K9o:0.0001, A9o:0.0163, KTo:0.0001, ATo:0.0415, JJ:0.0001, KJo:0.0015, AJo:0.0003, QQ:0.0041, AQo:0.0034, K2s:0.0383, K3s:0.2000, K4s:0.0133, K5s:0.0181, K6s:0.1659, K7s:0.0001, K8s:0.0108, K9s:0.1847, KTs:0.0027, KJs:0.0279, KQs:0.0068, KK:0.0034, AKo:0.0104, A2s:0.2231, A3s:0.1363, A4s:0.4530, A5s:0.1510, A6s:0.1765, A7s:0.4051, A8s:0.0455, A9s:0.2041, ATs:0.0116, AJs:0.1394, AQs:0.7186, AKs:0.9517, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 75s:0.0003, 77:0.0001, 86s:0.0001, 96s:0.0001, 99:0.0001, JJ:0.0004, K4s:0.0003, K8s:0.0001, K9s:0.0228, KTs:0.0159, KJs:0.0005, KQs:0.0001, KK:0.9966, AKo:0.9896, A2s:0.1483, A3s:0.3247, A4s:0.1337, A5s:0.0528, A6s:0.0008, A7s:0.0010, A8s:0.0065, A9s:0.0003, AJs:0.0545, AQs:0.0002, AKs:0.0483"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0708, 66:0.4885, 77:0.2436, 88:0.8062, 99:0.1851, TT:0.0545, JJ:0.6774, QQ:0.9962, AQo:0.4154, K5s:0.0057, KTs:0.1593, KJs:0.0048, KQs:0.3013, KK:0.2791, A3s:0.0376, A4s:0.0255, A5s:0.2123, A7s:0.0007, A8s:0.0774, A9s:0.1262, ATs:0.6668, AJs:0.5533, AQs:0.9880"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "44:0.0001, A5o:0.0005, 66:0.0004, 77:0.0090, 88:0.0053, A8o:0.0007, 98s:0.0003, 99:0.0421, A9o:0.0073, TT:0.0115, KTo:0.0010, ATo:0.0018, JJ:0.0586, AJo:0.0024, AQo:0.4246, K4s:0.0142, K5s:0.0348, K6s:0.0099, K7s:0.0087, K8s:0.0007, K9s:0.0628, KTs:0.0733, KJs:0.1542, KQs:0.0017, KK:0.0003, AKo:0.0022, A2s:0.2468, A3s:0.1060, A4s:0.0116, A5s:0.0232, A6s:0.2358, A7s:0.2202, A8s:0.4838, A9s:0.2830, ATs:0.0820, AJs:0.1347, AQs:0.0117, AKs:0.3366, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1514, 66:0.0008, 76s:0.0001, 77:0.1566, 88:0.0027, 99:0.4797, TT:0.2206, ATo:0.0001, JJ:0.0464, KJo:0.0001, K5s:0.0001, K6s:0.0027, K7s:0.0006, K8s:0.0001, K9s:0.0290, KTs:0.1552, KJs:0.0817, KQs:0.0017, KK:0.7206, AKo:0.9978, A2s:0.1947, A3s:0.4356, A4s:0.7652, A5s:0.5622, A6s:0.4446, A7s:0.4868, A8s:0.0761, A9s:0.3033, ATs:0.0595, AJs:0.1689, AQs:0.0002, AKs:0.6634"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|LJ:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0015, 77:0.0114, 88:0.0114, 99:0.0327, ATo:0.0011, JJ:0.0004, AJo:0.0047, AQo:0.2242, K7s:0.0006, KTs:0.0068, KK:0.2582, AKo:0.0162, A2s:0.0171, A3s:0.0546, A4s:0.0410, A5s:0.0277, A6s:0.0422, A7s:0.1164, A8s:0.2214, A9s:0.0092, ATs:0.0011, AKs:0.0740, AA:0.1406"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AJo:0.0035, KK:0.0106, AKo:0.0809, A2s:0.4364, A3s:0.5834, A4s:0.3697, A5s:0.0587, A6s:0.0095, A7s:0.0689, A8s:0.0873, A9s:0.0001, ATs:0.0002, AKs:0.1759, AA:0.3999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|LJ:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, KK:0.2688, AKo:0.0886, AKs:0.2480, AA:0.5405"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0002, 66:0.0395, J9s:0.0001, JJ:0.0006, QQ:0.0187, K7s:0.0001, KTs:0.0001, KK:0.5142, AKo:0.0157, A3s:0.2470, A5s:0.0385, A7s:0.0001, A9s:0.1732, ATs:0.0146, AJs:0.0008, AQs:0.0546, AKs:0.0666, AA:0.2039"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 88:0.0007, ATo:0.0186, J9s:0.0002, JTs:0.0030, QQ:0.0001, AQo:0.0056, K4s:0.0001, K6s:0.0016, KQs:0.0007, KK:0.0002, AKo:0.9513, A2s:0.2816, A3s:0.0542, A4s:0.2036, A5s:0.0749, A6s:0.0812, A7s:0.0138, A8s:0.4273, A9s:0.0056, ATs:0.2787, AJs:0.6834, AQs:0.1734, AKs:0.9331, AA:0.7961"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0015, 77:0.0114, 88:0.0114, 99:0.0323, ATo:0.0004, JJ:0.0004, AJo:0.0003, AQo:0.1504, KK:0.2591, A2s:0.0022, A3s:0.0258, A4s:0.1109, A5s:0.0011, A6s:0.1185, A7s:0.1969, A8s:0.2071, A9s:0.0175, ATs:0.0008, AA:0.1086"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0011, AQo:0.0001, KK:0.0096, AKo:0.0971, A2s:0.1322, A3s:0.3646, A4s:0.2278, A5s:0.0715, A6s:0.0554, A7s:0.0370, A8s:0.1690, A9s:0.0033, ATs:0.0004, AKs:0.2499, AA:0.4319"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KJs:0.0001, KK:0.9998, A2s:0.0001, A8s:0.0001, AQs:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2688, AKo:0.0155, AKs:0.2136, AA:0.5405"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|SB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0001, QQ:0.0001, KK:0.2380, A3s:0.0001, A4s:0.0001, A5s:0.0001, A6s:0.0002, A8s:0.0038, A9s:0.0163, ATs:0.0006, AJs:0.0007, AQs:0.1511, AKs:0.4431, AA:0.0555"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0001, 77:0.0002, 98s:0.0028, 99:0.0034, A9o:0.0002, T8s:0.0005, T9s:0.0016, TT:0.0004, JJ:0.0003, Q8s:0.0001, QTs:0.0008, QQ:0.0001, AQo:0.0005, K7s:0.0007, K8s:0.0008, KQs:0.0001, KK:0.0014, AKo:0.9710, A2s:0.0998, A3s:0.4322, A4s:0.0746, A5s:0.0925, A6s:0.0230, A7s:0.0034, A8s:0.0814, A9s:0.0028, ATs:0.1248, AJs:0.0031, AQs:0.1232, AKs:0.5339, AA:0.9445"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|SB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0001, 66:0.0015, 77:0.0112, 88:0.0112, 99:0.0320, ATo:0.0056, JJ:0.0004, AJo:0.0147, AQo:0.1326, K7s:0.0002, KTs:0.0048, KK:0.2669, AKo:0.0060, A2s:0.1643, A4s:0.0811, A5s:0.0509, A6s:0.1256, A7s:0.0729, A8s:0.2118, A9s:0.0177, ATs:0.0011, AKs:0.0463, AA:0.2354"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0001, 77:0.0001, 88:0.0001, 99:0.0003, ATo:0.0002, AJo:0.0002, AQo:0.0003, KK:0.0012, AKo:0.0911, A2s:0.1898, A3s:0.2666, A4s:0.1053, A5s:0.0230, A6s:0.1870, A7s:0.1343, A8s:0.1125, A9s:0.0007, ATs:0.0002, AKs:0.2036, AA:0.3051"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, JJ:0.0001, QQ:0.0003, K7s:0.0001, KJs:0.0001, KK, AKo:0.0004, A4s:0.0001, ATs:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2688, AKo:0.0076, AKs:0.2266, AA:0.5405"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BTN:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "76s:0.0003, 88:0.0004, 99:0.0001, T9s:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0031, Q9s:0.0001, QTs:0.0006, QJs:0.0004, QQ:0.0006, AQo:0.0011, K8s:0.0002, K9s:0.0001, KTs:0.0004, KQs:0.0001, KK:0.0444, AKo:0.1453, A3s:0.0003, A5s:0.0020, A6s:0.0001, A9s:0.3963, ATs:0.0015, AJs:0.0161, AQs:0.1960, AKs:0.0107, AA:0.5017"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0002, 65s:0.0001, 66:0.0001, 76s:0.0004, 87s:0.0031, 88:0.0002, A8o:0.0029, 98s:0.0001, 99:0.0035, A9o:0.0006, T9s:0.0001, TT:0.0009, ATo:0.0109, J9s:0.0002, JTs:0.0005, JJ:0.0005, AJo:0.0001, Q9s:0.0002, QTs:0.0001, QJs:0.0001, QQ:0.0026, AQo:0.0002, K5s:0.0001, K7s:0.0001, K8s:0.0006, KTs:0.0012, KJs:0.0003, KK:0.0280, AKo:0.4909, A2s:0.0081, A3s:0.0308, A4s:0.0157, A5s:0.0664, A6s:0.0544, A7s:0.0006, A8s:0.1848, A9s:0.0001, ATs:0.0047, AJs:0.0117, AQs:0.0223, AKs:0.4651, AA:0.4983"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BTN:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0001, 66:0.0015, 77:0.0110, 88:0.0111, 99:0.0318, A9o:0.0001, ATo:0.0004, JJ:0.0004, AJo:0.0112, AQo:0.1263, KTs:0.0001, KK:0.2527, AKo:0.0057, A2s:0.0038, A3s:0.0667, A4s:0.0039, A5s:0.0074, A6s:0.1172, A7s:0.0292, A8s:0.2024, A9s:0.0138, ATs:0.0008, AKs:0.0266, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0030, A5o:0.0028, A6o:0.0001, 77:0.0004, A7o:0.0008, 88:0.0002, 99:0.0006, A9o:0.0006, ATo:0.0029, AJo:0.0030, AQo:0.0032, AKo:0.0913, A2s:0.2871, A3s:0.2775, A4s:0.2275, A5s:0.0326, A6s:0.1274, A7s:0.1837, A8s:0.1453, A9s:0.0035, ATs:0.0004, AKs:0.2233, AA:0.5404"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BTN:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0002, QQ:0.0013, KK, A2s:0.0001, AJs:0.0001, AKs:0.0298, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|BTN:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.2688, AKo:0.0314, AKs:0.2251, AA:0.5405"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|CO:4BET@13.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "98s:0.0001, TT:0.0001, QJs:0.0003, QQ:0.0167, K5s:0.0001, K9s:0.0001, KK:0.0788, AKo:0.0495, A3s:0.0004, A4s:0.0001, A6s:0.0002, A7s:0.0171, A8s:0.0175, A9s:0.0001, ATs:0.0002, AJs:0.2484, AKs:0.2405, AA:0.0777"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0003, 87s:0.0001, T8s:0.0001, AJo:0.0072, Q9s:0.0001, QTs:0.0004, QJs:0.0002, QQ:0.0001, AQo:0.0071, K7s:0.0003, KK:0.0028, AKo:0.7600, A2s:0.0023, A3s:0.1726, A4s:0.0005, A5s:0.0017, A6s:0.0567, A7s:0.0071, A8s:0.7625, ATs:0.0054, AJs:0.2431, AQs:0.0015, AKs:0.5531, AA:0.9223"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|CO:4BET@13.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A5o:0.0001, 66:0.0015, 77:0.0114, 88:0.0114, 99:0.0326, A9o:0.0001, ATo:0.0005, JJ:0.0004, AJo:0.0041, AQo:0.0752, KTs:0.0001, KK:0.2654, AKo:0.0183, A2s:0.0009, A3s:0.0161, A4s:0.0138, A5s:0.0139, A6s:0.0008, A7s:0.0323, A8s:0.2649, A9s:0.0226, ATs:0.0006, AKs:0.0205, AA:0.0449"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, ATo:0.0011, AJo:0.0001, AQo:0.0006, KK:0.0030, AKo:0.0782, A2s:0.4367, A3s:0.3676, A4s:0.2821, A5s:0.0678, A6s:0.1351, A7s:0.1224, A8s:0.1311, A9s:0.0043, ATs:0.0003, AKs:0.2292, AA:0.4956"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|CO:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, TT:0.0002, JJ:0.0009, QQ:0.0002, KK:0.9918, A2s:0.0001, A7s:0.0001, A9s:0.0001, AQs:0.0001, AKs:0.0264, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@8|CO:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, KK:0.2688, AKo:0.0089, AKs:0.2449, AA:0.5405"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0071, K3o:0.0021, A3o:0.0014, K4o:0.0070, A5o:0.0067, 63s:0.0002, 66:0.0008, K6o:0.0073, A6o:0.0384, 77:0.0022, K7o:0.0357, A7o:0.0508, 88:0.0273, A8o:0.0002, 99:0.0380, A9o:0.0010, TT:0.0555, ATo:0.0058, J3s:0.0003, JTs:0.0031, JJ:0.1412, AJo:0.0054, QJs:0.0003, QQ:0.0657, AQo:0.0047, K3s:0.0842, K4s:0.0433, K5s:0.0251, K6s:0.0498, K7s:0.0065, K8s:0.0138, K9s:0.0261, KTs:0.0062, KJs:0.0821, KQs:0.0416, KK:0.2009, AKo:0.2225, A2s:0.1956, A3s:0.0012, A4s:0.1556, A5s:0.0114, A6s:0.0558, A7s:0.1367, A8s:0.0968, A9s:0.0019, ATs:0.0500, AJs:0.1225, AQs:0.0789, AKs:0.2271, AA:0.9993"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0004, 66:0.0001, 72s:0.0003, 74s:0.0003, 99:0.0003, K3s:0.0006, K4s:0.0005, K7s:0.0004, K8s:0.0007, K9s:0.0004, KTs:0.1191, KJs:0.0002, KK:0.7991, AKo:0.7773, A2s:0.3671, A3s:0.0218, A4s:0.0031, A5s:0.0654, A6s:0.0103, A7s:0.2244, A8s:0.0036, A9s:0.0460, ATs:0.0001, AJs:0.0011, AQs:0.0002, AKs:0.7729, AA:0.0007"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0079, A3o:0.0010, A4o:0.0039, A5o:0.0056, K6o:0.0006, A6o:0.0145, A7o:0.0235, 88:0.0191, K8o:0.0013, A8o:0.0726, K9o:0.0071, A9o:0.0207, KTo:0.0183, ATo:0.0155, JJ:0.0007, AJo:0.0020, QQ:0.0532, AQo:0.0752, K2s:0.0956, K3s:0.0049, K5s:0.0458, K6s:0.0180, K7s:0.0770, K8s:0.1098, K9s:0.1284, KTs:0.0121, KJs:0.0316, KQs:0.0001, KK:0.0004, AKo:0.1607, A2s:0.3879, A3s:0.0009, A4s:0.0048, A5s:0.0599, A6s:0.0030, A7s:0.1462, A9s:0.0416, ATs:0.0026, AJs:0.0542, AQs:0.0075, AKs:0.1333, AA:0.9993"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "75s:0.0002, 76s:0.0002, 97s:0.0001, 99:0.0001, TT:0.0001, J5s:0.0002, JJ:0.0008, Q8s:0.0001, QTs:0.0001, KQo:0.0002, K4s:0.0004, K5s:0.0002, K6s:0.0007, K8s:0.0001, K9s:0.0082, KTs:0.0475, KJs:0.0116, KQs:0.0006, KK:0.9996, AKo:0.8391, A2s:0.0107, A3s:0.0478, A4s:0.2165, A5s:0.2278, A6s:0.0033, A7s:0.2696, A8s:0.0095, A9s:0.1405, ATs:0.0003, AJs:0.0001, AQs:0.0002, AKs:0.8666, AA:0.0007"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0228, A2o:0.0186, A3o:0.0023, K4o:0.0013, A4o:0.0021, K5o:0.0005, A5o:0.0161, K6o:0.0188, A6o:0.0071, K7o:0.1200, A7o:0.0504, 88:0.0001, K8o:0.0078, A8o:0.0090, 99:0.0438, K9o:0.0113, A9o:0.0778, TT:0.0029, KTo:0.0376, ATo:0.0305, JJ:0.0026, KJo:0.0235, AJo:0.0008, QQ:0.0678, KQo:0.0004, AQo:0.0801, K2s:0.0210, K3s:0.0298, K4s:0.2978, K5s:0.0033, K6s:0.1255, K7s:0.0389, K8s:0.0136, K9s:0.0122, KTs:0.0107, KJs:0.1005, KQs:0.3350, KK:0.2562, AKo:0.3594, A2s:0.0743, A3s:0.0192, A4s:0.0383, A5s:0.0198, A6s:0.1378, A7s:0.1391, A8s:0.2736, A9s:0.1982, ATs:0.0758, AJs:0.0520, AQs:0.2819, AKs:0.5692, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 53s:0.0001, 65s:0.0001, 66:0.0001, 87s:0.0001, TT:0.0002, JJ:0.0009, QJs:0.0001, QQ:0.0014, AQo:0.0002, K2s:0.0002, K4s:0.0011, K5s:0.0141, K6s:0.0002, K7s:0.0001, K8s:0.0024, K9s:0.0005, KTs:0.0018, KJs:0.0030, KQs:0.0009, KK:0.7438, AKo:0.6405, A2s:0.0345, A3s:0.0438, A4s:0.1183, A5s:0.0020, A6s:0.0209, A7s:0.0599, A8s:0.0876, A9s:0.0102, ATs:0.0465, AJs:0.0081, AQs:0.0460, AKs:0.4308"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "K2o:0.0013, A2o:0.0005, K3o:0.0028, A3o:0.0070, A4o:0.0015, A5o:0.0015, 64s:0.0001, K6o:0.0029, K7o:0.1085, A7o:0.0028, A8o:0.0082, 95s:0.0007, 99:0.0002, A9o:0.0033, TT:0.0192, KTo:0.0053, ATo:0.0031, JJ:0.0002, KJo:0.0123, AJo:0.0025, Q2s:0.0003, QQ:0.0002, KQo:0.0336, AQo:0.1171, K2s:0.0613, K3s:0.0070, K4s:0.1744, K5s:0.0525, K6s:0.0385, K7s:0.0634, K8s:0.0431, K9s:0.2823, KTs:0.0503, KJs:0.2239, KQs:0.0772, KK:0.0825, AKo:0.3107, A2s:0.0256, A3s:0.0156, A4s:0.0244, A5s:0.0176, A6s:0.0054, A7s:0.0114, A8s:0.1223, A9s:0.0366, ATs:0.0600, AJs:0.1133, AQs:0.2821, AKs:0.1100, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "63s:0.0001, 64s:0.0002, 66:0.0001, 76s:0.0001, 98s:0.0019, TT:0.0049, JJ:0.0001, K5s:0.0006, K8s:0.0001, K9s:0.0274, KTs:0.0217, KQs:0.0002, KK:0.9175, AKo:0.6890, A2s:0.1425, A3s:0.1017, A4s:0.0001, A5s:0.0528, A6s:0.0457, A7s:0.0094, A9s:0.0142, ATs:0.1273, AJs:0.0002, AQs:0.1137, AKs:0.8900"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 17.7bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0475, 66:0.1897, 77:0.1602, 88:0.2342, 99:0.0677, TT:0.0063, JJ:0.0311, QQ:0.8341, KTs:0.0326, KJs:0.0002, KQs:0.0094, KK:0.0334, A5s:0.0008, A6s:0.0144, A7s:0.0433, A8s:0.1439, A9s:0.2107, ATs:0.2967, AJs:0.2637, AQs:0.9105"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0027, 66:0.0005, 76s:0.0069, 77:0.0147, 88:0.0035, A8o:0.0018, 99:0.0054, A9o:0.0151, KTo:0.0205, ATo:0.0147, JJ:0.0070, KJo:0.0143, AJo:0.0556, QQ:0.0781, KQo:0.0102, AQo:0.2128, K4s:0.0107, K5s:0.0009, K6s:0.0115, K7s:0.1803, K8s:0.1208, K9s:0.0030, KTs:0.1702, KJs:0.1193, KQs:0.0964, AKo:0.0030, A2s:0.1884, A3s:0.0004, A4s:0.0014, A5s:0.0121, A6s:0.0319, A7s:0.1251, A8s:0.0976, A9s:0.0807, ATs:0.0213, AJs:0.1610, AQs:0.0561, AKs:0.1930, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1006, 66:0.1016, 77:0.0922, 88:0.1123, 99:0.3985, TT:0.3716, KTo:0.0001, JJ:0.1997, QQ:0.0027, K5s:0.0002, K6s:0.0032, K7s:0.0011, K9s:0.0059, KTs:0.2540, KJs:0.2034, KQs:0.0017, KK:0.9666, AKo:0.9970, A2s:0.3294, A3s:0.2406, A4s:0.1700, A5s:0.3940, A6s:0.4585, A7s:0.1552, A8s:0.1751, A9s:0.2330, ATs:0.2469, AJs:0.2321, AQs:0.0243, AKs:0.8070"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|LJ:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "AJo:0.0008, AQo:0.0407, KK:0.1504, AKo:0.0739, A2s:0.0439, A3s:0.0619, A4s:0.0240, A5s:0.0023, A6s:0.0614, A7s:0.0660, A8s:0.0359, A9s:0.0031, AKs:0.0179, AA:0.0199"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0063, KK:0.0183, AKo:0.1271, A2s:0.0601, A3s:0.1011, A4s:0.0553, A5s:0.0038, A6s:0.0380, A7s:0.0449, A8s:0.0349, A9s:0.0010, AJs:0.0001, AKs:0.0347, AA:0.3608"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|LJ:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1688, AKo:0.0956, AKs:0.0526, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "77:0.0001, T8s:0.0001, JJ:0.0015, QJs:0.0001, K9s:0.0001, KK:0.1408, AKo:0.0384, A4s:0.0004, A5s:0.0001, A6s:0.0012, A7s:0.0002, A8s:0.0002, ATs:0.0001, AJs:0.0002, AQs:0.0018, AKs:0.0002, AA:0.1082"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0003, A5o:0.0709, 65s:0.0006, 66:0.0075, 76s:0.0011, 87s:0.0004, 88:0.1776, A8o:0.0404, A9o:0.0401, T9s:0.0014, TT:0.0495, ATo:0.0476, J9s:0.0003, JJ:0.0024, AJo:0.0393, QJs:0.0001, QQ:0.0014, AQo:0.0381, KTs:0.0003, KK:0.1665, AKo:0.6892, A2s:0.1354, A3s:0.1775, A4s:0.2220, A5s:0.4816, A6s:0.0051, A7s:0.1756, A8s:0.1794, A9s:0.4293, ATs:0.1648, AJs:0.2281, AQs:0.2185, AKs:0.9501, AA:0.8918"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0001, A5o:0.0004, A8o:0.0001, A9o:0.0008, ATo:0.0009, AJo:0.0005, AQo:0.0421, KK:0.1664, AKo:0.0107, A2s:0.0404, A3s:0.1026, A4s:0.0315, A5s:0.0052, A6s:0.0500, A7s:0.0942, A8s:0.1165, A9s:0.0025, ATs:0.0001, AJs:0.0001, AKs:0.0026, AA:0.0351"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0013, A4o:0.0012, A5o:0.0020, A6o:0.0012, A7o:0.0004, A8o:0.0001, A9o:0.0004, ATo:0.0003, AJo:0.0002, AQo:0.0005, KK:0.0008, AKo:0.1881, A2s:0.0224, A3s:0.0350, A4s:0.0270, A5s:0.0015, A6s:0.0138, A7s:0.0426, A8s:0.0145, A9s:0.0002, AKs:0.0500, AA:0.3456"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0005, 88:0.0001, TT:0.0001, ATo:0.0001, QQ:0.0004, KQo:0.0001, K6s:0.0001, KTs:0.0001, KK:0.9952, A2s:0.0013, A3s:0.0005, A4s:0.0001, A9s:0.0011, AQs:0.0009, AKs:0.0017, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1688, AKo:0.1027, AKs:0.0524, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0001, 99:0.0001, JJ:0.0001, QTs:0.0003, QJs:0.0001, QQ:0.0133, K9s:0.0001, KJs:0.0001, KK:0.7291, AKo:0.2585, A3s:0.0009, A6s:0.0026, A7s:0.0001, AJs:0.0001, AKs:0.0055, AA:0.0633"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0372, A5o:0.0705, 66:0.0664, 77:0.1139, 87s:0.0022, 88:0.0995, A8o:0.0307, 99:0.0004, A9o:0.0291, T8s:0.0466, T9s:0.0001, TT:0.0599, ATo:0.0508, J9s:0.0009, JJ:0.0881, AJo:0.0550, QTs:0.0005, QJs:0.0004, QQ:0.0026, AQo:0.0013, K6s:0.0002, K9s:0.0006, KK:0.1285, AKo:0.5614, A2s:0.1484, A3s:0.0879, A4s:0.1471, A5s:0.1133, A6s:0.1240, A7s:0.0765, A8s:0.1235, A9s:0.0217, ATs:0.1030, AJs:0.0979, AQs:0.0512, AKs:0.9849, AA:0.9366"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A4o:0.0002, A5o:0.0011, A6o:0.0003, A7o:0.0003, A8o:0.0001, A9o:0.0003, ATo:0.0006, AJo:0.0004, AQo:0.0295, KK:0.1190, AKo:0.0189, A2s:0.0533, A3s:0.0350, A4s:0.0719, A5s:0.0019, A6s:0.0262, A7s:0.1315, A8s:0.0532, A9s:0.0077, ATs:0.0001, AJs:0.0001, AKs:0.0095, AA:0.1107"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0019, A4o:0.0007, A5o:0.0002, A6o:0.0013, AJo:0.0001, KK:0.0487, AKo:0.1822, A2s:0.0162, A3s:0.0289, A4s:0.0175, A5s:0.0023, A6s:0.0383, A7s:0.0447, A8s:0.0040, A9s:0.0005, AKs:0.0431, AA:0.2700"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 99:0.0002, ATo:0.0001, JJ:0.0013, AJo:0.0001, QJs:0.0002, QQ:0.0117, AQo:0.0001, K8s:0.0004, K9s:0.0001, KJs:0.0001, KQs:0.0001, KK:0.9998, AKo:0.0001, A4s:0.0001, A5s:0.0001, A7s:0.0001, A8s:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1688, AKo:0.1085, AKs:0.0524, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "55:0.0002, 66:0.0001, 77:0.0001, 87s:0.0001, 88:0.0004, A9o:0.0002, T8s:0.0001, T9s:0.0002, TT:0.0001, J9s:0.0001, JJ:0.0002, QTs:0.0003, QJs:0.0001, AQo:0.0001, KK:0.1510, AKo:0.0017, A2s:0.0513, A3s:0.0005, A4s:0.0004, A6s:0.0016, A8s:0.0028, A9s:0.0340, ATs:0.1097, AJs:0.0291, AQs:0.5892, AKs:0.0097, AA:0.4813"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 87s:0.0014, 88:0.0002, T8s:0.0002, TT:0.0048, J9s:0.0002, JTs:0.0002, JJ:0.0001, Q9s:0.0005, QTs:0.0003, QJs:0.0001, QQ:0.1024, AQo:0.0032, K6s:0.0001, K8s:0.0002, KQs:0.0008, KK:0.0325, AKo:0.7743, A2s:0.1320, A3s:0.0689, A4s:0.0408, A6s:0.0386, A8s:0.0100, A9s:0.0060, ATs:0.0863, AJs:0.0841, AQs:0.0193, AKs:0.7027, AA:0.5187"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A2o:0.0006, A3o:0.0040, A4o:0.0030, A5o:0.0116, A6o:0.0021, A7o:0.0007, A8o:0.0004, A9o:0.0010, ATo:0.0091, AJo:0.0052, KQo:0.0004, AQo:0.0415, K9s:0.0001, KK:0.0876, AKo:0.0657, A2s:0.0571, A3s:0.0702, A4s:0.0504, A5s:0.0046, A6s:0.1596, A7s:0.2671, A8s:0.1183, A9s:0.0136, ATs:0.0001, AJs:0.0001, AKs:0.0157, AA:0.0014"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0029, A4o:0.0011, A5o:0.0021, A6o:0.0006, A7o:0.0005, A8o:0.0003, ATo:0.0003, AJo:0.0002, AQo:0.0002, KK:0.0785, AKo:0.1337, A2s:0.0160, A3s:0.0528, A4s:0.0286, A5s:0.0021, A6s:0.0282, A7s:0.0358, A8s:0.0064, A9s:0.0007, AKs:0.0367, AA:0.3793"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 77:0.0001, 88:0.0010, 99:0.0017, TT:0.0024, JJ:0.0024, QTs:0.0002, QJs:0.0002, QQ:0.0018, K5s:0.0001, K9s:0.0001, KJs:0.0003, KQs:0.0001, KK, AKo:0.0011, A2s:0.0001, A3s:0.0002, A9s:0.0001, AJs:0.0001, AQs:0.0006, AKs:0.0053, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1688, AKo:0.0982, A3s:0.0001, AKs:0.0424, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@17.7",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "66:0.0001, 99:0.0002, T9s:0.0003, TT:0.0002, ATo:0.0001, J9s:0.0007, JJ:0.0064, QTs:0.0005, QQ:0.0048, KQo:0.0001, AQo:0.0002, KJs:0.0001, KK:0.0733, AKo:0.0610, A2s:0.1205, A3s:0.0715, A4s:0.0002, A5s:0.0002, A6s:0.0001, A7s:0.0007, AJs:0.0071, AQs:0.0054, AKs:0.2043, AA:0.4956"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.1007, A5o:0.0255, 66:0.0121, 77:0.0642, 88:0.1102, A8o:0.0325, 99:0.0822, A9o:0.0510, TT:0.1523, ATo:0.1945, JJ:0.0409, AJo:0.0336, QTs:0.0001, QQ:0.1937, AQo:0.1827, K5s:0.0002, KJs:0.0007, KK:0.0511, AKo:0.6326, A2s:0.2845, A3s:0.2289, A4s:0.3259, A5s:0.1422, A6s:0.0766, A7s:0.0478, A8s:0.0216, A9s:0.1794, ATs:0.2684, AJs:0.2030, AQs:0.3376, AKs:0.7412, AA:0.5044"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@17.7",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
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
        "range": "A9o:0.0007, ATo:0.0012, AJo:0.0029, KQo:0.0009, AQo:0.0231, KK:0.0626, AKo:0.0648, A2s:0.0059, A3s:0.0101, A4s:0.0226, A5s:0.0016, A6s:0.0511, A7s:0.0711, A8s:0.0095, A9s:0.0060, ATs:0.0001, AJs:0.0001, AKs:0.0178"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0019, A4o:0.0014, A5o:0.0020, A6o:0.0005, A7o:0.0001, A8o:0.0001, A9o:0.0010, ATo:0.0010, AJo:0.0011, AQo:0.0012, KK:0.1027, AKo:0.1316, A2s:0.0270, A3s:0.0349, A4s:0.0270, A5s:0.0018, A6s:0.0155, A7s:0.0241, A8s:0.0130, A9s:0.0013, AKs:0.0348, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0015, JJ:0.0010, QJs:0.0001, QQ:0.0027, KJs:0.0010, KK:0.9793, A3s:0.0001, A6s:0.0003, A7s:0.0004, A8s:0.0003, ATs:0.0001, AJs:0.0003, AQs:0.0006, AKs:0.0401, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@53.32",
    "heroPos": "HJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1688, AKo:0.0773, AKs:0.0451, AA:0.3807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32",
    "heroPos": "CO",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0007, 52o:0.0012, 62o:0.0003, 72o:0.0031, 82o:0.0008, Q2o:0.0010, A2o:0.0036, 33:0.0019, 53o:0.0018, 63o:0.0002, 73o:0.0004, 93o:0.0004, J3o:0.0004, Q3o:0.0004, K3o:0.0001, A3o:0.0007, 44:0.0059, 54o:0.0004, 74o:0.0005, 84o:0.0004, Q4o:0.0008, K4o:0.0047, A4o:0.0004, 54s:0.0147, 55:0.0012, 85o:0.0003, T5o:0.0002, Q5o:0.0001, A5o:0.0013, 63s:0.0210, 64s:0.0848, 66:0.0038, K6o:0.0005, A6o:0.0023, 74s:0.0009, 75s:0.0049, 76s:0.0046, 77:0.2782, T7o:0.0006, Q7o:0.0007, K7o:0.0026, A7o:0.0005, 83s:0.0022, 85s:0.0042, 86s:0.0011, 87s:0.0091, 88:0.0025, T8o:0.0003, J8o:0.0002, A8o:0.0030, 92s:0.0091, 93s:0.0098, 94s:0.0059, 95s:0.0035, 98s:0.0041, T9o:0.0007, K9o:0.0008, A9o:0.0023, T3s:0.0179, T4s:0.0024, T5s:0.0921, T7s:0.0063, T8s:0.0299, TT:0.4948, QTo:0.0006, KTo:0.0023, ATo:0.0019, J5s:0.0195, J6s:0.0069, J7s:0.0123, J8s:0.0099, J9s:0.0027, JTs:0.0020, JJ:0.5776, QJo:0.0010, KJo:0.0005, AJo:0.0004, Q2s:0.0021, Q3s:0.0035, Q4s:0.0036, Q5s:0.0042, Q6s:0.0112, Q7s:0.0052, Q8s:0.0061, Q9s:0.0051, QTs:0.0058, QQ:0.5346, KQo:0.0014, AQo:0.0016, K5s:0.0129, K8s:0.2955, K9s:0.2270, KTs:0.1114, KJs:0.0270, KQs:0.0081, KK:0.8865, AKo:0.2167, A2s:0.0081, A3s:0.0164, A7s:0.1210, A8s:0.0021, A9s:0.0354, ATs:0.1337, AJs:0.0019, AQs:0.2996, AKs:0.6874, AA:0.8894"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32",
    "heroPos": "BTN",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0077, 62o:0.0002, 82o:0.0003, T2o:0.0007, Q2o:0.0003, K2o:0.0021, A2o:0.0009, 32s:0.0173, 33:0.0189, 43o:0.0005, 63o:0.0003, 73o:0.0002, Q3o:0.0030, A3o:0.0003, 44:0.0031, 54o:0.0009, 64o:0.0008, 74o:0.0004, 94o:0.0038, T4o:0.0003, A4o:0.0005, 65o:0.0002, 75o:0.0003, 95o:0.0011, T5o:0.0009, Q5o:0.0022, K5o:0.0017, A5o:0.0018, 65s:0.0032, 66:0.0034, 76o:0.0005, T6o:0.0003, J6o:0.0010, K6o:0.0031, A6o:0.0019, 73s:0.0020, 74s:0.0021, 75s:0.0039, 77:0.0044, 87o:0.0004, J7o:0.0003, Q7o:0.0002, A7o:0.0011, 82s:0.0117, 83s:0.0016, 86s:0.0012, 88:0.4424, T8o:0.0029, J8o:0.0008, Q8o:0.0004, K8o:0.0010, A8o:0.0013, 95s:0.0106, 97s:0.0220, 99:0.0036, T9o:0.0007, J9o:0.0001, Q9o:0.0004, T2s:0.0012, T3s:0.0031, T4s:0.0215, T5s:0.0017, T6s:0.0006, T7s:0.0016, T8s:0.0002, TT:0.0037, JTo:0.0003, KTo:0.0006, ATo:0.0012, J5s:0.0014, J6s:0.0116, J9s:0.0073, JTs:0.0005, JJ:0.2384, QJo:0.0015, KJo:0.0002, AJo:0.0034, Q2s:0.0242, Q3s:0.0023, Q5s:0.0703, Q7s:0.0021, Q8s:0.0067, Q9s:0.0735, QTs:0.0030, QJs:0.0017, QQ:0.0601, KQo:0.0010, K2s:0.0031, K3s:0.0034, K4s:0.1573, K7s:0.0801, K8s:0.3177, KTs:0.0155, KJs:0.0050, KQs:0.0016, KK:0.8162, A3s:0.0278, A4s:0.0436, A5s:0.0211, A6s:0.0424, A9s:0.0086, ATs:0.1461, AJs:0.0737, AKs:0.0891, AA:0.9901"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32",
    "heroPos": "SB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42o:0.0068, 52o:0.0004, 82o:0.0009, 92o:0.0006, T2o:0.0005, J2o:0.0001, Q2o:0.0016, K2o:0.0001, A2o:0.0007, 33:0.0019, 83o:0.0002, 93o:0.0008, J3o:0.0007, A3o:0.0036, 43s:0.0015, 44:0.0674, 54o:0.0019, 64o:0.0002, 74o:0.0007, Q4o:0.0033, K4o:0.0001, A4o:0.0014, 53s:0.0077, 54s:0.0097, 55:0.0045, 65o:0.0003, 75o:0.0008, 85o:0.0021, T5o:0.0004, J5o:0.0009, Q5o:0.0006, K5o:0.0006, A5o:0.0003, 62s:0.0088, 63s:0.0125, 66:0.0082, 96o:0.0007, T6o:0.0004, K6o:0.0007, A6o:0.0002, 73s:0.0085, 75s:0.0032, 77:0.1480, 87o:0.0010, 97o:0.0006, K7o:0.0007, 82s:0.0107, 85s:0.0112, 86s:0.0251, 88:0.0102, T8o:0.0010, J8o:0.0003, K8o:0.0006, A8o:0.0003, 93s:0.0016, 94s:0.0033, 97s:0.0037, 98s:0.0042, 99:0.5777, J9o:0.0007, Q9o:0.0008, A9o:0.0009, T2s:0.0028, T5s:0.0074, T6s:0.0007, T8s:0.0224, TT:0.4258, JTo:0.0009, QTo:0.0004, KTo:0.0036, J2s:0.0063, J3s:0.0078, J5s:0.0038, J6s:0.0082, J8s:0.0073, JTs:0.0028, JJ:0.1016, KJo:0.0020, AJo:0.0004, Q2s:0.0029, Q3s:0.0020, Q6s:0.0184, Q7s:0.1637, Q9s:0.2837, QTs:0.0189, QJs:0.2897, QQ:0.5627, KQo:0.0002, AQo:0.1291, K2s:0.0083, K3s:0.0015, K5s:0.0422, K6s:0.0078, K7s:0.0009, K9s:0.0051, KJs:0.0098, KK, AKo:0.4844, A3s:0.3810, A4s:0.5278, A6s:0.0014, A8s:0.0308, A9s:0.0574, ATs:0.0358, AJs:0.0239, AQs:0.0437, AKs:0.4849, AA:0.9941"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32",
    "heroPos": "BB",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0009, 42o:0.0002, 72o:0.0029, 82o:0.0005, 92o:0.0005, T2o:0.0004, J2o:0.0002, K2o:0.0005, A2o:0.0022, 32s:0.0035, 33:0.0091, 43o:0.0003, 53o:0.0010, 83o:0.0019, T3o:0.0003, J3o:0.0015, Q3o:0.0001, K3o:0.0005, A3o:0.0017, 54o:0.0002, T4o:0.0006, J4o:0.0005, Q4o:0.0002, K4o:0.0003, A4o:0.0001, 54s:0.0150, 55:0.2397, 65o:0.0006, 85o:0.0006, A5o:0.0030, 62s:0.0021, 66:0.0289, 86o:0.0007, 96o:0.0008, T6o:0.0005, J6o:0.0004, K6o:0.0018, A6o:0.0013, 74s:0.0231, 75s:0.0592, 97o:0.0008, Q7o:0.0027, K7o:0.0020, A7o:0.0004, 82s:0.0041, 83s:0.0010, 84s:0.0035, 85s:0.0160, 86s:0.0027, 87s:0.0505, 88:0.1150, 98o:0.0005, J8o:0.0006, Q8o:0.0018, K8o:0.0008, A8o:0.0040, 93s:0.0126, 96s:0.0027, 98s:0.0038, 99:0.3661, T9o:0.0004, J9o:0.0004, Q9o:0.0007, K9o:0.0078, T3s:0.0016, T4s:0.0076, T5s:0.0006, T6s:0.0080, T7s:0.0033, TT:0.7283, QTo:0.0005, J4s:0.0127, J7s:0.0108, J9s:0.4981, JTs:0.2173, JJ:0.4659, QJo:0.0006, KJo:0.0006, AJo:0.0026, Q5s:0.0026, Q6s:0.0186, Q7s:0.0055, Q9s:0.0134, QJs:0.3586, QQ:0.9762, KQo:0.0142, AQo:0.0007, K2s:0.0388, K5s:0.0036, K7s:0.0098, K9s:0.0036, KTs:0.0541, KJs:0.0108, KQs:0.0034, KK:0.9184, AKo:0.0004, A2s:0.0093, A3s:0.0120, A4s:0.0017, A6s:0.4929, A7s:0.3675, A8s:0.5127, A9s:0.2690, ATs:0.6511, AJs:0.0030, AQs:0.5471, AKs:0.2033, AA:0.9721"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0001, 66:0.0137, 76s:0.0020, 77:0.0002, 87s:0.0001, 88:0.0004, A8o:0.0001, 99:0.0005, T8s:0.0005, T9s:0.0006, TT:0.0444, KTo:0.0001, ATo:0.0006, J9s:0.0008, JTs:0.0002, JJ:0.4173, QJo:0.0001, KJo:0.0006, AJo:0.0001, Q8s:0.0003, Q9s:0.0002, QTs:0.0006, QQ:0.6894, KQo:0.0001, K7s:0.0013, K8s:0.0004, K9s:0.0006, KTs:0.0002, KJs:0.0006, KQs:0.0017, KK, AKo:0.3158, A2s:0.0005, A3s:0.0005, A4s:0.0002, A5s:0.0004, A6s:0.0006, A7s:0.0011, A8s:0.0003, A9s:0.0115, ATs:0.0007, AJs:0.0006, AQs:0.0008, AKs:0.0031, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32|BB:CALL@52.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0360, 77:0.0119, 87s:0.0117, A8o:0.0046, 99:0.0773, T8s:0.1114, KTo:0.0200, ATo:0.0061, J9s:0.3000, JJ:0.1161, QJo:0.1593, AJo:0.0166, Q8s:0.0111, Q9s:0.1133, QJs:0.1364, QQ:0.0727, KQo:0.0923, AQo:0.0799, K4s:0.0324, K5s:0.0833, K6s:0.0345, K7s:0.2968, K9s:0.1374, KJs:0.2313, KQs:0.0173, KK:0.5439, AKo:0.3548, A3s:0.2915, A4s:0.4500, A5s:0.2303, A6s:0.4247, A7s:0.0088, A8s:0.2786, A9s:0.0087, AQs:0.0388, AKs:0.0040, AA:0.3952"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32|SB:CALL@52.82",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0107, A5o:0.0030, 65s:0.0058, 88:0.0139, 98s:0.0246, 99:0.1918, A9o:0.0055, T8s:0.3175, T9s:0.4407, TT:0.0590, KTo:0.0079, J9s:0.1398, JTs:0.0639, JJ:0.1055, AJo:0.1809, Q8s:0.0960, Q9s:0.0196, QTs:0.0220, QJs:0.0253, QQ:0.0956, KQo:0.0211, K4s:0.0044, K6s:0.0170, K9s:0.0502, KTs:0.0229, KJs:0.0032, KK:0.5754, A2s:0.0705, A3s:0.2244, A5s:0.1963, ATs:0.1228, AJs:0.1173, AQs:0.0874, AKs:0.1811, AA:0.9773"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32|BTN:CALL@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0061, 65s:0.0011, 77:0.1043, 88:0.1963, A8o:0.0200, 98s:0.2801, A9o:0.0521, T8s:0.0955, T9s:0.0716, KTo:0.0236, J9s:0.0527, JJ:0.3608, Q8s:0.0063, QTs:0.2336, QJs:0.8761, QQ:0.2149, KQo:0.0547, AQo:0.0143, K5s:0.0425, K6s:0.1065, K9s:0.2565, KTs:0.1778, KJs:0.7258, KK:0.7343, AKo:0.0854, A2s:0.1340, A6s:0.5466, A9s:0.1646, AJs:0.9098, AQs:0.9333, AKs:0.6610, AA:0.8303"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@53.32|CO:CALL@53.32",
    "heroPos": "LJ",
    "eff": 53.57,
    "stacks": [
      53.57,
      53.57,
      53.57,
      53.57,
      53.57,
      53.57
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0077, 65s:0.0005, 66:0.0223, 76s:0.1781, 77:0.3244, 98s:0.0247, 99:0.1735, A9o:0.0039, T8s:0.2229, T9s:0.1298, TT:0.0308, ATo:0.0153, JJ:0.0131, QJo:0.0264, KJo:0.0256, AJo:0.1420, Q8s:0.0035, Q9s:0.1678, QTs:0.1502, QJs:0.1605, QQ:0.1534, KQo:0.0171, AQo:0.0351, K4s:0.0153, K6s:0.0045, K9s:0.6880, KQs:0.0786, KK:0.2369, AKo:0.1015, A2s:0.1604, A3s:0.3565, A4s:0.0303, A6s:0.6186, A7s:0.5164, A8s:0.0374, A9s:0.0367, ATs:0.1927, AJs:0.0780, AQs:0.0970, AKs:0.1167, AA:0.9421"
      }
    ]
  }
];

export const PATTERNS = __normalizePatterns([
{
    id: "CLUB_MATCH_140_280_70_54_54_54_54_54_54 chase",
    label: "Club Match 140-280(70) 54-54-54-54-54-54 chase",
    tags: ["clubmatch", "6left"],
    questionBuilder: (hand) => ({ stacks: CLUB_MATCH_140_280_70_54_54_54_54_54_54_STACKS_BB }),
    spots: __attachFacingLineToState(CLUB_MATCH_140_280_70_54_54_54_54_54_54_STATE, CLUB_MATCH_140_280_70_54_54_54_54_54_54_FACING_PRESETS).map(__makeSpotFromState),
  }
]);
