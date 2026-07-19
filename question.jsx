
// ============================================================
// AUTO-GENERATED from zip: クラブマッチ 380-790  200  6left.zip
// B案：facingLine（構造化）対応
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
// B案：facingLine → 表示用文字列 / 安定ID
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

// blinds: BB=78000 / SB=39000 / ante=20000
export const CLUBMATCH_6LEFT_STACKS_BB = [
  19.23,
  19.23,
  19.23,
  19.23,
  19.23,
  19.23
];

export const CLUBMATCH_6LEFT_FACING_PRESETS = [
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
    "id": "BTN:OPEN@19",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
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
    "id": "BTN:OPEN@2|BB:3BET@19",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|BB:3BET@6",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2|BB:3BET@6|BTN:4BET@19",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@19",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "BTN"
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
      "BTN",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BB:4BET@19|BTN:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:3BET@6|BTN:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@19|BTN:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|BTN:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|BTN:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@19",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@19|BTN:CALL@19",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
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
    "id": "CO:OPEN@2|BB:3BET@19",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BB:3BET@6",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BB:3BET@6|CO:4BET@19",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@19",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "CO"
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
      "CO",
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|BB:4BET@19|CO:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|CO:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|SB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:3BET@5|SB:4BET@19|CO:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
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
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@19|CO:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|BTN:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|CO:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|CO:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@19|CO:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|BTN:4BET@19",
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
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|CO:4BET@19",
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
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|CO:CALL@4",
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
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@19",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "CO"
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
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|BB:4BET@19|CO:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:3BET@6|CO:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@19|CO:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|CO:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|CO:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 18.97
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
    "id": "HJ:OPEN@19|BTN:CALL@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@19|CO:CALL@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "BB"
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
    "id": "HJ:OPEN@2|BB:3BET@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BB:3BET@6",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BB:3BET@6|HJ:4BET@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "HJ"
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
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|HJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
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
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|BTN:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|HJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|HJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|BTN:4BET@19",
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
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|HJ:4BET@19",
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
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|HJ:CALL@4",
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
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
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
    "id": "HJ:OPEN@2|CO:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@19|BTN:CALL@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "HJ"
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
      "HJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BB:4BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|HJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|SB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:3BET@5|SB:4BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
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
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|CO:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|HJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|HJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|CO:4BET@19",
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
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|HJ:4BET@19",
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
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|HJ:CALL@3",
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
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 3.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|CO:4BET@19",
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
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|HJ:4BET@19",
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
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|HJ:CALL@4",
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
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@19",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "HJ"
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
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|BB:4BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:3BET@6|HJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@19|HJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|HJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|HJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
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
    "id": "SB:CALL@0.5|BB:OPEN@19",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@7",
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
        "size": 7.0
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@7|BB:4BET@19",
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
        "size": 7.0
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@19",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3",
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
    "id": "SB:OPEN@3|BB:3BET@19",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@3|BB:3BET@6",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@3|BB:3BET@6|SB:4BET@19",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 18.97
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
    "id": "LJ:OPEN@19|BTN:CALL@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@19|CO:CALL@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@19|HJ:CALL@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "HJ",
        "act": "call",
        "size": 18.97
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
    "id": "LJ:OPEN@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "BB"
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
    "id": "LJ:OPEN@2|BB:3BET@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BB:3BET@6",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BB:3BET@6|LJ:4BET@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "LJ"
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
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:3BET@5|LJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
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
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|BTN:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|LJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|LJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|BTN:4BET@19",
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
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|LJ:4BET@19",
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
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|LJ:CALL@4",
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
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
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
    "id": "LJ:OPEN@2|CO:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@19|BTN:CALL@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "LJ"
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
      "LJ",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|SB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|SB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:3BET@5|LJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO"
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
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|CO:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|LJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|LJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|CO:4BET@19",
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
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|LJ:4BET@19",
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
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|LJ:CALL@3",
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
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 3.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|CO:4BET@19",
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
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|LJ:4BET@19",
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
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|LJ:CALL@4",
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
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 18.97
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
    "id": "LJ:OPEN@2|HJ:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@19|BTN:CALL@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@19|CO:CALL@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@19|SB:CALL@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18.47
      }
    ],
    "heroPositions": [
      "LJ"
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
      "LJ",
      "CO",
      "BTN",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:3BET@5|LJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ"
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
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|HJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|LJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|LJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|HJ:4BET@19",
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
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|LJ:4BET@19",
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
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|LJ:CALL@3",
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
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 3.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|HJ:4BET@19",
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
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|LJ:4BET@19",
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
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|LJ:CALL@3",
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
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 3.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
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
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|HJ:4BET@19",
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
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|LJ:4BET@19",
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
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|LJ:CALL@4",
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
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@19",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@19|BB:CALL@18",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.0
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 18.97
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 17.97
      }
    ],
    "heroPositions": [
      "LJ"
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
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6|BB:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6|BB:4BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:3BET@6|LJ:4BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@19",
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
        "size": 18.97
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@19|LJ:CALL@17",
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
        "size": 18.97
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 16.97
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6",
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
        "size": 6.0
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|LJ:4BET@19",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.97
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|LJ:CALL@4",
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
        "size": 6.0
      },
      {
        "pos": "LJ",
        "act": "call",
        "size": 4.0
      }
    ],
    "heroPositions": [
      "SB"
    ]
  }
];

export const CLUBMATCH_6LEFT_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "A2o:0.0001, A3o:0.1243, A4o:0.3599, A5o:0.2937, A6o:0.5189, A7o:0.7063, 88:0.1133, A8o:0.9153, 99:0.2863, A9o:0.9982, TT:0.9994, KTo:0.0147, ATo, JJ:0.1883, KJo:0.9164, AJo, QTs:0.8396, QJs, QQ, KQo, AQo:0.6774, K4s:0.0018, K5s:0.8519, K6s:0.3811, K7s:0.1701, K8s:0.1001, K9s:0.7356, KTs:0.9992, KJs:0.0041, KQs:0.0001, KK, AKo:0.1376, A6s:0.0005, A7s:0.0003, A8s:0.0002, A9s:0.0005, ATs:0.2981, AJs:0.011, AQs:0.7535, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0022, A4o:0.5648, A5o:0.706, 66:0.0001, 88:0.0006, TT:0.0004, JJ:0.8117, AQo:0.3226, KTs:0.0008, KJs:0.9959, KQs, AKo:0.8624, A2s, A3s, A4s, A5s, A6s:0.9995, A7s:0.9997, A8s:0.9998, A9s:0.9995, ATs:0.7019, AJs:0.989, AQs:0.2465"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "A2o:0.0058, A3o:0.0614, A4o:0.2341, 55:0.0887, A5o:0.3205, A6o:0.7727, 77:0.0012, A7o:0.8547, 88:0.0755, A8o:0.9977, 99:0.6809, K9o:0.0001, A9o, TT:0.9991, KTo:0.4084, ATo, JTs:0.1533, JJ:0.0002, QJo:0.2882, KJo:0.9437, AJo:0.9952, Q9s:0.0074, QTs, QJs:0.0008, QQ:0.7574, KQo:0.5016, AQo:0.0004, K3s:0.0001, K4s:0.2376, K5s:0.932, K6s:0.0353, K7s:0.0475, K8s:0.0021, K9s:0.8142, KTs:0.9162, KJs:0.0001, KK, AKo:0.0493, A6s:0.0001, A9s:0.0002, ATs:0.9364, AJs:0.0016, AQs:0.9693, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.94, A3o:0.9384, A4o:0.7659, 55:0.0098, A5o:0.6795, 66:0.266, A6o:0.0083, 77:0.6064, A7o:0.1453, 88:0.9046, A8o:0.0022, 99:0.3102, TT:0.0009, JJ:0.9998, KJo:0.0563, AJo:0.0048, QJs:0.9991, QQ:0.2426, KQo:0.4984, AQo:0.9996, K7s:0.0233, K9s:0.0423, KTs:0.0838, KJs, KQs, AKo:0.9507, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s:0.9998, ATs:0.0636, AJs:0.9984, AQs:0.0307"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "A2o:0.0001, A3o:0.0016, K4o:0.0428, A4o:0.0005, 54s:0.4668, K5o:0.3489, A5o:0.0008, 65s:0.4885, K6o:0.111, A6o:0.3946, 76s:0.0116, K7o:0.1167, A7o:0.1541, 88:0.3345, K8o:0.0527, A8o:0.5394, 96s:0.0001, 99:0.8464, Q9o:0.0007, K9o, A9o, T7s:0.4892, T8s:0.8865, T9s:0.9995, TT:0.7526, JTo:0.9998, QTo:0.5458, KTo:0.0009, ATo:0.9121, J5s:0.02, J6s:0.0076, J7s:0.5754, J8s:0.9815, J9s:0.1104, QJo:0.0001, AJo:0.966, Q2s:0.0037, Q3s:0.6351, Q4s:0.9772, Q5s:0.7778, Q6s:0.9182, Q7s:0.6275, Q8s:0.0367, Q9s:0.0006, QQ:0.2362, AQo:0.0004, K2s:0.0001, K3s:0.0023, K6s:0.0002, K8s:0.0003, K9s:0.0003, KK, AKo:0.2201, A6s:0.0001, A9s:0.0013, ATs:0.0006, AJs:0.4043, AQs:0.9996, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, A2o, 33, A3o:0.9984, 44, A4o:0.9995, 55, A5o:0.9992, 66, A6o:0.6054, 77, K7o:0.0006, A7o:0.8459, 88:0.6655, A8o:0.4606, 99:0.1536, A9o:0.0001, TT:0.2474, QTo:0.4542, KTo:0.999, ATo:0.0879, J8s:0.0005, J9s:0.8893, JTs, JJ, QJo, KJo, AJo:0.034, Q3s:0.0004, Q4s:0.0073, Q5s:0.2221, Q6s:0.0815, Q7s:0.3651, Q8s:0.9632, Q9s:0.9994, QTs, QJs, QQ:0.7638, KQo, AQo:0.9996, K2s, K3s:0.9977, K4s, K5s, K6s:0.9998, K7s, K8s:0.9997, K9s:0.9997, KTs, KJs, KQs, AKo:0.7799, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s:0.9987, ATs:0.9994, AJs:0.5957, AQs:0.0004"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "K2o:0.0028, K3o:0.1289, Q4o:0.0002, K4o:0.1137, 53s:0.1043, 54s:0.3913, J5o:0.0001, Q5o:0.0394, K5o:0.0238, 63s:0.0001, 64s:0.255, 65s:0.1163, Q6o:0.1827, K6o:0.0013, A6o:0.0025, 75s:0.8721, 76s:0.0126, T7o:0.0001, J7o:0.0002, Q7o:0.6031, K7o:0.1179, A7o:0.0014, 85s:0.0031, 86s:0.9203, 87s:0.2373, 88:0.2312, T8o:0.135, J8o:0.3253, Q8o:0.2133, K8o:0.5935, A8o:0.1434, 95s:0.0004, 96s:0.9417, 97s:0.3945, 98s:0.4139, 99:0.2905, T9o:0.3174, J9o:0.8191, Q9o:0.0101, K9o:0.1159, A9o:0.9821, T2s:0.0005, T3s:0.0059, T4s:0.8108, T5s:0.9213, T6s:0.7393, T7s:0.056, T8s:0.0023, TT:0.0244, JTo:0.0002, QTo:0.0003, ATo:0.6429, J2s:0.4188, J3s:0.4903, J4s:0.0835, J5s:0.6167, J6s:0.4331, J7s:0.0227, J8s:0.0005, JJ:0.1205, Q2s:0.0023, Q3s:0.0009, Q6s:0.0002, Q7s:0.0013, QQ:0.0025, KQo:0.3225, K4s:0.0004, K5s:0.0001, K7s:0.0001, K9s:0.0012, KQs:0.0048, KK:0.7629, AKo:0.0267, A3s:0.0104, A5s:0.0361, A6s:0.0001, A7s:0.0024, A8s:0.7822, A9s:0.4715, ATs:0.7197, AJs:0.8956, AQs:0.9932, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, K2o:0.9957, A2o, 33, K3o:0.8694, A3o, 43s:0.0591, 44, K4o:0.8853, A4o, 53s:0.0068, 54s:0.6086, 55, K5o:0.9762, A5o, 64s:0.0931, 65s:0.8836, 66, K6o:0.9986, A6o:0.9975, 75s:0.1255, 76s:0.9873, 77, K7o:0.882, A7o:0.9986, 86s:0.0779, 87s:0.7607, 88:0.7688, Q8o:0.7866, K8o:0.4065, A8o:0.8566, 96s:0.0002, 97s:0.6045, 98s:0.586, 99:0.7095, T9o:0.6823, J9o:0.1809, Q9o:0.9899, K9o:0.8841, A9o:0.0179, T3s:0.0001, T6s:0.2605, T7s:0.9439, T8s:0.9977, T9s, TT:0.9756, JTo:0.9998, QTo:0.9997, KTo, ATo:0.3571, J2s:0.432, J3s:0.5092, J4s:0.9157, J5s:0.3829, J6s:0.5657, J7s:0.9773, J8s:0.9995, J9s, JTs, JJ:0.8795, QJo, KJo, AJo, Q2s:0.9976, Q3s:0.9991, Q4s, Q5s, Q6s:0.9996, Q7s:0.9987, Q8s, Q9s, QTs, QJs, QQ:0.9975, KQo:0.6775, AQo, K2s, K3s, K4s:0.9996, K5s, K6s, K7s, K8s, K9s:0.9988, KTs, KJs, KQs:0.9952, KK:0.2371, AKo:0.9733, A2s, A3s:0.9896, A4s, A5s:0.9639, A6s, A7s:0.9976, A8s:0.2178, A9s:0.5285, ATs:0.2803, AJs:0.1044, AQs:0.0068"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "open 3bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52o:0.0005, 62o:0.0037, 72o:0.0001, 82o:0.0007, 92o:0.0005, T2o:0.0001, 53o:0.0002, 63o:0.0016, 73o:0.0011, T3o:0.0001, 64o:0.0004, 84o:0.001, 94o:0.0019, J4o:0.0001, K4o:0.0001, 65o:0.0005, 85o:0.0001, K5o:0.0007, 64s:0.0009, 65s:0.0021, 66:0.002, 86o:0.0004, T6o:0.0007, J6o:0.0011, K6o:0.0006, 72s:0.0001, 75s:0.0011, 77:0.0022, Q7o:0.0001, Q8o:0.0004, K8o:0.0002, 96s:0.0001, T9o:0.0011, K9o:0.0016, T5s:0.0001, KTo:0.0001, JTs:0.0001, JJ:0.0001, QJo:0.0003, KJo:0.0007, QJs:0.0042, QQ:0.0003, KQo:0.0001, K3s:0.0001, K6s:0.0001, K9s:0.0008, KTs:0.0135, KJs:0.0014, KQs:0.0049, KK:0.0072, A4s:0.0001, A5s:0.0001, A6s:0.0004, A7s:0.0004, A8s:0.0044, A9s:0.0126, AKs:0.0001"
      },
      {
        "action": "open 3bb",
        "min": 0.0001,
        "range": "32o:0.0035, 42o:0.038, 52o:0.5225, 62o:0.9146, 72o:0.7788, 82o:0.0253, 92o:0.0091, T2o:0.0005, Q2o:0.0001, 32s:0.0003, 53o:0.0153, 63o:0.1419, 73o:0.2158, 83o:0.6826, 93o:0.0005, T3o:0.0002, J3o:0.0002, 64o:0.3776, 74o:0.1185, 84o:0.0684, 94o:0.5994, T4o:0.01, J4o:0.0164, Q4o:0.0002, K4o:0.072, 52s:0.0004, 65o:0.0037, 75o:0.0001, 85o:0.0501, 95o:0.2691, T5o:0.2332, J5o:0.0145, Q5o:0.0242, K5o:0.0968, 86o:0.0222, 96o:0.0001, T6o:0.0706, J6o:0.0194, Q6o:0.0001, K6o:0.0001, A6o:0.2309, 74s:0.0014, 75s:0.0001, Q7o:0.0006, A7o:0.0344, 82s:0.0002, 83s:0.0001, 84s:0.0001, 85s:0.0001, Q8o:0.0004, K8o:0.0039, A8o:0.0266, 92s:0.0001, 93s:0.0001, 96s:0.0001, J9o:0.0077, Q9o:0.02, K9o:0.0003, A9o:0.0186, TT:0.0001, QTo:0.005, KTo:0.4975, JJ:0.0002, QJo:0.0988, KJo:0.2443, QJs:0.0039, QQ:0.002, KQo:0.0041, K8s:0.0003, KJs:0.0016, KK:0.9928, AKo:0.0006, A3s:0.0001, A4s:0.0118, A6s:0.3322, A7s:0.3048, A8s:0.0234, A9s:0.0006, ATs:0.2289, AJs:0.0372, AQs:0.23, AKs:0.9997, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, 32o:0.9964, 42o:0.962, 52o:0.4769, 62o:0.0816, 72o:0.2211, 82o:0.974, 92o:0.9903, T2o:0.9994, J2o, Q2o, K2o, A2o, 32s:0.9997, 33, 43o, 53o:0.9845, 63o:0.8565, 73o:0.7831, 83o:0.3174, 93o:0.9995, T3o:0.9997, J3o:0.9998, Q3o, K3o, A3o, 42s, 43s, 44, 54o, 64o:0.6219, 74o:0.8815, 84o:0.9305, 94o:0.3986, T4o:0.99, J4o:0.9835, Q4o:0.9998, K4o:0.9279, A4o, 52s:0.9996, 53s, 54s, 55, 65o:0.9958, 75o, 85o:0.9498, 95o:0.7309, T5o:0.7668, J5o:0.9855, Q5o:0.9758, K5o:0.9025, A5o, 62s, 63s, 64s:0.9991, 65s:0.9979, 66:0.998, 76o, 86o:0.9774, 96o, T6o:0.9287, J6o:0.9796, Q6o, K6o:0.9993, A6o:0.7691, 72s, 73s, 74s:0.9986, 75s:0.9988, 76s, 77:0.9978, 87o, 97o, T7o, J7o, Q7o:0.9993, K7o, A7o:0.9656, 82s:0.9998, 83s, 84s, 85s, 86s, 87s, 88, 98o, T8o, J8o, Q8o:0.9992, K8o:0.9959, A8o:0.9734, 92s:0.9998, 93s, 94s, 95s, 96s:0.9998, 97s, 98s, 99, T9o:0.9989, J9o:0.9923, Q9o:0.98, K9o:0.9981, A9o:0.9814, T2s, T3s, T4s, T5s, T6s, T7s, T8s, T9s, TT, JTo, QTo:0.995, KTo:0.5025, ATo, J2s, J3s, J4s, J5s, J6s, J7s, J8s, J9s, JTs, JJ:0.9996, QJo:0.9009, KJo:0.755, AJo, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs:0.9919, QQ:0.9977, KQo:0.9958, AQo, K2s, K3s, K4s, K5s, K6s, K7s, K8s:0.9997, K9s:0.9992, KTs:0.9865, KJs:0.997, KQs:0.9951, AKo:0.9994, A2s, A3s, A4s:0.9881, A5s, A6s:0.6675, A7s:0.6949, A8s:0.9723, A9s:0.9868, ATs:0.7711, AJs:0.9627, AQs:0.77, AKs:0.0002"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT, JJ, QQ, AQo, KK, AKo, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99, TT, JJ, AJo:0.0008, QQ, AQo, KK, AKo, ATs:0.999, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@19|SB:CALL@18.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0049, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0024, 54s:0.0062, 55:0.5085, 65s:0.0535, 66:0.6873, 76s:0.0008, 77:0.5762, 88:0.9914, 99:0.9963, A9o:0.3215, T8s:0.0001, T9s:0.0002, TT:0.7097, ATo:0.6235, J8s:0.0009, J9s:0.0007, JTs:0.9165, JJ:0.0808, QJo:0.0001, KJo:0.0004, AJo:0.0093, Q5s:0.0001, Q9s:0.0148, QTs:0.4448, QJs:0.9835, QQ:0.924, KQo:0.0759, K5s:0.2763, K6s:0.0016, K7s:0.0066, K8s:0.009, K9s:0.2291, KTs:0.8327, KJs:0.9743, KQs:0.9347, A2s:0.0001, A4s:0.0006, A6s:0.0006, A7s:0.0011, A8s:0.0002, A9s:0.1453, ATs:0.9364, AJs:0.001, AQs:0.0006"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "A2o:0.3885, K3o:0.0006, A3o:0.3305, A4o:0.0312, K5o:0.0007, A5o:0.154, A6o:0.644, K7o:0.0001, A7o:0.4284, A8o:0.4555, A9o:0.2079, TT:0.2788, KTo:0.0018, ATo:0.3626, JJ:0.0026, KJo:0.0004, QQ:0.0006, KQo:0.0761, K2s:0.0351, K3s:0.0017, K4s:0.0487, K5s:0.0781, K6s:0.0004, K7s:0.0014, K8s:0.0003, K9s:0.0013, KTs:0.1167, KK, AKo:0.1394, A6s:0.0001, A7s:0.0006, A9s:0.0003, ATs:0.0213, AJs:0.2485, AQs:0.0174, AKs:0.9876, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1214, A2o:0.6107, 33:0.6651, A3o:0.6692, 44:0.2953, A4o:0.9678, 55:0.4486, A5o:0.8455, 66:0.0209, A6o:0.1822, 77:0.1158, A7o:0.0737, 88:0.0001, A8o:0.0008, A9o:0.0028, TT:0.0115, ATo:0.0138, JJ:0.9166, AJo:0.9906, QTs:0.0016, QJs:0.0007, QQ:0.0754, KQo:0.0101, AQo, K5s:0.0028, K6s:0.0001, K7s:0.0011, K8s:0.0002, KTs:0.0506, KJs:0.0257, KQs:0.0653, AKo:0.8606, A2s, A3s, A4s:0.9994, A5s, A6s:0.9992, A7s:0.9982, A8s:0.9998, A9s:0.8539, ATs:0.0423, AJs:0.7505, AQs:0.982, AKs:0.0124"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8647, K2o:0.1015, A2o:0.002, 32s:0.9923, 33:0.7395, 43o:0.2997, 53o:0.2551, K3o:0.6452, A3o:0.0023, 42s:0.9998, 43s:0.9989, 44:0.9936, 54o:0.9195, 64o:0.0381, Q4o:0.0007, K4o:0.972, A4o:0.0143, 52s:0.9888, 53s:0.9994, 54s:0.9963, 55:0.9996, 65o:0.9762, Q5o:0.074, K5o:0.9862, A5o:0.182, 62s:0.9959, 63s:0.9985, 64s:0.9997, 65s:0.9979, 66:0.9984, 76o:0.9594, Q6o:0.2127, K6o:0.9974, A6o:0.0595, 72s:0.0432, 73s:0.9918, 74s:0.9996, 75s:0.9984, 76s:0.9998, 77, 87o:0.0001, J7o:0.0042, Q7o:0.8318, K7o:0.9994, A7o:0.031, 82s:0.0311, 83s:0.1787, 84s:0.8997, 85s:0.9994, 86s:0.9962, 87s:0.9997, 88, 98o:0.0089, T8o:0.4834, J8o:0.8114, Q8o:0.7311, K8o:0.9968, A8o:0.4868, 92s:0.553, 93s:0.5636, 94s:0.7213, 95s:0.9915, 96s:0.9994, 97s:0.9998, 98s:0.999, 99, T9o:0.9642, J9o:0.9993, Q9o:0.9994, K9o:0.9998, A9o:0.9998, T2s:0.9958, T3s:0.9992, T4s:0.9938, T5s:0.9996, T6s:0.9997, T7s:0.9985, T8s:0.9988, T9s, TT, JTo, QTo, KTo, ATo:0.9995, J2s:0.9957, J3s:0.9989, J4s:0.9973, J5s:0.9994, J6s:0.999, J7s:0.9994, J8s:0.9996, J9s:0.9998, JTs:0.9979, JJ, QJo:0.9998, KJo, AJo:0.9998, Q2s:0.9994, Q3s:0.9993, Q4s:0.9998, Q5s:0.9997, Q6s:0.9993, Q7s:0.9996, Q8s:0.9991, Q9s:0.9998, QTs:0.9991, QJs:0.9977, QQ:0.9974, KQo:0.9968, AQo:0.006, K2s:0.9928, K3s:0.9988, K4s:0.9784, K5s:0.9963, K6s:0.9989, K7s, K8s, K9s:0.9998, KTs, KJs:0.9998, KQs, KK:0.3657, A2s:0.0644, A3s:0.0094, A4s:0.0005, A5s:0.0921, A6s:0.4575, A7s:0.6524, A8s:0.9971, A9s, ATs:0.9994, AJs:0.9993, AQs:0.0674"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "62o:0.001, K2o:0.1693, A2o:0.0322, 32s:0.0017, 63o:0.0008, T3o:0.0001, Q3o:0.0001, K3o:0.0394, A3o:0.1663, 42s:0.0001, 54o:0.0009, T4o:0.0003, K4o:0.0107, A4o:0.0311, 52s:0.0011, 54s:0.0001, 65o:0.0001, T5o:0.0001, K5o:0.0038, A5o:0.0512, 62s:0.0003, 63s:0.0005, T6o:0.0013, Q6o:0.0001, A6o:0.6036, 72s:0.0001, 73s:0.0004, 97o:0.0067, K7o:0.0001, A7o:0.4973, 82s:0.0001, 83s:0.0024, 86s:0.0001, K8o:0.0002, A8o:0.4799, 92s:0.2833, 93s:0.0734, 94s:0.0248, 95s:0.001, T9o:0.0351, A9o:0.0001, T2s:0.0005, T3s:0.0002, T4s:0.0007, T5s:0.0002, T8s:0.0003, J2s:0.0002, J3s:0.0001, J4s:0.0002, J6s:0.0001, JJ:0.0001, AJo:0.0001, Q3s:0.0001, AQo:0.0003, K6s:0.0001, KK:0.0843, AKo:0.0121, AJs:0.0005, AQs:0.5641, AKs:0.9992, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1353, A2o:0.9657, 32s:0.0016, 33:0.2605, K3o:0.0001, A3o:0.8313, 43s:0.0005, 44:0.0063, K4o:0.0004, A4o:0.9546, 52s:0.0005, 53s:0.0004, 54s:0.0033, 55:0.0004, K5o:0.0024, A5o:0.7667, 62s:0.0001, 64s:0.0002, 65s:0.0021, 66:0.0016, K6o:0.0001, A6o:0.3369, 75s:0.0005, 76s:0.0002, K7o:0.0001, A7o:0.4716, 86s:0.0034, 88:0.0001, A8o:0.0334, 93s:0.0004, 99:0.0001, K9o:0.0001, A9o:0.0001, T3s:0.0001, T4s:0.0001, T6s:0.0001, T7s:0.0013, T8s:0.0005, KTo:0.0001, ATo:0.0005, J3s:0.0002, J4s:0.0007, J5s:0.0003, J6s:0.0008, J8s:0.0001, J9s:0.0002, JTs:0.0021, JJ:0.0001, QJo:0.0002, KJo:0.0001, AJo:0.0001, Q2s:0.0001, Q3s:0.0006, Q5s:0.0002, Q6s:0.0003, Q7s:0.0004, Q8s:0.0006, Q9s:0.0001, QTs:0.0009, QJs:0.0023, QQ:0.0026, KQo:0.0032, AQo:0.9937, K2s:0.0072, K3s:0.001, K4s:0.0216, K5s:0.0037, K6s:0.0008, K7s:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0001, KJs:0.0002, KQs:0.0001, KK:0.55, AKo:0.9879, A2s:0.9356, A3s:0.9906, A4s:0.9995, A5s:0.9079, A6s:0.5424, A7s:0.3476, A8s:0.0029, A9s:0.0001, ATs:0.0005, AJs:0.0002, AQs:0.3684, AKs:0.0008"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.277, 88:0.9998, 99, TT, ATo:0.0004, JJ, AJo:0.0077, QQ, AQo, KK, AKo, ATs:0.6075, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0186, A2o:0.0274, 33:0.0209, K3o:0.0034, A3o:0.0535, 42s:0.0002, 43s:0.2315, 44:0.009, K4o:0.0064, A4o:0.0255, 52s:0.008, 53s:0.1372, 54s:0.0304, 55:0.0616, 65o:0.0016, K5o:0.0006, A5o:0.0209, 63s:0.0126, 64s:0.2948, 65s:0.8242, 66:0.6463, A6o:0.0659, 74s:0.0045, 75s:0.2324, 76s:0.0466, 77:0.2926, 87o:0.0003, A7o:0.4708, 84s:0.003, 85s:0.0031, 86s:0.0038, 87s:0.1598, 88:0.7017, J8o:0.0001, K8o:0.0021, A8o:0.551, 94s:0.008, 95s:0.0346, 97s:0.0091, 98s:0.0752, 99:0.0581, T9o:0.0635, J9o:0.0077, Q9o:0.0001, K9o:0.0036, A9o:0.1929, T7s:0.0102, T8s:0.3999, T9s:0.23, TT:0.0297, JTo:0.3486, QTo:0.1229, KTo:0.1873, ATo:0.3323, J4s:0.0006, J5s:0.0032, J7s:0.0007, J8s:0.2719, J9s:0.4807, JTs:0.1427, JJ:0.079, QJo:0.4647, KJo:0.1189, AJo:0.9782, Q2s:0.0003, Q3s:0.0021, Q4s:0.0517, Q5s:0.1611, Q6s:0.0023, Q7s:0.0542, Q8s:0.0689, Q9s:0.7432, QTs:0.9037, QJs:0.8071, QQ:0.1238, KQo:0.1478, AQo:0.1417, K2s:0.056, K3s:0.1454, K4s:0.695, K5s:0.5832, K6s:0.0801, K7s:0.1499, K8s:0.1734, K9s:0.4831, KTs:0.17, KJs:0.6353, KQs:0.9488, A2s:0.0413, A3s:0.0003, A4s:0.0067, A6s:0.0413, A7s:0.058, A8s:0.7868, A9s:0.0104, ATs:0.5713, AJs:0.5448, AQs:0.0338, AA:0.8226"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.8826, A2o:0.7753, 32s:0.0004, 33:0.9786, A3o:0.9465, 43s:0.689, 44:0.9908, 54o:0.0202, A4o:0.9719, 52s:0.0328, 53s:0.4025, 54s:0.969, 55:0.9383, K5o:0.0001, A5o:0.978, 63s:0.0007, 64s:0.2145, 65s:0.1081, 66:0.3527, 76o:0.0001, A6o:0.5691, 74s:0.0222, 75s:0.2508, 76s:0.0238, 77:0.707, J7o:0.0001, A7o:0.4012, 83s:0.0008, 84s:0.0058, 85s:0.0129, 86s:0.0009, 87s:0.6865, 88:0.2982, J8o:0.0002, K8o:0.0033, A8o:0.3598, 95s:0.0029, 96s:0.0001, 97s:0.194, 98s:0.5244, 99:0.9415, T9o:0.0727, J9o:0.001, Q9o:0.0001, K9o:0.006, A9o:0.7902, T2s:0.0001, T3s:0.001, T4s:0.0001, T5s:0.0002, T7s:0.165, T8s:0.5593, T9s:0.7604, TT:0.9703, JTo:0.3996, QTo:0.0002, KTo:0.0352, ATo:0.6675, J3s:0.0025, J4s:0.0001, J5s:0.0173, J6s:0.0001, J7s:0.0001, J8s:0.3605, J9s:0.4465, JTs:0.8568, JJ:0.921, QJo:0.0008, KJo:0.0311, AJo:0.0218, Q2s:0.0012, Q3s:0.0001, Q4s:0.0013, Q6s:0.0002, Q7s:0.0004, Q8s:0.0239, Q9s:0.0605, QTs:0.096, QJs:0.1842, QQ:0.8762, KQo:0.0231, AQo:0.8583, K2s:0.0038, K3s:0.0257, K4s:0.035, K5s:0.3046, K6s:0.001, K7s:0.1621, K8s:0.0451, K9s:0.4013, KTs:0.8297, KJs:0.364, KQs:0.0511, KK, AKo, A2s:0.9571, A3s:0.9997, A4s:0.9932, A5s, A6s:0.9583, A7s:0.942, A8s:0.2131, A9s:0.9895, ATs:0.4287, AJs:0.4552, AQs:0.9662, AKs, AA:0.1774"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|BB:3BET@6|BTN:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.7805, TT, ATo:0.2781, JJ, AJo, QQ, AQo, KK, AKo, ATs:0.9998, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.3496, 99:0.6723, TT, JJ, QQ, AQo, KK, AKo, AJs:0.9736, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9779, QQ, AQo:0.2956, KK, AKo, AQs:0.9553, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@19|BB:CALL@18",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.1173, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.001, K2o:0.025, A2o:0.0006, 33:0.0267, K3o:0.0903, A3o:0.0799, 43s:0.2806, 44:0.0705, K4o:0.164, A4o:0.019, 52s:0.2576, 53s:0.5801, 54s:0.3995, 55:0.8078, K5o:0.0525, A5o:0.0003, 63s:0.0057, 64s:0.6718, 65s:0.9457, 66:0.9774, K6o:0.0239, 74s:0.0523, 75s:0.2592, 76s:0.7255, 77:0.9878, K7o:0.0002, 85s:0.0155, 86s:0.1911, 87s:0.1113, 88:0.8116, A8o:0.1726, 95s:0.0006, 96s:0.0013, 97s:0.0518, 98s:0.6607, 99:0.4629, T9o:0.0011, K9o:0.0131, A9o:0.0512, T5s:0.0005, T6s:0.0002, T7s:0.0296, T8s:0.2293, T9s:0.0669, TT:0.2294, JTo:0.97, QTo:0.817, ATo:0.7807, J2s:0.0001, J3s:0.0011, J4s:0.2766, J5s:0.0376, J7s:0.3263, J8s:0.818, J9s:0.9069, JTs:0.1125, JJ:0.0016, QJo:0.9623, KJo:0.0005, AJo:0.6922, Q3s:0.015, Q4s:0.3775, Q5s:0.2466, Q6s:0.1257, Q8s:0.6054, Q9s:0.9938, QTs:0.9962, QJs:0.9733, QQ:0.1439, KQo:0.0482, AQo:0.9853, K3s:0.001, K4s:0.0053, K6s:0.0001, K8s:0.0003, K9s:0.0006, KTs:0.0001, KJs:0.0003, A2s:0.0005, A3s:0.0001, A4s:0.0005, A6s:0.106, A7s:0.005, A8s:0.1443, A9s:0.3677, ATs:0.4072, AJs:0.0548, AQs:0.6847, AA:0.9502"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9966, K2o:0.0007, A2o:0.0372, 32s:0.0001, 33:0.972, K3o:0.6366, A3o:0.2162, 42s:0.0001, 43s:0.2546, 44:0.9265, K4o:0.5349, A4o:0.7525, 52s:0.0003, 53s:0.2143, 54s:0.5984, 55:0.1922, J5o:0.0001, K5o:0.8514, A5o:0.9467, 63s:0.0146, 64s:0.0434, 65s:0.0454, 66:0.0223, K6o:0.026, A6o:0.0306, 74s:0.0001, 75s:0.1828, 76s:0.0637, 77:0.0121, K7o:0.3908, A7o:0.0339, 85s:0.002, 86s:0.0021, 87s:0.514, 88:0.1882, K8o:0.2118, A8o:0.0103, 93s:0.0002, 97s:0.0011, 98s:0.2481, 99:0.534, K9o:0.8863, A9o:0.05, T2s:0.0007, T6s:0.0005, T8s:0.7029, T9s:0.9272, TT:0.7704, JTo:0.0007, KTo, ATo:0.2184, J2s:0.0008, J3s:0.0004, J4s:0.0003, J5s:0.0001, J6s:0.0001, J7s:0.0002, J8s:0.0361, J9s:0.0811, JTs:0.885, JJ:0.9984, QJo:0.0014, KJo:0.9995, AJo:0.3078, Q3s:0.0001, Q5s:0.0114, Q6s:0.0018, Q8s:0.0049, Q9s:0.0009, QTs:0.002, QJs:0.0265, QQ:0.8561, KQo:0.9517, AQo:0.0147, K2s:0.9988, K3s:0.9986, K4s:0.9945, K5s, K6s, K7s:0.9997, K8s:0.9991, K9s:0.9994, KTs, KJs:0.9996, KQs, KK, AKo, A2s:0.9995, A3s, A4s:0.9991, A5s, A6s:0.8939, A7s:0.9947, A8s:0.8484, A9s:0.6323, ATs:0.5928, AJs:0.9452, AQs:0.3153, AKs, AA:0.0498"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0001, K4o:0.0003, 52s:0.0002, 54s:0.0007, 64s:0.0003, 66:0.0027, 77:0.0003, 88:0.0001, 99:0.0006, T2s:0.0001, TT:0.0001, KTo:0.0028, J3s:0.0001, J6s:0.0001, J8s:0.0001, JTs:0.0002, JJ:0.0205, AJo:0.0002, Q2s:0.0002, Q9s:0.0002, QJs:0.0002, QQ:0.0315, AQo:0.0003, K2s:0.0016, K3s:0.7305, K4s:0.0001, K5s:0.2105, K6s:0.0264, K7s:0.1147, K8s:0.022, K9s:0.3086, KTs:0.0332, KJs:0.8182, KQs:0.628, KK, AKo, A2s:0.0501, A3s:0.3246, A4s:0.1299, A5s:0.5921, A6s:0.0003, A8s:0.185, A9s:0.4614, ATs:0.3751, AJs:0.9336, AQs:0.6146, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0003, KK:0.9071, AKo:0.0008, AKs:0.1762, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 77:0.0006, 88:0.0027, 99:0.0037, TT:0.0235, JJ:0.2656, QQ:0.6758, KK, AKo, ATs:0.0012, AQs:0.0016, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BB:4BET@19|BTN:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 55:0.0001, 65s:0.0001, K6o:0.0001, 75s:0.0001, 85s:0.0001, 86s:0.0003, 87s:0.0001, 88:0.0001, A8o:0.0001, 96s:0.0001, 97s:0.0001, T5s:0.0002, T7s:0.0003, ATo:0.0001, J2s:0.0001, J4s:0.0001, J6s:0.0002, JJ:0.0001, Q3s:0.0003, Q6s:0.0001, Q8s:0.0003, QQ:0.0005, AQo:0.0001, K2s:0.0001, K6s:0.0002, K8s:0.0001, KQs:0.0001, A2s:0.0001, A6s:0.0001, A7s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:3BET@6|BTN:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.9652, TT:0.9997, JJ, AJo:0.9824, QQ, AQo, KK, AKo, ATs:0.9986, AJs:0.9998, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9963, 32s:0.0449, 33:0.9743, A3o:0.0041, 42s:0.3488, 43s:0.1043, 44:0.9973, 54o:0.0056, 52s:0.7392, 53s:0.9207, 54s:0.9097, 55:0.998, 65o:0.0219, K5o:0.0001, A5o:0.003, 62s:0.0017, 63s:0.1883, 64s:0.8797, 65s:0.9892, 66:0.9851, 86o:0.0013, 73s:0.0058, 74s:0.5154, 75s:0.9842, 76s:0.9283, 77:0.9937, A7o:0.0122, 82s:0.0001, 83s:0.0033, 84s:0.003, 85s:0.0299, 86s:0.1402, 87s:0.9484, 88:0.9988, A8o:0.0003, 95s:0.0217, 96s:0.0756, 97s:0.72, 98s:0.1948, 99:0.9975, A9o:0.5988, T4s:0.0149, T5s:0.0001, T6s:0.5072, T7s:0.0639, T8s:0.1375, T9s:0.8811, TT:0.9937, JTo:0.197, QTo:0.5222, KTo:0.8199, ATo:0.9465, J2s:0.0107, J4s:0.7472, J5s:0.0133, J6s:0.016, J7s:0.9843, J8s:0.9244, J9s:0.9277, JTs:0.9473, JJ:0.994, QJo:0.9277, KJo:0.9572, AJo:0.9816, Q2s:0.5527, Q3s:0.5013, Q4s:0.3235, Q5s:0.7508, Q6s:0.2426, Q7s:0.9388, Q8s:0.5675, Q9s:0.9461, QTs:0.5561, QJs:0.9186, KQo:0.0338, AQo:0.0116, K2s:0.0843, K3s:0.7632, K4s:0.7282, K5s:0.6663, K6s:0.753, K7s:0.9049, K8s:0.9739, K9s:0.9269, KTs:0.6089, KJs:0.813, KQs:0.0088, A2s:0.0338, A3s:0.0263, A4s:0.0279, A5s:0.0955, A6s:0.0633, A7s:0.1829, A8s:0.0669, A9s:0.8975, ATs:0.9083, AJs:0.641, AQs:0.0004, AKs:0.0002"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "32o:0.0013, 62o:0.0002, A2o:0.2654, 33:0.0002, Q3o:0.0002, K3o:0.0009, A3o:0.0099, K4o:0.0004, A4o:0.0173, 53s:0.0007, 54s:0.0001, A5o:0.1065, 62s:0.0002, 63s:0.0002, Q6o:0.0002, A6o:0.0444, 76s:0.0005, K7o:0.0009, A7o:0.1685, 86s:0.0006, 87s:0.0009, A8o:0.3063, 95s:0.0002, 96s:0.0005, 97s:0.0011, A9o:0.1788, T4s:0.0081, T7s:0.0058, T8s:0.0024, TT:0.0049, JTo:0.0001, QTo:0.0099, ATo:0.0434, J2s:0.0001, J4s:0.0004, J5s:0.0066, J6s:0.0002, J8s:0.0001, JTs:0.0015, JJ:0.0025, KJo:0.0006, Q2s:0.0036, Q3s:0.0001, Q4s:0.001, Q5s:0.0421, Q9s:0.0007, QTs:0.0003, QJs:0.0006, QQ:0.0034, KQo:0.0011, AQo:0.0054, K2s:0.0003, K3s:0.0004, K4s:0.0011, K5s:0.0069, K6s:0.0001, K7s:0.0004, K9s:0.0001, KK:0.019, AKo:0.006, A3s:0.0034, A4s:0.0001, A5s:0.0021, A6s:0.0031, A7s:0.0005, A9s:0.0006, ATs:0.0019, AJs:0.0746, AQs:0.0797, AKs:0.2173, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0028, Q2o:0.0001, A2o:0.6159, 32s:0.0001, 33:0.0053, Q3o:0.0001, K3o:0.0046, A3o:0.9575, 42s:0.0004, 43s:0.0007, Q4o:0.0009, A4o:0.9483, 52s:0.0001, 53s:0.0012, 54s:0.0001, 55:0.0019, Q5o:0.0005, K5o:0.0029, A5o:0.8481, 63s:0.0008, 66:0.0042, A6o:0.7094, 75s:0.0001, 77:0.0048, K7o:0.0015, A7o:0.6153, 85s:0.0007, 86s:0.0001, 87s:0.0091, 88:0.0003, A8o:0.0905, 96s:0.0015, 99:0.0002, A9o:0.083, T8s:0.0005, TT:0.0007, JTo:0.0014, QTo:0.0018, ATo:0.007, J7s:0.0009, J8s:0.0018, JTs:0.0001, JJ:0.0034, QJo:0.0384, KJo:0.0399, AJo:0.018, Q2s:0.1917, Q3s:0.1475, Q4s:0.2346, Q5s:0.0284, Q6s:0.27, Q7s:0.0413, Q8s:0.0097, Q9s:0.0338, QTs:0.3944, QJs:0.0637, QQ:0.9966, KQo:0.9642, AQo:0.9831, K2s:0.881, K3s:0.0479, K4s:0.1244, K5s:0.3003, K6s:0.1436, K7s:0.0204, K8s:0.0259, K9s:0.0696, KTs:0.381, KJs:0.1852, KQs:0.9912, KK:0.981, AKo:0.994, A2s:0.9623, A3s:0.9595, A4s:0.9676, A5s:0.8926, A6s:0.9221, A7s:0.8116, A8s:0.927, A9s:0.1015, ATs:0.0873, AJs:0.2844, AQs:0.9199, AKs:0.7825, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0002, 99:0.0009, TT:0.0006, JJ:0.1866, QQ, AQo:0.9697, KK, AKo, AJs:0.1764, AQs:0.9947, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0069, 99:0.0002, TT:0.6964, JJ:0.987, AJo:0.0046, QQ, AQo:0.9955, KK, AKo, ATs:0.007, AJs:0.029, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@19|BTN:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0084, A3o:0.0014, 53s:0.2179, 54s:0.0152, 55:0.3981, 63s:0.1698, 64s:0.044, 66:0.0041, A6o:0.0187, 74s:0.0012, 75s:0.0013, 76s:0.0002, 77:0.004, A7o:0.0012, 85s:0.0012, 86s:0.0005, 87s:0.0015, 88:0.0093, 97s:0.0001, 98s:0.0004, 99:0.0428, A9o:0.2398, T4s:0.0001, T6s:0.0002, T7s:0.0241, T8s:0.0535, TT:0.3014, ATo:0.1534, J3s:0.0001, J6s:0.0001, J7s:0.0692, J8s:0.0005, JTs:0.0003, JJ:0.1046, QJo:0.0002, AJo:0.2712, Q2s:0.0339, Q3s:0.1556, Q4s:0.0001, Q6s:0.248, Q8s:0.0019, Q9s:0.0011, QTs:0.2213, QJs:0.0003, QQ:0.2422, AQo:0.3813, K4s:0.0001, K5s:0.0088, K6s:0.0773, K7s:0.0021, K9s:0.0001, KJs:0.0223, KQs:0.0017, KK:0.3318, A2s:0.0024, A3s:0.002, A4s:0.0009, A5s:0.0093, A6s:0.0043, A7s:0.001, A8s:0.0694, A9s:0.1985, ATs:0.4539, AJs:0.0529, AQs:0.3241, AA:0.8179"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3393, 52o:0.0001, Q2o:0.0007, K2o:0.0048, A2o:0.4692, 32s:0.0418, 33:0.5216, K3o:0.0017, A3o:0.7586, 42s:0.0529, 43s:0.0472, 44:0.6287, 54o:0.0002, 74o:0.0011, K4o:0.0081, A4o:0.7734, 52s:0.0001, 53s:0.0771, 54s:0.7436, 55:0.1953, 65o:0.0321, 95o:0.0005, Q5o:0.0025, K5o:0.001, A5o:0.6748, 63s:0.0004, 64s:0.6847, 65s:0.4051, 66:0.4034, 86o:0.0001, 96o:0.0001, Q6o:0.0014, K6o:0.0009, A6o:0.3964, 72s:0.0099, 73s:0.0565, 74s:0.2325, 75s:0.0219, 76s:0.6043, 77:0.0669, 87o:0.0002, K7o:0.0077, A7o:0.6094, 83s:0.0214, 84s:0.0241, 85s:0.0339, 86s:0.0509, 87s:0.0707, 88:0.009, 98o:0.0025, T8o:0.0109, A8o:0.8058, 92s:0.002, 93s:0.0026, 94s:0.0013, 95s:0.057, 96s:0.0033, 97s:0.0042, 98s:0.0191, 99:0.112, J9o:0.0003, Q9o:0.001, K9o:0.0155, A9o:0.1525, T2s:0.0039, T3s:0.0076, T4s:0.0069, T6s:0.0125, T7s:0.0532, T8s:0.2024, T9s:0.0273, TT:0.0066, KTo:0.0109, ATo:0.5442, J2s:0.0013, J3s:0.0001, J5s:0.2628, J6s:0.0131, J7s:0.03, J8s:0.0938, J9s:0.0207, JTs:0.0388, JJ:0.7296, QJo:0.0006, KJo:0.0218, AJo:0.7033, Q2s:0.0029, Q3s:0.107, Q4s:0.1032, Q5s:0.061, Q6s:0.016, Q7s:0.0024, Q8s:0.0552, Q9s:0.106, QTs:0.0613, QJs:0.08, QQ:0.6634, KQo:0.0217, AQo:0.6137, K2s:0.013, K3s:0.0943, K4s:0.0086, K5s:0.0978, K6s:0.0456, K7s:0.0559, K8s:0.1235, K9s:0.049, KTs:0.0428, KJs:0.4895, KQs:0.0282, KK:0.6682, AKo, A2s:0.9057, A3s:0.8735, A4s:0.9236, A5s:0.9439, A6s:0.983, A7s:0.8111, A8s:0.9069, A9s:0.6936, ATs:0.5453, AJs:0.8612, AQs:0.6746, AKs, AA:0.1821"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0003, T4o:0.0001, J4o:0.0001, A4o:0.0001, 65s:0.0001, 66:0.0002, A6o:0.0003, 97o:0.0001, 82s:0.0001, 85s:0.0001, 88:0.0001, 98o:0.0001, A8o:0.0003, 92s:0.0002, 93s:0.0002, 97s:0.0004, 98s:0.0001, 99:0.0005, T7s:0.0005, T8s:0.0002, J5s:0.0001, J6s:0.0002, J7s:0.0003, J8s:0.0001, J9s:0.0003, JTs:0.0014, JJ:0.0013, AJo:0.0201, Q2s:0.0001, Q4s:0.0002, Q5s:0.0001, QTs:0.0001, QQ:0.0001, AQo:0.001, K2s:0.0004, K3s:0.0001, K4s:0.005, K5s:0.0001, K6s:0.0008, K7s:0.0001, KQs:0.0006, KK:0.0017, A2s:0.0001, A3s:0.0011, A4s:0.0002, A5s:0.0002, A6s:0.004, A7s:0.0021, A8s:0.0003, A9s:0.0012, ATs:0.0024, AJs:0.0167, AQs:0.006, AKs:0.0014, AA:0.9631"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, K2o:0.0035, A2o:0.3974, 32s:0.0003, 33:0.0022, 53o:0.0057, K3o:0.008, A3o:0.3221, 43s:0.008, 44:0.3995, 54o:0.0077, 64o:0.0077, 94o:0.0032, K4o:0.01, A4o:0.7222, 53s:0.1015, 54s:0.0112, 55:0.738, 65o:0.0167, K5o:0.015, A5o:0.537, 64s:0.0196, 65s:0.2743, 66:0.162, 86o:0.0011, 96o:0.0061, Q6o:0.0037, K6o:0.0142, A6o:0.4273, 72s:0.0068, 73s:0.0092, 74s:0.0493, 75s:0.0121, 76s:0.1698, 77:0.2208, 87o:0.0077, T7o:0.0117, J7o:0.0001, K7o:0.0178, A7o:0.1901, 82s:0.0001, 84s:0.022, 85s:0.006, 86s:0.0023, 87s:0.0216, 88:0.0401, 98o:0.0095, T8o:0.0028, J8o:0.006, K8o:0.0085, A8o:0.2823, 94s:0.005, 95s:0.004, 96s:0.0238, 97s:0.0149, 98s:0.0103, 99:0.0761, K9o:0.0091, A9o:0.0269, T2s:0.0071, T3s:0.0003, T5s:0.0371, T6s:0.009, T7s:0.0764, T8s:0.0201, T9s:0.105, TT:0.2435, JTo:0.0055, QTo:0.0083, KTo:0.0153, ATo:0.2706, J2s:0.0091, J3s:0.0204, J4s:0.033, J5s:0.0367, J6s:0.0459, J7s:0.0173, J8s:0.1019, J9s:0.0074, JTs:0.0413, JJ:0.9617, QJo:0.008, KJo:0.0682, AJo:0.8356, Q2s:0.0184, Q3s:0.0123, Q4s:0.015, Q5s:0.1159, Q6s:0.0154, Q7s:0.0014, Q8s:0.0039, Q9s:0.0127, QTs:0.0017, QJs:0.0826, QQ:0.9407, KQo:0.0297, AQo:0.9962, K2s:0.034, K3s:0.0249, K4s:0.0238, K5s:0.0273, K6s:0.0201, K7s:0.0069, K8s:0.0226, K9s:0.1059, KTs:0.0379, KJs:0.1395, KQs:0.3362, KK:0.9983, AKo, A2s:0.7314, A3s:0.6161, A4s:0.9604, A5s:0.979, A6s:0.9405, A7s:0.4768, A8s:0.7247, A9s:0.9112, ATs:0.8179, AJs:0.9529, AQs:0.9937, AKs:0.9985, AA:0.0369"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|BTN:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "87s:0.0001, TT:0.0001, JJ:0.0005, QJs:0.0001, QQ:0.0024, K3s:0.0002, K5s:0.0001, K9s:0.0002, KJs:0.0008, KQs:0.0001, KK:0.9189, AKo:0.0001, A2s:0.0009, A3s:0.0002, A5s:0.0001, A6s:0.0001, A9s:0.0008, ATs:0.0008, AJs:0.0024, AKs:0.0374, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|BTN:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0014, 66:0.0662, 77:0.0008, 84s:0.0001, 88:0.5718, 99:0.54, T6s:0.0001, TT:0.5653, ATo:0.0022, J6s:0.0001, J9s:0.0003, JJ:0.7985, AJo:0.5667, Q2s:0.0001, Q4s:0.0002, QQ:0.8951, AQo:0.8332, K2s:0.0005, K8s:0.0001, KTs:0.0007, KQs:0.0001, KK, AKo, A2s:0.0002, A3s:0.0001, A6s:0.0001, A7s:0.0019, A8s:0.0013, A9s:0.0018, ATs:0.0197, AJs:0.674, AQs:0.981, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|BTN:CALL@4",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 32o:0.0002, 72o:0.0001, A2o:0.0017, 32s:0.0001, 33:0.0001, K3o:0.0001, A3o:0.0003, 42s:0.0001, 43s:0.0003, 44:0.0001, 54o:0.0007, 74o:0.0001, 84o:0.0002, 94o:0.0001, T4o:0.0003, K4o:0.0001, 54s:0.0001, 55:0.0018, T5o:0.0001, Q5o:0.0003, A5o:0.0007, 64s:0.0001, 65s:0.0289, 73s:0.0025, 75s:0.0032, 76s:0.0001, 77:0.0002, 87o:0.0001, J7o:0.0001, A7o:0.0001, 83s:0.0001, 84s:0.0006, 85s:0.0005, 86s:0.0023, 87s:0.0024, 88:0.0001, K8o:0.0002, A8o:0.0001, 92s:0.0009, 94s:0.0001, 97s:0.0001, 99:0.0162, T9o:0.0001, T2s:0.0001, T4s:0.0003, T5s:0.0001, T6s:0.0003, T7s:0.0001, T8s:0.0001, TT:0.0003, QTo:0.0006, KTo:0.0001, J2s:0.0003, J4s:0.0007, J5s:0.0001, J6s:0.0001, J7s:0.0001, J9s:0.0004, JTs:0.0001, JJ:0.0007, Q2s:0.0002, Q3s:0.0002, Q4s:0.0001, Q7s:0.0001, Q8s:0.0002, QTs:0.0002, QJs:0.0055, QQ:0.0374, KQo:0.0002, AQo:0.0036, K3s:0.0001, K6s:0.001, K7s:0.0002, K9s:0.0001, KTs:0.0001, KQs:0.0001, KK:0.8416, AKo:0.0086, A2s:0.0002, A3s:0.0067, A4s:0.0003, A5s:0.0008, A7s:0.0009, A8s:0.0037, A9s:0.0073, ATs:0.0022, AJs:0.1451, AQs:0.0004, AKs:0.0039"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, 62o:0.0001, A2o:0.0005, 83o:0.0001, J3o:0.0001, A3o:0.0205, 42s:0.0001, 43s:0.0012, 44:0.0004, K4o:0.0002, A4o:0.0001, 54s:0.0019, 55:0.0002, 65o:0.0001, 75o:0.0003, Q5o:0.0001, A5o:0.0002, 65s:0.0001, K6o:0.0002, 73s:0.0001, 74s:0.0001, 75s:0.0007, 77:0.0001, 87o:0.0001, A7o:0.0007, 83s:0.0001, 84s:0.0002, 85s:0.0004, 86s:0.0082, 87s:0.0002, 88:0.0002, A8o:0.0018, 93s:0.0005, 95s:0.0003, 98s:0.0002, 99:0.0005, A9o:0.0001, T2s:0.0001, T4s:0.0001, T5s:0.0002, T6s:0.0001, T7s:0.0015, T8s:0.0004, TT:0.0007, JTo:0.0002, KTo:0.0001, ATo:0.0006, J2s:0.0002, J3s:0.0007, J4s:0.0008, J5s:0.0006, J6s:0.0002, J7s:0.0001, J9s:0.0008, JTs:0.0001, JJ:0.0132, KJo:0.0001, AJo:0.0012, Q2s:0.0004, Q4s:0.0001, Q7s:0.0014, Q8s:0.0017, Q9s:0.0001, QTs:0.0032, QJs:0.0011, QQ:0.1258, KQo:0.0003, AQo:0.0001, K2s:0.0004, K3s:0.0002, K6s:0.001, K7s:0.0027, K9s:0.0007, KTs:0.0006, KJs:0.0001, KQs:0.0001, AKo:0.2627, A2s:0.0001, A3s:0.0064, A4s:0.0002, A5s:0.1514, A6s:0.0093, A7s:0.08, A8s:0.0012, A9s:0.0088, ATs:0.001, AJs:0.0073, AQs:0.1263, AKs:0.2604, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 54s:0.0001, 55:0.0001, 94s:0.0001, 99:0.0041, T4s:0.0001, TT:0.0464, ATo:0.0001, J5s:0.0001, JTs:0.0001, JJ, AJo:0.9761, Q3s:0.0001, Q8s:0.0001, QJs:0.0014, QQ, KQo:0.0002, AQo, K2s:0.0001, K3s:0.0001, K7s:0.0003, KTs:0.0001, KJs:0.0001, KQs:0.0291, KK, AKo, A2s:0.0001, A4s:0.0003, A6s:0.0001, ATs:0.2121, AJs:0.9998, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ, QQ, KK, AKo, AQs:0.6548, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT, JJ, QQ, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT, JJ, QQ, AQo, KK, AKo, AJs:0.2812, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@19|BTN:CALL@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@19|BTN:CALL@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "CO:OPEN@19|SB:CALL@18.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0008, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "44:0.0009, 54s:0.0345, 55:0.051, 65s:0.0686, 66:0.1516, 76s:0.0005, 77:0.0145, 88:0.273, 99:0.0009, TT:0.734, ATo:0.0006, JJ:0.2996, AJo:0.4579, Q8s:0.0001, QTs:0.1269, QJs:0.104, QQ:0.8622, KQo:0.0136, AQo:0.0002, K8s:0.0001, KTs:0.8858, KJs:0.5029, KQs:0.395, KK:0.0067, A8s:0.0008, A9s:0.4818, ATs:0.155, AJs:0.9806, AQs:0.0206"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.3753, A3o:0.0583, A4o:0.104, A5o:0.0129, A6o:0.2107, A7o:0.0176, A8o:0.1427, A9o:0.0066, ATo:0.1, JJ:0.2822, AJo:0.5412, QQ:0.0081, K4s:0.0002, K8s:0.0002, KK:0.0232, A6s:0.0002, A8s:0.0022, AQs:0.2542, AKs:0.1417, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.3877, 33:0.0076, A3o:0.4984, 44:0.5554, A4o:0.7274, 55:0.0085, A5o:0.7332, 66:0.1198, A6o:0.0003, 77:0.1427, A7o:0.0013, 88:0.0017, TT:0.2198, ATo:0.0008, JJ:0.4182, AJo:0.0002, QJs:0.0001, QQ:0.1297, KQo:0.0001, AQo:0.9998, K4s:0.0001, K5s:0.0006, K6s:0.0024, KTs:0.1139, KJs:0.185, KQs:0.605, KK:0.9701, AKo, A2s, A3s, A4s, A5s, A6s:0.9996, A7s, A8s:0.9967, A9s:0.4982, ATs:0.845, AJs:0.0193, AQs:0.7252, AKs:0.8583"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0004, 54s:0.0069, 55:0.0368, 65s:0.0003, 66:0.0871, 77:0.0268, 88:0.1635, 99:0.0968, TT:0.0783, ATo:0.0027, J9s:0.0001, JTs:0.0003, JJ:0.0784, KJo:0.0001, AJo:0.1585, QTs:0.0929, QJs:0.2471, QQ:0.1301, KQo:0.0055, K4s:0.0006, K7s:0.0046, K9s:0.0145, KTs:0.0913, KJs:0.1821, KQs:0.0001, A9s:0.0962, ATs:0.003, AJs:0.0467, AQs:0.0001"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "A2o:0.6441, A3o:0.0797, A4o:0.1032, K5o:0.0003, A5o:0.14, A6o:0.4506, A7o:0.3062, A8o:0.1279, A9o:0.3291, TT:0.0055, KTo:0.0137, ATo:0.0517, JJ:0.7243, KJo:0.0935, AJo:0.6707, QQ:0.004, KQo:0.0001, K2s:0.0124, K3s:0.0297, K4s:0.1114, K5s:0.2045, K6s:0.0016, K7s:0.0492, K8s:0.0028, K9s:0.002, KK:0.9931, AKo:0.0008, A9s:0.0046, AJs:0.1896, AQs:0.0011, AKs:0.9687, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1082, A2o:0.355, 33:0.1863, A3o:0.9191, 44:0.5028, A4o:0.8952, 55:0.147, A5o:0.8589, 66:0.3364, A6o:0.0259, 77:0.4882, A7o:0.1635, 88:0.0002, 99:0.0001, TT:0.9161, ATo:0.9453, JTs:0.0001, JJ:0.1973, KJo:0.0001, AJo:0.1708, QTs:0.0004, QJs:0.0019, QQ:0.8659, KQo:0.6825, AQo, K2s:0.0001, K3s:0.1042, K4s:0.0188, K5s:0.004, K6s:0.0011, K7s:0.1793, K8s:0.0008, KTs:0.9086, KJs:0.8178, KQs, KK:0.0069, AKo:0.9992, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s:0.8992, ATs:0.997, AJs:0.7636, AQs:0.9989, AKs:0.0313"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, K2o:0.0001, A2o:0.0017, 32s:0.9961, 33, 53o:0.001, A3o:0.315, 42s:0.9977, 43s:0.9992, 44:0.9992, 54o:0.9304, K4o:0.0005, A4o:0.485, 52s, 53s, 54s, 55, 65o:0.8384, K5o:0.0647, A5o:0.7564, 62s:0.8833, 63s:0.997, 64s, 65s, 66, 76o:0.6282, K6o:0.66, A6o:0.5001, 72s:0.005, 73s:0.9964, 74s:0.9996, 75s, 76s:0.9998, 77, Q7o:0.0017, K7o:0.8928, A7o:0.7992, 82s:0.5183, 83s:0.1848, 84s:0.9246, 85s:0.9993, 86s, 87s, 88, T8o:0.0078, J8o:0.0061, Q8o:0.2866, K8o:0.8527, A8o:0.3687, 93s:0.0001, 94s:0.0133, 95s:0.7093, 96s:0.9992, 97s:0.9997, 98s:0.9997, 99, T9o:0.945, J9o:0.0063, Q9o:0.6613, K9o:0.9525, A9o:0.8982, T2s:0.0198, T3s:0.5679, T4s:0.6987, T5s:0.2603, T6s:0.9385, T7s:0.9978, T8s:0.9996, T9s, TT:0.8629, JTo:0.9998, QTo, KTo, ATo, J2s:0.9998, J3s:0.9991, J4s, J5s:0.9995, J6s:0.999, J7s:0.9992, J8s, J9s:0.9998, JTs, JJ:0.9322, QJo, KJo, AJo, Q2s:0.9995, Q3s, Q4s, Q5s, Q6s:0.9997, Q7s:0.9998, Q8s:0.9998, Q9s, QTs, QJs, QQ:0.9973, KQo, AQo:0.9984, K2s:0.9997, K3s:0.9987, K4s:0.9993, K5s:0.9997, K6s:0.9992, K7s:0.9991, K8s, K9s:0.9998, KTs:0.9997, KJs, KQs, A2s:0.1317, A3s:0.2517, A4s:0.8393, A5s:0.3714, A6s:0.7708, A7s:0.8553, A8s:0.8462, A9s, ATs:0.9997, AJs:0.9997, AQs"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0669, A2o:0.8219, K3o:0.0008, A3o:0.2089, K4o:0.0002, A4o:0.1187, K5o:0.1899, A5o:0.209, 63s:0.0002, K6o:0.0004, A6o:0.4991, 74s:0.0001, A7o:0.2007, 83s:0.0002, 84s:0.0001, 98o:0.0018, K8o:0.0011, A8o:0.577, 92s:0.0001, 94s:0.0011, 95s:0.0001, 96s:0.0002, T9o:0.0044, K9o:0.0475, A9o:0.1017, T7s:0.0008, JJ:0.0677, QQ:0.0004, AQo:0.0001, KK:0.9996, AKo:0.1933, AQs:0.0001, AKs:0.9976, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1764, A3o:0.4761, 44:0.0008, A4o:0.3963, 54s:0.0001, 55:0.0001, A5o:0.0347, 65s:0.0001, A6o:0.0007, 76s:0.0001, A8o:0.0543, 98s:0.0002, K9o:0.0001, T7s:0.0001, TT:0.1371, QTo:0.0001, J9s:0.0001, JJ:0.0001, Q4s:0.0001, Q5s:0.0001, Q6s:0.0001, QJs:0.0001, QQ:0.0024, KQo:0.0001, AQo:0.0015, K2s:0.0001, K3s:0.0013, K4s:0.0006, K5s:0.0002, K6s:0.0008, K7s:0.0009, K9s:0.0002, KTs:0.0002, KK:0.0004, AKo:0.8067, A2s:0.8683, A3s:0.7483, A4s:0.1607, A5s:0.6286, A6s:0.2292, A7s:0.1447, A8s:0.1537, ATs:0.0003, AJs:0.0003, AKs:0.0024"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0263, 88:0.7383, 99:0.9603, TT, ATo:0.0008, JJ, AJo:0.0051, QQ, AQo:0.0349, KK, AKo, A9s:0.0068, ATs:0.143, AJs:0.6005, AQs:0.8303, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.6033, A3o:0.1124, 43s:0.9482, 44:0.5529, 54o:0.0236, A4o:0.0405, 53s:0.6251, 54s:0.8413, 55:0.7892, 65o:0.0008, K5o:0.0506, A5o:0.1048, 64s:0.5779, 65s:0.9178, 66:0.9985, A6o:0.0001, 73s:0.0002, 74s:0.0012, 75s:0.5212, 76s:0.4749, 77:0.4974, K7o:0.0003, A7o:0.0003, 85s:0.1235, 86s:0.0142, 87s:0.3357, 88:0.9628, A8o:0.2079, 93s:0.0001, 98s:0.3345, 99:0.0731, K9o:0.0035, A9o:0.0957, T5s:0.0001, T6s:0.0001, T7s:0.0022, T8s:0.0791, T9s:0.3243, TT:0.1108, JTo:0.0032, KTo:0.0204, ATo:0.435, J5s:0.0003, J7s:0.0002, J8s:0.0149, J9s:0.2802, JTs:0.0986, JJ:0.1314, KJo:0.0001, AJo:0.4631, Q4s:0.0003, Q5s:0.0023, Q7s:0.0001, Q8s:0.044, Q9s:0.2721, QTs:0.9756, QJs:0.9146, QQ:0.3778, KQo:0.4693, AQo:0.9974, K2s:0.2203, K3s:0.0158, K4s:0.0155, K5s:0.0323, K6s:0.0008, K7s:0.0035, K8s:0.0023, K9s:0.0001, KJs:0.0118, KQs:0.0002, A2s:0.0807, A3s:0.0002, A4s:0.0062, A5s:0.0012, A6s:0.0241, A7s:0.1347, A8s:0.5043, A9s:0.0904, ATs:0.1474, AJs:0.0145, AQs:0.5836, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0022, A2o:0.001, 33:0.3964, A3o:0.2894, 43s:0.0281, 44:0.4458, K4o:0.0016, A4o:0.9126, 53s:0.0027, 54s:0.1486, 55:0.2108, K5o:0.0805, A5o:0.7156, 62s:0.0001, 64s:0.0024, 65s:0.0816, 66:0.0011, K6o:0.0001, A6o:0.0008, 74s:0.0031, 75s:0.0505, 76s:0.1821, 77:0.5026, K7o:0.0058, A7o:0.0184, 84s:0.0005, 85s:0.0034, 86s:0.0068, 87s:0.3792, 88:0.0365, K8o:0.0051, A8o:0.0302, 95s:0.0011, 96s:0.0006, 97s:0.1587, 98s:0.0772, 99:0.9266, T9o:0.0001, K9o:0.3178, A9o:0.0342, T5s:0.0005, T7s:0.0066, T8s:0.3913, T9s:0.6544, TT:0.8892, KTo:0.979, ATo:0.5644, J4s:0.0005, J5s:0.0002, J7s:0.0001, J8s:0.0029, J9s:0.6729, JTs:0.9012, JJ:0.8686, KJo:0.9995, AJo:0.5349, Q5s:0.001, Q6s:0.0001, Q7s:0.0005, Q8s:0.0003, Q9s:0.0194, QTs:0.0012, QJs:0.0546, QQ:0.6222, KQo:0.5278, AQo:0.0026, K2s:0.0008, K3s:0.9771, K4s:0.9838, K5s:0.9646, K6s:0.9875, K7s:0.9932, K8s:0.9774, K9s:0.9998, KTs, KJs:0.9882, KQs:0.9998, KK, AKo, A2s:0.8036, A3s:0.9998, A4s:0.9938, A5s:0.9988, A6s:0.9729, A7s:0.8653, A8s:0.4957, A9s:0.9096, ATs:0.8525, AJs:0.9855, AQs:0.4164, AKs"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BB:3BET@6|CO:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0004, TT, ATo:0.0001, JJ, AJo:0.2634, QQ, AQo, KK, AKo, ATs:0.0539, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.4339, JJ, QQ, KK, AKo, AQs:0.9422, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.7691, KK, AKo, AQs:0.0001, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.0018, QQ:0.9983, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@19|BB:CALL@18",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "CO:OPEN@2|BTN:3BET@19|SB:CALL@18.5",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, A2o:0.0228, 33:0.2314, A3o:0.0434, 44:0.622, A4o:0.0062, 53s:0.0028, 54s:0.1013, 55:0.8086, A5o:0.0011, 64s:0.0008, 65s:0.0618, 66:0.9954, A6o:0.005, 75s:0.002, 76s:0.0075, 77:0.7773, A7o:0.0028, 86s:0.0001, 87s:0.0001, 88:0.7785, A8o:0.0182, 96s:0.0005, 98s:0.0014, 99:0.1063, A9o:0.0017, T6s:0.0003, T7s:0.0005, T8s:0.0008, T9s:0.0071, TT:0.1879, ATo:0.0016, J9s:0.0004, JTs:0.0038, JJ:0.9918, AJo:0.5649, Q9s:0.0352, QQ:0.0005, KQo:0.0211, AQo:0.0076, K2s:0.0001, K3s:0.0009, K5s:0.005, K6s:0.0014, K7s:0.0034, K8s:0.0005, KTs:0.0043, KJs:0.0004, KQs:0.0982, AKo:0.0004, A2s:0.0263, A4s:0.015, A5s:0.012, A6s:0.005, A7s:0.0013, A8s:0.0932, A9s:0.003, ATs:0.0044, AJs:0.9996, AQs:0.0044, AKs:0.0028, AA:0.5242"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.1481, 33:0.0619, K3o:0.0002, A3o:0.8177, 42s:0.0003, 43s:0.0002, 44:0.1137, A4o:0.8785, 53s:0.0002, 54s:0.1684, 55:0.185, 65o:0.0002, A5o:0.9947, 63s:0.0029, 64s:0.0002, 65s:0.2489, 66:0.0046, 76o:0.0001, K6o:0.0001, A6o:0.1824, 73s:0.0003, 74s:0.0001, 75s:0.3491, 76s:0.4498, 77:0.1996, K7o:0.0001, A7o:0.6543, 82s:0.0001, 84s:0.0001, 85s:0.0011, 86s:0.028, 87s:0.3338, 88:0.0389, 98o:0.0001, K8o:0.0004, A8o:0.644, 92s:0.0002, 96s:0.0032, 97s:0.1919, 98s:0.2572, 99:0.5471, T9o:0.0001, K9o:0.0097, A9o:0.4238, T6s:0.0001, T8s:0.0046, T9s:0.2811, TT:0.2896, JTo:0.0001, QTo:0.0001, KTo:0.0039, ATo:0.8506, J3s:0.0015, J5s:0.0017, J6s:0.0001, J7s:0.0004, J8s:0.0012, J9s:0.1509, JTs:0.234, JJ:0.0076, QJo:0.0015, KJo:0.0147, AJo:0.4351, Q2s:0.0001, Q3s:0.0053, Q4s:0.008, Q5s:0.0895, Q6s:0.0112, Q7s:0.0817, Q8s:0.0153, Q9s:0.7946, QTs:0.9974, QJs:0.7528, QQ:0.9995, KQo:0.2705, AQo:0.9924, K2s:0.0223, K3s:0.2446, K4s:0.4991, K5s:0.632, K6s:0.1855, K7s:0.3877, K8s:0.0638, K9s:0.6677, KTs:0.69, KJs:0.7675, KQs:0.9018, KK, AKo:0.9996, A2s:0.9734, A3s, A4s:0.9837, A5s:0.9878, A6s:0.9947, A7s:0.9984, A8s:0.9068, A9s:0.9969, ATs:0.9952, AJs:0.0004, AQs:0.9956, AKs:0.9972, AA:0.4758"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0027, 33:0.0003, A3o:0.0117, A4o:0.0392, K5o:0.0002, A5o:0.0392, 63s:0.0001, 65s:0.0005, A7o:0.0979, 86s:0.0002, A8o:0.0003, 98s:0.0002, 99:0.0001, J3s:0.0005, J4s:0.0001, AJo:0.1688, QQ:0.0619, AQo:0.076, K2s:0.0049, K3s:0.0028, K4s:0.0496, K5s:0.0012, K6s:0.0004, K8s:0.015, K9s:0.1035, KTs:0.026, KJs:0.0013, KQs:0.1962, KK, AKo, A2s:0.559, A3s:0.4509, A4s:0.4995, A5s:0.9324, A6s:0.0934, A7s:0.8948, A8s:0.026, A9s:0.7428, ATs:0.4945, AJs:0.6874, AQs:0.9968, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0092, A4o:0.0698, 54s:0.0097, A5o:0.0592, 65s:0.0049, A6o:0.0003, 77:0.0014, A7o:0.1697, 82s:0.0003, 86s:0.0046, 87s:0.0005, 95s:0.0478, 97s:0.0003, T5s:0.0001, T6s:0.0004, J5s:0.0002, JJ:0.001, AJo:0.1662, Q7s:0.0002, QTs:0.0003, QQ:0.0684, AQo:0.7514, K2s:0.021, K3s:0.0261, K4s:0.0555, K5s:0.0002, K6s:0.0489, K7s:0.003, K8s:0.0041, K9s:0.0724, KTs:0.0117, KQs:0.14, KK, AKo:0.9984, A2s:0.5466, A3s:0.8291, A4s:0.6517, A5s:0.9085, A6s:0.2797, A7s:0.8083, A8s:0.0194, A9s:0.3374, ATs:0.1919, AJs:0.3131, AQs:0.9939, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0004, QQ:0.0004, KK, AKo:0.3275, AJs:0.0002, AKs:0.7601, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0017, TT:0.5958, JJ:0.7647, QQ:0.9998, KK, AKo:0.9997, A6s:0.0002, AQs:0.0486, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|BB:4BET@19|CO:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52s:0.0001, 54s:0.0001, J2s:0.0001, Q9s:0.0001, KK:0.0012, A3s:0.0001, A4s:0.0001, ATs:0.0002, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|CO:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.9004, JJ, QQ, AQo:0.9993, KK, AKo, A9s:0.0002, ATs:0.0003, AJs:0.8337, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0001, KJs:0.0004, KK:0.9813, AKo:0.0247, A9s:0.0001, AQs:0.0001, AKs:0.4959, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0022, 99:0.002, TT:0.2003, ATo:0.0001, JJ:0.7278, QQ, KK, AKo, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:3BET@5|SB:4BET@19|CO:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "96s:0.0001, T4s:0.0001, T6s:0.0001, K8s:0.0001, K9s:0.0001, KK:0.0003, AKo:0.0002, A2s:0.0001, A5s:0.0002, A7s:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0116, 44:0.0039, 54s:0.0021, 55:0.0449, 63s:0.0005, 64s:0.0031, 66:0.1808, 76s:0.0005, 77:0.017, 88:0.0509, 95s:0.0003, 99:0.0003, JTs:0.0008, JJ:0.2009, AJo:0.0131, QTs:0.0031, QJs:0.0001, QQ:0.0002, KQo:0.0001, AQo:0.0006, K5s:0.0016, K8s:0.0003, K9s:0.0001, KJs:0.0069, KQs:0.0045, KK:0.0001, AKo:0.0001, A2s:0.0001, A3s:0.0001, A4s:0.0006, A5s:0.0036, A7s:0.0001, ATs:0.0005, AJs:0.4673, AQs:0.0118, AKs:0.0022, AA:0.0004"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.0697, A2o:0.0261, 32s:0.0001, A3o:0.0018, 43s:0.0001, Q4o:0.0005, A4o:0.1187, Q5o:0.0196, A5o:0.0087, 64s:0.0004, 65s:0.0001, Q6o:0.027, A6o:0.1051, 75s:0.0003, Q7o:0.0264, K7o:0.0004, A7o:0.1545, 83s:0.0004, 88:0.0005, Q8o:0.0245, A8o:0.0717, 93s:0.0007, 94s:0.0007, 95s:0.0002, 96s:0.0026, 98s:0.0001, Q9o:0.0177, A9o:0.0483, T3s:0.0001, J6s:0.001, J9s:0.0002, JJ:0.0065, QJo:0.0048, AJo:0.0545, Q2s:0.0434, Q3s:0.0188, Q4s:0.1033, Q5s:0.0184, Q6s:0.0313, Q7s:0.0064, Q8s:0.004, Q9s:0.0002, QTs:0.0001, QJs:0.0152, QQ:0.0898, AQo:0.038, K5s:0.0001, K6s:0.0001, KQs:0.0005, KK:0.0006, AKo:0.0567, A2s:0.0581, A3s:0.0841, A4s:0.2064, A5s:0.0037, A6s:0.0132, A7s:0.0001, A8s:0.1061, A9s:0.0848, ATs:0.0499, AJs:0.0271, AQs:0.1396, AKs:0.053, AA:0.999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, 32s:0.0005, 33:0.0007, K3o:0.0004, A3o:0.0002, 43s:0.0018, A4o:0.0421, Q5o:0.0076, K5o:0.0025, A5o:0.0073, 64s:0.0004, 65s:0.0001, 66:0.0129, K6o:0.0002, A6o:0.0004, 77:0.0001, A7o:0.0002, 85s:0.0007, 88:0.0008, A8o:0.0008, 98s:0.0014, KTo:0.0002, J6s:0.0001, J9s:0.0004, JJ:0.0001, QJo:0.0009, AJo:0.0013, Q2s:0.3586, Q3s:0.3018, Q4s:0.5154, Q5s:0.6863, Q6s:0.6891, Q7s:0.918, Q8s:0.8015, Q9s:0.8898, QTs:0.0629, QJs:0.1201, QQ:0.91, KQo:0.9941, AQo:0.9608, K2s:0.1692, K3s:0.3314, K4s:0.0682, K5s:0.4558, K6s:0.2265, K7s:0.0165, K8s:0.0139, K9s:0.0713, KTs:0.0032, KJs:0.0398, KQs:0.9923, KK:0.9994, AKo:0.9431, A2s:0.2149, A3s:0.822, A4s:0.687, A5s:0.6428, A6s:0.9665, A7s:0.9612, A8s:0.3276, A9s:0.4106, ATs:0.0925, AJs:0.0068, AQs:0.8485, AKs:0.9448, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9963, 32s:0.0037, 33:0.9142, 43s:0.0056, 44:0.7684, 53s:0.0016, 54s:0.8471, 55:0.9193, 64s:0.0149, 65s:0.5644, 66:0.971, 74s:0.0005, 75s:0.1441, 76s:0.1407, 77:0.7611, 83s:0.0002, 86s:0.2685, 88:0.8215, 96s:0.0025, 97s:0.0147, 99:0.8835, TT:0.7298, J6s:0.0012, J9s:0.0001, JJ:0.9869, KJo:0.0064, AJo:0.834, Q2s:0.0046, Q3s:0.0657, Q4s:0.0176, Q5s:0.0007, Q7s:0.6794, Q8s:0.0707, Q9s:0.0203, QTs:0.0024, QJs:0.4089, KQo:0.0002, AQo:0.001, K2s:0.0041, K3s:0.1002, K4s:0.0445, K5s:0.0473, K6s:0.0991, K7s:0.0042, K8s:0.3412, K9s:0.0658, KTs:0.6086, KJs:0.8883, KK:0.0002, AKo:0.0003, A2s:0.016, A3s:0.0642, A4s:0.0594, A5s:0.0256, A6s:0.3023, A7s:0.1644, A8s:0.2487, A9s:0.1228, ATs:0.205, AJs:0.8961, AQs:0.0019, AKs:0.0002"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.0001, A2o:0.0284, A3o:0.4771, Q4o:0.0133, A4o:0.0085, 54s:0.0008, Q5o:0.0007, A5o:0.0019, 65s:0.001, Q6o:0.0017, A6o:0.0322, 73s:0.0002, 74s:0.0001, 76s:0.0001, A7o:0.1315, 82s:0.0004, 85s:0.0002, 86s:0.0003, 87s:0.0001, A8o:0.0354, 96s:0.0006, 98s:0.0001, 99:0.0006, Q9o:0.0013, A9o:0.1207, T7s:0.0002, J7s:0.0005, J8s:0.0003, JJ:0.0001, QJo:0.0019, AJo:0.0081, Q2s:0.0296, Q3s:0.0026, Q4s:0.0033, Q5s:0.0074, Q6s:0.0037, Q7s:0.0009, Q8s:0.0078, Q9s:0.001, QTs:0.0083, QJs:0.0008, QQ:0.0163, AQo:0.0749, K3s:0.0004, K4s:0.0001, K5s:0.0022, KTs:0.0002, KK:0.0021, AKo:0.0001, A2s:0.0033, A3s:0.0126, A4s:0.0094, A5s:0.1484, A6s:0.0312, A7s:0.0296, A8s:0.0593, A9s:0.0643, ATs:0.0009, AJs:0.0394, AQs:0.0597, AKs:0.3136, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0298, 33:0.0001, A3o:0.0014, 42s:0.0001, A4o:0.0052, 53s:0.0012, 54s:0.0003, Q5o:0.0008, 65s:0.0013, K6o:0.001, 73s:0.0001, 75s:0.0002, 77:0.0378, A7o:0.0009, 88:0.0006, A8o:0.0037, 93s:0.0001, 95s:0.0001, 99:0.0005, T9s:0.0001, TT:0.0001, QJo:0.0001, KJo:0.0001, AJo:0.0032, Q2s:0.0241, Q3s:0.5913, Q4s:0.7946, Q5s:0.868, Q6s:0.9085, Q7s:0.0469, Q8s:0.436, Q9s:0.8963, QTs:0.0042, QJs:0.113, QQ:0.9837, KQo:0.9996, AQo:0.9229, K2s:0.0835, K3s:0.1147, K4s:0.6877, K5s:0.5683, K6s:0.2208, K7s:0.0121, K8s:0.1877, K9s:0.0052, KTs:0.0154, KQs:0.9992, KK:0.9977, AKo:0.9996, A2s:0.7529, A3s:0.8805, A4s:0.9077, A5s:0.6526, A6s:0.6045, A7s:0.4445, A8s:0.4311, A9s:0.6602, ATs:0.0282, AJs:0.0258, AQs:0.9383, AKs:0.6861, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0029, QQ:0.9996, AQo:0.0002, KK, AKo, AQs:0.4428, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0052, QQ, AQo:0.013, KK, AKo, AQs:0.9284, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@19|CO:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0005, J5o:0.0001, A5o:0.0089, 63s:0.0005, 64s:0.0003, 66:0.0549, 74s:0.0016, 76s:0.0001, 77:0.0001, A7o:0.0146, 85s:0.0003, 86s:0.0081, J8o:0.0001, A8o:0.0072, 98s:0.0128, A9o:0.0057, T4s:0.0001, T6s:0.0001, T7s:0.0161, TT:0.0478, ATo:0.019, J4s:0.0015, J9s:0.0588, JTs:0.0005, JJ:0.001, QJo:0.0001, AJo:0.0181, Q6s:0.0005, Q7s:0.0005, Q8s:0.0002, QTs:0.0003, QQ:0.025, AQo:0.2913, K2s:0.0014, K5s:0.0002, K6s:0.0044, K7s:0.0099, KTs:0.0011, KJs:0.0004, KQs:0.0017, KK:0.1036, A2s:0.0194, A3s:0.0479, A4s:0.027, A5s:0.0002, A6s:0.0134, A7s:0.0017, A8s:0.0095, A9s:0.3169, ATs:0.3442, AJs:0.0001, AQs:0.3845, AKs:0.0001, AA:0.4355"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "72o:0.0001, A2o:0.1143, 32s:0.0044, 43o:0.0015, 73o:0.0012, A3o:0.0825, 42s:0.0009, 43s:0.0023, 44:0.0322, 64o:0.0002, Q4o:0.0004, K4o:0.0001, A4o:0.3424, 52s:0.0494, 53s:0.0596, 54s:0.0002, 55:0.0755, A5o:0.4114, 63s:0.0083, 64s:0.2427, 65s:0.4117, 66:0.0114, 86o:0.0005, 96o:0.0001, Q6o:0.0018, K6o:0.0016, A6o:0.1711, 72s:0.0018, 73s:0.0133, 74s:0.0353, 75s:0.0864, 76s:0.4647, 77:0.0957, 97o:0.0014, Q7o:0.0001, K7o:0.003, A7o:0.1497, 82s:0.005, 84s:0.0217, 85s:0.025, 86s:0.2964, 87s:0.1726, 88:0.0018, T8o:0.0001, A8o:0.2965, 92s:0.0021, 93s:0.0422, 94s:0.0002, 95s:0.0179, 96s:0.0618, 97s:0.0088, 98s:0.0495, 99:0.0447, J9o:0.0013, K9o:0.0001, A9o:0.3767, T2s:0.0007, T3s:0.0001, T4s:0.0001, T5s:0.0409, T6s:0.0002, T7s:0.0185, T8s:0.0021, T9s:0.0001, TT:0.0139, JTo:0.0001, QTo:0.0005, KTo:0.006, ATo:0.338, J3s:0.0001, J4s:0.0007, J5s:0.0028, J7s:0.0067, J8s:0.0001, J9s:0.0819, JTs:0.0027, JJ:0.0033, QJo:0.0006, KJo:0.0001, AJo:0.1351, Q2s:0.0002, Q3s:0.0008, Q4s:0.045, Q5s:0.0059, Q6s:0.0201, Q7s:0.0134, Q9s:0.0002, QTs:0.0121, QJs:0.0011, QQ:0.407, KQo:0.0001, AQo:0.2394, K2s:0.0243, K3s:0.0041, K4s:0.0001, K5s:0.0342, K6s:0.016, K7s:0.0933, K8s:0.0127, K9s:0.0057, KTs:0.0732, KJs:0.0234, KQs:0.0457, KK:0.7877, AKo:0.9996, A2s:0.8037, A3s:0.543, A4s:0.8225, A5s:0.1386, A6s:0.1584, A7s:0.9179, A8s:0.9773, A9s:0.181, ATs:0.5975, AJs:0.8523, AQs:0.5103, AKs:0.9998, AA:0.5645"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0005, 44:0.0017, 55:0.0001, 75s:0.0005, 77:0.0003, 99:0.0006, T2s:0.0001, T3s:0.0001, TT:0.0005, J4s:0.0001, JJ:0.0005, QTs:0.0002, QQ:0.0031, K4s:0.0001, K7s:0.0002, K9s:0.0001, KQs:0.0002, KK:0.5115, A2s:0.0004, A3s:0.0001, A4s:0.0016, A5s:0.0081, A7s:0.0009, A8s:0.0002, A9s:0.046, ATs:0.0203, AJs:0.1368, AQs:0.0007, AKs:0.0001, AA:0.9614"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0327, A2o:0.0518, 33:0.0548, A3o:0.0307, 42s:0.001, 43s:0.0024, 44:0.207, K4o:0.002, A4o:0.1349, 52s:0.0001, 53s:0.0001, 54s:0.0051, 55:0.0549, 65o:0.0003, K5o:0.0001, A5o:0.2517, 62s:0.0011, 63s:0.0001, 64s:0.0077, 65s:0.0526, 66:0.3038, K6o:0.0003, A6o:0.1009, 73s:0.0008, 74s:0.0013, 75s:0.0118, 76s:0.0452, 77:0.0082, A7o:0.034, 82s:0.0007, 83s:0.0024, 85s:0.0008, 86s:0.0001, 87s:0.0204, 88:0.1655, A8o:0.0427, 95s:0.0185, 96s:0.0186, 97s:0.0007, 99:0.0319, T9o:0.0016, K9o:0.0001, A9o:0.0238, T8s:0.0004, T9s:0.0715, TT:0.1772, QTo:0.0001, KTo:0.0008, ATo:0.0932, J5s:0.0003, J6s:0.0001, J8s:0.0015, J9s:0.0001, JTs:0.0266, JJ:0.3235, AJo:0.2682, Q3s:0.0015, Q4s:0.004, Q6s:0.0001, Q8s:0.0058, Q9s:0.0029, QTs:0.0016, QJs:0.0002, QQ:0.7925, KQo:0.002, AQo:0.9158, K2s:0.0009, K3s:0.0031, K4s:0.0019, K5s:0.0071, K6s:0.0046, K7s:0.0057, K8s:0.0005, K9s:0.0029, KTs:0.0056, KQs:0.0142, KK:0.4885, AKo, A2s:0.2476, A3s:0.4333, A4s:0.9738, A5s:0.7879, A6s:0.1364, A7s:0.759, A8s:0.4511, A9s:0.6675, ATs:0.8913, AJs:0.719, AQs:0.9978, AKs:0.9998, AA:0.0386"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|BTN:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0001, 43s:0.0001, 55:0.0001, 65s:0.0001, 75s:0.0001, 77:0.0002, 87s:0.0001, 88:0.0014, 94s:0.0001, 95s:0.0001, 99:0.0004, T8s:0.0001, TT:0.0007, JJ:0.4045, QQ, AQo:0.993, K3s:0.0002, K7s:0.0001, KJs:0.0002, KK, AKo, A2s:0.0001, A6s:0.0003, A8s:0.0001, AJs:0.9104, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|CO:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 75s:0.0001, 87s:0.0001, 99:0.0002, QTs:0.0003, QQ:0.0003, KQs:0.0001, KK:0.2882, AKo:0.0001, A7s:0.0002, A8s:0.0001, A9s:0.0003, ATs:0.0002, AQs:0.01, AKs:0.0027, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|CO:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0005, 43s:0.0001, 44:0.0003, 53s:0.0006, 55:0.0023, 66:0.0001, 74s:0.0003, 76s:0.0006, 77:0.0113, 88:0.0005, 99:0.0967, A9o:0.0002, T6s:0.0001, T9s:0.0001, TT:0.1315, ATo:0.0005, JJ:0.1309, AJo:0.0046, QTs:0.0001, QQ:0.5988, KQo:0.0001, AQo:0.1392, K2s:0.0001, K3s:0.0001, K6s:0.0003, K7s:0.0002, K9s:0.0001, KJs:0.0001, KQs:0.0003, KK, AKo:0.9984, A3s:0.0001, A4s:0.0001, A6s:0.0001, A7s:0.0003, A8s:0.0029, A9s:0.0011, ATs:0.0375, AJs:0.1218, AQs:0.1045, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|BB:3BET@6|CO:CALL@4",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "62o:0.0001, T2o:0.0006, J2o:0.0001, 32s:0.0001, 33:0.0008, 53o:0.0002, Q3o:0.0001, K3o:0.0012, A3o:0.0001, 42s:0.0062, 44:0.0004, 64o:0.0003, 74o:0.0001, T4o:0.0001, J4o:0.0001, Q4o:0.0011, K4o:0.0003, A4o:0.0006, 52s:0.0032, 53s:0.0004, 54s:0.0118, 55:0.0025, 65o:0.0005, T5o:0.0002, J5o:0.0002, K5o:0.0011, A5o:0.0002, 62s:0.0023, 63s:0.0002, 64s:0.0002, 65s:0.0011, 66:0.0008, 96o:0.0001, J6o:0.0001, Q6o:0.0001, 72s:0.0007, 73s:0.0012, 74s:0.0007, 75s:0.0017, 76s:0.0041, 87o:0.0001, Q7o:0.0005, K7o:0.0009, A7o:0.0006, 82s:0.0001, 83s:0.002, 85s:0.0031, 86s:0.0008, Q8o:0.0001, K8o:0.0001, 92s:0.0004, 93s:0.0001, 95s:0.0039, 97s:0.0017, 98s:0.0009, 99:0.0009, J9o:0.0001, K9o:0.0001, T2s:0.0001, T4s:0.0003, T5s:0.0005, T6s:0.0004, T7s:0.0007, T8s:0.002, T9s:0.0001, TT:0.0003, JTo:0.0001, ATo:0.0005, J2s:0.0003, J3s:0.0006, J4s:0.0001, J7s:0.0001, J8s:0.0003, J9s:0.0144, JJ:0.0032, AJo:0.0006, Q4s:0.0001, Q5s:0.0036, Q6s:0.0018, Q7s:0.0019, Q8s:0.0014, QTs:0.0003, QJs:0.0003, QQ:0.0003, AQo:0.0031, K2s:0.0004, K3s:0.0004, K5s:0.0015, K7s:0.0004, K8s:0.006, K9s:0.0014, KTs:0.0001, KJs:0.0034, KQs:0.0138, KK:0.0026, AKo:0.009, A2s:0.0006, A3s:0.0025, A4s:0.0058, A5s:0.0152, A6s:0.0036, A7s:0.001, A8s:0.0004, A9s:0.0111, ATs:0.0022, AJs:0.0856, AQs:0.0026, AKs:0.0101"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, 32o:0.0004, 52o:0.0002, 62o:0.0001, 72o:0.0003, 92o:0.0003, T2o:0.0001, J2o:0.0002, A2o:0.0007, 32s:0.0014, 33:0.0014, 43o:0.0007, 63o:0.0003, 73o:0.0002, 83o:0.0001, 93o:0.0002, T3o:0.0004, J3o:0.0002, 42s:0.0029, 43s:0.0007, 44:0.0006, 54o:0.0003, 74o:0.0006, 84o:0.0003, 94o:0.0008, T4o:0.0004, J4o:0.001, A4o:0.0017, 52s:0.001, 53s:0.0034, 54s:0.0007, 65o:0.0007, 75o:0.0001, 85o:0.0001, 95o:0.0003, J5o:0.0003, Q5o:0.0001, K5o:0.0004, A5o:0.0003, 62s:0.0038, 63s:0.0003, 64s:0.0009, 65s:0.0003, 66:0.0009, 76o:0.0001, 86o:0.0003, J6o:0.0004, Q6o:0.0001, K6o:0.0002, A6o:0.0003, 72s:0.0005, 74s:0.0001, 75s:0.0024, 76s:0.0019, 77:0.0002, 97o:0.0004, T7o:0.0002, Q7o:0.0007, K7o:0.0007, A7o:0.002, 82s:0.0004, 83s:0.0003, 85s:0.0005, 86s:0.0007, 87s:0.0008, 88:0.001, 98o:0.0002, J8o:0.0002, Q8o:0.0001, K8o:0.0002, A8o:0.0023, 92s:0.0004, 93s:0.0001, 94s:0.0005, 95s:0.0031, 96s:0.0002, 97s:0.0006, 98s:0.0001, 99:0.0014, J9o:0.0002, Q9o:0.0014, K9o:0.0002, A9o:0.0004, T2s:0.0002, T5s:0.0001, T8s:0.0035, T9s:0.001, TT:0.0004, QTo:0.0004, KTo:0.0001, ATo:0.0012, J3s:0.0001, J4s:0.0022, J5s:0.0002, J7s:0.0007, J8s:0.0007, J9s:0.0006, JTs:0.0045, JJ:0.0006, QJo:0.0003, KJo:0.0008, AJo:0.0021, Q2s:0.0002, Q3s:0.0009, Q4s:0.0001, Q5s:0.0005, Q6s:0.0007, Q7s:0.0002, Q8s:0.0009, Q9s:0.0002, QTs:0.0006, QJs:0.0001, QQ:0.0026, KQo:0.0002, AQo:0.0004, K2s:0.0006, K3s:0.0005, K4s:0.0011, K5s:0.0004, K6s:0.0004, K8s:0.0003, K9s:0.0001, KJs:0.0132, KQs:0.0025, KK:0.0034, AKo:0.0005, A2s:0.0035, A3s:0.0001, A4s:0.0048, A5s:0.0025, A6s:0.0031, A7s:0.0029, A8s:0.0012, A9s:0.0009, ATs:0.0014, AJs:0.0176, AQs:0.004, AKs:0.0048, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0004, TT:0.0004, JJ:0.0008, QQ, KK, AKo:0.9998, AQs:0.2455, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0042, JJ:0.0066, QQ, AQo:0.0065, KK, AKo, AQs:0.7947, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@19|CO:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0822, 33:0.0002, 43s:0.0004, A4o:0.0002, 52s:0.0005, 54s:0.017, A5o:0.1423, 63s:0.0129, 64s:0.0001, 65s:0.044, 66:0.0001, A6o:0.0328, 75s:0.0002, 76s:0.0011, 77:0.0001, A7o:0.1299, 84s:0.0002, 85s:0.0008, 87s:0.0315, A8o:0.0499, 99:0.0005, A9o:0.0885, T4s:0.0001, T5s:0.0001, T7s:0.0003, T8s:0.0002, TT:0.0464, ATo:0.1764, J5s:0.0001, J6s:0.0001, J7s:0.0012, J8s:0.0001, J9s:0.1537, AJo:0.1095, Q2s:0.0001, Q7s:0.0001, QTs:0.0662, QJs:0.0025, QQ:0.0027, AQo:0.2982, K2s:0.0002, K4s:0.0001, K7s:0.0005, K9s:0.0001, KQs:0.0001, KK:0.2896, AKo:0.0003, A2s:0.1114, A3s:0.2026, A4s:0.0498, A5s:0.0106, A6s:0.1117, A7s:0.0116, A8s:0.2335, A9s:0.4657, ATs:0.151, AJs:0.2424, AQs:0.2687, AKs:0.1361, AA:0.1024"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0058, 62o:0.0006, T2o:0.0002, J2o:0.0016, A2o:0.05, 32s:0.0007, 33:0.1006, 93o:0.0002, Q3o:0.0003, A3o:0.0482, 42s:0.0001, 43s:0.002, 44:0.0055, A4o:0.0144, 52s:0.0011, 53s:0.0001, 54s:0.0711, 55:0.2311, J5o:0.0004, A5o:0.3819, 62s:0.001, 63s:0.0005, 64s:0.0002, 65s:0.2532, 66:0.2389, 76o:0.0014, 96o:0.0001, A6o:0.0716, 72s:0.0002, 73s:0.0014, 74s:0.0022, 75s:0.0011, 76s:0.0866, 77:0.2723, 97o:0.0011, Q7o:0.0003, A7o:0.1056, 83s:0.0001, 84s:0.0019, 85s:0.0787, 87s:0.1001, 88:0.1323, J8o:0.0002, A8o:0.2192, 92s:0.0052, 93s:0.0001, 95s:0.0008, 97s:0.0009, 98s:0.0007, 99:0.1136, J9o:0.0003, A9o:0.0295, T2s:0.0316, T3s:0.0041, T5s:0.0004, T7s:0.0006, T8s:0.0284, T9s:0.0006, TT:0.1611, KTo:0.0008, ATo:0.4963, J4s:0.0276, J5s:0.0006, J7s:0.0003, J9s:0.062, JTs:0.0135, JJ:0.1521, AJo:0.0981, Q2s:0.0004, Q4s:0.0007, Q5s:0.0003, Q6s:0.0011, Q7s:0.0023, QTs:0.0001, QQ:0.3484, AQo:0.636, K2s:0.0325, K3s:0.0002, K4s:0.0085, K5s:0.0001, K6s:0.0067, K7s:0.0002, K8s:0.0008, K9s:0.0867, KTs:0.0004, KJs:0.0056, KQs:0.014, KK:0.6701, AKo:0.9994, A2s:0.7944, A3s:0.5393, A4s:0.5744, A5s:0.14, A6s:0.0423, A7s:0.5626, A8s:0.3083, A9s:0.1997, ATs:0.848, AJs:0.3803, AQs:0.7309, AKs:0.8588, AA:0.8976"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 75s:0.0001, 88:0.0001, 94s:0.0001, 96s:0.0001, 99:0.0002, A9o:0.0003, TT:0.0227, J3s:0.0001, J8s:0.0001, AJo:0.0063, Q4s:0.0001, Q6s:0.0001, Q9s:0.0002, QJs:0.0003, QQ:0.0433, K8s:0.0001, K9s:0.0001, KTs:0.0005, KJs:0.0001, KK:0.3181, AKo:0.0001, A2s:0.0001, A6s:0.0002, A7s:0.0102, A8s:0.0002, A9s:0.0787, ATs:0.0235, AJs:0.0708, AQs:0.0002, AA:0.9932"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 52o:0.0001, A2o:0.0596, 32s:0.0001, 33:0.0227, A3o:0.4088, 43s:0.0004, 44:0.0006, A4o:0.005, 52s:0.0002, 53s:0.0198, 54s:0.0001, 55:0.3053, 65o:0.0001, 75o:0.0001, A5o:0.4917, 62s:0.0002, 64s:0.0003, 66:0.2363, 76o:0.0003, A6o:0.1723, 72s:0.0001, 74s:0.0001, 75s:0.0002, 76s:0.0024, 77:0.0603, 97o:0.0001, A7o:0.2592, 84s:0.0048, 87s:0.0009, 88:0.1219, Q8o:0.0001, A8o:0.1872, 95s:0.003, 96s:0.082, 99:0.147, A9o:0.188, T3s:0.0001, T5s:0.0004, T7s:0.0041, T8s:0.0015, T9s:0.0011, TT:0.268, KTo:0.0007, ATo:0.2508, J2s:0.0015, J6s:0.0002, J7s:0.0001, J9s:0.0055, JTs:0.0006, JJ:0.1335, AJo:0.2192, Q5s:0.0003, Q6s:0.0005, Q7s:0.0006, Q8s:0.0002, Q9s:0.0011, QTs:0.3676, QJs:0.0004, QQ:0.568, KQo:0.0025, AQo:0.9923, K2s:0.0002, K3s:0.0003, K4s:0.0003, K5s:0.007, K6s:0.124, K8s:0.0003, KTs:0.003, KJs:0.0002, KQs:0.0095, KK:0.6819, AKo:0.9943, A2s:0.6405, A3s:0.6184, A4s:0.7212, A5s:0.951, A6s:0.5444, A7s:0.7185, A8s:0.5247, A9s:0.5668, ATs:0.5532, AJs:0.7427, AQs:0.9996, AKs, AA:0.0068"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|BTN:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "73s:0.0001, TT:0.0011, JJ:0.6411, AJo:0.0001, QQ, AQo:0.9992, K4s:0.0001, K5s:0.0001, KQs:0.0001, KK, AKo, ATs:0.0006, AJs:0.3912, AQs:0.9998, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|CO:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "84s:0.0001, A9o:0.0001, TT:0.0002, J5s:0.0001, JJ:0.0001, QTs:0.0001, AQo:0.0001, KJs:0.0002, KK:0.0066, AKo:0.0001, A2s:0.0003, A4s:0.0001, A5s:0.0001, A6s:0.0002, A9s:0.0001, AJs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|CO:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 73s:0.0001, 76s:0.0001, 88:0.0001, 99:0.1194, TT:0.1436, JJ:0.4063, AJo:0.0002, QTs:0.0001, QJs:0.0005, QQ:0.9996, AQo:0.115, K8s:0.0001, K9s:0.0001, KK, AKo:0.9982, A2s:0.0009, A3s:0.0002, A5s:0.0001, A9s:0.0001, ATs:0.0056, AJs:0.015, AQs:0.3204, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|BTN:CALL@2|SB:3BET@6|CO:CALL@4",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0001, 33:0.0165, 73o:0.0001, K3o:0.0002, 42s:0.0001, 44:0.107, 74o:0.0001, 52s:0.0001, 53s:0.0044, 54s:0.0003, 55:0.001, 75o:0.0001, 63s:0.0001, 64s:0.0003, 65s:0.0001, 66:0.0003, J6o:0.0003, Q6o:0.0001, A6o:0.0001, 72s:0.0001, 73s:0.0001, 75s:0.0055, 76s:0.0006, 77:0.1269, K7o:0.0001, A7o:0.0001, 83s:0.0002, 84s:0.0002, 85s:0.0001, 87s:0.0001, 88:0.4587, T8o:0.0001, 94s:0.0012, 95s:0.0001, 96s:0.0027, 97s:0.0056, 98s:0.0003, 99:0.1589, Q9o:0.0001, K9o:0.0003, T4s:0.0001, T5s:0.0008, T6s:0.0001, T9s:0.0001, TT:0.2567, JTo:0.0002, QTo:0.0001, ATo:0.0001, J2s:0.0001, J3s:0.0003, J4s:0.0006, J5s:0.0001, J6s:0.0018, J9s:0.0001, JTs:0.0003, JJ:0.7663, QJo:0.0001, KJo:0.0002, Q4s:0.0052, Q6s:0.0016, Q7s:0.0005, Q8s:0.0002, Q9s:0.0007, QTs:0.0003, QJs:0.0004, QQ:0.7269, KQo:0.0003, K2s:0.0001, K4s:0.0008, K6s:0.0021, K7s:0.0006, K8s:0.0002, K9s:0.0001, KTs:0.0011, KJs:0.5818, KQs:0.0001, KK:0.1186, AKo:0.0007, A2s:0.0003, A3s:0.0003, A4s:0.0002, A5s:0.0011, A6s:0.0004, A7s:0.0001, A8s:0.0032, A9s:0.0026, ATs:0.1048, AJs:0.0062, AQs:0.0865, AKs:0.0234, AA:0.0005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.0003, A2o:0.0002, 43o:0.0001, 53o:0.0001, A3o:0.0001, 43s:0.0001, 52s:0.0003, 53s:0.001, 54s:0.0001, A5o:0.0001, 63s:0.0003, 64s:0.0002, 65s:0.0002, 66:0.0001, 76o:0.0001, 86o:0.0001, Q6o:0.0003, K6o:0.0004, A6o:0.0001, 72s:0.0001, 74s:0.0001, 75s:0.0003, 76s:0.0001, 77:0.0004, 87o:0.0001, Q7o:0.0002, K7o:0.0001, 83s:0.0001, 88:0.0036, Q8o:0.0001, 94s:0.0002, 97s:0.0002, T4s:0.0001, T5s:0.0004, T6s:0.0001, T9s:0.0001, KTo:0.0001, ATo:0.0001, J3s:0.0001, J4s:0.0002, J5s:0.0001, J6s:0.0003, J7s:0.0006, J9s:0.0003, JTs:0.0001, JJ:0.0032, QJo:0.0004, KJo:0.0001, Q3s:0.0002, Q4s:0.0003, Q6s:0.0002, Q7s:0.0003, Q8s:0.0001, Q9s:0.0002, QTs:0.0002, QJs:0.0002, QQ:0.0002, KQo:0.0002, AQo:0.0003, K3s:0.0001, K4s:0.0002, K5s:0.0003, K6s:0.0008, K7s:0.0009, K8s:0.0004, K9s:0.0006, KTs:0.0007, KK:0.7575, AKo:0.5086, A2s:0.0002, A4s:0.0004, A5s:0.0003, A7s:0.0016, A8s:0.0002, A9s:0.0009, ATs:0.0006, AJs:0.0004, AQs:0.0005, AKs:0.6612, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0016, TT, JJ, QQ, AQo, KK, AKo, AJs:0.2866, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.7393, QQ, KK, AKo:0.9998, AQs:0.945, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@19|BB:CALL@18",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "CO:OPEN@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0274, A2o:0.0002, 33:0.798, A3o:0.1364, 42s:0.0005, 43s:0.0209, 44:0.9916, 54o:0.0004, K4o:0.0128, A4o:0.0304, 53s:0.1216, 54s:0.7834, 55:0.9968, A5o:0.1785, 64s:0.0139, 65s:0.2361, 66:0.9957, 75s:0.0439, 76s:0.0416, 77:0.9526, 85s:0.0002, 86s:0.0002, 87s:0.0003, 88:0.9063, A8o:0.0815, 95s:0.0001, 98s:0.0519, 99:0.2668, A9o:0.0445, T3s:0.0001, T8s:0.0016, T9s:0.2151, TT:0.2414, ATo:0.2627, J3s:0.0002, J5s:0.0001, J9s:0.124, JTs:0.2882, JJ:0.0296, AJo:0.2994, Q3s:0.0009, Q5s:0.0001, Q7s:0.0027, Q8s:0.0024, Q9s:0.3152, QTs:0.7308, QJs:0.0624, QQ:0.0005, AQo:0.9724, K2s:0.0004, K3s:0.0002, K4s:0.0004, K5s:0.0001, K7s:0.0003, K8s:0.0007, KJs:0.0001, A2s:0.0036, A4s:0.0008, A6s:0.2395, A7s:0.0522, A8s:0.1016, A9s:0.0376, ATs:0.2363, AJs:0.4157, AQs:0.5442, AA:0.8231"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0017, A2o:0.0003, 33:0.2009, K3o:0.0248, A3o:0.2879, 43s:0.0008, 44:0.0082, K4o:0.2935, A4o:0.7554, 54s:0.1065, 55:0.003, 65o:0.0001, K5o:0.3834, A5o:0.5506, 63s:0.0001, 65s:0.0156, 66:0.0031, K6o:0.003, A6o:0.0154, 73s:0.0013, 75s:0.0067, 76s:0.0107, 77:0.0467, K7o:0.3193, A7o:0.023, 86s:0.0003, 87s:0.0018, 88:0.0848, K8o:0.1097, A8o:0.0133, 92s:0.0001, 95s:0.0001, 96s:0.0001, 98s:0.0086, 99:0.3185, K9o:0.2936, A9o:0.0009, T7s:0.0003, T9s:0.0015, TT:0.7573, KTo:0.9992, ATo:0.6301, J7s:0.0001, J8s:0.0003, J9s:0.1122, JTs:0.7023, JJ:0.9704, KJo:0.9998, AJo:0.7004, Q3s:0.0021, Q4s:0.0013, Q5s:0.0003, Q7s:0.0015, Q8s:0.0007, Q9s:0.133, QTs:0.2651, QJs:0.916, QQ:0.9995, KQo, AQo:0.0276, K2s:0.9952, K3s:0.9987, K4s:0.9991, K5s:0.9997, K6s, K7s:0.9995, K8s:0.999, K9s:0.9992, KTs, KJs:0.9998, KQs, KK, AKo, A2s:0.9915, A3s, A4s:0.999, A5s, A6s:0.631, A7s:0.9477, A8s:0.8983, A9s:0.9621, ATs:0.7637, AJs:0.5843, AQs:0.4558, AKs, AA:0.1769"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QTs:0.0002, QJs:0.0005, QQ:0.2878, AQo:0.0002, K3s:0.0338, K4s:0.0524, K5s:0.0667, K6s:0.0029, K7s:0.1906, K8s:0.0173, K9s:0.0371, KTs:0.8215, KJs:0.0148, KQs:0.8206, KK, AKo, A2s:0.4481, A3s:0.8214, A4s:0.3959, A5s:0.7518, A6s:0.0333, A7s:0.7241, A8s:0.1355, A9s:0.1597, ATs:0.4108, AJs:0.0421, AQs:0.4281, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0007, KK:0.9879, ATs:0.0001, AKs:0.9151, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 99:0.0012, TT:0.0298, JJ:0.1753, QQ:0.651, AQo:0.0001, KK, AKo, AQs:0.0012, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|BB:4BET@19|CO:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JTs:0.0001, Q9s:0.0002, K5s:0.0001, KTs:0.0001, KK:0.0006, AKo:0.0001, A2s:0.0002, A4s:0.0001, A8s:0.0001, ATs:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:3BET@6|CO:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0009, TT:0.9998, ATo:0.0001, JJ, AJo:0.0001, QQ, AQo, KK, AKo, A9s:0.0005, ATs:0.0012, AJs:0.9998, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7581, A2o:0.0007, 32s:0.0037, 33:0.9769, 43s:0.3555, 44:0.9376, 54o:0.006, 52s:0.3171, 53s:0.6416, 54s:0.7394, 55:0.9717, A5o:0.0008, 62s:0.1634, 63s:0.0093, 64s:0.5933, 65s:0.8581, 66:0.9323, 72s:0.0333, 73s:0.0108, 75s:0.3717, 76s:0.8726, 77:0.9649, 82s:0.1835, 84s:0.0005, 85s:0.6335, 86s:0.4768, 87s:0.2951, 88:0.9821, 92s:0.0018, 94s:0.0005, 95s:0.0245, 96s:0.6975, 97s:0.2503, 98s:0.3795, 99:0.9675, T3s:0.0443, T4s:0.1454, T5s:0.0316, T7s:0.2657, T8s:0.0344, T9s:0.8089, TT:0.8799, QTo:0.0082, KTo:0.5491, ATo:0.006, J3s:0.0179, J6s:0.0202, J7s:0.5492, J8s:0.001, J9s:0.1151, JTs:0.4917, JJ:0.4778, QJo:0.1279, KJo:0.463, AJo:0.4627, Q2s:0.0148, Q3s:0.1865, Q4s:0.004, Q5s:0.1391, Q6s:0.3659, Q7s:0.2973, Q8s:0.0044, Q9s:0.5295, QTs:0.8802, QJs:0.2003, QQ:0.0013, KQo:0.113, AQo:0.0857, K2s:0.0432, K3s:0.5029, K4s:0.3175, K5s:0.4901, K6s:0.197, K7s:0.4925, K8s:0.1558, K9s:0.2456, KTs:0.6529, KJs:0.1644, KQs:0.0428, AKo:0.0016, A2s:0.0193, A3s:0.0257, A4s:0.0489, A5s:0.0687, A6s:0.1271, A7s:0.0072, A8s:0.4142, A9s:0.7027, ATs:0.3826, AJs:0.3867, AQs:0.2858, AKs:0.0001, AA:0.0009"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.019, A2o:0.2128, 32s:0.0075, K3o:0.0328, A3o:0.1291, 43s:0.0091, 44:0.0002, Q4o:0.0006, K4o:0.0008, A4o:0.1264, 52s:0.0069, A5o:0.0414, 63s:0.0001, 64s:0.0004, A6o:0.0604, 72s:0.0024, 75s:0.0016, 76s:0.0054, A7o:0.2629, 82s:0.0006, 87s:0.0027, A8o:0.1871, 92s:0.0003, 96s:0.0002, 98s:0.0005, J9o:0.0006, A9o:0.0719, T6s:0.0003, T7s:0.0004, T8s:0.0005, TT:0.0049, KTo:0.0011, ATo:0.0081, J3s:0.0005, J4s:0.0335, J5s:0.0173, J7s:0.0006, J9s:0.0029, JTs:0.0006, JJ:0.363, QJo:0.0003, AJo:0.1572, Q3s:0.0037, Q5s:0.0009, Q6s:0.0057, Q7s:0.0038, Q8s:0.0005, Q9s:0.0034, QTs:0.0007, QJs:0.0001, QQ:0.0301, KQo:0.0004, AQo:0.0736, K2s:0.0009, K3s:0.0015, K5s:0.0005, K6s:0.0028, K7s:0.0002, K8s:0.0044, K9s:0.009, KJs:0.0003, KK:0.1713, AKo:0.2291, A2s:0.0099, A3s:0.0916, A4s:0.015, A6s:0.0489, A7s:0.0029, A8s:0.0102, A9s:0.0025, ATs:0.0005, AJs:0.0101, AQs:0.0232, AKs:0.2643, AA:0.9989"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1281, K2o:0.0198, A2o:0.1333, 32s:0.0016, Q3o:0.0005, K3o:0.0845, A3o:0.1035, 42s:0.0083, 43s:0.0025, 44:0.0047, Q4o:0.0004, A4o:0.3388, 53s:0.1605, 55:0.0158, K5o:0.0359, A5o:0.5555, 66:0.0006, Q6o:0.0003, A6o:0.0904, 72s:0.0028, 73s:0.01, 74s:0.0029, 75s:0.0312, 76s:0.0213, 77:0.0252, Q7o:0.0031, A7o:0.0004, 85s:0.0057, 86s:0.0003, 87s:0.3026, K8o:0.0022, A8o:0.0214, 92s:0.001, 94s:0.0005, 97s:0.0004, J9o:0.0013, K9o:0.0193, A9o:0.1998, T5s:0.0088, T6s:0.0001, T8s:0.0102, T9s:0.0015, TT:0.0098, QTo:0.0086, KTo:0.0066, ATo:0.0072, J3s:0.2502, J4s:0.0114, J5s:0.0024, J6s:0.0133, J7s:0.0483, J8s:0.3299, J9s:0.0369, JTs:0.1008, JJ:0.1581, QJo:0.2467, KJo:0.4592, AJo:0.3656, Q2s:0.02, Q3s:0.0087, Q6s:0.0626, Q8s:0.0735, Q9s:0.0059, QTs:0.0166, QJs:0.7918, QQ:0.9685, KQo:0.8638, AQo:0.8364, K2s:0.3062, K3s:0.3936, K4s:0.5993, K5s:0.3018, K6s:0.2955, K7s:0.4178, K8s:0.6213, K9s:0.5888, KTs:0.0926, KJs:0.8268, KQs:0.9522, KK:0.8287, AKo:0.7692, A2s:0.863, A3s:0.7791, A4s:0.868, A5s:0.9114, A6s:0.6909, A7s:0.9594, A8s:0.3714, A9s:0.2355, ATs:0.5162, AJs:0.5969, AQs:0.6908, AKs:0.7352, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0014, TT:0.0014, JJ:0.2087, QQ, AQo:0.7323, K7s:0.0001, KQs:0.0001, KK, AKo:0.9996, A9s:0.0001, ATs:0.0005, AJs:0.0029, AQs:0.7504, AKs:0.9985, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.3601, JJ, QQ, AQo:0.9738, KK, AKo, ATs:0.0001, AJs:0.0118, AQs:0.997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@19|CO:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "82o:0.0001, A2o:0.0001, 44:0.0013, A4o:0.0002, 52s:0.0002, 62s:0.0001, 63s:0.0001, 64s:0.1062, 66:0.0002, Q6o:0.0001, K6o:0.0001, 73s:0.0001, 76s:0.0005, 77:0.0001, J7o:0.0001, Q7o:0.0001, A7o:0.0001, 82s:0.0001, 84s:0.0003, 85s:0.0008, 86s:0.0008, 88:0.0155, K8o:0.0001, A8o:0.0402, 92s:0.0001, 93s:0.0003, 95s:0.0001, 96s:0.0003, 97s:0.0001, 99:0.0006, A9o:0.0289, T2s:0.0002, T3s:0.0001, T4s:0.0027, T6s:0.0001, T7s:0.0005, T8s:0.0138, TT:0.0781, JTo:0.0001, QTo:0.0002, ATo:0.0001, J3s:0.0002, J4s:0.0002, J6s:0.0001, J7s:0.0007, J9s:0.0003, JTs:0.0387, AJo:0.3551, Q2s:0.0025, Q3s:0.0003, Q6s:0.0012, Q7s:0.0003, Q8s:0.001, Q9s:0.0001, QTs:0.0001, QJs:0.0005, QQ:0.0043, KQo:0.0002, AQo:0.0204, K4s:0.0098, K5s:0.0001, K6s:0.0051, K7s:0.0025, K8s:0.0001, K9s:0.0003, KTs:0.0891, KQs:0.0008, KK:0.0036, AKo:0.0001, A2s:0.001, A3s:0.0004, A4s:0.2771, A5s:0.0027, A6s:0.001, A7s:0.0135, A8s:0.1675, A9s:0.0023, ATs:0.1787, AJs:0.3761, AQs:0.0012, AA:0.4974"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3698, 32o:0.0007, 42o:0.0498, 52o:0.0132, J2o:0.0003, Q2o:0.0001, A2o:0.5304, 32s:0.0723, 33:0.7508, 43o:0.0937, 83o:0.0115, Q3o:0.0813, A3o:0.2705, 42s:0.0539, 43s:0.7015, 44:0.2513, 54o:0.4756, 64o:0.1378, 74o:0.0235, 94o:0.0876, K4o:0.0977, A4o:0.1569, 52s:0.0027, 53s:0.5343, 54s:0.3474, 55:0.6113, 65o:0.0001, 75o:0.0394, 85o:0.1044, 95o:0.0066, T5o:0.0008, J5o:0.061, Q5o:0.0444, A5o:0.4254, 62s:0.3851, 63s:0.311, 64s:0.1582, 65s:0.3525, 66:0.5391, 76o:0.4923, 86o:0.0089, 96o:0.0732, J6o:0.007, Q6o:0.0166, K6o:0.0008, A6o:0.6766, 72s:0.0492, 73s:0.0011, 74s:0.2345, 75s:0.4856, 76s:0.3165, 77:0.7614, 87o:0.0654, 97o:0.0863, T7o:0.0657, J7o:0.0001, Q7o:0.0004, K7o:0.1996, A7o:0.2913, 82s:0.0931, 83s:0.0478, 84s:0.0674, 85s:0.1886, 86s:0.2604, 87s:0.7441, 88:0.4977, 98o:0.0985, T8o:0.1337, J8o:0.0103, K8o:0.2511, A8o:0.336, 92s:0.1111, 93s:0.001, 94s:0.0626, 95s:0.0585, 96s:0.3981, 97s:0.3626, 98s:0.1566, 99:0.6673, T9o:0.0134, J9o:0.0268, Q9o:0.1054, K9o:0.0009, A9o:0.1744, T2s:0.0044, T3s:0.0014, T4s:0.0291, T5s:0.0031, T6s:0.4209, T7s:0.0642, T8s:0.1816, T9s:0.0479, TT:0.1623, JTo:0.001, KTo:0.006, ATo:0.2223, J2s:0.0009, J3s:0.0096, J4s:0.038, J5s:0.4463, J6s:0.0318, J7s:0.667, J8s:0.3595, J9s:0.1405, JTs:0.4555, JJ:0.1516, QJo:0.0029, KJo:0.0791, AJo:0.3017, Q2s:0.1615, Q3s:0.4959, Q4s:0.1182, Q5s:0.0376, Q6s:0.0547, Q7s:0.1046, Q8s:0.1234, Q9s:0.0711, QTs:0.0751, QJs:0.2291, QQ:0.9917, KQo:0.0405, AQo:0.9356, K2s:0.4103, K3s:0.1487, K4s:0.7016, K5s:0.3692, K6s:0.4238, K7s:0.4975, K8s:0.4077, K9s:0.6878, KTs:0.2618, KJs:0.5223, KQs:0.6784, KK:0.9964, AKo, A2s:0.4103, A3s:0.5606, A4s:0.4596, A5s:0.9854, A6s:0.7539, A7s:0.245, A8s:0.1346, A9s:0.8475, ATs:0.7637, AJs:0.5732, AQs:0.9971, AKs, AA:0.5026"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0001, 77:0.0126, A7o:0.0001, 87s:0.0001, 88:0.0282, T8s:0.0001, TT:0.0353, J8s:0.0001, JJ:0.002, AJo:0.0002, Q9s:0.0007, QQ:0.0001, AQo:0.1276, K4s:0.0004, KJs:0.0001, KQs:0.0001, A3s:0.0001, A6s:0.0076, A7s:0.0005, A8s:0.2872, A9s:0.0052, ATs:0.2915, AJs:0.2035, AQs:0.004, AKs:0.0004, AA:0.9898"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0478, K2o:0.0002, A2o:0.001, 33:0.0974, Q3o:0.0002, K3o:0.0004, A3o:0.0014, 43s:0.0011, 44:0.1345, T4o:0.0001, K4o:0.0005, A4o:0.0025, 52s:0.0004, 53s:0.0097, 54s:0.0011, 55:0.0798, A5o:0.0015, 62s:0.0003, 63s:0.0002, 64s:0.0009, 66:0.1834, 76o:0.0006, 86o:0.0005, K6o:0.0002, 75s:0.0018, 76s:0.0035, 77:0.154, 87o:0.0002, Q7o:0.0005, A7o:0.0009, 84s:0.0001, 85s:0.001, 86s:0.0009, 87s:0.0015, 88:0.1286, 98o:0.0011, T8o:0.0001, A8o:0.0031, 94s:0.0005, 96s:0.0014, 97s:0.0017, 99:0.1308, T9o:0.0006, K9o:0.0005, A9o:0.0027, T4s:0.0003, T5s:0.0001, T7s:0.0002, T8s:0.0106, T9s:0.0164, TT:0.2929, JTo:0.0008, KTo:0.0001, ATo:0.0021, J3s:0.0001, J4s:0.0003, J5s:0.0002, J6s:0.0012, J8s:0.0001, J9s:0.0113, JTs:0.0565, JJ:0.8379, AJo:0.5301, Q3s:0.0006, Q4s:0.0004, Q5s:0.0008, Q6s:0.0026, Q8s:0.0001, Q9s:0.0027, QTs:0.0732, QJs:0.0593, QQ:0.9371, KQo:0.02, AQo:0.8343, K2s:0.0001, K3s:0.0003, K4s:0.0244, K5s:0.0834, K6s:0.0005, K7s:0.0232, K8s:0.0006, K9s:0.0497, KJs:0.0888, KQs:0.0326, KK, AKo, A2s:0.0042, A3s:0.0685, A4s:0.0371, A5s:0.038, A6s:0.1296, A7s:0.0307, A8s:0.0281, A9s:0.0854, ATs:0.0195, AJs:0.5936, AQs:0.996, AKs:0.9996, AA:0.0102"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|CO:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0522, KK:0.9706, A6s:0.0004, A9s:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|CO:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, A3o:0.0011, 44:0.0016, A4o:0.0001, 52s:0.0001, 55:0.0001, A6o:0.0001, 77:0.0004, 84s:0.0007, 88:0.0344, A8o:0.0016, 98s:0.0002, 99:0.5689, A9o:0.0015, T2s:0.0003, T8s:0.0002, TT:0.7598, ATo:0.0163, J7s:0.0002, JJ:0.8202, AJo:0.0138, Q4s:0.0003, Q6s:0.0003, Q8s:0.0001, Q9s:0.0001, QJs:0.0003, QQ:0.9964, AQo:0.3386, K3s:0.0003, K6s:0.0003, K8s:0.0001, K9s:0.0012, KTs:0.0086, KJs:0.0006, KQs:0.0002, KK:0.9993, AKo:0.9985, A2s:0.0005, A3s:0.0001, A4s:0.0026, A6s:0.0037, A7s:0.0001, A9s:0.0023, ATs:0.0002, AJs:0.0666, AQs:0.7033, AKs:0.9987, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|CO:CALL@4",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0003, A3o:0.0001, 43s:0.0006, 52s:0.0006, 54s:0.0007, 65o:0.0001, 64s:0.0002, 66:0.0001, 76o:0.0001, 77:0.1052, 87o:0.0001, Q7o:0.0001, 85s:0.0032, 86s:0.0001, 88:0.0147, 95s:0.0714, 98s:0.0043, 99:0.1382, T2s:0.0027, T3s:0.0001, T5s:0.0001, T7s:0.0085, T8s:0.0002, T9s:0.0004, TT:0.0044, KTo:0.0001, J2s:0.0003, J3s:0.0006, J4s:0.0001, J5s:0.0001, J7s:0.0002, J8s:0.0001, J9s:0.0003, JJ:0.0488, Q2s:0.0004, Q6s:0.0023, Q8s:0.0001, Q9s:0.0002, QTs:0.0004, QJs:0.0001, QQ:0.8194, KQo:0.0001, AQo:0.0549, K2s:0.0003, K4s:0.0006, K5s:0.0017, K8s:0.0002, KTs:0.0009, KJs:0.0001, KK:0.7717, AKo:0.0093, A2s:0.0011, A4s:0.0001, A6s:0.0005, A8s:0.0001, A9s:0.0103, ATs:0.0035, AJs:0.0246, AQs:0.4413, AKs:0.2126"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "J2o:0.0001, 73o:0.0001, K3o:0.0002, A3o:0.0001, 43s:0.0001, 44:0.0001, 74o:0.0001, 52s:0.0001, 54s:0.0002, 75o:0.0001, 95o:0.0001, A5o:0.0001, 63s:0.0001, 65s:0.0001, 76o:0.0001, 72s:0.0001, 75s:0.0005, 77:0.0001, T7o:0.0001, Q7o:0.0001, K7o:0.0001, 82s:0.0007, 84s:0.0002, 86s:0.0001, 88:0.0001, 93s:0.0001, 95s:0.0002, 97s:0.0002, K9o:0.0001, T2s:0.0001, T3s:0.0003, T6s:0.0003, T8s:0.0004, T9s:0.0004, KTo:0.0001, ATo:0.0001, J2s:0.0003, J3s:0.0002, J4s:0.0001, J5s:0.0001, J8s:0.0004, J9s:0.0004, JTs:0.0009, JJ:0.0005, AJo:0.0002, Q2s:0.0004, Q3s:0.0001, Q4s:0.0001, Q9s:0.0004, QTs:0.0006, QQ:0.1014, AQo:0.0013, K2s:0.0002, K3s:0.0003, K4s:0.0007, K5s:0.0006, K8s:0.0005, K9s:0.0001, KQs:0.0001, KK:0.1175, AKo:0.0774, A4s:0.0005, A6s:0.0001, A9s:0.0023, ATs:0.0005, AJs:0.0206, AQs:0.0459, AKs:0.2659, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0002, 42s:0.0002, 44:0.0007, J4o:0.0001, 52s:0.0001, 54s:0.0002, 55:0.0006, 66:0.0001, 72s:0.0001, 86s:0.0002, 87s:0.0001, 88:0.0008, Q8o:0.0001, 94s:0.0001, 97s:0.0001, 99:0.0036, T9o:0.0001, A9o:0.0002, T4s:0.0001, T6s:0.0003, T7s:0.0001, T8s:0.0012, TT:0.2228, QTo:0.0002, J3s:0.0011, J4s:0.0001, J7s:0.0012, J8s:0.0001, J9s:0.0003, JTs:0.0009, JJ:0.9997, KJo:0.0006, AJo:0.8985, Q2s:0.0007, Q3s:0.0001, Q4s:0.0001, Q5s:0.0001, Q6s:0.0001, Q7s:0.0001, Q8s:0.0001, QTs:0.0167, QJs:0.0142, QQ, AQo:0.9996, K2s:0.0001, K3s:0.0001, K5s:0.0001, K8s:0.0056, KTs:0.0069, KJs:0.0006, KQs:0.0009, KK, AKo:0.9935, A2s:0.0002, A3s:0.0002, A5s:0.0056, A6s:0.0005, A7s:0.0001, A8s:0.0001, A9s:0.0005, ATs:0.039, AJs:0.9294, AQs:0.9603, AKs:0.987, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.995, QQ, KK, AKo, AQs:0.0005, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9996, QQ, KK, AKo, AQs:0.0906, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ, QQ, KK, AKo, AQs:0.9988, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0428, JJ, QQ, AQo:0.9465, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19|BTN:CALL@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19|BTN:CALL@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19|CO:CALL@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@19|CO:CALL@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@19|CO:CALL@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@19|SB:CALL@18.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0033, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "54s:0.0132, 55:0.0089, 65s:0.0192, 66:0.0794, 77:0.0226, 88:0.0328, 99:0.0189, TT:0.0787, JJ:0.8559, AJo:0.2101, QJs:0.0002, QQ:0.1066, KQo:0.1862, AQo:0.0025, K6s:0.0002, K9s:0.0001, KTs:0.2559, KJs:0.606, KQs:0.0001, KK:0.4176, A9s:0.0008, ATs:0.7194, AJs:0.9986, AQs:0.0124"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0924, A3o:0.0932, A4o:0.0826, A5o:0.2679, A6o:0.0075, A7o:0.0416, A8o:0.0784, A9o:0.0061, ATo:0.2108, AJo:0.4435, Q6s:0.0005, QQ:0.0966, KQo:0.0002, AQo:0.0596, K2s:0.0001, K6s:0.0005, KK:0.0008, A2s:0.0023, A6s:0.0006, A7s:0.0001, A9s:0.0039, ATs:0.0001, AQs:0.1666, AKs:0.0728, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, A3o:0.0398, 44:0.0176, A4o:0.1064, 55:0.0083, A5o:0.2086, 66:0.0101, 77:0.0545, 88:0.0198, TT:0.0001, JJ:0.0004, QJs:0.0003, QQ:0.7968, KQo:0.6787, AQo:0.9379, K2s:0.0071, K3s:0.0074, K4s:0.0262, K5s:0.1562, K6s:0.0834, K7s:0.0034, K8s:0.0014, K9s:0.0006, KTs:0.005, KJs:0.002, KQs, KK:0.5816, AKo, A2s:0.9949, A3s, A4s, A5s:0.9998, A6s:0.9992, A7s:0.9997, A8s:0.9987, A9s:0.8994, ATs:0.2794, AJs:0.0014, AQs:0.821, AKs:0.9272"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "44:0.0001, 53s:0.0001, 55:0.0016, 65s:0.1116, 66:0.0832, 77:0.0407, 88:0.1544, 99:0.1323, T9s:0.0003, TT:0.113, JJ:0.8905, KJo:0.0001, AJo:0.3882, QTs:0.0004, QJs:0.0004, QQ:0.0272, KQo:0.0087, AQo:0.0005, K4s:0.0001, K5s:0.0003, KTs:0.3059, KJs:0.9424, KQs:0.0001, KK:0.2613, ATs:0.135, AJs:0.9972, AQs:0.0002"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.1584, A3o:0.0659, A4o:0.2328, K5o:0.0001, A5o:0.1226, A6o:0.0169, A7o:0.1489, A8o:0.0114, K9o:0.0002, A9o:0.0395, TT:0.0002, KTo:0.0002, ATo:0.1282, JJ:0.0654, AJo:0.4695, Q5s:0.0008, QTs:0.0001, QJs:0.0001, QQ:0.0568, KQo:0.0003, AQo:0.0011, K2s:0.0003, K4s:0.0012, K5s:0.0003, K7s:0.0001, K8s:0.0006, KTs:0.0001, KK:0.0022, AKo:0.0003, A2s:0.0002, A3s:0.0003, A4s:0.0002, A7s:0.0001, A8s:0.0018, A9s:0.0025, ATs:0.0011, AJs:0.0027, AQs:0.2531, AKs:0.2081, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0169, A2o:0.0001, 33:0.3658, A3o:0.2126, 44:0.485, A4o:0.4395, 55:0.3845, A5o:0.5279, 66:0.2526, A6o:0.0003, 77:0.2434, A7o:0.0001, 88:0.0244, 99:0.0001, TT:0.0001, JJ:0.0001, AJo:0.0001, Q9s:0.0001, QJs:0.0014, QQ:0.9161, KQo:0.9908, AQo:0.9984, K2s:0.0001, K3s:0.4011, K4s:0.3428, K5s:0.907, K6s:0.3578, K7s:0.0663, K8s:0.0001, K9s:0.0703, KTs:0.5374, KJs:0.0357, KQs, KK:0.7365, AKo:0.9997, A2s:0.9998, A3s:0.9995, A4s:0.9997, A5s, A6s, A7s:0.9979, A8s:0.9966, A9s:0.9971, ATs:0.8634, AJs:0.0001, AQs:0.7467, AKs:0.7919"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0001, 54s:0.0037, 55:0.0181, 65s:0.001, 66:0.2693, 77:0.1032, 88:0.3449, 99:0.2573, T9s:0.0012, TT:0.0754, J9s:0.0001, JTs:0.0092, JJ:0.4713, KJo:0.0072, AJo:0.4138, QTs:0.0005, QJs:0.1733, KQo:0.0005, K3s:0.0621, K4s:0.002, K5s:0.0001, K6s:0.0014, K8s:0.0022, K9s:0.2535, KTs:0.0003, KJs:0.3102, KQs:0.0018, A6s:0.0002, A8s:0.0001, A9s:0.0049, ATs:0.0011, AJs:0.9389, AQs:0.0001"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.0002, A2o:0.2791, K3o:0.0001, A3o:0.1363, A4o:0.1423, 54s:0.0015, 55:0.0106, K5o:0.016, A5o:0.0668, A6o:0.0167, 77:0.0001, A7o:0.1935, A8o:0.0216, A9o:0.0576, KTo:0.0216, ATo:0.139, JJ:0.2519, AJo:0.4652, Q3s:0.0009, Q4s:0.0022, Q5s:0.017, Q6s:0.0002, Q7s:0.0006, Q9s:0.011, QTs:0.0015, QQ:0.0013, AQo:0.0019, K2s:0.0164, K3s:0.0354, K5s:0.0369, K6s:0.0078, K7s:0.002, K8s:0.003, K9s:0.0055, KK:0.121, AKo:0.001, A6s:0.0002, A9s:0.0002, AJs:0.0155, AQs:0.0044, AKs:0.5404, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0175, A2o:0.1283, 33:0.1692, A3o:0.4139, 44:0.4242, A4o:0.7567, 54s:0.0002, 55:0.6518, A5o:0.8978, 65s:0.0001, 66:0.1035, A6o:0.0004, 77:0.1283, A7o:0.0001, 88:0.011, A9o:0.0001, TT:0.9242, KTo:0.0076, ATo:0.8512, JJ:0.2768, KJo:0.0002, AJo:0.017, Q2s:0.0001, Q5s:0.0003, Q6s:0.0002, Q7s:0.0003, Q8s:0.0002, Q9s:0.0012, QTs:0.9933, QJs:0.642, QQ:0.9987, KQo:0.9995, AQo:0.9981, K2s:0.1429, K3s:0.7293, K4s:0.9934, K5s:0.9455, K6s:0.9217, K7s:0.8459, K8s:0.589, K9s:0.5085, KTs:0.9989, KJs:0.6898, KQs:0.9982, KK:0.879, AKo:0.999, A2s, A3s, A4s, A5s, A6s:0.9991, A7s, A8s:0.9996, A9s:0.9944, ATs:0.9989, AJs:0.0456, AQs:0.9955, AKs:0.4596"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32s:0.9859, 33, K3o:0.0004, A3o:0.0002, 42s:0.9997, 43s, 44, 54o:0.4302, 64o:0.0016, K4o:0.1163, A4o:0.0001, 52s:0.9988, 53s, 54s:0.9998, 55:0.9996, 65o:0.9858, K5o:0.0746, A5o:0.1103, 62s:0.7248, 63s, 64s:0.9997, 65s:0.9998, 66, 76o:0.3268, 73s:0.3104, 74s:0.9996, 75s, 76s, 77, 87o:0.0015, Q7o:0.0005, K7o:0.4367, A7o:0.0712, 82s:0.0899, 84s:0.9417, 85s:0.9998, 86s:0.9997, 87s, 88, 98o:0.2696, Q8o:0.0201, K8o:0.0013, A8o:0.8816, 92s:0.0005, 93s:0.3576, 94s:0.025, 95s, 96s, 97s:0.9956, 98s:0.9994, 99, T9o:0.9334, J9o:0.0001, Q9o:0.2651, K9o:0.972, A9o:0.9924, T2s:0.0563, T3s:0.4375, T4s:0.9645, T5s:0.2959, T6s:0.9891, T7s:0.9996, T8s:0.9998, T9s:0.9998, TT:0.9998, JTo:0.5689, QTo:0.9991, KTo:0.999, ATo:0.4505, J2s:0.4681, J3s:0.9732, J4s:0.8909, J5s:0.999, J6s:0.9162, J7s:0.9996, J8s:0.9988, J9s, JTs, JJ, QJo, KJo:0.9998, AJo, Q2s:0.9972, Q3s:0.9996, Q4s:0.9986, Q5s:0.9997, Q6s:0.9997, Q7s, Q8s:0.9998, Q9s:0.9994, QTs:0.8648, QJs:0.999, QQ:0.4968, KQo:0.9972, AQo:0.7404, K2s:0.9997, K3s:0.989, K4s:0.9943, K5s:0.9948, K6s:0.9988, K7s:0.9998, K8s:0.9994, K9s:0.999, KTs:0.9839, KJs, KQs:0.9968, KK:0.4622, A3s:0.0115, A5s:0.0106, A6s:0.008, A7s:0.0253, A8s:0.996, A9s:0.9969, ATs, AJs, AQs:0.9979, AKs:0.1371"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "A2o:0.3956, K3o:0.0002, A3o:0.1275, A4o:0.1089, 52s:0.0001, 85o:0.0001, K5o:0.0001, A5o:0.3853, K6o:0.0001, A6o:0.134, 72s:0.0001, A7o:0.3616, T8o:0.0006, A8o:0.117, 93s:0.0013, 97s:0.0001, T9o:0.0179, A9o:0.0076, T2s:0.0048, T3s:0.051, T4s:0.0093, T5s:0.0538, T6s:0.0001, T7s:0.0001, JTo:0.0333, QTo:0.0004, Q2s:0.0001, QQ:0.0152, KK:0.1476, AKo:0.0089, A2s:0.0001, A6s:0.0001, AQs:0.0015, AKs:0.8505, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.3276, A3o:0.6108, K4o:0.0001, A4o:0.8643, 52s:0.0001, 53s:0.0001, 54s:0.0001, 55:0.0004, K5o:0.0003, A5o:0.4484, 65s:0.0002, A6o:0.0034, 75s:0.0001, A7o:0.0368, 87s:0.0001, K8o:0.0001, A8o:0.0012, T7s:0.0001, TT:0.0002, QTo:0.0001, KTo:0.001, ATo:0.5494, J2s:0.0001, JTs:0.0001, JJ:0.0001, QJo:0.0001, KJo:0.0002, Q2s:0.0023, Q3s:0.0002, Q4s:0.0014, Q5s:0.0003, Q6s:0.0001, Q8s:0.0001, Q9s:0.0006, QTs:0.1352, QJs:0.001, QQ:0.488, KQo:0.0028, AQo:0.2595, K2s:0.0002, K3s:0.0109, K4s:0.0056, K5s:0.0051, K6s:0.0012, K7s:0.0002, K8s:0.0006, K9s:0.001, KTs:0.0161, KJs:0.0001, KQs:0.0032, KK:0.3901, AKo:0.9911, A2s, A3s:0.9885, A4s, A5s:0.9894, A6s:0.9919, A7s:0.9746, A8s:0.004, A9s:0.0031, ATs:0.0001, AQs:0.0006, AKs:0.0124"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0109, 99:0.0225, TT:0.9956, JJ, AJo:0.0079, QQ, AQo, KK, AKo, ATs:0.7189, AJs:0.9984, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0047, 33:0.6347, A3o:0.0118, 43s:0.0002, 44:0.4164, A4o:0.0661, 53s:0.0023, 54s:0.8519, 55:0.9895, A5o:0.4645, 64s:0.3713, 65s:0.9875, 66:0.9467, A6o:0.0001, 74s:0.0002, 75s:0.0731, 76s:0.7852, 77:0.9985, A7o:0.016, 85s:0.0003, 86s:0.0317, 87s:0.2272, 88:0.6956, A8o:0.0397, 96s:0.0001, 97s:0.0211, 98s:0.3113, 99:0.2432, A9o:0.0092, T6s:0.0001, T9s:0.0861, TT:0.1908, ATo:0.153, J4s:0.0009, J8s:0.0014, J9s:0.1091, JTs:0.1695, JJ:0.3624, KJo:0.0002, AJo:0.4742, Q4s:0.0003, Q6s:0.0002, QTs:0.1612, QJs:0.0346, QQ:0.4631, AQo:0.9039, K3s:0.0002, K4s:0.0198, K5s:0.0214, K6s:0.2144, K7s:0.001, K8s:0.0009, K9s:0.0245, KTs:0.2094, KJs:0.0392, KQs:0.2008, KK:0.0045, A2s:0.0076, A3s:0.0539, A4s:0.0035, A5s:0.0141, A6s:0.0003, A7s:0.0414, A8s:0.0794, A9s:0.0291, ATs:0.3459, AJs:0.2365, AQs:0.2265, AA:0.85"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0017, A2o:0.0125, 33:0.0875, A3o:0.3661, 42s:0.0001, 43s:0.0001, 44:0.5803, A4o:0.7144, 52s:0.0002, 53s:0.0006, 54s:0.0043, 55:0.0095, A5o:0.247, 62s:0.0001, 63s:0.0001, 64s:0.0008, 65s:0.0009, 66:0.0533, A6o:0.1242, 74s:0.0003, 75s:0.0005, 76s:0.0006, 77:0.0012, A7o:0.1875, 85s:0.0006, 86s:0.105, 87s:0.0488, 88:0.2994, A8o:0.2518, 96s:0.0004, 97s:0.0013, 98s:0.1506, 99:0.7535, A9o:0.2258, T8s:0.0001, T9s:0.5716, TT:0.8077, ATo:0.4139, J6s:0.0002, J8s:0.0002, J9s:0.0265, JTs:0.4422, JJ:0.6374, KJo:0.0003, AJo:0.4724, Q2s:0.0001, Q5s:0.0001, Q6s:0.0002, Q9s:0.0082, QTs:0.0301, QJs:0.038, QQ:0.5369, AQo:0.0956, K3s:0.0002, K4s:0.0103, K5s:0.0007, K6s:0.0307, K7s:0.0081, K8s:0.0202, K9s:0.1116, KTs:0.3082, KJs:0.872, KQs:0.6488, KK:0.9955, AKo, A2s:0.9331, A3s:0.919, A4s:0.9959, A5s:0.9859, A6s:0.999, A7s:0.9586, A8s:0.9204, A9s:0.9699, ATs:0.654, AJs:0.7635, AQs:0.7733, AKs, AA:0.15"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BB:3BET@6|HJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT, JJ, AJo:0.9987, QQ, AQo, KK, AKo, ATs:0.0045, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0491, JJ:0.3881, QQ, AQo:0.0001, KK, AKo, AQs:0.9974, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9996, KK, AKo:0.8123, AQs:0.0009, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ, KK, AKo, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@19|BB:CALL@18",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0007, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@19|SB:CALL@18.5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.0002, 33:0.0002, A3o:0.0003, 43s:0.0003, 44:0.0878, A4o:0.0021, 52s:0.0003, 53s:0.0002, 54s:0.0071, 55:0.4198, 65o:0.0001, A5o:0.04, 62s:0.0001, 64s:0.0153, 65s:0.0403, 66:0.9255, A6o:0.0033, 74s:0.0001, 75s:0.0011, 76s:0.2628, 77:0.7948, A7o:0.011, 82s:0.0001, 83s:0.0001, 85s:0.0001, 86s:0.0457, 87s:0.0037, 88:0.4704, A8o:0.0002, 96s:0.0001, 97s:0.0001, 98s:0.0009, 99:0.4026, A9o:0.0002, T6s:0.0002, T9s:0.0027, TT:0.2323, QTo:0.0001, ATo:0.0029, J6s:0.0001, J8s:0.0003, J9s:0.0003, JTs:0.0007, JJ:0.9707, AJo:0.7552, Q9s:0.0003, QTs:0.0014, QJs:0.0019, QQ:0.0041, AQo:0.0536, K2s:0.0001, K6s:0.0005, K7s:0.0001, K8s:0.0001, KTs:0.0506, KJs:0.0001, KQs:0.017, KK:0.0355, AKo:0.0002, A2s:0.0003, A4s:0.0006, A5s:0.0477, A6s:0.0324, A7s:0.0002, A8s:0.0342, A9s:0.0002, ATs:0.0244, AJs:0.9816, AQs:0.0623, AA:0.6036"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.035, A2o:0.572, 33:0.0077, A3o:0.2901, 43s:0.0003, 44:0.1459, A4o:0.609, 52s:0.0006, 53s:0.0003, 54s:0.0328, 55:0.0661, A5o:0.4405, 62s:0.0004, 63s:0.0002, 64s:0.0015, 65s:0.2145, 66:0.0735, K6o:0.0004, A6o:0.1604, 74s:0.0003, 75s:0.0135, 76s:0.6295, 77:0.2036, A7o:0.3178, 85s:0.0001, 86s:0.1335, 87s:0.0531, 88:0.478, A8o:0.3217, 93s:0.0001, 97s:0.0003, 98s:0.2704, 99:0.413, A9o:0.1467, T7s:0.0002, T8s:0.0008, T9s:0.0089, TT:0.1253, KTo:0.0002, ATo:0.5728, J9s:0.0007, JTs:0.0044, JJ:0.029, KJo:0.0001, AJo:0.0455, Q2s:0.0001, Q7s:0.0001, Q8s:0.0007, Q9s:0.0901, QTs:0.0693, QJs:0.0069, QQ:0.9957, KQo:0.0016, AQo:0.9463, K2s:0.0032, K3s:0.002, K4s:0.0021, K5s:0.0084, K6s:0.0024, K7s:0.0062, K8s:0.0019, K9s:0.0166, KTs:0.0098, KJs:0.0286, KQs:0.3985, KK:0.9645, AKo:0.9998, A2s:0.9996, A3s:0.9983, A4s:0.9975, A5s:0.952, A6s:0.9643, A7s:0.9992, A8s:0.9647, A9s:0.9991, ATs:0.9755, AJs:0.0179, AQs:0.9377, AKs, AA:0.3964"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0444, 33:0.0039, A3o:0.0401, A4o:0.1351, A5o:0.0316, 65s:0.0084, 66:0.0007, A6o:0.0553, 75s:0.0079, 76s:0.0438, A7o:0.0019, 87s:0.0175, 93s:0.0001, A9o:0.0006, T6s:0.0002, T8s:0.0002, ATo:0.03, J9s:0.0001, JTs:0.0001, JJ:0.0002, Q3s:0.0003, Q4s:0.0001, Q7s:0.0001, Q9s:0.0001, QJs:0.0001, QQ:0.2816, AQo:0.6817, K3s:0.002, K5s:0.0031, K8s:0.0001, K9s:0.0007, KJs:0.0025, KQs:0.0011, KK:0.9998, AKo:0.999, A2s:0.6128, A3s:0.4929, A4s:0.7364, A5s:0.4894, A6s:0.9469, A7s:0.3929, A8s:0.2576, A9s:0.5359, ATs:0.2716, AJs:0.0084, AQs:0.9523, AKs:0.9987, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0069, A2o:0.0383, A3o:0.0002, 54o:0.0001, A4o:0.0229, 52s:0.0002, 55:0.0001, A5o:0.1513, 62s:0.0001, 63s:0.0002, 74s:0.0009, 76s:0.0065, 77:0.009, A7o:0.0075, 86s:0.0005, 87s:0.0002, 88:0.0004, A8o:0.0005, 94s:0.0001, 96s:0.0044, 97s:0.0039, 98s:0.0002, 99:0.0001, A9o:0.0022, T8s:0.0066, T9s:0.0006, TT:0.0065, ATo:0.03, J5s:0.0002, J8s:0.0006, J9s:0.0006, JTs:0.0002, JJ:0.0013, QJo:0.0002, AJo:0.0167, Q2s:0.0002, Q3s:0.0005, Q4s:0.0001, Q5s:0.0001, Q6s:0.0002, Q8s:0.0111, Q9s:0.0007, QJs:0.0105, QQ:0.5899, KQo:0.0009, AQo:0.7961, K6s:0.002, K7s:0.0017, K8s:0.0001, K9s:0.0715, KJs:0.0026, KQs:0.0074, KK, AKo:0.9995, A2s:0.5944, A3s:0.6279, A4s:0.8808, A5s:0.7645, A6s:0.9278, A7s:0.866, A8s:0.9688, A9s:0.4451, ATs:0.5844, AJs:0.403, AQs:0.9236, AKs:0.9988, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ:0.0004, KK:0.9712, AKs:0.0575, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0202, 99:0.3311, TT:0.7859, JJ:0.9422, QJs:0.0001, QQ, AQo:0.0014, KJs:0.0003, KQs:0.0001, KK, AKo:0.9998, A4s:0.0001, A6s:0.0001, ATs:0.0002, AJs:0.0027, AQs:0.0382, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|BB:4BET@19|HJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QJs:0.0001, KK:0.0009, AKo:0.0001, A3s:0.0001, A9s:0.0001, ATs:0.0003, AQs:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|HJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0177, JJ:0.9993, QQ, AQo:0.997, KK, AKo, AJs:0.977, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, JJ:0.0001, KK:0.7042, AKs:0.0016, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.287, 77:0.4949, 88:0.6501, 99:0.8844, TT:0.9541, JJ:0.9672, QQ:0.9989, KK, AKo, AJs:0.0001, AQs:0.3995, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:3BET@5|SB:4BET@19|HJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2s:0.0001, Q3s:0.0001, QQ:0.0001, K5s:0.0001, K6s:0.0001, K9s:0.0001, KTs:0.0001, KK:0.0003, AKo:0.0002, ATs:0.0001, AJs:0.0001, AQs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0109, 33:0.021, 44:0.0068, 54s:0.0013, 55:0.056, 64s:0.0013, 65s:0.029, 66:0.2094, 72s:0.0003, 75s:0.0016, 83s:0.0001, 88:0.0932, 99:0.0023, TT:0.0312, J6s:0.0001, J7s:0.001, JJ:0.4124, Q5s:0.0085, Q8s:0.0022, QQ:0.0094, AQo:0.0269, K7s:0.0002, K8s:0.0041, KTs:0.0001, KJs:0.0001, KQs:0.0002, KK:0.0001, AKo:0.0001, A3s:0.0001, A4s:0.0013, A5s:0.0001, A7s:0.0001, A8s:0.0057, AJs:0.2189, AQs:0.0097, AKs:0.0025, AA:0.0003"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "82o:0.0008, K2o:0.0005, A2o:0.088, K3o:0.0113, A3o:0.0324, K4o:0.0177, A4o:0.0031, 53s:0.0013, 55:0.0001, A5o:0.1089, 62s:0.0012, 64s:0.0006, 65s:0.0026, 66:0.0017, 96o:0.0001, Q6o:0.0005, K6o:0.0308, A6o:0.1814, 75s:0.0084, 76s:0.0876, K7o:0.0003, A7o:0.0189, 84s:0.0001, 86s:0.0009, 88:0.0003, A8o:0.0358, 95s:0.0001, 98s:0.0001, T3s:0.0176, T8s:0.0007, KTo:0.0015, ATo:0.0023, J2s:0.0064, J6s:0.0011, J8s:0.01, JJ:0.0087, QJo:0.0019, KJo:0.0129, AJo:0.0111, Q2s:0.0858, Q3s:0.0019, Q4s:0.0001, Q5s:0.0003, Q6s:0.0013, Q7s:0.0303, Q9s:0.0023, QTs:0.2576, QJs:0.0002, QQ:0.0369, KQo:0.0001, AQo:0.3308, K2s:0.067, K3s:0.0311, K4s:0.0394, K5s:0.0228, K6s:0.0076, K7s:0.02, K8s:0.0048, K9s:0.0026, KTs:0.0389, KJs:0.0052, KQs:0.0019, KK:0.0145, AKo:0.1412, A2s:0.1503, A3s:0.0483, A4s:0.0595, A5s:0.0466, A6s:0.1135, A7s:0.051, A8s:0.0199, A9s:0.0002, ATs:0.0884, AJs:0.0108, AQs:0.0982, AKs:0.1942, AA:0.9914"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0144, 33:0.0053, K3o:0.0688, A3o:0.0025, 44:0.0002, K4o:0.0697, A4o:0.0044, 53s:0.0146, 55:0.0001, K5o:0.3959, A5o:0.0028, 62s:0.0024, 63s:0.001, 64s:0.0072, 65s:0.0213, 66:0.0002, K6o:0.2305, A6o:0.0041, 74s:0.0008, 75s:0.0223, 76s:0.0223, K7o:0.06, A7o:0.0026, 85s:0.0005, 86s:0.0001, 87s:0.0404, 88:0.0026, A8o:0.0012, 97s:0.0002, K9o:0.0397, T5s:0.0002, T7s:0.0009, TT:0.0002, J8s:0.0001, JJ:0.0017, KJo:0.0503, Q2s:0.2205, Q3s:0.2795, Q4s:0.0177, Q5s:0.0027, Q6s:0.0099, Q7s:0.0771, Q8s:0.114, Q9s:0.0117, QTs:0.0331, QJs:0.0502, QQ:0.9536, KQo:0.9988, AQo:0.6252, K2s:0.8023, K3s:0.4616, K4s:0.7447, K5s:0.5739, K6s:0.6332, K7s:0.7798, K8s:0.8081, K9s:0.7941, KTs:0.5791, KJs:0.9656, KQs:0.9967, KK:0.9853, AKo:0.8587, A2s:0.2396, A3s:0.4241, A4s:0.4372, A5s:0.4215, A6s:0.5328, A7s:0.5358, A8s:0.0571, A9s:0.5204, ATs:0.0143, AJs:0.0874, AQs:0.8907, AKs:0.8033, AA:0.0083"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9812, 33:0.7602, 43s:0.1535, 44:0.957, 53s:0.8017, 54s:0.4725, 55:0.9405, 64s:0.0124, 65s:0.417, 66:0.7401, 74s:0.0069, 75s:0.2424, 76s:0.0922, 77:0.7891, 87o:0.0009, 86s:0.9166, 87s:0.0294, 88:0.9415, 92s:0.0035, 96s:0.007, 97s:0.4119, 98s:0.0172, 99:0.9708, T3s:0.01, T6s:0.0002, T8s:0.0004, TT:0.1546, J5s:0.0001, J6s:0.0001, J9s:0.0003, JJ:0.9909, Q2s:0.1209, Q3s:0.1879, Q5s:0.2968, Q6s:0.4066, Q7s:0.6109, Q8s:0.0296, Q9s:0.2829, QTs:0.302, QJs:0.0199, QQ:0.0002, AQo:0.6765, K3s:0.0577, K4s:0.0088, K5s:0.0165, K6s:0.1645, K7s:0.1985, K8s:0.0766, K9s:0.363, KTs:0.1088, KJs:0.5703, KQs:0.0576, A3s:0.0014, A4s:0.1904, A5s:0.0727, A7s:0.0008, A8s:0.0079, A9s:0.1169, ATs:0.2281, AJs:0.8315, AQs:0.4034, AKs:0.0131"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "A2o:0.0767, 43o:0.0002, Q3o:0.0001, K3o:0.0002, A3o:0.0922, 42s:0.0012, 44:0.0021, K4o:0.0001, A4o:0.1193, 53s:0.0002, K5o:0.0054, A5o:0.0469, 63s:0.0002, 66:0.0002, Q6o:0.0015, K6o:0.0125, A6o:0.1126, 72s:0.0004, 73s:0.0002, 76s:0.0057, Q7o:0.0001, K7o:0.0001, A7o:0.0941, 83s:0.0003, 86s:0.0004, 88:0.0031, Q8o:0.0006, K8o:0.0026, A8o:0.0538, 92s:0.0003, 93s:0.0003, 95s:0.0007, 97s:0.0052, 99:0.0001, Q9o:0.0037, K9o:0.0125, A9o:0.0235, T3s:0.0005, T6s:0.0001, T8s:0.0001, T9s:0.018, TT:0.0001, QTo:0.0007, ATo:0.1769, J3s:0.0002, J5s:0.0058, J6s:0.0001, J8s:0.0001, J9s:0.001, JJ:0.0031, QJo:0.0016, AJo:0.1039, Q2s:0.0001, Q3s:0.0071, Q4s:0.0551, Q5s:0.0001, Q6s:0.0008, Q7s:0.01, Q8s:0.0001, QTs:0.0354, QJs:0.0007, QQ:0.2926, KQo:0.0005, AQo:0.0273, K2s:0.0292, K3s:0.0028, K4s:0.002, K5s:0.0308, K6s:0.0032, K7s:0.0027, K8s:0.0151, K9s:0.017, KTs:0.001, KJs:0.0001, KQs:0.001, KK:0.0608, AKo:0.0882, A2s:0.0241, A3s:0.0585, A4s:0.0246, A5s:0.0094, A6s:0.076, A7s:0.0735, A8s:0.1419, A9s:0.0004, ATs:0.0656, AQs:0.0134, AKs:0.0067, AA:0.9994"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.013, 33:0.0105, K3o:0.0049, 43s:0.0143, 44:0.0085, 74o:0.0001, K4o:0.3422, A4o:0.0465, K5o:0.0086, A5o:0.0034, 64s:0.0005, 65s:0.001, K6o:0.3391, 75s:0.0001, 76s:0.166, K7o:0.1028, 82s:0.0006, 83s:0.0137, K8o:0.0118, 92s:0.0001, 93s:0.0008, 95s:0.0006, 96s:0.0019, 97s:0.0445, 99:0.0001, Q9o:0.0003, K9o:0.0136, T8s:0.0095, QTo:0.0005, KTo:0.0234, J3s:0.0001, J5s:0.006, J8s:0.0008, J9s:0.0028, JJ:0.0006, QJo:0.0008, KJo:0.0012, Q2s:0.0038, Q3s:0.0113, Q4s:0.0009, Q5s:0.0127, Q6s:0.0111, Q7s:0.003, Q8s:0.0017, Q9s:0.0571, QTs:0.0582, QJs:0.0054, QQ:0.7072, KQo:0.9968, AQo:0.2939, K2s:0.4359, K3s:0.8101, K4s:0.9447, K5s:0.6947, K6s:0.7028, K7s:0.462, K8s:0.8059, K9s:0.4885, KTs:0.6089, KJs:0.375, KQs:0.9365, KK:0.9392, AKo:0.9117, A2s:0.6869, A3s:0.0903, A4s:0.4275, A5s:0.6043, A6s:0.2607, A7s:0.7994, A8s:0.2506, A9s:0.0073, ATs:0.1126, AJs:0.0117, AQs:0.5762, AKs:0.9801, AA:0.0006"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, JJ:0.0012, QQ:0.9983, KJs:0.0001, KK, AKo:0.9994, A5s:0.0001, A8s:0.0005, A9s:0.0001, AJs:0.0001, AQs:0.1204, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0571, TT:0.1012, JJ:0.2873, QQ, KQs:0.0001, KK, AKo, AQs:0.3017, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@19|HJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.0001, 44:0.0007, 52s:0.0001, 55:0.0001, J5o:0.0001, A5o:0.0039, 65s:0.0008, 72s:0.003, A7o:0.0066, 83s:0.0003, 86s:0.0001, 87s:0.0003, 88:0.0002, A8o:0.1063, 92s:0.0007, 93s:0.0001, 98s:0.0001, 99:0.0002, T2s:0.0001, T3s:0.0002, T5s:0.0029, T8s:0.0001, TT:0.0073, ATo:0.0047, J2s:0.0002, J4s:0.0001, J5s:0.0001, J6s:0.0001, J8s:0.0586, JTs:0.0021, AJo:0.1444, Q2s:0.0001, Q3s:0.0002, Q5s:0.0004, Q6s:0.0052, Q7s:0.0004, Q8s:0.0002, QTs:0.0011, QQ:0.0926, AQo:0.1861, K3s:0.0002, K4s:0.0001, K5s:0.0001, K6s:0.0001, K8s:0.002, K9s:0.001, KJs:0.0016, KQs:0.0011, KK:0.1028, AKo:0.0003, A2s:0.0141, A3s:0.0002, A4s:0.0007, A5s:0.0105, A6s:0.0009, A7s:0.0337, A8s:0.0047, A9s:0.0896, ATs:0.0002, AJs:0.0676, AQs:0.3954, AKs:0.022, AA:0.6619"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0219, A2o:0.1884, 32s:0.0124, 33:0.0765, 63o:0.0069, A3o:0.0899, 42s:0.0031, 43s:0.0006, 44:0.0011, 74o:0.0013, K4o:0.0017, A4o:0.2149, 52s:0.0114, 53s:0.0018, 54s:0.0577, 55:0.1319, 65o:0.0021, 85o:0.0042, A5o:0.1381, 62s:0.0013, 63s:0.0571, 64s:0.1133, 65s:0.1087, 66:0.137, 86o:0.0002, A6o:0.155, 73s:0.0173, 74s:0.0142, 75s:0.0001, 76s:0.0114, 77:0.2199, 87o:0.0087, 97o:0.0001, K7o:0.0002, A7o:0.1172, 85s:0.0506, 86s:0.0119, 87s:0.1531, 88:0.0311, K8o:0.0001, A8o:0.2068, 94s:0.0001, 95s:0.0067, 96s:0.0081, 97s:0.0001, 98s:0.0855, 99:0.1394, T9o:0.0002, A9o:0.017, T2s:0.0013, T3s:0.0162, T4s:0.0001, T5s:0.0077, T6s:0.0004, T7s:0.0042, T8s:0.0664, T9s:0.023, TT:0.0234, ATo:0.0552, J4s:0.0001, J5s:0.0002, J8s:0.0639, J9s:0.0082, JTs:0.0005, JJ:0.0537, QJo:0.0001, KJo:0.0001, AJo:0.0086, Q2s:0.0197, Q3s:0.0003, Q4s:0.0036, Q5s:0.0115, Q7s:0.0016, Q8s:0.007, QTs:0.0017, QQ:0.5367, AQo:0.3976, K2s:0.0006, K3s:0.0319, K5s:0.0037, K6s:0.0006, K7s:0.0022, K8s:0.0311, K9s:0.0108, KTs:0.0993, KJs:0.0807, KQs:0.0001, KK:0.8972, AKo:0.9994, A2s:0.1615, A3s:0.0769, A4s:0.3104, A5s:0.5867, A6s:0.8459, A7s:0.2823, A8s:0.081, A9s:0.4172, ATs:0.7722, AJs:0.1618, AQs:0.444, AKs:0.9701, AA:0.3381"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42s:0.0001, 43s:0.0003, 44:0.0001, 62s:0.0001, 64s:0.0001, 73s:0.0001, 77:0.0002, 87s:0.0001, 88:0.0004, 93s:0.0001, 96s:0.0001, 98s:0.0008, 99:0.0014, T2s:0.0002, T3s:0.0001, T6s:0.0002, TT:0.0001, J7s:0.0001, JJ:0.0004, AJo:0.0001, Q6s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0012, QQ:0.002, AQo:0.0141, K5s:0.0001, K7s:0.0002, K8s:0.0001, K9s:0.0004, KTs:0.0057, KQs:0.0016, KK:0.0453, AKo:0.0005, A3s:0.0017, A4s:0.001, A5s:0.0001, A7s:0.0011, A8s:0.0002, A9s:0.0025, ATs:0.0002, AJs:0.0555, AQs:0.001, AKs:0.0301, AA:0.9529"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2931, A2o:0.4614, 32s:0.0004, 33:0.3762, A3o:0.243, 42s:0.0014, 43s:0.0001, 44:0.1742, A4o:0.3011, 53s:0.1757, 54s:0.251, 55:0.7034, A5o:0.3267, 62s:0.0051, 63s:0.0104, 64s:0.2724, 65s:0.6413, 66:0.3647, A6o:0.2522, 75s:0.4083, 76s:0.456, 77:0.0607, 87o:0.0009, A7o:0.2119, 86s:0.091, 87s:0.019, 88:0.3599, A8o:0.2941, 95s:0.0001, 96s:0.018, 97s:0.0726, 98s:0.0456, 99:0.527, A9o:0.2091, T2s:0.0001, T3s:0.0002, T6s:0.0047, T8s:0.0021, T9s:0.0126, TT:0.4738, ATo:0.4736, J2s:0.0001, J5s:0.0031, J6s:0.0009, J8s:0.0112, J9s:0.0007, JJ:0.2678, AJo:0.1397, Q3s:0.0415, Q4s:0.0002, Q5s:0.0553, Q6s:0.0764, Q7s:0.0706, Q8s:0.1864, Q9s:0.0604, QTs:0.185, QJs:0.1468, QQ:0.9362, KQo:0.0404, AQo:0.9389, K2s:0.0055, K3s:0.0012, K5s:0.1973, K6s:0.0096, K7s:0.1427, K8s:0.0236, K9s:0.2476, KTs:0.0808, KJs:0.1335, KQs:0.6795, KK:0.9547, AKo:0.999, A2s:0.7562, A3s:0.8179, A4s:0.8554, A5s:0.9929, A6s:0.9062, A7s:0.6478, A8s:0.8938, A9s:0.9254, ATs:0.8954, AJs:0.6623, AQs:0.997, AKs:0.9693, AA:0.0471"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|BTN:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 52s:0.0001, 55:0.0001, 66:0.0001, 74s:0.0001, 75s:0.0001, 77:0.0001, 82s:0.0001, 86s:0.0001, 88:0.0001, 98s:0.0001, T3s:0.0001, T6s:0.0001, TT:0.0006, JTs:0.0003, JJ:0.9383, Q4s:0.0001, Q8s:0.0001, QQ, AQo:0.2568, K6s:0.0001, KTs:0.0002, KQs:0.0001, KK, AKo:0.9946, A5s:0.0007, A6s:0.0002, AJs:0.0656, AQs:0.9044, AKs:0.9956, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|HJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 66:0.0002, 99:0.0002, T9s:0.0001, JJ:0.0001, K6s:0.0001, KK:0.6014, AKo:0.0002, A3s:0.0001, A7s:0.0002, A8s:0.0003, AJs:0.0004, AQs:0.0005, AKs:0.0007, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|HJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 54s:0.0002, 55:0.0006, 62s:0.0001, 65s:0.0001, 66:0.0007, 75s:0.0001, 86s:0.0001, 88:0.0084, 99:0.2141, T9s:0.0001, TT:0.2312, J4s:0.0001, JJ:0.1876, KJo:0.0001, AJo:0.0003, QTs:0.0005, QQ:0.7926, AQo:0.2542, KJs:0.0001, KK, AKo, A3s:0.0001, A4s:0.0004, A6s:0.0001, A8s:0.0004, A9s:0.0085, ATs:0.2506, AJs:0.038, AQs:0.264, AKs:0.9942, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|BB:3BET@6|HJ:CALL@4",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0003, 52o:0.0001, A2o:0.0001, 32s:0.0003, 63o:0.0001, K3o:0.0004, A3o:0.0004, 43s:0.0001, 54o:0.0001, 52s:0.0002, 55:0.0004, 65o:0.0003, K5o:0.0001, 62s:0.001, 64s:0.0001, 66:0.0001, 72s:0.0011, 73s:0.0003, 74s:0.0002, 75s:0.0009, 76s:0.0001, 77:0.0011, Q7o:0.0002, 82s:0.0001, 83s:0.0003, 84s:0.0009, 85s:0.0021, 88:0.0015, Q8o:0.0001, 93s:0.0001, 94s:0.0006, 95s:0.0007, 96s:0.0001, 97s:0.0003, 98s:0.0016, 99:0.0003, A9o:0.0002, T3s:0.0001, T4s:0.0001, T5s:0.0008, T6s:0.0004, T7s:0.0001, T8s:0.0039, TT:0.0019, QTo:0.0001, ATo:0.0002, J2s:0.0001, J3s:0.0002, J4s:0.0001, J5s:0.0001, J6s:0.0001, J8s:0.0055, AJo:0.0009, Q3s:0.0001, Q5s:0.006, Q6s:0.0004, Q7s:0.0001, Q9s:0.0001, QTs:0.0015, QJs:0.0083, QQ:0.5529, KQo:0.0006, AQo:0.0004, K2s:0.0001, K5s:0.0002, K6s:0.0016, K8s:0.0003, KTs:0.0001, KJs:0.0001, KQs:0.0003, KK:0.2535, A3s:0.0007, A4s:0.0003, A5s:0.0003, A7s:0.0243, A8s:0.0027, A9s:0.0001, ATs:0.0057, AJs:0.0001, AQs:0.0054, AKs:0.0159, AA:0.0054"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2207, 32o:0.0159, 52o:0.1107, 62o:0.1554, 72o:0.2066, T2o:0.0449, J2o:0.1253, K2o:0.1979, A2o:0.4092, 32s:0.3363, 33:0.3501, 43o:0.2106, 53o:0.0137, 83o:0.0022, 93o:0.0987, J3o:0.0115, Q3o:0.079, K3o:0.0838, A3o:0.5048, 42s:0.0881, 43s:0.1, 44:0.168, 54o:0.1241, 64o:0.2, 94o:0.0058, J4o:0.0001, K4o:0.0989, A4o:0.4145, 52s:0.2436, 53s:0.0001, 54s:0.1505, 55:0.2555, 65o:0.1247, 75o:0.0682, T5o:0.0134, K5o:0.1126, A5o:0.4375, 62s:0.2237, 63s:0.1696, 64s:0.3004, 65s:0.1938, 66:0.2376, 76o:0.2499, 86o:0.0001, 96o:0.1745, T6o:0.1203, K6o:0.1817, A6o:0.4533, 72s:0.2183, 73s:0.3264, 74s:0.0747, 75s:0.2174, 76s:0.1311, 77:0.2348, 87o:0.105, T7o:0.1081, K7o:0.183, A7o:0.3717, 82s:0.0833, 83s:0.0002, 84s:0.2617, 85s:0.3657, 86s:0.1778, 87s:0.2014, 88:0.2545, 98o:0.0718, T8o:0.1475, K8o:0.1462, A8o:0.3522, 92s:0.165, 93s:0.1453, 94s:0.0005, 95s:0.2508, 96s:0.3616, 97s:0.2329, 98s:0.5469, 99:0.2038, T9o:0.0732, J9o:0.0407, K9o:0.1622, A9o:0.353, T3s:0.1447, T4s:0.3414, T5s:0.1353, T6s:0.0499, T7s:0.0747, T8s:0.2846, T9s:0.1638, TT:0.2702, JTo:0.1845, KTo:0.1974, ATo:0.4187, J2s:0.0481, J3s:0.0004, J5s:0.0901, J6s:0.1332, J7s:0.0536, J8s:0.2519, JTs:0.0001, JJ:0.1372, KJo:0.0259, AJo:0.3375, Q2s:0.0344, Q3s:0.0002, Q4s:0.0685, Q5s:0.2422, Q6s:0.3306, Q7s:0.0002, Q8s:0.0003, QTs:0.0293, QJs:0.0008, QQ:0.0114, KQo:0.0607, AQo:0.1775, K2s:0.2424, K3s:0.1686, K4s:0.4122, K5s:0.2051, K6s:0.0434, K7s:0.1235, K8s:0.2593, K9s:0.0585, KTs:0.0518, KJs:0.0662, KQs:0.0033, KK:0.3505, AKo:0.696, A2s:0.4496, A3s:0.5361, A4s:0.5194, A5s:0.6815, A6s:0.4316, A7s:0.3324, A8s:0.2478, A9s:0.4549, ATs:0.4379, AJs:0.2398, AQs:0.5759, AKs:0.6404, AA:0.9945"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0002, 99:0.0004, TT:0.0047, JJ:0.0001, QQ:0.9995, AQo:0.0002, KK, AKo, A4s:0.0001, AQs:0.1228, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.2687, QQ, AQo:0.0004, KK, AKo, AQs:0.3592, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@19|HJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0012, 33:0.0001, A4o:0.001, 52s:0.0001, 53s:0.001, 54s:0.0006, 55:0.0001, 85o:0.0001, 62s:0.0006, 64s:0.0003, K6o:0.0001, A6o:0.0002, 73s:0.0001, 76s:0.0001, 84s:0.0001, 86s:0.0001, 88:0.0509, 94s:0.0001, 98s:0.0002, 99:0.0003, T6s:0.0001, T7s:0.0012, T8s:0.0001, TT:0.1056, J3s:0.0001, J6s:0.0018, J7s:0.0004, J8s:0.0008, JJ:0.0007, Q3s:0.0001, Q4s:0.0001, Q5s:0.0005, Q7s:0.0002, QQ:0.1599, KQo:0.0005, AQo:0.6127, K3s:0.0008, K5s:0.0026, K7s:0.0003, K8s:0.0002, K9s:0.0006, KJs:0.0028, KQs:0.1417, KK:0.0013, AKo:0.0032, A2s:0.032, A3s:0.0126, A5s:0.1489, A6s:0.1346, A7s:0.0091, A8s:0.0393, A9s:0.0934, ATs:0.0028, AJs:0.0035, AQs:0.6239, AKs:0.0012, AA:0.207"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0836, 42o:0.0001, A2o:0.1005, 32s:0.012, 33:0.1202, 83o:0.0001, K3o:0.0001, A3o:0.2135, 42s:0.0322, 43s:0.1692, 44:0.1658, 84o:0.0003, 94o:0.0001, J4o:0.0003, A4o:0.2219, 53s:0.3865, 54s:0.1098, 55:0.3103, 65o:0.0786, 75o:0.0002, A5o:0.373, 62s:0.0001, 63s:0.1268, 64s:0.0275, 65s:0.1455, 66:0.2478, 76o:0.0051, T6o:0.0001, Q6o:0.0001, A6o:0.247, 72s:0.0255, 73s:0.0002, 74s:0.0241, 75s:0.2954, 76s:0.4674, 77:0.295, 97o:0.0413, A7o:0.005, 83s:0.0007, 84s:0.0075, 85s:0.0041, 86s:0.1329, 87s:0.0278, 88:0.5386, 98o:0.0689, T8o:0.0002, J8o:0.0002, K8o:0.0108, A8o:0.1563, 92s:0.0001, 93s:0.0008, 94s:0.1104, 95s:0.0006, 96s:0.0362, 97s:0.1844, 98s:0.0608, 99:0.2023, T9o:0.0381, A9o:0.0962, T3s:0.0004, T4s:0.1033, T6s:0.0115, T7s:0.2261, T8s:0.1812, T9s:0.001, TT:0.3991, KTo:0.0295, ATo:0.2361, J2s:0.0014, J3s:0.221, J4s:0.0005, J7s:0.0125, J8s:0.0174, JTs:0.0353, JJ:0.0001, KJo:0.0002, AJo:0.0298, Q2s:0.0029, Q3s:0.0002, Q4s:0.0002, Q5s:0.0002, Q6s:0.2121, Q7s:0.0024, Q8s:0.1616, Q9s:0.111, QTs:0.0487, QJs:0.0372, QQ:0.6801, KQo:0.0004, AQo:0.3782, K2s:0.0003, K3s:0.0001, K4s:0.0454, K5s:0.1617, K6s:0.027, K7s:0.047, K8s:0.244, K9s:0.1135, KTs:0.0956, KJs:0.3295, KQs:0.0475, KK:0.9987, AKo:0.9205, A2s:0.3831, A3s:0.4133, A4s:0.2601, A5s:0.5617, A6s:0.3268, A7s:0.4739, A8s:0.1194, A9s:0.4303, ATs:0.6139, AJs:0.7893, AQs:0.3377, AKs:0.9938, AA:0.793"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1476, 33:0.0472, 44:0.1686, 54s:0.0001, 55:0.1956, 65s:0.0182, 66:0.1165, 75s:0.0001, 76s:0.0015, 77:0.1308, 88:0.1997, A8o:0.0233, 97s:0.1075, 99:0.1014, A9o:0.0856, T5s:0.0002, T6s:0.0003, TT:0.024, ATo:0.1298, J4s:0.0001, J8s:0.0001, J9s:0.0001, JJ:0.1167, AJo:0.0122, Q5s:0.0001, Q7s:0.0003, Q8s:0.0001, QQ:0.1376, AQo:0.0954, K2s:0.0001, K4s:0.0001, K8s:0.0001, KJs:0.0007, KQs:0.0002, KK:0.5603, A2s:0.0122, A3s:0.2396, A4s:0.2563, A5s:0.2271, A6s:0.1173, A7s:0.0003, A8s:0.177, A9s:0.289, ATs:0.56, AJs:0.4136, AQs:0.0864, AKs:0.0015, AA:0.7049"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "82o:0.0001, A2o:0.1176, 33:0.0987, K3o:0.0002, A3o:0.0777, 42s:0.0002, 43s:0.0025, 44:0.1497, 54o:0.0001, A4o:0.0794, 53s:0.0002, 54s:0.0098, 55:0.0623, A5o:0.0688, 64s:0.0415, 65s:0.0165, 66:0.051, A6o:0.1244, 74s:0.0006, 75s:0.0027, 76s:0.0301, 77:0.226, A7o:0.0555, 83s:0.0014, 85s:0.0345, 86s:0.0209, 87s:0.0012, 88:0.1689, A8o:0.1056, 93s:0.0001, 96s:0.0065, 97s:0.0027, 99:0.3543, K9o:0.0003, A9o:0.0986, T3s:0.0006, T6s:0.0004, T7s:0.0002, T9s:0.0004, TT:0.2508, ATo:0.0921, J4s:0.0026, J7s:0.0001, J8s:0.0005, J9s:0.0008, JTs:0.0002, JJ:0.2165, AJo:0.0738, Q2s:0.0014, Q5s:0.044, Q7s:0.0389, Q8s:0.0116, Q9s:0.0283, QTs:0.0589, QJs:0.0032, QQ:0.7688, AQo:0.7756, K2s:0.0001, K4s:0.0003, K5s:0.0006, K6s:0.0004, K7s:0.0002, K8s:0.0014, K9s:0.0001, KTs:0.0251, KJs:0.0028, KQs:0.0543, KK:0.4321, AKo:0.9979, A2s:0.1275, A3s:0.1821, A4s:0.1859, A5s:0.1894, A6s:0.1773, A7s:0.0943, A8s:0.1818, A9s:0.2347, ATs:0.1312, AJs:0.0575, AQs:0.9033, AKs:0.9973, AA:0.2951"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|BTN:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0003, 53s:0.0006, 62s:0.0003, 64s:0.0001, 75s:0.0012, 76s:0.0004, 77:0.0003, 85s:0.0004, 86s:0.0003, 88:0.0001, 93s:0.0001, 96s:0.0005, 99:0.0002, T7s:0.0004, TT:0.0025, ATo:0.0002, J6s:0.0002, JTs:0.0001, JJ:0.394, Q3s:0.0001, Q4s:0.0001, Q5s:0.0002, Q9s:0.0001, QQ:0.9998, AQo:0.4872, K4s:0.0002, KJs:0.0009, KQs:0.0002, KK, AKo:0.8832, A2s:0.0003, A5s:0.0002, ATs:0.0001, AJs:0.1862, AQs:0.6403, AKs:0.9964, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|HJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AQo:0.0001, KK:0.7075, A9s:0.0004, AQs:0.0001, AKs:0.004, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|HJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0001, 87s:0.0001, 88:0.0211, 93s:0.0001, 99:0.0257, TT:0.2638, JJ:0.4667, AJo:0.0001, QTs:0.0005, QQ:0.9905, AQo:0.412, K6s:0.0002, KTs:0.001, KJs:0.0002, KK, AKo:0.9992, A3s:0.0001, A4s:0.0003, A5s:0.0001, A6s:0.0001, A7s:0.0001, A8s:0.0001, A9s:0.0166, ATs:0.0002, AJs:0.4103, AQs:0.6144, AKs:0.9916, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|BTN:CALL@2|SB:3BET@6|HJ:CALL@4",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 32o:0.0012, 52o:0.0003, 72o:0.0001, 82o:0.0001, A2o:0.0204, 32s:0.0017, 33:0.0005, 73o:0.0001, 83o:0.0001, 93o:0.0001, J3o:0.0001, Q3o:0.0005, A3o:0.0004, 42s:0.0003, 44:0.0133, 94o:0.0002, J4o:0.0001, Q4o:0.0004, K4o:0.0001, A4o:0.001, 52s:0.0022, 53s:0.0001, 54s:0.0004, 55:0.0115, T5o:0.0001, J5o:0.0001, Q5o:0.0003, A5o:0.0002, 62s:0.0001, 64s:0.0003, 65s:0.0008, 66:0.0028, 76o:0.0002, Q6o:0.0008, K6o:0.0002, 72s:0.0007, 73s:0.0005, 75s:0.0029, 77:0.0036, 97o:0.0019, A7o:0.0006, 82s:0.0028, 83s:0.0005, 84s:0.0001, 85s:0.0001, 86s:0.0001, 87s:0.0006, 98o:0.0001, J8o:0.0006, Q8o:0.0001, K8o:0.0002, A8o:0.0003, 93s:0.0002, 94s:0.0002, 96s:0.0001, 97s:0.0024, 98s:0.0016, 99:0.0208, T9o:0.0001, Q9o:0.0015, A9o:0.0001, T2s:0.0011, T3s:0.0001, T4s:0.0001, T6s:0.0004, T7s:0.001, T8s:0.0001, T9s:0.0018, TT:0.0162, JTo:0.0002, KTo:0.0001, ATo:0.0014, J2s:0.0002, J4s:0.0172, J5s:0.0002, J7s:0.0033, J9s:0.0018, JTs:0.0076, JJ:0.057, KJo:0.0009, AJo:0.0004, Q2s:0.0005, Q3s:0.0001, Q4s:0.001, Q5s:0.0001, Q6s:0.0004, Q8s:0.0082, Q9s:0.0001, QTs:0.0121, QJs:0.0067, QQ:0.0005, KQo:0.0152, AQo:0.0001, K3s:0.0007, K4s:0.0098, K5s:0.0192, K6s:0.0002, K7s:0.016, K8s:0.0012, K9s:0.0007, KTs:0.0008, KJs:0.0124, KQs:0.0006, KK:0.2205, AKo:0.0052, A2s:0.0066, A3s:0.0003, A4s:0.0058, A5s:0.0009, A6s:0.0011, A7s:0.0089, A8s:0.0016, A9s:0.0339, ATs:0.0006, AJs:0.0026, AQs:0.1798, AKs:0.0522, AA:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 82o:0.0001, A2o:0.0015, 32s:0.0001, 33:0.0031, 73o:0.0001, Q3o:0.0001, K3o:0.0005, A3o:0.0324, 42s:0.0003, 44:0.1469, 94o:0.0001, Q4o:0.002, K4o:0.0002, A4o:0.0007, 52s:0.0003, 54s:0.0079, 55:0.0056, 75o:0.0001, 95o:0.0001, T5o:0.0002, Q5o:0.0001, 65s:0.0006, 66:0.0025, 76o:0.0001, Q6o:0.0001, A6o:0.017, 72s:0.0001, 75s:0.0009, 76s:0.0007, J7o:0.0001, Q7o:0.0001, A7o:0.0004, 82s:0.0033, 83s:0.0008, 85s:0.0001, 86s:0.0015, 88:0.0003, 98o:0.0001, J8o:0.0006, Q8o:0.0003, K8o:0.0001, A8o:0.0002, 92s:0.0003, 93s:0.0002, 94s:0.0015, 97s:0.0003, 99:0.0127, Q9o:0.0002, K9o:0.0002, A9o:0.0004, T2s:0.0001, T3s:0.0001, T6s:0.0002, T7s:0.004, T9s:0.0085, TT:0.001, JTo:0.0001, KTo:0.0007, ATo:0.0086, J2s:0.0004, J3s:0.0013, J4s:0.0001, J8s:0.0003, JTs:0.0046, JJ:0.0004, KJo:0.0003, AJo:0.0003, Q2s:0.0009, Q3s:0.0001, Q4s:0.001, Q5s:0.0002, Q7s:0.0001, Q8s:0.0231, Q9s:0.0001, QTs:0.0283, QJs:0.0029, QQ:0.0006, KQo:0.0001, AQo:0.0128, K3s:0.0038, K5s:0.0025, K7s:0.0228, K8s:0.0054, K9s:0.0063, KTs:0.0006, KJs:0.0001, KQs:0.0222, KK:0.0285, AKo:0.0999, A2s:0.4009, A3s:0.0001, A4s:0.6632, A5s:0.0004, A6s:0.4004, A7s:0.0005, A8s:0.0002, A9s:0.2057, ATs:0.0049, AJs:0.0472, AQs:0.1905, AKs:0.5972, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0007, JJ:0.0039, QQ, KK, AKo, AQs:0.6484, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, QQ:0.1765, KK, AKo:0.9948, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.6116, KK, AKo, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9997, KK, AKo:0.9992, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19|BB:CALL@18",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0024, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19|BTN:CALL@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@19|SB:CALL@18.5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.0018, 33:0.1103, A3o:0.0058, 42s:0.0002, 44:0.4805, A4o:0.013, 53s:0.0002, 54s:0.003, 55:0.6147, A5o:0.1886, 64s:0.0203, 65s:0.3907, 66:0.9993, 75s:0.0003, 76s:0.0301, 77:0.9953, A7o:0.0074, 86s:0.0002, 87s:0.0063, 88:0.7688, A8o:0.0035, 97s:0.0001, 98s:0.0015, 99:0.2762, T8s:0.0018, T9s:0.0677, TT:0.2871, ATo:0.0014, JJ:0.9929, AJo:0.6095, Q9s:0.0008, QTs:0.0058, QJs:0.0011, QQ:0.0082, AQo:0.0003, K5s:0.0003, K7s:0.0013, KTs:0.0064, KQs:0.0828, KK:0.0998, A3s:0.1071, A4s:0.0499, A5s:0.2513, A6s:0.0022, A7s:0.0172, A8s:0.0071, A9s:0.0058, ATs:0.1071, AJs:0.9981, AKs:0.0002, AA:0.4504"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.385, A3o:0.0014, 42s:0.0004, 44:0.0112, A4o:0.5302, 54s:0.0052, 55:0.0025, A5o:0.2355, 62s:0.0002, 63s:0.0001, 64s:0.0008, 65s:0.0017, 66:0.0003, A6o:0.2345, 74s:0.0001, 75s:0.0026, 76s:0.5701, 77:0.0014, A7o:0.1413, 86s:0.0821, 87s:0.4562, 88:0.2291, A8o:0.4152, 96s:0.0001, 97s:0.1665, 98s:0.6189, 99:0.5954, A9o:0.0353, T6s:0.0001, T8s:0.0009, TT:0.0116, ATo:0.6993, J3s:0.0001, J8s:0.0005, JJ:0.0002, AJo:0.0027, Q3s:0.0001, Q4s:0.0001, Q5s:0.0002, Q6s:0.0008, Q8s:0.0006, Q9s:0.0209, QTs:0.019, QJs:0.0304, QQ:0.9918, KQo:0.0024, AQo:0.9997, K2s:0.0015, K3s:0.0028, K4s:0.0003, K5s:0.0016, K6s:0.0001, K7s:0.0044, K8s:0.0034, K9s:0.0028, KTs:0.0028, KJs:0.0045, KQs:0.172, KK:0.9002, AKo, A2s:0.998, A3s:0.8593, A4s:0.9477, A5s:0.7486, A6s:0.9936, A7s:0.9827, A8s:0.9927, A9s:0.993, ATs:0.8922, AJs:0.0015, AQs, AKs:0.9998, AA:0.5496"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0054, 43s:0.0002, A4o:0.0013, 53s:0.0003, A5o:0.0006, 63s:0.0001, 66:0.0004, 76s:0.0001, 86s:0.011, 87s:0.0001, A8o:0.0023, 97s:0.0019, 98s:0.018, A9o:0.0001, T8s:0.0002, ATo:0.006, J5s:0.0021, JJ:0.0001, Q8s:0.0004, QTs:0.0002, QQ:0.0015, AQo:0.4883, K4s:0.0004, K5s:0.0002, K8s:0.0083, KQs:0.0002, KK, AKo:0.979, A2s:0.7881, A3s:0.9389, A4s:0.8675, A5s:0.9791, A6s:0.6244, A7s:0.8558, A8s:0.785, A9s:0.7354, ATs:0.0052, AJs:0.3382, AQs:0.9845, AKs:0.9943, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0117, 32s:0.0002, A3o:0.0186, A4o:0.0101, 54s:0.0029, A5o:0.0181, 64s:0.0001, 65s:0.0002, A6o:0.0377, 73s:0.0001, 75s:0.0004, A7o:0.0196, A8o:0.0552, 92s:0.0002, 97s:0.0285, 98s:0.0003, 99:0.0013, A9o:0.0434, T7s:0.0001, T8s:0.0002, TT:0.0001, ATo:0.0019, J9s:0.0006, JTs:0.0008, JJ:0.0028, Q2s:0.0008, Q7s:0.0005, Q9s:0.0001, QQ:0.0184, AQo:0.2124, K5s:0.0001, K6s:0.0038, K8s:0.0063, K9s:0.0139, KJs:0.0009, KQs:0.0092, KK, AKo:0.997, A2s:0.6984, A3s:0.4671, A4s:0.3628, A5s:0.7577, A6s:0.5936, A7s:0.6766, A8s:0.0865, A9s:0.2377, ATs:0.0972, AJs:0.0209, AQs:0.9817, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0165, 33:0.0005, A3o:0.0234, 44:0.0054, A4o:0.1662, 54s:0.0057, A5o:0.0063, 62s:0.0011, 64s:0.0001, 65s:0.0301, 76o:0.0001, A6o:0.0596, 74s:0.0003, 75s:0.0001, 76s:0.0038, 77:0.0003, A7o:0.0015, 84s:0.0007, 85s:0.0013, 87s:0.0001, 88:0.0001, A8o:0.0019, 92s:0.0002, 95s:0.0003, 98s:0.0003, A9o:0.0445, T4s:0.0019, T9s:0.0008, TT:0.0003, ATo:0.0256, JJ:0.0001, AJo:0.0019, Q7s:0.003, Q8s:0.0016, Q9s:0.0009, QTs:0.0065, QJs:0.0009, QQ:0.3497, KQo:0.0012, AQo:0.978, K5s:0.0021, K8s:0.0005, KJs:0.0006, KQs:0.0048, KK, AKo, A2s:0.738, A3s:0.983, A4s:0.676, A5s:0.4783, A6s:0.4846, A7s:0.7975, A8s:0.9384, A9s:0.0417, ATs:0.7515, AJs:0.7309, AQs:0.9964, AKs:0.9979, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.9039, AKo:0.0001, AKs:0.0071, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0293, 77:0.4361, 88:0.6702, 99:0.9866, TT:0.9967, JJ:0.9971, QQ, AQo:0.0304, KQs:0.0001, KK, AKo, A4s:0.0001, AQs:0.8061, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BB:4BET@19|HJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, J7s:0.0001, QQ:0.0001, K4s:0.0001, K5s:0.0001, KK:0.0005, AKo:0.0001, A8s:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0001, KK:0.9319, AKo:0.0276, ATs:0.0001, AKs:0.4648, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.112, 66:0.7426, 77:0.9838, 88:0.9075, 99:0.9959, TT:0.9973, JJ:0.9995, QQ:0.9996, KK, AKo, AQs:0.6272, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|BTN:4BET@19|HJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, T4s:0.0001, JJ:0.0001, QTs:0.0001, K5s:0.0001, KK:0.0002, AKo:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|HJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9856, QQ, AQo:0.9691, KK, AKo, AJs:0.0001, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, KK:0.9828, ATs:0.0001, AQs:0.0002, AKs:0.8454, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.3146, 88:0.7434, 99:0.9374, TT:0.9416, JJ:0.9635, QQ, KK, AKo, A9s:0.0002, ATs:0.0009, AJs:0.0014, AQs:0.1247, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:3BET@5|SB:4BET@19|HJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "93s:0.0001, T9s:0.0001, K6s:0.0001, KK:0.0009, A4s:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "33:0.0094, 66:0.0326, 88:0.0001, T6s:0.0002, T9s:0.0001, J8s:0.0002, JJ:0.0074, QQ:0.445, AQo:0.0815, K2s:0.0015, KQs:0.0005, AKo:0.0013, ATs:0.0023, AQs:0.08, AKs:0.0165, AA:0.0004"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.0254, 33:0.0018, A3o:0.0015, 43s:0.0029, A4o:0.0486, 54s:0.0012, K5o:0.0023, A5o:0.0139, 65s:0.0025, K6o:0.0784, 73s:0.0001, 75s:0.0066, 77:0.0053, A7o:0.016, 84s:0.0001, 85s:0.0006, 87s:0.002, A8o:0.0083, 92s:0.0003, 99:0.0113, A9o:0.1023, T3s:0.0004, TT:0.0001, J2s:0.0057, J5s:0.0008, JJ:0.0033, KJo:0.0008, AJo:0.0194, Q2s:0.0049, Q3s:0.0353, Q5s:0.0001, Q6s:0.0005, Q7s:0.0002, Q8s:0.0012, Q9s:0.0001, QQ:0.2198, AQo:0.4848, K2s:0.0011, K3s:0.0022, K4s:0.0137, K5s:0.0011, K6s:0.0016, K7s:0.0066, K8s:0.0342, K9s:0.0331, KTs:0.0613, KJs:0.0032, KQs:0.0007, KK:0.0018, AKo:0.0041, A2s:0.0686, A3s:0.0142, A4s:0.147, A5s:0.0332, A6s:0.0036, A7s:0.1987, A8s:0.021, A9s:0.0477, ATs:0.0031, AJs:0.0241, AQs:0.1333, AKs:0.0355, AA:0.9984"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0063, K3o:0.0972, 43s:0.0003, 44:0.0004, K4o:0.2121, 54s:0.0008, 55:0.0014, K5o:0.1333, 63s:0.0006, 64s:0.0001, 65s:0.0001, K6o:0.161, 73s:0.0001, K7o:0.1207, 88:0.0001, K8o:0.1442, 92s:0.0004, 93s:0.0006, K9o:0.1186, Q6s:0.0071, Q7s:0.0169, Q8s:0.0296, Q9s:0.0028, QTs:0.0005, QQ:0.3352, KQo:0.9984, AQo:0.4008, K2s:0.8628, K3s:0.6314, K4s:0.4432, K5s:0.6258, K6s:0.324, K7s:0.9684, K8s:0.665, K9s:0.8465, KTs:0.5395, KJs:0.0064, KQs:0.9946, KK:0.9981, AKo:0.9945, A2s:0.6041, A3s:0.0052, A4s:0.4979, A5s:0.0173, A7s:0.0082, A8s:0.0573, A9s:0.0401, ATs:0.0144, AJs:0.002, AQs:0.7795, AKs:0.9468, AA:0.0012"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.049, 33:0.0517, 44:0.0406, 55:0.0032, 65s:0.0001, 66:0.2256, 73s:0.0017, 77:0.0064, 86s:0.0002, 88:0.0834, T9s:0.0001, TT:0.0026, J4s:0.0001, J8s:0.0001, JJ:0.2943, Q4s:0.0003, QJs:0.0001, QQ:0.2139, KQo:0.0001, AQo:0.2554, K6s:0.0007, K7s:0.0011, K9s:0.0012, KJs:0.0293, KQs:0.0025, KK:0.0001, AKo:0.0065, ATs:0.0001, AJs:0.0592, AQs:0.0157, AKs:0.0003, AA:0.0001"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0028, K2o:0.0589, A2o:0.0666, K3o:0.0336, A3o:0.0478, 42s:0.0016, 54o:0.0001, K4o:0.0339, A4o:0.0557, 55:0.0001, Q5o:0.002, K5o:0.0192, 63s:0.0009, 64s:0.0001, K6o:0.0065, A6o:0.0511, 73s:0.0012, 77:0.0003, Q7o:0.0001, K7o:0.0226, A7o:0.0069, A8o:0.0348, 96s:0.0025, 98s:0.0002, K9o:0.0133, A9o:0.0223, T8s:0.0001, T9s:0.0007, TT:0.0065, KTo:0.0375, ATo:0.0969, J6s:0.001, J9s:0.0002, JJ:0.0001, AJo:0.016, Q2s:0.0009, Q3s:0.0088, Q5s:0.0045, Q6s:0.0001, Q7s:0.0026, Q9s:0.0026, QTs:0.0063, QQ:0.4201, KQo:0.0057, AQo:0.3282, K2s:0.0006, K5s:0.0047, K6s:0.0008, K7s:0.0292, K9s:0.0003, KTs:0.0257, KJs:0.0003, KQs:0.0001, KK:0.0035, AKo:0.0176, A2s:0.0391, A3s:0.1745, A4s:0.0005, A5s:0.0279, A6s:0.0028, A7s:0.0374, A8s:0.331, A9s:0.1013, ATs:0.2423, AJs:0.0046, AQs:0.0152, AKs:0.227, AA:0.999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0006, K2o:0.059, K3o:0.0174, 43s:0.003, K4o:0.034, A4o:0.0002, 55:0.0004, K5o:0.2065, 63s:0.0019, 64s:0.0006, K6o:0.0314, 73s:0.0003, 76s:0.0098, 77:0.0002, K7o:0.134, 86s:0.0074, Q8o:0.0032, 97s:0.002, K9o:0.0609, T9s:0.0001, TT:0.0001, KTo:0.0016, JTs:0.0002, Q2s:0.0061, Q3s:0.0026, Q5s:0.1337, Q6s:0.0638, Q7s:0.0226, Q9s:0.0437, QJs:0.0001, QQ:0.366, KQo:0.9906, AQo:0.3268, K2s:0.8968, K3s:0.2441, K4s:0.9944, K5s:0.9765, K6s:0.8148, K7s:0.8176, K8s:0.6102, K9s:0.6986, KTs:0.4987, KJs:0.2007, KQs:0.9962, KK:0.9964, AKo:0.9755, A2s:0.1638, A3s:0.1949, A4s:0.0491, A5s:0.3601, A7s:0.4515, A8s:0.0956, A9s:0.0031, ATs:0.0035, AJs:0.0001, AQs:0.9684, AKs:0.7725, AA:0.0009"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6627, 32s:0.0954, 33:0.949, 43s:0.003, 44:0.7744, 54o:0.0587, 53s:0.0166, 54s:0.0325, 55:0.9828, 75o:0.0166, 63s:0.0051, 64s:0.4544, 65s:0.3737, 66:0.8153, 74s:0.0001, 75s:0.2111, 76s:0.5556, 77:0.9777, 84s:0.0846, 86s:0.073, 88:0.9486, 93s:0.0002, 95s:0.0056, 96s:0.1317, 97s:0.1125, 98s:0.2064, 99:0.9231, T4s:0.0014, T6s:0.0001, T7s:0.0735, T8s:0.0877, TT:0.3265, J7s:0.0022, J9s:0.0662, JJ:0.998, AJo:0.0013, Q4s:0.004, Q5s:0.0001, Q6s:0.0946, Q7s:0.2368, Q8s:0.0125, Q9s:0.1168, QTs:0.0042, QJs:0.0397, QQ:0.7477, KQo:0.002, AQo:0.7599, K2s:0.0003, K4s:0.0002, K5s:0.2255, K6s:0.0099, K8s:0.0005, K9s:0.0007, KTs:0.2161, KJs:0.7366, KQs:0.0019, AKo:0.0002, A2s:0.163, A3s:0.2088, A4s:0.0059, A5s:0.3422, A6s:0.035, A7s:0.0427, A8s:0.1809, A9s:0.0009, ATs:0.4922, AJs:0.9212, AQs:0.4785, AKs:0.0003"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0038, A2o:0.1213, 33:0.0001, Q3o:0.0013, K3o:0.0115, A3o:0.0682, 42s:0.0002, 43s:0.0001, 44:0.0137, 54o:0.0001, 64o:0.0009, K4o:0.0365, A4o:0.009, 53s:0.015, 55:0.0005, Q5o:0.0009, K5o:0.0174, A5o:0.0438, 63s:0.0001, K6o:0.0072, A6o:0.0315, 76s:0.0001, 77:0.0019, J7o:0.0001, A7o:0.0423, 85s:0.0003, 86s:0.0005, 88:0.0001, J8o:0.0002, Q8o:0.0001, K8o:0.0005, A8o:0.0629, 93s:0.0002, 95s:0.0001, 97s:0.0013, A9o:0.0385, T4s:0.0001, T8s:0.0001, TT:0.0042, KTo:0.0011, ATo:0.0219, J2s:0.0001, J3s:0.0018, J7s:0.0039, JJ:0.0018, QJo:0.0001, KJo:0.0005, AJo:0.0184, Q2s:0.0012, Q4s:0.0002, Q5s:0.0199, Q6s:0.0001, Q7s:0.0709, Q9s:0.0112, QTs:0.0003, QQ:0.0764, AQo:0.0593, K3s:0.0106, K4s:0.0044, K5s:0.0039, K6s:0.0001, K7s:0.0039, K8s:0.1205, K9s:0.0079, KTs:0.0197, KJs:0.077, KQs:0.0001, KK:0.0098, AKo:0.0129, A2s:0.0763, A3s:0.0964, A4s:0.0084, A5s:0.2377, A6s:0.0452, A7s:0.1273, A8s:0.0675, A9s:0.0461, ATs:0.0321, AJs:0.0003, AQs:0.2276, AKs:0.2767, AA:0.9987"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0002, K3o:0.0702, 44:0.0013, K4o:0.0193, A4o:0.0073, 53s:0.0034, 55:0.0002, K5o:0.0406, A5o:0.0008, 63s:0.0001, 64s:0.0003, 65s:0.047, K6o:0.1325, A6o:0.0001, 73s:0.0002, 74s:0.0004, 76s:0.0002, 77:0.0007, K7o:0.0002, A7o:0.0083, 85s:0.0002, 87s:0.0001, 88:0.006, K8o:0.0501, 93s:0.0001, 99:0.0002, K9o:0.0004, T3s:0.0001, TT:0.0008, KTo:0.0396, J7s:0.0001, JJ:0.0001, Q2s:0.0193, Q4s:0.022, Q5s:0.0346, Q6s:0.0057, Q7s:0.0252, Q8s:0.022, Q9s:0.0534, QTs:0.0001, QJs:0.0014, QQ:0.1759, KQo:0.9918, AQo:0.1772, K2s:0.624, K3s:0.5454, K4s:0.8736, K5s:0.6448, K6s:0.8388, K7s:0.9385, K8s:0.3694, K9s:0.9255, KTs:0.3344, KJs:0.0168, KQs:0.996, KK:0.9902, AKo:0.9869, A2s:0.341, A3s:0.4127, A4s:0.015, A5s:0.3416, A6s:0.1905, A7s:0.0405, A8s:0.0293, A9s:0.2119, ATs:0.0608, AJs:0.0003, AQs:0.2918, AKs:0.723, AA:0.0013"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0892, JJ:0.0004, QQ:0.9989, AQo:0.0005, KK:0.9998, AKo:0.9997, AQs:0.0343, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0006, JJ:0.0973, QQ, KQs:0.0001, KK, AKo, AQs:0.0479, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@19|HJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0064, 42s:0.0002, 74o:0.0001, 55:0.0002, 63s:0.0008, 66:0.0026, 75s:0.0001, 77:0.1868, 86s:0.0001, 88:0.0235, A8o:0.0527, 97s:0.0001, 99:0.1016, A9o:0.0978, T4s:0.0372, T7s:0.001, T8s:0.0002, T9s:0.0001, TT:0.004, ATo:0.0225, J3s:0.0003, J5s:0.0004, J7s:0.0001, J8s:0.0001, J9s:0.0091, JTs:0.0008, JJ:0.4303, AJo:0.0221, Q2s:0.0005, Q4s:0.0001, Q7s:0.0002, Q9s:0.1109, QTs:0.0003, QJs:0.0001, QQ:0.0668, AQo:0.3721, K3s:0.0308, K5s:0.0005, K6s:0.002, K8s:0.0002, KTs:0.0001, KJs:0.0056, KK:0.0208, AKo:0.0214, A2s:0.0026, A3s:0.0004, A4s:0.0009, A5s:0.001, A6s:0.0741, A7s:0.0195, A8s:0.1138, A9s:0.3228, ATs:0.0581, AJs:0.2891, AQs:0.3839, AKs:0.0032, AA:0.3871"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0339, A2o:0.1552, 32s:0.0052, 33:0.0583, 83o:0.0005, T3o:0.0001, A3o:0.1926, 42s:0.054, 43s:0.0255, 44:0.1927, 64o:0.0092, A4o:0.446, 53s:0.0066, 54s:0.0378, 55:0.0013, 75o:0.0131, 85o:0.0056, A5o:0.2608, 62s:0.0008, 63s:0.1463, 64s:0.0006, 65s:0.4785, 66:0.5929, T6o:0.0106, Q6o:0.0002, K6o:0.0003, A6o:0.0846, 72s:0.0002, 73s:0.0321, 74s:0.0342, 75s:0.0807, 76s:0.192, A7o:0.0997, 84s:0.0643, 85s:0.0743, 86s:0.0447, 88:0.1484, T8o:0.0398, Q8o:0.0003, K8o:0.0001, A8o:0.2917, 93s:0.0039, 95s:0.0003, 96s:0.0469, 97s:0.0002, 98s:0.0987, 99:0.2565, A9o:0.0667, T2s:0.0049, T3s:0.0012, T5s:0.024, T6s:0.0336, T7s:0.1736, T8s:0.3009, T9s:0.3636, TT:0.013, JTo:0.0094, KTo:0.0005, ATo:0.0242, J3s:0.0089, J4s:0.0059, J5s:0.0028, J6s:0.0043, J7s:0.0157, J8s:0.0714, J9s:0.0634, JTs:0.0469, JJ:0.0312, KJo:0.0025, AJo:0.2499, Q2s:0.0004, Q3s:0.0021, Q8s:0.0078, Q9s:0.0348, QTs:0.0036, QJs:0.0291, QQ:0.4684, KQo:0.0185, AQo:0.2524, K2s:0.0404, K3s:0.0785, K4s:0.0232, K5s:0.032, K6s:0.089, K7s:0.1049, K8s:0.0071, K9s:0.0055, KTs:0.07, KJs:0.0306, KK:0.9791, AKo:0.9759, A2s:0.2418, A3s:0.4995, A4s:0.7182, A5s:0.2693, A6s:0.1693, A7s:0.5379, A8s:0.3758, A9s:0.2041, ATs:0.6087, AJs:0.2461, AQs:0.2121, AKs:0.995, AA:0.6129"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0001, 74s:0.0001, 76s:0.0001, 84s:0.0001, T6s:0.0001, T8s:0.0002, TT:0.0001, J2s:0.0001, JJ:0.0089, Q2s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.0005, AQo:0.0014, K6s:0.0001, KTs:0.002, KQs:0.0004, KK:0.0728, A3s:0.0022, A4s:0.0222, A5s:0.0001, A6s:0.001, A7s:0.0258, A9s:0.0001, ATs:0.3195, AJs:0.0652, AQs:0.0184, AA:0.8485"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0008, K2o:0.001, A2o:0.045, 32s:0.0002, 33:0.4225, K3o:0.0003, A3o:0.1332, 42s:0.0014, 43s:0.0009, 44:0.1931, K4o:0.0006, A4o:0.0914, 53s:0.0001, 54s:0.0238, 55:0.3035, K5o:0.0007, A5o:0.2358, 62s:0.0001, 63s:0.0013, 64s:0.0151, 65s:0.0786, 66:0.0437, 86o:0.0001, A6o:0.1029, 72s:0.0001, 73s:0.0007, 74s:0.0002, 75s:0.0029, 76s:0.0373, 77:0.1485, K7o:0.0009, A7o:0.0273, 82s:0.0008, 84s:0.0058, 85s:0.0025, 86s:0.0053, 87s:0.0475, 88:0.2941, Q8o:0.0001, A8o:0.1022, 93s:0.0003, 95s:0.0001, 96s:0.0007, 97s:0.0019, 98s:0.0238, 99:0.2974, J9o:0.0012, K9o:0.0001, A9o:0.1305, T3s:0.0008, T6s:0.0001, T7s:0.0002, T8s:0.0316, T9s:0.0374, TT:0.3754, KTo:0.0001, ATo:0.2672, J2s:0.0006, J4s:0.0007, J5s:0.0001, J6s:0.0002, J8s:0.0002, J9s:0.0071, JTs:0.0142, JJ:0.3992, KJo:0.0003, AJo:0.1411, Q2s:0.0016, Q3s:0.0003, Q4s:0.0003, Q6s:0.0006, Q7s:0.0002, Q9s:0.0005, QTs:0.0256, QQ:0.9269, KQo:0.0015, AQo:0.9611, K4s:0.0092, K5s:0.0039, K6s:0.0002, K7s:0.0016, K8s:0.0021, K9s:0.0003, KTs:0.0378, KJs:0.0024, KQs:0.0034, KK:0.9272, AKo, A2s:0.4208, A3s:0.623, A4s:0.5494, A5s:0.4048, A6s:0.3004, A7s:0.1653, A8s:0.2763, A9s:0.3607, ATs:0.4527, AJs:0.2258, AQs:0.9686, AKs, AA:0.1515"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|CO:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 74s:0.0001, 87s:0.0001, 88:0.0002, 99:0.0021, TT:0.0034, JJ:0.193, Q9s:0.0001, QJs:0.0001, QQ, AQo:0.2021, K4s:0.0007, K9s:0.0002, KTs:0.0002, KQs:0.0001, KK, AKo:0.3737, A2s:0.0001, A3s:0.0001, A5s:0.0005, A6s:0.0001, A7s:0.0001, ATs:0.0001, AJs:0.0828, AQs:0.3106, AKs:0.9974, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|HJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "96s:0.0001, JJ:0.0002, QQ:0.0001, KK:0.7866, A3s:0.0001, A4s:0.0001, A6s:0.0001, A8s:0.0001, AJs:0.0001, AKs:0.0014, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|HJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0011, 55:0.0003, 62s:0.0003, 64s:0.0002, 66:0.0004, 73s:0.0003, 74s:0.0001, 77:0.0009, A7o:0.0001, 98s:0.0004, 99:0.1879, T8s:0.0001, TT:0.0448, ATo:0.0002, JJ:0.2511, AJo:0.0177, Q6s:0.0002, Q9s:0.0003, QJs:0.0004, QQ:0.6541, AQo:0.2145, K6s:0.0005, K8s:0.0001, K9s:0.0001, KJs:0.0002, KK, AKo:0.9967, A2s:0.0003, A3s:0.0001, A4s:0.0003, A7s:0.0004, A8s:0.0008, A9s:0.0007, ATs:0.0002, AJs:0.138, AQs:0.6909, AKs:0.9992, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BB:3BET@6|HJ:CALL@4",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0018, 82o:0.0001, J2o:0.0004, K2o:0.0001, 32s:0.0002, 33:0.0012, 43o:0.0005, 83o:0.0001, Q3o:0.0002, K3o:0.0001, 43s:0.0008, 44:0.0001, 54o:0.0001, 84o:0.0001, 94o:0.0001, Q4o:0.0001, K4o:0.0002, A4o:0.0038, 52s:0.0001, 53s:0.0001, 54s:0.0001, 55:0.0621, 65o:0.001, 75o:0.0001, K5o:0.0009, A5o:0.0007, 62s:0.0008, 64s:0.0001, 65s:0.0026, 66:0.0013, 76o:0.0019, T6o:0.0001, K6o:0.0002, 72s:0.0003, 73s:0.0004, 74s:0.0016, 75s:0.0004, 76s:0.0001, 77:0.0003, 97o:0.0003, A7o:0.0003, 82s:0.002, 83s:0.0001, 84s:0.0001, 85s:0.0001, 86s:0.0026, 87s:0.0001, J8o:0.0001, Q8o:0.0005, K8o:0.0001, 94s:0.0005, 97s:0.0005, 99:0.0019, T9o:0.0003, Q9o:0.0052, K9o:0.0001, A9o:0.0002, T3s:0.0004, T4s:0.0014, T8s:0.0006, T9s:0.0004, JTo:0.0003, QTo:0.0001, J2s:0.0004, J3s:0.0063, J4s:0.0001, J5s:0.0002, J6s:0.0076, J7s:0.0003, J8s:0.0012, J9s:0.0001, JTs:0.0006, JJ:0.0211, QJo:0.0001, KJo:0.0001, AJo:0.0001, Q3s:0.0108, Q5s:0.0004, Q6s:0.0002, Q7s:0.0003, Q8s:0.0007, Q9s:0.0001, QTs:0.0004, QJs:0.0001, QQ:0.1261, KQo:0.0003, K2s:0.0012, K4s:0.0044, K7s:0.0001, K8s:0.0005, K9s:0.0005, KTs:0.0027, KJs:0.0004, KQs:0.0151, KK:0.6743, AKo:0.0021, A2s:0.0002, A3s:0.0001, A4s:0.0082, A5s:0.0003, A6s:0.0021, A7s:0.0012, A8s:0.0017, A9s:0.0332, ATs:0.0066, AJs:0.1765, AQs:0.1083, AKs:0.3442, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0018, 32o:0.0003, 72o:0.0001, Q2o:0.0001, K2o:0.0003, 32s:0.0003, 33:0.0005, 43o:0.0003, T3o:0.0001, J3o:0.0001, A3o:0.0013, 42s:0.0003, 43s:0.0007, 44:0.0004, 94o:0.0001, Q4o:0.0001, A4o:0.0004, 52s:0.0007, 53s:0.001, 55:0.0002, 65o:0.0006, 85o:0.0004, K5o:0.0001, 62s:0.0008, 63s:0.0003, 64s:0.0004, 65s:0.0006, 66:0.0009, 76o:0.0001, 86o:0.0006, T6o:0.0003, K6o:0.0001, 72s:0.0005, 73s:0.0003, 74s:0.0001, 75s:0.0012, 87o:0.0001, J7o:0.0001, Q7o:0.0001, K7o:0.0004, A7o:0.0003, 82s:0.001, 83s:0.0001, 84s:0.0005, 85s:0.0023, 88:0.0013, 98o:0.0001, J8o:0.0001, Q8o:0.0003, K8o:0.0001, A8o:0.0002, 92s:0.0008, 94s:0.0007, 97s:0.0005, 99:0.0014, J9o:0.0003, K9o:0.0001, A9o:0.0006, T3s:0.0002, T4s:0.0006, T5s:0.0002, T6s:0.001, T8s:0.0004, T9s:0.0015, TT:0.0003, JTo:0.0001, QTo:0.0001, ATo:0.0011, J2s:0.0002, J3s:0.0004, J4s:0.0016, J5s:0.0002, J7s:0.0001, J9s:0.0006, JTs:0.0001, JJ:0.1352, QJo:0.0002, AJo:0.0014, Q2s:0.0015, Q4s:0.0005, Q5s:0.0016, Q6s:0.0001, Q7s:0.0015, Q8s:0.0004, Q9s:0.0001, QTs:0.0012, QJs:0.0003, QQ:0.011, KQo:0.0001, AQo:0.4433, K2s:0.0001, K4s:0.0015, K5s:0.0007, K6s:0.0001, K7s:0.001, K8s:0.0001, K9s:0.0013, KTs:0.0004, KJs:0.0006, KQs:0.0016, KK:0.0464, AKo:0.2601, A2s:0.0001, A3s:0.16, A4s:0.0022, A5s:0.0019, A6s:0.0003, A7s:0.0016, A8s:0.0004, A9s:0.0457, ATs:0.0063, AJs:0.266, AQs:0.1638, AKs:0.1223, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0721, QQ:0.9992, KK, AKo, AQs:0.0016, AKs:0.9984, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0814, JJ:0.0779, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@19|HJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0007, 32s:0.0002, 73o:0.0001, A3o:0.0009, 42s:0.0006, 74o:0.0001, A4o:0.0005, 52s:0.0001, Q5o:0.0001, A5o:0.0001, 62s:0.0003, 63s:0.0073, 64s:0.004, 65s:0.023, 66:0.0005, 74s:0.0073, 75s:0.0003, 77:0.0143, 83s:0.0008, 85s:0.0068, 87s:0.0001, 88:0.1116, T8o:0.0002, 92s:0.0001, 93s:0.0007, 94s:0.0001, 95s:0.0101, 96s:0.0001, 97s:0.0011, 99:0.0005, A9o:0.0001, T2s:0.0097, T4s:0.0001, T5s:0.0001, T6s:0.0005, T9s:0.0004, TT:0.0124, ATo:0.0001, J3s:0.0001, J4s:0.022, J5s:0.0054, J7s:0.0102, J8s:0.0002, J9s:0.0001, JTs:0.0023, QJo:0.0004, KJo:0.0004, AJo:0.0156, Q4s:0.0003, Q6s:0.0003, Q7s:0.0001, Q8s:0.0008, Q9s:0.0001, QTs:0.0046, QJs:0.0001, QQ:0.0006, KQo:0.0065, AQo:0.0294, K2s:0.0005, K4s:0.0001, K5s:0.0014, K6s:0.0001, K7s:0.0004, K8s:0.0228, K9s:0.0001, KJs:0.0006, KQs:0.0059, KK:0.2486, AKo:0.0062, A2s:0.0137, A4s:0.002, A5s:0.0037, A6s:0.2458, A7s:0.0001, A9s:0.0033, ATs:0.0571, AJs:0.1128, AQs:0.5847, AKs:0.0001, AA:0.0008"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0294, 72o:0.0001, Q2o:0.0004, A2o:0.3061, 32s:0.0179, 33:0.0173, 63o:0.0001, T3o:0.0001, K3o:0.0012, A3o:0.2557, 42s:0.0366, 43s:0.0295, 44:0.0287, 64o:0.0163, T4o:0.0002, Q4o:0.0048, K4o:0.0001, A4o:0.0768, 52s:0.0294, 53s:0.1347, 54s:0.2469, 55:0.0144, 65o:0.0221, 75o:0.0089, Q5o:0.0001, A5o:0.2513, 62s:0.0109, 63s:0.1324, 64s:0.0069, 65s:0.2804, 66:0.2773, 76o:0.0298, 86o:0.0645, J6o:0.0005, K6o:0.0135, A6o:0.2538, 73s:0.0072, 74s:0.0307, 75s:0.1481, 76s:0.0115, 77:0.1208, J7o:0.003, K7o:0.0001, A7o:0.2302, 82s:0.0539, 83s:0.0028, 84s:0.0011, 85s:0.0206, 86s:0.5992, 87s:0.0203, 88:0.0815, T8o:0.0141, K8o:0.0004, A8o:0.1062, 92s:0.0274, 94s:0.0026, 95s:0.0115, 96s:0.0001, 97s:0.0202, 98s:0.0108, 99:0.054, K9o:0.0004, A9o:0.2776, T2s:0.0147, T3s:0.0059, T4s:0.0001, T6s:0.0283, T8s:0.0001, T9s:0.0139, TT:0.0242, QTo:0.0004, KTo:0.0002, ATo:0.0307, J2s:0.0392, J3s:0.0211, J4s:0.0162, J5s:0.0019, J6s:0.0165, J7s:0.0018, J8s:0.0092, J9s:0.0127, JTs:0.0399, JJ:0.0185, QJo:0.0002, KJo:0.0001, AJo:0.0351, Q2s:0.0378, Q3s:0.0072, Q4s:0.0011, Q5s:0.029, Q6s:0.0203, Q7s:0.0001, Q8s:0.0189, Q9s:0.0078, QJs:0.0037, QQ:0.4862, KQo:0.0149, AQo:0.7962, K2s:0.0107, K3s:0.0002, K4s:0.0059, K5s:0.0187, K6s:0.1734, K7s:0.0376, K8s:0.0008, K9s:0.0143, KTs:0.0156, KJs:0.0124, KQs:0.0406, KK:0.7197, AKo:0.992, A2s:0.5717, A3s:0.2327, A4s:0.984, A5s:0.2067, A6s:0.4408, A7s:0.7176, A8s:0.1045, A9s:0.5989, ATs:0.1121, AJs:0.2568, AQs:0.2608, AKs:0.9912, AA:0.9992"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1427, 33:0.0533, 44:0.0335, A4o:0.0003, 53s:0.0072, 54s:0.0201, 55:0.1571, A5o:0.0005, 62s:0.0002, 65s:0.0177, 66:0.2076, 73s:0.0002, 74s:0.0005, 75s:0.0004, 76s:0.0032, 77:0.6618, 84s:0.0007, 86s:0.0002, 88:0.385, A8o:0.0001, 97s:0.0001, 98s:0.0448, 99:0.1168, K9o:0.0002, T6s:0.0001, TT:0.0986, ATo:0.015, J2s:0.0001, J7s:0.0001, J8s:0.0002, J9s:0.0001, JTs:0.0017, JJ:0.0886, KJo:0.0003, AJo:0.0015, Q2s:0.0003, Q5s:0.0142, Q8s:0.0003, QTs:0.0115, QJs:0.0425, QQ:0.4314, KQo:0.0002, K3s:0.0004, K4s:0.0008, K5s:0.0015, K7s:0.0004, K9s:0.0021, KTs:0.0009, KJs:0.0209, KQs:0.0137, KK:0.0967, AKo:0.0003, A2s:0.0328, A3s:0.0365, A4s:0.0599, A5s:0.0451, A6s:0.039, A7s:0.0321, A9s:0.0809, ATs:0.1776, AJs:0.1705, AQs:0.0047, AA:0.4819"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1105, A2o:0.2503, 32s:0.0003, 33:0.076, A3o:0.3656, 43s:0.0457, 44:0.1634, A4o:0.2441, 53s:0.0001, 54s:0.1294, 55:0.434, A5o:0.3871, 63s:0.0008, 65s:0.1894, 66:0.3713, A6o:0.085, 72s:0.0001, 73s:0.0003, 74s:0.0003, 75s:0.0028, 76s:0.1392, 77:0.0553, A7o:0.1077, 83s:0.0002, 84s:0.0004, 85s:0.0005, 86s:0.0458, 87s:0.0998, 88:0.2608, K8o:0.0001, A8o:0.252, 92s:0.0007, 93s:0.0002, 94s:0.0001, 96s:0.0032, 98s:0.2953, 99:0.0087, K9o:0.0002, A9o:0.0939, T6s:0.0168, T7s:0.0001, T9s:0.1123, TT:0.0591, ATo:0.3225, J2s:0.0001, J4s:0.0001, J5s:0.0006, J7s:0.0002, J9s:0.2049, JTs:0.0003, JJ:0.1577, AJo:0.0038, Q2s:0.0089, Q5s:0.0298, Q6s:0.0021, Q7s:0.0002, Q9s:0.0102, QTs:0.0594, QJs:0.0299, QQ:0.497, AQo:0.9939, K2s:0.0047, K3s:0.0001, K4s:0.0002, K5s:0.0006, K6s:0.0002, K7s:0.0006, K9s:0.0024, KTs:0.0008, KJs:0.0872, KQs:0.0887, KK:0.8878, AKo:0.9993, A2s:0.3773, A3s:0.8171, A4s:0.7264, A5s:0.6247, A6s:0.8256, A7s:0.7273, A8s:0.7293, A9s:0.7327, ATs:0.6507, AJs:0.6439, AQs:0.9936, AKs, AA:0.5181"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|CO:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 55:0.0001, 66:0.0003, 76s:0.0001, 88:0.0002, TT:0.0005, JJ:0.0036, QTs:0.0001, QQ:0.9876, AQo:0.1114, KJs:0.0001, KQs:0.0006, KK, AKo, A4s:0.0002, A5s:0.0002, A8s:0.0001, A9s:0.0002, ATs:0.0005, AJs:0.0017, AQs:0.8147, AKs:0.9956, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|HJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, QJs:0.0004, QQ:0.0007, AQo:0.0001, KK:0.2688, AKo:0.001, A9s:0.0003, AJs:0.0001, AQs:0.0003, AKs:0.0134, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|HJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "53s:0.0001, 86s:0.0001, 88:0.0001, 96s:0.0001, 99:0.0011, T8s:0.0001, TT:0.0823, J6s:0.0001, JJ:0.3216, AJo:0.0014, QQ:0.8335, AQo:0.1565, KK, AKo:0.8898, A4s:0.0003, A5s:0.0002, A7s:0.0001, A9s:0.0001, ATs:0.1188, AJs:0.0063, AQs:0.4069, AKs:0.9984, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|BTN:3BET@5|HJ:CALL@3",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0066, 42o:0.0004, J2o:0.0002, K2o:0.0003, A2o:0.0006, 32s:0.008, 33:0.0007, 43o:0.0004, T3o:0.0002, Q3o:0.0018, K3o:0.0004, A3o:0.0002, 42s:0.0005, 43s:0.0001, 44:0.0018, 94o:0.0002, T4o:0.0001, K4o:0.0002, A4o:0.0001, 52s:0.0007, 53s:0.0013, 54s:0.0002, 55:0.0003, T5o:0.0001, A5o:0.0034, 62s:0.0002, 63s:0.0014, 64s:0.009, 65s:0.0077, 66:0.0003, 76o:0.0003, 86o:0.0003, T6o:0.0006, Q6o:0.0002, K6o:0.011, 72s:0.0005, 73s:0.0018, 74s:0.0244, 75s:0.0006, 76s:0.0194, 77:0.138, 87o:0.0003, 97o:0.0002, T7o:0.0003, K7o:0.0007, A7o:0.0029, 82s:0.001, 83s:0.0002, 85s:0.0504, 86s:0.0002, 87s:0.0001, 98o:0.0001, J8o:0.0003, 92s:0.0006, 93s:0.0062, 94s:0.0003, 95s:0.0156, 96s:0.0175, 97s:0.0003, 98s:0.0257, 99:0.0005, J9o:0.0001, K9o:0.0005, A9o:0.0002, T2s:0.0054, T3s:0.0066, T4s:0.0011, T5s:0.0031, T6s:0.0077, T7s:0.0012, T8s:0.0068, T9s:0.0073, TT:0.0005, JTo:0.0004, ATo:0.0008, J2s:0.0078, J3s:0.0027, J4s:0.0048, J5s:0.0002, J6s:0.0001, J7s:0.0016, JTs:0.0001, JJ:0.0009, QJo:0.0001, AJo:0.0006, Q3s:0.0002, Q5s:0.0001, Q6s:0.0001, Q7s:0.0023, Q9s:0.0007, QTs:0.002, QQ:0.0471, KQo:0.0002, AQo:0.0004, K2s:0.0043, K3s:0.0001, K4s:0.0477, K5s:0.0031, K6s:0.0011, K7s:0.0002, K8s:0.0004, K9s:0.0015, KTs:0.0215, KJs:0.0006, KQs:0.1953, KK:0.5832, AKo:0.0024, A2s:0.001, A3s:0.0216, A4s:0.0105, A5s:0.0037, A6s:0.0016, A7s:0.0077, A8s:0.0061, A9s:0.0108, ATs:0.0309, AJs:0.0281, AQs:0.0018, AKs:0.1063, AA:0.0086"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 32o:0.0001, T2o:0.0001, K2o:0.0001, A2o:0.0003, 32s:0.0009, 33:0.0029, 83o:0.0001, T3o:0.0001, Q3o:0.0008, A3o:0.0002, 42s:0.0005, 43s:0.0003, 44:0.0005, 74o:0.0001, 84o:0.0002, T4o:0.0001, J4o:0.0001, K4o:0.0001, A4o:0.0013, 52s:0.0018, 54s:0.0005, 55:0.0001, 95o:0.0001, Q5o:0.0001, A5o:0.0001, 62s:0.0001, 63s:0.0031, 64s:0.0005, 65s:0.0003, 66:0.0004, 76o:0.0007, 86o:0.0003, T6o:0.0001, A6o:0.0006, 72s:0.0001, 74s:0.0001, 76s:0.0003, 77:0.0005, 97o:0.0002, T7o:0.0001, A7o:0.0007, 82s:0.0001, 86s:0.0003, 87s:0.0004, 88:0.0008, 98o:0.0002, J8o:0.0001, K8o:0.0003, A8o:0.0001, 94s:0.0001, 95s:0.0009, 96s:0.003, 97s:0.008, 98s:0.0015, 99:0.0018, K9o:0.0003, A9o:0.0035, T2s:0.0001, T3s:0.0026, T4s:0.0003, T5s:0.0015, T7s:0.0003, T8s:0.001, T9s:0.0008, TT:0.0014, KTo:0.0003, ATo:0.0014, J2s:0.0057, J4s:0.0002, J5s:0.0002, J7s:0.0002, J8s:0.0004, JTs:0.0015, JJ:0.002, KJo:0.0001, AJo:0.0001, Q4s:0.0009, Q5s:0.0004, Q7s:0.0003, QTs:0.0002, QJs:0.0003, QQ:0.0381, KQo:0.0001, AQo:0.0015, K2s:0.0015, K3s:0.0006, K5s:0.0028, K7s:0.0003, K8s:0.0002, K9s:0.0076, KTs:0.0005, KQs:0.0155, KK:0.3002, AKo:0.008, A3s:0.0005, A4s:0.0002, A5s:0.0439, A6s:0.0003, A7s:0.0001, A8s:0.0214, A9s:0.0022, ATs:0.1144, AJs:0.0017, AQs:0.0107, AKs:0.2561, AA:0.9908"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, TT:0.0006, JJ:0.0005, QTs:0.0001, QQ:0.9995, AQo:0.0001, KTs:0.0001, KK, AKo, A4s:0.0001, A5s:0.0001, A9s:0.0001, AQs:0.0142, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.0017, JJ:0.1023, QQ:0.9996, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@19|HJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0205, A2o:0.0001, 33:0.0109, 54s:0.0432, 55:0.0342, 63s:0.0001, A6o:0.124, 75s:0.0004, 76s:0.0091, 77:0.0123, 85s:0.0001, 88:0.0456, A8o:0.0417, 94s:0.0002, 95s:0.0156, 97s:0.0003, 98s:0.0001, 99:0.0002, T9o:0.0001, T4s:0.0001, T8s:0.0001, T9s:0.0037, TT:0.0455, ATo:0.138, J5s:0.0003, J8s:0.0018, JTs:0.0005, JJ:0.0015, AJo:0.0024, Q3s:0.0001, Q5s:0.0001, Q7s:0.0002, QTs:0.0132, QJs:0.0018, QQ:0.0023, AQo:0.688, K2s:0.001, K6s:0.0057, K7s:0.0026, K9s:0.0034, KTs:0.0937, KJs:0.0164, KK:0.0485, AKo:0.1433, A2s:0.0756, A4s:0.0001, A5s:0.0099, A7s:0.1824, A8s:0.2256, A9s:0.1241, ATs:0.4379, AJs:0.1918, AQs:0.2719, AKs:0.0794, AA:0.7596"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0997, 42o:0.0003, 92o:0.0004, Q2o:0.0002, A2o:0.0575, 32s:0.0598, 33:0.231, 43o:0.0438, 53o:0.0002, 93o:0.0002, K3o:0.0223, A3o:0.2652, 42s:0.099, 43s:0.0758, 44:0.0627, 54o:0.1061, J4o:0.0001, Q4o:0.0305, K4o:0.0276, A4o:0.1328, 52s:0.0001, 53s:0.1056, 54s:0.0709, 55:0.0938, 65o:0.0486, 75o:0.0715, 85o:0.0258, K5o:0.0149, A5o:0.1308, 62s:0.0002, 63s:0.005, 64s:0.1504, 65s:0.2296, 66:0.1197, 76o:0.115, 86o:0.0002, Q6o:0.0001, K6o:0.0018, A6o:0.115, 72s:0.0568, 73s:0.0491, 74s:0.0649, 75s:0.0963, 76s:0.3994, 77:0.1751, 87o:0.0899, 97o:0.0368, T7o:0.0138, J7o:0.0001, K7o:0.0458, A7o:0.0218, 82s:0.0008, 83s:0.0194, 84s:0.002, 85s:0.0365, 86s:0.0609, 87s:0.0593, 88:0.1307, Q8o:0.0004, A8o:0.2708, 92s:0.0349, 93s:0.0016, 95s:0.0975, 96s:0.0022, 98s:0.1832, 99:0.1768, J9o:0.0001, K9o:0.0051, A9o:0.1467, T2s:0.0002, T3s:0.0001, T4s:0.0307, T5s:0.0001, T6s:0.0096, T7s:0.0355, T8s:0.0533, T9s:0.121, TT:0.1892, QTo:0.0001, ATo:0.153, J2s:0.0008, J3s:0.0114, J4s:0.1791, J5s:0.038, J6s:0.0599, J8s:0.0038, J9s:0.0415, JTs:0.042, JJ:0.2287, AJo:0.0631, Q2s:0.0004, Q3s:0.0005, Q4s:0.0436, Q5s:0.0318, Q6s:0.0457, Q7s:0.0588, Q8s:0.0709, Q9s:0.0048, QTs:0.0589, QJs:0.0047, QQ:0.504, KQo:0.0457, AQo:0.2312, K2s:0.0825, K4s:0.0722, K5s:0.1806, K6s:0.0425, K7s:0.0049, K8s:0.0347, K9s:0.0059, KTs:0.0645, KJs:0.0002, KQs:0.0589, KK:0.9499, AKo:0.8554, A2s:0.143, A3s:0.7756, A4s:0.6185, A5s:0.9138, A6s:0.7654, A7s:0.3869, A8s:0.2435, A9s:0.1681, ATs:0.4604, AJs:0.1285, AQs:0.5373, AKs:0.9204, AA:0.2404"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42s:0.0001, 44:0.0255, 54s:0.0001, 66:0.0001, A6o:0.001, 74s:0.0003, 88:0.0021, 98s:0.0001, 99:0.0008, TT:0.0034, J8s:0.0004, JJ:0.0001, QJs:0.0001, QQ:0.0316, AQo:0.0013, K2s:0.0001, K4s:0.0009, K9s:0.0345, KTs:0.0021, KK:0.1216, A2s:0.0009, A3s:0.0001, A4s:0.0307, A6s:0.0159, A9s:0.0972, ATs:0.0329, AJs:0.1028, AQs:0.0123, AKs:0.0003, AA:0.735"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0073, 32o:0.0001, A2o:0.0001, 32s:0.0002, 33:0.1494, 43s:0.0001, 44:0.0953, A4o:0.0377, 53s:0.0014, 54s:0.0005, 55:0.1198, A5o:0.1688, 62s:0.0004, 63s:0.0032, 65s:0.0656, 66:0.1088, A6o:0.0072, 74s:0.0006, 76s:0.0478, 77:0.1121, A7o:0.0402, 82s:0.0002, 83s:0.0001, 87s:0.0005, 88:0.0494, 94s:0.0001, 98s:0.0002, 99:0.0579, A9o:0.0053, T5s:0.0001, T6s:0.0001, T7s:0.0001, T9s:0.0072, TT:0.1091, KTo:0.0002, ATo:0.0052, J6s:0.0001, J8s:0.0072, J9s:0.0004, JTs:0.0006, JJ:0.123, AJo:0.0009, Q2s:0.0002, Q9s:0.0002, QTs:0.0001, QQ:0.8501, AQo:0.8329, K2s:0.0007, K3s:0.0004, K4s:0.0003, K5s:0.0001, K6s:0.002, K7s:0.0002, K8s:0.0002, K9s:0.0014, KTs:0.0001, KJs:0.0001, KQs:0.0002, KK:0.8784, AKo, A2s:0.0975, A3s:0.3956, A4s:0.5249, A5s:0.3829, A6s:0.4455, A7s:0.2087, A8s:0.2959, A9s:0.3981, ATs:0.5177, AJs:0.5837, AQs:0.8905, AKs:0.9997, AA:0.265"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|CO:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0005, 72s:0.0001, 77:0.0014, 88:0.0001, 99:0.0013, TT:0.0001, J4s:0.0001, J8s:0.0001, JJ:0.0246, Q4s:0.0001, Q9s:0.0001, QQ:0.9983, AQo:0.34, K5s:0.0001, K7s:0.0001, K9s:0.0001, KJs:0.0003, KQs:0.0005, KK, AKo:0.9764, A2s:0.0001, A3s:0.0005, A4s:0.0002, A5s:0.0001, A7s:0.0001, AJs:0.1023, AQs:0.8098, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|HJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, T5s:0.0001, QQ:0.0159, KQs:0.0002, KK:0.5818, AKo:0.0006, A4s:0.0002, A8s:0.0001, ATs:0.0001, AQs:0.0007, AKs:0.0018, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|HJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, A4o:0.0001, 55:0.0007, 76s:0.0002, 77:0.0001, 88:0.0018, A8o:0.0002, 95s:0.0001, 98s:0.0001, 99:0.0259, A9o:0.0001, T9s:0.0001, TT:0.4884, J8s:0.0001, JJ:0.853, AJo:0.0007, Q6s:0.0001, QJs:0.0005, QQ:0.9988, AQo:0.2007, K3s:0.0002, K4s:0.0001, K6s:0.0001, KQs:0.0002, KK, AKo:0.9956, A4s:0.0002, A6s:0.0006, A7s:0.0007, A8s:0.0001, A9s:0.0005, ATs:0.0036, AJs:0.1754, AQs:0.7403, AKs:0.9985, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|CO:CALL@2|SB:3BET@6|HJ:CALL@4",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, 32o:0.0001, A2o:0.0002, Q3o:0.0004, 44:0.0001, A4o:0.0002, 54s:0.0003, 55:0.0001, 66:0.0003, T6o:0.0001, A6o:0.0001, 76s:0.0011, 77:0.0071, 82s:0.0001, 85s:0.0009, 86s:0.0001, 88:0.0008, 93s:0.0001, 94s:0.0006, 98s:0.0001, 99:0.0003, K9o:0.0003, A9o:0.0001, T3s:0.0001, T4s:0.0005, T5s:0.0002, T6s:0.0041, T7s:0.0043, T8s:0.0001, T9s:0.0002, TT:0.0001, ATo:0.0002, J7s:0.0001, J9s:0.0005, JTs:0.0005, JJ:0.0011, Q3s:0.0001, Q4s:0.0001, Q7s:0.0002, Q8s:0.0005, Q9s:0.0006, QTs:0.0005, QQ:0.3509, KQo:0.0004, AQo:0.0003, K2s:0.0003, K5s:0.0001, K6s:0.0001, K8s:0.0002, K9s:0.1736, KTs:0.0009, KQs:0.0001, KK:0.7343, AKo:0.0402, A2s:0.0004, A3s:0.0001, A4s:0.011, A5s:0.0131, A6s:0.0001, A7s:0.0046, A8s:0.0006, A9s:0.0006, ATs:0.0015, AJs:0.0008, AQs:0.0062, AKs:0.2567, AA:0.0776"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.0001, Q3o:0.0002, 42s:0.0004, 43s:0.0001, 44:0.0001, T4o:0.0001, A4o:0.0003, 52s:0.0001, 53s:0.0002, 54s:0.0002, 55:0.0001, 75o:0.0001, T5o:0.0001, A5o:0.0002, 62s:0.0005, 63s:0.0001, 64s:0.0005, 65s:0.0001, 76o:0.0001, A6o:0.0001, 72s:0.0002, 76s:0.0002, 77:0.0931, 87o:0.0001, 85s:0.0007, 88:0.0011, Q8o:0.0001, K8o:0.0001, A8o:0.0001, 93s:0.0001, 94s:0.0005, 95s:0.0004, 96s:0.0009, 97s:0.0001, 98s:0.0003, T3s:0.0001, T4s:0.0005, T5s:0.0003, T6s:0.0001, T7s:0.0001, T8s:0.0001, T9s:0.0005, TT:0.0004, QTo:0.0001, J4s:0.0001, J6s:0.0001, J7s:0.0003, JJ:0.2363, AJo:0.0003, Q4s:0.0001, Q5s:0.0001, Q6s:0.0004, Q7s:0.0004, Q8s:0.0001, Q9s:0.0138, QJs:0.0002, QQ:0.0265, KQo:0.0002, AQo:0.2364, K2s:0.0001, K5s:0.0001, K6s:0.0002, K8s:0.0003, K9s:0.0003, KTs:0.0054, KJs:0.0006, KK:0.0045, AKo:0.571, A2s:0.0001, A3s:0.0007, A4s:0.1839, A5s:0.0002, A6s:0.2244, A7s:0.0126, A8s:0.0001, A9s:0.0761, ATs:0.0015, AJs:0.1153, AQs:0.5468, AKs:0.4075, AA:0.9224"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.6822, JJ, QQ, AQo:0.989, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0007, QQ, KK, AKo:0.9979, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@19|BB:CALL@18",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0021, A2o:0.0048, 33:0.4169, A3o:0.0854, 43s:0.0185, 44:0.8566, A4o:0.1541, 53s:0.0823, 54s:0.7905, 55:0.9814, 65o:0.0265, A5o:0.15, 63s:0.0968, 64s:0.7219, 65s:0.8373, 66:0.9872, A6o:0.0001, 74s:0.0149, 75s:0.1235, 76s:0.7909, 77:0.8371, A7o:0.0114, 85s:0.0004, 86s:0.1523, 87s:0.3364, 88:0.3613, 95s:0.0001, 97s:0.0811, 98s:0.0807, 99:0.0687, A9o:0.0012, T7s:0.0029, T8s:0.027, T9s:0.0399, TT:0.2822, ATo:0.0014, J9s:0.0003, JTs:0.0017, JJ:0.9355, AJo:0.4137, Q6s:0.0008, Q9s:0.0009, QTs:0.0902, QJs:0.0031, QQ:0.0465, AQo:0.4714, K3s:0.0002, K4s:0.0034, K5s:0.0417, K6s:0.0824, K7s:0.0006, K8s:0.0003, K9s:0.0165, KTs:0.0943, KJs:0.0044, KQs:0.0026, KK:0.0001, A2s:0.1046, A3s:0.081, A4s:0.0016, A5s:0.0179, A6s:0.0251, A7s:0.0008, A8s:0.0808, A9s:0.0497, ATs:0.0557, AJs:0.1251, AQs:0.0986, AA:0.6138"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0075, A2o:0.0073, 33:0.1008, A3o:0.3755, 43s:0.0015, 44:0.0228, A4o:0.5669, 53s:0.0003, 54s:0.0022, 55:0.0129, A5o:0.6164, 63s:0.0003, 64s:0.0066, 65s:0.0139, 66:0.0103, A6o:0.0318, 75s:0.0067, 76s:0.0676, 77:0.1567, A7o:0.2246, 85s:0.0001, 86s:0.0136, 87s:0.0048, 88:0.6378, A8o:0.063, 97s:0.0052, 98s:0.0293, 99:0.7334, A9o:0.0169, T8s:0.0002, T9s:0.0003, TT:0.436, ATo:0.401, J9s:0.0022, JTs:0.0043, JJ:0.0437, QJo:0.0003, AJo:0.5337, Q2s:0.0001, Q5s:0.0001, Q6s:0.0001, Q7s:0.0025, Q8s:0.0008, Q9s:0.0067, QTs:0.0264, QJs:0.0467, QQ:0.9535, KQo:0.1075, AQo:0.5286, K2s:0.0002, K3s:0.0013, K4s:0.0874, K5s:0.0819, K6s:0.0057, K7s:0.2135, K8s:0.1258, K9s:0.2346, KTs:0.4076, KJs:0.1953, KQs:0.99, KK, AKo, A2s:0.8935, A3s:0.9176, A4s:0.998, A5s:0.9819, A6s:0.9695, A7s:0.9989, A8s:0.9155, A9s:0.9344, ATs:0.9425, AJs:0.8749, AQs:0.9014, AKs, AA:0.3862"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.066, 33:0.0056, A3o:0.0063, A4o:0.1127, 53s:0.0002, 54s:0.0002, A5o:0.1085, 62s:0.0001, 64s:0.0006, 65s:0.0002, 66:0.0032, 74s:0.0003, 77:0.003, K7o:0.0001, 84s:0.0006, 87s:0.0011, 88:0.0028, A8o:0.0001, 93s:0.0001, 96s:0.0003, 97s:0.0029, 99:0.0018, A9o:0.0013, ATo:0.067, J7s:0.0001, JJ:0.0021, AJo:0.0264, Q3s:0.0001, Q8s:0.0001, Q9s:0.0017, QTs:0.0009, QJs:0.001, QQ:0.4291, AQo:0.0476, K3s:0.0001, K9s:0.011, KTs:0.0002, KJs:0.0026, KQs:0.0456, KK, AKo, A2s:0.4037, A3s:0.548, A4s:0.6294, A5s:0.4821, A6s:0.534, A7s:0.2805, A8s:0.032, A9s:0.1478, ATs:0.5866, AJs:0.2838, AQs:0.3013, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KJs:0.0001, KK:0.629, AKo:0.0005, A4s:0.0001, A5s:0.0001, ATs:0.0001, AJs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.011, 66:0.0127, 77:0.2544, 88:0.3098, 99:0.1652, TT:0.5718, JJ:0.5862, QQ:0.7824, AQo:0.0026, KK, AKo, A8s:0.0001, ATs:0.0004, AJs:0.0039, AQs:0.0211, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|BB:4BET@19|HJ:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "86s:0.0003, 88:0.0001, 96s:0.0001, 97s:0.0001, 98s:0.0001, TT:0.0001, ATo:0.0001, JJ:0.0001, Q5s:0.0001, QQ:0.0001, K3s:0.0001, K6s:0.0001, KTs:0.0001, KK:0.0003, A3s:0.0001, A5s:0.0001, ATs:0.0001, AJs:0.0005, AQs:0.0004, AKs:0.0003, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:3BET@6|HJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.7989, JJ, QQ, AQo, KK, AKo, AJs:0.9908, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9921, 32s:0.0064, 33:0.9912, 42s:0.1282, 43s:0.4803, 44:0.9839, K4o:0.0018, 53s:0.5047, 54s:0.3673, 55:0.9906, 65o:0.354, Q5o:0.0003, 62s:0.001, 63s:0.5798, 64s:0.6986, 65s:0.9357, 66:0.9772, 72s:0.0063, 74s:0.3004, 75s:0.8365, 76s:0.5288, 77:0.9756, K7o:0.0375, 83s:0.0197, 85s:0.0082, 86s:0.7884, 87s:0.0021, 88:0.9689, 98o:0.0183, T8o:0.0191, Q8o:0.0575, 96s:0.3938, 97s:0.4857, 98s:0.7021, 99:0.9611, T2s:0.0005, T4s:0.0003, T5s:0.2703, T6s:0.3627, T7s:0.3416, T8s:0.2813, T9s:0.2238, TT:0.9841, QTo:0.7066, KTo:0.2911, ATo:0.0002, J2s:0.0021, J5s:0.0183, J6s:0.0003, J7s:0.0001, J8s:0.426, J9s:0.1642, JTs:0.0049, JJ:0.0009, QJo:0.0103, KJo:0.0008, AJo:0.2136, Q2s:0.7972, Q3s:0.0693, Q4s:0.5261, Q5s:0.3438, Q6s:0.617, Q7s:0.5218, Q8s:0.4332, Q9s:0.6682, QTs:0.3623, QJs:0.0328, KQo:0.0429, AQo:0.1427, K2s:0.2337, K3s:0.1348, K4s:0.3331, K5s:0.5481, K6s:0.569, K7s:0.51, K8s:0.4403, K9s:0.3027, KTs:0.753, KJs:0.0182, KQs:0.3571, AKo:0.0077, A2s:0.1454, A3s:0.0753, A4s:0.3733, A5s:0.2793, A6s:0.153, A7s:0.0551, A8s:0.1377, A9s:0.3824, ATs:0.073, AJs:0.7508, AQs:0.0107, AKs:0.0004, AA:0.0002"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0002, J2o:0.0108, Q2o:0.0154, A2o:0.0956, K3o:0.0001, J4o:0.0317, Q4o:0.0026, A4o:0.0559, 52s:0.0002, 53s:0.1246, 54s:0.0001, 95o:0.0016, Q5o:0.0001, A5o:0.0316, 64s:0.0169, K6o:0.0015, A6o:0.0287, 73s:0.0385, 74s:0.0074, 75s:0.0475, 76s:0.0001, J7o:0.007, A7o:0.0002, 82s:0.0004, 84s:0.0021, 85s:0.0017, 88:0.0005, Q8o:0.0222, A8o:0.0953, 92s:0.0166, 97s:0.0001, 98s:0.0009, 99:0.0006, J9o:0.0006, T3s:0.0006, T4s:0.001, T5s:0.0085, T9s:0.0007, TT:0.0007, QTo:0.0048, KTo:0.0001, J2s:0.0405, J3s:0.0043, J4s:0.0027, J5s:0.106, J6s:0.0144, J7s:0.0682, JTs:0.0624, JJ:0.0728, QJo:0.0124, KJo:0.0015, AJo:0.3132, Q2s:0.0007, Q4s:0.0005, Q5s:0.067, Q6s:0.008, Q7s:0.0076, Q8s:0.0051, Q9s:0.0046, QTs:0.0009, QJs:0.0001, QQ:0.0073, AQo:0.087, K2s:0.0001, K3s:0.0084, K4s:0.0011, K7s:0.0027, K8s:0.003, K9s:0.001, KJs:0.0002, KQs:0.0001, KK:0.0159, AKo:0.0452, A2s:0.1213, A3s:0.1176, A4s:0.0024, A5s:0.0093, A6s:0.077, A7s:0.0245, A8s:0.1083, A9s:0.0108, ATs:0.1241, AJs:0.0002, AQs:0.0367, AKs:0.4479, AA:0.9995"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, K2o:0.0008, A2o:0.0439, 32s:0.0008, 33:0.0025, J3o:0.0015, K3o:0.0401, 44:0.0066, Q4o:0.0127, K4o:0.1965, A4o:0.2602, 52s:0.0021, 53s:0.0036, 54s:0.0227, K5o:0.0005, A5o:0.0021, 64s:0.0001, 65s:0.0185, K6o:0.0729, 75s:0.0005, 76s:0.0359, 77:0.0068, J7o:0.0003, A7o:0.0039, 85s:0.0022, 87s:0.0004, J8o:0.0004, Q8o:0.0014, K8o:0.0427, 93s:0.0002, 94s:0.0001, 97s:0.0001, 98s:0.0013, K9o:0.0013, T2s:0.0001, T7s:0.0169, T8s:0.0001, T9s:0.0004, TT:0.0076, KTo:0.0179, J2s:0.0002, J3s:0.1316, J4s:0.0001, J5s:0.0938, J6s:0.0025, J7s:0.398, J9s:0.182, JTs:0.1452, JJ:0.9261, QJo:0.9479, KJo:0.9637, AJo:0.4358, Q2s:0.1243, Q3s:0.4193, Q4s:0.0565, Q5s:0.202, Q6s:0.1873, Q7s:0.4253, Q8s:0.3824, Q9s:0.0912, QTs:0.3755, QJs:0.9308, QQ:0.9927, KQo:0.9553, AQo:0.7692, K2s:0.5212, K3s:0.7899, K4s:0.6558, K5s:0.3673, K6s:0.1104, K7s:0.3467, K8s:0.4341, K9s:0.5491, KTs:0.1618, KJs:0.9754, KQs:0.5939, KK:0.9841, AKo:0.9471, A2s:0.3734, A3s:0.5888, A4s:0.4721, A5s:0.6592, A6s:0.0009, A7s:0.6062, A8s:0.4117, A9s:0.2471, ATs:0.6817, AJs:0.2489, AQs:0.9524, AKs:0.5514, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 88:0.0003, 99:0.0001, TT:0.0001, JJ:0.0193, QQ, AQo:0.035, KQs:0.0001, KK, AKo:0.9996, ATs:0.0006, AJs:0.0006, AQs:0.461, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0037, JJ:0.8686, QQ, AQo:0.3401, KK, AKo, AJs:0.0001, AQs:0.9869, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@19|HJ:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0021, K2o:0.0001, A2o:0.0001, K3o:0.0001, A3o:0.0001, 42s:0.0001, 43s:0.0037, 44:0.0001, 55:0.0001, 64s:0.0016, 65s:0.0002, 66:0.0009, 72s:0.0001, 73s:0.0002, 83s:0.0002, 85s:0.0004, 87s:0.0004, 88:0.0001, 93s:0.0001, 94s:0.0001, 97s:0.0002, 99:0.0005, K9o:0.0001, A9o:0.0001, T4s:0.0001, T5s:0.0007, T8s:0.0006, T9s:0.0001, TT:0.0017, QTo:0.0001, ATo:0.0009, J4s:0.0007, J5s:0.001, J8s:0.0002, J9s:0.0054, JJ:0.0167, AJo:0.0086, Q2s:0.0001, Q6s:0.002, Q7s:0.0003, Q9s:0.0001, QTs:0.0035, QJs:0.0021, QQ:0.0709, KQo:0.0001, AQo:0.0345, K2s:0.0001, K3s:0.0147, K5s:0.0008, K7s:0.0106, K8s:0.0001, K9s:0.0009, KTs:0.0005, KJs:0.0074, KQs:0.0163, KK:0.0213, AKo:0.0005, A2s:0.0001, A3s:0.0002, A4s:0.0004, A5s:0.0873, A7s:0.0014, A8s:0.0172, A9s:0.0333, ATs:0.2367, AJs:0.0071, AQs:0.2972, AA:0.1348"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4628, 52o:0.0001, 92o:0.0001, Q2o:0.0002, K2o:0.0001, A2o:0.5939, 32s:0.0031, 33:0.0318, 53o:0.0014, Q3o:0.0004, A3o:0.7827, 42s:0.0065, 43s:0.0024, 44:0.4328, 54o:0.004, 64o:0.0004, J4o:0.001, Q4o:0.0009, K4o:0.0021, A4o:0.9462, 52s:0.0043, 54s:0.3071, 55:0.6524, 65o:0.0025, 95o:0.0009, A5o:0.2128, 62s:0.0039, 63s:0.0024, 64s:0.1149, 65s:0.0056, 66:0.897, 96o:0.0081, Q6o:0.0017, K6o:0.0004, A6o:0.1006, 73s:0.0257, 75s:0.0065, 76s:0.0227, 77:0.4369, T7o:0.001, A7o:0.13, 82s:0.0703, 83s:0.0831, 84s:0.1406, 85s:0.0645, 87s:0.1384, 88:0.602, T8o:0.0022, K8o:0.0079, A8o:0.519, 92s:0.0006, 93s:0.0001, 94s:0.1001, 95s:0.0667, 97s:0.3969, 99:0.1868, T9o:0.0009, Q9o:0.0001, K9o:0.0003, A9o:0.2146, T2s:0.0019, T3s:0.0362, T4s:0.0222, T5s:0.0001, T6s:0.0004, T7s:0.1888, T8s:0.0754, T9s:0.2998, TT:0.6339, JTo:0.0004, QTo:0.0021, KTo:0.0003, ATo:0.1645, J2s:0.0013, J3s:0.0001, J4s:0.0034, J5s:0.005, J6s:0.0006, J7s:0.0011, J8s:0.0376, J9s:0.0842, JTs:0.0262, JJ:0.0122, KJo:0.0001, AJo:0.0348, Q2s:0.004, Q3s:0.1275, Q4s:0.0005, Q5s:0.0005, Q6s:0.1457, Q7s:0.0031, Q8s:0.0002, Q9s:0.0001, QTs:0.0701, QJs:0.0002, QQ:0.9237, KQo:0.0041, AQo:0.8559, K2s:0.0006, K3s:0.0002, K4s:0.0055, K5s:0.0257, K6s:0.004, K7s:0.0087, K8s:0.3064, K9s:0.1066, KTs:0.1085, KJs:0.0027, KQs:0.0943, KK:0.9777, AKo:0.9983, A2s:0.4575, A3s:0.5366, A4s:0.8349, A5s:0.8882, A6s:0.5205, A7s:0.622, A8s:0.8186, A9s:0.9442, ATs:0.652, AJs:0.9266, AQs:0.6831, AKs:0.9994, AA:0.8652"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0428, 55:0.0622, 75o:0.0001, A5o:0.0001, 66:0.0001, 96o:0.0001, A6o:0.0001, 77:0.1063, 87o:0.0001, A7o:0.0001, 88:0.0809, K8o:0.0001, 97s:0.0001, 99:0.0007, A9o:0.0004, T5s:0.0004, J4s:0.0001, J7s:0.0001, JTs:0.0001, JJ:0.1138, AJo:0.0016, Q2s:0.0001, Q5s:0.0001, QJs:0.001, QQ:0.1196, AQo:0.0002, K2s:0.0002, K3s:0.0001, K4s:0.0001, K7s:0.0001, K8s:0.0001, K9s:0.0004, KJs:0.0006, KQs:0.0007, A2s:0.0001, A4s:0.0001, A5s:0.06, A6s:0.0002, A7s:0.005, A8s:0.0012, A9s:0.151, ATs:0.0001, AJs:0.0734, AQs:0.0007, AKs:0.0001, AA:0.0435"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.005, A2o:0.0094, 33:0.0346, K3o:0.0052, A3o:0.0379, 44:0.2072, K4o:0.0035, A4o:0.0248, 52s:0.0001, 53s:0.0007, 54s:0.0308, 55:0.1417, K5o:0.0001, A5o:0.1189, 62s:0.006, 64s:0.0075, 66:0.09, Q6o:0.0001, A6o:0.0198, 74s:0.0043, 75s:0.0301, 76s:0.0014, 77:0.225, K7o:0.0003, A7o:0.0424, 86s:0.0001, 88:0.2452, K8o:0.004, A8o:0.0184, 97s:0.0003, 98s:0.003, 99:0.0904, K9o:0.0003, A9o:0.0104, T5s:0.0005, T7s:0.0007, T9s:0.0012, TT:0.2883, JTo:0.0002, KTo:0.0004, ATo:0.0149, J7s:0.0013, J8s:0.0018, J9s:0.0002, JTs:0.0026, JJ:0.2446, AJo:0.0385, Q2s:0.0042, Q3s:0.0084, Q6s:0.0101, Q8s:0.0001, Q9s:0.008, QTs:0.0074, QJs:0.0049, QQ:0.8804, KQo:0.0058, AQo:0.9687, K2s:0.0062, K3s:0.0055, K5s:0.045, K6s:0.0055, K7s:0.0001, K8s:0.0029, K9s:0.0037, KTs:0.0092, KJs:0.008, KQs:0.0544, KK, AKo, A2s:0.5007, A3s:0.2664, A4s:0.2889, A5s:0.4753, A6s:0.1928, A7s:0.2507, A8s:0.2104, A9s:0.5709, ATs:0.4376, AJs:0.5088, AQs:0.9892, AKs:0.9995, AA:0.9565"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|HJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, JJ:0.0003, QQ:0.0033, KK:0.2393, AKo:0.0012, A6s:0.0001, A9s:0.0001, ATs:0.0001, AJs:0.0001, AQs:0.0007, AKs:0.0048, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|HJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0001, 65s:0.0001, 77:0.0026, 92s:0.0001, 99:0.0002, A9o:0.0001, TT:0.7525, JJ:0.855, AJo:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.9993, AQo:0.338, K6s:0.0001, KJs:0.0001, KQs:0.0001, KK, AKo, A4s:0.0013, A9s:0.0002, ATs:0.122, AJs:0.0077, AQs:0.8805, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|HJ:CALL@4",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0743, 32o:0.0001, J2o:0.0017, K2o:0.0001, A2o:0.0004, 32s:0.001, 33:0.0003, 43o:0.0001, 53o:0.0002, 83o:0.0001, 93o:0.0001, J3o:0.0001, Q3o:0.0005, A3o:0.0008, 42s:0.0025, 64o:0.0001, 74o:0.0002, 94o:0.0001, Q4o:0.0002, K4o:0.0002, A4o:0.0276, 52s:0.0001, 53s:0.0002, 54s:0.0072, 55:0.0033, 95o:0.0001, J5o:0.0003, Q5o:0.0007, K5o:0.0026, A5o:0.0001, 62s:0.0017, 63s:0.0009, 64s:0.0001, 66:0.0001, 76o:0.0006, 96o:0.0004, T6o:0.0013, J6o:0.0001, Q6o:0.0001, K6o:0.0002, A6o:0.0001, 72s:0.0001, 74s:0.0027, 75s:0.0097, 76s:0.0011, 77:0.0004, 87o:0.0001, K7o:0.0001, A7o:0.0008, 82s:0.0001, 84s:0.0007, 85s:0.0002, 86s:0.0003, 88:0.001, 98o:0.0002, Q8o:0.0001, K8o:0.0002, 93s:0.0001, 94s:0.0026, 96s:0.0067, 97s:0.0004, 98s:0.0002, 99:0.0002, K9o:0.0016, A9o:0.0001, T2s:0.0002, T3s:0.001, T7s:0.0027, T8s:0.0005, T9s:0.0001, TT:0.0018, JTo:0.0001, QTo:0.0002, ATo:0.0007, J2s:0.0031, J3s:0.001, J4s:0.0004, J5s:0.0001, J6s:0.0014, J7s:0.0006, J8s:0.0239, J9s:0.0002, JJ:0.0016, KJo:0.0002, AJo:0.0001, Q2s:0.0048, Q3s:0.0008, Q4s:0.0073, Q5s:0.0002, Q6s:0.0001, Q7s:0.0085, Q8s:0.0016, QTs:0.0032, QJs:0.0027, QQ:0.0001, AQo:0.0036, K2s:0.0006, K3s:0.0272, K4s:0.0001, K6s:0.0001, K7s:0.005, K8s:0.0003, K9s:0.0001, KTs:0.0001, KJs:0.0003, KQs:0.0024, KK:0.0058, AKo:0.0037, A2s:0.1284, A3s:0.0102, A4s:0.0019, A5s:0.0081, A6s:0.0022, A7s:0.0034, A8s:0.0104, A9s:0.0052, ATs:0.0375, AJs:0.0601, AQs:0.2837, AKs:0.293, AA:0.0058"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 42o:0.0001, 52o:0.0001, 62o:0.0002, J2o:0.0001, A2o:0.0007, 32s:0.0007, 33:0.0019, 83o:0.0001, 93o:0.0002, T3o:0.0001, Q3o:0.0006, 42s:0.0065, 43s:0.0004, 44:0.0003, 54o:0.0004, 64o:0.0001, 74o:0.0001, 84o:0.0001, 94o:0.0001, J4o:0.0001, Q4o:0.0001, A4o:0.0092, 52s:0.0001, 53s:0.0002, 54s:0.0031, 55:0.0036, 75o:0.0002, 85o:0.0001, 95o:0.0006, J5o:0.0002, Q5o:0.0004, K5o:0.0001, 63s:0.0019, 65s:0.0002, 86o:0.0001, T6o:0.0007, J6o:0.0004, K6o:0.0002, A6o:0.0001, 72s:0.0032, 74s:0.0001, 75s:0.0001, 76s:0.002, 77:0.0003, 87o:0.0002, T7o:0.0001, K7o:0.0005, A7o:0.0009, 82s:0.0004, 84s:0.0003, 85s:0.0001, 86s:0.0002, 88:0.0012, 98o:0.0003, T8o:0.0001, J8o:0.0002, Q8o:0.0001, K8o:0.0001, A8o:0.0001, 92s:0.0002, 93s:0.0002, 94s:0.0001, 95s:0.0003, 97s:0.0023, 98s:0.0006, 99:0.0009, T9o:0.0005, J9o:0.0001, K9o:0.0001, A9o:0.0002, T2s:0.0003, T3s:0.0002, T5s:0.0008, T6s:0.0002, T9s:0.0004, TT:0.0125, QTo:0.0031, KTo:0.0008, ATo:0.0004, J3s:0.0005, J4s:0.0003, J6s:0.0032, J7s:0.0002, J9s:0.0008, JTs:0.0008, JJ:0.0121, QJo:0.0003, KJo:0.0001, AJo:0.0007, Q2s:0.0002, Q3s:0.0003, Q4s:0.0013, Q5s:0.0046, Q6s:0.0003, Q7s:0.0013, Q8s:0.0004, QTs:0.0034, QJs:0.0002, QQ:0.0368, AQo:0.0061, K2s:0.0002, K3s:0.0002, K4s:0.0009, K5s:0.0001, K6s:0.0018, K7s:0.003, K8s:0.0002, KTs:0.0023, KJs:0.0214, KQs:0.0119, KK:0.9844, AKo:0.0063, A2s:0.0008, A3s:0.001, A4s:0.001, A5s:0.0017, A6s:0.0002, A7s:0.0003, A8s:0.0008, A9s:0.0003, ATs:0.0006, AJs:0.0095, AQs:0.0116, AKs:0.4579, AA:0.9942"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52o:0.0001, 33:0.0001, 83o:0.0001, 44:0.0008, A4o:0.0001, 54s:0.0002, 55:0.0008, 75o:0.0001, J5o:0.0001, Q5o:0.0001, K5o:0.0007, A5o:0.0002, 64s:0.0004, 66:0.0001, 73s:0.0001, 75s:0.0001, 76s:0.0019, K7o:0.0002, 88:0.0003, 98o:0.0002, 93s:0.0001, 95s:0.0001, 97s:0.0004, 98s:0.006, 99:0.3647, T3s:0.0001, T5s:0.0001, T7s:0.0005, T8s:0.0003, TT:0.4755, ATo:0.0002, J7s:0.0005, J8s:0.0006, J9s:0.0001, JTs:0.0003, JJ:0.9993, AJo:0.0153, Q4s:0.0002, Q5s:0.0002, Q6s:0.0001, Q7s:0.0004, Q9s:0.0003, QTs:0.0009, QJs:0.0054, QQ, KQo:0.0011, AQo:0.9622, K2s:0.0014, K3s:0.0003, K5s:0.0005, K6s:0.0003, K7s:0.0005, K8s:0.0024, K9s:0.0001, KTs:0.0005, KJs:0.0004, KQs:0.0031, KK, AKo:0.9852, A2s:0.001, A3s:0.0002, A4s:0.0013, A5s:0.0002, A6s:0.0002, A9s:0.0014, ATs:0.0016, AJs:0.9928, AQs, AKs:0.9989, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "X",
      "open 3bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "X",
        "min": 0.0001,
        "range": "22:0.8877, 32o:0.3158, 42o:0.2026, 52o:0.6289, 62o:0.674, 72o:0.1995, 82o:0.1516, 92o:0.3895, T2o:0.2168, J2o:0.6889, Q2o:0.7804, K2o:0.8751, A2o:0.5527, 32s:0.4304, 33:0.8895, 43o:0.802, 53o:0.3106, 63o:0.5088, 73o:0.376, 83o:0.5453, 93o:0.6904, T3o:0.6056, J3o:0.6442, Q3o:0.8309, K3o:0.5758, A3o:0.843, 42s:0.311, 43s:0.5749, 44:0.901, 54o:0.9599, 64o:0.8602, 74o:0.9174, 84o:0.756, 94o:0.7039, T4o:0.0146, J4o:0.8749, Q4o:0.6761, K4o:0.7842, A4o:0.8093, 52s:0.939, 53s:0.5705, 54s:0.8203, 55:0.9779, 65o:0.385, 75o:0.8293, 85o:0.6939, 95o:0.8936, T5o:0.7484, J5o:0.8775, Q5o:0.8843, K5o:0.1545, A5o:0.968, 62s:0.4597, 63s:0.5103, 64s:0.686, 65s:0.9357, 66:0.9414, 76o:0.8239, 86o:0.8847, 96o:0.8099, T6o:0.6402, J6o:0.9139, Q6o:0.5854, K6o:0.2981, A6o:0.8432, 72s:0.0072, 73s:0.8433, 74s:0.7195, 75s:0.7608, 76s:0.3212, 77:0.9994, 87o:0.9253, 97o:0.8891, T7o:0.9079, J7o:0.8788, Q7o:0.9367, K7o:0.9781, A7o:0.8254, 82s:0.8785, 83s:0.9448, 84s:0.8811, 85s:0.8604, 86s:0.6856, 87s:0.8466, 88:0.9826, 98o:0.9107, T8o:0.5313, J8o:0.8029, Q8o:0.9726, K8o:0.8176, A8o:0.9574, 92s:0.8665, 93s:0.4946, 94s:0.6233, 95s:0.2724, 96s:0.6863, 97s:0.932, 98s:0.8537, 99:0.9898, T9o:0.9211, J9o:0.9423, Q9o:0.962, K9o:0.7363, A9o:0.8897, T2s:0.9793, T3s:0.5943, T4s:0.9863, T5s:0.936, T6s:0.7321, T7s:0.967, T8s:0.9692, T9s:0.9802, TT:0.8425, JTo:0.7082, QTo:0.9082, KTo:0.9623, ATo:0.8768, J2s:0.2918, J3s:0.9886, J4s:0.385, J5s:0.6171, J6s:0.5108, J7s:0.8973, J8s:0.8792, J9s:0.7471, JTs:0.9266, JJ:0.7396, QJo:0.9792, KJo:0.3992, AJo:0.1017, Q2s:0.7411, Q3s:0.745, Q4s:0.8983, Q5s:0.9783, Q6s:0.984, Q7s:0.9324, Q8s:0.9769, Q9s:0.9424, QTs:0.9379, QJs:0.8025, QQ:0.7297, KQo:0.9792, AQo:0.3332, K2s:0.5212, K3s:0.1495, K4s:0.3804, K5s:0.6367, K6s:0.5906, K7s:0.8071, K8s:0.3216, K9s:0.9572, KTs:0.8054, KJs:0.9736, KQs:0.9474, KK:0.0002, A2s:0.5962, A3s:0.7601, A4s:0.465, A5s:0.767, A6s:0.9067, A7s:0.9628, A8s:0.8218, A9s:0.8835, ATs:0.3556, AJs:0.3844, AQs:0.2753, AKs:0.0017"
      },
      {
        "action": "open 3bb",
        "min": 0.0001,
        "range": "22:0.0183, 32o:0.1642, 42o:0.0914, 52o:0.3246, 62o:0.1278, 72o:0.3409, 82o:0.1708, 92o:0.1481, T2o:0.5666, J2o:0.1916, Q2o:0.1388, K2o:0.0432, A2o:0.1292, 32s:0.1751, 33:0.0033, 43o:0.0834, 53o:0.4339, 63o:0.1172, 73o:0.0517, 83o:0.0153, 93o:0.2936, T3o:0.0877, J3o:0.1078, Q3o:0.1256, K3o:0.0356, A3o:0.0526, 42s:0.5202, 43s:0.0256, 44:0.0094, 54o:0.002, 64o:0.0628, 74o:0.0143, 84o:0.0219, 94o:0.2697, T4o:0.9495, J4o:0.0446, Q4o:0.3012, K4o:0.1065, A4o:0.0846, 52s:0.0304, 53s:0.0557, 54s:0.0514, 55:0.001, 65o:0.2835, 75o:0.0809, 85o:0.2772, 95o:0.0616, T5o:0.225, J5o:0.092, Q5o:0.0846, K5o:0.6893, A5o:0.0185, 62s:0.1943, 63s:0.2513, 64s:0.1693, 65s:0.0241, 66:0.0187, 76o:0.1514, 86o:0.0609, 96o:0.0993, T6o:0.2875, J6o:0.0492, Q6o:0.3844, K6o:0.3129, A6o:0.0598, 72s:0.5264, 73s:0.014, 74s:0.1622, 75s:0.0785, 76s:0.5367, 77:0.0003, 87o:0.0561, 97o:0.0564, T7o:0.0681, J7o:0.1154, Q7o:0.0537, K7o:0.0042, A7o:0.0613, 82s:0.1061, 83s:0.0188, 84s:0.0185, 85s:0.0224, 86s:0.185, 87s:0.1089, 88:0.0061, 98o:0.0521, T8o:0.4531, J8o:0.101, Q8o:0.0179, K8o:0.0777, A8o:0.0349, 92s:0.1134, 93s:0.4689, 94s:0.1822, 95s:0.5287, 96s:0.1796, 97s:0.025, 98s:0.0379, 99:0.0035, T9o:0.0644, J9o:0.0542, Q9o:0.0134, K9o:0.0467, A9o:0.0928, T2s:0.011, T3s:0.3942, T4s:0.0005, T5s:0.0021, T6s:0.2328, T7s:0.0002, T8s:0.0215, T9s:0.0003, TT:0.0712, JTo:0.1664, QTo:0.0669, KTo:0.018, ATo:0.1137, J2s:0.4638, J3s:0.0002, J4s:0.4289, J5s:0.3471, J6s:0.1173, J7s:0.0018, J8s:0.0125, J9s:0.0132, JTs:0.0017, JJ:0.0841, QJo:0.0157, KJo:0.4935, AJo:0.2511, Q2s:0.1274, Q3s:0.1214, Q4s:0.0521, Q5s:0.0107, Q6s:0.0059, Q7s:0.0263, Q8s:0.0002, Q9s:0.029, QTs:0.0389, QJs:0.0059, QQ:0.2679, KQo:0.016, AQo:0.5943, K2s:0.2255, K3s:0.5277, K4s:0.0421, K5s:0.015, K6s:0.2241, K7s:0.0356, K8s:0.3382, K9s:0.0208, KTs:0.0007, KJs:0.0182, KQs:0.0207, KK:0.9998, AKo:0.9408, A2s:0.0329, A3s:0.0566, A4s:0.0413, A5s:0.0725, A6s:0.0415, A7s:0.003, A8s:0.1085, A9s:0.0189, ATs:0.6437, AJs:0.6057, AQs:0.7195, AKs:0.9814, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0937, 42o:0.0182, 52o:0.0072, 62o:0.0006, T2o:0.0091, J2o:0.0328, Q2o:0.0088, K2o:0.0763, A2o:0.3167, 32s:0.148, 33:0.0852, 43o:0.0016, 53o:0.0071, 63o:0.0017, 73o:0.0009, 83o:0.002, T3o:0.0064, J3o:0.0048, Q3o:0.0035, K3o:0.3871, A3o:0.0983, 42s:0.0019, 43s:0.3373, 44:0.0801, 54o:0.015, 64o:0.0088, 74o:0.0063, 94o:0.0008, T4o:0.0093, J4o:0.0688, Q4o:0.0163, K4o:0.1048, A4o:0.106, 52s:0.0132, 53s:0.2384, 54s:0.065, 55:0.0057, 65o:0.0206, 75o:0.0002, 85o:0.0004, J5o:0.0191, Q5o:0.0105, K5o:0.1522, A5o:0.0131, 62s:0.1064, 63s:0.0122, 64s:0.0842, 65s:0.0076, 66:0.0209, 76o:0.0097, 86o:0.0188, 96o:0.0002, T6o:0.0291, J6o:0.0304, Q6o:0.0123, K6o:0.3865, A6o:0.0966, 72s:0.007, 73s:0.1374, 74s:0.029, 75s:0.1539, 76s:0.113, 77:0.0001, 87o:0.0128, 97o:0.0209, T7o:0.0068, J7o:0.0053, Q7o:0.0002, K7o:0.0167, A7o:0.1131, 82s:0.0001, 83s:0.0335, 84s:0.0536, 85s:0.0843, 86s:0.0011, 87s:0.0053, 88:0.0113, 98o:0.0008, T8o:0.003, J8o:0.0933, Q8o:0.0071, K8o:0.1009, A8o:0.0069, 92s:0.0005, 93s:0.0105, 94s:0.0101, 95s:0.036, 96s:0.1236, 97s:0.0184, 98s:0.0418, 99:0.0034, T9o:0.0121, J9o:0.002, Q9o:0.0127, K9o:0.2168, A9o:0.017, T2s:0.0001, T3s:0.0007, T4s:0.0127, T5s:0.0601, T6s:0.0026, T7s:0.0324, T8s:0.0085, T9s:0.0168, TT:0.086, JTo:0.1248, QTo:0.0246, KTo:0.0158, ATo:0.0095, J2s:0.2378, J3s:0.0109, J4s:0.1276, J5s:0.0129, J6s:0.2196, J7s:0.1001, J8s:0.0919, J9s:0.1457, JTs:0.0711, JJ:0.1763, QJo:0.0044, KJo:0.1051, AJo:0.6472, Q2s:0.0803, Q3s:0.1274, Q4s:0.0444, Q5s:0.0074, Q6s:0.0044, Q7s:0.0411, Q8s:0.0147, Q9s:0.0257, QTs:0.0208, QJs:0.1916, QQ:0.0024, KQo:0.0047, AQo:0.0726, K2s:0.2487, K3s:0.302, K4s:0.5717, K5s:0.3423, K6s:0.1833, K7s:0.1507, K8s:0.3238, K9s:0.022, KTs:0.1938, KJs:0.0081, KQs:0.0318, AKo:0.0592, A2s:0.356, A3s:0.1833, A4s:0.4936, A5s:0.1604, A6s:0.0468, A7s:0.0321, A8s:0.0697, A9s:0.0973, ATs:0.0007, AJs:0.0098, AQs:0.0052, AKs:0.0169"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0094, 77:0.1172, 88:0.4433, 99, TT, ATo:0.0001, JJ, AJo, QQ, AQo, KQs:0.0279, KK, AKo, A6s:0.0001, A8s:0.0001, A9s:0.004, ATs:0.4514, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "22:0.9835, A2o:0.7462, 32s:0.3354, 33:0.9836, A3o:0.5189, 42s:0.714, 43s:0.9984, 44:0.9834, 54o:0.8426, 64o:0.0114, A4o:0.9615, 52s:0.5768, 53s:0.9923, 54s:0.9959, 55:0.9852, 65o:0.9862, 75o:0.5319, 85o:0.033, Q5o:0.0002, K5o:0.0061, A5o:0.9789, 62s:0.028, 63s:0.9906, 64s:0.9982, 65s:0.9956, 66:0.9911, 76o:0.8915, 86o:0.7631, 96o:0.0031, T6o:0.0001, Q6o:0.0005, K6o:0.0104, A6o:0.7992, 73s:0.72, 74s:0.9969, 75s:0.9955, 76s:0.9985, 77:0.9958, 87o:0.9949, 97o:0.4422, T7o:0.024, J7o:0.0031, Q7o:0.1835, K7o:0.0074, A7o:0.5657, 82s:0.0315, 83s:0.0962, 84s:0.76, 85s:0.9952, 86s:0.9994, 87s:0.9969, 88:0.9852, 98o:0.8344, T8o:0.8798, J8o:0.6216, Q8o:0.6261, K8o:0.247, A8o:0.8145, 92s:0.0096, 93s:0.4488, 94s:0.0224, 95s:0.9988, 96s:0.9961, 97s, 98s:0.9986, 99:0.9929, T9o:0.9996, J9o:0.4673, Q9o:0.8452, K9o:0.0059, A9o:0.5381, T2s:0.0004, T3s:0.0025, T4s:0.1623, T5s:0.5871, T6s:0.9824, T7s:0.9987, T8s:0.9992, T9s:0.9991, TT:0.9867, JTo:0.9994, QTo:0.999, KTo:0.5718, ATo:0.9924, J2s:0.1243, J3s:0.3557, J4s:0.703, J5s:0.736, J6s:0.9938, J7s:0.9831, J8s:0.9986, J9s:0.999, JTs:0.9996, JJ:0.9991, QJo:0.9788, KJo:0.2631, AJo:0.9975, Q2s:0.8001, Q3s:0.8955, Q4s:0.9913, Q5s:0.9929, Q6s:0.9973, Q7s:0.9987, Q8s:0.9984, Q9s:0.9973, QTs:0.9974, QJs:0.9982, QQ:0.9935, KQo:0.5151, AQo:0.1819, K2s:0.5004, K3s:0.4218, K4s:0.5344, K5s:0.5335, K6s:0.8773, K7s:0.5896, K8s:0.8576, K9s:0.5742, KTs:0.9992, KJs:0.8728, KQs:0.9988, KK:0.1492, A2s:0.9961, A3s:0.9961, A4s:0.9961, A5s:0.999, A6s:0.9969, A7s:0.984, A8s:0.9938, A9s:0.9964, ATs:0.9981, AJs:0.9978, AQs:0.1649"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "32o:0.0001, 42o:0.0002, 52o:0.0002, 62o:0.0001, 72o:0.0002, 82o:0.0004, 92o:0.0002, T2o:0.0002, J2o:0.3389, Q2o:0.0063, K2o:0.8519, A2o:0.251, 32s:0.0001, 43o:0.0003, 53o:0.0005, 63o:0.0005, 73o:0.0431, 83o:0.0014, 93o:0.108, T3o:0.0005, J3o:0.4328, Q3o:0.1169, K3o:0.9913, A3o:0.478, 42s:0.0002, 43s:0.0002, 64o:0.0002, 74o:0.0003, 84o:0.001, 94o:0.0004, T4o:0.0004, J4o:0.1285, Q4o:0.0252, K4o:0.9753, A4o:0.0357, 65o:0.0004, 75o:0.0003, 85o:0.002, 95o:0.0006, T5o:0.0007, J5o:0.3779, Q5o:0.0195, K5o:0.9754, A5o:0.0171, 62s:0.0003, 65s:0.0003, 76o:0.0002, 86o:0.0015, 96o:0.0006, T6o:0.0005, J6o:0.1326, Q6o:0.0317, K6o:0.9218, A6o:0.1984, 72s:0.0002, 73s:0.0003, 74s:0.0004, 75s:0.0001, 87o:0.0004, 97o:0.0003, T7o:0.0001, J7o:0.4474, Q7o:0.1047, K7o:0.9908, A7o:0.4316, 82s:0.0003, 83s:0.001, 85s:0.0003, 87s:0.0001, 98o:0.0001, J8o:0.1524, Q8o:0.0445, K8o:0.7515, A8o:0.1831, 92s:0.0001, 93s:0.0973, 94s:0.0001, 95s:0.0001, 96s:0.0001, J9o:0.398, Q9o:0.0155, K9o:0.9908, A9o:0.4589, T2s:0.0001, T4s:0.0004, TT:0.0002, KTo:0.4274, ATo:0.0035, J2s:0.3258, J3s:0.3821, J4s:0.0346, J5s:0.0902, J6s:0.0004, J7s:0.0157, J8s:0.0001, J9s:0.0001, JJ:0.0005, QJo:0.0205, KJo:0.7361, AJo:0.0002, Q2s:0.0006, Q3s:0.0019, Q4s:0.0022, Q5s:0.0001, QQ:0.0004, KQo:0.4835, K2s:0.4948, K3s:0.5757, K4s:0.4576, K5s:0.4638, K6s:0.1206, K7s:0.4075, K8s:0.1393, K9s:0.4221, KJs:0.1255, KK:0.8508, AKo:0.9989, A3s:0.0005, A7s:0.0113, AKs:0.9986, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0165, 42o:0.0001, K2o:0.0003, A2o:0.0028, 32s:0.0001, 33:0.0164, Q3o:0.0002, K3o:0.0002, A3o:0.0031, 42s:0.0001, 43s:0.0008, 44:0.0166, 54o:0.0007, 74o:0.0001, K4o:0.0002, A4o:0.0028, 52s:0.0003, 53s:0.0025, 54s:0.0039, 55:0.0148, K5o:0.0002, A5o:0.0041, 62s:0.0004, 63s:0.002, 64s:0.0007, 65s:0.0019, 66:0.0089, 76o:0.0009, 86o:0.0001, K6o:0.0002, A6o:0.0023, 73s:0.0013, 74s:0.0022, 75s:0.0003, 76s:0.0014, 77:0.0042, 87o:0.0015, 97o:0.0006, T7o:0.0005, J7o:0.0001, K7o:0.0003, A7o:0.0027, 83s:0.0006, 84s:0.0009, 85s:0.0013, 86s:0.0005, 87s:0.0023, 88:0.0148, 98o:0.0014, T8o:0.0007, Q8o:0.0005, K8o:0.0003, A8o:0.0024, 92s:0.0002, 93s:0.0008, 94s:0.0019, 95s:0.0006, 96s:0.003, 97s:0.0001, 98s:0.0014, 99:0.007, T9o:0.0004, J9o:0.0004, Q9o:0.0002, K9o:0.0004, A9o:0.003, T2s:0.0006, T3s:0.0006, T4s:0.0007, T5s:0.0009, T6s:0.0005, T7s:0.0013, T8s:0.0004, T9s:0.0009, TT:0.0131, JTo:0.0006, QTo:0.001, KTo:0.0008, ATo:0.0041, J3s:0.0001, J4s:0.0002, J5s:0.0013, J6s:0.001, J7s:0.0013, J8s:0.0011, J9s:0.001, JTs:0.0004, JJ:0.0003, QJo:0.0007, KJo:0.0008, AJo:0.0022, Q2s:0.0009, Q3s:0.0019, Q4s:0.0014, Q5s:0.0029, Q6s:0.0014, Q7s:0.0013, Q8s:0.0016, Q9s:0.0027, QTs:0.0026, QJs:0.0018, QQ:0.0061, KQo:0.0015, AQo:0.8181, K2s:0.0011, K3s:0.0016, K4s:0.0063, K5s:0.0027, K6s:0.0021, K7s:0.0029, K8s:0.0031, K9s:0.0037, KTs:0.0008, KJs:0.0016, KQs:0.0012, AKo:0.0011, A2s:0.0039, A3s:0.0034, A4s:0.0039, A5s:0.001, A6s:0.0031, A7s:0.0047, A8s:0.0062, A9s:0.0036, ATs:0.0018, AJs:0.0022, AQs:0.8351, AKs:0.0014"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0211, Q2o:0.0001, K2o:0.0001, A2o:0.0023, 33:0.01, 63o:0.0002, 83o:0.0002, T3o:0.0001, K3o:0.0005, A3o:0.002, 42s:0.0001, 43s:0.0001, 44:0.027, 74o:0.0001, K4o:0.0028, A4o:0.0221, 52s:0.0027, 53s:0.0001, 54s:0.0001, 55:0.2982, 75o:0.0001, 95o:0.0001, J5o:0.0001, Q5o:0.0027, K5o:0.0012, A5o:0.0056, 62s:0.0001, 63s:0.0026, 65s:0.0021, 66:0.0212, 96o:0.0001, Q6o:0.0003, K6o:0.0062, A6o:0.0923, 73s:0.0001, 75s:0.0013, 76s:0.0001, 77:0.3047, 87o:0.0003, 97o:0.0002, T7o:0.0001, J7o:0.0024, Q7o:0.0007, K7o:0.0123, A7o:0.0017, 82s:0.0002, 83s:0.0027, 84s:0.0001, 86s:0.0005, 87s:0.0014, 88:0.3723, T8o:0.0019, J8o:0.0006, Q8o:0.0003, K8o:0.0062, A8o:0.0005, 92s:0.001, 94s:0.0001, 95s:0.0008, 96s:0.0018, 98s:0.0001, 99:0.751, Q9o:0.0019, K9o:0.0212, A9o:0.437, T2s:0.0002, T4s:0.0004, T5s:0.0054, T6s:0.0001, T7s:0.0005, T8s:0.0009, T9s:0.0059, TT:0.7826, JTo:0.0043, QTo:0.0055, KTo:0.0124, ATo:0.9748, J2s:0.0001, J4s:0.0019, J7s:0.0001, J8s:0.0251, J9s:0.0051, JJ:0.9964, QJo:0.0018, KJo:0.0692, AJo:0.6432, Q2s:0.0011, Q3s:0.0004, Q4s:0.0028, Q5s:0.0001, Q6s:0.0006, Q7s:0.0107, Q8s:0.0006, Q9s:0.0002, QTs:0.0202, QJs:0.0823, QQ:0.999, KQo:0.1212, AQo:0.9838, K2s:0.0066, K3s:0.0011, K4s:0.0269, K5s:0.0247, K6s:0.1069, K7s:0.0031, K8s:0.0156, K9s:0.1177, KTs:0.092, KJs:0.1158, KQs:0.3381, KK, AKo, A2s:0.0021, A3s:0.1138, A4s:0.1906, A5s:0.0231, A6s:0.002, A7s:0.0859, A8s:0.8958, A9s:0.6513, ATs:0.9993, AJs:0.648, AQs:0.9997, AKs:0.9895, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@7",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0001, K2o:0.0016, A2o:0.0001, 32s:0.0002, 33:0.0184, T3o:0.0002, J3o:0.0004, Q3o:0.0005, K3o:0.0001, 44:0.0022, 74o:0.0001, 94o:0.0002, T4o:0.0004, A4o:0.0019, 52s:0.0004, 53s:0.0001, 54s:0.0016, 55:0.0017, 65o:0.0007, K5o:0.0004, A5o:0.0001, 62s:0.0019, T6o:0.0012, J6o:0.0003, K6o:0.0002, A6o:0.0006, 73s:0.0073, 74s:0.0008, 75s:0.0005, 76s:0.0009, 77:0.394, 97o:0.0003, J7o:0.0002, K7o:0.0189, A7o:0.0066, 82s:0.002, 84s:0.0272, 85s:0.01, 87s:0.0001, 88:0.0038, J8o:0.0005, Q8o:0.0002, K8o:0.0109, A8o:0.0444, 93s:0.0005, 94s:0.0002, 95s:0.0002, 96s:0.0004, 97s:0.0007, 98s:0.0047, 99:0.0905, Q9o:0.0001, K9o:0.0322, A9o:0.0007, T2s:0.0091, T3s:0.0005, T4s:0.0004, T5s:0.0212, T6s:0.0002, T7s:0.0071, T8s:0.0077, T9s:0.0064, TT:0.0246, JTo:0.0001, QTo:0.0026, KTo:0.0011, ATo:0.1149, J2s:0.0019, J3s:0.0012, J4s:0.002, J5s:0.002, J6s:0.0002, J7s:0.0089, J8s:0.0298, J9s:0.003, JTs:0.0295, JJ:0.0178, QJo:0.0027, KJo:0.1192, AJo:0.0003, Q2s:0.001, Q3s:0.0044, Q4s:0.0028, Q5s:0.0176, Q6s:0.0132, Q7s:0.1427, Q8s:0.0005, Q9s:0.029, QTs:0.2593, QJs:0.0001, QQ:0.1204, KQo:0.1363, K2s:0.0003, K3s:0.0256, K4s:0.0047, K5s:0.1516, K6s:0.5125, K7s:0.1828, K8s:0.0037, K9s:0.2576, KTs:0.0346, KJs:0.0576, KQs:0.2497, KK:0.1808, AKo:0.0006, A2s:0.0004, A3s:0.0241, A4s:0.1431, A5s:0.0004, A6s:0.2686, A7s:0.0086, A8s:0.0722, A9s:0.0307, ATs:0.0043, AJs:0.0622, AQs:0.0673, AKs:0.0161, AA:0.0047"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0058, 42o:0.0078, 52o:0.0035, 72o:0.0029, 82o:0.0001, T2o:0.0046, J2o:0.0056, Q2o:0.0533, K2o:0.1644, A2o:0.9508, 32s:0.0003, 33:0.1914, 43o:0.0013, 63o:0.0088, 73o:0.0001, 93o:0.0036, T3o:0.0106, J3o:0.045, Q3o:0.0062, K3o:0.303, A3o:0.9858, 42s:0.0098, 43s:0.1849, 44:0.0184, 54o:0.0286, 74o:0.0114, 94o:0.0031, T4o:0.0152, J4o:0.0492, Q4o:0.006, K4o:0.1902, A4o:0.9927, 52s:0.0003, 53s:0.1363, 54s:0.1386, 55:0.0033, 65o:0.0141, 75o:0.0045, 95o:0.002, J5o:0.0012, Q5o:0.041, K5o:0.4896, A5o:0.5761, 62s:0.0503, 63s:0.0614, 64s:0.0575, 65s:0.0287, 66:0.0484, 86o:0.0096, T6o:0.0434, J6o:0.0189, Q6o:0.0345, K6o:0.3036, A6o:0.9983, 72s:0.0304, 73s:0.1258, 74s:0.0187, 75s:0.0035, 76s:0.0913, 77:0.1491, 87o:0.0067, 97o:0.0897, T7o:0.0031, J7o:0.0182, Q7o:0.0381, K7o:0.3583, A7o:0.9186, 82s:0.0002, 83s:0.0461, 84s:0.0049, 85s:0.0989, 86s:0.0211, 87s:0.0197, 88:0.0326, 98o:0.0028, T8o:0.0048, J8o:0.1584, Q8o:0.1518, K8o:0.3207, A8o:0.9473, 93s:0.0003, 94s:0.0063, 95s:0.0479, 96s:0.2419, 97s:0.1147, 98s:0.0015, 99:0.0918, T9o:0.0169, J9o:0.019, Q9o:0.0606, K9o:0.571, A9o:0.8141, T2s:0.0029, T3s:0.0325, T4s:0.0049, T5s:0.1505, T6s:0.0059, T7s:0.0871, T8s:0.0404, T9s:0.0892, TT:0.1894, JTo:0.0951, QTo:0.0571, KTo:0.6053, ATo:0.885, J2s:0.1348, J3s:0.373, J4s:0.0215, J5s:0.0628, J7s:0.135, J8s:0.1209, J9s:0.0506, JTs:0.1792, JJ:0.5512, QJo:0.0544, KJo:0.8064, AJo:0.9991, Q2s:0.0462, Q3s:0.0492, Q4s:0.1148, Q5s:0.0086, Q6s:0.1978, Q7s:0.2188, Q8s:0.3066, Q9s:0.091, QTs:0.102, QJs:0.2597, QQ:0.5137, KQo:0.8634, AQo, K2s:0.9263, K3s:0.9359, K4s:0.1903, K5s:0.6315, K6s:0.3369, K7s:0.5697, K8s:0.9318, K9s:0.5644, KTs:0.6783, KJs:0.8451, KQs:0.7038, KK:0.8192, AKo:0.9994, A2s:0.9086, A3s:0.9649, A4s:0.8513, A5s:0.9949, A6s:0.6986, A7s:0.9072, A8s:0.7969, A9s:0.8491, ATs:0.9918, AJs:0.9375, AQs:0.9299, AKs:0.9831, AA:0.9952"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3|SB:3BET@7|BB:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0094, 55:0.0111, 66:0.0167, 77:0.0309, 88:0.3169, 99:0.4274, TT, ATo:0.0103, JJ, AJo:0.0121, QJs:0.0001, QQ, KQo:0.0001, AQo:0.6719, KJs:0.0007, KQs:0.0001, KK, AKo, A3s:0.0001, A4s:0.0002, A5s:0.0059, A6s:0.0019, A7s:0.0019, A8s:0.0107, A9s:0.0074, ATs:0.0131, AJs:0.2194, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77, 88, 99, A9o:0.0001, TT, ATo, JJ, AJo, QQ, AQo, KJs, KQs, KK, AKo, A7s:0.0004, A8s:0.9985, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.999, A2o:0.4464, 33:0.9981, K3o:0.0014, A3o:0.0037, 43s:0.9958, 44:0.9994, 54o:0.9118, Q4o:0.0001, K4o:0.2023, A4o:0.1923, 52s:0.0249, 53s:0.9929, 54s:0.9987, 55:0.9997, 65o:0.4504, 75o:0.0022, T5o:0.0002, K5o:0.1163, A5o:0.1069, 62s:0.0026, 63s:0.2855, 64s:0.9911, 65s:0.9931, 66, 76o:0.0083, Q6o:0.0005, K6o:0.0437, A6o:0.7609, 73s:0.0687, 74s:0.9108, 75s:0.9989, 76s:0.9952, 77, 87o:0.6543, 97o:0.0384, T7o:0.0001, J7o:0.0012, Q7o:0.0004, K7o:0.2324, A7o:0.1377, 82s:0.0001, 84s:0.6172, 85s:0.9878, 86s:0.9921, 87s:0.9996, 88:0.9998, 98o:0.7584, T8o:0.0909, J8o:0.0042, Q8o:0.0263, K8o:0.6253, A8o:0.0554, 92s:0.0001, 93s:0.0002, 94s:0.0175, 95s:0.9628, 96s:0.995, 97s:0.9997, 98s:0.9994, 99, T9o:0.8919, J9o:0.2046, Q9o:0.0286, K9o:0.6375, A9o:0.49, T2s:0.073, T3s:0.0784, T4s:0.8591, T5s:0.821, T6s:0.8245, T7s:0.9976, T8s:0.995, T9s:0.9978, TT:0.9613, JTo:0.9951, QTo:0.9957, KTo:0.9802, ATo:0.7399, J2s:0.0269, J3s:0.9944, J4s:0.9355, J5s:0.9992, J6s:0.8926, J7s:0.9961, J8s:0.9964, J9s, JTs:0.9994, JJ:0.8501, QJo:0.999, KJo:0.9163, AJo:0.1059, Q2s:0.2453, Q3s:0.9989, Q4s:0.9838, Q5s:0.9713, Q6s:0.9972, Q7s:0.9817, Q8s:0.9973, Q9s:0.9969, QTs:0.9839, QJs:0.9973, QQ:0.9224, KQo:0.9201, AQo:0.0003, K2s:0.9769, K3s:0.5718, K4s:0.9177, K5s:0.4856, K6s:0.9585, K7s:0.9343, K8s:0.2695, K9s:0.4437, KTs:0.9992, KJs:0.973, KQs:0.8811, KK:0.9851, A2s:0.2183, A3s:0.0008, A4s:0.158, A5s:0.0052, A6s:0.2344, A7s:0.3788, A8s:0.204, A9s:0.1889, ATs:0.8488, AJs:0.0865, AQs:0.0002, AA:0.0001"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0001, K3o:0.1036, 43s:0.0001, K4o:0.5243, A4o:0.001, J5o:0.0003, Q5o:0.0002, K5o:0.6374, 63s:0.0001, Q6o:0.001, K6o:0.7354, A6o:0.0186, Q7o:0.0002, K7o:0.2106, A7o:0.0004, 86s:0.0001, 88:0.0001, Q8o:0.0036, K8o:0.265, 93s:0.0001, 95s:0.0002, T9o:0.0001, J9o:0.0001, Q9o:0.0007, K9o:0.0344, T5s:0.0055, T7s:0.0004, TT:0.0387, QTo:0.0012, KTo:0.0044, J3s:0.0002, J4s:0.0001, J7s:0.0001, JTs:0.0001, JJ:0.1499, QJo:0.0005, KJo:0.0719, Q2s:0.0003, Q4s:0.0101, Q5s:0.0132, Q6s:0.0003, Q8s:0.0003, Q9s:0.0002, QTs:0.0001, QQ:0.0776, KQo:0.0781, K2s:0.0017, K4s:0.0004, K5s:0.0001, K7s:0.0009, K8s:0.0011, KTs:0.0001, KJs:0.0001, KK:0.0149, ATs:0.0102, AJs:0.8727, AQs:0.6959, AKs:0.0044, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, A2o:0.5535, 33:0.0018, K3o:0.0147, A3o:0.9963, 44:0.0006, K4o:0.0028, A4o:0.8067, 53s:0.0004, 54s:0.0003, 55:0.0003, J5o:0.0001, A5o:0.893, 63s:0.0001, 65s:0.0001, 66:0.0001, Q6o:0.0001, K6o:0.0004, A6o:0.2204, 75s:0.0001, 76s:0.0001, 77:0.0001, K7o:0.0079, A7o:0.8619, 86s:0.0001, 87s:0.0001, 88:0.0001, K8o:0.0008, A8o:0.9445, 95s:0.0001, 98s:0.0005, T9o:0.0003, K9o:0.3264, A9o:0.51, T3s:0.0002, T6s:0.0004, T8s:0.0001, T9s:0.0017, JTo:0.0003, QTo:0.0003, KTo:0.0154, ATo:0.2601, J3s:0.0002, J5s:0.0001, J6s:0.0001, J7s:0.0015, J8s:0.002, JTs:0.0005, QJo:0.0004, KJo:0.0118, AJo:0.8941, Q2s:0.0001, Q4s:0.0021, Q5s:0.0031, Q6s:0.0001, Q7s:0.0005, Q8s:0.0006, Q9s:0.0027, QTs:0.016, QJs:0.0027, KQo:0.0018, AQo:0.9997, K2s:0.0016, K3s:0.4281, K4s:0.0815, K5s:0.5141, K6s:0.0414, K7s:0.0645, K8s:0.7289, K9s:0.5563, KTs:0.0007, KJs:0.0268, KQs:0.1189, AKo, A2s:0.7817, A3s:0.9992, A4s:0.842, A5s:0.9948, A6s:0.7656, A7s:0.6211, A8s:0.796, A9s:0.8111, ATs:0.141, AJs:0.0408, AQs:0.3039, AKs:0.9956"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3|BB:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0006, 77:0.0008, 88:0.9982, 99, TT, ATo:0.9433, JJ, AJo, QQ, AQo, KK, AKo, A8s:0.0001, A9s:0.0475, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3|BB:3BET@6",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0038, 32o:0.002, 42o:0.016, 52o:0.0443, 62o:0.0083, 82o:0.0147, 92o:0.0033, T2o:0.0001, 32s:0.0026, 33:0.0023, 43o:0.0141, 53o:0.0987, 63o:0.0055, 83o:0.0079, 93o:0.0122, T3o:0.0006, K3o:0.0011, 42s:0.0183, 43s:0.0056, 44:0.0379, 54o:0.2032, 64o:0.1115, 74o:0.0042, 84o:0.0031, Q4o:0.0001, 52s:0.034, 53s:0.0396, 54s:0.0174, 55:0.0659, 65o:0.6499, 75o:0.0997, 85o:0.0421, 95o:0.021, J5o:0.0034, Q5o:0.0069, K5o:0.0252, A5o:0.0025, 62s:0.0207, 63s:0.0355, 64s:0.1895, 65s:0.1337, 66:0.1565, 76o:0.0008, 86o:0.2548, 96o:0.0546, T6o:0.0006, J6o:0.0101, K6o:0.1232, A6o:0.029, 72s:0.035, 73s:0.0012, 74s:0.0005, 75s:0.0062, 77:0.0631, 97o:0.0146, T7o:0.0019, K7o:0.2448, 83s:0.0875, 84s:0.0039, 85s:0.0515, 86s:0.1611, 87s:0.0001, 88:0.0764, 98o:0.0179, J8o:0.0003, K8o:0.7657, 94s:0.0129, 95s:0.0419, 96s:0.0836, 97s:0.0021, 98s:0.0065, 99:0.0641, T9o:0.0004, J9o:0.0005, K9o:0.8753, A9o:0.0233, T3s:0.0001, T4s:0.0004, T6s:0.0017, T7s:0.0004, T8s:0.0038, T9s:0.0001, TT:0.0042, JTo:0.0004, KTo:0.8957, J2s:0.0001, J4s:0.0047, J6s:0.0001, J9s:0.0001, JTs:0.0002, JJ:0.0038, KJo:0.9891, Q2s:0.0002, Q7s:0.0004, Q8s:0.0005, Q9s:0.0034, QJs:0.0002, QQ:0.0001, KQo:0.9958, K2s:0.443, K3s:0.3159, K4s:0.1123, K5s:0.9832, K6s:0.9931, K7s:0.9941, K8s:0.9845, K9s:0.9939, KTs:0.9388, KJs:0.9806, KQs:0.9987, KK:0.9749, AKo:0.0093, A5s:0.0001, A6s:0.2149, AKs:0.0058, AA:0.0149"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9961, 32o:0.8722, 42o:0.7764, 52o:0.628, 62o:0.0019, 72o:0.0108, 82o:0.0343, 92o:0.7043, T2o:0.984, J2o:0.9597, Q2o, K2o:0.0163, A2o, 32s:0.9969, 33:0.9976, 43o:0.9798, 53o:0.7991, 63o:0.1023, 73o:0.6333, 83o:0.034, 93o:0.8117, T3o:0.8584, J3o:0.9724, Q3o:0.9974, K3o:0.0075, A3o, 42s:0.9806, 43s:0.9934, 44:0.9621, 54o:0.7968, 64o:0.6745, 74o:0.9065, 84o:0.1237, 94o:0.0168, T4o:0.7802, J4o:0.9535, Q4o:0.987, K4o:0.0071, A4o, 52s:0.9643, 53s:0.9603, 54s:0.9826, 55:0.9341, 65o:0.2949, 75o:0.8636, 85o:0.7233, 95o:0.1137, T5o:0.2111, J5o:0.6691, Q5o:0.9449, K5o:0.0123, A5o:0.9975, 62s:0.9706, 63s:0.9613, 64s:0.8044, 65s:0.8652, 66:0.843, 76o:0.998, 86o:0.7303, 96o:0.9134, T6o:0.6936, J6o:0.82, Q6o:0.9954, K6o:0.0042, A6o:0.971, 72s:0.9596, 73s:0.997, 74s:0.9982, 75s:0.9912, 76s:0.9997, 77:0.9369, 87o:0.999, 97o:0.9832, T7o:0.9954, J7o:0.992, Q7o:0.9969, K7o:0.0061, A7o, 82s:0.9983, 83s:0.9124, 84s:0.996, 85s:0.9481, 86s:0.8299, 87s:0.9996, 88:0.9236, 98o:0.9802, T8o, J8o:0.9984, Q8o:0.9998, K8o:0.0143, A8o, 92s:0.9989, 93s:0.9984, 94s:0.9864, 95s:0.9574, 96s:0.9149, 97s:0.9963, 98s:0.9934, 99:0.9359, T9o:0.9995, J9o:0.9991, Q9o:0.9997, K9o:0.002, A9o:0.9767, T2s, T3s:0.9988, T4s:0.9993, T5s:0.9976, T6s:0.9957, T7s:0.9996, T8s:0.9962, T9s, TT:0.9958, JTo:0.9996, QTo, KTo:0.0081, ATo, J2s:0.9984, J3s:0.9989, J4s:0.9929, J5s:0.9977, J6s:0.9939, J7s, J8s, J9s, JTs:0.9998, JJ:0.9962, QJo, KJo:0.0109, AJo, Q2s:0.9996, Q3s:0.9992, Q4s, Q5s, Q6s, Q7s:0.9977, Q8s:0.9995, Q9s:0.9966, QTs, QJs:0.9998, QQ, KQo:0.0042, AQo, K2s:0.129, K3s:0.0562, K4s:0.0205, K5s:0.012, K6s:0.0069, K7s:0.0059, K8s:0.0155, K9s:0.0061, KTs:0.0612, KJs:0.0194, KQs:0.0013, KK:0.0251, AKo:0.9907, A2s, A3s, A4s, A5s, A6s:0.7851, A7s, A8s, A9s, ATs, AJs, AQs, AKs:0.9942, AA:0.9851"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3|BB:3BET@6|SB:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.7829, 77:0.9978, 88, 99, TT, ATo:0.991, JJ, AJo, QTs:0.0002, QJs:0.0002, QQ, KQo:0.0004, AQo, K5s:0.0001, K9s:0.0005, KTs:0.0006, KJs:0.0008, KQs:0.0024, KK, AKo, A2s:0.0002, A3s:0.0001, A4s:0.0015, A5s:0.0001, A6s:0.0007, A7s:0.0404, A8s:0.7808, A9s:0.9897, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.001, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1097, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.9996, QQ, KK, AKo, AQs:0.0602, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ, QQ, AQo:0.0002, KK, AKo, AQs:0.9983, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19|BTN:CALL@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@19|BTN:CALL@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19|CO:CALL@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19|CO:CALL@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@19|CO:CALL@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19|HJ:CALL@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@19|HJ:CALL@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19|HJ:CALL@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@19|HJ:CALL@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@19|SB:CALL@18.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0014, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "54s:0.0285, 55:0.0004, 65s:0.0111, 66:0.0487, 77:0.002, 88:0.0916, 97s:0.0001, 99:0.0131, TT:0.1833, JJ:0.2884, QQ:0.7472, KQo:0.1353, AQo:0.4986, KTs:0.3652, KJs:0.085, KQs:0.0133, KK:0.2081, A9s:0.0001, ATs:0.0835, AJs:0.5267, AQs:0.3036, AA:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0556, A3o:0.1436, A4o:0.2127, A5o:0.1488, A6o:0.0478, A7o:0.0644, A8o:0.0421, A9o:0.0004, ATo:0.1425, AJo:0.0085, QQ:0.1573, KQo:0.0003, AQo:0.495, KK:0.0028, AKo:0.0004, A3s:0.0008, A4s:0.0034, A5s:0.0016, A6s:0.0038, A7s:0.0002, A8s:0.002, A9s:0.0001, ATs:0.0106, AJs:0.017, AQs:0.1816, AKs:0.1571, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0005, 44:0.0023, 55:0.0019, A5o:0.0009, 65s:0.0001, 66:0.0144, 77:0.0004, 88:0.0013, QQ:0.0955, KQo:0.0134, AQo:0.0064, K5s:0.0184, K6s:0.0308, K7s:0.0036, K8s:0.0004, K9s:0.0027, KTs:0.0236, KJs:0.0006, KQs:0.9867, KK:0.7891, AKo:0.9996, A2s:0.9998, A3s:0.9977, A4s:0.9958, A5s:0.9931, A6s:0.9688, A7s:0.9955, A8s:0.9931, A9s:0.98, ATs:0.8685, AJs:0.4428, AQs:0.5149, AKs:0.8429"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "54s:0.031, 55:0.002, 65s:0.0057, 66:0.0446, 77:0.0037, 88:0.0347, 99:0.002, TT:0.0617, JJ:0.4201, KJo:0.0001, AJo:0.0001, QQ:0.217, KQo:0.135, AQo:0.1732, K9s:0.0001, KTs:0.115, KJs:0.1691, KQs:0.0009, KK:0.0574, ATs:0.0384, AJs:0.884, AQs:0.0029"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.1185, K3o:0.0001, A3o:0.166, A4o:0.2166, A5o:0.2033, A6o:0.0367, A7o:0.0138, A8o:0.0648, K9o:0.0001, A9o:0.0415, TT:0.0003, ATo:0.2386, AJo:0.1451, Q8s:0.0003, QQ:0.1174, KQo:0.0001, AQo:0.1552, KK:0.0002, AKo:0.0002, A4s:0.0001, A5s:0.0001, A6s:0.0005, A8s:0.0001, A9s:0.0002, ATs:0.0212, AJs:0.0123, AQs:0.1383, AKs:0.3053, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, A3o:0.0402, 44:0.0146, A4o:0.0226, 55:0.0592, A5o:0.0137, 66:0.1469, A6o:0.0001, 77:0.0039, 88:0.0019, QQ:0.6656, KQo:0.8315, AQo:0.6715, K3s:0.0656, K4s:0.0124, K5s:0.5225, K6s:0.3925, K7s:0.3019, K8s:0.0545, K9s:0.2322, KTs:0.4681, KJs:0.0241, KQs:0.9991, KK:0.9424, AKo:0.9998, A2s:0.9993, A3s, A4s, A5s, A6s:0.9985, A7s:0.9998, A8s:0.9975, A9s:0.9985, ATs:0.9404, AJs:0.1036, AQs:0.8588, AKs:0.6947"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "54s:0.0015, 55:0.0677, 65s:0.0083, 66:0.0494, 76s:0.0113, 77:0.0001, 88:0.0333, 99:0.0302, TT:0.0387, JJ:0.5502, AJo:0.0012, QTs:0.0065, QQ:0.1777, KQo:0.0049, AQo:0.0361, K6s:0.0001, K7s:0.0001, K8s:0.0004, KTs:0.1574, KJs:0.54, KK:0.0384, A8s:0.0001, ATs:0.0585, AJs:0.9802, AQs:0.0239, AKs:0.0001"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.1363, A3o:0.1245, A4o:0.2497, A5o:0.2414, A6o:0.0476, A7o:0.0482, A8o:0.0039, A9o:0.0269, TT:0.0021, ATo:0.1854, AJo:0.2962, Q3s:0.0001, Q9s:0.0002, QTs:0.0054, QQ:0.1071, AQo:0.0015, AKo:0.0002, A3s:0.0001, A4s:0.0002, A6s:0.0001, A7s:0.0002, A8s:0.0008, ATs:0.0049, AQs:0.1331, AKs:0.3258, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.1233, A3o:0.0194, 44:0.0894, A4o:0.0918, 55:0.362, A5o:0.427, 66:0.2855, 77:0.3376, 88:0.2032, 99:0.0009, TT:0.0015, Q6s:0.0001, Q8s:0.0002, Q9s:0.0002, QTs:0.0004, QJs:0.0003, QQ:0.7152, KQo:0.9951, AQo:0.9624, K2s:0.03, K3s:0.0236, K4s:0.6137, K5s:0.9678, K6s:0.5918, K7s:0.5626, K8s:0.3257, K9s:0.6111, KTs:0.8008, KJs:0.314, KQs, KK:0.9615, AKo:0.9998, A2s:0.9996, A3s:0.9996, A4s:0.9997, A5s:0.9997, A6s:0.9998, A7s:0.9995, A8s:0.9989, A9s:0.9994, ATs:0.9361, AJs:0.0197, AQs:0.843, AKs:0.6741"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0002, 54s:0.0176, 55:0.0592, 65s:0.0006, 66:0.235, 76s:0.0008, 77:0.0182, 88:0.2608, 99:0.039, T9s:0.0001, TT:0.1506, JTs:0.0005, JJ:0.627, KJo:0.0003, AJo:0.1549, QTs:0.18, QJs:0.157, KQo:0.0186, AQo:0.0008, K2s:0.0001, K3s:0.0282, K5s:0.0001, K6s:0.0185, K8s:0.0728, K9s:0.0384, KTs:0.0006, KJs:0.2709, A9s:0.0002, ATs:0.0031, AJs:0.857"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.1205, 33:0.0001, A3o:0.154, A4o:0.2506, 53s:0.0003, 55:0.0015, K5o:0.0053, A5o:0.2195, 66:0.0021, A6o:0.0787, 77:0.0007, K7o:0.0002, A7o:0.1198, A8o:0.0214, K9o:0.0081, A9o:0.2565, T4s:0.0001, KTo:0.0956, ATo:0.3256, JJ:0.0494, KJo:0.0309, AJo:0.1769, Q4s:0.0001, Q8s:0.0007, QTs:0.1657, QJs:0.0238, K2s:0.0125, K3s:0.0166, K4s:0.0475, K5s:0.0307, K6s:0.0016, K7s:0.0007, K8s:0.2848, K9s:0.0038, KK:0.5456, AKo:0.0194, A3s:0.0003, A7s:0.0013, A8s:0.0005, ATs:0.0011, AQs:0.0013, AKs:0.9011, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0012, A2o:0.0078, 33:0.4356, A3o:0.0497, 44:0.239, A4o:0.4005, 53s:0.0001, 55:0.2092, A5o:0.5135, 66:0.3682, 76s:0.0002, 77:0.1216, A7o:0.0003, 88:0.0184, 99:0.0047, TT:0.8329, ATo:0.0056, JJ:0.3235, KJo:0.0006, AJo:0.0103, Q2s:0.0003, Q5s:0.0003, Q6s:0.0007, Q7s:0.0001, Q8s:0.0003, Q9s:0.0004, QTs:0.5614, QJs:0.6739, QQ, KQo:0.9814, AQo:0.9992, K2s:0.9789, K3s:0.8075, K4s:0.9459, K5s:0.969, K6s:0.9798, K7s:0.998, K8s:0.6121, K9s:0.9036, KTs:0.9994, KJs:0.7291, KQs, KK:0.4544, AKo:0.9806, A2s, A3s:0.9997, A4s, A5s:0.9998, A6s, A7s:0.9982, A8s:0.9995, A9s:0.999, ATs:0.9953, AJs:0.143, AQs:0.9987, AKs:0.0989"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32s:0.9796, 33:0.9998, K3o:0.0118, 42s:0.999, 43s:0.9996, 44, 54o:0.1385, K4o:0.0003, 52s:0.9967, 53s, 54s:0.9996, 55, 65o:0.9675, K5o:0.0087, A5o:0.0001, 62s:0.9967, 63s:0.9997, 64s:0.9996, 65s, 66, 76o:0.3489, K6o:0.1012, 73s:0.2128, 74s:0.9994, 75s:0.9985, 76s, 77, K7o:0.2762, 82s:0.0622, 83s:0.4874, 84s:0.9465, 85s:0.9997, 86s:0.9994, 87s:0.9993, 88, 98o:0.2966, T8o:0.0199, K8o:0.0126, A8o:0.0733, 93s:0.1597, 94s:0.0011, 95s:0.7896, 96s:0.997, 97s, 98s:0.9998, 99, T9o:0.7216, Q9o:0.0002, K9o:0.1487, A9o:0.9586, T2s:0.008, T3s:0.1943, T4s:0.2435, T5s:0.4927, T6s:0.9972, T7s:0.9988, T8s, T9s, TT, JTo:0.0015, QTo:0.9217, KTo:0.9568, ATo:0.7505, J2s:0.1876, J3s:0.0209, J4s:0.7284, J5s:0.8889, J6s:0.9639, J7s:0.9946, J8s:0.9991, J9s:0.9997, JTs:0.9997, JJ, QJo:0.9952, KJo, AJo, Q2s:0.9938, Q3s:0.9952, Q4s:0.9985, Q5s:0.9996, Q6s:0.9997, Q7s:0.9997, Q8s:0.9992, Q9s:0.9993, QTs:0.9972, QJs:0.9853, QQ:0.6807, KQo:0.9986, AQo:0.9994, K2s:0.9975, K3s:0.9908, K4s:0.993, K5s:0.6927, K6s:0.9834, K7s:0.994, K8s:0.995, K9s:0.9977, KTs:0.1795, KJs:0.9996, KQs:0.9964, KK:0.0587, AKo:0.0112, A3s:0.0072, A4s:0.0002, A5s:0.0021, A6s:0.0353, A7s:0.2215, A8s:0.986, A9s:0.9998, ATs:0.9862, AJs, AQs:0.9995, AKs:0.7297"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0002, A2o:0.3084, 32s:0.0001, Q3o:0.0002, K3o:0.021, A3o:0.1537, K4o:0.0139, A4o:0.185, 54s:0.0001, K5o:0.0414, A5o:0.4777, 64s:0.0001, K6o:0.0113, A6o:0.166, 74s:0.0001, 75s:0.0001, T7o:0.0015, K7o:0.0006, A7o:0.1636, 84s:0.0001, T8o:0.0002, A8o:0.1485, 92s:0.0004, 94s:0.0011, 96s:0.0005, T9o:0.0043, Q9o:0.0003, K9o:0.0176, A9o:0.0068, T2s:0.0064, T3s:0.0475, T4s:0.207, T5s:0.0051, T6s:0.0013, JTo:0.1197, QTo:0.078, KTo:0.0002, J4s:0.0006, J7s:0.0004, QJo:0.0004, Q2s:0.0001, QQ:0.0001, KK:0.4894, AKo:0.2474, A3s:0.0004, AQs:0.0003, AKs:0.2619, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.1198, 33:0.0002, A3o:0.0236, K4o:0.0002, A4o:0.4419, A5o:0.3784, 75s:0.0002, K7o:0.0001, A7o:0.0008, 86s:0.0002, 87s:0.0001, A8o:0.0004, 97s:0.0001, KTo:0.0426, ATo:0.2495, QJo:0.0001, KJo:0.0001, Q2s:0.0003, Q4s:0.0002, Q6s:0.0002, Q8s:0.0006, Q9s:0.0006, QTs:0.0028, QJs:0.0147, QQ:0.3191, KQo:0.0014, AQo:0.0005, K2s:0.0023, K3s:0.009, K4s:0.007, K5s:0.3072, K6s:0.0166, K7s:0.006, K8s:0.005, K9s:0.0023, KTs:0.8205, KJs:0.0004, KQs:0.0036, KK:0.4519, AKo:0.7415, A2s, A3s:0.9924, A4s:0.9998, A5s:0.9979, A6s:0.9646, A7s:0.7785, A8s:0.014, A9s:0.0002, ATs:0.0138, AQs:0.0002, AKs:0.0084"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.9607, JJ, QQ, AQo:0.0646, KK, AKo, ATs:0.7093, AJs:0.893, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2704, 33:0.2189, A3o:0.0001, 43s:0.8218, 44:0.6784, A4o:0.0016, 53s:0.8105, 54s:0.9739, 55:0.927, 65o:0.4646, A5o:0.3116, 63s:0.1656, 64s:0.9691, 65s:0.9755, 66:0.9422, 76o:0.5117, 74s:0.3594, 75s:0.7842, 76s:0.9896, 77:0.8983, A7o:0.0003, 85s:0.4602, 86s:0.7836, 87s:0.929, 88:0.6781, A8o:0.0134, 96s:0.4124, 97s:0.9306, 98s:0.525, 99:0.0563, A9o:0.0224, T7s:0.1737, T8s:0.209, T9s:0.5135, TT:0.117, ATo:0.1335, J9s:0.0312, JTs:0.4762, JJ:0.0027, AJo:0.1103, Q5s:0.0001, Q6s:0.0008, Q7s:0.0001, Q8s:0.0001, Q9s:0.0307, QTs:0.032, QJs:0.3085, QQ:0.4346, KQo:0.0007, AQo:0.5914, K3s:0.0076, K4s:0.1885, K5s:0.171, K6s:0.0561, K7s:0.0171, K8s:0.0047, K9s:0.1236, KTs:0.2056, KJs:0.0058, KQs:0.0689, A2s:0.0005, A3s:0.0004, A4s:0.0009, A5s:0.007, A6s:0.0214, A7s:0.0023, A8s:0.0109, A9s:0.0078, ATs:0.6835, AJs:0.0879, AQs:0.3227, AA:0.3852"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3973, A2o:0.0101, 33:0.7799, A3o:0.3176, 43s:0.0001, 44:0.32, A4o:0.4696, 54s:0.0001, 55:0.073, 65o:0.0001, A5o:0.3776, 64s:0.0035, 65s:0.0018, 66:0.0557, A6o:0.3118, 74s:0.0005, 75s:0.0001, 76s:0.0044, 77:0.1017, A7o:0.2626, 85s:0.0001, 86s:0.0162, 87s:0.0474, 88:0.3198, A8o:0.192, 95s:0.0002, 96s:0.0018, 97s:0.0435, 98s:0.4476, 99:0.9431, T9o:0.0002, J9o:0.0001, A9o:0.0811, T5s:0.0001, T6s:0.0001, T7s:0.002, T8s:0.1005, T9s:0.4557, TT:0.8824, JTo:0.0006, KTo:0.0001, ATo:0.0309, J3s:0.0001, J4s:0.0002, J7s:0.0002, J8s:0.0067, J9s:0.5245, JTs:0.0375, JJ:0.9973, KJo:0.0002, AJo:0.6162, Q6s:0.0005, Q7s:0.0001, Q9s:0.003, QTs:0.0115, QJs:0.0619, QQ:0.5654, AQo:0.3705, K2s:0.0012, K3s:0.1227, K4s:0.1673, K5s:0.0016, K6s:0.5395, K7s:0.5182, K8s:0.3871, K9s:0.7242, KTs:0.7936, KJs:0.9688, KQs:0.8576, KK, AKo, A2s:0.9982, A3s:0.9988, A4s:0.9986, A5s:0.9928, A6s:0.9785, A7s:0.9969, A8s:0.9843, A9s:0.9921, ATs:0.3154, AJs:0.9121, AQs:0.6773, AKs, AA:0.6148"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0089, JJ, AJo:0.0011, QQ, AQo, KK, AKo, ATs:0.0001, AJs:0.0245, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0336, JJ:0.2466, QQ, KK, AKo, AQs:0.7162, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9995, KK, AKo:0.7484, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AKo:0.9986, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@19|BB:CALL@18",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|BTN:3BET@19|SB:CALL@18.5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|BTN:3BET@5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0031, 33:0.299, A3o:0.0161, 44:0.9196, A4o:0.0518, 53s:0.004, 54s:0.1439, 55:0.9892, A5o:0.285, 64s:0.0891, 65s:0.4939, 66:0.9968, A6o:0.003, 75s:0.01, 76s:0.3015, 77:0.9653, 86s:0.1283, 87s:0.0002, 88:0.5179, A8o:0.0015, 92s:0.0001, 96s:0.0062, 98s:0.0009, 99:0.1302, T8s:0.0029, T9s:0.0579, TT:0.2932, ATo:0.0169, J9s:0.0005, JTs:0.001, JJ:0.958, AJo:0.5979, Q9s:0.0004, QTs:0.0003, QJs:0.0005, QQ:0.0056, AQo:0.0079, K4s:0.0004, K9s:0.0025, KTs:0.0036, KJs:0.0024, KQs:0.0104, KK:0.1444, A2s:0.0223, A3s:0.0094, A4s:0.0457, A5s:0.0276, A6s:0.0061, A7s:0.0075, A8s:0.0147, A9s:0.0022, ATs:0.0398, AJs:0.9963, AQs:0.089, AA:0.5226"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0024, A2o:0.0066, 33:0.1432, A3o:0.6041, 44:0.007, A4o:0.543, 53s:0.0032, 54s:0.0002, 55:0.01, A5o:0.6354, 63s:0.0004, 64s:0.1441, 65s:0.2558, 66:0.0022, A6o:0.1768, 74s:0.0006, 75s:0.0413, 76s:0.6955, 77:0.033, 87o:0.0003, A7o:0.456, 86s:0.0572, 87s:0.9548, 88:0.4786, A8o:0.0841, 96s:0.0054, 97s:0.0635, 98s:0.6989, 99:0.8603, T9o:0.0001, A9o:0.2611, T7s:0.0021, T8s:0.03, T9s:0.0752, TT:0.1888, ATo:0.5048, J5s:0.0001, J7s:0.0009, J8s:0.002, J9s:0.0003, JTs:0.0001, JJ:0.0085, AJo:0.0122, Q2s:0.0004, Q5s:0.0001, Q6s:0.0009, Q8s:0.0411, Q9s:0.2042, QTs:0.0625, QJs:0.0002, QQ:0.9943, AQo:0.992, K3s:0.0002, K5s:0.0023, K6s:0.0003, K7s:0.0057, K8s:0.0096, K9s:0.0095, KTs:0.001, KJs:0.0003, KQs:0.253, KK:0.8556, AKo, A2s:0.8983, A3s:0.9902, A4s:0.9541, A5s:0.9687, A6s:0.9934, A7s:0.9919, A8s:0.985, A9s:0.9978, ATs:0.9601, AJs:0.0037, AQs:0.911, AKs, AA:0.4774"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0002, 33:0.0004, A3o:0.003, A4o:0.0031, 55:0.0048, A5o:0.0109, 66:0.0028, A6o:0.0035, 75s:0.016, 77:0.0035, A7o:0.0048, 85s:0.0001, 92s:0.0007, 97s:0.0041, 98s:0.0003, 99:0.0005, A9o:0.0026, T8s:0.0035, T9s:0.0064, ATo:0.0016, J8s:0.0003, Q2s:0.0001, Q5s:0.0074, Q7s:0.0001, Q8s:0.0039, QTs:0.0006, QJs:0.0013, QQ:0.0231, AQo:0.0046, K9s:0.0003, KJs:0.0012, KQs:0.0194, KK:0.998, AKo:0.9992, A2s:0.2708, A3s:0.4581, A4s:0.6035, A5s:0.8254, A6s:0.8556, A7s:0.3674, A8s:0.5804, A9s:0.0808, ATs:0.1556, AJs:0.0659, AQs:0.8509, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0005, A3o:0.005, 42s:0.0003, 44:0.0002, A4o:0.0023, 53s:0.0036, 54s:0.0017, 65o:0.0009, A5o:0.0016, 64s:0.0006, 65s:0.042, 66:0.002, 76s:0.0006, 77:0.0064, A7o:0.0007, 86s:0.0028, 87s:0.0013, 88:0.0047, A8o:0.0012, A9o:0.0093, T9s:0.0024, TT:0.0001, ATo:0.0002, J5s:0.0001, JJ:0.0001, AJo:0.0019, Q6s:0.0009, Q8s:0.0004, Q9s:0.0022, QTs:0.0022, QJs:0.0001, QQ:0.2122, AQo:0.1711, K3s:0.0002, K7s:0.0132, K9s:0.0002, KJs:0.0031, KQs:0.001, KK:0.9983, AKo:0.9994, A2s:0.4279, A3s:0.4023, A4s:0.6432, A5s:0.3188, A6s:0.481, A7s:0.2805, A8s:0.3414, A9s:0.7659, ATs:0.21, AJs:0.096, AQs:0.9989, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, JJ:0.0001, QQ:0.0015, KK:0.9913, AKo:0.0001, A5s:0.0001, A6s:0.0002, A9s:0.0001, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.015, 99:0.0332, TT:0.2735, JJ:0.482, AJo:0.0001, QQ, AQo:0.0001, KTs:0.0001, KJs:0.0001, KK, AKo:0.9997, AJs:0.0001, AQs:0.0007, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|BB:4BET@19|LJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "83s:0.0001, 87s:0.0001, 97s:0.0002, A9o:0.0001, T2s:0.0001, T6s:0.0001, TT:0.0001, KTs:0.0001, KK:0.0006, AKo:0.0001, ATs:0.0002, AJs:0.0004, AQs:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, QJs:0.0001, QQ:0.0001, KK:0.6964, AKo:0.0003, A2s:0.0002, AJs:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.0966, 77:0.1125, 88:0.1227, 99:0.5753, TT:0.7947, JJ:0.936, QQ, KK, AKo, AJs:0.0003, AQs:0.0316, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|SB:4BET@19|LJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, 88:0.0001, 95s:0.0001, 99:0.0001, J9s:0.0001, JJ:0.0001, QQ:0.0001, AQo:0.0001, K5s:0.0001, KJs:0.0001, KQs:0.0001, KK:0.0012, AKo:0.0002, A2s:0.0001, A4s:0.0001, A9s:0.0001, ATs:0.0002, AJs:0.0001, AQs:0.0001, AKs:0.0006, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:3BET@5|LJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0985, QQ, AQo:0.9388, KK, AKo, AJs:0.0001, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.016, 32s:0.0022, 33:0.0091, 44:0.0095, 55:0.0607, 65s:0.0005, 66:0.0206, 77:0.03, 87s:0.0061, 88:0.0036, 96s:0.0005, 99:0.0003, T7s:0.0001, J5s:0.0002, J8s:0.0011, JJ:0.2209, Q6s:0.0002, Q7s:0.0006, QTs:0.0004, QQ:0.0008, K3s:0.0002, K7s:0.0003, KTs:0.0016, KK:0.0001, AKo:0.013, A7s:0.0001, A8s:0.0004, ATs:0.0002, AJs:0.0939, AQs:0.0141, AKs:0.0351, AA:0.0002"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.0653, Q3o:0.0808, A3o:0.0183, Q4o:0.0204, K4o:0.0031, A4o:0.0094, 53s:0.0003, A5o:0.0679, 63s:0.0003, 64s:0.0052, 65s:0.0028, Q6o:0.0111, A6o:0.0466, 76s:0.0028, Q7o:0.0001, A7o:0.1573, 86s:0.0404, Q8o:0.0475, A8o:0.0831, 99:0.0241, Q9o:0.0281, T7s:0.0003, T8s:0.0001, ATo:0.008, J2s:0.0007, J4s:0.0001, J6s:0.0002, JTs:0.0008, JJ:0.0326, KJo:0.0123, Q2s:0.0103, Q3s:0.0072, Q4s:0.004, Q5s:0.2774, Q6s:0.0077, Q9s:0.0187, QTs:0.0092, QJs:0.003, QQ:0.3311, KQo:0.0007, AQo:0.0471, K2s:0.0035, K3s:0.0088, K4s:0.0045, K5s:0.0029, K9s:0.0039, KTs:0.0006, KJs:0.0037, KQs:0.0001, KK:0.0031, AKo:0.1452, A2s:0.0525, A3s:0.0405, A4s:0.0892, A5s:0.0501, A6s:0.1306, A7s:0.0001, A8s:0.0089, A9s:0.0055, ATs:0.0002, AJs:0.1325, AQs:0.009, AKs:0.2696, AA:0.9972"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0022, 32s:0.0003, 42s:0.0491, 43s:0.0009, 44:0.1704, K4o:0.0186, 53s:0.0007, 54s:0.0124, 55:0.0002, K5o:0.0017, A5o:0.0645, 64s:0.0086, K6o:0.0002, 72s:0.0023, 77:0.025, Q7o:0.0029, 82s:0.0006, 85s:0.0001, 86s:0.2426, 87s:0.0021, 88:0.0006, Q8o:0.0007, A8o:0.0023, 93s:0.0006, 94s:0.0006, 95s:0.0006, 97s:0.0002, Q9o:0.0002, A9o:0.0018, T2s:0.0001, T7s:0.0027, T9s:0.0004, TT:0.0007, QTo:0.0024, ATo:0.0004, J5s:0.0002, J8s:0.0007, JJ:0.0009, QJo:0.0024, KJo:0.0001, Q2s:0.588, Q3s:0.1308, Q4s:0.223, Q5s:0.2755, Q6s:0.058, Q7s:0.0384, Q8s:0.5136, Q9s:0.523, QTs:0.3817, QJs:0.0759, QQ:0.6678, KQo:0.9722, AQo:0.9481, K2s:0.1037, K3s:0.4393, K4s:0.3486, K5s:0.2216, K6s:0.273, K7s:0.2985, K8s:0.0179, K9s:0.0068, KTs:0.1885, KJs:0.0919, KQs:0.9991, KK:0.9968, AKo:0.8413, A2s:0.7345, A3s:0.5659, A4s:0.4362, A5s:0.7637, A6s:0.0257, A7s:0.0024, A8s:0.0015, A9s:0.4291, ATs:0.0224, AJs:0.1951, AQs:0.972, AKs:0.6952, AA:0.0026"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9934, 32s:0.084, 33:0.9898, 43s:0.0937, 44:0.5219, 53s:0.2631, 54s:0.3359, 55:0.7216, 62s:0.0006, 63s:0.0003, 64s:0.0031, 65s:0.0041, 66:0.8119, 75s:0.1346, 76s:0.3053, 77:0.9299, 85s:0.0025, 86s:0.0847, 87s:0.3045, 88:0.928, 95s:0.0012, 96s:0.0009, 97s:0.0705, 98s:0.0049, 99:0.7378, T2s:0.0037, T4s:0.0011, T5s:0.006, T6s:0.0001, T9s:0.0001, TT:0.3969, J3s:0.0007, J8s:0.0001, JTs:0.0006, JJ:0.4483, Q2s:0.0003, Q3s:0.0557, Q4s:0.0313, Q5s:0.0001, Q6s:0.0006, Q9s:0.2605, QTs:0.3623, QJs:0.4194, QQ:0.0019, AQo:0.0856, K3s:0.0134, K4s:0.1288, K5s:0.1376, K6s:0.0881, K7s:0.2992, K8s:0.147, K9s:0.0048, KTs:0.1496, KJs:0.4009, KQs:0.0003, AKo:0.0042, A3s:0.0005, A4s:0.0128, A5s:0.0759, A6s:0.1941, A7s:0.0003, A8s:0.0534, ATs:0.0802, AJs:0.3616, AQs:0.0223, AKs:0.0028, AA:0.0003"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.0659, K2o:0.0015, A2o:0.11, 32s:0.0251, Q3o:0.014, A3o:0.0575, 43s:0.0079, Q4o:0.0188, A4o:0.0101, 54s:0.0754, Q5o:0.0033, A5o:0.092, 64s:0.0007, 65s:0.0036, 76o:0.007, Q6o:0.0002, K6o:0.0004, A6o:0.0285, 74s:0.0011, 75s:0.028, 76s:0.0001, 87o:0.0014, K7o:0.0004, A7o:0.0327, 86s:0.0024, 87s:0.0077, 88:0.0024, Q8o:0.0788, A8o:0.0092, 94s:0.004, 95s:0.0361, 98s:0.0233, A9o:0.1574, T2s:0.0109, T4s:0.0003, T6s:0.0279, T8s:0.0012, T9s:0.0015, TT:0.0014, JTo:0.0003, ATo:0.0011, J4s:0.012, J5s:0.0028, J7s:0.0306, J8s:0.0005, JTs:0.0776, JJ:0.2806, QJo:0.0613, KJo:0.0015, AJo:0.1371, Q2s:0.0049, Q3s:0.1155, Q4s:0.0805, Q5s:0.0053, Q6s:0.1296, Q7s:0.0024, Q8s:0.0204, Q9s:0.0216, QTs:0.0014, QJs:0.0471, QQ:0.0811, AQo:0.0285, K2s:0.0086, K3s:0.0013, K4s:0.0089, K5s:0.0021, K6s:0.0303, K7s:0.0051, K8s:0.0046, K9s:0.0423, KTs:0.0046, KJs:0.0376, KQs:0.0014, KK:0.2169, AKo:0.1221, A2s:0.0543, A3s:0.1273, A4s:0.1739, A5s:0.0378, A6s:0.0504, A7s:0.0361, A8s:0.0462, A9s:0.0018, ATs:0.0005, AJs:0.0415, AQs:0.0002, AKs:0.0257, AA:0.9908"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.0156, K3o:0.0392, A3o:0.027, 43s:0.0044, 44:0.0291, A4o:0.0126, 52s:0.0006, 53s:0.0301, 54s:0.0012, 55:0.043, J5o:0.0001, A5o:0.0906, 64s:0.0459, 65s:0.0827, 66:0.0157, K6o:0.0042, 75s:0.001, 76s:0.0031, 77:0.0003, A7o:0.0304, 82s:0.0001, 86s:0.0009, 87s:0.043, 88:0.0001, Q8o:0.0009, K8o:0.0001, 96s:0.0143, 97s:0.0041, 98s:0.0088, 99:0.0022, Q9o:0.0274, T5s:0.0001, T6s:0.0005, T7s:0.0002, J5s:0.0001, J7s:0.0003, J8s:0.0006, JTs:0.0006, JJ:0.0017, QJo:0.0001, KJo:0.0004, AJo:0.0008, Q2s:0.0622, Q3s:0.0247, Q4s:0.4308, Q5s:0.5877, Q6s:0.2527, Q7s:0.0817, Q8s:0.6511, Q9s:0.3918, QTs:0.0164, QJs:0.0646, QQ:0.917, KQo:0.9891, AQo:0.8791, K2s:0.239, K3s:0.3971, K4s:0.0951, K5s:0.4667, K6s:0.5691, K7s:0.2678, K8s:0.5058, K9s:0.5663, KTs:0.7161, KJs:0.0734, KQs:0.9953, KK:0.7831, AKo:0.8737, A2s:0.6504, A3s:0.8101, A4s:0.549, A5s:0.6734, A6s:0.4241, A7s:0.5625, A8s:0.3947, A9s:0.1072, ATs:0.0744, AJs:0.039, AQs:0.9762, AKs:0.9714, AA:0.0089"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.0051, JJ:0.0131, QJs:0.0001, QQ:0.9976, KK, AKo:0.9979, A9s:0.0002, ATs:0.0005, AQs:0.2952, AKs:0.9993, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0471, JJ:0.06, QQ, KK, AKo, AJs:0.0001, AQs:0.8144, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@19|LJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0006, 43s:0.0008, 44:0.0004, Q4o:0.0001, 52s:0.0001, 55:0.0001, 63s:0.0001, 76o:0.0001, K6o:0.0002, A6o:0.0002, 77:0.0008, 83s:0.0002, 84s:0.0008, 86s:0.0002, 87s:0.0041, K8o:0.0001, 92s:0.0002, 96s:0.0032, 99:0.0002, Q9o:0.0001, T3s:0.0001, T9s:0.0001, JTo:0.0001, ATo:0.0021, J2s:0.0001, J7s:0.0001, J8s:0.0001, JTs:0.0001, JJ:0.0391, QJo:0.0001, KJo:0.0001, Q2s:0.0004, Q3s:0.0003, Q4s:0.0001, Q5s:0.0003, Q9s:0.0004, QTs:0.0129, QJs:0.0002, QQ:0.0404, AQo:0.0016, K4s:0.0003, K6s:0.003, K7s:0.0002, K8s:0.0004, K9s:0.0005, KTs:0.0008, KK:0.0137, A3s:0.0275, A4s:0.0066, A5s:0.0041, A7s:0.0005, A8s:0.0536, A9s:0.002, ATs:0.0328, AJs:0.0064, AQs:0.0075, AKs:0.0001, AA:0.151"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.047, A2o:0.4427, 32s:0.0028, 33:0.3562, T3o:0.0001, K3o:0.0009, A3o:0.2019, 42s:0.101, 43s:0.0005, 44:0.4729, 64o:0.0007, 84o:0.0008, Q4o:0.0001, A4o:0.4699, 52s:0.0001, 54s:0.4073, 55:0.0853, 65o:0.0001, K5o:0.0003, A5o:0.2182, 62s:0.0017, 63s:0.0126, 64s:0.0002, 65s:0.0976, 66:0.9487, A6o:0.3145, 72s:0.0017, 73s:0.1853, 74s:0.4016, 75s:0.0736, 76s:0.4241, 77:0.3882, J7o:0.0001, A7o:0.0861, 82s:0.0021, 83s:0.0023, 84s:0.0002, 85s:0.0002, 86s:0.0429, 87s:0.0173, 88:0.0843, A8o:0.2778, 92s:0.0078, 93s:0.0751, 94s:0.0004, 95s:0.0406, 96s:0.0986, 97s:0.024, 98s:0.042, 99:0.1002, Q9o:0.0001, K9o:0.0059, A9o:0.1983, T3s:0.003, T6s:0.032, T7s:0.0011, T8s:0.0073, T9s:0.0024, TT:0.2901, KTo:0.0005, ATo:0.4232, J2s:0.0001, J5s:0.0042, J6s:0.0126, J9s:0.1123, QJo:0.0001, AJo:0.2259, Q2s:0.0052, Q3s:0.0066, Q4s:0.0039, Q5s:0.0029, Q7s:0.0048, Q8s:0.0091, Q9s:0.0012, QTs:0.1617, QJs:0.0057, QQ:0.6223, KQo:0.0007, AQo:0.2279, K2s:0.0017, K3s:0.2182, K4s:0.0002, K5s:0.0186, K6s:0.0273, K7s:0.0048, K8s:0.0037, K9s:0.0636, KTs:0.0062, KJs:0.0655, KQs:0.0001, KK:0.9863, AKo:0.9998, A2s:0.6127, A3s:0.4989, A4s:0.4159, A5s:0.4336, A6s:0.5574, A7s:0.5481, A8s:0.4976, A9s:0.7839, ATs:0.5965, AJs:0.2338, AQs:0.5031, AKs:0.9983, AA:0.849"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 43s:0.0001, 54s:0.0003, 66:0.0076, 77:0.0005, 88:0.0001, 93s:0.0001, 99:0.003, A9o:0.0001, T4s:0.0001, T6s:0.0003, T8s:0.0007, TT:0.0002, J4s:0.0002, JTs:0.0002, JJ:0.0001, Q3s:0.0002, QTs:0.0004, QQ:0.1828, AQo:0.1175, K3s:0.0001, K4s:0.0001, K5s:0.0003, K7s:0.0031, K8s:0.0009, K9s:0.0013, KQs:0.0008, KK:0.0438, A4s:0.0001, A5s:0.0243, A6s:0.0026, A7s:0.0008, A8s:0.0108, A9s:0.0442, ATs:0.1856, AJs:0.0705, AQs:0.0556, AKs:0.0008, AA:0.2078"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0724, K2o:0.0013, A2o:0.0047, 32s:0.0001, 33:0.0826, Q3o:0.0016, K3o:0.0015, A3o:0.0041, 43s:0.0005, 44:0.0321, K4o:0.001, A4o:0.0018, 52s:0.0019, 53s:0.0001, 54s:0.001, 55:0.1183, 65o:0.0014, K5o:0.0001, A5o:0.0478, 62s:0.0017, 63s:0.0031, 65s:0.0039, 66:0.1942, K6o:0.0001, A6o:0.0077, 73s:0.0014, 74s:0.0002, 75s:0.0599, 76s:0.0001, 77:0.2262, K7o:0.0007, A7o:0.0407, 83s:0.0001, 85s:0.0018, 86s:0.0065, 88:0.0944, T8o:0.0007, Q8o:0.0007, K8o:0.002, A8o:0.0008, 92s:0.0003, 93s:0.0001, 96s:0.0005, 97s:0.0003, 98s:0.0022, 99:0.0543, K9o:0.0014, A9o:0.0068, T2s:0.0001, T3s:0.0001, T7s:0.0001, T8s:0.0008, T9s:0.0096, TT:0.0765, KTo:0.0017, ATo:0.0044, J2s:0.0001, J3s:0.0007, J4s:0.0004, J5s:0.001, J6s:0.0002, J8s:0.0001, J9s:0.0023, JJ:0.4789, QJo:0.0009, KJo:0.0016, AJo:0.1108, Q3s:0.0001, Q5s:0.0021, Q6s:0.0001, Q7s:0.002, Q8s:0.0002, Q9s:0.0001, QTs:0.0024, QJs:0.0031, QQ:0.6278, KQo:0.0023, AQo:0.1835, K2s:0.0025, K3s:0.0039, K4s:0.0066, K5s:0.0022, K6s:0.0023, K7s:0.0009, K8s:0.0035, K9s:0.0002, KTs:0.0019, KJs:0.0567, KQs:0.0321, KK:0.9562, AKo, A2s:0.3607, A3s:0.1664, A4s:0.3026, A5s:0.2119, A6s:0.3332, A7s:0.2707, A8s:0.2927, A9s:0.141, ATs:0.2136, AJs:0.4001, AQs:0.5037, AKs:0.9991, AA:0.7922"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|BTN:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 44:0.0002, K4o:0.0001, 54s:0.0001, 55:0.0009, 63s:0.0001, 65s:0.0004, 66:0.0008, 77:0.0007, 85s:0.0001, 86s:0.0001, 87s:0.0001, 88:0.0023, Q8o:0.0001, 98s:0.0001, 99:0.003, T2s:0.0005, T3s:0.0001, T4s:0.0002, T5s:0.0001, T8s:0.0001, T9s:0.0001, TT:0.0055, JTs:0.0022, JJ:0.9022, QJo:0.0001, AJo:0.0023, QQ, AQo:0.3055, K5s:0.0001, K8s:0.0004, KTs:0.0011, KJs:0.0014, KQs:0.0001, KK, AKo:0.7023, A3s:0.0004, A7s:0.0006, ATs:0.0002, AJs:0.0211, AQs:0.8892, AKs:0.2098, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "98s:0.0001, KK:0.7433, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0003, 44:0.0008, 64s:0.0001, 66:0.0001, 73s:0.0004, 75s:0.0001, 77:0.0002, 86s:0.001, 88:0.0002, 99:0.005, A9o:0.0001, TT:0.0729, ATo:0.0014, J3s:0.0005, J9s:0.0001, JJ:0.0378, KJo:0.0001, AJo:0.0052, Q3s:0.0001, QJs:0.0003, QQ:0.8953, AQo:0.0025, K3s:0.0003, K4s:0.0003, K5s:0.0003, K8s:0.0005, KTs:0.0003, KQs:0.0003, KK, AKo, A2s:0.0015, A3s:0.0001, A5s:0.0002, A6s:0.0001, A8s:0.001, A9s:0.0004, ATs:0.1038, AJs:0.1152, AQs:0.3785, AKs:0.9987, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|BB:3BET@6|LJ:CALL@4",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0106, 32o:0.0001, 52o:0.0001, 62o:0.0001, 72o:0.0002, K2o:0.0003, A2o:0.0002, 32s:0.0006, 33:0.0007, 53o:0.0002, 83o:0.0007, T3o:0.0001, J3o:0.0011, Q3o:0.0001, K3o:0.0014, A3o:0.0001, 43s:0.0053, 54o:0.0006, 64o:0.0005, 74o:0.0022, 94o:0.0001, J4o:0.0026, Q4o:0.0008, K4o:0.0002, A4o:0.0002, 52s:0.0002, 53s:0.0001, 54s:0.0013, 55:0.0002, 65o:0.0002, 85o:0.0001, T5o:0.0001, Q5o:0.0001, K5o:0.0001, 62s:0.0001, 63s:0.0003, 64s:0.0089, 65s:0.005, 66:0.0003, 76o:0.0002, 86o:0.0008, 96o:0.0001, T6o:0.0013, J6o:0.0007, Q6o:0.0003, K6o:0.0001, 73s:0.0024, 74s:0.0001, 75s:0.001, 76s:0.0065, 77:0.0036, 87o:0.0004, T7o:0.004, Q7o:0.0001, K7o:0.0004, A7o:0.0004, 82s:0.0002, 83s:0.0005, 84s:0.0012, 85s:0.0001, 86s:0.0011, 87s:0.0009, 88:0.0034, 98o:0.0039, T8o:0.0001, J8o:0.0002, K8o:0.0035, 92s:0.0001, 93s:0.0001, 94s:0.0079, 95s:0.0007, 96s:0.0221, 97s:0.0005, 98s:0.0006, 99:0.0013, T9o:0.0005, J9o:0.0002, Q9o:0.0008, K9o:0.0014, A9o:0.0001, T3s:0.0095, T5s:0.0016, T6s:0.001, T7s:0.0043, T8s:0.0031, T9s:0.0225, TT:0.0017, JTo:0.0021, QTo:0.0028, KTo:0.0019, ATo:0.0028, J2s:0.0007, J3s:0.0043, J4s:0.0005, J5s:0.0141, J6s:0.0004, J7s:0.001, J8s:0.0001, J9s:0.001, JTs:0.0188, JJ:0.0227, KJo:0.0001, AJo:0.001, Q2s:0.0009, Q3s:0.0216, Q4s:0.0015, Q5s:0.0007, Q6s:0.0017, Q7s:0.001, Q8s:0.0018, Q9s:0.0288, QTs:0.0329, QJs:0.0039, QQ:0.0136, KQo:0.0002, AQo:0.0004, K2s:0.0004, K3s:0.0002, K4s:0.0004, K5s:0.0082, K6s:0.0005, K7s:0.0134, K9s:0.001, KTs:0.001, KJs:0.0003, KQs:0.0159, KK:0.0224, AKo:0.0003, A2s:0.0003, A3s:0.0213, A4s:0.0367, A5s:0.0052, A6s:0.0484, A7s:0.0001, A8s:0.0016, A9s:0.195, ATs:0.0086, AJs:0.1227, AQs:0.0586, AKs:0.2295, AA:0.0012"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0028, 32o:0.0001, 42o:0.0001, 52o:0.0007, 62o:0.0016, 72o:0.0001, 92o:0.0004, T2o:0.0004, Q2o:0.0002, K2o:0.0007, A2o:0.0003, 32s:0.0009, 33:0.0007, 43o:0.0001, 73o:0.0006, 83o:0.0003, T3o:0.0001, J3o:0.0003, Q3o:0.0017, K3o:0.0003, A3o:0.0013, 43s:0.0005, 44:0.0197, 54o:0.002, 74o:0.002, 94o:0.0001, J4o:0.0001, Q4o:0.0006, K4o:0.0001, A4o:0.0004, 52s:0.0001, 53s:0.0008, 54s:0.0039, 55:0.0058, 65o:0.0008, 75o:0.0007, T5o:0.0008, J5o:0.0015, Q5o:0.0025, K5o:0.0002, A5o:0.002, 62s:0.0003, 63s:0.0013, 64s:0.0018, 65s:0.0003, 66:0.0025, 76o:0.0007, 86o:0.0016, 96o:0.0012, J6o:0.0017, Q6o:0.0001, K6o:0.0014, A6o:0.0005, 72s:0.0005, 73s:0.0052, 75s:0.0009, 76s:0.0015, 77:0.0032, 87o:0.0008, 97o:0.0002, T7o:0.0021, J7o:0.0018, Q7o:0.0031, K7o:0.0106, A7o:0.0005, 82s:0.0004, 83s:0.0001, 84s:0.0026, 85s:0.0222, 86s:0.0005, 87s:0.0017, 88:0.0046, T8o:0.0003, J8o:0.0001, K8o:0.0009, A8o:0.0031, 92s:0.0015, 93s:0.0116, 94s:0.0007, 95s:0.0007, 96s:0.005, 97s:0.0009, 98s:0.0096, 99:0.0152, T9o:0.0001, J9o:0.0027, Q9o:0.0017, K9o:0.0007, A9o:0.0004, T2s:0.001, T3s:0.0011, T4s:0.0008, T5s:0.0002, T6s:0.0035, T7s:0.0007, T8s:0.0023, T9s:0.0008, TT:0.0041, QTo:0.0007, KTo:0.0039, ATo:0.0007, J2s:0.0051, J3s:0.0016, J4s:0.0068, J5s:0.0032, J6s:0.0005, J7s:0.0047, J8s:0.0004, J9s:0.0046, JTs:0.0044, KJo:0.0039, AJo:0.0057, Q2s:0.0019, Q3s:0.0002, Q4s:0.0004, Q5s:0.0031, Q6s:0.0035, Q7s:0.0001, Q8s:0.0002, Q9s:0.0028, QTs:0.0132, QJs:0.0052, QQ:0.1402, AQo:0.0153, K2s:0.0117, K3s:0.0152, K4s:0.0011, K5s:0.025, K6s:0.0069, K7s:0.0018, K8s:0.017, K9s:0.003, KTs:0.0111, KJs:0.0001, KQs:0.0006, KK:0.2407, AKo:0.0104, A2s:0.0073, A3s:0.0247, A4s:0.0001, A5s:0.0162, A7s:0.0036, A8s:0.0055, A9s:0.0002, ATs:0.0111, AJs:0.0407, AQs:0.053, AKs:0.0688, AA:0.9987"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0003, TT:0.0033, QQ:0.9976, AQo:0.0001, KK, AKo:0.9996, A2s:0.0001, A5s:0.0004, AQs:0.1764, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.3596, JJ:0.0762, QQ, AQo:0.0001, KK, AKo:0.9996, AQs:0.3167, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@19|LJ:CALL@17",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0004, 32s:0.0002, 42s:0.0005, 43s:0.0001, 44:0.0003, 53s:0.0004, 55:0.0001, 62s:0.0002, 64s:0.0002, 66:0.0511, 72s:0.0007, 74s:0.0001, 76s:0.0009, 77:0.0001, K7o:0.0007, 83s:0.0003, 86s:0.0002, 87s:0.0001, T8o:0.0001, A8o:0.0001, 93s:0.0001, 94s:0.0002, 96s:0.0004, 99:0.0222, T8s:0.0001, TT:0.0007, KTo:0.0002, ATo:0.0001, J2s:0.0001, J3s:0.0003, J4s:0.0002, J5s:0.0001, JTs:0.0004, JJ:0.0002, QJo:0.0001, AJo:0.2199, Q2s:0.0002, Q5s:0.0001, Q8s:0.0002, Q9s:0.0001, QJs:0.0019, QQ:0.2196, AQo:0.1876, K3s:0.0006, K4s:0.0001, K8s:0.0001, KTs:0.0002, KJs:0.0002, KQs:0.0006, KK:0.0003, AKo:0.1318, A3s:0.3204, A4s:0.0006, A5s:0.0003, A6s:0.114, A7s:0.4688, A9s:0.0497, ATs:0.001, AJs:0.166, AQs:0.5122, AKs:0.0006, AA:0.4664"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0334, A2o:0.053, 32s:0.0007, 33:0.0003, 43o:0.0034, 63o:0.0022, T3o:0.0001, K3o:0.0001, A3o:0.0644, 42s:0.0047, 44:0.0748, 54o:0.0002, 64o:0.0148, A4o:0.188, 52s:0.0632, 53s:0.0309, 54s:0.2222, 55:0.2376, 65o:0.0045, 85o:0.0382, 95o:0.0052, K5o:0.0016, A5o:0.1617, 62s:0.0195, 63s:0.1, 64s:0.0478, 65s:0.0005, 66:0.1624, 86o:0.0178, 96o:0.0221, J6o:0.0001, K6o:0.0001, A6o:0.1713, 72s:0.0237, 73s:0.0671, 74s:0.0128, 76s:0.0796, 77:0.0536, 97o:0.0001, Q7o:0.0001, K7o:0.0126, A7o:0.0185, 82s:0.0224, 83s:0.0089, 84s:0.0128, 85s:0.155, 86s:0.2847, 87s:0.0908, 88:0.0589, 98o:0.0149, T8o:0.0001, Q8o:0.0001, A8o:0.348, 92s:0.0278, 93s:0.0338, 94s:0.0057, 95s:0.066, 96s:0.0571, 97s:0.0815, 98s:0.0073, 99:0.6918, J9o:0.0008, Q9o:0.0001, A9o:0.0033, T3s:0.0062, T4s:0.0138, T6s:0.0088, T7s:0.019, T8s:0.0625, T9s:0.0375, TT:0.0155, ATo:0.0351, J2s:0.0057, J3s:0.0091, J4s:0.0008, J5s:0.0171, J6s:0.0569, J7s:0.1151, J9s:0.0432, JTs:0.0004, JJ:0.0486, QJo:0.0001, KJo:0.0021, AJo:0.0441, Q2s:0.0002, Q3s:0.0269, Q4s:0.0091, Q6s:0.0001, Q7s:0.0452, Q8s:0.0124, Q9s:0.0004, QTs:0.0184, QJs:0.0002, QQ:0.2267, KQo:0.0003, AQo:0.2244, K2s:0.0442, K3s:0.0003, K4s:0.009, K5s:0.1082, K6s:0.0099, K7s:0.0131, K9s:0.0001, KTs:0.0088, KJs:0.0461, KQs:0.0109, KK:0.9419, AKo:0.7629, A2s:0.042, A3s:0.3382, A4s:0.1471, A5s:0.9967, A6s:0.3154, A7s:0.3289, A8s:0.3749, A9s:0.5446, ATs:0.0063, AJs:0.2112, AQs:0.2574, AKs:0.9988, AA:0.5336"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0004, 65s:0.0003, 66:0.0015, 74s:0.0001, 88:0.0035, 98s:0.002, 99:0.1244, A9o:0.0009, T4s:0.0001, TT:0.089, ATo:0.2689, JJ:0.044, AJo:0.1187, Q5s:0.0133, Q9s:0.0003, QTs:0.0011, QQ:0.1335, AQo:0.6986, KTs:0.0002, KQs:0.0115, KK:0.0085, AKo:0.0055, A2s:0.0011, A3s:0.0061, A4s:0.0105, A5s:0.0027, A6s:0.0113, A7s:0.0322, A8s:0.5786, A9s:0.341, ATs:0.1268, AJs:0.0563, AQs:0.7507, AKs:0.0462, AA:0.9032"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0322, 32o:0.0002, 52o:0.0002, K2o:0.0001, A2o:0.0681, 32s:0.0002, 33:0.2315, 43o:0.0001, K3o:0.0002, A3o:0.2247, 42s:0.0009, 43s:0.0176, 44:0.1233, 64o:0.0001, K4o:0.0001, A4o:0.1897, 52s:0.0002, 53s:0.0139, 54s:0.0007, 55:0.1682, K5o:0.0003, A5o:0.1581, 63s:0.0002, 64s:0.0579, 65s:0.0282, 66:0.3515, 76o:0.0002, Q6o:0.0002, K6o:0.0002, A6o:0.0166, 72s:0.0004, 74s:0.0003, 75s:0.0003, 76s:0.0924, 77:0.1719, 97o:0.0001, K7o:0.0001, A7o:0.0145, 82s:0.0002, 83s:0.0001, 85s:0.0136, 86s:0.0004, 87s:0.0144, 88:0.0494, Q8o:0.0001, K8o:0.0002, A8o:0.0578, 92s:0.0002, 93s:0.0003, 94s:0.0002, 95s:0.0002, 96s:0.0004, 97s:0.0014, 98s:0.0226, 99:0.0461, T9o:0.0001, Q9o:0.0001, K9o:0.0001, A9o:0.0709, T3s:0.0001, T4s:0.0102, T5s:0.0001, T6s:0.0005, T7s:0.0587, T8s:0.0115, T9s:0.0508, TT:0.1136, JTo:0.0001, KTo:0.0002, ATo:0.1085, J3s:0.0001, J5s:0.003, J8s:0.0003, J9s:0.0004, JTs:0.0001, JJ:0.1225, KJo:0.0001, AJo:0.0098, Q2s:0.0061, Q3s:0.0079, Q4s:0.0135, Q5s:0.0111, Q6s:0.0236, Q7s:0.006, Q8s:0.0025, Q9s:0.0265, QTs:0.0776, QJs:0.0493, QQ:0.8476, KQo:0.0005, AQo:0.2171, K2s:0.0011, K3s:0.0005, K4s:0.0133, K5s:0.001, K6s:0.0002, K7s:0.011, K8s:0.025, K9s:0.0175, KTs:0.0006, KJs:0.0001, KQs:0.3111, KK:0.9915, AKo:0.9945, A2s:0.6341, A3s:0.4293, A4s:0.837, A5s:0.4456, A6s:0.717, A7s:0.2604, A8s:0.2001, A9s:0.4108, ATs:0.6248, AJs:0.4508, AQs:0.242, AKs:0.9538, AA:0.0968"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|BTN:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 52s:0.0001, 63s:0.0001, 64s:0.0001, 66:0.0008, 73s:0.0001, 77:0.0199, 82s:0.0001, 83s:0.0001, 85s:0.0003, 87s:0.0027, 88:0.0001, 93s:0.0002, T2s:0.0001, T5s:0.0001, TT:0.001, JJ:0.1628, KJo:0.0001, Q7s:0.0004, Q9s:0.0001, QTs:0.0002, QJs:0.0001, QQ, AQo:0.8005, K6s:0.0003, KTs:0.0005, KJs:0.0087, KQs:0.0001, KK, AKo:0.792, A5s:0.0024, A7s:0.0001, A9s:0.0001, ATs:0.0002, AJs:0.0051, AQs:0.9066, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "93s:0.0001, 95s:0.0001, 97s:0.0001, TT:0.0001, JTs:0.0002, QQ:0.0002, KK:0.1695, AKo:0.0001, A2s:0.0001, AJs:0.0006, AQs:0.0001, AKs:0.0244, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0007, 52s:0.0005, 55:0.0008, 64s:0.0001, 65s:0.0001, 66:0.0005, 77:0.0719, 86s:0.0002, 88:0.0011, A8o:0.0001, 92s:0.0002, 94s:0.0002, 99:0.6397, T5s:0.0002, T8s:0.0001, TT:0.7399, ATo:0.0001, J3s:0.0003, J4s:0.0001, J7s:0.0001, J9s:0.0002, JJ:0.7362, QQ:0.9513, KQo:0.0001, AQo:0.2961, K9s:0.0001, KJs:0.0003, KK, AKo, A2s:0.0028, A3s:0.0003, A5s:0.0001, A6s:0.001, A7s:0.0002, A8s:0.0001, A9s:0.0013, ATs:0.0071, AJs:0.0007, AQs:0.3516, AKs:0.9991, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|BTN:CALL@2|SB:3BET@6|LJ:CALL@4",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0003, 43s:0.0003, 84o:0.0001, A4o:0.0002, 54s:0.0003, 63s:0.0001, 64s:0.0001, 65s:0.0006, 72s:0.0011, 74s:0.0001, 75s:0.0005, 87o:0.0001, T7o:0.0002, 82s:0.0002, 83s:0.0002, 85s:0.0001, 87s:0.0035, 88:0.0001, K8o:0.0001, 92s:0.0001, 93s:0.0001, 95s:0.0003, 97s:0.0001, 98s:0.0001, 99:0.0003, T9o:0.0002, Q9o:0.0002, K9o:0.0001, T4s:0.0002, T6s:0.0011, T8s:0.0003, T9s:0.0008, TT:0.0002, QTo:0.0002, J3s:0.0001, J4s:0.0089, J5s:0.0007, J6s:0.0005, J8s:0.0004, J9s:0.0017, JTs:0.0002, JJ:0.0005, AJo:0.0003, Q2s:0.0001, Q3s:0.0001, Q6s:0.0015, Q7s:0.0002, Q8s:0.0001, Q9s:0.0001, QTs:0.0005, QJs:0.0001, QQ:0.3497, KQo:0.0006, K4s:0.0001, K5s:0.0001, K6s:0.0023, KJs:0.0001, KK:0.0036, AKo:0.0001, A2s:0.0014, A3s:0.0002, A4s:0.0001, A5s:0.0001, A8s:0.0013, A9s:0.0058, ATs:0.0028, AJs:0.0003, AQs:0.0052, AA:0.0053"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2277, 33:0.1904, J3o:0.0001, A3o:0.0422, 42s:0.0004, 43s:0.0001, K4o:0.0001, A4o:0.1941, 52s:0.0003, 54s:0.0002, 55:0.0333, J5o:0.0001, A5o:0.3164, 62s:0.0106, 64s:0.1384, 65s:0.0003, 66:0.3165, A6o:0.1272, 72s:0.0001, 74s:0.0389, 75s:0.0002, 76s:0.0001, 77:0.0923, 97o:0.0001, Q7o:0.0001, A7o:0.0215, 83s:0.0825, 85s:0.3435, 86s:0.0003, 87s:0.0004, 88:0.1486, J8o:0.0004, A8o:0.3015, 92s:0.0003, 93s:0.0672, 95s:0.0001, 97s:0.0003, 98s:0.0001, T9o:0.0001, A9o:0.1157, T4s:0.0001, T6s:0.0002, T7s:0.0659, T8s:0.0002, T9s:0.4145, TT:0.2663, JTo:0.0001, ATo:0.0001, J3s:0.0001, J6s:0.0004, J7s:0.0002, JTs:0.0001, JJ:0.0001, AJo:0.0001, Q2s:0.0004, Q5s:0.0937, Q6s:0.0002, Q7s:0.0454, Q9s:0.0002, QJs:0.0006, QQ:0.0001, KQo:0.0005, AQo:0.0011, K3s:0.0002, K7s:0.0001, K9s:0.1928, KTs:0.0288, KJs:0.0003, KQs:0.0004, KK:0.445, AKo:0.6256, A2s:0.0017, A3s:0.1226, A4s:0.4176, A5s:0.4434, A6s:0.1989, A7s:0.1767, A8s:0.2561, A9s:0.1575, ATs:0.0842, AJs:0.1479, AQs:0.1247, AKs:0.6553, AA:0.9947"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AKo, AQs:0.4359, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0631, KK, AKo:0.9233, AKs:0.9977, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.2154, KK, AKo:0.9962, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19|BB:CALL@18",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19|BTN:CALL@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@19|SB:CALL@18.5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0078, A2o:0.0011, 33:0.0076, A3o:0.0176, 44:0.718, A4o:0.0023, 55:0.9901, A5o:0.4843, 64s:0.0354, 65s:0.6442, 66:0.9362, A6o:0.0001, 75s:0.001, 76s:0.2899, 77:0.9093, A7o:0.0002, 86s:0.2037, 87s:0.0356, 88:0.5963, A8o:0.0002, 96s:0.0006, 97s:0.001, 98s:0.0097, 99:0.1309, A9o:0.0002, T7s:0.0001, T8s:0.0005, T9s:0.0453, TT:0.2697, ATo:0.0346, JTs:0.0001, JJ:0.9531, AJo:0.4234, QJs:0.0293, QQ:0.0974, AQo:0.0722, K9s:0.033, KTs:0.0052, KJs:0.0023, KQs:0.2877, KK:0.0017, A2s:0.0002, A3s:0.0009, A4s:0.0113, A5s:0.0055, A7s:0.002, A8s:0.0078, A9s:0.0003, ATs:0.1146, AJs:0.7864, AQs:0.2254, AA:0.4449"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1971, A2o:0.2689, 33:0.0226, A3o:0.1255, 44:0.0192, A4o:0.256, 55:0.0002, A5o:0.158, 63s:0.0001, 64s:0.0073, 65s:0.0814, 66:0.0605, A6o:0.2955, 76s:0.6784, 77:0.0877, A7o:0.3654, 82s:0.0001, 85s:0.0001, 86s:0.4351, 87s:0.8856, 88:0.3902, A8o:0.36, 96s:0.0005, 97s:0.5326, 98s:0.3181, 99:0.8036, A9o:0.1757, T8s:0.0182, T9s:0.2014, TT:0.1635, ATo:0.3863, J7s:0.0001, J8s:0.0001, J9s:0.0016, JJ:0.0015, AJo:0.1042, Q2s:0.0002, Q7s:0.0001, Q8s:0.0001, QTs:0.0002, QQ:0.9014, KQo:0.0001, AQo:0.9278, K2s:0.0001, K4s:0.0004, K6s:0.0001, K7s:0.0001, K8s:0.0003, K9s:0.0161, KTs:0.0348, KJs:0.0115, KQs:0.0622, KK:0.9983, AKo, A2s:0.9983, A3s:0.9931, A4s:0.988, A5s:0.9945, A6s:0.999, A7s:0.9973, A8s:0.9922, A9s:0.9966, ATs:0.8839, AJs:0.2133, AQs:0.7746, AKs, AA:0.5551"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0064, 33:0.0001, A3o:0.0004, 42s:0.0012, A4o:0.113, A7o:0.0733, 86s:0.0017, 98s:0.0003, T7s:0.0014, ATo:0.0475, JTs:0.0028, Q2s:0.0001, Q7s:0.0001, QQ:0.015, AQo:0.0651, K6s:0.0001, KK:0.9927, AKo:0.999, A2s:0.2887, A3s:0.0946, A4s:0.4101, A5s:0.6143, A6s:0.4808, A7s:0.393, A8s:0.2872, A9s:0.5403, ATs:0.2737, AJs:0.0055, AQs:0.8932, AKs:0.999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0007, A4o:0.001, A5o:0.0093, 65s:0.0003, 76s:0.003, A7o:0.0036, 84s:0.0001, 88:0.0003, A8o:0.014, 96s:0.0001, 98s:0.0079, T5s:0.0006, T6s:0.0001, T9s:0.0032, ATo:0.0008, J4s:0.0001, J9s:0.0002, JJ:0.0001, AJo:0.0007, Q3s:0.0004, Q9s:0.0002, QQ:0.0113, AQo:0.0311, K5s:0.0002, KJs:0.0009, KK, AKo:0.999, A2s:0.4405, A3s:0.0956, A4s:0.3633, A5s:0.4978, A6s:0.1407, A7s:0.6014, A8s:0.731, A9s:0.7681, ATs:0.8376, AJs:0.671, AQs:0.8423, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.033, 33:0.001, A4o:0.0016, 54s:0.0005, A6o:0.0004, 75s:0.0086, 76s:0.0215, 77:0.0004, A7o:0.0305, 82s:0.0001, 87s:0.0004, A8o:0.0026, 97s:0.0007, 98s:0.0001, A9o:0.0001, T9s:0.0011, JJ:0.0002, AJo:0.0003, Q9s:0.0002, QTs:0.0007, QQ:0.0117, AQo:0.0755, K7s:0.0002, K8s:0.0003, KTs:0.0005, KQs:0.0122, KK, AKo:0.9997, A2s:0.5752, A3s:0.0478, A4s:0.3145, A5s:0.1841, A6s:0.6618, A7s:0.6427, A8s:0.9317, A9s:0.4444, ATs:0.3823, AJs:0.1144, AQs:0.95, AKs:0.9977, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, AJo:0.0001, QQ:0.0002, KK:0.7043, AKo:0.0001, A8s:0.0001, ATs:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.012, 66:0.0006, 77:0.0235, 88:0.1113, 99:0.1537, TT:0.6825, JJ:0.9083, AJo:0.0001, QQ, AQo:0.0019, KK, AKo, ATs:0.0001, AJs:0.0045, AQs:0.0181, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BB:4BET@19|LJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "85s:0.0001, 88:0.0001, T4s:0.0001, JJ:0.0001, AQo:0.0001, K9s:0.0001, KK:0.0013, A2s:0.0001, A5s:0.0001, A6s:0.0001, A9s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, ATo:0.0001, JJ:0.0001, QQ:0.0015, AQo:0.0001, KK:0.8213, A8s:0.0001, ATs:0.0005, AQs:0.0001, AKs:0.75, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0082, 66:0.0129, 77:0.0134, 88:0.4429, 99:0.5448, TT:0.7712, JJ:0.8154, QQ:0.927, KK, AKo:0.9998, A3s:0.0001, ATs:0.0043, AQs:0.001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|BTN:4BET@19|LJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q3s:0.0001, QQ:0.0001, K2s:0.0001, KJs:0.0002, KQs:0.0001, KK:0.0006, A3s:0.0001, ATs:0.0002, AQs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0003, K5s:0.0001, KK:0.6242, AKs:0.2302, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0025, 66:0.0003, 77:0.0041, 88:0.0623, 99:0.2541, TT:0.9998, JJ, QQ, AQo:0.0024, KJs:0.0001, KQs:0.0001, KK, AKo:0.9996, AJs:0.0002, AQs:0.0027, AKs:0.9996, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|SB:4BET@19|LJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 63s:0.0001, 76s:0.0001, 87s:0.0003, 95s:0.0002, 98s:0.0002, 99:0.0001, Q2s:0.0001, KQs:0.0003, KK:0.0002, A3s:0.0001, A4s:0.0001, A9s:0.0003, AQs:0.0001, AKs:0.0015, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:3BET@5|LJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ, AQo:0.3333, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "22:0.0162, 33:0.0101, 43s:0.0003, 55:0.1641, 62s:0.0012, 65s:0.0003, 77:0.0003, 88:0.1611, TT:0.0097, J7s:0.0001, JTs:0.0093, JJ:0.1683, QJs:0.0001, QQ:0.0217, AQo:0.008, K8s:0.001, KQs:0.0009, KK:0.0033, A3s:0.0014, A5s:0.0003, A9s:0.0008, AJs:0.003, AQs:0.281, AKs:0.0263"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0022, Q3o:0.0633, 44:0.0003, A4o:0.0404, A5o:0.0087, 62s:0.0009, Q6o:0.004, A6o:0.0016, 76s:0.0003, A7o:0.0101, 82s:0.0059, 85s:0.0024, 92s:0.0004, 93s:0.0003, 94s:0.0002, 98s:0.0013, Q9o:0.0091, T6s:0.0005, T7s:0.0005, T9s:0.0001, KTo:0.0067, J5s:0.0001, J7s:0.0021, J8s:0.0012, JTs:0.0001, JJ:0.0115, KJo:0.0015, AJo:0.0007, Q2s:0.0137, Q7s:0.0265, Q9s:0.0222, QTs:0.0079, QJs:0.0025, QQ:0.2888, KQo:0.0001, AQo:0.3261, K2s:0.0294, K3s:0.0003, K4s:0.0007, K5s:0.0002, K8s:0.0008, KTs:0.0002, KJs:0.0016, KK:0.0008, AKo:0.0385, A2s:0.2621, A3s:0.2595, A4s:0.1886, A6s:0.1486, A7s:0.1271, A8s:0.0195, A9s:0.0361, ATs:0.2605, AJs:0.0058, AQs:0.1552, AKs:0.1963, AA:0.9959"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0001, 43s:0.0126, 52s:0.0002, 62s:0.0121, 65s:0.0089, 76s:0.0017, A7o:0.0001, 85s:0.0013, 87s:0.0021, 88:0.0217, T7s:0.0007, T9s:0.0044, J5s:0.0002, J7s:0.0036, JTs:0.0012, JJ:0.0014, KJo:0.0069, Q4s:0.0141, Q5s:0.0041, Q6s:0.0007, Q7s:0.0057, Q8s:0.0653, Q9s:0.0101, QJs:0.0357, QQ:0.6895, KQo:0.9946, AQo:0.5253, K2s:0.2164, K3s:0.0155, K4s:0.1658, K5s:0.1301, K6s:0.0566, K7s:0.9279, K8s:0.2598, K9s:0.0139, KTs:0.4914, KJs:0.0008, KQs:0.9965, KK:0.9958, AKo:0.9611, A2s:0.0329, A3s:0.0569, A4s:0.141, A5s:0.0065, A6s:0.0017, A7s:0.1567, A8s:0.1425, A9s:0.0048, AJs:0.0125, AQs:0.5233, AKs:0.7737, AA:0.0041"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.2046, 43s:0.0003, 44:0.0264, 52s:0.0001, 55:0.0135, 66:0.5488, 74s:0.0025, 76s:0.0023, 77:0.0177, 84s:0.0002, 87s:0.0613, 88:0.469, 99:0.0302, T5s:0.0004, TT:0.0034, JTs:0.0001, JJ:0.5279, Q5s:0.0007, QTs:0.0014, QJs:0.1724, QQ:0.0008, AQo:0.0016, K2s:0.0003, K3s:0.0112, K6s:0.0038, K7s:0.0025, K8s:0.0337, K9s:0.0002, KTs:0.0102, KJs:0.0539, KQs:0.0001, KK:0.0003, AKo:0.007, A2s:0.0007, A9s:0.0008, AJs:0.3981, AQs:0.0979, AKs:0.0005, AA:0.0002"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "J2o:0.0003, Q2o:0.0186, K2o:0.0065, 32s:0.0031, Q3o:0.0204, K3o:0.043, A3o:0.0363, 42s:0.0079, Q4o:0.0265, A4o:0.0406, 54s:0.0003, 55:0.0057, Q5o:0.0003, K5o:0.0137, Q6o:0.0098, K6o:0.009, A6o:0.0007, 74s:0.0033, 75s:0.0066, 76s:0.0001, Q7o:0.0197, K7o:0.0001, A7o:0.0519, 82s:0.0001, 84s:0.0079, 85s:0.0013, 86s:0.0001, 87s:0.0019, 88:0.0069, J8o:0.0001, Q8o:0.0134, K8o:0.0529, 93s:0.0239, 95s:0.0016, 97s:0.0011, 99:0.0005, Q9o:0.01, K9o:0.0099, A9o:0.0034, T9s:0.0039, TT:0.0764, QTo:0.0725, KTo:0.0574, J4s:0.0001, J5s:0.0007, J8s:0.0544, JJ:0.0431, QJo:0.0016, AJo:0.0212, Q2s:0.023, Q3s:0.0222, Q4s:0.037, Q5s:0.0423, Q6s:0.0253, Q7s:0.0148, Q8s:0.0318, Q9s:0.015, QTs:0.0312, QQ:0.4572, KQo:0.0038, AQo:0.1929, K2s:0.0095, K3s:0.0262, K4s:0.0478, K5s:0.0047, K6s:0.0234, K7s:0.0564, K8s:0.0194, K9s:0.0165, KTs:0.0842, KJs:0.0422, KK:0.0301, AKo:0.1924, A2s:0.0468, A3s:0.234, A4s:0.0333, A5s:0.0001, A7s:0.0685, A8s:0.051, A9s:0.0184, ATs:0.0038, AJs:0.0698, AQs:0.0698, AKs:0.3179, AA:0.9982"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0018, 32s:0.0032, 43s:0.0087, 54s:0.0002, 55:0.0073, K5o:0.0075, A5o:0.0003, 65s:0.0018, 66:0.0001, 74s:0.0014, 76s:0.0005, 84s:0.0001, 88:0.0002, K8o:0.0001, 95s:0.002, K9o:0.0444, T8s:0.0005, TT:0.0053, JJ:0.0003, KJo:0.0016, Q3s:0.0168, Q4s:0.0658, Q5s:0.0267, Q6s:0.0222, Q7s:0.0551, Q8s:0.0044, Q9s:0.0397, QTs:0.0799, QJs:0.0062, QQ:0.5418, KQo:0.9873, AQo:0.7095, K2s:0.2259, K3s:0.0912, K4s:0.3948, K5s:0.1806, K6s:0.4613, K7s:0.3318, K8s:0.2316, K9s:0.4645, KTs:0.4149, KJs:0.0332, KQs:0.9985, KK:0.9696, AKo:0.7999, A2s:0.6772, A3s:0.2818, A4s:0.0088, A5s:0.1107, A6s:0.0369, A7s:0.0303, A8s:0.167, A9s:0.0016, ATs:0.1182, AJs:0.0144, AQs:0.8282, AKs:0.6791, AA:0.0016"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.954, 33:0.992, 43s:0.1794, 44:0.9306, 52s:0.0393, 53s:0.1203, 54s:0.5106, 55:0.9933, 63s:0.0009, 64s:0.1415, 65s:0.1095, 66:0.8223, 73s:0.0005, 74s:0.0056, 76s:0.8059, 77:0.8982, 85s:0.0194, 86s:0.4451, 87s:0.0002, 88:0.626, 93s:0.0004, 96s:0.0003, 97s:0.1628, 98s:0.1369, 99:0.574, T2s:0.0001, T6s:0.007, T7s:0.0012, T8s:0.3192, T9s:0.0632, TT:0.6493, J2s:0.0001, J3s:0.0001, J5s:0.0073, J6s:0.0004, J7s:0.0001, J8s:0.069, JTs:0.105, JJ:0.9886, Q3s:0.0009, Q4s:0.0009, Q5s:0.0018, Q8s:0.0083, Q9s:0.5165, QJs:0.1165, QQ:0.0027, AQo:0.151, K2s:0.0082, K3s:0.0145, K4s:0.0001, K5s:0.2416, K7s:0.2892, K8s:0.0556, K9s:0.1283, KTs:0.2155, KJs:0.8876, KQs:0.0036, KK:0.0001, AKo:0.0444, A2s:0.0002, A3s:0.0092, A4s:0.0214, A5s:0.5701, A6s:0.0016, A7s:0.1825, A8s:0.214, A9s:0.0652, ATs:0.3365, AJs:0.9631, AQs:0.1226, AKs:0.0213, AA:0.0004"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "K2o:0.0235, Q3o:0.0037, K3o:0.0077, A3o:0.1545, Q4o:0.002, K4o:0.0007, A4o:0.1145, 53s:0.0062, 55:0.0001, Q5o:0.0142, K5o:0.0001, K6o:0.0003, A6o:0.1219, 75s:0.0001, Q7o:0.0005, A7o:0.1287, 83s:0.0141, 85s:0.0245, 86s:0.0004, 92s:0.0001, 94s:0.0209, 99:0.0003, Q9o:0.011, K9o:0.0019, A9o:0.0771, T5s:0.0013, T6s:0.0022, T8s:0.0046, T9s:0.001, QTo:0.0014, KTo:0.0089, ATo:0.0003, JTs:0.0001, JJ:0.0033, AJo:0.0024, Q2s:0.0185, Q3s:0.2259, Q4s:0.0014, Q5s:0.0001, Q6s:0.1108, Q7s:0.0006, Q8s:0.0231, QTs:0.0166, QJs:0.0385, QQ:0.3053, KQo:0.0006, AQo:0.2144, K2s:0.032, K3s:0.0092, K5s:0.0401, K7s:0.0015, K8s:0.0094, K9s:0.0452, KTs:0.0424, KK:0.0752, AKo:0.0762, A2s:0.2613, A3s:0.1853, A4s:0.1231, A5s:0.0008, A6s:0.0094, A7s:0.0004, A8s:0.0275, A9s:0.1444, ATs:0.0649, AJs:0.0113, AQs:0.1489, AKs:0.654, AA:0.9929"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, K2o:0.0242, K3o:0.0236, A3o:0.0059, K4o:0.0019, 53s:0.0021, 54s:0.0014, K5o:0.1073, A5o:0.0099, 64s:0.0008, 65s:0.0013, 66:0.0025, K6o:0.0072, 75s:0.0024, 76s:0.0021, 77:0.0009, K7o:0.0225, 82s:0.0001, 85s:0.0001, 86s:0.001, 95s:0.0002, 96s:0.0005, 97s:0.0004, T8s:0.0081, KTo:0.0005, JTs:0.0028, JJ:0.0008, KJo:0.0011, Q3s:0.0263, Q4s:0.0791, Q5s:0.0278, Q6s:0.0682, Q8s:0.0001, Q9s:0.0951, QTs:0.0039, QJs:0.0005, QQ:0.6918, KQo:0.9964, AQo:0.5717, K2s:0.2186, K3s:0.6998, K4s:0.4214, K5s:0.1199, K6s:0.2256, K7s:0.2025, K8s:0.0927, K9s:0.6079, KTs:0.337, KJs:0.027, KQs:0.9951, KK:0.9247, AKo:0.8783, A2s:0.1772, A3s:0.177, A4s:0.2436, A5s:0.0125, A6s:0.0005, A7s:0.0363, A8s:0.0006, A9s:0.2295, ATs:0.1062, AJs:0.0014, AQs:0.7252, AKs:0.3246, AA:0.0067"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0008, 84s:0.0001, TT:0.0001, JTs:0.0001, JJ:0.014, QQ:0.6632, AQo:0.0001, K9s:0.0001, KQs:0.0002, KK, AKo:0.9897, A7s:0.0005, A8s:0.0001, A9s:0.0022, AQs:0.0206, AKs:0.9965, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0318, JJ:0.0877, QQ, KK, AKo:0.9993, AJs:0.0001, AQs:0.0127, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@19|LJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0006, A5s:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0007, K5o:0.0001, A5o:0.0001, 62s:0.0001, 63s:0.0008, 74s:0.0001, 77:0.0001, 82s:0.0002, 87s:0.0001, 88:0.0006, A8o:0.0001, 93s:0.0002, 94s:0.0003, 96s:0.0001, T3s:0.0001, T9s:0.0034, TT:0.003, J2s:0.0004, J3s:0.0001, JTs:0.0001, JJ:0.0005, Q3s:0.0001, Q7s:0.0045, Q8s:0.0071, QJs:0.0054, QQ:0.052, AQo:0.0042, K3s:0.003, K4s:0.0001, K6s:0.0004, K7s:0.0003, K8s:0.0011, K9s:0.0004, KQs:0.0058, KK:0.0015, AKo:0.0011, A2s:0.0002, A3s:0.0001, A4s:0.0004, A5s:0.001, A6s:0.0001, A7s:0.0545, A8s:0.0016, A9s:0.0001, ATs:0.0013, AJs:0.0003, AQs:0.2611, AKs:0.0043, AA:0.3573"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1047, 72o:0.0013, A2o:0.2386, 32s:0.0054, 33:0.064, 43o:0.0026, 53o:0.0004, 63o:0.0002, 73o:0.0024, 93o:0.0023, T3o:0.0028, K3o:0.0005, A3o:0.0554, 42s:0.0006, 43s:0.0087, 44:0.1188, 54o:0.0122, 84o:0.0005, 94o:0.0073, T4o:0.0001, K4o:0.0027, A4o:0.1647, 52s:0.0019, 53s:0.0011, 54s:0.1389, 55:0.1176, 65o:0.0078, 75o:0.0027, T5o:0.0018, Q5o:0.0056, K5o:0.0023, A5o:0.0834, 62s:0.0139, 63s:0.0073, 64s:0.0578, 65s:0.0046, 66:0.2837, 76o:0.0069, 86o:0.0005, 96o:0.0016, T6o:0.0041, J6o:0.0007, A6o:0.3928, 72s:0.0179, 73s:0.0162, 74s:0.0776, 75s:0.0033, 76s:0.6843, 77:0.6207, 97o:0.0078, T7o:0.0031, A7o:0.1349, 82s:0.0004, 83s:0.0109, 84s:0.0227, 85s:0.0493, 86s:0.0057, 87s:0.3775, 88:0.0513, 98o:0.0101, T8o:0.0034, Q8o:0.0001, K8o:0.0161, A8o:0.0215, 92s:0.0006, 93s:0.002, 94s:0.0023, 95s:0.0413, 96s:0.1161, 97s:0.1223, 98s:0.1891, 99:0.0993, T9o:0.0038, K9o:0.0079, A9o:0.0899, T2s:0.0105, T4s:0.0007, T5s:0.018, T6s:0.0189, T8s:0.0109, T9s:0.0296, TT:0.0946, JTo:0.0049, KTo:0.0296, ATo:0.2135, J2s:0.0096, J3s:0.0002, J5s:0.1529, J6s:0.0013, J7s:0.0565, J8s:0.0093, J9s:0.0024, JTs:0.0211, JJ:0.3485, KJo:0.0053, AJo:0.1641, Q2s:0.0009, Q3s:0.0001, Q4s:0.0018, Q5s:0.0006, Q7s:0.0321, Q8s:0.0008, Q9s:0.0004, QTs:0.0239, QJs:0.0093, QQ:0.6894, AQo:0.0209, K2s:0.0083, K3s:0.0535, K4s:0.0001, K5s:0.0042, K6s:0.0299, K7s:0.0503, K8s:0.0091, K9s:0.2415, KTs:0.0011, KJs:0.0134, KQs:0.013, KK:0.9984, AKo:0.9934, A2s:0.1999, A3s:0.3749, A4s:0.7425, A5s:0.9004, A6s:0.4684, A7s:0.2483, A8s:0.655, A9s:0.2115, ATs:0.5035, AJs:0.0946, AQs:0.2315, AKs:0.9947, AA:0.6427"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 32s:0.0002, 76s:0.0003, 77:0.0001, 87s:0.017, 92s:0.0001, 94s:0.0001, 98s:0.0004, T7s:0.0001, TT:0.0003, JTs:0.0003, JJ:0.0017, Q7s:0.0001, QQ:0.0549, KQo:0.0002, AQo:0.0003, K4s:0.0003, K6s:0.0001, K8s:0.0001, K9s:0.0002, KTs:0.0087, KJs:0.0007, KQs:0.0002, A2s:0.0442, A3s:0.0034, A4s:0.0002, A5s:0.0006, A6s:0.0275, A9s:0.0023, ATs:0.0068, AJs:0.075, AQs:0.4778, AKs:0.0003, AA:0.7909"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0288, 42o:0.0003, T2o:0.0001, J2o:0.0001, A2o:0.0001, 33:0.021, A3o:0.0003, 42s:0.0001, 44:0.0313, Q4o:0.0001, K4o:0.0001, A4o:0.066, 53s:0.0002, 54s:0.1026, 55:0.3173, 75o:0.0001, J5o:0.0001, Q5o:0.0001, A5o:0.2562, 62s:0.0001, 64s:0.0036, 65s:0.0135, 66:0.0308, 86o:0.0001, K6o:0.0001, A6o:0.0184, 74s:0.0007, 75s:0.0653, 76s:0.0246, 77:0.1333, T7o:0.0001, K7o:0.0001, A7o:0.0676, 83s:0.0002, 84s:0.0001, 85s:0.027, 86s:0.0005, 87s:0.0564, 88:0.5485, 98o:0.0001, Q8o:0.0001, A8o:0.0105, 92s:0.0002, 94s:0.0001, 97s:0.0153, 98s:0.0256, 99:0.0371, T9o:0.0001, A9o:0.0004, T3s:0.0001, T5s:0.0001, T6s:0.0003, T7s:0.0016, T8s:0.0031, T9s:0.0117, TT:0.3318, JTo:0.0001, KTo:0.0001, ATo:0.0373, J2s:0.0001, J4s:0.0002, J6s:0.0007, J8s:0.0001, J9s:0.0001, JTs:0.0001, JJ:0.12, QJo:0.0001, KJo:0.0001, AJo:0.0173, Q2s:0.0003, Q3s:0.0001, Q6s:0.0002, Q7s:0.0002, Q9s:0.0001, QTs:0.0112, QQ:0.7606, KQo:0.0001, AQo:0.3386, K2s:0.0009, K3s:0.0001, K4s:0.0072, K6s:0.0145, K7s:0.0731, K8s:0.0245, K9s:0.0006, KTs:0.0752, KJs:0.0352, KQs:0.0648, KK, AKo:0.9997, A2s:0.4026, A3s:0.2371, A4s:0.5404, A5s:0.5486, A6s:0.8163, A7s:0.8951, A8s:0.3417, A9s:0.6112, ATs:0.5675, AJs:0.5154, AQs:0.2787, AKs:0.9997, AA:0.2091"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|CO:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0001, 42s:0.0001, 52s:0.0001, 63s:0.0003, 66:0.0011, 73s:0.0001, 74s:0.0001, 76s:0.0007, 77:0.0021, 87s:0.0003, 88:0.0023, 93s:0.0001, 97s:0.0002, 99:0.0029, T8s:0.0001, T9s:0.0002, TT:0.0014, J6s:0.0001, JJ:0.0591, Q5s:0.0001, QJs:0.0006, QQ:0.9993, AQo:0.5118, K6s:0.0002, K8s:0.0002, KQs:0.0006, KK, AKo:0.894, A4s:0.0002, A5s:0.0002, A6s:0.0009, A8s:0.0014, A9s:0.0006, ATs:0.0006, AJs:0.0001, AQs:0.5306, AKs:0.995, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0087, K7s:0.0001, KQs:0.0001, KK:0.3071, AKo:0.0079, A6s:0.0006, AQs:0.0027, AKs:0.0104, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0044, 44:0.0001, 55:0.0003, 63s:0.0001, 64s:0.0001, 65s:0.0001, 75s:0.0001, 77:0.0094, 83s:0.0002, 88:0.0029, 94s:0.0006, 95s:0.0001, 98s:0.0001, 99:0.0088, A9o:0.0001, TT:0.3934, J9s:0.0002, JJ:0.684, Q5s:0.0002, QJs:0.0001, QQ:0.914, AQo:0.3042, K4s:0.0001, K6s:0.0012, K8s:0.0005, KTs:0.0003, KJs:0.0003, KQs:0.0003, KK, AKo:0.997, A2s:0.0001, A3s:0.0001, A4s:0.0075, A5s:0.0004, A9s:0.002, ATs:0.0001, AJs:0.2582, AQs:0.7593, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BB:3BET@6|LJ:CALL@4",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, 42o:0.0002, 52o:0.0001, 62o:0.0007, Q2o:0.0007, K2o:0.0001, A2o:0.0009, 32s:0.0002, 33:0.0072, 53o:0.0003, 63o:0.0001, 73o:0.0001, J3o:0.0001, K3o:0.0003, A3o:0.0004, 42s:0.0003, 43s:0.0001, 44:0.0073, 54o:0.0006, 94o:0.0004, T4o:0.0003, Q4o:0.0006, K4o:0.0001, A4o:0.0192, 53s:0.0076, 54s:0.0006, 55:0.0447, T5o:0.0001, A5o:0.0018, 62s:0.0004, 63s:0.0001, 65s:0.0002, 66:0.0028, 86o:0.0001, T6o:0.0002, J6o:0.003, Q6o:0.0024, K6o:0.0012, A6o:0.0086, 72s:0.0007, 73s:0.0001, 74s:0.0001, 76s:0.0002, 77:0.002, 87o:0.0006, J7o:0.0001, Q7o:0.0009, K7o:0.0002, A7o:0.0016, 82s:0.0003, 83s:0.0011, 84s:0.0005, 85s:0.0001, 86s:0.0005, 87s:0.003, 88:0.0005, 98o:0.0003, Q8o:0.0001, 93s:0.0007, 94s:0.0027, 95s:0.0025, 97s:0.0032, 98s:0.0003, 99:0.0009, T9o:0.0026, J9o:0.0033, K9o:0.0005, A9o:0.0007, T2s:0.0003, T3s:0.0001, T5s:0.0124, T6s:0.0004, T7s:0.0001, T8s:0.0015, T9s:0.0007, TT:0.0001, JTo:0.0002, QTo:0.0001, KTo:0.0018, ATo:0.0008, J2s:0.0012, J4s:0.0012, J5s:0.0062, J6s:0.003, J7s:0.0021, J8s:0.0001, J9s:0.002, JTs:0.0002, JJ:0.0019, KJo:0.0005, AJo:0.0013, Q3s:0.0087, Q5s:0.0007, Q6s:0.0027, Q7s:0.0017, Q8s:0.0037, Q9s:0.0005, QTs:0.0001, QJs:0.0001, QQ:0.0365, KQo:0.0003, AQo:0.0259, K3s:0.0083, K5s:0.0006, K6s:0.0065, K7s:0.0023, K8s:0.0001, K9s:0.0013, KJs:0.0001, KK:0.0728, A2s:0.0013, A3s:0.0059, A4s:0.0202, A5s:0.0121, A6s:0.0258, A7s:0.0084, A8s:0.0027, A9s:0.0085, ATs:0.1704, AJs:0.003, AQs:0.0232, AKs:0.0534, AA:0.0038"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 42o:0.0001, 52o:0.0003, 72o:0.0001, Q2o:0.0004, K2o:0.002, A2o:0.0047, 32s:0.0004, 33:0.0349, 43o:0.0002, 53o:0.0001, 63o:0.0002, 93o:0.0003, T3o:0.0001, K3o:0.0003, A3o:0.0003, 42s:0.0003, 43s:0.0002, 44:0.0035, 54o:0.0002, 94o:0.0004, T4o:0.0004, J4o:0.0003, Q4o:0.0003, K4o:0.0007, A4o:0.0004, 52s:0.0004, 53s:0.0066, 54s:0.0001, 55:0.0474, 75o:0.0003, T5o:0.0003, J5o:0.0003, K5o:0.0001, A5o:0.002, 62s:0.0001, 64s:0.0015, 65s:0.0015, 66:0.0025, 76o:0.0001, J6o:0.0008, Q6o:0.0003, K6o:0.0001, A6o:0.0002, 72s:0.0043, 73s:0.0037, 74s:0.0001, 75s:0.0002, 76s:0.0002, 77:0.0045, 87o:0.0001, 97o:0.0002, T7o:0.0027, Q7o:0.0001, K7o:0.0002, A7o:0.0007, 82s:0.0001, 83s:0.0001, 84s:0.0026, 85s:0.0067, 86s:0.0002, 87s:0.0037, 88:0.0046, 98o:0.0012, T8o:0.0006, Q8o:0.004, K8o:0.0002, A8o:0.0012, 93s:0.0017, 94s:0.0038, 95s:0.0017, 96s:0.0025, 97s:0.0157, 98s:0.001, 99:0.0016, T9o:0.0005, J9o:0.0004, Q9o:0.0002, K9o:0.0003, A9o:0.008, T2s:0.0003, T4s:0.0009, T5s:0.0033, T6s:0.0002, T7s:0.0053, T8s:0.0009, T9s:0.0043, TT:0.0018, JTo:0.0013, QTo:0.0012, KTo:0.0005, ATo:0.0021, J2s:0.0007, J3s:0.0024, J4s:0.0064, J5s:0.0008, J7s:0.0036, J8s:0.001, J9s:0.0002, JJ:0.005, QJo:0.0001, KJo:0.0006, AJo:0.0028, Q2s:0.0002, Q3s:0.0006, Q4s:0.0013, Q5s:0.0037, Q6s:0.0011, Q7s:0.0004, Q8s:0.0008, Q9s:0.0075, QTs:0.0024, QJs:0.0021, QQ:0.0945, KQo:0.0023, AQo:0.0129, K2s:0.0003, K3s:0.0016, K4s:0.0023, K6s:0.0012, K7s:0.0042, K8s:0.0004, K9s:0.0008, KTs:0.0006, KJs:0.0016, KQs:0.0068, KK:0.2382, AKo:0.0096, A2s:0.0001, A3s:0.0718, A4s:0.0042, A5s:0.0017, A6s:0.0079, A7s:0.002, A8s:0.0005, ATs:0.0885, AJs:0.0026, AQs:0.0284, AKs:0.1207, AA:0.9962"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T7s:0.0001, TT:0.0003, JJ:0.0264, Q8s:0.0001, QTs:0.0001, QQ:0.8973, AQo:0.0004, KTs:0.0001, KK, AKo:0.9984, A2s:0.0001, A3s:0.0001, A6s:0.0001, A7s:0.0001, A9s:0.0006, AKs:0.9954, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.0002, QQ:0.9946, KK, AKo:0.9998, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@19|LJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0081, 32o:0.0004, 32s:0.0234, 53o:0.0001, K3o:0.0009, A3o:0.0403, 42s:0.0015, 43s:0.0003, 44:0.0073, 94o:0.0014, T4o:0.0001, J4o:0.0002, Q4o:0.0001, K4o:0.0003, A4o:0.0013, 53s:0.0549, 54s:0.0013, 55:0.0034, A5o:0.0223, 62s:0.0641, 63s:0.0017, 65s:0.0829, 66:0.1867, 76o:0.0802, 86o:0.0001, K6o:0.0001, A6o:0.0199, 72s:0.0002, 73s:0.0034, 74s:0.0001, 75s:0.2653, 87o:0.0023, Q7o:0.0015, A7o:0.0017, 83s:0.002, 84s:0.0014, 85s:0.0007, 86s:0.0013, 87s:0.0025, 88:0.0008, 98o:0.0001, T8o:0.0004, Q8o:0.0001, 94s:0.0173, 96s:0.0008, 97s:0.1764, 99:0.0034, T9o:0.0001, Q9o:0.0001, K9o:0.0002, A9o:0.0004, T2s:0.0016, T4s:0.0001, T5s:0.0002, T6s:0.0015, T9s:0.0004, TT:0.016, ATo:0.0276, J2s:0.0011, J3s:0.0001, J4s:0.0013, J5s:0.0003, J6s:0.069, J7s:0.0025, J8s:0.1087, J9s:0.0016, JJ:0.0119, QJo:0.0001, KJo:0.0001, AJo:0.0009, Q2s:0.0017, Q4s:0.0002, Q5s:0.0009, Q6s:0.0005, Q7s:0.0006, Q8s:0.0065, Q9s:0.0084, QTs:0.186, QJs:0.0176, QQ:0.1958, KQo:0.0001, AQo:0.6741, K3s:0.0004, K4s:0.0013, K5s:0.0094, K6s:0.3128, K7s:0.0011, K8s:0.0018, K9s:0.0415, KTs:0.0001, KJs:0.0001, KQs:0.0906, KK:0.024, AKo:0.0766, A2s:0.2419, A3s:0.0055, A4s:0.0107, A5s:0.0781, A6s:0.0002, A7s:0.3312, A8s:0.3074, A9s:0.0995, ATs:0.0859, AJs:0.4266, AQs:0.3349, AKs:0.5903, AA:0.3335"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0047, 52o:0.0008, A2o:0.0845, 32s:0.0035, 33:0.018, A3o:0.4122, 42s:0.0004, 43s:0.3008, 44:0.0889, 74o:0.0042, A4o:0.1793, 52s:0.0001, 53s:0.0108, 54s:0.461, 55:0.367, 85o:0.0008, 95o:0.0154, J5o:0.0001, A5o:0.3459, 63s:0.004, 64s:0.0014, 65s:0.3579, 66:0.1382, 76o:0.0442, K6o:0.0003, A6o:0.0053, 72s:0.0085, 73s:0.0006, 74s:0.1347, 75s:0.2622, 76s:0.1507, 77:0.1063, 87o:0.1212, A7o:0.0949, 82s:0.0004, 83s:0.1203, 84s:0.1758, 85s:0.0075, 86s:0.0637, 87s:0.4339, 88:0.008, 98o:0.0388, J8o:0.0001, K8o:0.0001, A8o:0.2524, 93s:0.1854, 94s:0.0003, 95s:0.0035, 96s:0.0249, 97s:0.0212, 98s:0.0008, 99:0.0548, A9o:0.1132, T2s:0.0007, T3s:0.1776, T4s:0.0017, T5s:0.0001, T6s:0.001, T7s:0.1131, T8s:0.0138, T9s:0.0261, TT:0.1939, JTo:0.0002, KTo:0.0007, ATo:0.1316, J4s:0.0009, J5s:0.0003, J6s:0.0108, J8s:0.038, J9s:0.0352, JTs:0.0021, JJ:0.0708, QJo:0.0004, AJo:0.0216, Q3s:0.0523, Q4s:0.0051, Q5s:0.0001, Q6s:0.0015, Q7s:0.0002, Q8s:0.0109, Q9s:0.0712, QTs:0.0929, QJs:0.008, QQ:0.0449, AQo:0.0037, K2s:0.0008, K3s:0.0001, K4s:0.0616, K5s:0.0001, K6s:0.1991, K7s:0.0019, K8s:0.1015, K9s:0.0978, KTs:0.0015, KJs:0.0025, KQs:0.336, KK:0.9757, AKo:0.9233, A2s:0.4635, A3s:0.2048, A4s:0.2197, A5s:0.66, A6s:0.3573, A7s:0.2284, A8s:0.4846, A9s:0.4497, ATs:0.3092, AJs:0.0613, AQs:0.6205, AKs:0.3941, AA:0.6665"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0002, A4o:0.0002, 55:0.0353, 64s:0.0001, 65s:0.0001, 66:0.0699, A6o:0.0002, 72s:0.0002, 76s:0.0027, 77:0.0246, 82s:0.0001, 87s:0.0072, 88:0.0002, T8o:0.0002, A8o:0.0004, 93s:0.0001, 96s:0.0007, 97s:0.0001, 98s:0.0003, 99:0.0157, Q9o:0.0002, T8s:0.0065, TT:0.1144, J2s:0.0003, J3s:0.0001, J4s:0.0001, J5s:0.0002, J6s:0.0001, JJ:0.0136, Q2s:0.0002, Q3s:0.0002, Q6s:0.0002, Q7s:0.0001, QTs:0.0001, QJs:0.0001, QQ:0.2485, KQo:0.0001, AQo:0.0106, K3s:0.0016, K4s:0.0001, K8s:0.0001, K9s:0.0004, KJs:0.0002, KQs:0.0001, KK:0.0284, AKo:0.0001, A2s:0.0001, A3s:0.0002, A4s:0.0003, A5s:0.001, A6s:0.0001, A7s:0.0002, A8s:0.0212, A9s:0.02, ATs:0.0422, AJs:0.0353, AQs:0.0121, AKs:0.0649, AA:0.079"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.045, 33:0.0021, A3o:0.0634, 44:0.0012, A4o:0.0342, 53s:0.1148, 54s:0.1606, 55:0.3509, K5o:0.0001, A5o:0.077, 64s:0.0936, 65s:0.3361, 66:0.1251, A6o:0.0014, 75s:0.0163, 76s:0.1435, 77:0.0099, A7o:0.001, 82s:0.0004, 83s:0.0002, 86s:0.1975, 87s:0.1659, 88:0.1967, A8o:0.0639, 96s:0.0005, 97s:0.0002, 98s:0.001, 99:0.2127, A9o:0.0459, T3s:0.0002, T6s:0.0004, T9s:0.069, TT:0.1133, J4s:0.0003, J8s:0.0001, JJ:0.1624, AJo:0.0609, Q2s:0.0007, Q3s:0.0003, Q6s:0.001, Q7s:0.0001, Q8s:0.0602, Q9s:0.0004, QTs:0.0075, QQ:0.7035, AQo:0.609, K4s:0.0004, K5s:0.0638, K6s:0.0224, K7s:0.0002, K8s:0.0199, K9s:0.0041, KTs:0.0667, KJs:0.104, KQs:0.0521, KK:0.9706, AKo:0.999, A2s:0.6972, A3s:0.5184, A4s:0.4908, A5s:0.3691, A6s:0.4593, A7s:0.2305, A8s:0.6207, A9s:0.2073, ATs:0.6067, AJs:0.363, AQs:0.9744, AKs:0.9351, AA:0.921"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|CO:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0002, 42s:0.0001, 55:0.0001, 65s:0.0001, 74s:0.0001, 76s:0.0003, 77:0.0002, 87s:0.0003, TT:0.0007, JJ:0.0058, Q5s:0.0001, Q6s:0.0002, QJs:0.0002, QQ:0.9995, AQo:0.3475, KK, AKo:0.9198, A6s:0.0001, ATs:0.0013, AJs:0.0005, AQs:0.4217, AKs:0.897, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|LJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "ATo:0.0002, JJ:0.0001, AJo:0.0002, Q2s:0.0001, Q5s:0.0001, QQ:0.0001, KQs:0.0001, KK:0.6329, AKo:0.0008, A2s:0.0001, A3s:0.0001, A8s:0.0001, ATs:0.0002, AJs:0.0003, AQs:0.0011, AKs:0.0714, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|LJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 33:0.001, 44:0.0001, 55:0.005, 65s:0.0001, A6o:0.0001, 75s:0.0001, 76s:0.0006, 77:0.01, 88:0.0058, 93s:0.0002, 95s:0.0001, 97s:0.0006, 99:0.1326, A9o:0.0002, T3s:0.0001, T5s:0.0001, T7s:0.0002, TT:0.5718, ATo:0.0225, JJ:0.7161, AJo:0.0014, QJs:0.0001, QQ:0.7175, AQo:0.0009, K8s:0.0002, K9s:0.0001, KK, AKo:0.9986, A2s:0.0001, A4s:0.0001, A5s:0.0003, A6s:0.0008, A7s:0.0044, A8s:0.0003, A9s:0.0008, ATs:0.0007, AJs:0.0365, AQs:0.3975, AKs:0.9951, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|BTN:3BET@5|LJ:CALL@3",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, 32s:0.0001, 33:0.0001, 43o:0.0001, T3o:0.0002, J3o:0.0002, A3o:0.0001, 43s:0.0001, A4o:0.0002, 53s:0.0002, 55:0.0116, 95o:0.0001, A5o:0.0001, 62s:0.0001, 63s:0.0026, 64s:0.0002, 65s:0.0045, J6o:0.0001, 74s:0.0018, 75s:0.0102, 76s:0.0001, 77:0.0025, T7o:0.0001, 86s:0.0346, 87s:0.0196, 88:0.0005, Q8o:0.0001, A8o:0.0001, 92s:0.0008, 94s:0.0003, 96s:0.0004, 98s:0.0002, 99:0.2187, K9o:0.0001, T3s:0.0001, T4s:0.0003, T5s:0.0001, T7s:0.0001, T8s:0.0009, T9s:0.0009, TT:0.024, J2s:0.0004, J3s:0.001, J5s:0.0134, J6s:0.0002, J8s:0.0047, JTs:0.0001, JJ:0.0024, Q4s:0.0024, Q6s:0.0013, QJs:0.0001, QQ:0.149, AQo:0.0001, K2s:0.0005, K4s:0.0001, K5s:0.0002, K7s:0.0154, K8s:0.0021, KTs:0.0006, KJs:0.0007, KQs:0.0021, KK:0.7403, AKo:0.0004, A2s:0.0005, A3s:0.0009, A4s:0.0001, A5s:0.0001, A6s:0.0006, A7s:0.0009, A8s:0.0008, ATs:0.0238, AJs:0.0048, AQs:0.1836, AKs:0.47, AA:0.0014"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0001, 32s:0.002, 43o:0.0001, T3o:0.0003, A3o:0.0007, 43s:0.0011, K4o:0.0008, A4o:0.0012, 54s:0.0001, 55:0.0005, 65o:0.0001, Q5o:0.0001, K5o:0.0001, A5o:0.0022, 62s:0.0002, 64s:0.0031, 65s:0.0001, 66:0.0001, T6o:0.0001, 72s:0.0019, 73s:0.0003, 74s:0.0004, 75s:0.0002, 76s:0.0001, 77:0.0001, A7o:0.0001, 82s:0.0001, 85s:0.0003, 86s:0.0008, 87s:0.0064, 88:0.0002, Q8o:0.0002, A8o:0.0024, 92s:0.0016, 93s:0.0001, 94s:0.0009, 97s:0.0002, 98s:0.0002, 99:0.0001, T9o:0.0001, A9o:0.0022, T3s:0.0001, T7s:0.001, T8s:0.0001, ATo:0.0044, J2s:0.0002, J3s:0.0003, J4s:0.0001, J5s:0.0003, J6s:0.0013, J7s:0.0001, J8s:0.0013, J9s:0.0001, JTs:0.0002, KJo:0.0001, AJo:0.0001, Q6s:0.0013, Q8s:0.0001, QTs:0.0001, QJs:0.0004, QQ:0.0037, KQo:0.0004, AQo:0.0008, K2s:0.0001, K4s:0.0002, K5s:0.0003, K7s:0.0006, K8s:0.0016, K9s:0.0003, KTs:0.0015, KJs:0.0002, KK:0.0188, AKo:0.0008, A2s:0.002, A3s:0.002, A4s:0.0003, A5s:0.0042, A6s:0.0015, A7s:0.0052, A8s:0.0047, A9s:0.0001, ATs:0.0017, AJs:0.0069, AQs:0.0011, AKs:0.0033, AA:0.9986"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0034, 99:0.0008, TT:0.0087, J9s:0.0001, JJ:0.0062, QQ:0.9955, KK, AKo:0.9989, A4s:0.0002, A6s:0.003, AJs:0.0016, AQs:0.0005, AKs:0.983, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.9938, KK, AKo:0.9995, AQs:0.0015, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@19|LJ:CALL@17",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0003, 53s:0.0019, 54s:0.0006, 55:0.001, Q5o:0.0001, 62s:0.0001, 66:0.0001, 72s:0.0001, 73s:0.0002, 76s:0.0002, 77:0.0004, J7o:0.0001, Q7o:0.0001, 83s:0.0012, 84s:0.0001, A8o:0.0001, 92s:0.0004, 93s:0.0001, 95s:0.0005, 99:0.0006, A9o:0.0002, T2s:0.0002, T3s:0.0012, T4s:0.0002, T5s:0.0001, T6s:0.0001, T7s:0.0001, T9s:0.0005, TT:0.0002, KTo:0.0001, J7s:0.0021, J8s:0.0002, J9s:0.0004, JJ:0.0031, Q4s:0.0004, Q6s:0.0001, QTs:0.0001, QQ:0.017, AQo:0.0004, K3s:0.0002, K4s:0.0001, K6s:0.0004, K8s:0.0002, K9s:0.0002, KTs:0.0109, KK:0.0496, AKo:0.0008, A2s:0.0001, A3s:0.0003, A4s:0.0013, A5s:0.0001, A7s:0.0031, A8s:0.0037, A9s:0.0064, ATs:0.0111, AQs:0.0141, AKs:0.0007, AA:0.0566"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0936, A2o:0.2608, 32s:0.0002, 33:0.1408, 53o:0.0001, 93o:0.0003, K3o:0.0006, A3o:0.2581, 42s:0.0002, 43s:0.0465, 44:0.076, 54o:0.0008, Q4o:0.0002, K4o:0.0016, A4o:0.1558, 52s:0.0698, 53s:0.0389, 54s:0.0148, 55:0.0946, T5o:0.0001, Q5o:0.0002, A5o:0.153, 62s:0.0074, 63s:0.009, 64s:0.0048, 65s:0.0559, 66:0.1468, 76o:0.0253, 96o:0.0006, J6o:0.0001, K6o:0.0005, A6o:0.1147, 72s:0.0462, 73s:0.0092, 74s:0.0905, 75s:0.0564, 76s:0.1567, 77:0.4311, 97o:0.0571, J7o:0.0042, K7o:0.0014, A7o:0.165, 82s:0.037, 83s:0.0342, 84s:0.0002, 85s:0.0807, 86s:0.0878, 87s:0.1323, 88:0.0932, Q8o:0.0002, A8o:0.1017, 92s:0.0675, 93s:0.0007, 95s:0.0178, 97s:0.002, 98s:0.0081, 99:0.0672, J9o:0.0009, Q9o:0.0001, K9o:0.0007, A9o:0.157, T3s:0.0001, T4s:0.0019, T5s:0.0011, T6s:0.0002, T7s:0.0031, T9s:0.0001, TT:0.1112, JTo:0.0004, KTo:0.0025, ATo:0.2121, J3s:0.027, J4s:0.0435, J5s:0.0054, J6s:0.0419, J7s:0.0011, J8s:0.0001, J9s:0.0111, JTs:0.0001, JJ:0.1481, KJo:0.0001, AJo:0.1057, Q2s:0.0006, Q3s:0.0211, Q4s:0.0002, Q5s:0.0046, Q6s:0.0138, Q8s:0.0005, QTs:0.0012, QJs:0.0025, QQ:0.4509, AQo:0.022, K2s:0.0174, K3s:0.001, K4s:0.0066, K5s:0.0036, K6s:0.0029, K7s:0.043, K8s:0.0001, K9s:0.0033, KTs:0.049, KJs:0.0488, KQs:0.0007, KK:0.9477, AKo:0.9991, A2s:0.2402, A3s:0.497, A4s:0.4468, A5s:0.1865, A6s:0.3614, A7s:0.172, A8s:0.4037, A9s:0.5126, ATs:0.2933, AJs:0.3609, AQs:0.4584, AKs:0.9959, AA:0.9434"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42s:0.0002, 44:0.0001, 54s:0.0001, 55:0.0001, 66:0.0002, 72s:0.0001, A7o:0.0001, 88:0.0001, A8o:0.0001, T4s:0.0001, TT:0.0012, JTo:0.0001, KTo:0.0001, J3s:0.0002, JTs:0.0001, JJ:0.0002, KJo:0.0001, Q3s:0.0001, Q6s:0.0001, Q7s:0.0001, QQ:0.3325, KQo:0.0001, AQo:0.029, K3s:0.0001, K5s:0.0001, K8s:0.0001, KTs:0.0001, KJs:0.0001, KK:0.1377, AKo:0.0001, A2s:0.0065, A3s:0.0041, A4s:0.0002, A5s:0.0113, A6s:0.0004, A7s:0.0012, A8s:0.0201, ATs:0.0594, AJs:0.0499, AQs:0.0642, AKs:0.0002, AA:0.9584"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1103, A2o:0.1381, 32s:0.0006, 33:0.0755, K3o:0.0003, A3o:0.1172, 42s:0.0009, 43s:0.0016, 44:0.1565, A4o:0.1411, 52s:0.0041, 53s:0.0006, 54s:0.0862, 55:0.412, 65o:0.0004, A5o:0.1511, 62s:0.0002, 63s:0.0006, 64s:0.0001, 65s:0.0721, 66:0.2462, 76o:0.0012, A6o:0.105, 73s:0.0001, 74s:0.0001, 75s:0.0015, 76s:0.0632, 77:0.1187, 97o:0.0001, A7o:0.1421, 82s:0.0012, 83s:0.0001, 86s:0.0032, 87s:0.0158, 88:0.2293, 98o:0.0007, A8o:0.0466, 92s:0.0001, 93s:0.0004, 94s:0.0005, 95s:0.0002, 96s:0.0007, 97s:0.0004, 99:0.2544, T9o:0.0006, A9o:0.0724, T2s:0.0001, T3s:0.0005, T7s:0.0049, T9s:0.0039, TT:0.1567, ATo:0.0359, J2s:0.0016, J4s:0.0001, J5s:0.0003, J6s:0.0013, J7s:0.0015, J8s:0.0017, J9s:0.0018, JTs:0.0007, JJ:0.1765, AJo:0.0932, Q8s:0.0003, Q9s:0.0019, QTs:0.0001, QJs:0.0414, QQ:0.4937, AQo:0.265, K2s:0.0005, K3s:0.0025, K5s:0.0002, K7s:0.0022, K8s:0.0004, K9s:0.0001, KTs:0.002, KJs:0.0003, KQs:0.001, KK:0.8623, AKo:0.9997, A2s:0.3932, A3s:0.4366, A4s:0.3349, A5s:0.4451, A6s:0.3046, A7s:0.3645, A8s:0.2045, A9s:0.3149, ATs:0.2128, AJs:0.3578, AQs:0.3532, AKs:0.9992, AA:0.0416"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|CO:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 52o:0.0001, 42s:0.0001, 44:0.0002, 55:0.0001, 63s:0.0001, 65s:0.0001, 76s:0.0001, 85s:0.0001, 88:0.0003, T8s:0.0001, TT:0.0001, J4s:0.0001, J8s:0.0002, JJ:0.0137, AJo:0.0001, Q5s:0.0002, QJs:0.0001, QQ:0.9986, AQo:0.1338, K9s:0.0003, KTs:0.0002, KQs:0.0003, KK, AKo:0.708, A5s:0.0011, A8s:0.0001, ATs:0.0002, AJs:0.0016, AQs:0.6123, AKs:0.9982, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 88:0.0001, QQ:0.0002, K5s:0.0001, KK:0.1062, A3s:0.0001, AQs:0.0002, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, A2o:0.0003, 32s:0.0001, 33:0.0004, 43s:0.0001, 55:0.001, A5o:0.0001, 66:0.0064, 73s:0.0001, 77:0.0082, 82s:0.0001, 88:0.0017, 95s:0.0002, 99:0.037, TT:0.6371, JJ:0.5769, AJo:0.1018, QTs:0.0001, QQ:0.9909, AQo:0.5948, K4s:0.0001, K5s:0.0002, K6s:0.0001, K9s:0.0001, KTs:0.0002, KJs:0.0001, KQs:0.0002, KK, AKo:0.9956, A2s:0.0002, A5s:0.0034, A7s:0.0003, A8s:0.0038, A9s:0.0165, ATs:0.1559, AJs:0.3774, AQs:0.6733, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|CO:CALL@2|SB:3BET@6|LJ:CALL@4",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0012, 32o:0.0031, 42o:0.0006, 52o:0.0001, 62o:0.0001, 92o:0.0001, T2o:0.0002, J2o:0.0001, Q2o:0.0001, K2o:0.001, A2o:0.0034, 32s:0.0505, 33:0.0001, 43o:0.0009, 53o:0.0003, 73o:0.0103, 83o:0.0004, 93o:0.0008, T3o:0.0002, J3o:0.0001, Q3o:0.0002, K3o:0.0004, 43s:0.0003, 44:0.0048, 74o:0.0001, 84o:0.0001, 94o:0.0001, T4o:0.0003, J4o:0.0002, Q4o:0.0013, K4o:0.0013, 52s:0.0007, 53s:0.009, 55:0.0003, 65o:0.0003, 75o:0.0004, 95o:0.0042, T5o:0.0011, J5o:0.0019, Q5o:0.0001, K5o:0.0002, A5o:0.0012, 62s:0.0114, 63s:0.0038, 64s:0.0209, 65s:0.0161, 66:0.0289, 76o:0.0008, 86o:0.0001, 96o:0.0001, T6o:0.0019, J6o:0.0004, Q6o:0.0031, K6o:0.0041, A6o:0.0015, 72s:0.0086, 73s:0.0631, 74s:0.0001, 76s:0.0204, 77:0.0009, 87o:0.0008, T7o:0.0001, J7o:0.0011, Q7o:0.0001, K7o:0.0007, A7o:0.0011, 82s:0.0028, 83s:0.0003, 84s:0.0004, 85s:0.0006, 86s:0.0011, 87s:0.0036, 88:0.0015, 98o:0.0003, T8o:0.0111, Q8o:0.005, K8o:0.0023, A8o:0.0121, 92s:0.0025, 93s:0.0056, 94s:0.0364, 95s:0.0374, 96s:0.013, 97s:0.0019, 98s:0.0023, 99:0.1281, T9o:0.0012, J9o:0.0004, Q9o:0.002, K9o:0.0002, A9o:0.0001, T2s:0.003, T4s:0.0117, T5s:0.0048, T6s:0.0002, T7s:0.0301, T8s:0.0024, T9s:0.0024, TT:0.0045, QTo:0.0002, ATo:0.0012, J2s:0.055, J3s:0.0012, J4s:0.0011, J5s:0.0001, J6s:0.0027, J7s:0.435, J8s:0.0155, J9s:0.0002, JTs:0.025, JJ:0.0462, QJo:0.0005, KJo:0.0001, AJo:0.0004, Q2s:0.0146, Q3s:0.0004, Q4s:0.005, Q5s:0.0018, Q6s:0.013, Q7s:0.0016, Q8s:0.0022, Q9s:0.0062, QTs:0.0063, QJs:0.0008, QQ:0.0119, KQo:0.0014, AQo:0.0081, K2s:0.0198, K3s:0.0002, K4s:0.0051, K5s:0.0074, K6s:0.0016, K7s:0.0551, K8s:0.006, K9s:0.014, KTs:0.0006, KJs:0.098, KQs:0.0058, KK:0.9026, AKo:0.0003, A2s:0.0073, A3s:0.0531, A4s:0.0037, A5s:0.0008, A6s:0.0056, A7s:0.0068, A8s:0.0511, A9s:0.0082, ATs:0.1189, AJs:0.0096, AQs:0.3271, AKs:0.1334, AA:0.1056"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0309, 32o:0.0003, 42o:0.0044, 52o:0.0001, 92o:0.0001, J2o:0.0004, Q2o:0.0002, K2o:0.006, A2o:0.0005, 32s:0.0345, 43o:0.0029, 53o:0.0003, 73o:0.0018, 83o:0.0003, 93o:0.0009, T3o:0.0009, K3o:0.0005, A3o:0.002, 42s:0.0287, 43s:0.0028, 44:0.0029, 74o:0.0053, 84o:0.0009, 94o:0.0001, T4o:0.0002, J4o:0.0001, Q4o:0.0007, K4o:0.001, A4o:0.0078, 53s:0.0002, 54s:0.0448, 55:0.005, 65o:0.0039, 75o:0.0002, 85o:0.0007, 95o:0.0023, T5o:0.0052, J5o:0.003, Q5o:0.0001, K5o:0.0019, A5o:0.0127, 62s:0.0065, 63s:0.0006, 64s:0.0037, 65s:0.0325, 76o:0.0035, 96o:0.0001, T6o:0.0029, J6o:0.0001, Q6o:0.0009, K6o:0.0025, A6o:0.0012, 72s:0.016, 73s:0.01, 74s:0.0117, 75s:0.0009, 76s:0.0267, 77:0.0001, 87o:0.0014, 97o:0.0001, T7o:0.0005, J7o:0.0007, Q7o:0.0002, A7o:0.0006, 82s:0.0013, 83s:0.002, 84s:0.0131, 85s:0.001, 86s:0.006, 87s:0.0137, 88:0.0026, 98o:0.0018, T8o:0.0011, Q8o:0.0187, K8o:0.0031, A8o:0.0006, 92s:0.0008, 93s:0.0087, 94s:0.0064, 95s:0.0005, 96s:0.0035, 97s:0.0028, 98s:0.0004, T9o:0.0045, J9o:0.0039, Q9o:0.0249, K9o:0.0001, A9o:0.001, T2s:0.0239, T3s:0.011, T4s:0.0015, T5s:0.0206, T6s:0.0093, T7s:0.0174, T8s:0.0094, T9s:0.0016, TT:0.0322, JTo:0.0002, QTo:0.0032, KTo:0.0049, ATo:0.0005, J2s:0.0089, J3s:0.0027, J4s:0.0032, J5s:0.0022, J6s:0.0043, J7s:0.0383, J8s:0.0068, J9s:0.0173, JTs:0.0055, JJ:0.0293, QJo:0.0117, KJo:0.0002, AJo:0.0099, Q2s:0.0155, Q3s:0.014, Q4s:0.0076, Q5s:0.0086, Q6s:0.0115, Q7s:0.0001, Q8s:0.0046, Q9s:0.0328, QTs:0.0175, QJs:0.0254, QQ:0.1324, KQo:0.0129, AQo:0.0085, K2s:0.0158, K3s:0.0171, K4s:0.0111, K5s:0.0001, K6s:0.0264, K7s:0.0014, K8s:0.009, K9s:0.0319, KTs:0.0042, KJs:0.092, KQs:0.0115, KK:0.0972, AKo:0.001, A2s:0.0393, A3s:0.0395, A4s:0.003, A5s:0.005, A6s:0.0067, A7s:0.0013, A8s:0.0337, A9s:0.0121, ATs:0.0037, AJs:0.0174, AQs:0.3745, AKs:0.0313, AA:0.8907"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.0047, QQ:0.9878, KK, AKo, AQs:0.0001, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.98, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0058, KK, AKo:0.8487, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0048, KK, AKo:0.9987, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.2054, KK, AKo:0.9996, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19|BB:CALL@18",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19|BTN:CALL@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0011, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19|CO:CALL@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@19|SB:CALL@18.5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0015, 33:0.0009, 42s:0.0001, 44:0.136, A4o:0.0373, 54s:0.0001, 55:0.9359, A5o:0.1547, 65s:0.0126, 66:0.9929, 76s:0.0018, 77:0.8891, 85s:0.0001, 88:0.61, A8o:0.0001, 98s:0.0001, 99:0.003, T7s:0.0004, T9s:0.0221, TT:0.0263, ATo:0.0589, J7s:0.0001, J9s:0.0126, JJ:0.0319, AJo:0.0027, Q9s:0.0001, QTs:0.0002, QQ:0.6347, AQo:0.1344, K6s:0.0016, KTs:0.0196, KJs:0.0131, KQs:0.0956, KK:0.016, A3s:0.0104, A4s:0.0491, A5s:0.2172, A6s:0.0234, A7s:0.0081, A8s:0.0017, A9s:0.0018, ATs:0.0072, AJs:0.0044, AQs:0.641, AA:0.168"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1351, A2o:0.1894, 33:0.0417, A3o:0.2786, 43s:0.0001, 44:0.1532, A4o:0.4439, 52s:0.0001, 54s:0.0023, 55:0.0003, A5o:0.2894, 64s:0.1659, 65s:0.3779, 66:0.0049, A6o:0.2168, 73s:0.0001, 74s:0.0003, 76s:0.8859, 77:0.103, A7o:0.303, 86s:0.2426, 87s:0.9172, 88:0.3885, A8o:0.0656, 92s:0.0001, 96s:0.0019, 97s:0.1475, 98s:0.6911, 99:0.9289, A9o:0.0976, T7s:0.0001, T9s:0.1513, TT:0.3917, ATo:0.2667, J9s:0.0512, JTs:0.0078, JJ:0.8648, AJo:0.683, Q2s:0.0001, Q9s:0.0004, QTs:0.0023, QJs:0.0001, QQ:0.2455, AQo:0.8646, K2s:0.0051, K3s:0.0051, K6s:0.0127, K7s:0.003, K8s:0.0005, K9s:0.0183, KTs:0.0152, KJs:0.0156, KQs:0.0335, KK:0.984, AKo, A2s:0.9982, A3s:0.9819, A4s:0.9494, A5s:0.7817, A6s:0.9727, A7s:0.9914, A8s:0.997, A9s:0.9971, ATs:0.9927, AJs:0.9955, AQs:0.359, AKs, AA:0.832"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0001, A3o:0.0002, 42s:0.0001, A4o:0.0453, 55:0.0001, A5o:0.0029, 65s:0.0003, A6o:0.0081, 75s:0.0002, 76s:0.0123, 77:0.0007, A7o:0.0511, 87s:0.0006, A8o:0.013, 93s:0.0002, 95s:0.0001, 96s:0.0004, 98s:0.0006, 99:0.0001, T8s:0.0001, T9s:0.0002, TT:0.0008, ATo:0.014, J9s:0.0013, JJ:0.0001, AJo:0.0073, Q4s:0.0001, Q6s:0.0005, QTs:0.0019, QQ:0.0024, AQo:0.0017, K2s:0.0001, K4s:0.0009, K6s:0.0001, K7s:0.0058, K9s:0.0083, KTs:0.0013, KQs:0.0002, KK:0.9996, AKo:0.9997, A2s:0.0277, A3s:0.7155, A4s:0.3486, A5s:0.667, A6s:0.9139, A7s:0.8583, A8s:0.9677, A9s:0.7116, ATs:0.4791, AJs:0.798, AQs:0.6538, AKs:0.996, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0006, A3o:0.0092, 43s:0.0001, 44:0.0003, A4o:0.0023, 55:0.0001, A5o:0.0023, 64s:0.0023, 65s:0.0001, 66:0.0006, A6o:0.0271, 76s:0.033, 77:0.0001, 87s:0.0001, A8o:0.0109, 98s:0.0198, 99:0.0001, A9o:0.0004, T7s:0.0017, ATo:0.0007, J4s:0.0003, J8s:0.0014, JTs:0.0007, JJ:0.0003, AJo:0.0041, QTs:0.0025, QJs:0.0001, QQ:0.0091, AQo:0.0012, K5s:0.0112, K9s:0.0007, KTs:0.0028, KQs:0.0002, KK:0.9997, AKo:0.9989, A2s:0.4975, A3s:0.4836, A4s:0.1111, A5s:0.4504, A6s:0.2157, A7s:0.8625, A8s:0.5835, A9s:0.3755, ATs:0.4282, AJs:0.7653, AQs:0.0302, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "52s:0.0004, 64s:0.0001, 65s:0.0017, 66:0.0164, A6o:0.0001, 76s:0.0002, 77:0.0006, 85s:0.0053, 86s:0.0019, 87s:0.0995, A8o:0.0001, 92s:0.0001, 93s:0.0009, 96s:0.0001, 97s:0.0062, 99:0.0061, A9o:0.0002, T8s:0.0009, T9s:0.0046, TT:0.0004, J3s:0.0004, J9s:0.0008, QTs:0.0032, QQ:0.0017, AQo:0.0412, K2s:0.0126, K3s:0.0008, K6s:0.0019, K7s:0.0001, K9s:0.0022, KTs:0.0027, KQs:0.0001, KK, AKo:0.9989, A2s:0.5138, A3s:0.5945, A4s:0.399, A5s:0.6137, A6s:0.6424, A7s:0.6665, A8s:0.6214, A9s:0.2936, ATs:0.4276, AJs:0.3317, AQs:0.8991, AKs:0.9989, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0008, A2o:0.0666, 32s:0.0001, 33:0.0046, A3o:0.0153, 43s:0.0001, A4o:0.0259, 52s:0.0001, A5o:0.1973, 63s:0.0003, 65s:0.0033, 66:0.0852, A6o:0.0192, 72s:0.0011, 75s:0.003, 76s:0.0037, 77:0.0026, A7o:0.0193, 86s:0.0002, 88:0.0605, A8o:0.0148, 96s:0.0127, 98s:0.0005, 99:0.0338, A9o:0.1105, T6s:0.0001, T8s:0.0025, T9s:0.1755, ATo:0.0007, J7s:0.0034, J8s:0.0008, J9s:0.0007, JTs:0.0001, AJo:0.0069, Q4s:0.0011, Q6s:0.0002, QQ:0.0013, AQo:0.0133, K2s:0.0019, K3s:0.0001, K4s:0.0001, K6s:0.001, K7s:0.0004, K8s:0.0016, K9s:0.0396, KTs:0.0003, KJs:0.0015, KQs:0.0065, KK, AKo, A2s:0.7157, A3s:0.9108, A4s:0.9172, A5s:0.9616, A6s:0.2214, A7s:0.9943, A8s:0.5057, A9s:0.8842, ATs:0.6579, AJs:0.3698, AQs:0.872, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0024, KK:0.7463, A9s:0.0001, ATs:0.0002, AKs:0.2577, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.3994, 77:0.9543, 88:0.9988, 99:0.999, TT:0.9998, JJ, QQ, KK, AKo, AJs:0.0799, AQs:0.6378, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BB:4BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5s:0.0001, A9s:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0001, QJs:0.0001, K4s:0.0001, KK:0.8322, AKo:0.0003, AJs:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.2127, 88:0.2839, 99:0.3048, TT:0.9309, JJ:0.8459, QQ:0.9787, KJs:0.0001, KK, AKo:0.9994, AQs:0.0036, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|BTN:4BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "83s:0.0001, 84s:0.0001, 85s:0.0001, 98s:0.0001, T9s:0.0001, JTs:0.0002, QJs:0.0001, QQ:0.0001, K5s:0.0002, K7s:0.0001, K9s:0.0003, KQs:0.0001, KK:0.0007, A2s:0.0001, A4s:0.0003, A6s:0.0002, A8s:0.0002, ATs:0.0004, AQs:0.0001, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.6409, AKs:0.3421, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0004, 77:0.3484, 88:0.5307, 99:0.7583, TT:0.7974, JJ:0.779, QQ:0.8134, KK, AKo, A5s:0.0001, ATs:0.0001, AJs:0.0012, AQs:0.0006, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|CO:4BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, QQ:0.0001, KK:0.0004, A4s:0.0001, AQs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0001, JJ:0.0001, KK:0.8396, A9s:0.0002, AJs:0.0002, AKs:0.0024, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.302, 99:0.7718, TT:0.8822, JJ:0.9066, QQ:0.9979, KK, AKo:0.9992, ATs:0.0005, AQs:0.0019, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|SB:4BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0001, 85s:0.0001, T2s:0.0001, T9s:0.0001, TT:0.0001, J3s:0.0001, J9s:0.0001, QJs:0.0001, KK:0.0021, AKo:0.0001, A2s:0.0001, AJs:0.0001, AA:0.9993"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:3BET@5|LJ:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.7217, QQ, AQo:0.0429, KK, AKo, AQs:0.9986, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "33:0.0047, 55:0.0349, 66:0.0595, 77:0.0544, 88:0.0004, TT:0.0009, JJ:0.0791, Q8s:0.0006, QQ:0.0813, AQo:0.0052, K6s:0.0001, KTs:0.0232, AKo:0.0072, AQs:0.1976, AKs:0.001, AA:0.0004"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "A2o:0.0415, 33:0.011, Q3o:0.0019, 43s:0.0015, A4o:0.003, 53s:0.0002, 54s:0.0004, A5o:0.0001, 64s:0.0402, 65s:0.0253, 66:0.0019, Q6o:0.0102, A6o:0.0001, 76s:0.0002, 77:0.0019, Q7o:0.01, A7o:0.0016, 85s:0.0002, 87s:0.0002, 88:0.0098, K8o:0.0319, 92s:0.001, 93s:0.0013, 98s:0.1962, Q9o:0.0028, T4s:0.0033, T9s:0.0017, TT:0.0876, QTo:0.0093, ATo:0.0038, JTs:0.0027, JJ:0.0762, KJo:0.0007, Q2s:0.0088, Q3s:0.0047, Q4s:0.0502, Q5s:0.0001, Q6s:0.0127, Q7s:0.0185, Q8s:0.0313, Q9s:0.0001, QTs:0.0065, QJs:0.0036, QQ:0.2212, KQo:0.0311, AQo:0.4966, K2s:0.0023, K3s:0.0167, K4s:0.0007, K5s:0.007, K6s:0.0008, K7s:0.0205, K8s:0.001, K9s:0.0016, KTs:0.1436, KJs:0.0003, KQs:0.0003, KK:0.0012, AKo:0.1156, A3s:0.016, A4s:0.0085, A5s:0.0061, A6s:0.0005, A7s:0.052, A8s:0.0132, A9s:0.1276, ATs:0.0133, AQs:0.2088, AKs:0.2561, AA:0.9985"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0018, 33:0.001, K3o:0.0312, Q4o:0.0001, 54s:0.0152, K5o:0.0429, 65s:0.044, K6o:0.0568, K7o:0.0004, 87s:0.0001, A8o:0.0005, 99:0.0001, K9o:0.021, T3s:0.0001, T8s:0.001, JTs:0.0001, KJo:0.0001, Q3s:0.0065, Q4s:0.002, Q5s:0.0003, Q6s:0.0062, Q7s:0.0043, Q8s:0.0004, Q9s:0.0185, QTs:0.0027, QJs:0.0006, QQ:0.6974, KQo:0.7698, AQo:0.0385, K2s:0.0197, K3s:0.8301, K4s:0.4397, K5s:0.3293, K6s:0.29, K7s:0.4746, K8s:0.2566, K9s:0.2754, KTs:0.1943, KJs:0.0985, KQs:0.9156, KK:0.9988, AKo:0.8767, A2s:0.0504, A4s:0.3911, A5s:0.1703, A6s:0.0019, A9s:0.1257, ATs:0.0012, AJs:0.0003, AQs:0.5388, AKs:0.7429, AA:0.0012"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
        "range": "22:0.0124, 43s:0.0001, 55:0.1016, 77:0.013, 88:0.1068, T8s:0.0033, TT:0.0016, JJ:0.0376, QQ:0.0866, AQo:0.0131, K2s:0.0004, K7s:0.0003, K8s:0.0064, K9s:0.0001, KJs:0.0142, KK:0.0001, AKo:0.0177, A5s:0.0002, A9s:0.0006, AJs:0.008, AQs:0.0942, AKs:0.0167, AA:0.0037"
      },
      {
        "action": "3bet 5bb",
        "min": 0.0001,
        "range": "22:0.0015, Q2o:0.0001, A2o:0.0027, A3o:0.0106, 43s:0.005, Q4o:0.0017, K4o:0.0244, A4o:0.0052, 52s:0.0014, K5o:0.0006, A5o:0.0045, 62s:0.0002, 65s:0.0147, Q6o:0.0081, K6o:0.0092, 72s:0.0026, Q7o:0.0071, A7o:0.0001, 88:0.0013, Q8o:0.0002, K8o:0.0004, 97s:0.0217, 98s:0.0067, Q9o:0.0019, A9o:0.0024, T3s:0.0009, TT:0.0029, QTo:0.0325, KTo:0.0245, J9s:0.0009, JJ:0.038, Q2s:0.0616, Q5s:0.0341, Q6s:0.0687, Q7s:0.0142, Q8s:0.0191, QTs:0.0921, QJs:0.0152, QQ:0.6672, KQo:0.0022, AQo:0.3935, K2s:0.0008, K3s:0.0004, K4s:0.0323, K5s:0.0086, K6s:0.2159, K8s:0.2051, K9s:0.0037, KTs:0.0432, KQs:0.0006, KK:0.009, AKo:0.0701, A2s:0.2627, A3s:0.0018, A4s:0.0002, A5s:0.0166, A6s:0.1522, A7s:0.0257, A8s:0.0086, A9s:0.0079, ATs:0.0174, AJs:0.0024, AQs:0.477, AKs:0.1434, AA:0.9952"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K2o:0.0128, K3o:0.0144, 43s:0.0037, K4o:0.0377, A4o:0.0003, 52s:0.0001, K5o:0.0789, 62s:0.0005, 63s:0.0004, 64s:0.0001, 75s:0.0001, K7o:0.0328, 86s:0.0003, 87s:0.0001, K8o:0.0073, 97s:0.001, K9o:0.0316, T5s:0.0001, T9s:0.0003, KTo:0.0178, Q3s:0.006, Q4s:0.0001, Q5s:0.0001, Q8s:0.005, Q9s:0.0002, QQ:0.2462, KQo:0.9761, AQo:0.0771, K2s:0.3893, K3s:0.3625, K4s:0.1844, K5s:0.2806, K6s:0.2065, K7s:0.0967, K8s:0.26, K9s:0.3095, KTs:0.1089, KJs:0.3039, KQs:0.9982, KK:0.9908, AKo:0.9091, A2s:0.3145, A3s:0.1357, A4s:0.1407, A5s:0.0523, A6s:0.0622, A7s:0.0191, A8s:0.0218, A9s:0.0357, ATs:0.1054, AQs:0.3073, AKs:0.839, AA:0.0011"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0409, 33:0.1035, 44:0.0528, 52s:0.0002, 54s:0.0271, 55:0.0931, 64s:0.0004, 65s:0.0294, 66:0.0757, 75s:0.0002, 76s:0.0006, 77:0.4027, 86s:0.0024, 87s:0.0012, 88:0.0005, 97s:0.0014, T2s:0.0001, T8s:0.0004, TT:0.0388, J4s:0.0001, J8s:0.0002, JJ:0.3242, Q6s:0.0002, QQ:0.0683, AQo:0.0016, K2s:0.0001, K4s:0.0008, K5s:0.0005, K6s:0.0007, K8s:0.0076, KTs:0.0392, KJs:0.3786, KK:0.0001, AKo:0.0026, A3s:0.0001, A5s:0.0002, A6s:0.0005, ATs:0.0008, AQs:0.7553, AKs:0.0009"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.0009, A2o:0.0359, K3o:0.0162, A3o:0.0285, 43s:0.0421, 44:0.0007, K4o:0.0016, A4o:0.0436, Q5o:0.001, K5o:0.0006, A5o:0.0508, Q6o:0.0013, A6o:0.0134, 76s:0.0015, A7o:0.0198, 88:0.0212, Q8o:0.0001, K8o:0.0013, A8o:0.0079, 94s:0.0003, Q9o:0.0004, K9o:0.0003, A9o:0.0191, T3s:0.0001, T4s:0.0041, T5s:0.0042, TT:0.0089, QTo:0.0008, J8s:0.0003, JJ:0.0033, QJo:0.0002, KJo:0.0097, Q2s:0.0015, Q3s:0.0675, Q4s:0.0178, Q5s:0.0313, Q6s:0.0112, Q7s:0.006, Q8s:0.0075, Q9s:0.0071, QTs:0.0097, QJs:0.0002, QQ:0.3757, KQo:0.1212, AQo:0.6251, K2s:0.0012, K3s:0.0031, K4s:0.027, K5s:0.0013, K6s:0.0102, K8s:0.009, K9s:0.0184, KTs:0.0036, KJs:0.0034, KQs:0.0019, KK:0.002, AKo:0.1043, A2s:0.0304, A3s:0.0722, A4s:0.0796, A5s:0.0338, A6s:0.0001, A7s:0.0197, A9s:0.0471, ATs:0.0049, AJs:0.0261, AQs:0.022, AKs:0.5331, AA:0.999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.002, K2o:0.0424, 32s:0.0002, K3o:0.0935, 42s:0.0021, K4o:0.0292, A4o:0.0006, 53s:0.0001, K5o:0.0337, A5o:0.0001, 64s:0.0166, 65s:0.0062, K6o:0.0381, A6o:0.0001, 74s:0.0001, 76s:0.0015, 77:0.0178, K7o:0.0003, 87s:0.0025, 88:0.0021, A8o:0.0002, 97s:0.0001, K9o:0.0174, T4s:0.0001, J3s:0.0001, JTs:0.0001, Q2s:0.009, Q5s:0.0025, Q6s:0.0059, Q7s:0.0047, Q8s:0.0019, Q9s:0.0001, QTs:0.0004, QJs:0.0032, QQ:0.556, KQo:0.5204, AQo:0.0871, K2s:0.2075, K3s:0.4999, K4s:0.2313, K5s:0.359, K6s:0.3226, K7s:0.4584, K8s:0.4265, K9s:0.442, KTs:0.232, KJs:0.1864, KQs:0.9857, KK:0.9979, AKo:0.8929, A2s:0.0097, A3s:0.0832, A4s:0.0947, A5s:0.1845, A6s:0.0002, A7s:0.1357, A8s:0.0004, A9s:0.1173, ATs:0.0424, AJs:0.0067, AQs:0.2183, AKs:0.4657, AA:0.001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9958, 32s:0.1141, 33:0.973, 42s:0.0001, 43s:0.1697, 44:0.9993, 53s:0.7739, 54s:0.9732, 55:0.9943, 65o:0.0959, 62s:0.0801, 63s:0.0091, 64s:0.3372, 65s:0.6981, 66:0.8508, K6o:0.0008, 72s:0.0142, 74s:0.0039, 75s:0.0089, 76s:0.7539, 77:0.9814, 84s:0.0026, 86s:0.1166, 87s:0.1729, 88:0.8404, 92s:0.001, 96s:0.57, 99:0.8307, T4s:0.0005, T5s:0.0007, T6s:0.0211, T7s:0.0188, T8s:0.9018, T9s:0.0393, TT:0.5608, KTo:0.3481, J2s:0.0023, J3s:0.4116, J4s:0.5157, J5s:0.0002, J6s:0.0002, J7s:0.1585, J8s:0.0002, J9s:0.1412, JJ:0.965, KJo:0.1127, Q3s:0.0004, Q7s:0.0006, QTs:0.0038, QQ:0.1668, KQo:0.0143, AQo:0.244, K2s:0.0365, K3s:0.0012, K4s:0.3583, K5s:0.0642, K6s:0.3447, K7s:0.3857, K8s:0.2171, K9s:0.3608, KTs:0.3999, KJs:0.4931, KQs:0.0008, AKo:0.0892, A3s:0.1175, A5s:0.0206, A6s:0.0795, A8s:0.0015, A9s:0.0029, ATs:0.4391, AJs:0.2158, AQs:0.5487, AKs:0.0185, AA:0.0006"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "Q2o:0.0564, A2o:0.034, A3o:0.0477, 43s:0.0061, Q4o:0.0258, K4o:0.0322, A4o:0.0495, 52s:0.0002, Q5o:0.0314, K5o:0.0001, A5o:0.0312, 64s:0.0007, A6o:0.1013, 72s:0.0001, 74s:0.0005, K7o:0.0006, A7o:0.1457, 83s:0.0049, Q8o:0.0083, A8o:0.0073, 97s:0.0007, A9o:0.0215, T4s:0.0011, T7s:0.0083, QTo:0.0093, J6s:0.002, J9s:0.0001, JTs:0.0003, JJ:0.0025, QJo:0.0052, Q2s:0.0341, Q3s:0.1307, Q4s:0.0341, Q6s:0.0061, Q7s:0.0227, Q8s:0.0026, Q9s:0.0977, QJs:0.1157, QQ:0.6456, AQo:0.5442, K3s:0.0002, K4s:0.0003, K5s:0.0907, K6s:0.0002, K8s:0.0152, K9s:0.0051, KTs:0.0046, KJs:0.0133, KQs:0.0002, KK:0.0019, AKo:0.1755, A2s:0.075, A3s:0.0034, A4s:0.0012, A5s:0.0271, A6s:0.1354, A7s:0.0265, A8s:0.0358, A9s:0.0055, ATs:0.0111, AJs:0.0008, AQs:0.0548, AKs:0.4587, AA:0.999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0001, K4o:0.1151, K5o:0.0577, A5o:0.0003, 64s:0.0002, 65s:0.0017, K6o:0.0123, 74s:0.0002, 76s:0.1068, K7o:0.0152, 96s:0.0005, 99:0.0139, K9o:0.002, J5s:0.0001, JJ:0.0002, Q3s:0.0107, Q4s:0.0007, Q5s:0.0002, Q6s:0.0042, Q7s:0.0014, Q8s:0.0012, Q9s:0.0296, QTs:0.0005, QJs:0.0025, QQ:0.1876, KQo:0.9652, AQo:0.1378, K2s:0.71, K3s:0.3459, K4s:0.3856, K5s:0.6928, K6s:0.4477, K7s:0.4167, K8s:0.4096, K9s:0.3924, KTs:0.4704, KJs:0.3995, KQs:0.9894, KK:0.9981, AKo:0.7328, A2s:0.2292, A3s:0.3229, A4s:0.1287, A5s:0.1429, A6s:0.0091, A7s:0.2067, A8s:0.0137, A9s:0.0221, ATs:0.0419, AQs:0.3952, AKs:0.5227, AA:0.0004"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0004, QQ:0.4967, KK:0.9998, AKo:0.9898, A7s:0.0006, A8s:0.0001, AQs:0.0002, AKs:0.99, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.5696, KK, AKo:0.9988, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, A4s:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.1255, 33:0.1097, A3o:0.1909, 44:0.1367, 52s:0.4026, 53s:0.0012, 55:0.2132, A5o:0.0621, 64s:0.0003, 65s:0.1345, 66:0.1017, 74s:0.0001, 75s:0.096, 76s:0.0001, 77:0.085, 85s:0.0747, 86s:0.0004, 88:0.2235, A8o:0.0872, 93s:0.0001, 97s:0.0001, 98s:0.1129, 99:0.0243, A9o:0.0003, T9s:0.1614, TT:0.0064, ATo:0.1569, J7s:0.0019, J8s:0.0002, JJ:0.1779, Q3s:0.0002, Q5s:0.0006, Q7s:0.0007, QTs:0.002, QQ:0.2107, AQo:0.4021, K5s:0.0755, K6s:0.0002, K8s:0.0582, K9s:0.0538, KQs:0.0013, KK:0.1121, AKo:0.0467, A2s:0.3532, A3s:0.1415, A4s:0.2292, A5s:0.0009, A6s:0.3567, A7s:0.2762, A8s:0.1671, A9s:0.2639, ATs:0.4118, AJs:0.0035, AQs:0.6852, AKs:0.0521, AA:0.4064"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0279, A2o:0.0072, 33:0.041, 53o:0.0001, A3o:0.0364, 42s:0.0131, 43s:0.0077, 44:0.1429, 64o:0.0076, A4o:0.0311, 52s:0.008, 53s:0.0154, 54s:0.2474, 55:0.1147, 65o:0.0069, 75o:0.0001, A5o:0.1096, 62s:0.0098, 63s:0.0008, 64s:0.1002, 65s:0.0461, 66:0.2219, A6o:0.1303, 73s:0.0006, 74s:0.0041, 75s:0.143, 76s:0.0153, 77:0.0748, 87o:0.0004, A7o:0.1258, 83s:0.0025, 85s:0.0021, 86s:0.0129, 87s:0.0132, 88:0.0928, 98o:0.0001, J8o:0.0001, Q8o:0.0002, A8o:0.1929, 92s:0.0012, 93s:0.001, 95s:0.0001, 96s:0.0193, 97s:0.0021, 98s:0.0069, 99:0.1269, J9o:0.0032, A9o:0.0599, T2s:0.0003, T5s:0.0003, T6s:0.0709, T7s:0.0001, T8s:0.0059, T9s:0.0069, TT:0.1413, ATo:0.0614, J3s:0.0003, J7s:0.0103, J8s:0.0015, J9s:0.0377, JTs:0.0019, JJ:0.0006, AJo:0.0134, Q2s:0.0058, Q3s:0.0008, Q5s:0.0169, Q6s:0.0007, Q7s:0.0002, Q8s:0.0018, Q9s:0.0001, QTs:0.0009, QQ:0.0529, AQo:0.0532, K2s:0.0006, K5s:0.0289, K7s:0.0004, K9s:0.1756, KTs:0.1348, KJs:0.0003, KQs:0.0043, KK:0.8875, AKo:0.9525, A2s:0.2889, A3s:0.3918, A4s:0.3202, A5s:0.2169, A6s:0.2232, A7s:0.0355, A8s:0.2796, A9s:0.1254, ATs:0.2174, AJs:0.2519, AQs:0.0906, AKs:0.9476, AA:0.5936"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0879, 66:0.012, 74s:0.0001, 76s:0.0003, 77:0.0002, A7o:0.0001, 83s:0.0002, 85s:0.0001, 88:0.0006, A8o:0.0003, 92s:0.0001, 94s:0.0002, 95s:0.0008, 99:0.0004, T6s:0.0004, T8s:0.0005, TT:0.0416, ATo:0.0001, J2s:0.0001, J4s:0.0068, J8s:0.0001, JTs:0.0001, JJ:0.0007, KJo:0.0001, AJo:0.0003, Q7s:0.0002, Q8s:0.0004, QTs:0.0001, QJs:0.0002, QQ:0.1903, AQo:0.153, K5s:0.0001, K6s:0.0005, K7s:0.0002, K8s:0.0001, KJs:0.0002, KQs:0.0001, KK:0.1633, AKo:0.0002, A2s:0.0001, A4s:0.0015, A5s:0.0002, A7s:0.0001, A9s:0.0012, ATs:0.0095, AJs:0.0059, AQs:0.5294, AKs:0.0002, AA:0.8721"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0617, A2o:0.0522, 32s:0.0173, 33:0.0727, A3o:0.0984, 43s:0.0093, 44:0.0372, A4o:0.1113, 52s:0.0084, 53s:0.0193, 54s:0.0284, 55:0.0996, 65o:0.0312, A5o:0.107, 63s:0.0515, 65s:0.1121, 66:0.1133, 76o:0.0104, A6o:0.0959, 74s:0.0253, 75s:0.0491, 76s:0.0638, 77:0.1354, A7o:0.0746, 85s:0.031, 86s:0.0182, 87s:0.0509, 88:0.0807, A8o:0.1036, 93s:0.0007, 95s:0.0081, 96s:0.0549, 97s:0.0429, 98s:0.025, 99:0.087, A9o:0.0918, T7s:0.017, T9s:0.0878, TT:0.2019, ATo:0.107, J8s:0.01, J9s:0.0081, JTs:0.0405, JJ:0.0918, AJo:0.1115, Q2s:0.0003, Q6s:0.0001, Q7s:0.0001, Q9s:0.038, QTs:0.0475, QJs:0.0001, QQ:0.5439, AQo:0.1667, K2s:0.0081, K3s:0.0332, K4s:0.0267, K5s:0.0217, K6s:0.0264, K7s:0.04, K8s:0.0046, K9s:0.035, KTs:0.074, KJs:0.0521, KQs:0.0329, KK:0.8367, AKo:0.9997, A2s:0.1526, A3s:0.2734, A4s:0.231, A5s:0.282, A6s:0.1464, A7s:0.1586, A8s:0.1744, A9s:0.2287, ATs:0.2211, AJs:0.1278, AQs:0.2056, AKs:0.9995, AA:0.1279"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|HJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0001, 43s:0.0003, 55:0.0002, 66:0.0004, 77:0.0001, 84s:0.0002, 88:0.0001, 95s:0.0002, 96s:0.0001, 99:0.0003, TT:0.0083, JJ:0.0169, Q8s:0.0002, QQ, AQo:0.1785, K2s:0.0001, K4s:0.0001, K8s:0.0011, KK, AKo:0.9737, ATs:0.0004, AQs:0.5738, AKs:0.9964, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0001, AQo:0.0001, KK:0.6208, AKo:0.1714, AQs:0.0003, AKs:0.139, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|LJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52s:0.0001, 76s:0.0004, 99:0.3342, T9s:0.0006, TT:0.4412, J8s:0.0001, JJ:0.468, AJo:0.0002, QQ:0.288, AQo:0.0575, K4s:0.0001, KTs:0.0001, KK, AKo:0.9967, A2s:0.0002, A3s:0.0001, A6s:0.0001, A7s:0.001, ATs:0.0197, AJs:0.0002, AQs:0.1434, AKs:0.9966, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BB:3BET@6|LJ:CALL@4",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, K3o:0.0001, A3o:0.0001, 42s:0.0001, K6o:0.0001, A6o:0.0002, 72s:0.0001, 74s:0.0001, 77:0.0008, 86s:0.0001, 94s:0.0002, 95s:0.0008, 97s:0.0001, 99:0.2621, T3s:0.0002, T4s:0.0001, T7s:0.0008, T9s:0.0002, J4s:0.0003, J6s:0.0001, J7s:0.0008, J8s:0.0002, JTs:0.0002, KJo:0.0001, AJo:0.0001, Q3s:0.0005, Q4s:0.0001, Q6s:0.0003, Q7s:0.0002, Q8s:0.0001, QTs:0.0003, QJs:0.0001, QQ:0.6114, K2s:0.0005, K4s:0.0002, K5s:0.0003, K6s:0.0003, KJs:0.0006, KQs:0.0018, KK:0.4248, AKo:0.0003, A2s:0.0016, A4s:0.0001, A5s:0.0011, A6s:0.0107, A8s:0.0003, A9s:0.0005, ATs:0.1005, AJs:0.0043, AQs:0.3239, AKs:0.0103, AA:0.0017"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, J2o:0.0001, 32s:0.0006, 33:0.0004, 73o:0.0006, Q3o:0.0002, A3o:0.0001, 42s:0.0001, 43s:0.0005, 44:0.0005, 54o:0.0001, 74o:0.0001, J4o:0.0001, 53s:0.0002, 55:0.001, 65o:0.0001, Q5o:0.0001, 63s:0.0001, 65s:0.0016, 66:0.0133, 76o:0.0001, T6o:0.0001, J6o:0.0002, Q6o:0.0001, K6o:0.0001, A6o:0.0008, 73s:0.0008, 75s:0.0001, 77:0.0011, Q7o:0.0001, K7o:0.0001, A7o:0.0001, 83s:0.0003, 84s:0.0011, 85s:0.0001, 87s:0.0013, Q8o:0.0001, A8o:0.0012, 94s:0.0001, 95s:0.0004, 97s:0.0003, 99:0.0795, A9o:0.0002, T2s:0.0001, T3s:0.0003, T4s:0.0003, T7s:0.0004, T8s:0.0001, T9s:0.0001, TT:0.0011, JTo:0.0001, QTo:0.0002, ATo:0.0007, J2s:0.0008, J3s:0.0008, J4s:0.0004, J5s:0.0003, J6s:0.0001, J7s:0.0001, J8s:0.0001, JTs:0.0004, JJ:0.1068, QJo:0.0002, AJo:0.0004, Q2s:0.0002, Q3s:0.0001, Q4s:0.0001, Q6s:0.0003, Q9s:0.0002, QTs:0.0002, QQ:0.0032, KQo:0.0003, AQo:0.0003, K3s:0.0001, K4s:0.0003, K6s:0.0001, K7s:0.0003, K8s:0.0003, K9s:0.0002, KTs:0.0007, KJs:0.0001, KQs:0.0001, KK:0.456, AKo:0.5026, A2s:0.0058, A3s:0.4379, A5s:0.0001, A6s:0.0347, A7s:0.0009, A8s:0.0009, A9s:0.0005, ATs:0.1774, AJs:0.3566, AQs:0.2202, AKs:0.5713, AA:0.9983"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 99:0.0004, TT:0.0005, JJ:0.0008, Q7s:0.0001, QQ:0.0319, K7s:0.0001, KK, AKo:0.995, A6s:0.0001, A7s:0.0002, AQs:0.0001, AKs:0.9778, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.5886, KK, AKo:0.9946, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 52o:0.0002, A2o:0.0001, 32s:0.0001, 33:0.0002, 43s:0.0002, 44:0.0004, 54o:0.0003, T4o:0.0001, 53s:0.0001, 54s:0.0009, 55:0.0301, 63s:0.0009, 64s:0.0066, 65s:0.0074, 66:0.0001, 76o:0.0002, J6o:0.0001, A6o:0.0001, 74s:0.0007, 77:0.1325, J7o:0.0005, A7o:0.0006, 82s:0.0037, 88:0.0175, K8o:0.0008, A8o:0.0003, 92s:0.0002, 93s:0.0013, 94s:0.0004, 95s:0.0097, 96s:0.0001, 97s:0.0101, 98s:0.0062, 99:0.0006, J9o:0.0002, K9o:0.0001, A9o:0.0017, T2s:0.0073, T4s:0.0001, T6s:0.015, T7s:0.0003, T8s:0.0025, T9s:0.0014, TT:0.0006, J4s:0.0001, J5s:0.0007, J6s:0.0182, J7s:0.0039, J9s:0.0008, JJ:0.0001, Q2s:0.0053, Q3s:0.0026, Q4s:0.0006, Q8s:0.0001, Q9s:0.0031, QTs:0.0001, QQ:0.0077, KQo:0.0009, AQo:0.0628, K2s:0.0008, K3s:0.0002, K4s:0.0032, K5s:0.002, K6s:0.0018, K7s:0.0173, K8s:0.0056, K9s:0.0001, KTs:0.0039, KJs:0.0007, KQs:0.0001, KK:0.2781, AKo:0.1164, A2s:0.0008, A3s:0.0205, A4s:0.0066, A5s:0.0595, A6s:0.0043, A7s:0.007, A8s:0.0687, A9s:0.0172, AQs:0.4121, AKs:0.0575, AA:0.047"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0386, K2o:0.0009, A2o:0.1344, 32s:0.0033, 33:0.1438, Q3o:0.0003, A3o:0.0628, 42s:0.0001, 43s:0.0043, 44:0.0812, 54o:0.002, 64o:0.0289, J4o:0.0001, K4o:0.0001, A4o:0.1546, 52s:0.0052, 53s:0.1235, 54s:0.0267, 55:0.2858, 65o:0.0006, K5o:0.0002, A5o:0.4149, 62s:0.0012, 63s:0.0046, 64s:0.5043, 65s:0.0332, 66:0.0392, 76o:0.0276, 86o:0.0186, 96o:0.0003, T6o:0.0148, Q6o:0.0006, K6o:0.0007, A6o:0.1896, 73s:0.0196, 74s:0.1068, 75s:0.1093, 76s:0.0265, 77:0.1643, T7o:0.0002, J7o:0.0024, K7o:0.0006, A7o:0.099, 82s:0.0007, 83s:0.0011, 85s:0.0438, 86s:0.0265, 87s:0.2241, 88:0.1134, 98o:0.0029, K8o:0.0001, A8o:0.0335, 94s:0.001, 95s:0.0042, 96s:0.0003, 97s:0.0556, 98s:0.2054, 99:0.3297, K9o:0.0001, A9o:0.0783, T2s:0.055, T4s:0.0067, T6s:0.1868, T7s:0.0601, T8s:0.0017, T9s:0.3493, TT:0.6339, ATo:0.3057, J2s:0.0142, J3s:0.0156, J5s:0.0001, J6s:0.0001, J7s:0.002, J8s:0.0033, J9s:0.0069, JTs:0.0617, JJ:0.0795, QJo:0.0007, KJo:0.0005, AJo:0.0926, Q2s:0.021, Q5s:0.0001, Q6s:0.105, Q8s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.001, QQ:0.2473, KQo:0.0004, AQo:0.196, K2s:0.0006, K3s:0.0004, K4s:0.001, K5s:0.0009, K6s:0.0153, K7s:0.2069, K8s:0.0251, KTs:0.0247, KJs:0.02, KQs:0.0008, KK:0.6501, AKo:0.8834, A2s:0.6345, A3s:0.4108, A4s:0.9856, A5s:0.2215, A6s:0.808, A7s:0.376, A8s:0.5464, A9s:0.572, ATs:0.7482, AJs:0.5677, AQs:0.2436, AKs:0.9405, AA:0.953"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2128, 33:0.4793, 44:0.4835, 54s:0.3038, 55:0.5755, 65s:0.0668, 66:0.6531, 76s:0.1068, 77:0.8491, 84s:0.0001, 87s:0.0567, 88:0.5587, 99:0.3259, T8s:0.0006, T9s:0.0031, TT:0.1429, ATo:0.001, J9s:0.0001, JTs:0.0002, JJ:0.0836, AJo:0.0408, Q8s:0.0002, QQ:0.4032, AQo:0.1028, K2s:0.0036, K3s:0.0312, K4s:0.0292, K5s:0.0001, K6s:0.003, K7s:0.0001, K8s:0.0005, K9s:0.0058, KTs:0.2366, KJs:0.1987, KK:0.0014, AKo:0.1839, A2s:0.0091, A3s:0.0001, A4s:0.0033, A5s:0.0184, A6s:0.0041, A7s:0.0493, A8s:0.0006, A9s:0.1101, ATs:0.0198, AJs:0.0446, AQs:0.5972, AKs:0.2424"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0022, A2o:0.0554, 32s:0.0005, 33:0.0475, A3o:0.1448, 42s:0.0005, 43s:0.0004, 44:0.1791, A4o:0.0805, 53s:0.0038, 54s:0.1795, 55:0.0682, 65o:0.0003, A5o:0.0924, 62s:0.0004, 63s:0.0002, 64s:0.0021, 65s:0.0354, 66:0.0127, 76o:0.0007, A6o:0.0123, 73s:0.0041, 75s:0.0128, 76s:0.0106, 77:0.0156, 97o:0.0004, A7o:0.0458, 86s:0.0097, 87s:0.0002, 88:0.0035, K8o:0.0001, A8o:0.0102, 95s:0.0013, 96s:0.0001, 97s:0.0003, 98s:0.0047, 99:0.0971, A9o:0.0622, T2s:0.0001, T4s:0.0004, T6s:0.0014, T7s:0.0017, T8s:0.0003, T9s:0.019, TT:0.1753, JTo:0.0004, ATo:0.0768, J2s:0.0001, J3s:0.0007, J5s:0.0006, J7s:0.0018, J8s:0.0018, JTs:0.0004, JJ:0.1152, KJo:0.0007, AJo:0.0256, Q9s:0.0427, QQ:0.5016, AQo:0.2759, K2s:0.0017, K5s:0.0009, K8s:0.0001, K9s:0.0005, KTs:0.0022, KJs:0.0007, KQs:0.1061, KK:0.9985, AKo:0.8155, A2s:0.3597, A3s:0.4382, A4s:0.5393, A5s:0.4118, A6s:0.1225, A7s:0.1592, A8s:0.3787, A9s:0.1323, ATs:0.2576, AJs:0.433, AQs:0.2478, AKs:0.7575, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|HJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0001, JJ:0.059, QQ:0.9524, AQo:0.0142, KJs:0.0002, KQs:0.0001, KK, AKo:0.5335, A2s:0.0005, A7s:0.0001, A8s:0.0001, AQs:0.0548, AKs:0.9918, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|LJ:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KQs:0.0001, KK:0.0014, AKo:0.0004, A4s:0.0001, A6s:0.0001, AQs:0.0002, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|LJ:4BET@19",
    "heroPos": "BTN",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0008, 54s:0.0001, 55:0.0005, 65s:0.0002, 66:0.0025, 77:0.0018, 88:0.0003, 99:0.0118, TT:0.0031, JJ:0.8665, AJo:0.0023, QQ:0.77, AQo:0.0016, K4s:0.0001, K6s:0.0001, KTs:0.0008, KJs:0.0002, KQs:0.0005, KK, AKo:0.355, A2s:0.0016, A3s:0.0001, A6s:0.0001, A7s:0.0003, A9s:0.0032, ATs:0.0008, AJs:0.0011, AQs:0.0027, AKs:0.9713, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|BTN:3BET@5|LJ:CALL@3",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0007, 82o:0.0001, T2o:0.0002, K2o:0.0003, 32s:0.0001, 33:0.0287, 63o:0.0007, T3o:0.0001, Q3o:0.0001, K3o:0.0001, 43s:0.0064, 44:0.0021, 54o:0.0001, 94o:0.0002, J4o:0.0001, Q4o:0.0009, K4o:0.0001, 53s:0.0017, 55:0.0004, 65o:0.0001, K5o:0.0013, A5o:0.0005, 62s:0.0007, 63s:0.0006, 65s:0.0008, 66:0.0005, 76o:0.0001, T6o:0.0001, J6o:0.0004, K6o:0.0003, A6o:0.0001, 73s:0.0023, 74s:0.0023, 75s:0.0016, 76s:0.0001, 77:0.0017, T7o:0.0001, Q7o:0.0001, 82s:0.0004, 83s:0.0057, 84s:0.002, 85s:0.0024, 86s:0.0004, 88:0.0001, T8o:0.0004, J8o:0.0008, K8o:0.0008, 92s:0.0015, 96s:0.0009, 97s:0.0062, 98s:0.0005, 99:0.0028, T9o:0.0014, A9o:0.0023, T2s:0.0006, T3s:0.0001, T4s:0.0001, T6s:0.0029, T7s:0.0001, T8s:0.0005, T9s:0.0054, TT:0.0006, JTo:0.0004, QTo:0.0001, KTo:0.0002, J2s:0.0003, J3s:0.0003, J4s:0.0001, J5s:0.0051, J6s:0.0004, J7s:0.0001, J8s:0.0016, JJ:0.0022, AJo:0.0011, Q2s:0.0002, Q3s:0.001, Q4s:0.0015, Q5s:0.0049, Q6s:0.0021, Q7s:0.002, Q8s:0.0003, Q9s:0.0027, QTs:0.0003, QQ:0.0006, K2s:0.0003, K3s:0.0035, K4s:0.0001, K5s:0.0022, K6s:0.0208, K7s:0.0013, K8s:0.0002, KTs:0.0003, KJs:0.009, KQs:0.0106, KK:0.2857, AKo:0.0661, A2s:0.0002, A3s:0.002, A4s:0.0404, A5s:0.0024, A6s:0.0175, A8s:0.0033, A9s:0.0006, ATs:0.1068, AJs:0.0688, AQs:0.002, AKs:0.0128, AA:0.0012"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0008, 32o:0.0001, 52o:0.0003, 62o:0.0001, 72o:0.0001, 82o:0.0002, 92o:0.0002, Q2o:0.0002, K2o:0.0009, A2o:0.0014, 32s:0.0005, 33:0.0046, 43o:0.0002, 63o:0.0005, 73o:0.0008, 83o:0.0005, T3o:0.0001, J3o:0.0004, K3o:0.0001, A3o:0.0011, 42s:0.0005, 43s:0.0005, 44:0.0052, 54o:0.001, 64o:0.0002, 84o:0.0001, 94o:0.0001, J4o:0.0001, K4o:0.0008, A4o:0.0001, 53s:0.0036, 54s:0.0004, 55:0.0001, 65o:0.001, 85o:0.0001, Q5o:0.0001, K5o:0.0007, 62s:0.0001, 63s:0.0001, 64s:0.0005, 65s:0.0002, 66:0.0008, T6o:0.002, Q6o:0.0002, K6o:0.0004, A6o:0.0022, 72s:0.001, 73s:0.0001, 74s:0.0014, 75s:0.0005, 76s:0.0006, 77:0.0023, 97o:0.0002, T7o:0.0001, K7o:0.0007, A7o:0.0002, 82s:0.0002, 83s:0.0004, 84s:0.0009, 85s:0.0001, 86s:0.0003, 87s:0.0001, 88:0.0007, 98o:0.0009, K8o:0.0004, A8o:0.0006, 95s:0.0004, 96s:0.0004, 97s:0.0005, 98s:0.0031, 99:0.0012, J9o:0.0001, Q9o:0.0002, K9o:0.0004, A9o:0.0002, T2s:0.0007, T3s:0.0016, T4s:0.0004, T5s:0.0006, T6s:0.0005, T7s:0.0007, T8s:0.0007, T9s:0.002, TT:0.0008, QTo:0.0007, KTo:0.0004, ATo:0.001, J3s:0.0006, J4s:0.0008, J6s:0.001, J7s:0.0001, J8s:0.0001, JTs:0.0003, JJ:0.0003, KJo:0.0003, AJo:0.0002, Q2s:0.0038, Q3s:0.0004, Q4s:0.0307, Q5s:0.0055, Q6s:0.0012, Q7s:0.0001, Q8s:0.0009, Q9s:0.0012, QTs:0.0004, QQ:0.0053, KQo:0.0004, AQo:0.0007, K2s:0.0142, K3s:0.0097, K5s:0.0003, K6s:0.0038, K7s:0.0002, K8s:0.0005, K9s:0.0012, KTs:0.0007, KJs:0.0002, KQs:0.0048, KK:0.401, AKo:0.0083, A2s:0.0001, A3s:0.0141, A5s:0.0021, A6s:0.0005, A7s:0.0126, A8s:0.0002, A9s:0.0035, ATs:0.0165, AJs:0.0041, AQs:0.0121, AKs:0.0184, AA:0.9988"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, JJ:0.016, QQ:0.1823, AQo:0.0001, KTs:0.0001, KK, AKo:0.9981, A5s:0.0001, AJs:0.0001, AQs:0.0002, AKs:0.9926, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0189, QQ:0.5597, KK, AKo:0.999, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0003, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T2o:0.0002, 73o:0.0001, 93o:0.0001, 42s:0.0001, 43s:0.0003, 44:0.0018, A4o:0.0022, 54s:0.0108, 55:0.0004, J5o:0.0001, 63s:0.0005, 64s:0.0206, 65s:0.0235, 66:0.0001, 76o:0.0001, 86o:0.0001, A6o:0.0452, 73s:0.0003, 74s:0.0003, 75s:0.0002, 76s:0.0001, 86s:0.0015, 87s:0.0001, 93s:0.001, 96s:0.0071, 98s:0.0136, T6s:0.0002, T7s:0.0004, T8s:0.0001, T9s:0.0014, TT:0.0091, ATo:0.0345, J2s:0.0001, J4s:0.0011, J5s:0.0001, J6s:0.0002, J7s:0.0003, J9s:0.0414, JJ:0.0075, KJo:0.0001, AJo:0.0051, Q4s:0.0003, Q6s:0.0001, Q8s:0.0001, Q9s:0.0124, QTs:0.0096, QJs:0.0612, QQ:0.0335, AQo:0.1729, K2s:0.0145, K4s:0.0208, K5s:0.0063, K6s:0.0011, K8s:0.0003, K9s:0.0002, KTs:0.0012, KQs:0.0017, KK:0.3439, AKo:0.0012, A2s:0.0381, A3s:0.0008, A4s:0.0014, A5s:0.2141, A7s:0.0612, A8s:0.0019, A9s:0.0057, ATs:0.0002, AJs:0.0155, AQs:0.0808, AKs:0.0374, AA:0.0564"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0194, A2o:0.3369, 32s:0.0114, 33:0.1727, A3o:0.3094, 42s:0.0032, 43s:0.3375, 44:0.409, 54o:0.0345, 64o:0.0169, J4o:0.0001, A4o:0.4168, 52s:0.0095, 53s:0.0341, 54s:0.135, 55:0.0764, 65o:0.0241, 85o:0.0004, K5o:0.0012, A5o:0.2889, 62s:0.0339, 63s:0.0439, 64s:0.0009, 65s:0.2432, 66:0.0302, K6o:0.0004, A6o:0.2816, 72s:0.0001, 73s:0.0026, 74s:0.0122, 75s:0.0282, 76s:0.2162, 77:0.058, 87o:0.001, 97o:0.0004, A7o:0.1761, 83s:0.065, 84s:0.0013, 85s:0.0518, 86s:0.0231, 87s:0.0556, 88:0.2635, 98o:0.0303, T8o:0.0012, Q8o:0.0001, K8o:0.0002, A8o:0.0687, 93s:0.0003, 95s:0.005, 96s:0.4322, 97s:0.0003, 98s:0.0403, 99:0.096, A9o:0.2444, T3s:0.0146, T5s:0.0082, T7s:0.0028, T8s:0.0119, T9s:0.1198, TT:0.1189, ATo:0.0304, J2s:0.002, J4s:0.0001, J7s:0.0831, J8s:0.0597, JTs:0.0491, JJ:0.2821, AJo:0.0464, Q3s:0.0044, Q4s:0.001, Q6s:0.0005, Q7s:0.0279, Q8s:0.0005, Q9s:0.0003, QTs:0.0049, QJs:0.0001, QQ:0.0375, AQo:0.1915, K2s:0.0052, K4s:0.0309, K5s:0.0768, K6s:0.0075, K7s:0.0006, K8s:0.0009, K9s:0.0001, KTs:0.2223, KJs:0.0005, KQs:0.0015, KK:0.6376, AKo:0.9638, A2s:0.7968, A3s:0.7769, A4s:0.523, A5s:0.5712, A6s:0.7043, A7s:0.7648, A8s:0.8808, A9s:0.7905, ATs:0.286, AJs:0.702, AQs:0.1494, AKs:0.9612, AA:0.9436"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0342, 33:0.0802, 44:0.0287, 54s:0.0134, 55:0.2178, 65s:0.0312, 66:0.483, 72s:0.0002, 74s:0.0013, 76s:0.0772, 77:0.1544, 83s:0.0007, 85s:0.017, 86s:0.0359, 87s:0.0401, 88:0.1045, A8o:0.0002, 93s:0.0001, 97s:0.0349, 98s:0.0004, 99:0.0323, T2s:0.0009, T4s:0.0001, T5s:0.0003, T7s:0.0007, TT:0.3668, ATo:0.0043, JTs:0.0001, JJ:0.2041, Q5s:0.0023, Q9s:0.0042, QJs:0.0022, QQ:0.5034, AQo:0.0969, K4s:0.0002, K5s:0.0375, K9s:0.0168, KJs:0.0013, KQs:0.0034, KK:0.0439, AKo:0.0004, A2s:0.0037, A5s:0.0003, A6s:0.0041, A7s:0.0001, A8s:0.0007, A9s:0.0054, ATs:0.0086, AJs:0.0315, AQs:0.2888, AKs:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0391, A2o:0.4951, 33:0.0831, A3o:0.4562, 42s:0.0093, 44:0.1773, 54o:0.0031, 94o:0.0001, T4o:0.0001, A4o:0.3015, 52s:0.0003, 53s:0.0272, 54s:0.2325, 55:0.3564, 65o:0.0053, Q5o:0.0024, K5o:0.006, A5o:0.5953, 63s:0.0069, 64s:0.0085, 65s:0.2939, 66:0.2789, 76o:0.0063, A6o:0.2187, 73s:0.0069, 74s:0.0076, 75s:0.2328, 76s:0.0588, 77:0.2171, K7o:0.0057, A7o:0.2682, 83s:0.0003, 85s:0.0093, 86s:0.0195, 87s:0.0569, 88:0.1328, 98o:0.001, K8o:0.0038, A8o:0.0941, 93s:0.0056, 94s:0.0013, 96s:0.0035, 97s:0.0732, 98s:0.0001, 99:0.2345, K9o:0.0062, A9o:0.0776, T2s:0.0056, T3s:0.0016, T5s:0.0027, T7s:0.0001, T9s:0.0017, TT:0.1226, ATo:0.4181, J7s:0.0001, J8s:0.0085, J9s:0.0016, JTs:0.0001, JJ:0.0575, QJo:0.0001, KJo:0.0053, AJo:0.1623, Q2s:0.0048, Q5s:0.01, Q7s:0.0105, Q8s:0.0111, QTs:0.0058, QJs:0.0069, QQ:0.1599, KQo:0.0022, AQo:0.1682, K2s:0.0074, K3s:0.0121, K4s:0.0093, K5s:0.0159, K6s:0.0414, K7s:0.0087, K8s:0.0069, K9s:0.0013, KTs:0.0122, KJs:0.0059, KQs:0.0669, KK:0.9561, AKo:0.9996, A2s:0.6239, A3s:0.7265, A4s:0.9058, A5s:0.7687, A6s:0.7138, A7s:0.562, A8s:0.7469, A9s:0.6555, ATs:0.7337, AJs:0.5935, AQs:0.7089, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|HJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0008, 42s:0.0001, 66:0.0001, 99:0.0019, TT:0.0002, JJ:0.0003, Q7s:0.0001, Q9s:0.0001, QJs:0.0003, QQ, AQo:0.0013, K9s:0.0001, KJs:0.0001, KK, AKo:0.7833, A3s:0.0004, AJs:0.0001, AQs:0.2954, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|LJ:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 98s:0.0001, KK:0.2674, AKo:0.0054, A6s:0.0001, A8s:0.0002, AJs:0.0001, AKs:0.0799, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|LJ:4BET@19",
    "heroPos": "CO",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 55:0.0009, 77:0.0002, 88:0.0302, 95s:0.0001, 99:0.239, TT:0.625, JJ:0.9149, Q8s:0.0001, QQ:0.7794, AQo:0.0865, K8s:0.0001, KTs:0.0002, KK, AKo:0.9987, A4s:0.0002, A9s:0.0001, AJs:0.1133, AQs:0.4643, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|CO:3BET@5|LJ:CALL@3",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, Q2o:0.0001, A2o:0.0001, 32s:0.002, 33:0.001, 42s:0.0003, 43s:0.0001, 44:0.0006, 54o:0.0001, 64o:0.0001, 74o:0.0001, Q4o:0.0001, A4o:0.0001, 53s:0.0012, 54s:0.0005, 55:0.0001, 75o:0.0001, Q5o:0.0001, K5o:0.0001, 65s:0.0017, 66:0.2843, 76o:0.0003, 72s:0.0001, 73s:0.0011, 74s:0.0001, 75s:0.0001, 77:0.0001, T7o:0.0016, Q7o:0.0001, K7o:0.0002, A7o:0.0001, 83s:0.0003, 84s:0.0001, 85s:0.0033, 86s:0.0001, 88:0.0004, T8o:0.0003, A8o:0.0001, 93s:0.0001, 95s:0.0001, 97s:0.0015, 98s:0.0001, 99:0.4705, A9o:0.0002, T4s:0.0069, T5s:0.0002, T6s:0.0026, T7s:0.0008, TT:0.0018, QTo:0.0001, KTo:0.0003, J2s:0.0023, J3s:0.0002, J4s:0.0003, J6s:0.0001, J9s:0.0012, Q2s:0.0009, Q3s:0.0009, Q4s:0.0001, Q6s:0.0005, Q7s:0.0005, Q8s:0.0011, Q9s:0.0006, QJs:0.0016, QQ:0.1111, K2s:0.0439, K3s:0.0023, K5s:0.0007, K6s:0.0012, K8s:0.0801, KJs:0.0001, KQs:0.0006, KK:0.412, AKo:0.0005, A2s:0.0046, A3s:0.0091, A4s:0.0136, A6s:0.0002, A7s:0.0089, A8s:0.0525, A9s:0.0001, ATs:0.0007, AJs:0.0006, AQs:0.0001, AKs:0.1857"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 52o:0.0001, Q2o:0.0001, K2o:0.0001, A2o:0.0001, 32s:0.0001, 33:0.0015, 63o:0.0001, Q3o:0.0002, A3o:0.0002, 42s:0.0004, 43s:0.0014, 44:0.0009, 64o:0.0001, K4o:0.0001, A4o:0.0001, 54s:0.0004, 55:0.0002, 75o:0.0001, 85o:0.0002, Q5o:0.0002, K5o:0.0002, 63s:0.0002, 65s:0.0074, 66:0.0008, 76o:0.0001, 96o:0.0002, K6o:0.0001, 72s:0.0001, 73s:0.0013, 74s:0.0004, 75s:0.0002, 76s:0.0003, 77:0.0001, T7o:0.0002, Q7o:0.0001, K7o:0.0001, A7o:0.0005, 83s:0.0001, 84s:0.0001, 85s:0.0022, 87s:0.0002, 88:0.0008, J8o:0.0002, Q8o:0.0001, A8o:0.0001, 98s:0.005, 99:0.0001, T9o:0.0001, J9o:0.0001, Q9o:0.0002, T2s:0.0003, T4s:0.0006, T6s:0.0013, T7s:0.0001, T9s:0.0001, TT:0.0077, JTo:0.0007, KTo:0.0002, ATo:0.0006, J2s:0.0001, J5s:0.0002, J6s:0.0002, J9s:0.0016, JJ:0.0001, AJo:0.0017, Q2s:0.0001, Q3s:0.0001, Q4s:0.0001, Q6s:0.0001, Q7s:0.0006, Q9s:0.0007, QTs:0.0002, QQ:0.0186, AQo:0.0126, K2s:0.0004, K3s:0.0001, K5s:0.0003, K6s:0.0008, K7s:0.0001, K8s:0.0049, KTs:0.0051, KQs:0.0027, KK:0.4774, AKo:0.0951, A2s:0.0043, A3s:0.0737, A4s:0.0003, A5s:0.0027, A7s:0.0001, A8s:0.0001, A9s:0.0551, ATs:0.0027, AJs:0.0078, AQs:0.0083, AKs:0.2977, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 77:0.0004, 88:0.0003, 99:0.0003, TT:0.0001, JTs:0.0001, JJ:0.0005, QQ:0.2004, AQo:0.0001, KQs:0.0002, KK, AKo:0.9982, A4s:0.0001, A6s:0.0001, A8s:0.0006, A9s:0.0001, ATs:0.0002, AJs:0.0001, AQs:0.0002, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0003, TT:0.0005, JJ:0.0007, QQ:0.7924, KK, AKo:0.9998, ATs:0.0003, AJs:0.0002, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@19|LJ:CALL@17",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 32o:0.0001, 33:0.0001, A3o:0.0016, 53s:0.0003, 54s:0.0002, 65o:0.0027, A5o:0.0002, A6o:0.0488, 75s:0.0003, 76s:0.0001, 77:0.0012, 82s:0.0001, 83s:0.0004, 84s:0.0002, A8o:0.0315, 93s:0.0001, 94s:0.0006, 96s:0.0687, 97s:0.0018, 98s:0.0005, 99:0.2147, A9o:0.0366, T2s:0.0006, T4s:0.0001, T7s:0.0002, TT:0.0002, J7s:0.0381, J8s:0.0287, J9s:0.0009, AJo:0.1601, Q5s:0.1189, Q8s:0.0002, QQ:0.0148, AQo:0.2279, K3s:0.0597, K4s:0.0001, K5s:0.0038, K7s:0.1353, K8s:0.0939, K9s:0.0048, KQs:0.0002, KK:0.1554, AKo:0.1137, A2s:0.0013, A3s:0.0003, A4s:0.1584, A5s:0.0004, A6s:0.0023, A7s:0.0792, A9s:0.0016, ATs:0.069, AJs:0.1152, AQs:0.2961, AKs:0.1432, AA:0.2869"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.6176, K2o:0.0068, A2o:0.0983, 32s:0.0001, 33:0.6496, 43o:0.0057, 53o:0.0011, K3o:0.0003, A3o:0.1971, 42s:0.0239, 43s:0.0001, 44:0.2883, 54o:0.0001, 74o:0.0025, T4o:0.0013, A4o:0.2042, 52s:0.0611, 53s:0.0103, 54s:0.3586, 55:0.244, 65o:0.0269, 75o:0.0053, 85o:0.0012, K5o:0.0002, A5o:0.5099, 62s:0.0007, 63s:0.075, 64s:0.2208, 65s:0.1985, 66:0.5823, 76o:0.0234, 86o:0.0015, A6o:0.0761, 73s:0.0002, 74s:0.0939, 75s:0.0949, 76s:0.1516, 77:0.6739, T7o:0.0006, A7o:0.1128, 82s:0.0479, 83s:0.1173, 84s:0.0083, 85s:0.206, 86s:0.1557, 87s:0.1071, 88:0.3431, 98o:0.0077, Q8o:0.0007, A8o:0.1208, 92s:0.0702, 93s:0.0048, 94s:0.0121, 96s:0.0001, 97s:0.0324, 99:0.348, T9o:0.0041, K9o:0.004, A9o:0.0142, T2s:0.0011, T3s:0.0041, T4s:0.0196, T5s:0.0558, T7s:0.0004, T8s:0.2347, T9s:0.163, TT:0.4661, ATo:0.065, J2s:0.0102, J4s:0.0768, J5s:0.0046, J6s:0.0001, J7s:0.0594, J8s:0.0403, J9s:0.2646, JTs:0.001, JJ:0.3363, KJo:0.0014, AJo:0.1205, Q3s:0.0012, Q5s:0.0008, Q6s:0.0097, Q8s:0.0059, Q9s:0.0008, QJs:0.0022, QQ:0.2012, KQo:0.0004, AQo:0.0284, K2s:0.0007, K3s:0.0769, K4s:0.0057, K5s:0.1131, K6s:0.01, K7s:0.016, K8s:0.0442, K9s:0.0023, KTs:0.0971, KJs:0.0035, KQs:0.0069, KK:0.8262, AKo:0.8863, A2s:0.7283, A3s:0.3128, A4s:0.4618, A5s:0.9067, A6s:0.4417, A7s:0.5437, A8s:0.4562, A9s:0.243, ATs:0.8315, AJs:0.5829, AQs:0.0301, AKs:0.8564, AA:0.7131"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A4o:0.0001, 53s:0.0001, A5o:0.0001, 65s:0.0124, 66:0.0031, 76s:0.0163, 87s:0.0003, 88:0.0013, 99:0.0001, T6s:0.0001, KTo:0.0002, ATo:0.0001, J8s:0.0001, J9s:0.0002, JTs:0.0004, JJ:0.0002, KJo:0.0004, Q3s:0.0001, QTs:0.0013, QJs:0.0011, QQ:0.5245, KQo:0.0001, AQo:0.3521, K3s:0.0001, K4s:0.0002, K7s:0.0001, K8s:0.0083, KTs:0.0076, KJs:0.0005, KQs:0.0001, KK:0.0406, A2s:0.0384, A3s:0.0005, A4s:0.0974, A5s:0.0429, A6s:0.0001, A7s:0.0096, A8s:0.0574, A9s:0.0543, ATs:0.0054, AJs:0.0562, AQs:0.7031, AKs:0.0001, AA:0.4573"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0205, A2o:0.0281, 33:0.0572, A3o:0.0081, 42s:0.0033, 43s:0.0029, 44:0.0152, A4o:0.0647, 53s:0.0004, 54s:0.0193, 55:0.0009, A5o:0.0405, 65s:0.06, 66:0.1749, A6o:0.0588, 74s:0.0001, 76s:0.0117, 77:0.1786, 97o:0.0001, A7o:0.0079, 86s:0.0005, 87s:0.0137, 88:0.0799, A8o:0.0355, 95s:0.0003, 96s:0.0001, 98s:0.0007, 99:0.0198, A9o:0.0261, T5s:0.0001, T8s:0.0194, T9s:0.0005, TT:0.0715, QTo:0.0004, ATo:0.0186, J6s:0.0002, J9s:0.0002, JTs:0.0001, JJ:0.0634, AJo:0.0195, Q2s:0.0013, Q3s:0.0003, Q4s:0.001, Q5s:0.0002, Q6s:0.0004, Q9s:0.002, QTs:0.0001, QQ:0.265, KQo:0.0009, AQo:0.0623, K2s:0.0007, K3s:0.0004, K5s:0.0009, K6s:0.0004, K7s:0.0178, K8s:0.0045, K9s:0.0009, KTs:0.0036, KJs:0.0004, KQs:0.0026, KK:0.9594, AKo:0.9998, A2s:0.1564, A3s:0.1555, A4s:0.125, A5s:0.1233, A6s:0.0766, A7s:0.0861, A8s:0.1401, A9s:0.1678, ATs:0.0381, AJs:0.1458, AQs:0.1948, AKs, AA:0.5427"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|HJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0002, 52s:0.0001, 55:0.0001, 65s:0.0001, 74s:0.0001, 77:0.0003, 84s:0.0001, 87s:0.0001, 88:0.0001, 93s:0.0001, 98s:0.0001, T2s:0.0001, T7s:0.0001, TT:0.0001, ATo:0.0001, J6s:0.0001, JJ:0.0003, AJo:0.0001, Q3s:0.0001, Q5s:0.0001, QQ:0.9278, AQo:0.1356, K5s:0.0003, KJs:0.0001, KK, AKo:0.9645, A2s:0.0002, A4s:0.0001, A7s:0.0001, A8s:0.0001, ATs:0.0002, AJs:0.0003, AQs:0.1074, AKs:0.9844, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, Q4s:0.0001, K6s:0.0001, KK:0.015, AKo:0.0008, A3s:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0006, 53s:0.0001, 55:0.0012, 63s:0.0001, 66:0.0054, 76o:0.0001, 74s:0.0002, 77:0.0829, 87s:0.0001, 88:0.1574, 93s:0.0001, 94s:0.0001, 96s:0.0001, 97s:0.0001, 99:0.4118, T4s:0.0001, TT:0.4493, J3s:0.0001, JJ:0.8137, Q5s:0.0001, QQ:0.7359, AQo:0.0001, K2s:0.0001, K4s:0.0001, KK, AKo:0.939, A3s:0.0002, A5s:0.0002, A6s:0.0008, A7s:0.0001, A8s:0.0016, ATs:0.1406, AJs:0.1375, AQs:0.2506, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|HJ:CALL@2|SB:3BET@6|LJ:CALL@4",
    "heroPos": "HJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "Q2o:0.0001, K2o:0.0001, 33:0.0001, 42s:0.0002, 43s:0.0011, J4o:0.0001, A4o:0.0003, 52s:0.0001, 53s:0.0002, 55:0.001, A5o:0.0001, 65s:0.0003, 66:0.0604, 72s:0.0001, 74s:0.001, 75s:0.0108, 76s:0.0943, 77:0.0606, 97o:0.0004, A7o:0.0001, 84s:0.0002, 85s:0.0001, 86s:0.0003, 88:0.0887, J8o:0.0002, K8o:0.0001, 93s:0.0003, 95s:0.0001, 96s:0.0003, 97s:0.0004, 98s:0.0004, 99:0.4213, K9o:0.0001, A9o:0.0001, T3s:0.0009, T5s:0.0003, T6s:0.0003, T7s:0.0587, T8s:0.0018, TT:0.0012, QTo:0.0001, ATo:0.0002, J2s:0.0001, J3s:0.0776, J4s:0.0001, J6s:0.0002, J8s:0.0006, J9s:0.0011, JJ:0.1862, AJo:0.0003, Q3s:0.0001, Q6s:0.0033, Q9s:0.0002, QTs:0.0001, QJs:0.0032, QQ:0.1798, AQo:0.0006, K4s:0.0008, K7s:0.0004, K8s:0.0438, K9s:0.0002, KTs:0.0065, KJs:0.0025, KQs:0.1507, KK:0.1855, AKo:0.0536, A2s:0.0015, A3s:0.0015, A4s:0.0136, A5s:0.0003, A6s:0.0001, A7s:0.0258, A8s:0.0001, A9s:0.0107, AQs:0.2175, AKs:0.2486, AA:0.0003"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 52o:0.0002, 62o:0.0001, K2o:0.0001, 33:0.179, T3o:0.0001, 42s:0.0001, 43s:0.0224, 44:0.0593, 74o:0.0001, 84o:0.0001, A4o:0.0001, 52s:0.0001, 54s:0.0679, 55:0.1059, 75o:0.0002, 85o:0.0001, 63s:0.0017, 64s:0.0001, 65s:0.0736, 66:0.0741, T6o:0.0001, 72s:0.0001, 73s:0.022, 74s:0.0001, 76s:0.0001, 77:0.122, K7o:0.0741, A7o:0.0003, 83s:0.0001, 84s:0.0001, 86s:0.1694, 87s:0.0921, 88:0.0002, J8o:0.0001, 92s:0.0001, 96s:0.0002, 98s:0.0515, 99:0.0002, K9o:0.0001, T5s:0.0002, T6s:0.0002, T7s:0.0006, T8s:0.0875, TT:0.2099, QTo:0.0001, ATo:0.0004, J2s:0.0001, J5s:0.0001, J6s:0.0002, J7s:0.0001, J8s:0.0001, J9s:0.0017, JTs:0.001, JJ:0.1551, KJo:0.0001, AJo:0.001, Q2s:0.0002, Q3s:0.1373, Q4s:0.0121, Q5s:0.0002, Q6s:0.0003, Q7s:0.1872, Q8s:0.0001, QTs:0.4135, QJs:0.0013, QQ:0.393, KQo:0.0041, AQo:0.0018, K2s:0.1114, K3s:0.1537, K5s:0.0965, K6s:0.0483, K7s:0.004, K8s:0.1478, K9s:0.2101, KTs:0.133, KJs:0.2415, KQs:0.0968, KK:0.7715, AKo:0.72, A2s:0.0006, A4s:0.2732, A5s:0.0051, A6s:0.0036, A7s:0.0609, A8s:0.0003, A9s:0.0024, ATs:0.0001, AJs:0.0007, AQs:0.0233, AKs:0.4803, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.4423, JJ, QQ, AQo:0.0003, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0002, QQ, KK, AKo:0.8629, AKs:0.993, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@19|BB:CALL@18",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1703, 33:0.26, A3o:0.0021, 42s:0.0011, 43s:0.139, 44:0.5624, 64o:0.0508, A4o:0.0061, 53s:0.4168, 54s:0.9399, 55:0.6771, 65o:0.0939, A5o:0.0187, 62s:0.0071, 63s:0.1095, 64s:0.5585, 65s:0.8669, 66:0.8398, 76o:0.0761, 74s:0.0881, 75s:0.7028, 76s:0.758, 77:0.4943, A7o:0.0014, 84s:0.0113, 85s:0.118, 86s:0.8036, 87s:0.8921, 88:0.1729, A8o:0.0034, 95s:0.0004, 96s:0.1607, 97s:0.1248, 98s:0.2956, 99:0.0019, T6s:0.0001, T7s:0.0271, T8s:0.0727, T9s:0.0914, TT:0.2994, KTo:0.0003, ATo:0.0639, J8s:0.0151, J9s:0.0165, JTs:0.0001, JJ:0.1662, AJo:0.0961, Q8s:0.0001, Q9s:0.0089, QTs:0.0016, QJs:0.0415, QQ:0.4705, AQo:0.6411, K2s:0.0143, K3s:0.0001, K4s:0.005, K5s:0.1272, K6s:0.0645, K7s:0.0031, K8s:0.0003, K9s:0.0004, KTs:0.2804, KJs:0.047, KQs:0.3841, A2s:0.006, A3s:0.0005, A4s:0.003, A5s:0.0142, A6s:0.0037, A7s:0.0163, A8s:0.0083, ATs:0.3532, AJs:0.4754, AQs:0.2909, AA:0.5206"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.7919, A2o:0.2519, 33:0.7301, A3o:0.2929, 42s:0.0001, 44:0.4371, A4o:0.4307, 53s:0.0001, 54s:0.0455, 55:0.319, A5o:0.5837, 62s:0.0001, 63s:0.0001, 64s:0.0039, 65s:0.1183, 66:0.1602, A6o:0.103, 74s:0.0014, 75s:0.0062, 76s:0.238, 77:0.5026, A7o:0.2316, 83s:0.0001, 85s:0.0012, 86s:0.0988, 87s:0.0898, 88:0.827, A8o:0.2126, 96s:0.012, 97s:0.0141, 98s:0.1785, 99:0.9981, A9o:0.0792, T8s:0.0001, T9s:0.0111, TT:0.3338, KTo:0.0001, ATo:0.0049, J8s:0.0015, J9s:0.0052, JTs:0.0017, JJ:0.8333, QJo:0.0001, AJo:0.444, Q4s:0.0001, Q6s:0.0001, Q8s:0.0002, Q9s:0.034, QTs:0.0013, QJs:0.0074, QQ:0.5295, AQo:0.2925, K2s:0.0276, K3s:0.0194, K4s:0.0986, K5s:0.0882, K6s:0.4554, K7s:0.2933, K8s:0.5745, K9s:0.8077, KTs:0.505, KJs:0.8346, KQs:0.5456, KK, AKo, A2s:0.9895, A3s:0.9995, A4s:0.9964, A5s:0.9857, A6s:0.996, A7s:0.9825, A8s:0.9915, A9s:0.9998, ATs:0.6468, AJs:0.5235, AQs:0.7091, AKs, AA:0.4794"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0007, 55:0.103, 66:0.0018, A6o:0.0001, 75s:0.0004, 76s:0.0012, 77:0.0168, 87s:0.0305, 88:0.0598, T3s:0.0003, TT:0.0092, J9s:0.0002, JTs:0.0001, JJ:0.0003, Q5s:0.0001, QQ:0.451, K6s:0.0002, K8s:0.0001, KTs:0.0002, KK, AKo, A2s:0.0469, A3s:0.0128, A4s:0.2476, A5s:0.4508, A6s:0.2734, A7s:0.001, A8s:0.6547, A9s:0.3416, ATs:0.0033, AJs:0.0339, AQs:0.399, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.001, KK:0.1399, A5s:0.0001, AJs:0.0001, AKs:0.01, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.001, 66:0.0022, 77:0.0038, 88:0.0053, 99:0.0292, TT:0.0307, JJ:0.1462, QQ:0.2033, KK, AKo:0.9883, A5s:0.0001, A9s:0.0001, AJs:0.0024, AQs:0.0045, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|BB:4BET@19|LJ:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0002, 65s:0.0001, 75s:0.0001, A7o:0.0001, 84s:0.0002, 88:0.0001, 95s:0.0001, 99:0.0002, T5s:0.0001, T6s:0.0001, JTo:0.0001, J3s:0.0001, J5s:0.0002, JTs:0.0001, JJ:0.0001, Q6s:0.0001, QQ:0.0003, KQo:0.0001, K2s:0.0004, K3s:0.0006, K7s:0.0002, K8s:0.0001, KQs:0.0002, KK:0.0032, AKo:0.0003, A3s:0.0001, A5s:0.0001, A6s:0.0001, ATs:0.0003, AJs:0.0006, AQs:0.001, AKs:0.0023, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:3BET@6|LJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.4176, JJ, QQ, AQo, KK, AKo, AJs:0.0003, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 6bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6198, 33:0.9933, 42s:0.003, 43s:0.1573, 44:0.9828, 54o:0.0024, 52s:0.0174, 53s:0.8946, 54s:0.358, 55:0.986, 62s:0.0001, 63s:0.0004, 64s:0.2436, 65s:0.7859, 66:0.9969, 72s:0.0007, 74s:0.2734, 75s:0.0054, 76s:0.7367, 77:0.9285, 82s:0.0416, 84s:0.0128, 85s:0.8986, 86s:0.9654, 87s:0.2858, 88:0.9979, 92s:0.0003, 93s:0.0002, 94s:0.0001, 95s:0.5607, 96s:0.0037, 97s:0.169, 98s:0.7221, 99:0.9717, K9o:0.0001, T4s:0.0325, T5s:0.0004, T7s:0.5597, T8s:0.5272, T9s:0.1842, TT:0.9851, QTo:0.0001, KTo:0.3836, ATo:0.0028, J4s:0.0033, J6s:0.001, J7s:0.0002, J8s:0.0001, J9s:0.1917, JTs:0.7386, JJ:0.096, QJo:0.0001, KJo:0.0007, AJo:0.1329, Q2s:0.1137, Q3s:0.0397, Q5s:0.2022, Q6s:0.4506, Q7s:0.0993, Q8s:0.3003, Q9s:0.2206, QTs:0.6663, QJs:0.1002, KQo:0.4611, AQo:0.2567, K2s:0.3649, K3s:0.0185, K4s:0.409, K5s:0.6878, K6s:0.4841, K7s:0.3865, K8s:0.362, K9s:0.2829, KTs:0.38, KJs:0.1124, KQs:0.1139, AKo:0.0001, A2s:0.0161, A3s:0.1463, A4s:0.2237, A5s:0.188, A6s:0.1251, A7s:0.3529, A8s:0.2813, A9s:0.3337, ATs:0.5953, AJs:0.0172, AQs:0.5678, AKs:0.005, AA:0.0002"
      },
      {
        "action": "3bet 6bb",
        "min": 0.0001,
        "range": "22:0.0011, 42o:0.0005, Q2o:0.0148, A2o:0.0352, 53o:0.0001, 83o:0.0001, J3o:0.0062, A3o:0.1592, 42s:0.0002, 43s:0.0208, 44:0.0003, J4o:0.0026, K4o:0.0003, A4o:0.0759, 52s:0.0018, 54s:0.0038, 55:0.001, J5o:0.0016, Q5o:0.0115, A5o:0.1344, 62s:0.0101, 63s:0.0069, 64s:0.0307, 65s:0.0001, J6o:0.0015, Q6o:0.0009, A6o:0.0209, 73s:0.0848, 74s:0.0036, 75s:0.0015, 76s:0.0004, 77:0.0041, J7o:0.0284, Q7o:0.0407, A7o:0.1023, 85s:0.0012, 86s:0.0001, A8o:0.0696, 92s:0.0014, 94s:0.0052, 97s:0.005, K9o:0.0004, A9o:0.0671, T5s:0.0022, T6s:0.0008, TT:0.0018, QTo:0.005, ATo:0.0086, J3s:0.0008, J4s:0.0218, J5s:0.0144, J6s:0.0003, J7s:0.009, J8s:0.0003, J9s:0.1047, JTs:0.0196, JJ:0.2357, QJo:0.0951, KJo:0.0071, AJo:0.2701, Q2s:0.0068, Q4s:0.006, Q6s:0.0494, Q7s:0.0561, Q8s:0.0082, Q9s:0.0002, QJs:0.0109, QQ:0.2961, KQo:0.0003, AQo:0.0387, K2s:0.0846, K3s:0.0019, K5s:0.0003, K7s:0.0004, K8s:0.0003, K9s:0.0006, KJs:0.0126, KK:0.0927, AKo:0.2296, A2s:0.0096, A3s:0.2555, A4s:0.0652, A5s:0.0054, A6s:0.0591, A7s:0.0306, A8s:0.0734, A9s:0.0013, ATs:0.0168, AJs:0.002, AQs:0.0266, AKs:0.2724, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0036, K2o:0.0001, A2o:0.0169, A3o:0.0017, 42s:0.0001, 44:0.0047, 54o:0.0036, A4o:0.007, 53s:0.0045, 54s:0.0112, A5o:0.2067, 62s:0.0001, 63s:0.0005, 64s:0.0131, K6o:0.0001, A6o:0.0001, 72s:0.0002, 73s:0.0001, 74s:0.0457, 76s:0.0026, 77:0.0053, 85s:0.0006, 86s:0.0075, 87s:0.0131, A8o:0.0002, 93s:0.0002, 94s:0.0006, J9o:0.0002, K9o:0.0317, T2s:0.0001, T5s:0.0002, QTo:0.0019, KTo:0.0382, ATo:0.0049, J2s:0.0002, J3s:0.0264, J4s:0.0109, J5s:0.0123, J6s:0.0139, J8s:0.0009, J9s:0.0406, JTs:0.0347, JJ:0.6683, QJo:0.5304, KJo:0.914, AJo:0.4765, Q2s:0.0343, Q4s:0.3489, Q5s:0.0312, Q6s:0.0202, Q7s:0.0545, Q8s:0.0028, QTs:0.1069, QJs:0.7727, QQ:0.7039, KQo:0.5363, AQo:0.7021, K2s:0.3364, K3s:0.4338, K4s:0.3817, K5s:0.1969, K6s:0.2955, K7s:0.366, K8s:0.2518, K9s:0.423, KTs:0.4072, KJs:0.8562, KQs:0.8858, KK:0.9073, AKo:0.7701, A2s:0.8731, A3s:0.383, A4s:0.4793, A5s:0.5264, A6s:0.1702, A7s:0.2298, A8s:0.2195, A9s:0.3827, ATs:0.0138, AJs:0.9749, AQs:0.405, AKs:0.7222"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, J9s:0.0001, JJ:0.0085, QQ:0.9998, AQo:0.0055, KJs:0.0001, KK, AKo:0.9988, A3s:0.0005, A9s:0.0005, AJs:0.0083, AQs:0.1204, AKs:0.9994, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0007, JJ:0.4461, QQ, AQo:0.0009, KK, AKo, AJs:0.0001, AQs:0.8428, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@19|LJ:CALL@17",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
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
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "LJ",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 42s:0.0001, 43s:0.0001, 52s:0.0001, 55:0.0004, J5o:0.0001, 64s:0.0019, A6o:0.0057, 86s:0.0002, 88:0.0003, 98o:0.0001, A8o:0.0014, 94s:0.0003, 95s:0.0002, 96s:0.0001, 99:0.0001, A9o:0.009, T3s:0.0001, T5s:0.0002, TT:0.0008, KTo:0.0001, J4s:0.0001, J6s:0.0001, J8s:0.0002, JJ:0.0043, KJo:0.0015, AJo:0.0107, Q6s:0.0183, Q9s:0.0007, QTs:0.0014, QJs:0.0003, QQ:0.1497, AQo:0.3287, KQs:0.001, KK:0.004, AKo:0.0002, A2s:0.1034, A3s:0.3166, A4s:0.0095, A5s:0.0147, A6s:0.759, A7s:0.0025, A9s:0.1222, ATs:0.4531, AJs:0.683, AQs:0.124, AKs:0.0358, AA:0.2023"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1171, A2o:0.0379, 33:0.2918, Q3o:0.0039, A3o:0.1348, 42s:0.0003, 43s:0.1473, 44:0.3765, A4o:0.2805, 52s:0.0126, 53s:0.0068, 54s:0.0201, 55:0.1688, J5o:0.0001, A5o:0.4116, 62s:0.0375, 64s:0.0365, 65s:0.0983, 66:0.3211, A6o:0.2557, 74s:0.0001, 76s:0.2321, 77:0.1686, 87o:0.0357, A7o:0.1737, 82s:0.0044, 83s:0.0055, 85s:0.0663, 86s:0.0287, 87s:0.1812, 88:0.4745, K8o:0.0065, A8o:0.2837, 92s:0.0391, 93s:0.0119, 94s:0.0002, 95s:0.081, 96s:0.0794, 97s:0.037, 99:0.1858, K9o:0.0001, A9o:0.0358, T2s:0.0031, T5s:0.0699, T6s:0.0014, T7s:0.442, T8s:0.0021, T9s:0.0656, TT:0.3269, QTo:0.0001, KTo:0.0027, ATo:0.2525, J3s:0.0001, J4s:0.0015, J5s:0.0025, J7s:0.0004, J8s:0.0004, JTs:0.0001, JJ:0.0833, QJo:0.0001, KJo:0.0147, AJo:0.0023, Q2s:0.0011, Q3s:0.0531, Q4s:0.1807, Q6s:0.6094, Q7s:0.0014, Q8s:0.0108, Q9s:0.1645, QTs:0.0366, QJs:0.0052, QQ:0.5387, KQo:0.0882, AQo:0.5392, K2s:0.0055, K3s:0.3161, K4s:0.2144, K5s:0.0078, K6s:0.0138, K7s:0.1355, K8s:0.5038, K9s:0.1983, KTs:0.4641, KJs:0.0001, KQs:0.4812, KK:0.9948, AKo:0.9988, A2s:0.7712, A3s:0.3645, A4s:0.9216, A5s:0.6905, A6s:0.1323, A7s:0.3947, A8s:0.0867, A9s:0.1148, ATs:0.0726, AJs:0.0399, AQs:0.8424, AKs:0.9642, AA:0.7977"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "63s:0.0002, 66:0.0002, 77:0.0005, 99:0.0001, T8s:0.0001, TT:0.0001, J2s:0.0002, J4s:0.0002, J8s:0.0001, JJ:0.0018, AJo:0.0001, Q4s:0.0001, Q6s:0.0001, Q9s:0.0001, QJs:0.0007, AQo:0.0001, K2s:0.0001, K6s:0.0001, K8s:0.0001, KQs:0.0001, A3s:0.001, A4s:0.0008, A6s:0.0022, A7s:0.0009, A9s:0.0003, ATs:0.0028, AJs:0.0043, AQs:0.0032, AKs:0.0004, AA:0.7663"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0242, A2o:0.067, 33:0.0006, A3o:0.0604, 43s:0.0006, 44:0.0239, A4o:0.0287, 54s:0.0183, 55:0.0416, A5o:0.2, 62s:0.002, 64s:0.0162, 65s:0.0047, 66:0.0528, A6o:0.0222, 74s:0.0007, 75s:0.0112, 76s:0.0146, 77:0.0319, A7o:0.0299, 84s:0.0003, 85s:0.0012, 86s:0.0003, 87s:0.0026, 88:0.1406, T8o:0.0001, A8o:0.072, 97s:0.0135, 99:0.0723, Q9o:0.0001, A9o:0.0666, T3s:0.0001, T5s:0.0001, T6s:0.0002, T7s:0.0029, T8s:0.0069, T9s:0.0246, TT:0.0575, JTo:0.0001, QTo:0.0012, KTo:0.0024, ATo:0.0626, J4s:0.0005, J7s:0.0001, JJ:0.4727, QJo:0.0001, AJo:0.1099, Q2s:0.008, Q3s:0.001, Q5s:0.002, Q6s:0.0127, Q7s:0.0005, Q8s:0.0358, Q9s:0.0401, QTs:0.0521, QJs:0.1338, QQ, KQo:0.0188, AQo:0.9121, K2s:0.0116, K3s:0.0108, K4s:0.2025, K5s:0.0077, K6s:0.0455, K8s:0.0233, K9s:0.1284, KTs:0.1734, KQs:0.3272, KK, AKo, A2s:0.395, A3s:0.2948, A4s:0.2563, A5s:0.3533, A6s:0.2924, A7s:0.3106, A8s:0.3169, A9s:0.2631, ATs:0.2204, AJs:0.4242, AQs:0.9958, AKs:0.9996, AA:0.2337"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|SB:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0001, A4o:0.0002, 55:0.0002, 62s:0.0001, 66:0.0011, 75s:0.0001, 76s:0.0001, 77:0.0087, 85s:0.0001, 86s:0.0001, 88:0.0059, Q8o:0.0001, 97s:0.0001, 99:0.0197, T9o:0.0001, A9o:0.0001, T2s:0.0001, T4s:0.0001, T8s:0.0003, T9s:0.0002, TT:0.2846, ATo:0.0001, J3s:0.0001, J4s:0.0001, J6s:0.0001, JTs:0.0001, JJ, QJo:0.0009, KJo:0.0002, AJo:0.4565, Q2s:0.0001, Q3s:0.0001, Q4s:0.0022, Q9s:0.0002, QQ, AQo:0.9488, K2s:0.0004, K5s:0.0002, K6s:0.0001, K7s:0.0011, KTs:0.0001, KQs:0.3555, KK, AKo:0.8659, A2s:0.0002, A4s:0.0002, A8s:0.0001, A9s:0.0003, ATs:0.0005, AJs:0.8551, AQs:0.9488, AKs:0.9954, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|LJ:4BET@19",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "AJo:0.0001, QQ:0.0006, KQs:0.0001, KK:0.7572, AKo:0.0001, AKs:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|LJ:4BET@19",
    "heroPos": "BB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0055, 66:0.004, 76s:0.0003, 77:0.0044, 86s:0.0004, 88:0.0072, 96s:0.0001, 99:0.0056, TT:0.0006, ATo:0.0028, JJ:0.0473, AJo:0.0021, Q5s:0.0004, Q8s:0.0006, QQ:0.9996, AQo:0.1085, K7s:0.0001, K9s:0.0003, KK, AKo, A3s:0.0001, A4s:0.0009, A5s:0.0016, A7s:0.0001, A8s:0.0001, A9s:0.0027, ATs:0.0009, AJs:0.0143, AQs:0.8162, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2|SB:CALL@1.5|BB:3BET@6|LJ:CALL@4",
    "heroPos": "SB",
    "eff": 19.2,
    "stacks": [
      19.23,
      19.23,
      19.23,
      19.23,
      19.23,
      19.23
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 62o:0.0001, A2o:0.0001, 32s:0.0041, 33:0.0004, T3o:0.0002, A3o:0.0002, 44:0.0005, 94o:0.0001, K4o:0.0001, 52s:0.0013, 53s:0.0002, 54s:0.0003, 55:0.0002, 75o:0.0002, 85o:0.0001, A5o:0.0001, 63s:0.0002, 64s:0.0019, 65s:0.0003, 66:0.0001, K6o:0.0001, 72s:0.0001, 73s:0.0003, 74s:0.0001, 76s:0.0023, 97o:0.0001, A7o:0.0001, 83s:0.0009, 86s:0.0005, 88:0.0003, Q8o:0.0003, A8o:0.0001, 92s:0.0009, 94s:0.0013, 95s:0.0006, 96s:0.0001, 97s:0.0013, 98s:0.0003, 99:0.0002, Q9o:0.0003, K9o:0.0001, T4s:0.0001, T6s:0.0003, T8s:0.0002, TT:0.0001, QTo:0.0001, ATo:0.0007, J3s:0.0014, J4s:0.001, J5s:0.0001, J7s:0.0029, J9s:0.0028, JJ:0.0061, KJo:0.0001, Q2s:0.0001, Q3s:0.0002, Q8s:0.0001, Q9s:0.0026, QJs:0.0011, QQ:0.0027, KQo:0.0001, AQo:0.0012, K2s:0.0004, K3s:0.0004, K4s:0.0031, K5s:0.0001, K7s:0.0001, K8s:0.0038, K9s:0.0007, KJs:0.0035, KQs:0.0003, KK:0.4931, AKo:0.2018, A2s:0.004, A3s:0.0007, A4s:0.0029, A5s:0.002, A7s:0.0003, A8s:0.0002, A9s:0.0004, ATs:0.0062, AJs:0.0005, AQs:0.0183, AKs:0.1884, AA:0.0011"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 62o:0.0001, 72o:0.0001, T2o:0.0001, J2o:0.0001, A2o:0.0002, 33:0.0002, 53o:0.0001, 63o:0.0001, T3o:0.0001, K3o:0.0001, A3o:0.0003, 43s:0.0002, 44:0.0003, 64o:0.0002, T4o:0.0001, Q4o:0.0004, K4o:0.0001, A4o:0.0001, 52s:0.0001, 53s:0.0005, 54s:0.0004, 55:0.0002, 95o:0.0001, Q5o:0.0003, K5o:0.0001, A5o:0.0005, 62s:0.0003, 64s:0.0003, 66:0.0001, 86o:0.0001, T6o:0.0001, J6o:0.0001, 72s:0.0007, 73s:0.0001, 75s:0.0002, 76s:0.0009, T7o:0.0001, J7o:0.0001, Q7o:0.0001, K7o:0.0003, A7o:0.0003, 82s:0.0006, 83s:0.0002, 84s:0.0003, 85s:0.0008, 87s:0.0012, 88:0.0015, 98o:0.0001, K8o:0.0001, 92s:0.0013, 95s:0.0004, 96s:0.0001, 97s:0.0003, 99:0.0002, K9o:0.0002, A9o:0.0004, T2s:0.0002, T4s:0.0001, T5s:0.0003, T6s:0.0002, T8s:0.0002, T9s:0.0002, JTo:0.0001, QTo:0.0001, ATo:0.0011, J4s:0.0002, J5s:0.0001, J6s:0.0001, J8s:0.0004, JTs:0.0002, JJ:0.0003, QJo:0.0005, KJo:0.0001, AJo:0.0017, Q2s:0.0002, Q3s:0.0016, Q4s:0.0009, Q5s:0.0006, Q6s:0.0005, Q8s:0.0009, Q9s:0.0015, QJs:0.0003, QQ:0.0015, KQo:0.0001, AQo:0.0032, K2s:0.0001, K4s:0.0006, K6s:0.0001, K7s:0.0002, K8s:0.0011, K9s:0.0003, KTs:0.0004, KJs:0.0008, KQs:0.0004, KK:0.0034, AKo:0.0012, A2s:0.0004, A3s:0.0012, A4s:0.0009, A5s:0.0002, A6s:0.0007, A7s:0.0001, A8s:0.0001, A9s:0.0003, ATs:0.0001, AQs:0.0005, AKs:0.0014, AA:0.9989"
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
    id: "CLUBMATCH_390-780(200)_6LEFT chase",
    label: "クラブマッチ 790/390 ante200 6left chase",
    tags: ["pokache","clubmatch","6left"],
    questionBuilder: (hand) => ({ stacks: CLUBMATCH_6LEFT_STACKS_BB }),
    spots: __attachFacingLineToState(CLUBMATCH_6LEFT_STATE, CLUBMATCH_6LEFT_FACING_PRESETS).map(__makeSpotFromState),
  },
]);
