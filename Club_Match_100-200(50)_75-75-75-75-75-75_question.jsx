// ============================================================
// AUTO-GENERATED from Club_Match_100-200(50)_75-75-75-75-75-75.zip
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

// blinds: BB=20000 / SB=10000 / ante=5000
export const CLUB_MATCH_100_200_50_75_75_75_75_75_75_STACKS_BB = [
  75.0,
  75.0,
  75.0,
  75.0,
  75.0,
  75.0
];

export const CLUB_MATCH_100_200_50_75_75_75_75_75_75_FACING_PRESETS = [
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
    "id": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@20",
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
        "size": 20.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@74.75",
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
        "size": 74.75
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
    "id": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@20",
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
        "size": 20.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@74.75",
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
        "size": 74.75
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
    "id": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
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
        "size": 74.75
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
    "id": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@74.75",
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
        "size": 74.75
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
    "id": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@74.75",
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
        "size": 74.75
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
    "id": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
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
        "size": 74.75
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
    "id": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@18",
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
        "size": 18.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@74.75",
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
        "size": 74.75
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
    "id": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
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
        "size": 74.75
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
    "id": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
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
        "size": 74.75
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
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
    "id": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@20",
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
        "size": 20.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@74.75",
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
        "size": 74.75
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
    "id": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@20",
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
        "size": 20.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
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
        "size": 74.75
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
    "id": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
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
        "size": 18.0
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
    "id": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@18",
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
        "size": 18.0
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
    "id": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@11.7",
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
        "size": 11.7
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@20",
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
        "size": 20.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
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
    "id": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@18",
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
        "size": 18.0
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@18",
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
        "size": 18.0
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@74.75",
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
        "size": 74.75
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@74.75",
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
        "size": 74.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@11.7",
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
        "size": 11.7
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@20",
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
        "size": 20.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@74.75",
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
        "size": 74.75
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@74.75",
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
        "size": 74.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  }
];

export const CLUB_MATCH_100_200_50_75_75_75_75_75_75_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "44:0.0010, A4o:0.0001, 55:0.9978, A5o:0.1843, 65s:0.5415, 66:0.9998, 76s:0.6510, 77, A7o:0.0001, 87s:0.8575, 88, A8o:0.0787, 98s:0.9437, 99, A9o:0.9998, T7s:0.0001, T8s:0.9993, T9s:0.9989, TT, JTo:0.0541, KTo:0.8641, ATo, J8s:0.4606, J9s:0.9928, JTs:0.9997, JJ, QJo:0.9787, KJo, AJo, Q8s:0.2775, Q9s:0.9975, QTs, QJs, QQ, KQo, AQo, K4s:0.0195, K5s:0.9915, K6s:0.9996, K7s:0.9996, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s:0.9998, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.6022, A4o:0.0006, 55:0.9998, A5o:0.7757, 64s:0.0001, 65s:0.7135, 66, A6o:0.0003, 76s:0.9286, 77, A7o:0.0473, 86s:0.0010, 87s:0.8928, 88, A8o:0.9866, 97s:0.9543, 98s:0.9990, 99, A9o, T6s:0.0007, T7s:0.8852, T8s:0.9913, T9s, TT, JTo:0.7842, QTo:0.7437, KTo, ATo, J7s:0.0005, J8s:0.9333, J9s:0.9997, JTs, JJ, QJo, KJo, AJo, Q6s:0.0439, Q8s:0.9703, Q9s:0.9997, QTs, QJs, QQ, KQo, AQo, K3s:0.0645, K4s:0.9958, K5s, K6s, K7s:0.9998, K8s:0.9998, K9s, KTs, KJs, KQs, KK, AKo, A2s:0.9998, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "22:0.0019, A2o:0.0001, 33:0.7800, A3o:0.0004, 44, A4o:0.8779, 53s:0.0002, 54s:0.7253, 55, A5o, 64s:0.0002, 65s:0.9970, 66, A6o:0.6281, 75s:0.7736, 76s:0.9987, 77, K7o:0.0002, A7o, 86s:0.9933, 87s:0.9986, 88, J8o:0.0001, K8o:0.0003, A8o, 96s:0.4869, 97s:0.9998, 98s:0.9997, 99, T9o:0.7935, J9o:0.0178, Q9o:0.0001, K9o, A9o, T6s:0.0880, T7s:0.9949, T8s, T9s, TT, JTo, QTo:0.9998, KTo, ATo, J5s:0.2120, J6s:0.0017, J7s:0.9973, J8s, J9s:0.9998, JTs, JJ, QJo, KJo, AJo, Q3s:0.0003, Q4s:0.5417, Q5s:0.9972, Q6s:0.9998, Q7s:0.9985, Q8s:0.9998, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.9997, K3s:0.9998, K4s, K5s, K6s:0.9998, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "22, A2o, 33, A3o, 43s:0.9643, 44, K4o:0.0367, A4o, 52s:0.0004, 53s:0.9990, 54s, 55, 65o:0.0015, K5o:0.9998, A5o, 63s:0.0547, 64s:0.9996, 65s, 66, 76o:0.3685, J6o:0.0001, Q6o:0.0032, K6o, A6o, 73s:0.0001, 74s:0.9994, 75s:0.9998, 76s:0.9998, 77, 87o:0.6262, 97o:0.0642, T7o:0.2649, Q7o:0.7187, K7o, A7o, 84s:0.0270, 85s:0.9998, 86s, 87s, 88, 98o, T8o, J8o:0.9993, Q8o:0.9997, K8o, A8o, 93s:0.0001, 95s:0.9965, 96s:0.9998, 97s, 98s, 99, T9o, J9o, Q9o, K9o, A9o, T2s:0.0030, T3s:0.6076, T4s:0.9932, T5s, T6s, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J2s:0.8512, J3s:0.9946, J4s:0.9996, J5s, J6s, J7s, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s:0.9998, Q3s, Q4s:0.9998, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9230, 42o:0.0044, 52o:0.1445, 92o:0.4515, T2o:0.9985, J2o:0.9997, Q2o, K2o:0.9993, A2o:0.9745, 32s:0.9993, 33, 43o:0.7811, 53o:0.9996, 63o:0.7939, 73o:0.0969, 93o:0.9987, T3o:0.9996, J3o:0.9995, Q3o, K3o:0.9503, A3o:0.9737, 42s:0.9590, 43s:0.1883, 44:0.9547, 54o:0.9654, 64o:0.9988, 74o:0.9998, 84o:0.9994, 94o:0.9994, T4o:0.9998, J4o:0.9998, Q4o:0.9954, K4o:0.5906, A4o:0.8791, 52s:0.0457, 53s:0.9933, 54s:0.8812, 55:0.9628, 65o:0.5758, 75o:0.9995, 85o:0.9995, 95o:0.9997, T5o:0.9998, J5o:0.9996, Q5o:0.9994, K5o:0.7956, A5o:0.8683, 62s:0.9992, 63s:0.8643, 64s:0.7524, 65s:0.8957, 66:0.9518, 76o:0.7539, 86o:0.7733, 96o:0.9997, T6o, J6o:0.9995, Q6o:0.9536, K6o:0.7427, A6o:0.9991, 72s:0.9992, 73s:0.9357, 74s:0.6876, 75s:0.9764, 76s:0.9418, 77, 87o:0.9566, 97o:0.7809, T7o:0.5343, J7o:0.9241, Q7o:0.4465, K7o:0.9865, A7o:0.7597, 82s:0.9998, 83s:0.9989, 84s:0.5384, 85s:0.9778, 86s:0.9679, 87s:0.9188, 88:0.7734, 98o:0.6432, T8o:0.9136, J8o:0.9214, Q8o:0.9833, K8o:0.7451, A8o:0.8337, 92s:0.9310, 93s:0.5809, 94s:0.5843, 95s:0.9090, 96s:0.9975, 97s:0.9997, 98s:0.9629, 99, T9o:0.9254, J9o:0.8700, Q9o:0.7771, K9o:0.9327, A9o:0.8685, T2s:0.5325, T3s:0.5575, T4s:0.7376, T5s:0.9655, T6s:0.9952, T7s:0.9994, T8s:0.6226, T9s:0.7226, TT:0.9789, JTo:0.9594, QTo:0.9676, KTo:0.7800, ATo:0.9729, J2s:0.3392, J3s:0.7071, J4s:0.9974, J5s:0.8840, J6s, J7s:0.9989, J8s:0.3944, J9s:0.9998, JTs:0.7571, JJ:0.9463, QJo:0.9632, KJo:0.9747, AJo:0.8549, Q2s:0.7332, Q3s:0.9898, Q4s:0.9261, Q5s:0.9557, Q6s, Q7s:0.9833, Q8s:0.8445, Q9s:0.9936, QTs:0.9728, QJs:0.7766, QQ:0.8105, KQo:0.9393, AQo:0.7559, K2s:0.9993, K3s:0.9916, K4s, K5s, K6s, K7s, K8s, K9s, KTs:0.9935, KJs:0.6840, KQs:0.3876, KK:0.5699, AKo:0.5120, A2s:0.9971, A3s:0.9983, A4s:0.5944, A5s:0.8757, A6s:0.9146, A7s:0.7916, A8s:0.6112, A9s:0.3883, ATs:0.3925, AJs:0.3130, AQs:0.3823, AKs:0.3569, AA:0.5499"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "22:0.0770, 42o:0.0005, Q2o:0.0001, K2o:0.0007, A2o:0.0255, 32s:0.0004, 43o:0.0008, 53o:0.0001, 63o:0.0001, J3o:0.0001, K3o:0.0497, A3o:0.0263, 42s:0.0409, 43s:0.8116, 44:0.0453, 54o:0.0346, 64o:0.0010, 84o:0.0002, Q4o:0.0046, K4o:0.4094, A4o:0.1209, 52s:0.9540, 53s:0.0066, 54s:0.1188, 55:0.0372, 65o:0.4242, 75o:0.0005, 85o:0.0003, 95o:0.0003, T5o:0.0002, J5o:0.0004, Q5o:0.0006, K5o:0.2044, A5o:0.1317, 62s:0.0006, 63s:0.1356, 64s:0.2476, 65s:0.1043, 66:0.0482, 76o:0.2461, 86o:0.2267, 96o:0.0003, J6o:0.0005, Q6o:0.0464, K6o:0.2573, A6o:0.0009, 72s:0.0007, 73s:0.0641, 74s:0.3124, 75s:0.0236, 76s:0.0582, 87o:0.0434, 97o:0.2191, T7o:0.4657, J7o:0.0759, Q7o:0.5535, K7o:0.0135, A7o:0.2403, 82s:0.0002, 83s:0.0010, 84s:0.4616, 85s:0.0222, 86s:0.0321, 87s:0.0812, 88:0.2266, 98o:0.3568, T8o:0.0864, J8o:0.0786, Q8o:0.0167, K8o:0.2549, A8o:0.1663, 92s:0.0690, 93s:0.4190, 94s:0.4157, 95s:0.0910, 96s:0.0025, 97s:0.0003, 98s:0.0370, T9o:0.0746, J9o:0.1300, Q9o:0.2229, K9o:0.0673, A9o:0.1315, T2s:0.4674, T3s:0.4425, T4s:0.2623, T5s:0.0345, T6s:0.0048, T7s:0.0006, T8s:0.3774, T9s:0.2774, TT:0.0211, JTo:0.0406, QTo:0.0324, KTo:0.2200, ATo:0.0271, J2s:0.6608, J3s:0.2928, J4s:0.0025, J5s:0.1160, J7s:0.0011, J8s:0.6056, J9s:0.0002, JTs:0.2429, JJ:0.0537, QJo:0.0368, KJo:0.0253, AJo:0.1451, Q2s:0.2668, Q3s:0.0102, Q4s:0.0739, Q5s:0.0443, Q7s:0.0167, Q8s:0.1554, Q9s:0.0064, QTs:0.0272, QJs:0.2234, QQ:0.1895, KQo:0.0607, AQo:0.2441, K2s:0.0007, K3s:0.0084, K7s:0.0001, KTs:0.0065, KJs:0.3160, KQs:0.6124, KK:0.4301, AKo:0.4880, A2s:0.0029, A3s:0.0017, A4s:0.4056, A5s:0.1243, A6s:0.0854, A7s:0.2084, A8s:0.3888, A9s:0.6117, ATs:0.6075, AJs:0.6870, AQs:0.6177, AKs:0.6431, AA:0.4501"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.4852, 32o:0.9692, 42o:0.7964, 52o:0.4389, 62o:0.5930, 72o:0.7851, 82o:0.6213, 92o:0.9993, T2o:0.4677, J2o:0.2303, Q2o:0.5280, K2o:0.4100, A2o:0.5971, 32s:0.9385, 33:0.2402, 43o:0.5447, 53o:0.7399, 63o:0.6659, 73o:0.4887, 83o:0.7893, 93o:0.3857, T3o:0.5617, J3o:0.9478, Q3o:0.3867, K3o:0.7010, A3o:0.6287, 42s:0.7163, 43s:0.9955, 44:0.8063, 54o:0.4216, 64o:0.4692, 74o:0.8172, 84o:0.5098, 94o:0.9351, T4o:0.7570, J4o:0.5156, Q4o:0.9279, K4o:0.7078, A4o:0.9891, 52s:0.8332, 53s:0.4097, 54s:0.7680, 55:0.3736, 65o:0.5331, 75o:0.2076, 85o:0.2065, 95o:0.5611, T5o:0.4483, J5o:0.7662, Q5o:0.7845, K5o:0.7443, A5o:0.6675, 62s:0.8243, 63s:0.5494, 64s:0.9906, 65s:0.1964, 66:0.5288, 76o:0.5520, 86o:0.6283, 96o:0.4261, T6o:0.6126, J6o:0.6727, Q6o:0.9299, K6o:0.5879, A6o:0.9824, 72s:0.8103, 73s:0.2973, 74s:0.5978, 75s:0.4170, 76s:0.3343, 77:0.8815, 87o:0.6804, 97o:0.9329, T7o:0.4734, J7o:0.5315, Q7o:0.4522, K7o:0.5689, A7o:0.7375, 82s:0.4978, 83s:0.9859, 84s:0.9298, 85s:0.9986, 86s:0.9709, 87s:0.9997, 88:0.0695, 98o:0.6814, T8o:0.6472, J8o:0.6363, Q8o:0.2207, K8o:0.3600, A8o:0.1832, 92s:0.6629, 93s:0.9615, 94s:0.9498, 95s:0.9855, 96s:0.9976, 97s:0.9949, 98s:0.9998, 99:0.2497, T9o:0.9968, J9o:0.7618, Q9o:0.5728, K9o:0.6043, A9o:0.4449, T2s:0.8641, T3s:0.6615, T4s:0.9961, T5s:0.9536, T6s:0.9982, T7s, T8s:0.7137, T9s:0.1285, TT:0.4068, JTo:0.8378, QTo:0.9726, KTo:0.9571, ATo:0.1935, J2s:0.7188, J3s:0.8219, J4s:0.9026, J5s:0.9912, J6s:0.9998, J7s:0.7450, J8s:0.9467, J9s:0.6957, JTs:0.1445, JJ:0.1535, QJo:0.8662, KJo:0.5331, AJo:0.2969, Q2s:0.8417, Q3s:0.9966, Q4s:0.9995, Q5s:0.8311, Q6s, Q7s:0.9949, Q8s:0.9192, Q9s:0.9092, QTs:0.1552, QJs:0.7073, QQ:0.0029, KQo:0.3438, AQo:0.0004, K2s:0.8651, K3s:0.8142, K4s:0.9810, K5s, K6s:0.9290, K7s:0.1535, K8s:0.9927, K9s:0.1261, KTs:0.0167, KJs:0.1075, KQs:0.0023, A2s:0.3852, A3s:0.2545, A4s:0.2374, A5s:0.0214, A6s:0.7666, A7s:0.1004, A8s:0.0095, A9s:0.0100, ATs:0.0055, AJs:0.0098, AQs:0.0014"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "22:0.5148, 32o:0.0308, 42o:0.2036, 52o:0.5611, 62o:0.4070, 72o:0.2149, 82o:0.3787, 92o:0.0007, T2o:0.5323, J2o:0.7697, Q2o:0.4720, K2o:0.5900, A2o:0.4029, 32s:0.0615, 33:0.7598, 43o:0.4553, 53o:0.2601, 63o:0.3341, 73o:0.5113, 83o:0.2107, 93o:0.6143, T3o:0.4383, J3o:0.0522, Q3o:0.6133, K3o:0.2990, A3o:0.3713, 42s:0.2837, 43s:0.0045, 44:0.1937, 54o:0.5784, 64o:0.5308, 74o:0.1827, 84o:0.4902, 94o:0.0649, T4o:0.2430, J4o:0.4844, Q4o:0.0721, K4o:0.2922, A4o:0.0109, 52s:0.1668, 53s:0.5903, 54s:0.2320, 55:0.6264, 65o:0.4669, 75o:0.7924, 85o:0.7935, 95o:0.4389, T5o:0.5517, J5o:0.2338, Q5o:0.2155, K5o:0.2557, A5o:0.3325, 62s:0.1757, 63s:0.4506, 64s:0.0094, 65s:0.8036, 66:0.4712, 76o:0.4480, 86o:0.3717, 96o:0.5739, T6o:0.3874, J6o:0.3273, Q6o:0.0701, K6o:0.4121, A6o:0.0176, 72s:0.1897, 73s:0.7027, 74s:0.4022, 75s:0.5830, 76s:0.6657, 77:0.1185, 87o:0.3196, 97o:0.0671, T7o:0.5266, J7o:0.4685, Q7o:0.5478, K7o:0.4311, A7o:0.2625, 82s:0.5022, 83s:0.0141, 84s:0.0702, 85s:0.0014, 86s:0.0291, 87s:0.0003, 88:0.9305, 98o:0.3186, T8o:0.3528, J8o:0.3637, Q8o:0.7793, K8o:0.6400, A8o:0.8168, 92s:0.3371, 93s:0.0385, 94s:0.0502, 95s:0.0145, 96s:0.0024, 97s:0.0051, 98s:0.0002, 99:0.7503, T9o:0.0032, J9o:0.2382, Q9o:0.4272, K9o:0.3957, A9o:0.5551, T2s:0.1359, T3s:0.3385, T4s:0.0039, T5s:0.0464, T6s:0.0018, T8s:0.2863, T9s:0.8715, TT:0.5932, JTo:0.1622, QTo:0.0274, KTo:0.0429, ATo:0.8065, J2s:0.2812, J3s:0.1781, J4s:0.0974, J5s:0.0088, J6s:0.0002, J7s:0.2550, J8s:0.0533, J9s:0.3043, JTs:0.8555, JJ:0.8465, QJo:0.1338, KJo:0.4669, AJo:0.7031, Q2s:0.1583, Q3s:0.0034, Q4s:0.0005, Q5s:0.1689, Q6s:0.0001, Q7s:0.0051, Q8s:0.0808, Q9s:0.0908, QTs:0.8448, QJs:0.2927, QQ:0.9971, KQo:0.6562, AQo:0.9996, K2s:0.1349, K3s:0.1858, K4s:0.0190, K6s:0.0710, K7s:0.8465, K8s:0.0073, K9s:0.8739, KTs:0.9833, KJs:0.8925, KQs:0.9977, KK, AKo, A2s:0.6148, A3s:0.7455, A4s:0.7626, A5s:0.9786, A6s:0.2334, A7s:0.8996, A8s:0.9905, A9s:0.9900, ATs:0.9945, AJs:0.9902, AQs:0.9986, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 12bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9227, A2o:0.5884, 33, K3o:0.0003, A3o:0.8313, 42s:0.0037, 43s:0.1360, 44:0.9541, 54o:0.0001, K4o:0.0951, A4o:0.7471, 52s:0.0316, 53s:0.9932, 54s:0.8809, 55:0.9628, 65o:0.0392, Q5o:0.0016, K5o:0.5577, A5o:0.4518, 62s:0.0004, 63s:0.7339, 64s:0.7507, 65s:0.8233, 66:0.9518, 76o:0.4134, Q6o:0.2222, K6o:0.4743, A6o:0.6175, 73s:0.0047, 74s:0.6760, 75s:0.9763, 76s:0.9412, 77, 87o:0.9529, 97o:0.2450, T7o:0.4232, J7o:0.3565, Q7o:0.1439, K7o:0.9694, A7o:0.7216, 84s:0.5329, 85s:0.9712, 86s:0.9652, 87s:0.8984, 88:0.7734, 98o:0.5292, T8o:0.9068, J8o:0.8833, Q8o:0.9335, K8o:0.7426, A8o:0.8335, 92s:0.0002, 93s:0.0007, 94s:0.4992, 95s:0.9078, 96s:0.9955, 97s:0.9033, 98s:0.9621, 99, T9o:0.8653, J9o:0.6495, Q9o:0.7768, K9o:0.9316, A9o:0.8641, T2s:0.3556, T3s:0.3401, T4s:0.7375, T5s:0.9095, T6s:0.9744, T7s:0.9979, T8s:0.6225, T9s:0.3815, TT:0.9789, JTo:0.9594, QTo:0.9676, KTo:0.7785, ATo:0.9684, J2s:0.1794, J3s:0.7067, J4s:0.9970, J5s:0.8836, J6s:0.9998, J7s:0.9989, J8s:0.3942, J9s:0.9996, JTs:0.7569, JJ:0.9463, QJo:0.9632, KJo:0.9747, AJo:0.8548, Q2s:0.7329, Q3s:0.9887, Q4s:0.9257, Q5s:0.9557, Q6s, Q7s:0.9833, Q8s:0.8336, Q9s:0.9936, QTs:0.9728, QJs:0.7766, QQ:0.8102, KQo:0.9393, AQo:0.3956, K2s:0.9988, K3s:0.9916, K4s:0.9785, K5s, K6s:0.9821, K7s:0.9997, K8s, K9s, KTs:0.9931, KJs:0.6840, KQs:0.3876, KK:0.0139, A2s:0.8554, A3s:0.8222, A4s:0.4567, A5s:0.8757, A6s:0.9037, A7s:0.7913, A8s:0.6111, A9s:0.3883, ATs:0.3922, AJs:0.3129, AQs:0.2720"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.3860, K3o:0.2892, A3o:0.1424, 43s:0.0455, 44:0.0005, 54o:0.0003, Q4o:0.0108, K4o:0.3919, A4o:0.1320, 52s:0.0054, 65o:0.0257, Q5o:0.0254, K5o:0.2375, A5o:0.4165, 63s:0.1047, 64s:0.0006, 65s:0.0723, 76o:0.1876, 86o:0.0004, Q6o:0.0031, K6o:0.2683, A6o:0.3816, 73s:0.0009, 74s:0.0054, 76s:0.0005, 97o:0.0278, T7o:0.1033, J7o:0.0898, Q7o:0.0298, K7o:0.0171, A7o:0.0381, 84s:0.0009, 85s:0.0055, 86s:0.0027, 87s:0.0203, 98o:0.1138, T8o:0.0061, J8o:0.0381, Q8o:0.0496, K8o:0.0022, A8o:0.0002, 92s:0.0175, 94s:0.0073, 95s:0.0010, 96s:0.0019, 97s:0.0963, 98s:0.0008, T9o:0.0598, J9o:0.2205, Q9o:0.0003, K9o:0.0011, A9o:0.0044, T2s:0.0068, T3s:0.2109, T5s:0.0554, T6s:0.0207, T7s:0.0014, T9s:0.3411, KTo:0.0015, ATo:0.0045, J2s:0.1523, J4s:0.0001, J5s:0.0002, J6s:0.0002, J8s:0.0002, AJo:0.0001, Q2s:0.0001, Q3s:0.0001, Q4s:0.0001, Q8s:0.0108, QQ:0.0003, AQo:0.3603, K2s:0.0005, K4s:0.0215, K6s:0.0179, K7s:0.0002, KTs:0.0003, KK:0.5560, AKo:0.5120, A2s:0.1417, A3s:0.1760, A4s:0.1377, A6s:0.0109, A7s:0.0003, A8s:0.0001, ATs:0.0003, AJs:0.0001, AQs:0.1103, AKs:0.3569, AA:0.5499"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@12",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.3241, 33:0.7509, 44:0.1895, 53s:0.3227, 54s:0.2236, 55:0.6253, A5o:0.0251, 64s:0.0040, 65s:0.7803, 66:0.4689, 74s:0.1546, 75s:0.2869, 76s:0.6552, 77:0.1184, A7o:0.0013, 84s:0.0006, 85s:0.0003, 86s:0.0057, 87s:0.0003, 88:0.9282, K8o:0.0001, A8o:0.0028, 97s:0.0043, 98s:0.0002, 99:0.7256, K9o:0.0024, A9o:0.0178, T8s:0.2830, T9s:0.8691, TT:0.5650, JTo:0.0003, KTo:0.0366, ATo:0.6357, J5s:0.0002, J7s:0.2195, J8s:0.0504, J9s:0.2971, JTs:0.8175, JJ:0.8461, KJo:0.4545, AJo:0.4023, Q2s:0.0002, Q7s:0.0006, Q8s:0.0682, Q9s:0.0811, QTs:0.8437, QJs:0.2907, QQ:0.9962, KQo:0.3762, AQo:0.8360, K2s:0.0119, K3s:0.0222, K4s:0.0073, K6s:0.0321, K7s:0.7889, K8s:0.0053, K9s:0.8678, KTs:0.9660, KJs:0.8923, KQs:0.9964, KK:0.5268, A2s:0.1669, A3s:0.6458, A4s:0.3918, A5s:0.9755, A6s:0.1032, A7s:0.7942, A8s:0.9825, A9s:0.9668, ATs:0.9870, AJs:0.9784, AQs:0.9976, AA:0.0001"
      },
      {
        "action": "4bet 20.5bb",
        "min": 0.0001,
        "range": "A2o:0.0525, 32s:0.0001, 33:0.0002, A3o:0.0776, A4o:0.0063, 53s:0.0001, 54s:0.0033, K5o:0.0001, A5o:0.2963, 66:0.0001, K6o:0.0002, A6o:0.0035, 73s:0.0004, 74s:0.0004, 75s:0.0011, 76s:0.0032, J7o:0.0001, K7o:0.0001, A7o:0.1293, K8o:0.0001, A8o:0.2483, 94s:0.0002, K9o:0.0004, A9o:0.1387, T8s:0.0008, T9s:0.0002, TT:0.0004, JTo:0.0006, QTo:0.0002, ATo:0.1605, J7s:0.0013, J9s:0.0011, JTs:0.0008, JJ:0.0001, QJo:0.0001, AJo:0.1775, Q9s:0.0002, KQo:0.0001, AQo:0.1633, K3s:0.0011, K4s:0.0001, K7s:0.0014, KQs:0.0001, KK:0.0211, AKo:0.0497, A2s:0.2853, A3s:0.0268, A4s:0.3553, A5s:0.0012, A6s:0.1217, A7s:0.0058, A8s:0.0063, A9s:0.0069, ATs:0.0024, AJs:0.0005, AQs:0.0003, AKs:0.6992, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0242, A2o:0.0001, 33:0.0003, 44:0.0036, 55:0.0003, A5o:0.0001, 66:0.0012, 75s:0.0003, 76s:0.0006, A7o:0.0001, 84s:0.0001, 88:0.0023, K8o:0.0001, A8o:0.0052, 99:0.0247, A9o:0.0011, T8s:0.0003, T9s:0.0017, TT:0.0277, ATo:0.0033, JJ:0.0004, AJo:0.0040, QTs:0.0001, QQ:0.0008, KQo:0.0005, AQo:0.0004, K3s:0.0003, K7s:0.0008, K9s:0.0007, KTs:0.0171, KJs:0.0001, KQs:0.0002, KK:0.4521, AKo:0.9502, A2s:0.0822, A3s:0.0611, A4s:0.0143, A5s:0.0019, A6s:0.0037, A7s:0.0986, A8s:0.0015, A9s:0.0149, ATs:0.0041, AJs:0.0113, AQs:0.0007, AKs:0.3008"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.8178, K2o:0.0073, A2o:0.2024, 32s:0.8894, 33:0.9440, 53o:0.0005, 63o:0.0001, K3o:0.6365, A3o:0.1409, 42s:0.9714, 43s:0.9213, 44, 54o:0.9310, 64o:0.0050, 84o:0.0001, Q4o:0.0010, K4o:0.4127, A4o:0.9831, 52s:0.9804, 53s:0.9814, 54s:0.9957, 55:0.9723, 65o:0.9524, 75o:0.0056, 85o:0.0004, Q5o:0.4539, K5o:0.8650, A5o:0.8215, 62s:0.0336, 63s:0.8959, 64s:0.9987, 65s:0.7114, 66:0.9998, 76o:0.8274, 86o:0.7187, 96o:0.0001, T6o:0.0004, Q6o:0.5385, K6o:0.9700, A6o:0.5282, 72s:0.0002, 73s:0.0058, 74s:0.9996, 75s:0.9485, 76s:0.9611, 77:0.9991, 87o:0.9919, 97o:0.8717, T7o:0.8618, J7o:0.7421, Q7o:0.8446, K7o:0.9867, A7o:0.9952, 82s:0.5998, 83s:0.8395, 84s:0.9986, 85s:0.6102, 86s:0.9974, 87s, 88, 98o:0.9848, T8o:0.9662, J8o:0.9034, Q8o:0.9281, K8o:0.9822, A8o:0.9566, 92s:0.7801, 93s:0.9972, 94s:0.5379, 95s:0.9992, 96s:0.9972, 97s:0.9927, 98s:0.9862, 99:0.9998, T9o:0.9978, J9o:0.9997, Q9o:0.9987, K9o:0.9660, A9o:0.9095, T2s:0.6966, T3s:0.9942, T4s:0.9939, T5s:0.9891, T6s:0.9990, T7s:0.9801, T8s:0.9992, T9s, TT:0.9997, JTo:0.9786, QTo:0.9998, KTo:0.9996, ATo:0.9046, J2s:0.9952, J3s:0.9866, J4s:0.9981, J5s:0.9991, J6s:0.9994, J7s:0.9500, J8s:0.9678, J9s:0.9997, JTs, JJ:0.9988, QJo:0.9998, KJo:0.9991, AJo:0.9962, Q2s:0.9977, Q3s:0.9949, Q4s:0.9981, Q5s:0.9992, Q6s:0.9993, Q7s:0.9993, Q8s:0.9995, Q9s:0.9996, QTs, QJs:0.9730, QQ:0.9968, KQo:0.9998, AQo:0.7743, K2s:0.9874, K3s:0.9992, K4s:0.9985, K5s, K6s:0.9969, K7s:0.9993, K8s:0.9994, K9s:0.9998, KTs:0.9985, KJs:0.9604, KQs, KK:0.7260, A2s:0.6366, A3s:0.9371, A4s:0.9775, A5s:0.6490, A6s:0.9985, A7s:0.9622, A8s:0.9932, A9s:0.9722, ATs:0.9884, AJs, AQs:0.7562, AKs:0.0001"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "22:0.1818, 52o:0.0003, 82o:0.0001, 92o:0.0002, T2o:0.0003, J2o:0.0002, Q2o:0.0033, K2o:0.2517, A2o:0.7975, 32s:0.0181, 33:0.0558, 43o:0.0004, 53o:0.0018, 83o:0.0001, 93o:0.0004, T3o:0.0001, J3o:0.0010, Q3o:0.0139, K3o:0.1815, A3o:0.8591, 42s:0.0088, 43s:0.0376, 54o:0.0018, 64o:0.0004, 74o:0.0001, T4o:0.0009, Q4o:0.2630, K4o:0.4332, A4o:0.0168, 52s:0.0003, 53s:0.0094, 54s:0.0035, 55:0.0275, 75o:0.0004, 95o:0.0410, T5o:0.0001, J5o:0.0066, Q5o:0.0782, K5o:0.1329, A5o:0.1785, 62s:0.0022, 63s:0.0618, 64s:0.0006, 65s:0.2877, 66:0.0001, 76o:0.0023, 86o:0.0873, 96o:0.0348, J6o:0.0007, Q6o:0.1227, K6o:0.0296, A6o:0.4717, 72s:0.0023, 74s:0.0001, 75s:0.0503, 76s:0.0380, 77:0.0009, 87o:0.0002, 97o:0.0204, T7o:0.1213, J7o:0.2396, Q7o:0.0298, K7o:0.0038, A7o:0.0048, 82s:0.1422, 83s:0.0007, 84s:0.0001, 85s:0.3800, 86s:0.0015, 98o:0.0138, T8o:0.0337, J8o:0.0936, Q8o:0.0697, K8o:0.0178, A8o:0.0433, 92s:0.2125, 93s:0.0009, 94s:0.0015, 95s:0.0007, 96s:0.0016, 97s:0.0072, 98s:0.0136, 99:0.0002, T9o:0.0001, J9o:0.0002, Q9o:0.0003, K9o:0.0338, A9o:0.0905, T2s:0.2901, T3s:0.0031, T4s:0.0003, T5s:0.0101, T6s:0.0002, T7s:0.0198, T8s:0.0006, TT:0.0003, JTo:0.0213, QTo:0.0001, KTo:0.0004, ATo:0.0954, J2s:0.0001, J3s:0.0108, J5s:0.0003, J7s:0.0496, J8s:0.0321, J9s:0.0002, JTs:0.0001, JJ:0.0012, QJo:0.0002, KJo:0.0009, AJo:0.0038, Q2s:0.0009, Q3s:0.0034, Q5s:0.0005, Q8s:0.0001, Q9s:0.0002, QJs:0.0270, QQ:0.0032, KQo:0.0002, AQo:0.2257, K2s:0.0125, K3s:0.0003, K4s:0.0003, K6s:0.0029, K7s:0.0007, K8s:0.0004, K9s:0.0001, KTs:0.0013, KJs:0.0396, KK:0.2740, AKo, A2s:0.3634, A3s:0.0629, A4s:0.0224, A5s:0.3509, A6s:0.0015, A7s:0.0377, A8s:0.0068, A9s:0.0277, ATs:0.0116, AJs:0.0001, AQs:0.2438, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@9",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0768, A3o:0.0003, 43s:0.0811, 44:0.0453, 53s:0.0026, 54s:0.1158, 55:0.0372, 63s:0.0001, 64s:0.2012, 65s:0.1001, 66:0.0482, 75s:0.0212, 76s:0.0543, A7o:0.0021, 84s:0.0002, 85s:0.0001, 86s:0.0309, 87s:0.0788, 88:0.2266, Q8o:0.0003, A8o:0.0184, 93s:0.0003, 94s:0.0040, 95s:0.0011, 96s:0.0022, 97s:0.0003, 98s:0.0365, T9o:0.0213, J9o:0.0097, K9o:0.0004, A9o:0.0013, T4s:0.0002, T6s:0.0005, T7s:0.0006, T8s:0.3714, T9s:0.2743, TT:0.0211, JTo:0.0370, QTo:0.0289, KTo:0.1471, ATo:0.0003, J4s:0.0002, J7s:0.0011, J8s:0.5935, J9s:0.0002, JTs:0.2412, JJ:0.0537, QJo:0.0274, KJo:0.0211, AJo:0.0059, Q4s:0.0078, Q5s:0.0326, Q7s:0.0147, Q8s:0.1501, Q9s:0.0062, QTs:0.0271, QJs:0.2230, QQ:0.1891, KQo:0.0604, AQo:0.0821, K3s:0.0022, K7s:0.0001, KTs:0.0064, KJs:0.3157, KQs:0.6118, KK:0.3132, A2s:0.0002, A3s:0.0004, A4s:0.3908, A5s:0.1190, A6s:0.0560, A7s:0.1308, A8s:0.3297, A9s:0.4792, ATs:0.4413, AJs:0.6817, AQs:0.4938"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A2o:0.0216, K3o:0.0003, A3o:0.0259, 43s:0.0010, K4o:0.0077, A4o:0.1207, K5o:0.0104, A5o:0.1315, 65s:0.0014, K6o:0.0035, A6o:0.0009, K7o:0.0002, A7o:0.2380, 86s:0.0001, 87s:0.0001, T8o:0.0001, K8o:0.0218, A8o:0.1478, 94s:0.0161, T9o:0.0009, K9o:0.0191, A9o:0.1302, T2s:0.0001, T3s:0.0001, T4s:0.0002, T8s:0.0039, T9s:0.0011, JTo:0.0004, QTo:0.0004, KTo:0.0727, ATo:0.0268, J2s:0.0001, J3s:0.0008, J8s:0.0073, JTs:0.0005, QJo:0.0001, KJo:0.0040, AJo:0.1391, Q2s:0.0010, Q5s:0.0001, Q7s:0.0001, Q9s:0.0001, QQ:0.0003, KQo:0.0001, AQo:0.1616, K3s:0.0003, KTs:0.0001, KK:0.1169, AKo:0.0472, A2s:0.0027, A3s:0.0013, A4s:0.0137, A5s:0.0048, A6s:0.0292, A7s:0.0771, A8s:0.0586, A9s:0.1324, ATs:0.1662, AJs:0.0047, AQs:0.1235, AKs:0.5882, AA:0.4501"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K5o:0.0001, 64s:0.0001, 65s:0.0002, K6o:0.0001, 74s:0.0004, K8o:0.0001, T8s:0.0003, JTs:0.0001, AJo:0.0001, Q4s:0.0001, Q5s:0.0001, QTs:0.0001, QJs:0.0003, QQ:0.0001, KQo:0.0001, AQo:0.0003, KJs:0.0003, KQs:0.0006, AKo:0.4408, A4s:0.0011, A5s:0.0002, A6s:0.0001, A7s:0.0005, A8s:0.0006, A9s:0.0001, AJs:0.0006, AQs:0.0004, AKs:0.0549"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@9|SB:4BET@18",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0015, A2o:0.0001, 32s:0.0114, 33:0.0004, K3o:0.0008, A3o:0.0044, 42s:0.0046, 43s:0.0345, 54o:0.0002, K4o:0.0005, A4o:0.0073, 52s:0.0002, 53s:0.0084, 54s:0.0033, 55:0.0095, K5o:0.0171, A5o:0.1084, 63s:0.0213, 64s:0.0001, 65s:0.1810, K6o:0.0026, A6o:0.0456, 74s:0.0001, 75s:0.0484, 76s:0.0213, 77:0.0007, 97o:0.0010, T7o:0.0059, Q7o:0.0001, K7o:0.0002, A7o:0.0028, 83s:0.0001, 85s:0.3227, 86s:0.0011, 98o:0.0034, T8o:0.0305, J8o:0.0326, Q8o:0.0259, K8o:0.0010, A8o:0.0388, 92s:0.0222, 95s:0.0006, 96s:0.0013, 97s:0.0068, 98s:0.0118, 99:0.0002, T9o:0.0001, J9o:0.0002, Q9o:0.0001, K9o:0.0300, A9o:0.0842, T2s:0.2384, T3s:0.0015, T4s:0.0001, T5s:0.0033, T6s:0.0002, T7s:0.0192, T8s:0.0006, TT:0.0003, JTo:0.0212, QTo:0.0001, KTo:0.0004, ATo:0.0945, J2s:0.0001, J3s:0.0098, J5s:0.0003, J7s:0.0470, J8s:0.0317, J9s:0.0002, JTs:0.0001, JJ:0.0011, QJo:0.0002, KJo:0.0009, AJo:0.0037, Q2s:0.0001, Q3s:0.0028, Q5s:0.0004, Q8s:0.0001, Q9s:0.0002, QJs:0.0266, QQ:0.0032, KQo:0.0002, AQo:0.2255, K2s:0.0106, K3s:0.0002, K4s:0.0003, K6s:0.0021, K7s:0.0005, K8s:0.0004, K9s:0.0001, KTs:0.0013, KJs:0.0382, KK:0.0547, A2s:0.0412, A3s:0.0073, A4s:0.0024, A5s:0.2109, A6s:0.0007, A7s:0.0120, A8s:0.0033, A9s:0.0263, ATs:0.0116, AJs:0.0001, AQs:0.2424, AKs:0.0011, AA:0.7109"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1780, A2o:0.0239, 33:0.0554, A3o:0.1905, 43s:0.0003, A4o:0.0001, 53s:0.0003, 54s:0.0002, 55:0.0180, A5o:0.0510, 63s:0.0309, 64s:0.0003, 65s:0.1043, 66:0.0001, A6o:0.0334, 75s:0.0011, 76s:0.0166, 77:0.0002, A7o:0.0006, 82s:0.0021, 85s:0.0116, 86s:0.0004, 96s:0.0001, 97s:0.0002, 98s:0.0010, A9o:0.0041, T2s:0.0008, J3s:0.0003, J7s:0.0020, JJ:0.0001, AJo:0.0001, QJs:0.0001, AQo:0.0002, K6s:0.0003, KJs:0.0013, KK:0.2193, AKo, A2s:0.3166, A3s:0.0551, A4s:0.0198, A5s:0.1398, A6s:0.0008, A7s:0.0254, A8s:0.0035, A9s:0.0014, AQs:0.0014, AKs:0.9988, AA:0.2891"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@9|SB:4BET@74.75",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0002, AQo:0.0023, KK:0.2740, AKo, A5s:0.0001, AQs:0.0035, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.7817, 33:0.9489, 44:0.9997, 54s:0.7455, 55:0.9891, 64s:0.0100, 65s:0.8268, 66:0.7172, 75s:0.8863, 76s:0.6776, 77, A7o:0.2291, 86s:0.6449, 87s:0.8824, 88, A8o:0.9871, 96s:0.0001, 97s:0.7776, 98s:0.8572, 99, A9o:0.9744, T7s:0.4769, T8s:0.9695, T9s:0.9424, TT:0.9064, JTo:0.7170, QTo:0.5696, KTo:0.7866, ATo:0.8903, J5s:0.0001, J7s:0.0020, J8s:0.9951, J9s:0.9701, JTs, JJ:0.9973, QJo:0.9503, KJo:0.7772, AJo:0.5104, Q4s:0.0004, Q5s:0.1886, Q6s:0.4807, Q7s:0.9875, Q8s:0.9994, Q9s:0.9990, QTs, QJs, QQ:0.9823, KQo:0.9975, AQo:0.4280, K3s:0.6541, K4s:0.0117, K5s:0.1266, K6s:0.7877, K7s:0.9979, K8s:0.9991, K9s, KTs, KJs, KQs, AKo:0.5194, A2s:0.0248, A3s:0.4246, A4s:0.8255, A5s:0.9723, A6s:0.5530, A7s, A8s, A9s, ATs:0.9996, AJs, AQs, AKs:0.0500"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.2074, A2o:0.0148, 33:0.0502, K3o:0.0001, A3o:0.6025, 43s:0.0001, 44:0.0001, K4o:0.0001, A4o:0.9768, 54s:0.2450, 55:0.0109, K5o:0.0001, A5o:0.9997, 65s:0.1684, 66:0.2828, K6o:0.0005, A6o:0.6754, 75s:0.0002, 76s:0.3165, K7o:0.0003, A7o:0.7664, 87s:0.1086, K8o:0.0002, A8o:0.0129, 97s:0.2027, 98s:0.1405, T9o:0.0009, Q9o:0.0008, K9o:0.1257, A9o:0.0255, T7s:0.2179, T8s:0.0300, T9s:0.0576, TT:0.0936, JTo:0.2803, QTo:0.4287, KTo:0.2133, ATo:0.1097, J6s:0.0021, J7s:0.0469, J8s:0.0004, J9s:0.0292, JJ:0.0027, QJo:0.0494, KJo:0.2227, AJo:0.4896, Q4s:0.0140, Q5s:0.0581, Q6s:0.2237, Q7s:0.0009, Q8s:0.0003, Q9s:0.0008, QQ:0.0177, KQo:0.0025, AQo:0.5720, K2s:0.9951, K3s:0.3124, K4s:0.9853, K5s:0.8729, K6s:0.2121, K7s:0.0020, K8s:0.0008, KK, AKo:0.4806, A2s:0.9751, A3s:0.5754, A4s:0.1744, A5s:0.0277, A6s:0.4470, A8s:0.0001, ATs:0.0004, AKs:0.9500, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9990, Q2o:0.6898, K2o:0.9032, A2o:0.5761, 32s:0.9994, 33, 43o:0.7432, 53o:0.4923, J3o:0.0009, Q3o:0.8048, K3o:0.9932, A3o:0.5282, 42s:0.9832, 43s, 44:0.9884, 54o:0.8080, 64o:0.9540, 74o:0.0830, J4o:0.8811, Q4o:0.7376, K4o:0.9825, A4o:0.9397, 52s:0.9990, 53s:0.9648, 54s:0.8338, 55, 65o:0.9699, 75o:0.8873, 85o:0.7963, J5o:0.8130, Q5o:0.9933, K5o:0.7001, A5o:0.7386, 62s:0.8391, 63s:0.9993, 64s:0.9923, 65s:0.3770, 66, 76o:0.9060, 86o:0.7919, 96o:0.8404, T6o:0.8279, J6o:0.9908, Q6o:0.9976, K6o:0.7444, A6o:0.8623, 72s:0.9998, 73s:0.9995, 74s:0.9998, 75s:0.8241, 76s:0.9849, 77, 87o:0.9997, 97o:0.9775, T7o:0.8272, J7o:0.8609, Q7o:0.9716, K7o:0.7799, A7o:0.9690, 82s:0.5535, 83s:0.9818, 84s:0.9681, 85s:0.9989, 86s:0.9622, 87s:0.9979, 88, 98o:0.9900, T8o:0.8433, J8o:0.8953, Q8o:0.7698, K8o:0.9927, A8o, 92s:0.9982, 93s:0.9998, 94s:0.9980, 95s:0.8407, 96s:0.9870, 97s:0.9269, 98s, 99, T9o:0.9771, J9o:0.6630, Q9o, K9o:0.9816, A9o, T2s, T3s, T4s:0.9529, T5s, T6s:0.7233, T7s:0.7380, T8s:0.9876, T9s:0.8029, TT, JTo, QTo:0.9383, KTo, ATo, J2s, J3s, J4s:0.9195, J5s, J6s, J7s:0.4934, J8s:0.8930, J9s, JTs, JJ, QJo, KJo, AJo, Q2s:0.9998, Q3s, Q4s, Q5s, Q6s:0.9998, Q7s, Q8s, Q9s, QTs:0.9650, QJs, QQ:0.9981, KQo, AQo:0.8663, K2s:0.9526, K3s:0.9998, K4s:0.9853, K5s:0.7596, K6s:0.9681, K7s:0.9885, K8s, K9s, KTs:0.9996, KJs, KQs, A2s:0.9329, A3s:0.9864, A4s:0.4665, A5s:0.8452, A6s:0.9672, A7s:0.9986, A8s, A9s, ATs, AJs, AQs:0.8356"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0010, 42o:0.0002, J2o:0.0005, Q2o:0.2448, K2o:0.0963, A2o:0.4239, 43o:0.0741, 53o:0.5065, 63o:0.0314, J3o:0.0001, Q3o:0.1920, K3o:0.0067, A3o:0.4718, 42s:0.0166, 44:0.0116, 54o:0.1917, 64o:0.0455, 74o:0.1566, J4o:0.0071, Q4o:0.2617, K4o:0.0174, A4o:0.0603, 52s:0.0009, 53s:0.0351, 54s:0.1662, 65o:0.0300, 75o:0.1122, 85o:0.1307, 95o:0.0569, J5o:0.1697, Q5o:0.0064, K5o:0.2998, A5o:0.2614, 62s:0.1607, 63s:0.0007, 64s:0.0077, 65s:0.6230, 76o:0.0939, 86o:0.2078, 96o:0.1540, T6o:0.1654, J6o:0.0060, Q6o:0.0023, K6o:0.2556, A6o:0.1377, 73s:0.0004, 74s:0.0001, 75s:0.1759, 76s:0.0151, 87o:0.0002, 97o:0.0225, T7o:0.1726, J7o:0.1388, Q7o:0.0284, K7o:0.2201, A7o:0.0310, 82s:0.4448, 83s:0.0162, 84s:0.0319, 85s:0.0011, 86s:0.0378, 87s:0.0021, 98o:0.0099, T8o:0.1566, J8o:0.1047, Q8o:0.2302, K8o:0.0073, 92s:0.0015, 94s:0.0018, 95s:0.1593, 96s:0.0130, 97s:0.0731, T9o:0.0229, J9o:0.3370, K9o:0.0184, T4s:0.0470, T5s:0.0001, T6s:0.2767, T7s:0.2620, T8s:0.0124, T9s:0.1971, QTo:0.0617, J4s:0.0805, J7s:0.5066, J8s:0.1070, JTs:0.0001, Q2s:0.0001, Q3s:0.0001, Q5s:0.0001, Q6s:0.0002, Q7s:0.0001, QTs:0.0350, QJs:0.0001, QQ:0.0019, KQo:0.0001, AQo:0.1337, K2s:0.0474, K3s:0.0002, K4s:0.0147, K5s:0.2404, K6s:0.0319, K7s:0.0115, K9s:0.0001, KTs:0.0004, KK, AKo, A2s:0.0671, A3s:0.0136, A4s:0.5335, A5s:0.1548, A6s:0.0328, A7s:0.0014, AQs:0.1644, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9406, 33:0.9934, 44:0.9983, A4o:0.0030, 53s:0.0151, 54s:0.5800, 55:0.9996, A5o:0.3863, 64s:0.0829, 65s:0.9988, 66:0.9995, 75s:0.0229, 76s:0.9604, 77:0.9996, 86s:0.2838, 87s:0.9901, 88:0.9997, A8o:0.0002, 95s:0.0010, 96s:0.0001, 97s:0.0819, 98s:0.7590, 99:0.9994, A9o:0.0632, T6s:0.0145, T7s:0.3547, T8s:0.9619, T9s:0.9947, TT:0.9997, JTo:0.1057, QTo:0.0016, KTo:0.0099, ATo:0.6786, J6s:0.0001, J7s:0.0098, J8s:0.9647, J9s:0.9984, JTs:0.9979, JJ, KJo:0.1517, AJo:0.7805, Q3s:0.0002, Q5s:0.0122, Q6s:0.0004, Q7s:0.6372, Q8s:0.6724, Q9s:0.9776, QTs:0.9995, QJs:0.9993, QQ:0.9997, KQo:0.8693, AQo:0.9892, K2s:0.0006, K3s:0.0338, K4s:0.0917, K5s:0.5626, K6s:0.8038, K7s:0.9857, K8s:0.9946, K9s:0.9842, KTs:0.9996, KJs:0.9998, KQs:0.9997, KK:0.8286, A2s:0.8849, A3s:0.9957, A4s:0.9991, A5s:0.9993, A6s:0.9989, A7s:0.9987, A8s:0.9991, A9s:0.9851, ATs:0.9982, AJs:0.9985, AQs:0.9995"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0276, A3o:0.1182, A4o:0.0987, A5o:0.1983, A6o:0.0588, K7o:0.0003, A7o:0.1840, K8o:0.0005, A8o:0.3048, 99:0.0002, A9o:0.3630, TT:0.0001, KTo:0.0001, ATo:0.2866, JTs:0.0001, KJo:0.0001, AJo:0.2009, QQ:0.0002, KQo:0.0002, AQo:0.0105, K2s:0.0002, K4s:0.0002, K5s:0.0011, K8s:0.0007, K9s:0.0006, KK:0.0991, AKo:0.0455, A2s:0.1040, A3s:0.0020, A4s:0.0002, A6s:0.0003, A7s:0.0006, A9s:0.0091, ATs:0.0007, AJs:0.0013, AKs:0.8148, AA:0.7436"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0667, A3o:0.0643, A4o:0.0838, A5o:0.0161, A6o:0.0276, K7o:0.0040, A7o:0.0323, A8o:0.0251, K9o:0.0010, A9o:0.1789, KTo:0.0033, ATo:0.0336, JJ:0.0001, KJo:0.0022, AJo:0.0121, Q3s:0.0001, Q5s:0.0001, QQ:0.0001, AQo:0.0001, K2s:0.0002, K3s:0.0001, K4s:0.0077, K5s:0.0057, K6s:0.0018, K7s:0.0001, K8s:0.0019, K9s:0.0045, KQs:0.0001, KK:0.0722, AKo:0.0014, A2s:0.0051, A3s:0.0011, A6s:0.0003, A7s:0.0001, A9s:0.0027, ATs:0.0001, AKs:0.1849, AA:0.2564"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, A4o:0.0001, A5o:0.0001, 65s:0.0001, 77:0.0003, 97s:0.0001, 99:0.0003, T9s:0.0001, TT:0.0001, AJo:0.0001, QQ:0.0001, AQo:0.0002, K6s:0.0001, KQs:0.0002, AKo:0.9532, A2s:0.0010, A3s:0.0005, A4s:0.0006, A5s:0.0004, A7s:0.0004, A8s:0.0007, A9s:0.0003, ATs:0.0010, AQs:0.0005, AKs:0.0003"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@17.7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0034, A2o:0.0011, 53o:0.0006, A3o:0.1254, 42s:0.0108, 44:0.0059, 54o:0.0209, K4o:0.0021, A4o:0.0055, 52s:0.0006, 53s:0.0278, 54s:0.0711, 65o:0.0108, K5o:0.0680, A5o:0.0211, 63s:0.0002, 64s:0.0039, 65s:0.0001, 76o:0.0305, 86o:0.0064, K6o:0.0676, A6o:0.0636, 73s:0.0001, 75s:0.0535, 76s:0.0037, K7o:0.0204, A7o:0.0280, 82s:0.0015, 83s:0.0009, 84s:0.0038, 85s:0.0008, 86s:0.0206, 87s:0.0005, 98o:0.0001, T8o:0.0561, J8o:0.0028, Q8o:0.0206, 92s:0.0003, 94s:0.0012, 95s:0.0934, 96s:0.0106, 97s:0.0558, T9o:0.0069, J9o:0.0598, K9o:0.0010, T4s:0.0346, T5s:0.0001, T6s:0.2070, T7s:0.1807, T8s:0.0072, T9s:0.1749, QTo:0.0601, J4s:0.0723, J7s:0.4957, J8s:0.1056, Q2s:0.0001, Q3s:0.0001, Q5s:0.0001, Q6s:0.0002, Q7s:0.0001, QTs:0.0348, QJs:0.0001, QQ:0.0019, KQo:0.0001, AQo:0.1336, K2s:0.0416, K3s:0.0002, K4s:0.0108, K5s:0.1659, K6s:0.0248, K7s:0.0081, K9s:0.0001, KTs:0.0004, KK:0.3575, AKo:0.0001, A2s:0.0001, A3s:0.0002, A4s:0.0114, A5s:0.0360, A6s:0.0044, A7s:0.0013, AQs:0.1644, AKs:0.0441, AA:0.4708"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0009, K2o:0.0002, A2o:0.2749, 53o:0.0085, K3o:0.0001, A3o:0.3307, 42s:0.0002, 44:0.0057, 54o:0.0045, K4o:0.0002, A4o:0.0485, 53s:0.0028, 54s:0.0905, 65o:0.0085, 75o:0.0001, K5o:0.0114, A5o:0.2398, 62s:0.0016, 63s:0.0004, 64s:0.0032, 65s:0.6222, 76o:0.0275, K6o:0.0025, A6o:0.0668, 75s:0.1208, 76s:0.0114, K7o:0.0013, A7o:0.0022, 84s:0.0016, 85s:0.0003, 86s:0.0152, 87s:0.0016, T8o:0.0018, K8o:0.0001, 95s:0.0028, 96s:0.0017, 97s:0.0103, T9o:0.0001, J9o:0.0001, K9o:0.0001, T4s:0.0026, T6s:0.0530, T7s:0.0812, T8s:0.0050, T9s:0.0221, QTo:0.0001, J4s:0.0003, J7s:0.0067, J8s:0.0013, JTs:0.0001, QTs:0.0001, AQo:0.0001, K2s:0.0038, K4s:0.0038, K5s:0.0745, K6s:0.0070, K7s:0.0034, KK:0.6425, AKo, A2s:0.0670, A3s:0.0134, A4s:0.5220, A5s:0.1188, A6s:0.0284, A7s:0.0001, AKs:0.9559, AA:0.5292"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@20",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.0001, A2o:0.0123, A3o:0.0175, 44:0.0067, A4o:0.0151, 53s:0.0001, 54s:0.0457, K5o:0.0123, A5o:0.0715, 65s:0.1149, 76o:0.0004, K6o:0.0002, A6o:0.0455, 75s:0.0153, 76s:0.0076, T7o:0.0001, K7o:0.0208, A7o:0.0083, 86s:0.0041, 87s:0.0008, T8o:0.0087, K8o:0.0001, 95s:0.0005, 97s:0.0353, T9o:0.0004, K9o:0.0023, T4s:0.0079, T6s:0.1339, T7s:0.0694, T8s:0.0039, T9s:0.0978, QTo:0.0257, J4s:0.0011, J7s:0.0327, J8s:0.0483, JTs:0.0001, QTs:0.0284, QJs:0.0001, QQ:0.0019, KQo:0.0001, AQo:0.1325, K2s:0.0377, K3s:0.0001, K4s:0.0017, K5s:0.0554, K6s:0.0129, K7s:0.0057, K9s:0.0001, AKo:0.0029, A2s:0.0027, A3s:0.0029, A4s:0.0280, A5s:0.0107, A6s:0.0082, A7s:0.0003, AQs:0.1627, AKs:0.0003, AA:0.4715"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.0047, A2o:0.1469, 53o:0.0005, K3o:0.0002, A3o:0.3623, 44:0.0048, 54o:0.0002, K4o:0.0006, A4o:0.0420, 53s:0.0087, 54s:0.1137, 75o:0.0016, K5o:0.0313, A5o:0.1776, 63s:0.0001, 64s:0.0010, 65s:0.3180, 76o:0.0001, 86o:0.0009, K6o:0.0225, A6o:0.0696, 75s:0.1520, 76s:0.0059, T7o:0.0007, K7o:0.0064, A7o:0.0141, 82s:0.0001, 84s:0.0001, 85s:0.0002, 86s:0.0231, 87s:0.0006, 98o:0.0001, T8o:0.0053, Q8o:0.0002, K8o:0.0007, 95s:0.0004, 97s:0.0102, K9o:0.0009, T4s:0.0001, T6s:0.0082, T7s:0.1183, T8s:0.0067, T9s:0.0891, J7s:0.1804, J8s:0.0086, QTs:0.0035, AQo:0.0012, K2s:0.0085, K4s:0.0117, K5s:0.1832, K6s:0.0186, K7s:0.0058, KTs:0.0004, KK, AKo:0.9971, A2s:0.0632, A3s:0.0107, A4s:0.4990, A5s:0.1441, A6s:0.0246, A7s:0.0010, AQs:0.0017, AKs:0.9997, AA:0.5285"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@10|BTN:4BET@74.75",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo, AQs:0.0005, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22, A2o:0.1660, 32s:0.9902, 33, 43o:0.8939, 53o:0.9979, K3o:0.0502, A3o:0.6701, 42s, 43s:0.9990, 44, 54o:0.9997, 64o:0.9939, 74o:0.0007, K4o:0.4678, A4o:0.0157, 52s:0.9980, 53s:0.9998, 54s:0.6205, 55, 65o:0.9308, 75o:0.9992, 85o:0.1709, Q5o:0.3695, K5o:0.7559, A5o:0.2438, 62s:0.9942, 63s:0.9998, 64s:0.9998, 65s:0.2805, 66, 76o:0.9996, 86o:0.9964, 96o:0.7363, Q6o:0.3350, K6o:0.4328, A6o:0.6621, 72s:0.9380, 73s:0.9990, 74s, 75s:0.9992, 76s:0.9998, 77, 87o:0.9975, 97o:0.9756, T7o:0.8972, J7o:0.6516, Q7o:0.9084, K7o:0.9185, A7o:0.7276, 82s:0.9935, 83s:0.9966, 84s:0.9983, 85s:0.9993, 86s:0.9992, 87s:0.9174, 88, 98o:0.9987, T8o:0.9985, J8o:0.6378, Q8o:0.4212, K8o:0.9967, A8o:0.9835, 92s:0.9829, 93s:0.9975, 94s:0.9845, 95s:0.9953, 96s:0.6248, 97s:0.9458, 98s:0.7747, 99, T9o:0.5996, J9o:0.8026, Q9o:0.9998, K9o:0.9075, A9o:0.9530, T2s:0.9980, T3s:0.9938, T4s:0.9843, T5s:0.9977, T6s:0.9996, T7s:0.9868, T8s:0.8795, T9s:0.9997, TT:0.9183, JTo, QTo:0.8801, KTo:0.9027, ATo:0.7397, J2s:0.9951, J3s:0.9976, J4s:0.9954, J5s, J6s:0.9997, J7s:0.9916, J8s:0.9642, J9s:0.9402, JTs, JJ:0.3792, QJo:0.8426, KJo:0.9196, AJo:0.9997, Q2s:0.9973, Q3s:0.9886, Q4s:0.9958, Q5s:0.9998, Q6s:0.9917, Q7s:0.9984, Q8s:0.9997, Q9s:0.9950, QTs:0.9995, QJs:0.9297, KQo:0.6452, AQo:0.0041, K2s:0.9958, K3s:0.9886, K4s:0.9991, K5s:0.9777, K6s:0.9996, K7s, K8s, K9s, KTs:0.9996, KJs:0.9998, KQs:0.9933, A2s:0.6736, A3s:0.8167, A4s:0.9982, A5s:0.9137, A6s:0.9844, A7s:0.6837, A8s:0.9997, A9s, ATs, AJs:0.9997, AQs:0.0137"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "42o:0.0001, Q2o:0.0002, K2o:0.0079, A2o:0.8339, 32s:0.0087, 43o:0.0003, J3o:0.0001, Q3o:0.0044, K3o:0.5657, A3o:0.3292, 43s:0.0001, K4o:0.5060, A4o:0.9841, 52s:0.0008, 53s:0.0001, 54s:0.3792, 65o:0.0681, J5o:0.0003, Q5o:0.2763, K5o:0.2422, A5o:0.7562, 62s:0.0001, 65s:0.7185, 76o:0.0003, 86o:0.0002, 96o:0.0006, Q6o:0.4331, K6o:0.5657, A6o:0.3379, 72s:0.0001, 75s:0.0007, 97o:0.0235, T7o:0.0683, J7o:0.0495, Q7o:0.0521, K7o:0.0797, A7o:0.2723, 82s:0.0003, 84s:0.0001, 86s:0.0003, 87s:0.0824, T8o:0.0011, J8o:0.3451, Q8o:0.5741, K8o:0.0028, A8o:0.0165, 93s:0.0001, 94s:0.0135, 95s:0.0022, 96s:0.3751, 97s:0.0541, 98s:0.2252, T9o:0.3999, J9o:0.1958, K9o:0.0921, A9o:0.0470, T2s:0.0005, T3s:0.0012, T4s:0.0148, T5s:0.0007, T6s:0.0003, T7s:0.0130, T8s:0.1204, T9s:0.0001, TT:0.0817, QTo:0.1198, KTo:0.0971, ATo:0.2603, J2s:0.0001, J3s:0.0020, J4s:0.0038, J7s:0.0079, J8s:0.0357, J9s:0.0595, JJ:0.6208, QJo:0.1574, KJo:0.0804, AJo:0.0002, Q2s:0.0024, Q3s:0.0109, Q4s:0.0039, Q6s:0.0082, Q7s:0.0015, Q8s:0.0003, Q9s:0.0050, QTs:0.0005, QJs:0.0702, QQ, KQo:0.3547, AQo:0.9959, K2s:0.0039, K3s:0.0111, K4s:0.0008, K5s:0.0220, K6s:0.0002, KTs:0.0003, KJs:0.0001, KQs:0.0067, KK, AKo, A2s:0.3264, A3s:0.1833, A4s:0.0018, A5s:0.0862, A6s:0.0156, A7s:0.3163, A8s:0.0003, A9s:0.0001, AJs:0.0003, AQs:0.9863, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0003, 33:0.0033, 44:0.3499, 54s:0.1080, 55:0.2155, 64s:0.0176, 65s:0.2883, 66:0.4081, 76s:0.0007, 77:0.1948, 85s:0.0010, 86s:0.0068, 87s:0.0006, 88:0.7612, 98s:0.0010, 99:0.5022, T9s:0.0297, TT:0.5130, J9s:0.2956, JTs:0.0006, JJ:0.1931, QJo:0.0002, Q5s:0.0005, Q6s:0.0004, Q7s:0.0003, Q9s:0.0010, QTs:0.2824, QJs:0.9950, QQ:0.9080, KQo:0.2552, AQo:0.8167, K5s:0.0308, K6s:0.1317, K8s:0.1394, K9s:0.4288, KTs:0.9750, KJs:0.0351, KQs:0.1232, KK:0.0971, A2s:0.0106, A3s:0.0288, A4s:0.2326, A5s:0.8709, A6s:0.1620, A7s:0.0331, A8s:0.3619, A9s:0.6981, ATs:0.5823, AJs:0.2109, AQs:0.9998, AKs:0.0007, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0547, A3o:0.0048, 44:0.0001, A4o:0.1114, 53s:0.0005, A5o:0.2575, A6o:0.0182, 75s:0.0006, A7o:0.0236, 87s:0.0001, A8o:0.0034, A9o:0.0103, TT:0.0372, ATo:0.1533, J9s:0.0001, JTs:0.0003, JJ:0.0657, AJo:0.1126, Q3s:0.0001, Q7s:0.0003, QQ:0.0380, KQo:0.0024, AQo:0.1235, K3s:0.0040, K4s:0.0101, K5s:0.0074, K6s:0.0057, K7s:0.0004, K9s:0.0004, KJs:0.0162, KQs:0.0005, KK:0.0383, AKo:0.0002, A2s:0.2586, A3s:0.0562, A4s:0.2690, A5s:0.0288, A6s:0.3612, A7s:0.2927, A8s:0.0241, A9s:0.0584, ATs:0.0220, AJs:0.0035, AKs:0.3747, AA:0.7512"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0284, A3o:0.0074, A4o:0.0798, A5o:0.0996, A6o:0.0008, A7o:0.0392, K9o:0.0001, A9o:0.0011, ATo:0.0075, JJ:0.0001, AJo:0.0808, QJs:0.0001, QQ:0.0008, KQo:0.0014, AQo:0.0596, K2s:0.0001, K4s:0.0026, K5s:0.0004, KTs:0.0004, KJs:0.0103, KQs:0.0001, KK:0.0423, AKo:0.0087, A2s:0.0255, A3s:0.0626, A4s:0.0499, A5s:0.0001, A6s:0.0023, A7s:0.0115, A8s:0.0091, A9s:0.0035, ATs:0.0059, AJs:0.0010, AKs:0.2115, AA:0.2486"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0133, 44:0.0009, 55:0.0269, 65s:0.0001, 66:0.1542, 77:0.3875, 87s:0.0004, 88:0.0228, 98s:0.0003, 99:0.1516, TT:0.3900, J9s:0.0001, JTs:0.0001, JJ:0.7408, QJo:0.0001, AJo:0.0009, Q5s:0.0002, Q6s:0.0001, Q7s:0.0001, Q9s:0.0002, QTs:0.0005, QJs:0.0003, QQ:0.0533, KQo:0.0709, AQo:0.0001, K4s:0.0013, K5s:0.0076, K6s:0.0535, K7s:0.0005, K8s:0.0192, K9s:0.0299, KTs:0.0241, KJs:0.8814, KQs:0.8722, KK:0.8223, AKo:0.9910, A2s:0.4316, A3s:0.7957, A4s:0.3283, A5s:0.0895, A6s:0.2671, A7s:0.6235, A8s:0.5438, A9s:0.2170, ATs:0.3690, AJs:0.7836, AQs:0.0001, AKs:0.4131"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 44:0.0259, 54s:0.0239, 55:0.7566, 65s:0.0299, 66:0.6617, 76s:0.0959, 77:0.8480, 88:0.9086, 99:0.9409, T9s:0.0020, TT:0.8995, ATo:0.0061, JTs:0.2037, JJ:0.8833, KJo:0.0001, AJo:0.0271, Q8s:0.0002, Q9s:0.0008, QTs:0.8221, QJs:0.8508, QQ:0.6905, KQo:0.1697, AQo:0.4045, K4s:0.0001, K6s:0.0116, K9s:0.9333, KTs:0.9734, KJs:0.9427, KQs:0.9857, A2s:0.0003, A3s:0.2159, A4s:0.3462, A5s:0.9213, A6s:0.2047, A7s:0.6146, A8s:0.7309, A9s:0.9696, ATs:0.9572, AJs:0.9969, AQs"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "22:0.0003, 44:0.0081, A8o:0.0029, 99:0.0115, A9o:0.0016, QTo:0.0012, ATo:0.0007, Q8s:0.0033, Q9s:0.0002, QTs:0.0018, QJs:0.0024, QQ:0.0299, KQo:0.0124, AQo:0.0229, K4s:0.0002, K5s:0.0001, K7s:0.0004, K9s:0.0001, KJs:0.0003, KQs:0.0002, AKo:0.0331, A3s:0.0133, A4s:0.0334, A5s:0.0021, A6s:0.0144, A7s:0.0003, A8s:0.0026, AQs:0.0001, AKs:0.0103"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.1700, 55:0.0019, 66:0.0028, 77:0.0849, 88:0.0896, 99:0.0459, TT:0.0054, KTo:0.0001, JJ:0.1139, KJo:0.0001, AJo:0.0021, QQ:0.2620, KQo:0.0009, AQo:0.0006, K5s:0.0001, K7s:0.0001, K8s:0.0002, K9s:0.0001, KTs:0.0164, KJs:0.0559, KQs:0.0139, AKo:0.4863, A2s:0.0095, A3s:0.1514, A4s:0.2297, A5s:0.0298, A6s:0.0835, A7s:0.2297, A8s:0.2639, A9s:0.0249, ATs:0.0408, AJs:0.0025, AKs:0.0397"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0440, A3o:0.0023, K4o:0.0001, A4o:0.0650, A5o:0.0064, A6o:0.0069, K7o:0.0002, A7o:0.0248, 87s:0.0002, A8o:0.0114, 99:0.0001, A9o:0.0146, T8s:0.0001, TT:0.0020, ATo:0.0001, J8s:0.0001, JTs:0.0001, JJ:0.0506, QQ:0.0207, KQo:0.0001, AQo:0.4181, K5s:0.0062, K7s:0.0023, K8s:0.0002, KTs:0.0018, KJs:0.0004, KQs:0.0011, KK:0.0079, AKo:0.0070, A2s:0.2018, A3s:0.0629, A4s:0.1123, A5s:0.0522, A6s:0.0772, A7s:0.2205, A8s:0.2740, A9s:0.2848, ATs:0.0186, AJs:0.6788, AQs:0.7943, AKs:0.5148, AA:0.9183"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.0114, A3o:0.0103, K4o:0.0002, A4o:0.0135, K5o:0.0004, A5o:0.0048, A6o:0.0127, A7o:0.0137, K8o:0.0049, A8o:0.0028, 99:0.0002, A9o:0.0002, KTo:0.0002, JJ:0.0001, KJo:0.0001, AJo:0.0059, QQ:0.0114, KQo:0.0019, AQo:0.0144, K2s:0.0139, K3s:0.0011, K4s:0.0030, K5s:0.0090, K6s:0.0009, K7s:0.0024, K8s:0.0065, K9s:0.0003, KTs:0.0007, KJs:0.0004, KQs:0.0018, KK:0.0093, AKo:0.0014, A2s:0.0008, A3s:0.0021, A4s:0.0002, A5s:0.0028, A6s:0.0019, A7s:0.0723, A8s:0.0047, A9s:0.0217, ATs:0.0007, AQs:0.0051, AKs:0.0632, AA:0.0817"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0174, 88:0.4328, 99:0.0698, TT:0.0645, JJ:0.1749, Q7s:0.0002, Q8s:0.0001, QQ:0.1944, KQo:0.0001, AQo:0.0017, K3s:0.0174, K4s:0.0011, K5s:0.0014, K6s:0.0010, K7s:0.0242, K8s:0.0073, K9s:0.0287, KTs:0.1385, KJs:0.0854, KQs:0.1222, KK:0.9828, AKo:0.9916, A2s:0.1693, A3s:0.4155, A4s:0.0571, A5s:0.6449, A6s:0.2004, A7s:0.1204, A8s:0.2762, A9s:0.2515, ATs:0.5548, AJs:0.1816, AQs:0.1042, AKs:0.4219"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.1316, 33:0.5141, 44:0.7289, 54s:0.4110, 55:0.9036, A5o:0.0008, 64s:0.0038, 65s:0.9797, 66:0.9625, 75s:0.0077, 76s:0.9371, 77:0.9652, 86s:0.0314, 87s:0.0003, 88:0.7624, 98s:0.5301, 99:0.9898, A9o:0.0015, T8s:0.1387, T9s:0.9669, TT:0.9659, KTo:0.0340, ATo:0.8863, J8s:0.0071, J9s:0.4073, JTs:0.9728, JJ:0.9908, KJo:0.0386, AJo:0.6933, Q5s:0.0001, Q8s:0.0005, Q9s:0.0569, QTs:0.9788, QJs:0.9342, QQ:0.9992, KQo:0.9019, AQo:0.9996, K2s:0.0287, K3s:0.0339, K4s:0.1713, K5s:0.8927, K6s:0.1334, K7s:0.3696, K8s:0.6177, K9s:0.4945, KTs:0.7618, KJs:0.9966, KQs:0.9960, KK:0.0919, A2s:0.0247, A3s:0.1138, A4s:0.2064, A5s:0.6182, A6s:0.7714, A7s:0.5170, A8s:0.7294, A9s:0.9423, ATs:0.9997, AJs, AQs:0.9998"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A2o:0.0846, A3o:0.0465, 44:0.0018, A4o:0.0072, 54s:0.0017, A5o:0.1902, 64s:0.0056, A6o:0.1118, 76s:0.0002, A7o:0.0760, 87s:0.0999, 88:0.0001, A8o:0.2210, 98s:0.1251, A9o:0.1060, T9s:0.0018, TT:0.0204, ATo:0.0700, J8s:0.0002, J9s:0.0005, AJo:0.2490, Q8s:0.0002, Q9s:0.0002, QTs:0.0001, AQo:0.0001, K2s:0.1789, K3s:0.0005, K4s:0.1954, K5s:0.0019, K6s:0.0004, K8s:0.0049, K9s:0.0001, KK:0.0006, AKo:0.0083, A2s:0.0411, A3s:0.0094, A4s:0.0345, A5s:0.0232, A6s:0.0350, A7s:0.0081, A9s:0.0012, AKs:0.7138, AA:0.7216"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0625, A3o:0.0430, 44:0.0001, A4o:0.0018, A5o:0.0298, A6o:0.0418, K7o:0.0004, A7o:0.0324, 87s:0.0002, K8o:0.0002, A8o:0.1473, 98s:0.0182, K9o:0.0032, A9o:0.0166, T7s:0.0001, KTo:0.0018, ATo:0.0005, KJo:0.0003, AJo:0.0506, KQo:0.0013, AQo:0.0001, K2s:0.0240, K3s:0.0007, K4s:0.1206, K5s:0.0007, K7s:0.0111, K8s:0.0097, K9s:0.0001, KK:0.0142, AKo:0.0005, A2s:0.0171, A3s:0.0010, A4s:0.0035, A6s:0.0002, A7s:0.0027, AKs:0.2646, AA:0.2784"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.7736, A2o:0.0001, 33:0.4630, A3o:0.0001, 44:0.2664, 54s:0.0001, 55:0.0962, A5o:0.0004, 64s:0.0001, 66:0.0374, 76s:0.0001, 77:0.0342, 87s:0.0001, 88:0.2370, A8o:0.0033, 99:0.0100, T6s:0.0001, T9s:0.0002, TT:0.0137, KTo:0.0003, ATo:0.0002, JTs:0.0009, JJ:0.0092, KJo:0.0014, AJo:0.0037, Q5s:0.0009, Q8s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0008, KQo:0.0006, AQo:0.0001, K2s:0.0089, K4s:0.0177, K5s:0.0836, K6s:0.3706, K7s:0.4038, K8s:0.2604, K9s:0.5034, KTs:0.2381, KJs:0.0033, KQs:0.0039, KK:0.8934, AKo:0.9912, A2s:0.9113, A3s:0.8544, A4s:0.7508, A5s:0.3584, A6s:0.1876, A7s:0.4679, A8s:0.2702, A9s:0.0562, ATs:0.0002, AJs:0.0001, AQs:0.0001, AKs:0.0215"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0357, 33:0.0041, 44:0.0001, 54s:0.0276, 55:0.0109, A5o:0.0237, 65s:0.1313, 66:0.2764, A6o:0.0021, 75s:0.0001, 76s:0.2494, A7o:0.0343, 87s:0.1039, A8o:0.0028, 97s:0.1437, 98s:0.1153, A9o:0.0166, T7s:0.1232, T8s:0.0276, T9s:0.0481, TT:0.0920, JTo:0.0039, QTo:0.0504, ATo:0.0557, J7s:0.0003, J8s:0.0001, J9s:0.0282, JJ:0.0027, QJo:0.0003, AJo:0.4870, Q6s:0.0406, Q7s:0.0001, Q8s:0.0001, Q9s:0.0006, QQ:0.0176, KQo:0.0011, AQo:0.5378, K2s:0.0028, K3s:0.0006, K4s:0.0583, K5s:0.1801, K6s:0.1036, K7s:0.0002, KK:0.7134, A2s:0.0092, A3s:0.0008, A4s:0.0027, A5s:0.0008, A6s:0.0145, A8s:0.0001, ATs:0.0001, AKs:0.0020, AA:0.3103"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1630, A2o:0.0001, 33:0.0460, A3o:0.1233, A4o:0.5581, 54s:0.0018, A5o:0.5164, 65s:0.0214, 66:0.0063, A6o:0.0155, 76s:0.0492, A7o:0.0940, 87s:0.0031, A8o:0.0001, 97s:0.0125, 98s:0.0148, A9o:0.0004, T7s:0.0063, T8s:0.0001, T9s:0.0088, TT:0.0015, ATo:0.0533, J7s:0.0001, J9s:0.0004, AJo:0.0016, Q9s:0.0001, QQ:0.0001, AQo:0.0342, K2s:0.0008, K3s:0.0001, K4s:0.0003, K6s:0.0007, KK:0.2866, AKo:0.4806, A2s:0.9639, A3s:0.5737, A4s:0.1708, A5s:0.0269, A6s:0.4318, ATs:0.0003, AKs:0.9480, AA:0.6897"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, A3o:0.0001, A4o:0.0004, 54s:0.1077, 55:0.0040, A5o:0.0102, 65s:0.0350, 66:0.2024, 76s:0.0666, A7o:0.0215, 87s:0.0406, A8o:0.0075, 97s:0.0329, 98s:0.0578, A9o:0.0124, T7s:0.0247, T8s:0.0044, T9s:0.0012, TT:0.0442, JTo:0.0033, QTo:0.0023, ATo:0.0883, J8s:0.0001, J9s:0.0008, JJ:0.0014, KJo:0.0037, AJo:0.4097, Q5s:0.0002, Q9s:0.0004, QQ:0.0131, AQo:0.4225, K4s:0.0075, K5s:0.0434, K6s:0.0369, K7s:0.0004, K8s:0.0001, KK:0.4884, A2s:0.0216, A3s:0.0284, A4s:0.0011, A5s:0.0062, A6s:0.0001, A8s:0.0001, ATs:0.0004, AA:0.4246"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1084, A2o:0.0002, 33:0.0483, A3o:0.0178, 44:0.0001, A4o:0.4118, 54s:0.0264, 55:0.0069, A5o:0.3893, 65s:0.1258, 66:0.0798, A6o:0.0146, 76s:0.1939, A7o:0.0748, 87s:0.0025, A8o:0.0001, 97s:0.1371, 98s:0.0051, A9o:0.0021, T7s:0.0080, T8s:0.0095, T9s:0.0545, TT:0.0494, JTo:0.0083, KTo:0.0020, ATo:0.0183, J7s:0.0011, J9s:0.0204, JJ:0.0013, KJo:0.0002, AJo:0.0374, Q5s:0.0002, Q6s:0.0012, Q9s:0.0001, QQ:0.0046, AQo:0.1338, K2s:0.0144, K3s:0.0019, K4s:0.0264, K5s:0.0045, K6s:0.0069, KK:0.5116, AKo:0.4806, A2s:0.8687, A3s:0.5111, A4s:0.1702, A5s:0.0206, A6s:0.4467, AKs:0.9500, AA:0.5754"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BTN:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0802, JJ:0.0025, QQ:0.0166, KK, AKo:0.4561, AKs:0.9500, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0020, QQ:0.0007, AQo:0.1142, KK:0.2610, AKo:0.0105, A2s:0.0001, A3s:0.0447, A4s:0.0466, A5s:0.0298, ATs:0.0003, AJs:0.0035, AQs:0.1269, AKs:0.0182, AA:0.2991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, 54s:0.0002, 55:0.0002, 74s:0.0037, 77:0.0049, 88:0.0066, 95s:0.0009, 96s:0.0001, T4s:0.0001, T6s:0.0016, T9s:0.0003, TT:0.0597, ATo:0.0258, JTs:0.0003, JJ:0.0024, AJo:0.0012, Q3s:0.0001, Q8s:0.0003, QJs:0.0002, QQ:0.0023, K7s:0.0010, K8s:0.0002, K9s:0.0032, KJs:0.0014, KQs:0.0043, KK:0.7367, AKo:0.9895, A2s:0.1543, A3s:0.0168, A4s:0.4285, A5s:0.2257, A6s:0.0537, A7s:0.0373, A8s:0.7213, A9s:0.4411, ATs:0.4648, AJs:0.4950, AQs:0.0006, AKs:0.9785, AA:0.7009"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0728, 33:0.0285, 44:0.0001, A4o:0.0031, 54s:0.0674, 55:0.0106, A5o:0.0086, 65s:0.0262, 66:0.2348, A6o:0.0002, 76s:0.0578, A7o:0.0075, 87s:0.0062, A8o:0.0003, 97s:0.0194, 98s:0.0122, A9o:0.0006, T7s:0.0046, T8s:0.0020, T9s:0.0091, TT:0.0614, JTo:0.0165, ATo:0.0061, J7s:0.0018, J9s:0.0057, JJ:0.0017, KJo:0.0008, AJo:0.0009, QQ:0.0176, AQo:0.4241, K3s:0.0054, K4s:0.0003, K5s:0.0258, K6s:0.0051, KK:0.3528, A2s:0.0029, A3s:0.0336, A4s:0.0156, A5s:0.0010, A6s:0.0110, AKs:0.0003, AA:0.0286"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0630, A2o:0.0004, 33:0.0167, A3o:0.0309, A4o:0.5682, 54s:0.0053, 55:0.0002, A5o:0.4073, 65s:0.0069, 66:0.0464, A6o:0.0149, 75s:0.0001, 76s:0.1186, A7o:0.1205, 87s:0.0108, A8o:0.0006, 98s:0.0148, A9o:0.0006, T7s:0.0006, T8s:0.0073, T9s:0.0287, TT:0.0322, JTo:0.0024, ATo:0.0935, J7s:0.0004, J9s:0.0005, JJ:0.0010, AJo:0.3081, QQ:0.0001, K2s:0.0006, K3s:0.0051, K4s:0.0039, K5s:0.0010, K6s:0.0012, KK:0.6472, AKo:0.4806, A2s:0.9500, A3s:0.5024, A4s:0.1584, A5s:0.0260, A6s:0.4303, A8s:0.0001, ATs:0.0004, AKs:0.9497, AA:0.9714"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 74s:0.0001, 75s:0.0004, 77:0.0002, 88:0.0022, A8o:0.0002, Q9o:0.0001, A9o:0.0001, T6s:0.0003, TT:0.0003, J2s:0.0005, JTs:0.0001, JJ:0.0001, AJo:0.0381, Q3s:0.0002, Q9s:0.0044, QQ:0.0011, AQo:0.0924, K5s:0.0001, KJs:0.0002, KK:0.2430, A3s:0.0003, A5s:0.0001, A6s:0.0003, A7s:0.0287, A8s:0.0210, A9s:0.0004, ATs:0.0067, AJs:0.0001, AQs:0.1698, AKs:0.0094, AA:0.2808"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 43s:0.1496, 44:0.0371, A4o:0.0021, 54s:0.0057, 65s:0.0092, 66:0.0001, K6o:0.0055, A6o:0.0071, 74s:0.0001, 75s:0.0527, 76s:0.0519, 77:0.0145, 85s:0.1339, 86s:0.0002, 87s:0.1252, 88:0.0037, T8o:0.0004, A8o:0.0001, 95s:0.0004, 96s:0.0071, 99:0.0049, Q9o:0.0001, A9o:0.0097, T3s:0.0001, T8s:0.0568, TT:0.1041, J4s:0.0001, J5s:0.0001, JTs:0.0038, JJ:0.0489, AJo:0.0002, Q2s:0.0040, Q3s:0.0013, Q7s:0.0007, Q9s:0.0002, QTs:0.0014, QJs:0.0218, QQ:0.0191, AQo:0.0178, K6s:0.0046, K8s:0.0258, KTs:0.1298, KJs:0.0177, KQs:0.0056, KK:0.7558, AKo:0.9986, A3s:0.2339, A4s:0.0543, A5s:0.0506, A6s:0.1826, A8s:0.2785, A9s:0.0047, ATs:0.0052, AJs:0.1919, AQs:0.1315, AKs:0.9802, AA:0.7192"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0236, 55:0.0031, A5o:0.0027, 65s:0.0001, 66:0.1286, A6o:0.0034, 76s:0.0172, A7o:0.0045, 87s:0.0436, 97s:0.0312, 98s:0.0114, T7s:0.0109, T8s:0.0088, T9s:0.0046, TT:0.0161, ATo:0.0036, J7s:0.0037, J9s:0.0014, JJ:0.0018, AJo:0.0782, QQ:0.0174, KQo:0.0002, AQo:0.2053, K2s:0.0098, K4s:0.0009, K5s:0.0068, KK:0.2058, A2s:0.0065, A3s:0.1041, A4s:0.0039, A5s:0.0075, A6s:0.0001, AKs:0.0018, AA:0.0815"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0999, A2o:0.0035, 33:0.0248, A3o:0.1405, A4o:0.3649, 54s:0.0295, 55:0.0023, A5o:0.2778, 65s:0.0196, 66:0.1303, A6o:0.0600, 76s:0.0040, A7o:0.2164, 87s:0.0377, A8o:0.0005, 97s:0.1101, 98s:0.0001, K9o:0.0019, T7s:0.0048, T8s:0.0007, T9s:0.0315, TT:0.0681, JTo:0.0002, KTo:0.0090, ATo:0.0450, J7s:0.0001, JJ:0.0008, KJo:0.0020, AJo:0.0071, Q5s:0.0001, Q6s:0.0003, QQ:0.0001, AQo:0.0113, K2s:0.0210, K3s:0.0091, K4s:0.0845, K5s:0.0038, K6s:0.0570, K7s:0.0003, K8s:0.0001, KK:0.7942, AKo:0.4806, A2s:0.8282, A3s:0.2593, A4s:0.0689, A5s:0.0106, A6s:0.4055, A8s:0.0001, ATs:0.0004, AKs:0.9481, AA:0.9185"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.1216, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0065, KK, AKo:0.4433, AKs:0.9482, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.2065, 44:0.6550, 54s:0.4839, 55:0.9842, 64s:0.0011, 65s:0.7001, 66:0.6135, 75s:0.0001, 76s:0.6590, 77:0.8183, 86s:0.0004, 87s:0.6367, 88:0.6412, 97s:0.2071, 98s:0.6355, 99:0.9587, A9o:0.3404, T7s:0.0001, T8s:0.2175, T9s:0.6987, TT:0.8631, KTo:0.0011, ATo:0.8357, J8s:0.1320, J9s:0.9598, JTs:0.9970, JJ:0.7000, QJo:0.4694, KJo:0.4760, AJo:0.6504, Q8s:0.3343, Q9s:0.9752, QTs:0.9994, QJs, QQ, KQo:0.7519, AQo:0.1429, K3s:0.0005, K4s:0.0001, K5s:0.4145, K6s:0.0848, K7s:0.2340, K8s:0.6454, K9s:0.9512, KTs:0.9929, KJs:0.9320, KQs, KK:0.3690, AKo:0.4212, A2s:0.0026, A3s:0.0159, A4s:0.0096, A5s:0.3169, A6s:0.3995, A7s:0.5540, A8s:0.7187, A9s:0.9239, ATs:0.8957, AJs:0.9995, AQs:0.9981, AKs:0.2053"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.0001, 33:0.1078, A3o:0.0050, 44:0.3233, A4o:0.1035, 54s:0.0795, 55:0.0155, A5o:0.6298, 65s:0.1669, 66:0.3865, A6o:0.0627, 75s:0.0001, 76s:0.2853, 77:0.1817, A7o:0.0637, 86s:0.0018, 87s:0.0229, 88:0.3587, A8o:0.3044, 97s:0.1145, 98s:0.2894, 99:0.0413, K9o:0.0002, A9o:0.6271, T8s:0.7264, T9s:0.2954, TT:0.1369, JTo:0.1373, KTo:0.4260, ATo:0.1643, J7s:0.0001, J8s:0.1171, J9s:0.0296, JTs:0.0030, JJ:0.3000, QJo:0.3387, KJo:0.5235, AJo:0.3496, Q8s:0.0408, Q9s:0.0096, KQo:0.2481, AQo:0.8571, K2s:0.0132, K3s:0.6932, K4s:0.6133, K5s:0.5394, K6s:0.9099, K7s:0.7556, K8s:0.3484, K9s:0.0480, KTs:0.0070, KJs:0.0680, KK:0.6310, AKo:0.5788, A2s:0.9973, A3s:0.9841, A4s:0.9904, A5s:0.6831, A6s:0.6002, A7s:0.4460, A8s:0.2813, A9s:0.0760, ATs:0.1043, AJs:0.0005, AQs:0.0019, AKs:0.7947, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9884, 33:0.9643, 44:0.9266, 54s:0.9997, 55:0.9971, 63s:0.0001, 64s:0.0377, 65s:0.6197, 66:0.8919, 75s:0.5076, 76s:0.9918, 77:0.9982, 85s:0.0006, 86s:0.0761, 87s:0.9809, 88:0.9984, 97s:0.8164, 98s:0.9790, 99:0.9912, A9o:0.8231, T7s:0.0256, T8s:0.6674, T9s:0.9827, TT, JTo:0.0128, QTo:0.3262, KTo:0.5388, ATo:0.9174, J7s:0.0019, J8s:0.6460, J9s:0.8028, JTs:0.9966, JJ:0.8810, QJo:0.7864, KJo:0.4937, AJo:0.8698, Q8s:0.8747, Q9s:0.9920, QTs:0.9996, QJs, QQ, KQo:0.8742, AQo:0.1752, K2s:0.0001, K3s:0.0801, K4s:0.1167, K5s:0.4710, K6s:0.4445, K7s:0.9407, K8s:0.9877, K9s:0.9936, KTs:0.9964, KJs, KQs, KK:0.0023, AKo:0.4769, A2s:0.0053, A3s:0.0049, A4s:0.3716, A5s:0.8360, A6s:0.0973, A7s:0.5952, A8s:0.8633, A9s:0.9997, ATs, AJs:0.9992, AQs:0.9991, AKs:0.4002"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.0001, A2o:0.0109, 33:0.0356, K3o:0.0001, A3o:0.2337, 44:0.0724, A4o:0.2339, 53s:0.0072, 55:0.0029, A5o:0.8326, 64s:0.0001, 65s:0.3736, 66:0.1080, A6o:0.2785, 74s:0.0006, 76s:0.0035, 77:0.0018, A7o:0.4682, 85s:0.0036, 86s:0.5672, 87s:0.0170, 88:0.0016, K8o:0.0001, A8o:0.1659, 99:0.0088, A9o:0.1670, T7s:0.0013, T8s:0.3213, T9s:0.0169, JTo:0.0305, QTo:0.0671, KTo:0.4475, ATo:0.0826, J5s:0.0001, J8s:0.0608, J9s:0.1962, JTs:0.0033, JJ:0.1190, QJo:0.2012, KJo:0.5061, AJo:0.1302, Q6s:0.0083, Q8s:0.1133, Q9s:0.0020, QTs:0.0004, KQo:0.1257, AQo:0.8248, K2s:0.0991, K3s:0.6539, K4s:0.5108, K5s:0.4986, K6s:0.5485, K7s:0.0580, K8s:0.0116, K9s:0.0059, KTs:0.0036, KK:0.9977, AKo:0.5231, A2s:0.9946, A3s:0.9951, A4s:0.6283, A5s:0.1640, A6s:0.9025, A7s:0.4047, A8s:0.1367, A9s:0.0003, AJs:0.0008, AQs:0.0009, AKs:0.5998, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22, K2o:0.0001, A2o:0.6303, 32s:0.9961, 33:0.9983, 53o:0.3359, K3o:0.0368, A3o:0.6662, 42s:0.9980, 43s:0.9742, 44, 54o:0.6902, 64o:0.7126, K4o:0.7379, A4o:0.8038, 52s:0.9995, 53s:0.9996, 54s:0.9126, 55:0.9978, 65o:0.9234, 75o:0.9754, K5o:0.9313, A5o:0.8821, 62s:0.9990, 63s:0.9992, 64s:0.9986, 65s:0.9726, 66, 76o:0.9997, 86o:0.8708, Q6o:0.5168, K6o:0.9908, A6o:0.5819, 72s:0.8813, 73s:0.9995, 74s:0.9997, 75s, 76s:0.9833, 77, 87o:0.9992, 97o:0.9953, T7o:0.9287, J7o:0.2597, Q7o:0.9772, K7o:0.9609, A7o:0.9980, 82s:0.9493, 83s:0.9944, 84s, 85s:0.9940, 86s:0.9964, 87s:0.7961, 88:0.9998, 98o:0.9993, T8o:0.9995, J8o:0.9579, Q8o:0.9680, K8o:0.9008, A8o:0.9669, 92s:0.9909, 93s:0.9992, 94s, 95s:0.9998, 96s:0.9997, 97s:0.9987, 98s, 99, T9o:0.9686, J9o:0.9338, Q9o:0.9450, K9o:0.9975, A9o, T2s:0.9972, T3s:0.9987, T4s:0.9389, T5s:0.9532, T6s, T7s:0.6588, T8s:0.9925, T9s:0.8818, TT, JTo:0.8606, QTo, KTo:0.9884, ATo, J2s:0.9981, J3s:0.9998, J4s:0.9998, J5s:0.9984, J6s:0.9975, J7s:0.7903, J8s:0.9975, J9s:0.9601, JTs:0.9951, JJ, QJo:0.9558, KJo, AJo, Q2s:0.9994, Q3s, Q4s, Q5s:0.9995, Q6s, Q7s:0.9998, Q8s:0.9957, Q9s:0.7900, QTs, QJs, QQ:0.9496, KQo, AQo, K2s, K3s:0.9998, K4s:0.9988, K5s:0.9998, K6s:0.9890, K7s, K8s, K9s, KTs, KJs, KQs, KK:0.7060, AKo:0.4580, A2s:0.6550, A3s:0.8818, A4s:0.7840, A5s:0.6024, A6s:0.9633, A7s, A8s:0.9939, A9s, ATs, AJs, AQs:0.9994, AKs:0.6541"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0687, A2o:0.3697, 32s:0.0003, 33:0.0017, 53o:0.0001, 63o:0.0001, Q3o:0.0001, K3o:0.0465, A3o:0.3337, 43s:0.0257, 54o:0.3094, 64o:0.0143, K4o:0.0350, A4o:0.1962, 52s:0.0003, 53s:0.0001, 54s:0.0873, 55:0.0022, 65o:0.0762, 75o:0.0015, Q5o:0.0881, K5o:0.0650, A5o:0.1178, 62s:0.0003, 64s:0.0013, 65s:0.0274, 76o:0.0001, 86o:0.1264, Q6o:0.0147, K6o:0.0061, A6o:0.4180, 74s:0.0002, 76s:0.0166, 87o:0.0003, T7o:0.0471, J7o:0.0268, Q7o:0.0131, K7o:0.0386, A7o:0.0020, 82s:0.0377, 83s:0.0027, 85s:0.0059, 86s:0.0035, 87s:0.2039, 88:0.0002, T8o:0.0003, J8o:0.0410, Q8o:0.0317, K8o:0.0991, A8o:0.0331, 95s:0.0001, 97s:0.0008, T9o:0.0311, J9o:0.0660, Q9o:0.0550, K9o:0.0024, T2s:0.0001, T4s:0.0607, T5s:0.0438, T6s:0.0001, T7s:0.3412, T8s:0.0075, T9s:0.1181, JTo:0.1394, QTo:0.0001, KTo:0.0116, ATo:0.0001, J2s:0.0015, J4s:0.0002, J5s:0.0010, J6s:0.0024, J7s:0.2097, J8s:0.0025, J9s:0.0398, JTs:0.0049, QJo:0.0442, Q2s:0.0004, Q3s:0.0001, Q5s:0.0004, Q7s:0.0001, Q8s:0.0043, Q9s:0.2100, QQ:0.0504, K2s:0.0001, K4s:0.0012, K5s:0.0001, K6s:0.0109, K7s:0.0001, K8s:0.0001, K9s:0.0001, KK:0.2940, AKo:0.5420, A2s:0.3450, A3s:0.1182, A4s:0.2160, A5s:0.3976, A6s:0.0367, A8s:0.0061, AQs:0.0006, AKs:0.3459, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0003, 33:0.1807, 44:0.5674, 54s:0.1945, 55:0.9419, A5o:0.0015, 65s:0.6470, 66:0.9954, 75s:0.0187, 76s:0.2534, 77:0.9838, 86s:0.0004, 87s:0.0441, 88:0.9988, 98s:0.1636, 99:0.9800, T7s:0.2887, T8s:0.2104, T9s:0.3718, TT:0.9993, ATo:0.2637, J8s:0.2304, J9s:0.4603, JTs:0.9972, JJ:0.9981, AJo:0.5887, Q5s:0.0001, Q8s:0.0313, Q9s:0.1951, QTs:0.9681, QJs:0.9546, QQ:0.9996, KQo:0.0005, AQo:0.6025, K3s:0.0029, K4s:0.0280, K5s:0.1193, K6s:0.0414, K7s:0.0324, K8s:0.0196, K9s:0.0571, KTs:0.4149, KJs:0.9981, KQs:0.9808, KK:0.9909, AKo:0.5582, A2s:0.0942, A3s:0.8139, A4s:0.9946, A5s:0.9971, A6s:0.9856, A7s:0.9983, A8s:0.9983, A9s:0.9871, ATs:0.9990, AJs:0.9984, AQs:0.9982, AKs:0.0663"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "33:0.0001, A4o:0.0226, A5o:0.1766, A6o:0.0003, A7o:0.2076, A8o:0.0121, A9o:0.2154, T7s:0.0003, T9s:0.0001, TT:0.0002, ATo:0.4115, J7s:0.0001, KJo:0.0001, AJo:0.1284, Q4s:0.0001, QJs:0.0002, QQ:0.0001, KQo:0.0001, AQo:0.3745, K4s:0.0006, K6s:0.0008, K7s:0.0445, K9s:0.0047, KTs:0.0003, KQs:0.0143, KK:0.0063, AKo:0.0891, A2s:0.5660, A3s:0.1156, A4s:0.0009, A5s:0.0003, A6s:0.0014, A7s:0.0001, A8s:0.0003, A9s:0.0111, ATs:0.0006, AJs:0.0013, AQs:0.0004, AKs:0.7876, AA:0.7695"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0690, A5o:0.0349, A6o:0.0004, A7o:0.0623, 86s:0.0002, A8o:0.0064, 98s:0.0001, K9o:0.0002, A9o:0.1142, T7s:0.0001, TT:0.0001, KTo:0.0015, ATo:0.0165, J5s:0.0001, JTs:0.0001, AJo:0.0152, Q4s:0.0001, Q6s:0.0001, Q9s:0.0003, QTs:0.0001, KQo:0.0001, AQo:0.0220, K3s:0.0004, K4s:0.0002, K5s:0.0001, K6s:0.0023, K7s:0.0001, K8s:0.0001, KTs:0.0003, KJs:0.0002, KQs:0.0041, KK:0.0027, AKo:0.0094, A2s:0.1213, A3s:0.0261, A5s:0.0006, A6s:0.0057, A7s:0.0001, A8s:0.0003, A9s:0.0001, AQs:0.0002, AKs:0.1400, AA:0.2305"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0005, 44:0.0001, 65s:0.0001, 66:0.0004, 77:0.0006, 86s:0.0001, 88:0.0004, JJ:0.0010, QTs:0.0004, QJs:0.0001, QQ:0.0003, KQo:0.0001, K5s:0.0001, K6s:0.0001, K8s:0.0002, KTs:0.0005, KQs:0.0003, AKo:0.3433, A2s:0.0005, A3s:0.0006, A5s:0.0016, A6s:0.0002, A7s:0.0013, A8s:0.0002, A9s:0.0001, ATs:0.0001, AQs:0.0008, AKs:0.0061"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@17.7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0009, K3o:0.0003, A3o:0.0040, 43s:0.0232, 54o:0.0416, K4o:0.0001, A4o:0.0065, 53s:0.0001, 54s:0.0419, 55:0.0019, 65o:0.0008, K5o:0.0001, A5o:0.0347, 64s:0.0003, 65s:0.0132, A6o:0.0514, 74s:0.0001, 76s:0.0078, A7o:0.0020, 85s:0.0011, 86s:0.0009, 87s:0.0022, 88:0.0001, J8o:0.0002, A8o:0.0318, 97s:0.0001, T9o:0.0007, J9o:0.0068, Q9o:0.0008, T4s:0.0001, T5s:0.0003, T7s:0.3032, T8s:0.0026, T9s:0.0621, JTo:0.0071, KTo:0.0015, ATo:0.0001, J4s:0.0001, J5s:0.0004, J6s:0.0008, J7s:0.0742, J8s:0.0015, J9s:0.0239, JTs:0.0031, QJo:0.0304, Q5s:0.0001, Q8s:0.0042, Q9s:0.2096, QQ:0.0504, K4s:0.0011, K5s:0.0001, K6s:0.0107, K7s:0.0001, K8s:0.0001, K9s:0.0001, KK:0.2775, AKo:0.0156, A2s:0.0031, A3s:0.0002, A4s:0.0482, A5s:0.0092, A6s:0.0009, A8s:0.0002, AQs:0.0006, AKs:0.1504, AA:0.1922"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0155, 33:0.0008, A3o:0.1096, 43s:0.0013, 54o:0.0002, A4o:0.1725, 54s:0.0451, 55:0.0003, 65o:0.0001, A5o:0.0615, 64s:0.0010, 65s:0.0139, 86o:0.0018, A6o:0.0732, 76s:0.0088, 85s:0.0044, 86s:0.0025, 87s:0.2017, 88:0.0001, A8o:0.0010, 97s:0.0005, T4s:0.0004, T8s:0.0024, T9s:0.0558, J8s:0.0005, J9s:0.0092, JTs:0.0018, Q9s:0.0001, KK:0.0165, AKo:0.5264, A2s:0.3418, A3s:0.1180, A4s:0.1676, A5s:0.3883, A6s:0.0358, A8s:0.0059, AKs:0.1955, AA:0.8078"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@20",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, A3o:0.0120, A4o:0.0003, 54s:0.0003, 55:0.0020, A5o:0.0152, 65s:0.0049, A6o:0.0161, 76s:0.0006, J7o:0.0001, K7o:0.0001, A7o:0.0009, 86s:0.0011, 87s:0.0373, 88:0.0002, A8o:0.0286, Q9o:0.0001, T5s:0.0001, T7s:0.0400, T8s:0.0007, T9s:0.1011, JTo:0.0022, KTo:0.0047, ATo:0.0001, J6s:0.0007, J7s:0.0009, J8s:0.0012, J9s:0.0271, JTs:0.0009, QJo:0.0056, Q5s:0.0001, Q8s:0.0002, Q9s:0.0719, QQ:0.0502, K4s:0.0001, K6s:0.0078, K9s:0.0001, KK:0.1382, AKo:0.0353, A2s:0.0357, A3s:0.0563, A4s:0.0132, A5s:0.1227, A6s:0.0071, A8s:0.0037, AQs:0.0006, AKs:0.1176, AA:0.1866"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0098, 33:0.0013, A3o:0.0567, 43s:0.0004, 54o:0.0001, A4o:0.1334, 54s:0.0543, 55:0.0002, 65o:0.0007, K5o:0.0002, A5o:0.0701, 64s:0.0004, 65s:0.0172, 86o:0.0001, A6o:0.0733, 76s:0.0108, K7o:0.0002, A7o:0.0001, 85s:0.0001, 86s:0.0017, 87s:0.1604, K8o:0.0001, A8o:0.0018, T7s:0.0823, T8s:0.0045, T9s:0.0143, JTo:0.0032, J6s:0.0001, J7s:0.0041, J9s:0.0002, JTs:0.0037, Q8s:0.0001, Q9s:0.0042, QQ:0.0002, K6s:0.0005, KK:0.1558, AKo:0.5067, A2s:0.3044, A3s:0.0543, A4s:0.2027, A5s:0.2742, A6s:0.0294, A8s:0.0024, AKs:0.2283, AA:0.8134"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@10|CO:4BET@74.75",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0011, KK:0.2940, AKo:0.5393, AKs:0.3459, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9965, 32s:0.9402, 33:0.9998, 53o:0.8825, A3o:0.1468, 42s:0.9616, 43s:0.9972, 44, 54o:0.9993, 64o:0.9928, A4o:0.6720, 52s:0.9937, 53s:0.9998, 54s, 55, 65o:0.8838, 75o:0.9558, A5o:0.0058, 62s:0.8971, 63s:0.9979, 64s:0.9958, 65s:0.9993, 66:0.9968, 76o:0.9945, 86o:0.9886, K6o:0.0095, A6o:0.6533, 72s:0.1729, 73s:0.9268, 74s:0.9992, 75s:0.9496, 76s:0.9878, 77, 87o:0.9897, 97o:0.9940, Q7o:0.0001, K7o:0.8000, A7o:0.6366, 82s:0.8806, 83s:0.7896, 84s:0.9930, 85s:0.9994, 86s:0.9991, 87s:0.9893, 88, 98o:0.9973, T8o:0.7435, J8o:0.0736, K8o:0.9470, A8o:0.9243, 92s:0.4613, 93s:0.9314, 94s:0.7162, 95s:0.9959, 96s:0.9970, 97s:0.9995, 98s:0.5498, 99, T9o:0.9904, J9o:0.9931, Q9o:0.8587, K9o:0.9902, A9o:0.9944, T2s:0.8480, T3s:0.9936, T4s:0.9648, T5s:0.7449, T6s:0.9791, T7s:0.9961, T8s:0.9998, T9s:0.9571, TT, JTo:0.9104, QTo:0.8914, KTo:0.9791, ATo:0.9997, J2s:0.8451, J3s:0.9890, J4s:0.9746, J5s:0.9665, J6s:0.9881, J7s, J8s:0.9992, J9s, JTs:0.9996, JJ:0.9458, QJo:0.9988, KJo:0.8928, AJo:0.9998, Q2s:0.9875, Q3s:0.8607, Q4s:0.6752, Q5s:0.9867, Q6s:0.9720, Q7s:0.9352, Q8s:0.9920, Q9s:0.9979, QTs:0.9237, QJs, KQo:0.5202, AQo:0.0221, K2s:0.9825, K3s:0.9945, K4s:0.8561, K5s:0.9912, K6s:0.9992, K7s:0.9924, K8s:0.9663, K9s:0.9983, KTs:0.9993, KJs, KQs, AKo:0.0002, A2s:0.5176, A3s:0.6099, A4s:0.9068, A5s:0.7869, A6s:0.9636, A7s:0.9994, A8s:0.5882, A9s, ATs, AJs, AQs:0.9130, AKs:0.0009"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0034, Q2o:0.0002, K2o:0.0413, A2o:0.5108, 32s:0.0001, Q3o:0.0001, K3o:0.0052, A3o:0.8508, 42s:0.0003, 43s:0.0001, 64o:0.0003, Q4o:0.0006, K4o:0.0455, A4o:0.3216, 52s:0.0010, 65o:0.1152, Q5o:0.0063, K5o:0.2917, A5o:0.9895, 62s:0.0001, 63s:0.0006, 65s:0.0007, 66:0.0032, 96o:0.0020, Q6o:0.0039, K6o:0.7743, A6o:0.3412, 73s:0.0045, 75s:0.0502, 76s:0.0120, Q7o:0.0004, K7o:0.0107, A7o:0.3618, 82s:0.0003, 83s:0.0126, 87s:0.0095, T8o:0.2364, J8o:0.2736, Q8o:0.0498, K8o:0.0317, A8o:0.0749, 95s:0.0007, 96s:0.0010, 98s:0.4490, T9o:0.0031, Q9o:0.0815, K9o:0.0066, A9o:0.0041, T2s:0.0001, T3s:0.0001, T5s:0.2155, T7s:0.0001, T9s:0.0429, TT:0.0001, JTo:0.0882, QTo:0.1084, KTo:0.0206, J2s:0.1530, J4s:0.0002, J5s:0.0313, J6s:0.0005, JTs:0.0001, JJ:0.0542, QJo:0.0007, KJo:0.1069, AJo:0.0001, Q2s:0.0102, Q3s:0.1385, Q4s:0.3228, Q5s:0.0098, Q6s:0.0235, Q7s:0.0640, Q8s:0.0064, Q9s:0.0011, QTs:0.0760, QJs:0.0001, QQ, KQo:0.4797, AQo:0.9779, K2s:0.0166, K3s:0.0038, K4s:0.1436, K5s:0.0087, K6s:0.0006, K7s:0.0072, K8s:0.0336, K9s:0.0015, KTs:0.0006, KJs:0.0001, KQs:0.0001, KK, AKo:0.9998, A2s:0.4823, A3s:0.3900, A4s:0.0931, A5s:0.2128, A6s:0.0362, A7s:0.0006, A8s:0.4117, A9s:0.0001, AJs:0.0001, AQs:0.0870, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.1363, 55:0.7124, 65s:0.0001, 66:0.3420, 76s:0.0001, 77:0.1505, 87s:0.0832, 88:0.6699, 99:0.0927, T9s:0.0383, TT:0.4582, JJ:0.7573, QTs:0.0116, QJs:0.3863, QQ:0.9340, KQo:0.0012, AQo:0.5018, K7s:0.3968, K8s:0.0085, K9s:0.0296, KTs:0.8859, KJs:0.7977, KQs:0.4780, KK:0.0240, A4s:0.0345, A5s:0.2731, A6s:0.0981, A7s:0.2393, A8s:0.1825, A9s:0.7064, ATs:0.4122, AJs:0.5244, AQs:0.9761, AKs:0.0032, AA:0.0003"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0463, A5o:0.0298, A6o:0.0001, 76s:0.0009, A7o:0.0957, 88:0.0001, A8o:0.0005, K9o:0.0009, A9o:0.0001, TT:0.0002, ATo:0.1035, J7s:0.0004, JJ:0.0001, AJo:0.0128, QQ:0.0007, AQo:0.2545, K2s:0.0006, K4s:0.0008, K5s:0.0037, K6s:0.0009, K7s:0.0009, K8s:0.0006, K9s:0.0011, KTs:0.0019, KK:0.0045, AKo:0.0288, A2s:0.2572, A3s:0.3694, A4s:0.3662, A5s:0.0962, A6s:0.0937, A7s:0.2031, A8s:0.0210, A9s:0.0483, ATs:0.1365, AJs:0.0282, AQs:0.0006, AKs:0.4541, AA:0.6813"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0330, A5o:0.0329, A6o:0.0006, A7o:0.1415, A8o:0.0001, 99:0.0001, K9o:0.0001, A9o:0.0002, KTo:0.0034, ATo:0.0415, KJo:0.0316, AJo:0.0292, QQ:0.0002, KQo:0.0202, AQo:0.2159, K2s:0.0011, K3s:0.0079, K4s:0.0200, K5s:0.0007, K6s:0.0002, K7s:0.1427, K8s:0.0001, K9s:0.0313, KTs:0.0037, KJs:0.0208, KQs:0.0027, KK:0.0804, AKo:0.1485, A2s:0.0462, A3s:0.0370, A4s:0.0491, A5s:0.2059, A6s:0.0358, A7s:0.0624, A8s:0.0142, A9s:0.0192, ATs:0.0298, AJs:0.0354, AKs:0.2519, AA:0.3184"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.1592, A4o:0.0120, 55:0.0165, 66:0.1151, 76s:0.0001, 77:0.1110, 87s:0.0098, 88:0.0338, 99:0.4622, T7s:0.0001, TT:0.1814, JJ:0.1835, QQ:0.0651, KQo:0.0020, K4s:0.1111, K5s:0.0003, K6s:0.0176, K7s:0.0743, K8s:0.0894, K9s:0.0375, KTs:0.0518, KJs:0.1303, KQs:0.4768, KK:0.8911, AKo:0.8227, A2s:0.3970, A3s:0.2925, A4s:0.3800, A5s:0.3663, A6s:0.5797, A7s:0.2600, A8s:0.2793, A9s:0.1545, ATs:0.3910, AJs:0.3492, AQs:0.0228, AKs:0.2909"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0179, 55:0.4749, 65s:0.0005, 66:0.1954, 77:0.7384, 88:0.7287, 99:0.6566, T9s:0.0793, TT:0.5577, JJ:0.8695, QTs:0.0450, QJs:0.1822, QQ:0.9715, KQo:0.0125, AQo:0.1730, K5s:0.0013, K6s:0.0170, K7s:0.0334, K8s:0.0260, K9s:0.4906, KTs:0.8531, KJs:0.8694, KQs:0.9643, A4s:0.0987, A5s:0.8140, A6s:0.0411, A7s:0.0021, A8s:0.3452, A9s:0.7391, ATs:0.9229, AJs:0.8902, AQs:0.9762"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "97s:0.0001, KTo:0.0001, AJo:0.0037, Q8s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0006, KQo:0.0067, AQo:0.0015, K6s:0.0003, K7s:0.0005, K9s:0.0005, KJs:0.0003, KQs:0.0017, KK:0.0023, A4s:0.0001, A5s:0.0003, A7s:0.0010, A8s:0.0003, AJs:0.0001, AKs:0.0352"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0011, 55:0.0004, 66:0.0011, 77:0.0003, 86s:0.0002, 88:0.0001, 99:0.0063, A9o:0.0003, TT:0.0147, ATo:0.0010, JJ:0.0007, AJo:0.0001, QJs:0.0003, QQ:0.0279, AQo:0.0006, K5s:0.0001, K7s:0.0040, K9s:0.0040, KTs:0.0284, KJs:0.0035, KQs:0.0286, AKo:0.4769, A2s:0.0001, A4s:0.0096, A5s:0.0084, A6s:0.0010, A7s:0.0010, A8s:0.0015, A9s:0.0059, ATs:0.0175, AJs:0.0074, AQs:0.0228, AKs:0.3650"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "K2o:0.0002, A2o:0.0866, A3o:0.0345, A4o:0.0018, A5o:0.0102, A6o:0.0081, 76s:0.0002, 77:0.0001, A7o:0.0039, A8o:0.0001, 97s:0.0001, A9o:0.0265, TT:0.0027, KTo:0.0003, ATo:0.0019, J6s:0.0003, J8s:0.0001, AJo:0.0003, QQ:0.0023, AQo:0.1130, K2s:0.0028, K3s:0.0026, K4s:0.0001, K5s:0.0006, K6s:0.0001, K7s:0.0009, K8s:0.0001, K9s:0.0001, KTs:0.0005, KJs:0.0005, KQs:0.0020, KK:0.0238, AKo:0.0236, A2s:0.1523, A3s:0.0101, A4s:0.2215, A5s:0.0869, A6s:0.0698, A7s:0.0620, A8s:0.0404, A9s:0.1174, ATs:0.2060, AJs:0.0001, AQs:0.7733, AKs:0.1458, AA:0.6367"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "K2o:0.0020, A2o:0.0356, A3o:0.0182, K4o:0.0106, A4o:0.0027, K5o:0.0009, A5o:0.0003, K6o:0.0008, A6o:0.0128, K7o:0.0021, A7o:0.0126, A9o:0.0006, ATo:0.0019, QQ:0.0001, KQo:0.0010, AQo:0.2170, K2s:0.0348, K3s:0.0165, K4s:0.0092, K5s:0.0012, K6s:0.0375, K7s:0.0043, K8s:0.0110, K9s:0.0336, KTs:0.0039, KJs:0.0102, KQs:0.0070, KK:0.0630, AKo:0.0019, A2s:0.1251, A3s:0.0049, A4s:0.0040, A5s:0.1275, A6s:0.1028, A7s:0.0004, A8s:0.0071, A9s:0.0003, ATs:0.0176, AJs:0.0093, AQs:0.0206, AKs:0.1643, AA:0.3633"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, QQ:0.0001, AQo:0.0001, KK:0.9132, AKo:0.9745, A2s:0.2761, A4s:0.5206, A5s:0.0102, A7s:0.0789, A8s:0.0404, A9s:0.0934, ATs:0.0405, AJs:0.1723, AQs:0.0301, AKs:0.6899"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0005, 33:0.0467, 44:0.4215, 54s:0.0011, 55:0.6783, 65s:0.4136, 66:0.7602, 75s:0.0004, 77:0.7269, 87s:0.0003, 88:0.9262, 98s:0.0010, 99:0.7863, T8s:0.0315, T9s:0.0073, TT:0.8788, J9s:0.0002, JTs:0.9302, JJ:0.9996, AJo:0.5051, Q5s:0.0001, Q9s:0.0005, QTs:0.6163, QJs:0.7111, QQ, KQo:0.2761, AQo:0.8644, K3s:0.3079, K4s:0.2007, K5s:0.0795, K6s:0.2198, K7s:0.0481, K8s:0.0027, K9s:0.1920, KTs:0.9942, KJs:0.9995, KQs:0.9994, KK:0.3096, A2s:0.0029, A3s:0.3415, A4s:0.3907, A5s:0.4808, A6s:0.4783, A7s:0.3168, A8s:0.8711, A9s:0.9989, ATs:0.9989, AJs:0.9992, AQs"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "33:0.0042, A4o:0.0255, 54s:0.0002, 55:0.0001, A5o:0.0547, 66:0.0071, A6o:0.0573, A7o:0.0081, A8o:0.0486, A9o:0.1506, ATo:0.0320, AJo:0.0980, QJs:0.0002, AQo:0.1128, K5s:0.0001, K7s:0.0001, K9s:0.0001, KQs:0.0001, AKo:0.0028, A2s:0.4833, A3s:0.1111, A4s:0.2493, A5s:0.2588, A6s:0.2523, A7s:0.3298, A8s:0.0178, ATs:0.0001, AJs:0.0001, AKs:0.4283, AA:0.6823"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0529, A5o:0.0038, A6o:0.0278, 77:0.0001, A7o:0.0279, A8o:0.0674, A9o:0.0560, KTo:0.0003, ATo:0.0192, AJo:0.0506, KQo:0.0002, AQo:0.0227, K5s:0.0001, K7s:0.0005, K8s:0.0008, KTs:0.0001, KK:0.0036, A2s:0.1183, A3s:0.1197, A4s:0.0213, A5s:0.0732, A6s:0.0035, A7s:0.0606, A8s:0.0010, A9s:0.0001, AKs:0.1505, AA:0.3177"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0027, 44:0.1212, 55:0.0003, 66:0.0144, 77:0.2488, 87s:0.0001, 88:0.0735, 98s:0.0002, 99:0.2132, TT:0.1152, JJ:0.0003, QQ:0.0001, K2s:0.0001, K6s:0.0001, K7s:0.0003, K8s:0.0001, K9s:0.0013, KTs:0.0050, KJs:0.0001, KK:0.6868, AKo:0.9972, A2s:0.3373, A3s:0.3263, A4s:0.3189, A5s:0.1406, A6s:0.1767, A7s:0.2714, A8s:0.1056, A9s:0.0004, ATs:0.0010, AJs:0.0004, AQs:0.0001, AKs:0.4212"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0061, A3o:0.0001, 44:0.0688, 55:0.0029, A5o:0.0003, 65s:0.3313, 66:0.1079, A6o:0.0001, 76s:0.0004, 77:0.0018, A7o:0.0007, 85s:0.0001, 86s:0.1524, 87s:0.0043, 88:0.0016, A8o:0.0062, 99:0.0086, A9o:0.0305, T7s:0.0004, T8s:0.0816, T9s:0.0048, JTo:0.0030, KTo:0.0001, ATo:0.0116, J8s:0.0004, J9s:0.1811, JTs:0.0026, JJ:0.1182, AJo:0.0611, Q8s:0.0032, QTs:0.0004, AQo:0.8246, K3s:0.0001, K4s:0.0001, K5s:0.0182, K6s:0.0071, K7s:0.0032, K8s:0.0010, K9s:0.0010, KTs:0.0025, KK:0.7571, A2s:0.0002, A3s:0.0050, A4s:0.0371, A5s:0.0002, A6s:0.0144, A7s:0.0102, A8s:0.0133, A9s:0.0002, AJs:0.0003, AQs:0.0009, AA:0.1213"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0003, 33:0.0294, A3o:0.0044, 44:0.0032, A4o:0.0451, 53s:0.0003, A5o:0.3271, 65s:0.0223, A6o:0.0044, 76s:0.0004, A7o:0.0187, 86s:0.0010, 87s:0.0103, A8o:0.0173, 99:0.0002, A9o:0.0051, T7s:0.0001, T8s:0.0207, T9s:0.0119, ATo:0.0617, J8s:0.0028, J9s:0.0144, JTs:0.0007, JJ:0.0008, AJo:0.0602, AQo:0.0002, KK:0.2406, AKo:0.5231, A2s:0.9938, A3s:0.9826, A4s:0.5807, A5s:0.1621, A6s:0.8868, A7s:0.3943, A8s:0.1220, A9s:0.0001, AJs:0.0005, AKs:0.5998, AA:0.8787"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0009, 44:0.0249, A4o:0.0001, 55:0.0019, A5o:0.0088, 65s:0.0165, 66:0.0966, A6o:0.0002, 76s:0.0003, 77:0.0017, A7o:0.0139, 85s:0.0002, 86s:0.0001, 87s:0.0011, 88:0.0013, A8o:0.0025, 99:0.0087, A9o:0.0437, T7s:0.0001, T8s:0.0570, T9s:0.0047, QTo:0.0001, KTo:0.0005, ATo:0.0336, J8s:0.0049, J9s:0.0205, JTs:0.0005, JJ:0.0858, QJo:0.0005, AJo:0.0297, Q8s:0.0115, QTs:0.0002, AQo:0.5694, K3s:0.0001, K5s:0.0056, K6s:0.0007, KTs:0.0006, KK:0.4661, AKo:0.0001, A2s:0.0081, A3s:0.0157, A4s:0.0052, A5s:0.0106, A6s:0.0148, A7s:0.2326, A8s:0.0466, A9s:0.0002, AJs:0.0004, AQs:0.0005, AKs:0.0004, AA:0.3051"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0002, 33:0.0173, A3o:0.0048, 44:0.0440, A4o:0.0421, 55:0.0010, A5o:0.1370, 65s:0.0392, 66:0.0110, A6o:0.0121, 76s:0.0012, 77:0.0001, A7o:0.0556, 85s:0.0003, 86s:0.0197, 87s:0.0079, 88:0.0003, A8o:0.0186, 99:0.0001, A9o:0.0064, T7s:0.0001, T8s:0.1096, T9s:0.0012, JTo:0.0001, KTo:0.0001, ATo:0.0332, J8s:0.0042, J9s:0.0360, JTs:0.0019, JJ:0.0328, AJo:0.0418, AQo:0.0275, K2s:0.0001, K3s:0.0007, K4s:0.0014, K5s:0.0010, K6s:0.0021, K7s:0.0004, K8s:0.0011, KTs:0.0003, KK:0.5316, AKo:0.5230, A2s:0.9092, A3s:0.8534, A4s:0.6007, A5s:0.1533, A6s:0.8048, A7s:0.1671, A8s:0.0864, A9s:0.0001, AJs:0.0004, AQs:0.0004, AKs:0.5994, AA:0.6949"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|CO:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0138, KK:0.9977, AKo:0.1428, AKs:0.5900, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 88:0.0003, 99:0.0001, TT:0.0006, J9s:0.0001, JTs:0.0002, JJ:0.0002, QQ:0.0002, AQo:0.1304, K9s:0.0001, KK:0.2632, AKo:0.0006, A2s:0.0029, A3s:0.0001, A4s:0.0002, A6s:0.0313, A8s:0.0005, A9s:0.1549, ATs:0.0739, AJs:0.0235, AQs:0.3282, AKs:0.1269, AA:0.4166"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0007, 54s:0.0001, 55:0.0003, 65s:0.0003, 75s:0.0002, 86s:0.0002, 88:0.0001, 99:0.0005, T7s:0.0029, TT:0.0001, ATo:0.0698, J7s:0.0002, J9s:0.0001, JTs:0.0005, JJ:0.0008, AJo:0.0003, Q4s:0.0001, Q8s:0.0001, QJs:0.0001, QQ:0.0013, AQo:0.0094, K2s:0.0001, K3s:0.0004, K6s:0.0001, K9s:0.0001, KTs:0.0002, KJs:0.0001, KQs:0.0002, KK:0.1974, AKo:0.9495, A2s:0.0471, A3s:0.0757, A4s:0.0744, A5s:0.5304, A6s:0.4491, A7s:0.0649, A8s:0.0976, A9s:0.3398, ATs:0.2061, AJs:0.8484, AQs:0.0006, AKs:0.8591, AA:0.5834"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0283, A3o:0.0019, 44:0.0626, A4o:0.0009, 55:0.0026, A5o:0.0037, 65s:0.1316, 66:0.1040, A6o:0.0025, 74s:0.0001, 76s:0.0005, 77:0.0018, A7o:0.0065, 85s:0.0005, 86s:0.0113, 87s:0.0001, 88:0.0016, A8o:0.0013, 99:0.0078, A9o:0.0018, T7s:0.0001, T8s:0.2138, T9s:0.0035, JTo:0.0001, KTo:0.0014, ATo:0.0047, J8s:0.0180, J9s:0.0760, JTs:0.0019, JJ:0.1133, QJo:0.0011, KJo:0.0025, AJo:0.0027, Q6s:0.0001, Q8s:0.0071, KQo:0.0006, AQo:0.4813, K2s:0.0005, K3s:0.0019, K4s:0.0027, K5s:0.0205, K6s:0.0115, K7s:0.0007, K8s:0.0001, KTs:0.0007, KK:0.3905, AKo:0.0033, A2s:0.0208, A3s:0.0007, A4s:0.0218, A5s:0.0038, A6s:0.0468, A7s:0.0846, A8s:0.0131, AQs:0.0009, AKs:0.0032, AA:0.1632"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0008, 33:0.0004, A3o:0.0068, 44:0.0074, A4o:0.0681, 55:0.0002, A5o:0.2435, 65s:0.0182, 66:0.0026, A6o:0.0189, 76s:0.0005, A7o:0.0040, 86s:0.1816, 87s:0.0067, A8o:0.0091, 99:0.0006, A9o:0.0100, T8s:0.0076, T9s:0.0002, ATo:0.0321, J8s:0.0001, J9s:0.0021, JTs:0.0002, JJ:0.0053, KJo:0.0001, AJo:0.0340, AQo:0.0003, K2s:0.0012, K3s:0.0020, K4s:0.0045, K5s:0.0121, K6s:0.0018, K9s:0.0003, KTs:0.0004, KK:0.6071, AKo:0.5197, A2s:0.8092, A3s:0.5923, A4s:0.5602, A5s:0.0863, A6s:0.7993, A7s:0.1428, A8s:0.0969, A9s:0.0002, AJs:0.0007, AKs:0.5965, AA:0.8368"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 75s:0.0001, Q7s:0.0001, Q8s:0.0001, K4s:0.0001, K5s:0.0001, KQs:0.0001, KK:0.1769, AKo:0.0065, A2s:0.0001, A3s:0.0003, ATs:0.0846, AJs:0.0004, AQs:0.2274, AKs:0.0766, AA:0.1605"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0178, 54s:0.0141, 55:0.0010, A5o:0.0002, 65s:0.0001, 87s:0.0034, 88:0.0426, 98s:0.0002, T9s:0.0022, J9s:0.0005, JTs:0.0001, JJ:0.0001, AJo:0.0269, Q4s:0.0001, QQ:0.0011, K2s:0.0002, K4s:0.0050, K6s:0.0053, K7s:0.0001, K8s:0.0188, K9s:0.0001, KTs:0.0024, KJs:0.0086, KQs:0.0003, KK:0.2832, AKo:0.7791, A2s:0.0743, A3s:0.0008, A4s:0.2479, A5s:0.1152, A6s:0.2358, A7s:0.0019, A8s:0.0702, A9s:0.2677, ATs:0.0014, AJs:0.2627, AQs:0.0948, AKs:0.8752, AA:0.8394"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0040, 55:0.0018, 65s:0.0527, 66:0.0946, A6o:0.0001, 76s:0.0004, 77:0.0012, 86s:0.0001, 87s:0.0001, 88:0.0013, 99:0.0070, T9s:0.0001, ATo:0.0001, J9s:0.0030, JTs:0.0001, JJ:0.0964, AJo:0.0042, KQo:0.0017, AQo:0.4311, K6s:0.0067, K7s:0.0007, K9s:0.0010, KTs:0.0032, KK:0.4231, AKo:0.0008, A2s:0.0294, A4s:0.0137, A5s:0.0001, A6s:0.0634, A7s:0.0316, A8s:0.0120, A9s:0.0001, AJs:0.0001, AQs:0.0006, AKs:0.0003, AA:0.0411"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0008, 33:0.0041, A3o:0.0707, 44:0.0071, A4o:0.0586, 53s:0.0002, 55:0.0004, A5o:0.1518, 65s:0.0545, 66:0.0039, A6o:0.0052, 76s:0.0009, 77:0.0004, A7o:0.0450, 86s:0.0088, 87s:0.0002, 88:0.0001, A8o:0.0174, 99:0.0009, A9o:0.0073, KTo:0.0034, ATo:0.0234, J9s:0.0002, JJ:0.0055, KJo:0.0032, AJo:0.0222, Q8s:0.0001, AQo:0.0194, K2s:0.0062, K3s:0.0061, K4s:0.0194, K5s:0.0590, K6s:0.0440, K7s:0.0023, K9s:0.0009, KK:0.5745, AKo:0.5222, A2s:0.5983, A3s:0.7074, A4s:0.4749, A5s:0.1556, A6s:0.5989, A7s:0.3348, A8s:0.0839, A9s:0.0002, AJs:0.0005, AQs:0.0002, AKs:0.5995, AA:0.9589"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, QQ:0.0002, KK:0.9991, AKo:0.0124, AKs:0.0142, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9977, AKo:0.3617, AKs:0.5879, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0082, K2o:0.0034, A2o:0.1237, 33:0.0140, K3o:0.0009, A3o:0.1288, 44:0.0767, Q4o:0.0001, A4o:0.2041, 53s:0.0034, 54s:0.0005, 55:0.0309, K5o:0.0019, A5o:0.1977, 64s:0.0001, 65s:0.0030, 66:0.2868, K6o:0.0015, A6o:0.0768, 74s:0.0001, 76s:0.0002, 77:0.0035, Q7o:0.0001, K7o:0.0002, A7o:0.0187, 87s:0.0105, 88:0.0593, K8o:0.0001, A8o:0.1152, 97s:0.0027, 98s:0.0023, 99:0.0231, TT:0.0013, QTo:0.0005, ATo:0.0005, JTs:0.0008, JJ:0.6660, QJo:0.0010, KJo:0.0005, AJo:0.6247, Q2s:0.0711, Q4s:0.0073, Q5s:0.0037, Q6s:0.0115, Q7s:0.0320, Q8s:0.0010, Q9s:0.0684, QTs:0.3061, QJs:0.1600, QQ, KQo:0.9973, AQo, K2s:0.0291, K3s:0.1424, K4s:0.0014, K5s:0.6303, K6s:0.4535, K7s:0.4503, K8s:0.2544, K9s:0.0710, KTs:0.2993, KJs:0.0607, KQs:0.9942, KK, AKo, A2s:0.9063, A3s:0.9966, A4s:0.9771, A5s:0.9937, A6s:0.6800, A7s:0.6067, A8s:0.4876, A9s:0.5107, ATs:0.4407, AJs:0.9968, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22, 33, 42s:0.5951, 43s:0.9734, 44:0.9933, 54o:0.6574, 52s:0.8899, 53s:0.9875, 54s:0.7591, 55:0.9941, 65o:0.8590, 62s:0.2485, 63s:0.9282, 64s:0.9702, 65s:0.6923, 66, 76o:0.1228, 72s:0.0001, 73s:0.0309, 74s:0.9610, 75s:0.9992, 76s:0.9896, 77, 87o:0.6161, 85s:0.8726, 86s:0.9956, 87s:0.9874, 88:0.9889, 93s:0.0001, 95s:0.5711, 96s:0.6676, 97s:0.9936, 98s, 99:0.9949, A9o:0.5870, T3s:0.0002, T4s:0.0002, T5s:0.5675, T6s:0.5891, T7s:0.9840, T8s:0.9781, T9s:0.9820, TT, JTo:0.7343, QTo:0.3917, KTo:0.8461, ATo:0.8734, J3s:0.0001, J4s:0.2919, J6s:0.4424, J7s:0.8375, J8s:0.9037, J9s:0.9934, JTs:0.9846, JJ:0.9994, QJo:0.8804, KJo:0.9306, AJo:0.9989, Q2s:0.5868, Q3s:0.7066, Q4s:0.8915, Q5s:0.6690, Q6s:0.7195, Q7s:0.7372, Q8s:0.8842, Q9s:0.8426, QTs:0.9473, QJs:0.9884, QQ:0.1978, KQo:0.3061, AQo:0.0004, K2s:0.9324, K3s:0.9227, K4s:0.9500, K5s:0.6859, K6s:0.7848, K7s:0.9439, K8s:0.9902, K9s:0.9981, KTs, KJs:0.9950, KQs:0.9944, A2s:0.3310, A3s:0.8715, A4s:0.8646, A5s:0.7632, A6s:0.8844, A7s:0.5912, A8s:0.8884, A9s:0.9986, ATs:0.9975, AJs:0.9896, AQs:0.0577, AKs:0.0002"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0088, A2o:0.1446, 32s:0.0014, K3o:0.0107, A3o:0.5041, 43s:0.0093, 44:0.0067, Q4o:0.0013, K4o:0.0019, A4o:0.4497, 52s:0.0176, 54s:0.2390, 55:0.0057, 65o:0.0140, Q5o:0.0004, K5o:0.2307, A5o:0.8108, 63s:0.0022, 64s:0.0136, 65s:0.3047, 76o:0.0584, Q6o:0.0001, K6o:0.1928, A6o:0.0153, 73s:0.0523, 75s:0.0001, 76s:0.0072, 77:0.0001, Q7o:0.0003, K7o:0.0554, A7o:0.2084, 82s:0.0002, 85s:0.0037, 87s:0.0087, 88:0.0110, Q8o:0.0006, K8o:0.0061, A8o:0.0257, 95s:0.0015, 96s:0.1966, 99:0.0050, A9o:0.1303, T6s:0.0696, T8s:0.0004, T9s:0.0003, QTo:0.1902, KTo:0.1104, ATo:0.0961, J4s:0.0001, J7s:0.0149, J9s:0.0013, JJ:0.0005, QJo:0.0960, KJo:0.0662, AJo:0.0004, Q2s:0.3225, Q3s:0.2715, Q4s:0.0037, Q5s:0.2769, Q6s:0.2625, Q7s:0.2494, Q8s:0.1053, Q9s:0.1531, QTs:0.0375, QJs:0.0081, QQ:0.8022, KQo:0.6939, AQo:0.9996, K2s:0.0303, K3s:0.0183, K4s:0.0262, K5s:0.2897, K6s:0.2071, K7s:0.0538, K8s:0.0089, K9s:0.0001, KJs:0.0037, KQs:0.0056, KK, AKo, A2s:0.6683, A3s:0.1280, A4s:0.1350, A5s:0.2361, A6s:0.1132, A7s:0.4084, A8s:0.1087, A9s:0.0003, ATs:0.0020, AJs:0.0097, AQs:0.9423, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "54s:0.0227, 55:0.1368, 66:0.1510, 77:0.2049, 88:0.0741, 99:0.0032, JJ:0.0001, QTs:0.0074, QQ:0.9764, AQo:0.1923, K3s:0.0037, K7s:0.0156, KTs:0.2962, KJs:0.0006, KQs:0.2718, KK:0.0111, AKo:0.0002, A3s:0.0019, A4s:0.0004, A6s:0.0002, A7s:0.0378, A8s:0.0482, A9s:0.0064, ATs:0.2122, AJs:0.0003, AQs:0.9565, AKs:0.0186, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0158, A5o:0.0189, 65s:0.0001, 66:0.0020, A6o:0.0028, 77:0.0086, A7o:0.0139, 88:0.0094, A8o:0.0187, 99:0.0012, A9o:0.0247, TT:0.0016, ATo:0.0021, AJo:0.0012, Q9s:0.0001, AQo:0.3221, K2s:0.0196, K3s:0.0003, K5s:0.0502, K7s:0.1940, KJs:0.0319, KK:0.0273, AKo:0.0654, A2s:0.0486, A3s:0.0992, A4s:0.0227, A5s:0.0559, A6s:0.0178, A7s:0.1769, A8s:0.0961, A9s:0.1419, ATs:0.0685, AJs:0.1028, AQs:0.0345, AKs:0.2501, AA:0.4912"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0025, A5o:0.0609, 66:0.0001, A6o:0.0048, A7o:0.0004, 86s:0.0008, 87s:0.0002, A8o:0.0913, 98s:0.0005, K9o:0.0017, A9o:0.0267, T7s:0.0001, KTo:0.0030, J9s:0.0001, KJo:0.0014, Q7s:0.0001, AQo:0.0223, K2s:0.0233, K3s:0.0006, K4s:0.0082, K5s:0.0001, K6s:0.0048, K7s:0.0730, K8s:0.1237, K9s:0.0050, KTs:0.0349, KQs:0.0006, KK:0.0162, AKo:0.0392, A2s:0.0031, A3s:0.1284, A4s:0.0020, A5s:0.0180, A6s:0.2874, A7s:0.0324, A8s:0.3513, A9s:0.1100, AJs:0.3564, AQs:0.0002, AKs:0.2521, AA:0.5087"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0016, A4o:0.0004, 55:0.0005, 66:0.0738, 77:0.0933, 88:0.1215, 99:0.0748, TT:0.0944, JJ:0.0770, QQ:0.0214, K7s:0.0715, K8s:0.0188, K9s:0.0773, KTs:0.0299, KJs:0.0406, KK:0.9454, AKo:0.8952, A2s:0.2331, A3s:0.3106, A4s:0.5238, A5s:0.2978, A6s:0.1940, A7s:0.4380, A8s:0.0376, A9s:0.0244, ATs:0.2892, AJs:0.1094, AQs:0.0036, AKs:0.4792"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.1625, 44:0.0564, 54s:0.0744, 55:0.5579, 65s:0.0015, 66:0.5516, 76s:0.0465, 77:0.3218, 88:0.4117, 97s:0.0004, 98s:0.0001, 99:0.5495, T8s:0.0020, TT:0.2620, JJ:0.6640, AJo:0.0001, Q8s:0.0003, QTs:0.2171, QJs:0.3183, QQ:0.9997, KQo:0.0667, AQo:0.1407, K3s:0.0001, K5s:0.0002, K6s:0.0115, K7s:0.0513, K8s:0.0340, K9s:0.2747, KTs:0.2443, KJs:0.8513, KQs:0.9957, A2s:0.0008, A3s:0.0015, A4s:0.0093, A5s:0.2883, A6s:0.0261, A7s:0.4922, A8s:0.0455, A9s:0.8808, ATs:0.8274, AJs:0.9913, AQs:0.9979"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "77:0.0013, A9o:0.0012, T9s:0.0001, TT:0.0001, ATo:0.0029, KJo:0.0046, AJo:0.0008, KQo:0.0059, AQo:0.0012, K5s:0.0021, K6s:0.0010, K7s:0.0070, K8s:0.0258, K9s:0.0075, KTs:0.0262, KJs:0.0177, KQs:0.0006, KK:0.1242, AKo:0.0208, A3s:0.0001, A5s:0.0001, A6s:0.0031, A7s:0.0065, A8s:0.0420, A9s:0.0347, ATs:0.0039, AJs:0.0006, AQs:0.0001, AKs:0.0263"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "44:0.0006, 55:0.0158, 77:0.0001, 88:0.0001, JTs:0.0001, KJo:0.0004, AJo:0.0001, QJs:0.0001, QQ:0.0002, KQo:0.0001, K5s:0.0004, K6s:0.0006, K7s:0.0026, K8s:0.0015, K9s:0.0006, KTs:0.0074, KJs:0.0050, KQs:0.0005, KK:0.2034, AKo:0.0084, A4s:0.0003, A5s:0.0027, A7s:0.0003, A8s:0.0001, A9s:0.0010, ATs:0.0023, AJs:0.0003, AKs:0.0047"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0001, 66:0.0431, 77:0.0859, 88:0.0223, 99:0.0151, TT:0.2362, J9s:0.0001, JJ:0.0136, QQ:0.0001, KTs:0.0002, KJs:0.0001, KQs:0.0003, KK:0.0414, AKo:0.3921, A5s:0.0001, A7s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0009, AKs:0.1743"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.0115, 44:0.0022, 54s:0.0247, 55:0.1014, 66:0.1056, 88:0.0829, 99:0.0020, TT:0.0050, JJ:0.1729, Q9s:0.0008, QQ:0.7192, AQo:0.2479, KJs:0.0033, KQs:0.1759, KK:0.0077, AKo:0.0007, A4s:0.0005, A5s:0.0043, A6s:0.0004, A7s:0.0095, A8s:0.0269, A9s:0.0002, AJs:0.0025, AQs:0.8160, AKs:0.0020, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.1164, A5o:0.0659, 65s:0.0004, 66:0.0392, 77:0.0053, A7o:0.0316, 88:0.0001, A8o:0.0003, 98s:0.0001, 99:0.0058, K9o:0.0005, A9o:0.0514, TT:0.0001, JJ:0.1949, KJo:0.0009, AJo:0.0018, AQo:0.2761, K3s:0.0001, K4s:0.0014, K8s:0.0028, K9s:0.0005, KK:0.0048, AKo:0.0126, A2s:0.0540, A3s:0.0394, A4s:0.0209, A5s:0.0478, A6s:0.0090, A7s:0.0112, A8s:0.1056, A9s:0.2303, ATs:0.2068, AJs:0.1271, AQs:0.0002, AKs:0.1687, AA:0.6207"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0320, A5o:0.0755, 66:0.0012, A6o:0.0036, A7o:0.0015, A8o:0.0054, 99:0.0004, A9o:0.0216, TT:0.0004, ATo:0.0080, J9s:0.0001, JTs:0.0001, JJ:0.0334, KJo:0.0001, AJo:0.1365, QQ:0.0003, AQo:0.0177, K2s:0.0006, K4s:0.0001, K5s:0.0011, K6s:0.0001, K7s:0.0036, K8s:0.0001, K9s:0.0102, KTs:0.0561, KK:0.0146, AKo:0.0006, A3s:0.0178, A4s:0.0003, A5s:0.0131, A6s:0.1528, A7s:0.1089, A8s:0.0455, A9s:0.0764, ATs:0.0007, AJs:0.2246, AQs:0.0013, AKs:0.2180, AA:0.3792"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0217, 44:0.1859, A4o:0.0011, 55:0.0635, 66:0.2643, A6o:0.0003, 77:0.1778, 86s:0.0026, 88:0.1210, A8o:0.0012, 99:0.1804, TT:0.4113, ATo:0.0023, JJ:0.0480, KJo:0.0002, QQ:0.2805, AQo:0.0027, K2s:0.0061, K4s:0.0171, K5s:0.1128, K7s:0.4905, K8s:0.4342, K9s:0.1888, KTs:0.1451, KJs:0.4952, KQs:0.7371, KK:0.9729, AKo:0.9861, A2s:0.4326, A3s:0.6512, A4s:0.5987, A5s:0.7395, A6s:0.2453, A7s:0.5544, A8s:0.5184, A9s:0.1003, ATs:0.7302, AJs:0.2526, AQs:0.1803, AKs:0.6112"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.0169, 44:0.1501, 55:0.3612, 65s:0.0669, 66:0.0447, 76s:0.0445, 77:0.1972, 87s:0.0031, 88:0.1300, 98s:0.0062, 99:0.2240, TT:0.0115, JJ:0.5579, QQ:0.4561, KQo:0.0507, AQo:0.1396, K5s:0.0010, K6s:0.0001, K7s:0.0002, KTs:0.3148, KJs:0.0434, KQs:0.4490, KK:0.0001, A4s:0.0004, A5s:0.0928, A6s:0.0003, A8s:0.0345, A9s:0.1215, ATs:0.0554, AJs:0.8228, AQs:0.9234"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "33:0.0001, ATo:0.0018, JJ:0.0001, KJo:0.0001, AJo:0.0001, KQo:0.0001, K5s:0.0001, K6s:0.0011, K7s:0.0027, K8s:0.0063, K9s:0.0118, KTs:0.0005, KJs:0.0025, KK:0.0262, AKo:0.0022, A5s:0.0003, A6s:0.0005, A7s:0.0013, A8s:0.0042, A9s:0.0009, AJs:0.0001, AQs:0.0001, AKs:0.0230"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0066, 99:0.0115, A9o:0.0001, TT:0.0191, ATo:0.0018, KJo:0.0012, AJo:0.0114, KQo:0.0044, K5s:0.0082, K6s:0.0066, K7s:0.0096, K8s:0.0001, K9s:0.0121, KTs:0.0390, KJs:0.0205, KQs:0.0002, KK:0.0508, AKo:0.0192, A5s:0.0037, A6s:0.0016, A7s:0.0021, A8s:0.0003, A9s:0.0144, ATs:0.0032, AJs:0.0061, AKs:0.0398"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0199, 55:0.0748, 66:0.0282, 77:0.0439, 88:0.1082, 99:0.2463, TT:0.2525, ATo:0.0001, JJ:0.0098, Q9s:0.0001, QQ:0.5439, AQo:0.0021, K5s:0.0071, K6s:0.0062, K7s:0.0167, K8s:0.0005, K9s:0.1097, KTs:0.4985, KJs:0.0495, KQs:0.5461, KK:0.2919, AKo:0.3998, A2s:0.0006, A3s:0.0085, A4s:0.0039, A5s:0.1046, A6s:0.0878, A7s:0.1147, A8s:0.2127, A9s:0.4008, ATs:0.2660, AJs:0.0794, AQs:0.0739, AKs:0.1425"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.2012, A3o:0.1289, A4o:0.0929, K5o:0.0001, A5o:0.0308, K6o:0.0106, A6o:0.1800, A7o:0.0059, A8o:0.0010, A9o:0.0004, ATo:0.0021, JJ:0.0001, AJo:0.0002, QQ:0.0002, AQo:0.5660, K2s:0.0269, K3s:0.2893, K4s:0.1957, K5s:0.0001, K6s:0.0146, K7s:0.0904, K8s:0.1079, K9s:0.0003, KTs:0.0001, KJs:0.0003, KQs:0.0003, KK:0.9997, AKo:0.0059, A2s:0.6365, A3s:0.0928, A4s:0.0748, A5s:0.1396, A6s:0.2348, A7s:0.7672, A8s:0.2259, A9s:0.0060, ATs:0.0564, AJs:0.0573, AQs:0.6936, AKs:0.0346, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, AQo:0.0001, K6s:0.0001, KJs:0.0001, KK:0.0003, AKo:0.9941, A5s:0.0001, A7s:0.0001, AKs:0.9654"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "K2o:0.0016, A2o:0.1384, K3o:0.0132, A3o:0.1937, K4o:0.0137, A4o:0.1271, A5o:0.0645, K6o:0.0007, A6o:0.0109, K7o:0.0361, A7o:0.1662, K8o:0.0001, A8o:0.0149, K9o:0.0001, KTo:0.0006, ATo:0.0021, JJ:0.0016, AJo:0.0010, QTs:0.0001, QQ:0.0012, AQo:0.3243, K2s:0.0468, K4s:0.0183, K6s:0.0154, K7s:0.0404, K8s:0.0046, K9s:0.0004, KTs:0.0076, KQs:0.0027, KK:0.6663, AKo:0.0037, A2s:0.7805, A3s:0.1864, A4s:0.0383, A5s:0.0016, A6s:0.5149, A7s:0.5850, A8s:0.0887, A9s:0.1038, ATs:0.0780, AJs:0.0253, AQs:0.7261, AKs:0.1919, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0001, K8s:0.0001, KK:0.3337, AKo:0.9963, A2s:0.0183, A3s:0.0102, A4s:0.0621, A5s:0.0415, A6s:0.0001, A7s:0.0003, ATs:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.8081"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0018, 33:0.4631, 44:0.7296, 54s:0.0569, 55:0.9081, 65s:0.8209, 66:0.9821, 75s:0.0062, 76s:0.6345, 77:0.8773, 86s:0.0095, 87s:0.4614, 88:0.9968, 97s:0.0029, 98s:0.0694, 99:0.9998, T8s:0.5079, T9s:0.9283, TT, ATo:0.0682, J9s:0.0373, JTs:0.9736, JJ, KJo:0.2189, AJo:0.9892, Q8s:0.0312, Q9s:0.0008, QTs:0.9387, QJs:0.7965, QQ, KQo:0.5632, AQo:0.5448, K5s:0.0037, K6s:0.8749, K7s:0.4539, K8s:0.5878, K9s:0.4798, KTs, KJs:0.9998, KQs, KK:0.6063, A2s:0.0007, A3s:0.0220, A4s:0.1105, A5s:0.4878, A6s:0.0764, A7s:0.1927, A8s:0.8163, A9s:0.8300, ATs:0.9986, AJs:0.9997, AQs"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0062, A3o:0.0003, A4o:0.2900, A5o:0.0845, A6o:0.0251, A7o:0.0481, A8o:0.0469, A9o:0.0624, ATo:0.4520, J9s:0.0001, AJo:0.0065, AQo:0.4552, K2s:0.0100, K3s:0.0001, K4s:0.0007, K6s:0.0037, K7s:0.0720, KK:0.1836, AKo:0.0002, A2s:0.6092, A3s:0.1837, A4s:0.2271, A5s:0.0085, A6s:0.5147, A7s:0.3483, A8s:0.0051, A9s:0.0030, ATs:0.0011, AKs:0.6663, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.2583, 44:0.2569, A4o:0.0136, 54s:0.0001, 55:0.0914, A5o:0.0207, 65s:0.0002, 66:0.0174, 77:0.1226, A7o:0.0001, 88:0.0032, 99:0.0002, A9o:0.0001, TT:0.0001, J9s:0.0001, AJo:0.0014, QJs:0.0001, K5s:0.0001, K6s:0.0001, K7s:0.0001, KJs:0.0001, KK:0.2101, AKo:0.9998, A2s:0.3862, A3s:0.7910, A4s:0.6554, A5s:0.4969, A6s:0.4048, A7s:0.4526, A8s:0.1769, A9s:0.1664, ATs:0.0003, AJs:0.0003, AKs:0.3337"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0452, 44:0.0662, 54s:0.0223, 55:0.0135, 65s:0.0863, 66:0.3620, 76s:0.1605, 77:0.1744, 87s:0.0012, 88:0.3375, 97s:0.0033, 98s:0.1281, 99:0.0375, A9o:0.0001, T8s:0.1780, T9s:0.2676, TT:0.1362, ATo:0.0228, J9s:0.0131, JTs:0.0026, JJ:0.3000, AJo:0.0551, AQo:0.8514, K4s:0.0875, K5s:0.0154, K6s:0.0070, K7s:0.0001, K9s:0.0226, KTs:0.0056, KJs:0.0604, KK:0.3310, A2s:0.0238, A3s:0.0382, A4s:0.1468, A5s:0.0853, A6s:0.0425, A7s:0.2098, A8s:0.1054, A9s:0.0090, ATs:0.1001, AJs:0.0004, AQs:0.0019, AA:0.8430"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0078, 44:0.0003, 55:0.0007, A5o:0.0120, 65s:0.0025, 66:0.0075, 76s:0.0003, 77:0.0044, 88:0.0107, 99:0.0037, A9o:0.0001, TT:0.0005, AJo:0.0142, K4s:0.0038, K5s:0.0068, K6s:0.0381, K7s:0.0195, K8s:0.0066, K9s:0.0015, KTs:0.0012, KJs:0.0071, KK:0.3000, AKo:0.5788, A2s:0.9381, A3s:0.9269, A4s:0.7514, A5s:0.5944, A6s:0.3635, A7s:0.2339, A8s:0.1759, A9s:0.0666, ATs:0.0037, AJs:0.0001, AKs:0.7947, AA:0.1570"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.1036, JJ:0.2515, KK:0.6310, AKo:0.4519, AKs:0.7802, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "J7s:0.0001, QQ:0.0067, AQo:0.0037, KK:0.0793, AKo:0.0206, A3s:0.0025, A4s:0.0344, A5s:0.0006, A7s:0.0002, A8s:0.0106, A9s:0.0045, ATs:0.0664, AJs:0.0441, AQs:0.1962, AKs:0.0020, AA:0.1614"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0003, 75s:0.0002, A7o:0.0003, 87s:0.0030, 88:0.0008, 99:0.0004, T7s:0.0004, T9s:0.0001, JJ:0.0013, Q8s:0.0002, QTs:0.0003, QQ:0.0001, AQo:0.0001, K3s:0.0009, K5s:0.0364, KTs:0.0021, KJs:0.0004, KQs:0.0056, KK:0.9206, AKo:0.9793, A3s:0.0623, A4s:0.2255, A5s:0.3373, A6s:0.2304, A7s:0.0109, A8s:0.0014, A9s:0.0584, ATs:0.1869, AJs:0.0142, AQs:0.0001, AKs:0.9980, AA:0.8386"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0004, 44:0.0255, 54s:0.0020, 55:0.0123, 65s:0.0821, 66:0.1612, 76s:0.0388, 77:0.0096, 87s:0.0001, 88:0.2312, 97s:0.0009, 98s:0.0061, 99:0.0018, T8s:0.0158, T9s:0.0133, TT:0.0183, ATo:0.0162, J8s:0.0008, J9s:0.0018, JTs:0.0001, JJ:0.2104, AJo:0.0029, Q9s:0.0001, KQo:0.0001, AQo:0.3951, K4s:0.0011, K5s:0.0002, K6s:0.0099, K7s:0.0036, K8s:0.0112, K9s:0.0076, KTs:0.0013, KJs:0.0028, KK:0.2311, AKo:0.0019, A2s:0.0103, A3s:0.1749, A4s:0.0076, A5s:0.0365, A6s:0.0313, A7s:0.0221, A8s:0.0747, A9s:0.0218, ATs:0.0431, AJs:0.0003, AQs:0.0019, AA:0.3977"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0023, A4o:0.0008, 54s:0.0001, A5o:0.0111, 66:0.0016, 76s:0.0001, 77:0.0002, 87s:0.0001, 88:0.0009, 97s:0.0002, 98s:0.0001, 99:0.0001, T9s:0.0001, TT:0.0003, KTo:0.0003, JJ:0.0025, AJo:0.0038, K2s:0.0005, K3s:0.0241, K4s:0.1106, K5s:0.2346, K6s:0.1986, K7s:0.3283, K8s:0.0298, K9s:0.0249, KTs:0.0041, KJs:0.0512, KK:0.3999, AKo:0.5769, A2s:0.5707, A3s:0.6035, A4s:0.9450, A5s:0.6147, A6s:0.3857, A7s:0.3977, A8s:0.1237, A9s:0.0484, ATs:0.0603, AJs:0.0002, AKs:0.7947, AA:0.6023"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 99:0.0002, TT:0.0001, JJ:0.0038, QQ:0.0097, K7s:0.0001, KK, AKo:0.4614, AJs:0.0001, AQs:0.0001, AKs:0.6458, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, KK:0.6310, AKo:0.3572, AKs:0.7941, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0023, QQ:0.0001, KTs:0.0039, KK:0.0771, AKo:0.0479, A4s:0.0471, A5s:0.0043, A6s:0.0406, A7s:0.0113, A8s:0.0021, A9s:0.0016, AJs:0.0072, AQs:0.3385, AKs:0.0156, AA:0.1983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0001, 87s:0.0008, 88:0.0001, A8o:0.0004, T7s:0.0001, J8s:0.0001, AJo:0.0004, QQ:0.0001, AQo:0.0001, K5s:0.0010, K9s:0.0001, KTs:0.0019, KJs:0.0058, KK:0.9229, AKo:0.9518, A3s:0.0008, A4s:0.0287, A5s:0.0299, A9s:0.1932, ATs:0.1336, AJs:0.3633, AQs:0.0015, AKs:0.9839, AA:0.8017"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.1186, 54s:0.0252, 55:0.0105, 65s:0.0453, 66:0.1084, 76s:0.0052, 77:0.0544, 88:0.1908, 98s:0.0083, 99:0.0221, T8s:0.0332, T9s:0.0367, TT:0.0453, J9s:0.0004, JTs:0.0002, JJ:0.1893, AQo:0.4181, K5s:0.0337, K7s:0.0219, K8s:0.0002, K9s:0.0001, KTs:0.0025, KJs:0.0329, KK:0.0097, A3s:0.1209, A4s:0.0002, A5s:0.0937, A6s:0.0146, A7s:0.0480, A8s:0.1192, A9s:0.0068, ATs:0.0779, AJs:0.0003, AQs:0.0018, AKs:0.0323, AA:0.4645"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0005, A4o:0.0002, A5o:0.0033, 65s:0.0095, 66:0.0001, 76s:0.0014, 77:0.0001, 88:0.0001, KTo:0.0067, ATo:0.0001, JJ:0.0010, KJo:0.0040, AQo:0.0001, K2s:0.0001, K3s:0.0001, K4s:0.0765, K5s:0.2683, K6s:0.5222, K7s:0.2556, K8s:0.1097, K9s:0.0280, KTs:0.0045, KJs:0.0342, KK:0.6213, AKo:0.5788, A2s:0.4495, A3s:0.8389, A4s:0.3640, A5s:0.4952, A6s:0.2404, A7s:0.1720, A8s:0.0927, A9s:0.0671, ATs:0.0258, AJs:0.0002, AKs:0.7624, AA:0.5355"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.0013, QQ:0.0010, KK, AKo:0.9896, AKs:0.9983, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, KK:0.6310, AKo:0.5785, AKs:0.7947, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0008, 54s:0.0257, 55:0.3674, 65s:0.4028, 66:0.6503, 76s:0.2170, 77:0.4320, 87s:0.0001, 88:0.8432, 98s:0.0041, 99:0.5917, T8s:0.0009, T9s:0.7148, TT:0.7425, ATo:0.2642, J9s:0.0002, JTs:0.9213, JJ:0.7641, KJo:0.0006, AJo:0.5160, Q9s:0.0001, QTs:0.9969, QJs:0.9981, QQ, KQo:0.4029, AQo:0.1012, K5s:0.0005, K6s:0.0097, K7s:0.0554, K8s:0.1567, K9s:0.1699, KTs:0.9340, KJs:0.9500, KQs, KK:0.3435, AKo:0.6239, A2s:0.0004, A3s:0.0163, A4s:0.0329, A5s:0.1898, A6s:0.1291, A7s:0.0304, A8s:0.6094, A9s:0.7418, ATs:0.9822, AJs:0.7302, AQs:0.9969, AKs:0.2470"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A3o:0.0003, 43s:0.0001, A4o:0.0024, 54s:0.0081, 55:0.1133, A5o:0.1084, 65s:0.0951, 66:0.3455, 75s:0.0011, 76s:0.0031, 77:0.5646, A7o:0.0001, 87s:0.0009, 88:0.1568, A8o:0.0009, 98s:0.0147, 99:0.4082, A9o:0.1294, T8s:0.0004, T9s:0.0013, TT:0.2575, KTo:0.0011, ATo:0.7068, J9s:0.3005, JTs:0.0612, JJ:0.2359, KJo:0.2529, AJo:0.4838, QTs:0.0002, QJs:0.0001, QQ:0.0001, KQo:0.5971, AQo:0.8988, K3s:0.0125, K4s:0.5535, K5s:0.0540, K6s:0.8027, K7s:0.4705, K8s:0.0051, K9s:0.8085, KTs:0.0658, KJs:0.0499, KK:0.6565, AKo:0.3761, A2s:0.9993, A3s:0.9835, A4s:0.9669, A5s:0.8097, A6s:0.8702, A7s:0.9687, A8s:0.3904, A9s:0.2581, ATs:0.0178, AJs:0.2698, AQs:0.0031, AKs:0.7530, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0502, 44:0.5275, 54s:0.4068, 55:0.9494, 64s:0.0003, 65s:0.6777, 66:0.6209, 76s:0.4797, 77:0.7166, 87s:0.5383, 88:0.7574, 97s:0.0014, 98s:0.8439, 99:0.8437, T7s:0.0009, T8s:0.0934, T9s:0.7447, TT:0.6836, ATo:0.4982, J8s:0.0005, J9s:0.8406, JTs:0.9890, JJ:0.8030, QJo:0.0538, KJo:0.3928, AJo:0.8858, Q8s:0.0004, Q9s:0.6202, QTs:0.9992, QJs:0.9998, QQ, KQo:0.6530, AQo:0.1993, K3s:0.0001, K4s:0.0013, K5s:0.0132, K6s:0.1961, K7s:0.2077, K8s:0.6932, K9s:0.4053, KTs:0.9825, KJs:0.9741, KQs, KK:0.3701, AKo:0.4015, A2s:0.0628, A3s:0.0443, A4s:0.2715, A5s:0.0962, A6s:0.0378, A7s:0.4038, A8s:0.8806, A9s:0.8734, ATs:0.9996, AJs:0.9994, AQs:0.9405, AKs:0.0401"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0003, A3o:0.0009, 44:0.1697, A4o:0.0017, 53s:0.0036, 54s:0.0286, 55:0.0500, A5o:0.5347, 65s:0.3101, 66:0.3791, A6o:0.0002, 76s:0.5091, 77:0.2832, A7o:0.0202, 86s:0.0079, 87s:0.2084, 88:0.2426, A8o:0.0087, 98s:0.0959, 99:0.1562, A9o:0.4652, T7s:0.0014, T8s:0.2104, T9s:0.2547, TT:0.3164, QTo:0.0412, KTo:0.1529, ATo:0.5012, J8s:0.0717, J9s:0.1433, JTs:0.0107, JJ:0.1970, QJo:0.1705, KJo:0.5042, AJo:0.1141, Q5s:0.0001, Q7s:0.0009, Q8s:0.0009, Q9s:0.3773, QTs:0.0001, KQo:0.3469, AQo:0.8007, K2s:0.0015, K3s:0.0016, K4s:0.4024, K5s:0.2347, K6s:0.7952, K7s:0.6654, K8s:0.0373, K9s:0.5942, KTs:0.0169, KJs:0.0258, KK:0.6299, AKo:0.5985, A2s:0.9367, A3s:0.9556, A4s:0.7284, A5s:0.9038, A6s:0.9620, A7s:0.5960, A8s:0.1194, A9s:0.1266, ATs:0.0004, AJs:0.0005, AQs:0.0595, AKs:0.9599, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.8099, 33:0.9751, 44:0.8876, 54s:0.9974, 55:0.9998, 64s:0.0009, 65s:0.9684, 66:0.7745, 75s:0.4866, 76s:0.7118, 77, 85s:0.0002, 86s:0.1262, 87s:0.8874, 88, 97s:0.5828, 98s:0.9649, 99, T8s:0.6618, T9s:0.9296, TT, KTo:0.0001, ATo:0.5007, J9s:0.9731, JTs:0.9975, JJ, QJo:0.1521, KJo:0.3664, AJo:0.9985, Q8s:0.0008, Q9s:0.9291, QTs:0.9960, QJs:0.9991, QQ:0.9884, KQo:0.9060, AQo:0.6617, K3s:0.0003, K4s:0.0128, K5s:0.2332, K6s:0.5773, K7s:0.8798, K8s:0.8963, K9s:0.9972, KTs:0.9895, KJs:0.9997, KQs, KK:0.0640, AKo:0.0051, A2s:0.0052, A3s:0.0390, A4s:0.1860, A5s:0.5546, A6s:0.2888, A7s:0.4371, A8s:0.6801, A9s:0.9998, ATs:0.9991, AJs, AQs:0.9949, AKs:0.0154"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.1357, A2o:0.0022, 33:0.0026, A3o:0.1338, 43s:0.0328, 44:0.1121, A4o:0.2304, 54s:0.0003, 55:0.0001, K5o:0.0001, A5o:0.5839, 64s:0.1705, 65s:0.0304, 66:0.2255, K6o:0.0002, A6o:0.0058, 76s:0.2766, 77:0.0001, A7o:0.0163, 86s:0.3130, 87s:0.0979, A8o:0.0067, 95s:0.0001, 98s:0.0067, A9o:0.3094, T8s:0.0300, T9s:0.0696, KTo:0.0883, ATo:0.4991, J8s:0.2972, J9s:0.0129, QJo:0.2121, KJo:0.6279, AJo:0.0015, Q5s:0.0046, Q7s:0.0001, Q8s:0.0001, Q9s:0.0698, QTs:0.0038, QJs:0.0004, QQ:0.0116, KQo:0.0940, AQo:0.3383, K3s:0.4675, K4s:0.4555, K5s:0.0379, K6s:0.4176, K7s:0.1077, K8s:0.0894, K9s:0.0023, KTs:0.0104, KJs:0.0003, KK:0.9360, AKo:0.9949, A2s:0.9944, A3s:0.9603, A4s:0.8139, A5s:0.4454, A6s:0.7111, A7s:0.5627, A8s:0.3199, A9s:0.0002, ATs:0.0009, AQs:0.0051, AKs:0.9846, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22, A2o:0.6624, 32s:0.9903, 33, 53o:0.0002, A3o:0.7404, 42s:0.9992, 43s:0.9919, 44, 54o:0.9591, 64o:0.7030, A4o:0.8186, 52s:0.9956, 53s:0.9998, 54s:0.9933, 55:0.9810, 65o:0.9800, 75o:0.1768, A5o:0.9412, 62s:0.9967, 63s, 64s, 65s:0.9991, 66:0.9688, 76o:0.9694, 86o:0.1294, K6o:0.9629, A6o:0.9040, 72s:0.0528, 73s:0.9984, 74s:0.8913, 75s:0.9868, 76s:0.9526, 77:0.9976, 87o:0.9993, 97o:0.9391, T7o:0.0195, K7o:0.9286, A7o:0.7887, 82s:0.3102, 83s:0.3043, 84s:0.9965, 85s, 86s:0.9998, 87s:0.9997, 88, 98o:0.9956, T8o:0.9966, Q8o:0.9290, K8o:0.9907, A8o:0.9602, 92s:0.9826, 93s:0.9911, 94s:0.9869, 95s:0.9997, 96s:0.9498, 97s, 98s, 99, T9o:0.9575, J9o:0.9055, Q9o:0.9577, K9o:0.9983, A9o, T2s:0.9989, T3s:0.9973, T4s:0.9931, T5s:0.9055, T6s, T7s:0.9900, T8s, T9s:0.9991, TT, JTo:0.9502, QTo:0.9797, KTo:0.9309, ATo:0.9985, J2s:0.9952, J3s:0.9987, J4s:0.9979, J5s, J6s:0.9986, J7s:0.9983, J8s:0.7803, J9s:0.7979, JTs:0.9763, JJ, QJo:0.9796, KJo, AJo, Q2s:0.9998, Q3s:0.9647, Q4s:0.6866, Q5s:0.9890, Q6s:0.9988, Q7s:0.9993, Q8s:0.9994, Q9s:0.9883, QTs:0.9989, QJs:0.9130, QQ, KQo, AQo, K2s:0.9994, K3s:0.9997, K4s, K5s:0.9998, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK:0.9704, AKo:0.9033, A2s:0.7222, A3s:0.8656, A4s:0.6063, A5s:0.9875, A6s:0.5438, A7s:0.8152, A8s, A9s, ATs, AJs, AQs:0.9971, AKs:0.9642"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.1130, 32s:0.0044, A3o:0.2541, 42s:0.0002, 43s:0.0080, 54o:0.0399, K4o:0.0006, A4o:0.1808, 52s:0.0006, 53s:0.0001, 54s:0.0066, 55:0.0190, 65o:0.0200, 75o:0.0046, K5o:0.0435, A5o:0.0583, 65s:0.0008, 66:0.0312, 76o:0.0302, 86o:0.0723, K6o:0.0005, A6o:0.0950, 72s:0.0004, 73s:0.0005, 74s:0.1084, 75s:0.0131, 76s:0.0474, 77:0.0024, 97o:0.0251, K7o:0.0476, A7o:0.2113, 84s:0.0003, 86s:0.0002, T8o:0.0011, J8o:0.0014, Q8o:0.0144, A8o:0.0397, 95s:0.0001, 96s:0.0502, T9o:0.0423, J9o:0.0932, Q9o:0.0404, K9o:0.0012, T2s:0.0004, T4s:0.0046, T5s:0.0944, T7s:0.0098, T9s:0.0009, JTo:0.0497, QTo:0.0202, KTo:0.0691, ATo:0.0015, J4s:0.0018, J6s:0.0009, J7s:0.0016, J8s:0.2197, J9s:0.2021, JTs:0.0237, QJo:0.0203, Q3s:0.0349, Q4s:0.3133, Q5s:0.0110, Q6s:0.0012, Q8s:0.0005, Q9s:0.0116, QTs:0.0011, QJs:0.0870, K2s:0.0005, K3s:0.0003, K5s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0001, KK:0.0296, AKo:0.0967, A2s:0.2778, A3s:0.1344, A4s:0.3937, A5s:0.0125, A6s:0.4562, A7s:0.1848, AQs:0.0029, AKs:0.0358, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.2443, 55:0.7095, 65s:0.6627, 66:0.4981, 76s:0.5614, 77:0.9535, 87s:0.0172, 88:0.9947, 97s:0.0126, 99:0.9728, T8s:0.0089, T9s:0.6534, TT:0.9928, ATo:0.2551, J8s:0.0059, J9s:0.0918, JTs:0.9278, JJ:0.9834, AJo:0.4228, Q9s:0.0323, QTs:0.6506, QJs:0.8645, QQ:0.9983, AQo:0.6015, K5s:0.0042, K6s:0.0010, K7s:0.0001, K8s:0.0001, K9s:0.0043, KTs:0.0463, KJs:0.1011, KQs:0.4798, KK:0.9964, AKo:0.9657, A2s:0.3205, A3s:0.4587, A4s:0.8291, A5s:0.7939, A6s:0.4875, A7s:0.8627, A8s:0.9862, A9s:0.9413, ATs:0.9945, AJs:0.9994, AQs:0.9984, AKs:0.7689"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0002, A5o:0.0399, A6o:0.0001, 77:0.0005, A7o:0.0069, A8o:0.0381, A9o:0.0415, T9s:0.0003, TT:0.0001, KTo:0.0004, ATo:0.2835, JJ:0.0001, KJo:0.0001, AJo:0.1394, QTs:0.0001, QJs:0.0003, QQ:0.0001, KQo:0.0039, AQo:0.0662, K3s:0.0001, K4s:0.0001, K5s:0.0001, K6s:0.0001, K7s:0.0015, K8s:0.0013, K9s:0.0045, KTs:0.0030, KJs:0.0059, KQs:0.0001, KK:0.0019, AKo:0.0112, A2s:0.4230, A3s:0.5307, A4s:0.0571, A5s:0.1987, A6s:0.1147, A7s:0.0453, A8s:0.0022, A9s:0.0062, ATs:0.0021, AQs:0.0005, AKs:0.1098, AA:0.7824"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0346, A7o:0.0256, A8o:0.0182, 98s:0.0001, A9o:0.0100, ATo:0.0375, JJ:0.0001, AJo:0.0948, QTs:0.0001, QJs:0.0002, AQo:0.0183, K5s:0.0003, K8s:0.0040, K9s:0.0007, KJs:0.0001, KQs:0.0001, KK:0.0001, AKo:0.0066, A2s:0.0277, A4s:0.0690, A6s:0.0997, A7s:0.0637, A8s:0.0025, A9s:0.0149, ATs:0.0002, AJs:0.0002, AQs:0.0001, AKs:0.1192, AA:0.2176"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0008, 99:0.0008, A9o:0.0001, TT:0.0002, JJ:0.0002, AJo:0.0001, QJs:0.0001, QQ:0.0001, KQo:0.0001, K5s:0.0001, KTs:0.0002, KK:0.0016, AKo:0.0164, A2s:0.0004, A3s:0.0012, A4s:0.0002, A7s:0.0003, A8s:0.0002, A9s:0.0003, ATs:0.0004, AJs:0.0002, AQs:0.0002, AKs:0.0022"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@17.7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0049, 43s:0.0005, 54o:0.0002, A4o:0.0016, 54s:0.0027, 55:0.0186, A5o:0.0043, 65s:0.0004, 66:0.0308, A6o:0.0239, 75s:0.0028, 76s:0.0418, 77:0.0024, A7o:0.0099, 86s:0.0001, A8o:0.0044, 96s:0.0040, T9s:0.0006, JTo:0.0007, QTo:0.0005, KTo:0.0034, ATo:0.0014, J8s:0.0158, J9s:0.1714, JTs:0.0172, QJo:0.0002, Q3s:0.0007, Q4s:0.0155, Q5s:0.0008, Q6s:0.0001, Q9s:0.0020, QTs:0.0003, QJs:0.0839, KK:0.0295, AKo:0.0829, A2s:0.0024, A3s:0.0035, A4s:0.0037, A5s:0.0077, A6s:0.0238, A7s:0.0508, AQs:0.0029, AKs:0.0280, AA:0.1495"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0117, A3o:0.0593, A4o:0.1273, 54s:0.0004, 55:0.0004, A5o:0.0135, 65s:0.0001, 66:0.0004, A6o:0.0005, 74s:0.0011, 75s:0.0003, 76s:0.0048, A7o:0.0677, A8o:0.0099, J9s:0.0019, KK:0.0001, AKo:0.0138, A2s:0.2753, A3s:0.1306, A4s:0.3898, A5s:0.0048, A6s:0.4260, A7s:0.1339, AKs:0.0078, AA:0.8505"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@20",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0025, A4o:0.0002, 54s:0.0007, 55:0.0168, A5o:0.0035, 65s:0.0001, 66:0.0236, A6o:0.0035, 76s:0.0034, 77:0.0021, A7o:0.0091, A8o:0.0027, 96s:0.0056, T7s:0.0012, T9s:0.0002, QTo:0.0015, ATo:0.0011, J8s:0.0559, J9s:0.0757, JTs:0.0148, Q4s:0.0004, Q5s:0.0011, Q9s:0.0010, QTs:0.0009, QJs:0.0359, K2s:0.0001, KK:0.0276, AKo:0.0169, A2s:0.0016, A3s:0.0092, A4s:0.0217, A5s:0.0011, A6s:0.2343, A7s:0.0178, AQs:0.0029, AKs:0.0128, AA:0.2167"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0232, 32s:0.0001, A3o:0.1066, 43s:0.0002, 54o:0.0003, A4o:0.0403, 54s:0.0001, 55:0.0021, A5o:0.0145, 65s:0.0004, 66:0.0074, A6o:0.0025, 74s:0.0022, 75s:0.0020, 76s:0.0332, 77:0.0003, A7o:0.1500, A8o:0.0035, 96s:0.0002, T5s:0.0003, T7s:0.0001, T9s:0.0004, ATo:0.0001, J8s:0.0001, JTs:0.0001, QJs:0.0002, KK:0.0020, AKo:0.0798, A2s:0.2687, A3s:0.1193, A4s:0.3491, A5s:0.0106, A6s:0.1880, A7s:0.1610, AKs:0.0230, AA:0.7833"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@10|HJ:4BET@74.75",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0296, AKo:0.0934, AKs:0.0346, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9996, 32s:0.8877, 33:0.9998, 53o:0.0051, A3o:0.1547, 42s:0.8754, 43s:0.9976, 44, 54o:0.9912, 64o:0.8804, A4o:0.3057, 52s:0.9919, 53s:0.9902, 54s:0.8021, 55, 65o:0.9919, 75o:0.8572, A5o:0.3293, 62s:0.1755, 63s:0.8070, 64s:0.9985, 65s:0.9989, 66:0.9980, 76o:0.9954, 86o:0.5395, 96o:0.0001, K6o:0.0002, A6o:0.1082, 73s:0.9531, 74s:0.9984, 75s:0.9980, 76s:0.6282, 77:0.9998, 87o:0.8605, 97o:0.6595, K7o:0.2330, A7o:0.6444, 82s:0.0028, 83s:0.0250, 84s:0.9320, 85s:0.9938, 86s:0.9997, 87s:0.9995, 88, 98o:0.5334, K8o:0.0002, A8o:0.7134, 92s:0.0029, 93s:0.0322, 94s:0.4203, 95s:0.9950, 96s:0.9970, 97s:0.9979, 98s:0.7651, 99, T9o:0.9197, Q9o:0.0034, K9o:0.4120, A9o:0.8792, T2s:0.0001, T3s:0.9140, T4s:0.7684, T5s:0.7349, T6s:0.9933, T7s:0.9972, T8s:0.9861, T9s, TT, JTo:0.9955, QTo:0.9525, KTo:0.9383, ATo:0.9988, J2s:0.9713, J3s:0.8613, J4s:0.7824, J5s:0.9534, J6s:0.9742, J7s:0.9373, J8s:0.9921, J9s:0.9974, JTs:0.9989, JJ:0.9996, QJo:0.8801, KJo:0.9948, AJo:0.9975, Q2s:0.9671, Q3s:0.7233, Q4s:0.9054, Q5s:0.5963, Q6s:0.9392, Q7s:0.8756, Q8s:0.9217, Q9s:0.9929, QTs:0.9998, QJs:0.9982, QQ:0.3382, KQo:0.6270, AQo:0.1783, K2s:0.9896, K3s:0.9910, K4s:0.9897, K5s:0.9850, K6s:0.9676, K7s:0.9860, K8s:0.9922, K9s:0.9956, KTs:0.9917, KJs:0.9997, KQs:0.9504, AKo:0.0001, A2s:0.1538, A3s:0.9001, A4s:0.1239, A5s:0.9987, A6s:0.7715, A7s:0.9977, A8s:0.9408, A9s:0.8848, ATs:0.9990, AJs:0.9993, AQs:0.7187"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0003, Q2o:0.0001, A2o:0.2706, 32s:0.0004, 53o:0.0001, K3o:0.0187, A3o:0.3956, 43s:0.0011, 64o:0.0193, Q4o:0.0001, K4o:0.0634, A4o:0.5437, 52s:0.0007, 53s:0.0082, 54s:0.1945, 55:0.0001, Q5o:0.0020, K5o:0.0010, A5o:0.6558, 63s:0.1849, 64s:0.0002, 65s:0.0004, 66:0.0020, 86o:0.0567, Q6o:0.0014, K6o:0.0356, A6o:0.5435, 73s:0.0005, 74s:0.0005, 75s:0.0008, 76s:0.3704, 77:0.0001, Q7o:0.0004, K7o:0.0562, A7o:0.1485, 83s:0.0005, 84s:0.0157, 98o:0.0005, T8o:0.0184, Q8o:0.0014, K8o:0.0089, A8o:0.2509, 92s:0.0002, 97s:0.0002, 98s:0.2345, Q9o:0.3749, K9o:0.5419, A9o:0.1043, T3s:0.0002, T5s:0.0001, T8s:0.0119, QTo:0.0289, KTo:0.0526, J2s:0.0012, J4s:0.0068, J5s:0.0001, J7s:0.0356, J8s:0.0011, J9s:0.0002, JJ:0.0003, QJo:0.1176, KJo:0.0028, AJo:0.0022, Q2s:0.0002, Q3s:0.2586, Q4s:0.0803, Q5s:0.4030, Q6s:0.0578, Q7s:0.1185, Q8s:0.0770, Q9s:0.0032, QJs:0.0017, QQ:0.6618, KQo:0.3730, AQo:0.8216, K2s:0.0096, K3s:0.0047, K4s:0.0042, K5s:0.0146, K6s:0.0301, K7s:0.0138, K8s:0.0051, K9s:0.0006, KTs:0.0077, KJs:0.0002, KQs:0.0496, KK, AKo, A2s:0.8458, A3s:0.0998, A4s:0.8761, A5s:0.0012, A6s:0.2280, A7s:0.0020, A8s:0.0591, A9s:0.1149, ATs:0.0009, AJs:0.0007, AQs:0.2813, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.3716, 55:0.2633, 65s:0.0294, 66:0.2098, 76s:0.1766, 77:0.0930, 88:0.5189, 99:0.3032, TT:0.2794, ATo:0.0006, JTs:0.0017, JJ:0.5762, Q9s:0.0002, QTs:0.0353, QJs:0.0107, QQ:0.9989, AQo:0.4708, K7s:0.0124, K9s:0.4089, KTs:0.3980, KJs:0.3213, KQs:0.8264, KK:0.3305, AKo:0.0006, A3s:0.0092, A4s:0.1611, A5s:0.3631, A6s:0.0380, A7s:0.2061, A8s:0.1965, A9s:0.4130, ATs:0.6327, AJs:0.3903, AQs:0.9981, AKs:0.0016, AA:0.0002"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0003, 55:0.0001, A5o:0.0220, 77:0.0093, A7o:0.0024, A8o:0.0034, A9o:0.0016, T7s:0.0004, TT:0.0037, KTo:0.0011, ATo:0.0210, JJ:0.0036, KJo:0.0001, AJo:0.0166, AQo:0.2427, K4s:0.0041, K6s:0.0009, K7s:0.0003, K8s:0.0263, K9s:0.0003, KTs:0.0117, KJs:0.0302, KQs:0.0001, KK:0.0022, AKo:0.0177, A2s:0.4461, A3s:0.2425, A4s:0.5976, A5s:0.0544, A6s:0.1214, A7s:0.0806, A8s:0.1965, A9s:0.0514, ATs:0.0826, AJs:0.1195, AQs:0.0010, AKs:0.4497, AA:0.6198"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0884, A6o:0.0001, A7o:0.0013, A8o:0.0190, KTo:0.0107, ATo:0.0298, KJo:0.0428, AJo:0.1053, QQ:0.0007, KQo:0.0154, AQo:0.0422, K4s:0.0429, K5s:0.0001, K6s:0.0140, K7s:0.1216, K8s:0.0073, K9s:0.0024, KTs:0.0693, KJs:0.1397, KQs:0.0040, KK:0.0402, AKo:0.0170, A2s:0.0180, A3s:0.0353, A4s:0.0027, A5s:0.0005, A6s:0.0303, A7s:0.0594, A8s:0.0299, A9s:0.1073, ATs:0.0345, AJs:0.0166, AQs:0.0001, AKs:0.3060, AA:0.3801"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0518, 66:0.0186, 77:0.1351, 88:0.0840, 99:0.0880, TT:0.4341, JJ:0.1801, QQ:0.0003, K5s:0.0019, K7s:0.0005, K9s:0.0241, KTs:0.2841, KJs:0.1262, KQs:0.1573, KK:0.6271, AKo:0.9648, A2s:0.1992, A3s:0.0905, A4s:0.0339, A5s:0.5459, A6s:0.4451, A7s:0.4407, A8s:0.4735, A9s:0.1599, ATs:0.1228, AJs:0.1593, AQs:0.0003, AKs:0.2428"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0010, 54s:0.0006, 55:0.2981, 66:0.7066, 76s:0.0011, 77:0.0939, 88:0.7353, 99:0.6558, TT:0.0588, JJ:0.7122, AJo:0.0001, Q9s:0.0023, QTs:0.0010, QQ:0.9764, AQo:0.3381, K4s:0.0003, K5s:0.0009, K9s:0.0081, KTs:0.5904, KJs:0.8450, KQs:0.9752, A4s:0.0305, A5s:0.2931, A7s:0.0007, A8s:0.0622, A9s:0.6755, ATs:0.9487, AJs:0.4176, AQs:0.9926"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "TT:0.0018, ATo:0.0009, KJo:0.0057, AJo:0.0004, QQ:0.0001, KQo:0.0007, AQo:0.0044, K4s:0.0001, K5s:0.0027, K6s:0.0001, K7s:0.0200, K8s:0.0238, K9s:0.0022, KTs:0.0084, KJs:0.0057, KQs:0.0020, KK:0.0240, AKo:0.0010, A3s:0.0006, A4s:0.0007, A5s:0.0034, A6s:0.0014, A7s:0.0003, A8s:0.0014, A9s:0.0009, ATs:0.0035, AJs:0.0093, AQs:0.0001, AKs:0.0150"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0008, 44:0.0006, 66:0.0005, 88:0.0021, TT:0.0059, J9s:0.0002, JJ:0.0009, QQ:0.0116, AQo:0.0025, K7s:0.0010, KTs:0.0061, KJs:0.0048, KQs:0.0048, KK:0.0400, AKo:0.0041, A3s:0.0003, A5s:0.0010, A7s:0.0025, A8s:0.0044, A9s:0.0017, ATs:0.0075, AJs:0.0158, AQs:0.0012, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0434, 33:0.0002, A3o:0.0005, K4o:0.0001, A4o:0.0089, A5o:0.0028, K6o:0.0005, A6o:0.0242, 74s:0.0001, 75s:0.0008, A7o:0.0009, A8o:0.0024, K9o:0.0001, A9o:0.0011, KTo:0.0006, ATo:0.0004, KJo:0.0002, AJo:0.0004, QQ:0.0002, AQo:0.0385, K2s:0.0049, K4s:0.0011, K5s:0.0020, K6s:0.1136, K7s:0.0095, K8s:0.0001, K9s:0.0053, KTs:0.0011, KJs:0.0043, KK:0.0046, AKo:0.0065, A2s:0.0600, A3s:0.0080, A4s:0.0648, A5s:0.0072, A6s:0.0122, A7s:0.3046, A8s:0.2035, A9s:0.2200, ATs:0.0949, AJs:0.0994, AQs:0.6143, AKs:0.3538, AA:0.5802"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0471, A3o:0.0085, A4o:0.0584, A5o:0.0195, A7o:0.0001, A8o:0.0391, K9o:0.0095, A9o:0.0001, AJo:0.0001, QQ:0.0011, AQo:0.0212, K2s:0.0305, K4s:0.0087, K5s:0.0311, K6s:0.0038, K7s:0.0126, K8s:0.0009, KTs:0.0117, KJs:0.0026, KK:0.0466, AKo:0.0009, A2s:0.0336, A3s:0.0480, A4s:0.0220, A5s:0.1052, A7s:0.1092, A8s:0.1722, A9s:0.1241, ATs:0.3171, AJs:0.1050, AQs:0.0015, AKs:0.2639, AA:0.4198"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.9488, AKo:0.9926, A2s:0.1380, A3s:0.1895, A4s:0.2039, A5s:0.1379, A7s:0.0203, A8s:0.0460, A9s:0.1001, AJs:0.0764, AKs:0.3823"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0069, 55:0.4029, 65s:0.0119, 66:0.8581, 76s:0.1328, 77:0.4086, 88:0.9822, 98s:0.0246, 99:0.6523, T8s:0.0010, T9s:0.0054, TT:0.9866, ATo:0.0060, J9s:0.0841, JTs:0.6584, JJ:0.9988, AJo:0.0137, QTs:0.2747, QJs:0.4331, QQ, AQo:0.5738, K3s:0.0054, K4s:0.2842, K5s:0.0771, K6s:0.1982, K7s:0.0160, K8s:0.0010, KTs:0.9780, KJs:0.9991, KQs:0.9988, KK:0.9711, AKo:0.0951, A2s:0.0061, A3s:0.1263, A4s:0.9043, A5s:0.9839, A6s:0.4143, A7s:0.1244, A8s:0.2773, A9s:0.9416, ATs:0.9993, AJs:0.9992, AQs:0.9997, AKs:0.2382"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0002, 66:0.0001, 77:0.0046, A7o:0.0123, 88:0.0001, A8o:0.0206, A9o:0.0630, ATo:0.0050, AJo:0.0001, QTs:0.0003, AQo:0.3439, K6s:0.0001, K7s:0.0002, AKo:0.0107, A2s:0.5687, A3s:0.5804, A4s:0.0280, A5s:0.0021, A6s:0.0529, A7s:0.5635, A8s:0.5796, A9s:0.0323, AJs:0.0001, AQs:0.0002, AKs:0.5066, AA:0.7824"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0001, A5o:0.0002, A7o:0.0004, A8o:0.1170, A9o:0.0074, ATo:0.0001, AJo:0.0024, KQo:0.0001, AQo:0.0808, K4s:0.0003, K7s:0.0013, KK:0.0001, AKo:0.0042, A2s:0.2576, A3s:0.0020, A4s:0.0071, A5s:0.0002, A6s:0.0198, A7s:0.0173, A8s:0.0324, A9s:0.0111, AJs:0.0001, AKs:0.1507, AA:0.2176"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 66:0.0003, 77:0.0002, 88:0.0005, 99:0.0005, TT:0.0009, JJ:0.0001, KK:0.0288, AKo:0.8900, A4s:0.0013, A5s:0.0011, A6s:0.0006, A7s:0.0001, A8s:0.0013, A9s:0.0005, ATs:0.0002, AKs:0.1045"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0442, 33:0.0022, 44:0.1049, 54s:0.0001, 55:0.0001, A5o:0.0001, 64s:0.0164, 65s:0.0126, 66:0.2245, 76s:0.1541, 77:0.0001, 86s:0.0143, 87s:0.0543, 98s:0.0001, T8s:0.0111, T9s:0.0649, ATo:0.0086, J9s:0.0025, Q9s:0.0002, QTs:0.0023, QJs:0.0002, QQ:0.0116, AQo:0.3272, K5s:0.0004, KTs:0.0074, KJs:0.0002, KK:0.7748, A2s:0.0550, A3s:0.0749, A4s:0.0199, A5s:0.0349, A6s:0.0706, A7s:0.0858, A8s:0.2228, A9s:0.0002, ATs:0.0008, AQs:0.0051, AKs:0.0011, AA:0.0147"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0014, A3o:0.0001, 44:0.0065, A4o:0.0002, A5o:0.0002, 64s:0.0002, 65s:0.0021, 66:0.0008, 76s:0.0007, A7o:0.0001, 86s:0.0012, ATo:0.0027, K3s:0.0009, K4s:0.0001, KK:0.1612, AKo:0.9949, A2s:0.8191, A3s:0.8220, A4s:0.7692, A5s:0.4022, A6s:0.4721, A7s:0.4704, A8s:0.0687, ATs:0.0001, AKs:0.9835, AA:0.9853"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0122, 54s:0.0001, 64s:0.0011, 66:0.1699, 76s:0.0039, 77:0.0001, A9o:0.0002, T8s:0.0014, T9s:0.0001, ATo:0.0187, J8s:0.0002, J9s:0.0001, KJo:0.0001, AJo:0.0001, QQ:0.0114, AQo:0.2153, K3s:0.0004, K4s:0.0001, K7s:0.0001, KK:0.3739, AKo:0.0007, A2s:0.0104, A3s:0.0002, A4s:0.0327, A5s:0.0355, A6s:0.0066, A7s:0.2339, A8s:0.1816, A9s:0.0001, ATs:0.0006, AQs:0.0050, AKs:0.0005, AA:0.1596"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0036, 33:0.0021, 43s:0.0001, 44:0.0340, A4o:0.0005, A5o:0.0177, 64s:0.0001, 66:0.0224, 76s:0.0086, A7o:0.0003, 86s:0.0082, 87s:0.0005, A9o:0.0001, T8s:0.0001, ATo:0.0030, J8s:0.0001, KJo:0.0001, QQ:0.0001, AQo:0.0002, K3s:0.0002, K4s:0.0002, K6s:0.0001, K8s:0.0001, KK:0.5577, AKo:0.9940, A2s:0.4090, A3s:0.8504, A4s:0.6188, A5s:0.3554, A6s:0.6108, A7s:0.1004, A8s:0.0348, ATs:0.0003, AQs:0.0001, AKs:0.9841, AA:0.8404"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|HJ:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9360, AKo:0.9810, AKs:0.9722, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "97s:0.0001, 99:0.0151, JTs:0.0001, JJ:0.0001, Q9s:0.0004, QQ:0.0001, AQo:0.0382, KTs:0.0003, KK:0.1621, AKo:0.0001, A2s:0.0014, A5s:0.0003, A6s:0.0003, A7s:0.0134, A9s:0.0174, ATs:0.0001, AJs:0.0027, AQs:0.1472, AKs:0.0012, AA:0.0851"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0027, 88:0.0002, 97s:0.0004, 99:0.0177, JJ:0.0001, AJo:0.0003, Q9s:0.0022, QQ:0.0006, AQo:0.0050, K6s:0.0053, K7s:0.0002, K9s:0.0001, KTs:0.0001, KJs:0.0003, KQs:0.0070, KK:0.0246, AKo:0.9400, A2s:0.0615, A3s:0.0066, A4s:0.0185, A5s:0.0017, A6s:0.0752, A7s:0.7734, A8s:0.0004, A9s:0.3162, ATs:0.0008, AQs:0.0324, AKs:0.9922, AA:0.9149"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0253, 33:0.0017, 44:0.0865, 54s:0.0002, 55:0.0001, A5o:0.0001, 64s:0.0087, 65s:0.0028, 66:0.2080, 76s:0.0482, 77:0.0001, 86s:0.0022, 87s:0.0008, A9o:0.0003, T8s:0.0052, T9s:0.0005, KTo:0.0001, ATo:0.0320, J8s:0.0020, J9s:0.0014, KJo:0.0003, Q5s:0.0001, QJs:0.0001, QQ:0.0116, AQo:0.1469, K4s:0.0028, K6s:0.0098, K7s:0.0118, K8s:0.0001, KJs:0.0001, KK:0.8328, AKo:0.0329, A2s:0.0071, A3s:0.0424, A4s:0.0620, A5s:0.0386, A6s:0.0095, A7s:0.1733, A8s:0.0470, A9s:0.0001, ATs:0.0002, AQs:0.0051, AKs:0.0797, AA:0.0391"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0026, 33:0.0001, A3o:0.0007, 44:0.0006, A4o:0.0135, A5o:0.0005, 64s:0.0029, 65s:0.0012, 66:0.0104, 76s:0.0108, 86s:0.0100, 87s:0.0010, 98s:0.0003, A9o:0.0004, T8s:0.0002, ATo:0.0017, J8s:0.0002, KJo:0.0003, AQo:0.0005, K4s:0.0005, K5s:0.0002, K6s:0.0010, K7s:0.0003, K8s:0.0001, KK:0.1032, AKo:0.9607, A2s:0.3346, A3s:0.4441, A4s:0.6389, A5s:0.2330, A6s:0.6125, A7s:0.1583, A8s:0.1846, A9s:0.0001, ATs:0.0007, AKs:0.9049, AA:0.9609"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 99:0.0002, T8s:0.0001, T9s:0.0001, TT:0.0002, KJs:0.0003, KQs:0.0001, KK:0.0474, AKo:0.0077, A5s:0.0046, A6s:0.0002, A7s:0.0001, A9s:0.0008, ATs:0.0001, AJs:0.2897, AQs:0.0888, AKs:0.0023, AA:0.1719"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0011, A5o:0.0008, 65s:0.0019, 76s:0.0132, 87s:0.0014, 88:0.0004, A8o:0.0009, 97s:0.0003, A9o:0.0002, T7s:0.0001, TT:0.0002, ATo:0.0003, J8s:0.0005, JTs:0.0014, JJ:0.0013, AJo:0.0003, Q9s:0.0020, QQ:0.0053, KK:0.1461, AKo:0.1760, A2s:0.0226, A3s:0.2649, A5s:0.1787, A6s:0.0501, A7s:0.5465, A8s:0.0106, A9s:0.1541, ATs:0.7053, AJs:0.2354, AQs:0.1749, AKs:0.7946, AA:0.8281"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 65s:0.0029, 66:0.1423, 76s:0.0033, 77:0.0001, 86s:0.0022, 87s:0.0001, 98s:0.0001, T8s:0.0010, KTo:0.0008, ATo:0.0535, J9s:0.0008, KJo:0.0075, AJo:0.0010, Q9s:0.0005, QQ:0.0092, AQo:0.1325, K4s:0.0003, K5s:0.0001, K6s:0.0001, K7s:0.0019, K9s:0.0001, KK:0.4597, AKo:0.0098, A3s:0.0134, A4s:0.0048, A5s:0.0567, A6s:0.0009, A7s:0.0210, A8s:0.1334, A9s:0.0001, ATs:0.0006, AQs:0.0045, AKs:0.0617, AA:0.0938"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0013, A3o:0.0003, 44:0.0006, A4o:0.0002, A5o:0.0098, 64s:0.0009, 65s:0.0003, 66:0.0017, A6o:0.0002, 76s:0.0029, A7o:0.0001, 87s:0.0002, A8o:0.0003, 98s:0.0001, A9o:0.0067, ATo:0.0273, KJo:0.0001, Q9s:0.0003, AQo:0.0010, K3s:0.0024, K4s:0.0190, K6s:0.0018, K7s:0.0024, K8s:0.0001, KTs:0.0012, KK:0.4611, AKo:0.9851, A2s:0.1944, A3s:0.5606, A4s:0.4302, A5s:0.2328, A6s:0.1530, A7s:0.2690, A8s:0.1217, ATs:0.0002, AQs:0.0003, AKs:0.9228, AA:0.9062"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, KQs:0.0001, KK, AKo:0.0009, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9360, AKo:0.1154, AKs:0.6140, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0016, A2o:0.1562, 33:0.0173, K3o:0.0007, A3o:0.1455, 44:0.0211, Q4o:0.0001, A4o:0.1727, 53s:0.0007, 54s:0.0033, A5o:0.2077, 65s:0.0123, 66:0.1598, Q6o:0.0002, K6o:0.0015, A6o:0.0201, 77:0.1405, K7o:0.0028, A7o:0.0541, 88:0.0634, K8o:0.0005, A8o:0.1165, 99:0.1350, K9o:0.0003, A9o:0.0007, TT:0.0099, KTo:0.0006, J4s:0.0001, JJ:0.2012, KJo:0.0002, AJo:0.0069, Q3s:0.0033, Q4s:0.0001, Q6s:0.0062, Q7s:0.0001, Q9s:0.0008, QTs:0.0002, QQ, KQo:0.9348, AQo:0.9998, K2s:0.3392, K3s:0.0099, K4s:0.0005, K5s:0.0359, K6s:0.3113, K7s:0.3745, K8s:0.1984, K9s:0.1801, KTs:0.0063, KQs:0.9321, KK, AKo, A2s:0.7958, A3s:0.9720, A4s:0.8279, A5s:0.7939, A6s:0.8912, A7s:0.8582, A8s:0.2114, A9s:0.2365, ATs:0.5139, AJs:0.5556, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9984, 32s:0.0001, 33:0.9987, 42s:0.0147, 43s:0.9067, 44, 54o:0.6609, 64o:0.0031, 52s:0.5836, 53s:0.9957, 54s:0.9976, 55:0.9990, 65o:0.8675, 63s:0.8269, 64s:0.9725, 65s:0.7147, 66:0.9998, 76o:0.1736, 72s:0.0002, 73s:0.0006, 74s:0.9809, 75s:0.9919, 76s:0.9687, 77:0.9996, 84s:0.4057, 85s:0.9743, 86s:0.9722, 87s:0.9234, 88:0.9996, 94s:0.0008, 95s:0.4375, 96s:0.9269, 97s:0.9956, 98s:0.9784, 99, A9o:0.2081, T5s:0.0002, T6s:0.1302, T7s:0.9626, T8s:0.7073, T9s:0.9967, TT, KTo:0.1015, ATo:0.7388, J2s:0.0001, J4s:0.0002, J7s:0.3035, J8s:0.8898, J9s:0.9585, JTs:0.9908, JJ:0.9989, QJo:0.7934, KJo:0.9323, AJo:0.9955, Q2s:0.2653, Q3s:0.4212, Q4s:0.6411, Q5s:0.4948, Q6s:0.1794, Q7s:0.8024, Q8s:0.9838, Q9s:0.6696, QTs:0.9731, QJs:0.9989, QQ:0.5442, KQo:0.3558, AQo:0.0253, K2s:0.1179, K3s:0.7804, K4s:0.6460, K5s:0.9644, K6s:0.6593, K7s:0.9022, K8s:0.8566, K9s:0.9829, KTs:0.9970, KJs:0.9932, KQs:0.8840, A2s:0.5099, A3s:0.0265, A4s:0.8806, A5s:0.9776, A6s:0.1877, A7s:0.6472, A8s:0.5458, A9s:0.6516, ATs:0.9985, AJs:0.9958, AQs:0.0830"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0016, K2o:0.0088, A2o:0.0877, 32s:0.1534, 33:0.0011, K3o:0.0092, A3o:0.1765, 42s:0.0005, 43s:0.0786, K4o:0.0238, A4o:0.2453, 52s:0.0041, 54s:0.0007, 55:0.0010, K5o:0.0064, A5o:0.6470, 63s:0.0053, 64s:0.0002, 65s:0.2745, 76o:0.0510, K6o:0.0248, A6o:0.0028, 73s:0.0022, 74s:0.0001, 76s:0.0259, 77:0.0003, Q7o:0.0005, K7o:0.0040, A7o:0.0099, 84s:0.0004, 85s:0.0004, 87s:0.0001, Q8o:0.0003, A8o:0.0021, 96s:0.0013, 98s:0.0007, A9o:0.1871, T8s:0.2907, QTo:0.0001, KTo:0.0530, ATo:0.2072, J7s:0.0054, JJ:0.0011, QJo:0.0013, KJo:0.0197, AJo:0.0003, Q2s:0.0474, Q3s:0.1358, Q4s:0.0521, Q5s:0.0161, Q6s:0.4430, Q7s:0.0653, Q9s:0.3025, QJs:0.0001, QQ:0.4558, KQo:0.6409, AQo:0.9746, K2s:0.8767, K3s:0.1469, K4s:0.3073, K5s:0.0178, K6s:0.3367, K7s:0.0853, K8s:0.1344, K9s:0.0133, KTs:0.0013, KJs:0.0002, KQs:0.1158, KK, AKo, A2s:0.4856, A3s:0.9674, A4s:0.1150, A5s:0.0219, A6s:0.8122, A7s:0.3512, A8s:0.4541, A9s:0.3474, ATs:0.0001, AJs:0.0019, AQs:0.9168, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0020, 55:0.1282, 77:0.0551, 88:0.0454, 97s:0.0001, 99:0.0713, T9s:0.0029, JJ:0.0010, QQ:0.8161, AQo:0.0393, K6s:0.0004, K8s:0.0032, K9s:0.0163, KTs:0.0046, KJs:0.0152, KQs:0.4085, KK:0.0560, AKo:0.0012, A3s:0.1086, A4s:0.0076, A5s:0.1541, A6s:0.0003, A8s:0.0741, A9s:0.0134, ATs:0.0281, AJs:0.0247, AQs:0.8377, AKs:0.0248, AA:0.0003"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0001, A5o:0.0285, 77:0.0018, A7o:0.0025, A8o:0.1693, 99:0.0063, A9o:0.0023, TT:0.0004, KTo:0.0039, ATo:0.0013, JJ:0.0005, AJo:0.0166, QQ:0.0001, AQo:0.0091, K3s:0.0005, K4s:0.0057, K6s:0.0003, K7s:0.0017, K8s:0.0074, KTs:0.0192, KJs:0.0378, KQs:0.0007, KK:0.0199, AKo:0.0606, A2s:0.2892, A3s:0.0485, A4s:0.5594, A5s:0.2112, A6s:0.1197, A7s:0.2415, A8s:0.0990, A9s:0.2379, ATs:0.2682, AJs:0.2338, AQs:0.0084, AKs:0.0065, AA:0.8195"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0182, A7o:0.0010, A8o:0.0521, 97s:0.0008, 99:0.0002, A9o:0.0049, T7s:0.0003, ATo:0.0080, JTs:0.0001, AJo:0.0313, QQ:0.0004, AQo:0.0009, K4s:0.0022, K5s:0.0001, K6s:0.0011, K8s:0.0009, KTs:0.0004, KJs:0.0014, KQs:0.0001, KK:0.0856, AKo:0.0004, A2s:0.0011, A3s:0.0509, A4s:0.0116, A5s:0.0293, A6s:0.0146, A7s:0.0608, A8s:0.0891, A9s:0.0054, ATs:0.0038, AJs:0.0379, AQs:0.0019, AKs:0.0182, AA:0.1802"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.1327, TT:0.0958, KK:0.8384, AKo:0.9378, A2s:0.1195, A3s:0.1475, A4s:0.2043, A5s:0.3596, A7s:0.0091, A8s:0.2070, ATs:0.6102, AJs:0.0343, AKs:0.9505"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0002, 33:0.0427, 44:0.3066, 54s:0.0349, 55:0.1990, 65s:0.4180, 66:0.3505, 76s:0.0008, 77:0.2001, 88:0.3478, 99:0.5175, T9s:0.0299, TT:0.2647, JTs:0.0170, JJ:0.7063, AJo:0.0001, Q9s:0.0019, QQ:0.9964, KQo:0.0109, AQo:0.1961, K4s:0.0009, K5s:0.0008, K6s:0.1230, K7s:0.0052, K9s:0.0490, KTs:0.7263, KJs:0.3266, KQs:0.9607, KK:0.1435, AKo:0.0002, A2s:0.0346, A3s:0.0275, A4s:0.1996, A5s:0.0547, A6s:0.0207, A7s:0.1182, A8s:0.4850, A9s:0.4757, ATs:0.9074, AJs:0.9910, AQs:0.9335, AKs:0.0010"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "65s:0.0003, 66:0.0001, TT:0.0001, ATo:0.0008, JTs:0.0002, KJo:0.0060, KQo:0.0001, AQo:0.0002, K5s:0.0002, K6s:0.0030, K7s:0.0019, K8s:0.0078, K9s:0.0026, KTs:0.0167, KJs:0.0179, KQs:0.0006, KK:0.0127, A2s:0.0001, A4s:0.0004, A6s:0.0001, A8s:0.0055, A9s:0.0003, ATs:0.0020, AJs:0.0025, AKs:0.0014"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "87s:0.0003, 99:0.0013, ATo:0.0002, KJo:0.0049, QQ:0.0001, K7s:0.0033, K8s:0.0087, K9s:0.0033, KTs:0.0164, KJs:0.0162, KQs:0.0005, KK:0.0515, AKo:0.0017, A2s:0.0001, A8s:0.0012, A9s:0.0001, ATs:0.0009, AQs:0.0002, AKs:0.0176"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 54s:0.0001, 66:0.0001, 77:0.0005, 88:0.0001, 99:0.0022, TT:0.1818, ATo:0.0003, JJ:0.0005, QQ:0.0022, AQo:0.0004, K9s:0.0001, KQs:0.0008, KK:0.1625, AKo:0.3995, A4s:0.0032, A5s:0.0014, A6s:0.0003, A8s:0.0033, A9s:0.0063, ATs:0.0016, AQs:0.0062, AKs:0.0200"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0002, 55:0.0581, 66:0.1941, 77:0.0018, 88:0.0403, 99:0.0139, TT:0.0002, QQ:0.7360, AQo:0.0681, KJs:0.0018, KQs:0.1120, KK:0.0188, AKo:0.0001, A2s:0.0004, A4s:0.0026, A5s:0.0157, A6s:0.0001, A7s:0.0002, A8s:0.0093, A9s:0.0020, ATs:0.0077, AJs:0.0094, AQs:0.9298, AKs:0.0001, AA:0.0007"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0001, A5o:0.0600, 65s:0.0001, 66:0.0045, 77:0.0002, 88:0.0001, A8o:0.1324, A9o:0.0231, TT:0.0042, KTo:0.0003, ATo:0.0030, AJo:0.0051, Q9s:0.0003, QQ:0.0002, AQo:0.0677, K5s:0.0017, K6s:0.0001, K7s:0.0014, K8s:0.0001, KTs:0.0021, KJs:0.0022, KQs:0.0006, KK:0.0021, AKo:0.0128, A2s:0.0094, A3s:0.2172, A4s:0.2362, A5s:0.0061, A6s:0.1016, A7s:0.1294, A8s:0.1641, A9s:0.0111, ATs:0.6524, AJs:0.0982, AQs:0.0005, AKs:0.0784, AA:0.7761"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "44:0.0001, A5o:0.0029, 65s:0.0003, A7o:0.0007, A8o:0.0356, 99:0.0001, A9o:0.0163, TT:0.0074, ATo:0.0022, AJo:0.0005, QJs:0.0001, QQ:0.0002, AQo:0.0176, K4s:0.0081, K7s:0.0897, K8s:0.0001, K9s:0.0001, KTs:0.0084, KJs:0.1298, KK:0.0001, AKo:0.0077, A2s:0.0172, A3s:0.0523, A4s:0.0356, A5s:0.0192, A6s:0.0177, A7s:0.0437, A8s:0.0500, A9s:0.0581, ATs:0.0028, AJs:0.0275, AQs:0.0001, AKs:0.1091, AA:0.2232"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0053, 55:0.2297, 65s:0.0008, 66:0.4137, 87s:0.0011, 88:0.2797, 99:0.1998, A9o:0.0038, T8s:0.0001, TT:0.1213, JTs:0.0003, JJ:0.0005, K3s:0.0001, K5s:0.0001, K7s:0.0036, K8s:0.0002, K9s:0.0006, KTs:0.4253, KJs:0.1553, KQs:0.0165, KK:0.9789, AKo:0.9794, A2s:0.3758, A3s:0.4817, A4s:0.5431, A5s:0.6198, A6s:0.2224, A7s:0.7066, A8s:0.1199, A9s:0.0909, ATs:0.1021, AJs:0.5786, AKs:0.8123"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0001, 44:0.0814, 55:0.2796, 65s:0.1969, 66:0.1319, 76s:0.0046, 77:0.3398, 88:0.0386, 99:0.1698, TT:0.1923, JJ:0.1551, QTs:0.0208, QQ:0.7820, AQo:0.1172, K5s:0.0019, KTs:0.0004, KJs:0.0966, KQs:0.6152, AKo:0.0092, A3s:0.0041, A4s:0.0090, A5s:0.0375, A7s:0.0015, A8s:0.1660, A9s:0.0486, ATs:0.2837, AJs:0.2099, AQs:0.9182, AKs:0.0007"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0001, 54s:0.0001, 66:0.0002, 88:0.0005, T9s:0.0001, TT:0.0010, ATo:0.0001, JJ:0.0013, KJo:0.0009, AJo:0.0003, KQo:0.0001, AQo:0.0002, K5s:0.0002, K6s:0.0010, K7s:0.0006, K8s:0.0010, K9s:0.0036, KTs:0.0018, KJs:0.0037, KQs:0.0023, KK:0.0063, AKo:0.0015, A4s:0.0004, A5s:0.0003, A6s:0.0001, A7s:0.0024, A8s:0.0004, A9s:0.0059, ATs:0.0006, AJs:0.0034, AKs:0.0002"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "66:0.0091, 88:0.0064, JJ:0.0002, KJo:0.0037, KQo:0.0001, AQo:0.0138, K5s:0.0002, K6s:0.0049, K7s:0.0038, K8s:0.0119, K9s:0.0013, KTs:0.0011, KJs:0.0404, KQs:0.0011, KK:0.0726, AKo:0.0066, A3s:0.0006, A6s:0.0010, A7s:0.0029, A8s:0.0173, A9s:0.0055, ATs:0.0053, AJs:0.0039, AQs:0.0021, AKs:0.0012"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0120, 76s:0.0002, 77:0.0001, 88:0.0852, 99:0.1147, T9s:0.0002, TT:0.1443, JJ:0.3214, QQ:0.2170, AQo:0.0009, K6s:0.0002, K9s:0.0204, KJs:0.3137, KQs:0.3337, KK:0.2912, AKo:0.3841, A2s:0.0112, A3s:0.0193, A4s:0.1020, A5s:0.0415, A6s:0.0034, A7s:0.2044, A8s:0.1773, A9s:0.1239, ATs:0.2173, AJs:0.5615, AQs:0.0182, AKs:0.0380"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0002, A3o:0.1270, A4o:0.1304, K5o:0.0497, A5o:0.0335, A6o:0.0046, K7o:0.0101, A7o:0.0002, K8o:0.0001, A8o:0.0014, A9o:0.0424, ATo:0.0016, AQo:0.6420, K2s:0.0348, K3s:0.1409, K4s:0.1879, K5s:0.0007, K6s:0.0014, K7s:0.0440, K8s:0.0007, K9s:0.0020, KTs:0.0001, KJs:0.0002, KQs:0.0035, KK, AKo:0.0095, A2s:0.9309, A3s:0.7802, A4s:0.2751, A5s:0.0009, A6s:0.5725, A7s:0.5171, A8s:0.0107, A9s:0.1899, ATs:0.0189, AQs:0.3653, AKs:0.1045, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.9904, AKs:0.8953"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "K2o:0.0071, A2o:0.2923, A4o:0.0836, A5o:0.2596, 64s:0.0001, K6o:0.0036, A6o:0.0852, 75s:0.0001, A7o:0.0233, A8o:0.0430, A9o:0.0196, T3s:0.0001, TT:0.0002, ATo:0.0003, J7s:0.0001, AJo:0.0019, QQ:0.0002, AQo:0.2184, K2s:0.1103, K4s:0.1092, K5s:0.0709, K6s:0.1211, K7s:0.0971, K8s:0.0018, KK:0.9520, AKo:0.0002, A2s:0.8846, A3s:0.7651, A4s:0.4637, A5s:0.0031, A6s:0.2800, A7s:0.1743, A8s:0.0179, A9s:0.0232, ATs:0.1559, AJs:0.0872, AQs:0.6368, AKs:0.1024, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "75s:0.0002, A8o:0.0001, ATo:0.0001, K3s:0.0001, K4s:0.0001, KK:0.0480, AKo:0.9998, A2s:0.0003, A3s:0.0001, A5s:0.0001, A7s:0.0001, A8s:0.0003, AJs:0.0001, AQs:0.0001, AKs:0.8975"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.4866, 55:0.9024, 65s:0.4553, 66:0.9972, 76s:0.8236, 77:0.9926, 88:0.9983, 98s:0.0041, 99:0.9978, T8s:0.4608, T9s:0.5477, TT:0.9552, J9s:0.3370, JTs:0.4378, JJ, KJo:0.0009, AJo:0.2225, Q9s:0.0048, QTs:0.7989, QJs:0.7167, QQ, KQo:0.3741, AQo:0.8672, K4s:0.0016, K5s:0.0259, K6s:0.4909, K7s:0.1534, K8s:0.0127, K9s:0.1784, KTs:0.9979, KJs, KQs, KK:0.9898, A4s:0.4454, A5s:0.7455, A6s:0.2067, A7s:0.8143, A8s:0.1977, A9s:0.9894, ATs:0.9995, AJs, AQs"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "44:0.0001, A5o:0.0724, A7o:0.0001, A8o:0.0032, TT:0.0446, ATo:0.2079, AJo:0.1979, AQo:0.1328, K7s:0.0007, K8s:0.0001, KK:0.0072, A2s:0.6834, A3s:0.9636, A4s:0.3991, A5s:0.0892, A6s:0.1714, A7s:0.0897, A8s:0.8007, A9s:0.0085, ATs:0.0002, AKs:0.5337, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0544, 55:0.0242, 66:0.0025, 77:0.0066, 88:0.0017, KK:0.0031, AKo, A2s:0.0775, A3s:0.0295, A4s:0.1273, A5s:0.1647, A6s:0.0011, A7s:0.0713, A8s:0.0002, A9s:0.0011, ATs:0.0003, AKs:0.4663"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|HJ:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0085, 54s:0.0027, 55:0.0135, 65s:0.0165, 66:0.3372, 76s:0.0052, 77:0.0798, 87s:0.0009, 88:0.1800, 98s:0.0010, 99:0.1421, T9s:0.0288, TT:0.3030, ATo:0.0147, J9s:0.0002, JTs:0.0055, JJ:0.1927, AJo:0.0140, AQo:0.7980, K9s:0.0001, KK:0.6014, AKo:0.0001, A2s:0.0035, A3s:0.3243, A4s:0.2313, A5s:0.3462, A6s:0.4876, A7s:0.1001, A8s:0.0515, A9s:0.0894, ATs:0.0004, AJs:0.0005, AQs:0.0587, AKs:0.0332, AA:0.7112"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0001, 76s:0.0002, 77:0.0001, 99:0.0059, A9o:0.0002, TT:0.0097, ATo:0.0027, J9s:0.0002, AJo:0.0001, K7s:0.0006, K9s:0.0004, KJs:0.0001, KK:0.0285, AKo:0.5984, A2s:0.7576, A3s:0.6295, A4s:0.4956, A5s:0.5567, A6s:0.0696, A7s:0.4894, A8s:0.0660, A9s:0.0370, AQs:0.0008, AKs:0.9267, AA:0.2888"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|HJ:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.6299, AKo:0.5863, AKs:0.9493, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0003, AQo:0.0525, KJs:0.0001, KK:0.1072, AKo:0.0055, A4s:0.0015, A5s:0.0005, A6s:0.0022, A8s:0.0011, A9s:0.0060, ATs:0.0058, AJs:0.0007, AQs:0.0025, AKs:0.0616, AA:0.0439"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0044, 87s:0.0001, A8o:0.0066, T7s:0.0001, K6s:0.0009, K9s:0.0030, KK:0.8913, AKo:0.9647, A2s:0.0051, A3s:0.1027, A4s:0.2545, A5s:0.4729, A6s:0.0107, A7s:0.0001, A8s:0.0012, A9s:0.0004, ATs:0.0182, AJs:0.0244, AKs:0.9384, AA:0.9561"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0035, 55:0.0233, 65s:0.0126, 66:0.0830, 76s:0.0003, 77:0.0274, 87s:0.0011, 88:0.0680, 98s:0.0012, 99:0.0301, T9s:0.0585, TT:0.0106, ATo:0.0004, JTs:0.0047, JJ:0.1145, KJo:0.0008, AJo:0.0027, AQo:0.1537, K4s:0.0042, K6s:0.0402, K7s:0.0611, K9s:0.0071, KTs:0.0084, KJs:0.0084, KK:0.0043, AKo:0.0022, A3s:0.0539, A4s:0.1061, A5s:0.0343, A6s:0.0009, A7s:0.0196, A8s:0.0031, A9s:0.0132, ATs:0.0002, AJs:0.0003, AQs:0.0572, AKs:0.0537, AA:0.2081"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0013, 65s:0.0003, 66:0.0001, 76s:0.0003, AQo:0.0006, K3s:0.0001, K4s:0.0682, K5s:0.0115, K6s:0.1388, K7s:0.2993, K8s:0.0045, K9s:0.4866, KTs:0.0084, KJs:0.0144, KK:0.6256, AKo:0.5963, A2s:0.5032, A3s:0.1528, A4s:0.1142, A5s:0.7209, A6s:0.4919, A7s:0.4199, A8s:0.0789, A9s:0.0030, ATs:0.0002, AJs:0.0001, AKs:0.9062, AA:0.7919"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, QQ:0.0001, K9s:0.0001, KK:0.9931, AKo:0.9807, AKs:0.9977, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0001, KK:0.6299, AKo:0.5972, AKs:0.9572, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0094, TT:0.0002, AQo:0.0311, KK:0.0657, AKo:0.0088, A5s:0.0001, A7s:0.0125, A8s:0.0098, A9s:0.0002, ATs:0.0007, AQs:0.2679, AKs:0.0021, AA:0.1058"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "87s:0.0001, TT:0.0017, QQ:0.0001, K9s:0.0001, KTs:0.0256, KJs:0.0016, KK:0.9317, AKo:0.9911, A2s:0.1237, A3s:0.0057, A4s:0.0925, A5s:0.2457, A6s:0.0013, A7s:0.0063, A8s:0.0033, A9s:0.0017, ATs:0.1477, AJs:0.1029, AQs:0.0623, AKs:0.9971, AA:0.8942"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0054, 54s:0.0087, 55:0.0460, 65s:0.0764, 66:0.1489, 76s:0.0027, 77:0.0715, 88:0.0606, 99:0.0649, T8s:0.0295, TT:0.0095, J8s:0.0013, JJ:0.0824, AQo:0.2413, K5s:0.0038, K7s:0.0021, K9s:0.0046, KTs:0.0017, KK:0.0002, AKo:0.0001, A2s:0.0039, A3s:0.0112, A4s:0.0503, A5s:0.0052, A6s:0.0233, A7s:0.0951, A8s:0.0206, A9s:0.0054, ATs:0.0002, AJs:0.0003, AQs:0.0592, AKs:0.0010, AA:0.2505"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0003, 76s:0.0001, 77:0.0001, 88:0.0008, 99:0.0003, T9s:0.0002, TT:0.0009, KJo:0.0001, AQo:0.0001, K4s:0.0004, K5s:0.1898, K6s:0.3839, K7s:0.0777, K8s:0.0210, K9s:0.5467, KTs:0.0147, KJs:0.0247, KK:0.6297, AKo:0.5984, A2s:0.1999, A3s:0.1842, A4s:0.4178, A5s:0.7788, A6s:0.0882, A7s:0.3525, A8s:0.0527, A9s:0.0231, AJs:0.0001, AKs:0.9589, AA:0.7495"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0003, QQ:0.0001, KQs:0.0001, KK, AKo:0.9969, ATs:0.0001, AKs:0.9983, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0001, KK:0.6299, AKo:0.5985, AKs:0.9599, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.0006, 32s:0.0004, 33:0.0423, Q3o:0.0001, A3o:0.0003, 43s:0.0036, 44:0.0028, K4o:0.0018, A4o:0.0003, 52s:0.0010, 53s:0.0137, 54s:0.3476, 55:0.0017, K5o:0.0001, A5o:0.0003, 64s:0.0223, 65s:0.3114, 66:0.2322, K6o:0.0009, 75s:0.0001, 76s:0.0465, 77:0.1260, Q7o:0.0002, 83s:0.0011, 85s:0.0002, 86s:0.0036, 87s:0.0002, 88:0.4499, Q8o:0.0012, A8o:0.0003, 93s:0.0003, 95s:0.0157, 97s:0.0108, 98s:0.0157, 99:0.7067, T2s:0.0001, T8s:0.0002, T9s:0.0001, TT:0.7732, KTo:0.0001, ATo:0.0001, JJ:0.9965, KJo:0.0001, AJo:0.0362, Q3s:0.0040, Q5s:0.0004, Q6s:0.0013, Q7s:0.0005, Q8s:0.0009, QTs:0.0106, QJs:0.0069, QQ:0.9997, KQo:0.7421, AQo:0.9998, K2s:0.0633, K3s:0.0075, K4s:0.0152, K5s:0.2262, K6s:0.5933, K7s:0.0015, K8s:0.3278, K9s:0.6196, KTs:0.2602, KJs:0.9581, KQs:0.9953, KK, AKo:0.9998, A2s:0.0930, A3s:0.9668, A4s:0.7949, A5s:0.8148, A6s:0.0232, A7s:0.3126, A8s:0.2209, A9s:0.1660, ATs:0.6560, AJs:0.9400, AQs:0.9926, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0025, Q2o:0.0014, K2o:0.0027, A2o:0.0031, 32s:0.0009, 33:0.0087, A3o:0.0568, 43s:0.0065, 44:0.0145, Q4o:0.0002, K4o:0.0027, A4o:0.2205, 53s:0.0231, 54s:0.0043, 55:0.0314, K5o:0.0412, A5o:0.0051, 64s:0.0002, 65s:0.0104, 66:0.1638, Q6o:0.0002, K6o:0.0005, A6o:0.0035, 75s:0.0001, 76s:0.0001, 77:0.0334, K7o:0.0004, A7o:0.0007, 85s:0.0013, 86s:0.0425, 87s:0.0003, 88:0.0087, K8o:0.0001, 99:0.0004, Q9o:0.0001, K9o:0.0004, A9o:0.0001, TT:0.0005, ATo:0.0015, JTs:0.0001, JJ:0.2128, QJo:0.0001, Q2s:0.0001, Q3s:0.0005, Q6s:0.0001, Q7s:0.0109, Q8s:0.0001, QJs:0.0001, QQ, KQo:0.9972, AQo, K2s:0.6156, K3s:0.3111, K4s:0.4326, K5s:0.1664, K6s:0.2733, K7s:0.1140, K8s:0.0128, K9s:0.1387, KTs:0.0013, KJs:0.0862, KQs:0.9768, KK, AKo, A2s:0.8950, A3s:0.4332, A4s:0.9394, A5s:0.5814, A6s:0.7466, A7s:0.9067, A8s:0.4329, A9s:0.7741, ATs:0.1869, AJs:0.6628, AQs:0.9992, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22, 32s:0.0220, 33:0.9977, 42s:0.7136, 43s:0.6381, 44:0.9993, 54o:0.8905, 64o:0.0014, 52s:0.6702, 53s:0.9310, 54s:0.9584, 55:0.9621, 65o:0.8062, 75o:0.0001, 63s:0.8986, 64s:0.9829, 65s:0.4214, 66:0.9981, 76o:0.0245, 73s:0.0159, 74s:0.9789, 75s:0.9615, 76s:0.6248, 77:0.9994, 87o:0.0015, 85s:0.8860, 86s:0.8160, 87s:0.9674, 88, 92s:0.0001, 95s:0.1427, 96s:0.8169, 97s:0.9848, 98s:0.6242, 99:0.9514, T3s:0.0001, T4s:0.0001, T5s:0.0005, T6s:0.0337, T7s:0.1899, T8s:0.7368, T9s:0.9027, TT:0.9997, ATo:0.4590, J2s:0.0001, J3s:0.0050, J5s:0.0001, J7s:0.6130, J8s:0.6627, J9s:0.6125, JTs:0.9594, JJ:0.9996, QJo:0.0450, KJo:0.2223, AJo:0.9501, Q2s:0.0058, Q3s:0.0002, Q4s:0.3293, Q5s:0.0012, Q6s:0.6569, Q7s:0.2630, Q8s:0.9096, Q9s:0.7279, QTs:0.9724, QJs:0.9765, QQ:0.8075, KQo:0.6798, AQo:0.4970, K2s:0.0705, K3s:0.4557, K4s:0.9355, K5s:0.2821, K6s:0.5148, K7s:0.7687, K8s:0.8686, K9s:0.8423, KTs:0.9084, KJs:0.8799, KQs:0.9967, A2s:0.3848, A3s:0.7520, A4s:0.4806, A5s:0.1662, A6s:0.2813, A7s:0.8714, A8s:0.9954, A9s:0.9794, ATs:0.9865, AJs:0.9976, AQs:0.6405, AKs:0.0006"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0029, A2o:0.0011, 32s:0.0135, 33:0.0009, Q3o:0.0001, A3o:0.0114, 42s:0.0016, Q4o:0.0001, K4o:0.0044, A4o:0.1533, 52s:0.0004, 53s:0.0503, 54s:0.0320, 55:0.0360, 65o:0.0006, Q5o:0.0003, K5o:0.0187, A5o:0.4313, 64s:0.0001, 65s:0.5695, 66:0.0010, K6o:0.1144, A6o:0.0040, 75s:0.0131, 76s:0.3579, 77:0.0005, A7o:0.0057, 86s:0.0006, 87s:0.0005, Q8o:0.0005, K8o:0.0008, 92s:0.0001, 98s:0.2381, 99:0.0478, K9o:0.0005, A9o:0.0031, T3s:0.0004, T4s:0.0032, T5s:0.0002, T8s:0.0051, QTo:0.0013, KTo:0.0401, J5s:0.0001, J8s:0.0323, J9s:0.2502, QJo:0.0002, KJo:0.1991, AJo:0.0258, Q2s:0.0019, Q3s:0.0111, Q4s:0.0111, Q7s:0.0044, Q8s:0.0004, Q9s:0.2151, QTs:0.0030, QJs:0.0022, QQ:0.1925, KQo:0.3128, AQo:0.5013, K2s:0.8266, K3s:0.0013, K4s:0.0528, K5s:0.5908, K6s:0.3545, K7s:0.1923, K8s:0.1264, K9s:0.1305, KTs:0.0837, KJs:0.1193, KQs:0.0029, KK, AKo, A2s:0.6022, A3s:0.2441, A4s:0.5085, A5s:0.8328, A6s:0.6930, A7s:0.1254, A9s:0.0163, ATs:0.0108, AJs:0.0011, AQs:0.3587, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.0331, 66:0.0759, 77:0.0012, 88:0.1530, 99:0.0084, T9s:0.0374, TT:0.0128, JJ:0.0039, QQ:0.2192, K7s:0.0096, KTs:0.0068, KQs:0.0152, KK:0.1946, AKo:0.0576, A4s:0.0011, A5s:0.1339, A7s:0.0100, A9s:0.0027, AJs:0.0218, AQs:0.4902, AKs:0.1368, AA:0.0005"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "44:0.0001, A5o:0.0417, 66:0.0001, 77:0.0001, A7o:0.0005, A8o:0.0722, 99:0.0074, A9o:0.0016, TT:0.0126, KTo:0.0007, ATo:0.0002, JJ:0.0003, AJo:0.0002, QQ:0.0001, KQo:0.0001, K4s:0.0035, K6s:0.0031, K7s:0.0247, K8s:0.0002, K9s:0.0233, KTs:0.0014, KK:0.0015, AKo:0.0785, A2s:0.0615, A3s:0.1485, A4s:0.1297, A5s:0.0175, A6s:0.1214, A7s:0.1983, A8s:0.0306, A9s:0.1804, ATs:0.2649, AJs:0.0177, AQs:0.4309, AKs:0.0257, AA:0.6048"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0005, A7o:0.0011, A8o:0.0635, A9o:0.0021, T7s:0.0001, TT:0.0001, KTo:0.0143, ATo:0.0002, JJ:0.0005, AJo:0.0019, QTs:0.0001, QQ:0.0006, AQo:0.0013, K3s:0.0003, K5s:0.0159, K6s:0.0092, K7s:0.1222, K8s:0.0001, K9s:0.0106, KTs:0.0017, KJs:0.0300, KQs:0.0002, KK:0.1276, AKo:0.0018, A2s:0.1718, A3s:0.0545, A4s:0.2651, A5s:0.0001, A6s:0.0003, A7s:0.1377, A8s:0.3340, A9s:0.1174, ATs:0.0995, AJs:0.0070, AQs:0.0076, AKs:0.1566, AA:0.3946"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.6763, AKo:0.8621, AKs:0.6806"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0006, 55:0.1415, 65s:0.0767, 66:0.3147, 76s:0.0652, 77:0.0745, 88:0.5420, 99:0.3040, T9s:0.0148, TT:0.0025, JTs:0.4516, JJ:0.4463, QQ:0.9962, AQo:0.0035, K9s:0.0030, KTs:0.2704, KJs:0.2218, KQs:0.3420, KK:0.2843, AKo:0.2039, A2s:0.0001, A3s:0.0063, A4s:0.0165, A5s:0.1858, A7s:0.0093, A8s:0.2335, A9s:0.2996, ATs:0.7851, AJs:0.4587, AQs:0.9967, AKs:0.0990"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0001, TT:0.0001, JJ:0.0001, AJo:0.0013, KQo:0.0002, K6s:0.0001, K7s:0.0008, K8s:0.0012, K9s:0.0043, KTs:0.0314, KJs:0.0034, KQs:0.0021, KK:0.0187, AKo:0.0029, A5s:0.0001, A6s:0.0002, A8s:0.0012, A9s:0.0002, ATs:0.0064, AJs:0.0002, AKs:0.0036"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "JTs:0.0001, AJo:0.0019, KQo:0.0014, K6s:0.0006, K7s:0.0055, K8s:0.0134, K9s:0.0077, KTs:0.0085, KJs:0.0521, KQs:0.0016, KK:0.0405, AKo:0.0031, A3s:0.0005, A4s:0.0002, A5s:0.0004, A7s:0.0008, A8s:0.0018, A9s:0.0127, ATs:0.0015, AJs:0.0026, AQs:0.0001, AKs:0.0010"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, AKo:0.4141, AKs:0.1434"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.0920, 66:0.0007, 76s:0.0215, 77:0.0042, 88:0.0564, 99:0.0002, J9s:0.0010, JJ:0.0006, QTs:0.0001, QQ:0.5287, AQo:0.0093, K6s:0.0012, K7s:0.0031, KTs:0.0704, KQs:0.0055, KK:0.0961, AKo:0.0003, A2s:0.0004, A3s:0.0035, A4s:0.0405, A5s:0.0009, A6s:0.0102, A7s:0.0002, A8s:0.0050, A9s:0.0307, AJs:0.0027, AQs:0.9545, AKs:0.0019, AA:0.0003"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0103, A7o:0.0036, A8o:0.0463, 99:0.0001, A9o:0.0102, TT:0.0090, ATo:0.0020, JJ:0.0005, AJo:0.0013, QTs:0.0004, AQo:0.0076, K6s:0.0001, KJs:0.0002, KK:0.0039, AKo:0.0369, A2s:0.0749, A3s:0.3083, A4s:0.1244, A5s:0.5990, A6s:0.0081, A7s:0.4732, A8s:0.2040, A9s:0.1233, ATs:0.1875, AJs:0.1601, AQs:0.0283, AKs:0.1465, AA:0.7049"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0849, 65s:0.0001, A7o:0.0026, A8o:0.0464, 98s:0.0001, A9o:0.0388, TT:0.0005, KTo:0.0027, ATo:0.0099, J8s:0.0003, AJo:0.0080, QTs:0.0002, AQo:0.0006, K4s:0.0089, K5s:0.0098, K6s:0.0033, K7s:0.0036, K8s:0.0077, K9s:0.0035, KTs:0.0032, KJs:0.0022, KQs:0.0004, KK:0.0450, AKo:0.0989, A2s:0.0555, A3s:0.0715, A4s:0.0123, A5s:0.0067, A6s:0.0281, A7s:0.0980, A8s:0.1364, A9s:0.0688, ATs:0.0402, AJs:0.1493, AQs:0.0001, AKs:0.3164, AA:0.2947"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0333, 77:0.1634, 88:0.2042, 99:0.1481, TT:0.2235, JJ:0.0735, AJo:0.0024, QTs:0.0001, QQ:0.0002, AQo:0.0001, K5s:0.0024, K8s:0.0003, K9s:0.0837, KTs:0.3041, KJs:0.2174, KK:0.8550, AKo:0.8639, A2s:0.3105, A3s:0.1809, A4s:0.6194, A5s:0.1416, A6s:0.0813, A7s:0.0274, A8s:0.2521, A9s:0.4583, ATs:0.0513, AJs:0.1613, AQs:0.0001, AKs:0.5352"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0005, 54s:0.0058, 55:0.1747, 65s:0.0823, 66:0.1803, 76s:0.0110, 77:0.1693, 88:0.1574, 99:0.0593, TT:0.0022, JJ:0.1676, QQ:0.9997, AQo:0.0193, KTs:0.0009, KJs:0.1278, KQs:0.4950, AKo:0.0642, A3s:0.0002, A4s:0.0140, A5s:0.0308, A6s:0.0009, A7s:0.0004, A8s:0.2765, A9s:0.1024, ATs:0.3752, AJs:0.1793, AQs:0.9945, AKs:0.0268"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0008, 66:0.0001, 77:0.0004, 88:0.0003, TT:0.0001, ATo:0.0018, JJ:0.0004, QQ:0.0001, K6s:0.0001, K7s:0.0003, K8s:0.0010, K9s:0.0021, KTs:0.0837, KJs:0.0405, KQs:0.0013, KK:0.0284, AKo:0.0094, A3s:0.0001, A4s:0.0001, A5s:0.0032, A6s:0.0015, A7s:0.0008, A8s:0.0054, A9s:0.0016, ATs:0.0152, AJs:0.0117, AQs:0.0006, AKs:0.0797"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "66:0.0005, 88:0.0012, ATo:0.0051, KJo:0.0001, AJo:0.0110, K6s:0.0019, K7s:0.0072, K8s:0.0188, K9s:0.0212, KTs:0.1460, KJs:0.1225, KK:0.2867, AKo:0.0495, A3s:0.0004, A4s:0.0010, A5s:0.0081, A6s:0.0032, A7s:0.0008, A8s:0.0146, A9s:0.0352, ATs:0.0580, AJs:0.0170, AQs:0.0003, AKs:0.0214"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0929, KK:0.0283, AKo:0.5009, A3s:0.0016, A7s:0.0001, AKs:0.1191"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0319, 66:0.0687, 76s:0.0002, 77:0.0075, 99:0.0066, TT:0.0042, J9s:0.0006, JTs:0.0003, JJ:0.0172, QTs:0.0081, QQ:0.6006, AQo:0.0003, K5s:0.0002, KTs:0.0062, KQs:0.0068, KK:0.0367, A2s:0.0062, A3s:0.0001, A5s:0.0090, A7s:0.0001, A8s:0.0132, A9s:0.0007, ATs:0.0030, AJs:0.0064, AQs:0.9893, AKs:0.0008"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0001, A5o:0.2530, A7o:0.0062, A8o:0.0237, 98s:0.0001, A9o:0.0442, JTs:0.0001, JJ:0.0003, AJo:0.0344, QQ:0.0001, AQo:0.0010, K3s:0.0216, K4s:0.0050, K5s:0.0871, K6s:0.2465, K7s:0.0215, K9s:0.0003, KTs:0.0074, KJs:0.0001, KK:0.3762, AKo:0.0233, A2s:0.0260, A3s:0.4232, A4s:0.4752, A5s:0.8756, A6s:0.4307, A7s:0.2343, A8s:0.1993, A9s:0.0850, ATs:0.2760, AJs:0.1184, AQs:0.0011, AKs:0.0105, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 76s:0.0002, A8o:0.0001, ATo:0.0001, JTs:0.0001, JJ:0.0001, AQo:0.0001, KTs:0.0001, KJs:0.0002, KK:0.5871, AKo:0.9767, A2s:0.0001, A3s:0.0005, A4s:0.0001, A5s:0.0002, A6s:0.0001, A7s:0.0003, A8s:0.0003, A9s:0.0001, ATs:0.0001, AJs:0.0006, AQs:0.0003, AKs:0.9887"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0004, 54s:0.0200, 55:0.3266, 65s:0.3799, 66:0.5218, 76s:0.0973, 77:0.0876, 88:0.5740, 99:0.2870, T9s:0.0962, TT:0.6114, J9s:0.0001, JTs:0.0247, JJ:0.7610, QTs:0.1687, QJs:0.0006, QQ:0.9975, AQo:0.0767, K5s:0.0001, K6s:0.0009, K7s:0.0013, K9s:0.0180, KTs:0.2527, KJs:0.8435, KQs:0.9942, AKo:0.0030, A3s:0.0136, A4s:0.0312, A5s:0.1799, A6s:0.0851, A7s:0.0127, A8s:0.0633, A9s:0.2829, ATs:0.9457, AJs:0.7041, AQs:0.9952, AKs:0.0006"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "ATo:0.0033, KJo:0.0001, AJo:0.0147, QTs:0.0001, QQ:0.0001, KQo:0.0115, K5s:0.0002, K6s:0.0041, K7s:0.0217, K8s:0.0639, K9s:0.0493, KTs:0.2467, KJs:0.0802, KK:0.3431, AKo:0.0080, A2s:0.0001, A3s:0.0023, A4s:0.0015, A5s:0.0087, A6s:0.0153, A7s:0.0048, A8s:0.0857, A9s:0.0210, ATs:0.0057, AJs:0.0115, AKs:0.0037"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0226, 77:0.1605, 99:0.0002, TT:0.0072, QQ:0.0023, AQo:0.0004, KTs:0.0002, KQs:0.0022, KK:0.0004, AKo:0.6129, A4s:0.0001, A6s:0.0003, A8s:0.0015, ATs:0.0013, AJs:0.0022, AQs:0.0001, AKs:0.2427"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0012, A4o:0.0032, 54s:0.0001, 66:0.0001, 75s:0.0001, 88:0.0006, 99:0.0081, T4s:0.0001, ATo:0.0002, JJ:0.0622, AJo:0.0046, QQ:0.0758, AQo:0.0051, K5s:0.0018, K6s:0.0005, K7s:0.0001, K9s:0.0027, KTs:0.0003, KJs:0.0005, KQs:0.0017, KK:0.0058, AKo:0.0013, A2s:0.0418, A3s:0.0126, A4s:0.0121, A5s:0.2736, A6s:0.0279, A7s:0.0478, A8s:0.1385, A9s:0.0943, ATs:0.0091, AJs:0.0785, AQs:0.2562, AKs:0.0401, AA:0.2711"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "K2o:0.0022, A2o:0.0811, K3o:0.0248, A3o:0.2306, K4o:0.0073, A4o:0.1038, A5o:0.1649, K6o:0.0062, A6o:0.0019, A7o:0.0001, A8o:0.0049, A9o:0.0001, ATo:0.0010, JJ:0.0007, AJo:0.0014, QQ:0.0001, K2s:0.0171, K3s:0.1019, K4s:0.1340, K5s:0.0565, K6s:0.0004, K7s:0.0022, K8s:0.0017, K9s:0.0002, KTs:0.0015, KJs:0.0021, KK:0.2877, AKo:0.0038, A2s:0.0985, A3s:0.1182, A4s:0.4462, A5s:0.2521, A6s:0.2864, A7s:0.0001, A8s:0.0007, A9s:0.0172, ATs:0.0155, AJs:0.0014, AQs:0.0018, AKs:0.2225, AA:0.7289"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.7065, AKo:0.9948, A2s:0.0021, A4s:0.1167, A5s:0.1257, A6s:0.0596, AKs:0.7374"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0058, K3o:0.0002, A3o:0.0121, K4o:0.0002, A4o:0.0512, K5o:0.0001, A5o:0.0561, 65s:0.0001, K6o:0.0010, A6o:0.0005, A7o:0.0057, A8o:0.0705, A9o:0.0001, AJo:0.0648, Q4s:0.0001, QQ:0.0002, AQo:0.4178, K2s:0.0023, K4s:0.0002, K5s:0.0263, K6s:0.0064, K7s:0.0052, K8s:0.0013, K9s:0.0030, KTs:0.0028, KJs:0.0245, KQs:0.0009, KK:0.6582, AKo:0.0005, A2s:0.7337, A3s:0.6903, A4s:0.1258, A5s:0.4607, A6s:0.5427, A7s:0.0001, A8s:0.1214, A9s:0.3579, ATs:0.0514, AJs:0.2191, AQs:0.5987, AKs:0.1661, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0001, A8o:0.0001, 99:0.0001, J9s:0.0001, JJ:0.0003, AJo:0.0001, QQ:0.0001, K2s:0.0001, K8s:0.0001, KK:0.3418, AKo:0.9995, A2s:0.0923, A3s:0.1686, A4s:0.2770, A5s:0.1892, A6s:0.0002, A7s:0.0012, A8s:0.1826, A9s:0.0131, ATs:0.0537, AJs:0.0501, AQs:0.0003, AKs:0.8339"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.1565, A3o:0.1187, A4o:0.0430, A5o:0.2481, 66:0.0001, A6o:0.0010, 77:0.0001, K7o:0.0012, A7o:0.0019, A8o:0.0104, A9o:0.0212, T5s:0.0001, ATo:0.0001, AJo:0.0131, Q2s:0.0001, QJs:0.0001, QQ:0.0002, AQo:0.1168, K2s:0.0150, K3s:0.1523, K4s:0.0041, K5s:0.0106, K6s:0.0064, K7s:0.0260, K8s:0.0032, K9s:0.0003, KTs:0.0001, KJs:0.0001, KK:0.4843, AKo:0.0325, A2s:0.0308, A3s:0.5586, A4s:0.1506, A5s:0.0836, A6s:0.0390, A7s:0.4504, A8s:0.0094, A9s:0.4267, ATs:0.1773, AJs:0.3602, AQs:0.8029, AKs:0.1559, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "52s:0.0001, 66:0.0001, JJ:0.0001, K3s:0.0001, KK:0.5157, AKo:0.9675, A2s:0.0001, A3s:0.0001, A4s:0.0001, A5s:0.0002, A6s:0.0004, ATs:0.0001, AQs:0.0001, AKs:0.8441"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.4783, 55:0.4701, 65s:0.3306, 66:0.9724, 76s:0.6130, 77:0.9770, 87s:0.0002, 88:0.9974, 97s:0.0006, 98s:0.0371, 99:0.9973, T8s:0.0080, T9s:0.7418, TT:0.9657, J8s:0.0004, J9s:0.4648, JTs:0.1605, JJ:0.9998, AJo:0.2046, QTs:0.0840, QJs:0.2720, QQ, KQo:0.0890, AQo:0.8778, K4s:0.0443, K5s:0.1302, K6s:0.4941, K7s:0.0884, K8s:0.0259, K9s:0.6387, KTs:0.9993, KJs:0.9989, KQs, KK:0.9847, A2s:0.0084, A3s:0.0514, A4s:0.2775, A5s:0.2811, A6s:0.0001, A7s:0.5617, A8s:0.3475, A9s:0.9333, ATs:0.9983, AJs, AQs:0.9997"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0003, A5o:0.0115, 66:0.0010, 77:0.0166, A7o:0.0015, A8o:0.0006, A9o:0.0012, TT:0.0339, ATo:0.0177, AJo:0.3313, AQo:0.1221, K8s:0.0001, K9s:0.0007, KTs:0.0001, KK:0.0032, AKo:0.0005, A2s:0.7077, A3s:0.5644, A4s:0.3486, A5s:0.4428, A6s:0.3015, A7s:0.3841, A8s:0.6199, A9s:0.0444, ATs:0.0003, AQs:0.0001, AKs:0.4881, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0036, 55:0.3021, 66:0.0166, 77:0.0009, 88:0.0013, 99:0.0027, TT:0.0002, KK:0.0122, AKo:0.9995, A2s:0.0926, A3s:0.3395, A4s:0.3328, A5s:0.2739, A6s:0.0034, A7s:0.0175, A8s:0.0303, A9s:0.0011, AKs:0.5119"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.1085, 66:0.1974, 77:0.1730, 88:0.0851, 99:0.1700, TT:0.2155, ATo:0.0001, JTs:0.0133, JJ:0.2347, AJo:0.0009, QQ:0.0001, AQo:0.8079, KTs:0.0012, KK:0.6305, AKo:0.0001, A2s:0.0003, A3s:0.0709, A4s:0.0566, A5s:0.1203, A6s:0.0591, A7s:0.0208, A8s:0.3494, A9s:0.0615, ATs:0.0043, AJs:0.2661, AQs:0.0031, AKs:0.0001, AA:0.5271"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, A5o:0.0002, 66:0.0002, 88:0.0001, 99:0.0123, TT:0.0014, ATo:0.0001, J9s:0.0001, K6s:0.0001, K9s:0.0002, KK:0.0260, AKo:0.3760, A2s:0.5532, A3s:0.8497, A4s:0.9070, A5s:0.3668, A6s:0.0885, A7s:0.5904, A8s:0.0284, A9s:0.0233, ATs:0.0135, AJs:0.0034, AKs:0.7529, AA:0.4729"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.6565, AKo:0.3302, AKs:0.7243, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0095, Q9s:0.0001, QQ:0.0316, AQo:0.0017, KQs:0.0023, KK:0.3164, AKo:0.0927, A3s:0.0017, A4s:0.1483, A5s:0.0096, A8s:0.0016, A9s:0.0009, ATs:0.0705, AJs:0.0396, AQs:0.0717, AKs:0.0434, AA:0.1611"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, JTs:0.0001, JJ:0.0001, QQ:0.0001, K9s:0.0013, KTs:0.0001, KQs:0.0001, KK:0.6825, AKo:0.8804, A2s:0.4222, A3s:0.1983, A4s:0.2893, A5s:0.2132, A6s:0.1331, A7s:0.0227, A8s:0.1224, A9s:0.2286, ATs:0.0086, AJs:0.1517, AQs:0.1532, AKs:0.9552, AA:0.8389"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0003, 55:0.0507, 65s:0.0011, 66:0.0484, 76s:0.0005, 77:0.2436, 88:0.0202, 99:0.0785, TT:0.0493, ATo:0.0039, JTs:0.0001, JJ:0.1143, AJo:0.0135, QQ:0.0001, AQo:0.2056, K6s:0.0713, K7s:0.0157, KTs:0.0098, KJs:0.0038, KK:0.2728, AKo:0.0019, A3s:0.0018, A4s:0.1856, A5s:0.0609, A6s:0.0021, A7s:0.2512, A8s:0.1055, A9s:0.0577, ATs:0.0128, AJs:0.2677, AQs:0.0031, AKs:0.0322, AA:0.4764"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0014, A5o:0.0013, 65s:0.0001, 77:0.0055, 88:0.0005, 98s:0.0001, 99:0.0006, TT:0.0002, ATo:0.0002, JJ:0.0001, AJo:0.0001, K3s:0.0007, K4s:0.0165, K5s:0.0064, K6s:0.0614, K7s:0.0493, K8s:0.0011, K9s:0.0137, KTs:0.0209, KJs:0.0043, KK:0.3837, AKo:0.3741, A2s:0.5743, A3s:0.3018, A4s:0.5730, A5s:0.5904, A6s:0.1219, A7s:0.0853, A8s:0.0267, A9s:0.1571, ATs:0.0018, AJs:0.0013, AKs:0.7208, AA:0.5236"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, QQ:0.0001, KTs:0.0001, KK, AKo:0.2783, AKs:0.3330, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, JJ:0.0014, KK:0.6565, AKo:0.1704, AKs:0.3770, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "J8s:0.0002, QJs:0.0001, QQ:0.0031, KTs:0.0019, KQs:0.0003, KK:0.0635, AKo:0.0549, A5s:0.1301, A6s:0.0082, A8s:0.0035, ATs:0.1120, AJs:0.1797, AQs:0.1271, AKs:0.0173, AA:0.3995"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0078, 65s:0.0001, 97s:0.0002, A9o:0.0001, JJ:0.0012, QQ:0.0002, AQo:0.0002, K6s:0.0029, KTs:0.0001, KJs:0.0055, KK:0.7402, AKo:0.9445, A3s:0.0010, A4s:0.1389, A5s:0.1034, A7s:0.0344, A8s:0.1971, A9s:0.0001, ATs:0.1001, AJs:0.1438, AQs:0.0144, AKs:0.9821, AA:0.6005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0006, 55:0.0393, 65s:0.0048, 66:0.2494, 77:0.1758, 88:0.0335, 99:0.1607, A9o:0.0001, T9s:0.0001, TT:0.0337, ATo:0.0003, J9s:0.0001, JTs:0.0278, JJ:0.1809, AJo:0.0001, QQ:0.0001, AQo:0.4433, K7s:0.0008, K9s:0.0011, KTs:0.0002, KJs:0.0037, KK:0.0903, AKo:0.0169, A2s:0.0029, A3s:0.0030, A4s:0.0079, A5s:0.2675, A6s:0.0735, A7s:0.0777, A8s:0.1720, A9s:0.0321, ATs:0.0143, AJs:0.2187, AQs:0.0031, AKs:0.1032, AA:0.5227"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 77:0.0002, TT:0.0005, JJ:0.0001, AQo:0.0003, K3s:0.0001, K4s:0.0162, K5s:0.0036, K6s:0.0012, K7s:0.0136, K9s:0.0564, KTs:0.0052, KJs:0.0051, KK:0.5662, AKo:0.3592, A2s:0.1351, A3s:0.5064, A4s:0.5641, A5s:0.5255, A6s:0.1725, A7s:0.3789, A8s:0.0101, A9s:0.0138, ATs:0.0026, AJs:0.0366, AKs:0.6498, AA:0.4773"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, KK, AKo:0.0293, A3s:0.0001, AKs:0.1029, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.6565, AKo:0.2058, AKs:0.4922, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@11.7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 99:0.0001, T8s:0.0001, TT:0.0002, KTo:0.0001, JTs:0.0004, JJ:0.0501, QQ:0.0006, AQo:0.0139, K8s:0.0005, KTs:0.0048, KJs:0.0001, KQs:0.0001, KK:0.3959, AKo:0.1653, A2s:0.0007, A4s:0.0001, A5s:0.0001, A7s:0.0137, A8s:0.0007, A9s:0.0022, AJs:0.0443, AQs:0.0238, AKs:0.1336, AA:0.0928"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0004, 76s:0.0055, 77:0.0092, 87s:0.0002, A8o:0.1155, 97s:0.0005, 99:0.0006, T9s:0.0003, TT:0.0001, J8s:0.0003, QQ:0.0010, K4s:0.0016, K7s:0.0006, K9s:0.0005, KTs:0.0013, KQs:0.0014, KK:0.0510, AKo:0.8053, A2s:0.1249, A3s:0.1862, A4s:0.1719, A5s:0.3054, A6s:0.0533, A7s:0.3148, A8s:0.0642, A9s:0.7887, ATs:0.5676, AJs:0.6034, AQs:0.0430, AKs:0.7071, AA:0.9072"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@11.7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 55:0.0925, 65s:0.0500, 66:0.3139, 76s:0.0014, 77:0.4273, 87s:0.0001, 88:0.1489, 98s:0.0001, 99:0.2625, A9o:0.0005, TT:0.0969, ATo:0.0001, J9s:0.1426, JTs:0.0230, JJ:0.2305, AJo:0.0162, QQ:0.0001, KQo:0.0018, AQo:0.3257, K4s:0.0145, K5s:0.0210, K6s:0.0482, K7s:0.0024, K9s:0.1651, KTs:0.0167, KJs:0.0009, KK:0.6233, AKo:0.0184, A2s:0.0156, A3s:0.0190, A4s:0.1583, A5s:0.0105, A6s:0.0596, A7s:0.2932, A8s:0.2004, A9s:0.0713, ATs:0.0058, AJs:0.2560, AQs:0.0021, AKs:0.1256, AA:0.0909"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0002, 55:0.0050, A5o:0.0015, 65s:0.0035, 66:0.0195, 77:0.0005, 88:0.0033, 99:0.0017, TT:0.0001, ATo:0.0578, JTs:0.0004, JJ:0.0005, AJo:0.0040, KQo:0.0011, AQo:0.0082, K4s:0.0028, K5s:0.0012, K6s:0.0152, K7s:0.0011, K9s:0.0040, KTs:0.0011, KJs:0.0001, KK:0.0332, AKo:0.3576, A2s:0.8543, A3s:0.8667, A4s:0.7427, A5s:0.7244, A6s:0.6514, A7s:0.5670, A8s:0.1033, A9s:0.0456, ATs:0.0117, AJs:0.0060, AQs:0.0007, AKs:0.6274, AA:0.9091"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@20",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0001, JJ:0.0002, QQ:0.0003, K6s:0.0016, KQs:0.0021, KK:0.0779, AKo:0.0866, A3s:0.0001, A5s:0.0101, A6s:0.0022, A7s:0.0084, AJs:0.0005, AQs:0.0418, AKs:0.0003, AA:0.0148"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 98s:0.0054, JJ:0.0001, QQ:0.0002, K5s:0.0038, K6s:0.0036, K7s:0.0001, K8s:0.0131, KTs:0.0481, KQs:0.0001, KK:0.9040, AKo:0.9114, A3s:0.0415, A4s:0.2042, A5s:0.1947, A6s:0.3757, A7s:0.0297, A8s:0.0134, A9s:0.2618, ATs:0.0502, AJs:0.0246, AQs:0.1983, AKs:0.9995, AA:0.9852"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@20",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0041, 66:0.0617, 77:0.0063, 88:0.0002, 99:0.0056, TT:0.0001, JJ:0.0234, AQo:0.0002, K6s:0.0007, K9s:0.0008, KTs:0.0002, KJs:0.0031, KK:0.0007, A3s:0.0005, A4s:0.0939, A6s:0.0292, A7s:0.0064, A8s:0.0009, A9s:0.0682, ATs:0.0103, AJs:0.1488, AQs:0.0030, AKs:0.0005, AA:0.0952"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0004, 65s:0.0001, 66:0.0005, 77:0.0003, 88:0.0002, 99:0.0007, TT:0.0004, JJ:0.0007, KJo:0.0002, KQo:0.0001, K5s:0.0029, K6s:0.0896, K7s:0.0226, K8s:0.0005, K9s:0.2056, KTs:0.0215, KJs:0.0141, KK:0.6557, AKo:0.3761, A2s:0.1537, A3s:0.5337, A4s:0.3937, A5s:0.6763, A6s:0.2100, A7s:0.4761, A8s:0.2210, A9s:0.1226, ATs:0.0068, AJs:0.1110, AKs:0.7525, AA:0.9048"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.0001, QQ:0.0002, KK:0.9996, AKo:0.0401, AKs:0.1600, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.6565, AKo:0.0978, AKs:0.2138, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 53s:0.0006, 54s:0.0127, 55:0.2104, 65s:0.2372, 66:0.1061, 75s:0.0001, 76s:0.0244, 77:0.4811, 88:0.6665, 99:0.6430, T9s:0.0003, TT:0.4994, J9s:0.0002, JTs:0.6562, JJ:0.7186, AJo:0.2896, QTs:0.7399, QJs:0.9354, QQ:0.9996, KQo:0.1072, AQo:0.3523, K4s:0.0002, K6s:0.0083, K7s:0.0026, K8s:0.0267, K9s:0.0683, KTs:0.7827, KJs:0.8638, KQs:0.9998, KK:0.4798, AKo:0.3836, A2s:0.0002, A3s:0.1488, A4s:0.2926, A5s:0.2170, A6s:0.0048, A7s:0.2605, A8s:0.2149, A9s:0.3937, ATs:0.7636, AJs:0.8615, AQs:0.8921, AKs:0.0377"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A3o:0.0005, A4o:0.0001, 55:0.0070, A5o:0.0023, 65s:0.1066, 66:0.0787, 77:0.0314, A7o:0.0003, 87s:0.0007, 88:0.3292, A8o:0.0001, 99:0.3558, A9o:0.0003, T9s:0.0005, TT:0.5005, KTo:0.0003, ATo:0.1920, JJ:0.2814, KJo:0.0001, AJo:0.6908, QTs:0.0379, QJs:0.0001, QQ:0.0004, KQo:0.5424, AQo:0.6477, K3s:0.0006, K4s:0.0001, K5s:0.0340, K6s:0.5997, K7s:0.0060, K9s:0.2732, KTs:0.2170, KJs:0.1360, KQs:0.0001, KK:0.5202, AKo:0.6164, A2s:0.7357, A3s:0.8462, A4s:0.7073, A5s:0.7829, A6s:0.9913, A7s:0.6998, A8s:0.7846, A9s:0.6051, ATs:0.2363, AJs:0.1385, AQs:0.1079, AKs:0.9623, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0362, 53s:0.0001, 54s:0.0612, 55:0.2462, 65s:0.3990, 66:0.5010, 76s:0.1441, 77:0.6648, 88:0.8651, 97s:0.0001, 98s:0.0385, 99:0.7702, T7s:0.0001, T8s:0.0023, T9s:0.5284, TT:0.6796, ATo:0.0003, J9s:0.0001, JTs:0.9694, JJ:0.7702, AJo:0.4410, Q9s:0.0001, QTs:0.9800, QJs:0.9960, QQ:0.9954, KQo:0.3646, AQo:0.3723, K6s:0.0313, K7s:0.0001, K8s:0.0024, K9s:0.1520, KTs:0.9072, KJs:0.9423, KQs, KK:0.3712, AKo:0.5783, A2s:0.0012, A3s:0.1359, A4s:0.0150, A5s:0.6647, A6s:0.1232, A7s:0.0151, A8s:0.3641, A9s:0.7644, ATs:0.9997, AJs:0.7294, AQs:0.9939, AKs:0.0832"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0001, 44:0.0034, A4o:0.0008, 54s:0.0165, 55:0.0062, A5o:0.0112, 65s:0.1368, 66:0.3905, A6o:0.0001, 76s:0.0235, 77:0.3334, 85s:0.0001, 87s:0.0076, 88:0.1344, 97s:0.0001, 98s:0.0112, 99:0.2297, T8s:0.0501, T9s:0.2028, TT:0.3203, KTo:0.0001, ATo:0.6567, J8s:0.0003, J9s:0.0001, JTs:0.0236, JJ:0.2298, KJo:0.0421, AJo:0.5584, QTs:0.0182, QJs:0.0028, QQ:0.0046, KQo:0.6349, AQo:0.6277, K2s:0.0005, K4s:0.0074, K5s:0.1742, K6s:0.4296, K7s:0.6235, K8s:0.0744, K9s:0.2877, KTs:0.0922, KJs:0.0572, KK:0.6288, AKo:0.4217, A2s:0.9985, A3s:0.8638, A4s:0.9846, A5s:0.3349, A6s:0.8746, A7s:0.9840, A8s:0.6356, A9s:0.2354, ATs:0.0002, AJs:0.2706, AQs:0.0061, AKs:0.9168, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0010, 43s:0.0001, 44:0.4544, 53s:0.0019, 54s:0.5205, 55:0.9167, 65s:0.5648, 66:0.9849, 76s:0.7669, 77:0.6563, 86s:0.0002, 87s:0.6541, 88:0.9518, 97s:0.0019, 98s:0.3871, 99:0.7968, T8s:0.8561, T9s:0.9981, TT:0.9018, ATo:0.2683, J8s:0.0001, J9s:0.6136, JTs:0.9991, JJ:0.8877, KJo:0.0818, AJo:0.7844, Q9s:0.6110, QTs:0.9838, QJs:0.9898, QQ:0.9998, KQo:0.8390, AQo:0.6143, K5s:0.0739, K6s:0.0555, K7s:0.0218, K8s:0.4149, K9s:0.8255, KTs:0.9986, KJs:0.9998, KQs:0.9994, KK:0.6998, AKo:0.7378, A2s:0.1534, A3s:0.2727, A4s:0.1468, A5s:0.2787, A6s:0.5913, A7s:0.1031, A8s:0.8821, A9s:0.8850, ATs:0.9993, AJs:0.9998, AQs:0.9639, AKs:0.0158"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0002, A3o:0.0001, 44:0.0690, A4o:0.0057, 53s:0.0003, 54s:0.1961, 55:0.0762, A5o:0.0166, 64s:0.0001, 65s:0.3976, 66:0.0143, 75s:0.0006, 76s:0.1070, 77:0.3436, K7o:0.0001, 86s:0.0007, 87s:0.1533, 88:0.0482, 97s:0.0001, 98s:0.1662, 99:0.2031, T8s:0.0709, T9s:0.0017, TT:0.0982, ATo:0.7305, J8s:0.0001, J9s:0.3107, JJ:0.1123, QJo:0.0578, KJo:0.3703, AJo:0.2156, Q6s:0.0005, Q8s:0.0083, Q9s:0.2549, QTs:0.0161, QJs:0.0097, QQ:0.0002, KQo:0.1609, AQo:0.3857, K3s:0.0028, K4s:0.0094, K5s:0.0062, K6s:0.6943, K7s:0.4403, K8s:0.2410, K9s:0.1659, KTs:0.0011, KQs:0.0006, KK:0.3002, AKo:0.2622, A2s:0.8461, A3s:0.7271, A4s:0.8532, A5s:0.7209, A6s:0.4084, A7s:0.8952, A8s:0.1179, A9s:0.1148, ATs:0.0007, AJs:0.0001, AQs:0.0361, AKs:0.9842, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.7838, 33:0.9660, 44:0.9039, 54s:0.5593, 55:0.9876, 64s:0.0694, 65s:0.9811, 66:0.8563, 75s:0.8030, 76s:0.7411, 77:0.9998, 86s:0.2688, 87s:0.8985, 88:0.9843, 96s:0.0021, 98s:0.9508, 99:0.9997, T8s:0.7023, T9s:0.9994, TT, ATo:0.5041, J9s:0.7447, JTs, JJ:0.9713, KJo:0.3014, AJo:0.9207, Q8s:0.2159, Q9s:0.9010, QTs:0.9991, QJs:0.9997, QQ:0.9715, KQo:0.8072, AQo:0.9037, K3s:0.0001, K4s:0.0003, K5s:0.0001, K6s:0.3839, K7s:0.5613, K8s:0.8115, K9s:0.9966, KTs:0.9994, KJs, KQs, KK:0.4673, AKo:0.3097, A2s:0.0125, A3s:0.2631, A4s:0.0529, A5s:0.3785, A6s:0.0102, A7s:0.5139, A8s:0.7075, A9s:0.9898, ATs, AJs, AQs, AKs:0.0817"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0768, A2o:0.0001, 33:0.0206, K3o:0.0001, A3o:0.0011, 43s:0.0244, 44:0.0958, A4o:0.0390, 54s:0.4249, 55:0.0121, A5o:0.3165, 64s:0.0931, 65s:0.0150, 66:0.1435, A6o:0.0005, 76s:0.2261, A7o:0.0322, 86s:0.3480, 87s:0.0766, 88:0.0156, A8o:0.0009, 98s:0.0010, 99:0.0003, T8s:0.1718, ATo:0.4930, J9s:0.0885, JJ:0.0287, QJo:0.0148, KJo:0.3233, AJo:0.0792, Q3s:0.0001, Q8s:0.3292, Q9s:0.0352, QJs:0.0001, QQ:0.0285, KQo:0.1927, AQo:0.0963, K3s:0.0020, K4s:0.1781, K5s:0.0039, K6s:0.1021, K7s:0.0698, K8s:0.0810, K9s:0.0025, KTs:0.0003, KK:0.5327, AKo:0.6903, A2s:0.9870, A3s:0.7367, A4s:0.9470, A5s:0.6214, A6s:0.9891, A7s:0.4861, A8s:0.2925, A9s:0.0098, AQs:0.0001, AKs:0.9183, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22, 32s:0.9944, 33:0.9998, A3o:0.3769, 42s:0.9997, 43s:0.9987, 44:0.9921, 54o:0.9166, A4o:0.7622, 52s:0.9936, 53s:0.9998, 54s, 55:0.9518, 65o:0.9977, 75o:0.3367, A5o:0.9596, 62s:0.9608, 63s:0.9993, 64s:0.9998, 65s:0.9995, 66:0.9920, 76o:0.9715, 86o:0.0001, A6o:0.7620, 72s:0.0034, 73s:0.9982, 74s:0.9989, 75s:0.9997, 76s:0.9518, 77, 87o:0.9517, 97o:0.0002, K7o:0.0038, A7o:0.8871, 82s:0.0067, 83s:0.6928, 84s:0.9952, 85s, 86s, 87s:0.9666, 88, 98o:0.9707, T8o:0.9989, K8o:0.5988, A8o:0.9453, 92s:0.0034, 93s:0.7113, 94s:0.9627, 95s:0.9961, 96s:0.9794, 97s, 98s:0.9995, 99, T9o:0.9808, J9o:0.6713, Q9o:0.9033, K9o:0.9654, A9o:0.9976, T2s:0.8231, T3s:0.9936, T4s:0.9935, T5s:0.9543, T6s:0.9905, T7s:0.9990, T8s, T9s:0.8788, TT, JTo:0.9260, QTo:0.9618, KTo:0.9027, ATo:0.9803, J2s:0.9709, J3s:0.9968, J4s:0.9991, J5s:0.9998, J6s:0.9982, J7s, J8s:0.9919, J9s:0.9638, JTs, JJ, QJo:0.9558, KJo:0.9996, AJo:0.9974, Q2s:0.9969, Q3s, Q4s:0.9995, Q5s:0.9982, Q6s:0.8645, Q7s, Q8s:0.9958, Q9s:0.8925, QTs:0.9551, QJs:0.9985, QQ, KQo, AQo, K2s:0.9569, K3s:0.9980, K4s:0.9752, K5s:0.9972, K6s:0.9826, K7s:0.9511, K8s, K9s, KTs, KJs, KQs, KK:0.9979, AKo:0.9259, A2s:0.9683, A3s, A4s:0.4036, A5s:0.9846, A6s:0.4998, A7s:0.5404, A8s:0.5133, A9s:0.9997, ATs, AJs, AQs, AKs:0.9952"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0015, 32s:0.0030, 33:0.0002, 53o:0.0003, A3o:0.2301, 43s:0.0003, 44:0.0079, 54o:0.0726, 64o:0.0012, A4o:0.2325, 52s:0.0062, 53s:0.0001, 55:0.0482, K5o:0.0001, A5o:0.0400, 64s:0.0002, 65s:0.0005, 66:0.0080, 76o:0.0256, 86o:0.0013, K6o:0.0001, A6o:0.1960, 73s:0.0002, 74s:0.0005, 76s:0.0481, 77:0.0001, 87o:0.0468, A7o:0.1062, 83s:0.0001, 87s:0.0333, K8o:0.0001, A8o:0.0543, 93s:0.0011, 94s:0.0002, 95s:0.0031, 96s:0.0205, 97s:0.0001, 98s:0.0004, T9o:0.0181, J9o:0.0855, Q9o:0.0263, A9o:0.0019, T2s:0.0001, T3s:0.0001, T5s:0.0282, T6s:0.0081, T7s:0.0006, T9s:0.1208, JTo:0.0737, QTo:0.0382, KTo:0.0972, ATo:0.0197, J3s:0.0001, J8s:0.0080, J9s:0.0362, QJo:0.0441, KJo:0.0004, AJo:0.0026, Q2s:0.0019, Q4s:0.0002, Q5s:0.0013, Q6s:0.1352, Q8s:0.0042, Q9s:0.1073, QTs:0.0448, QJs:0.0014, K2s:0.0430, K3s:0.0017, K4s:0.0247, K5s:0.0014, K6s:0.0174, K7s:0.0489, KJs:0.0001, KK:0.0021, AKo:0.0741, A2s:0.0317, A4s:0.5964, A5s:0.0154, A6s:0.5002, A7s:0.4595, A8s:0.4867, A9s:0.0003, AKs:0.0048, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.6322, 65s:0.3259, 66:0.4650, 76s:0.3871, 77:0.6835, 87s:0.0006, 88:0.9106, 98s:0.0001, 99:0.9830, T8s:0.0095, T9s:0.4799, TT:0.9572, ATo:0.0456, J9s:0.0011, JTs:0.4434, JJ:0.9922, AJo:0.2143, Q8s:0.0015, Q9s:0.0681, QTs:0.0063, QJs:0.5472, QQ:0.9985, AQo:0.4254, K6s:0.0002, K7s:0.0037, KTs:0.0041, KJs:0.3352, KQs:0.0031, KK:0.9985, AKo:0.9269, A3s:0.6996, A4s:0.9371, A5s:0.9917, A6s:0.3139, A7s:0.3065, A8s:0.9907, A9s:0.9907, ATs:0.9994, AJs:0.9975, AQs:0.9965, AKs:0.9468"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0068, A8o:0.0449, 98s:0.0002, 99:0.0001, A9o:0.0338, TT:0.0004, KTo:0.0003, ATo:0.1387, J8s:0.0001, JJ:0.0001, KJo:0.0005, AJo:0.0350, QQ:0.0001, AQo:0.1932, K5s:0.0001, K6s:0.0005, K7s:0.0001, K9s:0.0001, KTs:0.0003, KJs:0.0004, KK:0.0010, AKo:0.0146, A2s:0.5547, A3s:0.1258, A4s:0.0264, A5s:0.0029, A6s:0.1518, A7s:0.3380, A8s:0.0025, A9s:0.0070, ATs:0.0003, AJs:0.0024, AQs:0.0015, AKs:0.0215, AA:0.6879"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0088, A8o:0.0247, 98s:0.0004, A9o:0.0017, T8s:0.0001, ATo:0.0197, AJo:0.0367, Q9s:0.0001, QQ:0.0003, AQo:0.0269, K6s:0.0001, K7s:0.0001, KTs:0.0001, KJs:0.0001, KK:0.0003, AKo:0.0546, A2s:0.3513, A3s:0.0466, A4s:0.0230, A5s:0.0008, A6s:0.1495, A7s:0.0426, A8s:0.0001, A9s:0.0007, AJs:0.0001, AQs:0.0007, AKs:0.0305, AA:0.3121"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, KK:0.0003, AKo:0.0038, AKs:0.0012"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@17.7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, A3o:0.0006, 44:0.0079, A4o:0.0009, 55:0.0477, A5o:0.0014, 65s:0.0002, 66:0.0079, A6o:0.0002, 76s:0.0152, 77:0.0001, A7o:0.0002, 87s:0.0190, A8o:0.0062, 96s:0.0008, A9o:0.0005, T7s:0.0001, T9s:0.0617, JTo:0.0027, ATo:0.0197, J8s:0.0007, J9s:0.0086, AJo:0.0026, Q6s:0.0004, Q9s:0.0096, QTs:0.0192, QJs:0.0010, K4s:0.0005, K6s:0.0008, K7s:0.0007, KJs:0.0001, KK:0.0021, AKo:0.0701, A2s:0.0088, A4s:0.0066, A5s:0.0003, A6s:0.0394, A7s:0.1162, A8s:0.0290, A9s:0.0001, AKs:0.0045, AA:0.1592"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0050, A4o:0.1341, 55:0.0005, A5o:0.0248, 66:0.0001, A6o:0.0006, 76s:0.0017, A7o:0.0011, 87s:0.0016, A8o:0.0030, T9s:0.0003, Q9s:0.0001, AKo:0.0040, A2s:0.0227, A4s:0.5898, A5s:0.0151, A6s:0.4421, A7s:0.3420, A8s:0.4576, A9s:0.0002, AKs:0.0003, AA:0.8408"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@20",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0063, 55:0.0440, A5o:0.0003, 65s:0.0001, 66:0.0076, 76s:0.0029, 77:0.0001, A7o:0.0055, 87s:0.0018, A8o:0.0027, ATo:0.0070, J8s:0.0001, J9s:0.0001, AJo:0.0024, Q6s:0.0001, Q8s:0.0001, Q9s:0.0067, QTs:0.0076, QJs:0.0001, KK:0.0021, AKo:0.0492, A2s:0.0011, A4s:0.0200, A5s:0.0022, A6s:0.0073, A7s:0.0087, A8s:0.0686, A9s:0.0001, AKs:0.0040, AA:0.1408"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0383, 44:0.0002, A4o:0.0531, 55:0.0011, A5o:0.0129, 66:0.0002, A6o:0.0012, 76s:0.0030, A7o:0.0079, 87s:0.0003, A8o:0.0053, A9o:0.0001, T9s:0.0006, ATo:0.0046, AJo:0.0001, K2s:0.0001, AKo:0.0249, A2s:0.0300, A4s:0.5688, A5s:0.0131, A6s:0.4717, A7s:0.4472, A8s:0.4042, A9s:0.0002, AKs:0.0008, AA:0.8592"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@10|LJ:4BET@74.75",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0021, AKo:0.0740, A6s:0.0001, A7s:0.0007, A8s:0.0007, AKs:0.0048, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9992, 32s:0.3082, 33, 53o:0.0751, 42s:0.8099, 43s:0.9906, 44:0.9993, 54o:0.9164, 64o:0.1096, A4o:0.2079, 52s:0.9945, 53s:0.9351, 54s:0.9069, 55:0.9998, 65o:0.7051, 75o:0.6831, A5o:0.2539, 62s:0.7845, 63s:0.9794, 64s:0.9885, 65s:0.9942, 66:0.9997, 76o:0.9664, 86o:0.0064, 72s:0.0002, 73s:0.9414, 74s:0.9685, 75s:0.9942, 76s:0.9997, 77:0.9927, 87o:0.9703, 97o:0.6320, A7o:0.0221, 82s:0.1257, 83s:0.0518, 84s:0.6382, 85s:0.9975, 86s:0.9977, 87s:0.8788, 88, 98o:0.7835, A8o:0.1981, 92s:0.0023, 93s:0.5787, 94s:0.4091, 95s:0.9489, 96s:0.9956, 97s:0.9988, 98s:0.9928, 99, T9o:0.4834, K9o:0.0001, A9o:0.8237, T2s:0.0104, T3s:0.5911, T4s:0.8996, T5s:0.9716, T6s:0.9792, T7s:0.9972, T8s:0.9989, T9s:0.9996, TT, JTo:0.9907, QTo:0.9300, KTo:0.9627, ATo:0.8938, J2s:0.4031, J3s:0.8392, J4s:0.9785, J5s:0.9008, J6s:0.9945, J7s:0.9934, J8s:0.8375, J9s:0.9905, JTs:0.9993, JJ, QJo:0.9829, KJo:0.9971, AJo:0.9988, Q2s:0.5681, Q3s:0.9859, Q4s:0.9530, Q5s:0.9648, Q6s:0.8778, Q7s:0.9989, Q8s:0.9244, Q9s:0.9973, QTs:0.9902, QJs, QQ:0.6541, KQo:0.2824, AQo:0.3743, K2s:0.8091, K3s:0.8962, K4s:0.5612, K5s:0.1725, K6s:0.9527, K7s:0.9976, K8s:0.9983, K9s:0.9976, KTs:0.9997, KJs:0.9993, KQs:0.9971, AKo:0.0017, A2s:0.2389, A3s:0.8672, A4s:0.7650, A5s:0.6835, A6s:0.5834, A7s:0.8907, A8s:0.9904, A9s:0.9982, ATs:0.9557, AJs:0.9996, AQs:0.7593, AKs:0.0070"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0005, K2o:0.0008, A2o:0.1188, K3o:0.0001, A3o:0.2214, 42s:0.0006, 43s:0.0002, 44:0.0004, K4o:0.0035, A4o:0.3786, 53s:0.0604, 54s:0.0930, 65o:0.2888, K5o:0.0001, A5o:0.6325, 63s:0.0037, 64s:0.0026, 65s:0.0041, 66:0.0002, 76o:0.0276, 86o:0.0024, K6o:0.0312, A6o:0.1618, 75s:0.0001, 77:0.0073, 87o:0.0052, A7o:0.1901, 87s:0.1172, T8o:0.0008, K8o:0.1825, A8o:0.2485, 96s:0.0001, 97s:0.0002, T9o:0.0147, Q9o:0.0006, A9o:0.1007, T2s:0.0014, T3s:0.0014, T5s:0.0020, QTo:0.0642, KTo:0.0282, ATo:0.1047, J8s:0.1608, QJo:0.0021, AJo:0.0003, Q2s:0.3521, Q4s:0.0351, Q5s:0.0345, Q6s:0.1129, Q8s:0.0690, Q9s:0.0005, QTs:0.0096, QQ:0.3459, KQo:0.7175, AQo:0.6256, K2s:0.1562, K3s:0.0974, K4s:0.4341, K5s:0.8241, K6s:0.0437, K7s:0.0006, K8s:0.0006, K9s:0.0007, KTs:0.0002, KJs:0.0003, KQs:0.0028, KK, AKo:0.9983, A2s:0.7599, A3s:0.1328, A4s:0.2347, A5s:0.3161, A6s:0.4158, A7s:0.1086, A8s:0.0093, A9s:0.0018, ATs:0.0440, AQs:0.2406, AKs:0.9930, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0005, 55:0.6337, 65s:0.1525, 66:0.3488, 76s:0.3138, 77:0.2877, 88:0.5002, 98s:0.0172, 99:0.2975, T9s:0.0001, TT:0.0685, JJ:0.8959, QTs:0.0335, QQ:0.9953, AQo:0.5240, K5s:0.0115, K6s:0.0122, K7s:0.0015, K9s:0.0298, KTs:0.6075, KJs:0.1150, KQs:0.9534, KK:0.8673, AKo:0.0200, A2s:0.0001, A3s:0.0881, A4s:0.2229, A5s:0.4369, A6s:0.1431, A7s:0.1166, A8s:0.7966, A9s:0.4069, ATs:0.5402, AJs:0.7195, AQs:0.9430, AKs:0.3417, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0170, 77:0.0003, A8o:0.0006, 99:0.0040, A9o:0.0289, T9s:0.0004, TT:0.0010, ATo:0.0453, KJo:0.0004, AJo:0.0001, Q9s:0.0001, QQ:0.0001, KQo:0.0051, AQo:0.2813, K5s:0.0149, K7s:0.0004, K8s:0.0027, K9s:0.0256, KTs:0.0030, KJs:0.0062, KK:0.0494, AKo:0.0133, A2s:0.0014, A3s:0.3658, A4s:0.2194, A5s:0.2072, A6s:0.4521, A7s:0.3156, A8s:0.0572, A9s:0.2976, ATs:0.0776, AJs:0.1430, AQs:0.0223, AKs:0.4221, AA:0.7376"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0005, 99:0.0001, KTo:0.0015, ATo:0.0415, JTs:0.0001, JJ:0.0004, KJo:0.0024, AJo:0.0159, KQo:0.0032, AQo:0.0154, K4s:0.0024, K5s:0.0257, K6s:0.0146, K7s:0.0005, K8s:0.0047, K9s:0.0580, KTs:0.0065, KJs:0.0030, KQs:0.0003, KK:0.0121, AKo:0.0220, A2s:0.0297, A3s:0.0841, A4s:0.3002, A5s:0.0028, A6s:0.0085, A7s:0.0079, A8s:0.0406, A9s:0.0382, ATs:0.1587, AJs:0.0508, AQs:0.0152, AKs:0.0224, AA:0.2623"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0002, 66:0.0160, 77:0.0010, 87s:0.0011, 99:0.0004, T9s:0.0005, TT:0.0011, K6s:0.0038, K9s:0.0008, KJs:0.0001, KK:0.0712, AKo:0.9448, A2s:0.0064, A3s:0.0140, A4s:0.0399, A5s:0.0222, A6s:0.0102, A7s:0.0307, A8s:0.0207, A9s:0.0029, ATs:0.0263, AJs:0.0272, AQs:0.0027, AKs:0.2138"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@10",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0029, 44:0.0060, 54s:0.0004, 55:0.2662, 66:0.2824, 76s:0.0113, 77:0.2374, 88:0.6888, 99:0.0999, TT:0.4672, JJ:0.3385, QTs:0.0111, QJs:0.0004, QQ:0.9689, AQo:0.1134, K7s:0.0227, K9s:0.0482, KTs:0.2307, KJs:0.2962, KQs:0.9420, KK:0.0182, AKo:0.0313, A3s:0.0060, A4s:0.0001, A5s:0.2877, A7s:0.1976, A8s:0.0142, A9s:0.0097, ATs:0.5998, AJs:0.1191, AQs:0.9991, AKs:0.0098"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "22:0.0001, 54s:0.0001, 98s:0.0001, TT:0.0003, JTs:0.0001, JJ:0.0001, KJo:0.0138, AJo:0.0227, QQ:0.0003, KQo:0.0584, AQo:0.0118, K6s:0.0727, K7s:0.0672, K8s:0.0215, K9s:0.1677, KTs:0.1032, KJs:0.1081, KQs:0.0018, KK:0.4377, AKo:0.0808, A2s:0.0002, A3s:0.0038, A4s:0.0011, A5s:0.0006, A7s:0.0011, A8s:0.0016, A9s:0.0004, ATs:0.0267, AJs:0.1707, AKs:0.0518"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0008, 54s:0.0001, 55:0.0026, 66:0.0020, 76s:0.0002, 87s:0.0001, 88:0.0088, 98s:0.0003, 99:0.0014, TT:0.0098, JJ:0.0005, AJo:0.0006, QQ:0.0007, AQo:0.0001, K7s:0.0078, KJs:0.0031, KQs:0.0005, KK:0.0114, AKo:0.1976, A2s:0.0002, A3s:0.0028, A4s:0.0002, A5s:0.0011, A6s:0.0001, A7s:0.0071, A8s:0.0045, A9s:0.0130, ATs:0.0195, AJs:0.0178, AQs:0.0002, AKs:0.0201"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "K2o:0.0001, A2o:0.0975, K3o:0.0002, A3o:0.0644, K4o:0.0002, K5o:0.0031, A5o:0.0196, K6o:0.0026, 77:0.0001, A7o:0.0003, 86s:0.0002, K8o:0.0035, 99:0.0004, A9o:0.0024, TT:0.0003, KTo:0.0003, ATo:0.0008, AJo:0.0033, AQo:0.0028, K2s:0.0107, K3s:0.0021, K5s:0.0007, K6s:0.0144, K8s:0.0063, K9s:0.0455, KTs:0.0016, KJs:0.0073, KQs:0.0001, KK:0.3674, AKo:0.0683, A2s:0.0579, A3s:0.1421, A4s:0.0124, A5s:0.1114, A6s:0.1203, A7s:0.0516, A8s:0.3453, A9s:0.0153, ATs:0.0180, AJs:0.0556, AQs:0.0945, AKs:0.4866, AA:0.5143"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A2o:0.0015, A3o:0.0278, K4o:0.0002, A4o:0.1062, 62s:0.0001, A6o:0.0001, K7o:0.0001, A7o:0.0081, 87s:0.0015, A8o:0.0007, A9o:0.0051, TT:0.0038, ATo:0.0685, JJ:0.0009, AJo:0.0009, AQo:0.0001, K2s:0.0001, K3s:0.0002, K5s:0.0011, K6s:0.0001, K8s:0.0028, K9s:0.0001, KJs:0.0061, KQs:0.0001, KK:0.1903, AKo:0.1656, A2s:0.0041, A3s:0.2066, A4s:0.0256, A5s:0.0004, A6s:0.0260, A7s:0.0237, A8s:0.1198, A9s:0.0848, ATs:0.0001, AJs:0.1411, AQs:0.0107, AKs:0.1238, AA:0.4856"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0001, K4s:0.0006, KK:0.4424, AKo:0.7661, A2s:0.0002, A3s:0.0015, A5s:0.0005, A7s:0.0026, A8s:0.0001, ATs:0.0022, AJs:0.0027, AQs:0.0032, AKs:0.3895"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "44:0.0001, 55:0.3040, 65s:0.1945, 66:0.6635, 76s:0.0297, 77:0.3457, 88:0.9886, 98s:0.0950, 99:0.3448, T9s:0.0167, TT:0.8332, J9s:0.2943, JTs:0.3826, JJ:0.9979, QTs:0.0830, QJs:0.0586, QQ, AQo:0.3680, K4s:0.0006, K5s:0.0011, K6s:0.0013, K9s:0.0049, KTs:0.0480, KJs:0.9716, KQs:0.9968, KK:0.9740, AKo:0.4744, A2s:0.0006, A3s:0.2442, A4s:0.3585, A5s:0.9194, A6s:0.2211, A7s:0.1198, A8s:0.3206, A9s:0.3858, ATs:0.9997, AJs:0.9868, AQs:0.9998, AKs:0.0891"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0005, A8o:0.0001, 98s:0.0002, 99:0.0023, A9o:0.0159, T8s:0.0001, AJo:0.0002, AQo:0.2256, K9s:0.0291, KTs:0.0005, KJs:0.0008, KK:0.0001, AKo:0.0033, A2s:0.2564, A3s:0.1705, A4s:0.0068, A5s:0.0083, A6s:0.2026, A7s:0.3668, A8s:0.0281, A9s:0.2277, ATs:0.0001, AJs:0.0036, AKs:0.2373, AA:0.4887"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0003, 76s:0.0002, A8o:0.0046, 99:0.0001, A9o:0.0789, TT:0.0001, ATo:0.0070, AJo:0.0063, AQo:0.1489, K4s:0.0006, K5s:0.0001, K7s:0.0005, K8s:0.0075, K9s:0.0002, KTs:0.0014, KJs:0.0006, KK:0.0001, AKo:0.0046, A2s:0.5012, A3s:0.2010, A4s:0.0061, A5s:0.0101, A6s:0.1015, A7s:0.3790, A8s:0.0230, A9s:0.3222, AJs:0.0037, AQs:0.0002, AKs:0.3657, AA:0.5113"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, KK:0.0258, AKo:0.5176, AKs:0.3079"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0510, 33:0.0159, 44:0.0949, 54s:0.0150, 55:0.0117, 64s:0.0001, 65s:0.0003, 66:0.1413, 76s:0.0036, 86s:0.0056, 87s:0.0228, 88:0.0156, 99:0.0003, T8s:0.0289, J9s:0.0390, JJ:0.0287, QQ:0.0285, AQo:0.0943, KTs:0.0002, KK:0.5253, AKo:0.0386, A2s:0.0058, A3s:0.0393, A4s:0.0240, A5s:0.0160, A6s:0.0132, A7s:0.2158, A8s:0.1215, A9s:0.0046, AQs:0.0001, AKs:0.2734, AA:0.0104"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, 33:0.0002, 44:0.0002, 55:0.0002, 66:0.0012, 76s:0.0001, 87s:0.0001, ATo:0.0013, K6s:0.0001, KK:0.0074, AKo:0.6517, A2s:0.7984, A3s:0.2665, A4s:0.7758, A5s:0.4506, A6s:0.3379, A7s:0.0538, A8s:0.0800, A9s:0.0033, AKs:0.6449, AA:0.9896"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0003, 55:0.0034, 66:0.1268, 88:0.0146, ATo:0.0101, JJ:0.0276, AJo:0.0023, QQ:0.0280, AQo:0.0873, KK:0.3263, AKo:0.0001, A2s:0.0366, A3s:0.0208, A4s:0.0008, A5s:0.0085, A6s:0.0198, A7s:0.1520, A8s:0.0474, A9s:0.0065, AQs:0.0001, AKs:0.0994, AA:0.0124"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0002, 44:0.0020, 55:0.0008, A5o:0.0004, 64s:0.0001, 66:0.0108, 76s:0.0002, JJ:0.0001, KK:0.1953, AKo:0.6902, A2s:0.2181, A3s:0.2464, A4s:0.8903, A5s:0.5903, A6s:0.0791, A7s:0.1144, A8s:0.1042, A9s:0.0006, AKs:0.8189, AA:0.9876"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|LJ:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5327, AKo:0.6903, AKs:0.9183, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0004, TT:0.0001, QQ:0.0012, KTs:0.0001, KK:0.3332, AKo:0.2005, A2s:0.0152, A6s:0.0004, A9s:0.0127, AJs:0.0236, AQs:0.2345, AKs:0.0426, AA:0.2357"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0011, A5o:0.0005, 65s:0.0002, 77:0.0006, 87s:0.0012, 99:0.0002, T9s:0.0002, TT:0.0002, QQ:0.0001, K6s:0.0089, K7s:0.0004, KTs:0.0004, KJs:0.0001, KQs:0.0001, KK:0.2702, AKo:0.5360, A2s:0.0202, A3s:0.0899, A4s:0.1471, A5s:0.2510, A6s:0.0008, A7s:0.0728, A8s:0.0422, A9s:0.0016, ATs:0.0004, AJs:0.2228, AKs:0.8799, AA:0.7643"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@17.7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0034, 43s:0.0001, 44:0.0463, 54s:0.0473, 55:0.0108, A5o:0.0005, 64s:0.0038, 66:0.1193, 76s:0.0291, 86s:0.0220, 88:0.0113, 99:0.0002, T8s:0.0269, ATo:0.0016, J9s:0.0027, JJ:0.0108, AJo:0.0015, Q8s:0.0033, QQ:0.0241, KQo:0.0001, AQo:0.0032, K4s:0.0001, K6s:0.0001, K7s:0.0002, KTs:0.0001, KK:0.4325, AKo:0.0278, A2s:0.0445, A3s:0.0967, A4s:0.0368, A5s:0.0162, A6s:0.0121, A7s:0.0974, A8s:0.0449, A9s:0.0016, AQs:0.0001, AKs:0.0003, AA:0.0575"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0011, 44:0.0095, A4o:0.0012, 54s:0.0011, 55:0.0012, A5o:0.0076, 66:0.0220, 76s:0.0049, 87s:0.0004, JJ:0.0098, AJo:0.0005, QQ:0.0004, K4s:0.0013, K6s:0.0008, K7s:0.0001, K8s:0.0002, K9s:0.0001, KK:0.1002, AKo:0.6624, A2s:0.5151, A3s:0.1583, A4s:0.4596, A5s:0.3642, A6s:0.0293, A7s:0.1222, A8s:0.0162, A9s:0.0003, AKs:0.9180, AA:0.9425"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0002, 99:0.0001, JTs:0.0001, JJ:0.0001, K5s:0.0003, KJs:0.0004, KQs:0.0003, KK:0.0845, AKo:0.0429, A3s:0.0001, A4s:0.0001, A7s:0.0293, A9s:0.0002, ATs:0.0001, AJs:0.1307, AQs:0.1170, AKs:0.1845, AA:0.2475"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 65s:0.0002, 66:0.0004, 77:0.0002, 87s:0.0009, 99:0.0031, T9s:0.0001, TT:0.0009, J9s:0.0002, JTs:0.0001, JJ:0.0012, QJs:0.0002, QQ:0.0174, AQo:0.0115, K5s:0.0001, K8s:0.0001, K9s:0.0001, KTs:0.0003, KJs:0.0007, KK:0.0739, AKo:0.4080, A2s:0.3339, A3s:0.0049, A4s:0.0001, A5s:0.0422, A6s:0.0052, A7s:0.0859, A8s:0.0085, A9s:0.0946, ATs:0.0002, AJs:0.0408, AQs:0.0118, AKs:0.5884, AA:0.7525"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@20",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0025, 43s:0.0008, 44:0.0118, 54s:0.0080, 55:0.0062, 64s:0.0032, 65s:0.0025, 66:0.0693, 76s:0.0293, 86s:0.0057, 87s:0.0029, 88:0.0083, 98s:0.0002, 99:0.0001, T8s:0.0081, ATo:0.0041, J9s:0.0098, JJ:0.0125, AJo:0.0032, Q8s:0.0023, Q9s:0.0054, QQ:0.0200, AQo:0.0356, K4s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0002, KK:0.2427, AKo:0.0068, A2s:0.0339, A3s:0.0010, A4s:0.1306, A5s:0.0732, A6s:0.1229, A7s:0.0167, A8s:0.1094, A9s:0.0020, AQs:0.0001, AKs:0.0025, AA:0.0808"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0188, 33:0.0034, 44:0.0037, A4o:0.0001, 54s:0.0043, 55:0.0029, A5o:0.0003, 64s:0.0016, 65s:0.0020, 66:0.0640, 76s:0.0477, 86s:0.0002, 87s:0.0053, 88:0.0039, 98s:0.0001, 99:0.0001, T8s:0.0024, ATo:0.0066, J9s:0.0006, JJ:0.0081, AJo:0.0006, Q8s:0.0002, QQ:0.0068, AQo:0.0016, K4s:0.0005, K6s:0.0024, K7s:0.0004, KK:0.2809, AKo:0.6769, A2s:0.2852, A3s:0.0931, A4s:0.2249, A5s:0.4260, A6s:0.0071, A7s:0.1591, A8s:0.0855, A9s:0.0008, AKs:0.9122, AA:0.9192"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 99:0.0003, TT:0.0001, JJ:0.0013, Q8s:0.0001, QJs:0.0001, QQ:0.0012, KJs:0.0001, KK:0.9808, AKo:0.0001, A3s:0.0003, A8s:0.0001, A9s:0.0001, AQs:0.0003, AKs:0.0760, AA:0.9992"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@10|BB:4BET@74.75",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5326, AKo:0.2333, AKs:0.9130, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0102, K2o:0.0128, A2o:0.0377, K3o:0.0003, A3o:0.2281, 44:0.0001, K4o:0.0117, A4o:0.0382, 53s:0.0001, 55:0.0005, K5o:0.0010, A5o:0.2599, 63s:0.0009, 64s:0.0004, 77:0.0249, A7o:0.0059, K8o:0.0022, A9o:0.0005, TT:0.0011, ATo:0.0360, J6s:0.0001, JJ:0.0001, KJo:0.0001, AJo:0.0002, Q2s:0.0001, Q3s:0.0001, QQ, KQo:0.6822, AQo, K2s:0.2247, K3s:0.3199, K4s:0.1256, K5s:0.2128, K6s:0.2900, K7s:0.0870, K9s:0.0026, KTs:0.1195, KJs:0.2347, KQs:0.9165, KK, AKo, A2s:0.9180, A3s:0.7712, A4s:0.7969, A5s:0.8666, A6s:0.9470, A7s:0.7727, A8s:0.7061, A9s:0.3390, ATs:0.6585, AJs:0.1681, AQs:0.9932, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9994, 32s:0.0002, 33:0.9984, 42s:0.7992, 43s:0.8208, 44:0.9992, 54o:0.5287, 52s:0.9551, 53s:0.9820, 54s:0.9866, 55:0.9969, 65o:0.9303, 75o:0.0008, 63s:0.5365, 64s:0.9241, 65s:0.9864, 66, 76o:0.4546, 74s:0.6521, 75s:0.9622, 76s:0.9233, 77:0.9617, 84s:0.0099, 85s:0.9077, 86s:0.9709, 87s:0.9960, 88, 93s:0.0003, 95s:0.6559, 96s:0.9097, 97s:0.9913, 98s:0.9900, 99, T2s:0.0002, T6s:0.0507, T7s:0.5573, T8s:0.9593, T9s:0.9846, TT, ATo:0.6357, J2s:0.0004, J3s:0.0006, J7s:0.5717, J8s:0.6638, J9s:0.9660, JTs:0.9926, JJ:0.9998, QJo:0.2572, KJo:0.9593, AJo:0.9923, Q2s:0.0011, Q3s:0.3899, Q4s:0.6925, Q5s:0.1246, Q6s:0.7606, Q7s:0.7642, Q8s:0.7560, Q9s:0.7959, QTs:0.8756, QJs:0.9929, QQ:0.7608, KQo:0.5299, AQo:0.0140, K2s:0.1165, K3s:0.6526, K4s:0.2468, K5s:0.9669, K6s:0.2302, K7s:0.4667, K8s:0.8910, K9s:0.9883, KTs:0.9941, KJs:0.9807, KQs:0.4437, AKo:0.0001, A2s:0.4829, A3s:0.5367, A4s:0.5600, A5s:0.0511, A6s:0.7381, A7s:0.7868, A8s:0.5320, A9s:0.9481, ATs:0.9891, AJs:0.9940, AQs:0.7589, AKs:0.0005"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0037, A2o:0.0666, 33:0.0011, K3o:0.0214, A3o:0.1063, 42s:0.0018, 43s:0.1190, 54o:0.0389, K4o:0.0189, A4o:0.3862, 55:0.0020, 65o:0.0049, K5o:0.0030, A5o:0.2899, 63s:0.0002, 64s:0.0413, Q6o:0.0005, K6o:0.0369, 76s:0.0241, 77:0.0380, K7o:0.0007, A7o:0.0702, 86s:0.0202, 87s:0.0003, Q8o:0.0016, K8o:0.0003, A8o:0.0015, T6s:0.0038, T8s:0.0133, QTo:0.0012, KTo:0.0035, ATo:0.0854, J7s:0.0001, Q2s:0.0069, Q4s:0.0006, Q5s:0.0794, Q6s:0.0336, Q8s:0.0262, Q9s:0.0630, QTs:0.1028, QJs:0.0005, QQ:0.2392, KQo:0.4691, AQo:0.9859, K2s:0.5660, K3s:0.0482, K4s:0.7206, K5s:0.0295, K6s:0.7661, K7s:0.5149, K8s:0.0731, K9s:0.0012, KTs:0.0034, KQs:0.5554, KK, AKo, A2s:0.4867, A3s:0.4627, A4s:0.4371, A5s:0.9470, A6s:0.2529, A7s:0.2085, A8s:0.4675, A9s:0.0495, ATs:0.0104, AJs:0.0043, AQs:0.2411, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.1205, 65s:0.1186, 66:0.1521, 76s:0.1015, 77:0.1313, 88:0.1702, 99:0.1197, JTs:0.0435, JJ:0.0692, QQ:0.8959, AQo:0.0590, K9s:0.0004, KTs:0.2692, KJs:0.2679, KQs:0.0158, KK:0.9089, AKo:0.2965, A3s:0.0120, A4s:0.2563, A5s:0.2386, A6s:0.0074, A7s:0.0221, A8s:0.0203, A9s:0.1378, ATs:0.0449, AJs:0.1923, AQs:0.8370, AKs:0.2162"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0320, 88:0.0013, A8o:0.0112, 98s:0.0001, A9o:0.0548, TT:0.0004, ATo:0.0335, AJo:0.0058, QQ:0.0001, AQo:0.0815, K6s:0.0098, K8s:0.0015, KTs:0.0003, KJs:0.0009, KK:0.0156, AKo:0.0024, A2s:0.2605, A3s:0.0797, A4s:0.0465, A5s:0.1680, A6s:0.2470, A7s:0.7816, A8s:0.1979, A9s:0.4313, ATs:0.1132, AJs:0.2137, AQs:0.1103, AKs:0.5625, AA:0.7761"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "55:0.0003, A5o:0.0121, 66:0.0001, A8o:0.0142, 98s:0.0012, A9o:0.0174, KTo:0.0004, ATo:0.0218, JJ:0.0001, AJo:0.0002, QTs:0.0002, QQ:0.0001, AQo:0.0272, K6s:0.0028, K9s:0.0130, KTs:0.0091, KJs:0.0199, KK:0.0146, AKo:0.0116, A2s:0.3456, A3s:0.0105, A4s:0.0115, A5s:0.0272, A6s:0.0069, A7s:0.0186, A8s:0.0263, A9s:0.0162, ATs:0.0165, AJs:0.0807, AQs:0.0096, AKs:0.0128, AA:0.2238"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0001, KK:0.0609, AKo:0.6894, AKs:0.2085"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0001, 33:0.0006, 44:0.2162, 54s:0.0188, 55:0.3472, 65s:0.0807, 66:0.6296, 76s:0.1005, 77:0.0169, 88:0.5309, 99:0.3251, T8s:0.0196, T9s:0.0020, TT:0.1881, J9s:0.0033, JTs:0.0017, JJ:0.3570, QQ:0.9994, AQo:0.4540, K6s:0.0382, K9s:0.0001, KTs:0.1887, KJs:0.2775, KQs:0.9813, KK:0.4480, AKo:0.0003, A2s:0.0129, A3s:0.1021, A4s:0.0838, A5s:0.1973, A6s:0.1041, A7s:0.0344, A8s:0.4552, A9s:0.0772, ATs:0.9008, AJs:0.0580, AQs:0.9617"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "98s:0.0001, T9s:0.0002, KJo:0.0127, AJo:0.0012, K5s:0.0014, K6s:0.0027, K7s:0.0026, K8s:0.0368, K9s:0.1283, KTs:0.0136, KJs:0.0718, KQs:0.0003, KK:0.1425, AKo:0.0003, A2s:0.0008, A3s:0.0199, A4s:0.0004, A5s:0.0050, A6s:0.0189, A7s:0.0009, A8s:0.0018, A9s:0.0070, ATs:0.0033, AJs:0.0182, AKs:0.0002"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "54s:0.0001, 98s:0.0001, T8s:0.0001, KJo:0.0052, AJo:0.0013, KQo:0.0008, AQo:0.0002, K5s:0.0036, K6s:0.0035, K7s:0.0015, K8s:0.0248, K9s:0.0815, KTs:0.0544, KJs:0.0661, KQs:0.0002, KK:0.1092, AKo:0.0010, A2s:0.0025, A3s:0.0007, A4s:0.0009, A5s:0.0006, A6s:0.0057, A7s:0.0012, A8s:0.0004, A9s:0.0033, ATs:0.0020, AJs:0.0017, AQs:0.0002, AKs:0.0027"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 77:0.0008, TT:0.0003, AKo:0.7362, A4s:0.0001, A8s:0.0001, ATs:0.0004, AJs:0.0002, AQs:0.0002, AKs:0.0129"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.0363, 66:0.0788, 76s:0.0242, 88:0.0758, 99:0.0161, TT:0.0023, JJ:0.0096, QQ:0.5145, AQo:0.0094, K5s:0.0001, KJs:0.1416, KK:0.1115, AKo:0.0001, A4s:0.0105, A5s:0.0172, A7s:0.0319, A8s:0.0793, ATs:0.0015, AJs:0.0001, AQs:0.9900, AKs:0.0013, AA:0.0004"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0054, A5o:0.0025, 65s:0.0006, 66:0.0025, 77:0.0027, 87s:0.0003, 88:0.0011, A9o:0.0088, T9s:0.0001, TT:0.0801, ATo:0.0168, JJ:0.0649, AJo:0.0143, QQ:0.0043, AQo:0.0127, K6s:0.0001, KK:0.0030, AKo:0.0038, A2s:0.0531, A3s:0.0476, A4s:0.0747, A5s:0.0783, A6s:0.1423, A7s:0.0220, A8s:0.0974, A9s:0.0610, ATs:0.0758, AJs:0.0038, AQs:0.0031, AKs:0.0001, AA:0.2204"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0069, 87s:0.0006, A8o:0.0018, A9o:0.0336, ATo:0.0394, JJ:0.0037, KJo:0.0001, AJo:0.0351, AQo:0.0040, K5s:0.0011, K6s:0.0003, K7s:0.0008, K9s:0.0002, KJs:0.0009, KK:0.0027, AKo:0.0011, A2s:0.3825, A3s:0.0799, A4s:0.1735, A5s:0.0067, A6s:0.3203, A7s:0.1668, A8s:0.1301, A9s:0.2441, ATs:0.5730, AJs:0.1332, AQs:0.0001, AKs:0.3047, AA:0.7792"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0008, 66:0.0318, 77:0.0019, 87s:0.0013, 88:0.2461, 99:0.0001, JJ:0.0575, AJo:0.0002, K6s:0.1834, K7s:0.0558, KTs:0.0394, KJs:0.1840, KK:0.8828, AKo:0.9950, A3s:0.0426, A4s:0.2074, A5s:0.3220, A6s:0.1290, A7s:0.0854, A8s:0.2945, A9s:0.0374, AJs:0.0004, AQs:0.0003, AKs:0.6939"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@10",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0001, 33:0.0001, 44:0.1990, 54s:0.0131, 55:0.0954, 65s:0.2498, 66:0.3145, 76s:0.0614, 77:0.0986, 88:0.0681, 99:0.2159, TT:0.1155, JJ:0.1282, QJs:0.0001, QQ:0.9943, AQo:0.2395, K6s:0.0008, KTs:0.2693, KJs:0.0347, KQs:0.6809, KK:0.0020, AKo:0.0002, A3s:0.0298, A4s:0.0041, A5s:0.0064, A7s:0.0001, A8s:0.1079, A9s:0.0959, ATs:0.3931, AJs:0.0830, AQs:0.9636"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "65s:0.0001, ATo:0.0003, KJo:0.0002, QTs:0.0001, KQo:0.0001, AQo:0.0006, K6s:0.0001, K8s:0.0015, K9s:0.0027, KTs:0.0027, KJs:0.0002, KK:0.0022, AKo:0.0001, A3s:0.0007, A4s:0.0001, A5s:0.0001, A8s:0.0001, ATs:0.0005, AJs:0.0005, AQs:0.0001, AKs:0.0005"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "77:0.0006, TT:0.0001, ATo:0.0002, QQ:0.0001, KQo:0.0007, AQo:0.0002, K5s:0.0003, K6s:0.0002, K9s:0.0014, KJs:0.0020, KK:0.0027, AKo:0.0005, A3s:0.0004, A7s:0.0004, A9s:0.0012, ATs:0.0001, AJs:0.0001, AKs:0.0006"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0017, 66:0.0680, 76s:0.0005, 77:0.1346, 88:0.2242, 99:0.0675, TT:0.1016, JJ:0.1017, QQ:0.0051, K6s:0.0011, K8s:0.0037, K9s:0.2304, KTs:0.0682, KJs:0.0480, KQs:0.0494, KK:0.6927, AKo:0.7370, A2s:0.1341, A3s:0.1281, A4s:0.1026, A5s:0.1645, A6s:0.1728, A7s:0.0977, A8s:0.0518, A9s:0.0967, ATs:0.1979, AJs:0.8544, AKs:0.0147"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.3380, K3o:0.0002, A3o:0.0755, A4o:0.0139, 53s:0.0002, A5o:0.0251, A6o:0.0011, A7o:0.0902, A8o:0.0122, A9o:0.0117, KTo:0.0001, ATo:0.0018, QQ:0.0001, AQo:0.1305, K3s:0.0012, K4s:0.0005, K5s:0.0004, K7s:0.0010, K9s:0.0007, KTs:0.0003, KJs:0.0002, KK:0.3964, AKo:0.0761, A2s:0.1554, A3s:0.8774, A4s:0.0454, A5s:0.1814, A6s:0.0735, A7s:0.3497, A8s:0.1315, A9s:0.1038, ATs:0.0171, AJs:0.0461, AQs:0.1500, AKs:0.4261, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KJs:0.0001, KQs:0.0001, KK:0.6036, AKo:0.9238, A3s:0.0001, A5s:0.0002, A9s:0.0003, AJs:0.0002, AKs:0.5738"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0479, A3o:0.1917, A4o:0.1458, A5o:0.2706, A6o:0.0028, A7o:0.0165, 84s:0.0003, 88:0.0001, A8o:0.0209, ATo:0.0002, QQ:0.0001, AQo:0.0267, K2s:0.0066, K3s:0.0005, K6s:0.0045, K8s:0.0001, KTs:0.0004, KJs:0.0001, KK:0.6155, AKo:0.0985, A2s:0.2328, A3s:0.1113, A4s:0.6818, A5s:0.3031, A6s:0.1130, A7s:0.4031, A8s:0.1886, A9s:0.0364, ATs:0.0001, AJs:0.1376, AQs:0.8337, AKs:0.4946, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AJo:0.0001, KK:0.3551, AKo:0.9015, A3s:0.0001, A6s:0.0002, A9s:0.0001, AKs:0.5053"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0009, 55:0.8232, 65s:0.2011, 66:0.9769, 76s:0.3293, 77:0.9200, 87s:0.0794, 88, 98s:0.0049, 99:0.9989, T8s:0.0117, T9s:0.1377, TT:0.9967, ATo:0.0003, J9s:0.6996, JTs:0.1808, JJ, Q9s:0.0233, QTs:0.1155, QJs:0.8980, QQ, AQo:0.7613, K5s:0.1424, K6s:0.3991, K7s:0.0208, K8s:0.0025, K9s:0.0543, KTs:0.8404, KJs:0.9808, KQs:0.9918, KK:0.9991, A2s:0.0027, A3s:0.0886, A4s:0.1668, A5s:0.7510, A7s:0.8337, A8s:0.5608, A9s:0.9245, ATs, AJs:0.9964, AQs:0.9997, AKs:0.0001"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0549, 87s:0.0001, A8o:0.0025, A9o:0.0009, ATo:0.0080, AJo:0.0680, AQo:0.2385, K5s:0.0002, K6s:0.0001, K8s:0.0001, KTs:0.0001, KJs:0.0001, KK:0.0009, AKo:0.0055, A2s:0.8430, A3s:0.7021, A4s:0.6620, A5s:0.1892, A6s:0.7590, A7s:0.0859, A8s:0.4291, A9s:0.0607, AJs:0.0014, AQs:0.0003, AKs:0.5146, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.9945, AKs:0.4853"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0048, 54s:0.0021, 55:0.0639, 65s:0.0064, 66:0.0124, 76s:0.0001, 77:0.1271, 88:0.0468, 98s:0.0008, 99:0.1004, T8s:0.0001, T9s:0.0007, TT:0.0793, JJ:0.1116, QQ:0.0002, AQo:0.3449, K6s:0.0001, KK:0.2991, A2s:0.0832, A3s:0.0498, A4s:0.0994, A5s:0.2144, A6s:0.0087, A7s:0.1899, A8s:0.0697, A9s:0.0916, ATs:0.0007, AJs:0.0001, AQs:0.0361, AKs:0.0007, AA:0.2773"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0002, 77:0.0099, 87s:0.0001, 88:0.0004, 99:0.0001, TT:0.0139, JJ:0.0004, KK:0.0011, AKo:0.2622, A2s:0.4034, A3s:0.6393, A4s:0.6904, A5s:0.4901, A6s:0.0708, A7s:0.2975, A8s:0.0394, A9s:0.0109, AKs:0.9835, AA:0.7227"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.3002, AKo:0.2622, AKs:0.9842, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1692, AKo:0.0383, A5s:0.0007, A7s:0.0011, A9s:0.0003, ATs:0.0136, AJs:0.0116, AQs:0.1339, AKs:0.0398, AA:0.1250"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0003, 98s:0.0001, T9s:0.0037, ATo:0.0001, AJo:0.0160, QQ:0.0001, AQo:0.0001, K7s:0.0002, K8s:0.0001, KTs:0.0005, KQs:0.0001, KK:0.8226, AKo:0.8895, A2s:0.0350, A3s:0.1475, A4s:0.0339, A5s:0.4397, A6s:0.0474, A7s:0.3294, A8s:0.0159, A9s:0.0128, ATs:0.0006, AJs:0.3240, AQs:0.0032, AKs:0.9339, AA:0.8750"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0014, 54s:0.0002, 55:0.0337, 65s:0.0064, 66:0.0026, 76s:0.0257, 77:0.0311, 87s:0.0010, 88:0.0098, 98s:0.0089, 99:0.0111, T9s:0.0002, TT:0.0414, JJ:0.0395, QJs:0.0003, QQ:0.0002, AQo:0.1116, K5s:0.0004, K7s:0.0005, K9s:0.0028, KTs:0.0002, KQs:0.0002, KK:0.0816, A2s:0.0229, A3s:0.0007, A4s:0.1008, A5s:0.0098, A6s:0.0021, A7s:0.1679, A8s:0.0090, A9s:0.0179, ATs:0.0004, AQs:0.0361, AKs:0.0003, AA:0.1676"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0006, 66:0.0006, 76s:0.0001, 87s:0.0017, 88:0.0003, 98s:0.0007, 99:0.0001, TT:0.0001, K4s:0.0002, K5s:0.0001, K6s:0.0387, K7s:0.0098, K8s:0.0037, K9s:0.0046, KTs:0.0004, KK:0.2186, AKo:0.2622, A2s:0.1727, A3s:0.2997, A4s:0.5042, A5s:0.6869, A6s:0.2457, A7s:0.2148, A8s:0.0411, A9s:0.0290, ATs:0.0001, AJs:0.0001, AKs:0.9839, AA:0.8324"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0001, TT:0.0001, JJ:0.0005, QQ:0.0001, KQs:0.0002, KK:0.9986, AKo:0.4152, A8s:0.0001, ATs:0.0001, AJs:0.0001, AKs:0.7871, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK:0.3002, AKo:0.2253, AKs:0.9504, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QTs:0.0001, KTs:0.0001, KK:0.1682, AKo:0.0872, A4s:0.0036, A5s:0.0020, A6s:0.0011, A9s:0.0006, AJs:0.0486, AQs:0.0716, AKs:0.0132, AA:0.0795"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 87s:0.0003, 88:0.0004, 99:0.0002, A9o:0.0001, J9s:0.0015, K6s:0.0013, K9s:0.0056, KTs:0.0040, KQs:0.0002, KK:0.5311, AKo:0.7300, A2s:0.0102, A3s:0.3270, A4s:0.1039, A5s:0.1291, A6s:0.0200, A7s:0.0054, A9s:0.1046, ATs:0.3080, AJs:0.0002, AQs:0.0717, AKs:0.9642, AA:0.9205"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@18",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0330, 55:0.0130, 65s:0.0379, 66:0.0061, 76s:0.0087, 77:0.0216, 88:0.0198, 98s:0.0003, 99:0.0021, T9s:0.0002, TT:0.0007, ATo:0.0094, JJ:0.0367, KJo:0.0005, AJo:0.0014, QQ:0.0001, AQo:0.0739, K6s:0.0171, K7s:0.0070, KK:0.1869, AKo:0.0001, A2s:0.0162, A3s:0.0923, A4s:0.0207, A5s:0.0732, A6s:0.0002, A7s:0.0746, A8s:0.0070, A9s:0.0067, ATs:0.0005, AJs:0.0001, AQs:0.0274, AKs:0.0079, AA:0.1890"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0026, 55:0.0001, 65s:0.0003, 66:0.0009, 77:0.0174, 87s:0.0006, 88:0.0109, 99:0.0025, TT:0.0128, ATo:0.0001, J9s:0.0002, JJ:0.0235, AJo:0.0001, K5s:0.0001, K6s:0.0292, K7s:0.0059, K9s:0.0037, KTs:0.0001, KK:0.1133, AKo:0.2621, A2s:0.4154, A3s:0.1363, A4s:0.4269, A5s:0.3909, A6s:0.0101, A7s:0.6844, A8s:0.0208, A9s:0.0014, AKs:0.9762, AA:0.8110"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0009, KTs:0.0001, KK:0.9996, AKo:0.2373, A4s:0.0001, A5s:0.0001, A7s:0.0001, A8s:0.0001, A9s:0.0002, ATs:0.0001, AQs:0.0002, AKs:0.1519, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@74.75",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.3002, AKo:0.1127, AKs:0.5411, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0080, 52o:0.0001, 33:0.0001, 43o:0.0001, A3o:0.0008, 44:0.0002, 53s:0.0023, 54s:0.0059, 55:0.0039, K5o:0.0004, 63s:0.0003, 65s:0.0676, 66:0.0036, K6o:0.0001, 76s:0.0736, 77:0.0194, K7o:0.0003, A7o:0.0003, 86s:0.0051, 87s:0.0040, 88:0.5215, K8o:0.0009, 92s:0.0009, 93s:0.0001, 95s:0.0002, 99:0.5126, K9o:0.0002, A9o:0.0011, T2s:0.0001, T6s:0.0003, T7s:0.0002, T8s:0.0002, TT:0.5100, KTo:0.0022, ATo:0.0005, J4s:0.0003, JJ:0.9841, KJo:0.0001, Q3s:0.0001, Q5s:0.0005, Q6s:0.0005, Q7s:0.0003, Q8s:0.0002, Q9s:0.0002, QTs:0.0112, QJs:0.0005, QQ, KQo:0.4735, AQo:0.9886, K2s:0.1887, K3s:0.0891, K4s:0.0589, K5s:0.8254, K6s:0.1284, K7s:0.0104, K8s:0.2573, K9s:0.1577, KTs:0.3546, KJs:0.5920, KQs:0.9601, KK, AKo, A2s:0.8714, A3s:0.2819, A4s:0.7888, A5s:0.7779, A6s:0.4334, A7s:0.6803, A8s:0.3315, A9s:0.0922, ATs:0.5428, AJs:0.9076, AQs:0.9985, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0051, A2o:0.0021, 32s:0.0002, 33:0.0085, K3o:0.0315, A3o:0.0279, 43s:0.0317, K4o:0.0007, A4o:0.1284, 54s:0.0080, 55:0.0018, K5o:0.0124, A5o:0.0112, 66:0.0741, K6o:0.0151, 73s:0.0001, 76s:0.0022, 77:0.0095, K7o:0.0147, 85s:0.0002, 87s:0.0014, 88:0.0936, K8o:0.0002, A8o:0.0001, 93s:0.0001, 99:0.0139, A9o:0.0001, QTo:0.0001, J3s:0.0001, AJo:0.0001, Q3s:0.0006, Q4s:0.0001, Q8s:0.0003, QQ:0.9989, KQo:0.9925, AQo:0.9919, K2s:0.3777, K3s:0.2583, K4s:0.0384, K5s:0.3136, K6s:0.7236, K7s:0.3599, K8s:0.4262, K9s:0.3128, KTs:0.0453, KJs:0.0049, KQs:0.9900, KK, AKo, A2s:0.7759, A3s:0.9006, A4s:0.9471, A5s:0.8676, A6s:0.2202, A7s:0.6835, A8s:0.0999, A9s:0.5935, ATs:0.2596, AJs:0.3264, AQs:0.9892, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9897, 32s:0.5660, 33, 42s:0.5536, 43s:0.9873, 44:0.9983, 54o:0.5016, 52s:0.7884, 53s:0.9813, 54s:0.7623, 55:0.9711, 65o:0.3908, 63s:0.8784, 64s:0.9480, 65s:0.9934, 66:0.9661, 76o:0.0931, 72s:0.0002, 73s:0.1030, 74s:0.7384, 75s:0.9963, 76s:0.9468, 77, 84s:0.0070, 85s:0.4772, 86s:0.9739, 87s:0.9555, 88, 93s:0.0001, 94s:0.0005, 95s:0.0036, 96s:0.7833, 97s:0.9796, 98s:0.9588, 99:0.9506, T2s:0.0002, T4s:0.0002, T5s:0.0002, T6s:0.1398, T7s:0.3603, T8s:0.6874, T9s:0.9424, TT:0.9714, J4s:0.0002, J6s:0.0273, J8s:0.8086, J9s:0.5836, JTs:0.9928, JJ, KJo:0.0425, AJo:0.8939, Q6s:0.0048, Q7s:0.4121, Q8s:0.7431, Q9s:0.8666, QTs:0.9918, QJs:0.9810, QQ:0.7085, KQo:0.4980, AQo:0.3524, K2s:0.2683, K3s:0.0103, K4s:0.1105, K5s:0.2365, K6s:0.4591, K7s:0.5242, K8s:0.7807, K9s:0.5627, KTs:0.8901, KJs:0.9022, KQs:0.9536, AKo:0.0001, A2s:0.9048, A3s:0.4471, A4s:0.0900, A5s:0.5314, A6s:0.8572, A7s:0.7582, A8s:0.9170, A9s:0.5585, ATs:0.9965, AJs:0.9974, AQs:0.9851, AKs:0.0001"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.0100, K2o:0.0005, A2o:0.0047, 43o:0.0002, K3o:0.0036, A3o:0.1793, 42s:0.0041, 43s:0.0005, 44:0.0002, K4o:0.0088, A4o:0.2105, 53s:0.0005, 54s:0.2042, 55:0.0289, 65o:0.1773, K5o:0.0018, A5o:0.0354, 63s:0.0115, 64s:0.0044, 65s:0.0001, 66:0.0320, K6o:0.0052, A6o:0.0493, 73s:0.0002, 74s:0.0003, K7o:0.0006, A7o:0.0386, 84s:0.0001, 85s:0.0423, 86s:0.0197, 87s:0.0006, K8o:0.0002, A8o:0.0092, 96s:0.0001, 97s:0.0007, 99:0.0488, Q9o:0.0003, K9o:0.0001, T4s:0.0059, T7s:0.0001, T8s:0.0926, T9s:0.0118, TT:0.0277, KTo:0.0062, ATo:0.0007, J9s:0.0007, KJo:0.0001, AJo:0.0005, Q5s:0.0012, Q6s:0.0253, Q7s:0.0289, Q8s:0.0006, Q9s:0.0022, QJs:0.0094, QQ:0.2914, KQo:0.4976, AQo:0.6455, K2s:0.1608, K3s:0.3271, K4s:0.8658, K5s:0.6981, K6s:0.4065, K7s:0.3792, K8s:0.0733, K9s:0.3320, KTs:0.0799, KJs:0.0549, KQs:0.0451, KK, AKo, A2s:0.0377, A3s:0.5434, A4s:0.9080, A5s:0.4650, A6s:0.1260, A7s:0.2371, A8s:0.0796, A9s:0.4185, AJs:0.0003, AQs:0.0136, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.0718, 76s:0.0016, 77:0.0509, 88:0.1338, 98s:0.0001, TT:0.0020, J9s:0.0146, JJ:0.0040, QQ:0.1933, KQs:0.0409, KK:0.3468, AKo:0.0712, A4s:0.1275, A5s:0.0400, A6s:0.0498, A7s:0.0024, A8s:0.0064, A9s:0.0186, ATs:0.0014, AJs:0.2050, AQs:0.6090, AKs:0.0656, AA:0.0001"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0013, A8o:0.0006, 99:0.0003, A9o:0.0573, T8s:0.0014, T9s:0.0002, ATo:0.0131, J8s:0.0002, J9s:0.0008, AJo:0.0009, QQ:0.0005, KQo:0.0009, AQo:0.1560, K5s:0.0009, K6s:0.0007, K9s:0.0002, KJs:0.0010, KQs:0.0074, KK:0.0042, AKo:0.1099, A2s:0.1742, A3s:0.0138, A4s:0.0007, A5s:0.1890, A6s:0.2980, A7s:0.1938, A8s:0.0966, A9s:0.0348, ATs:0.1651, AJs:0.1314, AQs:0.0734, AKs:0.0698, AA:0.5936"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0064, 77:0.0017, A8o:0.0008, 99:0.0003, A9o:0.0310, TT:0.0007, ATo:0.0009, JJ:0.0001, AJo:0.0466, AQo:0.0026, K5s:0.0003, K6s:0.0002, KTs:0.0002, KJs:0.0001, KQs:0.0014, KK:0.0187, AKo:0.0596, A2s:0.1873, A3s:0.1143, A4s:0.0042, A5s:0.1125, A6s:0.1116, A7s:0.0101, A8s:0.0383, A9s:0.2780, ATs:0.1368, AJs:0.1334, AQs:0.0285, AKs:0.0672, AA:0.4063"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KJs:0.0001, KQs:0.0001, KK:0.6304, AKo:0.7593, A2s:0.0205, A4s:0.0871, A5s:0.3089, A6s:0.0023, A9s:0.0386, AJs:0.0001, AKs:0.7974"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.0001, 44:0.0282, 54s:0.0060, 55:0.1878, 65s:0.2494, 66:0.1506, 76s:0.0662, 77:0.1933, 88:0.2860, 98s:0.0001, 99:0.2577, T9s:0.1179, TT:0.2319, JTs:0.0180, JJ:0.2198, QTs:0.0005, QQ:0.9897, K6s:0.0001, KTs:0.0030, KJs:0.1196, KQs:0.5808, KK:0.2569, AKo:0.4474, A2s:0.0003, A3s:0.1043, A4s:0.0082, A5s:0.3353, A6s:0.0577, A7s:0.0074, A8s:0.0015, A9s:0.1538, ATs:0.6862, AJs:0.0424, AQs:0.9708, AKs:0.0427"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0002, AJo:0.0003, KQo:0.0008, AQo:0.0002, K6s:0.0041, K8s:0.0004, K9s:0.0163, KTs:0.0516, KJs:0.0447, KQs:0.0038, KK:0.0303, AKo:0.0409, A3s:0.0003, A5s:0.0002, A6s:0.0003, A8s:0.0017, A9s:0.0317, ATs:0.0009, AJs:0.0392, AQs:0.0003, AKs:0.0361"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "66:0.0003, AJo:0.0025, QQ:0.0001, KQo:0.0129, AQo:0.0273, K6s:0.0030, K8s:0.0006, K9s:0.0263, KTs:0.1196, KJs:0.1992, KQs:0.0214, KK:0.0840, AKo:0.0712, A5s:0.0011, A8s:0.0007, A9s:0.0091, ATs:0.0009, AJs:0.0882, AQs:0.0002, AKs:0.0015"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.0188, AKs:0.0028"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.0037, 65s:0.0774, 66:0.0579, 77:0.0184, 88:0.0248, 99:0.0009, T8s:0.0001, TT:0.0040, QJs:0.0002, QQ:0.4380, AQo:0.0495, K9s:0.0014, KTs:0.0010, KQs:0.1331, KK:0.2489, AKo:0.0079, A3s:0.0135, A4s:0.0426, A5s:0.0372, A7s:0.0004, A8s:0.0004, A9s:0.0004, ATs:0.1117, AJs:0.0025, AQs:0.8102, AKs:0.0172, AA:0.0002"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0063, 65s:0.0011, A8o:0.0003, 98s:0.0010, A9o:0.0010, T8s:0.0005, ATo:0.0156, AJo:0.0149, QTs:0.0002, AQo:0.0315, K4s:0.0001, K6s:0.0044, KTs:0.0064, KJs:0.0011, KQs:0.0131, KK:0.0080, AKo:0.0107, A2s:0.0482, A3s:0.0135, A4s:0.1352, A5s:0.0332, A6s:0.1217, A7s:0.3338, A8s:0.4374, A9s:0.3480, ATs:0.0484, AJs:0.0370, AQs:0.0218, AKs:0.1384, AA:0.5034"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0887, 98s:0.0019, 99:0.0001, A9o:0.0064, T8s:0.0001, T9s:0.0003, KTo:0.0277, ATo:0.0085, KJo:0.0027, AJo:0.0058, QQ:0.0019, AQo:0.0018, K4s:0.0010, K5s:0.0814, K6s:0.0305, K7s:0.1503, K8s:0.0192, K9s:0.1116, KTs:0.0748, KJs:0.0096, KQs:0.0022, KK:0.3181, AKo:0.0038, A2s:0.1337, A3s:0.0034, A4s:0.0930, A5s:0.5168, A6s:0.0059, A7s:0.0197, A8s:0.0448, A9s:0.0200, ATs:0.2719, AJs:0.4323, AQs:0.0079, AKs:0.1742, AA:0.4962"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0001, 98s:0.0001, T8s:0.0001, QQ:0.0001, KJs:0.0001, KK:0.4250, AKo:0.9775, A2s:0.0002, A3s:0.0002, A7s:0.0002, A8s:0.0002, A9s:0.0002, AJs:0.0002, AQs:0.0001, AKs:0.6702, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@10",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.0001, 44:0.0080, 54s:0.0293, 55:0.1171, 65s:0.2493, 66:0.1163, 76s:0.0176, 77:0.3542, 88:0.1666, 99:0.0810, TT:0.1288, JTs:0.0002, JJ:0.1926, QQ:0.9883, AQo:0.2290, KQs:0.7164, KK:0.1852, AKo:0.0072, A3s:0.0292, A4s:0.0027, A5s:0.0776, A6s:0.0318, A7s:0.0002, A8s:0.0034, A9s:0.4310, ATs:0.5007, AJs:0.0488, AQs:0.9873, AKs:0.0028"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "T9s:0.0001, TT:0.0001, AJo:0.0004, QJs:0.0003, AQo:0.0001, K6s:0.0001, K9s:0.0009, KTs:0.0149, KJs:0.0232, KQs:0.0031, KK:0.0314, AKo:0.0062, A4s:0.0001, A5s:0.0037, A6s:0.0003, A7s:0.0001, A8s:0.0017, A9s:0.0046, ATs:0.0088, AJs:0.0045, AQs:0.0002, AKs:0.0012"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "88:0.0074, 99:0.0018, KQo:0.0022, K6s:0.0029, K8s:0.0003, K9s:0.0178, KTs:0.1328, KJs:0.0120, KQs:0.0001, KK:0.0778, AKo:0.0057, A3s:0.0006, A5s:0.0043, A6s:0.0037, A8s:0.0098, A9s:0.0174, ATs:0.0039, AJs:0.0261"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0008, 99:0.2180, TT:0.0887, KK:0.0768, AKo:0.5593, ATs:0.0001, AKs:0.0792"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0681, 65s:0.0008, 66:0.0245, 77:0.0043, 87s:0.0011, 88:0.0049, 99:0.0144, TT:0.0028, J9s:0.0021, JTs:0.0001, JJ:0.0183, Q9s:0.0001, QQ:0.4578, K7s:0.0001, K8s:0.0001, KQs:0.0768, KK:0.0420, AKo:0.0013, A3s:0.0006, A4s:0.0001, A5s:0.0240, A6s:0.0033, A7s:0.0011, A8s:0.0017, ATs:0.0145, AJs:0.0727, AQs:0.3991, AKs:0.0019"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "55:0.0009, A5o:0.0182, 65s:0.0017, 87s:0.0004, A8o:0.0066, 98s:0.0001, 99:0.0001, A9o:0.0109, TT:0.0001, ATo:0.0010, AJo:0.0359, QJs:0.0001, QQ:0.0007, AQo:0.0038, K6s:0.0002, K7s:0.0014, K8s:0.0004, KTs:0.0001, KJs:0.0086, KQs:0.0005, KK:0.0082, AKo:0.0081, A2s:0.3127, A3s:0.7094, A4s:0.2461, A5s:0.2212, A6s:0.1898, A7s:0.2978, A8s:0.4009, A9s:0.2651, ATs:0.4704, AJs:0.4777, AQs:0.0414, AKs:0.3271, AA:0.9983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0004, 77:0.0008, 88:0.0011, 99:0.0006, K6s:0.0144, KK:0.9498, AKo:0.9906, A2s:0.3304, A3s:0.1157, A4s:0.4092, A5s:0.1478, A6s:0.2560, A7s:0.0158, A8s:0.3889, A9s:0.0094, ATs:0.1641, AJs:0.1317, AKs:0.6709, AA:0.0017"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0360, 54s:0.0026, 55:0.2188, 65s:0.1564, 66:0.4043, 76s:0.0730, 77:0.3229, 88:0.8160, 99:0.0571, T8s:0.0005, T9s:0.0859, TT:0.4858, JTs:0.0308, JJ:0.7573, QTs:0.0401, QQ:0.9952, AQo:0.1144, K9s:0.0079, KTs:0.4863, KJs:0.4449, KQs:0.9778, AKo:0.0085, A3s:0.0036, A4s:0.0128, A5s:0.5909, A6s:0.0083, A7s:0.0003, A8s:0.0199, A9s:0.2302, ATs:0.4322, AJs:0.7270, AQs:0.9928, AKs:0.0008"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "77:0.0004, QQ:0.0001, KQo:0.0011, AQo:0.0001, K6s:0.0300, K7s:0.0001, K8s:0.0022, K9s:0.1135, KTs:0.3102, KJs:0.4179, KQs:0.0143, KK:0.3697, AKo:0.0035, A2s:0.0004, A3s:0.0784, A4s:0.0016, A5s:0.0731, A6s:0.0346, A7s:0.0043, A8s:0.0109, A9s:0.0204, ATs:0.0129, AJs:0.0006, AQs:0.0001, AKs:0.0024"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KTs:0.0001, KK:0.0014, AKo:0.5663, AJs:0.0001, AQs:0.0001, AKs:0.0800"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.0003, A2o:0.0007, A3o:0.0096, A4o:0.0152, 53s:0.0001, 66:0.0018, A6o:0.0001, A7o:0.0013, 87s:0.0001, 88:0.0006, 96s:0.0001, 98s:0.0001, 99:0.0597, A9o:0.0077, TT:0.0012, ATo:0.0007, JJ:0.0378, AJo:0.0242, QJs:0.0010, QQ:0.0683, AQo:0.0025, K3s:0.0002, K5s:0.0001, K6s:0.0001, K7s:0.0003, KTs:0.0004, KJs:0.0001, KK:0.0974, AKo:0.0078, A2s:0.0369, A3s:0.2968, A4s:0.1562, A5s:0.1803, A6s:0.0112, A7s:0.3896, A8s:0.1987, A9s:0.3473, ATs:0.0333, AJs:0.3702, AQs:0.1255, AKs:0.1457, AA:0.6064"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "K2o:0.1030, A2o:0.2170, A3o:0.0147, K4o:0.0060, A4o:0.0464, K5o:0.0119, A5o:0.0196, K6o:0.0029, A6o:0.0003, A7o:0.0130, K9o:0.0004, K2s:0.1866, K3s:0.0021, K4s:0.2350, K5s:0.0009, K6s:0.0109, K7s:0.0147, KJs:0.0006, KQs:0.0029, KK:0.6513, AKo:0.2203, A2s:0.3356, A3s:0.0637, A4s:0.1878, A5s:0.1154, A6s:0.0007, A7s:0.0023, A9s:0.0001, ATs:0.0071, AJs:0.0279, AQs:0.0003, AKs:0.0863, AA:0.3936"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.2513, AKo:0.7719, A5s:0.0002, AQs:0.0001, AKs:0.7680"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.1223, A3o:0.0006, 44:0.0001, A4o:0.1517, A5o:0.0365, A6o:0.0403, 75s:0.0001, 76s:0.0001, K7o:0.0006, A7o:0.0073, A8o:0.0020, 96s:0.0001, A9o:0.0004, ATo:0.0002, J5s:0.0001, AJo:0.0134, KQo:0.0002, AQo:0.0157, K2s:0.0018, K6s:0.0001, K8s:0.0180, KTs:0.0001, KK:0.3383, AKo:0.1431, A2s:0.3064, A3s:0.7661, A4s:0.3796, A5s:0.1761, A6s:0.2099, A7s:0.2749, A8s:0.4818, A9s:0.3514, ATs:0.0761, AJs:0.0056, AQs:0.0859, AKs:0.3906, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.6617, AKo:0.8568, A2s:0.0011, A3s:0.0004, A4s:0.0054, A5s:0.0143, A7s:0.0051, A8s:0.0074, ATs:0.0004, AJs:0.0121, AKs:0.6094"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0026, A3o:0.3202, A4o:0.3646, A5o:0.0053, K7o:0.0001, A8o:0.0011, K9o:0.0001, A9o:0.0067, ATo:0.0194, J9s:0.0005, AJo:0.0338, AQo:0.0001, K2s:0.0002, K4s:0.0024, K5s:0.0089, K7s:0.0183, K8s:0.0177, K9s:0.0068, KTs:0.0019, KJs:0.0046, KK:0.9946, AKo:0.3930, A2s:0.3414, A3s:0.5636, A4s:0.5932, A5s:0.1704, A6s:0.6310, A7s:0.0560, A8s:0.3160, A9s:0.1806, ATs:0.1014, AJs:0.3445, AQs:0.3482, AKs:0.0272, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0054, AKo:0.6068, A6s:0.0001, ATs:0.0025, AQs:0.0008, AKs:0.9728"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0010, 55:0.5104, 65s:0.3354, 66:0.5844, 76s:0.5150, 77:0.9494, 87s:0.0010, 88:0.9998, 99:0.9904, T8s:0.0070, T9s:0.5610, TT:0.9997, J9s:0.0396, JTs:0.1752, JJ:0.9994, KJo:0.0001, Q9s:0.0049, QTs:0.0067, QJs:0.1103, QQ, AQo:0.8921, K4s:0.0013, K5s:0.0020, K6s:0.5844, K7s:0.0260, K9s:0.0572, KTs:0.9573, KJs:0.9949, KQs:0.9980, KK:0.9998, A2s:0.0006, A3s:0.0036, A4s:0.2417, A5s:0.1812, A7s:0.3018, A8s:0.3220, A9s:0.6473, ATs:0.9997, AJs:0.9969, AQs, AKs:0.0001"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.0118, 77:0.0023, A8o:0.0019, A9o:0.0003, ATo:0.0189, AJo:0.2471, AQo:0.1060, K6s:0.0001, K8s:0.0001, KTs:0.0005, KJs:0.0001, KK:0.0002, AKo:0.0024, A2s:0.6448, A3s:0.3506, A4s:0.5190, A5s:0.8074, A6s:0.2076, A7s:0.1800, A8s:0.5928, A9s:0.3472, ATs:0.0001, AJs:0.0012, AQs:0.0001, AKs:0.5608, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.9976, AKs:0.4392"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0008, 65s:0.0372, 66:0.3698, 76s:0.0092, 77:0.0478, 88:0.0803, 99:0.0481, T9s:0.0037, TT:0.2010, ATo:0.0001, JTs:0.0005, JJ:0.1899, QQ:0.0046, AQo:0.4654, KK:0.6266, A2s:0.0062, A3s:0.1216, A4s:0.0545, A5s:0.1422, A6s:0.0010, A7s:0.1232, A8s:0.2369, A9s:0.1808, ATs:0.0002, AJs:0.2637, AQs:0.0061, AKs:0.0413, AA:0.4349"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, TT:0.0393, JJ:0.0001, KK:0.0021, AKo:0.4217, A2s:0.2730, A3s:0.1605, A4s:0.9191, A5s:0.1754, A6s:0.1301, A7s:0.6014, A8s:0.1250, A9s:0.0367, AJs:0.0064, AKs:0.8755, AA:0.5651"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.6288, AKo:0.4217, AKs:0.9168, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0019, JJ:0.0006, KK:0.1202, AKo:0.2096, A3s:0.0513, A8s:0.0058, A9s:0.0331, ATs:0.0248, AQs:0.0006, AKs:0.0685, AA:0.2686"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "87s:0.0001, 99:0.0003, TT:0.0001, QQ:0.0001, K6s:0.0004, K9s:0.0001, KK:0.8700, AKo:0.7763, A3s:0.0783, A4s:0.0697, A5s:0.0001, A6s:0.0002, A8s:0.0566, A9s:0.0548, ATs:0.0166, AJs:0.0670, AQs:0.0371, AKs:0.9151, AA:0.7314"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0030, 65s:0.0763, 66:0.1231, 76s:0.0021, 77:0.0575, 88:0.0587, 99:0.0443, T8s:0.0024, T9s:0.0300, TT:0.0318, ATo:0.0119, JTs:0.0009, JJ:0.0920, AJo:0.0001, QQ:0.0044, AQo:0.0385, K5s:0.0065, K7s:0.0041, K9s:0.0004, KTs:0.0002, KJs:0.0095, KK:0.0004, AKo:0.0451, A2s:0.0398, A3s:0.0135, A4s:0.0027, A5s:0.0080, A6s:0.1727, A7s:0.0593, A8s:0.0331, A9s:0.0747, ATs:0.0001, AJs:0.2621, AQs:0.0059, AKs:0.0204, AA:0.2328"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0025, 77:0.0009, 88:0.0003, 99:0.0015, TT:0.0009, ATo:0.0001, JJ:0.0004, AJo:0.0001, K5s:0.0806, K6s:0.0318, K7s:0.0511, K8s:0.0069, K9s:0.0385, KTs:0.0608, KJs:0.0018, KK:0.6284, AKo:0.3766, A2s:0.1954, A3s:0.4505, A4s:0.4459, A5s:0.1724, A6s:0.1278, A7s:0.4643, A8s:0.1029, A9s:0.0028, AJs:0.0021, AKs:0.8964, AA:0.7672"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, TT:0.0001, Q9s:0.0001, QQ:0.0002, KTs:0.0001, KK:0.9691, AKo:0.4588, A4s:0.0002, AJs:0.0005, AKs:0.8579, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.6288, AKo:0.4208, A4s:0.0001, AKs:0.9151, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0011, 99:0.0106, K8s:0.0001, KK:0.4082, AKo:0.1190, A6s:0.0711, A7s:0.0011, A8s:0.3646, ATs:0.0061, AJs:0.0145, AQs:0.1193, AKs:0.2258, AA:0.4058"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0030, A5o:0.0016, 88:0.0001, T8s:0.0002, J9s:0.0001, JJ:0.0006, K9s:0.0002, KTs:0.0002, KK:0.5116, AKo:0.8719, A2s:0.0180, A3s:0.2718, A4s:0.0273, A5s:0.1051, A6s:0.0001, A7s:0.0019, A8s:0.0125, A9s:0.0039, ATs:0.0105, AJs:0.2137, AQs:0.0040, AKs:0.7622, AA:0.5942"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@18",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0034, 55:0.0040, 65s:0.0064, 66:0.0915, 76s:0.0005, 77:0.0252, 87s:0.0004, 88:0.0137, 98s:0.0001, 99:0.0053, T9s:0.0028, TT:0.0989, ATo:0.0002, JJ:0.0483, AJo:0.0002, QTs:0.0016, QJs:0.0001, QQ:0.0043, AQo:0.0524, K7s:0.0028, K8s:0.0002, K9s:0.0002, KTs:0.0012, KJs:0.0003, KK:0.1732, A3s:0.0029, A4s:0.0005, A5s:0.0067, A6s:0.0556, A7s:0.0256, A8s:0.0098, A9s:0.1015, ATs:0.0001, AJs:0.2278, AQs:0.0059, AKs:0.0124, AA:0.1250"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0001, 66:0.0010, 77:0.0020, 99:0.0002, TT:0.0003, ATo:0.0001, K6s:0.0601, K8s:0.0041, K9s:0.0022, KTs:0.0290, KJs:0.0008, KK:0.4544, AKo:0.4217, A2s:0.4672, A3s:0.0479, A4s:0.1175, A5s:0.1270, A6s:0.6808, A7s:0.6276, A8s:0.1105, A9s:0.0155, ATs:0.0001, AJs:0.0090, AKs:0.9043, AA:0.8750"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0001, KK, AQs:0.0002, AKs:0.2669, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.6288, AKo:0.1520, AKs:0.4843, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@11.7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, QJs:0.0001, QQ:0.0003, K6s:0.0005, K8s:0.0005, KK:0.1996, AKo:0.0077, A3s:0.0001, A4s:0.0004, A6s:0.0019, A8s:0.0059, A9s:0.0026, ATs:0.0021, AJs:0.1112, AQs:0.0068, AKs:0.1033, AA:0.0170"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0005, 76s:0.0001, 77:0.0001, 87s:0.0007, 88:0.0001, A8o:0.0008, A9o:0.0011, K6s:0.0003, KTs:0.0001, KJs:0.0004, KK:0.0015, AKo:0.4593, A2s:0.6944, A3s:0.0870, A4s:0.1236, A5s:0.1764, A6s:0.5035, A7s:0.0889, A8s:0.3444, A9s:0.4426, ATs:0.0571, AQs:0.3705, AKs:0.8278, AA:0.9830"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@11.7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0034, 54s:0.0085, 55:0.0058, 65s:0.1192, 66:0.3830, 76s:0.0073, 77:0.1401, 87s:0.0018, 88:0.1304, 98s:0.0006, 99:0.2032, T8s:0.0085, T9s:0.1310, TT:0.2332, ATo:0.0010, JTs:0.0013, JJ:0.1618, AJo:0.0360, QTs:0.0133, QJs:0.0001, QQ:0.0045, AQo:0.2120, K4s:0.0002, K5s:0.0002, K6s:0.0103, K7s:0.0749, K8s:0.0001, K9s:0.1960, KTs:0.0018, KJs:0.0139, KK:0.6217, AKo:0.0656, A2s:0.0002, A3s:0.2061, A4s:0.0011, A5s:0.0519, A6s:0.0522, A7s:0.3709, A8s:0.1176, A9s:0.0742, ATs:0.0001, AJs:0.2413, AQs:0.0056, AKs:0.2250, AA:0.1018"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0007, 65s:0.0002, 66:0.0002, 77:0.0002, 98s:0.0002, T9s:0.0001, TT:0.0001, ATo:0.0317, AJo:0.0017, AQo:0.0012, K8s:0.0002, K9s:0.0015, KTs:0.0001, KK:0.0068, AKo:0.3560, A2s:0.4334, A3s:0.4388, A4s:0.9095, A5s:0.2488, A6s:0.6633, A7s:0.3948, A8s:0.2629, A9s:0.0977, AJs:0.0173, AQs:0.0005, AKs:0.6864, AA:0.8982"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@20",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0141, QJs:0.0001, QQ:0.0008, K4s:0.0005, K5s:0.0001, K7s:0.0141, KK:0.4216, AKo:0.1721, A2s:0.0004, A4s:0.0009, A9s:0.0031, AJs:0.0020, AQs:0.0297, AKs:0.4757, AA:0.1221"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0021, 77:0.0001, 88:0.0001, QJs:0.0001, QQ:0.0001, K7s:0.1828, K9s:0.0082, KTs:0.0009, KJs:0.0104, KQs:0.0338, KK:0.5783, AKo:0.5794, A2s:0.0037, A4s:0.0140, A5s:0.0198, A6s:0.0019, A7s:0.0458, A8s:0.0194, A9s:0.0006, ATs:0.0709, AJs:0.0111, AQs:0.0162, AKs:0.4392, AA:0.8779"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@20",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0030, 66:0.0101, 76s:0.0003, 77:0.0049, 88:0.0041, 99:0.0211, TT:0.0006, JJ:0.0004, AJo:0.0054, QQ:0.0041, KQo:0.0002, AQo:0.0043, K6s:0.0001, K7s:0.0013, KTs:0.0001, KJs:0.0036, KK:0.0318, AKo:0.0283, A2s:0.0001, A3s:0.0002, A4s:0.0037, A5s:0.0001, A6s:0.0020, A7s:0.1361, A8s:0.0059, A9s:0.0077, AJs:0.0136, AQs:0.0037, AKs:0.2003, AA:0.0500"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0061, 87s:0.0002, 88:0.0004, 99:0.0012, T9s:0.0007, TT:0.0161, ATo:0.0009, KJo:0.0002, AJo:0.0007, KQo:0.0008, K4s:0.0002, K5s:0.0294, K6s:0.1271, K7s:0.1871, K8s:0.0044, K9s:0.0363, KTs:0.0553, KJs:0.0305, KK:0.5970, AKo:0.3932, A2s:0.2537, A3s:0.1469, A4s:0.4222, A5s:0.3111, A6s:0.4357, A7s:0.1214, A8s:0.3282, A9s:0.0658, AJs:0.0046, AQs:0.0005, AKs:0.7164, AA:0.9500"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0004, QQ:0.0001, AQo:0.0001, KK:0.9955, AKo:0.0003, A4s:0.0001, AJs:0.0002, AKs:0.3269, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@74.75",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0001, KK:0.6288, AKo:0.4195, AKs:0.9167, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K3o:0.0001, A3o:0.0001, 43s:0.0015, 44:0.0301, K4o:0.0003, 53s:0.0185, 54s:0.0215, A5o:0.0007, 63s:0.0002, 65s:0.0012, 66:0.0016, K6o:0.0001, A6o:0.0001, 73s:0.0006, 74s:0.1345, 75s:0.0004, 76s:0.1155, 77:0.0194, 87o:0.0011, K7o:0.0027, 85s:0.0005, 86s:0.0163, 87s:0.0380, 88:0.5886, 98s:0.0015, 99:0.2505, A9o:0.0001, T4s:0.0011, T6s:0.0008, T7s:0.0005, T9s:0.0001, TT:0.0610, KTo:0.0094, ATo:0.0001, J4s:0.0004, J6s:0.0006, J8s:0.0025, JJ:0.8732, KJo:0.0001, Q2s:0.0021, Q6s:0.0007, Q7s:0.0019, QJs:0.0001, QQ:0.9990, KQo:0.0749, AQo:0.9137, K2s:0.0789, K3s:0.0856, K4s:0.4263, K5s:0.2353, K6s:0.8036, K7s:0.2302, K8s:0.1836, K9s:0.0319, KTs:0.6322, KJs:0.6827, KQs:0.9619, KK, AKo, A2s:0.0899, A3s:0.0245, A4s:0.8294, A5s:0.6861, A6s:0.0656, A7s:0.0234, A8s:0.0065, A9s:0.0808, ATs:0.5205, AJs:0.5154, AQs:0.9946, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 7bb"
    ],
    "bands": [
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0136, K2o:0.0015, 32s:0.0059, 33:0.0102, K3o:0.0011, A3o:0.0004, 44:0.0016, 54o:0.0141, K4o:0.0011, A4o:0.0001, 53s:0.0010, 55:0.0077, K5o:0.0005, 63s:0.0020, 64s:0.0046, 65s:0.5212, 66:0.0194, 76o:0.0007, K6o:0.0003, A6o:0.0017, 73s:0.0001, 74s:0.0004, 75s:0.0001, 76s:0.0004, 77:0.0130, 97o:0.0016, K7o:0.0005, A7o:0.0001, 86s:0.0498, 87s:0.0562, 88:0.5306, 96s:0.0006, 97s:0.0138, 98s:0.0002, 99:0.0702, K9o:0.0003, A9o:0.0001, T4s:0.0009, T5s:0.0001, T7s:0.0006, TT:0.6828, KTo:0.0033, ATo:0.0001, J5s:0.0030, JTs:0.0003, JJ:0.4951, KJo:0.0022, AJo:0.0006, Q4s:0.0001, Q6s:0.0020, Q7s:0.0001, QTs:0.0006, QJs:0.0002, QQ:0.9993, KQo:0.2770, AQo:0.9685, K2s:0.0428, K3s:0.1421, K4s:0.1621, K5s:0.0370, K6s:0.1758, K7s:0.5727, K8s:0.0452, K9s:0.2169, KTs:0.8808, KJs:0.2482, KQs:0.9766, KK, AKo, A2s:0.6801, A3s:0.2195, A4s:0.3035, A5s:0.5900, A6s:0.0880, A7s:0.2854, A8s:0.3413, A9s:0.0064, ATs:0.0056, AJs:0.4627, AQs:0.9894, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "3bet 10bb"
    ],
    "bands": [
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "22:0.1244, Q2o:0.0001, K2o:0.0370, A2o:0.0019, 33:0.0239, K3o:0.0193, A3o:0.0038, 43s:0.0038, 44:0.0079, K4o:0.0097, A4o:0.0406, 54s:0.1970, 55:0.0118, K5o:0.0413, A5o:0.0255, 65s:0.0292, 66:0.0932, K6o:0.1622, A6o:0.0031, 73s:0.0003, 74s:0.0002, 75s:0.0003, 76s:0.0002, 77:0.0533, K7o:0.0043, A7o:0.0020, 86s:0.0002, 87s:0.0001, 88:0.1409, K8o:0.0001, 94s:0.0005, 96s:0.0086, 99:0.0451, A9o:0.0032, T5s:0.0001, T8s:0.0003, TT:0.0001, KTo:0.0010, KJo:0.0005, Q5s:0.0038, Q8s:0.0007, QJs:0.0002, QQ:0.9976, KQo:0.7422, AQo:0.9869, K2s:0.1109, K3s:0.3821, K4s:0.0593, K5s:0.7323, K6s:0.3650, K7s:0.8910, K8s:0.0037, K9s:0.0864, KTs:0.0118, KJs:0.0614, KQs:0.9771, KK, AKo, A2s:0.4898, A3s:0.2452, A4s:0.8022, A5s:0.7186, A6s:0.0162, A7s:0.5282, A8s:0.5338, A9s:0.0402, ATs:0.0819, AJs:0.5774, AQs:0.9929, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "22:0.9966, 32s:0.0001, 33:0.9926, 53o:0.0022, 63o:0.0001, 42s:0.0054, 43s:0.5327, 44:0.9991, 54o:0.8575, 52s:0.4692, 53s:0.6784, 54s:0.9948, 55:0.9164, 65o:0.6234, 63s:0.7525, 64s:0.9229, 65s:0.9951, 66:0.9401, 76o:0.0023, 96o:0.0002, 72s:0.0008, 73s:0.0251, 74s:0.1167, 75s:0.8396, 76s:0.6928, 77:0.7588, 87o:0.0001, K7o:0.0001, 85s:0.4161, 86s:0.8666, 87s:0.8109, 88:0.9823, 92s:0.0005, 95s:0.1479, 96s:0.3027, 97s:0.9305, 98s:0.9830, 99:0.9971, T3s:0.0001, T7s:0.8479, T8s:0.9407, T9s:0.9512, TT:0.9361, J3s:0.0008, J7s:0.0018, J9s:0.3157, JTs:0.8008, JJ:0.9991, AJo:0.7782, Q8s:0.1467, Q9s:0.5367, QTs:0.6450, QJs:0.9024, QQ:0.9221, KQo:0.6137, AQo:0.7470, K2s:0.0061, K3s:0.6807, K4s:0.2267, K5s:0.2013, K6s:0.0078, K7s:0.2193, K8s:0.9909, K9s:0.6179, KTs:0.8515, KJs:0.8916, KQs:0.8815, KK:0.0001, AKo:0.0001, A2s:0.3267, A3s:0.7269, A4s:0.9394, A5s:0.1508, A6s:0.5417, A7s:0.4938, A8s:0.9035, A9s:0.9408, ATs:0.7563, AJs:0.9995, AQs:0.7824, AKs:0.0008"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "42o:0.0001, K2o:0.0205, A2o:0.0449, K3o:0.0012, A3o:0.0002, 43s:0.0990, 54o:0.0213, K4o:0.0003, 52s:0.0564, 53s:0.1367, 54s:0.0001, 55:0.0749, 65o:0.0720, K5o:0.0009, A5o:0.1893, 64s:0.0556, 66:0.0596, K6o:0.0091, A6o:0.0026, 73s:0.0001, 75s:0.0058, 76s:0.1853, 77:0.2409, K7o:0.0060, A7o:0.0014, 86s:0.0167, 87s:0.1185, 88:0.0175, K8o:0.0032, A8o:0.0031, K9o:0.0113, A9o:0.0523, T3s:0.0003, T9s:0.0002, TT:0.0580, KTo:0.0948, ATo:0.0660, J7s:0.0002, J9s:0.0001, JJ:0.0002, KJo:0.0010, AJo:0.0018, Q3s:0.0191, Q6s:0.0456, Q8s:0.1317, Q9s:0.1752, QTs:0.2436, QJs:0.0050, QQ:0.0779, KQo:0.3495, AQo:0.2493, K2s:0.0723, K3s:0.0247, K4s:0.5028, K5s:0.7100, K6s:0.8518, K7s:0.6966, K8s:0.0017, K9s:0.1581, KTs:0.1264, KJs:0.1031, KQs:0.1114, KK, AKo, A2s:0.5682, A3s:0.2695, A4s:0.0563, A5s:0.8347, A6s:0.3846, A7s:0.4760, A8s:0.0176, A9s:0.0398, ATs:0.2395, AJs:0.0001, AQs:0.2172, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "66:0.0338, 76s:0.0510, 77:0.0391, 87s:0.0006, 88:0.0785, 99:0.3049, TT:0.0354, JTs:0.0174, JJ:0.0015, QQ:0.1084, AQo:0.0004, KJs:0.0083, KQs:0.0007, KK:0.8033, AKo:0.4906, A3s:0.0205, A4s:0.4758, A5s:0.0814, A7s:0.0041, A8s:0.0197, A9s:0.0003, ATs:0.1629, AJs:0.0008, AQs:0.0833, AKs:0.1992, AA:0.0013"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "A5o:0.0029, 76s:0.0001, 87s:0.0003, 88:0.0013, A8o:0.0124, A9o:0.0744, TT:0.0002, ATo:0.0106, AJo:0.0595, QQ:0.0012, K7s:0.0025, K9s:0.0013, KJs:0.0020, KQs:0.0009, KK:0.1206, AKo:0.3109, A2s:0.0175, A3s:0.1035, A4s:0.1773, A5s:0.3715, A6s:0.3183, A7s:0.0825, A8s:0.1686, A9s:0.1612, ATs:0.1902, AJs:0.4043, AQs:0.4584, AKs:0.1986, AA:0.6622"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0007, 76s:0.0002, 87s:0.0051, A8o:0.0007, A9o:0.0126, KTo:0.0013, AJo:0.0001, QQ:0.0003, AQo:0.0001, K4s:0.0001, K5s:0.0026, K7s:0.0098, K8s:0.0008, K9s:0.0024, KTs:0.0003, KJs:0.0024, KQs:0.0015, KK:0.0753, AKo:0.1744, A3s:0.1013, A4s:0.0603, A5s:0.0307, A6s:0.0119, A7s:0.1785, A8s:0.1527, A9s:0.0549, ATs:0.0170, AJs:0.0221, AQs:0.1002, AKs:0.2124, AA:0.3346"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0001, 88:0.0001, 99:0.0001, TT:0.0013, QQ:0.0002, AQo:0.0003, KTs:0.0001, KJs:0.0004, KQs:0.0001, KK:0.0008, AKo:0.0238, A4s:0.0001, A5s:0.0047, A7s:0.0002, A8s:0.0005, AJs:0.0002, AQs:0.0005, AKs:0.3897, AA:0.0019"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.0002, 54s:0.0024, 55:0.1032, 65s:0.1914, 66:0.0210, 76s:0.0106, 77:0.3976, 88:0.2684, 99:0.1521, TT:0.1646, JJ:0.0867, QQ:0.8827, AQo:0.0004, KTs:0.0671, KJs:0.2375, KQs:0.0043, KK:0.3313, AKo:0.2634, A3s:0.0681, A4s:0.2341, A5s:0.1813, A6s:0.0003, A7s:0.1435, A8s:0.0497, A9s:0.0011, ATs:0.5331, AJs:0.3001, AQs:0.7505, AKs:0.0033"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0001, 99:0.0005, JJ:0.0001, AJo:0.0181, KQo:0.0001, K6s:0.0003, K7s:0.0001, K8s:0.0046, K9s:0.0015, KTs:0.0389, KJs:0.2393, KQs:0.0029, KK:0.1397, A3s:0.0026, A4s:0.0052, A5s:0.0008, A7s:0.0017, A8s:0.0011, A9s:0.0009, ATs:0.0094, AJs:0.0212, AQs:0.0002, AKs:0.0034"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "65s:0.0002, JTs:0.0002, JJ:0.0009, QTs:0.0002, QQ:0.0001, KQo:0.0001, AQo:0.0080, K8s:0.0002, K9s:0.0007, KTs:0.0016, KJs:0.0028, KQs:0.0034, KK:0.0088, AKo:0.0041, A3s:0.0020, A4s:0.0014, A5s:0.0004, A7s:0.0005, A8s:0.0006, ATs:0.0010, AJs:0.0188, AQs:0.0037, AKs:0.0011"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0002, QQ:0.0004, AKo:0.1160, A8s:0.0001, ATs:0.0002, AQs:0.0003, AKs:0.0299"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "55:0.0133, 65s:0.0630, 66:0.1129, 76s:0.0189, 77:0.0004, 88:0.0696, 99:0.0508, JTs:0.0008, JJ:0.0012, QQ:0.4043, AQo:0.0148, KTs:0.0016, KQs:0.0347, KK:0.2889, AKo:0.0109, A3s:0.0034, A5s:0.0008, A7s:0.0025, A8s:0.1247, A9s:0.0009, ATs:0.0071, AJs:0.0144, AQs:0.9244, AKs:0.1833, AA:0.0006"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "55:0.0001, A5o:0.0146, A8o:0.0002, 99:0.0849, A9o:0.0114, T8s:0.0002, TT:0.0600, KTo:0.0079, ATo:0.0047, JJ:0.0134, AJo:0.0067, QTs:0.0001, QQ:0.0021, AQo:0.0110, K4s:0.0001, K5s:0.0001, K7s:0.0010, K8s:0.0044, K9s:0.0170, KJs:0.0005, KQs:0.0001, KK:0.0232, AKo:0.0300, A2s:0.1503, A3s:0.0473, A4s:0.0397, A5s:0.0154, A6s:0.0042, A7s:0.1738, A8s:0.0279, A9s:0.0476, ATs:0.0125, AJs:0.1759, AQs:0.0395, AKs:0.0423, AA:0.3496"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A5o:0.0383, 77:0.0001, 87s:0.0006, A8o:0.0016, A9o:0.0330, T9s:0.0002, TT:0.0002, ATo:0.0965, JJ:0.0002, AJo:0.1663, AQo:0.0005, K5s:0.0266, K8s:0.0767, K9s:0.0563, KTs:0.0007, KJs:0.0294, KK:0.1073, AKo:0.0554, A2s:0.1299, A3s:0.1999, A4s:0.3188, A5s:0.0755, A6s:0.2209, A7s:0.0897, A8s:0.3968, A9s:0.0115, ATs:0.0191, AJs:0.1068, AKs:0.1799, AA:0.6498"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.5806, AKo:0.9036, A4s:0.0001, AKs:0.5943, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@10",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "33:0.0001, 54s:0.0012, 55:0.1024, 65s:0.0255, 66:0.0325, 76s:0.0159, 77:0.0416, 88:0.1878, 99:0.0820, JTs:0.0001, QQ:0.9879, AQo:0.0515, K7s:0.0001, KTs:0.0219, KJs:0.0729, KQs:0.0053, KK:0.0094, AKo:0.0130, A2s:0.0001, A3s:0.0150, A4s:0.0098, A5s:0.0364, A6s:0.0011, A7s:0.1949, A8s:0.0804, A9s:0.0045, ATs:0.3259, AJs:0.0388, AQs:0.8847, AKs:0.0070"
      },
      {
        "action": "4bet 17.7bb",
        "min": 0.0001,
        "range": "66:0.0003, 88:0.0001, 99:0.0002, AJo:0.0114, KQo:0.0003, K6s:0.0056, K7s:0.0014, K8s:0.0182, K9s:0.0396, KTs:0.3056, KJs:0.1750, KQs:0.0018, KK:0.3415, AKo:0.0375, A3s:0.0043, A4s:0.0008, A5s:0.0111, A6s:0.0001, A7s:0.0007, A8s:0.0484, A9s:0.0009, ATs:0.0044, AJs:0.2485, AQs:0.0001, AKs:0.0005"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "JJ:0.0001, AJo:0.0008, K6s:0.0006, K7s:0.0001, K8s:0.0046, K9s:0.0095, KTs:0.0941, KJs:0.1084, KQs:0.0005, KK:0.1088, AKo:0.0433, A3s:0.0020, A4s:0.0137, A5s:0.0003, A7s:0.0018, A8s:0.0012, A9s:0.0001, ATs:0.0116, AJs:0.0426, AQs:0.0001, AKs:0.0040"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0019, AQo:0.0002, KJs:0.0001, KK:0.0202, AKo:0.2898, A3s:0.0003, A5s:0.0001, A7s:0.0011, A8s:0.0004, A9s:0.0002, ATs:0.0001, AJs:0.0001, AQs:0.0037, AKs:0.0262"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.0698, 66:0.0235, 76s:0.0014, 77:0.0121, 88:0.0543, 99:0.0027, TT:0.0013, JTs:0.0001, JJ:0.0508, Q8s:0.0001, QQ:0.6560, K8s:0.0001, K9s:0.0005, KTs:0.0001, KJs:0.0057, KQs:0.0001, KK:0.1734, AKo:0.0105, A2s:0.0207, A3s:0.0018, A4s:0.0001, A5s:0.0171, A6s:0.0001, A8s:0.0102, A9s:0.0003, ATs:0.0143, AQs:0.6713, AKs:0.0425, AA:0.0003"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "55:0.0003, A5o:0.0653, 66:0.0001, 88:0.0009, A8o:0.0022, A9o:0.1542, TT:0.0001, KTo:0.0002, ATo:0.0012, J8s:0.0009, JTs:0.0001, AJo:0.0030, QJs:0.0001, QQ:0.0001, KQo:0.0001, AQo:0.0148, K5s:0.0008, K6s:0.1386, K7s:0.1049, K8s:0.0722, K9s:0.0001, KJs:0.0015, KQs:0.0011, KK:0.2791, AKo:0.0062, A2s:0.1036, A3s:0.3862, A4s:0.5968, A5s:0.8622, A6s:0.1856, A7s:0.2421, A8s:0.5239, A9s:0.1492, ATs:0.8310, AJs:0.1146, AQs:0.1086, AKs:0.4724, AA:0.9983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.5476, AKo:0.9821, A4s:0.0001, A5s:0.0002, ATs:0.0002, AKs:0.4850, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 53s:0.0003, 54s:0.0108, 55:0.2092, 65s:0.0958, 66:0.0902, 76s:0.0221, 77:0.1861, 88:0.6406, 99:0.1815, TT:0.1247, JJ:0.4965, QTs:0.0008, QJs:0.0237, QQ:0.9994, KQo:0.0001, AQo:0.0017, KTs:0.0142, KJs:0.3426, KQs:0.5715, KK:0.0086, AKo:0.0183, A3s:0.1406, A4s:0.0968, A5s:0.1308, A6s:0.0003, A7s:0.1389, A8s:0.0002, A9s:0.1146, ATs:0.3736, AJs:0.3393, AQs:0.8900, AKs:0.0003"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "65s:0.0001, 99:0.0001, AJo:0.0029, KQo:0.0006, AQo:0.0005, K4s:0.0002, K6s:0.0072, K7s:0.0023, K8s:0.0199, K9s:0.0606, KTs:0.6198, KJs:0.4335, KQs:0.0242, KK:0.4702, AKo:0.0576, A2s:0.0001, A3s:0.0060, A4s:0.0334, A5s:0.0100, A6s:0.0010, A7s:0.0754, A8s:0.0017, A9s:0.0654, ATs:0.0389, AJs:0.0214, AQs:0.0001, AKs:0.0063"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0010, AKo:0.3078, AKs:0.0311"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0189, 65s:0.0035, 66:0.0514, 77:0.0253, 87s:0.0003, 88:0.1351, T9s:0.0001, TT:0.0071, J9s:0.0007, JJ:0.1416, QQ:0.2965, K5s:0.0002, KTs:0.0124, KK:0.4184, AKo:0.0325, A2s:0.0003, A3s:0.0003, A4s:0.0027, A5s:0.2334, A7s:0.0006, A8s:0.0074, A9s:0.0173, AJs:0.0001, AQs:0.3854, AKs:0.0002, AA:0.0002"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A4o:0.0001, A5o:0.1340, A7o:0.0001, A8o:0.0176, 99:0.0001, A9o:0.0166, TT:0.0001, ATo:0.1383, AJo:0.0064, Q9s:0.0001, AQo:0.0008, K5s:0.1005, K6s:0.0008, K7s:0.0038, KK:0.4532, AKo:0.0374, A2s:0.7611, A3s:0.1462, A4s:0.8815, A5s:0.4542, A6s:0.0051, A7s:0.7788, A8s:0.4558, A9s:0.0142, ATs:0.0641, AJs:0.0733, AQs:0.3237, AKs:0.0072, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0005, KK:0.1284, AKo:0.9293, A2s:0.0004, A3s:0.0063, A5s:0.0008, AQs:0.0003, AKs:0.9925"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 54s:0.0007, 55:0.2103, 65s:0.2050, 66:0.0350, 76s:0.0158, 77:0.4798, 88:0.3601, 99:0.1458, T9s:0.0001, TT:0.1212, JJ:0.6647, QTs:0.0024, QJs:0.0001, QQ:0.9992, K8s:0.0002, KTs:0.0055, KJs:0.3831, KQs:0.6933, KK:0.0281, AKo:0.0014, A3s:0.0032, A4s:0.1606, A5s:0.1816, A6s:0.0017, A7s:0.0671, A8s:0.1184, A9s:0.0626, ATs:0.2825, AJs:0.4582, AQs:0.8898, AKs:0.0002"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "AJo:0.0003, KQo:0.0001, K4s:0.0002, K6s:0.0082, K7s:0.0025, K8s:0.0260, K9s:0.0517, KTs:0.6813, KJs:0.3553, KQs:0.0013, KK:0.4517, AKo:0.0506, A2s:0.0001, A3s:0.0527, A4s:0.0626, A5s:0.0275, A6s:0.0026, A7s:0.0263, A8s:0.0276, A9s:0.0124, ATs:0.0179, AJs:0.0212, AQs:0.0003, AKs:0.0052"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AKo:0.3315, AKs:0.0323"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "CO",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A3o:0.0002, A5o:0.0076, 63s:0.0002, 65s:0.0002, 66:0.0002, K6o:0.0002, 77:0.0001, 88:0.0059, A8o:0.0032, 98s:0.0001, 99:0.0004, T9s:0.0009, TT:0.0028, ATo:0.0001, JJ:0.0736, AJo:0.0058, QJs:0.0003, QQ:0.0065, AQo:0.0006, K4s:0.0009, K7s:0.0001, K8s:0.0001, KTs:0.0012, KQs:0.0001, KK:0.0378, AKo:0.0177, A2s:0.0055, A3s:0.1871, A4s:0.0867, A5s:0.1697, A6s:0.0856, A7s:0.0994, A8s:0.0736, A9s:0.2239, ATs:0.1065, AJs:0.1333, AQs:0.0695, AKs:0.0240, AA:0.3643"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "A3o:0.1789, K4o:0.0226, A4o:0.0448, A5o:0.0953, K6o:0.0008, A7o:0.0952, A8o:0.0010, 99:0.0001, JJ:0.0001, AJo:0.0003, QQ:0.0001, K2s:0.0005, K3s:0.0196, K4s:0.0291, K5s:0.0012, K7s:0.0022, K8s:0.0004, K9s:0.0063, KTs:0.0006, KJs:0.0001, KQs:0.0005, KK:0.2096, AKo:0.0692, A2s:0.2868, A3s:0.0336, A4s:0.0370, A5s:0.4170, A6s:0.0095, A7s:0.0013, A8s:0.0189, A9s:0.0336, ATs:0.0001, AKs:0.3286, AA:0.6357"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.7525, AKo:0.9131, A5s:0.0001, A6s:0.0001, A7s:0.0001, AKs:0.6474"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "BTN",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0001, 33:0.0003, A4o:0.0011, 54s:0.0001, A5o:0.0243, 64s:0.0001, 66:0.0002, 74s:0.0003, 77:0.0079, A7o:0.0069, 86s:0.0003, A8o:0.0007, 98s:0.0026, 99:0.0165, A9o:0.0046, T5s:0.0001, TT:0.0027, JJ:0.0330, Q5s:0.0001, QQ:0.0213, AQo:0.0015, K4s:0.0012, K5s:0.0002, K6s:0.0039, KTs:0.0026, KJs:0.0006, KK:0.1596, AKo:0.0215, A2s:0.0430, A3s:0.0089, A4s:0.0938, A5s:0.1957, A6s:0.1939, A7s:0.0282, A8s:0.3901, A9s:0.0310, ATs:0.0275, AJs:0.1594, AQs:0.3297, AKs:0.0632, AA:0.4253"
      },
      {
        "action": "4bet 20bb",
        "min": 0.0001,
        "range": "K2o:0.0012, A2o:0.0974, K3o:0.0204, A3o:0.0124, K4o:0.0016, A4o:0.0221, K5o:0.0087, A5o:0.0653, K6o:0.0003, A6o:0.0002, K7o:0.0015, A7o:0.0028, A8o:0.0150, K9o:0.0006, A9o:0.0004, K2s:0.1038, K3s:0.0591, K4s:0.1558, K5s:0.1382, K6s:0.0192, K7s:0.0767, K8s:0.0954, KTs:0.0003, KK:0.4527, AKo:0.2062, A2s:0.1668, A3s:0.1680, A4s:0.2576, A5s:0.0887, A6s:0.0668, A7s:0.0020, A8s:0.2168, ATs:0.0043, AJs:0.0013, AQs:0.0009, AKs:0.0910, AA:0.5747"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.3877, AKo:0.7722, A3s:0.0001, A8s:0.0001, AKs:0.8458"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "SB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "K2o:0.0011, A2o:0.0822, K3o:0.0016, A3o:0.0077, A4o:0.0143, A5o:0.1209, A6o:0.0006, K7o:0.0006, A7o:0.0292, A8o:0.1913, A9o:0.0013, JJ:0.0004, AJo:0.0150, AQo:0.0024, K2s:0.0077, K3s:0.0188, K4s:0.0004, K5s:0.0035, K6s:0.0001, K7s:0.0091, K8s:0.0135, K9s:0.0012, KTs:0.0018, KJs:0.0173, KK:0.5680, AKo:0.0213, A2s:0.3584, A3s:0.5199, A4s:0.3155, A5s:0.5558, A6s:0.6800, A7s:0.1345, A8s:0.3313, A9s:0.0003, ATs:0.4296, AJs:0.3475, AQs:0.3272, AKs:0.2412, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "52s:0.0001, JTs:0.0001, KK:0.4320, AKo:0.9787, A2s:0.0435, A3s:0.2383, A4s:0.1260, A5s:0.2252, A6s:0.0939, A8s:0.0892, ATs:0.0058, AQs:0.0001, AKs:0.7588"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "BB",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
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
        "range": "A2o:0.0863, K3o:0.0023, A3o:0.0379, A4o:0.0285, A5o:0.1378, A6o:0.0064, A7o:0.0190, K9o:0.0001, A9o:0.0005, AJo:0.1706, KQo:0.0001, AQo:0.0007, K2s:0.0400, K3s:0.0002, K4s:0.3749, K5s:0.0564, K6s:0.1960, K7s:0.0675, K8s:0.2725, K9s:0.0049, KJs:0.0018, KK:0.9513, AKo:0.4781, A2s:0.7280, A3s:0.3931, A4s:0.8701, A5s:0.3738, A6s:0.1749, A7s:0.2367, A8s:0.0512, A9s:0.2125, ATs:0.1721, AJs:0.0044, AQs:0.0009, AKs:0.3259, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0487, AKo:0.5219, AKs:0.6741"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0007, 55:0.8135, 65s:0.5381, 66:0.9608, 76s:0.4724, 77:0.2925, 88:0.9998, 98s:0.0001, 99:0.9352, T9s:0.9264, TT:0.9929, J9s:0.0586, JTs:0.1810, JJ, QTs:0.0001, QJs:0.1083, QQ, AQo:0.5976, K5s:0.0326, K6s:0.1701, K7s:0.0409, KTs:0.9786, KJs:0.9344, KQs:0.9994, KK:0.9998, AKo:0.0001, A4s:0.0066, A5s:0.4684, A6s:0.0056, A7s:0.0883, A8s:0.1733, A9s:0.8598, ATs:0.5972, AJs:0.9997, AQs, AKs:0.0001"
      },
      {
        "action": "4bet 18bb",
        "min": 0.0001,
        "range": "A5o:0.0390, ATo:0.0010, AJo:0.0492, AQo:0.3816, K4s:0.0001, K5s:0.0001, K6s:0.0039, K7s:0.0001, KJs:0.0001, KK:0.0001, AKo:0.0074, A2s:0.1052, A3s:0.3664, A4s:0.9249, A5s:0.5169, A6s:0.1421, A7s:0.7981, A8s:0.3425, A9s:0.1229, ATs:0.1341, AJs:0.0001, AKs:0.5732, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0001, AKo:0.9925, AKs:0.4267"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0047, 65s:0.0085, 66:0.0735, 77:0.0108, 88:0.2444, 99:0.0111, TT:0.0537, JJ:0.1921, AJo:0.0007, QQ:0.0004, AQo:0.2574, KK:0.4923, A2s:0.0001, A4s:0.0166, A5s:0.2185, A6s:0.0007, A7s:0.0984, A8s:0.0068, A9s:0.1786, ATs:0.2258, AJs:0.1383, AQs:0.1079, AKs:0.0002, AA:0.2165"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0010, AJo:0.0001, KK:0.0250, AKo:0.6164, A2s:0.1759, A3s:0.6414, A4s:0.6267, A5s:0.4888, A6s:0.2044, A7s:0.1852, A8s:0.2701, A9s:0.0043, ATs:0.0076, AKs:0.9620, AA:0.7835"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5202, AKo:0.6163, AKs:0.9623, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@18",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0035, KK:0.1081, AKo:0.0048, A6s:0.0007, A9s:0.0002, AJs:0.0255, AQs:0.0090, AKs:0.1027, AA:0.0317"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "76s:0.0003, 87s:0.0002, 88:0.0001, T8s:0.0001, K5s:0.0005, K6s:0.0004, KK:0.8227, AKo:0.9877, A2s:0.0043, A3s:0.0026, A4s:0.0469, A5s:0.2274, A6s:0.0020, A7s:0.1466, A8s:0.0276, A9s:0.0096, ATs:0.0935, AJs:0.0374, AQs:0.2226, AKs:0.8959, AA:0.9683"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0051, 65s:0.0055, 66:0.0347, 77:0.0236, 88:0.1057, 99:0.0230, JJ:0.0320, QQ:0.0004, AQo:0.0498, KTs:0.0500, KJs:0.0001, KK:0.0379, A2s:0.0034, A3s:0.0075, A5s:0.0023, A6s:0.0711, A7s:0.0476, A8s:0.0560, A9s:0.1275, ATs:0.1016, AJs:0.1278, AQs:0.1076, AKs:0.0019, AA:0.2025"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0002, 88:0.0029, 99:0.0001, TT:0.0001, JJ:0.0001, KTs:0.0003, KJs:0.0004, KK:0.4823, AKo:0.6163, A2s:0.2807, A3s:0.1246, A4s:0.0263, A5s:0.3647, A6s:0.1468, A7s:0.2677, A8s:0.3136, A9s:0.0698, ATs:0.1044, AJs:0.0022, AQs:0.0002, AKs:0.9604, AA:0.7975"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0001, QQ:0.0020, K9s:0.0001, KK:0.9985, AKo:0.0480, A6s:0.0001, A8s:0.0001, AJs:0.0001, AKs:0.7067, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5202, AKo:0.5796, AKs:0.9623, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@18",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0011, QQ:0.0002, KK:0.2616, AKo:0.1358, A4s:0.0581, A5s:0.0011, A8s:0.0569, ATs:0.0460, AJs:0.0460, AQs:0.0658, AKs:0.0022, AA:0.1597"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0001, 99:0.0002, TT:0.0001, JJ:0.0001, K5s:0.0001, K7s:0.0001, KTs:0.0116, KK:0.4270, AKo:0.7302, A2s:0.0199, A3s:0.1595, A4s:0.0707, A5s:0.3551, A6s:0.0058, A7s:0.0257, A8s:0.0041, A9s:0.0494, ATs:0.0307, AJs:0.0011, AQs:0.0010, AKs:0.9899, AA:0.8403"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@18",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0018, 65s:0.0032, 66:0.0137, 77:0.0004, 88:0.2333, 99:0.0038, TT:0.0702, JJ:0.0639, AJo:0.0151, QQ:0.0003, AQo:0.0001, KK:0.1227, AKo:0.0155, A2s:0.0013, A3s:0.0026, A5s:0.2100, A6s:0.0001, A7s:0.2711, A8s:0.1470, A9s:0.0093, ATs:0.1278, AJs:0.1231, AQs:0.1043, AKs:0.1045, AA:0.2245"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AQo:0.0001, K5s:0.0001, K9s:0.0012, KTs:0.0058, KJs:0.0019, KK:0.3817, AKo:0.6007, A2s:0.1104, A3s:0.2247, A4s:0.3131, A5s:0.3251, A6s:0.0098, A7s:0.0759, A8s:0.0504, A9s:0.0389, ATs:0.0351, AJs:0.0024, AQs:0.0009, AKs:0.8567, AA:0.7755"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.0001, AKs:0.0126, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5202, AKo:0.2400, AKs:0.6911, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@11.7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A8o:0.0009, 98s:0.0056, T9s:0.0002, TT:0.0010, J9s:0.0004, JJ:0.0017, AJo:0.0224, QTs:0.0008, QQ:0.0115, AQo:0.0052, KK:0.1904, AKo:0.0961, A2s:0.0016, A3s:0.0006, A5s:0.0012, A6s:0.0179, A7s:0.0524, A8s:0.0003, A9s:0.0004, AJs:0.0037, AQs:0.1856, AKs:0.3311, AA:0.1219"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0007, A5o:0.0002, 76s:0.0001, 99:0.0001, A9o:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0001, AJo:0.0086, K5s:0.0001, K8s:0.0003, K9s:0.0005, KK:0.0746, AKo:0.5162, A2s:0.2242, A3s:0.1351, A4s:0.0149, A6s:0.0046, A7s:0.3307, A8s:0.0061, A9s:0.0215, ATs:0.1053, AJs:0.2740, AQs:0.0161, AKs:0.6451, AA:0.8781"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@11.7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0070, 65s:0.0685, 66:0.0706, 77:0.0294, 87s:0.0001, 88:0.3142, 99:0.2312, T9s:0.0003, TT:0.2405, ATo:0.0007, JJ:0.1853, QTs:0.0049, QQ:0.0004, AQo:0.1770, K5s:0.0034, K6s:0.0382, K7s:0.0004, K9s:0.0049, KTs:0.0544, KJs:0.0543, KK:0.5181, AKo:0.1265, A2s:0.0090, A3s:0.1224, A4s:0.1270, A5s:0.4708, A6s:0.0013, A7s:0.2055, A8s:0.1122, A9s:0.1345, ATs:0.0483, AJs:0.0408, AQs:0.1029, AKs:0.2356, AA:0.1161"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0010, TT:0.0007, ATo:0.0016, AJo:0.0057, KQo:0.0001, AQo:0.0003, K9s:0.0001, KJs:0.0001, KK:0.0007, AKo:0.4883, A2s:0.6108, A3s:0.3625, A4s:0.3712, A5s:0.2541, A6s:0.1169, A7s:0.3456, A8s:0.2158, A9s:0.4206, ATs:0.1178, AJs:0.0910, AQs:0.0012, AKs:0.7267, AA:0.8839"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@20",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, QQ:0.0002, K9s:0.0049, KTs:0.0002, KQs:0.0012, KK:0.0752, AKo:0.0056, A2s:0.0001, A8s:0.0005, AJs:0.0004, AKs:0.1177, AA:0.0007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0023, 66:0.0002, 77:0.0020, 98s:0.0044, 99:0.0026, T9s:0.0002, JTs:0.0003, Q8s:0.0001, K5s:0.0052, K7s:0.0002, KJs:0.0019, KQs:0.0116, KK:0.9230, AKo:0.7923, A2s:0.0019, A3s:0.0594, A4s:0.0625, A5s:0.1965, A6s:0.0013, A7s:0.0003, A8s:0.0069, A9s:0.0371, AJs:0.0001, AQs:0.0287, AKs:0.8583, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@20",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0003, 77:0.0019, 88:0.0152, 99:0.0117, TT:0.0069, QQ:0.0001, KQo:0.0005, AQo:0.0001, K9s:0.0040, KTs:0.0077, KJs:0.0014, KK:0.0618, AKo:0.0029, A4s:0.0001, A7s:0.0069, A8s:0.0018, A9s:0.0117, ATs:0.0351, AJs:0.0486, AKs:0.0455, AA:0.0265"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, 77:0.0002, 88:0.0048, 99:0.0020, TT:0.0023, ATo:0.0009, KQo:0.0003, AQo:0.0001, K6s:0.0016, K9s:0.0003, KTs:0.0012, KJs:0.0004, KK:0.4584, AKo:0.6133, A2s:0.2079, A3s:0.0985, A4s:0.0714, A5s:0.2904, A6s:0.0140, A7s:0.1316, A8s:0.3373, A9s:0.5273, ATs:0.1294, AJs:0.0329, AQs:0.0117, AKs:0.9167, AA:0.9735"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK, AKo:0.0207, A5s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0522, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5202, AKo:0.2596, AKs:0.9393, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@11.7",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0987, 88:0.0002, ATo:0.0104, Q8s:0.0001, QQ:0.0031, AQo:0.0001, K5s:0.0001, K8s:0.0001, KJs:0.0011, KQs:0.0003, KK:0.1965, AKo:0.1253, A3s:0.0478, A4s:0.0001, A5s:0.0063, A6s:0.0001, A8s:0.0052, A9s:0.1428, AJs:0.1843, AKs:0.1297, AA:0.3523"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0001, 66:0.0003, 87s:0.0018, 88:0.0003, T8s:0.0005, J9s:0.0006, JTs:0.0001, AJo:0.0045, Q8s:0.0001, Q9s:0.0005, K5s:0.0002, K7s:0.0004, K8s:0.0002, KK:0.0016, AKo:0.3278, A2s:0.4605, A3s:0.2157, A4s:0.1620, A5s:0.1395, A6s:0.5537, A7s:0.3673, A8s:0.5628, A9s:0.0064, AJs:0.0017, AQs:0.0585, AKs:0.7030, AA:0.6477"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@11.7",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0063, 65s:0.0880, 66:0.0753, 77:0.0309, 88:0.3169, 99:0.2293, T9s:0.0005, TT:0.2099, ATo:0.0035, JJ:0.2291, AJo:0.0010, QTs:0.0060, QJs:0.0001, QQ:0.0004, KQo:0.0001, AQo:0.1067, K6s:0.0521, K7s:0.0018, K9s:0.0134, KTs:0.0064, KJs:0.0145, KK:0.5198, AKo:0.1614, A2s:0.0091, A3s:0.1138, A4s:0.0177, A5s:0.1710, A6s:0.0294, A7s:0.1202, A8s:0.1943, A9s:0.2212, ATs:0.0171, AJs:0.0847, AQs:0.1019, AKs:0.2059, AA:0.0799"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0012, 88:0.0003, 99:0.0001, TT:0.0135, ATo:0.0026, JJ:0.0221, AJo:0.0003, KQo:0.0001, AQo:0.0016, KK:0.0004, AKo:0.4549, A2s:0.4965, A3s:0.3598, A4s:0.4897, A5s:0.5690, A6s:0.3004, A7s:0.0780, A8s:0.3569, A9s:0.2546, ATs:0.0862, AJs:0.0373, AQs:0.0018, AKs:0.7564, AA:0.9201"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@20",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "87s:0.0001, 98s:0.0001, JTs:0.0029, JJ:0.0004, QQ:0.0001, K8s:0.0002, K9s:0.0128, KK:0.0385, AKo:0.1617, A4s:0.0021, A5s:0.0612, A6s:0.0019, A7s:0.0228, A8s:0.1245, A9s:0.0138, ATs:0.0645, AJs:0.0002, AKs:0.2112, AA:0.1552"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0010, 65s:0.0002, 87s:0.0001, JJ:0.0003, QQ:0.0005, K8s:0.0023, K9s:0.0017, KTs:0.0001, KJs:0.0092, KK:0.2735, AKo:0.5933, A2s:0.1849, A3s:0.1757, A4s:0.0188, A5s:0.2661, A6s:0.0063, A7s:0.5206, A8s:0.0667, A9s:0.3265, ATs:0.2513, AJs:0.0005, AQs:0.0365, AKs:0.7513, AA:0.8448"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@20",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0082, 77:0.0028, 88:0.0296, TT:0.0001, JJ:0.0001, K9s:0.0001, KTs:0.0005, KK:0.1789, AKo:0.0248, A3s:0.0011, A4s:0.0240, A5s:0.0004, A6s:0.0033, A8s:0.0004, A9s:0.1456, ATs:0.0477, AJs:0.0187, AQs:0.0062, AKs:0.0170, AA:0.0272"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0014, 77:0.0001, 88:0.0065, 99:0.0004, TT:0.0095, AJo:0.0003, KQo:0.0008, K5s:0.0004, K6s:0.0034, K9s:0.0073, KTs:0.0005, KJs:0.0004, KK:0.2576, AKo:0.5916, A2s:0.4055, A3s:0.1289, A4s:0.2740, A5s:0.3019, A6s:0.1831, A7s:0.3430, A8s:0.0099, A9s:0.1731, ATs:0.0013, AJs:0.0334, AQs:0.0296, AKs:0.9434, AA:0.9728"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@74.75",
    "heroPos": "LJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0005, KK:0.9971, AKo:0.0286, AKs:0.0385, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@74.75",
    "heroPos": "HJ",
    "eff": 75.0,
    "stacks": [
      75.0,
      75.0,
      75.0,
      75.0,
      75.0,
      75.0
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.5202, AKo:0.0354, AKs:0.0768, AA"
      }
    ]
  }
];

export const PATTERNS = __normalizePatterns([
{
    id: "CLUB_MATCH_100_200_50_75_75_75_75_75_75 chase",
    label: "Club Match 100-200(50) 75-75-75-75-75-75 chase",
    tags: ["clubmatch", "6left"],
    questionBuilder: (hand) => ({ stacks: CLUB_MATCH_100_200_50_75_75_75_75_75_75_STACKS_BB }),
    spots: __attachFacingLineToState(CLUB_MATCH_100_200_50_75_75_75_75_75_75_STATE, CLUB_MATCH_100_200_50_75_75_75_75_75_75_FACING_PRESETS).map(__makeSpotFromState),
  }
]);
