

/* ================= PATTERNS（回答は range 文字列で定義） ================= */
export const PATTERNS = [
  {
    id: "TSL normal rule Ante",          // ← あなたが言う「一つのid」
    label: "TSL ノーマル 8left",
    tags: ["ante"],                 // 任意（Homeのフィルタにも使える
    questionBuilder: (hand) => ({
      stacks: [39, 53, 16, 42, 32, 23, 23, 53],
    }),
    spots: [
      {
        id: "UTGopen",
        label: "UTG 39bb eff openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG",
          eff: 39,
          facing: "Unopened",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `88+, 77:0.986, 66:0.252, 55:0.003, A4s+, A3s:0.995, A2s:0.405, ATo+, K9s+, K8s:0.999, K7s:0.949, KQo, KJo:0.256, QTs+, Q9s:0.982, QJo:0.065, JTs:0.999, T9s:0.035` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "UTG+1open",
        label: "UTG+1 53bb eff openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG+1",
          eff: 53,
          facing: "Unopened",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `66+, 55:0.952, A2s+, A7o+, A5o:0.640, K6s+, K5s:0.998, K4s:0.378, KTo+, Q9s+, Q8s:0.999, Q7s:0.873, QTo+, J9s+, J8s:0.996, JTo:0.530, T9s, T8s:0.999, 98s:0.003` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "LJopen",
        label: "LJ 16bb eff openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "LJ",
          eff: 16,
          facing: "Unopened",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `99+, 88:0.647, 77:0.257, A4s+, A3s:0.632, ATo+, A9o:0.173, KTs+, K9s:0.998, K8s:0.823, K7s:0.107, KQo, KJo:0.551, KTo:0.008, QTs+, Q9s:0.743, QJo:0.533, JTs` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "HJopen",
        label: "HJ 42bb eff openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 42,
          facing: "Unopened",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `55+, A2s+, A7o+, A6o:0.033, A5o:0.988, K6s+, K5s:0.997, K4s:0.619, KTo+, K9o:0.002, Q8s+, Q7s:0.999, Q6s:0.803, Q5s:0.003, QTo+, J9s+, J8s:0.999, J7s:0.712, JTo, T9s, T8s:0.999, T7s:0.055, 98s:0.966` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "COopen",
        label: "CO 32bb eff openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "CO",
          eff: 32,
          facing: "Unopened",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `66+, 55:0.999, A2s+, A7o+, A5o:0.646, K6s+, K5s:0.998, K4s:0.099, KTo+, K9o:0.001, Q8s+, Q7s:0.997, Q6s:0.811, Q5s:0.001, QTo+, Q9o:0.001, J9s+, J8s:0.997, J7s:0.677, JTo, T8s+, T7s:0.100, 98s:0.999, 97s:0.001` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "BTNopen",
        label: "BTN 23bb eff openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 23,
          facing: "Unopened",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","open 2bb", "ALLIN 23bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `99+, 88:0.747, 77-66, 55:0.986, ATs+, A9s:0.996, A8s, A7s:0.994, A6s:0.938, A5s:0.993, A4s:0.745, A3s:0.579, A2s:0.561, AKo:0.990, AQo:0.425, AJo-A9o, A8o:0.997, A7o:0.754, A6o:0.004, A5o:0.436, KJs+, KTs:0.989, K9s-K7s, K6s:0.944, K5s:0.347, K4s:0.001, KJo+, KTo:0.907, K9o:0.001, QJs:0.988, QTs-Q9s, Q8s:0.997, Q7s:0.643, Q6s:0.004, QTo+, J9s+, J8s:0.992, J7s:0.184, J6s:0.001, JTo:0.992, T8s+, T7s:0.027, 98s:0.981, 97s:0.094, 87s:0.017` },
              { action: "ALLIN 23bb", min: 0.05, range: `88:0.253, 55:0.001, A9s:0.004, A7s:0.006, A6s:0.062, A5s:0.007, A4s:0.255, A3s:0.421, A2s:0.439, AKo:0.010, AQo:0.575, A8o:0.003, A7o:0.093, A5o:0.127, KTs:0.011, KTo:0.093, QJs:0.012` },          
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingUTGopen",
        label: "BBvsUTG defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 39,
          facing: "UTG open 2.0x",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","call", "3bet 6.5bb", "3bet 9.0bb"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `QQ-77, 66:0.906, 55-22, AKs:0.043, AQs-A9s, A8s:0.923, A7s, A6s:0.995, A5s:0.994, A4s:0.999, A3s:0.902, A2s:0.662, AKo:0.526, AQo:0.996, AJo, ATo:0.964, A9o:0.998, A8o:0.936, A7o:0.749, A6o:0.611, A5o:0.378, A4o:0.610, A3o:0.038, KQs:0.993, KJs-K4s, K3s:0.996, K2s, KQo:0.964, KJo:0.952, KTo, K9o:0.998, K8o:0.999, K7o:0.923, K6o:0.709, K5o:0.232, K4o:0.001, QJs:0.998, QTs-Q2s, Q8o+, Q7o:0.988, Q6o:0.572, Q5o:0.029, Q4o:0.001, J2s+, J9o+, J8o:0.999, J7o:0.563, T2s+, T8o+, T7o:0.933, 92s+, 98o:0.999, 97o-96o, 82s+, 87o, 86o:0.999, 85o:0.633, 72s+, 76o:0.986, 75o, 74o:0.298, 65s:0.999, 64s-63s, 62s:0.998, 64o+, 63o:0.485, 54s:0.996, 53s-52s, 53o+, 52o:0.001, 42s+, 43o, 32s` },
              { action: "3bet 6.5bb", min: 0.05, range: `AA:0.001, KK:0.283, 66:0.094, AKs:0.192, A8s:0.077, A6s:0.005, A5s:0.005, A4s:0.001, A3s:0.098, A2s:0.338, AKo:0.196, AQo:0.004, ATo:0.032, A8o:0.001, A7o:0.001, A6o:0.001, A5o:0.025, A4o:0.038, A3o:0.114, KQs:0.007, K3s:0.004, KQo:0.036, KJo:0.048, K9o:0.001, K7o:0.024, K6o:0.070, K5o:0.173, K4o:0.047, K3o:0.001, K2o:0.003, QJs:0.002, Q5o:0.001, 76o:0.014, 65s:0.001, 54s:0.004` },
              { action: "3bet 9.0bb", min: 0.05, range: `AA:0.999, KK:0.717, AKs:0.764, AKo:0.277, ATo:0.004, A9o:0.002, A8o:0.064, A7o:0.250, A6o:0.388, A5o:0.598, A4o:0.352, A3o:0.849, A2o, K9o:0.001, K7o:0.053, K6o:0.212, K5o:0.554, K4o:0.331, K3o:0.049, K2o:0.022` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingBTNopen",
        label: "BBvsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 23,
          facing: "BTN open 2.0x",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","call", "3bet 6.5bb", "3bet 9.0bb", "ALLIN 23bb"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `99:0.283, 88:0.997, 77, 66:0.991, 55:0.983, 44:0.137, 33:0.004, 22:0.041, AJs:0.538, ATs-A7s, A6s:0.987, A5s:0.668, A4s:0.378, A3s:0.350, A2s:0.611, AJo:0.974, ATo-A7o, A6o:0.998, A5o:0.785, A4o:0.359, A3o:0.378, A2o:0.100, KQs:0.927, KJs:0.857, KTs:0.646, K9s:0.238, K8s:0.873, K7s:0.987, K6s:0.731, K5s:0.776, K4s:0.745, K3s:0.796, K2s:0.676, KQo:0.999, KJo:0.882, KTo:0.797, K9o:0.698, K8o:0.998, K7o, K6o:0.986, K5o:0.794, K4o:0.988, K3o:0.928, K2o:0.274, QJs:0.666, QTs:0.450, Q9s:0.768, Q8s:0.993, Q7s, Q6s:0.988, Q5s:0.976, Q4s:0.994, Q3s, Q2s:0.999, QJo:0.845, QTo:0.870, Q9o:0.995, Q8o-Q7o, Q6o:0.975, Q5o:0.883, Q4o, Q3o:0.974, Q2o:0.531, JTs:0.769, J9s:0.845, J8s-J5s, J4s:0.999, J3s:0.998, J2s, JTo:0.999, J9o-J8o, J7o:0.989, J6o:0.980, J5o:0.690, J4o:0.494, J3o:0.699, J2o:0.003, T2s+, T6o+, T5o:0.920, T4o:0.864, T3o:0.216, 92s+, 96o+, 95o:0.997, 94o:0.082, 93o:0.021, 92o:0.001, 82s+, 85o+, 84o:0.796, 72s+, 74o+, 73o:0.153, 63s+, 62s:0.997, 64o+, 63o:0.997, 62o:0.199, 52s+, 53o+, 52o:0.862, 42s+, 43o:0.998, 42o:0.809, 32s, 32o:0.018` },
              { action: "3bet 6.5bb", min: 0.05, range: `AA, KK:0.992, QQ, JJ:0.999, TT:0.509, 99:0.002, AQs+, AJs:0.440, AKo:0.993, AQo:0.998, AJo:0.010, A6o:0.001, A5o:0.025, A4o:0.252, A3o:0.187, A2o:0.458, K6o:0.008, K5o:0.199, K4o:0.005, K3o:0.069, K2o:0.715, Q6o:0.025, Q5o:0.117, Q3o:0.026, Q2o:0.469, J7o:0.011, J6o:0.020, J5o:0.309, J4o:0.506, J3o:0.291, J2o:0.992, T5o:0.079, T4o:0.088, T3o:0.149, T2o:0.005, 95o:0.003, 94o:0.553, 93o:0.559, 92o:0.317, 84o:0.171, 83o:0.077, 82o:0.234, 73o:0.817, 72o:0.555, 62s:0.003, 63o:0.003, 62o:0.775, 52o:0.138, 43o:0.002, 42o:0.191, 32o:0.977` },
              { action: "3bet 9.0bb", min: 0.05, range: `KK:0.008, JJ:0.001, TT:0.013, AJs:0.020, AKo:0.007, AQo:0.002, A6o:0.001, A3o:0.001, A2o:0.003, K3o:0.001, K2o:0.010, J5o:0.001, J4o:0.001, J3o:0.008, J2o:0.005, T4o:0.001, T2o:0.001, 62o:0.003, 32o:0.001` },
              { action: "ALLIN 23bb", min: 0.05, range: `TT:0.478, 99:0.715, 88:0.003, 66:0.009, 55:0.017, 44:0.863, 33:0.996, 22:0.959, AJs:0.002, A6s:0.013, A5s:0.332, A4s:0.622, A3s:0.650, A2s:0.389, AJo:0.015, A5o:0.190, A4o:0.389, A3o:0.434, A2o:0.439, KQs:0.073, KJs:0.143, KTs:0.354, K9s:0.762, K8s:0.127, K7s:0.013, K6s:0.269, K5s:0.224, K4s:0.255, K3s:0.204, K2s:0.324, KQo:0.001, KJo:0.118, KTo:0.203, K9o:0.302, K8o:0.002, K6o:0.006, K5o:0.007, K4o:0.007, K3o:0.002, K2o:0.002, QJs:0.334, QTs:0.550, Q9s:0.232, Q8s:0.007, Q6s:0.012, Q5s:0.024, Q4s:0.006, Q2s:0.001, QJo:0.155, QTo:0.130, Q9o:0.005, JTs:0.231, J9s:0.155, J4s:0.001, J3s:0.002, JTo:0.001` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },       
      {
        id: "UTGopenvsBTN",
        label: "UTGvsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 23,
          facing: "UTG open 2.0x",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","call", "3bet 4.5bb", "3bet 8.0bb", "ALLIN 23bb"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `QQ:0.483, JJ:0.533, AQs, AJs:0.524, ATs:0.188, AQo:0.145, KQs:0.574, KJs:0.003, KTs:0.119` },
              { action: "3bet 4.5bb", min: 0.05, range: `AA:0.998, KK:0.232, QQ:0.304, JJ:0.254, 88:0.007, 77:0.021, 66:0.001, 55:0.031, AKs:0.650, AJs:0.475, ATs:0.127, A9s:0.043, A8s:0.061, A7s:0.153, A6s:0.013, A5s:0.619, A4s:0.179, A3s:0.436, A2s:0.264, AKo:0.050, AQo:0.676, AJo:0.124, ATo:0.001, KQs:0.043, KJs:0.161, KTs:0.028, K9s:0.009, K8s:0.002, K7s:0.033, K6s:0.012, K5s:0.017, K4s:0.069, KQo:0.007, KJo:0.007` },
              { action: "3bet 8.0bb", min: 0.05, range: `AA:0.002, KK:0.155, QQ:0.077, JJ:0.034, AKs:0.011, A9s:0.001, A6s:0.012, A5s:0.013, A4s:0.011, A3s:0.026, A2s:0.006, AKo:0.022, AQo:0.047, AJo:0.001, A9o:0.001, A5o:0.003, KQs:0.015, K8s:0.003, K7s:0.004, K5s:0.050, K3s:0.002, KQo:0.026, KJo:0.001, K9o:0.003, K5o:0.015, K4o:0.001` },
              { action: "ALLIN 23bb", min: 0.05, range: `KK:0.613, QQ:0.136, JJ:0.072, TT:0.001, 88:0.001, 77:0.004, 66:0.229, 55:0.136, AKs:0.339, A5s:0.298, A4s:0.432, A3s:0.138, A2s:0.002, AKo:0.928` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },         
      {
        id: "UTG+1openvsHJ",
        label: "UTG+1vsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 42,
          facing: "UTG+1 open 2.0x",
          stacks: [39, 53, 16, 42, 32, 23, 23, 53],
          options: ["Fold","call", "3bet 4.5bb", "3bet 8.0bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `AA:0.019, KK, QQ:0.999, JJ:0.992, TT:0.999, 99:0.891, 88:0.451, 77:0.455, AKs:0.225, AQs-ATs, A9s:0.993, A8s:0.999, A7s:0.872, A6s:0.003, A5s:0.562, A4s:0.091, A3s:0.001, AQo:0.869, AJo:0.995, ATo:0.803, KQs, KJs:0.990, KTs, K9s:0.954, K8s:0.312, KQo:0.998, QJs, QTs:0.997, Q9s:0.546, JTs:0.893` },
              { action: "3bet 4.5bb", min: 0.05, range: `AA:0.023, QQ:0.001, JJ:0.004, TT:0.001, 99:0.011, 66:0.001, AKs:0.011, A9s:0.006, A7s:0.004, A6s:0.013, A5s:0.047, A4s:0.015, A3s:0.008, A2s:0.002, AQo:0.001, AJo:0.004, ATo:0.005, KJs:0.010, K9s:0.002, KQo:0.002, KJo:0.002` },
              { action: "3bet 8.0bb", min: 0.05, range: `AA:0.958, JJ:0.004, 99:0.096, AKs:0.655, A9s:0.001, A7s:0.121, A6s:0.972, A5s:0.388, A4s:0.890, A3s:0.937, A2s:0.981, AQo:0.130, ATo:0.113, A9o:0.281, A8o:0.019, A5o:0.002, A4o:0.008` },
              { action: "ALLIN", min: 0.05, range: `AKs:0.108, AKo` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "UTGopen",
        label: "UTG openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG",
          eff: 65,
          facing: "Unopened",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `77+, 66:0.992, 55:0.552, A2s+, A4o+, A3o:0.999, A2o:0.359, K9s+, K8s:0.999, K7s, K6s:0.996, K5s:0.964, K4s:0.008, KTo+, Q9s+, Q8s:0.978, QJo, QTo:0.999, JTs, J9s:0.998, T9s:0.524` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "UTG+1 open",
        label: "UTG+1 openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG+1",
          eff: 33,
          facing: "Unopened",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","open 2bb"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `99+, 88:0.802, 77:0.067, 66:0.167, A2s+, ATo+, A9o:0.998, A8o:0.429, A7o:0.118, A6o:0.161, A5o:0.826, A4o:0.250, KTs+, K9s:0.087, K6s:0.015, KJo+, KTo:0.008, QJs, QTs:0.999, JTs:0.002` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "LJ open",
        label: "LJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "LJ",
          eff: 7,
          facing: "Unopened",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `KK+, QQ:0.450, 77:0.227, 66:0.098, AKs:0.970, ATs:0.466, A7s:0.003, ATo:0.299, A9o:0.151, A8o:0.776, A7o:0.410, A6o:0.066, A5o:0.201, KQo:0.002, KJo:0.208, KTo:0.019` },
              { action: "ALLIN", min: 0.05, range: `QQ:0.550, JJ-88, 77:0.773, 66:0.902, 55-44, 33:0.498, AKs:0.030, AQs-AJs, ATs:0.534, A9s-A8s, A7s:0.997, A6s-A2s, AJo+, ATo:0.701, A9o:0.849, A8o:0.121, K9s+, KQo:0.998, KJo:0.792, QTs+, Q9s:0.523, JTs, J9s:0.001, T9s:0.274` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "HJ open",
        label: "HJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 12,
          facing: "Unopened",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `TT+, 99:0.741, 88:0.529, ATs+, A9s:0.380, A8s:0.999, A7s-A6s, A5s:0.638, A4s:0.726, A3s:0.873, A2s:0.701, AKo:0.567, AQo:0.505, AJo:0.145, ATo, A9o:0.964, A8o:0.109, A5o:0.086, KQs:0.097, KTs:0.263, K9s:0.033, KQo, KJo:0.999, KTo:0.142, QJs:0.460, QTs:0.949, QJo:0.543, JTs:0.565` },
              { action: "ALLIN", min: 0.05, range: `99:0.259, 88:0.410, A9s:0.620, A8s:0.001, A5s:0.362, A4s:0.274, A3s:0.113, A2s:0.004, AKo:0.433, AQo:0.495, AJo:0.855, KQs:0.902, KJs, KTs:0.737, QJs:0.540, QTs:0.020` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "CO open",
        label: "CO openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "CO",
          eff: 60,
          facing: "Unopened",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `77+, 66:0.893, A9s+, A8s:0.736, A7s:0.391, A6s:0.002, AJo+, ATo:0.517, A9o-A8o, A7o:0.890, A6o:0.315, KQo:0.424, KTo:0.288, K9o, K8o:0.643, K7o:0.134, K5o:0.002, K4o:0.002, K3o:0.002, K2o:0.665, QTo:0.057, Q9o:0.845, Q8o:0.341, Q7o-Q6o, Q5o:0.897, Q4o-Q2o, J6s:0.001, J4s:0.001, J3s:0.002, J2s:0.562, JTo:0.008, J9o-J5o, J4o:0.367, J3o:0.010, T7s:0.001, T6s:0.725, T5s-T2s, T7o+, T6o:0.893, 98s:0.872, 97s:0.986, 96s:0.994, 95s, 94s:0.998, 93s:0.963, 92s:0.100, 98o, 97o:0.996, 87s:0.009, 86s:0.312, 85s:0.999, 84s:0.894, 87o:0.773, 76s:0.006, 75s:0.939, 74s, 76o:0.006, 64s:0.547, 63s:0.805, 53s:0.732, 52s:0.634, 43s:0.768, 42s:0.001, 32s:0.004` },
              { action: "ALLIN", min: 0.05, range: `66:0.107, 55-22, A8s:0.264, A7s:0.609, A6s:0.998, A5s-A2s, ATo:0.483, A7o:0.110, A6o:0.685, A5o-A2o, K2s+, KQo:0.576, KJo, KTo:0.712, K8o:0.357, K7o:0.866, K6o, K5o:0.998, K4o:0.998, K3o:0.998, K2o:0.335, Q2s+, QJo, QTo:0.943, Q9o:0.155, Q8o:0.659, Q5o:0.103, J7s+, J6s:0.999, J5s, J4s:0.999, J3s:0.998, J2s:0.438, JTo:0.992, T8s+, T7s:0.999, T6s:0.275, 98s:0.128, 97s:0.014, 96s:0.006, 87s:0.991, 86s:0.688, 85s:0.001, 76s:0.994, 75s:0.061, 65s, 64s:0.453, 54s, 53s:0.268, 43s:0.232` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "BTN open",
        label: "BTN openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 23,
          facing: "Unopened",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
              { action: "open 2bb", min: 0.05, range: `JJ+, TT:0.754, 99:0.896, 88:0.599, 77:0.056, 66:0.064, 44:0.001, AJs+, ATs:0.881, A9s:0.789, A8s:0.013, A7s:0.001, A6s:0.003, A2s:0.005, AKo, AQo:0.359, AJo-A7o, A6o:0.999, A5o:0.464, A4o:0.661, A3o:0.955, A2o:0.959, KQs:0.008, KJs:0.002, KTs:0.001, K9s:0.098, K8s:0.301, K7s:0.741, K6s:0.599, K5s:0.984, K4s:0.997, K3s:0.913, K2s:0.955, KQo:0.464, KJo:0.529, KTo:0.259, K9o, K8o:0.689, K7o:0.454, K6o:0.319, K5o:0.378, QJs:0.001, Q9s:0.497, Q8s:0.996, Q7s:0.999, Q6s:0.963, Q5s:0.999, Q4s:0.585, Q3s:0.025, Q2s:0.001, QJo:0.992, QTo, Q9o:0.777, Q7o:0.001, JTs:0.008, J9s:0.989, J8s:0.996, J7s:0.799, J6s:0.011, J5s:0.017, JTo, J9o:0.291, T9s:0.990, T8s:0.994, T7s:0.193, T6s:0.015, T9o:0.001, 98s:0.383, 97s:0.001, 87s:0.129, 65s:0.118, 54s:0.027` },
              { action: "ALLIN", min: 0.05, range: `TT:0.246, 99:0.104, 88:0.401, 77:0.943, 66:0.936, 55, 44:0.997, 33:0.940, 22:0.026, ATs:0.119, A9s:0.211, A8s:0.987, A7s:0.999, A6s:0.997, A5s-A3s, A2s:0.995, AQo:0.641, A6o:0.001, A5o:0.536, A4o:0.339, A3o:0.045, A2o:0.041, KQs:0.992, KJs:0.998, KTs:0.999, K9s:0.901, K8s:0.699, K7s:0.259, K6s:0.400, K5s:0.015, K4s:0.001, K3s:0.086, KQo:0.536, KJo:0.471, KTo:0.741, QJs:0.999, QTs, Q9s:0.503, Q8s:0.004, QJo:0.008, JTs:0.992, J9s:0.010, T9s:0.001` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "facing CO ALLIN",
        label: "CO ALLIN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 18,
          facing: "CO open 18.0x",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","call"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `88+, ATs+, A9s:0.134, ATo+, KQs:0.546` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "facing CO ALLIN",
        label: "CO ALLIN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "SB",
          eff: 25,
          facing: "CO open 25.0x",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","call"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `JJ+, TT:0.901, AKs` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "facing CO ALLIN",
        label: "CO ALLIN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 23,
          facing: "CO open 23.0x",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","call"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `TT+, AKs, AKo:0.230` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "facing UTG open",
        label: "UTG open defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG+1",
          eff: 33,
          facing: "UTG open 2.0x",
          stacks: [65, 33, 7, 12, 60, 23, 25, 18],
          options: ["Fold","call", "3bet 4.5bb", "3bet 8.0bb", "ALLIN"]
        }),
        bands: [
              { action: "call", min: 0.05, range: `KK:0.337, QQ:0.998, JJ:0.623, TT:0.027, 99:0.162, 88:0.121, 77:0.001, 66:0.036, AQs:0.924, AJs:0.971, ATs:0.843, A9s:0.001, AQo:0.252, KQs:0.997, KJs:0.053, KTs:0.093` },
              { action: "3bet 4.5bb", min: 0.05, range: `AA:0.067, KK:0.005, QQ:0.002, JJ:0.033, 88:0.004, 55:0.001, AKs:0.002, AJs:0.022, ATs:0.006, A9s:0.004, A8s:0.014, A7s:0.001, A6s:0.001, A5s:0.033, A4s:0.034, A3s:0.026, A2s:0.011, AKo:0.001, AQo:0.027, KQs:0.003, KJs:0.015, KTs:0.001, K7s:0.001` },
              { action: "3bet 8.0bb", min: 0.05, range: `AA:0.932, JJ:0.114, AQs:0.076, AJs:0.007, ATs:0.001, A9s:0.001, A8s:0.232, A7s:0.093, A6s:0.174, A5s:0.044, A4s:0.149, A3s:0.112, A2s:0.677, AQo:0.530, A5o:0.007` },
              { action: "ALLIN", min: 0.05, range: `KK:0.658, JJ:0.230, TT:0.051, 99:0.002, AKs:0.998, ATs:0.008, A9s:0.002, A8s:0.001, A5s:0.919, A4s:0.801, A3s:0.027, A2s:0.163, AKo:0.999` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },                         
    ]
  },
  {
    id: "50bb eff chase",          // ← あなたが言う「一つのid」
    label: "クラブマッチ",
    tags: ["chase"],                 // 任意（Homeのフィルタにも使える
    questionBuilder: (hand) => ({
      stacks: [50, 50, 50, 50, 50, 50],
    }),
    spots: [
        {
          id: "50bb eff LJ open chase",
          label: "LJ 50bb eff Open（クラブマッチ）",
          questionBuilder: (hand) => ({
            hand,
            pos: "LJ",
            eff: 50,
            facing: "Unopened",
            stacks: [50, 50, 50, 50, 50, 50],
            options: ["Fold","open 2.3bb"],
          }),
          bands: [
                { action: "open", min: 0.05, range: `99+, 88:0.997, 77:0.999, 66:0.999, 55:0.729, A9s+, A8s:0.999, A7s, A6s:0.999, A5s:0.999, A4s:0.999, A3s, A2s:0.997, ATo+, A9o:0.996, A8o:0.451, A7o:0.055, A5o:0.946, A4o:0.073, A3o:0.002, KJs+, KTs:0.999, K9s:0.995, K8s:0.978, K7s:0.995, K6s:0.970, K5s:0.904, K4s:0.350, K3s:0.011, KJo+, KTo:0.583, K5o:0.001, QJs, QTs:0.999, Q9s:0.964, Q8s:0.085, Q7s:0.012, QJo:0.483, QTo:0.003, JTs:0.997, J9s:0.714, T9s:0.959, T8s:0.710, 98s:0.013, 76s:0.005` },
          ],
          answerBuilder: (pattern, hand, _weight, optionsBB) =>
            ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
        },
        {
          id: "50bb eff HJ open chase",
          label: "HJ 50bb eff Open（クラブマッチ）",
          questionBuilder: (hand) => ({
            hand,
            pos: "HJ",
            eff: 50,
            facing: "Unopened",
            stacks: [50, 50, 50, 50, 50, 50],
            options: ["Fold","open 2.3bb"],
          }),
          bands: [
                { action: "open", min: 0.05, range: `99+, 88:0.999, 77, 66:0.997, 55:0.997, 44:0.618, 33:0.001, A8s+, A7s:0.999, A6s-A2s, A8o+, A7o:0.931, A6o:0.023, A5o:0.998, A4o:0.253, A3o:0.003, A2o:0.001, KQs, KJs:0.999, KTs, K9s:0.991, K8s, K7s:0.997, K6s:0.998, K5s:0.992, K4s:0.911, K3s:0.361, K2s:0.001, KJo+, KTo:0.999, K9o:0.001, QJs, QTs:0.999, Q9s:0.992, Q8s:0.923, Q7s:0.006, Q6s:0.294, QJo:0.998, QTo:0.537, JTs:0.998, J9s:0.984, J8s:0.867, JTo:0.466, T9s:0.986, T8s:0.934, T7s:0.581, 98s:0.808, 97s:0.158, 87s:0.078, 86s:0.006, 76s:0.385, 65s:0.693` },
          ],
          answerBuilder: (pattern, hand, _weight, optionsBB) =>
            ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
        },
        {
          id: "50bb eff CO open chase",
          label: "CO 50bb eff Open（クラブマッチ）",
          questionBuilder: (hand) => ({
            hand,
            pos: "CO",
            eff: 50,
            facing: "Unopened",
            stacks: [50, 50, 50, 50, 50, 50],
            options: ["Fold","open 2.3bb"],
          }),
          bands: [
                { action: "open", min: 0.05, range: `66+, 55:0.999, 44:0.998, 33:0.415, 22:0.007, A2s+, A7o+, A6o:0.997, A5o, A4o:0.994, A3o:0.320, A2o:0.009, KTs+, K9s:0.999, K8s:0.999, K7s:0.996, K6s:0.999, K5s:0.996, K4s:0.996, K3s, K2s:0.989, KTo+, K9o:0.998, K8o:0.006, K7o:0.003, K6o:0.001, K4o:0.001, QJs:0.999, QTs, Q9s:0.994, Q8s, Q7s:0.951, Q6s:0.613, Q5s:0.966, Q4s:0.287, Q3s:0.001, QJo, QTo:0.998, Q9o:0.030, JTs, J9s:0.994, J8s:0.998, J7s:0.971, J6s:0.006, J5s:0.154, J4s:0.035, J2s:0.001, JTo:0.999, J9o:0.001, T9s:0.998, T8s:0.996, T7s:0.911, T6s:0.009, T9o:0.531, 98s:0.988, 97s:0.975, 96s:0.215, 87s:0.919, 86s:0.910, 76s:0.966, 75s:0.210, 65s:0.864, 54s:0.168` },
          ],
          answerBuilder: (pattern, hand, _weight, optionsBB) =>
            ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
        },
        {
          id: "50bb eff BTN open chase",
          label: "BTN 50bb eff Open（クラブマッチ）",
          questionBuilder: (hand) => ({
            hand,
            pos: "BTN",
            eff: 50,
            facing: "Unopened",
            stacks: [50, 50, 50, 50, 50, 50],
            options: ["Fold","open 2.3bb"],
          }),
          bands: [
                { action: "open", min: 0.05, range: `55+, 44:0.999, 33-22, A2s+, A2o+, KTs+, K9s:0.999, K8s-K6s, K5s:0.997, K4s-K2s, K6o+, K5o:0.995, K4o:0.096, K3o:0.001, K2o:0.002, Q8s+, Q7s:0.999, Q6s:0.992, Q5s:0.998, Q4s:0.996, Q3s:0.998, Q2s:0.968, Q9o+, Q8o:0.986, Q7o:0.559, Q6o:0.004, JTs, J9s:0.998, J8s:0.998, J7s:0.998, J6s:0.994, J5s:0.996, J4s:0.950, J3s:0.520, J2s:0.290, J9o+, J8o:0.990, T7s+, T6s:0.999, T5s:0.927, T4s:0.848, T3s:0.386, T9o, T8o:0.991, T7o:0.440, 98s, 97s:0.999, 96s:0.992, 95s:0.742, 94s:0.025, 98o:0.972, 97o:0.004, 87s:0.997, 86s:0.991, 85s:0.996, 87o:0.428, 76s:0.999, 75s:0.991, 74s:0.618, 76o:0.203, 65s:0.999, 64s:0.862, 63s:0.001, 65o:0.004, 54s:0.998, 53s:0.978, 52s:0.001, 43s:0.003` },
          ],
          answerBuilder: (pattern, hand, _weight, optionsBB) =>
            ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
        },
        {
          id: "50bb eff BBvsLJ chase",
          label: "BB 50bb eff BBvsLJ（クラブマッチ）",
          questionBuilder: (hand) => ({
            hand,
            pos: "BB",
            eff: 50,
            facing: "LJ open 2.3x",
            stacks: [50, 50, 50, 50, 50, 50],
            options: ["Fold","call", "3bet 8.5bb"],
          }),
          bands: [
                { action: "3bet 8.5bb", min: 0.05, range: `AA, KK:0.664, AKs:0.818, AQs:0.012, A9s:0.038, A7s:0.163, A6s:0.261, A5s:0.118, A4s:0.691, A3s:0.815, A2s:0.412, AKo:0.542, AQo:0.017, ATo:0.038, A9o:0.010, A8o:0.061, A7o:0.533, A6o:0.151, A5o:0.349, A4o:0.523, A3o:0.534, A2o:0.057, KTs:0.003, K7s:0.096, K6s:0.004, K5s:0.423, K4s:0.044, K3s:0.001, K2s:0.100, KJo:0.047, KTo:0.033, K9o:0.103, K8o:0.046, K7o:0.010, K6o:0.039, K5o:0.038, K4o:0.023, K3o:0.018, K2o:0.002, QJs:0.009, QTs:0.001, Q9s:0.015, Q8s:0.039, Q5s:0.004, Q4s:0.001, Q2s:0.095, QJo:0.029, QTo:0.066, Q9o:0.067, Q8o:0.051, JTs:0.005, J9s:0.001, J7s:0.141, J5s:0.155, J3s:0.040, J2s:0.007, T7s:0.001, T6s:0.006, T3s:0.005, T9o:0.001, T8o:0.013, 98s:0.030, 97s:0.055, 95s:0.038, 93s:0.003, 92s:0.001, 98o:0.015, 87s:0.080, 83s:0.001, 87o:0.042, 76s:0.008, 76o:0.027, 75o:0.025, 62s:0.043, 54s:0.055, 52s:0.003, 43s:0.025` },
                { action: "call", min: 0.05, range: `KK:0.336, QQ-22, AKs:0.182, AQs:0.988, AJs-ATs, A9s:0.962, A8s, A7s:0.837, A6s:0.738, A5s:0.881, A4s:0.308, A3s:0.184, A2s:0.585, AKo:0.458, AQo:0.983, AJo, ATo:0.962, A9o:0.989, A8o:0.933, A7o:0.418, A6o:0.342, A5o:0.605, A4o:0.452, A3o:0.025, KJs+, KTs:0.997, K9s:0.992, K8s, K7s:0.904, K6s:0.995, K5s:0.576, K4s:0.939, K3s:0.991, K2s:0.886, KQo, KJo:0.953, KTo:0.967, K9o:0.722, K8o:0.281, K7o:0.177, QJs:0.991, QTs:0.999, Q9s:0.984, Q8s:0.960, Q7s:0.999, Q6s:0.999, Q5s:0.990, Q4s:0.991, Q3s:0.999, Q2s:0.898, QJo:0.971, QTo:0.928, Q9o:0.616, Q8o:0.150, JTs:0.994, J9s:0.999, J8s:0.997, J7s:0.857, J6s:0.991, J5s:0.449, J4s:0.725, J3s:0.418, J2s:0.075, JTo:0.994, J9o:0.600, J8o:0.003, T9s:0.999, T8s:0.995, T7s:0.999, T6s:0.986, T5s:0.989, T4s:0.298, T3s:0.078, T2s:0.001, T9o:0.988, T8o:0.707, 98s:0.966, 97s:0.944, 96s:0.998, 95s:0.284, 94s:0.332, 93s:0.136, 92s:0.171, 98o:0.798, 87s:0.918, 86s:0.993, 85s:0.998, 84s:0.977, 83s:0.002, 87o:0.618, 86o:0.001, 76s:0.992, 75s, 74s:0.988, 73s:0.461, 72s:0.006, 76o:0.967, 75o:0.257, 65s, 64s:0.999, 63s:0.974, 62s:0.683, 65o:0.978, 64o:0.141, 54s:0.945, 53s:0.997, 52s:0.982, 54o:0.517, 43s:0.971, 42s:0.994, 32s:0.734` },
          ],
          answerBuilder: (pattern, hand, _weight, optionsBB) =>
            ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
        },
    ]
  },
  {
    id: "75bb eff chase",          // ← あなたが言う「一つのid」
    label: "クラブマッチ",
    tags: ["chase"],                 // 任意（Homeのフィルタにも使える
    questionBuilder: (hand) => ({
      stacks: [75, 75, 75, 75, 75, 75],
    }),
    spots: [
          {
            id: "75bb eff LJ open chase",
            label: "LJ 75bb eff Open（クラブマッチ）",
            questionBuilder: (hand) => ({
              hand,
              pos: "LJ",
              eff: 75,
              facing: "Unopened",
              stacks: [75, 75, 75, 75, 75, 75],
              options: ["Fold","open 2.3bb"],
            }),
            bands: [
                  { action: "open", min: 0.05, range: `TT+, 99:0.999, 88-77, 66:0.994, 55:0.957, 44:0.045, ATs+, A9s:0.999, A8s, A7s:0.999, A6s-A5s, A4s:0.993, A3s:0.995, A2s:0.994, ATo+, A9o:0.992, A8o:0.459, A7o:0.006, A6o:0.003, A5o:0.350, A4o:0.002, KQs, KJs:0.999, KTs:0.998, K9s:0.985, K8s:0.996, K7s:0.893, K6s:0.992, K5s:0.880, K4s:0.468, K2s:0.003, KQo, KJo:0.975, KTo:0.718, QJs:0.994, QTs:0.997, Q9s:0.926, Q8s:0.074, Q6s:0.001, QJo:0.713, QTo:0.011, JTs:0.995, J9s:0.928, J8s:0.105, T9s:0.976, T8s:0.761, 98s:0.327, 97s:0.036, 76s:0.374, 65s:0.118, 54s:0.007` },
            ],
            answerBuilder: (pattern, hand, _weight, optionsBB) =>
              ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
          },
          {
            id: "75bb eff HJ open chase",
            label: "HJ 75bb eff Open（クラブマッチ）",
            questionBuilder: (hand) => ({
              hand,
              pos: "HJ",
              eff: 75,
              facing: "Unopened",
              stacks: [75, 75, 75, 75, 75, 75],
              options: ["Fold","open 2.3bb"],
            }),
            bands: [
                  { action: "open", min: 0.05, range: `TT+, 99:0.999, 88-77, 66:0.996, 55:0.992, 44:0.691, ATs+, A9s:0.999, A8s:0.999, A7s:0.997, A6s-A5s, A4s:0.999, A3s, A2s:0.999, ATo+, A9o:0.999, A8o:0.988, A7o:0.436, A6o:0.008, A5o:0.885, A4o:0.029, A3o:0.001, A2o:0.001, KQs, KJs:0.999, KTs, K9s:0.997, K8s:0.996, K7s:0.995, K6s:0.984, K5s:0.996, K4s:0.923, K3s:0.134, K2s:0.008, KTo+, QJs:0.999, QTs:0.998, Q9s:0.982, Q8s:0.893, Q7s:0.083, Q6s:0.100, Q5s:0.020, QJo:0.993, QTo:0.445, JTs:0.998, J9s:0.986, J8s:0.779, J7s:0.001, JTo:0.643, T9s:0.991, T8s:0.955, T7s:0.711, 98s:0.935, 97s:0.771, 87s:0.373, 76s:0.801, 75s:0.022, 65s:0.353, 54s:0.002` },
            ],
            answerBuilder: (pattern, hand, _weight, optionsBB) =>
              ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
          },
          {
            id: "75bb eff CO open chase",
            label: "CO 75bb eff Open（クラブマッチ）",
            questionBuilder: (hand) => ({
              hand,
              pos: "CO",
              eff: 75,
              facing: "Unopened",
              stacks: [75, 75, 75, 75, 75, 75],
              options: ["Fold","open 2.3bb"],
            }),
            bands: [
                  { action: "open", min: 0.05, range: `77+, 66:0.999, 55:0.999, 44:0.999, 33:0.639, A2s+, A7o+, A6o:0.843, A5o, A4o:0.853, A3o:0.011, A2o:0.001, KTs+, K9s:0.999, K8s:0.999, K7s:0.999, K6s:0.995, K5s:0.997, K4s:0.996, K3s:0.984, K2s:0.934, KTo+, K9o:0.986, K8o:0.081, K7o:0.001, K6o:0.001, QTs+, Q9s:0.999, Q8s:0.998, Q7s:0.972, Q6s:0.985, Q5s:0.818, Q4s:0.370, Q3s:0.001, QTo+, Q9o:0.022, JTs:0.998, J9s:0.999, J8s:0.987, J7s:0.969, J6s:0.004, J5s:0.011, JTo:0.998, T9s, T8s:0.991, T7s:0.964, T6s:0.089, T9o:0.428, T8o:0.001, 98s:0.986, 97s:0.876, 96s:0.167, 87s:0.993, 86s:0.812, 85s:0.017, 76s:0.980, 75s:0.737, 65s:0.902, 54s:0.876` },
            ],
            answerBuilder: (pattern, hand, _weight, optionsBB) =>
              ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
          },
          {
            id: "75bb eff BTN open chase",
            label: "BTN 75bb eff Open（クラブマッチ）",
            questionBuilder: (hand) => ({
              hand,
              pos: "BTN",
              eff: 75,
              facing: "Unopened",
              stacks: [75, 75, 75, 75, 75, 75],
              options: ["Fold","open 2.3bb"],
            }),
            bands: [
                  { action: "open", min: 0.05, range: `22+, A2s+, A2o+, K7s+, K6s:0.999, K5s-K3s, K2s:0.998, K9o+, K8o:0.999, K7o-K6o, K5o:0.996, K4o:0.239, K3o:0.002, QJs:0.999, QTs, Q9s:0.999, Q8s:0.999, Q7s, Q6s:0.999, Q5s:0.997, Q4s:0.992, Q3s, Q2s:0.997, Q9o+, Q8o:0.987, Q7o:0.485, Q6o:0.003, JTs, J9s:0.999, J8s, J7s:0.999, J6s:0.997, J5s:0.999, J4s:0.996, J3s:0.998, J2s:0.927, J9o+, J8o:0.966, J7o:0.001, T9s, T8s:0.999, T7s:0.999, T6s:0.996, T5s:0.963, T4s:0.957, T3s:0.268, T2s:0.002, T9o, T8o:0.996, T7o:0.578, 98s:0.999, 97s:0.999, 96s, 95s:0.971, 94s:0.082, 98o:0.955, 97o:0.100, 87s:0.994, 86s:0.995, 85s:0.967, 84s:0.248, 82s:0.001, 87o:0.385, 86o:0.001, 76s:0.998, 75s:0.969, 74s:0.974, 73s:0.001, 76o:0.787, 65s, 64s:0.986, 63s:0.068, 65o:0.003, 54s:0.999, 53s:0.959, 43s:0.774, 42s:0.001` },
            ],
            answerBuilder: (pattern, hand, _weight, optionsBB) =>
              ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
          },
          {
            id: "75bb eff BTN-LJ chase",
            label: "BTN 75bb eff BTN-LJ",
            questionBuilder: (hand) => ({
              hand,
              pos: "BTN",
              eff: 75,
              facing: "LJ open 2.3x",
              stacks: [75, 75, 75, 75, 75, 75],
              options: ["Fold","call", "3bet 6bb", "3bet 10bb"],
            }),
            bands: [
                  { action: "3bet 10bb", min: 0.05, range: `KK:0.415, QQ:0.999, JJ:0.926, TT:0.821, 99:0.984, 88:0.911, 77:0.938, 66:0.647, 55:0.781, 44:0.164, 33:0.051, AKs:0.359, AQs:0.991, AJs:0.846, ATs:0.998, A9s:0.940, A8s:0.810, A7s:0.369, A6s:0.211, A5s:0.554, A4s:0.004, A3s:0.016, A2s:0.429, AKo:0.207, AQo:0.402, AJo:0.897, ATo:0.276, KQs:0.992, KJs:0.969, KTs:0.996, K9s:0.742, K8s:0.257, K7s:0.026, K6s:0.042, KQo:0.737, KJo:0.028, QJs:0.850, QTs:0.979, JTs:0.870, J9s:0.001, J8s:0.002, T9s:0.887, T8s:0.001, T7s:0.033, 98s:0.005, 87s:0.161, 86s:0.001, 85s:0.002, 76s:0.414, 65s:0.810, 54s:0.137` },
                  { action: "3bet 6bb", min: 0.05, range: `AA:0.181, KK:0.284, JJ:0.074, TT:0.178, 99:0.015, 88:0.080, 77:0.049, 66:0.076, 55:0.037, 44:0.053, AKs:0.336, AQs:0.006, AJs:0.154, ATs:0.001, A9s:0.036, A8s:0.003, A7s:0.008, A6s:0.157, A5s:0.394, A4s:0.282, A3s:0.028, A2s:0.121, AKo:0.337, AQo:0.057, AJo:0.022, ATo:0.196, A4o:0.001, A3o:0.001, KQs:0.004, KJs:0.011, KTs:0.002, K9s:0.032, K8s:0.261, K7s:0.175, K6s:0.016, K5s:0.049, K4s:0.308, K3s:0.019, K2s:0.003, KQo:0.083, KJo:0.063, KTo:0.036, K7o:0.001, QJs:0.129, QTs:0.004, Q9s:0.065, Q8s:0.105, JTs:0.003, J9s:0.022, T7s:0.001, 98s:0.001, 87s:0.007, 76s:0.002, 75s:0.022, 65s:0.087, 54s:0.113, 53s:0.001` },
                  { action: "call", min: 0.05, range: `KK:0.415, QQ:0.999, JJ:0.926, TT:0.821, 99:0.984, 88:0.911, 77:0.938, 66:0.647, 55:0.781, 44:0.164, 33:0.051, AKs:0.359, AQs:0.991, AJs:0.846, ATs:0.998, A9s:0.940, A8s:0.810, A7s:0.369, A6s:0.211, A5s:0.554, A4s:0.004, A3s:0.016, A2s:0.429, AKo:0.207, AQo:0.402, AJo:0.897, ATo:0.276, KQs:0.992, KJs:0.969, KTs:0.996, K9s:0.742, K8s:0.257, K7s:0.026, K6s:0.042, KQo:0.737, KJo:0.028, QJs:0.850, QTs:0.979, JTs:0.870, J9s:0.001, J8s:0.002, T9s:0.887, T8s:0.001, T7s:0.033, 98s:0.005, 87s:0.161, 86s:0.001, 85s:0.002, 76s:0.414, 65s:0.810, 54s:0.137` },
            ],
            answerBuilder: (pattern, hand, _weight, optionsBB) =>
              ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
          },
    ]
  },
  {
    id: "37BB eff chase",          // ← あなたが言う「一つのid」
    label: "クラブマッチ 6left",
    tags: ["ante"],                 // 任意（Homeのフィルタにも使える
    questionBuilder: (hand) => ({
      stacks: [37, 37, 37, 37, 37, 37],
    }),
    spots: [
      {
        id: "LJ open",
        label: "LJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "LJ",
          eff: 37,
          facing: "Unopened",
          stacks: [37, 37, 37, 37, 37, 37],
          options: ["Fold","open 2.1bb"],
        }),
        bands: [
          { action: "open 2.1bb", min: 0.05, range: `66+, 55:0.831, A2s+, A9o+, A8o:0.929, A5o:0.507, K8s+, K7s:0.999, K6s:0.999, K5s:0.784, K4s:0.155, KJo+, KTo:0.984, Q9s+, QJo:0.771, JTs, J9s:0.998, T9s:0.998, T8s:0.893, 76s:0.050` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "HJ open",
        label: "HJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 37,
          facing: "Unopened",
          stacks: [37, 37, 37, 37, 37, 37],
          options: ["Fold","open 2.1bb"],
        }),
        bands: [
          { action: "open 2.1bb", min: 0.05, range: `55+, A2s+, A8o+, A7o:0.961, A6o:0.019, A5o:0.997, A4o:0.004, K6s+, K5s:0.999, K4s:0.999, K3s:0.559, KTo+, Q9s+, Q8s:0.977, QJo, QTo:0.767, J9s+, J8s:0.462, JTo:0.452, T8s+, T7s:0.005, 98s:0.979, 87s:0.056, 86s:0.001, 76s:0.163, 65s:0.158` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "CO open",
        label: "CO openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "CO",
          eff: 37,
          facing: "Unopened",
          stacks: [37, 37, 37, 37, 37, 37],
          options: ["Fold","open 2.1bb"],
        }),
        bands: [
          { action: "open 2.1bb", min: 0.05, range: `55+, 44:0.621, A2s+, A5o+, A4o:0.958, A3o:0.041, K4s+, K3s:0.999, K2s:0.833, K9o+, K8o:0.009, Q7s+, Q6s:0.915, Q5s:0.508, QTo+, Q9o:0.007, J8s+, J7s:0.453, JTo, T8s+, T7s:0.959, T9o:0.044, 98s, 97s:0.945, 96s:0.001, 87s:0.994, 86s:0.001, 76s:0.533, 65s:0.249` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "BTN open",
        label: "BTN openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 37,
          facing: "Unopened",
          stacks: [37, 37, 37, 37, 37, 37],
          options: ["Fold","open 2.1bb"],
        }),
        bands: [
          { action: "open 2.1bb", min: 0.05, range: `44+, 33:0.251, A2s+, A3o+, A2o:0.572, K2s+, K8o+, K7o:0.960, K6o:0.053, K5o:0.001, Q4s+, Q3s:0.292, Q2s:0.002, Q9o+, Q8o:0.187, J7s+, J6s:0.971, J5s:0.840, J4s:0.020, J9o+, T7s+, T6s:0.867, T9o:0.999, T8o:0.020, 97s+, 96s:0.196, 98o:0.003, 87s, 86s:0.965, 85s:0.010, 76s, 75s:0.273, 65s:0.995, 54s:0.727` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingUTGopen",
        label: "HJvsUTG defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 37,
          facing: "UTG open 2.0x",
          stacks: [37, 37, 37, 37, 37, 37],
          options: ["Fold","call", "3bet 5.5bb", "3bet 8.0bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `KK:0.840, QQ:0.999, JJ:0.919, TT:0.999, 99:0.991, 88:0.503, 77:0.014, 66:0.298, 55:0.001, AKs:0.018, AQs, AJs:0.999, ATs:0.998, A9s:0.969, A8s:0.114, A7s:0.061, A5s:0.682, A4s:0.300, A3s:0.046, AKo:0.047, AQo:0.780, AJo:0.599, KQs, KJs:0.997, KTs:0.957, KQo:0.472, QJs:0.607, JTs:0.001, T9s:0.001, 65s:0.145, 54s:0.010` },
              { action: "3bet 5.5bb", min: 0.05, range: `AA:0.574, KK:0.100, QQ:0.001, JJ:0.081, 99:0.002, 88:0.026, 66:0.001, AKs:0.132, AJs:0.001, ATs:0.001, A9s:0.021, A8s:0.320, A7s:0.242, A6s:0.538, A5s:0.274, A4s:0.548, A3s:0.461, A2s:0.216, AKo:0.015, AQo:0.217, AJo:0.319, ATo:0.009, A7o:0.002, A5o:0.005, A4o:0.001, A2o:0.001, KJs:0.001, KTs:0.040, K6s:0.006, K3s:0.002, KQo:0.044` },
              { action: "3bet 8.0bb", min: 0.05, range: `AA:0.426, KK:0.060, AKs:0.201, ATs:0.001, A9s:0.002, A8s:0.046, A7s:0.068, A6s:0.097, A5s:0.039, A4s:0.137, A3s:0.341, A2s:0.300, AKo:0.013, AQo:0.003, AJo:0.007, ATo:0.012, A9o:0.013, A8o:0.005, A7o:0.002, A6o:0.003, A5o:0.033, A4o:0.125, A3o:0.105, A2o:0.203, K9s:0.004, K7s:0.002, K6s:0.026, K5s:0.005, K3s:0.010, K2s:0.004, KQo:0.006, KTo:0.004, K7o:0.005, K6o:0.002, K4o:0.007` },
              { action: "ALLIN", min: 0.05, range: `AKs:0.648, AKo:0.925` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingUTGopen",
        label: "COvsUTG defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "CO",
          eff: 37,
          facing: "UTG open 2.0x",
          stacks: [37, 37, 37, 37, 37, 37],
          options: ["Fold","call", "3bet 5.5bb", "3bet 8.0bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `KK:0.090, QQ:0.985, JJ:0.920, TT, 99:0.991, 88:0.983, 77:0.563, 66:0.216, 55:0.082, AKs:0.319, AQs-ATs, A9s:0.970, A8s:0.616, A7s:0.095, A5s:0.685, A4s:0.133, A3s:0.089, AKo:0.596, AQo:0.724, AJo:0.836, KQs:0.999, KJs, KTs:0.998, KQo:0.668, QJs:0.900, QTs:0.730, JTs:0.886, T9s:0.188, 76s:0.140, 65s:0.149, 54s:0.118` },
              { action: "3bet 5.5bb", min: 0.05, range: `AA:0.352, KK:0.256, JJ:0.080, 99:0.008, 88:0.009, 77:0.119, 66:0.005, AKs:0.278, A9s:0.027, A8s:0.255, A7s:0.725, A6s:0.312, A5s:0.252, A4s:0.376, A3s:0.261, A2s:0.139, AKo:0.079, AQo:0.264, AJo:0.129, ATo:0.146, A9o:0.001, A7o:0.001, A5o:0.006, A4o:0.001, K9s:0.044, K7s:0.049, K6s:0.117, KQo:0.180` },
              { action: "3bet 8.0bb", min: 0.05, range: `AA:0.648, KK:0.654, AKs:0.344, A8s:0.067, A7s:0.145, A6s:0.414, A5s:0.031, A4s:0.468, A3s:0.627, A2s:0.726, AKo:0.207, AQo:0.012, AJo:0.031, ATo:0.136, A9o:0.159, A8o:0.049, A7o:0.097, A6o:0.061, A5o:0.138, A4o:0.250, A3o:0.210, A2o:0.063, K9s:0.001, K8s:0.007, K7s:0.181, K6s:0.121, K5s:0.178, K4s:0.207, K3s:0.044, K2s:0.089, KQo:0.026, KJo:0.067, KTo:0.001, K7o:0.012, K6o:0.033, K4o:0.039, K3o:0.002` },
              { action: "ALLIN", min: 0.05, range: `QQ:0.015, 77:0.037, 66:0.022, 55:0.015, 44:0.017, 33:0.011, AKs:0.059, A9s:0.001, A8s:0.003, A7s:0.014, A6s:0.005, A5s:0.030, A4s:0.021, A3s:0.021, A2s:0.008, AKo:0.119, KQs:0.001` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },       
    ]
  },
  {
    id: "TSL MysteryBounty rule Ante",          // ← あなたが言う「一つのid」
    label: "TSL ミステリーバウンティ 8left",
    tags: ["ante"],                 // 任意（Homeのフィルタにも使える
    questionBuilder: (hand) => ({
      stacks: [25, 14, 78, 26, 20, 51, 36, 44],
    }),
    spots: [
      {
        id: "UTGopen",
        label: "UTG openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG",
          eff: 25,
          facing: "Unopened",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","open 2bb"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `88+, 77:0.212, 66:0.148, ATs+, A9s:0.973, A8s:0.287, A7s:0.252, A5s:0.628, AQo+, AJo:0.013, KTs+, K9s:0.132, KQo:0.212, QJs:0.983, QTs:0.449, JTs:0.256` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "UTG+1open",
        label: "UTG+1 openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "UTG+1",
          eff: 14,
          facing: "Unopened",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `AA, KK:0.766, QQ:0.038, JJ:0.156, TT:0.131, 99:0.260, 88:0.597, AKs:0.828, AQs:0.984, AJs-ATs, A9s:0.123, AQo:0.251, AJo:0.003, KQs, KJs:0.333, KTs:0.220, QJs:0.001` },
          { action: "ALLIN", min: 0.05, range: `KK:0.234, QQ:0.962, JJ:0.844, TT:0.869, 99:0.740, AKs:0.172, AQs:0.016, AKo, AQo:0.749` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "LJopen",
        label: "LJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "LJ",
          eff: 78,
          facing: "Unopened",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","open 2bb"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `33+, 22:0.999, A2s+, A3o+, A2o:0.601, K2s+, K8o+, K7o:0.999, K6o:0.522, Q4s+, Q3s:0.998, Q2s:0.997, Q9o+, Q8o:0.945, J7s+, J6s:0.999, J5s:0.999, J4s:0.997, J3s:0.893, J9o+, J8o:0.412, T7s+, T6s:0.999, T5s:0.963, T4s:0.315, T9o, T8o:0.995, 96s+, 95s:0.979, 98o:0.936, 86s+, 85s:0.995, 75s+, 74s:0.936, 64s+, 63s:0.013, 54s, 53s:0.994, 52s:0.002, 43s:0.980` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "HJopen",
        label: "HJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 26,
          facing: "Unopened",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `88+, 77:0.999, 66:0.919, 55:0.094, ATs+, A9s:0.999, A8s, A7s:0.999, A6s:0.733, A5s:0.999, A4s:0.775, A3s:0.007, AJo+, ATo:0.907, KTs+, K9s:0.999, K8s:0.756, K7s:0.022, KQo, KJo:0.199, KTo:0.001, QJs:0.998, QTs, Q9s:0.553, QJo:0.001, JTs, J9s:0.062, T9s:0.738, 98s:0.011` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "COopen",
        label: "CO openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "CO",
          eff: 20,
          facing: "Unopened",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `JJ+, TT:0.819, 99:0.696, 88, 77:0.964, 66:0.629, 55:0.006, ATs+, A9s:0.997, A8s, A7s:0.962, A6s:0.438, A5s:0.996, A4s:0.450, AKo:0.899, AQo:0.651, AJo, ATo:0.286, KTs+, K9s:0.982, K8s:0.011, K7s:0.001, KQo, KJo:0.001, QTs+, Q9s:0.507, Q6s:0.001, JTs:0.998, J9s:0.002, T9s:0.453, 98s:0.002` },
          { action: "ALLIN", min: 0.05, range: `TT:0.181, 99:0.304, AKo:0.101, AQo:0.349` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "BTNopen",
        label: "BTN openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 51,
          facing: "Unopened",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","open 2bb"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `22+, A2s+, A2o+, K2s+, K4o+, K3o:0.992, K2o:0.001, Q2s+, Q7o+, Q6o:0.999, Q5o:0.995, Q4o:0.896, J2s+, J7o+, J6o:0.707, J5o:0.269, T4s+, T3s:0.996, T2s:0.995, T7o+, T6o:0.840, 95s+, 94s:0.997, 93s:0.549, 92s:0.021, 98o, 97o:0.997, 96o:0.080, 85s+, 84s:0.994, 87o:0.999, 86o:0.720, 75s+, 74s:0.997, 73s:0.262, 76o:0.977, 64s+, 63s:0.987, 65o:0.122, 54s:0.999, 53s, 52s:0.201, 43s:0.999, 42s:0.393` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingUTGopen",
        label: "BBvsUTG defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 44,
          facing: "UTG open 2.0x",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","call", "3bet 6.5bb", "3bet 9.0bb"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `JJ:0.774, TT:0.994, 99, 88:0.944, 77:0.674, 66:0.659, 55:0.986, 44-22, AQs:0.989, AJs:0.980, ATs:0.999, A9s:0.999, A8s:0.998, A7s:0.994, A6s:0.973, A5s:0.925, A4s:0.930, A3s:0.993, A2s:0.967, AQo:0.471, AJo:0.815, ATo:0.999, A9o:0.999, A8o:0.961, A7o:0.925, A6o:0.928, A5o:0.810, A4o:0.891, A3o:0.477, A2o:0.839, KQs:0.932, KJs:0.452, KTs:0.999, K9s:0.979, K8s:0.709, K7s:0.944, K6s:0.555, K5s, K4s:0.991, K3s:0.997, K2s:0.976, KQo:0.621, KJo:0.995, KTo:0.998, K9o:0.972, K8o:0.973, K7o:0.714, K6o:0.923, K5o:0.943, K4o:0.766, K3o:0.648, K2o:0.580, QJs, QTs:0.999, Q9s:0.999, Q8s:0.999, Q7s-Q5s, Q4s:0.995, Q3s-Q2s, QTo+, Q9o:0.995, Q8o:0.604, Q7o:0.270, Q6o:0.313, Q4o:0.037, JTs, J9s:0.999, J8s, J7s:0.999, J6s:0.999, J5s-J3s, J2s:0.998, J8o+, J7o:0.921, J6o:0.902, J5o:0.110, J4o:0.005, J3o:0.015, T7s+, T6s:0.999, T5s-T2s, T9o:0.999, T8o, T7o:0.982, T6o:0.390, 98s:0.900, 97s:0.999, 96s-95s, 94s:0.991, 93s:0.994, 92s:0.998, 98o:0.998, 97o, 96o:0.861, 95o:0.010, 87s, 86s:0.998, 85s:0.897, 84s, 83s:0.999, 82s:0.995, 87o:0.978, 86o:0.999, 85o:0.648, 76s:0.805, 75s, 74s:0.716, 73s:0.999, 72s:0.997, 76o, 75o:0.999, 74o:0.950, 73o:0.001, 65s:0.978, 64s:0.987, 63s:0.973, 62s:0.992, 65o, 64o:0.999, 63o:0.978, 52s+, 54o, 53o:0.999, 52o:0.832, 43s:0.996, 42s, 43o:0.993, 42o:0.291, 32s, 32o:0.031` },
              { action: "3bet 5.0bb", min: 0.05, range: `QQ+, JJ:0.225, TT:0.006, 88:0.055, 77:0.325, 66:0.341, 55:0.014, AKs, AQs:0.011, AJs:0.020, A8s:0.002, A7s:0.006, A6s:0.023, A5s:0.075, A4s:0.067, A3s:0.002, A2s:0.033, AKo:0.998, AQo:0.528, AJo:0.185, ATo:0.001, A9o:0.001, A8o:0.037, A7o:0.075, A6o:0.071, A5o:0.190, A4o:0.108, A3o:0.523, A2o:0.157, KQs:0.068, KJs:0.548, K9s:0.021, K8s:0.291, K7s:0.056, K6s:0.444, K4s:0.009, K3s:0.003, K2s:0.024, KQo:0.379, KJo:0.005, KTo:0.002, K9o:0.019, K8o:0.027, K7o:0.285, K6o:0.077, K5o:0.049, K4o:0.221, K3o:0.351, K2o:0.003, QTs:0.001, Q9s:0.001, Q4s:0.004, J9s:0.001, J7s:0.001, J2s:0.002, 98s:0.100, 97s:0.001, 94s:0.008, 93s:0.002, 86s:0.002, 85s:0.102, 83s:0.001, 82s:0.005, 87o:0.022, 76s:0.195, 74s:0.284, 73s:0.001, 72s:0.001, 65s:0.022, 64s:0.013, 63s:0.027, 62s:0.008, 63o:0.014, 43s:0.004` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingBTNopen",
        label: "BBvsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 44,
          facing: "BTN open 2.0x",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","call", "3bet 5.0bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `QQ:0.091, JJ:0.998, TT-66, 55:0.736, 44, 33:0.965, 22, AQs:0.326, AJs:0.647, ATs:0.645, A9s, A8s:0.999, A7s:0.997, A6s, A5s:0.935, A4s:0.481, A3s:0.978, A2s:0.998, AQo:0.497, AJo:0.999, ATo:0.965, A9o-A6o, A5o:0.993, A4o:0.964, A3o:0.799, A2o:0.176, KQs:0.999, KJs:0.953, KTs:0.996, K9s-K8s, K7s:0.998, K6s:0.998, K5s, K4s:0.959, K3s:0.999, K2s, KQo, KJo:0.949, KTo:0.955, K9o:0.714, K8o:0.890, K7o:0.997, K6o:0.998, K5o:0.995, K4o:0.996, K3o:0.717, K2o:0.842, QJs:0.907, QTs:0.998, Q9s:0.909, Q8s:0.994, Q7s:0.999, Q6s-Q5s, Q4s:0.987, Q3s:0.921, Q2s:0.998, QJo:0.984, QTo, Q9o:0.964, Q8o:0.759, Q7o, Q6o:0.995, Q5o, Q4o:0.934, Q3o-Q2o, JTs:0.994, J9s:0.237, J8s:0.995, J7s:0.995, J6s:0.504, J5s:0.979, J4s:0.999, J3s:0.998, J2s:0.969, JTo:0.993, J9o:0.798, J8o:0.993, J7o-J4o, J3o:0.994, J2o:0.994, T9s:0.556, T8s:0.982, T7s:0.934, T6s:0.873, T5s:0.514, T4s:0.999, T3s:0.997, T2s:0.999, T9o, T8o:0.999, T7o:0.984, T6o:0.975, T5o:0.996, T4o:0.940, T3o:0.158, T2o:0.001, 98s:0.926, 97s:0.847, 96s:0.985, 95s:0.983, 94s-92s, 98o:0.959, 97o:0.999, 96o, 95o:0.981, 87s:0.988, 86s:0.691, 85s:0.873, 84s:0.998, 83s-82s, 87o, 86o:0.979, 85o, 84o:0.001, 76s:0.734, 75s:0.965, 74s:0.983, 73s:0.975, 72s, 76o:0.988, 75o:0.936, 74o:0.962, 65s:0.886, 64s-63s, 62s:0.997, 65o:0.907, 64o:0.997, 54s:0.680, 53s-52s, 53o+, 43s:0.713, 42s:0.979, 43o:0.992, 32s` },
              { action: "3bet 5.0bb", min: 0.05, range: `AA, KK:0.159, QQ:0.128, 55:0.264, 33:0.035, AKs:0.618, AQs:0.674, AJs:0.353, ATs:0.355, A8s:0.001, A7s:0.003, A5s:0.065, A4s:0.518, A3s:0.022, AKo:0.006, AQo:0.148, AJo:0.001, ATo:0.035, A5o:0.006, A4o:0.017, A3o:0.003, KQs:0.001, KJs:0.047, KTs:0.004, K7s:0.002, K6s:0.002, K4s:0.041, KJo:0.051, KTo:0.045, K9o:0.079, K8o:0.005, K4o:0.004, K3o:0.019, K2o:0.006, QJs:0.093, QTs:0.002, Q9s:0.091, Q8s:0.003, Q7s:0.001, Q4s:0.011, Q3s:0.079, Q2s:0.002, QJo:0.016, Q9o:0.012, Q6o:0.005, Q4o:0.065, JTs:0.006, J9s:0.763, J8s:0.003, J6s:0.496, J5s:0.021, J4s:0.001, J3s:0.002, J2s:0.005, JTo:0.007, J9o:0.041, J8o:0.007, T9s:0.444, T8s:0.018, T7s:0.065, T6s:0.127, T5s:0.486, T4s:0.001, T3s:0.003, T8o:0.001, T7o:0.016, T6o:0.025, T5o:0.003, 98s:0.073, 97s:0.153, 96s:0.015, 95s:0.017, 98o:0.041, 97o:0.001, 95o:0.019, 87s:0.012, 86s:0.309, 85s:0.126, 84s:0.002, 86o:0.021, 76s:0.266, 75s:0.035, 74s:0.017, 73s:0.025, 76o:0.012, 75o:0.064, 65s:0.114, 62s:0.003, 65o:0.093, 64o:0.003, 54s:0.320, 43s:0.287, 42s:0.021` },
              { action: "ALLIN", min: 0.05, range: `KK:0.841, QQ:0.782, JJ:0.002, AKs:0.382, A4s:0.001, A2s:0.001, AKo:0.994, AQo:0.355, A5o:0.001, A4o:0.018, A3o:0.198, A2o:0.824, K3s:0.001, K9o:0.207, K8o:0.106, K7o:0.003, K6o:0.002, K5o:0.005, K3o:0.263, K2o:0.152, Q8s:0.003, Q4s:0.002, Q9o:0.025, Q8o:0.241, J8s:0.002, J7s:0.005, J2s:0.026, J9o:0.160, T2s:0.001` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },       
      {
        id: "LJopenvsBTN",
        label: "LJvsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 51,
          facing: "LJ open 2.0x",
          stacks: [25, 14, 78, 26, 20, 51, 36, 44],
          options: ["Fold","call", "3bet 4.5bb", "3bet 7.0bb"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `KK:0.228, QQ:0.693, JJ:0.527, TT:0.609, 99:0.969, 88:0.984, 77:0.944, 66:0.953, 55:0.998, 44:0.999, 33-22, AKs:0.682, AQs:0.835, AJs:0.851, ATs:0.960, A9s:0.997, A8s:0.994, A7s, A6s:0.830, A5s:0.872, A4s:0.860, A3s:0.861, A2s:0.615, AKo:0.132, AQo:0.563, AJo:0.991, ATo:0.993, A9o:0.948, KQs:0.993, KJs:0.957, KTs:0.935, K9s:0.996, K8s:0.993, K7s:0.932, K6s:0.645, K5s:0.803, K4s:0.236, K3s:0.195, K2s:0.001, KQo:0.864, KJo:0.823, KTo:0.727, QJs:0.980, QTs:0.985, Q9s:0.968, Q8s:0.980, Q7s:0.396, Q6s:0.833, QJo:0.936, QTo:0.969, JTs:0.928, J9s:0.851, J8s:0.987, J7s:0.002, JTo:0.604, T9s:0.854, T8s:0.607, T7s:0.756, 98s:0.997, 97s:0.972, 87s:0.697, 86s:0.652, 76s:0.625, 75s:0.661, 74s:0.001, 65s:0.724, 64s:0.068, 54s:0.591, 53s:0.002` },
              { action: "3bet 4.5bb", min: 0.05, range: `AA:0.152, KK:0.001, QQ:0.003, JJ:0.010, TT:0.036, 99:0.016, 88:0.001, 77:0.020, 66:0.001, 55:0.002, 44:0.001, AKs:0.158, AQs:0.013, AJs:0.149, ATs:0.040, A9s:0.003, A8s:0.005, A6s:0.124, A5s:0.087, A4s:0.039, A3s:0.020, A2s:0.022, AKo:0.002, AQo:0.012, AJo:0.007, ATo:0.007, A9o:0.003, A8o:0.007, KQs:0.002, KJs:0.043, KTs:0.057, K9s:0.003, K7s:0.031, K6s:0.056, K5s:0.010, K4s:0.017, KJo:0.020, KTo:0.002, QJs:0.020, QTs:0.013, Q8s:0.003, Q6s:0.001, QJo:0.024, QTo:0.025, JTs:0.032, J9s:0.040, J8s:0.001, JTo:0.009, T9s:0.090, T8s:0.048, T7s:0.003, 97s:0.002, 87s:0.083, 76s:0.007, 65s:0.013, 54s:0.059, 53s:0.001` },
              { action: "3bet 7.0bb", min: 0.05, range: `AA:0.847, KK:0.771, QQ:0.305, JJ:0.463, TT:0.356, 99:0.015, 88:0.015, 77:0.036, 66:0.046, AKs:0.160, AQs:0.152, A8s:0.001, A6s:0.046, A5s:0.042, A4s:0.101, A3s:0.119, A2s:0.363, AKo:0.861, AQo:0.425, AJo:0.003, A9o:0.047, A8o:0.308, A7o:0.277, A6o:0.014, A5o:0.406, A4o:0.007, KQs:0.005, KTs:0.008, K9s:0.001, K8s:0.006, K7s:0.035, K6s:0.296, K5s:0.186, K4s:0.743, K3s:0.402, K2s:0.383, KQo:0.136, KJo:0.157, KTo:0.267, QTs:0.001, Q9s:0.032, Q8s:0.009, Q7s:0.176, Q5s:0.015, QJo:0.040, QTo:0.003, JTs:0.041, J9s:0.109, J8s:0.011, J7s:0.151, J6s:0.007, J5s:0.004, JTo:0.313, T9s:0.056, T8s:0.331, 98s:0.002, 97s:0.017, 87s:0.204, 86s:0.017, 76s:0.367, 75s:0.003, 65s:0.261, 64s:0.021, 54s:0.175` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },         
    ]
  },
  {
    id: "TSL Normal rule Ante",          // ← あなたが言う「一つのid」
    label: "TSL 通常ルール 6left",
    tags: ["ante"],                 // 任意（Homeのフィルタにも使える
    questionBuilder: (hand) => ({
      stacks: [24, 33, 26, 20, 14, 33],
    }),
    spots: [
      {
        id: "LJ open",
        label: "LJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "LJ",
          eff: 24,
          facing: "Unopened",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","open 2bb"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `77+, 66:0.576, A4s+, A3s:0.997, ATo+, A9o:0.511, K8s+, K7s:0.873, K6s:0.171, KQo, KJo:0.886, QTs+, Q9s:0.999, Q8s:0.572, QJo:0.469, JTs, J9s:0.331, T9s:0.644, T8s:0.001` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "HJ open",
        label: "HJ openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "HJ",
          eff: 33,
          facing: "Unopened",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","open 2bb"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `66+, 55:0.116, A2s+, A7o+, A6o:0.116, A5o:0.876, K6s+, K5s:0.993, K4s:0.208, KTo+, K9o:0.003, Q8s+, Q7s:0.338, Q6s:0.012, QTo+, J9s+, J8s:0.866, JTo:0.638, T9s, T8s:0.984, 98s:0.292` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "CO open",
        label: "CO openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "CO",
          eff: 26,
          facing: "Unopened",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","open 2bb"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `66+, 55:0.825, A2s+, A8o+, A7o:0.990, A5o:0.080, K7s+, K6s:0.999, K5s:0.624, KTo+, Q8s+, Q7s:0.721, Q6s:0.001, QTo+, J9s+, J8s:0.619, J7s:0.013, JTo:0.858, T8s+, T7s:0.006, 98s:0.849` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "BTN open",
        label: "BTN openrange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 20,
          facing: "Unopened",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","open 2bb", "ALLIN"],
        }),
        bands: [
          { action: "open 2bb", min: 0.05, range: `99+, 88:0.344, 77:0.996, 66:0.505, 55:0.151, A9s+, A8s:0.954, A7s:0.823, A6s:0.942, A5s:0.999, A4s:0.243, A2s:0.001, AKo:0.965, AQo:0.227, AJo:0.081, ATo:0.160, A9o:0.998, A8o:0.490, A7o:0.881, A6o:0.915, A5o:0.816, A4o:0.078, KQs, KJs:0.821, KTs:0.450, K8s:0.901, K7s:0.998, K6s:0.996, K5s, K4s:0.959, K3s:0.271, K2s:0.001, KQo:0.020, KJo:0.572, KTo:0.409, K9o:0.995, K8o:0.001, QJs:0.162, QTs:0.014, Q9s:0.065, Q8s:0.996, Q7s, Q6s:0.990, Q5s:0.394, QJo:0.391, QTo:0.429, Q9o:0.976, JTs:0.002, J9s:0.025, J8s:0.995, J7s, J6s:0.037, JTo:0.870, J9o:0.198, T9s:0.024, T8s:0.995, T7s:0.998, T9o:0.327, 98s, 97s:0.789, 87s:0.113` },
          { action: "ALLIN", min: 0.05, range: `88:0.656, 77:0.004, 66:0.495, 55:0.849, 44-33, 22:0.977, A8s:0.046, A7s:0.177, A6s:0.058, A5s:0.001, A4s:0.757, A3s, A2s:0.999, AKo:0.035, AQo:0.773, AJo:0.919, ATo:0.840, A9o:0.002, A8o:0.510, A7o:0.119, A5o:0.184, A4o:0.051, KJs:0.179, KTs:0.550, K9s, K8s:0.099, K7s:0.002, K6s:0.004, KQo:0.980, KJo:0.428, KTo:0.591, QJs:0.838, QTs:0.986, Q9s:0.935, Q8s:0.004, QJo:0.609, QTo:0.571, JTs:0.998, J9s:0.975, J8s:0.005, JTo:0.130, T9s:0.976, T8s:0.005` },
        ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },
      {
        id: "facingUTGopen",
        label: "BBvsUTG defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 33,
          facing: "UTG open 2.0x",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","call", "3bet 6.5bb", "3bet 9.0bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `JJ:0.847, TT-22, AQs-A6s, A5s:0.680, A4s:0.797, A3s:0.997, A2s:0.779, AKo:0.001, AQo-ATo, A9o:0.992, A8o:0.879, A7o:0.899, A6o:0.817, A5o:0.690, A4o:0.701, A3o:0.296, A2o:0.016, KQs:0.999, KJs:0.977, KTs-K8s, K7s:0.997, K6s-K2s, K9o+, K8o:0.988, K7o:0.978, K6o:0.768, K5o:0.222, Q2s+, QJo:0.951, QTo, Q9o:0.988, Q8o, Q7o:0.909, Q6o:0.074, Q5o:0.039, J2s+, J8o+, J7o:0.730, T2s+, T8o+, T7o:0.999, T6o:0.998, 92s+, 98o, 97o:0.992, 96o, 95o:0.007, 82s+, 86o+, 85o:0.951, 73s+, 72s:0.999, 75o+, 74o:0.999, 62s+, 63o+, 52s+, 53o+, 52o:0.044, 42s+, 43o, 32s:0.997` },
              { action: "3bet 6.5bb", min: 0.05, range: `AA, KK:0.903, QQ:0.622, JJ:0.132, AKs:0.875, AKo:0.439, A9o:0.008, A8o:0.121, A7o:0.101, A6o:0.183, A5o:0.242, A4o:0.215, A3o:0.649, A2o:0.847, K8o:0.007, K6o:0.178, K5o:0.574, K4o:0.399, K3o:0.084, K2o:0.010, Q7o:0.084, Q5o:0.266, Q4o:0.011, Q3o:0.016, 85o:0.001, 32s:0.003` },
              { action: "3bet 9.0bb", min: 0.05, range: `KK:0.097, QQ:0.378, JJ:0.003, AKs:0.124, AKo:0.153, A4o:0.012, A3o:0.008, A2o:0.103, K8o:0.003, K7o:0.021, K6o:0.016, K5o:0.060, K4o:0.073, K3o:0.010, K2o:0.118, QJo:0.049, Q9o:0.012, Q6o:0.001, Q5o:0.066, Q4o:0.004, Q3o:0.012, Q2o:0.028` },
              { action: "ALLIN", min: 0.05, range: `JJ:0.018, AKs:0.001, A5s:0.320, A4s:0.203, A3s:0.003, A2s:0.221, AKo:0.408, A5o:0.068, A4o:0.072, A3o:0.048, A2o:0.034, KQs:0.001, KJs:0.023, K7s:0.003` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },  
      {
        id: "facingBTNopen",
        label: "BBvsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BB",
          eff: 33,
          facing: "BTN open 2.0x",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","call", "3bet 6.5bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `99:0.466, 88:0.934, 77-55, 44:0.983, 33:0.900, 22:0.825, AJs:0.828, ATs-A6s, A5s:0.994, A4s:0.977, A3s:0.608, A2s:0.724, AJo:0.621, ATo-A7o, A6o:0.831, A5o:0.954, A4o:0.727, A3o:0.366, KQs:0.998, KJs:0.997, KTs-K7s, K6s:0.995, K5s:0.994, K4s:0.999, K3s:0.997, K2s, KQo, KJo:0.998, KTo:0.987, K9o:0.999, K8o, K7o:0.996, K6o:0.981, K5o:0.736, K4o:0.689, K3o:0.097, QJs:0.557, QTs:0.988, Q9s:0.999, Q8s:0.997, Q7s-Q4s, Q3s:0.999, Q2s, QJo:0.903, QTo-Q7o, Q6o:0.940, Q5o:0.540, Q4o:0.083, Q3o:0.153, JTs:0.999, J9s-J2s, J8o+, J7o:0.992, J6o:0.001, J5o:0.008, T2s+, T7o+, 95s+, 94s:0.999, 93s:0.943, 92s:0.992, 98o, 97o:0.857, 96o:0.001, 84s+, 83s:0.998, 82s, 87o:0.999, 86o:0.994, 73s+, 72s:0.974, 76o, 75o:0.969, 62s+, 64o+, 52s+, 54o:0.996, 53o:0.182, 43s:0.999, 42s, 43o:0.001, 32s` },
              { action: "3bet 6.5bb", min: 0.05, range: `KK+, QQ:0.999, JJ:0.998, TT, 99:0.168, AQs+, AJs:0.172, AKo, AQo:0.939, AJo:0.136, A6o:0.169, A3o:0.433, A2o:0.953, K7o:0.001, K6o:0.017, K5o:0.263, K4o:0.307, K3o:0.900, K2o:0.999, Q6o:0.038, Q5o:0.019, Q4o:0.169, Q3o:0.605, Q2o:0.648, J7o:0.004, J6o:0.040, J5o:0.001, J4o:0.032, J3o:0.623, J2o:0.374, T6o:0.004, T5o:0.010, T3o:0.035, T2o:0.022, 93s:0.001, 92s:0.001, 85o:0.007, 83o:0.001, 82o:0.001, 72s:0.004, 63o:0.013, 62o:0.015, 54o:0.004, 53o:0.260, 52o:0.017, 43o:0.181, 32o:0.535` },
              { action: "ALLIN", min: 0.05, range: `99:0.366, 88:0.066, 44:0.017, 33:0.100, 22:0.175, A5s:0.006, A4s:0.023, A3s:0.392, A2s:0.276, AQo:0.061, AJo:0.242, A5o:0.045, A4o:0.273, A3o:0.201, A2o:0.047, KQs:0.002, KJs:0.003, K6s:0.005, K5s:0.006, K4s:0.001, K3s:0.003, KJo:0.002, KTo:0.013, K9o:0.001, QJs:0.443, QTs:0.012, Q9s:0.001, Q8s:0.003, Q3s:0.001, QJo:0.097, JTs:0.001` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },       
      {
        id: "facingHJopen",
        label: "HJvsBTN defendRange",
        questionBuilder: (hand) => ({
          hand,
          pos: "BTN",
          eff: 20,
          facing: "BTN open 2.0x",
          stacks: [24, 33, 26, 20, 14, 33],
          options: ["Fold","call", "3bet 4.5bb", "3bet 8.0bb", "ALLIN"],
        }),
        bands: [
              { action: "call", min: 0.05, range: `TT:0.017, 99:0.026, 88:0.003, AJs:0.259, ATs:0.070, KTs:0.057, QJs:0.038, QTs:0.001` },
              { action: "3bet 4.5bb", min: 0.05, range: `AA, KK:0.982, QQ:0.527, JJ:0.328, TT:0.181, 99:0.035, 88:0.004, 77:0.013, 66:0.005, AKs:0.999, AQs:0.323, AJs:0.138, ATs:0.016, A9s:0.624, A8s:0.013, A7s:0.381, A6s:0.137, A5s:0.011, A4s:0.643, A3s:0.581, A2s:0.526, AKo:0.085, AQo:0.002, AJo:0.414, ATo:0.197, A9o:0.004, A8o:0.011, A7o:0.017, A6o:0.018, A5o:0.008, A4o:0.065, A3o:0.174, A2o:0.011, K5s:0.007, K4s:0.003, K3s:0.002, KQo:0.708` },
              { action: "3bet 8.0bb", min: 0.05, range: `KK:0.018, QQ:0.322, TT:0.002, 99:0.031, AQs:0.072, ATs:0.012, A6s:0.012, A4s:0.007, A3s:0.008, A2s:0.002, AKo:0.069, AQo:0.016, AJo:0.001, KQo:0.161` },
              { action: "ALLIN", min: 0.05, range: `QQ:0.152, JJ:0.672, TT:0.800, 99:0.908, 66:0.608, 55:0.044, 44:0.143, 33:0.001, AKs:0.001, AQs:0.605, AJs:0.603, ATs:0.901, A5s:0.867, A4s:0.292, A3s:0.097, A2s:0.015, AKo:0.845, AQo:0.982, KJs+, KTs:0.626, KQo:0.002, QJs:0.923, QTs:0.001` },
            ],
        answerBuilder: (pattern, hand, _weight, optionsBB) =>
          ({ index: answerByRangeSpec(optionsBB, hand, pattern.bands, "fold", 0.5) })
      },         
    ]
  },
];
