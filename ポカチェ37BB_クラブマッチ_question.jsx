// ============================================================
// AUTO-GENERATED from zip: ポカチェ37BB クラブマッチ.zip
// question.zip 互換形式 / facingLine は最大3段
// Generated on 2026-03-23
// ============================================================

// ---- id 正規化（既存question.jsxと同じ） ----
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

// --------------------------------
// facingLine → 表示用文字列 / 安定ID
// --------------------------------
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

// blinds: BB=40000 / SB=20000 / ante=10000
export const POKACHE_37BB_CLUBMATCH_STACKS_BB = [
  37.5,
  37.5,
  37.5,
  37.5,
  37.5,
  37.5
];

export const POKACHE_37BB_CLUBMATCH_FACING_PRESETS = [
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
    "id": "LJ:OPEN@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
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
    "id": "HJ:OPEN@2.1",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
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
    "id": "CO:OPEN@2.1",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
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
    "id": "SB:OPEN@3.0",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
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
    "id": "LJ:OPEN@2.1|CO:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:CALL@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:CALL@2.1",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:CALL@2.1",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@4.0",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@3.0|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@3.0|BB:3BET@7.5",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.5
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|LJ:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|LJ:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@37.25|CO:CALL@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@10.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
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
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@8.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:CALL@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@37.25|BTN:CALL@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@10.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
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
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@5.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@8.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:CALL@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@37.25|SB:CALL@36.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 36.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|BB:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.1|HJ:3BET@5.5|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|BB:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:3BET@8.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|HJ:CALL@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
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
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|LJ:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|LJ:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
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
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:CALL@2.1",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@37.25|SB:CALL@36.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 36.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
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
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5|LJ:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0|LJ:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 36.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
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
    "id": "LJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@7.0|LJ:4BET@11.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@7.0|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BB:3BET@7.0|LJ:4BET@11.9",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.1|BB:3BET@7.0|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|HJ:4BET@11.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|HJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|HJ:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|HJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
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
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:CALL@2.1",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@37.25|SB:CALL@36.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 36.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@11.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
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
    "id": "HJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
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
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5|HJ:4BET@11.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
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
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5|HJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0|HJ:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0|HJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 36.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
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
    "id": "HJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@7.0|HJ:4BET@11.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@7.0|HJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BB:3BET@7.0|HJ:4BET@11.9",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.1|BB:3BET@7.0|HJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@5.5|CO:4BET@11.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
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
    "id": "CO:OPEN@2.1|BTN:3BET@5.5|CO:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0|CO:4BET@13.9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0|CO:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 36.75
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 11.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:CALL@2.1|SB:CALL@1.6",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
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
    "id": "CO:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 5.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.9
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 8.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@7.0|CO:4BET@11.9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@7.0|CO:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BB:3BET@7.0|CO:4BET@11.9",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.1|BB:3BET@7.0|CO:4BET@37.25",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@7.0|BTN:4BET@11.9",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@7.0|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 36.25
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 1.6
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|BB:3BET@7.0|BTN:4BET@11.9",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 11.9
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.1|BB:3BET@7.0|BTN:4BET@37.25",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.1
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@4.0|SB:3BET@10.0",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 4.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 10.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@4.0|SB:3BET@37.25",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 4.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.0|BB:3BET@7.5|SB:4BET@12.0",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 12.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.0|BB:3BET@7.5|SB:4BET@37.25",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 7.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 37.25
      }
    ],
    "heroPositions": [
      "BB"
    ]
  }
];

export const POKACHE_37BB_CLUBMATCH_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "open 2.1bb"
    ],
    "bands": [
      {
        "action": "open 2.1bb",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.8308, A5o:0.5069, 66:0.9999, 76s:0.0495, 77, A7o:0.0002, 88, A8o:0.9295, 99, A9o:0.9998, T8s:0.8927, T9s:0.9984, TT, QTo:0.0001, KTo:0.9837, ATo, J9s:0.998, JTs:0.9999, JJ, QJo:0.7706, KJo, AJo, Q9s:0.9999, QTs:0.9999, QJs, QQ, KQo, AQo, K4s:0.1546, K5s:0.784, K6s:0.999, K7s:0.9991, K8s:0.9999, K9s:0.9999, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "open 2.1bb"
    ],
    "bands": [
      {
        "action": "open 2.1bb",
        "min": 0.0001,
        "range": "44:0.0003, A4o:0.0045, 55:0.9997, A5o:0.997, 65s:0.1582, 66, A6o:0.0195, 76s:0.1629, 77, A7o:0.961, 86s:0.0008, 87s:0.0562, 88, A8o, 98s:0.9792, 99, A9o, T7s:0.005, T8s:0.9998, T9s:0.9999, TT, JTo:0.4517, QTo:0.7667, KTo, ATo, J8s:0.4624, J9s:0.9998, JTs, JJ, QJo, KJo, AJo, Q8s:0.9769, Q9s, QTs, QJs, QQ, KQo, AQo, K3s:0.5586, K4s:0.9992, K5s:0.9993, K6s:0.9999, K7s:0.9999, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "open 2.1bb"
    ],
    "bands": [
      {
        "action": "open 2.1bb",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0001, A3o:0.041, 44:0.6214, A4o:0.9585, 54s:0.0001, 55, A5o, 65s:0.2492, 66, A6o:0.9999, 75s:0.0001, 76s:0.533, 77, A7o, 86s:0.0008, 87s:0.9937, 88, K8o:0.0095, A8o, 96s:0.0006, 97s:0.9449, 98s:0.9996, 99, T9o:0.044, J9o:0.0001, Q9o:0.0068, K9o:0.9999, A9o, T7s:0.9593, T8s:0.9999, T9s:0.9999, TT, JTo, QTo, KTo, ATo, J7s:0.4526, J8s:0.9998, J9s, JTs, JJ, QJo, KJo, AJo, Q4s:0.0003, Q5s:0.5082, Q6s:0.9154, Q7s, Q8s:0.9998, Q9s:0.9999, QTs, QJs, QQ, KQo, AQo, K2s:0.8331, K3s:0.9994, K4s:0.9999, K5s:0.9999, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "open 2.1bb"
    ],
    "bands": [
      {
        "action": "open 2.1bb",
        "min": 0.0001,
        "range": "A2o:0.5723, 33:0.2507, A3o, 44, A4o, 54s:0.7272, 55, K5o:0.0009, A5o, 65s:0.9951, 66, K6o:0.0533, A6o, 75s:0.2726, 76s, 77, K7o:0.9596, A7o, 85s:0.0103, 86s:0.9648, 87s:0.9999, 88, 98o:0.0033, T8o:0.0198, J8o:0.0001, Q8o:0.1867, K8o, A8o, 96s:0.1963, 97s:0.9999, 98s, 99, T9o:0.9991, J9o:0.9999, Q9o, K9o, A9o, T6s:0.867, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J4s:0.0201, J5s:0.8398, J6s:0.9712, J7s:0.9999, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s:0.0017, Q3s:0.2917, Q4s:0.9999, Q5s:0.9999, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.9999, K3s:0.9997, K4s:0.9999, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "open 3bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8604, 32o:0.9458, 42o:0.9991, 52o:0.9989, 62o:0.9968, 72o:0.9976, 82o:0.9988, 92o:0.9995, T2o, J2o, Q2o:0.9998, K2o:0.9996, A2o:0.9926, 32s:0.9936, 33:0.9984, 43o:0.9997, 53o:0.9942, 63o:0.9996, 73o:0.9996, 83o:0.9993, 93o:0.9998, T3o:0.9999, J3o, Q3o, K3o, A3o:0.9999, 42s:0.9936, 43s:0.503, 44, 54o:0.901, 64o:0.9945, 74o:0.9999, 84o:0.9999, 94o:0.9997, T4o, J4o:0.9992, Q4o:0.9997, K4o:0.9787, A4o:0.9333, 52s:0.8425, 53s:0.8462, 54s:0.9859, 55, 65o:0.8843, 75o:0.9905, 85o, 95o:0.9998, T5o, J5o, Q5o:0.9989, K5o:0.9275, A5o:0.9876, 62s:0.9897, 63s:0.9931, 64s:0.8553, 65s:0.9998, 66, 76o:0.8573, 86o:0.9851, 96o, T6o, J6o, Q6o:0.9942, K6o:0.7982, A6o:0.9953, 72s:0.9999, 73s:0.9987, 74s:0.4841, 75s:0.9632, 76s:0.9846, 77, 87o:0.9252, 97o:0.9035, T7o:0.7988, J7o:0.9787, Q7o:0.9999, K7o:0.9004, A7o:0.8783, 82s:0.9998, 83s:0.9998, 84s:0.9881, 85s:0.9976, 86s:0.961, 87s:0.9999, 88, 98o:0.8695, T8o:0.9346, J8o:0.9143, Q8o:0.9172, K8o:0.9446, A8o:0.9341, 92s:0.9995, 93s:0.9999, 94s:0.9859, 95s:0.7476, 96s:0.9997, 97s:0.9996, 98s, 99, T9o:0.9976, J9o:0.996, Q9o:0.9835, K9o:0.742, A9o:0.9042, T2s:0.9879, T3s:0.7927, T4s:0.9159, T5s:0.7237, T6s:0.9988, T7s:0.9979, T8s:0.9967, T9s:0.7341, TT, JTo:0.9235, QTo:0.9825, KTo:0.9814, ATo:0.9328, J2s:0.9034, J3s:0.6829, J4s:0.9158, J5s:0.8204, J6s, J7s:0.9999, J8s:0.9999, J9s:0.9775, JTs:0.9988, JJ, QJo:0.9922, KJo:0.9683, AJo:0.961, Q2s:0.4847, Q3s:0.795, Q4s:0.9464, Q5s, Q6s, Q7s:0.9999, Q8s, Q9s, QTs:0.8722, QJs, QQ:0.9988, KQo:0.8456, AQo:0.8943, K2s:0.9981, K3s:0.9997, K4s, K5s, K6s, K7s, K8s:0.9999, K9s, KTs:0.9967, KJs:0.9721, KQs:0.8647, KK:0.5819, AKo:0.984, A2s:0.9973, A3s:0.8651, A4s, A5s:0.9767, A6s:0.8776, A7s:0.8248, A8s:0.7105, A9s:0.713, ATs:0.7161, AJs:0.6752, AQs:0.3447, AKs:0.4965, AA:0.7358"
      },
      {
        "action": "open 3bb",
        "min": 0.0001,
        "range": "22:0.1396, 52o:0.0006, Q2o:0.0002, K2o:0.0004, A2o:0.0074, 32s:0.0063, 33:0.0016, 43o:0.0001, 53o:0.0057, A3o:0.0001, 42s:0.0063, 43s:0.497, 54o:0.099, 64o:0.0055, J4o:0.0008, Q4o:0.0003, K4o:0.0213, A4o:0.0667, 52s:0.1575, 53s:0.1538, 54s:0.0141, 65o:0.1157, 75o:0.0095, 95o:0.0001, Q5o:0.0011, K5o:0.0725, A5o:0.0124, 62s:0.0101, 63s:0.0069, 64s:0.1447, 65s:0.0002, 76o:0.1427, 86o:0.0149, Q6o:0.0058, K6o:0.2018, A6o:0.0047, 72s:0.0001, 73s:0.0013, 74s:0.5159, 75s:0.0367, 76s:0.0154, 87o:0.0748, 97o:0.0965, T7o:0.2012, J7o:0.0213, Q7o:0.0001, K7o:0.0996, A7o:0.1217, 82s:0.0002, 83s:0.0001, 84s:0.0119, 85s:0.0024, 86s:0.039, 87s:0.0001, 98o:0.1305, T8o:0.0654, J8o:0.0857, Q8o:0.0828, K8o:0.0554, A8o:0.0659, 92s:0.0005, 93s:0.0001, 94s:0.0141, 95s:0.2524, 96s:0.0003, 97s:0.0004, T9o:0.0024, J9o:0.004, Q9o:0.0165, K9o:0.258, A9o:0.0958, T2s:0.0121, T3s:0.2073, T4s:0.0841, T5s:0.2763, T6s:0.0012, T7s:0.0021, T8s:0.0033, T9s:0.2659, JTo:0.0765, QTo:0.0175, KTo:0.0186, ATo:0.0672, J2s:0.0966, J3s:0.3171, J4s:0.0842, J5s:0.1796, J7s:0.0001, J8s:0.0001, J9s:0.0225, JTs:0.0012, QJo:0.0078, KJo:0.0317, AJo:0.039, Q2s:0.5153, Q3s:0.205, Q4s:0.0536, Q7s:0.0001, QTs:0.1278, QQ:0.0012, KQo:0.1544, AQo:0.1057, K2s:0.0019, K3s:0.0003, K8s:0.0001, KTs:0.0033, KJs:0.0279, KQs:0.1353, KK:0.4181, AKo:0.016, A2s:0.0027, A3s:0.1349, A5s:0.0233, A6s:0.1224, A7s:0.1752, A8s:0.2895, A9s:0.287, ATs:0.2839, AJs:0.3248, AQs:0.6553, AKs:0.5035, AA:0.2642"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "33:0.0018, 44:0.205, 54s:0.2408, 55:0.0288, 64s:0.0001, 65s:0.2019, 66:0.8658, 76s:0.3639, 77:0.9973, 87s:0.0235, 88, A8o:0.0058, 99, A9o:0.7309, T8s:0.0001, T9s:0.4814, TT, QTo:0.0251, KTo:0.5023, ATo:0.7804, J8s:0.0019, J9s:0.3625, JTs:0.9861, JJ:0.023, QJo:0.6749, KJo:0.083, AJo:0.6391, Q7s:0.0001, Q8s:0.0598, Q9s:0.9976, QTs:0.9909, QJs:0.0268, QQ:0.5895, KQo:0.1134, AQo:0.0004, K4s:0.0001, K6s:0.0057, K7s:0.021, K8s:0.6654, K9s:0.9987, KTs:0.6009, KJs:0.0076, KQs:0.0137, A3s:0.0005, A4s:0.0011, A5s:0.0004, A6s:0.0007, A7s:0.0029, A8s:0.0733, A9s:0.9806, ATs:0.9999, AJs:0.9996, AQs:0.8779"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.1756, 33:0.0003, K3o:0.0006, A3o:0.0986, 44:0.0494, K4o:0.0031, A4o:0.3018, 54s:0.3959, 55:0.0166, K5o:0.0256, A5o:0.0843, 65s:0.4052, K6o:0.0008, A6o:0.9348, 76s:0.0256, Q7o:0.0001, K7o:0.0006, A7o:0.5982, 87s:0.0608, A8o:0.8949, K9o:0.003, A9o:0.2691, T9s:0.0612, KTo:0.4976, ATo:0.1732, J9s:0.2083, JJ:0.3712, QJo:0.3071, KJo:0.0012, AJo:0.297, Q2s:0.0008, Q3s:0.0024, Q4s:0.0249, Q5s:0.0631, Q9s:0.0021, QQ:0.0051, K2s:0.603, K3s:0.7749, K4s:0.2026, K5s:0.3086, K6s:0.0023, K7s:0.3323, K8s:0.0124, KK, AKo:0.2837, AQs:0.0126, AKs:0.9996, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.979, A2o:0.8162, 33:0.9907, A3o:0.9014, 44:0.7454, A4o:0.6982, 55:0.9546, A5o:0.9157, 65s:0.0001, 66:0.1342, A6o:0.0622, 77:0.0027, A7o:0.3864, A8o:0.0561, ATo:0.0464, JTs:0.0139, JJ:0.6058, QJo:0.009, KJo:0.9157, AJo:0.0639, Q8s:0.0008, QTs:0.0091, QJs:0.9731, QQ:0.4054, KQo:0.8866, AQo:0.9996, K2s:0.3252, K3s:0.2161, K4s:0.7911, K5s:0.691, K6s:0.9895, K7s:0.6459, K8s:0.3212, K9s:0.0012, KTs:0.3991, KJs:0.9924, KQs:0.9863, AKo:0.7163, A2s, A3s:0.9995, A4s:0.9989, A5s:0.9996, A6s:0.9992, A7s:0.9971, A8s:0.9267, A9s:0.0194, ATs:0.0001, AJs:0.0004, AQs:0.1095, AKs:0.0004"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.8256, J2o:0.0006, Q2o:0.9519, K2o:0.6364, A2o:0.0109, 32s, 33:0.9923, 43o:0.9249, 53o:0.6477, J3o:0.0067, Q3o:0.9929, K3o:0.385, A3o:0.0305, 42s:0.9978, 43s:0.9997, 44, 54o:0.861, 64o:0.957, 74o:0.088, J4o:0.0142, Q4o:0.9798, K4o:0.1603, A4o:0.1704, 52s:0.9986, 53s:0.9935, 54s:0.7972, 55, 65o, 75o:0.9517, 85o:0.9163, J5o:0.8311, Q5o:0.9949, K5o:0.509, A5o:0.6041, 62s:0.997, 63s:0.9991, 64s:0.9998, 65s, 66, 76o, 86o:0.9527, 96o:0.7902, T6o:0.997, J6o:0.9732, Q6o:0.992, K6o:0.9749, A6o:0.7056, 72s:0.8038, 73s:0.9966, 74s, 75s:0.9992, 76s:0.9981, 77, 87o, 97o:0.9988, T7o:0.847, J7o:0.9947, Q7o:0.9888, K7o:0.8382, A7o:0.9228, 82s:0.8327, 83s:0.9778, 84s:0.9999, 85s, 86s, 87s, 88, 98o, T8o:0.9879, J8o:0.779, Q8o:0.8837, K8o:0.9646, A8o:0.9988, 92s:0.9196, 93s:0.843, 94s:0.9348, 95s:0.9997, 96s, 97s, 98s, 99, T9o:0.8544, J9o:0.9603, Q9o:0.9414, K9o:0.9948, A9o, T2s, T3s:0.9906, T4s, T5s:0.9972, T6s, T7s, T8s:0.9366, T9s:0.9627, TT, JTo, QTo:0.9905, KTo:0.9966, ATo, J2s:0.9986, J3s:0.9894, J4s:0.9999, J5s:0.9997, J6s:0.9998, J7s:0.9975, J8s:0.8747, J9s:0.9998, JTs:0.9998, JJ:0.9999, QJo, KJo:0.9992, AJo, Q2s:0.9898, Q3s:0.8525, Q4s:0.982, Q5s:0.9995, Q6s:0.9725, Q7s:0.9999, Q8s:0.9985, Q9s, QTs:0.9974, QJs:0.999, QQ:0.968, KQo, AQo, K2s:0.2364, K3s:0.7264, K4s:0.9148, K5s:0.9635, K6s:0.8931, K7s, K8s, K9s, KTs:0.998, KJs:0.9999, KQs, A2s:0.4303, A3s:0.2417, A4s:0.9648, A5s:0.978, A6s:0.9996, A7s:0.9997, A8s, A9s, ATs, AJs, AQs:0.9954"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0009, 52o:0.0155, Q2o:0.0435, K2o:0.019, A2o:0.0092, 43o:0.069, 53o:0.3513, 63o:0.0453, 83o:0.0001, 93o:0.0001, J3o:0.0002, Q3o:0.0071, K3o:0.0099, A3o:0.0342, 42s:0.002, 43s:0.0002, 54o:0.139, 64o:0.0429, 74o:0.011, T4o:0.0006, J4o:0.0283, Q4o:0.0127, K4o:0.3902, A4o:0.092, 52s:0.0013, 53s:0.0065, 54s:0.2028, 75o:0.0483, 85o:0.083, 95o:0.0006, T5o:0.0061, J5o:0.158, Q5o:0.0051, K5o:0.0718, A5o:0.3356, 62s:0.0027, 63s:0.0009, 64s:0.0002, 86o:0.0473, 96o:0.2096, T6o:0.0027, J6o:0.025, Q6o:0.008, K6o:0.0033, A6o:0.2942, 72s:0.1954, 73s:0.0034, 75s:0.0008, 76s:0.0016, 97o:0.0012, T7o:0.153, J7o:0.0052, Q7o:0.0112, K7o:0.1523, A7o:0.0772, 82s:0.1673, 83s:0.0222, T8o:0.0121, J8o:0.2209, Q8o:0.1163, K8o:0.0354, A8o:0.0012, 92s:0.0801, 93s:0.1569, 94s:0.0652, 95s:0.0001, T9o:0.1456, J9o:0.0397, Q9o:0.0586, K9o:0.0052, T3s:0.0081, T5s:0.0028, T8s:0.0634, T9s:0.0373, QTo:0.0095, KTo:0.0003, J3s:0.0025, J7s:0.0025, J8s:0.1253, JJ:0.0001, Q4s:0.0004, Q5s:0.0001, Q6s:0.0008, Q8s:0.0002, QTs:0.0002, QQ:0.0025, K2s:0.0018, K4s:0.0028, K5s:0.0165, K6s:0.0054, KK:0.3318, AKo:0.199, A2s:0.0072, A3s:0.0063, A4s:0.012, A5s:0.0216, AQs:0.0046, AKs:0.9978, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1735, K2o:0.3446, A2o:0.9799, 33:0.0077, K3o:0.6051, A3o:0.9353, Q4o:0.0072, K4o:0.4496, A4o:0.7376, K5o:0.4191, A5o:0.0603, K6o:0.0217, A6o:0.0002, 76s:0.0003, K7o:0.0095, 92s:0.0001, 95s:0.0001, T3s:0.0012, KTo:0.0031, J2s:0.0013, J3s:0.0081, J5s:0.0002, J6s:0.0002, J9s:0.0002, JTs:0.0002, KJo:0.0008, Q2s:0.0102, Q3s:0.1474, Q4s:0.0175, Q5s:0.0004, Q6s:0.0266, Q7s:0.0001, Q8s:0.0013, QTs:0.0024, QJs:0.001, QQ:0.0296, K2s:0.7618, K3s:0.2736, K4s:0.0824, K5s:0.02, K6s:0.1016, KTs:0.002, KJs:0.0001, KK:0.6682, AKo:0.801, A2s:0.5624, A3s:0.752, A4s:0.0232, A5s:0.0004, A6s:0.0003, A7s:0.0003, AKs:0.0022"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "44:0.0007, 54s:0.0026, 55:0.2036, 65s:0.1059, 66:0.1771, 75s:0.0005, 77:0.4338, 88:0.9697, 99, TT:0.9997, ATo:0.5676, JTs:0.6793, JJ:0.6623, KJo:0.0001, AJo:0.3858, QTs:0.9813, QJs:0.9997, QQ:0.9356, KQo:0.8476, AQo:0.7752, K8s:0.0007, K9s:0.6211, KTs:0.9999, KJs:0.8424, KQs:0.6344, KK:0.1411, A2s:0.0011, A3s:0.0121, A4s:0.0291, A5s:0.3153, A7s:0.3412, A8s:0.5123, A9s:0.9988, ATs:0.9942, AJs, AQs:0.888"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0024, A3o:0.1588, A4o:0.0834, A5o:0.3225, 66:0.0133, A6o:0.0436, 77:0.0631, A7o:0.0401, 88:0.0302, A8o:0.0245, A9o:0.2229, TT:0.0003, ATo:0.349, JJ:0.1564, KJo:0.0158, AJo:0.6142, QQ:0.0644, KQo:0.0315, AQo:0.2248, K2s:0.0001, K9s:0.0001, AKo:0.0075, A2s:0.2949, A3s:0.3785, A4s:0.2849, A5s:0.0942, A6s:0.5282, A7s:0.2588, A8s:0.1081, AQs:0.112, AKs:0.5434, AA:0.8844"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.1189, K3o:0.0503, A3o:0.2336, K4o:0.0184, A4o:0.2447, K5o:0.0534, A5o:0.25, K6o:0.0036, A6o:0.0627, K7o:0.0145, A7o:0.037, K8o:0.0054, A8o:0.0788, K9o:0.0106, A9o:0.0072, KTo:0.0496, ATo:0.0694, JJ:0.157, KJo:0.2873, KQo:0.1209, K2s:0.6309, K3s:0.3876, K4s:0.1799, K5s:0.1119, K6s:0.124, K7s:0.0003, K8s:0.0929, K9s:0.0247, KK:0.8588, AKo:0.1978, A2s:0.0962, A3s:0.0151, A4s:0.0018, A5s:0.0002, A6s:0.0191, A7s:0.0062, A8s:0.0001, AKs:0.4203, AA:0.1156"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0076, 44:0.0123, 55:0.1472, 66:0.0831, 77:0.0317, JJ:0.0242, K7s:0.0001, KJs:0.1576, KQs:0.3656, AKo:0.7946, A2s:0.6069, A3s:0.5943, A4s:0.6841, A5s:0.5903, A6s:0.4525, A7s:0.3937, A8s:0.3794, A9s:0.0012, ATs:0.0057, AKs:0.0363"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0001, 33:0.0045, 44:0.7455, 54s:0.0006, 55:0.9959, 64s:0.0001, 65s:0.2379, 66:0.9919, 76s:0.2147, 77, 86s:0.0006, 87s:0.1596, 88, 97s:0.001, 98s:0.0064, 99, A9o:0.0624, T7s:0.0003, T8s:0.0071, T9s:0.9995, TT, KTo:0.0044, ATo:0.9638, J8s:0.0005, J9s:0.1619, JTs:0.9999, JJ:0.6045, QJo:0.0531, KJo:0.5326, AJo:0.9446, Q8s:0.035, Q9s:0.9955, QTs:0.9999, QJs:0.9946, QQ:0.9993, KQo:0.5565, AQo:0.6284, K5s:0.009, K6s:0.0125, K7s:0.0803, K8s:0.777, K9s:0.9986, KTs:0.9993, KJs:0.9567, KQs:0.1399, A2s:0.0004, A4s:0.0664, A5s:0.0172, A6s:0.0085, A7s:0.1754, A8s:0.7882, A9s, ATs:0.9999, AJs, AQs"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0169, A2o:0.4033, 33:0.0632, A3o:0.8156, 44:0.0325, A4o:0.2789, K5o:0.0001, A5o:0.7563, 66:0.0013, K6o:0.0001, A6o:0.2001, A7o:0.2468, A8o:0.183, 96s:0.0001, A9o:0.504, T9s:0.0003, KTo:0.2428, ATo:0.0362, J9s:0.0821, JJ:0.3955, QJo:0.106, KJo:0.4641, AJo:0.0554, Q3s:0.0001, Q6s:0.0012, Q9s:0.0001, QQ:0.0007, KQo:0.0002, AQo:0.3716, K2s:0.0324, K3s:0.0898, K4s:0.0442, K5s:0.6048, K6s:0.4834, K7s:0.2661, K8s:0.1265, K9s:0.0012, KTs:0.0002, KK, AKo:0.1898, A2s:0.0006, A3s:0.0148, A5s:0.0203, A6s:0.2222, A7s:0.1348, AKs:0.9951, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0051, A2o:0.0169, 33:0.2908, A3o:0.0726, 44:0.2136, A4o:0.3132, 55:0.0041, A5o:0.2416, 66:0.0067, A6o:0.0002, A7o:0.0004, KTo:0.0001, KJo:0.0032, QJs:0.0054, KQo:0.4433, K3s:0.0784, K4s:0.025, K5s:0.2252, K6s:0.0222, K7s:0.1206, K8s:0.0019, KTs:0.0005, KJs:0.0433, KQs:0.8601, AKo:0.8102, A2s:0.999, A3s:0.9852, A4s:0.9336, A5s:0.9624, A6s:0.7693, A7s:0.6897, A8s:0.2117, ATs:0.0001, AKs:0.0049"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9997, Q2o:0.0555, K2o:0.1018, A2o:0.01, 32s:0.9837, 33, 43o:0.0064, 53o:0.8846, Q3o:0.8316, K3o:0.2745, A3o:0.0131, 42s:0.9963, 43s:0.9903, 44, 54o:0.9819, 64o:0.8633, 74o:0.0003, Q4o:0.0677, K4o:0.7401, A4o:0.0349, 52s:0.877, 53s:0.9935, 54s, 55, 65o:0.9909, 75o:0.9913, 85o:0.026, Q5o:0.9323, K5o:0.6947, A5o:0.3683, 62s:0.9906, 63s:0.9992, 64s:0.9477, 65s, 66, 76o:0.994, 86o:0.9912, 96o:0.8942, T6o:0.0032, J6o:0.0001, Q6o:0.9986, K6o:0.9294, A6o:0.655, 72s:0.9997, 73s:0.9965, 74s, 75s:0.9896, 76s:0.9557, 77, 87o:0.9963, 97o:0.9997, T7o:0.9081, J7o:0.9108, Q7o:0.9982, K7o:0.9799, A7o:0.9997, 82s:0.9746, 83s:0.9998, 84s, 85s:0.9999, 86s:0.9877, 87s:0.9993, 88, 98o:0.9985, T8o, J8o:0.9303, Q8o:0.9999, K8o:0.9947, A8o, 92s:0.9998, 93s, 94s:0.9228, 95s:0.9999, 96s, 97s, 98s, 99, T9o:0.9984, J9o:0.918, Q9o:0.9835, K9o:0.9628, A9o, T2s:0.9959, T3s:0.8779, T4s:0.9991, T5s:0.9918, T6s:0.9905, T7s:0.9449, T8s:0.9999, T9s:0.9992, TT, JTo:0.9569, QTo:0.9674, KTo:0.9993, ATo, J2s, J3s:0.9999, J4s, J5s:0.998, J6s:0.9997, J7s:0.9995, J8s:0.8694, J9s:0.9691, JTs, JJ, QJo:0.9849, KJo, AJo, Q2s, Q3s, Q4s:0.9995, Q5s:0.9999, Q6s:0.9999, Q7s, Q8s:0.9999, Q9s, QTs, QJs, QQ:0.9999, KQo, AQo, K2s:0.4967, K3s:0.0627, K4s:0.4111, K5s:0.1366, K6s:0.6874, K7s, K8s:0.9999, K9s:0.9998, KTs, KJs:0.9999, KQs, A2s:0.0122, A3s:0.104, A4s:0.9527, A5s:0.9226, A6s, A7s:0.9961, A8s, A9s, ATs, AJs, AQs"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "32o:0.0001, 52o:0.0029, J2o:0.0001, K2o:0.0204, A2o:0.0098, 32s:0.0162, 43o:0.0132, 53o:0.1103, 63o:0.0116, Q3o:0.0516, K3o:0.0122, A3o:0.0076, 42s:0.0036, 43s:0.0097, 54o:0.0181, 64o:0.1361, 74o:0.0001, Q4o:0.0405, K4o:0.0715, A4o:0.0421, 52s:0.1229, 53s:0.0065, 65o:0.009, 75o:0.0084, 85o:0.1473, Q5o:0.0639, K5o:0.193, A5o:0.4701, 62s:0.0093, 63s:0.0008, 64s:0.0523, 76o:0.006, 86o:0.0087, 96o:0.1057, T6o:0.0164, J6o:0.0005, Q6o:0.0007, K6o:0.0678, A6o:0.3297, 73s:0.0035, 75s:0.0104, 76s:0.0443, 87o:0.0037, 97o:0.0002, T7o:0.0918, J7o:0.0889, Q7o:0.0017, K7o:0.0201, A7o:0.0003, 82s:0.0252, 86s:0.0123, 87s:0.0007, 98o:0.0014, J8o:0.0697, K8o:0.0053, 94s:0.077, T9o:0.0016, J9o:0.082, Q9o:0.0165, K9o:0.0372, T2s:0.0034, T3s:0.122, T4s:0.0009, T5s:0.008, T6s:0.0092, T7s:0.0551, T8s:0.0001, T9s:0.0007, JTo:0.0431, QTo:0.0326, KTo:0.0003, J5s:0.002, J6s:0.0002, J7s:0.0004, J8s:0.1306, J9s:0.0308, QJo:0.0151, Q4s:0.0005, Q5s:0.0001, Q6s:0.0001, QQ:0.0001, K2s:0.0088, K4s:0.0021, KK:0.0256, AKo:0.0116, A2s:0.0179, A3s:0.0688, A4s:0.0025, A5s:0.0011, A7s:0.0037, AKs:0.9858, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.8771, A2o:0.9802, K3o:0.7132, A3o:0.9793, K4o:0.1884, A4o:0.9229, 52s:0.0001, K5o:0.1123, A5o:0.1616, K6o:0.0027, A6o:0.0153, T6s:0.0003, KTo:0.0004, J6s:0.0001, J9s:0.0001, Q8s:0.0001, K2s:0.4945, K3s:0.9372, K4s:0.5868, K5s:0.8634, K6s:0.3126, K8s:0.0001, K9s:0.0002, KJs:0.0001, KK:0.9744, AKo:0.9884, A2s:0.9698, A3s:0.8272, A4s:0.0448, A5s:0.0764, A7s:0.0002, AKs:0.0142"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "44:0.0001, 54s:0.0182, 55:0.0225, 65s:0.0502, 66:0.3395, 76s:0.0751, 77:0.1548, 88:0.8532, 99:0.9619, TT:0.9999, ATo:0.2345, JTs:0.191, JJ:0.7904, AJo:0.4842, QTs:0.4221, QJs:0.9891, QQ:0.9676, KQo:0.6486, AQo:0.7715, K6s:0.0001, K9s:0.0002, KTs:0.9999, KJs:0.9888, KQs, KK:0.118, A2s:0.0001, A3s:0.0047, A4s:0.0727, A5s:0.2843, A6s:0.0002, A7s:0.0115, A8s:0.4668, A9s:0.797, ATs:0.9997, AJs:0.9999, AQs:0.9743"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0043, A3o:0.0266, A4o:0.0938, A5o:0.1236, 66:0.0023, A6o:0.0455, 77:0.0132, A7o:0.0114, 88:0.0894, A8o:0.0012, 99:0.0375, A9o:0.0738, ATo:0.1761, JJ:0.1945, AJo:0.4449, QQ:0.0322, KQo:0.1019, AQo:0.2278, KJs:0.0045, KK:0.0002, AKo:0.1767, A2s:0.2719, A3s:0.2841, A4s:0.375, A5s:0.3362, A6s:0.543, A7s:0.4365, A8s:0.2661, A9s:0.2018, AJs:0.0001, AQs:0.0257, AKs:0.3181, AA:0.6092"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0086, A2o:0.0114, K3o:0.1177, A3o:0.2679, K4o:0.053, A4o:0.0885, K5o:0.036, A5o:0.1933, K6o:0.1036, A6o:0.1181, K7o:0.0073, A7o:0.1709, K8o:0.0002, A8o:0.0604, A9o:0.0438, KTo:0.002, ATo:0.0405, JJ:0.0151, KJo:0.07, AJo:0.0706, QQ:0.0002, KQo:0.0814, AQo:0.0007, K2s:0.2748, K3s:0.3161, K4s:0.5498, K5s:0.0736, K6s:0.3422, K7s:0.031, K8s:0.0062, K9s:0.0015, KJs:0.0004, KK:0.8818, AKo:0.2737, A2s:0.4113, A3s:0.3254, A4s:0.1573, A5s:0.0001, A6s:0.2229, A7s:0.2266, A8s:0.1342, A9s:0.0004, ATs:0.0001, AKs:0.2575, AA:0.3908"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0042, 44:0.0702, 55:0.0145, 66:0.1386, 77:0.0601, 88:0.0037, K9s:0.0001, AKo:0.5496, A2s:0.3054, A3s:0.385, A4s:0.3942, A5s:0.3794, A6s:0.2331, A7s:0.3145, A8s:0.1305, ATs:0.0002, AKs:0.4243"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "44:0.0003, 54s:0.0333, 55:0.1601, 65s:0.2554, 66:0.5455, 77:0.6844, 88:0.9999, 99:0.9993, T9s:0.5005, TT, ATo:0.4569, J9s:0.0001, JTs:0.9343, JJ:0.8159, AJo:0.7817, Q9s:0.0102, QTs:0.9956, QJs:0.9999, QQ:0.9257, KQo:0.8911, AQo:0.7329, K3s:0.0003, K5s:0.0004, K9s:0.5717, KTs:0.999, KJs:0.9999, KQs, AKo:0.6077, A2s:0.0014, A3s:0.0415, A4s:0.3688, A5s:0.5814, A6s:0.0001, A7s:0.084, A8s:0.8014, A9s:0.999, ATs:0.9998, AJs, AQs:0.9999, AKs:0.2987"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A3o:0.0029, A4o:0.0174, 55:0.0001, A5o:0.2101, 66:0.0968, A6o:0.0015, 77:0.0938, A7o:0.0091, A8o:0.0259, 99:0.0004, A9o:0.0928, ATo:0.3303, JJ:0.1831, KJo:0.0299, AJo:0.2075, QQ:0.0732, KQo:0.0855, AQo:0.2671, K6s:0.0001, K9s:0.0012, KK:0.0001, AKo:0.0835, A2s:0.3963, A3s:0.4744, A4s:0.5288, A5s:0.4048, A6s:0.8499, A7s:0.8089, A8s:0.1628, A9s:0.0005, AQs:0.0001, AKs:0.542, AA:0.7571"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0581, A2o:0.0463, K3o:0.0293, A3o:0.1878, K4o:0.1563, A4o:0.0993, K5o:0.0026, A5o:0.2413, K6o:0.0446, A6o:0.0038, K7o:0.071, A7o:0.0831, K8o:0.0221, A8o:0.0571, K9o:0.003, A9o:0.1553, KTo:0.0583, ATo:0.0653, JJ:0.001, KJo:0.0991, AJo:0.0109, QQ:0.0011, KQo:0.0228, K2s:0.2941, K3s:0.0546, K4s:0.5559, K5s:0.0144, K6s:0.4623, K7s:0.1007, K8s:0.0029, K9s:0.003, KTs:0.0001, KK:0.9999, AKo:0.3077, A2s:0.5834, A3s:0.4821, A4s:0.1017, A5s:0.0128, A6s:0.148, A7s:0.1022, A8s:0.0351, A9s:0.0001, ATs:0.0001, AKs:0.1585, AA:0.2429"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0004, 55:0.0004, 77:0.0001, 99:0.0003, K6s:0.0002, KJs:0.0001, AKo:0.0011, A2s:0.0009, A3s:0.0007, A4s:0.0006, A5s:0.0006, A6s:0.0006, A7s:0.0006, A8s:0.0002, A9s:0.0002, ATs:0.0001, AKs:0.0008"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0003, 33:0.5229, 44:0.4594, 54s:0.1658, 55:0.9994, 65s:0.9181, 66:0.9814, 76s:0.1425, 77, 87s:0.2072, 88, 96s:0.0003, 98s:0.2108, 99, T9s:0.9916, TT, ATo:0.9064, J9s:0.0321, JTs:0.9982, JJ:0.998, KJo:0.3747, AJo, Q9s:0.5393, QTs, QJs:0.9999, QQ, KQo:0.9653, AQo:0.736, K5s:0.0016, K6s:0.0235, K7s:0.0298, K8s:0.1419, K9s:0.9848, KTs:0.9998, KJs, KQs:0.9896, A2s:0.0003, A3s:0.0029, A4s:0.0001, A5s:0.1612, A6s:0.0037, A7s:0.0396, A8s:0.9846, A9s:0.9999, ATs, AJs, AQs"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0342, 33:0.0048, A3o:0.4163, 44:0.0129, A4o:0.5388, 53s:0.0002, A5o:0.7284, 66:0.0139, A6o:0.3546, 76s:0.106, A7o:0.1782, A8o:0.0787, 98s:0.0002, A9o:0.2128, KTo:0.0785, ATo:0.0936, KJo:0.1982, KQo:0.0347, AQo:0.264, K2s:0.006, K3s:0.0047, K4s:0.3305, K5s:0.1322, K6s:0.9264, K7s:0.1259, K8s:0.2176, K9s:0.0115, KK:0.9906, AKo:0.0126, A2s:0.227, A3s:0.0062, A4s:0.0065, A5s:0.0025, A6s:0.877, A7s:0.1913, A8s:0.0092, AKs:0.9484, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, 33:0.0272, A3o:0.0002, 44:0.5213, A4o:0.0007, 55:0.0006, A5o:0.0001, 66:0.0046, JJ:0.002, K3s:0.0001, K5s:0.0001, K6s:0.0002, K9s:0.0001, KTs:0.0001, KQs:0.0104, KK:0.0094, AKo:0.9874, A2s:0.7726, A3s:0.9908, A4s:0.9933, A5s:0.8361, A6s:0.1192, A7s:0.7691, A8s:0.0061, A9s:0.0001, AKs:0.0516"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22, K2o:0.0141, A2o:0.0196, 32s:0.9779, 33, 43o:0.0001, 53o:0.8729, Q3o:0.0002, K3o:0.6679, A3o:0.078, 42s:0.9998, 43s:0.9973, 44, 54o:0.9917, 64o:0.9552, K4o:0.9046, A4o:0.5262, 52s:0.9995, 53s:0.9815, 54s:0.9585, 55, 65o:0.9999, 75o:0.9948, K5o:0.8107, A5o:0.6352, 62s, 63s:0.9879, 64s, 65s:0.9985, 66, 76o:0.9706, 86o:0.9926, 96o:0.9664, Q6o:0.9587, K6o:0.9992, A6o:0.6611, 72s:0.9952, 73s:0.9999, 74s, 75s:0.9998, 76s:0.8497, 77, 87o:0.9765, 97o:0.9639, T7o:0.8856, J7o:0.0003, Q7o:0.9828, K7o:0.9126, A7o:0.9308, 82s:0.9999, 83s:0.9997, 84s, 85s, 86s, 87s:0.9993, 88, 98o, T8o, J8o:0.8747, Q8o, K8o:0.9992, A8o:0.9996, 92s:0.9999, 93s:0.9999, 94s:0.9999, 95s, 96s:0.9823, 97s:0.9997, 98s, 99, T9o:0.9992, J9o:0.9616, Q9o:0.9843, K9o:0.951, A9o, T2s:0.9987, T3s, T4s, T5s:0.989, T6s, T7s:0.9988, T8s, T9s:0.9884, TT, JTo:0.9787, QTo:0.9511, KTo:0.9026, ATo, J2s, J3s:0.9998, J4s:0.9195, J5s:0.9478, J6s:0.9999, J7s, J8s:0.9216, J9s:0.9724, JTs, JJ, QJo:0.9827, KJo, AJo, Q2s:0.9996, Q3s, Q4s, Q5s:0.9989, Q6s, Q7s:0.9635, Q8s, Q9s, QTs, QJs, QQ:0.9999, KQo, AQo, K2s:0.9941, K3s:0.986, K4s:0.9917, K5s:0.9979, K6s:0.9995, K7s:0.9997, K8s, K9s, KTs, KJs, KQs, KK:0.7584, AKo:0.0025, A2s:0.4608, A3s:0.6261, A4s:0.767, A5s:0.966, A6s:0.9244, A7s:0.9854, A8s, A9s, ATs, AJs, AQs"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0461, 32s:0.022, 53o:0.1153, K3o:0.0994, A3o:0.3685, 43s:0.0027, 54o:0.0078, 64o:0.044, Q4o:0.0001, K4o:0.0815, A4o:0.1141, 52s:0.0004, 53s:0.0185, 54s:0.0415, 75o:0.0046, K5o:0.1789, A5o:0.2299, 63s:0.012, 65s:0.0015, 76o:0.0294, 86o:0.0071, 96o:0.016, Q6o:0.0357, K6o:0.0008, A6o:0.3322, 72s:0.0001, 75s:0.0001, 76s:0.1502, 87o:0.0235, 97o:0.0361, T7o:0.0494, J7o:0.0004, Q7o:0.0003, K7o:0.0871, A7o:0.0688, 87s:0.0007, J8o:0.1252, K8o:0.0008, A8o:0.0001, 94s:0.0001, 96s:0.0177, 97s:0.0003, T9o:0.0008, J9o:0.0384, Q9o:0.0157, K9o:0.049, T2s:0.0008, T5s:0.0108, T7s:0.0012, T9s:0.0116, JTo:0.0213, QTo:0.0489, KTo:0.0974, J3s:0.0002, J4s:0.0803, J5s:0.0522, J8s:0.0784, J9s:0.0276, QJo:0.0173, Q2s:0.0004, Q5s:0.0011, Q7s:0.0365, QQ:0.0001, K2s:0.0001, K3s:0.0001, K5s:0.0005, K7s:0.0002, KK:0.0988, AKo:0.0087, A2s:0.0926, A3s:0.0808, A4s:0.1676, A5s:0.0319, A6s:0.0753, A7s:0.0141, AKs:0.9096, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.9343, A3o:0.5534, K4o:0.0002, A4o:0.3597, A5o:0.1349, A6o:0.0067, K7o:0.0002, A7o:0.0004, A8o:0.0003, K2s:0.0058, K3s:0.0139, K4s:0.0083, K5s:0.0017, K6s:0.0004, K7s:0.0001, KK:0.1428, AKo:0.9889, A2s:0.4466, A3s:0.2931, A4s:0.0654, A5s:0.002, A6s:0.0003, A7s:0.0005, AKs:0.0904"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "54s:0.0096, 55:0.0005, 65s:0.1449, 66:0.2982, 77:0.0143, 88:0.5026, 99:0.9906, T9s:0.0012, TT:0.9992, JTs:0.001, JJ:0.9185, AJo:0.5993, Q9s:0.0001, QJs:0.6075, QQ:0.9994, KQo:0.4722, AQo:0.7796, K3s:0.0003, KTs:0.9567, KJs:0.9971, KQs, KK:0.8395, AKo:0.0473, A3s:0.0461, A4s:0.2996, A5s:0.6817, A6s:0.0002, A7s:0.061, A8s:0.1136, A9s:0.9695, ATs:0.9984, AJs:0.9988, AQs, AKs:0.0184"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0003, A4o:0.0009, A5o:0.0049, 66:0.0014, A6o:0.0003, 77:0.0005, A7o:0.0019, 88:0.0257, A8o:0.0004, 96s:0.0001, 99:0.0022, TT:0.0001, ATo:0.0088, JJ:0.0815, AJo:0.3187, QQ:0.0005, KQo:0.0439, AQo:0.2172, K3s:0.0023, K6s:0.0058, K8s:0.0001, KTs:0.0399, KJs:0.0006, KK:0.0999, AKo:0.0151, A2s:0.2164, A3s:0.4611, A4s:0.5482, A5s:0.2742, A6s:0.5382, A7s:0.2425, A8s:0.3197, A9s:0.021, ATs:0.0006, AJs:0.0011, AKs:0.1323, AA:0.5742"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.2032, A3o:0.1048, K4o:0.0071, A4o:0.1247, K5o:0.0004, A5o:0.0333, K6o:0.0016, A6o:0.0028, K7o:0.0052, A7o:0.0024, K8o:0.0001, A8o:0.0054, A9o:0.0131, KTo:0.0042, ATo:0.0121, AJo:0.007, KQo:0.0057, AQo:0.0032, K2s:0.004, K3s:0.0099, K5s:0.0055, K6s:0.0257, K7s:0.0019, K8s:0.0002, K9s:0.0041, KTs:0.0002, KK:0.0604, AKo:0.0129, A2s:0.3001, A3s:0.341, A4s:0.1365, A5s:0.0386, A6s:0.097, A7s:0.0675, A8s:0.0462, A9s:0.0025, ATs:0.0008, AKs:0.201, AA:0.4258"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.0003, AKo:0.9247, AKs:0.6483"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "44:0.0001, 54s:0.1185, 55:0.0815, 65s:0.1487, 66:0.2157, 76s:0.1404, 77:0.5633, 88:0.9825, 99:0.9914, T9s:0.1885, TT:0.9997, JTs:0.8862, JJ:0.9197, AJo:0.8355, QTs:0.7304, QJs:0.8999, QQ:0.9847, KQo:0.6678, AQo:0.7238, K5s:0.0001, K9s:0.0004, KTs:0.9979, KJs:0.9999, KQs:0.9989, KK:0.0898, AKo:0.5956, A3s:0.0888, A4s:0.1327, A5s:0.6852, A6s:0.0004, A7s:0.0953, A8s:0.6164, A9s:0.9704, ATs:0.9996, AJs:0.9999, AQs:0.9999, AKs:0.3188"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A3o:0.0004, A4o:0.0008, A5o:0.006, 66:0.0051, A6o:0.0001, 77:0.1189, A7o:0.0015, 88:0.0091, A8o:0.0001, 99:0.0081, A9o:0.0009, TT:0.0002, KTo:0.0001, ATo:0.1462, JJ:0.0799, AJo:0.1295, QQ:0.0004, KQo:0.1797, AQo:0.2637, K3s:0.0001, K4s:0.0004, K5s:0.0001, K6s:0.1168, K7s:0.0488, K9s:0.0441, KK:0.2557, AKo:0.0794, A2s:0.1395, A3s:0.2607, A4s:0.3764, A5s:0.2515, A6s:0.3119, A7s:0.725, A8s:0.2553, A9s:0.0268, ATs:0.0001, AQs:0.0001, AKs:0.2781, AA:0.3516"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.0635, K3o:0.0016, A3o:0.21, K4o:0.0392, A4o:0.25, K5o:0.0005, A5o:0.1381, K6o:0.0329, A6o:0.0613, K7o:0.0116, A7o:0.097, A8o:0.0495, K9o:0.0001, A9o:0.1588, KTo:0.0007, ATo:0.1358, JJ:0.0003, KJo:0.0672, AJo:0.0309, KQo:0.026, AQo:0.0123, K2s:0.0889, K3s:0.0441, K4s:0.2072, K5s:0.1777, K6s:0.1208, K7s:0.1815, K8s:0.0066, K9s:0.0009, KTs:0.0002, KK:0.6545, AKo:0.2066, A2s:0.726, A3s:0.6267, A4s:0.4681, A5s:0.0307, A6s:0.4142, A7s:0.1447, A8s:0.0672, A9s:0.0004, ATs:0.0003, AKs:0.3442, AA:0.6484"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0113, 44:0.0171, 55:0.0155, 66:0.0223, 77:0.0372, 88:0.0001, QQ:0.0149, AQo:0.0002, KQs:0.0011, AKo:0.1185, A2s:0.0084, A3s:0.021, A4s:0.0206, A5s:0.0298, A6s:0.0047, A7s:0.0138, A8s:0.0035, A9s:0.0008, AKs:0.0589"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "44:0.0055, 54s:0.2627, 55:0.4089, 65s:0.2974, 66:0.857, 75s:0.0007, 76s:0.1552, 77:0.8771, 87s:0.0001, 88:0.999, 99, T9s:0.6769, TT, ATo:0.6886, J9s:0.0004, JTs:0.9943, JJ:0.9958, AJo:0.9747, Q8s:0.0003, Q9s:0.0009, QTs:0.9907, QJs:0.9993, QQ:0.9991, KQo:0.9184, AQo:0.9391, K6s:0.0196, K7s:0.0244, K9s:0.9063, KTs:0.9997, KJs:0.9999, KQs:0.9981, KK:0.5877, AKo:0.006, A2s:0.0041, A3s:0.0164, A4s:0.0276, A5s:0.0994, A6s:0.1895, A7s:0.4925, A8s:0.9016, A9s:0.9995, ATs:0.9999, AJs:0.9999, AQs, AKs:0.0063"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A3o:0.0005, A4o:0.0971, 54s:0.0001, 55:0.0009, A5o:0.0637, 65s:0.0003, 66:0.034, 76s:0.0002, 77:0.016, A7o:0.0017, 88:0.0006, A8o:0.0049, A9o:0.0126, ATo:0.0712, JJ:0.0042, KJo:0.0529, AJo:0.0219, Q5s:0.0003, QJs:0.0001, QQ:0.0001, KQo:0.0785, AQo:0.0603, K2s:0.0001, K4s:0.0357, K6s:0.0199, K7s:0.3175, K8s:0.0001, K9s:0.0001, KK:0.2462, AKo:0.0016, A2s:0.2697, A3s:0.0535, A4s:0.0301, A5s:0.0325, A6s:0.4324, A7s:0.3814, A8s:0.0379, A9s:0.0002, AJs:0.0001, AKs:0.24, AA:0.1878"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0022, A2o:0.353, K3o:0.0178, A3o:0.2902, K4o:0.0154, A4o:0.5271, K5o:0.0001, A5o:0.2142, A6o:0.0426, K7o:0.0012, A7o:0.0054, K8o:0.0005, A8o:0.0059, K9o:0.0024, A9o:0.0167, KTo:0.0017, ATo:0.0199, KJo:0.002, AJo:0.0032, KQo:0.0004, AQo:0.0006, K2s:0.0031, K3s:0.0534, K4s:0.0241, K5s:0.0051, K6s:0.0005, K7s:0.061, K8s:0.0005, K9s:0.0003, KK:0.1661, AKo:0.0184, A2s:0.3503, A3s:0.097, A4s:0.0259, A5s:0.0133, A6s:0.108, A7s:0.0138, A8s:0.0002, AKs:0.2806, AA:0.8122"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0015, 44:0.288, 55:0.0455, 66:0.0373, 77:0.1038, QQ:0.0008, KQo:0.0017, KQs:0.0018, AKo:0.9739, A2s:0.3754, A3s:0.8317, A4s:0.9163, A5s:0.8547, A6s:0.2512, A7s:0.1116, A8s:0.0572, AKs:0.4732"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "33:0.0648, 44:0.7984, 54s:0.0959, 55:0.9646, 65s:0.9695, 66:0.9458, 76s:0.725, 77, 86s:0.0001, 88, 98s:0.0288, 99, T7s:0.0001, T9s:0.9985, TT, ATo:0.5801, J9s:0.0024, JTs:0.9994, JJ, KJo:0.029, AJo:0.9728, Q9s:0.2657, QTs, QJs:0.9998, QQ:0.9999, KQo:0.8505, AQo:0.7668, K5s:0.0001, K6s:0.005, K7s:0.0046, K8s:0.0061, K9s:0.7301, KTs:0.9999, KJs:0.9999, KQs:0.9999, AKo:0.0003, A2s:0.0002, A3s:0.0039, A4s:0.035, A5s:0.499, A6s:0.0711, A7s:0.2985, A8s:0.7032, A9s:0.9994, ATs, AJs, AQs:0.9998, AKs:0.0001"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.003, A3o:0.138, A4o:0.2724, A5o:0.4504, 66:0.0085, K6o:0.0002, A6o:0.1395, A7o:0.2321, A8o:0.1366, A9o:0.061, KTo:0.0001, ATo:0.419, KJo:0.086, AJo:0.0272, KQo:0.1494, AQo:0.2332, K2s:0.0096, K3s:0.0003, K4s:0.0697, K5s:0.1312, K6s:0.3696, K7s:0.0366, K8s:0.2278, K9s:0.17, KK, AKo:0.2045, A2s:0.8048, A3s:0.7427, A4s:0.7608, A5s:0.256, A6s:0.8449, A7s:0.5459, A8s:0.2582, A9s:0.0003, AKs:0.3293, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.024, 33:0.0635, 44:0.0856, A4o:0.0137, 55:0.0352, A5o:0.0044, 66:0.0457, QQ:0.0001, KQo:0.0001, K6s:0.0001, K7s:0.0011, KQs:0.0001, AKo:0.7951, A2s:0.1949, A3s:0.2533, A4s:0.2042, A5s:0.245, A6s:0.0837, A7s:0.1554, A8s:0.0385, A9s:0.0003, AQs:0.0001, AKs:0.6706"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9998, K2o:0.0001, A2o:0.5143, 32s:0.9998, 33:0.9666, 53o:0.319, A3o:0.1997, 42s, 43s, 44:0.9928, 54o:0.9906, 64o:0.9864, K4o:0.0003, A4o:0.1138, 52s, 53s, 54s, 55:0.9994, 65o:0.9998, 75o:0.6139, K5o:0.0001, A5o:0.8643, 62s, 63s, 64s, 65s:0.9909, 66, 76o:0.9993, 86o:0.9928, K6o:0.9365, A6o:0.7103, 72s:0.8236, 73s:0.9999, 74s:0.9993, 75s, 76s:0.9618, 77, 87o:0.9982, 97o, T7o:0.4822, Q7o:0.9473, K7o:0.9186, A7o:0.8609, 82s:0.9995, 83s:0.9942, 84s:0.9978, 85s, 86s, 87s:0.9604, 88, 98o, T8o:0.9989, J8o:0.6947, Q8o:0.9839, K8o:0.997, A8o:0.938, 92s:0.9968, 93s, 94s, 95s, 96s, 97s, 98s, 99, T9o:0.9999, J9o:0.9867, Q9o:0.9995, K9o:0.9833, A9o, T2s:0.9862, T3s:0.9998, T4s:0.9436, T5s:0.9986, T6s:0.9994, T7s:0.9988, T8s, T9s, TT, JTo:0.9765, QTo:0.9431, KTo:0.9624, ATo:0.9985, J2s, J3s:0.9998, J4s:0.9998, J5s:0.9985, J6s, J7s:0.9976, J8s, J9s:0.9999, JTs, JJ, QJo:0.9689, KJo, AJo, Q2s, Q3s:0.9998, Q4s:0.9999, Q5s, Q6s:0.9993, Q7s, Q8s, Q9s, QTs:0.9833, QJs, QQ, KQo, AQo:0.9853, K2s, K3s:0.9999, K4s:0.9999, K5s:0.8885, K6s:0.9983, K7s, K8s:0.9998, K9s, KTs, KJs, KQs, KK:0.986, A2s:0.551, A3s:0.9313, A4s:0.3066, A5s:0.994, A6s:0.934, A7s:0.9921, A8s:0.9828, A9s, ATs, AJs, AQs"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.335, 53o:0.1299, K3o:0.0001, A3o:0.1876, 54o:0.0093, 64o:0.0008, K4o:0.0021, A4o:0.2098, 65o:0.0001, K5o:0.0398, A5o:0.128, 65s:0.0091, 76o:0.0007, K6o:0.0524, A6o:0.2896, 74s:0.0006, 76s:0.0382, 87o:0.0017, T7o:0.0423, Q7o:0.0012, K7o:0.0735, A7o:0.1391, 87s:0.0396, T8o:0.0004, J8o:0.076, Q8o:0.0143, K8o:0.0002, A8o:0.062, J9o:0.0129, Q9o:0.0004, K9o:0.0165, T4s:0.055, T6s:0.0005, T7s:0.0011, JTo:0.0235, QTo:0.0569, KTo:0.0376, ATo:0.0015, J7s:0.0024, QJo:0.0311, Q3s:0.0002, Q6s:0.0007, QTs:0.0167, AQo:0.0147, K3s:0.0001, K4s:0.0001, K5s:0.1115, K6s:0.0017, K8s:0.0002, KK:0.014, AKo:0.0004, A2s:0.0137, A3s:0.0021, A4s:0.5781, A5s:0.0037, A6s:0.0532, A7s:0.0079, A8s:0.0172, AKs:0.6661, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.1507, 33:0.0334, A3o:0.6127, 44:0.0072, A4o:0.6764, 55:0.0006, A5o:0.0077, K6s:0.0001, AKo:0.9996, A2s:0.4354, A3s:0.0666, A4s:0.1153, A5s:0.0023, A6s:0.0128, AKs:0.3339"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "X",
      "open 4bb"
    ],
    "bands": [
      {
        "action": "X",
        "min": 0.0001,
        "range": "22:0.7561, 32o:0.7616, 42o:0.4028, 52o:0.3878, 62o:0.1628, 72o:0.5987, 82o:0.6047, 92o:0.7583, T2o:0.4457, J2o:0.7154, Q2o:0.9159, K2o:0.4989, A2o:0.9151, 32s:0.9987, 33:0.9621, 43o:0.9866, 53o:0.9493, 63o:0.0554, 73o:0.3462, 83o:0.4208, 93o:0.9629, T3o:0.5689, J3o:0.5978, Q3o:0.9863, K3o:0.9408, A3o:0.9936, 42s, 43s:0.9779, 44:0.9986, 54o:0.5937, 64o:0.9552, 74o:0.3209, 84o:0.71, 94o:0.6565, T4o:0.9717, J4o:0.906, Q4o:0.9923, K4o:0.8485, A4o:0.9671, 52s:0.9827, 53s:0.9994, 54s:0.8198, 55, 65o:0.9471, 75o:0.8689, 85o:0.9832, 95o:0.6769, T5o:0.7812, J5o:0.9682, Q5o:0.3999, K5o:0.9064, A5o:0.9958, 62s:0.9756, 63s:0.88, 64s:0.9993, 65s:0.9038, 66, 76o, 86o:0.9608, 96o:0.8899, T6o:0.8983, J6o:0.4809, Q6o:0.9017, K6o:0.8899, A6o:0.8742, 72s:0.9459, 73s, 74s:0.9998, 75s, 76s:0.6122, 77, 87o, 97o:0.9418, T7o:0.6168, J7o:0.9801, Q7o:0.9973, K7o, A7o:0.9998, 82s:0.9034, 83s:0.9876, 84s:0.9717, 85s, 86s:0.9991, 87s:0.7001, 88, 98o:0.8615, T8o:0.9797, J8o:0.5288, Q8o:0.9999, K8o:0.7462, A8o:0.9862, 92s:0.9477, 93s:0.9996, 94s:0.9636, 95s:0.988, 96s:0.9205, 97s:0.8753, 98s:0.9948, 99, T9o:0.9809, J9o:0.9987, Q9o:0.9999, K9o:0.9978, A9o:0.8936, T2s:0.8561, T3s:0.9986, T4s:0.9997, T5s, T6s:0.9999, T7s, T8s:0.9181, T9s:0.8889, TT:0.7948, JTo, QTo:0.9795, KTo:0.9999, ATo:0.7645, J2s:0.9856, J3s:0.9908, J4s, J5s:0.9983, J6s:0.9995, J7s, J8s, J9s, JTs:0.9137, JJ:0.8027, QJo:0.8814, KJo:0.9998, AJo:0.5411, Q2s:0.964, Q3s:0.9999, Q4s:0.9987, Q5s:0.9999, Q6s, Q7s:0.9982, Q8s:0.9987, Q9s:0.9998, QTs:0.998, QJs:0.9951, QQ:0.8901, KQo:0.9174, AQo:0.3301, K2s:0.9979, K3s:0.835, K4s:0.8803, K5s, K6s:0.9945, K7s:0.9925, K8s:0.8951, K9s:0.8247, KTs:0.283, KJs:0.3319, KQs:0.3571, A2s:0.1732, A3s:0.4336, A4s:0.6425, A5s:0.0875, A6s:0.9994, A7s:0.9149, A8s:0.1034, A9s:0.355, ATs:0.0068, AJs:0.0027, AQs:0.0003"
      },
      {
        "action": "open 4bb",
        "min": 0.0001,
        "range": "22:0.2439, 32o:0.2384, 42o:0.5972, 52o:0.6122, 62o:0.8372, 72o:0.4013, 82o:0.3953, 92o:0.2417, T2o:0.5543, J2o:0.2846, Q2o:0.0841, K2o:0.5011, A2o:0.0849, 32s:0.0013, 33:0.0379, 43o:0.0134, 53o:0.0507, 63o:0.9446, 73o:0.6538, 83o:0.5792, 93o:0.0371, T3o:0.4311, J3o:0.4022, Q3o:0.0137, K3o:0.0592, A3o:0.0064, 43s:0.0221, 44:0.0014, 54o:0.4063, 64o:0.0448, 74o:0.6791, 84o:0.29, 94o:0.3435, T4o:0.0283, J4o:0.094, Q4o:0.0077, K4o:0.1515, A4o:0.0329, 52s:0.0173, 53s:0.0006, 54s:0.1802, 65o:0.0529, 75o:0.1311, 85o:0.0168, 95o:0.3231, T5o:0.2188, J5o:0.0318, Q5o:0.6001, K5o:0.0936, A5o:0.0042, 62s:0.0244, 63s:0.12, 64s:0.0007, 65s:0.0962, 86o:0.0392, 96o:0.1101, T6o:0.1017, J6o:0.5191, Q6o:0.0983, K6o:0.1101, A6o:0.1258, 72s:0.0541, 74s:0.0002, 76s:0.3878, 97o:0.0582, T7o:0.3832, J7o:0.0199, Q7o:0.0027, A7o:0.0002, 82s:0.0966, 83s:0.0124, 84s:0.0283, 86s:0.0009, 87s:0.2999, 98o:0.1385, T8o:0.0203, J8o:0.4712, Q8o:0.0001, K8o:0.2538, A8o:0.0138, 92s:0.0523, 93s:0.0004, 94s:0.0364, 95s:0.012, 96s:0.0795, 97s:0.1247, 98s:0.0052, T9o:0.0191, J9o:0.0013, Q9o:0.0001, K9o:0.0022, A9o:0.1064, T2s:0.1439, T3s:0.0014, T4s:0.0003, T6s:0.0001, T8s:0.0819, T9s:0.1111, TT:0.2052, QTo:0.0205, KTo:0.0001, ATo:0.2355, J2s:0.0144, J3s:0.0092, J5s:0.0017, J6s:0.0005, JTs:0.0863, JJ:0.1973, QJo:0.1186, KJo:0.0002, AJo:0.4589, Q2s:0.036, Q3s:0.0001, Q4s:0.0013, Q5s:0.0001, Q7s:0.0018, Q8s:0.0013, Q9s:0.0002, QTs:0.002, QJs:0.0049, QQ:0.1099, KQo:0.0826, AQo:0.6699, K2s:0.0021, K3s:0.165, K4s:0.1197, K6s:0.0055, K7s:0.0075, K8s:0.1049, K9s:0.1753, KTs:0.717, KJs:0.6681, KQs:0.6429, KK, AKo, A2s:0.8268, A3s:0.5664, A4s:0.3575, A5s:0.9125, A6s:0.0006, A7s:0.0851, A8s:0.8966, A9s:0.645, ATs:0.9932, AJs:0.9973, AQs:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9494, 52o:0.0002, K2o:0.0001, A2o:0.0059, 32s:0.0433, 33:0.7818, 43o:0.0001, J3o:0.0001, Q3o:0.0003, K3o:0.5046, A3o:0.3576, 42s:0.71, 43s:0.9816, 44:0.9989, 54o:0.9611, 64o:0.0483, Q4o:0.0203, K4o:0.5336, A4o:0.7147, 52s:0.9984, 53s:0.996, 54s:0.9986, 55:0.9996, 65o:0.878, 75o:0.0471, T5o:0.0002, Q5o:0.3667, K5o:0.8016, A5o:0.5657, 62s:0.0615, 63s:0.9897, 64s:0.9548, 65s:0.9999, 66:0.9999, 76o:0.9911, 86o:0.3565, 96o:0.0796, T6o:0.0088, J6o:0.0076, Q6o:0.5755, K6o:0.9644, A6o:0.5261, 72s:0.0024, 73s:0.5631, 74s:0.991, 75s:0.9997, 76s:0.9989, 77:0.9999, 87o:0.9782, 97o:0.7339, T7o:0.9872, J7o:0.9324, Q7o:0.4858, K7o:0.9867, A7o:0.9157, 82s:0.0872, 83s:0.4209, 84s:0.9427, 85s:0.9717, 86s:0.9088, 87s:0.9998, 88, 98o:0.9983, T8o:0.9998, J8o:0.9923, Q8o:0.9999, K8o:0.9972, A8o:0.9964, 92s:0.6742, 93s:0.8428, 94s:0.9875, 95s:0.9857, 96s:0.992, 97s:0.9999, 98s:0.9997, 99:0.9999, T9o:0.9999, J9o:0.9958, Q9o:0.9656, K9o:0.9993, A9o:0.9947, T2s:0.995, T3s:0.9561, T4s:0.8873, T5s:0.9944, T6s:0.997, T7s:0.9979, T8s:0.9892, T9s:0.9984, TT, JTo:0.9996, QTo:0.9998, KTo, ATo:0.993, J2s:0.9978, J3s:0.9927, J4s:0.9989, J5s:0.9993, J6s:0.9999, J7s:0.9986, J8s:0.9985, J9s:0.9999, JTs:0.9996, JJ:0.9997, QJo:0.9999, KJo:0.9999, AJo:0.9892, Q2s:0.8834, Q3s:0.9918, Q4s, Q5s:0.9994, Q6s:0.9981, Q7s:0.9992, Q8s, Q9s:0.999, QTs:0.9996, QJs:0.9993, QQ:0.9995, KQo:0.9998, AQo:0.9807, K2s:0.9353, K3s:0.9311, K4s:0.9652, K5s:0.987, K6s:0.9998, K7s:0.9999, K8s:0.9998, K9s:0.9999, KTs, KJs, KQs, KK:0.7646, A2s:0.767, A3s:0.9991, A4s:0.9909, A5s:0.9204, A6s:0.8358, A7s:0.9988, A8s:0.9988, A9s:0.9999, ATs:0.9993, AJs:0.9671, AQs:0.9838"
      },
      {
        "action": "3bet 7.5bb",
        "min": 0.0001,
        "range": "22:0.0004, 42o:0.0008, 52o:0.0007, 62o:0.0005, T2o:0.0237, J2o:0.0387, Q2o:0.1979, K2o:0.2345, A2o:0.9424, 32s:0.1274, 33:0.0156, T3o:0.0313, J3o:0.0156, Q3o:0.0025, K3o:0.3065, A3o:0.3545, 42s:0.0367, 43s:0.0115, 64o:0.0019, T4o:0.0169, J4o:0.0641, Q4o:0.0459, K4o:0.358, A4o:0.1206, 52s:0.0012, 53s:0.0001, 54s:0.0003, 65o:0.0109, 85o:0.0006, 95o:0.0112, T5o:0.0017, J5o:0.0003, Q5o:0.0043, K5o:0.1073, A5o:0.2334, 62s:0.0633, 63s:0.0003, 64s:0.0436, 86o:0.1193, 96o:0.0491, T6o:0.1183, J6o:0.0468, Q6o:0.0256, K6o:0.0134, A6o:0.3782, 72s:0.0213, 73s:0.0009, 74s:0.0023, 75s:0.0001, 87o:0.0025, 97o:0.1973, T7o:0.0119, J7o:0.0216, Q7o:0.0027, K7o:0.0056, A7o:0.0838, 82s:0.0487, 83s:0.0051, 84s:0.0076, 85s:0.0043, 86s:0.0887, 98o:0.0001, T8o:0.0001, J8o:0.0072, K8o:0.0015, A8o:0.0032, 92s:0.3215, 93s:0.0507, 94s:0.0095, 95s:0.0072, T9o:0.0001, J9o:0.0039, Q9o:0.0341, A9o:0.0052, T2s:0.0003, T3s:0.0275, T4s:0.1091, T5s:0.0034, T6s:0.0029, T7s:0.0007, T8s:0.0107, T9s:0.0002, QTo:0.0001, ATo:0.0066, J2s:0.0003, J3s:0.0001, J4s:0.0009, J5s:0.0001, J7s:0.0002, JTs:0.0001, JJ:0.0002, AJo:0.0105, Q2s:0.1152, Q3s:0.0045, Q5s:0.0001, Q6s:0.0001, Q7s:0.0002, Q9s:0.0001, QTs:0.0003, QQ:0.0005, AQo:0.0099, K2s:0.0001, K3s:0.0001, K4s:0.0003, K5s:0.0001, K6s:0.0001, KK:0.2354, AKo:0.5863, A2s:0.1077, A4s:0.0027, A5s:0.0104, A6s:0.0004, A8s:0.0003, ATs:0.0005, AJs:0.0321, AQs:0.0115, AKs:0.9977, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0501, 42o:0.0001, A2o:0.0517, 33:0.2024, Q3o:0.0001, K3o:0.066, A3o:0.2878, 42s:0.0002, 43s:0.0018, 44:0.0011, T4o:0.0001, J4o:0.0001, K4o:0.0504, A4o:0.1647, 53s:0.0027, 54s:0.0003, 55:0.0003, 75o:0.0001, K5o:0.0814, A5o:0.2009, 63s:0.0016, 64s:0.0007, 66:0.0001, K6o:0.0219, A6o:0.0957, 72s:0.0006, 73s:0.0003, 74s:0.0048, 77:0.0001, 87o:0.0002, T7o:0.0006, K7o:0.0002, A7o:0.0004, 82s:0.0001, 83s:0.0002, 84s:0.0002, 85s:0.0003, 86s:0.0018, 87s:0.0001, 98o:0.0001, J8o:0.0002, A8o:0.0004, 92s:0.0011, 93s:0.0002, 94s:0.0004, 95s:0.0014, 96s:0.0077, 98s:0.0001, J9o:0.0001, K9o:0.0006, A9o:0.0001, T2s:0.0002, T3s:0.0001, T7s:0.001, T9s:0.0012, JTo:0.0004, QTo:0.0002, ATo:0.0005, J2s:0.0005, J3s:0.0001, J4s:0.0001, J5s:0.0005, J6s:0.0001, J7s:0.001, J8s:0.0014, JTs:0.0003, KJo:0.0001, AJo:0.0003, Q2s:0.0009, Q3s:0.0019, Q5s:0.0004, Q6s:0.0015, Q7s:0.0002, Q9s:0.0008, QJs:0.0006, KQo:0.0002, AQo:0.0094, K2s:0.0643, K3s:0.0687, K4s:0.0345, K5s:0.0129, K6s:0.0001, K8s:0.0002, K9s:0.0001, AKo:0.4137, A2s:0.1253, A3s:0.0009, A4s:0.0064, A5s:0.0692, A6s:0.1638, A7s:0.0012, A8s:0.001, A9s:0.0001, ATs:0.0001, AJs:0.0008, AQs:0.0047, AKs:0.0023"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|BB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0004, 77:0.0007, 88:0.0339, 99:0.5082, TT:0.9999, JJ, QQ, AQo:0.0029, KK, AKo, ATs:0.8284, AJs:0.9478, AQs:0.9857, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|BB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5967, 33:0.9217, 43s:0.0263, 44:0.9764, A4o:0.0033, 54s:0.4653, 55:0.9981, A5o:0.8465, 64s:0.2047, 65s:0.1211, 66:0.9996, A6o:0.0001, 74s:0.0002, 75s:0.0042, 76s:0.5678, 77:0.9993, A7o:0.0022, 87s:0.904, 88:0.9959, A8o:0.0412, 94s:0.0001, 96s:0.0006, 97s:0.0014, 98s:0.7108, 99:0.9992, A9o:0.1403, T4s:0.0049, T6s:0.0167, T7s:0.2686, T8s:0.6368, T9s:0.9776, TT:0.9978, JTo:0.0073, ATo:0.8124, J7s:0.0111, J8s:0.2768, J9s:0.9913, JTs:0.9291, JJ:0.9995, QJo:0.0021, KJo:0.0099, AJo:0.9929, Q3s:0.0019, Q4s:0.0073, Q5s:0.0008, Q7s:0.0005, Q8s:0.2641, Q9s:0.824, QTs:0.9989, QJs:0.9987, QQ:0.9992, KQo:0.0632, AQo:0.9936, K3s:0.0006, K4s:0.0072, K5s:0.0714, K6s:0.3562, K7s:0.4536, K8s:0.9976, K9s:0.9429, KTs:0.9978, KJs:0.9916, KQs:0.9988, KK:0.6997, A2s:0.0528, A3s:0.1427, A4s:0.5225, A5s:0.9683, A6s:0.5882, A7s:0.3764, A8s:0.6719, A9s:0.6042, ATs:0.4187, AJs:0.9539, AQs:0.9988"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.035, A3o:0.1067, K4o:0.0008, A4o:0.2253, K5o:0.0002, A5o:0.0488, A6o:0.3504, A7o:0.3133, K8o:0.0005, A8o:0.2201, K9o:0.0006, A9o:0.4773, TT:0.0007, KTo:0.0001, ATo:0.0403, JJ:0.0001, AJo:0.0018, QQ:0.0005, K2s:0.0002, K3s:0.0068, K4s:0.0018, K6s:0.0001, K7s:0.0001, K8s:0.0008, K9s:0.0224, KTs:0.0008, KJs:0.0027, KK:0.3001, AKo:0.071, A2s:0.0096, A4s:0.0005, A6s:0.0012, A7s:0.0001, ATs:0.0092, AJs:0.0008, AKs:0.7096, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1721, A3o:0.022, A4o:0.0151, 53s:0.0001, 55:0.0004, A5o:0.0017, 65s:0.0001, 66:0.0003, A6o:0.0711, 75s:0.0001, 76s:0.0001, 77:0.0004, A7o:0.0435, 88:0.0034, A8o:0.0298, 96s:0.0001, 98s:0.0001, 99:0.0008, A9o:0.3348, T6s:0.0001, T7s:0.0001, T9s:0.0002, TT:0.0014, ATo:0.1441, J7s:0.0001, JJ:0.0003, AJo:0.0036, Q3s:0.0001, QTs:0.0004, QQ:0.0003, AQo:0.0064, K6s:0.0031, K7s:0.0001, K8s:0.0003, K9s:0.0003, KTs:0.0007, KJs:0.0043, KQs:0.0011, KK:0.0002, AKo:0.929, A2s:0.9315, A3s:0.8567, A4s:0.4744, A5s:0.0317, A6s:0.4105, A7s:0.6233, A8s:0.328, A9s:0.3957, ATs:0.572, AJs:0.0453, AQs:0.0011, AKs:0.2904"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.8353, JJ, QQ, AQo:0.056, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0022, JJ:0.9996, QQ, KK, AKo, AQs:0.0021, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0013, 42s:0.0001, 43s:0.0001, 44:0.0164, 53s:0.0456, 54s:0.8516, 55:0.3102, 63s:0.0002, 65s:0.6112, 66:0.7315, 76s:0.0773, 77:0.6601, 86s:0.0007, 87s:0.0005, 88:0.9935, 98s:0.0068, 99:0.8888, T8s:0.0003, T9s:0.1155, TT:0.9772, KTo:0.0018, ATo:0.4648, J9s:0.0914, JTs:0.4584, JJ:0.6175, KJo:0.0596, AJo:0.4018, QTs:0.377, QJs:0.7262, QQ:0.9712, KQo:0.4417, AQo:0.9647, K2s:0.0031, K3s:0.0514, K4s:0.166, K5s:0.426, K6s:0.0212, K7s:0.0023, K8s:0.0146, K9s:0.0299, KTs:0.928, KJs:0.3961, KQs:0.8951, KK:0.0001, A4s:0.0001, A5s:0.0003, A6s:0.0159, A7s:0.0091, A8s:0.3101, A9s:0.5245, ATs:0.996, AJs:0.9928, AQs:0.9909, AA:0.0001"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0077, A3o:0.0667, A4o:0.2031, 55:0.0011, A5o:0.25, A6o:0.0389, 77:0.0001, A7o:0.2004, 87s:0.0003, 88:0.0001, A8o:0.0551, 97s:0.0005, 98s:0.0001, A9o:0.2187, TT:0.0001, ATo:0.0381, J9s:0.0002, JJ:0.0054, KJo:0.0001, AJo:0.3382, Q6s:0.0019, Q9s:0.0007, QTs:0.0021, QJs:0.0009, KQo:0.0015, AQo:0.0094, K2s:0.0034, K3s:0.0069, K4s:0.0028, K5s:0.0023, K6s:0.0299, K7s:0.0001, K8s:0.0003, KK:0.0001, AKo:0.0815, A3s:0.0002, A5s:0.0001, A6s:0.0081, A8s:0.0005, A9s:0.0001, ATs:0.0011, AJs:0.0022, AQs:0.0042, AKs:0.8941, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0012, A2o:0.0002, 33:0.5152, A3o:0.2854, 43s:0.0002, 44:0.3878, A4o:0.0308, 54s:0.0001, 55:0.5766, A5o:0.0778, 65s:0.0001, 66:0.0201, A6o:0.0001, 76s:0.0002, 77:0.3016, A7o:0.0006, 87s:0.0012, 88:0.0039, A8o:0.0014, 95s:0.0001, 98s:0.0002, 99:0.1107, A9o:0.0361, TT:0.0226, KTo:0.001, ATo:0.0049, J9s:0.0001, JTs:0.0035, JJ:0.377, KJo:0.349, AJo:0.2591, Q8s:0.0013, Q9s:0.0018, QTs:0.0025, QJs:0.0054, QQ:0.0288, KQo:0.1392, AQo:0.0259, K2s:0.0056, K3s:0.117, K4s:0.2647, K5s:0.1709, K6s:0.0575, K7s:0.969, K8s:0.3227, K9s:0.9668, KTs:0.0716, KJs:0.6027, KQs:0.1049, KK:0.9998, AKo:0.9185, A2s:0.9966, A3s:0.9998, A4s:0.9993, A5s:0.9994, A6s:0.9723, A7s:0.9905, A8s:0.6893, A9s:0.4746, ATs:0.0028, AJs:0.005, AQs:0.0049, AKs:0.1059"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0323, A3o:0.0805, K4o:0.0001, A4o:0.0358, A5o:0.147, A6o:0.0395, A7o:0.0431, A8o:0.0349, A9o:0.0085, TT:0.0005, JJ:0.0631, KJo:0.0001, AJo:0.2205, QQ:0.115, KQo:0.001, AQo:0.3302, K2s:0.0001, K3s:0.0175, K4s:0.0066, K6s:0.0005, K8s:0.0016, KJs:0.0097, KQs:0.0003, KK:0.0001, A3s:0.0044, A4s:0.005, A5s:0.0194, A6s:0.0193, A7s:0.0366, A8s:0.0111, A9s:0.0828, ATs:0.0003, AJs:0.155, AQs:0.0546, AKs:0.172, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0025, 54s:0.0002, 55:0.0013, A5o:0.0031, 66:0.0001, 77:0.0362, A8o:0.0046, 99:0.4825, TT:0.0086, JJ:0.1166, AJo:0.0037, QQ:0.8654, AQo:0.0033, K2s:0.0025, K3s:0.0286, K4s:0.0021, K6s:0.0153, K7s:0.1044, K9s:0.1928, KTs:0.3293, KJs:0.7892, KQs:0.9031, KK:0.9999, AKo, A2s:0.8043, A3s:0.9737, A4s:0.9876, A5s:0.9647, A6s:0.5245, A7s:0.929, A8s:0.6124, A9s:0.7516, ATs:0.998, AJs:0.8177, AQs:0.9416, AKs:0.828"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9073, 52o:0.1222, K2o:0.3225, A2o:0.0004, 32s:0.9864, 33:0.7502, 43o:0.7457, 53o:0.9091, K3o:0.4112, A3o:0.0429, 42s:0.9968, 43s:0.9977, 44:0.3905, 54o:0.996, 64o:0.9944, 74o:0.0077, Q4o:0.0015, K4o:0.8706, A4o:0.0036, 52s:0.9984, 53s:0.9993, 54s:0.999, 55:0.6697, 65o:0.9905, 75o:0.9863, 85o:0.6758, Q5o:0.1135, K5o:0.7815, A5o:0.1348, 62s:0.9859, 63s:0.9958, 64s:0.9939, 65s:0.9997, 66:0.9995, 76o:0.9957, 86o:0.9979, Q6o:0.5972, K6o:0.9944, A6o:0.3213, 72s:0.9934, 73s:0.9973, 74s:0.9942, 75s:0.9987, 76s:0.9968, 77:0.9876, 87o:0.9976, 97o:0.9115, T7o:0.001, J7o:0.0179, Q7o:0.5078, K7o:0.9986, A7o:0.4158, 82s:0.9989, 83s:0.9458, 84s:0.9936, 85s:0.999, 86s:0.9989, 87s:0.9991, 88, 98o:0.9887, T8o:0.8994, J8o:0.813, Q8o:0.8337, K8o:0.9973, A8o:0.8261, 92s:0.1664, 93s:0.9373, 94s:0.8656, 95s:0.9931, 96s:0.9958, 97s:0.9995, 98s:0.9977, 99:0.9997, T9o:0.9841, J9o:0.7776, Q9o:0.9729, K9o:0.9993, A9o:0.8778, T2s:0.8789, T3s:0.9832, T4s:0.9492, T5s:0.9925, T6s:0.9963, T7s:0.9992, T8s:0.9994, T9s:0.9945, TT:0.8509, JTo:0.9631, QTo:0.6876, KTo:0.9765, ATo:0.9082, J2s:0.8434, J3s:0.5436, J4s:0.9896, J5s:0.9164, J6s:0.7433, J7s:0.9474, J8s:0.9928, J9s:0.9942, JTs:0.9995, JJ:0.2835, QJo:0.9835, KJo:0.9869, AJo:0.8773, Q2s:0.21, Q3s:0.349, Q4s:0.166, Q5s:0.3619, Q6s:0.4373, Q7s:0.6316, Q8s:0.2086, Q9s:0.9584, QTs:0.1464, QJs:0.1497, KQo:0.2105, K2s:0.4188, K3s:0.041, K4s:0.4522, K5s:0.2163, K6s:0.4724, K7s:0.9346, K8s:0.9662, K9s:0.9998, KTs:0.979, KJs:0.8892, KQs:0.3513, A2s:0.0428, A3s:0.018, A4s:0.1121, A5s:0.0171, A6s:0.7605, A7s:0.9922, A8s:0.9804, A9s:0.9908, ATs:0.999, AJs:0.9571, AQs:0.0001"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "J2o:0.0092, Q2o:0.0355, K2o:0.1705, A2o:0.4416, 32s:0.002, Q3o:0.0005, K3o:0.3726, A3o:0.4268, 42s:0.0002, Q4o:0.1213, K4o:0.075, A4o:0.0296, 54s:0.0001, 65o:0.0002, J5o:0.0003, Q5o:0.0206, K5o:0.1875, A5o:0.2993, 76o:0.0001, Q6o:0.001, K6o:0.0006, A6o:0.6084, 72s:0.0003, 75s:0.001, T7o:0.0001, J7o:0.1317, Q7o:0.06, K7o:0.0003, A7o:0.5678, 82s:0.0003, 83s:0.0008, 84s:0.0011, J8o:0.1228, Q8o:0.1485, K8o:0.0001, A8o:0.172, 93s:0.0001, 96s:0.0003, 98s:0.0005, J9o:0.1432, Q9o:0.0254, A9o:0.1214, T3s:0.0002, T4s:0.0321, T6s:0.0002, JTo:0.0366, QTo:0.0018, KTo:0.0232, ATo:0.0918, J2s:0.0068, J3s:0.455, J4s:0.009, J5s:0.0727, J6s:0.244, J7s:0.0505, J8s:0.0039, J9s:0.0031, JTs:0.0001, JJ:0.4773, KJo:0.0003, AJo:0.1192, Q2s:0.0026, Q3s:0.0028, Q4s:0.0061, Q5s:0.0023, Q7s:0.0007, Q8s:0.048, QTs:0.0012, QJs:0.0003, QQ:0.0794, K2s:0.0098, K5s:0.0002, K6s:0.0007, K7s:0.0001, K8s:0.0003, KK:0.9994, AKo:0.2228, A2s:0.0043, A3s:0.0242, A4s:0.0033, A5s:0.0028, A7s:0.0014, A8s:0.0004, A9s:0.0001, ATs:0.0007, AJs:0.0335, AQs:0.003, AKs:0.5757, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0927, Q2o:0.0016, A2o:0.5577, 33:0.2497, K3o:0.0091, A3o:0.5295, 42s:0.0005, 43s:0.0003, 44:0.6095, Q4o:0.1516, K4o:0.0183, A4o:0.9658, 55:0.3302, Q5o:0.0492, K5o:0.0233, A5o:0.5636, 64s:0.0003, 66:0.0005, Q6o:0.0048, K6o:0.0001, A6o:0.0671, 75s:0.0002, 76s:0.0001, 77:0.0124, Q7o:0.0103, A7o:0.0149, 85s:0.0005, 87s:0.0001, Q8o:0.0057, A8o:0.0009, 96s:0.0003, 99:0.0001, TT:0.1491, QTo:0.3103, KTo:0.0002, J2s:0.0002, J3s:0.0002, J4s:0.0003, J5s:0.0101, J6s:0.0067, J8s:0.001, J9s:0.0014, JTs:0.0001, JJ:0.2391, QJo:0.0164, KJo:0.0126, AJo:0.0035, Q2s:0.7868, Q3s:0.6469, Q4s:0.8273, Q5s:0.6356, Q6s:0.5626, Q7s:0.3664, Q8s:0.7434, Q9s:0.0415, QTs:0.8523, QJs:0.85, QQ:0.9206, KQo:0.7895, AQo, K2s:0.5713, K3s:0.9576, K4s:0.5476, K5s:0.7833, K6s:0.5268, K7s:0.0654, K8s:0.0331, K9s:0.0001, KTs:0.0207, KJs:0.1108, KQs:0.6487, KK:0.0006, AKo:0.7772, A2s:0.9524, A3s:0.9578, A4s:0.8845, A5s:0.9799, A6s:0.2394, A7s:0.0065, A8s:0.019, A9s:0.0091, ATs:0.0003, AJs:0.0094, AQs:0.9969, AKs:0.4243"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0016, 99:0.0084, TT:0.996, JJ:0.9992, QQ:0.9958, KK, AKo, ATs:0.0101, AJs:0.2306, AQs:0.4343, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8465, 33:0.4545, 43s:0.1254, 44:0.7964, A4o:0.0519, 53s:0.0511, 54s:0.5886, 55:0.8793, A5o:0.2801, 65s:0.4351, 66:0.9935, A6o:0.0001, 75s:0.0116, 76s:0.7018, 77:0.9986, 86s:0.0561, 87s:0.7786, 88:0.9926, A8o:0.0085, 97s:0.0494, 98s:0.2384, 99:0.9963, A9o:0.0002, T7s:0.0332, T8s:0.0537, T9s:0.7754, TT:0.9951, KTo:0.0001, ATo:0.629, J7s:0.0008, J8s:0.0082, J9s:0.7033, JTs:0.9932, JJ:0.9974, AJo:0.8017, Q4s:0.0001, Q6s:0.0026, Q7s:0.0001, Q8s:0.0419, Q9s:0.2749, QTs:0.9976, QJs:0.9899, QQ:0.9999, KQo:0.0266, AQo:0.9945, K4s:0.0351, K5s:0.0046, K6s:0.015, K7s:0.1123, K8s:0.0513, K9s:0.1012, KTs:0.6422, KJs:0.9187, KQs:0.9984, KK:0.983, A2s:0.0111, A3s:0.2983, A4s:0.2846, A5s:0.9894, A6s:0.6741, A7s:0.3413, A8s:0.6173, A9s:0.993, ATs:0.9753, AJs:0.9351, AQs:0.9989"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.6092, A3o:0.0392, A4o:0.0159, A5o:0.2664, 65s:0.0001, A6o:0.2333, A7o:0.0635, A8o:0.2204, 99:0.0001, A9o:0.1746, TT:0.001, ATo:0.1966, J8s:0.0001, JJ:0.0015, AJo:0.1673, Q9s:0.0005, AQo:0.002, K8s:0.0001, KK:0.0108, AKo:0.0003, A2s:0.0415, A3s:0.0001, A4s:0.0002, A5s:0.0006, A6s:0.0697, A7s:0.0001, A8s:0.0007, A9s:0.0019, AJs:0.0343, AQs:0.0006, AKs:0.7623, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.022, 33:0.0001, A3o:0.0118, 44:0.0003, A4o:0.0015, 55:0.0003, A5o:0.0007, A6o:0.0016, 77:0.0005, A7o:0.1196, 88:0.0002, A8o:0.0029, 97s:0.0001, 99:0.002, A9o:0.1108, T8s:0.0001, TT:0.0035, ATo:0.1702, JJ:0.0011, AJo:0.0217, Q7s:0.0002, Q9s:0.0004, QQ:0.0001, AQo:0.0005, K3s:0.0002, K6s:0.0002, K9s:0.0001, KTs:0.0004, KQs:0.0014, KK:0.0062, AKo:0.9997, A2s:0.9372, A3s:0.7015, A4s:0.7152, A5s:0.0098, A6s:0.2541, A7s:0.6581, A8s:0.3815, A9s:0.0027, ATs:0.0246, AJs:0.0304, AQs:0.0005, AKs:0.2377"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1864, JJ:0.3922, QQ:0.9426, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0849, QQ:0.3437, KK, AKo:0.7211, AKs:0.8772, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0714, JJ:0.1893, QQ:0.7088, KK, AKo:0.7936, AKs:0.9142, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0853, 33:0.0001, 42s:0.0001, 43s:0.0005, 44:0.0064, 54s:0.1176, 55:0.4052, A5o:0.0068, 64s:0.0205, 65s:0.3562, 66:0.88, 75s:0.0002, 76s:0.6414, 77:0.5805, 87s:0.0061, 88:0.6181, 96s:0.0001, 99:0.7033, T5s:0.0001, T8s:0.0012, T9s:0.1763, TT:0.9738, ATo:0.0007, J7s:0.0001, J9s:0.0795, JTs:0.4495, JJ:0.7691, AJo:0.5307, Q8s:0.0116, Q9s:0.0007, QTs:0.602, QJs:0.0074, QQ:0.0952, KQo:0.0556, AQo:0.5736, K4s:0.0173, K5s:0.008, K6s:0.0104, K7s:0.0004, K8s:0.0038, K9s:0.2619, KTs:0.3642, KJs:0.6083, KQs:0.6499, KK:0.8401, AKo:0.0152, A3s:0.0824, A4s:0.1068, A5s:0.2764, A6s:0.0398, A7s:0.1363, A8s:0.1688, A9s:0.3377, ATs:0.611, AJs:0.5891, AQs:0.7655, AKs:0.0451"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.1815, A2o:0.0558, 33:0.0135, A3o:0.3208, 44:0.0185, A4o:0.0869, 53s:0.0026, 54s:0.0052, 55:0.0013, A5o:0.1573, 64s:0.0042, 65s:0.004, 66:0.0029, A6o:0.0346, 74s:0.0068, 76s:0.1098, 77:0.0884, J7o:0.0001, K7o:0.0001, A7o:0.1515, 84s:0.0002, 85s:0.0001, 87s:0.0019, 88:0.0323, A8o:0.1292, 98s:0.0026, A9o:0.0163, T4s:0.0002, T5s:0.0003, T6s:0.0003, T8s:0.0001, T9s:0.0002, ATo:0.1204, J7s:0.0005, J8s:0.0003, J9s:0.0001, JTs:0.0017, QJo:0.0001, AJo:0.0645, Q2s:0.0013, Q3s:0.0013, Q4s:0.0008, Q5s:0.0004, Q6s:0.0033, Q7s:0.0005, Q8s:0.1773, Q9s:0.0167, QTs:0.0201, QJs:0.075, KQo:0.0558, AQo:0.0638, K2s:0.0814, K3s:0.0013, K4s:0.0005, K5s:0.0286, K6s:0.2476, K7s:0.0009, K9s:0.0212, KTs:0.0017, KJs:0.0689, AKo:0.0759, A3s:0.0013, A4s:0.0014, A5s:0.0006, A6s:0.0765, A7s:0.0907, A8s:0.0227, A9s:0.0039, ATs:0.0042, AJs:0.0006, AQs:0.1592, AKs:0.6287, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3353, A2o:0.0028, 33:0.0001, A3o:0.0029, 44:0.3827, A4o:0.076, 54s:0.004, 55:0.0276, A5o:0.0685, 64s:0.002, 65s:0.0005, 66:0.1149, A6o:0.0001, 76s:0.0255, 77:0.2872, A7o:0.0004, 87s:0.014, 88:0.3449, A8o:0.0004, 96s:0.0002, 98s:0.0238, 99:0.2864, A9o:0.0044, T9s:0.0119, TT:0.02, QTo:0.0001, ATo:0.1017, J9s:0.1506, JTs:0.0784, JJ:0.2307, AJo:0.4044, Q2s:0.0001, Q3s:0.0002, Q8s:0.0002, Q9s:0.0001, QTs:0.1536, QJs:0.7548, QQ:0.9048, KQo:0.0001, AQo:0.3625, K4s:0.0001, K5s:0.0001, K6s:0.0002, K7s:0.0042, K9s:0.0035, KTs:0.0018, KJs:0.229, KQs:0.3501, KK:0.1598, AKo:0.9089, A2s:0.998, A3s:0.9087, A4s:0.8904, A5s:0.7216, A6s:0.8761, A7s:0.7697, A8s:0.8078, A9s:0.6569, ATs:0.3837, AJs:0.4103, AQs:0.0753, AKs:0.3262"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0549, A3o:0.0045, A4o:0.1401, A5o:0.0764, A6o:0.0431, A7o:0.0294, A8o:0.0315, 96s:0.0001, 99:0.0001, A9o:0.0043, T5s:0.0001, T9s:0.0002, TT:0.0001, ATo:0.0147, J3s:0.0001, JJ:0.0001, AJo:0.0133, Q3s:0.0004, Q5s:0.0002, Q7s:0.0007, Q9s:0.0004, QTs:0.0001, QQ:0.4171, AQo:0.5922, K2s:0.0001, K3s:0.0005, K4s:0.0005, K6s:0.0021, K7s:0.0009, K9s:0.0012, KTs:0.0002, KJs:0.0077, KQs:0.0005, KK:0.0622, AKo:0.0615, A2s:0.1603, A3s:0.0253, A4s:0.0252, A5s:0.0717, A6s:0.151, A7s:0.1847, A8s:0.0419, A9s:0.1726, ATs:0.0258, AJs:0.0551, AQs:0.2888, AKs:0.3177, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.173, A3o:0.1238, 43s:0.0001, A4o:0.0223, 55:0.0005, A5o:0.2314, 66:0.0203, A6o:0.0085, 76s:0.0004, A7o:0.0042, 84s:0.0002, 88:0.0127, A8o:0.09, 97s:0.0002, A9o:0.02, TT:0.0013, ATo:0.0884, J9s:0.0001, JJ:0.0745, AJo:0.011, Q9s:0.0012, QQ:0.3996, KQo:0.0001, AQo:0.2405, K2s:0.0002, K6s:0.004, K7s:0.0103, K9s:0.0001, KTs:0.0012, KQs:0.0001, KK:0.9378, AKo:0.9384, A2s:0.615, A3s:0.7707, A4s:0.7167, A5s:0.7283, A6s:0.6178, A7s:0.627, A8s:0.7431, A9s:0.362, ATs:0.6576, AJs:0.6689, AQs:0.711, AKs:0.6823"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.054, A3o:0.01, Q4o:0.0001, A4o:0.1481, A5o:0.0644, 63s:0.0001, 64s:0.0005, A6o:0.0154, 72s:0.0001, A7o:0.1007, 87s:0.0004, A8o:0.0448, A9o:0.0021, T3s:0.0007, ATo:0.0054, J2s:0.0004, J6s:0.0001, J9s:0.0025, JJ:0.0009, AJo:0.031, Q4s:0.0001, Q6s:0.0009, Q9s:0.0004, QTs:0.0005, QJs:0.0002, QQ:0.0712, KQo:0.0001, AQo:0.7833, K2s:0.0001, K4s:0.0063, K7s:0.0209, KTs:0.0001, KJs:0.0032, KQs:0.0429, KK:0.2748, AKo:0.0387, A2s:0.012, A3s:0.0072, A4s:0.0448, A5s:0.0127, A6s:0.0685, A7s:0.048, A8s:0.1768, A9s:0.1599, ATs:0.0046, AJs:0.001, AQs:0.4959, AKs:0.3817, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1535, A3o:0.0167, 43s:0.0006, 44:0.0128, A4o:0.1382, A5o:0.0783, 63s:0.0017, 64s:0.0001, 65s:0.0035, 66:0.0179, A6o:0.0036, 74s:0.0002, 77:0.0167, A7o:0.047, 86s:0.0018, 87s:0.0255, 88:0.0002, A8o:0.0044, 97s:0.0008, 98s:0.0003, 99:0.0001, A9o:0.0468, T9s:0.0002, TT:0.0453, ATo:0.114, J3s:0.0002, J9s:0.0004, JJ:0.3681, AJo:0.2555, Q6s:0.0011, Q9s:0.0001, QJs:0.0049, QQ:0.9247, KQo:0.0007, AQo:0.1105, K4s:0.0022, K5s:0.0019, K7s:0.0018, KTs:0.0016, KJs:0.069, KQs:0.2181, KK:0.7252, AKo:0.9613, A2s:0.9805, A3s:0.9921, A4s:0.8482, A5s:0.6977, A6s:0.9289, A7s:0.8768, A8s:0.8165, A9s:0.7618, ATs:0.9028, AJs:0.9866, AQs:0.504, AKs:0.6183"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0235, 66:0.0246, 77:0.034, 88:0.0374, 99:0.0361, TT:0.0111, JJ:0.0431, QQ:0.098, KQo:0.0635, K3s:0.0001, K4s:0.0058, K5s:0.0803, K6s:0.0461, K7s:0.0069, K8s:0.0067, K9s:0.0315, KTs:0.021, KJs:0.0437, KQs:0.0491, A3s:0.0118, A4s:0.0224, A5s:0.0017, A6s:0.0488, A7s:0.0001, A8s:0.0473, A9s:0.0075, ATs:0.3254, AJs:0.505, AQs:0.2961"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0005, A4o:0.1025, K5o:0.0005, A5o:0.0845, K6o:0.0009, A6o:0.0369, K7o:0.0005, A7o:0.0028, 87s:0.0001, K8o:0.0013, A8o:0.0335, A9o:0.0193, KTo:0.0001, ATo:0.2186, KJo:0.0001, AJo:0.0356, AQo:0.3325, K2s:0.002, K3s:0.0012, K5s:0.0291, K7s:0.0012, K8s:0.0004, AKo:0.0244, A2s:0.001, A3s:0.0706, A4s:0.0268, A5s:0.0485, A6s:0.2032, A7s:0.1507, A8s:0.0247, A9s:0.0035, ATs:0.1447, AJs:0.2077, AQs:0.3933, AKs:0.3817, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, 33:0.0007, 44:0.0033, 55:0.0601, A5o:0.0002, 66:0.2336, 77:0.4515, A7o:0.0002, 86s:0.0008, 88:0.4182, A8o:0.0008, 99:0.3711, TT:0.6693, KTo:0.0055, ATo:0.0009, J4s:0.0001, JTs:0.0002, JJ:0.8836, KJo:0.3639, QJs:0.0002, QQ:0.9016, KQo:0.0775, AQo:0.0016, K2s:0.0512, K3s:0.0612, K4s:0.1497, K5s:0.2363, K6s:0.894, K7s:0.9292, K8s:0.5922, K9s:0.9019, KTs:0.9786, KJs:0.9556, KQs:0.9508, KK, AKo:0.9756, A2s:0.2279, A3s:0.115, A4s:0.5724, A5s:0.9465, A6s:0.4757, A7s:0.7718, A8s:0.6484, A9s:0.9584, ATs:0.5067, AJs:0.2872, AQs:0.3101, AKs:0.6183"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.0274, A3o:0.0001, K4o:0.0088, A4o:0.0291, K5o:0.0164, A5o:0.0316, 66:0.0001, A6o:0.0002, 77:0.0001, K7o:0.0288, A8o:0.0341, A9o:0.0603, TT:0.0005, KTo:0.0087, ATo:0.0289, J3s:0.0001, JJ:0.0004, KJo:0.0032, AJo:0.1643, QQ:0.1778, KQo:0.0001, AQo:0.1029, K2s:0.0802, K4s:0.0949, K5s:0.0951, K6s:0.0008, K8s:0.1272, K9s:0.1109, KJs:0.0027, KQs:0.0273, KK:0.0002, AKo:0.0015, A2s:0.0002, A3s:0.0483, A4s:0.0148, A5s:0.3972, A6s:0.0089, A7s:0.0849, A8s:0.0081, A9s:0.0001, ATs:0.5582, AJs:0.0705, AQs:0.1217, AKs:0.4266, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0002, 88:0.0042, TT:0.0014, JJ:0.0017, QQ:0.0007, K3s:0.0002, K4s:0.0003, K6s:0.0188, K7s:0.0001, K8s:0.016, K9s:0.0023, KTs:0.0983, KJs:0.0269, KQs:0.1069, KK:0.9997, AKo:0.9985, A2s:0.0007, A3s:0.0005, A4s:0.0014, A5s:0.0109, A6s:0.0031, A7s:0.0002, A8s:0.002, A9s:0.0001, ATs:0.0236, AQs:0.0042, AKs:0.5733, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0013, A3o:0.0003, K4o:0.0003, A4o:0.0113, K5o:0.0009, A5o:0.0021, K6o:0.0002, A6o:0.0306, 77:0.0066, A7o:0.0063, 83s:0.0002, A8o:0.0173, K9o:0.0001, A9o:0.059, TT:0.0579, KTo:0.0006, ATo:0.2487, J5s:0.0001, J6s:0.0001, JJ:0.0205, KJo:0.0009, AJo:0.0153, QQ:0.2533, AQo:0.0919, K2s:0.0015, K3s:0.3034, K4s:0.0043, K5s:0.0005, K6s:0.0346, K7s:0.0362, K8s:0.0688, K9s:0.0011, KTs:0.0002, KJs:0.0422, KQs:0.0353, KK:0.0007, AKo:0.0017, A2s:0.0094, A3s:0.0021, A4s:0.1724, A5s:0.0876, A6s:0.222, A7s:0.061, A8s:0.1238, A9s:0.0093, ATs:0.0565, AJs:0.088, AQs:0.299, AKs:0.307, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0026, 65s:0.0002, 66:0.0265, 77:0.0332, 88:0.0262, 99:0.0423, TT:0.1331, JJ:0.0011, QQ:0.0013, K2s:0.0015, K3s:0.0132, K4s:0.0039, K5s:0.1733, K6s:0.1761, K7s:0.1284, K8s:0.4614, K9s:0.256, KTs:0.4142, KJs:0.3456, KQs:0.4784, KK:0.9993, AKo:0.9982, A2s:0.0009, A3s:0.0029, A4s:0.1153, A5s:0.1737, A6s:0.0509, A7s:0.029, A9s:0.0005, ATs:0.0108, AJs:0.0084, AQs:0.0147, AKs:0.6929"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0039, 44:0.0808, 54s:0.0001, 55:0.2088, 66:0.1275, 77:0.2064, 87s:0.0005, 88:0.1234, 99:0.2782, T6s:0.0001, T9s:0.0005, TT:0.4249, JJ:0.7548, AJo:0.0005, Q8s:0.0002, QTs:0.0041, QJs:0.0213, AQo:0.0001, K5s:0.0002, KTs:0.0716, KJs:0.09, A3s:0.0001, A6s:0.0008, A7s:0.0003, A8s:0.0212, A9s:0.0361, ATs:0.7572, AJs:0.6334, AQs:0.0002"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0006, Q2o:0.0002, A2o:0.1082, 33:0.0008, Q3o:0.0001, A3o:0.2053, 43s:0.0029, 44:0.0032, K4o:0.0002, A4o:0.0489, Q5o:0.0003, K5o:0.0002, A5o:0.2994, 65s:0.008, 66:0.0128, K6o:0.0244, A6o:0.1384, 75s:0.0001, 76s:0.0001, 77:0.0009, Q7o:0.0003, A7o:0.0312, 82s:0.0008, 87s:0.0001, 88:0.0366, K8o:0.0004, A8o:0.173, 92s:0.0001, K9o:0.0351, A9o:0.0283, T9s:0.0001, TT:0.0569, KTo:0.0044, ATo:0.0017, JJ:0.224, QJo:0.0026, KJo:0.0086, AJo:0.5997, Q2s:0.0004, Q3s:0.0031, Q4s:0.0072, Q5s:0.0023, Q6s:0.0018, Q7s:0.0012, Q8s:0.0136, Q9s:0.0002, QTs:0.212, QJs:0.0003, QQ:0.0019, AQo:0.1741, K2s:0.0469, K3s:0.0235, K4s:0.0482, K5s:0.0628, K6s:0.0131, K7s:0.0714, K8s:0.0034, K9s:0.0018, KJs:0.0159, KK:0.1616, AKo:0.0087, A2s:0.1284, A3s:0.0015, A4s:0.0149, A5s:0.0371, A6s:0.2383, A7s:0.0968, A8s:0.0138, A9s:0.0248, ATs:0.0052, AJs:0.034, AQs:0.0031, AKs:0.4252, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0763, 33:0.2996, A3o:0.162, 44:0.5848, A4o:0.5612, 54s:0.0057, 55:0.0402, A5o:0.413, 66:0.562, 77:0.1323, 87s:0.0008, 88:0.0211, 97s:0.0006, 99:0.0022, T8s:0.0001, QTo:0.0004, JJ:0.0212, QJo:0.0209, AJo:0.0001, Q2s:0.4001, Q3s:0.5808, Q4s:0.4158, Q5s:0.6148, Q6s:0.5605, Q7s:0.6926, Q8s:0.7194, Q9s:0.7143, QTs:0.6, QJs:0.9766, QQ:0.9981, KQo:0.9999, AQo:0.8257, K2s:0.8443, K3s:0.9177, K4s:0.7699, K5s:0.7159, K6s:0.8994, K7s:0.5715, K8s:0.5354, K9s:0.7319, KTs:0.9192, KJs:0.8715, KQs:0.9999, KK:0.8384, AKo:0.9913, A2s:0.8043, A3s:0.9968, A4s:0.9838, A5s:0.9455, A6s:0.7526, A7s:0.8823, A8s:0.9478, A9s:0.9176, ATs:0.2073, AJs:0.3317, AQs:0.9967, AKs:0.5748"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9593, 33:0.6572, 42s:0.0557, 43s:0.4011, 44:0.4755, 52s:0.2407, 53s:0.9801, 54s:0.8274, 55:0.9589, 65o:0.0595, 63s:0.3845, 64s:0.9005, 65s:0.8845, 66:0.9868, 72s:0.0003, 73s:0.0001, 75s:0.9407, 76s:0.7613, 77:0.9995, 84s:0.0658, 85s:0.4708, 86s:0.7007, 87s:0.8887, 88:0.9882, 92s:0.0001, 95s:0.0139, 96s:0.8916, 97s:0.9607, 98s:0.9444, 99:0.9983, T4s:0.0002, T7s:0.0583, T8s:0.5269, T9s:0.781, TT:0.9988, ATo:0.4467, J4s:0.0051, J5s:0.0005, J6s:0.0001, J7s:0.4866, J8s:0.6854, J9s:0.9719, JTs:0.9486, JJ:0.8774, QJo:0.304, KJo:0.9648, AJo:0.6119, Q2s:0.0005, Q3s:0.0015, Q4s:0.0001, Q5s:0.0094, Q6s:0.0003, Q7s:0.0001, Q8s:0.2742, Q9s:0.2293, QTs:0.6529, QJs:0.2317, KQo:0.0001, K2s:0.0002, K3s:0.0075, K4s:0.0578, K5s:0.0031, K6s:0.167, K7s:0.0431, K8s:0.2138, K9s:0.5752, KTs:0.8823, KJs:0.8132, KQs:0.0002, A2s:0.0028, A3s:0.0034, A4s:0.0218, A5s:0.0057, A6s:0.0446, A7s:0.3779, A8s:0.351, A9s:0.9956, ATs:0.9666, AJs:0.9871, AQs:0.0001"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0108, A2o:0.154, 32s:0.0056, Q3o:0.0002, K3o:0.0106, A3o:0.091, 43s:0.0235, Q4o:0.0081, K4o:0.0001, A4o:0.0692, 53s:0.0001, 54s:0.0081, 65o:0.0002, K5o:0.0352, A5o:0.613, 63s:0.0897, 64s:0.0046, 65s:0.0443, K6o:0.0177, A6o:0.0768, 73s:0.0035, 76s:0.1955, K7o:0.0009, A7o:0.08, 84s:0.0001, 85s:0.0367, 86s:0.0958, Q8o:0.0001, A8o:0.014, 92s:0.0001, 93s:0.0001, 95s:0.0001, 97s:0.0014, Q9o:0.0002, A9o:0.0227, T2s:0.0001, T3s:0.0004, TT:0.0006, QTo:0.0003, KTo:0.0066, ATo:0.0348, J8s:0.1187, J9s:0.0004, JJ:0.1217, QJo:0.2436, KJo:0.0161, AJo:0.3864, Q2s:0.0028, Q3s:0.0001, Q5s:0.1184, Q6s:0.0022, Q7s:0.013, Q8s:0.0118, Q9s:0.0514, QJs:0.1288, QQ:0.0003, AQo:0.1637, K2s:0.0011, K3s:0.0034, K4s:0.0443, K5s:0.0261, K6s:0.0116, K7s:0.0016, K8s:0.0198, K9s:0.0389, KJs:0.0004, KK:0.1703, AKo:0.045, A2s:0.0003, A3s:0.0008, A4s:0.0215, A5s:0.0001, A6s:0.0002, A7s:0.3657, A8s:0.1168, A9s:0.0032, AJs:0.0046, AQs:0.1338, AKs:0.536, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0407, K2o:0.0001, A2o:0.0775, 32s:0.0001, 33:0.3427, Q3o:0.0116, A3o:0.2885, 44:0.5243, A4o:0.3069, 53s:0.0023, 54s:0.061, 55:0.0409, Q5o:0.0118, A5o:0.2863, 63s:0.0001, 65s:0.0606, 66:0.0131, K6o:0.0138, A6o:0.0035, 76s:0.0046, 77:0.0004, A7o:0.0123, 85s:0.0001, 86s:0.0006, 88:0.0117, A8o:0.0025, 98s:0.0008, 99:0.0001, A9o:0.0006, T8s:0.0001, TT:0.0001, QTo:0.0146, KTo:0.0001, ATo:0.0001, J8s:0.0003, JTs:0.0003, JJ:0.0009, QJo:0.0014, KJo:0.0016, AJo:0.0013, Q2s:0.9732, Q3s:0.9885, Q4s:0.9984, Q5s:0.7957, Q6s:0.9581, Q7s:0.9328, Q8s:0.5876, Q9s:0.607, QTs:0.3459, QJs:0.6386, QQ:0.9997, KQo:0.9999, AQo:0.8363, K2s:0.9982, K3s:0.987, K4s:0.8573, K5s:0.9691, K6s:0.7763, K7s:0.9547, K8s:0.7228, K9s:0.3635, KTs:0.1169, KJs:0.1852, KQs:0.9998, KK:0.8297, AKo:0.955, A2s:0.9951, A3s:0.9948, A4s:0.9525, A5s:0.994, A6s:0.9532, A7s:0.2516, A8s:0.5047, ATs:0.0315, AJs:0.0083, AQs:0.8661, AKs:0.464"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.4439, JJ:0.8379, QQ, KK, AKo, AQs:0.1113, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, TT:0.3251, JJ:0.0705, QQ, KK, AKo:0.9996, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.1789, 54s:0.7081, 55:0.5487, 64s:0.409, 65s:0.7412, 66:0.6293, 75s:0.0019, 76s:0.4408, 77:0.5479, 86s:0.0163, 87s:0.0005, 88:0.7683, 98s:0.0115, 99:0.8695, T8s:0.0008, T9s:0.325, TT:0.5884, ATo:0.0021, J9s:0.0001, JTs:0.5629, JJ:0.4435, KJo:0.0025, AJo:0.5755, Q9s:0.0001, QTs:0.1272, QJs:0.2229, QQ:0.9555, KQo:0.1876, AQo:0.8223, K4s:0.1062, K5s:0.0138, K6s:0.0385, K7s:0.3149, K8s:0.0045, K9s:0.2624, KTs:0.5509, KJs:0.5569, KQs:0.7849, A2s:0.0004, A4s:0.0048, A5s:0.5676, A6s:0.0151, A7s:0.0184, A8s:0.0082, A9s:0.7054, ATs:0.7594, AJs:0.7339, AQs:0.9973"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0104, A2o:0.6159, A3o:0.495, A4o:0.2081, 54s:0.0013, 55:0.0005, A5o:0.1144, 65s:0.001, A6o:0.0693, 76s:0.0017, 77:0.0004, A7o:0.1284, 87s:0.0002, A8o:0.1586, 98s:0.0006, 99:0.0017, A9o:0.0324, T8s:0.0009, TT:0.0004, KTo:0.0002, ATo:0.2097, JTs:0.0001, JJ:0.0003, KJo:0.0005, AJo:0.0482, Q4s:0.0003, Q8s:0.0001, QTs:0.0005, QJs:0.0023, AQo:0.1764, K2s:0.0875, K3s:0.0027, K4s:0.0178, K5s:0.0979, K6s:0.0005, K7s:0.0035, K8s:0.0139, K9s:0.0002, KK:0.001, AKo:0.0141, A2s:0.0049, A3s:0.1504, A4s:0.0008, A5s:0.0079, A6s:0.0008, A7s:0.0002, A8s:0.0002, A9s:0.0047, AJs:0.001, AQs:0.0024, AKs:0.8479, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0033, 33:0.0003, A3o:0.0002, 44:0.0306, A4o:0.0003, 55:0.0049, A5o:0.0062, 65s:0.0002, 66:0.0056, 73s:0.0001, 76s:0.0003, 77:0.2093, A7o:0.0001, 88:0.1958, 96s:0.0001, 99:0.0285, A9o:0.0001, T8s:0.0015, T9s:0.0001, TT:0.4062, KTo:0.0006, ATo:0.002, J9s:0.0001, JTs:0.0001, JJ:0.5561, KJo:0.0768, AJo:0.3585, Q6s:0.0001, Q9s:0.0004, QTs:0.0001, QJs:0.0095, QQ:0.0445, KQo:0.0263, AQo:0.0012, K2s:0.0001, K4s:0.2051, K5s:0.1601, K6s:0.2402, K7s:0.4783, K8s:0.1977, K9s:0.5759, KTs:0.4485, KJs:0.4429, KQs:0.2151, KK:0.999, AKo:0.9859, A2s:0.9942, A3s:0.8474, A4s:0.9926, A5s:0.4242, A6s:0.979, A7s:0.9814, A8s:0.9909, A9s:0.2898, ATs:0.2406, AJs:0.265, AQs:0.0003, AKs:0.1521"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.043, A3o:0.0231, A4o:0.1343, A5o:0.0186, A6o:0.023, K7o:0.0001, A7o:0.0218, 86s:0.0001, K8o:0.0001, A8o:0.0054, A9o:0.0008, TT:0.0002, ATo:0.009, JJ:0.0014, AJo:0.0014, Q5s:0.0001, QJs:0.0001, QQ:0.123, KQo:0.0004, AQo:0.4323, K2s:0.0032, K3s:0.0002, K4s:0.0006, K5s:0.0007, K8s:0.0003, KTs:0.0079, KJs:0.0003, KQs:0.003, KK:0.0004, AKo:0.0086, A2s:0.0061, A3s:0.0001, A4s:0.0541, A5s:0.0181, A6s:0.0058, A7s:0.1604, A8s:0.0117, A9s:0.0053, ATs:0.0044, AJs:0.0093, AQs:0.4122, AKs:0.1762, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0009, 77:0.0059, 88:0.0042, 99:0.004, TT:0.1435, JJ:0.0029, QTs:0.0001, QQ:0.1975, K2s:0.0235, K3s:0.0156, K4s:0.0006, K8s:0.0126, KTs:0.5636, KJs:0.1394, KQs:0.5724, KK:0.9996, AKo:0.9914, A2s:0.6443, A3s:0.2042, A4s:0.6555, A5s:0.5938, A6s:0.2182, A7s:0.6322, A8s:0.4821, A9s:0.3061, ATs:0.9063, AJs:0.0696, AQs:0.0994, AKs:0.8238"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.6954, 32s:0.983, 33:0.7628, 43o:0.7279, 53o:0.9993, 63o:0.0105, A3o:0.0054, 42s:0.9994, 43s:0.9973, 44:0.7517, 54o:0.9965, 64o:0.9917, K4o:0.0021, A4o:0.0405, 52s:0.9977, 53s:0.9994, 54s:0.9972, 55:0.6456, 65o:0.9987, 75o:0.9764, 85o:0.4356, K5o:0.1881, A5o:0.365, 62s:0.9967, 63s:0.9982, 64s:0.9997, 65s:0.9996, 66, 76o:0.9954, 86o:0.9887, 96o:0.2382, K6o:0.9909, A6o:0.2299, 72s:0.6515, 73s:0.9965, 74s:0.9977, 75s:0.995, 76s:0.9868, 77:0.9998, 87o:0.9988, 97o:0.9961, T7o:0.0775, Q7o:0.0861, K7o:0.9914, A7o:0.5459, 82s:0.857, 83s:0.998, 84s:0.9969, 85s:0.9903, 86s:0.9988, 87s:0.9982, 88, 98o:0.9945, T8o:0.9529, J8o:0.5206, Q8o:0.6194, K8o:0.9621, A8o:0.8519, 92s:0.9735, 93s:0.9647, 94s:0.942, 95s:0.9978, 96s:0.9985, 97s:0.9988, 98s:0.9998, 99, T9o:0.9735, J9o:0.9127, Q9o:0.9137, K9o:0.9898, A9o:0.8444, T2s:0.4134, T3s:0.9149, T4s:0.9896, T5s:0.993, T6s:0.9711, T7s:0.9899, T8s:0.999, T9s:0.9643, TT:0.9984, JTo:0.9971, QTo:0.9957, KTo:0.9986, ATo:0.9872, J2s:0.9404, J3s:0.8621, J4s:0.9483, J5s:0.9987, J6s:0.9914, J7s:0.9393, J8s:0.9948, J9s:0.9965, JTs:0.9952, JJ:0.6085, QJo:0.9104, KJo:0.9107, AJo:0.7527, Q2s:0.3306, Q3s:0.2464, Q4s:0.1255, Q5s:0.0257, Q6s:0.3259, Q7s:0.6209, Q8s:0.4061, Q9s:0.6969, QTs:0.9929, QJs:0.9003, KQo:0.473, K2s:0.9165, K3s:0.7427, K4s:0.9641, K5s:0.6685, K6s:0.9806, K7s:0.9816, K8s:0.9641, K9s:0.9986, KTs:0.9881, KJs:0.996, KQs:0.0728, A2s:0.1472, A3s:0.2009, A4s:0.4723, A5s:0.2026, A6s:0.9501, A7s:0.9983, A8s:0.9375, A9s:0.9981, ATs:0.9995, AJs:0.8404, AQs:0.0003"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0577, A2o:0.2982, 32s:0.0003, K3o:0.2218, A3o:0.2863, Q4o:0.0026, A4o:0.1407, 52s:0.0007, K5o:0.2267, A5o:0.4292, Q6o:0.0059, K6o:0.0038, A6o:0.5878, 74s:0.0003, 75s:0.0042, 76s:0.006, Q7o:0.0034, K7o:0.0027, A7o:0.4399, 82s:0.0001, 85s:0.0014, 86s:0.0011, 87s:0.0002, J8o:0.2047, Q8o:0.2352, K8o:0.0246, A8o:0.1367, 97s:0.0011, T9o:0.0009, Q9o:0.0733, K9o:0.0084, A9o:0.1547, T2s:0.0001, T3s:0.0022, T6s:0.0009, T7s:0.0042, T9s:0.0354, TT:0.0016, QTo:0.0022, KTo:0.0006, ATo:0.0125, J2s:0.0521, J3s:0.1253, J4s:0.0503, J5s:0.0001, J7s:0.0573, J8s:0.0009, J9s:0.0004, JTs:0.0044, JJ:0.3903, QJo:0.0828, KJo:0.0879, AJo:0.246, Q2s:0.0412, Q3s:0.0014, Q4s:0.0026, Q5s:0.0034, Q6s:0.0031, Q7s:0.0103, Q8s:0.0009, Q9s:0.0002, QTs:0.005, QJs:0.0689, QQ:0.0024, KQo:0.0168, K2s:0.0179, K3s:0.0003, K5s:0.0011, K6s:0.0001, K7s:0.0008, K8s:0.0001, K9s:0.0001, KTs:0.0118, KK, AKo:0.0027, A2s:0.0093, A3s:0.0147, A4s:0.0009, A5s:0.0005, A6s:0.0006, A7s:0.0004, A9s:0.0005, ATs:0.0004, AJs:0.1577, AQs:0.1126, AKs:0.8097, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3046, A2o:0.6876, 33:0.2372, K3o:0.0422, A3o:0.6898, 43s:0.0002, 44:0.2483, Q4o:0.0022, A4o:0.8032, 52s:0.0012, 54s:0.0022, 55:0.3544, K5o:0.0001, A5o:0.204, A6o:0.0327, 76s:0.0059, 77:0.0002, Q7o:0.0006, A7o:0.0003, Q8o:0.0016, A8o:0.0087, 96s:0.0003, A9o:0.0004, QTo:0.0004, J4s:0.0001, J5s:0.0001, J7s:0.0001, J8s:0.0006, J9s:0.0003, JTs:0.0003, JJ:0.0011, QJo:0.0066, KJo:0.0013, AJo:0.0012, Q2s:0.6259, Q3s:0.7473, Q4s:0.8691, Q5s:0.9702, Q6s:0.668, Q7s:0.3678, Q8s:0.5925, Q9s:0.3021, QTs:0.0017, QJs:0.0307, QQ:0.9976, KQo:0.5102, AQo, K2s:0.0648, K3s:0.2566, K4s:0.0358, K5s:0.3302, K6s:0.019, K7s:0.0174, K8s:0.0356, K9s:0.0006, KJs:0.0038, KQs:0.9271, AKo:0.9973, A2s:0.8431, A3s:0.7839, A4s:0.5266, A5s:0.7968, A6s:0.0491, A7s:0.0011, A8s:0.0624, A9s:0.0013, AJs:0.0019, AQs:0.8871, AKs:0.1902"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.7112, JJ:0.5802, QQ:0.9945, KK, AKo, AQs:0.0002, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.284, 33:0.0483, 43s:0.0056, 44:0.8006, 52s:0.0023, 53s:0.0452, 54s:0.4808, 55:0.9932, A5o:0.062, 64s:0.0008, 65s:0.5842, 66:0.9243, 75s:0.0633, 76s:0.2594, 77:0.8546, A7o:0.0003, 86s:0.0005, 87s:0.4332, 88:0.9889, 96s:0.0009, 98s:0.474, 99:0.8753, A9o:0.0001, T8s:0.0006, T9s:0.2161, TT:0.995, KTo:0.0005, ATo:0.2526, J7s:0.0002, J8s:0.0022, J9s:0.3578, JTs:0.9733, JJ:0.9975, AJo:0.7505, Q3s:0.0005, Q7s:0.0007, Q9s:0.0102, QTs:0.6187, QJs:0.4147, QQ:0.9993, KQo:0.0009, AQo:0.8418, K4s:0.0015, K5s:0.0081, K6s:0.005, K7s:0.011, K8s:0.0107, K9s:0.0883, KTs:0.8114, KJs:0.9906, KQs:0.6997, KK:0.9835, A2s:0.0904, A3s:0.6212, A4s:0.431, A5s:0.9842, A6s:0.6087, A7s:0.9381, A8s:0.717, A9s:0.9523, ATs:0.9693, AJs:0.9891, AQs:0.9877"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.7703, A3o:0.0594, A4o:0.9535, A5o:0.1306, A6o:0.569, A7o:0.092, A8o:0.2415, A9o:0.1651, TT:0.0002, ATo:0.184, J7s:0.0002, AJo:0.1753, QTs:0.0001, AQo:0.1469, K7s:0.0002, K8s:0.0001, K9s:0.0001, KK:0.0013, AKo:0.0092, A2s:0.0029, A3s:0.0484, A4s:0.1391, A5s:0.0002, A6s:0.2879, A7s:0.0002, A8s:0.0001, A9s:0.0015, ATs:0.002, AJs:0.01, AQs:0.011, AKs:0.777, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0003, A3o:0.0021, 42s:0.0001, 44:0.0002, A4o:0.0001, A5o:0.0016, 66:0.0011, 76s:0.0001, 77:0.002, 87s:0.0004, 88:0.0002, A8o:0.0011, 98s:0.0001, 99:0.0001, T8s:0.0001, T9s:0.0002, TT:0.0043, ATo:0.0053, JTs:0.0001, JJ:0.0002, AJo:0.0051, QQ:0.0006, AQo:0.0001, K5s:0.0001, K8s:0.0002, K9s:0.0006, KTs:0.0001, KQs:0.0004, KK:0.0151, AKo:0.9908, A2s:0.877, A3s:0.3104, A4s:0.4296, A5s:0.0155, A6s:0.1033, A7s:0.0614, A8s:0.2829, A9s:0.0456, ATs:0.0286, AJs:0.0009, AQs:0.0013, AKs:0.223"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.1862, TT:0.3718, JJ:0.2195, QQ:0.343, KK, AKo:0.7301, AKs:0.9674, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 55:0.0003, A5o:0.0001, 63s:0.0001, 66:0.0001, 77:0.0107, 84s:0.0001, 86s:0.0032, 88:0.0001, 96s:0.0001, 99:0.2792, T9o:0.0001, T9s:0.0001, TT:0.4751, J6s:0.0001, J7s:0.0004, JJ:0.0758, Q2s:0.0001, Q4s:0.0001, Q8s:0.0002, QTs:0.0001, QJs:0.0002, QQ:0.8248, K6s:0.0001, KJs:0.0001, KK:0.9998, AKo:0.1088, A3s:0.0005, A5s:0.0002, A7s:0.0001, A8s:0.0004, A9s:0.0006, ATs:0.0001, AJs:0.002, AQs:0.001, AKs:0.2415, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0007, 55:0.0052, 77:0.0227, 82s:0.0001, 86s:0.0004, 88:0.027, 99:0.0001, T5s:0.0001, T9s:0.0001, TT:0.5088, J2s:0.0001, J5s:0.0001, JTs:0.0006, JJ:0.7344, QJo:0.0001, Q5s:0.0002, Q7s:0.0003, QTs:0.0002, QQ:0.2998, K3s:0.0004, K7s:0.0001, K8s:0.0001, KTs:0.0002, KQs:0.0001, KK, AKo:0.2453, A5s:0.0003, ATs:0.0005, AQs:0.0002, AKs:0.4058, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0107, 33:0.0013, 43s:0.0002, 44:0.0348, 54s:0.0003, 55:0.2004, A5o:0.0003, 65s:0.0157, 66:0.852, 73s:0.0001, 76s:0.8264, 77:0.7286, A7o:0.0002, 86s:0.0105, 87s:0.0015, 88:0.2493, A8o:0.0007, 97s:0.002, 98s:0.0027, 99:0.5138, T7s:0.0001, T9s:0.4108, TT:0.6865, ATo:0.0018, J3s:0.0001, J9s:0.0215, JTs:0.1133, JJ:0.291, AJo:0.1422, Q7s:0.0004, Q8s:0.0002, Q9s:0.0547, QTs:0.4365, QJs:0.1364, QQ:0.4342, KQo:0.0001, AQo:0.5797, K5s:0.0025, K6s:0.0342, K7s:0.0134, K8s:0.0001, K9s:0.0088, KTs:0.2856, KJs:0.7354, KQs:0.717, KK:0.3115, AKo:0.0004, A2s:0.0038, A3s:0.1091, A4s:0.047, A5s:0.1388, A6s:0.1871, A7s:0.0752, A8s:0.0934, A9s:0.3675, ATs:0.9164, AJs:0.8835, AQs:0.9873, AKs:0.0001"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0016, A2o:0.1287, 32s:0.0116, 33:0.0223, A3o:0.4709, 43s:0.0765, 44:0.0959, A4o:0.7262, 52s:0.0002, A5o:0.0514, 64s:0.0009, 65s:0.0003, 66:0.0013, 86o:0.0001, A6o:0.0241, 76s:0.011, 77:0.0428, A7o:0.1758, 82s:0.0003, 85s:0.0001, 86s:0.0042, 87s:0.0003, 88:0.0014, A8o:0.1458, 98s:0.0011, A9o:0.0003, T4s:0.0001, T7s:0.0001, T9s:0.0003, TT:0.0246, ATo:0.0136, J3s:0.0001, J7s:0.0004, J8s:0.0007, J9s:0.0002, JTs:0.0003, JJ:0.0026, AJo:0.0249, Q6s:0.0001, Q8s:0.001, QTs:0.0028, QJs:0.0027, QQ:0.0001, KQo:0.0101, AQo:0.4155, K2s:0.0133, K3s:0.0559, K4s:0.0181, K5s:0.0014, K6s:0.0739, K7s:0.0459, K8s:0.1246, K9s:0.0098, KTs:0.0003, KJs:0.0001, KQs:0.0011, AKo:0.0006, A2s:0.0294, A3s:0.0348, A4s:0.0012, A5s:0.0009, A6s:0.216, A7s:0.0507, A8s:0.2406, A9s:0.0027, ATs:0.0074, AJs:0.0004, AQs:0.0095, AKs:0.6075, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.5552, A2o:0.0016, 33:0.7285, A3o:0.0016, 44:0.7565, A4o:0.0018, 54s:0.0003, 55:0.7171, A5o:0.0012, 65s:0.0009, 66:0.1427, 75s:0.0007, 76s:0.0007, 77:0.2232, A7o:0.0001, 85s:0.0006, 86s:0.0005, 87s:0.0049, 88:0.7463, A8o:0.0009, 97s:0.0001, 98s:0.0024, 99:0.4822, T4s:0.0002, T9s:0.001, TT:0.2876, ATo:0.0002, J8s:0.0001, J9s:0.0022, JTs:0.0048, JJ:0.7059, AJo:0.395, Q6s:0.0001, Q9s:0.0051, QTs:0.0906, QJs:0.0371, QQ:0.5657, AQo:0.0048, K3s:0.0001, K4s:0.0001, K7s:0.0001, KTs:0.0023, KJs:0.0385, KQs:0.1041, KK:0.6885, AKo:0.999, A2s:0.9542, A3s:0.8258, A4s:0.944, A5s:0.8589, A6s:0.5933, A7s:0.8324, A8s:0.6484, A9s:0.6255, ATs:0.0751, AJs:0.1145, AQs:0.0032, AKs:0.3924"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0262, A3o:0.0058, A4o:0.0712, A5o:0.0088, 65s:0.0001, A6o:0.0016, A7o:0.0071, 88:0.0051, A8o:0.0204, 96s:0.0001, K9o:0.0005, A9o:0.0006, T2s:0.0003, T9s:0.0006, TT:0.0036, ATo:0.0014, JJ:0.0044, QJo:0.0001, KJo:0.0001, AJo:0.0014, Q8s:0.0004, Q9s:0.0004, QTs:0.0001, QQ:0.1448, KQo:0.0017, AQo:0.3737, K3s:0.0009, K4s:0.0028, K6s:0.0105, K7s:0.0218, K9s:0.0012, KQs:0.0057, KK:0.2418, AKo:0.0033, A2s:0.1761, A3s:0.0152, A4s:0.139, A5s:0.0573, A6s:0.3937, A7s:0.1584, A8s:0.0524, A9s:0.0771, ATs:0.0123, AJs:0.0257, AQs:0.4632, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.1355, 65s:0.001, 66:0.0023, A6o:0.0001, 88:0.0146, A8o:0.0006, TT:0.0412, ATo:0.0002, JJ:0.0278, QQ:0.0058, AQo:0.0005, K7s:0.0003, KK:0.7582, AKo:0.9967, A2s:0.4391, A3s:0.5116, A4s:0.619, A5s:0.6432, A6s:0.1057, A7s:0.405, A8s:0.3052, A9s:0.237, ATs:0.38, AJs:0.7633, AQs:0.0017, AKs:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0197, Q3o:0.0002, A3o:0.0162, 43s:0.0001, A4o:0.0968, A5o:0.0023, 64s:0.0008, 75s:0.0001, K7o:0.0001, A7o:0.0178, 88:0.0241, A8o:0.0286, 99:0.0002, A9o:0.0271, T4s:0.0003, TT:0.0141, KTo:0.0001, ATo:0.0102, J2s:0.0002, JJ:0.0364, AJo:0.0005, Q4s:0.0001, QTs:0.0013, QJs:0.0001, QQ:0.6757, AQo:0.5902, K2s:0.0001, K3s:0.0019, K4s:0.0012, K7s:0.0001, K8s:0.0005, KJs:0.0002, KQs:0.0673, KK:0.0412, AKo:0.002, A2s:0.119, A3s:0.0423, A5s:0.1265, A6s:0.1529, A7s:0.3492, A8s:0.2214, A9s:0.0624, ATs:0.0122, AJs:0.172, AQs:0.6412, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.001, A2o:0.0009, 33:0.0082, A3o:0.0197, 44:0.0026, A4o:0.0028, 55:0.0046, 62s:0.0002, 63s:0.0005, 64s:0.0026, 66:0.0356, 74s:0.0001, 76s:0.0002, 77:0.1418, A7o:0.009, 86s:0.0001, 87s:0.0137, 88:0.2272, 95s:0.0001, 97s:0.001, 98s:0.0039, 99:0.1328, T2s:0.0002, T8s:0.0001, T9s:0.0027, TT:0.0496, KTo:0.0001, JJ:0.1745, QTs:0.0001, QQ:0.2756, AQo:0.0034, KTs:0.0001, KJs:0.0028, KQs:0.0005, KK:0.9588, AKo:0.998, A2s:0.6025, A3s:0.1952, A4s:0.8053, A5s:0.4564, A6s:0.0856, A7s:0.2812, A8s:0.3122, A9s:0.3968, ATs:0.1445, AJs:0.3188, AQs:0.3494, AKs, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.006, 66:0.0633, 77:0.0047, 88:0.0179, 99:0.0167, JJ:0.0042, QQ:0.1295, KQo:0.0002, K4s:0.0001, K7s:0.0043, K8s:0.0001, K9s:0.0002, KTs:0.1491, KJs:0.0073, KQs:0.1271, A5s:0.0011, A6s:0.0004, A7s:0.0057, A8s:0.0007, A9s:0.0027, ATs:0.0813, AJs:0.2525, AQs:0.1559"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.1267, K3o:0.0001, A3o:0.338, A4o:0.0027, A5o:0.0556, A6o:0.0089, 73s:0.0001, 77:0.0001, A7o:0.0004, A8o:0.0097, 99:0.0037, A9o:0.0117, TT:0.024, KTo:0.0028, ATo:0.066, JJ:0.0091, KJo:0.0076, AJo:0.1184, QQ:0.0198, AQo:0.2648, K2s:0.0022, K5s:0.0001, K7s:0.0001, KJs:0.0003, AKo:0.0006, A2s:0.0607, A3s:0.0716, A4s:0.0006, A5s:0.0911, A6s:0.1649, A7s:0.0097, A8s:0.09, A9s:0.2603, ATs:0.2259, AJs:0.335, AQs:0.7744, AKs:0.0395, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0168, 33:0.0081, 44:0.0245, 55:0.3017, A5o:0.0001, 66:0.2378, 77:0.4378, K7o:0.0001, 88:0.681, 99:0.7016, K9o:0.0002, TT:0.9324, KTo:0.0011, ATo:0.0001, JJ:0.9677, KJo:0.0061, AJo:0.0001, QQ:0.8504, K2s:0.0009, K3s:0.0014, K4s:0.0189, K5s:0.0356, K6s:0.1674, K7s:0.3476, K8s:0.459, K9s:0.3171, KTs:0.8391, KJs:0.929, KQs:0.7897, KK, AKo:0.9994, A2s:0.2052, A3s:0.2093, A4s:0.3936, A5s:0.8218, A6s:0.2042, A7s:0.4168, A8s:0.2908, A9s:0.3347, ATs:0.5056, AJs:0.3271, AQs:0.0245, AKs:0.9605"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0007, A3o:0.007, K4o:0.0003, A4o:0.0014, 55:0.0006, A5o:0.0227, 77:0.0033, K7o:0.0003, A7o:0.0089, 88:0.0036, A8o:0.0284, 99:0.0024, K9o:0.0024, TT:0.0466, KTo:0.0002, ATo:0.0013, J6s:0.0001, JJ:0.0125, AJo:0.0008, QQ:0.1293, KQo:0.0109, AQo:0.0393, K2s:0.1283, K3s:0.018, K4s:0.0251, K5s:0.0074, K6s:0.1335, K7s:0.1181, K8s:0.0001, K9s:0.0043, KTs:0.1349, KJs:0.0027, KQs:0.015, KK:0.0004, AKo:0.1668, A2s:0.042, A3s:0.0018, A4s:0.0227, A5s:0.0511, A6s:0.2545, A7s:0.171, A8s:0.1358, A9s:0.1563, ATs:0.1849, AJs:0.1013, AQs:0.3403, AKs:0.1075, AA:0.9995"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0005, 77:0.0005, JJ:0.0019, QQ:0.001, K3s:0.0016, K4s:0.004, K5s:0.0008, K6s:0.0129, K7s:0.0185, K8s:0.0716, K9s:0.0169, KTs:0.0228, KJs:0.0251, KQs:0.023, KK:0.9996, AKo:0.8332, A2s:0.0002, A3s:0.0016, A4s:0.0037, A5s:0.0001, A6s:0.0282, A7s:0.0015, A8s:0.0003, A9s:0.0014, AKs:0.8925, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.025, K3o:0.0008, A3o:0.0258, A4o:0.0026, 53s:0.0006, A5o:0.0023, A7o:0.0001, 88:0.0502, A8o:0.0197, A9o:0.0075, TT:0.1174, KTo:0.0016, ATo:0.0826, JJ:0.1049, KJo:0.0136, AJo:0.0193, QQ:0.183, KQo:0.0073, AQo:0.0376, K2s:0.0014, K3s:0.0009, K4s:0.0803, K5s:0.0015, K6s:0.0354, K7s:0.0001, K8s:0.0014, K9s:0.0009, KTs:0.0008, KJs:0.1341, KQs:0.0022, KK:0.0001, AKo:0.1152, A2s:0.0037, A3s:0.0047, A4s:0.0485, A5s:0.0886, A6s:0.0327, A7s:0.021, A8s:0.0189, A9s:0.1495, ATs:0.1751, AJs:0.1565, AQs:0.3075, AKs:0.4611, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0004, 97s:0.0001, 99:0.0006, T7s:0.0001, TT:0.0013, JTs:0.0003, JJ:0.0004, QQ:0.0044, K3s:0.0007, K4s:0.0002, K6s:0.0007, K7s:0.0014, KTs:0.0131, KJs:0.0085, KQs:0.0373, KK:0.9999, AKo:0.8848, A2s:0.0037, A4s:0.0005, A5s:0.0332, A7s:0.0002, A9s:0.0088, ATs:0.0012, AJs:0.0004, AQs:0.0007, AKs:0.5389"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0629, 33:0.1913, 44:0.1473, 52s:0.0003, 55:0.2239, 65s:0.1564, 66:0.3728, 73s:0.0001, 76s:0.1133, 77:0.231, 88:0.7064, 96s:0.0007, 99:0.5911, TT:0.938, JJ:0.7685, AJo:0.0002, QTs:0.1462, QJs:0.1709, QQ:0.001, KQo:0.0443, AQo:0.0403, KTs:0.1202, KJs:0.4241, KQs:0.0029, AKo:0.0001, A4s:0.0245, A5s:0.0029, A6s:0.0004, A9s:0.0288, ATs:0.3983, AJs:0.9677, AQs:0.0183"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0032, Q2o:0.0001, A2o:0.0371, 33:0.0001, K3o:0.0003, A3o:0.1999, A4o:0.1782, 53s:0.0002, Q5o:0.0005, A5o:0.1011, 64s:0.0003, 66:0.0036, K6o:0.0001, A6o:0.0207, A7o:0.0118, 83s:0.0001, K8o:0.002, A8o:0.012, 95s:0.0002, 96s:0.0001, 99:0.0184, A9o:0.009, T4s:0.0001, TT:0.0053, KTo:0.0003, ATo:0.0001, JJ:0.2269, KJo:0.0323, AJo:0.5569, Q2s:0.0002, Q3s:0.0001, Q4s:0.006, Q7s:0.0132, Q9s:0.0003, QTs:0.0002, QJs:0.0131, QQ:0.0037, KQo:0.018, AQo:0.3588, K2s:0.1197, K3s:0.1106, K4s:0.0418, K5s:0.0002, K6s:0.1234, K7s:0.0282, K8s:0.0073, K9s:0.0045, KTs:0.0004, KJs:0.0214, KQs:0.0008, KK:0.197, AKo:0.0436, A2s:0.1998, A3s:0.0842, A4s:0.0635, A5s:0.0564, A6s:0.1591, A7s:0.2026, A8s:0.241, A9s:0.0939, ATs:0.1065, AJs:0.0105, AQs:0.015, AKs:0.1289, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2624, A2o:0.0316, 33:0.337, A3o:0.0706, 43s:0.0002, 44:0.656, A4o:0.1379, 54s:0.0008, 55:0.3946, A5o:0.2669, 66:0.5177, 76s:0.1355, 77:0.3359, 87s:0.0001, 88:0.2737, 99:0.2608, KTo:0.0001, JJ:0.0045, KJo:0.0001, AJo:0.0035, Q2s:0.0011, Q3s:0.1629, Q4s:0.2076, Q5s:0.1102, Q6s:0.3364, Q7s:0.3916, Q8s:0.4252, Q9s:0.389, QTs:0.228, QJs:0.5043, QQ:0.9953, KQo:0.9372, AQo:0.6006, K2s:0.4542, K3s:0.2625, K4s:0.5629, K5s:0.3706, K6s:0.5087, K7s:0.4431, K8s:0.2476, K9s:0.4785, KTs:0.3181, KJs:0.5073, KQs:0.9961, KK:0.803, AKo:0.9563, A2s:0.6411, A3s:0.6626, A4s:0.6671, A5s:0.7689, A6s:0.5478, A7s:0.471, A8s:0.3486, A9s:0.4621, ATs:0.2257, AJs:0.0203, AQs:0.9667, AKs:0.8711"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.6386, 32s:0.0039, 33:0.5882, 42s:0.0004, 43s:0.8034, 44:0.359, 54o:0.1319, 52s:0.7958, 53s:0.9608, 54s:0.9033, 55:0.6084, 65o:0.7, 63s:0.9729, 64s:0.9303, 65s:0.9351, 66:0.7159, 86o:0.0008, 73s:0.0003, 74s:0.1554, 75s:0.5589, 76s:0.9421, 77:0.6558, 83s:0.0002, 85s:0.8799, 86s:0.941, 87s:0.9894, 88:0.9991, 95s:0.0004, 96s:0.8577, 97s:0.9875, 98s:0.9711, 99:0.9921, T4s:0.0002, T5s:0.0002, T6s:0.0001, T7s:0.2577, T8s:0.9191, T9s:0.8764, TT:0.9994, KTo:0.1177, ATo:0.051, J4s:0.0004, J6s:0.068, J7s:0.0001, J8s:0.78, J9s:0.7944, JTs:0.983, JJ:0.8011, QJo:0.4084, KJo:0.8886, AJo:0.9614, Q3s:0.0002, Q4s:0.0032, Q5s:0.1062, Q6s:0.1408, Q7s:0.1162, Q8s:0.3032, Q9s:0.5461, QTs:0.6486, QJs:0.7941, KQo:0.0731, AQo:0.1155, K2s:0.0218, K3s:0.2566, K4s:0.2782, K5s:0.3828, K6s:0.54, K7s:0.4194, K8s:0.6567, K9s:0.9772, KTs:0.6061, KJs:0.6922, KQs:0.0034, A2s:0.1642, A3s:0.1523, A4s:0.0328, A5s:0.2168, A6s:0.2899, A7s:0.3942, A8s:0.5694, A9s:0.7506, ATs:0.7848, AJs:0.9989, AQs:0.6062"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0051, A3o:0.2458, 42s:0.0001, 43s:0.0015, Q4o:0.0001, A4o:0.1357, 54s:0.0002, Q5o:0.0002, A5o:0.2166, 62s:0.0001, A6o:0.1778, 74s:0.0002, 75s:0.0001, A7o:0.1138, 86s:0.0001, A8o:0.0432, 96s:0.0001, Q9o:0.0001, A9o:0.0295, T3s:0.0001, T7s:0.0001, TT:0.0004, QTo:0.0001, ATo:0.0703, J9s:0.0001, JJ:0.1986, QJo:0.0415, AJo:0.0335, Q3s:0.0102, Q4s:0.0004, Q5s:0.005, Q6s:0.0304, Q7s:0.0146, Q8s:0.0265, Q9s:0.0005, QTs:0.0001, QQ:0.0386, KQo:0.0006, AQo:0.4588, K2s:0.0035, K4s:0.0004, K5s:0.0947, K6s:0.0009, K7s:0.0265, K8s:0.0031, KJs:0.008, KQs:0.0001, KK:0.021, AKo:0.0736, A2s:0.0663, A3s:0.0927, A4s:0.0253, A5s:0.0324, A6s:0.2471, A7s:0.2193, A8s:0.0318, A9s:0.0002, ATs:0.0003, AQs:0.0312, AKs:0.1293, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3613, K2o:0.0017, A2o:0.074, 32s:0.0064, 33:0.4118, A3o:0.2122, 42s:0.001, 43s:0.0005, 44:0.6407, 54o:0.0008, A4o:0.1994, 52s:0.0021, 53s:0.0025, 54s:0.0756, 55:0.3911, K5o:0.0021, A5o:0.2471, 64s:0.0512, 65s:0.0611, 66:0.284, K6o:0.0033, A6o:0.0238, 73s:0.0021, 74s:0.0007, 75s:0.0017, 76s:0.0456, 77:0.3441, A7o:0.022, 86s:0.0001, 87s:0.0003, 88:0.0008, A8o:0.0049, 97s:0.0001, 99:0.0072, TT:0.0002, JJ:0.0003, KJo:0.0008, AJo:0.0001, Q2s:0.2478, Q3s:0.3042, Q4s:0.4081, Q5s:0.387, Q6s:0.4917, Q7s:0.2991, Q8s:0.3594, Q9s:0.3546, QTs:0.3474, QJs:0.2, QQ:0.9614, KQo:0.9259, AQo:0.4256, K2s:0.4247, K3s:0.4278, K4s:0.6774, K5s:0.4203, K6s:0.4539, K7s:0.5406, K8s:0.2035, K9s:0.0185, KTs:0.3907, KJs:0.2992, KQs:0.9958, KK:0.979, AKo:0.9263, A2s:0.7685, A3s:0.7509, A4s:0.9398, A5s:0.7503, A6s:0.4595, A7s:0.3728, A8s:0.3906, A9s:0.2491, ATs:0.2128, AJs:0.0008, AQs:0.3626, AKs:0.8707"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1659, JJ:0.1243, QQ:0.1241, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0025, QQ:0.0001, KK, AKo:0.1665, AKs:0.8497, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0001, TT:0.0024, JJ:0.1089, QQ:0.0084, KK, AKo:0.4257, AKs:0.9618, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0102, TT:0.1169, JJ:0.2414, QQ:0.0254, KK, AKo:0.5644, AKs:0.8825, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.001, 33:0.0229, 43s:0.0001, 44:0.2429, 53s:0.0002, 54s:0.7292, 55:0.4409, 65s:0.356, 66:0.7861, 75s:0.0005, 76s:0.3718, 77:0.6771, 86s:0.2381, 87s:0.2761, 88:0.8831, A8o:0.0002, 98s:0.1521, 99:0.6195, T8s:0.2272, T9s:0.0424, TT:0.6972, J8s:0.0003, J9s:0.3036, JTs:0.3242, JJ:0.7627, KJo:0.0001, AJo:0.4178, Q9s:0.0532, QTs:0.1316, QJs:0.2102, QQ:0.5109, KQo:0.0001, AQo:0.727, K2s:0.0002, K3s:0.0001, K5s:0.0003, K8s:0.0495, K9s:0.2512, KTs:0.6334, KJs:0.7276, KQs:0.5395, KK:0.6562, AKo:0.1162, A3s:0.3471, A4s:0.2922, A5s:0.3399, A6s:0.1071, A7s:0.1931, A8s:0.4572, A9s:0.5855, ATs:0.7446, AJs:0.9009, AQs:0.8667, AKs:0.0741"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0044, K2o:0.001, A2o:0.1119, 32s:0.0001, 33:0.0007, A3o:0.0517, 42s:0.0001, 43s:0.0012, 44:0.0036, K4o:0.0001, A4o:0.3141, 53s:0.0001, 54s:0.0066, 55:0.0067, A5o:0.0454, 63s:0.0001, 64s:0.0011, 65s:0.0133, 66:0.1004, A6o:0.1804, 74s:0.0002, 76s:0.0768, 77:0.0348, K7o:0.0001, A7o:0.0617, 82s:0.0003, 84s:0.0001, 86s:0.0012, 87s:0.0172, 88:0.0482, A8o:0.1666, 92s:0.0001, 98s:0.0021, 99:0.058, A9o:0.043, T5s:0.0002, T7s:0.0001, T8s:0.0015, TT:0.0039, ATo:0.0311, J9s:0.0001, KJo:0.0001, AJo:0.0051, Q2s:0.0031, Q5s:0.0001, QTs:0.0006, QQ:0.0005, KQo:0.0226, AQo:0.2665, K2s:0.0058, K4s:0.1578, K5s:0.0003, K7s:0.1001, K8s:0.1137, K9s:0.0755, KTs:0.0104, KJs:0.0003, KQs:0.0327, AKo:0.0871, A2s:0.377, A3s:0.0119, A4s:0.0301, A5s:0.0003, A6s:0.2747, A7s:0.257, A8s:0.0595, A9s:0.0835, ATs:0.0188, AQs:0.0986, AKs:0.6238, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1502, 33:0.2058, A3o:0.0009, 44:0.1853, A4o:0.0006, 55:0.1659, A5o:0.0047, 63s:0.0002, 65s:0.0161, 66:0.0849, A6o:0.0009, 76s:0.0033, 77:0.1663, A7o:0.0001, 86s:0.0003, 87s:0.0002, 88:0.0517, A8o:0.0008, 98s:0.0024, 99:0.1911, A9o:0.0028, T8s:0.0002, T9s:0.0161, TT:0.1273, ATo:0.0102, J8s:0.0001, J9s:0.0054, JTs:0.001, JJ:0.2347, KJo:0.0001, AJo:0.3757, Q5s:0.0001, Q9s:0.0006, QTs:0.0001, QJs:0.0001, QQ:0.4886, AQo:0.0063, K2s:0.0001, K3s:0.0005, K4s:0.0001, K5s:0.0001, K7s:0.0001, K8s:0.0005, K9s:0.0009, KTs:0.0058, KJs:0.0019, KQs:0.0127, KK:0.3438, AKo:0.7966, A2s:0.6095, A3s:0.6223, A4s:0.6582, A5s:0.6597, A6s:0.5296, A7s:0.5473, A8s:0.482, A9s:0.305, ATs:0.2339, AJs:0.0988, AQs:0.0347, AKs:0.3021"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A3o:0.0666, A4o:0.0074, A5o:0.037, A6o:0.0003, A7o:0.006, 83s:0.0001, 88:0.0001, A8o:0.0051, 97s:0.0001, A9o:0.008, T2s:0.0001, ATo:0.0061, JJ:0.0002, AJo:0.0002, Q8s:0.0005, QQ:0.4986, AQo:0.7334, K2s:0.0003, K7s:0.0001, KK:0.0519, AKo:0.0069, A2s:0.0848, A3s:0.0401, A4s:0.2021, A5s:0.1945, A6s:0.0033, A7s:0.048, A8s:0.0168, A9s:0.0544, ATs:0.0179, AJs:0.0008, AQs:0.6926, AKs:0.1877, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0054, A5o:0.0103, 72s:0.0003, A7o:0.0056, 99:0.0056, T9s:0.0002, TT:0.0001, JJ:0.0006, QQ:0.0191, KTs:0.0001, KJs:0.0004, KK:0.9481, AKo:0.9928, A2s:0.4522, A3s:0.1804, A4s:0.5182, A5s:0.4586, A6s:0.3282, A7s:0.5348, A8s:0.4337, A9s:0.2217, ATs:0.3373, AJs:0.1581, AQs:0.152, AKs:0.8123"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0906, A3o:0.0212, A4o:0.0541, A5o:0.0271, A6o:0.0081, A7o:0.0013, 87s:0.0001, A8o:0.01, A9o:0.0243, T8s:0.0004, ATo:0.0108, QQ:0.0023, AQo:0.2729, K3s:0.0001, K4s:0.0003, K6s:0.0004, K7s:0.006, K8s:0.0002, K9s:0.0001, KTs:0.0001, KJs:0.0001, KQs:0.001, KK:0.1602, AKo:0.1034, A2s:0.1254, A4s:0.0702, A5s:0.0138, A6s:0.4832, A7s:0.0461, A8s:0.0542, A9s:0.0163, ATs:0.0076, AJs:0.0625, AQs:0.5771, AKs:0.0013, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0151, 44:0.0066, 55:0.005, A5o:0.0236, 66:0.0685, 99:0.0001, TT:0.0128, JJ:0.0827, AJo:0.0101, QQ:0.1389, KTs:0.0001, KQs:0.0001, KK:0.8398, AKo:0.8966, A2s:0.5587, A3s:0.5572, A4s:0.3062, A5s:0.5009, A6s:0.2933, A7s:0.2037, A8s:0.0952, A9s:0.2365, ATs:0.5646, AJs:0.3828, AQs:0.3216, AKs:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0142, 33:0.0007, A3o:0.0003, 42s:0.0001, 44:0.0002, A4o:0.1062, A5o:0.0172, 63s:0.0002, A6o:0.0413, 74s:0.0001, 76s:0.0005, 77:0.0023, A7o:0.0236, 88:0.0369, A8o:0.0629, 97s:0.0007, 99:0.0343, A9o:0.0144, T7s:0.0001, T9s:0.0001, TT:0.0004, ATo:0.0004, JJ:0.0001, AJo:0.0014, Q6s:0.0007, Q9s:0.0025, QTs:0.0007, QQ:0.3704, AQo:0.4914, K2s:0.0025, K4s:0.0009, K6s:0.0005, K8s:0.0008, KTs:0.0081, KK:0.0812, AKo:0.0049, A2s:0.2008, A3s:0.0819, A4s:0.0931, A5s:0.0956, A6s:0.006, A7s:0.1217, A8s:0.078, A9s:0.1633, ATs:0.0065, AJs:0.0293, AQs:0.6726, AKs:0.1406, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0028, 33:0.0099, A3o:0.0471, A4o:0.0293, A5o:0.0916, 66:0.0447, 76s:0.0003, 77:0.0308, 83s:0.0001, 88:0.0728, 97s:0.0003, 99:0.0018, A9o:0.0012, T9s:0.0001, TT:0.007, ATo:0.0456, JTs:0.0001, JJ:0.0496, AJo:0.0419, Q4s:0.0001, Q9s:0.0017, QQ:0.4153, AQo:0.1459, K2s:0.0001, K3s:0.0002, K5s:0.0004, K8s:0.0013, KTs:0.0001, KK:0.9188, AKo:0.9951, A2s:0.6679, A3s:0.5447, A4s:0.6238, A5s:0.5301, A6s:0.264, A7s:0.5, A8s:0.6578, A9s:0.3464, ATs:0.293, AJs:0.3415, AQs:0.1804, AKs:0.8588, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0176, 66:0.0317, 77:0.0736, 88:0.076, 99:0.0118, TT:0.0088, JJ:0.0577, QQ:0.4637, KQo:0.0196, AQo:0.0001, K5s:0.0003, K6s:0.0096, K7s:0.0781, K8s:0.0092, K9s:0.0822, KTs:0.0747, KJs:0.2617, KQs:0.1532, A3s:0.0001, A4s:0.004, A5s:0.0092, A6s:0.0447, A7s:0.0048, A8s:0.0947, A9s:0.1017, ATs:0.2125, AJs:0.1986, AQs:0.7452"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0166, A3o:0.0065, A4o:0.0062, A5o:0.0561, A6o:0.0031, K7o:0.0001, A7o:0.0321, 88:0.003, A8o:0.0219, 99:0.0076, A9o:0.0123, TT:0.1001, ATo:0.1191, JJ:0.0675, KJo:0.0002, AJo:0.3828, Q2s:0.0001, QQ:0.0362, KQo:0.0007, AQo:0.111, K3s:0.0001, K4s:0.0006, K5s:0.0001, K6s:0.0002, K7s:0.0002, K8s:0.0002, K9s:0.0026, KTs:0.0001, KJs:0.0005, AKo:0.0118, A2s:0.0236, A3s:0.0254, A4s:0.0069, A5s:0.0328, A6s:0.0382, A7s:0.1139, A8s:0.3402, A9s:0.0312, ATs:0.0059, AJs:0.571, AQs:0.2056, AKs:0.091, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0001, 44:0.0107, 55:0.0905, 65s:0.0001, 66:0.0737, 77:0.2532, 88:0.5521, A8o:0.0001, 99:0.48, TT:0.5668, KTo:0.0072, JJ:0.4573, KJo:0.023, AJo:0.0002, QQ:0.3295, KQo:0.0097, K2s:0.0015, K3s:0.0484, K4s:0.0099, K5s:0.2165, K6s:0.1819, K7s:0.2329, K8s:0.3577, K9s:0.3376, KTs:0.6261, KJs:0.444, KQs:0.8414, KK, AKo:0.9882, A2s:0.2167, A3s:0.2669, A4s:0.3364, A5s:0.8423, A6s:0.5756, A7s:0.6623, A8s:0.3173, A9s:0.7042, ATs:0.7696, AJs:0.2216, AQs:0.0161, AKs:0.909"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0402, K4o:0.0004, A4o:0.0004, A5o:0.115, K7o:0.0151, A7o:0.0396, K8o:0.0005, A8o:0.1293, A9o:0.0011, KTo:0.0001, ATo:0.0338, JJ:0.0027, KJo:0.0011, AJo:0.0016, QQ:0.0063, AQo:0.0266, K2s:0.0023, K4s:0.0567, K5s:0.0872, K6s:0.022, K7s:0.0436, K8s:0.0027, K9s:0.0313, KJs:0.0151, KQs:0.0468, KK:0.0001, AKo:0.0252, A3s:0.0226, A4s:0.0022, A5s:0.1187, A7s:0.0191, A8s:0.1306, A9s:0.0332, ATs:0.1259, AJs:0.0718, AQs:0.003, AKs:0.7694, AA:0.9993"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0002, K2s:0.0008, K5s:0.0012, K6s:0.0029, K7s:0.0002, K8s:0.0017, K9s:0.0171, KTs:0.029, KJs:0.0412, KQs:0.0009, KK:0.9999, AKo:0.9748, A5s:0.0204, A7s:0.0083, A9s:0.0027, ATs:0.0017, AJs:0.0002, AKs:0.2306, AA:0.0007"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0014, A2o:0.0162, K3o:0.03, A3o:0.0062, K4o:0.003, A4o:0.0001, A5o:0.0218, A6o:0.0024, 77:0.0002, K7o:0.0033, A7o:0.0311, 88:0.0004, K8o:0.0022, A8o:0.0223, 99:0.0042, K9o:0.0032, A9o:0.0046, TT:0.0052, ATo:0.0005, JJ:0.0049, KJo:0.0021, AJo:0.002, QTs:0.0003, QQ:0.1141, KQo:0.0358, AQo:0.0489, K2s:0.0307, K3s:0.0378, K4s:0.0026, K5s:0.0309, K6s:0.0127, K8s:0.005, K9s:0.0426, KJs:0.0284, KQs:0.0488, KK:0.0004, AKo:0.1321, A2s:0.0605, A3s:0.0244, A4s:0.0055, A5s:0.1453, A6s:0.0378, A7s:0.1948, A8s:0.2046, A9s:0.1317, ATs:0.0047, AJs:0.1651, AQs:0.2101, AKs:0.078, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0055, QTs:0.0002, QQ:0.0004, K2s:0.0003, K3s:0.0008, K5s:0.009, K7s:0.0067, K9s:0.012, KJs:0.0014, KQs:0.0007, KK:0.9996, AKo:0.8677, A3s:0.0001, A4s:0.0198, A7s:0.0043, ATs:0.0003, AKs:0.922"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A3o:0.0031, K4o:0.0011, A4o:0.0018, 52s:0.0003, 53s:0.0001, K5o:0.001, A5o:0.1524, 65s:0.0001, 66:0.0001, K6o:0.0003, A6o:0.0002, K7o:0.0003, A7o:0.0121, A8o:0.1135, 99:0.0361, K9o:0.0017, A9o:0.0009, ATo:0.0232, JJ:0.0335, KJo:0.0022, AJo:0.0647, QJs:0.0001, QQ:0.0113, AQo:0.1198, K2s:0.0181, K3s:0.0347, K4s:0.0264, K6s:0.013, K7s:0.0005, K8s:0.0257, KTs:0.0025, KJs:0.0041, KK:0.0002, AKo:0.0857, A2s:0.0107, A3s:0.1414, A5s:0.0326, A7s:0.0788, A8s:0.1842, A9s:0.1062, ATs:0.1058, AJs:0.1471, AQs:0.1735, AKs:0.6003, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0106, 88:0.0013, 99:0.0102, TT:0.0055, QQ:0.0006, K2s:0.0083, K3s:0.0004, K4s:0.0009, K5s:0.0343, K6s:0.0048, K7s:0.0272, K9s:0.0232, KTs:0.0062, KJs:0.0071, KQs:0.0235, KK:0.9998, AKo:0.9143, A2s:0.0007, A3s:0.0037, A5s:0.0173, A6s:0.0001, A7s:0.0004, A8s:0.0024, A9s:0.0127, AJs:0.0001, AQs:0.0088, AKs:0.3996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0084, 33:0.0069, 44:0.1922, 54s:0.0321, 55:0.0555, 66:0.0188, 77:0.1796, 88:0.2201, 99:0.0015, TT:0.2324, J5s:0.0001, JJ:0.9042, QTs:0.0001, QQ:0.0054, KQo:0.0178, AQo:0.1058, K5s:0.0002, K6s:0.0001, KJs:0.0842, KQs:0.0049, A2s:0.0002, A5s:0.0001, A9s:0.0008, ATs:0.0078, AJs:0.9178, AQs:0.0203, AA:0.0003"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "Q2o:0.0096, K2o:0.0078, A2o:0.2229, K3o:0.0153, A3o:0.0931, K4o:0.0118, A4o:0.4982, 55:0.0439, Q5o:0.0001, A5o:0.1218, 66:0.001, Q6o:0.0004, A6o:0.0049, K7o:0.068, A7o:0.0761, Q8o:0.0001, A8o:0.0053, 99:0.011, K9o:0.0244, A9o:0.1045, TT:0.0015, QTo:0.0002, ATo:0.0078, J4s:0.0002, JJ:0.0821, KJo:0.0013, AJo:0.0006, Q2s:0.0037, Q3s:0.0002, Q4s:0.001, Q6s:0.0011, Q7s:0.0124, Q9s:0.0116, QTs:0.0001, QJs:0.0016, QQ:0.5866, KQo:0.4883, AQo:0.7937, K2s:0.3038, K3s:0.0051, K4s:0.0532, K5s:0.3041, K6s:0.0099, K7s:0.2083, K8s:0.0005, K9s:0.0092, KTs:0.0028, KJs:0.0003, KQs:0.0107, KK:0.9959, AKo:0.0934, A2s:0.6111, A3s:0.27, A4s:0.6613, A5s:0.4605, A6s:0.2017, A7s:0.3962, A8s:0.0555, A9s:0.0045, ATs:0.0896, AJs:0.0009, AKs:0.245, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0234, 44:0.054, 54s:0.0052, 55:0.0939, 66:0.1262, 77:0.0116, 99:0.0075, TT:0.0001, Q9s:0.0031, QJs:0.0002, QQ:0.408, KQo:0.4877, AQo:0.1005, K4s:0.003, K6s:0.0197, K7s:0.0285, K8s:0.0002, K9s:0.0009, KTs:0.0047, KQs:0.9845, KK:0.0041, AKo:0.9066, A2s:0.2482, A3s:0.3593, A4s:0.2206, A5s:0.2577, A6s:0.045, A7s:0.1537, A8s:0.0069, A9s:0.0008, ATs:0.028, AJs:0.0001, AQs:0.9796, AKs:0.755"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0393, 33:0.0704, 44:0.0571, 54s:0.005, 55:0.4172, 63s:0.0009, 64s:0.0003, 65s:0.0001, 66:0.2653, 77:0.0296, 86s:0.0001, 87s:0.0006, 88:0.1542, 94s:0.0001, 99:0.1339, TT:0.3611, JJ:0.9344, AJo:0.0001, Q9s:0.0001, QJs:0.0427, QQ:0.0001, KQo:0.0001, K4s:0.0001, K5s:0.0033, K6s:0.0005, KTs:0.2227, KJs:0.4638, KQs:0.0003, A2s:0.0013, A4s:0.0001, A5s:0.0004, A6s:0.0001, A9s:0.01, ATs:0.2864, AJs:0.8321, AQs:0.0031"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0024, Q2o:0.0002, K2o:0.0013, A2o:0.0622, 33:0.0017, A3o:0.0015, 42s:0.0013, A4o:0.2438, 55:0.0075, K5o:0.0083, A5o:0.239, 62s:0.0001, 65s:0.0026, 66:0.0597, Q6o:0.0003, A6o:0.0046, A7o:0.0411, 82s:0.0001, 85s:0.0001, 88:0.0083, Q8o:0.0004, A8o:0.0887, 96s:0.0001, A9o:0.0026, TT:0.0204, QTo:0.0001, ATo:0.0052, J3s:0.0009, JJ:0.0654, AJo:0.4438, Q2s:0.028, Q3s:0.1112, Q4s:0.0062, Q5s:0.0041, Q6s:0.0434, Q7s:0.0285, Q8s:0.0466, Q9s:0.0063, QTs:0.0061, QJs:0.0272, QQ:0.0557, KQo:0.0049, AQo:0.5403, K2s:0.0032, K3s:0.0127, K4s:0.0101, K5s:0.0045, K6s:0.4212, K7s:0.0239, K8s:0.0001, K9s:0.0041, KTs:0.0005, KJs:0.0635, KK:0.6816, AKo:0.17, A2s:0.6079, A3s:0.46, A4s:0.3673, A5s:0.0572, A6s:0.3188, A7s:0.558, A8s:0.5033, A9s:0.3664, ATs:0.5032, AJs:0.1632, AQs:0.011, AKs:0.1963, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0009, 42s:0.0002, 53s:0.0003, 54s:0.0019, 55:0.0242, 66:0.2094, 77:0.0011, 88:0.0004, 99:0.0002, TT:0.0004, Q2s:0.0147, Q3s:0.1195, Q4s:0.0035, Q6s:0.0334, Q7s:0.0056, Q8s:0.0305, Q9s:0.24, QTs:0.036, QJs:0.0824, QQ:0.9443, KQo:0.995, AQo:0.4596, K2s:0.032, K3s:0.0008, K4s:0.4263, K5s:0.06, K6s:0.0579, K7s:0.0724, K8s:0.0036, K9s:0.0139, KTs:0.085, KQs:0.9997, KK:0.3184, AKo:0.8299, A2s:0.1178, A3s:0.4752, A4s:0.6249, A5s:0.9374, A6s:0.0271, A7s:0.3221, A8s:0.0471, A9s:0.0616, ATs:0.0274, AJs:0.0026, AQs:0.9858, AKs:0.8036"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9985, 33:0.9888, 42s:0.0106, 43s:0.8655, 44:0.9951, 52s:0.331, 53s:0.9818, 54s:0.973, 55:0.9971, 65o:0.2592, 63s:0.1794, 64s:0.9549, 65s:0.8635, 66:0.9788, 74s:0.0367, 75s:0.1991, 76s:0.9395, 77:0.9987, 82s:0.0005, 84s:0.0004, 85s:0.0001, 86s:0.872, 87s:0.8563, 88:0.9995, 94s:0.0004, 95s:0.0031, 96s:0.5247, 97s:0.9824, 98s:0.9346, 99:0.9991, T4s:0.0004, T6s:0.047, T7s:0.5932, T8s:0.7375, T9s:0.8335, TT:0.9282, QTo:0.0001, KTo:0.2476, J3s:0.0012, J7s:0.1546, J8s:0.0692, J9s:0.9069, JTs:0.8735, JJ:0.9993, KJo:0.6632, AJo:0.9935, Q2s:0.0008, Q4s:0.0007, Q5s:0.0003, Q7s:0.0102, Q8s:0.0014, Q9s:0.0018, QTs:0.1223, QJs:0.3404, AQo:0.0002, K2s:0.1024, K3s:0.5279, K4s:0.0388, K5s:0.131, K6s:0.0743, K7s:0.1382, K8s:0.7213, K9s:0.7611, KTs:0.9705, KJs:0.9822, KQs:0.0002, AKo:0.0001, A2s:0.223, A3s:0.3582, A4s:0.1389, A5s:0.0458, A6s:0.2436, A7s:0.3077, A8s:0.7433, A9s:0.5741, ATs:0.8957, AJs:0.9987, AQs:0.0098"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0879, Q3o:0.0006, A3o:0.0227, 43s:0.002, 44:0.0044, Q4o:0.0001, K4o:0.0001, A4o:0.1769, 52s:0.0012, 54s:0.0133, 55:0.0027, Q5o:0.0021, A5o:0.3317, 62s:0.0026, 64s:0.0034, 65s:0.1331, 66:0.0002, Q6o:0.0002, A6o:0.1932, 75s:0.0001, 76s:0.0201, A7o:0.0044, 85s:0.0029, Q8o:0.0012, 93s:0.0005, 98s:0.0001, 99:0.0001, A9o:0.0016, T7s:0.0001, TT:0.0699, QTo:0.0665, KTo:0.0004, ATo:0.056, J2s:0.0004, JTs:0.0007, JJ:0.0007, KJo:0.0001, AJo:0.0045, Q2s:0.021, Q3s:0.2483, Q4s:0.0008, Q5s:0.058, Q6s:0.0004, Q7s:0.0111, Q8s:0.0167, Q9s:0.2364, QTs:0.1993, QJs:0.2684, QQ:0.0802, AQo:0.4992, K2s:0.0479, K4s:0.0022, K5s:0.0048, K6s:0.012, K7s:0.0002, K9s:0.0012, KJs:0.0001, KK:0.0396, AKo:0.0436, A2s:0.0596, A3s:0.016, A4s:0.0475, A5s:0.4462, A6s:0.239, A7s:0.3304, A8s:0.0413, A9s:0.2157, ATs:0.0722, AQs:0.1609, AKs:0.5682, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.001, A2o:0.0712, 33:0.0111, A3o:0.0973, 43s:0.0034, K4o:0.0357, A4o:0.1295, 52s:0.0001, 54s:0.0009, 55:0.0001, A5o:0.0808, 64s:0.0028, 65s:0.0003, 66:0.0199, A6o:0.0074, 76s:0.0031, 77:0.0012, 86s:0.0025, 87s:0.0002, K9o:0.0001, KTo:0.0001, KJo:0.0002, Q2s:0.3163, Q3s:0.1608, Q4s:0.8699, Q5s:0.4035, Q6s:0.5457, Q7s:0.5784, Q8s:0.1001, Q9s:0.7344, QTs:0.5736, QJs:0.385, QQ:0.9198, KQo, AQo:0.5004, K2s:0.755, K3s:0.2189, K4s:0.952, K5s:0.8129, K6s:0.8872, K7s:0.7975, K8s:0.2477, K9s:0.1284, KTs:0.0293, KJs:0.008, KQs:0.9997, KK:0.9604, AKo:0.9563, A2s:0.7056, A3s:0.6247, A4s:0.801, A5s:0.507, A6s:0.5114, A7s:0.3529, A8s:0.1872, A9s:0.1948, ATs:0.0286, AJs:0.0011, AQs:0.8293, AKs:0.4318"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1792, JJ:0.7779, QQ:0.6186, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.1531, JJ:0.0407, QQ:0.6913, KK, AKo:0.5611, AKs:0.9932, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1459, 44:0.0025, 53s:0.0014, 54s:0.7482, 55:0.2343, 64s:0.0751, 65s:0.9666, 66:0.7702, 76s:0.2212, 77:0.5203, 87s:0.0025, 88:0.713, 99:0.4694, T7s:0.0001, T8s:0.0159, T9s:0.1796, TT:0.5309, ATo:0.0354, J8s:0.0001, JTs:0.0042, JJ:0.9556, AJo:0.1795, QQ:0.9986, KQo:0.0011, AQo:0.6548, K2s:0.0005, K4s:0.0595, K5s:0.1518, K6s:0.0241, K7s:0.0487, K8s:0.1828, K9s:0.0084, KTs:0.1239, KJs:0.9113, KQs:0.9871, A3s:0.0007, A4s:0.0124, A5s:0.1668, A6s:0.0698, A7s:0.1328, A8s:0.0062, A9s:0.4603, ATs:0.6636, AJs:0.9966, AQs:0.9624"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.6633, 33:0.0626, A3o:0.895, A4o:0.7505, A5o:0.1577, 66:0.0003, A6o:0.3138, 76s:0.0001, A7o:0.2016, 88:0.0006, A8o:0.0848, A9o:0.0226, TT:0.0117, ATo:0.1716, JTs:0.0001, AJo:0.0247, QQ:0.0001, KQo:0.0002, AQo:0.3426, K2s:0.0012, K3s:0.081, K4s:0.0641, K6s:0.0075, K7s:0.0001, K9s:0.0001, KJs:0.0001, AKo:0.0168, A2s:0.0001, A3s:0.0156, A4s:0.0371, A6s:0.0016, A7s:0.0001, ATs:0.0001, AJs:0.001, AQs:0.0372, AKs:0.5176, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0026, A3o:0.0001, 44:0.0163, A4o:0.0003, 55:0.0001, A5o:0.0026, 66:0.0008, 76s:0.0001, 77:0.0115, A7o:0.0003, 88:0.0202, 99:0.0591, K9o:0.0001, T9s:0.0009, TT:0.3182, KTo:0.0002, ATo:0.1312, J7s:0.0001, J8s:0.0001, J9s:0.0001, JTs:0.0006, JJ:0.0234, AJo:0.0203, QQ:0.0003, KQo:0.0008, AQo:0.0003, K2s:0.0316, K4s:0.0124, K5s:0.0001, K6s:0.0644, K7s:0.3424, K8s:0.2469, K9s:0.9401, KTs:0.876, KJs:0.087, KQs:0.0126, KK, AKo:0.9832, A2s:0.9981, A3s:0.9812, A4s:0.945, A5s:0.8331, A6s:0.9204, A7s:0.8663, A8s:0.9935, A9s:0.5395, ATs:0.3363, AJs:0.0024, AQs:0.0004, AKs:0.4824"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.1883, A3o:0.0268, A4o:0.0378, 54s:0.001, K5o:0.0001, K6o:0.0007, A6o:0.0084, A7o:0.0592, 88:0.0009, 99:0.0006, K9o:0.0014, ATo:0.0254, AJo:0.0006, QQ:0.01, AQo:0.0568, K2s:0.0176, K3s:0.0006, K4s:0.0021, K5s:0.0002, K6s:0.0281, K7s:0.0034, K8s:0.0004, K9s:0.0002, KTs:0.0027, KJs:0.0006, KQs:0.0055, AKo:0.1359, A2s:0.1902, A3s:0.0528, A4s:0.124, A5s:0.0331, A6s:0.0189, A7s:0.1335, A8s:0.5694, A9s:0.0019, ATs:0.0283, AJs:0.2309, AQs:0.2215, AKs:0.1192, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "T9s:0.0001, K2s:0.0005, K6s:0.0002, KQs:0.0023, KK, AKo:0.8641, A2s:0.0066, A3s:0.0093, A5s:0.0093, A6s:0.0002, A7s:0.0033, A8s:0.0178, A9s:0.0006, ATs:0.0024, AJs:0.0001, AQs:0.0012, AKs:0.8808"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9801, 32s:0.9946, 33:0.9847, 43o:0.8934, 53o:0.9588, A3o:0.0015, 42s:0.9919, 43s:0.9998, 44:0.7461, 54o:0.9995, 64o:0.9928, A4o:0.0642, 52s:0.984, 53s:0.9997, 54s:0.9977, 55:0.9929, 65o:0.9996, 75o:0.9947, 85o:0.0002, A5o:0.2794, 62s:0.9995, 63s:0.9975, 64s:0.9997, 65s:0.9997, 66:0.9999, 76o:0.9989, 86o:0.9977, 96o:0.6594, K6o:0.9273, A6o:0.0058, 72s:0.6555, 73s:0.9972, 74s:0.9973, 75s:0.9989, 76s:0.9798, 77:0.9999, 87o:0.9925, 97o:0.9767, K7o:0.8721, A7o:0.625, 82s:0.6715, 83s:0.9718, 84s:0.9892, 85s:0.998, 86s:0.9996, 87s:0.9997, 88, 98o:0.9677, T8o:0.9644, J8o:0.0001, K8o:0.8204, A8o:0.7469, 92s:0.9315, 93s:0.987, 94s:0.9967, 95s:0.9988, 96s:0.9973, 97s:0.999, 98s, 99, T9o:0.9678, J9o:0.7823, Q9o:0.6122, K9o:0.8497, A9o:0.9945, T2s:0.0596, T3s:0.6693, T4s:0.9557, T5s:0.996, T6s:0.9903, T7s:0.9982, T8s:0.9993, T9s, TT:0.9999, JTo:0.9911, QTo:0.9639, KTo:0.9832, ATo:0.9627, J2s:0.8108, J3s:0.9528, J4s:0.9899, J5s:0.9987, J6s:0.9989, J7s:0.996, J8s:0.999, J9s:0.9991, JTs:0.9996, JJ:0.9995, QJo:0.8984, KJo:0.9675, AJo:0.9923, Q2s:0.5805, Q3s:0.7828, Q4s:0.7582, Q5s:0.9857, Q6s:0.9516, Q7s:0.9971, Q8s:0.8574, Q9s:0.7456, QTs:0.9834, QJs:0.9906, KQo:0.8038, AQo:0.0003, K2s:0.9892, K3s:0.9102, K4s:0.8213, K5s:0.8083, K6s:0.9722, K7s:0.865, K8s:0.997, K9s:0.996, KTs:0.9995, KJs:0.9221, KQs:0.1595, A2s:0.0075, A3s:0.0308, A4s:0.6785, A5s:0.5118, A6s:0.4776, A7s:0.9382, A8s:0.994, A9s:0.9775, ATs:0.9987, AJs:0.9999, AQs:0.0002"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0104, A2o:0.4111, K3o:0.0285, A3o:0.324, 42s:0.0002, K4o:0.2725, A4o:0.324, 52s:0.0003, 54s:0.0001, Q5o:0.0002, A5o:0.0981, Q6o:0.0043, K6o:0.0242, A6o:0.5944, 73s:0.0005, 74s:0.0001, 76s:0.0198, Q7o:0.0007, K7o:0.0461, A7o:0.3366, Q8o:0.1178, K8o:0.0587, A8o:0.2177, Q9o:0.1682, K9o:0.1422, A9o:0.0006, T2s:0.0001, T3s:0.0007, JTo:0.0007, QTo:0.0278, KTo:0.0154, ATo:0.0366, J2s:0.0213, J9s:0.0001, JJ:0.0005, QJo:0.1012, KJo:0.0319, AJo:0.0076, Q2s:0.0095, Q3s:0.0413, Q4s:0.136, Q5s:0.0004, Q6s:0.012, Q8s:0.0188, Q9s:0.0011, QTs:0.0128, QJs:0.0007, QQ:0.0703, KQo:0.0893, AQo:0.0661, K2s:0.0084, K3s:0.0388, K4s:0.038, K5s:0.0541, K6s:0.0038, K7s:0.0755, K8s:0.0002, K9s:0.0008, KJs:0.0779, KK:0.9999, AKo:0.0142, A2s:0.0004, A3s:0.0031, A5s:0.0054, A6s:0.1545, A7s:0.0005, A8s:0.0001, A9s:0.0188, AQs:0.0029, AKs:0.7816, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0199, A2o:0.501, 33:0.0153, A3o:0.6057, 44:0.2539, A4o:0.5767, 54s:0.0011, 55:0.007, A5o:0.6077, 66:0.0001, A6o:0.0104, 75s:0.0001, Q7o:0.0001, K7o:0.0003, A7o:0.0031, A8o:0.0001, Q9o:0.0002, K9o:0.0007, A9o:0.0003, T6s:0.0001, T7s:0.0007, QTo:0.0019, ATo:0.0003, Q2s:0.4066, Q3s:0.1704, Q4s:0.0989, Q5s:0.0131, Q6s:0.0323, Q8s:0.1225, Q9s:0.2506, QTs:0.0037, QJs:0.0084, QQ:0.9297, KQo:0.1068, AQo:0.9336, K2s:0.0021, K3s:0.0507, K4s:0.1397, K5s:0.1357, K6s:0.0236, K7s:0.0591, K8s:0.0025, K9s:0.0026, KTs:0.0001, KQs:0.8405, KK:0.0001, AKo:0.9858, A2s:0.9921, A3s:0.966, A4s:0.3212, A5s:0.4827, A6s:0.3675, A7s:0.0607, A8s:0.0055, A9s:0.0035, ATs:0.0012, AJs:0.0001, AQs:0.9969, AKs:0.2184"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0023, TT:0.3504, JJ:0.5177, QQ:0.4905, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.012, 44:0.0268, 54s:0.7349, 55:0.806, 64s:0.0415, 65s:0.7522, 66:0.7529, 74s:0.0059, 75s:0.0027, 76s:0.0008, 77:0.687, 85s:0.0001, 87s:0.0001, 88:0.9618, 93s:0.0001, 95s:0.0001, 96s:0.0004, 98s:0.4407, 99:0.3376, A9o:0.0001, T7s:0.0005, T8s:0.0024, T9s:0.3967, TT:0.9229, ATo:0.2022, J7s:0.0001, J9s:0.0203, JTs:0.6119, JJ:0.9752, AJo:0.5143, Q4s:0.0012, Q7s:0.0001, Q9s:0.0083, QTs:0.2632, QJs:0.3224, QQ:0.9996, AQo:0.9927, K4s:0.0029, K5s:0.0022, K6s:0.0004, K7s:0.0046, K8s:0.0011, K9s:0.0295, KTs:0.2249, KJs:0.2186, KQs:0.3396, KK:0.9929, A2s:0.0275, A3s:0.2306, A4s:0.6473, A5s:0.9933, A6s:0.6184, A7s:0.5592, A8s:0.963, A9s:0.5926, ATs:0.9968, AJs:0.9745, AQs:0.9797, AKs:0.0002, AA:0.0001"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K3o:0.0001, A3o:0.0136, A4o:0.8509, A5o:0.4649, A6o:0.4543, A7o:0.4079, A8o:0.06, A9o:0.3134, TT:0.0002, ATo:0.1615, J3s:0.0002, AJo:0.2192, Q2s:0.0001, AQo:0.0038, K2s:0.0001, K6s:0.0001, K8s:0.0001, K9s:0.001, KTs:0.0001, KJs:0.0002, KQs:0.0003, AKo:0.0019, A2s:0.0592, A3s:0.2082, A4s:0.0438, A5s:0.0001, A6s:0.0119, A7s:0.007, A8s:0.0027, A9s:0.0361, ATs:0.0017, AJs:0.0254, AQs:0.0202, AKs:0.4544, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, A4o:0.0006, 55:0.0001, A5o:0.0001, 66:0.0001, 76s:0.0003, 77:0.0003, A7o:0.0001, 86s:0.0002, 88:0.0004, A8o:0.0005, 99:0.0005, A9o:0.0001, T9s:0.0001, TT:0.0027, ATo:0.005, J3s:0.0001, JTs:0.0001, JJ:0.0018, AJo:0.0001, QQ:0.0001, AQo:0.0003, K5s:0.0006, K8s:0.0008, K9s:0.0006, KTs:0.0003, KJs:0.0011, KQs:0.0005, KK:0.0071, AKo:0.9981, A2s:0.7226, A3s:0.5358, A4s:0.3079, A5s:0.0063, A6s:0.2837, A7s:0.4307, A8s:0.0259, A9s:0.3663, ATs:0.0014, AKs:0.5455"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0258, JJ:0.3546, QQ:0.0522, KK, AKo:0.9995, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.62, JJ:0.0177, QQ:0.0165, KK, AKo:0.0225, AKs:0.4168, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.001, 99:0.0061, TT:0.4625, JJ:0.3829, QQ:0.1603, KK, AKo:0.0238, AKs:0.9531, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0323, 33:0.2211, 42s:0.0008, 43s:0.0003, 44:0.0719, 53s:0.0102, 54s:0.2698, 55:0.4431, 63s:0.0003, 64s:0.0001, 65s:0.449, 66:0.1462, 75s:0.0001, 76s:0.0228, 77:0.4913, 82s:0.0001, 84s:0.0001, 87s:0.0161, 88:0.8604, A8o:0.0065, 98s:0.0907, 99:0.6421, A9o:0.0004, T3s:0.0005, T8s:0.0017, T9s:0.1052, TT:0.5016, J2s:0.0002, J7s:0.0001, J8s:0.0097, J9s:0.0389, JTs:0.0361, JJ:0.9174, AJo:0.063, Q7s:0.0002, Q8s:0.0003, Q9s:0.0077, QTs:0.0001, QJs:0.011, QQ:0.951, AQo:0.6573, K4s:0.004, K6s:0.0407, K7s:0.0003, K8s:0.0014, K9s:0.1705, KTs:0.2964, KJs:0.5256, KQs:0.5403, KK:0.1654, A2s:0.0051, A3s:0.022, A4s:0.0625, A5s:0.0583, A6s:0.1083, A7s:0.0376, A8s:0.0706, A9s:0.2819, ATs:0.5288, AJs:0.8389, AQs:0.9699, AA:0.0001"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.2048, 32s:0.0001, 33:0.0648, Q3o:0.0001, K3o:0.0009, A3o:0.2809, 44:0.0532, K4o:0.0003, A4o:0.0214, 53s:0.121, 55:0.0131, A5o:0.0608, 63s:0.0076, 65s:0.033, 66:0.0559, Q6o:0.0001, A6o:0.0199, 72s:0.0001, 73s:0.0001, 75s:0.0094, 76s:0.0002, 77:0.0638, A7o:0.1756, 82s:0.0002, 86s:0.0002, 88:0.0395, A8o:0.1251, 93s:0.0004, 98s:0.0007, 99:0.0191, A9o:0.111, T4s:0.0024, T5s:0.0003, T6s:0.0001, T8s:0.0019, TT:0.0084, ATo:0.0808, J2s:0.0006, J7s:0.0001, J8s:0.0005, J9s:0.0012, JTs:0.0213, JJ:0.0193, AJo:0.0702, Q4s:0.0001, Q5s:0.0001, Q7s:0.0001, Q9s:0.0001, QTs:0.0113, QJs:0.0013, QQ:0.0453, KQo:0.0254, AQo:0.2975, K3s:0.0284, K4s:0.0121, K5s:0.0323, K6s:0.0106, K7s:0.0333, K8s:0.0075, K9s:0.1301, KTs:0.0136, KQs:0.1095, KK:0.0006, AKo:0.042, A2s:0.1774, A3s:0.0255, A4s:0.0185, A5s:0.0285, A6s:0.109, A7s:0.1114, A8s:0.1369, A9s:0.0426, ATs:0.0343, AJs:0.0205, AQs:0.0295, AKs:0.1866, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1064, A2o:0.0042, 32s:0.0005, 33:0.0644, A3o:0.001, 44:0.0105, A4o:0.0024, 53s:0.0009, 54s:0.0007, 55:0.052, A5o:0.0078, 63s:0.0005, 64s:0.0001, 65s:0.0006, 66:0.0646, A6o:0.0018, 76s:0.007, 77:0.0166, A7o:0.0002, 82s:0.0001, 86s:0.0006, 87s:0.0002, 88:0.0443, 96s:0.0001, 98s:0.0124, 99:0.1623, A9o:0.0018, T2s:0.0001, T3s:0.0001, T8s:0.0014, TT:0.0275, ATo:0.0004, J7s:0.0001, J8s:0.0001, J9s:0.0023, JTs:0.0091, JJ:0.0611, KJo:0.0125, AJo:0.0629, Q4s:0.0002, Q6s:0.0001, Q7s:0.0002, Q8s:0.0001, QJs:0.0001, QQ:0.0024, AQo:0.0021, K2s:0.0293, K3s:0.4799, K4s:0.0644, K5s:0.0274, K6s:0.1528, K7s:0.1513, K8s:0.3489, K9s:0.4725, KTs:0.3988, KJs:0.3915, KQs:0.1536, KK:0.834, AKo:0.958, A2s:0.5858, A3s:0.9244, A4s:0.8833, A5s:0.8636, A6s:0.6578, A7s:0.7762, A8s:0.7677, A9s:0.602, ATs:0.417, AJs:0.1398, AQs:0.0005, AKs:0.8134"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "K3o:0.0027, A3o:0.0003, 44:0.0002, A4o:0.0519, 53s:0.0002, A5o:0.0103, 64s:0.0002, A6o:0.0001, A7o:0.0289, 87s:0.0002, A8o:0.0009, 92s:0.0001, 99:0.0255, K9o:0.001, A9o:0.0191, T3s:0.0003, TT:0.0009, KTo:0.0764, ATo:0.0011, JJ:0.0022, AJo:0.0031, Q5s:0.0004, Q6s:0.0002, QQ:0.0357, AQo:0.0498, K2s:0.1142, K3s:0.0331, K4s:0.112, K5s:0.1809, K6s:0.0004, K7s:0.1879, K8s:0.0018, K9s:0.1207, KTs:0.2997, KJs:0.064, KQs:0.0187, KK:0.1284, AKo:0.2816, A2s:0.0147, A3s:0.0728, A4s:0.118, A5s:0.0441, A6s:0.0267, A7s:0.0807, A8s:0.0965, A9s:0.0832, ATs:0.0012, AJs:0.0116, AQs:0.4283, AKs:0.0684, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A4o:0.0007, 97s:0.0002, JJ:0.0001, AJo:0.0001, Q5s:0.0001, QQ:0.0027, K6s:0.0019, KTs:0.011, KK:0.8716, AKo:0.7133, A2s:0.0277, A3s:0.0906, A4s:0.0001, A5s:0.001, A6s:0.0354, A7s:0.1714, A9s:0.0071, ATs:0.0145, AJs:0.0023, AQs:0.0024, AKs:0.9302, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0004, K2o:0.0226, A2o:0.0105, K3o:0.0206, A3o:0.0038, A4o:0.0008, 53s:0.0025, K5o:0.0166, A5o:0.0011, K6o:0.0221, A6o:0.0038, 75s:0.0003, 76s:0.0021, 77:0.0001, K7o:0.032, 82s:0.0041, 88:0.0001, K8o:0.0159, A8o:0.0195, 98s:0.0001, 99:0.0042, K9o:0.015, A9o:0.0281, T5s:0.0006, ATo:0.0264, J9s:0.0001, JTs:0.0003, JJ:0.0001, AJo:0.009, Q3s:0.001, Q5s:0.0001, Q9s:0.0001, QJs:0.0002, QQ:0.1628, KQo:0.0153, AQo:0.1556, K2s:0.0497, K3s:0.0114, K4s:0.0002, K5s:0.0275, K6s:0.0202, K8s:0.3782, K9s:0.0656, KTs:0.0431, KJs:0.0022, KQs:0.0001, KK:0.3995, AKo:0.1797, A2s:0.3049, A3s:0.0295, A4s:0.0868, A5s:0.0132, A6s:0.1273, A7s:0.2343, A8s:0.3542, A9s:0.1334, ATs:0.1077, AJs:0.3391, AQs:0.311, AKs:0.01, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, A3o:0.0005, 42s:0.0003, 43s:0.0006, A4o:0.0004, 52s:0.0001, 75s:0.0002, 76s:0.0003, 77:0.0001, 88:0.0002, 97s:0.0001, 99:0.0074, T2s:0.0007, T9s:0.0006, ATo:0.0005, J7s:0.0002, AJo:0.0007, Q4s:0.0006, Q5s:0.0001, Q8s:0.0004, QJs:0.0001, QQ:0.0064, K3s:0.0001, K7s:0.0003, K9s:0.0015, KTs:0.0001, KQs:0.0008, KK:0.5949, AKo:0.82, A2s:0.0205, A3s:0.0179, A4s:0.0048, A5s:0.1218, A6s:0.0425, A7s:0.0029, A8s:0.0079, A9s:0.0436, ATs:0.0307, AJs:0.0007, AQs:0.007, AKs:0.9893, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0076, 66:0.0705, 77:0.03, 88:0.0394, 99:0.0013, JJ:0.0019, AJo:0.0001, QQ:0.0902, AQo:0.0057, K7s:0.0035, KTs:0.0019, KQs:0.0027, KK:0.0409, A3s:0.0001, A4s:0.089, A5s:0.0116, A7s:0.0009, A8s:0.0044, A9s:0.0001, ATs:0.0663, AJs:0.1837, AQs:0.0866"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.2192, A3o:0.0068, K4o:0.0002, A4o:0.0007, K5o:0.0036, A5o:0.0592, 66:0.0001, K6o:0.0002, A6o:0.1966, A7o:0.0004, A8o:0.0047, 99:0.0002, K9o:0.0071, A9o:0.0297, TT:0.0002, KTo:0.0499, ATo:0.1299, JJ:0.0136, AJo:0.1558, QQ:0.0325, KQo:0.0041, AQo:0.3605, K2s:0.0185, K3s:0.0003, K4s:0.002, K5s:0.0113, K6s:0.0863, K7s:0.0211, K8s:0.0112, KTs:0.0294, KJs:0.0001, KQs:0.0346, AKo:0.0008, A2s:0.0073, A3s:0.0047, A4s:0.0004, A5s:0.0131, A6s:0.0346, A7s:0.0116, A8s:0.0075, A9s:0.0129, ATs:0.1214, AJs:0.0723, AQs:0.4768, AKs:0.0094, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0031, 54s:0.0002, 55:0.0399, A5o:0.0124, 66:0.0041, 77:0.0115, A7o:0.0001, 88:0.0669, 99:0.2352, T9s:0.001, TT:0.3388, ATo:0.0819, JJ:0.5454, KJo:0.0003, AJo:0.0167, QQ:0.5271, AQo:0.0921, K3s:0.0018, K4s:0.0106, K5s:0.0859, K6s:0.016, K7s:0.0257, K8s:0.005, K9s:0.3437, KTs:0.3449, KJs:0.6662, KQs:0.5045, KK:0.9591, AKo:0.9992, A2s:0.6133, A3s:0.5744, A4s:0.5177, A5s:0.9544, A6s:0.717, A7s:0.8489, A8s:0.9867, A9s:0.879, ATs:0.802, AJs:0.7271, AQs:0.432, AKs:0.9906"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.002, A4o:0.0132, A5o:0.0194, 66:0.0001, A6o:0.032, K7o:0.0002, K8o:0.0015, A8o:0.0104, 98s:0.0001, 99:0.0003, K9o:0.0057, A9o:0.0002, KTo:0.0003, ATo:0.0419, JJ:0.0026, KJo:0.017, AJo:0.0275, QQ:0.0035, KQo:0.0131, AQo:0.0629, K3s:0.0025, K4s:0.0086, K5s:0.0002, K6s:0.0046, K7s:0.0171, K8s:0.0237, K9s:0.0031, KTs:0.0043, KJs:0.001, KQs:0.0315, KK:0.0003, AKo:0.078, A3s:0.0018, A5s:0.0531, A6s:0.1477, A7s:0.0063, A8s:0.053, A9s:0.1816, ATs:0.3335, AJs:0.0866, AQs:0.0681, AKs:0.2635, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, JJ:0.0001, QQ:0.0001, AQo:0.0002, K8s:0.0008, KTs:0.0002, KJs:0.0004, KQs:0.0003, KK:0.9997, AKo:0.9219, A7s:0.0014, A8s:0.0496, A9s:0.0003, ATs:0.2057, AJs:0.0001, AQs:0.001, AKs:0.7364, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.004, A2o:0.0661, A3o:0.0011, A4o:0.0035, A5o:0.0033, K6o:0.0019, A6o:0.0041, A7o:0.0009, K8o:0.0011, A8o:0.0078, A9o:0.0001, TT:0.0011, ATo:0.11, KJo:0.0014, QQ:0.0064, KQo:0.0008, AQo:0.0233, K2s:0.0169, K3s:0.0124, K4s:0.0006, K5s:0.0058, K6s:0.0036, K7s:0.0086, K8s:0.0465, K9s:0.0014, KTs:0.0008, KJs:0.0172, KK:0.0001, AKo:0.1026, A2s:0.0213, A3s:0.0018, A4s:0.0019, A5s:0.0789, A6s:0.2121, A7s:0.0252, A8s:0.08, A9s:0.1257, ATs:0.5345, AJs:0.0854, AQs:0.1418, AKs:0.2236, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0007, 77:0.0007, KTo:0.0001, Q9s:0.0001, QQ:0.0003, K3s:0.0005, K4s:0.0092, K6s:0.0001, K7s:0.0105, K9s:0.0005, KTs:0.0014, KJs:0.1915, KK:0.9999, AKo:0.8974, A2s:0.0006, A3s:0.0689, A5s:0.4986, A6s:0.0168, A8s:0.0506, ATs:0.0416, AJs:0.4456, AQs:0.009, AKs:0.7764, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0027, 33:0.0821, 43s:0.0007, 44:0.2801, 54s:0.0008, 55:0.1271, 65s:0.3455, 66:0.3601, 76s:0.0005, 77:0.2438, 86s:0.0001, 88:0.8378, 97s:0.0015, 99:0.12, T8s:0.0001, TT:0.6375, JJ:0.9873, Q6s:0.0001, Q9s:0.0001, QTs:0.0005, QJs:0.0026, QQ:0.4044, KQo:0.0002, AQo:0.1858, K6s:0.0005, K7s:0.0003, KTs:0.4234, KJs:0.6974, KQs:0.0014, A2s:0.0003, A3s:0.001, A4s:0.0003, A5s:0.0045, A7s:0.0002, A8s:0.0022, A9s:0.0001, ATs:0.169, AJs:0.9205, AQs:0.6058"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0009, A2o:0.1073, Q3o:0.0001, A3o:0.1805, 43s:0.0009, 44:0.0058, K4o:0.0005, A4o:0.1179, 55:0.0001, K5o:0.105, A5o:0.0368, K6o:0.0055, A6o:0.0049, 76s:0.0013, 77:0.0047, K7o:0.0102, A7o:0.0971, K8o:0.0001, A8o:0.0009, 98s:0.0005, A9o:0.0374, ATo:0.0019, JJ:0.0125, AJo:0.0402, Q2s:0.0002, Q4s:0.0004, Q8s:0.0001, QQ:0.0217, KQo:0.069, AQo:0.8088, K2s:0.0189, K3s:0.0193, K4s:0.4065, K5s:0.4166, K6s:0.4879, K7s:0.2535, K8s:0.2301, K9s:0.2475, KJs:0.038, KQs:0.0001, KK:0.9794, AKo:0.0364, A2s:0.8984, A3s:0.2227, A4s:0.4941, A5s:0.053, A6s:0.1871, A7s:0.6015, A8s:0.2418, A9s:0.3757, ATs:0.0124, AJs:0.0463, AQs:0.2383, AKs:0.4882, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0022, A2o:0.0007, 33:0.0051, A3o:0.0007, 44:0.2395, 54s:0.0045, 66:0.002, 76s:0.0028, 77:0.0322, 99:0.0006, TT:0.0016, Q2s:0.0009, Q4s:0.0029, Q5s:0.0001, Q6s:0.0003, Q8s:0.0013, Q9s:0.0001, QTs:0.0007, QJs:0.0169, QQ:0.5738, KQo:0.919, AQo:0.0049, K2s:0.001, K4s:0.003, K5s:0.0169, K6s:0.1151, K7s:0.0361, K8s:0.0319, K9s:0.001, KTs:0.0022, KQs:0.9977, KK:0.0206, AKo:0.9636, A2s:0.0954, A3s:0.5569, A4s:0.4979, A5s:0.9275, A6s:0.013, A7s:0.1037, A8s:0.005, A9s:0.0003, ATs:0.0003, AQs:0.1558, AKs:0.5118"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9565, 32s:0.0016, 33:0.9368, 43o:0.0001, 53o:0.0003, 43s:0.673, 44:0.9646, 54o:0.0603, 52s:0.8756, 53s:0.992, 54s:0.9844, 55:0.9387, 65o:0.7894, 62s:0.4608, 63s:0.7073, 64s:0.9928, 65s:0.9959, 66:0.9948, 76o:0.1979, 86o:0.0003, 72s:0.0001, 73s:0.0023, 74s:0.3068, 75s:0.9602, 76s:0.9562, 77:0.9985, 84s:0.0045, 85s:0.981, 86s:0.8658, 87s:0.982, 88:0.9985, 96s:0.9835, 97s:0.9726, 98s:0.8686, 99:0.9996, T3s:0.0007, T6s:0.004, T7s:0.1332, T8s:0.7352, T9s:0.9678, TT:0.9995, KTo:0.007, J6s:0.0016, J7s:0.0525, J8s:0.7979, J9s:0.8911, JTs:0.9736, JJ:0.9999, KJo:0.8065, AJo:0.9903, Q4s:0.2043, Q6s:0.0002, Q7s:0.4281, Q8s:0.6427, Q9s:0.1401, QTs:0.6685, QJs:0.9809, QQ:0.4993, KQo:0.0098, AQo:0.1617, K2s:0.0005, K3s:0.0394, K4s:0.131, K5s:0.1275, K6s:0.0443, K7s:0.3092, K8s:0.3087, K9s:0.3996, KTs:0.8496, KJs:0.9978, KQs:0.0077, A2s:0.0462, A3s:0.0273, A4s:0.0799, A5s:0.2919, A6s:0.2114, A7s:0.2233, A8s:0.3377, A9s:0.9153, ATs:0.9692, AJs:0.9998, AQs:0.4738"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.128, 33:0.0003, Q3o:0.0003, K3o:0.0054, A3o:0.1987, Q4o:0.0005, A4o:0.1984, 54s:0.0001, K5o:0.0024, A5o:0.3102, 62s:0.0001, 64s:0.001, 65s:0.0001, K6o:0.0016, A6o:0.0758, 75s:0.0001, Q7o:0.0003, K7o:0.0802, A7o:0.0027, 84s:0.0031, 87s:0.0001, Q8o:0.0006, A8o:0.0007, A9o:0.0023, T8s:0.0002, TT:0.0001, QTo:0.0005, ATo:0.3175, J9s:0.0001, QJo:0.0001, Q2s:0.081, Q3s:0.003, Q4s:0.1738, Q5s:0.0011, Q6s:0.0095, Q7s:0.1928, Q8s:0.0054, Q9s:0.0046, QTs:0.0017, QQ:0.2936, KQo:0.0158, AQo:0.7468, K2s:0.0463, K3s:0.1256, K4s:0.0383, K5s:0.0285, K6s:0.1788, K7s:0.0293, K8s:0.0679, K9s:0.0071, KTs:0.0125, KJs:0.0002, KQs:0.0039, KK:0.2249, AKo:0.099, A2s:0.2418, A3s:0.1157, A4s:0.0378, A5s:0.0333, A6s:0.2916, A7s:0.1185, A8s:0.4348, A9s:0.0263, ATs:0.001, AJs:0.0001, AQs:0.4088, AKs:0.477, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0435, A2o:0.0147, 33:0.0629, A3o:0.0604, 44:0.0348, A4o:0.2894, 55:0.0612, A5o:0.2336, 65s:0.0015, 66:0.005, 73s:0.0001, 77:0.0014, 86s:0.0017, 88:0.0012, 96s:0.0001, J9s:0.0001, JJ:0.0001, Q2s:0.0087, Q3s:0.008, Q4s:0.0383, Q5s:0.014, Q6s:0.0027, Q7s:0.0003, Q8s:0.0011, Q9s:0.0003, QTs:0.0129, QJs:0.0047, QQ:0.2071, KQo:0.9743, AQo:0.0914, K2s:0.646, K3s:0.7495, K4s:0.8079, K5s:0.6827, K6s:0.7485, K7s:0.6181, K8s:0.6037, K9s:0.5506, KTs:0.1293, KJs:0.0017, KQs:0.9883, KK:0.7751, AKo:0.901, A2s:0.7066, A3s:0.8525, A4s:0.8788, A5s:0.6715, A6s:0.4698, A7s:0.6556, A8s:0.2177, A9s:0.0506, ATs:0.0266, AJs:0.0001, AQs:0.1174, AKs:0.523"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1717, JJ:0.2163, QQ:0.2065, KK, AKo:0.4295, AKs:0.4725, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.031, TT:0.3036, JJ:0.0406, QQ:0.2843, KK:0.9999, AKo:0.1413, AKs:0.2493, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 66:0.0002, 88:0.2334, 99:0.1585, TT:0.288, JJ:0.2497, QQ:0.2713, KK, AKo:0.2344, AKs:0.3362, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.1844, 99:0.2595, TT:0.2859, JJ:0.2542, QQ:0.2492, KK, AKo:0.3176, AKs:0.3044, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0031, 33:0.0006, 43s:0.015, 44:0.1278, 53s:0.0007, 54s:0.0704, 55:0.3725, 64s:0.0011, 65s:0.4992, 66:0.2777, 76s:0.2579, 77:0.7466, 86s:0.0002, 88:0.7413, 97s:0.0022, 98s:0.0081, 99:0.501, T7s:0.0021, T8s:0.0118, T9s:0.0953, TT:0.5221, ATo:0.0002, J5s:0.0005, J7s:0.0001, J8s:0.0001, J9s:0.1413, JTs:0.1025, JJ:0.464, KJo:0.0001, AJo:0.0005, Q8s:0.0001, QTs:0.0083, QJs:0.0625, QQ:0.9958, KQo:0.0094, AQo:0.7683, K3s:0.0004, K4s:0.0005, K5s:0.0269, K7s:0.0007, K8s:0.0224, K9s:0.2239, KTs:0.5354, KJs:0.3987, KQs:0.7698, KK:0.2537, AKo:0.0022, A2s:0.0006, A3s:0.0602, A4s:0.0612, A5s:0.1801, A6s:0.0279, A7s:0.1628, A8s:0.5017, A9s:0.478, ATs:0.4328, AJs:0.7138, AQs:0.9998, AKs:0.0056"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0027, K2o:0.006, A2o:0.1839, 33:0.0006, K3o:0.0051, A3o:0.1734, 42s:0.001, 44:0.0517, A4o:0.2118, 52s:0.0001, 53s:0.0001, 54s:0.0345, 55:0.0048, K5o:0.0001, A5o:0.085, 64s:0.0062, 65s:0.0042, K6o:0.0001, A6o:0.0014, 74s:0.0002, 76s:0.0002, 77:0.0057, K7o:0.0001, A7o:0.0118, 83s:0.0003, 87s:0.0001, 88:0.0469, 98o:0.0001, J8o:0.0001, K8o:0.0002, A8o:0.0042, 96s:0.0002, 98s:0.0026, 99:0.1465, K9o:0.0008, A9o:0.0528, T2s:0.0001, T6s:0.0001, T7s:0.0002, T8s:0.0003, T9s:0.0027, TT:0.1078, QTo:0.0001, KTo:0.001, ATo:0.0567, J4s:0.0001, J5s:0.0003, J6s:0.0001, J7s:0.0003, J8s:0.0001, J9s:0.02, JTs:0.0001, JJ:0.0218, KJo:0.0003, AJo:0.3102, Q4s:0.0001, Q7s:0.0001, Q8s:0.0037, KQo:0.0033, AQo:0.2281, K2s:0.0298, K3s:0.0507, K4s:0.0357, K5s:0.0361, K6s:0.0037, K7s:0.0246, K8s:0.0141, K9s:0.2031, KTs:0.0007, KJs:0.0596, KQs:0.004, KK:0.0003, AKo:0.1206, A2s:0.1481, A3s:0.1232, A4s:0.0993, A5s:0.0794, A6s:0.1092, A7s:0.3268, A8s:0.0697, A9s:0.1848, ATs:0.0607, AJs:0.0002, AQs:0.0001, AKs:0.2375, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1194, A2o:0.0005, 32s:0.0001, 33:0.2902, 44:0.0675, A4o:0.0001, 53s:0.0004, 55:0.4558, A5o:0.0851, 64s:0.0001, 65s:0.0038, 66:0.1862, 76s:0.0001, 77:0.1229, K7o:0.0001, A7o:0.0002, 82s:0.0001, 86s:0.0001, 88:0.1897, A8o:0.0001, 99:0.2663, T7s:0.0001, T8s:0.0003, TT:0.3291, ATo:0.0388, J5s:0.0002, J7s:0.0001, JTs:0.001, JJ:0.5129, AJo:0.0363, QQ:0.0037, AQo:0.0017, K2s:0.0001, K4s:0.0001, K7s:0.0003, K8s:0.0052, K9s:0.0631, KTs:0.1286, KJs:0.2154, KQs:0.0023, KK:0.746, AKo:0.8772, A2s:0.365, A3s:0.6075, A4s:0.443, A5s:0.5929, A6s:0.381, A7s:0.3003, A8s:0.4054, A9s:0.2768, ATs:0.265, AJs:0.2844, AQs:0.0001, AKs:0.7568"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.021, A3o:0.0491, 44:0.0179, A4o:0.0471, K5o:0.0008, A6o:0.0058, 76s:0.0106, 77:0.0113, K7o:0.0075, A7o:0.0005, 88:0.0645, A8o:0.0156, 94s:0.0002, 99:0.0007, A9o:0.0018, T8s:0.0014, TT:0.0687, KTo:0.0018, ATo:0.0003, J2s:0.0002, JJ:0.1317, AJo:0.0046, QQ:0.1392, AQo:0.1681, K2s:0.0067, K3s:0.0183, K4s:0.0334, K5s:0.0201, K7s:0.0129, K8s:0.0139, K9s:0.0493, KJs:0.0941, KK:0.0193, AKo:0.0007, A2s:0.0673, A3s:0.1293, A4s:0.053, A5s:0.0912, A6s:0.0594, A7s:0.1194, A8s:0.041, A9s:0.3735, ATs:0.0077, AJs:0.0502, AQs:0.2521, AKs:0.0664, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A8o:0.0003, TT:0.0008, JTs:0.0001, QQ:0.0001, K6s:0.0003, K9s:0.0001, KK:0.9776, AKo:0.9984, A2s:0.0004, A3s:0.1673, A4s:0.452, A5s:0.2116, A6s:0.0113, A7s:0.0028, A9s:0.0952, ATs:0.0093, AJs:0.0003, AQs:0.0025, AKs:0.9334"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "K2o:0.002, A2o:0.0335, A3o:0.0555, K4o:0.0053, A4o:0.064, A5o:0.0328, A6o:0.004, 76s:0.006, K7o:0.0086, A7o:0.0008, 88:0.0002, A8o:0.0001, 97s:0.0001, 99:0.0026, Q9o:0.0001, TT:0.0123, ATo:0.0036, J8s:0.0001, JJ:0.2035, KJo:0.0123, AJo:0.0095, Q4s:0.0001, QQ:0.0131, AQo:0.166, K2s:0.0369, K4s:0.0697, K5s:0.0126, K6s:0.0272, K7s:0.0157, K8s:0.0001, K9s:0.0412, KTs:0.0018, KJs:0.0572, KK:0.1357, AKo:0.0275, A2s:0.0678, A3s:0.1963, A4s:0.1482, A5s:0.0678, A6s:0.0786, A7s:0.2132, A8s:0.2831, A9s:0.2442, ATs:0.2453, AJs:0.0053, AQs:0.0647, AKs:0.0855, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "63s:0.001, 83s:0.0001, 84s:0.0006, 88:0.0001, 98s:0.0018, 99:0.0003, T7s:0.0001, ATo:0.0005, J6s:0.0002, JTs:0.0001, JJ:0.0005, QQ:0.0005, K2s:0.0011, K5s:0.0006, K6s:0.0002, KTs:0.0002, KJs:0.0002, KK:0.8643, AKo:0.9721, A2s:0.0182, A4s:0.0167, A5s:0.0438, A6s:0.038, A7s:0.0082, A8s:0.0256, A9s:0.051, ATs:0.0322, AJs:0.0043, AQs:0.0447, AKs:0.9144, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0001, K2o:0.0056, A2o:0.0042, 32s:0.0001, 33:0.0001, A3o:0.0015, 43s:0.0002, 44:0.0195, A4o:0.2105, 53s:0.0001, 55:0.0134, A5o:0.0955, 64s:0.0014, K6o:0.0042, A6o:0.0045, 73s:0.0001, 74s:0.0002, A7o:0.0082, 82s:0.0001, 85s:0.0009, 88:0.0003, A8o:0.0753, 99:0.2033, K9o:0.0079, A9o:0.0089, T5s:0.0004, T8s:0.0021, TT:0.0005, ATo:0.0186, JJ:0.0152, AJo:0.0024, Q3s:0.0005, Q5s:0.0004, Q6s:0.0003, QQ:0.1949, AQo:0.0861, K2s:0.0862, K3s:0.0602, K4s:0.0656, K5s:0.0004, K6s:0.0567, K7s:0.0543, K9s:0.056, KTs:0.0656, KJs:0.0721, KQs:0.0184, KK:0.1287, AKo:0.0302, A2s:0.1085, A3s:0.0005, A4s:0.0248, A5s:0.1092, A6s:0.0018, A7s:0.3392, A9s:0.078, ATs:0.0024, AJs:0.1724, AQs:0.0002, AKs:0.0311, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0005, 32s:0.0001, 33:0.0001, 44:0.0006, 53s:0.0006, 55:0.0109, A5o:0.0003, 64s:0.0001, 65s:0.0002, 75s:0.0002, 77:0.0006, 88:0.0002, A8o:0.0003, T7s:0.0104, TT:0.0039, KTo:0.0001, J4s:0.0002, JJ:0.0045, Q2s:0.0001, Q9s:0.0001, QQ:0.0041, AQo:0.0085, K3s:0.0001, K4s:0.0001, K7s:0.0008, K8s:0.0001, KQs:0.0004, KK:0.8713, AKo:0.969, A2s:0.2878, A4s:0.0634, A5s:0.0321, A6s:0.0127, A7s:0.0645, A9s:0.0022, ATs:0.0306, AJs:0.0499, AQs:0.038, AKs:0.968, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0206, 66:0.0376, 77:0.0319, 88:0.1326, 99:0.0167, TT:0.0026, JJ:0.0102, QQ:0.3816, K5s:0.0004, K6s:0.0001, K7s:0.0009, KTs:0.0004, KJs:0.0002, KQs:0.0035, A3s:0.0016, A5s:0.06, A6s:0.0001, A7s:0.0006, A8s:0.0678, A9s:0.0182, ATs:0.3528, AJs:0.4325, AQs:0.5784"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.045, A2o:0.2733, K3o:0.0049, A3o:0.1073, A4o:0.0052, K5o:0.0001, A5o:0.0157, A6o:0.0578, 76s:0.003, 77:0.0136, A7o:0.0485, 88:0.0461, A8o:0.0069, 99:0.0082, A9o:0.0004, TT:0.0373, KTo:0.0186, ATo:0.0293, JJ:0.0644, KJo:0.0401, AJo:0.1532, QQ:0.1934, KQo:0.0545, AQo:0.1882, K2s:0.139, K3s:0.0973, K4s:0.055, K5s:0.0048, K6s:0.0115, K7s:0.0034, K8s:0.0002, K9s:0.0083, KTs:0.0067, KJs:0.0265, KQs:0.0483, A2s:0.0261, A3s:0.0005, A4s:0.0003, A5s:0.0137, A6s:0.0632, A7s:0.0611, A8s:0.0523, A9s:0.0251, ATs:0.1375, AJs:0.4188, AQs:0.3985, AKs:0.0022, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0003, 55:0.054, A5o:0.0088, 66:0.0628, 77:0.1703, A7o:0.0004, 88:0.402, A8o:0.0003, 99:0.7223, K9o:0.0001, A9o:0.0004, TT:0.768, JJ:0.6805, KJo:0.0001, AJo:0.002, QQ:0.2747, AQo:0.0002, K2s:0.0001, K4s:0.0017, K5s:0.067, K6s:0.0804, K7s:0.0401, K8s:0.0996, K9s:0.1965, KTs:0.4203, KJs:0.3552, KQs:0.2595, KK, AKo, A2s:0.293, A3s:0.3639, A4s:0.2916, A5s:0.7167, A6s:0.3963, A7s:0.5558, A8s:0.363, A9s:0.4295, ATs:0.2858, AJs:0.1454, AQs:0.0203, AKs:0.9978, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0047, A2o:0.0201, K3o:0.0084, A3o:0.0228, K4o:0.0071, A4o:0.0301, 55:0.0005, A5o:0.0005, K6o:0.0076, A6o:0.0015, A7o:0.0018, A8o:0.0121, 99:0.0003, A9o:0.0428, TT:0.0001, KTo:0.0003, ATo:0.0387, JJ:0.0241, KJo:0.0094, AJo:0.0362, QQ:0.096, KQo:0.0098, AQo:0.1184, K3s:0.0431, K4s:0.0086, K5s:0.008, K6s:0.0008, K7s:0.0357, K8s:0.0066, K9s:0.0579, KTs:0.0035, KJs:0.0066, KQs:0.0106, AKo:0.0474, A3s:0.0845, A4s:0.1414, A6s:0.1297, A7s:0.0201, A8s:0.0248, A9s:0.0517, ATs:0.0701, AJs:0.02, AQs:0.1606, AKs:0.3512, AA:0.9983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K4s:0.0016, K5s:0.0003, K6s:0.0012, K9s:0.0035, KTs:0.0005, KQs:0.0007, KK, AKo:0.9524, A3s:0.1711, A4s:0.0537, A5s:0.0001, A6s:0.001, A7s:0.2189, A8s:0.0019, A9s:0.0002, ATs:0.0791, AJs:0.0006, AQs:0.0002, AKs:0.6488, AA:0.0017"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.1036, A3o:0.0233, A4o:0.005, K5o:0.0001, A5o:0.0296, 66:0.0014, A6o:0.0012, K7o:0.0001, A7o:0.004, 88:0.0002, K8o:0.0002, A8o:0.044, 97s:0.0009, 99:0.0001, A9o:0.004, TT:0.0285, J4s:0.0004, J5s:0.0001, JJ:0.0047, AJo:0.0268, QQ:0.0039, AQo:0.0665, K2s:0.0066, K6s:0.0498, K7s:0.0035, K8s:0.0028, K9s:0.0077, KTs:0.0012, KJs:0.1021, KQs:0.0017, KK:0.0653, AKo:0.119, A2s:0.0001, A3s:0.0168, A4s:0.004, A5s:0.0215, A6s:0.0984, A7s:0.0148, A8s:0.1981, A9s:0.0798, ATs:0.0125, AJs:0.1289, AQs:0.7318, AKs:0.2397, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0003, A4o:0.0001, 74s:0.0001, 76s:0.0001, 88:0.0003, 96s:0.0001, 99:0.0001, T9s:0.0001, ATo:0.0001, JJ:0.0003, QJs:0.0001, QQ:0.0004, K2s:0.0001, K6s:0.0005, K7s:0.0001, K8s:0.0005, K9s:0.0004, KJs:0.0002, KK:0.9347, AKo:0.8809, A2s:0.0008, A3s:0.0009, A4s:0.0006, A5s:0.0003, A7s:0.0002, A9s:0.0011, ATs:0.0003, AJs:0.0004, AQs:0.0003, AKs:0.7603, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0344, A3o:0.001, K4o:0.0233, A4o:0.0008, K5o:0.0001, 66:0.0077, K6o:0.0001, A6o:0.0018, A7o:0.0038, 86s:0.0007, A8o:0.0005, K9o:0.0002, TT:0.0605, KTo:0.0058, ATo:0.0875, JJ:0.0049, KJo:0.0021, AJo:0.0808, QQ:0.0934, KQo:0.0181, AQo:0.0183, K2s:0.0378, K3s:0.0007, K4s:0.0001, K5s:0.0001, K6s:0.0043, K7s:0.0691, K8s:0.0777, K9s:0.0059, KTs:0.0403, KJs:0.0275, KQs:0.1049, KK:0.0252, AKo:0.1285, A2s:0.0137, A3s:0.0369, A4s:0.0023, A5s:0.0105, A6s:0.0287, A7s:0.0437, A8s:0.0333, A9s:0.0593, ATs:0.1097, AJs:0.2578, AQs:0.2769, AKs:0.0096, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 64s:0.0001, 88:0.0001, 99:0.0001, TT:0.0007, QQ:0.0001, K2s:0.0018, K5s:0.001, K8s:0.0006, K9s:0.0013, KTs:0.0481, KJs:0.0521, KQs:0.0023, KK:0.9748, AKo:0.8715, A2s:0.0145, A3s:0.0001, A4s:0.0001, A5s:0.0616, A7s:0.0072, A8s:0.0005, A9s:0.0235, ATs:0.0024, AQs:0.0118, AKs:0.9904"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0021, 33:0.097, 44:0.0264, 54s:0.0048, 55:0.3529, 66:0.0886, 77:0.032, 88:0.3098, 99:0.0963, TT:0.6217, JJ:0.6844, Q3s:0.0002, Q5s:0.0001, Q6s:0.0001, QQ:0.5701, KQo:0.0045, AQo:0.0859, K5s:0.0008, KTs:0.1984, KQs:0.6467, KK:0.0001, AKo:0.0001, AJs:0.8496, AQs:0.9101, AKs:0.0011, AA:0.0001"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0119, A2o:0.0181, K3o:0.0223, A3o:0.0524, K4o:0.0186, A4o:0.1349, 55:0.0008, K5o:0.0148, A5o:0.0339, 64s:0.0002, K6o:0.0125, A6o:0.1675, 77:0.0005, A7o:0.0194, A8o:0.0071, 96s:0.0001, 99:0.0002, A9o:0.0632, TT:0.0001, ATo:0.0018, JJ:0.2988, KJo:0.1314, AJo:0.2344, Q2s:0.0002, Q3s:0.0009, Q6s:0.0004, Q7s:0.0004, Q9s:0.0001, QJs:0.0001, QQ:0.0218, KQo:0.0183, AQo:0.8588, K2s:0.1017, K3s:0.1084, K4s:0.4499, K5s:0.0512, K6s:0.235, K7s:0.0835, K8s:0.0021, KTs:0.0047, KJs:0.0264, KQs:0.0001, KK:0.9908, AKo:0.1367, A2s:0.2251, A3s:0.4101, A4s:0.5626, A5s:0.5553, A6s:0.4657, A7s:0.5154, A8s:0.0007, A9s:0.0526, ATs:0.0099, AJs:0.1364, AQs:0.0013, AKs:0.1267, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.2665, 44:0.2217, A4o:0.0002, 55:0.0659, 66:0.3163, 77:0.0929, 86s:0.0002, 88:0.0016, 99:0.0021, TT:0.1336, JJ:0.0004, Q3s:0.0031, Q6s:0.0023, QQ:0.4082, KQo:0.0171, AQo:0.0264, K2s:0.0104, K3s:0.0009, K4s:0.0443, K5s:0.0022, K6s:0.0003, K7s:0.0444, K9s:0.0005, KTs:0.0544, KQs:0.3529, KK:0.0091, AKo:0.8632, A2s:0.1966, A3s:0.2259, A4s:0.1644, A5s:0.2156, A6s:0.0084, A7s:0.0035, A8s:0.0103, A9s:0.0156, ATs:0.0042, AJs:0.0012, AQs:0.0885, AKs:0.8722"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0153, 33:0.0125, 44:0.3022, 54s:0.0371, 55:0.4677, 64s:0.0001, 65s:0.1169, 66:0.2912, 76s:0.0084, 77:0.4504, 88:0.5935, 99:0.3645, TT:0.7767, JJ:0.6921, Q7s:0.0008, QJs:0.0454, QQ:0.2544, AQo:0.0655, K4s:0.0001, K5s:0.0001, K6s:0.0013, KTs:0.0265, KJs:0.5461, KQs:0.4768, A5s:0.0723, A8s:0.0015, A9s:0.0001, ATs:0.0693, AJs:0.969, AQs:0.5504"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0006, K2o:0.0054, A2o:0.0033, 33:0.0007, K3o:0.0064, A3o:0.1507, K4o:0.0001, A4o:0.0135, 53s:0.0017, K5o:0.0126, A5o:0.4115, 62s:0.0002, 65s:0.0004, 66:0.0026, K6o:0.0208, A6o:0.0001, 75s:0.0001, Q7o:0.0001, K7o:0.0004, A7o:0.01, 82s:0.0004, 88:0.0013, 98s:0.0002, TT:0.0034, ATo:0.0041, J6s:0.0001, JJ:0.3068, KJo:0.0395, AJo:0.2265, Q3s:0.0006, Q6s:0.0001, Q7s:0.0026, Q9s:0.0002, QJs:0.0001, QQ:0.0113, KQo:0.0639, AQo:0.7939, K2s:0.1756, K3s:0.7046, K4s:0.047, K5s:0.0346, K6s:0.3555, K7s:0.2169, K8s:0.0226, K9s:0.2055, KTs:0.0024, KJs:0.0007, KQs:0.0019, KK:0.9989, AKo:0.04, A2s:0.1501, A3s:0.5265, A4s:0.5288, A5s:0.4978, A6s:0.6864, A7s:0.0588, A8s:0.1145, A9s:0.6095, ATs:0.1477, AJs:0.0079, AQs:0.1439, AKs:0.7225, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1823, 33:0.3874, 44:0.3999, 55:0.1083, 66:0.4551, 77:0.2489, 88:0.1466, 99:0.0004, TT:0.0011, JJ:0.0007, Q6s:0.0015, QTs:0.0023, QQ:0.7343, KQo:0.3492, AQo:0.1398, K3s:0.0793, K4s:0.0184, K5s:0.0464, K6s:0.0178, K7s:0.103, K9s:0.0001, KTs:0.0057, KJs:0.0031, KQs:0.5026, KK:0.0011, AKo:0.96, A2s:0.1731, A3s:0.295, A4s:0.4706, A5s:0.125, A6s:0.0089, A7s:0.0059, A8s:0.0081, ATs:0.0002, AQs:0.3054, AKs:0.2774"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9403, 32s:0.0009, 33:0.8018, 42s:0.0254, 43s:0.8829, 44:0.6876, 54o:0.0271, 64o:0.0022, 52s:0.9616, 53s:0.9832, 54s:0.9933, 55:0.57, 65o:0.738, 62s:0.0252, 63s:0.9371, 64s:0.8903, 65s:0.9809, 66:0.7595, 76o:0.2696, 72s:0.0003, 74s:0.4769, 75s:0.9763, 76s:0.9059, 77:0.985, 84s:0.3218, 85s:0.8181, 86s:0.9236, 87s:0.9077, 88:0.9992, 95s:0.3358, 96s:0.767, 97s:0.9859, 98s:0.946, 99:0.9997, T3s:0.0061, T5s:0.0001, T6s:0.0065, T7s:0.8947, T8s:0.9657, T9s:0.9042, TT:0.9999, QTo:0.0001, KTo:0.0112, J3s:0.0005, J4s:0.0002, J5s:0.0003, J7s:0.0038, J8s:0.1707, J9s:0.445, JTs:0.9083, JJ:0.9997, KJo:0.0016, AJo:0.9891, Q4s:0.0137, Q5s:0.0018, Q6s:0.0005, Q7s:0.2976, Q8s:0.1857, Q9s:0.6039, QTs:0.8366, QJs:0.9532, QQ:0.3941, KQo:0.5243, AQo:0.2123, K2s:0.0455, K3s:0.1284, K4s:0.2212, K5s:0.3642, K6s:0.4987, K7s:0.5579, K8s:0.5957, K9s:0.9085, KTs:0.9461, KJs:0.9912, KQs:0.4973, A2s:0.0147, A3s:0.4846, A4s:0.3985, A5s:0.4153, A6s:0.3344, A7s:0.327, A8s:0.8065, A9s:0.5889, ATs:0.8589, AJs:0.9976, AQs:0.6312"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0123, A2o:0.034, A3o:0.029, Q4o:0.0063, K4o:0.0102, A4o:0.2109, 54s:0.0001, K5o:0.005, A5o:0.4483, 64s:0.0002, 65s:0.0023, 66:0.0006, K6o:0.0005, A6o:0.1174, 74s:0.0001, 76s:0.0218, K7o:0.0078, A7o:0.0851, A8o:0.0001, A9o:0.0012, T4s:0.0001, T7s:0.0013, T8s:0.0002, QTo:0.0018, KTo:0.0403, ATo:0.0897, AJo:0.0003, Q3s:0.0276, Q4s:0.127, Q5s:0.0035, Q6s:0.0297, Q7s:0.026, Q8s:0.0928, Q9s:0.1039, QTs:0.0228, QJs:0.002, QQ:0.1221, KQo:0.1415, AQo:0.5474, K2s:0.3993, K3s:0.218, K4s:0.2785, K5s:0.1197, K6s:0.1812, K7s:0.1143, K8s:0.1113, K9s:0.0007, KTs:0.0207, KK:0.758, AKo:0.1194, A2s:0.6039, A3s:0.1366, A4s:0.2179, A5s:0.1998, A6s:0.2945, A7s:0.292, A8s:0.0348, A9s:0.3822, ATs:0.1293, AJs:0.0005, AQs:0.1629, AKs:0.6334, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0597, A2o:0.0009, 33:0.1982, A3o:0.0577, 44:0.3122, A4o:0.1489, 55:0.4299, A5o:0.0376, 65s:0.0001, 66:0.2399, 77:0.0145, 87s:0.0008, Q3s:0.0001, Q4s:0.1859, Q5s:0.0089, Q6s:0.0777, Q9s:0.0786, QTs:0.0936, QJs:0.0082, QQ:0.4838, KQo:0.3332, AQo:0.2401, K2s:0.2644, K3s:0.2763, K4s:0.3112, K5s:0.3373, K6s:0.3105, K7s:0.2568, K8s:0.2344, K9s:0.0676, KTs:0.0316, KJs:0.001, KQs:0.5025, KK:0.242, AKo:0.8806, A2s:0.3611, A3s:0.3689, A4s:0.3793, A5s:0.3742, A6s:0.2874, A7s:0.3051, A8s:0.137, A9s:0.0259, ATs:0.0001, AJs:0.0001, AQs:0.2059, AKs:0.3666"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK, AKo:0.9199, AKs:0.9937, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.9576, AKs:0.9955, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK, AKo:0.9794, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KK, AKo:0.9969, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "33:0.01, 43s:0.0002, 44:0.0162, 53s:0.0028, 54s:0.0904, 55:0.3424, 64s:0.0041, 65s:0.1201, 66:0.8138, 75s:0.0001, 76s:0.068, 77:0.0349, 87s:0.0006, 88:0.8093, 96s:0.0005, 97s:0.0003, 98s:0.0001, 99:0.4129, T9s:0.3693, TT:0.4552, ATo:0.0001, JTs:0.0533, JJ:0.7739, Q8s:0.0004, QTs:0.0005, QJs:0.0001, QQ:0.9926, AQo:0.6826, K3s:0.0001, K5s:0.0029, K6s:0.0002, K8s:0.0163, K9s:0.0006, KTs:0.6516, KJs:0.2928, KQs:0.394, KK:0.5432, A2s:0.0001, A3s:0.0687, A4s:0.0638, A5s:0.1818, A6s:0.1049, A7s:0.1372, A8s:0.2847, A9s:0.2995, ATs:0.0972, AJs:0.363, AQs:0.9995, AKs:0.0024"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0003, A2o:0.0035, 33:0.0837, 43o:0.0039, A3o:0.4055, 43s:0.2851, 44:0.8094, 54o:0.0026, K4o:0.0067, A4o:0.7246, 53s:0.0001, 54s:0.6657, 55:0.1268, K5o:0.0009, A5o:0.2693, 63s:0.0001, 64s:0.2439, 66:0.0285, K6o:0.0006, A6o:0.0084, 74s:0.0002, 76s:0.0008, 77:0.0015, K7o:0.0005, A7o:0.0006, 82s:0.0001, 87s:0.0016, K8o:0.0002, A8o:0.0269, 92s:0.0002, 93s:0.0002, 94s:0.0003, 98s:0.0004, 99:0.0727, K9o:0.0016, A9o:0.0864, T3s:0.0002, T5s:0.0001, T9s:0.0004, TT:0.0278, ATo:0.0001, J8s:0.0001, JJ:0.0004, AJo:0.0014, QQ:0.0003, AQo:0.292, K2s:0.0017, K3s:0.1652, K4s:0.4863, K5s:0.0001, K6s:0.0118, K7s:0.005, K8s:0.08, K9s:0.201, KTs:0.0204, KJs:0.0001, KQs:0.0033, AKo:0.0964, A2s:0.2005, A3s:0.0902, A4s:0.0198, A5s:0.0252, A6s:0.0953, A7s:0.0923, A8s:0.0397, A9s:0.1978, ATs:0.0971, AJs:0.0001, AKs:0.3924, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0268, 33:0.0618, A3o:0.0212, 44:0.1078, 55:0.0304, A5o:0.0101, 64s:0.0038, 65s:0.0009, 66:0.0482, 76s:0.0002, 77:0.0305, 87s:0.0013, 88:0.0484, 96s:0.0001, 97s:0.001, 98s:0.0076, 99:0.018, T9s:0.0008, TT:0.0579, ATo:0.0172, JJ:0.224, AJo:0.1862, QQ:0.007, K2s:0.0001, K3s:0.001, K4s:0.0001, K5s:0.001, K6s:0.0055, K7s:0.0466, K8s:0.0796, K9s:0.0803, KTs:0.1155, KJs:0.3571, KQs:0.0111, KK:0.4567, AKo:0.9036, A2s:0.7128, A3s:0.7787, A4s:0.8132, A5s:0.7858, A6s:0.5533, A7s:0.6907, A8s:0.5652, A9s:0.4299, ATs:0.7415, AJs:0.6345, AQs:0.0005, AKs:0.6052"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "K2o:0.0014, A2o:0.0009, A3o:0.0008, 43s:0.0012, A4o:0.0039, 54s:0.0048, K5o:0.0001, A5o:0.0461, 65s:0.0001, A6o:0.0001, K7o:0.0004, A7o:0.0031, A8o:0.0002, 99:0.0005, T4s:0.0002, TT:0.0001, ATo:0.0209, JJ:0.0393, QQ:0.0681, AQo:0.0081, K2s:0.0287, K4s:0.0055, K5s:0.0377, K6s:0.0057, K7s:0.0121, K9s:0.0125, KJs:0.0022, KK:0.2525, AKo:0.1078, A2s:0.0556, A3s:0.3353, A4s:0.1256, A5s:0.066, A6s:0.0938, A7s:0.0308, A8s:0.0735, A9s:0.2157, ATs:0.1051, AJs:0.0027, AQs:0.6629, AKs:0.0075, AA:0.9983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0001, KK:0.7475, AKo:0.8918, A3s:0.0227, A4s:0.0099, A5s:0.505, A6s:0.0023, A7s:0.0074, A8s:0.0577, A9s:0.1355, ATs:0.0004, AJs:0.0074, AQs:0.0069, AKs:0.9924, AA:0.0017"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0066, A3o:0.0754, A4o:0.041, A5o:0.0666, A6o:0.0005, 72s:0.0001, A7o:0.0032, 88:0.0028, K8o:0.0019, A8o:0.0061, 99:0.0003, K9o:0.0018, A9o:0.0041, ATo:0.0003, JTs:0.0001, JJ:0.0394, QQ:0.0076, AQo:0.0719, K3s:0.0103, K6s:0.0028, K7s:0.022, K8s:0.0049, K9s:0.0011, KTs:0.0133, KJs:0.0005, KK:0.3395, AKo:0.0254, A2s:0.2423, A3s:0.1658, A4s:0.0999, A5s:0.2025, A6s:0.1304, A7s:0.1088, A8s:0.0278, A9s:0.0463, ATs:0.1709, AJs:0.0001, AQs:0.3871, AKs:0.1003, AA:0.9996"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0044, 77:0.0017, 88:0.0002, 98s:0.0004, 99:0.0008, A9o:0.0016, TT:0.0002, JJ:0.0004, QQ:0.0059, AQo:0.0016, K5s:0.0112, K6s:0.0001, K7s:0.0007, K9s:0.0001, KTs:0.0046, KK:0.6605, AKo:0.9733, A2s:0.0357, A3s:0.0362, A4s:0.1311, A5s:0.3202, A6s:0.0039, A7s:0.0076, A8s:0.009, A9s:0.0215, ATs:0.0022, AJs:0.0096, AQs:0.0119, AKs:0.8997, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0247, K3o:0.0005, A3o:0.0423, A4o:0.0171, 54s:0.0002, K5o:0.0013, A7o:0.0134, 85s:0.0008, 88:0.003, A8o:0.0033, 92s:0.0003, 95s:0.0001, 99:0.0001, A9o:0.017, TT:0.0169, ATo:0.0054, JTs:0.0002, JJ:0.0033, AJo:0.0015, QQ:0.0057, AQo:0.1681, K3s:0.0004, K4s:0.0002, K7s:0.0004, K8s:0.0004, K9s:0.0351, KJs:0.0001, KK:0.0061, AKo:0.0089, A2s:0.1133, A3s:0.0845, A4s:0.1079, A5s:0.0369, A6s:0.0324, A7s:0.059, A8s:0.2664, A9s:0.1464, ATs:0.0518, AJs:0.315, AQs:0.5759, AKs:0.217, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0164, 88:0.0009, 99:0.0006, AJo:0.0003, QQ:0.0001, AQo:0.0002, K6s:0.0043, K8s:0.0003, KJs:0.0003, KQs:0.0004, KK:0.9939, AKo:0.991, A2s:0.5996, A3s:0.4923, A4s:0.6971, A5s:0.8302, A6s:0.7123, A8s:0.2753, A9s:0.0185, ATs:0.3442, AJs:0.0008, AQs:0.0468, AKs:0.7829"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "K2o:0.0032, A2o:0.0064, 32s:0.0002, A3o:0.001, 43s:0.0001, 44:0.0002, A4o:0.033, 53s:0.0001, A5o:0.0554, 64s:0.002, 66:0.0002, K6o:0.0009, 77:0.0002, A7o:0.0194, 84s:0.0001, 87s:0.0001, K8o:0.002, A8o:0.0032, 96s:0.0006, 98s:0.0007, 99:0.0037, K9o:0.0045, A9o:0.0184, T5s:0.0001, TT:0.0252, ATo:0.0064, J4s:0.0001, JJ:0.0226, AJo:0.051, QQ:0.2503, KQo:0.0001, AQo:0.0889, K2s:0.0151, K3s:0.03, K4s:0.0052, K5s:0.029, K6s:0.0152, K7s:0.0186, K8s:0.0315, KTs:0.0093, KQs:0.0127, KK:0.0261, AKo:0.0035, A2s:0.1595, A3s:0.1322, A4s:0.0306, A5s:0.116, A6s:0.1773, A7s:0.1392, A8s:0.0647, A9s:0.2604, ATs:0.014, AJs:0.0038, AQs:0.5595, AKs:0.0468, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0009, A4o:0.0005, 53s:0.0003, 54s:0.0001, 55:0.0011, A5o:0.0001, 62s:0.0001, 64s:0.0002, 66:0.001, 73s:0.0001, 76s:0.0013, 77:0.0007, 92s:0.0002, 97s:0.0002, 98s:0.0005, 99:0.0004, T3s:0.0001, T6s:0.0001, T8s:0.0024, J8s:0.0002, JJ:0.0011, AJo:0.0004, Q5s:0.0001, QQ:0.0001, AQo:0.0001, K2s:0.0001, K4s:0.0001, K6s:0.0001, K7s:0.0016, K9s:0.0041, KTs:0.0012, KJs:0.002, KQs:0.0004, KK:0.9739, AKo:0.9964, A2s:0.6284, A3s:0.273, A4s:0.6203, A5s:0.542, A6s:0.4163, A7s:0.7464, A8s:0.5646, A9s:0.0578, ATs:0.4462, AJs:0.0236, AQs:0.0223, AKs:0.9529"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0509, 66:0.0326, 77:0.0294, 88:0.003, 99:0.0137, TT:0.0007, JJ:0.0048, QJs:0.0001, QQ:0.1033, AQo:0.0237, KTs:0.022, KJs:0.0021, KQs:0.0012, KK:0.0121, A2s:0.0001, A3s:0.0016, A8s:0.0037, A9s:0.1163, ATs:0.0171, AJs:0.1571, AQs:0.1685, AA:0.0002"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0025, A2o:0.2976, K3o:0.0002, A3o:0.335, A4o:0.0383, K5o:0.0001, A5o:0.0984, A6o:0.0124, 76s:0.0006, K7o:0.0027, A7o:0.0177, A8o:0.2033, 99:0.0008, A9o:0.0165, TT:0.003, KTo:0.0001, ATo:0.0024, JJ:0.005, KJo:0.0043, AJo:0.2631, Q5s:0.0001, QQ:0.0439, KQo:0.0032, AQo:0.0921, K2s:0.0136, K4s:0.0001, K5s:0.0078, K6s:0.0009, K7s:0.0236, K8s:0.0012, K9s:0.001, KTs:0.0085, KJs:0.0124, KQs:0.037, AKo:0.0012, A2s:0.0124, A3s:0.0061, A4s:0.0018, A5s:0.0013, A6s:0.0049, A7s:0.0069, A8s:0.1571, A9s:0.0172, ATs:0.005, AJs:0.0629, AQs:0.4322, AKs:0.0041, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0016, 33:0.0006, 43s:0.0001, 44:0.0065, 54s:0.0006, 55:0.1846, A5o:0.0756, 66:0.1389, 76s:0.0019, 77:0.0699, A7o:0.0067, 87s:0.0001, 88:0.1281, 98s:0.0002, 99:0.2819, TT:0.2205, ATo:0.0615, JJ:0.1748, AJo:0.0199, QQ:0.4433, AQo:0.0053, K2s:0.0002, K3s:0.0006, K4s:0.0019, K5s:0.0136, K6s:0.0086, K7s:0.0181, K8s:0.001, K9s:0.0279, KTs:0.1845, KJs:0.2273, KQs:0.1405, KK:0.9878, AKo:0.9988, A2s:0.4471, A3s:0.8134, A4s:0.6535, A5s:0.9026, A6s:0.7374, A7s:0.6487, A8s:0.6601, A9s:0.6141, ATs:0.8908, AJs:0.6751, AQs:0.3026, AKs:0.9959"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0092, K3o:0.0001, A4o:0.1073, A6o:0.0017, K7o:0.0016, A7o:0.0246, 88:0.0009, K8o:0.001, A8o:0.0177, 99:0.0012, TT:0.0021, KTo:0.0004, ATo:0.0258, JJ:0.0003, AJo:0.0053, QQ:0.0082, AQo:0.0138, K6s:0.0054, K7s:0.0441, K8s:0.0006, K9s:0.0009, KTs:0.0006, KQs:0.0047, AKo:0.0477, A2s:0.003, A4s:0.0113, A5s:0.2258, A6s:0.0001, A7s:0.0014, A8s:0.366, A9s:0.0024, ATs:0.0003, AJs:0.0913, AQs:0.0986, AKs:0.0232, AA:0.9542"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0005, 88:0.0002, TT:0.0003, JJ:0.001, QQ:0.002, K2s:0.0006, K3s:0.0017, K6s:0.0027, K7s:0.0018, K8s:0.0017, K9s:0.0006, KTs:0.0001, KJs:0.0083, KQs:0.017, KK, AKo:0.9523, A3s:0.055, A4s:0.0438, A5s:0.0181, A6s:0.0001, A7s:0.0008, A8s:0.0197, A9s:0.0012, ATs:0.0013, AQs:0.0038, AKs:0.9765, AA:0.0458"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0138, A3o:0.0637, A5o:0.0093, 77:0.0083, K7o:0.0076, A7o:0.0043, A8o:0.1026, 99:0.0084, A9o:0.0039, TT:0.0002, KTo:0.0031, ATo:0.0067, JJ:0.0171, KJo:0.0056, AJo:0.0165, QQ:0.0203, KQo:0.0008, AQo:0.0081, K2s:0.0003, K3s:0.0005, K4s:0.0015, K6s:0.0024, K7s:0.0593, K8s:0.001, K9s:0.0071, KTs:0.0068, KJs:0.0293, KQs:0.028, KK:0.0002, AKo:0.06, A5s:0.0002, A6s:0.0003, A7s:0.0123, A8s:0.2116, A9s:0.0111, ATs:0.0231, AJs:0.0688, AQs:0.2157, AKs:0.0254, AA:0.9933"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 66:0.0001, 75s:0.0001, 77:0.0001, 97s:0.0001, A9o:0.0001, TT:0.0001, JJ:0.0002, QQ:0.0003, KQo:0.0005, K3s:0.0001, K7s:0.0008, K8s:0.0075, K9s:0.0108, KTs:0.0012, KJs:0.0178, KQs:0.0012, KK:0.9998, AKo:0.9399, A3s:0.0003, A4s:0.0001, A5s:0.0005, A7s:0.0076, A8s:0.0638, AJs:0.0045, AKs:0.9732, AA:0.0067"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0116, K4o:0.0008, A4o:0.0607, 52s:0.0001, A5o:0.0105, K6o:0.0008, A6o:0.0002, K7o:0.0022, A7o:0.0544, 85s:0.0001, 88:0.0133, K8o:0.0226, A8o:0.0917, 99:0.0008, A9o:0.0089, TT:0.0002, KTo:0.0068, ATo:0.0001, JJ:0.0018, KJo:0.0067, AJo:0.0147, QQ:0.0473, KQo:0.0218, AQo:0.2293, K2s:0.0517, K3s:0.0302, K4s:0.0039, K5s:0.0076, K6s:0.0218, K7s:0.0201, K8s:0.0042, K9s:0.0013, KTs:0.0087, KJs:0.0004, KQs:0.0108, KK:0.4728, AKo:0.6085, A2s:0.1272, A3s:0.0005, A4s:0.0403, A5s:0.1017, A6s:0.0682, A7s:0.239, A8s:0.3845, A9s:0.1332, ATs:0.3854, AJs:0.3989, AQs:0.2127, AKs:0.4393, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0004, 52s:0.0002, 55:0.0001, 77:0.0002, 85s:0.0002, 88:0.0001, A8o:0.0001, 93s:0.0001, 97s:0.0002, K9o:0.0001, A9o:0.0001, T3s:0.0001, T5s:0.0002, T6s:0.0005, T8s:0.0002, T9s:0.0003, TT:0.0003, ATo:0.0002, J7s:0.0001, JTs:0.0002, JJ:0.0007, AJo:0.0002, Q7s:0.0002, QTs:0.0004, QQ:0.0002, K3s:0.0027, K5s:0.0515, K6s:0.0028, K7s:0.0006, K9s:0.0005, KTs:0.0005, KJs:0.0017, KQs:0.0277, KK:0.5272, AKo:0.3914, A2s:0.3768, A3s:0.0468, A4s:0.0233, A5s:0.6301, A6s:0.3454, A7s:0.5015, A8s:0.2824, A9s:0.0243, ATs:0.0191, AJs:0.0004, AQs:0.006, AKs:0.5606"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0394, A3o:0.003, A4o:0.0233, K5o:0.0002, A5o:0.0023, 66:0.0006, A6o:0.0185, 74s:0.0001, K7o:0.0008, A7o:0.02, 88:0.0013, K8o:0.0038, A8o:0.0017, 99:0.0069, K9o:0.0011, A9o:0.0867, T9s:0.0004, TT:0.0002, ATo:0.0366, JTs:0.0001, JJ:0.0137, AJo:0.1165, Q7s:0.0001, QQ:0.063, KQo:0.0005, AQo:0.1873, K2s:0.0003, K4s:0.0002, K5s:0.0002, K6s:0.0075, K7s:0.0073, K8s:0.0049, K9s:0.0043, KTs:0.0166, KQs:0.0034, KK:0.0149, AKo:0.0023, A2s:0.0874, A4s:0.1542, A5s:0.1197, A6s:0.122, A7s:0.0092, A8s:0.2298, A9s:0.0004, ATs:0.0068, AJs:0.334, AQs:0.3556, AKs:0.552, AA:0.997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, 43s:0.0002, 44:0.0006, 54s:0.0001, 74s:0.0002, 76s:0.0002, 77:0.0001, A7o:0.0001, 86s:0.0001, 87s:0.0005, 88:0.001, 93s:0.0001, 95s:0.0001, 96s:0.0002, 97s:0.0007, 99:0.0003, TT:0.0003, JJ:0.0006, QJs:0.0005, QQ:0.0016, K2s:0.0006, K3s:0.0001, K4s:0.0001, K5s:0.0011, K6s:0.0015, K8s:0.0008, K9s:0.0011, KTs:0.0004, KJs:0.002, KQs:0.004, KK:0.9851, AKo:0.9977, A3s:0.0065, A4s:0.1805, A5s:0.4208, A6s:0.221, A7s:0.536, A8s:0.0007, ATs:0.0007, AJs:0.0001, AKs:0.448, AA:0.003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.004, 33:0.0377, 44:0.0481, 55:0.1345, 65s:0.0513, 66:0.0185, 76s:0.0789, 77:0.1189, 88:0.1012, 99:0.0024, TT:0.2447, JJ:0.4211, QQ:0.5035, KQo:0.0005, AQo:0.0343, KJs:0.1745, KQs:0.0225, KK:0.0001, AKo:0.0017, A8s:0.0001, A9s:0.0001, AJs:0.1634, AQs:0.8493, AKs:0.0055"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A2o:0.0021, A3o:0.0009, 44:0.0001, A4o:0.0008, 54s:0.0006, A5o:0.004, 66:0.0004, A7o:0.0002, 88:0.016, K8o:0.0009, A8o:0.0002, 99:0.0104, TT:0.0528, JJ:0.0636, QJo:0.0002, AJo:0.0027, Q3s:0.0003, QQ:0.2384, KQo:0.0005, AQo:0.3082, K4s:0.0002, K5s:0.0449, K6s:0.0456, K7s:0.0105, K8s:0.0668, K9s:0.0889, KJs:0.1079, KQs:0.0844, KK:0.0124, AKo:0.0091, A2s:0.0115, A3s:0.0353, A4s:0.0247, A5s:0.291, A7s:0.005, A8s:0.2386, A9s:0.0368, ATs:0.0108, AJs:0.0059, AQs:0.0989, AKs:0.2056, AA:0.3557"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0017, A2o:0.0009, K3o:0.0471, A3o:0.0024, K4o:0.0291, A4o:0.0253, 53s:0.0001, K5o:0.1272, A5o:0.0879, K6o:0.0013, A6o:0.0002, 77:0.0029, K7o:0.0359, A7o:0.0054, 99:0.0001, K9o:0.0001, KTo:0.0287, JJ:0.2559, KJo:0.0003, QQ:0.1976, KQo:0.5698, AQo:0.6404, K2s:0.3298, K3s:0.0631, K4s:0.7273, K5s:0.0803, K6s:0.3708, K7s:0.2897, K8s:0.0844, K9s:0.1434, KTs:0.6341, KJs:0.0927, KQs:0.0055, KK:0.9849, AKo:0.9492, A2s:0.0527, A3s:0.1744, A4s:0.232, A5s:0.3516, A6s:0.0043, A7s:0.112, A8s:0.0095, A9s:0.0007, ATs:0.001, AJs:0.0506, AQs:0.0374, AKs:0.7487, AA:0.6442"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0051, 44:0.0134, 55:0.0056, 77:0.0081, 88:0.0106, JJ:0.0002, QTs:0.0014, QJs:0.0007, QQ:0.0605, KQo:0.0063, AQo:0.0067, K8s:0.0001, KJs:0.0002, KQs:0.8774, KK:0.0025, AKo:0.04, A2s:0.0028, A3s:0.0025, A4s:0.0018, A5s:0.0001, A8s:0.0008, A9s:0.0001, ATs:0.0003, AJs:0.0001, AQs:0.0138, AKs:0.0402"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0019, 33:0.0307, 44:0.0842, 53s:0.0001, 54s:0.1555, 55:0.0335, 65s:0.2202, 66:0.022, 77:0.1514, 88:0.558, TT:0.0215, JJ:0.7162, QTs:0.0006, QQ:0.8415, AQo:0.0683, KJs:0.2394, KQs:0.5456, KK:0.0002, A5s:0.153, A9s:0.0007, ATs:0.0015, AJs:0.1701, AQs:0.8546"
      },
      {
        "action": "3bet 5.5bb",
        "min": 0.0001,
        "range": "A3o:0.0001, 44:0.0079, K4o:0.0033, A4o:0.0009, 55:0.0007, A5o:0.0003, 77:0.0008, K7o:0.0002, 86s:0.0011, 87s:0.0003, 88:0.0409, A8o:0.0013, TT:0.0098, QTo:0.0001, KTo:0.0001, JJ:0.1561, KJo:0.0035, AJo:0.0081, Q2s:0.0005, Q3s:0.0001, QQ:0.0427, KQo:0.3216, AQo:0.456, K2s:0.0229, K3s:0.0802, K4s:0.1064, K5s:0.4169, K6s:0.0443, K8s:0.0012, K9s:0.0607, KTs:0.0004, KJs:0.0893, KQs:0.0575, KK:0.7994, AKo:0.0102, A2s:0.0854, A3s:0.023, A4s:0.2189, A5s:0.2947, A6s:0.0113, A7s:0.2199, A8s:0.0044, A9s:0.1474, ATs:0.0914, AJs:0.308, AQs:0.0963, AKs:0.0535, AA:0.2971"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0001, Q3o:0.0001, K3o:0.0004, A3o:0.018, K4o:0.0003, A4o:0.3514, K5o:0.0071, A5o:0.0271, K6o:0.0046, 77:0.0184, K7o:0.0207, A8o:0.0003, 96s:0.0001, A9o:0.0002, TT:0.0004, QTo:0.0001, JJ:0.0051, KJo:0.0058, AJo:0.0007, Q5s:0.0003, QQ:0.0513, KQo:0.0931, AQo:0.085, K2s:0.0787, K3s:0.0087, K4s:0.11, K5s:0.0032, K6s:0.0945, K7s:0.0777, K8s:0.0005, K9s:0.0116, KJs:0.0187, KQs:0.0183, KK:0.1999, AKo:0.032, A2s:0.1885, A3s:0.1299, A4s:0.6173, A5s:0.03, A6s:0.0225, A7s:0.4391, A8s:0.0806, A9s:0.0017, ATs:0.0376, AJs:0.008, AQs:0.0229, AKs:0.1256, AA:0.7029"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0004, 66:0.0003, 77:0.0107, 88:0.001, TT:0.0006, JJ:0.0025, QQ:0.0645, KQo:0.014, AQo:0.0098, K2s:0.1718, K3s:0.0004, K4s:0.128, K5s:0.0188, K6s:0.2781, K7s:0.4376, K8s:0.0055, K9s:0.228, KTs:0.046, KJs:0.0488, KQs:0.3645, KK:0.0005, AKo:0.9577, A3s:0.0097, A4s:0.0007, A5s:0.2252, A7s:0.0211, A9s:0.0002, AJs:0.0002, AQs:0.0257, AKs:0.8209"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0076, 33:0.1193, 44:0.0662, 54s:0.0003, 55:0.3703, 64s:0.0229, 65s:0.2203, 66:0.1529, 76s:0.0123, 77:0.1479, 88:0.161, 98s:0.0002, 99:0.1131, T6s:0.0001, TT:0.0524, J5s:0.0001, JTs:0.0053, JJ:0.6221, Q9s:0.0001, QQ:0.6898, KQo:0.0561, AQo:0.0777, K6s:0.0001, K9s:0.0003, KTs:0.0086, KJs:0.095, KQs:0.0009, AKo:0.0001, A3s:0.001, A5s:0.0001, A8s:0.0003, A9s:0.1059, ATs:0.1555, AJs:0.6078, AQs:0.4808"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0161, 33:0.0047, A3o:0.0041, 44:0.001, K4o:0.0036, A4o:0.1039, 54s:0.0015, 55:0.0501, K5o:0.0024, A5o:0.1421, 65s:0.0001, 66:0.0481, 76o:0.0001, K6o:0.0002, A6o:0.0033, 75s:0.0004, 77:0.1595, K7o:0.0024, A7o:0.0101, 86s:0.0001, A8o:0.0022, 95s:0.0001, K9o:0.002, A9o:0.0004, TT:0.0024, KTo:0.0001, J4s:0.0001, J9s:0.0002, JJ:0.0488, KJo:0.0635, AJo:0.0002, Q3s:0.0001, Q4s:0.0006, Q6s:0.0001, Q9s:0.0002, QQ:0.2024, KQo:0.1494, AQo:0.8464, K2s:0.0494, K3s:0.0183, K4s:0.0144, K5s:0.0404, K6s:0.0249, K8s:0.0075, K9s:0.0311, KTs:0.0262, KJs:0.0161, KQs:0.0095, KK:0.1305, AKo:0.0174, A2s:0.5244, A3s:0.0887, A4s:0.3004, A5s:0.0627, A6s:0.2611, A7s:0.1257, A8s:0.0878, A9s:0.2986, ATs:0.2718, AJs:0.2232, AQs:0.421, AKs:0.0052, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0034, 33:0.0082, 44:0.1186, 55:0.0667, 66:0.2043, 77:0.2463, 88:0.0588, Q4s:0.0001, Q5s:0.0007, Q6s:0.0001, Q8s:0.0001, QJs:0.0002, QQ:0.1078, KQo:0.0992, AQo:0.0362, K2s:0.5093, K3s:0.7544, K4s:0.7872, K5s:0.9128, K6s:0.7553, K7s:0.6805, K8s:0.8023, K9s:0.5617, KTs:0.9162, KJs:0.5131, KQs:0.9862, KK:0.8695, AKo:0.9825, A2s:0.1888, A3s:0.8824, A4s:0.6886, A5s:0.8989, A7s:0.0232, A8s:0.0773, A9s:0.0272, ATs:0.0017, AQs:0.0981, AKs:0.9948"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22, 32s:0.0008, 33:0.9567, 53o:0.0006, 43s:0.6232, 44:0.9832, 54o:0.0238, 52s:0.2335, 53s:0.7012, 54s:0.9569, 55:0.9888, 65o:0.7262, 62s:0.008, 63s:0.3145, 64s:0.9575, 65s:0.9291, 66:0.9954, 76o:0.1289, 96o:0.0002, 74s:0.0047, 75s:0.4201, 76s:0.8741, 77:0.9809, 85s:0.6747, 86s:0.9125, 87s:0.7145, 88:0.9928, 95s:0.0002, 96s:0.0268, 97s:0.8019, 98s:0.9659, 99:0.9985, T5s:0.0001, T6s:0.0902, T7s:0.4932, T8s:0.1502, T9s:0.8436, TT:0.9993, KTo:0.0002, J3s:0.0002, J5s:0.0001, J6s:0.0467, J7s:0.0236, J8s:0.0867, J9s:0.3831, JTs:0.6025, JJ:0.9941, KJo:0.2104, AJo:0.7221, Q2s:0.0002, Q3s:0.0013, Q4s:0.0155, Q5s:0.0304, Q6s:0.027, Q9s:0.0288, QTs:0.1124, QJs:0.4376, QQ:0.7914, KQo:0.241, AQo:0.181, K2s:0.2672, K3s:0.0149, K4s:0.1183, K5s:0.0123, K6s:0.1142, K7s:0.0736, K8s:0.2691, K9s:0.6581, KTs:0.9091, KJs:0.7039, KQs:0.0454, A2s:0.1626, A3s:0.2185, A4s:0.7498, A5s:0.616, A6s:0.0953, A7s:0.5142, A8s:0.2661, A9s:0.7287, ATs:0.8932, AJs:0.9968, AQs:0.6596"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.0024, 33:0.0165, K3o:0.0004, A3o:0.087, 54o:0.0033, A4o:0.2262, 52s:0.0002, 53s:0.048, 54s:0.0268, K5o:0.0001, A5o:0.0941, 63s:0.0003, 65s:0.0001, K6o:0.0175, A6o:0.0017, 75s:0.1901, 76s:0.0711, K7o:0.0001, A7o:0.0004, K8o:0.0005, A8o:0.0104, 95s:0.0001, 96s:0.0019, 98s:0.0002, 99:0.0001, A9o:0.002, T7s:0.0001, T9s:0.0001, TT:0.0002, KTo:0.0138, J5s:0.0001, J8s:0.0002, JJ:0.0059, KJo:0.0059, Q2s:0.0005, Q3s:0.0002, Q4s:0.149, Q5s:0.0478, Q8s:0.0864, Q9s:0.0002, QTs:0.0001, QQ:0.1461, KQo:0.3068, AQo:0.8051, K2s:0.0084, K3s:0.0051, K4s:0.0025, K5s:0.0569, K6s:0.0208, K7s:0.2484, K8s:0.0514, KTs:0.0032, KJs:0.1807, KQs:0.0006, KK:0.3993, AKo:0.0126, A2s:0.455, A3s:0.4647, A4s:0.0393, A5s:0.0116, A6s:0.5773, A7s:0.3074, A8s:0.6247, A9s:0.1287, ATs:0.0855, AJs:0.0027, AQs:0.2695, AKs:0.3221, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0003, 33:0.0268, K3o:0.0175, A3o:0.0001, 44:0.0163, K4o:0.0936, A4o:0.0005, 53s:0.0007, 55:0.0111, K5o:0.0007, A5o:0.0033, 62s:0.0002, 64s:0.0005, 65s:0.0008, 66:0.0044, K6o:0.0083, 73s:0.0001, 76s:0.0027, 77:0.0188, Q7o:0.0002, 87s:0.0039, 88:0.0072, 98s:0.0008, 99:0.0002, Q2s:0.0158, Q3s:0.0029, Q4s:0.0023, Q5s:0.0345, Q6s:0.0176, Q7s:0.0036, Q8s:0.0004, Q9s:0.0228, QTs:0.0111, QJs:0.0026, QQ:0.0625, KQo:0.4472, AQo:0.0138, K2s:0.657, K3s:0.8508, K4s:0.7828, K5s:0.8259, K6s:0.7877, K7s:0.6091, K8s:0.5969, K9s:0.1683, KTs:0.0783, KJs:0.1077, KQs:0.9539, KK:0.6007, AKo:0.9874, A2s:0.3084, A3s:0.272, A4s:0.2048, A5s:0.3651, A6s:0.2603, A7s:0.1646, A8s:0.1069, A9s:0.0657, ATs:0.014, AJs:0.0001, AQs:0.0708, AKs:0.6779"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0575, TT:0.236, JJ:0.241, QQ:0.2501, KK, AKo:0.7514, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0046, 88:0.0736, 99:0.1048, TT:0.2103, JJ:0.2244, QQ:0.2411, KK, AKo:0.0021, AKs:0.2021, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0015, 44:0.0001, 54s:0.2438, 55:0.4475, 64s:0.0401, 65s:0.5466, 66:0.5635, 76s:0.2067, 77:0.1589, 88:0.5693, 98s:0.0027, 99:0.2588, TT:0.3109, JTs:0.004, JJ:0.6207, AJo:0.0011, QTs:0.0003, QQ:0.9996, AQo:0.5638, K6s:0.0066, K7s:0.0181, K8s:0.001, K9s:0.0847, KTs:0.5103, KJs:0.3493, KQs:0.9838, A3s:0.0031, A4s:0.0446, A5s:0.0654, A6s:0.0337, A7s:0.3632, A8s:0.2868, A9s:0.1217, ATs:0.9907, AJs:0.9268, AQs:0.9424, AKs:0.0003"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.9269, 33:0.0011, A3o:0.806, A4o:0.8314, A5o:0.0392, 65s:0.0001, 66:0.0005, A6o:0.2519, 75s:0.0003, 77:0.0133, A7o:0.311, 88:0.0002, A8o:0.0428, 99:0.0002, A9o:0.0195, TT:0.0002, ATo:0.0596, J2s:0.0001, J5s:0.0001, JJ:0.0487, KJo:0.0352, AJo:0.1348, Q5s:0.0002, QJs:0.0002, QQ:0.0001, KQo:0.0012, AQo:0.3776, K2s:0.1412, K3s:0.0353, K4s:0.0573, K5s:0.001, K6s:0.0355, K7s:0.0009, K8s:0.0277, KTs:0.0002, KJs:0.0001, KQs:0.0002, A2s:0.2816, A3s:0.163, A4s:0.0592, A6s:0.024, A7s:0.065, A8s:0.0493, A9s:0.1497, ATs:0.0005, AJs:0.0685, AQs:0.0572, AKs:0.2185, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0113, A3o:0.0003, 44:0.0162, 55:0.0543, A5o:0.0001, 66:0.0548, 76s:0.0002, 77:0.1805, 87s:0.0002, 88:0.3065, 98s:0.0002, 99:0.3676, TT:0.1722, JJ:0.2593, AJo:0.0003, QQ:0.0002, K4s:0.0008, K5s:0.0021, K6s:0.0004, K7s:0.0098, K8s:0.0049, K9s:0.5638, KTs:0.3774, KJs:0.6133, KQs:0.0129, KK, AKo, A2s:0.5808, A3s:0.4662, A4s:0.5944, A5s:0.9267, A6s:0.6746, A7s:0.5125, A8s:0.4517, A9s:0.631, ATs:0.0088, AJs:0.0047, AQs:0.0001, AKs:0.7812"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0783, K3o:0.0044, A3o:0.0059, 44:0.0003, A4o:0.0277, K5o:0.0001, A5o:0.0109, K6o:0.002, A6o:0.0001, A7o:0.0008, 88:0.0001, K9o:0.0002, A9o:0.0031, T3s:0.0002, TT:0.0004, ATo:0.0039, QQ:0.0011, KQo:0.0004, AQo:0.2905, K2s:0.0126, K4s:0.0052, K6s:0.0002, K7s:0.0123, K8s:0.0001, K9s:0.0185, KTs:0.0001, KJs:0.0084, KQs:0.0042, KK:0.0001, AKo:0.0313, A2s:0.3505, A3s:0.1447, A4s:0.0015, A5s:0.001, A6s:0.0313, A7s:0.246, A8s:0.0972, A9s:0.0548, ATs:0.0177, AJs:0.332, AQs:0.1124, AKs:0.3711, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K3s:0.0004, K4s:0.0422, K6s:0.0222, K7s:0.0008, K9s:0.0116, KTs:0.0004, KJs:0.0001, KQs:0.0079, KK:0.9999, AKo:0.9686, A2s:0.036, A3s:0.0485, A4s:0.0229, A6s:0.0003, A7s:0.0227, A8s:0.0119, A9s:0.0005, ATs:0.0163, AJs:0.0001, AKs:0.6289"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9985, 32s:0.9521, 33, 43o:0.022, 53o:0.9461, 63o:0.0001, 42s:0.9975, 43s:0.9926, 44:0.9945, 54o:0.9981, 64o:0.9922, A4o:0.0099, 52s:0.9896, 53s:0.9948, 54s:0.9957, 55:0.9986, 65o:0.9982, 75o:0.9957, 85o:0.0565, 95o:0.0002, A5o:0.234, 62s:0.9438, 63s:0.9989, 64s:0.9989, 65s:0.9991, 66:0.9997, 76o:0.9983, 86o:0.9917, K6o:0.4917, 73s:0.9969, 74s:0.9727, 75s:0.9998, 76s:0.9839, 77, 87o:0.9812, 97o:0.9682, K7o:0.5085, A7o:0.0071, 82s:0.6463, 83s:0.0211, 84s:0.9841, 85s:0.9985, 86s:0.9951, 87s:0.9963, 88, 98o:0.8563, T8o:0.5502, K8o:0.1327, A8o:0.3159, 92s:0.4743, 93s:0.7511, 94s:0.3135, 95s:0.9843, 96s:0.9992, 97s:0.9999, 98s:0.9981, 99:0.9997, T9o:0.8887, K9o:0.7959, A9o:0.7719, T2s:0.189, T3s:0.152, T4s:0.4936, T5s:0.9664, T6s:0.9638, T7s:0.9967, T8s:0.9997, T9s:0.9989, TT:0.9992, JTo:0.983, QTo:0.7732, KTo:0.9947, ATo:0.9649, J2s:0.0061, J3s:0.1775, J4s:0.973, J5s:0.9603, J6s:0.9934, J7s:0.9782, J8s:0.9935, J9s:0.9986, JTs:0.9998, JJ:0.9999, QJo:0.9893, KJo:0.9992, AJo:0.9995, Q2s:0.7738, Q3s:0.9137, Q4s:0.8884, Q5s:0.8129, Q6s:0.9832, Q7s:0.9368, Q8s:0.9628, Q9s:0.7593, QTs:0.9949, QJs:0.9999, QQ:0.0064, KQo:0.2468, AQo:0.0968, K2s:0.2535, K3s:0.2826, K4s:0.9368, K5s:0.7997, K6s:0.987, K7s:0.6455, K8s:0.9775, K9s:0.9546, KTs:0.9993, KJs:0.9997, KQs:0.0238, AKo:0.0001, A2s:0.0501, A3s:0.3782, A4s:0.2927, A5s:0.4489, A6s:0.9247, A7s:0.7887, A8s:0.8989, A9s:0.9909, ATs:0.9999, AJs:0.9995, AQs:0.2397, AKs:0.0001"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "Q2o:0.0006, K2o:0.0143, A2o:0.4116, 32s:0.0006, K3o:0.0437, A3o:0.0695, 43s:0.0005, Q4o:0.0002, K4o:0.001, A4o:0.381, 54s:0.0001, Q5o:0.0018, K5o:0.0014, A5o:0.4848, 63s:0.0002, Q6o:0.0163, K6o:0.0485, A6o:0.2417, 74s:0.0069, 76s:0.0158, Q7o:0.0014, K7o:0.1275, A7o:0.0215, 82s:0.0001, 86s:0.0024, Q8o:0.168, K8o:0.0044, A8o:0.4371, 94s:0.0001, Q9o:0.0038, A9o:0.1009, T6s:0.0082, TT:0.0007, QTo:0.2239, ATo:0.0268, J7s:0.0073, J8s:0.0001, JJ:0.0001, KJo:0.0002, AJo:0.0001, Q2s:0.1487, Q3s:0.034, Q4s:0.0178, Q5s:0.1068, Q6s:0.0065, Q7s:0.0372, Q8s:0.0291, Q9s:0.1717, QTs:0.0033, QQ:0.197, KQo:0.0437, AQo:0.5756, K2s:0.5769, K3s:0.5496, K4s:0.0025, K5s:0.0055, K6s:0.0001, K7s:0.2382, K9s:0.0445, KJs:0.0002, KQs:0.006, KK, AKo:0.1532, A2s:0.3841, A3s:0.0072, A4s:0.0083, A5s:0.0218, A6s:0.0405, A7s:0.0217, A8s:0.0338, A9s:0.0062, ATs:0.0001, AJs:0.0003, AQs:0.3232, AKs:0.9439, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0015, A3o:0.4142, 44:0.0054, A4o:0.3333, 53s:0.0002, 54s:0.0001, 55:0.0014, 66:0.0001, 73s:0.0001, A7o:0.0029, 87s:0.0001, 99:0.0002, Q2s:0.0042, Q3s:0.0299, Q4s:0.0723, Q5s:0.0657, Q6s:0.0004, Q7s:0.0251, Q8s:0.0071, Q9s:0.0684, QTs:0.0015, QQ:0.7967, KQo:0.7094, AQo:0.3276, K2s:0.1678, K3s:0.1627, K4s:0.0576, K5s:0.1921, K6s:0.0126, K7s:0.1142, K8s:0.0221, KJs:0.0001, KQs:0.9702, AKo:0.8467, A2s:0.5642, A3s:0.6144, A4s:0.6983, A5s:0.5289, A6s:0.0333, A7s:0.1896, A8s:0.0672, A9s:0.0027, AQs:0.4371, AKs:0.056"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@4.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.8039, A2o:0.2143, 33:0.9971, A3o:0.338, 43s:0.5011, 44:0.9963, A4o:0.3965, 53s:0.986, 54s:0.9999, 55, 65o:0.0003, K5o:0.0137, A5o:0.5517, 63s:0.002, 64s:0.9994, 65s:0.9992, 66, 76o:0.6724, K6o:0.2665, A6o:0.4349, 73s:0.0017, 74s:0.8146, 75s:0.9998, 76s, 77, 87o:0.6374, 97o:0.0005, T7o:0.0012, K7o:0.6895, A7o:0.5418, 83s:0.0001, 85s:0.9947, 86s:0.9997, 87s:0.9999, 88, 98o:0.4811, T8o:0.9977, J8o:0.8899, Q8o:0.0132, K8o:0.8724, A8o:0.954, 94s:0.0006, 95s:0.9174, 96s:0.9999, 97s:0.9999, 98s, 99, T9o:0.9998, J9o:0.9995, Q9o:0.9999, K9o:0.6868, A9o:0.9261, T2s:0.0007, T3s:0.0014, T4s:0.0558, T5s:0.683, T6s:0.9989, T7s:0.9999, T8s:0.9999, T9s, TT, JTo, QTo, KTo, ATo, J3s:0.1046, J4s:0.9996, J5s:0.9998, J6s, J7s:0.9997, J8s:0.9998, J9s, JTs, JJ:0.9999, QJo, KJo:0.9999, AJo:0.9999, Q2s:0.3993, Q3s:0.9989, Q4s:0.9996, Q5s:0.9999, Q6s:0.9999, Q7s, Q8s:0.9999, Q9s:0.9999, QTs, QJs, QQ:0.9998, KQo:0.9999, AQo:0.9452, K2s:0.9988, K3s:0.9998, K4s:0.9999, K5s:0.9999, K6s, K7s:0.9998, K8s:0.9998, K9s:0.9999, KTs, KJs:0.9994, KQs:0.9997, KK:0.0126, A2s:0.9312, A3s:0.4109, A4s:0.4441, A5s:0.6095, A6s:0.7704, A7s:0.9838, A8s, A9s:0.9999, ATs, AJs:0.9999, AQs:0.944"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "K2o:0.0005, A2o:0.7709, K3o:0.0009, A3o:0.5441, K4o:0.0139, A4o:0.347, K5o:0.195, A5o:0.0153, K6o:0.0009, A6o:0.4297, K7o:0.0028, A7o:0.2932, K8o:0.1221, A8o:0.0276, K9o:0.3121, A9o:0.0737, J3s:0.0001, JJ:0.0001, QQ:0.0002, AQo:0.0001, K2s:0.0002, K3s:0.0001, K7s:0.0001, K8s:0.0001, KK:0.9874, AKo:0.3813, A4s:0.0001, AQs:0.0063, AKs:0.9991, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1959, A2o:0.0148, 33:0.0029, A3o:0.1179, 44:0.0037, A4o:0.2565, A5o:0.433, 65s:0.0001, A6o:0.1354, 75s:0.0001, A7o:0.165, A8o:0.0184, A9o:0.0002, T8s:0.0001, Q4s:0.0001, Q6s:0.0001, KQo:0.0001, AQo:0.0547, K5s:0.0001, K7s:0.0001, K9s:0.0001, KJs:0.0006, KQs:0.0003, AKo:0.6187, A2s:0.0688, A3s:0.589, A4s:0.5558, A5s:0.3905, A6s:0.2296, A7s:0.0161, A9s:0.0001, AJs:0.0001, AQs:0.0497, AKs:0.0009"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.0|BB:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0052, 55:0.2066, 66:0.975, 77:0.9885, 88:0.9969, 99, TT, ATo:0.0004, JJ, AJo:0.0011, QQ, AQo:0.0257, KK, AKo, A8s:0.0001, A9s:0.0001, ATs:0.0022, AJs:0.0046, AQs:0.4156, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.0|BB:3BET@7.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2973, A2o:0.0615, 33:0.0819, A3o:0.0037, 43s:0.0563, 44:0.0464, A4o:0.3192, 53s:0.0991, 54s:0.9301, 55:0.579, A5o:0.018, 63s:0.0012, 64s:0.5717, 65s:0.869, 66:0.8361, 76o:0.1822, K6o:0.0002, A6o:0.0287, 73s:0.0005, 74s:0.004, 75s:0.9674, 76s:0.832, 77:0.6164, 87o:0.1622, T7o:0.0001, A7o:0.0392, 83s:0.0009, 85s:0.7544, 86s:0.7649, 87s:0.4938, 88:0.7675, 98o:0.1281, T8o:0.1744, J8o:0.0061, A8o:0.0276, 93s:0.0001, 95s:0.0366, 96s:0.024, 97s:0.9553, 98s:0.8024, 99:0.7489, T9o:0.2466, A9o:0.1064, T5s:0.0004, T6s:0.0031, T7s:0.7775, T8s:0.9094, T9s:0.4114, TT:0.4286, JTo:0.6792, QTo:0.8322, KTo:0.0746, ATo:0.3836, J6s:0.0002, J7s:0.6322, J8s:0.9616, J9s:0.4179, JTs:0.7816, JJ:0.9639, QJo:0.3222, KJo:0.0515, AJo:0.1216, Q3s:0.0001, Q5s:0.019, Q6s:0.7713, Q7s:0.6945, Q8s:0.9469, Q9s:0.9469, QTs:0.9891, QJs:0.9835, QQ:0.9986, KQo:0.1532, AQo:0.3561, K3s:0.0072, K4s:0.1652, K5s:0.7269, K6s:0.9165, K7s:0.9724, K8s:0.9589, K9s:0.9632, KTs:0.8393, KJs:0.4786, KQs:0.9469, KK:0.3706, A2s:0.5631, A3s:0.0438, A4s:0.7586, A5s:0.3214, A6s:0.4955, A7s:0.6447, A8s:0.8426, A9s:0.4651, ATs:0.5953, AJs:0.5515, AQs:0.6853, AA:0.0002"
      },
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.8574, 83o:0.0001, Q3o:0.0001, A3o:0.9712, Q4o:0.0002, K4o:0.0001, A4o:0.6744, 54s:0.0003, 95o:0.0001, K5o:0.0552, A5o:0.9719, 64s:0.0002, 65s:0.0001, 86o:0.0001, T6o:0.0001, K6o:0.0005, A6o:0.967, 73s:0.0002, Q7o:0.0001, K7o:0.0034, A7o:0.9361, 83s:0.0002, 85s:0.0012, 86s:0.0001, 87s:0.0001, T8o:0.0083, J8o:0.0001, Q8o:0.0001, K8o:0.0072, A8o:0.8758, 94s:0.0005, 95s:0.0374, 96s:0.0004, 97s:0.0001, 98s:0.0044, 99:0.0025, T9o:0.0151, K9o:0.0421, A9o:0.8754, T4s:0.001, T5s:0.0215, T7s:0.001, TT:0.232, JTo:0.0066, KTo:0.0513, ATo:0.5678, J4s:0.0006, J5s:0.1065, J6s:0.0002, J8s:0.001, J9s:0.0002, JJ:0.0274, QJo:0.0001, KJo:0.2538, AJo:0.8248, Q4s:0.0001, Q5s:0.0238, Q6s:0.0003, Q8s:0.0001, Q9s:0.0005, QTs:0.0002, QQ:0.0001, KQo:0.0203, AQo:0.5847, K3s:0.0234, K4s:0.0016, K5s:0.2529, K6s:0.0183, K7s:0.0039, K8s:0.0366, K9s:0.003, KTs:0.0002, KJs:0.0051, KQs:0.0012, KK:0.2386, AKo:0.172, A2s:0.1148, A3s:0.2988, A4s:0.0404, A5s:0.0696, A6s:0.1482, A7s:0.0165, A8s:0.0083, A9s:0.0067, ATs:0.0191, AJs:0.0095, AQs:0.1229, AKs:0.8257, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.5125, A2o:0.0028, 33:0.918, A3o:0.008, 44:0.9536, A4o:0.0064, 53s:0.002, 54s:0.0174, 55:0.4208, A5o:0.0101, 63s:0.0008, 64s:0.003, 65s:0.0805, 66:0.1639, 76o:0.0001, K6o:0.0002, A6o:0.0009, 74s:0.0005, 75s:0.0233, 76s:0.16, 77:0.3833, 87o:0.0339, A7o:0.0247, 82s:0.0001, 83s:0.0007, 85s:0.0031, 86s:0.2242, 87s:0.4837, 88:0.2325, T8o:0.0002, J8o:0.0001, A8o:0.0966, 93s:0.0002, 95s:0.0022, 96s:0.0072, 97s:0.0029, 98s:0.1725, 99:0.2486, T9o:0.0149, J9o:0.0013, K9o:0.0014, A9o:0.0182, T4s:0.0001, T5s:0.0006, T7s:0.0401, T8s:0.0889, T9s:0.5879, TT:0.3394, JTo:0.0045, QTo:0.0001, KTo:0.0145, ATo:0.0486, J4s:0.0001, J5s:0.0001, J6s:0.0002, J7s:0.0866, J8s:0.0136, J9s:0.5812, JTs:0.218, JJ:0.0087, QJo:0.0001, KJo:0.0076, AJo:0.0536, Q4s:0.0002, Q5s:0.0001, Q6s:0.0001, Q7s:0.0001, Q8s:0.0021, Q9s:0.0047, QTs:0.0054, QJs:0.0043, QQ:0.0013, KQo:0.001, AQo:0.0592, K2s:0.0001, K3s:0.0019, K4s:0.0066, K5s:0.0178, K6s:0.0021, K7s:0.0236, K8s:0.0014, K9s:0.0332, KTs:0.1603, KJs:0.5161, KQs:0.0482, KK:0.3907, AKo:0.828, A2s:0.3197, A3s:0.6574, A4s:0.2009, A5s:0.609, A6s:0.3563, A7s:0.3389, A8s:0.1491, A9s:0.5281, ATs:0.3856, AJs:0.439, AQs:0.1918, AKs:0.1743"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|BB:3BET@7.0|BTN:4BET@11.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0114, K2o:0.0008, A2o:0.0048, 32s:0.0229, 33:0.3759, 53o:0.0013, Q3o:0.0007, K3o:0.0007, A3o:0.0965, 42s:0.0343, 43s:0.2964, 44:0.4497, 54o:0.0674, 64o:0.0002, 74o:0.0002, K4o:0.0157, A4o:0.114, 52s:0.0009, 53s:0.157, 54s:0.2011, 55:0.282, 65o:0.0292, 75o:0.0002, 85o:0.0003, T5o:0.0002, J5o:0.0004, Q5o:0.0036, K5o:0.1022, A5o:0.027, 62s:0.0254, 63s:0.0341, 64s:0.4793, 65s:0.0517, 66:0.9319, 76o:0.0086, T6o:0.0005, Q6o:0.0002, K6o:0.0177, A6o:0.256, 73s:0.001, 74s:0.3348, 75s:0.255, 76s:0.0237, 77:0.9802, 87o:0.0026, 97o:0.0037, T7o:0.0027, J7o:0.0008, Q7o:0.0003, K7o:0.0132, A7o:0.9731, 83s:0.016, 84s:0.3038, 85s:0.5948, 86s:0.1403, 87s:0.0819, 88:0.963, 98o:0.0767, T8o:0.044, J8o:0.0763, Q8o:0.098, K8o:0.0217, A8o:0.9889, 92s:0.0004, 93s:0.0774, 94s:0.0143, 95s:0.7864, 96s:0.9188, 97s:0.8946, 98s:0.8321, 99:0.9913, T9o:0.3873, J9o:0.4368, Q9o:0.1209, K9o:0.2959, A9o:0.9999, T2s:0.0075, T3s:0.5163, T4s:0.3417, T5s:0.5393, T6s:0.7661, T7s:0.8188, T8s:0.2506, T9s:0.6813, TT:0.9192, JTo:0.5702, QTo:0.9905, KTo:0.1674, ATo:0.9999, J2s:0.2303, J3s:0.3736, J4s:0.6879, J5s:0.8552, J6s:0.4512, J7s:0.8768, J8s:0.7293, J9s:0.8698, JTs:0.2459, JJ:0.9625, QJo:0.9875, KJo:0.3017, AJo:0.9997, Q2s:0.367, Q3s:0.2437, Q4s:0.4023, Q5s:0.6126, Q6s:0.8295, Q7s:0.7065, Q8s:0.9645, Q9s:0.9901, QTs:0.7743, QJs:0.9692, QQ:0.9487, KQo:0.3653, AQo:0.9997, K2s:0.0411, K3s:0.0074, K4s:0.0313, K5s:0.0001, K6s:0.0004, K7s:0.0012, K8s:0.005, K9s:0.0807, KTs:0.0141, KJs:0.0007, KQs:0.409, AKo:0.074, A2s:0.0026, A3s:0.089, A4s:0.1444, A5s:0.0008, A6s:0.1048, A7s:0.8987, A8s:0.9993, A9s, ATs:0.9999, AJs:0.9998, AQs:0.9997, AKs:0.0821, AA:0.3059"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9879, K2o:0.1699, A2o:0.9815, 32s:0.4766, 33:0.6237, 53o:0.0002, Q3o:0.0001, K3o:0.144, A3o:0.8877, 42s:0.4639, 43s:0.6692, 44:0.55, 54o:0.0253, 64o:0.0007, T4o:0.0001, Q4o:0.0003, K4o:0.483, A4o:0.8849, 52s:0.8203, 53s:0.7, 54s:0.7945, 55:0.7179, 65o:0.2997, 75o:0.0001, J5o:0.0002, Q5o:0.0005, K5o:0.7961, A5o:0.9728, 62s:0.1079, 63s:0.1004, 64s:0.5159, 65s:0.9466, 66:0.0681, 76o:0.0168, 86o:0.0038, K6o:0.0599, A6o:0.7374, 72s:0.0001, 73s:0.1336, 74s:0.3467, 75s:0.7415, 76s:0.9759, 77:0.0196, 87o:0.1406, 97o:0.0001, K7o:0.4425, A7o:0.0269, 82s:0.0084, 83s:0.0008, 84s:0.0997, 85s:0.3964, 86s:0.8521, 87s:0.9156, 88:0.037, 98o:0.0003, T8o:0.099, J8o:0.0005, K8o:0.3691, A8o:0.0111, 92s:0.007, 93s:0.0001, 94s:0.0065, 95s:0.0504, 96s:0.0687, 97s:0.0708, 98s:0.1672, 99:0.0087, T9o:0.3579, K9o:0.4258, A9o:0.0001, T2s:0.4785, T3s:0.1197, T4s:0.3878, T5s:0.2149, T6s:0.1393, T7s:0.1376, T8s:0.7491, T9s:0.3181, TT:0.0808, JTo:0.4271, QTo:0.0027, KTo:0.8325, ATo:0.0001, J2s:0.2367, J3s:0.0738, J4s:0.1377, J5s:0.0797, J6s:0.0589, J7s:0.0451, J8s:0.2704, J9s:0.1261, JTs:0.7534, JJ:0.0375, QJo:0.0005, KJo:0.6982, AJo:0.0003, Q2s:0.2117, Q3s:0.1017, Q4s:0.1543, Q5s:0.1053, Q6s:0.1394, Q7s:0.0011, Q8s:0.0354, Q9s:0.0096, QTs:0.2257, QJs:0.0307, QQ:0.0513, KQo:0.6347, AQo:0.0003, K2s:0.9578, K3s:0.9896, K4s:0.968, K5s:0.9997, K6s:0.9994, K7s:0.9987, K8s:0.9942, K9s:0.9193, KTs:0.9858, KJs:0.9993, KQs:0.591, KK, AKo:0.926, A2s:0.9973, A3s:0.9109, A4s:0.8556, A5s:0.9992, A6s:0.8952, A7s:0.1013, A8s:0.0006, ATs:0.0001, AJs:0.0002, AQs:0.0003, AKs:0.9179, AA:0.6941"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|BB:3BET@7.0|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0579, 99:0.8662, TT, JJ, AJo:0.2121, QQ, AQo:0.4862, KK, AKo, ATs:0.6072, AJs:0.7176, AQs:0.8299, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 75s:0.0001, 77:0.0001, 87s:0.0001, T4s:0.0001, T8s:0.0001, TT:0.0013, J3s:0.0001, QTs:0.0001, QQ:0.0001, K2s:0.0002, K6s:0.0001, KTs:0.0001, KJs:0.0002, KK:0.1632, AKo:0.121, A3s:0.0001, A4s:0.0175, A5s:0.0868, A7s:0.0001, ATs:0.0312, AQs:0.2495, AKs:0.0035, AA:0.3352"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, A4o:0.0005, 55:0.0001, 64s:0.0021, 84s:0.0011, 86s:0.0002, 87s:0.0008, 88:0.0028, 93s:0.0004, 95s:0.0003, 97s:0.0001, 98s:0.0001, T3s:0.0005, ATo:0.1794, J3s:0.0004, J8s:0.0004, J9s:0.0002, AJo:0.0012, Q3s:0.0102, Q4s:0.0026, Q9s:0.0053, QTs:0.0001, QQ:0.0475, K5s:0.0002, K6s:0.0038, K7s:0.0002, KTs:0.0001, KJs:0.0004, KQs:0.0165, KK:0.8339, AKo:0.768, A2s:0.186, A3s:0.3482, A4s:0.202, A5s:0.2748, A6s:0.025, A7s:0.457, A8s:0.0013, A9s:0.0583, ATs:0.0136, AJs:0.0085, AQs:0.2829, AKs:0.9942, AA:0.6648"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6067, A2o:0.0796, 32s:0.0072, 33:0.264, A3o:0.1145, 42s:0.0007, 43s:0.0014, 44:0.5316, 54o:0.0028, 74o:0.0003, A4o:0.1247, 52s:0.0002, 53s:0.153, 54s:0.1931, 55:0.9321, 65o:0.0026, 75o:0.0016, A5o:0.0859, 62s:0.0003, 63s:0.1082, 64s:0.3014, 65s:0.6635, 66:0.8562, A6o:0.0777, 72s:0.0005, 73s:0.0004, 74s:0.0138, 75s:0.1257, 76s:0.1974, 77:0.7145, A7o:0.1131, 82s:0.0001, 83s:0.0001, 84s:0.0015, 85s:0.0105, 86s:0.2813, 87s:0.1688, 88:0.9573, 98o:0.001, T8o:0.0002, K8o:0.0008, A8o:0.1935, 95s:0.0002, 96s:0.2045, 97s:0.4272, 98s:0.2357, 99:0.9275, T9o:0.0031, A9o:0.1893, T2s:0.0032, T3s:0.0038, T4s:0.0627, T5s:0.0014, T6s:0.0179, T7s:0.2344, T8s:0.7234, T9s:0.5333, TT:0.5477, JTo:0.0013, KTo:0.0336, ATo:0.2691, J5s:0.0002, J6s:0.0004, J7s:0.0205, J8s:0.3215, J9s:0.1396, JTs:0.5676, JJ:0.7916, QJo:0.0019, KJo:0.002, AJo:0.459, Q2s:0.0007, Q5s:0.0085, Q6s:0.0467, Q7s:0.0001, Q8s:0.0437, Q9s:0.1259, QTs:0.1493, QJs:0.103, QQ:0.8414, KQo:0.0016, AQo:0.7307, K2s:0.044, K3s:0.0013, K4s:0.1406, K5s:0.1656, K6s:0.2804, K7s:0.183, K8s:0.0027, K9s:0.2374, KTs:0.4289, KJs:0.114, KQs:0.291, KK:0.1415, AKo:0.2295, A2s:0.0793, A3s:0.3325, A4s:0.0372, A5s:0.2093, A6s:0.3273, A7s:0.1816, A8s:0.3479, A9s:0.461, ATs:0.0786, AJs:0.5352, AQs:0.8982, AKs:0.115, AA:0.3837"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1638, A2o:0.1356, 32s:0.004, 33:0.1069, 63o:0.0001, T3o:0.0001, A3o:0.5632, 42s:0.0007, 43s:0.0496, 44:0.2609, 54o:0.0003, 64o:0.0005, A4o:0.6023, 53s:0.0045, 54s:0.0987, 55:0.014, 65o:0.0022, 75o:0.0003, A5o:0.4323, 62s:0.0023, 63s:0.0029, 64s:0.0232, 65s:0.2022, 66:0.0351, 76o:0.0001, A6o:0.2993, 72s:0.0006, 73s:0.0004, 74s:0.0382, 75s:0.0562, 76s:0.4839, 77:0.0538, T7o:0.0001, A7o:0.1986, 84s:0.0001, 85s:0.0226, 86s:0.1705, 87s:0.6372, 88:0.029, 98o:0.0001, T8o:0.0001, A8o:0.1928, 92s:0.0005, 96s:0.0019, 97s:0.0141, 98s:0.1852, 99:0.014, T9o:0.0024, J9o:0.0003, A9o:0.1962, T2s:0.0006, T3s:0.0024, T4s:0.005, T5s:0.0037, T6s:0.0015, T7s:0.0063, T8s:0.0025, T9s:0.2191, TT:0.3773, ATo:0.4224, J2s:0.0001, J5s:0.0005, J6s:0.0001, J7s:0.0082, J8s:0.004, J9s:0.0071, JTs:0.0246, JJ:0.078, AJo:0.3889, Q2s:0.0012, Q3s:0.0001, Q4s:0.0004, Q5s:0.001, Q6s:0.0008, Q7s:0.0005, Q8s:0.0004, Q9s:0.0014, QTs:0.0049, QJs:0.0028, QQ:0.1145, AQo:0.2691, K2s:0.0042, K3s:0.006, K4s:0.0002, K5s:0.0007, K6s:0.0187, K7s:0.0022, K8s:0.0011, K9s:0.0013, KTs:0.0112, KJs:0.0002, KQs:0.0348, KK:0.8585, AKo:0.7705, A2s:0.9185, A3s:0.6496, A4s:0.9609, A5s:0.7897, A6s:0.6545, A7s:0.77, A8s:0.6011, A9s:0.5047, ATs:0.9211, AJs:0.4643, AQs:0.1017, AKs:0.885, AA:0.6163"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0001, KK, AQs:0.0001, AKs:0.1303, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.3221, QQ:0.9986, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0|BTN:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0036, A2o:0.0024, 33:0.0084, A3o:0.0003, 42s:0.0028, 43s:0.194, 44:0.0937, A4o:0.0246, 52s:0.2123, 53s:0.4587, 54s:0.3642, 55:0.7354, A5o:0.1947, 62s:0.0302, 63s:0.3478, 64s:0.5174, 65s:0.4033, 66:0.4013, K6o:0.0001, A6o:0.0312, 72s:0.0008, 73s:0.0001, 74s:0.0003, 75s:0.5109, 76s:0.3151, 77:0.8834, T7o:0.0002, A7o:0.0874, 82s:0.0002, 84s:0.0009, 85s:0.0925, 86s:0.1251, 87s:0.0135, 88:0.4687, T8o:0.0261, A8o:0.0711, 92s:0.0002, 93s:0.0003, 95s:0.0238, 96s:0.501, 97s:0.3606, 98s:0.0839, 99:0.4235, T9o:0.302, A9o:0.4032, T4s:0.0001, T6s:0.5928, T7s:0.4768, T8s:0.5064, T9s:0.1814, TT:0.0207, JTo:0.1896, QTo:0.5996, KTo:0.0468, ATo:0.4942, J2s:0.0002, J3s:0.0003, J4s:0.0015, J5s:0.0036, J6s:0.0209, J7s:0.105, J8s:0.6026, J9s:0.8915, JTs:0.1673, JJ:0.7701, QJo:0.0121, KJo:0.0007, AJo:0.9985, Q2s:0.0232, Q3s:0.0122, Q4s:0.3696, Q5s:0.1943, Q6s:0.5771, Q7s:0.0238, Q8s:0.881, Q9s:0.9431, QTs:0.7815, QJs:0.9876, QQ:0.971, KQo:0.5015, AQo:0.9972, K2s:0.0714, K3s:0.0991, K4s:0.0726, K5s:0.0433, K6s:0.2695, K7s:0.4374, K8s:0.1134, K9s:0.2412, KTs:0.8615, KJs:0.981, KQs:0.9826, KK:0.0334, A2s:0.0036, A3s:0.1128, A4s:0.019, A5s:0.1583, A6s:0.1681, A7s:0.2954, A8s:0.0751, A9s:0.9271, ATs:0.3762, AJs:0.9986, AQs:0.9885, AKs:0.0002, AA:0.5265"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9948, A2o:0.4033, 32s:0.0045, 33:0.9913, A3o:0.4059, 42s:0.0267, 43s:0.0038, 44:0.9062, A4o:0.6674, 52s:0.0007, 53s:0.0098, 54s:0.3472, 55:0.2646, 65o:0.0065, 75o:0.0043, A5o:0.3775, 63s:0.0356, 64s:0.233, 65s:0.5933, 66:0.5982, 76o:0.0032, A6o:0.2441, 73s:0.0021, 74s:0.0098, 75s:0.0699, 76s:0.6789, 77:0.1166, 87o:0.0285, A7o:0.4764, 82s:0.0017, 83s:0.0003, 84s:0.0013, 85s:0.0818, 86s:0.6943, 87s:0.9849, 88:0.5313, T8o:0.0002, A8o:0.3398, 93s:0.0007, 94s:0.0024, 95s:0.0214, 96s:0.0288, 97s:0.3096, 98s:0.9046, 99:0.5765, T9o:0.131, A9o:0.1067, T4s:0.0003, T6s:0.0991, T7s:0.3451, T8s:0.4916, T9s:0.8123, TT:0.9789, JTo:0.004, QTo:0.0009, KTo:0.0001, ATo:0.5058, J4s:0.0016, J5s:0.0001, J6s:0.0002, J7s:0.0078, J8s:0.0571, J9s:0.0808, JTs:0.8304, JJ:0.2299, QJo:0.0001, AJo:0.0015, Q2s:0.0012, Q3s:0.0008, Q5s:0.0117, Q6s:0.0009, Q7s:0.0004, Q8s:0.0057, Q9s:0.0446, QTs:0.2172, QJs:0.0038, QQ:0.029, AQo:0.0028, K2s:0.011, K3s:0.0012, K4s:0.0009, K5s:0.0055, K6s:0.0095, K7s:0.0104, K8s:0.0052, K9s:0.0012, KTs:0.1202, KJs:0.0029, KQs:0.0079, KK:0.9666, AKo, A2s:0.995, A3s:0.8859, A4s:0.9802, A5s:0.8417, A6s:0.83, A7s:0.7029, A8s:0.9245, A9s:0.0729, ATs:0.6238, AJs:0.0014, AQs:0.0115, AKs:0.9998, AA:0.4735"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:3BET@7.0|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.714, TT:0.9931, JJ, QQ, AQo:0.0598, KK, AKo, AJs:0.8317, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.1308, JJ:0.5736, QQ, AQo:0.4139, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.2488, JJ, QQ, AQo:0.9685, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.5628, 55:0.0284, 65s:0.1478, 66:0.0736, 75s:0.0004, 76s:0.0068, 77:0.0669, 86s:0.0317, 88:0.3009, A8o:0.0037, 98s:0.027, 99:0.1032, T5s:0.0001, T7s:0.0193, TT:0.2075, JTs:0.1731, JJ:0.0561, KJo:0.0011, AJo:0.1478, Q5s:0.0139, Q8s:0.0001, QTs:0.0152, QJs:0.0073, QQ:0.6927, AQo:0.3887, K4s:0.0301, K5s:0.2435, K6s:0.0023, K7s:0.0571, K8s:0.0023, K9s:0.0111, KTs:0.3446, KJs:0.3996, KQs:0.2169, KK:0.0022, A4s:0.0057, A5s:0.0187, A6s:0.0002, A7s:0.0513, A8s:0.2872, A9s:0.0184, ATs:0.6802, AJs:0.6487, AQs:0.0975, AA:0.0181"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0566, K3o:0.0008, A3o:0.0095, A4o:0.0405, 54s:0.0001, A5o:0.1203, 64s:0.0013, K6o:0.0001, A6o:0.0177, 72s:0.0002, 74s:0.0001, Q7o:0.0001, K7o:0.0001, A7o:0.0144, 84s:0.0007, 88:0.0001, K8o:0.0001, A8o:0.1129, 93s:0.0002, 97s:0.0004, 98s:0.0001, K9o:0.0001, A9o:0.0622, T5s:0.0003, T7s:0.0024, TT:0.0015, ATo:0.2539, J2s:0.0007, J3s:0.0021, J4s:0.0008, J9s:0.0003, JJ:0.0205, AJo:0.4984, Q2s:0.0004, Q8s:0.0003, QTs:0.001, QQ:0.0032, KQo:0.0003, AQo:0.2854, K2s:0.0598, K3s:0.077, K4s:0.0283, K5s:0.01, K6s:0.05, K7s:0.0106, K8s:0.0065, KTs:0.0078, KJs:0.0018, KQs:0.0002, KK:0.0602, AKo:0.2657, A2s:0.2893, A3s:0.0885, A4s:0.025, A5s:0.1026, A6s:0.0451, A7s:0.0198, A8s:0.0098, A9s:0.1718, ATs:0.0272, AJs:0.0218, AQs:0.4061, AKs:0.578, AA:0.9816"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0003, A2o:0.0001, 32s:0.0001, 33:0.0013, 42s:0.0001, A4o:0.0431, 53s:0.0006, 54s:0.0183, 55:0.0482, A5o:0.0226, 63s:0.0002, 65s:0.0603, 66:0.0133, 74s:0.0005, 76s:0.0025, 77:0.0695, K7o:0.0006, A7o:0.03, 84s:0.0031, 86s:0.1303, 87s:0.0002, 88:0.0246, K8o:0.0001, A8o:0.0852, 94s:0.0001, 98s:0.005, 99:0.0825, A9o:0.0441, T5s:0.0002, T8s:0.0001, TT:0.0037, QTo:0.0001, KTo:0.0003, ATo:0.0199, J2s:0.0006, J3s:0.0001, J4s:0.0005, J5s:0.0001, J6s:0.0022, J8s:0.0001, JTs:0.0001, JJ:0.9008, KJo:0.1286, AJo:0.0874, Q2s:0.0034, Q3s:0.0019, Q5s:0.0004, Q8s:0.0004, Q9s:0.0002, QTs:0.0113, QJs:0.0168, QQ:0.3041, KQo:0.1312, AQo:0.1341, K2s:0.0292, K3s:0.1372, K4s:0.1696, K5s:0.4559, K6s:0.252, K7s:0.0331, K8s:0.0363, K9s:0.9683, KTs:0.0744, KJs:0.2029, KQs:0.7794, KK:0.9377, AKo:0.7342, A2s:0.5166, A3s:0.2302, A4s:0.6431, A5s:0.6361, A6s:0.8221, A7s:0.7719, A8s:0.5566, A9s:0.5373, ATs:0.2672, AJs:0.3279, AQs:0.4944, AKs:0.422, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 54s:0.0966, 55:0.4671, 65s:0.0006, 66:0.2816, 76s:0.0053, 77:0.2756, 85s:0.0001, 88:0.2005, 97s:0.0001, 99:0.2718, TT:0.5447, ATo:0.0021, J9s:0.001, JTs:0.3773, JJ:0.6478, KJo:0.0005, AJo:0.2654, Q8s:0.0002, Q9s:0.0038, QTs:0.239, QJs:0.9051, QQ:0.4342, KQo:0.2546, AQo:0.2204, K3s:0.0233, K4s:0.5632, K5s:0.7011, K6s:0.0094, K7s:0.4925, K8s:0.1113, K9s:0.1279, KTs:0.3713, KJs:0.9091, KQs:0.8886, KK:0.0001, A3s:0.0908, A4s:0.2422, A5s:0.3149, A6s:0.1723, A7s:0.0551, A8s:0.78, A9s:0.3217, ATs:0.7733, AJs:0.2535, AQs:0.5055"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0001, Q2o:0.0003, K2o:0.0035, A2o:0.0001, K3o:0.0085, A3o:0.0001, 94o:0.0004, Q4o:0.003, K4o:0.0108, 55:0.0002, Q5o:0.0005, K5o:0.004, A5o:0.0004, 62s:0.0001, 65s:0.0007, Q6o:0.0004, K6o:0.0004, A6o:0.0001, 75s:0.0002, Q7o:0.0001, K7o:0.0074, A7o:0.0001, 85s:0.0001, Q8o:0.0017, K8o:0.0015, A8o:0.0004, 92s:0.0011, 93s:0.0001, 94s:0.0002, 96s:0.0001, T9o:0.0001, Q9o:0.008, K9o:0.0164, A9o:0.0104, T4s:0.0002, T5s:0.0006, T7s:0.0003, T9s:0.0009, TT:0.0019, QTo:0.0011, KTo:0.0026, ATo:0.0003, J9s:0.0007, JTs:0.0001, QJo:0.0002, KJo:0.0002, AJo:0.0001, Q2s:0.0028, Q3s:0.002, Q4s:0.0006, Q5s:0.0057, Q6s:0.0001, Q7s:0.0003, Q8s:0.0005, Q9s:0.0041, QTs:0.0031, QJs:0.0036, QQ:0.0342, KQo:0.0308, AQo:0.0174, K2s:0.0101, K3s:0.0033, K4s:0.0083, K5s:0.0075, K6s:0.0001, K7s:0.0053, K8s:0.0088, K9s:0.012, KTs:0.0038, KJs:0.0006, KQs:0.0045, KK:0.4066, A2s:0.0037, A3s:0.0001, A4s:0.0001, A5s:0.0002, A6s:0.0001, A7s:0.0036, A8s:0.0001, A9s:0.0002, ATs:0.0003, AQs:0.0447, AKs:0.0001, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, A4o:0.0762, 55:0.0289, A5o:0.1139, 65s:0.0003, 66:0.0001, 77:0.0669, A7o:0.0002, 88:0.0402, 97s:0.0003, 99:0.0007, A9o:0.0003, TT:0.2732, KTo:0.0052, ATo:0.0123, JTs:0.0028, JJ:0.3511, KJo:0.0162, AJo:0.7182, Q2s:0.0001, Q4s:0.0014, Q5s:0.0002, Q6s:0.0002, Q7s:0.0001, Q8s:0.0006, Q9s:0.0007, QTs:0.0008, QJs:0.0024, QQ:0.5316, KQo:0.2155, AQo:0.7622, K2s:0.0182, K3s:0.0005, K4s:0.1069, K5s:0.0153, K6s:0.072, K7s:0.0204, K8s:0.0206, K9s:0.3725, KTs:0.3478, KJs:0.0587, KQs:0.106, KK:0.5933, AKo, A2s:0.6351, A3s:0.5553, A4s:0.7317, A5s:0.6085, A6s:0.6764, A7s:0.4736, A8s:0.1816, A9s:0.5812, ATs:0.2216, AJs:0.7457, AQs:0.4498, AKs:0.9999"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BB:3BET@7.0|CO:4BET@11.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0184, 32s:0.003, 33:0.0196, K3o:0.0002, A3o:0.0049, 42s:0.5807, 43s:0.1105, 44:0.0402, 54o:0.2184, Q4o:0.0001, K4o:0.0649, A4o:0.0075, 52s:0.3792, 53s:0.431, 54s:0.1655, 55:0.3593, 65o:0.0036, 75o:0.0004, K5o:0.002, A5o:0.1478, 62s:0.0002, 63s:0.0743, 64s:0.0496, 65s:0.3697, 66:0.9911, 76o:0.0782, 96o:0.0001, K6o:0.0056, A6o:0.3582, 74s:0.0674, 75s:0.0944, 76s:0.0254, 77:0.5652, 87o:0.0409, 97o:0.0115, T7o:0.0005, K7o:0.0097, A7o:0.5057, 82s:0.0005, 83s:0.0001, 84s:0.0009, 85s:0.2387, 86s:0.5189, 87s:0.0057, 88:0.9891, 98o:0.1226, T8o:0.0221, J8o:0.0001, Q8o:0.005, K8o:0.0002, A8o:0.9929, 92s:0.0128, 93s:0.0025, 94s:0.0671, 95s:0.5406, 96s:0.6406, 97s:0.1921, 98s:0.3775, 99:0.9997, T9o:0.2524, J9o:0.2561, Q9o:0.0602, K9o:0.0167, A9o:0.9998, T2s:0.0554, T3s:0.2638, T4s:0.2315, T5s:0.0062, T6s:0.1843, T7s:0.9574, T8s:0.2347, T9s:0.9418, TT:0.9793, JTo:0.5741, QTo:0.6536, KTo:0.68, ATo:0.9999, J2s:0.4494, J3s:0.34, J4s:0.1939, J5s:0.5175, J6s:0.253, J7s:0.2961, J8s:0.5935, J9s:0.3171, JTs:0.5646, JJ:0.9964, QJo:0.9637, KJo:0.9196, AJo:0.9997, Q2s:0.0098, Q3s:0.4429, Q4s:0.5762, Q5s:0.9227, Q6s:0.7059, Q7s:0.9642, Q8s:0.9823, Q9s:0.9449, QTs:0.9486, QJs:0.9981, QQ:0.9945, KQo:0.9831, AQo:0.9997, K2s:0.4769, K3s:0.9285, K4s:0.9004, K5s:0.9668, K6s:0.9213, K7s:0.952, K8s:0.5953, K9s:0.9546, KTs:0.9598, KJs:0.9882, KQs:0.9734, KK:0.8582, AKo:0.0122, A3s:0.0119, A4s:0.0009, A5s:0.0788, A6s:0.0116, A7s:0.1262, A8s:0.9964, A9s:0.9899, ATs:0.9695, AJs:0.9997, AQs:0.9992, AKs:0.1066, AA:0.3733"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.999, A2o:0.9739, 32s:0.8269, 33:0.9801, 43o:0.0002, 53o:0.0001, K3o:0.0002, A3o:0.989, 42s:0.1762, 43s:0.8519, 44:0.9598, 54o:0.142, A4o:0.9852, 52s:0.4068, 53s:0.5542, 54s:0.8277, 55:0.6403, 75o:0.0192, K5o:0.0003, A5o:0.8497, 62s:0.0168, 63s:0.6137, 64s:0.932, 65s:0.6293, 66:0.0088, 76o:0.5844, K6o:0.0002, A6o:0.6217, 72s:0.0027, 73s:0.6261, 74s:0.8926, 75s:0.8768, 76s:0.9663, 77:0.4344, 87o:0.7976, 97o:0.0036, K7o:0.0001, A7o:0.4921, 82s:0.0024, 83s:0.0048, 84s:0.2177, 85s:0.3659, 86s:0.4811, 87s:0.9926, 88:0.0109, 98o:0.0102, T8o:0.0014, K8o:0.0008, A8o:0.0066, 92s:0.3379, 93s:0.1094, 94s:0.0023, 95s:0.043, 96s:0.2866, 97s:0.7892, 98s:0.6191, 99:0.0002, T9o:0.0052, J9o:0.0142, K9o:0.0045, A9o:0.0002, T2s:0.0065, T3s:0.0244, T4s:0.0185, T5s:0.0041, T6s:0.0045, T7s:0.0276, T8s:0.7627, T9s:0.0576, TT:0.0207, JTo:0.1072, QTo:0.0022, KTo:0.0132, ATo:0.0001, J2s:0.1181, J3s:0.2767, J4s:0.2463, J5s:0.0196, J6s:0.1421, J7s:0.6673, J8s:0.3423, J9s:0.6812, JTs:0.4354, JJ:0.0036, QJo:0.0002, KJo:0.0025, AJo:0.0002, Q2s:0.0004, Q3s:0.3612, Q4s:0.1047, Q5s:0.0019, Q6s:0.0054, Q7s:0.0276, Q8s:0.0156, Q9s:0.0427, QTs:0.0514, QJs:0.0013, QQ:0.0055, KQo:0.007, AQo:0.0003, K2s:0.2258, K3s:0.0601, K4s:0.092, K5s:0.0265, K6s:0.0486, K7s:0.0292, K8s:0.2358, K9s:0.0438, KTs:0.0401, KJs:0.0118, KQs:0.0266, KK:0.1418, AKo:0.9878, A2s:0.9988, A3s:0.9864, A4s:0.999, A5s:0.9211, A6s:0.9883, A7s:0.8738, A8s:0.0036, A9s:0.0101, ATs:0.0305, AJs:0.0003, AQs:0.0008, AKs:0.8934, AA:0.6267"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BB:3BET@7.0|CO:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.6537, 99:0.9206, TT:0.9953, JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@37.25|BB:CALL@36.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, Q6s:0.0001, KQs:0.0001, KK:0.0014, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "85s:0.0001, 99:0.0001, KK:0.0002, AQs:0.0001, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0002, 33:0.0001, 42s:0.0001, 65o:0.0001, A5o:0.0002, 64s:0.0001, 66:0.0001, 72s:0.0001, 76s:0.0001, 84s:0.0001, 85s:0.0001, 86s:0.0001, 94s:0.0001, 95s:0.0001, 97s:0.0003, 98s:0.0001, 99:0.0008, Q9o:0.0001, T4s:0.0002, T8s:0.0001, TT:0.0001, QTo:0.0001, J2s:0.0002, J4s:0.0009, J6s:0.0001, Q2s:0.0003, Q6s:0.0001, Q9s:0.0001, QTs:0.0002, QJs:0.0006, AQo:0.0001, K8s:0.0005, KK:0.0034, A3s:0.0001, A6s:0.0001, A7s:0.0001, A8s:0.0001, A9s:0.0004, ATs:0.0002, AQs:0.0011, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q3o:0.0001, 53s:0.0003, 54s:0.0002, 65o:0.0001, 62s:0.0004, K6o:0.0002, 72s:0.0002, 75s:0.0001, 76s:0.0006, 77:0.0002, 82s:0.0001, 84s:0.0001, 93s:0.0001, 94s:0.0001, 99:0.0001, T6s:0.0001, T7s:0.0001, T9s:0.0001, TT:0.0008, J2s:0.0001, J9s:0.0001, JJ:0.0001, AJo:0.0002, Q3s:0.0001, Q4s:0.0003, QTs:0.001, QQ:0.002, KQo:0.0001, AQo:0.0296, K6s:0.0007, K8s:0.0004, KTs:0.0006, KQs:0.0004, KK:0.3649, AKo:0.0091, A2s:0.0001, A3s:0.0001, A4s:0.0001, A7s:0.0001, A8s:0.0001, A9s:0.003, AJs:0.0004, AQs:0.0024, AKs:0.0243, AA:0.311"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0343, A3o:0.0001, A4o:0.0232, 53s:0.0003, 54s:0.0002, 55:0.0005, A5o:0.0031, 62s:0.0006, 63s:0.0001, 65s:0.0025, 73s:0.0065, 75s:0.0044, 76s:0.0015, A7o:0.0004, 84s:0.0002, 87s:0.0012, A8o:0.0004, 97s:0.001, 99:0.0006, A9o:0.013, T7s:0.0005, T8s:0.0001, TT:0.0061, J2s:0.0006, J5s:0.0007, J8s:0.0013, JTs:0.0049, JJ:0.0063, AJo:0.0002, Q6s:0.0001, QTs:0.0058, QQ:0.0076, AQo:0.0005, K6s:0.0043, K7s:0.0001, KTs:0.0023, KJs:0.0094, KQs:0.0076, KK:0.6347, AKo:0.9837, A2s:0.4019, A3s:0.249, A4s:0.1491, A5s:0.0493, A6s:0.2266, A7s:0.1511, A8s:0.0142, A9s:0.2551, ATs:0.0727, AJs:0.272, AQs:0.1146, AKs:0.9303, AA:0.689"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4658, A2o:0.0139, 32s:0.0419, 33:0.2587, 53o:0.0243, 63o:0.0149, K3o:0.0163, A3o:0.0178, 42s:0.002, 43s:0.3499, 44:0.8914, 54o:0.0888, 64o:0.0109, A4o:0.0428, 52s:0.3336, 53s:0.946, 54s:0.9629, 55:0.9861, 65o:0.4533, 75o:0.0919, A5o:0.0809, 62s:0.0644, 63s:0.9105, 64s:0.4246, 65s:0.9625, 66:0.6602, 76o:0.0728, 86o:0.013, 96o:0.0156, K6o:0.0185, A6o:0.013, 72s:0.0527, 73s:0.0305, 74s:0.0894, 75s:0.9839, 76s:0.9538, 77:0.96, 87o:0.0148, A7o:0.0079, 82s:0.0146, 83s:0.0268, 84s:0.0156, 85s:0.1732, 86s:0.9587, 87s:0.9771, 88:0.9026, 98o:0.039, T8o:0.0002, A8o:0.0172, 92s:0.0143, 94s:0.0144, 95s:0.0197, 96s:0.3088, 97s:0.9709, 98s:0.8572, 99:0.4366, T9o:0.2012, J9o:0.0186, K9o:0.0035, A9o:0.0238, T2s:0.0149, T3s:0.0241, T4s:0.0496, T5s:0.0008, T6s:0.165, T7s:0.704, T8s:0.9597, T9s:0.9608, TT:0.8405, JTo:0.0294, KTo:0.0352, ATo:0.0149, J2s:0.0221, J3s:0.0377, J5s:0.1966, J6s:0.0874, J7s:0.1098, J8s:0.5322, J9s:0.9406, JTs:0.9494, JJ:0.8578, KJo:0.0493, AJo:0.0209, Q5s:0.0001, Q6s:0.0179, Q8s:0.0008, Q9s:0.1353, QTs:0.3161, QJs:0.0897, QQ:0.9901, AQo:0.9599, K2s:0.0141, K3s:0.3809, K4s:0.0307, K5s:0.1463, K6s:0.9794, K7s:0.2033, K8s:0.1303, K9s:0.1797, KTs:0.8429, KJs:0.5106, KQs:0.0889, KK:0.9401, AKo:0.0001, A2s:0.0038, A3s:0.2107, A4s:0.018, A5s:0.3162, A6s:0.0298, A7s:0.1923, A8s:0.3997, A9s:0.1697, ATs:0.1502, AJs:0.0291, AQs:0.9823, AKs:0.0203, AA:0.4801"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1869, K2o:0.0001, A2o:0.0259, 33:0.6906, 43o:0.0001, A3o:0.08, 42s:0.0001, 43s:0.0003, 44:0.0172, A4o:0.0495, 52s:0.0009, 53s:0.0006, 54s:0.0023, 55:0.0082, 65o:0.0001, A5o:0.1328, 62s:0.0003, 63s:0.0029, 64s:0.0033, 65s:0.0046, 66:0.3111, 76o:0.0001, A6o:0.0001, 75s:0.0003, 76s:0.0031, 77:0.0244, 87o:0.0003, A7o:0.008, 82s:0.0002, 84s:0.001, 85s:0.0007, 86s:0.0023, 87s:0.0084, 88:0.088, T8o:0.0001, A8o:0.0069, 94s:0.001, 95s:0.0007, 96s:0.0001, 97s:0.0043, 98s:0.0057, 99:0.5441, A9o:0.0008, T3s:0.0006, T5s:0.0004, T6s:0.0143, T7s:0.0067, T8s:0.0004, T9s:0.002, TT:0.133, KTo:0.0004, ATo:0.0469, J3s:0.0001, J6s:0.0001, J7s:0.0012, J8s:0.0004, J9s:0.0008, JJ:0.0832, AJo:0.138, Q3s:0.0003, QTs:0.0018, QJs:0.0001, QQ:0.0017, AQo:0.0171, K3s:0.0043, K4s:0.0004, K5s:0.0186, K6s:0.0028, K7s:0.0107, K8s:0.0423, K9s:0.0063, KTs:0.001, KJs:0.1055, KQs:0.008, KK:0.0599, AKo:0.9999, A2s:0.6018, A3s:0.7186, A4s:0.665, A5s:0.6287, A6s:0.3443, A7s:0.7485, A8s:0.5408, A9s:0.5199, ATs:0.8417, AJs:0.8589, AQs:0.0155, AKs:0.9796, AA:0.5199"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0003, QQ:0.0163, KK, AKo:0.0013, AJs:0.0001, AQs:0.0001, AKs:0.4528, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0005, TT:0.0193, JJ:0.7189, QQ, KK, AKo, AQs:0.3119, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|CO:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0139, 32s:0.1818, 33:0.0422, 42s:0.5363, 43s:0.8786, 44:0.3301, 54o:0.3924, 52s:0.6675, 53s:0.9261, 54s:0.9612, 55:0.6097, 65o:0.5844, 75o:0.0242, A5o:0.0002, 62s:0.1401, 63s:0.7844, 64s:0.9681, 65s:0.9791, 66:0.9977, 76o:0.2108, A6o:0.0011, 74s:0.6928, 75s:0.926, 76s:0.9683, 77:0.9854, 87o:0.061, 97o:0.0685, A7o:0.0023, 85s:0.7514, 86s:0.959, 87s:0.9897, 88:0.8863, 98o:0.274, T8o:0.0658, A8o:0.0027, 92s:0.1391, 93s:0.0215, 94s:0.0094, 95s:0.4716, 96s:0.9144, 97s:0.9762, 98s:0.9933, 99:0.6124, T9o:0.7711, J9o:0.1229, A9o:0.0033, T2s:0.0001, T3s:0.0809, T4s:0.0012, T5s:0.0617, T6s:0.1851, T7s:0.8887, T8s:0.9821, T9s:0.9953, TT:0.8114, JTo:0.5354, QTo:0.2654, KTo:0.1189, ATo:0.159, J3s:0.0724, J4s:0.0239, J5s:0.0676, J6s:0.0752, J7s:0.3391, J8s:0.9356, J9s:0.9861, JTs:0.9965, JJ:0.6828, QJo:0.3178, AJo:0.147, Q2s:0.0058, Q3s:0.006, Q4s:0.0003, Q5s:0.0129, Q6s:0.0791, Q7s:0.0012, Q8s:0.5516, Q9s:0.9189, QTs:0.9893, QJs:0.9885, QQ:0.9979, KQo:0.0254, AQo:0.9266, K2s:0.071, K3s:0.1393, K4s:0.1794, K5s:0.4449, K6s:0.6278, K7s:0.6212, K8s:0.0266, K9s:0.9093, KTs:0.9956, KJs:0.9872, KQs:0.9609, KK:0.9999, A2s:0.0002, A3s:0.012, A4s:0.1169, A5s:0.1055, A6s:0.1523, A7s:0.0627, A8s:0.343, A9s:0.1772, ATs:0.1727, AJs:0.2587, AQs:0.9157, AA:0.1689"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9041, A2o:0.0324, 32s:0.0002, 33:0.8646, A3o:0.1431, 44:0.577, A4o:0.017, 54s:0.0001, 55:0.3666, A5o:0.2732, 63s:0.0001, 64s:0.0001, 65s:0.0001, 66:0.0012, A6o:0.0005, 76s:0.0001, 77:0.0133, 87o:0.0001, A7o:0.0054, 87s:0.0003, 88:0.1126, A8o:0.0007, 96s:0.0002, 97s:0.0002, 98s:0.0002, 99:0.3869, A9o:0.1131, T8s:0.0002, TT:0.1881, ATo:0.1419, JTs:0.0001, JJ:0.317, AJo:0.1324, QTs:0.0003, QQ:0.002, AQo:0.0336, K9s:0.0001, KK:0.0001, AKo, A2s:0.9773, A3s:0.9719, A4s:0.8768, A5s:0.8729, A6s:0.7478, A7s:0.8491, A8s:0.6536, A9s:0.8217, ATs:0.8268, AJs:0.7413, AQs:0.0843, AKs, AA:0.8311"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|CO:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.15, JJ, QQ, AQo:0.0004, KK, AKo, AQs:0.945, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0002, 76s:0.0008, 77:0.0001, 86s:0.0002, 88:0.0001, 94s:0.0001, 97s:0.0001, 99:0.0001, T6s:0.0001, T9s:0.0003, J2s:0.0002, J3s:0.0002, J5s:0.0003, J6s:0.0001, J9s:0.0003, Q3s:0.0001, Q6s:0.0001, QQ:0.0178, AQo:0.0004, K4s:0.0003, K6s:0.0001, KTs:0.0004, KJs:0.0001, KK:0.0753, AKo:0.0032, A4s:0.0003, A6s:0.0002, A7s:0.0026, A8s:0.0053, A9s:0.0007, ATs:0.0005, AJs:0.0013, AKs:0.0238, AA:0.0937"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0049, 32s:0.0007, A3o:0.0011, 44:0.0033, 53s:0.0477, A5o:0.0049, 62s:0.007, 63s:0.0019, 64s:0.0004, A6o:0.0001, 74s:0.0038, 76s:0.0001, 77:0.0113, 83s:0.0007, 86s:0.0005, A8o:0.0003, 97s:0.0038, 99:0.0001, T2s:0.0005, T4s:0.0001, T9s:0.0024, TT:0.0025, ATo:0.0975, J2s:0.0001, J3s:0.0006, J5s:0.0007, J7s:0.0031, J9s:0.0003, Q5s:0.0005, QQ:0.0028, AQo:0.0133, K4s:0.0002, K5s:0.0004, K6s:0.001, K7s:0.0001, KTs:0.0026, KJs:0.0048, KQs:0.0001, KK:0.8601, AKo:0.8641, A2s:0.091, A3s:0.0427, A4s:0.1155, A5s:0.184, A6s:0.0273, A7s:0.1761, A8s:0.0021, A9s:0.0032, ATs:0.2185, AJs:0.1287, AQs:0.0007, AKs:0.9737, AA:0.9063"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6418, A2o:0.0008, 32s:0.1371, 33:0.6944, A3o:0.0162, 42s:0.1437, 43s:0.6689, 44:0.7151, 54o:0.0329, A4o:0.0277, 52s:0.2138, 53s:0.3792, 54s:0.5801, 55:0.9343, 65o:0.2808, 75o:0.0459, A5o:0.0541, 62s:0.1185, 63s:0.3002, 64s:0.4491, 65s:0.9085, 66:0.8196, 76o:0.1784, 86o:0.1088, A6o:0.0025, 73s:0.0482, 74s:0.0248, 75s:0.6329, 76s:0.5896, 77:0.85, 87o:0.002, 97o:0.0417, K7o:0.0002, A7o:0.0695, 83s:0.031, 84s:0.0149, 85s:0.427, 86s:0.6782, 87s:0.5697, 88:0.8119, 98o:0.105, T8o:0.0889, K8o:0.0005, A8o:0.0236, 92s:0.0163, 93s:0.1231, 94s:0.0008, 95s:0.0515, 96s:0.3558, 97s:0.4306, 98s:0.5958, 99:0.6843, T9o:0.0681, J9o:0.0025, K9o:0.1146, A9o:0.08, T2s:0.0154, T3s:0.0021, T5s:0.0829, T6s:0.3447, T7s:0.6613, T8s:0.4232, T9s:0.7573, TT:0.6862, JTo:0.0069, QTo:0.0023, KTo:0.1361, ATo:0.0352, J2s:0.0062, J3s:0.0063, J6s:0.0048, J7s:0.1237, J8s:0.6156, J9s:0.2232, JTs:0.9136, JJ:0.7356, KJo:0.1226, AJo:0.0558, Q2s:0.0063, Q5s:0.0002, Q6s:0.0034, Q7s:0.0041, Q8s:0.0779, Q9s:0.1676, QTs:0.4669, QJs:0.4207, QQ:0.9964, KQo:0.0421, AQo:0.9915, K2s:0.044, K3s:0.4247, K4s:0.3553, K5s:0.423, K6s:0.2054, K7s:0.2553, K8s:0.5582, K9s:0.5445, KTs:0.5874, KJs:0.3285, KQs:0.3889, KK:0.2557, AKo:0.0839, A2s:0.1344, A3s:0.0131, A4s:0.4839, A5s:0.2632, A6s:0.2131, A7s:0.1587, A8s:0.3087, A9s:0.2914, ATs:0.8473, AJs:0.4704, AQs:0.9946, AKs:0.1256, AA:0.3623"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0515, A2o:0.011, 32s:0.002, 33:0.1731, A3o:0.0538, 42s:0.0012, 44:0.2332, A4o:0.0464, 53s:0.1138, 54s:0.1624, 55:0.06, A5o:0.0623, 63s:0.0715, 64s:0.0485, 65s:0.0709, 66:0.1245, 72s:0.0009, 75s:0.1426, 76s:0.2096, 77:0.1447, 87o:0.0021, A7o:0.0007, 82s:0.0001, 85s:0.0076, 86s:0.1283, 87s:0.0712, 88:0.1835, A8o:0.0905, 93s:0.0021, 95s:0.0013, 96s:0.0029, 97s:0.0233, 98s:0.061, 99:0.2887, A9o:0.0154, T2s:0.0001, T5s:0.0029, T6s:0.002, T7s:0.0001, T8s:0.1072, T9s:0.0892, TT:0.2532, JTo:0.0001, KTo:0.023, ATo:0.0364, J2s:0.0008, J3s:0.0006, J5s:0.0001, J7s:0.0003, J8s:0.0142, J9s:0.0347, JTs:0.0034, JJ:0.1921, KJo:0.0001, AJo:0.0342, Q6s:0.0001, Q8s:0.0001, Q9s:0.0001, QTs:0.0102, QJs:0.0003, QQ:0.001, AQo:0.0007, K2s:0.0771, K3s:0.1235, K4s:0.1398, K5s:0.1644, K6s:0.1779, K7s:0.1682, K8s:0.1348, K9s:0.2388, KTs:0.1981, KJs:0.2859, KQs:0.0467, KK:0.7443, AKo:0.9161, A2s:0.3468, A3s:0.7516, A4s:0.2843, A5s:0.5508, A6s:0.4292, A7s:0.3418, A8s:0.5315, A9s:0.4122, ATs:0.1201, AJs:0.3863, AQs:0.0051, AKs:0.8744, AA:0.6377"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0122, 62o:0.0018, 43s:0.0009, 44:0.0007, A4o:0.0002, 53s:0.1888, 54s:0.0008, A5o:0.0506, 62s:0.0003, 64s:0.0005, 65s:0.015, 66:0.0001, A6o:0.0001, 72s:0.0008, 74s:0.0016, 77:0.2503, Q7o:0.0001, A7o:0.0005, 84s:0.0003, 85s:0.0001, 87s:0.1223, 88:0.0129, A8o:0.0069, 92s:0.0002, 94s:0.0001, 95s:0.0006, 97s:0.0003, 98s:0.0047, 99:0.001, A9o:0.0012, T7s:0.0042, T8s:0.0002, T9s:0.1708, TT:0.0017, JTo:0.0001, ATo:0.0966, J3s:0.0001, J5s:0.0082, J7s:0.0001, J9s:0.0013, JTs:0.0014, JJ:0.0071, KJo:0.0001, AJo:0.0023, Q4s:0.0001, Q7s:0.0038, Q8s:0.003, Q9s:0.0003, QTs:0.0021, QJs:0.0017, QQ:0.0191, AQo:0.002, K2s:0.0108, K5s:0.0007, K6s:0.0036, K7s:0.0019, K8s:0.0002, K9s:0.0069, KTs:0.0003, KJs:0.0001, KK:0.9827, AKo:0.2928, A2s:0.2306, A3s:0.0019, A4s:0.0861, A5s:0.0298, A6s:0.5213, A7s:0.1768, A8s:0.015, A9s:0.007, ATs:0.2337, AJs:0.6765, AQs:0.4928, AKs:0.7182, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0014, KK, AKo:0.2474, AKs:0.7155, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.4876, QQ:0.8409, KK, AKo, AQs:0.0047, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 63s:0.0002, 97s:0.0001, TT:0.0048, JTs:0.0001, JJ:0.0002, Q5s:0.0001, QQ:0.0103, KK:0.974, AKo:0.0001, A6s:0.0007, ATs:0.0002, AQs:0.003, AKs:0.2013, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0009, 52s:0.0001, A5o:0.0001, 62s:0.0001, 66:0.0002, 74s:0.0001, 88:0.0025, 92s:0.0001, 97s:0.0001, 98s:0.0004, T2s:0.0002, T5s:0.0001, J3s:0.0001, J5s:0.0002, AJo:0.0001, Q3s:0.0001, Q4s:0.0006, QJs:0.0003, QQ:0.0048, K5s:0.0001, KQs:0.0013, KK:0.0016, AKo:0.0131, A3s:0.001, A5s:0.0002, A6s:0.0005, A7s:0.001, A8s:0.0002, A9s:0.0002, ATs:0.0004, AJs:0.0015, AQs:0.0057, AKs:0.0001, AA:0.0465"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0008, 32s:0.0001, 33:0.013, 54s:0.0042, A5o:0.169, 65s:0.0037, 66:0.0046, 72s:0.0002, 74s:0.0001, 85s:0.0015, 88:0.0001, 92s:0.0001, 95s:0.0019, 96s:0.0027, 99:0.0003, T2s:0.0001, T3s:0.0015, T5s:0.0001, T8s:0.0001, T9s:0.0127, J7s:0.0001, J8s:0.0001, JJ:0.0003, AJo:0.0027, Q6s:0.003, QTs:0.0008, QQ:0.1329, AQo:0.375, K6s:0.0001, KTs:0.0001, KK:0.5207, AKo:0.5104, A3s:0.3995, A4s:0.2547, A5s:0.1458, A6s:0.4866, A7s:0.0774, A8s:0.0357, A9s:0.2507, ATs:0.5548, AJs:0.383, AQs:0.2273, AKs:0.8783, AA:0.9535"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2741, Q2o:0.0006, A2o:0.1613, 32s:0.1779, 33:0.3682, 43o:0.0037, 53o:0.0092, A3o:0.1954, 42s:0.0771, 43s:0.4568, 44:0.4366, 54o:0.057, 64o:0.0435, A4o:0.1946, 52s:0.3528, 53s:0.5085, 54s:0.4959, 55:0.6554, 65o:0.2548, 75o:0.0858, A5o:0.2679, 62s:0.0766, 63s:0.1473, 64s:0.4049, 65s:0.6729, 66:0.6773, 76o:0.191, A6o:0.2158, 72s:0.0524, 73s:0.1158, 74s:0.2064, 75s:0.4062, 76s:0.4516, 77:0.6081, 87o:0.0492, 97o:0.0461, T7o:0.0008, Q7o:0.0029, A7o:0.2323, 82s:0.0633, 84s:0.0462, 85s:0.3633, 86s:0.3825, 87s:0.5962, 88:0.5843, 98o:0.0001, J8o:0.0141, A8o:0.2562, 92s:0.0384, 93s:0.0291, 94s:0.0529, 95s:0.0955, 96s:0.2622, 97s:0.3764, 98s:0.3593, 99:0.5356, T9o:0.0429, J9o:0.0828, Q9o:0.0046, K9o:0.0013, A9o:0.1595, T2s:0.0231, T3s:0.0153, T4s:0.0066, T5s:0.0055, T6s:0.0707, T7s:0.2861, T8s:0.4093, T9s:0.4679, TT:0.4947, JTo:0.0389, QTo:0.0014, KTo:0.0038, ATo:0.6595, J2s:0.0511, J3s:0.0766, J4s:0.0264, J5s:0.0198, J6s:0.0698, J7s:0.3894, J8s:0.2757, J9s:0.6044, JTs:0.4834, JJ:0.5551, QJo:0.004, KJo:0.0043, AJo:0.6523, Q2s:0.0035, Q3s:0.0392, Q4s:0.0051, Q5s:0.06, Q6s:0.0824, Q7s:0.0139, Q8s:0.042, Q9s:0.2902, QTs:0.3455, QJs:0.2497, QQ:0.2417, KQo:0.0393, AQo:0.8185, K2s:0.0205, K3s:0.0429, K4s:0.0341, K5s:0.0665, K6s:0.1707, K7s:0.3149, K8s:0.0038, K9s:0.0223, KTs:0.0202, KJs:0.3602, KQs:0.1521, KK:0.1607, AKo:0.2566, A2s:0.2604, A3s:0.285, A4s:0.2968, A5s:0.3259, A6s:0.3635, A7s:0.3247, A8s:0.4364, A9s:0.4308, ATs:0.5015, AJs:0.5765, AQs:0.8849, AKs:0.3946, AA:0.8878"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4816, 32o:0.0002, 52o:0.0008, K2o:0.0001, A2o:0.3947, 32s:0.0008, 33:0.6036, 43o:0.0007, A3o:0.4667, 42s:0.0053, 43s:0.0149, 44:0.3486, 54o:0.0012, 74o:0.0001, Q4o:0.0001, A4o:0.285, 52s:0.0367, 53s:0.1174, 54s:0.2111, 55:0.311, 65o:0.0251, 75o:0.0069, 85o:0.0001, K5o:0.0001, A5o:0.4177, 62s:0.0003, 63s:0.0683, 64s:0.0223, 65s:0.1477, 66:0.2809, 76o:0.0008, 86o:0.0007, 96o:0.0005, A6o:0.1201, 73s:0.003, 74s:0.0878, 75s:0.2232, 76s:0.2572, 77:0.374, 87o:0.0039, 97o:0.0015, T7o:0.0004, Q7o:0.0002, K7o:0.0003, A7o:0.2484, 82s:0.0013, 84s:0.006, 85s:0.0113, 86s:0.0737, 87s:0.3174, 88:0.3868, 98o:0.0009, T8o:0.0018, J8o:0.0002, A8o:0.157, 92s:0.0002, 93s:0.0041, 94s:0.0058, 95s:0.0521, 96s:0.0088, 97s:0.2481, 98s:0.3159, 99:0.4443, T9o:0.0028, Q9o:0.0003, K9o:0.0007, A9o:0.2425, T2s:0.0122, T4s:0.0012, T5s:0.0007, T7s:0.1093, T8s:0.0576, T9s:0.1177, TT:0.2159, JTo:0.0007, QTo:0.0014, KTo:0.0001, ATo:0.0945, J2s:0.0015, J3s:0.0008, J4s:0.0009, J5s:0.0402, J6s:0.0012, J7s:0.1034, J8s:0.0307, J9s:0.271, JTs:0.0377, JJ:0.4196, QJo:0.0062, KJo:0.0003, AJo:0.3232, Q2s:0.0809, Q3s:0.0531, Q4s:0.001, Q5s:0.1094, Q6s:0.0484, Q7s:0.0063, Q8s:0.1406, Q9s:0.0862, QTs:0.1194, QJs:0.2419, QQ:0.7582, KQo:0.0002, AQo:0.1749, K2s:0.0096, K3s:0.0056, K4s:0.0208, K5s:0.0049, K6s:0.0018, K7s:0.0138, K8s:0.014, K9s:0.0264, KTs:0.0526, KJs:0.1256, KQs:0.17, KK:0.8393, AKo:0.7434, A2s:0.6764, A3s:0.6906, A4s:0.6981, A5s:0.6652, A6s:0.5742, A7s:0.6459, A8s:0.5627, A9s:0.5653, ATs:0.4935, AJs:0.4213, AQs:0.115, AKs:0.6054, AA:0.1122"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 88:0.0001, 99:0.0003, TT:0.0005, JJ:0.0012, Q9s:0.0001, QQ:0.0004, KQo:0.0001, KTs:0.0001, KK, AKo:0.0656, A6s:0.0001, A7s:0.0002, A9s:0.0003, AJs:0.0001, AQs:0.0004, AKs:0.0091, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 99:0.0002, TT:0.0015, JJ:0.1137, QQ:0.2843, AQo:0.0001, KK, AKo, A9s:0.0001, AQs:0.0006, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|CO:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0034, A2o:0.0047, 32s:0.0007, 33:0.0039, A3o:0.0077, 43s:0.5011, 44:0.0039, 54o:0.0018, 64o:0.0011, A4o:0.0219, 52s:0.1858, 53s:0.5079, 54s:0.7137, 55:0.1407, 65o:0.3255, A5o:0.2356, 62s:0.001, 63s:0.5512, 64s:0.7418, 65s:0.6777, 66:0.1276, 76o:0.4658, 86o:0.2742, A6o:0.0656, 74s:0.5298, 75s:0.6309, 76s:0.3157, 77:0.0127, 87o:0.1394, 97o:0.008, A7o:0.3565, 83s:0.0001, 84s:0.0259, 85s:0.3221, 86s:0.6797, 87s:0.0019, 88:0.0061, 98o:0.3528, T8o:0.075, J8o:0.0204, A8o:0.3438, 94s:0.006, 95s:0.0589, 96s:0.4179, 97s:0.004, 98s:0.0911, 99:0.0063, T9o:0.341, J9o:0.3712, A9o:0.2935, T4s:0.0001, T6s:0.21, T7s:0.676, T8s:0.7078, T9s:0.6139, TT:0.4649, JTo:0.1702, QTo:0.0053, ATo:0.9872, J2s:0.0458, J5s:0.0143, J6s:0.3604, J7s:0.6218, J8s:0.723, J9s:0.4782, JTs:0.8811, JJ:0.0079, QJo:0.3066, KJo:0.2096, AJo:0.8171, Q2s:0.0042, Q3s:0.0041, Q4s:0.0217, Q6s:0.0752, Q7s:0.0018, Q8s:0.6571, Q9s:0.6616, QTs:0.8427, QJs:0.9633, QQ:0.9589, KQo:0.0529, AQo:0.9343, K2s:0.0001, K4s:0.0233, K5s:0.0432, K6s:0.5262, K7s:0.3219, K8s:0.3172, K9s:0.3753, KTs:0.7415, KJs:0.822, KQs:0.84, KK:0.1141, A2s:0.0105, A3s:0.0068, A4s:0.0033, A5s:0.1504, A6s:0.3293, A7s:0.1727, A8s:0.3033, A9s:0.1941, ATs:0.9145, AJs:0.88, AQs:0.9925, AKs:0.0001, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9936, A2o:0.4251, 32s:0.049, 33:0.9949, 43o:0.0002, 53o:0.0006, 63o:0.0001, A3o:0.5516, 42s:0.0409, 43s:0.1307, 44:0.9933, 54o:0.0003, 64o:0.0001, 74o:0.0001, A4o:0.2278, 52s:0.1121, 53s:0.375, 54s:0.2282, 55:0.8559, 65o:0.1329, 75o:0.0001, A5o:0.4919, 62s:0.1632, 63s:0.2472, 64s:0.1658, 65s:0.3179, 66:0.8719, 76o:0.2915, 86o:0.0089, Q6o:0.0001, K6o:0.0001, A6o:0.3459, 72s:0.0001, 73s:0.5528, 74s:0.3852, 75s:0.3541, 76s:0.6688, 77:0.9842, 87o:0.6298, 97o:0.0325, J7o:0.0001, A7o:0.2112, 82s:0.0107, 83s:0.0007, 84s:0.0352, 85s:0.4865, 86s:0.2883, 87s:0.9875, 88:0.993, 98o:0.2523, J8o:0.0001, A8o:0.1866, 92s:0.0001, 93s:0.0237, 94s:0.003, 95s:0.2657, 96s:0.4062, 97s:0.962, 98s:0.8993, 99:0.9913, T9o:0.0005, K9o:0.0001, A9o:0.2085, T4s:0.0094, T5s:0.0001, T6s:0.0047, T7s:0.0681, T8s:0.2538, T9s:0.3606, TT:0.5338, JTo:0.0026, QTo:0.0001, ATo:0.0055, J2s:0.0219, J3s:0.0001, J4s:0.013, J5s:0.001, J6s:0.0122, J7s:0.2775, J8s:0.2304, J9s:0.5017, JTs:0.0722, JJ:0.9917, QJo:0.0004, KJo:0.0002, AJo:0.182, Q2s:0.0008, Q3s:0.0029, Q4s:0.0026, Q5s:0.0104, Q6s:0.0009, Q7s:0.0006, Q8s:0.0156, Q9s:0.0785, QTs:0.0163, QJs:0.003, QQ:0.041, KQo:0.0002, AQo:0.0655, K2s:0.0368, K3s:0.059, K4s:0.03, K5s:0.0432, K6s:0.2465, K7s:0.2857, K8s:0.2911, K9s:0.3918, KTs:0.1206, KJs:0.1143, KQs:0.0257, KK:0.8858, AKo, A2s:0.9789, A3s:0.9903, A4s:0.9967, A5s:0.8493, A6s:0.6706, A7s:0.8272, A8s:0.6947, A9s:0.8053, ATs:0.0854, AJs:0.1199, AQs:0.0073, AKs:0.9999, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|CO:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.7758, JJ, QQ, KK, AKo, AQs:0.4359, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 53s:0.0001, 54s:0.0001, 64s:0.0003, 75s:0.0002, 76s:0.0001, 84s:0.0001, 86s:0.0001, 98s:0.0001, T2s:0.0002, T5s:0.0003, T7s:0.0001, T8s:0.0001, ATo:0.0001, Q6s:0.0001, QQ:0.0005, AQo:0.0002, K3s:0.0004, K4s:0.0002, K5s:0.0001, K6s:0.0016, K8s:0.0003, K9s:0.0001, KTs:0.0001, KJs:0.0001, A3s:0.0002, A4s:0.0001, A5s:0.0001, A6s:0.0001, A8s:0.0017, A9s:0.0003, AJs:0.0004, AQs:0.1335, AKs:0.1472, AA:0.2013"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1079, 33:0.001, 44:0.0001, A4o:0.0074, 75s:0.0251, 76s:0.0012, 77:0.0004, 87s:0.0365, 88:0.0013, 96s:0.0008, 97s:0.0001, T2s:0.0001, T4s:0.0001, T8s:0.0001, ATo:0.0016, J3s:0.0001, J6s:0.0001, J9s:0.0005, JJ:0.0004, AJo:0.0077, QQ:0.0725, AQo:0.0224, K3s:0.0001, K5s:0.0001, K8s:0.0001, K9s:0.0022, KTs:0.0056, KK:0.0657, AKo:0.8975, A2s:0.0469, A3s:0.1505, A4s:0.175, A5s:0.1115, A6s:0.0328, A7s:0.3523, A8s:0.0709, A9s:0.0031, ATs:0.1587, AJs:0.068, AQs:0.3427, AKs:0.7054, AA:0.7987"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0036, A2o:0.0007, 33:0.066, A3o:0.0192, 43s:0.0033, 44:0.1412, 54o:0.0013, A4o:0.0044, 53s:0.0006, 54s:0.2699, 55:0.5011, 65o:0.0033, 75o:0.001, 95o:0.0005, A5o:0.0401, 63s:0.014, 64s:0.122, 65s:0.4599, 66:0.2119, 76o:0.0283, 86o:0.0003, 96o:0.0018, A6o:0.0145, 73s:0.001, 74s:0.0269, 75s:0.194, 76s:0.1989, 77:0.1517, 87o:0.0013, 97o:0.0044, T7o:0.0014, J7o:0.0011, Q7o:0.0002, A7o:0.0264, 82s:0.0002, 84s:0.0017, 85s:0.0088, 86s:0.0492, 87s:0.4219, 88:0.13, 98o:0.003, T8o:0.0015, J8o:0.0005, A8o:0.0567, 92s:0.001, 94s:0.0042, 95s:0.0003, 96s:0.0857, 97s:0.0006, 98s:0.2207, 99:0.1418, T9o:0.0017, J9o:0.003, Q9o:0.0008, A9o:0.0156, T4s:0.0011, T5s:0.0026, T6s:0.0035, T7s:0.1486, T8s:0.2668, T9s:0.6522, TT:0.4157, QTo:0.0004, ATo:0.539, J2s:0.0241, J5s:0.0015, J7s:0.0199, J8s:0.349, J9s:0.1532, JTs:0.4083, JJ:0.4817, QJo:0.0015, KJo:0.0038, AJo:0.8363, Q3s:0.0108, Q4s:0.1019, Q6s:0.0011, Q7s:0.0019, Q8s:0.0181, Q9s:0.1842, QTs:0.4231, QJs:0.3487, QQ:0.5411, AQo:0.4107, K2s:0.0024, K4s:0.0004, K5s:0.0002, K6s:0.1385, K7s:0.0361, K8s:0.002, K9s:0.0029, KTs:0.0714, KJs:0.1067, KQs:0.3503, KK:0.1068, AKo:0.0305, A2s:0.1275, A3s:0.0661, A4s:0.0447, A5s:0.077, A6s:0.2268, A7s:0.1091, A8s:0.1011, A9s:0.17, ATs:0.772, AJs:0.6362, AQs:0.3409, AKs:0.0005, AA:0.3164"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.679, A2o:0.3505, 32s:0.0812, 33:0.7672, 63o:0.0009, A3o:0.373, 42s:0.0015, 43s:0.3069, 44:0.8498, 54o:0.0057, 64o:0.0001, A4o:0.4565, 52s:0.0003, 53s:0.1185, 54s:0.4061, 55:0.334, 65o:0.0424, 95o:0.0001, A5o:0.4706, 62s:0.0651, 63s:0.3814, 64s:0.5285, 65s:0.4668, 66:0.7713, 76o:0.0983, 86o:0.0003, J6o:0.0001, A6o:0.2315, 72s:0.0013, 73s:0.0736, 74s:0.1515, 75s:0.1627, 76s:0.7452, 77:0.8322, 87o:0.0359, 97o:0.0283, T7o:0.0003, J7o:0.0005, K7o:0.0001, A7o:0.3158, 82s:0.001, 83s:0.0028, 84s:0.0003, 85s:0.0818, 86s:0.553, 87s:0.4376, 88:0.8183, 98o:0.0363, A8o:0.4156, 92s:0.0296, 93s:0.0015, 94s:0.0229, 95s:0.0004, 96s:0.3234, 97s:0.5261, 98s:0.4521, 99:0.8463, T9o:0.0029, J9o:0.0007, Q9o:0.004, A9o:0.3475, T3s:0.0013, T4s:0.0001, T5s:0.0002, T6s:0.07, T7s:0.0281, T8s:0.0689, T9s:0.1039, TT:0.4649, JTo:0.0017, QTo:0.0029, ATo:0.1795, J2s:0.0009, J3s:0.0023, J6s:0.0018, J7s:0.002, J8s:0.0754, J9s:0.2427, JTs:0.0886, JJ:0.5146, QJo:0.003, KJo:0.0004, AJo:0.1583, Q2s:0.0366, Q3s:0.0121, Q4s:0.0288, Q5s:0.0032, Q6s:0.0871, Q7s:0.1599, Q8s:0.0601, Q9s:0.1418, QTs:0.1507, QJs:0.3862, QQ:0.4562, KQo:0.0013, AQo:0.589, K2s:0.0023, K3s:0.0003, K4s:0.0018, K5s:0.0175, K6s:0.0873, K7s:0.0023, K8s:0.0004, K9s:0.052, KTs:0.0006, KJs:0.0208, KQs:0.0585, KK:0.893, AKo:0.9695, A2s:0.8193, A3s:0.9285, A4s:0.9257, A5s:0.9192, A6s:0.7673, A7s:0.8655, A8s:0.8758, A9s:0.8231, ATs:0.2277, AJs:0.3636, AQs:0.659, AKs:0.9994, AA:0.6836"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0001, 32s:0.0002, 33:0.0002, 44:0.0004, K4o:0.0001, 54s:0.0011, 55:0.0001, 62s:0.0001, 63s:0.001, 64s:0.0003, 65s:0.0001, 66:0.0003, A6o:0.0001, 72s:0.0001, 73s:0.0001, 74s:0.0002, A7o:0.0938, 83s:0.0002, 86s:0.0004, 88:0.0001, A8o:0.0001, 94s:0.0001, 96s:0.0006, 97s:0.0535, 99:0.0007, Q9o:0.0001, K9o:0.0001, T3s:0.0002, T7s:0.0001, T8s:0.0017, T9s:0.0001, TT:0.0013, J3s:0.0001, J5s:0.0001, J9s:0.0002, JJ:0.0001, Q3s:0.0001, Q5s:0.0001, Q8s:0.0003, Q9s:0.0006, QTs:0.0002, QQ:0.0005, K2s:0.0006, K5s:0.0001, KTs:0.0002, KJs:0.0033, KQs:0.0007, KK:0.1458, AKo:0.1828, A2s:0.2045, A3s:0.286, A4s:0.0002, A6s:0.1713, A7s:0.2786, A8s:0.0032, A9s:0.0001, ATs:0.1536, AJs:0.0005, AQs:0.1697, AKs:0.3029, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 75s:0.0001, 85s:0.0002, 88:0.0001, J4s:0.0001, JJ:0.0002, QQ:0.0001, K7s:0.0001, KK, AKo:0.0273, A4s:0.0001, A6s:0.0001, A7s:0.0001, AKs:0.0059, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0013, QQ:0.0052, KK, AKo:0.9998, AQs:0.0003, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0001, 32s:0.0002, 33:0.0007, Q3o:0.0001, 42s:0.0002, 44:0.0001, 64o:0.0001, 52s:0.0002, 55:0.0001, 62s:0.0001, 63s:0.0005, 64s:0.0003, A6o:0.0001, 72s:0.0001, 75s:0.0003, 76s:0.0001, 77:0.0024, 84s:0.0002, 86s:0.0001, 88:0.0015, 97s:0.0001, 98s:0.0001, 99:0.0001, T2s:0.0001, T3s:0.0001, T4s:0.0002, T8s:0.0001, TT:0.0002, J2s:0.0011, J5s:0.0001, J6s:0.0002, JJ:0.0442, Q8s:0.0001, QJs:0.0003, QQ:0.0022, AQo:0.0002, K2s:0.0012, K3s:0.0003, K4s:0.0002, K6s:0.0003, K7s:0.0002, K8s:0.0001, KTs:0.0003, KJs:0.0003, KQs:0.001, KK:0.9962, AKo:0.0017, A2s:0.0001, A3s:0.001, A5s:0.0003, A6s:0.0013, A8s:0.0018, A9s:0.0008, AJs:0.0009, AQs:0.0003, AKs:0.0217, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0045, JJ:0.1967, QQ, AQo:0.0001, KK, AKo, AQs:0.0713, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0302, QQ, KK, AKo, AQs:0.8777, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "53s:0.0003, 76s:0.0018, 77:0.1271, 87s:0.0888, 95s:0.0034, 98s:0.0004, T7s:0.0033, T9s:0.0004, TT:0.0006, JJ:0.0023, Q3s:0.0002, QQ:0.4548, AQo:0.025, K3s:0.0004, K4s:0.005, K5s:0.0005, K7s:0.0006, K9s:0.0057, KJs:0.0606, KQs:0.0877, KK:0.1048, AKo:0.0012, A2s:0.0011, A3s:0.0002, A4s:0.0001, A5s:0.0024, A6s:0.0002, A8s:0.0085, A9s:0.0002, ATs:0.0249, AJs:0.6855, AQs:0.7311, AKs:0.0009, AA:0.0148"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0001, Q2o:0.0001, K2o:0.0001, A2o:0.0029, 43o:0.0005, 54o:0.0001, K4o:0.0004, A4o:0.1537, 53s:0.0015, Q5o:0.0001, A5o:0.0529, 65s:0.0001, 86o:0.0001, K6o:0.0006, A6o:0.0001, 74s:0.0001, 75s:0.0065, 76s:0.0002, 77:0.0001, J7o:0.0001, K7o:0.0001, A7o:0.0934, 82s:0.0003, 86s:0.0001, 87s:0.0004, A8o:0.0009, 92s:0.0002, 93s:0.0004, 97s:0.0004, A9o:0.002, T7s:0.0011, T8s:0.0001, TT:0.0147, KTo:0.0074, ATo:0.1085, J2s:0.0001, J4s:0.0001, J5s:0.0003, J7s:0.0097, J8s:0.0001, J9s:0.0002, JJ:0.0002, AJo:0.0681, Q3s:0.0003, Q4s:0.001, Q6s:0.0003, QTs:0.0014, QQ:0.1604, KQo:0.0004, AQo:0.3642, K3s:0.0003, K4s:0.0018, K5s:0.007, K6s:0.0058, K7s:0.0273, K8s:0.0009, K9s:0.003, KTs:0.0001, KJs:0.0001, KQs:0.0003, KK:0.0016, AKo:0.0215, A3s:0.0008, A4s:0.0224, A5s:0.0138, A6s:0.0039, A7s:0.1338, A8s:0.0032, A9s:0.0525, ATs:0.0007, AQs:0.1523, AKs:0.3239, AA:0.9828"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.2452, 33:0.0005, A3o:0.213, A4o:0.1425, 52s:0.0018, 53s:0.0092, 55:0.0004, K5o:0.0084, A5o:0.134, 62s:0.0002, 63s:0.0001, 65s:0.0115, 66:0.0215, A6o:0.1158, 74s:0.0001, 75s:0.0004, 76s:0.007, 77:0.0002, K7o:0.0011, A7o:0.0476, 83s:0.0001, 86s:0.0037, A8o:0.116, 92s:0.0044, 95s:0.0066, 97s:0.0055, 98s:0.0239, 99:0.0092, A9o:0.0186, T5s:0.0001, T7s:0.0086, T8s:0.0056, T9s:0.0009, TT:0.0038, KTo:0.0011, ATo:0.1434, J4s:0.0002, J7s:0.0001, JJ:0.0001, KJo:0.0041, AJo:0.0169, Q3s:0.0003, Q6s:0.0013, Q8s:0.0002, QTs:0.0004, QJs:0.0001, QQ:0.0044, KQo:0.0117, AQo:0.016, K2s:0.0012, K3s:0.0628, K4s:0.0198, K5s:0.0002, K6s:0.0049, K7s:0.0193, K8s:0.0006, K9s:0.1375, KTs:0.0296, KJs:0.2772, KQs:0.0632, KK:0.8935, AKo:0.9769, A2s:0.7368, A3s:0.798, A4s:0.7049, A5s:0.1678, A6s:0.348, A7s:0.527, A8s:0.3514, A9s:0.7359, ATs:0.59, AJs:0.2532, AQs:0.0101, AKs:0.6751, AA:0.0024"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.4575, 43s:0.0032, 44:0.3103, 53s:0.0032, 54s:0.6568, 55:0.4343, 63s:0.004, 64s:0.7218, 65s:0.7303, 66:0.8817, 75s:0.2989, 76s:0.7713, 77:0.1604, 85s:0.0027, 86s:0.0931, 87s:0.9491, 88:0.4556, 96s:0.0167, 97s:0.0966, 98s:0.0001, 99:0.1799, T8s:0.1273, T9s:0.321, TT:0.241, ATo:0.0003, JTs:0.0013, JJ:0.6406, AJo:0.2422, QTs:0.0299, QJs:0.0001, QQ:0.923, KQo:0.0079, AQo:0.6185, K3s:0.0003, K5s:0.0112, K6s:0.6424, K7s:0.0232, K8s:0.0697, K9s:0.1034, KTs:0.1476, KJs:0.6075, KQs:0.7535, KK:0.5465, A3s:0.1419, A4s:0.1811, A5s:0.7994, A6s:0.2358, A7s:0.7191, A8s:0.4578, A9s:0.4833, ATs:0.6206, AJs:0.8228, AQs:0.6076, AA:0.0014"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A4o:0.0001, 65s:0.0001, K9o:0.0058, A9o:0.0001, TT:0.0001, JJ:0.0001, KJo:0.025, QQ:0.0001, AQo:0.0001, K3s:0.0008, K6s:0.0001, K8s:0.0003, K9s:0.0048, KJs:0.0017, KK:0.0449, A5s:0.0002, AA:0.9985"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0052, 44:0.0008, A4o:0.0017, 53s:0.0001, A5o:0.0161, 64s:0.001, A6o:0.0004, 77:0.0246, A7o:0.0012, 82s:0.0001, 85s:0.0011, 88:0.0138, A8o:0.0002, 95s:0.0001, 99:0.026, T4s:0.0001, T9s:0.0014, TT:0.0465, KTo:0.0013, ATo:0.0008, J4s:0.0001, J6s:0.0001, J7s:0.0032, J8s:0.0001, JTs:0.0002, JJ:0.0015, KJo:0.0002, AJo:0.0257, Q3s:0.0011, Q5s:0.0001, Q6s:0.0005, QTs:0.0002, QJs:0.0003, QQ:0.0769, KQo:0.0028, AQo:0.164, K2s:0.0036, K3s:0.0226, K4s:0.0006, K5s:0.0542, K6s:0.0989, K7s:0.0362, K8s:0.2679, K9s:0.1251, KTs:0.1104, KJs:0.3056, KQs:0.0899, KK:0.4086, AKo, A2s:0.2809, A3s:0.4516, A4s:0.4237, A5s:0.0341, A6s:0.0942, A7s:0.24, A8s:0.3692, A9s:0.1655, ATs:0.3173, AJs:0.1761, AQs:0.3923, AKs, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0039, QQ, KK, AKo, AQs:0.0003, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1652, QQ, KK, AKo, AQs:0.0399, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0073, QQ, AQo:0.0001, KK, AKo:0.515, AQs:0.0015, AKs:0.9614, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0247, 55:0.0063, 66:0.1013, 72s:0.0004, 77:0.1349, 88:0.0027, 96s:0.0001, J9s:0.0003, JJ:0.0041, AJo:0.0276, Q5s:0.0003, QJs:0.0001, QQ:0.3676, AQo:0.0972, K6s:0.0011, K7s:0.003, K8s:0.0282, K9s:0.0088, KJs:0.0205, KQs:0.0465, KK:0.1151, AKo:0.0015, A3s:0.0002, A4s:0.0396, A5s:0.0237, A7s:0.0086, A9s:0.0003, ATs:0.0056, AJs:0.2575, AQs:0.3897, AKs:0.0088, AA:0.0128"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "92o:0.0001, A2o:0.0003, 32s:0.0001, 63o:0.0002, Q3o:0.0001, K3o:0.0008, A3o:0.0304, 42s:0.0001, K4o:0.0005, A4o:0.0269, K5o:0.007, A5o:0.05, 63s:0.0001, 64s:0.0003, K6o:0.0063, A6o:0.0391, 74s:0.0004, 76s:0.0008, 77:0.0001, K7o:0.0009, A7o:0.0001, 83s:0.0004, 85s:0.0002, 88:0.003, K8o:0.002, A8o:0.0201, 92s:0.0001, 94s:0.0003, 95s:0.0001, 97s:0.003, 99:0.0001, K9o:0.0032, A9o:0.0985, T2s:0.0001, T3s:0.0002, T4s:0.0008, T5s:0.0005, T6s:0.0007, T8s:0.0004, T9s:0.0002, TT:0.0029, KTo:0.0005, ATo:0.0388, J3s:0.0001, J4s:0.0001, J9s:0.0024, JJ:0.0044, KJo:0.0014, AJo:0.2852, Q7s:0.0002, Q9s:0.0001, QQ:0.3755, AQo:0.3378, K2s:0.0228, K3s:0.0315, K4s:0.0012, K5s:0.0011, K6s:0.0016, K7s:0.0664, K8s:0.0195, K9s:0.0612, KTs:0.0013, KJs:0.006, KQs:0.0045, KK:0.0172, AKo:0.064, A2s:0.0106, A3s:0.1354, A4s:0.0079, A5s:0.083, A6s:0.0228, A7s:0.2488, A8s:0.0038, A9s:0.0833, ATs:0.0076, AJs:0.2503, AQs:0.426, AKs:0.2603, AA:0.9868"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0101, A2o:0.0006, 32s:0.0012, 33:0.0003, 43s:0.0001, 44:0.0001, K4o:0.001, A4o:0.0004, 55:0.0007, 65o:0.0002, K5o:0.0002, A5o:0.0468, 63s:0.001, 65s:0.0011, 66:0.0735, A6o:0.001, 73s:0.0001, 74s:0.0003, 75s:0.0166, 76s:0.0012, 77:0.0157, K7o:0.0004, A7o:0.0003, 82s:0.0001, 83s:0.0001, 85s:0.0014, 86s:0.0004, 87s:0.0004, 88:0.0015, K8o:0.0001, A8o:0.0001, 93s:0.0007, 97s:0.0012, 98s:0.0002, 99:0.0015, A9o:0.0001, T3s:0.0001, T5s:0.0003, TT:0.2136, JTo:0.0001, ATo:0.0004, J7s:0.0001, J9s:0.0011, JTs:0.0001, JJ:0.0026, KJo:0.0002, AJo:0.0023, Q2s:0.0008, Q5s:0.0001, Q6s:0.0001, Q7s:0.0002, Q8s:0.0001, Q9s:0.0005, QTs:0.0001, QJs:0.0004, QQ:0.0197, KQo:0.0002, AQo:0.0006, K2s:0.011, K3s:0.1301, K4s:0.0139, K5s:0.0001, K6s:0.0615, K7s:0.1006, K8s:0.0313, K9s:0.144, KTs:0.0025, KJs:0.082, KQs:0.0187, KK:0.8677, AKo:0.9345, A2s:0.5723, A3s:0.4248, A4s:0.5786, A5s:0.0715, A6s:0.738, A7s:0.6101, A8s:0.7483, A9s:0.4489, ATs:0.7221, AJs:0.1762, AQs:0.1395, AKs:0.7303, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0012, 44:0.2704, 54s:0.3399, 55:0.0706, 64s:0.1607, 65s:0.9224, 66:0.7521, 76s:0.0712, 77:0.1662, 86s:0.2066, 87s:0.0219, 88:0.2998, 97s:0.0158, 99:0.0386, T6s:0.0004, T8s:0.0082, T9s:0.1394, TT:0.1485, JTs:0.0001, JJ:0.5234, QTs:0.0095, QJs:0.0014, QQ:0.4234, KQo:0.0001, AQo:0.411, K5s:0.0016, K7s:0.0841, K8s:0.0001, K9s:0.062, KTs:0.3003, KJs:0.0505, KQs:0.3129, KK:0.4455, A3s:0.0094, A4s:0.0001, A5s:0.0853, A7s:0.0752, A8s:0.0552, A9s:0.1167, ATs:0.0981, AJs:0.9953, AQs:0.3116"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.0002, K5o:0.0001, A5o:0.0002, K6o:0.0002, A6o:0.0001, 88:0.0001, K8o:0.0002, K9o:0.0001, TT:0.0006, KTo:0.0003, J9s:0.0001, JJ:0.0005, KJo:0.0002, QTs:0.0001, QJs:0.0002, QQ:0.0008, KQo:0.0002, AQo:0.0002, K4s:0.0003, K5s:0.0002, K6s:0.0001, K7s:0.0002, K8s:0.0002, KTs:0.0003, KJs:0.0002, KQs:0.0003, KK:0.0017, A2s:0.0003, A7s:0.0003, ATs:0.0001, AJs:0.0002, AQs:0.001, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.019, 33:0.0043, A3o:0.0214, 44:0.0422, A4o:0.0161, 53s:0.0002, 55:0.0071, A5o:0.0003, 64s:0.0001, 66:0.0029, 77:0.0747, 88:0.0587, A8o:0.0055, 95s:0.0001, 96s:0.0008, 97s:0.0066, 98s:0.0085, 99:0.0297, K9o:0.0054, T5s:0.0002, TT:0.2152, KTo:0.0188, ATo:0.012, J5s:0.0001, J7s:0.0003, JJ:0.0033, KJo:0.0044, AJo:0.0065, Q5s:0.0001, QJs:0.0001, QQ:0.5737, KQo:0.0027, AQo:0.3391, K2s:0.025, K3s:0.0001, K4s:0.0119, K5s:0.0882, K6s:0.022, K7s:0.0298, K8s:0.0184, K9s:0.1688, KTs:0.1083, KJs:0.0066, KQs:0.0543, KK:0.5528, AKo, A2s:0.753, A3s:0.3625, A4s:0.5488, A5s:0.5487, A6s:0.4007, A7s:0.4182, A8s:0.5078, A9s:0.6656, ATs:0.6319, AJs:0.0021, AQs:0.6866, AKs"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K3o:0.0086, 43s:0.0717, K4o:0.0048, 53s:0.0088, 55:0.0005, K5o:0.0037, A5o:0.0165, 64s:0.0013, 65s:0.0019, 66:0.02, 84s:0.0004, 86s:0.0001, 88:0.0076, K8o:0.0098, 94s:0.0002, 96s:0.0005, 97s:0.0039, 98s:0.0041, 99:0.004, T6s:0.0003, TT:0.0328, ATo:0.0003, J8s:0.0001, JJ:0.0007, Q3s:0.0063, QTs:0.0001, QJs:0.0008, QQ:0.0194, KQo:0.0139, AQo:0.1423, K2s:0.0164, K3s:0.0134, K4s:0.0017, K5s:0.0423, K6s:0.0048, K7s:0.0002, K8s:0.0247, K9s:0.0006, KTs:0.0039, KJs:0.006, KQs:0.0004, KK:0.1047, AKo:0.0142, A2s:0.2443, A4s:0.0312, A5s:0.0895, A6s:0.2551, A7s:0.0599, A9s:0.0314, ATs:0.1776, AJs:0.112, AQs:0.1279, AKs:0.006, AA:0.983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0336, 52s:0.0012, 53s:0.0856, A5o:0.0275, 63s:0.0001, 64s:0.0018, 65s:0.3845, 66:0.0243, 75s:0.0033, 85s:0.0001, 88:0.0714, 95s:0.0022, 97s:0.0565, 99:0.0079, T3s:0.0013, T6s:0.0004, TT:0.0186, J8s:0.0001, JTs:0.0001, JJ:0.0009, QJs:0.0005, QQ:0.0676, K3s:0.0069, K4s:0.0802, K5s:0.0281, K6s:0.0051, K7s:0.1322, K8s:0.0001, K9s:0.1899, KTs:0.3313, KJs:0.0702, KQs:0.3852, KK:0.8952, AKo:0.9854, A2s:0.012, A3s:0.3064, A4s:0.5696, A5s:0.0001, A6s:0.0561, A7s:0.519, A8s:0.1354, A9s:0.0847, ATs:0.0286, AJs:0.0319, AQs:0.5703, AKs:0.9893, AA:0.017"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|BTN:CALL@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.2646, 42o:0.0001, 52o:0.0011, 62o:0.0001, 92o:0.0014, K2o:0.0496, A2o:0.0002, 33:0.6312, 73o:0.0022, 93o:0.0001, J3o:0.0001, K3o:0.0755, 43s:0.0003, 44:0.959, 64o:0.0675, 74o:0.0003, 94o:0.0001, Q4o:0.0001, K4o:0.0198, 52s:0.6324, 53s:0.0003, 54s:0.1329, 55:0.0379, 95o:0.0001, J5o:0.0001, Q5o:0.0005, K5o:0.0074, 62s:0.0066, 63s:0.582, 65s:0.2466, 66:0.5261, 96o:0.0008, T6o:0.0007, K6o:0.0827, 75s:0.0003, 76s:0.0002, 77:0.846, J7o:0.0003, A7o:0.0014, 82s:0.0005, 83s:0.0036, 84s:0.0004, 85s:0.9328, 86s:0.0006, 87s:0.558, 88:0.3495, J8o:0.0001, A8o:0.0001, 92s:0.0006, 93s:0.0003, 94s:0.01, 95s:0.0268, 96s:0.6965, 97s:0.0004, 98s:0.0036, 99:0.2603, T9o:0.0001, A9o:0.01, T2s:0.0005, T3s:0.0047, T4s:0.0938, T5s:0.0002, T6s:0.0262, T7s:0.2029, T8s:0.0028, T9s:0.0143, TT:0.2032, JTo:0.0003, QTo:0.0008, J2s:0.0034, J3s:0.0003, J4s:0.5435, J5s:0.0006, J6s:0.0025, J7s:0.017, J8s:0.1753, J9s:0.0381, JJ:0.1115, KJo:0.0002, AJo:0.121, Q2s:0.0583, Q3s:0.0005, Q4s:0.0656, Q5s:0.0221, Q6s:0.0085, Q7s:0.0093, Q8s:0.0082, Q9s:0.0011, QTs:0.0823, QJs:0.0071, QQ:0.0002, KQo:0.0104, AQo:0.0282, K2s:0.0001, K3s:0.3483, K4s:0.0006, K6s:0.068, K8s:0.0015, K9s:0.1035, KTs:0.1098, KJs:0.0357, KQs:0.2784, KK:0.0005, AKo:0.0075, A2s:0.0348, A3s:0.0002, A4s:0.2914, A5s:0.1281, A6s:0.5319, A7s:0.3132, A8s:0.0023, A9s:0.0526, ATs:0.3055, AJs:0.7483, AQs:0.4961, AKs:0.1231, AA:0.0004"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0194, K2o:0.0009, A2o:0.2521, 33:0.0001, 53o:0.0155, Q3o:0.0336, K3o:0.1055, A3o:0.021, A4o:0.0862, 95o:0.0067, 62s:0.0028, 65s:0.0006, 66:0.1129, Q6o:0.0155, K6o:0.0167, 72s:0.0019, 77:0.0053, J7o:0.0109, K7o:0.0414, A7o:0.0031, 82s:0.0004, 84s:0.0001, 88:0.0109, T8o:0.014, K8o:0.197, A8o:0.0752, 99:0.1395, Q9o:0.0001, K9o:0.0061, A9o:0.0001, T2s:0.0001, T4s:0.0016, T6s:0.0002, T7s:0.0218, TT:0.0879, KTo:0.001, J2s:0.0275, J3s:0.0164, J4s:0.075, J5s:0.0221, J7s:0.3435, J8s:0.0068, J9s:0.0039, JTs:0.1411, JJ:0.1653, QJo:0.3498, KJo:0.2745, AJo:0.3317, Q2s:0.0026, Q3s:0.0001, Q4s:0.0144, Q5s:0.0226, Q6s:0.0057, Q7s:0.0004, Q8s:0.0466, Q9s:0.2809, QTs:0.1093, QJs:0.3075, QQ:0.2409, KQo:0.0041, AQo:0.3495, K2s:0.0595, K3s:0.0679, K4s:0.1144, K5s:0.2548, K7s:0.0001, K8s:0.1646, K9s:0.0649, KTs:0.0001, KJs:0.0431, KK:0.944, AKo:0.2749, A2s:0.2513, A3s:0.0001, A4s:0.2069, A6s:0.0532, A7s:0.0001, A8s:0.2958, A9s:0.0007, ATs:0.0512, AJs:0.2267, AQs:0.1289, AKs:0.1024, AA:0.9941"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0035, A2o:0.0081, 33:0.0477, A3o:0.0142, 43s:0.0097, K4o:0.0174, 54s:0.0001, 55:0.0002, Q5o:0.0001, K5o:0.021, 65s:0.0921, 66:0.1636, A6o:0.0085, 75s:0.1181, 76s:0.0019, A7o:0.0012, 83s:0.0002, 84s:0.0001, 85s:0.0001, 86s:0.0104, 87s:0.0306, 88:0.0038, A8o:0.0001, 92s:0.0069, 97s:0.0001, 98s:0.0005, 99:0.0239, T9o:0.0001, Q9o:0.0057, A9o:0.0357, T7s:0.0018, T8s:0.0011, T9s:0.0008, TT:0.0122, ATo:0.0002, J2s:0.0006, J5s:0.0117, J6s:0.0194, J7s:0.0015, J8s:0.0339, JTs:0.0005, JJ:0.7218, QJo:0.1194, KJo:0.2837, AJo:0.3093, Q2s:0.1539, Q3s:0.1731, Q4s:0.2012, Q5s:0.4289, Q6s:0.0067, Q8s:0.1877, Q9s:0.0646, QTs:0.1369, QJs:0.4316, QQ:0.7589, KQo:0.9257, AQo:0.528, K2s:0.0386, K3s:0.2051, K4s:0.139, K5s:0.2124, K6s:0.4066, K7s:0.7172, K8s:0.0259, K9s:0.0152, KTs:0.1759, KJs:0.6667, KQs:0.7176, KK:0.0555, AKo:0.7156, A2s:0.0542, A4s:0.158, A5s:0.1161, A6s:0.2822, A7s:0.3653, A8s:0.2905, A9s:0.0866, ATs:0.3265, AJs:0.0079, AQs:0.3689, AKs:0.7605, AA:0.0055"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 63s:0.0001, 65s:0.0001, 74s:0.0001, 95s:0.0001, 98s:0.0001, J3s:0.0002, AJo:0.0001, Q3s:0.0001, KQs:0.0002, KK:0.0637, AKo:0.0066, A4s:0.0001, A9s:0.0004, ATs:0.0003, AJs:0.0063, AQs:0.3388, AKs:0.1105, AA:0.2222"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 73s:0.0002, 98s:0.0004, T3s:0.0001, T8s:0.0001, TT:0.0002, JTs:0.0003, JJ:0.0001, Q2s:0.0001, Q5s:0.0004, Q8s:0.0007, QQ:0.0185, AQo:0.0002, K3s:0.0001, K4s:0.0001, KTs:0.0007, KK:0.1537, AKo:0.7546, A2s:0.2953, A3s:0.0488, A4s:0.0228, A5s:0.4687, A6s:0.0041, A7s:0.0886, A8s:0.0682, A9s:0.0016, ATs:0.2153, AJs:0.6594, AQs:0.1897, AKs:0.8372, AA:0.7778"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4517, 32s:0.0005, 33:0.6609, K3o:0.0001, A3o:0.0001, 42s:0.0012, 43s:0.1238, 44:0.8729, 64o:0.0001, A4o:0.0005, 53s:0.1195, 54s:0.5411, 55:0.9374, 65o:0.0078, A5o:0.0115, 62s:0.0011, 63s:0.0112, 64s:0.1035, 65s:0.7289, 66:0.972, 74s:0.0001, 75s:0.6483, 76s:0.632, 77:0.9927, 87o:0.0003, A7o:0.0024, 84s:0.0001, 85s:0.0483, 86s:0.4303, 87s:0.3647, 88:0.97, 98o:0.001, T8o:0.001, J8o:0.0009, A8o:0.0061, 92s:0.0021, 93s:0.0049, 94s:0.0014, 95s:0.0024, 96s:0.4621, 97s:0.3426, 98s:0.1343, 99:0.8485, A9o:0.0059, T3s:0.0003, T4s:0.0016, T6s:0.0022, T7s:0.0364, T8s:0.0006, T9s:0.0206, TT:0.3124, KTo:0.0008, ATo:0.0096, J4s:0.001, J5s:0.0091, J6s:0.0005, J7s:0.0002, J8s:0.493, J9s:0.0701, JTs:0.0007, JJ:0.5823, QJo:0.0001, AJo:0.0637, Q2s:0.0002, Q4s:0.0005, Q5s:0.0001, Q6s:0.0058, Q7s:0.0029, Q9s:0.0038, QTs:0.0212, QQ:0.7164, KQo:0.0004, AQo:0.7804, K2s:0.0001, K3s:0.0077, K4s:0.0113, K5s:0.004, K6s:0.0122, K7s:0.015, K8s:0.0028, K9s:0.0014, KTs:0.0121, KJs:0.3532, KQs:0.0018, KK:0.211, AKo:0.0501, A2s:0.0008, A3s:0.0002, A4s:0.001, A5s:0.0433, A6s:0.009, A7s:0.0636, A8s:0.0194, A9s:0.035, ATs:0.1553, AJs:0.0262, AQs:0.9395, AKs:0.0272, AA:0.2135"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.002, K2o:0.0001, A2o:0.3225, 32s:0.0001, 33:0.2071, 53o:0.0001, A3o:0.2835, 43s:0.0392, 44:0.0133, A4o:0.2719, 53s:0.0007, 54s:0.0017, 55:0.0014, A5o:0.4394, 63s:0.0054, 64s:0.0289, 65s:0.1906, 66:0.0135, 86o:0.0001, A6o:0.0673, 73s:0.0007, 74s:0.003, 75s:0.0112, 76s:0.1107, 77:0.0013, T7o:0.0001, A7o:0.6646, 82s:0.0007, 84s:0.0004, 86s:0.0179, 87s:0.4781, 88:0.0029, T8o:0.0001, A8o:0.371, 92s:0.0008, 95s:0.0005, 96s:0.0233, 97s:0.1185, 98s:0.0565, 99:0.0129, T9o:0.0002, Q9o:0.0001, A9o:0.0488, T2s:0.0001, T7s:0.0002, T8s:0.0013, T9s:0.029, TT:0.5417, KTo:0.0003, ATo:0.7452, J3s:0.0002, J5s:0.0001, J6s:0.0001, J7s:0.0003, J8s:0.0001, J9s:0.0001, JTs:0.006, JJ:0.0799, QJo:0.0003, AJo:0.6867, Q2s:0.0001, Q3s:0.0182, Q4s:0.0087, Q6s:0.0089, Q7s:0.0241, Q8s:0.0047, Q9s:0.0281, QTs:0.0078, QJs:0.0649, QQ:0.0705, AQo:0.0529, K2s:0.0002, K3s:0.0009, K4s:0.0001, K5s:0.0113, K6s:0.0206, K7s:0.0083, K8s:0.0152, KTs:0.0039, KJs:0.0258, KQs:0.0571, KK:0.789, AKo:0.9498, A2s:0.9651, A3s:0.9564, A4s:0.9956, A5s:0.943, A6s:0.9822, A7s:0.9326, A8s:0.9761, A9s:0.9542, ATs:0.8365, AJs:0.973, AQs:0.0595, AKs:0.9728, AA:0.7865"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0001, QQ:0.0056, KK, AKo:0.0001, AKs:0.8443, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.3022, QQ:0.9584, KK, AKo:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0|CO:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0145, A2o:0.0006, 32s:0.115, 33:0.1159, 42s:0.2735, 43s:0.5854, 44:0.1779, A4o:0.0024, 53s:0.8158, 54s:0.9039, 55:0.9368, 65o:0.0001, A5o:0.0284, 63s:0.4538, 64s:0.8042, 65s:0.5521, 66:0.736, 76o:0.0002, A6o:0.0007, 73s:0.0004, 74s:0.6215, 75s:0.9546, 76s:0.446, 77:0.1748, 97o:0.0003, A7o:0.0136, 84s:0.0002, 85s:0.2669, 86s:0.785, 87s:0.3779, 88:0.5695, T8o:0.0001, A8o:0.0765, 96s:0.5822, 97s:0.6758, 98s:0.0852, 99:0.3967, T9o:0.14, A9o:0.0605, T4s:0.0005, T5s:0.123, T6s:0.1232, T7s:0.7358, T8s:0.8642, T9s:0.5005, TT:0.5013, JTo:0.0178, QTo:0.0084, ATo:0.9418, J4s:0.0028, J7s:0.0401, J8s:0.4946, J9s:0.8338, JTs:0.705, JJ:0.1794, QJo:0.0002, AJo:0.7958, Q2s:0.0134, Q3s:0.0236, Q4s:0.0003, Q5s:0.0006, Q6s:0.0002, Q7s:0.0129, Q8s:0.552, Q9s:0.9284, QTs:0.7811, QJs:0.9988, QQ:0.9886, KQo:0.0008, AQo, K2s:0.02, K3s:0.0035, K4s:0.0058, K5s:0.0318, K6s:0.2503, K7s:0.489, K8s:0.1964, K9s:0.1487, KTs:0.9757, KJs:0.9538, KQs:0.7117, KK:0.0742, A2s:0.0086, A3s:0.0028, A4s:0.0494, A5s:0.0695, A6s:0.0005, A7s:0.0003, A8s:0.0254, A9s:0.1671, ATs:0.9623, AJs:0.648, AQs, AKs:0.0017, AA:0.2706"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9838, A2o:0.7928, 32s:0.0099, 33:0.8839, A3o:0.393, 42s:0.0005, 43s:0.063, 44:0.8215, A4o:0.3861, 53s:0.0079, 54s:0.0025, 55:0.0631, A5o:0.519, 63s:0.0742, 64s:0.1126, 65s:0.4438, 66:0.2638, 76o:0.0079, A6o:0.0938, 72s:0.0002, 73s:0.0003, 74s:0.0124, 75s:0.0285, 76s:0.5503, 77:0.8244, A7o:0.323, 84s:0.0001, 85s:0.0779, 86s:0.208, 87s:0.6143, 88:0.4301, A8o:0.0768, 96s:0.0606, 97s:0.249, 98s:0.8866, 99:0.6021, T9o:0.005, A9o:0.0269, T2s:0.0008, T5s:0.0007, T7s:0.0582, T8s:0.1187, T9s:0.4988, TT:0.4984, ATo:0.0581, J2s:0.0001, J4s:0.0002, J5s:0.0003, J8s:0.0316, J9s:0.1643, JTs:0.2873, JJ:0.8205, AJo:0.2042, Q3s:0.0004, Q7s:0.0015, Q8s:0.0003, QTs:0.0005, QJs:0.0004, QQ:0.0114, K3s:0.0074, K5s:0.0009, K6s:0.0002, K7s:0.0179, K8s:0.0226, K9s:0.0182, KTs:0.0002, KJs:0.006, KQs:0.0053, KK:0.9258, AKo, A2s:0.9896, A3s:0.9971, A4s:0.949, A5s:0.9304, A6s:0.9994, A7s:0.9996, A8s:0.9743, A9s:0.8271, ATs:0.0377, AJs:0.352, AKs:0.9983, AA:0.7294"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:3BET@7.0|CO:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0105, JJ, QQ, KK, AKo, AQs:0.2165, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0047, QQ, KK, AKo, AQs:0.9197, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0603, JJ:0.1737, QQ, AQo:0.0737, KK, AKo, AQs:0.9991, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 53s:0.0012, 55:0.0108, 66:0.0297, 76s:0.0618, 77:0.1348, 86s:0.0091, 88:0.0731, 98s:0.0002, 99:0.1409, TT:0.0089, ATo:0.0727, JJ:0.2567, AJo:0.0363, QTs:0.0082, QJs:0.0004, QQ:0.9948, AQo:0.043, K4s:0.3169, K5s:0.1168, K6s:0.0184, K7s:0.0003, KTs:0.0712, KJs:0.0604, KQs:0.5636, KK:0.012, A4s:0.3402, A5s:0.0768, A6s:0.0045, A7s:0.0012, A8s:0.1282, A9s:0.2245, ATs:0.2707, AJs:0.696, AQs:0.8769, AKs:0.0001, AA:0.0009"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.0402, 32s:0.0001, 33:0.0003, A3o:0.0586, 44:0.0001, K4o:0.0001, A4o:0.0919, A5o:0.0697, 64s:0.0002, 65s:0.0002, A6o:0.0001, 77:0.0002, A7o:0.0007, 86s:0.0006, 87s:0.0001, 88:0.0001, K8o:0.0001, A8o:0.0031, 97s:0.0003, K9o:0.0004, A9o:0.0184, T2s:0.0004, TT:0.0011, KTo:0.0011, ATo:0.1892, J7s:0.0011, JJ:0.0016, KJo:0.0001, AJo:0.4707, Q6s:0.0003, Q7s:0.0001, Q9s:0.0021, QJs:0.0001, QQ:0.0004, KQo:0.0002, AQo:0.1909, K2s:0.0039, K3s:0.0096, K4s:0.0244, K5s:0.0084, K7s:0.0001, K8s:0.0006, K9s:0.013, KJs:0.0212, KQs:0.0005, KK:0.0012, AKo:0.0199, A2s:0.1687, A3s:0.0384, A4s:0.0549, A5s:0.0191, A6s:0.0343, A7s:0.0038, A8s:0.2032, A9s:0.0304, ATs:0.0139, AJs:0.1113, AQs:0.0844, AKs:0.7273, AA:0.9991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0016, 33:0.0055, 42s:0.0001, 44:0.0003, K4o:0.0008, A4o:0.0146, 52s:0.0012, 54s:0.0018, 55:0.0009, A5o:0.0206, 62s:0.0002, 64s:0.009, 65s:0.0036, 66:0.0036, 74s:0.0003, 75s:0.0007, 77:0.0088, A7o:0.0026, 82s:0.0001, 86s:0.0016, 88:0.0012, A8o:0.0008, 93s:0.0001, 98s:0.0048, 99:0.0006, K9o:0.0004, T5s:0.0001, T6s:0.0001, T8s:0.0012, TT:0.0041, KTo:0.0007, ATo:0.0141, J7s:0.0028, JTs:0.0018, JJ:0.2803, KJo:0.0024, AJo:0.0114, Q5s:0.0012, Q9s:0.0008, QTs:0.0006, QQ:0.0029, KQo:0.0022, AQo:0.0031, K2s:0.031, K3s:0.0217, K4s:0.0916, K5s:0.0778, K6s:0.0611, K7s:0.0357, K8s:0.1704, K9s:0.4044, KTs:0.3713, KJs:0.7409, KQs:0.321, KK:0.9868, AKo:0.9801, A2s:0.3884, A3s:0.198, A4s:0.5608, A5s:0.7977, A6s:0.0293, A7s:0.7731, A8s:0.4846, A9s:0.615, ATs:0.5939, AJs:0.1926, AQs:0.0216, AKs:0.2725"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.1452, 65s:0.141, 66:0.1434, 77:0.3739, 87s:0.0001, 88:0.3661, 99:0.3359, TT:0.5053, ATo:0.004, J9s:0.0028, JJ:0.5125, AJo:0.2299, Q9s:0.0004, QJs:0.0302, QQ:0.8403, KQo:0.0067, AQo:0.7293, K2s:0.0002, K3s:0.0039, K4s:0.0268, K6s:0.0003, K7s:0.0449, K8s:0.0264, K9s:0.1672, KTs:0.6153, KJs:0.3866, KQs:0.6538, A2s:0.1299, A3s:0.0669, A4s:0.0063, A5s:0.4738, A6s:0.0326, A7s:0.3265, A8s:0.3577, A9s:0.5117, ATs:0.8042, AJs:0.3932, AQs:0.7733"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.0001, K3o:0.0001, JJ:0.0003, QJo:0.0001, KJo:0.0002, Q3s:0.0001, QQ:0.0004, KQo:0.0002, K2s:0.0001, K6s:0.0001, KK:0.0137, A6s:0.0001, A9s:0.0001, AQs:0.0004, AKs:0.0001, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0017, A2o:0.0039, 33:0.0001, A3o:0.0003, 44:0.0082, A4o:0.0001, 55:0.0019, 65s:0.0045, A6o:0.0001, 77:0.0011, A7o:0.0069, 84s:0.0001, 86s:0.0001, 87s:0.0003, 88:0.0014, 96s:0.0001, 99:0.0002, T8s:0.0002, TT:0.0043, ATo:0.0007, J5s:0.0001, JTs:0.0001, JJ:0.4812, KJo:0.0001, AJo:0.4991, QTs:0.0001, QJs:0.0001, QQ:0.1594, AQo:0.2404, K2s:0.0022, K3s:0.0057, K4s:0.0445, K5s:0.0059, K6s:0.0021, K7s:0.2607, K8s:0.0237, K9s:0.1338, KTs:0.2428, KJs:0.591, KQs:0.3461, KK:0.9863, AKo, A2s:0.3772, A3s:0.0914, A4s:0.968, A5s:0.2462, A6s:0.5887, A7s:0.6037, A8s:0.5464, A9s:0.451, ATs:0.1485, AJs:0.6043, AQs:0.2262, AKs:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BB:3BET@7.0|HJ:4BET@11.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0051, A2o:0.0059, 32s:0.0003, 33:0.0099, A3o:0.0476, 42s:0.3019, 43s:0.7077, 44:0.448, 54o:0.0301, A4o:0.0209, 52s:0.0131, 53s:0.7198, 54s:0.8314, 55:0.5775, 65o:0.0254, J5o:0.0003, A5o:0.0834, 63s:0.3593, 64s:0.8962, 65s:0.3543, 66:0.7187, 76o:0.0085, J6o:0.0003, K6o:0.0013, A6o:0.073, 73s:0.0304, 74s:0.5853, 75s:0.3902, 76s:0.1515, 77:0.7855, 87o:0.0001, 97o:0.0001, T7o:0.0008, J7o:0.0008, K7o:0.0001, A7o:0.1885, 82s:0.0064, 83s:0.0005, 84s:0.0033, 85s:0.5571, 86s:0.5043, 87s:0.6309, 88:0.7927, T8o:0.0005, A8o:0.9049, 94s:0.0785, 95s:0.2184, 96s:0.7146, 97s:0.2725, 98s:0.7905, 99:0.9217, T9o:0.0919, J9o:0.0018, A9o:0.999, T2s:0.0001, T3s:0.0011, T4s:0.0187, T5s:0.004, T6s:0.0653, T7s:0.866, T8s:0.6993, T9s:0.7465, TT:0.8794, JTo:0.6852, QTo:0.1221, KTo:0.0117, ATo:0.9993, J2s:0.0054, J3s:0.0008, J4s:0.0149, J5s:0.0294, J6s:0.0215, J7s:0.2749, J8s:0.9543, J9s:0.9982, JTs:0.9469, JJ:0.9963, QJo:0.5187, KJo:0.0603, AJo:0.9999, Q2s:0.0427, Q3s:0.1281, Q4s:0.3016, Q5s:0.3975, Q6s:0.0897, Q7s:0.121, Q8s:0.7386, Q9s:0.9294, QTs:0.9592, QJs:0.9993, QQ:0.9979, KQo:0.2462, AQo, K2s:0.2482, K3s:0.6776, K4s:0.4927, K5s:0.557, K6s:0.8476, K7s:0.8816, K8s:0.6244, K9s:0.6784, KTs:0.9962, KJs:0.9978, KQs:0.9959, KK:0.8643, AKo:0.0948, A2s:0.0078, A3s:0.0081, A4s:0.0033, A5s:0.1028, A6s:0.0421, A7s:0.038, A8s:0.8517, A9s:0.9346, ATs:0.9982, AJs:0.9998, AQs:0.9994, AKs:0.0562, AA:0.1538"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9948, A2o:0.5122, 32s:0.0169, 33:0.99, A3o:0.5393, 42s:0.0082, 43s:0.2004, 44:0.5518, 54o:0.0002, 64o:0.0003, K4o:0.0001, A4o:0.8557, 52s:0.0214, 53s:0.2268, 54s:0.1518, 55:0.4222, 65o:0.0097, 85o:0.0003, K5o:0.0001, A5o:0.8425, 62s:0.0008, 63s:0.1955, 64s:0.0918, 65s:0.6453, 66:0.2811, 76o:0.0168, 86o:0.0001, A6o:0.2988, 73s:0.0023, 74s:0.0033, 75s:0.5778, 76s:0.8447, 77:0.2144, 87o:0.0011, 97o:0.0002, A7o:0.5894, 82s:0.0005, 83s:0.0004, 84s:0.0126, 85s:0.3181, 86s:0.4804, 87s:0.351, 88:0.2072, 98o:0.0001, A8o:0.0246, 93s:0.0001, 94s:0.0002, 96s:0.0106, 97s:0.6829, 98s:0.1896, 99:0.0781, K9o:0.0003, A9o:0.0003, T2s:0.0002, T3s:0.0005, T5s:0.0003, T6s:0.0137, T7s:0.0093, T8s:0.2316, T9s:0.2523, TT:0.1206, JTo:0.0001, KTo:0.0005, ATo:0.0007, J2s:0.0003, J3s:0.0006, J4s:0.0013, J7s:0.0018, J8s:0.0009, J9s:0.001, JTs:0.0518, JJ:0.0037, KJo:0.0008, AJo:0.0001, Q3s:0.0044, Q4s:0.0004, Q5s:0.0019, Q7s:0.0001, Q8s:0.0002, Q9s:0.0012, QTs:0.0407, QJs:0.0006, QQ:0.0021, KQo:0.0003, K2s:0.0026, K3s:0.0179, K4s:0.0072, K5s:0.0071, K6s:0.0054, K7s:0.0018, K8s:0.0019, K9s:0.0007, KTs:0.0018, KJs:0.0022, KQs:0.0039, KK:0.1357, AKo:0.9052, A2s:0.9912, A3s:0.9918, A4s:0.9966, A5s:0.8971, A6s:0.9575, A7s:0.962, A8s:0.1482, A9s:0.0645, ATs:0.0018, AJs:0.0002, AQs:0.0006, AKs:0.9438, AA:0.8462"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BB:3BET@7.0|HJ:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.9506, JJ:0.9807, QQ:0.9773, AQo:0.0001, KK, AKo, AQs:0.0008, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@37.25|BB:CALL@36.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0017, 42o:0.0002, 72o:0.0001, 82o:0.0008, 92o:0.0002, T2o:0.0004, Q2o:0.0001, A2o:0.0003, 53o:0.0006, J3o:0.0005, K3o:0.0003, A3o:0.0024, 42s:0.0044, 54o:0.0001, 74o:0.0004, 84o:0.0006, T4o:0.0002, J4o:0.0003, Q4o:0.0001, K4o:0.0002, A4o:0.0033, 52s:0.0047, 54s:0.0109, 55:0.011, 75o:0.0003, Q5o:0.0005, K5o:0.0011, 62s:0.0044, 64s:0.0042, 65s:0.0148, 66:0.0007, J6o:0.0003, Q6o:0.0001, K6o:0.0008, A6o:0.0006, 73s:0.0228, 74s:0.0022, 75s:0.0166, 77:0.0265, T7o:0.0001, J7o:0.0004, K7o:0.0002, A7o:0.0006, 84s:0.0022, 85s:0.0062, 86s:0.0009, 87s:0.0046, 88:0.0012, 98o:0.0006, T8o:0.0002, Q8o:0.0003, K8o:0.0011, A8o:0.0004, 93s:0.0003, 95s:0.0361, 96s:0.0087, 97s:0.0012, 98s:0.0195, 99:0.0143, T9o:0.0003, J9o:0.0002, A9o:0.0022, T2s:0.0042, T4s:0.0072, T5s:0.0084, T7s:0.0075, T8s:0.0039, TT:0.0197, QTo:0.0002, ATo:0.0089, J4s:0.0015, J6s:0.0062, J9s:0.0009, JTs:0.027, JJ:0.0182, QJo:0.005, AJo:0.0025, Q3s:0.0026, Q4s:0.0026, Q6s:0.0007, Q7s:0.0012, QTs:0.0011, QQ:0.0425, KQo:0.0015, AQo:0.0057, K2s:0.01, K3s:0.0087, K4s:0.0095, K5s:0.009, K7s:0.0015, K8s:0.0092, KJs:0.0206, KQs:0.0126, KK:0.2468, AKo:0.0007, A2s:0.008, A3s:0.0114, A4s:0.0074, A5s:0.006, A6s:0.0044, A7s:0.0122, A8s:0.0092, A9s:0.0293, ATs:0.0076, AJs:0.0051, AQs:0.0092, AA:0.8623"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0014, 32o:0.0001, 42o:0.0011, 62o:0.0006, 92o:0.0004, T2o:0.0008, J2o:0.0001, Q2o:0.0005, K2o:0.0004, A2o:0.0027, 63o:0.0001, 73o:0.0004, 83o:0.0009, T3o:0.0007, J3o:0.0003, K3o:0.0009, A3o:0.0026, 43s:0.0023, 44:0.0041, 64o:0.0002, 74o:0.0006, 84o:0.0018, T4o:0.0002, J4o:0.0019, K4o:0.0011, A4o:0.006, 52s:0.0057, 53s:0.0062, 55:0.0058, 75o:0.0001, J5o:0.0001, A5o:0.0012, 62s:0.0021, 64s:0.0015, 65s:0.007, T6o:0.0004, Q6o:0.0016, K6o:0.0007, A6o:0.0013, 74s:0.002, 75s:0.0021, 76s:0.0324, 87o:0.0004, 97o:0.0004, K7o:0.0008, A7o:0.0034, 83s:0.0033, 86s:0.0026, 88:0.0007, 98o:0.0021, T8o:0.0009, K8o:0.0004, A8o:0.0005, 96s:0.0053, 97s:0.002, 99:0.0015, J9o:0.0007, Q9o:0.0021, K9o:0.0002, A9o:0.0007, T2s:0.0141, T3s:0.0055, T4s:0.0194, T7s:0.0017, T8s:0.0032, T9s:0.0019, TT:0.0264, JTo:0.0009, KTo:0.0004, ATo:0.009, J2s:0.0024, J3s:0.002, J4s:0.0046, J5s:0.0006, J9s:0.0662, JTs:0.0022, JJ:0.0036, KJo:0.0006, Q2s:0.0039, Q4s:0.0039, Q5s:0.0019, Q9s:0.002, QQ:0.0166, KQo:0.0011, AQo:0.0013, K2s:0.0093, K7s:0.005, K9s:0.0019, KJs:0.0011, KQs:0.0213, KK:0.0555, AKo:0.007, A3s:0.0155, A4s:0.0044, A5s:0.0054, A6s:0.0045, A7s:0.0196, A8s:0.038, A9s:0.0026, ATs:0.0078, AQs:0.0218, AKs:0.1884, AA:0.9987"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32o:0.0013, 52o:0.0151, Q2o:0.0089, A2o:0.0188, 32s:0.0831, 33:0.0175, 43o:0.0085, 63o:0.0021, 73o:0.0065, 83o:0.0048, 93o:0.0291, J3o:0.0199, K3o:0.0133, 42s:0.0656, 43s:0.0091, 44:0.0285, 54o:0.0108, 64o:0.0061, 74o:0.0035, 84o:0.0071, 94o:0.0067, T4o:0.0039, J4o:0.0038, K4o:0.0048, A4o:0.0066, 54s:0.0109, 65o:0.0065, 75o:0.0072, 62s:0.0174, 64s:0.0286, 66:0.0134, 86o:0.0045, T6o:0.011, J6o:0.0055, Q6o:0.0197, K6o:0.0036, A6o:0.0068, 72s:0.039, 75s:0.0125, 76s:0.0153, 77:0.0045, J7o:0.0085, K7o:0.0053, A7o:0.0084, 82s:0.0233, 85s:0.1803, 87s:0.0753, T8o:0.0073, Q8o:0.039, 93s:0.0078, 96s:0.0266, 98s:0.021, J9o:0.0244, K9o:0.0096, A9o:0.0033, T2s:0.0638, T4s:0.1166, T5s:0.133, T6s:0.043, T9s:0.3393, TT:0.1028, KTo:0.0041, ATo:0.0079, J3s:0.0315, J5s:0.0274, J7s:0.0708, JTs:0.1454, JJ:0.0716, QJo:0.0236, AJo:0.0165, Q3s:0.0069, Q4s:0.1076, Q5s:0.2073, Q8s:0.009, QJs:0.0896, QQ:0.5921, KQo:0.0292, AQo:0.0181, K2s:0.0667, K3s:0.1284, K8s:0.4786, K9s:0.2045, KTs:0.0448, KK:0.1572, A4s:0.0855, A5s:0.1011, A7s:0.0243, AJs:0.1574, AQs:0.3311, AA:0.7282"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0002, 32s:0.0005, 42s:0.0001, 52s:0.0001, 53s:0.0004, 73s:0.0001, 74s:0.0001, 94s:0.0001, TT:0.0001, QTo:0.0001, ATo:0.0001, J3s:0.0001, J9s:0.0002, Q7s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.1098, AQo:0.0005, K3s:0.0014, KJs:0.0003, KK:0.0054, AKo:0.1259, A2s:0.0012, A8s:0.0001, A9s:0.0011, ATs:0.0001, AJs:0.0002, AQs:0.0908, AKs:0.0033, AA:0.5947"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, 32s:0.0002, 43s:0.0004, K4o:0.0002, A4o:0.0082, 52s:0.001, 53s:0.0179, 55:0.0012, 63s:0.0001, 64s:0.0636, 66:0.0002, 72s:0.0001, 76s:0.1997, A7o:0.0005, 85s:0.0019, 87s:0.0003, 92s:0.0001, 95s:0.0002, A9o:0.0001, T9s:0.0001, TT:0.0015, ATo:0.0003, J3s:0.0002, J5s:0.0001, J8s:0.0001, JJ:0.007, Q3s:0.0354, Q5s:0.0038, Q6s:0.0711, Q9s:0.0416, QTs:0.0306, QQ:0.3291, AQo:0.6761, K3s:0.0877, K5s:0.0172, K6s:0.0007, K9s:0.0003, KTs:0.0005, KQs:0.1253, KK:0.871, AKo:0.3193, A2s:0.1345, A3s:0.1481, A4s:0.1195, A5s:0.0274, A6s:0.0882, A7s:0.1864, A8s:0.1882, A9s:0.0004, ATs:0.2433, AJs:0.0036, AQs:0.515, AKs:0.1937, AA:0.4053"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3379, A2o:0.0026, 33:0.5961, A3o:0.0002, 42s:0.0007, 43s:0.1643, 44:0.7404, 54o:0.0108, A4o:0.0107, 52s:0.2212, 53s:0.613, 54s:0.9111, 55:0.8235, 65o:0.2406, A5o:0.0006, 64s:0.0098, 65s:0.9538, 66:0.9616, A6o:0.0041, 73s:0.0242, 74s:0.3057, 75s:0.4104, 76s:0.9127, 77:0.9387, 87o:0.002, 97o:0.0586, A7o:0.0296, 83s:0.0002, 85s:0.4805, 86s:0.7401, 87s:0.9085, 88:0.9769, 98o:0.0013, T8o:0.008, A8o:0.0006, 92s:0.0175, 95s:0.4668, 96s:0.5479, 97s:0.8622, 98s:0.8365, 99:0.9044, T9o:0.016, J9o:0.0134, A9o:0.0004, T3s:0.0262, T4s:0.0024, T5s:0.0318, T6s:0.0317, T7s:0.5395, T8s:0.5596, T9s:0.9041, TT:0.9147, JTo:0.0272, KTo:0.3215, ATo:0.0029, J5s:0.0001, J6s:0.1524, J7s:0.0017, J8s:0.1831, J9s:0.643, JTs:0.8527, JJ:0.9389, KJo:0.2527, AJo:0.0031, Q3s:0.0469, Q4s:0.001, Q8s:0.0011, Q9s:0.0931, QTs:0.8367, QJs:0.2505, QQ:0.8373, AQo:0.6831, K2s:0.1904, K3s:0.0202, K4s:0.3485, K5s:0.5311, K6s:0.8858, K7s:0.2368, K8s:0.1792, K9s:0.855, KTs:0.7119, KJs:0.9053, KQs:0.3463, KK:0.0491, AKo:0.5646, A2s:0.1687, A3s:0.3836, A4s:0.2115, A5s:0.0718, A6s:0.0851, A7s:0.2609, A8s:0.385, A9s:0.4396, ATs:0.784, AJs:0.535, AQs:0.6181, AKs:0.4435, AA:0.3239"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.005, A2o:0.0017, 33:0.0069, A3o:0.0002, 42s:0.0002, 43s:0.0017, 44:0.0047, A4o:0.0006, 52s:0.0003, 53s:0.0021, 54s:0.0031, 55:0.0061, 65o:0.0007, A5o:0.0007, 63s:0.001, 64s:0.0017, 65s:0.0094, 66:0.0089, 76o:0.0001, K6o:0.0001, A6o:0.0001, 72s:0.0001, 74s:0.0001, 76s:0.0066, 77:0.008, 87o:0.0002, A7o:0.0009, 83s:0.0013, 84s:0.0018, 85s:0.0014, 86s:0.0006, 87s:0.0002, 88:0.007, A8o:0.0005, 92s:0.0001, 96s:0.0037, 97s:0.0011, 98s:0.0018, 99:0.0064, A9o:0.0001, T3s:0.0002, T6s:0.0006, T9s:0.0006, TT:0.0065, ATo:0.0091, J4s:0.0002, J5s:0.0004, J6s:0.0002, J7s:0.0003, J8s:0.0001, J9s:0.0015, JTs:0.0003, JJ:0.0105, AJo:0.0408, Q6s:0.0002, Q8s:0.0001, Q9s:0.0005, QTs:0.0072, QJs:0.0004, QQ:0.1593, AQo:0.2981, K4s:0.0675, K5s:0.0001, K7s:0.0001, K8s:0.0345, K9s:0.0339, KTs:0.0948, KJs:0.001, KQs:0.485, KK:0.9509, AKo:0.4354, A2s:0.3096, A3s:0.2809, A4s:0.2693, A5s:0.4842, A6s:0.1472, A7s:0.351, A8s:0.3211, A9s:0.1782, ATs:0.1755, AJs:0.389, AQs:0.3677, AKs:0.5565, AA:0.6761"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0007, QQ:0.0764, KK, AQs:0.0013, AKs:0.0182, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0646, JJ:0.2073, QQ:0.5918, KK, AKo:0.7988, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|HJ:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1289, A2o:0.0004, 33:0.3078, 53o:0.0003, A3o:0.0003, 42s:0.0303, 43s:0.2898, 44:0.4285, 54o:0.0003, 64o:0.0003, A4o:0.0004, 52s:0.0052, 53s:0.0877, 54s:0.8868, 55:0.9573, 65o:0.0004, A5o:0.0003, 62s:0.0008, 63s:0.0317, 64s:0.598, 65s:0.9614, 66:0.9944, 86o:0.0004, A6o:0.0005, 73s:0.0004, 74s:0.0661, 75s:0.3347, 76s:0.9593, 77:0.9971, 87o:0.0006, 97o:0.0003, A7o:0.0003, 82s:0.0006, 84s:0.0002, 85s:0.0295, 86s:0.432, 87s:0.9784, 88:0.9868, T8o:0.0006, A8o:0.0006, 92s:0.0002, 94s:0.0002, 95s:0.1629, 96s:0.4006, 97s:0.7704, 98s:0.9364, 99:0.9947, T9o:0.4029, J9o:0.0552, Q9o:0.0002, A9o:0.0005, T2s:0.0003, T4s:0.0475, T5s:0.047, T6s:0.0368, T7s:0.561, T8s:0.8702, T9s:0.9475, TT:0.9785, JTo:0.1322, QTo:0.0001, KTo:0.0001, ATo:0.0761, J3s:0.0001, J7s:0.1069, J8s:0.117, J9s:0.8723, JTs:0.9474, JJ:0.9835, KJo:0.0001, AJo:0.107, Q5s:0.0001, Q8s:0.0006, Q9s:0.1797, QTs:0.6955, QJs:0.4788, QQ:0.9957, AQo:0.9502, K3s:0.0044, K4s:0.1398, K5s:0.0723, K6s:0.2996, K7s:0.1056, K8s:0.0012, K9s:0.4097, KTs:0.8802, KJs:0.7812, KQs:0.0624, KK:0.9948, AKo:0.0891, A2s:0.0531, A3s:0.0954, A4s:0.1243, A5s:0.3046, A6s:0.1093, A7s:0.148, A8s:0.2849, A9s:0.5995, ATs:0.5126, AJs:0.8007, AQs:0.9948, AKs:0.1937, AA:0.3026"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.003, A2o:0.0003, 33:0.0018, A3o:0.0008, 42s:0.0001, 44:0.0437, A4o:0.0012, 53s:0.0002, 54s:0.0004, 55:0.0036, A5o:0.0003, 64s:0.0018, 66:0.0008, A6o:0.0004, 73s:0.0003, 74s:0.0002, 76s:0.0005, 77:0.0002, A7o:0.0004, 87s:0.0005, 88:0.0022, A8o:0.0006, 92s:0.0001, 97s:0.0001, 98s:0.0018, 99:0.0047, A9o:0.0004, T8s:0.0001, T9s:0.0002, TT:0.0197, ATo:0.0104, J8s:0.0001, JJ:0.0056, AJo:0.0008, QJs:0.0001, QQ:0.0043, KQo:0.0001, AQo:0.0017, K2s:0.0001, K3s:0.0004, K4s:0.0002, K5s:0.0002, K8s:0.0001, K9s:0.0002, KTs:0.0002, KJs:0.0001, KQs:0.0002, KK:0.0052, AKo:0.9109, A2s:0.4123, A3s:0.6181, A4s:0.6853, A5s:0.5548, A6s:0.314, A7s:0.5065, A8s:0.0752, A9s:0.238, ATs:0.4819, AJs:0.182, AQs:0.005, AKs:0.8063, AA:0.6974"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|HJ:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ, QQ, KK, AKo:0.6684, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0002, 64s:0.0001, 66:0.0015, 75s:0.0001, 77:0.0003, 87s:0.0002, 97s:0.0021, 99:0.0002, T5s:0.0001, T6s:0.0001, TT:0.0022, JJ:0.0011, Q5s:0.0001, Q6s:0.0001, Q8s:0.0001, QJs:0.0001, QQ:0.0003, KQo:0.0001, K5s:0.0001, K7s:0.0001, K9s:0.0001, KJs:0.0001, KQs:0.0006, KK:0.4819, AKo:0.1166, A2s:0.0001, A3s:0.0001, A9s:0.0001, ATs:0.0143, AJs:0.0038, AQs:0.0234, AKs:0.0005, AA:0.186"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0068, 33:0.0001, 63o:0.0018, 42s:0.0008, 44:0.0045, 53s:0.0042, 55:0.0061, K5o:0.0132, A5o:0.0003, 63s:0.0024, 64s:0.0009, 65s:0.0018, 66:0.0057, 76o:0.0039, 86o:0.0052, 76s:0.0047, 77:0.0008, 87o:0.0002, K7o:0.0013, A7o:0.005, 82s:0.0024, 85s:0.0031, 87s:0.0021, 88:0.0054, T8o:0.0003, K8o:0.0025, A8o:0.0042, 92s:0.0062, 94s:0.0205, 97s:0.0031, 98s:0.0064, 99:0.0022, K9o:0.0058, A9o:0.0071, T4s:0.0021, T5s:0.0092, T7s:0.0037, T8s:0.0006, TT:0.0013, J2s:0.0018, J3s:0.0009, J4s:0.0001, J6s:0.0051, J8s:0.006, J9s:0.0036, JTs:0.0074, JJ:0.0077, AJo:0.0012, Q2s:0.0097, Q5s:0.0012, Q6s:0.003, Q7s:0.0065, Q9s:0.0038, QTs:0.0022, QJs:0.0002, QQ:0.0239, AQo:0.0105, K2s:0.0035, K3s:0.0199, K4s:0.0115, K5s:0.0001, K6s:0.0304, K7s:0.2173, K8s:0.0364, KTs:0.0264, KJs:0.0022, KK:0.4682, AKo:0.737, A2s:0.0362, A3s:0.0679, A4s:0.0925, A5s:0.4289, A6s:0.1275, A7s:0.0791, A8s:0.0656, A9s:0.0613, ATs:0.0044, AJs:0.0647, AQs:0.0358, AKs:0.9948, AA:0.814"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0551, 32s:0.0059, 33:0.3511, 43s:0.0428, 44:0.2426, 54o:0.0821, 52s:0.1104, 53s:0.051, 54s:0.5087, 55:0.8028, 65o:0.0573, 63s:0.0016, 64s:0.0634, 65s:0.7099, 66:0.7965, 76o:0.0232, 73s:0.0001, 74s:0.0294, 75s:0.324, 76s:0.8785, 77:0.9797, 87o:0.0152, 82s:0.0004, 84s:0.0075, 85s:0.0828, 86s:0.5959, 87s:0.4717, 88:0.6803, T8o:0.0113, 97s:0.6007, 98s:0.8151, 99:0.9438, T2s:0.0005, T5s:0.0044, T6s:0.0711, T7s:0.0253, T8s:0.0531, T9s:0.3024, TT:0.4429, J3s:0.0001, J9s:0.2386, JTs:0.1487, JJ:0.4097, Q8s:0.0001, QTs:0.0012, QJs:0.0323, QQ:0.6136, AQo:0.7339, K2s:0.0209, K3s:0.071, K4s:0.0006, K5s:0.0681, K6s:0.1726, K7s:0.0877, K8s:0.0079, K9s:0.0859, KTs:0.109, KJs:0.0639, KQs:0.0005, KK:0.6661, AKo:0.3672, A2s:0.1219, A3s:0.0088, A4s:0.0212, A5s:0.0757, A6s:0.0496, A7s:0.1933, A8s:0.3419, A9s:0.0793, ATs:0.1691, AJs:0.3204, AQs:0.9695, AKs:0.1693, AA:0.4995"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0017, A2o:0.0008, 32s:0.0009, 33:0.0032, 43o:0.0001, 53o:0.0006, A3o:0.0006, 42s:0.0002, 43s:0.001, 44:0.0016, 54o:0.0008, 74o:0.0004, A4o:0.0008, 52s:0.0008, 53s:0.0007, 54s:0.0044, 55:0.0017, 75o:0.0006, 85o:0.0004, A5o:0.0038, 63s:0.0006, 64s:0.0008, 65s:0.0014, 66:0.0042, A6o:0.0016, 73s:0.0011, 74s:0.0003, 75s:0.0004, 76s:0.002, 77:0.0023, 87o:0.0004, 97o:0.0003, A7o:0.0027, 82s:0.0003, 84s:0.0007, 85s:0.0013, 86s:0.0008, 87s:0.0014, 88:0.0028, 98o:0.0006, T8o:0.0001, A8o:0.0008, 92s:0.0014, 93s:0.0002, 94s:0.0013, 95s:0.0007, 96s:0.0009, 97s:0.0033, 98s:0.0008, 99:0.0036, T9o:0.0001, K9o:0.0599, A9o:0.0006, T2s:0.0001, T3s:0.0003, T4s:0.0013, T5s:0.0007, T8s:0.0013, T9s:0.0024, TT:0.002, KTo:0.0394, ATo:0.0011, J3s:0.0006, J4s:0.0012, J5s:0.0001, J6s:0.0009, J7s:0.0001, J8s:0.0005, J9s:0.0016, JTs:0.001, JJ:0.0054, KJo:0.0055, AJo:0.0003, Q5s:0.0001, Q6s:0.001, Q7s:0.0001, Q9s:0.0001, QTs:0.0011, QJs:0.0006, QQ:0.0003, KQo:0.04, AQo:0.0019, K2s:0.0086, K3s:0.0587, K4s:0.1106, K5s:0.1428, K6s:0.1249, K7s:0.1642, K8s:0.1704, K9s:0.1416, KTs:0.2508, KJs:0.2523, KQs:0.1765, KK:0.3339, AKo:0.6328, A2s:0.1649, A3s:0.4035, A4s:0.6025, A5s:0.595, A6s:0.2645, A7s:0.0462, A8s:0.4113, A9s:0.0329, ATs:0.1874, AJs:0.1204, AQs:0.03, AKs:0.83, AA:0.5005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0001, 43s:0.0002, 44:0.0264, K4o:0.0001, 54s:0.0001, 55:0.0002, 75o:0.0002, J5o:0.0001, A5o:0.0005, 62s:0.0071, 64s:0.0041, 65s:0.0004, 66:0.0003, 73s:0.0001, 74s:0.0003, 77:0.0006, 83s:0.0001, 84s:0.0008, 88:0.0024, A8o:0.0004, 92s:0.0001, 94s:0.0007, 95s:0.0144, 96s:0.0004, 97s:0.0001, 98s:0.0005, 99:0.0002, K9o:0.0001, T2s:0.0009, T3s:0.0012, T4s:0.0001, T5s:0.0002, T7s:0.0001, JTo:0.0002, J2s:0.0001, J3s:0.0001, J7s:0.0005, J8s:0.003, J9s:0.0039, JTs:0.0093, JJ:0.0003, AJo:0.0008, Q6s:0.0002, Q8s:0.0001, QTs:0.0013, QJs:0.0005, QQ:0.0082, AQo:0.0008, K2s:0.0001, K4s:0.0001, K5s:0.0001, K6s:0.0001, K8s:0.001, KTs:0.0098, KJs:0.0168, KK:0.968, AKo:0.1655, A2s:0.074, A3s:0.2379, A4s:0.4712, A5s:0.3722, A8s:0.0044, A9s:0.001, ATs:0.0107, AJs:0.0016, AQs:0.0026, AKs:0.8507, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "98s:0.0001, JJ:0.0005, KK, AKo:0.0004, A5s:0.0001, ATs:0.0001, AQs:0.0001, AKs:0.0032, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0875, QQ:0.3377, KK, AKo:0.9996, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0001, 44:0.0002, 54s:0.0003, 66:0.0001, 76s:0.0001, 82s:0.0004, 87s:0.0003, 95s:0.0001, 98s:0.0003, 99:0.0002, T4s:0.0002, T7s:0.0002, TT:0.0201, J3s:0.0001, J4s:0.0001, J8s:0.0001, JJ:0.0025, Q7s:0.0001, QQ:0.0265, K3s:0.0001, K4s:0.0001, K5s:0.0001, KTs:0.0018, KJs:0.0002, KQs:0.0001, KK:0.9965, AKo:0.0014, A4s:0.0001, A5s:0.0001, A7s:0.0002, A9s:0.0002, ATs:0.0001, AQs:0.0002, AKs:0.1424, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0002, 82s:0.0008, 86s:0.0001, 92s:0.0008, 96s:0.0001, 99:0.0001, J8s:0.0002, Q3s:0.0001, Q5s:0.0001, K3s:0.0002, K7s:0.0001, KTs:0.0001, KJs:0.0001, KK:0.0013, AKo:0.008, A2s:0.0001, A3s:0.0001, A4s:0.0005, A6s:0.0002, A7s:0.0006, AQs:0.0062, AKs:0.0019, AA:0.1563"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0405, 44:0.0011, A4o:0.0203, A5o:0.0585, 63s:0.0014, 64s:0.0006, 65s:0.0007, 66:0.0022, A6o:0.0055, 75s:0.0007, 77:0.0007, A7o:0.0111, 82s:0.0004, 86s:0.002, 87s:0.0015, T8o:0.0002, 92s:0.0003, 99:0.0001, T4s:0.0007, T8s:0.0099, T9s:0.0039, TT:0.0011, ATo:0.0302, J4s:0.0002, JTs:0.0091, AJo:0.0142, Q4s:0.0021, Q6s:0.0011, Q9s:0.0007, QTs:0.0001, QQ:0.0037, AQo:0.0188, KTs:0.0024, KJs:0.005, KQs:0.0005, KK:0.4034, AKo:0.4902, A2s:0.1172, A3s:0.1845, A4s:0.054, A5s:0.2077, A6s:0.1178, A7s:0.1747, A8s:0.1128, A9s:0.1246, ATs:0.0699, AJs:0.0852, AQs:0.023, AKs:0.513, AA:0.8436"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5389, A2o:0.0176, 33:0.7923, 53o:0.062, A3o:0.0481, 42s:0.1061, 43s:0.1927, 44:0.9326, 54o:0.0839, 64o:0.0295, 84o:0.0009, A4o:0.0503, 52s:0.0508, 53s:0.1591, 54s:0.6645, 55:0.9653, 65o:0.2068, 75o:0.0677, 85o:0.0135, A5o:0.0813, 63s:0.116, 64s:0.4198, 65s:0.8415, 66:0.9022, 76o:0.1123, 86o:0.0136, 96o:0.0016, A6o:0.0691, 72s:0.0009, 73s:0.037, 74s:0.1511, 75s:0.2729, 76s:0.4843, 77:0.7436, 87o:0.154, 97o:0.0814, T7o:0.0013, J7o:0.0008, A7o:0.0905, 82s:0.0735, 83s:0.0007, 85s:0.1558, 86s:0.3562, 87s:0.8338, 88:0.7455, T8o:0.0141, A8o:0.0939, 94s:0.0018, 95s:0.1187, 96s:0.2742, 97s:0.7002, 98s:0.32, 99:0.6461, T9o:0.0675, J9o:0.0308, Q9o:0.039, A9o:0.042, T4s:0.0108, T5s:0.0008, T6s:0.1476, T7s:0.1509, T8s:0.3358, T9s:0.5187, TT:0.8303, JTo:0.0108, QTo:0.0105, ATo:0.176, J2s:0.0201, J3s:0.0304, J4s:0.0931, J5s:0.0003, J6s:0.096, J7s:0.049, J8s:0.164, J9s:0.1349, JTs:0.5389, JJ:0.7201, QJo:0.0287, KJo:0.0087, AJo:0.6347, Q2s:0.1439, Q3s:0.0315, Q4s:0.0128, Q5s:0.0249, Q6s:0.0011, Q7s:0.0754, Q8s:0.1182, Q9s:0.1823, QTs:0.5589, QJs:0.3306, QQ:0.5444, KQo:0.0677, AQo:0.5938, K2s:0.0008, K4s:0.1476, K5s:0.0263, K6s:0.1474, K7s:0.1299, K9s:0.0178, KTs:0.2238, KJs:0.2154, KQs:0.3764, KK:0.5774, AKo:0.5078, A2s:0.296, A3s:0.3588, A4s:0.5475, A5s:0.7064, A6s:0.57, A7s:0.488, A8s:0.6943, A9s:0.7698, ATs:0.4806, AJs:0.655, AQs:0.5567, AKs:0.5609, AA:0.2297"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1003, 32o:0.0007, 42o:0.0009, 52o:0.0006, 62o:0.0003, 82o:0.0005, 92o:0.0004, T2o:0.0006, J2o:0.0004, A2o:0.1111, 32s:0.0146, 33:0.1435, 43o:0.0008, 53o:0.0007, 63o:0.0003, 73o:0.0002, 93o:0.0005, T3o:0.0003, K3o:0.0002, A3o:0.111, 42s:0.0005, 43s:0.0186, 44:0.0238, 54o:0.0017, 64o:0.0037, 74o:0.001, 84o:0.0009, 94o:0.0005, T4o:0.0006, J4o:0.0003, Q4o:0.0003, A4o:0.1235, 52s:0.0661, 53s:0.0234, 54s:0.0716, 55:0.0142, 65o:0.0048, 75o:0.0011, 85o:0.001, 95o:0.0006, T5o:0.0003, J5o:0.0017, A5o:0.1301, 62s:0.0012, 63s:0.0067, 64s:0.0101, 65s:0.0848, 66:0.0712, 76o:0.0183, 86o:0.001, 96o:0.0009, T6o:0.0012, J6o:0.0006, Q6o:0.0003, K6o:0.0004, A6o:0.1138, 72s:0.0015, 73s:0.0038, 74s:0.0059, 75s:0.0989, 76s:0.1338, 77:0.2163, 87o:0.0024, 97o:0.0012, T7o:0.0029, J7o:0.0007, A7o:0.0691, 82s:0.0004, 83s:0.0032, 84s:0.0006, 85s:0.0425, 86s:0.0533, 87s:0.0927, 88:0.1517, 98o:0.0009, T8o:0.001, J8o:0.0008, Q8o:0.0003, A8o:0.1007, 92s:0.0002, 93s:0.001, 94s:0.0009, 95s:0.007, 96s:0.0024, 97s:0.0307, 98s:0.0667, 99:0.2987, T9o:0.0014, J9o:0.0009, Q9o:0.0011, K9o:0.0004, A9o:0.1484, T2s:0.0005, T3s:0.0028, T4s:0.001, T5s:0.0022, T6s:0.0056, T7s:0.018, T8s:0.0067, T9s:0.0478, TT:0.1303, JTo:0.005, QTo:0.0038, KTo:0.0024, ATo:0.2798, J2s:0.0019, J3s:0.0246, J4s:0.0008, J5s:0.0094, J6s:0.0011, J7s:0.0159, J8s:0.0083, J9s:0.0371, JTs:0.0156, JJ:0.2732, QJo:0.0075, KJo:0.0018, AJo:0.3428, Q2s:0.0014, Q3s:0.0039, Q4s:0.014, Q5s:0.0033, Q6s:0.0055, Q7s:0.0019, Q8s:0.036, Q9s:0.02, QTs:0.0092, QJs:0.0439, QQ:0.4494, KQo:0.0028, AQo:0.3926, K2s:0.0008, K3s:0.0014, K4s:0.0013, K5s:0.0027, K6s:0.0043, K7s:0.0025, K8s:0.002, K9s:0.004, KTs:0.01, KJs:0.0079, KQs:0.007, KK:0.4226, AKo:0.4922, A2s:0.3312, A3s:0.3588, A4s:0.2309, A5s:0.2693, A6s:0.2032, A7s:0.2555, A8s:0.2398, A9s:0.2062, ATs:0.4072, AJs:0.3433, AQs:0.4237, AKs:0.4391, AA:0.7703"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, TT:0.0012, ATo:0.0001, JJ:0.0015, QQ:0.0007, K6s:0.0001, K7s:0.0003, KTs:0.0001, KQs:0.0001, KK:0.9998, AKo:0.0001, A5s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0001, AQs:0.0005, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0002, 99:0.0008, TT:0.0012, JTs:0.0001, JJ:0.0022, QQ:0.0102, KK, AKo:0.9509, AQs:0.0004, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|HJ:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7204, A2o:0.0157, 32s:0.0007, 33:0.8869, A3o:0.0215, 42s:0.0792, 43s:0.8151, 44:0.911, 54o:0.0748, 64o:0.0169, A4o:0.0088, 52s:0.1021, 53s:0.4575, 54s:0.9359, 55:0.9541, 65o:0.0973, 75o:0.0032, A5o:0.0302, 63s:0.2828, 64s:0.9142, 65s:0.8363, 66:0.9764, 76o:0.097, 86o:0.0125, A6o:0.0124, 73s:0.0049, 74s:0.1936, 75s:0.9116, 76s:0.8907, 77:0.9015, 87o:0.0083, A7o:0.0094, 84s:0.0078, 85s:0.4947, 86s:0.937, 87s:0.7441, 88:0.9633, 98o:0.0129, A8o:0.0788, 93s:0.0028, 95s:0.0253, 96s:0.4547, 97s:0.7527, 98s:0.8752, 99:0.9506, A9o:0.0352, T2s:0.0006, T5s:0.0085, T6s:0.0316, T7s:0.5933, T8s:0.921, T9s:0.9104, TT:0.634, JTo:0.0113, QTo:0.0027, ATo:0.2756, J2s:0.0001, J7s:0.0817, J8s:0.1204, J9s:0.5031, JTs:0.9014, JJ:0.8548, AJo:0.5498, Q2s:0.0005, Q3s:0.0037, Q4s:0.0093, Q5s:0.0239, Q6s:0.0215, Q7s:0.0014, Q8s:0.0893, Q9s:0.0694, QTs:0.8385, QJs:0.5092, QQ:0.871, AQo:0.1698, K2s:0.0093, K3s:0.024, K4s:0.1204, K5s:0.0763, K6s:0.2249, K7s:0.204, K9s:0.06, KTs:0.8699, KJs:0.5077, KQs:0.2254, KK:0.2219, AKo:0.0502, A2s:0.1118, A3s:0.0676, A4s:0.1274, A5s:0.0813, A6s:0.1368, A7s:0.1075, A8s:0.1849, A9s:0.4582, ATs:0.4085, AJs:0.2679, AQs:0.2985, AKs:0.0161, AA:0.3569"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2107, A2o:0.0347, 32s:0.0005, 33:0.0916, 63o:0.0001, A3o:0.1633, 42s:0.0004, 43s:0.0005, 44:0.08, 54o:0.0005, 64o:0.001, A4o:0.1178, 52s:0.009, 53s:0.0164, 54s:0.0486, 55:0.0431, 65o:0.0012, 75o:0.0005, 85o:0.0002, A5o:0.1022, 62s:0.0012, 63s:0.0064, 64s:0.0495, 65s:0.1609, 66:0.0214, 76o:0.001, 86o:0.0008, A6o:0.0193, 73s:0.0023, 74s:0.0269, 75s:0.0277, 76s:0.0935, 77:0.0954, 87o:0.0007, 97o:0.0001, A7o:0.0424, 82s:0.0007, 83s:0.0001, 84s:0.0003, 85s:0.0305, 86s:0.011, 87s:0.2426, 88:0.0363, 98o:0.0004, T8o:0.0001, A8o:0.0354, 94s:0.0001, 95s:0.0006, 96s:0.0004, 97s:0.0217, 98s:0.1151, 99:0.0486, T9o:0.0002, J9o:0.0002, Q9o:0.0001, A9o:0.0209, T4s:0.0006, T5s:0.0002, T6s:0.0031, T7s:0.041, T8s:0.014, T9s:0.0627, TT:0.3657, JTo:0.0003, ATo:0.2244, J2s:0.0002, J3s:0.0001, J4s:0.0001, J5s:0.0004, J7s:0.001, J8s:0.0016, J9s:0.0011, JTs:0.0304, JJ:0.1443, AJo:0.4432, Q3s:0.0006, Q5s:0.0002, Q6s:0.0004, Q8s:0.0007, Q9s:0.0032, QTs:0.0014, QJs:0.0053, QQ:0.1289, KQo:0.0001, AQo:0.83, K2s:0.0001, K3s:0.0004, K4s:0.0004, K5s:0.0002, K6s:0.0121, K7s:0.0185, K9s:0.0071, KTs:0.0539, KJs:0.0098, KQs:0.015, KK:0.778, AKo:0.9498, A2s:0.7976, A3s:0.9296, A4s:0.8679, A5s:0.9164, A6s:0.8556, A7s:0.8803, A8s:0.8072, A9s:0.5355, ATs:0.5907, AJs:0.732, AQs:0.7014, AKs:0.9839, AA:0.6431"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|HJ:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0567, JJ, QQ, KK, AKo:0.9916, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, T4s:0.0001, T5s:0.0001, T8s:0.0001, T9s:0.0001, TT:0.0002, J9s:0.0005, JJ:0.0003, QQ:0.0001, K4s:0.0001, KTs:0.0001, KJs:0.0001, KK:0.1551, AKo:0.039, A3s:0.0002, A4s:0.0005, A9s:0.0001, AJs:0.0001, AQs:0.1841, AKs:0.2948, AA:0.2488"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0054, 32s:0.0004, A3o:0.0979, 44:0.009, A4o:0.0596, A5o:0.0004, 65s:0.0381, 66:0.0037, A6o:0.0023, 77:0.0206, A7o:0.0391, 86s:0.012, 97s:0.001, 98s:0.0047, 99:0.0328, A9o:0.0045, T5s:0.0001, T8s:0.0003, TT:0.0008, ATo:0.0041, J9s:0.0256, JJ:0.0336, AJo:0.0072, Q2s:0.0001, Q6s:0.0032, Q8s:0.0263, QJs:0.0002, QQ:0.2169, AQo:0.0033, K4s:0.0013, K8s:0.0056, KTs:0.0001, KJs:0.0002, KQs:0.0091, KK:0.3127, AKo:0.5229, A2s:0.1188, A3s:0.0279, A4s:0.0479, A5s:0.3815, A6s:0.3663, A7s:0.1347, A8s:0.2369, A9s:0.1335, ATs:0.0351, AJs:0.1945, AQs:0.5574, AKs:0.6775, AA:0.7512"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3143, A2o:0.0113, 32s:0.0996, 33:0.3615, A3o:0.0102, 42s:0.0808, 43s:0.2525, 44:0.4345, 54o:0.2105, 64o:0.1252, A4o:0.0715, 52s:0.0248, 53s:0.3546, 54s:0.3063, 55:0.4915, 65o:0.1585, 75o:0.1515, A5o:0.1379, 62s:0.004, 63s:0.2336, 64s:0.3562, 65s:0.6009, 66:0.9012, 76o:0.18, 86o:0.0609, A6o:0.1518, 73s:0.1727, 74s:0.3086, 75s:0.4271, 76s:0.4265, 77:0.7095, 87o:0.1191, 97o:0.1491, A7o:0.158, 82s:0.0005, 84s:0.1126, 85s:0.3137, 86s:0.3621, 87s:0.317, 88:0.8858, 98o:0.1287, T8o:0.1493, A8o:0.2518, 93s:0.038, 95s:0.2337, 96s:0.3285, 97s:0.1754, 98s:0.294, 99:0.5601, T9o:0.147, A9o:0.318, T2s:0.0031, T4s:0.1533, T6s:0.0548, T7s:0.135, T8s:0.3383, T9s:0.446, TT:0.4791, JTo:0.078, ATo:0.3975, J2s:0.0166, J7s:0.2279, J8s:0.3023, J9s:0.4981, JTs:0.3546, JJ:0.5871, QJo:0.1466, KJo:0.0005, AJo:0.3928, Q2s:0.0006, Q4s:0.0001, Q5s:0.0048, Q6s:0.1903, Q8s:0.1527, Q9s:0.2321, QTs:0.3675, QJs:0.5156, QQ:0.5987, AQo:0.7605, K4s:0.0001, K5s:0.0266, K6s:0.0463, K8s:0.2296, KTs:0.1519, KJs:0.278, KQs:0.0742, KK:0.3063, AKo:0.1779, A2s:0.2172, A3s:0.3133, A4s:0.4093, A5s:0.3637, A6s:0.5465, A7s:0.3178, A8s:0.4098, A9s:0.5867, ATs:0.758, AJs:0.6929, AQs:0.6948, AKs:0.171, AA:0.0261"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0862, 42o:0.0001, 52o:0.0008, 62o:0.0001, 92o:0.0005, K2o:0.0005, A2o:0.0106, 32s:0.001, 33:0.1811, 43o:0.0007, 53o:0.0006, 63o:0.0011, 83o:0.0005, 93o:0.0003, T3o:0.0004, Q3o:0.0001, K3o:0.0007, A3o:0.0488, 42s:0.0015, 43s:0.0027, 44:0.1459, 54o:0.0009, 64o:0.0012, 74o:0.0009, 84o:0.0007, T4o:0.0003, J4o:0.0003, K4o:0.0009, A4o:0.074, 52s:0.0004, 53s:0.0017, 54s:0.034, 55:0.2568, 65o:0.0011, 75o:0.0013, 85o:0.0006, 95o:0.0003, J5o:0.0004, Q5o:0.0002, K5o:0.0004, A5o:0.077, 62s:0.0011, 63s:0.0014, 64s:0.0011, 65s:0.0012, 66:0.0382, 76o:0.0017, 86o:0.0011, 96o:0.0008, T6o:0.0014, Q6o:0.0006, K6o:0.0011, A6o:0.0098, 72s:0.0007, 73s:0.0018, 74s:0.0009, 75s:0.0141, 76s:0.0149, 77:0.035, 87o:0.0014, 97o:0.0015, T7o:0.0006, J7o:0.0004, Q7o:0.0003, K7o:0.0004, A7o:0.0263, 82s:0.0023, 83s:0.0012, 84s:0.0015, 85s:0.0118, 86s:0.003, 87s:0.0171, 88:0.0513, 98o:0.0015, T8o:0.0008, J8o:0.0006, Q8o:0.001, K8o:0.0013, A8o:0.0184, 92s:0.0008, 93s:0.0017, 94s:0.0019, 95s:0.0003, 96s:0.002, 97s:0.0032, 98s:0.0023, 99:0.2376, T9o:0.0014, J9o:0.001, Q9o:0.001, K9o:0.001, A9o:0.0117, T2s:0.0013, T3s:0.0014, T4s:0.0021, T5s:0.0013, T6s:0.0011, T7s:0.0018, T8s:0.0022, T9s:0.0285, TT:0.299, JTo:0.0009, QTo:0.0013, KTo:0.0017, ATo:0.0553, J2s:0.0006, J3s:0.001, J4s:0.0008, J5s:0.0015, J6s:0.0011, J7s:0.0019, J8s:0.0024, J9s:0.0065, JTs:0.0183, JJ:0.3927, QJo:0.002, KJo:0.0015, AJo:0.2863, Q2s:0.0025, Q3s:0.0012, Q4s:0.0002, Q6s:0.0015, Q7s:0.0013, Q8s:0.0021, Q9s:0.0016, QTs:0.0041, QJs:0.0045, QQ:0.4007, KQo:0.0007, AQo:0.2212, K2s:0.0013, K3s:0.0026, K4s:0.0018, K5s:0.0013, K6s:0.0017, K7s:0.0013, K8s:0.0015, K9s:0.0016, KTs:0.003, KJs:0.0028, KQs:0.0054, KK:0.6894, AKo:0.8143, A2s:0.3298, A3s:0.3558, A4s:0.3974, A5s:0.3334, A6s:0.2704, A7s:0.2399, A8s:0.2928, A9s:0.2709, ATs:0.2368, AJs:0.2984, AQs:0.2985, AKs:0.829, AA:0.9739"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 93o:0.0001, A3o:0.0001, 53s:0.0001, A5o:0.0001, 62s:0.0001, 64s:0.0006, 66:0.0012, 72s:0.0002, 74s:0.0006, 75s:0.0001, 76s:0.1544, 77:0.0004, 85s:0.0003, 86s:0.0002, 87s:0.0467, 88:0.0173, 92s:0.0002, 93s:0.1289, 95s:0.0004, 96s:0.0015, 98s:0.0001, T3s:0.0001, T4s:0.0005, T5s:0.0001, TT:0.0196, J2s:0.0001, J4s:0.0001, J5s:0.0004, J6s:0.0004, J8s:0.0516, JTs:0.001, JJ:0.0484, AJo:0.0025, Q3s:0.0126, Q4s:0.0006, Q5s:0.079, Q6s:0.0002, Q9s:0.0882, QTs:0.0001, QQ:0.1942, K2s:0.0009, K3s:0.0005, K4s:0.0148, K6s:0.0001, K7s:0.0003, K9s:0.0412, KTs:0.0003, KJs:0.0001, KQs:0.1374, KK:0.4693, AKo:0.2561, A2s:0.0063, A3s:0.0001, A4s:0.001, A5s:0.1778, A6s:0.0001, A7s:0.0006, A8s:0.2288, A9s:0.5841, ATs:0.0359, AJs:0.2547, AQs:0.6373, AKs:0.0405, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 99:0.0001, T2s:0.0001, J2s:0.0001, QQ:0.0001, AQo:0.0001, K9s:0.0001, KTs:0.0002, KJs:0.0001, KK:0.9909, AKo:0.0016, A3s:0.0001, A8s:0.0001, AQs:0.0001, AKs:0.028, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, JJ:0.0007, KK, AKo:0.9291, A4s:0.0001, A8s:0.0001, AKs:0.9967, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 32s:0.0003, 43s:0.0002, A4o:0.0003, 53s:0.0004, 54s:0.0007, 62s:0.0005, 64s:0.0001, 96o:0.0001, 72s:0.0009, 74s:0.0008, 75s:0.0001, 76s:0.0002, 87o:0.0003, 85s:0.0001, 86s:0.0002, 88:0.0003, Q8o:0.0001, 94s:0.0001, 95s:0.0003, 98s:0.0001, J9o:0.0001, Q9o:0.0001, T3s:0.0006, T6s:0.0008, T8s:0.0004, KTo:0.0001, J2s:0.0001, J3s:0.0007, J4s:0.0023, J6s:0.0004, J8s:0.0001, J9s:0.0007, JTs:0.0005, JJ:0.0003, Q3s:0.0001, Q4s:0.0001, Q5s:0.0001, Q7s:0.0001, Q8s:0.0001, QTs:0.0009, QJs:0.0002, QQ:0.004, KQo:0.0001, AQo:0.0003, K2s:0.0001, K3s:0.0004, K5s:0.0004, K6s:0.0011, K9s:0.0001, KJs:0.0001, KK:0.9988, AKo:0.0024, A3s:0.0003, A4s:0.0006, A5s:0.0007, A6s:0.0001, A7s:0.0001, A8s:0.0003, ATs:0.0002, AJs:0.0009, AQs:0.0003, AKs:0.0221, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0054, QQ, KK, AKo:0.2403, AQs:0.0001, AKs:0.9989, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0604, JJ:0.3349, QQ, KK, AKo:0.6466, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0578, 65s:0.0049, 66:0.0005, 76s:0.0086, 82s:0.0001, 88:0.1407, 97s:0.0006, 98s:0.0002, 99:0.0833, T8s:0.0338, ATo:0.0019, J7s:0.0307, JJ:0.0261, QQ:0.4296, AQo:0.4706, K4s:0.0002, K5s:0.0087, K6s:0.001, K8s:0.0003, KQs:0.0009, KK:0.2771, A4s:0.0001, A5s:0.0484, A6s:0.0573, A7s:0.0641, A8s:0.0471, A9s:0.0281, ATs:0.2096, AJs:0.1123, AQs:0.3152, AKs:0.1494, AA:0.0077"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.1416, 32s:0.0001, A3o:0.0469, 74o:0.0001, K4o:0.0004, A4o:0.0808, 55:0.007, K5o:0.0005, A5o:0.071, 62s:0.0001, 65s:0.0011, 66:0.0029, K6o:0.0001, A6o:0.0748, 73s:0.0001, 76s:0.0004, A7o:0.0038, 88:0.0009, K8o:0.0003, A8o:0.0357, 97s:0.0008, 98s:0.0003, A9o:0.0587, T5s:0.0001, T8s:0.0025, ATo:0.0012, J6s:0.0001, J8s:0.0008, J9s:0.0003, JTs:0.0001, JJ:0.0056, KJo:0.0001, AJo:0.159, Q2s:0.0001, QQ:0.1114, AQo:0.248, K3s:0.0021, K4s:0.0009, K5s:0.0041, K6s:0.0027, K8s:0.0036, K9s:0.001, KTs:0.0008, KJs:0.0003, KQs:0.0014, KK:0.0341, AKo:0.1198, A2s:0.0261, A3s:0.0485, A4s:0.064, A5s:0.0125, A6s:0.1351, A7s:0.0975, A8s:0.0437, ATs:0.0176, AJs:0.0219, AQs:0.2964, AKs:0.255, AA:0.9923"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.018, A2o:0.269, 32s:0.0002, 33:0.002, A3o:0.0019, 42s:0.0001, 43s:0.0041, 44:0.0012, A4o:0.0342, 53s:0.0001, 55:0.0045, A5o:0.0938, 64s:0.031, 65s:0.0472, 66:0.0023, A6o:0.048, 72s:0.0021, 73s:0.0002, 76s:0.014, 77:0.0189, A7o:0.0011, 84s:0.0003, 86s:0.0007, 87s:0.0072, 88:0.1825, A8o:0.124, 97s:0.0011, 98s:0.0186, 99:0.0492, K9o:0.0004, A9o:0.0238, T3s:0.0009, T5s:0.0019, T6s:0.0003, T7s:0.0029, T8s:0.0155, ATo:0.021, J3s:0.0001, J5s:0.0009, J6s:0.0005, J7s:0.0004, J8s:0.0007, J9s:0.0128, JTs:0.0003, JJ:0.0017, AJo:0.0582, Q6s:0.0001, Q7s:0.0007, Q9s:0.0022, QQ:0.2097, AQo:0.0025, K2s:0.0027, K3s:0.0157, K4s:0.0003, K5s:0.0092, K6s:0.0153, K8s:0.0026, K9s:0.0023, KTs:0.0307, KJs:0.0097, KQs:0.0235, KK:0.6887, AKo:0.8802, A2s:0.6884, A3s:0.3227, A4s:0.6061, A5s:0.6666, A6s:0.5255, A7s:0.3338, A8s:0.5984, A9s:0.5603, ATs:0.7396, AJs:0.5717, AQs:0.2888, AKs:0.5955"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0327, 44:0.0855, 53s:0.0048, 54s:0.395, 55:0.5119, 64s:0.0209, 65s:0.5994, 66:0.4248, 76o:0.0038, 75s:0.065, 76s:0.5568, 77:0.4363, A7o:0.0007, 85s:0.014, 86s:0.008, 87s:0.4614, 88:0.2142, 97s:0.1473, 98s:0.3667, 99:0.0339, T8s:0.0389, T9s:0.1058, TT:0.1906, J9s:0.0106, JTs:0.0019, JJ:0.5923, AJo:0.0265, QTs:0.001, QJs:0.0044, QQ:0.8501, AQo:0.697, K3s:0.0069, K4s:0.0001, K6s:0.1291, K7s:0.027, K8s:0.0001, K9s:0.0195, KTs:0.2964, KJs:0.1021, KQs:0.274, KK:0.8401, AKo:0.0001, A2s:0.0244, A3s:0.0598, A4s:0.1821, A5s:0.2541, A6s:0.0614, A7s:0.1277, A8s:0.2484, A9s:0.0637, ATs:0.476, AJs:0.2423, AQs:0.9907, AKs:0.3418"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "98s:0.0001, KTo:0.0001, JTs:0.0001, Q6s:0.0001, Q7s:0.0001, QQ:0.0003, K2s:0.0001, K4s:0.0001, KK:0.0126, A9s:0.0001, AJs:0.0001, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0018, A2o:0.0005, 33:0.0013, A3o:0.0027, 42s:0.0001, 44:0.0029, A4o:0.0084, 55:0.0031, A5o:0.0087, 63s:0.0006, 64s:0.0001, 65s:0.0206, 66:0.0157, K6o:0.0002, A6o:0.0233, 75s:0.0001, 76s:0.0016, 77:0.03, A7o:0.0019, 84s:0.0001, 85s:0.0009, 86s:0.0003, 87s:0.0075, 88:0.0889, A8o:0.0348, 96s:0.0002, 98s:0.016, 99:0.0778, TT:0.0233, ATo:0.014, J9s:0.0006, JJ:0.3178, KJo:0.0004, AJo:0.0959, Q4s:0.0002, QTs:0.001, QJs:0.0197, QQ:0.149, AQo:0.0867, K2s:0.0027, K3s:0.0012, K4s:0.0027, K5s:0.0001, K6s:0.0013, K7s:0.0119, K9s:0.0161, KTs:0.0176, KJs:0.0008, KQs:0.0231, KK:0.1473, AKo:0.9998, A2s:0.6877, A3s:0.4073, A4s:0.6788, A5s:0.6864, A6s:0.1315, A7s:0.6416, A8s:0.6207, A9s:0.3301, ATs:0.2228, AJs:0.679, AQs:0.0075, AKs:0.6582"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0365, JJ:0.1743, QQ:0.9999, KK, AKo:0.11, AQs:0.0002, AKs:0.9989, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0683, JJ:0.3701, QQ, KK, AKo:0.1498, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, JJ:0.0143, QQ:0.9896, KK, AKo:0.0001, A5s:0.0002, ATs:0.0001, AJs:0.0002, AQs:0.0001, AKs:0.0032, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0262, 54s:0.0769, 65s:0.0265, 66:0.0732, 76s:0.0258, 77:0.0001, 88:0.0752, 98s:0.0007, TT:0.0001, JJ:0.077, QJs:0.0001, QQ:0.4174, AQo:0.0773, K9s:0.0091, KJs:0.0889, KK:0.2032, AKo:0.0349, A3s:0.0135, A4s:0.0281, A5s:0.0061, A8s:0.0738, A9s:0.0244, ATs:0.0001, AJs:0.0734, AQs:0.6728, AKs:0.0184, AA:0.0057"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0012, 32s:0.0008, K3o:0.0004, A3o:0.0042, 42s:0.0006, A4o:0.0076, 53s:0.0006, 54s:0.0006, 55:0.0033, A5o:0.099, 62s:0.0013, 65s:0.0003, Q6o:0.0001, K6o:0.0009, A6o:0.0009, 75s:0.0002, 77:0.0002, J7o:0.0003, A7o:0.0075, 83s:0.0071, 86s:0.0004, 87s:0.0003, 88:0.0043, K8o:0.0004, A8o:0.0111, 95s:0.0015, 98s:0.003, 99:0.0003, K9o:0.0009, A9o:0.0003, T2s:0.0002, T4s:0.0009, T7s:0.0012, T8s:0.0007, T9s:0.0216, TT:0.0032, ATo:0.0113, J5s:0.0006, J7s:0.0006, JTs:0.0002, JJ:0.0158, AJo:0.0063, Q5s:0.0001, QQ:0.0549, AQo:0.3106, K3s:0.0065, K4s:0.0028, K5s:0.0035, K6s:0.0115, K8s:0.0021, K9s:0.0006, KTs:0.0081, KJs:0.0015, KQs:0.0129, KK:0.002, AKo:0.0306, A2s:0.1277, A3s:0.0266, A4s:0.0626, A5s:0.1699, A6s:0.1039, A7s:0.3191, A8s:0.0763, A9s:0.3452, ATs:0.0386, AJs:0.002, AQs:0.0492, AKs:0.0997, AA:0.9943"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0106, 33:0.0053, A3o:0.0008, 42s:0.0023, Q4o:0.0004, 53s:0.008, 54s:0.0006, 55:0.0454, A5o:0.0001, 65s:0.0002, 66:0.0707, 75s:0.0239, 76s:0.013, A7o:0.0001, 83s:0.0003, 84s:0.0017, 86s:0.0043, 87s:0.0006, 88:0.086, 98s:0.0188, 99:0.0066, K9o:0.0008, A9o:0.0024, T2s:0.0001, T4s:0.0112, T7s:0.0012, T8s:0.0185, TT:0.0376, JTs:0.0097, JJ:0.3828, Q2s:0.001, Q5s:0.0005, Q6s:0.0018, Q9s:0.0077, QJs:0.0038, QQ:0.3074, AQo:0.009, K2s:0.042, K3s:0.0132, K4s:0.0184, K5s:0.0205, K7s:0.0133, K8s:0.0175, K9s:0.1094, KTs:0.0814, KJs:0.2606, KQs:0.1048, KK:0.7948, AKo:0.9345, A2s:0.1928, A3s:0.5994, A4s:0.6391, A5s:0.5592, A6s:0.5471, A7s:0.3384, A8s:0.6624, A9s:0.2805, ATs:0.749, AJs:0.6425, AQs:0.2521, AKs:0.8818"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0308, 54s:0.4766, 55:0.2715, 64s:0.0002, 65s:0.7478, 66:0.3031, 75s:0.0083, 76s:0.5668, 77:0.0464, 86s:0.0002, 88:0.2034, 98s:0.1587, 99:0.1606, T8s:0.0899, T9s:0.0097, TT:0.0057, JTs:0.0043, JJ:0.0151, QTs:0.0003, QQ:0.6568, KQo:0.0004, AQo:0.2942, K3s:0.0406, K4s:0.0995, K6s:0.1464, K8s:0.0436, K9s:0.0665, KTs:0.1816, KJs:0.0029, KQs:0.1322, KK:0.1344, A3s:0.0084, A4s:0.0109, A5s:0.0035, A7s:0.012, A8s:0.0266, A9s:0.0268, ATs:0.0781, AJs:0.2536, AQs:0.9678, AKs:0.0004"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K4s:0.0007, K5s:0.0026, K8s:0.0014, K9s:0.0003, KTs:0.0004, KJs:0.0001, KQs:0.0007, KK:0.3855, AKo:0.001, A4s:0.0001, A5s:0.0004, A7s:0.0003, A9s:0.0002, AJs:0.0005, AKs:0.0156, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0134, 44:0.0017, 55:0.0246, A5o:0.0612, 66:0.074, A6o:0.0001, 76s:0.0002, 77:0.0002, 82s:0.0001, 85s:0.001, 87s:0.0004, 88:0.0857, 92s:0.0001, 94s:0.0001, 99:0.0331, A9o:0.0008, T2s:0.0001, T6s:0.0001, T8s:0.0002, TT:0.0371, JTs:0.0005, JJ:0.6751, AJo:0.0081, QTs:0.0003, QQ:0.3011, AQo:0.0742, K3s:0.0002, K4s:0.0046, K5s:0.0222, K6s:0.0218, K7s:0.0009, K8s:0.0009, K9s:0.0229, KTs:0.0123, KJs:0.4769, KQs:0.0919, KK:0.4801, AKo:0.9989, A2s:0.4525, A3s:0.4859, A4s:0.5904, A5s:0.8307, A6s:0.6991, A7s:0.1092, A8s:0.8895, A9s:0.5193, ATs:0.5949, AJs:0.671, AQs:0.0322, AKs:0.984"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0028, A3o:0.0376, 84o:0.0002, K4o:0.0057, A4o:0.0002, 52s:0.0005, 62s:0.0003, 66:0.0004, A7o:0.2069, 82s:0.0002, 97s:0.0016, 99:0.0159, T3s:0.032, T9s:0.0001, TT:0.0047, KTo:0.0019, ATo:0.0085, J2s:0.0004, J3s:0.0003, J8s:0.0005, JTs:0.0003, JJ:0.0025, KJo:0.0046, Q3s:0.0014, QJs:0.0001, QQ:0.0135, AQo:0.0001, K3s:0.0019, K5s:0.014, K6s:0.0462, K7s:0.0143, K8s:0.0078, KJs:0.0228, KQs:0.0001, KK:0.05, AKo:0.1637, A2s:0.1701, A3s:0.1693, A5s:0.0003, A6s:0.087, A8s:0.1094, A9s:0.0002, ATs:0.1461, AJs:0.06, AQs:0.0138, AKs:0.0151, AA:0.9923"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0019, 62s:0.0002, 63s:0.0001, 76s:0.0006, A7o:0.1769, 87s:0.0026, 88:0.0636, 95s:0.0004, 97s:0.0023, 99:0.0149, T6s:0.0001, T9s:0.0001, JJ:0.0004, AJo:0.0003, Q2s:0.0014, Q3s:0.0024, QTs:0.0009, QQ:0.007, AQo:0.0002, K3s:0.0016, K5s:0.0215, K7s:0.0039, K8s:0.0664, KTs:0.0414, KQs:0.0002, KK:0.9499, AKo:0.8201, A2s:0.1533, A3s:0.6425, A5s:0.5003, A6s:0.1058, A7s:0.0047, A8s:0.1729, A9s:0.0985, ATs:0.5658, AJs:0.4394, AQs:0.4488, AKs:0.9849, AA:0.0077"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|BTN:CALL@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.6119, A2o:0.0452, 32s:0.0002, 33:0.817, 73o:0.0001, J3o:0.0001, Q3o:0.0001, K3o:0.0001, 42s:0.0005, 43s:0.0002, 44:0.5866, 54o:0.0183, 74o:0.0006, 84o:0.0003, T4o:0.0001, A4o:0.0344, 52s:0.2625, 53s:0.0383, 54s:0.0463, 55:0.8561, 75o:0.3544, 95o:0.0001, 62s:0.3297, 63s:0.0308, 64s:0.0046, 65s:0.3582, 66:0.872, 86o:0.0035, J6o:0.0001, A6o:0.0008, 72s:0.0038, 73s:0.0011, 74s:0.0003, 76s:0.0008, 77:0.9796, 82s:0.0002, 83s:0.0011, 84s:0.0001, 86s:0.008, 87s:0.0006, 88:0.9692, Q8o:0.0001, 92s:0.1057, 93s:0.0001, 95s:0.0003, 96s:0.0789, 97s:0.0002, 98s:0.0282, 99:0.5863, J9o:0.0001, A9o:0.0002, T2s:0.1249, T3s:0.0011, T4s:0.0399, T5s:0.001, T6s:0.0303, T8s:0.0425, TT:0.7403, JTo:0.0005, KTo:0.0001, ATo:0.0006, J2s:0.0527, J4s:0.0003, J5s:0.0015, J7s:0.0704, J8s:0.0012, J9s:0.099, JTs:0.0004, JJ:0.0025, AJo:0.0026, Q2s:0.0049, Q3s:0.0336, Q5s:0.2794, Q6s:0.0501, Q7s:0.0001, Q9s:0.3498, QTs:0.0011, QJs:0.0001, KQo:0.0446, AQo:0.0001, K2s:0.7799, K3s:0.2837, K4s:0.0002, K5s:0.2167, K6s:0.018, K7s:0.2342, K8s:0.0002, K9s:0.3207, KTs:0.721, KJs:0.0934, KQs:0.2693, KK:0.0003, AKo:0.0418, A2s:0.782, A3s:0.1408, A4s:0.5565, A5s:0.0929, A6s:0.7364, A7s:0.1763, A8s:0.1724, A9s:0.02, ATs:0.0957, AJs:0.215, AQs:0.1924, AA:0.0001"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.1133, Q2o:0.0408, A2o:0.0271, Q3o:0.1381, 42s:0.0085, J4o:0.0131, Q4o:0.0069, A4o:0.3097, 52s:0.0017, 55:0.0073, K5o:0.007, A5o:0.1451, Q6o:0.0044, A6o:0.0396, 72s:0.0003, 74s:0.0043, 75s:0.0109, 76s:0.0008, 77:0.0001, K7o:0.063, 82s:0.0075, 85s:0.0024, 86s:0.0001, 88:0.0108, J8o:0.0027, 97s:0.0008, 98s:0.0076, T9o:0.0002, Q9o:0.0084, A9o:0.0223, T4s:0.0002, TT:0.159, JTo:0.0011, ATo:0.0444, J2s:0.019, J4s:0.0536, J5s:0.0056, J7s:0.0002, J8s:0.0032, J9s:0.0571, JJ:0.0781, QJo:0.0465, KJo:0.0116, Q3s:0.1006, Q5s:0.145, Q6s:0.0063, Q7s:0.0695, Q8s:0.0711, QTs:0.1927, QJs:0.0003, QQ:0.7347, KQo:0.0778, AQo:0.9366, K3s:0.0609, K4s:0.0006, K5s:0.1271, K6s:0.0024, K7s:0.0242, KTs:0.0573, KJs:0.0008, KQs:0.2596, KK:0.1978, AKo:0.1722, A3s:0.5444, A4s:0.0095, A5s:0.0176, A7s:0.2109, A8s:0.0179, A9s:0.0013, ATs:0.0068, AJs:0.0069, AQs:0.035, AKs:0.0003, AA:0.9978"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0687, A2o:0.0108, 32s:0.0016, 33:0.0607, A3o:0.0023, 43s:0.0001, 44:0.0482, K4o:0.0069, A4o:0.0651, 52s:0.0141, 53s:0.0174, 55:0.0001, K5o:0.0042, A5o:0.0093, 75s:0.0052, 76s:0.0287, 77:0.012, K7o:0.004, 86s:0.0117, 87s:0.0145, 88:0.0001, 97s:0.0002, 98s:0.0003, 99:0.0105, Q9o:0.0008, K9o:0.0068, A9o:0.0021, T3s:0.0068, T4s:0.0002, T5s:0.0091, T6s:0.0013, TT:0.0039, QTo:0.0001, J2s:0.0006, J3s:0.0531, J4s:0.0339, J5s:0.0004, J9s:0.079, JTs:0.0572, JJ:0.9193, QJo:0.2656, KJo:0.4685, AJo:0.1286, Q2s:0.0925, Q3s:0.055, Q4s:0.2737, Q5s:0.1751, Q6s:0.0048, Q7s:0.0204, Q8s:0.1928, Q9s:0.1142, QTs:0.0384, QJs:0.528, QQ:0.2653, KQo:0.7185, AQo:0.059, K2s:0.0087, K3s:0.0877, K4s:0.0154, K5s:0.0504, K6s:0.0557, K7s:0.0974, K9s:0.0814, KTs:0.0069, KJs:0.5978, KQs:0.1436, KK:0.8018, AKo:0.7826, A4s:0.191, A5s:0.1313, A6s:0.0041, A7s:0.1533, A8s:0.117, A9s:0.0116, ATs:0.0413, AJs:0.7132, AQs:0.7669, AKs:0.9997, AA:0.0021"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25|BB:CALL@36.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, J3s:0.0001, J4s:0.0001, QTs:0.0001, QQ:0.0001, K9s:0.0001, KK:0.0002, A2s:0.0001, AQs:0.0001, AKs:0.0004, AA:0.9989"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "53s:0.0001, 54s:0.0002, 65s:0.0001, 98s:0.0001, 99:0.0001, T2s:0.0001, T7s:0.0002, T8s:0.0001, J9s:0.0001, JJ:0.0003, Q3s:0.0001, QJs:0.0001, QQ:0.0002, AQo:0.0001, K5s:0.0001, KJs:0.0001, KK:0.0014, A8s:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.0001, 32s:0.0001, 33:0.0007, 42s:0.0007, 43s:0.0019, A4o:0.0001, 53s:0.0004, K5o:0.0002, 63s:0.0002, 73s:0.0004, 76s:0.0007, Q7o:0.0001, A7o:0.0002, 82s:0.0007, 85s:0.0007, 87s:0.0004, T8o:0.0002, Q8o:0.0001, K8o:0.0001, A8o:0.0007, 92s:0.0005, 93s:0.0003, 96s:0.0003, 97s:0.0003, 99:0.0001, T7s:0.0027, T9s:0.0003, TT:0.0002, QTo:0.0001, ATo:0.0003, J5s:0.0002, J6s:0.0002, J7s:0.0003, J9s:0.0001, JTs:0.0001, JJ:0.0004, QJo:0.0001, KJo:0.0003, AJo:0.0001, Q6s:0.0019, Q7s:0.0002, Q8s:0.0003, QJs:0.0005, QQ:0.0005, K4s:0.0004, K6s:0.0016, K8s:0.0008, KTs:0.0002, KJs:0.0002, KQs:0.0024, KK:0.0534, AKo:0.0004, A2s:0.0003, A3s:0.0002, A4s:0.0001, A5s:0.0013, ATs:0.0004, AQs:0.0036, AKs:0.0003, AA:0.8625"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0001, 92o:0.0001, 53o:0.0001, T3o:0.0001, K3o:0.0001, 42s:0.0016, J4o:0.0001, K4o:0.0001, 52s:0.0001, 54s:0.0022, 65o:0.0001, A5o:0.0002, 62s:0.0009, 64s:0.0003, 66:0.0001, 76o:0.0001, 86o:0.0001, T6o:0.0001, 75s:0.0015, 76s:0.0002, 97o:0.0002, Q7o:0.0001, A7o:0.0001, 83s:0.0007, 87s:0.0006, 88:0.0002, K8o:0.0001, A8o:0.0015, 94s:0.0001, 95s:0.0004, 96s:0.0002, 97s:0.0028, T9o:0.0002, T4s:0.0009, T5s:0.0003, T9s:0.0013, TT:0.0005, J3s:0.0017, J5s:0.0009, J6s:0.0008, J9s:0.0023, AJo:0.0001, Q2s:0.0006, Q4s:0.0003, Q6s:0.0001, Q7s:0.0027, Q8s:0.0006, QTs:0.0006, QQ:0.0013, AQo:0.0002, K3s:0.0003, K5s:0.0047, K6s:0.0021, K7s:0.0008, K9s:0.0005, KTs:0.0004, KK:0.0146, A3s:0.0009, A4s:0.0008, A5s:0.0056, ATs:0.0006, AQs:0.0014, AKs:0.0031, AA:0.8768"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25|SB:CALL@36.75",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "92s:0.0001, TT:0.0002, J2s:0.0001, J3s:0.0001, QQ:0.0001, K9s:0.0003, KQs:0.0001, KK:0.0082, A3s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@37.25|SB:CALL@36.75",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32o:0.0001, J2o:0.0001, K2o:0.0001, 32s:0.0004, 73o:0.0001, 44:0.0002, 55:0.002, K5o:0.0002, 63s:0.0003, 64s:0.0008, 72s:0.0003, 74s:0.0002, 77:0.0028, 97o:0.0001, Q7o:0.0001, 82s:0.0045, 83s:0.0009, 85s:0.0002, 87s:0.0014, 88:0.0001, Q8o:0.0001, A8o:0.0002, 93s:0.0003, 95s:0.001, 96s:0.0017, 97s:0.0001, 98s:0.0025, 99:0.0012, A9o:0.0001, T3s:0.0004, T5s:0.0006, TT:0.0008, KTo:0.0001, ATo:0.0001, J2s:0.0001, J4s:0.0001, J7s:0.0002, J8s:0.0002, J9s:0.0001, Q2s:0.0008, Q3s:0.0011, Q4s:0.0007, Q5s:0.0001, Q6s:0.0002, Q7s:0.0004, Q8s:0.0003, QTs:0.0003, QJs:0.0008, QQ:0.0002, KQo:0.0001, K3s:0.0008, K4s:0.0001, K6s:0.0046, K7s:0.0003, K8s:0.0003, K9s:0.0002, KTs:0.0015, KK:0.107, AKo:0.0001, ATs:0.0001, AQs:0.0003, AKs:0.0012, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q3o:0.0001, 44:0.0001, 55:0.0001, 87s:0.001, 93s:0.0004, T3s:0.0001, TT:0.0002, J5s:0.0001, J6s:0.0003, JTs:0.0001, JJ:0.0002, AJo:0.0012, Q9s:0.0002, QQ:0.0014, AQo:0.0019, K2s:0.0002, K6s:0.0007, K8s:0.0003, KTs:0.0001, KJs:0.0001, KQs:0.0002, KK:0.2334, AKo:0.0718, A2s:0.0006, A4s:0.001, A5s:0.0001, A7s:0.0001, AJs:0.0002, AKs:0.0005, AA:0.0408"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0897, 33:0.0001, A3o:0.004, 42s:0.0001, 43s:0.0001, 44:0.0001, A4o:0.0044, A5o:0.0396, 62s:0.0004, 72s:0.0001, 74s:0.0001, 77:0.0016, A7o:0.0396, 87s:0.0677, 93s:0.0005, 94s:0.0001, 98s:0.0527, T2s:0.0005, T3s:0.0001, T6s:0.0001, T9s:0.0009, ATo:0.1179, J3s:0.0002, J5s:0.0001, J8s:0.0009, JTs:0.0428, JJ:0.0003, AJo:0.1356, Q3s:0.0009, Q4s:0.0002, Q9s:0.0032, QTs:0.0003, QJs:0.0001, QQ:0.0006, AQo:0.0872, K5s:0.0001, K6s:0.0001, K9s:0.0001, KTs:0.0001, KJs:0.0002, KK:0.5548, AKo:0.7405, A2s:0.1692, A3s:0.2072, A4s:0.2879, A5s:0.1375, A6s:0.2681, A7s:0.2999, A8s:0.0001, A9s:0.4232, ATs:0.4584, AJs:0.0005, AQs:0.3688, AKs:0.9949, AA:0.9589"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1203, 32s:0.0551, 33:0.3046, K3o:0.0001, A3o:0.0026, 43s:0.3481, 44:0.301, 54o:0.0418, 64o:0.0108, K4o:0.0045, A4o:0.0002, 52s:0.0084, 53s:0.672, 54s:0.7915, 55:0.6619, 65o:0.0514, 75o:0.0102, T5o:0.0009, A5o:0.0086, 62s:0.0049, 63s:0.1998, 64s:0.4158, 65s:0.5756, 66:0.9831, 76o:0.1136, K6o:0.0011, A6o:0.0004, 73s:0.0366, 74s:0.1074, 75s:0.3954, 76s:0.4905, 77:0.8154, 87o:0.0218, 97o:0.0042, T7o:0.0025, K7o:0.0084, 82s:0.0162, 83s:0.0055, 84s:0.004, 85s:0.4765, 86s:0.8305, 87s:0.8583, 88:0.8427, 98o:0.0002, T8o:0.0099, 93s:0.0231, 94s:0.0223, 95s:0.021, 96s:0.0443, 97s:0.408, 98s:0.8634, 99:0.4101, T9o:0.0108, A9o:0.0072, T3s:0.0076, T6s:0.1349, T7s:0.1959, T8s:0.3769, T9s:0.7852, TT:0.8862, JTo:0.0525, QTo:0.0134, KTo:0.0338, ATo:0.0002, J2s:0.0005, J4s:0.0171, J5s:0.0005, J7s:0.0289, J8s:0.2007, J9s:0.3912, JTs:0.2621, JJ:0.6756, KJo:0.0032, AJo:0.0037, Q3s:0.0026, Q5s:0.0045, Q6s:0.0045, Q8s:0.0007, Q9s:0.0299, QTs:0.072, QJs:0.0231, QQ:0.9944, AQo:0.9277, K2s:0.088, K3s:0.0045, K4s:0.1026, K5s:0.2085, K6s:0.0763, K7s:0.0146, K8s:0.0518, K9s:0.1878, KTs:0.6473, KJs:0.4624, KQs:0.1614, KK:0.8718, AKo:0.5894, A2s:0.1986, A3s:0.2839, A4s:0.3655, A5s:0.6328, A6s:0.4512, A7s:0.7223, A8s:0.0361, A9s:0.51, ATs:0.5268, AJs:0.7723, AQs:0.8575, AKs:0.4755, AA:0.2437"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0097, 32s:0.0029, 33:0.0072, A3o:0.0282, 43s:0.0001, 44:0.0077, A4o:0.017, 52s:0.0051, 53s:0.0005, 54s:0.0017, 55:0.0089, A5o:0.0401, 63s:0.0029, 64s:0.001, 65s:0.0141, 66:0.0149, A6o:0.0031, 72s:0.0038, 73s:0.0011, 74s:0.0002, 75s:0.001, 76s:0.0046, 77:0.0059, A7o:0.0169, 85s:0.0033, 86s:0.0084, 87s:0.0078, 88:0.0195, A8o:0.0242, 95s:0.0003, 98s:0.0096, 99:0.0341, K9o:0.0002, T5s:0.0018, T6s:0.0002, T8s:0.0148, T9s:0.0001, TT:0.0189, ATo:0.0245, J8s:0.0007, J9s:0.0004, JTs:0.0016, JJ:0.0234, KJo:0.003, AJo:0.0176, Q3s:0.0001, Q4s:0.0001, Q5s:0.0001, Q6s:0.0011, Q8s:0.0079, Q9s:0.0187, QTs:0.0017, QJs:0.0164, QQ:0.004, KQo:0.0097, AQo:0.0077, K2s:0.0112, K3s:0.0003, K4s:0.044, K6s:0.046, K7s:0.0119, K8s:0.0328, K9s:0.0385, KTs:0.0622, KJs:0.0273, KQs:0.0496, KK:0.1282, AKo:0.4104, A2s:0.2238, A3s:0.0964, A4s:0.1212, A5s:0.1937, A6s:0.0377, A7s:0.0749, A8s:0.1476, A9s:0.232, ATs:0.204, AJs:0.1285, AQs:0.0607, AKs:0.5245, AA:0.7563"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, QQ:0.0013, KJs:0.0001, KK, AQs:0.0003, AKs:0.0898, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.031, TT:0.0907, JJ:0.3319, QQ:0.9998, KK, AKo:0.989, AQs:0.0278, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0001, 52s:0.0001, 55:0.0002, 65s:0.0004, 66:0.0001, 75s:0.0001, 82s:0.0001, 94s:0.0001, 98s:0.0001, 99:0.0001, T4s:0.0004, T5s:0.0001, T6s:0.0026, TT:0.0002, J8s:0.0001, JTs:0.0005, AJo:0.0002, Q3s:0.0003, Q6s:0.0002, QTs:0.0001, QQ:0.0233, AQo:0.0018, K4s:0.0002, K5s:0.0001, K7s:0.0001, K8s:0.0001, KTs:0.0001, KJs:0.002, KQs:0.0001, KK:0.2881, AKo:0.0715, A2s:0.0024, A3s:0.0003, A4s:0.0256, A5s:0.0104, A6s:0.0001, A8s:0.0011, ATs:0.0074, AJs:0.0112, AQs:0.5445, AKs:0.139, AA:0.0422"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0006, 63s:0.0002, 64s:0.0007, 65s:0.0024, 76s:0.0001, T4s:0.0001, T9s:0.0003, ATo:0.0227, QQ:0.0001, AQo:0.0139, K6s:0.0021, K7s:0.0001, KTs:0.0018, KJs:0.0001, KK:0.2735, AKo:0.5913, A2s:0.0192, A3s:0.1579, A4s:0.3426, A5s:0.0321, A6s:0.0065, A7s:0.0243, A8s:0.0451, A9s:0.0463, ATs:0.0187, AJs:0.1129, AQs:0.0283, AKs:0.8205, AA:0.9578"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5451, 33:0.6438, Q3o:0.0001, A3o:0.0001, 42s:0.0011, 43s:0.2347, 44:0.8264, 54o:0.0329, 64o:0.0008, 52s:0.0036, 53s:0.2497, 54s:0.7805, 55:0.8027, 65o:0.0943, A5o:0.0008, 63s:0.4825, 64s:0.7349, 65s:0.6742, 66:0.9249, 76o:0.0631, K6o:0.0042, A6o:0.0036, 74s:0.458, 75s:0.7265, 76s:0.7367, 77:0.8953, 82s:0.0015, 84s:0.0043, 85s:0.371, 86s:0.3552, 87s:0.6458, 88:0.9222, 92s:0.0146, 93s:0.0148, 94s:0.0002, 95s:0.0356, 96s:0.3556, 97s:0.6668, 98s:0.3905, 99:0.8293, T4s:0.0001, T5s:0.0391, T6s:0.0141, T7s:0.0293, T8s:0.046, T9s:0.2534, TT:0.8201, JTo:0.0002, ATo:0.0273, J4s:0.0066, J6s:0.0249, J7s:0.0442, J9s:0.0396, JTs:0.259, JJ:0.8778, KJo:0.017, AJo:0.0068, Q2s:0.0008, Q3s:0.0026, Q5s:0.0001, Q6s:0.0031, Q8s:0.0017, Q9s:0.0124, QTs:0.0541, QJs:0.0441, QQ:0.9477, AQo:0.8067, K2s:0.2314, K3s:0.167, K4s:0.0161, K5s:0.4199, K6s:0.7276, K7s:0.4935, K8s:0.2979, K9s:0.3116, KTs:0.6715, KJs:0.6153, KQs:0.0386, KK:0.805, AKo:0.1669, A2s:0.049, A3s:0.0685, A4s:0.0304, A5s:0.1835, A6s:0.0137, A7s:0.0463, A8s:0.3038, A9s:0.1029, ATs:0.0859, AJs:0.0684, AQs:0.9542, AKs:0.6057, AA:0.1731"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0164, A2o:0.0094, 32s:0.0001, 33:0.0123, A3o:0.0375, 43s:0.0002, 44:0.0126, A4o:0.0322, 53s:0.0052, 54s:0.0158, 55:0.0177, A5o:0.0528, 62s:0.0005, 63s:0.0002, 64s:0.0011, 65s:0.0373, 66:0.004, A6o:0.008, 73s:0.0001, 74s:0.0037, 75s:0.0047, 76s:0.021, 77:0.021, A7o:0.0047, 82s:0.0001, 83s:0.0002, 86s:0.0183, 87s:0.0154, 88:0.0036, A8o:0.0336, 96s:0.013, 98s:0.02, 99:0.0084, A9o:0.0013, T7s:0.001, T8s:0.0044, T9s:0.0043, TT:0.0139, ATo:0.0507, JTs:0.0072, JJ:0.0195, AJo:0.0028, Q8s:0.0001, QJs:0.0014, QQ:0.0005, AQo:0.1127, K2s:0.006, K3s:0.0055, K5s:0.0005, K7s:0.003, K9s:0.0067, KJs:0.0086, KK:0.195, AKo:0.8327, A2s:0.2426, A3s:0.6633, A4s:0.73, A5s:0.3004, A6s:0.5501, A7s:0.3914, A8s:0.093, A9s:0.3372, ATs:0.3919, AJs:0.383, AQs:0.043, AKs:0.3942, AA:0.8269"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 42s:0.0001, 54s:0.0002, 62s:0.0002, 64s:0.0001, 66:0.0013, J6o:0.0001, A6o:0.1031, 77:0.2621, 85s:0.0003, 86s:0.0017, 88:0.1705, 93s:0.0001, 94s:0.0001, 95s:0.0001, 96s:0.0002, 98s:0.0017, 99:0.0021, T2s:0.0022, T7s:0.1974, T9s:0.0113, TT:0.0002, ATo:0.0921, J3s:0.0002, J6s:0.0001, J8s:0.0011, JJ:0.0001, Q2s:0.021, Q3s:0.0005, Q4s:0.0001, Q5s:0.0001, Q8s:0.0001, Q9s:0.0001, QJs:0.0003, QQ:0.0122, K6s:0.0005, K8s:0.0651, KTs:0.0005, KJs:0.0018, KQs:0.0001, KK:0.5964, AKo:0.0728, A2s:0.0001, A3s:0.0001, A4s:0.2526, A5s:0.0001, A6s:0.0193, A7s:0.0002, A8s:0.2339, A9s:0.4141, ATs:0.156, AJs:0.2862, AQs:0.5467, AKs:0.2209, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0001, 42s:0.0001, 55:0.0001, A5o:0.3434, 64s:0.0001, 65s:0.0001, 74s:0.0001, 76s:0.0002, A8o:0.0305, 96s:0.0001, 97s:0.0001, 98s:0.002, K9o:0.0001, A9o:0.0004, T2s:0.0002, T3s:0.0006, T5s:0.0005, T6s:0.0126, T7s:0.002, T9s:0.0001, TT:0.0006, J2s:0.0005, J7s:0.0002, J8s:0.0001, J9s:0.0002, JTs:0.002, JJ:0.0002, AJo:0.0002, Q2s:0.0004, Q3s:0.0007, Q4s:0.0072, Q5s:0.0009, Q6s:0.0001, Q9s:0.0001, QJs:0.0027, QQ:0.0003, KQo:0.0001, K2s:0.0001, K3s:0.0003, K5s:0.0003, K6s:0.0013, K8s:0.0001, KTs:0.0172, KJs:0.3537, KQs:0.0255, KK:0.8435, AKo:0.41, A2s:0.1067, A3s:0.0001, A5s:0.261, A6s:0.012, A7s:0.1178, A8s:0.1709, A9s:0.4579, ATs:0.1263, AJs:0.1565, AQs:0.5031, AKs:0.2208, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, 99:0.0001, JJ:0.0001, QQ:0.0002, KK, A4s:0.0001, AKs:0.0073, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0624, JJ:0.1677, QQ:0.2339, KK, AKo:0.9923, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.002, 44:0.0001, 64s:0.0001, 66:0.0001, 77:0.0001, 87s:0.0001, 96s:0.0003, 97s:0.0003, 99:0.0002, T6s:0.0001, T9s:0.0001, TT:0.0291, J6s:0.0001, J7s:0.0001, J9s:0.0001, Q8s:0.0001, QTs:0.0002, QQ:0.0033, K9s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0001, KK:0.9981, AKo:0.0001, A2s:0.0003, A4s:0.0003, A5s:0.0002, A8s:0.0001, A9s:0.0021, ATs:0.001, AJs:0.0004, AQs:0.0001, AKs:0.4996, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0002, 53s:0.0001, 62s:0.0001, 84s:0.0001, 85s:0.0001, 99:0.0037, TT:0.0001, J2s:0.0001, J6s:0.0005, J8s:0.0001, Q7s:0.0002, QJs:0.0001, QQ:0.061, AQo:0.0001, K3s:0.0014, K7s:0.0001, K8s:0.0003, K9s:0.0001, KJs:0.0001, KK:0.999, AKo:0.0468, A2s:0.0003, A3s:0.0002, A4s:0.0003, A5s:0.0002, A7s:0.0005, A8s:0.0002, A9s:0.0003, ATs:0.0009, AJs:0.0007, AKs:0.5526, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|HJ:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.12, A2o:0.0001, 32s:0.0001, 33:0.0649, 42s:0.0036, 43s:0.418, 44:0.1049, 53s:0.5554, 54s:0.9331, 55:0.6097, 65o:0.01, 62s:0.0112, 63s:0.3098, 64s:0.9343, 65s:0.9439, 66:0.9955, A6o:0.0002, 74s:0.0969, 75s:0.7932, 76s:0.9542, 77:0.9759, 85s:0.1385, 86s:0.9092, 87s:0.9297, 88:0.9941, A8o:0.0001, 95s:0.0288, 96s:0.5042, 97s:0.7117, 98s:0.8505, 99:0.9958, T9o:0.3617, A9o:0.0003, T5s:0.0002, T6s:0.2189, T7s:0.5407, T8s:0.96, T9s:0.9855, TT:0.8575, JTo:0.2894, QTo:0.0001, ATo:0.0153, J4s:0.0002, J7s:0.0539, J8s:0.0854, J9s:0.9229, JTs:0.9984, JJ:0.843, AJo:0.0015, Q4s:0.0002, Q6s:0.0001, Q9s:0.1841, QTs:0.8504, QJs:0.7656, QQ:0.9996, AQo:0.902, K2s:0.0134, K3s:0.0002, K4s:0.0842, K5s:0.0361, K6s:0.3046, K7s:0.0115, K8s:0.0007, K9s:0.4379, KTs:0.9251, KJs:0.9164, KQs:0.3722, KK:0.9982, AKo:0.0026, A2s:0.0957, A3s:0.1659, A4s:0.0637, A5s:0.3246, A6s:0.0042, A7s:0.328, A8s:0.4006, A9s:0.7062, ATs:0.4278, AJs:0.3948, AQs:0.9605, AA:0.1366"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.5035, A2o:0.0005, 33:0.7189, A3o:0.0498, 44:0.7211, A4o:0.0587, 53s:0.0001, 55:0.3818, 65o:0.0001, A5o:0.0148, 62s:0.0001, 63s:0.0001, 64s:0.0004, 65s:0.0008, 66:0.0043, A6o:0.0001, 75s:0.0004, 76s:0.0022, 77:0.0214, 87o:0.0001, 82s:0.0001, 87s:0.0003, 88:0.0009, A8o:0.0003, 95s:0.0001, 96s:0.0001, 97s:0.0004, 98s:0.0003, 99:0.0016, T8s:0.0003, T9s:0.0002, TT:0.1373, ATo:0.087, J9s:0.0001, JJ:0.1522, AJo:0.0341, QTs:0.0001, QQ:0.0004, AQo:0.066, K4s:0.0001, K5s:0.0001, K6s:0.0004, K8s:0.0001, K9s:0.0001, KK:0.0018, AKo:0.9974, A2s:0.6416, A3s:0.7559, A4s:0.7986, A5s:0.6145, A6s:0.644, A7s:0.5344, A8s:0.3189, A9s:0.2411, ATs:0.5713, AJs:0.583, AQs:0.0395, AKs, AA:0.8634"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|HJ:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.3422, JJ:0.901, QQ, AQo:0.0069, KK, AKo, AQs:0.1387, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 64s:0.0001, 73s:0.0001, 85s:0.0007, 86s:0.0003, 92s:0.0002, 94s:0.0001, 98s:0.0009, T2s:0.0001, T9s:0.0001, JJ:0.0002, AJo:0.0004, Q2s:0.0026, Q5s:0.0001, Q6s:0.0001, Q7s:0.0003, Q9s:0.0001, QQ:0.0022, K3s:0.0001, K6s:0.0001, K8s:0.0001, KTs:0.0007, KK:0.1023, AKo:0.0032, A2s:0.012, A3s:0.0001, A4s:0.0001, A5s:0.0008, A6s:0.0003, A7s:0.0012, A9s:0.0003, ATs:0.0006, AJs:0.0027, AQs:0.2228, AKs:0.0473, AA:0.049"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0002, 44:0.0001, 53s:0.0002, 64s:0.0003, 65s:0.0003, A6o:0.0002, 75s:0.0001, 85s:0.0001, 86s:0.0001, 87s:0.0001, 98s:0.0004, 99:0.0007, T6s:0.0001, T9s:0.001, ATo:0.001, J2s:0.0002, J3s:0.0001, JJ:0.0001, Q2s:0.0001, Q4s:0.001, Q5s:0.0001, Q7s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0031, K3s:0.0001, K8s:0.0003, K9s:0.0008, KTs:0.0545, KK:0.2741, AKo:0.8983, A2s:0.1086, A3s:0.0001, A4s:0.1816, A6s:0.0147, A7s:0.0028, A8s:0.0548, A9s:0.1837, ATs:0.2067, AJs:0.4243, AQs:0.0243, AKs:0.9251, AA:0.951"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4493, 62o:0.0016, 32s:0.0098, 33:0.7108, A3o:0.0018, 43s:0.3671, 44:0.7841, 54o:0.1109, 64o:0.0934, A4o:0.0018, 52s:0.0096, 53s:0.0418, 54s:0.861, 55:0.8906, 65o:0.4578, 75o:0.0281, 85o:0.0004, A5o:0.0012, 62s:0.0855, 63s:0.3249, 64s:0.7566, 65s:0.9291, 66:0.9607, 76o:0.188, 86o:0.0503, 96o:0.0001, K6o:0.002, A6o:0.0002, 73s:0.1946, 74s:0.2307, 75s:0.8394, 76s:0.8346, 77:0.8947, 87o:0.1277, 97o:0.0228, K7o:0.0101, A7o:0.0079, 84s:0.1745, 85s:0.2257, 86s:0.5165, 87s:0.8535, 88:0.8406, 98o:0.0078, T8o:0.032, A8o:0.0007, 93s:0.004, 94s:0.0001, 95s:0.1633, 96s:0.2318, 97s:0.6475, 98s:0.171, 99:0.7277, T9o:0.0325, J9o:0.0001, K9o:0.0222, A9o:0.0041, T2s:0.0001, T4s:0.0181, T5s:0.0296, T6s:0.0051, T7s:0.5405, T8s:0.1415, T9s:0.8787, TT:0.3264, JTo:0.0027, KTo:0.0005, ATo:0.0163, J2s:0.0119, J5s:0.056, J6s:0.0362, J7s:0.179, J8s:0.1598, J9s:0.3553, JTs:0.7976, JJ:0.7098, QJo:0.0001, KJo:0.0347, AJo:0.0305, Q5s:0.0068, Q7s:0.0194, Q9s:0.007, QTs:0.03, QJs:0.0608, QQ:0.9453, KQo:0.0228, AQo:0.444, K2s:0.0511, K3s:0.0447, K4s:0.1447, K5s:0.0837, K6s:0.1923, K7s:0.1022, K8s:0.0034, K9s:0.0336, KTs:0.1093, KJs:0.1972, KQs:0.0946, KK:0.8151, AKo:0.1068, A2s:0.0183, A3s:0.0717, A4s:0.0951, A5s:0.2122, A6s:0.333, A7s:0.1694, A8s:0.3137, A9s:0.0993, ATs:0.6292, AJs:0.2644, AQs:0.9765, AKs:0.1167, AA:0.2458"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.089, A2o:0.0001, 33:0.081, A3o:0.0821, 43s:0.0002, 44:0.0264, K4o:0.0001, A4o:0.0168, 53s:0.0009, 54s:0.0081, 55:0.0894, 85o:0.0001, A5o:0.1065, 63s:0.0005, 66:0.0034, A6o:0.0005, 72s:0.0001, 74s:0.0007, 76s:0.0013, 77:0.0866, A7o:0.0047, 85s:0.0007, 86s:0.0268, 87s:0.0039, 88:0.0942, A8o:0.0246, 94s:0.0001, 95s:0.0001, 97s:0.0004, 98s:0.0479, 99:0.11, A9o:0.0002, T8s:0.0003, T9s:0.0003, TT:0.4403, ATo:0.0926, J7s:0.0078, J8s:0.0005, J9s:0.0005, JTs:0.0002, JJ:0.0588, AJo:0.0455, Q3s:0.0002, Q5s:0.0002, Q9s:0.0001, QTs:0.0002, QQ:0.0006, KQo:0.0001, AQo:0.0028, K2s:0.0401, K3s:0.0021, K4s:0.0076, K5s:0.0424, K6s:0.005, K7s:0.0294, K8s:0.0322, K9s:0.0864, KTs:0.0554, KJs:0.0278, KQs:0.0004, KK:0.1848, AKo:0.893, A2s:0.4613, A3s:0.3159, A4s:0.5729, A5s:0.6925, A6s:0.2616, A7s:0.4431, A8s:0.2774, A9s:0.3639, ATs:0.2516, AJs:0.479, AQs:0.0071, AKs:0.8833, AA:0.7542"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0018, 92o:0.0002, A2o:0.0003, 32s:0.0009, K3o:0.0001, 42s:0.0002, 43s:0.0004, 44:0.0002, 84o:0.0001, A4o:0.0001, 53s:0.0003, 62s:0.001, 63s:0.0001, 75s:0.0001, 76s:0.0094, 77:0.0011, A7o:0.0002, 83s:0.0002, 84s:0.1061, 85s:0.0006, 88:0.0015, 94s:0.0002, 95s:0.0003, 96s:0.0002, 97s:0.0001, 98s:0.0009, 99:0.0019, T4s:0.0001, T5s:0.0003, T6s:0.0104, T7s:0.0001, TT:0.0042, J4s:0.0002, J5s:0.0003, J6s:0.0006, J7s:0.0002, JJ:0.0003, AJo:0.0004, Q4s:0.0003, Q5s:0.0001, Q7s:0.0003, Q8s:0.006, Q9s:0.0001, QTs:0.0001, QJs:0.0019, QQ:0.0238, KQo:0.0001, AQo:0.0006, K2s:0.0001, K4s:0.0006, K5s:0.0002, K7s:0.0241, K8s:0.0061, K9s:0.0013, KTs:0.0065, KQs:0.001, KK:0.3032, AKo:0.2657, A3s:0.2323, A4s:0.2164, A5s:0.1152, A6s:0.0048, A7s:0.0512, A8s:0.0014, A9s:0.3183, ATs:0.1781, AJs:0.0292, AQs:0.1991, AKs:0.4941, AA:0.9988"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0007, KK:0.9999, AKo:0.0006, ATs:0.0004, AJs:0.0002, AKs:0.0123, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0082, JJ:0.4142, QQ:0.6544, KK, AKo:0.9875, AKs:0.996, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, 63s:0.0001, 75s:0.0001, 76s:0.0004, 84s:0.0001, 88:0.0002, 96s:0.0001, 97s:0.0003, T2s:0.0001, T7s:0.0001, TT:0.0003, J2s:0.0001, J4s:0.0001, J5s:0.0001, JTs:0.0001, JJ:0.0011, Q6s:0.0001, QQ:0.001, K4s:0.0004, K5s:0.0001, K9s:0.0001, KTs:0.0017, KJs:0.0001, KQs:0.0001, KK:0.9989, A2s:0.0001, A4s:0.0001, A7s:0.0001, ATs:0.0002, AJs:0.0001, AQs:0.0006, AKs:0.0013, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, 76s:0.0006, 83s:0.0001, 88:0.0001, 92s:0.0001, J3s:0.0001, J8s:0.0001, JTs:0.0004, Q4s:0.0001, Q7s:0.0002, QTs:0.0001, QQ:0.0079, KTs:0.0001, KK:0.0157, AKo:0.0008, A4s:0.0001, A7s:0.003, A8s:0.0002, AJs:0.0007, AQs:0.0122, AKs:0.0002, AA:0.1779"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0082, 44:0.0504, A4o:0.0001, 55:0.0643, A5o:0.0264, 66:0.0493, 77:0.0118, 83s:0.0007, 86s:0.0715, 87s:0.0238, 88:0.0002, A8o:0.0296, 98s:0.0301, T4s:0.0018, T7s:0.0142, T8s:0.0304, ATo:0.0089, JJ:0.0883, Q3s:0.0001, Q5s:0.0001, Q8s:0.0016, Q9s:0.0002, QQ:0.1879, AQo:0.0131, K2s:0.0001, KTs:0.0003, KQs:0.1097, KK:0.4101, AKo:0.4581, A2s:0.2272, A3s:0.1494, A4s:0.0115, A5s:0.1732, A6s:0.0553, A7s:0.0774, A8s:0.1645, A9s:0.0232, ATs:0.003, AJs:0.1552, AQs:0.0164, AKs:0.9258, AA:0.8221"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2783, A2o:0.0117, 32s:0.0005, 33:0.2457, A3o:0.0042, 42s:0.0436, 43s:0.0132, 44:0.3174, 54o:0.009, 64o:0.0636, A4o:0.0235, 52s:0.0045, 53s:0.0099, 54s:0.5456, 55:0.6038, 65o:0.0802, A5o:0.0623, 62s:0.3283, 63s:0.3822, 64s:0.4674, 65s:0.5831, 66:0.2802, 76o:0.4489, 86o:0.0008, Q6o:0.0003, A6o:0.0583, 73s:0.014, 74s:0.225, 75s:0.5939, 76s:0.4618, 77:0.4286, 87o:0.0587, 97o:0.0143, T7o:0.0004, Q7o:0.0004, A7o:0.2004, 82s:0.0012, 84s:0.0001, 85s:0.2116, 86s:0.4583, 87s:0.5372, 88:0.7617, 98o:0.0011, T8o:0.0019, Q8o:0.0006, A8o:0.1395, 94s:0.0022, 95s:0.0033, 96s:0.3926, 97s:0.4665, 98s:0.4313, 99:0.1699, T9o:0.0376, J9o:0.0015, A9o:0.1626, T2s:0.0056, T5s:0.0058, T6s:0.1703, T7s:0.5938, T8s:0.5765, T9s:0.6585, TT:0.1852, JTo:0.1999, QTo:0.0028, ATo:0.3917, J4s:0.0011, J5s:0.0008, J6s:0.0008, J7s:0.125, J8s:0.0199, J9s:0.6461, JTs:0.5118, JJ:0.5714, AJo:0.7284, Q3s:0.0001, Q4s:0.0303, Q5s:0.0015, Q6s:0.1652, Q7s:0.0553, Q8s:0.0157, Q9s:0.4115, QTs:0.3431, QJs:0.5734, QQ:0.5505, AQo:0.867, K2s:0.0049, K5s:0.0019, K6s:0.025, K9s:0.0682, KTs:0.3509, KJs:0.0106, KQs:0.0843, KK:0.323, AKo:0.0518, A2s:0.0214, A3s:0.2269, A4s:0.3076, A5s:0.3271, A6s:0.1971, A7s:0.0909, A8s:0.5368, A9s:0.5675, ATs:0.2141, AJs:0.8684, AQs:0.8834, AKs:0.0032, AA:0.6968"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.5266, 52o:0.0002, 62o:0.0055, 92o:0.0003, K2o:0.0002, A2o:0.1951, 32s:0.059, 33:0.5622, 43o:0.0085, 53o:0.0188, 63o:0.0091, 73o:0.0063, 83o:0.0056, T3o:0.0038, Q3o:0.0061, A3o:0.1638, 42s:0.0672, 43s:0.0523, 44:0.6194, 54o:0.0237, 64o:0.0466, 74o:0.0084, 84o:0.005, 94o:0.0039, T4o:0.0065, A4o:0.2006, 52s:0.0339, 53s:0.0478, 54s:0.0832, 55:0.2585, 65o:0.0771, 75o:0.0082, 85o:0.0086, 95o:0.01, T5o:0.0015, A5o:0.2035, 62s:0.0259, 63s:0.1471, 64s:0.1934, 65s:0.1935, 66:0.6506, 76o:0.0482, 86o:0.025, 96o:0.0115, T6o:0.0074, Q6o:0.008, K6o:0.0002, A6o:0.1836, 72s:0.0305, 73s:0.01, 74s:0.0613, 75s:0.0641, 76s:0.1737, 77:0.4116, 87o:0.0341, 97o:0.0279, T7o:0.0138, A7o:0.1655, 82s:0.021, 83s:0.0198, 84s:0.019, 85s:0.0412, 86s:0.1298, 87s:0.1588, 88:0.2266, 98o:0.0463, T8o:0.0266, Q8o:0.0074, A8o:0.1021, 92s:0.0102, 93s:0.0105, 94s:0.0192, 95s:0.0273, 96s:0.1793, 97s:0.2026, 98s:0.1586, 99:0.7414, T9o:0.0766, J9o:0.0071, Q9o:0.0111, K9o:0.0021, A9o:0.1951, T2s:0.0193, T3s:0.0291, T4s:0.0512, T5s:0.0379, T6s:0.0432, T7s:0.0368, T8s:0.0969, T9s:0.169, TT:0.7888, JTo:0.0086, QTo:0.0236, ATo:0.2109, J4s:0.0302, J5s:0.0001, J6s:0.0136, J7s:0.0205, J8s:0.0119, J9s:0.0769, JTs:0.1067, JJ:0.3956, QJo:0.009, KJo:0.0001, AJo:0.0779, Q2s:0.0066, Q3s:0.0113, Q4s:0.005, Q5s:0.0134, Q6s:0.0261, Q7s:0.0361, Q8s:0.0158, Q9s:0.1196, QTs:0.0933, QJs:0.0164, QQ:0.4485, AQo:0.1029, K2s:0.0066, K3s:0.0001, K4s:0.0203, K5s:0.0126, K6s:0.0479, K7s:0.0047, K8s:0.0409, K9s:0.0011, KTs:0.1164, KJs:0.0009, KQs:0.0155, KK:0.664, AKo:0.9481, A2s:0.7416, A3s:0.5978, A4s:0.5622, A5s:0.4773, A6s:0.5643, A7s:0.6626, A8s:0.4333, A9s:0.4078, ATs:0.6018, AJs:0.1306, AQs:0.1147, AKs:0.9968, AA:0.3032"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "93s:0.0001, 99:0.0009, T7s:0.0001, ATo:0.0002, QQ:0.001, KK:0.9996, AKo:0.0003, ATs:0.0003, AJs:0.0002, AQs:0.0001, AKs:0.1828, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0002, 88:0.0005, 99:0.0005, TT:0.0027, JJ:0.0278, QQ:0.1283, KK, AKo:0.9722, AJs:0.0001, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 52s:0.0001, 53s:0.0001, 62s:0.0002, 63s:0.0001, 75s:0.0004, 76s:0.0001, 77:0.0007, 88:0.0001, T5s:0.0001, T6s:0.0001, TT:0.0002, ATo:0.0115, J3s:0.0001, J4s:0.0001, J9s:0.0001, JTs:0.0012, Q2s:0.0001, Q5s:0.0001, QJs:0.0004, QQ:0.0044, K2s:0.0002, K6s:0.0001, K7s:0.0001, KJs:0.0005, KK:0.0021, AKo:0.0039, A2s:0.0191, A3s:0.0649, A4s:0.0015, A6s:0.0004, A7s:0.0106, A8s:0.0003, A9s:0.0098, ATs:0.0615, AJs:0.0049, AQs:0.0014, AKs:0.0018, AA:0.0587"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 77:0.0269, ATo:0.0018, J9s:0.0001, JJ:0.017, Q9s:0.0001, K4s:0.0002, KQs:0.0001, KK:0.0071, AKo:0.5093, A2s:0.1401, A3s:0.0332, A4s:0.0013, A6s:0.054, A7s:0.0002, A8s:0.2639, A9s:0.0009, ATs:0.1082, AJs:0.089, AQs:0.212, AKs:0.9002, AA:0.9413"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0093, 42o:0.0026, 62o:0.0025, K2o:0.0003, A2o:0.0122, 32s:0.0007, 33:0.161, 43o:0.0008, 53o:0.0024, 63o:0.0012, A3o:0.0349, 42s:0.06, 43s:0.0456, 44:0.2169, 54o:0.002, 64o:0.001, 74o:0.0011, K4o:0.0003, A4o:0.0298, 52s:0.0598, 53s:0.2896, 54s:0.1022, 55:0.1143, 65o:0.0043, 75o:0.0052, 95o:0.0003, A5o:0.0366, 62s:0.0017, 63s:0.0042, 64s:0.398, 65s:0.4662, 66:0.3809, 76o:0.0033, 86o:0.0015, 96o:0.0011, J6o:0.0004, K6o:0.0002, A6o:0.0219, 73s:0.0024, 74s:0.0001, 75s:0.1347, 76s:0.079, 77:0.1115, 97o:0.0016, T7o:0.002, A7o:0.0484, 82s:0.0013, 84s:0.005, 85s:0.0117, 86s:0.0075, 87s:0.1527, 88:0.4416, 98o:0.004, T8o:0.0015, J8o:0.001, K8o:0.0003, A8o:0.0714, 92s:0.0052, 93s:0.001, 94s:0.0062, 95s:0.0036, 96s:0.0701, 97s:0.0617, 98s:0.1806, 99:0.1784, T9o:0.0018, A9o:0.0798, T4s:0.0001, T6s:0.0111, T7s:0.0092, T8s:0.1299, T9s:0.3056, TT:0.6152, JTo:0.0015, QTo:0.0016, ATo:0.5482, J3s:0.0004, J4s:0.0005, J5s:0.0004, J7s:0.0059, J8s:0.0731, J9s:0.4408, JTs:0.0607, JJ:0.2289, AJo:0.7337, Q2s:0.0007, Q3s:0.0042, Q4s:0.0042, Q5s:0.0004, Q6s:0.0573, Q7s:0.0004, Q8s:0.002, Q9s:0.1923, QTs:0.2428, QJs:0.177, QQ:0.8297, AQo:0.9614, K3s:0.0022, K4s:0.001, K5s:0.0214, K6s:0.0415, K7s:0.0034, K8s:0.0007, K9s:0.1231, KTs:0.0689, KJs:0.0374, KQs:0.0525, KK:0.2389, AKo:0.0324, A2s:0.0099, A3s:0.0378, A4s:0.0389, A5s:0.4405, A6s:0.0919, A7s:0.1161, A8s:0.2111, A9s:0.4498, ATs:0.5309, AJs:0.8531, AQs:0.9614, AKs:0.0237, AA:0.4696"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.7467, A2o:0.352, 32s:0.0346, 33:0.531, A3o:0.2886, 42s:0.1945, 43s:0.0799, 44:0.6793, 54o:0.0282, 64o:0.0685, A4o:0.4296, 52s:0.1338, 53s:0.0564, 54s:0.2519, 55:0.6716, 65o:0.1058, A5o:0.3718, 62s:0.0675, 63s:0.0964, 64s:0.3929, 65s:0.3421, 66:0.5843, 76o:0.1167, 86o:0.0193, 96o:0.0022, A6o:0.2636, 73s:0.0012, 74s:0.1468, 75s:0.2824, 76s:0.3621, 77:0.6266, 97o:0.0125, A7o:0.2192, 82s:0.0461, 84s:0.0524, 85s:0.0193, 86s:0.1397, 87s:0.1507, 88:0.4384, A8o:0.2594, 92s:0.0137, 93s:0.0001, 94s:0.0009, 95s:0.0437, 96s:0.2213, 97s:0.4881, 98s:0.3188, 99:0.7348, T9o:0.0281, J9o:0.0139, A9o:0.1234, T2s:0.0001, T4s:0.0447, T6s:0.0339, T7s:0.1, T8s:0.1024, T9s:0.1272, TT:0.2329, ATo:0.1403, J2s:0.0001, J4s:0.0439, J5s:0.0215, J6s:0.0379, J8s:0.0876, J9s:0.1183, JTs:0.2906, JJ:0.6823, AJo:0.0946, Q2s:0.0307, Q4s:0.0199, Q5s:0.0009, Q6s:0.1367, Q7s:0.0186, Q8s:0.0117, Q9s:0.0603, QTs:0.0279, QJs:0.1645, QQ:0.1662, AQo:0.0231, K3s:0.0003, K4s:0.0003, K5s:0.0007, K7s:0.0001, K8s:0.0001, K9s:0.001, KTs:0.0008, KJs:0.0019, KQs:0.0004, KK:0.7274, AKo:0.9669, A2s:0.8262, A3s:0.9502, A4s:0.8971, A5s:0.5412, A6s:0.8464, A7s:0.6836, A8s:0.7451, A9s:0.5341, ATs:0.463, AJs:0.1452, AQs:0.0375, AKs:0.9758, AA:0.5304"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0001, T4o:0.0001, A4o:0.0001, 54s:0.0001, T5o:0.0001, A5o:0.0001, 66:0.0012, 72s:0.0001, 73s:0.0002, 74s:0.0002, 77:0.0002, 82s:0.0001, 83s:0.0004, 87s:0.0005, 92s:0.0006, 93s:0.0001, 97s:0.0001, 98s:0.0001, 99:0.0007, A9o:0.0001, T5s:0.0001, TT:0.0003, J4s:0.0001, J7s:0.0002, J8s:0.0004, JTs:0.0004, JJ:0.0001, Q3s:0.0001, Q6s:0.0003, Q7s:0.0001, Q8s:0.0002, QTs:0.0001, QJs:0.0002, QQ:0.0071, K2s:0.0006, K3s:0.0001, K8s:0.0002, KJs:0.0006, KK:0.4286, AKo:0.2931, A2s:0.0613, A3s:0.0003, A4s:0.0254, A6s:0.0001, A9s:0.0003, ATs:0.0105, AJs:0.0243, AQs:0.0045, AKs:0.2093, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0012, 42s:0.0001, 43s:0.0024, 52s:0.0001, 53s:0.0001, 54s:0.0003, 55:0.0002, 72s:0.0001, 74s:0.0004, 75s:0.0001, 83s:0.0002, 86s:0.0045, 87s:0.0001, 88:0.0001, 98o:0.0001, 96s:0.0001, 97s:0.0001, 98s:0.0005, 99:0.0005, A9o:0.0001, T5s:0.0001, T6s:0.0004, TT:0.0002, ATo:0.0003, J5s:0.0002, J6s:0.0002, J8s:0.0001, JJ:0.0001, KJo:0.0005, Q2s:0.0002, Q5s:0.0001, Q6s:0.0001, Q7s:0.0001, Q8s:0.0012, QJs:0.0001, QQ:0.0008, K3s:0.0001, K4s:0.0001, K5s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0002, K9s:0.0002, KTs:0.0001, KJs:0.0009, KQs:0.0002, KK:0.0048, AKo:0.0012, A2s:0.0004, A4s:0.0012, A5s:0.0024, A6s:0.0027, A8s:0.0025, A9s:0.0001, AJs:0.0003, AQs:0.0008, AKs:0.4475, AA:0.9991"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "86s:0.0001, 88:0.0001, T8s:0.0001, TT:0.0002, QTs:0.0001, KK:0.9991, AKo:0.0008, A2s:0.0001, A6s:0.0001, AJs:0.0001, AKs:0.0019, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0006, QQ:0.0001, KK, AKo:0.851, AKs:0.9944, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0001, 42s:0.0001, 52s:0.0014, 54s:0.0003, 66:0.0026, K7o:0.0002, 88:0.0005, 93s:0.0001, 95s:0.0001, 96s:0.0004, 98s:0.0001, 99:0.0004, T3s:0.0006, T5s:0.0001, T6s:0.0008, T9s:0.0002, TT:0.0022, J2s:0.0003, J4s:0.0001, J6s:0.0011, J8s:0.0003, JTs:0.0001, JJ:0.0005, AJo:0.0001, Q5s:0.0002, Q6s:0.0005, Q9s:0.0007, QTs:0.0001, QQ:0.0003, KQo:0.0006, AQo:0.0002, K4s:0.0001, K6s:0.0001, K7s:0.0012, K8s:0.0009, KTs:0.0004, KQs:0.0005, KK:0.9985, A2s:0.0006, A6s:0.0005, A7s:0.0004, A9s:0.0002, AJs:0.0009, AKs:0.0003, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K3o:0.0001, 43s:0.0003, 44:0.0006, 53s:0.0003, 54s:0.0001, 62s:0.0001, 63s:0.0001, 64s:0.0001, 65s:0.001, 86o:0.0001, 72s:0.0001, 73s:0.0001, 74s:0.0001, 75s:0.0001, 77:0.0001, 84s:0.0001, 85s:0.0004, 87s:0.0024, 88:0.0001, 95s:0.0001, 99:0.0001, J9o:0.0001, Q9o:0.0001, A9o:0.0002, T4s:0.0002, T6s:0.0005, T7s:0.001, T9s:0.0003, TT:0.002, KTo:0.0001, J5s:0.0002, J7s:0.0002, JTs:0.0011, JJ:0.0021, KJo:0.0001, AJo:0.0002, Q7s:0.0001, Q8s:0.0019, Q9s:0.0001, QQ:0.0001, K2s:0.0009, K3s:0.0005, K5s:0.001, K7s:0.0003, KTs:0.0002, KJs:0.0007, KQs:0.0003, KK:0.9889, A3s:0.0002, A4s:0.0026, A5s:0.0001, A7s:0.0017, A9s:0.0009, ATs:0.0004, AQs:0.0004, AKs:0.1223, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|HJ:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5424, A2o:0.0315, 32s:0.0005, 33:0.5075, A3o:0.1042, 42s:0.0328, 43s:0.655, 44:0.686, 54o:0.1048, 64o:0.0068, A4o:0.0385, 52s:0.0237, 53s:0.6524, 54s:0.8704, 55:0.8965, 65o:0.202, 75o:0.001, A5o:0.268, 62s:0.0023, 63s:0.1075, 64s:0.8011, 65s:0.8464, 66:0.9319, 76o:0.0717, 86o:0.0063, A6o:0.0658, 73s:0.004, 74s:0.0844, 75s:0.7318, 76s:0.8533, 77:0.939, A7o:0.0627, 83s:0.0006, 84s:0.0053, 85s:0.4082, 86s:0.805, 87s:0.628, 88:0.9505, 98o:0.02, T8o:0.0013, A8o:0.0888, 95s:0.0812, 96s:0.5721, 97s:0.7874, 98s:0.8084, 99:0.7478, T9o:0.0275, A9o:0.2264, T4s:0.0031, T5s:0.0017, T6s:0.0033, T7s:0.0713, T8s:0.5578, T9s:0.6332, TT:0.3239, JTo:0.0652, QTo:0.0487, ATo:0.6137, J3s:0.0002, J5s:0.0001, J6s:0.0026, J8s:0.0055, J9s:0.223, JTs:0.4404, JJ:0.9166, QJo:0.0004, AJo:0.9424, Q2s:0.0002, Q3s:0.0023, Q4s:0.0258, Q6s:0.0022, Q8s:0.0303, Q9s:0.4412, QTs:0.6881, QJs:0.3331, QQ:0.5358, KQo:0.093, AQo:0.4172, K2s:0.0096, K3s:0.0016, K4s:0.1109, K5s:0.1558, K6s:0.1709, K7s:0.0127, K8s:0.0027, K9s:0.2732, KTs:0.6503, KJs:0.0688, KQs:0.694, KK:0.2453, AKo:0.0961, A2s:0.0978, A3s:0.0805, A4s:0.1048, A5s:0.1193, A6s:0.1439, A7s:0.1453, A8s:0.1569, A9s:0.2376, ATs:0.4365, AJs:0.9702, AQs:0.419, AKs:0.06, AA:0.8542"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3657, A2o:0.3377, 32s:0.007, 33:0.4189, 43o:0.0002, 53o:0.0002, A3o:0.312, 42s:0.0085, 43s:0.0142, 44:0.2861, 54o:0.0091, A4o:0.5195, 52s:0.0142, 53s:0.0199, 54s:0.0379, 55:0.1033, 65o:0.0142, 85o:0.0002, A5o:0.3023, 62s:0.0134, 63s:0.0431, 64s:0.1058, 65s:0.0882, 66:0.0679, 76o:0.0022, 86o:0.0002, A6o:0.0669, 73s:0.0025, 74s:0.008, 75s:0.0329, 76s:0.0349, 77:0.0572, 87o:0.0002, A7o:0.0581, 82s:0.0002, 84s:0.0004, 85s:0.0053, 86s:0.0241, 87s:0.2104, 88:0.0493, T8o:0.0002, J8o:0.0003, A8o:0.0161, 92s:0.0002, 93s:0.0001, 95s:0.0005, 96s:0.0056, 97s:0.0246, 98s:0.0341, 99:0.2513, T9o:0.0022, Q9o:0.0001, A9o:0.1436, T2s:0.0025, T3s:0.0032, T4s:0.0113, T6s:0.0294, T7s:0.0097, T8s:0.1075, T9s:0.2775, TT:0.6759, JTo:0.0004, QTo:0.0001, ATo:0.2083, J2s:0.0001, J3s:0.0002, J4s:0.0006, J5s:0.0003, J6s:0.0013, J7s:0.0006, J8s:0.0085, J9s:0.0054, JTs:0.0699, JJ:0.0832, AJo:0.0468, Q2s:0.0003, Q3s:0.0001, Q4s:0.0001, Q5s:0.0002, Q6s:0.0003, Q8s:0.0003, Q9s:0.0423, QTs:0.0686, QJs:0.0134, QQ:0.4642, AQo:0.5827, K2s:0.0041, K3s:0.0002, K4s:0.0101, K5s:0.0116, K6s:0.0072, K7s:0.0028, K8s:0.0003, K9s:0.0132, KTs:0.0422, KJs:0.0096, KQs:0.0515, KK:0.7547, AKo:0.9039, A2s:0.8849, A3s:0.8964, A4s:0.8867, A5s:0.8711, A6s:0.8431, A7s:0.8239, A8s:0.8238, A9s:0.7041, ATs:0.5635, AJs:0.0297, AQs:0.581, AKs:0.94, AA:0.1458"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|HJ:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.784, JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "53s:0.0001, 62s:0.0001, 66:0.0001, 72s:0.0003, 83s:0.0001, T2s:0.0001, T5s:0.0001, T9s:0.0003, J5s:0.0001, JTs:0.0002, Q8s:0.0011, QTs:0.0002, QQ:0.0001, AQo:0.0001, K6s:0.0001, KJs:0.0001, KQs:0.0001, KK:0.2918, AKo:0.0001, A3s:0.0002, A6s:0.0003, A7s:0.0004, ATs:0.0001, AJs:0.0008, AKs:0.2062, AA:0.2809"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0176, A2o:0.021, A3o:0.0037, 43s:0.0115, 44:0.0548, A4o:0.0063, 54s:0.0411, 55:0.0021, A5o:0.0048, 62s:0.0024, 63s:0.0474, 64s:0.05, 65s:0.0705, 66:0.0497, A6o:0.0002, 73s:0.0276, 76s:0.0261, 83s:0.0002, 84s:0.0001, 85s:0.0005, 86s:0.0004, 88:0.0874, A8o:0.0001, 99:0.0441, T6s:0.0001, T8s:0.0003, TT:0.0473, J4s:0.004, J5s:0.0001, J8s:0.0668, JTs:0.0298, JJ:0.1071, AJo:0.0001, Q8s:0.0004, Q9s:0.0237, QTs:0.0072, QJs:0.0001, QQ:0.3051, AQo:0.2326, K5s:0.0005, KTs:0.0835, KJs:0.0502, KQs:0.0009, KK:0.383, AKo:0.3672, A2s:0.2867, A3s:0.05, A4s:0.2746, A5s:0.0245, A6s:0.0022, A7s:0.238, A8s:0.053, A9s:0.0053, ATs:0.0994, AJs:0.0818, AQs:0.5189, AKs:0.5099, AA:0.7191"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2381, A2o:0.0006, 33:0.3652, A3o:0.0398, 43s:0.1794, 44:0.1801, A4o:0.0428, 53s:0.0711, 54s:0.2393, 55:0.4554, 65o:0.0654, 85o:0.0002, A5o:0.1098, 63s:0.0817, 64s:0.2313, 65s:0.3993, 66:0.751, A6o:0.0018, 73s:0.0067, 74s:0.0083, 75s:0.2654, 76s:0.1145, 77:0.4209, A7o:0.084, 85s:0.0093, 86s:0.188, 87s:0.0723, 88:0.7207, T8o:0.0059, A8o:0.1058, 94s:0.0042, 95s:0.0003, 96s:0.1275, 97s:0.1633, 98s:0.2026, 99:0.5834, T9o:0.0691, A9o:0.1309, T3s:0.0016, T5s:0.0001, T6s:0.0568, T7s:0.0287, T8s:0.1034, T9s:0.155, TT:0.6506, QTo:0.1107, ATo:0.1936, J4s:0.0039, J6s:0.0018, J7s:0.0002, J8s:0.0339, J9s:0.1041, JTs:0.1808, JJ:0.4185, KJo:0.0003, AJo:0.3096, Q3s:0.0036, Q5s:0.0001, Q7s:0.0084, Q8s:0.0672, Q9s:0.0808, QTs:0.0699, QJs:0.1082, QQ:0.2908, AQo:0.2782, K9s:0.0259, KTs:0.0826, KJs:0.1418, KQs:0.0951, KK:0.3689, AKo:0.1435, A2s:0.1817, A3s:0.1315, A4s:0.2451, A5s:0.141, A6s:0.3381, A7s:0.1833, A8s:0.3133, A9s:0.4882, ATs:0.3615, AJs:0.4546, AQs:0.2618, AKs:0.0071, AA:0.1371"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1183, A2o:0.1453, 32s:0.0062, 33:0.0895, 43o:0.0026, A3o:0.2083, 42s:0.0074, 43s:0.0287, 44:0.2331, 54o:0.0092, A4o:0.3938, 53s:0.0077, 54s:0.0835, 55:0.1151, 65o:0.0083, A5o:0.2047, 62s:0.0067, 63s:0.0131, 64s:0.0715, 65s:0.138, 66:0.0786, A6o:0.1541, 74s:0.0052, 75s:0.0009, 76s:0.0598, 77:0.0898, A7o:0.1326, 83s:0.0011, 84s:0.001, 86s:0.0738, 87s:0.0657, 88:0.0726, J8o:0.0001, A8o:0.1482, 94s:0.0002, 96s:0.0003, 97s:0.0107, 98s:0.0731, 99:0.0747, A9o:0.1241, T2s:0.0082, T3s:0.0034, T4s:0.008, T6s:0.0133, T7s:0.0001, T8s:0.0632, T9s:0.0096, TT:0.1664, JTo:0.0016, QTo:0.0042, ATo:0.3873, J4s:0.0106, J5s:0.0085, J6s:0.0087, J7s:0.0006, J8s:0.0084, J9s:0.0078, JTs:0.0798, JJ:0.2072, AJo:0.3558, Q2s:0.009, Q3s:0.0073, Q4s:0.0131, Q5s:0.0216, Q6s:0.0041, Q7s:0.0005, Q8s:0.0169, Q9s:0.0013, QTs:0.0229, QJs:0.0254, QQ:0.622, AQo:0.6946, K2s:0.0057, K4s:0.0034, K5s:0.0053, K6s:0.0081, K8s:0.0038, KTs:0.0018, KQs:0.0097, KK:0.5516, AKo:0.8556, A2s:0.683, A3s:0.6015, A4s:0.6424, A5s:0.6318, A6s:0.613, A7s:0.5288, A8s:0.4977, A9s:0.4504, ATs:0.5399, AJs:0.5383, AQs:0.7328, AKs:0.9928, AA:0.8629"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "72o:0.0001, 82o:0.0002, 42s:0.0001, 44:0.0001, 63s:0.0003, 64s:0.0001, 65s:0.0003, 76o:0.0001, 96o:0.0001, A6o:0.0001, 72s:0.0001, 74s:0.0001, K7o:0.0001, 85s:0.0001, 86s:0.0009, 88:0.0002, 92s:0.0001, 97s:0.0005, 99:0.0003, T3s:0.0001, T4s:0.0002, T5s:0.0002, T7s:0.0003, T8s:0.0001, JTo:0.0001, J9s:0.0002, JTs:0.0003, JJ:0.0006, Q3s:0.0001, Q4s:0.0001, Q5s:0.0001, Q6s:0.0001, Q9s:0.0001, QJs:0.0002, QQ:0.027, K3s:0.0001, K6s:0.0002, K7s:0.0018, K9s:0.0002, KQs:0.0001, KK:0.3433, AKo:0.0104, A2s:0.0002, A3s:0.0035, A4s:0.0007, A5s:0.0202, A7s:0.0003, A8s:0.0015, ATs:0.0054, AJs:0.001, AQs:0.8805, AKs:0.3253, AA:0.9991"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "72s:0.0001, TT:0.0002, JTs:0.0001, QTs:0.0001, QQ:0.0001, K4s:0.0001, KK, AKo:0.0037, AJs:0.0001, AKs:0.0215, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, QQ:0.0003, KK, AKo:0.9997, AKs:0.9987, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32o:0.0001, 72o:0.0001, 42s:0.0003, 44:0.0001, J5o:0.0001, 63s:0.0002, 64s:0.0012, 65s:0.0002, 66:0.0001, 72s:0.0001, 73s:0.0003, 75s:0.0001, 76s:0.0007, 97o:0.0001, 87s:0.0006, 88:0.0001, J8o:0.0001, A8o:0.0001, 94s:0.0001, 95s:0.0003, 99:0.0011, A9o:0.0002, T3s:0.0001, T6s:0.0001, T7s:0.0008, T9s:0.0021, J2s:0.0002, J7s:0.0001, JTs:0.0001, JJ:0.0012, KJo:0.0001, Q3s:0.0006, Q8s:0.0002, Q9s:0.0003, QTs:0.0003, QQ:0.0003, K3s:0.0002, K5s:0.001, K6s:0.0016, K8s:0.0006, KTs:0.0036, KJs:0.0015, KK:0.9713, AKo:0.0003, A2s:0.0001, A3s:0.0001, A4s:0.0004, A6s:0.0004, A7s:0.0004, A8s:0.0001, ATs:0.0003, AJs:0.0031, AQs:0.0007, AKs:0.3127, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.9999, KK, AKo:0.9999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ, KK, AKo, AQs:0.1904, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 54s:0.0001, 55:0.1119, 65s:0.151, 66:0.0287, 87s:0.0392, 88:0.1796, 99:0.0013, T6s:0.0002, T8s:0.0001, TT:0.0013, JJ:0.0727, AJo:0.0002, QJs:0.001, QQ:0.9086, AQo:0.5147, K3s:0.0002, K6s:0.0039, K8s:0.0025, KTs:0.0001, KJs:0.0015, KQs:0.0005, KK:0.1404, AKo:0.0005, A4s:0.0398, A5s:0.2312, A6s:0.0003, A7s:0.062, A9s:0.0042, ATs:0.3108, AJs:0.0144, AQs:0.6267, AKs:0.0019, AA:0.0355"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.4423, A3o:0.0233, 44:0.0001, K4o:0.0103, A4o:0.3718, 52s:0.0006, 54s:0.041, K5o:0.0065, A5o:0.1682, 62s:0.0026, 64s:0.0044, 65s:0.0001, K6o:0.0001, A6o:0.0854, 75s:0.0012, K7o:0.0304, A7o:0.0097, 86s:0.0001, 88:0.0002, K8o:0.0103, A8o:0.1006, 93s:0.0003, 97s:0.0002, 99:0.0003, A9o:0.0673, T2s:0.0006, T5s:0.0025, T6s:0.0003, T9s:0.0002, TT:0.0006, KTo:0.0001, ATo:0.0104, JTs:0.0002, JJ:0.0005, KJo:0.0102, AJo:0.0044, Q7s:0.0019, Q8s:0.0074, QJs:0.0003, QQ:0.0044, KQo:0.0002, AQo:0.2378, K3s:0.0368, K5s:0.035, K6s:0.131, K7s:0.073, K8s:0.0265, K9s:0.0038, KJs:0.0043, KQs:0.0104, KK:0.0003, AKo:0.0223, A2s:0.0249, A3s:0.005, A4s:0.0737, A5s:0.0989, A6s:0.2947, A7s:0.0009, A8s:0.0412, A9s:0.091, ATs:0.0532, AJs:0.0532, AQs:0.1261, AKs:0.3846, AA:0.9634"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0611, 32s:0.0001, 33:0.0072, A3o:0.1555, 44:0.0248, A4o:0.0375, 52s:0.0001, 53s:0.0001, 54s:0.0001, A5o:0.4344, 62s:0.0005, 63s:0.0003, 64s:0.0397, 65s:0.0022, 66:0.022, A6o:0.0009, 73s:0.001, 75s:0.0026, 76s:0.0485, A7o:0.0271, 85s:0.0002, 87s:0.0375, 88:0.0549, A8o:0.0048, 97s:0.0001, 98s:0.0225, 99:0.2303, A9o:0.0005, T5s:0.0048, T6s:0.0025, T8s:0.0002, T9s:0.0719, TT:0.445, ATo:0.0779, J3s:0.003, J5s:0.0141, J7s:0.0001, J8s:0.0046, J9s:0.0572, JJ:0.0793, AJo:0.0734, Q6s:0.0013, Q7s:0.0041, Q9s:0.0019, QTs:0.0009, QJs:0.0077, QQ:0.024, KQo:0.0005, AQo:0.0092, K2s:0.0001, K3s:0.0364, K5s:0.01, K6s:0.0174, K7s:0.0032, K8s:0.0107, K9s:0.0164, KTs:0.0076, KJs:0.0065, KQs:0.2293, KK:0.8593, AKo:0.9766, A2s:0.9336, A3s:0.8926, A4s:0.8309, A5s:0.3209, A6s:0.4319, A7s:0.6845, A8s:0.8528, A9s:0.7349, ATs:0.196, AJs:0.7661, AQs:0.2443, AKs:0.6135, AA:0.0011"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.8707, 43s:0.0038, 44:0.2611, 54s:0.4751, 55:0.5755, 64s:0.0001, 65s:0.8393, 66:0.7556, A6o:0.0001, 75s:0.0427, 76s:0.229, 77:0.7202, A7o:0.0003, 86s:0.0005, 87s:0.0019, 88:0.3826, A8o:0.0002, 97s:0.0002, 98s:0.09, 99:0.0334, T6s:0.0001, T7s:0.1456, T8s:0.0066, T9s:0.0038, TT:0.3625, J8s:0.0001, JTs:0.0248, JJ:0.3996, AJo:0.0003, Q9s:0.0003, QTs:0.0008, QJs:0.0187, QQ:0.9904, AQo:0.7516, K5s:0.0226, K6s:0.0116, K7s:0.0251, KTs:0.3179, KJs:0.1823, KQs:0.0656, KK:0.494, A3s:0.1243, A4s:0.1516, A5s:0.5065, A6s:0.0296, A7s:0.3373, A8s:0.0002, A9s:0.8027, ATs:0.4372, AJs:0.7581, AQs:0.7032, AA:0.0002"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A5o:0.0001, 74s:0.0001, A7o:0.0003, 85s:0.0002, K8o:0.0001, KTo:0.0002, JTs:0.0001, JJ:0.0002, Q5s:0.0001, KQo:0.0001, AQo:0.0001, K4s:0.0003, K5s:0.0005, K7s:0.0003, K8s:0.0005, KTs:0.0003, KK:0.0025, A2s:0.0007, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0004, 33:0.0003, A3o:0.0004, 44:0.0032, A4o:0.0002, 55:0.0016, A5o:0.0039, 65s:0.0004, A6o:0.0003, 76s:0.0012, 77:0.0022, A7o:0.0004, 85s:0.0001, 87s:0.0001, A8o:0.0001, 98s:0.0002, 99:0.0017, A9o:0.0002, TT:0.0007, ATo:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0028, Q5s:0.0001, QTs:0.0019, QQ:0.0089, AQo:0.1377, K2s:0.0006, K3s:0.0002, K4s:0.0002, K5s:0.0002, K6s:0.0002, K7s:0.0004, K8s:0.0005, K9s:0.0009, KTs:0.0006, KQs:0.0076, KK:0.5034, AKo, A2s:0.0089, A3s:0.0012, A4s:0.0105, A5s:0.0123, A6s:0.0053, A7s:0.0007, A8s:0.0071, A9s:0.0026, ATs:0.0025, AJs:0.0007, AQs:0.2962, AKs:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0011, QQ:0.4845, KK, AKo:0.9994, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.7354, KK, AKo:0.9995, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 99:0.0001, TT:0.0014, J9s:0.0001, JJ:0.0003, QJs:0.0001, QQ:0.7494, K5s:0.0002, KQs:0.0001, KK, AKo:0.7488, AKs:0.7538, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0017, TT:0.0017, J9s:0.0001, JJ:0.0004, QQ:0.8324, KQs:0.0002, KK:0.9988, AKo:0.9066, A8s:0.0001, AJs:0.0001, AKs:0.9045, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0299, 75s:0.0008, 88:0.0227, 97s:0.0008, 99:0.0001, JJ:0.0001, QQ:0.1429, AQo:0.0336, K8s:0.0006, KTs:0.0009, KQs:0.0048, KK:0.0047, AKo:0.0016, A5s:0.0007, A6s:0.0015, A8s:0.005, A9s:0.0004, ATs:0.001, AJs:0.0037, AQs:0.3218, AKs:0.0017, AA:0.0007"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0168, 32s:0.0002, 33:0.0003, K3o:0.0031, A3o:0.0032, 43s:0.0004, K4o:0.0004, A4o:0.213, 54s:0.0001, K5o:0.0022, A5o:0.1339, A6o:0.2559, 74s:0.0002, K7o:0.0121, A7o:0.0047, A8o:0.0265, 94s:0.0005, 98s:0.0002, K9o:0.0131, A9o:0.0503, T5s:0.0001, T6s:0.0004, KTo:0.0009, ATo:0.0122, J2s:0.0002, J3s:0.0003, J4s:0.0008, JTs:0.0074, JJ:0.0012, KJo:0.0208, AJo:0.0049, Q4s:0.0001, Q8s:0.0001, QTs:0.0001, QQ:0.0143, AQo:0.0091, K2s:0.0072, K4s:0.0017, K5s:0.0038, K6s:0.007, K7s:0.0106, K8s:0.0187, K9s:0.0003, KTs:0.0002, KJs:0.0191, KQs:0.0003, KK:0.0001, AKo:0.1776, A2s:0.2446, A3s:0.0353, A4s:0.0034, A5s:0.1081, A6s:0.1242, A7s:0.2561, A8s:0.3852, A9s:0.2591, ATs:0.2819, AJs:0.1454, AQs:0.0426, AKs:0.4803, AA:0.9992"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0007, A2o:0.0001, 32s:0.0003, 33:0.0002, 43s:0.0016, 44:0.0003, K4o:0.0001, 54s:0.0001, A5o:0.0233, 63s:0.0006, 64s:0.0077, 66:0.0032, 75s:0.0005, 82s:0.0002, 83s:0.0001, 86s:0.0021, 87s:0.0001, 88:0.0021, 97s:0.0009, 99:0.11, K9o:0.0032, A9o:0.0002, T6s:0.0001, T9s:0.0007, TT:0.0066, J4s:0.0001, J9s:0.0007, JJ:0.0869, KJo:0.0002, AJo:0.0005, Q4s:0.0001, Q8s:0.0009, QTs:0.0001, QQ:0.3515, KQo:0.0001, AQo:0.0024, K2s:0.3292, K3s:0.2485, K4s:0.1026, K5s:0.2427, K6s:0.137, K7s:0.1486, K8s:0.1331, K9s:0.3852, KTs:0.9847, KJs:0.2973, KQs:0.1867, KK:0.9952, AKo:0.8209, A2s:0.2165, A3s:0.0416, A4s:0.083, A5s:0.548, A6s:0.0152, A7s:0.3572, A8s:0.2169, A9s:0.5429, ATs:0.555, AJs:0.0463, AQs:0.0334, AKs:0.518, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0197, 55:0.0134, 65s:0.0304, 66:0.1328, 77:0.2267, 88:0.0055, 99:0.0039, TT:0.0073, JJ:0.0003, QQ:0.195, AQo:0.0325, KTs:0.0211, A4s:0.001, A5s:0.0009, A8s:0.0004, A9s:0.0542, ATs:0.0031, AJs:0.0001, AQs:0.354, AKs:0.0011"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "KTo:0.0004, J4s:0.0001, KJo:0.0005, QQ:0.0002, KQo:0.0009, K2s:0.0003, K5s:0.0001, K7s:0.0001, K8s:0.0012, KTs:0.0001, KJs:0.0001, KK:0.0571, AQs:0.0002, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.1361, 77:0.2943, 88:0.0415, 98s:0.0001, 99:0.0886, TT:0.0852, JJ:0.201, QQ:0.6499, AQo:0.1382, K4s:0.0029, K5s:0.0012, K6s:0.3194, K7s:0.0017, K8s:0.0001, K9s:0.0134, KTs:0.1139, KJs:0.5962, KQs:0.311, KK:0.9429, AKo, A2s:0.3092, A3s:0.4618, A4s:0.0006, A5s:0.7494, A6s:0.3047, A7s:0.2988, A8s:0.3351, A9s:0.0264, ATs:0.2465, AJs:0.7994, AQs:0.6447, AKs:0.9989"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0007, 44:0.0034, A4o:0.0026, 55:0.0031, K5o:0.0243, A6o:0.0151, 77:0.0026, 88:0.0008, A8o:0.0722, 94s:0.0001, A9o:0.0001, T2s:0.0028, T4s:0.0002, T5s:0.0007, TT:0.0461, ATo:0.0081, J9s:0.0009, JTs:0.0082, JJ:0.0148, AJo:0.104, Q3s:0.0002, QJs:0.0001, QQ:0.008, KQo:0.0003, AQo:0.0304, K2s:0.0115, K3s:0.0005, K4s:0.0178, K6s:0.0906, K7s:0.0286, K8s:0.0002, K9s:0.0287, KTs:0.0016, KJs:0.0312, KK:0.002, AKo:0.1562, A2s:0.0025, A3s:0.1268, A4s:0.0234, A5s:0.0002, A6s:0.032, A7s:0.0145, A8s:0.0015, A9s:0.0075, ATs:0.1984, AJs:0.0199, AQs:0.0151, AKs:0.0596, AA:0.9964"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0025, 55:0.0253, 66:0.0127, A6o:0.0102, 76s:0.0529, 77:0.0068, 88:0.0014, T4s:0.0001, T8s:0.0043, J9s:0.0144, JJ:0.0012, QQ:0.0062, K2s:0.0604, K3s:0.0336, K4s:0.0292, K5s:0.1547, K6s:0.0991, K7s:0.1983, K9s:0.6691, KTs:0.0484, KJs:0.2908, KQs:0.3055, KK:0.9979, AKo:0.8414, A3s:0.1189, A4s:0.2962, A5s:0.2415, A6s:0.0629, A7s:0.0168, A8s:0.0009, A9s:0.1435, AJs:0.5124, AQs:0.0151, AKs:0.9367, AA:0.0036"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A3o:0.057, A4o:0.0447, 62s:0.0441, 66:0.0507, K6o:0.0405, A6o:0.0275, 76s:0.0263, 77:0.004, A9o:0.0093, T7s:0.0034, TT:0.0001, J2s:0.0179, JJ:0.0355, AJo:0.027, Q5s:0.0004, QQ:0.0498, AQo:0.0739, K2s:0.0653, K3s:0.0365, K4s:0.2109, K6s:0.2075, K7s:0.0244, K8s:0.0072, K9s:0.0083, KTs:0.0023, KJs:0.0945, KQs:0.0483, KK:0.0002, AKo:0.1854, A2s:0.0006, A4s:0.1297, A5s:0.0236, A6s:0.0013, A7s:0.1565, ATs:0.0016, AJs:0.1041, AQs:0.1162, AKs:0.6479, AA:0.9947"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0009, 53s:0.0064, 63s:0.0002, 66:0.0111, 76s:0.0011, 83s:0.0001, 88:0.0007, 94s:0.0011, 95s:0.0014, 99:0.0039, A9o:0.0425, T5s:0.0046, T6s:0.0001, T7s:0.0008, T9s:0.0017, TT:0.0042, ATo:0.0002, J6s:0.0002, J7s:0.0005, J8s:0.0003, J9s:0.0001, JTs:0.0004, JJ:0.1255, Q3s:0.0004, Q5s:0.0001, Q6s:0.0268, Q7s:0.007, Q9s:0.0015, QQ:0.0119, K2s:0.2995, K3s:0.2849, K4s:0.0035, K6s:0.0004, K7s:0.0892, K8s:0.0122, K9s:0.0008, KTs:0.2077, KJs:0.0158, KQs:0.7503, KK:0.9998, AKo:0.8132, A2s:0.0897, A3s:0.1026, A4s:0.1709, A5s:0.1302, A6s:0.0015, A7s:0.119, A8s:0.0019, ATs:0.0318, AJs:0.0443, AQs:0.0134, AKs:0.3517, AA:0.0053"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.5429, 32o:0.0001, 52o:0.0003, 92o:0.0002, A2o:0.0001, 33:0.5513, A3o:0.0001, 43s:0.0001, 44:0.4316, 94o:0.0001, K4o:0.0008, A4o:0.0001, 53s:0.0003, 54s:0.4746, 55:0.4985, 65o:0.0001, 75o:0.0004, 85o:0.0001, J5o:0.0001, A5o:0.0001, 62s:0.0001, 63s:0.0019, 65s:0.0017, 66:0.0001, 86o:0.0001, J6o:0.0001, K6o:0.0001, A6o:0.0002, 72s:0.0001, 73s:0.0034, 74s:0.0003, 75s:0.0013, 76s:0.0005, 77:0.2553, 87o:0.0005, 97o:0.0001, A7o:0.0002, 82s:0.0032, 83s:0.0023, 84s:0.0004, 88:0.0307, J8o:0.0001, Q8o:0.0006, 92s:0.001, 93s:0.018, 94s:0.2455, 95s:0.0003, 96s:0.0011, 97s:0.0002, 98s:0.0002, 99:0.0059, A9o:0.0001, T2s:0.0002, T3s:0.0027, T5s:0.065, T6s:0.0001, T7s:0.0062, T8s:0.0448, T9s:0.0002, TT:0.0667, JTo:0.0002, QTo:0.0001, KTo:0.0001, J2s:0.0001, J3s:0.0006, J4s:0.0012, J5s:0.0009, J6s:0.0004, J7s:0.0012, J8s:0.0032, J9s:0.0015, JTs:0.0132, JJ:0.082, QJo:0.0003, KJo:0.0024, AJo:0.0012, Q2s:0.0002, Q3s:0.0296, Q4s:0.1373, Q5s:0.0136, Q6s:0.0017, Q7s:0.0079, Q8s:0.0002, Q9s:0.0068, QTs:0.001, QJs:0.0002, QQ:0.0065, KQo:0.0001, AQo:0.0435, K2s:0.4011, K4s:0.0002, K5s:0.0035, K6s:0.0035, K7s:0.0013, K8s:0.0145, K9s:0.002, KTs:0.0179, KJs:0.0128, KQs:0.2488, KK:0.0004, AKo:0.3466, A2s:0.0005, A3s:0.014, A4s:0.1717, A6s:0.0097, A7s:0.0002, A8s:0.0008, A9s:0.0406, ATs:0.2001, AJs:0.0006, AQs:0.0283, AKs:0.4245, AA:0.0011"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.047, 32s:0.006, 42s:0.0001, 43s:0.0001, 62s:0.0003, 66:0.0001, 77:0.0614, 87o:0.0028, 83s:0.0131, 84s:0.0001, 88:0.0083, J8o:0.0809, 92s:0.0078, 94s:0.0027, 96s:0.0252, 97s:0.0308, 98s:0.0349, 99:0.017, K9o:0.0776, TT:0.001, J2s:0.0001, J3s:0.0532, J5s:0.0004, J6s:0.0311, J8s:0.0032, J9s:0.1237, JTs:0.0413, JJ:0.7054, QJo:0.3864, AJo:0.3475, Q2s:0.0041, Q3s:0.0322, Q8s:0.2365, Q9s:0.1421, QJs:0.1557, QQ:0.4572, KQo:0.0745, AQo:0.354, K2s:0.0076, K4s:0.1003, K5s:0.1629, K8s:0.0623, K9s:0.2198, KJs:0.0502, KQs:0.0141, KK:0.3505, AKo:0.1885, A3s:0.0172, A4s:0.2179, A6s:0.008, A7s:0.0002, A8s:0.0007, A9s:0.0011, ATs:0.1227, AJs:0.0569, AQs:0.028, AKs:0.0449, AA:0.8219"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0001, Q4o:0.0017, 52s:0.0001, 53s:0.0002, 54s:0.0048, 66:0.1442, A6o:0.0257, 72s:0.0003, 73s:0.0025, 76s:0.0001, 77:0.0065, A7o:0.0809, 84s:0.0001, 85s:0.0112, 87s:0.0296, 88:0.0114, 92s:0.0006, 93s:0.0631, 97s:0.0046, 99:0.0023, J9o:0.0001, T5s:0.0019, T6s:0.0002, T7s:0.0009, T8s:0.0006, TT:0.0539, QTo:0.0659, J4s:0.0001, J6s:0.0039, J8s:0.0004, J9s:0.0001, JTs:0.0099, JJ:0.0876, QJo:0.3272, KJo:0.0049, AJo:0.0252, Q2s:0.0306, Q3s:0.3643, Q4s:0.3766, Q5s:0.1637, Q6s:0.094, Q7s:0.006, Q8s:0.2991, Q9s:0.0686, QJs:0.541, QQ:0.5327, KQo:0.1898, AQo:0.466, K2s:0.0604, K4s:0.4024, K5s:0.2491, K6s:0.3861, K7s:0.1049, K8s:0.2927, K9s:0.3221, KTs:0.64, KJs:0.0301, KQs:0.732, KK:0.6487, AKo:0.3422, A2s:0.1963, A3s:0.6281, A4s:0.2246, A5s:0.1585, A6s:0.0234, A7s:0.6374, A8s:0.008, A9s:0.0441, ATs:0.0609, AJs:0.5138, AQs:0.8923, AKs:0.4804, AA:0.177"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|BTN:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.452, 62o:0.0002, 72o:0.0001, 92o:0.0006, T2o:0.0001, Q2o:0.0006, K2o:0.005, A2o:0.4587, 32s:0.6929, 33:0.0771, 53o:0.0003, 63o:0.0006, 83o:0.0029, Q3o:0.0006, K3o:0.0001, A3o:0.0018, 42s:0.0067, 43s:0.01, 44:0.0049, 54o:0.0003, 64o:0.0005, 74o:0.1709, 84o:0.001, 94o:0.0002, Q4o:0.0003, A4o:0.0001, 52s:0.0001, 53s:0.0021, 54s:0.0003, 55:0.0251, 75o:0.0005, 85o:0.0002, T5o:0.0001, Q5o:0.0006, K5o:0.0271, 62s:0.4281, 63s:0.1441, 64s:0.0146, 65s:0.3002, 66:0.4546, 86o:0.0001, 96o:0.0002, J6o:0.0003, Q6o:0.0015, K6o:0.0231, A6o:0.0001, 72s:0.0014, 73s:0.0013, 74s:0.0017, 75s:0.017, 76s:0.0007, 77:0.1517, T7o:0.0006, J7o:0.0004, Q7o:0.0001, A7o:0.0113, 82s:0.0014, 83s:0.0006, 85s:0.1838, 86s:0.1856, 87s:0.0363, 88:0.5799, 98o:0.0001, T8o:0.0001, J8o:0.0001, Q8o:0.0002, K8o:0.0001, A8o:0.0002, 92s:0.0002, 93s:0.0002, 94s:0.0403, 95s:0.0005, 96s:0.0012, 97s:0.0308, 99:0.0158, J9o:0.0002, A9o:0.0019, T2s:0.0007, T3s:0.044, T4s:0.0001, T5s:0.0018, T6s:0.1002, T7s:0.0451, T8s:0.0001, T9s:0.0001, TT:0.0002, JTo:0.0001, KTo:0.0004, ATo:0.0001, J3s:0.0137, J4s:0.1745, J5s:0.0002, J6s:0.0498, J7s:0.0002, J8s:0.0104, J9s:0.002, JTs:0.0518, JJ:0.1733, QJo:0.0001, KJo:0.0092, AJo:0.0004, Q2s:0.0007, Q3s:0.0004, Q4s:0.0114, Q5s:0.0002, Q6s:0.0003, Q7s:0.0185, Q8s:0.0001, Q9s:0.034, QTs:0.005, QJs:0.0028, QQ:0.0008, KQo:0.0073, K2s:0.0075, K3s:0.0165, K4s:0.041, K5s:0.0525, K6s:0.0006, K7s:0.0219, K8s:0.0025, K9s:0.028, KTs:0.4186, KJs:0.1339, KQs:0.1073, KK:0.0019, AKo:0.2311, A2s:0.2594, A3s:0.0142, A4s:0.0003, A5s:0.0855, A6s:0.0004, A7s:0.0007, A8s:0.0007, A9s:0.0021, ATs:0.0395, AJs:0.0243, AQs:0.0054, AKs:0.0672"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "Q2o:0.0479, 42s:0.0017, 43s:0.4338, 44:0.0001, J4o:0.0001, 53s:0.0136, 63s:0.1788, 65s:0.0271, 86o:0.0001, 74s:0.0001, 75s:0.3383, 76s:0.0211, 77:0.0444, 97o:0.0002, A7o:0.0306, 84s:0.0001, 86s:0.0015, 87s:0.3223, T8o:0.0015, J8o:0.0172, A8o:0.0002, 93s:0.0326, 94s:0.0554, 95s:0.0003, 96s:0.0006, 99:0.1126, A9o:0.0004, T2s:0.0034, T3s:0.0001, T4s:0.0437, T5s:0.0003, T7s:0.0046, T9s:0.0093, TT:0.2608, KTo:0.0024, ATo:0.1258, J2s:0.003, J3s:0.0007, J4s:0.1658, J5s:0.4898, J6s:0.126, J9s:0.0033, JTs:0.0016, JJ:0.2959, QJo:0.0001, AJo:0.0816, Q2s:0.0228, Q9s:0.0612, QTs:0.0275, QJs:0.0664, QQ:0.4669, AQo:0.025, K2s:0.0957, K3s:0.0002, K4s:0.0007, K5s:0.1302, K6s:0.052, K7s:0.3179, K8s:0.0101, K9s:0.0029, KJs:0.1632, KQs:0.0009, KK:0.1708, AKo:0.0878, A2s:0.105, A4s:0.0008, A5s:0.109, A7s:0.0008, A8s:0.2489, A9s:0.0005, ATs:0.0143, AJs:0.08, AQs:0.0314, AKs:0.2133, AA:0.954"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0032, Q3o:0.0232, 42s:0.2533, 44:0.0674, K4o:0.0916, 53s:0.0001, 55:0.0001, 65s:0.0022, 66:0.0155, 74s:0.509, 75s:0.0001, 76s:0.0002, A7o:0.0016, 85s:0.0413, 86s:0.0408, K8o:0.2299, A8o:0.0007, 94s:0.144, 95s:0.0351, 96s:0.1718, K9o:0.0007, A9o:0.0046, T2s:0.0001, T3s:0.0001, T6s:0.0442, T7s:0.0028, T9s:0.0002, TT:0.0241, KTo:0.0001, J2s:0.0007, J3s:0.0042, J4s:0.0272, J5s:0.0001, J6s:0.0991, J9s:0.1743, JTs:0.2675, JJ:0.411, QJo:0.186, KJo:0.1131, AJo:0.3498, Q2s:0.1364, Q3s:0.0005, Q4s:0.0001, Q5s:0.1344, Q7s:0.1447, Q8s:0.0298, Q9s:0.0327, QTs:0.0088, QJs:0.813, QQ:0.5322, KQo:0.9002, AQo:0.9612, K2s:0.3088, K3s:0.0001, K4s:0.8915, K5s:0.0005, K6s:0.0457, K8s:0.4961, K9s:0.0326, KTs:0.2984, KJs:0.171, KQs:0.45, KK:0.8273, AKo:0.6303, A2s:0.1317, A4s:0.7561, A5s:0.4573, A7s:0.5625, A8s:0.0375, A9s:0.797, ATs:0.3624, AJs:0.4443, AQs:0.9491, AKs:0.6071, AA:0.046"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9497, KK, AKo:0.9837, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9985, KK, AKo:0.9952, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0002, JJ:0.0003, QJs:0.0001, QQ:0.3666, KK, AKo:0.5188, A4s:0.0006, AKs:0.9429, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0469, 55:0.025, 65s:0.0851, 66:0.0082, 76s:0.007, 88:0.0761, TT:0.0295, JJ:0.0202, Q5s:0.0001, QQ:0.6685, AQo:0.0585, K5s:0.1017, K8s:0.0115, KQs:0.0098, KK:0.0074, A2s:0.0001, A3s:0.0405, A4s:0.0263, A5s:0.0014, A6s:0.0001, A8s:0.0257, A9s:0.0421, ATs:0.16, AJs:0.5567, AQs:0.5136, AA:0.0472"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "33:0.03, K3o:0.0146, A3o:0.0567, 44:0.0416, K4o:0.0186, A4o:0.0787, K5o:0.0001, A5o:0.0014, 64s:0.0006, 65s:0.0005, A6o:0.0007, 73s:0.0009, A7o:0.042, 87s:0.0183, 88:0.0476, Q8o:0.0001, K8o:0.0139, A8o:0.0056, 92s:0.0001, 95s:0.0001, 97s:0.0295, 99:0.0001, A9o:0.0194, T9s:0.007, TT:0.0005, QTo:0.0001, KTo:0.0059, ATo:0.0268, J4s:0.0004, J5s:0.0008, JTs:0.0004, JJ:0.0215, AJo:0.0202, Q7s:0.001, Q9s:0.0001, QJs:0.0007, QQ:0.0035, KQo:0.0002, AQo:0.0744, K2s:0.1282, K3s:0.0951, K4s:0.0001, K5s:0.0121, K6s:0.1684, K7s:0.0434, K8s:0.0511, K9s:0.0064, KTs:0.1986, KJs:0.1375, KQs:0.0006, KK:0.0038, AKo:0.0206, A2s:0.0334, A3s:0.1091, A4s:0.1019, A5s:0.0347, A6s:0.0034, A7s:0.0014, A8s:0.0178, A9s:0.1137, ATs:0.4174, AJs:0.0655, AQs:0.3489, AKs:0.3122, AA:0.9528"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0004, A3o:0.0004, 43s:0.0001, 44:0.0003, A4o:0.0021, 54s:0.0029, 55:0.0008, K5o:0.0011, A5o:0.0084, 64s:0.0027, 65s:0.0138, A6o:0.001, 75s:0.0001, 77:0.0004, 82s:0.0002, 85s:0.0001, 86s:0.0001, 87s:0.1233, 88:0.0352, 94s:0.0003, 95s:0.0004, 96s:0.0055, 97s:0.0196, A9o:0.0048, T7s:0.0001, TT:0.0392, KTo:0.0051, ATo:0.0016, J2s:0.0078, J5s:0.0003, J7s:0.0002, J9s:0.0007, JJ:0.0578, KJo:0.0014, AJo:0.0175, Q4s:0.0009, Q5s:0.0013, Q9s:0.0033, QJs:0.0028, QQ:0.0431, KQo:0.0045, AQo:0.0004, K3s:0.0039, K4s:0.2215, K5s:0.3298, K6s:0.4782, K7s:0.0617, K8s:0.0433, K9s:0.6526, KTs:0.6036, KJs:0.3883, KQs:0.4178, KK:0.9889, AKo:0.9794, A2s:0.0413, A3s:0.4579, A4s:0.2234, A5s:0.3264, A6s:0.2751, A7s:0.5571, A8s:0.944, A9s:0.4636, ATs:0.1686, AJs:0.1463, AQs:0.035, AKs:0.6877"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0165, 53s:0.0177, 54s:0.1613, 55:0.2071, 64s:0.01, 65s:0.2602, 66:0.4559, 75s:0.0018, 76s:0.1179, 77:0.2302, 87s:0.1223, 88:0.3366, 98s:0.0679, 99:0.0004, T9s:0.0827, TT:0.0782, JJ:0.2419, QQ:0.5996, AQo:0.1422, K3s:0.5553, K5s:0.2304, K6s:0.2905, K7s:0.1648, K8s:0.0001, KTs:0.1883, KJs:0.2196, KQs:0.1287, KK:0.0001, A2s:0.0027, A3s:0.054, A5s:0.3282, A7s:0.0582, A8s:0.0001, A9s:0.1187, ATs:0.236, AJs:0.6604, AQs:0.4386"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "43s:0.0001, KQo:0.0001, K6s:0.0001, K8s:0.0001, K9s:0.0001, KK:0.001, A5s:0.0001, AKs:0.0296, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0803, 77:0.008, 86s:0.0001, 88:0.1124, 97s:0.0001, 99:0.0002, T8s:0.0001, TT:0.1026, JJ:0.0849, QJs:0.0001, QQ:0.3225, AQo:0.3447, K5s:0.117, K6s:0.0801, K7s:0.1573, K8s:0.049, K9s:0.1497, KTs:0.2277, KJs:0.0767, KQs:0.1287, KK:0.9989, AKo, A2s:0.3687, A3s:0.4705, A4s:0.1742, A5s:0.428, A6s:0.0382, A7s:0.0111, A8s:0.2547, A9s:0.2845, ATs:0.4368, AJs:0.0025, AQs:0.535, AKs:0.9704"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.0078, 62s:0.0017, 63s:0.0004, 65s:0.0066, 76s:0.0001, A7o:0.0501, 88:0.0037, 98s:0.0052, J2s:0.0066, J5s:0.0047, JJ:0.0175, AJo:0.01, Q8s:0.0001, QJs:0.0081, QQ:0.1088, AQo:0.0019, K3s:0.0035, K5s:0.0253, K6s:0.0453, K7s:0.0018, K8s:0.0001, K9s:0.0003, KTs:0.0174, KJs:0.0077, KK:0.0183, AKo:0.013, A2s:0.0145, A3s:0.0262, A4s:0.0014, A5s:0.0026, A6s:0.0009, A8s:0.1395, A9s:0.0002, ATs:0.0087, AJs:0.0021, AQs:0.4365, AKs:0.0003, AA:0.6642"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0075, 52s:0.0005, 53s:0.0232, 55:0.0135, A5o:0.0996, 63s:0.0021, 65s:0.0043, 66:0.0001, 74s:0.0007, 75s:0.0165, 76s:0.2108, A7o:0.0011, 82s:0.0001, 87s:0.0295, 88:0.0332, A8o:0.0001, 95s:0.005, 97s:0.0011, T2s:0.002, T6s:0.0003, T8s:0.0045, TT:0.0047, ATo:0.0001, J9s:0.0018, JTs:0.0011, JJ:0.1453, KJo:0.0021, AJo:0.0231, Q4s:0.0021, Q7s:0.0019, Q8s:0.0082, Q9s:0.0041, QJs:0.0093, QQ:0.0408, AQo:0.0001, K3s:0.0393, K4s:0.345, K5s:0.1109, K6s:0.5052, K7s:0.0238, K8s:0.0116, KTs:0.326, KJs:0.1017, KQs:0.2614, KK:0.9817, AKo:0.9765, A2s:0.307, A3s:0.0773, A4s:0.3056, A5s:0.1653, A6s:0.0038, A7s:0.0148, A8s:0.1685, A9s:0.2628, ATs:0.2823, AJs:0.3027, AQs:0.2498, AKs:0.9944, AA:0.3357"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|CO:CALL@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0788, 32o:0.0002, J2o:0.0008, Q2o:0.0002, A2o:0.0555, 33:0.8804, 63o:0.0001, 73o:0.0002, 93o:0.0001, K3o:0.0002, 42s:0.0011, 43s:0.0136, 44:0.3927, 54o:0.0035, 84o:0.0002, 94o:0.0018, T4o:0.0005, J4o:0.0003, K4o:0.0008, 52s:0.0011, 53s:0.4316, 54s:0.0007, 55:0.461, 85o:0.0001, 62s:0.0061, 63s:0.0062, 64s:0.0057, 65s:0.0112, 66:0.001, 76o:0.0005, 86o:0.0001, 96o:0.0001, J6o:0.0001, Q6o:0.1912, 72s:0.0001, 74s:0.0012, 75s:0.0603, 76s:0.027, 77:0.4593, 87o:0.0096, K7o:0.0057, 82s:0.0677, 83s:0.0077, 84s:0.0027, 85s:0.0457, 86s:0.3751, 87s:0.112, 88:0.2792, T8o:0.0002, 93s:0.0039, 94s:0.4586, 95s:0.1225, 96s:0.0002, 97s:0.0008, 98s:0.0002, 99:0.0047, T9o:0.0001, K9o:0.0001, T2s:0.0003, T3s:0.0009, T4s:0.0006, T5s:0.0005, T6s:0.0045, T7s:0.0044, T9s:0.0843, TT:0.5714, JTo:0.0003, KTo:0.0001, J2s:0.0001, J3s:0.0115, J4s:0.0006, J5s:0.0043, J6s:0.0786, J7s:0.0262, J8s:0.0212, JTs:0.0006, JJ:0.0001, QJo:0.0001, KJo:0.0005, AJo:0.0006, Q2s:0.0016, Q3s:0.0702, Q4s:0.1094, Q5s:0.0294, Q6s:0.0036, Q7s:0.0011, Q8s:0.0059, Q9s:0.0005, QTs:0.0059, QJs:0.0108, QQ:0.0067, KQo:0.0648, AQo:0.3002, K2s:0.0008, K3s:0.0048, K4s:0.0083, K5s:0.0002, K6s:0.0135, K7s:0.0095, K8s:0.0883, K9s:0.0034, KTs:0.0485, KJs:0.0179, KQs:0.0104, KK:0.0013, AKo:0.0139, A2s:0.0059, A3s:0.0015, A4s:0.1587, A5s:0.5726, A6s:0.016, A7s:0.1237, A8s:0.4765, A9s:0.0031, ATs:0.005, AJs:0.0566, AQs:0.2466, AKs:0.017, AA:0.0002"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "33:0.0001, K3o:0.0754, 43s:0.0246, J4o:0.0377, Q4o:0.0265, 52s:0.0001, 54s:0.0654, 62s:0.0001, 63s:0.036, 64s:0.0552, 76o:0.0079, Q6o:0.0936, A6o:0.4047, 72s:0.1281, 75s:0.021, 76s:0.0061, 82s:0.0003, 83s:0.0001, 86s:0.0009, 87s:0.0821, 95s:0.2475, 98s:0.0265, 99:0.0727, T3s:0.0591, T4s:0.0006, T6s:0.0007, T7s:0.0047, T9s:0.0003, TT:0.0614, J2s:0.0001, J3s:0.0003, J4s:0.0003, J5s:0.0008, J8s:0.0006, J9s:0.1172, JJ:0.1895, QJo:0.0002, KJo:0.0018, AJo:0.2388, Q3s:0.0434, Q4s:0.0496, Q5s:0.0039, Q6s:0.1096, Q8s:0.1032, Q9s:0.1425, QTs:0.0726, QJs:0.0066, QQ:0.4256, KQo:0.184, AQo:0.2288, K2s:0.0828, K3s:0.0002, K4s:0.0038, K6s:0.0049, K7s:0.0005, K8s:0.1081, K9s:0.0875, KTs:0.1932, KJs:0.0566, KK:0.6509, AKo:0.0234, A2s:0.1637, A4s:0.008, A5s:0.0112, A6s:0.512, A8s:0.0328, A9s:0.0001, ATs:0.1955, AJs:0.1325, AQs:0.2292, AKs:0.2066, AA:0.8659"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, 43s:0.0008, 55:0.0024, 62s:0.0001, 63s:0.0017, 76s:0.0201, K7o:0.0003, 83s:0.0005, 84s:0.0072, 88:0.0007, 98s:0.0311, 99:0.0318, T8s:0.0033, TT:0.0111, QTo:0.0044, ATo:0.0131, J2s:0.0001, J3s:0.0024, J4s:0.017, J5s:0.1027, J6s:0.043, J7s:0.0006, J8s:0.0001, J9s:0.0782, JTs:0.0003, JJ:0.7805, QJo:0.5721, KJo:0.5156, AJo:0.1174, Q2s:0.0028, Q3s:0.2853, Q5s:0.0021, Q8s:0.0622, Q9s:0.0772, QTs:0.111, QJs:0.9457, QQ:0.5672, KQo:0.2299, AQo:0.1617, K2s:0.3643, K3s:0.188, K4s:0.5442, K5s:0.1121, K6s:0.0871, K7s:0.4367, K8s:0.5013, K9s:0.4456, KTs:0.1362, KJs:0.7305, KQs:0.966, KK:0.3478, AKo:0.9563, A3s:0.0173, A4s:0.4781, A5s:0.0031, A6s:0.1148, A7s:0.1021, A8s:0.0064, A9s:0.0541, ATs:0.166, AJs:0.7076, AQs:0.3896, AKs:0.4566, AA:0.1339"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "86s:0.0001, T4s:0.0001, TT:0.0001, QQ:0.0001, KTs:0.0001, KK:0.0011, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 65s:0.0001, 83s:0.0001, 93s:0.0001, 94s:0.0001, 96s:0.0001, 98s:0.0001, T2s:0.0001, T8s:0.0001, J5s:0.0012, JJ:0.0002, K6s:0.0001, K8s:0.0002, KJs:0.0001, KK:0.1663, AKo:0.0027, A4s:0.0001, A8s:0.0001, ATs:0.0003, AJs:0.0001, AQs:0.0663, AKs:0.1003, AA:0.0061"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0024, 33:0.0002, A3o:0.0026, 42s:0.0001, A4o:0.014, 52s:0.0002, 54s:0.0002, 55:0.0003, A5o:0.0001, 65s:0.0001, 75s:0.0001, 77:0.0076, 86s:0.0021, 87s:0.0065, 88:0.0033, A8o:0.0009, 97s:0.0013, 98s:0.0035, T8s:0.0008, TT:0.0001, ATo:0.0002, J8s:0.0121, J9s:0.0001, JJ:0.0004, Q2s:0.0001, QQ:0.0024, AQo:0.0026, K4s:0.0004, KTs:0.1349, KQs:0.0002, KK:0.0894, AKo:0.9939, A2s:0.6277, A3s:0.0254, A4s:0.5192, A5s:0.9098, A6s:0.0698, A7s:0.5202, A8s:0.391, A9s:0.0025, ATs:0.0529, AJs:0.1669, AQs:0.0165, AKs:0.8982, AA:0.9939"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1987, A2o:0.0014, 32s:0.0006, 33:0.3519, 43o:0.0002, A3o:0.0145, 42s:0.0002, 43s:0.0368, 44:0.2936, A4o:0.0117, 52s:0.0155, 53s:0.0038, 54s:0.0955, 55:0.2484, 65o:0.0651, 85o:0.0001, A5o:0.026, 62s:0.0039, 63s:0.11, 64s:0.1694, 65s:0.1653, 66:0.4438, 76o:0.0031, A6o:0.0163, 72s:0.0001, 74s:0.0011, 75s:0.1911, 76s:0.0669, 77:0.3975, 87o:0.0338, A7o:0.0266, 82s:0.0015, 83s:0.0051, 84s:0.0005, 85s:0.0022, 86s:0.0067, 87s:0.0825, 88:0.6802, 98o:0.0316, A8o:0.0443, 93s:0.0001, 95s:0.016, 96s:0.0925, 97s:0.2571, 98s:0.1935, 99:0.2734, A9o:0.0499, T2s:0.0001, T5s:0.0016, T6s:0.0036, T7s:0.0011, T8s:0.0325, T9s:0.1092, TT:0.2347, JTo:0.001, QTo:0.0001, ATo:0.0339, J2s:0.0039, J3s:0.0029, J5s:0.0002, J6s:0.0002, J7s:0.005, J8s:0.0066, J9s:0.1744, JTs:0.0425, JJ:0.3646, AJo:0.1241, Q2s:0.0001, Q3s:0.0004, Q4s:0.0026, Q5s:0.0002, Q7s:0.0002, Q8s:0.0001, Q9s:0.084, QTs:0.0001, QJs:0.0003, QQ:0.9691, KQo:0.0001, AQo:0.5353, K2s:0.0055, K3s:0.0001, K6s:0.0029, K7s:0.0009, K8s:0.0023, K9s:0.0041, KTs:0.3492, KJs:0.0718, KQs:0.0004, KK:0.3018, AKo:0.0093, A2s:0.0182, A3s:0.0451, A4s:0.009, A5s:0.0007, A6s:0.0014, A7s:0.0536, A8s:0.1145, A9s:0.0513, ATs:0.3268, AJs:0.1676, AQs:0.911, AKs:0.014, AA:0.0208"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1149, A2o:0.065, 32s:0.0006, 33:0.1743, 53o:0.0003, A3o:0.2727, 42s:0.0001, 43s:0.1836, 44:0.3628, 84o:0.0001, A4o:0.2963, 54s:0.0425, 55:0.5313, 65o:0.0003, A5o:0.255, 62s:0.0008, 63s:0.0066, 64s:0.1047, 65s:0.6017, 66:0.5402, 86o:0.0001, A6o:0.0976, 72s:0.0003, 73s:0.0022, 74s:0.0048, 75s:0.0508, 76s:0.476, 77:0.4663, 87o:0.0001, A7o:0.2166, 82s:0.0017, 83s:0.0045, 84s:0.0007, 85s:0.0037, 86s:0.0038, 87s:0.1818, 88:0.2368, T8o:0.0002, A8o:0.0031, 92s:0.001, 93s:0.0001, 95s:0.0017, 96s:0.0033, 97s:0.0392, 98s:0.0886, 99:0.578, A9o:0.056, T3s:0.0007, T4s:0.0004, T6s:0.0002, T7s:0.0001, T8s:0.0179, T9s:0.3532, TT:0.4274, JTo:0.0002, ATo:0.0083, J2s:0.0007, J3s:0.0012, J6s:0.0001, J7s:0.0015, J8s:0.0001, J9s:0.0179, JTs:0.0975, JJ:0.1087, KJo:0.0001, AJo:0.1007, Q5s:0.0001, Q7s:0.0001, QTs:0.0002, QQ:0.0002, AQo:0.0003, K2s:0.0007, K3s:0.0003, K4s:0.0001, K5s:0.0011, K8s:0.0008, K9s:0.0003, KJs:0.0003, KK:0.6459, AKo:0.9907, A2s:0.9555, A3s:0.8725, A4s:0.9658, A5s:0.9993, A6s:0.944, A7s:0.8324, A8s:0.7734, A9s:0.9094, ATs:0.6484, AJs:0.8304, AQs:0.0886, AKs:0.986, AA:0.9792"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, JJ:0.0004, Q5s:0.0001, K4s:0.0001, K9s:0.0001, KK:0.9999, AKo:0.0011, A2s:0.0001, A7s:0.0001, AJs:0.0003, AQs:0.0001, AKs:0.0085, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0004, TT:0.0001, JJ:0.0005, QQ:0.0003, KK, AKo:0.1148, AQs:0.0003, AKs:0.9928, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0|HJ:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.512, A2o:0.0093, 32s:0.0162, 33:0.4873, A3o:0.0074, 43s:0.2647, 44:0.8677, A4o:0.0065, 52s:0.0085, 53s:0.2964, 54s:0.9864, 55:0.9536, A5o:0.0158, 62s:0.0095, 63s:0.203, 64s:0.9786, 65s:0.8688, 66:0.9416, A6o:0.0044, 73s:0.0008, 74s:0.0667, 75s:0.2077, 76s:0.7736, 77:0.8553, A7o:0.0038, 82s:0.0006, 83s:0.0003, 84s:0.0162, 85s:0.0343, 86s:0.8359, 87s:0.6936, 88:0.9284, 98o:0.0006, 96s:0.5531, 97s:0.4516, 98s:0.9127, 99:0.9309, A9o:0.0014, T2s:0.0038, T5s:0.0002, T6s:0.0205, T7s:0.0149, T8s:0.7987, T9s:0.8495, TT:0.9754, QTo:0.0001, ATo:0.1448, J2s:0.0001, J5s:0.0297, J6s:0.0372, J7s:0.0419, J8s:0.8262, J9s:0.4262, JTs:0.958, JJ:0.9704, AJo:0.3119, Q2s:0.0007, Q3s:0.0001, Q5s:0.0003, Q6s:0.001, Q7s:0.0001, Q9s:0.0234, QTs:0.3587, QJs:0.7049, QQ:0.9951, KQo:0.0001, AQo:0.9818, K3s:0.0096, K4s:0.0021, K5s:0.0135, K6s:0.1319, K7s:0.074, K8s:0.0272, K9s:0.0899, KTs:0.1791, KJs:0.7735, KQs:0.0264, KK:0.444, A2s:0.0001, A3s:0.0112, A4s:0.0072, A5s:0.0519, A6s:0.002, A7s:0.1328, A8s:0.0266, A9s:0.012, ATs:0.2451, AJs:0.2293, AQs:0.9875, AKs:0.0006, AA:0.1643"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4765, A2o:0.2331, 33:0.5116, A3o:0.4249, 42s:0.0005, 43s:0.0019, 44:0.1293, A4o:0.5345, 52s:0.0015, 53s:0.0078, 54s:0.0053, 55:0.0459, A5o:0.3292, 62s:0.0003, 63s:0.0007, 64s:0.0006, 65s:0.1224, 66:0.057, A6o:0.0272, 74s:0.0004, 75s:0.0008, 76s:0.1729, 77:0.1431, 87o:0.0001, A7o:0.0042, 83s:0.0001, 85s:0.0053, 86s:0.0873, 87s:0.168, 88:0.0716, A8o:0.1956, 97s:0.0428, 98s:0.0796, 99:0.0685, A9o:0.0514, T7s:0.0015, T8s:0.0104, T9s:0.0989, TT:0.024, ATo:0.2262, J3s:0.0001, J7s:0.0002, J8s:0.0004, J9s:0.1074, JTs:0.0025, JJ:0.0291, AJo:0.5916, Q6s:0.0001, QTs:0.0007, QJs:0.0001, QQ:0.0049, AQo:0.0182, K4s:0.0001, K6s:0.0025, K9s:0.0002, KK:0.556, AKo, A2s:0.9996, A3s:0.9869, A4s:0.9926, A5s:0.9465, A6s:0.9971, A7s:0.8539, A8s:0.9719, A9s:0.9864, ATs:0.7537, AJs:0.7706, AQs:0.0125, AKs:0.9994, AA:0.8357"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:3BET@7.0|HJ:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.9664, JJ, QQ, KK, AKo, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0035, JJ:0.0001, QQ, KK, AKo:0.9999, AQs:0.6791, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, JJ:0.0066, QQ, KK, AKo, AQs:0.9375, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0004, 44:0.0024, 53s:0.1124, 54s:0.3283, 55:0.0462, 65s:0.0174, 66:0.1715, 75s:0.0309, 76s:0.0002, 77:0.0498, 87s:0.0055, 88:0.162, 99:0.1055, T8s:0.0002, TT:0.0401, JTs:0.0047, JJ:0.0826, AJo:0.001, Q6s:0.0006, QJs:0.0002, QQ:0.7879, AQo:0.1288, K2s:0.0047, K5s:0.003, K7s:0.0615, K8s:0.0197, KTs:0.0405, KJs:0.1535, KQs:0.6312, KK:0.0805, A2s:0.0011, A3s:0.0014, A4s:0.0015, A5s:0.0152, A6s:0.0014, A7s:0.0048, A8s:0.5633, A9s:0.2033, ATs:0.341, AJs:0.2165, AQs:0.8994, AKs:0.0076, AA:0.0002"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0096, A3o:0.1295, 52s:0.0011, A5o:0.1427, 65s:0.0001, 66:0.005, A6o:0.0431, A7o:0.0706, 84s:0.0001, 85s:0.0001, A8o:0.0059, A9o:0.0012, T7s:0.0001, ATo:0.0717, J9s:0.0001, JJ:0.0149, AJo:0.317, Q2s:0.0006, Q4s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0002, QQ:0.0002, AQo:0.1855, K3s:0.0186, K4s:0.0002, K5s:0.1006, K7s:0.1143, K9s:0.0009, KTs:0.0007, KJs:0.003, KQs:0.0007, KK:0.0064, AKo:0.0227, A2s:0.0017, A3s:0.3804, A4s:0.0489, A5s:0.005, A6s:0.0458, A7s:0.0221, A8s:0.0185, A9s:0.0566, ATs:0.0732, AJs:0.0102, AQs:0.0305, AKs:0.455, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0093, A3o:0.001, 44:0.0004, A5o:0.0384, 62s:0.0001, 63s:0.0005, 65s:0.0014, 66:0.0001, A6o:0.0001, 74s:0.0001, 76s:0.004, 77:0.0012, K7o:0.0003, A7o:0.0091, 84s:0.0002, 87s:0.0005, 88:0.001, A8o:0.001, 96s:0.0004, 97s:0.0025, K9o:0.0013, T3s:0.0001, T7s:0.0001, T8s:0.0022, TT:0.0011, ATo:0.0015, J7s:0.0001, JJ:0.0123, AJo:0.0306, Q2s:0.0015, Q4s:0.0005, QJs:0.0002, QQ:0.0021, KQo:0.0004, AQo:0.0005, K2s:0.0117, K3s:0.0082, K4s:0.0333, K5s:0.2755, K6s:0.014, K7s:0.315, K8s:0.0159, K9s:0.0658, KTs:0.286, KJs:0.5874, KQs:0.0507, KK:0.9132, AKo:0.9773, A2s:0.996, A3s:0.178, A4s:0.8821, A5s:0.9748, A6s:0.0522, A7s:0.3526, A8s:0.219, A9s:0.4211, ATs:0.5776, AJs:0.7658, AQs:0.0463, AKs:0.5373"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0012, 44:0.0014, 54s:0.0002, 65s:0.4766, 66:0.3905, 77:0.2525, 88:0.7651, 99:0.3338, T9s:0.0111, TT:0.2915, ATo:0.0134, JJ:0.764, AJo:0.0333, QJs:0.0025, QQ:0.9921, KQo:0.0001, AQo:0.5465, K4s:0.1172, K5s:0.0438, K6s:0.008, K7s:0.3157, K8s:0.049, K9s:0.3334, KTs:0.5874, KJs:0.6003, KQs:0.4352, AKo:0.0001, A3s:0.1072, A4s:0.0916, A5s:0.1255, A6s:0.022, A7s:0.0876, A8s:0.6145, A9s:0.1254, ATs:0.6484, AJs:0.7688, AQs:0.8386, AKs:0.0004"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.0005, A2o:0.0008, K5o:0.0066, A5o:0.0014, A7o:0.002, ATo:0.0009, J5s:0.0008, JJ:0.0001, KQo:0.0009, K2s:0.0008, K5s:0.0069, K6s:0.0051, K8s:0.0008, KQs:0.0033, KK:0.0203, AKo:0.0041, A7s:0.0006, AQs:0.0103, AKs:0.0109, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, A2o:0.0026, 33:0.0124, A3o:0.0001, 44:0.0048, A4o:0.0109, 55:0.0436, A5o:0.2949, 64s:0.0001, 65s:0.0037, 66:0.0028, 74s:0.0002, 77:0.0036, A7o:0.0001, 87s:0.0001, 88:0.0001, 97s:0.0002, 98s:0.0001, 99:0.0098, A9o:0.0003, T8s:0.0002, TT:0.1328, ATo:0.0081, J3s:0.0003, J8s:0.0001, JJ:0.1546, AJo:0.0004, Q3s:0.0004, Q4s:0.0006, Q5s:0.0001, Q9s:0.0007, QJs:0.0001, QQ:0.0075, KQo:0.0029, AQo:0.2714, K2s:0.0039, K3s:0.0004, K4s:0.0048, K5s:0.3853, K6s:0.0586, K7s:0.0704, K8s:0.0281, K9s:0.0716, KTs:0.3112, KJs:0.3915, KQs:0.3643, KK:0.9797, AKo:0.9958, A2s:0.9308, A3s:0.8132, A4s:0.9003, A5s:0.8708, A6s:0.824, A7s:0.8333, A8s:0.3379, A9s:0.8658, ATs:0.3473, AJs:0.2303, AQs:0.1508, AKs:0.9887, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BB:3BET@7.0|LJ:4BET@11.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8224, A2o:0.0016, 32s:0.0109, 33:0.9431, A3o:0.045, 42s:0.0394, 43s:0.7071, 44:0.7933, 54o:0.0032, A4o:0.0391, 52s:0.0017, 53s:0.8418, 54s:0.9182, 55:0.9906, 65o:0.1257, 75o:0.0005, A5o:0.2596, 62s:0.0121, 63s:0.7581, 64s:0.8826, 65s:0.5432, 66:0.9203, 76o:0.142, 86o:0.0038, K6o:0.0001, A6o:0.0491, 73s:0.0225, 74s:0.4489, 75s:0.7587, 76s:0.7205, 77:0.944, 87o:0.0056, 97o:0.0007, A7o:0.144, 82s:0.0011, 83s:0.0012, 84s:0.1711, 85s:0.264, 86s:0.9806, 87s:0.6855, 88:0.9487, 98o:0.0172, T8o:0.0011, J8o:0.0001, A8o:0.3975, 92s:0.0001, 93s:0.0028, 94s:0.0027, 95s:0.0351, 96s:0.126, 97s:0.5702, 98s:0.9075, 99:0.9464, T9o:0.085, J9o:0.0051, Q9o:0.0053, K9o:0.0004, A9o:0.9699, T2s:0.0004, T3s:0.0018, T4s:0.0154, T5s:0.0029, T6s:0.0337, T7s:0.9187, T8s:0.961, T9s:0.9912, TT:0.9566, JTo:0.2397, QTo:0.0814, KTo:0.0018, ATo:0.9998, J2s:0.0093, J3s:0.0001, J4s:0.0312, J6s:0.0004, J7s:0.0298, J8s:0.8484, J9s:0.3516, JTs:0.9888, JJ:0.9903, QJo:0.0415, KJo:0.0151, AJo:0.9998, Q2s:0.0616, Q3s:0.1025, Q4s:0.2705, Q5s:0.1169, Q6s:0.4504, Q7s:0.3774, Q8s:0.9895, Q9s:0.5297, QTs:0.9937, QJs:0.9982, QQ:0.997, KQo:0.0942, AQo:0.9999, K2s:0.0614, K3s:0.0157, K4s:0.7108, K5s:0.3894, K6s:0.6969, K7s:0.4032, K8s:0.029, K9s:0.1604, KTs:0.9974, KJs:0.8509, KQs:0.9999, KK:0.9943, AKo:0.2365, A2s:0.0047, A3s:0.0238, A4s:0.0013, A5s:0.3256, A6s:0.0003, A7s:0.0583, A8s:0.051, A9s:0.9504, ATs:0.9999, AJs:0.9946, AQs:0.9969, AKs:0.1799, AA:0.1827"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1775, A2o:0.2372, 32s:0.0084, 33:0.0563, A3o:0.1042, 42s:0.0032, 43s:0.0327, 44:0.2065, 54o:0.0046, A4o:0.8375, 52s:0.0016, 53s:0.0062, 54s:0.0669, 55:0.0082, 65o:0.0009, A5o:0.3921, 62s:0.0007, 63s:0.003, 64s:0.1137, 65s:0.4561, 66:0.0797, 76o:0.0319, 86o:0.0035, A6o:0.3255, 72s:0.0001, 73s:0.0041, 74s:0.1335, 75s:0.0444, 76s:0.2792, 77:0.0556, 87o:0.0174, A7o:0.5553, 84s:0.0007, 85s:0.0035, 86s:0.0154, 87s:0.3137, 88:0.0507, A8o:0.055, 92s:0.0002, 93s:0.0007, 94s:0.0003, 95s:0.0016, 96s:0.0732, 97s:0.0509, 98s:0.0894, 99:0.0534, T9o:0.0001, A9o:0.0013, T2s:0.0002, T4s:0.0001, T6s:0.0031, T7s:0.0005, T8s:0.0288, T9s:0.0061, TT:0.0434, ATo:0.0001, J4s:0.0023, J5s:0.0003, J6s:0.0001, J9s:0.0175, JTs:0.0012, JJ:0.0097, AJo:0.0002, Q2s:0.0001, Q3s:0.0006, Q4s:0.0201, Q5s:0.0006, Q6s:0.0009, Q9s:0.0008, QTs:0.0015, QJs:0.0004, QQ:0.003, AQo:0.0001, K2s:0.0026, K3s:0.0029, K4s:0.001, K5s:0.0002, K6s:0.0002, K7s:0.0013, K8s:0.0018, K9s:0.0001, KTs:0.0011, KK:0.0057, AKo:0.7635, A2s:0.9951, A3s:0.9758, A4s:0.998, A5s:0.6743, A6s:0.9994, A7s:0.9415, A8s:0.949, A9s:0.0495, AJs:0.0054, AQs:0.0031, AKs:0.8201, AA:0.8173"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BB:3BET@7.0|LJ:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.4426, TT:0.9244, JJ:0.9874, QQ:0.9938, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@37.25|BB:CALL@36.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 65s:0.0001, JJ:0.0002, KQs:0.0001, KK:0.0009, AKo:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "J7s:0.0001, JJ:0.0002, Q7s:0.0001, QQ:0.0001, K4s:0.0001, KK:0.0002, A4s:0.0001, AJs:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@37.25|SB:CALL@36.75",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0008, 73o:0.0002, 83o:0.0001, T3o:0.0001, 42s:0.0002, 43s:0.0003, 44:0.0007, K4o:0.0001, 53s:0.0008, 55:0.0002, 65o:0.0001, 75o:0.0001, 85o:0.0002, K5o:0.0001, 65s:0.0002, Q6o:0.0001, A6o:0.0001, 72s:0.0001, 73s:0.0003, 75s:0.0001, 77:0.0001, A7o:0.0001, 82s:0.0006, 84s:0.0009, 86s:0.0002, 87s:0.0009, 88:0.0006, 98o:0.0001, K8o:0.0001, 92s:0.0002, 93s:0.0003, 95s:0.0001, 96s:0.0016, 97s:0.0002, 98s:0.0155, T2s:0.0001, T8s:0.0002, ATo:0.0001, J2s:0.0002, J3s:0.0002, J6s:0.0002, J9s:0.001, JJ:0.0056, QJo:0.0001, AJo:0.0001, Q2s:0.0001, Q6s:0.0005, Q7s:0.0001, Q9s:0.0001, QJs:0.0003, AQo:0.0001, K3s:0.0002, K5s:0.0009, K6s:0.0005, K7s:0.0028, KK:0.0207, AKo:0.0002, A5s:0.0008, A8s:0.0007, ATs:0.0025, AQs:0.0068, AKs:0.0122, AA:0.7623"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, A4o:0.0001, 53s:0.0001, 65s:0.0001, 66:0.0013, 72s:0.0004, 73s:0.0004, 77:0.0001, 86s:0.0001, 96s:0.0001, 99:0.0014, T5s:0.0001, T9s:0.0001, KTo:0.0001, J4s:0.0001, J8s:0.0001, QQ:0.0002, AQo:0.0075, K2s:0.0001, K7s:0.0001, KTs:0.0001, KQs:0.0002, KK:0.0402, AKo:0.1697, A2s:0.0001, A3s:0.0001, A4s:0.0069, A6s:0.0002, A7s:0.0001, A9s:0.0001, ATs:0.0005, AQs:0.0001, AKs:0.0575, AA:0.5266"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 32s:0.0001, 33:0.0016, A3o:0.0001, 43s:0.0001, 53s:0.0001, 54s:0.0001, K5o:0.0001, 62s:0.0001, 66:0.0011, 72s:0.0001, 73s:0.0002, 75s:0.0001, 77:0.0002, A7o:0.0174, 83s:0.0002, 85s:0.002, 87s:0.0001, 93s:0.0001, 99:0.0147, A9o:0.0001, T6s:0.0001, T7s:0.0002, T9s:0.0546, ATo:0.0001, J4s:0.0001, JTs:0.0001, JJ:0.0001, AJo:0.0019, Q5s:0.0001, Q6s:0.0001, Q7s:0.0001, Q8s:0.0001, Q9s:0.0033, QTs:0.0001, QJs:0.0001, QQ:0.0001, AQo:0.002, K2s:0.0001, K3s:0.0337, K5s:0.0002, K7s:0.1141, K8s:0.0002, KTs:0.5695, KJs:0.0583, KQs:0.0005, KK:0.9054, AKo:0.4159, A2s:0.7045, A3s:0.013, A4s:0.1758, A6s:0.0034, A7s:0.1396, A8s:0.0762, A9s:0.1373, ATs:0.0032, AJs:0.118, AQs:0.0756, AKs:0.7615, AA:0.4734"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3218, 33:0.6449, A3o:0.0002, 43s:0.3013, 44:0.8927, 54o:0.186, 64o:0.0545, 53s:0.4362, 54s:0.5747, 55:0.9219, 65o:0.3187, 75o:0.1803, K5o:0.0185, 63s:0.0628, 64s:0.0673, 65s:0.7656, 66:0.9112, 76o:0.4319, 86o:0.0036, K6o:0.0238, 73s:0.101, 74s:0.0617, 75s:0.6747, 76s:0.6002, 77:0.9851, 87o:0.0374, 97o:0.0667, K7o:0.0122, 85s:0.0358, 86s:0.3319, 87s:0.5268, 88:0.8818, A8o:0.0001, 95s:0.0236, 96s:0.3044, 97s:0.3575, 98s:0.6096, 99:0.8154, K9o:0.0036, A9o:0.0015, T3s:0.0004, T5s:0.0504, T6s:0.0315, T7s:0.3301, T8s:0.1982, T9s:0.3461, TT:0.8211, ATo:0.0146, J3s:0.0054, J6s:0.029, J8s:0.2507, J9s:0.1842, JTs:0.3178, JJ:0.8545, AJo:0.0108, Q6s:0.0802, Q8s:0.0158, Q9s:0.0337, QTs:0.2467, QJs:0.1759, QQ:0.9992, KQo:0.0012, AQo:0.8091, K2s:0.0944, K3s:0.1608, K5s:0.0678, K6s:0.1547, K7s:0.0697, K8s:0.0936, K9s:0.1736, KTs:0.2728, KJs:0.5515, KQs:0.0607, KK:0.3123, AKo:0.1389, A2s:0.0914, A3s:0.0647, A4s:0.027, A5s:0.0279, A6s:0.1989, A7s:0.0794, A8s:0.2369, A9s:0.0196, ATs:0.3492, AJs:0.3253, AQs:0.8995, AKs:0.105, AA:0.5459"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0019, K2o:0.0379, A2o:0.0008, 33:0.0003, K3o:0.1101, A3o:0.0524, 43s:0.0661, 44:0.0009, K4o:0.0347, A4o:0.1517, 52s:0.0001, 53s:0.0032, 54s:0.0365, 55:0.003, K5o:0.084, A5o:0.1387, 63s:0.004, 64s:0.0005, 65s:0.107, K6o:0.1265, A6o:0.0143, 73s:0.0003, 74s:0.0001, 75s:0.0413, 76s:0.0702, 77:0.0016, K7o:0.1327, A7o:0.0406, 86s:0.004, 87s:0.0717, 88:0.0098, K8o:0.0041, A8o:0.0051, 96s:0.0006, 97s:0.008, 98s:0.0111, K9o:0.1288, A9o:0.0321, T3s:0.0002, T6s:0.0001, T7s:0.0008, T9s:0.001, TT:0.003, KTo:0.1679, ATo:0.0198, J7s:0.0003, J8s:0.0001, J9s:0.0003, JTs:0.0001, JJ:0.0001, KJo:0.0602, AJo:0.0011, Q5s:0.0001, Q6s:0.0002, Q8s:0.0002, QJs:0.0003, QQ:0.0002, KQo:0.0938, AQo:0.0664, K2s:0.4678, K3s:0.419, K4s:0.4318, K5s:0.3599, K6s:0.5205, K7s:0.5265, K8s:0.4494, K9s:0.4003, KTs:0.3707, KJs:0.2209, KQs:0.4356, KK:0.6877, AKo:0.8607, A2s:0.4258, A3s:0.3657, A4s:0.657, A5s:0.5326, A6s:0.2831, A7s:0.4209, A8s:0.375, A9s:0.7464, ATs:0.5363, AJs:0.378, AQs:0.1005, AKs:0.895, AA:0.4541"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 32s:0.0001, 33:0.0005, K4o:0.0001, 53s:0.0001, 65s:0.0001, 66:0.0001, A6o:0.0001, 73s:0.0002, 74s:0.0001, 75s:0.0001, A7o:0.0002, 85s:0.0001, 87s:0.0001, 88:0.0007, 96s:0.0001, 97s:0.0001, 99:0.0007, J3s:0.0003, J8s:0.0001, JTs:0.0003, JJ:0.0093, AJo:0.0001, Q3s:0.0001, Q6s:0.0001, Q7s:0.0001, Q8s:0.0001, QQ:0.0074, KQo:0.0001, AQo:0.0001, K2s:0.0004, K4s:0.0001, K5s:0.0001, K6s:0.0001, K7s:0.0002, KTs:0.0001, KJs:0.0001, KK:0.9884, AKo:0.0001, A3s:0.0001, A4s:0.0001, A5s:0.0001, A6s:0.0004, A8s:0.0005, A9s:0.0001, ATs:0.0004, AQs:0.0008, AKs:0.5017, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0047, 99:0.0166, TT:0.344, JJ:0.267, QQ:0.4645, KK, AKo:0.9984, ATs:0.0003, AJs:0.0002, AQs:0.0007, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|LJ:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.104, 33:0.3291, 43s:0.0905, 44:0.6497, 53s:0.1842, 54s:0.5341, 55:0.737, 65o:0.0134, 63s:0.0865, 64s:0.3291, 65s:0.7943, 66:0.9751, 74s:0.1465, 75s:0.2466, 76s:0.5252, 77:0.9302, 87o:0.0025, 85s:0.2268, 86s:0.4841, 87s:0.571, 88:0.993, 98o:0.0072, T8o:0.0026, A8o:0.0062, 95s:0.0105, 96s:0.1969, 97s:0.5132, 98s:0.6336, 99:0.9915, T9o:0.1479, A9o:0.0056, T6s:0.0403, T7s:0.3212, T8s:0.561, T9s:0.9908, TT:0.9833, JTo:0.1225, KTo:0.0059, ATo:0.0286, J6s:0.0001, J7s:0.0376, J8s:0.3086, J9s:0.7995, JTs:0.9826, JJ:0.997, KJo:0.0004, AJo:0.0428, Q8s:0.0008, Q9s:0.0277, QTs:0.5712, QJs:0.124, QQ:0.9975, AQo:0.9425, K4s:0.0163, K5s:0.0093, K6s:0.0284, K7s:0.0113, K8s:0.0126, K9s:0.0238, KTs:0.4902, KJs:0.5713, KQs:0.0135, KK:0.6108, AKo:0.1172, A2s:0.1037, A3s:0.0334, A4s:0.1667, A5s:0.2386, A6s:0.1331, A7s:0.332, A8s:0.4305, A9s:0.6103, ATs:0.7236, AJs:0.5986, AQs:0.9625, AKs:0.123, AA:0.1749"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0929, 33:0.1349, A3o:0.0054, 44:0.1264, A4o:0.0211, 55:0.0928, A5o:0.0199, 64s:0.0002, 65s:0.0013, 66:0.0206, A6o:0.0002, 77:0.0166, 86s:0.0002, 87s:0.0002, 88:0.0024, A8o:0.0001, 99:0.0003, T2s:0.0001, T3s:0.0001, T8s:0.0003, T9s:0.0003, TT:0.0039, ATo:0.0281, JJ:0.0029, AJo:0.0507, QTs:0.0001, QQ:0.0024, AQo:0.0545, K3s:0.0001, K9s:0.0001, KTs:0.0003, KQs:0.0001, KK:0.3892, AKo:0.8828, A2s:0.5243, A3s:0.6563, A4s:0.616, A5s:0.5808, A6s:0.3748, A7s:0.3404, A8s:0.2417, A9s:0.1899, ATs:0.2333, AJs:0.4013, AQs:0.0374, AKs:0.877, AA:0.8251"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|LJ:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0396, JJ:0.9996, QQ, KK, AKo:0.9971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 32o:0.0006, 33:0.0012, 53o:0.0001, 42s:0.0001, 43s:0.0001, 52s:0.0002, 53s:0.0003, 54s:0.0001, 55:0.0001, J5o:0.0002, 63s:0.0003, 64s:0.0003, 66:0.0142, 72s:0.0001, 75s:0.0006, 76s:0.0001, 77:0.0008, 87o:0.0001, Q7o:0.0001, 83s:0.0004, 84s:0.0001, 85s:0.0001, 86s:0.0005, 87s:0.0012, 88:0.0005, 94s:0.0002, 95s:0.0001, 97s:0.0002, 98s:0.0008, K9o:0.0002, T2s:0.0002, T3s:0.0001, T4s:0.0001, T5s:0.0003, T6s:0.0001, T7s:0.0003, T8s:0.0002, TT:0.0123, QTo:0.0002, KTo:0.0001, J4s:0.0003, J6s:0.0003, J7s:0.0003, J8s:0.0001, J9s:0.0005, JTs:0.0002, JJ:0.0006, QJo:0.0001, AJo:0.0002, Q2s:0.0001, Q4s:0.0002, Q7s:0.0002, Q8s:0.0003, Q9s:0.0001, QTs:0.0002, QJs:0.0001, QQ:0.0408, K3s:0.0003, K4s:0.0006, K5s:0.0016, K6s:0.0002, K7s:0.0011, K8s:0.0013, KTs:0.0004, KQs:0.0002, KK:0.0031, AKo:0.0003, A2s:0.0003, A3s:0.0009, A4s:0.0001, A6s:0.0029, A7s:0.0002, A8s:0.0103, ATs:0.0009, AJs:0.0001, AQs:0.0006, AKs:0.0041, AA:0.0238"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0047, A2o:0.0297, 32s:0.0012, 33:0.0221, A3o:0.0189, 42s:0.0001, 43s:0.0001, 44:0.0016, 52s:0.0008, A5o:0.3736, 63s:0.0134, 65s:0.0002, 66:0.0001, A6o:0.0094, 72s:0.0016, 73s:0.0255, 76s:0.0029, 77:0.0002, 87o:0.0001, A7o:0.0143, 85s:0.0002, 86s:0.0007, 87s:0.0031, 88:0.0569, K8o:0.0001, A8o:0.0001, 94s:0.0001, 95s:0.0001, 96s:0.0002, 97s:0.0226, 99:0.0002, J9o:0.0001, A9o:0.1029, T2s:0.0001, T4s:0.0001, T5s:0.0001, T7s:0.0001, TT:0.0005, QTo:0.0001, J2s:0.0003, J3s:0.0001, J5s:0.0025, J8s:0.0001, J9s:0.0002, JTs:0.0129, JJ:0.0567, QJo:0.0001, KJo:0.0001, AJo:0.0097, Q3s:0.0001, Q5s:0.0001, Q8s:0.0003, QTs:0.0001, QJs:0.0011, QQ:0.0371, AQo:0.0792, K2s:0.0029, K5s:0.0019, K7s:0.0112, K8s:0.0041, KTs:0.0001, KJs:0.0017, KQs:0.0002, KK:0.6738, AKo:0.9002, A2s:0.0002, A3s:0.7206, A4s:0.2595, A5s:0.083, A6s:0.3116, A7s:0.2981, A8s:0.0375, A9s:0.0272, ATs:0.2007, AJs:0.4884, AQs:0.3392, AKs:0.9803, AA:0.9762"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1333, 33:0.5579, 42s:0.0026, 43s:0.1558, 44:0.2138, 52s:0.001, 54s:0.145, 55:0.884, A5o:0.1025, 63s:0.0155, 64s:0.0992, 65s:0.8029, 66:0.6276, 76o:0.028, 86o:0.0056, 74s:0.0009, 75s:0.173, 76s:0.8622, 77:0.8749, A7o:0.0028, 85s:0.0631, 86s:0.1436, 87s:0.6311, 88:0.8664, 98o:0.0141, A8o:0.0024, 96s:0.0805, 97s:0.1935, 98s:0.4865, 99:0.6749, T5s:0.0071, T6s:0.11, T7s:0.077, T8s:0.1187, T9s:0.8272, TT:0.878, ATo:0.2731, J6s:0.0054, J8s:0.0345, J9s:0.4805, JTs:0.7928, JJ:0.697, AJo:0.3939, Q6s:0.0009, Q8s:0.0812, Q9s:0.2187, QTs:0.168, QJs:0.2099, QQ:0.6443, AQo:0.7172, K2s:0.0022, K3s:0.0039, K6s:0.005, K7s:0.0062, K8s:0.0105, KTs:0.0342, KJs:0.0522, KQs:0.0003, KK:0.9508, AKo:0.326, A2s:0.1703, A3s:0.1176, A4s:0.4055, A5s:0.4816, A6s:0.2741, A7s:0.6217, A8s:0.5206, A9s:0.6971, ATs:0.7824, AJs:0.8835, AQs:0.8096, AKs:0.1214, AA:0.0814"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1087, K2o:0.0001, A2o:0.0078, 33:0.1195, A3o:0.0423, 42s:0.0011, 43s:0.0024, 44:0.0993, A4o:0.0449, 52s:0.0001, 53s:0.0019, 54s:0.0093, 55:0.0751, 65o:0.001, A5o:0.0049, 63s:0.0105, 64s:0.008, 65s:0.0006, 66:0.1711, A6o:0.0411, 73s:0.0004, 74s:0.0009, 75s:0.0005, 76s:0.0115, 77:0.1083, 87o:0.0003, A7o:0.0002, 82s:0.0004, 83s:0.001, 84s:0.0001, 85s:0.024, 86s:0.0016, 87s:0.0014, 88:0.1083, A8o:0.0256, 92s:0.0058, 93s:0.0001, 94s:0.0004, 96s:0.0021, 97s:0.0057, 98s:0.0224, 99:0.1753, K9o:0.0001, A9o:0.0366, T2s:0.0001, T6s:0.0005, T7s:0.0147, T8s:0.0003, T9s:0.0138, TT:0.0955, ATo:0.0003, J5s:0.0044, J6s:0.0008, J8s:0.0002, J9s:0.0004, JJ:0.121, QJo:0.0005, AJo:0.0046, Q4s:0.0005, Q6s:0.0014, Q8s:0.0003, Q9s:0.0003, QTs:0.0003, QJs:0.0007, QQ:0.2117, AQo:0.1201, K2s:0.0003, K3s:0.001, K4s:0.0001, K5s:0.0001, K7s:0.0003, K8s:0.0002, K9s:0.0003, KTs:0.0018, KQs:0.0009, KK:0.007, AKo:0.6723, A2s:0.2215, A3s:0.2778, A4s:0.1782, A5s:0.1942, A6s:0.1761, A7s:0.1064, A8s:0.0114, A9s:0.089, ATs:0.0343, AJs:0.0961, AQs:0.1859, AKs:0.8785, AA:0.9186"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 42o:0.0001, 92o:0.0004, Q2o:0.0001, K2o:0.0001, A2o:0.0002, 32s:0.0023, 33:0.0003, 53o:0.0001, Q3o:0.0001, A3o:0.0006, 42s:0.0095, 44:0.0032, 64o:0.0001, 74o:0.0001, Q4o:0.0005, A4o:0.103, 52s:0.0006, 53s:0.0003, 54s:0.028, 55:0.0009, T5o:0.0002, Q5o:0.0001, A5o:0.1708, 62s:0.001, 64s:0.0006, 65s:0.028, 66:0.0032, 86o:0.0003, 96o:0.0001, Q6o:0.0001, A6o:0.2957, 72s:0.0219, 73s:0.0008, 74s:0.0012, 75s:0.0001, 76s:0.058, 77:0.0016, 87o:0.0009, T7o:0.0001, J7o:0.0001, K7o:0.0001, A7o:0.0005, 82s:0.0003, 83s:0.0107, 84s:0.0004, 85s:0.0734, 86s:0.0002, 87s:0.005, 88:0.1273, Q8o:0.0001, A8o:0.0001, 92s:0.0001, 93s:0.0002, 97s:0.0013, 99:0.0386, T9o:0.0001, J9o:0.0004, Q9o:0.0001, K9o:0.0002, A9o:0.0404, T2s:0.0002, T3s:0.0021, T4s:0.0056, T5s:0.0009, T6s:0.0038, T7s:0.0071, T8s:0.0081, T9s:0.034, TT:0.0539, ATo:0.1645, J2s:0.0005, J6s:0.0005, J7s:0.0128, J8s:0.0011, J9s:0.0002, JTs:0.0081, JJ:0.1474, Q2s:0.0003, Q3s:0.0002, Q4s:0.0617, Q5s:0.0001, Q9s:0.0017, QTs:0.0299, QJs:0.0001, QQ:0.5823, AQo:0.0005, K3s:0.0352, K6s:0.0001, K7s:0.0054, K8s:0.0382, K9s:0.0034, KTs:0.001, KJs:0.0004, KK:0.336, AKo:0.7575, A2s:0.4086, A3s:0.0005, A4s:0.1375, A5s:0.7378, A6s:0.0769, A7s:0.1709, A8s:0.206, A9s:0.1539, ATs:0.0023, AJs:0.004, AQs:0.6044, AKs:0.6597, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 43s:0.0001, 75o:0.0001, A5o:0.0001, 66:0.0002, A6o:0.0001, 75s:0.0001, A7o:0.0001, 86s:0.0001, 88:0.0001, T8o:0.0001, 96s:0.0002, 99:0.0001, T4s:0.0001, T5s:0.0002, T7s:0.0001, T9s:0.0002, TT:0.0001, J3s:0.0001, J4s:0.0003, J8s:0.0002, JTs:0.0001, JJ:0.0003, AJo:0.0001, QTs:0.0002, QJs:0.0001, QQ:0.003, KQo:0.0001, AQo:0.0003, K2s:0.0002, K3s:0.0001, K5s:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0003, KJs:0.0001, KQs:0.0001, KK:0.966, AKo:0.0001, A4s:0.0001, A5s:0.0002, A8s:0.0002, A9s:0.0002, ATs:0.0001, AJs:0.0002, AQs:0.0004, AKs:0.0068, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0005, QQ:0.0004, KK, AKo:0.5462, AQs:0.0001, AKs:0.9993, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 82o:0.0001, J2o:0.0002, 33:0.0001, 63o:0.0002, 73o:0.0004, 93o:0.0001, J3o:0.0001, Q3o:0.0001, 44:0.0001, 64o:0.0001, K4o:0.0001, 53s:0.0014, 54s:0.0009, 55:0.0015, 65o:0.0003, J5o:0.0001, 63s:0.0006, 64s:0.0013, 66:0.0013, K6o:0.0001, A6o:0.0002, 75s:0.0063, 76s:0.0003, 87o:0.0001, K7o:0.0004, A7o:0.0013, 84s:0.0028, 85s:0.0002, 87s:0.0014, 88:0.0037, T8o:0.0001, A8o:0.0027, 92s:0.0003, 98s:0.001, J9o:0.0001, K9o:0.0001, T2s:0.0012, T6s:0.0006, T8s:0.0046, T9s:0.001, TT:0.0009, JTo:0.0001, KTo:0.0007, ATo:0.0017, J2s:0.0003, J3s:0.0005, J6s:0.0255, J7s:0.0004, J8s:0.0038, J9s:0.0003, JJ:0.0259, QJo:0.0002, AJo:0.0009, Q2s:0.0086, Q4s:0.0005, Q6s:0.0001, Q7s:0.0008, Q8s:0.0009, QTs:0.0007, QJs:0.0001, QQ:0.1764, KQo:0.0004, AQo:0.0009, K2s:0.0008, K4s:0.0005, K5s:0.0004, K6s:0.0014, K7s:0.0011, K8s:0.0006, K9s:0.0032, KJs:0.0036, KQs:0.0045, KK:0.8604, AKo:0.0142, A2s:0.005, A4s:0.0013, A5s:0.0004, A6s:0.0006, A7s:0.0005, A8s:0.0002, A9s:0.0375, ATs:0.0025, AQs:0.0043, AKs:0.4737, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0003, 65s:0.0002, 66:0.0001, 75s:0.0005, 84s:0.0001, 98s:0.0002, T3s:0.0003, TT:0.0045, J2s:0.0001, J4s:0.0003, J5s:0.0001, JJ:0.0001, Q2s:0.0001, Q5s:0.0002, Q9s:0.0007, QJs:0.0013, QQ:0.009, AQo:0.0001, K6s:0.0004, K7s:0.0001, KJs:0.0001, KK:0.0145, A2s:0.0002, A3s:0.0015, A4s:0.0002, A5s:0.0006, A6s:0.0001, A9s:0.0001, AQs:0.006, AKs:0.0023, AA:0.0921"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0001, T4o:0.0001, 53s:0.0003, 54s:0.0001, 55:0.0014, 62s:0.0001, 64s:0.0038, 65s:0.0029, 66:0.0006, 75s:0.0076, 77:0.0001, 82s:0.0001, 83s:0.0001, 88:0.002, 92s:0.0001, 94s:0.0001, 96s:0.0007, 98s:0.0021, 99:0.0001, T4s:0.0002, T6s:0.0001, T7s:0.0001, T8s:0.0081, TT:0.0046, J4s:0.0003, J5s:0.0001, JJ:0.0055, AJo:0.0001, Q2s:0.0001, Q5s:0.0001, Q6s:0.0029, Q7s:0.0001, Q9s:0.0002, QTs:0.0488, QJs:0.0003, QQ:0.0054, AQo:0.0005, K4s:0.0003, K5s:0.0001, K6s:0.0009, K8s:0.0001, KTs:0.0009, KQs:0.0002, KK:0.1284, AKo:0.9467, A2s:0.0029, A3s:0.4722, A5s:0.3949, A7s:0.0129, A8s:0.1379, A9s:0.0058, ATs:0.0042, AJs:0.0238, AQs:0.4617, AKs:0.9285, AA:0.9078"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1525, 33:0.1383, 53o:0.0135, A3o:0.0003, 42s:0.0015, 43s:0.3187, 44:0.3361, 54o:0.0052, 64o:0.0227, A4o:0.0241, 53s:0.1374, 54s:0.3386, 55:0.6929, 65o:0.1121, A5o:0.0425, 64s:0.1578, 65s:0.2617, 66:0.8894, 76o:0.0454, A6o:0.0327, 73s:0.0004, 74s:0.1283, 75s:0.147, 76s:0.2259, 77:0.5483, 87o:0.1131, T7o:0.0056, A7o:0.0195, 84s:0.0288, 85s:0.113, 86s:0.0443, 87s:0.6122, 88:0.5085, 98o:0.0073, J8o:0.0019, A8o:0.0687, 92s:0.0002, 93s:0.0001, 94s:0.0007, 95s:0.0216, 96s:0.1507, 97s:0.3026, 98s:0.1979, 99:0.5418, T9o:0.0666, J9o:0.0114, Q9o:0.0334, A9o:0.057, T3s:0.0017, T4s:0.0401, T6s:0.0166, T7s:0.0768, T8s:0.2021, T9s:0.0934, TT:0.2553, JTo:0.0268, QTo:0.0647, ATo:0.578, J2s:0.0711, J3s:0.1009, J4s:0.0372, J5s:0.075, J6s:0.0197, J7s:0.136, J8s:0.2166, J9s:0.3109, JTs:0.4085, JJ:0.7962, QJo:0.2356, AJo:0.9295, Q2s:0.0002, Q3s:0.0083, Q4s:0.1241, Q5s:0.1404, Q6s:0.067, Q7s:0.0243, Q8s:0.0777, Q9s:0.2156, QTs:0.263, QJs:0.4345, QQ:0.9357, AQo:0.9699, K5s:0.0929, K6s:0.0122, K7s:0.0137, KJs:0.1468, KQs:0.0484, KK:0.8189, AKo:0.0383, A2s:0.1689, A3s:0.1414, A4s:0.0585, A5s:0.0856, A6s:0.2515, A7s:0.1714, A8s:0.1556, A9s:0.1222, ATs:0.8614, AJs:0.9229, AQs:0.9838, AKs:0.1347, AA:0.1811"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3379, 32s:0.0344, 33:0.6516, 53o:0.0035, A3o:0.1345, 42s:0.0568, 43s:0.1301, 44:0.6519, 54o:0.0034, A4o:0.2512, 52s:0.0145, 53s:0.001, 54s:0.0628, 55:0.2967, 65o:0.0124, A5o:0.2071, 62s:0.0116, 63s:0.0168, 64s:0.1237, 65s:0.5646, 66:0.1021, 76o:0.0161, 86o:0.0003, A6o:0.0317, 73s:0.0042, 74s:0.052, 75s:0.0487, 76s:0.2736, 77:0.4432, 87o:0.0127, A7o:0.0623, 84s:0.0218, 85s:0.0501, 86s:0.0598, 87s:0.0572, 88:0.4144, 98o:0.0001, A8o:0.0317, 92s:0.0053, 94s:0.0042, 96s:0.0823, 97s:0.3665, 98s:0.2115, 99:0.2351, T9o:0.0025, A9o:0.0186, T4s:0.0003, T6s:0.002, T8s:0.0031, T9s:0.0321, TT:0.1169, QTo:0.0057, KTo:0.0007, ATo:0.0119, J2s:0.0003, J3s:0.0115, J5s:0.0041, J6s:0.0083, J7s:0.0269, J8s:0.0537, J9s:0.0249, JTs:0.0058, JJ:0.1978, QJo:0.0052, KJo:0.0053, Q2s:0.0006, Q3s:0.0108, Q4s:0.0031, Q5s:0.0123, Q6s:0.003, Q7s:0.0001, Q8s:0.0306, Q9s:0.0156, QTs:0.0158, QJs:0.0369, QQ:0.0593, KQo:0.0055, AQo:0.0171, K2s:0.0001, K3s:0.003, K5s:0.0046, K6s:0.0035, K7s:0.0013, K8s:0.0111, K9s:0.0109, KTs:0.001, KJs:0.0084, KQs:0.0098, KK:0.1779, AKo:0.96, A2s:0.6761, A3s:0.7695, A4s:0.7471, A5s:0.7064, A6s:0.5477, A7s:0.7791, A8s:0.8171, A9s:0.756, ATs:0.1302, AJs:0.0716, AQs:0.0084, AKs:0.8636, AA:0.8189"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0004, 95s:0.0001, 99:0.0004, TT:0.0018, ATo:0.0001, J7s:0.0001, JJ:0.0007, QQ:0.001, K7s:0.0003, KJs:0.0001, KK:0.9999, AKo:0.0004, A7s:0.0003, AJs:0.0002, AQs:0.0001, AKs:0.0393, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|BB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0022, QQ:0.0026, KK, AKo:0.9433, A6s:0.0001, AQs:0.0002, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|LJ:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8342, A2o:0.0314, 32s:0.0733, 33:0.8074, 43o:0.0669, 53o:0.0277, A3o:0.0177, 42s:0.2885, 43s:0.4546, 44:0.8632, 54o:0.2289, 64o:0.0924, A4o:0.085, 52s:0.1734, 53s:0.5205, 54s:0.7416, 55:0.916, 65o:0.3057, 75o:0.0553, A5o:0.1642, 62s:0.0517, 63s:0.3962, 64s:0.7479, 65s:0.8623, 66:0.9787, 76o:0.3595, 86o:0.169, A6o:0.0391, 73s:0.045, 74s:0.3521, 75s:0.6532, 76s:0.9321, 77:0.856, 87o:0.2535, 97o:0.2245, A7o:0.194, 84s:0.1652, 85s:0.4096, 86s:0.7451, 87s:0.8957, 88:0.8272, 98o:0.2755, T8o:0.1438, J8o:0.0174, A8o:0.3506, 94s:0.0616, 95s:0.3019, 96s:0.3923, 97s:0.8557, 98s:0.9032, 99:0.7859, T9o:0.2435, J9o:0.229, K9o:0.0048, A9o:0.1463, T3s:0.0112, T4s:0.019, T5s:0.0354, T6s:0.2953, T7s:0.365, T8s:0.847, T9s:0.9171, TT:0.907, JTo:0.2627, KTo:0.1236, ATo:0.3204, J2s:0.0166, J4s:0.0053, J5s:0.0515, J7s:0.3394, J8s:0.4764, J9s:0.7558, JTs:0.716, JJ:0.8984, KJo:0.1613, AJo:0.5268, Q5s:0.0009, Q8s:0.099, Q9s:0.2513, QTs:0.3321, QJs:0.5318, QQ:0.7964, AQo:0.1575, K2s:0.2035, K3s:0.357, K4s:0.3755, K5s:0.2061, K6s:0.2856, K7s:0.6588, K8s:0.3055, K9s:0.4962, KTs:0.7023, KJs:0.8446, KQs:0.2281, KK:0.8813, AKo:0.1527, A2s:0.0042, A3s:0.0741, A4s:0.0466, A5s:0.0146, A6s:0.2093, A7s:0.5096, A8s:0.4384, A9s:0.4091, ATs:0.4566, AJs:0.3927, AQs:0.1013, AKs:0.0765, AA:0.0582"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1484, A2o:0.0217, 33:0.1324, A3o:0.0941, 44:0.1194, A4o:0.3134, 53s:0.0024, 54s:0.0001, 55:0.0813, A5o:0.3746, 64s:0.0004, 65s:0.0168, 66:0.0211, A6o:0.0079, 73s:0.0001, 74s:0.0005, 75s:0.0077, 76s:0.0009, 77:0.1366, A7o:0.0002, 86s:0.0014, 87s:0.053, 88:0.1656, A8o:0.0334, 96s:0.0011, 97s:0.0002, 98s:0.0241, 99:0.1961, A9o:0.0003, T6s:0.0006, T7s:0.0005, T8s:0.0109, T9s:0.0025, TT:0.0362, ATo:0.0849, JTs:0.0002, JJ:0.0969, AJo:0.4425, Q8s:0.0002, QTs:0.0018, QQ:0.2033, AQo:0.8425, K3s:0.0073, K4s:0.0001, K6s:0.0004, K9s:0.0056, KTs:0.0147, KQs:0.0001, KK:0.1187, AKo:0.8473, A2s:0.9904, A3s:0.923, A4s:0.953, A5s:0.9751, A6s:0.7737, A7s:0.4573, A8s:0.5344, A9s:0.5717, ATs:0.5417, AJs:0.6072, AQs:0.8987, AKs:0.9235, AA:0.9418"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|LJ:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0025, JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "72o:0.0001, 63s:0.0004, 65s:0.0001, 66:0.0001, 73s:0.0001, 74s:0.0001, 75s:0.0003, 76s:0.0001, 77:0.0002, 85s:0.0006, 86s:0.0001, 93s:0.0005, 96s:0.0001, 98s:0.0013, 99:0.0001, T2s:0.0003, T6s:0.0001, T8s:0.0004, ATo:0.0001, J3s:0.0003, J7s:0.0001, J9s:0.0001, QTs:0.0001, QJs:0.0001, K3s:0.0001, K5s:0.0001, K6s:0.0001, K9s:0.0002, KK:0.0881, AKo:0.0001, A2s:0.0001, A3s:0.0003, A5s:0.0003, A8s:0.0008, A9s:0.0001, ATs:0.0001, AJs:0.0007, AQs:0.0002, AKs:0.0052, AA:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0006, 44:0.0052, 54s:0.0036, 63s:0.0002, 66:0.0001, 73s:0.0001, 76s:0.005, 77:0.0002, A7o:0.0014, 87s:0.0009, 93s:0.0002, 96s:0.0004, 98s:0.0001, 99:0.0002, T5s:0.0004, T6s:0.0003, T7s:0.0003, TT:0.0567, ATo:0.0001, J2s:0.0001, J7s:0.0002, J9s:0.0002, JJ:0.0028, AJo:0.0013, QTs:0.0001, QJs:0.0004, QQ:0.0046, AQo:0.0017, K4s:0.0004, K5s:0.0001, K6s:0.0001, KTs:0.0008, KJs:0.0014, KK:0.0018, AKo:0.9329, A2s:0.1008, A3s:0.1511, A4s:0.3999, A5s:0.0209, A6s:0.0241, A7s:0.0943, A8s:0.0625, A9s:0.0221, ATs:0.0322, AJs:0.5782, AQs:0.0001, AKs:0.8071, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2992, 32s:0.0146, 33:0.3305, A3o:0.0013, 42s:0.0488, 43s:0.0006, 44:0.2159, A4o:0.0146, 52s:0.0017, 53s:0.014, 54s:0.3774, 55:0.5426, 65o:0.0025, 75o:0.0004, 85o:0.0006, A5o:0.0374, 62s:0.003, 63s:0.0291, 64s:0.0643, 65s:0.4043, 66:0.5392, 76o:0.001, A6o:0.01, 74s:0.0043, 75s:0.2446, 76s:0.1454, 77:0.3425, A7o:0.0255, 84s:0.1221, 85s:0.0639, 86s:0.0981, 87s:0.2796, 88:0.3483, A8o:0.0127, 92s:0.0284, 93s:0.0003, 94s:0.0004, 95s:0.0026, 97s:0.0401, 98s:0.0605, 99:0.2618, A9o:0.0097, T7s:0.0141, T8s:0.0884, T9s:0.2781, TT:0.0862, QTo:0.001, ATo:0.5722, J3s:0.0005, J4s:0.0279, J5s:0.0017, J6s:0.0125, J7s:0.0048, J8s:0.0009, J9s:0.0817, JTs:0.0139, JJ:0.4444, QJo:0.0002, AJo:0.6815, Q2s:0.0001, Q3s:0.0002, Q4s:0.001, Q5s:0.0178, Q8s:0.0002, Q9s:0.0145, QTs:0.0101, QJs:0.0982, QQ:0.6546, AQo:0.9308, K4s:0.0001, K6s:0.0001, KTs:0.0062, KJs:0.0121, KQs:0.0001, KK:0.6175, AKo:0.3518, A2s:0.0306, A3s:0.0457, A4s:0.0114, A5s:0.3691, A6s:0.0333, A7s:0.1772, A8s:0.3165, A9s:0.362, ATs:0.8847, AJs:0.8248, AQs:0.9079, AKs:0.1118, AA:0.0797"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2371, A2o:0.2012, 33:0.3768, A3o:0.1957, 42s:0.0192, 43s:0.0231, 44:0.3063, 74o:0.0003, A4o:0.3681, 52s:0.0005, 53s:0.0377, 54s:0.0796, 55:0.2382, 65o:0.0024, 75o:0.0007, 85o:0.0001, A5o:0.2139, 62s:0.0017, 63s:0.0075, 64s:0.0278, 65s:0.0436, 66:0.306, A6o:0.0099, 73s:0.0141, 74s:0.0014, 75s:0.1606, 76s:0.2091, 77:0.5827, 87o:0.0034, A7o:0.1952, 83s:0.0009, 85s:0.1109, 86s:0.0027, 87s:0.201, 88:0.452, A8o:0.0442, 92s:0.0001, 93s:0.0004, 94s:0.0002, 96s:0.0001, 97s:0.0664, 98s:0.0907, 99:0.1925, A9o:0.0298, T2s:0.0001, T6s:0.0001, T7s:0.0007, T9s:0.0088, TT:0.2964, ATo:0.0037, J6s:0.0006, J7s:0.0059, J9s:0.0539, JTs:0.0015, JJ:0.3459, AJo:0.0201, Q6s:0.0005, QTs:0.0002, QJs:0.001, QQ:0.1933, AQo:0.022, K3s:0.0001, K4s:0.0001, K5s:0.0001, K6s:0.0002, K7s:0.0001, K8s:0.0001, KTs:0.0009, KQs:0.0001, KK:0.2208, AKo:0.6482, A2s:0.5808, A3s:0.83, A4s:0.8793, A5s:0.5085, A6s:0.7172, A7s:0.6971, A8s:0.2665, A9s:0.4911, ATs:0.0334, AJs:0.1024, AQs:0.0905, AKs:0.8882, AA:0.9203"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0004, 32s:0.0013, 33:0.0036, 63o:0.0001, 83o:0.0002, Q3o:0.0001, A3o:0.0001, 43s:0.0003, 44:0.0001, A4o:0.0002, 53s:0.0114, 54s:0.0219, 55:0.0001, 95o:0.0001, A5o:0.0037, 62s:0.0002, 63s:0.0008, 64s:0.0001, 65s:0.0022, 66:0.0001, 72s:0.0029, 74s:0.0014, 75s:0.0007, 76s:0.0008, 77:0.0008, J7o:0.0001, A7o:0.0039, 84s:0.0001, 85s:0.0012, 88:0.0001, K8o:0.0002, 93s:0.0004, 94s:0.0005, 97s:0.001, 98s:0.0005, 99:0.0021, K9o:0.0002, A9o:0.0002, T2s:0.0005, T3s:0.0001, T5s:0.0019, T6s:0.0002, T8s:0.0006, TT:0.0001, JTo:0.0001, QTo:0.0001, ATo:0.0003, J3s:0.0016, J4s:0.0003, J5s:0.0002, J6s:0.0001, J7s:0.0005, J8s:0.001, JTs:0.0006, KJo:0.0005, AJo:0.0006, Q3s:0.0003, Q4s:0.0004, Q5s:0.0009, Q6s:0.0001, Q7s:0.0002, Q8s:0.0004, Q9s:0.0011, QTs:0.0006, QQ:0.0005, AQo:0.0022, K2s:0.0065, K3s:0.0005, K4s:0.0004, K5s:0.0016, K6s:0.0022, K8s:0.0001, KTs:0.0002, KJs:0.0008, KQs:0.002, KK:0.3135, AKo:0.5315, A2s:0.1388, A5s:0.003, A6s:0.0013, A7s:0.0113, A8s:0.0188, A9s:0.0035, ATs:0.0015, AJs:0.2358, AKs:0.2253, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0001, 99:0.0001, T4s:0.0001, J2s:0.0001, JJ:0.0002, QQ:0.0035, KK:0.9991, ATs:0.0003, AJs:0.0001, AKs:0.0321, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0001, 99:0.0001, TT:0.0001, JJ:0.0005, QQ:0.0011, KQs:0.0001, KK, AKo:0.5064, ATs:0.0001, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 32s:0.0001, 33:0.0014, 73o:0.0001, T3o:0.0001, Q3o:0.0001, K3o:0.0001, 42s:0.0004, 43s:0.0016, 44:0.0004, Q4o:0.0003, K4o:0.0001, A4o:0.0002, 53s:0.0014, 55:0.0001, T5o:0.0001, 62s:0.0005, 63s:0.0002, 66:0.0001, Q6o:0.0001, 73s:0.0001, 74s:0.0001, 75s:0.0027, 76s:0.0016, 87o:0.0002, Q7o:0.0001, 82s:0.0001, 84s:0.0004, 85s:0.0004, 86s:0.0002, T8o:0.0001, A8o:0.0001, 92s:0.0001, 96s:0.0004, 97s:0.0001, 98s:0.0039, T9o:0.0001, K9o:0.0001, T2s:0.0003, T4s:0.0002, T6s:0.0001, T7s:0.0001, T8s:0.001, TT:0.0008, ATo:0.0001, J4s:0.0001, J5s:0.0001, J6s:0.0004, J8s:0.0001, J9s:0.0001, JJ:0.0002, AJo:0.001, Q3s:0.0003, Q4s:0.001, Q5s:0.0001, Q8s:0.0011, QTs:0.0007, QJs:0.0006, QQ:0.0011, AQo:0.0007, K3s:0.0003, K4s:0.0006, K5s:0.0001, K8s:0.0002, K9s:0.0014, KTs:0.0005, KQs:0.0006, KK:0.99, AKo:0.0001, A2s:0.0048, A6s:0.0002, A7s:0.0027, A8s:0.0061, A9s:0.0009, ATs:0.0003, AJs:0.0001, AQs:0.0091, AKs:0.049, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0048, JJ:0.0002, QQ:0.6514, KK, AKo:0.9899, AKs:0.9976, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0044, QQ:0.9512, KK, AKo:0.9848, AQs:0.0003, AKs:0.9889, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42s:0.0001, 54s:0.0003, 55:0.187, 66:0.0878, 86s:0.0001, 88:0.2313, T9s:0.0039, TT:0.0074, QQ:0.5009, AQo:0.1932, K7s:0.0008, K8s:0.0696, K9s:0.0002, KTs:0.0075, KJs:0.0676, KK:0.2366, AKo:0.0005, A3s:0.0259, A4s:0.0016, A5s:0.0105, A6s:0.0239, A7s:0.0009, A8s:0.0059, A9s:0.0044, ATs:0.1605, AJs:0.0114, AQs:0.6269, AKs:0.0104, AA:0.0186"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0198, 63o:0.0003, K3o:0.0006, A3o:0.2437, 42s:0.0001, 43s:0.0039, 84o:0.0004, A4o:0.0256, 55:0.0047, A5o:0.0041, 62s:0.0002, 63s:0.0029, 64s:0.001, 65s:0.0063, 66:0.0028, K6o:0.0011, A6o:0.0398, 73s:0.0002, 74s:0.0001, 76s:0.0001, A7o:0.0168, 83s:0.0001, 85s:0.0003, 86s:0.0478, 87s:0.062, 88:0.0462, A8o:0.1508, 98s:0.0001, A9o:0.005, T3s:0.0001, T5s:0.0005, T8s:0.0003, T9s:0.0002, KTo:0.001, ATo:0.0145, J7s:0.0002, JTs:0.0034, JJ:0.1205, KJo:0.0002, Q4s:0.0008, Q6s:0.0077, QTs:0.0001, QQ:0.0154, AQo:0.4978, K2s:0.0003, K3s:0.0003, K5s:0.0022, K6s:0.0413, K7s:0.0094, K8s:0.0112, K9s:0.0008, KTs:0.0007, KJs:0.0091, KK:0.0003, AKo:0.0396, A2s:0.2313, A3s:0.0273, A4s:0.032, A5s:0.0618, A6s:0.216, A7s:0.0255, A8s:0.0847, A9s:0.0829, ATs:0.1506, AJs:0.0793, AQs:0.238, AKs:0.3399, AA:0.9813"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.0005, 42s:0.0001, 43s:0.0042, A4o:0.2269, 55:0.0029, A5o:0.0051, 62s:0.0011, 63s:0.0009, 65s:0.0019, 66:0.0004, K6o:0.001, 73s:0.0007, 76s:0.0045, A7o:0.0001, 84s:0.0005, 86s:0.0115, 88:0.0037, 92s:0.0001, 98s:0.028, T6s:0.0011, T7s:0.001, T8s:0.0002, T9s:0.0147, TT:0.0247, JTs:0.0009, JJ:0.047, KJo:0.0009, AJo:0.0226, Q6s:0.0002, Q8s:0.0135, Q9s:0.0008, QJs:0.0012, QQ:0.0069, KQo:0.0092, AQo:0.0054, K2s:0.093, K3s:0.0001, K4s:0.0343, K5s:0.0454, K6s:0.3813, K7s:0.0661, K8s:0.0145, K9s:0.2934, KTs:0.1896, KJs:0.0358, KQs:0.5105, KK:0.7632, AKo:0.9599, A2s:0.1853, A3s:0.3829, A4s:0.3347, A5s:0.8944, A6s:0.2946, A7s:0.5841, A8s:0.8423, A9s:0.4252, ATs:0.2785, AJs:0.3989, AQs:0.1296, AKs:0.6496, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|BB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.1029, 44:0.3913, 53s:0.0324, 54s:0.0476, 55:0.1816, 65s:0.8123, 66:0.5826, 75s:0.0131, 76s:0.4089, 77:0.2075, 87s:0.0007, 88:0.4803, 96s:0.0142, 97s:0.0001, 98s:0.0546, T9s:0.029, TT:0.4094, JJ:0.3457, QQ:0.9182, AQo:0.4918, K2s:0.0001, K3s:0.0026, K4s:0.0001, K5s:0.0559, K6s:0.0084, K7s:0.0374, K8s:0.091, K9s:0.1034, KTs:0.0308, KJs:0.8525, KQs:0.1751, KK:0.4112, A2s:0.0002, A3s:0.0048, A4s:0.0668, A5s:0.13, A6s:0.0126, A7s:0.0451, A8s:0.074, A9s:0.5937, ATs:0.8897, AJs:0.6174, AQs:0.4992, AA:0.0001"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "Q2o:0.0002, 42s:0.0008, A7o:0.0001, A8o:0.0001, AJo:0.0001, Q2s:0.0003, Q9s:0.0002, QJs:0.0001, QQ:0.0006, KQo:0.0003, AQo:0.0001, K4s:0.0002, KQs:0.0009, KK:0.0115, A8s:0.0001, A9s:0.0002, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0002, 44:0.0089, A4o:0.0123, 52s:0.0001, 54s:0.0011, 55:0.0001, A5o:0.1068, 63s:0.0001, 65s:0.0003, 66:0.0236, A6o:0.0001, 73s:0.0001, 77:0.2285, A7o:0.0001, 87s:0.0001, 88:0.014, A8o:0.0003, 96s:0.0017, 97s:0.0002, 98s:0.0001, A9o:0.0091, TT:0.0675, KTo:0.0115, ATo:0.0005, J6s:0.0002, J9s:0.0001, JJ:0.0015, AJo:0.0077, Q5s:0.0001, Q6s:0.0001, Q8s:0.0002, QTs:0.0001, QJs:0.0002, QQ:0.081, AQo:0.2284, K3s:0.0242, K5s:0.1447, K6s:0.1882, K7s:0.1618, K8s:0.0442, K9s:0.1563, KTs:0.0136, KJs:0.0943, KQs:0.1704, KK:0.5773, AKo, A2s:0.4691, A3s:0.4934, A4s:0.2681, A5s:0.3185, A6s:0.328, A7s:0.1643, A8s:0.3598, A9s:0.2874, ATs:0.0912, AJs:0.2956, AQs:0.5, AKs"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0005, TT:0.0124, JJ:0.003, QQ:0.2489, KK, AKo:0.9869, AKs:0.9864, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0016, QQ:0.9982, KK, AKo:0.9794, AKs:0.978, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0017, 99:0.0004, TT:0.0001, JJ:0.0001, QQ:0.3178, KK, AKo:0.6514, AJs:0.0001, AKs:0.5244, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.009, 65s:0.0001, 66:0.0628, 75s:0.0002, 77:0.0021, 88:0.0923, 98s:0.0275, T8s:0.0005, JTs:0.001, QJs:0.0013, QQ:0.1721, AQo:0.0184, K7s:0.0279, K8s:0.0047, KTs:0.0811, KJs:0.0011, KQs:0.1316, KK:0.1209, A3s:0.0007, A4s:0.0064, A5s:0.0002, A6s:0.0011, A8s:0.0024, A9s:0.0002, ATs:0.0008, AQs:0.4973, AKs:0.0248, AA:0.0057"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0015, T2o:0.0001, A2o:0.1482, K3o:0.0001, A3o:0.0737, 42s:0.0002, 44:0.0006, A4o:0.0294, 52s:0.0001, 54s:0.0002, A5o:0.0222, 63s:0.0001, A6o:0.0439, 73s:0.0002, 74s:0.0002, 75s:0.001, 76s:0.0074, 77:0.0143, K7o:0.0002, A7o:0.0018, 98o:0.0001, A8o:0.0131, 96s:0.0002, 97s:0.0025, 98s:0.0183, A9o:0.0242, T5s:0.0001, T6s:0.0014, T8s:0.0004, T9s:0.0001, TT:0.0047, ATo:0.0454, J2s:0.0001, JJ:0.0477, KJo:0.0001, AJo:0.074, Q7s:0.0003, Q9s:0.0002, QTs:0.0003, QJs:0.0019, QQ:0.0044, AQo:0.0818, K2s:0.0252, K6s:0.0124, K7s:0.0083, K8s:0.0289, KTs:0.0121, KJs:0.01, KQs:0.0017, KK:0.0006, AKo:0.0487, A2s:0.0583, A3s:0.231, A4s:0.0318, A5s:0.025, A6s:0.0243, A7s:0.3296, A8s:0.0083, A9s:0.0919, ATs:0.1646, AJs:0.2273, AQs:0.2384, AKs:0.0217, AA:0.9943"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0005, A3o:0.0011, 43s:0.004, 55:0.0177, A5o:0.0041, 65s:0.0856, 66:0.0001, A6o:0.0019, 75s:0.0263, 76s:0.0676, 77:0.0037, K7o:0.0008, 82s:0.0001, 85s:0.0001, 86s:0.0043, 87s:0.0004, 88:0.0058, 96s:0.0018, 97s:0.0347, 98s:0.0013, 99:0.0066, A9o:0.0006, T8s:0.0013, TT:0.0078, KTo:0.0079, JJ:0.0233, Q9s:0.0003, QJs:0.0002, QQ:0.0146, KQo:0.0076, K2s:0.0003, K3s:0.0847, K4s:0.1592, K5s:0.0432, K6s:0.3395, K7s:0.276, K8s:0.3311, K9s:0.2957, KTs:0.2104, KJs:0.7837, KQs:0.0588, KK:0.8784, AKo:0.9512, A2s:0.2103, A3s:0.1423, A4s:0.4634, A5s:0.8575, A6s:0.121, A7s:0.296, A8s:0.4663, A9s:0.4881, ATs:0.4244, AJs:0.5146, AQs:0.0025, AKs:0.9534"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0136, 53s:0.03, 54s:0.0602, 55:0.411, 65s:0.3238, 66:0.1461, 76s:0.1944, 77:0.0437, 87s:0.0038, 88:0.0681, 97s:0.0065, 98s:0.0285, 99:0.2535, T9s:0.002, TT:0.0275, J9s:0.0002, JJ:0.0479, QQ:0.899, AQo:0.2378, K4s:0.0017, K5s:0.0545, K6s:0.0686, K7s:0.0505, K9s:0.2052, KTs:0.1934, KJs:0.0949, KQs:0.053, KK:0.002, A4s:0.0366, A5s:0.2808, A7s:0.0007, A8s:0.012, A9s:0.0137, ATs:0.0037, AJs:0.0754, AQs:0.8645, AKs:0.0006"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K5s:0.0001, KK:0.0159, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, 52s:0.0001, 53s:0.0002, 55:0.0419, A5o:0.0007, 64s:0.0002, 65s:0.1584, 66:0.0009, 76s:0.0002, 77:0.0789, 88:0.0004, 96s:0.0002, 99:0.2062, A9o:0.0003, T9s:0.0013, TT:0.0754, J7s:0.0002, J8s:0.0001, JTs:0.0014, JJ:0.2438, KJo:0.0059, AJo:0.0001, QJs:0.0005, QQ:0.0862, KQo:0.0038, AQo:0.2109, K3s:0.0044, K4s:0.0001, K5s:0.0376, K6s:0.0867, K7s:0.2631, K9s:0.3714, KTs:0.652, KJs:0.5012, KQs:0.013, KK:0.9821, AKo:0.9999, A2s:0.5912, A3s:0.6656, A4s:0.7762, A5s:0.531, A6s:0.7634, A7s:0.7637, A8s:0.5966, A9s:0.5895, ATs:0.7455, AJs:0.7818, AQs:0.135, AKs:0.9994"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "33:0.0001, A3o:0.087, 44:0.0007, 55:0.0004, A6o:0.0078, 87s:0.0026, A8o:0.0039, 99:0.0003, ATo:0.0052, JJ:0.0231, Q8s:0.0001, QQ:0.1789, K2s:0.0153, K3s:0.0015, K8s:0.0001, K9s:0.0005, KTs:0.0001, KJs:0.0018, KQs:0.0303, KK:0.0001, AKo:0.0012, A2s:0.036, A3s:0.2022, A4s:0.046, A5s:0.0145, A6s:0.0372, A7s:0.1733, A8s:0.1202, A9s:0.171, ATs:0.2146, AJs:0.1221, AQs:0.4821, AKs:0.253, AA:0.992"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0031, K3o:0.0004, 44:0.0001, 53s:0.0001, 55:0.003, 63s:0.0001, 64s:0.001, A6o:0.0007, 72s:0.0014, 75s:0.0024, 77:0.009, 83s:0.0066, 87s:0.0037, 88:0.0635, 94s:0.0001, 97s:0.0003, 98s:0.0035, 99:0.0046, T9s:0.0025, ATo:0.0034, J5s:0.0001, J8s:0.0003, JTs:0.0057, JJ:0.0075, AJo:0.0041, Q2s:0.0004, Q8s:0.0001, QTs:0.0004, QQ:0.0272, KQo:0.0029, AQo:0.0139, K2s:0.0178, K3s:0.0528, K4s:0.0923, K5s:0.0117, K6s:0.0002, K7s:0.051, K8s:0.039, K9s:0.0027, KTs:0.0004, KJs:0.031, KQs:0.0932, KK:0.9998, AKo:0.9978, A2s:0.0061, A3s:0.1774, A4s:0.0738, A5s:0.1004, A6s:0.0026, A7s:0.1811, A8s:0.2799, A9s:0.143, ATs:0.2154, AJs:0.0632, AQs:0.0008, AKs:0.7275, AA:0.008"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|BTN:CALL@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.784, 32s:0.0002, 33:0.7872, 53o:0.0005, T3o:0.0001, J3o:0.0002, K3o:0.0001, 42s:0.1184, 44:0.8449, 64o:0.1162, T4o:0.0002, 52s:0.0171, 53s:0.0953, 54s:0.6042, 55:0.0172, 65o:0.077, K5o:0.0001, 64s:0.0968, 66:0.6127, A6o:0.0011, 72s:0.0001, 73s:0.0007, 75s:0.6755, 76s:0.2795, 77:0.8052, 87o:0.0007, T7o:0.0001, K7o:0.0001, 83s:0.0002, 84s:0.5563, 85s:0.2386, 86s:0.0004, 87s:0.4341, 88:0.8899, T8o:0.0006, Q8o:0.0001, K8o:0.0001, 93s:0.0002, 95s:0.002, 96s:0.0659, 97s:0.0935, 98s:0.383, 99:0.7218, T9o:0.0001, A9o:0.0002, T4s:0.0008, T6s:0.4958, T7s:0.1958, T9s:0.0004, TT:0.2582, ATo:0.0024, J2s:0.0081, J3s:0.0103, J4s:0.0006, J5s:0.01, J6s:0.0002, J7s:0.0002, J8s:0.0084, J9s:0.0005, JJ:0.7874, AJo:0.0465, Q2s:0.0317, Q3s:0.0066, Q4s:0.0009, Q5s:0.0454, Q7s:0.1269, Q8s:0.0008, Q9s:0.2684, QTs:0.0069, QJs:0.0525, QQ:0.0002, KQo:0.0496, AQo:0.0316, K2s:0.7524, K3s:0.0808, K4s:0.1967, K6s:0.0068, K7s:0.1846, K8s:0.0796, K9s:0.0138, KTs:0.0168, KJs:0.0007, KQs:0.1898, AKo:0.0007, A2s:0.023, A3s:0.0001, A4s:0.0483, A5s:0.399, A6s:0.3557, A7s:0.2589, A9s:0.1354, ATs:0.8579, AJs:0.0009, AQs:0.5281, AKs:0.0666"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0035, Q2o:0.0686, 32s:0.0167, 43o:0.0156, 63o:0.0082, Q3o:0.0354, K3o:0.0137, A3o:0.0858, A4o:0.0205, 52s:0.0301, 53s:0.0001, 54s:0.0001, 55:0.0007, J5o:0.0307, Q5o:0.076, K5o:0.0091, A5o:0.0096, 63s:0.0108, 64s:0.0008, K6o:0.0051, A6o:0.0175, 72s:0.0334, 73s:0.0359, 76s:0.0013, 77:0.0288, 97o:0.0015, Q7o:0.0015, K7o:0.0298, A7o:0.0261, 83s:0.0041, 87s:0.0021, 88:0.0096, A8o:0.0274, 95s:0.0007, 96s:0.0009, Q9o:0.0154, T3s:0.0002, T4s:0.0021, T5s:0.001, T6s:0.0008, TT:0.0519, QTo:0.0688, KTo:0.0294, ATo:0.0684, J3s:0.0562, J4s:0.001, J5s:0.123, J8s:0.0075, JTs:0.0664, JJ:0.1618, QJo:0.0559, KJo:0.0131, AJo:0.1407, Q2s:0.235, Q3s:0.0361, Q4s:0.1016, Q5s:0.3015, Q6s:0.3752, Q7s:0.0945, Q8s:0.3843, Q9s:0.1756, QTs:0.0084, QJs:0.0095, QQ:0.7301, KQo:0.616, AQo:0.6641, K2s:0.0001, K3s:0.0192, K4s:0.0826, K6s:0.2356, K7s:0.0409, K8s:0.0004, K9s:0.0439, KTs:0.0003, KQs:0.0225, KK:0.6162, AKo:0.4295, A2s:0.0006, A4s:0.0549, A5s:0.1527, A7s:0.0013, A8s:0.1739, A9s:0.0285, ATs:0.0104, AJs:0.0817, AQs:0.4525, AKs:0.4608, AA:0.9886"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, 43s:0.0006, 44:0.0014, 54s:0.0081, 55:0.03, Q5o:0.0007, K5o:0.0019, 63s:0.0011, 64s:0.0001, 65s:0.0004, A6o:0.0224, 73s:0.006, 75s:0.0001, 76s:0.0001, 77:0.008, 84s:0.0054, 85s:0.0017, 87s:0.0045, 88:0.0111, A8o:0.0007, 95s:0.0001, 97s:0.004, 99:0.0001, A9o:0.0005, TT:0.0094, J2s:0.0089, J3s:0.0027, J5s:0.0253, J6s:0.0001, J8s:0.0441, JTs:0.12, JJ:0.0506, QJo:0.11, KJo:0.0082, AJo:0.0193, Q2s:0.0203, Q3s:0.0023, Q4s:0.0202, Q5s:0.0445, Q6s:0.0211, Q7s:0.0048, Q9s:0.0307, QTs:0.0061, QJs:0.0001, QQ:0.2697, KQo:0.3026, AQo:0.0914, K2s:0.0414, K4s:0.0041, K6s:0.0469, K7s:0.0015, K8s:0.0404, K9s:0.0099, KTs:0.0929, KJs:0.3105, KQs:0.4109, KK:0.3838, AKo:0.5681, A3s:0.0859, A4s:0.1158, A5s:0.0328, A6s:0.0611, A7s:0.0021, A8s:0.045, A9s:0.0167, ATs:0.009, AJs:0.1994, AQs:0.0193, AKs:0.4598, AA:0.0114"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25|BB:CALL@36.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42o:0.0001, 32s:0.0001, 44:0.0002, 64o:0.0001, 54s:0.0002, 85o:0.0001, 64s:0.0016, 65s:0.0001, T6o:0.0003, 73s:0.0001, 76s:0.0001, 83s:0.0001, 84s:0.0011, 85s:0.0001, 86s:0.0001, 94s:0.0001, 95s:0.0001, 96s:0.0022, 99:0.0001, Q9o:0.0001, T4s:0.0001, T5s:0.0007, T6s:0.0002, T8s:0.0002, T9s:0.0001, TT:0.0004, J3s:0.0004, J8s:0.0003, JTs:0.0003, JJ:0.0001, Q3s:0.0002, Q4s:0.0001, Q6s:0.0001, Q7s:0.0001, QTs:0.0001, QJs:0.0002, QQ:0.0001, AQo:0.0002, K6s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0003, KK:0.0045, AKo:0.0001, A2s:0.0002, A3s:0.0001, A4s:0.0001, A6s:0.0001, A8s:0.0001, ATs:0.0001, AJs:0.0005, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0001, 33:0.0001, A3o:0.0001, 42s:0.0004, 44:0.0009, 54o:0.0001, 52s:0.0003, 54s:0.0006, Q5o:0.0001, 63s:0.0006, 64s:0.0001, 66:0.0003, 86o:0.0001, K6o:0.0001, 77:0.0001, 86s:0.0003, 87s:0.0002, 88:0.0004, 92s:0.0002, 95s:0.0001, 96s:0.0004, 97s:0.0001, 98s:0.0001, J9o:0.0001, T5s:0.0001, T6s:0.0002, T7s:0.0008, T8s:0.0004, T9s:0.0003, J6s:0.0012, J7s:0.0003, JTs:0.0001, JJ:0.0003, QJo:0.0001, Q2s:0.0002, Q3s:0.0001, Q4s:0.0021, Q5s:0.0002, Q6s:0.0001, QTs:0.001, QJs:0.0009, QQ:0.0001, KQo:0.0001, K3s:0.0005, K4s:0.0001, K6s:0.0002, K7s:0.0012, KTs:0.0003, KJs:0.0006, KK:0.0027, AKo:0.0007, A2s:0.0001, A3s:0.0001, A5s:0.0002, A6s:0.0008, A8s:0.0003, A9s:0.0012, ATs:0.0006, AQs:0.0003, AKs:0.0091, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1099, 42o:0.0011, 92o:0.0007, T2o:0.0004, Q2o:0.0005, 33:0.0046, 43o:0.0008, 63o:0.0004, 93o:0.0004, J3o:0.0004, 42s:0.0221, 43s:0.0023, 64o:0.0011, 84o:0.0003, J4o:0.0011, A4o:0.0004, 52s:0.0467, 53s:0.0025, 55:0.0108, 75o:0.0003, 85o:0.0001, 95o:0.0005, J5o:0.0004, Q5o:0.0008, A5o:0.0022, 62s:0.0038, 65s:0.0014, 76o:0.0008, J6o:0.0003, A6o:0.0003, 72s:0.0157, 74s:0.0168, 75s:0.0029, 76s:0.2151, 77:0.1068, 97o:0.0005, Q7o:0.0003, 82s:0.0108, 83s:0.0007, 85s:0.0076, 86s:0.0013, 87s:0.0117, 88:0.0282, 98o:0.0005, Q8o:0.0002, 93s:0.0021, 94s:0.0036, 95s:0.0239, 96s:0.0146, 97s:0.0011, 98s:0.0018, 99:0.019, J9o:0.0045, K9o:0.0003, A9o:0.0017, T3s:0.0075, T7s:0.0101, T9s:0.0039, TT:0.0462, QTo:0.0001, ATo:0.0049, J2s:0.0026, J3s:0.0126, J6s:0.004, J8s:0.1765, JTs:0.0229, JJ:0.026, QJo:0.0022, AJo:0.0003, Q2s:0.0026, Q3s:0.0057, Q5s:0.0027, Q6s:0.0422, Q7s:0.0085, Q8s:0.0051, Q9s:0.0029, QJs:0.0189, QQ:0.1841, AQo:0.0061, K2s:0.0137, K6s:0.0069, K7s:0.0208, K8s:0.0093, K9s:0.0004, KTs:0.0024, KK:0.0011, AKo:0.0047, A3s:0.0551, A4s:0.0099, A6s:0.006, A7s:0.0088, A9s:0.0104, ATs:0.0038, AJs:0.0036, AKs:0.0697, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, T2o:0.0001, J2o:0.0004, 33:0.0031, 63o:0.0002, 73o:0.0014, 83o:0.0006, T3o:0.0014, 44:0.0044, 54o:0.0001, 64o:0.0007, T4o:0.0002, J4o:0.0005, Q4o:0.001, A4o:0.0004, 53s:0.0149, 75o:0.0019, 95o:0.0007, Q5o:0.0005, A5o:0.0001, 65s:0.1744, 66:0.0516, 76o:0.0008, 75s:0.0019, 76s:0.0275, 97o:0.0019, T7o:0.0003, J7o:0.0002, K7o:0.0014, A7o:0.0005, 83s:0.0026, 85s:0.0502, 86s:0.0051, 88:0.0007, K8o:0.001, 93s:0.0014, 94s:0.0096, 96s:0.0416, 97s:0.0046, 98s:0.0188, 99:0.0238, K9o:0.0004, A9o:0.0014, T4s:0.0009, T5s:0.0042, QTo:0.0004, KTo:0.0001, ATo:0.0037, J2s:0.0003, J4s:0.0089, J5s:0.0157, J7s:0.0159, JTs:0.0606, QJo:0.0002, KJo:0.003, AJo:0.001, Q2s:0.0042, Q6s:0.002, Q8s:0.0002, QTs:0.0014, QJs:0.0015, QQ:0.0299, AQo:0.0008, K2s:0.0068, K4s:0.0018, K5s:0.0158, K6s:0.0028, KTs:0.0174, KJs:0.0116, KK:0.7545, AKo:0.0011, A2s:0.0038, A3s:0.0156, A4s:0.003, A6s:0.0325, A7s:0.0005, A8s:0.0049, A9s:0.0107, ATs:0.0078, AKs:0.0421, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25|SB:CALL@36.75",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 42s:0.0002, 43s:0.0001, 54o:0.0001, J4o:0.0001, 52s:0.0001, 55:0.0002, 75o:0.0001, 63s:0.0001, 64s:0.0001, 65s:0.0004, 75s:0.0002, A7o:0.0001, 83s:0.0003, 84s:0.0012, 85s:0.0001, 86s:0.0001, 88:0.0002, J8o:0.0002, 96s:0.0001, 98s:0.0002, Q9o:0.0001, T3s:0.0001, T6s:0.0001, T9s:0.0002, TT:0.0003, J2s:0.0005, J3s:0.0001, J9s:0.0003, JTs:0.0001, JJ:0.0002, QJo:0.0001, Q3s:0.0003, Q4s:0.0001, Q6s:0.0002, Q7s:0.0007, Q9s:0.0007, QQ:0.0001, AQo:0.0005, K5s:0.0001, K6s:0.0001, K8s:0.0002, KJs:0.0005, KQs:0.0002, KK:0.0278, AKo:0.0004, A2s:0.0001, A5s:0.0005, A6s:0.0002, A8s:0.0005, A9s:0.0002, ATs:0.0002, AKs:0.0013, AA:0.9974"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@37.25|SB:CALL@36.75",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0106, 32o:0.0002, 42o:0.0001, 52o:0.0002, 62o:0.0001, 92o:0.0001, T2o:0.0004, J2o:0.0005, K2o:0.0021, 32s:0.0011, 73o:0.0005, 83o:0.0003, J3o:0.0003, K3o:0.0004, A3o:0.0001, 42s:0.0013, 44:0.0965, 54o:0.0005, 64o:0.0001, 94o:0.0004, T4o:0.0003, A4o:0.0008, 52s:0.0015, 53s:0.0033, 54s:0.0009, 55:0.0018, 95o:0.0003, T5o:0.0002, Q5o:0.0002, 63s:0.0086, 64s:0.0017, 65s:0.0029, 66:0.0965, 76o:0.0003, 86o:0.0002, J6o:0.0002, Q6o:0.0001, A6o:0.0011, 72s:0.001, 76s:0.0065, 77:0.0978, 87o:0.0006, T7o:0.0006, K7o:0.0004, 82s:0.0015, 83s:0.0092, 84s:0.0034, 85s:0.0016, 88:0.0005, 98o:0.0003, T8o:0.0008, Q8o:0.0008, K8o:0.0003, 92s:0.0017, 93s:0.0013, 96s:0.0013, 97s:0.0018, 98s:0.0011, 99:0.0022, Q9o:0.0004, K9o:0.0002, T4s:0.0031, T6s:0.0243, T7s:0.012, T9s:0.1344, TT:0.3424, ATo:0.0004, J3s:0.0141, J5s:0.0314, J6s:0.0007, J8s:0.0013, J9s:0.0044, JTs:0.0008, JJ:0.066, QJo:0.0002, KJo:0.0038, AJo:0.0004, Q2s:0.0025, Q3s:0.0014, Q4s:0.0145, Q7s:0.01, Q8s:0.0059, Q9s:0.0022, QTs:0.009, QJs:0.0034, QQ:0.0012, AQo:0.003, K2s:0.0046, K3s:0.0065, K4s:0.0405, K5s:0.0052, K6s:0.0023, K7s:0.0018, KJs:0.011, KK:0.0216, AKo:0.0115, A2s:0.0025, A3s:0.0127, A4s:0.0108, A6s:0.0023, A7s:0.0316, A8s:0.0487, A9s:0.0001, ATs:0.0665, AJs:0.0016, AQs:0.0411, AKs:0.0496, AA:0.8383"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@11.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54o:0.0001, 55:0.0003, 63s:0.0002, 66:0.0001, 72s:0.0026, 74s:0.0001, 75s:0.0002, 85s:0.0002, 86s:0.001, 88:0.0003, 96s:0.0001, 97s:0.0003, 98s:0.0004, T3s:0.0045, T4s:0.0001, TT:0.0003, J2s:0.0001, J4s:0.0001, J8s:0.0001, J9s:0.001, JJ:0.0013, Q3s:0.002, Q5s:0.0001, Q6s:0.0003, Q8s:0.0001, QTs:0.0001, QQ:0.0019, K2s:0.0003, K4s:0.0002, K7s:0.0001, K9s:0.0084, KJs:0.0022, KQs:0.0006, KK:0.5098, AKo:0.0759, A2s:0.0096, A3s:0.0011, A4s:0.0001, A5s:0.0001, A6s:0.0003, A7s:0.0061, A9s:0.0003, ATs:0.0003, AQs:0.0015, AKs:0.2817, AA:0.0509"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0045, 42s:0.0001, A4o:0.007, 53s:0.0001, A5o:0.0404, 65s:0.0258, 66:0.0002, A6o:0.0404, 74s:0.0029, 75s:0.0165, 76s:0.0665, 77:0.0125, A7o:0.0056, 84s:0.0122, 86s:0.0276, 87s:0.0149, 88:0.03, K8o:0.0001, A8o:0.0313, 94s:0.0001, 98s:0.0002, 99:0.0039, A9o:0.0113, T3s:0.0009, T7s:0.0001, TT:0.0059, ATo:0.0113, J2s:0.0001, J3s:0.0002, J4s:0.0001, J5s:0.0002, J9s:0.0012, JTs:0.0008, JJ:0.0002, Q5s:0.0001, Q6s:0.0064, Q8s:0.0001, Q9s:0.0001, QTs:0.0006, QJs:0.0002, QQ:0.3267, AQo:0.2419, K2s:0.0001, K3s:0.0001, K4s:0.0001, K7s:0.0043, KTs:0.0058, KJs:0.001, KK:0.3514, AKo:0.5544, A2s:0.3559, A3s:0.1767, A4s:0.0843, A5s:0.4892, A6s:0.6363, A7s:0.0637, A8s:0.0422, A9s:0.1039, ATs:0.1437, AJs:0.316, AQs:0.8309, AKs:0.6375, AA:0.9491"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0885, A2o:0.004, 32s:0.0798, 33:0.1649, 43o:0.0132, 42s:0.0622, 43s:0.0456, 44:0.2463, 54o:0.0229, A4o:0.0039, 52s:0.0521, 53s:0.0828, 54s:0.2131, 55:0.278, 65o:0.0608, 75o:0.0193, A5o:0.0246, 62s:0.0047, 63s:0.0001, 64s:0.1829, 65s:0.1425, 66:0.3457, 76o:0.03, 86o:0.0018, 74s:0.0804, 75s:0.1357, 76s:0.1741, 77:0.4589, 87o:0.0344, 82s:0.0322, 83s:0.0016, 84s:0.0104, 85s:0.1182, 86s:0.0017, 87s:0.0034, 88:0.3089, 98o:0.0274, T8o:0.0777, J8o:0.0248, A8o:0.0001, 92s:0.0013, 93s:0.0238, 95s:0.0027, 96s:0.0791, 97s:0.1047, 98s:0.0356, 99:0.5604, T9o:0.0024, J9o:0.0219, A9o:0.0205, T3s:0.0239, T4s:0.0001, T5s:0.0013, T6s:0.0094, T7s:0.0002, T8s:0.1744, T9s:0.1893, TT:0.4167, JTo:0.0581, KTo:0.0014, ATo:0.0577, J2s:0.0027, J3s:0.0443, J4s:0.0278, J5s:0.0166, J6s:0.0479, J7s:0.0727, J8s:0.1586, J9s:0.0016, JTs:0.1557, JJ:0.4083, KJo:0.0024, AJo:0.0005, Q2s:0.0001, Q3s:0.0005, Q6s:0.0014, Q7s:0.0005, Q9s:0.0343, QTs:0.0216, QJs:0.0875, QQ:0.988, AQo:0.5084, K2s:0.0202, K3s:0.0004, K4s:0.003, K5s:0.018, K7s:0.0069, K8s:0.0286, K9s:0.0076, KTs:0.0862, KJs:0.0917, KQs:0.0285, KK:0.9431, AKo:0.2841, A2s:0.0659, A3s:0.0566, A4s:0.2007, A5s:0.2165, A6s:0.021, A7s:0.2458, A8s:0.1432, A9s:0.2365, ATs:0.5212, AJs:0.5982, AQs:0.9548, AKs:0.2007, AA:0.358"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0284, A2o:0.0014, 32s:0.0003, 33:0.0474, A3o:0.0026, 43s:0.0001, 44:0.0368, A4o:0.0013, 52s:0.005, 53s:0.0064, 54s:0.0034, 55:0.0561, A5o:0.0023, 63s:0.0003, 64s:0.0003, 65s:0.0001, 66:0.0372, 76o:0.0003, A6o:0.0001, 74s:0.0001, 75s:0.017, 76s:0.0272, 77:0.0471, 87o:0.0009, A7o:0.0008, 82s:0.0001, 83s:0.0267, 86s:0.0168, 87s:0.009, 88:0.026, A8o:0.0015, 92s:0.0026, 93s:0.0001, 96s:0.0004, 98s:0.0506, 99:0.0387, T2s:0.0001, T3s:0.0001, T5s:0.0007, T6s:0.0001, T7s:0.0029, T8s:0.0001, T9s:0.0009, TT:0.088, ATo:0.003, J5s:0.0001, J7s:0.0001, J8s:0.0012, JTs:0.0014, JJ:0.0427, AJo:0.0007, Q3s:0.0004, Q7s:0.0003, QJs:0.0001, QQ:0.0026, AQo:0.0071, K2s:0.0019, K3s:0.0029, K5s:0.0076, K7s:0.03, K9s:0.0098, KTs:0.0005, KJs:0.0009, KQs:0.0002, KK:0.0569, AKo:0.6928, A2s:0.1037, A3s:0.2803, A4s:0.3081, A5s:0.4346, A6s:0.1011, A7s:0.1844, A8s:0.1308, A9s:0.131, ATs:0.1462, AJs:0.3046, AQs:0.0415, AKs:0.7993, AA:0.642"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "73s:0.0001, 88:0.0001, 99:0.0001, TT:0.0006, JJ:0.0045, Q6s:0.0001, Q8s:0.0001, QJs:0.0001, QQ:0.0008, KJs:0.0006, KK:0.9799, A7s:0.0002, ATs:0.0001, AJs:0.0019, AQs:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0131, 99:0.0419, TT:0.2132, JJ:0.1714, QQ:0.2715, KK, AKo:0.9975, AQs:0.0001, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "62o:0.0001, 32s:0.0004, 33:0.0001, 53o:0.0001, K3o:0.0002, 42s:0.0005, 43s:0.0001, 44:0.0001, 64o:0.0001, 54s:0.0004, 55:0.0001, 63s:0.0004, 64s:0.0001, 65s:0.0002, 66:0.0001, 96o:0.0006, T6o:0.0003, A6o:0.0001, 75s:0.0001, 76s:0.0002, T7o:0.0001, 82s:0.0003, 85s:0.0002, 86s:0.0008, 88:0.0001, 93s:0.0001, 94s:0.0017, 95s:0.0001, 99:0.0002, A9o:0.0004, T3s:0.0001, T5s:0.0003, T8s:0.0001, TT:0.0002, J3s:0.0008, J5s:0.0004, J6s:0.0005, J9s:0.0001, JJ:0.0003, AJo:0.0006, Q4s:0.0001, Q9s:0.0001, QQ:0.0481, K3s:0.001, K5s:0.0011, K8s:0.0001, KTs:0.0003, KJs:0.0004, KQs:0.0002, KK:0.7424, AKo:0.2606, A2s:0.0001, A3s:0.0061, A4s:0.1627, A5s:0.0057, A6s:0.0006, A7s:0.042, A8s:0.0041, A9s:0.307, ATs:0.3895, AJs:0.1937, AQs:0.4907, AKs:0.223, AA:0.255"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0258, A3o:0.0432, 42s:0.0002, 44:0.0491, A4o:0.0019, 52s:0.0079, 53s:0.0001, 54s:0.036, 55:0.0037, 95o:0.0001, A5o:0.0805, 63s:0.0002, 64s:0.0278, 66:0.0233, 72s:0.0001, 73s:0.0029, 75s:0.0223, 77:0.0289, A7o:0.0085, 85s:0.0001, 86s:0.0254, 87s:0.0167, A8o:0.0027, 94s:0.0001, 95s:0.0002, 96s:0.0035, 97s:0.0267, 98s:0.0013, 99:0.0004, T3s:0.0006, TT:0.0477, KTo:0.0001, ATo:0.0011, J7s:0.0001, J8s:0.0002, J9s:0.0001, JJ:0.0009, AJo:0.0014, Q2s:0.0001, Q6s:0.0002, Q7s:0.0001, Q9s:0.0002, QQ:0.0557, AQo:0.0029, K5s:0.0004, K9s:0.0002, KQs:0.0002, KK:0.0053, AKo:0.12, A2s:0.0823, A3s:0.188, A4s:0.1088, A5s:0.0005, A6s:0.005, A7s:0.1555, A8s:0.2335, A9s:0.0147, ATs:0.0566, AJs:0.0096, AQs:0.0565, AKs:0.5931, AA:0.745"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5726, K2o:0.0014, A2o:0.0001, 32s:0.0046, 33:0.5697, 42s:0.0749, 43s:0.0521, 44:0.9063, 54o:0.0639, A4o:0.0122, 52s:0.0048, 53s:0.1744, 54s:0.4279, 55:0.9843, 65o:0.0558, A5o:0.0009, 62s:0.0469, 63s:0.0075, 64s:0.2534, 65s:0.42, 66:0.9817, 76o:0.0389, A6o:0.0001, 73s:0.0382, 74s:0.0238, 75s:0.1173, 76s:0.3199, 77:0.7864, 97o:0.0003, J7o:0.0025, K7o:0.0009, A7o:0.0008, 82s:0.0001, 84s:0.0001, 85s:0.1711, 86s:0.2612, 87s:0.2834, 88:0.7546, 98o:0.0102, Q8o:0.0014, K8o:0.0232, A8o:0.0137, 93s:0.0226, 94s:0.0069, 95s:0.0002, 96s:0.1109, 97s:0.1248, 98s:0.1916, 99:0.6526, A9o:0.1531, T4s:0.0041, T5s:0.0214, T7s:0.0018, T8s:0.2236, T9s:0.2521, TT:0.3821, JTo:0.0373, QTo:0.0002, KTo:0.0001, ATo:0.15, J3s:0.0061, J4s:0.0002, J5s:0.0002, J6s:0.054, J7s:0.0009, J8s:0.0744, J9s:0.0715, JTs:0.2179, JJ:0.6846, KJo:0.0158, AJo:0.2297, Q2s:0.0004, Q4s:0.0002, Q5s:0.0105, Q6s:0.0005, Q8s:0.0366, Q9s:0.0003, QTs:0.1625, QJs:0.1022, QQ:0.9785, AQo:0.666, K2s:0.0121, K3s:0.04, K5s:0.0049, K6s:0.1717, K7s:0.0393, K8s:0.0717, K9s:0.0588, KTs:0.0613, KJs:0.0552, KQs:0.002, KK:0.9988, AKo:0.6041, A2s:0.2329, A3s:0.2571, A4s:0.2117, A5s:0.3483, A6s:0.2321, A7s:0.4917, A8s:0.4034, A9s:0.6642, ATs:0.7813, AJs:0.7243, AQs:0.9963, AKs:0.5124, AA:0.1978"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0066, T2o:0.0009, A2o:0.0068, 33:0.0041, 43o:0.0014, 53o:0.0025, 63o:0.0013, A3o:0.0188, 43s:0.0001, 44:0.0046, 54o:0.0011, 64o:0.0017, 74o:0.0013, A4o:0.005, 52s:0.0036, 53s:0.0053, 54s:0.0034, 55:0.0091, 65o:0.0032, 75o:0.0018, K5o:0.0003, A5o:0.0093, 62s:0.0023, 63s:0.003, 64s:0.0033, 65s:0.0074, 66:0.0003, 76o:0.0036, 86o:0.0015, 96o:0.0014, A6o:0.0048, 72s:0.0011, 73s:0.009, 74s:0.0045, 75s:0.0056, 76s:0.0066, 77:0.0035, 87o:0.0028, 97o:0.0024, T7o:0.0015, A7o:0.0063, 82s:0.0023, 83s:0.0042, 84s:0.0016, 85s:0.0065, 86s:0.0018, 87s:0.004, 88:0.0037, 98o:0.0021, T8o:0.0028, A8o:0.0042, 93s:0.0004, 94s:0.0001, 95s:0.0034, 96s:0.0011, 97s:0.0022, 98s:0.0054, 99:0.0067, T9o:0.0013, J9o:0.0004, K9o:0.0017, A9o:0.0077, T2s:0.0006, T3s:0.004, T4s:0.0003, T5s:0.0043, T6s:0.0026, T7s:0.0028, T8s:0.0028, T9s:0.0027, TT:0.0048, JTo:0.0014, QTo:0.0009, KTo:0.0019, ATo:0.0073, J2s:0.0005, J3s:0.0008, J5s:0.0025, J6s:0.0036, J7s:0.0065, J8s:0.0005, J9s:0.0015, JTs:0.0013, JJ:0.0004, KJo:0.0003, AJo:0.0051, Q2s:0.003, Q3s:0.0047, Q4s:0.0016, Q5s:0.0018, Q6s:0.0001, Q8s:0.0015, Q9s:0.0017, QJs:0.0005, QQ:0.0003, AQo:0.002, K2s:0.0016, K3s:0.0011, K4s:0.0052, K5s:0.004, K7s:0.0013, K8s:0.0006, K9s:0.0011, KTs:0.0061, KJs:0.0011, KQs:0.0038, KK:0.0004, AKo:0.3955, A2s:0.1825, A3s:0.246, A4s:0.3011, A5s:0.1274, A6s:0.1463, A7s:0.0735, A8s:0.105, A9s:0.091, ATs:0.069, AJs:0.0367, AQs:0.0023, AKs:0.4875, AA:0.8022"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 72o:0.0003, A2o:0.0001, 32s:0.0001, 33:0.0001, K3o:0.0001, A3o:0.0001, 42s:0.0001, 44:0.0001, J4o:0.0001, 85o:0.0001, 63s:0.0001, 64s:0.0002, 65s:0.0004, 66:0.0001, 86o:0.0001, 96o:0.0001, 74s:0.0006, 75s:0.0008, 76s:0.0001, 82s:0.0002, 83s:0.0001, 84s:0.0003, 85s:0.0017, 88:0.0951, 95s:0.0205, 97s:0.0002, 98s:0.0006, 99:0.0003, K9o:0.0003, T2s:0.0467, T4s:0.0001, T5s:0.0039, T6s:0.0013, T7s:0.0037, T8s:0.0002, T9s:0.0001, TT:0.0041, QTo:0.0001, ATo:0.0013, J2s:0.0011, J9s:0.0002, JTs:0.0001, JJ:0.0002, Q4s:0.0007, Q5s:0.0003, Q6s:0.0019, Q7s:0.0003, Q8s:0.0016, Q9s:0.0029, QJs:0.0001, QQ:0.012, K2s:0.0021, K3s:0.0053, K4s:0.0001, K5s:0.0003, K6s:0.0001, K7s:0.0041, K9s:0.0008, KJs:0.0002, KQs:0.0011, KK:0.0013, AKo:0.0006, A3s:0.0333, A4s:0.0074, A5s:0.0008, A6s:0.0002, A7s:0.0039, A8s:0.1407, A9s:0.012, ATs:0.0033, AJs:0.0007, AQs:0.3191, AKs:0.1705, AA:0.9836"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 82o:0.0002, T2o:0.0001, 33:0.0002, T3o:0.0001, A3o:0.0001, 42s:0.0068, 44:0.0011, 54s:0.0005, 55:0.0002, 65o:0.0001, 85o:0.0001, K5o:0.0001, 64s:0.0001, 65s:0.0001, 66:0.0003, 96o:0.0001, 73s:0.0003, 76s:0.0007, 77:0.0002, 97o:0.0001, T7o:0.0001, J7o:0.0002, A7o:0.0006, 83s:0.0001, 88:0.0084, 98o:0.0001, Q8o:0.0001, 92s:0.0003, 94s:0.0006, 95s:0.0009, 96s:0.0003, 97s:0.0001, 98s:0.0016, 99:0.0003, A9o:0.0015, T3s:0.0001, T6s:0.0004, T7s:0.0001, T8s:0.0035, T9s:0.0006, TT:0.0154, ATo:0.0006, J2s:0.0001, J4s:0.0001, J6s:0.0003, J7s:0.0001, JTs:0.0002, JJ:0.0003, QJo:0.0001, AJo:0.0001, Q4s:0.0005, Q5s:0.0008, Q6s:0.003, QTs:0.0005, QQ:0.0032, K2s:0.0036, K3s:0.0013, K4s:0.0005, K5s:0.0002, K6s:0.0001, K8s:0.0002, K9s:0.0002, KJs:0.002, KQs:0.0009, KK:0.4213, AKo:0.5754, A2s:0.0006, A3s:0.0021, A4s:0.0002, A5s:0.3154, A6s:0.0009, A7s:0.0006, A8s:0.003, A9s:0.0511, ATs:0.0016, AJs:0.1278, AQs:0.1417, AKs:0.1253, AA:0.9966"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T8s:0.0001, JJ:0.0001, QQ:0.001, K9s:0.0001, KK:0.9996, A4s:0.0003, A6s:0.0001, A8s:0.0001, AQs:0.0001, AKs:0.0255, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0002, QQ:0.0003, KK, AKo:0.6222, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0002, 63o:0.0001, A3o:0.0001, 42s:0.0001, 43s:0.0001, K4o:0.0001, 53s:0.0002, 54s:0.0006, 55:0.0001, 63s:0.0001, 96o:0.0001, T6o:0.0001, Q6o:0.0001, 73s:0.0007, 75s:0.0003, 76s:0.0012, 83s:0.0001, 86s:0.0001, 88:0.0029, 93s:0.0001, 95s:0.0002, 96s:0.0001, 97s:0.0002, 98s:0.0103, 99:0.0004, T9o:0.0003, T5s:0.0004, T7s:0.0002, T8s:0.0006, TT:0.0013, J4s:0.001, J5s:0.0003, J6s:0.0001, J8s:0.0001, J9s:0.0085, JTs:0.0002, KJo:0.0001, AJo:0.0001, Q3s:0.0001, Q5s:0.0038, Q8s:0.0001, QTs:0.0001, QJs:0.0028, QQ:0.0013, AQo:0.0002, K2s:0.0005, K4s:0.0011, K5s:0.0003, K6s:0.0002, K7s:0.0002, K8s:0.0012, KTs:0.0002, KJs:0.0005, KQs:0.0023, KK:0.9948, A2s:0.0006, A3s:0.0004, A4s:0.0013, A5s:0.0004, A7s:0.001, A8s:0.0009, A9s:0.0009, ATs:0.0015, AJs:0.0002, AQs:0.0001, AKs:0.0417, AA:0.9992"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, J2o:0.0001, 63o:0.0001, K3o:0.0001, A3o:0.0003, 42s:0.0001, A4o:0.0014, 53s:0.0002, 54s:0.0003, 55:0.0001, K5o:0.0001, A5o:0.0002, Q6o:0.0001, 73s:0.0004, 74s:0.0001, 75s:0.0009, 82s:0.0001, 83s:0.0001, 86s:0.0002, 87s:0.0008, T8o:0.0001, Q8o:0.0001, K8o:0.0001, A8o:0.0001, 92s:0.0001, 93s:0.0004, 95s:0.0001, 96s:0.0007, 98s:0.0038, 99:0.0009, Q9o:0.0001, T5s:0.0001, T9s:0.0002, TT:0.0001, JTo:0.0001, QTo:0.0001, J4s:0.0003, J5s:0.0001, J6s:0.0006, J7s:0.0001, J8s:0.0001, JJ:0.0079, Q7s:0.0013, Q8s:0.0013, Q9s:0.0018, QJs:0.0009, KQo:0.0001, K2s:0.0001, K3s:0.0003, K4s:0.0001, K6s:0.0007, K8s:0.0003, K9s:0.0014, KTs:0.0002, KQs:0.0004, KK:0.9478, AKo:0.008, A3s:0.0042, A5s:0.0006, A6s:0.0014, A7s:0.0011, A8s:0.0002, AJs:0.002, AQs:0.0096, AKs:0.0248, AA:0.9972"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|LJ:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0684, 33:0.1733, 43o:0.0004, A3o:0.0005, 43s:0.1014, 44:0.756, 54o:0.001, 64o:0.0003, A4o:0.0007, 52s:0.0038, 53s:0.0069, 54s:0.7013, 55:0.9225, 65o:0.0036, A5o:0.0012, 63s:0.003, 64s:0.1445, 65s:0.7637, 66:0.9757, 76o:0.0047, 74s:0.011, 75s:0.1415, 76s:0.592, 77:0.8971, 87o:0.0003, A7o:0.0009, 84s:0.0016, 85s:0.0066, 86s:0.357, 87s:0.4113, 88:0.8798, 98o:0.0001, 94s:0.0014, 95s:0.0011, 96s:0.0048, 97s:0.2722, 98s:0.2903, 99:0.8854, A9o:0.0008, T6s:0.0027, T7s:0.097, T8s:0.5181, T9s:0.8287, TT:0.5911, J7s:0.0043, J8s:0.003, J9s:0.3034, JTs:0.8327, JJ:0.7548, AJo:0.4463, Q4s:0.0001, Q6s:0.0024, Q7s:0.0014, Q9s:0.0897, QTs:0.5119, QJs:0.3385, QQ:0.8665, AQo:0.9039, K2s:0.0008, K3s:0.0045, K4s:0.0043, K5s:0.0013, K6s:0.0034, K7s:0.0022, K9s:0.0017, KTs:0.2749, KJs:0.3263, KQs:0.3264, KK:0.8644, AKo:0.1476, A2s:0.0054, A3s:0.0867, A4s:0.0664, A5s:0.4474, A6s:0.0021, A7s:0.2019, A8s:0.3434, A9s:0.4639, ATs:0.7634, AJs:0.9326, AQs:0.913, AKs:0.3671, AA:0.4773"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0598, 33:0.0567, 44:0.05, 54s:0.0003, 55:0.0156, 64s:0.0007, 65s:0.0007, 66:0.0101, 75s:0.0002, 77:0.0027, 88:0.0148, 99:0.0034, T9s:0.0001, TT:0.4009, ATo:0.0044, JTs:0.0001, JJ:0.2374, AJo:0.0494, QQ:0.1315, AQo:0.0838, K2s:0.0001, K5s:0.0001, K8s:0.0001, KQs:0.0001, KK:0.1356, AKo:0.8524, A2s:0.3259, A3s:0.2644, A4s:0.3121, A5s:0.201, A6s:0.1439, A7s:0.1427, A8s:0.0822, A9s:0.1343, ATs:0.223, AJs:0.0618, AQs:0.0866, AKs:0.6329, AA:0.5227"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|LJ:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.2195, JJ:0.9415, QQ, KK, AKo:0.9108, AQs:0.0002, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.0002, 32s:0.0031, 44:0.0001, 62s:0.0001, A7o:0.001, 86s:0.0001, 88:0.0001, 94s:0.0001, 96s:0.0004, 98s:0.0004, 99:0.0002, T4s:0.0003, T5s:0.0002, T7s:0.0002, T8s:0.0001, T9s:0.0001, TT:0.0002, J4s:0.0001, J7s:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0002, Q4s:0.0007, Q6s:0.0001, Q8s:0.0002, QQ:0.0462, AQo:0.0033, K3s:0.0016, K5s:0.0001, K6s:0.0001, K9s:0.0001, KTs:0.0015, KQs:0.0003, KK:0.0733, AKo:0.0382, A4s:0.0119, A5s:0.0002, A6s:0.0001, A8s:0.0093, A9s:0.0095, ATs:0.0009, AJs:0.0001, AQs:0.0004, AKs:0.0055, AA:0.2643"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.0248, 43s:0.0624, A4o:0.015, 53s:0.0003, 54s:0.0075, 55:0.0001, 64s:0.0002, 65s:0.0001, 66:0.0067, 72s:0.0001, 75s:0.0083, 77:0.0495, A7o:0.0094, 86s:0.0004, 94s:0.0004, 97s:0.0001, 98s:0.0001, 99:0.0137, T2s:0.0001, T3s:0.0001, T4s:0.0001, T9s:0.0001, TT:0.0005, ATo:0.038, J2s:0.0001, J4s:0.0001, J8s:0.0073, JJ:0.045, AJo:0.0001, Q2s:0.0002, Q4s:0.0001, Q8s:0.0001, QJs:0.0001, QQ:0.3288, AQo:0.0227, K3s:0.0008, K6s:0.0002, KQs:0.0001, KK:0.397, AKo:0.5134, A2s:0.1761, A3s:0.0884, A4s:0.1406, A5s:0.1281, A6s:0.0056, A7s:0.0112, A8s:0.1101, A9s:0.2842, ATs:0.0588, AJs:0.4693, AKs:0.7409, AA:0.7356"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2384, 33:0.2054, 44:0.2968, 54o:0.0101, 52s:0.0017, 53s:0.0114, 54s:0.2913, 55:0.317, 65o:0.0152, 75o:0.0036, 64s:0.2836, 65s:0.4864, 66:0.5102, 76o:0.0039, A6o:0.0125, 74s:0.1316, 75s:0.2226, 76s:0.3714, 77:0.5613, A7o:0.0033, 85s:0.0711, 86s:0.1007, 87s:0.2129, 88:0.3666, 98o:0.0149, A8o:0.0078, 95s:0.0006, 96s:0.0189, 97s:0.1501, 98s:0.1864, 99:0.5351, A9o:0.0405, T7s:0.0259, T8s:0.1502, T9s:0.3821, TT:0.6081, ATo:0.1901, J8s:0.0917, J9s:0.1957, JTs:0.2063, JJ:0.693, AJo:0.1523, Q8s:0.0124, Q9s:0.0105, QTs:0.1012, QJs:0.1011, QQ:0.8219, AQo:0.5669, K5s:0.0105, K6s:0.0003, KJs:0.4297, KK:0.8136, AKo:0.3861, A2s:0.0191, A3s:0.1011, A4s:0.4274, A5s:0.1276, A6s:0.2193, A7s:0.5016, A8s:0.359, A9s:0.4996, ATs:0.5641, AJs:0.2278, AQs:0.9454, AKs:0.4966, AA:0.1345"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0284, A2o:0.0575, 32s:0.0001, 33:0.0215, A3o:0.0331, 42s:0.0008, 43s:0.0023, 44:0.0226, 54o:0.0009, A4o:0.0493, 52s:0.0017, 53s:0.0078, 54s:0.0054, 55:0.085, 65o:0.003, A5o:0.0466, 63s:0.0093, 65s:0.0454, 66:0.0091, 76o:0.0048, A6o:0.0066, 73s:0.0011, 74s:0.0089, 75s:0.0157, 76s:0.0059, 77:0.0113, 87o:0.0026, A7o:0.0069, 82s:0.0039, 83s:0.0001, 84s:0.0017, 85s:0.0049, 86s:0.003, 87s:0.0046, 88:0.0244, A8o:0.0358, 92s:0.0046, 93s:0.0004, 95s:0.0027, 96s:0.0023, 97s:0.0038, 98s:0.0051, 99:0.0259, J9o:0.0021, A9o:0.0067, T2s:0.0053, T3s:0.0023, T5s:0.0001, T7s:0.0001, T8s:0.0009, T9s:0.0089, TT:0.0566, ATo:0.0345, J2s:0.0008, J3s:0.0006, J4s:0.0001, J6s:0.0001, J7s:0.005, J8s:0.0085, J9s:0.0052, JTs:0.0038, JJ:0.0089, AJo:0.1095, Q2s:0.0001, Q4s:0.0003, Q5s:0.0001, Q6s:0.0001, Q8s:0.0001, Q9s:0.0068, QTs:0.0011, QJs:0.0003, QQ:0.0007, AQo:0.0054, K2s:0.0034, K3s:0.0025, K4s:0.0031, K5s:0.0035, K6s:0.0003, K7s:0.004, K9s:0.0046, KTs:0.0035, KJs:0.0082, KK:0.1374, AKo:0.4859, A2s:0.2455, A3s:0.3166, A4s:0.2321, A5s:0.2639, A6s:0.086, A7s:0.0881, A8s:0.0817, A9s:0.1667, ATs:0.2212, AJs:0.6408, AQs:0.0267, AKs:0.5012, AA:0.8655"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, J2o:0.0001, Q2o:0.0001, 33:0.0025, 73o:0.0001, 43s:0.0001, 44:0.0004, J4o:0.0001, A4o:0.0001, 52s:0.0003, 53s:0.0035, 54s:0.0006, 55:0.0246, T5o:0.0002, J5o:0.0001, K5o:0.0001, 62s:0.0005, 64s:0.006, 65s:0.0265, 66:0.0004, 76o:0.0001, 96o:0.0001, K6o:0.0001, 74s:0.0015, 76s:0.0003, Q7o:0.0001, K7o:0.0003, A7o:0.0002, 82s:0.0001, 83s:0.0001, 84s:0.0009, 85s:0.0001, 87s:0.004, 88:0.0006, T8o:0.0001, J8o:0.0002, Q8o:0.0003, 92s:0.0002, 94s:0.0002, 98s:0.0001, 99:0.0549, Q9o:0.0006, T2s:0.0001, T4s:0.0005, T7s:0.0014, T9s:0.0017, TT:0.0117, JTo:0.0001, KTo:0.0002, ATo:0.0001, J2s:0.0001, J3s:0.0001, J4s:0.0003, J5s:0.0048, J6s:0.0015, J7s:0.0004, J8s:0.0001, J9s:0.0101, JJ:0.1595, AJo:0.0142, Q6s:0.0007, Q8s:0.0002, Q9s:0.0002, QQ:0.0742, KQo:0.0002, AQo:0.0023, K2s:0.0003, K3s:0.0001, K5s:0.0001, K7s:0.0011, K8s:0.0002, K9s:0.1225, KTs:0.0007, KQs:0.0006, KK:0.5468, AKo:0.0183, A2s:0.0001, A3s:0.1437, A4s:0.0087, A5s:0.0005, A6s:0.0002, A7s:0.0195, A8s:0.0396, A9s:0.0001, ATs:0.3107, AJs:0.0021, AQs:0.0553, AKs:0.021, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 54s:0.0001, 63s:0.0001, T9s:0.0001, J4s:0.0001, JJ:0.0007, Q2s:0.0001, Q8s:0.0001, Q9s:0.0001, QQ:0.0018, K2s:0.0001, KK:0.9997, A5s:0.0008, ATs:0.0001, AQs:0.0025, AKs:0.0093, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, JJ:0.0003, QQ:0.0716, KK, AKo:0.9991, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T2o:0.0002, J2o:0.0001, 32s:0.0001, 33:0.0008, 73o:0.0003, A3o:0.0001, 44:0.0003, 94o:0.0001, J4o:0.0001, 52s:0.0001, 53s:0.0001, 55:0.0002, Q5o:0.0001, A5o:0.0009, 62s:0.0001, 66:0.0002, 74s:0.0003, 75s:0.0001, 76s:0.0001, J7o:0.0001, 82s:0.0016, 84s:0.0001, 85s:0.0002, 86s:0.0003, 87s:0.0001, 88:0.0001, T8o:0.0001, J8o:0.0003, A8o:0.0002, 93s:0.0003, 96s:0.0022, 99:0.0095, Q9o:0.0002, T2s:0.0005, T6s:0.0028, T8s:0.0001, T9s:0.0019, TT:0.0063, JTo:0.0001, QTo:0.0005, J3s:0.0008, J4s:0.0003, J5s:0.0022, J8s:0.0005, J9s:0.0001, JTs:0.0002, JJ:0.0002, Q3s:0.0001, Q4s:0.0002, Q5s:0.0001, Q8s:0.0001, Q9s:0.0009, QTs:0.0027, QJs:0.0001, QQ:0.0003, KQo:0.0002, K4s:0.002, K5s:0.004, K7s:0.004, K8s:0.0002, K9s:0.0007, KTs:0.0006, KQs:0.001, KK:0.9588, AKo:0.0179, A2s:0.0009, A3s:0.0014, A4s:0.0022, A5s:0.0023, A6s:0.0047, ATs:0.0015, AJs:0.0004, AKs:0.385, AA:0.992"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0001, 96s:0.0001, 99:0.0001, T7s:0.0004, T8s:0.0003, T9s:0.0001, J8s:0.0002, QTs:0.0001, QQ:0.0001, KJs:0.0002, KK:0.0298, AKo:0.0024, A3s:0.0001, A4s:0.0002, ATs:0.0004, AQs:0.0547, AKs:0.0015, AA:0.0139"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 32s:0.0002, 33:0.0002, 42s:0.0007, 52s:0.0001, 55:0.0007, 63s:0.0006, 64s:0.0009, 65s:0.0656, 66:0.0006, 72s:0.0004, 75s:0.0003, 85s:0.0009, 86s:0.0005, 87s:0.0008, 88:0.0922, J8o:0.0001, A8o:0.0011, 92s:0.0004, 94s:0.0001, 95s:0.0001, 97s:0.0001, 99:0.0711, A9o:0.0006, T2s:0.0002, T6s:0.0003, T7s:0.0004, T8s:0.0005, ATo:0.0002, J3s:0.0004, J6s:0.0003, J8s:0.0001, J9s:0.0004, JTs:0.0007, JJ:0.0285, Q2s:0.0006, Q5s:0.0005, Q9s:0.0039, QTs:0.0003, QJs:0.0003, QQ:0.0188, AQo:0.0001, K4s:0.0001, K5s:0.0004, K6s:0.0116, KJs:0.0036, KQs:0.0003, KK:0.5491, AKo:0.5032, A2s:0.2213, A3s:0.2024, A4s:0.2137, A5s:0.0243, A6s:0.2306, A7s:0.1268, A8s:0.1233, A9s:0.2392, ATs:0.0007, AJs:0.0015, AQs:0.3202, AKs:0.9554, AA:0.9861"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6096, 32s:0.0044, 33:0.5536, 53o:0.0071, 42s:0.0089, 43s:0.0511, 44:0.7439, 54o:0.0106, A4o:0.0068, 52s:0.0072, 53s:0.0227, 54s:0.4561, 55:0.4756, 65o:0.0062, 75o:0.0006, Q5o:0.0044, A5o:0.0094, 62s:0.0074, 63s:0.0798, 64s:0.2543, 65s:0.6228, 66:0.4648, 76o:0.0044, A6o:0.0206, 74s:0.006, 75s:0.379, 76s:0.5803, 77:0.9131, 87o:0.0008, A7o:0.0116, 82s:0.011, 83s:0.0057, 84s:0.0118, 85s:0.0758, 86s:0.4338, 87s:0.1114, 88:0.8441, 98o:0.0091, T8o:0.0064, J8o:0.0205, A8o:0.0127, 92s:0.0025, 93s:0.0109, 94s:0.0108, 95s:0.0053, 96s:0.0806, 97s:0.0014, 98s:0.2746, 99:0.3962, T9o:0.0002, J9o:0.0056, Q9o:0.0038, A9o:0.0237, T2s:0.0046, T6s:0.0058, T7s:0.2003, T8s:0.0194, T9s:0.2129, TT:0.7484, JTo:0.018, ATo:0.3443, J3s:0.0003, J4s:0.0096, J6s:0.0147, J7s:0.0714, J8s:0.0671, J9s:0.2542, JTs:0.2163, JJ:0.9722, QJo:0.0105, AJo:0.6757, Q2s:0.0034, Q3s:0.0069, Q5s:0.032, Q7s:0.0164, Q8s:0.0237, Q9s:0.0044, QTs:0.0201, QJs:0.2267, QQ:0.9819, KQo:0.0108, AQo:0.9527, K3s:0.0033, K4s:0.001, K5s:0.0057, K7s:0.0215, K8s:0.0037, K9s:0.0018, KJs:0.0198, KQs:0.0106, KK:0.4382, AKo:0.0299, A2s:0.251, A3s:0.1588, A4s:0.4054, A5s:0.2394, A6s:0.1741, A7s:0.2579, A8s:0.3428, A9s:0.2046, ATs:0.6832, AJs:0.968, AQs:0.9871, AKs:0.0308, AA:0.0693"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0853, J2o:0.0001, A2o:0.0145, 32s:0.0002, 33:0.1869, T3o:0.0001, A3o:0.0027, 42s:0.0005, 43s:0.017, 44:0.1133, 74o:0.0001, K4o:0.0001, A4o:0.0471, 52s:0.0044, 53s:0.0245, 54s:0.0326, 55:0.2152, 65o:0.0002, 75o:0.0006, 85o:0.0001, 95o:0.0001, Q5o:0.0001, K5o:0.0001, A5o:0.0162, 64s:0.0625, 65s:0.0241, 66:0.471, 76o:0.0011, 86o:0.0001, A6o:0.0003, 72s:0.0011, 74s:0.0003, 75s:0.0038, 76s:0.0431, 77:0.0226, 87o:0.0015, J7o:0.0001, K7o:0.0001, A7o:0.0025, 82s:0.0002, 83s:0.0001, 85s:0.0044, 86s:0.0089, 87s:0.0025, 88:0.0185, 98o:0.0001, J8o:0.0001, K8o:0.0001, A8o:0.0025, 93s:0.0016, 94s:0.0001, 95s:0.0096, 96s:0.0201, 97s:0.0014, 98s:0.0022, 99:0.478, T9o:0.0001, J9o:0.0001, Q9o:0.0001, A9o:0.0093, T2s:0.0001, T4s:0.002, T5s:0.0005, T6s:0.0001, T8s:0.0001, TT:0.0006, JTo:0.0001, QTo:0.0001, KTo:0.0001, ATo:0.0026, J3s:0.0001, J5s:0.0003, J6s:0.0002, J7s:0.0004, J8s:0.0011, J9s:0.0072, JTs:0.0057, JJ:0.0163, QJo:0.0001, KJo:0.0001, AJo:0.0034, Q2s:0.001, Q3s:0.0002, Q5s:0.0006, Q7s:0.0018, Q8s:0.0001, Q9s:0.0001, QTs:0.0029, QJs:0.0002, QQ:0.0121, KQo:0.0001, AQo:0.0043, K2s:0.0008, K4s:0.0087, K5s:0.0001, K6s:0.0001, K7s:0.02, K8s:0.0119, K9s:0.001, KTs:0.006, KJs:0.0016, KQs:0.016, KK:0.5608, AKo:0.9698, A2s:0.3999, A3s:0.562, A4s:0.4979, A5s:0.7392, A6s:0.1787, A7s:0.5143, A8s:0.5322, A9s:0.5333, ATs:0.227, AJs:0.0168, AQs:0.0038, AKs:0.969, AA:0.9307"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0001, KK:0.9998, AKo:0.0001, A6s:0.0001, AJs:0.0005, AKs:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0021, 99:0.0025, TT:0.0041, JJ:0.0048, QQ:0.0036, KJs:0.0002, KQs:0.0001, KK, AKo:0.8153, AJs:0.0006, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0002, 43o:0.0001, Q4o:0.0001, 55:0.0001, A5o:0.0001, 62s:0.0001, 65s:0.0001, A6o:0.0001, 72s:0.0002, 75s:0.0002, 77:0.0001, 84s:0.0001, 85s:0.0002, 92s:0.0001, 96s:0.0001, 97s:0.0001, 99:0.0001, T5s:0.0001, T8s:0.0001, J2s:0.0001, J7s:0.001, JJ:0.0007, Q2s:0.0006, Q4s:0.0001, Q7s:0.0002, Q8s:0.0001, QTs:0.0002, QJs:0.0002, QQ:0.0001, K2s:0.0001, K8s:0.0003, KTs:0.0007, KQs:0.0001, KK:0.0824, A2s:0.0001, A3s:0.0002, A4s:0.0001, A5s:0.0013, A6s:0.0002, A7s:0.0011, AJs:0.0049, AQs:0.1862, AKs:0.0575, AA:0.004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0067, 33:0.0219, A3o:0.0018, 53s:0.0001, 55:0.0655, A5o:0.0647, 77:0.0049, A7o:0.0757, 86s:0.0462, 88:0.0061, A8o:0.1152, 96s:0.0001, 99:0.0716, T8s:0.001, T9s:0.0014, ATo:0.0781, JJ:0.028, Q7s:0.0011, QTs:0.0001, QQ:0.009, AQo:0.1171, K2s:0.0004, K6s:0.0001, K7s:0.0008, K8s:0.0011, KTs:0.0001, KK:0.0702, AKo:0.5878, A2s:0.2502, A3s:0.3058, A4s:0.521, A5s:0.3298, A6s:0.1913, A7s:0.0297, A8s:0.3454, A9s:0.3574, ATs:0.1211, AJs:0.1801, AQs:0.1241, AKs:0.8933, AA:0.996"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0221, 42o:0.0008, Q2o:0.0007, A2o:0.0013, 32s:0.0008, 33:0.0216, 53o:0.0004, 93o:0.0005, T3o:0.0007, J3o:0.0003, Q3o:0.001, A3o:0.0002, 42s:0.003, 43s:0.0046, 44:0.052, 54o:0.0013, 64o:0.0009, 74o:0.001, Q4o:0.0004, A4o:0.0036, 52s:0.0015, 53s:0.0016, 54s:0.0031, 55:0.0406, 65o:0.0008, 75o:0.0001, 85o:0.0011, Q5o:0.0003, A5o:0.0004, 62s:0.0002, 63s:0.001, 64s:0.01, 65s:0.0272, 66:0.239, 86o:0.0007, Q6o:0.001, A6o:0.0013, 72s:0.0012, 75s:0.0088, 76s:0.0298, 77:0.1964, 87o:0.0004, 97o:0.0014, J7o:0.0005, Q7o:0.0006, A7o:0.0048, 82s:0.0037, 84s:0.0001, 85s:0.0031, 86s:0.0019, 87s:0.0572, 88:0.0436, T8o:0.0007, Q8o:0.0009, A8o:0.0195, 92s:0.0006, 93s:0.0007, 94s:0.0003, 95s:0.0004, 96s:0.0028, 97s:0.0011, 98s:0.0274, 99:0.1352, T9o:0.001, J9o:0.0003, Q9o:0.0002, A9o:0.023, T2s:0.0016, T3s:0.0016, T4s:0.0019, T5s:0.001, T6s:0.0055, T7s:0.0003, T8s:0.0493, T9s:0.0112, TT:0.1581, JTo:0.001, QTo:0.0005, ATo:0.092, J3s:0.0009, J5s:0.001, J6s:0.0006, J7s:0.0047, J8s:0.0012, J9s:0.0097, JTs:0.0049, JJ:0.1052, QJo:0.0011, KJo:0.0004, AJo:0.138, Q2s:0.0055, Q3s:0.0042, Q4s:0.0001, Q5s:0.0011, Q7s:0.0014, Q8s:0.0012, Q9s:0.0063, QTs:0.0088, QJs:0.0045, QQ:0.6606, AQo:0.3858, K2s:0.0004, K3s:0.0001, K4s:0.0011, K5s:0.0028, K7s:0.0015, K9s:0.0031, KTs:0.0037, KJs:0.0029, KQs:0.0032, KK:0.1057, AKo:0.0027, A2s:0.0039, A3s:0.0802, A4s:0.0871, A5s:0.062, A6s:0.107, A7s:0.2187, A8s:0.0865, A9s:0.1921, ATs:0.3661, AJs:0.4557, AQs:0.8169, AKs:0.0042, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3749, A2o:0.0928, 33:0.6302, A3o:0.0552, 42s:0.0002, 43s:0.004, 44:0.262, 54o:0.0002, K4o:0.0001, A4o:0.0952, 52s:0.0144, 53s:0.0456, 54s:0.1692, 55:0.8236, A5o:0.1581, 63s:0.0014, 64s:0.0157, 65s:0.1558, 66:0.1983, 76o:0.0002, 86o:0.0004, A6o:0.0341, 73s:0.0006, 74s:0.0066, 75s:0.1336, 76s:0.122, 77:0.599, 87o:0.0002, Q7o:0.0001, A7o:0.0799, 82s:0.0009, 83s:0.0001, 84s:0.0002, 85s:0.0199, 86s:0.0144, 87s:0.0815, 88:0.6133, A8o:0.0706, 96s:0.0007, 97s:0.1226, 98s:0.0241, 99:0.3948, Q9o:0.0002, A9o:0.0448, T2s:0.0016, T4s:0.0007, T7s:0.0009, T8s:0.0002, T9s:0.0682, TT:0.4827, QTo:0.0011, ATo:0.0499, J9s:0.0001, JJ:0.5659, AJo:0.0691, Q2s:0.0001, Q3s:0.0011, Q6s:0.0008, Q8s:0.0008, Q9s:0.0004, QTs:0.0069, QJs:0.0028, QQ:0.0755, AQo:0.006, K2s:0.0002, K4s:0.0002, K7s:0.0003, K9s:0.0001, KTs:0.0008, KJs:0.0001, KQs:0.0008, KK:0.7024, AKo:0.9925, A2s:0.5702, A3s:0.7433, A4s:0.7474, A5s:0.401, A6s:0.4174, A7s:0.2652, A8s:0.451, A9s:0.3728, ATs:0.5725, AJs:0.4021, AQs:0.182, AKs:0.9958, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "J2o:0.0001, K2o:0.0001, 32s:0.0003, 33:0.0001, 43s:0.0012, 44:0.0001, 64o:0.0001, A4o:0.0001, 54s:0.0003, K5o:0.0001, A5o:0.0004, 64s:0.0012, 66:0.0001, 72s:0.0001, 74s:0.0001, 75s:0.0022, 76s:0.0013, 77:0.0004, 83s:0.0005, 84s:0.0004, 87s:0.0001, 88:0.0006, J8o:0.0002, K8o:0.0001, 92s:0.0001, 94s:0.0003, 96s:0.0001, 98s:0.0001, 99:0.0023, T3s:0.0001, T4s:0.0007, T7s:0.0004, T8s:0.001, T9s:0.0001, TT:0.0004, QTo:0.0001, ATo:0.0002, J2s:0.0003, J3s:0.0002, J4s:0.0001, J8s:0.001, J9s:0.0001, JJ:0.011, QJo:0.0001, AJo:0.0001, Q4s:0.0005, Q5s:0.0007, Q9s:0.0003, QQ:0.0008, KQo:0.0001, AQo:0.0001, K2s:0.0009, K4s:0.0002, K5s:0.0002, K7s:0.0003, K8s:0.0005, K9s:0.0003, KTs:0.0004, KJs:0.0007, KK:0.2744, AKo:0.1661, A4s:0.0002, A5s:0.001, A7s:0.0002, A8s:0.0002, A9s:0.0006, ATs:0.0015, AQs:0.6889, AKs:0.5365, AA:0.9878"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.002, 44:0.0003, A4o:0.0001, 53s:0.0001, 54s:0.0003, K5o:0.0002, 63s:0.0001, 64s:0.0021, 65s:0.0008, 73s:0.0001, 74s:0.0001, 76s:0.0003, 77:0.0016, 83s:0.0001, 85s:0.0001, 86s:0.0001, 92s:0.0002, 93s:0.001, 99:0.0001, T2s:0.0002, T8s:0.0002, TT:0.0848, KTo:0.0001, ATo:0.0001, J5s:0.0001, J6s:0.0001, J9s:0.0001, Q2s:0.0001, Q4s:0.0006, Q5s:0.0009, Q6s:0.0004, Q8s:0.0001, Q9s:0.0001, QTs:0.0011, AQo:0.0027, K3s:0.0006, K4s:0.0006, K5s:0.0074, K6s:0.0003, K9s:0.0039, KTs:0.0005, KQs:0.0025, KK:0.5779, AKo:0.3452, A2s:0.0017, A3s:0.0005, A4s:0.0234, A5s:0.0002, A6s:0.0039, A8s:0.0003, ATs:0.152, AJs:0.0011, AQs:0.2148, AKs:0.6393, AA:0.9989"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0001, 99:0.0005, TT:0.0001, JJ:0.0001, KK, AKo:0.0001, AJs:0.0002, AKs:0.019, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0002, QQ:0.0002, KK, AKo:0.7845, AKs:0.9993, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0005, 43o:0.0001, 42s:0.0001, 54s:0.0004, 55:0.0004, 63s:0.0002, 64s:0.0005, 66:0.0007, 72s:0.0002, 75s:0.0006, 76s:0.0033, 77:0.0004, A7o:0.0001, 82s:0.0001, 85s:0.0001, 86s:0.0002, 88:0.0001, 92s:0.0002, 99:0.0003, A9o:0.0006, T3s:0.0001, T4s:0.0003, T6s:0.0001, T7s:0.0016, T8s:0.0001, TT:0.0014, ATo:0.0004, J4s:0.0018, J5s:0.0001, J7s:0.0001, JTs:0.0001, JJ:0.0003, AJo:0.0001, Q3s:0.0001, Q7s:0.0013, Q8s:0.0002, QTs:0.0005, QQ:0.0002, AQo:0.0001, K2s:0.0006, K4s:0.0001, K5s:0.0002, K6s:0.0002, K8s:0.0003, KJs:0.0001, KQs:0.0004, KK:0.9999, A2s:0.0029, A3s:0.0006, A4s:0.0001, A5s:0.0013, A6s:0.0033, A7s:0.0001, A8s:0.0009, A9s:0.0095, ATs:0.0002, AJs:0.0026, AQs:0.0011, AKs:0.1858, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "82o:0.0001, 32s:0.0001, 73o:0.0001, 42s:0.0002, 44:0.0008, 54s:0.0001, 55:0.0009, T5o:0.0001, Q5o:0.0001, 65s:0.0007, 66:0.0001, 72s:0.0001, 73s:0.0002, 74s:0.0001, 75s:0.0006, 76s:0.0011, 77:0.0008, 82s:0.0001, 85s:0.0003, 86s:0.0001, 88:0.0001, 94s:0.0003, 95s:0.0001, 96s:0.0001, 97s:0.0003, A9o:0.0001, T2s:0.0001, T3s:0.0003, T4s:0.0001, TT:0.0004, KTo:0.0001, J2s:0.0003, J4s:0.0001, J6s:0.0002, J8s:0.0001, AJo:0.0002, Q3s:0.0001, Q5s:0.0005, Q6s:0.0001, Q8s:0.0001, Q9s:0.0001, QTs:0.0004, QJs:0.0002, QQ:0.0019, KQo:0.0001, K4s:0.0003, K5s:0.0007, K6s:0.0005, K7s:0.0009, K8s:0.0001, K9s:0.0005, KQs:0.0018, KK:0.5587, AKo:0.0104, A2s:0.0002, A5s:0.0003, A6s:0.0005, A9s:0.0005, ATs:0.0002, AJs:0.0012, AQs:0.0001, AKs:0.0105, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|LJ:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0967, 32s:0.0016, 33:0.2667, A3o:0.014, 42s:0.0031, 43s:0.1086, 44:0.4257, 54o:0.0001, 64o:0.0001, A4o:0.0027, 52s:0.0161, 53s:0.0537, 54s:0.3817, 55:0.6108, 65o:0.017, A5o:0.0158, 62s:0.0001, 63s:0.0622, 64s:0.1368, 65s:0.4799, 66:0.7255, 76o:0.0138, A6o:0.0006, 74s:0.0027, 75s:0.1165, 76s:0.242, 77:0.1908, A7o:0.0002, 83s:0.0001, 84s:0.0036, 85s:0.0852, 86s:0.1324, 87s:0.1048, 88:0.4049, 95s:0.0074, 96s:0.0338, 97s:0.1253, 98s:0.2654, 99:0.2392, A9o:0.0001, T6s:0.0008, T7s:0.002, T8s:0.1463, T9s:0.4279, TT:0.5391, JTo:0.0014, ATo:0.1432, J5s:0.0001, J6s:0.0001, J7s:0.007, J8s:0.0266, J9s:0.2025, JTs:0.1914, JJ:0.7671, AJo:0.6539, Q6s:0.0005, Q8s:0.0017, Q9s:0.0073, QTs:0.0293, QJs:0.0743, QQ:0.967, AQo:0.3123, K2s:0.0026, K3s:0.0003, K4s:0.0257, K5s:0.0156, K6s:0.0531, K7s:0.012, K8s:0.0004, K9s:0.05, KTs:0.0491, KJs:0.138, KQs:0.0015, KK:0.6556, AKo:0.2772, A2s:0.2315, A3s:0.2117, A4s:0.3, A5s:0.5046, A6s:0.3382, A7s:0.292, A8s:0.3819, A9s:0.5292, ATs:0.7109, AJs:0.9944, AQs:0.2319, AKs:0.264, AA:0.0841"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0572, A2o:0.003, 32s:0.0001, 33:0.0063, A3o:0.0266, 43s:0.0079, 44:0.0176, A4o:0.0254, 52s:0.0001, 53s:0.0001, 54s:0.0013, 55:0.0025, A5o:0.0172, 62s:0.0001, 63s:0.0001, 64s:0.0009, 65s:0.0061, 66:0.0146, A6o:0.0033, 74s:0.002, 75s:0.0001, 76s:0.0035, 77:0.021, A7o:0.0011, 84s:0.0001, 85s:0.0001, 86s:0.0004, 87s:0.0078, 88:0.0016, A8o:0.0002, 94s:0.0001, 96s:0.0002, 97s:0.0084, 98s:0.0003, 99:0.0177, A9o:0.0002, T9s:0.0012, TT:0.0084, ATo:0.0148, J8s:0.0001, J9s:0.0002, JTs:0.0006, JJ:0.0073, AJo:0.0022, Q9s:0.0008, QTs:0.0001, QJs:0.004, QQ:0.033, AQo:0.6874, K2s:0.0001, K3s:0.0001, K8s:0.0001, KTs:0.001, KJs:0.0028, KQs:0.0032, KK:0.3444, AKo:0.7228, A2s:0.6124, A3s:0.6659, A4s:0.5546, A5s:0.3815, A6s:0.2815, A7s:0.5018, A8s:0.4123, A9s:0.2547, ATs:0.2564, AJs:0.0055, AQs:0.768, AKs:0.736, AA:0.9159"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|LJ:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.3632, JJ, QQ, KK, AKo:0.999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 63s:0.0002, 77:0.0001, T2s:0.0001, T9s:0.0001, TT:0.0001, J3s:0.0001, J8s:0.0001, JJ:0.0002, Q3s:0.0004, QJs:0.0005, QQ:0.0012, KK:0.0156, AKo:0.0002, A4s:0.0001, A5s:0.0001, A6s:0.0004, A9s:0.001, ATs:0.0003, AQs:0.0003, AA:0.0477"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0007, 42s:0.0001, 43s:0.0012, 54s:0.0006, 63s:0.0014, 64s:0.0001, 65s:0.0001, A6o:0.0004, 76s:0.0005, A7o:0.0081, 82s:0.0012, 85s:0.0011, 87s:0.0009, A8o:0.0003, 92s:0.0002, 96s:0.0002, 99:0.0003, A9o:0.0032, T4s:0.0001, T9s:0.0009, TT:0.0039, QTo:0.0001, ATo:0.0032, J4s:0.0001, J5s:0.0001, J9s:0.0001, JJ:0.0238, AJo:0.0067, Q3s:0.0003, Q4s:0.0039, Q7s:0.0001, Q9s:0.0001, QQ:0.0185, AQo:0.0034, K7s:0.0004, KQs:0.0003, KK:0.0188, AKo:0.3657, A2s:0.0304, A3s:0.0047, A4s:0.0756, A5s:0.1497, A6s:0.0061, A7s:0.0503, A8s:0.0008, A9s:0.0887, ATs:0.2487, AJs:0.0747, AQs:0.1537, AKs:0.5068, AA:0.9523"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3075, 32o:0.0029, 42o:0.0184, 52o:0.0089, 62o:0.0117, 72o:0.0005, K2o:0.0228, A2o:0.0267, 32s:0.0663, 33:0.7082, 43o:0.0259, 53o:0.0223, 63o:0.0258, 73o:0.0111, 83o:0.003, 93o:0.0101, T3o:0.0132, J3o:0.0078, K3o:0.0231, A3o:0.0301, 42s:0.0291, 43s:0.064, 44:0.7853, 54o:0.0424, 64o:0.0403, 74o:0.0357, 84o:0.015, T4o:0.0148, J4o:0.0169, Q4o:0.0054, K4o:0.0168, A4o:0.0425, 52s:0.0639, 53s:0.0472, 54s:0.1418, 55:0.9417, 65o:0.0562, 75o:0.0246, K5o:0.0145, A5o:0.0546, 62s:0.031, 63s:0.0552, 64s:0.458, 65s:0.4579, 66:0.8652, 76o:0.0632, 86o:0.0329, 96o:0.0273, T6o:0.0157, J6o:0.0064, Q6o:0.0093, K6o:0.0373, A6o:0.0491, 72s:0.031, 73s:0.0399, 74s:0.0578, 75s:0.5489, 76s:0.4337, 77:0.8204, 87o:0.0246, 97o:0.0272, T7o:0.0242, J7o:0.0274, K7o:0.0268, A7o:0.0401, 82s:0.0463, 83s:0.0671, 84s:0.0153, 85s:0.0243, 86s:0.0572, 87s:0.6755, 88:0.8717, 98o:0.0251, T8o:0.0326, J8o:0.0407, Q8o:0.0138, K8o:0.0215, A8o:0.039, 92s:0.0115, 93s:0.0417, 94s:0.0234, 95s:0.0001, 96s:0.1038, 97s:0.0791, 98s:0.2139, 99:0.8428, T9o:0.0428, J9o:0.0222, Q9o:0.0182, K9o:0.0102, A9o:0.0715, T2s:0.0476, T3s:0.0033, T4s:0.042, T5s:0.0163, T6s:0.022, T7s:0.0582, T8s:0.1242, T9s:0.4312, TT:0.2847, JTo:0.0833, QTo:0.0408, KTo:0.0626, ATo:0.1688, J2s:0.0327, J3s:0.0235, J4s:0.0651, J5s:0.06, J6s:0.0432, J7s:0.1036, J8s:0.2046, J9s:0.0608, JTs:0.3694, JJ:0.7686, QJo:0.049, KJo:0.0867, AJo:0.2764, Q2s:0.0196, Q3s:0.0182, Q4s:0.0212, Q5s:0.0188, Q6s:0.0904, Q7s:0.0339, Q8s:0.0335, Q9s:0.0365, QTs:0.1125, QJs:0.1442, QQ:0.7795, KQo:0.0341, AQo:0.8593, K2s:0.0794, K3s:0.1662, K4s:0.0943, K5s:0.0176, K6s:0.0218, K7s:0.0828, K8s:0.0494, K9s:0.0621, KTs:0.0684, KJs:0.1469, KQs:0.0508, KK:0.3591, A2s:0.1497, A3s:0.1089, A4s:0.1101, A5s:0.1508, A6s:0.1778, A7s:0.3258, A8s:0.4755, A9s:0.7967, ATs:0.2616, AJs:0.7307, AQs:0.9123, AKs:0.0198, AA:0.2005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1462, A2o:0.0047, 32s:0.0002, 33:0.2689, A3o:0.0076, 42s:0.0001, 43s:0.0241, 44:0.1907, A4o:0.0112, 52s:0.0001, 53s:0.0075, 54s:0.1057, 55:0.0289, 65o:0.0022, A5o:0.0293, 62s:0.0097, 63s:0.0805, 64s:0.0154, 65s:0.0731, 66:0.1124, A6o:0.0101, 73s:0.003, 75s:0.0001, 76s:0.0525, 77:0.1589, 83s:0.0053, 85s:0.0089, 86s:0.0605, 87s:0.0001, 88:0.1075, T8o:0.0068, A8o:0.0024, 96s:0.0001, 97s:0.035, 98s:0.0502, 99:0.1193, A9o:0.0022, T2s:0.0323, T3s:0.0202, T4s:0.0065, T5s:0.0254, T6s:0.0258, T7s:0.0837, T8s:0.1033, T9s:0.0425, TT:0.7042, JTo:0.0054, QTo:0.0001, KTo:0.0158, ATo:0.0357, J3s:0.0112, J4s:0.0005, J7s:0.0142, J8s:0.0128, J9s:0.0122, JTs:0.1785, JJ:0.2248, KJo:0.0031, AJo:0.0131, Q4s:0.0084, QTs:0.0151, QJs:0.0814, QQ:0.2171, AQo:0.0179, K3s:0.0069, K4s:0.0092, K5s:0.0007, K6s:0.0308, K7s:0.0156, K9s:0.0225, KTs:0.0976, KJs:0.0287, KQs:0.0239, KK:0.6372, AKo:0.998, A2s:0.3732, A3s:0.3898, A4s:0.4059, A5s:0.026, A6s:0.3741, A7s:0.0238, A8s:0.2519, A9s:0.0615, ATs:0.4169, AJs:0.1872, AQs:0.0834, AKs:0.98, AA:0.7995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0004, 33:0.0002, 43s:0.0002, 44:0.0001, K4o:0.0001, 52s:0.0001, 53s:0.0001, 54s:0.0001, 55:0.0019, 65o:0.0001, 63s:0.0001, 64s:0.0001, 66:0.0002, J6o:0.0001, 72s:0.0034, 74s:0.0001, 75s:0.0003, 76s:0.0003, 77:0.0002, 83s:0.0001, 84s:0.0001, 85s:0.0016, 86s:0.0011, 87s:0.0002, A8o:0.0001, 92s:0.0005, 94s:0.0005, 95s:0.0013, 96s:0.0002, 97s:0.0009, 98s:0.0005, 99:0.0025, Q9o:0.0001, T2s:0.0002, T5s:0.0002, T9s:0.0008, TT:0.003, KTo:0.0001, ATo:0.0001, J2s:0.0005, J3s:0.0001, J5s:0.0005, J7s:0.0005, J8s:0.0001, J9s:0.0008, JTs:0.0004, JJ:0.0395, KJo:0.0004, AJo:0.0062, Q4s:0.0003, Q9s:0.0001, QTs:0.0001, QQ:0.0675, KQo:0.0003, AQo:0.0006, K4s:0.0001, K5s:0.0001, K7s:0.0003, KTs:0.0002, KJs:0.0017, KQs:0.0003, KK:0.3195, AKo:0.2935, A2s:0.0089, A3s:0.001, A4s:0.0015, A5s:0.0001, A6s:0.0171, A8s:0.0002, A9s:0.014, ATs:0.0003, AJs:0.0028, AKs:0.0651, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.003, QQ:0.0072, KK:0.9999, AKo:0.0117, AKs:0.0354, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0004, TT:0.002, JJ:0.0095, QQ:0.0107, KK, AKo:0.9932, AKs:0.9993, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 42s:0.0005, 44:0.0003, 52s:0.0003, 54s:0.0004, A6o:0.0001, 72s:0.0004, 75s:0.0003, 76s:0.0004, 77:0.0007, J7o:0.0001, 84s:0.0003, 86s:0.0004, 88:0.0004, 93s:0.0006, 94s:0.0002, 95s:0.0003, 96s:0.0001, 98s:0.0001, 99:0.0012, J9o:0.0004, T3s:0.0001, T4s:0.0001, T6s:0.0002, T7s:0.0002, T8s:0.0002, TT:0.0011, J2s:0.0002, J4s:0.0011, J6s:0.0001, J9s:0.0001, JTs:0.0002, JJ:0.0007, Q2s:0.0004, Q5s:0.0002, Q7s:0.0003, QTs:0.0002, QJs:0.0011, QQ:0.0047, K2s:0.0015, K3s:0.0004, K5s:0.0002, K6s:0.0001, KTs:0.0003, KQs:0.0001, KK:0.9922, AKo:0.0016, A2s:0.0017, A3s:0.0001, A5s:0.0035, A6s:0.0006, A8s:0.0005, A9s:0.0016, ATs:0.0002, AJs:0.0007, AQs:0.0058, AKs:0.0125, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.2576, JJ:0.0045, QQ:0.8553, KK, AKo:0.1565, AKs:0.3467, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.025, JJ:0.2764, QQ:0.9424, KK, AKo:0.2697, AKs:0.5302, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0001, 66:0.0971, 75s:0.0001, 77:0.0487, 86s:0.0003, 87s:0.0028, 96s:0.0001, TT:0.0235, QQ:0.3206, AQo:0.0837, K5s:0.0005, K6s:0.0054, K9s:0.1651, KTs:0.0075, KJs:0.0527, KQs:0.0621, KK:0.0157, AKo:0.0004, A3s:0.0064, A6s:0.0021, A9s:0.0357, ATs:0.0081, AJs:0.0003, AQs:0.492, AKs:0.0014, AA:0.0062"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.2785, 33:0.0002, K3o:0.0001, A3o:0.1634, K4o:0.0003, A4o:0.0194, 54s:0.0004, A5o:0.2516, Q6o:0.0001, A6o:0.0011, 74s:0.0001, 75s:0.0002, 76s:0.0002, 77:0.0245, J7o:0.0001, K7o:0.0001, A7o:0.034, 85s:0.0002, 88:0.0001, A8o:0.1377, 95s:0.0002, 99:0.0122, K9o:0.0002, A9o:0.058, T8s:0.0005, T9s:0.0001, TT:0.0923, ATo:0.0287, J3s:0.0004, J5s:0.0001, J7s:0.0001, J9s:0.0016, JTs:0.0222, JJ:0.0002, AJo:0.0083, Q3s:0.0002, Q8s:0.0001, QTs:0.003, QJs:0.0003, QQ:0.0106, AQo:0.2804, K2s:0.0001, K4s:0.0007, K5s:0.0005, K6s:0.0065, K7s:0.001, K8s:0.0012, KTs:0.0125, KJs:0.0004, AKo:0.0007, A2s:0.0352, A3s:0.0236, A5s:0.0043, A6s:0.1852, A7s:0.1089, A8s:0.004, A9s:0.0981, ATs:0.0101, AJs:0.2292, AQs:0.1254, AKs:0.0818, AA:0.9937"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0066, 33:0.0105, A3o:0.0037, 44:0.0017, A4o:0.007, 54s:0.0001, 55:0.0415, A5o:0.0001, 64s:0.0092, 65s:0.0001, 66:0.069, 74s:0.0001, 75s:0.0002, 76s:0.0058, 77:0.0096, 86s:0.0002, 87s:0.0088, A8o:0.0001, 93s:0.0004, 96s:0.0005, 99:0.0365, T8s:0.0005, T9s:0.0006, TT:0.2098, ATo:0.0007, JJ:0.0009, KJo:0.0004, AJo:0.0368, QQ:0.0042, AQo:0.0071, K2s:0.0139, K3s:0.7907, K4s:0.036, K5s:0.6582, K6s:0.317, K7s:0.3028, K8s:0.5451, K9s:0.4551, KTs:0.3669, KJs:0.754, KQs:0.0729, KK:0.9843, AKo:0.9989, A2s:0.8356, A3s:0.7211, A4s:0.6006, A5s:0.9317, A6s:0.446, A7s:0.5571, A8s:0.9718, A9s:0.2816, ATs:0.8298, AJs:0.2086, AQs:0.0063, AKs:0.9168, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.1475, 55:0.0635, 64s:0.0025, 65s:0.0641, 66:0.697, 75s:0.0101, 76s:0.583, 77:0.6081, 87s:0.0085, 88:0.196, 99:0.0185, TT:0.1757, J5s:0.0008, J8s:0.0001, JTs:0.0002, JJ:0.1558, QJs:0.0001, QQ:0.958, AQo:0.5084, K6s:0.4713, K8s:0.0904, KTs:0.4907, KJs:0.2672, KQs:0.2654, KK:0.0001, A3s:0.0253, A4s:0.3193, A5s:0.4231, A6s:0.0077, A7s:0.0231, A8s:0.0514, A9s:0.179, ATs:0.5468, AJs:0.3712, AQs:0.9184, AKs:0.0025, AA:0.0002"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K2o:0.1537, A2o:0.0375, K3o:0.0956, K4o:0.0587, 53s:0.0003, K5o:0.1453, A5o:0.0068, 63s:0.0001, 64s:0.0004, 66:0.0004, K6o:0.1468, A6o:0.0032, 73s:0.0001, 75s:0.0001, 76s:0.0001, 77:0.0036, K7o:0.1835, A7o:0.0415, 88:0.0087, K8o:0.1703, K9o:0.1002, T2s:0.0017, TT:0.0411, KTo:0.1482, JTs:0.0001, JJ:0.0012, KJo:0.1682, QQ:0.0001, KQo:0.0007, AQo:0.0038, K2s:0.1424, K3s:0.1202, K4s:0.1007, K5s:0.1759, K6s:0.1556, K7s:0.1781, K8s:0.1597, K9s:0.0864, KTs:0.0888, KJs:0.1518, KQs:0.0025, KK:0.3099, AKo:0.1426, A2s:0.0028, A3s:0.0007, A5s:0.0097, A6s:0.0175, A7s:0.0007, A8s:0.0107, A9s:0.0093, ATs:0.014, AJs:0.0473, AQs:0.0091, AKs:0.3193, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0036, 43s:0.0001, 44:0.0003, A4o:0.0015, 53s:0.0004, 54s:0.0042, 55:0.0002, A5o:0.0001, 63s:0.0013, 64s:0.0018, 65s:0.0028, 66:0.0044, A6o:0.0004, 75s:0.0028, 77:0.0002, A7o:0.0003, 83s:0.0001, 84s:0.0001, 86s:0.0012, A8o:0.0017, 98s:0.0001, 99:0.0004, T5s:0.0009, T7s:0.0001, TT:0.0056, ATo:0.0001, J8s:0.0001, JTs:0.0019, JJ:0.0019, AJo:0.0001, Q2s:0.0001, Q3s:0.0001, Q4s:0.0006, QQ:0.0402, KQo:0.0006, AQo:0.094, K2s:0.0005, K3s:0.0188, K4s:0.0054, K5s:0.0001, K7s:0.0033, K8s:0.0025, K9s:0.0007, KTs:0.0071, KJs:0.0002, KQs:0.0018, KK:0.6901, AKo:0.8574, A2s:0.0177, A3s:0.01, A4s:0.0121, A5s:0.0148, A6s:0.0177, A7s:0.0054, A8s:0.0092, A9s:0.0016, ATs:0.0052, AJs:0.0101, AQs:0.0679, AKs:0.6782"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0072, QQ:0.1822, KK, AKo:0.4228, AKs:0.4466, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0493, JJ:0.0402, QQ:0.7597, KK, AKo:0.3588, AKs:0.432, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.052, JJ:0.0601, QJs:0.0001, QQ:0.3635, KK, AKo:0.1258, A6s:0.0001, AKs:0.1554, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 77:0.0001, 88:0.1056, 99:0.0023, TT:0.0209, JJ:0.0001, QQ:0.4725, KK:0.9999, AKo:0.1174, AQs:0.0001, AKs:0.2302, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A7o:0.0005, 88:0.0295, 95s:0.0001, T7s:0.0001, T9s:0.0001, TT:0.0006, JJ:0.0003, QQ:0.2962, AQo:0.0073, K8s:0.0002, KTs:0.0302, KJs:0.0289, KK:0.0009, AKo:0.0001, A2s:0.0008, A3s:0.0009, A4s:0.0001, A6s:0.0013, A7s:0.0005, A8s:0.0001, A9s:0.0015, ATs:0.0019, AJs:0.0062, AQs:0.844, AKs:0.0004, AA:0.0016"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0012, A2o:0.1957, A3o:0.0229, K4o:0.0006, A4o:0.0268, K5o:0.0022, A5o:0.309, 65s:0.0004, 66:0.0003, K6o:0.0007, A6o:0.0326, A7o:0.0975, 88:0.0258, K8o:0.0016, A8o:0.0181, 96s:0.0009, 98s:0.0001, 99:0.0521, K9o:0.0049, A9o:0.0465, T5s:0.0024, T9s:0.0001, TT:0.0651, KTo:0.0046, ATo:0.0319, J7s:0.0002, J9s:0.0035, JJ:0.0001, KJo:0.0718, AJo:0.0305, QTs:0.0002, QQ:0.0002, KQo:0.0009, AQo:0.134, K2s:0.0058, K3s:0.0153, K4s:0.0007, K5s:0.0192, K6s:0.0012, K7s:0.0022, K8s:0.0411, K9s:0.0066, KTs:0.0148, KJs:0.0013, KQs:0.0058, KK:0.0001, AKo:0.0085, A2s:0.0216, A3s:0.0963, A4s:0.0002, A5s:0.0173, A6s:0.0276, A7s:0.0264, A8s:0.2287, A9s:0.2326, ATs:0.0877, AJs:0.269, AQs:0.0151, AKs:0.4352, AA:0.9983"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.0003, A3o:0.0001, 44:0.0013, A4o:0.0009, 52s:0.0007, 54s:0.0058, 55:0.0054, A5o:0.0017, 64s:0.0006, 65s:0.0004, 66:0.0806, A6o:0.0261, 74s:0.0006, 75s:0.0002, 76s:0.005, A7o:0.0022, 83s:0.0003, 88:0.0019, A8o:0.0006, 96s:0.0001, 98s:0.0245, 99:0.1434, T9s:0.0012, TT:0.042, KTo:0.0569, ATo:0.0002, J5s:0.0001, JJ:0.5114, Q9s:0.0001, QQ:0.1029, AQo:0.0003, K2s:0.0654, K3s:0.1952, K4s:0.2087, K6s:0.1278, K7s:0.0808, K8s:0.4122, K9s:0.8319, KTs:0.1268, KJs:0.9499, KQs:0.4363, KK:0.999, AKo:0.9913, A2s:0.0399, A3s:0.1813, A4s:0.63, A5s:0.6569, A6s:0.5484, A7s:0.4719, A8s:0.1318, A9s:0.2245, ATs:0.4664, AJs:0.5622, AQs:0.0075, AKs:0.5644, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.002, 54s:0.0051, 55:0.0083, 66:0.0005, 77:0.11, 88:0.0806, 98s:0.003, 99:0.0076, JJ:0.0002, QQ:0.362, AQo:0.0002, KTs:0.0024, KJs:0.0397, KQs:0.0002, KK:0.0003, A5s:0.0001, A6s:0.0001, A7s:0.1398, A9s:0.0337, ATs:0.2011, AJs:0.0864, AQs:0.5329, AKs:0.0003"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "AQo:0.0004, KK:0.0009, A7s:0.0001, AQs:0.0002, AKs:0.0009, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0112, A2o:0.0001, 33:0.0002, A3o:0.0107, 44:0.0006, A4o:0.0001, 55:0.0012, A5o:0.0017, 66:0.0012, 75s:0.0001, A7o:0.0006, 86s:0.0032, 87s:0.0001, 88:0.0001, A8o:0.0006, 98s:0.0001, 99:0.0076, A9o:0.0031, T9s:0.0072, TT:0.0027, ATo:0.0001, J9s:0.0168, JJ:0.5364, KJo:0.016, AJo:0.0001, QQ:0.2089, AQo:0.0001, K2s:0.0092, K4s:0.0009, K5s:0.0034, K6s:0.0837, K7s:0.0064, K9s:0.0288, KTs:0.0614, KJs:0.1707, KQs:0.0035, KK:0.9988, AKo:0.9999, A2s:0.083, A3s:0.0265, A4s:0.0425, A5s:0.1509, A6s:0.0354, A7s:0.0306, A8s:0.1147, A9s:0.0775, ATs:0.0584, AJs:0.1734, AQs:0.405, AKs:0.9988"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "32s:0.0016, K3o:0.0001, A3o:0.2152, A5o:0.1044, 64s:0.0037, 66:0.0008, A6o:0.0093, A7o:0.0943, 88:0.238, A8o:0.0126, 94s:0.0052, 98s:0.0017, TT:0.0005, ATo:0.0014, JJ:0.0898, QJo:0.0001, AJo:0.0546, QQ:0.007, AQo:0.003, K2s:0.0028, K5s:0.1438, K8s:0.1245, K9s:0.0116, KJs:0.0112, KK:0.0241, AKo:0.31, A2s:0.0219, A3s:0.0141, A5s:0.2749, A6s:0.0118, A7s:0.0046, A9s:0.0001, ATs:0.0683, AJs:0.0284, AQs:0.1602, AKs:0.4932, AA:0.8499"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, A5o:0.0003, 65s:0.0038, 66:0.0234, 76o:0.0003, A6o:0.0001, 73s:0.0002, 74s:0.0005, 77:0.0012, 85s:0.0003, 87s:0.0001, 88:0.0029, 98s:0.101, T4s:0.0001, T7s:0.0022, T8s:0.0076, TT:0.0029, J7s:0.0013, J9s:0.0003, JTs:0.0037, JJ:0.0002, Q2s:0.0003, Q4s:0.0001, QJs:0.0014, QQ:0.0016, K2s:0.1689, K5s:0.2005, K7s:0.459, K8s:0.0018, KTs:0.0065, KJs:0.4233, KQs:0.0789, KK:0.9758, AKo:0.6872, A2s:0.0175, A3s:0.0024, A4s:0.0002, A5s:0.068, A6s:0.7949, A7s:0.0007, A9s:0.049, ATs:0.0434, AJs:0.0017, AQs:0.2224, AKs:0.5053, AA:0.1501"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.001, A4o:0.0273, A5o:0.0075, 66:0.0001, A6o:0.0281, K8o:0.0032, A8o:0.0916, 99:0.013, A9o:0.0608, J7s:0.0073, JJ:0.0083, AJo:0.1414, QQ:0.0693, AQo:0.0008, K8s:0.0068, K9s:0.0147, KTs:0.0084, KJs:0.0468, KQs:0.0001, KK:0.0009, AKo:0.1947, A3s:0.3277, A6s:0.4166, A7s:0.0268, A8s:0.0751, A9s:0.0968, ATs:0.019, AQs:0.1313, AKs:0.5902, AA:0.9714"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0271, 33:0.0014, 54s:0.0016, A6o:0.0005, 75s:0.0005, 76s:0.1246, 84s:0.0006, 87s:0.0384, 93s:0.0002, 94s:0.0002, T3s:0.0002, TT:0.0001, J2s:0.0001, J7s:0.0044, JTs:0.0001, JJ:0.0031, AJo:0.0004, Q7s:0.0002, QTs:0.0033, QQ:0.0019, AQo:0.0001, K2s:0.2529, K3s:0.0745, K5s:0.0002, K6s:0.0497, K7s:0.1898, K8s:0.1072, K9s:0.057, KTs:0.4316, KJs:0.034, KQs:0.1231, KK:0.9991, AKo:0.8029, A2s:0.6834, A3s:0.0126, A4s:0.0126, A5s:0.3951, A6s:0.0572, A7s:0.0258, A8s:0.5761, A9s:0.0248, ATs:0.0042, AQs:0.0132, AKs:0.4069, AA:0.0286"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9623, 42o:0.0001, 92o:0.0001, T2o:0.0001, 32s:0.0048, 33:0.8789, J3o:0.0002, A3o:0.0002, 42s:0.0001, 43s:0.0001, 54o:0.0001, 64o:0.0031, 94o:0.0004, A4o:0.0001, 52s:0.0001, 53s:0.0025, 54s:0.213, 55:0.8404, 95o:0.0001, T5o:0.0001, A5o:0.0001, 64s:0.2854, 65s:0.0006, 66:0.7075, 86o:0.0001, K6o:0.0001, A6o:0.0001, 72s:0.0001, 74s:0.0322, 75s:0.0002, 76s:0.0001, 77:0.3904, 97o:0.0001, 82s:0.0004, 83s:0.0002, 86s:0.0017, 88:0.6657, 98o:0.0002, A8o:0.0001, 92s:0.0003, 94s:0.0022, 95s:0.0003, 96s:0.0003, 97s:0.0002, 98s:0.0001, 99:0.3564, T9o:0.0002, Q9o:0.0001, T3s:0.0007, T4s:0.0006, T6s:0.0002, T7s:0.0004, TT:0.0638, J2s:0.1827, J3s:0.0268, J4s:0.0053, J5s:0.0001, J7s:0.0002, J8s:0.3256, J9s:0.0023, JTs:0.1611, JJ:0.0786, QJo:0.0001, Q4s:0.0058, Q6s:0.0815, Q7s:0.0004, Q8s:0.0001, Q9s:0.0002, QTs:0.0002, QJs:0.0011, QQ:0.0005, AQo:0.0009, K2s:0.0001, K4s:0.0153, K5s:0.0012, K6s:0.0004, K7s:0.0003, K8s:0.0001, K9s:0.0074, KTs:0.0031, KJs:0.5406, KQs:0.0008, KK:0.0002, AKo:0.0332, A3s:0.0031, A4s:0.0667, A5s:0.0531, A6s:0.0009, A7s:0.0006, A8s:0.0317, A9s:0.0004, ATs:0.0797, AJs:0.2853, AQs:0.0346, AKs:0.069, AA:0.0003"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.056, 33:0.0001, 42s:0.0887, Q4o:0.0428, Q5o:0.0019, A5o:0.0004, 64s:0.0648, 65s:0.0001, 66:0.0021, 72s:0.067, 77:0.0125, Q7o:0.0006, A7o:0.2131, 88:0.0002, 93s:0.0019, 99:0.0004, Q9o:0.0045, T2s:0.0001, T4s:0.0101, T7s:0.0202, T9s:0.1042, TT:0.2508, KTo:0.0018, ATo:0.0073, J2s:0.0013, J9s:0.0013, JJ:0.0174, AJo:0.0001, Q2s:0.0151, Q3s:0.3991, Q5s:0.0553, Q6s:0.0011, Q8s:0.1758, Q9s:0.1779, QJs:0.1056, QQ:0.5188, KQo:0.1855, AQo:0.6123, K2s:0.0008, K4s:0.1171, K5s:0.2392, K6s:0.0001, K7s:0.0164, K8s:0.0001, K9s:0.011, KTs:0.0017, KJs:0.0003, KK:0.7045, AKo:0.1413, A2s:0.3306, A4s:0.1503, A7s:0.0549, A9s:0.0677, ATs:0.2189, AJs:0.0943, AQs:0.6373, AKs:0.1959, AA:0.8761"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "64s:0.0137, 65s:0.1238, 66:0.0047, 77:0.1959, 88:0.0037, 94s:0.0006, 97s:0.0006, 99:0.2562, A9o:0.0003, T6s:0.0009, T7s:0.0001, TT:0.0454, ATo:0.0001, J7s:0.0308, J8s:0.0007, JTs:0.0616, JJ:0.1502, KJo:0.0435, AJo:0.0172, Q4s:0.0958, Q6s:0.0042, Q7s:0.045, Q9s:0.0835, QJs:0.2888, QQ:0.4797, KQo:0.664, AQo:0.3684, K3s:0.4515, K4s:0.0928, K5s:0.1917, K6s:0.1538, K7s:0.0007, K8s:0.0104, K9s:0.0344, KTs:0.2275, KJs:0.1213, KQs:0.9646, KK:0.2953, AKo:0.8059, A2s:0.1019, A3s:0.0543, A4s:0.4601, A5s:0.8187, A6s:0.0122, A7s:0.3885, A8s:0.1116, A9s:0.011, ATs:0.3725, AJs:0.146, AQs:0.1412, AKs:0.6971, AA:0.1236"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|BTN:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.9187, 62o:0.0004, T2o:0.0007, Q2o:0.0004, K2o:0.0002, A2o:0.0006, 32s:0.3912, 33:0.7324, 43o:0.0003, 73o:0.0892, 93o:0.0234, J3o:0.0001, A3o:0.0001, 42s:0.0001, 43s:0.0001, 44:0.6942, 54o:0.0001, 64o:0.0001, 84o:0.0014, 94o:0.0001, 52s:0.0001, 53s:0.079, 54s:0.0003, 55:0.7564, 65o:0.1645, 75o:0.0042, 85o:0.0001, A5o:0.0001, 62s:0.594, 63s:0.5057, 65s:0.5461, 66:0.136, 86o:0.0003, 96o:0.0002, J6o:0.0001, K6o:0.0001, A6o:0.0001, 72s:0.3329, 73s:0.0251, 74s:0.423, 75s:0.4055, 76s:0.0207, 77:0.5416, 87o:0.0002, 97o:0.0004, T7o:0.0001, J7o:0.0001, K7o:0.0006, 82s:0.0002, 83s:0.0001, 84s:0.0003, 85s:0.0098, 86s:0.061, 87s:0.0002, 88:0.6393, 98o:0.0001, Q8o:0.0001, A8o:0.0004, 93s:0.0145, 94s:0.4871, 96s:0.0002, 97s:0.0006, 98s:0.313, 99:0.0426, T9o:0.0004, J9o:0.0002, K9o:0.0001, T2s:0.0557, T3s:0.223, T4s:0.0001, T5s:0.6477, T6s:0.0001, T8s:0.002, T9s:0.0016, TT:0.3939, KTo:0.0001, ATo:0.0002, J4s:0.0013, J5s:0.0013, J6s:0.0005, J7s:0.0001, J8s:0.1206, J9s:0.0003, JTs:0.0004, JJ:0.7518, QJo:0.0014, KJo:0.0003, AJo:0.0022, Q2s:0.0004, Q3s:0.0047, Q4s:0.0013, Q5s:0.0001, Q6s:0.3015, Q8s:0.0003, Q9s:0.0026, QTs:0.0023, QJs:0.0002, QQ:0.0001, AQo:0.0816, K2s:0.2432, K3s:0.0557, K4s:0.0004, K5s:0.6435, K7s:0.0011, K8s:0.2243, K9s:0.0088, KTs:0.0002, KJs:0.0316, KQs:0.0759, KK:0.0001, AKo:0.0476, A2s:0.0002, A3s:0.436, A4s:0.0036, A5s:0.1902, A6s:0.3528, A7s:0.0013, A8s:0.0002, A9s:0.0949, ATs:0.0425, AJs:0.059, AQs:0.4673, AKs:0.007"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0002, Q2o:0.0193, A2o:0.0389, 32s:0.0122, K3o:0.0191, A3o:0.0021, 44:0.0031, Q4o:0.067, A4o:0.1196, 54s:0.0006, 64s:0.0398, 65s:0.0007, 66:0.0327, 96o:0.001, A6o:0.0295, 73s:0.0017, 74s:0.0458, 75s:0.0073, 76s:0.004, 77:0.0028, A7o:0.3212, 82s:0.0281, 84s:0.0001, 86s:0.0397, 87s:0.0165, 88:0.0115, A8o:0.0048, 92s:0.0018, 97s:0.0008, 98s:0.0053, 99:0.0056, K9o:0.0312, T4s:0.0124, T6s:0.0013, T7s:0.1027, T8s:0.0002, T9s:0.0005, TT:0.0054, JTo:0.002, J2s:0.0017, J3s:0.0451, J4s:0.0022, J9s:0.0004, JTs:0.1021, JJ:0.0811, KJo:0.0356, AJo:0.0148, Q2s:0.086, Q3s:0.0343, Q4s:0.0016, Q6s:0.0115, Q7s:0.0218, Q9s:0.0314, QTs:0.4938, QJs:0.3024, QQ:0.3035, KQo:0.2616, AQo:0.6976, K2s:0.0017, K4s:0.1045, K5s:0.0074, K6s:0.0001, K7s:0.0011, K8s:0.0022, K9s:0.0602, KJs:0.0474, KQs:0.102, KK:0.5429, AKo:0.083, A2s:0.0931, A3s:0.0345, A4s:0.2801, A5s:0.36, A6s:0.0023, A7s:0.0046, A8s:0.0016, A9s:0.1825, ATs:0.0183, AJs:0.2549, AQs:0.0366, AKs:0.1142, AA:0.9933"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1224, 44:0.0208, A4o:0.0791, 53s:0.0119, 54s:0.0182, 55:0.1624, 64s:0.0103, 65s:0.0877, 66:0.1867, 76s:0.0029, 77:0.2059, 82s:0.0002, 87s:0.0041, 88:0.214, 96s:0.036, 98s:0.0222, 99:0.0078, A9o:0.0424, T5s:0.0001, TT:0.2027, J3s:0.0071, J9s:0.0044, JJ:0.0103, Q2s:0.0107, Q3s:0.4229, Q4s:0.2438, Q5s:0.0045, Q6s:0.0801, Q7s:0.1279, Q9s:0.3472, QTs:0.3406, QJs:0.035, QQ:0.6964, KQo:0.35, AQo:0.0956, K2s:0.2408, K4s:0.0339, K5s:0.0186, K6s:0.1191, K7s:0.0008, K8s:0.0015, K9s:0.0001, KTs:0.0062, KJs:0.0384, KQs:0.6585, KK:0.4569, AKo:0.8671, A2s:0.1225, A3s:0.4533, A4s:0.3007, A5s:0.1759, A6s:0.0052, A7s:0.203, A8s:0.224, A9s:0.3692, ATs:0.3729, AJs:0.0074, AQs:0.4537, AKs:0.8646, AA:0.0067"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0841, JJ:0.1697, QQ:0.6853, KK, AKo:0.2062, AKs:0.2592, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0855, QQ:0.9635, KK, AKo:0.2294, AQs:0.0001, AKs:0.2655, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 85s:0.0001, TT:0.0232, QQ:0.6761, KK, AKo:0.033, A9s:0.0001, AQs:0.0002, AKs:0.1184, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0012, 64s:0.0003, 66:0.0133, 76s:0.0006, 77:0.0054, 95s:0.001, 99:0.0085, T7s:0.0002, TT:0.0023, J9s:0.0023, JJ:0.0001, QQ:0.063, AQo:0.0073, K6s:0.0032, K8s:0.0085, K9s:0.0003, KTs:0.0652, KJs:0.0009, KQs:0.0027, KK:0.0159, A3s:0.0018, A4s:0.0001, A5s:0.0005, A7s:0.0013, AQs:0.1675, AA:0.0128"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.0018, A2o:0.0115, 32s:0.0001, A3o:0.0102, 44:0.024, A4o:0.1267, 55:0.0002, A5o:0.0456, 64s:0.0001, 65s:0.0001, 66:0.0058, K6o:0.0062, A6o:0.0111, 76s:0.0001, 77:0.0241, A7o:0.0583, 84s:0.0009, 86s:0.0018, 87s:0.0001, J8o:0.0001, K8o:0.0002, A8o:0.0559, 95s:0.0002, 97s:0.0097, A9o:0.0003, T5s:0.0002, T9s:0.0012, TT:0.1528, JTo:0.0001, ATo:0.0947, J2s:0.0005, J5s:0.0005, J6s:0.0002, J7s:0.0002, J8s:0.0017, J9s:0.001, JJ:0.0012, KJo:0.0011, AJo:0.0053, QQ:0.0266, AQo:0.4236, K2s:0.0031, K3s:0.0001, K5s:0.0003, K6s:0.0006, K8s:0.0042, K9s:0.0024, KJs:0.0008, KQs:0.0001, KK:0.0005, AKo:0.011, A2s:0.2165, A3s:0.1731, A4s:0.0988, A5s:0.0008, A6s:0.1357, A7s:0.0207, A8s:0.0179, A9s:0.0161, ATs:0.0076, AJs:0.1018, AQs:0.0638, AKs:0.0476, AA:0.9871"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0011, 33:0.0001, A3o:0.0003, 44:0.0016, K4o:0.0016, A4o:0.0001, 53s:0.0001, 54s:0.008, 55:0.0001, A5o:0.0003, 62s:0.003, 64s:0.0013, 65s:0.0006, 66:0.0497, 74s:0.0005, 75s:0.0022, 77:0.0776, 84s:0.0008, 86s:0.003, 88:0.0024, K8o:0.0038, 96s:0.0039, 97s:0.0008, 99:0.0044, K9o:0.0026, A9o:0.0009, T7s:0.0014, T8s:0.0039, T9s:0.0025, TT:0.0102, ATo:0.0002, J9s:0.0007, JJ:0.0043, KJo:0.0006, QQ:0.0007, K2s:0.1725, K3s:0.0594, K4s:0.122, K5s:0.0419, K6s:0.3149, K7s:0.3004, K8s:0.1536, K9s:0.1151, KTs:0.5641, KJs:0.6714, KQs:0.0419, KK:0.9835, AKo:0.9889, A2s:0.1062, A3s:0.5181, A4s:0.5659, A5s:0.673, A6s:0.219, A7s:0.0195, A8s:0.0728, A9s:0.0033, ATs:0.6592, AJs:0.068, AQs:0.0221, AKs:0.9524, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "heroPos": "CO",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.117, 54s:0.0284, 55:0.2363, 62s:0.0007, 65s:0.2042, 66:0.1773, 75s:0.0052, 76s:0.1907, 77:0.3142, 87s:0.0054, 88:0.052, 96s:0.0001, 98s:0.0542, 99:0.019, TT:0.0904, JJ:0.0002, QQ:0.7808, AQo:0.1316, K4s:0.001, KTs:0.4639, KJs:0.0962, KQs:0.0055, A3s:0.0013, A4s:0.0099, A5s:0.0159, A8s:0.2236, A9s:0.2641, ATs:0.1654, AJs:0.0848, AQs:0.9103, AKs:0.0012"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "32s:0.0001, A3o:0.0001, K4o:0.0001, A4o:0.0001, K5o:0.0001, 62s:0.0001, K6o:0.0001, K7o:0.0001, 86s:0.0001, 93s:0.0001, K9o:0.0001, A9o:0.0001, T3s:0.0001, KTo:0.0001, ATo:0.0001, J6s:0.0001, J8s:0.0001, JTs:0.0001, KJo:0.0001, Q9s:0.0001, QQ:0.0001, AQo:0.0001, K2s:0.0001, K4s:0.0001, K5s:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0001, KQs:0.0001, KK:0.0124, A6s:0.0002, AJs:0.0002, AKs:0.0003, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A5o:0.0002, 63s:0.0003, 66:0.008, 77:0.0008, 88:0.1133, 99:0.0653, TT:0.0288, J9s:0.0001, JJ:0.3185, QTs:0.0001, QQ:0.1073, AQo:0.036, K3s:0.0819, K4s:0.0373, K5s:0.005, K6s:0.4208, K7s:0.0044, K8s:0.0002, K9s:0.0146, KTs:0.2622, KJs:0.7805, KQs:0.0001, KK:0.9876, AKo, A2s:0.5693, A3s:0.2532, A4s:0.5738, A5s:0.3832, A6s:0.4269, A7s:0.3253, A8s:0.2538, A9s:0.41, ATs:0.2228, AJs:0.8345, AQs:0.0884, AKs:0.9985"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0756, A5o:0.0447, A6o:0.0105, 85s:0.0003, A8o:0.0266, TT:0.0341, ATo:0.0396, JJ:0.0474, AJo:0.033, QTs:0.0001, QQ:0.0163, AQo:0.0357, K2s:0.0037, K3s:0.0034, K4s:0.0005, K7s:0.0149, KK:0.0026, AKo:0.0001, A3s:0.174, A4s:0.0903, A5s:0.1744, A6s:0.0646, A7s:0.0563, A8s:0.0017, A9s:0.0967, ATs:0.0288, AQs:0.0822, AKs:0.1434, AA:0.987"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0077, 33:0.0033, 44:0.0001, 53s:0.0004, A5o:0.0123, 64s:0.0103, A6o:0.0006, 74s:0.0001, 76s:0.0006, 77:0.0006, A7o:0.0001, 86s:0.0049, 87s:0.0013, 88:0.0003, A8o:0.0006, 92s:0.0002, 93s:0.0003, 96s:0.01, 97s:0.0012, 99:0.0013, T7s:0.0001, TT:0.0006, J4s:0.0001, J5s:0.0004, J6s:0.0001, JJ:0.0015, Q5s:0.0002, Q6s:0.0018, Q8s:0.0019, Q9s:0.0002, QQ:0.0082, AQo:0.0002, K2s:0.0181, K3s:0.0988, K4s:0.0193, K5s:0.388, K7s:0.5533, K8s:0.5562, K9s:0.0665, KTs:0.4082, KJs:0.0043, KQs:0.153, KK:0.9974, AKo:0.999, A2s:0.0098, A3s:0.203, A4s:0.0001, A5s:0.5419, A6s:0.3034, A7s:0.3303, A8s:0.0278, A9s:0.0285, ATs:0.1065, AJs:0.0003, AQs:0.001, AKs:0.8565, AA:0.013"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|CO:CALL@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.7957, A2o:0.0002, 32s:0.0001, 33:0.9215, 53o:0.0004, 42s:0.0005, 43s:0.0024, 44:0.8174, 84o:0.0002, T4o:0.0002, Q4o:0.0001, 54s:0.0922, 55:0.9393, 65o:0.3321, 75o:0.1555, 85o:0.0004, K5o:0.0272, 62s:0.0041, 63s:0.0127, 64s:0.6109, 65s:0.5529, 66:0.3413, 96o:0.0001, 72s:0.0001, 76s:0.0521, 77:0.2933, T7o:0.0001, K7o:0.0005, A7o:0.0007, 83s:0.0121, 84s:0.0046, 85s:0.2131, 86s:0.001, 87s:0.028, 88:0.2758, Q8o:0.0001, 93s:0.0003, 94s:0.1787, 95s:0.0024, 96s:0.0639, 97s:0.0011, 99:0.8837, T9o:0.0002, J9o:0.0002, Q9o:0.0001, A9o:0.0002, T2s:0.0001, T3s:0.0273, T4s:0.009, T5s:0.0003, T6s:0.1699, T7s:0.2759, T8s:0.0282, T9s:0.0005, TT:0.5515, JTo:0.0002, QTo:0.0001, ATo:0.0002, J2s:0.0003, J3s:0.0001, J4s:0.0004, J5s:0.1107, J6s:0.2055, J8s:0.0453, J9s:0.6341, JTs:0.3836, JJ:0.6951, QJo:0.0001, KJo:0.0007, Q2s:0.0015, Q3s:0.0007, Q4s:0.1541, Q5s:0.0798, Q6s:0.0001, Q7s:0.021, Q8s:0.2826, Q9s:0.0008, QTs:0.0013, QJs:0.0019, QQ:0.0004, KQo:0.0226, AQo:0.0196, K2s:0.0001, K3s:0.0414, K4s:0.0007, K5s:0.0077, K6s:0.1264, K7s:0.2516, K8s:0.0159, K9s:0.0001, KTs:0.0004, KJs:0.0009, KQs:0.1402, AKo:0.1951, A2s:0.5853, A3s:0.3129, A4s:0.1236, A5s:0.0022, A6s:0.1412, A7s:0.0249, A8s:0.0015, A9s:0.0001, ATs:0.028, AJs:0.2169, AQs:0.0316, AKs:0.0037, AA:0.0018"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "Q2o:0.0599, A2o:0.0722, A3o:0.0356, K4o:0.0345, A4o:0.0588, 52s:0.0467, 55:0.0005, Q5o:0.0205, 62s:0.0001, 63s:0.1139, Q6o:0.0327, K6o:0.0014, A6o:0.1112, 72s:0.0001, 76s:0.0365, 77:0.0013, Q7o:0.0809, 87s:0.0005, A8o:0.1286, 96s:0.013, 99:0.003, Q9o:0.0637, K9o:0.0329, A9o:0.0197, T8s:0.0402, TT:0.0045, J4s:0.0018, J8s:0.1153, J9s:0.0017, JJ:0.0603, KJo:0.0005, AJo:0.0715, Q2s:0.0035, Q3s:0.0065, Q4s:0.0967, Q5s:0.1271, Q8s:0.0654, Q9s:0.0042, QTs:0.0345, QQ:0.4937, KQo:0.395, AQo:0.5046, K2s:0.0434, K3s:0.0451, K6s:0.0044, K8s:0.0003, KJs:0.0119, KQs:0.0318, KK:0.112, AKo:0.421, A2s:0.0231, A3s:0.0669, A5s:0.2799, A6s:0.0488, A7s:0.0001, A8s:0.2658, ATs:0.0369, AJs:0.1072, AQs:0.583, AKs:0.2391, AA:0.984"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0066, Q2o:0.0077, A2o:0.0009, 32s:0.0861, 33:0.0119, 42s:0.0023, 43s:0.1799, 44:0.0717, A4o:0.1814, 52s:0.0101, 54s:0.0103, 65s:0.1113, 66:0.1038, K6o:0.1325, 73s:0.0024, 74s:0.0197, 75s:0.039, 76s:0.0497, 77:0.2551, A7o:0.002, 83s:0.0009, 86s:0.0003, 87s:0.0013, 88:0.2474, 94s:0.0004, 95s:0.001, 97s:0.0001, 99:0.0477, Q9o:0.0005, K9o:0.0003, A9o:0.0003, T4s:0.0001, T5s:0.0002, T8s:0.0105, T9s:0.0001, TT:0.136, QTo:0.0105, KTo:0.0011, ATo:0.0017, J2s:0.0006, J4s:0.0014, J6s:0.0001, J7s:0.0005, J9s:0.0022, JTs:0.0001, JJ:0.048, KJo:0.0162, AJo:0.0005, Q2s:0.1352, Q3s:0.2935, Q4s:0.2033, Q5s:0.1243, Q7s:0.0008, Q8s:0.0075, Q9s:0.1749, QTs:0.2068, QJs:0.0395, QQ:0.506, KQo:0.3995, AQo:0.4052, K2s:0.0631, K3s:0.1, K4s:0.103, K5s:0.0007, K6s:0.2545, K7s:0.283, K8s:0.1231, K9s:0.0116, KTs:0.014, KJs:0.0352, KQs:0.8271, KK:0.888, AKo:0.3563, A2s:0.3462, A3s:0.1769, A4s:0.5046, A5s:0.0013, A6s:0.3852, A7s:0.0509, A8s:0.1858, ATs:0.7756, AJs:0.1817, AQs:0.2336, AKs:0.7571, AA:0.0142"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|BB:CALL@36.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0002, 55:0.0051, 63s:0.0001, 65s:0.0002, 87s:0.0001, 88:0.0028, 96s:0.0007, T7s:0.0004, TT:0.0001, J4s:0.0001, J7s:0.0001, J8s:0.0002, JJ:0.0138, Q8s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0013, K5s:0.0001, K6s:0.0001, K8s:0.0004, KTs:0.0001, KJs:0.0003, KK:0.0003, A2s:0.0007, A4s:0.0001, A5s:0.0001, A8s:0.0001, A9s:0.0001, AQs:0.0001, AKs:0.0004, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 76s:0.0008, 82s:0.0001, 84s:0.0001, 85s:0.0001, 86s:0.0005, 97s:0.0001, TT:0.0001, J4s:0.0002, J8s:0.0001, JJ:0.0001, Q6s:0.0001, Q9s:0.0001, QTs:0.0001, K2s:0.0001, K3s:0.0001, KK:0.0017, A5s:0.0001, A7s:0.0003, A9s:0.0013, ATs:0.0001, AQs:0.0002, AKs:0.0001, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "72o:0.0003, 82o:0.0001, 92o:0.0001, Q2o:0.0002, 33:0.0008, J3o:0.0001, A3o:0.0002, 43s:0.0084, 44:0.0023, J4o:0.0001, K4o:0.0003, A4o:0.0001, 52s:0.0032, 55:0.0002, 64s:0.0004, 65s:0.0229, 66:0.0087, 76o:0.0001, 96o:0.0001, Q6o:0.0002, A6o:0.0001, 72s:0.0011, 74s:0.0312, 75s:0.0115, 77:0.0681, 87o:0.0001, 97o:0.0001, T7o:0.0001, A7o:0.0005, 83s:0.003, 84s:0.0038, 85s:0.0142, 87s:0.0002, 88:0.0003, 98o:0.0001, Q8o:0.0001, A8o:0.0001, 92s:0.0103, 93s:0.0004, 94s:0.0009, 97s:0.0009, 98s:0.0123, J9o:0.0004, T3s:0.0006, T6s:0.0055, T7s:0.0045, T8s:0.0029, TT:0.0006, ATo:0.0013, J3s:0.0005, J4s:0.0462, J5s:0.0058, J8s:0.0071, J9s:0.049, JJ:0.0005, QJo:0.0001, AJo:0.0002, Q2s:0.0009, Q3s:0.0008, Q4s:0.0013, Q5s:0.0005, Q6s:0.0015, Q7s:0.0007, QQ:0.0026, KQo:0.0002, K2s:0.0469, K4s:0.0007, K6s:0.0006, K7s:0.0098, K8s:0.0008, K9s:0.0027, KJs:0.007, KQs:0.0033, KK:0.0071, AKo:0.0068, A2s:0.0015, A5s:0.0083, A6s:0.0049, A7s:0.0005, A8s:0.0116, A9s:0.0032, AJs:0.0005, AKs:0.0012, AA:0.9988"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|BTN:CALL@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0006, 42o:0.0001, 52o:0.0004, 62o:0.0001, T2o:0.0001, A2o:0.0007, 32s:0.0008, 33:0.0141, 53o:0.0001, J3o:0.0001, A3o:0.0002, 42s:0.0034, 54o:0.0001, Q4o:0.0001, K4o:0.0004, A4o:0.0001, 52s:0.0004, 53s:0.001, 75o:0.0013, 85o:0.0001, 95o:0.0001, T5o:0.0001, Q5o:0.0003, K5o:0.0006, A5o:0.0001, 63s:0.0002, 64s:0.0324, 65s:0.0022, 66:0.042, K6o:0.0002, 72s:0.0066, 73s:0.0044, 74s:0.0026, 75s:0.0027, 97o:0.0001, T7o:0.0008, Q7o:0.0001, K7o:0.0001, A7o:0.0002, 85s:0.0004, 86s:0.1379, 87s:0.0064, 88:0.0016, Q8o:0.0002, K8o:0.0001, 92s:0.0245, 93s:0.0024, 96s:0.0038, 97s:0.0004, 99:0.0008, J9o:0.0003, K9o:0.0001, T4s:0.0013, T6s:0.0026, T7s:0.0099, T8s:0.0235, TT:0.1893, J2s:0.005, J3s:0.0005, J6s:0.0007, J7s:0.0014, J8s:0.0052, J9s:0.0013, JTs:0.0009, JJ:0.1001, QJo:0.0004, KJo:0.0002, AJo:0.0001, Q2s:0.0004, Q6s:0.0014, Q7s:0.0027, Q9s:0.0095, QTs:0.0384, QQ:0.002, AQo:0.0014, K2s:0.0033, K4s:0.0155, K5s:0.0162, K8s:0.0139, K9s:0.001, KTs:0.001, KJs:0.0108, KQs:0.0023, KK:0.023, AKo:0.0021, A5s:0.0515, A6s:0.0072, A7s:0.0014, AJs:0.0294, AKs:0.0547, AA:0.9924"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|CO:CALL@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 74o:0.0001, 72s:0.0003, 77:0.0001, 98s:0.0003, 99:0.0001, T8s:0.0001, J7s:0.0001, J9s:0.0002, JJ:0.0001, QQ:0.0001, K2s:0.0002, K3s:0.0004, K4s:0.0003, K5s:0.0001, K7s:0.0001, KTs:0.0003, KQs:0.0001, KK:0.0003, A3s:0.0001, A4s:0.0003, A5s:0.0001, A7s:0.0004, A8s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0044, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|CO:CALL@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "62o:0.0001, 92o:0.0002, K2o:0.0002, A2o:0.0003, 53o:0.0001, 83o:0.0002, J3o:0.0004, K3o:0.0003, 42s:0.0031, 43s:0.0012, 44:0.0011, 74o:0.0005, 84o:0.0001, 94o:0.0002, J4o:0.0001, Q4o:0.0001, K4o:0.0003, A4o:0.0005, 54s:0.0104, 75o:0.0001, 85o:0.0004, J5o:0.0003, K5o:0.0003, A5o:0.0006, 62s:0.0025, 64s:0.0082, 66:0.0001, 76o:0.0005, 72s:0.0049, 73s:0.0001, 75s:0.0241, 76s:0.0028, 77:0.0036, 97o:0.0001, J7o:0.0004, Q7o:0.0001, K7o:0.0002, 86s:0.007, 98o:0.0001, T8o:0.0003, 92s:0.0002, 93s:0.0006, 94s:0.0004, 95s:0.0002, 97s:0.0023, 99:0.0908, J9o:0.0004, K9o:0.0004, T2s:0.0001, T4s:0.0004, T6s:0.0002, T8s:0.0005, T9s:0.0011, JTo:0.0001, J2s:0.0001, J3s:0.0003, J5s:0.0004, J6s:0.0005, J7s:0.0006, J8s:0.0029, J9s:0.0017, JJ:0.0006, Q3s:0.0007, Q6s:0.0008, Q7s:0.0005, QTs:0.0007, QQ:0.0007, KQo:0.0001, AQo:0.0001, K4s:0.0037, K6s:0.0007, K7s:0.0023, K8s:0.0063, KQs:0.0052, KK:0.1379, AKo:0.0007, A2s:0.0145, A7s:0.0007, A8s:0.0116, ATs:0.0013, AJs:0.0003, AQs:0.0055, AKs:0.6936, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|CO:CALL@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.017, 52o:0.0003, T2o:0.0001, A2o:0.0001, 63o:0.0005, Q3o:0.0002, A3o:0.0001, 42s:0.024, 44:0.0003, 54o:0.0011, 94o:0.0002, T4o:0.0003, A4o:0.001, 52s:0.0276, 54s:0.0013, 55:0.0004, 65o:0.0001, 95o:0.0002, J5o:0.0001, 62s:0.0005, 64s:0.0007, 66:0.0276, 86o:0.0011, T6o:0.0001, A6o:0.0002, 72s:0.0199, 73s:0.0006, 74s:0.0014, 76s:0.0002, 97o:0.0001, T7o:0.0008, K7o:0.0009, 82s:0.0013, 85s:0.001, 86s:0.0023, 87s:0.0032, 88:0.3777, 98o:0.0001, T8o:0.0007, A8o:0.0002, 95s:0.0025, 97s:0.0006, 98s:0.0014, 99:0.0002, A9o:0.0002, T3s:0.0003, T8s:0.0007, T9s:0.0176, TT:0.0004, QTo:0.0002, KTo:0.0002, ATo:0.0013, J2s:0.0038, J3s:0.0001, J4s:0.0012, J5s:0.0002, J6s:0.0325, J9s:0.0045, JTs:0.0162, QJo:0.0001, AJo:0.0009, Q2s:0.001, Q5s:0.0013, Q6s:0.0011, Q7s:0.0024, Q9s:0.0014, QTs:0.0032, QJs:0.0027, QQ:0.0139, KQo:0.0005, AQo:0.0006, K2s:0.0014, K3s:0.0016, K4s:0.0025, K5s:0.0123, K6s:0.0102, K8s:0.0071, KK:0.8685, AKo:0.0009, A6s:0.0223, A7s:0.0117, A8s:0.0015, ATs:0.048, AJs:0.0053, AQs:0.001, AA:0.9899"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|CO:CALL@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 52o:0.0001, 72o:0.0003, T2o:0.0001, 53o:0.0008, 63o:0.0001, A3o:0.0001, 42s:0.0014, 43s:0.0008, 64o:0.0002, 74o:0.0001, 94o:0.0003, A4o:0.0005, 53s:0.0002, 54s:0.0034, A5o:0.0003, 63s:0.0089, 65s:0.1378, 66:0.0004, 86o:0.0002, T6o:0.0011, 74s:0.0041, 76s:0.004, 77:0.0414, 87o:0.0003, 97o:0.0002, J7o:0.0001, 82s:0.0007, 83s:0.004, 84s:0.0051, 86s:0.0002, 98o:0.0001, K8o:0.0002, A8o:0.0004, 96s:0.0016, 97s:0.0047, T9o:0.0001, J9o:0.0002, K9o:0.0005, T2s:0.0009, T5s:0.0714, T6s:0.0012, T7s:0.0015, T9s:0.014, TT:0.0225, JTo:0.0001, QTo:0.0002, ATo:0.0001, J4s:0.001, J5s:0.0038, J9s:0.0014, JTs:0.0048, JJ:0.1614, Q4s:0.0071, QTs:0.0187, QQ:0.0016, K2s:0.001, K7s:0.0029, K8s:0.0048, K9s:0.0119, KTs:0.0724, KJs:0.0143, KK:0.0607, AKo:0.0006, A6s:0.0056, ATs:0.0035, AJs:0.0032, AQs:0.0174, AKs:0.0911, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|SB:CALL@36.75",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0003, A4o:0.0001, 54s:0.0001, 65s:0.0002, 66:0.0001, 73s:0.0001, 75s:0.0001, 76s:0.0001, 85s:0.0001, 86s:0.0001, 94s:0.0001, 99:0.0001, T5s:0.0002, J8s:0.0001, Q7s:0.0005, QQ:0.0006, K2s:0.0002, K6s:0.0001, K8s:0.0002, KK:0.0019, A6s:0.0002, AJs:0.0001, AQs:0.0001, AKs:0.0009, AA:0.9978"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@37.25|SB:CALL@36.75",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0016, 52o:0.0004, 62o:0.0001, 72o:0.0003, T2o:0.0001, J2o:0.0001, K2o:0.0001, A2o:0.002, 33:0.0028, 43o:0.0001, 53o:0.0001, 63o:0.0001, 93o:0.0025, T3o:0.0003, J3o:0.0005, Q3o:0.0005, 42s:0.0004, 44:0.015, K4o:0.0003, 54s:0.0011, 55:0.0002, 85o:0.0004, T5o:0.0001, J5o:0.0002, A5o:0.0003, 62s:0.0011, 63s:0.0008, 64s:0.0338, 65s:0.0643, 66:0.0016, T6o:0.0001, Q6o:0.0003, K6o:0.0001, 73s:0.011, 74s:0.0009, 75s:0.0005, 76s:0.0007, 77:0.0056, 87o:0.0002, 97o:0.0001, J7o:0.0001, A7o:0.0003, 82s:0.0007, 83s:0.0002, 84s:0.0001, 85s:0.0141, 86s:0.0001, 87s:0.008, 88:0.0028, 98o:0.0002, J8o:0.0014, K8o:0.0003, A8o:0.0001, 93s:0.0294, 94s:0.0042, 95s:0.018, 96s:0.0073, 99:0.06, T9o:0.0003, T6s:0.0102, T7s:0.0009, JTo:0.0002, QTo:0.0002, KTo:0.0001, ATo:0.0001, J2s:0.0258, J6s:0.0067, J9s:0.0072, JJ:0.0052, QJo:0.0003, KJo:0.0005, AJo:0.0001, Q7s:0.0015, QJs:0.0077, QQ:0.0066, AQo:0.0003, K2s:0.0017, K3s:0.0061, K5s:0.0005, K6s:0.0007, K7s:0.0006, K9s:0.0017, KTs:0.0021, KQs:0.0004, KK:0.0377, A2s:0.0123, A5s:0.0338, A9s:0.0017, AKs:0.2208, AA:0.9822"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BB:4BET@11.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "73s:0.0001, 75s:0.0004, 86s:0.0005, 87s:0.0001, 88:0.0001, T2s:0.0001, T3s:0.0003, T5s:0.0001, T7s:0.0001, T8s:0.0003, J4s:0.0001, J6s:0.0004, J9s:0.0002, JJ:0.0002, Q9s:0.0002, QJs:0.0008, KTs:0.0002, KK:0.0502, A2s:0.0027, A3s:0.0005, A5s:0.0004, A6s:0.0003, A9s:0.0002, ATs:0.0001, AJs:0.1527, AQs:0.0011, AKs:0.4153, AA:0.4091"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, Q2o:0.0002, J3o:0.0012, A3o:0.131, 42s:0.0004, 43s:0.0012, 44:0.0006, K4o:0.0001, A4o:0.0234, 54s:0.0002, 55:0.0008, 62s:0.0015, 63s:0.0002, 65s:0.0005, 66:0.0007, T6o:0.0001, 72s:0.0003, 73s:0.0019, 74s:0.0002, 75s:0.0001, 76s:0.0002, 82s:0.0002, 83s:0.0005, 85s:0.0014, 86s:0.0004, 87s:0.0003, 92s:0.0003, 93s:0.0001, 95s:0.0003, 96s:0.0019, 97s:0.0001, 98s:0.0029, 99:0.0085, A9o:0.0303, T3s:0.0003, T4s:0.0014, T5s:0.0003, T7s:0.0001, T9s:0.021, TT:0.0873, ATo:0.0172, J3s:0.0001, J4s:0.001, J7s:0.0771, JTs:0.0147, JJ:0.1642, AJo:0.0972, Q4s:0.0006, Q6s:0.0001, Q8s:0.0034, Q9s:0.0011, QTs:0.0011, QJs:0.0012, QQ:0.2661, KQo:0.0001, AQo:0.065, K2s:0.001, K3s:0.0001, K4s:0.0001, K9s:0.0001, KTs:0.0001, KQs:0.0004, KK:0.0943, AKo:0.3375, A3s:0.0297, A4s:0.3035, A5s:0.0456, A6s:0.0605, A7s:0.2193, A8s:0.1117, A9s:0.0502, ATs:0.4537, AJs:0.4662, AQs:0.5649, AKs:0.2724, AA:0.5909"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BB:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0766, 44:0.0138, A4o:0.0005, 54s:0.0006, 55:0.0788, 62s:0.0004, 63s:0.0014, 64s:0.0461, 65s:0.4429, 66:0.4401, 86o:0.0006, 73s:0.0009, 74s:0.0034, 75s:0.0002, 76s:0.1111, 77:0.2303, 87o:0.0007, 85s:0.0013, 86s:0.0047, 87s:0.0201, 88:0.3773, 98o:0.0006, 96s:0.0008, 97s:0.0001, 98s:0.0012, 99:0.2718, A9o:0.0013, T5s:0.0002, T6s:0.001, T8s:0.0532, T9s:0.1046, TT:0.2728, ATo:0.0102, J9s:0.0146, JTs:0.0426, JJ:0.0554, QJo:0.0003, AJo:0.0772, Q9s:0.0002, QTs:0.1307, QJs:0.0144, QQ:0.9231, AQo:0.0505, K5s:0.0002, K6s:0.0008, K7s:0.0015, KTs:0.0007, KJs:0.0067, KQs:0.0047, KK:0.9618, AKo:0.106, A2s:0.0162, A3s:0.0001, A4s:0.2254, A5s:0.2749, A6s:0.023, A7s:0.0757, A8s:0.1342, A9s:0.4978, ATs:0.2908, AJs:0.3249, AQs:0.485, AKs:0.2006, AA:0.1165"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0044, A2o:0.0001, 33:0.017, 53o:0.0001, A3o:0.0001, 43s:0.0001, 44:0.0094, A4o:0.0004, 52s:0.0004, 53s:0.0008, 54s:0.0003, 55:0.0183, 75o:0.0001, 85o:0.0001, Q5o:0.0001, A5o:0.0009, 62s:0.0002, 63s:0.003, 64s:0.0006, 65s:0.0008, 66:0.0136, 86o:0.0003, A6o:0.0006, 72s:0.0003, 73s:0.0003, 74s:0.0002, 75s:0.0016, 76s:0.0016, 77:0.0224, T7o:0.0001, A7o:0.0001, 83s:0.0001, 85s:0.0008, 86s:0.0005, 87s:0.0004, 88:0.0174, 98o:0.0001, T8o:0.0001, A8o:0.0001, 92s:0.0003, 93s:0.0001, 94s:0.0002, 96s:0.0007, 97s:0.0003, 98s:0.0002, 99:0.0033, T9o:0.0001, Q9o:0.0001, A9o:0.0007, T2s:0.0005, T3s:0.0002, T5s:0.0002, T6s:0.0006, T7s:0.0001, T8s:0.0001, T9s:0.0008, TT:0.0185, KTo:0.0001, ATo:0.0015, J3s:0.0003, J5s:0.0004, J6s:0.0001, J9s:0.0002, JTs:0.0046, JJ:0.0273, QJo:0.0001, KJo:0.0001, AJo:0.0312, Q2s:0.0003, Q3s:0.0001, Q8s:0.0007, Q9s:0.0004, QJs:0.0002, QQ:0.0582, KQo:0.0001, AQo:0.3955, K3s:0.0001, K4s:0.0001, K5s:0.0002, K6s:0.0001, K8s:0.0001, K9s:0.0008, KTs:0.0001, KJs:0.0001, KQs:0.0005, KK:0.0367, AKo:0.8886, A2s:0.083, A3s:0.055, A4s:0.3069, A5s:0.3738, A6s:0.3617, A7s:0.5273, A8s:0.1171, A9s:0.3386, ATs:0.1327, AJs:0.2504, AQs:0.5065, AKs:0.7991, AA:0.8835"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0008, JJ:0.0004, QQ:0.0013, K6s:0.0002, K9s:0.0001, KQs:0.0002, KK, AKo:0.0001, A6s:0.0001, A7s:0.0001, AKs:0.0036, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0006, TT:0.0017, JJ:0.0021, QQ:0.0021, KK, AKo:0.9814, AKs:0.998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0001, A3o:0.0001, 55:0.0075, 65s:0.0001, 74s:0.0002, 76s:0.0001, 84s:0.0001, 86s:0.0082, 88:0.0002, 95s:0.0063, 97s:0.0001, A9o:0.0007, T5s:0.0004, T6s:0.0001, T8s:0.0001, T9s:0.0003, TT:0.0052, J8s:0.0001, J9s:0.0001, JJ:0.0002, Q5s:0.0014, Q8s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0433, AQo:0.0021, K4s:0.0003, K6s:0.0003, K9s:0.0002, KTs:0.0012, KJs:0.0001, KQs:0.0006, KK:0.4214, AKo:0.2585, A2s:0.0001, A3s:0.0016, A4s:0.1267, A6s:0.0024, A7s:0.0002, A8s:0.0005, A9s:0.0477, ATs:0.106, AJs:0.0394, AKs:0.0121, AA:0.2079"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0023, 65s:0.0001, 74s:0.0001, A7o:0.1739, A9o:0.0546, T4s:0.0001, T8s:0.0001, ATo:0.0229, J5s:0.0001, J6s:0.0001, J7s:0.0001, J9s:0.0002, JTs:0.0056, JJ:0.0001, Q5s:0.0001, AQo:0.008, K6s:0.0033, K9s:0.0001, KQs:0.0005, KK:0.0002, AKo:0.5967, A2s:0.19, A3s:0.2548, A4s:0.4316, A5s:0.5012, A6s:0.5936, A7s:0.3831, A8s:0.236, A9s:0.3486, ATs:0.4792, AJs:0.2893, AQs:0.0156, AKs:0.9087, AA:0.7916"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3288, 42o:0.0001, T2o:0.0004, 33:0.6404, 42s:0.0002, 43s:0.008, 44:0.3345, 52s:0.0031, 54s:0.2904, 55:0.6618, 65o:0.0005, K5o:0.0002, A5o:0.0002, 62s:0.0033, 63s:0.0001, 64s:0.0124, 65s:0.3658, 66:0.9705, 76o:0.0358, K6o:0.0003, 72s:0.0003, 73s:0.0003, 74s:0.0057, 75s:0.1635, 76s:0.281, 77:0.9544, 87o:0.0003, T7o:0.0002, 83s:0.0004, 86s:0.0726, 87s:0.3753, 88:0.9315, 93s:0.0028, 94s:0.0018, 95s:0.0043, 96s:0.0371, 97s:0.0127, 98s:0.383, 99:0.9329, A9o:0.001, T2s:0.0002, T4s:0.0004, T5s:0.0019, T6s:0.001, T7s:0.0007, T8s:0.0356, T9s:0.3074, TT:0.8599, ATo:0.0657, J3s:0.0011, J5s:0.0023, J6s:0.0005, J8s:0.0093, J9s:0.0695, JTs:0.3959, JJ:0.5299, QJo:0.0003, KJo:0.0001, AJo:0.0465, Q2s:0.0012, Q4s:0.0001, Q5s:0.0001, Q7s:0.0005, Q8s:0.0014, Q9s:0.0199, QTs:0.0115, QJs:0.0045, QQ:0.8486, AQo:0.1886, K2s:0.002, K3s:0.0009, K4s:0.0019, K5s:0.0019, K6s:0.0239, K7s:0.0025, K8s:0.0115, KTs:0.0004, KJs:0.148, KQs:0.001, KK:0.9642, AKo:0.4318, A2s:0.0326, A3s:0.0089, A4s:0.3078, A5s:0.3253, A6s:0.1129, A7s:0.203, A8s:0.4029, A9s:0.3457, ATs:0.288, AJs:0.7164, AQs:0.527, AKs:0.4188, AA:0.1424"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.002, 52o:0.0001, A2o:0.0037, 33:0.0187, A3o:0.0001, 43s:0.0001, 44:0.0315, A4o:0.0016, 52s:0.0021, 53s:0.0001, 54s:0.0004, 55:0.0262, 75o:0.0001, K5o:0.0003, A5o:0.0159, 62s:0.0005, 63s:0.0006, 64s:0.0095, 65s:0.0021, 66:0.0281, K6o:0.0001, A6o:0.0024, 74s:0.0008, 75s:0.0001, 76s:0.004, 77:0.0136, A7o:0.0062, 85s:0.0001, 87s:0.0012, 88:0.0359, 92s:0.0001, 94s:0.0001, 95s:0.0009, 96s:0.0025, 97s:0.0008, 98s:0.0006, 99:0.0135, A9o:0.0001, T4s:0.0001, T5s:0.0002, T6s:0.0001, T7s:0.0003, T9s:0.0006, TT:0.0183, ATo:0.0001, J2s:0.0001, J6s:0.0001, JJ:0.0763, KJo:0.0001, AJo:0.0056, QJs:0.0002, QQ:0.006, AQo:0.3884, K2s:0.0001, K4s:0.0003, K6s:0.0003, K7s:0.0001, K8s:0.0001, K9s:0.0007, KTs:0.0009, KJs:0.0011, KQs:0.0001, KK:0.0151, AKo:0.5617, A2s:0.2101, A3s:0.3608, A4s:0.4561, A5s:0.4022, A6s:0.0778, A7s:0.3563, A8s:0.3526, A9s:0.2629, ATs:0.1567, AJs:0.1115, AQs:0.4473, AKs:0.5804, AA:0.8576"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0008, 63o:0.0001, A3o:0.0002, 42s:0.0001, 43s:0.0004, A4o:0.0006, 53s:0.0041, 54s:0.0007, 62s:0.0001, 63s:0.0001, 96o:0.0001, 72s:0.0008, 74s:0.0002, 75s:0.0001, 82s:0.0003, 83s:0.0024, 84s:0.0041, 85s:0.0006, 86s:0.0004, 88:0.0001, T8o:0.0001, J8o:0.0001, A8o:0.0001, 93s:0.0002, 94s:0.0007, 96s:0.0027, 97s:0.0001, 99:0.0002, T9o:0.0001, T3s:0.0001, TT:0.0159, J6s:0.0049, J7s:0.0001, J9s:0.0014, JTs:0.0006, JJ:0.0058, KJo:0.0001, AJo:0.1117, Q2s:0.0015, Q5s:0.0001, Q6s:0.0002, Q8s:0.0026, Q9s:0.0003, QJs:0.0001, QQ:0.4852, KQo:0.0002, AQo:0.0098, K2s:0.0008, K3s:0.0002, K4s:0.0015, K5s:0.0002, K6s:0.0075, K7s:0.0003, K8s:0.0001, K9s:0.0074, KTs:0.1401, KJs:0.0002, KQs:0.0083, KK:0.0015, A2s:0.0004, A4s:0.3473, A5s:0.1096, A6s:0.3246, A7s:0.0647, A8s:0.0029, A9s:0.1087, ATs:0.3235, AJs:0.0886, AQs:0.7157, AKs:0.5333, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@10.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 62o:0.0001, 72o:0.0001, Q2o:0.0003, 43o:0.0001, 43s:0.0003, A4o:0.0001, 52s:0.0012, 53s:0.0001, 55:0.0001, Q5o:0.0001, A5o:0.0006, 62s:0.0001, 64s:0.0002, 65s:0.0009, 72s:0.0002, 74s:0.0001, 75s:0.0002, 77:0.0158, 87o:0.0001, K7o:0.0001, A7o:0.0001, 82s:0.0003, 83s:0.0004, 85s:0.0001, 87s:0.0003, 88:0.0012, A8o:0.0001, 92s:0.0004, 97s:0.0006, 98s:0.0007, 99:0.0001, K9o:0.0001, T3s:0.0001, T4s:0.0002, T7s:0.0005, T8s:0.0005, T9s:0.0884, JTo:0.0001, ATo:0.0001, J2s:0.0002, J3s:0.0005, J6s:0.0003, J8s:0.0003, JTs:0.0014, JJ:0.0003, Q3s:0.0001, Q4s:0.0004, Q5s:0.0007, Q6s:0.0006, Q7s:0.0013, Q8s:0.0002, Q9s:0.0001, QJs:0.0007, QQ:0.124, KQo:0.0002, AQo:0.0001, K4s:0.0001, K5s:0.0001, K7s:0.0016, K8s:0.0001, K9s:0.0001, KTs:0.0001, KJs:0.0041, KQs:0.0002, KK:0.0108, AKo:0.3632, A2s:0.0007, A3s:0.0003, A4s:0.0023, A5s:0.0004, A6s:0.0002, A7s:0.1211, A9s:0.0002, ATs:0.1402, AJs:0.0004, AQs:0.0252, AKs:0.1846, AA:0.9865"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T9s:0.0001, TT:0.0013, QQ:0.0022, K7s:0.0001, K9s:0.0001, KK, A2s:0.0001, A3s:0.0003, A4s:0.0001, ATs:0.0001, AQs:0.0001, AKs:0.0018, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0002, QQ:0.0034, KK, AKo:0.3523, AKs:0.9881, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0002, Q3o:0.0001, 42s:0.0003, 44:0.0001, 54o:0.0001, A4o:0.0001, 52s:0.0001, 53s:0.0002, 54s:0.0001, 55:0.0002, K5o:0.0001, 65s:0.0007, 66:0.0007, 96o:0.0001, A6o:0.0001, 73s:0.0008, 76s:0.0002, 77:0.0001, 97o:0.0001, 82s:0.0001, 83s:0.001, 86s:0.0001, 87s:0.001, 88:0.0001, K8o:0.0004, 93s:0.0004, 94s:0.0001, 95s:0.0002, 98s:0.0017, Q9o:0.0001, T3s:0.0002, T6s:0.0002, T9s:0.0002, J2s:0.0006, J5s:0.0001, J6s:0.0001, J8s:0.0001, JTs:0.0013, JJ:0.0047, Q4s:0.0002, Q5s:0.0022, Q6s:0.0004, Q7s:0.0002, Q9s:0.0017, QTs:0.0001, QQ:0.0052, K2s:0.0002, K3s:0.0001, K4s:0.0004, K5s:0.0001, K6s:0.0004, K7s:0.0003, K9s:0.0002, KTs:0.0001, KQs:0.0004, KK:0.9923, AKo:0.0001, A2s:0.0003, A3s:0.0002, A4s:0.0001, A5s:0.0001, A6s:0.0003, A7s:0.0026, A8s:0.0015, ATs:0.0003, AJs:0.0057, AQs:0.0759, AKs:0.0052, AA:0.9981"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, Q2o:0.0001, 32s:0.0001, 53o:0.0001, 42s:0.0002, 43s:0.0001, Q4o:0.0001, K4o:0.0001, A4o:0.0001, 52s:0.0001, 53s:0.0009, 54s:0.0013, 55:0.0002, 75o:0.0001, 64s:0.0001, 65s:0.0001, 66:0.008, 86o:0.0001, 73s:0.0001, 74s:0.0005, 75s:0.0006, 77:0.0001, 97o:0.0001, A7o:0.0003, 82s:0.0001, 84s:0.0001, 85s:0.0003, 86s:0.0002, 87s:0.0001, 88:0.0014, 92s:0.0002, 93s:0.0001, 95s:0.0002, 98s:0.0009, 99:0.0006, T3s:0.0002, T5s:0.0001, T6s:0.0001, T7s:0.0001, T9s:0.0001, TT:0.0012, ATo:0.0001, J4s:0.0001, J5s:0.0001, J6s:0.0003, J8s:0.0001, JTs:0.0001, JJ:0.0026, QJo:0.0001, KJo:0.0001, Q2s:0.0004, Q4s:0.0001, Q8s:0.0001, Q9s:0.0002, QTs:0.0003, QQ:0.0035, AQo:0.0001, K3s:0.0018, K4s:0.0002, K8s:0.0021, K9s:0.0001, KQs:0.0002, KK:0.9871, AKo:0.0011, A2s:0.0004, A3s:0.0004, A6s:0.0004, A8s:0.0004, AJs:0.0033, AQs:0.0001, AKs:0.0045, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@10.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0002, A3o:0.0002, 42s:0.0003, 43s:0.0001, 44:0.0002, 53s:0.0004, 54s:0.0001, 62s:0.0002, 65s:0.0009, K6o:0.0001, 73s:0.0001, 87s:0.0001, A8o:0.0002, 94s:0.0001, 97s:0.0002, 99:0.0002, T2s:0.0001, T3s:0.0002, J2s:0.0001, J7s:0.0002, J9s:0.0005, JTs:0.0001, JJ:0.0305, AJo:0.0001, Q4s:0.0003, Q6s:0.0001, Q8s:0.0001, QTs:0.0019, QJs:0.0002, QQ:0.0086, AQo:0.0003, K3s:0.0001, K6s:0.0001, K9s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0004, KK:0.2032, AKo:0.2383, A2s:0.1656, A3s:0.0004, A5s:0.0011, A6s:0.2964, A7s:0.002, A8s:0.0003, A9s:0.1631, AJs:0.141, AQs:0.0006, AKs:0.0375, AA:0.4167"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0018, A2o:0.0051, A3o:0.0056, 44:0.0023, A4o:0.0071, 53s:0.0001, A7o:0.0001, 84s:0.0002, A8o:0.0381, 99:0.0001, T2s:0.0002, T5s:0.0001, ATo:0.0103, J3s:0.0015, J5s:0.0008, J7s:0.0002, J9s:0.0027, JTs:0.001, AJo:0.0118, Q6s:0.0001, QTs:0.0048, QQ:0.0049, AQo:0.0014, K4s:0.0015, K6s:0.0001, KTs:0.0009, KK:0.089, AKo:0.2893, A2s:0.0059, A3s:0.0003, A4s:0.0754, A6s:0.015, A7s:0.0014, A8s:0.0001, A9s:0.1067, ATs:0.0259, AJs:0.0131, AQs:0.0051, AKs:0.347, AA:0.5833"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@10.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2656, 32s:0.0246, 33:0.4875, A3o:0.0605, 42s:0.0236, 43s:0.0637, 44:0.4271, 54o:0.0347, 64o:0.0751, A4o:0.0594, 52s:0.0313, 53s:0.0526, 54s:0.161, 55:0.5417, 65o:0.0957, 75o:0.0466, 85o:0.0004, A5o:0.064, 62s:0.0853, 63s:0.0353, 64s:0.1879, 65s:0.2079, 66:0.9125, 76o:0.1272, 86o:0.0712, 96o:0.0781, A6o:0.0001, 72s:0.0422, 73s:0.0379, 74s:0.1206, 75s:0.0776, 76s:0.2696, 77:0.6065, 87o:0.0962, 97o:0.075, T7o:0.0461, J7o:0.0251, A7o:0.071, 82s:0.0564, 83s:0.0089, 84s:0.0736, 85s:0.0731, 86s:0.1633, 87s:0.2538, 88:0.9382, 98o:0.0943, T8o:0.0516, J8o:0.0322, A8o:0.082, 92s:0.0202, 95s:0.0571, 96s:0.1275, 97s:0.189, 98s:0.1874, 99:0.5145, T9o:0.118, J9o:0.0481, Q9o:0.0023, T4s:0.0227, T5s:0.0009, T6s:0.094, T7s:0.3515, T8s:0.2149, T9s:0.2198, TT:0.3388, JTo:0.0478, QTo:0.0439, KTo:0.0227, ATo:0.1979, J2s:0.0514, J3s:0.018, J5s:0.0509, J6s:0.0498, J7s:0.0875, J8s:0.1402, J9s:0.1205, JTs:0.2184, JJ:0.4553, QJo:0.0218, KJo:0.0531, AJo:0.172, Q2s:0.0047, Q3s:0.0528, Q4s:0.0001, Q5s:0.0333, Q6s:0.1151, Q7s:0.0347, Q8s:0.0865, Q9s:0.146, QTs:0.1716, QJs:0.174, QQ:0.9549, KQo:0.0325, AQo:0.1617, K3s:0.0486, K4s:0.0011, K5s:0.0509, K6s:0.0292, K7s:0.1136, K8s:0.1092, K9s:0.1188, KTs:0.1006, KJs:0.1195, KQs:0.1296, KK:0.9424, AKo:0.1943, A2s:0.1897, A3s:0.2435, A4s:0.3049, A5s:0.1792, A6s:0.1513, A7s:0.3064, A8s:0.2006, A9s:0.3738, ATs:0.5313, AJs:0.4324, AQs:0.4447, AKs:0.3915, AA:0.0523"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0041, A3o:0.0002, 44:0.0002, K4o:0.0001, 53s:0.0008, 54s:0.0001, 55:0.0002, 65o:0.0001, A5o:0.0019, 64s:0.0001, 66:0.0007, 75s:0.001, 76s:0.0006, A7o:0.0001, 85s:0.0001, 86s:0.0006, 87s:0.0002, 88:0.0001, A8o:0.0003, 92s:0.0001, 94s:0.0001, 97s:0.0001, A9o:0.0004, T4s:0.0001, T7s:0.0003, KTo:0.0001, J2s:0.0004, J4s:0.0002, J5s:0.0001, J6s:0.0004, J8s:0.0001, JTs:0.0003, JJ:0.0474, AJo:0.021, Q4s:0.0026, QQ:0.0336, AQo:0.5415, K3s:0.0006, K8s:0.0002, K9s:0.001, KJs:0.0002, KQs:0.0007, KK:0.0456, AKo:0.8049, A2s:0.079, A3s:0.3081, A4s:0.2576, A5s:0.3971, A6s:0.3532, A7s:0.0589, A8s:0.1336, A9s:0.2037, ATs:0.1846, AJs:0.4512, AQs:0.5098, AKs:0.6081, AA:0.9477"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@10.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, T3o:0.0001, K3o:0.0001, A3o:0.0002, 42s:0.0003, A4o:0.0001, 52s:0.0006, 54s:0.0001, 55:0.0002, 65o:0.0001, 75o:0.0003, 62s:0.0002, 63s:0.0001, 76o:0.0001, 72s:0.0002, T7o:0.0001, K7o:0.0001, A7o:0.0001, 83s:0.0001, 84s:0.0001, 85s:0.0002, 87s:0.0006, 88:0.026, A8o:0.0002, 92s:0.0001, 93s:0.0001, 94s:0.0001, 96s:0.0019, 98s:0.0007, T2s:0.0001, T4s:0.0001, T5s:0.0001, T6s:0.0001, T7s:0.0001, TT:0.0002, QTo:0.0001, ATo:0.0003, J3s:0.0003, J5s:0.0001, J6s:0.0005, J7s:0.0002, J9s:0.0011, JTs:0.0012, JJ:0.0014, KJo:0.0001, AJo:0.0005, Q7s:0.0002, QTs:0.001, QJs:0.0001, QQ:0.0001, AQo:0.0004, K2s:0.0001, K5s:0.0001, K7s:0.0001, K8s:0.0001, KJs:0.0014, KK:0.034, AKo:0.001, A2s:0.0006, A3s:0.0011, A4s:0.0008, A5s:0.0006, A7s:0.2238, A8s:0.0022, A9s:0.0013, ATs:0.2343, AJs:0.0124, AQs:0.4982, AKs:0.0014, AA:0.9937"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@10.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 52o:0.0001, 72o:0.0001, A3o:0.0001, 42s:0.0009, 43s:0.0002, A4o:0.0001, 53s:0.0001, 54s:0.0004, 65o:0.0006, J5o:0.0001, Q5o:0.0002, 64s:0.0001, T6o:0.0001, 72s:0.0001, 74s:0.0016, 76s:0.0001, 77:0.0001, Q7o:0.0003, 82s:0.0008, 86s:0.0001, 88:0.0125, 93s:0.0002, 96s:0.0001, 99:0.0405, J9o:0.0001, Q9o:0.0001, T6s:0.0001, T7s:0.0004, T8s:0.0003, T9s:0.0001, TT:0.0008, JTo:0.0001, ATo:0.0001, J7s:0.0005, J9s:0.0005, JJ:0.0035, AJo:0.0007, Q3s:0.0001, Q4s:0.0013, Q5s:0.0005, Q6s:0.0461, Q9s:0.0003, QTs:0.0003, QJs:0.0013, QQ:0.0013, KQo:0.0001, AQo:0.0002, K2s:0.0003, K3s:0.0001, K5s:0.0003, K6s:0.0009, K8s:0.0015, KTs:0.0006, KJs:0.0005, KQs:0.0133, KK:0.6143, AKo:0.6775, A2s:0.1849, A3s:0.0284, A4s:0.1571, A6s:0.1857, A7s:0.134, A8s:0.0004, A9s:0.0112, AJs:0.6541, AQs:0.586, AKs:0.5751, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@10.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 42o:0.0001, A2o:0.0001, 53o:0.0001, J3o:0.0001, K3o:0.0001, A3o:0.0002, 42s:0.0002, A4o:0.2252, 52s:0.0001, 53s:0.0188, 54s:0.0001, A5o:0.0005, 63s:0.0215, 66:0.0001, 72s:0.0035, 73s:0.0004, 74s:0.0001, 75s:0.0221, 76s:0.0001, 77:0.065, A7o:0.0001, 82s:0.0003, 83s:0.0002, 85s:0.1691, 86s:0.0001, 88:0.0666, 93s:0.0001, 94s:0.0002, 95s:0.0006, 96s:0.0001, 99:0.0293, T9o:0.0002, J9o:0.0001, T3s:0.0002, T4s:0.0001, T6s:0.0004, T7s:0.0002, T8s:0.002, T9s:0.0001, ATo:0.0001, J2s:0.0001, J3s:0.0005, J5s:0.0001, J6s:0.0206, J7s:0.0002, J8s:0.0001, JTs:0.0002, JJ:0.082, QJo:0.0001, Q3s:0.0004, Q4s:0.0169, Q5s:0.0001, Q6s:0.0048, Q7s:0.0002, Q8s:0.0012, QTs:0.0002, QJs:0.0007, QQ:0.1311, KQo:0.0001, K3s:0.0002, K4s:0.0145, K5s:0.0199, K6s:0.0001, K7s:0.0002, K9s:0.0427, KTs:0.0005, KJs:0.0008, KQs:0.154, KK:0.9147, AKo:0.6722, A3s:0.7587, A4s:0.2449, A5s:0.0048, A6s:0.1412, A9s:0.0029, ATs:0.0006, AJs:0.1626, AQs:0.0384, AKs:0.4932, AA:0.9946"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K4s:0.0001, KK:0.9999, A4s:0.0001, ATs:0.0001, AQs:0.0001, AKs:0.0091, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.5057, AKs:0.9845, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0003, Q4o:0.0001, A4o:0.0001, 53s:0.0001, 54s:0.0024, 75o:0.0001, K5o:0.0002, 62s:0.0002, 63s:0.0001, 64s:0.0003, 66:0.0117, T6o:0.0001, A6o:0.0001, 75s:0.0001, 76s:0.0003, 77:0.0021, Q7o:0.0001, 83s:0.0022, 85s:0.0001, 87s:0.0001, 98o:0.0001, K8o:0.0004, 92s:0.0004, 95s:0.0001, 96s:0.0008, 99:0.0002, T3s:0.0002, T7s:0.0001, T8s:0.0003, T9s:0.0001, TT:0.0004, KTo:0.0001, J2s:0.0033, J4s:0.0001, J5s:0.0002, J6s:0.0001, J8s:0.0001, JJ:0.0004, AJo:0.005, Q2s:0.0002, Q3s:0.001, Q4s:0.0001, Q5s:0.0001, Q7s:0.0002, Q8s:0.0002, Q9s:0.0003, QTs:0.0003, QJs:0.0002, QQ:0.0005, KQo:0.0002, K2s:0.0001, K4s:0.0003, K7s:0.0003, K8s:0.0009, KTs:0.0002, KK:0.8608, AKo:0.0001, A2s:0.0001, A3s:0.001, A5s:0.0002, A7s:0.0022, A8s:0.0001, A9s:0.0006, ATs:0.002, AJs:0.0024, AQs:0.0026, AKs:0.0007, AA:0.9927"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, K4o:0.0001, 52s:0.0001, 54s:0.0002, K5o:0.0002, 62s:0.0001, 63s:0.002, 65s:0.0001, 86o:0.0001, 75s:0.0001, 76s:0.0002, 77:0.0001, 87o:0.0001, Q7o:0.0001, 82s:0.0002, 84s:0.0006, 85s:0.0001, 87s:0.0005, 88:0.0019, Q8o:0.0003, 92s:0.0001, 94s:0.0003, 97s:0.0003, 98s:0.0002, 99:0.008, T9o:0.0001, A9o:0.0001, T3s:0.0002, T6s:0.0003, T8s:0.0001, TT:0.0001, ATo:0.0001, J2s:0.0002, J4s:0.0003, J7s:0.0001, JJ:0.001, Q3s:0.0004, Q4s:0.0001, Q7s:0.0005, Q8s:0.0001, QTs:0.0036, QQ:0.0028, AQo:0.0001, K3s:0.0002, K6s:0.0008, K7s:0.0007, KTs:0.0005, KK:0.9459, AKo:0.0004, A2s:0.0038, A4s:0.0001, A5s:0.0019, A6s:0.0006, A7s:0.0004, A8s:0.0004, AJs:0.0002, AKs:0.0013, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|CO:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 83o:0.0001, K3o:0.0002, 42s:0.0001, 43s:0.0001, 44:0.0001, 64o:0.0001, 74o:0.0002, A4o:0.0003, 55:0.0009, K5o:0.0001, 64s:0.0001, 65s:0.0001, 66:0.0001, 86o:0.0001, 72s:0.0001, 75s:0.0001, 77:0.0001, 83s:0.001, 84s:0.0002, 85s:0.0003, 88:0.0024, 94s:0.0001, 96s:0.0014, 98s:0.0001, 99:0.0001, J9o:0.0001, T2s:0.0001, T3s:0.0001, T4s:0.0006, T5s:0.0011, T7s:0.0004, T8s:0.0025, T9s:0.0019, TT:0.0053, KTo:0.0001, J2s:0.0009, J4s:0.0013, J5s:0.0001, J6s:0.0001, J7s:0.0017, J8s:0.0005, JTs:0.0002, JJ:0.0002, AJo:0.0014, Q2s:0.0002, Q4s:0.0004, Q5s:0.0001, Q6s:0.0001, QTs:0.0007, QJs:0.0001, AQo:0.0001, K3s:0.0005, K4s:0.0003, K5s:0.0002, K8s:0.0001, KTs:0.0002, KJs:0.0002, KK, AKo:0.0094, A2s:0.0009, A4s:0.0002, A5s:0.0006, A7s:0.0002, A8s:0.0024, A9s:0.0061, AQs:0.0004, AKs:0.2706, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|LJ:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3305, 33:0.2917, 43s:0.0986, 44:0.4497, 53s:0.149, 54s:0.4659, 55:0.8059, 63s:0.0102, 64s:0.5469, 65s:0.6698, 66:0.948, 74s:0.003, 75s:0.1531, 76s:0.7621, 77:0.8259, 86s:0.5421, 87s:0.5901, 88:0.9446, A8o:0.0001, 97s:0.0066, 98s:0.526, 99:0.9793, T7s:0.1364, T8s:0.7516, T9s:0.7629, TT:0.6908, ATo:0.0094, J7s:0.0291, J8s:0.2823, J9s:0.2535, JTs:0.6477, JJ:0.5508, AJo:0.0053, Q4s:0.0001, Q8s:0.0001, Q9s:0.0018, QTs:0.332, QJs:0.2983, QQ:0.9996, AQo:0.5859, K9s:0.0434, KTs:0.362, KJs:0.1199, KK:0.9798, AKo:0.1009, A2s:0.2313, A3s:0.1008, A4s:0.0045, A5s:0.3243, A6s:0.1709, A7s:0.0692, A8s:0.1015, A9s:0.8807, ATs:0.5134, AJs:0.08, AQs:0.9998, AKs:0.1084, AA:0.0965"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2306, 33:0.2752, A3o:0.0005, 44:0.3255, A4o:0.0007, 55:0.0353, A5o:0.0011, 62s:0.0001, 63s:0.0001, 65s:0.0008, 66:0.0508, 74s:0.0001, 75s:0.0002, 76s:0.0001, 77:0.1626, 85s:0.0001, 86s:0.0001, 88:0.0544, A8o:0.0001, 99:0.003, T8s:0.0003, TT:0.3072, ATo:0.0002, J9s:0.0001, JTs:0.0001, JJ:0.4445, AJo:0.0051, QQ:0.0002, K5s:0.0001, KJs:0.0001, KK:0.0202, AKo:0.8991, A2s:0.5128, A3s:0.7561, A4s:0.978, A5s:0.1884, A6s:0.1573, A7s:0.1639, A8s:0.1199, A9s:0.0155, ATs:0.484, AJs:0.9193, AQs:0.0002, AKs:0.8916, AA:0.9035"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|LJ:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.9501, QQ, KK, AKo:0.8914, AKs:0.9723, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@11.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, A3o:0.0001, 43s:0.0002, 44:0.0001, 55:0.0003, 63s:0.0001, 65s:0.0012, 76s:0.0001, 77:0.0001, 84s:0.0002, 88:0.0023, 93s:0.0001, 98s:0.0001, T4s:0.0001, T9s:0.0031, TT:0.0005, ATo:0.0004, J2s:0.0002, J4s:0.0002, J9s:0.0009, Q8s:0.0002, QJs:0.0001, QQ:0.0013, AQo:0.0001, K3s:0.0001, K7s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0001, KK:0.0952, A2s:0.0005, A3s:0.0016, A5s:0.0002, A7s:0.0002, A8s:0.0001, A9s:0.0185, ATs:0.0001, AJs:0.0011, AQs:0.0834, AKs:0.0001, AA:0.0548"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1271, 33:0.0009, A3o:0.0093, 42s:0.0001, 52s:0.0001, A5o:0.0105, 62s:0.0008, 63s:0.0007, 64s:0.0008, 65s:0.0032, 66:0.0001, K6o:0.0001, 73s:0.0001, 76s:0.0008, A7o:0.0138, 84s:0.0542, 85s:0.0001, 97s:0.0006, 98s:0.0009, T4s:0.0007, T6s:0.0001, T7s:0.0004, T9s:0.0017, TT:0.0007, ATo:0.005, J4s:0.0001, J7s:0.0001, Q2s:0.0023, Q3s:0.0001, Q4s:0.0001, Q8s:0.0001, QTs:0.0001, QJs:0.0013, QQ:0.0003, AQo:0.0247, K3s:0.0002, K4s:0.0115, K8s:0.0001, KK:0.0372, AKo:0.0126, A2s:0.2394, A3s:0.0002, A4s:0.0394, A5s:0.3849, A6s:0.0001, A7s:0.08, A8s:0.0033, ATs:0.3822, AJs:0.1404, AQs:0.5557, AKs:0.7407, AA:0.9449"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@11.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3134, 33:0.3445, A3o:0.0007, 43s:0.0365, 44:0.5457, 54o:0.0002, 54s:0.1636, 55:0.9591, 65o:0.0026, K5o:0.0003, A5o:0.0047, 62s:0.0015, 63s:0.0014, 64s:0.0259, 65s:0.6153, 66:0.9489, 76o:0.0083, 96o:0.0015, 73s:0.0049, 74s:0.0025, 75s:0.114, 76s:0.2465, 77:0.9528, 84s:0.0044, 85s:0.0128, 86s:0.1021, 87s:0.0032, 88:0.8112, T8o:0.0003, A8o:0.0036, 92s:0.0013, 93s:0.0005, 94s:0.005, 95s:0.0004, 96s:0.0091, 97s:0.0037, 99:0.5582, A9o:0.0023, T4s:0.0001, T5s:0.0001, T7s:0.0827, T8s:0.0005, T9s:0.0898, TT:0.5381, ATo:0.0024, J4s:0.0054, J5s:0.0021, J8s:0.0049, J9s:0.012, JTs:0.0012, JJ:0.7631, AJo:0.0504, Q4s:0.0011, Q6s:0.0054, Q8s:0.0131, Q9s:0.0001, QTs:0.0028, QJs:0.0156, QQ:0.5694, AQo:0.4182, K3s:0.0052, K4s:0.0041, K6s:0.0076, K7s:0.0005, KTs:0.0046, KJs:0.0028, KQs:0.0139, KK:0.9504, AKo:0.0446, A2s:0.0343, A3s:0.0445, A4s:0.0718, A5s:0.0025, A6s:0.1585, A7s:0.445, A8s:0.0628, A9s:0.0811, ATs:0.0741, AJs:0.0498, AQs:0.3046, AKs:0.0182, AA:0.3968"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0031, 33:0.0032, A3o:0.0019, 43s:0.0007, 44:0.0027, A4o:0.0003, 52s:0.0007, 54s:0.0026, 55:0.0163, A5o:0.0009, 62s:0.0024, 64s:0.0011, 65s:0.0048, 66:0.0029, A6o:0.0004, 75s:0.004, 76s:0.0451, A7o:0.0004, 87s:0.0004, 88:0.0007, T8o:0.0001, A8o:0.0024, 93s:0.0009, 94s:0.0001, 96s:0.0003, 97s:0.0011, 98s:0.0001, 99:0.0048, A9o:0.0003, T4s:0.0001, T9s:0.0005, TT:0.0187, J9s:0.0001, JTs:0.0004, JJ:0.0019, AJo:0.0018, Q9s:0.0001, QTs:0.0002, QJs:0.0007, QQ:0.0007, AQo:0.3752, K3s:0.0009, K5s:0.0039, K6s:0.0033, K7s:0.0003, K8s:0.0001, K9s:0.0007, KQs:0.0023, KK:0.0485, AKo:0.9548, A2s:0.3286, A3s:0.283, A4s:0.2389, A5s:0.1738, A6s:0.0939, A7s:0.1626, A8s:0.1723, A9s:0.1929, ATs:0.6275, AJs:0.1359, AQs:0.694, AKs:0.9818, AA:0.6032"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@11.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.005, 62o:0.0001, J2o:0.0003, Q2o:0.0003, A2o:0.0002, 32s:0.0004, 33:0.0008, A3o:0.0004, 44:0.0003, 84o:0.0001, T4o:0.0003, A4o:0.0001, 52s:0.0001, 65o:0.0001, 75o:0.0001, A5o:0.0003, 62s:0.0033, 63s:0.0001, 64s:0.0001, 66:0.0001, 86o:0.0001, J6o:0.0001, 75s:0.0005, 76s:0.1597, 77:0.0004, 97o:0.0005, J7o:0.0001, 84s:0.0001, 85s:0.0012, 86s:0.0005, 87s:0.001, 88:0.017, T8o:0.0002, Q8o:0.0001, 92s:0.0001, 94s:0.0002, 96s:0.0005, 98s:0.0001, 99:0.0016, T9o:0.0001, Q9o:0.0002, A9o:0.019, T3s:0.0019, T4s:0.0007, T5s:0.0004, T6s:0.0005, T8s:0.0002, T9s:0.0271, TT:0.0008, JTo:0.0001, ATo:0.0002, J2s:0.0002, J4s:0.0025, J5s:0.0018, J6s:0.0005, J7s:0.0001, J8s:0.0001, J9s:0.0055, JTs:0.0002, JJ:0.0001, QJo:0.0003, KJo:0.0001, AJo:0.0004, Q3s:0.0001, Q4s:0.0008, Q5s:0.0002, Q6s:0.0004, Q8s:0.0055, Q9s:0.0288, QQ:0.0841, K2s:0.0004, K3s:0.0004, K4s:0.0039, K6s:0.0005, K7s:0.0056, K8s:0.0005, KJs:0.0009, KQs:0.0005, KK:0.132, AKo:0.0131, A2s:0.2251, A3s:0.0001, A5s:0.0143, A6s:0.0002, A7s:0.4663, A8s:0.8197, A9s:0.002, ATs:0.2908, AJs:0.0198, AKs:0.0852, AA:0.9654"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, JJ:0.0003, QJs:0.0001, QQ:0.0002, K7s:0.0002, KK:0.9995, AKo:0.0021, A6s:0.0001, ATs:0.0002, AKs:0.0533, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK, AKo:0.9857, AKs:0.9882, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@5.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, T2o:0.0001, A2o:0.0001, 32s:0.0001, A3o:0.0001, 84o:0.0001, 53s:0.0001, 54s:0.0002, 55:0.0009, 65s:0.0001, 66:0.0001, 73s:0.0001, A7o:0.0001, 84s:0.0003, 85s:0.0001, 87s:0.0074, Q8o:0.0002, 93s:0.0002, 96s:0.0007, 99:0.0002, T7s:0.0001, TT:0.0001, JTo:0.0001, J2s:0.0003, J3s:0.0001, J6s:0.0001, J8s:0.0002, JTs:0.0002, JJ:0.0002, KJo:0.0001, AJo:0.0001, Q2s:0.0004, Q6s:0.0001, Q8s:0.0004, QTs:0.0001, QJs:0.0001, QQ:0.0003, AQo:0.0001, K3s:0.0003, K4s:0.0001, K5s:0.0001, K6s:0.0001, K9s:0.0003, KJs:0.0002, KQs:0.0005, KK:0.9913, AKo:0.0039, A3s:0.0004, A4s:0.0008, A5s:0.0002, A7s:0.0002, A8s:0.0001, A9s:0.0001, ATs:0.0224, AQs:0.0004, AKs:0.4036, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BB:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 44:0.0003, 74o:0.0001, 55:0.0009, 62s:0.0002, 64s:0.0002, 76o:0.0001, A7o:0.0001, 85s:0.0001, 86s:0.0006, 98o:0.0001, 92s:0.0002, 93s:0.0001, 97s:0.0011, 99:0.0003, T9s:0.0003, TT:0.005, J2s:0.0002, J5s:0.0001, J7s:0.0001, J9s:0.0006, JJ:0.0002, Q2s:0.0001, Q3s:0.0002, Q6s:0.0001, Q7s:0.0003, QTs:0.0001, QQ:0.0016, AQo:0.0003, K3s:0.0001, K6s:0.0001, K7s:0.0001, K8s:0.0001, K9s:0.0001, KTs:0.0003, KJs:0.0005, KQs:0.0002, KK:0.0466, AKo:0.0346, A6s:0.0018, A7s:0.0001, A8s:0.0001, ATs:0.0028, AJs:0.0007, AQs:0.3178, AA:0.1989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0046, A2o:0.0005, 43o:0.0049, K3o:0.0021, A3o:0.0255, 43s:0.0208, 44:0.0169, A4o:0.0252, 53s:0.001, 54s:0.0102, 55:0.0004, 95o:0.0058, K5o:0.001, A5o:0.0146, 62s:0.009, 63s:0.0021, 64s:0.0274, 65s:0.0127, 66:0.0024, 76o:0.0049, T6o:0.0001, J6o:0.0056, A6o:0.013, 73s:0.001, 76s:0.0003, 77:0.0129, A7o:0.0039, 84s:0.0074, 85s:0.0002, 86s:0.0066, 87s:0.0072, 88:0.0012, 98o:0.0047, J8o:0.0103, 92s:0.0001, 94s:0.013, 95s:0.0232, 96s:0.0236, 97s:0.011, 99:0.0118, T9o:0.0069, J9o:0.0016, K9o:0.0103, A9o:0.0173, T3s:0.0032, T7s:0.0128, T8s:0.0026, T9s:0.001, TT:0.005, QTo:0.0061, J5s:0.0013, J6s:0.016, J7s:0.0014, J8s:0.0036, J9s:0.0057, JTs:0.0032, JJ:0.0276, AJo:0.0131, Q3s:0.0073, Q5s:0.0001, Q6s:0.0102, Q7s:0.0145, Q8s:0.0051, Q9s:0.0383, QTs:0.0001, QJs:0.0132, QQ:0.2261, AQo:0.0992, K2s:0.0068, K3s:0.0009, K4s:0.002, K5s:0.0092, K6s:0.0065, K7s:0.0041, K8s:0.0208, K9s:0.0066, KTs:0.0129, KJs:0.0567, KQs:0.0305, KK:0.1309, AKo:0.4845, A2s:0.0222, A3s:0.1091, A4s:0.0262, A5s:0.1886, A6s:0.0282, A7s:0.0067, A8s:0.0001, A9s:0.0243, ATs:0.6553, AJs:0.0471, AQs:0.2183, AKs:0.3427, AA:0.8011"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BB:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1693, 32o:0.0183, 42o:0.0703, A2o:0.2335, 32s:0.2633, 33:0.2822, 43o:0.1791, 53o:0.2136, 63o:0.1458, K3o:0.041, A3o:0.1537, 42s:0.1556, 43s:0.3624, 44:0.3444, 54o:0.3675, 64o:0.3666, 74o:0.0756, K4o:0.0162, A4o:0.2471, 52s:0.2736, 53s:0.5239, 54s:0.7658, 55:0.3866, 65o:0.4277, 75o:0.322, 85o:0.1301, T5o:0.0131, K5o:0.0872, A5o:0.247, 62s:0.2436, 63s:0.3396, 64s:0.6637, 65s:0.6538, 66:0.3915, 76o:0.4015, 86o:0.3993, 96o:0.114, K6o:0.1016, A6o:0.161, 72s:0.1648, 73s:0.3448, 74s:0.3463, 75s:0.6949, 76s:0.6326, 77:0.267, 87o:0.311, 97o:0.1485, T7o:0.1051, J7o:0.0015, A7o:0.2663, 82s:0.1977, 83s:0.196, 84s:0.1599, 85s:0.3796, 86s:0.5338, 87s:0.3419, 88:0.3392, 98o:0.2656, T8o:0.2827, J8o:0.0804, Q8o:0.0912, A8o:0.1572, 92s:0.1047, 93s:0.1393, 94s:0.0622, 95s:0.2635, 96s:0.6057, 97s:0.629, 98s:0.2562, 99:0.337, T9o:0.3872, J9o:0.1315, Q9o:0.1123, K9o:0.1398, A9o:0.1991, T2s:0.1872, T3s:0.1116, T4s:0.179, T5s:0.2445, T6s:0.2983, T7s:0.4579, T8s:0.5263, T9s:0.6792, TT:0.2846, JTo:0.3497, QTo:0.2153, KTo:0.199, ATo:0.4113, J2s:0.063, J3s:0.1736, J4s:0.1339, J5s:0.2225, J6s:0.1321, J7s:0.4649, J8s:0.5406, J9s:0.5915, JTs:0.6403, JJ:0.412, QJo:0.1246, KJo:0.1026, AJo:0.4506, Q2s:0.1552, Q3s:0.1178, Q4s:0.115, Q5s:0.1118, Q6s:0.178, Q7s:0.1657, Q8s:0.1789, Q9s:0.177, QTs:0.5601, QJs:0.1647, QQ:0.9666, KQo:0.099, AQo:0.8906, K2s:0.224, K3s:0.1999, K4s:0.2336, K5s:0.2052, K6s:0.3062, K7s:0.2301, K8s:0.1496, K9s:0.2139, KTs:0.3074, KJs:0.2969, KQs:0.2159, KK:0.5979, AKo:0.0798, A2s:0.3095, A3s:0.2419, A4s:0.2753, A5s:0.5867, A6s:0.6053, A7s:0.3667, A8s:0.601, A9s:0.6122, ATs:0.4604, AJs:0.7401, AQs:0.8012, AKs:0.0868, AA:0.1201"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.699, A2o:0.0853, 32s:0.0756, 33:0.6453, 43o:0.0259, 53o:0.0317, 63o:0.0173, A3o:0.1779, 43s:0.2515, 44:0.6278, 54o:0.0705, 64o:0.0256, 74o:0.0332, A4o:0.0656, 52s:0.1589, 53s:0.0856, 54s:0.1883, 55:0.5906, 65o:0.0963, 75o:0.0394, A5o:0.2243, 62s:0.034, 63s:0.1359, 64s:0.1928, 65s:0.3108, 66:0.5763, 76o:0.0812, 86o:0.0004, 96o:0.0125, A6o:0.0446, 72s:0.0112, 73s:0.0761, 74s:0.1895, 75s:0.1839, 76s:0.3128, 77:0.6915, 87o:0.0858, 97o:0.0385, T7o:0.0279, K7o:0.0052, A7o:0.0582, 82s:0.0164, 83s:0.0245, 84s:0.0953, 85s:0.2029, 86s:0.1394, 87s:0.3863, 88:0.5995, 98o:0.0456, T8o:0.0313, A8o:0.0501, 92s:0.0154, 93s:0.0353, 94s:0.038, 95s:0.1247, 96s:0.0914, 97s:0.2066, 98s:0.2223, 99:0.613, T9o:0.0237, J9o:0.0033, A9o:0.0629, T3s:0.0237, T4s:0.0393, T5s:0.0944, T6s:0.0316, T7s:0.0753, T8s:0.1681, T9s:0.2118, TT:0.6608, JTo:0.0282, ATo:0.0495, J3s:0.0299, J4s:0.0014, J5s:0.0371, J6s:0.0277, J7s:0.036, J8s:0.0006, J9s:0.0622, JTs:0.0434, JJ:0.539, QJo:0.0006, AJo:0.1128, Q2s:0.0022, Q3s:0.0027, Q5s:0.0019, Q6s:0.0009, Q7s:0.0013, Q8s:0.0028, Q9s:0.0034, QTs:0.0093, QJs:0.0034, QQ:0.018, KQo:0.0002, AQo:0.0549, K2s:0.0245, K4s:0.0213, K5s:0.0281, K6s:0.0154, K7s:0.0731, K8s:0.0331, K9s:0.0346, KTs:0.0378, KJs:0.0369, KQs:0.0017, KK:0.3956, AKo:0.9103, A2s:0.2786, A3s:0.4065, A4s:0.4562, A5s:0.365, A6s:0.2688, A7s:0.4104, A8s:0.1799, A9s:0.1903, ATs:0.3105, AJs:0.2411, AQs:0.1771, AKs:0.9121, AA:0.8799"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 88:0.0003, 99:0.0012, T2s:0.0001, T6s:0.0001, TT:0.0023, QTo:0.0001, J8s:0.0002, JJ:0.0059, QJs:0.0001, QQ:0.0143, KK:0.9992, AKo:0.0017, A3s:0.0001, A4s:0.0002, A5s:0.0002, A7s:0.0001, A8s:0.0013, AQs:0.0002, AKs:0.0048, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0003, 99:0.0006, TT:0.0016, JJ:0.002, QQ:0.0054, KK, AKo:0.8606, A9s:0.0001, AQs:0.0002, AKs:0.9791, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0007, 33:0.0001, A3o:0.0009, 42s:0.0003, 43s:0.0002, 52s:0.0005, 53s:0.001, 54s:0.0001, 55:0.0018, K5o:0.0001, 64s:0.0005, 65s:0.0001, 72s:0.0004, 76s:0.0009, 77:0.0001, J7o:0.0002, 82s:0.0001, 83s:0.0001, 84s:0.0001, 86s:0.0006, 87s:0.0003, 88:0.0022, 92s:0.0003, 93s:0.0007, 94s:0.0001, 95s:0.0011, 96s:0.001, 97s:0.0002, T2s:0.0001, T3s:0.0004, T4s:0.0004, T5s:0.0002, T6s:0.0005, T7s:0.004, TT:0.0188, KTo:0.0004, ATo:0.0005, J2s:0.0001, J5s:0.0001, J8s:0.0003, J9s:0.0001, JTs:0.0001, JJ:0.1281, QJo:0.0004, Q5s:0.0006, Q6s:0.0005, Q7s:0.0003, Q8s:0.0002, Q9s:0.0002, QTs:0.0002, QJs:0.0001, QQ:0.0828, AQo:0.0005, K3s:0.0003, K4s:0.0003, K7s:0.0003, K8s:0.0001, K9s:0.0004, KTs:0.0001, KJs:0.0002, KQs:0.0443, KK:0.2249, AKo:0.2363, A2s:0.0001, A3s:0.1296, A4s:0.0001, A5s:0.0081, A7s:0.1283, A8s:0.0002, A9s:0.0002, ATs:0.0003, AJs:0.0073, AQs:0.2368, AKs:0.9094, AA:0.7394"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0066, 33:0.0001, 93o:0.0001, J3o:0.0001, A3o:0.0164, 42s:0.0029, 43s:0.0006, 44:0.0016, A4o:0.0149, 52s:0.0001, 54s:0.0001, 55:0.0172, K5o:0.0001, A5o:0.0149, 63s:0.0001, 64s:0.0078, 65s:0.0001, 66:0.0125, 76s:0.0001, 77:0.0112, 84s:0.0014, 87s:0.0003, 88:0.0193, 93s:0.0001, 96s:0.0001, 97s:0.0003, 98s:0.0026, T2s:0.005, T5s:0.0005, T6s:0.0001, T7s:0.0013, T8s:0.0001, T9s:0.0001, TT:0.0401, J2s:0.0004, J3s:0.0002, J4s:0.0001, J7s:0.0002, J8s:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.0002, Q3s:0.0027, Q4s:0.0141, Q5s:0.0003, Q6s:0.0057, Q8s:0.0001, Q9s:0.0001, QTs:0.0161, QJs:0.0404, QQ:0.0529, AQo:0.0076, K3s:0.0001, K5s:0.0015, K6s:0.0002, K8s:0.0042, K9s:0.0057, KTs:0.027, KK:0.0894, AKo:0.1389, A2s:0.0001, A3s:0.0494, A4s:0.0633, A5s:0.0416, A7s:0.0201, A8s:0.0037, A9s:0.027, ATs:0.0144, AJs:0.0132, AQs:0.0006, AKs:0.0695, AA:0.2606"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2662, A2o:0.0004, 32s:0.0044, 33:0.4327, A3o:0.0008, 43s:0.0201, 44:0.2628, 54o:0.0259, 64o:0.0035, 84o:0.0016, A4o:0.0045, 52s:0.0056, 53s:0.0257, 54s:0.1695, 55:0.4045, 65o:0.0269, 85o:0.0012, Q5o:0.0013, A5o:0.012, 63s:0.134, 64s:0.114, 65s:0.2825, 66:0.8991, 76o:0.018, 86o:0.0012, 96o:0.0154, 73s:0.0025, 74s:0.051, 75s:0.083, 76s:0.1191, 77:0.9414, 87o:0.0365, 97o:0.0054, T7o:0.0006, Q7o:0.0003, A7o:0.0033, 84s:0.0073, 86s:0.077, 87s:0.1268, 88:0.6083, 98o:0.0017, T8o:0.0056, Q8o:0.0028, A8o:0.0709, 93s:0.0047, 95s:0.0352, 96s:0.0466, 97s:0.091, 98s:0.0719, 99:0.8743, T9o:0.0032, J9o:0.0005, A9o:0.0597, T4s:0.0547, T5s:0.0001, T6s:0.043, T7s:0.086, T8s:0.0034, T9s:0.092, TT:0.3091, ATo:0.0633, J4s:0.0193, J5s:0.0164, J7s:0.0037, J8s:0.0166, J9s:0.09, JTs:0.2338, JJ:0.2939, AJo:0.1819, Q2s:0.001, Q4s:0.0029, Q5s:0.0055, Q6s:0.0305, Q7s:0.0068, Q8s:0.006, Q9s:0.056, QTs:0.085, QJs:0.0133, QQ:0.7591, KQo:0.0024, AQo:0.4673, K3s:0.0019, K4s:0.0031, K5s:0.0286, K7s:0.0058, K8s:0.008, K9s:0.0063, KTs:0.0055, KJs:0.0024, KQs:0.0341, KK:0.7316, AKo:0.1659, A2s:0.0279, A3s:0.0057, A4s:0.0203, A5s:0.0476, A6s:0.0391, A7s:0.0961, A8s:0.3915, A9s:0.1767, ATs:0.2631, AJs:0.3626, AQs:0.6545, AKs:0.2577, AA:0.1193"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0338, A2o:0.1135, 32s:0.0007, 33:0.0634, 43o:0.0002, A3o:0.0979, 42s:0.0048, 43s:0.0032, 44:0.0546, 54o:0.0006, 64o:0.0007, 74o:0.0002, 84o:0.0002, A4o:0.2379, 52s:0.0001, 53s:0.0078, 54s:0.0043, 55:0.0364, 65o:0.0005, 75o:0.0002, 85o:0.0003, A5o:0.2468, 62s:0.0016, 63s:0.0024, 64s:0.0144, 65s:0.0915, 66:0.0266, 76o:0.001, 86o:0.0003, A6o:0.222, 72s:0.0001, 73s:0.0001, 74s:0.0444, 75s:0.009, 76s:0.0525, 77:0.0473, 87o:0.0005, 97o:0.0005, A7o:0.2043, 82s:0.0009, 83s:0.0003, 84s:0.0007, 85s:0.0006, 86s:0.0017, 87s:0.0008, 88:0.0369, T8o:0.0004, A8o:0.0012, 93s:0.0005, 94s:0.0002, 95s:0.0006, 96s:0.0089, 97s:0.0068, 98s:0.005, 99:0.0903, T9o:0.0004, J9o:0.0002, A9o:0.0603, T6s:0.0002, T7s:0.0006, T8s:0.0022, T9s:0.009, TT:0.0886, ATo:0.3193, J2s:0.0001, J4s:0.0009, J5s:0.0003, J6s:0.0001, J7s:0.0007, J8s:0.0038, J9s:0.0085, JTs:0.0037, JJ:0.0931, AJo:0.1356, Q2s:0.0004, Q5s:0.0001, Q8s:0.0002, Q9s:0.0013, QTs:0.0001, QJs:0.0072, QQ:0.0488, AQo:0.1142, K2s:0.0001, K4s:0.0002, K6s:0.0006, KJs:0.0029, KK:0.0272, AKo:0.7159, A2s:0.293, A3s:0.652, A4s:0.6703, A5s:0.7137, A6s:0.4835, A7s:0.6225, A8s:0.3768, A9s:0.5456, ATs:0.5032, AJs:0.5073, AQs:0.3372, AKs:0.7385, AA:0.8807"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32o:0.0001, 42o:0.0001, 72o:0.0002, 82o:0.0002, Q2o:0.0001, K2o:0.0001, A2o:0.0001, 32s:0.0037, 43o:0.0001, 53o:0.0005, 63o:0.0008, Q3o:0.0001, K3o:0.0001, 44:0.0002, 74o:0.0001, T4o:0.0001, J4o:0.0001, K4o:0.0001, A4o:0.0003, 54s:0.0047, 55:0.0018, 65o:0.0001, A5o:0.0002, 62s:0.0002, 63s:0.0007, 64s:0.0003, 65s:0.0004, 66:0.0001, 86o:0.0001, T6o:0.0001, J6o:0.0001, 73s:0.0015, 74s:0.0001, 76s:0.0067, 77:0.0001, Q7o:0.0001, A7o:0.0009, 82s:0.0015, 86s:0.0122, 87s:0.0003, 88:0.0022, T8o:0.0001, Q8o:0.0001, K8o:0.0001, 92s:0.0024, 94s:0.0007, 96s:0.0002, 97s:0.0007, 99:0.001, Q9o:0.0003, A9o:0.002, T2s:0.0005, T5s:0.0005, T6s:0.0007, T8s:0.007, T9s:0.1779, TT:0.0007, QTo:0.0013, KTo:0.0001, J3s:0.0007, J4s:0.0012, J6s:0.0005, J7s:0.0001, JJ:0.0002, KJo:0.0002, AJo:0.0041, Q2s:0.0116, Q3s:0.0023, Q5s:0.0108, Q6s:0.0004, QJs:0.0002, QQ:0.0016, KQo:0.0002, AQo:0.0027, K2s:0.0008, K4s:0.0013, K7s:0.0046, K8s:0.0007, K9s:0.0006, KTs:0.0011, KJs:0.0005, KQs:0.0028, KK:0.0649, AKo:0.0387, A2s:0.0046, A3s:0.0016, A4s:0.0071, A5s:0.0119, A7s:0.0008, A8s:0.0015, A9s:0.128, ATs:0.0115, AJs:0.0355, AQs:0.0158, AKs:0.0227, AA:0.9751"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32o:0.0001, 62o:0.0003, 82o:0.0002, Q2o:0.0001, A2o:0.0001, 33:0.0004, 43o:0.0001, 53o:0.0001, 63o:0.0001, 83o:0.0001, 93o:0.0001, J3o:0.0001, K3o:0.0001, A3o:0.0002, 42s:0.0027, 43s:0.0049, 44:0.0019, 64o:0.0001, 94o:0.0004, T4o:0.0001, A4o:0.0001, 53s:0.0002, 54s:0.0002, 65o:0.0001, A5o:0.0029, 62s:0.0011, 63s:0.0001, 64s:0.0013, 65s:0.0001, T6o:0.0001, A6o:0.0004, 72s:0.0001, 75s:0.0046, 76s:0.0005, 77:0.0001, T7o:0.0006, J7o:0.0001, A7o:0.0001, 87s:0.0016, 88:0.0021, 98o:0.0001, J8o:0.0001, Q8o:0.0001, A8o:0.0003, 93s:0.001, 94s:0.0016, 95s:0.001, 96s:0.0019, 99:0.0104, T9o:0.0002, K9o:0.0002, T2s:0.0001, T3s:0.0004, T4s:0.0001, T5s:0.0048, T6s:0.0009, T9s:0.0003, TT:0.0021, KTo:0.0002, J4s:0.002, J5s:0.0001, J6s:0.0005, J8s:0.0003, J9s:0.0059, JTs:0.0729, JJ:0.0649, QJo:0.0001, KJo:0.0002, Q2s:0.0005, Q4s:0.0003, Q5s:0.0031, Q6s:0.0003, Q7s:0.0012, Q9s:0.0001, QJs:0.0782, QQ:0.0018, KQo:0.0002, AQo:0.0001, K3s:0.001, K4s:0.0149, K8s:0.0001, KTs:0.0043, KJs:0.0032, KQs:0.0009, KK:0.5132, AKo:0.013, A2s:0.0038, A4s:0.003, A7s:0.0048, A8s:0.0009, A9s:0.0016, ATs:0.0138, AKs:0.0357, AA:0.9856"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, 97s:0.0001, 99:0.0009, TT:0.0004, JTs:0.0005, Q2s:0.0001, QQ:0.0017, K7s:0.0001, KTs:0.0004, KK:0.9983, AKo:0.0024, A2s:0.0001, A5s:0.0007, A7s:0.0001, A8s:0.0001, A9s:0.0001, AQs:0.0002, AKs:0.0001, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0006, QQ:0.0006, KK, AKo:0.9163, AKs:0.9976, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 52o:0.0001, 33:0.0092, T3o:0.0003, 42s:0.0004, 44:0.0004, 94o:0.0001, K4o:0.0001, A4o:0.0001, 52s:0.0003, 53s:0.0005, 54s:0.0001, Q5o:0.0001, K5o:0.0001, 62s:0.0001, 65s:0.0041, K6o:0.0002, 72s:0.0007, 76s:0.001, 77:0.017, 87o:0.0001, 86s:0.0008, 88:0.0011, T8o:0.0001, K8o:0.0001, 92s:0.0046, 93s:0.0002, 94s:0.0004, 97s:0.0098, 99:0.0013, T9o:0.0001, K9o:0.0005, A9o:0.0001, T6s:0.0009, T7s:0.001, T8s:0.0007, TT:0.0002, J2s:0.0002, J5s:0.0004, J6s:0.0004, J7s:0.0008, JJ:0.008, Q3s:0.002, Q6s:0.0001, Q8s:0.0024, Q9s:0.0012, QTs:0.0001, QJs:0.0002, QQ:0.0151, KQo:0.0002, AQo:0.0004, K3s:0.0003, K9s:0.0025, KTs:0.0022, KJs:0.0002, KQs:0.0012, KK:0.9975, AKo:0.0031, A3s:0.0004, A4s:0.0015, A5s:0.0003, A6s:0.0028, A7s:0.0063, A8s:0.0005, A9s:0.001, ATs:0.0052, AJs:0.0035, AQs:0.0007, AKs:0.0786, AA:0.9908"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|BTN:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0013, 52o:0.0001, K2o:0.0002, A2o:0.0001, 32s:0.0004, 33:0.0088, J3o:0.0001, 42s:0.0002, 44:0.0016, K4o:0.0001, A4o:0.0001, 52s:0.0013, 55:0.0009, 65o:0.0003, K5o:0.0003, A5o:0.0001, 63s:0.0006, 65s:0.0016, 66:0.0008, 86o:0.0001, Q6o:0.0001, A6o:0.0004, 74s:0.0009, 76s:0.0003, 77:0.0002, K7o:0.0002, A7o:0.0002, 84s:0.0001, 86s:0.0001, 88:0.0001, T8o:0.0001, 92s:0.0002, 94s:0.001, 95s:0.0007, 96s:0.0022, 97s:0.0006, 99:0.0016, K9o:0.0001, A9o:0.0013, T3s:0.0002, T4s:0.0005, T6s:0.0096, T7s:0.0004, T8s:0.0038, T9s:0.0003, TT:0.0001, JTo:0.0001, KTo:0.0003, ATo:0.0001, J2s:0.0015, J8s:0.0001, J9s:0.0001, JTs:0.0014, JJ:0.0018, KJo:0.0003, Q3s:0.0007, Q5s:0.0001, Q6s:0.0002, Q7s:0.0002, Q8s:0.0028, Q9s:0.0006, QTs:0.0005, QJs:0.0104, QQ:0.0003, K2s:0.002, K4s:0.0147, K7s:0.0004, K9s:0.001, KTs:0.0007, KJs:0.0012, KK:0.9964, AKo:0.0248, A4s:0.0009, A5s:0.0014, A6s:0.0159, A7s:0.0011, A8s:0.0009, A9s:0.0018, AJs:0.0035, AQs:0.0023, AKs:0.0263, AA:0.9922"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 52o:0.0001, 62o:0.0001, 32s:0.0009, 33:0.0002, 73o:0.0001, Q3o:0.0001, 42s:0.0001, 43s:0.0003, 44:0.0004, 74o:0.0001, Q4o:0.0001, 54s:0.0001, 65o:0.0002, K5o:0.0001, A5o:0.0002, 62s:0.0001, 64s:0.0022, 65s:0.0003, 66:0.0004, 76o:0.0001, A6o:0.0001, 72s:0.0001, 73s:0.0001, 74s:0.0013, 76s:0.0001, 77:0.0001, A7o:0.0003, 82s:0.0011, 84s:0.0004, 86s:0.0002, 87s:0.0001, A8o:0.0001, 92s:0.0001, 95s:0.0011, 97s:0.0032, T9o:0.0002, T2s:0.0001, T3s:0.0031, T4s:0.0001, T7s:0.0001, T8s:0.0001, T9s:0.0009, JTo:0.0001, J3s:0.0048, J4s:0.0003, J5s:0.0003, J6s:0.008, JTs:0.0001, Q2s:0.0019, Q3s:0.0001, Q5s:0.0001, Q7s:0.0001, Q8s:0.0003, Q9s:0.0001, QTs:0.001, QJs:0.0011, QQ:0.0382, AQo:0.0004, K5s:0.0005, K6s:0.0001, K7s:0.0001, KTs:0.0013, KJs:0.0003, KQs:0.0002, KK:0.0021, AKo:0.0056, A2s:0.0013, A3s:0.0012, A4s:0.0007, A5s:0.0011, A7s:0.0042, A8s:0.1524, A9s:0.0002, ATs:0.1665, AJs:0.0518, AQs:0.3849, AKs:0.4206, AA:0.2497"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 32s:0.0001, 33:0.0012, 42s:0.0001, 74o:0.0001, 54s:0.001, 95o:0.0001, 63s:0.0004, 65s:0.0156, 72s:0.0003, 73s:0.0001, 74s:0.0003, 76s:0.0001, 77:0.0001, A7o:0.0024, 86s:0.0024, 88:0.0002, T8o:0.0001, K8o:0.0001, 93s:0.0001, 95s:0.0001, 96s:0.0052, 97s:0.0082, 98s:0.0001, K9o:0.0001, A9o:0.0058, T2s:0.0003, T4s:0.0001, T5s:0.024, T6s:0.0002, T8s:0.0004, T9s:0.0056, TT:0.0073, J6s:0.0377, J7s:0.0062, J9s:0.0004, JJ:0.0004, Q2s:0.0001, Q4s:0.0001, Q6s:0.0001, Q7s:0.0011, Q8s:0.0007, QQ:0.1105, AQo:0.0065, K3s:0.0001, K4s:0.0003, K5s:0.0002, K6s:0.0001, KTs:0.001, KJs:0.0001, KQs:0.0014, KK:0.055, AKo:0.1063, A2s:0.0096, A3s:0.0155, A4s:0.0012, A5s:0.0275, A6s:0.0011, A7s:0.2768, A8s:0.0232, A9s:0.0094, ATs:0.163, AJs:0.0027, AQs:0.046, AKs:0.5216, AA:0.7503"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0021, A2o:0.0066, 33:0.0033, 53o:0.0007, Q3o:0.0016, A3o:0.0048, 42s:0.0002, 43s:0.0036, 44:0.0055, 74o:0.0001, J4o:0.0007, Q4o:0.0002, A4o:0.0051, 52s:0.0001, 53s:0.0019, 55:0.0972, 65o:0.0007, Q5o:0.0005, A5o:0.0067, 63s:0.0022, 65s:0.0106, 66:0.537, 76o:0.0011, A6o:0.0024, 73s:0.0013, 74s:0.0006, 76s:0.0053, 77:0.0028, 87o:0.0002, Q7o:0.0003, A7o:0.0044, 82s:0.0008, 85s:0.0049, 86s:0.0001, 87s:0.0027, 88:0.1633, Q8o:0.0002, A8o:0.0003, 93s:0.0029, 94s:0.0001, 95s:0.001, 96s:0.0042, 97s:0.0002, 98s:0.0011, 99:0.1805, A9o:0.0038, T4s:0.0015, T5s:0.0077, T8s:0.0001, T9s:0.0008, TT:0.0006, QTo:0.0033, ATo:0.0064, J2s:0.0006, J3s:0.0024, J5s:0.0006, J6s:0.0014, JTs:0.0001, JJ:0.3004, QJo:0.0007, AJo:0.0027, Q2s:0.0027, Q3s:0.0039, Q4s:0.0009, Q5s:0.0024, Q6s:0.0031, Q7s:0.0044, Q8s:0.0045, Q9s:0.0014, QTs:0.0027, QJs:0.0076, QQ:0.642, AQo:0.3774, K5s:0.0023, K6s:0.0014, K8s:0.0014, K9s:0.0004, KTs:0.0032, KJs:0.0031, KQs:0.0024, KK:0.6404, AKo:0.6437, A2s:0.0058, A3s:0.0048, A4s:0.0125, A5s:0.0826, A6s:0.0365, A7s:0.1457, A8s:0.2134, A9s:0.4535, ATs:0.2067, AJs:0.2352, AQs:0.7344, AKs:0.2953, AA:0.1479"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0216, A2o:0.025, 33:0.0418, A3o:0.0361, 43s:0.0062, 44:0.0358, 74o:0.0001, A4o:0.091, 53s:0.0009, 54s:0.0054, 55:0.0318, 65o:0.0005, 85o:0.0003, A5o:0.0008, 63s:0.0003, 64s:0.0065, 65s:0.0142, 66:0.0409, 86o:0.0004, A6o:0.0027, 72s:0.0005, 73s:0.0002, 74s:0.0008, 75s:0.0088, 76s:0.0258, 77:0.0175, 97o:0.0001, K7o:0.001, A7o:0.0084, 82s:0.0007, 85s:0.0043, 86s:0.0016, 87s:0.0021, 88:0.0052, 98o:0.0003, A8o:0.0009, 93s:0.0017, 95s:0.0001, 96s:0.0006, 97s:0.0024, 98s:0.0011, 99:0.0175, K9o:0.0001, A9o:0.0402, T8s:0.0001, T9s:0.0527, TT:0.04, ATo:0.0646, J3s:0.0001, J5s:0.0001, J6s:0.0016, J8s:0.0008, J9s:0.0012, JTs:0.0075, JJ:0.0528, AJo:0.0145, Q3s:0.0014, Q5s:0.0023, Q6s:0.0011, QTs:0.0042, QJs:0.0015, QQ:0.0188, AQo:0.0006, K2s:0.0001, K4s:0.0004, K5s:0.0001, K7s:0.0001, K8s:0.0001, K9s:0.0039, KJs:0.001, KK:0.0523, AKo:0.24, A2s:0.5083, A3s:0.5526, A4s:0.4966, A5s:0.7904, A6s:0.6931, A7s:0.6321, A8s:0.6206, A9s:0.2917, ATs:0.7081, AJs:0.5551, AQs:0.1064, AKs:0.6441, AA:0.8521"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@13.9",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0008, 32o:0.0001, 42o:0.0003, 52o:0.0006, 62o:0.0001, 92o:0.0001, T2o:0.0001, K2o:0.0003, A2o:0.0004, A3o:0.0013, 42s:0.0028, 43s:0.0015, 44:0.0004, 84o:0.0002, 94o:0.0001, T4o:0.0001, K4o:0.0001, A4o:0.0004, 52s:0.0009, 54s:0.0002, 75o:0.0003, 85o:0.0001, Q5o:0.0001, K5o:0.0001, A5o:0.0003, 62s:0.0008, 63s:0.0367, 64s:0.0011, 65s:0.0234, 86o:0.0003, 96o:0.0002, K6o:0.0002, A6o:0.0007, 72s:0.0004, 76s:0.0002, 77:0.002, 97o:0.0001, J7o:0.0001, A7o:0.0013, 82s:0.0001, 85s:0.0019, 86s:0.0014, 87s:0.0008, 88:0.0167, T8o:0.0003, Q8o:0.0002, K8o:0.0001, A8o:0.0013, 92s:0.0006, 93s:0.006, 94s:0.0003, 95s:0.0026, 96s:0.0017, 98s:0.0304, A9o:0.0001, T4s:0.0002, T7s:0.0022, T8s:0.0019, T9s:0.0018, JTo:0.0007, QTo:0.0001, ATo:0.0001, J4s:0.0001, J5s:0.0002, J6s:0.003, J8s:0.0019, J9s:0.0018, JTs:0.0008, JJ:0.0002, KJo:0.0008, AJo:0.0001, Q2s:0.001, Q6s:0.023, Q9s:0.0001, QJs:0.0068, QQ:0.0093, KQo:0.0001, AQo:0.0018, K2s:0.0047, K3s:0.0001, K4s:0.0071, K6s:0.0072, K7s:0.0008, K8s:0.0007, K9s:0.0019, KTs:0.0023, KJs:0.002, KQs:0.0026, KK:0.107, AKo:0.1583, A2s:0.0068, A3s:0.0325, A6s:0.1166, A7s:0.0015, A8s:0.0044, A9s:0.3862, ATs:0.0013, AJs:0.0047, AQs:0.0032, AKs:0.1843, AA:0.9943"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@13.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0002, 52o:0.0004, 82o:0.0002, 92o:0.0001, T2o:0.0001, J2o:0.0001, A2o:0.0005, 33:0.0127, 53o:0.0001, 73o:0.0001, 93o:0.0007, Q3o:0.0001, 42s:0.0026, 44:0.0004, 64o:0.0001, 84o:0.0002, T4o:0.0003, J4o:0.0002, 53s:0.0394, 65o:0.0003, 75o:0.0001, 85o:0.0001, T5o:0.0001, Q5o:0.0001, K5o:0.0001, 62s:0.0001, 64s:0.0008, 65s:0.0005, 66:0.0647, 86o:0.0001, J6o:0.0001, Q6o:0.0005, A6o:0.0003, 75s:0.0009, 76s:0.0093, 77:0.0123, 97o:0.0001, T7o:0.0001, A7o:0.0002, 83s:0.0002, 84s:0.0007, 85s:0.0007, 87s:0.0014, 88:0.0004, 98o:0.0003, T8o:0.0001, J8o:0.0005, Q8o:0.0002, K8o:0.0001, A8o:0.0012, 92s:0.005, 96s:0.0133, 97s:0.0002, 98s:0.001, 99:0.0145, T9o:0.0004, J9o:0.0003, A9o:0.0116, T4s:0.0004, T5s:0.0003, T7s:0.0035, TT:0.0179, JTo:0.0001, ATo:0.0006, J4s:0.0002, J5s:0.0002, J8s:0.0005, J9s:0.0118, JTs:0.0002, JJ:0.4195, AJo:0.0002, Q2s:0.0004, Q3s:0.0018, Q4s:0.0009, Q7s:0.0042, Q8s:0.0325, QTs:0.0004, QQ:0.0614, KQo:0.0004, AQo:0.0188, K2s:0.0073, K3s:0.0003, K5s:0.0035, K9s:0.0006, KJs:0.0064, KK:0.0861, A3s:0.3117, A4s:0.0209, A5s:0.095, A6s:0.3855, A7s:0.0019, A8s:0.3169, A9s:0.0046, ATs:0.0048, AJs:0.0046, AKs:0.181, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, 32o:0.0002, 52o:0.0001, 62o:0.0001, 82o:0.0001, 92o:0.0006, T2o:0.0001, Q2o:0.0002, A2o:0.0019, 32s:0.0141, 33:0.0045, J3o:0.0001, Q3o:0.0003, A3o:0.0005, 42s:0.0062, 43s:0.0023, 44:0.0018, 74o:0.0001, T4o:0.0001, A4o:0.0005, 53s:0.0007, 54s:0.0003, 55:0.0002, 65o:0.0004, 75o:0.0002, 85o:0.0001, J5o:0.0003, Q5o:0.0001, 62s:0.0008, 63s:0.0008, 65s:0.0003, 96o:0.0001, J6o:0.0001, Q6o:0.0004, K6o:0.0005, A6o:0.0002, 73s:0.0013, 75s:0.0092, 76s:0.0015, 77:0.0001, T7o:0.0001, Q7o:0.0006, A7o:0.0004, 84s:0.0003, 87s:0.0003, T8o:0.0011, Q8o:0.0002, K8o:0.0001, A8o:0.0014, 92s:0.003, 93s:0.0006, 94s:0.0001, 95s:0.001, 96s:0.0009, 99:0.0083, T9o:0.0004, J9o:0.0001, K9o:0.0001, A9o:0.0026, T4s:0.0001, T5s:0.0007, T7s:0.0013, T8s:0.001, T9s:0.0162, TT:0.0034, JTo:0.0001, KTo:0.0001, J2s:0.0117, J3s:0.0008, J5s:0.0003, J7s:0.0009, J8s:0.0002, J9s:0.001, JTs:0.0001, JJ:0.0015, KJo:0.001, AJo:0.0002, Q3s:0.0001, Q5s:0.0011, Q6s:0.0024, Q7s:0.0053, Q8s:0.0084, Q9s:0.0022, QTs:0.0021, QJs:0.0037, QQ:0.0641, AQo:0.0028, K2s:0.0035, K4s:0.0024, K5s:0.0023, K6s:0.0061, K8s:0.0047, K9s:0.0019, KTs:0.0077, KK:0.8146, AKo:0.7592, A3s:0.0164, A4s:0.1027, A5s:0.0242, A6s:0.0315, A7s:0.0031, A8s:0.0806, A9s:0.0032, ATs:0.0584, AJs:0.5417, AQs:0.0086, AKs:0.7971, AA:0.9977"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "85s:0.0001, 88:0.001, J2s:0.0001, J6s:0.0001, JJ:0.0015, QQ:0.0001, K8s:0.0001, KJs:0.0001, KK, AKo:0.0002, A4s:0.0001, A6s:0.0001, A8s:0.0001, A9s:0.0001, AJs:0.0004, AQs:0.0001, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0006, QQ:0.0007, KK, AKo:0.9828, AKs:0.9839, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 53o:0.0001, 43s:0.0007, 44:0.0001, K4o:0.0001, A4o:0.0001, 52s:0.0002, 53s:0.0007, 54s:0.0005, 55:0.0005, J5o:0.0003, Q5o:0.0002, A5o:0.0004, 63s:0.0003, 65s:0.0005, K6o:0.0001, 74s:0.0003, 75s:0.0013, 77:0.0001, K7o:0.0001, A7o:0.0001, 82s:0.0001, 85s:0.0008, 86s:0.001, 87s:0.0007, 88:0.0001, Q8o:0.0001, A8o:0.0001, 92s:0.0002, 93s:0.0012, 96s:0.0007, 97s:0.011, 99:0.0019, A9o:0.0001, T2s:0.0002, T5s:0.0001, T7s:0.0001, T8s:0.0001, T9s:0.0047, TT:0.01, KTo:0.0001, J7s:0.0003, JTs:0.0031, JJ:0.0047, AJo:0.0005, Q2s:0.0004, Q3s:0.0006, Q5s:0.0002, Q6s:0.0015, QQ:0.0038, AQo:0.0001, K6s:0.0001, K8s:0.0047, KTs:0.0022, KJs:0.0005, KK:0.8269, A2s:0.0005, A3s:0.0001, A4s:0.0005, A5s:0.0004, A6s:0.0001, A7s:0.0001, ATs:0.0006, AJs:0.0025, AQs:0.0009, AKs:0.0044, AA:0.9978"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52o:0.0001, 92o:0.0001, 73o:0.0002, 52s:0.0003, 53s:0.0002, 55:0.0003, 85o:0.0001, Q5o:0.0001, A5o:0.0019, 65s:0.0001, 66:0.0131, 72s:0.0003, 75s:0.0004, 77:0.0001, A7o:0.0001, 86s:0.0001, 87s:0.0003, 88:0.0002, 98o:0.0001, 92s:0.0022, 93s:0.0002, 94s:0.0001, 95s:0.0002, 96s:0.0007, 97s:0.0002, 98s:0.0019, 99:0.0068, T9o:0.0001, T2s:0.0013, T4s:0.0004, T8s:0.0001, T9s:0.0032, TT:0.0284, JTo:0.0001, KTo:0.0001, ATo:0.0001, J4s:0.0001, J6s:0.0002, JTs:0.0003, JJ:0.0019, KJo:0.0001, Q2s:0.0012, Q3s:0.0003, Q4s:0.0002, Q9s:0.0001, QJs:0.0004, QQ:0.0033, KQo:0.001, K4s:0.0002, K6s:0.0003, K7s:0.0006, K8s:0.0001, KTs:0.0001, KJs:0.0005, KK:0.8696, A3s:0.0084, A4s:0.0005, A5s:0.0029, A6s:0.002, A7s:0.0004, A8s:0.0011, ATs:0.0007, AJs:0.0003, AQs:0.0002, AKs:0.0119, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|CO:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0042, Q3o:0.0002, K3o:0.0001, A3o:0.0001, 42s:0.0005, 43s:0.0003, 44:0.0058, T4o:0.0001, 53s:0.0006, 54s:0.0001, J5o:0.0001, K5o:0.0001, 64s:0.002, T6o:0.0003, Q6o:0.0001, A6o:0.0001, 73s:0.0005, 74s:0.0006, 75s:0.0002, 76s:0.0002, 77:0.0054, Q7o:0.0002, K7o:0.0001, A7o:0.0002, 82s:0.0001, 84s:0.0002, 85s:0.0005, 86s:0.0001, 88:0.0001, 93s:0.0004, 96s:0.0003, 97s:0.0002, J9o:0.0001, K9o:0.0002, T2s:0.0004, T3s:0.0038, T4s:0.0002, T7s:0.0001, T8s:0.0007, TT:0.0002, J5s:0.0006, J6s:0.0001, J7s:0.0005, J8s:0.0002, J9s:0.001, JJ:0.0006, AJo:0.0014, Q4s:0.0001, Q6s:0.0013, Q8s:0.0001, QJs:0.0002, QQ:0.0005, KQo:0.0001, K3s:0.0002, K4s:0.0008, K5s:0.001, K6s:0.0002, K7s:0.0006, K8s:0.0003, KTs:0.0012, KJs:0.0009, KQs:0.0002, KK:0.9833, AKo:0.0032, A2s:0.0021, A3s:0.0006, A4s:0.0008, A5s:0.0009, A6s:0.0317, A7s:0.0007, A8s:0.0011, A9s:0.0002, ATs:0.0006, AQs:0.0003, AKs:0.0103, AA:0.9573"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|LJ:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8619, 42o:0.0035, 52o:0.0073, K2o:0.0018, A2o:0.0401, 32s:0.0511, 33:0.9322, 43o:0.0156, 53o:0.0152, 63o:0.0021, A3o:0.031, 42s:0.2069, 43s:0.6429, 44:0.9503, 54o:0.2133, 64o:0.0594, 74o:0.0074, A4o:0.0465, 52s:0.3124, 53s:0.8797, 54s:0.9242, 55:0.9566, 65o:0.563, 75o:0.0143, A5o:0.0579, 62s:0.124, 63s:0.6331, 64s:0.9152, 65s:0.9366, 66:0.9694, 76o:0.6315, 96o:0.0125, A6o:0.0238, 72s:0.0139, 73s:0.0793, 74s:0.4364, 75s:0.8761, 76s:0.9229, 77:0.962, 87o:0.0082, 97o:0.0097, T7o:0.0075, A7o:0.0358, 82s:0.0015, 84s:0.0129, 85s:0.0527, 86s:0.7801, 87s:0.8819, 88:0.8634, 98o:0.0035, A8o:0.0304, 92s:0.0383, 94s:0.0119, 95s:0.3865, 96s:0.7696, 97s:0.8679, 98s:0.7773, 99:0.9537, T9o:0.4427, J9o:0.0042, Q9o:0.0022, A9o:0.281, T2s:0.0094, T3s:0.0218, T4s:0.0207, T5s:0.013, T6s:0.4736, T7s:0.8227, T8s:0.6364, T9s:0.9264, TT:0.9793, JTo:0.0272, QTo:0.0519, KTo:0.0008, ATo:0.6313, J3s:0.0067, J4s:0.0047, J5s:0.0049, J6s:0.0172, J7s:0.036, J8s:0.0147, J9s:0.6533, JTs:0.8537, JJ:0.9297, AJo:0.9184, Q2s:0.0153, Q3s:0.0081, Q4s:0.0158, Q5s:0.0385, Q6s:0.0381, Q7s:0.0108, Q8s:0.0039, Q9s:0.4436, QTs:0.8108, QJs:0.5834, QQ:0.9847, AQo:0.7095, K2s:0.0165, K3s:0.0141, K4s:0.0476, K5s:0.0591, K6s:0.1242, K7s:0.1181, K8s:0.0001, K9s:0.2016, KTs:0.7674, KJs:0.0665, KQs:0.6536, KK:0.9572, AKo:0.5427, A2s:0.4309, A3s:0.3306, A4s:0.6046, A5s:0.8322, A6s:0.8357, A7s:0.6422, A8s:0.6486, A9s:0.9063, ATs:0.9425, AJs:0.9528, AQs:0.8806, AKs:0.3068, AA:0.4113"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, 33:0.0008, A3o:0.0082, 43s:0.0002, 44:0.0009, A4o:0.0004, 54s:0.0001, 55:0.0015, A5o:0.0002, 65s:0.0017, 66:0.0015, 76s:0.0001, 77:0.0005, A7o:0.0004, 88:0.0013, 95s:0.0001, 98s:0.0002, 99:0.0011, T8s:0.0005, TT:0.0017, ATo:0.0006, J7s:0.0001, J8s:0.0001, J9s:0.0003, JJ:0.0087, AJo:0.0079, Q5s:0.0003, Q9s:0.0001, QTs:0.0002, QJs:0.0018, QQ:0.0153, AQo:0.2892, K6s:0.0001, KJs:0.0002, KK:0.0305, AKo:0.4573, A2s:0.4153, A3s:0.5897, A4s:0.3177, A5s:0.1595, A6s:0.0937, A7s:0.1304, A8s:0.0508, A9s:0.0093, ATs:0.0572, AJs:0.0459, AQs:0.1189, AKs:0.6932, AA:0.5887"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|LJ:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.5603, JJ:0.9999, QQ, KK, AKo:0.999, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@13.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 63s:0.0001, 65s:0.0001, K6o:0.0001, 77:0.0001, A9o:0.0001, T7s:0.0001, T9s:0.0001, JJ:0.0006, Q3s:0.0003, QJs:0.0001, QQ:0.0003, KQo:0.0001, KTs:0.0001, KJs:0.0004, KQs:0.0001, KK:0.2176, AKo:0.0544, A2s:0.0001, A3s:0.0001, A5s:0.0002, A7s:0.0003, ATs:0.0001, AJs:0.0002, AQs:0.0002, AKs:0.3358, AA:0.0554"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0103, 33:0.0266, 43s:0.0007, 44:0.0021, A4o:0.0013, A5o:0.0003, 63s:0.0003, 65s:0.0074, A6o:0.0016, 75s:0.0012, 76s:0.0047, 77:0.0217, 84s:0.0001, 86s:0.0205, 87s:0.0009, T8o:0.002, 95s:0.0001, 98s:0.0006, 99:0.0001, A9o:0.0047, T6s:0.0009, T7s:0.0001, T8s:0.0022, TT:0.0114, ATo:0.0048, J3s:0.0023, J6s:0.0003, J7s:0.0023, J9s:0.0016, JJ:0.078, AJo:0.0673, Q3s:0.0001, Q4s:0.0001, Q5s:0.0179, Q7s:0.0002, QQ:0.0966, AQo:0.0139, K2s:0.0092, K3s:0.0009, K9s:0.0002, KTs:0.0001, KJs:0.004, KQs:0.0006, KK:0.2328, AKo:0.3696, A2s:0.0658, A3s:0.0259, A5s:0.0069, A6s:0.0101, A7s:0.0147, A8s:0.006, A9s:0.0301, ATs:0.0533, AJs:0.0135, AQs:0.1144, AKs:0.2645, AA:0.9446"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@13.9",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4301, 32o:0.0178, 42o:0.032, 52o:0.1594, 62o:0.0205, 72o:0.0178, 82o:0.0237, 92o:0.0259, T2o:0.0178, J2o:0.0218, Q2o:0.025, K2o:0.2025, A2o:0.022, 32s:0.5432, 33:0.369, 43o:0.3867, 53o:0.7035, 63o:0.3806, 73o:0.0226, 83o:0.0194, 93o:0.145, T3o:0.0182, J3o:0.0166, Q3o:0.0218, K3o:0.2085, A3o:0.0145, 42s:0.5587, 43s:0.828, 44:0.6719, 54o:0.7425, 64o:0.7426, 74o:0.3372, 84o:0.0242, 94o:0.0237, T4o:0.0166, J4o:0.0137, Q4o:0.0281, K4o:0.1435, A4o:0.0168, 52s:0.5333, 53s:0.7908, 54s:0.8807, 55:0.9241, 65o:0.8253, 75o:0.7043, 85o:0.3824, 95o:0.3448, T5o:0.0458, J5o:0.0134, Q5o:0.0262, K5o:0.3857, A5o:0.0264, 62s:0.7241, 63s:0.7422, 64s:0.8311, 65s:0.9464, 66:0.9566, 76o:0.7702, 86o:0.7345, 96o:0.698, T6o:0.6622, J6o:0.1238, Q6o:0.4005, K6o:0.5989, A6o:0.1704, 72s:0.4135, 73s:0.7149, 74s:0.779, 75s:0.8114, 76s:0.8891, 77:0.9587, 87o:0.713, 97o:0.7199, T7o:0.6006, J7o:0.3286, Q7o:0.0402, K7o:0.28, A7o:0.0127, 82s:0.4072, 83s:0.277, 84s:0.7471, 85s:0.7246, 86s:0.8469, 87s:0.8736, 88:0.9113, 98o:0.7082, T8o:0.6969, J8o:0.5124, Q8o:0.1358, K8o:0.1448, A8o:0.407, 92s:0.6294, 93s:0.5786, 94s:0.6151, 95s:0.7434, 96s:0.7976, 97s:0.8179, 98s:0.7946, 99:0.9579, T9o:0.7619, J9o:0.7199, Q9o:0.7046, K9o:0.6235, A9o:0.7135, T2s:0.3849, T3s:0.4308, T4s:0.5631, T5s:0.6507, T6s:0.7505, T7s:0.7873, T8s:0.776, T9s:0.8161, TT:0.9535, JTo:0.7406, QTo:0.7362, KTo:0.7074, ATo:0.7243, J2s:0.4494, J3s:0.4265, J4s:0.4502, J5s:0.6586, J6s:0.7363, J7s:0.7399, J8s:0.7276, J9s:0.8155, JTs:0.8144, JJ:0.9639, QJo:0.7183, KJo:0.6711, AJo:0.7546, Q2s:0.2453, Q3s:0.6445, Q4s:0.3919, Q5s:0.7029, Q6s:0.7105, Q7s:0.6061, Q8s:0.7278, Q9s:0.8096, QTs:0.7951, QJs:0.8115, QQ:0.9762, KQo:0.6297, AQo:0.8608, K2s:0.6742, K3s:0.5635, K4s:0.6446, K5s:0.6868, K6s:0.7364, K7s:0.6615, K8s:0.4883, K9s:0.7463, KTs:0.7991, KJs:0.7839, KQs:0.7126, KK:0.9662, AKo:0.1598, A2s:0.4462, A3s:0.517, A4s:0.7602, A5s:0.713, A6s:0.7305, A7s:0.8192, A8s:0.7391, A9s:0.848, ATs:0.8629, AJs:0.9317, AQs:0.9699, AKs:0.1567, AA:0.8148"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3913, 32o:0.0055, 42o:0.0084, 52o:0.0094, 62o:0.0104, 72o:0.005, 92o:0.0029, T2o:0.0087, J2o:0.0025, K2o:0.0041, A2o:0.0267, 32s:0.0109, 33:0.4309, 43o:0.0035, 53o:0.0046, 63o:0.0066, 73o:0.0023, 93o:0.0049, T3o:0.0022, A3o:0.023, 42s:0.0133, 43s:0.0128, 44:0.2679, 54o:0.0094, 64o:0.0091, 74o:0.0079, 84o:0.0058, 94o:0.0074, T4o:0.0089, J4o:0.0065, A4o:0.0281, 52s:0.0185, 54s:0.0157, 55:0.0208, 65o:0.0022, 75o:0.0135, 95o:0.0057, J5o:0.0066, A5o:0.0248, 62s:0.0148, 63s:0.011, 64s:0.018, 65s:0.0207, 66:0.0199, 76o:0.011, 86o:0.0095, 96o:0.0101, T6o:0.0058, J6o:0.0091, A6o:0.0268, 72s:0.0157, 73s:0.0098, 74s:0.0157, 75s:0.0198, 76s:0.0183, 77:0.0163, 87o:0.008, 97o:0.0082, T7o:0.0071, J7o:0.001, Q7o:0.0037, A7o:0.024, 82s:0.0059, 83s:0.0119, 84s:0.01, 85s:0.0175, 86s:0.0104, 87s:0.0102, 88:0.0184, 98o:0.0131, T8o:0.013, A8o:0.0216, 92s:0.0189, 93s:0.0076, 94s:0.0118, 95s:0.0139, 96s:0.0109, 97s:0.0114, 98s:0.0152, 99:0.022, T9o:0.0136, J9o:0.0111, Q9o:0.006, K9o:0.008, A9o:0.0189, T2s:0.0133, T3s:0.0056, T4s:0.0063, T5s:0.0116, T6s:0.0147, T7s:0.0197, T8s:0.0113, T9s:0.0197, TT:0.0213, JTo:0.0085, QTo:0.004, KTo:0.0089, ATo:0.016, J2s:0.0001, J3s:0.0029, J4s:0.0027, J5s:0.0132, J6s:0.0126, J7s:0.0052, J8s:0.0009, J9s:0.0126, JTs:0.0163, JJ:0.0151, AJo:0.0097, Q2s:0.0084, Q5s:0.0035, Q6s:0.0084, Q7s:0.0094, Q8s:0.0094, Q9s:0.006, QJs:0.0127, QQ:0.0007, AQo:0.0019, K2s:0.0004, K3s:0.0109, K4s:0.0043, K5s:0.0175, K6s:0.0081, K7s:0.007, K8s:0.008, K9s:0.0087, KJs:0.0076, KQs:0.0093, KK:0.0183, AKo:0.8368, A2s:0.0381, A3s:0.0308, A4s:0.0381, A5s:0.0271, A6s:0.0258, A7s:0.0382, A8s:0.0335, A9s:0.0252, ATs:0.0342, AJs:0.0206, AQs:0.0224, AKs:0.8433, AA:0.1852"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@13.9",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 92o:0.0002, K2o:0.0002, 32s:0.0003, 33:0.0006, 53o:0.0001, 63o:0.0001, J3o:0.0004, 42s:0.0001, 43s:0.0012, 84o:0.0001, K4o:0.0001, A4o:0.0001, 52s:0.0015, 53s:0.0001, 54s:0.0028, 55:0.0089, 85o:0.0001, K5o:0.0001, A5o:0.0007, 62s:0.0012, 65s:0.0001, 86o:0.0001, 73s:0.0001, 74s:0.0001, 75s:0.0001, 76s:0.0014, 77:0.0001, T7o:0.0001, 82s:0.0002, 85s:0.0038, 86s:0.0004, 87s:0.0145, 98o:0.0001, 92s:0.0007, 94s:0.0002, 96s:0.0014, 97s:0.0002, 98s:0.0004, 99:0.0001, J9o:0.0001, T5s:0.0001, T8s:0.0001, TT:0.0003, KTo:0.0002, J2s:0.0003, J5s:0.0001, J7s:0.0001, J8s:0.004, J9s:0.0001, JJ:0.0014, AJo:0.0009, Q2s:0.0001, Q4s:0.0001, Q6s:0.0002, Q7s:0.0001, QTs:0.0028, QJs:0.0005, QQ:0.0583, KQo:0.0006, AQo:0.0001, K2s:0.0002, K3s:0.0003, K4s:0.0001, K5s:0.0011, K6s:0.0002, K7s:0.0002, K9s:0.0004, KTs:0.0001, KQs:0.001, KK:0.7687, AKo:0.4307, A2s:0.0964, A3s:0.0679, A4s:0.0037, A7s:0.0105, A8s:0.0015, A9s:0.0106, ATs:0.0009, AJs:0.0005, AQs:0.3384, AKs:0.9591, AA:0.9948"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 75s:0.0001, TT:0.0014, JJ:0.0093, Q4s:0.0001, QQ:0.0166, AQo:0.0001, KJs:0.0001, KQs:0.0006, KK:0.9996, A4s:0.0083, A7s:0.0005, A9s:0.0001, ATs:0.0007, AJs:0.0026, AQs:0.0001, AKs:0.3669, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.2759, 99:0.2774, TT:0.318, JJ:0.3235, QQ:0.2831, KK, AKo:0.979, AJs:0.0006, AQs:0.002, AKs:0.991, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:3BET@8.0|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0002, 32s:0.0011, 43o:0.0001, 83o:0.0001, J3o:0.0002, A3o:0.0004, 42s:0.0001, 44:0.0009, 54o:0.0001, Q4o:0.0001, A4o:0.0001, 52s:0.0028, 53s:0.0002, 54s:0.0002, 55:0.0002, 62s:0.0002, 64s:0.0023, 65s:0.0008, 66:0.0001, A6o:0.0001, 74s:0.0002, 76s:0.0032, 77:0.0002, 83s:0.0001, 84s:0.0002, 85s:0.0001, 88:0.0032, K8o:0.0005, 95s:0.0002, 96s:0.0009, 98s:0.0028, 99:0.0011, K9o:0.0001, A9o:0.0001, T2s:0.0002, T3s:0.0005, T4s:0.0003, T7s:0.0003, T8s:0.0048, TT:0.0031, KTo:0.0009, J3s:0.0005, J5s:0.009, J6s:0.0026, J7s:0.0005, J8s:0.0019, J9s:0.0014, JJ:0.0141, KJo:0.0002, Q2s:0.0002, Q3s:0.0027, Q5s:0.0026, Q6s:0.0001, Q7s:0.0018, Q9s:0.0014, QTs:0.0003, QJs:0.0012, QQ:0.0133, KQo:0.0001, AQo:0.0009, K2s:0.0008, K3s:0.0001, K4s:0.005, K6s:0.002, K8s:0.0001, K9s:0.0042, KTs:0.0019, KJs:0.0065, KQs:0.0018, KK:0.6471, AKo:0.1527, A3s:0.0063, A4s:0.0033, A5s:0.0013, A6s:0.0009, A7s:0.0014, A8s:0.0051, A9s:0.0086, AJs:0.0094, AQs:0.0044, AKs:0.1234, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1286, KK, AKo:0.8543, AKs:0.9895, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.4765, KK, AKo:0.8668, AKs:0.9942, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0223, 66:0.0551, 76s:0.0061, 88:0.0119, 98s:0.0015, 99:0.0121, T9s:0.003, TT:0.0152, JJ:0.0195, QQ:0.2163, AQo:0.0401, K8s:0.0131, KJs:0.0003, KK:0.2185, AKo:0.044, A2s:0.0002, A3s:0.0064, A4s:0.0387, A5s:0.1243, A7s:0.1785, A8s:0.0015, A9s:0.0396, ATs:0.0246, AJs:0.1642, AQs:0.3654, AKs:0.0285, AA:0.0093"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.0123, 32s:0.0002, A3o:0.0276, A4o:0.0021, 53s:0.0012, 54s:0.0031, 55:0.0001, A5o:0.0354, 62s:0.1893, 64s:0.0013, A6o:0.0134, 73s:0.0002, 76s:0.0366, 77:0.1057, A7o:0.0383, 86s:0.0001, 88:0.0839, J8o:0.0001, A8o:0.1316, 93s:0.0002, 96s:0.0316, 99:0.0508, A9o:0.0434, T2s:0.0017, T3s:0.0003, T4s:0.0009, T8s:0.0009, TT:0.0002, ATo:0.0422, J3s:0.0014, J5s:0.0001, J6s:0.0008, J9s:0.0013, Q5s:0.0001, Q6s:0.0121, QTs:0.0076, QQ:0.0623, AQo:0.0698, K2s:0.0002, K3s:0.0001, K4s:0.0007, K7s:0.0001, K8s:0.0011, K9s:0.0168, KTs:0.0001, KJs:0.0009, KQs:0.0062, KK:0.0025, AKo:0.186, A2s:0.0155, A3s:0.2644, A4s:0.1846, A5s:0.1215, A6s:0.0705, A7s:0.0218, A8s:0.359, A9s:0.2413, ATs:0.1875, AJs:0.1797, AQs:0.1138, AKs:0.1463, AA:0.989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0024, 33:0.0012, A3o:0.0005, A4o:0.0006, 54s:0.0022, 55:0.0001, 62s:0.024, 65s:0.0003, 66:0.0006, 72s:0.0009, 74s:0.0001, 76s:0.0265, 77:0.0033, A7o:0.0001, 86s:0.0004, 87s:0.0013, 93s:0.0001, 96s:0.0033, 97s:0.0015, 98s:0.0016, 99:0.0013, T2s:0.0001, T7s:0.0001, T8s:0.0006, T9s:0.0256, TT:0.0002, ATo:0.0007, J2s:0.0001, J5s:0.0046, J7s:0.0004, J9s:0.0001, JJ:0.0069, AJo:0.0056, QJs:0.0003, QQ:0.0001, K3s:0.0016, K4s:0.0001, K5s:0.0001, K6s:0.0048, K8s:0.062, K9s:0.0049, KTs:0.0442, KJs:0.0006, KQs:0.0001, KK:0.7677, AKo:0.7699, A2s:0.0301, A3s:0.4643, A4s:0.0079, A5s:0.3845, A6s:0.2445, A7s:0.2445, A8s:0.0132, A9s:0.38, ATs:0.1543, AJs:0.018, AQs:0.0152, AKs:0.825, AA:0.0017"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4299, 33:0.1261, 44:0.1526, 52s:0.1078, 53s:0.0337, 54s:0.6936, 55:0.972, 63s:0.0234, 64s:0.0246, 65s:0.883, 66:0.7985, 75s:0.0594, 76s:0.7416, 77:0.9059, 86s:0.001, 87s:0.336, 88:0.6572, 96s:0.0464, 97s:0.3406, 98s:0.7048, 99:0.0848, T7s:0.0614, T8s:0.1158, T9s:0.3493, TT:0.0554, J8s:0.0001, JTs:0.2265, JJ:0.521, QTs:0.0022, QQ:0.7431, AQo:0.5332, K3s:0.0002, K5s:0.0987, K6s:0.0151, K7s:0.2649, K9s:0.0051, KTs:0.4266, KJs:0.1503, KK:0.3076, AKo:0.0016, A2s:0.001, A3s:0.0626, A4s:0.3825, A5s:0.4254, A6s:0.3449, A7s:0.292, A8s:0.3958, A9s:0.32, ATs:0.3815, AJs:0.4428, AQs:0.6484, AKs:0.0032, AA:0.001"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "74s:0.0001, 99:0.0002, QQ:0.0004, AQo:0.0004, K6s:0.0001, KQs:0.0002, KK:0.0096, A4s:0.0001, A9s:0.0001, ATs:0.0001, AQs:0.0004, AKs:0.002, AA:0.9988"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.024, A3o:0.0001, A4o:0.0014, A5o:0.0237, 66:0.0007, A6o:0.0045, 75s:0.0001, 76s:0.0454, 77:0.0065, 87s:0.0004, 88:0.0063, A8o:0.0006, 97s:0.0003, 98s:0.0009, 99:0.0357, A9o:0.025, T9s:0.0625, TT:0.0277, JJ:0.0781, AJo:0.039, QTs:0.0038, QJs:0.0002, QQ:0.2403, AQo:0.3274, K4s:0.0002, K6s:0.0056, K7s:0.0007, K9s:0.0063, KTs:0.0006, KJs:0.0792, KK:0.6828, AKo:0.998, A2s:0.1724, A3s:0.1634, A4s:0.2319, A5s:0.2302, A6s:0.1896, A7s:0.3478, A8s:0.1994, A9s:0.0917, ATs:0.2034, AJs:0.2145, AQs:0.3499, AKs:0.9947, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0054, QQ:0.0605, KK:0.9999, AKo:0.8907, AKs:0.938, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0784, KK, AKo:0.8471, AKs:0.9072, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 44:0.0001, 55:0.0002, 66:0.0001, 87s:0.0001, 88:0.0001, 98s:0.0002, 99:0.0007, TT:0.0021, JJ:0.0001, Q4s:0.0001, QTs:0.0001, QQ:0.022, K6s:0.0001, KQs:0.0001, KK:0.9993, AKo:0.8192, A2s:0.0001, A8s:0.0005, A9s:0.0002, ATs:0.0011, AQs:0.0006, AKs:0.7843, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.002, 88:0.0029, T9o:0.0003, T7s:0.0009, T9s:0.0001, TT:0.0001, J6s:0.0001, J9s:0.0003, JJ:0.0036, Q2s:0.0001, Q8s:0.0001, QTs:0.0001, QQ:0.0873, K8s:0.0001, KK:0.997, AKo:0.7752, A2s:0.0001, A4s:0.0003, A7s:0.0001, A9s:0.0001, AKs:0.6958, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@5.5",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "44:0.2034, 54s:0.0006, 55:0.0001, 62s:0.0002, 64s:0.0177, 76s:0.0031, 77:0.0253, 87s:0.0082, 92s:0.0003, 99:0.0003, T8s:0.0002, T9s:0.0053, TT:0.0011, J5s:0.0023, J6s:0.0001, JJ:0.0611, Q2s:0.0003, Q4s:0.0001, Q6s:0.0017, Q7s:0.0001, QJs:0.0002, QQ:0.1297, AQo:0.0014, K2s:0.0001, K8s:0.0017, K9s:0.0008, KJs:0.0129, KQs:0.0106, KK:0.0376, AKo:0.0271, A4s:0.0052, A5s:0.0004, A7s:0.0019, A8s:0.0106, A9s:0.0059, ATs:0.0065, AJs:0.0357, AQs:0.3031, AKs:0.0683, AA:0.0004"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.0009, A2o:0.0028, 32s:0.0203, 33:0.0092, 53o:0.0144, J3o:0.0001, A3o:0.0063, 43s:0.0002, 44:0.0418, K4o:0.0001, A4o:0.0288, 53s:0.0729, 65o:0.0001, A5o:0.0358, 62s:0.0001, 64s:0.0005, 65s:0.0349, 66:0.0132, T6o:0.0001, A6o:0.0112, 72s:0.0001, 75s:0.0874, 76s:0.0016, 77:0.0861, A7o:0.0746, 83s:0.0058, 84s:0.0001, 85s:0.0001, 86s:0.0068, 87s:0.0816, 88:0.0309, A8o:0.0017, 92s:0.0021, 93s:0.0021, 98s:0.0255, 99:0.0002, K9o:0.0128, T8s:0.0625, T9s:0.0059, TT:0.0194, KTo:0.0214, ATo:0.0105, J7s:0.0001, J8s:0.005, J9s:0.0005, JTs:0.0002, JJ:0.0092, KJo:0.0006, AJo:0.0349, Q3s:0.0001, Q6s:0.0024, Q8s:0.0014, QTs:0.0016, QJs:0.0048, QQ:0.0285, AQo:0.1218, K2s:0.0486, K4s:0.0118, K5s:0.1238, K6s:0.0381, K7s:0.035, K8s:0.0006, K9s:0.0001, KTs:0.2973, KJs:0.0361, KK:0.002, AKo:0.2238, A2s:0.1207, A3s:0.3981, A4s:0.0908, A5s:0.276, A6s:0.0537, A7s:0.1955, A8s:0.1325, A9s:0.03, ATs:0.0688, AJs:0.0318, AQs:0.1117, AKs:0.2352, AA:0.9989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 32o:0.0001, 72o:0.0001, A2o:0.0004, 32s:0.0006, 33:0.0049, A3o:0.0005, 43s:0.0015, 44:0.0008, A4o:0.0001, 52s:0.0023, 53s:0.0048, 54s:0.0002, 55:0.0004, A5o:0.0025, 63s:0.0042, 64s:0.0028, 65s:0.0124, 86o:0.0001, A6o:0.0207, 75s:0.0052, 76s:0.0001, 77:0.0076, A7o:0.0086, 83s:0.0018, 86s:0.0007, 87s:0.0486, 88:0.0028, A8o:0.0002, 92s:0.0001, 96s:0.0014, 98s:0.005, 99:0.0048, K9o:0.0001, T3s:0.0001, T4s:0.0002, T5s:0.0001, T8s:0.0037, T9s:0.0064, TT:0.0007, JTo:0.0001, J4s:0.001, J6s:0.0004, J9s:0.0003, JTs:0.0001, JJ:0.0005, AJo:0.0014, Q2s:0.0005, Q3s:0.0087, Q4s:0.0001, Q6s:0.0015, Q7s:0.0001, Q8s:0.0002, QTs:0.0012, QJs:0.0011, QQ:0.0096, AQo:0.0065, K2s:0.015, K3s:0.0001, K4s:0.2253, K5s:0.0132, K6s:0.047, K7s:0.0001, K8s:0.193, K9s:0.0848, KTs:0.2125, KJs:0.2221, KQs:0.024, KK:0.9604, AKo:0.7486, A2s:0.0796, A3s:0.224, A4s:0.2386, A5s:0.171, A6s:0.0434, A7s:0.0666, A8s:0.0145, A9s:0.106, ATs:0.1352, AJs:0.0038, AQs:0.0192, AKs:0.6964, AA:0.0007"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@5.5",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0711, 33:0.376, 44:0.6474, 53s:0.0068, 54s:0.9677, 55:0.9354, 63s:0.2047, 64s:0.3924, 65s:0.8964, 66:0.9881, A6o:0.0001, 75s:0.658, 76s:0.9228, 77:0.9254, 82s:0.0001, 85s:0.0593, 86s:0.001, 87s:0.0748, 88:0.5059, A8o:0.0002, 95s:0.0001, 96s:0.1913, 98s:0.0001, 99:0.3243, T2s:0.0005, T5s:0.0002, T6s:0.0174, T7s:0.0001, T8s:0.0001, T9s:0.0269, TT:0.0009, J4s:0.0012, J7s:0.0001, J8s:0.0005, J9s:0.0003, JTs:0.0361, JJ:0.2768, AJo:0.0012, Q7s:0.0001, QTs:0.0123, QQ:0.9423, AQo:0.4238, K2s:0.0001, K4s:0.0041, K6s:0.0568, K7s:0.0008, K8s:0.0628, KTs:0.0001, KJs:0.1923, KQs:0.1621, KK:0.083, AKo:0.056, A3s:0.016, A4s:0.0172, A5s:0.0623, A6s:0.0488, A7s:0.0757, A8s:0.0041, A9s:0.0361, ATs:0.0531, AJs:0.0727, AQs:0.9975, AKs:0.0734"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "82o:0.0001, K2o:0.0002, 74o:0.0001, 53s:0.0002, K5o:0.0003, 64s:0.0004, K6o:0.0001, A6o:0.0001, 76s:0.0002, 77:0.0002, 84s:0.0002, 85s:0.0006, 88:0.0007, 98o:0.0001, K8o:0.0003, 93s:0.0002, 99:0.0002, A9o:0.0002, T5s:0.0001, T6s:0.0001, T8s:0.0003, TT:0.0002, KTo:0.0002, JJ:0.0001, Q8s:0.0001, QJs:0.0001, QQ:0.0005, K3s:0.0006, K5s:0.0003, K7s:0.0002, K8s:0.0024, KQs:0.0049, KK:0.1749, AKo:0.0014, A3s:0.0017, A5s:0.0017, A7s:0.0001, A8s:0.0001, A9s:0.0002, ATs:0.0001, AKs:0.0012, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.2331, A2o:0.1169, K3o:0.0539, A3o:0.026, 44:0.0021, K4o:0.0488, 54s:0.0001, 55:0.0014, 66:0.0001, K6o:0.3579, 77:0.0001, K7o:0.298, A7o:0.2734, 86s:0.0021, 88:0.0032, K8o:0.0237, 99:0.0105, K9o:0.1708, A9o:0.0186, TT:0.0009, KTo:0.266, JJ:0.0683, KJo:0.4168, AJo:0.0046, QQ:0.0135, AQo:0.0326, K2s:0.5441, K3s:0.5566, K4s:0.6524, K5s:0.6423, K6s:0.6106, K7s:0.6711, K8s:0.5955, K9s:0.6019, KTs:0.6325, KJs:0.6162, KQs:0.1812, KK:0.7421, AKo:0.9426, A2s:0.9035, A3s:0.8697, A4s:0.7391, A5s:0.9072, A6s:0.8608, A7s:0.8432, A8s:0.4374, A9s:0.2194, ATs:0.6234, AJs:0.8832, AKs:0.9253"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "K3o:0.009, A3o:0.0011, 55:0.0062, A5o:0.01, 66:0.0001, A6o:0.011, 72s:0.0054, 76s:0.0003, 83s:0.0641, 84s:0.0028, 86s:0.0001, 87s:0.0008, A8o:0.017, 94s:0.0079, A9o:0.0003, T2s:0.0026, T5s:0.0068, T6s:0.0529, TT:0.0579, J2s:0.0001, J6s:0.0001, J8s:0.0021, JTs:0.0036, JJ:0.0095, AJo:0.1882, QJs:0.0263, QQ:0.0018, AQo:0.0176, K3s:0.0034, K5s:0.0466, K6s:0.1564, KJs:0.1055, KQs:0.0027, KK:0.105, AKo:0.1169, A2s:0.0019, A3s:0.0025, A4s:0.0168, A5s:0.1656, A6s:0.0048, A7s:0.3248, A8s:0.0001, ATs:0.0693, AJs:0.1123, AQs:0.0605, AKs:0.4257, AA:0.9004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0004, 62s:0.0002, 64s:0.0001, 65s:0.019, A6o:0.0361, 83s:0.0022, 84s:0.0082, 92s:0.0001, 95s:0.0001, 98s:0.0001, T4s:0.0001, T9s:0.0131, TT:0.0011, J2s:0.0007, J5s:0.0002, J7s:0.0003, J8s:0.0003, J9s:0.0003, JJ:0.0004, AJo:0.0002, Q3s:0.0002, Q4s:0.0001, Q6s:0.0108, QJs:0.0008, QQ:0.0026, AQo:0.0023, K2s:0.0002, K5s:0.0584, K6s:0.1879, K8s:0.0002, K9s:0.0038, KTs:0.0003, KJs:0.0003, KQs:0.0003, KK:0.8945, AKo:0.6438, A2s:0.0721, A3s:0.2056, A4s:0.055, A5s:0.0864, A6s:0.0006, A7s:0.0727, A8s:0.0002, A9s:0.0993, ATs:0.0226, AJs:0.1719, AQs:0.0391, AKs:0.5392, AA:0.0996"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "43s:0.0147, A4o:0.0194, 52s:0.0082, 55:0.0404, K5o:0.0616, 65s:0.0001, A6o:0.0484, 72s:0.0033, 75s:0.0001, K7o:0.0438, 85s:0.0001, 86s:0.0004, 88:0.0001, 99:0.0001, K9o:0.0307, A9o:0.0165, T4s:0.0181, T8s:0.0004, TT:0.0001, J8s:0.0001, JTs:0.0001, AJo:0.0441, Q6s:0.0162, Q9s:0.0001, QJs:0.0001, QQ:0.0473, K2s:0.026, K3s:0.0357, K4s:0.0157, K5s:0.1086, K6s:0.0374, K7s:0.0187, K9s:0.0367, KTs:0.039, KJs:0.0104, KQs:0.0002, KK:0.1531, AKo:0.1995, A2s:0.0054, A3s:0.0424, A4s:0.1329, A5s:0.029, A6s:0.043, A9s:0.0108, ATs:0.0001, AQs:0.0431, AKs:0.195, AA:0.8753"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0002, 43s:0.0001, 54s:0.0385, 55:0.0053, A5o:0.0001, 63s:0.0001, 64s:0.1004, 65s:0.071, 66:0.0348, 73s:0.0001, 75s:0.0002, 76s:0.0001, 86s:0.0214, 87s:0.0155, 88:0.0032, 95s:0.0001, 96s:0.0001, 98s:0.023, Q9o:0.0002, T6s:0.0001, TT:0.0109, J2s:0.0002, J5s:0.001, JTs:0.0005, JJ:0.0103, Q2s:0.0004, Q3s:0.0001, Q4s:0.0003, Q5s:0.0003, Q6s:0.0087, Q8s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0916, AQo:0.0145, K4s:0.0209, K5s:0.0105, K8s:0.0595, KTs:0.007, KJs:0.0001, KQs:0.1226, KK:0.8468, AKo:0.1454, A2s:0.0556, A3s:0.0422, A4s:0.0994, A5s:0.174, A6s:0.195, A7s:0.0002, A9s:0.0401, ATs:0.0028, AJs:0.0861, AQs:0.0097, AKs:0.7924, AA:0.1247"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0006, 66:0.0158, 87s:0.0384, 95s:0.0281, 99:0.0304, T7s:0.0001, T8s:0.0005, TT:0.0005, J7s:0.0122, J9s:0.0014, Q4s:0.001, Q8s:0.0005, Q9s:0.0001, QQ:0.1203, AQo:0.0534, K4s:0.0001, K5s:0.0092, K7s:0.0002, K8s:0.0007, KJs:0.0008, KQs:0.0531, KK:0.0555, AKo:0.0121, A2s:0.0122, A4s:0.0076, A8s:0.0317, A9s:0.0089, ATs:0.0338, AJs:0.012, AQs:0.0164, AKs:0.0212, AA:0.0038"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0066, A3o:0.0175, 43s:0.0003, A4o:0.0237, 53s:0.0061, A5o:0.0002, 62s:0.0004, A6o:0.0031, 76s:0.0003, 77:0.007, A7o:0.3086, 88:0.0079, A8o:0.0844, 94s:0.0002, 95s:0.0027, 98s:0.0004, 99:0.0004, A9o:0.001, T4s:0.0001, TT:0.0231, ATo:0.0087, J6s:0.0002, J7s:0.0033, JJ:0.0024, AJo:0.0303, Q6s:0.0007, QTs:0.0007, QQ:0.0068, AQo:0.0291, K2s:0.0003, K4s:0.0004, K5s:0.0255, K6s:0.0058, K8s:0.0003, K9s:0.0477, KJs:0.0004, KK:0.0005, AKo:0.0186, A2s:0.0218, A3s:0.5337, A4s:0.0622, A5s:0.0418, A6s:0.1885, A7s:0.001, A8s:0.2275, A9s:0.0391, ATs:0.0222, AJs:0.0104, AQs:0.0934, AKs:0.0346, AA:0.9942"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0009, A2o:0.0014, 32s:0.0003, 33:0.0126, A3o:0.0007, 42s:0.0002, 43s:0.0035, 44:0.0002, A4o:0.002, 52s:0.0003, 53s:0.0003, 55:0.0049, K5o:0.0022, A5o:0.0043, 63s:0.0006, 65s:0.071, 66:0.0276, 75s:0.0015, 76s:0.0004, 77:0.0029, A7o:0.0027, 85s:0.0009, 88:0.0008, A8o:0.001, 95s:0.0045, 98s:0.0008, 99:0.0574, A9o:0.0005, T4s:0.0002, T7s:0.0001, T8s:0.0004, T9s:0.0005, TT:0.0014, ATo:0.0003, J4s:0.0001, J5s:0.0002, J6s:0.0001, J7s:0.006, JTs:0.0003, JJ:0.0174, AJo:0.001, Q8s:0.0004, Q9s:0.0003, QTs:0.002, QJs:0.0001, QQ:0.0008, AQo:0.0023, K2s:0.134, K3s:0.0671, K4s:0.0051, K5s:0.0501, K6s:0.0682, K7s:0.0111, K8s:0.0288, K9s:0.0614, KTs:0.0585, KJs:0.0138, KK:0.944, AKo:0.9691, A2s:0.0316, A3s:0.3722, A4s:0.0035, A5s:0.6325, A6s:0.166, A7s:0.0032, A8s:0.2362, A9s:0.3544, ATs:0.2274, AJs:0.0005, AQs:0.0003, AKs:0.9438, AA:0.002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 55:0.2949, 65s:0.0677, 66:0.1212, 74s:0.0033, 77:0.0009, 85s:0.0036, 86s:0.0083, 88:0.0995, 99:0.0173, TT:0.0009, JTs:0.003, JJ:0.0203, Q6s:0.0001, QQ:0.2081, AQo:0.0034, KJs:0.0042, KQs:0.0544, KK:0.0251, AKo:0.002, A2s:0.0105, A4s:0.0952, A6s:0.0168, A7s:0.0263, A8s:0.0036, A9s:0.0368, AJs:0.0001, AQs:0.4907, AKs:0.0041"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "62o:0.0001, K2o:0.0159, A2o:0.0121, K3o:0.0206, A3o:0.0071, 42s:0.0001, 43s:0.0042, K4o:0.0172, 53s:0.0002, 54s:0.0078, K5o:0.0134, A5o:0.0013, 65s:0.0001, 86o:0.0001, Q6o:0.0001, K6o:0.0232, A6o:0.007, 76s:0.0001, 77:0.0002, K7o:0.0241, A7o:0.0199, 82s:0.0001, 86s:0.0038, 88:0.0001, 98o:0.0001, K8o:0.0196, A8o:0.0084, 95s:0.0001, 98s:0.0001, K9o:0.0197, A9o:0.0057, KTo:0.0205, ATo:0.0044, J4s:0.0001, J6s:0.0001, J7s:0.0002, J8s:0.0002, JJ:0.0122, KJo:0.0172, AJo:0.0137, Q3s:0.0001, Q7s:0.0001, Q9s:0.0001, QQ:0.0002, KQo:0.0003, AQo:0.0001, K3s:0.0337, K4s:0.0113, K5s:0.0233, K6s:0.0172, K7s:0.0211, K8s:0.0169, K9s:0.0137, KTs:0.0231, KJs:0.0117, KK:0.0774, AKo:0.0293, A2s:0.0009, A3s:0.0002, A7s:0.0215, A8s:0.0124, A9s:0.0002, AJs:0.0032, AQs:0.0012, AKs:0.1306, AA:0.9989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.3003, A3o:0.1586, 44:0.0002, A4o:0.0002, 55:0.0543, A5o:0.4822, 65s:0.0177, 66:0.0182, A6o:0.014, 75s:0.0006, 76s:0.0047, 77:0.0027, 86s:0.0178, 88:0.2384, A8o:0.1699, 99:0.0314, A9o:0.1353, T4s:0.0002, TT:0.0597, ATo:0.3057, JJ:0.121, AJo:0.0607, Q9s:0.0002, QQ:0.1901, KQo:0.0001, AQo:0.0702, K3s:0.0014, K4s:0.0004, K5s:0.1069, K6s:0.002, K9s:0.2663, KTs:0.1233, KJs:0.0176, KQs:0.0239, KK:0.8974, AKo:0.968, A2s:0.6842, A3s:0.7111, A4s:0.8105, A5s:0.8392, A6s:0.4366, A7s:0.5443, A8s:0.4816, A9s:0.7275, ATs:0.7419, AJs:0.5344, AQs:0.4525, AKs:0.8645, AA:0.0011"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "32s:0.0001, 55:0.0025, 62s:0.0001, K7o:0.0422, 86s:0.003, 87s:0.0005, K8o:0.0429, T3s:0.0001, TT:0.0001, J2s:0.0001, J7s:0.0003, JJ:0.1478, KJo:0.0024, Q5s:0.0011, Q8s:0.0538, QQ:0.0224, KQo:0.0145, K2s:0.1514, K3s:0.1271, K6s:0.0004, K7s:0.0039, K8s:0.0035, KTs:0.0152, KJs:0.0114, KQs:0.0001, KK:0.3169, AKo:0.0614, A2s:0.0098, A3s:0.0001, A6s:0.0205, A7s:0.0072, A8s:0.0047, ATs:0.0699, AJs:0.0042, AQs:0.0536, AKs:0.2135, AA:0.4007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.102, 55:0.0011, 63s:0.0266, 65s:0.0225, 76s:0.0577, 88:0.0146, 97s:0.0002, J3s:0.0001, J7s:0.0082, J8s:0.0247, J9s:0.0021, JTs:0.0098, JJ:0.1575, Q3s:0.0001, QQ:0.0149, K2s:0.0143, K3s:0.0609, K6s:0.3767, K7s:0.0056, K8s:0.0001, KTs:0.0327, KJs:0.0487, KQs:0.0001, KK:0.6788, AKo:0.8952, A2s:0.0009, A3s:0.5611, A4s:0.3952, A5s:0.0783, A6s:0.0867, A7s:0.0992, A8s:0.0782, A9s:0.003, ATs:0.0151, AJs:0.0266, AQs:0.0028, AKs:0.5727, AA:0.5992"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0001, T4o:0.0039, K4o:0.0076, 55:0.0007, A5o:0.0308, 82s:0.0001, 87s:0.0001, 88:0.0004, K8o:0.0384, 98s:0.0003, 99:0.0161, T4s:0.0001, T7s:0.0002, TT:0.0007, ATo:0.0109, J6s:0.0029, J8s:0.0013, J9s:0.0005, JTs:0.0022, KJo:0.0192, AJo:0.0006, QTs:0.0001, AQo:0.0106, K2s:0.0239, K3s:0.0133, K4s:0.0035, K6s:0.0606, K7s:0.0001, K8s:0.0071, KTs:0.0045, KJs:0.0023, KQs:0.0023, KK:0.0778, AKo:0.1808, A3s:0.0012, A4s:0.035, A5s:0.2335, A6s:0.0032, A7s:0.2172, A8s:0.1165, A9s:0.1837, ATs:0.0003, AQs:0.0724, AKs:0.6906, AA:0.9233"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0002, T4s:0.0002, TT:0.0003, QTo:0.0001, J6s:0.0003, J9s:0.0002, JJ:0.0008, Q8s:0.0001, QQ:0.0055, K6s:0.0053, KJs:0.0008, KQs:0.0036, KK:0.9219, AKo:0.7612, A3s:0.0008, A4s:0.0024, A5s:0.1568, A6s:0.005, A7s:0.0847, A8s:0.0347, A9s:0.0468, ATs:0.0004, AQs:0.1728, AKs:0.2984, AA:0.0767"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.8293, 42o:0.0001, 52o:0.0002, 82o:0.0001, K2o:0.0001, A2o:0.1217, 32s:0.001, 33:0.3997, K3o:0.0001, 42s:0.0002, 43s:0.0022, 44:0.4634, 84o:0.0001, 53s:0.0001, 54s:0.0861, 55:0.4678, 85o:0.0002, Q5o:0.0001, A5o:0.0001, 62s:0.2175, 63s:0.0003, 64s:0.0005, 66:0.0007, 96o:0.0091, A6o:0.0012, 72s:0.0005, 73s:0.1516, 74s:0.0117, 75s:0.048, 76s:0.0302, 77:0.7236, 87o:0.0001, T7o:0.0001, 82s:0.0006, 83s:0.0006, 85s:0.0597, 86s:0.0011, 87s:0.0014, 98o:0.0001, T8o:0.0002, J8o:0.0001, 92s:0.001, 93s:0.0001, 94s:0.0005, 97s:0.0001, 98s:0.0005, 99:0.3045, T9o:0.0003, Q9o:0.001, T2s:0.0003, T3s:0.0036, T4s:0.0006, T5s:0.0007, T6s:0.0007, T7s:0.0025, T8s:0.1149, T9s:0.0001, TT:0.0038, JTo:0.0001, ATo:0.0002, J3s:0.0042, J4s:0.0978, J5s:0.0002, J6s:0.0016, J7s:0.0008, J8s:0.0044, J9s:0.0002, JTs:0.004, JJ:0.0046, KJo:0.0002, AJo:0.0004, Q2s:0.001, Q3s:0.0149, Q4s:0.0076, Q6s:0.002, Q7s:0.0306, QTs:0.0529, QJs:0.0378, QQ:0.153, KQo:0.0086, AQo:0.0006, K2s:0.0007, K3s:0.0208, K4s:0.0017, K5s:0.001, K6s:0.0013, K7s:0.2632, K8s:0.0017, K9s:0.0012, KTs:0.0852, KJs:0.0238, KQs:0.0129, KK:0.0003, AKo:0.5321, A2s:0.1136, A3s:0.0051, A5s:0.1074, A6s:0.0008, A8s:0.0014, A9s:0.2581, ATs:0.0001, AJs:0.002, AQs:0.0713, AKs:0.1226, AA:0.0003"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "Q2o:0.1228, 32s:0.004, 33:0.001, 42s:0.0521, 53s:0.0041, 55:0.0002, Q5o:0.2234, K5o:0.0303, 62s:0.0003, 66:0.0001, Q6o:0.3419, 74s:0.0585, 75s:0.0004, 76s:0.0007, 77:0.0006, T7o:0.0001, 86s:0.0001, 88:0.0003, 98s:0.0043, 99:0.0334, Q9o:0.0724, T3s:0.0001, T7s:0.0017, T9s:0.0011, TT:0.0008, ATo:0.0279, J2s:0.0003, J4s:0.0146, J5s:0.004, J8s:0.0008, JTs:0.0058, JJ:0.1373, KJo:0.1902, AJo:0.0074, Q3s:0.021, Q5s:0.2882, Q6s:0.0014, Q8s:0.1799, QTs:0.2666, QJs:0.0551, QQ:0.6971, AQo:0.7617, K2s:0.0001, K3s:0.0001, K4s:0.0045, K5s:0.0001, K6s:0.003, K7s:0.0001, K8s:0.0058, K9s:0.0452, KTs:0.0659, KJs:0.0005, KQs:0.2233, KK:0.3908, AKo:0.2561, A5s:0.0003, A6s:0.1866, A8s:0.0025, ATs:0.0127, AJs:0.0109, AQs:0.4378, AKs:0.0364, AA:0.9996"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.001, 42s:0.001, 43s:0.0025, 63s:0.0291, A6o:0.0297, 72s:0.0001, 74s:0.0106, 76s:0.0013, 87s:0.0001, 99:0.001, TT:0.0465, JTo:0.0016, J2s:0.0071, J4s:0.0009, J8s:0.0171, J9s:0.0002, JTs:0.0037, JJ:0.0419, KJo:0.0196, Q2s:0.0008, Q3s:0.0074, Q9s:0.0059, QTs:0.0593, QJs:0.3306, QQ:0.1491, KQo:0.8482, AQo:0.0285, K3s:0.2029, K4s:0.0662, K6s:0.0816, K7s:0.0112, K8s:0.1058, K9s:0.0809, KTs:0.3998, KJs:0.0411, KQs:0.6318, KK:0.6088, AKo:0.1723, A3s:0.0098, A4s:0.1785, A5s:0.0499, A6s:0.0002, A8s:0.0035, A9s:0.0546, ATs:0.0093, AJs:0.0503, AQs:0.2866, AKs:0.8404, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|BTN:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.7711, 52o:0.0001, 62o:0.0001, 72o:0.0001, 82o:0.0001, T2o:0.0013, J2o:0.0012, Q2o:0.0001, K2o:0.0001, A2o:0.0001, 32s:0.001, 33:0.7288, 63o:0.015, 73o:0.0005, 93o:0.0004, T3o:0.0002, J3o:0.0003, Q3o:0.0002, K3o:0.0001, 43s:0.0052, 44:0.4104, 94o:0.0003, T4o:0.0002, A4o:0.0008, 52s:0.0061, 53s:0.0512, 54s:0.0036, 55:0.0005, 65o:0.0471, 75o:0.0014, T5o:0.0001, J5o:0.0002, Q5o:0.0001, K5o:0.0197, A5o:0.0009, 62s:0.0001, 63s:0.0032, 64s:0.0001, 65s:0.0005, 66:0.828, 86o:0.0001, 96o:0.2843, T6o:0.0003, Q6o:0.0006, K6o:0.4452, 72s:0.0093, 73s:0.0564, 75s:0.0031, 76s:0.0154, 77:0.5481, K7o:0.0001, 82s:0.0008, 83s:0.001, 84s:0.02, 86s:0.0002, 87s:0.0005, 88:0.7487, Q8o:0.0001, K8o:0.0002, A8o:0.0001, 92s:0.0075, 93s:0.0007, 94s:0.0006, 95s:0.0004, 96s:0.3385, 97s:0.0871, 98s:0.0037, 99:0.0959, Q9o:0.0006, K9o:0.0006, A9o:0.0001, T2s:0.2866, T3s:0.0174, T4s:0.0005, T6s:0.0016, T7s:0.0009, T8s:0.0011, T9s:0.0004, TT:0.006, JTo:0.0001, QTo:0.0003, KTo:0.0053, ATo:0.0001, J2s:0.4412, J4s:0.0209, J5s:0.0014, J7s:0.1338, J8s:0.0143, J9s:0.0032, JTs:0.0025, JJ:0.0778, AJo:0.0035, Q2s:0.0001, Q3s:0.0021, Q4s:0.0768, Q5s:0.3898, Q6s:0.0046, Q8s:0.0016, Q9s:0.0008, QTs:0.0016, QJs:0.0041, QQ:0.0022, KQo:0.0067, AQo:0.0426, K2s:0.0009, K3s:0.0004, K4s:0.4013, K5s:0.1144, K6s:0.0008, K8s:0.0126, K9s:0.2136, KTs:0.1509, KJs:0.0062, KQs:0.013, KK:0.0006, AKo:0.176, A2s:0.1163, A3s:0.0216, A4s:0.3522, A5s:0.0031, A6s:0.2311, A7s:0.0006, A8s:0.6159, A9s:0.1894, ATs:0.0001, AJs:0.0704, AQs:0.1531, AKs:0.0386, AA:0.0008"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0284, 42o:0.038, 33:0.0012, 63o:0.0592, 53s:0.0001, 55:0.0004, 65o:0.0001, Q5o:0.1874, 64s:0.0001, 65s:0.0419, A6o:0.0178, 72s:0.0402, 73s:0.0483, 76s:0.0072, 84s:0.075, 86s:0.0003, 88:0.0003, A8o:0.022, 94s:0.1194, 96s:0.0003, 97s:0.0008, 98s:0.0001, T3s:0.1288, T4s:0.0054, T6s:0.0001, T9s:0.0018, TT:0.0037, QTo:0.1895, KTo:0.054, J2s:0.0001, J4s:0.0001, J8s:0.0045, J9s:0.0003, JTs:0.0017, JJ:0.0177, Q4s:0.0028, Q5s:0.0613, Q6s:0.0014, Q8s:0.0002, Q9s:0.1081, QTs:0.0004, QJs:0.1455, QQ:0.9885, KQo:0.6858, AQo:0.7402, K4s:0.0838, K5s:0.064, K6s:0.3104, K7s:0.0006, K8s:0.43, K9s:0.0002, KTs:0.0393, KJs:0.0719, KQs:0.0197, KK:0.7291, AKo:0.2828, A3s:0.0058, A4s:0.0001, A5s:0.0145, A6s:0.0346, A8s:0.0001, A9s:0.0056, ATs:0.4176, AJs:0.1082, AQs:0.2435, AKs:0.2547, AA:0.8761"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0045, 43s:0.0174, K4o:0.0353, 54s:0.0001, A5o:0.0001, 64s:0.0002, 72s:0.0001, 76s:0.0914, 77:0.0018, K7o:0.0302, 84s:0.0026, 88:0.0085, 95s:0.0002, 96s:0.0022, 97s:0.0017, 99:0.1558, K9o:0.0675, T4s:0.0001, T7s:0.0061, ATo:0.0001, J2s:0.013, JTs:0.0013, JJ:0.0455, Q2s:0.0361, Q3s:0.0147, Q4s:0.0269, Q6s:0.0462, Q8s:0.0001, QTs:0.0211, QJs:0.1936, QQ:0.0088, AQo:0.0291, K2s:0.1624, K3s:0.1115, K4s:0.0545, K5s:0.0006, K6s:0.1846, K7s:0.0069, K9s:0.167, KTs:0.0846, KJs:0.4378, KQs:0.8798, KK:0.2703, AKo:0.3921, A2s:0.014, A3s:0.2306, A4s:0.0162, A6s:0.0266, A8s:0.0376, A9s:0.0008, AJs:0.0564, AQs:0.49, AKs:0.7048, AA:0.1231"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0015, QQ:0.6558, KK, AKo:0.2259, A3s:0.0003, AJs:0.0003, AKs:0.1057, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.6633, KK, AKo:0.1612, AKs:0.3666, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@37.25",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0007, 54s:0.0001, 64s:0.0001, 72s:0.0002, 73s:0.0009, 74s:0.0001, Q7o:0.0001, 84s:0.0001, 93s:0.0001, 97s:0.0001, 98s:0.0001, J9o:0.0001, K9o:0.0001, T2s:0.0002, T4s:0.0002, T6s:0.0001, T7s:0.0018, T8s:0.0001, J2s:0.0001, J4s:0.0001, J6s:0.0002, J9s:0.0001, JJ:0.0002, Q6s:0.0001, Q8s:0.0001, QTs:0.0002, QQ:0.035, K4s:0.0003, K5s:0.0001, K6s:0.0003, K8s:0.0001, K9s:0.0003, KJs:0.0002, KK:0.9987, AKo:0.1283, A5s:0.0003, A6s:0.0001, A7s:0.001, A8s:0.0005, A9s:0.001, ATs:0.0001, AJs:0.0002, AQs:0.0129, AKs:0.07, AA:0.9989"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 42s:0.0001, 43s:0.0001, 53s:0.0005, 55:0.0001, 62s:0.0001, 66:0.0002, 74s:0.0002, 76s:0.0013, 83s:0.0002, 97s:0.0001, 99:0.1352, K9o:0.0001, T2s:0.0005, T5s:0.0001, T6s:0.0006, T7s:0.0019, T8s:0.0001, T9s:0.0001, TT:0.0005, J4s:0.0004, J6s:0.0001, JJ:0.0032, Q2s:0.0003, Q4s:0.0006, Q7s:0.0001, QTs:0.0001, QJs:0.0003, QQ:0.4099, K4s:0.0001, K6s:0.0003, K7s:0.0008, K9s:0.0009, KTs:0.0022, KJs:0.0001, KQs:0.0002, KK:0.9943, AKo:0.0099, A2s:0.0002, A3s:0.0012, A4s:0.0001, A5s:0.0005, A8s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0007, AQs:0.001, AKs:0.3923, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 43s:0.0001, 52s:0.0002, 54s:0.0008, 55:0.0013, 65o:0.0001, 64s:0.0006, 73s:0.0001, 74s:0.0003, 75s:0.0001, 76s:0.0001, A7o:0.0001, 85s:0.0001, 86s:0.0001, 87s:0.0001, 93s:0.0002, 95s:0.0001, 97s:0.0001, T2s:0.0002, T5s:0.0001, TT:0.0023, J3s:0.0001, J4s:0.0001, J5s:0.0002, J9s:0.0004, JJ:0.0339, AJo:0.0004, Q4s:0.0002, Q5s:0.0003, Q6s:0.0001, Q8s:0.0001, QTs:0.0002, QJs:0.0001, QQ:0.5342, AQo:0.0001, K3s:0.0001, K4s:0.0001, K5s:0.0001, K7s:0.0001, K8s:0.0003, KTs:0.0002, KQs:0.0003, KK:0.988, AKo:0.0902, A2s:0.0002, A3s:0.0001, A5s:0.0004, A6s:0.0005, A7s:0.0004, A9s:0.0004, AJs:0.0001, AQs:0.0002, AKs:0.1895, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@5.5",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "43s:0.0001, 44:0.0593, 55:0.0001, 65s:0.0001, 73s:0.0001, 76s:0.0001, 77:0.1467, 86s:0.0001, 87s:0.0001, 88:0.0387, A9o:0.0002, T6s:0.0002, T7s:0.0001, TT:0.0001, J7s:0.0001, J9s:0.0003, QTs:0.0035, QQ:0.095, AQo:0.0527, K6s:0.0016, K8s:0.0005, K9s:0.0001, KTs:0.0077, KJs:0.0001, KK:0.3174, AKo:0.0147, A4s:0.0004, A5s:0.0133, A8s:0.0009, A9s:0.017, ATs:0.0005, AJs:0.014, AQs:0.4454, AKs:0.0769, AA:0.0003"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "22:0.0005, 82o:0.0067, A2o:0.0085, 32s:0.0075, A3o:0.0057, 42s:0.0017, 44:0.0159, 54o:0.0059, T4o:0.0001, A4o:0.0145, 52s:0.0036, 54s:0.0121, A5o:0.4443, 62s:0.0049, 64s:0.0006, 65s:0.0004, T6o:0.001, A6o:0.0009, 72s:0.0016, 75s:0.0001, 76s:0.0077, 77:0.0001, A7o:0.0378, 87s:0.0001, 88:0.0043, K8o:0.0044, A8o:0.0185, 92s:0.0007, 96s:0.0016, 97s:0.0037, 99:0.0043, A9o:0.0265, T2s:0.0002, T3s:0.0287, T4s:0.0001, T5s:0.0002, T6s:0.0041, T7s:0.0001, T8s:0.0027, KTo:0.0002, ATo:0.019, J2s:0.0005, J4s:0.0013, J8s:0.0018, JJ:0.0074, QJo:0.0002, AJo:0.0013, Q3s:0.0014, Q5s:0.0006, Q7s:0.0002, QQ:0.0109, AQo:0.113, K2s:0.0067, K3s:0.0197, K4s:0.0123, K6s:0.0033, K8s:0.0053, K9s:0.0001, KK:0.0143, AKo:0.0972, A2s:0.0323, A3s:0.1168, A4s:0.3356, A5s:0.0015, A6s:0.122, A7s:0.031, A8s:0.3622, A9s:0.0269, ATs:0.1323, AJs:0.1205, AQs:0.0189, AKs:0.1225, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 32s:0.0196, 33:0.0431, 42s:0.0002, 44:0.0011, A4o:0.0106, 54s:0.0099, A5o:0.0028, 76s:0.0445, 77:0.0122, 86s:0.0138, 88:0.0089, A8o:0.0024, 96s:0.0317, 97s:0.0665, 98s:0.0179, 99:0.0112, T7s:0.0007, T8s:0.0006, T9s:0.001, TT:0.0004, ATo:0.0013, J6s:0.0009, J7s:0.0002, JJ:0.0054, AJo:0.0012, Q2s:0.0001, Q6s:0.0001, Q9s:0.0041, QTs:0.0033, QJs:0.0002, QQ:0.007, AQo:0.0344, K2s:0.001, K6s:0.0059, K7s:0.0001, KTs:0.0003, KK:0.668, AKo:0.8824, A2s:0.1195, A3s:0.1889, A4s:0.1755, A5s:0.0622, A6s:0.0192, A7s:0.0999, A8s:0.1971, A9s:0.0307, ATs:0.0121, AJs:0.0411, AQs:0.1073, AKs:0.7819, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@5.5",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0863, 33:0.4901, 44:0.9065, 53s:0.0361, 54s:0.2857, 55:0.9587, 62s:0.0471, 63s:0.0757, 64s:0.3252, 65s:0.8178, 66:0.9548, K6o:0.0051, 73s:0.0001, 74s:0.0259, 75s:0.3106, 76s:0.7379, 77:0.8522, 84s:0.0003, 86s:0.0178, 87s:0.4305, 88:0.6179, 93s:0.0001, 96s:0.242, 97s:0.0125, 98s:0.0022, 99:0.0982, T6s:0.0017, T7s:0.1198, T8s:0.1466, T9s:0.0002, TT:0.5909, J4s:0.0002, J8s:0.0006, J9s:0.0347, JJ:0.6292, AJo:0.0029, Q4s:0.0019, Q5s:0.0006, Q6s:0.0001, Q8s:0.0001, QTs:0.003, QQ:0.9569, AQo:0.4336, K3s:0.0008, K5s:0.0006, K6s:0.1779, K7s:0.2297, K8s:0.0179, K9s:0.0003, KTs:0.3014, KJs:0.0003, KQs:0.0017, KK:0.1549, AKo:0.0037, A2s:0.0169, A3s:0.3009, A4s:0.0536, A5s:0.1588, A6s:0.0552, A7s:0.0923, A8s:0.0122, A9s:0.0263, ATs:0.0262, AJs:0.5337, AQs:0.8654, AKs:0.1253, AA:0.0001"
      },
      {
        "action": "4bet 11bb",
        "min": 0.0001,
        "range": "63o:0.0001, 42s:0.0001, 97s:0.0002, T9s:0.0001, JTo:0.0001, QTo:0.0001, J5s:0.0001, Q5s:0.0001, QQ:0.0001, K5s:0.0002, K7s:0.0001, K8s:0.0001, K9s:0.0001, KTs:0.0001, KQs:0.0001, KK:0.0649, A4s:0.0001, AKs:0.0025, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0543, J2o:0.0002, K2o:0.0001, A2o:0.0154, 32s:0.0004, 33:0.0026, A3o:0.0006, 42s:0.0001, 43s:0.0002, 44:0.0778, K4o:0.0001, A4o:0.0261, 54s:0.0098, 55:0.0059, Q5o:0.0002, K5o:0.0005, A5o:0.0244, 62s:0.0009, 64s:0.0003, 65s:0.0011, 66:0.015, K6o:0.0004, A6o:0.0009, 73s:0.0001, 75s:0.0033, 76s:0.0054, 77:0.0776, 87o:0.0002, K7o:0.0001, A7o:0.0206, 83s:0.0001, 85s:0.0005, 87s:0.0052, 88:0.2916, K8o:0.0001, A8o:0.0077, 92s:0.0004, 93s:0.0001, 96s:0.0024, 98s:0.001, 99:0.2241, K9o:0.0003, T2s:0.0001, T4s:0.0003, T9s:0.0042, TT:0.0449, QTo:0.0001, KTo:0.0003, ATo:0.0004, J2s:0.0002, J3s:0.0001, J4s:0.0006, J5s:0.0005, J6s:0.0002, J7s:0.0004, J8s:0.0001, J9s:0.0002, JJ:0.0374, KJo:0.0001, AJo:0.0013, Q2s:0.0001, Q3s:0.0005, Q4s:0.0007, Q5s:0.0018, Q6s:0.0018, Q9s:0.0016, QTs:0.0015, QQ:0.0242, AQo:0.0012, K3s:0.0012, K4s:0.0016, K6s:0.0008, K7s:0.0519, K8s:0.0013, K9s:0.0001, KTs:0.0097, KJs:0.0697, KQs:0.0002, KK:0.7802, AKo:0.9951, A2s:0.5821, A3s:0.2352, A4s:0.7671, A5s:0.6577, A6s:0.5312, A7s:0.6781, A8s:0.6709, A9s:0.8206, ATs:0.6512, AJs:0.0149, AQs:0.1142, AKs:0.8721, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@5.5",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A3o:0.0445, A4o:0.1226, A6o:0.2071, 74s:0.0001, 77:0.0114, 83s:0.0001, 87s:0.0001, 93s:0.0001, 98s:0.0001, 99:0.0054, T6s:0.0001, T9s:0.0001, TT:0.0003, J6s:0.0001, J7s:0.0001, JTs:0.0001, JJ:0.0618, AJo:0.0056, Q4s:0.0001, Q6s:0.0001, Q7s:0.0003, Q8s:0.0159, QQ:0.0364, AQo:0.0098, K2s:0.0044, K9s:0.0001, KJs:0.0007, KQs:0.0002, KK:0.5258, AKo:0.2731, A2s:0.0345, A3s:0.0932, A4s:0.0198, A5s:0.0011, A7s:0.1716, A8s:0.0664, AJs:0.1306, AQs:0.1171, AKs:0.2589, AA:0.7234"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "42s:0.0153, 43s:0.0001, 53s:0.0055, 64s:0.0033, 74s:0.0001, 75s:0.0005, 77:0.0002, 83s:0.0005, 85s:0.0642, 86s:0.0152, 87s:0.0016, 96s:0.0568, 99:0.0001, A9o:0.0014, T8s:0.0151, TT:0.0002, ATo:0.0372, J6s:0.0542, JTs:0.0001, JJ:0.1112, Q4s:0.0001, Q5s:0.0323, Q6s:0.0651, Q8s:0.0004, QTs:0.0121, QJs:0.0001, QQ:0.0071, K2s:0.0055, K4s:0.0001, K7s:0.0741, KTs:0.0674, KJs:0.0036, KQs:0.0002, KK:0.4694, AKo:0.1827, A2s:0.2848, A3s:0.0004, A4s:0.0951, A5s:0.0203, A6s:0.0069, A7s:0.0046, A9s:0.0193, ATs:0.091, AJs:0.2921, AQs:0.1096, AKs:0.0022, AA:0.2766"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@5.5",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "32s:0.1432, 33:0.0009, A3o:0.0001, 42s:0.0001, 44:0.0002, A5o:0.0039, 66:0.0001, K6o:0.0037, 75s:0.0001, K7o:0.0063, 82s:0.0296, 83s:0.0002, 84s:0.0078, 85s:0.0001, 87s:0.0014, 94s:0.0171, 95s:0.0001, 97s:0.0001, K9o:0.0085, T8s:0.0001, TT:0.0027, KTo:0.006, J3s:0.0001, J6s:0.0121, J7s:0.0001, JJ:0.0002, Q3s:0.002, Q5s:0.0001, Q7s:0.0001, Q8s:0.0129, Q9s:0.0004, QQ:0.0379, AQo:0.0013, K5s:0.0002, K6s:0.0042, K7s:0.0001, K9s:0.0474, KTs:0.0088, KJs:0.0991, KQs:0.0374, KK:0.2328, AKo:0.0842, A2s:0.2818, A3s:0.0014, A4s:0.0475, A5s:0.0205, A6s:0.0018, A9s:0.1225, AJs:0.0183, AQs:0.003, AKs:0.3906, AA:0.9553"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0003, 33:0.007, 44:0.0001, A4o:0.0034, 52s:0.0561, 54s:0.056, 65s:0.0003, 76s:0.1364, 83s:0.0003, 84s:0.062, 95s:0.0002, 96s:0.0092, Q9o:0.0002, T2s:0.0001, T3s:0.0002, T6s:0.0001, T7s:0.0018, T8s:0.0005, T9s:0.0168, TT:0.0124, JTs:0.0001, JJ:0.0315, Q4s:0.0001, Q7s:0.0004, QTs:0.0014, QQ:0.0241, K2s:0.0001, K5s:0.0001, K6s:0.0287, K8s:0.0537, K9s:0.0281, KTs:0.0203, KJs:0.0056, KK:0.7652, AKo:0.7121, A2s:0.0105, A3s:0.1087, A4s:0.6372, A5s:0.4112, A6s:0.111, A7s:0.0336, A8s:0.1671, A9s:0.0242, ATs:0.0508, AJs:0.0428, AQs:0.4302, AKs:0.5131, AA:0.0445"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@5.5",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "A2o:0.0001, K3o:0.0527, A3o:0.0022, 43s:0.0001, A4o:0.0119, 52s:0.0004, 54s:0.0001, A5o:0.0483, 62s:0.0001, 66:0.0209, K6o:0.0034, A6o:0.005, 72s:0.0017, A7o:0.098, 83s:0.0728, 85s:0.0014, 94s:0.0001, 95s:0.0001, 96s:0.0001, 97s:0.0153, 99:0.001, K9o:0.0072, A9o:0.0001, T5s:0.0002, T8s:0.0001, TT:0.0167, ATo:0.0001, J3s:0.0127, J5s:0.0001, J6s:0.0001, J7s:0.0001, J8s:0.0002, J9s:0.0001, JJ:0.0014, KJo:0.0241, Q3s:0.0097, Q4s:0.0002, QQ:0.0272, AQo:0.0508, K6s:0.0049, K7s:0.0002, K8s:0.0214, K9s:0.0003, KTs:0.0001, KJs:0.1775, KQs:0.0002, KK:0.253, AKo:0.2793, A2s:0.0029, A3s:0.018, A4s:0.0046, A5s:0.0077, A6s:0.0741, A7s:0.0364, A8s:0.0762, ATs:0.0216, AQs:0.0323, AKs:0.2731, AA:0.8763"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0001, 52s:0.0207, 55:0.016, A5o:0.0063, 65s:0.0055, 76o:0.0015, 73s:0.0012, 74s:0.0415, 75s:0.0014, 76s:0.0002, T7o:0.0001, 88:0.0004, A8o:0.0001, 97s:0.1672, 98s:0.0071, 99:0.0014, Q9o:0.0006, T5s:0.0055, T6s:0.0129, T7s:0.0001, T8s:0.0506, TT:0.0636, ATo:0.0001, J3s:0.0001, J5s:0.0001, J8s:0.0093, J9s:0.0004, JTs:0.0007, Q8s:0.0001, QJs:0.0011, QQ:0.6422, AQo:0.165, K2s:0.0004, K4s:0.13, K5s:0.3152, K6s:0.1727, K7s:0.1041, K8s:0.0075, KTs:0.0026, KJs:0.0185, KQs:0.0028, KK:0.7463, AKo:0.1222, A2s:0.8065, A3s:0.0706, A5s:0.0681, A6s:0.0388, A7s:0.0003, A8s:0.3354, ATs:0.0035, AJs:0.3762, AQs:0.4036, AKs:0.5413, AA:0.1237"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@8.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0013, 44:0.0009, 55:0.0004, 64s:0.0004, 66:0.0216, 77:0.0035, 86s:0.0008, 87s:0.0003, 88:0.0025, 92s:0.0002, 97s:0.0013, 99:0.0005, JTs:0.0003, JJ:0.001, Q5s:0.0005, QQ:0.187, AQo:0.0003, K9s:0.0001, KTs:0.0009, KJs:0.0005, KQs:0.1122, KK:0.005, AKo:0.0001, A3s:0.0001, A4s:0.0022, A5s:0.0003, A6s:0.0001, A7s:0.0015, A9s:0.0001, AJs:0.0032, AQs:0.1473, AKs:0.0026, AA:0.0016"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.0009, A2o:0.0038, 32s:0.0002, A3o:0.0961, A4o:0.0792, A5o:0.0318, K6o:0.0009, A6o:0.0586, 76s:0.0008, 77:0.0098, K7o:0.0004, A7o:0.0277, 84s:0.0009, 88:0.0017, A8o:0.0088, 95s:0.0013, 97s:0.0001, K9o:0.0005, A9o:0.0802, T5s:0.0003, T9s:0.0001, TT:0.0001, J3s:0.0001, J5s:0.0018, J7s:0.0004, JTs:0.0001, JJ:0.0104, KJo:0.0013, AJo:0.1091, QQ:0.0369, KQo:0.0001, AQo:0.1235, K2s:0.0009, K3s:0.0004, K4s:0.001, K5s:0.0014, K6s:0.0028, K7s:0.0003, K9s:0.0011, KTs:0.0006, KJs:0.0079, KK:0.0171, AKo:0.1834, A2s:0.0363, A3s:0.2105, A4s:0.3954, A5s:0.0241, A6s:0.0006, A7s:0.2033, A8s:0.2682, A9s:0.1556, ATs:0.0029, AJs:0.0493, AQs:0.2672, AKs:0.5358, AA:0.981"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0466, A2o:0.0011, 44:0.0779, A4o:0.0009, 55:0.2831, 64s:0.0003, 65s:0.1215, 77:0.2665, 82s:0.0001, 86s:0.0001, 88:0.1034, A8o:0.0001, 96s:0.0001, 97s:0.0001, 98s:0.0001, 99:0.1179, K9o:0.0001, T7s:0.0001, T8s:0.0001, T9s:0.0002, TT:0.0008, J7s:0.0002, JTs:0.0004, JJ:0.1424, Q5s:0.0005, QJs:0.0002, QQ:0.0005, K2s:0.0048, K4s:0.0006, K8s:0.0033, K9s:0.0006, KTs:0.0225, KJs:0.0005, KK:0.9779, AKo:0.8164, A2s:0.1697, A3s:0.3454, A4s:0.2858, A5s:0.4984, A6s:0.0349, A7s:0.2441, A8s:0.038, A9s:0.1041, ATs:0.442, AJs:0.0104, AQs:0.003, AKs:0.4615, AA:0.0175"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@8.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.1055, 44:0.1313, 54s:0.0752, 55:0.2876, 66:0.3882, 76s:0.0604, 77:0.4086, 88:0.072, 99:0.0145, T8s:0.0002, TT:0.0028, JJ:0.0421, QTs:0.0002, QQ:0.7279, KTs:0.0085, KJs:0.0454, KQs:0.0688, A5s:0.263, A7s:0.0795, A9s:0.0512, ATs:0.0693, AJs:0.1378, AQs:0.9143"
      },
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "K2o:0.3976, A2o:0.1415, K3o:0.4646, A3o:0.0585, K4o:0.4904, A4o:0.0532, K5o:0.2612, A5o:0.0589, K6o:0.4008, A6o:0.2003, K7o:0.3925, A7o:0.0615, 88:0.0019, K8o:0.3792, A8o:0.2513, K9o:0.4257, A9o:0.1462, TT:0.0266, KTo:0.6024, ATo:0.1401, KJo:0.216, AJo:0.0059, K2s:0.4749, K3s:0.5863, K4s:0.3432, K5s:0.2843, K6s:0.5505, K7s:0.4891, K8s:0.3021, K9s:0.2815, KTs:0.4256, KJs:0.298, KK:0.8929, AKo:0.95, A2s:0.1228, A3s:0.0539, A4s:0.1681, A5s:0.0758, A6s:0.1303, A7s:0.0554, A8s:0.2393, A9s:0.033, ATs:0.1871, AJs:0.0177, AKs:0.9654, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0016, A2o:0.0001, 32s:0.0001, 33:0.0011, A3o:0.0002, A4o:0.0002, 53s:0.0001, 55:0.0001, 63s:0.0003, 66:0.1684, A6o:0.0001, 76s:0.0001, 77:0.0322, 85s:0.0002, 88:0.1591, 99:0.0395, A9o:0.0001, TT:0.0349, JJ:0.4321, Q4s:0.0001, Q5s:0.0001, QQ:0.2469, K2s:0.0075, K3s:0.0001, K4s:0.0001, K5s:0.0002, K6s:0.0001, K9s:0.0005, KTs:0.0179, KJs:0.0124, KQs:0.0027, KK:0.1071, AKo:0.05, A2s:0.0051, A3s:0.0001, A4s:0.0018, A5s:0.0064, A6s:0.0001, A7s:0.0045, A8s:0.0042, A9s:0.0014, ATs:0.0098, AJs:0.0004, AQs:0.0056, AKs:0.0346"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@8.0",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "65s:0.0082, 66:0.0004, TT:0.0247, JJ:0.0248, AJo:0.0041, Q8s:0.0001, QQ:0.0145, KK:0.0307, AKo:0.0491, A2s:0.0138, A3s:0.0004, A4s:0.0369, A8s:0.0001, AJs:0.3334, AKs:0.5673, AA:0.5007"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0176, 55:0.0123, A5o:0.008, 63s:0.0004, 66:0.0853, 76s:0.0006, 77:0.0001, 82s:0.001, 83s:0.0003, 85s:0.0001, 88:0.029, 97s:0.0106, 98s:0.0032, 99:0.0018, T6s:0.0003, J7s:0.0046, J8s:0.0007, JJ:0.0469, QJs:0.0468, QQ:0.0882, K2s:0.0029, K3s:0.1903, K5s:0.0248, K6s:0.0013, KTs:0.0583, KJs:0.0192, KQs:0.0001, KK:0.9692, AKo:0.9411, A2s:0.0951, A3s:0.208, A4s:0.0218, A5s:0.2063, A7s:0.1945, A8s:0.0015, A9s:0.0001, ATs:0.2448, AJs:0.0665, AQs:0.0184, AKs:0.3673, AA:0.4993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@8.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A4o:0.0249, A5o:0.0143, K7o:0.0097, A7o:0.0825, A8o:0.009, A9o:0.0025, T7s:0.0001, ATo:0.013, JJ:0.0005, AJo:0.0074, Q8s:0.0108, QQ:0.0151, K4s:0.0003, K8s:0.0039, KK:0.0756, AKo:0.266, A2s:0.0049, A3s:0.0116, A5s:0.0311, A6s:0.0574, A7s:0.0536, A8s:0.1669, A9s:0.0762, AJs:0.1579, AQs:0.0444, AKs:0.1305, AA:0.8635"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1173, 33:0.0205, 42s:0.0001, A5o:0.0816, 77:0.0148, 88:0.0959, T7s:0.0002, TT:0.0008, J4s:0.0001, JJ:0.0985, Q6s:0.0003, QTs:0.0001, QJs:0.0001, K3s:0.0031, K5s:0.072, K8s:0.0121, K9s:0.0064, KTs:0.0131, KQs:0.0018, KK:0.9243, AKo:0.729, A2s:0.0051, A3s:0.0635, A4s:0.0874, A6s:0.0446, A7s:0.1259, A8s:0.0752, A9s:0.4355, ATs:0.0006, AJs:0.0203, AQs:0.0385, AKs:0.8679, AA:0.1365"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:3BET@8.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 13.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 13.9bb",
        "min": 0.0001,
        "range": "A2o:0.0052, K3o:0.0129, 44:0.0003, K5o:0.011, A5o:0.1023, 64s:0.0003, 66:0.0001, K7o:0.0099, A7o:0.0159, A8o:0.1406, 98s:0.0002, A9o:0.0398, TT:0.0014, JJ:0.0021, AJo:0.0318, Q6s:0.0034, QQ:0.008, K2s:0.2266, K6s:0.1105, K9s:0.1292, KTs:0.0386, KK:0.6113, AKo:0.5202, A2s:0.0574, A3s:0.0449, A4s:0.1361, A5s:0.0857, A6s:0.6002, A7s:0.0209, A8s:0.0011, A9s:0.1172, ATs:0.0054, AJs:0.0279, AQs:0.0004, AKs:0.8439, AA:0.9872"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0259, A3o:0.0005, 53s:0.0004, 65s:0.0001, 74s:0.0001, 88:0.0003, T7s:0.0005, TT:0.0003, J8s:0.0033, JJ:0.0022, Q7s:0.0005, Q8s:0.0002, QJs:0.0001, QQ:0.0035, K2s:0.0037, K8s:0.0054, KQs:0.0001, KK:0.3887, AKo:0.4776, A2s:0.0394, A3s:0.0149, A5s:0.0008, A7s:0.0008, A8s:0.0003, A9s:0.0159, AQs:0.0018, AKs:0.1551, AA:0.0128"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:CALL@2.1",
    "heroPos": "BTN",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4271, 52o:0.0001, 62o:0.0011, 82o:0.0001, T2o:0.0001, Q2o:0.0001, 33:0.1396, 53o:0.0001, Q3o:0.0001, K3o:0.0002, 42s:0.0013, 43s:0.0006, 44:0.2421, 64o:0.0002, 74o:0.0001, 94o:0.0003, J4o:0.0002, 52s:0.0366, 53s:0.0051, 54s:0.0003, 55:0.0015, 75o:0.0001, 95o:0.0001, Q5o:0.0003, K5o:0.0004, 62s:0.0002, 63s:0.0003, 64s:0.0006, 65s:0.0001, 66:0.2256, 76o:0.0009, K6o:0.0001, A6o:0.001, 72s:0.0003, 73s:0.0003, 74s:0.0001, 75s:0.5597, 76s:0.0003, 77:0.1925, 97o:0.0003, T7o:0.0002, J7o:0.0001, Q7o:0.0007, 83s:0.0002, 85s:0.0002, 87s:0.0133, 88:0.3002, T8o:0.0002, Q8o:0.0002, K8o:0.0014, A8o:0.0001, 92s:0.0001, 93s:0.0038, 94s:0.0004, 95s:0.0004, 96s:0.0001, 98s:0.001, 99:0.0001, Q9o:0.0001, A9o:0.0001, T2s:0.0001, T4s:0.073, T6s:0.0001, T7s:0.0003, T8s:0.0002, T9s:0.0005, TT:0.0008, QTo:0.0001, KTo:0.0002, ATo:0.0003, J2s:0.003, J3s:0.0005, J4s:0.0005, J5s:0.0005, J6s:0.0092, J7s:0.0004, J8s:0.0003, J9s:0.0002, JTs:0.0031, JJ:0.0672, KJo:0.0006, Q2s:0.0002, Q3s:0.002, Q4s:0.0002, Q5s:0.0009, Q7s:0.0005, Q8s:0.0006, Q9s:0.0003, QTs:0.0014, QJs:0.0003, QQ:0.0885, AQo:0.0005, K2s:0.0008, K3s:0.0002, K4s:0.2694, K5s:0.0001, K6s:0.2631, K7s:0.0042, K8s:0.3668, K9s:0.0008, KJs:0.0002, KQs:0.0224, KK:0.0033, AKo:0.4648, A2s:0.0029, A3s:0.0007, A4s:0.0206, A5s:0.0078, A6s:0.0076, A7s:0.0284, A8s:0.0282, A9s:0.0003, ATs:0.0004, AJs:0.0032, AQs:0.0065, AKs:0.0018, AA:0.0617"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0745, K3o:0.0109, 43s:0.0271, 52s:0.0001, 53s:0.0058, Q5o:0.0023, 63s:0.0001, Q6o:0.0044, A6o:0.0511, 74s:0.067, 76s:0.0067, 77:0.0729, 85s:0.0005, 87s:0.0386, 88:0.0514, K8o:0.0001, A8o:0.0033, 92s:0.0001, 93s:0.0689, 96s:0.0004, 97s:0.0004, 99:0.0002, T5s:0.0001, T7s:0.0523, T9s:0.0012, TT:0.0079, J6s:0.0001, J8s:0.0047, JJ:0.2394, AJo:0.0001, Q2s:0.01, Q5s:0.0553, Q6s:0.0001, Q7s:0.0758, QTs:0.0049, QQ:0.7441, KQo:0.4396, AQo:0.4513, K3s:0.2192, K4s:0.0008, K5s:0.0461, KJs:0.3849, KQs:0.461, KK:0.5971, AKo:0.2102, A3s:0.0276, A4s:0.0002, A5s:0.0043, A6s:0.0307, A7s:0.0183, A8s:0.0001, ATs:0.0004, AJs:0.3359, AQs:0.168, AKs:0.3165, AA:0.6948"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0032, 43s:0.1394, 44:0.0038, 53s:0.0006, 54s:0.0325, 63s:0.0886, 66:0.0002, A6o:0.0001, 75s:0.0056, J7o:0.0025, 88:0.0056, A8o:0.0001, 92s:0.0001, 95s:0.1038, 96s:0.0021, 97s:0.001, 99:0.0003, Q9o:0.0055, T9s:0.0001, J3s:0.0001, J6s:0.0001, J8s:0.0002, J9s:0.0016, JTs:0.0035, JJ:0.0487, KJo:0.0034, AJo:0.0001, Q2s:0.1299, Q3s:0.002, Q4s:0.0053, Q6s:0.0057, Q8s:0.0048, QTs:0.0546, QJs:0.0001, QQ:0.1655, KQo:0.2215, AQo:0.0966, K2s:0.0146, K4s:0.0358, K5s:0.0135, K7s:0.0629, K8s:0.0313, KJs:0.2336, KQs:0.3274, KK:0.3994, AKo:0.219, A2s:0.0143, A3s:0.0006, A4s:0.0331, A5s:0.0032, A6s:0.0005, A8s:0.0001, A9s:0.0002, ATs:0.4079, AJs:0.0011, AQs:0.3255, AKs:0.4785, AA:0.2435"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:CALL@2.1",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.7696, 72o:0.0001, 92o:0.0002, J2o:0.0008, Q2o:0.0001, A2o:0.0004, 33:0.5038, 43o:0.0002, 83o:0.0001, 93o:0.0002, J3o:0.0008, A3o:0.0002, 42s:0.0015, 43s:0.0005, 44:0.007, 64o:0.0004, 94o:0.0001, T4o:0.0005, Q4o:0.0002, A4o:0.0017, 52s:0.0056, 53s:0.0015, 54s:0.0005, 55:0.002, 75o:0.0007, 85o:0.0003, J5o:0.0001, Q5o:0.0001, K5o:0.0004, A5o:0.0001, 62s:0.0021, 64s:0.1118, 65s:0.0711, 66:0.0167, 76o:0.0008, 96o:0.0001, Q6o:0.0003, A6o:0.0005, 73s:0.0053, 75s:0.0001, 76s:0.0302, 77:0.0112, 97o:0.0003, T7o:0.0006, Q7o:0.0002, A7o:0.0001, 82s:0.0001, 83s:0.0001, 84s:0.0001, 85s:0.0009, 86s:0.0001, 87s:0.0013, 88:0.062, J8o:0.0001, Q8o:0.0001, K8o:0.1658, 92s:0.0002, 93s:0.0009, 95s:0.1477, 96s:0.0012, 98s:0.0001, 99:0.1224, T9o:0.0001, Q9o:0.0001, K9o:0.0002, T2s:0.0035, T3s:0.0003, T4s:0.0122, T6s:0.3526, T7s:0.0051, T8s:0.0006, T9s:0.0007, TT:0.4835, JTo:0.0001, KTo:0.0001, J2s:0.0002, J3s:0.4036, J4s:0.0161, J5s:0.0199, J6s:0.0009, J7s:0.0001, J8s:0.0544, J9s:0.0008, JTs:0.0005, JJ:0.0368, AJo:0.0011, Q2s:0.0607, Q3s:0.0782, Q4s:0.0001, Q5s:0.0003, Q6s:0.0005, Q7s:0.0013, Q8s:0.0009, QTs:0.0001, QJs:0.0206, QQ:0.0978, AQo:0.0008, K2s:0.0018, K3s:0.0005, K4s:0.0009, K5s:0.0034, K6s:0.0002, K7s:0.0002, K8s:0.2122, K9s:0.0024, KTs:0.0047, KJs:0.0003, KQs:0.0658, KK:0.0042, AKo:0.0001, A2s:0.0001, A3s:0.0024, A4s:0.0451, A5s:0.0003, A6s:0.0732, A7s:0.0002, A8s:0.0966, A9s:0.0003, ATs:0.2798, AJs:0.0578, AQs:0.0038, AKs:0.0392, AA:0.0194"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "T2o:0.0022, A2o:0.0001, 32s:0.0186, 33:0.0092, K4o:0.0015, 52s:0.0001, 54s:0.0001, 55:0.0382, 64s:0.0447, 65s:0.0006, 96o:0.0053, K6o:0.0001, 73s:0.0001, 75s:0.0001, 76s:0.0365, 77:0.0127, K7o:0.0176, 82s:0.1228, 84s:0.0001, 86s:0.0006, 87s:0.0051, 88:0.0042, A8o:0.0001, 92s:0.0002, 94s:0.0006, 95s:0.0128, 99:0.001, T3s:0.0001, T5s:0.0001, T7s:0.0066, ATo:0.0009, J4s:0.0594, J6s:0.0002, J7s:0.0001, J8s:0.0009, J9s:0.0004, JTs:0.0004, JJ:0.1603, AJo:0.0202, Q2s:0.0532, Q3s:0.0033, Q4s:0.0001, Q5s:0.0085, Q9s:0.0001, QTs:0.1548, QJs:0.0559, QQ:0.5956, KQo:0.2595, AQo:0.6106, K3s:0.0004, K6s:0.0016, K8s:0.0317, K9s:0.1261, KTs:0.0809, KK:0.3195, AKo:0.05, A3s:0.0003, A4s:0.2066, A6s:0.0003, A8s:0.0001, A9s:0.0466, ATs:0.0188, AJs:0.0791, AQs:0.1413, AKs:0.0283, AA:0.7689"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0302, A2o:0.0999, A3o:0.0314, 42s:0.0042, 43s:0.0002, K4o:0.1787, A4o:0.0136, 52s:0.0097, 54s:0.1381, 62s:0.0009, 64s:0.1319, 65s:0.0751, 75s:0.0001, 76s:0.1302, 77:0.002, 87s:0.0003, 88:0.0312, K8o:0.0185, 95s:0.0075, 99:0.1366, T5s:0.0004, T6s:0.0016, T8s:0.0001, T9s:0.0096, QTo:0.0014, KTo:0.0681, ATo:0.0136, J2s:0.0001, J4s:0.0035, J9s:0.0257, JTs:0.0021, JJ:0.2423, AJo:0.0448, Q2s:0.0103, Q3s:0.0059, Q4s:0.0001, Q5s:0.0001, Q6s:0.0055, QJs:0.0286, QQ:0.3065, KQo:0.106, K2s:0.648, K3s:0.0983, K4s:0.4394, K5s:0.0371, K6s:0.0981, K7s:0.6575, K8s:0.0038, K9s:0.6556, KTs:0.6323, KJs:0.375, KQs:0.6159, KK:0.6759, AKo:0.7418, A2s:0.3491, A3s:0.005, A4s:0.2796, A5s:0.0005, A6s:0.054, A8s:0.2245, ATs:0.0043, AJs:0.0032, AQs:0.8443, AKs:0.7923, AA:0.2115"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|CO:CALL@2.1",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.4878, 52o:0.0001, 72o:0.0002, T2o:0.0004, K2o:0.001, A2o:0.0001, 32s:0.0076, 33:0.8922, 43o:0.0002, 53o:0.0001, T3o:0.0001, Q3o:0.004, K3o:0.0001, A3o:0.0002, 42s:0.0024, 43s:0.0004, 44:0.2359, 54o:0.0002, 64o:0.1958, 74o:0.0001, 94o:0.0005, Q4o:0.0001, A4o:0.0001, 52s:0.0003, 53s:0.0005, 54s:0.0039, 55:0.1313, 65o:0.0003, 75o:0.0001, T5o:0.0001, J5o:0.0001, Q5o:0.0005, A5o:0.0001, 62s:0.0012, 63s:0.0013, 64s:0.4901, 65s:0.0003, 66:0.0004, 76o:0.0001, 86o:0.0001, T6o:0.0012, J6o:0.0001, Q6o:0.0002, K6o:0.0001, 72s:0.0013, 73s:0.0021, 75s:0.0009, 77:0.0007, 87o:0.0017, 97o:0.0023, J7o:0.0004, Q7o:0.0005, K7o:0.0001, A7o:0.0003, 83s:0.0003, 84s:0.0017, 85s:0.004, 87s:0.0003, 88:0.537, 98o:0.0043, T8o:0.0009, J8o:0.0002, Q8o:0.0016, K8o:0.0012, A8o:0.0011, 92s:0.0876, 93s:0.0002, 94s:0.0008, 95s:0.0603, 96s:0.0001, 97s:0.0045, 98s:0.0005, 99:0.3441, J9o:0.0017, K9o:0.0005, A9o:0.0002, T2s:0.0002, T3s:0.0007, T4s:0.0005, T5s:0.0004, T6s:0.0022, T7s:0.0001, T8s:0.0032, T9s:0.0043, TT:0.0693, JTo:0.0002, QTo:0.0002, KTo:0.0001, ATo:0.0001, J2s:0.0025, J3s:0.0155, J4s:0.005, J5s:0.1591, J6s:0.0823, J7s:0.0062, J8s:0.0052, J9s:0.0012, JTs:0.0015, JJ:0.6072, QJo:0.0024, KJo:0.0001, AJo:0.0003, Q2s:0.0808, Q3s:0.0284, Q4s:0.0138, Q5s:0.0088, Q6s:0.0073, Q7s:0.6447, Q8s:0.0006, Q9s:0.0085, QTs:0.001, QJs:0.008, QQ:0.0072, AQo:0.6252, K2s:0.0037, K3s:0.0032, K4s:0.1413, K5s:0.0363, K6s:0.0002, K7s:0.3068, K8s:0.002, K9s:0.0725, KTs:0.0923, KJs:0.0004, KQs:0.0168, KK:0.0039, AKo:0.0172, A2s:0.3828, A3s:0.0002, A4s:0.0304, A6s:0.007, A7s:0.0002, A8s:0.0404, A9s:0.0002, ATs:0.0006, AQs:0.3847, AKs:0.2497, AA:0.0048"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "22:0.0002, 92o:0.0018, T2o:0.0154, Q2o:0.1457, K2o:0.0012, A2o:0.1728, Q3o:0.0002, A3o:0.0001, 43s:0.0001, 53s:0.0005, 54s:0.208, 55:0.0001, A5o:0.0476, 63s:0.0336, 64s:0.0017, 65s:0.0005, K6o:0.0504, A6o:0.0001, 72s:0.0085, 76s:0.0306, 87o:0.0073, 84s:0.0009, 85s:0.0001, 88:0.0466, 98o:0.0284, A8o:0.0001, 93s:0.0193, 95s:0.0002, 99:0.0009, T3s:0.0003, T5s:0.0001, T9s:0.0001, TT:0.0335, QTo:0.041, J3s:0.0008, J4s:0.0017, J6s:0.0284, J7s:0.123, J8s:0.0563, J9s:0.0001, JTs:0.0001, JJ:0.0928, KJo:0.0891, AJo:0.0515, Q2s:0.0048, Q3s:0.0293, Q5s:0.0002, Q8s:0.181, Q9s:0.0006, QTs:0.0003, QJs:0.1753, QQ:0.9173, KQo:0.2051, AQo:0.0757, K2s:0.2897, K3s:0.0634, K4s:0.0002, K6s:0.0003, K7s:0.0108, K8s:0.0261, K9s:0.0677, KTs:0.0006, KJs:0.0715, KQs:0.2025, KK:0.4911, AKo:0.0433, A2s:0.0003, A3s:0.0004, A4s:0.0075, A6s:0.0164, A8s:0.0001, ATs:0.0387, AJs:0.2346, AQs:0.1729, AKs:0.4792, AA:0.9244"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0831, 32s:0.094, A3o:0.1013, 42s:0.0511, 64s:0.0114, 65s:0.0717, 75s:0.0001, 99:0.0056, J9o:0.0001, T7s:0.0006, T9s:0.0056, TT:0.0006, KTo:0.1297, J7s:0.0012, J8s:0.0001, J9s:0.012, JJ:0.024, QJo:0.0091, AJo:0.0003, Q2s:0.0009, Q5s:0.0007, Q7s:0.0082, Q8s:0.0002, QTs:0.0002, QJs:0.1265, QQ:0.0645, KQo:0.1074, AQo:0.0711, K3s:0.3197, K4s:0.1894, K5s:0.4118, K7s:0.2455, K8s:0.0626, K9s:0.1562, KTs:0.3181, KJs:0.2297, KQs:0.0285, KK:0.5049, AKo:0.8714, A2s:0.1759, A3s:0.1781, A4s:0.5464, A5s:0.0002, A8s:0.2313, ATs:0.3525, AJs:0.0362, AQs:0.0753, AKs:0.238, AA:0.0708"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.1673, KK, AKo:0.9804, AKs:0.9668, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.2531, KK, AKo:0.9745, AKs:0.9949, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0001, QQ:0.7278, KTs:0.0001, KK, AKo:0.0615, A4s:0.0001, AQs:0.0001, AKs:0.655, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0044, 76s:0.5152, 77:0.0719, 87s:0.0001, 88:0.0402, 99:0.0864, TT:0.0005, J9s:0.0008, JJ:0.0002, QQ:0.2734, AQo:0.1437, K7s:0.0061, KQs:0.0002, KK:0.1992, AKo:0.0888, A4s:0.0016, A5s:0.002, A6s:0.0361, A8s:0.0002, A9s:0.0015, ATs:0.003, AQs:0.3846, AKs:0.0565, AA:0.0049"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0176, 33:0.0031, A3o:0.0479, 42s:0.0001, A4o:0.0689, 53s:0.0001, 54s:0.0001, A5o:0.0703, 62s:0.0001, 63s:0.0008, 66:0.0039, A6o:0.0178, 72s:0.0004, 77:0.033, A7o:0.0019, 85s:0.0009, A8o:0.0735, 94s:0.0001, 96s:0.0011, 97s:0.0001, 99:0.083, A9o:0.1113, T2s:0.0002, T5s:0.0002, T9s:0.0003, TT:0.1092, ATo:0.0187, J3s:0.0001, J5s:0.0004, J7s:0.0003, JJ:0.0021, KJo:0.0005, AJo:0.0001, Q5s:0.0002, Q7s:0.0008, Q8s:0.0002, QTs:0.0002, QQ:0.0019, KQo:0.0015, AQo:0.1368, K7s:0.0001, K9s:0.0001, KTs:0.0001, KJs:0.137, KK:0.0004, AKo:0.1898, A2s:0.0914, A3s:0.0721, A4s:0.0505, A5s:0.0539, A6s:0.0241, A7s:0.0477, A8s:0.0173, A9s:0.2024, ATs:0.1672, AJs:0.0645, AQs:0.2325, AKs:0.2034, AA:0.9858"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0002, 33:0.0001, A3o:0.0739, 44:0.0026, A4o:0.068, 54s:0.0151, 55:0.0089, A5o:0.0331, 62s:0.0004, 63s:0.0015, 66:0.0102, A6o:0.0625, 76s:0.0597, 77:0.0049, 85s:0.0013, 86s:0.0046, 87s:0.0006, 88:0.0002, A8o:0.0022, 92s:0.0001, 93s:0.0001, 95s:0.0001, 96s:0.003, 97s:0.0001, 98s:0.0061, 99:0.0135, A9o:0.0088, T6s:0.0051, T8s:0.0003, T9s:0.0034, TT:0.0038, ATo:0.0417, J3s:0.0001, J6s:0.0006, J8s:0.0058, J9s:0.0028, JTs:0.0012, JJ:0.0134, KJo:0.0028, AJo:0.0019, Q2s:0.0001, Q6s:0.0003, Q7s:0.0001, QJs:0.0001, QQ:0.011, K2s:0.0037, K3s:0.04, K4s:0.0002, K6s:0.0378, K7s:0.0443, K8s:0.0454, K9s:0.0318, KTs:0.1179, KJs:0.0044, KQs:0.0007, KK:0.8004, AKo:0.7183, A2s:0.2868, A3s:0.643, A4s:0.1011, A5s:0.5943, A6s:0.1261, A7s:0.8718, A8s:0.4152, A9s:0.4585, ATs:0.3902, AJs:0.2841, AQs:0.0779, AKs:0.7398, AA:0.0094"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@7.0",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0613, 43s:0.2885, 44:0.0101, 53s:0.117, 54s:0.1214, 55:0.0391, 64s:0.0265, 65s:0.3575, 66:0.6338, 76s:0.0402, 77:0.7364, 86s:0.0364, 87s:0.027, 88:0.3476, 96s:0.0002, 97s:0.0004, 98s:0.0268, 99:0.285, T7s:0.0001, TT:0.0028, ATo:0.0001, JJ:0.1469, AJo:0.0015, QQ:0.7307, AQo:0.289, K6s:0.1467, K7s:0.0096, KTs:0.1033, KJs:0.0707, KQs:0.0038, KK:0.5114, A2s:0.0008, A3s:0.0094, A4s:0.5589, A5s:0.134, A6s:0.0001, A7s:0.0501, A8s:0.1552, A9s:0.1525, ATs:0.5531, AJs:0.1378, AQs:0.5648, AKs:0.0573"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "K3o:0.0001, 66:0.0001, K8o:0.0012, K9o:0.0011, KTo:0.0011, KJo:0.0007, K3s:0.0001, K6s:0.0004, K8s:0.0023, K9s:0.0034, KJs:0.0017, KK:0.0043, AKs:0.002, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.0073, A3o:0.053, A4o:0.067, 55:0.0005, A5o:0.054, 66:0.0004, A7o:0.0712, 87s:0.0006, 88:0.0008, A8o:0.0454, 98s:0.0003, 99:0.0013, A9o:0.0004, TT:0.0004, ATo:0.0548, J9s:0.0001, JJ:0.1326, AJo:0.0159, QJs:0.0002, QQ:0.0444, AQo:0.3033, K6s:0.0006, K7s:0.0001, K8s:0.0001, KTs:0.107, KJs:0.073, KQs:0.0009, KK:0.4843, AKo, A2s:0.2609, A3s:0.3505, A4s:0.2962, A5s:0.1083, A6s:0.2149, A7s:0.2612, A8s:0.2823, A9s:0.26, ATs:0.228, AJs:0.2418, AQs:0.4197, AKs:0.9406"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:3BET@7.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "52s:0.0001, 66:0.0005, A6o:0.1107, 77:0.0037, 82s:0.0001, 88:0.0002, A8o:0.0112, 97s:0.0001, 98s:0.0203, A9o:0.2044, TT:0.0631, ATo:0.0051, J4s:0.0006, JJ:0.0165, KJo:0.0003, Q3s:0.0045, Q7s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0192, K7s:0.0004, KQs:0.0104, KK:0.1183, AKo:0.1044, A2s:0.0034, A3s:0.0216, A4s:0.0006, A7s:0.0079, A8s:0.0767, A9s:0.1041, ATs:0.1164, AJs:0.1374, AQs:0.1292, AKs:0.0175, AA:0.9845"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0019, 43s:0.0107, A4o:0.291, 52s:0.0001, 53s:0.0129, A5o:0.1787, 66:0.0033, 76s:0.0005, 77:0.0063, K7o:0.0005, 83s:0.0001, 85s:0.0003, 86s:0.0003, 87s:0.0598, 95s:0.0004, 98s:0.0014, 99:0.0016, T2s:0.0097, T8s:0.0129, TT:0.0041, ATo:0.0004, J3s:0.0008, J4s:0.0007, J9s:0.0067, JTs:0.001, JJ:0.0324, AJo:0.0001, Q6s:0.0003, QTs:0.0001, QQ:0.0429, AQo:0.0039, K4s:0.0053, K5s:0.1981, K7s:0.0166, K8s:0.3593, K9s:0.1436, KTs:0.3183, KJs:0.1418, KQs:0.0665, KK:0.8817, AKo:0.8234, A2s:0.133, A3s:0.3296, A4s:0.8816, A5s:0.0037, A6s:0.4376, A7s:0.3995, A8s:0.0031, A9s:0.3826, ATs:0.0156, AJs:0.0084, AKs:0.9821, AA:0.0155"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|HJ:CALL@2.1|SB:CALL@1.6",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0466, 32o:0.0003, 52o:0.0006, 72o:0.0001, 92o:0.0001, T2o:0.0013, Q2o:0.002, K2o:0.0014, A2o:0.0034, 32s:0.0002, 33:0.7496, 53o:0.0001, 63o:0.0002, 93o:0.0003, A3o:0.0002, 42s:0.0023, 43s:0.0001, 44:0.9304, 64o:0.0005, 94o:0.0014, K4o:0.0002, A4o:0.0692, 52s:0.0145, 53s:0.0001, 54s:0.0676, 55:0.0327, 65o:0.0003, 75o:0.0006, 85o:0.0001, Q5o:0.0001, A5o:0.0021, 62s:0.0002, 63s:0.0896, 65s:0.1318, 66:0.5631, 76o:0.0002, T6o:0.0001, J6o:0.0026, A6o:0.0001, 72s:0.0271, 73s:0.0085, 74s:0.3784, 75s:0.3821, 77:0.6979, 97o:0.0011, A7o:0.0004, 82s:0.0001, 83s:0.0001, 84s:0.0013, 86s:0.0003, 87s:0.0085, 88:0.8491, A8o:0.0002, 92s:0.0037, 94s:0.0024, 96s:0.0005, 97s:0.0041, 98s:0.0174, 99:0.02, A9o:0.0009, T2s:0.0002, T3s:0.001, T4s:0.0003, T5s:0.0016, T6s:0.0054, T7s:0.5198, T8s:0.0012, T9s:0.0318, TT:0.3059, J2s:0.0004, J3s:0.0126, J4s:0.0015, J5s:0.0158, J6s:0.0006, J7s:0.0007, J8s:0.0029, J9s:0.0012, JTs:0.0898, JJ:0.0712, QJo:0.0002, KJo:0.0001, Q2s:0.0003, Q3s:0.0475, Q4s:0.5119, Q5s:0.2623, Q6s:0.0046, Q7s:0.0191, Q8s:0.0016, Q9s:0.0006, QTs:0.0019, QJs:0.0001, QQ:0.0001, KQo:0.0036, AQo:0.051, K2s:0.029, K3s:0.0009, K4s:0.0527, K6s:0.0011, K7s:0.0056, K8s:0.8155, KTs:0.0013, KJs:0.0154, KQs:0.105, KK:0.0013, AKo:0.0471, A2s:0.3166, A3s:0.4379, A4s:0.003, A5s:0.3489, A6s:0.229, A7s:0.5636, A8s:0.0825, A9s:0.0053, ATs:0.0222, AJs:0.159, AQs:0.0011, AKs:0.1125, AA:0.0001"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "Q2o:0.0086, 43s:0.014, 53s:0.1595, 95o:0.0017, A5o:0.0674, 65s:0.0002, K6o:0.0492, A6o:0.0001, 72s:0.0011, 74s:0.0077, 75s:0.0162, 76s:0.0089, 77:0.0017, A7o:0.0042, 82s:0.008, 83s:0.0001, 87s:0.0006, 88:0.0816, K8o:0.0971, A8o:0.003, 92s:0.0022, 95s:0.0086, 97s:0.0034, 98s:0.0105, 99:0.0093, K9o:0.0245, T4s:0.2539, T7s:0.023, T9s:0.0031, TT:0.2127, QTo:0.0516, KTo:0.0523, J2s:0.0002, J4s:0.0462, J6s:0.0061, J9s:0.0366, JTs:0.0003, JJ:0.1389, KJo:0.0523, AJo:0.0389, Q2s:0.2735, Q3s:0.0001, Q6s:0.3211, Q7s:0.0076, Q8s:0.0006, Q9s:0.0648, QTs:0.0737, QJs:0.1538, QQ:0.562, KQo:0.1066, AQo:0.2925, K3s:0.0075, K6s:0.1367, K7s:0.0014, KTs:0.0771, KJs:0.0783, KQs:0.0784, KK:0.1367, AKo:0.202, A2s:0.2517, A4s:0.0571, A5s:0.0873, A6s:0.0902, A8s:0.0826, A9s:0.1028, ATs:0.0182, AJs:0.0332, AQs:0.0897, AKs:0.0484, AA:0.9931"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, 32s:0.003, 33:0.0002, K3o:0.2694, A3o:0.1659, K4o:0.0567, 54s:0.0001, 55:0.0014, A5o:0.0528, 62s:0.0052, 63s:0.0581, 65s:0.1425, 66:0.0426, K6o:0.1124, 74s:0.0056, 75s:0.0133, 77:0.0069, K7o:0.1111, 82s:0.0003, 86s:0.1823, 87s:0.1032, 88:0.0185, K8o:0.0149, 94s:0.0002, 95s:0.0001, 96s:0.0001, 97s:0.0314, 98s:0.0016, 99:0.022, K9o:0.0051, T5s:0.0004, T7s:0.0001, T9s:0.0006, TT:0.0008, J4s:0.0001, J5s:0.0009, J9s:0.0035, JTs:0.0008, JJ:0.0306, KJo:0.0023, Q2s:0.0041, Q3s:0.0001, Q4s:0.0878, Q5s:0.0039, Q6s:0.0023, Q7s:0.1592, QTs:0.0493, QJs:0.0238, QQ:0.4378, KQo:0.5768, AQo:0.4413, K2s:0.0319, K3s:0.0006, K4s:0.3279, K5s:0.2597, K6s:0.6541, K7s:0.4705, K8s:0.0169, K9s:0.3291, KTs:0.2126, KJs:0.0004, KQs:0.3863, KK:0.862, AKo:0.7227, A2s:0.1193, A3s:0.0761, A4s:0.1017, A5s:0.006, A7s:0.0182, A8s:0.0286, A9s:0.0065, AJs:0.0168, AQs:0.8022, AKs:0.669, AA:0.0068"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@37.25|BB:CALL@36.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 54s:0.0001, 66:0.0001, 73s:0.0001, 74s:0.0005, 86s:0.0001, 93s:0.0001, 97s:0.0001, 99:0.0001, T4s:0.0001, TT:0.0001, JTs:0.0006, Q9s:0.0001, QQ:0.0002, K3s:0.0001, K8s:0.0006, K9s:0.0001, KTs:0.0001, KJs:0.0001, KK:0.0007, AKo:0.0001, A2s:0.0001, A9s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0013, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0001, 44:0.0001, 52s:0.0001, 65s:0.0002, A7o:0.0001, 86s:0.0004, 88:0.0001, 99:0.0001, T3s:0.0001, TT:0.0001, Q2s:0.0001, AQo:0.0002, K5s:0.0001, KQs:0.0001, KK:0.0775, A6s:0.0004, A7s:0.0058, ATs:0.0003, AQs:0.0002, AKs:0.0792, AA:0.0024"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "42s:0.0002, 43s:0.0001, A4o:0.0052, 55:0.0101, K5o:0.0001, A5o:0.0054, 65s:0.0003, A6o:0.0001, 73s:0.0001, 77:0.0002, 84s:0.0003, 87s:0.0003, 88:0.0001, 97s:0.0001, 99:0.0001, A9o:0.0002, T4s:0.0001, TT:0.0041, ATo:0.0001, J2s:0.0003, J8s:0.0009, Q5s:0.0001, Q9s:0.0002, QQ:0.0011, AQo:0.0001, K3s:0.0001, K6s:0.0002, KTs:0.0001, KQs:0.0001, KK:0.1622, AKo:0.7767, A2s:0.4227, A3s:0.0014, A7s:0.0171, A8s:0.0031, A9s:0.1632, ATs:0.0109, AJs:0.0271, AQs:0.1588, AKs:0.8361, AA:0.9976"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1855, A2o:0.0013, 33:0.4351, 43o:0.0002, 53o:0.0001, Q3o:0.0001, A3o:0.0021, 42s:0.0001, 43s:0.0356, 44:0.2905, 54o:0.0035, 64o:0.0053, A4o:0.0011, 52s:0.012, 53s:0.0001, 54s:0.4628, 55:0.7965, 65o:0.0183, T5o:0.0004, A5o:0.0131, 62s:0.0006, 63s:0.4147, 64s:0.4704, 65s:0.649, 66:0.3958, A6o:0.0062, 72s:0.0002, 73s:0.0048, 74s:0.0004, 75s:0.2961, 76s:0.5108, 77:0.9122, A7o:0.0009, 84s:0.0005, 86s:0.5085, 87s:0.1984, 88:0.923, T8o:0.0002, A8o:0.0005, 92s:0.0003, 93s:0.0015, 95s:0.0184, 96s:0.3903, 97s:0.0842, 98s:0.2709, 99:0.6127, J9o:0.0004, Q9o:0.0001, A9o:0.0055, T2s:0.0003, T5s:0.0002, T6s:0.0494, T7s:0.2392, T8s:0.0332, T9s:0.0108, TT:0.4243, QTo:0.0002, ATo:0.1228, J2s:0.0006, J3s:0.0029, J4s:0.0001, J5s:0.0321, J6s:0.041, J7s:0.0184, J8s:0.1573, J9s:0.2117, JTs:0.505, JJ:0.6781, QJo:0.0004, AJo:0.1688, Q2s:0.0003, Q3s:0.0025, Q5s:0.0002, Q6s:0.0002, Q8s:0.022, Q9s:0.0006, QTs:0.0576, QJs:0.0775, QQ:0.9578, AQo:0.5992, K2s:0.0001, K5s:0.0048, K6s:0.007, K7s:0.0022, K8s:0.0009, K9s:0.0161, KTs:0.0563, KJs:0.0714, KQs:0.0383, KK:0.5916, AKo:0.0662, A2s:0.0305, A3s:0.1044, A4s:0.0547, A5s:0.1715, A6s:0.0959, A7s:0.4744, A8s:0.5612, A9s:0.4624, ATs:0.3509, AJs:0.3347, AQs:0.9882, AKs:0.1535, AA:0.0462"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1141, T2o:0.0001, A2o:0.0499, 32s:0.0003, 33:0.0801, 43o:0.0003, A3o:0.0263, 42s:0.0005, 43s:0.0311, 44:0.3495, 54o:0.0001, 74o:0.0003, Q4o:0.0002, A4o:0.1266, 53s:0.0021, 54s:0.25, 55:0.1856, 85o:0.0002, A5o:0.0491, 63s:0.001, 64s:0.0029, 65s:0.0949, 66:0.5827, A6o:0.0683, 73s:0.0002, 74s:0.0005, 75s:0.003, 76s:0.0196, 77:0.0793, 87o:0.0002, J7o:0.0002, A7o:0.0419, 84s:0.0006, 85s:0.0006, 86s:0.0023, 87s:0.0818, 88:0.0298, 98o:0.0001, Q8o:0.0002, K8o:0.0002, A8o:0.0034, 97s:0.0053, 98s:0.0842, 99:0.1474, J9o:0.0001, Q9o:0.0001, A9o:0.0164, T2s:0.0004, T3s:0.0002, T5s:0.0031, T6s:0.0002, T7s:0.0001, T8s:0.0104, T9s:0.0104, TT:0.4703, JTo:0.0003, QTo:0.0003, ATo:0.0047, J3s:0.0024, J4s:0.0023, J5s:0.0002, J7s:0.0015, J8s:0.0076, J9s:0.0007, JTs:0.0099, JJ:0.2732, QJo:0.0001, KJo:0.0001, AJo:0.0548, Q3s:0.0006, Q4s:0.0003, Q5s:0.0004, Q6s:0.0003, Q7s:0.0005, Q8s:0.0007, QTs:0.0005, QJs:0.0003, QQ:0.004, KQo:0.0004, AQo:0.0041, K2s:0.0003, K3s:0.0005, K4s:0.0002, K6s:0.0002, K7s:0.0001, K8s:0.0001, K9s:0.0003, KTs:0.0295, KJs:0.005, KQs:0.0003, KK:0.3863, AKo:0.9338, A2s:0.403, A3s:0.5817, A4s:0.4044, A5s:0.624, A6s:0.7591, A7s:0.3283, A8s:0.33, A9s:0.3221, ATs:0.6358, AJs:0.5248, AQs:0.0117, AKs:0.846, AA:0.9538"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, T7s:0.0001, TT:0.0002, JJ:0.0002, QQ:0.0005, AQo:0.0001, K6s:0.0001, KQs:0.0001, KK:0.9992, AKo:0.0002, A3s:0.0001, A6s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0|BB:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, TT:0.0001, JJ:0.0002, QQ:0.0003, KK, AKo:0.4209, AQs:0.0001, AKs:0.9721, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0|LJ:4BET@11.9",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1547, 33:0.5144, A3o:0.0001, 42s:0.0004, 43s:0.0018, 44:0.9037, A4o:0.0005, 53s:0.0783, 54s:0.9352, 55:0.9995, 65o:0.0001, A5o:0.0017, 62s:0.0001, 63s:0.0549, 64s:0.4095, 65s:0.821, 66:0.9767, 72s:0.0009, 74s:0.0036, 75s:0.1971, 76s:0.5063, 77:0.9632, A7o:0.0005, 82s:0.0002, 84s:0.0001, 85s:0.0265, 86s:0.1576, 87s:0.4188, 88:0.8587, A8o:0.0003, 92s:0.0003, 93s:0.0004, 94s:0.001, 95s:0.0003, 97s:0.0609, 98s:0.6787, 99:0.9521, T9o:0.0001, A9o:0.0006, T2s:0.0002, T4s:0.0002, T6s:0.0002, T7s:0.041, T8s:0.2988, T9s:0.3065, TT:0.9705, QTo:0.0001, ATo:0.027, J6s:0.0008, J8s:0.0961, J9s:0.4803, JTs:0.1999, JJ:0.9214, KJo:0.0002, AJo:0.0952, Q2s:0.0006, Q5s:0.0003, Q6s:0.0005, Q7s:0.0001, Q8s:0.0002, Q9s:0.0001, QTs:0.0217, QJs:0.0402, QQ:0.9788, AQo:0.932, K4s:0.0001, K5s:0.0167, K6s:0.0009, K7s:0.0086, K8s:0.0104, K9s:0.002, KTs:0.0096, KJs:0.102, KQs:0.002, KK:0.7385, AKo:0.282, A2s:0.1993, A3s:0.012, A4s:0.0072, A5s:0.0256, A6s:0.2227, A7s:0.2651, A8s:0.1779, A9s:0.3368, ATs:0.7056, AJs:0.0697, AQs:0.7828, AKs:0.1269, AA:0.0447"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0099, A2o:0.0042, 33:0.0009, A3o:0.0009, 44:0.0163, A4o:0.0887, 54s:0.0094, 55:0.0001, A5o:0.0223, 63s:0.0002, 64s:0.0032, 65s:0.0087, 66:0.023, A6o:0.0006, 74s:0.0001, 76s:0.0217, 77:0.0007, A7o:0.0003, 86s:0.0038, 87s:0.0003, 88:0.1121, A8o:0.005, 97s:0.0005, 98s:0.0009, 99:0.0036, A9o:0.0011, T9s:0.0075, TT:0.0109, ATo:0.0158, J9s:0.0005, JTs:0.0003, JJ:0.0554, AJo:0.5039, QQ:0.0003, AQo:0.0679, K9s:0.0002, KTs:0.0001, KK:0.2615, AKo:0.718, A2s:0.6552, A3s:0.9862, A4s:0.9923, A5s:0.9738, A6s:0.6605, A7s:0.5808, A8s:0.8071, A9s:0.5649, ATs:0.2918, AJs:0.9303, AQs:0.2172, AKs:0.8731, AA:0.9553"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:3BET@7.0|LJ:4BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.4815, JJ:0.9998, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.9962, KK, AKo:0.9998, AQs:0.0352, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@37.25",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0022, TT:0.002, QQ, KK, AKo:0.9999, AQs:0.101, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0071, 55:0.3312, 65s:0.6564, 66:0.0893, 76s:0.199, 77:0.0194, 86s:0.0449, 87s:0.027, 88:0.117, 98s:0.0061, 99:0.0569, T9s:0.1023, TT:0.199, JJ:0.0402, QJs:0.0001, QQ:0.9067, AQo:0.355, K3s:0.0011, K5s:0.0257, K6s:0.0123, K7s:0.0137, K8s:0.0091, K9s:0.2176, KTs:0.4119, KJs:0.1122, KQs:0.277, KK:0.1341, A3s:0.0067, A4s:0.0838, A5s:0.0665, A6s:0.0001, A7s:0.0034, A8s:0.1032, A9s:0.0962, ATs:0.1039, AJs:0.0003, AQs:0.9976, AKs:0.0047, AA:0.0009"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "A2o:0.6259, A3o:0.0004, 44:0.0002, A4o:0.5548, A5o:0.2369, K6o:0.0002, A6o:0.3892, 74s:0.0001, 77:0.0001, K7o:0.0003, A7o:0.0319, A8o:0.1154, 94s:0.0001, 98s:0.0001, 99:0.0005, A9o:0.0059, T7s:0.0002, KTo:0.0001, ATo:0.0045, J6s:0.0001, JTs:0.001, KJo:0.0001, AJo:0.0413, Q3s:0.0001, Q4s:0.0001, Q5s:0.0003, Q6s:0.0002, QQ:0.0071, AQo:0.269, K3s:0.001, K4s:0.0509, K5s:0.0001, K6s:0.0002, K7s:0.0005, K8s:0.0011, K9s:0.0003, KK:0.0006, AKo:0.0571, A2s:0.327, A3s:0.2537, A4s:0.1181, A5s:0.1062, A6s:0.2051, A7s:0.017, A8s:0.0242, A9s:0.1112, ATs:0.1992, AJs:0.0081, AQs:0.0004, AKs:0.4468, AA:0.9991"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A3o:0.0015, 44:0.4138, A4o:0.0085, 55:0.039, A5o:0.0421, 65s:0.0012, 66:0.0004, 77:0.0004, 88:0.0056, 98s:0.0016, 99:0.0104, A9o:0.0013, T9s:0.0001, TT:0.0296, KTo:0.0039, ATo:0.0015, J3s:0.0001, JJ:0.0432, KJo:0.0025, AJo:0.0004, Q4s:0.0004, QJs:0.0001, QQ:0.0278, AQo:0.0028, K2s:0.0233, K3s:0.0137, K4s:0.0511, K5s:0.094, K6s:0.2153, K7s:0.0607, K8s:0.5838, K9s:0.4923, KTs:0.4186, KJs:0.808, KQs:0.1539, KK:0.8653, AKo:0.9429, A2s:0.4422, A3s:0.4305, A4s:0.5649, A5s:0.6856, A6s:0.0817, A7s:0.8337, A8s:0.7721, A9s:0.5667, ATs:0.4977, AJs:0.7133, AQs:0.0012, AKs:0.5484"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.1|SB:CALL@1.6|BB:3BET@7.0",
    "heroPos": "SB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 11.9bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0066, 55:0.0357, 66:0.4883, 77:0.5839, 86s:0.0001, 88:0.6238, 99:0.2786, TT:0.3032, JJ:0.9847, AJo:0.0001, QTs:0.0002, QQ:0.9943, AQo:0.8096, K2s:0.0026, K6s:0.0002, K9s:0.0031, KTs:0.4844, KJs:0.5985, KQs:0.9765, AKo:0.0002, A3s:0.1082, A4s:0.0001, A5s:0.4477, A6s:0.0236, A7s:0.2646, A8s:0.4187, A9s:0.2122, ATs:0.8811, AJs:0.304, AQs:0.9911, AKs:0.001"
      },
      {
        "action": "4bet 11.9bb",
        "min": 0.0001,
        "range": "Q3o:0.0001, A5o:0.0002, A9o:0.0001, T5s:0.0003, Q6s:0.0002, QTs:0.0001, QJs:0.0001, QQ:0.0012, KQo:0.0009, K8s:0.0001, KTs:0.0003, KJs:0.0002, KQs:0.0002, KK:0.1082, A3s:0.0001, A8s:0.0002, A9s:0.0005, AKs:0.001, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0004, 44:0.0002, 55:0.0001, A6o:0.0001, 77:0.0001, ATo:0.0002, J7s:0.0001, J9s:0.0001, JJ:0.0024, KJo:0.0001, AJo:0.0002, Q6s:0.0003, Q7s:0.0002, QTs:0.0002, QQ:0.0045, KQo:0.0001, AQo:0.004, K2s:0.0004, K3s:0.0001, K4s:0.0001, K5s:0.0001, K6s:0.0009, K7s:0.0001, K8s:0.0017, KJs:0.0018, KQs:0.0047, KK:0.8918, AKo:0.9998, A2s:0.0024, A3s:0.002, A4s:0.001, A5s:0.0004, A6s:0.0022, A7s:0.0025, A8s:0.0027, A9s:0.0004, ATs:0.0036, AJs:0.0006, AQs:0.0086, AKs:0.9981"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@4.0|SB:3BET@10.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
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
        "range": "22:0.0001, 42s:0.0003, 43s:0.3464, 44:0.1464, 54o:0.0158, K4o:0.0001, A4o:0.0002, 53s:0.7418, 54s:0.9846, 55:0.4881, A5o:0.0354, 64s:0.7728, 65s:0.9206, 66:0.9421, 76o:0.0006, K6o:0.0007, A6o:0.0006, 73s:0.0017, 74s:0.0875, 75s:0.8496, 76s:0.84, 77:0.4345, 87o:0.0003, K7o:0.0001, 85s:0.5429, 86s:0.5066, 87s:0.1895, 88:0.965, 98o:0.0308, T8o:0.0009, K8o:0.0001, A8o:0.0037, 95s:0.0788, 96s:0.9406, 97s:0.2668, 98s:0.9021, 99:0.9761, T9o:0.3889, J9o:0.0004, K9o:0.003, A9o:0.0042, T4s:0.0001, T5s:0.0003, T6s:0.0142, T7s:0.0866, T8s:0.4748, T9s:0.1551, TT:0.0821, JTo:0.2626, QTo:0.0029, KTo:0.5365, ATo:0.0246, J3s:0.0005, J7s:0.0546, J8s:0.7672, J9s:0.3448, JTs:0.1504, JJ:0.0013, QJo:0.0335, KJo:0.171, AJo:0.1632, Q4s:0.0005, Q5s:0.0013, Q6s:0.0001, Q7s:0.086, Q8s:0.7654, Q9s:0.7717, QTs:0.8156, QJs:0.8, QQ:0.9729, KQo:0.9254, AQo:0.5531, K2s:0.0093, K3s:0.1364, K4s:0.1398, K5s:0.652, K6s:0.0082, K7s:0.667, K8s:0.0024, K9s:0.9763, KTs:0.23, KJs:0.0177, KQs:0.2265, KK:0.0004, A2s:0.0007, A3s:0.007, A4s:0.0139, A5s:0.0088, A6s:0.173, A7s:0.0069, A8s:0.1114, A9s:0.5682, ATs:0.0789, AJs:0.5562, AQs:0.0603, AA:0.0327"
      },
      {
        "action": "4bet 16bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.5007, K3o:0.2696, A3o:0.9557, 43s:0.0001, K4o:0.2756, A4o:0.8418, 95o:0.0001, Q5o:0.0001, K5o:0.0099, A5o:0.4734, 63s:0.0002, 86o:0.0001, K6o:0.1352, A6o:0.9186, 73s:0.0013, 74s:0.0001, K7o:0.8228, A7o:0.9499, 85s:0.0001, 88:0.0001, K8o:0.3787, A8o:0.9306, 93s:0.0002, 98s:0.0001, K9o:0.0039, A9o:0.6686, T3s:0.0021, T8s:0.0004, QTo:0.0018, KTo:0.0128, ATo:0.1629, J3s:0.0007, J4s:0.0004, J7s:0.0034, J8s:0.0006, KJo:0.0829, AJo:0.3714, Q4s:0.0002, Q5s:0.0001, Q6s:0.0003, Q7s:0.0067, KQo:0.0037, AQo:0.3643, K2s:0.0004, K3s:0.1381, K4s:0.106, K5s:0.0045, K6s:0.0015, K7s:0.0003, K8s:0.0004, AKo:0.0145, A2s:0.0013, A3s:0.0403, A4s:0.0001, A6s:0.0029, A7s:0.0005, A8s:0.0019, ATs:0.0077, AJs:0.0335, AQs:0.4417, AKs:0.5543, AA:0.9673"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9996, K2o:0.0001, A2o:0.0059, 32s:0.0001, 33:0.9996, K3o:0.0002, A3o:0.0141, 42s:0.0014, 43s:0.0004, 44:0.8535, 54o:0.0005, K4o:0.0033, A4o:0.015, 53s:0.0003, 54s:0.0129, 55:0.5116, Q5o:0.0001, K5o:0.0001, A5o:0.4648, 62s:0.003, 63s:0.0008, 65s:0.0776, 66:0.0576, 76o:0.0018, K6o:0.0001, A6o:0.0144, 72s:0.0003, 73s:0.0051, 74s:0.0005, 75s:0.1147, 76s:0.1598, 77:0.5655, 87o:0.0001, K7o:0.0109, A7o:0.0475, 82s:0.0001, 85s:0.018, 86s:0.479, 87s:0.8089, 88:0.0347, K8o:0.0002, A8o:0.0641, 92s:0.0001, 93s:0.0002, 94s:0.0001, 95s:0.0125, 96s:0.0016, 97s:0.7279, 98s:0.0916, 99:0.0239, T9o:0.0024, K9o:0.0003, A9o:0.0089, T3s:0.0085, T4s:0.0009, T5s:0.0075, T6s:0.0022, T7s:0.7295, T8s:0.5171, T9s:0.8446, TT:0.9179, JTo:0.1567, QTo:0.0008, KTo:0.4499, ATo:0.8125, J2s:0.0001, J3s:0.0001, J5s:0.008, J7s:0.6463, J8s:0.2047, J9s:0.6363, JTs:0.8495, JJ:0.9987, KJo:0.7424, AJo:0.4653, Q3s:0.0001, Q4s:0.0003, Q5s:0.0001, Q6s:0.0001, Q7s:0.0006, Q8s:0.0033, Q9s:0.0183, QTs:0.1842, QJs:0.1985, QQ:0.0271, KQo:0.0708, AQo:0.0825, K2s:0.0626, K3s:0.6253, K4s:0.6618, K5s:0.3417, K6s:0.9774, K7s:0.3326, K8s:0.9926, K9s:0.0236, KTs:0.77, KJs:0.9823, KQs:0.7735, KK:0.9996, AKo:0.9855, A2s:0.9954, A3s:0.9497, A4s:0.9859, A5s:0.9912, A6s:0.8231, A7s:0.9925, A8s:0.8866, A9s:0.4318, ATs:0.9134, AJs:0.4103, AQs:0.498, AKs:0.4457"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@4.0|SB:3BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.7849, 88:0.9997, 99:0.9999, TT, JJ, AJo:0.0001, QQ, AQo:0.1788, KK, AKo, A8s:0.0002, ATs:0.0321, AJs:0.129, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.0|BB:3BET@7.5|SB:4BET@12.0",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1849, J2o:0.0007, Q2o:0.0278, K2o:0.0006, A2o:0.1924, 32s:0.3681, 33:0.0028, 43o:0.0213, 53o:0.1636, J3o:0.0431, K3o:0.2603, A3o:0.2165, 42s:0.2413, 43s:0.8365, 44:0.6365, 54o:0.6503, 64o:0.137, 84o:0.0004, K4o:0.0122, A4o:0.5142, 52s:0.6725, 53s:0.6155, 54s:0.8917, 55:0.6263, 65o:0.6769, 75o:0.1326, 85o:0.1168, 95o:0.003, T5o:0.1079, Q5o:0.2547, K5o:0.3113, A5o:0.4712, 62s:0.248, 63s:0.8151, 64s:0.8839, 65s:0.8686, 66:0.8778, 76o:0.169, 86o:0.1724, 96o:0.3021, T6o:0.2235, J6o:0.0127, Q6o:0.0628, K6o:0.3631, A6o:0.2748, 73s:0.1785, 74s:0.9832, 75s:0.9847, 76s:0.6238, 77:0.9821, 87o:0.1579, 97o:0.2815, T7o:0.232, J7o:0.0125, Q7o:0.0042, K7o:0.1051, A7o:0.668, 82s:0.4447, 83s:0.0562, 84s:0.8229, 85s:0.8299, 86s:0.8843, 87s:0.7974, 88:0.9074, 98o:0.9166, T8o:0.9777, J8o:0.9597, Q8o:0.2753, K8o:0.074, A8o:0.9176, 92s:0.9724, 93s:0.4518, 94s:0.7195, 95s:0.8529, 96s:0.9399, 97s:0.8162, 98s:0.9452, 99:0.9815, T9o:0.991, J9o:0.9572, Q9o:0.906, K9o:0.8537, A9o:0.9994, T2s:0.3653, T3s:0.7639, T4s:0.9547, T5s:0.7121, T6s:0.9104, T7s:0.8624, T8s:0.9903, T9s:0.9032, TT:0.9218, JTo:0.9972, QTo:0.9813, KTo:0.9875, ATo:0.9962, J2s:0.6602, J3s:0.9645, J4s:0.883, J5s:0.899, J6s:0.8778, J7s:0.9775, J8s:0.9707, J9s:0.9914, JTs:0.9828, JJ:0.9657, QJo:0.9891, KJo:0.992, AJo:0.997, Q2s:0.8889, Q3s:0.9312, Q4s:0.6728, Q5s:0.9123, Q6s:0.9445, Q7s:0.8723, Q8s:0.9796, Q9s:0.9955, QTs:0.9921, QJs:0.9899, QQ:0.9493, KQo:0.9854, AQo:0.957, K2s:0.3568, K3s:0.8731, K4s:0.666, K5s:0.8194, K6s:0.8817, K7s:0.6346, K8s:0.9907, K9s:0.8929, KTs:0.9591, KJs:0.9534, KQs:0.9735, KK:0.1917, A2s:0.3878, A3s:0.7244, A4s:0.9152, A5s:0.6087, A6s:0.2266, A7s:0.877, A8s:0.8894, A9s:0.9383, ATs:0.9953, AJs:0.983, AQs:0.9488, AKs:0.339, AA:0.6891"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.813, A2o:0.2082, 32s:0.0746, 33:0.9958, 53o:0.0452, K3o:0.0043, A3o:0.2489, 42s:0.0012, 43s:0.1271, 44:0.361, 54o:0.0155, 64o:0.0001, 84o:0.0001, J4o:0.0001, A4o:0.2463, 52s:0.123, 53s:0.3285, 54s:0.0718, 55:0.3726, 65o:0.198, 85o:0.0006, K5o:0.1147, A5o:0.5219, 62s:0.1635, 63s:0.066, 64s:0.104, 65s:0.1168, 66:0.1218, 76o:0.1429, 86o:0.0065, 96o:0.0008, J6o:0.0003, Q6o:0.0008, K6o:0.0308, A6o:0.2659, 72s:0.0003, 73s:0.0607, 74s:0.0061, 75s:0.0117, 76s:0.3373, 77:0.0169, 87o:0.0936, T7o:0.0002, J7o:0.0011, Q7o:0.0001, K7o:0.0035, A7o:0.0174, 82s:0.0402, 83s:0.1255, 84s:0.0304, 85s:0.145, 86s:0.0938, 87s:0.189, 88:0.0921, 98o:0.0169, T8o:0.0064, Q8o:0.0058, K8o:0.0387, A8o:0.043, 92s:0.0007, 94s:0.0031, 95s:0.1117, 96s:0.0239, 97s:0.1614, 98s:0.0465, 99:0.0168, T9o:0.0009, J9o:0.0003, Q9o:0.0045, K9o:0.0218, A9o:0.0006, T2s:0.0042, T3s:0.0151, T4s:0.0119, T5s:0.2107, T6s:0.0368, T7s:0.1337, T8s:0.0068, T9s:0.0947, TT:0.0777, JTo:0.0019, QTo:0.0007, KTo:0.0004, ATo:0.0038, J2s:0.0014, J3s:0.0007, J4s:0.0128, J5s:0.0027, J6s:0.0095, J7s:0.0015, J8s:0.0246, J9s:0.0051, JTs:0.0119, JJ:0.0342, QJo:0.0005, KJo:0.0015, AJo:0.0028, Q3s:0.0321, Q4s:0.0019, Q5s:0.0061, Q6s:0.0097, Q7s:0.0001, Q8s:0.0157, Q9s:0.0032, QTs:0.0077, QJs:0.0096, QQ:0.0501, KQo:0.0008, AQo:0.043, K2s:0.5183, K3s:0.091, K4s:0.2605, K5s:0.1488, K6s:0.1105, K7s:0.3229, K8s:0.0074, K9s:0.0773, KTs:0.0372, KJs:0.0464, KQs:0.0241, KK:0.8083, AKo, A2s:0.6108, A3s:0.2731, A4s:0.0736, A5s:0.3911, A6s:0.773, A7s:0.1219, A8s:0.1106, A9s:0.0614, ATs:0.0047, AJs:0.017, AQs:0.0512, AKs:0.661, AA:0.3109"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.0|BB:3BET@7.5|SB:4BET@37.25",
    "heroPos": "BB",
    "eff": 37.5,
    "stacks": [
      37.5,
      37.5,
      37.5,
      37.5,
      37.5,
      37.5
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0014, 66:0.0015, 77:0.0202, 88:0.0121, A8o:0.0001, 99:0.1165, TT:0.7227, ATo:0.0002, JJ, AJo:0.0177, Q9s:0.0002, QQ, KQo:0.0001, AQo:0.6755, K8s:0.0001, K9s:0.0001, KJs:0.0003, KQs:0.0002, KK, AKo, A3s:0.0003, A4s:0.0001, A5s:0.0003, A7s:0.0003, A9s:0.0001, ATs:0.0081, AJs:0.2882, AQs:0.9995, AKs, AA"
      }
    ]
  }
];

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

export const PATTERNS = __normalizePatterns([
  {
    id: "POKACHE_37BB_CLUBMATCH_6LEFT chase",
    label: "ポカチェ 37BB クラブマッチ 6left chase",
    tags: ["pokache", "clubmatch", "6left", "37bb"],
    questionBuilder: (hand) => ({ stacks: POKACHE_37BB_CLUBMATCH_STACKS_BB }),
    spots: __attachFacingLineToState(
      POKACHE_37BB_CLUBMATCH_STATE,
      POKACHE_37BB_CLUBMATCH_FACING_PRESETS
    ).map(__makeSpotFromState),
  },
]);
