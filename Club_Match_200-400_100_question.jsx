// ============================================================
// AUTO-GENERATED from zip: Club Match 200-400(100).zip
// question.zip 互換形式 / facingLine は最大3段
// Generated on 2026-03-25
// ============================================================


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
// blinds: BB=40000 / SB=20000 / ante=10000export 
const CLUB_MATCH_200_400_100_STACKS_BB = [
  62.5,
  37.5,
  18.75,
  21.25,
  25,
  35
];
const CLUB_MATCH_200_400_100_FACING_PRESETS = [
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
    "id": "BTN:OPEN@21",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 21
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "BTN",
      "SB",
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
    "id": "SB:OPEN@24.75",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 24.75
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
    "id": "BTN:OPEN@2.3|BB:3BET@21",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@8",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@8",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "BTN",
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
    "id": "BTN:OPEN@21|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@21|SB:CALL@20.5",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 20.5
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|BTN:3BET@21",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|BTN:CALL@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "SB",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|SB:CALL@18",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BB:3BET@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@21",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "CO",
      "SB",
      "BB"
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
        "size": 7
      }
    ],
    "heroPositions": [
      "CO",
      "SB",
      "BB"
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
    "id": "CO:OPEN@2.3|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@8",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "CO",
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
    "id": "HJ:OPEN@2.3|BB:3BET@12",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@8",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@21",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
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
        "size": 7
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
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
    "id": "HJ:OPEN@2.3|CO:3BET@18.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
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
        "size": 7
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
    "id": "HJ:OPEN@2.3|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@8",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ",
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
    "id": "LJ:OPEN@2.3|BB:3BET@12",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@8",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
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
        "size": 7
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
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
    "id": "LJ:OPEN@2.3|CO:3BET@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
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
        "size": 7
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
        "size": 10
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
    "id": "LJ:OPEN@2.3|HJ:3BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
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
        "size": 7
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
    "id": "LJ:OPEN@2.3|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@8",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
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
    "id": "SB:CALL@0.5|BB:OPEN@24.75",
    "facingLine": [
      {
        "pos": "SB",
        "act": "call",
        "size": 0.5
      },
      {
        "pos": "BB",
        "act": "open",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
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
    "id": "SB:OPEN@3.5|BB:3BET@24.75",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "SB:OPEN@3.5|BB:3BET@8.75",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|BB:3BET@8|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@24.75|BB:CALL@23.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 23.75
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@8|BB:4BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:3BET@8|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "BTN",
      "SB"
    ]
  },
  {
    "id": "BTN:OPEN@21|SB:CALL@20.5|BB:3BET@24.75",
    "facingLine": [
      {
        "pos": "BTN",
        "act": "open",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 20.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|BTN:3BET@21|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|BTN:CALL@18.5|BB:3BET@21",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@18.5|BTN:CALL@18.5|SB:3BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 18.5
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@18.5|SB:CALL@18|BB:3BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 18.5
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 18
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@21|BB:CALL@20",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 20
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@21",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@21",
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
        "size": 21
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "CO",
      "BTN"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "CO",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@24.75|BB:CALL@23.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 23.75
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@8|BB:4BET@24.75",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:3BET@8|CO:4BET@18.5",
    "facingLine": [
      {
        "pos": "CO",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "CO",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@12|HJ:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@8|HJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BB:3BET@8|HJ:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@21|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@12",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|HJ:4BET@21",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@18.5|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "HJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@18.5|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@12",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
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
    "id": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@18.5",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ",
      "CO"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
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
        "size": 21
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
        "size": 7
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
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@24.75|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@8|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:3BET@8|HJ:4BET@24.75",
    "facingLine": [
      {
        "pos": "HJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "HJ",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "HJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@12|LJ:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 12
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@8|LJ:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BB:3BET@8|LJ:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@21|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 21
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@12",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "BTN",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "BTN",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@18.5|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@18.5|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 18.5
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@12",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
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
    "id": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 18.5
      }
    ],
    "heroPositions": [
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "CO",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "CO"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
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
        "size": 21
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
        "size": 7
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
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "CO",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.5
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10
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
    "id": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 10
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@37.25|BB:CALL@33.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BB",
        "act": "call",
        "size": 33.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@37.25|BTN:CALL@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "BTN",
        "act": "call",
        "size": 21
      }
    ],
    "heroPositions": [
      "LJ",
      "SB",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@37.25|CO:CALL@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "CO",
        "act": "call",
        "size": 18.5
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
    "id": "LJ:OPEN@2.3|HJ:3BET@37.25|SB:CALL@24.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 37.25
      },
      {
        "pos": "SB",
        "act": "call",
        "size": 24.25
      }
    ],
    "heroPositions": [
      "LJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@12",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@21",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "BTN",
        "act": "4bet",
        "size": 21
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@18.5",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "CO",
        "act": "4bet",
        "size": 18.5
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@12",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 12
      }
    ],
    "heroPositions": [
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@37.25",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
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
    "id": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "HJ",
        "act": "3bet",
        "size": 7
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@21",
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
        "size": 21
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
        "size": 7
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
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@18.5",
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
        "size": 18.5
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
        "size": 7
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
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "HJ",
      "BB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@24.75|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 24.75
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@8|BB:4BET@13.7",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 13.7
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@8|BB:4BET@34.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "BB",
        "act": "4bet",
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:3BET@8|LJ:4BET@24.75",
    "facingLine": [
      {
        "pos": "LJ",
        "act": "open",
        "size": 2.3
      },
      {
        "pos": "SB",
        "act": "3bet",
        "size": 8
      },
      {
        "pos": "LJ",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@12",
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
        "size": 12
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@34.75",
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
        "size": 34.75
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
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
        "size": 8
      }
    ],
    "heroPositions": [
      "LJ",
      "SB"
    ]
  },
  {
    "id": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@24.75",
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
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BB"
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
        "size": 9
      }
    ],
    "heroPositions": [
      "BB"
    ]
  },
  {
    "id": "SB:OPEN@3.5|BB:3BET@8.75|SB:4BET@24.75",
    "facingLine": [
      {
        "pos": "SB",
        "act": "open",
        "size": 3.5
      },
      {
        "pos": "BB",
        "act": "3bet",
        "size": 8.75
      },
      {
        "pos": "SB",
        "act": "4bet",
        "size": 24.75
      }
    ],
    "heroPositions": [
      "BB"
    ]
  }
];
const CLUB_MATCH_200_400_100_STATE = [
  {
    "presetId": "START",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A2o, A3o, A4o, 55:0.2289, K5o:0.5987, A5o, 66:0.6624, K6o:0.1194, A6o, 77, K7o:0.142, A7o, 88, Q8o:0.2789, K8o, A8o, 99, J9o:0.8294, Q9o, K9o, A9o, T7s:0.0001, T8s:0.9967, T9s, TT, JTo, QTo, KTo, ATo, J5s:0.1328, J7s:0.6776, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q3s:0.3651, Q4s:0.999, Q5s, Q6s:0.9998, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.9974, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "open 2.3bb"
    ],
    "bands": [
      {
        "action": "open 2.3bb",
        "min": 0.0001,
        "range": "A3o:0.0002, A4o:0.7023, 55:0.0002, A5o, 66:0.338, A6o:0.9919, 77:0.6682, A7o, 88, A8o, 99, K9o:0.2072, A9o, T9s, TT, JTo:0.653, QTo, KTo, ATo, J9s:0.8072, JTs, JJ, QJo, KJo, AJo, Q6s:0.0005, Q7s:0.0001, Q8s:0.4235, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.0001, K3s:0.0318, K4s:0.4764, K5s:0.9997, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A4o:0.1261, 55:0.0002, A5o:0.9999, 66:0.1753, A6o:0.1291, 77:0.3562, A7o:0.8775, 88:0.6832, A8o, 99:0.2696, A9o, T9s:0.9387, TT:0.9945, JTo:0.0193, QTo:0.5645, KTo:0.7422, ATo, J9s:0.9994, JTs:0.6844, JJ, QJo, KJo:0.9915, AJo:0.061, Q8s:0.0228, Q9s, QQ, KQo:0.9509, AQo:0.0002, K5s:0.0002, K6s:0.0998, K7s:0.0094, K8s:0.9919, K9s:0.9419, KK, AKo:0.9795, A2s:0.0008, A3s:0.0004, A4s:0.0006, A5s:0.0009, A6s:0.9565, A7s:0.755, A8s:0.2758, A9s:0.0034, ATs:0.9998, AJs, AQs, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.028, 66:0.3304, 77:0.643, 88:0.3168, 99:0.7304, TT:0.0055, JTs:0.3156, KJo:0.0085, AJo:0.939, QTs, QJs, KQo:0.0491, AQo:0.9998, K9s:0.0581, KTs, KJs, KQs, AKo:0.0205, A2s:0.9992, A3s:0.9996, A4s:0.9994, A5s:0.9991, A6s:0.0435, A7s:0.245, A8s:0.7242, A9s:0.9966, ATs:0.0002"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A3o:0.251, 44:0.0001, A4o:0.212, 55:0.1307, A5o:0.5856, 66:0.8128, A6o:0.9705, 77:0.402, A7o:0.8434, 88:0.4745, A8o:0.9999, 98s:0.8195, 99:0.0035, T9o:0.0004, K9o:0.2932, A9o, T6s:0.0001, T7s:0.0827, T8s, T9s:0.9921, TT, JTo:0.9999, QTo:0.9995, KTo:0.6777, ATo:0.5903, J7s:0.0304, J8s:0.9997, J9s:0.965, JJ, QJo:0.6901, KJo:0.6844, Q4s:0.0002, Q5s:0.0218, Q6s:0.0223, Q7s:0.2788, Q8s:0.9999, Q9s:0.9844, QQ, KQo:0.9247, AQo:0.005, K2s:0.4241, K3s:0.3227, K4s:0.9979, K5s:0.9999, K6s, K7s:0.9998, K8s:0.9999, K9s:0.0014, KJs:0.0026, KQs:0.1395, KK, AKo:0.8523, A3s:0.0001, A4s:0.1199, A5s:0.4294, A6s:0.0335, A7s:0.2317, A8s:0.9942, A9s:0.9995, ATs, AJs:0.9999, AQs, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0116, A2o:0.0002, 33:0.9937, A3o:0.3786, 44:0.9998, A4o:0.7877, 55:0.8693, A5o:0.4144, 66:0.1872, 77:0.598, A7o:0.1566, 88:0.5255, A8o:0.0001, 99:0.9965, T9s:0.0079, JTo:0.0001, QTo:0.0005, KTo:0.3223, ATo:0.4097, J9s:0.035, JTs, QJo:0.3099, KJo:0.3156, AJo, Q9s:0.0156, QTs, QJs, KQo:0.0753, AQo:0.995, K7s:0.0001, K8s:0.0001, K9s:0.9986, KTs, KJs:0.9974, KQs:0.8605, AKo:0.1477, A2s, A3s:0.9999, A4s:0.8801, A5s:0.5706, A6s:0.9665, A7s:0.7683, A8s:0.0058, A9s:0.0005, AJs:0.0001"
      }
    ]
  },
  {
    "presetId": "START",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "call 0.5bb",
      "open 3.5bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "call 0.5bb",
        "min": 0.0001,
        "range": "T2o:0.4374, J2o:0.9947, Q2o:0.9999, K2o:0.9737, 32s, 33:0.0005, 53o:0.4545, T3o:0.4313, J3o:0.9924, Q3o:0.9998, K3o:0.9999, A3o:0.0017, 42s:0.9933, 43s:0.9244, 44:0.2782, 54o:0.839, 64o:0.4114, T4o:0.9922, J4o:0.9939, Q4o:0.9105, K4o:0.2243, 52s:0.9993, 53s:0.9781, 54s:0.8565, 55:0.9976, 65o:0.9912, 75o:0.9907, 85o:0.9847, 95o:0.8535, T5o:0.9984, J5o:0.9255, Q5o:0.8544, K5o:0.1248, A5o:0.7568, 62s:0.9962, 63s:0.9525, 64s:0.9985, 65s, 66:0.9999, 76o:0.9466, 86o:0.9331, 96o:0.9704, T6o:0.8444, J6o:0.9904, Q6o:0.9548, K6o:0.759, A6o:0.9177, 72s:0.9979, 73s:0.9999, 74s:0.9874, 75s:0.9466, 76s:0.9657, 77:0.9851, 87o:0.7749, 97o:0.8842, T7o:0.8261, J7o:0.6173, Q7o:0.1647, K7o:0.2224, A7o:0.9098, 82s:0.9983, 83s:0.9978, 84s:0.9772, 85s:0.9294, 86s:0.9993, 87s:0.5819, 88:0.9478, 98o:0.2523, T8o:0.0055, J8o:0.004, Q8o:0.0067, K8o:0.8102, A8o:0.1014, 92s:0.9994, 93s:0.9886, 94s:0.8783, 95s:0.1395, 96s:0.6836, 97s:0.741, 98s:0.8816, 99:0.9833, T9o:0.3358, J9o:0.6072, Q9o:0.1901, K9o:0.8701, T2s:0.9718, T3s:0.3461, T4s:0.1022, T5s:0.1794, T6s:0.9371, T7s:0.0374, T8s:0.9392, T9s:0.9995, TT:0.902, JTo:0.5143, QTo:0.9066, KTo:0.999, J2s:0.0192, J3s:0.0004, J4s:0.0356, J5s:0.2441, J6s:0.9457, J7s:0.5056, J8s:0.9846, J9s:0.9957, JTs:0.9912, JJ:0.8571, QJo:0.9226, KJo:0.7881, Q2s:0.2319, Q3s:0.1493, Q4s:0.4811, Q5s:0.9809, Q6s:0.9961, Q7s:0.9982, Q8s:0.9987, Q9s:0.9979, QTs:0.9954, QJs:0.9992, QQ:0.9301, KQo:0.8648, AQo:0.0101, K2s:0.4324, K3s:0.2827, K4s:0.9553, K5s:0.9894, K6s, K7s:0.9999, K8s:0.9999, K9s, KTs:0.9996, KJs:0.9974, KQs:0.9988, KK:0.8621, AKo:0.112, A2s:0.9977, A3s:0.9993, A4s:0.9654, A5s:0.9929, A6s, A7s:0.9988, A8s:0.8849, A9s:0.5854, ATs:0.9658, AJs:0.7142, AQs:0.77, AKs:0.3844, AA:0.8126"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "J2o:0.002, K2o:0.0128, J3o:0.0072, Q3o:0.0001, K3o:0.0001, 42s:0.0066, 43s:0.0756, 44:0.032, 54o:0.1607, T4o:0.0002, J4o:0.0059, Q4o:0.0682, K4o:0.0647, A4o:0.0001, 52s:0.0006, 53s:0.0218, 54s:0.1434, 55:0.0023, 65o:0.0085, 75o:0.0051, 85o:0.007, T5o:0.0003, J5o:0.0745, Q5o:0.1379, K5o:0.0411, A5o:0.1599, 62s:0.0001, 63s:0.0473, 64s:0.0015, 76o:0.0533, 86o:0.0669, 96o:0.0295, T6o:0.1555, J6o:0.0096, Q6o:0.0144, K6o:0.0335, A6o:0.0801, 74s:0.0126, 75s:0.0522, 76s:0.0342, 77:0.0148, 87o:0.0214, 97o:0.1156, T7o:0.0093, J7o:0.0247, Q7o:0.0628, K7o:0.0002, A7o:0.0047, 82s:0.0016, 83s:0.0021, 84s:0.0223, 85s:0.0004, 87s:0.0001, 88:0.0521, 98o:0.0284, J8o:0.0001, Q8o:0.0027, K8o:0.1769, A8o:0.0211, 93s:0.0114, 94s:0.1215, 95s:0.2464, 96s:0.0045, 98s:0.0001, 99:0.0166, Q9o:0.0564, K9o:0.1259, T2s:0.0278, T3s:0.2504, T4s:0.0063, T5s:0.0617, T6s:0.0001, T8s:0.0001, TT:0.098, JTo:0.0007, QTo:0.0473, KTo:0.0009, J2s:0.3062, J3s:0.0592, J4s:0.0472, JJ:0.1429, QJo:0.0596, KJo:0.2119, Q2s:0.0054, Q3s:0.0001, Q9s:0.0001, QTs:0.0043, QJs:0.0001, QQ:0.0699, KQo:0.1352, K2s:0.0004, KTs:0.0001, KJs:0.0026, KQs:0.0012, KK:0.1379, AKo:0.0029, A2s:0.0003, A3s:0.0005, A4s:0.0345, A5s:0.0071, A7s:0.0012, A8s:0.115, A9s:0.367, ATs:0.0324, AJs:0.2858, AQs:0.23, AKs:0.6156, AA:0.1874"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, K2o:0.0135, A2o, 33:0.9995, A3o:0.9983, 44:0.6898, Q4o:0.0213, K4o:0.7109, A4o:0.9999, 52s:0.0001, 53s:0.0001, 54s:0.0001, 55:0.0001, Q5o:0.0078, K5o:0.8341, A5o:0.0833, 64s:0.0001, 66:0.0001, Q6o:0.0307, K6o:0.2075, A6o:0.0021, 75s:0.0012, 76s:0.0001, 87o:0.2037, 97o:0.0002, T7o:0.1646, J7o:0.358, Q7o:0.7726, K7o:0.7774, A7o:0.0854, 84s:0.0005, 85s:0.0702, 86s:0.0006, 87s:0.418, 88:0.0001, 98o:0.7193, T8o:0.9944, J8o:0.9959, Q8o:0.9906, K8o:0.0129, A8o:0.8775, 92s:0.0005, 94s:0.0001, 95s:0.614, 96s:0.3119, 97s:0.259, 98s:0.1183, T9o:0.6642, J9o:0.3928, Q9o:0.7534, K9o:0.004, A9o, T2s:0.0004, T3s:0.4035, T4s:0.8915, T5s:0.7589, T6s:0.0628, T7s:0.9626, T8s:0.0606, T9s:0.0005, JTo:0.485, QTo:0.0461, KTo:0.0001, ATo, J2s:0.6746, J3s:0.9404, J4s:0.9172, J5s:0.7559, J6s:0.0543, J7s:0.4944, J8s:0.0154, J9s:0.0043, JTs:0.0088, QJo:0.0178, AJo, Q2s:0.7627, Q3s:0.8507, Q4s:0.5188, Q5s:0.0191, Q6s:0.0039, Q7s:0.0018, Q8s:0.0013, Q9s:0.002, QTs:0.0003, QJs:0.0007, AQo:0.9899, K2s:0.5672, K3s:0.7173, K4s:0.0447, K5s:0.0106, K7s:0.0001, K8s:0.0001, KTs:0.0002, AKo:0.8851, A2s:0.002, A3s:0.0001, A4s:0.0001, A8s:0.0001, A9s:0.0476, ATs:0.0017"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "66:0.0001, 77:0.0009, 88:0.0132, 99:0.0102, TT:0.0075, ATo:0.0107, JTs:0.0009, KJo:0.002, AJo:0.0003, QTs:0.0119, QJs:0.0001, QQ:0.0002, KQo:0.0014, KJs:0.0001, A8s:0.0002, A9s:0.0029, ATs:0.0002, AJs:0.0071, AQs:0.0001, AA:0.0002"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0167, A2o:0.4948, A3o:0.2432, K4o:0.0004, A4o:0.1634, K5o:0.0001, A5o:0.2576, A6o:0.4292, A7o:0.1861, A8o:0.2087, 99:0.1373, K9o:0.0001, A9o:0.0059, TT:0.1978, KTo:0.0153, ATo:0.0985, JJ:0.0002, KJo:0.1652, AJo:0.0037, QQ:0.1988, KQo:0.0015, AQo:0.0646, K2s:0.0551, K3s:0.0016, K4s:0.1444, K5s:0.0816, K7s:0.0409, K8s:0.0006, KK, AKo:0.0598, AJs:0.0216, AQs:0.4824, AKs:0.9851, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0605, 33:0.6514, 44:0.9919, A4o:0.0008, 55:0.9995, A5o:0.0002, 66:0.8756, 77:0.9452, 88:0.0381, 99:0.3514, TT:0.7947, ATo:0.7869, JTs:0.6214, JJ:0.9998, QJo:0.0004, KJo:0.6767, AJo:0.996, Q9s:0.0001, QTs:0.9825, QJs:0.9999, QQ:0.8009, KQo:0.9971, AQo:0.9354, K2s:0.0005, K5s:0.0011, K6s:0.0001, KTs, KJs:0.9999, KQs, AKo:0.9402, A2s, A3s:0.9999, A4s, A5s, A6s:0.9995, A7s:0.9999, A8s:0.9997, A9s:0.9971, ATs:0.9998, AJs:0.9713, AQs:0.5176, AKs:0.0149"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8514, 32s:0.9991, 33:0.7362, 53o:0.0078, K3o:0.0003, A3o:0.4726, 42s:0.9998, 43s, 44:0.7711, 54o:0.9998, 64o:0.0002, Q4o:0.0005, K4o:0.2627, A4o:0.1056, 52s, 53s, 54s:0.9999, 55:0.9998, 65o, 75o:0.3567, Q5o:0.2553, K5o:0.3252, A5o:0.0849, 62s:0.9999, 63s, 64s:0.9999, 65s, 66, 76o:0.9995, 86o:0.8482, Q6o:0.9537, K6o:0.9938, A6o:0.3047, 72s:0.9485, 73s:0.9998, 74s, 75s, 76s, 77, 87o:0.9985, 97o:0.2285, T7o:0.0001, J7o:0.0316, Q7o:0.9994, K7o:0.9999, A7o:0.9998, 82s:0.9967, 83s:0.9967, 84s, 85s, 86s:0.9998, 87s, 88:0.3187, 98o:0.9943, T8o:0.9998, J8o:0.9986, Q8o, K8o:0.9999, A8o, 92s:0.9995, 93s:0.9998, 94s:0.9999, 95s, 96s, 97s, 98s:0.9999, 99:0.0098, T9o, J9o, Q9o, K9o, A9o, T2s:0.9985, T3s:0.9991, T4s, T5s:0.9995, T6s, T7s:0.9999, T8s, T9s:0.997, JTo:0.9984, QTo, KTo:0.9999, ATo:0.5843, J2s, J3s, J4s:0.9999, J5s, J6s:0.9999, J7s:0.9999, J8s:0.9754, J9s:0.9915, JTs:0.268, QJo:0.9923, KJo, Q2s:0.9999, Q3s, Q4s:0.9999, Q5s, Q6s:0.9987, Q7s:0.9999, Q8s:0.9977, Q9s:0.8515, QTs:0.7579, QJs:0.0012, KQo, K2s:0.9516, K3s:0.8646, K4s:0.8155, K5s:0.6347, K6s:0.8844, K7s:0.855, K8s:0.9994, K9s:0.9984, KTs:0.9997, KJs:0.9845, KQs:0.9989, A2s:0.0237, A3s:0.0004, A4s:0.0001, A5s:0.0007, A6s:0.9999, A7s:0.9572, A8s:0.9999, A9s, ATs:0.9991"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "32o:0.4403, 42o:0.2047, 52o:0.271, 62o:0.3193, 72o:0.0585, 82o:0.0038, 92o:0.2499, T2o:0.3247, J2o:0.4411, Q2o:0.8322, K2o:0.998, A2o:0.3879, 32s:0.0006, 53o:0.0014, 63o:0.0006, 73o:0.0043, 83o:0.0048, 93o:0.0768, T3o:0.0099, Q3o:0.1145, K3o:0.8385, A3o:0.0001, 64o:0.003, 84o:0.0019, T4o:0.033, J4o:0.0068, Q4o:0.0207, K4o:0.3483, 75o:0.0013, 85o:0.0028, T5o:0.1059, J5o:0.0206, Q5o:0.2451, K5o:0.3688, 86o:0.0011, 96o:0.016, T6o:0.0132, J6o:0.0114, Q6o:0.0409, K6o:0.0043, A6o:0.6945, 72s:0.0105, T7o:0.001, J7o:0.0054, K7o:0.0001, 82s:0.0008, 83s:0.0004, 98o:0.0001, T8o:0.0002, 92s:0.0004, 99:0.6131, T2s:0.0009, T3s:0.0006, T5s:0.0003, TT:0.9994, JJ:0.9999, AJo:0.0003, QQ, AQo:0.8928, KK, AKo:0.9973, ATs:0.0005, AJs:0.7785, AQs:0.9999, AKs, AA"
      },
      {
        "action": "3bet 21bb",
        "min": 0.0001,
        "range": "22:0.1486, A2o:0.6121, 33:0.2638, A3o:0.5273, 44:0.2289, A4o:0.8944, 54s:0.0001, 55:0.0002, K5o:0.0002, A5o:0.9151, 64s:0.0001, A6o:0.0008, A7o:0.0002, 86s:0.0002, 88:0.6813, 98s:0.0001, 99:0.3772, T9s:0.003, TT:0.0006, JTo:0.0016, KTo:0.0001, ATo:0.4157, J4s:0.0001, J6s:0.0001, J7s:0.0001, J8s:0.0246, J9s:0.0085, JTs:0.732, JJ:0.0001, QJo:0.0077, AJo:0.9997, Q2s:0.0001, Q4s:0.0001, Q6s:0.0013, Q7s:0.0001, Q8s:0.0023, Q9s:0.1485, QTs:0.2421, QJs:0.9988, AQo:0.1072, K2s:0.0484, K3s:0.1354, K4s:0.1845, K5s:0.3653, K6s:0.1156, K7s:0.145, K8s:0.0006, K9s:0.0016, KTs:0.0003, KJs:0.0155, KQs:0.0011, AKo:0.0027, A2s:0.9763, A3s:0.9996, A4s:0.9999, A5s:0.9993, A6s:0.0001, A7s:0.0428, A8s:0.0001, ATs:0.0003, AJs:0.2215, AQs:0.0001"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.5824, TT:0.9963, JJ:0.4324, AJo:0.1456, QQ:0.1846, AQo:0.1392, KK:0.9667, AKo:0.076, AJs:0.469, AQs:0.4133, AKs:0.0319, AA:0.2493"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.4176, TT:0.0037, JJ:0.5676, AJo:0.1429, QQ:0.8154, AQo:0.8608, KK:0.0333, AKo:0.924, AJs:0.531, AQs:0.5867, AKs:0.9681, AA:0.7507"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0519, 77, 88, 99, TT, ATo:0.7556, JJ, AJo, QQ, AQo, KK, AKo, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.3607, TT:0.5359, JJ:0.7172, QQ:0.4219, AQo:0.3934, KK:0.5327, AKo:0.3375, AJs:0.2935, AQs:0.2675, AKs:0.5335, AA:0.1429"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.325, TT:0.4641, JJ:0.2828, QQ:0.5781, AQo:0.6066, KK:0.4673, AKo:0.6625, AJs:0.0279, AQs:0.7325, AKs:0.4665, AA:0.8571"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.6338, TT:0.6927, JJ:0.1595, AJo:0.0407, QQ:0.7084, AQo:0.7234, KK:0.5067, AKo:0.6657, AJs:0.8584, AQs:0.6681, AKs:0.6993, AA:0.9812"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.3662, TT:0.3073, JJ:0.8405, AJo:0.0002, QQ:0.2916, AQo:0.2766, KK:0.4933, AKo:0.3343, AJs:0.1415, AQs:0.3319, AKs:0.3007, AA:0.0188"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0007, 88, 99, TT, JJ, AJo, QQ, AQo, KK, AKo, ATs:0.9999, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "66:0.077, 88:0.0912, 99:0.0924, TT:0.3185, JTs:0.0006, JJ:0.0001, AJo:0.0539, QTs:0.0004, QJs:0.1765, KQo:0.1519, AQo:0.0301, KTs:0.0254, KJs:0.0024, KQs:0.0017, KK:0.0064, A9s:0.0014, ATs:0.4557, AJs:0.7929, AQs:0.0447, AA:0.0722"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0027, A3o:0.0399, A4o:0.0285, A5o:0.0002, A6o:0.1272, A7o:0.0023, A8o:0.0035, A9o:0.0001, TT:0.2131, ATo:0.2134, JJ:0.5925, KJo:0.0109, AJo:0.9109, QQ:0.1146, KQo:0.4862, AQo:0.3323, K2s:0.0001, KK:0.9936, AKo:0.0016, A2s:0.0074, A3s:0.0022, A4s:0.0001, A6s:0.0034, A7s:0.0002, A9s:0.0001, AQs:0.1709, AKs:0.5967, AA:0.9278"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.4684, JJ:0.4074, QJs:0.3824, QQ:0.8854, KQo:0.0422, AQo:0.6376, KTs:0.0129, KJs:0.9976, KQs:0.9983, AKo:0.9984, A2s:0.7022, A3s:0.9688, A4s:0.9768, A5s:0.9894, A6s:0.2814, A7s:0.0621, A9s:0.0004, ATs:0.5442, AJs:0.2071, AQs:0.7844, AKs:0.4033"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "55:0.0003, 66:0.0278, 88:0.0689, 99:0.0829, T9s:0.0001, TT:0.0108, JTs:0.0007, AJo:0.0141, QTs:0.0293, QJs:0.0041, KQo:0.0402, KTs:0.0008, KJs:0.0001, A9s:0.0019, ATs:0.4665, AJs:0.0231, AA:0.0058"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.2187, A3o:0.4707, A4o:0.0404, A5o:0.0003, A6o:0.0622, A7o:0.0038, 88:0.0001, A8o:0.0049, 99:0.1772, A9o:0.0002, TT:0.984, KTo:0.0064, ATo:0.9273, JJ:0.0002, KJo:0.7775, AJo:0.3825, QQ:0.9033, KQo:0.2155, AQo:0.3983, K6s:0.0001, KK, AKo:0.1323, A2s:0.0021, A3s:0.0001, A6s:0.0053, A8s:0.0001, A9s:0.0002, AJs:0.004, AQs:0.4498, AKs:0.5308, AA:0.9942"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0097, 44:0.1729, 55:0.0331, 66:0.8428, 77:0.0136, 88:0.0041, 99:0.4677, TT:0.0052, JJ:0.9998, AJo:0.6035, QTs:0.0319, QJs:0.9959, QQ:0.0967, KQo:0.7443, AQo:0.6017, KTs:0.999, KJs:0.9999, KQs, AKo:0.8677, A2s:0.9947, A3s:0.9999, A4s, A5s:0.9999, A6s:0.6098, A7s:0.2353, A8s:0.0286, A9s:0.0132, ATs:0.5335, AJs:0.9729, AQs:0.5502, AKs:0.4692"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 18.5bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4293, K2o:0.0001, 32s:0.9999, 33:0.0275, 53o:0.0002, K3o:0.0036, 42s, 43s, 44:0.0469, 54o:0.9999, 64o:0.0005, Q4o:0.0014, K4o:0.1871, 52s, 53s, 54s, 55:0.7156, 65o, 75o:0.0001, 62s:0.9984, 63s, 64s, 65s, 66:0.2194, 76o:0.9995, 86o:0.0117, Q6o:0.5728, K6o:0.9383, A6o:0.208, 72s:0.0002, 73s:0.9999, 74s, 75s, 76s:0.9998, 77:0.8996, 87o:0.9668, Q7o:0.0813, K7o:0.7814, A7o:0.9975, 82s:0.8569, 83s:0.018, 84s, 85s:0.9999, 86s, 87s:0.9995, 88:0.0003, 98o:0.975, T8o:0.2128, J8o:0.0014, Q8o:0.9954, K8o:0.9649, A8o:0.9127, 92s:0.9966, 93s:0.9988, 94s:0.9996, 95s, 96s:0.9998, 97s, 98s, 99:0.0077, T9o:0.9999, J9o:0.999, Q9o:0.9997, K9o:0.9963, A9o, T2s:0.9973, T3s, T4s:0.9998, T5s:0.9996, T6s:0.9999, T7s, T8s:0.9957, T9s:0.9982, JTo:0.2906, QTo:0.4764, KTo:0.3241, ATo, J2s:0.9994, J3s:0.9997, J4s, J5s:0.9997, J6s, J7s, J8s:0.0074, J9s:0.0674, JTs:0.0006, QJo:0.2843, KJo:0.9956, AJo:0.185, Q2s:0.9999, Q3s:0.9992, Q4s:0.7056, Q5s:0.7762, Q6s:0.9978, Q7s:0.9997, Q8s:0.0366, Q9s:0.0636, QTs:0.0004, QJs:0.0005, KQo, K2s:0.054, K3s:0.0004, K4s:0.0078, K7s:0.0036, K8s:0.0003, K9s:0.0004, KTs:0.0001, KJs:0.7804, KQs:0.9999, A6s:0.0001, A7s:0.0015, A8s:0.2465, A9s, ATs, AJs:0.9995, AQs:0.2089, AA:0.9995"
      },
      {
        "action": "3bet 18.5bb",
        "min": 0.0001,
        "range": "22:0.5707, A2o, 33:0.9725, A3o, 44:0.9531, K4o:0.0093, A4o, 55:0.2844, A5o, 66:0.7806, K6o:0.0363, A6o:0.792, 76s:0.0002, 77:0.1004, A7o:0.0025, 87s:0.0005, 88:0.9997, K8o:0.0176, A8o:0.0873, 96s:0.0002, 99:0.9923, J9o:0.0008, Q9o:0.0002, K9o:0.0036, T8s:0.0043, T9s:0.0018, TT, JTo:0.7094, QTo:0.5236, KTo:0.6759, J2s:0.0001, J3s:0.0003, J5s:0.0003, J8s:0.9926, J9s:0.9326, JTs:0.9994, JJ, QJo:0.7157, KJo:0.0044, AJo:0.815, Q2s:0.0001, Q3s:0.0008, Q4s:0.2944, Q5s:0.2238, Q6s:0.0022, Q7s:0.0003, Q8s:0.9634, Q9s:0.9364, QTs:0.9996, QJs:0.9995, QQ, AQo, K2s:0.946, K3s:0.9996, K4s:0.9922, K5s, K6s, K7s:0.9964, K8s:0.9996, K9s:0.9996, KTs:0.9999, KJs:0.2196, KQs:0.0001, KK, AKo, A2s, A3s, A4s, A5s, A6s:0.9999, A7s:0.9985, A8s:0.7535, AJs:0.0005, AQs:0.7911, AKs, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "77:0.0001, 88:0.0059, TT:0.0002, JJ:0.0009, AJo:0.0034, KQo:0.0032, KTs:0.0004, A9s:0.0001, ATs:0.014, AJs:0.0048, AA:0.0038"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0257, A3o:0.0688, A4o:0.0635, A5o:0.0001, A6o:0.0332, A7o:0.0072, 88:0.0002, A8o:0.0582, A9o:0.0289, TT:0.3244, ATo:0.1654, AJo:0.2477, KQo:0.0004, AQo:0.1548, KK:0.0008, A2s:0.0024, A3s:0.0182, ATs:0.0244, AQs:0.1251, AKs:0.0357, AA:0.9962"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0153, 44:0.0023, 55:0.6403, 66:0.4777, 77:0.0644, 88:0.0252, 99, TT:0.6753, JJ:0.9991, AJo:0.1262, QJs:0.9998, QQ, KQo:0.8846, AQo:0.8452, K9s:0.0006, KTs:0.9707, KJs, KQs, KK:0.9991, AKo, A2s:0.0153, A3s:0.7328, A4s:0.9254, A5s:0.9996, A6s:0.0009, A8s:0.0003, A9s:0.2093, ATs:0.9616, AJs:0.9952, AQs:0.8749, AKs:0.9643"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "66:0.0001, 88:0.0043, 99:0.0001, TT:0.0006, AJo:0.0015, QTs:0.0003, KQo:0.0022, KTs:0.0001, KQs:0.0001, KK:0.001, A9s:0.0003, ATs:0.0051, AJs:0.0054, AA:0.0008"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.1395, A3o:0.1916, A4o:0.0301, A5o:0.0001, A6o:0.0005, A7o:0.0019, A8o:0.0073, A9o:0.0027, TT:0.1844, ATo:0.1671, JJ:0.0004, AJo:0.2329, AQo:0.0002, KK:0.0002, A2s:0.0783, A3s:0.0006, A8s:0.0068, AJs:0.0002, AQs:0.0952, AKs:0.2217, AA:0.9992"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 33:0.1576, 44:0.0486, 55:0.7447, 66:0.7409, 77:0.0018, 88:0.1873, 99:0.9999, TT:0.815, JJ:0.9996, AJo:0.0001, QTs:0.0107, QJs, QQ, KQo:0.9978, AQo:0.9998, KTs:0.9999, KJs, KQs:0.9999, KK:0.9988, AKo, A2s:0.8477, A3s:0.9971, A4s:0.9995, A5s, A6s:0.0075, A8s:0.001, A9s:0.2067, ATs:0.9949, AJs:0.9944, AQs:0.9048, AKs:0.7783"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "66:0.0012, 77:0.0154, 88:0.0319, 99:0.0503, TT:0.0056, JTs:0.0005, AJo:0.016, QTs:0.0021, KQo:0.0121, KJs:0.0001, KK:0.004, ATs:0.0375, AJs:0.1221"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0682, A3o:0.1939, A4o:0.0275, A5o:0.0857, A6o:0.0001, A7o:0.0008, A8o:0.0004, A9o:0.0002, TT:0.2105, ATo:0.2754, JJ:0.0001, AJo:0.2641, KK:0.0001, A6s:0.231, A7s:0.1422, A8s:0.1613, A9s:0.0026, AJs:0.013, AQs:0.0122, AKs:0.4275, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0179, 33:0.7169, 44:0.7616, 55:0.9903, 66:0.9949, 77:0.4377, 88:0.4357, 99:0.9491, TT:0.7839, JTs:0.0004, JJ:0.9998, KJo:0.0131, AJo:0.2799, QTs:0.8919, QJs:0.9999, QQ, KQo:0.9879, AQo, K5s:0.0006, K6s:0.0002, K7s:0.0001, K9s:0.0001, KTs, KJs:0.9999, KQs, KK:0.9959, AKo, A2s, A3s:0.9999, A4s, A5s, A6s:0.7107, A7s:0.7501, A8s:0.6464, A9s:0.7813, ATs:0.9625, AJs:0.865, AQs:0.9878, AKs:0.5725"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, A2o:0.0001, 32s:0.9931, 33:0.9882, A3o:0.0001, 42s, 43s, 44:0.9999, 54o:0.3323, K4o:0.0001, A4o:0.001, 52s:0.9999, 53s, 54s:0.9984, 55, 65o:0.9998, A5o:0.001, 62s:0.0292, 63s:0.9999, 64s, 65s, 66, 76o, 86o:0.0033, K6o:0.6061, A6o:0.0577, 73s:0.9991, 74s:0.9999, 75s, 76s, 77, 87o:0.752, 97o:0.0004, K7o:0.9993, A7o:0.5196, 82s:0.2138, 83s:0.0083, 84s:0.9998, 85s, 86s, 87s, 88, 98o:0.7386, T8o:0.0393, Q8o:0.0002, K8o:0.9922, A8o:0.936, 92s:0.1427, 93s:0.5074, 94s:0.4335, 95s:0.9998, 96s, 97s, 98s, 99, T9o, J9o:0.4893, Q9o:0.995, K9o:0.9981, A9o, T2s:0.0031, T3s:0.692, T4s:0.978, T5s:0.9905, T6s, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J2s:0.9905, J3s:0.9897, J4s:0.9998, J5s:0.9999, J6s:0.9999, J7s, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s, Q3s:0.9988, Q4s:0.9999, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s:0.2851, K3s:0.1062, K4s:0.3884, K5s:0.0704, K6s:0.0862, K7s:0.7932, K8s:0.9295, K9s:0.9999, KTs, KJs, KQs, KK:0.1626, A2s:0.0023, A3s:0.0001, A4s:0.0013, A5s:0.0012, A6s:0.2344, A7s:0.8334, A8s:0.9999, A9s, ATs, AJs, AQs, AKs:0.0001"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0017, K3o:0.0001, A3o:0.0013, 54o:0.0016, K4o:0.0006, A4o:0.0076, 52s:0.0001, K5o:0.0026, A5o:0.002, A6o:0.0087, 87o:0.0005, K7o:0.0001, A7o:0.0101, 82s:0.0001, 98o:0.0003, T8o:0.0012, K8o:0.0068, A8o:0.0036, J9o:0.0041, Q9o:0.0004, K9o:0.0019, T5s:0.0057, J2s:0.0024, J3s:0.0098, Q3s:0.0012, KK:0.0101, AKo:0.0009, AKs:0.0292, AA:0.0132"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.4275, A3o:0.1751, K4o:0.0001, A4o:0.0208, A5o:0.0067, A6o:0.5904, A7o:0.3206, A8o:0.0599, AKo:0.0004, AKs:0.4816, AA:0.9868"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.5708, 33:0.0118, K3o:0.0055, A3o:0.8235, 44:0.0001, K4o:0.0119, A4o:0.9706, 54s:0.0016, K5o:0.1428, A5o:0.9903, K6o:0.183, A6o:0.3432, A7o:0.1497, K8o:0.0001, A8o:0.0005, Q4s:0.0001, K2s:0.7149, K3s:0.8938, K4s:0.6116, K5s:0.9296, K6s:0.9138, K7s:0.2068, K8s:0.0705, K9s:0.0001, KK:0.8273, AKo:0.9987, A2s:0.9977, A3s:0.9999, A4s:0.9987, A5s:0.9988, A6s:0.7656, A7s:0.1666, A8s:0.0001, AKs:0.4891"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 7bb",
      "3bet 10bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0649, 66:0.0811, 77:0.0109, 88:0.3122, 99:0.0871, TT:0.4365, JJ:0.1457, AJo:0.0119, QJs:0.4425, QQ:0.5015, KQo:0.0971, AQo:0.3222, KTs:0.8373, KJs:0.093, KQs:0.1808, KK:0.2734, A9s:0.4392, ATs:0.667, AJs:0.0026, AQs:0.5842"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A3o:0.0076, A4o:0.0186, A5o:0.2572, A6o:0.0007, 77:0.0555, A7o:0.0021, 88:0.0367, TT:0.2812, ATo:0.0757, JJ:0.2498, AJo:0.5721, QQ:0.1459, AQo:0.6152, KK:0.0001, A2s:0.0005, A6s:0.0221, A7s:0.0385, A8s:0.0345, A9s:0.2257, ATs:0.2895, AQs:0.2425, AKs:0.2549, AA:0.9102"
      },
      {
        "action": "3bet 10bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A3o:0.0005, A4o:0.0015, A5o:0.0033, 66:0.0031, A6o:0.0264, A7o:0.0013, A8o:0.0022, TT:0.024, ATo:0.0004, JJ:0.0044, AJo:0.0155, QQ:0.0034, AQo:0.0444, A2s:0.0001, A8s:0.0011, AQs:0.0339, AKs:0.0021, AA:0.0898"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0031, A5o:0.0014, 66:0.003, 77:0.0003, JJ:0.6001, AJo:0.0344, QQ:0.3491, AQo:0.0182, KJs:0.907, KQs:0.8192, KK:0.7265, AKo, A2s:0.9993, A3s, A4s, A5s, A6s:0.9779, A7s:0.9615, A8s:0.9631, A9s:0.3281, ATs:0.0436, AJs:0.9974, AQs:0.1395, AKs:0.743"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "55:0.0002, 66:0.0016, 77:0.0001, JTs:0.0004, KQo:0.0017, A9s:0.0067, ATs:0.0065, AA:0.0027"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A3o:0.0016, A5o:0.0024, A6o:0.0567, A7o:0.0774, A8o:0.0019, 99:0.2059, A9o:0.0745, TT:0.0149, ATo:0.3131, AJo:0.152, AQo:0.0089, KK:0.0003, A6s:0.0039, A7s:0.0863, A8s:0.0006, AQs:0.0261, AKs:0.0013, AA:0.9973"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0002, 55:0.0453, 66:0.4904, 77:0.9999, 88, 99:0.7941, TT:0.9851, JTs:0.0386, JJ, AJo:0.848, QTs:0.9956, QJs, QQ, KQo:0.4679, AQo:0.9911, KTs, KJs, KQs, KK:0.9997, AKo, A2s:0.0009, A3s:0.3787, A4s:0.991, A5s:0.9999, A7s:0.0005, A8s:0.9345, A9s:0.9064, ATs:0.9935, AJs, AQs:0.9739, AKs:0.9987"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "55:0.0006, 66:0.001, 77:0.0031, JTs:0.0001, QTs:0.0021, KQo:0.0024, KK:0.0001, A9s:0.0056, ATs:0.0192, AA:0.0023"
      },
      {
        "action": "3bet 7bb",
        "min": 0.0001,
        "range": "A2o:0.0003, A3o:0.0069, A4o:0.0615, A5o:0.0982, A6o:0.0284, A7o:0.0194, A8o:0.0329, 99:0.1005, A9o:0.0552, TT:0.0001, ATo:0.3414, JJ:0.053, AJo:0.0149, A2s:0.0002, A3s:0.0029, A6s:0.0415, A7s:0.0334, A8s:0.0109, A9s:0.0123, AJs:0.2557, AQs:0.0329, AA:0.9977"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0978, 55:0.4051, 66:0.4506, 77:0.3478, 88, 99:0.8995, TT:0.9999, JTs:0.075, JJ:0.947, AJo:0.9851, QTs:0.9812, QJs, QQ, KQo:0.7772, AQo, KTs:0.9998, KJs, KQs, KK:0.9998, AKo, A2s:0.0545, A3s:0.9216, A4s:0.9999, A5s, A8s:0.871, A9s:0.9578, ATs:0.9808, AJs:0.7443, AQs:0.9671, AKs"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "77:0.0062, JTs:0.0001, QTs:0.0006, KQo:0.0016, K9s:0.0005, KK:0.0002, A9s:0.0057, ATs:0.0105, AJs:0.004"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0407, A3o:0.0793, A4o:0.0988, A5o:0.1617, A7o:0.0072, A8o:0.0304, A9o:0.0021, ATo:0.2444, A2s:0.0021, A6s:0.1537, A7s:0.2817, AJs:0.1516, AQs:0.2358, AKs:0.0003, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.6373, 55:0.7684, 66:0.9337, 77:0.1744, 88, 99, TT, ATo:0.0347, JTs:0.9999, JJ, KJo:0.2569, AJo, QTs:0.9994, QJs, QQ, KQo:0.9984, AQo, K9s:0.041, KTs, KJs, KQs, KK:0.9998, AKo, A2s:0.9959, A3s, A4s, A5s, A6s:0.4432, A7s:0.7129, A8s, A9s:0.9941, ATs:0.9895, AJs:0.8444, AQs:0.7642, AKs:0.9997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 33:0.9993, 43s:0.0024, 44, 53s:0.8251, 54s, 55, 63s:0.0002, 64s:0.9997, 65s, 66:0.996, 75s:0.9983, 76s, 77:0.9889, 85s:0.0037, 86s, 87s, 88, A8o:0.0067, 96s:0.0003, 97s, 98s, 99, A9o:0.9723, T6s:0.0004, T7s:0.9925, T8s, T9s, TT:0.924, JTo:0.0015, QTo:0.6553, KTo:0.9195, ATo:0.9406, J5s:0.0001, J7s:0.0775, J8s, J9s, JTs:0.9809, JJ:0.5997, QJo, KJo:0.9998, AJo:0.9575, Q3s:0.0003, Q4s:0.0065, Q6s:0.0009, Q7s:0.9137, Q8s, Q9s, QTs:0.9994, QJs:0.9997, KQo:0.9997, K2s:0.0037, K3s:0.7225, K4s:0.4828, K5s:0.3013, K6s:0.7905, K7s:0.9993, K8s, K9s, KTs:0.9757, KJs:0.9938, KQs:0.9999, A3s:0.0001, A4s:0.0012, A5s:0.002, A6s:0.5383, A7s:0.9939, A8s, A9s, ATs, AJs, AQs:0.9795"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0097, A3o:0.0004, A4o:0.001, A5o:0.1706, 66:0.004, A6o:0.0022, 77:0.0111, A7o:0.0177, A8o:0.0625, A9o:0.0002, TT:0.076, JTo:0.001, KTo:0.0797, ATo:0.0529, JTs:0.0191, JJ:0.0005, AJo:0.0425, AQo:0.0189, K2s:0.0025, K4s:0.0051, KK:0.1003, AQs:0.0204, AKs:0.1694, AA:0.189"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.1439, A3o:0.1136, A4o:0.1341, A5o:0.1592, A6o:0.0418, A7o:0.1017, A8o:0.0983, A9o:0.0275, ATo:0.0065, AQs:0.0001, AKs:0.1926, AA:0.811"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0008, 33:0.0007, A3o:0.4331, A4o:0.863, A5o:0.6697, KTo:0.0008, JJ:0.3998, KJo:0.0002, QTs:0.0006, QJs:0.0003, QQ, KQo:0.0003, AQo:0.9811, K2s:0.0699, K3s:0.2406, K4s:0.5121, K5s:0.6987, K6s:0.2095, K7s:0.0007, KTs:0.0243, KJs:0.0062, KQs:0.0001, KK:0.8997, AKo, A2s, A3s:0.9999, A4s:0.9988, A5s:0.998, A6s:0.4617, A7s:0.0061, AKs:0.638"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "open 0bb",
      "open 3.5bb",
      "open 24.75bb"
    ],
    "bands": [
      {
        "action": "open 0bb",
        "min": 0.0001,
        "range": "22, 32o:0.2092, 42o:0.6678, 52o:0.3705, 62o:0.0031, 72o:0.0003, 82o:0.0004, 92o:0.655, T2o:0.0261, J2o:0.0448, Q2o:0.0347, K2o:0.412, A2o:0.021, 32s:0.9978, 33, 43o:0.9999, 53o, 63o:0.0983, 73o:0.0002, 93o:0.1376, T3o:0.0459, J3o:0.2502, Q3o:0.6679, K3o:0.4756, A3o:0.1868, 42s:0.9997, 43s:0.8798, 44, 54o:0.9992, 64o:0.9871, 74o:0.2699, 94o:0.0002, T4o:0.1172, J4o:0.7048, Q4o:0.5052, K4o:0.3688, A4o:0.3929, 52s:0.9682, 53s:0.9245, 54s:0.9683, 55, 65o:0.9998, 75o:0.4636, 85o:0.012, 95o:0.015, T5o:0.1733, J5o:0.9801, Q5o:0.9556, K5o:0.7187, A5o:0.9891, 62s:0.8439, 63s:0.9974, 64s:0.9997, 65s:0.9999, 66, 76o:0.8221, 86o:0.6698, 96o:0.3208, T6o:0.8245, J6o:0.1278, Q6o:0.9253, K6o:0.7, A6o:0.9998, 72s:0.0026, 73s:0.9727, 74s:0.7404, 75s:0.671, 76s:0.9718, 77, 87o:0.9998, 97o:0.9945, T7o:0.9819, J7o:0.9075, Q7o:0.7596, K7o, A7o, 82s:0.4487, 83s:0.7666, 84s:0.9733, 85s:0.4099, 86s:0.9981, 87s, 88, 98o:0.9989, T8o:0.9621, J8o:0.9908, Q8o:0.9363, K8o:0.9786, A8o:0.7338, 92s:0.9988, 93s:0.9925, 94s:0.9992, 95s:0.9999, 96s:0.9978, 97s, 98s:0.9992, 99:0.9996, T9o:0.9974, J9o:0.9532, Q9o:0.9992, K9o:0.9996, A9o:0.0876, T2s:0.9097, T3s:0.9852, T4s:0.9999, T5s:0.9993, T6s:0.9999, T7s:0.9998, T8s:0.8607, T9s, TT:0.1999, JTo, QTo, KTo:0.9708, ATo:0.1287, J2s:0.9687, J3s:0.9998, J4s:0.9995, J5s:0.9999, J6s:0.9995, J7s, J8s:0.9928, J9s:0.9999, JTs:0.9999, QJo:0.9458, KJo:0.6278, Q2s:0.9825, Q3s:0.9921, Q4s:0.9969, Q5s:0.9999, Q6s, Q7s, Q8s:0.9996, Q9s, QTs, QJs:0.6663, KQo:0.578, K2s:0.934, K3s:0.9937, K4s, K5s, K6s, K7s, K8s, K9s, KTs:0.9996, KJs:0.7242, KQs:0.4592, A2s:0.1909, A3s:0.7287, A4s:0.7993, A5s:0.9832, A6s, A7s, A8s:0.8839, A9s:0.2239, ATs:0.0001"
      },
      {
        "action": "open 3.5bb",
        "min": 0.0001,
        "range": "32o:0.7908, 42o:0.3322, 52o:0.6295, 62o:0.9969, 72o:0.9997, 82o:0.9996, 92o:0.316, T2o:0.4289, J2o:0.2509, Q2o:0.1875, K2o:0.5869, A2o:0.2018, 32s:0.0022, 43o:0.0001, 63o:0.9017, 73o:0.9998, 83o, 93o:0.8128, T3o:0.6074, J3o:0.0292, Q3o:0.1331, K3o:0.5231, A3o:0.1514, 42s:0.0003, 43s:0.1202, 54o:0.0008, 64o:0.0129, 74o:0.7301, 84o, 94o:0.9998, T4o:0.8822, J4o:0.2926, Q4o:0.4931, K4o:0.631, A4o:0.6038, 52s:0.0318, 53s:0.0755, 54s:0.0317, 65o:0.0002, 75o:0.5364, 85o:0.988, 95o:0.985, T5o:0.8267, J5o:0.0199, Q5o:0.0444, K5o:0.2813, A5o:0.0109, 62s:0.156, 63s:0.0026, 64s:0.0003, 65s:0.0001, 76o:0.1779, 86o:0.3302, 96o:0.6792, T6o:0.1755, J6o:0.8722, Q6o:0.0747, K6o:0.3, A6o:0.0002, 72s:0.9974, 73s:0.0273, 74s:0.2596, 75s:0.329, 76s:0.0282, 87o:0.0002, 97o:0.0055, T7o:0.0181, J7o:0.0925, Q7o:0.2404, 82s:0.5513, 83s:0.2334, 84s:0.0267, 85s:0.5901, 86s:0.0019, 98o:0.0001, T8o:0.019, J8o:0.001, Q8o:0.0623, K8o:0.0214, A8o:0.2662, 92s:0.001, 93s:0.0039, 94s:0.0007, 95s:0.0001, 96s:0.0022, 98s:0.0008, T9o:0.0022, J9o:0.0464, K9o:0.0004, A9o:0.911, T2s:0.0834, T3s:0.0011, T4s:0.0001, T5s:0.0007, T6s:0.0001, T7s:0.0002, T8s:0.1393, TT:0.0034, KTo:0.0292, ATo:0.5928, J2s:0.0071, J3s:0.0001, J6s:0.0004, J8s:0.0071, JTs:0.0001, JJ, QJo:0.0542, KJo:0.3722, AJo, Q2s:0.0066, Q3s:0.0001, Q4s:0.0001, Q8s:0.0002, QJs:0.3337, QQ, KQo:0.422, AQo, K2s:0.066, K3s:0.0063, KTs:0.0004, KJs:0.2758, KQs:0.5408, KK, AKo, A2s:0.8091, A3s:0.2713, A4s:0.2007, A5s:0.0168, A8s:0.1161, A9s:0.7761, ATs:0.9999, AJs, AQs, AKs, AA"
      },
      {
        "action": "open 24.75bb",
        "min": 0.0001,
        "range": "92o:0.029, T2o:0.545, J2o:0.7043, Q2o:0.7778, K2o:0.0011, A2o:0.7773, 93o:0.0496, T3o:0.3468, J3o:0.7206, Q3o:0.199, K3o:0.0012, A3o:0.6617, T4o:0.0005, J4o:0.0026, Q4o:0.0017, K4o:0.0002, A4o:0.0034, 98o:0.0011, T8o:0.0189, J8o:0.0082, Q8o:0.0015, 92s:0.0002, 93s:0.0036, 94s:0.0001, 99:0.0004, T9o:0.0003, J9o:0.0004, Q9o:0.0008, A9o:0.0014, T2s:0.0069, T3s:0.0137, TT:0.7966, ATo:0.2785, J2s:0.0243, J3s:0.0001, J4s:0.0005, J6s:0.0001, J8s:0.0001, Q2s:0.0109, Q3s:0.0079, Q4s:0.0029, Q8s:0.0002"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0045, 77, 88, 99, A9o:0.6214, TT, ATo, JJ, AJo, QQ, AQo, KJs:0.0002, KQs:0.5838, KK, AKo, A8s:0.9995, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8.75bb",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1326, Q2o:0.0012, A2o:0.0045, 32s:0.928, 33:0.2756, 53o:0.0052, 63o:0.0001, K3o:0.0004, A3o:0.0011, 42s:0.8152, 43s:0.9926, 44:0.9846, 54o:0.0678, Q4o:0.0039, K4o:0.0407, A4o:0.3895, 52s:0.8764, 53s:0.9999, 54s:0.9999, 55:0.9941, 65o:0.0886, Q5o:0.0007, K5o:0.0802, A5o:0.9575, 62s:0.1096, 63s:0.9325, 64s:0.9999, 65s:0.9995, 66:0.9999, 76o:0.0283, Q6o:0.1101, K6o:0.3034, A6o:0.1623, 73s:0.5079, 74s:0.9978, 75s:0.9966, 76s:0.9999, 77:0.9991, 87o:0.1313, 97o:0.0002, T7o:0.0189, J7o:0.0209, Q7o:0.2024, K7o:0.5914, A7o:0.4132, 82s:0.0128, 83s:0.0457, 84s:0.2862, 85s:0.8337, 86s:0.9503, 87s:0.8067, 88, 98o:0.2785, T8o:0.9762, J8o:0.6022, Q8o:0.7462, K8o:0.8013, A8o:0.7542, 92s:0.003, 93s:0.0029, 94s:0.0423, 95s:0.3615, 96s:0.9964, 97s:0.9953, 98s:0.9984, 99:0.9573, T9o:0.9995, J9o:0.9626, Q9o:0.9996, K9o:0.9966, A9o:0.7811, T2s:0.9707, T3s:0.9263, T4s:0.9919, T5s:0.9236, T6s:0.9979, T7s:0.9756, T8s:0.9026, T9s:0.8229, TT:0.4527, JTo:0.9242, QTo:0.9953, KTo:0.9999, ATo:0.5623, J2s:0.9686, J3s:0.9937, J4s:0.9974, J5s:0.9967, J6s:0.9994, J7s:0.9997, J8s:0.4123, J9s:0.9279, JTs:0.8922, JJ:0.0203, QJo:0.9997, KJo:0.9999, AJo:0.0002, Q2s:0.9545, Q3s:0.9252, Q4s:0.9963, Q5s:0.9997, Q6s:0.9919, Q7s, Q8s:0.6642, Q9s:0.9962, QTs:0.9825, QJs:0.9998, QQ:0.4655, KQo, K2s:0.6656, K3s:0.471, K4s:0.9292, K5s:0.9961, K6s:0.9978, K7s:0.7784, K8s:0.9751, K9s:0.9926, KTs:0.9997, KJs, KQs, KK:0.9981, A2s:0.0328, A3s:0.0412, A4s:0.5163, A5s:0.912, A6s:0.9716, A7s:0.9368, A8s:0.9959, A9s:0.7406, ATs:0.741, AJs:0.0013, AQs:0.0003"
      },
      {
        "action": "3bet 8.75bb",
        "min": 0.0001,
        "range": "32o:0.0878, 42o:0.0091, 52o:0.0058, 62o:0.0006, 72o:0.0141, 82o:0.1969, 92o:0.0093, T2o:0.1833, J2o:0.2715, Q2o:0.1907, K2o:0.2846, A2o:0.4694, 32s:0.0001, 53o:0.0001, 63o:0.0043, 73o:0.0005, 83o:0.0169, 93o:0.0359, T3o:0.0388, J3o:0.3558, Q3o:0.0403, K3o:0.4261, A3o:0.1794, 42s:0.0055, 43s:0.0005, 54o:0.0054, 84o:0.0009, 94o:0.0861, T4o:0.0028, J4o:0.1039, Q4o:0.0328, K4o:0.3262, A4o:0.0818, 65o:0.0001, 75o:0.0008, 85o:0.0179, 95o:0.0026, T5o:0.0322, J5o:0.2406, Q5o:0.3366, K5o:0.2616, A5o:0.0017, 62s:0.0029, 63s:0.0051, 76o:0.0175, 86o:0.0033, 96o:0.014, T6o:0.0998, J6o:0.0794, Q6o:0.0746, K6o:0.1018, A6o:0.7858, 73s:0.0171, 87o:0.0158, 97o:0.0765, T7o:0.0062, J7o:0.054, Q7o:0.0609, K7o:0.0544, A7o:0.1053, 82s:0.0361, 83s:0.222, 84s:0.1862, 85s:0.0002, 98o:0.186, T8o:0.0164, J8o:0.1838, Q8o:0.0609, K8o:0.1381, A8o:0.0603, 92s:0.1757, 93s:0.065, 94s:0.0037, 95s:0.1864, 96s:0.0002, 99:0.0001, T2s:0.0042, T3s:0.0146, T4s:0.0008, T5s:0.0016, T6s:0.0005, T8s:0.0001, T9s:0.0001, TT:0.0003, ATo:0.0396, J2s:0.0027, J3s:0.0019, J4s:0.0001, J5s:0.0001, JJ:0.0916, AJo:0.3142, Q2s:0.009, Q3s:0.0008, QQ:0.5142, AQo:0.9812, K2s:0.0008, K3s:0.0001, K4s:0.0002, KK:0.0019, AKo:0.9999, ATs:0.2089, AJs:0.9871, AQs:0.9984, AKs, AA"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.8673, K2o:0.0008, A2o:0.5261, 32s:0.0084, 33:0.7244, K3o:0.0082, A3o:0.8195, 42s:0.0007, 43s:0.0023, 44:0.0154, 54o:0.0001, K4o:0.0078, A4o:0.5287, 54s:0.0001, 55:0.0059, K5o:0.0002, A5o:0.0408, 63s:0.0002, 64s:0.0001, 66:0.0001, K6o:0.0134, A6o:0.0518, 74s:0.0005, 75s:0.0032, 76s:0.0001, 77:0.0009, K7o:0.0772, A7o:0.4815, 83s:0.0001, 84s:0.0001, 85s:0.0003, 86s:0.0496, 87s:0.1925, 98o:0.012, J8o:0.0136, Q8o:0.0013, K8o:0.059, A8o:0.1856, 93s:0.0005, 95s:0.0005, 96s:0.0007, 97s:0.0045, 98s:0.0015, 99:0.0427, T9o:0.0004, J9o:0.0374, Q9o:0.0004, K9o:0.0033, A9o:0.2189, T2s:0.0086, T3s:0.0199, T4s:0.0028, T5s:0.003, T6s:0.0001, T7s:0.0243, T8s:0.0971, T9s:0.1771, TT:0.547, JTo:0.0758, QTo:0.0046, KTo:0.0001, ATo:0.3981, J2s:0.0018, J3s:0.0033, J4s:0.0003, J5s:0.0025, J6s:0.0005, J7s:0.0001, J8s:0.5877, J9s:0.0721, JTs:0.1078, JJ:0.8881, QJo:0.0003, KJo:0.0001, AJo:0.6856, Q2s:0.0292, Q3s:0.0739, Q4s:0.0036, Q5s:0.0002, Q6s:0.008, Q8s:0.3358, Q9s:0.0038, QTs:0.0175, QJs:0.0002, QQ:0.0203, AQo:0.0188, K2s:0.3336, K3s:0.5289, K4s:0.0705, K5s:0.0037, K6s:0.0022, K7s:0.2216, K8s:0.0249, K9s:0.0074, KTs:0.0003, AKo:0.0001, A2s:0.9672, A3s:0.9588, A4s:0.4837, A5s:0.088, A6s:0.0284, A7s:0.0632, A8s:0.0041, A9s:0.2594, ATs:0.0502, AJs:0.0116, AQs:0.0013"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@21",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0004, 77:0.5641, 88, 99, TT, ATo, JJ, AJo, QQ, AQo, KK, AKo, A8s:0.0306, A9s:0.9632, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0006, 66:0.0019, 77:0.0039, 88:0.0017, A9o:0.0001, KTo:0.0014, ATo:0.0013, KJo:0.0001, KQo:0.0031, K9s:0.217, KTs:0.2908, KJs:0.0004, KQs:0.0005, A2s:0.1896, A3s:0.0001, A5s:0.0001, A6s:0.0084, A8s:0.0001, A9s:0.0001, AA:0.0052"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, 33:0.1191, 44:0.9945, A4o:0.021, 55, A5o:0.1094, 66:0.9921, 77:0.9961, A7o:0.02, 88:0.9983, A8o:0.0897, 99, A9o:0.5573, T9s:0.0013, TT, ATo:0.9985, J8s:0.0019, J9s:0.2924, JTs:0.9999, JJ, QJo:0.162, KJo:0.0807, AJo, Q9s:0.0012, QTs:0.9996, QJs, QQ, KQo:0.2973, AQo, K7s:0.002, K9s:0.0055, KTs:0.7092, KJs:0.9996, KQs:0.9995, KK, AKo, A2s:0.0332, A3s:0.9999, A4s, A5s:0.9999, A6s:0.9916, A7s, A8s:0.9999, A9s:0.9999, ATs, AJs, AQs, AKs, AA:0.9948"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0129, TT, JJ, QQ, AQo, KK, AKo, AJs:0.9901, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT, JJ, QQ, AQo:0.4918, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0002, 66:0.042, 77:0.0564, 88:0.2669, TT:0.0011, ATo:0.0001, AJo:0.0184, A7s:0.002, A8s:0.0424, ATs:0.0036, AJs:0.2034, AA:0.0737"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0804, 44:0.6072, 55:0.6168, A5o:0.0004, 66:0.3597, 77:0.7601, A7o:0.0001, 88:0.6642, A8o:0.0001, 99:0.9994, T9s:0.2518, TT:0.9989, KTo:0.0024, ATo:0.0003, J9s:0.002, JTs:0.0177, JJ, KJo:0.0018, AJo:0.0507, Q9s:0.0301, QTs:0.2956, QJs:0.0033, QQ, KQo:0.5793, AQo, K2s:0.0006, K3s:0.0001, K4s:0.0045, K5s:0.0796, K6s:0.1654, K7s:0.1147, K8s:0.3144, K9s:0.9956, KTs:0.9863, KJs:0.9989, KQs:0.9999, KK, AKo, A2s:0.025, A3s:0.8618, A4s:0.8951, A5s:0.9269, A6s:0.1428, A7s:0.7787, A8s:0.7479, A9s:0.9996, ATs:0.9953, AJs:0.7966, AQs, AKs, AA:0.9263"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "A2o:0.0011, 33:0.0005, 44:0.0015, A4o:0.0005, 55:0.0053, A5o:0.0011, 77:0.0364, 88:0.005, 97s:0.0004, 98s:0.0001, 99:0.0739, TT:0.048, KTo:0.0001, ATo:0.0011, J9s:0.0002, JJ:0.0075, KJo:0.0002, Q7s:0.0001, Q8s:0.0001, Q9s:0.0007, QTs:0.0064, QJs:0.0001, QQ, KQo:0.0011, AQo:0.3914, K3s:0.0003, K4s:0.0003, K5s:0.0682, K6s:0.0015, K7s:0.0216, K8s:0.0173, K9s:0.4965, KTs:0.6991, KJs:0.3628, KQs:0.9878, KK, AKo, A2s:0.0691, A3s:0.4704, A4s:0.7648, A5s:0.728, A6s:0.2591, A7s:0.4772, A8s:0.2835, A9s:0.5214, ATs:0.3892, AJs:0.5918, AQs:0.9808, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.674, 42o:0.0008, Q2o:0.0001, A2o:0.0005, 32s:0.0001, 33:0.1827, 53o:0.0001, 93o:0.0011, T3o:0.0007, A3o:0.0001, 43s:0.299, 44:0.5685, 64o:0.0004, 74o:0.0006, Q4o:0.1593, K4o:0.0002, 52s:0.1959, 53s:0.3517, 54s:0.23, 55:0.2116, 75o:0.0003, A5o:0.0003, 62s:0.0011, 63s:0.3804, 64s:0.2032, 65s:0.0746, 66:0.3526, 86o:0.0001, Q6o:0.0062, A6o:0.0038, 72s:0.8379, 73s:0.0774, 74s:0.0971, 75s:0.0011, 76s:0.9359, 77:0.2051, K7o:0.0052, A7o:0.0001, 82s:0.0005, 83s:0.0148, 84s:0.0044, 85s:0.58, 86s:0.3915, 87s:0.354, 88:0.8942, J8o:0.0003, Q8o:0.0199, K8o:0.0001, A8o:0.0034, 92s:0.0082, 95s:0.053, 96s:0.0001, 97s:0.5683, 98s:0.4866, 99:0.5219, K9o:0.0512, A9o:0.4411, T2s:0.1585, T3s:0.0004, T4s:0.0093, T5s:0.0605, T6s:0.0041, T7s:0.0193, T8s:0.1901, T9s:0.0006, TT:0.0011, JTo:0.0001, QTo:0.0853, KTo:0.025, ATo:0.0134, J2s:0.0079, J3s:0.0364, J4s:0.0006, J5s:0.0442, J6s:0.1793, J7s:0.6462, J8s:0.0256, J9s:0.3117, JTs:0.0342, JJ:0.0041, QJo:0.0848, KJo:0.0868, AJo:0.0007, Q2s:0.0185, Q3s:0.0836, Q4s:0.3057, Q5s:0.1854, Q6s:0.1457, Q7s:0.3224, Q8s:0.4439, Q9s:0.697, QTs:0.0002, QJs:0.1372, QQ:0.0007, KQo:0.4153, AQo:0.0022, K2s:0.0066, K3s:0.1814, K4s:0.4178, K5s:0.517, K6s:0.6346, K7s:0.0003, K8s:0.0139, K9s:0.1149, KTs:0.3108, KJs:0.021, KQs:0.2486, AKo:0.0002, A2s:0.0104, A3s:0.0065, A4s:0.0492, A5s:0.0208, A6s:0.0546, A7s:0.008, A8s:0.0431, A9s:0.2027, ATs:0.5414, AJs:0.0526, AQs:0.0566, AKs:0.0003, AA:0.0109"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0047, 42o:0.0019, 62o:0.0002, 72o:0.0002, 92o:0.0065, Q2o:0.0444, K2o:0.0068, A2o:0.0073, 33:0.0007, 53o:0.0052, 93o:0.0085, T3o:0.0009, A3o:0.0071, 42s:0.0467, 43s:0.04, 44:0.0001, 74o:0.0007, 94o:0.0171, J4o:0.0396, Q4o:0.0002, K4o:0.0571, A4o:0.5072, 52s:0.0058, 53s:0.0004, 55:0.0009, 75o:0.025, 85o:0.0032, J5o:0.0152, K5o:0.0026, A5o:0.2044, 62s:0.001, 64s:0.1042, 65s:0.1011, 66:0.0462, Q6o:0.0045, K6o:0.0032, A6o:0.014, 72s:0.0016, 73s:0.0834, 74s:0.0694, 75s:0.028, 76s:0.0002, 77:0.0229, 87o:0.0445, 97o:0.0074, T7o:0.0005, J7o:0.0054, K7o:0.2086, A7o:0.1038, 85s:0.0018, 86s:0.0024, 87s:0.0253, 88:0.0147, 98o:0.0246, 92s:0.0014, 95s:0.0035, 96s:0.0024, 98s:0.0135, 99:0.0809, T9o:0.0065, J9o:0.0073, Q9o:0.029, K9o:0.0666, A9o:0.0072, T2s:0.0955, T4s:0.0088, T5s:0.0019, T6s:0.0964, T7s:0.0004, T8s:0.0146, T9s:0.053, TT:0.6471, JTo:0.0054, KTo:0.0005, ATo:0.0808, J2s:0.0017, J3s:0.0746, J4s:0.0001, J5s:0.0041, J6s:0.3757, J7s:0.0741, J8s:0.0003, J9s:0.0358, JTs:0.0002, JJ:0.3952, QJo:0.0001, KJo:0.0714, AJo:0.0979, Q2s:0.0011, Q3s:0.0624, Q4s:0.0514, Q5s:0.0192, Q6s:0.0016, Q7s:0.0317, Q8s:0.0043, QTs:0.0005, QJs:0.0079, QQ:0.4101, KQo:0.0054, AQo:0.1541, K3s:0.0807, K4s:0.0106, K5s:0.0018, K6s:0.0117, K8s:0.0449, K9s:0.0188, KJs:0.0093, KQs:0.1344, KK:0.0703, AKo:0.2867, A2s:0.035, A3s:0.0005, A4s:0.0139, A5s:0.0005, A6s:0.0235, A7s:0.0281, A8s:0.0418, A9s:0.0135, ATs:0.0291, AJs:0.0696, AQs:0.1849, AKs:0.9556, AA:0.9789"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.2821, 32o:0.0001, K2o:0.0009, A2o:0.0861, 33:0.8005, A3o:0.309, 42s:0.003, 43s:0.4038, 44:0.4311, 54o:0.003, 64o:0.0001, 74o:0.0011, Q4o:0.0612, A4o:0.2634, 52s:0.0013, 53s:0.3157, 55:0.6136, 75o:0.0007, Q5o:0.043, A5o:0.5601, 62s:0.0002, 63s:0.0374, 64s:0.0027, 65s:0.4498, 66:0.282, 86o:0.0001, 96o:0.0008, J6o:0.0002, Q6o:0.003, A6o:0.0672, 72s:0.0019, 73s:0.0002, 74s:0.2372, 75s:0.4168, 76s:0.0118, 77:0.4005, K7o:0.009, A7o:0.0002, 83s:0.0005, 84s:0.0293, 85s:0.0026, 86s:0.0614, 87s:0.0534, 88:0.0402, 98o:0.0036, Q8o:0.0128, K8o:0.0001, A8o:0.0052, 92s:0.0005, 95s:0.0066, 96s:0.0002, 97s:0.0329, 98s:0.0063, 99:0.3793, T9o:0.0798, J9o:0.0022, Q9o:0.0735, K9o:0.1524, A9o:0.1695, T2s:0.3206, T3s:0.0115, T4s:0.0132, T5s:0.0777, T6s:0.0608, T7s:0.0537, T9s:0.4108, TT:0.3515, JTo:0.2059, QTo:0.1321, KTo:0.8219, ATo:0.8568, J3s:0.3696, J4s:0.0019, J5s:0.4885, J6s:0.0022, J7s:0.0115, J8s:0.7181, J9s:0.0354, JTs:0.9412, JJ:0.6003, QJo:0.8454, KJo:0.4762, AJo:0.9012, Q2s:0.6729, Q3s:0.6818, Q4s:0.2687, Q5s:0.5207, Q6s:0.2905, Q7s:0.2758, Q8s:0.0575, Q9s:0.1919, QTs:0.9714, QJs:0.7679, QQ:0.589, KQo:0.5446, AQo:0.8434, K2s:0.7806, K3s:0.451, K4s:0.4171, K5s:0.2505, K6s:0.0138, K7s:0.9579, K9s:0.5218, KTs:0.6888, KJs:0.9644, KQs:0.6151, KK:0.9297, AKo:0.7128, A2s:0.7439, A3s:0.8548, A4s:0.8727, A5s:0.8721, A6s:0.2747, A7s:0.8282, A8s:0.6422, A9s:0.5919, ATs:0.4277, AJs:0.8655, AQs:0.7583, AKs:0.0441, AA:0.0103"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@21|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0007, QQ:0.9995, KK, AKs:0.0099, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@21|SB:CALL@20.5",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0116, QQ:0.2723, KK:0.0641, AKs:0.0259, AA:0.0077"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "QQ:0.7272, KK:0.9359, AKs:0.0004, AA:0.9923"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0008, QQ:0.9993, KK, AKs:0.0007, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.0936, QQ:0.9977, KK, AKs:0.5776, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:CALL@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0005, QQ:0.9863, KK, AKs:0.0028, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:CALL@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0005, JJ:0.0856, QQ:0.5559, KK:0.5412, AKo:0.0003, AKs:0.3309, AA:0.0207"
      },
      {
        "action": "3bet 21bb",
        "min": 0.0001,
        "range": "TT:0.0003, JJ:0.0284, QQ:0.4441, KK:0.4588, AKo:0.0003, AKs:0.3576, AA:0.9793"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0066, QQ:0.9986, KK, AQs:0.0001, AKs:0.042, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|SB:CALL@18",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0017, QQ:0.0124, KK:0.0005, AKs:0.0192"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.9836, KK:0.9995, AKs:0.0011, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BB:3BET@18.5",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88, 99, TT, ATo:0.2703, JJ, AJo, QQ, AQo, KK, AKo, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0006, TT:0.9446, JJ, QQ, AQo:0.9821, KK, AKo, AQs:0.9967, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0634, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, TT:0.0208, JJ, QQ, AQo:0.0001, KK, AKo, AQs:0.8502, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KQs:0.0003, AJs:0.025, AA:0.005"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0007, 44:0.0129, 55:0.4339, 66:0.0179, 77:0.3181, 87s:0.0001, 88:0.6401, 99:0.5678, TT:0.8072, JTs:0.0002, JJ, AJo:0.0003, QQ, KQo:0.0303, AQo, K3s:0.0001, K4s:0.0007, K5s:0.0518, K6s:0.0267, K7s:0.067, K8s:0.0279, K9s:0.4893, KTs:0.9915, KJs:0.6006, KQs:0.9946, KK, AKo, A2s:0.9629, A3s:0.9779, A4s:0.9977, A5s:0.9996, A6s:0.5931, A7s:0.9962, A8s:0.9326, A9s:0.7944, ATs:0.9534, AJs:0.7167, AQs, AKs, AA:0.995"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0004, A5o:0.0018, 66:0.0006, 88:0.0001, JJ:0.0001, QJs:0.0002, QQ:0.8559, KQo:0.002, AQo:0.0001, K4s:0.0013, K6s:0.0011, K7s:0.0024, K8s:0.0029, KTs:0.0348, KJs:0.0625, KQs:0.4767, KK, AKo, A2s:0.3354, A3s:0.5251, A4s:0.5513, A5s:0.6063, A6s:0.1103, A7s:0.3167, A8s:0.0557, A9s:0.0642, ATs:0.0923, AJs:0.1056, AQs:0.5756, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 21bb"
    ],
    "bands": [
      {
        "action": "4bet 21bb",
        "min": 0.0001,
        "range": "33:0.0001, 55:0.0015, 66:0.0006, 76s:0.0005, 77:0.0011, 88:0.0001, TT:0.0001, JTs:0.0002, JJ:0.77, AJo:0.0003, QQ, KQo:0.001, AQo:0.0057, K3s:0.0115, K4s:0.0246, K5s:0.3055, K6s:0.0297, K7s:0.1701, K8s:0.1081, K9s:0.2776, KTs:0.6269, KJs:0.7373, KQs:0.9907, KK, AKo, A2s:0.1329, A3s:0.83, A4s:0.9881, A5s:0.9219, A6s:0.2948, A7s:0.2755, A8s:0.3267, A9s:0.2794, ATs:0.0986, AJs:0.2839, AQs:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0004, Q2o:0.0198, A2o:0.0212, Q3o:0.0006, K3o:0.0775, A3o:0.1018, 44:0.0002, A4o:0.1987, Q5o:0.0029, A5o:0.0114, 64s:0.1546, K6o:0.0097, A6o:0.0782, 77:0.0243, K7o:0.0006, A7o:0.075, 88:0.0762, A8o:0.0367, 95s:0.0001, 99:0.0359, K9o:0.0045, A9o:0.0615, T4s:0.0147, T5s:0.0236, T6s:0.0234, T9s:0.0053, TT:0.6105, QTo:0.0621, KTo:0.0824, ATo:0.5006, JTs:0.0057, JJ:0.6096, AJo:0.2062, Q2s:0.0092, Q3s:0.1099, Q4s:0.0137, Q7s:0.0025, Q9s:0.0017, QTs:0.0329, QJs:0.057, QQ:0.9153, KQo:0.4595, AQo:0.3326, K2s:0.0001, K3s:0.0008, K4s:0.0208, K7s:0.0009, K8s:0.1491, K9s:0.0375, KJs:0.0708, KQs:0.0031, KK:0.9161, AKo:0.7126, A2s:0.1452, A3s:0.1563, A4s:0.3242, A5s:0.0771, A6s:0.1294, A7s:0.0721, A8s:0.0123, A9s:0.002, ATs:0.3932, AJs:0.0512, AQs:0.8801, AKs:0.4864, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0016, 44:0.0073, 54s:0.0012, 55:0.0414, 64s:0.0004, 65s:0.0011, 66:0.0087, 73s:0.0056, 77:0.0106, A7o:0.0008, 85s:0.0007, 86s:0.0015, 87s:0.0045, 88:0.0416, 97s:0.0001, 99:0.0255, T6s:0.001, T8s:0.0003, T9s:0.0012, TT:0.3894, ATo:0.0028, J9s:0.0001, JTs:0.0517, JJ:0.3902, AJo:0.0106, Q5s:0.0002, Q6s:0.0117, Q7s:0.0016, Q9s:0.0099, QTs:0.2263, QJs:0.0179, QQ:0.0847, KQo:0.0332, AQo:0.6656, K2s:0.0001, K3s:0.0012, K4s:0.005, K7s:0.0002, K8s:0.0024, K9s:0.0004, KTs:0.311, KJs:0.7904, KQs:0.9243, KK:0.0839, AKo:0.2874, A2s:0.2533, A3s:0.2785, A4s:0.0502, A5s:0.0352, A6s:0.0414, A7s:0.1864, A8s:0.1505, A9s:0.0032, ATs:0.6051, AJs:0.6027, AQs:0.1198, AKs:0.5136, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.995, 32s:0.0235, 33:0.9935, 42s:0.012, 43s:0.1757, 44:0.9677, 54o:0.001, 64o:0.0019, 52s:0.0232, 53s:0.5459, 54s:0.6754, 55:0.9153, 65o:0.0643, 62s:0.0035, 63s:0.3619, 64s:0.7174, 65s:0.953, 66:0.9918, 73s:0.0492, 74s:0.0009, 75s:0.1991, 76s:0.7518, 77:0.9874, A7o:0.0001, 84s:0.0105, 85s:0.0145, 86s:0.831, 87s:0.1345, 88:0.9976, 92s:0.0002, 93s:0.0006, 96s:0.0921, 97s:0.0015, 98s:0.1122, 99:0.6285, T6s:0.0276, T7s:0.0133, T8s:0.5053, T9s:0.656, J4s:0.0003, J7s:0.0027, J8s:0.2048, J9s:0.8663, JTs:0.1901, JJ:0.0003, KJo:0.0001, AJo:0.7116, Q2s:0.0011, Q3s:0.0236, Q4s:0.2397, Q5s:0.1511, Q6s:0.0291, Q7s:0.0014, Q8s:0.7406, Q9s:0.0374, QTs:0.0109, QJs:0.17, KQo:0.615, AQo:0.0557, K3s:0.0161, K4s:0.3952, K5s:0.0273, K6s:0.9408, K7s:0.3021, K8s:0.0001, K9s:0.3433, KTs:0.0153, KJs:0.164, KQs:0.0232, AKo:0.0012, A2s:0.0128, A3s:0.0241, A4s:0.2194, A5s:0.4078, A6s:0.0498, A7s:0.3745, A8s:0.0002, A9s:0.5899, ATs:0.0206, AJs:0.2132, AQs:0.0457"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0007, T2o:0.0029, K2o:0.0388, A2o:0.0651, 32s:0.0232, T3o:0.0314, Q3o:0.0089, K3o:0.0197, A3o:0.1586, 42s:0.0043, 44:0.0003, Q4o:0.0001, K4o:0.0369, A4o:0.0376, 54s:0.0007, T5o:0.0052, K5o:0.0001, A5o:0.2088, 63s:0.006, 66:0.0001, 96o:0.0002, T6o:0.0221, K6o:0.0451, A6o:0.1936, 73s:0.0027, 74s:0.0001, 75s:0.0027, 76s:0.0081, 77:0.003, K7o:0.0093, A7o:0.1106, 83s:0.004, 84s:0.0012, 85s:0.07, 86s:0.0002, 87s:0.0011, 88:0.0003, Q8o:0.0144, K8o:0.0343, A8o:0.0419, 92s:0.0365, 94s:0.0026, 95s:0.0014, 98s:0.0007, 99:0.3654, Q9o:0.0432, K9o:0.0543, A9o:0.1201, T2s:0.012, T3s:0.0296, T4s:0.0054, T5s:0.0258, T6s:0.0118, T7s:0.0014, T8s:0.0074, T9s:0.0091, TT:0.3479, QTo:0.0673, KTo:0.2446, ATo:0.3322, J3s:0.0003, J4s:0.0042, J5s:0.0071, J8s:0.0001, J9s:0.0003, JTs:0.0006, JJ:0.373, AJo:0.199, Q2s:0.0659, Q3s:0.216, Q4s:0.0173, Q5s:0.0033, Q6s:0.0012, Q7s:0.0114, Q8s:0.004, Q9s:0.0961, QTs:0.0006, QQ:0.9786, KQo:0.1457, AQo:0.3029, K2s:0.0442, K3s:0.016, K4s:0.0179, K5s:0.1401, K6s:0.0008, K7s:0.0741, K8s:0.0878, K9s:0.0625, KTs:0.0009, KQs:0.0593, KK:0.9992, AKo:0.6861, A2s:0.3751, A3s:0.0638, A4s:0.2543, A5s:0.1203, A6s:0.0562, A7s:0.0074, A8s:0.0872, A9s:0.2298, ATs:0.0105, AJs:0.09, AQs:0.3333, AKs:0.6451, AA"
      },
      {
        "action": "3bet 21bb",
        "min": 0.0001,
        "range": "22:0.0035, 33:0.001, 42s:0.0001, 44:0.0313, A4o:0.0003, 52s:0.0001, 54s:0.0195, 55:0.0825, 62s:0.0003, 63s:0.0003, 66:0.0004, 73s:0.0009, 74s:0.0022, 75s:0.0058, 76s:0.0047, 77:0.0016, 83s:0.0021, 85s:0.0012, 86s:0.0028, 87s:0.0003, 88:0.0007, 92s:0.001, 93s:0.0001, 96s:0.0005, 98s:0.0029, 99:0.0055, T6s:0.01, T7s:0.0006, T8s:0.0327, T9s:0.2166, TT:0.652, QTo:0.0699, KTo:0.282, ATo:0.3339, J3s:0.0001, J9s:0.0006, JTs:0.7892, JJ:0.6267, QJo:0.1139, KJo:0.0245, AJo:0.0881, Q3s:0.0148, Q4s:0.0285, Q5s:0.0024, Q6s:0.0007, Q7s:0.0066, Q8s:0.0032, Q9s:0.0016, QTs:0.9668, QJs:0.6885, QQ:0.0214, KQo:0.2393, AQo:0.6414, K2s:0.0004, K3s:0.3067, K4s:0.0205, K5s:0.059, K6s:0.0224, K7s:0.0284, K8s:0.0008, K9s:0.017, KTs:0.974, KJs:0.8259, KQs:0.9167, KK:0.0008, AKo:0.3127, A2s:0.2176, A3s:0.7302, A4s:0.1374, A5s:0.3799, A6s:0.1098, A7s:0.4276, A8s:0.3305, A9s:0.0054, ATs:0.9655, AJs:0.6933, AQs:0.621, AKs:0.3549"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0286, 99:0.996, TT, JJ, QQ, AQo, KK, AKo, AJs:0.9729, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.3234, JJ, QQ, AQo:0.2527, KK, AKo, AQs:0.9988, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, AJo:0.0237, AJs:0.0009, AA:0.0004"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0006, 44:0.1901, 55:0.2619, 66:0.0977, 77:0.5629, 88:0.6562, 99:0.8362, T9s:0.0001, TT, ATo:0.0008, JTs:0.0001, JJ, AJo:0.4169, Q9s:0.0004, QTs:0.0241, QJs:0.0041, QQ, KQo:0.1972, AQo, K7s:0.0003, K9s:0.0031, KTs:0.3516, KJs:0.0242, KQs:0.9999, KK, AKo, A2s:0.1733, A3s:0.1088, A4s:0.9531, A5s:0.9984, A6s:0.2078, A7s:0.2711, A8s:0.5736, A9s:0.7102, ATs:0.9616, AJs:0.9991, AQs, AKs, AA:0.9996"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "44:0.0006, 52s:0.0005, 55:0.047, A5o:0.0002, 66:0.097, 76s:0.0036, 77:0.0059, 85s:0.0001, 88:0.0853, 99:0.0014, T8s:0.0002, TT:0.0054, KTo:0.0001, ATo:0.0001, JJ:0.4818, Q8s:0.0002, QTs:0.0003, QQ, KQo:0.0527, AQo:0.9825, K2s:0.0003, K3s:0.0016, K4s:0.0264, K6s:0.0215, K7s:0.0599, K8s:0.0014, K9s:0.0089, KTs:0.0178, KJs:0.0172, KQs:0.9983, KK, AKo, A2s:0.6994, A3s:0.4068, A4s:0.8657, A5s:0.9761, A6s:0.4665, A7s:0.4406, A8s:0.6233, A9s:0.2338, ATs:0.4168, AJs:0.3508, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 24.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6916, A2o:0.0001, 32s:0.1073, 33:0.1501, 53o:0.0108, A3o:0.0001, 42s:0.0183, 43s:0.8007, 44:0.7203, 52s:0.0007, 53s:0.1998, 54s:0.9395, 55:0.916, 62s:0.1091, 63s:0.4182, 64s:0.1299, 65s:0.0273, 66:0.8718, 76o:0.0059, K6o:0.0002, 72s:0.0016, 74s:0.9782, 75s:0.4068, 76s:0.8016, 77:0.9382, 82s:0.0004, 83s:0.206, 84s:0.0017, 85s:0.0001, 86s:0.805, 87s:0.4792, 88:0.984, 98o:0.0017, K8o:0.0001, 92s:0.1669, 93s:0.0005, 94s:0.0157, 95s:0.0546, 97s:0.4168, 98s:0.2851, 99:0.0813, T9o:0.021, J9o:0.2861, Q9o:0.0006, K9o:0.003, T3s:0.0142, T4s:0.0144, T6s:0.0508, T7s:0.2479, T8s:0.2775, T9s:0.1812, TT:0.0001, QTo:0.0001, KTo:0.1066, ATo:0.1555, J2s:0.4863, J3s:0.0093, J4s:0.0251, J5s:0.0691, J7s:0.0756, J8s:0.0008, J9s:0.0766, JTs:0.3329, JJ:0.0001, QJo:0.2024, KJo:0.3302, AJo:0.0333, Q2s:0.262, Q3s:0.2298, Q4s:0.0004, Q5s:0.2828, Q6s:0.4816, Q7s:0.4274, Q8s:0.1964, Q9s:0.0453, QTs:0.1415, QJs:0.1205, QQ:0.0023, KQo:0.4192, AQo:0.0003, K2s:0.0103, K3s:0.0124, K4s:0.0687, K5s:0.5124, K6s:0.1332, K7s:0.1047, K8s:0.3481, K9s:0.2806, KTs:0.0673, KJs:0.1126, KQs:0.0459, KK:0.0001, AKo:0.0002, A2s:0.1735, A3s:0.0141, A4s:0.6179, A5s:0.1874, A6s:0.4213, A7s:0.2868, A8s:0.0251, A9s:0.2085, ATs:0.0033, AJs:0.017, AQs:0.004, AKs:0.0002, AA:0.0001"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0047, 42o:0.0114, 92o:0.001, J2o:0.0051, Q2o:0.0008, K2o:0.0238, A2o:0.0438, 32s:0.0085, 33:0.0075, 53o:0.0061, 93o:0.0068, T3o:0.0022, J3o:0.0013, Q3o:0.0124, K3o:0.1364, A3o:0.0311, 42s:0.0687, 43s:0.0008, 84o:0.0317, K4o:0.0657, A4o:0.3235, 52s:0.0325, 53s:0.0002, 54s:0.0007, 55:0.0171, 65o:0.0017, J5o:0.0021, K5o:0.021, A5o:0.0474, 63s:0.0532, 64s:0.0007, 65s:0.0004, 86o:0.0069, 96o:0.0041, T6o:0.0001, K6o:0.2815, A6o:0.1664, 72s:0.0001, 73s:0.0093, 74s:0.0003, 75s:0.0009, 76s:0.0141, 77:0.0041, 87o:0.0163, K7o:0.0024, A7o:0.163, 82s:0.0058, 84s:0.0282, 85s:0.0157, 86s:0.0108, 87s:0.0049, 88:0.0085, 98o:0.0175, T8o:0.0007, K8o:0.0354, A8o:0.2032, 92s:0.0549, 93s:0.0165, 94s:0.0181, 96s:0.0001, 97s:0.0062, 98s:0.0009, 99:0.4834, T9o:0.0563, J9o:0.0331, Q9o:0.0122, K9o:0.1133, A9o:0.2133, T2s:0.0006, T3s:0.0054, T4s:0.1593, T5s:0.0002, T6s:0.4329, T7s:0.0236, T8s:0.0253, T9s:0.0038, TT:0.7915, JTo:0.0021, QTo:0.0482, KTo:0.0871, ATo:0.3778, J2s:0.1084, J3s:0.0006, J4s:0.0006, J5s:0.0274, J6s:0.0187, J7s:0.0211, J8s:0.0022, J9s:0.0101, JTs:0.033, JJ:0.3616, QJo:0.0446, KJo:0.0102, AJo:0.113, Q2s:0.0283, Q3s:0.0175, Q4s:0.0167, Q5s:0.0159, Q6s:0.0071, Q7s:0.0003, Q8s:0.1227, Q9s:0.0041, QTs:0.0012, QJs:0.001, QQ:0.8065, AQo:0.4878, K2s:0.0499, K3s:0.0046, K4s:0.0369, K5s:0.0002, K6s:0.0116, K7s:0.0659, K8s:0.1217, K9s:0.0184, KJs:0.0005, KK:0.9336, AKo:0.5373, A2s:0.0463, A3s:0.2893, A4s:0.01, A5s:0.3244, A6s:0.0264, A7s:0.0295, A8s:0.0039, A9s:0.0217, ATs:0.246, AJs:0.1123, AQs:0.4558, AKs:0.7787, AA:0.9999"
      },
      {
        "action": "3bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.294, Q2o:0.0003, A2o:0.0163, 32s:0.0058, 33:0.84, T3o:0.0006, A3o:0.0149, 42s:0.0007, 43s:0.0706, 44:0.2791, A4o:0.2455, 52s:0.09, 53s:0.0066, 54s:0.0381, 55:0.0633, A5o:0.3452, 62s:0.002, 63s:0.0406, 64s:0.0846, 65s:0.7986, 66:0.1252, T6o:0.0043, K6o:0.0038, A6o:0.0602, 73s:0.0242, 75s:0.0636, 76s:0.1286, 77:0.0552, Q7o:0.005, A7o:0.0131, 82s:0.0001, 83s:0.003, 84s:0.0001, 85s:0.0053, 86s:0.0148, 87s:0.0029, 88:0.0007, K8o:0.0002, A8o:0.0002, 92s:0.0002, 94s:0.0131, 95s:0.0031, 96s:0.0001, 97s:0.0124, 98s:0.016, 99:0.435, T9o:0.0131, J9o:0.0017, Q9o:0.0004, K9o:0.0915, A9o:0.0411, T2s:0.0227, T3s:0.0167, T4s:0.0297, T5s:0.0003, T6s:0.1264, T7s:0.0383, T8s:0.0452, T9s:0.4323, TT:0.2084, JTo:0.3639, QTo:0.3187, KTo:0.3561, ATo:0.3233, J2s:0.0716, J3s:0.0489, J4s:0.0112, J5s:0.222, J6s:0.0012, J7s:0.1774, J8s:0.0697, J9s:0.7863, JTs:0.531, JJ:0.6383, QJo:0.4909, KJo:0.532, AJo:0.8533, Q2s:0.6267, Q3s:0.1606, Q4s:0.0001, Q5s:0.0238, Q6s:0.1871, Q7s:0.1897, Q8s:0.086, Q9s:0.7843, QTs:0.3512, QJs:0.8731, QQ:0.1911, KQo:0.5768, AQo:0.5118, K2s:0.051, K3s:0.5869, K4s:0.461, K5s:0.2239, K6s:0.6411, K7s:0.6998, K8s:0.3077, K9s:0.4543, KTs:0.7908, KJs:0.8839, KQs:0.9518, KK:0.0663, AKo:0.4626, A2s:0.6332, A3s:0.6526, A4s:0.368, A5s:0.363, A6s:0.5135, A7s:0.5286, A8s:0.955, A9s:0.6563, ATs:0.7503, AJs:0.8707, AQs:0.5399, AKs:0.2212"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@12",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0005, 55:0.1525, A5o:0.0001, 66:0.0048, 77:0.009, A7o:0.0001, 88:0.0188, A8o:0.0008, 99:0.0013, A9o:0.001, TT:0.029, ATo:0.0252, JJ:0.0035, AJo:0.0006, QQ:0.0322, AQo:0.0754, KK:0.0246, A3s:0.0004, A6s:0.0009, A7s:0.0127, A8s:0.001, A9s:0.0065, ATs:0.0115, AJs:0.0097, AQs:0.0051, AA:0.043"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "33:0.0025, A3o:0.0033, 44:0.0015, A4o:0.1249, 55:0.0341, A5o:0.4837, 88:0.0436, A8o:0.004, 97s:0.0005, 98s:0.0008, 99:0.1142, A9o:0.0222, T9s:0.069, TT:0.7397, ATo:0.6474, J9s:0.0005, JTs:0.0054, JJ:0.5617, AJo:0.7081, QQ:0.4455, AQo:0.2301, KJs:0.0001, KK:0.9745, AKo, A2s:0.2475, A3s:0.9335, A4s:0.9901, A5s:0.9995, A6s:0.004, A7s:0.5207, A8s:0.9907, A9s:0.9919, ATs:0.9884, AJs:0.9903, AQs:0.9949, AKs, AA:0.957"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@34.75",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.4292, JJ:0.5156, QQ:0.8327, KK, AKo, AQs:0.1477, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@8",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1481, 33:0.4225, 43s:0.0253, 44:0.92, A4o:0.016, 53s:0.3557, 54s:0.9861, 55:0.9907, A5o:0.1954, 64s:0.3648, 65s:0.6987, 66:0.9943, 75s:0.0179, 76s:0.1448, 77:0.8902, 85s:0.0319, 86s:0.2507, 88:0.9749, A8o:0.0046, 93s:0.0001, 96s:0.0103, 99:0.8618, A9o:0.0966, T8s:0.0003, T9s:0.0553, TT:0.7055, ATo:0.2948, J8s:0.0029, J9s:0.0238, JTs:0.071, JJ:0.9837, AJo:0.3881, Q7s:0.0002, QTs:0.2479, QJs:0.0642, QQ:0.9894, AQo:0.9353, K3s:0.0249, K4s:0.3427, K5s:0.3812, K6s:0.0182, K7s:0.0396, K8s:0.0796, K9s:0.6523, KTs:0.7865, KJs:0.7093, KQs:0.8201, KK:0.2162, A2s:0.045, A3s:0.1771, A4s:0.5792, A5s:0.304, A6s:0.0541, A7s:0.8597, A8s:0.3495, A9s:0.6932, ATs:0.7047, AJs:0.894, AQs:0.6875, AA:0.0001"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "A2o:0.4899, K3o:0.0032, A3o:0.4276, 43s:0.0002, 44:0.0001, A4o:0.1034, A5o:0.1347, 63s:0.0004, A6o:0.0173, 75s:0.0002, A7o:0.1307, A8o:0.0412, 93s:0.0001, A9o:0.145, T3s:0.0001, T6s:0.0001, T8s:0.0002, ATo:0.3105, J6s:0.0001, JJ:0.0001, AJo:0.251, Q8s:0.0001, Q9s:0.0003, QTs:0.0005, QJs:0.0002, KQo:0.0001, AQo:0.0342, K2s:0.0022, K5s:0.0001, K9s:0.0015, KTs:0.0002, KJs:0.0009, KQs:0.0011, AKo:0.0006, A2s:0.0997, A3s:0.1423, A4s:0.026, A5s:0.0015, A6s:0.0409, A7s:0.0428, A8s:0.0008, A9s:0.0058, ATs:0.036, AJs:0.102, AQs:0.1164, AKs:0.8241, AA:0.9999"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0347, A2o:0.0846, 32s:0.0003, 33:0.029, A3o:0.0066, 43s:0.0004, 44:0.0635, A4o:0.0312, 53s:0.005, 55:0.0001, A5o:0.0636, 63s:0.0001, 64s:0.0011, 65s:0.0001, 66:0.0015, A6o:0.0085, 74s:0.0007, 75s:0.0079, 76s:0.0049, 77:0.0015, A7o:0.0032, 85s:0.0003, 87s:0.0185, 88:0.0035, A8o:0.0068, 93s:0.0006, 95s:0.0007, 96s:0.0004, 98s:0.0001, 99:0.0685, T9o:0.0001, Q9o:0.0003, A9o:0.0092, T3s:0.0005, T6s:0.0016, T8s:0.0001, T9s:0.0253, TT:0.285, ATo:0.102, J3s:0.0008, J6s:0.0002, J8s:0.0008, JTs:0.0064, JJ:0.0119, QJo:0.0001, AJo:0.0239, Q3s:0.0005, Q4s:0.0001, Q5s:0.0006, Q7s:0.0001, Q8s:0.005, Q9s:0.0012, QTs:0.0018, QJs:0.0067, QQ:0.0057, AQo:0.0235, K2s:0.001, K3s:0.0003, K5s:0.0044, K6s:0.1445, K7s:0.0014, K8s:0.0036, K9s:0.0419, KTs:0.1674, KJs:0.1302, KQs:0.0592, KK:0.7838, AKo:0.9994, A2s:0.6182, A3s:0.6216, A4s:0.2031, A5s:0.6409, A6s:0.3436, A7s:0.0416, A8s:0.6335, A9s:0.2861, ATs:0.2579, AJs:0.004, AQs:0.1957, AKs:0.1759"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@21",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.5755, TT, JJ, QQ, AQo, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.9999, QQ, KK, AKo:0.1051, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0505, JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0106, 54s:0.0001, 55:0.2696, 64s:0.0001, 65s:0.0005, 66:0.449, 75s:0.0001, 77:0.2799, 87s:0.0003, 88:0.1899, 99:0.0042, J9s:0.0001, JJ:0.0663, AJo:0.3431, Q9s:0.0003, AQo:0.0824, K9s:0.0001, KQs:0.0014, A7s:0.0001, A9s:0.0002, ATs:0.0005, AJs:0.5666, AQs:0.0032, AA:0.4037"
      },
      {
        "action": "4bet 21bb",
        "min": 0.0001,
        "range": "22:0.0014, A2o:0.0001, 33:0.0029, 44:0.0287, A4o:0.0044, 54s:0.0004, 55:0.0665, A5o:0.0084, 65s:0.7651, 66:0.33, 74s:0.0006, 75s:0.0094, 76s:0.8041, 77:0.411, 86s:0.0006, 87s:0.5656, 88:0.3297, 98s:0.3567, 99:0.4035, T7s:0.0001, T8s:0.0004, T9s:0.7538, TT:0.984, ATo:0.2896, J9s:0.0008, JTs:0.2958, JJ:0.9337, AJo:0.1617, Q9s:0.0386, QTs:0.3354, QJs:0.0114, QQ, AQo:0.9176, K5s:0.0002, K6s:0.0003, K8s:0.0012, K9s:0.0005, KTs:0.0175, KJs:0.0009, KQs:0.2641, KK, AKo, A2s:0.6721, A3s:0.6635, A4s:0.9966, A5s:0.9997, A6s:0.9992, A7s:0.9813, A8s:0.9978, A9s:0.9919, ATs:0.9989, AJs:0.4334, AQs:0.9968, AKs, AA:0.5963"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0001, 86s:0.0001, QQ:0.0208, KK:0.9972, AKo:0.8574, A3s:0.0208, A4s:0.3753, A5s:0.2592, A6s:0.0372, A7s:0.1421, A8s:0.1709, A9s:0.0112, ATs:0.1164, AJs:0.1169, AQs:0.4679, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.0002, A4o:0.0135, A5o:0.0063, 66:0.0001, A7o:0.0015, A8o:0.0004, A9o:0.0025, TT:0.0002, ATo:0.3173, JJ:0.0729, AJo:0.0005, QQ:0.9745, AQo:0.2993, K6s:0.0003, KK:0.0004, AKo:0.3361, A2s:0.0001, A4s:0.0138, A5s:0.0252, A7s:0.0126, A9s:0.1634, ATs:0.0997, AJs:0.0001, AQs:0.6412, AKs:0.5995, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "62s:0.0001, 66:0.0001, 76s:0.0001, JJ:0.0024, QTs:0.0003, QQ:0.0211, K3s:0.0002, K5s:0.0002, KK:0.9996, AKo:0.6638, A2s:0.0088, A4s:0.1998, A5s:0.1851, A7s:0.1145, A8s:0.0021, A9s:0.2346, ATs:0.0114, AJs:0.3123, AQs:0.2953, AKs:0.4005"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0021, A3o:0.0034, 54s:0.0001, 55:0.0335, A5o:0.0741, 63s:0.0007, 66:0.0863, A6o:0.1051, 76s:0.0001, 77:0.0998, K7o:0.0146, 82s:0.0001, 86s:0.0001, 88:0.0183, A8o:0.0046, 92s:0.0001, 95s:0.0006, 99:0.1308, A9o:0.0627, T7s:0.0004, T8s:0.0001, T9s:0.0001, TT:0.2196, KTo:0.0368, ATo:0.0359, J2s:0.0001, J4s:0.0467, JJ:0.1692, AJo:0.2237, Q2s:0.0033, Q3s:0.0006, Q4s:0.011, Q8s:0.0017, Q9s:0.0032, QTs:0.0059, QJs:0.0001, QQ:0.4304, AQo:0.1823, K2s:0.0084, K3s:0.0108, K5s:0.0069, K8s:0.0003, K9s:0.0002, KTs:0.0565, KJs:0.0273, KQs:0.0011, KK:0.0249, AKo:0.1864, A2s:0.0012, A3s:0.3799, A4s:0.0218, A5s:0.0241, A6s:0.0016, A7s:0.4608, A8s:0.2774, A9s:0.2031, ATs:0.0081, AJs:0.1602, AQs:0.8135, AKs:0.3902, AA:0.9987"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, A3o:0.0083, 43s:0.0001, 44:0.0013, 53s:0.152, 54s:0.0002, 55:0.4568, 65s:0.0762, 66:0.1377, A6o:0.0988, 76s:0.064, 77:0.0141, K7o:0.2926, 82s:0.0001, 87s:0.0337, 88:0.0318, 99:0.0001, A9o:0.1081, T4s:0.0001, T5s:0.0075, T7s:0.0051, T9s:0.0001, TT:0.4879, KTo:0.0484, ATo:0.4871, J3s:0.0167, J4s:0.0171, J9s:0.5036, JTs:0.0294, JJ:0.8207, AJo:0.0045, Q3s:0.0041, Q4s:0.0214, Q5s:0.0001, Q9s:0.006, QTs:0.0002, QJs:0.0003, QQ:0.5696, KQo:0.0025, AQo:0.7513, K2s:0.0558, K3s:0.3721, K4s:0.188, K5s:0.0003, K6s:0.5997, K7s:0.3256, K8s:0.042, K9s:0.2777, KTs:0.5613, KQs:0.6414, KK:0.975, AKo:0.8125, A2s:0.8869, A3s:0.3628, A4s:0.029, A5s:0.2164, A6s:0.1668, A7s:0.1532, A8s:0.0181, A9s:0.2746, ATs:0.6201, AJs:0.4142, AQs:0.1716, AKs:0.6028, AA:0.0013"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1234, A2o:0.0002, 33:0.5698, 42s:0.0001, 43s:0.2655, 44:0.3279, 53s:0.0448, 54s:0.0823, 55:0.3627, T5o:0.0001, J5o:0.0001, 63s:0.0048, 64s:0.007, 65s:0.0002, 66:0.0002, 72s:0.0483, 73s:0.0198, 74s:0.0004, 75s:0.0001, 76s:0.0008, 77:0.5113, 82s:0.0003, 84s:0.0001, 85s:0.0746, 86s:0.0001, 88:0.1766, 93s:0.0308, 95s:0.322, 96s:0.008, 99:0.0057, A9o:0.0011, T3s:0.0003, T4s:0.0007, T7s:0.0008, T9s:0.0009, TT:0.151, QTo:0.0001, ATo:0.0002, J3s:0.0001, J5s:0.0001, J7s:0.0004, J8s:0.0008, J9s:0.0291, JTs:0.0795, KJo:0.0214, AJo:0.0683, Q2s:0.0026, Q4s:0.0001, Q5s:0.0001, Q6s:0.0086, Q7s:0.3359, Q8s:0.0008, Q9s:0.0038, QTs:0.0001, QJs:0.0014, QQ:0.0646, KQo:0.0498, AQo:0.5585, K2s:0.0073, K3s:0.0022, K4s:0.0049, K5s:0.1817, K6s:0.0002, K7s:0.0126, K8s:0.04, K9s:0.1883, KTs:0.2631, KJs:0.1008, KQs:0.1061, KK:0.0558, AKo:0.022, A2s:0.0007, A3s:0.0881, A5s:0.0019, A6s:0.0119, A7s:0.0008, A8s:0.0513, A9s:0.0617, ATs:0.0087, AJs:0.0211, AQs:0.0003, AKs:0.076, AA:0.2134"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0006, A2o:0.0006, Q3o:0.0043, K3o:0.0006, A3o:0.1396, 43s:0.1731, 44:0.0552, 54o:0.019, A4o:0.3266, 53s:0.0001, 54s:0.0001, 55:0.0328, 65o:0.0016, 62s:0.0001, 64s:0.016, 65s:0.0108, 66:0.0002, K6o:0.0822, A6o:0.0037, 74s:0.0001, 77:0.0447, 87o:0.0001, K7o:0.0073, A7o:0.0008, 82s:0.0753, 86s:0.0011, 87s:0.0002, 88:0.0102, K8o:0.0259, A8o:0.0119, 96s:0.0001, 97s:0.0003, 99:0.3262, K9o:0.1337, A9o:0.0024, T3s:0.0002, T4s:0.0001, T6s:0.1264, T7s:0.0117, T8s:0.0011, T9s:0.0076, TT:0.0997, JTo:0.016, ATo:0.0125, J2s:0.18, J3s:0.0001, J4s:0.0225, J7s:0.0034, J8s:0.0021, J9s:0.0032, JJ:0.5817, AJo:0.4032, Q3s:0.0062, Q4s:0.0408, Q5s:0.1035, Q7s:0.1032, Q8s:0.0036, Q9s:0.0077, QTs:0.0033, QJs:0.0067, QQ:0.0003, KQo:0.015, AQo:0.2977, K2s:0.0612, K3s:0.0088, K4s:0.0081, K5s:0.0091, K6s:0.0068, K7s:0.0479, K8s:0.0187, K9s:0.0001, KTs:0.0814, KJs:0.26, KQs:0.0795, KK:0.7995, AKo:0.1511, A2s:0.0483, A3s:0.1996, A4s:0.0116, A5s:0.0003, A6s:0.0004, A7s:0.4386, A8s:0.002, A9s:0.1159, ATs:0.098, AJs:0.3696, AQs:0.7722, AKs:0.1163, AA:0.7621"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "K2o:0.0157, A2o:0.007, K3o:0.0071, A3o:0.0032, Q4o:0.0071, K4o:0.0178, 52s:0.0601, 53s:0.025, 55:0.0067, 65s:0.0005, A6o:0.0339, 77:0.0068, A7o:0.0249, 84s:0.0431, 86s:0.0187, 88:0.1511, A8o:0.024, 93s:0.0048, 94s:0.0861, 96s:0.0107, 98s:0.0005, 99:0.2644, K9o:0.0017, T3s:0.0005, T4s:0.0013, T7s:0.0072, T8s:0.0094, T9s:0.0996, TT:0.332, ATo:0.0608, J4s:0.0001, J7s:0.0001, J8s:0.0504, J9s:0.0072, JTs:0.0292, JJ:0.0014, AJo:0.0003, Q2s:0.0003, Q5s:0.0001, Q7s:0.0805, Q9s:0.0025, QTs:0.176, QJs:0.0001, QQ:0.5411, KQo:0.1048, AQo:0.0066, K2s:0.0002, K3s:0.0023, K4s:0.0322, K5s:0.0041, K6s:0.2851, K7s:0.0342, K8s:0.0001, KTs:0.0002, KJs:0.0086, KQs:0.0257, KK:0.0514, AKo:0.5502, A2s:0.1067, A3s:0.0425, A4s:0.0041, A5s:0.0001, A6s:0.5621, A7s:0.0407, A8s:0.0598, A9s:0.0027, ATs:0.6843, AJs:0.0015, AQs:0.0702, AKs:0.3449, AA:0.0158"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4961, K2o:0.1108, A2o:0.0009, 32s:0.0037, 33:0.0001, A3o:0.0983, 43s:0.0003, 44:0.0626, 53s:0.1028, 54s:0.0105, 55:0.2264, A5o:0.0013, 65s:0.0698, 66:0.0029, 74s:0.0014, 75s:0.0062, 76s:0.0148, 77:0.0007, A7o:0.002, 82s:0.0097, 84s:0.0484, 86s:0.0616, 88:0.1978, 92s:0.0046, 96s:0.0002, 99:0.0743, K9o:0.1608, A9o:0.0014, T3s:0.0027, T4s:0.0014, T7s:0.1168, T9s:0.0052, TT:0.2424, JTo:0.0022, ATo:0.1268, J3s:0.0583, J7s:0.0288, J8s:0.0001, J9s:0.0127, JTs:0.3087, JJ:0.4167, AJo:0.2164, Q2s:0.0034, Q3s:0.1271, Q4s:0.1788, Q6s:0.0005, Q7s:0.1494, Q8s:0.0205, Q9s:0.0031, QTs:0.2331, QJs:0.1352, QQ:0.3935, KQo:0.3731, AQo:0.1349, K2s:0.001, K3s:0.0935, K4s:0.1909, K5s:0.2208, K6s:0.045, K7s:0.0393, K8s:0.0139, K9s:0.0006, KTs:0.4304, KJs:0.4686, KQs:0.5917, KK:0.0933, AKo:0.2742, A2s:0.1868, A3s:0.2765, A4s:0.5716, A5s:0.5023, A6s:0.097, A7s:0.0075, A8s:0.0796, A9s:0.2607, ATs:0.0726, AJs:0.5853, AQs:0.1573, AKs:0.461, AA:0.0088"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.9992, TT, JJ, QQ, AQo, KK, AKo, AJs:0.6585, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.9265, QQ, KK, AKo:0.9701, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.124, JJ, QQ, KK, AKo, AQs:0.0024, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18.5bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0038, 66:0.105, 77:0.0369, 88:0.0173, T9s:0.0001, AJo:0.0003, K3s:0.0001, A9s:0.0002, ATs:0.0002, AJs:0.5492, AA:0.0521"
      },
      {
        "action": "4bet 18.5bb",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0054, 44:0.0238, 55:0.8401, 65s:0.1551, 66:0.6426, 76s:0.0904, 77:0.5471, 87s:0.0108, 88:0.6036, 97s:0.0008, 98s:0.0017, 99:0.6757, T6s:0.0002, T8s:0.001, T9s:0.7102, TT, ATo:0.0001, J9s:0.0002, JTs:0.0726, JJ, AJo:0.0024, QTs:0.1985, QJs:0.2467, QQ, KQo:0.0001, AQo, K4s:0.0003, K7s:0.0001, KTs:0.0195, KJs:0.0729, KQs:0.2017, KK, AKo, A2s:0.1709, A3s:0.2836, A4s:0.8768, A5s:0.9998, A6s:0.7117, A7s:0.8895, A8s:0.7657, A9s:0.3243, ATs:0.944, AJs:0.4445, AQs, AKs, AA:0.9479"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.1708, QQ:0.7066, AQo:0.0164, K6s:0.0001, KQs:0.0012, KK, AKo:0.8769, A2s:0.0262, A3s:0.0976, A4s:0.1209, A5s:0.3677, A6s:0.0841, A7s:0.0015, A8s:0.0221, A9s:0.0008, ATs:0.6164, AJs:0.093, AQs:0.8369, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0004, ATo:0.06, JTs:0.0002, JJ:0.7871, Q6s:0.0001, QQ:0.9994, AQo:0.0933, K6s:0.0001, KJs:0.0002, KQs:0.0003, KK, AKo, A2s:0.1118, A3s:0.1383, A4s:0.5419, A5s:0.5354, A6s:0.0835, A7s:0.0008, A8s:0.0245, ATs:0.9023, AJs:0.7848, AQs:0.9932, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A3o:0.0006, 44:0.0003, A4o:0.001, 64s:0.0008, 66:0.0001, A6o:0.0005, 76s:0.0002, A7o:0.0033, 88:0.0001, A8o:0.0022, 99:0.0004, K9o:0.0001, A9o:0.0118, TT:0.0065, KTo:0.0001, ATo:0.4604, JJ:0.6692, AJo:0.0001, QQ:0.8857, AQo:0.592, K2s:0.0001, K7s:0.0007, KK:0.8021, AKo:0.9529, A2s:0.0061, A3s:0.0069, A4s:0.0004, A5s:0.0711, A6s:0.0028, A7s:0.0029, A9s:0.0232, ATs:0.0754, AJs:0.0925, AQs:0.9087, AKs:0.0525, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "64s:0.0012, 65s:0.001, 98s:0.0005, 99:0.0001, TT:0.004, ATo:0.0007, JJ:0.2814, QQ:0.1131, AQo:0.0003, K6s:0.004, K7s:0.0074, K8s:0.0001, K9s:0.0002, KQs:0.0002, KK:0.1979, AKo:0.047, A2s:0.0364, A3s:0.0607, A4s:0.0011, A5s:0.1272, A6s:0.0082, A7s:0.048, A8s:0.0014, A9s:0.0451, ATs:0.0641, AJs:0.0471, AQs:0.0904, AKs:0.9475"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A4o:0.0006, 62s:0.0001, 63s:0.0001, 65s:0.0003, 74s:0.0001, 75s:0.0001, 76s:0.0585, 77:0.0001, A7o:0.0001, 85s:0.0001, 88:0.0318, T8o:0.006, A8o:0.0241, 99:0.3707, T2s:0.0001, T8s:0.0001, T9s:0.0001, TT:0.0316, ATo:0.2994, J2s:0.0001, J3s:0.0001, JJ:0.6654, AJo:0.3436, Q5s:0.0001, Q7s:0.2419, Q9s:0.0283, QTs:0.0037, QJs:0.038, QQ:0.315, AQo:0.065, K3s:0.0215, K6s:0.0002, K7s:0.0304, K9s:0.1404, KJs:0.0098, KQs:0.1419, KK:0.9297, AKo:0.717, A2s:0.0067, A3s:0.0526, A4s:0.0377, A5s:0.063, A6s:0.0038, A8s:0.0014, A9s:0.0891, ATs:0.3875, AJs:0.6151, AQs:0.9217, AKs:0.144, AA:0.8653"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0261, 53s:0.0001, 55:0.023, 65s:0.0001, 66:0.094, 74s:0.0002, 88:0.0002, 95s:0.0004, 98s:0.0001, 99:0.234, Q9o:0.0002, T9s:0.0982, TT:0.682, ATo:0.0516, J4s:0.0001, JJ:0.2183, AJo:0.0518, Q6s:0.0001, QTs:0.0055, QQ:0.6847, AQo:0.3764, K2s:0.0001, K4s:0.0034, K8s:0.0168, K9s:0.0005, KJs:0.1607, KQs:0.2023, KK:0.0698, AKo:0.2802, A2s:0.7305, A3s:0.0974, A4s:0.7872, A5s:0.4855, A6s:0.0975, A7s:0.0196, A8s:0.0104, A9s:0.1665, ATs:0.3423, AJs:0.0553, AQs:0.0694, AKs:0.8128, AA:0.1347"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0638, A2o:0.0792, A3o:0.0503, 44:0.0054, 53s:0.0284, 54s:0.0316, 55:0.001, 65s:0.0559, 66:0.016, A6o:0.0571, 74s:0.0001, 75s:0.0001, 77:0.0082, A7o:0.0298, 82s:0.0017, 87s:0.1338, 88:0.0002, A8o:0.2119, 95s:0.0061, 98s:0.0116, 99:0.2814, A9o:0.0813, T4s:0.0002, T5s:0.1705, TT:0.7578, QTo:0.0004, ATo:0.2826, J2s:0.0003, J5s:0.0217, J8s:0.0001, J9s:0.0345, JJ:0.1215, AJo:0.5018, Q5s:0.1197, QTs:0.0036, QJs:0.0005, QQ:0.237, AQo:0.4171, K2s:0.0001, K5s:0.0048, K6s:0.0008, K9s:0.0012, KTs:0.0041, KJs:0.003, KQs:0.0001, KK:0.9832, AKo:0.4107, A2s:0.011, A3s:0.0266, A4s:0.3313, A5s:0.5018, A6s:0.1128, A7s:0.1445, A8s:0.3201, A9s:0.029, ATs:0.1767, AJs:0.3808, AQs:0.354, AKs:0.7418, AA:0.9951"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0762, 32s:0.0004, A4o:0.0057, 54s:0.0026, 55:0.0042, 66:0.062, 75s:0.0001, 77:0.0411, A7o:0.0009, 84s:0.0014, 87s:0.0687, A8o:0.0789, 98s:0.006, 99:0.5134, A9o:0.0077, T2s:0.0272, T9s:0.0002, TT:0.1707, J2s:0.0003, J5s:0.001, J6s:0.0001, J9s:0.1428, JJ:0.8545, AJo:0.2944, Q2s:0.0033, Q3s:0.0001, Q5s:0.0188, Q7s:0.0001, Q8s:0.0001, QTs:0.0009, QJs:0.2277, QQ:0.763, AQo:0.5797, K4s:0.1634, K6s:0.0475, K8s:0.0654, KTs:0.0055, KJs:0.0642, KQs:0.0311, KK:0.0167, AKo:0.5886, A2s:0.7964, A3s:0.1709, A4s:0.2283, A5s:0.1984, A6s:0.1044, A7s:0.2756, A8s:0.056, A9s:0.1475, ATs:0.7086, AJs:0.375, AQs:0.4912, AKs:0.2522, AA:0.0049"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7363, 42o:0.0001, 33:0.2174, 42s:0.0028, 43s:0.0344, 44:0.179, 84o:0.0001, A4o:0.0001, 54s:0.0006, 55:0.605, K5o:0.0002, 63s:0.0001, 64s:0.0003, 66:0.1915, K6o:0.0001, 73s:0.0003, 74s:0.0384, 77:0.3172, A7o:0.0001, 82s:0.0008, 85s:0.0029, 86s:0.0001, 88:0.2746, 98o:0.0001, K8o:0.0001, A8o:0.0001, 92s:0.0232, 93s:0.0001, 94s:0.1612, 95s:0.0001, 97s:0.0005, 98s:0.5081, 99:0.3309, A9o:0.0001, T2s:0.0002, T6s:0.0001, T7s:0.022, T9s:0.0056, TT:0.0004, JTo:0.0001, QTo:0.0004, ATo:0.0004, J3s:0.112, J4s:0.004, J6s:0.0001, J7s:0.0056, J8s:0.0034, J9s:0.0001, JTs:0.0397, JJ:0.0205, AJo:0.0004, Q2s:0.0007, Q3s:0.0004, Q4s:0.0008, Q6s:0.0001, Q7s:0.0099, Q8s:0.2362, QTs:0.0314, QJs:0.1603, QQ:0.0297, KQo:0.0623, AQo:0.003, K2s:0.0004, K3s:0.0002, K4s:0.0001, K5s:0.0113, K6s:0.0006, K7s:0.0001, K8s:0.201, KTs:0.4819, KJs:0.0035, KQs:0.0183, KK:0.4044, AKo:0.2056, A3s:0.0093, A4s:0.1982, A5s:0.025, A6s:0.0149, A7s:0.0055, A8s:0.0215, A9s:0.0008, ATs:0.0697, AJs:0.0899, AQs:0.2663, AKs:0.1175, AA:0.081"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0242, 32s:0.0168, 44:0.0001, A4o:0.0291, 53s:0.0074, 54s:0.0052, 55:0.0026, A5o:0.0056, 63s:0.0003, 66:0.0001, A6o:0.1251, 72s:0.0897, 74s:0.0001, 75s:0.0001, 77:0.0423, A7o:0.1329, 83s:0.0028, 85s:0.0087, 86s:0.0028, 87s:0.0113, 88:0.0277, J8o:0.012, A8o:0.46, 94s:0.0033, 96s:0.0035, 98s:0.1489, 99:0.1835, A9o:0.0253, T4s:0.0001, T5s:0.0049, T6s:0.0012, T7s:0.0025, TT:0.3202, QTo:0.0001, ATo:0.0438, J7s:0.0048, J8s:0.0003, J9s:0.0038, JTs:0.0162, JJ:0.3165, AJo:0.6749, Q2s:0.2825, Q3s:0.0396, Q4s:0.004, Q5s:0.0001, Q6s:0.0001, Q8s:0.018, Q9s:0.0002, QJs:0.2055, QQ:0.0199, AQo:0.3422, K4s:0.0013, K5s:0.0001, K6s:0.0217, K7s:0.0088, K8s:0.0041, K9s:0.0002, KTs:0.084, KJs:0.0006, KQs:0.0072, KK:0.5024, AKo:0.2951, A2s:0.0157, A3s:0.0008, A4s:0.0027, A5s:0.1285, A6s:0.0171, A7s:0.1878, A8s:0.1696, A9s:0.3225, ATs:0.1315, AJs:0.1596, AQs:0.2503, AKs:0.5005, AA:0.7605"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.0053, 32s:0.0001, 33:0.0089, 42s:0.0001, 44:0.0023, 54s:0.0017, 55:0.0017, A5o:0.0112, 64s:0.0095, 76s:0.0102, 77:0.0001, 82s:0.001, 83s:0.0007, 84s:0.002, 85s:0.0003, 86s:0.0001, 87s:0.0004, 88:0.0287, 96s:0.0001, 98s:0.0001, 99:0.0187, T3s:0.0003, T6s:0.003, T8s:0.0005, TT:0.0106, ATo:0.0011, J5s:0.001, J7s:0.0003, J8s:0.0001, J9s:0.0001, JTs:0.0007, JJ:0.0133, AJo:0.1433, Q2s:0.0004, Q4s:0.003, Q5s:0.0009, Q6s:0.0003, Q7s:0.0006, Q8s:0.0001, Q9s:0.0067, QTs:0.0029, QJs:0.0123, QQ:0.0391, KQo:0.0101, AQo:0.0138, K2s:0.0039, K3s:0.0001, K4s:0.0002, K7s:0.0001, K8s:0.0033, KTs:0.0003, KJs:0.0001, KQs:0.0037, KK:0.0574, AKo:0.2136, A2s:0.0499, A3s:0.0001, A4s:0.0183, A5s:0.0033, A6s:0.1478, A7s:0.0277, A8s:0.0282, A9s:0.0039, ATs:0.0013, AJs:0.0037, AQs:0.0056, AKs:0.1192, AA:0.1571"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, A2o:0.0541, 33:0.3268, 44:0.0298, A4o:0.1635, 53s:0.0201, 54s:0.0425, 55:0.0134, A5o:0.0353, 63s:0.0002, 64s:0.473, 66:0.0009, A6o:0.4812, 74s:0.3032, 76s:0.0006, 77:0.046, 82s:0.0002, 84s:0.0003, 85s:0.0025, 87s:0.0007, 88:0.0021, T8o:0.006, 93s:0.0003, 96s:0.0007, 97s:0.0032, 98s:0.0641, 99:0.3601, A9o:0.2149, T2s:0.1847, T3s:0.0024, T4s:0.0037, T6s:0.0493, T8s:0.0006, T9s:0.1848, TT:0.488, ATo:0.0088, J2s:0.0058, J3s:0.0007, J4s:0.0002, J5s:0.0178, J7s:0.0074, J8s:0.0001, J9s:0.1709, JTs:0.0158, JJ:0.6467, AJo:0.1309, Q2s:0.0946, Q3s:0.0482, Q4s:0.0315, Q5s:0.0002, Q6s:0.0004, Q7s:0.0002, Q8s:0.0001, Q9s:0.0106, QTs:0.2626, QJs:0.189, QQ:0.9113, KQo:0.018, AQo:0.6306, K2s:0.0011, K3s:0.0049, K4s:0.0001, K5s:0.0018, K6s:0.0087, K7s:0.6427, K8s:0.3906, K9s:0.056, KTs:0.0218, KJs:0.0304, KQs:0.5722, KK:0.0358, AKo:0.2791, A2s:0.8819, A3s:0.2581, A4s:0.3562, A5s:0.4734, A6s:0.0554, A7s:0.1552, A8s:0.2803, A9s:0.0039, ATs:0.5498, AJs:0.3936, AQs:0.4696, AKs:0.2612, AA:0.0014"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.2144, TT, JJ, QQ, AQo:0.6109, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.1338, JJ, QQ, KK, AKo:0.0005, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0002, 33:0.0002, 44:0.2733, 55:0.594, 64s:0.0001, 65s:0.0001, 66:0.4133, 77:0.3868, 87s:0.0003, 88:0.5123, 99:0.0105, T9s:0.0001, TT:0.0764, ATo:0.0074, JJ:0.3779, AJo:0.4076, QQ:0.0037, AQo:0.5289, K6s:0.0001, K7s:0.0001, A2s:0.0001, A4s:0.0001, A6s:0.0003, A7s:0.001, A8s:0.0026, A9s:0.0094, ATs:0.0128, AJs:0.9647, AQs:0.5593, AA:0.8062"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.0042, 33:0.0043, A3o:0.0001, 44:0.1392, 54s:0.0374, 55:0.0022, A5o:0.0003, 63s:0.0001, 65s:0.0218, 66:0.1201, 74s:0.001, 76s:0.0425, 77:0.039, 86s:0.0059, 87s:0.0035, 88:0.1245, 97s:0.0009, 98s:0.0038, 99:0.3301, T7s:0.0003, T8s:0.0013, T9s:0.8241, TT:0.9222, ATo:0.5967, J6s:0.0001, J9s:0.0001, JTs:0.005, JJ:0.6221, AJo:0.0534, Q8s:0.0001, Q9s:0.0012, QTs:0.4464, QJs:0.0124, QQ:0.9963, AQo:0.4711, K4s:0.0002, K5s:0.0002, K6s:0.0005, K7s:0.0004, K8s:0.0001, K9s:0.0009, KTs:0.0023, KJs:0.0004, KQs:0.4837, KK, AKo, A2s:0.9962, A3s:0.7463, A4s:0.9948, A5s:0.9816, A6s:0.9851, A7s:0.9982, A8s:0.9957, A9s:0.9878, ATs:0.9869, AJs:0.0353, AQs:0.4407, AKs, AA:0.1938"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A2o:0.0034, A3o:0.0005, A4o:0.0411, A5o:0.0099, A6o:0.0799, 73s:0.0001, 77:0.0003, A7o:0.0692, A8o:0.0039, A9o:0.0928, ATo:0.1263, JJ:0.0002, AJo:0.0001, QQ:0.3495, AQo:0.1043, K6s:0.0001, KK:0.0003, AKo:0.2902, A2s:0.0068, A4s:0.0364, A5s:0.0052, A6s:0.0996, A7s:0.0364, A8s:0.1358, A9s:0.0726, ATs:0.0139, AJs:0.0006, AQs:0.3418, AKs:0.292, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "77:0.0004, 99:0.0009, T6s:0.0001, T9s:0.0007, JJ:0.0001, QQ:0.4152, KK:0.9997, AKo:0.7098, A2s:0.3918, A3s:0.0114, A4s:0.5101, A5s:0.5527, A6s:0.1905, A7s:0.193, A8s:0.426, A9s:0.0765, ATs:0.2102, AJs:0.3447, AQs:0.6211, AKs:0.708"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.6819, A2o:0.0002, 33:0.7087, K3o:0.0004, 42s:0.2744, 43s:0.0001, 44:0.8502, 52s:0.6532, 53s:0.0449, 54s:0.0622, 55:0.4549, 62s:0.472, 63s:0.0097, 64s:0.1137, 65s:0.0665, 66:0.7649, 76o:0.1097, 86o:0.0013, 73s:0.0009, 75s:0.0085, 76s:0.3754, 77:0.8573, 83s:0.0031, 84s:0.0035, 87s:0.4609, 88:0.8597, 92s:0.0169, 93s:0.016, 95s:0.0016, 96s:0.0502, 97s:0.3239, 98s:0.0117, 99:0.2682, K9o:0.0493, A9o:0.0003, T2s:0.0069, T3s:0.002, T5s:0.0918, T6s:0.5754, T7s:0.001, T8s:0.0793, T9s:0.3906, TT:0.2415, QTo:0.0001, KTo:0.1263, J4s:0.0512, J7s:0.1311, J9s:0.1145, JTs:0.2032, QJo:0.0109, KJo:0.1971, AJo:0.0829, Q2s:0.4261, Q4s:0.3664, Q6s:0.0122, Q7s:0.1568, Q8s:0.0976, QTs:0.0039, QJs:0.0001, KQo:0.049, AQo:0.1608, K2s:0.1457, K3s:0.1373, K4s:0.1348, K5s:0.0004, K6s:0.0957, K7s:0.0212, K8s:0.2761, K9s:0.2313, KTs:0.0004, KJs:0.0803, KQs:0.1576, KK:0.004, A2s:0.0525, A3s:0.0077, A4s:0.4815, A5s:0.008, A6s:0.1359, A7s:0.1191, A8s:0.1991, A9s:0.4139, ATs:0.1476, AJs:0.0903, AQs:0.234, AKs:0.0004, AA:0.0062"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0192, A2o:0.1817, 32s:0.061, K3o:0.133, A3o:0.0073, 43s:0.0022, 44:0.0019, T4o:0.0022, K4o:0.0813, A4o:0.0009, 52s:0.001, 54s:0.0046, 55:0.0003, K5o:0.0422, 62s:0.0567, 63s:0.0106, 64s:0.0001, 65s:0.0418, 66:0.0018, A6o:0.0886, 74s:0.0024, J7o:0.0015, K7o:0.0205, 83s:0.0629, 87s:0.0113, 88:0.049, 98o:0.0065, T8o:0.0001, K8o:0.003, A8o:0.005, 92s:0.0455, 93s:0.0034, 94s:0.0219, 95s:0.0122, 96s:0.0541, 97s:0.0087, 99:0.026, A9o:0.1393, T2s:0.0007, T3s:0.0009, T5s:0.0031, T7s:0.0002, TT:0.0811, KTo:0.2368, ATo:0.1145, J2s:0.0037, J3s:0.0012, J4s:0.0356, J5s:0.1045, J6s:0.0054, J7s:0.0646, J8s:0.0251, J9s:0.0002, JTs:0.0056, JJ:0.0702, QJo:0.0075, KJo:0.0235, AJo:0.4984, Q3s:0.0015, Q4s:0.0158, Q5s:0.0037, Q6s:0.0001, Q7s:0.0006, Q8s:0.0032, QJs:0.0085, QQ:0.1723, AQo:0.3241, K2s:0.0004, K3s:0.035, K4s:0.0016, K5s:0.0018, K6s:0.2311, K7s:0.015, K9s:0.0241, KTs:0.0028, KJs:0.018, KQs:0.1057, KK:0.9496, AKo:0.0742, A2s:0.0926, A3s:0.0001, A4s:0.0013, A5s:0.0014, A6s:0.1519, A7s:0.0013, A8s:0.1119, A9s:0.0999, ATs:0.0122, AJs:0.1446, AQs:0.2532, AKs:0.4507, AA:0.7859"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "22:0.0008, Q2o:0.1255, A2o:0.0496, K3o:0.008, K4o:0.0321, A4o:0.0101, 52s:0.0175, 53s:0.0424, 55:0.0006, 75o:0.0025, A5o:0.0003, 64s:0.0443, 66:0.0035, 76o:0.0001, Q6o:0.0342, K6o:0.0013, A6o:0.0308, 75s:0.0478, 76s:0.0021, 77:0.0013, Q7o:0.0568, K7o:0.0493, 87s:0.0044, 88:0.0001, K8o:0.0056, A8o:0.0092, 92s:0.0221, 93s:0.0001, 94s:0.0009, 95s:0.001, 97s:0.2206, 98s:0.0005, 99:0.0017, Q9o:0.0033, A9o:0.0239, T2s:0.0004, T3s:0.0138, T9s:0.0011, TT:0.1549, JTo:0.0001, KTo:0.0366, ATo:0.1978, J2s:0.015, J3s:0.0061, J4s:0.0047, J7s:0.0195, JTs:0.0155, JJ:0.0063, QJo:0.0006, AJo:0.0005, Q2s:0.0004, Q3s:0.0022, Q4s:0.0222, Q5s:0.0026, Q6s:0.0194, Q7s:0.0026, Q9s:0.0718, QTs:0.0172, QJs:0.0095, QQ:0.3977, KQo:0.086, AQo:0.0093, K2s:0.1741, K3s:0.0041, K4s:0.0194, K5s:0.0008, K6s:0.0207, K7s:0.0501, K8s:0.0074, KTs:0.035, KJs:0.002, KK:0.0412, AKo:0.0871, A2s:0.0061, A3s:0.0195, A4s:0.0009, A5s:0.0141, A6s:0.0001, A7s:0.1099, A8s:0.0718, A9s:0.0606, ATs:0.0107, AJs:0.0951, AQs:0.2848, AKs:0.2096, AA:0.2077"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.256, K2o:0.011, A2o:0.0007, 32s:0.0571, 33:0.0181, K3o:0.3123, A3o:0.0772, 42s:0.0356, 43s:0.0379, 44:0.0639, Q4o:0.0044, K4o:0.1847, A4o:0.1372, 53s:0.0606, 54s:0.3025, 55:0.4494, K5o:0.2334, A5o:0.0877, 63s:0.0014, 64s:0.1789, 65s:0.0069, 66:0.1722, A6o:0.1439, 73s:0.0084, 75s:0.1151, 76s:0.2668, 77:0.0094, K7o:0.0142, 85s:0.0288, 86s:0.0001, 87s:0.0075, 88:0.0006, K8o:0.069, 92s:0.4053, 93s:0.039, 94s:0.0105, 95s:0.0001, 97s:0.0373, 98s:0.2998, 99:0.6413, Q9o:0.0004, K9o:0.5124, A9o:0.009, T2s:0.0027, T3s:0.0018, T6s:0.0014, T7s:0.0014, T8s:0.0066, T9s:0.0438, TT:0.4975, KTo:0.1771, ATo:0.0719, J2s:0.0152, J3s:0.0129, J4s:0.0092, J7s:0.0638, J8s:0.0013, J9s:0.2331, JTs:0.5009, JJ:0.9233, QJo:0.3784, KJo:0.5793, AJo:0.2832, Q2s:0.0659, Q3s:0.0027, Q4s:0.0381, Q5s:0.1669, Q6s:0.0005, Q7s:0.0003, Q8s:0.2411, Q9s:0.368, QTs:0.887, QJs:0.8316, QQ:0.43, KQo:0.8611, AQo:0.5024, K2s:0.304, K3s:0.751, K4s:0.3179, K5s:0.0089, K6s:0.3024, K7s:0.6262, K8s:0.2044, K9s:0.5135, KTs:0.9183, KJs:0.8618, KQs:0.7307, KK:0.0052, AKo:0.8386, A2s:0.1602, A3s:0.5698, A4s:0.4446, A5s:0.8536, A6s:0.3441, A7s:0.2803, A8s:0.1885, A9s:0.1177, ATs:0.8189, AJs:0.5942, AQs:0.2111, AKs:0.3388, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@12",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0004, A4o:0.0003, 55:0.4604, A5o:0.0452, 65s:0.0002, 66:0.5626, 77:0.6878, A7o:0.0012, 88:0.6662, A8o:0.2714, 99:0.0123, A9o:0.3812, TT:0.7439, ATo:0.3342, JJ:0.5658, AJo:0.4469, QQ:0.3873, AQo:0.9587, KQs:0.0001, KK:0.1464, A2s:0.0002, A3s:0.0001, A4s:0.0003, A5s:0.0004, A6s:0.0001, A7s:0.0116, A8s:0.018, A9s:0.0074, ATs:0.0298, AJs:0.0068, AQs:0.238, AKs:0.0001, AA"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0009, A2o:0.1063, 33:0.0007, A3o:0.0094, 44:0.0002, A4o:0.2884, 55:0.0001, A5o:0.0884, 64s:0.0011, 65s:0.0005, 66:0.0014, A6o:0.0409, 76s:0.0008, 77:0.0016, A7o:0.0033, 84s:0.0001, 85s:0.0001, 87s:0.1204, 88:0.0154, A8o:0.0832, 97s:0.0002, 98s:0.1128, 99:0.1463, A9o:0.0802, T7s:0.0003, T8s:0.0284, T9s:0.8721, TT:0.2443, ATo:0.6653, J9s:0.0024, JTs:0.711, JJ:0.3304, AJo:0.549, Q9s:0.0002, QTs:0.0078, QJs:0.0059, QQ:0.3963, AQo:0.0412, K7s:0.0001, KTs:0.0009, KJs:0.0001, KK:0.8526, AKo, A2s:0.9997, A3s:0.9711, A4s:0.9968, A5s:0.9985, A6s:0.9998, A7s:0.9881, A8s:0.9819, A9s:0.9925, ATs:0.9702, AJs:0.9932, AQs:0.762, AKs:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@34.75",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0013, TT, JJ, QQ, AQo:0.4411, KK, AKo, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@8",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8923, A2o:0.0991, 32s:0.1429, 33:0.8235, 43o:0.0243, K3o:0.0015, A3o:0.1297, 42s:0.3618, 43s:0.7134, 44:0.9578, 64o:0.0038, A4o:0.135, 52s:0.0006, 53s:0.2475, 54s:0.8774, 55:0.9998, A5o:0.207, 62s:0.0102, 63s:0.7343, 64s:0.9945, 65s:0.5083, 66:0.9982, 76o:0.0143, K6o:0.0099, A6o:0.1513, 74s:0.3351, 75s:0.0493, 76s:0.977, 77:0.9537, A7o:0.1614, 83s:0.0001, 86s:0.4452, 87s:0.5146, 88:0.9714, A8o:0.2015, 92s:0.0004, 95s:0.0018, 96s:0.0114, 97s:0.3291, 98s:0.2555, 99:0.9597, A9o:0.3595, T4s:0.0009, T5s:0.0004, T6s:0.0007, T7s:0.0003, T8s:0.1286, T9s:0.2392, TT:0.9988, KTo:0.0911, ATo:0.7535, J3s:0.0002, J6s:0.0035, J7s:0.0008, J8s:0.0305, J9s:0.2526, JTs:0.1488, JJ:0.8881, KJo:0.3216, AJo:0.9201, Q2s:0.0169, Q3s:0.0003, Q4s:0.0192, Q5s:0.0054, Q6s:0.0002, Q7s:0.0004, Q8s:0.0038, Q9s:0.1739, QTs:0.3288, QJs:0.3035, QQ:0.9879, KQo:0.3186, AQo:0.994, K2s:0.0256, K3s:0.3721, K4s:0.0673, K5s:0.0124, K6s:0.427, K7s:0.0647, K8s:0.1376, K9s:0.128, KTs:0.8602, KJs:0.8999, KQs:0.9666, KK:0.8662, AKo:0.1731, A2s:0.2339, A3s:0.2887, A4s:0.189, A5s:0.6293, A6s:0.4784, A7s:0.4938, A8s:0.5929, A9s:0.5145, ATs:0.9892, AJs:0.9857, AQs:0.9875, AKs:0.1571, AA:0.2407"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "K2o:0.017, A2o:0.1549, 32s:0.0001, 33:0.0007, T3o:0.0002, K3o:0.0212, A3o:0.1161, K4o:0.041, A4o:0.1539, K5o:0.0001, A5o:0.0283, 63s:0.0001, K6o:0.0654, A6o:0.2392, K7o:0.0517, A7o:0.1679, K8o:0.0189, A8o:0.0179, K9o:0.0405, A9o:0.1329, T9s:0.0003, KTo:0.0032, ATo:0.0003, J4s:0.001, J7s:0.0018, J8s:0.0007, J9s:0.0004, JJ:0.0058, KJo:0.0399, AJo:0.017, Q2s:0.0003, Q7s:0.0004, QTs:0.0001, QJs:0.0044, QQ:0.0065, KQo:0.1576, AQo:0.0027, K2s:0.1034, K3s:0.0286, K4s:0.0484, K5s:0.0021, K6s:0.029, K7s:0.0394, K8s:0.0178, K9s:0.0021, KTs:0.0011, KJs:0.0361, KQs:0.0213, KK:0.1315, AKo:0.1559, A2s:0.0006, A3s:0.0004, A4s:0.0014, A5s:0.0001, A6s:0.0011, A9s:0.0001, AQs:0.0085, AKs:0.3289, AA:0.7593"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0828, A2o:0.2613, 32s:0.0001, 33:0.1495, A3o:0.1933, 43s:0.0086, 44:0.0403, A4o:0.3076, 54s:0.0002, 55:0.0001, A5o:0.0006, 63s:0.0026, 64s:0.0001, 65s:0.0002, 66:0.0013, A6o:0.0014, 75s:0.0024, 76s:0.003, 77:0.0462, A7o:0.086, 86s:0.0012, 87s:0.0806, 88:0.0285, K8o:0.0019, A8o:0.0091, 96s:0.0013, 97s:0.0133, 98s:0.0485, 99:0.0394, T9o:0.0001, K9o:0.0267, A9o:0.1669, T3s:0.0001, T7s:0.0004, T8s:0.0035, T9s:0.0097, TT:0.0008, ATo:0.0036, J3s:0.0001, J6s:0.0001, J8s:0.0011, J9s:0.0028, JTs:0.0115, JJ:0.1061, AJo:0.0001, Q3s:0.0013, Q9s:0.0103, QTs:0.0009, QJs:0.0035, QQ:0.0056, KQo:0.0001, AQo:0.0033, K2s:0.0727, K3s:0.1007, K4s:0.1066, K5s:0.0525, K6s:0.0936, K7s:0.0885, K8s:0.1101, K9s:0.1427, KTs:0.0675, KJs:0.0494, KQs:0.0004, KK:0.0024, AKo:0.6711, A2s:0.6991, A3s:0.6619, A4s:0.743, A5s:0.3089, A6s:0.4136, A7s:0.4567, A8s:0.3474, A9s:0.3786, ATs:0.0108, AJs:0.0143, AQs:0.0037, AKs:0.5139"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@21",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0101, 88, 99, TT, JJ, AJo:0.6802, QQ, AQo, KK, AKo, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.8074, JJ, QQ, KK, AKo, AQs:0.4454, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0179, 43s:0.0014, 44:0.1203, 54s:0.0243, 55:0.3429, A5o:0.0005, 63s:0.0001, 64s:0.0082, 65s:0.0115, 66:0.3122, 75s:0.0001, 76s:0.0141, 77:0.313, 88:0.2025, A8o:0.016, 98s:0.0006, 99:0.0078, T8s:0.0067, T9s:0.0002, TT:0.5119, ATo:0.4688, J8s:0.0003, JTs:0.0015, AJo:0.0015, QTs:0.0216, QJs:0.0206, KJs:0.0234, KQs:0.005, AKo:0.0446, A4s:0.0033, A5s:0.0152, A6s:0.001, A7s:0.0118, A8s:0.1474, A9s:0.0222, ATs:0.9992, AQs:0.0002, AKs:0.0001, AA:0.6579"
      },
      {
        "action": "4bet 21bb",
        "min": 0.0001,
        "range": "22:0.5284, A2o:0.04, 33:0.7337, A3o:0.1236, 43s:0.0183, 44:0.5602, A4o:0.1122, 53s:0.004, 54s:0.9164, 55:0.5341, A5o:0.3127, 63s:0.0004, 64s:0.4341, 65s:0.9523, 66:0.6421, A6o:0.0017, 75s:0.1698, 76s:0.8885, 77:0.6865, 84s:0.0001, 85s:0.0001, 86s:0.4281, 87s, 88:0.7975, A8o:0.0048, 95s:0.0004, 96s:0.0596, 97s:0.9515, 98s:0.9989, 99:0.9921, A9o:0.0003, T6s:0.0001, T7s:0.0002, T8s:0.0238, T9s:0.452, TT:0.4418, ATo:0.0013, J7s:0.0215, J8s:0.9399, J9s:0.9998, JTs:0.7309, JJ, AJo:0.9985, Q3s:0.0001, Q4s:0.0001, Q6s:0.0008, Q8s:0.0436, Q9s:0.948, QTs:0.1334, QJs:0.972, QQ, AQo, K3s:0.0001, K5s:0.0002, K6s:0.0064, K7s:0.0009, K8s:0.0022, K9s:0.1664, KTs:0.0012, KJs:0.9751, KQs:0.9923, KK, AKo:0.9554, A2s:0.9992, A3s, A4s:0.9966, A5s:0.9848, A6s:0.9989, A7s:0.9881, A8s:0.8522, A9s:0.9768, ATs:0.0008, AJs, AQs:0.9998, AKs:0.9999, AA:0.3421"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.1894, AKo:0.3011, A2s:0.1375, A3s:0.1347, A4s:0.0925, A5s:0.2581, A6s:0.0006, A7s:0.0033, A8s:0.052, A9s:0.0282, ATs:0.0002, AJs:0.6201, AQs:0.7679, AKs:0.9943, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.0132, A3o:0.0038, A4o:0.0002, A7o:0.0204, A8o:0.0012, A9o:0.142, JJ:0.0001, AJo:0.0639, QQ:0.0475, AQo:0.1347, KK:0.0025, AKo:0.044, A2s:0.0173, A5s:0.0002, A6s:0.0079, A7s:0.0009, A8s:0.0072, A9s:0.1776, ATs:0.0001, AJs:0.0349, AQs:0.215, AKs:0.1884, AA:0.9998"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.4369, AQo:0.0195, KK:0.9936, AKo:0.8191, A2s:0.4435, A3s:0.138, A4s:0.3283, A5s:0.3493, A6s:0.0834, A7s:0.1744, A8s:0.0705, A9s:0.3676, ATs:0.0021, AJs:0.9183, AQs:0.7827, AKs:0.8116, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.0566, A3o:0.0198, A4o:0.1846, A5o:0.0446, 63s:0.0244, 65s:0.0529, A6o:0.0057, 74s:0.022, 77:0.0001, A7o:0.1164, 86s:0.0011, 88:0.1321, 98o:0.0003, A8o:0.0194, 98s:0.0098, 99:0.0483, A9o:0.0001, T2s:0.1812, T8s:0.0033, TT:0.2024, ATo:0.1981, J3s:0.0359, J4s:0.0019, J7s:0.0104, JTs:0.1511, JJ:0.1649, KJo:0.0183, AJo:0.5789, Q2s:0.0012, Q3s:0.0193, Q4s:0.0001, Q7s:0.0001, Q8s:0.0353, QQ:0.7465, KQo:0.0003, AQo:0.0032, K4s:0.0003, K9s:0.0004, KTs:0.0001, KQs:0.0008, KK:0.932, AKo:0.0114, A3s:0.0002, A4s:0.4772, A5s:0.0306, A7s:0.1858, A8s:0.178, A9s:0.4035, ATs:0.0627, AJs:0.5372, AQs:0.2946, AKs:0.5557, AA:0.9844"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0434, A2o:0.0046, A3o:0.0025, 44:0.0007, A4o:0.2121, 55:0.0189, 66:0.2952, 75s:0.0095, 77:0.0006, 85s:0.0253, 88:0.039, A8o:0.0235, 94s:0.0038, 97s:0.0217, 99:0.9298, T2s:0.0095, T6s:0.0001, T7s:0.0006, T8s:0.0962, TT:0.6432, ATo:0.2633, J4s:0.0049, J7s:0.0122, J8s:0.0056, J9s:0.4008, JTs:0.3912, JJ:0.8332, KJo:0.0243, AJo:0.3406, Q4s:0.0718, Q6s:0.0036, Q7s:0.0002, Q8s:0.1864, QJs:0.9455, QQ:0.2527, KQo:0.0057, AQo:0.9911, K5s:0.0055, K6s:0.0902, K8s:0.0052, K9s:0.0058, KTs:0.2698, KJs:0.1965, KQs:0.9284, KK:0.0679, AKo:0.9875, A2s:0.3718, A3s:0.0609, A4s:0.3759, A5s:0.5409, A6s:0.1898, A7s:0.4435, A8s:0.6458, A9s:0.433, ATs:0.3683, AJs:0.4478, AQs:0.694, AKs:0.443, AA:0.0156"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.7871, A2o:0.0001, 32s:0.0001, 33:0.5918, 44:0.7641, K4o:0.0001, 52s:0.0001, 55:0.7952, 62s:0.0342, 65s:0.0001, 66:0.3454, 75s:0.2904, 76s:0.0003, 77:0.6502, 86s:0.0001, 87s:0.2893, 88:0.8625, A8o:0.0001, 92s:0.0001, 94s:0.0014, 95s:0.0001, 98s:0.1143, 99:0.6188, A9o:0.0003, T4s:0.0031, T6s:0.014, T7s:0.0001, T8s:0.0081, TT:0.3379, ATo:0.0374, J3s:0.0004, J4s:0.0013, J5s:0.0393, J6s:0.0014, J7s:0.0047, J9s:0.3949, JTs:0.1197, JJ:0.0046, KJo:0.0001, AJo:0.2476, Q4s:0.0004, Q6s:0.0001, Q8s:0.0408, Q9s:0.0001, QJs:0.0225, QQ:0.0286, KQo:0.0001, AQo:0.0003, K5s:0.0603, K6s:0.0447, K8s:0.001, KTs:0.0048, KJs:0.1783, KQs:0.8001, KK:0.0338, AKo:0.0285, A2s:0.15, A3s:0.0006, A4s:0.0001, A5s:0.3552, A6s:0.0397, A7s:0.0002, A8s:0.0002, A9s:0.2409, ATs:0.1468, AJs:0.2571, AQs:0.4547, AKs:0.0006, AA:0.0083"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "72o:0.012, 73o:0.0311, A4o:0.0273, 55:0.0055, K5o:0.02, A5o:0.0137, 62s:0.0002, A6o:0.2323, 73s:0.0035, 74s:0.0252, 77:0.0012, A7o:0.3825, 84s:0.0007, 86s:0.0001, 87s:0.0652, 88:0.0463, A8o:0.0071, 96s:0.0033, 99:0.022, A9o:0.0133, T2s:0.0034, T6s:0.0671, T8s:0.1167, T9s:0.0803, TT:0.0902, ATo:0.4134, J3s:0.02, J4s:0.0006, J6s:0.0001, J7s:0.0188, J8s:0.0509, J9s:0.0162, JJ:0.0536, QJo:0.0079, AJo:0.0984, Q3s:0.0804, Q5s:0.0026, Q7s:0.0305, Q8s:0.0283, QJs:0.0889, QQ:0.3193, KQo:0.0319, AQo:0.2259, K5s:0.0516, K7s:0.1785, KJs:0.0098, KQs:0.0001, KK:0.5138, AKo:0.0354, A2s:0.1306, A3s:0.0035, A4s:0.3879, A5s:0.008, A6s:0.0172, A7s:0.0051, A8s:0.0479, A9s:0.1413, ATs:0.0683, AJs:0.1449, AQs:0.4063, AKs:0.2, AA:0.8983"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "A3o:0.0183, A4o:0.0263, 55:0.0063, 65o:0.0194, K5o:0.0146, A5o:0.0077, 62s:0.0001, 66:0.0165, 74s:0.0437, 75s:0.0391, 77:0.0001, A7o:0.051, 86s:0.0482, 95s:0.0001, 97s:0.0003, 99:0.2467, A9o:0.1303, T4s:0.0025, T6s:0.0075, T9s:0.0131, TT:0.0107, ATo:0.1849, J2s:0.0001, J6s:0.0001, J8s:0.0036, J9s:0.0175, JTs:0.0075, JJ:0.5455, AJo:0.2127, Q5s:0.2806, Q8s:0.0102, QJs:0.0538, QQ:0.4716, AQo:0.0277, K3s:0.0335, K6s:0.0063, KJs:0.0001, KQs:0.0042, KK:0.421, AKo:0.5863, A2s:0.126, A3s:0.2883, A4s:0.1003, A5s:0.0331, A6s:0.0075, A8s:0.0106, A9s:0.3362, ATs:0.0084, AJs:0.1174, AQs:0.1081, AKs:0.3213, AA:0.0928"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.4283, 44:0.0272, 53s:0.0022, 55:0.003, 62s:0.0015, 74s:0.0167, 75s:0.3702, 76s:0.0002, 77:0.0226, A7o:0.1053, 86s:0.0136, 87s:0.0117, 88:0.0626, A8o:0.0003, 96s:0.0275, 98s:0.0491, 99:0.0196, A9o:0.1276, T2s:0.0006, T4s:0.0014, T6s:0.0001, T8s:0.007, T9s:0.0153, TT:0.5408, ATo:0.0658, J2s:0.0001, J3s:0.007, J4s:0.1412, J6s:0.0005, J7s:0.0004, J8s:0.3458, J9s:0.124, JTs:0.0001, JJ:0.3533, KJo:0.0227, AJo:0.144, Q7s:0.0058, Q8s:0.2795, QTs:0.2768, QJs:0.2114, QQ:0.1803, AQo:0.7179, K3s:0.0377, K4s:0.1597, K5s:0.018, K6s:0.0861, K8s:0.0015, KJs:0.6641, KQs:0.0377, KK:0.031, AKo:0.3488, A2s:0.0031, A3s:0.6216, A4s:0.3995, A5s:0.1934, A6s:0.7688, A7s:0.098, A8s:0.8694, A9s:0.1689, ATs:0.5098, AJs:0.4794, AQs:0.0021, AKs:0.478, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.3752, 88, 99, TT, JJ, AJo, QQ, AQo, KK, AKo, ATs:0.6305, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ, QQ, KK, AKo:0.9928, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.7864, JJ, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT, JJ, QQ, KK, AKo, AQs:0.9984, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18.5bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 54s:0.006, 65s:0.0065, 66:0.0379, 76s:0.0245, 77:0.1803, 84s:0.0001, 86s:0.0028, 87s:0.009, 88:0.0096, 98s:0.0007, T9s:0.013, ATo:0.0036, J8s:0.0001, J9s:0.0046, JTs:0.0049, AJo:0.0001, Q8s:0.0001, Q9s:0.0009, QTs:0.0038, QJs:0.002, KJs:0.0013, A7s:0.0001, A8s:0.0264, A9s:0.0004, ATs:0.9042, AJs:0.0003, AA:0.0968"
      },
      {
        "action": "4bet 18.5bb",
        "min": 0.0001,
        "range": "22:0.5468, 33:0.8394, 43s:0.0002, 44:0.9994, 53s:0.0226, 54s:0.8481, 55:0.999, 63s:0.0022, 64s:0.1462, 65s:0.8973, 66:0.8974, 75s:0.075, 76s:0.4982, 77:0.6708, 85s:0.004, 86s:0.1257, 87s:0.3937, 88:0.9897, 97s:0.0146, 98s:0.8931, 99, T8s:0.0001, T9s:0.4589, TT, J8s:0.1226, J9s:0.8156, JTs:0.9151, JJ, KJo:0.0001, AJo:0.9999, Q4s:0.0005, Q5s:0.0003, Q8s:0.0384, Q9s:0.7013, QTs:0.6762, QJs:0.995, QQ, KQo:0.0002, AQo, K2s:0.0002, K3s:0.0008, K4s:0.0005, K5s:0.0012, K6s:0.0003, K7s:0.0003, K8s:0.0004, K9s:0.2126, KTs:0.0386, KJs:0.8972, KQs, KK, AKo, A2s:0.9998, A3s:0.9996, A4s, A5s:0.9989, A6s:0.6608, A7s:0.7123, A8s:0.9074, A9s:0.751, ATs:0.0744, AJs:0.9997, AQs, AKs, AA:0.9032"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0026, ATo:0.0058, JJ:0.0222, AJo:0.0098, QQ:0.2068, AQo:0.0604, KK:0.9939, AKo:0.2129, A2s:0.0605, A3s:0.1001, A4s:0.1477, A5s:0.1872, A6s:0.0156, A7s:0.0533, A8s:0.0879, A9s:0.0382, ATs:0.0978, AJs:0.2341, AQs:0.6931, AKs:0.9927, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0002, JJ:0.1468, QQ:0.9287, AQo:0.0069, K4s:0.0001, K9s:0.0001, KTs:0.0002, KQs:0.0011, KK, AKo:0.6864, A2s:0.1218, A3s:0.1173, A4s:0.24, A5s:0.1884, A6s:0.2284, A7s:0.0025, A8s:0.0143, A9s:0.2515, ATs:0.0272, AJs:0.6754, AQs:0.9592, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.0182, A3o:0.0186, K4o:0.0001, A4o:0.001, A5o:0.0212, 65s:0.0002, A6o:0.0128, A7o:0.0063, A8o:0.0015, A9o:0.1847, TT:0.0002, ATo:0.0048, JJ:0.184, AJo:0.0075, QQ:0.0369, AQo:0.3486, K4s:0.0001, KJs:0.0002, KK:0.1997, AKo:0.2231, A2s:0.0016, A3s:0.0086, A4s:0.0009, A6s:0.0032, A7s:0.0011, A8s:0.02, A9s:0.0849, ATs:0.027, AJs:0.0347, AQs:0.0624, AKs:0.0218, AA:0.9999"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "65s:0.0003, TT:0.0198, JJ:0.3983, Q9s:0.0001, QQ:0.9631, AQo:0.3396, KJs:0.0003, KQs:0.0001, KK:0.8003, AKo:0.7648, A2s:0.0103, A3s:0.1077, A4s:0.1241, A5s:0.0209, A6s:0.0369, A7s:0.0008, A8s:0.002, A9s:0.2942, ATs:0.1885, AJs:0.6253, AQs:0.9367, AKs:0.9782, AA:0.0001"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A3o:0.06, 55:0.0002, A5o:0.074, A6o:0.0269, 75s:0.0001, 77:0.0003, 86s:0.0003, 87s:0.0001, 88:0.0076, A8o:0.1914, 93s:0.0001, 99:0.0204, T7s:0.0004, TT:0.5662, ATo:0.1049, J5s:0.003, J8s:0.0079, JJ:0.3259, AJo:0.0174, Q5s:0.0002, Q8s:0.0164, QQ:0.9965, KQo:0.0001, AQo:0.545, K2s:0.0001, K5s:0.0001, K7s:0.0277, K9s:0.0007, KJs:0.1229, KQs:0.0001, KK:0.7581, AKo:0.4242, A2s:0.0001, A4s:0.358, A5s:0.345, A6s:0.1931, A7s:0.0001, A8s:0.0287, A9s:0.4347, ATs:0.0333, AJs:0.0819, AQs:0.3922, AKs:0.2543, AA:0.4825"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0296, 55:0.0001, 65s:0.0001, A6o:0.0633, 77:0.0007, A7o:0.0001, 87s:0.0001, 88:0.0987, A8o:0.0774, 92s:0.0003, 93s:0.0001, 99:0.293, T6s:0.0314, T7s:0.0002, TT:0.389, ATo:0.0137, J8s:0.0058, J9s:0.0001, JTs:0.0002, JJ:0.6715, AJo:0.1168, Q5s:0.0001, Q7s:0.0001, Q9s:0.0037, QTs:0.0138, QQ:0.0024, KQo:0.0002, AQo:0.3826, K4s:0.0002, K7s:0.0074, K8s:0.0004, K9s:0.0027, KTs:0.0001, KJs:0.3895, KQs:0.1554, KK:0.2374, AKo:0.5235, A2s:0.6112, A4s:0.182, A5s:0.0951, A6s:0.4074, A7s:0.5109, A8s:0.5238, A9s:0.0418, ATs:0.156, AJs:0.5935, AQs:0.6024, AKs:0.6926, AA:0.5175"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.183, 33:0.0001, A4o:0.0074, 55:0.0001, A5o:0.0169, 66:0.0001, A6o:0.0024, 72s:0.0024, 77:0.0499, 88:0.0503, A8o:0.0079, 99:0.0868, K9o:0.0002, TT:0.4196, ATo:0.0873, J2s:0.0291, J6s:0.0001, J7s:0.0613, J9s:0.0077, JJ:0.1618, AJo:0.3781, Q6s:0.0003, Q8s:0.0271, QTs:0.0001, QQ:0.1422, AQo:0.0865, K2s:0.0004, K3s:0.016, K5s:0.0001, K6s:0.0001, K7s:0.0109, K8s:0.0983, K9s:0.001, KQs:0.0001, KK:0.7272, AKo:0.2087, A2s:0.0329, A3s:0.0001, A4s:0.0424, A5s:0.0107, A6s:0.1044, A7s:0.0005, A8s:0.0439, A9s:0.0123, ATs:0.2369, AJs:0.1672, AQs:0.1235, AA:0.937"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0298, A4o:0.0093, 53s:0.2349, 54s:0.0001, 55:0.0868, 66:0.2251, A6o:0.1503, 77:0.1018, 88:0.6591, 92s:0.0001, 97s:0.2699, 98s:0.0897, 99:0.3783, A9o:0.1969, T7s:0.0006, TT:0.305, ATo:0.7577, J7s:0.0781, JJ:0.8155, AJo:0.4695, Q3s:0.0001, Q4s:0.0001, Q8s:0.0002, QTs:0.0001, QQ:0.8511, AQo:0.7773, K5s:0.0034, K6s:0.0019, K7s:0.0341, K8s:0.2962, KTs:0.0006, KJs:0.8004, KQs:0.1134, KK:0.2728, AKo:0.7889, A2s:0.4479, A3s:0.3295, A4s:0.7056, A5s:0.9431, A6s:0.6001, A7s:0.3256, A8s:0.2074, A9s:0.7856, ATs:0.4096, AJs:0.6371, AQs:0.8607, AKs:0.9988, AA:0.063"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.8291, K2o:0.0001, A2o:0.0001, 32s:0.0004, 33:0.6759, Q3o:0.0001, 44:0.232, 74o:0.0001, 52s:0.1628, 53s:0.0521, 54s:0.0052, 55:0.0003, A5o:0.0017, 64s:0.0067, 65s:0.2519, 66:0.1229, 73s:0.0001, 75s:0.001, 76s:0.0352, 77:0.6171, 83s:0.0002, 87s:0.0001, 88:0.4208, A8o:0.0001, 94s:0.0025, 95s:0.0003, 96s:0.0001, 97s:0.1645, 98s:0.0049, 99:0.2976, T9o:0.0001, Q9o:0.0001, K9o:0.0002, A9o:0.0002, T2s:0.0001, T3s:0.0011, T7s:0.1194, T8s:0.0001, T9s:0.0002, TT:0.001, KTo:0.0001, ATo:0.0056, J3s:0.0001, J5s:0.0002, J6s:0.0001, J7s:0.0021, J8s:0.0051, J9s:0.0004, JTs:0.0037, JJ:0.2514, QJo:0.0001, KJo:0.0011, AJo:0.1523, Q4s:0.0002, Q5s:0.1045, Q6s:0.0015, Q7s:0.0483, Q8s:0.0002, Q9s:0.3217, QTs:0.0002, QJs:0.0001, QQ:0.0653, AQo:0.232, K2s:0.0012, K3s:0.0002, K4s:0.0822, K5s:0.0002, K6s:0.0025, K7s:0.0055, K9s:0.0517, KTs:0.0008, KJs:0.0094, KQs:0.2638, KK:0.1808, AKo:0.1913, A3s:0.0003, A4s:0.0008, A5s:0.0127, A6s:0.0632, A7s:0.0197, A8s:0.2528, A9s:0.0008, ATs:0.0028, AJs:0.1315, AQs:0.3462, AKs:0.1794, AA:0.1318"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0021, A3o:0.0145, 54s:0.0427, 75o:0.0001, A5o:0.0935, 65s:0.0256, 66:0.0143, A6o:0.0803, 72s:0.0191, 73s:0.0001, 77:0.0794, A7o:0.1276, 86s:0.0092, 87s:0.0037, 88:0.1481, 92s:0.0001, 94s:0.0043, 96s:0.0114, 97s:0.0003, 99:0.0001, A9o:0.0807, T6s:0.0002, T8s:0.001, TT:0.2502, ATo:0.1845, J2s:0.0001, J4s:0.481, J6s:0.0001, J9s:0.0005, JJ:0.1723, AJo:0.4376, Q3s:0.0023, Q6s:0.0021, QTs:0.0002, QJs:0.0017, QQ:0.4065, AQo:0.1424, K4s:0.0039, K5s:0.0001, K6s:0.0058, K7s:0.0032, K8s:0.0001, K9s:0.0076, KTs:0.0016, KJs:0.0015, KQs:0.0001, KK:0.3787, AKo:0.2559, A2s:0.0047, A3s:0.0012, A4s:0.0011, A5s:0.2474, A6s:0.2349, A7s:0.1888, A8s:0.2851, A9s:0.0336, ATs:0.0232, AJs:0.0126, AQs:0.2727, AKs:0.0912, AA:0.8247"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "44:0.0009, A4o:0.0163, 55:0.0014, A5o:0.0128, 72s:0.0054, 75s:0.0003, 76s:0.0008, 77:0.0152, A7o:0.0051, 86s:0.1092, 88:0.0125, 97s:0.0345, 99:0.063, A9o:0.0682, T9s:0.0005, TT:0.0615, ATo:0.1102, J4s:0.0916, J6s:0.0001, J7s:0.0001, J9s:0.0001, JJ:0.0552, AJo:0.0397, QQ:0.2062, AQo:0.1057, K3s:0.0277, K7s:0.0064, K9s:0.0274, KTs:0.0042, KQs:0.0185, KK:0.4252, AKo:0.1246, A2s:0.0093, A4s:0.1415, A5s:0.0635, A6s:0.0217, A7s:0.2211, A8s:0.0189, A9s:0.0145, ATs:0.1037, AJs:0.0784, AQs:0.1312, AKs:0.0119, AA:0.0404"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0035, 32s:0.0005, 33:0.0001, 44:0.0086, K4o:0.0001, 54s:0.0013, 55:0.0014, A5o:0.0166, 66:0.0925, 72s:0.0425, 73s:0.0084, 76s:0.3518, 77:0.0521, A7o:0.002, 86s:0.1842, 88:0.0142, A8o:0.0032, 93s:0.0058, 97s:0.0503, 99:0.0353, T9o:0.0001, A9o:0.0017, T7s:0.0289, T8s:0.0001, T9s:0.0002, TT:0.6167, QTo:0.0001, ATo:0.5594, J3s:0.4765, J4s:0.0262, J7s:0.0002, J8s:0.1008, J9s:0.0044, JTs:0.0022, JJ:0.5207, AJo:0.2945, Q2s:0.0001, Q4s:0.2207, Q5s:0.0007, Q6s:0.0001, Q8s:0.0084, QTs:0.0025, QJs:0.0027, QQ:0.3106, AQo:0.4677, K3s:0.0416, K5s:0.0001, K6s:0.0008, K7s:0.5054, K9s:0.0122, KTs:0.0056, KJs:0.7289, KQs:0.3864, KK:0.0153, AKo:0.4147, A2s:0.4624, A3s:0.7288, A4s:0.0076, A5s:0.2452, A6s:0.2284, A7s:0.0488, A8s:0.1145, A9s:0.5871, ATs:0.6723, AJs:0.7471, AQs:0.2266, AKs:0.6966, AA:0.0031"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.021, 33:0.0267, A3o:0.0007, 43s:0.0038, 44:0.0126, A4o:0.0096, 54s:0.0383, 55:0.0499, A5o:0.0417, 64s:0.0027, 65s:0.2606, 66:0.2893, A6o:0.0159, 74s:0.0023, 75s:0.0203, 76s:0.2508, 77:0.0454, A7o:0.013, 85s:0.0001, 86s:0.0512, 87s:0.0386, 88:0.2935, A8o:0.0382, 97s:0.0001, 98s:0.0534, 99:0.0883, T4s:0.0001, T5s:0.0003, T8s:0.1266, T9s:0.001, TT:0.1113, ATo:0.0533, J4s:0.0001, J8s:0.0006, J9s:0.0262, JTs:0.0852, JJ:0.6552, AJo:0.342, Q6s:0.0001, Q9s:0.0189, QTs:0.0722, QJs:0.0003, QQ:0.9122, AQo:0.9793, K2s:0.0001, K8s:0.0017, KTs:0.0134, KJs:0.0951, KQs:0.1368, KK:0.6736, AKo:0.2969, A2s:0.1613, A3s:0.1921, A4s:0.0765, A5s:0.2145, A6s:0.0053, A7s:0.1023, A8s:0.2674, A9s:0.4024, ATs:0.2332, AJs:0.44, AQs:0.9033, AKs:0.3489, AA:0.323"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.1073, A2o:0.1637, 33:0.0722, A3o:0.1047, 43s:0.0001, 44:0.106, A4o:0.1651, 52s:0.0014, 53s:0.0105, 54s:0.0134, 55:0.214, A5o:0.2588, 64s:0.0063, 65s:0.0759, 66:0.1623, 76o:0.0005, A6o:0.0456, 73s:0.0001, 74s:0.0115, 75s:0.0011, 76s:0.1553, 77:0.3047, A7o:0.1072, 84s:0.0023, 85s:0.0001, 86s:0.0317, 87s:0.1151, 88:0.3072, A8o:0.023, 97s:0.295, 98s:0.0629, 99:0.2488, A9o:0.099, T4s:0.0001, T7s:0.0001, T8s:0.0113, T9s:0.0037, TT:0.032, ATo:0.0306, J3s:0.0001, J4s:0.0002, J6s:0.0003, J7s:0.0002, J8s:0.0269, J9s:0.0221, JTs:0.0416, JJ:0.1154, AJo:0.1952, Q5s:0.0001, Q6s:0.0056, Q9s:0.0052, QTs:0.0038, QJs:0.0062, QQ:0.081, AQo:0.0205, K2s:0.0013, K3s:0.0001, K4s:0.0003, K6s:0.0382, K8s:0.0015, K9s:0.0479, KTs:0.1601, KJs:0.0274, KQs:0.02, KK:0.3263, AKo:0.7031, A2s:0.6205, A3s:0.6039, A4s:0.7638, A5s:0.7186, A6s:0.8178, A7s:0.7433, A8s:0.5959, A9s:0.5271, ATs:0.7201, AJs:0.4543, AQs:0.0962, AKs:0.651, AA:0.677"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0113, TT:0.0067, JJ:0.2105, QQ:0.7578, KK:0.998, AKo:0.7422, AJs:0.0198, AQs:0.1689, AKs:0.9941, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "88:0.0389, TT:0.3147, JJ:0.4922, QQ:0.7448, AQo:0.2074, KK:0.9942, AKo:0.8661, AJs:0.0002, AQs:0.4351, AKs:0.9863, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0042, A2o:0.0095, A3o:0.0322, 43s:0.0061, 44:0.0067, A4o:0.0229, 52s:0.003, 53s:0.0007, A5o:0.0416, 65s:0.0224, A6o:0.0242, 75s:0.0004, 76s:0.0062, 77:0.0181, A7o:0.0164, 87s:0.0015, 88:0.0219, A8o:0.0079, 98s:0.0164, 99:0.0091, A9o:0.0001, T6s:0.0075, T9s:0.0041, ATo:0.0293, J9s:0.0261, JJ:0.0282, AJo:0.0766, Q8s:0.0074, QQ:0.3838, AQo:0.0471, K6s:0.0054, K7s:0.0089, K9s:0.0099, KTs:0.0133, KJs:0.0146, KQs:0.0085, KK:0.9947, AKo:0.4776, A2s:0.1168, A3s:0.0258, A4s:0.0681, A5s:0.1106, A6s:0.0518, A7s:0.0489, A8s:0.1747, A9s:0.076, ATs:0.0582, AJs:0.0805, AQs:0.1564, AKs:0.793, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.0498, A3o:0.0225, A4o:0.0374, 53s:0.0004, A5o:0.0565, A6o:0.0319, 72s:0.0001, A7o:0.071, A8o:0.02, A9o:0.0147, ATo:0.0244, AJo:0.0238, QQ:0.0003, KK:0.5986, AKo:0.6796, A2s:0.3014, A3s:0.3101, A4s:0.4231, A5s:0.172, A6s:0.1035, A7s:0.2558, A8s:0.2802, A9s:0.4565, ATs:0.3316, AJs:0.3163, AQs:0.0738, AKs:0.907, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.996, QQ, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AKo:0.999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0484, KK, AKo:0.4214, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKo:0.0067, AKs:0.9997, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "LJ",
    "eff": 37.5,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 12bb",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.701, A2o:0.0001, 32s:0.042, 33:0.9788, A3o:0.0211, 42s:0.0246, 43s:0.5947, 44:0.9864, A4o:0.013, 52s:0.039, 53s:0.3148, 54s:0.9756, 55:0.9897, A5o:0.1746, 63s:0.0388, 64s:0.6418, 65s:0.9424, 66:0.974, 75s:0.2118, 76s:0.9848, 77:0.888, 85s:0.014, 86s:0.8189, 87s:0.5354, 88:0.7573, A8o:0.0001, 96s:0.0111, 97s:0.4239, 98s:0.3155, 99:0.3469, T7s:0.0015, T8s:0.0739, T9s:0.6618, TT:0.8519, J9s:0.0822, JTs:0.3645, JJ:0.9729, AJo:0.0435, Q9s:0.0101, QTs:0.4811, QJs:0.2617, QQ:0.6821, AQo:0.6416, K2s:0.065, K3s:0.0365, K4s:0.0654, K5s:0.0098, K6s:0.536, K7s:0.1726, K8s:0.287, K9s:0.2509, KTs:0.9552, KJs:0.8829, KQs:0.9488, KK:0.3258, AKo:0.1814, A2s:0.3523, A3s:0.3215, A4s:0.2216, A5s:0.5091, A6s:0.221, A7s:0.485, A8s:0.3572, A9s:0.2491, ATs:0.3827, AJs:0.6294, AQs:0.7984, AKs:0.0125"
      },
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.0838, A3o:0.1157, A4o:0.0803, 55:0.0024, A5o:0.1286, A6o:0.1473, A7o:0.1457, 87s:0.0441, 88:0.0632, A8o:0.135, 97s:0.0042, 98s:0.0248, 99:0.1833, A9o:0.1209, T7s:0.0001, T8s:0.0071, T9s:0.0116, TT:0.0001, ATo:0.3056, AJo:0.1968, QTs:0.0196, QJs:0.0001, QQ:0.0157, KQo:0.0003, AQo:0.0438, K2s:0.0001, K6s:0.0188, K7s:0.0461, K8s:0.057, K9s:0.0464, KTs:0.0031, KQs:0.0001, KK:0.1546, AKo:0.2702, A2s:0.0594, A3s:0.0403, A4s:0.1427, A5s:0.0329, A6s:0.1627, A7s:0.0359, A8s:0.079, A9s:0.1604, ATs:0.1713, AKs:0.6722, AA"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0028, A2o:0.0218, 33:0.0097, A3o:0.0961, 44:0.0024, A4o:0.1391, 55:0.0004, A5o:0.1731, 65s:0.0002, 66:0.0257, A6o:0.0069, 76s:0.0123, 77:0.1097, A7o:0.0022, 85s:0.0001, 86s:0.0004, 87s:0.021, 88:0.1486, A8o:0.0101, 98s:0.0324, 99:0.2078, T9s:0.0004, TT:0.0006, J8s:0.0006, J9s:0.0001, JTs:0.0004, JJ:0.0265, AJo:0.1728, QJs:0.0023, QQ:0.3022, AQo:0.3146, K4s:0.0004, K5s:0.0002, K6s:0.0009, K7s:0.0001, K9s:0.005, KTs:0.002, KJs:0.0145, KQs:0.0347, KK:0.5196, AKo:0.5484, A2s:0.5883, A3s:0.6382, A4s:0.6353, A5s:0.458, A6s:0.6162, A7s:0.479, A8s:0.5636, A9s:0.5902, ATs:0.4459, AJs:0.3706, AQs:0.2016, AKs:0.3153"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0077, 77:0.0018, 88:0.0017, TT:0.4639, JJ:0.9059, QQ, AQo:0.7613, K5s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0014, KK, AKo, A2s:0.0119, A4s:0.0002, A7s:0.0067, A9s:0.0001, ATs:0.0151, AQs:0.9996, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.1282, ATo:0.0003, JJ:0.9812, QQ, AQo:0.1924, K3s:0.001, KTs:0.0604, KJs:0.0068, KQs:0.0286, KK, AKo, A2s:0.0123, A3s:0.1212, A4s:0.1538, A5s:0.1203, A6s:0.0301, A7s:0.0264, A8s:0.0221, A9s:0.0218, ATs:0.2643, AJs:0.039, AQs:0.9275, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0016, A4o:0.0026, A5o:0.0033, 65s:0.0001, 66:0.0016, 77:0.0025, TT:0.0261, ATo:0.0047, JJ:0.3186, AJo:0.0289, QQ:0.9512, AQo:0.2826, KTs:0.099, KQs:0.1785, KK, AKo, A2s:0.5152, A3s:0.3748, A4s:0.6305, A5s:0.5391, A6s:0.3389, A7s:0.4581, A8s:0.5244, A9s:0.2467, ATs:0.6962, AJs:0.5026, AQs:0.6093, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "A2o:0.0222, A3o:0.0482, A4o:0.0747, A5o:0.0148, A6o:0.0571, A7o:0.03, A8o:0.0204, A9o:0.0187, ATo:0.0061, JJ:0.0018, AJo:0.0053, QQ:0.2492, AQo:0.1453, KK:0.1457, AKo:0.0408, A2s:0.0726, A3s:0.0721, A4s:0.134, A5s:0.0478, A6s:0.1364, A7s:0.1448, A8s:0.0401, A9s:0.0441, ATs:0.0098, AJs:0.0078, AQs:0.2835, AKs:0.0922, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK:0.456, AKo:0.9386, A2s:0.1684, A3s:0.1635, A4s:0.2046, A5s:0.2568, A6s:0.175, A7s:0.1637, A8s:0.1327, A9s:0.5059, ATs:0.0862, AKs:0.9071"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "Q5o:0.0019, Q6o:0.0018, 77:0.0031, 88:0.0132, Q8o:0.0019, TT:0.0003, JJ:0.2442, QJo:0.0295, Q3s:0.0034, Q5s:0.007, Q7s:0.0015, Q8s:0.0132, QJs:0.3058, QQ:0.4213, KQo:0.1802, AQo:0.5147, KQs:0.0003, KK:0.0002, AKo:0.1027, AJs:0.0015, AQs:0.1726, AKs:0.2174, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.0001, JJ:0.7558, QJs:0.0034, QQ:0.5787, KQo:0.5013, AQo:0.4802, K3s:0.0002, K8s:0.0002, KJs:0.7155, KQs:0.9947, KK:0.9998, AKo:0.8973, AJs:0.0067, AQs:0.8274, AKs:0.7826"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "Q2o:0.0014, A3o:0.0026, A4o:0.0042, A6o:0.018, Q7o:0.0002, A7o:0.0075, 99:0.0011, TT:0.0001, JJ:0.2065, QJo:0.0235, KJo:0.0002, AJo:0.0004, Q2s:0.0051, Q4s:0.0132, Q5s:0.0094, Q6s:0.0183, Q7s:0.0274, QTs:0.0001, QJs:0.0627, QQ:0.3138, KQo:0.0362, AQo:0.5232, K2s:0.0001, KTs:0.0001, KJs:0.0002, KQs:0.0004, KK:0.0004, AKo:0.0253, A3s:0.0051, A4s:0.0013, A5s:0.034, A7s:0.0188, A9s:0.0029, AJs:0.0016, AQs:0.0002, AKs:0.1732, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.2651, QJs:0.0032, QQ:0.6862, KQo:0.8141, AQo:0.4343, K2s:0.0118, K3s:0.0194, K5s:0.0405, K6s:0.0124, K7s:0.0308, K9s:0.0097, KTs:0.0006, KJs:0.5949, KQs:0.9996, KK:0.9996, AKo:0.9747, A5s:0.0182, AJs:0.0005, AQs:0.9998, AKs:0.8268"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "3bet 8bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "K3o:0.0022, A3o:0.0003, A4o:0.0001, K5o:0.0101, A5o:0.0003, K6o:0.0045, 77:0.0001, A7o:0.0006, 88:0.0001, K8o:0.0117, 99:0.0597, A9o:0.0002, TT:0.0096, JJ:0.0482, Q2s:0.0003, Q3s:0.0032, Q4s:0.052, Q5s:0.0003, Q7s:0.0009, Q8s:0.0028, QJs:0.0136, QQ:0.6714, KQo:0.0002, AQo:0.8537, K2s:0.0029, K3s:0.0065, K4s:0.0125, K5s:0.0604, K6s:0.0092, K7s:0.0086, K8s:0.0125, K9s:0.0003, KTs:0.1317, KJs:0.0046, KK:0.0001, AKo:0.0627, A2s:0.0043, A4s:0.0025, A5s:0.0535, A6s:0.118, A7s:0.023, A8s:0.0074, A9s:0.0124, ATs:0.0014, AQs:0.0032, AKs:0.1171, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0001, QJs:0.0002, QQ:0.3286, KQo:0.9996, AQo:0.0659, K2s:0.051, K3s:0.0128, K4s:0.0136, K5s:0.0453, K6s:0.0702, K7s:0.0905, K8s:0.0425, K9s:0.0513, KTs:0.0004, KJs:0.4878, KQs:0.9999, KK:0.9999, AKo:0.9373, A2s:0.0003, A4s:0.0115, A8s:0.0009, A9s:0.0001, AQs:0.9968, AKs:0.8829"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9999, 33:0.9982, 44:0.9936, 53s:0.0838, 54s:0.9197, 55:0.9832, 65o:0.0001, 63s:0.0002, 64s:0.3749, 65s:0.9759, 66:0.9949, 75s:0.0013, 76s:0.0606, 77:0.9998, 86s:0.0067, 87s:0.712, 88:0.9963, 95s:0.0001, 96s:0.0139, 97s:0.0186, 98s:0.0844, 99:0.8262, T7s:0.0032, T8s:0.3158, T9s:0.0327, TT:0.9769, J8s:0.034, J9s:0.0001, JTs:0.0148, JJ:0.7451, KJo:0.3186, QTs:0.0001, QJs:0.4797, QQ:0.6551, KQo:0.1576, AQo:0.3895, K2s:0.0026, K3s:0.0015, K4s:0.0009, K5s:0.0661, K6s:0.0939, K7s:0.1421, K8s:0.051, K9s:0.0068, KTs:0.2035, KJs:0.0046, KQs:0.0462, A2s:0.0198, A3s:0.7458, A4s:0.2549, A5s:0.8486, A6s:0.495, A7s:0.0247, A8s:0.7776, A9s:0.9521, ATs:0.8228, AJs:0.8169, AQs:0.5122, AKs:0.0001"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0017, A3o:0.0189, 43s:0.0001, A4o:0.0246, K5o:0.0004, A5o:0.0223, 66:0.0017, K6o:0.0001, A6o:0.0005, K7o:0.0005, A7o:0.0162, A8o:0.0001, 99:0.1267, A9o:0.0027, TT:0.0005, AJo:0.0009, Q2s:0.0012, Q3s:0.0006, Q4s:0.0015, Q5s:0.018, Q6s:0.0004, Q7s:0.0003, QJs:0.0001, QQ:0.1912, KQo:0.0932, AQo:0.511, K2s:0.0024, K5s:0.0188, K6s:0.0202, K7s:0.0036, K8s:0.0008, K9s:0.0001, KTs:0.0001, KK:0.015, AKo:0.0302, A2s:0.2892, A3s:0.0842, A4s:0.2751, A5s:0.0639, A6s:0.1399, A7s:0.5647, A8s:0.0595, A9s:0.0012, ATs:0.0044, AJs:0.0004, AQs:0.4644, AKs:0.1096, AA:0.8194"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "K2o:0.0004, A2o:0.0127, K3o:0.0014, A3o:0.0101, K4o:0.0016, A4o:0.0166, K5o:0.0027, K6o:0.0002, A6o:0.0055, K7o:0.0024, A7o:0.0114, K8o:0.0007, A8o:0.005, K9o:0.0004, A9o:0.0188, TT:0.0113, KTo:0.0009, JJ:0.0081, QQ:0.1509, KQo:0.0116, AQo:0.0972, K2s:0.0008, K3s:0.0002, K4s:0.0001, K5s:0.0015, K7s:0.0009, K8s:0.0002, KTs:0.0001, KQs:0.0001, KK:0.0027, AKo:0.0016, A3s:0.0003, A4s:0.056, A6s:0.0352, A7s:0.0317, A8s:0.0024, A9s:0.0001, AQs:0.0012, AKs:0.008, AA:0.1806"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "K4o:0.0001, K5o:0.0022, 88:0.0003, 99:0.0003, K9o:0.0035, TT:0.0051, KTo:0.0167, JJ:0.2467, KJo:0.4482, QJs:0.0003, QQ:0.0027, KQo:0.6337, AQo:0.0002, K2s:0.4785, K3s:0.5436, K4s:0.5473, K5s:0.6657, K6s:0.6888, K7s:0.7285, K8s:0.6779, K9s:0.9898, KTs:0.7952, KJs:0.9949, KQs:0.9534, KK:0.9823, AKo:0.9681, A2s:0.0009, A3s:0.0111, A4s:0.0985, A5s:0.0503, A6s:0.0115, A7s:0.0027, A8s:0.004, A9s:0.012, ATs:0.0477, AJs:0.1804, AQs:0.0222, AKs:0.8824"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.9988, 99, TT, JJ, AJo:0.0463, QQ, AQo, KK, AKo, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "TT:0.2594, JJ, QQ, KK, AKo:0.9999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0075, 33:0.211, 44:0.8559, A4o:0.0003, 55:0.97, A5o:0.0006, 64s:0.0003, 66:0.4393, A6o:0.0454, 77:0.3807, A7o:0.0532, 82s:0.0001, 88:0.0052, A8o:0.059, 97s:0.0001, 99:0.0019, A9o:0.0176, TT:0.9648, ATo:0.6388, J9s:0.0002, JJ:0.1361, AJo:0.4064, QTs:0.0013, QJs:0.0103, QQ:0.0215, K9s:0.0004, KTs:0.0001, KJs:0.0431, KQs:0.0241, KK:0.0004, AKo:0.0001, A2s:0.0003, A5s:0.002, A8s:0.0006, A9s:0.0028, ATs:0.9889, AJs:0.0031, AA"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.9924, A2o:0.2811, 32s:0.0001, 33:0.6989, A3o:0.4361, 43s:0.0009, 44:0.1325, A4o:0.4932, 53s:0.0011, 54s:0.0511, 55:0.0295, A5o:0.4896, 62s:0.0003, 63s:0.0002, 64s:0.9171, 65s:0.9929, 66:0.5607, 76o:0.0008, A6o:0.0015, 73s:0.0001, 74s:0.0001, 75s:0.5187, 76s:0.9999, 77:0.6192, 87o:0.0003, A7o:0.0004, 82s:0.0001, 83s:0.0002, 84s:0.0003, 85s:0.0067, 86s:0.9885, 87s:0.9998, 88:0.9948, A8o:0.0932, 94s:0.0001, 96s:0.4492, 97s:0.9914, 98s:0.9999, 99:0.9981, A9o:0.0116, T7s:0.0004, T8s:0.0366, T9s:0.9396, TT:0.0006, J3s:0.0002, J6s:0.0002, J8s:0.8118, J9s:0.9989, JTs:0.7096, JJ:0.8639, AJo:0.5936, Q6s:0.0006, Q8s:0.005, Q9s:0.9056, QTs:0.0052, QJs:0.9784, QQ:0.9785, AQo, K2s:0.0001, K3s:0.0001, K6s:0.0001, K7s:0.0004, K8s:0.0002, K9s:0.0015, KTs:0.0018, KJs:0.0346, KQs:0.0125, KK:0.9996, AKo:0.9999, A2s:0.9996, A3s, A4s:0.9999, A5s:0.9973, A6s:0.9999, A7s, A8s:0.9994, A9s:0.9972, ATs:0.0111, AJs:0.9969, AQs, AKs"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A2o:0.0002, A3o:0.0001, A6o:0.0018, A8o:0.0008, JJ:0.0001, AJo:0.0385, AQo:0.162, KK:0.0018, AKo:0.2338, A2s:0.0001, A3s:0.0001, A4s:0.0001, A6s:0.0346, A7s:0.0002, A8s:0.0004, A9s:0.0368, AJs:0.0143, AQs:0.3841, AKs:0.6863, AA:0.9997"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "AJo:0.0005, KK:0.0201, AKo:0.0085, A2s:0.0132, A3s:0.0174, A4s:0.0031, A5s:0.0003, A6s:0.0047, A7s:0.0005, A8s:0.0489, ATs:0.0001, AJs:0.0879, AQs:0.046, AKs:0.3111, AA:0.0003"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "3bet 8bb",
      "3bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.4887, 32s:0.0001, 33:0.5908, 53o:0.0001, A3o:0.0001, 43s:0.0001, 44:0.2874, Q4o:0.0002, 52s:0.0181, 53s:0.0002, 54s:0.0001, 55:0.1602, 65o:0.4852, A5o:0.0001, 62s:0.0022, 63s:0.0001, 64s:0.0902, 65s:0.0031, 66:0.7959, 76o:0.0001, 74s:0.0085, 75s:0.1931, 76s:0.056, 77:0.3025, 97o:0.0001, A7o:0.0003, 84s:0.0001, 85s:0.1968, 86s:0.0017, 87s:0.0001, 88:0.0004, 92s:0.0003, 95s:0.2639, 96s:0.1559, 97s:0.0001, 99:0.038, T9o:0.0001, Q9o:0.0005, A9o:0.0128, T4s:0.0051, T5s:0.0001, T6s:0.0034, T7s:0.485, T8s:0.0494, T9s:0.052, TT:0.0004, KTo:0.0645, ATo:0.0923, J4s:0.0001, J6s:0.075, J7s:0.165, J8s:0.1068, JTs:0.4532, JJ:0.0004, QJo:0.001, KJo:0.0003, AJo:0.2077, Q2s:0.0001, Q3s:0.0004, Q5s:0.0029, Q6s:0.0013, Q7s:0.4736, Q8s:0.0101, Q9s:0.006, QTs:0.297, QJs:0.2699, QQ:0.0129, KQo:0.453, AQo:0.0004, K2s:0.015, K3s:0.0001, K4s:0.2925, K5s:0.1862, K7s:0.0297, K8s:0.0107, K9s:0.0002, KTs:0.0006, KJs:0.1069, KQs:0.2877, KK:0.004, AKo:0.0007, A3s:0.1932, A4s:0.0706, A5s:0.0045, A6s:0.1041, A7s:0.2413, A8s:0.0038, A9s:0.0017, ATs:0.0024, AJs:0.2586, AQs:0.0008, AKs:0.052, AA:0.0007"
      },
      {
        "action": "3bet 8bb",
        "min": 0.0001,
        "range": "A2o:0.0751, 33:0.0286, T3o:0.0532, 44:0.0175, A4o:0.0827, 55:0.0984, 65o:0.0024, 62s:0.023, 63s:0.0096, 64s:0.0024, 66:0.0002, A6o:0.0543, 72s:0.0001, 75s:0.0002, 76s:0.0032, 77:0.0004, A7o:0.0549, 82s:0.0158, 85s:0.0002, 86s:0.0001, 88:0.0041, K8o:0.0694, 92s:0.3225, 96s:0.1628, 98s:0.0287, 99:0.0272, A9o:0.1458, T4s:0.1757, T5s:0.0162, T6s:0.0006, T7s:0.0043, T8s:0.0727, TT:0.0662, QTo:0.0458, ATo:0.2051, J2s:0.0137, J3s:0.1717, J5s:0.0298, J6s:0.0002, J7s:0.0088, J8s:0.0208, J9s:0.0002, JTs:0.008, JJ:0.012, AJo:0.184, Q2s:0.0123, Q3s:0.0025, Q5s:0.0116, Q6s:0.261, Q7s:0.0035, Q8s:0.0014, Q9s:0.0098, QJs:0.009, QQ:0.024, KQo:0.0289, AQo:0.0013, K2s:0.0834, K3s:0.2604, K4s:0.0211, K5s:0.0579, K6s:0.002, K8s:0.0064, KTs:0.0002, KJs:0.0175, KQs:0.0398, KK:0.952, AKo:0.0676, A3s:0.012, A4s:0.0919, A5s:0.0413, A6s:0.0111, A7s:0.098, A8s:0.0591, A9s:0.1428, ATs:0.3064, AJs:0.0666, AQs:0.5863, AKs:0.0021, AA:0.9812"
      },
      {
        "action": "3bet 12bb",
        "min": 0.0001,
        "range": "43s:0.0021, 44:0.0031, 63s:0.002, 75s:0.0075, 76s:0.2159, A7o:0.0006, 85s:0.0015, 86s:0.0078, 88:0.0047, 96s:0.0001, 98s:0.0001, K9o:0.042, TT:0.0173, J2s:0.1001, J3s:0.0039, J7s:0.0111, J9s:0.0069, JJ:0.0009, AJo:0.0065, Q6s:0.1118, Q8s:0.0002, Q9s:0.0278, QTs:0.0222, QJs:0.076, QQ:0.3204, KQo:0.0686, AQo:0.0336, K2s:0.0053, K3s:0.0042, K4s:0.0073, K5s:0.027, K7s:0.0181, K9s:0.0001, KJs:0.0001, KQs:0.0002, KK:0.0047, AKo:0.3517, A2s:0.0003, A3s:0.0087, A4s:0.0663, A5s:0.0002, A6s:0.3313, A7s:0.1776, A8s:0.0284, A9s:0.0001, ATs:0.0141, AJs:0.0213, AQs:0.0133, AKs:0.1416, AA:0.0176"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A2o:0.335, 32s:0.0002, 33:0.2108, A3o:0.0544, 42s:0.3286, 43s:0.0005, 44:0.0859, 52s:0.1039, 53s:0.0667, 54s:0.0058, 55:0.2072, 62s:0.0019, 63s:0.0365, 65s:0.0104, 66:0.0263, A6o:0.0001, 72s:0.0013, 74s:0.0455, 75s:0.0167, 76s:0.0346, 77:0.2445, K7o:0.0572, A7o:0.0483, 85s:0.2044, 86s:0.0001, 87s:0.0759, 88:0.9368, J8o:0.001, 92s:0.1209, 93s:0.0002, 95s:0.0249, 96s:0.0474, 97s:0.0001, 98s:0.3687, 99:0.843, K9o:0.055, A9o:0.1068, T2s:0.0008, T3s:0.0036, T5s:0.0001, T6s:0.0143, T7s:0.0012, T8s:0.1431, T9s:0.1422, TT:0.8967, JTo:0.0222, KTo:0.1231, ATo:0.3878, J2s:0.3047, J3s:0.0402, J6s:0.0265, J7s:0.0933, J8s:0.0003, J9s:0.2355, JTs:0.0462, JJ:0.9854, AJo:0.5241, Q2s:0.0133, Q3s:0.0961, Q4s:0.0396, Q5s:0.0287, Q6s:0.314, Q7s:0.0392, Q8s:0.0005, Q9s:0.3126, QTs:0.3067, QJs:0.2663, QQ:0.6417, KQo:0.2194, AQo:0.9575, K2s:0.6642, K3s:0.0033, K4s:0.3392, K5s:0.1107, K6s:0.0908, K7s:0.1978, K8s:0.5748, K9s:0.0006, KTs:0.0291, KJs:0.2599, KQs:0.5853, KK:0.0393, AKo:0.5799, A2s:0.9402, A3s:0.1035, A4s:0.1703, A5s:0.6078, A6s:0.2152, A7s:0.0104, A8s:0.3816, A9s:0.3688, ATs:0.1201, AJs:0.5625, AQs:0.3991, AKs:0.8041, AA:0.0005"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0013, 66:0.318, 77:0.9877, 88:0.9998, 99, A9o:0.0029, TT, ATo, JJ, AJo, QJs:0.0084, QQ, AQo, KTs:0.0001, KJs:0.0006, KQs:0.0161, KK, AKo, A2s:0.2066, A3s:0.8282, A4s:0.0001, A7s:0.0002, A8s:0.4383, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "A2o:0.0048, 33:0.0005, A3o:0.0487, 43s:0.3476, 44:0.0317, A4o:0.9573, 53s:0.9856, 54s, 55:0.0272, K5o:0.1062, A5o:0.5874, 64s:0.9998, 65s, 66:0.8987, K6o:0.545, A6o:0.0727, 74s:0.0094, 75s:0.9997, 76s, 77:0.8888, 87o:0.0109, K7o:0.891, A7o:0.3047, 85s:0.9995, 86s, 87s, 88:0.9997, 98o:0.0104, T8o:0.9994, J8o:0.9993, Q8o:0.9941, K8o:0.7679, A8o:0.9866, 95s:0.9973, 96s:0.9999, 97s:0.9999, 98s, 99, T9o, J9o, Q9o, K9o:0.7484, A9o:0.9998, T4s:0.3313, T5s:0.9995, T6s, T7s, T8s, T9s, TT:0.9996, JTo, QTo, KTo, ATo:0.9962, J2s:0.9506, J3s:0.99, J4s:0.9996, J5s:0.9994, J6s, J7s:0.9999, J8s:0.9999, J9s:0.9999, JTs:0.9996, QJo:0.7454, KJo:0.9162, Q2s:0.9995, Q3s, Q4s:0.9999, Q5s, Q6s:0.9999, Q7s, Q8s:0.9996, Q9s:0.9973, QTs:0.9997, QJs:0.0041, KQo:0.7007, K2s:0.9997, K3s:0.7785, K4s:0.9988, K5s:0.9921, K6s:0.0801, K7s:0.9364, K8s:0.9998, K9s:0.9311, KTs:0.8845, KJs:0.3481, KQs:0.0975, A2s:0.7834, A3s:0.9577, A4s:0.8934, A5s:0.4804, A6s:0.1771, A7s:0.0202, A8s:0.9888, A9s:0.9995, ATs:0.9942"
      },
      {
        "action": "3bet 9bb",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.9952, K3o:0.0011, A3o:0.9512, K4o:0.5563, A4o:0.0345, Q5o:0.0001, K5o:0.5048, A5o:0.0006, K6o:0.049, A6o:0.5639, K7o:0.0965, A7o:0.536, K8o:0.232, A8o:0.0132, K9o:0.2516, A9o:0.0001, QQ:0.0002, KK, AKo:0.9593, AJs:0.0057, AKs, AA"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, 33:0.9995, A3o:0.0002, 44:0.9683, A4o:0.0082, 55:0.9728, A5o:0.4119, 66:0.1013, A6o:0.3634, 77:0.1112, A7o:0.1592, 88:0.0003, A8o:0.0002, A9o:0.0001, TT:0.0004, ATo:0.0038, J7s:0.0001, J8s:0.0001, J9s:0.0001, JTs:0.0004, JJ, QJo:0.2546, KJo:0.0838, AJo, Q6s:0.0001, Q8s:0.0003, Q9s:0.0027, QTs:0.0003, QJs:0.9959, QQ:0.9998, KQo:0.2993, AQo, K2s:0.0003, K3s:0.2215, K4s:0.0012, K5s:0.0079, K6s:0.9199, K7s:0.0636, K8s:0.0002, K9s:0.0689, KTs:0.1155, KJs:0.6519, KQs:0.9025, AKo:0.0407, A2s:0.2166, A3s:0.0423, A4s:0.1066, A5s:0.5196, A6s:0.8229, A7s:0.9798, A8s:0.0112, A9s:0.0005, ATs:0.0058, AJs:0.9943, AQs"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0012, 77:0.6136, 88, 99, TT, ATo, JJ, AJo, QQ, AQo, KK, AKo, A8s:0.0005, A9s:0.3315, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@8.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A5o:0.0114, 65s:0.0354, A6o:0.0598, 75s:0.0026, 76s:0.0147, A7o:0.0277, 85s:0.0108, 86s:0.0996, 87s:0.0114, A8o:0.3715, 98s:0.0313, A9o:0.2412, T8s:0.0058, T9s:0.0181, JTo:0.3982, QTo:0.0363, KTo:0.0126, ATo:0.0044, J7s:0.0093, J8s:0.4498, J9s:0.1088, JTs:0.1892, JJ:0.0193, QJo:0.04, KJo:0.0096, Q8s:0.2836, QJs:0.0033, KQo:0.001, K5s:0.1081, K6s:0.0819, K7s:0.2456, K8s:0.3507, K9s:0.47, KTs:0.1268, KJs:0.206, KQs:0.0768, A2s:0.0284, A3s:0.0004, A6s:0.031, A7s:0.0002, A8s:0.247, A9s:0.1174, AA:0.0498"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22, A2o:0.0308, 33, A3o:0.908, 43s:0.0022, 44, A4o:0.9671, 52s:0.0001, 53s:0.0874, 54s:0.971, 55, A5o:0.9861, 64s:0.1436, 65s:0.9402, 66, A6o:0.847, 74s:0.0351, 75s:0.8937, 76s:0.9763, 77, A7o:0.951, 84s:0.0007, 85s:0.128, 86s:0.6506, 87s:0.9644, 88, A8o:0.5457, 95s:0.0015, 96s:0.1671, 97s:0.9874, 98s:0.9523, 99, T9o:0.0632, A9o:0.7509, T7s:0.8815, T8s:0.9345, T9s:0.9819, TT, JTo:0.3871, QTo:0.7881, KTo:0.0226, ATo:0.9956, J6s:0.0004, J7s:0.2007, J8s:0.2688, J9s:0.8912, JTs:0.8108, JJ:0.9807, QJo:0.2194, KJo:0.0002, AJo, Q2s:0.0001, Q4s:0.0349, Q5s:0.3086, Q6s:0.2008, Q7s:0.5927, Q8s:0.6627, Q9s, QTs:0.9999, QJs:0.9967, QQ, KQo:0.0927, AQo, K2s:0.0002, K3s:0.0207, K4s:0.0591, K5s:0.1134, K6s:0.1982, K7s:0.5102, K8s:0.075, K9s:0.5213, KTs:0.8732, KJs:0.794, KQs:0.9232, KK, AKo, A2s:0.9716, A3s:0.9996, A4s, A5s, A6s:0.969, A7s:0.9998, A8s:0.753, A9s:0.8826, ATs, AJs, AQs, AKs, AA:0.9502"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|BB:3BET@8|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0002, 55:0.0315, 66, 77, 88, 99, TT, ATo, JJ, AJo, QJs:0.0602, QQ, KQo:0.0001, AQo, KJs:0.0106, KQs, KK, AKo, A7s:0.0001, A8s:0.0448, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@24.75|BB:CALL@23.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0372, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@8|BB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKs:0.6346, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@8|BB:4BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0002, TT:0.132, JJ:0.9069, QQ, AQo:0.0022, KK, AKo, A9s:0.0004, AJs:0.0004, AQs:0.7278, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:3BET@8|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.9562, 99, TT, JJ, AJo, QQ, AQo, KK, AKo, A9s:0.0003, ATs:0.9999, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0001, 52s:0.0001, 55:0.0013, 63s:0.0001, 66:0.0022, 75s:0.0019, 76s:0.0001, 77:0.0038, 82s:0.0003, 84s:0.0002, 86s:0.0001, 88:0.0105, 96s:0.0001, 99:0.0958, A9o:0.0005, T2s:0.0001, T3s:0.0001, T5s:0.0003, T9s:0.0002, TT:0.8827, KTo:0.0001, J3s:0.0004, J8s:0.0002, J9s:0.0017, JTs:0.0001, JJ:0.9984, Q3s:0.0023, Q6s:0.0002, QTs:0.0011, QQ:0.9992, KQo:0.0009, AQo:0.9988, K4s:0.0001, K5s:0.0002, K9s:0.0012, KTs:0.0001, KJs:0.0023, KQs:0.07, KK:0.9999, AKo:0.9974, A2s:0.0014, A5s:0.0012, A6s:0.0006, A7s:0.0015, A8s:0.0024, A9s:0.0009, ATs:0.2447, AJs:0.7962, AQs:0.9988, AKs:0.9888, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0192, TT, JJ, AJo:0.3162, QQ, AQo:0.9987, KK, AKo, ATs:0.0017, AJs:0.9744, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "72o:0.0002, J2o:0.0001, Q2o:0.001, K2o:0.0001, 32s:0.0007, 33:0.0005, 43o:0.0001, 63o:0.0004, J3o:0.0001, Q3o:0.0002, 42s:0.0149, 43s:0.0002, 44:0.0444, 74o:0.0001, 84o:0.0004, 94o:0.0001, J4o:0.0001, Q4o:0.0004, K4o:0.0001, A4o:0.0001, 52s:0.0004, 54s:0.0068, 55:0.0065, 95o:0.0002, J5o:0.0001, Q5o:0.0003, 62s:0.009, 63s:0.0002, 64s:0.0004, 65s:0.0003, 66:0.0004, 96o:0.0001, J6o:0.0004, Q6o:0.0001, A6o:0.0007, 74s:0.0006, 75s:0.0017, 76s:0.0002, 77:0.0161, A7o:0.0004, 82s:0.0001, 83s:0.0001, 84s:0.0016, 85s:0.0008, 86s:0.0001, 87s:0.0035, 88:0.204, 98o:0.0001, A8o:0.0001, 93s:0.0003, 95s:0.0071, 96s:0.0005, 98s:0.0688, T9o:0.0001, J9o:0.0002, Q9o:0.0001, K9o:0.0017, A9o:0.0016, T2s:0.0003, T3s:0.0004, T4s:0.0005, T5s:0.0003, T7s:0.0054, TT:0.0666, QTo:0.0001, KTo:0.0006, ATo:0.256, J3s:0.0039, J4s:0.0011, J5s:0.0039, J6s:0.1295, J7s:0.0204, J8s:0.0038, J9s:0.0027, JTs:0.0003, JJ:0.0438, AJo:0.0018, Q3s:0.0107, Q4s:0.0363, Q6s:0.004, Q7s:0.0292, Q8s:0.0001, Q9s:0.1872, QTs:0.0028, QJs:0.0585, QQ:0.0527, AQo:0.215, K2s:0.0001, K3s:0.0002, K4s:0.0753, K5s:0.0008, K6s:0.0008, K7s:0.001, K8s:0.0004, K9s:0.0023, KTs:0.0176, KJs:0.392, KQs:0.0211, KK:0.0001, AKo:0.0002, A2s:0.0001, A3s:0.0216, A5s:0.6988, A6s:0.0182, A7s:0.0023, A8s:0.0924, A9s:0.1655, ATs:0.067, AJs:0.0004, AQs:0.0231, AKs:0.0058, AA:0.5071"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.003, 32o:0.0001, 62o:0.0002, 92o:0.0001, T2o:0.0003, Q2o:0.0006, 32s:0.0187, 33:0.0372, 43o:0.0001, 53o:0.0002, 63o:0.0006, 73o:0.0001, 83o:0.0001, 93o:0.0001, K3o:0.0003, A3o:0.0001, 42s:0.0692, 43s:0.0001, 44:0.0134, 84o:0.0006, 94o:0.0002, T4o:0.0005, J4o:0.0001, K4o:0.003, A4o:0.0002, 52s:0.0199, 53s:0.0077, 54s:0.0668, 55:0.0435, 75o:0.0001, T5o:0.0001, J5o:0.0003, A5o:0.0001, 62s:0.0037, 63s:0.0001, 64s:0.0004, 65s:0.0004, 66:0.0114, 86o:0.0003, 96o:0.0006, Q6o:0.0001, K6o:0.0009, A6o:0.0037, 72s:0.0026, 73s:0.0004, 74s:0.0003, 75s:0.0067, 76s:0.002, 77:0.3697, 97o:0.0001, J7o:0.0009, Q7o:0.0009, K7o:0.0014, A7o:0.0004, 83s:0.0005, 84s:0.1586, 85s:0.0399, 86s:0.0425, 87s:0.0709, 88:0.2061, 98o:0.0001, T8o:0.0001, Q8o:0.0002, K8o:0.0001, A8o:0.0568, 92s:0.0001, 93s:0.0001, 94s:0.0001, 95s:0.0043, 96s:0.0008, 98s:0.139, 99:0.117, T9o:0.0001, Q9o:0.0001, K9o:0.0288, A9o:0.0054, T3s:0.0583, T4s:0.0114, T5s:0.0008, T6s:0.0874, T7s:0.0032, T8s:0.0694, T9s:0.2754, TT:0.1546, JTo:0.0021, QTo:0.0012, KTo:0.0001, ATo:0.1912, J2s:0.0001, J3s:0.0071, J4s:0.0001, J5s:0.0174, J6s:0.0015, J7s:0.0637, J8s:0.0937, J9s:0.005, JTs:0.0004, JJ:0.5846, QJo:0.0006, KJo:0.0017, AJo:0.1929, Q2s:0.0007, Q3s:0.0943, Q4s:0.0335, Q5s:0.0061, Q6s:0.0071, Q7s:0.0021, Q8s:0.0007, Q9s:0.3939, QTs:0.0357, QJs:0.4798, QQ:0.9319, KQo:0.2058, AQo:0.7529, K2s:0.0203, K4s:0.0163, K5s:0.2307, K6s:0.1046, K7s:0.2519, K8s:0.0118, K9s:0.1571, KTs:0.166, KJs:0.0415, KQs:0.6379, KK:0.9998, AKo:0.991, A2s:0.0012, A3s:0.0336, A4s:0.576, A5s:0.1137, A6s:0.0383, A7s:0.0154, A8s:0.1558, A9s:0.028, ATs:0.4236, AJs:0.8541, AQs:0.8956, AKs:0.989, AA:0.4929"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0003, 77:0.0044, 99:0.0077, T3s:0.0001, TT:0.052, JJ:0.6132, AJo:0.0372, Q8s:0.0001, QJs:0.0029, QQ:0.0079, AQo:0.0413, KTs:0.0001, A6s:0.008, A7s:0.0199, A8s:0.0349, A9s:0.1303, ATs:0.1488, AJs:0.1472, AQs:0.2861, AA:0.0072"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0062, 44:0.0043, 55:0.0119, 66:0.0121, 77:0.0117, 88:0.0104, 99:0.008, TT:0.2499, ATo:0.0375, JTs:0.0578, JJ:0.3868, QJo:0.007, AJo:0.1254, QTs:0.0473, QJs:0.1225, QQ:0.9921, KQo:0.0092, AQo:0.217, KTs:0.0039, KJs:0.0162, KQs:0.1411, KK, AKo, A2s:0.0553, A3s:0.0258, A4s:0.0001, A5s:0.0001, A6s:0.005, A8s:0.0033, A9s:0.001, ATs:0.0449, AJs:0.0944, AQs:0.2278, AKs, AA:0.9928"
      }
    ]
  },
  {
    "presetId": "BTN:OPEN@21|SB:CALL@20.5|BB:3BET@24.75",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32o:0.4087, 42o:0.4711, 52o:0.9999, 62o:0.1091, 72o:0.0014, 82o:0.0029, 92o:0.0109, T2o:0.0032, J2o:0.0072, Q2o:0.0029, K2o:0.6871, A2o, 32s, 33, 43o, 53o:0.9996, 63o, 73o:0.1072, 83o:0.009, 93o:0.0063, T3o:0.0066, J3o:0.0215, Q3o:0.0019, K3o:0.7122, A3o, 42s, 43s, 44, 54o, 64o, 74o, 84o:0.9998, 94o:0.0072, T4o:0.0099, J4o:0.04, Q4o:0.0018, K4o:0.7723, A4o, 52s, 53s, 54s, 55, 65o, 75o, 85o, 95o, T5o:0.0423, J5o:0.0098, Q5o:0.0025, K5o, A5o, 62s, 63s, 64s, 65s, 66, 76o, 86o, 96o, T6o, J6o:0.0098, Q6o:0.0294, K6o:0.9757, A6o, 72s, 73s, 74s, 75s, 76s, 77, 87o, 97o, T7o, J7o, Q7o:0.0044, K7o, A7o, 82s, 83s, 84s, 85s, 86s, 87s:0.9998, 88, 98o, T8o, J8o, Q8o:0.3704, K8o, A8o, 92s, 93s:0.9998, 94s, 95s, 96s, 97s, 98s, 99, T9o, J9o, Q9o, K9o, A9o, T2s, T3s, T4s, T5s, T6s, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J2s:0.9998, J3s, J4s, J5s:0.9999, J6s, J7s, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "K2o:0.0001, A2o:0.0002, 43o:0.0006, 53o:0.0002, 63o:0.0005, 73o:0.0001, 93o:0.0001, K3o:0.0002, A3o:0.0001, 43s:0.0005, 44:0.0003, 54o:0.0005, 84o:0.0002, Q4o:0.0001, A4o:0.0001, 53s:0.0001, 54s:0.0185, 85o:0.001, Q5o:0.0002, K5o:0.0001, A5o:0.0002, 62s:0.001, 65s:0.0005, 66:0.0036, 76o:0.0007, 86o:0.0002, 96o:0.0007, J6o:0.0002, K6o:0.001, 74s:0.0017, 75s:0.0001, 76s:0.0008, 77:0.0002, 87o:0.0001, 97o:0.0001, T7o:0.0023, Q7o:0.0001, A7o:0.0002, 82s:0.0054, 84s:0.0003, 85s:0.0015, 86s:0.006, 87s:0.0013, 88:0.0009, 98o:0.0001, Q8o:0.0005, K8o:0.0002, A8o:0.0003, 92s:0.001, 93s:0.0014, 95s:0.0002, 96s:0.0004, 97s:0.0012, 98s:0.0012, 99:0.0001, T9o:0.0018, J9o:0.0002, Q9o:0.0001, K9o:0.0003, A9o:0.0001, T2s:0.0007, T3s:0.0001, T5s:0.0031, T6s:0.0005, T8s:0.001, T9s:0.0012, TT:0.001, JTo:0.0002, ATo:0.0003, J2s:0.0005, J3s:0.0001, J4s:0.0035, J5s:0.0001, J6s:0.0001, J8s:0.0001, J9s:0.0012, JTs:0.0023, JJ:0.0019, KJo:0.0001, AJo:0.0001, Q2s:0.0036, Q3s:0.0005, Q4s:0.0019, Q6s:0.0011, Q8s:0.0001, Q9s:0.0006, QTs:0.0015, QJs:0.0004, QQ:0.0109, KQo:0.0008, K2s:0.0015, K3s:0.0074, K5s:0.0001, K7s:0.0001, K8s:0.0008, K9s:0.0094, KTs:0.0005, KJs:0.0012, KK:0.378, AKo:0.0012, A2s:0.0023, A3s:0.0006, A4s:0.0052, A5s:0.0005, A6s:0.0002, A8s:0.0075, A9s:0.004, ATs:0.0008, AJs:0.0024, AQs:0.0201, AKs:0.0162, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:CALL@18.5|BB:3BET@21",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32o, 42o, 52o, 62o, 72o, 82o, 92o, T2o, J2o, Q2o, K2o, A2o, 32s, 33, 43o, 53o, 63o, 73o, 83o, 93o, T3o, J3o, Q3o, K3o, A3o, 42s, 43s, 44, 54o, 64o, 74o, 84o, 94o, T4o, J4o, Q4o, K4o, A4o, 52s, 53s, 54s, 55, 65o, 75o, 85o, 95o, T5o, J5o, Q5o, K5o, A5o, 62s, 63s, 64s, 65s, 66, 76o, 86o, 96o, T6o, J6o, Q6o, K6o, A6o, 72s, 73s, 74s, 75s, 76s, 77, 87o, 97o, T7o, J7o, Q7o, K7o, A7o, 82s, 83s, 84s, 85s, 86s, 87s, 88, 98o, T8o, J8o, Q8o, K8o, A8o, 92s, 93s, 94s, 95s, 96s, 97s, 98s, 99, T9o, J9o, Q9o, K9o, A9o, T2s, T3s, T4s, T5s, T6s, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J2s:0.9999, J3s, J4s, J5s, J6s, J7s, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:CALL@18.5|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 32o, 42o, 52o, 62o, 72o, 82o, 92o, T2o, J2o, Q2o, K2o, A2o, 32s, 33, 43o, 53o, 63o, 73o, 83o, 93o, T3o, J3o, Q3o, K3o, A3o, 42s, 43s, 44, 54o, 64o, 74o, 84o, 94o, T4o, J4o, Q4o, K4o, A4o, 52s, 53s, 54s, 55, 65o, 75o, 85o, 95o, T5o, J5o, Q5o, K5o, A5o, 62s, 63s, 64s, 65s, 66, 76o, 86o, 96o, T6o, J6o, Q6o, K6o, A6o, 72s, 73s, 74s, 75s, 76s, 77, 87o, 97o, T7o, J7o, Q7o, K7o, A7o, 82s, 83s, 84s, 85s, 86s, 87s, 88, 98o, T8o, J8o, Q8o, K8o, A8o, 92s, 93s, 94s, 95s, 96s, 97s, 98s, 99, T9o, J9o, Q9o, K9o, A9o, T2s, T3s, T4s, T5s, T6s, T7s, T8s, T9s, TT, JTo, QTo, KTo, ATo, J2s, J3s, J4s, J5s, J6s, J7s, J8s, J9s, JTs, JJ, QJo, KJo, AJo, Q2s, Q3s, Q4s, Q5s, Q6s, Q7s, Q8s, Q9s, QTs, QJs, QQ, KQo, AQo, K2s, K3s, K4s, K5s, K6s, K7s, K8s, K9s, KTs, KJs, KQs, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|BTN:CALL@18.5|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0006, 32o:0.0001, 52o:0.0006, 82o:0.0003, 92o:0.0001, T2o:0.0002, Q2o:0.0001, 32s:0.0003, 53o:0.0001, K3o:0.0006, A3o:0.0001, 42s:0.0024, 44:0.0005, 64o:0.0002, 84o:0.0002, J4o:0.0002, Q4o:0.0003, K4o:0.0002, A4o:0.0001, 52s:0.0009, 53s:0.0025, 54s:0.0031, 75o:0.0003, 85o:0.0029, J5o:0.0002, K5o:0.0004, A5o:0.0003, 63s:0.0029, 64s:0.0007, 66:0.0011, 86o:0.0003, 96o:0.0002, J6o:0.0001, 74s:0.0013, 75s:0.0027, 76s:0.009, 97o:0.0006, T7o:0.003, J7o:0.0001, Q7o:0.0004, K7o:0.0001, A7o:0.0016, 82s:0.0032, 83s:0.0015, 84s:0.0008, 85s:0.0001, 86s:0.0024, 87s:0.0129, 88:0.0001, 98o:0.0001, T8o:0.0003, J8o:0.0002, Q8o:0.0007, K8o:0.0006, A8o:0.0003, 92s:0.0007, 97s:0.0047, 99:0.0006, T9o:0.0002, J9o:0.0002, K9o:0.0001, A9o:0.0002, T3s:0.0019, T4s:0.0001, T5s:0.0005, T7s:0.004, T8s:0.0166, T9s:0.002, TT:0.0009, KTo:0.0003, J3s:0.0027, J4s:0.0024, J5s:0.0002, J8s:0.0008, J9s:0.0005, JTs:0.0001, JJ:0.0009, QJo:0.0004, AJo:0.0001, Q2s:0.0139, Q6s:0.0018, Q7s:0.0001, Q8s:0.0042, Q9s:0.0197, QJs:0.0037, QQ:0.0053, KQo:0.0006, K2s:0.0001, K3s:0.0087, K4s:0.0009, K5s:0.0001, K6s:0.0002, K7s:0.0044, K9s:0.0048, KTs:0.0007, KJs:0.0019, KQs:0.0002, KK:0.914, AKo:0.0063, A2s:0.0014, A3s:0.0001, A5s:0.0593, A7s:0.003, A8s:0.0378, A9s:0.002, ATs:0.1521, AJs:0.009, AQs:0.0136, AKs:0.0002, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@18.5|SB:CALL@18|BB:3BET@24.75",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0035, 32o:0.0001, 42o:0.0005, 52o:0.0001, 62o:0.0003, 72o:0.0003, 82o:0.0002, 92o:0.0003, T2o:0.0002, J2o:0.0002, Q2o:0.0003, K2o:0.0012, A2o, 32s:0.0002, 33:0.0364, 43o:0.0011, 53o:0.0003, 63o:0.0007, 73o:0.0003, 83o:0.0004, 93o:0.0004, T3o:0.0004, J3o:0.0003, Q3o:0.0003, K3o:0.0011, A3o, 42s:0.0016, 43s:0.9798, 44:0.1299, 54o:0.0014, 64o:0.0009, 74o:0.0005, 84o:0.0001, 94o:0.0004, T4o:0.0012, J4o:0.0002, Q4o:0.0005, K4o:0.0005, A4o, 52s:0.2153, 53s:0.2878, 54s:0.974, 55:0.766, 65o:0.002, 75o:0.0017, 85o:0.0009, 95o:0.0004, T5o:0.0003, J5o:0.0003, Q5o:0.0003, K5o:0.0009, A5o, 62s:0.004, 63s:0.9214, 64s:0.9938, 65s:0.9999, 66:0.6122, 76o:0.0245, 86o:0.0004, 96o:0.002, T6o:0.0004, J6o:0.0003, Q6o:0.0003, K6o:0.0014, A6o:0.9875, 72s:0.0124, 73s:0.003, 74s:0.0306, 75s:0.9949, 76s, 77:0.5334, 87o:0.0125, 97o:0.0023, T7o:0.0006, J7o:0.0003, Q7o:0.0007, K7o:0.0006, A7o, 82s:0.0034, 83s:0.0012, 84s:0.0211, 85s:0.2371, 86s:0.9775, 87s, 88:0.4688, 98o:0.0041, T8o:0.0021, J8o:0.0005, Q8o:0.0007, K8o:0.0021, A8o, 92s:0.0021, 93s:0.0038, 94s:0.0014, 95s:0.0027, 96s:0.3785, 97s:0.9979, 98s:0.9967, 99:0.8497, T9o:0.0196, J9o:0.0003, Q9o:0.0007, K9o:0.0024, A9o, T2s:0.0004, T3s:0.003, T4s:0.0047, T5s:0.0121, T6s:0.0517, T7s:0.0931, T8s:0.9912, T9s:0.999, TT:0.9791, JTo:0.0022, QTo:0.0017, KTo:0.0031, ATo, J2s:0.0007, J3s:0.0012, J4s:0.0008, J5s:0.0087, J6s:0.0005, J7s:0.0036, J8s:0.0096, J9s:0.1194, JTs:0.1754, JJ:0.5583, QJo:0.0014, KJo:0.0016, AJo, Q2s:0.001, Q3s:0.002, Q4s:0.0025, Q5s:0.0177, Q6s:0.0067, Q7s:0.0031, Q8s:0.007, Q9s:0.0126, QTs:0.2699, QJs:0.0296, QQ, KQo:0.006, AQo, K2s:0.4816, K3s:0.9151, K4s:0.8035, K5s:0.9799, K6s, K7s:0.1791, K8s:0.7077, K9s:0.9183, KTs:0.999, KJs, KQs:0.7421, KK, AKo, A2s, A3s, A4s, A5s:0.9992, A6s:0.999, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@21|BB:CALL@20",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0516, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0017, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "43s:0.0001, 44:0.0001, 53s:0.0001, 54s:0.0001, 76s:0.0001, 77:0.0001, 85s:0.0001, 87s:0.0001, 88:0.0001, 96s:0.0001, T5s:0.0001, T7s:0.0001, J4s:0.0001, JJ:0.0001, Q4s:0.0001, Q5s:0.0001, Q9s:0.0001, QQ:0.0244, K8s:0.0001, KK:0.9998, AKo:0.0001, A2s:0.0001, A3s:0.0001, A4s:0.0002, A5s:0.001, A7s:0.0004, A8s:0.0001, AKs:0.0011, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0003, KK, AKo:0.001, AQs:0.0001, AKs:0.8272, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|BB:4BET@21",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0006, 88:0.0021, 99:0.1894, TT:0.6611, JJ, QQ, AQo:0.0002, KK, AKo, AJs:0.0004, AQs:0.9996, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|CO:4BET@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0002, 99:0.9345, TT, JJ, QQ, AQo, KK, AKo, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, AKs:0.0328, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 66:0.0476, 77:0.1032, 88:0.3515, 99:0.3256, TT:0.8819, JJ:0.7474, QQ, KK, AKo, ATs:0.0002, AQs:0.0251, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54o:0.0001, 55:0.0001, 84s:0.0001, 88:0.0001, 96s:0.0001, 97s:0.0001, 99:0.0041, J2s:0.0001, JJ:0.0003, AJo:0.0001, Q3s:0.0001, Q6s:0.0001, Q7s:0.0001, QQ:0.0011, K2s:0.0001, K3s:0.0002, K8s:0.0002, KTs:0.0001, KJs:0.0001, KK, AKo:0.0093, A3s:0.0003, A5s:0.0022, A6s:0.0173, A7s:0.0002, AQs:0.0005, AKs:0.3049, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 77:0.0027, 88:0.0001, 99:0.0048, TT:0.9214, JTs:0.0001, JJ:0.9991, QQ, AQo:0.955, K7s:0.0001, K9s:0.0001, KTs:0.0001, KK, AKo:0.9999, A6s:0.0001, A9s:0.0004, ATs:0.0003, AJs:0.3081, AQs:0.9977, AKs:0.9993, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@21",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0008, TT:0.9058, JJ, QQ, AQo:0.9829, KK, AKo, AJs:0.1298, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 44:0.0002, 88:0.0001, TT:0.0011, ATo:0.0001, JJ:0.0012, Q4s:0.0001, QQ:0.002, AQo:0.0018, K3s:0.0002, K8s:0.0002, KJs:0.0001, ATs:0.0013, AJs:0.0004, AQs:0.0028, AKs:0.0001, AA:0.0081"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, A3o:0.0001, 44:0.0267, 52s:0.0001, 55:0.0972, 64s:0.0002, 66:0.0941, 76s:0.0731, 77:0.2298, 82s:0.0001, 88:0.6648, 97s:0.0085, 98s:0.0025, 99:0.8516, T3s:0.0001, T8s:0.0018, T9s:0.0074, TT:0.4729, J3s:0.0001, J7s:0.0001, JJ:0.9842, AJo:0.0002, Q2s:0.0001, Q4s:0.0116, Q6s:0.0001, Q7s:0.0001, Q9s:0.0002, QTs:0.1853, QJs:0.1276, QQ:0.998, KQo:0.0687, AQo:0.3105, K2s:0.0007, K3s:0.0002, K4s:0.044, K5s:0.0001, K6s:0.2524, K7s:0.0488, K8s:0.1313, K9s:0.4752, KTs:0.0813, KJs:0.2977, KQs:0.8747, KK, AKo:0.9999, A2s:0.0228, A3s:0.0065, A5s:0.1507, A6s:0.0535, A7s:0.0668, A8s:0.0775, A9s:0.356, ATs:0.0842, AJs:0.0598, AQs:0.9951, AKs:0.9998, AA:0.9919"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.013, 88:0.022, TT:0.0818, AQo:0.0205, KJs:0.0088, KQs:0.0041, ATs:0.0047, AJs:0.0954, AQs:0.2154, AA:0.3106"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.006, 33:0.0001, 44:0.0278, 55:0.0829, 66:0.0735, 77:0.0506, 88:0.0237, 99:0.3739, TT:0.6346, J9s:0.0001, JTs:0.0001, JJ, AJo:0.0001, QTs:0.0001, QJs:0.1456, QQ, KQo:0.2533, AQo:0.3454, K2s:0.0069, K3s:0.0002, K5s:0.0205, K6s:0.0039, K9s:0.031, KTs:0.0347, KJs:0.4331, KQs:0.7611, KK, AKo, A2s:0.0222, A3s:0.0043, A4s:0.002, A5s:0.0004, A7s:0.0045, A9s:0.0454, AJs:0.1509, AQs:0.7742, AKs, AA:0.6894"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0004, 77:0.0003, 88:0.0021, TT:0.4906, JJ:0.9909, AJo:0.0002, QTs:0.0001, QQ, AQo:0.3203, KTs:0.0001, KJs:0.0001, KK, AKo:0.9998, A2s:0.0001, ATs:0.0005, AJs:0.0026, AQs:0.9894, AKs:0.9982, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, TT:0.6991, JJ, QQ, AQo:0.5945, KK, AKo, ATs:0.0001, AQs:0.9055, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0031, K4o:0.0003, 52s:0.0001, 53s:0.0039, 65s:0.0001, 66:0.0014, 75s:0.0001, 76s:0.0004, 77:0.0006, 87o:0.0001, 97o:0.0001, 82s:0.0001, 83s:0.0001, 84s:0.0012, 85s:0.001, 86s:0.0004, 87s:0.0004, 88:0.0125, A8o:0.0001, 94s:0.0006, 95s:0.0001, 96s:0.0012, 97s:0.0002, 98s:0.0011, 99:0.1079, T3s:0.0001, T4s:0.0002, T5s:0.0003, T7s:0.0001, TT:0.4131, ATo:0.0001, J2s:0.0001, J4s:0.0002, J5s:0.0003, J6s:0.0002, J8s:0.0006, J9s:0.0001, JJ:0.7683, QJo:0.0003, AJo:0.0003, Q3s:0.0001, Q8s:0.0005, Q9s:0.0001, QTs:0.0009, QJs:0.0001, QQ:0.9991, KQo:0.0002, AQo:0.0846, K2s:0.0002, K3s:0.0002, K4s:0.0007, K5s:0.0005, K7s:0.0022, K8s:0.0005, KTs:0.0007, KJs:0.0001, KQs:0.0001, KK:0.9998, AKo:0.8615, A2s:0.0001, A3s:0.0001, A4s:0.0014, A5s:0.0001, A7s:0.0008, A8s:0.0016, A9s:0.0111, ATs:0.0022, AJs:0.1123, AQs:0.0261, AKs:0.8911, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0001, 76s:0.0001, 88:0.0001, 98s:0.0011, 99:0.0003, T6s:0.0001, T8s:0.0001, TT:0.0005, J3s:0.0004, JTs:0.0001, QQ:0.0092, AQo:0.0045, K4s:0.0031, K5s:0.0003, K7s:0.0033, K8s:0.0003, KQs:0.001, KK:0.0024, A2s:0.002, A3s:0.0004, A6s:0.0006, A7s:0.0002, A8s:0.0029, A9s:0.0062, AJs:0.025, AQs:0.0373, AKs:0.0006, AA:0.1105"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.245, 33:0.0505, 44:0.1257, 54s:0.0158, 55:0.7993, A5o:0.0049, 63s:0.0002, 65s:0.0045, 66:0.5166, 76s:0.027, 77:0.3978, 86s:0.0145, 87s:0.0558, 88:0.5104, 98s:0.0037, 99:0.8109, T9s:0.1713, TT:0.7963, ATo:0.0098, J5s:0.0086, J6s:0.0134, J8s:0.0028, J9s:0.02, JTs:0.0007, JJ:0.9976, AJo:0.0155, Q2s:0.0015, Q3s:0.0013, Q5s:0.0015, Q9s:0.0924, QTs:0.0094, QJs:0.0437, QQ:0.9908, AQo:0.2912, K2s:0.0175, K4s:0.1368, K5s:0.0216, K7s:0.0129, K8s:0.0027, K9s:0.0802, KJs:0.344, KQs:0.1424, KK:0.9976, AKo:0.9996, A2s:0.1021, A3s:0.2202, A4s:0.4051, A5s:0.3808, A6s:0.0465, A7s:0.2553, A8s:0.0951, A9s:0.2281, ATs:0.0109, AJs:0.516, AQs:0.9503, AKs:0.9991, AA:0.8895"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0124, 88:0.0141, 99:0.0004, TT:0.0004, AQo:0.0649, KQs:0.0001, ATs:0.0003, AJs:0.0442, AQs:0.1697, AA:0.4478"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0612, 33:0.0247, 44:0.0721, 55:0.1929, 66:0.1218, 77:0.3326, 88:0.195, 99:0.3341, TT:0.5004, JJ, QJs:0.0167, QQ, AQo:0.5027, K5s:0.0033, K6s:0.0157, KTs:0.011, KJs:0.1038, KQs:0.1467, KK, AKo, A3s:0.0014, A4s:0.0346, A5s:0.0219, A6s:0.0033, A7s:0.0161, A8s:0.0004, A9s:0.0017, ATs:0.0054, AJs:0.0646, AQs:0.8302, AKs, AA:0.5522"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 24.75bb"
    ],
    "bands": [
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.0011, 33:0.0001, 42s:0.0218, 43s:0.0003, 44:0.0134, A4o:0.0067, 52s:0.0003, 54s:0.0857, 55:0.0005, 63s:0.0004, 64s:0.0006, 65s:0.0791, 66:0.0002, 73s:0.0003, 74s:0.1818, 75s:0.3185, 76s:0.0001, 77:0.1151, 97o:0.0001, 83s:0.0002, 85s:0.0018, 86s:0.0001, 87s:0.0616, 88:0.0556, 92s:0.0656, 95s:0.0025, 97s:0.0002, 98s:0.0654, 99:0.4214, J9o:0.0001, A9o:0.0001, T2s:0.0009, T3s:0.0002, T4s:0.0001, T6s:0.001, T7s:0.0023, T9s:0.0031, TT:0.0195, JTo:0.0107, KTo:0.0012, J2s:0.0001, J3s:0.0003, J5s:0.0062, J6s:0.0031, J7s:0.0001, J8s:0.0177, J9s:0.0154, JTs:0.0003, JJ:0.9991, QJo:0.0001, KJo:0.0013, Q2s:0.0057, Q3s:0.0031, Q7s:0.0244, Q8s:0.0001, Q9s:0.384, QTs:0.0183, QQ:0.9989, AQo:0.0626, K2s:0.0002, K3s:0.0005, K4s:0.1886, K5s:0.0623, K6s:0.003, K7s:0.0718, K8s:0.3608, K9s:0.0755, KTs:0.1604, KJs:0.619, KQs:0.7553, KK:0.9999, AKo:0.9611, A3s:0.7205, A4s:0.5068, A5s:0.0187, A6s:0.3133, A7s:0.0629, A8s:0.1073, A9s:0.3942, ATs:0.1508, AJs:0.5987, AQs:0.7867, AKs:0.8138, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@24.75|BB:CALL@23.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0088, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@8|BB:4BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0003, KK, AKo:0.5016, AKs:0.9982, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@8|BB:4BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 88:0.0001, 99:0.0001, TT:0.5492, JJ, QQ, AQo:0.001, KK, AKo, AJs:0.0001, AQs:0.9932, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:3BET@8|CO:4BET@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0006, 66:0.0003, 77:0.0203, 88, 99, TT, JJ, AJo, QQ, AQo, KQs:0.936, KK, AKo, ATs:0.9999, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "75s:0.0001, 77:0.329, 88:0.421, 96s:0.0001, 99:0.9992, TT, ATo:0.0022, JJ:0.9995, AJo:0.8808, Q8s:0.0001, Q9s:0.0001, QJs:0.0001, QQ, AQo:0.9995, K3s:0.0001, K5s:0.0001, KTs:0.0007, KJs:0.0058, KQs:0.9098, KK, AKo:0.9999, A2s:0.0001, A3s:0.0002, A5s:0.0003, A6s:0.0002, A7s:0.0001, A8s:0.0001, A9s:0.0022, ATs:0.719, AJs:0.9926, AQs:0.9969, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0513, TT, JJ, QQ, AQo:0.9998, KK, AKo, AJs:0.9674, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0001, 55:0.0001, 63s:0.0003, 65s:0.0006, 77:0.0026, 88:0.0017, A8o:0.0001, 95s:0.0001, 99:0.0002, A9o:0.0006, T2s:0.0003, T6s:0.0006, T8s:0.0008, T9s:0.0001, TT:0.0258, J4s:0.0001, JTs:0.0001, JJ:0.0066, AJo:0.0004, Q3s:0.0016, Q4s:0.0001, Q5s:0.0002, Q6s:0.0008, Q7s:0.0004, Q8s:0.0002, Q9s:0.0063, QJs:0.0004, QQ:0.0024, AQo:0.0005, K4s:0.0001, K7s:0.0003, K9s:0.0013, KTs:0.0078, KJs:0.0001, KQs:0.2414, KK:0.0001, AKo:0.0002, A3s:0.0002, A4s:0.0001, A6s:0.0115, A7s:0.0011, A8s:0.0002, A9s:0.0124, ATs:0.0079, AJs:0.0042, AQs:0.0121, AKs:0.0028, AA:0.0375"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3716, 92o:0.0001, 33:0.0625, A3o:0.0029, 43s:0.0367, 44:0.0226, 55:0.4932, K5o:0.006, A5o:0.0833, 63s:0.1191, 65s:0.0346, 66:0.4153, 72s:0.0001, 73s:0.0063, 74s:0.0109, 76s:0.0685, 77:0.6091, 83s:0.0008, 85s:0.0006, 87s:0.0228, 88:0.5497, K8o:0.0034, A8o:0.0002, 95s:0.0065, 97s:0.0924, 98s:0.3016, 99:0.6594, T9o:0.0001, A9o:0.0286, T2s:0.0016, T5s:0.0154, T6s:0.002, T7s:0.1567, T8s:0.0049, T9s:0.0896, TT:0.9445, JTo:0.0009, ATo:0.0609, J2s:0.0074, J4s:0.0001, J8s:0.0618, J9s:0.4839, JTs:0.1279, JJ:0.9153, AJo:0.5609, Q2s:0.0005, Q3s:0.0003, Q4s:0.0003, Q5s:0.0297, Q6s:0.0097, Q7s:0.0607, Q8s:0.0083, Q9s:0.1219, QTs:0.1707, QJs:0.2302, QQ:0.9976, KQo:0.3576, AQo:0.9973, K2s:0.0007, K3s:0.0026, K4s:0.0272, K5s:0.3039, K7s:0.0762, K8s:0.0243, K9s:0.1861, KTs:0.0497, KJs:0.5096, KQs:0.2676, KK:0.9999, AKo:0.9997, A2s:0.1999, A3s:0.4443, A4s:0.5572, A5s:0.4044, A6s:0.1779, A7s:0.0955, A8s:0.1443, A9s:0.4816, ATs:0.0125, AJs:0.818, AQs:0.9857, AKs:0.9971, AA:0.9625"
      }
    ]
  },
  {
    "presetId": "CO:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0002, 99:0.0027, TT:0.0156, JJ:0.0058, QQ:0.0003, AQo:0.0004, KJs:0.3408, KQs:0.3191, KK:0.0001, ATs:0.0713, AJs:0.1826, AQs:0.0005, AA:0.0442"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0177, 33:0.021, 44:0.0189, 54s:0.0002, 55:0.0309, 66:0.0305, 77:0.0221, 88:0.031, 99:0.0312, TT:0.9043, ATo:0.0433, JJ:0.9942, AJo:0.2187, QTs:0.0177, QJs:0.1369, QQ:0.9997, KQo:0.0737, AQo:0.9611, K4s:0.0003, KTs:0.034, KJs:0.0913, KQs:0.0983, KK:0.9999, AKo, A2s:0.0181, A3s:0.0255, A4s:0.0191, A5s:0.1334, A6s:0.0001, A7s:0.0059, A8s:0.0029, A9s:0.0163, ATs:0.2905, AJs:0.5911, AQs:0.9994, AKs, AA:0.9558"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@12|HJ:4BET@34.75",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0016, TT:0.0478, JJ, QQ, AQo:0.9937, KK, AKo, ATs:0.0001, AJs:0.0005, AQs:0.9999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@8|HJ:4BET@13.7",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5456, Q2o:0.008, K2o:0.0753, A2o:0.0007, 32s:0.2174, 33:0.4989, 53o:0.1081, 63o:0.0152, A3o:0.001, 42s:0.2021, 43s:0.4517, 44:0.8334, 54o:0.285, 64o:0.0693, 52s:0.3899, 53s:0.6201, 54s:0.7149, 55:0.9051, 65o:0.3318, 75o:0.0536, A5o:0.08, 62s:0.3901, 63s:0.4837, 64s:0.6152, 65s:0.6914, 66:0.8506, 76o:0.3319, 86o:0.0022, Q6o:0.008, A6o:0.0007, 73s:0.1506, 74s:0.143, 75s:0.5923, 76s:0.6203, 77:0.7939, 87o:0.0621, A7o:0.0015, 82s:0.0074, 84s:0.0176, 85s:0.2662, 86s:0.4471, 87s:0.4126, 88:0.6861, 98o:0.0306, T8o:0.0077, J8o:0.0082, A8o:0.0124, 93s:0.0059, 94s:0.0137, 95s:0.0365, 96s:0.3534, 97s:0.5352, 98s:0.4559, 99:0.7313, T9o:0.0132, J9o:0.0829, Q9o:0.1715, A9o:0.0425, T3s:0.0003, T5s:0.0003, T6s:0.0503, T7s:0.3336, T8s:0.4257, T9s:0.4964, TT:0.987, JTo:0.0943, QTo:0.3036, KTo:0.0046, ATo:0.3028, J2s:0.228, J3s:0.0043, J4s:0.019, J5s:0.1991, J6s:0.2427, J7s:0.3649, J8s:0.5339, J9s:0.6708, JTs:0.6486, JJ:0.9935, QJo:0.5291, KJo:0.2598, AJo:0.9989, Q2s:0.3951, Q3s:0.4333, Q4s:0.3034, Q5s:0.5094, Q6s:0.4804, Q7s:0.4161, Q8s:0.4606, Q9s:0.7084, QTs:0.7544, QJs:0.9936, QQ:0.9885, KQo:0.5753, AQo:0.9927, K2s:0.1919, K3s:0.1043, K4s:0.0723, K5s:0.28, K6s:0.2302, K7s:0.2551, K8s:0.1543, K9s:0.3853, KTs:0.4383, KJs:0.7511, KQs:0.8925, KK:0.7746, AKo:0.1143, A2s:0.1248, A3s:0.1088, A4s:0.1728, A5s:0.294, A6s:0.1142, A7s:0.1494, A8s:0.1612, A9s:0.1998, ATs:0.7127, AJs:0.9993, AQs:0.9886, AKs:0.1404, AA:0.0027"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4543, 32o:0.0696, 42o:0.0003, 52o:0.0648, 62o:0.0744, 82o:0.0558, 92o:0.0337, Q2o:0.0391, K2o:0.0086, A2o:0.3886, 32s:0.2051, 33:0.501, 43o:0.0654, 53o:0.1407, 63o:0.1592, 73o:0.0705, 83o:0.0508, 93o:0.0449, Q3o:0.0493, K3o:0.0484, A3o:0.4073, 42s:0.1825, 43s:0.2255, 44:0.1665, 54o:0.0844, 64o:0.1097, 74o:0.0399, A4o:0.3401, 52s:0.1656, 53s:0.2231, 54s:0.1338, 55:0.0947, 65o:0.2404, 75o:0.2007, 85o:0.1481, 95o:0.0665, Q5o:0.0405, K5o:0.0638, A5o:0.4035, 62s:0.1854, 63s:0.2716, 64s:0.223, 65s:0.3014, 66:0.1493, 76o:0.2492, 86o:0.2703, 96o:0.1809, T6o:0.0175, Q6o:0.0811, K6o:0.1083, A6o:0.3855, 72s:0.2372, 73s:0.2899, 74s:0.2663, 75s:0.2952, 76s:0.371, 77:0.206, 87o:0.354, 97o:0.2492, T7o:0.0471, Q7o:0.0707, K7o:0.0909, A7o:0.383, 82s:0.2161, 83s:0.2143, 84s:0.1989, 85s:0.3393, 86s:0.3885, 87s:0.4982, 88:0.3138, 98o:0.3258, T8o:0.1237, J8o:0.0458, Q8o:0.1431, K8o:0.0735, A8o:0.4012, 92s:0.1971, 93s:0.2334, 94s:0.1593, 95s:0.2576, 96s:0.3734, 97s:0.3344, 98s:0.4042, 99:0.2686, T9o:0.1777, J9o:0.0811, Q9o:0.1726, K9o:0.1305, A9o:0.3833, T2s:0.0721, T3s:0.067, T4s:0.0274, T5s:0.0556, T6s:0.1433, T7s:0.1852, T8s:0.2284, T9s:0.2933, TT:0.0129, JTo:0.0022, QTo:0.0269, KTo:0.0499, ATo:0.2351, J2s:0.0002, J3s:0.06, J4s:0.0015, J5s:0.0321, J6s:0.0594, J7s:0.056, J8s:0.1386, J9s:0.1471, JTs:0.0786, JJ:0.0065, QJo:0.0009, KJo:0.0006, AJo:0.001, Q2s:0.1519, Q3s:0.1434, Q4s:0.0611, Q5s:0.0998, Q6s:0.1766, Q7s:0.1576, Q8s:0.2524, Q9s:0.2137, QTs:0.1019, QJs:0.0062, QQ:0.0115, KQo:0.02, AQo:0.0073, K2s:0.2051, K3s:0.2625, K4s:0.1595, K5s:0.1968, K6s:0.2896, K7s:0.2185, K8s:0.2445, K9s:0.2561, KTs:0.1121, KJs:0.0065, KQs:0.1015, KK:0.2254, AKo:0.8857, A2s:0.7092, A3s:0.7924, A4s:0.5253, A5s:0.6663, A6s:0.7713, A7s:0.7608, A8s:0.7259, A9s:0.715, ATs:0.274, AJs:0.0007, AQs:0.0114, AKs:0.8596, AA:0.9973"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BB:3BET@8|HJ:4BET@34.75",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0332, QQ:0.0632, AQo:0.0002, KK, AKo, AQs:0.0008, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@21|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "HJ:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "HJ:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0005, KK:0.9998, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@12",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "J9s:0.0001, QQ:0.0006, AQo:0.0001, KK:0.0026, AKo:0.0001, A2s:0.0004, A7s:0.0001, AKs:0.0002, AA:0.0001"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.001, 44:0.005, A4o:0.0001, 66:0.0164, 74s:0.0044, 75s:0.001, 77:0.0105, 87s:0.0011, 94s:0.0001, 97s:0.0044, 99:0.0745, A9o:0.0009, T5s:0.0001, T9s:0.0007, J8s:0.0005, QJs:0.0003, QQ:0.0001, KK:0.8544, AKo:0.9899, A2s:0.001, A3s:0.0313, A4s:0.1368, A5s:0.1746, A6s:0.0077, A7s:0.0031, A8s:0.0004, A9s:0.0194, ATs:0.0018, AJs:0.0003, AQs:0.0002, AKs:0.9926, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@12",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.0002, 43o:0.0037, 53o:0.0065, 42s:0.0288, 43s:0.0196, 44:0.0001, 54o:0.0185, 64o:0.0046, 52s:0.0089, 53s:0.0387, 54s:0.0667, 55:0.0337, 65o:0.0247, 75o:0.0022, 62s:0.0043, 63s:0.008, 64s:0.0175, 65s:0.0792, 66:0.038, 76o:0.0098, 86o:0.0033, 74s:0.0089, 75s:0.0286, 76s:0.0592, 77:0.0352, 83s:0.0045, 85s:0.014, 86s:0.0319, 87s:0.0215, 88:0.0246, 95s:0.0047, 96s:0.0167, 97s:0.0405, 98s:0.026, 99:0.0013, T6s:0.0003, T7s:0.002, T8s:0.0238, T9s:0.0057, TT:0.1048, ATo:0.0001, J4s:0.0054, J6s:0.0022, J7s:0.0063, J8s:0.0057, J9s:0.0087, JTs:0.024, JJ:0.0426, QJo:0.0068, AJo:0.0037, Q2s:0.0001, Q4s:0.0032, Q5s:0.0002, Q8s:0.0001, QTs:0.0057, QJs:0.0243, AQo:0.1218, K2s:0.0051, K3s:0.0312, K4s:0.0244, K5s:0.0151, K6s:0.0082, K7s:0.0136, K8s:0.0271, K9s:0.0217, KTs:0.0161, KJs:0.1299, KQs:0.0073, AKo:0.0001, A2s:0.0015, A3s:0.0024, A4s:0.013, A5s:0.0242, A6s:0.0249, A7s:0.0009, A8s:0.0011, A9s:0.0022, ATs:0.0495, AJs:0.08, AQs:0.3118, AKs:0.0006, AA:0.0263"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9958, 32o:0.0629, 42o:0.0609, 52o:0.1039, 62o:0.0441, Q2o:0.0149, K2o:0.0793, A2o:0.0438, 32s:0.5452, 33:0.9953, 43o:0.2325, 53o:0.2959, 63o:0.1969, 73o:0.0435, Q3o:0.0451, K3o:0.1607, A3o:0.1316, 42s:0.5464, 43s:0.7952, 44:0.9965, 54o:0.5608, 64o:0.3335, 74o:0.1446, 84o:0.0597, Q4o:0.0203, K4o:0.1829, A4o:0.1452, 52s:0.5843, 53s:0.9091, 54s:0.9076, 55:0.9659, 65o:0.6122, 75o:0.4157, 85o:0.2424, 95o:0.0371, Q5o:0.0768, K5o:0.2531, A5o:0.2392, 62s:0.4777, 63s:0.8446, 64s:0.925, 65s:0.9084, 66:0.9604, 76o:0.5672, 86o:0.4716, 96o:0.1546, J6o:0.0048, Q6o:0.0928, K6o:0.254, A6o:0.0163, 72s:0.1911, 73s:0.4607, 74s:0.6028, 75s:0.9239, 76s:0.9342, 77:0.9616, 87o:0.5689, 97o:0.2551, J7o:0.0496, Q7o:0.0425, K7o:0.2476, A7o:0.0353, 82s:0.3473, 83s:0.3342, 84s:0.5406, 85s:0.7478, 86s:0.9163, 87s:0.926, 88:0.975, 98o:0.3197, T8o:0.0224, J8o:0.0887, Q8o:0.133, K8o:0.2105, A8o:0.0443, 92s:0.1809, 93s:0.259, 94s:0.3261, 95s:0.5379, 96s:0.6891, 97s:0.7992, 98s:0.8911, 99:0.9953, T9o:0.028, J9o:0.1833, Q9o:0.1584, K9o:0.2445, A9o:0.0065, T3s:0.1003, T4s:0.0356, T5s:0.0452, T6s:0.1272, T7s:0.3088, T8s:0.4171, T9s:0.5412, TT:0.8939, JTo:0.0456, QTo:0.0719, KTo:0.0348, ATo:0.0001, J2s:0.2259, J3s:0.2907, J4s:0.3721, J5s:0.3859, J6s:0.3695, J7s:0.4526, J8s:0.5811, J9s:0.69, JTs:0.4803, JJ:0.9551, QJo:0.3423, KJo:0.4178, AJo:0.0472, Q2s:0.3905, Q3s:0.4858, Q4s:0.4515, Q5s:0.529, Q6s:0.5375, Q7s:0.548, Q8s:0.5691, Q9s:0.6825, QTs:0.4978, QJs:0.7572, QQ, KQo:0.4278, AQo:0.5601, K2s:0.5968, K3s:0.6355, K4s:0.7115, K5s:0.7022, K6s:0.767, K7s:0.7819, K8s:0.7291, K9s:0.7186, KTs:0.6926, KJs:0.7448, KQs:0.7994, KK, AKo:0.9999, A2s:0.655, A3s:0.6465, A4s:0.7353, A5s:0.8123, A6s:0.5504, A7s:0.6588, A8s:0.5479, A9s:0.6229, ATs:0.2445, AJs:0.5426, AQs:0.6868, AKs:0.9994, AA:0.9737"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A2o:0.0001, JJ:0.0001, KK:0.9894, AKo:0.0001, A8s:0.0001, AJs:0.0001, AKs:0.0009, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|BB:4BET@34.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.116, 66:0.138, 77:0.1569, 88:0.5831, 99:0.5634, TT:0.8865, JJ:0.962, QQ, KK, AKo, AJs:0.0005, AQs:0.0562, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|HJ:4BET@21",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0017, 99, TT, JJ, QQ, AQo, KK, AKo, ATs:0.0003, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "65s:0.0004, QQ:0.0003, KQs:0.0001, KK:0.8702, A5s:0.0002, A6s:0.0002, A7s:0.0001, AJs:0.0001, AQs:0.0001, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0012, 55:0.0013, 66:0.2209, 77:0.2223, 88:0.2222, 99:0.2625, TT:0.5138, JJ:0.5326, QQ:0.6108, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 43s:0.0001, 52s:0.0001, 55:0.0006, 62s:0.0001, 76o:0.0001, 75s:0.0002, 76s:0.0001, 77:0.0004, 87o:0.0002, J7o:0.0001, 84s:0.0001, 87s:0.0003, 88:0.0001, A8o:0.0003, 94s:0.0001, 95s:0.0009, 99:0.0002, A9o:0.0001, T2s:0.0002, T5s:0.0001, T6s:0.0003, T8s:0.0006, TT:0.0013, J5s:0.0001, JTs:0.0001, JJ:0.0073, Q3s:0.0002, Q4s:0.0001, Q8s:0.0001, QTs:0.0001, KQo:0.0001, K3s:0.001, K5s:0.0001, K7s:0.0001, KJs:0.0006, KK:0.986, AKo:0.0003, A3s:0.0034, A4s:0.0001, A5s:0.0001, A7s:0.0021, A8s:0.0001, A9s:0.0002, ATs:0.0001, AJs:0.003, AQs:0.0033, AKs:0.0026, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@12",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0085, 72o:0.0001, 82o:0.0003, 92o:0.0001, T2o:0.0001, 32s:0.0202, 33:0.0002, 43o:0.0001, 73o:0.0003, 83o:0.0004, 93o:0.0001, T3o:0.0006, Q3o:0.0001, K3o:0.0003, A3o:0.0001, 42s:0.0001, 43s:0.0011, 44:0.0198, 54o:0.0004, 74o:0.0007, 84o:0.0003, T4o:0.0004, Q4o:0.0036, K4o:0.0001, A4o:0.0011, 52s:0.0138, 53s:0.009, 54s:0.0191, 55:0.0001, 65o:0.0013, 75o:0.0007, J5o:0.0014, Q5o:0.0005, K5o:0.0003, 62s:0.0009, 63s:0.0003, 64s:0.0001, 65s:0.0034, 66:0.0047, 86o:0.0001, 96o:0.0002, T6o:0.0114, J6o:0.0002, Q6o:0.0002, K6o:0.0021, A6o:0.0023, 72s:0.0025, 73s:0.0006, 75s:0.0586, 76s:0.0019, 77:0.0007, 87o:0.0004, 97o:0.0002, T7o:0.0007, J7o:0.0001, Q7o:0.0051, K7o:0.0008, A7o:0.0002, 82s:0.0066, 83s:0.002, 84s:0.006, 85s:0.0001, 86s:0.0185, 87s:0.002, 88:0.0097, 98o:0.0002, T8o:0.0011, J8o:0.0026, Q8o:0.0001, K8o:0.0009, A8o:0.0026, 92s:0.0002, 93s:0.005, 94s:0.0087, 95s:0.0003, 96s:0.0001, 97s:0.0012, 98s:0.004, 99:0.005, J9o:0.0001, Q9o:0.0002, K9o:0.0016, A9o:0.0029, T2s:0.0076, T3s:0.0187, T4s:0.0052, T5s:0.0018, T6s:0.0005, T7s:0.0031, T8s:0.0028, T9s:0.0009, TT:0.0196, QTo:0.0013, KTo:0.0018, ATo:0.0063, J2s:0.0002, J3s:0.0001, J4s:0.0001, J5s:0.001, J6s:0.001, J7s:0.0005, J8s:0.0021, J9s:0.0138, JTs:0.007, JJ:0.0025, QJo:0.0015, KJo:0.0046, AJo:0.0009, Q2s:0.0006, Q4s:0.0331, Q5s:0.0002, Q6s:0.0108, Q7s:0.0951, Q8s:0.0001, Q9s:0.0162, QTs:0.0014, QJs:0.0435, QQ:0.004, KQo:0.0088, AQo:0.0055, K2s:0.0381, K3s:0.0002, K4s:0.0013, K5s:0.0116, K6s:0.0004, K7s:0.0254, K8s:0.0131, K9s:0.0085, KJs:0.0206, KQs:0.0311, KK:0.002, A2s:0.0048, A3s:0.0006, A4s:0.0244, A5s:0.14, A6s:0.0786, A7s:0.0076, A8s:0.0114, A9s:0.0679, ATs:0.0525, AJs:0.0005, AQs:0.078, AKs:0.0003, AA:0.2299"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.1173, 42o:0.0002, 52o:0.0017, 72o:0.0002, 82o:0.0002, 92o:0.0008, T2o:0.0015, J2o:0.0001, Q2o:0.0021, A2o:0.0014, 32s:0.2444, 33:0.0004, 43o:0.0001, 63o:0.0003, 73o:0.0003, 83o:0.0009, 93o:0.001, T3o:0.0001, J3o:0.0129, Q3o:0.0016, K3o:0.0166, A3o:0.0011, 42s:0.0004, 43s:0.3725, 44:0.3549, 54o:0.0048, 74o:0.0006, 84o:0.0007, 94o:0.0023, T4o:0.0009, J4o:0.0006, Q4o:0.0009, K4o:0.0056, A4o:0.0031, 52s:0.0003, 53s:0.373, 54s:0.0475, 55:0.0064, 65o:0.0017, 75o:0.0151, 85o:0.0006, 95o:0.0022, T5o:0.0003, J5o:0.0007, Q5o:0.0006, K5o:0.0007, A5o:0.1044, 62s:0.0011, 63s:0.3742, 64s:0.0008, 65s:0.0028, 66:0.0133, 76o:0.0018, 86o:0.0009, 96o:0.0001, T6o:0.0122, J6o:0.0012, K6o:0.0005, A6o:0.0012, 72s:0.0009, 73s:0.0017, 74s:0.002, 75s:0.0078, 76s:0.0692, 77:0.5211, 87o:0.0022, 97o:0.0015, T7o:0.0007, J7o:0.0024, Q7o:0.0009, K7o:0.0018, A7o:0.1096, 82s:0.0851, 83s:0.0081, 84s:0.176, 85s:0.099, 86s:0.0352, 87s:0.0025, 88:0.0055, 98o:0.0046, T8o:0.0032, J8o:0.0004, Q8o:0.0014, K8o:0.0597, A8o:0.0025, 92s:0.0789, 93s:0.1049, 94s:0.156, 95s:0.1656, 96s:0.0009, 97s:0.0066, 98s:0.3401, 99:0.2723, T9o:0.0035, J9o:0.0012, Q9o:0.001, K9o:0.1124, A9o:0.0011, T2s:0.0098, T3s:0.1393, T4s:0.5738, T5s:0.0181, T6s:0.3279, T7s:0.0027, T8s:0.6692, T9s:0.0049, TT:0.2199, JTo:0.0011, QTo:0.015, KTo:0.0017, ATo:0.0024, J2s:0.0009, J3s:0.0001, J4s:0.0005, J5s:0.0006, J6s:0.0019, J7s:0.0054, J8s:0.1105, J9s:0.3219, JTs:0.0753, JJ:0.213, QJo:0.0244, KJo:0.0735, AJo:0.0002, Q2s:0.0837, Q3s:0.4021, Q4s:0.0268, Q5s:0.2321, Q6s:0.0733, Q7s:0.193, Q8s:0.0203, Q9s:0.0052, QTs:0.2173, QJs:0.51, QQ:0.8271, KQo:0.0019, AQo:0.4886, K2s:0.1782, K3s:0.002, K4s:0.5062, K5s:0.382, K6s:0.0014, K7s:0.0016, K8s:0.0177, K9s:0.2287, KTs:0.5175, KJs:0.1957, KQs:0.0464, KK:0.9953, AKo:0.9769, A2s:0.2829, A3s:0.0144, A4s:0.5528, A5s:0.2092, A6s:0.1479, A7s:0.0033, A8s:0.0033, A9s:0.1058, ATs:0.2347, AJs:0.2897, AQs:0.1516, AKs:0.8381, AA:0.7634"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@12",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.001, TT:0.6604, JJ:0.5993, QQ:0.7698, KQo:0.0241, AQo:0.8208, KTs:0.0119, KJs:0.0177, KQs:0.2808, KK:0.5176, AKo:0.2535, ATs:0.0623, AJs:0.2235, AQs:0.7705"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0228, 77:0.0468, 88:0.0675, 99:0.1691, TT:0.3396, ATo:0.0518, JJ:0.4007, AJo:0.087, QQ:0.2302, AQo:0.1249, KK:0.4824, AKo:0.7465, A8s:0.0017, A9s:0.0171, ATs:0.0898, AJs:0.15, AQs:0.188, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@34.75",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0019, 32o:0.0001, 52o:0.0002, 72o:0.0001, 82o:0.0001, 92o:0.0002, T2o:0.0001, 33:0.0015, 63o:0.0004, 73o:0.0007, Q3o:0.0001, A3o:0.0027, 43s:0.0008, 44:0.0005, 54o:0.0004, 64o:0.0001, 74o:0.0001, T4o:0.0002, Q4o:0.0003, K4o:0.0001, A4o:0.0004, 52s:0.0005, 53s:0.0002, 54s:0.0001, 55:0.003, 75o:0.0001, Q5o:0.0001, K5o:0.0001, A5o:0.0001, 62s:0.0002, 63s:0.0002, 65s:0.0001, 66:0.0011, 76o:0.0005, 86o:0.0001, J6o:0.0001, Q6o:0.0002, K6o:0.0001, 73s:0.0002, 76s:0.0002, 77:0.0072, T7o:0.0002, A7o:0.0003, 82s:0.0001, 83s:0.0008, 84s:0.0004, 85s:0.0025, 86s:0.0007, 87s:0.0019, 88:0.0053, 98o:0.0001, J8o:0.0009, A8o:0.0003, 93s:0.0005, 94s:0.0007, 95s:0.0001, 96s:0.0003, 97s:0.0001, 98s:0.0007, 99:0.0064, J9o:0.0003, K9o:0.001, T2s:0.0025, T3s:0.0001, T4s:0.0006, T5s:0.0002, T6s:0.0007, T7s:0.0035, T8s:0.0007, T9s:0.012, TT:0.0252, JTo:0.0006, KTo:0.0003, J2s:0.0004, J3s:0.0009, J4s:0.0003, J5s:0.0101, J6s:0.0003, J7s:0.0009, J8s:0.0004, J9s:0.0007, JTs:0.0012, JJ:0.5098, QJo:0.0002, KJo:0.0001, AJo:0.0011, Q2s:0.0001, Q3s:0.0001, Q5s:0.0007, Q7s:0.0004, Q9s:0.0003, QTs:0.0003, QJs:0.0014, QQ:0.9793, AQo:0.0016, K2s:0.0027, K3s:0.0003, K5s:0.0004, K6s:0.0005, K7s:0.0002, K8s:0.0004, K9s:0.0007, KTs:0.0015, KJs:0.0006, KQs:0.0006, KK:0.9995, AKo:0.4867, A2s:0.0005, A3s:0.0023, A4s:0.0002, A5s:0.0016, A6s:0.0003, A7s:0.0003, A8s:0.0025, ATs:0.0052, AJs:0.0591, AQs:0.0049, AKs:0.07, AA:0.9998"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@34.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.233, 88:0.4454, 99:0.8291, TT, JJ, QQ, AQo:0.9994, KK, AKo, AJs:0.0344, AQs:0.9996, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0018, 32o:0.0007, 42o:0.0001, 82o:0.0002, T2o:0.0001, J2o:0.0001, K2o:0.0051, A2o:0.0002, 32s:0.0003, 33:0.003, 43o:0.0011, 53o:0.0004, 63o:0.0001, 83o:0.0008, 93o:0.0008, T3o:0.0006, J3o:0.0008, Q3o:0.0005, K3o:0.0022, A3o:0.0014, 42s:0.0002, 43s:0.0003, 44:0.0008, 54o:0.0001, 64o:0.0012, 84o:0.0001, 94o:0.0001, J4o:0.0026, Q4o:0.0006, K4o:0.0002, A4o:0.0001, 52s:0.0028, 53s:0.0008, 54s:0.0002, 65o:0.0004, 85o:0.0002, 95o:0.0002, J5o:0.0001, Q5o:0.0001, K5o:0.0013, A5o:0.0002, 62s:0.0456, 63s:0.0001, 64s:0.0228, 65s:0.0003, 66:0.0001, 86o:0.0006, K6o:0.0001, A6o:0.0001, 72s:0.0009, 73s:0.005, 74s:0.0002, 75s:0.0135, 76s:0.0581, 77:0.0007, 97o:0.0003, Q7o:0.0001, K7o:0.0154, A7o:0.0005, 82s:0.0031, 83s:0.0003, 84s:0.0022, 85s:0.0027, 86s:0.1263, 87s:0.0119, 88:0.0223, 98o:0.0002, T8o:0.0005, K8o:0.0001, A8o:0.0027, 92s:0.0676, 93s:0.0033, 94s:0.0065, 95s:0.0285, 97s:0.0081, 98s:0.0023, 99:0.0001, T9o:0.0005, J9o:0.0001, Q9o:0.0005, K9o:0.0001, T2s:0.0006, T3s:0.0978, T4s:0.0051, T5s:0.0003, T6s:0.0004, T7s:0.0016, T8s:0.021, T9s:0.0003, TT:0.3075, JTo:0.0013, KTo:0.0007, ATo:0.0008, J2s:0.0014, J3s:0.0001, J5s:0.0092, J7s:0.0141, J8s:0.0003, J9s:0.0005, JTs:0.0006, JJ:0.0148, QJo:0.001, KJo:0.0005, AJo:0.0012, Q3s:0.0015, Q4s:0.0001, Q5s:0.0008, Q6s:0.0079, Q7s:0.0072, Q8s:0.0002, Q9s:0.0044, QTs:0.0005, QJs:0.0013, QQ:0.1197, KQo:0.0001, AQo:0.0155, K2s:0.0362, K3s:0.009, K4s:0.0073, K5s:0.0918, K6s:0.0884, K7s:0.0008, K8s:0.0006, K9s:0.0015, KTs:0.2348, KJs:0.0226, KQs:0.0226, KK:0.0227, AKo:0.007, A2s:0.0051, A3s:0.0889, A4s:0.0387, A5s:0.0005, A6s:0.0019, A7s:0.0011, A8s:0.001, A9s:0.0021, ATs:0.1523, AJs:0.0296, AQs:0.1188, AKs:0.0178, AA:0.0437"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0011, 42o:0.0001, 72o:0.0002, 82o:0.0001, T2o:0.0002, J2o:0.0001, K2o:0.0011, A2o:0.0036, 32s:0.0019, 33:0.1014, 43o:0.0002, 53o:0.0006, 83o:0.0001, 93o:0.0003, J3o:0.0004, Q3o:0.0004, K3o:0.0006, A3o:0.0039, 42s:0.3049, 43s:0.0004, 44:0.002, 84o:0.0001, T4o:0.0006, J4o:0.0011, Q4o:0.0003, K4o:0.0002, 52s:0.0287, 53s:0.0002, 54s:0.0001, 55:0.0001, 85o:0.0001, 95o:0.0003, T5o:0.0001, J5o:0.0002, Q5o:0.0002, K5o:0.0001, A5o:0.0003, 63s:0.0001, 64s:0.0058, 65s:0.0003, 76o:0.0004, 86o:0.0003, 96o:0.0001, T6o:0.0001, J6o:0.0011, K6o:0.0002, A6o:0.0001, 72s:0.0587, 74s:0.0001, 75s:0.2781, 76s:0.0007, 77:0.1084, 97o:0.0001, T7o:0.0021, Q7o:0.0002, A7o:0.0002, 82s:0.0002, 83s:0.1419, 85s:0.0003, 86s:0.066, 87s:0.0018, 88:0.0815, T8o:0.003, J8o:0.002, Q8o:0.0003, K8o:0.0015, A8o:0.017, 92s:0.0003, 93s:0.0014, 95s:0.001, 97s:0.0026, 98s:0.0007, 99:0.0481, T9o:0.0001, Q9o:0.0012, K9o:0.0005, A9o:0.0001, T2s:0.0017, T4s:0.0003, T5s:0.0014, T6s:0.0007, T7s:0.001, T8s:0.0021, T9s:0.0189, TT:0.0009, JTo:0.0006, KTo:0.0005, ATo:0.0001, J2s:0.0001, J4s:0.0005, J5s:0.0022, J6s:0.0002, J7s:0.0014, J8s:0.0006, J9s:0.0027, JTs:0.0011, JJ:0.0374, QJo:0.0001, AJo:0.0002, Q2s:0.0002, Q4s:0.0001, Q5s:0.0002, Q6s:0.0001, Q7s:0.1638, Q8s:0.0008, Q9s:0.0191, QTs:0.0078, QJs:0.4294, QQ:0.1173, KQo:0.0234, AQo:0.0019, K2s:0.0004, K3s:0.007, K4s:0.0311, K5s:0.0003, K6s:0.0002, K7s:0.0002, K8s:0.0077, K9s:0.0155, KTs:0.0067, KJs:0.0093, KQs:0.004, KK:0.0749, AKo:0.0011, A2s:0.337, A3s:0.0008, A4s:0.002, A5s:0.0002, A6s:0.0001, A7s:0.0017, A8s:0.0183, A9s:0.001, AJs:0.1183, AQs:0.0182, AKs:0.0526, AA:0.7407"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0035, 32o:0.0014, 62o:0.0004, 72o:0.0008, 82o:0.0005, 92o:0.0003, T2o:0.0001, J2o:0.0003, Q2o:0.0018, K2o:0.0274, A2o:0.8226, 32s:0.0003, 33:0.0406, 53o:0.0001, 73o:0.0001, 83o:0.0003, T3o:0.0149, Q3o:0.0001, K3o:0.0002, A3o:0.1092, 42s:0.0348, 43s:0.0015, 44:0.0245, 54o:0.0002, 64o:0.086, 84o:0.0001, 94o:0.0041, T4o:0.0006, J4o:0.0004, Q4o:0.0001, K4o:0.0005, A4o:0.2652, 52s:0.4844, 53s:0.0004, 54s:0.4117, 55:0.1888, 65o:0.1358, 75o:0.0006, 85o:0.0003, 95o:0.0015, T5o:0.0012, J5o:0.0012, Q5o:0.0009, K5o:0.0196, A5o:0.1245, 62s:0.0279, 63s:0.4365, 64s:0.9046, 65s:0.0039, 66:0.0219, 76o:0.0002, 86o:0.0048, 96o:0.0001, T6o:0.0033, J6o:0.0006, K6o:0.0001, A6o:0.1065, 72s:0.2082, 73s:0.0016, 74s:0.0426, 75s:0.1413, 76s:0.296, 77:0.49, 87o:0.0139, 97o:0.0001, T7o:0.001, J7o:0.0018, Q7o:0.0019, K7o:0.0009, A7o:0.4693, 82s:0.0106, 83s:0.2614, 84s:0.0098, 85s:0.4769, 86s:0.2757, 87s:0.3805, 88:0.0594, 98o:0.0214, T8o:0.0005, J8o:0.0505, Q8o:0.0002, K8o:0.0002, A8o:0.1273, 92s:0.0009, 93s:0.0064, 94s:0.0955, 95s:0.1084, 96s:0.1849, 97s:0.2843, 98s:0.3233, 99:0.1413, T9o:0.0001, J9o:0.0006, Q9o:0.0004, K9o:0.1327, A9o:0.0202, T2s:0.0575, T3s:0.0975, T4s:0.1763, T5s:0.0125, T6s:0.0004, T7s:0.0004, T8s:0.5834, T9s:0.1443, TT:0.4101, JTo:0.001, QTo:0.0019, KTo:0.5081, ATo:0.04, J2s:0.0015, J3s:0.0001, J4s:0.1668, J5s:0.1904, J7s:0.4209, J8s:0.4194, J9s:0.2505, JTs:0.0238, JJ:0.3528, QJo:0.0001, AJo:0.0014, Q2s:0.007, Q3s:0.0042, Q4s:0.0591, Q5s:0.0041, Q6s:0.0911, Q7s:0.3019, Q8s:0.0003, Q9s:0.0426, QTs:0.0629, QJs:0.0406, QQ:0.265, KQo:0.2425, AQo:0.3695, K2s:0.048, K3s:0.0282, K4s:0.8232, K5s:0.7586, K6s:0.3583, K7s:0.0022, K8s:0.001, K9s:0.2486, KTs:0.2992, KJs:0.104, KQs:0.2251, KK:0.897, AKo:0.9227, A2s:0.1766, A3s:0.0474, A4s:0.2991, A5s:0.1158, A6s:0.0008, A7s:0.208, A8s:0.5913, A9s:0.2962, ATs:0.0269, AJs:0.03, AQs:0.5241, AKs:0.9219, AA:0.2154"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0199, 77:0.0703, 88:0.169, 99:0.1632, TT:0.1824, JJ:0.1478, AJo:0.0013, QTs:0.0018, QQ:0.2998, KQo:0.0015, KTs:0.0041, KJs:0.0058, KQs:0.0059, KK:0.216, ATs:0.0027, AJs:0.0079, AA:0.961"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.096, 33:0.0952, 44:0.0552, 55:0.2518, 66:0.2755, 77:0.2468, 88:0.2252, 99:0.3686, TT:0.6617, JTs:0.0004, JJ:0.8522, QJo:0.0001, KJo:0.0005, AJo:0.2044, QTs:0.0006, QJs:0.0003, QQ:0.7002, KQo:0.0006, AQo:0.9076, KTs:0.026, KJs:0.002, KQs:0.0214, KK:0.784, AKo, A2s:0.0008, A3s:0.0009, A5s:0.0432, A6s:0.0005, A7s:0.0004, A8s:0.0007, A9s:0.0353, ATs:0.0872, AJs:0.3458, AQs:0.9996, AKs, AA:0.039"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0033, 42o:0.0001, 62o:0.0001, 82o:0.0002, J2o:0.0001, A2o:0.0004, 32s:0.0005, 33:0.0007, 43o:0.0001, 53o:0.0001, 63o:0.0002, J3o:0.0001, Q3o:0.0001, A3o:0.0003, 42s:0.0016, 43s:0.0002, 44:0.0016, 64o:0.0001, J4o:0.0002, K4o:0.0002, A4o:0.0001, 53s:0.0092, 54s:0.0023, 55:0.0024, K5o:0.0001, A5o:0.0014, 62s:0.0001, 63s:0.0001, 65s:0.0013, 66:0.0102, 86o:0.0001, T6o:0.0004, Q6o:0.0002, 73s:0.0002, 74s:0.0007, 75s:0.0002, 76s:0.0024, 77:0.0054, 97o:0.0003, Q7o:0.0001, K7o:0.0017, 82s:0.0004, 83s:0.0001, 84s:0.0174, 85s:0.0052, 86s:0.0092, 87s:0.0002, 88:0.0131, 98o:0.0001, T8o:0.0001, J8o:0.0001, A8o:0.0008, 92s:0.0001, 94s:0.0003, 95s:0.0023, 96s:0.0006, 97s:0.0001, 98s:0.0001, 99:0.7811, T9o:0.0003, Q9o:0.0001, K9o:0.0004, A9o:0.0009, T2s:0.0034, T4s:0.0031, T5s:0.0027, T6s:0.0004, T7s:0.0398, T8s:0.001, T9s:0.0002, TT:0.4617, JTo:0.0001, KTo:0.0001, ATo:0.0001, J2s:0.0014, J4s:0.001, J6s:0.0009, J7s:0.0038, J8s:0.0001, J9s:0.0006, JTs:0.0029, JJ:0.8826, QJo:0.0006, AJo:0.0042, Q2s:0.0001, Q3s:0.0026, Q4s:0.0068, Q5s:0.0013, Q6s:0.0141, Q7s:0.0008, Q8s:0.0009, Q9s:0.0063, QTs:0.0001, QJs:0.0049, QQ:0.9907, KQo:0.0003, AQo:0.0106, K2s:0.0001, K3s:0.0009, K4s:0.0009, K5s:0.0012, K6s:0.0005, K7s:0.0001, K8s:0.0041, K9s:0.0006, KTs:0.0018, KJs:0.0015, KQs:0.0005, KK, AKo:0.9956, A3s:0.0079, A4s:0.0002, A5s:0.0087, A6s:0.0053, A7s:0.0284, A8s:0.0003, A9s:0.0028, ATs:0.0005, AJs:0.1195, AQs:0.6249, AKs:0.9729, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0651, TT:0.9907, JJ, QQ, KK, AKo, AQs:0.2976, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "62o:0.0001, 92o:0.0001, J2o:0.0015, Q2o:0.0004, K2o:0.0003, A2o:0.0003, 32s:0.0003, 33:0.0431, 53o:0.0004, 83o:0.0001, 93o:0.0001, T3o:0.0001, J3o:0.0001, Q3o:0.0007, K3o:0.0004, A3o:0.0009, 42s:0.0661, 43s:0.0031, 44:0.1265, 54o:0.0001, 64o:0.0011, 74o:0.0001, 84o:0.0002, J4o:0.0001, Q4o:0.0005, K4o:0.0006, A4o:0.0002, 52s:0.0013, 53s:0.071, 54s:0.0006, 55:0.1836, 75o:0.0003, 85o:0.0014, 95o:0.0002, T5o:0.0004, K5o:0.0009, A5o:0.0001, 62s:0.0012, 63s:0.0002, 64s:0.014, 65s:0.0001, 66:0.0963, 76o:0.0004, 86o:0.0007, 96o:0.0002, J6o:0.0001, K6o:0.0013, A6o:0.002, 72s:0.0004, 73s:0.0002, 74s:0.0002, 75s:0.0008, 76s:0.0004, 77:0.0063, 97o:0.0003, T7o:0.0139, J7o:0.0003, K7o:0.0002, A7o:0.0053, 83s:0.0058, 84s:0.0038, 85s:0.0019, 86s:0.0145, 87s:0.0003, 88:0.0135, 98o:0.0004, Q8o:0.0009, K8o:0.0002, A8o:0.0015, 92s:0.0033, 93s:0.0001, 94s:0.0023, 95s:0.0022, 96s:0.0003, 97s:0.0017, 98s:0.0002, 99:0.311, T9o:0.0008, J9o:0.0004, Q9o:0.0013, K9o:0.0001, A9o:0.0017, T2s:0.0001, T3s:0.0015, T5s:0.002, T6s:0.0052, T7s:0.0019, T8s:0.0038, T9s:0.0971, TT:0.0106, JTo:0.0084, QTo:0.0004, ATo:0.0076, J2s:0.0088, J3s:0.0138, J4s:0.0002, J5s:0.0007, J6s:0.0103, J7s:0.008, J8s:0.011, J9s:0.0001, JTs:0.1404, JJ:0.7704, QJo:0.0037, KJo:0.0182, Q2s:0.026, Q3s:0.0178, Q4s:0.0004, Q5s:0.0004, Q6s:0.0484, Q7s:0.0486, Q8s:0.018, Q9s:0.0093, QTs:0.0184, QJs:0.0018, QQ:0.981, KQo:0.0009, AQo:0.0001, K2s:0.0107, K3s:0.0044, K4s:0.0005, K5s:0.0158, K6s:0.0033, K7s:0.0001, K8s:0.022, K9s:0.0661, KTs:0.1606, KJs:0.0331, KQs:0.0035, KK:0.8503, AKo:0.0401, A2s:0.359, A3s:0.0251, A4s:0.1982, A5s:0.0007, A6s:0.0001, A7s:0.0072, A8s:0.0002, A9s:0.1865, ATs:0.4273, AJs:0.0245, AQs:0.5798, AKs:0.9996, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0096, 42o:0.0003, 52o:0.0003, 62o:0.0021, 72o:0.0003, 82o:0.0011, 92o:0.0007, T2o:0.0001, J2o:0.0003, K2o:0.0006, A2o:0.0016, 32s:0.0007, 33:0.0049, 43o:0.0014, 53o:0.0001, 63o:0.0001, 73o:0.0001, 93o:0.0001, T3o:0.0001, Q3o:0.0004, K3o:0.0001, A3o:0.0036, 42s:0.0002, 43s:0.0012, 44:0.0002, 54o:0.0004, 64o:0.0002, 74o:0.0004, 84o:0.0001, T4o:0.0002, J4o:0.0002, Q4o:0.0002, K4o:0.0035, A4o:0.0005, 52s:0.0095, 53s:0.0049, 54s:0.0005, 55:0.0003, 65o:0.0002, 75o:0.0054, 95o:0.0012, T5o:0.0006, Q5o:0.0014, K5o:0.0006, A5o:0.0091, 62s:0.0929, 63s:0.0004, 64s:0.0025, 65s:0.0005, 66:0.0034, 76o:0.0004, 86o:0.0001, Q6o:0.0001, K6o:0.0002, 72s:0.0001, 73s:0.0004, 74s:0.0002, 75s:0.0003, 76s:0.0033, 77:0.0085, 87o:0.0001, 97o:0.0002, T7o:0.0007, Q7o:0.0011, K7o:0.0013, A7o:0.0035, 82s:0.0024, 83s:0.0001, 84s:0.0029, 85s:0.0005, 86s:0.0003, 88:0.0186, T8o:0.0013, J8o:0.0004, Q8o:0.0001, K8o:0.0031, A8o:0.0656, 92s:0.0034, 93s:0.0008, 94s:0.0013, 95s:0.0099, 96s:0.002, 97s:0.0052, 98s:0.0019, 99:0.0009, T9o:0.0036, J9o:0.001, Q9o:0.002, K9o:0.0023, A9o:0.0084, T3s:0.0382, T4s:0.0001, T5s:0.0398, T6s:0.0624, T7s:0.002, T8s:0.0009, T9s:0.0025, TT:0.049, JTo:0.0001, QTo:0.0009, KTo:0.0003, ATo:0.002, J3s:0.0027, J4s:0.0024, J5s:0.0051, J6s:0.0001, J7s:0.0159, J8s:0.0001, J9s:0.002, JTs:0.0014, JJ:0.0109, QJo:0.0001, KJo:0.0005, AJo:0.0061, Q2s:0.0088, Q3s:0.0037, Q4s:0.0283, Q5s:0.1103, Q6s:0.0196, Q7s:0.0048, Q8s:0.0109, Q9s:0.0099, QTs:0.0001, QJs:0.0535, QQ:0.3109, K2s:0.0083, K3s:0.0067, K4s:0.0026, K5s:0.0079, K7s:0.1163, K8s:0.0345, K9s:0.0001, KTs:0.0102, KJs:0.2894, KQs:0.0022, KK:0.0092, AKo:0.0975, A2s:0.0173, A3s:0.0805, A4s:0.0009, A5s:0.0097, A6s:0.0041, A7s:0.0021, A8s:0.0019, A9s:0.0214, ATs:0.1418, AJs:0.0449, AQs:0.1363, AKs:0.046, AA:0.386"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.002, 42o:0.0002, 82o:0.0001, 92o:0.0002, T2o:0.0001, Q2o:0.0007, K2o:0.0002, A2o:0.0049, 32s:0.0004, 33:0.123, 43o:0.0001, 53o:0.0126, 63o:0.0017, 73o:0.0001, 93o:0.0016, T3o:0.0001, J3o:0.0001, Q3o:0.0001, K3o:0.0027, A3o:0.0021, 42s:0.0002, 43s:0.3709, 44:0.0002, 54o:0.0004, 64o:0.0001, 74o:0.0004, 84o:0.0005, 94o:0.0001, T4o:0.0013, J4o:0.0008, Q4o:0.0027, K4o:0.0003, A4o:0.0003, 52s:0.0009, 53s:0.1056, 54s:0.33, 55:0.001, 65o:0.0001, 75o:0.0001, 85o:0.0008, 95o:0.0009, T5o:0.0002, J5o:0.0005, Q5o:0.0151, K5o:0.0007, A5o:0.0139, 62s:0.1259, 63s:0.1288, 64s:0.0666, 65s:0.0002, 66:0.0253, 76o:0.0006, 86o:0.0023, 96o:0.0001, T6o:0.0001, J6o:0.0001, Q6o:0.0002, K6o:0.0012, A6o:0.0008, 72s:0.1911, 73s:0.0002, 74s:0.0583, 75s:0.0004, 76s:0.0017, 77:0.3927, 97o:0.0006, T7o:0.0002, Q7o:0.0011, K7o:0.0001, A7o:0.4825, 82s:0.004, 83s:0.0583, 84s:0.0025, 85s:0.012, 86s:0.0031, 87s:0.0035, 88:0.1433, 98o:0.0001, T8o:0.0001, Q8o:0.0001, K8o:0.0034, A8o:0.0086, 92s:0.0001, 93s:0.497, 94s:0.4713, 95s:0.0433, 96s:0.0008, 97s:0.0007, 98s:0.0009, 99:0.0164, T9o:0.0006, J9o:0.0016, K9o:0.0001, A9o:0.0196, T2s:0.0728, T3s:0.0003, T4s:0.0577, T6s:0.0722, T7s:0.0018, T8s:0.2178, T9s:0.4911, TT:0.3837, JTo:0.0006, QTo:0.0024, KTo:0.0011, ATo:0.0009, J2s:0.0021, J3s:0.0011, J4s:0.0035, J5s:0.001, J6s:0.0074, J7s:0.0405, J8s:0.2265, J9s:0.482, JTs:0.0157, JJ:0.1127, QJo:0.0129, KJo:0.0008, AJo:0.0166, Q2s:0.0057, Q3s:0.0048, Q4s:0.016, Q5s:0.4524, Q6s:0.0024, Q7s:0.031, Q8s:0.0347, Q9s:0.4402, QTs:0.0139, QJs:0.1975, QQ:0.4518, KQo:0.0013, AQo:0.9968, K2s:0.135, K3s:0.0025, K4s:0.0004, K5s:0.1702, K6s:0.075, K7s:0.1284, K8s:0.0011, K9s:0.039, KTs:0.3443, KJs:0.0753, KQs:0.1083, KK:0.9907, AKo:0.8573, A2s:0.0086, A3s:0.0483, A4s:0.2423, A5s:0.041, A6s:0.1682, A7s:0.2733, A8s:0.0003, A9s:0.0898, ATs:0.1431, AJs:0.0816, AQs:0.6103, AKs:0.9301, AA:0.6139"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0005, 88:0.0002, 99:0.001, TT:0.0004, JJ:0.2531, QQ:0.3446, KK:0.8609, ATs:0.0003, AJs:0.0016, AQs:0.0269, AA:0.0345"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0193, 33:0.0112, 44:0.0186, 55:0.0198, 66:0.0105, 77:0.0135, 88:0.0207, 99:0.026, T9s:0.0085, TT:0.0571, QTo:0.0001, ATo:0.0001, JTs:0.0152, JJ:0.1131, AJo:0.0013, Q4s:0.0024, Q5s:0.002, Q9s:0.0013, QTs:0.0117, QJs:0.0183, QQ:0.6554, KQo:0.0015, AQo:0.5906, K8s:0.0013, KTs:0.0039, KJs:0.0235, KQs:0.0246, KK:0.1391, AKo, A2s:0.0017, A3s:0.0007, A4s:0.0013, A8s:0.005, ATs:0.0202, AJs:0.0324, AQs:0.8512, AKs, AA:0.9655"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0016, 32o:0.0001, 42o:0.0035, 52o:0.002, 82o:0.0001, T2o:0.0001, Q2o:0.0013, K2o:0.0001, A2o:0.0032, 32s:0.0002, 33:0.0003, 43o:0.0041, 53o:0.0017, 63o:0.0001, 73o:0.0001, 93o:0.0003, T3o:0.0007, J3o:0.0002, Q3o:0.0038, K3o:0.0054, A3o:0.0036, 42s:0.006, 43s:0.0065, 44:0.0014, 54o:0.0004, 64o:0.0001, 74o:0.0023, 94o:0.0001, J4o:0.0029, Q4o:0.002, K4o:0.0004, A4o:0.0033, 52s:0.0399, 53s:0.0004, 54s:0.0003, 55:0.0027, 65o:0.0017, 75o:0.012, 85o:0.0001, 95o:0.0005, T5o:0.0002, J5o:0.0001, K5o:0.0002, A5o:0.0076, 62s:0.0113, 63s:0.0025, 64s:0.0402, 65s:0.0313, 66:0.0022, 76o:0.0027, 86o:0.0033, 96o:0.0053, T6o:0.0012, J6o:0.0017, Q6o:0.0044, K6o:0.0024, A6o:0.0016, 72s:0.0006, 73s:0.0372, 74s:0.0008, 75s:0.0414, 76s:0.0014, 77:0.0228, 87o:0.0045, 97o:0.0003, T7o:0.0002, Q7o:0.0014, K7o:0.0006, A7o:0.0003, 82s:0.0017, 83s:0.0014, 84s:0.0091, 85s:0.0024, 86s:0.0022, 87s:0.1529, 88:0.0043, 98o:0.0178, T8o:0.0194, J8o:0.0006, Q8o:0.0018, K8o:0.0007, A8o:0.0008, 92s:0.0023, 93s:0.0004, 94s:0.002, 95s:0.002, 96s:0.1581, 97s:0.0395, 98s:0.0331, 99:0.0352, T9o:0.0017, J9o:0.0223, Q9o:0.0054, A9o:0.0076, T2s:0.0007, T3s:0.0053, T4s:0.0229, T5s:0.0003, T6s:0.002, T7s:0.0007, T8s:0.1411, T9s:0.0922, TT:0.0001, JTo:0.0042, KTo:0.0005, ATo:0.0006, J2s:0.0045, J3s:0.0131, J4s:0.0009, J5s:0.0017, J6s:0.0032, J7s:0.0014, J8s:0.0052, J9s:0.0006, JTs:0.0117, JJ:0.0867, QJo:0.0008, KJo:0.0028, AJo:0.0479, Q2s:0.002, Q3s:0.0212, Q4s:0.001, Q5s:0.0002, Q6s:0.0413, Q7s:0.0006, Q9s:0.0051, QTs:0.15, QJs:0.0298, QQ:0.0905, KQo:0.0011, AQo:0.0137, K2s:0.0169, K3s:0.0143, K4s:0.0312, K5s:0.0071, K6s:0.1607, K7s:0.0023, K8s:0.0895, K9s:0.002, KTs:0.003, KJs:0.0027, KQs:0.0935, KK:0.5272, AKo:0.2129, A2s:0.0108, A3s:0.0329, A4s:0.0091, A5s:0.1174, A6s:0.0195, A7s:0.0081, A8s:0.0005, A9s:0.0542, ATs:0.0474, AJs:0.0786, AQs:0.0268, AKs:0.0559, AA:0.3198"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 32o:0.0001, 42o:0.0001, 52o:0.0005, 82o:0.0005, 92o:0.0011, T2o:0.0002, J2o:0.0013, Q2o:0.0026, K2o:0.0008, A2o:0.0035, 32s:0.0123, 33:0.0705, 43o:0.0008, 53o:0.0111, 73o:0.0063, 93o:0.0011, J3o:0.0014, Q3o:0.0005, K3o:0.0128, A3o:0.0028, 42s:0.015, 43s:0.0026, 44:0.0014, 54o:0.0004, 64o:0.0001, 74o:0.0015, 84o:0.0003, 94o:0.0075, J4o:0.0101, Q4o:0.0002, K4o:0.0008, A4o:0.0011, 52s:0.0706, 53s:0.0115, 54s:0.0593, 55:0.0057, 65o:0.0012, 75o:0.0079, 85o:0.0001, 95o:0.0003, T5o:0.0005, J5o:0.0001, K5o:0.0115, A5o:0.0349, 62s:0.1712, 63s:0.0064, 64s:0.8011, 65s:0.0028, 66:0.0228, 76o:0.0023, 86o:0.0003, 96o:0.0011, T6o:0.0003, J6o:0.0005, Q6o:0.0022, K6o:0.0034, A6o:0.0024, 72s:0.0034, 73s:0.2325, 74s:0.0001, 75s:0.1743, 76s:0.2328, 77:0.0002, 87o:0.0004, 97o:0.0082, T7o:0.0002, Q7o:0.0003, K7o:0.0009, A7o:0.0003, 82s:0.0054, 83s:0.0161, 84s:0.0004, 85s:0.0008, 86s:0.0022, 87s:0.0153, 88:0.7231, 98o:0.0025, T8o:0.0081, J8o:0.0005, Q8o:0.0016, K8o:0.0001, A8o:0.0001, 93s:0.0099, 94s:0.0035, 95s:0.0027, 96s:0.1106, 97s:0.0143, 98s:0.0241, 99:0.0004, T9o:0.001, J9o:0.0001, Q9o:0.0036, K9o:0.0005, A9o:0.0248, T2s:0.0152, T3s:0.018, T4s:0.0008, T5s:0.0034, T6s:0.0117, T7s:0.0261, T8s:0.0128, T9s:0.0062, TT:0.0001, JTo:0.0147, KTo:0.0018, ATo:0.0018, J2s:0.0504, J3s:0.0052, J4s:0.0116, J5s:0.0079, J6s:0.0024, J7s:0.0173, J8s:0.4643, J9s:0.0058, JTs:0.0167, JJ:0.1755, QJo:0.0042, KJo:0.0001, AJo:0.0671, Q2s:0.0007, Q3s:0.0171, Q4s:0.0067, Q5s:0.0002, Q6s:0.0388, Q7s:0.0001, Q8s:0.065, Q9s:0.0176, QTs:0.047, QJs:0.0578, QQ:0.2035, KQo:0.0783, AQo:0.3577, K2s:0.0215, K3s:0.0068, K4s:0.0446, K5s:0.0372, K6s:0.3812, K7s:0.0047, K8s:0.0281, K9s:0.0086, KTs:0.0225, KJs:0.0027, KQs:0.5106, KK:0.448, AKo:0.1039, A2s:0.0194, A3s:0.0073, A4s:0.0109, A5s:0.5202, A6s:0.0761, A7s:0.0029, A8s:0.0487, A9s:0.0095, ATs:0.9409, AJs:0.0027, AQs:0.8806, AKs:0.8414, AA:0.6745"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.4681, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0002, KK, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.2536, KK, AKs:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "HJ:OPEN@2.3|CO:3BET@18.5|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0008, KK, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@12",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "63s:0.0001, 96s:0.0002, QQ:0.0001, KK:0.0069, A9s:0.0114, AJs:0.0379, AKs:0.0007, AA:0.0294"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "A2o:0.0061, 44:0.0013, 55:0.0003, 63s:0.0033, 65s:0.1131, 66:0.0002, A6o:0.006, 73s:0.0008, 77:0.0001, 86s:0.0002, 87s:0.0093, 88:0.0006, A8o:0.0016, 96s:0.0004, 97s:0.0001, T8s:0.0018, ATo:0.0002, J6s:0.0001, J8s:0.0006, JJ:0.026, QQ:0.0008, AQo:0.0006, K7s:0.0104, K8s:0.0027, KTs:0.064, KK:0.9897, AKo:0.9859, A2s:0.0001, A4s:0.002, A5s:0.3582, A6s:0.0184, A7s:0.466, A9s:0.0282, ATs:0.0086, AJs:0.0273, AQs:0.0021, AKs:0.9987, AA:0.9706"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@12",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0004, 43s:0.0054, 44:0.0003, A4o:0.0001, 53s:0.0365, 54s:0.1706, 55:0.0503, A5o:0.0001, 64s:0.0949, 65s:0.1756, 66:0.0793, 74s:0.0001, 75s:0.0005, 76s:0.2063, 77:0.0599, A7o:0.0001, 86s:0.0456, 87s:0.1715, 88:0.1005, J8o:0.0001, A8o:0.0001, 97s:0.0003, 98s:0.0776, 99:0.0005, T7s:0.0001, T8s:0.0002, T9s:0.0003, TT:0.0698, ATo:0.0001, J6s:0.0001, J7s:0.0001, J9s:0.028, JTs:0.0004, JJ:0.0005, QJo:0.0001, AJo:0.0002, Q3s:0.0001, Q4s:0.0003, Q5s:0.0001, Q6s:0.0001, Q7s:0.0002, Q8s:0.0003, Q9s:0.0003, QTs:0.0004, QJs:0.0494, QQ:0.0004, KQo:0.0001, AQo:0.0644, K3s:0.0676, K4s:0.0029, K5s:0.0021, K6s:0.1419, K7s:0.1455, K8s:0.0177, K9s:0.1095, KTs:0.0532, KJs:0.1611, KQs:0.0006, KK:0.0005, AKo:0.0003, A2s:0.0002, A3s:0.0001, A4s:0.0002, A5s:0.0003, A7s:0.0003, A8s:0.0004, A9s:0.0002, ATs:0.0003, AJs:0.0004, AQs:0.1717, AKs:0.0004, AA:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.8586, 33:0.9188, 43s:0.0098, 44:0.9264, 52s:0.0125, 53s:0.0107, 54s:0.024, 55:0.9409, 64s:0.0163, 65s:0.1371, 66:0.9133, 75s:0.0131, 76s:0.0579, 77:0.9331, 85s:0.001, 86s:0.0234, 87s:0.0263, 88:0.8915, 96s:0.0024, 97s:0.0076, 98s:0.0147, 99:0.9931, T8s:0.0001, TT:0.8094, J8s:0.0081, J9s:0.0086, JTs:0.0126, JJ:0.9995, QJo:0.0021, AJo:0.0023, Q2s:0.0009, Q3s:0.0007, Q6s:0.0028, Q7s:0.0026, Q8s:0.0076, Q9s:0.0094, QTs:0.0024, QJs:0.0275, QQ:0.9996, KQo:0.0021, AQo:0.6785, K2s:0.0003, K3s:0.0005, K4s:0.0006, K5s:0.009, K6s:0.0139, K7s:0.002, K8s:0.0121, K9s:0.003, KTs:0.003, KJs:0.1411, KQs:0.166, KK:0.9995, AKo:0.9997, A2s:0.0056, A3s:0.0006, A4s:0.0099, A5s:0.0004, A6s:0.0024, A7s:0.002, A8s:0.0066, A9s:0.0019, ATs:0.0048, AJs:0.0226, AQs:0.8282, AKs:0.9996, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, 85s:0.0001, 86s:0.0001, T6s:0.0001, TT:0.0001, J9s:0.0001, JJ:0.0001, Q7s:0.0001, QQ:0.001, KK, A3s:0.0001, A5s:0.0001, A6s:0.0001, AJs:0.0001, AKs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BB:4BET@34.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1028, 33:0.3724, 44:0.7613, 55:0.9318, 66:0.9855, 77:0.9852, 88:0.9868, 99:0.9889, TT:0.9978, JJ:0.9998, AJo:0.0002, Q3s:0.0001, QJs:0.0001, QQ, AQo:0.6653, K9s:0.0001, KTs:0.0001, KJs:0.0001, KQs:0.0001, KK, AKo, A6s:0.0001, A8s:0.0001, A9s:0.0022, ATs:0.1623, AJs:0.531, AQs:0.9995, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0001, 77:0.0002, 97s:0.0001, T8s:0.0001, J6s:0.0001, J9s:0.0001, QQ:0.0015, KTs:0.0001, KK:0.9999, AKs:0.0878, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.001, 33:0.7712, 44:0.8265, 55:0.8312, 66:0.8722, 77:0.9004, 88:0.9099, 99:0.9224, TT:0.9285, JJ, QQ, KK, AKo, A9s:0.0005, ATs:0.0008, AJs:0.001, AQs:0.5653, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, 43s:0.0001, 72s:0.0001, 73s:0.0001, 82s:0.0001, 86s:0.0001, 88:0.0001, 92s:0.0001, 97s:0.0005, T3s:0.0001, TT:0.0001, J6s:0.0001, JJ:0.0003, Q2s:0.0001, Q3s:0.0001, K3s:0.0001, K5s:0.0001, KTs:0.0003, KQs:0.0009, KK:0.9937, AKo:0.0001, A3s:0.0004, A5s:0.0002, A8s:0.0001, ATs:0.0003, AJs:0.0001, AQs:0.001, AKs:0.01, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "43s:0.0001, 44:0.0002, 54s:0.0002, 63s:0.0001, 65s:0.0005, 66:0.0001, T6o:0.0001, 72s:0.0001, 75s:0.0001, 76s:0.0001, 83s:0.0001, 84s:0.0001, 87s:0.0001, A8o:0.0001, 94s:0.0001, 95s:0.0001, 99:0.0065, T3s:0.0003, T5s:0.0001, T8s:0.0001, J4s:0.0001, J6s:0.0001, J8s:0.0003, Q7s:0.0002, Q9s:0.0001, QQ:0.0013, AQo:0.0001, K2s:0.0002, K7s:0.0002, K8s:0.0003, KQs:0.0001, KK, A2s:0.0004, A3s:0.0001, A4s:0.0011, A6s:0.0007, A7s:0.0001, A8s:0.001, A9s:0.0004, ATs:0.0002, AJs:0.0001, AQs:0.0208, AKs:0.0005, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|HJ:4BET@18.5",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0008, 88, 99, TT, JJ, AJo:0.0003, QQ, AQo, KK, AKo, ATs:0.9951, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0012, KK, A3s:0.0001, ATs:0.0001, AKs:0.0103, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.5623, 55:0.7898, 66:0.8989, 77:0.8901, 88:0.91, 99:0.9386, TT:0.9538, JJ, QQ, AQo:0.1122, KK, AKo, AQs:0.9732, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "54s:0.0001, 86s:0.0001, 88:0.0002, 99:0.0004, J9o:0.0001, T9s:0.0001, JJ:0.0002, Q3s:0.0002, Q4s:0.0001, QQ:0.0617, K5s:0.0001, K8s:0.0001, K9s:0.0002, KK:0.9999, A2s:0.0001, A4s:0.0001, A5s:0.0001, ATs:0.0004, AJs:0.0001, AQs:0.0007, AKs:0.0027, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@12",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 32o:0.0015, 42o:0.0003, 52o:0.0006, 62o:0.0018, 72o:0.0001, 82o:0.0007, 92o:0.0142, T2o:0.0051, J2o:0.0003, Q2o:0.0044, K2o:0.0009, A2o:0.0083, 32s:0.0006, 33:0.034, 43o:0.0001, 53o:0.0005, 63o:0.0009, 73o:0.0004, 83o:0.0015, 93o:0.0052, J3o:0.0011, Q3o:0.0003, K3o:0.001, 42s:0.0044, 43s:0.0001, 44:0.0014, 54o:0.0004, 74o:0.0034, 84o:0.0001, T4o:0.0045, J4o:0.0006, Q4o:0.0014, K4o:0.0006, A4o:0.0009, 52s:0.2402, 53s:0.0157, 54s:0.0022, 55:0.0027, 65o:0.0038, 75o:0.0044, 85o:0.001, T5o:0.0012, J5o:0.0177, Q5o:0.0158, K5o:0.0034, A5o:0.0162, 62s:0.002, 63s:0.0031, 64s:0.1046, 65s:0.0209, 66:0.0073, 76o:0.0001, 86o:0.001, 96o:0.0048, T6o:0.0009, Q6o:0.0049, K6o:0.0012, A6o:0.0001, 72s:0.002, 73s:0.0003, 74s:0.2216, 75s:0.0004, 76s:0.0118, 77:0.0078, 87o:0.0003, 97o:0.0005, T7o:0.0032, J7o:0.0008, Q7o:0.0001, A7o:0.0017, 82s:0.0664, 83s:0.0114, 84s:0.0148, 85s:0.0286, 86s:0.0011, 87s:0.0011, 98o:0.0091, T8o:0.0015, J8o:0.0024, Q8o:0.001, K8o:0.0001, A8o:0.0015, 92s:0.0008, 93s:0.011, 94s:0.1519, 95s:0.0289, 96s:0.0272, 97s:0.0889, 98s:0.0038, 99:0.0061, T9o:0.0008, J9o:0.0044, Q9o:0.0116, K9o:0.0028, A9o:0.0002, T2s:0.001, T3s:0.0271, T4s:0.0004, T5s:0.0041, T6s:0.0019, T7s:0.0005, T8s:0.0005, T9s:0.0106, TT:0.0079, QTo:0.0079, KTo:0.0018, ATo:0.011, J2s:0.0004, J3s:0.0172, J4s:0.006, J5s:0.0423, J6s:0.0018, J7s:0.0129, J8s:0.1822, J9s:0.3336, JTs:0.0006, JJ:0.1015, QJo:0.0038, KJo:0.0239, AJo:0.0016, Q2s:0.0007, Q3s:0.0012, Q4s:0.0022, Q5s:0.001, Q6s:0.0018, Q7s:0.0033, Q8s:0.0007, Q9s:0.0049, QTs:0.0153, QJs:0.0208, QQ:0.0003, KQo:0.0034, AQo:0.2166, K2s:0.0622, K3s:0.0026, K4s:0.0001, K5s:0.007, K6s:0.029, K7s:0.0143, K8s:0.0266, K9s:0.1835, KTs:0.0614, KJs:0.2523, KQs:0.0059, KK:0.3451, AKo:0.0219, A2s:0.0787, A3s:0.0078, A4s:0.0009, A5s:0.1881, A6s:0.0268, A7s:0.3068, A8s:0.0097, A9s:0.0119, ATs:0.0496, AJs:0.0504, AQs:0.0852, AKs:0.051, AA:0.0304"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0589, 32o:0.0006, 42o:0.0087, 52o:0.0118, 62o:0.0006, 72o:0.0001, 82o:0.0036, 92o:0.0005, T2o:0.0011, J2o:0.0029, Q2o:0.0059, K2o:0.0015, A2o:0.0034, 32s:0.0911, 33:0.0102, 43o:0.0001, 53o:0.0129, 63o:0.0102, 73o:0.0006, 83o:0.0024, 93o:0.0043, T3o:0.0014, J3o:0.0077, Q3o:0.0653, K3o:0.0014, A3o:0.0862, 42s:0.0001, 43s:0.0036, 44:0.1024, 54o:0.0028, 64o:0.0008, 74o:0.0197, 84o:0.0005, T4o:0.0044, J4o:0.0012, Q4o:0.0942, K4o:0.0086, A4o:0.002, 52s:0.0953, 53s:0.0778, 54s:0.1024, 55:0.0586, 65o:0.0036, 75o:0.0013, 85o:0.001, 95o:0.0008, T5o:0.0115, J5o:0.0037, Q5o:0.0078, K5o:0.0158, A5o:0.4503, 62s:0.2854, 63s:0.1774, 64s:0.5993, 65s:0.1732, 66:0.7081, 76o:0.008, 86o:0.0023, 96o:0.001, T6o:0.0011, J6o:0.0084, Q6o:0.066, K6o:0.0673, A6o:0.0305, 72s:0.3452, 73s:0.352, 74s:0.0212, 75s:0.9373, 76s:0.0282, 77:0.3773, 87o:0.0004, 97o:0.0086, T7o:0.0004, J7o:0.0116, Q7o:0.0033, K7o:0.0078, A7o:0.0015, 82s:0.1214, 83s:0.0613, 84s:0.0176, 85s:0.228, 86s:0.0004, 87s:0.1738, 88:0.3167, 98o:0.0107, T8o:0.0042, J8o:0.0098, Q8o:0.0165, K8o:0.0259, A8o:0.0217, 92s:0.1644, 93s:0.1235, 94s:0.4045, 95s:0.0038, 96s:0.0024, 97s:0.006, 98s:0.7646, 99:0.0399, T9o:0.0096, J9o:0.0023, Q9o:0.0513, K9o:0.0218, A9o:0.0226, T2s:0.0501, T4s:0.0023, T5s:0.0007, T6s:0.7594, T7s:0.0287, T8s:0.0034, T9s:0.0112, TT:0.2353, JTo:0.0789, QTo:0.0034, KTo:0.0054, ATo:0.4175, J2s:0.0411, J3s:0.0216, J4s:0.5211, J5s:0.0074, J6s:0.1069, J7s:0.0703, J8s:0.2516, J9s:0.0286, JTs:0.068, JJ:0.8906, QJo:0.0035, KJo:0.2197, AJo:0.0118, Q2s:0.0793, Q3s:0.3793, Q4s:0.1151, Q5s:0.0621, Q6s:0.0083, Q7s:0.0569, Q8s:0.2036, Q9s:0.0137, QTs:0.0202, QJs:0.7462, QQ:0.7859, KQo:0.0061, AQo:0.1076, K2s:0.0111, K3s:0.0326, K4s:0.3412, K5s:0.1321, K6s:0.0069, K7s:0.0053, K8s:0.1141, K9s:0.3291, KTs:0.0424, KJs:0.4474, KQs:0.65, KK:0.6513, AKo:0.6598, A2s:0.027, A3s:0.6173, A4s:0.0217, A5s:0.3799, A6s:0.1543, A7s:0.1275, A8s:0.0533, A9s:0.1161, ATs:0.0001, AJs:0.3852, AQs:0.4045, AKs:0.8708, AA:0.93"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@12",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 66:0.0078, 77:0.0029, 88:0.0054, 99:0.0003, J9s:0.0001, JJ:0.0011, QTs:0.0001, QQ:0.0019, AQo:0.0003, K8s:0.0001, KJs:0.0001, KQs:0.0002, KK:0.0025, AKo:0.0007, A2s:0.0001, A6s:0.0001, A8s:0.0001, ATs:0.0008, AJs:0.0012, AQs:0.006, AKs:0.0007, AA:0.0012"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0085, 33:0.4443, 44:0.0066, 55:0.7386, 66:0.0011, 77:0.7377, 88:0.7737, 99:0.8395, TT:0.8621, J9s:0.0001, JJ:0.9072, QTs:0.0001, QJs:0.0001, QQ:0.9226, AQo:0.008, KQs:0.0001, KK:0.9924, AKo:0.9991, A3s:0.0001, A6s:0.0001, A8s:0.0001, ATs:0.0003, AJs:0.001, AQs:0.0045, AKs:0.9987, AA:0.9988"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@34.75",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, J2o:0.0001, K2o:0.0001, A2o:0.0001, 32s:0.0002, 33:0.0007, 43o:0.0002, 83o:0.0001, T3o:0.0001, A3o:0.0004, 42s:0.0002, 43s:0.0003, 44:0.0018, 54o:0.0001, K4o:0.0001, 52s:0.0003, 53s:0.0005, 55:0.0006, Q5o:0.0002, K5o:0.0002, 63s:0.0002, 65s:0.0001, 66:0.0046, 76o:0.0001, 96o:0.0001, T6o:0.0001, Q6o:0.0002, A6o:0.0005, 74s:0.0001, 75s:0.0007, 77:0.015, 97o:0.0001, T7o:0.0003, K7o:0.0001, A7o:0.0001, 82s:0.0002, 83s:0.0017, 84s:0.0014, 85s:0.0001, 86s:0.0001, 88:0.0076, 98o:0.0003, K8o:0.0001, A8o:0.0007, 93s:0.0003, 94s:0.0005, 95s:0.0002, 96s:0.0001, 97s:0.0005, 98s:0.0013, 99:0.1359, T9o:0.0002, J9o:0.0001, Q9o:0.0001, K9o:0.0001, A9o:0.0001, T2s:0.0001, T3s:0.0003, T4s:0.0003, T5s:0.0003, T6s:0.0008, T7s:0.0032, T9s:0.0071, TT:0.0538, JTo:0.0004, KTo:0.0001, ATo:0.0016, J2s:0.0001, J4s:0.0003, J5s:0.0003, J6s:0.0031, J7s:0.0002, J8s:0.001, J9s:0.0006, JTs:0.0001, JJ:0.1096, QJo:0.0007, KJo:0.0008, AJo:0.001, Q2s:0.0051, Q3s:0.0005, Q5s:0.0001, Q6s:0.0004, Q7s:0.0005, Q9s:0.0016, QTs:0.013, QJs:0.0026, QQ, KQo:0.0001, AQo:0.1647, K4s:0.0029, K5s:0.0028, K6s:0.0127, K7s:0.0002, K8s:0.0041, K9s:0.0002, KTs:0.0073, KJs:0.0001, KQs:0.0017, KK:0.9852, AKo:0.3791, A2s:0.0001, A3s:0.0001, A4s:0.004, A5s:0.0157, A6s:0.001, A7s:0.0005, A8s:0.0002, A9s:0.0011, ATs:0.006, AJs:0.0001, AQs:0.0007, AKs:0.3188, AA:0.9927"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@34.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.3884, 88:0.7601, 99:0.9999, TT, JJ, AJo:0.3354, QQ, AQo:0.943, KK, AKo, ATs:0.559, AJs:0.6417, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@8",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, 42o:0.0005, 52o:0.0003, 62o:0.0002, 72o:0.0004, J2o:0.0005, Q2o:0.0002, K2o:0.0011, A2o:0.0019, 32s:0.0047, 33:0.0032, 53o:0.0001, 73o:0.0002, 83o:0.0018, 93o:0.0008, T3o:0.0004, J3o:0.0015, K3o:0.0002, A3o:0.0035, 42s:0.0011, 43s:0.005, 44:0.0195, 64o:0.0003, 84o:0.0004, 94o:0.0005, T4o:0.0008, J4o:0.0001, Q4o:0.0009, K4o:0.0013, A4o:0.0025, 52s:0.0003, 53s:0.0013, 54s:0.0098, 55:0.0763, 75o:0.0022, T5o:0.0001, K5o:0.0008, A5o:0.0004, 62s:0.0004, 64s:0.0008, 65s:0.0129, 66:0.0205, 76o:0.0001, T6o:0.0025, J6o:0.0002, Q6o:0.0009, K6o:0.0003, A6o:0.0097, 73s:0.2621, 74s:0.0425, 75s:0.012, 76s:0.0002, 87o:0.0001, J7o:0.0002, Q7o:0.0002, K7o:0.0023, A7o:0.0004, 82s:0.001, 83s:0.0001, 84s:0.0036, 86s:0.0007, 87s:0.011, 88:0.0012, 98o:0.0028, T8o:0.0008, J8o:0.0001, Q8o:0.0005, K8o:0.0002, A8o:0.0022, 92s:0.0743, 93s:0.0015, 94s:0.001, 97s:0.0374, 98s:0.0071, 99:0.0006, T9o:0.0001, Q9o:0.0005, K9o:0.008, A9o:0.0005, T2s:0.0007, T3s:0.0001, T4s:0.0001, T5s:0.0058, T6s:0.0017, T7s:0.0033, T8s:0.0011, T9s:0.0762, TT:0.0798, JTo:0.0002, QTo:0.0005, ATo:0.0018, J2s:0.0008, J3s:0.0014, J4s:0.0119, J5s:0.0083, J6s:0.0259, J8s:0.0037, J9s:0.0002, JTs:0.0009, JJ:0.1784, QJo:0.0028, KJo:0.0002, AJo:0.0001, Q2s:0.0328, Q3s:0.0018, Q5s:0.0013, Q6s:0.0005, Q7s:0.0004, Q8s:0.0313, Q9s:0.0002, QTs:0.0003, QJs:0.0174, QQ:0.2537, KQo:0.0003, AQo:0.004, K3s:0.0003, K4s:0.0196, K5s:0.0001, K6s:0.0035, K7s:0.0016, K8s:0.0239, K9s:0.0018, KTs:0.0004, KJs:0.0084, KQs:0.0001, AKo:0.0003, A2s:0.019, A3s:0.0058, A4s:0.0014, A5s:0.0057, A6s:0.005, A7s:0.0013, A8s:0.0119, A9s:0.0002, ATs:0.1519, AJs:0.0027, AQs:0.0736, AKs:0.0041, AA:0.2629"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0005, 72o:0.0001, 82o:0.0001, T2o:0.0001, J2o:0.0001, Q2o:0.0003, K2o:0.0002, A2o:0.0002, 32s:0.0002, 33:0.001, 43o:0.0007, 53o:0.0004, 83o:0.0002, 93o:0.0002, J3o:0.0001, K3o:0.0003, A3o:0.0004, 43s:0.0143, 44:0.0019, 74o:0.0004, T4o:0.0001, Q4o:0.074, K4o:0.0001, A4o:0.0003, 52s:0.0008, 53s:0.0012, 54s:0.0014, 55:0.0004, 65o:0.0001, 95o:0.0001, A5o:0.0002, 62s:0.0045, 63s:0.0002, 64s:0.0013, 76o:0.0001, 86o:0.0008, 96o:0.0001, T6o:0.0001, J6o:0.0001, Q6o:0.0005, A6o:0.0003, 72s:0.0005, 73s:0.0002, 74s:0.0002, 75s:0.0001, 76s:0.1733, 77:0.0001, 97o:0.0001, T7o:0.001, J7o:0.0003, Q7o:0.0001, K7o:0.0001, A7o:0.0009, 82s:0.0022, 83s:0.0008, 84s:0.0022, 85s:0.0047, 86s:0.0032, 87s:0.0004, 98o:0.0052, K8o:0.0001, A8o:0.0016, 92s:0.0002, 93s:0.0006, 94s:0.0002, 95s:0.0005, 98s:0.0004, 99:0.0682, Q9o:0.0001, K9o:0.031, A9o:0.0007, T2s:0.0001, T3s:0.0031, T4s:0.0015, T5s:0.0001, T6s:0.0011, T7s:0.0107, T8s:0.0023, T9s:0.0002, TT:0.0604, JTo:0.0003, QTo:0.0004, KTo:0.0005, J2s:0.0005, J3s:0.0007, J4s:0.0963, J5s:0.0061, J6s:0.0234, J7s:0.0115, J8s:0.0014, J9s:0.0767, JTs:0.0005, JJ:0.4575, KJo:0.0004, Q3s:0.0004, Q4s:0.0084, Q5s:0.0006, Q7s:0.0018, Q8s:0.0002, Q9s:0.0078, QTs:0.0038, QJs:0.0008, QQ:0.0491, KQo:0.0773, AQo:0.0001, K2s:0.002, K3s:0.0095, K5s:0.001, K6s:0.0141, K7s:0.0288, K8s:0.0003, K9s:0.0023, KTs:0.098, KJs:0.0005, KQs:0.0718, AKo:0.0835, A2s:0.0004, A3s:0.0014, A4s:0.0373, A5s:0.0005, A6s:0.0625, A7s:0.2629, A8s:0.0018, A9s:0.0011, ATs:0.1152, AJs:0.0013, AQs:0.0084, AKs:0.0387, AA:0.6191"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.2566, 32o:0.0014, 42o:0.0001, 52o:0.0007, 62o:0.0006, 72o:0.0004, 92o:0.001, T2o:0.0001, Q2o:0.0002, K2o:0.0001, A2o:0.0021, 32s:0.2462, 33:0.8518, 53o:0.0009, 83o:0.0017, 93o:0.0003, T3o:0.0007, J3o:0.0005, Q3o:0.0007, K3o:0.0962, A3o:0.0035, 42s:0.0104, 43s:0.0557, 44:0.0001, 54o:0.0016, 74o:0.0022, 94o:0.0001, T4o:0.0006, J4o:0.0018, Q4o:0.0001, A4o:0.0225, 52s:0.0002, 53s:0.1193, 54s:0.2338, 55:0.4011, 95o:0.0001, T5o:0.0001, J5o:0.0016, Q5o:0.0003, K5o:0.0001, A5o:0.0258, 62s:0.0004, 63s:0.0155, 64s:0.007, 66:0.0699, 76o:0.0002, 86o:0.0006, T6o:0.0006, J6o:0.001, Q6o:0.0004, K6o:0.0553, A6o:0.0003, 72s:0.0026, 73s:0.0188, 74s:0.0238, 75s:0.0001, 76s:0.0599, 77:0.1268, 87o:0.0028, 97o:0.0004, T7o:0.0011, J7o:0.0002, Q7o:0.0002, K7o:0.0011, A7o:0.0535, 84s:0.0111, 85s:0.0136, 86s:0.0012, 87s:0.0148, 88:0.1168, T8o:0.0007, Q8o:0.0006, K8o:0.0005, A8o:0.0007, 92s:0.0006, 93s:0.1282, 94s:0.0001, 95s:0.1138, 96s:0.0014, 97s:0.044, 98s:0.0826, 99:0.1727, T9o:0.0022, J9o:0.0001, Q9o:0.0005, K9o:0.0596, A9o:0.2314, T3s:0.0371, T4s:0.6091, T5s:0.0077, T6s:0.0224, T7s:0.0011, T9s:0.0002, TT:0.3662, JTo:0.0005, QTo:0.0018, KTo:0.0003, ATo:0.0007, J2s:0.0002, J3s:0.0241, J4s:0.2554, J5s:0.0067, J6s:0.0685, J7s:0.0019, J8s:0.0026, J9s:0.0009, JTs:0.0377, JJ:0.2376, QJo:0.0008, KJo:0.0133, AJo:0.0356, Q2s:0.0034, Q3s:0.0052, Q4s:0.0037, Q5s:0.0286, Q6s:0.0019, Q7s:0.0023, Q8s:0.2413, Q9s:0.0002, QJs:0.0513, QQ:0.2258, KQo:0.0004, AQo:0.0001, K2s:0.0725, K3s:0.0005, K4s:0.1622, K5s:0.0204, K6s:0.1974, K7s:0.0133, K8s:0.4388, K9s:0.0031, KTs:0.384, KJs:0.0096, KQs:0.0617, KK:0.9983, AKo:0.8435, A2s:0.2045, A3s:0.067, A4s:0.0891, A5s:0.9795, A6s:0.2904, A7s:0.428, A8s:0.0023, A9s:0.1155, ATs:0.3788, AJs:0.2356, AQs:0.0905, AKs:0.9389, AA:0.1156"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "76s:0.0001, 88:0.0181, 99:0.0003, Q7s:0.0002, QTs:0.0005, KQs:0.0226, A9s:0.0006, ATs:0.0036, AJs:0.0032, AA:0.8279"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.2753, 33:0.6112, 44:0.6149, 55:0.9007, 66:0.6543, 77:0.8486, 88:0.1694, 99:0.9955, T9s:0.0002, TT:0.9999, JJ, AJo:0.246, QTs:0.0004, QQ, AQo:0.9988, KTs:0.0666, KJs:0.0431, KQs:0.2079, KK, AKo, ATs:0.0001, AJs:0.933, AQs, AKs, AA:0.1721"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0447, 62o:0.0009, 92o:0.0001, T2o:0.0005, Q2o:0.0002, K2o:0.0001, A2o:0.0002, 32s:0.0014, 33:0.0487, 43o:0.0001, 53o:0.0001, 63o:0.0003, 73o:0.0001, 83o:0.0003, 93o:0.0002, T3o:0.0009, J3o:0.0002, K3o:0.0002, A3o:0.0012, 42s:0.0002, 43s:0.0012, 44:0.1088, 54o:0.0005, 64o:0.0002, 84o:0.0001, 94o:0.0002, T4o:0.0006, Q4o:0.0001, K4o:0.0007, A4o:0.0001, 52s:0.0065, 53s:0.0003, 54s:0.0017, 55:0.0001, 65o:0.0008, 95o:0.0002, J5o:0.0005, Q5o:0.0001, A5o:0.003, 62s:0.0008, 64s:0.0009, 65s:0.0006, 66:0.0808, 86o:0.0001, 96o:0.0001, T6o:0.0002, J6o:0.002, K6o:0.0002, A6o:0.0006, 72s:0.0001, 73s:0.0002, 74s:0.0004, 76s:0.1143, 77:0.0863, 87o:0.0002, 97o:0.0009, T7o:0.0005, K7o:0.0008, A7o:0.0028, 82s:0.004, 83s:0.0033, 84s:0.0001, 85s:0.003, 86s:0.0085, 87s:0.0016, 88:0.5948, 98o:0.0002, K8o:0.0011, A8o:0.0001, 92s:0.0022, 93s:0.0538, 94s:0.0001, 95s:0.0014, 96s:0.0025, 97s:0.0001, 98s:0.0008, 99:0.0498, Q9o:0.0001, K9o:0.0011, A9o:0.0023, T2s:0.0092, T4s:0.0048, T5s:0.0004, T7s:0.0013, T8s:0.0005, T9s:0.0002, TT:0.9908, JTo:0.0004, QTo:0.0013, KTo:0.0047, ATo:0.0037, J2s:0.0001, J3s:0.003, J4s:0.0011, J5s:0.0031, J6s:0.0007, J7s:0.0212, J8s:0.0006, J9s:0.0017, JTs:0.0003, JJ:0.963, QJo:0.0015, KJo:0.0006, AJo:0.0004, Q2s:0.0014, Q3s:0.0004, Q4s:0.0125, Q5s:0.0092, Q6s:0.0053, Q7s:0.0017, Q8s:0.0003, Q9s:0.0148, QTs:0.0431, QJs:0.0001, QQ:0.7956, KQo:0.0011, AQo:0.0968, K2s:0.0013, K3s:0.0013, K4s:0.0018, K5s:0.0138, K6s:0.0169, K7s:0.0133, K8s:0.0514, KTs:0.003, KJs:0.0209, KQs:0.064, KK:0.9998, AKo:0.987, A2s:0.0388, A3s:0.0054, A4s:0.0011, A5s:0.0002, A6s:0.0048, A7s:0.0031, A8s:0.0007, A9s:0.0175, ATs:0.7373, AJs:0.001, AQs:0.0408, AKs:0.9911, AA:0.9997"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, TT, JJ, QQ, AQo:0.4365, KK, AKo, AQs:0.9952, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.4631, 32o:0.0004, 62o:0.0002, T2o:0.0002, J2o:0.0001, K2o:0.0091, A2o:0.0002, 32s:0.0058, 33:0.0015, 43o:0.0002, 53o:0.001, 73o:0.0002, 83o:0.0003, 93o:0.0002, T3o:0.0001, J3o:0.0003, A3o:0.0073, 42s:0.0007, 43s:0.1706, 44:0.1701, 54o:0.0096, 64o:0.0025, 74o:0.0023, 84o:0.0003, 94o:0.0002, T4o:0.0012, Q4o:0.0044, K4o:0.0001, A4o:0.0001, 52s:0.0065, 53s:0.0213, 54s:0.0019, 55:0.0159, 65o:0.0004, 75o:0.0021, 85o:0.0002, 95o:0.0001, T5o:0.0015, J5o:0.0001, Q5o:0.0055, K5o:0.0007, A5o:0.0025, 62s:0.0088, 63s:0.0048, 64s:0.0208, 65s:0.1566, 66:0.009, 96o:0.0005, T6o:0.0009, J6o:0.0004, Q6o:0.0001, K6o:0.0005, A6o:0.0028, 72s:0.0171, 73s:0.0001, 74s:0.0132, 75s:0.0773, 76s:0.2506, 77:0.0187, 87o:0.0008, 97o:0.0001, T7o:0.0002, J7o:0.0004, Q7o:0.0045, K7o:0.0001, A7o:0.0025, 82s:0.0171, 83s:0.0003, 84s:0.0007, 85s:0.1217, 86s:0.0054, 87s:0.0017, 88:0.0205, 98o:0.0001, T8o:0.0037, J8o:0.0001, Q8o:0.0024, K8o:0.0035, A8o:0.002, 92s:0.0034, 93s:0.008, 94s:0.0002, 95s:0.038, 96s:0.0083, 97s:0.0022, 98s:0.0242, 99:0.4066, T9o:0.0031, Q9o:0.0029, K9o:0.0007, A9o:0.0011, T2s:0.0168, T3s:0.001, T4s:0.1516, T5s:0.0104, T6s:0.0001, T7s:0.0037, T8s:0.0009, T9s:0.0103, TT:0.0037, JTo:0.0001, QTo:0.0017, KTo:0.0007, ATo:0.0031, J2s:0.0437, J3s:0.006, J4s:0.0132, J5s:0.0234, J6s:0.0002, J7s:0.0086, J8s:0.0464, J9s:0.0005, JTs:0.1108, JJ:0.902, QJo:0.0001, KJo:0.0036, AJo:0.0044, Q2s:0.0003, Q3s:0.1378, Q4s:0.1619, Q5s:0.0046, Q6s:0.0055, Q7s:0.0079, Q8s:0.029, Q9s:0.1735, QTs:0.0267, QJs:0.0177, QQ:0.8527, KQo:0.0085, AQo:0.0686, K2s:0.0053, K3s:0.0113, K4s:0.0054, K5s:0.0019, K6s:0.0052, K7s:0.0188, K8s:0.0099, K9s:0.0365, KTs:0.0001, KJs:0.3105, KQs:0.0266, KK:0.9974, AKo:0.0047, A2s:0.0226, A3s:0.001, A4s:0.0003, A5s:0.2818, A6s:0.111, A7s:0.0016, A8s:0.2143, A9s:0.2041, ATs:0.2194, AJs:0.37, AQs:0.1818, AKs:0.3672, AA:0.9991"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0003, 42o:0.0036, 52o:0.0015, 72o:0.0001, 82o:0.0007, 92o:0.0001, T2o:0.0003, Q2o:0.0001, K2o:0.0009, A2o:0.0005, 32s:0.0315, 33:0.0155, 53o:0.0017, 63o:0.0008, 73o:0.0001, 83o:0.0034, 93o:0.0001, T3o:0.001, J3o:0.0004, Q3o:0.0001, K3o:0.0073, A3o:0.0478, 42s:0.004, 43s:0.0111, 44:0.0021, 64o:0.0001, 74o:0.0002, 84o:0.0096, 94o:0.0011, T4o:0.0003, J4o:0.0001, Q4o:0.0003, K4o:0.0009, A4o:0.0057, 52s:0.0259, 53s:0.4703, 54s:0.2092, 55:0.3305, 65o:0.0004, 75o:0.0021, 85o:0.0008, 95o:0.0205, T5o:0.0002, J5o:0.0042, Q5o:0.0009, K5o:0.0001, A5o:0.0001, 62s:0.0252, 63s:0.0049, 64s:0.3883, 65s:0.0557, 66:0.0034, 76o:0.0027, 86o:0.0011, 96o:0.0009, T6o:0.0043, J6o:0.0002, Q6o:0.0018, K6o:0.0001, A6o:0.0014, 72s:0.005, 73s:0.0368, 74s:0.0167, 75s:0.0075, 76s:0.0015, 77:0.5386, 87o:0.0012, 97o:0.0001, T7o:0.0026, J7o:0.0003, Q7o:0.0891, A7o:0.0028, 82s:0.0006, 83s:0.0107, 84s:0.0003, 85s:0.0007, 86s:0.0166, 87s:0.0003, 88:0.0161, 98o:0.0673, T8o:0.0001, J8o:0.0001, Q8o:0.0001, K8o:0.0197, A8o:0.01, 92s:0.0029, 93s:0.0027, 94s:0.012, 95s:0.0001, 96s:0.1571, 97s:0.0244, 98s:0.0259, 99:0.4256, T9o:0.0048, Q9o:0.002, K9o:0.0085, A9o:0.0002, T2s:0.0121, T3s:0.0049, T4s:0.105, T5s:0.0003, T6s:0.0019, T7s:0.1234, T8s:0.0831, T9s:0.1736, TT:0.7631, JTo:0.002, QTo:0.0115, KTo:0.0002, ATo:0.0012, J2s:0.0839, J3s:0.0155, J4s:0.0106, J5s:0.0006, J6s:0.0221, J7s:0.0005, J8s:0.0214, J9s:0.0006, JTs:0.0521, JJ:0.4868, QJo:0.0026, KJo:0.0038, AJo:0.0038, Q2s:0.0091, Q3s:0.0122, Q4s:0.004, Q5s:0.1359, Q6s:0.0076, Q7s:0.0358, Q8s:0.0012, Q9s:0.0002, QTs:0.3321, QJs:0.4813, QQ:0.999, KQo:0.0001, AQo:0.0725, K2s:0.0163, K3s:0.0005, K4s:0.0002, K5s:0.199, K6s:0.0811, K7s:0.0067, K8s:0.029, K9s:0.0066, KTs:0.0735, KJs:0.0385, KQs:0.0009, KK:0.8842, AKo:0.2516, A2s:0.0659, A3s:0.0839, A4s:0.0004, A5s:0.0013, A6s:0.0154, A7s:0.1178, A8s:0.0007, A9s:0.0835, ATs:0.0188, AJs:0.2864, AQs:0.0607, AKs:0.7781, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0364, 32o:0.0001, 42o:0.0251, 52o:0.0001, 62o:0.0132, 82o:0.0011, 92o:0.0013, J2o:0.0002, K2o:0.0188, A2o:0.0032, 32s:0.0071, 33:0.002, 43o:0.0025, 53o:0.0145, 63o:0.0034, 83o:0.0332, 93o:0.0003, T3o:0.0005, J3o:0.0005, K3o:0.001, A3o:0.0441, 43s:0.1465, 44:0.0828, 54o:0.0003, 64o:0.0001, 74o:0.0005, 84o:0.0048, T4o:0.0006, Q4o:0.0152, K4o:0.0001, A4o:0.0139, 53s:0.4086, 54s:0.1295, 55:0.1517, 65o:0.0003, 75o:0.0011, 85o:0.0005, 95o:0.0008, J5o:0.0002, K5o:0.0002, A5o:0.0081, 62s:0.0035, 63s:0.0462, 64s:0.0684, 65s:0.0009, 66:0.1433, 76o:0.0002, 86o:0.0003, 96o:0.0056, T6o:0.001, J6o:0.0012, Q6o:0.0037, K6o:0.0009, A6o:0.0067, 72s:0.103, 74s:0.0051, 75s:0.0296, 76s:0.3038, 77:0.1979, 87o:0.0037, 97o:0.0424, T7o:0.0001, J7o:0.0004, Q7o:0.0004, K7o:0.0482, A7o:0.0002, 82s:0.0087, 83s:0.1893, 84s:0.251, 85s:0.0387, 86s:0.0922, 87s:0.0578, 88:0.0392, T8o:0.0003, J8o:0.0005, Q8o:0.0002, K8o:0.0116, A8o:0.0003, 92s:0.0417, 93s:0.0202, 94s:0.018, 95s:0.1439, 96s:0.0654, 97s:0.1393, 98s:0.0143, 99:0.0247, T9o:0.0014, J9o:0.0007, Q9o:0.0003, K9o:0.2603, A9o:0.0002, T2s:0.0194, T3s:0.0063, T4s:0.0181, T5s:0.0297, T6s:0.0025, T7s:0.0165, T8s:0.0894, T9s:0.0101, TT:0.0416, JTo:0.0149, QTo:0.0001, KTo:0.0691, ATo:0.0035, J2s:0.033, J3s:0.0944, J4s:0.0062, J5s:0.3631, J6s:0.0231, J7s:0.1484, J8s:0.015, J9s:0.0008, JTs:0.0028, JJ:0.6313, QJo:0.0001, AJo:0.18, Q2s:0.0473, Q3s:0.0104, Q4s:0.3207, Q5s:0.0354, Q6s:0.0008, Q7s:0.0124, Q8s:0.2284, Q9s:0.0442, QTs:0.0117, QJs:0.0232, QQ:0.508, KQo:0.002, AQo:0.2124, K2s:0.0031, K3s:0.0012, K4s:0.0427, K5s:0.0687, K6s:0.0001, K7s:0.0103, K8s:0.2322, K9s:0.0042, KTs:0.7266, KJs:0.0546, KQs:0.3613, KK:0.3995, AKo:0.2976, A2s:0.0462, A3s:0.2273, A5s:0.0002, A6s:0.0104, A7s:0.0882, A8s:0.0201, A9s:0.0003, ATs:0.0045, AJs:0.1118, AQs:0.0425, AKs:0.1134, AA:0.0101"
      },
      {
        "action": "4bet 21bb",
        "min": 0.0001,
        "range": "22:0.0859, 32o:0.0001, 42o:0.0003, 52o:0.0006, 62o:0.0028, 72o:0.0004, 92o:0.0006, T2o:0.0018, J2o:0.0003, Q2o:0.0001, K2o:0.0026, A2o:0.0009, 32s:0.0037, 33:0.0636, 43o:0.0018, 53o:0.0003, 63o:0.0005, 83o:0.0014, 93o:0.0003, T3o:0.0007, J3o:0.0002, Q3o:0.0008, K3o:0.0005, A3o:0.0002, 42s:0.0203, 43s:0.7271, 44:0.2878, 54o:0.0007, 64o:0.0002, 74o:0.0005, 84o:0.0006, 94o:0.0001, T4o:0.0003, J4o:0.0002, Q4o:0.002, K4o:0.0021, 52s:0.0032, 53s:0.1401, 54s:0.6547, 55:0.0028, 75o:0.0012, 85o:0.0005, 95o:0.0001, T5o:0.0001, J5o:0.0003, Q5o:0.0011, K5o:0.0006, 62s:0.0256, 63s:0.0257, 64s:0.0697, 65s:0.0001, 66:0.4331, 76o:0.0002, 96o:0.0027, T6o:0.0005, J6o:0.0002, A6o:0.0007, 72s:0.0251, 74s:0.1038, 76s:0.1309, 77:0.6975, 87o:0.0002, 97o:0.0001, T7o:0.0003, J7o:0.0002, Q7o:0.0015, K7o:0.0042, A7o:0.0005, 82s:0.0124, 83s:0.0101, 84s:0.0046, 85s:0.1611, 86s:0.0273, 87s:0.0009, 88:0.0033, T8o:0.0001, J8o:0.0003, Q8o:0.0009, K8o:0.0092, 92s:0.0547, 93s:0.0284, 94s:0.0117, 95s:0.0014, 96s:0.0452, 97s:0.08, 98s:0.2058, 99:0.0496, T9o:0.0074, J9o:0.0005, Q9o:0.0011, K9o:0.0005, A9o:0.0002, T2s:0.0018, T3s:0.001, T4s:0.0246, T5s:0.0007, T6s:0.0002, T7s:0.0232, T8s:0.1676, T9s:0.0003, TT:0.1112, JTo:0.001, QTo:0.0001, KTo:0.0705, ATo:0.0406, J2s:0.0076, J3s:0.3637, J4s:0.0004, J5s:0.029, J6s:0.0081, J7s:0.4987, J8s:0.6385, J9s:0.0035, JTs:0.0002, JJ:0.0019, QJo:0.0008, AJo:0.0093, Q2s:0.2046, Q3s:0.0019, Q4s:0.0076, Q5s:0.0457, Q6s:0.003, Q8s:0.3289, Q9s:0.0208, QTs:0.0019, QJs:0.1311, QQ:0.4777, KQo:0.0004, AQo:0.0336, K2s:0.1926, K3s:0.0132, K4s:0.0021, K5s:0.251, K6s:0.1196, K7s:0.0799, K8s:0.01, K9s:0.0025, KTs:0.0014, KJs:0.1408, KQs:0.1949, KK:0.5993, AKo:0.6569, A2s:0.0388, A3s:0.0676, A4s:0.0007, A5s:0.0468, A6s:0.0189, A7s:0.0904, A8s:0.0021, A9s:0.0003, ATs:0.0097, AJs:0.3152, AQs:0.7731, AKs:0.867, AA:0.9899"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 54s:0.0002, 55:0.0521, 66:0.0991, 77:0.0416, 88:0.101, 97s:0.0001, 99:0.1664, TT:0.2189, AJo:0.0709, Q5s:0.0001, Q9s:0.0001, QTs:0.0001, QJs:0.0519, KQo:0.2838, AQo:0.1287, K6s:0.0001, K7s:0.0001, K9s:0.0553, KTs:0.0594, KJs:0.2127, KQs:0.5302, A4s:0.0169, ATs:0.0666, AJs:0.3273, AQs:0.1287, AA:0.0379"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.3029, 33:0.3638, 44:0.3866, 53s:0.0001, 54s:0.0005, 55:0.4041, 64s:0.0001, 65s:0.0002, 66:0.3935, 77:0.3809, 82s:0.0001, 88:0.4044, 98s:0.0001, 99:0.782, T9s:0.0003, TT:0.757, J9s:0.0002, JTs:0.0002, JJ, KJo:0.0002, AJo:0.3228, Q6s:0.0002, QJs:0.0004, QQ, KQo:0.0006, AQo:0.8282, K3s:0.0001, K5s:0.0006, K7s:0.0003, K9s:0.047, KTs:0.0085, KJs:0.2658, KQs:0.4146, KK, AKo, A4s:0.0005, A5s:0.0004, A9s:0.0019, ATs:0.004, AJs:0.6131, AQs:0.8713, AKs, AA:0.9621"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0045, 42o:0.0002, 52o:0.0002, 62o:0.0001, 72o:0.0027, 92o:0.0001, T2o:0.0005, J2o:0.0096, Q2o:0.0013, K2o:0.0001, A2o:0.0007, 32s:0.0017, 33:0.0031, 53o:0.0029, 63o:0.0033, 73o:0.001, 83o:0.0029, 93o:0.0002, T3o:0.0002, J3o:0.001, Q3o:0.0007, A3o:0.0027, 42s:0.0062, 43s:0.0197, 54o:0.0002, 64o:0.0001, 84o:0.0014, T4o:0.0012, J4o:0.0011, Q4o:0.002, A4o:0.0197, 52s:0.0004, 53s:0.0787, 54s:0.0011, 55:0.0048, 65o:0.0031, 75o:0.0003, 85o:0.0001, 95o:0.0006, J5o:0.0016, Q5o:0.0022, K5o:0.0031, A5o:0.02, 62s:0.1052, 63s:0.0124, 64s:0.002, 65s:0.0769, 66:0.0232, 76o:0.0004, 86o:0.0015, 96o:0.0108, T6o:0.0007, J6o:0.0038, K6o:0.0006, A6o:0.0001, 72s:0.0795, 73s:0.0079, 75s:0.0035, 76s:0.2913, 77:0.0594, 87o:0.0004, 97o:0.0002, T7o:0.0068, J7o:0.0002, Q7o:0.0008, K7o:0.0042, A7o:0.0042, 82s:0.0015, 83s:0.002, 84s:0.002, 85s:0.0029, 86s:0.0041, 87s:0.0098, 88:0.0254, 98o:0.0006, J8o:0.0037, Q8o:0.0003, K8o:0.0002, A8o:0.0026, 92s:0.0015, 93s:0.0202, 94s:0.0006, 95s:0.0007, 96s:0.0116, 97s:0.0022, 98s:0.0036, 99:0.1389, T9o:0.0005, J9o:0.0005, Q9o:0.0014, A9o:0.0026, T2s:0.0147, T3s:0.0027, T4s:0.0072, T7s:0.0041, T8s:0.0601, T9s:0.001, TT:0.0933, JTo:0.0045, QTo:0.0002, KTo:0.001, ATo:0.0021, J2s:0.0034, J3s:0.0068, J4s:0.0052, J5s:0.0011, J6s:0.2456, J7s:0.0222, J8s:0.068, J9s:0.0008, JTs:0.0019, JJ:0.0259, QJo:0.0019, KJo:0.006, AJo:0.0018, Q2s:0.0032, Q3s:0.0003, Q4s:0.0001, Q5s:0.0365, Q6s:0.0065, Q7s:0.0768, Q8s:0.0024, Q9s:0.0008, QTs:0.0007, QJs:0.0296, QQ:0.7792, KQo:0.2267, AQo:0.1054, K2s:0.0036, K3s:0.369, K4s:0.0211, K5s:0.0003, K6s:0.0156, K7s:0.039, K8s:0.0882, K9s:0.0004, KTs:0.0018, KJs:0.0084, KQs:0.1119, KK:0.9589, AKo:0.0393, A2s:0.0002, A3s:0.0282, A4s:0.0168, A5s:0.0364, A6s:0.0623, A7s:0.0707, A8s:0.03, A9s:0.0224, ATs:0.0906, AJs:0.1027, AQs:0.0589, AKs:0.1396, AA:0.9994"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "22:0.0037, 42o:0.0017, 52o:0.0016, 62o:0.0005, 72o:0.0002, 82o:0.0009, 92o:0.0007, J2o:0.0005, K2o:0.0012, A2o:0.002, 32s:0.2082, 33:0.0018, 43o:0.0005, 53o:0.0001, 63o:0.0029, 73o:0.0003, 83o:0.0003, 93o:0.0017, J3o:0.0017, K3o:0.0167, A3o:0.0001, 42s:0.0005, 43s:0.0001, 44:0.003, 54o:0.0016, 64o:0.001, 84o:0.0041, 94o:0.0033, T4o:0.0001, J4o:0.0001, Q4o:0.0071, K4o:0.0001, 52s:0.0098, 53s:0.0039, 54s:0.0718, 55:0.0158, 65o:0.0014, 75o:0.0001, 85o:0.0007, 95o:0.0002, T5o:0.0001, J5o:0.0004, Q5o:0.0007, K5o:0.0085, A5o:0.0006, 62s:0.0013, 63s:0.0011, 64s:0.0055, 65s:0.0005, 66:0.0109, 76o:0.0012, 96o:0.0059, T6o:0.0025, J6o:0.0005, Q6o:0.0014, K6o:0.0003, A6o:0.0159, 72s:0.0018, 73s:0.001, 74s:0.0214, 75s:0.0166, 76s:0.0244, 77:0.0036, 87o:0.002, 97o:0.006, T7o:0.0006, J7o:0.0001, Q7o:0.0024, K7o:0.003, A7o:0.0014, 82s:0.0003, 83s:0.002, 84s:0.0049, 85s:0.0047, 86s:0.0004, 87s:0.0031, 88:0.005, T8o:0.0139, J8o:0.0091, A8o:0.0004, 92s:0.003, 93s:0.0012, 94s:0.0039, 95s:0.0012, 96s:0.0217, 97s:0.0007, 98s:0.0062, 99:0.4671, T9o:0.0002, J9o:0.0032, Q9o:0.0039, K9o:0.0011, A9o:0.0022, T2s:0.001, T3s:0.0225, T4s:0.002, T5s:0.018, T6s:0.002, T7s:0.0034, T8s:0.0017, T9s:0.0112, TT:0.7085, JTo:0.0007, QTo:0.0009, KTo:0.0038, ATo:0.0003, J2s:0.0001, J3s:0.0759, J4s:0.0007, J5s:0.0963, J6s:0.007, J7s:0.156, J8s:0.0013, J9s:0.0619, JTs:0.0007, JJ:0.0004, QJo:0.0004, KJo:0.0178, AJo:0.0012, Q2s:0.0082, Q3s:0.0987, Q4s:0.0391, Q5s:0.0179, Q6s:0.0045, Q7s:0.0319, Q8s:0.0007, Q9s:0.0004, QTs:0.0009, QJs:0.0005, QQ:0.3766, KQo:0.0025, AQo:0.1091, K2s:0.001, K3s:0.003, K4s:0.0021, K5s:0.0002, K6s:0.0037, K7s:0.0011, K8s:0.0185, K9s:0.0001, KTs:0.13, KJs:0.1445, KQs:0.0392, KK:0.1141, AKo:0.1455, A2s:0.05, A3s:0.2254, A4s:0.0092, A5s:0.004, A6s:0.0205, A7s:0.005, A8s:0.021, A9s:0.0476, ATs:0.0001, AJs:0.0494, AQs:0.177, AKs:0.0056, AA:0.001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0007, 32o:0.0003, 42o:0.0613, 52o:0.0054, 62o:0.0031, 72o:0.0007, 82o:0.0004, 92o:0.0182, T2o:0.001, J2o:0.0004, Q2o:0.0078, K2o:0.0001, A2o:0.0003, 32s:0.0116, 33:0.0112, 43o:0.0002, 53o:0.0071, 63o:0.0001, 83o:0.0022, 93o:0.0004, T3o:0.0011, J3o:0.0002, Q3o:0.0013, K3o:0.0031, A3o:0.0001, 42s:0.0005, 43s:0.002, 44:0.0014, 54o:0.0011, 64o:0.0004, 84o:0.0016, J4o:0.0035, Q4o:0.0065, K4o:0.0001, A4o:0.0005, 52s:0.005, 53s:0.2814, 54s:0.1436, 55:0.0011, 65o:0.0315, 75o:0.0026, 85o:0.0005, 95o:0.001, T5o:0.0004, J5o:0.0004, Q5o:0.0008, K5o:0.0035, A5o:0.0008, 62s:0.003, 63s:0.0016, 64s:0.0053, 65s:0.0011, 66:0.0967, 76o:0.0003, 86o:0.0018, 96o:0.0068, T6o:0.0002, J6o:0.0016, Q6o:0.0002, K6o:0.0117, A6o:0.0791, 72s:0.0002, 73s:0.0005, 74s:0.024, 75s:0.519, 76s:0.0258, 77:0.4405, 87o:0.0002, 97o:0.002, T7o:0.0205, J7o:0.0033, K7o:0.0006, A7o:0.0015, 82s:0.0002, 83s:0.0118, 84s:0.0322, 85s:0.0014, 86s:0.0003, 87s:0.0106, 88:0.1018, T8o:0.0012, J8o:0.0031, Q8o:0.0048, K8o:0.0004, A8o:0.0003, 92s:0.0164, 93s:0.0259, 94s:0.0102, 95s:0.0012, 96s:0.0349, 97s:0.1068, 98s:0.0005, 99:0.48, T9o:0.0007, J9o:0.0055, Q9o:0.0205, A9o:0.0001, T2s:0.001, T3s:0.0402, T4s:0.0139, T5s:0.0197, T6s:0.0079, T7s:0.0053, T8s:0.001, T9s:0.0003, TT:0.0454, JTo:0.0004, QTo:0.003, KTo:0.0008, ATo:0.0042, J2s:0.0158, J3s:0.0032, J5s:0.0111, J6s:0.0015, J7s:0.008, J8s:0.0013, J9s:0.0027, JTs:0.0186, JJ:0.1964, QJo:0.0003, KJo:0.0073, AJo:0.0023, Q2s:0.0009, Q3s:0.1742, Q4s:0.0091, Q5s:0.4113, Q6s:0.0022, Q7s:0.3934, Q8s:0.0007, Q9s:0.0061, QTs:0.0052, QJs:0.0002, QQ:0.2713, KQo:0.001, AQo:0.2415, K2s:0.0004, K3s:0.0011, K4s:0.0052, K5s:0.0002, K6s:0.0009, K7s:0.0008, K8s:0.0092, K9s:0.0001, KTs:0.0113, KJs:0.0964, KQs:0.1945, KK:0.683, AKo:0.0306, A2s:0.0301, A3s:0.0014, A4s:0.1384, A5s:0.0043, A6s:0.4272, A7s:0.0032, A8s:0.1336, A9s:0.4187, ATs:0.04, AJs:0.2472, AQs:0.4003, AKs:0.8555, AA:0.9874"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 42o:0.0001, 62o:0.0009, 72o:0.0001, 82o:0.0001, 92o:0.0001, J2o:0.0005, Q2o:0.0002, K2o:0.0001, A2o:0.0003, 32s:0.001, 33:0.0002, 53o:0.001, 63o:0.0004, J3o:0.0001, Q3o:0.0004, K3o:0.0001, 42s:0.0007, 43s:0.0002, 64o:0.0001, 74o:0.0004, 84o:0.0002, 94o:0.0001, T4o:0.0005, J4o:0.0009, Q4o:0.0001, K4o:0.0004, A4o:0.0001, 53s:0.0008, 55:0.0008, 75o:0.0001, 95o:0.0001, T5o:0.0002, J5o:0.0014, K5o:0.0004, A5o:0.0001, 62s:0.0054, 63s:0.0001, 64s:0.0006, 65s:0.0001, 66:0.0011, 76o:0.0004, 96o:0.0001, T6o:0.0013, J6o:0.0001, Q6o:0.0001, A6o:0.0002, 72s:0.0055, 73s:0.0105, 74s:0.002, 75s:0.036, 76s:0.0008, 77:0.0152, 97o:0.0003, T7o:0.0009, Q7o:0.0002, K7o:0.0004, A7o:0.0003, 83s:0.0058, 84s:0.0022, 85s:0.0007, 86s:0.0032, 87s:0.0148, 88:0.1519, 98o:0.0001, T8o:0.0031, J8o:0.0001, Q8o:0.0003, K8o:0.0006, A8o:0.0008, 93s:0.0007, 94s:0.0006, 95s:0.0004, 96s:0.0003, 97s:0.0037, 98s:0.0002, 99:0.8339, T9o:0.0004, J9o:0.0003, Q9o:0.0005, K9o:0.0015, A9o:0.0006, T2s:0.0004, T3s:0.0007, T6s:0.0001, T7s:0.0082, T8s:0.0025, T9s:0.0022, TT:0.0462, JTo:0.001, QTo:0.0027, KTo:0.0001, ATo:0.0031, J2s:0.0001, J3s:0.0001, J4s:0.0008, J5s:0.0005, J6s:0.0002, J7s:0.003, J8s:0.0003, J9s:0.0001, JTs:0.0517, JJ:0.9626, QJo:0.0018, KJo:0.0003, AJo:0.0048, Q2s:0.0006, Q3s:0.0001, Q4s:0.0011, Q6s:0.0003, Q7s:0.0005, Q8s:0.0054, Q9s:0.0107, QTs:0.0049, QJs:0.0001, QQ:0.983, KQo:0.0041, AQo:0.0004, K2s:0.0005, K3s:0.0053, K4s:0.0087, K5s:0.0013, K6s:0.0018, K7s:0.0011, K8s:0.0002, K9s:0.0017, KTs:0.0303, KJs:0.0008, KQs:0.0037, KK:0.9985, AKo:0.7382, A2s:0.0187, A3s:0.0073, A4s:0.0451, A5s:0.0005, A6s:0.0007, A7s:0.0007, A8s:0.0071, A9s:0.0191, ATs:0.0721, AJs:0.322, AQs:0.8036, AKs:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0009, 77:0.0014, 88:0.0018, 99:0.0037, TT:0.9741, JJ, QQ, AQo:0.7096, KK, AKo, AJs:0.0025, AQs:0.9999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0917, 52o:0.0018, 62o:0.0014, 72o:0.0001, 82o:0.0054, T2o:0.0002, Q2o:0.0055, K2o:0.0014, A2o:0.0006, 32s:0.0007, 33:0.0218, 53o:0.0005, 73o:0.0011, 83o:0.0001, T3o:0.0002, J3o:0.0001, Q3o:0.0022, A3o:0.0028, 42s:0.0003, 43s:0.0001, 44:0.0084, 54o:0.002, 64o:0.0017, 74o:0.0023, 84o:0.0007, T4o:0.0006, J4o:0.0009, Q4o:0.0016, K4o:0.0011, A4o:0.01, 52s:0.0032, 54s:0.028, 55:0.0057, 65o:0.0018, 85o:0.0025, 95o:0.0008, T5o:0.0019, J5o:0.0014, Q5o:0.0007, K5o:0.0003, A5o:0.0074, 62s:0.0002, 63s:0.0436, 64s:0.001, 65s:0.004, 66:0.0014, 76o:0.0002, 86o:0.0058, 96o:0.0005, T6o:0.0034, J6o:0.0078, Q6o:0.0001, K6o:0.0061, 72s:0.0145, 73s:0.0039, 74s:0.0104, 75s:0.0004, 76s:0.0004, 77:0.107, 87o:0.0013, 97o:0.0038, T7o:0.0004, J7o:0.0013, Q7o:0.0002, K7o:0.0008, A7o:0.001, 82s:0.0003, 83s:0.0401, 84s:0.0006, 85s:0.2425, 86s:0.002, 87s:0.0005, 88:0.0146, 98o:0.0001, T8o:0.0014, J8o:0.0019, Q8o:0.0064, K8o:0.0002, A8o:0.0002, 92s:0.0039, 93s:0.0025, 94s:0.0001, 95s:0.0167, 96s:0.0741, 97s:0.0081, 98s:0.0011, 99:0.2414, T9o:0.0006, J9o:0.0047, Q9o:0.0009, K9o:0.0018, A9o:0.042, T2s:0.0048, T3s:0.0789, T4s:0.0009, T5s:0.0404, T6s:0.0028, T7s:0.0009, T8s:0.0108, T9s:0.0007, TT:0.9631, JTo:0.0164, QTo:0.0081, ATo:0.0001, J2s:0.0023, J3s:0.0013, J4s:0.0007, J5s:0.034, J6s:0.0016, J7s:0.0151, J8s:0.0124, J9s:0.0192, JTs:0.5984, JJ:0.5887, QJo:0.0002, KJo:0.0019, AJo:0.0074, Q2s:0.1429, Q3s:0.0026, Q4s:0.0192, Q5s:0.0002, Q6s:0.0225, Q7s:0.0312, Q8s:0.0558, Q9s:0.039, QTs:0.0103, QJs:0.0159, QQ:0.8769, KQo:0.0086, AQo:0.1518, K2s:0.0155, K3s:0.0396, K4s:0.0002, K5s:0.0396, K6s:0.0001, K7s:0.2278, K8s:0.0619, K9s:0.7553, KTs:0.0449, KJs:0.3768, KQs:0.0122, KK:0.977, AKo:0.5026, A2s:0.0045, A3s:0.0509, A4s:0.0007, A5s:0.0005, A6s:0.2415, A7s:0.3405, A8s:0.0029, A9s:0.0062, ATs:0.0061, AJs:0.0756, AQs:0.424, AKs:0.2952, AA:0.9343"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0135, 32o:0.0001, 72o:0.0009, 92o:0.0001, J2o:0.0001, K2o:0.0009, A2o:0.0014, 32s:0.0012, 33:0.0001, 43o:0.0002, 63o:0.0003, 73o:0.0016, T3o:0.0009, Q3o:0.0001, 42s:0.0093, 43s:0.0217, 44:0.0007, 64o:0.0001, 74o:0.0001, T4o:0.0011, J4o:0.0002, Q4o:0.0002, A4o:0.0188, 52s:0.0091, 53s:0.0001, 54s:0.0107, 55:0.0011, 65o:0.0002, 85o:0.0042, 95o:0.0001, T5o:0.0001, J5o:0.0001, Q5o:0.0002, K5o:0.002, A5o:0.0001, 62s:0.0041, 63s:0.0012, 64s:0.0009, 65s:0.0128, 66:0.0028, T6o:0.0002, J6o:0.0001, A6o:0.0001, 72s:0.0012, 73s:0.021, 74s:0.0022, 76s:0.0054, 77:0.0008, 97o:0.0001, J7o:0.0017, Q7o:0.0005, K7o:0.0001, A7o:0.0004, 82s:0.0198, 83s:0.0011, 84s:0.0001, 85s:0.0004, 86s:0.0026, 87s:0.0028, 88:0.0178, 98o:0.0003, K8o:0.0005, 92s:0.0001, 94s:0.0027, 95s:0.002, 96s:0.0358, 97s:0.0015, 98s:0.0082, 99:0.0067, J9o:0.0001, Q9o:0.0004, K9o:0.0003, A9o:0.0002, T2s:0.0132, T3s:0.0007, T4s:0.0018, T5s:0.0001, T6s:0.0003, T7s:0.0001, T8s:0.0102, T9s:0.0011, TT:0.0177, QTo:0.0005, J2s:0.0002, J3s:0.0124, J4s:0.0034, J5s:0.001, J6s:0.0008, J7s:0.0003, J8s:0.0082, J9s:0.0009, JTs:0.0063, JJ:0.2014, QJo:0.0005, KJo:0.0026, AJo:0.0077, Q2s:0.0011, Q3s:0.0793, Q4s:0.0015, Q5s:0.0108, Q6s:0.037, Q7s:0.1087, Q8s:0.0063, Q9s:0.001, QTs:0.1901, QJs:0.0007, QQ:0.1318, KQo:0.0001, AQo:0.0101, K2s:0.0051, K3s:0.0002, K4s:0.0197, K5s:0.0038, K6s:0.0019, K7s:0.0541, K8s:0.0066, K9s:0.0031, KTs:0.0228, KJs:0.0004, KQs:0.0116, KK:0.0292, AKo:0.0019, A2s:0.4946, A3s:0.0021, A4s:0.2647, A5s:0.148, A6s:0.0155, A7s:0.0058, A8s:0.122, A9s:0.0017, ATs:0.2418, AJs:0.0016, AQs:0.033, AKs:0.0002, AA:0.6766"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.0753, 32o:0.0001, 62o:0.0001, 72o:0.0005, 82o:0.0001, 92o:0.0001, J2o:0.0001, Q2o:0.0011, K2o:0.0012, A2o:0.0003, 32s:0.0002, 33:0.0002, 43o:0.0006, 63o:0.0001, 73o:0.0008, 93o:0.0002, T3o:0.0004, Q3o:0.0002, K3o:0.0018, 42s:0.1154, 43s:0.0039, 44:0.01, 54o:0.0001, 64o:0.0011, 84o:0.0001, 94o:0.0003, T4o:0.0004, J4o:0.0001, Q4o:0.0001, K4o:0.0002, A4o:0.0005, 52s:0.043, 53s:0.0002, 54s:0.0008, 55:0.2715, 65o:0.0001, 85o:0.0003, 95o:0.0004, T5o:0.0003, J5o:0.001, Q5o:0.0005, K5o:0.0047, A5o:0.0773, 62s:0.2496, 63s:0.0224, 64s:0.0592, 65s:0.2136, 66:0.4007, 76o:0.0001, 86o:0.0004, 96o:0.0001, T6o:0.0005, J6o:0.0002, Q6o:0.0003, K6o:0.0009, A6o:0.0001, 72s:0.0246, 73s:0.0005, 74s:0.004, 75s:0.0007, 76s:0.8495, 77:0.2364, 87o:0.0001, 97o:0.0006, J7o:0.0006, Q7o:0.0001, K7o:0.0004, A7o:0.0009, 82s:0.0301, 83s:0.0041, 84s:0.0938, 85s:0.0002, 86s:0.0953, 87s:0.0019, 88:0.0924, 98o:0.0001, T8o:0.0005, J8o:0.0001, Q8o:0.0002, K8o:0.0004, A8o:0.0004, 93s:0.0002, 94s:0.1783, 95s:0.0928, 96s:0.5677, 97s:0.0216, 98s:0.3787, 99:0.0433, T9o:0.0008, J9o:0.0004, K9o:0.0009, A9o:0.0004, T2s:0.0077, T3s:0.239, T4s:0.0001, T5s:0.2912, T6s:0.0003, T7s:0.5819, T8s:0.1599, T9s:0.0015, TT:0.308, JTo:0.0006, KTo:0.0376, ATo:0.0008, J2s:0.0007, J3s:0.0004, J4s:0.0003, J5s:0.0236, J6s:0.0018, J7s:0.0017, J8s:0.012, J9s:0.001, JTs:0.313, JJ:0.6017, QJo:0.0266, KJo:0.1475, AJo:0.0849, Q2s:0.0602, Q3s:0.0049, Q4s:0.0255, Q5s:0.3206, Q6s:0.0003, Q7s:0.0102, Q8s:0.0009, Q9s:0.0277, QTs:0.0375, QJs:0.0219, QQ:0.8448, KQo:0.0008, AQo:0.0056, K2s:0.128, K3s:0.0036, K4s:0.0106, K5s:0.0016, K6s:0.3474, K7s:0.5161, K8s:0.0119, K9s:0.0052, KTs:0.1082, KJs:0.8384, KQs:0.1463, KK:0.9676, AKo:0.919, A2s:0.1834, A3s:0.724, A4s:0.2712, A5s:0.1536, A6s:0.3754, A7s:0.0008, A8s:0.0621, A9s:0.2614, ATs:0.3594, AJs:0.3655, AQs:0.5259, AKs:0.999, AA:0.3234"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0022, 88:0.0052, 99:0.0043, TT:0.004, JTs:0.0009, JJ:0.0001, AJo:0.0021, QTs:0.001, QJs:0.0014, AQo:0.021, KJs:0.0004, KQs:0.0032, AKo:0.0002, A9s:0.0005, ATs:0.0032, AJs:0.2029, AQs:0.0107, AKs:0.0011, AA:0.0274"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0295, 33:0.1168, 44:0.3201, 54s:0.0001, 55:0.1835, 66:0.5776, 77:0.6894, 88:0.338, 99:0.8707, T9s:0.0001, TT:0.996, J9s:0.0001, JJ:0.9999, KJo:0.0001, AJo:0.1156, Q8s:0.0001, QJs:0.0003, QQ, KQo:0.0003, AQo:0.9786, K5s:0.0002, KTs:0.0894, KJs:0.0742, KQs:0.0579, KK, AKo:0.9998, A2s:0.0002, A9s:0.0007, ATs:0.0003, AJs:0.3223, AQs:0.9892, AKs:0.9989, AA:0.9726"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.001, 42o:0.0001, 52o:0.0002, 62o:0.0004, 72o:0.0008, T2o:0.0004, J2o:0.0002, K2o:0.0003, A2o:0.0239, 32s:0.0002, 33:0.0037, 43o:0.0014, 53o:0.0001, 63o:0.0014, 73o:0.0006, 83o:0.0005, 93o:0.0005, T3o:0.0004, J3o:0.0005, Q3o:0.0001, K3o:0.0055, A3o:0.0005, 42s:0.0032, 43s:0.0074, 44:0.0073, 54o:0.001, 84o:0.0001, T4o:0.0001, J4o:0.0022, K4o:0.001, 52s:0.0001, 53s:0.002, 54s:0.0081, 55:0.027, 65o:0.0023, 75o:0.0001, 85o:0.0018, 95o:0.0002, T5o:0.0007, J5o:0.0007, Q5o:0.0002, K5o:0.0002, A5o:0.0004, 62s:0.0008, 63s:0.0002, 64s:0.0287, 65s:0.0003, 66:0.0005, 76o:0.0003, 86o:0.0004, 96o:0.0021, J6o:0.0005, K6o:0.0001, A6o:0.0003, 72s:0.0026, 73s:0.0001, 74s:0.0005, 75s:0.0004, 76s:0.001, 87o:0.0001, 97o:0.0008, T7o:0.0001, J7o:0.0006, Q7o:0.0004, A7o:0.0029, 82s:0.0008, 83s:0.0274, 84s:0.002, 85s:0.0011, 86s:0.0005, 87s:0.0033, 88:0.0007, T8o:0.0003, J8o:0.0001, Q8o:0.0013, K8o:0.0001, A8o:0.006, 92s:0.0432, 93s:0.0002, 94s:0.0006, 95s:0.0073, 96s:0.0516, 98s:0.0921, 99:0.0578, T9o:0.0001, J9o:0.0001, Q9o:0.0009, K9o:0.0004, T3s:0.0054, T4s:0.0658, T5s:0.0009, T6s:0.019, T7s:0.0056, T8s:0.0021, T9s:0.0015, TT:0.0178, JTo:0.0016, KTo:0.0159, ATo:0.0001, J2s:0.0484, J3s:0.0254, J4s:0.0122, J5s:0.0057, J6s:0.0006, J7s:0.0013, J8s:0.0005, J9s:0.0059, JTs:0.0012, JJ:0.0375, QJo:0.0011, KJo:0.0016, AJo:0.0031, Q2s:0.0038, Q3s:0.0005, Q4s:0.0216, Q5s:0.0138, Q6s:0.0094, Q7s:0.0021, Q8s:0.2719, Q9s:0.0043, QTs:0.0137, QJs:0.0012, QQ:0.1446, KQo:0.0042, AQo:0.2539, K2s:0.0191, K3s:0.0025, K4s:0.0025, K5s:0.0293, K6s:0.1705, K7s:0.0225, K8s:0.0005, K9s:0.0492, KTs:0.0417, KJs:0.0235, KQs:0.019, KK:0.0502, AKo:0.0296, A2s:0.0009, A3s:0.0027, A4s:0.0039, A5s:0.0079, A6s:0.0587, A7s:0.0705, A8s:0.1113, A9s:0.0004, ATs:0.1454, AJs:0.0809, AQs:0.3274, AKs:0.0417, AA:0.0173"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32o:0.0014, 42o:0.0009, 52o:0.0002, 62o:0.0004, T2o:0.0004, J2o:0.0001, K2o:0.0011, 32s:0.0005, 33:0.0117, 43o:0.0001, 63o:0.0009, 73o:0.0001, 93o:0.0001, J3o:0.0007, Q3o:0.0007, K3o:0.0007, A3o:0.0446, 42s:0.0118, 43s:0.0062, 44:0.0146, 54o:0.0001, 94o:0.0003, J4o:0.0015, Q4o:0.0006, K4o:0.0006, A4o:0.0002, 52s:0.0001, 53s:0.0138, 54s:0.0008, 55:0.0231, 65o:0.0013, 75o:0.001, 85o:0.0013, 95o:0.0001, T5o:0.0001, J5o:0.0004, Q5o:0.0094, A5o:0.0135, 62s:0.0358, 63s:0.075, 64s:0.0057, 65s:0.0003, 66:0.0002, 76o:0.0001, 86o:0.0003, 96o:0.0047, T6o:0.0002, J6o:0.0043, K6o:0.023, A6o:0.0001, 72s:0.0008, 73s:0.0024, 74s:0.001, 75s:0.0011, 76s:0.0117, 77:0.0094, 87o:0.0003, 97o:0.0001, T7o:0.0017, Q7o:0.0007, K7o:0.0016, A7o:0.013, 82s:0.0003, 83s:0.022, 84s:0.0065, 85s:0.1391, 87s:0.0008, 88:0.18, 98o:0.0022, T8o:0.0004, J8o:0.0059, Q8o:0.0058, K8o:0.0009, 92s:0.0242, 93s:0.0001, 94s:0.0002, 95s:0.0014, 96s:0.1394, 97s:0.0044, 98s:0.0286, 99:0.306, T9o:0.0017, J9o:0.0028, Q9o:0.0012, K9o:0.043, T2s:0.002, T3s:0.0694, T4s:0.006, T5s:0.0066, T6s:0.0278, T7s:0.0096, T8s:0.0085, T9s:0.0081, TT:0.7189, JTo:0.0003, KTo:0.0036, ATo:0.0004, J2s:0.0043, J3s:0.0589, J4s:0.0054, J5s:0.0018, J6s:0.0009, J7s:0.007, J8s:0.0058, J9s:0.0003, JTs:0.0132, JJ:0.7677, QJo:0.0048, KJo:0.0047, AJo:0.0004, Q2s:0.0037, Q3s:0.0177, Q4s:0.0735, Q5s:0.0236, Q6s:0.0205, Q7s:0.0041, Q8s:0.0917, Q9s:0.001, QTs:0.0943, QJs:0.0006, QQ:0.4727, KQo:0.0014, AQo:0.1459, K2s:0.0103, K3s:0.0001, K4s:0.0016, K5s:0.0084, K6s:0.0324, K7s:0.002, K8s:0.0161, K9s:0.0001, KTs:0.2092, KJs:0.0389, KQs:0.0635, KK:0.9458, AKo:0.3644, A2s:0.0002, A3s:0.0002, A4s:0.2203, A5s:0.0027, A6s:0.0256, A7s:0.0495, A8s:0.0207, A9s:0.1057, ATs:0.0633, AJs:0.5341, AQs:0.0493, AKs:0.6808, AA:0.9768"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@24.75|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.7662, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8|BB:4BET@13.7",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0002, 75s:0.0006, 84s:0.0002, 86s:0.0001, 87s:0.0001, TT:0.0001, JJ:0.0001, Q3s:0.0001, QJs:0.0001, KK:0.0005, A3s:0.0002, A5s:0.0001, AKs:0.0001, AA:0.004"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0001, 44:0.0001, A5o:0.001, 63s:0.0002, 66:0.0001, 74s:0.0003, 77:0.001, 82s:0.0001, 84s:0.0001, 86s:0.0001, 97s:0.0003, 98s:0.0001, T4s:0.0002, T7s:0.0005, T8s:0.0001, TT:0.0011, J9s:0.0002, JJ:0.0002, AJo:0.0001, Q2s:0.0002, Q3s:0.0001, AQo:0.0016, K9s:0.0001, KK:0.5797, AKo:0.9739, A2s:0.0016, A3s:0.0006, A4s:0.023, A5s:0.2902, A7s:0.0015, A8s:0.1892, A9s:0.0075, ATs:0.0071, AQs:0.028, AKs:0.9386, AA:0.996"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8|BB:4BET@13.7",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, 33:0.0002, 42s:0.0003, 43s:0.0133, 44:0.0004, 54o:0.0005, 52s:0.0005, 53s:0.0181, 54s:0.2666, 55:0.0014, 65o:0.0007, 63s:0.0007, 64s:0.0942, 65s:0.2864, 66:0.2025, 76o:0.0006, 73s:0.0008, 74s:0.0012, 75s:0.0386, 76s:0.2985, 77:0.1048, 82s:0.0003, 85s:0.1566, 86s:0.0849, 87s:0.1479, 88:0.208, 98o:0.001, T8o:0.0012, J8o:0.0005, 92s:0.0007, 93s:0.0011, 95s:0.001, 96s:0.0199, 97s:0.0921, 98s:0.2886, 99:0.0438, T9o:0.0016, J9o:0.0009, Q9o:0.0011, A9o:0.0001, T2s:0.0015, T3s:0.0002, T6s:0.0003, T7s:0.0008, T8s:0.0887, T9s:0.3264, TT:0.2232, JTo:0.0013, ATo:0.0006, J3s:0.0005, J4s:0.0006, J5s:0.0017, J6s:0.0017, J8s:0.0701, J9s:0.1789, JTs:0.203, JJ:0.2246, QJo:0.0002, AJo:0.0041, Q2s:0.0012, Q3s:0.0005, Q6s:0.0003, Q7s:0.0007, Q8s:0.0016, Q9s:0.0581, QTs:0.2431, QJs:0.369, QQ:0.0678, AQo:0.4388, K3s:0.0005, K9s:0.0116, KTs:0.0339, KJs:0.1307, KQs:0.0948, KK:0.001, AKo:0.0001, A2s:0.0013, A3s:0.0029, A4s:0.0015, A5s:0.0023, A6s:0.0005, A7s:0.0012, A8s:0.0381, A9s:0.1894, ATs:0.47, AJs:0.4694, AQs:0.4665, AKs:0.0004, AA:0.0114"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9388, 32o:0.0361, 42o:0.0232, 52o:0.0598, K2o:0.0146, A2o:0.0806, 32s:0.1949, 33:0.9801, 43o:0.0905, 53o:0.1244, 63o:0.0609, 73o:0.0057, Q3o:0.0201, K3o:0.0436, A3o:0.1526, 42s:0.2268, 43s:0.3943, 44:0.9716, 54o:0.2197, 64o:0.1126, 74o:0.0389, 84o:0.0078, Q4o:0.0007, K4o:0.0318, A4o:0.1276, 52s:0.2981, 53s:0.4099, 54s:0.6762, 55:0.9895, 65o:0.289, 75o:0.1305, 85o:0.0571, 95o:0.0004, Q5o:0.0632, K5o:0.0648, A5o:0.1987, 62s:0.1387, 63s:0.3146, 64s:0.4168, 65s:0.6282, 66:0.7855, 76o:0.1857, 86o:0.103, 96o:0.011, T6o:0.0001, J6o:0.0008, Q6o:0.0007, K6o:0.053, A6o:0.0312, 72s:0.1051, 73s:0.1448, 74s:0.2391, 75s:0.509, 76s:0.6416, 77:0.8754, 87o:0.1657, 97o:0.0892, T7o:0.0018, J7o:0.0001, Q7o:0.0277, K7o:0.0496, A7o:0.0461, 82s:0.1166, 83s:0.1224, 84s:0.1927, 85s:0.3201, 86s:0.3526, 87s:0.6313, 88:0.7874, 98o:0.142, T8o:0.0477, J8o:0.0401, Q8o:0.0415, K8o:0.0582, A8o:0.051, 92s:0.0912, 93s:0.0811, 94s:0.113, 95s:0.1818, 96s:0.3105, 97s:0.3797, 98s:0.4333, 99:0.9518, T9o:0.0229, J9o:0.0502, Q9o:0.0793, K9o:0.0446, A9o:0.0134, T2s:0.0448, T3s:0.0543, T4s:0.0562, T5s:0.0363, T6s:0.0638, T7s:0.1605, T8s:0.1918, T9s:0.2965, TT:0.6829, JTo:0.0682, QTo:0.0735, KTo:0.061, ATo:0.0396, J2s:0.1031, J3s:0.1338, J4s:0.1127, J5s:0.2273, J6s:0.1068, J7s:0.1695, J8s:0.2507, J9s:0.2324, JTs:0.2015, JJ:0.7722, QJo:0.1765, KJo:0.1135, AJo:0.1635, Q2s:0.1241, Q3s:0.2411, Q4s:0.249, Q5s:0.3081, Q6s:0.2473, Q7s:0.2554, Q8s:0.2677, Q9s:0.3724, QTs:0.3651, QJs:0.4833, QQ:0.9321, KQo:0.226, AQo:0.4673, K2s:0.2808, K3s:0.3374, K4s:0.2879, K5s:0.2757, K6s:0.3207, K7s:0.3711, K8s:0.3276, K9s:0.411, KTs:0.3193, KJs:0.518, KQs:0.6272, KK:0.999, AKo:0.9999, A2s:0.4312, A3s:0.6116, A4s:0.5049, A5s:0.6442, A6s:0.4201, A7s:0.4802, A8s:0.514, A9s:0.3658, ATs:0.2178, AJs:0.3628, AQs:0.5296, AKs:0.9996, AA:0.9886"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK, A7s:0.0001, ATs:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8|BB:4BET@34.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 77:0.0099, 88:0.1458, 99:0.5817, TT:0.7238, JJ:0.9066, QQ:0.9973, KK, AKo, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:3BET@8|HJ:4BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.063, TT, JJ, QQ, AQo, KK, AKo, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@12",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32o:0.0002, 52o:0.0008, 62o:0.0001, 72o:0.0001, 92o:0.0002, Q2o:0.0005, A2o:0.0002, 32s:0.0005, 33:0.0002, 53o:0.0002, 73o:0.0001, Q3o:0.0009, A3o:0.0001, 42s:0.0031, 43s:0.0015, 44:0.0004, 94o:0.0002, T4o:0.0002, Q4o:0.0001, A4o:0.0001, 52s:0.0002, 53s:0.0019, 54s:0.0111, 55:0.0023, K5o:0.0001, A5o:0.0013, 62s:0.0006, 63s:0.0018, 66:0.0004, 96o:0.0067, T6o:0.0001, Q6o:0.0001, A6o:0.0005, 72s:0.0003, 74s:0.0003, 75s:0.0022, 87o:0.0001, 97o:0.0001, J7o:0.0003, K7o:0.0002, 82s:0.0005, 84s:0.0001, 85s:0.0001, 86s:0.0001, 87s:0.0001, 98o:0.0001, Q8o:0.0003, K8o:0.0001, A8o:0.0001, 92s:0.002, 93s:0.0008, 94s:0.0006, 97s:0.0006, 98s:0.0024, 99:0.0052, T9o:0.0002, J9o:0.0009, Q9o:0.0004, K9o:0.0002, A9o:0.0009, T2s:0.0036, T3s:0.0003, T4s:0.0009, T5s:0.0001, T6s:0.0019, T7s:0.0004, T9s:0.0005, TT:0.0039, JTo:0.0001, QTo:0.0001, ATo:0.0011, J3s:0.0071, J4s:0.0001, J5s:0.0016, J6s:0.0023, J7s:0.0017, J8s:0.0003, J9s:0.0005, JTs:0.0005, JJ:0.0652, QJo:0.0003, KJo:0.0001, AJo:0.0019, Q2s:0.0014, Q3s:0.0008, Q4s:0.0873, Q5s:0.0003, Q6s:0.0004, Q7s:0.002, Q8s:0.0108, Q9s:0.0094, QTs:0.0047, QQ:0.187, KQo:0.0003, AQo:0.0267, K2s:0.001, K3s:0.0003, K5s:0.0004, K6s:0.0048, K7s:0.0027, K9s:0.0089, KTs:0.0002, KJs:0.0032, KQs:0.0295, KK:0.0541, A2s:0.0183, A3s:0.0026, A4s:0.0752, A5s:0.0018, A6s:0.0805, A8s:0.0015, A9s:0.0063, ATs:0.0023, AJs:0.3435, AQs:0.0317, AKs:0.0424, AA:0.0182"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0001, 32o:0.0002, 52o:0.0006, 72o:0.0002, 92o:0.0002, T2o:0.0001, J2o:0.0002, K2o:0.0285, A2o:0.136, 32s:0.0002, 33:0.3773, 73o:0.0002, 83o:0.0014, 93o:0.0001, Q3o:0.0001, A3o:0.7583, 42s:0.062, 43s:0.035, 44:0.1826, 64o:0.0021, T4o:0.0003, Q4o:0.0101, K4o:0.0001, A4o:0.0103, 52s:0.0017, 53s:0.0229, 54s:0.4355, 55:0.085, 65o:0.0218, 85o:0.0469, T5o:0.0004, J5o:0.0208, Q5o:0.016, K5o:0.0415, A5o:0.2576, 63s:0.0051, 64s:0.3712, 65s:0.0143, 66:0.4379, 76o:0.0343, T6o:0.0007, Q6o:0.0338, K6o:0.0006, A6o:0.6016, 72s:0.0139, 74s:0.0413, 75s:0.0012, 76s:0.2681, 77:0.0047, 87o:0.0369, 97o:0.0021, J7o:0.0003, K7o:0.0284, A7o:0.0001, 82s:0.0166, 84s:0.1339, 85s:0.019, 86s:0.3672, 87s:0.0003, 88:0.2005, 98o:0.003, Q8o:0.0244, K8o:0.0501, A8o:0.1703, 92s:0.0322, 93s:0.0008, 94s:0.2659, 95s:0.002, 96s:0.0021, 97s:0.0303, 98s:0.0333, 99:0.585, T9o:0.0001, J9o:0.0086, Q9o:0.0005, K9o:0.003, A9o:0.0061, T2s:0.004, T3s:0.0257, T4s:0.2667, T5s:0.0679, T6s:0.0006, T7s:0.0503, T9s:0.0007, TT:0.055, JTo:0.1085, QTo:0.0875, KTo:0.0072, ATo:0.3823, J2s:0.023, J3s:0.0019, J4s:0.0242, J5s:0.1594, J6s:0.455, J7s:0.0022, J8s:0.0225, J9s:0.0671, JTs:0.008, JJ:0.6354, QJo:0.0241, KJo:0.0088, AJo:0.0223, Q2s:0.0001, Q3s:0.0002, Q4s:0.2163, Q5s:0.0006, Q6s:0.0042, Q7s:0.0029, Q8s:0.0351, Q9s:0.3164, QTs:0.6335, QJs:0.1017, QQ:0.5814, KQo:0.1805, AQo:0.601, K2s:0.2467, K3s:0.0755, K4s:0.0926, K5s:0.1317, K6s:0.0725, K7s:0.1032, K8s:0.129, K9s:0.2905, KTs:0.1746, KJs:0.0539, KQs:0.1248, KK:0.911, AKo:0.9997, A2s:0.3894, A3s:0.5031, A4s:0.24, A5s:0.5235, A6s:0.7109, A7s:0.3804, A8s:0.1253, A9s:0.2134, ATs:0.5438, AJs:0.4075, AQs:0.3898, AKs:0.8268, AA:0.9818"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@12",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0012, KK:0.0049"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "44:0.0069, 55:0.0857, 66:0.0752, 77:0.1629, 88:0.1877, 99:0.3282, TT:0.6489, JJ:0.7545, AJo:0.0002, QJs:0.0001, QQ:0.8072, KQo:0.0002, AQo:0.543, K9s:0.0001, KJs:0.0002, KQs:0.0046, KK:0.9586, AKo:0.9444, A2s:0.0006, A5s:0.0078, A6s:0.0007, A8s:0.0163, ATs:0.0301, AJs:0.0118, AQs:0.8956, AKs:0.9489, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@34.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0001, 74s:0.0001, 77:0.001, 85s:0.0001, 88:0.0012, 96s:0.0006, 98s:0.0001, T6s:0.0001, T7s:0.0006, T9s:0.0004, TT:0.0008, KTo:0.0001, ATo:0.0001, J6s:0.0001, JJ:0.7033, AJo:0.0001, Q3s:0.0001, Q6s:0.0003, QQ:0.9918, AQo:0.0009, K7s:0.0001, KTs:0.0011, KQs:0.0002, KK, AKo:0.9304, A3s:0.0003, A5s:0.0004, A9s:0.0001, ATs:0.0009, AJs:0.0012, AQs:0.0774, AKs:0.9293, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@34.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.2435, TT:0.9999, JJ, QQ, AQo:0.4683, KK, AKo, AJs:0.0321, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42o:0.0001, 72o:0.0002, A2o:0.0001, 32s:0.0001, J3o:0.0001, Q3o:0.0002, K3o:0.0002, A3o:0.0001, 42s:0.0001, 43s:0.0017, 44:0.0003, 64o:0.0001, 84o:0.0001, 94o:0.0004, T4o:0.0001, Q4o:0.0001, K4o:0.0002, 52s:0.0001, 53s:0.0001, 54s:0.0031, 65o:0.0001, 95o:0.0003, T5o:0.0001, 62s:0.0008, 63s:0.0001, 64s:0.0001, 65s:0.0012, 66:0.0566, 76o:0.0002, K6o:0.0001, A6o:0.0008, 75s:0.0001, 76s:0.0059, 77:0.0032, 87o:0.0002, 97o:0.0001, T7o:0.0002, Q7o:0.0001, K7o:0.0001, 85s:0.0004, 86s:0.0005, 87s:0.0003, 88:0.0001, T8o:0.0002, A8o:0.0008, 92s:0.0002, 94s:0.0011, 95s:0.0006, 97s:0.0044, 98s:0.0029, 99:0.0009, J9o:0.0002, A9o:0.0006, T2s:0.0061, T3s:0.0023, T4s:0.0001, T5s:0.0009, T6s:0.0001, T7s:0.0001, T8s:0.002, T9s:0.0221, TT:0.009, JTo:0.0001, QTo:0.0002, KTo:0.0001, J2s:0.0057, J3s:0.0003, J4s:0.0003, J5s:0.0003, J6s:0.0002, J7s:0.0002, J8s:0.0011, J9s:0.0093, JTs:0.0016, JJ:0.0054, QJo:0.0001, KJo:0.0002, AJo:0.0003, Q3s:0.0003, Q4s:0.0036, Q7s:0.0001, Q8s:0.0001, Q9s:0.0004, QTs:0.0262, QJs:0.0023, QQ:0.0201, KQo:0.0001, AQo:0.0008, K3s:0.0008, K4s:0.0014, K5s:0.0002, K6s:0.0056, K7s:0.0002, K8s:0.0025, K9s:0.0001, KTs:0.0002, KJs:0.001, KQs:0.0004, KK:0.0148, AKo:0.0025, A2s:0.0011, A3s:0.002, A5s:0.0013, A6s:0.0013, A7s:0.0003, A8s:0.0035, A9s:0.0004, ATs:0.0131, AJs:0.0009, AQs:0.3653, AKs:0.0005, AA:0.5047"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0184, 32o:0.0001, 52o:0.008, K2o:0.0552, 53o:0.0091, 63o:0.0001, 83o:0.0165, J3o:0.024, Q3o:0.0468, K3o:0.2037, A3o:0.0018, 42s:0.0001, 43s:0.0003, 44:0.0107, 64o:0.0247, K4o:0.1319, A4o:0.0581, 52s:0.0001, 53s:0.0002, 54s:0.0001, 55:0.0205, 75o:0.0001, J5o:0.1618, K5o:0.0378, 63s:0.0722, 64s:0.0001, 65s:0.0006, 66:0.1254, 76o:0.0001, 86o:0.1353, Q6o:0.0133, K6o:0.1467, A6o:0.0022, 72s:0.0001, 74s:0.1221, 75s:0.0463, 76s:0.0492, 87o:0.0843, K7o:0.0136, 82s:0.1135, 83s:0.0002, 85s:0.0117, 86s:0.1241, 87s:0.0522, 88:0.0189, 98o:0.013, T8o:0.121, J8o:0.0012, Q8o:0.0514, K8o:0.0844, A8o:0.0004, 92s:0.084, 93s:0.0023, 96s:0.0026, 97s:0.006, 98s:0.1013, 99:0.0858, T9o:0.0004, J9o:0.0001, Q9o:0.2439, K9o:0.2548, A9o:0.0432, T2s:0.0059, T3s:0.0007, T4s:0.0001, T5s:0.0002, T6s:0.0003, T7s:0.159, T9s:0.0823, TT:0.0026, JTo:0.0001, KTo:0.003, ATo:0.0006, J2s:0.0001, J4s:0.084, J5s:0.0001, J6s:0.0161, J8s:0.0001, J9s:0.0035, JTs:0.0796, JJ:0.0756, QJo:0.0471, KJo:0.006, AJo:0.0048, Q2s:0.0718, Q3s:0.0802, Q4s:0.0589, Q5s:0.0248, Q6s:0.0549, Q7s:0.0166, Q8s:0.1484, Q9s:0.0088, QTs:0.0147, QJs:0.063, QQ:0.0015, KQo:0.0342, AQo:0.0398, K2s:0.0959, K3s:0.0001, K4s:0.0506, K5s:0.0002, K6s:0.2349, K7s:0.0526, K8s:0.0032, K9s:0.0458, KTs:0.0227, KJs:0.0776, KK:0.3298, AKo:0.002, A2s:0.0034, A3s:0.0002, A4s:0.1138, A5s:0.0014, A6s:0.0001, A7s:0.0009, A8s:0.0161, A9s:0.0001, ATs:0.0379, AJs:0.0155, AQs:0.1158, AKs:0.5153, AA:0.0836"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.1248, 52o:0.0001, 62o:0.0001, A2o:0.0034, 32s:0.1022, 33:0.0004, 43o:0.0001, 53o:0.0005, 73o:0.0002, 93o:0.0026, T3o:0.0001, J3o:0.0001, Q3o:0.0003, K3o:0.1784, A3o:0.2806, 42s:0.0001, 43s:0.3127, 44:0.5655, 54o:0.2169, 64o:0.3578, 74o:0.0034, 94o:0.005, T4o:0.0001, Q4o:0.0004, K4o:0.2615, A4o:0.0754, 52s:0.0002, 53s:0.5089, 54s:0.5361, 55:0.6844, 75o:0.0146, 85o:0.0002, 95o:0.0244, J5o:0.0001, Q5o:0.0001, K5o:0.1677, A5o:0.0085, 62s:0.0042, 63s:0.2134, 64s:0.4866, 65s:0.4739, 66:0.0921, 76o:0.0001, 86o:0.0001, 96o:0.0002, Q6o:0.0069, K6o:0.4489, A6o:0.055, 73s:0.7474, 75s:0.3862, 76s:0.2874, 77:0.6664, 87o:0.1219, T7o:0.0001, K7o:0.7968, A7o:0.0748, 82s:0.0001, 83s:0.0106, 84s:0.2732, 85s:0.4436, 86s:0.1733, 87s:0.3382, 88:0.1202, 98o:0.0001, T8o:0.0004, J8o:0.0001, Q8o:0.0016, K8o:0.0005, A8o:0.5209, 92s:0.271, 93s:0.2227, 94s:0.0022, 95s:0.2258, 96s:0.2026, 97s:0.0611, 98s:0.0579, 99:0.0728, T9o:0.0001, J9o:0.0109, Q9o:0.0237, K9o:0.095, A9o:0.0018, T2s:0.0141, T3s:0.1802, T4s:0.0283, T5s:0.0005, T6s:0.0015, T7s:0.2506, T8s:0.2686, T9s:0.141, TT:0.6853, JTo:0.0002, QTo:0.0003, KTo:0.5574, ATo:0.1624, J2s:0.0006, J4s:0.4101, J5s:0.0006, J6s:0.0553, J7s:0.0027, J8s:0.0536, J9s:0.2704, JTs:0.0783, JJ:0.016, QJo:0.0015, KJo:0.4879, AJo:0.0221, Q2s:0.0187, Q3s:0.0694, Q4s:0.2534, Q5s:0.2659, Q6s:0.2238, Q7s:0.0272, Q8s:0.1482, Q9s:0.863, QTs:0.0975, QJs:0.0508, QQ:0.675, KQo:0.2633, AQo:0.1492, K2s:0.4826, K3s:0.8751, K4s:0.0236, K5s:0.7168, K6s:0.122, K7s:0.2233, K8s:0.8405, K9s:0.7824, KTs:0.7956, KJs:0.172, KQs:0.7231, KK:0.6497, AKo:0.9601, A2s:0.1953, A3s:0.6668, A4s:0.1698, A5s:0.3235, A6s:0.711, A7s:0.3059, A8s:0.1693, A9s:0.6886, ATs:0.4117, AJs:0.7062, AQs:0.0286, AKs:0.4837, AA:0.4117"
      }
    ]
  },
  {
    "presetId": "HJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0001, KQs:0.0008, KK:0.0572, AKo:0.0001, AJs:0.003, AQs:0.0067, AA:0.3014"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0052, 77:0.0281, 88:0.0527, 99:0.0066, TT:0.4402, JTo:0.016, KTo:0.0381, ATo:0.011, JTs:0.0283, JJ:0.9616, QJo:0.008, KJo:0.0488, AJo:0.1487, QTs:0.0309, QJs:0.0424, QQ, KQo:0.042, AQo:0.9452, K3s:0.009, K4s:0.0128, K5s:0.0165, K7s:0.0184, K8s:0.0123, KTs:0.0616, KJs:0.0986, KQs:0.1282, KK:0.9428, AKo:0.9997, A4s:0.0197, A5s:0.0199, A7s:0.0125, ATs:0.0585, AJs:0.359, AQs:0.9919, AKs, AA:0.6986"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@12|LJ:4BET@34.75",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0004, 99:0.0026, TT, JJ, AJo:0.95, QQ, AQo:0.9999, KK, AKo, ATs:0.0005, AJs:0.9999, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@8|LJ:4BET@13.7",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0013, 33:0.0115, 44:0.1953, 53s:0.0054, 54s:0.0127, 55:0.3528, 65o:0.0114, 64s:0.0131, 65s:0.1198, 66:0.4533, 76o:0.0136, 74s:0.0072, 75s:0.0172, 76s:0.2153, 77:0.4536, 87o:0.0075, T7o:0.0076, A7o:0.0005, 85s:0.0134, 86s:0.1801, 87s:0.2751, 88:0.4721, 98o:0.008, T8o:0.0216, A8o:0.0011, 96s:0.0193, 97s:0.0143, 98s:0.1021, 99:0.5065, T9o:0.0282, J9o:0.0092, A9o:0.0238, T5s:0.0028, T6s:0.0128, T7s:0.0198, T8s:0.1641, T9s:0.3904, TT:0.4727, JTo:0.0167, QTo:0.0181, KTo:0.0088, ATo:0.0585, J6s:0.0088, J7s:0.012, J8s:0.0227, J9s:0.2007, JTs:0.3525, JJ:0.3498, QJo:0.0253, KJo:0.0014, AJo:0.3275, Q6s:0.0044, Q8s:0.0426, Q9s:0.1197, QTs:0.3309, QJs:0.3184, QQ:0.0004, KQo:0.0189, AQo:0.3193, K4s:0.0012, K5s:0.0019, K6s:0.0716, K7s:0.0492, K8s:0.0098, K9s:0.0853, KTs:0.3683, KJs:0.3415, KQs:0.3405, AKo:0.0399, A3s:0.0008, A4s:0.0046, A5s:0.0096, A6s:0.0201, A7s:0.0468, A8s:0.1359, A9s:0.5018, ATs:0.5214, AJs:0.6274, AQs:0.329, AKs:0.0335, AA:0.0754"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.5939, Q2o:0.0418, K2o:0.0275, A2o:0.0761, 32s:0.0267, 33:0.6268, Q3o:0.0506, K3o:0.0303, A3o:0.1469, 42s:0.0214, 43s:0.0518, 44:0.5455, 54o:0.0191, Q4o:0.0416, K4o:0.0255, A4o:0.1099, 52s:0.0368, 53s:0.0868, 54s:0.1477, 55:0.5455, 65o:0.0232, 75o:0.0224, J5o:0.0012, Q5o:0.0504, K5o:0.0359, A5o:0.1508, 62s:0.0198, 63s:0.0424, 64s:0.0673, 65s:0.3156, 66:0.4482, 76o:0.0284, Q6o:0.0491, K6o:0.0343, A6o:0.0569, 72s:0.0226, 73s:0.0425, 74s:0.0438, 75s:0.1391, 76s:0.2952, 77:0.4793, 87o:0.0272, T7o:0.0182, J7o:0.0304, Q7o:0.0581, K7o:0.0466, A7o:0.0908, 83s:0.0121, 84s:0.018, 85s:0.0431, 86s:0.1065, 87s:0.2992, 88:0.4576, T8o:0.0096, J8o:0.0282, Q8o:0.0552, K8o:0.0314, A8o:0.0792, 93s:0.0195, 95s:0.018, 96s:0.0177, 97s:0.1125, 98s:0.1403, 99:0.4441, T9o:0.0095, J9o:0.0302, Q9o:0.0619, K9o:0.0331, A9o:0.051, T2s:0.0251, T3s:0.0256, T4s:0.0187, T5s:0.0312, T6s:0.0394, T7s:0.1862, T8s:0.1995, T9s:0.2484, TT:0.4902, JTo:0.0768, QTo:0.1133, KTo:0.063, ATo:0.1765, J2s:0.0338, J3s:0.0481, J4s:0.0446, J5s:0.0553, J6s:0.0406, J7s:0.0889, J8s:0.1398, J9s:0.2537, JTs:0.4689, JJ:0.6283, QJo:0.1625, KJo:0.0801, AJo:0.26, Q2s:0.0795, Q3s:0.0875, Q4s:0.0788, Q5s:0.0999, Q6s:0.0951, Q7s:0.1552, Q8s:0.213, Q9s:0.24, QTs:0.4703, QJs:0.5045, QQ:0.9996, KQo:0.12, AQo:0.674, K2s:0.0629, K3s:0.0769, K4s:0.0609, K5s:0.0915, K6s:0.1162, K7s:0.0893, K8s:0.0788, K9s:0.0845, KTs:0.3035, KJs:0.4047, KQs:0.4154, KK, AKo:0.9601, A2s:0.461, A3s:0.5374, A4s:0.4835, A5s:0.5605, A6s:0.3688, A7s:0.4753, A8s:0.4172, A9s:0.2893, ATs:0.4619, AJs:0.3725, AQs:0.671, AKs:0.9665, AA:0.9246"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BB:3BET@8|LJ:4BET@34.75",
    "heroPos": "BB",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.1563, TT:0.9702, ATo:0.0014, JJ, AJo:0.0076, QQ, AQo:0.0643, KK, AKo, ATs:0.1059, AJs:0.1156, AQs:0.8329, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@21|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9999, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9987, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@21|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@12",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0002, A4o:0.0001, 75s:0.0005, 77:0.0002, 82s:0.0002, 88:0.01, 95s:0.0007, 98s:0.0002, 99:0.0001, T3s:0.0001, T5s:0.0002, T8s:0.0003, J9s:0.0001, JTs:0.0001, Q2s:0.0001, Q4s:0.0003, QTs:0.0001, QJs:0.0003, QQ:0.0988, AQo:0.0039, K5s:0.0001, KTs:0.0003, KJs:0.0002, KK:0.1402, AKo:0.0011, A2s:0.0103, A3s:0.0001, A4s:0.0004, A5s:0.0069, A6s:0.0259, A9s:0.0001, ATs:0.1319, AJs:0.0003, AQs:0.0005, AKs:0.2253, AA:0.0884"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0175, A2o:0.0147, 32s:0.1755, 33:0.021, A3o:0.1017, 42s:0.0195, 43s:0.0181, 44:0.0138, 54o:0.0073, A4o:0.0001, 52s:0.0043, 54s:0.1824, 55:0.0314, A5o:0.0135, 63s:0.0746, 64s:0.091, 65s:0.1255, 66:0.1683, A6o:0.0001, 72s:0.0039, 73s:0.0538, 74s:0.0004, 75s:0.0342, 76s:0.0034, 77:0.1353, A7o:0.007, 82s:0.0001, 84s:0.0024, 86s:0.0069, 87s:0.3661, 88:0.1141, 92s:0.0057, 93s:0.0105, 94s:0.0228, 95s:0.0019, 97s:0.1491, 98s:0.0054, 99:0.1108, T3s:0.0221, T5s:0.0001, T6s:0.1047, T7s:0.0001, T8s:0.0566, T9s:0.0038, ATo:0.0282, J3s:0.0001, J9s:0.0319, JJ:0.0003, Q2s:0.0001, Q3s:0.0086, Q5s:0.0006, Q6s:0.0007, Q7s:0.0002, Q8s:0.0012, Q9s:0.0241, QTs:0.0001, QJs:0.0029, QQ:0.1146, AQo:0.0166, K2s:0.0151, K5s:0.0008, K6s:0.0115, K7s:0.0001, K9s:0.0632, KTs:0.0102, KJs:0.0416, KQs:0.0001, KK:0.6475, AKo:0.9294, A2s:0.0657, A3s:0.1347, A4s:0.6429, A5s:0.1488, A6s:0.5418, A7s:0.2755, A8s:0.2655, A9s:0.4362, ATs:0.2532, AJs:0.1929, AQs:0.321, AKs:0.657, AA:0.9116"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@12",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0016, 52o:0.002, K2o:0.0002, A2o:0.0009, 32s:0.0035, 33:0.0067, 43o:0.0017, 53o:0.0021, 63o:0.0012, A3o:0.0005, 42s:0.0036, 43s:0.0054, 44:0.0114, 54o:0.0036, 64o:0.0018, 74o:0.0008, K4o:0.0006, A4o:0.001, 52s:0.0032, 53s:0.0046, 54s:0.02, 55:0.0122, 65o:0.004, 75o:0.0044, 85o:0.0021, 95o:0.0012, K5o:0.0012, A5o:0.0033, 62s:0.0037, 63s:0.0053, 64s:0.0066, 65s:0.0076, 66:0.0269, 76o:0.0041, 86o:0.003, 96o:0.0025, T6o:0.0004, K6o:0.0025, A6o:0.0022, 72s:0.0019, 73s:0.0034, 74s:0.0094, 75s:0.0274, 76s:0.0248, 77:0.0277, 87o:0.0041, 97o:0.0026, T7o:0.002, K7o:0.0007, A7o:0.0018, 82s:0.0002, 83s:0.0001, 84s:0.0031, 85s:0.0071, 86s:0.0185, 87s:0.0041, 88:0.0322, 98o:0.003, T8o:0.0015, K8o:0.002, A8o:0.0003, 92s:0.0049, 93s:0.0031, 94s:0.0018, 95s:0.004, 96s:0.0039, 97s:0.0055, 98s:0.0072, 99:0.0112, T9o:0.003, K9o:0.0029, A9o:0.0024, T2s:0.0029, T3s:0.0002, T4s:0.0024, T5s:0.004, T6s:0.0038, T7s:0.0121, T8s:0.0048, T9s:0.014, TT:0.0041, JTo:0.0011, QTo:0.0004, KTo:0.0022, J2s:0.0029, J3s:0.0014, J4s:0.0019, J5s:0.0008, J6s:0.0044, J7s:0.0013, J8s:0.0047, J9s:0.0035, JTs:0.0179, JJ:0.0312, KJo:0.0007, AJo:0.001, Q2s:0.0015, Q3s:0.0005, Q5s:0.0029, Q6s:0.003, Q7s:0.0032, Q8s:0.0029, Q9s:0.002, QTs:0.003, QJs:0.0028, QQ:0.0371, KQo:0.0004, AQo:0.0057, K2s:0.0069, K3s:0.0026, K4s:0.0041, K5s:0.0034, K6s:0.0088, K7s:0.0087, K8s:0.003, K9s:0.012, KTs:0.0252, KJs:0.0038, KQs:0.0026, A2s:0.0052, A3s:0.0029, A4s:0.0047, A5s:0.0066, A6s:0.0035, A7s:0.0071, A8s:0.0074, A9s:0.0064, ATs:0.0065, AJs:0.0167, AQs:0.0058, AA:0.0097"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.8639, 42o:0.0065, 52o:0.0151, 62o:0.0062, K2o:0.0001, A2o:0.0507, 32s:0.1993, 33:0.9009, 43o:0.0855, 53o:0.1723, 63o:0.0895, K3o:0.0001, A3o:0.0816, 42s:0.3267, 43s:0.4618, 44:0.9083, 54o:0.2743, 64o:0.2389, 74o:0.0975, 84o:0.0168, K4o:0.0002, A4o:0.1229, 52s:0.3484, 53s:0.6111, 54s:0.7522, 55:0.9425, 65o:0.3979, 75o:0.2062, 85o:0.109, K5o:0.0001, A5o:0.218, 62s:0.2051, 63s:0.384, 64s:0.7169, 65s:0.8887, 66:0.9413, 76o:0.306, 86o:0.2138, 96o:0.0467, T6o:0.0162, K6o:0.0059, A6o:0.0131, 72s:0.1039, 73s:0.2315, 74s:0.3779, 75s:0.6217, 76s:0.8299, 77:0.925, 87o:0.3373, 97o:0.0687, T7o:0.0342, K7o:0.003, A7o:0.063, 82s:0.0764, 83s:0.1303, 84s:0.2755, 85s:0.462, 86s:0.6923, 87s:0.8447, 88:0.9316, 98o:0.135, T8o:0.1208, K8o:0.0044, A8o:0.0615, 92s:0.1213, 93s:0.0556, 94s:0.0946, 95s:0.2099, 96s:0.3417, 97s:0.5318, 98s:0.5391, 99:0.8072, T9o:0.1578, K9o:0.005, A9o:0.0001, T2s:0.1021, T3s:0.0841, T4s:0.1359, T5s:0.1586, T6s:0.2407, T7s:0.3576, T8s:0.6051, T9s:0.5713, TT:0.9589, JTo:0.0156, KTo:0.0224, ATo:0.0799, J5s:0.0246, J6s:0.0713, J7s:0.0886, J8s:0.1023, J9s:0.2057, JTs:0.3647, JJ:0.8289, KJo:0.0003, AJo:0.0056, Q2s:0.0097, Q3s:0.0106, Q4s:0.0237, Q5s:0.0214, Q6s:0.0301, Q7s:0.0195, Q8s:0.0843, Q9s:0.0791, QTs:0.2146, QJs:0.01, QQ:0.8446, KQo:0.0005, AQo:0.8557, K2s:0.0581, K3s:0.1009, K4s:0.1758, K5s:0.1876, K6s:0.2002, K7s:0.1629, K8s:0.2134, K9s:0.234, KTs:0.2726, KJs:0.1099, KQs:0.0344, KK, AKo, A2s:0.4524, A3s:0.5614, A4s:0.6242, A5s:0.7522, A6s:0.4248, A7s:0.4476, A8s:0.3953, A9s:0.3916, ATs:0.3886, AJs:0.3071, AQs:0.994, AKs, AA:0.9903"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "T9s:0.0001, TT:0.0001, J6s:0.0001, QQ:0.0011, KK, AKo:0.0001, AJs:0.0001, AQs:0.0003, AKs:0.1888, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|BB:4BET@34.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0543, 44:0.8412, 55:0.9961, 66:0.995, 77:0.9915, 88:0.9935, 99:0.9957, TT:0.9999, JJ, QQ, AQo:0.025, KK, AKo, ATs:0.0001, AJs:0.0002, AQs:0.5211, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|LJ:4BET@21",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88, 99, TT, JJ, AJo, QQ, AQo, KK, AKo, ATs:0.0033, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0144, A4o:0.0001, 55:0.0487, 64s:0.0004, 65s:0.0006, 66:0.0377, 77:0.0002, A7o:0.0001, 83s:0.0001, 88:0.0259, 96s:0.0005, 99:0.0008, T9s:0.0001, TT:0.0019, J2s:0.0003, JTs:0.0006, JJ:0.2577, AJo:0.0001, Q5s:0.0001, QQ:0.115, K8s:0.0004, KTs:0.0001, KK, AKo:0.7245, A3s:0.0001, A4s:0.0002, A6s:0.0003, A7s:0.0005, ATs:0.0002, AJs:0.0001, AQs:0.0038, AKs:0.9868, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0052, 55:0.4271, 66:0.5223, 77:0.5972, 88:0.6517, 99:0.7478, TT:0.9366, JJ:0.9045, QQ:0.9895, AQo:0.0013, KK, AKo, AJs:0.0017, AQs:0.0052, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:3BET@7|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, 54s:0.0003, 55:0.0007, A5o:0.0001, 75s:0.0001, 77:0.0002, 83s:0.0001, 84s:0.0006, 86s:0.0004, 87s:0.0003, 97s:0.0001, 98s:0.0002, 99:0.0003, T6s:0.0001, T7s:0.0001, T8s:0.0001, J2s:0.0002, J7s:0.0001, JJ:0.0002, AJo:0.0003, Q2s:0.0001, Q4s:0.0001, Q8s:0.0003, QQ:0.0001, K3s:0.0001, K4s:0.0001, K6s:0.0003, K7s:0.0002, K9s:0.0002, KTs:0.0001, KJs:0.0004, KK:0.8139, AKo:0.0051, A2s:0.0002, A3s:0.0006, A5s:0.0014, A6s:0.0001, A7s:0.0012, A8s:0.0002, A9s:0.0006, ATs:0.003, AQs:0.0033, AKs:0.3226, AA:0.9969"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@12",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, 32o:0.0002, 52o:0.0002, 62o:0.0001, 82o:0.0002, 92o:0.0001, J2o:0.0001, Q2o:0.0004, K2o:0.0006, A2o:0.0022, 32s:0.0003, 33:0.0021, 43o:0.0003, 93o:0.0002, T3o:0.0002, J3o:0.0003, A3o:0.0002, 42s:0.0002, 43s:0.0015, 44:0.001, 54o:0.0001, 64o:0.0001, 84o:0.0009, 94o:0.0002, T4o:0.0002, J4o:0.0001, Q4o:0.0001, K4o:0.0001, A4o:0.0239, 52s:0.0096, 53s:0.0018, 54s:0.0002, 65o:0.0003, 75o:0.0001, 85o:0.0001, 95o:0.0001, T5o:0.0037, J5o:0.0022, Q5o:0.0001, K5o:0.0002, A5o:0.0013, 62s:0.0147, 63s:0.0014, 64s:0.0208, 65s:0.0001, 66:0.0091, 76o:0.0001, 96o:0.0003, T6o:0.0004, Q6o:0.0001, K6o:0.0015, A6o:0.0171, 72s:0.0605, 74s:0.0007, 75s:0.0043, 76s:0.0045, 77:0.1106, 87o:0.0023, 97o:0.0002, T7o:0.0002, Q7o:0.0002, K7o:0.0005, A7o:0.0006, 84s:0.0001, 85s:0.011, 86s:0.0009, 88:0.0644, 98o:0.0008, J8o:0.0009, Q8o:0.0002, K8o:0.0022, A8o:0.0009, 92s:0.0006, 93s:0.0063, 94s:0.0198, 95s:0.0098, 96s:0.0007, 97s:0.0016, 98s:0.0038, 99:0.0813, J9o:0.0008, Q9o:0.0001, K9o:0.0136, A9o:0.0069, T2s:0.0007, T3s:0.0007, T4s:0.0008, T5s:0.002, T6s:0.0001, T7s:0.0004, T8s:0.0013, T9s:0.171, TT:0.0042, JTo:0.0012, KTo:0.0007, ATo:0.0003, J2s:0.0005, J3s:0.0518, J4s:0.0173, J5s:0.0042, J6s:0.0112, J7s:0.0361, J8s:0.0001, J9s:0.5077, JTs:0.0001, JJ:0.0418, QJo:0.0002, KJo:0.003, AJo:0.0001, Q2s:0.0009, Q3s:0.009, Q4s:0.0512, Q5s:0.0112, Q6s:0.232, Q8s:0.0069, Q9s:0.0004, QTs:0.0019, QJs:0.0324, QQ:0.0623, KQo:0.0082, AQo:0.0962, K2s:0.0086, K3s:0.001, K4s:0.1356, K5s:0.0001, K6s:0.0059, K7s:0.3362, K8s:0.004, K9s:0.0047, KTs:0.2357, KJs:0.0004, KQs:0.1879, KK:0.0212, AKo:0.003, A2s:0.0004, A3s:0.0238, A4s:0.3469, A5s:0.1117, A6s:0.0007, A7s:0.0004, A8s:0.0053, A9s:0.0003, ATs:0.0119, AJs:0.0043, AQs:0.0521, AKs:0.0212, AA:0.8745"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0364, 32o:0.0015, 42o:0.0001, 52o:0.0007, 62o:0.0006, 82o:0.0008, T2o:0.0007, J2o:0.0029, Q2o:0.0007, K2o:0.0054, A2o:0.0023, 32s:0.0164, 33:0.0955, 43o:0.008, 53o:0.0006, 63o:0.0243, 73o:0.0607, 83o:0.0001, 93o:0.0002, T3o:0.0019, J3o:0.0001, Q3o:0.023, K3o:0.0002, A3o:0.1197, 42s:0.0091, 43s:0.0121, 44:0.0009, 54o:0.019, 64o:0.0003, 74o:0.0071, 84o:0.0049, T4o:0.0014, J4o:0.002, Q4o:0.0386, K4o:0.0281, A4o:0.2564, 52s:0.0311, 53s:0.0164, 54s:0.4461, 55:0.0505, 65o:0.0233, 75o:0.1722, 85o:0.0021, 95o:0.0237, J5o:0.0002, Q5o:0.2035, K5o:0.1237, A5o:0.0097, 62s:0.113, 63s:0.0868, 64s:0.144, 65s:0.1287, 66:0.0856, 76o:0.0413, 86o:0.0606, 96o:0.0665, T6o:0.0296, J6o:0.0005, Q6o:0.0075, K6o:0.0261, A6o:0.2574, 72s:0.084, 73s:0.0143, 74s:0.136, 75s:0.001, 76s:0.8188, 77:0.099, 87o:0.0003, 97o:0.0001, T7o:0.0008, J7o:0.058, Q7o:0.0714, K7o:0.0002, A7o:0.0005, 83s:0.1088, 84s:0.2493, 85s:0.6262, 86s:0.0823, 87s:0.2504, 88:0.1422, 98o:0.0003, T8o:0.0266, J8o:0.0377, Q8o:0.0004, K8o:0.0001, A8o:0.0394, 92s:0.0399, 93s:0.0218, 94s:0.0786, 95s:0.0881, 96s:0.107, 97s:0.1144, 98s:0.0031, 99:0.4119, T9o:0.0015, J9o:0.0578, Q9o:0.1542, K9o:0.0074, A9o:0.0003, T2s:0.1399, T3s:0.019, T4s:0.1517, T5s:0.0516, T6s:0.3214, T7s:0.2611, T8s:0.283, T9s:0.0619, TT:0.2089, JTo:0.0546, QTo:0.0001, ATo:0.0027, J2s:0.103, J3s:0.4343, J4s:0.2248, J5s:0.1836, J6s:0.2865, J7s:0.0832, J8s:0.0013, J9s:0.0019, JTs:0.0387, JJ:0.1554, QJo:0.4426, KJo:0.0957, AJo:0.1853, Q2s:0.0252, Q3s:0.018, Q4s:0.0123, Q5s:0.0653, Q6s:0.2808, Q7s:0.0016, Q8s:0.0155, Q9s:0.1167, QTs:0.0919, QJs:0.0254, QQ:0.9145, KQo:0.2824, AQo:0.0864, K2s:0.6563, K3s:0.2053, K4s:0.4549, K5s:0.0031, K6s:0.2506, K7s:0.3711, K8s:0.0001, K9s:0.2451, KTs:0.0386, KJs:0.5965, KQs:0.1813, KK:0.9731, AKo:0.6924, A2s:0.7012, A3s:0.0854, A4s:0.1943, A5s:0.181, A6s:0.0175, A7s:0.0156, A8s:0.0796, A9s:0.6637, ATs:0.038, AJs:0.002, AQs:0.1214, AKs:0.9788, AA:0.1254"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@12",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.159, JJ:0.9454, AJo:0.0012, QQ:0.9483, AQo:0.0033, KQs:0.0015, KK:0.8596, AKo:0.9142, ATs:0.0015, AJs:0.0031, AQs:0.0057, AKs:0.9313, AA:0.002"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0079, 33:0.0091, 44:0.0107, 55:0.0074, 66:0.0124, 77:0.0123, 88:0.0135, 99:0.016, TT:0.027, ATo:0.0021, JTs:0.0001, JJ:0.0539, AJo:0.0083, QTs:0.0001, QJs:0.0011, QQ:0.0517, KQo:0.0004, AQo:0.012, KJs:0.0019, KQs:0.0015, KK:0.1404, AKo:0.0858, A3s:0.0012, A7s:0.0003, A9s:0.003, ATs:0.0082, AJs:0.0123, AQs:0.017, AKs:0.0687, AA:0.998"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@34.75",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0029, 52o:0.0001, 62o:0.0001, 72o:0.0002, J2o:0.0001, A2o:0.0001, 32s:0.0016, 63o:0.0003, 73o:0.0008, 83o:0.0001, 93o:0.0001, T3o:0.0001, Q3o:0.0001, K3o:0.0003, A3o:0.0013, 43s:0.005, 44:0.7974, 74o:0.0002, 84o:0.0009, 94o:0.0001, J4o:0.0003, Q4o:0.0002, K4o:0.0001, A4o:0.0004, 52s:0.0057, 53s:0.0007, 54s:0.0001, 55:0.0143, 85o:0.0005, 95o:0.0002, T5o:0.0002, J5o:0.0001, Q5o:0.0003, K5o:0.0002, A5o:0.0001, 62s:0.0001, 63s:0.0035, 66:0.3149, 86o:0.0003, J6o:0.0002, Q6o:0.0008, K6o:0.0022, A6o:0.0004, 72s:0.0007, 73s:0.0008, 74s:0.0002, 75s:0.0001, 76s:0.0019, 77:0.467, T7o:0.0002, J7o:0.0001, Q7o:0.0002, K7o:0.0001, A7o:0.0002, 82s:0.0073, 83s:0.0014, 84s:0.0002, 85s:0.0003, 86s:0.0006, 87s:0.002, 88:0.149, 98o:0.0002, T8o:0.0006, J8o:0.0002, Q8o:0.0011, K8o:0.0014, A8o:0.0053, 92s:0.0011, 93s:0.0008, 94s:0.0002, 95s:0.003, 96s:0.0001, 98s:0.001, 99:0.3637, T9o:0.0005, J9o:0.0002, K9o:0.0003, A9o:0.0072, T2s:0.0004, T3s:0.0031, T4s:0.0009, T5s:0.0096, T6s:0.0053, T7s:0.0095, T8s:0.0005, T9s:0.0017, TT:0.9987, QTo:0.0001, KTo:0.0004, ATo:0.0616, J2s:0.0011, J3s:0.0008, J4s:0.0001, J5s:0.011, J6s:0.0004, J7s:0.0002, J8s:0.0016, J9s:0.0004, JTs:0.0011, JJ:0.989, QJo:0.0001, KJo:0.0013, AJo:0.0005, Q2s:0.0001, Q3s:0.0005, Q4s:0.0009, Q5s:0.0002, Q6s:0.001, Q8s:0.0057, Q9s:0.0194, QTs:0.0005, QJs:0.0024, QQ:0.9826, KQo:0.0002, AQo:0.6326, K2s:0.0009, K3s:0.005, K4s:0.0004, K5s:0.0002, K7s:0.0022, K8s:0.0001, K9s:0.0006, KTs:0.0132, KJs:0.0587, KQs:0.0014, KK, AKo:0.9907, A2s:0.0018, A3s:0.0001, A4s:0.0082, A5s:0.0059, A6s:0.0007, A7s:0.0003, A8s:0.0085, A9s:0.022, ATs:0.0028, AJs:0.1993, AQs:0.4083, AKs:0.8159, AA:0.9989"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@34.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.7654, 99:0.997, TT, JJ, AJo:0.5217, QQ, AQo:0.9905, KK, AKo, ATs:0.1424, AJs:0.9806, AQs:0.9956, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0124, 32o:0.0002, 42o:0.0009, 52o:0.0001, 62o:0.0001, 72o:0.0004, 82o:0.0001, 92o:0.0004, T2o:0.0147, J2o:0.0002, K2o:0.0002, 32s:0.0004, 43o:0.0024, 63o:0.0007, 93o:0.0002, T3o:0.0003, Q3o:0.0001, K3o:0.0234, A3o:0.0001, 42s:0.0214, 43s:0.0049, 44:0.0006, 64o:0.0001, 94o:0.0003, T4o:0.0003, J4o:0.0004, A4o:0.0139, 52s:0.0021, 53s:0.3518, 54s:0.0009, 55:0.0083, 65o:0.0001, 85o:0.0002, 95o:0.0001, T5o:0.0002, J5o:0.001, K5o:0.0018, A5o:0.0002, 62s:0.0018, 63s:0.0003, 64s:0.0339, 65s:0.0229, 66:0.3142, 86o:0.0028, 96o:0.0001, T6o:0.0002, J6o:0.0001, K6o:0.0007, A6o:0.0002, 72s:0.0001, 73s:0.0046, 74s:0.0441, 75s:0.0022, 76s:0.0007, 77:0.0414, 87o:0.0005, 97o:0.0028, T7o:0.0005, J7o:0.0002, Q7o:0.0001, K7o:0.0005, A7o:0.0028, 82s:0.0039, 83s:0.0104, 84s:0.0832, 85s:0.0766, 86s:0.0058, 88:0.2369, 98o:0.0001, T8o:0.01, J8o:0.0002, Q8o:0.0007, K8o:0.0014, A8o:0.0285, 92s:0.2164, 93s:0.0001, 94s:0.0878, 95s:0.0002, 96s:0.1487, 98s:0.007, 99:0.0015, J9o:0.0065, Q9o:0.0026, K9o:0.0002, A9o:0.0008, T2s:0.0124, T3s:0.0034, T4s:0.0025, T5s:0.0073, T6s:0.4092, T7s:0.0109, T8s:0.1169, TT:0.0065, JTo:0.0001, QTo:0.0004, KTo:0.0009, ATo:0.0003, J2s:0.0001, J3s:0.1002, J4s:0.0183, J5s:0.0051, J6s:0.1299, J7s:0.2706, J8s:0.1192, J9s:0.1771, JTs:0.0184, JJ:0.2268, QJo:0.0001, AJo:0.0002, Q2s:0.0206, Q3s:0.0002, Q4s:0.1696, Q5s:0.0001, Q6s:0.0038, Q7s:0.3047, Q8s:0.0009, QTs:0.0234, QJs:0.0238, QQ:0.1008, KQo:0.0057, AQo:0.064, K2s:0.0035, K3s:0.1615, K4s:0.0182, K5s:0.0131, K6s:0.0008, K7s:0.0521, K8s:0.0752, K9s:0.0264, KTs:0.0495, KJs:0.0809, KQs:0.0008, KK:0.3079, AKo:0.0166, A2s:0.0007, A3s:0.1217, A4s:0.0218, A5s:0.0049, A6s:0.0004, A7s:0.0884, A8s:0.2986, A9s:0.3142, ATs:0.3064, AJs:0.0104, AQs:0.0436, AKs:0.9109, AA:0.2655"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0011, 42o:0.0003, 82o:0.0005, 92o:0.0001, T2o:0.004, J2o:0.0005, Q2o:0.0007, K2o:0.0002, 32s:0.0015, 33:0.0028, 43o:0.0031, 63o:0.0007, T3o:0.0001, J3o:0.0002, Q3o:0.0002, K3o:0.0005, A3o:0.0002, 42s:0.0001, 43s:0.0073, 44:0.0004, 54o:0.0004, 94o:0.0003, J4o:0.0032, Q4o:0.0003, K4o:0.2642, A4o:0.0022, 52s:0.0036, 54s:0.0001, 55:0.0005, 85o:0.0001, J5o:0.0056, Q5o:0.0006, A5o:0.0058, 62s:0.0006, 63s:0.0018, 64s:0.0283, 65s:0.0026, 66:0.0038, 76o:0.0142, 96o:0.0008, T6o:0.0011, J6o:0.0367, Q6o:0.0001, K6o:0.0225, 72s:0.0005, 73s:0.0206, 74s:0.3805, 75s:0.0003, 76s:0.0046, 77:0.0045, 87o:0.001, 97o:0.0004, T7o:0.0004, J7o:0.0003, Q7o:0.0004, 82s:0.2537, 83s:0.1335, 85s:0.0135, 86s:0.0134, 88:0.0116, 98o:0.0001, T8o:0.0003, J8o:0.0005, Q8o:0.0001, K8o:0.0003, A8o:0.0287, 92s:0.003, 93s:0.0015, 94s:0.034, 95s:0.0006, 96s:0.0451, 97s:0.0447, 98s:0.1838, 99:0.1105, T9o:0.0009, J9o:0.0001, Q9o:0.0002, A9o:0.0392, T2s:0.0062, T4s:0.0001, T5s:0.3933, T6s:0.0232, T7s:0.1339, T8s:0.0002, T9s:0.0399, TT:0.0327, JTo:0.012, KTo:0.0001, ATo:0.0007, J2s:0.0024, J3s:0.1638, J4s:0.0157, J5s:0.0196, J7s:0.1793, J8s:0.0893, J9s:0.1419, JTs:0.0087, JJ:0.1803, QJo:0.0002, AJo:0.0178, Q4s:0.0027, Q5s:0.0148, Q6s:0.0006, Q7s:0.0003, Q8s:0.0013, Q9s:0.0155, QTs:0.1994, QJs:0.0059, QQ:0.1564, KQo:0.0014, AQo:0.0399, K2s:0.2817, K3s:0.0009, K4s:0.0948, K5s:0.0247, K6s:0.0064, K7s:0.236, K8s:0.133, K9s:0.0703, KTs:0.0002, KJs:0.0142, KQs:0.4061, KK:0.4878, A2s:0.0409, A3s:0.0027, A4s:0.1525, A5s:0.0033, A6s:0.2258, A7s:0.0109, A8s:0.0008, A9s:0.0854, ATs:0.1975, AJs:0.1766, AQs:0.0321, AKs:0.0117, AA:0.5043"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.8165, 32o:0.0097, 42o:0.0037, 52o:0.0001, 62o:0.0007, 72o:0.0003, 82o:0.0008, 92o:0.0001, T2o:0.0001, J2o:0.0019, Q2o:0.0016, K2o:0.0456, A2o:0.0026, 32s:0.1595, 33:0.0035, 43o:0.0206, 53o:0.0083, 63o:0.0139, 73o:0.0002, 83o:0.0001, 93o:0.0044, T3o:0.0001, J3o:0.0005, Q3o:0.0059, K3o:0.0567, A3o:0.2246, 42s:0.4263, 43s:0.3337, 44:0.4053, 54o:0.0016, 64o:0.1183, 74o:0.0012, 94o:0.0001, Q4o:0.0021, K4o:0.0004, A4o:0.0098, 52s:0.0016, 53s:0.2905, 54s:0.045, 55:0.6594, 65o:0.0094, 75o:0.0237, 85o:0.0004, 95o:0.0198, J5o:0.0599, Q5o:0.0573, K5o:0.2204, A5o:0.3067, 62s:0.5147, 63s:0.0434, 64s:0.639, 65s:0.6071, 66:0.2606, 76o:0.0013, 86o:0.0009, 96o:0.0002, T6o:0.0008, J6o:0.0805, Q6o:0.0005, K6o:0.2611, A6o:0.1501, 72s:0.0354, 73s:0.0903, 74s:0.0473, 75s:0.0174, 76s:0.0875, 77:0.746, 87o:0.0955, 97o:0.0011, T7o:0.0037, J7o:0.0011, Q7o:0.0017, K7o:0.0016, A7o:0.0831, 82s:0.1928, 83s:0.26, 84s:0.7639, 85s:0.3344, 86s:0.0301, 88:0.1713, 98o:0.0002, T8o:0.0328, J8o:0.0392, Q8o:0.0092, K8o:0.001, A8o:0.0914, 92s:0.0548, 93s:0.2382, 94s:0.0082, 95s:0.0003, 96s:0.4453, 97s:0.0661, 98s:0.4858, 99:0.4246, T9o:0.0005, J9o:0.29, Q9o:0.0007, K9o:0.0002, A9o:0.0861, T2s:0.0102, T3s:0.085, T4s:0.2945, T5s:0.0422, T6s:0.1148, T7s:0.3826, T8s:0.377, T9s:0.1117, TT:0.093, JTo:0.0059, QTo:0.0113, KTo:0.0022, ATo:0.1892, J2s:0.3554, J3s:0.0202, J4s:0.0353, J5s:0.3051, J6s:0.3329, J7s:0.3462, J8s:0.1947, J9s:0.0166, JTs:0.1081, JJ:0.3211, QJo:0.0765, KJo:0.2266, AJo:0.2881, Q2s:0.0137, Q3s:0.4805, Q4s:0.013, Q5s:0.4125, Q6s:0.0069, Q7s:0.1868, Q8s:0.0458, Q9s:0.0171, QTs:0.225, QJs:0.1951, QQ:0.7194, KQo:0.7628, AQo:0.5269, K2s:0.3433, K3s:0.2773, K4s:0.1512, K5s:0.4496, K6s:0.5025, K7s:0.5082, K8s:0.2712, K9s:0.4929, KTs:0.3844, KJs:0.6956, KQs:0.5131, KK:0.2023, AKo:0.9806, A2s:0.052, A3s:0.1429, A4s:0.3255, A5s:0.4768, A6s:0.2194, A7s:0.7827, A8s:0.4241, A9s:0.3162, ATs:0.0015, AJs:0.3244, AQs:0.539, AKs:0.0689, AA:0.2302"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|BB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0004, 66:0.0707, 77:0.0831, 88:0.1295, 99:0.1382, TT:0.0248, JJ:0.1129, AJo:0.0025, QQ:0.6501, KJs:0.0041, KK:0.6184, AKo:0.3307, A5s:0.0001, A7s:0.0001, ATs:0.0067, AJs:0.1389, AQs:0.3618, AKs:0.0437, AA:0.5966"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0562, 33:0.041, 42s:0.0001, 43s:0.0001, 44:0.0725, 54s:0.0003, 55:0.1731, A5o:0.0001, 65s:0.0002, 66:0.0299, 76s:0.0002, 77:0.0227, 88:0.1024, K8o:0.0001, 97s:0.0001, 98s:0.0001, 99:0.0812, T9o:0.0001, K9o:0.0001, T8s:0.0001, T9s:0.0001, TT:0.2711, J3s:0.0001, J7s:0.0001, J9s:0.0001, JJ:0.2911, KJo:0.0002, AJo:0.23, Q8s:0.0002, Q9s:0.0003, QJs:0.0003, QQ:0.3499, KQo:0.0001, AQo:0.4277, K2s:0.0002, K3s:0.0001, K4s:0.0002, K6s:0.0002, K7s:0.0003, K8s:0.0001, K9s:0.0003, KTs:0.0001, KJs:0.0034, KQs:0.0257, KK:0.3816, AKo:0.6693, A2s:0.0002, A5s:0.0001, A8s:0.0003, A9s:0.0002, ATs:0.1383, AJs:0.3569, AQs:0.4578, AKs:0.9563, AA:0.4034"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0015, 52o:0.0001, T2o:0.0001, Q2o:0.0001, K2o:0.0002, A2o:0.0004, 32s:0.0008, 33:0.0373, Q3o:0.0001, K3o:0.0001, 42s:0.0002, 43s:0.0002, 44:0.0866, T4o:0.0002, K4o:0.0002, A4o:0.0002, 53s:0.0143, 54s:0.0029, 55:0.0015, 65o:0.0005, 85o:0.0001, K5o:0.0002, A5o:0.0001, 62s:0.0048, 63s:0.0001, 64s:0.0042, 65s:0.0005, 66:0.5907, T6o:0.0001, J6o:0.0001, Q6o:0.0012, K6o:0.0001, A6o:0.0001, 72s:0.0001, 73s:0.0069, 74s:0.0015, 75s:0.0001, 76s:0.0037, 77:0.1445, 87o:0.0003, 97o:0.0001, J7o:0.0009, K7o:0.0001, A7o:0.0005, 83s:0.0001, 84s:0.0015, 85s:0.0003, 86s:0.0031, 87s:0.0043, 88:0.8928, 98o:0.0005, J8o:0.0001, Q8o:0.0001, K8o:0.0001, A8o:0.0029, 92s:0.0002, 93s:0.0001, 94s:0.0005, 95s:0.0001, 96s:0.0089, 98s:0.0002, 99:0.9633, K9o:0.0001, A9o:0.0001, T3s:0.0002, T4s:0.0003, T6s:0.0007, T7s:0.0002, T9s:0.0268, TT:0.9992, KTo:0.0001, ATo:0.0006, J2s:0.0039, J4s:0.0003, J5s:0.0007, J6s:0.0101, J7s:0.0001, J8s:0.0155, J9s:0.009, JTs:0.0682, JJ:0.9998, QJo:0.0001, KJo:0.0003, AJo:0.3947, Q3s:0.0076, Q4s:0.0011, Q7s:0.0002, Q8s:0.0001, Q9s:0.0045, QTs:0.006, QJs:0.0057, QQ:0.9972, KQo:0.0008, AQo:0.9842, K2s:0.0001, K3s:0.0042, K4s:0.022, K5s:0.0031, K6s:0.0003, K7s:0.0008, K8s:0.0178, K9s:0.0058, KTs:0.0045, KJs:0.6953, KQs:0.0105, KK, AKo:0.971, A3s:0.0086, A4s:0.0012, A5s:0.0002, A6s:0.0004, A8s:0.0025, A9s:0.0007, ATs:0.087, AJs:0.8579, AQs:0.9869, AKs:0.9742, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.5352, TT, JJ, QQ, AQo:0.6626, KK, AKo, AQs:0.9997, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0021, 42o:0.0016, 82o:0.0001, 92o:0.0001, T2o:0.0001, Q2o:0.0001, 32s:0.0019, 33:0.0298, 93o:0.0002, T3o:0.0001, K3o:0.0004, A3o:0.0004, 42s:0.0001, 43s:0.0021, 44:0.0027, 54o:0.0002, 94o:0.0009, T4o:0.0001, J4o:0.0005, K4o:0.0012, A4o:0.0022, 52s:0.0027, 53s:0.0093, 54s:0.0009, 55:0.0937, 65o:0.0001, 75o:0.0001, 85o:0.0001, 95o:0.0012, T5o:0.0001, A5o:0.0001, 62s:0.0096, 63s:0.0004, 64s:0.0005, 65s:0.005, 66:0.0003, 76o:0.0019, T6o:0.0001, A6o:0.0001, 72s:0.0006, 73s:0.0004, 74s:0.0013, 75s:0.0142, 76s:0.0041, 77:0.0007, 97o:0.0002, T7o:0.0003, Q7o:0.0001, A7o:0.0005, 82s:0.0003, 83s:0.0001, 85s:0.0005, 86s:0.0014, 88:0.0346, K8o:0.0004, A8o:0.0005, 93s:0.0022, 94s:0.0013, 95s:0.0001, 96s:0.0026, 97s:0.0015, 99:0.2967, T9o:0.0004, J9o:0.0005, Q9o:0.0003, T2s:0.0009, T3s:0.001, T4s:0.0007, T5s:0.0001, T6s:0.0034, T7s:0.0241, T8s:0.0172, T9s:0.1295, TT:0.1941, JTo:0.0007, QTo:0.0001, KTo:0.0017, ATo:0.0222, J3s:0.0001, J4s:0.0001, J5s:0.0017, J7s:0.0081, J8s:0.0008, J9s:0.0039, JJ:0.9981, QJo:0.0012, KJo:0.0037, AJo:0.0001, Q2s:0.001, Q3s:0.0001, Q4s:0.0027, Q5s:0.004, Q6s:0.0166, Q7s:0.0004, Q8s:0.0317, Q9s:0.0004, QTs:0.0039, QJs:0.0479, QQ:0.9918, AQo:0.0905, K2s:0.0005, K4s:0.0035, K6s:0.0011, K7s:0.0016, K8s:0.0039, K9s:0.0001, KTs:0.0015, KJs:0.0037, KQs:0.0358, KK:0.9777, AKo:0.276, A2s:0.0023, A3s:0.0074, A4s:0.0062, A5s:0.0014, A6s:0.0001, A7s:0.0025, A8s:0.0005, A9s:0.1094, ATs:0.0075, AJs:0.0188, AQs:0.0445, AKs:0.6534, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0005, 72o:0.0006, K2o:0.0047, A2o:0.0001, 32s:0.0001, 33:0.0028, 43o:0.0002, 53o:0.0005, 63o:0.0001, 73o:0.0004, 83o:0.0003, T3o:0.0002, J3o:0.0005, Q3o:0.0002, K3o:0.0016, A3o:0.0017, 42s:0.0013, 43s:0.3335, 44:0.0978, 74o:0.0008, 94o:0.0018, T4o:0.0016, J4o:0.0021, Q4o:0.0003, K4o:0.0001, 52s:0.0006, 53s:0.0132, 54s:0.0002, 55:0.0225, 65o:0.0001, 75o:0.0001, 85o:0.0001, T5o:0.0001, Q5o:0.0005, K5o:0.0001, 62s:0.0099, 63s:0.0009, 64s:0.0175, 65s:0.1177, 66:0.0092, 86o:0.0002, 96o:0.0026, T6o:0.0012, J6o:0.0002, Q6o:0.0011, A6o:0.0015, 73s:0.1622, 74s:0.0014, 75s:0.1253, 76s:0.0004, 77:0.0075, 87o:0.0003, 97o:0.0001, T7o:0.0001, J7o:0.0006, Q7o:0.0002, K7o:0.0002, A7o:0.0001, 82s:0.0248, 83s:0.0001, 84s:0.0001, 85s:0.003, 86s:0.0292, 87s:0.0206, 88:0.0002, 98o:0.0001, T8o:0.0254, J8o:0.0001, Q8o:0.0014, A8o:0.0073, 92s:0.0016, 93s:0.0015, 94s:0.0053, 95s:0.0027, 96s:0.088, 97s:0.3231, 98s:0.0501, 99:0.0461, T9o:0.0026, J9o:0.0002, Q9o:0.0001, K9o:0.0001, T2s:0.0008, T4s:0.0535, T5s:0.0015, T6s:0.0003, T7s:0.0016, T8s:0.0392, T9s:0.0001, TT:0.0016, JTo:0.0002, KTo:0.0043, ATo:0.085, J3s:0.0004, J4s:0.002, J5s:0.0002, J6s:0.0975, J7s:0.005, J8s:0.017, J9s:0.0049, JTs:0.0005, JJ:0.6039, QJo:0.0001, KJo:0.0007, AJo:0.0119, Q2s:0.0074, Q3s:0.002, Q5s:0.0027, Q6s:0.0082, Q7s:0.0012, Q8s:0.0045, Q9s:0.1138, QJs:0.0136, QQ:0.0063, KQo:0.057, AQo:0.0157, K2s:0.6333, K3s:0.0007, K4s:0.0002, K5s:0.0034, K6s:0.0168, K7s:0.0019, K9s:0.0516, KTs:0.0583, KJs:0.0398, KQs:0.0002, KK:0.0428, AKo:0.0055, A2s:0.0491, A3s:0.0034, A4s:0.0754, A5s:0.0002, A6s:0.0047, A7s:0.1105, A8s:0.0957, A9s:0.2564, ATs:0.0367, AJs:0.0975, AQs:0.0087, AKs:0.3922, AA:0.5779"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.2644, 32o:0.0002, 42o:0.0007, 52o:0.0265, T2o:0.0005, J2o:0.0001, K2o:0.0417, A2o:0.0008, 32s:0.0104, 33:0.7752, 43o:0.0001, 53o:0.0002, 63o:0.0001, 73o:0.0002, 83o:0.0003, T3o:0.0001, J3o:0.0001, Q3o:0.0003, K3o:0.0184, A3o:0.7015, 42s:0.1912, 43s:0.095, 44:0.469, 54o:0.0192, 64o:0.6054, 74o:0.0001, 94o:0.0098, T4o:0.0001, Q4o:0.1474, A4o:0.032, 52s:0.0001, 53s:0.0087, 54s:0.0007, 55:0.7154, 65o:0.5298, 75o:0.0426, 85o:0.0001, 95o:0.0466, J5o:0.0006, Q5o:0.0022, K5o:0.3658, A5o:0.1747, 62s:0.2706, 63s:0.2862, 64s:0.5379, 65s:0.4574, 66:0.9448, 76o:0.0008, 96o:0.0013, T6o:0.0001, J6o:0.0007, Q6o:0.0001, K6o:0.0238, A6o:0.0001, 72s:0.0139, 73s:0.1144, 74s:0.4986, 75s:0.6185, 76s:0.0004, 77:0.2081, 87o:0.2506, 97o:0.0001, T7o:0.0001, Q7o:0.003, K7o:0.0719, A7o:0.3535, 82s:0.8768, 83s:0.0002, 84s:0.2254, 85s:0.134, 86s:0.0042, 87s:0.5082, 88:0.7782, T8o:0.056, J8o:0.0001, Q8o:0.0904, 92s:0.8385, 93s:0.1947, 94s:0.0196, 95s:0.0056, 96s:0.4105, 97s:0.3562, 98s:0.4417, 99:0.3033, T9o:0.0227, J9o:0.0001, Q9o:0.2185, K9o:0.1051, A9o:0.1228, T2s:0.0782, T3s:0.0237, T4s:0.0003, T5s:0.1072, T6s:0.0352, T7s:0.0054, T8s:0.0126, T9s:0.2592, TT:0.1568, JTo:0.1288, QTo:0.0003, KTo:0.0595, ATo:0.4328, J2s:0.3008, J3s:0.1535, J4s:0.0057, J6s:0.3175, J7s:0.0035, J8s:0.1881, J9s:0.507, JTs:0.0325, JJ:0.3493, QJo:0.0001, KJo:0.0064, AJo:0.7907, Q2s:0.092, Q3s:0.0179, Q4s:0.0797, Q5s:0.1417, Q6s:0.0014, Q7s:0.0005, Q8s:0.1118, Q9s:0.6849, QTs:0.5773, QJs:0.4431, QQ:0.9936, KQo:0.6954, AQo:0.8239, K2s:0.0978, K3s:0.5927, K4s:0.4089, K5s:0.053, K6s:0.6235, K7s:0.1775, K8s:0.5655, K9s:0.0014, KTs:0.2923, KJs:0.5433, KQs:0.8567, KK:0.9572, AKo:0.9881, A2s:0.6082, A3s:0.1142, A4s:0.3474, A5s:0.015, A6s:0.8718, A7s:0.2029, A8s:0.1981, A9s:0.0574, ATs:0.2698, AJs:0.8952, AQs:0.7653, AKs:0.6039, AA:0.4221"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "BTN",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0033, 65s:0.0007, 66:0.003, 77:0.0021, 88:0.0005, 99:0.0014, TT:0.005, JJ:0.0356, AJo:0.0042, Q6s:0.0017, QQ:0.8163, KQo:0.0007, AQo:0.0074, K6s:0.0018, K7s:0.0016, K9s:0.0008, KTs:0.0024, KQs:0.0151, KK:0.0005, AKo:0.0041, A3s:0.0033, A5s:0.0001, A8s:0.0007, A9s:0.0002, ATs:0.0072, AJs:0.0076, AQs:0.004, AA:0.0702"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0095, 33:0.0196, 44:0.0073, 53s:0.0005, 54s:0.0011, 55:0.0346, 64s:0.0003, 65s:0.0026, 66:0.0586, 75s:0.0009, 76s:0.0016, 77:0.0337, 85s:0.0003, 86s:0.0003, 88:0.0564, 96s:0.001, 98s:0.0002, 99:0.116, A9o:0.0001, T9s:0.0003, TT:0.1398, ATo:0.0029, JTs:0.0008, JJ:0.2656, AJo:0.6416, Q9s:0.0003, QTs:0.0051, QJs:0.0003, QQ:0.1837, KQo:0.0105, AQo:0.3569, K3s:0.0006, K4s:0.0014, K5s:0.006, K6s:0.012, K7s:0.0143, K8s:0.0014, K9s:0.0093, KTs:0.0253, KJs:0.0009, KQs:0.0298, KK:0.9995, AKo:0.9959, A2s:0.003, A3s:0.0117, A4s:0.0058, A5s:0.009, A6s:0.0002, A7s:0.0019, A8s:0.002, A9s:0.0106, ATs:0.0162, AJs:0.9863, AQs:0.6912, AKs, AA:0.9298"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|BTN:CALL@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0107, 42o:0.0001, 52o:0.0002, 92o:0.0006, T2o:0.0005, Q2o:0.0005, 32s:0.0004, 33:0.0109, 53o:0.0006, 93o:0.0005, J3o:0.0003, Q3o:0.0025, K3o:0.0003, A3o:0.002, 42s:0.0018, 43s:0.0018, 44:0.0016, 54o:0.0003, 64o:0.0001, 74o:0.0002, 84o:0.0001, 94o:0.0016, J4o:0.0001, Q4o:0.0001, A4o:0.0013, 52s:0.0002, 53s:0.0001, 54s:0.0002, 55:0.0022, 75o:0.0033, 85o:0.0002, 95o:0.0001, T5o:0.0001, J5o:0.0003, Q5o:0.0007, A5o:0.0003, 62s:0.0034, 63s:0.0006, 64s:0.0184, 65s:0.0006, 66:0.0003, 76o:0.0001, 96o:0.0001, T6o:0.0003, J6o:0.0001, Q6o:0.0001, K6o:0.0001, A6o:0.0007, 72s:0.0004, 73s:0.0001, 74s:0.004, 75s:0.0028, 76s:0.0005, 77:0.0005, 97o:0.0003, T7o:0.0001, J7o:0.0002, Q7o:0.0006, K7o:0.0035, A7o:0.0017, 82s:0.0132, 83s:0.0003, 84s:0.0087, 85s:0.0036, 86s:0.0004, 87s:0.0149, 88:0.0037, 98o:0.0014, T8o:0.0002, Q8o:0.0002, K8o:0.0001, A8o:0.0019, 93s:0.0001, 94s:0.0002, 95s:0.003, 96s:0.0007, 97s:0.0089, 98s:0.0043, T9o:0.0016, J9o:0.0002, Q9o:0.0003, A9o:0.0068, T2s:0.0003, T3s:0.0009, T4s:0.001, T5s:0.0004, T6s:0.0429, T7s:0.0006, T8s:0.0001, T9s:0.0004, TT:0.0027, QTo:0.0005, ATo:0.0004, J2s:0.0037, J3s:0.0011, J4s:0.0005, J5s:0.001, J6s:0.0017, J7s:0.0003, J8s:0.14, J9s:0.0103, JTs:0.0001, JJ:0.0032, QJo:0.0002, Q2s:0.0003, Q3s:0.0058, Q4s:0.0068, Q5s:0.0045, Q6s:0.0001, Q7s:0.001, Q8s:0.001, Q9s:0.0677, QTs:0.0022, QJs:0.0001, QQ:0.3493, KQo:0.0005, AQo:0.0004, K2s:0.0005, K3s:0.0003, K4s:0.002, K5s:0.0002, K6s:0.013, K7s:0.0054, K8s:0.0003, K9s:0.0469, KTs:0.0013, KJs:0.0003, KQs:0.0127, KK:0.0016, AKo:0.0901, A2s:0.0472, A3s:0.0129, A4s:0.0006, A5s:0.0001, A6s:0.0025, A7s:0.0025, A8s:0.0006, A9s:0.1019, ATs:0.236, AJs:0.0045, AQs:0.0171, AKs:0.2251, AA:0.1238"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.007, 42o:0.0005, 92o:0.0002, J2o:0.0006, Q2o:0.0018, A2o:0.0008, 32s:0.0002, 33:0.005, 43o:0.0003, 73o:0.0009, 83o:0.0001, 93o:0.0004, T3o:0.0004, Q3o:0.0008, K3o:0.0003, A3o:0.0003, 42s:0.0004, 43s:0.0002, 44:0.0397, 54o:0.0001, 64o:0.0001, 74o:0.0018, 84o:0.0003, 94o:0.0004, J4o:0.0033, Q4o:0.0005, K4o:0.0011, A4o:0.0001, 52s:0.0002, 53s:0.0022, 54s:0.0034, 55:0.0147, 65o:0.0001, 75o:0.0002, 85o:0.0006, 95o:0.0001, T5o:0.0002, J5o:0.0001, Q5o:0.0003, K5o:0.0003, A5o:0.0016, 62s:0.0023, 63s:0.0022, 64s:0.0123, 65s:0.005, 66:0.0046, 76o:0.0003, 86o:0.0004, 96o:0.0004, J6o:0.0001, K6o:0.0005, A6o:0.0001, 72s:0.0004, 73s:0.0132, 74s:0.0017, 75s:0.0013, 76s:0.0247, 77:0.0001, 97o:0.0002, T7o:0.0001, J7o:0.0001, Q7o:0.0009, K7o:0.0001, A7o:0.0009, 82s:0.0473, 83s:0.0005, 84s:0.0023, 85s:0.0155, 86s:0.0941, 87s:0.1126, 88:0.004, T8o:0.0004, Q8o:0.0027, K8o:0.0009, A8o:0.0006, 93s:0.0053, 94s:0.0002, 95s:0.0013, 96s:0.0004, 97s:0.1036, 98s:0.0004, T9o:0.0015, J9o:0.0003, Q9o:0.002, K9o:0.0017, A9o:0.0124, T2s:0.0003, T3s:0.0032, T4s:0.0011, T5s:0.0014, T6s:0.038, T7s:0.0003, T8s:0.0196, T9s:0.0014, TT:0.4871, JTo:0.0007, QTo:0.0048, ATo:0.0007, J2s:0.0028, J3s:0.0005, J4s:0.0001, J5s:0.0001, J6s:0.001, J7s:0.029, J8s:0.2028, J9s:0.0004, JTs:0.0001, JJ:0.0407, QJo:0.0122, AJo:0.0145, Q2s:0.0009, Q3s:0.1355, Q4s:0.0031, Q5s:0.0028, Q6s:0.0003, Q7s:0.0004, Q8s:0.05, Q9s:0.0009, QTs:0.0035, QJs:0.0053, QQ:0.6104, KQo:0.0003, AQo:0.0089, K2s:0.0018, K3s:0.4224, K4s:0.004, K5s:0.0002, K6s:0.1683, K7s:0.0002, K8s:0.0083, K9s:0.1419, KTs:0.0465, KJs:0.0008, KQs:0.0552, KK:0.9902, AKo:0.6024, A2s:0.0094, A3s:0.091, A4s:0.0005, A5s:0.0076, A6s:0.3086, A7s:0.3058, A8s:0.3613, A9s:0.098, ATs:0.0955, AJs:0.1145, AQs:0.0092, AKs:0.0054, AA:0.8759"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.8319, KK, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@18.5|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.3183, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@12",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "52s:0.0001, 54s:0.0037, 65s:0.0405, A6o:0.031, 76s:0.0001, 85s:0.0001, 88:0.0016, 97s:0.0001, TT:0.0001, ATo:0.0294, J5s:0.0297, J7s:0.0003, J9s:0.0001, JJ:0.0001, AJo:0.0028, Q9s:0.0002, QJs:0.0001, QQ:0.3608, AQo:0.2287, KTs:0.0886, KJs:0.0003, KQs:0.0442, KK:0.0132, AKo:0.0326, A3s:0.0497, A4s:0.1344, A6s:0.1751, A7s:0.0261, A8s:0.0001, A9s:0.0352, ATs:0.0275, AJs:0.0272, AQs:0.1564, AKs:0.0121, AA:0.1246"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0314, A2o:0.0001, 32s:0.0001, 33:0.3386, A3o:0.0026, 43s:0.0216, 44:0.0325, 52s:0.0008, 53s:0.078, 54s:0.0413, 55:0.0531, 62s:0.0014, 63s:0.0003, 64s:0.0787, 65s:0.1486, 66:0.395, 76o:0.0006, 72s:0.0002, 73s:0.0001, 74s:0.0297, 75s:0.1096, 76s:0.0001, 77:0.1978, A7o:0.0033, 85s:0.0067, 86s:0.0271, 87s:0.1621, 88:0.3471, 98o:0.0001, 93s:0.016, 94s:0.0177, 95s:0.019, 96s:0.0003, 97s:0.0056, 98s:0.0036, 99:0.0275, T2s:0.0001, T3s:0.0038, T4s:0.0003, T7s:0.0341, T8s:0.0019, TT:0.1861, J5s:0.0001, J7s:0.0006, J9s:0.0002, JTs:0.0028, JJ:0.0907, AJo:0.0005, Q2s:0.0005, Q4s:0.0001, Q5s:0.0069, Q6s:0.0012, Q8s:0.0001, Q9s:0.0042, QTs:0.0078, QJs:0.0033, QQ:0.1574, K2s:0.0002, K3s:0.0431, K4s:0.1712, K5s:0.0148, K6s:0.092, K7s:0.0686, K8s:0.2013, K9s:0.2076, KTs:0.2329, KJs:0.0213, KQs:0.2397, KK:0.9868, AKo:0.96, A2s:0.0002, A3s:0.4888, A4s:0.0034, A5s:0.003, A6s:0.1212, A7s:0.1342, A8s:0.0012, A9s:0.4678, ATs:0.2195, AJs:0.0404, AQs:0.0363, AKs:0.9713, AA:0.8754"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@12",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.004, 33:0.0076, 42s:0.0206, 43s:0.0344, 44:0.0043, 52s:0.0319, 53s:0.045, 54s:0.0388, 55:0.0077, 65o:0.0192, 63s:0.0556, 64s:0.0903, 65s:0.0596, 66:0.0079, 76o:0.0151, 74s:0.0333, 75s:0.0561, 76s:0.0968, 77:0.0063, 84s:0.03, 85s:0.0375, 86s:0.0593, 87s:0.0316, 88:0.0026, 96s:0.0367, 97s:0.0656, 98s:0.1398, 99:0.0943, T6s:0.033, T7s:0.0304, T8s:0.0756, T9s:0.0594, TT:0.0314, ATo:0.0362, J6s:0.0307, J8s:0.0348, J9s:0.0393, JTs:0.0965, JJ:0.0031, AJo:0.1055, Q9s:0.0129, QTs:0.036, QJs:0.0439, QQ:0.0002, AQo:0.0549, K4s:0.0093, K5s:0.0171, K6s:0.0209, K7s:0.0267, K8s:0.0254, K9s:0.0243, KTs:0.0482, KJs:0.0546, KQs:0.015, KK:0.0004, A2s:0.0396, A3s:0.0354, A4s:0.0326, A5s:0.0505, A6s:0.0374, A7s:0.0325, A8s:0.0524, A9s:0.3642, ATs:0.3635, AJs:0.3561, AQs:0.0441, AA:0.0058"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9903, K2o:0.0203, 32s:0.5067, 33:0.9899, 43o:0.1186, 53o:0.2287, 63o:0.0145, K3o:0.0198, A3o:0.026, 42s:0.5806, 43s:0.7336, 44:0.9934, 54o:0.5152, 64o:0.3949, 74o:0.0697, K4o:0.0541, A4o:0.0817, 52s:0.573, 53s:0.8077, 54s:0.9216, 55:0.9901, 65o:0.5428, 75o:0.2848, 85o:0.0295, K5o:0.0407, A5o:0.1135, 62s:0.468, 63s:0.622, 64s:0.8268, 65s:0.9228, 66:0.9914, 76o:0.5328, 86o:0.3342, K6o:0.107, 72s:0.1508, 73s:0.4635, 74s:0.5857, 75s:0.8289, 76s:0.8592, 77:0.9929, 87o:0.4893, K7o:0.0516, 82s:0.1986, 83s:0.165, 84s:0.5145, 85s:0.6363, 86s:0.8612, 87s:0.9062, 88:0.9963, 98o:0.076, T8o:0.0407, J8o:0.0123, K8o:0.0436, 93s:0.015, 94s:0.0002, 95s:0.2143, 96s:0.6139, 97s:0.6605, 98s:0.7193, 99:0.9043, T9o:0.0258, K9o:0.025, T2s:0.078, T3s:0.0583, T4s:0.3418, T5s:0.2055, T6s:0.5003, T7s:0.5787, T8s:0.7063, T9s:0.6359, TT:0.9683, JTo:0.3313, KTo:0.2563, J2s:0.1195, J3s:0.2527, J4s:0.4153, J5s:0.4214, J6s:0.3982, J7s:0.5328, J8s:0.6185, J9s:0.6168, JTs:0.8083, JJ:0.9967, KJo:0.3486, AJo:0.1072, Q2s:0.0002, Q3s:0.0044, Q4s:0.1709, Q5s:0.0598, Q6s:0.0692, Q7s:0.1603, Q8s:0.3832, Q9s:0.1752, QTs:0.5701, QJs:0.6058, QQ:0.9998, KQo:0.0642, AQo:0.9445, K2s:0.6217, K3s:0.6304, K4s:0.7202, K5s:0.7521, K6s:0.7333, K7s:0.7388, K8s:0.7852, K9s:0.6417, KTs:0.9051, KJs:0.8698, KQs:0.7883, KK:0.9996, AKo, A2s:0.514, A3s:0.5433, A4s:0.7353, A5s:0.6887, A6s:0.5173, A7s:0.5342, A8s:0.5174, A9s:0.1678, ATs:0.3325, AJs:0.4557, AQs:0.9558, AKs, AA:0.9942"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0004, JJ:0.0001, QQ:0.4177, KK, AKo:0.0106, A4s:0.0001, AJs:0.0001, AKs:0.0009, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BB:4BET@34.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.118, 33:0.3939, 44:0.8342, 55:0.9291, 66:0.9248, 77:0.9994, 88:0.9534, 99:0.9291, TT:0.9997, JJ, QQ, AQo:0.0446, KK, AKo, AJs:0.0282, AQs:0.8283, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0002, 44:0.0005, 53s:0.0001, 54s:0.0001, 55:0.0008, 75s:0.0001, 88:0.0726, 94s:0.0001, 99:0.0026, T6s:0.0002, TT:0.0008, J6s:0.0001, JJ:0.1342, QTs:0.0004, QQ:0.3442, K2s:0.0001, K5s:0.0002, K7s:0.0001, K8s:0.0001, KK, AKo:0.5922, A2s:0.0001, A4s:0.0001, A5s:0.0004, A6s:0.0001, A8s:0.0002, ATs:0.0003, AQs:0.0008, AKs:0.8856, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.2207, 33:0.3416, 44:0.5638, 55:0.6932, 66:0.8277, 77:0.8455, 88:0.8971, 99:0.8926, TT:0.9546, JJ:0.9883, QQ, AQo:0.3177, KK, AKo, AJs:0.2158, AQs:0.8315, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0001, 42s:0.0001, 54s:0.0003, 64s:0.0002, 87s:0.0001, 88:0.0001, 92s:0.0001, 95s:0.0001, 99:0.0001, T3s:0.0001, T8s:0.0001, T9s:0.0001, J2s:0.0001, J7s:0.0001, J9s:0.0001, JJ:0.0001, Q4s:0.0001, QQ:0.0001, K5s:0.0002, KJs:0.0001, KK:0.9928, A2s:0.0004, A4s:0.0002, A5s:0.0002, AJs:0.0002, AQs:0.0002, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0001, 53s:0.0001, 65s:0.0001, 77:0.0002, A7o:0.0002, 85s:0.0001, 87s:0.0001, 88:0.0003, 99:0.0004, T3s:0.0001, T4s:0.0001, T8s:0.0002, T9s:0.0001, TT:0.0002, J8s:0.0001, J9s:0.0001, JTs:0.0002, JJ:0.0002, Q3s:0.0002, Q8s:0.0001, Q9s:0.0003, QTs:0.0001, QQ:0.0001, K3s:0.0015, K4s:0.0001, K9s:0.0001, KJs:0.0004, KQs:0.0003, KK, AKo:0.0001, A2s:0.0006, A4s:0.0004, A5s:0.0006, A6s:0.0001, ATs:0.0001, AJs:0.0003, AQs:0.0003, AKs:0.0002, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|LJ:4BET@18.5",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77, 88, 99, TT, JJ, AJo, QQ, AQo, KQs:0.0002, KK, AKo, A9s:0.0001, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "64s:0.0001, 65s:0.0001, 88:0.0001, 96s:0.0001, TT:0.0003, J9s:0.0001, JJ:0.0001, Q6s:0.0001, QQ:0.1178, K8s:0.0001, KK, A3s:0.0001, A8s:0.0001, AKs:0.2387, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.001, 33:0.1208, 44:0.6138, 55:0.8118, 66:0.9421, 77:0.997, 88:0.9964, 99:0.9982, TT, JJ, QQ, KK, AKo, AJs:0.0006, AQs:0.5251, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:3BET@7|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "63s:0.0001, 97s:0.0001, T6s:0.0001, TT:0.0001, J9s:0.0001, JTs:0.0002, JJ:0.0002, Q9s:0.0001, QJs:0.0001, QQ:0.0008, KK:0.9973, A6s:0.0001, A7s:0.0002, ATs:0.0001, AJs:0.0003, AQs:0.0006, AKs:0.1266, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@12",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0033, 32o:0.0031, 52o:0.0013, 72o:0.0008, 82o:0.0002, T2o:0.0013, J2o:0.0007, Q2o:0.0001, K2o:0.0007, A2o:0.0005, 32s:0.0067, 33:0.0023, 43o:0.0001, 53o:0.0006, 63o:0.0063, 73o:0.0004, 83o:0.0001, 93o:0.0013, T3o:0.0003, J3o:0.0085, Q3o:0.011, K3o:0.0017, A3o:0.0006, 42s:0.338, 43s:0.0002, 44:0.0029, 54o:0.001, 64o:0.0512, 74o:0.0003, 84o:0.0003, 94o:0.0001, T4o:0.0077, J4o:0.0005, Q4o:0.0026, K4o:0.0022, A4o:0.0062, 52s:0.015, 53s:0.0015, 54s:0.0025, 55:0.0009, 65o:0.0003, 75o:0.0622, 85o:0.0043, 95o:0.0001, T5o:0.0501, J5o:0.0008, Q5o:0.0055, K5o:0.0036, A5o:0.0531, 62s:0.0641, 63s:0.0001, 64s:0.0079, 65s:0.0763, 66:0.0069, 76o:0.0034, 86o:0.0033, 96o:0.0433, J6o:0.0017, A6o:0.0042, 72s:0.0096, 73s:0.0513, 74s:0.0068, 75s:0.0313, 76s:0.3486, 77:0.2508, 87o:0.0005, 97o:0.0143, T7o:0.0007, J7o:0.0004, K7o:0.0069, A7o:0.009, 82s:0.0001, 83s:0.0008, 84s:0.0103, 85s:0.1062, 86s:0.0029, 88:0.009, 98o:0.1615, T8o:0.0013, J8o:0.0009, Q8o:0.0035, K8o:0.0001, A8o:0.0021, 92s:0.0608, 93s:0.1402, 94s:0.0931, 95s:0.0143, 96s:0.0015, 97s:0.009, 98s:0.0011, 99:0.0278, T9o:0.0018, J9o:0.0005, Q9o:0.0003, K9o:0.0527, A9o:0.0025, T3s:0.0338, T4s:0.0229, T5s:0.0011, T6s:0.0138, T7s:0.0008, T8s:0.0005, T9s:0.0215, TT:0.0135, JTo:0.0028, QTo:0.0055, KTo:0.0066, ATo:0.0001, J2s:0.004, J3s:0.0005, J4s:0.0122, J5s:0.0261, J6s:0.002, J7s:0.1598, J8s:0.0106, J9s:0.0004, JTs:0.3633, JJ:0.1484, QJo:0.0022, KJo:0.0011, AJo:0.0985, Q2s:0.0298, Q3s:0.0018, Q4s:0.0082, Q5s:0.0078, Q6s:0.0947, Q7s:0.0028, Q8s:0.0967, Q9s:0.0007, QTs:0.1361, QJs:0.0827, QQ:0.0313, KQo:0.0002, AQo:0.0105, K2s:0.1971, K3s:0.0111, K4s:0.0187, K5s:0.0509, K6s:0.0147, K7s:0.0462, K8s:0.0006, K9s:0.0006, KTs:0.0217, KJs:0.0035, KQs:0.0004, KK:0.1428, AKo:0.018, A2s:0.0217, A3s:0.0242, A4s:0.0001, A5s:0.2344, A6s:0.0505, A7s:0.0132, A8s:0.0011, A9s:0.2734, ATs:0.0062, AJs:0.3438, AQs:0.1562, AKs:0.0201, AA:0.037"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.1305, 52o:0.0041, 62o:0.0105, 72o:0.0053, 82o:0.001, 92o:0.0054, T2o:0.0056, J2o:0.0319, Q2o:0.0018, K2o:0.0007, A2o:0.0046, 32s:0.1924, 33:0.5102, 43o:0.0621, 53o:0.0002, 63o:0.0046, 73o:0.004, 83o:0.1943, 93o:0.0008, T3o:0.1622, J3o:0.1108, Q3o:0.0371, K3o:0.0023, A3o:0.006, 42s:0.1067, 43s:0.0012, 44:0.2565, 54o:0.1974, 64o:0.0591, 74o:0.0003, 84o:0.5988, 94o:0.0002, T4o:0.0013, J4o:0.0066, Q4o:0.0009, K4o:0.0019, A4o:0.01, 52s:0.0786, 53s:0.0449, 54s:0.0079, 55:0.311, 65o:0.0001, 75o:0.3285, 85o:0.1098, 95o:0.0015, T5o:0.1059, J5o:0.002, Q5o:0.0297, K5o:0.0657, A5o:0.0164, 62s:0.4804, 63s:0.0905, 64s:0.1541, 65s:0.3894, 66:0.2406, 76o:0.0005, 86o:0.0049, 96o:0.0036, T6o:0.0013, J6o:0.0015, Q6o:0.0021, K6o:0.0652, A6o:0.0051, 72s:0.0026, 73s:0.0056, 74s:0.0908, 75s:0.8227, 76s:0.1716, 77:0.4534, 87o:0.0016, 97o:0.0029, T7o:0.1316, J7o:0.0027, Q7o:0.0026, K7o:0.0004, A7o:0.416, 82s:0.0713, 83s:0.082, 84s:0.298, 85s:0.6666, 86s:0.3865, 87s:0.273, 88:0.4576, 98o:0.0022, T8o:0.0032, J8o:0.0296, Q8o:0.325, K8o:0.1881, A8o:0.1217, 92s:0.5158, 93s:0.5655, 94s:0.0078, 95s:0.5447, 96s:0.0007, 97s:0.2826, 98s:0.2717, 99:0.6734, T9o:0.0035, J9o:0.0159, Q9o:0.024, K9o:0.0467, A9o:0.0178, T2s:0.0974, T3s:0.0208, T4s:0.3652, T6s:0.0177, T7s:0.5374, T8s:0.0025, T9s:0.0122, TT:0.9751, JTo:0.0918, QTo:0.0178, KTo:0.0066, ATo:0.0054, J2s:0.0039, J3s:0.009, J4s:0.0115, J5s:0.2881, J6s:0.9293, J7s:0.014, J8s:0.6832, J9s:0.8161, JTs:0.223, JJ:0.0386, QJo:0.1609, KJo:0.0022, AJo:0.0277, Q2s:0.0004, Q3s:0.0039, Q4s:0.2118, Q5s:0.0054, Q6s:0.0207, Q7s:0.0017, Q8s:0.1279, Q9s:0.075, QTs:0.3003, QJs:0.5233, QQ:0.9685, KQo:0.0095, AQo:0.2295, K2s:0.2164, K3s:0.2906, K4s:0.427, K5s:0.0082, K6s:0.3345, K7s:0.3334, K8s:0.6085, K9s:0.047, KTs:0.5714, KJs:0.0055, KQs:0.7913, KK:0.8522, AKo:0.8374, A2s:0.0917, A3s:0.2015, A4s:0.0085, A5s:0.4373, A6s:0.4632, A7s:0.0005, A8s:0.2325, A9s:0.1653, ATs:0.0243, AJs:0.307, AQs:0.8111, AKs:0.4771, AA:0.9609"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@12",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, 55:0.0001, 77:0.0001, 88:0.0002, 99:0.0002, TT:0.0006, JJ:0.0001, KK:0.0001, AKs:0.0004, AA:0.0081"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1899, 33:0.2324, 44:0.2917, 55:0.3529, 66:0.47, K6o:0.1257, 77:0.4605, 87s:0.012, 88:0.5914, K8o:0.1187, A8o:0.0632, 99:0.3267, TT:0.8676, KTo:0.197, ATo:0.6868, JJ:0.9213, KJo:0.3104, AJo:0.8456, Q8s:0.0294, QJs:0.1774, QQ:0.9519, KQo:0.4361, AQo:0.9215, K2s:0.1857, K3s:0.2516, K4s:0.2391, K5s:0.1944, K6s:0.2822, K7s:0.284, K8s:0.2894, K9s:0.2101, KTs:0.3663, KJs:0.541, KQs:0.7143, KK:0.9999, AKo:0.9568, A2s:0.1577, A3s:0.12, A4s:0.2092, A5s:0.2037, A6s:0.1813, A7s:0.2358, A8s:0.2958, A9s:0.0715, ATs:0.864, AJs:0.9157, AQs:0.934, AKs:0.9618, AA:0.9919"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@34.75",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0007, 42o:0.0001, 52o:0.0001, 62o:0.0018, 82o:0.0002, J2o:0.0002, Q2o:0.0001, K2o:0.0001, A2o:0.0018, 32s:0.0013, 33:0.0201, 53o:0.0003, 63o:0.0004, 73o:0.0005, 83o:0.0005, 93o:0.0019, T3o:0.0001, J3o:0.0012, Q3o:0.0007, K3o:0.0031, A3o:0.0004, 42s:0.0001, 43s:0.0099, 44:0.1554, 74o:0.0002, 84o:0.0004, T4o:0.0002, J4o:0.0001, Q4o:0.0001, K4o:0.004, A4o:0.0007, 52s:0.0015, 53s:0.0001, 54s:0.0033, 55:0.0012, 65o:0.0003, 95o:0.0002, T5o:0.0001, J5o:0.0001, Q5o:0.0001, K5o:0.0005, A5o:0.0022, 62s:0.0182, 63s:0.0003, 64s:0.0003, 65s:0.0043, 66:0.0044, 86o:0.0003, 96o:0.0024, J6o:0.0005, Q6o:0.0004, K6o:0.0033, A6o:0.0029, 72s:0.0007, 74s:0.0571, 75s:0.0034, 76s:0.0808, 77:0.1309, 87o:0.0003, 97o:0.0002, T7o:0.0001, J7o:0.0003, Q7o:0.0006, K7o:0.0004, A7o:0.0084, 82s:0.0003, 83s:0.0144, 84s:0.0103, 85s:0.0015, 86s:0.0064, 87s:0.0098, 88:0.583, 98o:0.0007, T8o:0.0007, J8o:0.0002, Q8o:0.0001, K8o:0.0003, A8o:0.0006, 92s:0.0015, 93s:0.0003, 94s:0.0046, 95s:0.019, 96s:0.0001, 97s:0.0013, 98s:0.0044, 99:0.3673, J9o:0.001, Q9o:0.0002, A9o:0.0019, T2s:0.0006, T4s:0.001, T5s:0.0001, T6s:0.0032, T7s:0.0049, T8s:0.0143, T9s:0.0246, TT:0.932, JTo:0.0003, KTo:0.0001, ATo:0.002, J2s:0.0049, J3s:0.0004, J4s:0.0004, J5s:0.0009, J7s:0.0046, J8s:0.002, J9s:0.002, JTs:0.0066, JJ:0.9986, QJo:0.0009, KJo:0.0039, AJo:0.1311, Q2s:0.0002, Q3s:0.0154, Q5s:0.0126, Q6s:0.0145, Q7s:0.0635, Q8s:0.0295, Q9s:0.0011, QTs:0.0989, QJs:0.0099, QQ:0.9999, KQo:0.0002, AQo:0.0257, K2s:0.0092, K3s:0.0053, K4s:0.0012, K5s:0.038, K6s:0.0005, K7s:0.0072, K8s:0.0248, K9s:0.0007, KTs:0.0283, KJs:0.0049, KQs:0.0057, KK:0.9912, AKo:0.6917, A2s:0.001, A3s:0.0002, A4s:0.0026, A5s:0.0031, A6s:0.0007, A7s:0.0059, A8s:0.0914, A9s:0.025, ATs:0.1387, AJs:0.069, AQs:0.6789, AKs:0.9028, AA:0.9972"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@34.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0605, 88:0.753, 99:0.8913, TT:0.9998, JJ, AJo:0.7143, QQ, AQo:0.9998, KK, AKo, AJs:0.9988, AQs:0.9999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@8",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3159, 32o:0.0001, 42o:0.0001, 52o:0.0001, 62o:0.0008, 82o:0.0235, 92o:0.0005, T2o:0.0024, J2o:0.016, Q2o:0.0018, K2o:0.0005, A2o:0.0001, 32s:0.0001, 33:0.0013, 43o:0.0001, 53o:0.0023, 63o:0.0015, 73o:0.0001, 83o:0.0085, 93o:0.0053, T3o:0.0032, J3o:0.0003, K3o:0.0013, A3o:0.0206, 42s:0.0007, 43s:0.0152, 44:0.0826, 64o:0.0176, 84o:0.0074, 94o:0.0006, T4o:0.0008, Q4o:0.0015, K4o:0.0011, A4o:0.0048, 52s:0.0373, 53s:0.0059, 54s:0.0143, 55:0.0159, 65o:0.0002, 75o:0.0007, 85o:0.0003, 95o:0.0003, T5o:0.0066, J5o:0.0032, Q5o:0.0042, K5o:0.0001, A5o:0.0002, 62s:0.001, 63s:0.0116, 64s:0.0775, 65s:0.0198, 66:0.0027, 76o:0.0015, 86o:0.0006, 96o:0.0014, J6o:0.0048, Q6o:0.0053, K6o:0.0002, A6o:0.0097, 72s:0.0022, 73s:0.0206, 74s:0.0038, 75s:0.0645, 76s:0.0012, 77:0.1495, 87o:0.0001, 97o:0.0001, T7o:0.0145, J7o:0.0023, Q7o:0.0055, K7o:0.0001, A7o:0.0104, 82s:0.0347, 83s:0.0017, 84s:0.011, 85s:0.0001, 86s:0.0198, 87s:0.1225, 88:0.0018, 98o:0.0008, T8o:0.0012, K8o:0.0001, A8o:0.0121, 92s:0.0159, 93s:0.0279, 94s:0.02, 95s:0.0027, 96s:0.0033, 97s:0.0449, 98s:0.0098, 99:0.0651, T9o:0.0005, J9o:0.0064, Q9o:0.0001, K9o:0.0005, T2s:0.0021, T4s:0.0086, T5s:0.0439, T6s:0.0586, T7s:0.0034, T8s:0.0311, T9s:0.0245, TT:0.1458, JTo:0.0003, QTo:0.0028, KTo:0.0007, ATo:0.0038, J3s:0.0006, J4s:0.0101, J5s:0.007, J6s:0.0009, J7s:0.0582, J8s:0.2288, J9s:0.0182, JTs:0.0051, JJ:0.1282, QJo:0.0011, KJo:0.0018, AJo:0.1123, Q2s:0.0001, Q3s:0.0043, Q4s:0.0026, Q5s:0.0039, Q6s:0.0113, Q7s:0.0098, Q9s:0.0439, QTs:0.0023, QJs:0.0009, QQ:0.3509, KQo:0.0012, AQo:0.0966, K2s:0.0003, K3s:0.2024, K4s:0.0542, K5s:0.0159, K6s:0.0039, K7s:0.0738, K8s:0.0356, K9s:0.0018, KTs:0.0011, KJs:0.0002, KQs:0.5892, KK:0.0383, A2s:0.0348, A3s:0.0082, A4s:0.2731, A5s:0.2234, A6s:0.0032, A7s:0.1879, A8s:0.4592, A9s:0.0114, ATs:0.0665, AJs:0.4062, AQs:0.1847, AKs:0.0002, AA:0.0648"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0116, 32o:0.0013, 42o:0.0077, 52o:0.0003, 72o:0.0002, 82o:0.0007, 92o:0.0014, T2o:0.0001, J2o:0.0017, K2o:0.0006, A2o:0.0001, 32s:0.0008, 33:0.0008, 63o:0.0012, 73o:0.002, 83o:0.0029, 93o:0.0005, J3o:0.0003, Q3o:0.0007, K3o:0.0002, A3o:0.0127, 42s:0.0009, 43s:0.0002, 44:0.0031, 54o:0.0012, 64o:0.0014, 84o:0.0016, 94o:0.0001, T4o:0.0007, J4o:0.0002, K4o:0.0001, A4o:0.001, 53s:0.0005, 54s:0.0427, 55:0.0003, 65o:0.0018, 75o:0.0003, 95o:0.0001, T5o:0.0024, J5o:0.0014, Q5o:0.0001, K5o:0.0002, 62s:0.0005, 63s:0.0001, 64s:0.0602, 65s:0.0097, 66:0.0198, 76o:0.0008, 86o:0.0001, 96o:0.0001, T6o:0.0007, J6o:0.001, Q6o:0.0008, K6o:0.0003, A6o:0.0009, 72s:0.0059, 73s:0.0062, 74s:0.0026, 75s:0.0005, 76s:0.0004, 77:0.1371, 87o:0.0001, 97o:0.0005, T7o:0.0001, Q7o:0.0004, K7o:0.0008, 82s:0.0003, 83s:0.0062, 84s:0.0014, 85s:0.0194, 86s:0.0041, 87s:0.0017, 88:0.066, T8o:0.0009, J8o:0.0004, Q8o:0.0002, K8o:0.0008, 92s:0.227, 93s:0.0113, 94s:0.0001, 95s:0.0498, 96s:0.0018, 97s:0.0004, 98s:0.023, 99:0.1586, T9o:0.0008, J9o:0.0004, Q9o:0.0015, K9o:0.0016, A9o:0.0001, T2s:0.0006, T3s:0.0086, T4s:0.0024, T5s:0.0001, T6s:0.1274, T7s:0.2498, T8s:0.0013, TT:0.0337, JTo:0.0009, KTo:0.0011, ATo:0.0081, J2s:0.0009, J4s:0.0011, J5s:0.0037, J6s:0.0012, J7s:0.0412, J8s:0.002, J9s:0.0003, JTs:0.0031, JJ:0.1165, QJo:0.0002, KJo:0.0001, AJo:0.1707, Q3s:0.0001, Q4s:0.0005, Q5s:0.033, Q6s:0.0054, Q7s:0.0023, Q8s:0.0936, Q9s:0.005, QTs:0.0009, QJs:0.0273, QQ:0.2273, KQo:0.0011, AQo:0.0215, K2s:0.0001, K3s:0.0256, K4s:0.0015, K5s:0.1138, K6s:0.0092, K7s:0.0056, K8s:0.0195, K9s:0.0139, KTs:0.0002, KJs:0.0042, KQs:0.0492, KK:0.3815, AKo:0.0001, A2s:0.082, A3s:0.0166, A4s:0.0002, A5s:0.0287, A6s:0.3548, A7s:0.0346, A8s:0.1408, A9s:0.0886, ATs:0.0048, AJs:0.0052, AQs:0.0022, AKs:0.0021, AA:0.0999"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.3691, 32o:0.0454, 42o:0.0056, 52o:0.0002, 62o:0.0103, 82o:0.0013, 92o:0.0018, T2o:0.0004, J2o:0.0341, Q2o:0.0021, K2o:0.0028, A2o:0.2748, 32s:0.0001, 33:0.0513, 43o:0.0446, 53o:0.1359, 63o:0.0192, 73o:0.0003, 83o:0.0011, 93o:0.0822, T3o:0.0012, J3o:0.0001, Q3o:0.0003, K3o:0.0014, A3o:0.2062, 42s:0.0374, 43s:0.0741, 44:0.0011, 64o:0.0001, 74o:0.0043, 84o:0.0411, 94o:0.0011, T4o:0.0032, J4o:0.0006, Q4o:0.0003, K4o:0.0012, A4o:0.0036, 52s:0.3353, 53s:0.0002, 54s:0.0895, 55:0.016, 65o:0.0009, 75o:0.0045, 85o:0.0008, 95o:0.0044, T5o:0.0008, J5o:0.0014, Q5o:0.1843, K5o:0.0378, A5o:0.0007, 62s:0.6187, 63s:0.891, 64s:0.247, 65s:0.8529, 66:0.3744, 76o:0.0088, 86o:0.0691, 96o:0.1346, T6o:0.0024, J6o:0.0002, Q6o:0.0007, K6o:0.0102, A6o:0.6951, 72s:0.0015, 73s:0.0011, 74s:0.1811, 75s:0.6026, 76s:0.2273, 77:0.1452, 87o:0.2504, 97o:0.0101, T7o:0.0054, J7o:0.0084, Q7o:0.0029, K7o:0.0008, A7o:0.0158, 82s:0.0887, 83s:0.0047, 84s:0.1003, 85s:0.0003, 86s:0.5848, 87s:0.0794, 88:0.4706, 98o:0.0671, T8o:0.0002, J8o:0.0003, Q8o:0.0008, K8o:0.0003, A8o:0.0209, 92s:0.3944, 93s:0.3883, 94s:0.4244, 95s:0.136, 96s:0.0639, 97s:0.1598, 98s:0.8158, 99:0.17, T9o:0.072, J9o:0.0006, Q9o:0.0002, K9o:0.0456, A9o:0.2064, T2s:0.0521, T3s:0.2153, T4s:0.802, T5s:0.3596, T6s:0.1629, T7s:0.2119, T8s:0.508, TT:0.3918, JTo:0.0054, KTo:0.1739, ATo:0.1845, J2s:0.0014, J3s:0.0568, J4s:0.9204, J5s:0.1037, J6s:0.0071, J7s:0.7427, J8s:0.6624, J9s:0.1137, JTs:0.0045, JJ:0.3769, QJo:0.0002, KJo:0.0014, AJo:0.1253, Q2s:0.922, Q3s:0.0797, Q4s:0.4396, Q5s:0.0272, Q6s:0.129, Q7s:0.1906, Q8s:0.424, Q9s:0.2506, QTs:0.8428, QJs:0.875, QQ:0.3266, KQo:0.2055, AQo:0.0836, K2s:0.0138, K3s:0.178, K4s:0.2331, K5s:0.2698, K6s:0.3424, K7s:0.5866, K8s:0.013, K9s:0.5864, KTs:0.025, KJs:0.1896, KQs:0.1632, KK:0.5801, AKo:0.9797, A2s:0.096, A3s:0.782, A4s:0.4949, A5s:0.3122, A6s:0.0294, A7s:0.2954, A8s:0.0796, A9s:0.3584, ATs:0.6846, AJs:0.4242, AQs:0.2378, AKs:0.989, AA:0.8353"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.0144, 77:0.0416, 88:0.0086, 99:0.3888, T9s:0.0193, TT:0.0001, QTo:0.0104, KTo:0.0319, ATo:0.0794, J9s:0.0116, JTs:0.0905, QJo:0.0494, KJo:0.0514, AJo:0.5134, Q8s:0.0109, Q9s:0.0771, QTs:0.1283, QJs:0.152, KQo:0.1222, AQo:0.118, K9s:0.0504, KTs:0.0877, KJs:0.148, KQs:0.1292, KK:0.0008, A7s:0.0457, A8s:0.0968, A9s:0.1037, ATs:0.6521, AJs:0.5467, AQs:0.0966, AA:0.5949"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.459, 33:0.5267, 44:0.4705, 53s:0.0002, 54s:0.0006, 55:0.5237, 64s:0.0004, 65s:0.0004, 66:0.5131, 76s:0.0074, 77:0.5757, 85s:0.0001, 86s:0.0042, 87s:0.009, 88:0.8865, 98o:0.0001, T8o:0.0014, Q8o:0.0037, K8o:0.0043, A8o:0.0026, 96s:0.0003, 97s:0.0051, 98s:0.0175, 99:0.5335, T9o:0.0095, Q9o:0.0062, K9o:0.0079, A9o:0.0034, T6s:0.0011, T7s:0.0123, T8s:0.0393, T9s:0.034, TT:0.9766, JTo:0.0078, QTo:0.0186, KTo:0.0198, ATo:0.0223, J8s:0.0121, J9s:0.0187, JTs:0.2957, JJ, QJo:0.0136, KJo:0.0178, AJo:0.3939, Q2s:0.0051, Q3s:0.0071, Q4s:0.0078, Q5s:0.0055, Q6s:0.0077, Q7s:0.007, Q8s:0.101, Q9s:0.1205, QTs:0.5563, QJs:0.4041, QQ, KQo:0.367, AQo:0.848, K2s:0.0126, K3s:0.0117, K4s:0.0744, K5s:0.0428, K6s:0.045, K7s:0.1036, K8s:0.0224, K9s:0.0288, KTs:0.6224, KJs:0.4124, KQs:0.7978, KK:0.9992, AKo, A2s:0.1209, A3s:0.151, A4s:0.0706, A5s:0.1793, A6s:0.0125, A7s:0.0815, A8s:0.0914, A9s:0.0227, ATs:0.2381, AJs:0.4085, AQs:0.9026, AKs, AA:0.4051"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.001, 32o:0.002, 42o:0.0001, 62o:0.0005, 82o:0.0001, 92o:0.0001, T2o:0.001, J2o:0.0001, Q2o:0.0005, A2o:0.0004, 32s:0.0003, 33:0.0132, 43o:0.0001, 63o:0.0002, 83o:0.0001, 93o:0.0001, T3o:0.0004, Q3o:0.0004, K3o:0.0011, A3o:0.0024, 42s:0.0061, 43s:0.1481, 44:0.0131, 54o:0.0001, 84o:0.0004, 94o:0.0005, T4o:0.0001, J4o:0.0018, K4o:0.0005, A4o:0.0009, 52s:0.0004, 53s:0.0015, 54s:0.0091, 55:0.4487, 75o:0.0001, 85o:0.0015, 95o:0.0001, T5o:0.0001, J5o:0.0005, Q5o:0.0002, K5o:0.0146, A5o:0.0034, 63s:0.0001, 64s:0.0177, 65s:0.0168, 66:0.9866, 86o:0.0002, 96o:0.0006, T6o:0.0009, J6o:0.0001, Q6o:0.0005, K6o:0.0002, A6o:0.0068, 72s:0.0001, 73s:0.0048, 74s:0.0378, 75s:0.0423, 76s:0.0467, 77:0.6336, 87o:0.0003, 97o:0.0003, T7o:0.001, J7o:0.0002, Q7o:0.0072, K7o:0.0002, A7o:0.0001, 82s:0.0012, 83s:0.0004, 84s:0.0116, 85s:0.0228, 86s:0.0028, 87s:0.105, 88:0.34, 98o:0.0001, T8o:0.0014, J8o:0.0004, K8o:0.0007, A8o:0.001, 92s:0.0001, 93s:0.0037, 94s:0.005, 95s:0.053, 96s:0.011, 97s:0.0049, 98s:0.1036, 99:0.9757, T9o:0.0019, J9o:0.0013, Q9o:0.0016, K9o:0.0004, A9o:0.0003, T2s:0.0004, T3s:0.0004, T4s:0.0008, T5s:0.0034, T6s:0.0158, T8s:0.0917, T9s:0.0024, TT:0.8728, JTo:0.0001, QTo:0.0338, KTo:0.0041, ATo:0.0088, J2s:0.0011, J3s:0.0033, J4s:0.0066, J5s:0.0005, J6s:0.0008, J7s:0.0563, J8s:0.0007, J9s:0.0478, JTs:0.0169, JJ:0.9977, QJo:0.0004, KJo:0.0067, AJo:0.0457, Q2s:0.0006, Q3s:0.0027, Q4s:0.0188, Q5s:0.0083, Q6s:0.0379, Q7s:0.0029, Q8s:0.175, Q9s:0.0335, QTs:0.273, QJs:0.0441, QQ:0.6649, KQo:0.0007, AQo:0.3943, K2s:0.0177, K3s:0.0466, K4s:0.026, K5s:0.0004, K6s:0.1225, K7s:0.0143, K8s:0.019, K9s:0.0112, KTs:0.0028, KQs:0.0172, KK:0.9999, AKo:0.9999, A2s:0.0675, A3s:0.0484, A4s:0.1423, A5s:0.0051, A6s:0.1007, A7s:0.0147, A8s:0.0234, A9s:0.064, ATs:0.0093, AJs:0.2252, AQs:0.8651, AKs:0.9852, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.1507, 66:0.2054, 77:0.6936, 88:0.871, 99:0.9252, TT, JJ, AJo:0.3232, QQ, AQo:0.9095, KK, AKo, AJs:0.7313, AQs:0.971, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0001, 42o:0.0002, 62o:0.0005, 72o:0.0021, 82o:0.0001, T2o:0.0001, J2o:0.0024, A2o:0.0006, 32s:0.0221, 33:0.0006, 43o:0.0002, 63o:0.0013, 73o:0.0001, 83o:0.0031, T3o:0.0007, J3o:0.0001, Q3o:0.0003, K3o:0.0013, A3o:0.0001, 43s:0.0011, 44:0.0002, 54o:0.0001, 64o:0.0005, 74o:0.0046, 84o:0.0001, 94o:0.0004, T4o:0.0001, J4o:0.0006, K4o:0.0019, A4o:0.0012, 52s:0.0891, 53s:0.0036, 54s:0.0012, 55:0.0282, 65o:0.0244, 75o:0.0003, 85o:0.0015, 95o:0.0001, T5o:0.0004, J5o:0.0005, Q5o:0.0035, K5o:0.0012, 62s:0.0225, 63s:0.0767, 64s:0.0006, 66:0.0213, 76o:0.0001, 86o:0.001, 96o:0.0001, J6o:0.0004, K6o:0.0002, A6o:0.0002, 72s:0.0001, 73s:0.0123, 74s:0.0044, 75s:0.0086, 76s:0.0001, 77:0.0577, 87o:0.0008, 97o:0.0172, T7o:0.0002, J7o:0.0041, Q7o:0.0019, K7o:0.0002, A7o:0.0126, 82s:0.0005, 83s:0.0059, 84s:0.007, 85s:0.0094, 86s:0.0017, 87s:0.0028, 88:0.0328, T8o:0.0026, J8o:0.0063, Q8o:0.0007, A8o:0.0002, 92s:0.0023, 93s:0.5192, 94s:0.0021, 95s:0.0163, 96s:0.0127, 97s:0.0013, 98s:0.0096, 99:0.0119, T9o:0.0012, J9o:0.0002, Q9o:0.0006, K9o:0.0006, A9o:0.0166, T2s:0.0031, T3s:0.0671, T4s:0.0066, T5s:0.0049, T7s:0.0266, T8s:0.151, T9s:0.0032, TT:0.4262, JTo:0.0002, QTo:0.0022, KTo:0.0013, ATo:0.0008, J2s:0.0002, J3s:0.0004, J4s:0.105, J6s:0.0043, J7s:0.0004, J8s:0.0313, J9s:0.0002, JTs:0.0009, JJ:0.3183, KJo:0.027, AJo:0.0001, Q2s:0.0067, Q3s:0.0079, Q4s:0.0011, Q5s:0.0001, Q6s:0.0047, Q7s:0.0368, Q8s:0.0008, Q9s:0.1113, QTs:0.0002, QJs:0.2169, QQ:0.8152, KQo:0.0054, AQo:0.0041, K2s:0.0004, K3s:0.0013, K4s:0.0027, K5s:0.0001, K6s:0.0003, K7s:0.0028, K8s:0.0361, K9s:0.0008, KTs:0.0081, KJs:0.1007, KQs:0.0701, KK:0.9851, AKo:0.2093, A2s:0.0002, A3s:0.0101, A4s:0.2223, A6s:0.1405, A7s:0.0162, A8s:0.0765, A9s:0.1194, ATs:0.0091, AJs:0.0593, AQs:0.3467, AKs:0.7976, AA:0.9938"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0164, 32o:0.0015, 42o:0.0006, 52o:0.0008, 62o:0.001, 72o:0.0003, 82o:0.0001, 92o:0.0097, T2o:0.0004, J2o:0.0007, Q2o:0.0001, A2o:0.0009, 32s:0.0002, 33:0.0043, 63o:0.0005, 83o:0.0001, 93o:0.001, J3o:0.0001, Q3o:0.0038, K3o:0.0001, A3o:0.0048, 42s:0.0357, 43s:0.0139, 44:0.016, 54o:0.0001, 64o:0.0022, 84o:0.0001, 94o:0.0011, T4o:0.0001, J4o:0.0006, Q4o:0.0032, K4o:0.0001, A4o:0.0002, 52s:0.0422, 53s:0.2342, 54s:0.0026, 55:0.0043, 75o:0.0026, 85o:0.0025, 95o:0.0001, T5o:0.0015, J5o:0.0005, Q5o:0.0026, K5o:0.0001, A5o:0.0008, 62s:0.002, 63s:0.0126, 64s:0.0004, 65s:0.0035, 66:0.0003, 76o:0.0065, 86o:0.0001, T6o:0.0002, J6o:0.0009, Q6o:0.0058, K6o:0.0725, 72s:0.0001, 73s:0.0046, 74s:0.0003, 75s:0.0009, 76s:0.0133, 77:0.0333, 87o:0.0273, 97o:0.0007, T7o:0.0002, J7o:0.0005, K7o:0.0032, A7o:0.0296, 82s:0.0024, 83s:0.0774, 84s:0.0162, 85s:0.0001, 86s:0.0003, 87s:0.153, 88:0.2068, 98o:0.0001, T8o:0.0009, J8o:0.0074, K8o:0.0005, A8o:0.0008, 92s:0.0152, 93s:0.0002, 94s:0.0002, 95s:0.1335, 96s:0.0993, 97s:0.0027, 98s:0.0024, 99:0.4029, T9o:0.0339, J9o:0.0106, Q9o:0.0009, K9o:0.0001, A9o:0.0044, T2s:0.0023, T3s:0.003, T4s:0.0028, T5s:0.0122, T6s:0.1499, T7s:0.0017, T8s:0.0021, T9s:0.1047, TT:0.6879, JTo:0.0009, QTo:0.0001, KTo:0.0154, ATo:0.001, J2s:0.0006, J3s:0.0004, J4s:0.0035, J5s:0.0003, J6s:0.0007, J7s:0.0039, J8s:0.1696, J9s:0.0001, JTs:0.1111, JJ:0.4612, QJo:0.0042, KJo:0.0031, AJo:0.0229, Q2s:0.0279, Q3s:0.1539, Q4s:0.0048, Q5s:0.132, Q6s:0.0503, Q7s:0.0033, Q8s:0.4481, Q9s:0.0005, QTs:0.0474, QJs:0.0089, QQ:0.891, KQo:0.0084, AQo:0.0243, K2s:0.028, K3s:0.0195, K4s:0.0371, K5s:0.0008, K6s:0.0115, K7s:0.0097, K8s:0.0853, K9s:0.0112, KTs:0.1127, KJs:0.0335, KQs:0.179, KK:0.9901, AKo:0.5394, A2s:0.0318, A3s:0.4201, A4s:0.1167, A5s:0.0929, A6s:0.0242, A7s:0.0016, A8s:0.3459, A9s:0.0099, ATs:0.0684, AJs:0.0143, AQs:0.2852, AKs:0.5554, AA:0.9977"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3008, 32o:0.005, 52o:0.0006, 62o:0.0029, 72o:0.0009, 82o:0.0005, 92o:0.0006, T2o:0.0005, Q2o:0.0008, K2o:0.0023, A2o:0.0205, 32s:0.0001, 33:0.0094, 43o:0.0434, 53o:0.0016, 63o:0.0229, 73o:0.0021, 93o:0.0001, T3o:0.0019, Q3o:0.0192, K3o:0.0168, A3o:0.117, 42s:0.3765, 43s:0.0104, 44:0.0051, 54o:0.002, 64o:0.0002, 74o:0.1051, 84o:0.0016, 94o:0.0004, T4o:0.0197, J4o:0.0014, Q4o:0.0001, K4o:0.0009, A4o:0.0011, 52s:0.0043, 53s:0.2344, 54s:0.2101, 55:0.3059, 75o:0.0001, 85o:0.0005, 95o:0.0048, T5o:0.0005, Q5o:0.0931, K5o:0.0004, A5o:0.093, 62s:0.0486, 63s:0.0056, 64s:0.1276, 65s:0.4904, 66:0.0323, 76o:0.0001, 96o:0.001, T6o:0.0051, Q6o:0.002, K6o:0.0035, A6o:0.0321, 72s:0.0973, 73s:0.1063, 74s:0.0428, 75s:0.438, 76s:0.0018, 77:0.0269, 87o:0.0087, 97o:0.0006, T7o:0.0214, J7o:0.0016, Q7o:0.0087, K7o:0.0001, A7o:0.0078, 82s:0.0306, 83s:0.13, 84s:0.0012, 85s:0.021, 86s:0.1366, 87s:0.1583, 88:0.1527, 98o:0.0102, T8o:0.0012, J8o:0.0004, Q8o:0.001, K8o:0.0311, A8o:0.0068, 92s:0.0001, 93s:0.0505, 94s:0.0021, 95s:0.0132, 96s:0.3476, 97s:0.0227, 98s:0.0832, 99:0.0841, T9o:0.0022, J9o:0.0004, Q9o:0.0014, K9o:0.0797, A9o:0.0001, T2s:0.0595, T3s:0.0243, T4s:0.0479, T5s:0.2441, T6s:0.0001, T7s:0.1591, T8s:0.0054, T9s:0.4298, TT:0.2152, JTo:0.0291, QTo:0.0079, KTo:0.0001, ATo:0.8005, J2s:0.0014, J3s:0.0287, J4s:0.0257, J5s:0.0322, J6s:0.0109, J7s:0.0257, J8s:0.0056, J9s:0.0759, JTs:0.0059, JJ:0.3093, QJo:0.0014, KJo:0.0132, AJo:0.0369, Q2s:0.0297, Q3s:0.2098, Q4s:0.0176, Q5s:0.0128, Q6s:0.0541, Q7s:0.1956, Q8s:0.0147, Q9s:0.0001, QTs:0.2449, QJs:0.1624, QQ:0.4004, KQo:0.0101, AQo:0.854, K2s:0.0067, K3s:0.4069, K4s:0.1744, K5s:0.0854, K6s:0.1187, K7s:0.2532, K8s:0.2607, K9s:0.1613, KTs:0.1674, KJs:0.1451, KQs:0.0106, KK:0.0509, AKo:0.0013, A2s:0.3362, A3s:0.048, A4s:0.2685, A5s:0.2461, A6s:0.2311, A7s:0.1996, A8s:0.034, A9s:0.525, ATs:0.2161, AJs:0.0027, AQs:0.5113, AKs:0.0707, AA:0.0725"
      },
      {
        "action": "4bet 21bb",
        "min": 0.0001,
        "range": "22:0.0685, 52o:0.0002, 62o:0.0006, 72o:0.0624, 82o:0.0003, 92o:0.0004, T2o:0.0006, J2o:0.0024, Q2o:0.0003, K2o:0.0004, A2o:0.0319, 32s:0.2314, 33:0.6861, 43o:0.0001, 53o:0.0057, 63o:0.0013, 73o:0.0015, 83o:0.002, 93o:0.0003, Q3o:0.0003, K3o:0.0014, A3o:0.0024, 42s:0.0093, 43s:0.0023, 44:0.0016, 54o:0.0009, 64o:0.0002, 74o:0.0006, 84o:0.0003, 94o:0.0002, T4o:0.0002, J4o:0.0008, Q4o:0.0001, A4o:0.0007, 52s:0.0302, 53s:0.5919, 54s:0.578, 55:0.0601, 65o:0.3344, 75o:0.0009, 85o:0.0011, 95o:0.0005, T5o:0.0019, J5o:0.0003, Q5o:0.4831, K5o:0.0002, A5o:0.3727, 62s:0.2762, 63s:0.0001, 64s:0.0052, 65s:0.1527, 66:0.2225, 76o:0.0028, 86o:0.0639, 96o:0.0567, T6o:0.0011, J6o:0.0001, Q6o:0.0014, K6o:0.0006, A6o:0.001, 72s:0.0001, 73s:0.1466, 74s:0.2517, 75s:0.0027, 76s:0.004, 77:0.0239, 87o:0.0002, 97o:0.0005, T7o:0.1209, J7o:0.001, Q7o:0.0015, K7o:0.0009, A7o:0.0001, 82s:0.0037, 83s:0.0061, 84s:0.4103, 85s:0.0031, 86s:0.0834, 87s:0.0031, 88:0.1184, 98o:0.0018, T8o:0.0001, J8o:0.0001, Q8o:0.1953, K8o:0.0005, A8o:0.1883, 92s:0.0001, 93s:0.0152, 94s:0.092, 95s:0.0424, 96s:0.0675, 97s:0.0004, 98s:0.454, 99:0.123, T9o:0.0004, J9o:0.0003, Q9o:0.0008, K9o:0.0006, A9o:0.001, T2s:0.0756, T3s:0.3231, T4s:0.317, T5s:0.1693, T6s:0.0067, T7s:0.0004, T8s:0.1554, T9s:0.2947, TT:0.2224, JTo:0.0151, QTo:0.0002, ATo:0.0347, J2s:0.0071, J3s:0.4708, J4s:0.001, J5s:0.0018, J6s:0.0008, J7s:0.0109, J8s:0.0011, J9s:0.0076, JTs:0.5588, JJ:0.1426, QJo:0.001, KJo:0.0016, AJo:0.0028, Q2s:0.0014, Q3s:0.1006, Q4s:0.057, Q5s:0.0732, Q6s:0.0023, Q7s:0.1455, Q8s:0.1134, Q9s:0.0122, QTs:0.5925, QJs:0.4593, QQ:0.5957, KQo:0.626, AQo:0.0011, K2s:0.4745, K3s:0.0011, K4s:0.3229, K5s:0.7236, K6s:0.4493, K7s:0.2765, K8s:0.2928, K9s:0.0047, KTs:0.596, KJs:0.4141, KQs:0.4162, KK:0.9417, AKo:0.9756, A2s:0.1524, A3s:0.0011, A4s:0.114, A5s:0.3565, A6s:0.008, A7s:0.2507, A8s:0.362, A9s:0.1922, ATs:0.1552, AJs:0.3179, AQs:0.2354, AKs:0.8557, AA:0.9275"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0424, 77:0.0004, 88:0.0002, 99:0.179, TT:0.1049, JJ:0.1282, QJs:0.0284, K4s:0.0001, KTs:0.0036, KJs:0.1517, KQs:0.0107, A9s:0.043, ATs:0.1328, AJs:0.2092, AQs:0.3411, AA:0.053"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.1611, 33:0.1301, 44:0.1518, 55:0.1821, 66:0.348, 77:0.2636, 88:0.1525, 99:0.1593, TT:0.8654, KTo:0.0025, JJ:0.8521, QTs:0.0185, QJs:0.0302, QQ, KQo:0.0357, AQo:0.5164, K2s:0.0108, K3s:0.0076, K4s:0.0193, K5s:0.0198, K6s:0.0251, K7s:0.0244, K9s:0.0114, KTs:0.2022, KJs:0.0443, KQs:0.27, KK, AKo, A2s:0.0002, A3s:0.0003, A4s:0.0106, A5s:0.011, A6s:0.0009, A9s:0.0003, ATs:0.0152, AJs:0.007, AQs:0.6589, AKs, AA:0.947"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0305, 32o:0.0001, 52o:0.0001, 62o:0.0001, 72o:0.0007, 82o:0.0006, 92o:0.0001, T2o:0.0002, J2o:0.0002, Q2o:0.0001, K2o:0.0099, 32s:0.0027, 33:0.001, 43o:0.0001, 53o:0.001, 63o:0.002, 73o:0.0006, 83o:0.001, 93o:0.0021, T3o:0.0001, J3o:0.0005, K3o:0.0006, A3o:0.0001, 42s:0.0004, 43s:0.0008, 44:0.0019, 54o:0.0002, 64o:0.0065, 74o:0.0004, 84o:0.0014, 94o:0.0006, T4o:0.0035, J4o:0.0013, Q4o:0.0001, K4o:0.0094, A4o:0.0276, 52s:0.0011, 53s:0.001, 54s:0.0163, 55:0.0516, 65o:0.0018, 75o:0.0001, 85o:0.0002, 95o:0.0001, T5o:0.0001, J5o:0.0035, Q5o:0.0002, A5o:0.0478, 62s:0.0496, 63s:0.0012, 64s:0.0006, 65s:0.0467, 66:0.0029, 76o:0.0005, 86o:0.0015, 96o:0.0003, T6o:0.0027, J6o:0.0001, Q6o:0.0011, K6o:0.0017, 72s:0.0003, 73s:0.0414, 75s:0.0046, 76s:0.0013, 77:0.0034, 87o:0.0024, 97o:0.0001, T7o:0.0019, J7o:0.0075, Q7o:0.0002, K7o:0.0067, A7o:0.0043, 82s:0.0012, 83s:0.0208, 84s:0.2881, 85s:0.0006, 86s:0.0049, 87s:0.0206, 88:0.0364, 98o:0.0019, T8o:0.0001, J8o:0.0003, Q8o:0.0017, K8o:0.0039, A8o:0.0036, 92s:0.013, 93s:0.0067, 94s:0.0482, 95s:0.081, 96s:0.0029, 97s:0.0006, 98s:0.0557, 99:0.21, J9o:0.0004, Q9o:0.0031, K9o:0.0004, A9o:0.0037, T2s:0.0094, T3s:0.002, T4s:0.0008, T5s:0.005, T6s:0.0896, T7s:0.165, T8s:0.0611, T9s:0.002, TT:0.0199, JTo:0.0001, QTo:0.0001, KTo:0.0002, ATo:0.0461, J2s:0.006, J3s:0.0007, J4s:0.0031, J5s:0.0625, J6s:0.0091, J7s:0.0117, J8s:0.0085, J9s:0.0569, JTs:0.0197, JJ:0.4879, QJo:0.0099, KJo:0.0002, AJo:0.0102, Q2s:0.0014, Q3s:0.0049, Q4s:0.0119, Q5s:0.0517, Q6s:0.2683, Q7s:0.0042, Q8s:0.0005, Q9s:0.0273, QTs:0.0233, QJs:0.1627, QQ:0.1857, KQo:0.0029, AQo:0.0023, K2s:0.0039, K3s:0.0761, K4s:0.0542, K5s:0.0064, K6s:0.0059, K7s:0.003, K8s:0.0003, K9s:0.0271, KTs:0.1047, KJs:0.4783, KQs:0.0121, KK:0.646, AKo:0.065, A2s:0.001, A3s:0.0006, A4s:0.0023, A5s:0.0238, A6s:0.0022, A7s:0.0231, A8s:0.0399, A9s:0.5088, ATs:0.2271, AJs:0.0044, AQs:0.0806, AKs:0.2465, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "22:0.0027, 32o:0.0003, 52o:0.0001, 62o:0.0009, 72o:0.0013, 82o:0.0002, 92o:0.0005, T2o:0.0014, J2o:0.0004, Q2o:0.0029, K2o:0.0019, A2o:0.0002, 32s:0.028, 33:0.0009, 43o:0.0001, 53o:0.0009, 73o:0.0008, 83o:0.0001, 93o:0.0001, T3o:0.0009, J3o:0.0001, Q3o:0.0002, K3o:0.0001, A3o:0.007, 42s:0.0009, 43s:0.0093, 44:0.0439, 64o:0.0006, 74o:0.0004, 84o:0.0004, 94o:0.0005, T4o:0.0001, Q4o:0.0033, K4o:0.0062, A4o:0.0001, 52s:0.0056, 53s:0.0795, 54s:0.0007, 55:0.0001, 65o:0.0025, 75o:0.0004, 85o:0.0005, 95o:0.0004, Q5o:0.0004, K5o:0.0009, A5o:0.0001, 62s:0.0058, 63s:0.0044, 64s:0.0021, 65s:0.003, 66:0.0585, 76o:0.0034, 86o:0.0018, 96o:0.0001, T6o:0.0012, J6o:0.0001, Q6o:0.0008, K6o:0.0133, A6o:0.0027, 72s:0.0358, 73s:0.0012, 74s:0.0102, 75s:0.0577, 76s:0.0007, 77:0.2306, 87o:0.0038, 97o:0.0001, T7o:0.0005, J7o:0.0001, Q7o:0.0016, K7o:0.0008, A7o:0.0016, 82s:0.0106, 83s:0.0019, 84s:0.003, 85s:0.1045, 86s:0.0001, 87s:0.0008, 88:0.0003, 98o:0.0002, T8o:0.0001, Q8o:0.0042, K8o:0.0019, A8o:0.0018, 92s:0.0003, 93s:0.2161, 94s:0.0159, 95s:0.0492, 96s:0.0001, 97s:0.0005, 98s:0.0006, 99:0.0021, T9o:0.0001, J9o:0.0074, Q9o:0.001, K9o:0.0039, T2s:0.4012, T3s:0.0086, T4s:0.0088, T5s:0.0205, T6s:0.0297, T7s:0.0247, T8s:0.0086, T9s:0.004, TT:0.1574, JTo:0.005, QTo:0.0002, ATo:0.0015, J2s:0.0144, J3s:0.0006, J4s:0.0017, J5s:0.0007, J6s:0.0021, J7s:0.2564, J8s:0.0005, J9s:0.0418, JTs:0.0089, JJ:0.8565, QJo:0.0017, KJo:0.0004, AJo:0.0001, Q2s:0.0007, Q3s:0.0124, Q4s:0.0205, Q5s:0.0074, Q6s:0.0419, Q7s:0.0121, Q8s:0.0024, Q9s:0.0033, QTs:0.0075, QJs:0.0708, QQ:0.2019, KQo:0.0075, AQo:0.1329, K2s:0.0099, K3s:0.0179, K4s:0.0306, K5s:0.0035, K6s:0.0748, K7s:0.0004, K8s:0.0236, K9s:0.0012, KTs:0.0082, KJs:0.051, KQs:0.2834, KK:0.3234, AKo:0.0544, A2s:0.0015, A3s:0.0025, A4s:0.0012, A5s:0.0027, A6s:0.0086, A7s:0.3319, A8s:0.0225, A9s:0.2206, ATs:0.203, AJs:0.1959, AQs:0.0108, AKs:0.2553, AA:0.0076"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0014, 32o:0.0001, 52o:0.0001, 72o:0.0011, 82o:0.0007, 92o:0.0012, T2o:0.0249, J2o:0.0003, Q2o:0.0022, A2o:0.0002, 32s:0.0101, 33:0.0111, 43o:0.0001, 53o:0.0006, 63o:0.0018, 73o:0.001, 93o:0.001, T3o:0.0001, J3o:0.0008, Q3o:0.0002, K3o:0.0001, A3o:0.0107, 42s:0.0009, 43s:0.0323, 44:0.0883, 64o:0.0004, 74o:0.0004, 84o:0.0058, T4o:0.0002, J4o:0.0007, Q4o:0.001, K4o:0.0003, A4o:0.0026, 52s:0.0047, 53s:0.0162, 54s:0.0064, 55:0.0001, 65o:0.0014, 75o:0.0001, 85o:0.0005, 95o:0.0003, T5o:0.0014, J5o:0.0038, Q5o:0.0002, K5o:0.0008, A5o:0.0041, 62s:0.0731, 63s:0.1551, 64s:0.0044, 65s:0.002, 66:0.3172, 76o:0.0042, 86o:0.0002, 96o:0.0001, J6o:0.0006, Q6o:0.0006, K6o:0.0003, A6o:0.0001, 72s:0.0079, 74s:0.0863, 75s:0.1927, 76s:0.0023, 77:0.053, 87o:0.0199, 97o:0.0001, T7o:0.0007, J7o:0.0016, Q7o:0.003, K7o:0.0006, A7o:0.0017, 82s:0.0034, 83s:0.0056, 84s:0.0402, 85s:0.0024, 86s:0.0411, 87s:0.0033, 88:0.0003, 98o:0.0027, T8o:0.0011, J8o:0.0002, Q8o:0.0001, K8o:0.0111, 92s:0.0022, 93s:0.0359, 94s:0.019, 95s:0.0056, 96s:0.0001, 97s:0.0173, 98s:0.0143, 99:0.0004, T9o:0.0001, J9o:0.0018, Q9o:0.0424, K9o:0.0023, A9o:0.0349, T2s:0.1073, T3s:0.0036, T4s:0.0167, T5s:0.0216, T6s:0.1492, T7s:0.0435, T8s:0.2779, T9s:0.0004, TT:0.2123, JTo:0.0009, QTo:0.0002, KTo:0.0007, ATo:0.053, J2s:0.0025, J3s:0.0006, J4s:0.0071, J5s:0.0012, J6s:0.0352, J7s:0.0229, J8s:0.003, J9s:0.0125, JTs:0.0018, JJ:0.1295, QJo:0.0005, KJo:0.0011, AJo:0.0009, Q2s:0.0004, Q3s:0.0023, Q4s:0.0058, Q5s:0.0033, Q6s:0.0332, Q7s:0.0063, Q8s:0.053, Q9s:0.0225, QTs:0.0097, QJs:0.0343, QQ:0.7076, KQo:0.0109, AQo:0.6453, K2s:0.3637, K3s:0.0028, K4s:0.0001, K5s:0.0429, K6s:0.0053, K7s:0.0001, K8s:0.0284, K9s:0.0136, KTs:0.0011, KJs:0.4199, KQs:0.1425, KK:0.6766, AKo:0.2473, A2s:0.0007, A3s:0.0001, A4s:0.4032, A5s:0.0049, A6s:0.0352, A7s:0.1205, A8s:0.0135, A9s:0.1812, ATs:0.6086, AJs:0.2014, AQs:0.0133, AKs:0.0012, AA:0.9913"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "42o:0.0001, 52o:0.0001, 92o:0.0003, T2o:0.0003, J2o:0.0001, K2o:0.0001, A2o:0.0042, 32s:0.0001, 33:0.0325, 43o:0.0001, 63o:0.0001, 73o:0.0001, 93o:0.0002, T3o:0.0002, J3o:0.0001, Q3o:0.0004, K3o:0.0002, A3o:0.0007, 42s:0.0001, 43s:0.0072, 44:0.016, 54o:0.0003, 64o:0.0001, 74o:0.0003, 84o:0.0002, Q4o:0.0001, K4o:0.0003, A4o:0.0016, 52s:0.0004, 53s:0.0009, 54s:0.0098, 55:0.0031, 65o:0.0006, 75o:0.0039, 95o:0.0001, K5o:0.0008, A5o:0.0005, 62s:0.0005, 63s:0.0003, 64s:0.0012, 65s:0.0156, 66:0.366, 76o:0.0039, 86o:0.0003, 96o:0.0001, J6o:0.0004, Q6o:0.0001, K6o:0.0001, A6o:0.0024, 72s:0.0074, 73s:0.0005, 74s:0.0018, 75s:0.0875, 76s:0.0009, 77:0.1646, 87o:0.0011, 97o:0.0001, T7o:0.0001, K7o:0.0028, A7o:0.0051, 82s:0.0001, 83s:0.0047, 84s:0.001, 85s:0.0008, 86s:0.0002, 87s:0.0026, 88:0.8055, 98o:0.0023, T8o:0.0013, J8o:0.0011, K8o:0.0003, A8o:0.0015, 92s:0.0003, 93s:0.0084, 94s:0.0006, 95s:0.0008, 97s:0.0019, 98s:0.0032, 99:0.833, T9o:0.0011, Q9o:0.0004, K9o:0.0002, A9o:0.0001, T2s:0.0026, T4s:0.0026, T5s:0.001, T6s:0.0004, T7s:0.0068, T8s:0.0024, T9s:0.0014, TT:0.8406, JTo:0.0001, QTo:0.0002, KTo:0.0011, ATo:0.0007, J2s:0.0008, J3s:0.0002, J4s:0.0083, J5s:0.0001, J6s:0.0002, J7s:0.0011, J8s:0.023, J9s:0.0387, JTs:0.0008, JJ:0.9988, QJo:0.0002, KJo:0.0014, AJo:0.3604, Q2s:0.0005, Q3s:0.0005, Q4s:0.0005, Q5s:0.0001, Q6s:0.0556, Q7s:0.0001, Q8s:0.0005, Q9s:0.002, QTs:0.0011, QJs:0.0034, QQ:0.9963, KQo:0.0014, AQo:0.2972, K2s:0.0001, K3s:0.0425, K4s:0.0029, K6s:0.0099, K7s:0.0205, K8s:0.0008, K9s:0.0008, KTs:0.0132, KJs:0.0286, KQs:0.0318, KK, AKo:0.994, A2s:0.0003, A3s:0.0025, A4s:0.0154, A5s:0.0033, A6s:0.0025, A7s:0.0009, A8s:0.0923, A9s:0.0069, ATs:0.8377, AJs:0.242, AQs:0.8003, AKs:0.99, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.9913, 99:0.9995, TT, JJ, QQ, AQo:0.9997, KK, AKo, AJs:0.2316, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0015, 32o:0.0001, 42o:0.0003, 92o:0.0003, T2o:0.0001, J2o:0.0001, Q2o:0.0011, K2o:0.0002, A2o:0.0021, 32s:0.0022, 33:0.007, 63o:0.0001, 73o:0.0002, 83o:0.0001, J3o:0.001, Q3o:0.0004, K3o:0.0002, A3o:0.0013, 42s:0.0002, 43s:0.0011, 44:0.0033, 54o:0.0001, 64o:0.0001, 94o:0.0018, T4o:0.0013, J4o:0.0024, A4o:0.0001, 53s:0.001, 54s:0.0078, 55:0.0812, 65o:0.0049, 75o:0.0002, 85o:0.0004, 95o:0.0018, T5o:0.0002, J5o:0.0001, K5o:0.0006, A5o:0.0001, 62s:0.0317, 63s:0.0008, 64s:0.0154, 65s:0.0109, 66:0.0538, 76o:0.0002, 86o:0.0002, T6o:0.0002, J6o:0.0001, Q6o:0.003, A6o:0.0037, 72s:0.0002, 73s:0.0001, 74s:0.0026, 75s:0.0016, 76s:0.0001, 77:0.0098, 87o:0.0001, 97o:0.0011, T7o:0.0003, J7o:0.0036, Q7o:0.0003, K7o:0.0007, A7o:0.0003, 82s:0.0008, 83s:0.0003, 84s:0.0001, 85s:0.0026, 86s:0.0043, 87s:0.0012, 88:0.0111, 98o:0.0002, J8o:0.0002, Q8o:0.0002, K8o:0.0001, A8o:0.0004, 92s:0.0018, 93s:0.0001, 94s:0.0056, 95s:0.006, 96s:0.0009, 97s:0.0367, 98s:0.0073, 99:0.1195, J9o:0.0001, Q9o:0.0004, K9o:0.002, A9o:0.0014, T2s:0.0073, T3s:0.0038, T4s:0.0126, T5s:0.0003, T6s:0.0158, T7s:0.0001, T8s:0.0003, T9s:0.0001, TT:0.3695, JTo:0.0011, QTo:0.0001, KTo:0.0034, ATo:0.0003, J2s:0.004, J3s:0.0001, J5s:0.0001, J6s:0.0083, J7s:0.0001, J8s:0.0026, J9s:0.0005, JTs:0.0161, JJ:0.4253, QJo:0.0001, KJo:0.0007, AJo:0.0016, Q3s:0.0013, Q4s:0.0001, Q5s:0.0024, Q6s:0.002, Q7s:0.0044, Q8s:0.1922, Q9s:0.0045, QTs:0.004, QJs:0.0025, QQ:0.7263, AQo:0.0712, K2s:0.0052, K3s:0.001, K4s:0.0007, K5s:0.0056, K6s:0.0003, K7s:0.1454, K8s:0.0032, K9s:0.0004, KTs:0.0348, KJs:0.0042, KQs:0.0002, KK:0.9976, AKo:0.137, A2s:0.0015, A3s:0.0297, A4s:0.0237, A5s:0.2331, A6s:0.0087, A7s:0.0001, A8s:0.0002, A9s:0.0069, ATs:0.0004, AJs:0.1117, AQs:0.8436, AKs:0.3222, AA:0.997"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0189, 32o:0.0001, 42o:0.0001, 52o:0.0009, 82o:0.0004, 92o:0.0174, T2o:0.0168, J2o:0.0011, Q2o:0.0005, K2o:0.0002, A2o:0.0084, 32s:0.007, 43o:0.0004, 53o:0.0051, 63o:0.0003, 83o:0.0002, 93o:0.0001, T3o:0.0087, J3o:0.0005, Q3o:0.0013, A3o:0.005, 42s:0.0003, 43s:0.0079, 44:0.01, 54o:0.0165, 64o:0.0028, 74o:0.0003, 84o:0.0025, 94o:0.0005, T4o:0.0078, J4o:0.0003, K4o:0.0004, A4o:0.0229, 52s:0.0031, 53s:0.3237, 54s:0.0138, 55:0.0013, 65o:0.0017, 75o:0.0034, 85o:0.0033, T5o:0.0001, J5o:0.0001, Q5o:0.0004, K5o:0.0004, A5o:0.0008, 62s:0.0031, 63s:0.0464, 64s:0.0943, 65s:0.009, 66:0.0071, 76o:0.0001, 86o:0.0001, 96o:0.0007, T6o:0.0002, J6o:0.0013, Q6o:0.0034, K6o:0.0014, A6o:0.0003, 72s:0.0037, 73s:0.0597, 74s:0.0003, 75s:0.0013, 76s:0.005, 77:0.1253, 97o:0.0001, T7o:0.0035, J7o:0.0005, K7o:0.0008, A7o:0.0006, 82s:0.008, 83s:0.1072, 84s:0.0232, 85s:0.0005, 86s:0.0403, 87s:0.0017, 88:0.2049, T8o:0.0514, J8o:0.0108, Q8o:0.0303, K8o:0.0058, A8o:0.0026, 92s:0.1214, 93s:0.0018, 94s:0.0006, 95s:0.0215, 96s:0.0502, 98s:0.0135, 99:0.1233, T9o:0.0001, J9o:0.0015, Q9o:0.0006, K9o:0.0123, A9o:0.0021, T2s:0.0231, T3s:0.007, T4s:0.0136, T5s:0.0012, T6s:0.2452, T7s:0.0084, T8s:0.1467, T9s:0.0225, TT:0.0078, JTo:0.0055, QTo:0.0049, KTo:0.0011, J2s:0.0011, J3s:0.0222, J4s:0.0061, J5s:0.0583, J6s:0.0029, J7s:0.0043, J8s:0.0478, J9s:0.0015, JTs:0.021, JJ:0.0005, QJo:0.012, KJo:0.0055, AJo:0.0514, Q2s:0.032, Q3s:0.0049, Q4s:0.0306, Q5s:0.2665, Q6s:0.0514, Q7s:0.0317, Q8s:0.0414, Q9s:0.3159, QTs:0.0122, QJs:0.0038, QQ:0.4055, KQo:0.0008, AQo:0.1505, K2s:0.0028, K3s:0.0427, K4s:0.0103, K5s:0.0015, K6s:0.0153, K7s:0.0293, K8s:0.0726, K9s:0.1135, KTs:0.2448, KJs:0.1013, KQs:0.0181, KK:0.0367, AKo:0.08, A2s:0.6527, A3s:0.0003, A4s:0.004, A5s:0.2892, A6s:0.2851, A7s:0.0412, A8s:0.1012, A9s:0.0233, ATs:0.0622, AJs:0.0134, AQs:0.264, AKs:0.0188, AA:0.0013"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.2175, 32o:0.0002, 42o:0.0004, 52o:0.0001, 72o:0.0007, 82o:0.0027, 92o:0.0018, T2o:0.0015, J2o:0.0003, Q2o:0.0004, K2o:0.0014, A2o:0.0144, 32s:0.8335, 33:0.1276, 43o:0.0006, 53o:0.0003, 63o:0.0126, 73o:0.0013, 83o:0.0004, T3o:0.0005, J3o:0.0331, Q3o:0.0001, A3o:0.002, 42s:0.0001, 43s:0.0036, 44:0.1702, 54o:0.0119, 64o:0.0011, 74o:0.0002, 84o:0.0011, 94o:0.0004, T4o:0.0048, J4o:0.0004, Q4o:0.0003, K4o:0.5357, A4o:0.0322, 52s:0.0116, 53s:0.1225, 54s:0.6015, 55:0.6493, 65o:0.0043, 75o:0.0066, 85o:0.0017, 95o:0.1328, T5o:0.0002, J5o:0.0007, K5o:0.0029, A5o:0.0005, 62s:0.0006, 63s:0.1047, 64s:0.0046, 65s:0.0004, 66:0.3058, 76o:0.1974, 86o:0.0043, 96o:0.0003, T6o:0.0276, J6o:0.0002, Q6o:0.0005, K6o:0.001, A6o:0.0049, 72s:0.0005, 73s:0.0959, 74s:0.0126, 75s:0.0942, 76s:0.021, 77:0.727, 87o:0.1116, 97o:0.0012, T7o:0.002, J7o:0.0006, K7o:0.0003, A7o:0.04, 82s:0.0111, 83s:0.401, 84s:0.1896, 85s:0.0923, 86s:0.2877, 87s:0.3056, 88:0.5021, 98o:0.0002, T8o:0.005, J8o:0.0007, Q8o:0.0044, K8o:0.1434, A8o:0.0012, 92s:0.3248, 93s:0.523, 94s:0.002, 95s:0.4486, 96s:0.2391, 97s:0.0836, 98s:0.0167, 99:0.8565, T9o:0.1276, J9o:0.0017, Q9o:0.0004, K9o:0.0009, A9o:0.019, T2s:0.0137, T3s:0.0013, T4s:0.0426, T5s:0.4514, T6s:0.1533, T7s:0.8447, T8s:0.0373, T9s:0.8557, TT:0.6054, JTo:0.0014, QTo:0.0024, KTo:0.2046, ATo:0.3388, J2s:0.0011, J3s:0.0044, J4s:0.0052, J5s:0.194, J6s:0.0033, J7s:0.2764, J8s:0.0689, J9s:0.6994, JTs:0.0021, JJ:0.9995, QJo:0.0048, KJo:0.0937, AJo:0.0003, Q2s:0.0035, Q3s:0.2131, Q4s:0.316, Q5s:0.1632, Q6s:0.2749, Q7s:0.1004, Q8s:0.7792, Q9s:0.1593, QTs:0.1061, QJs:0.1761, QQ:0.4834, KQo:0.0036, AQo:0.384, K2s:0.292, K3s:0.0054, K4s:0.0249, K5s:0.0009, K6s:0.0819, K7s:0.8369, K8s:0.1658, K9s:0.5222, KTs:0.462, KJs:0.2298, KQs:0.1698, KK:0.9479, AKo:0.756, A2s:0.0063, A4s:0.9397, A5s:0.0525, A6s:0.5931, A7s:0.7761, A8s:0.1328, A9s:0.1235, ATs:0.426, AJs:0.8282, AQs:0.4123, AKs:0.924, AA:0.9974"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
    "heroPos": "CO",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "54s:0.0432, 55:0.0057, 66:0.0025, 77:0.051, 88:0.0071, 99:0.0017, T9s:0.0002, TT:0.0736, JJ:0.2597, AJo:0.0391, Q8s:0.0005, QQ:0.8874, AQo:0.0188, KTs:0.0002, KQs:0.0006, KK:0.0265, AKo:0.5674, A2s:0.0001, A8s:0.0001, ATs:0.0008, AJs:0.4019, AQs:0.7314, AKs:0.5672, AA:0.0039"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0022, 33:0.0056, 44:0.0067, 54s:0.0002, 55:0.0044, 66:0.0078, 77:0.0086, 88:0.0094, 99:0.011, T8s:0.0017, T9s:0.0036, TT:0.0349, ATo:0.001, JTs:0.0013, JJ:0.0139, AJo:0.0087, Q9s:0.0015, QTs:0.0042, QJs:0.0009, QQ:0.1126, KQo:0.0262, AQo:0.1463, K4s:0.0086, K5s:0.0235, K6s:0.0303, K7s:0.0252, K8s:0.0104, K9s:0.0219, KTs:0.0509, KJs:0.0507, KQs:0.1031, KK:0.9735, AKo:0.3465, A3s:0.0165, A4s:0.0368, A5s:0.0455, A6s:0.0058, A7s:0.0298, A8s:0.0025, A9s:0.003, ATs:0.0641, AJs:0.0202, AQs:0.1502, AKs:0.4328, AA:0.9961"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|CO:CALL@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0012, 32o:0.0008, 42o:0.0218, 52o:0.001, 72o:0.0009, 82o:0.0004, 92o:0.0035, J2o:0.0216, Q2o:0.0001, K2o:0.0052, A2o:0.0019, 32s:0.029, 33:0.0014, 43o:0.0439, 53o:0.0001, 63o:0.003, 73o:0.0001, 83o:0.0004, 93o:0.0008, T3o:0.0004, J3o:0.0002, Q3o:0.0002, K3o:0.0007, A3o:0.0107, 42s:0.0002, 43s:0.0002, 44:0.0137, 64o:0.0013, 74o:0.003, 84o:0.0016, 94o:0.0006, T4o:0.0001, J4o:0.0003, Q4o:0.0052, A4o:0.0001, 52s:0.0012, 53s:0.0021, 54s:0.0001, 55:0.0016, 65o:0.0011, 75o:0.0002, 85o:0.0006, 95o:0.0001, T5o:0.0002, Q5o:0.0012, K5o:0.0025, A5o:0.0004, 62s:0.0084, 63s:0.0396, 64s:0.0028, 65s:0.0217, 66:0.0946, 76o:0.0012, 86o:0.0001, T6o:0.0001, J6o:0.0003, Q6o:0.0042, K6o:0.0001, A6o:0.0047, 73s:0.0008, 74s:0.0023, 75s:0.0051, 76s:0.1148, 77:0.0146, 87o:0.0004, 97o:0.0002, T7o:0.0003, Q7o:0.0065, K7o:0.001, A7o:0.0039, 82s:0.0086, 83s:0.029, 84s:0.0003, 85s:0.007, 86s:0.01, 87s:0.0059, 88:0.0203, 98o:0.0023, T8o:0.0166, J8o:0.0013, Q8o:0.0002, K8o:0.0002, A8o:0.1511, 92s:0.0119, 93s:0.0001, 94s:0.0005, 95s:0.0009, 96s:0.0043, 97s:0.002, 98s:0.0057, 99:0.0321, T9o:0.0001, J9o:0.0029, Q9o:0.0009, K9o:0.0007, A9o:0.0001, T2s:0.0003, T3s:0.0148, T4s:0.0008, T5s:0.0127, T6s:0.0525, T7s:0.001, T8s:0.3721, T9s:0.0002, TT:0.0163, JTo:0.0005, QTo:0.0006, ATo:0.0003, J2s:0.0027, J3s:0.0147, J4s:0.0014, J5s:0.1386, J6s:0.0055, J7s:0.0013, J8s:0.2655, JTs:0.0161, JJ:0.097, QJo:0.0014, AJo:0.0045, Q2s:0.0003, Q3s:0.0037, Q4s:0.0002, Q5s:0.0106, Q6s:0.0146, Q7s:0.0019, Q8s:0.0636, Q9s:0.0009, QTs:0.0207, QJs:0.3591, QQ:0.0371, KQo:0.0047, AQo:0.0535, K2s:0.0005, K3s:0.0038, K4s:0.001, K5s:0.0035, K6s:0.0409, K7s:0.0003, K8s:0.0363, K9s:0.0007, KTs:0.2194, KJs:0.0007, KQs:0.4927, KK:0.195, AKo:0.0019, A2s:0.6196, A3s:0.0538, A4s:0.0058, A5s:0.0052, A6s:0.0122, A7s:0.0158, A8s:0.0056, A9s:0.0005, ATs:0.0115, AJs:0.1355, AQs:0.1668, AKs:0.2823, AA:0.7155"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.016, 32o:0.0005, 42o:0.0036, 52o:0.0161, 62o:0.0002, 72o:0.0077, 82o:0.004, 92o:0.0017, T2o:0.0002, J2o:0.0187, Q2o:0.0103, K2o:0.0008, A2o:0.0127, 32s:0.0968, 33:0.0793, 43o:0.0351, 53o:0.0002, 63o:0.0017, 73o:0.0027, 83o:0.0012, 93o:0.0005, T3o:0.0039, J3o:0.0009, Q3o:0.0002, K3o:0.0004, A3o:0.0097, 42s:0.0998, 43s:0.0002, 44:0.0093, 54o:0.0023, 64o:0.0001, 74o:0.0055, 84o:0.0011, 94o:0.0008, T4o:0.0006, J4o:0.0007, Q4o:0.0006, K4o:0.0003, A4o:0.0068, 52s:0.0452, 53s:0.0003, 54s:0.0001, 55:0.0032, 65o:0.0038, 75o:0.0035, 85o:0.0445, 95o:0.0038, T5o:0.0001, J5o:0.0003, Q5o:0.0001, K5o:0.0011, A5o:0.0009, 62s:0.0047, 63s:0.0151, 64s:0.0028, 65s:0.0047, 66:0.0023, 76o:0.0002, 86o:0.0019, 96o:0.0012, T6o:0.0016, J6o:0.0004, Q6o:0.0008, K6o:0.0336, A6o:0.0072, 72s:0.0236, 73s:0.0008, 74s:0.0187, 75s:0.0001, 76s:0.0303, 77:0.0015, 87o:0.0016, T7o:0.002, J7o:0.0035, Q7o:0.0038, K7o:0.0061, A7o:0.0074, 82s:0.0015, 83s:0.0349, 84s:0.4416, 85s:0.0084, 86s:0.0102, 87s:0.0038, 88:0.0175, 98o:0.0041, T8o:0.006, J8o:0.0215, Q8o:0.0001, A8o:0.0078, 92s:0.0001, 93s:0.0442, 94s:0.0429, 95s:0.0055, 96s:0.0287, 97s:0.0035, 98s:0.0003, 99:0.0105, T9o:0.0022, J9o:0.0069, Q9o:0.0027, K9o:0.0047, A9o:0.0237, T2s:0.0027, T3s:0.1618, T4s:0.0005, T5s:0.0629, T6s:0.0005, T7s:0.0046, T8s:0.1616, T9s:0.0572, TT:0.0932, JTo:0.0648, QTo:0.0002, KTo:0.0006, ATo:0.1166, J2s:0.0027, J3s:0.003, J4s:0.0387, J5s:0.0266, J6s:0.0357, J7s:0.0308, J8s:0.5236, J9s:0.035, JTs:0.0288, JJ:0.9009, QJo:0.0218, KJo:0.0133, AJo:0.0271, Q2s:0.0035, Q3s:0.0267, Q4s:0.1106, Q5s:0.0427, Q6s:0.1078, Q7s:0.0004, Q8s:0.0005, Q9s:0.0688, QTs:0.0516, QJs:0.4728, QQ:0.3804, KQo:0.008, AQo:0.0085, K2s:0.0004, K3s:0.0023, K4s:0.0132, K5s:0.0003, K6s:0.0075, K7s:0.0003, K8s:0.0042, K9s:0.0007, KTs:0.0843, KJs:0.0007, KQs:0.1073, KK:0.6837, AKo:0.1884, A2s:0.0477, A3s:0.0179, A4s:0.0443, A5s:0.4293, A6s:0.0529, A7s:0.0031, A8s:0.0227, A9s:0.0286, ATs:0.037, AJs:0.5393, AQs:0.478, AKs:0.0087, AA:0.2835"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.001, 42s:0.0001, 44:0.0195, J4o:0.0001, 52s:0.0001, 54s:0.0005, 64s:0.0019, 65s:0.0001, 66:0.0014, K6o:0.0001, A6o:0.0001, 75s:0.0001, 77:0.0001, 84s:0.0001, 87s:0.001, 88:0.0818, Q8o:0.0002, A8o:0.0001, 97s:0.0001, 99:0.0913, T4s:0.0001, T5s:0.0001, TT:0.3991, J5s:0.0002, J6s:0.0004, J9s:0.0002, JJ:0.1951, AJo:0.0007, Q4s:0.0011, Q7s:0.0002, QJs:0.0023, QQ:0.1129, KQo:0.0001, AQo:0.0001, K3s:0.0002, K6s:0.0008, K8s:0.0002, K9s:0.0002, KTs:0.0004, KJs:0.0001, KK:0.3055, AKo:0.6142, A6s:0.0001, A7s:0.0005, A8s:0.0048, A9s:0.0021, ATs:0.0001, AJs:0.0013, AKs:0.0105, AA"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.0001, 32s:0.0006, 33:0.0015, T3o:0.0001, 42s:0.0002, 44:0.0676, A4o:0.0001, 52s:0.0003, 53s:0.0001, 54s:0.0005, 55:0.0012, K5o:0.0003, 62s:0.0002, 64s:0.0019, 65s:0.0005, 66:0.0094, K6o:0.0003, A6o:0.0002, 75s:0.0001, 77:0.0001, 85s:0.0001, 87s:0.0011, 88:0.2495, T8o:0.0001, Q8o:0.0001, A8o:0.0001, 92s:0.0006, 94s:0.0001, 96s:0.0001, 99:0.1002, T2s:0.0001, T4s:0.0002, T5s:0.0001, T7s:0.0001, T9s:0.0003, TT:0.4731, JTo:0.0001, ATo:0.0001, J6s:0.0003, J9s:0.0002, JJ:0.6825, AJo:0.0005, Q4s:0.0002, Q7s:0.0001, QTs:0.0002, QJs:0.0027, QQ:0.1684, KQo:0.0001, AQo:0.0005, K3s:0.0002, K6s:0.0006, K7s:0.0001, K8s:0.0011, K9s:0.0004, KTs:0.0007, KJs:0.0002, KK:0.6785, AKo:0.2685, A5s:0.0001, A6s:0.0004, A7s:0.0005, A8s:0.0077, A9s:0.0025, ATs:0.0004, AJs:0.0019, AQs:0.009, AKs:0.8519"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "66:0.0475, 77:0.16, 88:0.2281, 99:0.3, TT:0.3535, JJ:0.8076, QQ:0.7962, KK:0.992, AKo:0.9897, AJs:0.1389, AQs:0.1828, AKs:0.9992, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@21",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0001, 33:0.001, 44:0.0007, 52s:0.003, 55:0.0042, A5o:0.0005, 62s:0.0002, 66:0.0021, 77:0.0257, 82s:0.0001, 86s:0.0001, 92s:0.0002, 95s:0.0004, 99:0.0001, T2s:0.0004, ATo:0.0001, J3s:0.0001, J4s:0.0016, JTs:0.0015, Q4s:0.0022, Q7s:0.0001, QJs:0.0002, QQ:0.0333, K6s:0.0032, K7s:0.0001, K8s:0.0005, K9s:0.0002, KJs:0.0006, KK:0.8787, AKo:0.0776, A2s:0.0019, A5s:0.0001, A7s:0.0004, A8s:0.0089, A9s:0.0045, ATs:0.0002, AJs:0.0011, AQs:0.0002, AKs:0.2149, AA:0.7283"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "32s:0.0001, 33:0.0001, 43s:0.0005, A4o:0.0001, 53s:0.0003, 55:0.0015, 75o:0.0001, 62s:0.0001, 65s:0.0003, 66:0.0129, 72s:0.0001, 76s:0.0008, 77:0.0155, 97o:0.0002, 87s:0.0035, 88:0.0096, 92s:0.0014, 95s:0.0013, 98s:0.0003, 99:0.0163, T9o:0.0001, T2s:0.0002, T6s:0.0001, J3s:0.0001, J8s:0.0001, JTs:0.0028, JJ:0.0075, KJo:0.0001, Q4s:0.002, QJs:0.0001, QQ:0.1092, KQo:0.0001, K7s:0.0007, K8s:0.0005, KJs:0.001, KK:0.1197, AKo:0.0769, A2s:0.0006, A3s:0.0001, A5s:0.0003, A6s:0.0002, A7s:0.0002, A8s:0.0039, A9s:0.0001, AJs:0.0015, AKs:0.1746, AA:0.2717"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@21",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.9998, 32s:0.0094, 33:0.9998, 53o:0.004, 42s:0.0092, 43s:0.4762, 44:0.9998, 54o:0.0073, 64o:0.006, 52s:0.0605, 53s:0.502, 54s:0.9826, 55:0.9999, 65o:0.0226, 75o:0.0005, 62s:0.0082, 63s:0.3556, 64s:0.5234, 65s:0.9999, 66:0.9999, 76o:0.0096, 86o:0.0053, 73s:0.0072, 74s:0.3227, 75s:0.5981, 76s:0.9998, 77:0.9999, 87o:0.0097, 82s:0.0052, 83s:0.0061, 84s:0.009, 85s:0.3683, 86s:0.5704, 87s:0.7206, 88:0.9998, 98o:0.0043, 94s:0.0058, 95s:0.0191, 96s:0.3571, 97s:0.4738, 98s:0.4913, 99:0.9999, T9o:0.0009, T5s:0.0075, T6s:0.0087, T7s:0.0291, T8s:0.3987, T9s:0.4653, TT:0.9999, JTo:0.0001, J7s:0.0107, J8s:0.0137, J9s:0.3696, JTs:0.4723, JJ:0.9999, QTs:0.0118, QJs:0.001, QQ, AQo:0.0141, K4s:0.0041, K5s:0.0002, K6s:0.0035, K7s:0.0027, K8s:0.0001, K9s:0.0072, KTs:0.0142, KJs:0.0123, KQs:0.0001, KK, AKo, A2s:0.0028, A3s:0.0098, A4s:0.0003, A5s:0.6206, A7s:0.0001, A8s:0.0004, ATs:0.0017, AJs:0.0007, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "33:0.0003, A3o:0.0003, 44:0.0001, 54o:0.0001, 54s:0.0006, 55:0.0061, A5o:0.0001, 64s:0.0011, 66:0.0001, J6o:0.0001, 72s:0.0001, 73s:0.0007, 74s:0.0004, 77:0.0001, 82s:0.0021, 83s:0.0018, 85s:0.0004, 86s:0.0013, 98o:0.0001, 92s:0.0002, 93s:0.0015, 95s:0.0002, 96s:0.0019, 99:0.0002, J9o:0.0001, T3s:0.0007, T6s:0.0049, T7s:0.001, T8s:0.0008, TT:0.0002, QTo:0.0001, J2s:0.0032, J5s:0.0001, J7s:0.0003, J8s:0.0003, J9s:0.007, QJo:0.0001, Q4s:0.0008, Q7s:0.0001, Q8s:0.0002, Q9s:0.0002, QTs:0.0002, QJs:0.0001, QQ:0.0989, K2s:0.0001, K4s:0.0001, K5s:0.0033, K6s:0.0006, K7s:0.002, K8s:0.0007, K9s:0.001, KTs:0.0154, KJs:0.0013, KQs:0.0053, KK:0.978, AKo:0.0238, A3s:0.0002, A4s:0.0025, A5s:0.0001, A7s:0.0001, A8s:0.0001, A9s:0.0006, ATs:0.0057, AJs:0.0074, AQs:0.0038, AKs:0.156, AA:0.992"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0002, A2o:0.0001, 32s:0.0005, 33:0.0001, 43o:0.0001, 63o:0.0002, 83o:0.0001, A3o:0.0001, 42s:0.0001, 43s:0.0009, 44:0.0005, Q4o:0.0006, 52s:0.002, 53s:0.0015, 54s:0.0003, 55:0.0012, 65o:0.0003, 85o:0.0001, K5o:0.0001, A5o:0.0001, 63s:0.0016, 65s:0.0002, 66:0.0013, 73s:0.0001, 74s:0.0006, 77:0.0008, 87o:0.0001, 82s:0.0017, 84s:0.0033, 85s:0.0002, 87s:0.0169, 98o:0.0001, A8o:0.0006, 93s:0.0001, 95s:0.004, 96s:0.0001, 97s:0.0003, 98s:0.0031, K9o:0.0002, A9o:0.0001, T4s:0.0014, T5s:0.0002, T7s:0.0001, T8s:0.0001, TT:0.0001, J3s:0.0036, J5s:0.0004, J7s:0.0015, J8s:0.0004, J9s:0.0006, JTs:0.0003, JJ:0.0034, QJo:0.0001, AJo:0.0001, Q3s:0.0001, Q5s:0.001, QQ:0.0005, KQo:0.0024, AQo:0.0022, K2s:0.0005, K6s:0.0002, K7s:0.0022, K8s:0.0001, K9s:0.0129, KTs:0.0001, KJs:0.003, KQs:0.001, KK:0.3052, AKo:0.002, A3s:0.0011, A4s:0.0019, A6s:0.0007, A7s:0.0024, A8s:0.0005, A9s:0.0012, ATs:0.0024, AJs:0.0033, AQs:0.0051, AKs:0.0916, AA:0.9922"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@18.5",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, 53s:0.0004, 55:0.0001, 65s:0.0002, 75s:0.0001, 76s:0.0002, T7o:0.0001, A7o:0.0001, 84s:0.0001, 86s:0.0005, Q8o:0.0001, K8o:0.0001, A8o:0.0003, 93s:0.0001, 96s:0.0005, 98s:0.0016, Q9o:0.0001, K9o:0.0001, T3s:0.0001, T5s:0.0003, T9s:0.0001, TT:0.0016, JTo:0.0001, KTo:0.0001, ATo:0.0001, J3s:0.0003, J6s:0.0003, J7s:0.0002, J8s:0.0001, Q3s:0.0001, Q4s:0.0001, Q5s:0.0002, Q6s:0.0021, Q8s:0.0003, Q9s:0.0001, QTs:0.0007, QJs:0.0001, AQo:0.0005, K4s:0.0004, K5s:0.0002, K6s:0.0001, K7s:0.0001, K9s:0.0004, KTs:0.0005, KJs:0.0001, KK:0.9295, AKo:0.0231, A5s:0.0002, A7s:0.0003, A8s:0.0085, A9s:0.0039, ATs:0.0008, AJs:0.0065, AQs:0.0018, AKs:0.0001, AA:0.7496"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0051, A2o:0.0001, 43s:0.0003, 54s:0.0003, Q5o:0.0001, 63s:0.0004, 75s:0.0001, 76s:0.0003, 86s:0.0128, 94s:0.0001, 96s:0.0007, 97s:0.0001, T3s:0.0002, TT:0.0132, ATo:0.0001, J6s:0.0002, J9s:0.0001, Q2s:0.0001, Q3s:0.0001, Q5s:0.0001, Q6s:0.0006, Q7s:0.0001, Q8s:0.0001, Q9s:0.0002, QTs:0.0008, QJs:0.0001, QQ:0.0001, K4s:0.0005, K7s:0.0055, K8s:0.0001, KTs:0.0002, KQs:0.0001, KK:0.0496, AKo:0.0016, A5s:0.0005, A8s:0.001, A9s:0.0068, ATs:0.0022, AJs:0.0002, AQs:0.0004, AKs:0.0002, AA:0.2503"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@18.5",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 42o:0.0036, 52o:0.0061, 62o:0.0012, A2o:0.0118, 32s:0.9993, 33, 43o:0.4262, 53o:0.9992, 63o:0.0139, A3o:0.1621, 42s:0.9996, 43s:0.9997, 44, 54o:0.9995, 64o:0.9995, 74o:0.0108, A4o:0.999, 52s:0.9996, 53s, 54s:0.9999, 55, 65o:0.9994, 75o:0.9994, 85o:0.0134, A5o, 62s:0.9994, 63s:0.9998, 64s, 65s, 66, 76o:0.9994, 86o:0.9992, 96o:0.0115, A6o:0.0002, 72s:0.3429, 73s:0.9992, 74s:0.9995, 75s, 76s, 77, 87o:0.9995, 97o:0.6997, T7o:0.0117, J7o:0.0009, A7o:0.0132, 82s:0.4305, 83s:0.5186, 84s:0.9996, 85s:0.9995, 86s, 87s, 88, 98o:0.9992, T8o:0.2155, J8o:0.0042, A8o:0.001, 92s:0.4085, 93s:0.4269, 94s:0.4636, 95s:0.9993, 96s, 97s, 98s, 99, T9o:0.4921, J9o:0.008, A9o:0.0001, T2s:0.0173, T3s:0.3217, T4s:0.5322, T5s:0.9991, T6s:0.9998, T7s:0.9998, T8s, T9s, TT, JTo:0.0723, QTo:0.0723, ATo:0.0283, J2s:0.0141, J3s:0.032, J4s:0.5598, J5s:0.6034, J6s:0.4875, J7s:0.9994, J8s:0.9997, J9s, JTs, JJ, AJo:0.071, Q2s:0.1163, Q3s:0.1946, Q4s:0.6549, Q5s:0.9993, Q6s:0.9994, Q7s:0.9983, Q8s:0.9987, Q9s, QTs, QJs:0.9998, QQ, AQo:0.4173, K2s:0.0775, K3s:0.1243, K4s:0.1121, K5s:0.23, K6s:0.4746, K7s:0.3003, K8s:0.155, K9s:0.2834, KTs:0.996, KJs:0.9475, KQs:0.7522, KK, AKo, A2s, A3s, A4s, A5s, A6s, A7s, A8s, A9s, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0004, 32s:0.0001, 43o:0.0001, Q3o:0.0002, 43s:0.0088, Q4o:0.0003, A4o:0.0001, 53s:0.0006, 54s:0.0002, 55:0.0002, K5o:0.0001, A5o:0.0001, 62s:0.0011, 63s:0.0005, 66:0.0326, 96o:0.0001, Q6o:0.0002, 72s:0.0001, 73s:0.0015, 76s:0.017, 77:0.0008, 97o:0.0001, T7o:0.0006, Q7o:0.0001, K7o:0.0001, 82s:0.0001, 83s:0.001, 84s:0.0001, 85s:0.0009, 86s:0.0004, A8o:0.0001, 92s:0.0003, 93s:0.0002, 96s:0.0002, 97s:0.0001, 98s:0.0008, 99:0.0038, T9o:0.0001, T7s:0.0001, T8s:0.0073, T9s:0.0065, TT:0.0031, QTo:0.0003, ATo:0.0004, J3s:0.0003, J4s:0.0002, J5s:0.0006, J7s:0.0002, J9s:0.0003, JTs:0.0013, AJo:0.0005, Q2s:0.0001, Q3s:0.0005, Q4s:0.0003, Q5s:0.0003, Q6s:0.0006, Q7s:0.0003, Q9s:0.0002, QTs:0.0004, QJs:0.0002, AQo:0.0017, K2s:0.0006, K3s:0.0001, K6s:0.0002, K7s:0.0009, K8s:0.0001, K9s:0.0136, KTs:0.0001, KJs:0.0039, KQs:0.0007, KK:0.6034, A2s:0.0014, A3s:0.0035, A4s:0.0005, A5s:0.0032, A6s:0.011, A7s:0.0023, A8s:0.0003, A9s:0.0047, ATs:0.008, AJs:0.0003, AQs:0.0052, AKs:0.0243, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0009, 42o:0.0001, 52o:0.0001, 33:0.0002, 73o:0.0001, 83o:0.0001, K3o:0.0001, A3o:0.0002, 42s:0.0003, J4o:0.0001, K4o:0.0001, 52s:0.0005, 54s:0.0011, 55:0.0003, T5o:0.0001, Q5o:0.0001, K5o:0.0001, 62s:0.0009, 66:0.0003, 86o:0.0002, J6o:0.0002, A6o:0.0001, 72s:0.0003, 73s:0.0004, 74s:0.0001, 75s:0.0001, 76s:0.0004, 77:0.0003, 82s:0.0009, 84s:0.0008, 85s:0.0002, 86s:0.0002, 88:0.0026, K8o:0.0002, 92s:0.0009, 94s:0.0001, 95s:0.0006, 96s:0.0002, 97s:0.0061, 98s:0.0001, 99:0.0002, T9o:0.0001, Q9o:0.0003, T2s:0.0002, T3s:0.0009, T4s:0.001, T6s:0.0001, T7s:0.0001, T8s:0.0001, T9s:0.0016, J2s:0.0002, J4s:0.0004, J5s:0.0003, J6s:0.0008, J8s:0.0012, J9s:0.0003, JTs:0.0002, JJ:0.0007, QJo:0.0001, Q2s:0.0002, Q3s:0.0163, Q4s:0.0026, Q8s:0.0008, QTs:0.0004, QJs:0.0001, QQ:0.0007, K2s:0.0006, K3s:0.0004, K5s:0.0001, K6s:0.0051, K7s:0.0005, K8s:0.0002, K9s:0.0061, KTs:0.0001, KJs:0.0001, KQs:0.0011, KK:0.7562, AKo:0.0017, A2s:0.0012, A3s:0.0009, A4s:0.0001, A5s:0.0012, A6s:0.0014, A7s:0.0008, A8s:0.0121, ATs:0.0108, AJs:0.004, AQs:0.0015, AKs:0.0825, AA:0.9907"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|CO:4BET@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "62o:0.0001, 72o:0.0002, K2o:0.0005, A2o:0.0001, 83o:0.0001, Q3o:0.0001, A3o:0.0002, 43s:0.001, J4o:0.0002, Q4o:0.0001, K4o:0.0001, 52s:0.0007, 54s:0.0006, 55:0.0002, 95o:0.0002, 63s:0.0001, 64s:0.0003, 66:0.0001, Q6o:0.0001, 72s:0.003, 73s:0.0015, 75s:0.0004, 76s:0.0001, 77:0.0008, J7o:0.0001, Q7o:0.0002, 82s:0.0005, 83s:0.0001, 84s:0.0004, 85s:0.0002, 86s:0.0007, 87s:0.0002, Q8o:0.0001, 92s:0.0004, 94s:0.0001, 96s:0.0003, 98s:0.0006, 99:0.0036, Q9o:0.0003, K9o:0.0003, A9o:0.0001, T2s:0.0003, T4s:0.0001, T5s:0.0003, T6s:0.0001, T7s:0.0001, T8s:0.0003, T9s:0.0003, TT:0.0005, JTo:0.0004, KTo:0.0001, J2s:0.0009, J6s:0.0001, JTs:0.0015, JJ:0.0012, AJo:0.0003, Q4s:0.0001, Q6s:0.0005, Q7s:0.0007, Q8s:0.0008, Q9s:0.0002, QTs:0.0001, QJs:0.0003, QQ:0.0229, AQo:0.0001, K2s:0.0017, K5s:0.0001, K6s:0.0012, K7s:0.0014, K8s:0.0001, K9s:0.0016, KTs:0.0001, KJs:0.0042, KK:0.9563, AKo:0.002, A2s:0.0007, A3s:0.0015, A4s:0.0001, A6s:0.0082, A7s:0.0002, A8s:0.0005, A9s:0.0385, ATs:0.0069, AJs:0.0098, AQs:0.0165, AKs:0.0016, AA:0.9991"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|LJ:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.417, JJ, QQ, AQo:0.0001, KK, AKo, AJs:0.2491, AQs:0.4314, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 32s:0.0006, 33:0.0011, A4o:0.0005, 53s:0.0001, 55:0.0001, 63s:0.001, 64s:0.0003, 65s:0.0006, 66:0.0003, A6o:0.0001, 73s:0.0004, 75s:0.0014, 76s:0.0016, 77:0.0014, 82s:0.0001, 84s:0.0001, 86s:0.0013, 88:0.0015, 92s:0.0004, 96s:0.0066, 98s:0.0001, 99:0.0005, T2s:0.0001, T4s:0.0001, T5s:0.0001, T6s:0.0001, T8s:0.0004, TT:0.0274, ATo:0.0001, J3s:0.0007, J6s:0.0001, J9s:0.0012, JJ:0.0041, AJo:0.0003, Q2s:0.0001, Q7s:0.0002, Q8s:0.0001, QJs:0.0015, QQ:0.0237, K3s:0.0002, K4s:0.0001, K6s:0.0004, K9s:0.0005, KQs:0.0006, KK:0.6608, AKo:0.1671, A2s:0.0006, A3s:0.0021, A4s:0.001, A5s:0.001, A7s:0.0023, A8s:0.0008, ATs:0.0023, AQs:0.0003, AKs:0.0984, AA:0.889"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0009, A2o:0.0001, 32s:0.0006, 33:0.0013, A3o:0.0001, 44:0.0001, A4o:0.0001, 53s:0.0001, 62s:0.0001, 63s:0.0011, 64s:0.0005, 65s:0.0006, 66:0.0045, 73s:0.0004, 74s:0.0006, 75s:0.0022, 76s:0.0005, 77:0.0015, 82s:0.0001, 84s:0.0005, 86s:0.0011, 88:0.0017, T8o:0.0001, A8o:0.0001, 92s:0.0003, 96s:0.0075, 97s:0.0002, 98s:0.0001, 99:0.0481, T2s:0.0003, T3s:0.0001, T4s:0.0002, T5s:0.0004, T8s:0.0013, T9s:0.0008, TT:0.0407, J3s:0.0005, J6s:0.0003, J9s:0.0003, JTs:0.0005, JJ:0.1651, KJo:0.0001, AJo:0.0003, Q2s:0.0001, Q3s:0.0001, Q5s:0.0001, Q7s:0.0002, Q8s:0.0004, Q9s:0.0004, QJs:0.0013, QQ:0.0189, AQo:0.0001, K2s:0.0003, K3s:0.0002, K6s:0.0002, K9s:0.0004, KK:0.3302, AKo:0.1299, A2s:0.0009, A3s:0.0028, A5s:0.0009, A6s:0.0002, A7s:0.0092, A8s:0.0003, ATs:0.002, AQs:0.0004, AKs:0.0164, AA:0.1109"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.5204, 33:0.6902, 44:0.9388, 55:0.9618, 66:0.9731, 77, 87s:0.0003, 88:0.9914, 99:0.9697, TT, ATo:0.1135, JJ, AJo:0.246, QQ, AQo:0.4244, KK, AKo, A5s:0.1035, A7s:0.1137, A8s:0.2458, A9s:0.3558, ATs:0.466, AJs:0.4892, AQs:0.5547, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@10|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.0005, 33:0.0008, T3o:0.0001, J3o:0.0001, 44:0.0001, 74o:0.0001, A4o:0.0001, 53s:0.0011, 54s:0.0001, 55:0.0009, 65o:0.0001, J5o:0.0002, 62s:0.0115, 64s:0.0004, 65s:0.0006, 66:0.0002, 86o:0.0001, 73s:0.0004, 74s:0.001, 75s:0.0004, 77:0.0001, Q7o:0.0001, A7o:0.0001, 82s:0.0005, 83s:0.0002, 85s:0.0023, 87s:0.0005, 88:0.0011, T8o:0.0001, Q8o:0.0002, 92s:0.0002, 93s:0.004, 94s:0.0005, 96s:0.004, T9o:0.0003, K9o:0.0005, A9o:0.0019, T3s:0.0001, T4s:0.0056, T5s:0.0001, T6s:0.0001, T7s:0.0001, T9s:0.0051, QTo:0.0003, J2s:0.001, J3s:0.0001, J4s:0.0053, J5s:0.0008, J6s:0.0002, J7s:0.0049, J8s:0.0037, J9s:0.0001, JTs:0.0018, JJ:0.0011, KJo:0.0001, Q2s:0.0007, Q4s:0.0041, Q5s:0.0112, Q7s:0.0003, Q8s:0.0004, Q9s:0.0002, QTs:0.0012, QJs:0.0002, QQ:0.0247, AQo:0.0003, K3s:0.0016, K4s:0.0013, K5s:0.0003, K6s:0.0148, K7s:0.0004, K8s:0.0013, K9s:0.0034, KJs:0.0001, KQs:0.0009, KK:0.3136, AKo:0.0051, A2s:0.0004, A3s:0.0067, A5s:0.0013, A6s:0.0316, A7s:0.0014, A8s:0.0034, A9s:0.0008, ATs:0.007, AJs:0.0037, AQs:0.001, AKs:0.1915, AA:0.9862"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|BB:CALL@33.75",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|BTN:CALL@21",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.1605, QQ:0.982, KK, AKs:0.0058, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|BTN:CALL@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0956, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|BTN:CALL@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0001, QQ:0.0001, KK:0.9049, A7s:0.0001, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|CO:CALL@18.5",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0001, TT:0.0001, JJ:0.9706, QQ, KK, AKs:0.3434, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|CO:CALL@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.9973, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|CO:CALL@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|CO:CALL@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0001, QQ:0.4276, KK:0.9995, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|SB:CALL@24.25",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0008, QQ:0.001, KK, AKs:0.0003, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@37.25|SB:CALL@24.25",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "KK:0.0007, AJs:0.0001, AKs:0.0007, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@12",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0001, A4o:0.0045, 54s:0.0126, 66:0.0002, 75s:0.0269, A7o:0.008, 85s:0.0001, A8o:0.1119, 99:0.0002, A9o:0.0068, T6s:0.0001, TT:0.0047, ATo:0.0595, JTs:0.0002, JJ:0.0814, QQ:0.3169, AQo:0.3658, K5s:0.0001, KK:0.1496, AKo:0.1462, A2s:0.0057, A3s:0.0001, A4s:0.0673, A5s:0.0084, A7s:0.1929, A8s:0.1004, A9s:0.3114, ATs:0.0208, AJs:0.1042, AQs:0.3195, AKs:0.1615, AA:0.1101"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0051, A2o:0.0853, 32s:0.0002, 33:0.0677, A3o:0.1202, 43s:0.0011, 44:0.0527, 54o:0.0002, A4o:0.3299, 54s:0.0594, 55:0.0318, 65o:0.0001, A5o:0.2253, 62s:0.0035, 63s:0.0006, 64s:0.0002, 65s:0.2821, 66:0.1349, 76o:0.0004, A6o:0.1144, 72s:0.0002, 74s:0.0001, 75s:0.2327, 76s:0.0864, 77:0.0697, A7o:0.0857, 82s:0.0002, 85s:0.0636, 86s:0.0002, 87s:0.0935, 88:0.1601, A8o:0.1403, 96s:0.0007, 97s:0.0624, 98s:0.0401, 99:0.3415, A9o:0.2878, T2s:0.003, T6s:0.0004, T7s:0.0008, T8s:0.0002, TT:0.0926, ATo:0.0946, J9s:0.0001, JTs:0.0001, JJ:0.0003, AJo:0.1123, Q2s:0.0009, Q5s:0.0001, Q6s:0.0001, Q9s:0.0001, QTs:0.0891, QJs:0.0001, QQ:0.0002, AQo:0.1328, K2s:0.0001, K3s:0.0004, K4s:0.0023, K5s:0.0003, K8s:0.0001, K9s:0.0002, KTs:0.0324, KK:0.6988, AKo:0.6745, A2s:0.655, A3s:0.4299, A4s:0.4542, A5s:0.529, A6s:0.1513, A7s:0.5199, A8s:0.5395, A9s:0.2341, ATs:0.5352, AJs:0.4832, AQs:0.4432, AKs:0.7954, AA:0.8899"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@12",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1815, 82o:0.0001, 33:0.3473, 53o:0.0001, A3o:0.0001, 43s:0.0824, 44:0.3204, 54o:0.0194, 64o:0.0025, 74o:0.0001, 52s:0.001, 53s:0.025, 54s:0.0363, 55:0.4801, 65o:0.0166, 75o:0.0003, 62s:0.0004, 63s:0.048, 64s:0.0719, 65s:0.0959, 66:0.5245, 76o:0.0409, 86o:0.0008, T6o:0.0001, 73s:0.0008, 74s:0.0436, 75s:0.0654, 76s:0.146, 77:0.4448, 87o:0.0094, 97o:0.0002, A7o:0.0008, 82s:0.0004, 83s:0.0007, 84s:0.0012, 85s:0.0302, 86s:0.1138, 87s:0.0907, 88:0.3867, 98o:0.002, T8o:0.0002, J8o:0.0002, 93s:0.0001, 94s:0.0007, 95s:0.0003, 96s:0.003, 97s:0.0128, 98s:0.119, 99:0.3584, T9o:0.0013, T3s:0.0002, T4s:0.0017, T5s:0.0022, T6s:0.0009, T7s:0.0039, T8s:0.0492, T9s:0.0036, TT:0.2435, QTo:0.0001, J2s:0.0001, J3s:0.0002, J6s:0.0009, J7s:0.0015, J8s:0.0383, J9s:0.0017, JTs:0.0013, JJ:0.3069, AJo:0.0103, Q2s:0.0002, Q3s:0.0001, Q4s:0.0001, Q6s:0.0004, Q7s:0.0001, Q8s:0.0004, Q9s:0.0005, QTs:0.0347, QJs:0.008, QQ:0.3883, AQo:0.007, K2s:0.0001, K3s:0.0001, K4s:0.0002, K5s:0.0002, K7s:0.0006, KTs:0.0001, KJs:0.0005, KK:0.742, AKo:0.1199, A2s:0.0005, A4s:0.0086, A5s:0.0118, A6s:0.0203, A7s:0.0353, A8s:0.0236, A9s:0.0312, ATs:0.053, AJs:0.0255, AQs:0.079, AKs:0.2001, AA:0.108"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0001, A2o:0.117, 33:0.0004, A3o:0.1324, 44:0.0006, A4o:0.1554, 52s:0.0013, 53s:0.0037, 54s:0.0017, 55:0.0003, 65o:0.0016, A5o:0.1352, 63s:0.0001, 64s:0.0013, 65s:0.0202, 66:0.0011, 76o:0.0005, A6o:0.0839, 73s:0.0004, 74s:0.0022, 75s:0.0083, 76s:0.0095, 77:0.0016, 87o:0.0003, A7o:0.0496, 85s:0.0065, 86s:0.0024, 87s:0.0085, 88:0.001, 98o:0.0019, A8o:0.0787, 93s:0.0004, 95s:0.001, 96s:0.0002, 97s:0.0033, 98s:0.0029, 99:0.0011, T9o:0.0005, A9o:0.0394, T3s:0.0006, T6s:0.001, T7s:0.0012, T8s:0.001, T9s:0.0031, TT:0.0009, ATo:0.1683, J3s:0.0001, J4s:0.0005, J5s:0.0001, J8s:0.0011, J9s:0.002, JTs:0.0033, JJ:0.0021, AJo:0.157, Q8s:0.0001, Q9s:0.0008, QQ:0.0006, AQo:0.3737, K3s:0.0001, K4s:0.0001, K5s:0.0001, KJs:0.0003, KK:0.0005, AKo:0.4316, A2s:0.6375, A3s:0.7109, A4s:0.7296, A5s:0.6913, A6s:0.5814, A7s:0.6131, A8s:0.5667, A9s:0.5447, ATs:0.6079, AJs:0.6295, AQs:0.8994, AKs:0.6569, AA:0.892"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0014, 66:0.0184, 75s:0.0001, 77:0.1209, 88:0.0535, 99:0.1599, TT:0.2949, JJ:0.0628, QQ:0.1848, KK:0.1676, AKo:0.6408, AKs:0.0219, AA:0.5177"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "55:0.0033, 66:0.2569, 76s:0.0001, 77:0.1037, 88:0.0486, 99:0.4948, TT:0.3437, JJ:0.1626, QQ:0.357, KK:0.8324, AKo:0.3395, AKs:0.976, AA:0.4823"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BB:4BET@34.75",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0358, JJ:0.0515, QQ:0.0262, KK, AKo:0.9992, AKs:0.9999, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@21",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.9582, KK:0.9997, AKo:0.1178, AKs:0.6325, AA:0.9386"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "88:0.0001, QQ:0.0225, KK:0.0003, AKo:0.0001, AKs:0.0169, AA:0.0614"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@21",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0004, 33:0.0208, 44:0.2824, 55:0.693, 66:0.898, 77:0.8808, 88:0.9066, 99:0.8672, TT:0.9958, JJ, QQ, AQo:0.0271, KK, AKo, ATs:0.0003, AJs:0.0021, AQs:0.7421, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KQs:0.0001, KK, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|BTN:4BET@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "KK, AKs:0.0004, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@18.5",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0001, QQ:0.9994, KK:0.9999, AKo:0.9217, AKs:0.9928, AA:0.9998"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "QQ:0.0001, KK:0.0001, AKs:0.0064, AA:0.0002"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@18.5",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22, 33, 44, 54s:0.0004, 55, 65s:0.0011, 66, 76s:0.0001, 77, 88, 99, TT, JJ, QQ, AQo:0.1259, KK, AKo, A8s:0.0001, A9s:0.0001, ATs:0.0001, AQs:0.9999, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0001, QQ:0.0133, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.0173, KK, AKo:0.0002, A5s:0.0001, AKs:0.0183, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|CO:4BET@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "T5s:0.0001, QQ:0.0004, KK, AQs:0.0001, AKs:0.0163, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@12",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1714, 33:0.4686, 43s:0.0204, 44:0.3645, 54o:0.0005, 52s:0.0004, 53s:0.0815, 54s:0.2912, 55:0.3812, 65o:0.0028, 63s:0.005, 64s:0.2895, 65s:0.4717, 66:0.4788, 76o:0.0064, 86o:0.0001, 74s:0.0031, 75s:0.3398, 76s:0.4474, 77:0.637, 87o:0.0039, A7o:0.0001, 84s:0.0001, 85s:0.1269, 86s:0.3665, 87s:0.4002, 88:0.5434, 98o:0.0002, A8o:0.0007, 96s:0.0336, 97s:0.1878, 98s:0.4809, 99:0.6449, J9o:0.0002, Q9o:0.0002, A9o:0.001, T6s:0.0005, T7s:0.0008, T8s:0.2546, T9s:0.5058, TT:0.7917, JTo:0.0002, QTo:0.0005, KTo:0.0005, ATo:0.0026, J2s:0.0001, J3s:0.0001, J5s:0.0001, J6s:0.0004, J7s:0.0034, J8s:0.1455, J9s:0.1929, JTs:0.5793, JJ:0.5179, QJo:0.0012, KJo:0.0013, AJo:0.069, Q3s:0.0003, Q4s:0.0007, Q5s:0.0013, Q6s:0.0005, Q7s:0.0002, Q8s:0.0065, Q9s:0.0026, QTs:0.2831, QJs:0.8379, QQ:0.7358, KQo:0.0221, AQo:0.3453, K2s:0.0009, K3s:0.0009, K4s:0.0962, K5s:0.1029, K6s:0.137, K7s:0.0115, K8s:0.1028, K9s:0.2436, KTs:0.2921, KJs:0.4907, KQs:0.5617, KK:0.0002, A7s:0.0001, A8s:0.01, A9s:0.1519, ATs:0.6206, AJs:0.4975, AQs:0.5283, AA:0.1484"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.8285, A2o:0.0903, 32s:0.0024, 33:0.5313, A3o:0.1525, 42s:0.0066, 43s:0.0814, 44:0.6354, A4o:0.2338, 52s:0.0058, 53s:0.1869, 54s:0.5289, 55:0.6188, 65o:0.005, A5o:0.3808, 62s:0.0003, 63s:0.031, 64s:0.3426, 65s:0.4787, 66:0.5212, 76o:0.0043, A6o:0.0581, 73s:0.0016, 74s:0.0918, 75s:0.3619, 76s:0.4392, 77:0.363, 87o:0.0057, A7o:0.0756, 82s:0.0015, 84s:0.0011, 85s:0.0739, 86s:0.3153, 87s:0.4241, 88:0.4566, A8o:0.0489, 95s:0.0022, 96s:0.0073, 97s:0.1929, 98s:0.084, 99:0.3551, A9o:0.0043, T8s:0.0172, T9s:0.0419, TT:0.2083, ATo:0.033, J3s:0.0001, J8s:0.0111, J9s:0.0218, JTs:0.0592, JJ:0.4821, KJo:0.0012, AJo:0.1236, Q2s:0.0009, Q4s:0.0007, Q5s:0.0075, Q6s:0.0007, Q7s:0.0001, Q8s:0.0091, Q9s:0.0419, QTs:0.0161, QJs:0.0629, QQ:0.2642, KQo:0.0121, AQo:0.2225, K2s:0.0633, K3s:0.1012, K4s:0.3017, K5s:0.3178, K6s:0.3751, K7s:0.3835, K8s:0.2598, K9s:0.2689, KTs:0.2937, KJs:0.3959, KQs:0.3651, KK:0.9998, AKo, A2s:0.9466, A3s:0.9375, A4s:0.9946, A5s:0.9982, A6s:0.8502, A7s:0.9125, A8s:0.9203, A9s:0.5908, ATs:0.3218, AJs:0.5024, AQs:0.4717, AKs, AA:0.8516"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|LJ:4BET@37.25",
    "heroPos": "HJ",
    "eff": 37.5,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0114, JJ:0.4961, QQ, AQo:0.011, KK, AKo, AJs:0.0008, AQs:0.5894, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@24.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "TT:0.0002, QQ:0.3992, KK:0.9665, AKo:0.5643, AKs:0.5344, AA:0.4284"
      },
      {
        "action": "5bet 37.25bb",
        "min": 0.0001,
        "range": "TT:0.0002, QQ:0.0647, KK:0.0335, AKo:0.0323, AKs:0.3313, AA:0.5716"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@24.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0016, 55:0.0051, 66:0.0571, 77:0.3629, 88:0.4639, 99:0.4885, TT:0.6355, JJ:0.8159, QQ, KK, AKo, AQs:0.0035, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:3BET@7|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0001, KJs:0.0002, KK:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@12",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "32s:0.0001, A4o:0.0596, 54s:0.0011, A5o:0.1666, 63s:0.0039, 64s:0.0004, 65s:0.009, 66:0.0073, A6o:0.0293, 73s:0.0214, 74s:0.0642, 76s:0.0001, 77:0.2215, A7o:0.0075, 85s:0.028, 87s:0.0094, 88:0.3377, A8o:0.0001, 94s:0.0001, 95s:0.0002, 96s:0.0717, 97s:0.0002, 99:0.0828, Q9o:0.0002, T2s:0.0009, T3s:0.0006, T5s:0.0001, T6s:0.0001, T7s:0.0055, T8s:0.0054, T9s:0.0232, TT:0.004, J7s:0.0005, J9s:0.221, JTs:0.0073, KJo:0.0001, Q2s:0.0002, Q3s:0.0008, Q5s:0.0002, Q9s:0.0011, QTs:0.001, QJs:0.0099, QQ:0.1051, KQo:0.0361, AQo:0.493, K5s:0.0178, K6s:0.0046, K7s:0.0087, K8s:0.005, K9s:0.0004, KJs:0.0013, KQs:0.0075, KK:0.2137, AKo:0.1525, A2s:0.002, A3s:0.038, A4s:0.2119, A5s:0.0228, A6s:0.0894, A7s:0.4164, A8s:0.166, A9s:0.0002, ATs:0.0605, AJs:0.2454, AQs:0.1741, AKs:0.3488, AA:0.2533"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0253, 32o:0.0093, 52o:0.0102, 62o:0.0019, A2o:0.1277, 32s:0.022, 33:0.0582, 53o:0.0039, K3o:0.0001, A3o:0.4299, 42s:0.0021, 43s:0.0011, 44:0.0561, 54o:0.0022, 64o:0.0021, 74o:0.0038, T4o:0.0001, A4o:0.1725, 52s:0.017, 53s:0.0336, 54s:0.2378, 55:0.0376, 65o:0.0086, 85o:0.0052, A5o:0.1036, 62s:0.0086, 63s:0.0018, 64s:0.0038, 65s:0.3787, 66:0.0331, 76o:0.0044, 86o:0.0055, K6o:0.0007, A6o:0.2048, 72s:0.0004, 74s:0.0222, 75s:0.0159, 76s:0.0365, 77:0.0764, A7o:0.0548, 82s:0.0184, 83s:0.001, 84s:0.0006, 85s:0.0134, 86s:0.052, 87s:0.0426, 88:0.0706, 98o:0.0029, T8o:0.0005, K8o:0.0003, A8o:0.0376, 92s:0.0081, 93s:0.0095, 94s:0.0005, 95s:0.0037, 96s:0.0182, 97s:0.0178, 98s:0.0015, 99:0.038, T9o:0.0027, K9o:0.0004, A9o:0.0363, T2s:0.0169, T5s:0.0005, T6s:0.0343, T7s:0.0093, T8s:0.0451, TT:0.0405, KTo:0.0002, ATo:0.039, J2s:0.0004, J3s:0.0071, J6s:0.0007, J7s:0.0027, J8s:0.0059, J9s:0.0258, JTs:0.5205, JJ:0.8765, QJo:0.0004, KJo:0.0216, AJo:0.0182, Q2s:0.0004, Q3s:0.0161, Q4s:0.0823, Q5s:0.0747, Q6s:0.0294, Q7s:0.0205, Q8s:0.0012, Q9s:0.015, QTs:0.0647, QJs:0.3072, QQ:0.5579, KQo:0.0391, AQo:0.1838, K2s:0.04, K3s:0.0426, K4s:0.0051, K5s:0.181, K6s:0.0473, K7s:0.0012, K8s:0.0678, K9s:0.0007, KJs:0.0205, KQs:0.1002, KK:0.7831, AKo:0.7967, A2s:0.7662, A3s:0.6483, A4s:0.2788, A5s:0.6965, A6s:0.6462, A7s:0.3441, A8s:0.223, A9s:0.0109, ATs:0.6844, AJs:0.6189, AQs:0.5254, AKs:0.5707, AA:0.7467"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@12",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0134, 88:0.044, ATo:0.0378, AJo:0.0376, QQ:0.0003, AQo:0.1657, KK:0.0218, AKo:0.1787, A2s:0.0109, A4s:0.0694, A6s:0.0402, A8s:0.095, A9s:0.0903, ATs:0.0974, AJs:0.1426, AQs:0.383, AKs:0.3801, AA:0.3539"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0103, K2o:0.0018, A2o:0.0819, 32s:0.0042, 33:0.0488, 53o:0.0003, K3o:0.0018, A3o:0.0962, 43s:0.0196, 44:0.0056, 54o:0.0039, K4o:0.0015, A4o:0.0879, 52s:0.0056, 53s:0.0099, 54s:0.0216, 55:0.0231, 65o:0.0062, 85o:0.0002, K5o:0.0022, A5o:0.0667, 62s:0.0014, 63s:0.0027, 64s:0.0166, 65s:0.0281, 66:0.0408, 76o:0.0002, K6o:0.0006, A6o:0.0636, 73s:0.0005, 74s:0.0011, 75s:0.003, 76s:0.0123, 77:0.0304, 87o:0.0005, K7o:0.0007, A7o:0.0754, 84s:0.0005, 85s:0.0015, 86s:0.0044, 87s:0.0093, 88:0.0149, 98o:0.0002, K8o:0.0042, A8o:0.065, 95s:0.0005, 96s:0.0007, 97s:0.0067, 98s:0.0006, 99:0.0285, K9o:0.0002, A9o:0.0773, T7s:0.0036, T8s:0.0014, T9s:0.0025, TT:0.0095, KTo:0.0044, ATo:0.0492, J3s:0.0028, J5s:0.007, J6s:0.0012, J7s:0.0016, J8s:0.0014, JTs:0.0049, JJ:0.0231, KJo:0.0048, AJo:0.0627, Q8s:0.001, QTs:0.0025, QJs:0.0029, QQ:0.3512, KQo:0.0004, AQo:0.1755, K2s:0.0049, K3s:0.0115, K4s:0.0115, K5s:0.0222, K6s:0.0027, K7s:0.0029, K8s:0.0087, K9s:0.0082, KTs:0.0131, KJs:0.0121, KQs:0.008, KK:0.8892, AKo:0.3398, A2s:0.1231, A3s:0.2338, A4s:0.2105, A5s:0.3466, A6s:0.134, A7s:0.1095, A8s:0.2451, A9s:0.1853, ATs:0.1322, AJs:0.1493, AQs:0.3126, AKs:0.6154, AA:0.6461"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@34.75",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0003, 88:0.0186, 99:0.334, TT:0.622, JJ:0.6766, QQ:0.5897, KQs:0.3949, KK:0.0025, AKo:0.8653, ATs:0.0148, AJs:0.1884, AQs:0.0314, AKs:0.0646, AA:0.722"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "88:0.0111, 99:0.3405, TT:0.3554, JJ:0.3227, QQ:0.4103, KQs:0.3123, KK:0.9975, AKo:0.1347, ATs:0.0908, AJs:0.7613, AQs:0.0169, AKs:0.9354, AA:0.278"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@34.75",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.004, KK, AKo:0.9983, AKs:0.9993, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@8",
    "heroPos": "LJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.1075, 42s:0.087, 43s:0.4376, 44:0.0379, A4o:0.1035, 54s:0.0682, 55:0.1882, 63s:0.0002, 64s:0.1849, 65s:0.1008, 66:0.4445, 76s:0.4921, 77:0.4581, 83s:0.0004, 85s:0.1293, 87s:0.0037, 88:0.5267, A8o:0.0004, 97s:0.0029, 98s:0.0282, 99:0.0701, A9o:0.0001, T8s:0.0693, T9s:0.0002, TT:0.1332, ATo:0.0001, J6s:0.0001, J7s:0.0026, JTs:0.2112, JJ:0.2309, Q2s:0.0003, Q8s:0.0013, Q9s:0.0171, QTs:0.0001, QJs:0.0043, QQ:0.8396, AQo:0.6614, K3s:0.0001, K4s:0.0004, K5s:0.0392, K7s:0.0021, K9s:0.0752, KTs:0.0409, KJs:0.0035, KQs:0.1645, KK:0.6845, AKo:0.4167, A2s:0.2045, A3s:0.0302, A4s:0.1235, A5s:0.2578, A6s:0.1162, A7s:0.1968, A8s:0.2051, A9s:0.1974, ATs:0.0376, AJs:0.5837, AQs:0.976, AKs:0.0651, AA:0.0136"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.0163, A2o:0.1628, 32s:0.001, 33:0.0048, 63o:0.0001, J3o:0.0007, Q3o:0.0014, K3o:0.0048, A3o:0.1089, 43s:0.0022, 44:0.0001, Q4o:0.0034, K4o:0.0051, A4o:0.1539, 52s:0.0012, 53s:0.0006, 54s:0.0026, K5o:0.0001, A5o:0.1399, 63s:0.0017, 64s:0.0104, 66:0.0082, Q6o:0.0024, A6o:0.0354, 75s:0.0027, 76s:0.0001, 77:0.0004, J7o:0.0001, Q7o:0.0013, A7o:0.0871, 82s:0.0068, 84s:0.0001, 86s:0.0036, 87s:0.0074, 88:0.0374, K8o:0.0027, A8o:0.0854, 92s:0.008, 93s:0.0013, 96s:0.0041, 97s:0.0022, 98s:0.0001, 99:0.0004, T9o:0.0012, J9o:0.0003, K9o:0.0012, A9o:0.1072, T2s:0.0001, T5s:0.0025, TT:0.1518, QTo:0.0002, ATo:0.1948, J3s:0.0057, J7s:0.0001, J8s:0.0122, J9s:0.0028, JTs:0.0001, JJ:0.1754, AJo:0.3356, Q3s:0.001, Q5s:0.0009, Q6s:0.0399, Q7s:0.002, Q8s:0.0248, Q9s:0.0014, QTs:0.002, QJs:0.0123, QQ:0.0771, KQo:0.0109, AQo:0.2452, K2s:0.0172, K4s:0.0029, K5s:0.0085, K7s:0.0001, K8s:0.0101, K9s:0.0002, KTs:0.0005, KJs:0.0083, KQs:0.0001, KK:0.1363, AKo:0.3666, A2s:0.0001, A3s:0.0295, A4s:0.1224, A5s:0.0078, A6s:0.0673, A7s:0.2074, A8s:0.2974, A9s:0.0409, ATs:0.0491, AJs:0.0496, AQs:0.0036, AKs:0.9182, AA:0.984"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0104, A2o:0.0069, 32s:0.0057, 33:0.0029, A3o:0.0234, 43s:0.0366, 44:0.0206, 54o:0.0157, 64o:0.0018, K4o:0.0042, A4o:0.0555, 52s:0.0174, 53s:0.0343, 54s:0.0004, 55:0.0022, 65o:0.0021, 75o:0.0007, T5o:0.0001, A5o:0.0064, 63s:0.0032, 64s:0.0019, 65s:0.0316, 66:0.0655, A6o:0.0001, 73s:0.0063, 74s:0.0068, 75s:0.0094, 76s:0.2381, 77:0.0047, 87o:0.0001, K7o:0.0001, A7o:0.0234, 82s:0.0006, 83s:0.0055, 84s:0.0169, 85s:0.0013, 86s:0.0012, 87s:0.0276, 88:0.0315, K8o:0.0021, A8o:0.0292, 92s:0.0027, 93s:0.0028, 94s:0.0002, 95s:0.0046, 96s:0.0185, 97s:0.0092, 98s:0.0432, 99:0.0085, T9o:0.0072, J9o:0.0019, K9o:0.0004, A9o:0.0163, T2s:0.0007, T3s:0.0014, T4s:0.0001, T5s:0.0077, T7s:0.0008, T8s:0.0024, T9s:0.002, TT:0.0166, JTo:0.0012, KTo:0.0004, ATo:0.0102, J2s:0.0005, J3s:0.0142, J4s:0.0004, J5s:0.0003, J6s:0.0016, J7s:0.0002, J8s:0.0016, J9s:0.0251, JTs:0.0029, JJ:0.035, QJo:0.0003, AJo:0.0097, Q3s:0.0011, Q4s:0.0001, Q5s:0.0004, Q6s:0.001, Q7s:0.0023, Q8s:0.0249, Q9s:0.0026, QTs:0.0012, QJs:0.0072, QQ:0.0158, KQo:0.0148, AQo:0.0503, K2s:0.1918, K3s:0.0238, K4s:0.0158, K5s:0.0923, K6s:0.2675, K7s:0.0132, K8s:0.0345, K9s:0.0418, KTs:0.1134, KJs:0.0288, KQs:0.1832, KK:0.1792, AKo:0.2167, A2s:0.1037, A3s:0.629, A4s:0.5717, A5s:0.5688, A6s:0.3456, A7s:0.3908, A8s:0.4328, A9s:0.5899, ATs:0.2758, AJs:0.183, AQs:0.0147, AKs:0.0167, AA:0.0024"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BB:3BET@8",
    "heroPos": "HJ",
    "eff": 35,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.135, 33:0.152, 44:0.331, 54s:0.0914, 55:0.3029, 64s:0.0248, 65s:0.5194, 66:0.4896, 74s:0.0001, 75s:0.0021, 76s:0.1854, 77:0.1118, 86s:0.0042, 87s:0.0643, 88:0.3588, 98s:0.0313, 99:0.1671, T9s:0.0054, TT:0.0208, ATo:0.001, JJ:0.0339, AJo:0.0001, Q9s:0.0004, QQ:0.511, AQo:0.4473, KTs:0.0672, KK:0.4291, AKo:0.0612, A2s:0.1233, A3s:0.3405, A4s:0.2521, A5s:0.2897, A6s:0.1929, A7s:0.3492, A8s:0.1464, A9s:0.298, ATs:0.3254, AJs:0.2529, AQs:0.6428, AKs:0.0684, AA:0.0003"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "52o:0.003, A2o:0.0217, A3o:0.0211, 54o:0.0012, A4o:0.0235, 52s:0.0025, 53s:0.0024, 55:0.0086, 65o:0.0028, T5o:0.0017, A5o:0.0259, 66:0.0026, A6o:0.0236, A7o:0.0202, 85s:0.0029, A8o:0.0234, 99:0.0023, T9o:0.0019, A9o:0.023, T2s:0.0015, T5s:0.0028, T9s:0.0001, TT:0.0029, ATo:0.0228, J2s:0.0023, J5s:0.0044, JTs:0.0003, JJ:0.0057, AJo:0.0209, K6s:0.0017, KTs:0.0053, KK:0.0457, A2s:0.0267, A3s:0.0166, A4s:0.0273, A5s:0.0228, A6s:0.024, A7s:0.0273, A8s:0.0226, A9s:0.0237, ATs:0.0256, AJs:0.0228, AA:0.9997"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.0006, A2o:0.0046, A3o:0.004, 43s:0.0003, 44:0.0002, A4o:0.0041, 53s:0.0004, 54s:0.0001, 55:0.0001, A5o:0.0059, 64s:0.0003, 65s:0.0052, 66:0.0147, A6o:0.0048, 73s:0.0004, 74s:0.0009, 75s:0.0042, 76s:0.0043, 77:0.0197, A7o:0.0048, 85s:0.0002, 87s:0.0039, 88:0.0026, 98o:0.0007, A8o:0.0048, 95s:0.0007, 96s:0.0005, 97s:0.0011, 98s:0.0013, 99:0.0536, T9o:0.0006, A9o:0.0053, T3s:0.0006, T7s:0.0003, T9s:0.0004, TT:0.0658, ATo:0.0038, J4s:0.0007, J7s:0.0005, J8s:0.001, J9s:0.0017, JTs:0.002, JJ:0.0583, AJo:0.0051, Q9s:0.0002, QJs:0.0001, QQ:0.0013, AQo:0.2061, K6s:0.0006, K8s:0.0002, KTs:0.0003, KJs:0.0007, KQs:0.0014, KK:0.524, AKo:0.9375, A2s:0.2787, A3s:0.3049, A4s:0.3167, A5s:0.3124, A6s:0.2499, A7s:0.2966, A8s:0.2588, A9s:0.2401, ATs:0.2873, AJs:0.2782, AQs:0.3568, AKs:0.9316"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@21",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0041, 44:0.004, 55:0.0013, 66:0.4921, 77:0.5537, 88:0.7437, 99:0.6629, TT:0.365, JJ:0.9906, QQ:0.9874, KQs:0.0001, KK:0.2424, AKo:0.1691, AQs:0.0038, AKs:0.1296, AA:0.7573"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0037, 44:0.0038, 55:0.0033, 66:0.0088, 77:0.2014, 88:0.0103, 99:0.0038, TT:0.0023, JJ:0.0026, QQ:0.0125, KQs:0.0001, KK:0.7576, AKo:0.8309, AQs:0.2769, AKs:0.8704, AA:0.2427"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@21",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, 99:0.0004, TT:0.0039, JJ:0.415, QQ, KK, AKo, AQs:0.1787, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@21",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "99:0.0001, JJ:0.0001, QQ:0.168, KK, AKo:0.9888, AQs:0.0001, AKs:0.9851, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@21",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0008, J8s:0.0001, QQ:0.7989, KJs:0.0001, KK, AKo:0.9993, AKs:0.9925, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "LJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 12bb",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "A3o:0.0009, 43s:0.0009, 44:0.0016, 53s:0.0168, 54s:0.0034, 55:0.0008, 63s:0.001, 64s:0.1489, 76s:0.0344, 77:0.0002, 85s:0.0002, 86s:0.0001, 87s:0.008, 88:0.036, 92s:0.0011, 93s:0.0001, 97s:0.0001, 98s:0.0007, T8s:0.0001, T9s:0.0007, TT:0.0003, QTo:0.0001, J6s:0.0072, J8s:0.0002, J9s:0.0021, JTs:0.0009, JJ:0.0018, Q2s:0.0001, Q3s:0.0037, Q8s:0.0002, QTs:0.0001, QJs:0.0094, QQ:0.3212, AQo:0.0242, K2s:0.0022, K3s:0.0001, K5s:0.0097, K6s:0.0001, K9s:0.0026, KTs:0.0001, KQs:0.0003, AKo:0.0712, A2s:0.0003, A3s:0.0007, A4s:0.0003, A5s:0.0001, A6s:0.0495, A8s:0.002, A9s:0.0216, ATs:0.0561, AJs:0.0157, AQs:0.4135, AKs:0.0007, AA:0.1099"
      },
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "22:0.008, J2o:0.0296, A2o:0.0142, 33:0.0351, J3o:0.0048, K3o:0.027, A3o:0.0342, 43s:0.0207, 44:0.0037, J4o:0.0126, A4o:0.0166, 54s:0.036, 55:0.0166, A5o:0.048, 63s:0.0005, 64s:0.0484, 65s:0.0017, 66:0.0122, J6o:0.0202, A6o:0.0168, 76s:0.0485, 77:0.0342, J7o:0.0303, K7o:0.0118, A7o:0.0603, 82s:0.0086, 85s:0.0019, 86s:0.0184, 87s:0.0113, 88:0.0298, J8o:0.0248, A8o:0.0096, 93s:0.0001, 97s:0.0033, 98s:0.0346, 99:0.079, J9o:0.0063, A9o:0.052, T3s:0.0012, T8s:0.0569, T9s:0.0023, TT:0.0046, JTo:0.0105, KTo:0.0017, ATo:0.0029, J2s:0.0253, J3s:0.0689, J5s:0.0229, J6s:0.0515, J9s:0.0001, JTs:0.05, JJ:0.2454, KJo:0.0795, AJo:0.1715, Q3s:0.0007, QQ:0.4747, AQo:0.0026, K5s:0.0004, K7s:0.0132, K8s:0.0365, K9s:0.0857, KTs:0.0311, KJs:0.066, KQs:0.0012, KK:0.9272, AKo:0.4003, A2s:0.2452, A3s:0.207, A4s:0.2437, A6s:0.2504, A7s:0.0737, A8s:0.0646, A9s:0.1466, ATs:0.0913, AJs:0.3139, AQs:0.0804, AKs:0.3003, AA:0.8438"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.012, A2o:0.0015, 32s:0.0045, 33:0.0412, A3o:0.0008, 43s:0.0002, 44:0.0005, A4o:0.0001, 53s:0.0134, 54s:0.043, 55:0.0103, A5o:0.0023, 63s:0.0001, 64s:0.0121, 73s:0.0003, 75s:0.0296, 76s:0.0985, 77:0.001, 87o:0.0009, 85s:0.001, 86s:0.0015, 87s:0.0463, 88:0.0624, A8o:0.0119, 92s:0.0003, 97s:0.0059, 98s:0.0197, 99:0.154, A9o:0.0004, T8s:0.0567, TT:0.0017, J3s:0.0068, J4s:0.0002, J8s:0.0158, J9s:0.0124, JJ:0.2352, KJo:0.0001, AJo:0.0202, Q2s:0.0001, Q3s:0.005, QQ:0.1055, AQo:0.0015, K2s:0.0139, K3s:0.0033, K4s:0.008, K5s:0.0035, K7s:0.0052, K8s:0.0186, K9s:0.05, KTs:0.0858, KJs:0.0982, KK:0.0728, AKo:0.5258, A2s:0.1124, A3s:0.0544, A4s:0.2663, A5s:0.0011, A6s:0.1275, A7s:0.0735, A8s:0.0946, A9s:0.1003, ATs:0.0209, AJs:0.3529, AQs:0.0817, AKs:0.6988, AA:0.0463"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "HJ",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 21bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0005, 33:0.0021, 44:0.0125, 53s:0.0016, 54s:0.0002, 55:0.0198, 65o:0.0001, 62s:0.0001, 63s:0.0016, 64s:0.0007, 65s:0.002, 66:0.1109, 74s:0.0001, 75s:0.0006, 76s:0.0012, 77:0.062, 85s:0.0009, 86s:0.0004, 87s:0.0016, 88:0.051, A8o:0.0001, 99:0.0056, T7s:0.0003, T8s:0.0004, TT:0.0108, ATo:0.0001, J9s:0.0007, JJ:0.0097, QQ:0.1174, AQo:0.0013, K4s:0.0003, K5s:0.001, K6s:0.0008, K7s:0.0004, K8s:0.0019, K9s:0.0011, KTs:0.0021, KJs:0.002, KQs:0.0004, KK:0.0002, AKo:0.0016, A2s:0.0002, A3s:0.0003, A4s:0.0012, A5s:0.0007, A6s:0.0009, A7s:0.0003, A8s:0.0014, A9s:0.0005, ATs:0.0001, AJs:0.0003, AQs:0.1086, AKs:0.0055, AA:0.6234"
      },
      {
        "action": "4bet 21bb",
        "min": 0.0001,
        "range": "22:0.0617, 33:0.1238, A3o:0.0106, 44:0.1402, A4o:0.0657, 53s:0.0002, 54s:0.1082, 55:0.3287, A5o:0.0841, 63s:0.0001, 64s:0.0509, 65s:0.1497, 66:0.3377, 75s:0.0601, 76s:0.0903, 77:0.2847, A7o:0.0018, 86s:0.0757, 87s:0.1264, 88:0.2479, A8o:0.0015, 97s:0.0189, 98s:0.0563, 99:0.2799, T8s:0.0005, T9s:0.0001, TT:0.2179, ATo:0.0004, JTs:0.008, JJ:0.6205, AJo:0.001, QQ:0.8005, AQo:0.4118, K3s:0.0007, K9s:0.0723, KTs:0.0406, KQs:0.0001, KK:0.9998, AKo:0.9984, A2s:0.6486, A3s:0.6516, A4s:0.7808, A5s:0.7736, A6s:0.4546, A7s:0.7591, A8s:0.5916, A9s:0.3956, ATs:0.56, AJs:0.7142, AQs:0.7905, AKs:0.9945, AA:0.3766"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "SB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0003, 66:0.0087, 88:0.0002, 96s:0.0114, 98s:0.0068, A9o:0.017, ATo:0.0011, J8s:0.0003, JTs:0.0684, JJ:0.0006, Q8s:0.0001, QJs:0.0003, QQ:0.0332, AQo:0.0006, K9s:0.0001, KTs:0.0002, KJs:0.0014, KK:0.995, AKo:0.5972, A2s:0.0742, A3s:0.0629, A5s:0.024, A6s:0.0359, A7s:0.2372, A8s:0.4497, A9s:0.0204, ATs:0.0733, AJs:0.0828, AQs:0.0002, AKs:0.9128, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|BTN:3BET@7",
    "heroPos": "BB",
    "eff": 21.25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "33:0.0972, A5o:0.0146, 95s:0.0001, TT:0.0793, ATo:0.0342, J8s:0.0001, JJ:0.03, AJo:0.0145, QQ:0.0006, K7s:0.0417, KK:0.9614, AKo:0.5013, A3s:0.0001, A5s:0.1177, A7s:0.0001, A8s:0.019, AQs:0.0008, AKs:0.2638, AA:0.702"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A4o:0.0116, 65s:0.0111, 66:0.0002, 76s:0.0023, 99:0.0043, T5s:0.0001, TT:0.0292, J8s:0.0007, JTs:0.0001, JJ:0.0941, AJo:0.0358, Q7s:0.0001, QQ:0.0949, K2s:0.0001, K8s:0.0005, KTs:0.0002, KK:0.038, AKo:0.3314, A2s:0.1846, A3s:0.0037, A4s:0.0248, A5s:0.1431, A6s:0.0054, A7s:0.0985, A8s:0.0058, A9s:0.0001, ATs:0.1294, AQs:0.1484, AKs:0.5299, AA:0.298"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@18.5",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "44:0.0011, 55:0.0007, 66:0.141, 77:0.0196, 88:0.1212, 99:0.0001, TT:0.0368, JJ:0.9869, QQ:0.9634, KK:0.0367, AKo:0.892, A4s:0.0002, AQs:0.0096, AKs:0.6242, AA:0.9841"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "55:0.0001, 66:0.001, 88:0.0006, 99:0.0002, TT:0.0001, JJ:0.0131, QJs:0.0001, QQ:0.0366, KK:0.9633, AKo:0.108, A4s:0.0001, AQs:0.0053, AKs:0.3758, AA:0.0159"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@18.5",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0001, 77:0.0001, 99:0.0008, TT:0.1624, JJ:0.9988, QQ, KK, AKo, AJs:0.0001, AQs:0.725, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@18.5",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "QQ:0.835, KK, AKo:0.9354, AQs:0.0001, AKs:0.9947, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@18.5",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "JJ:0.0013, QQ:0.9703, K7s:0.0001, KK, AKo:0.9865, A5s:0.0001, AKs:0.9543, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@18.5",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0003, 99:0.0003, TT:0.0004, Q9s:0.0001, QQ:0.9959, KK, AKo:0.9991, ATs:0.0001, AQs:0.0001, AKs:0.9839, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "LJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 12bb",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.101, 43s:0.011, 44:0.0068, 53s:0.001, 54s:0.0626, 55:0.093, A5o:0.0023, 62s:0.0001, 63s:0.0104, 64s:0.0585, 65s:0.2958, 66:0.2071, 75s:0.0002, 76s:0.4459, 77:0.0023, 84s:0.0001, 86s:0.0435, 87s:0.0013, 88:0.0445, 95s:0.0032, 98s:0.0476, 99:0.0001, T3s:0.0001, T8s:0.0027, J4s:0.0001, J8s:0.0168, J9s:0.0005, JTs:0.0011, JJ:0.0076, Q5s:0.0001, Q9s:0.0004, QJs:0.0001, QQ:0.3401, AQo:0.2713, K5s:0.0202, K7s:0.0003, K8s:0.0045, KJs:0.0068, KQs:0.0175, KK:0.0034, AKo:0.0071, A2s:0.001, A3s:0.0362, A4s:0.1676, A5s:0.0212, A6s:0.0099, A7s:0.0512, A8s:0.0002, A9s:0.0013, ATs:0.0214, AJs:0.0002, AQs:0.9955, AKs:0.0292, AA:0.0765"
      },
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "22:0.025, A2o:0.0004, 33:0.0256, A3o:0.0027, 43s:0.0011, 44:0.0075, A4o:0.0377, 52s:0.0021, 53s:0.0009, 54s:0.1111, 55:0.0414, A5o:0.0085, 63s:0.0032, 64s:0.0104, 65s:0.1927, 66:0.0414, 75s:0.0021, 76s:0.157, 77:0.4611, 86s:0.002, 87s:0.0012, 88:0.0018, 95s:0.0012, 96s:0.0009, 98s:0.0115, 99:0.3285, A9o:0.0001, ATo:0.0007, J8s:0.0041, J9s:0.0004, JJ:0.9212, AJo:0.0217, Q5s:0.0002, QQ:0.5524, AQo:0.0955, K3s:0.0001, K5s:0.064, K6s:0.0334, K7s:0.0469, K8s:0.0025, K9s:0.0234, KTs:0.0049, KJs:0.1807, KQs:0.0001, KK:0.5064, AKo:0.55, A2s:0.2486, A3s:0.3572, A4s:0.3471, A5s:0.1718, A6s:0.5396, A7s:0.078, A8s:0.1106, A9s:0.0486, ATs:0.0835, AJs:0.3371, AQs:0.0022, AKs:0.2921, AA:0.9083"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "22:0.0056, 33:0.1363, 42s:0.0001, 43s:0.0051, 44:0.0395, A4o:0.0154, 53s:0.0005, 54s:0.1489, 55:0.059, 63s:0.0011, 64s:0.0003, 65s:0.1128, 66:0.0602, 75s:0.0041, 76s:0.0811, 77:0.0583, 86s:0.0008, 87s:0.0001, 88:0.0806, 96s:0.0003, 99:0.0911, T8s:0.0006, TT:0.0004, J5s:0.0001, J7s:0.0001, J9s:0.0001, JJ:0.0006, AJo:0.0001, Q5s:0.0004, Q6s:0.0001, QQ:0.0085, K2s:0.0001, K4s:0.3551, K5s:0.0216, K7s:0.001, K8s:0.0026, KTs:0.0003, KJs:0.0392, KK:0.4903, AKo:0.4428, A2s:0.4197, A3s:0.4062, A4s:0.3307, A5s:0.5617, A6s:0.1795, A7s:0.4715, A8s:0.034, A9s:0.285, ATs:0.0565, AJs:0.0006, AQs:0.0016, AKs:0.6787, AA:0.0152"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "HJ",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 18.5bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0002, 33:0.0001, 44:0.0066, 54s:0.0002, 55:0.1581, 65s:0.0001, 66:0.0569, 76s:0.0013, 77:0.0691, 88:0.1108, 96s:0.0001, 98s:0.0001, 99:0.0771, T7s:0.0001, T9s:0.0001, TT:0.0257, J7s:0.0001, J9s:0.0001, JJ:0.0279, QQ:0.0396, AQo:0.0406, K2s:0.0002, KTs:0.0343, KJs:0.0714, KQs:0.0002, A2s:0.0281, A3s:0.1145, A4s:0.035, A5s:0.0685, A6s:0.0045, A7s:0.0083, AJs:0.0001, AQs:0.2823"
      },
      {
        "action": "4bet 18.5bb",
        "min": 0.0001,
        "range": "22:0.0045, 33:0.0107, 44:0.0705, 55:0.2313, 66:0.1789, 77:0.1321, 88:0.1926, 97s:0.0001, 99:0.1205, TT:0.2343, JJ:0.4057, QQ:0.96, AQo:0.5078, KK, AKo, A2s:0.0336, A3s:0.0636, A4s:0.0967, A5s:0.1316, A6s:0.0272, A7s:0.035, A8s:0.0198, A9s:0.031, ATs:0.0563, AJs:0.0304, AQs:0.7177, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "BTN",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "96s:0.0001, T9s:0.0002, QTs:0.0001, QQ:0.0612, K9s:0.0003, KQs:0.0001, KK:0.9994, AKo:0.5177, A3s:0.1101, A4s:0.0001, A5s:0.0046, A6s:0.2432, A7s:0.0001, A9s:0.0786, ATs:0.4839, AJs:0.0269, AKs:0.5292, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "SB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "55:0.0001, 75s:0.0004, 99:0.0001, T2s:0.0001, T7s:0.0038, T8s:0.001, JJ:0.0006, Q4s:0.0001, Q9s:0.0001, QJs:0.0001, QQ:0.0116, K4s:0.0002, K8s:0.0002, K9s:0.0002, KQs:0.0181, KK:0.9992, AKo:0.6516, A2s:0.0018, A3s:0.0024, A4s:0.2916, A5s:0.0446, A6s:0.0099, A7s:0.003, A8s:0.1255, A9s:0.1038, ATs:0.034, AQs:0.0061, AKs:0.9921, AA:0.9999"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|CO:3BET@7",
    "heroPos": "BB",
    "eff": 18.75,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "4bet 12bb",
      "All-in"
    ],
    "bands": [
      {
        "action": "4bet 12bb",
        "min": 0.0001,
        "range": "42s:0.046, 55:0.0051, A5o:0.0438, 65s:0.0556, 88:0.086, 99:0.007, TT:0.0001, JJ:0.0221, QTs:0.0001, QQ:0.0572, KTs:0.0036, KK:0.5637, AKo:0.6129, A3s:0.1575, A4s:0.0245, A5s:0.0004, A6s:0.0001, A7s:0.0126, AJs:0.0985, AQs:0.0222, AKs:0.0825, AA:0.9082"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "98s:0.0001, TT:0.0003, QQ:0.0074, KTs:0.0001, KK:0.4363, AKo:0.2299, A5s:0.0071, A9s:0.0001, AQs:0.0005, AKs:0.7458, AA:0.0917"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@24.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "55:0.0068, 66:0.0002, 88:0.0829, 99:0.2216, TT:0.0814, JJ:0.4594, QQ:0.9708, KK:0.8835, AKo:0.0215, A3s:0.0002, A5s:0.0002, AQs:0.0536, AKs:0.2954, AA:0.3922"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "44:0.002, 54s:0.0001, 55:0.0116, 66:0.0518, 77:0.0796, 88:0.1125, 99:0.2782, TT:0.0861, JJ:0.4603, QQ:0.029, KK:0.1165, AKo:0.9784, A3s:0.0002, AQs:0.116, AKs:0.7046, AA:0.6078"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@24.75",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ, KK, AKo, AQs:0.0071, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "All-in"
    ],
    "bands": [
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "74s:0.0001, QQ:0.2135, K5s:0.0002, KK, AKo:0.9995, AQs:0.0004, AKs:0.9914, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@8",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 37.25bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0009, 44:0.0002, 52s:0.0007, 54s:0.0642, 55:0.0197, A5o:0.0004, 65s:0.0002, 66:0.0747, 72s:0.0001, 76s:0.0004, 77:0.1224, A7o:0.0018, 87s:0.0029, 88:0.0079, 97s:0.0001, 99:0.0023, T4s:0.002, T8s:0.0003, TT:0.0001, J8s:0.0006, JJ:0.0031, Q2s:0.0001, Q6s:0.0003, QQ:0.2754, AQo:0.0465, K2s:0.0005, K6s:0.0012, K7s:0.0001, K8s:0.0036, K9s:0.0121, KTs:0.0761, KJs:0.0032, KK:0.0001, AKo:0.138, A2s:0.0019, A3s:0.0541, A4s:0.0002, A5s:0.0091, A6s:0.0074, A7s:0.005, A8s:0.0001, A9s:0.0368, ATs:0.0003, AJs:0.0002, AQs:0.1988, AKs:0.0253, AA:0.1282"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "22:0.002, J2o:0.0004, A2o:0.0402, 32s:0.0008, 33:0.0797, 73o:0.0002, J3o:0.0009, A3o:0.0078, 42s:0.0008, 43s:0.0003, 44:0.0007, K4o:0.0005, A4o:0.0003, 53s:0.0009, 54s:0.0847, 55:0.001, K5o:0.0003, A5o:0.0098, 62s:0.0004, 65s:0.0051, 66:0.1149, J6o:0.0004, K6o:0.0001, A6o:0.0806, 73s:0.0001, 74s:0.0003, 75s:0.0003, 77:0.1098, J7o:0.0005, K7o:0.0037, A7o:0.2134, 87s:0.0098, 88:0.225, J8o:0.0004, A8o:0.0121, 93s:0.0014, 95s:0.0003, 96s:0.0001, 97s:0.0025, 98s:0.0038, 99:0.001, K9o:0.0124, A9o:0.0752, T3s:0.0006, TT:0.0057, JTo:0.0001, KTo:0.0008, ATo:0.0067, J2s:0.0042, J6s:0.0024, J8s:0.0003, J9s:0.0022, JJ:0.0688, KJo:0.0012, AJo:0.0619, Q8s:0.0001, QQ:0.4721, AQo:0.4246, K2s:0.0195, K3s:0.0682, K4s:0.0376, K5s:0.0161, K6s:0.0628, K7s:0.0002, K8s:0.0054, KTs:0.1263, KJs:0.0049, KK:0.5548, AKo:0.7036, A2s:0.0487, A3s:0.0028, A4s:0.0068, A5s:0.0143, A6s:0.039, A7s:0.0858, A8s:0.2973, A9s:0.0012, ATs:0.0025, AJs:0.0477, AQs:0.1143, AKs:0.2428, AA:0.8494"
      },
      {
        "action": "4bet 37.25bb",
        "min": 0.0001,
        "range": "A2o:0.0003, 33:0.0407, 42s:0.0001, 43s:0.0001, 44:0.0019, 53s:0.0049, 54s:0.0293, 62s:0.0004, 64s:0.0014, 65s:0.0068, 66:0.0154, 74s:0.0005, 75s:0.0024, 77:0.0862, A7o:0.0005, 86s:0.0018, 87s:0.0062, 88:0.0531, 97s:0.0458, 98s:0.0122, 99:0.0014, T3s:0.0006, T8s:0.0003, TT:0.0009, ATo:0.0003, J4s:0.0006, J6s:0.0008, J8s:0.0027, J9s:0.006, JJ:0.0205, KJo:0.0012, AJo:0.0028, Q4s:0.0006, Q6s:0.0005, QTs:0.0001, QQ:0.2041, AQo:0.0002, K2s:0.0123, K4s:0.0032, K5s:0.0122, K7s:0.0002, K8s:0.0027, K9s:0.0018, KTs:0.038, KJs:0.0011, KK:0.4451, AKo:0.1583, A2s:0.1435, A3s:0.0495, A4s:0.1982, A5s:0.2318, A6s:0.142, A7s:0.5553, A8s:0.0567, A9s:0.8334, ATs:0.0928, AJs:0.407, AQs:0.0002, AKs:0.7318, AA:0.0223"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@8",
    "heroPos": "HJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.083, 33:0.0848, 43s:0.0001, 44:0.0974, 54s:0.0003, 55:0.1167, A5o:0.0001, 64s:0.0001, 65s:0.0013, 66:0.1619, 74s:0.0001, 76s:0.0001, 77:0.2007, 88:0.1317, 98s:0.0001, 99:0.0479, A9o:0.0001, T9s:0.0001, TT:0.0011, JJ:0.0114, QQ:0.4023, AQo:0.0346, K7s:0.0003, KTs:0.0274, KJs:0.0206, KK:0.0018, AKo:0.003, A2s:0.0002, A3s:0.0001, A4s:0.0011, A5s:0.0002, A8s:0.0002, A9s:0.0012, AQs:0.229, AKs:0.0013, AA:0.8138"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.0013, A2o:0.0009, 33:0.0214, A3o:0.001, 44:0.0848, A4o:0.0008, 54s:0.0003, 55:0.0527, A5o:0.0011, 64s:0.0001, 65s:0.2468, 66:0.1057, A6o:0.0008, 76s:0.0051, 77:0.2922, A7o:0.0009, 87s:0.009, 88:0.189, A8o:0.0006, 98s:0.0007, 99:0.1744, A9o:0.0007, TT:0.1287, ATo:0.0009, JJ:0.1724, AJo:0.0007, QQ:0.5733, AQo:0.238, K5s:0.0089, K7s:0.0124, K9s:0.0319, KTs:0.0322, KJs:0.0325, KK:0.9982, AKo:0.997, A2s:0.7586, A3s:0.7585, A4s:0.7816, A5s:0.8392, A6s:0.7315, A7s:0.7083, A8s:0.7126, A9s:0.5273, ATs:0.7544, AJs:0.6721, AQs:0.473, AKs:0.9987, AA:0.1862"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|HJ:CALL@2.3|SB:3BET@8",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0185, A7o:0.0029, 99:0.016, JJ:0.0713, AJo:0.0307, QQ:0.0001, K4s:0.0155, K9s:0.0828, KJs:0.0002, KK:0.6429, AKo:0.2418, A4s:0.0717, A5s:0.2925, A7s:0.0372, ATs:0.0036, AJs:0.0002, AQs:0.0003, AKs:0.0996, AA:0.5102"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "A3o:0.0005, 42s:0.0016, 54s:0.0033, A6o:0.0013, 75s:0.0002, 88:0.0014, 96s:0.0003, 98s:0.0002, 99:0.001, TT:0.0004, JTs:0.0029, JJ:0.0707, Q7s:0.0005, Q9s:0.0001, QQ:0.0509, AQo:0.0002, K9s:0.0033, KJs:0.0029, KK:0.357, AKo:0.3369, A2s:0.0003, A3s:0.0317, A4s:0.0033, A5s:0.3838, A8s:0.0009, A9s:0.0052, ATs:0.1204, AJs:0.0008, AQs:0.013, AKs:0.7105, AA:0.4897"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@24.75|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "QQ:0.0009, KK, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8|BB:4BET@13.7",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "5bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 62s:0.0007, 73s:0.0006, 86s:0.0001, 88:0.0004, 99:0.0004, T8s:0.0002, T9s:0.0001, J3s:0.0002, J6s:0.0001, J7s:0.0003, J8s:0.0001, JJ:0.0001, AJo:0.0008, Q5s:0.0001, Q7s:0.0003, Q9s:0.0005, QQ:0.0398, AQo:0.0213, K3s:0.0001, K9s:0.0002, KQs:0.0001, KK:0.1405, AKo:0.0005, A2s:0.0072, A4s:0.3354, A6s:0.0002, A7s:0.01, ATs:0.0039, AJs:0.0871, AQs:0.1792, AKs:0.0098, AA:0.0029"
      },
      {
        "action": "5bet 34.75bb",
        "min": 0.0001,
        "range": "K2o:0.0001, 33:0.0036, A3o:0.0053, 42s:0.0001, 44:0.0286, 53s:0.0001, 54s:0.0024, 55:0.1477, A5o:0.0001, 62s:0.0001, 66:0.208, 73s:0.0007, 74s:0.0005, 76s:0.0003, 77:0.0964, 82s:0.0002, 84s:0.0002, 86s:0.0004, 87s:0.0395, A8o:0.0001, 93s:0.0004, 97s:0.0296, 99:0.1479, T4s:0.0001, T7s:0.0001, T8s:0.0001, T9s:0.0002, TT:0.0049, J2s:0.0009, J3s:0.0005, J4s:0.0001, J5s:0.0001, J6s:0.0002, J7s:0.0001, J8s:0.0002, JJ:0.0009, Q2s:0.0002, Q5s:0.0002, Q7s:0.0006, Q8s:0.0001, Q9s:0.0003, QTs:0.0002, QQ:0.0015, K4s:0.0002, K9s:0.0012, KTs:0.0004, KJs:0.0002, KK:0.2192, AKo:0.9763, A2s:0.075, A3s:0.0024, A4s:0.0151, A5s:0.3153, A6s:0.2783, A7s:0.0077, A9s:0.0001, AJs:0.1324, AQs:0.0147, AKs:0.9765, AA:0.9971"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8|BB:4BET@13.7",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0003, 33:0.0001, 43s:0.0021, 44:0.0009, 54o:0.0001, 54s:0.0089, 55:0.0009, 65o:0.0006, 62s:0.0001, 63s:0.0004, 64s:0.0051, 65s:0.0127, 66:0.0009, 76o:0.0005, 74s:0.0003, 75s:0.0002, 76s:0.0021, 77:0.0011, 87o:0.0004, 85s:0.0008, 86s:0.0031, 87s:0.0068, 88:0.0008, 97s:0.0011, 98s:0.0004, 99:0.001, T9o:0.0003, T8s:0.0007, T9s:0.0019, TT:0.0012, JJ:0.0013, AJo:0.0007, QQ:0.8047, AQo:0.0012, KTs:0.0001, KK:0.911, AKo:0.0013, A2s:0.0004, A3s:0.01, A4s:0.0004, A5s:0.0011, A6s:0.0021, A7s:0.0029, A8s:0.0001, A9s:0.0002, ATs:0.0009, AJs:0.005, AQs:0.0162, AKs:0.0018, AA:0.0024"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "22:0.9926, A2o:0.0003, 32s:0.1718, 33:0.9932, 43o:0.0053, 53o:0.038, A3o:0.026, 42s:0.1321, 43s:0.4102, 44:0.9949, 54o:0.1494, 64o:0.0895, 74o:0.002, A4o:0.0515, 52s:0.292, 53s:0.5525, 54s:0.8818, 55:0.9934, 65o:0.292, 75o:0.0912, 85o:0.0082, A5o:0.1286, 62s:0.1064, 63s:0.3978, 64s:0.8087, 65s:0.8696, 66:0.9948, 76o:0.1629, 86o:0.0924, A6o:0.0167, 72s:0.0042, 73s:0.0735, 74s:0.4052, 75s:0.7645, 76s:0.9707, 77:0.9944, 87o:0.2694, 97o:0.0646, A7o:0.0237, 82s:0.0418, 83s:0.0527, 84s:0.1964, 85s:0.5252, 86s:0.8184, 87s:0.9597, 88:0.9945, 98o:0.1214, T8o:0.0277, A8o:0.0006, 92s:0.0413, 93s:0.0479, 94s:0.0511, 95s:0.263, 96s:0.3926, 97s:0.5494, 98s:0.6875, 99:0.9946, T9o:0.082, A9o:0.0002, T2s:0.0703, T3s:0.0406, T4s:0.0688, T5s:0.0834, T6s:0.168, T7s:0.4565, T8s:0.6762, T9s:0.7382, TT:0.9951, JTo:0.0505, ATo:0.031, J3s:0.0075, J4s:0.0245, J5s:0.0356, J6s:0.0672, J7s:0.0771, J8s:0.1307, J9s:0.3079, JTs:0.3593, JJ:0.9924, AJo:0.0023, Q2s:0.0001, Q5s:0.001, Q8s:0.0002, Q9s:0.0359, QTs:0.061, QJs:0.0001, QQ:0.1557, AQo:0.149, K3s:0.0007, K4s:0.0003, K5s:0.0009, K6s:0.0005, K7s:0.0004, K9s:0.0016, KTs:0.001, KJs:0.0051, KK:0.0878, AKo:0.9979, A2s:0.694, A3s:0.6985, A4s:0.8068, A5s:0.7826, A6s:0.467, A7s:0.5662, A8s:0.5065, A9s:0.4425, ATs:0.6048, AJs:0.5621, AQs:0.6849, AKs:0.9979, AA:0.9976"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8|BB:4BET@34.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0051, 32o:0.0001, 42o:0.0001, 72o:0.0002, J2o:0.0001, K2o:0.0001, A2o:0.0005, 33:0.0001, 43o:0.0001, 73o:0.0002, 43s:0.0007, 44:0.2739, 74o:0.0001, 53s:0.0002, 54s:0.0016, 55:0.0071, 75o:0.0001, A5o:0.0011, 62s:0.0002, 64s:0.0004, 66:0.0697, 86o:0.0002, A6o:0.0003, 74s:0.0058, 75s:0.0015, 76s:0.0011, 77:0.0166, J7o:0.0002, K7o:0.0001, A7o:0.0002, 83s:0.0003, 84s:0.0001, 85s:0.0001, 86s:0.0009, 87s:0.0001, 88:0.0167, A8o:0.0003, 96s:0.0005, 97s:0.0005, 98s:0.0003, 99:0.0012, T9o:0.0001, J9o:0.0001, Q9o:0.0008, T2s:0.0001, T4s:0.0006, T5s:0.0005, T7s:0.0009, T9s:0.001, TT:0.5279, JTo:0.0001, KTo:0.0003, ATo:0.0003, J2s:0.0002, J3s:0.0001, J4s:0.0003, J8s:0.0001, J9s:0.0002, JTs:0.004, JJ:0.8333, QJo:0.0001, AJo:0.0004, Q2s:0.0002, Q3s:0.0013, Q4s:0.0001, Q7s:0.0003, Q8s:0.0001, Q9s:0.0003, QTs:0.0025, QQ:0.8861, AQo:0.0032, K2s:0.0009, K3s:0.0002, K4s:0.0006, K6s:0.0001, K7s:0.0023, K8s:0.0008, K9s:0.0004, KTs:0.0024, KJs:0.0002, KQs:0.0002, KK:0.9845, AKo:0.4738, A2s:0.0035, A3s:0.0041, A4s:0.0027, A5s:0.0003, A6s:0.0006, A7s:0.0007, A8s:0.0058, A9s:0.0262, ATs:0.0001, AJs:0.0008, AQs:0.0004, AKs:0.9238, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8|BB:4BET@34.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.3685, 33:0.4039, 44:0.9022, 55:0.9148, 66:0.9842, 77:0.9915, 88:0.9898, 99:0.9874, TT:0.9944, JJ:0.9961, QQ:0.9971, AQo:0.001, KQs:0.0007, KK, AKo:0.9981, A7s:0.0001, A9s:0.0006, ATs:0.0003, AJs:0.0017, AQs:0.0076, AKs:0.9998, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:3BET@8|LJ:4BET@24.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88, 99, TT, JJ, AJo:0.5489, QQ, AQo, KK, AKo, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@12",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0095, 32o:0.0002, 52o:0.0022, 62o:0.0002, 72o:0.0027, 82o:0.0044, 92o:0.0007, T2o:0.0003, J2o:0.0025, Q2o:0.0005, A2o:0.0039, 32s:0.0298, 33:0.0163, 43o:0.0004, 53o:0.0015, 63o:0.0004, 73o:0.0011, 93o:0.0011, T3o:0.0051, J3o:0.0004, Q3o:0.0001, K3o:0.0146, A3o:0.012, 42s:0.0001, 43s:0.0141, 44:0.0014, 54o:0.0008, 64o:0.0007, 74o:0.0745, 84o:0.0036, 94o:0.0004, T4o:0.0005, J4o:0.01, Q4o:0.0058, K4o:0.0001, A4o:0.0001, 52s:0.2045, 53s:0.0133, 54s:0.005, 55:0.0037, 65o:0.0004, 75o:0.0001, 85o:0.0006, 95o:0.0013, T5o:0.0031, J5o:0.0027, Q5o:0.0001, K5o:0.0001, A5o:0.0025, 62s:0.2717, 63s:0.0006, 64s:0.0744, 65s:0.1427, 66:0.0588, 76o:0.0012, 86o:0.1298, 96o:0.003, T6o:0.0061, J6o:0.0015, Q6o:0.005, K6o:0.0096, A6o:0.024, 72s:0.0021, 73s:0.002, 74s:0.0001, 75s:0.1595, 76s:0.2317, 77:0.0065, 87o:0.0173, T7o:0.0041, Q7o:0.0003, K7o:0.0037, A7o:0.0009, 82s:0.0037, 83s:0.0065, 84s:0.0048, 85s:0.0004, 86s:0.0054, 87s:0.0002, 88:0.02, 98o:0.0123, T8o:0.0332, J8o:0.0357, Q8o:0.0007, K8o:0.0011, A8o:0.0014, 92s:0.0486, 93s:0.0276, 94s:0.0017, 95s:0.0026, 96s:0.0023, 97s:0.073, 98s:0.188, 99:0.0139, T9o:0.0049, J9o:0.0035, Q9o:0.0038, K9o:0.1084, A9o:0.0004, T2s:0.0008, T3s:0.0007, T4s:0.0751, T5s:0.03, T6s:0.0196, T7s:0.0014, T8s:0.0897, T9s:0.2876, TT:0.0739, JTo:0.0495, QTo:0.0061, KTo:0.0003, ATo:0.0092, J2s:0.0084, J3s:0.0071, J4s:0.028, J5s:0.007, J6s:0.0417, J7s:0.0718, J8s:0.0002, J9s:0.1487, JTs:0.4132, JJ:0.1445, QJo:0.0055, KJo:0.004, AJo:0.0644, Q2s:0.1381, Q3s:0.0064, Q4s:0.0247, Q5s:0.0416, Q6s:0.0129, Q7s:0.0032, Q8s:0.0279, Q9s:0.0057, QTs:0.0017, QJs:0.1147, QQ:0.0001, KQo:0.0106, AQo:0.2524, K2s:0.0001, K3s:0.0057, K4s:0.0175, K5s:0.0007, K6s:0.0864, K7s:0.7333, K8s:0.0004, K9s:0.0983, KTs:0.1576, KJs:0.0532, KQs:0.022, KK:0.0227, AKo:0.1641, A2s:0.0031, A3s:0.0004, A4s:0.0308, A5s:0.0992, A6s:0.0582, A7s:0.0054, A8s:0.0267, A9s:0.0079, ATs:0.1168, AJs:0.0074, AQs:0.0342, AKs:0.0481"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.7451, 32o:0.0007, 42o:0.4834, 52o:0.1299, 62o:0.0991, 72o:0.0005, 82o:0.1618, 92o:0.0246, T2o:0.3387, J2o:0.03, Q2o:0.3623, K2o:0.0007, A2o:0.1985, 32s:0.1706, 33:0.9631, 43o:0.0002, 53o:0.735, 63o:0.033, 73o:0.0258, 83o:0.0354, 93o:0.0005, T3o:0.0392, J3o:0.0017, Q3o:0.0047, K3o:0.3224, A3o:0.0028, 42s:0.3978, 43s:0.6256, 44:0.9335, 54o:0.0048, 64o:0.1636, 74o:0.1721, 84o:0.0591, 94o:0.1739, T4o:0.5464, J4o:0.1443, Q4o:0.2948, K4o:0.0004, A4o:0.4884, 52s:0.3393, 53s:0.8409, 54s:0.0113, 55:0.8954, 65o:0.0244, 75o:0.4973, 85o:0.5149, 95o:0.3303, T5o:0.4627, J5o:0.0819, Q5o:0.0721, K5o:0.3702, A5o:0.2334, 62s:0.0148, 63s:0.0528, 64s:0.2169, 65s:0.7989, 66:0.4312, 76o:0.052, 86o:0.2412, 96o:0.3379, T6o:0.1652, J6o:0.4572, Q6o:0.1424, K6o:0.4576, A6o:0.4994, 72s:0.0144, 73s:0.81, 74s:0.0052, 75s:0.7709, 76s:0.5075, 77:0.724, 87o:0.002, 97o:0.1263, T7o:0.0099, J7o:0.0014, Q7o:0.0002, K7o:0.013, A7o:0.0266, 82s:0.0001, 83s:0.0016, 84s:0.113, 85s:0.0009, 86s:0.1259, 87s:0.8294, 88:0.6276, 98o:0.0578, T8o:0.043, J8o:0.3584, Q8o:0.3634, K8o:0.0006, A8o:0.0054, 92s:0.498, 93s:0.0094, 94s:0.9462, 95s:0.0942, 96s:0.001, 97s:0.3226, 98s:0.4279, 99:0.9297, T9o:0.0461, J9o:0.0206, Q9o:0.003, K9o:0.3055, A9o:0.9316, T2s:0.1402, T3s:0.3545, T4s:0.4806, T5s:0.1884, T6s:0.0218, T7s:0.0605, T8s:0.6266, T9s:0.0397, TT:0.4497, JTo:0.1091, QTo:0.0027, KTo:0.2292, ATo:0.4886, J2s:0.0001, J3s:0.0368, J4s:0.3251, J5s:0.0019, J6s:0.3662, J7s:0.3386, J8s:0.3965, J9s:0.1022, JTs:0.189, JJ:0.2026, QJo:0.387, KJo:0.085, AJo:0.0525, Q2s:0.0324, Q3s:0.3414, Q4s:0.0011, Q5s:0.1591, Q6s:0.7699, Q7s:0.0012, Q8s:0.2478, Q9s:0.2402, QTs:0.0835, QJs:0.0002, QQ:0.968, KQo:0.3352, AQo:0.7325, K2s:0.9801, K3s:0.0044, K4s:0.2697, K5s:0.0007, K6s:0.2411, K7s:0.0081, K8s:0.136, K9s:0.4434, KTs:0.0445, KJs:0.3, KQs:0.6007, KK:0.9741, AKo:0.7966, A2s:0.5648, A3s:0.2731, A4s:0.0524, A5s:0.8864, A6s:0.073, A7s:0.0158, A8s:0.338, A9s:0.5297, ATs:0.5387, AJs:0.0702, AQs:0.6919, AKs:0.9466, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@12",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "88:0.0001, TT:0.0013, JJ:0.0016, QQ:0.002, AQs:0.0001"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.275, 77:0.176, 88:0.647, 99:0.6806, TT:0.7498, JJ:0.7911, QQ:0.998, AQo:0.0342, KQs:0.0103, KK, AKo, A9s:0.025, ATs:0.0159, AQs:0.0546, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@34.75",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0013, 82o:0.0001, Q2o:0.0009, A2o:0.0003, 32s:0.0001, 33:0.0057, 63o:0.0001, T3o:0.0001, Q3o:0.0008, A3o:0.0001, 42s:0.0002, 43s:0.0004, 44:0.0002, 74o:0.0002, 84o:0.0003, J4o:0.0001, A4o:0.0003, 52s:0.0005, 54s:0.0004, 55:0.2273, 65o:0.0001, 75o:0.0002, 95o:0.0002, J5o:0.0003, K5o:0.0001, A5o:0.0001, 62s:0.0002, 64s:0.0008, 65s:0.0003, 66:0.2535, 96o:0.0001, J6o:0.0005, K6o:0.0001, 72s:0.0001, 73s:0.0001, 75s:0.0025, 76s:0.0001, 77:0.2592, 87o:0.0007, 97o:0.0001, Q7o:0.0004, K7o:0.0006, A7o:0.0007, 82s:0.0014, 83s:0.0027, 84s:0.0012, 85s:0.0053, 86s:0.0006, 87s:0.0002, 88:0.8225, 98o:0.0007, T8o:0.0004, Q8o:0.0002, K8o:0.0002, A8o:0.0041, 92s:0.0008, 93s:0.0001, 94s:0.0007, 95s:0.0003, 96s:0.0024, 97s:0.0003, 98s:0.0055, 99:0.3916, K9o:0.0001, A9o:0.0001, T2s:0.0008, T3s:0.0001, T4s:0.0011, T6s:0.0001, T7s:0.0005, T8s:0.0001, TT:0.991, ATo:0.0009, J2s:0.0009, J3s:0.0001, J4s:0.0003, J5s:0.0001, J6s:0.0002, J7s:0.0026, J8s:0.0013, J9s:0.0045, JTs:0.0099, JJ:0.9833, QJo:0.0007, AJo:0.0428, Q2s:0.001, Q3s:0.0002, Q4s:0.0002, Q5s:0.001, Q6s:0.0013, Q7s:0.0089, Q9s:0.0067, QTs:0.0037, QJs:0.0007, QQ:0.9985, KQo:0.0016, AQo:0.9977, K3s:0.0017, K4s:0.0068, K5s:0.0031, K6s:0.0014, K7s:0.0002, K8s:0.0001, K9s:0.0001, KTs:0.0002, KJs:0.0008, KQs:0.3816, KK:0.9993, AKo, A2s:0.0015, A3s:0.0008, A4s:0.117, A5s:0.0369, A6s:0.1388, A7s:0.0123, A8s:0.0086, A9s:0.0726, ATs:0.09, AJs:0.9644, AQs:0.9995, AKs:0.806, AA:0.9995"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@34.75",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "99:0.0013, TT, JJ, QQ, KK, AKo:0.9998, AQs:0.0159, AKs, AA"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "LJ",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "4bet 13.7bb",
      "4bet 34.75bb"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "22:0.0153, 42o:0.0011, 62o:0.0007, 72o:0.0001, T2o:0.0003, J2o:0.0006, Q2o:0.0018, K2o:0.0002, A2o:0.0006, 32s:0.0144, 33:0.0002, 43o:0.0006, 53o:0.001, 63o:0.0001, 83o:0.0001, 93o:0.0004, T3o:0.0029, J3o:0.0049, Q3o:0.0001, K3o:0.0027, A3o:0.0288, 42s:0.0307, 43s:0.0057, 44:0.0009, 54o:0.0008, 74o:0.0006, 94o:0.0016, T4o:0.0001, J4o:0.0011, Q4o:0.0003, K4o:0.0005, A4o:0.0033, 52s:0.0003, 53s:0.0003, 54s:0.0216, 55:0.0033, 75o:0.0131, 85o:0.0005, 95o:0.0002, Q5o:0.0034, K5o:0.0008, A5o:0.016, 62s:0.008, 63s:0.0037, 64s:0.0014, 65s:0.0568, 66:0.26, 76o:0.0131, 86o:0.0129, 96o:0.0016, T6o:0.0003, J6o:0.0133, Q6o:0.0079, K6o:0.001, A6o:0.0006, 72s:0.0001, 73s:0.0069, 75s:0.0541, 76s:0.013, 77:0.1271, 87o:0.0064, 97o:0.045, T7o:0.0018, J7o:0.0004, Q7o:0.0007, K7o:0.0058, A7o:0.0078, 82s:0.0668, 83s:0.0029, 84s:0.0025, 85s:0.0082, 86s:0.0623, 87s:0.0013, 88:0.0196, 98o:0.0059, T8o:0.0004, Q8o:0.0042, K8o:0.0004, A8o:0.0002, 92s:0.0055, 93s:0.0136, 94s:0.0107, 95s:0.1156, 96s:0.0877, 97s:0.0053, 98s:0.0159, 99:0.2284, T9o:0.0016, J9o:0.0009, K9o:0.0003, A9o:0.0138, T2s:0.1348, T3s:0.0023, T4s:0.0013, T5s:0.0228, T6s:0.0224, T7s:0.0009, T8s:0.0555, T9s:0.2428, TT:0.2817, JTo:0.0042, ATo:0.0017, J2s:0.2146, J3s:0.0072, J4s:0.1429, J5s:0.0013, J6s:0.0249, J7s:0.0191, J8s:0.0188, J9s:0.1846, JTs:0.0552, JJ:0.0058, QJo:0.01, KJo:0.0064, AJo:0.2381, Q2s:0.0156, Q3s:0.0001, Q4s:0.2889, Q5s:0.0246, Q6s:0.2607, Q7s:0.0073, Q8s:0.01, Q9s:0.0001, QTs:0.032, QJs:0.4282, QQ:0.1856, KQo:0.0134, AQo:0.6075, K2s:0.0135, K3s:0.0005, K4s:0.0284, K5s:0.0037, K6s:0.0001, K7s:0.0002, K8s:0.0009, K9s:0.0097, KTs:0.2782, KJs:0.1669, KQs:0.0584, AKo:0.4755, A2s:0.0017, A3s:0.0653, A4s:0.1546, A5s:0.3228, A7s:0.1731, A8s:0.4798, A9s:0.0008, ATs:0.2038, AJs:0.2704, AQs:0.415, AKs:0.4972, AA:0.0005"
      },
      {
        "action": "4bet 13.7bb",
        "min": 0.0001,
        "range": "32o:0.001, 72o:0.0005, 82o:0.0006, 92o:0.0008, T2o:0.0002, J2o:0.0011, Q2o:0.0014, K2o:0.0001, 32s:0.0117, 43o:0.0001, 63o:0.0001, 73o:0.0001, 93o:0.0005, T3o:0.0035, J3o:0.0002, K3o:0.0003, A3o:0.0001, 42s:0.0008, 43s:0.068, 44:0.0017, 54o:0.0001, 64o:0.0001, 74o:0.0009, 84o:0.001, 94o:0.0006, J4o:0.0001, K4o:0.0021, A4o:0.0093, 52s:0.2258, 53s:0.0414, 54s:0.0063, 55:0.0047, 75o:0.0004, 95o:0.0015, T5o:0.0001, J5o:0.0002, K5o:0.0001, A5o:0.0029, 62s:0.0004, 63s:0.0462, 64s:0.007, 65s:0.1219, 66:0.002, 86o:0.0003, 96o:0.0013, J6o:0.0013, Q6o:0.0021, A6o:0.0007, 72s:0.0001, 73s:0.0563, 75s:0.0078, 76s:0.0009, 77:0.0866, 87o:0.0002, 97o:0.0001, T7o:0.0001, J7o:0.0474, Q7o:0.0001, K7o:0.0001, A7o:0.0011, 82s:0.0001, 83s:0.0117, 84s:0.0088, 85s:0.068, 86s:0.0152, 87s:0.1366, 88:0.1564, 98o:0.0005, J8o:0.0005, Q8o:0.0082, K8o:0.0002, A8o:0.0105, 92s:0.0001, 93s:0.0059, 95s:0.1274, 96s:0.0044, 97s:0.0099, 98s:0.0055, 99:0.0326, T9o:0.0001, J9o:0.0008, Q9o:0.0002, K9o:0.0002, A9o:0.0052, T2s:0.0133, T3s:0.0025, T4s:0.0158, T5s:0.0539, T6s:0.0016, T7s:0.0003, T8s:0.0023, T9s:0.0149, TT:0.0884, JTo:0.0007, QTo:0.0048, KTo:0.0002, ATo:0.0305, J2s:0.0012, J3s:0.0002, J4s:0.0914, J5s:0.0063, J6s:0.4657, J7s:0.0001, J8s:0.0693, J9s:0.0745, JTs:0.1418, JJ:0.0003, QJo:0.0006, KJo:0.0058, AJo:0.24, Q2s:0.0026, Q3s:0.0236, Q4s:0.0046, Q5s:0.2151, Q6s:0.0067, Q7s:0.0028, Q8s:0.0805, Q9s:0.0002, QTs:0.0129, QJs:0.0004, QQ:0.055, AQo:0.0163, K2s:0.0084, K3s:0.0017, K4s:0.0001, K5s:0.0003, K6s:0.0099, K7s:0.0054, K8s:0.0147, K9s:0.0103, KTs:0.0878, KJs:0.1596, KQs:0.1724, AKo:0.0862, A2s:0.0185, A3s:0.0115, A4s:0.0019, A5s:0.0076, A6s:0.116, A7s:0.0938, A8s:0.0193, A9s:0.1467, ATs:0.2914, AJs:0.249, AQs:0.2849, AKs:0.0844, AA:0.6301"
      },
      {
        "action": "4bet 34.75bb",
        "min": 0.0001,
        "range": "22:0.2752, 32o:0.0111, 42o:0.007, 52o:0.1025, 62o:0.0121, 72o:0.3707, 82o:0.0001, 92o:0.0008, T2o:0.0001, J2o:0.0008, Q2o:0.0323, K2o:0.0912, A2o:0.275, 32s:0.0765, 33:0.0083, 43o:0.0714, 63o:0.1223, 73o:0.0576, 83o:0.0411, 93o:0.0125, T3o:0.0488, J3o:0.0116, Q3o:0.0001, K3o:0.2105, A3o:0.1367, 42s:0.0579, 43s:0.5104, 44:0.0998, 54o:0.0494, 64o:0.0848, 74o:0.4359, 94o:0.0264, T4o:0.0009, J4o:0.0834, Q4o:0.0006, K4o:0.2746, A4o:0.7406, 52s:0.3427, 53s:0.432, 54s:0.5804, 55:0.1696, 65o:0.0025, 75o:0.1997, 85o:0.058, 95o:0.0382, T5o:0.0277, J5o:0.0006, Q5o:0.0257, K5o:0.0081, A5o:0.012, 62s:0.0111, 63s:0.0004, 64s:0.409, 65s:0.2684, 66:0.0137, 76o:0.0923, 86o:0.3796, 96o:0.0141, T6o:0.0107, J6o:0.3272, Q6o:0.1317, K6o:0.023, A6o:0.5541, 72s:0.0001, 73s:0.6008, 74s:0.0008, 75s:0.2224, 76s:0.1021, 77:0.5503, 87o:0.495, 97o:0.0033, T7o:0.0904, J7o:0.0161, Q7o:0.0006, K7o:0.3829, A7o:0.4061, 82s:0.0651, 83s:0.1067, 84s:0.4521, 85s:0.0005, 86s:0.7037, 87s:0.7611, 88:0.5146, 98o:0.0016, T8o:0.207, J8o:0.0162, Q8o:0.0041, K8o:0.0001, A8o:0.3435, 92s:0.0016, 93s:0.8669, 94s:0.0061, 95s:0.0015, 96s:0.2161, 97s:0.0715, 98s:0.4026, 99:0.4923, T9o:0.0022, J9o:0.0884, Q9o:0.3075, K9o:0.0242, A9o:0.553, T2s:0.1969, T3s:0.2249, T4s:0.0216, T5s:0.0554, T6s:0.0527, T7s:0.1327, T8s:0.4936, T9s:0.2173, TT:0.3979, JTo:0.0507, QTo:0.0222, KTo:0.0063, ATo:0.2849, J2s:0.349, J3s:0.17, J4s:0.161, J5s:0.0039, J6s:0.0634, J7s:0.0216, J8s:0.2257, J9s:0.2402, JTs:0.7204, JJ:0.2224, QJo:0.0009, KJo:0.0547, AJo:0.0764, Q2s:0.0003, Q3s:0.1373, Q4s:0.387, Q5s:0.2758, Q6s:0.4383, Q7s:0.0259, Q8s:0.0262, Q9s:0.5171, QTs:0.0209, QJs:0.0714, QQ:0.3028, KQo:0.3141, AQo:0.2594, K2s:0.5005, K3s:0.6998, K4s:0.3795, K5s:0.0033, K6s:0.9748, K7s:0.2966, K8s:0.0096, K9s:0.4244, KTs:0.287, KJs:0.0775, KQs:0.6266, KK, AKo:0.4086, A2s:0.689, A3s:0.7404, A4s:0.1165, A5s:0.2504, A6s:0.4602, A7s:0.4904, A8s:0.0011, A9s:0.5923, ATs:0.3608, AJs:0.1555, AQs:0.1572, AKs:0.4137, AA:0.3693"
      }
    ]
  },
  {
    "presetId": "LJ:OPEN@2.3|SB:CALL@1.8|BB:3BET@8",
    "heroPos": "SB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call",
      "All-in"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "JJ:0.0098, QQ:0.0386, KK:0.0181, ATs:0.0066, AQs:0.0001, AKs:0.001, AA:0.0071"
      },
      {
        "action": "All-in",
        "min": 0.0001,
        "range": "66:0.0203, 77:0.0406, 88:0.0252, TT:0.0024, ATo:0.0097, JJ:0.0956, AJo:0.1438, QQ:0.1579, AQo:0.3412, KK:0.9819, AKo:0.9951, A2s:0.0004, A3s:0.0003, A4s:0.0012, A5s:0.0014, A6s:0.0004, A7s:0.0014, A9s:0.0018, ATs:0.0217, AJs:0.1868, AQs:0.5435, AKs:0.9976, AA:0.9929"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "77:0.0381, 88:0.9999, 99, TT, ATo:0.1254, JJ, AJo, QQ, AQo, KK, AKo, A8s:0.0029, A9s:0.9757, ATs, AJs, AQs, AKs, AA"
      }
    ]
  },
  {
    "presetId": "SB:CALL@0.5|BB:OPEN@3.5|SB:3BET@9",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
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
        "range": "22:0.0018, 32s:0.0075, 33:0.0009, 53o:0.0292, 42s:0.0181, 44:0.1767, 54o:0.2558, K4o:0.0014, 52s:0.114, 53s:0.0247, 55:0.2353, 65o:0.3302, K5o:0.0029, 63s:0.3189, 64s:0.7666, 65s:0.2475, 66:0.9997, 76o:0.0021, 86o:0.0004, K6o:0.0001, A6o:0.0041, 73s:0.1539, 74s:0.2452, 75s:0.416, 76s:0.9114, 77:0.9996, 87o:0.3913, 97o:0.1212, T7o:0.0185, K7o:0.0257, A7o:0.1626, 82s:0.0025, 83s:0.0332, 84s:0.0899, 85s:0.0265, 86s:0.5236, 87s:0.6001, 88:0.9998, 98o:0.3453, T8o:0.1992, J8o:0.0109, K8o:0.1458, A8o:0.1983, 92s:0.0174, 93s:0.0101, 94s:0.1466, 95s:0.1211, 96s:0.3534, 97s:0.2293, 98s:0.0022, 99:0.9759, T9o:0.0415, J9o:0.0746, Q9o:0.0081, K9o:0.2499, A9o:0.0581, T3s:0.1275, T4s:0.0006, T5s:0.0116, T6s:0.3196, T7s:0.239, T8s:0.0013, TT:0.594, JTo:0.0004, QTo:0.2859, KTo:0.0445, ATo:0.0748, J2s:0.0016, J4s:0.0055, J5s:0.0001, J7s:0.2385, J8s:0.0001, JJ:0.2106, QJo:0.2138, KJo:0.0184, AJo:0.0047, Q2s:0.0567, Q3s:0.102, Q4s:0.0491, Q5s:0.1355, Q6s:0.1466, Q7s:0.1598, Q8s:0.1641, Q9s:0.0033, QTs:0.002, QJs:0.0013, QQ:0.3816, KQo:0.2307, AQo:0.1085, K3s:0.0002, K4s:0.0004, K5s:0.0019, K6s:0.0199, K7s:0.0165, K8s:0.0157, K9s:0.0005, KTs:0.0007, KJs:0.0007, KQs:0.0003, KK:0.0001, A6s:0.0001, A7s:0.0789, A9s:0.0001, ATs:0.0002, AA:0.2906"
      },
      {
        "action": "4bet 24.75bb",
        "min": 0.0001,
        "range": "22:0.9979, K2o:0.128, A2o, 32s:0.9678, 33:0.999, 53o:0.1041, K3o:0.7353, A3o, 42s:0.9381, 43s:0.9996, 44:0.8229, 54o:0.3911, K4o:0.0784, A4o, 52s:0.8786, 53s:0.9653, 54s:0.9997, 55:0.7646, 65o:0.0002, 75o:0.0003, 85o:0.0009, K5o:0.4853, A5o, 62s:0.0003, 63s:0.0022, 64s:0.168, 65s:0.7492, 66:0.0002, 76o:0.0002, K6o:0.0007, A6o:0.9959, 72s:0.0017, 73s:0.0909, 74s:0.3821, 75s:0.5833, 76s:0.0205, 77:0.0003, 87o:0.1195, 97o:0.0178, T7o:0.0003, K7o:0.0037, A7o:0.8374, 82s:0.3954, 83s:0.1205, 84s:0.88, 85s:0.9607, 86s:0.4732, 87s:0.3997, 88:0.0001, 98o:0.6092, T8o:0.7768, J8o:0.2545, Q8o:0.0002, K8o:0.4031, A8o:0.8016, 92s:0.0395, 93s:0.2083, 94s:0.1106, 95s:0.8425, 96s:0.4199, 97s:0.7706, 98s:0.9975, 99:0.0241, T9o:0.9585, J9o:0.9029, Q9o:0.0632, K9o:0.7501, A9o:0.9419, T2s:0.9372, T3s:0.8206, T4s:0.9516, T5s:0.9437, T6s:0.449, T7s:0.7598, T8s:0.9987, T9s:0.9998, TT:0.406, JTo:0.9984, QTo:0.6959, KTo:0.9555, ATo:0.9252, J2s:0.9496, J3s:0.971, J4s:0.9362, J5s:0.9906, J6s:0.0002, J7s:0.3999, J8s:0.9993, J9s:0.9998, JTs:0.9999, JJ:0.7894, QJo:0.7209, KJo:0.9816, AJo:0.9953, Q2s:0.8915, Q3s:0.8104, Q4s:0.9225, Q5s:0.7861, Q6s:0.0071, Q7s:0.0054, Q8s:0.798, Q9s:0.9963, QTs:0.9977, QJs:0.9987, QQ:0.6184, KQo:0.7693, AQo:0.8915, K2s:0.9967, K3s:0.9993, K4s:0.997, K5s:0.9979, K6s:0.8838, K7s:0.9824, K8s:0.9843, K9s:0.9993, KTs:0.9993, KJs:0.9993, KQs:0.9997, KK:0.9999, AKo, A2s, A3s, A4s, A5s, A6s:0.9999, A7s:0.9211, A8s, A9s:0.9999, ATs:0.9998, AJs, AQs, AKs, AA:0.7094"
      }
    ]
  },
  {
    "presetId": "SB:OPEN@3.5|BB:3BET@8.75|SB:4BET@24.75",
    "heroPos": "BB",
    "eff": 25,
    "stacks": [
      62.5,
      37.5,
      18.75,
      21.25,
      25,
      35
    ],
    "options": [
      "Fold",
      "Call"
    ],
    "bands": [
      {
        "action": "Call",
        "min": 0.0001,
        "range": "33:0.0001, 44:0.0014, 55:0.0275, 66:0.9491, 77, 88, 99, A9o:0.1236, TT, ATo, JJ, AJo, QQ, AQo, KK, AKo, A4s:0.0001, A5s:0.0001, A6s:0.0026, A7s:0.002, A8s:0.314, A9s, ATs, AJs, AQs, AKs, AA"
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
    id: "CLUB_MATCH_200_400_100_6LEFT chase",
    label: "Club Match 200-400 100 chase",
    tags: ["club", "match", "200", "400", "100", "6left", "autoimport"],
    questionBuilder: (hand) => ({ stacks: CLUB_MATCH_200_400_100_STACKS_BB }),
    spots: __attachFacingLineToState(CLUB_MATCH_200_400_100_STATE, CLUB_MATCH_200_400_100_FACING_PRESETS).map(__makeSpotFromState),
  },
]);
