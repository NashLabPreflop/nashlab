// ============================================================
// AUTO-GENERATED from Club_Match_390-780(200)_38-28-9-25-13.zip
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

// blinds: BB=78000 / SB=39000 / ante=20000
export const CLUB_MATCH_390_780_200_38_28_9_25_13_STACKS_BB = [
  38.46,
  28.85,
  9.62,
  25.64,
  12.82
];

export const CLUB_MATCH_390_780_200_38_28_9_25_13_FACING_PRESETS = [
  {
    "id": "START",
    "facingLine": [],
    "heroPositions": [
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
    "id": "SB:CALL@0.5|BB:OPEN@3",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 3.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@12.56",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@12.56",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "SB:OPEN@2.5|BB:3BET@12.56",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 2.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@12.56",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 12.56
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
    "id": "BTN:OPEN@2|BB:3BET@9.36",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 9.36
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
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
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
        "size": 12.56
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@12.56",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "BB",
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@12.56|BB:CALL@11.56",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 12.56
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 11.56
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@9.36",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 9.36
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@9.36|SB:CALL@8.86",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 9.36
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 8.86
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@9.36|SB:CALL@8.86|BB:3BET@12.56",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 9.36
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 8.86
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@9.36|SB:3BET@12.56",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 9.36
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "BB"
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
    "id": "CO:OPEN@2|BB:3BET@12.56",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12.56
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
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
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
        "size": 12.56
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@5.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@5.5|CO:4BET@25.38",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 25.38
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@5.5|BB:4BET@12.56",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@25.38",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 25.38
      }
    ],
    "heroPositions": [
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@25.38|BB:CALL@11.56",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 25.38
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 11.56
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
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@12.56",
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
        "size": 12.56
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@25.38",
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
        "size": 25.38
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@9.36",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 9.36
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@9.36|BB:4BET@12.56",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 9.36
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@9.36|SB:4BET@25.38",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 9.36
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 25.38
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
    "id": "HJ:OPEN@2|BB:3BET@12.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12.56
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
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
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
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@5.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@5.5|HJ:4BET@25.38",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 25.38
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@5.5|BB:4BET@12.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@25.38",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 25.38
      }
    ],
    "heroPositions": [
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@25.38|BB:CALL@11.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 25.38
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 11.56
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
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@12.56",
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
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@25.38",
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
        "size": 25.38
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@9.36",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 9.36
      }
    ],
    "heroPositions": [
      "SB",
      "BB",
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@9.36|BB:4BET@12.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 9.36
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@9.36|SB:4BET@25.38",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 9.36
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 25.38
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
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@12.56",
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
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@5.5",
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
        "size": 5.5
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@25.38",
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
        "size": 25.38
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@9.36",
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
        "size": 9.36
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
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
    "id": "HJ:OPEN@2|CO:3BET@5.5|HJ:4BET@28.59",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 28.59
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5.5|BB:4BET@12.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5.5|SB:4BET@25.38",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 25.38
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5.5|BTN:4BET@9.36",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 9.36
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
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
    "id": "HJ:OPEN@2|CO:3BET@8|HJ:4BET@28.59",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 28.59
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8|BB:4BET@12.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12.56
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8|SB:4BET@25.38",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 25.38
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@8|BTN:4BET@9.36",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 9.36
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@28.59",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.59
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
    "id": "HJ:OPEN@2|CO:3BET@28.59|BB:CALL@11.56",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.59
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 11.56
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@28.59|SB:CALL@24.88",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.59
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 24.88
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@28.59|BTN:CALL@9.36",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 28.59
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 9.36
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  }
];

export const CLUB_MATCH_390_780_200_38_28_9_25_13_STATE = [
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "open 2bb"
    ],
    "bands": [
      {
        "action": "open 2bb",
        "min": 0.0001,
        "range": "A2o, A3o, 44:0.0639, K4o:0.0004, A4o, 55, K5o:0.0054, A5o, 65s:0.0001, 66, K6o:0.0671, A6o, 77, Q7o:0.0001, K7o:0.3694, A7o, 88, T8o:0.0001, Q8o:0.0021, K8o:0.7835, A8o, 95s:0.0001, 97s:0.0001, 99, T9o:0.0004, J9o:0.0040, Q9o:0.9797, K9o, A9o, T4s:0.0001, T7s:0.0022, T8s:0.0070, T9s:0.0994, TT, JTo, QTo, KTo, ATo, J6s:0.0006, J7s:0.0018, J8s:0.4715, J9s:0.9466, JTs:0.9974, JJ, QJo, KJo, AJo, Q2s:0.0001, Q5s:0.0042, Q7s:0.1538, Q8s:0.9268, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.0090, K3s:0.0008, K4s:0.4457, K5s:0.9143, K6s:0.9657, K7s:0.9998, K8s:0.9985, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "open 2bb"
    ],
    "bands": [
      {
        "action": "open 2bb",
        "min": 0.0001,
        "range": "A2o, 33:0.0002, A3o, 44:0.0002, A4o, 55:0.9916, A5o, 66, A6o, 77, K7o:0.0014, A7o, 87s:0.0001, 88, J8o:0.0001, K8o:0.1916, A8o, 98s:0.0002, 99, T9o:0.0001, Q9o:0.0018, K9o:0.9548, A9o, T6s:0.0002, T7s:0.0001, T8s:0.0113, T9s:0.1245, TT, JTo:0.9983, QTo, KTo, ATo, J5s:0.0004, J7s:0.0033, J8s:0.0004, J9s:0.5568, JTs:0.9986, JJ, QJo, KJo, AJo, Q2s:0.0001, Q3s:0.0004, Q5s:0.0031, Q7s:0.0028, Q8s:0.4891, Q9s:0.9471, QTs:0.9994, QJs:0.9998, QQ, KQo, AQo, K2s:0.0015, K3s:0.0100, K4s:0.0004, K5s:0.9006, K6s:0.6770, K7s:0.9926, K8s:0.9979, K9s:0.9992, KTs:0.9998, KJs, KQs, KK, AKo, A2s:0.9962, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
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
        "range": "A2o:0.9771, A3o:0.2098, A4o:0.0227, Q5o:0.0001, K5o:0.0005, A5o:0.0042, 66:0.0001, Q6o:0.0001, A6o:0.0416, K7o:0.0003, A7o:0.0786, 85s:0.0001, Q8o:0.0012, K8o:0.0625, 96s:0.0005, J9o:0.0002, Q9o:0.0114, K9o:0.8203, T7s:0.0008, TT:0.0170, QTo:0.1692, KTo:0.0315, J5s:0.0001, J7s:0.0247, J8s:0.3240, JJ:0.9996, QJo:0.0337, AJo:0.0004, Q3s:0.0002, Q4s:0.0003, Q5s:0.0215, Q6s:0.3214, Q7s:0.1182, Q8s:0.8122, QQ, KQo:0.0001, AQo:0.0002, K3s:0.0004, K4s:0.1685, K5s:0.8441, K6s:0.3556, K7s:0.3260, K8s:0.2048, K9s:0.0001, KTs:0.0003, KK, AKo:0.0037, A2s:0.0001, A6s:0.0002, A7s:0.0033, A8s:0.0184, ATs:0.5718, AJs:0.9923, AQs:0.9175, AKs:0.9963, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, A2o:0.0229, 33, A3o:0.7902, 44, A4o:0.9773, 55, A5o:0.9958, 66, A6o:0.9584, 76s:0.0002, 77, A7o:0.9214, 87s:0.0019, 88, A8o, 98s:0.9994, 99, A9o, T8s:0.9990, T9s, TT:0.9830, JTo, QTo:0.8307, KTo:0.9685, ATo, J7s:0.0001, J8s:0.4861, J9s, JTs, JJ:0.0004, QJo:0.9663, KJo, AJo:0.9996, Q5s:0.0002, Q7s:0.0001, Q8s:0.0919, Q9s, QTs, QJs, KQo, AQo:0.9998, K4s:0.0002, K5s:0.0012, K6s:0.1190, K7s:0.6396, K8s:0.7871, K9s, KTs:0.9997, KJs, KQs, AKo:0.9963, A2s, A3s, A4s, A5s, A6s:0.9998, A7s:0.9967, A8s:0.9816, A9s, ATs:0.4282, AJs:0.0077, AQs:0.0825, AKs:0.0037"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "open 2.5bb",
      "open 12.56bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32o:0.0354, 42o:0.0232, 62o:0.0027, 72o:0.0123, 82o:0.0001, 92o:0.0285, T2o:0.0006, J2o:0.0001, Q2o:0.0001, K2o:0.0001, 43o:0.0016, 53o:0.0001, 63o:0.0008, 73o:0.0035, 83o:0.0199, 93o:0.0118, J3o:0.0001, Q3o:0.0004, K3o:0.0002, 43s:0.0002, 64o:0.0002, 74o:0.0176, 84o:0.0003, 94o:0.0201, T4o:0.0166, J4o:0.0004, Q4o:0.0011, K4o:0.0013, 52s:0.0002, T5o:0.0003, J5o:0.0202, Q5o:0.0080, K5o:0.0001, 62s:0.0002, 63s:0.0005, 64s:0.0001, 76o:0.0001, 96o:0.0004, J6o:0.0035, Q6o:0.0003, K6o:0.0004, T7o:0.0001, J7o:0.0004, Q7o:0.0028, 82s:0.0010, 83s:0.0001, 85s:0.0001, 88:0.0036, 98o:0.0001, T8o:0.0002, J8o:0.0004, Q8o:0.0100, K8o:0.0272, 92s:0.0021, 93s:0.0016, 94s:0.0001, 96s:0.0006, 99:0.0130, T9o:0.0001, Q9o:0.0266, T2s:0.0002, T3s:0.0021, T4s:0.0003, T5s:0.0009, TT:0.0003, JTo:0.0002, KTo:0.0002, J4s:0.0013, J7s:0.0001, J9s:0.0008, JTs:0.0020, JJ:0.0179, QJo:0.0004, Q2s:0.0003, Q3s:0.0002, Q5s:0.0002, Q6s:0.0094, Q7s:0.0002, Q8s:0.0001, Q9s:0.0010, QTs:0.0599, QJs:0.0004, QQ:0.0195, K4s:0.0022, K5s:0.0045, K7s:0.0009, K9s:0.0003, KTs:0.0087, KJs:0.0178, KQs:0.0009, KK:0.0413, AKo:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0007, AQs:0.0004, AA:0.0124"
      },
      {
        "action": "open 2.5bb",
        "min": 0.0001,
        "range": "32o:0.7009, 42o:0.9723, 52o:0.0498, 62o:0.9885, 72o:0.9877, 82o:0.9973, 92o:0.5071, T2o:0.2422, J2o:0.0958, K2o:0.0008, 43o:0.0021, 53o:0.0001, 63o:0.1968, 73o:0.2570, 83o:0.9801, 93o:0.9368, T3o:0.2387, J3o:0.0648, Q3o:0.4224, K3o:0.1351, 42s:0.0001, 64o:0.0001, 74o:0.0001, 84o:0.0444, 94o:0.6741, T4o:0.2833, J4o:0.0471, Q4o:0.0739, K4o:0.4152, 52s:0.0006, 53s:0.0001, 85o:0.0001, 95o:0.0131, T5o:0.3082, J5o:0.6013, Q5o:0.2890, K5o:0.0592, 62s:0.0004, 63s:0.0003, 64s:0.0001, 66:0.0002, 96o:0.0001, J6o:0.0648, Q6o:0.1308, 77:0.0002, J7o:0.0001, Q7o:0.5325, 82s:0.0017, 83s:0.0002, 88:0.2067, J8o:0.0003, Q8o:0.2968, K8o:0.6612, 92s:0.0038, 93s:0.0004, 94s:0.0002, 96s:0.0001, 99:0.9870, Q9o:0.0058, A9o:0.0001, T2s:0.0007, T4s:0.0011, TT:0.9997, KTo:0.0001, J4s:0.0005, JTs:0.0010, JJ:0.9821, KJo:0.0005, AJo:0.0004, Q6s:0.0003, Q7s:0.0001, QQ:0.9805, KQo:0.0122, AQo:0.0180, K4s:0.0004, K8s:0.0001, K9s:0.0154, KTs:0.8957, KJs:0.2358, KQs:0.9990, KK:0.9587, AKo:0.7426, A6s:0.0003, A7s:0.0005, A8s:0.0008, A9s:0.0006, ATs:0.1559, AJs:0.3450, AQs:0.9888, AKs:0.9980, AA:0.9876"
      },
      {
        "action": "open 12.56bb",
        "min": 0.0001,
        "range": "22, 32o:0.2636, 42o:0.0045, 52o:0.9502, 62o:0.0088, 82o:0.0026, 92o:0.4644, T2o:0.7572, J2o:0.9041, Q2o:0.9998, K2o:0.9991, A2o, 32s, 33, 43o:0.9963, 53o:0.9998, 63o:0.8024, 73o:0.7394, 93o:0.0513, T3o:0.7613, J3o:0.9351, Q3o:0.5772, K3o:0.8647, A3o, 42s, 43s:0.9997, 44, 54o, 64o:0.9998, 74o:0.9823, 84o:0.9553, 94o:0.3058, T4o:0.7001, J4o:0.9525, Q4o:0.9250, K4o:0.5835, A4o, 52s:0.9992, 53s, 54s, 55, 65o, 75o, 85o, 95o:0.9869, T5o:0.6915, J5o:0.3785, Q5o:0.7030, K5o:0.9407, A5o, 62s:0.9994, 63s:0.9992, 64s:0.9998, 65s, 66:0.9997, 76o, 86o, 96o:0.9995, T6o, J6o:0.9317, Q6o:0.8689, K6o:0.9996, A6o, 72s, 73s, 74s, 75s, 76s, 77:0.9998, 87o, 97o, T7o, J7o:0.9995, Q7o:0.4647, K7o, A7o, 82s:0.9973, 83s:0.9998, 84s, 85s, 86s, 87s, 88:0.7897, 98o, T8o:0.9998, J8o:0.9993, Q8o:0.6932, K8o:0.3116, A8o, 92s:0.9941, 93s:0.9980, 94s:0.9998, 95s, 96s:0.9994, 97s, 98s, T9o, J9o, Q9o:0.9676, K9o, A9o, T2s:0.9992, T3s:0.9979, T4s:0.9986, T5s:0.9991, T6s, T7s, T8s, T9s, JTo:0.9998, QTo, KTo:0.9998, ATo, J2s, J3s, J4s:0.9982, J5s, J6s, J7s, J8s, J9s:0.9992, JTs:0.9971, QJo:0.9996, KJo:0.9995, AJo:0.9996, Q2s:0.9997, Q3s:0.9998, Q4s, Q5s:0.9998, Q6s:0.9903, Q7s:0.9997, Q8s, Q9s:0.9990, QTs:0.9401, QJs:0.9996, KQo:0.9878, AQo:0.9819, K2s, K3s, K4s:0.9975, K5s:0.9955, K6s, K7s:0.9991, K8s, K9s:0.9843, KTs:0.0955, KJs:0.7464, AKo:0.2573, A2s, A3s, A4s, A5s, A6s:0.9997, A7s:0.9995, A8s:0.9992, A9s:0.9994, ATs:0.8440, AJs:0.6543, AQs:0.0107, AKs:0.0020"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "open 0bb",
      "open 3bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "open 0bb",
        "min": 0.0001,
        "range": "22:0.7100, 32o:0.0133, 42o:0.8678, 52o:0.6268, 62o:0.8673, 72o:0.5332, 82o:0.2823, 92o:0.6118, T2o:0.5200, J2o:0.5989, Q2o:0.9068, K2o:0.3310, A2o:0.3232, 32s:0.9649, 33:0.7709, 43o:0.5895, 53o:0.5027, 63o:0.1912, 73o:0.0935, 83o:0.1580, 93o:0.8301, T3o:0.9369, J3o:0.9343, Q3o:0.9280, K3o:0.9234, A3o:0.0011, 42s:0.8215, 43s:0.8645, 44:0.7291, 54o:0.2525, 64o:0.7994, 74o:0.3371, 84o:0.9082, 94o:0.4314, T4o:0.6231, J4o:0.8586, Q4o:0.6906, K4o:0.7706, A4o:0.5590, 52s:0.9521, 53s:0.6978, 54s:0.4802, 55:0.9457, 65o:0.6966, 75o:0.9767, 85o:0.7543, 95o:0.7351, T5o:0.5864, J5o:0.3409, Q5o:0.3640, K5o:0.6198, A5o:0.0135, 62s:0.2928, 63s:0.8495, 64s:0.9102, 65s:0.5682, 66:0.9012, 76o:0.6664, 86o:0.2358, 96o:0.8906, T6o:0.6901, J6o:0.6837, Q6o:0.9839, K6o:0.9916, A6o:0.2867, 72s:0.7307, 73s:0.6890, 74s:0.9490, 75s:0.9698, 76s:0.3684, 77:0.5836, 87o:0.6307, 97o:0.5728, T7o:0.8975, J7o:0.9975, Q7o:0.9806, K7o:0.9861, A7o:0.1797, 82s:0.8412, 83s:0.7680, 84s:0.8733, 85s:0.3795, 86s:0.9418, 87s:0.8769, 88:0.5762, 98o:0.8835, T8o:0.7573, J8o:0.9914, Q8o:0.9935, K8o:0.6465, A8o:0.5828, 92s:0.3475, 93s:0.6056, 94s:0.8482, 95s:0.9576, 96s:0.6569, 97s:0.9122, 98s:0.8559, 99:0.3345, T9o:0.9860, J9o:0.9878, Q9o:0.9758, K9o:0.7398, A9o:0.2564, T2s:0.9717, T3s:0.9477, T4s:0.9649, T5s:0.9277, T6s:0.8654, T7s:0.8984, T8s:0.9768, T9s:0.9811, TT:0.5608, JTo:0.9994, QTo:0.9996, KTo:0.1938, J2s:0.8150, J3s:0.5610, J4s:0.7078, J5s:0.9916, J6s:0.8536, J7s:0.0175, J8s:0.9951, J9s:0.7027, JTs:0.9924, JJ:0.6232, QJo:0.5698, KJo:0.4125, Q2s:0.9545, Q3s:0.7996, Q4s:0.6880, Q5s:0.8006, Q6s:0.5000, Q7s:0.6608, Q8s:0.9894, Q9s:0.9820, QTs:0.8976, QJs:0.9414, QQ:0.0073, KQo:0.5639, AQo:0.0764, K2s:0.2982, K3s:0.6776, K4s:0.6994, K5s:0.7862, K6s:0.2797, K7s:0.2515, K8s:0.6293, K9s:0.9912, KTs:0.9421, KJs:0.4826, KQs:0.6527, KK:0.0153, A2s:0.4603, A3s:0.7046, A4s:0.7158, A5s:0.2673, A6s:0.8867, A7s:0.7382, A8s:0.1384, A9s:0.2324, ATs:0.0249, AJs:0.0244, AQs:0.1149"
      },
      {
        "action": "open 3bb",
        "min": 0.0001,
        "range": "22:0.0146, 32o:0.0440, 42o:0.0109, 52o:0.1359, 62o:0.0047, 72o:0.1752, 82o:0.4474, 92o:0.2254, T2o:0.2586, J2o:0.0491, Q2o:0.0463, K2o:0.0016, A2o:0.0015, 32s:0.0006, 43o:0.1340, 53o:0.3165, 63o:0.6418, 73o:0.3275, 83o:0.6146, 93o:0.0674, T3o:0.0471, J3o:0.0382, Q3o:0.0310, 42s:0.0036, 43s:0.0405, 44:0.0005, 54o:0.0272, 64o:0.0426, 74o:0.5039, 84o:0.0071, 94o:0.3982, T4o:0.2720, J4o:0.0558, Q4o:0.2653, K4o:0.0055, A4o:0.0034, 53s:0.2215, 54s:0.0262, 55:0.0013, 65o:0.1222, 75o:0.0004, 85o:0.1164, 95o:0.0770, T5o:0.3026, J5o:0.2200, Q5o:0.3742, K5o:0.0646, A5o:0.0024, 62s:0.2821, 63s:0.0342, 64s:0.0125, 65s:0.0151, 66:0.0004, 76o:0.0417, 86o:0.1542, 96o:0.0996, T6o:0.2335, J6o:0.2228, Q6o:0.0078, K6o:0.0021, A6o:0.0008, 72s:0.1768, 73s:0.2137, 74s:0.0342, 75s:0.0009, 76s:0.0008, 77:0.0018, 87o:0.3346, 97o:0.3844, T7o:0.0780, J7o:0.0003, Q7o:0.0062, K7o:0.0005, A7o:0.0070, 82s:0.0189, 83s:0.1821, 84s:0.0650, 85s:0.2718, 86s:0.0069, 87s:0.0246, 88:0.1635, 98o:0.0754, T8o:0.1328, J8o:0.0011, Q8o:0.0045, K8o:0.0124, A8o:0.0009, 92s:0.5245, 93s:0.2594, 94s:0.0341, 95s:0.0069, 96s:0.1262, 97s:0.0039, 98s:0.0463, 99:0.6625, T9o:0.0033, J9o:0.0022, Q9o:0.0003, K9o:0.0149, A9o:0.0002, T2s:0.0106, T3s:0.0199, T4s:0.0001, T5s:0.0148, T6s:0.0004, T7s:0.0569, T8s:0.0074, TT:0.4383, QTo:0.0003, KTo:0.1518, ATo:0.0001, J2s:0.0362, J3s:0.0450, J4s:0.0310, J5s:0.0037, J6s:0.0103, J7s:0.0003, J8s:0.0040, J9s:0.0004, JTs:0.0028, JJ:0.3752, QJo:0.0194, KJo:0.2077, AJo:0.0048, Q2s:0.0161, Q3s:0.1076, Q4s:0.0089, Q6s:0.0036, Q7s:0.1178, Q8s:0.0018, Q9s:0.0146, QTs:0.0105, QJs:0.0050, QQ:0.9927, KQo:0.4087, AQo:0.7151, K3s:0.0013, K4s:0.0017, K5s:0.0005, K7s:0.3611, K8s:0.0024, K9s:0.0015, KTs:0.0348, KJs:0.3569, KQs:0.3408, KK:0.9845, AKo:0.8459, A3s:0.0002, A4s:0.0654, A5s:0.0085, A6s:0.0166, A7s:0.0357, A8s:0.0033, A9s:0.0105, ATs:0.1779, AJs:0.1580, AQs:0.8438, AKs:0.7546, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2728, 42o:0.0001, 52o:0.0407, 62o:0.0001, 72o:0.0094, 82o:0.0120, T2o:0.0514, J2o:0.2598, Q2o:0.0423, K2o:0.6515, A2o:0.6752, 32s:0.0168, 33:0.2284, 43o:0.0147, 53o:0.1426, 63o:0.0131, 73o:0.0132, 93o:0.0008, T3o:0.0077, J3o:0.0019, Q3o:0.0108, K3o:0.0765, A3o:0.9987, 42s:0.0094, 43s:0.0770, 44:0.2703, 54o:0.6920, 64o:0.0001, 74o:0.0005, 84o:0.0230, 94o:0.0120, T4o:0.0055, J4o:0.0846, Q4o:0.0387, K4o:0.2235, A4o:0.4375, 53s:0.0410, 54s:0.4443, 55:0.0523, 65o:0.1541, 75o:0.0004, 85o:0.1139, 95o:0.1779, T5o:0.0951, J5o:0.4325, Q5o:0.2592, K5o:0.3070, A5o:0.9841, 62s:0.4189, 63s:0.0919, 65s:0.4047, 66:0.0984, 76o:0.2731, 86o:0.5220, 96o:0.0032, T6o:0.0658, J6o:0.0831, Q6o:0.0015, K6o:0.0039, A6o:0.7124, 72s:0.0085, 73s:0.0533, 74s:0.0123, 75s:0.0290, 76s:0.6247, 77:0.4146, 87o:0.0230, 97o:0.0049, T7o:0.0207, J7o:0.0002, Q7o:0.0046, K7o:0.0131, A7o:0.8132, 82s:0.1200, 83s:0.0016, 84s:0.0411, 85s:0.3415, 86s:0.0512, 87s:0.0938, 88:0.2603, 98o:0.0078, T8o:0.1097, J8o:0.0001, Q8o:0.0015, K8o:0.3411, A8o:0.4162, 92s:0.0891, 93s:0.1200, 94s:0.1159, 95s:0.0310, 96s:0.2117, 97s:0.0735, 98s:0.0970, 99:0.0030, T9o:0.0083, J9o:0.0046, Q9o:0.0238, K9o:0.2453, A9o:0.7434, T2s:0.0053, T3s:0.0249, T4s:0.0219, T5s:0.0145, T6s:0.1330, T7s:0.0406, T8s:0.0123, T9s:0.0188, TT:0.0009, JTo:0.0003, QTo:0.0001, KTo:0.6544, ATo, J2s:0.1473, J3s:0.3412, J4s:0.2532, J5s:0.0026, J6s:0.1242, J7s:0.9795, J8s:0.0007, J9s:0.2966, JTs:0.0047, JJ:0.0016, QJo:0.4108, KJo:0.3798, AJo:0.9952, Q2s:0.0276, Q3s:0.0879, Q4s:0.2948, Q5s:0.1991, Q6s:0.4954, Q7s:0.2183, Q8s:0.0081, Q9s:0.0033, QTs:0.0917, QJs:0.0536, KQo:0.0274, AQo:0.2085, K2s:0.6975, K3s:0.3200, K4s:0.2980, K5s:0.2132, K6s:0.7201, K7s:0.3865, K8s:0.3677, K9s:0.0053, KTs:0.0231, KJs:0.1601, KQs:0.0064, KK:0.0002, AKo:0.1541, A2s:0.5393, A3s:0.2950, A4s:0.2187, A5s:0.7241, A6s:0.0966, A7s:0.2261, A8s:0.8583, A9s:0.7570, ATs:0.7973, AJs:0.8177, AQs:0.0413, AKs:0.2453"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 12.56bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0001, 43o:0.0001, 53o:0.0001, Q3o:0.0004, K3o:0.0001, 43s:0.0001, 64o:0.0002, 74o:0.0031, 94o:0.0001, T4o:0.0054, J4o:0.0001, Q4o:0.0009, K4o:0.0011, 52s:0.0001, T5o:0.0001, J5o:0.0114, Q5o:0.0058, K5o:0.0001, 62s:0.0001, 63s:0.0002, 76o:0.0001, 96o:0.0003, J6o:0.0016, Q6o:0.0002, K6o:0.0003, T7o:0.0001, J7o:0.0003, Q7o:0.0028, 82s:0.0008, 85s:0.0001, 88:0.0006, 98o:0.0001, T8o:0.0002, J8o:0.0004, Q8o:0.0098, K8o:0.0178, 92s:0.0011, 93s:0.0014, 94s:0.0001, 96s:0.0004, 99:0.0074, T9o:0.0001, Q9o:0.0252, T2s:0.0002, T3s:0.0019, T4s:0.0002, T5s:0.0008, TT:0.0003, JTo:0.0002, KTo:0.0002, J4s:0.0004, J7s:0.0001, J9s:0.0007, JTs:0.0018, JJ:0.0006, QJo:0.0003, Q2s:0.0002, Q3s:0.0001, Q5s:0.0002, Q6s:0.0052, Q7s:0.0001, Q8s:0.0001, Q9s:0.0009, QTs:0.0586, QJs:0.0004, QQ:0.0105, K4s:0.0018, K5s:0.0022, K7s:0.0007, K9s:0.0003, KTs:0.0052, KJs:0.0086, KK:0.0017, AA:0.0019"
      },
      {
        "action": "3bet 12.56bb",
        "min": 0.0001,
        "range": "43o:0.0005, 63o:0.0001, K3o:0.0001, 43s:0.0001, 74o:0.0017, T4o:0.0004, J4o:0.0001, Q4o:0.0001, K4o:0.0002, 52s:0.0001, J5o:0.0057, Q5o:0.0022, 62s:0.0001, 63s:0.0003, 64s:0.0001, 96o:0.0001, J6o:0.0009, Q6o:0.0001, K6o:0.0001, J7o:0.0001, 82s:0.0001, 83s:0.0001, 88:0.0030, Q8o:0.0002, K8o:0.0094, 92s:0.0009, 93s:0.0002, 96s:0.0002, 99:0.0056, Q9o:0.0014, T3s:0.0002, T4s:0.0001, T5s:0.0001, J4s:0.0009, J9s:0.0001, JTs:0.0002, JJ:0.0173, QJo:0.0001, Q2s:0.0001, Q3s:0.0001, Q6s:0.0042, Q7s:0.0001, Q9s:0.0001, QTs:0.0013, QQ:0.0090, K4s:0.0004, K5s:0.0023, K7s:0.0002, KTs:0.0035, KJs:0.0092, KQs:0.0009, KK:0.0396, AKo:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0007, AQs:0.0004, AA:0.0105"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@12.56",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, Q2o:0.0001, A2o:0.0004, 43s:0.0001, 44:0.0001, Q4o:0.0018, K4o:0.0001, A4o:0.0032, 55:0.0002, Q5o:0.0007, A5o:0.0024, 66:0.0001, A6o:0.0007, 77:0.0011, 87o:0.0001, A7o:0.0065, 83s:0.0001, 88:0.1611, K8o:0.0004, A8o:0.0005, 94s:0.0001, 98s:0.0001, 99:0.6625, K9o:0.0089, A9o:0.0002, T7s:0.0001, TT:0.4383, QTo:0.0001, KTo:0.1518, ATo:0.0001, J3s:0.0001, JTs:0.0002, JJ:0.3752, QJo:0.0098, KJo:0.2061, AJo:0.0048, Q2s:0.0001, Q4s:0.0003, Q7s:0.0011, Q8s:0.0001, Q9s:0.0018, QTs:0.0099, QJs:0.0033, QQ:0.9927, KQo:0.4087, AQo:0.7151, K3s:0.0005, K4s:0.0008, K5s:0.0001, K7s:0.3607, K8s:0.0010, K9s:0.0013, KTs:0.0343, KJs:0.3565, KQs:0.3408, KK:0.9845, AKo:0.8459, A3s:0.0002, A4s:0.0654, A5s:0.0080, A6s:0.0165, A7s:0.0356, A8s:0.0032, A9s:0.0105, ATs:0.1779, AJs:0.1579, AQs:0.8437, AKs:0.7546, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0036, 99:0.0130, TT:0.0003, KTo:0.0002, JTs:0.0002, JJ:0.0179, QTs:0.0247, QJs:0.0004, QQ:0.0195, K9s:0.0003, KTs:0.0087, KJs:0.0178, KQs:0.0009, KK:0.0413, AKo:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0007, AQs:0.0004, AA:0.0124"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@2.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3462, K2o:0.5436, A2o:0.3066, 33:0.9862, K3o:0.6992, A3o:0.3785, 43s:0.9573, 44:0.9955, 54o:0.0020, Q4o:0.0094, K4o:0.2802, A4o:0.1897, 53s:0.9655, 54s:0.9901, 55:0.9906, 65o:0.7987, 75o:0.0010, J5o:0.0166, Q5o:0.8320, K5o:0.1569, A5o:0.0002, 63s:0.1663, 64s:0.9945, 65s:0.9991, 66:0.9969, 76o:0.0468, 96o:0.0014, T6o:0.0004, J6o:0.0026, Q6o:0.4862, K6o:0.0033, A6o:0.0012, 72s:0.0002, 73s:0.0001, 74s:0.1260, 75s:0.6736, 76s:0.9981, 77:0.9957, 87o:0.0017, 97o:0.0026, T7o:0.0186, J7o:0.0974, Q7o:0.7658, K7o:0.2220, A7o:0.0078, 84s:0.0042, 85s:0.9495, 86s:0.9536, 87s:0.9976, 88:0.9934, 98o:0.9787, T8o:0.9912, J8o:0.9875, Q8o:0.9935, K8o:0.9787, 92s:0.0003, 93s:0.0004, 94s:0.0021, 95s:0.6594, 96s:0.9752, 97s:0.9921, 98s:0.9980, 99, T9o:0.6432, J9o:0.9047, Q9o:0.9651, K9o:0.9894, T3s:0.5933, T4s:0.9202, T5s:0.3319, T6s:0.7069, T7s:0.8297, T8s:0.9562, T9s:0.0789, TT:0.9978, JTo:0.1180, QTo:0.9551, KTo:0.2635, J2s:0.8485, J3s:0.9912, J4s:0.6722, J5s:0.6105, J6s:0.9783, J7s:0.3814, J8s:0.9131, J9s:0.7659, JTs:0.9962, JJ, QJo:0.9408, KJo:0.2529, Q2s:0.9954, Q3s:0.6846, Q4s:0.4216, Q5s:0.6892, Q6s:0.4533, Q7s:0.7029, Q8s:0.9879, Q9s:0.9979, QTs:0.9992, QJs:0.9272, QQ, KQo:0.0002, K2s:0.5361, K3s:0.6435, K4s:0.7733, K5s:0.6180, K6s:0.1580, K7s:0.1779, K8s:0.9863, K9s:0.9563, KTs:0.8339, KJs:0.4604, KQs:0.0451, KK, A2s:0.3432, A3s:0.7281, A4s:0.0424, A5s:0.0006, A6s:0.0028, A7s:0.0321, A8s:0.3415, A9s:0.0027, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2080, K2o:0.0376, A2o:0.6934, 33:0.0125, K3o:0.2718, A3o:0.6215, 43s:0.0012, 44:0.0045, Q4o:0.0004, K4o:0.7180, A4o:0.8103, 53s:0.0004, 54s:0.0098, 55:0.0094, Q5o:0.0225, K5o:0.8427, A5o:0.9998, 64s:0.0036, 65s:0.0003, 66:0.0031, 96o:0.0001, T6o:0.0009, Q6o:0.2034, K6o:0.9963, A6o:0.9988, 72s:0.0001, 74s:0.0014, 75s:0.2889, 76s:0.0017, 77:0.0043, T7o:0.1138, J7o:0.0667, Q7o:0.0026, K7o:0.7779, A7o:0.9922, 82s:0.0001, 84s:0.0009, 85s:0.0057, 86s:0.0174, 87s:0.0005, 88:0.0066, 98o:0.0002, T8o:0.0003, J8o:0.0123, Q8o:0.0064, K8o:0.0211, A8o, 92s:0.0004, 93s:0.0009, 95s:0.0060, 96s:0.0062, 97s:0.0045, 98s:0.0018, 99:0.0001, T9o:0.3568, J9o:0.0951, Q9o:0.0349, K9o:0.0105, A9o, T2s:0.0002, T3s:0.0045, T4s:0.0734, T5s:0.6440, T6s:0.2924, T7s:0.1700, T8s:0.0436, T9s:0.9210, TT:0.0022, JTo:0.8820, QTo:0.0449, KTo:0.7365, ATo, J2s:0.0122, J3s:0.0012, J4s:0.3246, J5s:0.3859, J6s:0.0208, J7s:0.6185, J8s:0.0869, J9s:0.2341, JTs:0.0038, QJo:0.0592, KJo:0.7471, AJo, Q2s:0.0009, Q3s:0.3036, Q4s:0.5697, Q5s:0.3107, Q6s:0.5467, Q7s:0.2971, Q8s:0.0120, Q9s:0.0021, QTs:0.0008, QJs:0.0728, KQo:0.9998, AQo, K2s:0.4637, K3s:0.3560, K4s:0.2264, K5s:0.3820, K6s:0.8419, K7s:0.8221, K8s:0.0137, K9s:0.0437, KTs:0.1661, KJs:0.5396, KQs:0.9549, AKo, A2s:0.6568, A3s:0.2719, A4s:0.9576, A5s:0.9994, A6s:0.9972, A7s:0.9679, A8s:0.6585, A9s:0.9973, ATs, AJs, AQs, AKs"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@2.5|BB:3BET@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0002, 88:0.2067, K8o:0.0001, 99:0.9870, A9o:0.0001, TT:0.9997, KTo:0.0001, JTs:0.0010, JJ:0.9821, KJo:0.0005, AJo:0.0004, QQ:0.9805, KQo:0.0122, AQo:0.0180, K8s:0.0001, K9s:0.0154, KTs:0.8957, KJs:0.2358, KQs:0.9990, KK:0.9587, AKo:0.7426, A6s:0.0003, A7s:0.0005, A8s:0.0008, A9s:0.0006, ATs:0.1559, AJs:0.3450, AQs:0.9888, AKs:0.9980, AA:0.9876"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@12.56",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.9803, 55, A5o, 66, A6o, 77, A7o, 88, A8o, 99, K9o:0.9961, A9o, TT, QTo:0.0002, KTo, ATo, JTs:0.5846, JJ, QJo:0.9994, KJo, AJo, QTs, QJs, QQ, KQo, AQo, K6s:0.0002, K7s:0.1139, K8s:0.9998, K9s, KTs, KJs, KQs, KK, AKo, A2s:0.9998, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 12.56bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0002, 33:0.0003, 43s:0.0026, A4o:0.0001, 54s:0.2739, 55:0.0239, A5o:0.0155, 65s:0.0022, 66:0.0969, A6o:0.0004, 76s:0.0004, A7o:0.0139, 88:0.1023, A8o:0.0368, 98s:0.0016, 99:0.3752, A9o:0.1780, T8s:0.0001, T9s:0.0207, KTo:0.0008, ATo:0.0334, J4s:0.0003, J6s:0.0002, JTs:0.0259, JJ:0.0003, QJo:0.0022, KJo:0.1142, Q2s:0.0001, Q7s:0.0002, Q9s:0.0085, QJs:0.0155, KQo:0.1362, K5s:0.0274, K6s:0.0012, K7s:0.0036, K8s:0.0220, K9s:0.3331, KTs:0.2009, KJs:0.0914, KQs:0.0052, KK:0.0003, A2s:0.0003, A4s:0.0001, A5s:0.0070, A6s:0.0254, A7s:0.0012, A8s:0.0229, A9s:0.4679, ATs:0.0174, AKs:0.0015, AA:0.1907"
      },
      {
        "action": "3bet 12.56bb",
        "min": 0.0001,
        "range": "22:0.0031, A2o:0.0075, 32s:0.0001, 33:0.6570, A3o:0.8969, 43s:0.0001, 44:0.9131, A4o:0.9591, 54s:0.0012, 55:0.8938, A5o:0.9452, 66:0.8146, A6o:0.0428, 76s:0.0070, 77:0.9995, A7o:0.7256, 85s:0.0001, 86s:0.0001, 87s:0.0003, 88:0.7074, 98o:0.0001, A8o:0.7391, 96s:0.0001, 98s:0.0005, 99:0.3119, T9o:0.0001, K9o:0.0001, A9o:0.0044, T5s:0.0001, T6s:0.0004, T7s:0.0001, T8s:0.0005, T9s:0.0278, TT, JTo:0.0009, QTo:0.0007, KTo:0.0010, ATo:0.9666, J8s:0.0002, J9s:0.0006, JTs:0.4931, JJ:0.9997, QJo:0.1442, KJo:0.4504, AJo, Q2s:0.0002, Q3s:0.0011, Q4s:0.0003, Q6s:0.0010, Q7s:0.0015, Q8s:0.0485, Q9s:0.0059, QTs:0.9986, QJs:0.9834, QQ, KQo:0.8638, AQo, K2s:0.0203, K3s:0.1354, K4s:0.5912, K5s:0.1856, K6s:0.0161, K7s:0.9835, K8s:0.3618, K9s:0.0189, KTs:0.7991, KJs:0.9080, KQs:0.9948, KK:0.9997, AKo, A2s:0.9969, A3s:0.9997, A4s, A5s:0.9929, A6s:0.9745, A7s:0.9981, A8s:0.9771, A9s:0.5320, ATs:0.9826, AJs, AQs, AKs:0.9985, AA:0.8093"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 9.36bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4457, A2o:0.0725, 32s:0.0123, K3o:0.0001, A3o:0.0376, 42s:0.0002, 43s:0.8776, 44:0.0009, 54o:0.0470, A4o:0.0010, 52s:0.0167, 53s:0.5631, 54s:0.9294, 55:0.0932, Q5o:0.0001, K5o:0.0003, A5o:0.1817, 63s:0.4243, 64s:0.9958, 65s:0.9637, 66:0.0068, 76o:0.0282, Q6o:0.0002, K6o:0.0003, A6o:0.0842, 73s:0.0002, 74s:0.2211, 75s:0.4355, 76s:0.7170, A7o:0.0019, 82s:0.0001, 84s:0.1623, 85s:0.9274, 86s:0.9643, 87s:0.6649, 88:0.0019, J8o:0.0001, Q8o:0.0023, K8o:0.0075, A8o:0.2796, 96s:0.8896, 97s:0.8652, 98s:0.4562, 99:0.0034, T9o:0.0003, J9o:0.0006, Q9o:0.0113, K9o:0.7505, A9o:0.6942, T2s:0.0001, T3s:0.0276, T4s:0.1258, T5s:0.0001, T6s:0.0092, T7s:0.4948, T8s:0.9826, T9s:0.9062, JTo:0.3955, QTo:0.8830, KTo:0.9815, J2s:0.0001, J3s:0.0014, J4s:0.1434, J5s:0.0117, J6s:0.0527, J7s:0.1561, J8s:0.6973, J9s:0.9145, JTs:0.1618, QJo:0.4173, KJo:0.8381, Q2s:0.0001, Q3s:0.1173, Q4s:0.6174, Q5s:0.2161, Q6s:0.5684, Q7s:0.5312, Q8s:0.0323, Q9s:0.9147, QTs:0.4398, QJs:0.0191, KQo:0.4238, K2s:0.1645, K3s:0.0274, K4s:0.4790, K5s:0.0420, K6s:0.0370, K7s:0.6344, K8s:0.9805, K9s:0.9949, KTs:0.9888, KJs:0.0645, KQs:0.2012, A2s:0.3312, A3s:0.4222, A4s:0.0078, A6s:0.0091, A7s:0.0513, A8s:0.2516, A9s:0.3419, ATs:0.2532, AA:0.9998"
      },
      {
        "action": "3bet 9.36bb",
        "min": 0.0001,
        "range": "22:0.5543, A2o:0.9271, 33:0.9997, A3o:0.9608, 42s:0.0001, 43s:0.0858, 44:0.9988, A4o:0.9988, 53s:0.1506, 54s:0.0393, 55:0.9068, A5o:0.8183, 64s:0.0012, 65s:0.0334, 66:0.9928, A6o:0.9155, 74s:0.0027, 75s:0.4850, 76s:0.2734, 77, A7o:0.9981, 85s:0.0255, 86s:0.0184, 87s:0.2222, 88:0.9981, A8o:0.7204, 97s:0.0003, 98s:0.0222, 99:0.9966, J9o:0.0007, Q9o:0.0003, K9o:0.0001, A9o:0.3058, T4s:0.0144, T6s:0.0011, T7s:0.0509, T8s:0.0005, T9s:0.0225, TT, JTo:0.0239, QTo:0.1126, KTo:0.0183, ATo, J3s:0.0002, J4s:0.0011, J5s:0.0267, J6s:0.0988, J7s:0.0349, J8s:0.2567, J9s:0.0415, JTs:0.8375, JJ, QJo:0.5825, KJo:0.1618, AJo, Q2s:0.0007, Q3s:0.0936, Q4s:0.1390, Q5s:0.7816, Q6s:0.1698, Q7s:0.1584, Q8s:0.9674, Q9s:0.0734, QTs:0.5599, QJs:0.9809, QQ, KQo:0.5762, AQo, K2s:0.1027, K3s:0.9591, K4s:0.5207, K5s:0.9544, K6s:0.8754, K7s:0.3655, K8s:0.0195, K9s:0.0049, KTs:0.0112, KJs:0.9354, KQs:0.7988, KK, AKo, A2s:0.6687, A3s:0.5778, A4s:0.9921, A5s, A6s:0.9907, A7s:0.9486, A8s:0.7484, A9s:0.6581, ATs:0.7468, AJs, AQs, AKs, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@9.36",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0197, A4o:0.0126, A5o:0.0042, 66:0.0001, A6o:0.0416, A7o:0.0786, TT:0.0170, KTo:0.0044, JJ:0.9996, AJo:0.0004, QQ, KQo:0.0001, AQo:0.0002, K8s:0.0001, K9s:0.0001, KTs:0.0003, KK, AKo:0.0037, A2s:0.0001, A6s:0.0002, A7s:0.0033, A8s:0.0184, ATs:0.5718, AJs:0.9923, AQs:0.9175, AKs:0.9963, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 32o:0.0003, 52o:0.0001, 62o:0.0006, 72o:0.0004, 92o:0.0001, J2o:0.0001, K2o:0.0010, A2o:0.0110, 33:0.2375, 53o:0.0003, 83o:0.0001, 93o:0.0005, T3o:0.0003, J3o:0.0001, Q3o:0.0001, K3o:0.0003, A3o:0.0004, 42s:0.0101, 43s:0.0073, 44:0.0653, 54o:0.0003, 64o:0.0003, 74o:0.0002, 84o:0.0001, J4o:0.0006, Q4o:0.0152, K4o:0.0004, 52s:0.0008, 53s:0.0972, 54s:0.3999, 55:0.2180, 65o:0.0001, 75o:0.0003, 85o:0.0002, 95o:0.0001, T5o:0.0019, Q5o:0.0025, K5o:0.0011, A5o:0.0029, 62s:0.0001, 63s:0.0451, 64s:0.2724, 65s:0.0024, 66:0.1028, 76o:0.0001, 86o:0.0001, 96o:0.0002, T6o:0.0007, J6o:0.0005, Q6o:0.0001, K6o:0.0012, A6o:0.0062, 72s:0.0014, 73s:0.0034, 74s:0.0001, 75s:0.0007, 76s:0.6251, 77:0.1136, 87o:0.0005, 97o:0.0006, T7o:0.0708, J7o:0.0006, Q7o:0.0003, K7o:0.0001, A7o:0.0328, 82s:0.0001, 83s:0.0116, 84s:0.1000, 85s:0.9238, 87s:0.0001, 88:0.2938, 98o:0.0003, J8o:0.0009, Q8o:0.0003, K8o:0.0004, A8o:0.0007, 92s:0.0002, 93s:0.0097, 94s:0.0744, 95s:0.0403, 96s:0.0002, 97s:0.0046, 98s:0.0074, 99:0.2898, T9o:0.0011, J9o:0.0001, Q9o:0.0018, K9o:0.0001, A9o:0.0005, T2s:0.0003, T3s:0.0001, T4s:0.0042, T6s:0.0024, T7s:0.1697, T8s:0.4585, T9s:0.0233, TT:0.4457, JTo:0.0006, QTo:0.0027, KTo:0.0238, ATo:0.7102, J2s:0.0012, J3s:0.0011, J4s:0.0003, J5s:0.3945, J6s:0.0639, J7s:0.0003, J8s:0.0343, J9s:0.1489, JTs:0.1319, JJ:0.1831, QJo:0.0087, KJo:0.0011, AJo:0.6236, Q2s:0.0234, Q3s:0.0146, Q4s:0.3326, Q5s:0.1220, Q6s:0.0919, Q7s:0.0002, Q8s:0.1008, Q9s:0.1070, QTs:0.4649, QJs:0.4062, QQ:0.0195, KQo:0.3985, AQo:0.2287, K2s:0.0072, K3s:0.0138, K4s:0.0079, K5s:0.0021, K6s:0.0001, K7s:0.0235, K8s:0.0001, K9s:0.0396, KTs:0.0029, KJs:0.3315, KQs:0.2137, AKo:0.1988, A2s:0.0736, A3s:0.5229, A4s:0.0088, A5s:0.2903, A6s:0.2207, A7s:0.1265, A8s:0.2755, A9s:0.1537, ATs:0.2881, AJs:0.1772, AQs:0.0113, AKs:0.0247, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, 32o:0.0001, 72o:0.0001, 82o:0.0001, J2o:0.0002, Q2o:0.0001, K2o:0.0001, A2o:0.0002, 32s:0.0002, 33:0.0004, 43o:0.0002, 53o:0.0001, 63o:0.0002, 93o:0.0004, J3o:0.0001, Q3o:0.0001, A3o:0.0008, 43s:0.0038, 44:0.0004, 64o:0.0011, 74o:0.0003, 94o:0.0001, T4o:0.0001, J4o:0.0003, Q4o:0.0013, K4o:0.0007, A4o:0.1224, 52s:0.0005, 53s:0.0021, 54s:0.0055, 55:0.0027, 65o:0.0007, 75o:0.0002, 95o:0.0003, Q5o:0.0003, K5o:0.0005, A5o:0.0007, 62s:0.0001, 64s:0.0001, 65s:0.0001, 66:0.0021, 76o:0.0002, J6o:0.0003, Q6o:0.0001, K6o:0.0002, A6o:0.0005, 72s:0.0001, 73s:0.0002, 76s:0.0273, 77:0.2433, 97o:0.0003, J7o:0.0001, K7o:0.0001, A7o:0.0113, 82s:0.0001, 83s:0.0002, 84s:0.0003, 85s:0.0001, 86s:0.0559, 87s:0.0002, 88:0.0031, 98o:0.0001, Q8o:0.0002, K8o:0.0005, A8o:0.0005, 93s:0.0011, 94s:0.0005, 96s:0.0005, 97s:0.0002, 98s:0.0012, 99:0.2594, T9o:0.0010, J9o:0.0001, Q9o:0.0017, K9o:0.0008, A9o:0.0484, T2s:0.0064, T4s:0.0011, T6s:0.0005, T8s:0.0020, T9s:0.0001, TT:0.5330, JTo:0.4806, KTo:0.0043, ATo:0.0604, J2s:0.1679, J3s:0.0001, J4s:0.0003, J5s:0.1076, J6s:0.0006, J7s:0.0001, J8s:0.0029, J9s:0.5039, JTs:0.0360, JJ:0.8168, QJo:0.0006, KJo:0.0011, AJo:0.1037, Q2s:0.0291, Q3s:0.0022, Q4s:0.0022, Q5s:0.0325, Q6s:0.0001, Q7s:0.0002, Q8s:0.1190, Q9s:0.2537, QTs:0.1930, QJs:0.0543, QQ:0.9792, KQo:0.1317, AQo:0.6562, K3s:0.0017, K4s:0.0022, K5s:0.0008, K6s:0.0502, K7s:0.0019, K8s:0.0008, K9s:0.0027, KTs:0.0018, KJs:0.4207, KQs:0.0932, KK, AKo:0.7989, A2s:0.1532, A3s:0.0595, A4s:0.0004, A5s:0.5525, A6s:0.0869, A7s:0.1811, A8s:0.0005, A9s:0.7632, ATs:0.4022, AJs:0.5976, AQs:0.9847, AKs:0.9610, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0031, A5o:0.0001, K9o:0.0002, TT:0.0151, KTo:0.0001, J8s:0.0003, JJ:0.8657, Q7s:0.0001, Q8s:0.0006, QQ, AQo:0.0001, K4s:0.0002, K5s:0.0007, K7s:0.0001, K8s:0.0005, KK, AKo:0.0037, A8s:0.0024, ATs:0.0329, AJs:0.3026, AQs:0.7843, AKs:0.9921, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 55:0.0020, 66:0.0171, 88:0.0081, A8o:0.0001, 99:0.3752, A9o:0.0007, ATo:0.0002, JJ:0.0003, KJo:0.0015, QJs:0.0002, KQo:0.0008, K8s:0.0001, K9s:0.0153, KTs:0.0007, KQs:0.0005, KK:0.0003, A5s:0.0001, A6s:0.0001, A8s:0.0001, A9s:0.0030, ATs:0.0096, AKs:0.0015, AA:0.1907"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@12.56",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "87s:0.0001, 88:0.0008, 99:0.0339, TT:0.9980, ATo:0.0002, J9s:0.0001, JJ:0.9998, AJo:0.0001, QQ, AQo:0.0797, KK, AKo:0.9878, A8s:0.0003, A9s:0.0003, ATs:0.0012, AJs:0.0030, AQs:0.8977, AKs:0.9990, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@12.56",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, TT:0.0170, JJ:0.9996, AJo:0.0004, QQ, AQo:0.0002, KK, AKo:0.0037, A7s:0.0030, A8s:0.0184, ATs:0.5718, AJs:0.9923, AQs:0.9175, AKs:0.9963, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@12.56|BB:CALL@11.56",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.1913, K5s:0.0001, KK, AQs:0.0003, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@9.36",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 12.56bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.3838, 55:0.6527, 66:0.6307, 77:0.8398, A7o:0.0004, 88:0.1919, A8o:0.3302, 99:0.8213, A9o:0.3546, TT:0.6761, ATo:0.2009, JJ:0.4921, AJo:0.5262, QQ:0.4682, KQo:0.6517, AQo:0.8653, KTs:0.0315, KJs:0.2845, KQs:0.8369, KK:0.1551, AKo:0.8139, A3s:0.0005, A4s:0.0012, A5s:0.3635, A6s:0.9628, A7s:0.6385, A8s:0.7449, A9s:0.7902, ATs:0.7140, AJs:0.8311, AQs:0.7546, AKs:0.6867, AA:0.3859"
      },
      {
        "action": "3bet 12.56bb",
        "min": 0.0001,
        "range": "44:0.6068, 55:0.3473, 66:0.3693, 77:0.1602, A7o:0.0014, 88:0.8081, A8o:0.6698, 99:0.1787, A9o:0.6454, TT:0.3239, ATo:0.7991, JJ:0.5079, AJo:0.4738, QQ:0.5318, KQo:0.3481, AQo:0.1347, KTs:0.0318, KJs:0.7155, KQs:0.1631, KK:0.8449, AKo:0.1861, A3s:0.0007, A4s:0.0010, A5s:0.3389, A6s:0.0325, A7s:0.3615, A8s:0.2551, A9s:0.2098, ATs:0.2860, AJs:0.1689, AQs:0.2454, AKs:0.3133, AA:0.6141"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@9.36",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.9970, 44, 55, 66, A6o:0.0459, 77, A7o, 88, A8o, 99, A9o, TT, ATo, JJ, KJo:0.9955, AJo, QTs:0.0004, QJs:0.9863, QQ, KQo, AQo, KTs, KJs, KQs, KK, AKo, A2s:0.6648, A3s:0.9989, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@9.36|SB:CALL@8.86",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0004, 88:0.0019, 99:0.0266, TT:0.2296, J8s:0.0001, JJ:0.0076, AJo:0.0003, QQ:0.0124, AQo:0.0100, KJs:0.0003, KQs:0.0001, KK:0.0343, AKo:0.0362, ATs:0.0013, AJs:0.0293, AQs:0.0190, AKs:0.0821"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0004, 88:0.0995, 99:0.9724, TT:0.7704, J8s:0.0001, JJ:0.9924, AJo:0.0012, QQ:0.9876, AQo:0.9300, KJs:0.0001, KQs:0.0001, KK:0.9657, AKo:0.9638, A9s:0.0001, ATs:0.0009, AJs:0.1077, AQs:0.9804, AKs:0.9179, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@9.36|SB:CALL@8.86|BB:3BET@12.56",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.3838, 55:0.6527, 66:0.6307, 77:0.8398, A7o:0.0004, 88:0.1919, A8o:0.3302, 99:0.8213, A9o:0.3546, TT:0.6761, ATo:0.2009, JJ:0.4921, AJo:0.5262, QQ:0.4682, KQo:0.6517, AQo:0.8653, KTs:0.0315, KJs:0.2845, KQs:0.8369, KK:0.1551, AKo:0.8139, A3s:0.0005, A4s:0.0012, A5s:0.3635, A6s:0.9628, A7s:0.6385, A8s:0.7449, A9s:0.7902, ATs:0.7140, AJs:0.8311, AQs:0.7546, AKs:0.6867, AA:0.3859"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@9.36|SB:3BET@12.56",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0002, 77:0.0001, 88:0.1625, 98s:0.0001, 99:0.9966, TT, JJ, AJo:0.0028, Q9s:0.0002, QQ, KQo:0.0001, AQo:0.9226, K9s:0.0001, KQs:0.0001, KK, AKo, A8s:0.0001, ATs:0.0026, AJs:0.1864, AQs:0.9990, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A8o:0.0001, A9o:0.0001, JTs:0.0001, KJo:0.0002, Q8s:0.0001, Q9s:0.0002, QJs:0.0005, KQo:0.0003, K9s:0.0009, KTs:0.0251, KJs:0.0004, KK:0.0010, A5s:0.0027, A6s:0.0001, A7s:0.0055, A8s:0.0166, A9s:0.0221, ATs:0.0044, AA:0.0446"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 44:0.0337, 55:0.9936, 66, 77, 88, 99, A9o:0.0011, TT, QTo:0.0002, KTo:0.0001, ATo, J9s:0.0001, JTs:0.0011, JJ, QJo:0.0001, AJo, Q9s:0.0001, QTs:0.1920, QJs:0.9994, QQ, KQo:0.9980, AQo, K5s:0.0001, K9s:0.0004, KTs:0.7320, KJs:0.9984, KQs, KK:0.9990, AKo, A2s:0.0106, A3s:0.0007, A4s:0.1190, A5s:0.7105, A6s:0.0070, A7s:0.2078, A8s:0.9832, A9s:0.9779, ATs:0.9956, AJs, AQs, AKs, AA:0.9554"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0089, 33:0.0002, 54s:0.1487, 55:0.0047, 65s:0.5076, 66:0.0563, 77:0.0019, 86s:0.0013, 87s:0.0231, 88:0.8436, 98s:0.0004, 99:0.7216, T7s:0.0004, TT:0.2372, KTo:0.0462, ATo:0.0321, J7s:0.0016, J9s:0.0728, JTs:0.0379, JJ:0.0007, QJo:0.0075, AJo:0.1470, Q6s:0.0018, Q8s:0.0142, Q9s:0.4014, QTs:0.0128, QJs:0.0005, QQ:0.0003, KQo:0.1382, AQo:0.0125, K5s:0.0038, K6s:0.0238, K7s:0.0003, K9s:0.1369, KTs:0.0101, KJs:0.0019, KQs:0.0003, A2s:0.0008, A3s:0.0001, A4s:0.0002, A6s:0.0003, A7s:0.0005, A8s:0.0007, A9s:0.7039, ATs:0.3262, AJs:0.9916, AQs:0.3229"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "22:0.0010, A2o:0.0011, K3o:0.0017, A3o:0.3593, 42s:0.0005, K4o:0.0004, A4o:0.0251, 52s:0.0001, 54s:0.0001, A5o:0.1987, 65s:0.0001, 66:0.0263, A6o:0.1065, 76s:0.0011, A7o:0.1921, 88:0.1100, K8o:0.0006, A8o:0.2132, 98s:0.0001, 99:0.2673, A9o:0.0992, T6s:0.0014, TT:0.2447, ATo:0.1187, J8s:0.0001, JTs:0.0001, JJ:0.0002, KJo:0.0001, AJo:0.4295, Q8s:0.0004, Q9s:0.0024, QTs:0.0003, QQ:0.0004, KQo:0.0002, AQo:0.0032, K2s:0.0001, K3s:0.0002, K4s:0.0001, K5s:0.0001, K6s:0.0002, K8s:0.0005, K9s:0.0008, KTs:0.0006, KQs:0.0001, KK:0.0028, AKo:0.0026, A3s:0.0011, A4s:0.0001, A5s:0.0001, A6s:0.0017, A7s:0.0025, A8s:0.0061, A9s:0.1635, ATs:0.0002, AJs:0.0007, AQs:0.1109, AKs:0.3023, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9568, A2o:0.0722, 33:0.9984, A3o:0.0219, 44:0.9986, A4o:0.2555, 54s:0.0382, 55:0.9942, A5o:0.7498, 66:0.9167, A6o:0.0184, 77:0.9979, A7o:0.0028, 86s:0.0003, 87s:0.0076, 88:0.0462, A8o:0.0188, 99:0.0111, T8s:0.0027, TT:0.5180, QTo:0.0417, KTo:0.9521, ATo:0.8414, J7s:0.0107, J8s:0.0285, J9s:0.7935, JTs:0.9616, JJ:0.9991, QJo:0.9849, KJo:0.9987, AJo:0.4235, Q2s:0.0014, Q3s:0.0456, Q4s:0.0573, Q5s:0.0255, Q6s:0.1444, Q8s:0.1781, Q9s:0.2376, QTs:0.9868, QJs:0.9989, QQ:0.9993, KQo:0.8612, AQo:0.9843, K2s:0.9952, K3s:0.9990, K4s:0.9981, K5s:0.9953, K6s:0.9106, K7s:0.9990, K8s:0.9991, K9s:0.8334, KTs:0.9882, KJs:0.9980, KQs:0.9995, KK:0.9971, AKo:0.9974, A2s:0.9983, A3s:0.9986, A4s:0.9990, A5s:0.9997, A6s:0.9968, A7s:0.9961, A8s:0.9930, A9s:0.1284, ATs:0.6735, AJs:0.0078, AQs:0.5661, AKs:0.6976"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0098, 33:0.0021, A3o:0.0011, 42s:0.0008, 43s:0.0255, 44:0.2678, A4o:0.0007, 52s:0.0001, 53s:0.8205, 54s:0.9969, 55:0.0644, A5o:0.0832, 63s:0.0164, 64s:0.9461, 65s:0.9996, K6o:0.0001, A6o:0.0006, 75s:0.9826, 76s:0.9997, K7o:0.0001, A7o:0.5857, 85s:0.1431, 86s:0.9970, 87s:0.9869, T8o:0.0002, Q8o:0.0004, K8o:0.0016, A8o:0.5546, 96s:0.8546, 97s:0.9954, 98s:0.7666, T9o:0.0140, Q9o:0.0023, K9o:0.4793, A9o:0.5561, T3s:0.0001, T4s:0.0003, T5s:0.0002, T6s:0.0033, T7s:0.9775, T8s:0.9852, T9s:0.2589, JTo:0.2997, QTo:0.9735, KTo, J2s:0.0004, J5s:0.0001, J6s:0.0014, J7s:0.1247, J8s:0.5446, J9s:0.2120, JTs:0.0132, QJo:0.9993, KJo:0.9992, Q2s:0.0106, Q3s:0.0153, Q4s:0.6388, Q5s:0.3171, Q6s:0.9100, Q7s:0.9350, Q8s:0.5846, Q9s:0.0168, QTs:0.0025, QJs:0.0127, KQo:0.2093, K2s:0.1036, K3s:0.4549, K4s:0.9457, K5s:0.9555, K6s:0.9623, K7s:0.5751, K8s:0.7939, K9s:0.0662, KTs:0.9830, KJs:0.6185, KQs:0.0078, A2s:0.0049, A3s:0.0366, A4s:0.1416, A5s:0.0749, A6s:0.1720, A7s:0.0203, A8s:0.0083, A9s:0.9609, AA:0.9150"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9900, A2o:0.0022, 33:0.9979, A3o:0.0001, 44:0.7322, A4o:0.0023, 53s:0.0001, 55:0.9356, A5o:0.0203, 64s:0.0001, 66, 76s:0.0001, 77, A7o:0.0265, 86s:0.0001, 87s:0.0128, 88, A8o:0.4454, 96s:0.0001, 98s:0.2320, 99, T9o:0.0001, K9o:0.0008, A9o:0.4439, T3s:0.0001, T6s:0.0008, T7s:0.0004, T8s:0.0004, T9s:0.7410, TT, JTo:0.6980, QTo:0.0265, KTo:0.0001, ATo, J6s:0.0008, J7s:0.0039, J8s:0.4553, J9s:0.7878, JTs:0.9868, JJ, QJo:0.0007, KJo:0.0008, AJo, Q2s:0.0001, Q4s:0.0002, Q6s:0.0004, Q8s:0.4152, Q9s:0.9831, QTs:0.9975, QJs:0.9872, QQ, KQo:0.7907, AQo, K2s:0.0064, K3s:0.0006, K4s:0.0012, K5s:0.0172, K6s:0.0022, K7s:0.4206, K8s:0.2060, K9s:0.9337, KTs:0.0169, KJs:0.3815, KQs:0.9922, KK, AKo, A2s:0.9950, A3s:0.9634, A4s:0.8584, A5s:0.9251, A6s:0.8279, A7s:0.9797, A8s:0.9917, A9s:0.0391, ATs, AJs, AQs, AKs, AA:0.0850"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@12.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.9915, 66, 77, 88, A8o:0.0001, 99, A9o:0.1915, TT, ATo, JTs:0.0002, JJ, QJo:0.0002, AJo, Q9s:0.0001, QTs:0.0002, QJs:0.0315, QQ, KQo:0.4283, AQo, K6s:0.0001, K9s:0.0003, KTs:0.1464, KJs:0.9869, KQs, KK, AKo, A4s:0.0012, A5s:0.0013, A6s:0.0002, A7s:0.0035, A8s:0.9833, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8313, K2o:0.0023, 33:0.7713, 73o:0.0001, 42s:0.0659, 44:0.9605, K4o:0.0002, 52s:0.6411, 53s:0.0292, 54s:0.4711, 55:0.9598, 65o:0.0025, K5o:0.0003, 62s:0.2141, 63s:0.0029, 64s:0.4271, 65s:0.3350, 66:0.8756, 73s:0.0213, 74s:0.1541, 75s:0.2045, 76s:0.0873, 77:0.8788, T7o:0.0002, 83s:0.0063, 84s:0.0001, 85s:0.0236, 86s:0.2728, 87s:0.0005, 88:0.9285, Q8o:0.0001, A8o:0.0002, 98s:0.0115, 99:0.0014, J9o:0.0014, Q9o:0.0001, K9o:0.0062, T4s:0.0023, T5s:0.3295, T7s:0.0416, T8s:0.0829, T9s:0.0813, TT:0.0001, JTo:0.0004, QTo:0.1169, KTo:0.4270, ATo:0.0617, J2s:0.0002, J3s:0.1985, J4s:0.0643, J5s:0.0002, J6s:0.0053, J7s:0.0137, J8s:0.6023, J9s:0.0364, JTs:0.0089, QJo:0.2402, KJo:0.6268, AJo:0.1509, Q2s:0.0222, Q3s:0.0018, Q4s:0.7418, Q5s:0.0739, Q6s:0.0246, Q7s:0.0010, Q8s:0.1829, Q9s:0.8290, QTs:0.1273, QJs:0.2183, QQ:0.0003, KQo:0.9463, AQo:0.0124, K2s:0.0030, K3s:0.0178, K4s:0.2277, K5s:0.0288, K6s:0.9362, K7s:0.2130, K8s:0.1781, K9s:0.1856, KTs:0.1041, KJs:0.7520, KQs:0.9453, AKo:0.0013, A2s:0.6762, A3s:0.0012, A4s:0.0020, A5s:0.0168, A6s:0.0040, A7s:0.0325, A8s:0.0044, A9s:0.1355, ATs:0.8777, AJs:0.0043, AQs:0.0041, AKs:0.0116, AA:0.0010"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0017, 44:0.0005, K5o:0.0077, 66:0.0020, 77:0.1157, 83s:0.0009, 86s:0.0001, 87s:0.0007, 88:0.0201, A8o:0.0004, 99:0.9956, A9o:0.0073, T2s:0.0001, T4s:0.0014, T5s:0.0001, T9s:0.1268, TT:0.9997, JTo:0.0809, QTo:0.0307, KTo:0.1716, ATo:0.0450, J8s:0.0003, J9s:0.1384, JTs:0.7130, JJ, QJo:0.0122, KJo:0.3304, AJo:0.8486, Q6s:0.0001, Q9s:0.0046, QTs:0.7956, QJs:0.5465, QQ:0.9997, KQo:0.0108, AQo:0.9874, K2s:0.0003, K5s:0.0042, K7s:0.0073, K9s:0.2493, KTs:0.8787, KJs:0.2356, KQs:0.0529, KK, AKo:0.9985, A2s:0.0007, A3s:0.0011, A5s:0.0061, A6s:0.0007, A7s:0.0030, A8s:0.0010, A9s:0.1899, ATs:0.0454, AJs:0.9928, AQs:0.9952, AKs:0.9883, AA:0.9990"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A6o:0.0001, 77:0.0014, 88:0.0065, A8o:0.0001, 99:0.1783, T9s:0.0001, TT:0.3531, ATo:0.0001, J9s:0.0001, JTs:0.0007, JJ:0.4855, Q8s:0.0002, Q9s:0.0001, QQ:0.3933, AQo:0.2361, K5s:0.0001, K6s:0.0010, K7s:0.0001, K9s:0.0001, KTs:0.0044, KJs:0.0007, KQs:0.0500, KK:0.2427, AKo:0.5460, A2s:0.0003, A4s:0.0001, A7s:0.0001, A8s:0.0003, A9s:0.0021, AQs:0.3057, AKs:0.6648, AA:0.7130"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 55:0.0001, 66:0.0002, A6o:0.0002, 77:0.0084, 88:0.0186, 99:0.2373, A9o:0.0002, T9s:0.0001, TT:0.6242, J9s:0.0002, JJ:0.5093, QJo:0.0002, AJo:0.0064, Q8s:0.0001, Q9s:0.0003, QTs:0.0037, QJs:0.0004, QQ:0.6067, KQo:0.0001, AQo:0.7145, K6s:0.0006, K9s:0.0001, KTs:0.0006, KJs:0.0002, KQs:0.0585, KK:0.7573, AKo:0.4540, A2s:0.0022, A3s:0.0004, A5s:0.0055, A6s:0.0002, A7s:0.0004, A8s:0.0010, A9s:0.0035, AJs:0.0010, AQs:0.6743, AKs:0.3351, AA:0.2870"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0368, 99:0.6948, TT:0.2372, JJ:0.0007, AJo:0.0029, QQ:0.0003, AQo:0.0125, A9s:0.0006, ATs:0.0039, AJs:0.9425, AQs:0.3226"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@5.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0077, 33:0.0060, 42s:0.0001, 44:0.0341, A5o:0.0003, 65s:0.0002, 66:0.0289, 77:0.1762, 88:0.0642, 99:0.9083, TT:0.9954, J9s:0.0001, JJ:0.9978, AJo:0.9865, Q9s:0.0014, QTs:0.0044, QQ, KQo:0.0001, AQo:0.9940, K5s:0.0001, K6s:0.0001, K9s:0.0002, KK, AKo:0.9991, A3s:0.0001, A4s:0.0154, A5s:0.0015, A7s:0.0139, A8s:0.0002, A9s:0.1057, ATs:0.0424, AJs:0.9928, AQs:0.9877, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@5.5",
    "heroPos": "CO",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0020, A3o:0.0579, 44:0.0002, A4o:0.1652, 55:0.9485, A5o:0.2270, 66:0.8030, A6o:0.0102, 77:0.2675, 88:0.9584, A8o:0.0603, 98s:0.0001, 99:0.6375, A9o:0.0394, T8s:0.0059, T9s:0.1023, TT:0.5742, KTo:0.0001, ATo:0.1003, J7s:0.0012, J8s:0.0003, J9s:0.2189, JTs:0.8569, JJ:0.9668, KJo:0.0049, AJo:0.9792, Q8s:0.0055, Q9s:0.0642, QTs:0.0708, QJs:0.5804, QQ:0.7174, KQo:0.0063, AQo:0.5656, K3s:0.0006, K4s:0.0001, K5s:0.2002, K6s:0.2830, K7s:0.1217, K8s:0.0010, K9s:0.0182, KTs:0.8700, KJs:0.8374, KQs:0.3488, KK:0.7824, A2s:0.0247, A3s:0.2744, A4s:0.0001, A5s:0.0117, A6s:0.3448, A7s:0.0245, A8s:0.5111, A9s:0.2306, ATs:0.1698, AJs, AQs:0.9465, AKs:0.0001, AA:0.9991"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "A2o:0.0358, A3o:0.1195, A4o:0.1778, 55:0.0312, A5o:0.0806, 66:0.0869, A6o:0.0251, 77:0.0561, A7o:0.2222, 88:0.0023, K8o:0.0003, A8o:0.1024, 99:0.1711, K9o:0.0037, A9o:0.0722, T8s:0.0004, T9s:0.0033, TT:0.4120, KTo:0.0033, ATo:0.8006, J7s:0.0002, J9s:0.0040, JTs:0.0599, JJ:0.0283, QJo:0.0016, KJo:0.0035, AJo:0.0064, Q5s:0.0001, Q8s:0.0014, Q9s:0.0087, QTs:0.3339, QJs:0.0468, QQ:0.2825, KQo:0.0049, AQo:0.4344, K5s:0.0078, K6s:0.0022, K7s:0.0078, K8s:0.0065, K9s:0.0007, KTs:0.0904, KJs:0.0110, KQs:0.0339, KK:0.2176, AKo, A2s:0.9083, A3s:0.5652, A4s:0.9918, A5s:0.9588, A6s:0.5851, A7s:0.9693, A8s:0.4470, A9s:0.7515, ATs:0.8302, AJs:0.0001, AQs:0.0533, AKs, AA:0.0009"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@5.5|CO:4BET@25.38",
    "heroPos": "SB",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0093, TT:0.2381, JJ:0.0002, QQ:0.0004, AQo:0.0001, KK:0.0028, AKo:0.0026, AQs:0.1103, AKs:0.3023, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@5.5|BB:4BET@12.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0002, A4o:0.0001, A5o:0.0001, 66:0.0045, 88:0.0216, A9o:0.0002, TT:0.0146, KTo:0.0001, ATo:0.0002, JTs:0.0001, JJ:0.7830, KJo:0.0001, AJo:0.0005, Q9s:0.0002, QJs:0.0002, QQ:0.8111, K5s:0.0001, KTs:0.0005, KJs:0.0004, KQs:0.0004, KK:0.9839, AKo:0.7377, A2s:0.0002, A3s:0.0001, A4s:0.0001, A5s:0.0001, A6s:0.0002, A9s:0.0001, ATs:0.0017, AJs:0.0001, AQs:0.0639, AKs:0.8444, AA:0.4320"
      },
      {
        "action": "5bet 25.38bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0001, A4o:0.0003, 55:0.0013, A5o:0.0002, 66:0.0011, 77:0.0006, A7o:0.0005, 88:0.0055, 99:0.0002, K9o:0.0001, TT:0.0014, QTo:0.0002, KTo:0.0001, ATo:0.0002, J9s:0.0001, JTs:0.0002, JJ:0.0890, QJo:0.0002, KJo:0.0004, AJo:0.0001, Q8s:0.0005, Q9s:0.0005, QTs:0.0001, QJs:0.0009, QQ:0.1793, KQo:0.0003, AQo:0.0005, K5s:0.0002, K6s:0.0003, K7s:0.0002, K8s:0.0007, K9s:0.0005, KK:0.0161, AKo:0.0486, A4s:0.0006, A5s:0.0003, A6s:0.0004, A7s:0.0005, A8s:0.0017, A9s:0.0014, ATs:0.0004, AJs:0.0009, AQs:0.0269, AKs:0.1431, AA:0.5680"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@5.5|BB:4BET@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0010, A3o:0.0011, 42s:0.0002, 54s:0.0001, A5o:0.0025, 65s:0.0001, 66:0.0263, A6o:0.0001, 76s:0.0011, A7o:0.0017, 88:0.1100, A8o:0.0001, 98s:0.0001, 99:0.2673, A9o:0.0013, T6s:0.0004, TT:0.2447, ATo:0.0192, J8s:0.0001, JTs:0.0001, JJ:0.0002, KJo:0.0001, AJo:0.4295, Q8s:0.0004, Q9s:0.0024, QTs:0.0003, QQ:0.0004, KQo:0.0002, AQo:0.0032, K2s:0.0001, K3s:0.0002, K4s:0.0001, K5s:0.0001, K6s:0.0002, K8s:0.0005, K9s:0.0008, KTs:0.0006, KQs:0.0001, KK:0.0028, AKo:0.0026, A3s:0.0009, A5s:0.0001, A6s:0.0017, A7s:0.0013, A8s:0.0031, A9s:0.0842, ATs:0.0002, AJs:0.0007, AQs:0.1109, AKs:0.3023, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@25.38",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0368, TT:0.9921, JJ:0.9998, QQ, AQo:0.0004, KK, AKo, AQs:0.7538, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@25.38",
    "heroPos": "CO",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.9971, JJ, QQ, KK, AKo, AQs:0.8795, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@25.38|BB:CALL@11.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0001, 88:0.0038, 99:0.0133, TT:0.0930, JJ:0.9984, QQ, AQo:0.0020, KK, AKo:0.0120, A7s:0.0001, A9s:0.0007, ATs:0.0004, AJs:0.0001, AQs:0.0031, AKs:0.9974, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "22:0.0096, 32o:0.0001, 72o:0.0001, 32s:0.0154, 53o:0.0002, 73o:0.0001, 93o:0.0004, A3o:0.0159, 43s:0.2384, 44:0.0005, 84o:0.0002, J4o:0.0002, Q4o:0.0009, A4o:0.0372, 52s:0.0001, 53s:0.0031, 54s:0.0001, 55:0.0111, T5o:0.0001, K5o:0.0001, 62s:0.0001, 64s:0.0011, 65s:0.0003, J6o:0.0001, A6o:0.0013, 72s:0.0001, 73s:0.0002, 76s:0.0005, 77:0.2846, T7o:0.0026, J7o:0.0002, A7o:0.1667, 82s:0.0002, 84s:0.0001, 85s:0.0004, 86s:0.0004, 87s:0.0137, 88:0.0002, Q8o:0.0001, A8o:0.0548, 92s:0.0001, 94s:0.0002, 95s:0.0033, 96s:0.0001, 97s:0.4070, 98s:0.0009, 99:0.0090, T4s:0.0019, T5s:0.0003, T6s:0.0001, T7s:0.0145, T8s:0.0267, T9s:0.0939, TT:0.0808, JTo:0.0001, KTo:0.0005, ATo:0.1951, J3s:0.0037, J4s:0.0002, J5s:0.0022, J6s:0.0001, J7s:0.0160, J8s:0.0001, J9s:0.0036, JTs:0.0001, JJ:0.4802, QJo:0.0003, AJo:0.5235, Q2s:0.0169, Q3s:0.0002, Q5s:0.0003, Q6s:0.0394, Q7s:0.0001, Q8s:0.0018, QTs:0.0976, QJs:0.1901, QQ:0.6290, KQo:0.0001, AQo:0.0041, K2s:0.0010, K3s:0.0011, K4s:0.0001, K5s:0.0001, K7s:0.0005, K8s:0.0454, K9s:0.0364, KTs:0.0027, KJs:0.0022, KQs:0.1207, KK:0.3072, AKo:0.3885, A2s:0.0087, A3s:0.0033, A4s:0.1276, A5s:0.0068, A6s:0.0152, A7s:0.2469, A8s:0.0049, A9s:0.0423, ATs:0.0071, AJs:0.3281, AQs:0.6662, AKs:0.6120, AA:0.3179"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1641, 72o:0.0001, K2o:0.0004, 32s:0.0203, 33:0.0002, 53o:0.0003, J3o:0.0001, A3o:0.0033, 43s:0.0004, 44:0.0007, J4o:0.0001, Q4o:0.0002, K4o:0.0002, 52s:0.0005, 53s:0.0017, 54s:0.0012, 55:0.0032, 95o:0.0005, 62s:0.0007, 63s:0.0002, 64s:0.0005, 65s:0.0205, A6o:0.0107, 73s:0.0002, 74s:0.0057, 75s:0.0004, 76s:0.0001, 77:0.0002, 97o:0.0001, T7o:0.0001, A7o:0.0006, 82s:0.0006, 83s:0.0002, 85s:0.0039, 86s:0.0010, 87s:0.0066, 88:0.0003, A8o:0.0001, 92s:0.3968, 93s:0.0020, 95s:0.0010, 96s:0.0003, 97s:0.0011, 98s:0.0017, 99:0.0054, K9o:0.0006, A9o:0.0003, T4s:0.0032, T5s:0.0001, T7s:0.0001, T8s:0.0003, T9s:0.3437, TT:0.0162, JTo:0.0001, KTo:0.0001, ATo:0.0127, J2s:0.0006, J4s:0.0002, J5s:0.0022, J6s:0.0001, J7s:0.0319, J8s:0.0891, J9s:0.0050, JTs:0.0001, JJ:0.4006, KJo:0.0003, AJo:0.0012, Q2s:0.0499, Q3s:0.0001, Q4s:0.0009, Q5s:0.0419, Q6s:0.0013, Q7s:0.0058, Q8s:0.0031, Q9s:0.0001, QTs:0.0001, QJs:0.2601, QQ:0.2118, AQo:0.3736, K2s:0.0062, K3s:0.1061, K4s:0.0005, K5s:0.0087, K6s:0.0015, K7s:0.0014, K8s:0.0276, K9s:0.0037, KTs:0.0096, KJs:0.0005, KQs:0.0019, KK:0.6928, AKo:0.3827, A2s:0.7970, A3s:0.1950, A4s:0.0825, A5s:0.2918, A6s:0.0120, A7s:0.0572, A8s:0.2959, A9s:0.0805, ATs:0.9137, AJs:0.1324, AQs:0.3293, AKs:0.3071, AA:0.6815"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0079, 52o:0.0017, 62o:0.0001, 92o:0.0006, J2o:0.0001, Q2o:0.0003, A2o:0.0042, 32s:0.0002, 33:0.0196, 43o:0.0004, T3o:0.0008, J3o:0.0002, K3o:0.0002, A3o:0.0944, 42s:0.0128, 43s:0.0036, 44:0.0098, 84o:0.0059, 94o:0.0001, T4o:0.0008, J4o:0.0002, Q4o:0.0007, K4o:0.0023, A4o:0.0084, 53s:0.0014, 54s:0.0187, 55:0.8542, 65o:0.0003, 75o:0.0002, 85o:0.0001, T5o:0.0002, Q5o:0.0002, K5o:0.0003, A5o:0.0002, 62s:0.0008, 63s:0.0133, 64s:0.0098, 65s:0.0018, 66:0.4761, 76o:0.0004, 96o:0.0001, T6o:0.0014, J6o:0.0004, Q6o:0.0127, K6o:0.0016, A6o:0.0033, 72s:0.0163, 73s:0.0299, 74s:0.0025, 75s:0.0038, 76s:0.2782, 77:0.3998, 87o:0.0123, 97o:0.0005, J7o:0.0002, Q7o:0.0004, K7o:0.0003, 82s:0.0002, 83s:0.0011, 84s:0.0748, 85s:0.0306, 86s:0.0010, 87s:0.0798, 88:0.5003, 98o:0.0006, T8o:0.0006, J8o:0.0022, Q8o:0.0006, A8o:0.1515, 92s:0.0532, 93s:0.0001, 94s:0.0003, 96s:0.0002, 97s:0.0015, 98s:0.0013, 99:0.7159, T9o:0.0057, J9o:0.0026, Q9o:0.0034, K9o:0.0014, A9o:0.0604, T2s:0.0036, T3s:0.0055, T4s:0.0015, T5s:0.0008, T6s:0.0153, T7s:0.0872, T8s:0.0015, T9s:0.3147, TT:0.0483, JTo:0.0042, QTo:0.0012, KTo:0.0001, ATo:0.0055, J2s:0.0003, J3s:0.0030, J4s:0.0474, J5s:0.0860, J6s:0.0019, J7s:0.0038, J8s:0.0103, J9s:0.0006, JTs:0.2912, JJ:0.7393, KJo:0.0013, AJo:0.1606, Q2s:0.0001, Q3s:0.0165, Q4s:0.5229, Q5s:0.0023, Q6s:0.0889, Q7s:0.0005, Q8s:0.0745, Q9s:0.1779, QTs:0.0004, QJs:0.0212, QQ:0.1418, KQo:0.0188, AQo:0.0418, K2s:0.0021, K3s:0.0869, K4s:0.0284, K5s:0.0102, K6s:0.0231, K7s:0.0802, K8s:0.0014, K9s:0.0013, KTs:0.0424, KJs:0.5948, KQs:0.0237, KK:0.7561, AKo:0.1458, A2s:0.0094, A3s:0.6798, A4s:0.0228, A5s:0.0033, A6s:0.1321, A7s:0.4381, A8s:0.0030, A9s:0.0275, ATs:0.0274, AJs:0.3010, AQs:0.7543, AKs:0.1211, AA:0.0037"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0019, 72o:0.0001, 82o:0.0001, T2o:0.0010, Q2o:0.0003, A2o:0.0001, 33:0.0169, 43o:0.0003, 53o:0.0003, 73o:0.0001, Q3o:0.0005, A3o:0.0662, 43s:0.0062, 44:0.0015, 64o:0.0001, 84o:0.0001, T4o:0.0008, A4o:0.0033, 52s:0.0001, 53s:0.0009, 54s:0.0101, 55:0.0002, 85o:0.0001, J5o:0.0002, Q5o:0.0001, K5o:0.0004, A5o:0.0002, 62s:0.0004, 63s:0.0005, 64s:0.0072, 65s:0.0558, 66:0.0218, 76o:0.0004, T6o:0.0001, K6o:0.0001, A6o:0.0021, 73s:0.0001, 74s:0.0003, 75s:0.0036, 76s:0.0003, 77:0.3454, 87o:0.0042, J7o:0.0003, Q7o:0.0001, A7o:0.0020, 82s:0.0005, 83s:0.0001, 84s:0.0049, 85s:0.0001, 86s:0.0065, 87s:0.1797, 88:0.0633, 98o:0.0003, T8o:0.0042, J8o:0.0006, A8o:0.0044, 92s:0.0003, 93s:0.0176, 94s:0.0005, 96s:0.0001, 97s:0.0002, 98s:0.3919, 99:0.1146, J9o:0.0002, Q9o:0.0005, K9o:0.0012, A9o:0.0532, T2s:0.0020, T3s:0.0007, T4s:0.0001, T5s:0.0001, T6s:0.0087, T7s:0.0018, T8s:0.0022, T9s:0.0016, TT:0.2540, JTo:0.0002, QTo:0.0005, KTo:0.0015, ATo:0.6237, J2s:0.0006, J3s:0.0145, J4s:0.0004, J5s:0.0438, J6s:0.0005, J7s:0.0025, J8s:0.0004, J9s:0.0071, JTs:0.0015, JJ:0.2302, QJo:0.0005, KJo:0.0008, AJo:0.4290, Q2s:0.0016, Q3s:0.0069, Q4s:0.0029, Q6s:0.0001, Q7s:0.0020, Q8s:0.1320, Q9s:0.0014, QTs:0.0104, QJs:0.4211, QQ:0.8354, KQo:0.0082, AQo:0.9568, K2s:0.0015, K3s:0.0162, K4s:0.0312, K5s:0.0055, K6s:0.0025, K7s:0.0008, K8s:0.0010, K9s:0.0388, KTs:0.0125, KJs:0.0905, KQs:0.0009, KK:0.2439, AKo:0.8496, A2s:0.3164, A3s:0.1769, A4s:0.0808, A5s:0.4032, A6s:0.3868, A8s:0.3903, A9s:0.3747, ATs:0.6454, AJs:0.6492, AQs:0.1040, AKs:0.8707, AA:0.9963"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@12.56",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0275, 33:0.0001, A3o:0.2860, 44:0.0002, A4o:0.1425, 55:0.7369, A5o:0.1171, 66:0.5723, A6o:0.1236, 77:0.7479, A7o:0.0198, 88:0.2683, K8o:0.0087, A8o:0.0891, 99:0.6091, K9o:0.4089, A9o:0.1064, T6s:0.0001, T9s:0.0253, TT:0.9969, JTo:0.0323, QTo:0.0154, KTo:0.0898, ATo:0.3883, J7s:0.0002, J9s:0.1866, JTs:0.1354, JJ:0.5514, QJo:0.0156, KJo:0.0218, AJo:0.3051, Q5s:0.0001, Q7s:0.0012, Q9s:0.0966, QTs:0.2489, QJs:0.0705, QQ:0.9120, KQo:0.1283, AQo:0.9913, K3s:0.0007, K5s:0.1187, K6s:0.0133, K7s:0.0171, K8s:0.0199, K9s:0.0656, KTs:0.3442, KJs:0.6655, KQs:0.0462, KK, AKo:0.6948, A2s:0.0001, A3s:0.0958, A4s:0.1908, A5s:0.4938, A6s:0.3536, A7s:0.5686, A8s:0.3266, A9s:0.3697, ATs:0.9718, AJs:0.0926, AQs:0.9979, AKs:0.9912, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@12.56",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KJs:0.0001, KK:0.0010, A8s:0.0004, A9s:0.0011, ATs:0.0014, AA:0.0446"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@5.5",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0274, A3o:0.0031, A4o:0.0201, 55:0.0603, A5o:0.0012, 66:0.5196, A6o:0.0080, 77:0.0167, A7o:0.0123, 88:0.0197, A8o:0.0221, 99:0.3834, Q9o:0.0002, K9o:0.0105, A9o:0.0070, T8s:0.0011, T9s:0.0258, TT:0.2761, JTo:0.0152, QTo:0.0165, KTo:0.0611, ATo:0.0103, J9s:0.1062, JTs:0.2667, JJ:0.3813, QJo:0.0083, KJo:0.1409, AJo:0.0017, Q7s:0.0002, Q8s:0.0496, Q9s:0.0036, QTs:0.0006, QJs:0.0321, QQ:0.0717, KQo:0.0204, AQo:0.0070, K2s:0.0002, K3s:0.0029, K5s:0.1871, K6s:0.0010, K7s:0.0014, K8s:0.0126, K9s:0.0462, KTs:0.0613, KJs:0.0648, KQs:0.1033, KK:0.9506, AKo:0.4638, A2s:0.1180, A3s:0.0700, A4s:0.1757, A5s:0.0869, A6s:0.1895, A7s:0.0544, A8s:0.0005, A9s:0.1137, ATs:0.3213, AJs:0.0127, AQs:0.4193, AKs:0.0042, AA:0.0217"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "A2o:0.1363, A3o:0.2652, A4o:0.0490, 55:0.0203, A5o:0.0249, 66:0.4553, A6o:0.0632, 77:0.2457, K7o:0.0002, A7o:0.1221, 88:0.9259, K8o:0.0036, A8o:0.1379, 99:0.1582, K9o:0.0509, A9o:0.0993, T8s:0.0002, T9s:0.0002, TT:0.1580, JTo:0.0132, QTo:0.0069, KTo:0.0498, ATo:0.0937, J7s:0.0001, J9s:0.0655, JTs:0.2086, JJ:0.5742, QJo:0.0752, KJo:0.3382, AJo:0.0574, Q7s:0.0004, Q8s:0.0104, Q9s:0.6439, QTs:0.0234, QJs:0.0634, QQ:0.8744, KQo:0.0502, AQo:0.4981, K2s:0.0006, K3s:0.0033, K5s:0.2856, K6s:0.3809, K7s:0.1100, K8s:0.1301, K9s:0.2864, KTs:0.1850, KJs:0.0574, KQs:0.8272, KK:0.0288, AKo:0.1980, A2s:0.2083, A3s:0.3014, A4s:0.3011, A5s:0.4940, A6s:0.2823, A7s:0.2726, A8s:0.9991, A9s:0.4335, ATs:0.2978, AJs:0.1421, AQs:0.0832, AKs:0.7836, AA:0.9783"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@5.5",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q9s:0.0002, QJs:0.0004, KQo:0.0001, KTs:0.0071, KJs:0.0002, KK:0.0010, A8s:0.0082, A9s:0.0168, ATs:0.0028, AA:0.0426"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8s:0.0002, A9s:0.0005, ATs:0.0001, AA:0.0020"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@25.38",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0853, A3o:0.0703, A4o:0.0567, 55:0.0731, A5o:0.0738, 66:0.1198, A6o:0.0113, 77:0.2104, A7o:0.0116, 88:0.1034, K8o:0.0061, A8o:0.0017, 99:0.3712, K9o:0.0082, A9o:0.1029, T8s:0.0001, T9s:0.0086, TT:0.3301, JTo:0.0008, QTo:0.0081, KTo:0.0333, ATo:0.0763, J8s:0.0001, J9s:0.0028, JTs:0.0243, JJ:0.7645, QJo:0.0251, KJo:0.0061, AJo:0.1099, Q5s:0.0002, Q8s:0.0451, Q9s:0.0008, QTs:0.0449, QJs:0.0511, QQ:0.9267, KQo:0.0479, AQo:0.0870, K2s:0.0001, K5s:0.0838, K6s:0.1135, K7s:0.0323, K8s:0.0628, K9s:0.0529, KTs:0.1284, KJs:0.0133, KQs:0.0548, KK:0.9956, AKo:0.6858, A2s:0.3384, A3s:0.8127, A4s:0.0267, A5s:0.1415, A6s:0.0186, A7s:0.1660, A8s:0.2970, A9s:0.7327, ATs:0.0413, AJs:0.1003, AQs:0.1525, AKs:0.5675, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@25.38",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0010, A5s:0.0002, A7s:0.0035, A8s:0.0099, A9s:0.0169, ATs:0.0042, AA:0.0446"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@9.36",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.6168, 99:0.9995, TT, JJ, QQ, AQo, KK, AKo, ATs:0.0001, AJs:0.0686, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@9.36",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0003, 66:0.0004, 77:0.0079, 88:0.9889, 99, T8s:0.0001, TT, JTs:0.0001, JJ, AJo:0.0012, QTs:0.0001, QQ, AQo, KQs:0.0004, KK, AKo, A9s:0.0002, ATs:0.0007, AJs:0.6114, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@9.36",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0002, 55:0.9916, 66, 77, 88, A8o:0.0015, 99, A9o:0.0018, TT, QTo:0.0002, KTo:0.0012, ATo, J9s:0.0009, JTs:0.0046, JJ, QJo:0.0012, KJo:0.0016, AJo, Q9s:0.0011, QTs:0.0026, QJs:0.7944, QQ, KQo, AQo, K5s:0.0009, K6s:0.0006, K7s:0.0001, K8s:0.0039, K9s:0.0018, KTs:0.5084, KJs, KQs, KK, AKo, A2s:0.0198, A3s:0.0020, A4s:0.6521, A5s:0.2050, A6s:0.0112, A7s:0.9769, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@9.36|BB:4BET@12.56",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, A5o:0.0001, 66:0.0003, 77:0.0010, 88:0.0011, 99:0.0002, A9o:0.0001, TT, ATo:0.0001, J9s:0.0007, JTs:0.0003, JJ, QJo:0.0001, AJo:0.0001, Q9s:0.0019, QTs:0.0003, QJs:0.0001, QQ, KQo:0.0001, AQo:0.0045, K5s:0.0011, K8s:0.0004, K9s:0.0001, KTs:0.0006, KJs:0.0025, KQs:0.0026, KK, AKo:0.9992, A2s:0.0001, A4s:0.0001, A5s:0.0001, A9s:0.0001, AJs:0.0037, AQs:0.0380, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@9.36|SB:4BET@25.38",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0015, JJ:0.0560, QTs:0.0001, QQ, KTs:0.0002, KK, AKo:0.0001, A4s:0.0001, A7s:0.0001, ATs:0.0001, AJs:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0326, 65s:0.0259, 66:0.0322, 77:0.0094, 88:0.0786, 99:0.0033, TT:0.2546, JJ:0.0640, AJo:0.0147, QTs:0.0491, QJs:0.0615, QQ:0.0301, KQo:0.0236, AQo:0.0178, KTs:0.1968, KJs:0.0001, KQs:0.0004, KK:0.0530, A8s:0.0016, A9s:0.0696, ATs:0.3916, AJs:0.0054, AQs:0.1620, AA:0.0001"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0012, A3o:0.0505, 44:0.0003, A4o:0.1914, 55:0.0047, A5o:0.2151, 66:0.0186, 77:0.0194, A7o:0.0456, 88:0.0483, A8o:0.0005, 99:0.0011, A9o:0.0001, TT:0.3240, ATo:0.0571, JTs:0.0001, AJo:0.3869, QQ:0.0003, AQo:0.0599, KTs:0.0001, A2s:0.0379, A3s:0.0046, A5s:0.0005, A6s:0.0047, A7s:0.0363, A8s:0.0479, A9s:0.1698, ATs:0.4713, AQs:0.0216, AKs:0.1593, AA:0.8994"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0079, A3o:0.0206, A4o:0.0269, 55:0.0003, K5o:0.0011, A5o:0.0007, A6o:0.0237, 99:0.0001, A9o:0.0039, TT:0.0254, KTo:0.0002, ATo:0.0008, JJ:0.0019, KJo:0.0005, AJo:0.0181, K2s:0.0076, K3s:0.0022, K4s:0.0003, K5s:0.0010, K6s:0.0007, K7s:0.0001, K8s:0.0030, K9s:0.0002, KTs:0.0005, KK:0.0092, AKo:0.0014, A3s:0.0009, A5s:0.0001, A7s:0.0015, A8s:0.0002, A9s:0.0272, ATs:0.0001, AKs:0.0141, AA:0.1005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0802, 33:0.5846, A3o:0.0003, 44:0.3985, 55:0.3900, 66:0.7584, 77:0.7303, 88:0.1468, 99:0.0004, TT:0.0002, JTs:0.0005, JJ:0.9341, KJo:0.6576, AJo:0.5691, Q9s:0.0001, QTs:0.0083, QJs:0.9376, QQ:0.9696, KQo:0.9763, AQo:0.9223, K3s:0.2565, K4s:0.3634, K5s:0.3058, K6s:0.3846, K7s:0.2438, K8s:0.1375, K9s:0.0154, KTs:0.7537, KJs:0.9998, KQs:0.9994, KK:0.9377, AKo:0.9986, A2s:0.9530, A3s:0.9929, A4s:0.9986, A5s:0.9989, A6s:0.9930, A7s:0.9574, A8s:0.9497, A9s:0.6100, ATs:0.1367, AJs:0.9946, AQs:0.8164, AKs:0.8266"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A8o:0.0001, A9o:0.0028, QTs:0.0121, QJs:0.0017, KQo:0.0081, KTs:0.0246, KJs:0.0108, KK:0.0001, A3s:0.0001, A4s:0.0001, A6s:0.0020, A7s:0.0048, A8s:0.0286, A9s:0.0080, AA:0.0543"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0058, 55:0.9998, 66, 77, 88, 99, A9o:0.0451, TT, ATo, JJ, AJo, QJs:0.8428, QQ, KQo:0.9577, AQo, KTs:0.2319, KJs:0.9892, KQs, KK, AKo, A3s:0.0007, A4s:0.0003, A5s:0.8830, A6s:0.0057, A7s:0.9621, A8s:0.8535, A9s:0.9920, ATs, AJs, AQs, AKs, AA:0.9457"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 5.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 65s:0.0144, 66:0.1346, 76s:0.0001, 77:0.0408, 88:0.3182, 99:0.2977, TT:0.0013, ATo:0.0001, JTs:0.0018, AJo:0.0793, QTs:0.0943, QJs:0.0092, KQo:0.0989, K3s:0.0002, K9s:0.0518, KTs:0.0013, KJs:0.0109, KQs:0.0828, KK:0.0004, A7s:0.0011, A8s:0.0021, A9s:0.2374, ATs:0.1095, AJs:0.3630"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A3o:0.0007, A4o:0.0057, 55:0.0032, A5o:0.1209, 66:0.0150, A6o:0.0117, 77:0.0506, A7o:0.0021, 88:0.0504, A8o:0.0044, 99:0.0659, A9o:0.0022, TT:0.1940, ATo:0.2902, AJo:0.4674, QTs:0.0001, AQo:0.0003, KK:0.0002, A2s:0.1434, A3s:0.0047, A4s:0.0476, A5s:0.0071, A6s:0.4924, A7s:0.2107, A8s:0.3158, A9s:0.0720, AJs:0.0012, AQs:0.3459, AKs:0.0264, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1904, 33:0.8427, 43s:0.0003, 44:0.9620, A4o:0.0002, 54s:0.0002, 55:0.9590, 66:0.7406, 77:0.5487, 88:0.4820, 99:0.6289, T2s:0.0001, TT:0.8048, KTo:0.0504, ATo:0.1073, J8s:0.0029, J9s:0.0011, JTs:0.9949, JJ, QJo:0.4109, KJo:0.9864, AJo:0.4508, Q8s:0.0004, Q9s:0.0061, QTs:0.9047, QJs:0.9907, QQ, KQo:0.9009, AQo:0.9997, K3s:0.1041, K4s:0.0029, K5s:0.0590, K6s:0.0587, K7s:0.3145, K8s:0.0059, K9s:0.1326, KTs:0.9982, KJs:0.9890, KQs:0.9171, KK:0.9995, AKo, A2s:0.8345, A3s:0.9894, A4s:0.9460, A5s:0.9925, A6s:0.4972, A7s:0.7801, A8s:0.3645, A9s:0.6854, ATs:0.8905, AJs:0.6358, AQs:0.6541, AKs:0.9736"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0363, 33:0.0012, 43s:0.0028, 44:0.0082, 53s:0.2734, 54s:0.9735, A5o:0.3022, 63s:0.0001, 64s:0.7488, 65s:0.9996, A6o:0.0001, 74s:0.0025, 75s:0.9890, 76s:0.9946, 87o:0.0001, A7o:0.0644, 85s:0.0095, 86s:0.9970, 87s:0.9998, A8o:0.7225, 96s:0.2516, 97s:0.8076, 98s:0.9343, K9o:0.0055, T2s:0.0001, T6s:0.0002, T8s:0.9069, T9s:0.2974, JTo:0.2406, QTo:0.9944, KTo, J2s:0.0001, J5s:0.0533, J7s:0.2159, J8s:0.4889, J9s:0.0591, JTs:0.0006, QJo:0.9998, KJo:0.9963, Q2s:0.0080, Q4s:0.0088, Q5s:0.0208, Q6s:0.0984, Q7s:0.0031, Q8s:0.9565, Q9s:0.4423, QTs:0.0620, QJs:0.0366, KQo:0.4550, K3s:0.0373, K4s:0.2407, K5s:0.5632, K6s:0.7049, K7s:0.9839, K8s:0.8445, K9s:0.9959, KTs:0.9226, KJs:0.4949, KQs:0.0005, A2s:0.2958, A3s:0.2387, A4s:0.0985, A5s:0.0007, A6s:0.2278, A7s:0.0688, A8s:0.5935, A9s:0.0174, AA:0.6103"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9637, 33:0.9988, A3o:0.0002, 44:0.9918, A4o:0.0004, 55, A5o:0.0197, 66, A6o:0.0004, 76s:0.0002, 77, A7o:0.4148, 88, A8o:0.2774, 97s:0.0121, 98s:0.0656, 99, A9o, T5s:0.0001, T7s:0.0027, T8s:0.0858, T9s:0.7023, TT, JTo:0.4631, QTo:0.0056, KTo:0.0001, ATo, J8s:0.5056, J9s:0.9407, JTs:0.9994, JJ, QJo:0.0002, KJo:0.0037, AJo, Q6s:0.0245, Q7s:0.0004, Q8s:0.0366, Q9s:0.5576, QTs:0.9380, QJs:0.9634, QQ, KQo:0.5450, AQo, K3s:0.0002, K5s:0.0169, K6s:0.0206, K7s:0.0141, K8s:0.1546, K9s:0.0040, KTs:0.0774, KJs:0.5051, KQs:0.9995, KK, AKo, A2s:0.7039, A3s:0.7612, A4s:0.9013, A5s:0.9993, A6s:0.7722, A7s:0.9311, A8s:0.4065, A9s:0.9826, ATs, AJs, AQs, AKs, AA:0.3897"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@12.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0639, 55:0.9998, 66, 77, 88, 99, A9o:0.7713, TT, ATo, JTs:0.0017, JJ, AJo, QTs:0.1073, QJs:0.9586, QQ, KQo:0.4823, AQo, K8s:0.0001, KTs:0.0810, KJs:0.9998, KQs, KK, AKo, A3s:0.0001, A6s:0.0001, A7s:0.0212, A8s:0.9950, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2501, 32s:0.0881, 33:0.9193, Q3o:0.0086, 42s:0.0001, 43s:0.3400, 44:0.8745, 84o:0.0006, A4o:0.0001, 52s:0.0038, 53s:0.0009, 54s:0.1219, 55:0.6923, 65o:0.0005, 62s:0.1321, 64s:0.0563, 65s:0.2662, 66:0.4966, A6o:0.0003, 74s:0.2021, 75s:0.0618, 76s:0.1897, 77:0.8845, Q7o:0.0295, 82s:0.0001, 83s:0.0001, 84s:0.0023, 85s:0.0006, 86s:0.0061, 87s:0.1185, 88:0.8489, 95s:0.0089, 96s:0.0061, 97s:0.2107, 98s:0.0079, 99:0.0002, K9o:0.0268, A9o:0.0064, T3s:0.0387, T4s:0.0015, T5s:0.1267, T6s:0.3871, T7s:0.4953, T8s:0.0102, T9s:0.5966, TT:0.0022, JTo:0.0003, QTo:0.0016, KTo:0.3266, ATo:0.4954, J2s:0.0025, J3s:0.0080, J4s:0.0033, J6s:0.4946, J7s:0.0737, J8s:0.0698, J9s:0.0042, JTs:0.3905, JJ:0.0001, QJo:0.1281, KJo:0.7672, AJo:0.3828, Q2s:0.0005, Q3s:0.1656, Q4s:0.8905, Q5s:0.2630, Q6s:0.0259, Q7s:0.1083, Q9s:0.1518, QTs:0.1576, QJs:0.1722, KQo:0.9419, AQo:0.0103, K2s:0.0251, K3s:0.0001, K5s:0.0570, K7s:0.1987, K8s:0.0354, K9s:0.0236, KTs:0.4676, KJs:0.7491, KQs:0.7840, KK:0.0001, AKo:0.0052, A2s:0.0808, A3s:0.1559, A4s:0.4175, A5s:0.2094, A6s:0.0028, A7s:0.3131, A8s:0.0516, A9s:0.6873, ATs:0.1434, AJs:0.3687, AQs:0.0668, AKs:0.0881, AA:0.0003"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, A4o:0.0001, 52s:0.0005, 66:0.0039, 75s:0.0008, 76s:0.0003, 77:0.0053, 84s:0.0002, 88:0.1169, 97s:0.0001, 98s:0.0146, 99:0.9968, T9o:0.1138, J9o:0.0925, Q9o:0.0613, K9o:0.0295, T6s:0.0020, T7s:0.0003, T8s:0.0007, T9s:0.0838, TT:0.9967, JTo:0.0626, KTo:0.1756, ATo:0.0002, J6s:0.0013, J9s:0.6924, JTs:0.1314, JJ:0.9988, QJo:0.1063, KJo:0.0014, AJo:0.5861, Q3s:0.0002, Q6s:0.0002, Q7s:0.0020, Q9s:0.6400, QTs:0.7744, QJs:0.6882, QQ, KQo:0.0054, AQo:0.9885, K4s:0.0001, K5s:0.0318, K8s:0.0091, K9s:0.0008, KTs:0.1276, KJs:0.1608, KQs:0.2016, KK, AKo:0.9946, A2s:0.0112, A3s:0.0030, A4s:0.0058, A5s:0.0003, A6s:0.0046, A8s:0.0002, A9s:0.1587, ATs:0.8490, AJs:0.6198, AQs:0.9272, AKs:0.9101, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.2880, 66:0.1558, A6o:0.0016, 77:0.2804, A7o:0.0005, 88:0.0442, K8o:0.0003, A8o:0.0001, 99:0.3533, K9o:0.0002, A9o:0.0001, TT:0.5010, JTo:0.0019, QTo:0.0001, KTo:0.0006, J8s:0.0031, J9s:0.0001, JTs:0.0135, JJ:0.9947, QJo:0.0004, KJo:0.0112, AJo:0.1817, Q7s:0.0006, Q8s:0.0009, Q9s:0.0052, QTs:0.0003, QJs:0.0817, QQ:0.9202, KQo:0.0004, AQo:0.2389, K4s:0.0006, K5s:0.1524, K6s:0.0040, K7s:0.0098, K8s:0.0104, K9s:0.0265, KTs:0.2341, KJs:0.1699, KQs:0.0179, KK:0.0529, AKo:0.3044, A2s:0.0647, A3s:0.0061, A4s:0.0237, A5s:0.0680, A6s:0.0014, A7s:0.0015, A8s:0.0012, A9s:0.3504, ATs:0.0461, AJs:0.4166, AQs:0.5016, AKs:0.3394, AA:0.8911"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0001, A4o:0.0006, 55:0.2745, A5o:0.0001, 66:0.1647, A6o:0.0022, 77:0.2940, K7o:0.0001, A7o:0.0005, 88:0.0637, K8o:0.0003, A8o:0.0004, 99:0.3821, Q9o:0.0001, K9o:0.0007, A9o:0.0001, TT:0.4979, JTo:0.0003, QTo:0.0001, KTo:0.0013, ATo:0.0033, J8s:0.0016, J9s:0.0110, JTs:0.0190, JJ:0.0039, QJo:0.0011, KJo:0.0212, AJo:0.1981, Q8s:0.0007, Q9s:0.0093, QTs:0.0001, QJs:0.0504, QQ:0.0759, KQo:0.0004, AQo:0.7433, K4s:0.0054, K5s:0.1755, K6s:0.0001, K7s:0.0181, K8s:0.0067, K9s:0.0346, KTs:0.2519, KJs:0.2523, KQs:0.0485, KK:0.9471, AKo:0.6955, A2s:0.0820, A3s:0.0342, A4s:0.0148, A5s:0.1151, A6s:0.0053, A7s:0.0091, A8s:0.0036, A9s:0.3481, ATs:0.0722, AJs:0.3775, AQs:0.4403, AKs:0.6598, AA:0.1089"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 88:0.0343, 99:0.2977, TT:0.0013, AJo:0.0102, KTs:0.0001, KJs:0.0019, KQs:0.0532, KK:0.0004, A9s:0.0003, ATs:0.0178, AJs:0.3242"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@5.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 76s:0.0001, 77:0.0349, 88:0.3575, 99:0.6278, TT:0.8800, JJ:0.9016, AJo:0.0924, QTs:0.0002, QQ:0.9717, AQo:0.9996, K9s:0.0001, KK:0.9987, AKo:0.9994, A5s:0.0004, A8s:0.0483, ATs:0.1120, AJs:0.1283, AQs:0.9974, AKs:0.9974, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@5.5",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0218, A3o:0.2715, 44:0.0398, A4o:0.4575, 55:0.7957, A5o:0.1777, 65s:0.0001, 66:0.9039, A6o:0.0132, 77:0.7995, A7o:0.1145, 88:0.9471, A8o:0.2040, 99:0.8528, A9o:0.0920, T7s:0.0016, T8s:0.0060, T9s:0.0691, TT:0.5958, ATo:0.1521, J7s:0.0003, J8s:0.0072, J9s:0.4708, JTs:0.7963, JJ:0.9330, AJo:0.9852, Q8s:0.0006, Q9s:0.6630, QTs:0.6808, QJs:0.7428, QQ:0.4484, KQo:0.0062, AQo:0.7012, K2s:0.0004, K4s:0.0548, K5s:0.0133, K6s:0.0272, K7s:0.1140, K8s:0.0094, K9s:0.6079, KTs:0.6105, KJs:0.3303, KQs:0.9145, KK:0.7170, AKo:0.2618, A2s:0.2941, A3s:0.1966, A4s:0.2901, A5s:0.1447, A6s:0.4638, A7s:0.1737, A8s:0.4960, A9s:0.5151, ATs:0.1460, AJs:0.9652, AQs:0.4327, AKs:0.2619, AA"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "A2o:0.3689, A3o:0.3964, 44:0.0028, A4o:0.1603, 55:0.0300, A5o:0.2957, 66:0.0507, A6o:0.2695, 77:0.0512, A7o:0.2108, 88:0.0302, A8o:0.0572, 99:0.0973, Q9o:0.0001, K9o:0.0001, A9o:0.0324, T9s:0.0182, TT:0.3743, JTo:0.0001, QTo:0.0010, ATo:0.8273, J9s:0.0057, JTs:0.0509, JJ:0.0405, QJo:0.0002, KJo:0.0001, AJo:0.0116, Q7s:0.0001, Q8s:0.0038, Q9s:0.0520, QTs:0.0083, QJs:0.0192, QQ:0.5516, KQo:0.0002, AQo:0.2986, K4s:0.0002, K5s:0.0050, K6s:0.0003, K7s:0.0001, K8s:0.0021, K9s:0.1432, KTs:0.0162, KJs:0.0318, KQs:0.0128, KK:0.2807, AKo:0.7382, A2s:0.6358, A3s:0.8002, A4s:0.7067, A5s:0.8528, A6s:0.5277, A7s:0.7954, A8s:0.3949, A9s:0.4599, ATs:0.8540, AJs:0.0343, AQs:0.5673, AKs:0.7380, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@5.5|HJ:4BET@25.38",
    "heroPos": "SB",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0045, TT:0.1940, AJo:0.0005, AQo:0.0003, KK:0.0002, AJs:0.0001, AQs:0.3456, AKs:0.0264, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@5.5|BB:4BET@12.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0083, 66:0.0010, 77:0.0017, 88:0.0001, K8o:0.0003, 99:0.0022, Q9o:0.0002, TT:0.1326, KTo:0.0001, ATo:0.0013, J9s:0.0001, JJ:0.2395, AJo:0.0005, Q8s:0.0002, Q9s:0.0002, QTs:0.0017, QQ:0.9226, AQo:0.0024, K4s:0.0010, K6s:0.0003, K7s:0.0006, K9s:0.0004, KTs:0.0004, KJs:0.0006, KQs:0.0002, KK:0.9813, AKo:0.9652, A2s:0.0002, A3s:0.0003, A4s:0.0018, A5s:0.0001, A9s:0.0049, ATs:0.0011, AJs:0.0001, AQs:0.0081, AKs:0.7693, AA:0.7915"
      },
      {
        "action": "5bet 25.38bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A4o:0.0006, 55:0.0001, A5o:0.0004, 66:0.0008, A6o:0.0001, 77:0.0002, K7o:0.0001, 88:0.0002, K8o:0.0001, A8o:0.0004, 99:0.0005, Q9o:0.0002, A9o:0.0001, T9s:0.0001, TT:0.3259, JTo:0.0001, QTo:0.0001, KTo:0.0004, ATo:0.0006, J8s:0.0003, JTs:0.0001, JJ:0.0925, AJo:0.0002, Q8s:0.0006, Q9s:0.0016, QTs:0.0017, QJs:0.0007, QQ:0.0056, AQo:0.0002, K4s:0.0008, K5s:0.0049, K6s:0.0003, K7s:0.0050, K8s:0.0008, K9s:0.0008, KTs:0.0038, KJs:0.0028, KQs:0.0001, KK:0.0178, AKo:0.0015, A2s:0.0004, A3s:0.0006, A4s:0.0016, A5s:0.0001, A6s:0.0010, A7s:0.0005, A8s:0.0001, A9s:0.0030, AJs:0.0041, AQs:0.0095, AKs:0.2299, AA:0.2085"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@5.5|BB:4BET@12.56",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0032, A5o:0.0002, 66:0.0150, 77:0.0506, 88:0.0504, 99:0.0659, TT:0.1940, ATo:0.0005, AJo:0.2093, QTs:0.0001, AQo:0.0003, KK:0.0002, A2s:0.0758, A3s:0.0047, A4s:0.0444, A5s:0.0071, A6s:0.3892, A7s:0.2107, A8s:0.2069, A9s:0.0458, AJs:0.0012, AQs:0.3459, AKs:0.0264, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@25.38",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.3565, JJ, QQ, KK, AKo:0.8966, AQs:0.0010, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@25.38",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.3226, TT, JJ, QQ, AQo:0.3725, KK, AKo, AJs:0.0001, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@25.38|BB:CALL@11.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0005, 88:0.0002, 99:0.0006, TT:0.1320, JTs:0.0001, JJ:0.9996, AJo:0.0001, Q8s:0.0001, QTs:0.0001, QQ, KQo:0.0001, AQo:0.0004, K7s:0.0001, KJs:0.0003, KK, AKo:0.0018, A4s:0.0001, A5s:0.0003, AQs:0.0037, AKs:0.9361, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "22:0.0001, 62o:0.0002, 92o:0.0001, A2o:0.0009, 32s:0.0001, 33:0.0006, K3o:0.0001, A3o:0.0001, 42s:0.0020, Q4o:0.0001, 53s:0.0004, 55:0.0008, Q5o:0.0001, 63s:0.0013, 65s:0.0001, 66:0.1815, Q6o:0.0001, 72s:0.0018, 74s:0.0004, 76s:0.0005, 77:0.0004, A7o:0.0025, 82s:0.0005, 85s:0.0001, 86s:0.0011, 87s:0.0001, 88:0.0002, 98o:0.0006, Q8o:0.0001, A8o:0.0001, 94s:0.0006, 95s:0.0016, 96s:0.0012, 97s:0.0001, 98s:0.0006, 99:0.0010, Q9o:0.0003, K9o:0.0001, A9o:0.0379, T3s:0.0006, T4s:0.0002, T6s:0.0007, T7s:0.0001, T8s:0.0005, T9s:0.0016, TT:0.2034, ATo:0.3835, J4s:0.0001, J5s:0.0001, J7s:0.0004, J8s:0.0003, JTs:0.0004, JJ:0.1377, KJo:0.0001, AJo:0.3070, Q3s:0.0008, Q5s:0.0004, Q6s:0.0001, Q7s:0.0005, Q8s:0.0001, Q9s:0.0003, QJs:0.0001, QQ:0.2791, KQo:0.0009, AQo:0.3547, K3s:0.0001, K4s:0.0019, K5s:0.0008, K6s:0.0167, K7s:0.0001, K8s:0.0021, K9s:0.0059, KK:0.5896, AKo:0.2506, A2s:0.0354, A3s:0.0452, A4s:0.0001, A5s:0.0177, A6s:0.0001, A7s:0.3797, A8s:0.2457, A9s:0.0001, ATs:0.0017, AJs:0.7837, AQs:0.2852, AKs:0.0121, AA:0.9630"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.0013, 32s:0.0001, 33:0.0012, K3o:0.0001, A3o:0.0001, 42s:0.0024, 44:0.0680, 84o:0.0001, T4o:0.0001, 54s:0.0016, 55:0.0012, A5o:0.0089, 62s:0.0652, 65s:0.0001, 66:0.0440, Q6o:0.0001, K6o:0.0001, A6o:0.0003, 72s:0.0001, 74s:0.0001, 75s:0.0004, 76s:0.0001, 77:0.0259, J7o:0.0005, Q7o:0.0001, K7o:0.0001, A7o:0.0005, 82s:0.0007, 85s:0.0001, 86s:0.0074, 88:0.1375, 98o:0.0020, T8o:0.0001, 92s:0.0034, 95s:0.0101, 96s:0.0783, 97s:0.0146, 98s:0.0001, 99:0.0083, T2s:0.0002, T3s:0.0001, T4s:0.0001, T5s:0.0011, T9s:0.0004, TT:0.1597, ATo:0.3343, J5s:0.0001, J6s:0.0089, J7s:0.0001, J8s:0.0004, J9s:0.0133, JTs:0.0502, JJ:0.5586, KJo:0.0001, AJo:0.1267, Q3s:0.0006, Q4s:0.0001, Q5s:0.0003, Q6s:0.0023, Q8s:0.0003, Q9s:0.0020, QTs:0.7956, QJs:0.0797, QQ:0.4263, AQo:0.0526, K2s:0.0002, K3s:0.0001, K4s:0.0005, K5s:0.0005, K6s:0.0001, K7s:0.0054, K8s:0.0001, K9s:0.0391, KTs:0.0002, KQs:0.0239, KK:0.4091, AKo:0.0631, A2s:0.1746, A3s:0.0001, A4s:0.0020, A5s:0.1345, A6s:0.0054, A7s:0.1598, A8s:0.2474, A9s:0.0529, ATs:0.3832, AJs:0.1880, AQs:0.5280, AKs:0.9499, AA:0.0363"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0056, 32o:0.0001, 82o:0.0002, T2o:0.0006, J2o:0.0006, Q2o:0.0009, K2o:0.0001, A2o:0.0001, 32s:0.0120, 33:0.7137, 83o:0.0001, T3o:0.0001, J3o:0.0232, Q3o:0.0003, K3o:0.0002, A3o:0.0003, 42s:0.0034, 43s:0.0010, 44:0.1411, 64o:0.0008, 84o:0.0003, 94o:0.0005, T4o:0.0006, K4o:0.0027, A4o:0.0024, 52s:0.0001, 53s:0.0015, 54s:0.0039, 55:0.1068, 65o:0.0002, 85o:0.0006, 95o:0.0003, T5o:0.0001, Q5o:0.0002, K5o:0.0084, 62s:0.0059, 63s:0.0012, 64s:0.0003, 65s:0.1327, 66:0.0305, 76o:0.0009, 86o:0.0002, 96o:0.0001, J6o:0.0002, Q6o:0.0001, K6o:0.0001, 72s:0.0001, 73s:0.0016, 74s:0.0373, 75s:0.1200, 76s:0.0018, 77:0.5740, 87o:0.0001, T7o:0.0025, J7o:0.0004, Q7o:0.0012, K7o:0.0004, A7o:0.0088, 82s:0.0010, 83s:0.0001, 84s:0.0002, 85s:0.0267, 86s:0.5477, 87s:0.0477, 88:0.1555, 98o:0.0008, T8o:0.0009, J8o:0.0001, K8o:0.0014, 92s:0.0127, 93s:0.0036, 94s:0.0001, 95s:0.0003, 96s:0.0201, 97s:0.0014, 98s:0.0057, 99:0.0148, T9o:0.0001, Q9o:0.0030, K9o:0.0002, A9o:0.0219, T2s:0.0001, T4s:0.0159, T5s:0.0010, T6s:0.0007, T7s:0.0049, T9s:0.0193, TT:0.1603, JTo:0.0034, QTo:0.0005, KTo:0.0013, ATo:0.0103, J3s:0.0118, J4s:0.3988, J5s:0.0066, J6s:0.1244, J7s:0.0925, J8s:0.3912, J9s:0.1173, JTs:0.0873, JJ:0.2240, QJo:0.0056, KJo:0.0001, AJo:0.0030, Q2s:0.0691, Q3s:0.2443, Q4s:0.0006, Q6s:0.0005, Q7s:0.0207, Q9s:0.0123, QTs:0.0028, QJs:0.1195, QQ:0.2083, KQo:0.0052, AQo:0.1213, K2s:0.0039, K3s:0.0002, K4s:0.1007, K5s:0.0168, K6s:0.0114, K7s:0.0508, K8s:0.0902, K9s:0.2809, KJs:0.0712, KQs:0.0620, KK:0.2185, A2s:0.0061, A3s:0.0770, A4s:0.0013, A5s:0.3794, A6s:0.0245, A7s:0.0730, A8s:0.0014, A9s:0.1093, ATs:0.2375, AJs:0.5901, AQs:0.1751, AKs:0.0071, AA:0.0991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0017, 52o:0.0002, 62o:0.0001, J2o:0.0001, Q2o:0.0011, K2o:0.0001, A2o:0.4975, 32s:0.0003, 33:0.0001, 53o:0.0001, 83o:0.0001, 93o:0.0001, Q3o:0.0002, 42s:0.0001, 43s:0.0002, 64o:0.0002, 84o:0.0001, A4o:0.0002, 52s:0.0026, 53s:0.0004, 54s:0.0003, 55:0.0073, 95o:0.0001, K5o:0.0003, A5o:0.0003, 62s:0.0015, 63s:0.0003, 66:0.2480, T6o:0.0001, K6o:0.0001, A6o:0.0001, 74s:0.0001, 75s:0.0002, 77:0.1100, T7o:0.0001, J7o:0.0006, Q7o:0.0002, A7o:0.0007, 82s:0.0004, 85s:0.0043, 86s:0.1189, 88:0.0694, 98o:0.0003, J8o:0.0003, Q8o:0.0001, K8o:0.0002, 92s:0.0020, 93s:0.0815, 94s:0.0001, 95s:0.0001, 96s:0.0061, 97s:0.0002, 98s:0.0023, 99:0.7218, T9o:0.0001, A9o:0.2415, T2s:0.0011, T3s:0.0001, T4s:0.0039, T6s:0.0007, T7s:0.0067, T9s:0.0048, TT:0.7614, QTo:0.0004, KTo:0.0001, ATo:0.5363, J2s:0.0004, J4s:0.0001, J5s:0.0277, J6s:0.0014, J7s:0.0128, J8s:0.0889, J9s:0.0401, JTs:0.3036, JJ:0.7746, QJo:0.0004, KJo:0.0010, AJo:0.4146, Q2s:0.0027, Q3s:0.0017, Q4s:0.0002, Q5s:0.0001, Q7s:0.0006, Q8s:0.0015, Q9s:0.0434, QTs:0.0032, QJs:0.1140, QQ:0.7896, KQo:0.0059, AQo:0.8496, K2s:0.2184, K3s:0.0001, K4s:0.0001, K5s:0.0004, K7s:0.0001, K9s:0.0007, KTs:0.0042, KJs:0.0964, KQs:0.0002, KK:0.7815, AKo:0.8784, A2s:0.4474, A3s:0.1940, A4s:0.1371, A5s:0.1981, A6s:0.7142, A7s:0.2153, A8s:0.2402, A9s:0.6120, ATs:0.3055, AJs:0.3631, AQs:0.6287, AKs:0.9745, AA:0.9009"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@12.56",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0023, A3o:0.0383, 44:0.0129, A4o:0.1648, 55:0.4751, A5o:0.0588, 65s:0.0001, 66:0.4056, K6o:0.0013, A6o:0.0177, 77:0.7231, K7o:0.0016, A7o:0.0185, 88:0.5188, Q8o:0.0001, K8o:0.0027, A8o:0.0175, 99:0.5381, J9o:0.0003, Q9o:0.0008, K9o:0.0148, A9o:0.3498, T7s:0.0001, T8s:0.0004, T9s:0.0131, TT:0.9992, JTo:0.0279, QTo:0.2013, KTo:0.0127, ATo:0.1909, J7s:0.0004, J8s:0.0110, J9s:0.0186, JTs:0.5212, JJ:0.9747, QJo:0.1464, KJo:0.0169, AJo:0.2581, Q5s:0.0005, Q7s:0.0002, Q8s:0.4270, Q9s:0.0605, QTs:0.1389, QJs:0.1568, QQ:0.9731, KQo:0.0484, AQo:0.4471, K2s:0.0004, K4s:0.2470, K5s:0.2197, K6s:0.0576, K7s:0.1474, K8s:0.0356, K9s:0.0850, KTs:0.0132, KJs:0.0544, KQs:0.6258, KK, AKo:0.9993, A2s:0.2010, A3s:0.0608, A4s:0.0331, A5s:0.0090, A6s:0.0002, A7s:0.0655, A8s:0.7133, A9s:0.6454, ATs:0.8178, AJs:0.7727, AQs:0.3398, AKs:0.9998, AA:0.9991"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@12.56",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QJs:0.0002, KTs:0.0021, KJs:0.0029, KK:0.0001, A7s:0.0003, A8s:0.0005, A9s:0.0051, AA:0.0543"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@5.5",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0370, A3o:0.0260, 44:0.0102, K4o:0.0001, A4o:0.0637, 55:0.0083, A5o:0.1262, 66:0.0326, K6o:0.0003, A6o:0.0061, 77:0.0016, K7o:0.0146, A7o:0.0013, 88:0.0467, Q8o:0.0001, K8o:0.0016, A8o:0.2658, 99:0.0694, Q9o:0.0637, K9o:0.0034, A9o:0.0201, T7s:0.0001, T8s:0.0002, T9s:0.0171, TT:0.0059, JTo:0.0788, QTo:0.0526, KTo:0.1874, ATo:0.0879, J7s:0.0002, J8s:0.0844, J9s:0.0014, JTs:0.0282, JJ:0.7087, QJo:0.1156, KJo:0.1908, AJo:0.0131, Q5s:0.0002, Q7s:0.0024, Q8s:0.1194, Q9s:0.1606, QTs:0.0645, QJs:0.0660, QQ:0.1118, KQo:0.0745, AQo:0.2999, K3s:0.0001, K4s:0.0080, K5s:0.2647, K6s:0.1106, K7s:0.5174, K8s:0.2348, K9s:0.4396, KTs:0.2726, KJs:0.0283, KQs:0.0193, KK:0.0035, AKo:0.0038, A2s:0.1557, A3s:0.0305, A4s:0.3210, A5s:0.2426, A6s:0.0256, A7s:0.2402, A8s:0.1356, A9s:0.0016, ATs:0.0233, AJs:0.3329, AQs:0.2226, AKs:0.2642, AA:0.5355"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "A2o:0.0080, A3o:0.0151, 44:0.0067, K4o:0.0001, A4o:0.0759, 55:0.2229, K5o:0.0002, A5o:0.1239, 66:0.0773, K6o:0.0005, A6o:0.0240, 77:0.6521, K7o:0.0233, A7o:0.4177, 88:0.1053, Q8o:0.0004, K8o:0.0331, A8o:0.4478, 99:0.0080, Q9o:0.0458, K9o:0.0136, A9o:0.0712, T7s:0.0011, T8s:0.0033, T9s:0.0051, TT:0.0860, JTo:0.0164, QTo:0.0357, KTo:0.0313, ATo:0.5831, J7s:0.0003, J8s:0.3089, J9s:0.1292, JTs:0.5588, JJ:0.2187, QJo:0.0089, KJo:0.0615, AJo:0.2177, Q5s:0.0019, Q7s:0.0004, Q8s:0.0915, Q9s:0.4340, QTs:0.1008, QJs:0.0827, QQ:0.7527, KQo:0.4629, AQo:0.6997, K2s:0.0007, K3s:0.0004, K4s:0.0286, K5s:0.3722, K6s:0.4095, K7s:0.1248, K8s:0.4528, K9s:0.0531, KTs:0.0656, KJs:0.8959, KQs:0.2867, KK:0.9567, AKo:0.4471, A2s:0.6862, A3s:0.1943, A4s:0.6413, A5s:0.3464, A6s:0.6808, A7s:0.3948, A8s:0.3472, A9s:0.0525, ATs:0.7796, AJs:0.3820, AQs:0.5158, AKs:0.5020, AA:0.4638"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@5.5",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KTs:0.0061, KK:0.0001, A8s:0.0016, AA:0.0316"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KTs:0.0001, KJs:0.0001, A8s:0.0001, AA:0.0227"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@25.38",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0009, A3o:0.0205, 44:0.0260, A4o:0.0512, 55:0.0044, K5o:0.0001, A5o:0.0346, 66:0.0581, K6o:0.0017, A6o:0.0189, 77:0.1282, K7o:0.0003, A7o:0.2737, 88:0.2054, K8o:0.0503, A8o:0.0238, 99:0.8069, J9o:0.0002, Q9o:0.0589, K9o:0.0398, A9o:0.0743, T8s:0.0001, T9s:0.0072, TT:0.5945, JTo:0.0022, QTo:0.0271, KTo:0.0547, ATo:0.0451, J7s:0.0001, J8s:0.0311, J9s:0.5121, JTs:0.0423, JJ:0.3482, QJo:0.0388, KJo:0.0067, AJo:0.0739, Q7s:0.0003, Q8s:0.6337, Q9s:0.0085, QTs:0.2983, QJs:0.0189, QQ:0.8107, KQo:0.0083, AQo:0.3783, K4s:0.0052, K5s:0.2869, K6s:0.0363, K7s:0.1463, K8s:0.3677, K9s:0.0009, KTs:0.0076, KJs:0.1163, KQs:0.2782, KK:0.9916, AKo:0.5809, A2s:0.6620, A3s:0.0114, A4s:0.0398, A5s:0.2164, A6s:0.1448, A7s:0.0299, A8s:0.0001, A9s:0.1448, ATs:0.0215, AJs:0.6928, AQs:0.0316, AKs:0.1982, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@25.38",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KTs:0.0001, KJs:0.0003, KK:0.0001, AA:0.0543"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@9.36",
    "heroPos": "SB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.1217, 99, TT, JJ, QQ, AQo:0.9992, KK, AKo, AJs:0.0003, AQs:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@9.36",
    "heroPos": "BB",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0095, 88:0.9993, 99, TT, JJ, QQ, AQo, KK, AKo, ATs:0.0002, AJs:0.9422, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@9.36",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0639, 55, 66, 77, 88, A8o:0.0003, 99, A9o:0.7607, T9s:0.0012, TT, ATo, J9s:0.0230, JTs:0.9945, JJ, KJo:0.0006, AJo, Q8s:0.0007, Q9s:0.0004, QTs:0.8503, QJs, QQ, KQo, AQo, K6s:0.0040, K8s:0.0016, K9s:0.0004, KTs:0.9992, KJs, KQs, KK, AKo, A2s:0.3640, A3s:0.2300, A4s:0.6623, A5s:0.9973, A6s:0.7529, A7s:0.9900, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@9.36|BB:4BET@12.56",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0005, 66:0.0003, 77:0.0003, 88:0.0001, 99:0.3541, TT:0.9997, KTo:0.0001, J8s:0.0002, JJ, AJo:0.0001, QTs:0.0001, QJs:0.0001, QQ, K4s:0.0001, K5s:0.0003, K8s:0.0001, KTs:0.0015, KJs:0.0015, KQs:0.0001, KK, AKo, A3s:0.0001, A4s:0.0002, A6s:0.0001, A7s:0.0001, A8s:0.0001, AQs:0.0782, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@9.36|SB:4BET@25.38",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, JJ:0.4246, QQ:0.9998, KQs:0.0001, KK, AKs:0.7135, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0174, 65s:0.0003, 88:0.0288, 96s:0.0001, 98s:0.0036, 99:0.4222, T5s:0.0002, T9s:0.0058, TT:0.9966, J9s:0.0001, JTs:0.0002, JJ:0.9969, KJo:0.2369, QTs:0.0003, QJs:0.0286, QQ:0.9997, AQo:0.3850, K8s:0.0031, K9s:0.0017, KTs:0.1131, KJs:0.1647, KQs:0.3353, KK:0.9998, AKo:0.9924, A7s:0.0002, A8s:0.0001, ATs:0.1504, AJs:0.3293, AQs:0.7597, AKs:0.9902, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "3bet 5.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "22:0.0033, 55:0.0033, 62s:0.0014, 76s:0.0001, 83s:0.0025, 84s:0.0025, 86s:0.0004, 88:0.0586, K8o:0.0270, 93s:0.0124, 98s:0.0084, K9o:0.1052, A9o:0.0193, T2s:0.0055, T3s:0.0006, T7s:0.0001, QTo:0.0230, J2s:0.0030, J3s:0.0899, J4s:0.0556, J6s:0.0088, JJ:0.4292, QJo:0.0094, AJo:0.0578, Q2s:0.0005, Q4s:0.1565, Q6s:0.0191, Q7s:0.0209, Q8s:0.0268, Q9s:0.0003, QJs:0.0030, QQ:0.1436, KQo:0.0521, AQo:0.4198, K2s:0.0433, K3s:0.0430, K4s:0.0612, K6s:0.0014, K8s:0.0394, KTs:0.1499, KJs:0.1192, KQs:0.0367, KK:0.1119, AKo:0.0661, A3s:0.0188, A4s:0.0817, A5s:0.1939, A6s:0.0003, A7s:0.0303, A8s:0.0001, A9s:0.0363, ATs:0.0479, AJs:0.0152, AQs:0.0304, AKs:0.3273, AA:0.9975"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0197, K4o:0.1538, K5o:0.0031, 63s:0.0001, 64s:0.0001, A6o:0.0007, 72s:0.0009, 77:0.4084, K7o:0.0125, 85s:0.0037, 86s:0.0337, 87s:0.0177, 88:0.0985, K8o:0.0086, 95s:0.0006, 97s:0.0169, 99:0.0034, K9o:0.0257, TT:0.0018, KTo:0.0880, J7s:0.0013, JJ:0.4775, KJo:0.5762, AJo:0.2069, Q5s:0.0033, Q6s:0.0775, QJs:0.0018, QQ:0.6420, KQo:0.4459, AQo:0.0403, K2s:0.0010, K3s:0.3297, K4s:0.0811, K5s:0.7471, K6s:0.6308, K7s:0.0108, K8s:0.7487, KTs:0.3045, KJs:0.4526, KQs:0.9099, KK:0.8878, AKo:0.9117, A3s:0.0070, A4s:0.0713, A5s:0.1261, A6s:0.0038, A7s:0.0068, A8s:0.0006, A9s:0.0102, ATs:0.7737, AQs:0.9001, AKs:0.6483, AA:0.0025"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7407, 32s:0.0006, 33:0.0173, 42s:0.0083, 43s:0.0823, 44:0.6111, A4o:0.0150, 52s:0.0036, 53s:0.0001, 55:0.8261, Q5o:0.0147, K5o:0.0001, 62s:0.0006, 64s:0.0044, 65s:0.0039, 66:0.1411, T6o:0.0039, Q6o:0.0020, A6o:0.0001, 72s:0.0005, 73s:0.0199, 75s:0.0242, 76s:0.0163, 77:0.9189, 82s:0.0013, 83s:0.0400, 84s:0.0010, 85s:0.0540, 86s:0.0461, 87s:0.0001, 88:0.3148, T8o:0.0003, K8o:0.0006, A8o:0.0004, 96s:0.0003, 97s:0.0072, 98s:0.0009, 99:0.7495, Q9o:0.0138, T3s:0.0060, T4s:0.0004, T6s:0.0004, T7s:0.0296, T8s:0.0062, T9s:0.0595, TT:0.3353, JTo:0.0515, KTo:0.2825, ATo:0.0314, J2s:0.0003, J3s:0.0001, J4s:0.0018, J5s:0.0009, J7s:0.0455, J8s:0.0224, J9s:0.0006, JTs:0.0045, JJ:0.0098, QJo:0.0050, KJo:0.0772, AJo:0.8200, Q2s:0.0338, Q4s:0.0002, Q5s:0.0014, Q7s:0.0028, Q8s:0.0298, QTs:0.0033, QJs:0.5377, QQ:0.0017, KQo:0.6696, AQo:0.5723, K2s:0.0001, K3s:0.0013, K4s:0.2504, K5s:0.0001, K6s:0.0835, K7s:0.0112, K8s:0.0017, K9s:0.0735, KTs:0.0895, KJs:0.1091, KQs:0.7926, KK:0.0028, AKo:0.0129, A2s:0.0468, A3s:0.0872, A4s:0.0173, A5s:0.3168, A6s:0.0009, A7s:0.0005, A8s:0.1933, A9s:0.1865, ATs:0.3967, AJs:0.3370, AQs:0.5106, AKs:0.1245, AA:0.0090"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0061, 72s:0.0004, 77:0.0125, 98s:0.0006, T3s:0.0002, T8s:0.0342, TT:0.6607, KTo:0.0838, ATo:0.0255, J3s:0.0011, J8s:0.0082, JTs:0.1350, JJ:0.9813, AJo:0.0527, Q4s:0.0045, Q5s:0.0007, Q7s:0.0001, Q8s:0.0004, QTs:0.1733, QJs:0.0021, QQ:0.9977, KQo:0.1050, AQo:0.4070, K3s:0.0214, K4s:0.2834, K5s:0.0003, K6s:0.0053, K7s:0.0008, K9s:0.0233, KTs:0.6802, KJs:0.6812, KQs:0.1622, KK:0.9971, AKo:0.9849, A2s:0.1290, A4s:0.0671, A5s:0.0520, A7s:0.0040, A9s:0.0005, ATs:0.2047, AJs:0.3378, AQs:0.4113, AKs:0.8755, AA:0.9909"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@12.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0006, A4o:0.0001, 55:0.0011, A5o:0.0007, 66:0.0095, A6o:0.0002, 77:0.1748, 88:0.1285, K8o:0.0003, 99:0.0021, A9o:0.0001, TT:0.0008, JTo:0.0001, ATo:0.0001, J8s:0.0001, J9s:0.0001, JTs:0.0139, JJ:0.5532, KJo:0.0001, AJo:0.0034, Q8s:0.0001, Q9s:0.0019, QTs:0.0072, QJs:0.0003, QQ:0.6187, KQo:0.0003, AQo:0.0722, K4s:0.0008, K5s:0.0001, K6s:0.0035, K8s:0.0003, K9s:0.0189, KTs:0.0015, KJs:0.0165, KQs:0.0003, KK:0.4199, AKo:0.0403, A2s:0.0098, A3s:0.0870, A5s:0.0301, A6s:0.0005, A7s:0.0022, A9s:0.0457, ATs:0.0402, AJs:0.0036, AQs:0.4111, AA:0.7845"
      },
      {
        "action": "4bet 28.59bb",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0296, A5o:0.0015, 66:0.0164, A6o:0.0022, 77:0.0007, A7o:0.0165, 88:0.1019, K8o:0.0002, 99:0.0206, Q9o:0.0001, A9o:0.0002, T9s:0.0001, TT:0.0103, JTo:0.0006, ATo:0.0001, J8s:0.0001, J9s:0.0003, JTs:0.0201, JJ:0.2600, AJo:0.0026, Q8s:0.0003, Q9s:0.0002, QTs:0.0070, QJs:0.0001, QQ:0.1284, KQo:0.0003, AQo:0.0727, K2s:0.0001, K4s:0.0005, K5s:0.0004, K6s:0.0083, K8s:0.0008, K9s:0.0171, KTs:0.0082, KJs:0.1128, KQs:0.0001, KK:0.5801, AKo:0.9574, A2s:0.0029, A3s:0.0726, A4s:0.0003, A5s:0.0072, A6s:0.0002, A7s:0.0405, A8s:0.0002, A9s:0.0075, ATs:0.0038, AJs:0.0186, AQs:0.0029, AKs:0.9996, AA:0.2155"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@12.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0018, 77:0.0021, 88:0.0042, 99:0.0002, TT:0.2343, JJ:0.0640, QQ:0.0301, AQo:0.0047, KK:0.0530, ATs:0.0005, AJs:0.0014, AQs:0.1586, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@5.5",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0038, A3o:0.0022, 44:0.0036, A4o:0.0005, 55:0.0007, 66:0.0029, K6o:0.0005, A6o:0.0046, 77:0.0070, A7o:0.0072, 88:0.1334, A8o:0.0073, 99:0.0007, Q9o:0.0004, K9o:0.0016, T9s:0.0002, TT:0.0046, JTo:0.0020, QTo:0.0001, ATo:0.0642, J8s:0.0025, J9s:0.0115, JTs:0.0002, JJ:0.2412, KJo:0.0039, AJo:0.0034, Q7s:0.0002, Q8s:0.1481, Q9s:0.1976, QTs:0.0154, QJs:0.1581, QQ:0.0111, KQo:0.0076, AQo:0.0002, K4s:0.0103, K5s:0.0023, K6s:0.0145, K7s:0.0004, K8s:0.0129, K9s:0.0009, KTs:0.0209, KJs:0.0070, KQs:0.0011, KK:0.2472, AKo:0.3887, A2s:0.0007, A3s:0.0079, A4s:0.0115, A5s:0.0363, A6s:0.0001, A7s:0.0727, A8s:0.0270, A9s:0.0653, ATs:0.0025, AJs:0.0055, AQs:0.6896, AKs:0.5215, AA:0.5110"
      },
      {
        "action": "4bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.4558, A3o:0.7433, 44:0.0015, A4o:0.2025, 55:0.2951, A5o:0.2271, 65s:0.0001, 66:0.4546, K6o:0.0004, A6o:0.0784, 77:0.4047, K7o:0.0060, A7o:0.0036, 88:0.2826, Q8o:0.0001, K8o:0.0013, A8o:0.0850, 99:0.6982, Q9o:0.4740, K9o:0.0762, A9o:0.0651, T7s:0.0002, T8s:0.0005, T9s:0.0005, TT:0.2643, JTo:0.0002, QTo:0.0018, KTo:0.0399, ATo:0.0283, J7s:0.0010, J8s:0.0551, J9s:0.1074, JTs:0.0014, JJ:0.2420, QJo:0.0008, KJo:0.0002, AJo:0.2882, Q5s:0.0005, Q7s:0.1084, Q8s:0.0120, Q9s:0.3621, QTs:0.0753, QJs:0.2856, QQ:0.2685, KQo:0.1253, AQo:0.7559, K2s:0.0006, K3s:0.0001, K4s:0.0111, K5s:0.0518, K6s:0.4693, K7s:0.4765, K8s:0.6240, K9s:0.0291, KTs:0.3433, KJs:0.2846, KQs:0.1590, KK:0.7510, AKo:0.5940, A2s:0.3107, A3s:0.5899, A4s:0.6847, A5s:0.3824, A6s:0.5834, A7s:0.3244, A8s:0.8390, A9s:0.9073, ATs:0.5708, AJs:0.5615, AQs:0.2245, AKs:0.2425, AA:0.4886"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@5.5",
    "heroPos": "CO",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 25.38bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0021, 65s:0.0027, 66:0.0018, 77:0.0005, 88:0.0202, TT:0.0009, JJ:0.0052, AJo:0.0001, QJs:0.0005, QQ:0.0297, AQo:0.0020, KTs:0.0016, KK:0.0526, A9s:0.0064, ATs:0.1134, AJs:0.0004, AQs:0.1313, AA:0.0001"
      },
      {
        "action": "4bet 25.38bb",
        "min": 0.0001,
        "range": "55:0.0003, 65s:0.0003, 66:0.0005, 77:0.0001, 88:0.0004, TT:0.0047, JJ:0.0212, AJo:0.0063, QTs:0.0001, QJs:0.0095, QQ:0.0004, AQo:0.0069, KTs:0.0002, KK:0.0004, A8s:0.0010, A9s:0.0265, ATs:0.1718, AJs:0.0032, AQs:0.0297"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@25.38",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0015, 44:0.0013, A4o:0.0004, 55:0.0030, 66:0.0003, A6o:0.0005, 77:0.0350, K7o:0.0001, 88:0.2938, 99:0.3532, A9o:0.0001, TT:0.2062, JTo:0.0001, KTo:0.0003, ATo:0.0001, J8s:0.0003, J9s:0.0005, JTs:0.0001, JJ:0.4324, KJo:0.0001, AJo:0.0001, Q9s:0.0001, QTs:0.0032, QJs:0.0001, QQ:0.5860, KQo:0.0003, AQo:0.0891, K4s:0.0003, K5s:0.0064, K6s:0.0002, K7s:0.0001, K8s:0.0002, K9s:0.0004, KTs:0.0004, KJs:0.1183, KQs:0.0033, KK:0.9311, AKo:0.4375, A2s:0.0015, A3s:0.0049, A5s:0.0249, A7s:0.0071, A8s:0.0319, A9s:0.0006, ATs:0.2301, AJs:0.0070, AQs:0.2573, AKs:0.6275, AA:0.0557"
      },
      {
        "action": "4bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.0010, A3o:0.0018, 44:0.0012, A4o:0.0003, 55:0.0019, A5o:0.0001, 66:0.0016, A6o:0.0003, 77:0.0530, K7o:0.0002, 88:0.2350, K8o:0.0001, 99:0.4617, Q9o:0.0004, K9o:0.0001, A9o:0.0004, TT:0.0475, JTo:0.0005, QTo:0.0002, ATo:0.0001, J8s:0.0025, J9s:0.0009, JTs:0.0015, JJ:0.5157, KJo:0.0002, Q8s:0.0001, Q9s:0.0001, QTs:0.0046, QJs:0.0001, QQ:0.3847, KQo:0.0017, AQo:0.0564, K5s:0.0048, K6s:0.0002, K7s:0.0010, K8s:0.0001, K9s:0.0001, KJs:0.1215, KQs:0.0039, KK:0.0689, AKo:0.5395, A2s:0.0008, A3s:0.0036, A4s:0.0001, A5s:0.0085, A6s:0.0004, A7s:0.0109, A8s:0.0071, A9s:0.0050, ATs:0.3184, AJs:0.0064, AQs:0.2400, AKs:0.3721, AA:0.9443"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@25.38",
    "heroPos": "CO",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0295, KK:0.0530, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@9.36",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0002, 44:0.0004, A4o:0.0005, 55:0.5887, A5o:0.0010, 66:0.0175, 77:0.0870, K7o:0.0002, A7o:0.0040, 88:0.2011, K8o:0.0024, A8o:0.0001, 99:0.1533, K9o:0.0003, T9s:0.0001, TT:0.0457, JTo:0.0029, ATo:0.0005, J9s:0.0061, JTs:0.1107, JJ:0.7971, QJo:0.0002, KJo:0.0072, AJo:0.0048, Q7s:0.0020, Q8s:0.0002, Q9s:0.0020, QJs:0.0158, QQ:0.6104, KQo:0.0033, AQo:0.0095, K4s:0.0002, K5s:0.0189, K7s:0.0010, K9s:0.1395, KTs:0.0172, KJs:0.0213, KQs:0.0036, KK:0.4919, AKo:0.5812, A2s:0.0039, A3s:0.0004, A4s:0.0634, A5s:0.0028, A6s:0.0206, A7s:0.0032, A8s:0.0029, A9s:0.0101, ATs:0.0027, AJs:0.0373, AQs:0.3123, AKs:0.2445, AA:0.2731"
      },
      {
        "action": "4bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0003, A4o:0.0001, 55:0.1031, A5o:0.0007, 66:0.0188, A6o:0.0011, 77:0.0094, A7o:0.0004, 88:0.0439, K8o:0.0001, A8o:0.0003, 99:0.1691, K9o:0.0004, A9o:0.0008, TT:0.0156, JTo:0.0001, QTo:0.0017, KTo:0.0004, ATo:0.0021, J8s:0.0008, J9s:0.0023, JTs:0.0083, JJ:0.1544, QJo:0.0002, KJo:0.0003, AJo:0.0003, Q7s:0.0008, Q8s:0.0002, Q9s:0.0005, QTs:0.0002, QJs:0.0001, QQ:0.3896, KQo:0.0014, AQo:0.1271, K5s:0.0221, K6s:0.0005, K7s:0.0002, K8s:0.0002, KTs:0.1146, KJs:0.0017, KQs:0.0148, KK:0.5081, AKo:0.4128, A2s:0.0066, A3s:0.0163, A4s:0.0059, A5s:0.0406, A6s:0.0056, A7s:0.0007, A9s:0.0171, ATs:0.0032, AJs:0.1318, AQs:0.3123, AKs:0.7358, AA:0.7269"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@9.36",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0240, 66:0.0320, 77:0.0057, 88:0.0527, 99:0.0033, TT:0.2546, JJ:0.0640, QTs:0.0001, QJs:0.0037, QQ:0.0301, AQo:0.0116, KTs:0.0004, KQs:0.0002, KK:0.0530, A9s:0.0003, ATs:0.0235, AJs:0.0025, AQs:0.1619, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 66:0.0001, 99:0.0046, TT:0.2874, JJ:0.9585, AJo:0.0078, QQ, AQo:0.6597, KK, AKo:0.9810, A3s:0.0001, ATs:0.0002, AJs:0.1056, AQs:0.9819, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0200, A3o:0.0492, A4o:0.0367, 55:0.0001, A5o:0.0501, 63s:0.0008, 64s:0.0014, A7o:0.0021, 88:0.0002, A8o:0.0013, A9o:0.0036, T4s:0.0023, T8s:0.0027, TT:0.0005, J9s:0.0002, Q9s:0.0001, QQ:0.0076, AQo:0.0752, K7s:0.0002, KK:0.2539, AKo:0.4671, A3s:0.0883, A4s:0.3198, A5s:0.0337, A6s:0.2540, A7s:0.0710, A8s:0.1161, A9s:0.0376, ATs:0.1678, AJs:0.0195, AQs:0.1801, AKs:0.9581, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.1488, 99:0.0247, TT:0.7112, JJ:0.9949, AJo:0.1183, QQ:0.9959, AQo:0.9828, K9s:0.0001, KJs:0.0002, KK, AKo:0.9932, A7s:0.0001, ATs:0.0629, AJs:0.6957, AQs:0.9927, AKs:0.9979, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5",
    "heroPos": "HJ",
    "eff": 28.85,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0693, A3o:0.0638, 44:0.0153, A4o:0.0499, 55:0.5264, A5o:0.2141, 66:0.5310, A6o:0.0424, 77:0.4636, A7o:0.0281, 88:0.3564, A8o:0.0266, 99:0.4367, A9o:0.0291, T7s:0.0004, T8s:0.0012, T9s:0.0236, TT:0.7609, JTo:0.0010, QTo:0.0365, ATo:0.0203, J7s:0.0001, J8s:0.0264, J9s:0.0515, JTs:0.2963, JJ:0.9888, AJo:0.9881, Q5s:0.0004, Q7s:0.0201, Q8s:0.0413, Q9s:0.2677, QTs:0.7810, QJs:0.2603, QQ:0.4713, KQo:0.0115, AQo:0.0830, K2s:0.0006, K5s:0.0125, K7s:0.0003, K8s:0.0073, K9s:0.1000, KTs:0.0827, KJs:0.0714, KQs:0.1779, KK:0.8960, AKo:0.0138, A2s:0.2181, A3s:0.1276, A4s:0.0995, A5s:0.2248, A6s:0.1764, A7s:0.3004, A8s:0.0750, A9s:0.3602, ATs:0.3197, AJs:0.9923, AQs:0.2333, AKs:0.0337, AA:0.5764"
      },
      {
        "action": "4bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.1244, A3o:0.1617, 44:0.0016, A4o:0.5266, 55:0.0487, A5o:0.6073, 66:0.3303, A6o:0.4398, 77:0.0421, A7o:0.6722, 88:0.2977, A8o:0.1971, 99:0.0430, A9o:0.0324, T8s:0.0001, T9s:0.0120, TT:0.1906, JTo:0.0001, QTo:0.0010, KTo:0.0001, ATo:0.5117, J8s:0.0012, J9s:0.0258, JTs:0.0498, JJ:0.0096, QJo:0.0002, KJo:0.0001, AJo:0.0100, Q7s:0.0012, Q8s:0.0019, Q9s:0.0036, QTs:0.0187, QQ:0.5254, KQo:0.0001, AQo:0.9170, K4s:0.0003, K5s:0.0078, K6s:0.0001, K7s:0.0044, K8s:0.0012, K9s:0.0003, KTs:0.0156, KJs:0.0086, KQs:0.0029, KK:0.1036, AKo:0.9862, A2s:0.7672, A3s:0.8713, A4s:0.8957, A5s:0.7606, A6s:0.8139, A7s:0.6967, A8s:0.9142, A9s:0.5268, ATs:0.6795, AJs:0.0075, AQs:0.7667, AKs:0.9662, AA:0.4236"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|HJ:4BET@28.59",
    "heroPos": "CO",
    "eff": 28.85,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0794, QQ:0.0003, AQo:0.0059, AQs:0.0177, AKs:0.1593, AA:0.8994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|BB:4BET@12.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0001, A4o:0.0001, 55:0.0056, 66:0.0002, 77:0.0175, A7o:0.0001, 88:0.0002, 99:0.0002, K9o:0.0001, TT:0.0001, J8s:0.0008, JJ:0.4716, KJo:0.0001, Q7s:0.0001, QJs:0.0003, QQ:0.9602, K6s:0.0006, KJs:0.0002, KQs:0.0001, KK:0.9434, AKo:0.9322, A4s:0.0002, A5s:0.0001, A6s:0.0032, A7s:0.0006, A8s:0.0003, A9s:0.0001, ATs:0.0001, AJs:0.0041, AQs:0.0171, AKs:0.6076, AA:0.9563"
      },
      {
        "action": "5bet 28.59bb",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0001, 55:0.0075, 66:0.0004, 77:0.0139, 99:0.0001, TT:0.0002, ATo:0.0001, J8s:0.0001, J9s:0.0003, JJ:0.2768, QJo:0.0001, Q8s:0.0001, Q9s:0.0007, QTs:0.0001, QJs:0.0039, QQ:0.0390, KQo:0.0003, AQo:0.0002, K5s:0.0001, K6s:0.0003, KJs:0.0003, KQs:0.0002, KK:0.0565, AKo:0.0066, A4s:0.0010, A5s:0.0001, A6s:0.0009, A7s:0.0001, A8s:0.0013, ATs:0.0003, AJs:0.0025, AQs:0.0045, AKs:0.1939, AA:0.0436"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|BB:4BET@12.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0003, A4o:0.0015, 55:0.0047, A5o:0.0069, 66:0.0186, 77:0.0194, A7o:0.0001, 88:0.0483, 99:0.0011, TT:0.3240, ATo:0.0006, JTs:0.0001, AJo:0.0727, QQ:0.0003, AQo:0.0599, KTs:0.0001, A2s:0.0372, A3s:0.0046, A5s:0.0005, A6s:0.0046, A7s:0.0362, A8s:0.0476, A9s:0.1652, ATs:0.2997, AQs:0.0216, AKs:0.1593, AA:0.8994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|SB:4BET@25.38",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0001, 44:0.0001, A4o:0.0001, 55:0.0005, A5o:0.0012, 66:0.0160, A6o:0.0001, 77:0.0749, 88:0.1428, A8o:0.0012, 99:0.2873, Q9o:0.0001, A9o:0.0003, TT:0.2230, QTo:0.0001, J8s:0.0018, JJ:0.2555, QJo:0.0001, KJo:0.0010, AJo:0.0011, Q8s:0.0001, Q9s:0.0021, QTs:0.0007, QJs:0.0003, QQ:0.0551, AQo:0.0116, K5s:0.0079, K6s:0.0006, K7s:0.0003, K8s:0.0001, K9s:0.0022, KTs:0.0001, KJs:0.0006, KQs:0.0002, KK:0.0980, AKo:0.3794, A2s:0.0019, A4s:0.0001, A5s:0.0052, A6s:0.0002, A8s:0.0018, A9s:0.0025, ATs:0.0016, AJs:0.1741, AQs:0.0148, AKs:0.0276, AA:0.7104"
      },
      {
        "action": "5bet 28.59bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0001, A4o:0.0001, 55:0.0009, A5o:0.0017, 66:0.0134, A6o:0.0002, 77:0.0919, 88:0.1619, A8o:0.0001, 99:0.2320, A9o:0.0004, TT:0.2767, QTo:0.0003, ATo:0.0003, J8s:0.0025, J9s:0.0001, JTs:0.0001, JJ:0.2971, KJo:0.0010, AJo:0.0003, Q8s:0.0003, Q9s:0.0009, QTs:0.0006, QJs:0.0070, QQ:0.1160, KQo:0.0002, AQo:0.0152, K5s:0.0046, K7s:0.0216, K8s:0.0002, K9s:0.0007, KTs:0.0009, KJs:0.0003, KQs:0.0013, KK:0.9018, AKo:0.4196, A2s:0.0015, A3s:0.0002, A4s:0.0006, A5s:0.0016, A6s:0.0001, A7s:0.0002, A8s:0.0051, A9s:0.0019, ATs:0.0006, AJs:0.1671, AQs:0.0195, AKs:0.0224, AA:0.2885"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|SB:4BET@25.38",
    "heroPos": "CO",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0278, A9s:0.0001, ATs:0.0001, AQs:0.0002, AKs:0.1458, AA:0.8994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|BTN:4BET@9.36",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0005, 44:0.0003, 55:0.0007, 66:0.0007, A6o:0.0002, 77:0.0509, 88:0.0020, A8o:0.0003, 99:0.0092, A9o:0.0001, T9s:0.0004, TT:0.0955, ATo:0.0005, J8s:0.0003, JTs:0.0052, JJ:0.2608, KJo:0.0002, AJo:0.0012, Q8s:0.0002, Q9s:0.0015, QTs:0.0075, QJs:0.0002, QQ:0.9719, K4s:0.0004, K6s:0.0085, K7s:0.0135, K8s:0.0030, K9s:0.0012, KTs:0.0243, KQs:0.0654, KK:0.9429, AKo:0.8954, A4s:0.0002, A5s:0.0002, A6s:0.0004, A7s:0.0047, A8s:0.0001, A9s:0.0019, ATs:0.0070, AJs:0.0023, AQs:0.0115, AKs:0.8227, AA:0.5680"
      },
      {
        "action": "5bet 28.59bb",
        "min": 0.0001,
        "range": "44:0.0009, 55:0.0001, 66:0.0002, A6o:0.0005, 77:0.0004, A7o:0.0001, 88:0.0172, Q9o:0.0001, A9o:0.0001, TT:0.0419, QTo:0.0001, ATo:0.0004, J9s:0.0004, JTs:0.0001, JJ:0.0027, QJo:0.0001, AJo:0.0010, Q8s:0.0001, Q9s:0.0014, QTs:0.0030, QJs:0.0002, QQ:0.0168, AQo:0.0003, K4s:0.0002, K6s:0.0040, K7s:0.0002, K8s:0.0011, K9s:0.0026, KTs:0.0013, KJs:0.0003, KQs:0.0034, KK:0.0569, AKo:0.0792, A2s:0.0001, A3s:0.0014, A4s:0.0202, A5s:0.0008, A7s:0.0003, A8s:0.0062, A9s:0.0211, ATs:0.0005, AJs:0.0016, AQs:0.0139, AKs:0.1664, AA:0.4320"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5.5|BTN:4BET@9.36",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0012, A3o:0.0505, 44:0.0003, A4o:0.1914, 55:0.0047, A5o:0.2151, 66:0.0186, 77:0.0194, A7o:0.0456, 88:0.0483, A8o:0.0005, 99:0.0011, A9o:0.0001, TT:0.3240, ATo:0.0571, JTs:0.0001, AJo:0.3869, QQ:0.0003, AQo:0.0599, KTs:0.0001, A2s:0.0379, A3s:0.0046, A5s:0.0005, A6s:0.0047, A7s:0.0363, A8s:0.0479, A9s:0.1698, ATs:0.4713, AQs:0.0216, AKs:0.1593, AA:0.8994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "52o:0.0001, J2o:0.0001, 33:0.0001, 43s:0.0002, 44:0.0004, 52s:0.0001, 53s:0.0002, 55:0.0002, A5o:0.0001, 62s:0.0003, 65s:0.0069, 66:0.0171, 72s:0.0002, 75s:0.0002, 76s:0.0001, J7o:0.0004, 87s:0.0001, 88:0.0158, 92s:0.0001, 94s:0.0003, 97s:0.0001, 98s:0.0002, 99:0.2330, A9o:0.0515, T3s:0.0001, T6s:0.0003, T7s:0.0002, T9s:0.0001, TT:0.1131, J6s:0.0015, J9s:0.0001, JTs:0.0009, JJ:0.2541, KJo:0.0001, AJo:0.0001, Q4s:0.0019, Q7s:0.0002, QQ:0.9729, KQo:0.0001, AQo:0.0046, K2s:0.0001, K3s:0.0003, K4s:0.0008, K8s:0.0005, K9s:0.0026, KQs:0.0095, KK:0.9993, AKo:0.9803, A2s:0.0036, A4s:0.0013, A5s:0.2602, A6s:0.0001, A7s:0.1499, A8s:0.0862, A9s:0.0358, ATs:0.1026, AJs:0.7234, AQs:0.2952, AKs:0.5292, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "42s:0.0006, 54s:0.0001, 55:0.0001, 62s:0.0003, 73s:0.0001, 76s:0.0002, 84s:0.0006, 95s:0.0001, 98s:0.0001, T4s:0.0004, T5s:0.0001, T8s:0.0027, ATo:0.0112, J2s:0.0001, J6s:0.0001, J9s:0.0001, JJ:0.0002, AJo:0.0001, Q4s:0.0005, Q7s:0.0001, Q8s:0.0004, QQ:0.0151, K2s:0.0289, K3s:0.0041, K5s:0.0001, K6s:0.0002, K7s:0.0253, K9s:0.0001, KJs:0.0714, KQs:0.0346, KK:0.3071, AKo:0.8610, A2s:0.3183, A3s:0.0379, A4s:0.0761, A5s:0.0004, A6s:0.0423, A7s:0.0270, A9s:0.0001, AJs:0.0187, AQs:0.0095, AKs:0.2988, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "Q2o:0.0001, A2o:0.0003, 42s:0.0001, 44:0.0004, 54s:0.0001, 55:0.0015, 62s:0.0001, 63s:0.0001, J6o:0.0001, K6o:0.0001, 72s:0.0002, 75s:0.0002, 77:0.0013, 87o:0.0001, 82s:0.0002, 84s:0.0005, 85s:0.0010, 87s:0.0007, 88:0.2220, A8o:0.0002, 93s:0.0005, 94s:0.0002, 95s:0.0002, 96s:0.0001, 97s:0.0006, 99:0.0022, T3s:0.0008, T5s:0.0001, T8s:0.0001, T9s:0.0014, TT:0.1521, ATo:0.0001, J2s:0.0001, J3s:0.0002, J4s:0.0002, J6s:0.0001, J7s:0.0001, J8s:0.0005, JTs:0.0001, JJ:0.0062, Q3s:0.0001, QTs:0.0004, QQ:0.0079, KQo:0.0001, AQo:0.0059, K4s:0.0002, K5s:0.0001, K6s:0.0002, K7s:0.0001, K8s:0.0001, K9s:0.0018, KJs:0.0026, KQs:0.0004, KK, AKo:0.9373, A2s:0.0267, A3s:0.0013, A4s:0.0005, A5s:0.0001, A7s:0.0006, A9s:0.0040, ATs:0.0302, AJs:0.1546, AQs:0.2067, AKs:0.9656, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8",
    "heroPos": "HJ",
    "eff": 28.85,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0140, A3o:0.0411, 44:0.0109, A4o:0.0160, 55:0.0011, A5o:0.0649, 66:0.0349, A6o:0.0134, 77:0.0508, K7o:0.0006, A7o:0.0851, 88:0.2569, A8o:0.1158, 99:0.0287, Q9o:0.0001, A9o:0.0299, T9s:0.0093, TT:0.0049, QTo:0.0002, KTo:0.0206, ATo:0.0829, J9s:0.0004, JJ:0.3327, AJo:0.4684, QTs:0.0045, QJs:0.0001, QQ:0.2709, KQo:0.0007, AQo:0.1238, K4s:0.0965, K5s:0.0281, K6s:0.0045, K7s:0.0028, K8s:0.0101, K9s:0.0297, KTs:0.0806, KJs:0.0010, KQs:0.0431, KK:0.3807, AKo:0.0787, A2s:0.0009, A3s:0.0241, A4s:0.0324, A5s:0.3506, A6s:0.0413, A7s:0.0716, A8s:0.0336, A9s:0.0226, ATs:0.2117, AJs:0.0276, AQs:0.0577, AKs:0.0732, AA:0.3412"
      },
      {
        "action": "4bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.2324, A3o:0.0928, 44:0.0055, A4o:0.1144, 55:0.1188, A5o:0.3231, 66:0.3671, K6o:0.0016, A6o:0.2149, 77:0.2643, K7o:0.0167, A7o:0.1233, 88:0.0019, K8o:0.0492, A8o:0.1126, 99:0.0054, K9o:0.0070, A9o:0.4904, T9s:0.0159, TT:0.4710, JTo:0.0052, QTo:0.0003, KTo:0.0443, ATo:0.3317, J8s:0.0292, J9s:0.0184, JTs:0.0132, JJ:0.4612, QJo:0.0002, KJo:0.0504, AJo:0.0907, Q8s:0.0003, Q9s:0.0591, QTs:0.0917, QJs:0.0001, QQ:0.3582, KQo:0.1535, AQo:0.4004, K2s:0.0004, K3s:0.0001, K4s:0.0248, K5s:0.0586, K6s:0.0940, K7s:0.0946, K8s:0.0786, K9s:0.4340, KTs:0.4316, KJs:0.0607, KQs:0.1627, KK:0.6193, AKo:0.9213, A2s:0.9282, A3s:0.8388, A4s:0.6538, A5s:0.4901, A6s:0.4972, A7s:0.4518, A8s:0.7225, A9s:0.9586, ATs:0.6176, AJs:0.9260, AQs:0.9263, AKs:0.9266, AA:0.6588"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|HJ:4BET@28.59",
    "heroPos": "CO",
    "eff": 28.85,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0161, JJ:0.0019, KK:0.0092, AKo:0.0014, AKs:0.0141, AA:0.1005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|BB:4BET@12.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0074, 44:0.0008, A4o:0.0009, 55:0.0528, A5o:0.0014, 66:0.0002, A6o:0.0014, 77:0.3014, K7o:0.0001, A7o:0.0088, 88:0.0277, K8o:0.0005, A8o:0.0001, 99:0.3423, Q9o:0.0016, K9o:0.0109, A9o:0.0031, T7s:0.0001, T8s:0.0005, TT:0.0021, JTo:0.0001, QTo:0.0027, KTo:0.0003, ATo:0.0032, J8s:0.0190, J9s:0.1088, JTs:0.1454, JJ:0.0322, QJo:0.0154, KJo:0.0247, AJo:0.0025, Q5s:0.0015, Q7s:0.0004, Q8s:0.0532, Q9s:0.0125, QTs:0.0001, QJs:0.0099, QQ:0.0795, KQo:0.0034, AQo:0.0026, K2s:0.0001, K4s:0.0065, K5s:0.0002, K6s:0.0033, K7s:0.0203, K8s:0.0002, K9s:0.2500, KTs:0.0067, KJs:0.0570, KQs:0.1011, KK:0.0015, AKo:0.0961, A2s:0.0957, A3s:0.0069, A4s:0.0165, A5s:0.0038, A6s:0.0347, A7s:0.2134, A8s:0.1181, A9s:0.0198, ATs:0.0115, AJs:0.1415, AQs:0.0775, AKs:0.0658, AA:0.4316"
      },
      {
        "action": "5bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.0072, 44:0.0158, A4o:0.0001, 55:0.0321, A5o:0.0006, 66:0.0004, K6o:0.0006, A6o:0.0004, 77:0.2529, K7o:0.0004, A7o:0.0053, 88:0.0042, K8o:0.0094, A8o:0.0185, 99:0.1507, Q9o:0.0004, K9o:0.0097, A9o:0.0123, T8s:0.0023, TT:0.0047, JTo:0.0063, QTo:0.0011, KTo:0.0099, ATo:0.0063, J8s:0.0026, J9s:0.0500, JTs:0.0037, JJ:0.0152, QJo:0.0078, KJo:0.0387, AJo:0.0017, Q5s:0.0003, Q7s:0.0002, Q8s:0.0056, Q9s:0.0449, QTs:0.0001, QJs:0.0871, QQ:0.0576, KQo:0.0037, AQo:0.0129, K4s:0.0103, K5s:0.4037, K6s:0.0105, K7s:0.0227, K8s:0.0002, K9s:0.1688, KTs:0.0003, KJs:0.0182, KQs:0.0928, KK:0.4738, AKo:0.1438, A2s:0.0002, A3s:0.0429, A4s:0.0968, A5s:0.0147, A6s:0.0845, A7s:0.0546, A8s:0.4422, A9s:0.0355, ATs:0.0007, AJs:0.0031, AQs:0.0760, AKs:0.7645, AA:0.5617"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|BB:4BET@12.56",
    "heroPos": "CO",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0079, A3o:0.0206, A4o:0.0269, 55:0.0003, K5o:0.0011, A5o:0.0007, A6o:0.0237, 99:0.0001, A9o:0.0039, TT:0.0254, KTo:0.0002, ATo:0.0008, JJ:0.0019, KJo:0.0005, AJo:0.0181, K2s:0.0076, K3s:0.0022, K4s:0.0003, K5s:0.0010, K6s:0.0007, K7s:0.0001, K8s:0.0030, K9s:0.0002, KTs:0.0005, KK:0.0092, AKo:0.0014, A3s:0.0009, A5s:0.0001, A7s:0.0015, A8s:0.0002, A9s:0.0272, ATs:0.0001, AKs:0.0141, AA:0.1005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|SB:4BET@25.38",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0096, A3o:0.0087, 44:0.0002, A4o:0.0007, 55:0.0011, K5o:0.0001, A5o:0.0600, 66:0.0011, K6o:0.0003, A6o:0.0601, 77:0.0005, K7o:0.0001, A7o:0.0098, 88:0.0220, K8o:0.0003, 99:0.0011, Q9o:0.0004, K9o:0.0003, A9o:0.0022, T8s:0.0002, T9s:0.0078, TT:0.0030, JTo:0.0052, QTo:0.0001, KTo:0.0092, ATo:0.0014, J8s:0.0001, J9s:0.0008, JTs:0.0926, JJ:0.0234, QJo:0.0003, KJo:0.0054, AJo:0.0102, Q7s:0.0001, Q8s:0.0012, Q9s:0.0170, QTs:0.0092, QJs:0.0018, QQ:0.0178, KQo:0.0012, AQo:0.0006, K4s:0.0002, K5s:0.0199, K6s:0.0018, K7s:0.2986, K8s:0.0305, K9s:0.0131, KTs:0.1879, KJs:0.1524, KQs:0.0042, KK:0.2324, AKo:0.2616, A2s:0.0037, A3s:0.1226, A4s:0.0148, A5s:0.0039, A6s:0.1145, A7s:0.0727, A8s:0.1318, A9s:0.0023, ATs:0.0003, AJs:0.1084, AQs:0.3916, AKs:0.0059, AA:0.8847"
      },
      {
        "action": "5bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.0165, A3o:0.0087, 44:0.0005, A4o:0.0605, 55:0.0094, A5o:0.0531, 66:0.0249, K6o:0.0003, A6o:0.0981, 77:0.0274, A7o:0.0002, 88:0.0412, K8o:0.0003, 99:0.0067, Q9o:0.0022, K9o:0.0036, A9o:0.0069, T8s:0.0003, T9s:0.0021, TT:0.0036, JTo:0.0037, QTo:0.0019, KTo:0.0095, ATo:0.0092, J8s:0.0001, J9s:0.0008, JTs:0.1819, JJ:0.0583, QJo:0.0064, KJo:0.0030, AJo:0.0567, Q5s:0.0001, Q7s:0.0004, Q8s:0.0012, Q9s:0.0003, QTs:0.0627, QJs:0.0143, QQ:0.1023, KQo:0.0167, AQo:0.0015, K4s:0.0007, K5s:0.1418, K6s:0.0018, K7s:0.1569, K8s:0.0002, K9s:0.0131, KTs:0.1130, KJs:0.6532, KQs:0.0020, KK:0.2365, AKo:0.2504, A2s:0.0023, A3s:0.0438, A4s:0.1272, A5s:0.0291, A6s:0.2181, A7s:0.0488, A8s:0.2213, A9s:0.0023, ATs:0.0577, AJs:0.0055, AQs:0.3560, AKs:0.2080, AA:0.1008"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|SB:4BET@25.38",
    "heroPos": "CO",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0094, JJ:0.0005, KK:0.0092, AKo:0.0014, AKs:0.0140, AA:0.1005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|BTN:4BET@9.36",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 28.59bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0012, A3o:0.0003, 44:0.0086, A4o:0.0016, 55:0.5149, A5o:0.0011, 66:0.0019, K6o:0.0007, A6o:0.0045, 77:0.0584, K7o:0.0014, A7o:0.0025, 88:0.1107, K8o:0.0006, A8o:0.0053, 99:0.0497, Q9o:0.0005, K9o:0.0066, A9o:0.0006, T7s:0.0001, T9s:0.0118, TT:0.3654, JTo:0.0136, QTo:0.0004, KTo:0.0023, ATo:0.0034, J8s:0.0499, J9s:0.1061, JTs:0.0422, JJ:0.0145, QJo:0.0019, KJo:0.0131, AJo:0.0054, Q7s:0.0007, Q8s:0.0072, Q9s:0.0002, QTs:0.1392, QJs:0.0023, QQ:0.2726, KQo:0.0051, AQo:0.0046, K4s:0.0070, K5s:0.0517, K6s:0.0015, K7s:0.0005, K8s:0.0010, K9s:0.0139, KTs:0.0006, KJs:0.0354, KQs:0.2524, KK:0.0051, AKo:0.0245, A2s:0.1403, A3s:0.0099, A4s:0.0002, A5s:0.0214, A6s:0.1694, A7s:0.0012, A8s:0.1375, ATs:0.3046, AJs:0.0359, AQs:0.3600, AKs:0.2611, AA:0.1728"
      },
      {
        "action": "5bet 28.59bb",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0013, 44:0.0001, A4o:0.0024, 55:0.2505, A5o:0.0010, 66:0.0615, K6o:0.0002, A6o:0.0002, 77:0.0314, A7o:0.0016, 88:0.1185, K8o:0.0004, A8o:0.0093, 99:0.0006, Q9o:0.0022, K9o:0.0006, A9o:0.0019, T7s:0.0001, T9s:0.0013, TT:0.1453, JTo:0.0011, QTo:0.0030, KTo:0.0304, ATo:0.0031, J8s:0.0970, J9s:0.0334, JTs:0.0101, JJ:0.0105, QJo:0.0004, KJo:0.0141, AJo:0.0008, Q7s:0.0023, Q9s:0.0095, QTs:0.0718, QJs:0.0208, QQ:0.7060, KQo:0.0009, AQo:0.0080, K2s:0.0001, K4s:0.0065, K5s:0.0026, K6s:0.0060, K7s:0.0004, K8s:0.0052, K9s:0.0032, KTs:0.1899, KJs:0.1860, KQs:0.0105, KK:0.9949, AKo:0.0879, A2s:0.0360, A3s:0.2856, A4s:0.1903, A5s:0.1714, A6s:0.0530, A7s:0.0809, A8s:0.0581, A9s:0.0152, ATs:0.1303, AJs:0.0049, AQs:0.0836, AKs:0.3043, AA:0.8271"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@8|BTN:4BET@9.36",
    "heroPos": "CO",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0079, A3o:0.0206, A4o:0.0269, 55:0.0003, K5o:0.0011, A5o:0.0007, A6o:0.0237, 99:0.0001, A9o:0.0039, TT:0.0254, KTo:0.0002, ATo:0.0008, JJ:0.0019, KJo:0.0005, AJo:0.0181, K2s:0.0076, K3s:0.0022, K4s:0.0003, K5s:0.0010, K6s:0.0007, K7s:0.0001, K8s:0.0030, K9s:0.0002, KTs:0.0005, KK:0.0092, AKo:0.0014, A3s:0.0009, A5s:0.0001, A7s:0.0015, A8s:0.0002, A9s:0.0272, ATs:0.0001, AKs:0.0141, AA:0.1005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59",
    "heroPos": "BTN",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.2061, TT:0.6267, JJ:0.9997, QQ, AQo:0.0005, KK, AKo, AJs:0.0009, AQs:0.3571, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59",
    "heroPos": "SB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9569, KK, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59",
    "heroPos": "BB",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0019, JJ:0.9998, QQ, KK, AKo, AQs:0.0151, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59",
    "heroPos": "HJ",
    "eff": 28.85,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0104, JJ, QQ, KK, AKo, AQs:0.1385, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59|BB:CALL@11.56",
    "heroPos": "HJ",
    "eff": 12.82,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0002, 77:0.0002, 88:0.0001, 99:0.0858, TT:0.0001, JTs:0.0002, JJ:0.9748, QTs:0.0002, QQ, AQo:0.0009, K9s:0.0002, KJs:0.0006, KK, AKo:0.0210, ATs:0.0002, AJs:0.0024, AQs:0.0080, AKs:0.9449, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59|SB:CALL@24.88",
    "heroPos": "HJ",
    "eff": 25.64,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0001, Q9o:0.0001, TT:0.0001, JTs:0.0001, KJo:0.0001, QTs:0.0001, KQo:0.0001, K4s:0.0001, KK:0.7483, A3s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0016, AJs:0.0003, AKs:0.0024, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@28.59|BTN:CALL@9.36",
    "heroPos": "HJ",
    "eff": 9.62,
    "stacks": [
      38.46,
      28.85,
      9.62,
      25.64,
      12.82
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0050, 88:0.0015, 99:0.4931, TT:0.9401, JJ, AJo:0.0001, QQ, AQo:0.0001, K9s:0.0001, KQs:0.0001, KK, AKo:0.5931, A3s:0.0001, A9s:0.0004, ATs:0.0001, AJs:0.0011, AQs:0.0137, AKs:0.9109, AA"
      }
    ]
  }
];

export const PATTERNS = __normalizePatterns([
{
    id: "CLUB_MATCH_390_780_200_38_28_9_25_13 chase",
    label: "Club Match 390-780(200) 38-28-9-25-13 chase",
    tags: ["clubmatch", "5left"],
    questionBuilder: (hand) => ({ stacks: CLUB_MATCH_390_780_200_38_28_9_25_13_STACKS_BB }),
    spots: __attachFacingLineToState(CLUB_MATCH_390_780_200_38_28_9_25_13_STATE, CLUB_MATCH_390_780_200_38_28_9_25_13_FACING_PRESETS).map(__makeSpotFromState),
  }
]);
