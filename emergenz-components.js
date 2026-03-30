// Emergenz-Blog Components - wrapped in IIFEs to avoid name collisions
// All components use vanilla React.createElement() — no JSX, no build step.

// === 1. EmergenceJump ===
// Interactive chart showing emergent abilities at different model scales
(function() {
  var h = React.createElement;

  // Simulated data inspired by Wei et al. (2022) BIG-Bench
  // Tasks with different critical thresholds
  var TASKS = [
    { name: 'Arithmetik (3-stellig)', color: '#22d3ee', threshold: 6.5, steepness: 4 },
    { name: 'Chain-of-Thought', color: '#60a5fa', threshold: 8, steepness: 3.5 },
    { name: 'Wort-Entschlüsselung', color: '#f59e0b', threshold: 9, steepness: 5 },
    { name: 'Persisch QA', color: '#a78bfa', threshold: 10.5, steepness: 3 },
  ];

  function sigmoid(x, threshold, steepness) {
    return 1 / (1 + Math.exp(-steepness * (x - threshold)));
  }

  function EmergenceJump() {
    var _s = React.useState(12);
    var modelSize = _s[0], setModelSize = _s[1];

    var W = 560, H = 320, PAD = 50, PADR = 30, PADT = 20, PADB = 40;
    var plotW = W - PAD - PADR;
    var plotH = H - PADT - PADB;

    // X: log scale from 10^6 to 10^12 (param count)
    var xMin = 6, xMax = 12;
    function xToSvg(logP) { return PAD + ((logP - xMin) / (xMax - xMin)) * plotW; }
    function yToSvg(perf) { return PADT + (1 - perf) * plotH; }

    // Generate curve points
    function makePath(task) {
      var pts = [];
      for (var lp = xMin; lp <= xMax; lp += 0.1) {
        var perf = sigmoid(lp, task.threshold, task.steepness) * 0.95 + Math.random() * 0.02;
        perf = Math.max(0, Math.min(1, perf));
        pts.push({ x: xToSvg(lp), y: yToSvg(perf) });
      }
      return pts;
    }

    var paths = React.useMemo(function() {
      return TASKS.map(function(t) {
        var pts = [];
        for (var lp = xMin; lp <= xMax; lp += 0.1) {
          var base = sigmoid(lp, t.threshold, t.steepness) * 0.92;
          var noise = 0.01 * Math.sin(lp * 13 + t.threshold * 7);
          pts.push({ x: xToSvg(lp), y: yToSvg(Math.max(0, Math.min(1, base + noise))) });
        }
        return pts;
      });
    }, []);

    // Slider line
    var sliderX = xToSvg(modelSize);

    // Current performance per task
    var perfs = TASKS.map(function(t) {
      return Math.round(sigmoid(modelSize, t.threshold, t.steepness) * 92);
    });

    var xLabels = [6, 7, 8, 9, 10, 11, 12];
    var yLabels = [0, 25, 50, 75, 100];

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Der Emergenz-Sprung'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Bewege den Slider, um die Modellgröße zu verändern'),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '560px', margin: '0 auto', display: 'block' } },
        // Grid lines
        yLabels.map(function(v) {
          var y = yToSvg(v / 100);
          return h('g', { key: 'y' + v },
            h('line', { x1: PAD, y1: y, x2: W - PADR, y2: y, stroke: '#1f2937', strokeWidth: 1 }),
            h('text', { x: PAD - 6, y: y + 3, fill: '#6b7280', fontSize: 9, textAnchor: 'end' }, v + '%')
          );
        }),
        // X axis labels
        xLabels.map(function(v) {
          return h('text', { key: 'x' + v, x: xToSvg(v), y: H - 8, fill: '#6b7280', fontSize: 9, textAnchor: 'middle' },
            '10' + (v < 10 ? '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079'.split('')[v] : '')
          );
        }),
        // X axis superscript labels (simpler approach)
        xLabels.map(function(v) {
          var sup = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹'];
          var label = '10' + (v >= 10 ? sup[1] + sup[v - 10] : sup[v]);
          return h('text', { key: 'xl' + v, x: xToSvg(v), y: H - 6, fill: '#6b7280', fontSize: 9, textAnchor: 'middle' }, label);
        }),
        // Axis labels
        h('text', { x: W / 2, y: H, fill: '#9ca3af', fontSize: 10, textAnchor: 'middle' }, 'Parameter'),
        h('text', { x: 12, y: H / 2, fill: '#9ca3af', fontSize: 10, textAnchor: 'middle', transform: 'rotate(-90,12,' + (H / 2) + ')' }, 'Performance'),

        // Curves
        paths.map(function(pts, i) {
          var d = 'M' + pts.map(function(p) { return p.x + ',' + p.y; }).join('L');
          return h('path', { key: 'c' + i, d: d, fill: 'none', stroke: TASKS[i].color, strokeWidth: 2.5, opacity: 0.85 });
        }),

        // Slider vertical line
        h('line', { x1: sliderX, y1: PADT, x2: sliderX, y2: PADT + plotH, stroke: '#f1f5f9', strokeWidth: 1, strokeDasharray: '4 3', opacity: 0.5 }),

        // Intersection dots
        TASKS.map(function(t, i) {
          var perf = sigmoid(modelSize, t.threshold, t.steepness) * 0.92;
          return h('circle', { key: 'd' + i, cx: sliderX, cy: yToSvg(perf), r: 5, fill: t.color, stroke: '#0a0a14', strokeWidth: 2 });
        })
      ),

      // Slider
      h('div', { className: 'mt-4 px-2' },
        h('input', {
          type: 'range', min: 6, max: 12, step: 0.1, value: modelSize,
          onChange: function(e) { setModelSize(parseFloat(e.target.value)); },
          className: 'w-full accent-cyan-400',
          style: { maxWidth: '560px', display: 'block', margin: '0 auto' }
        })
      ),

      // Legend + current values
      h('div', { className: 'mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs' },
        TASKS.map(function(t, i) {
          return h('div', { key: 'l' + i, className: 'flex items-center gap-2 px-2 py-1.5 rounded-lg', style: { background: 'rgba(255,255,255,0.03)' } },
            h('div', { className: 'w-2.5 h-2.5 rounded-full flex-shrink-0', style: { background: t.color } }),
            h('div', null,
              h('div', { className: 'text-gray-400', style: { fontSize: '0.7rem' } }, t.name),
              h('div', { className: 'font-semibold', style: { color: t.color } }, perfs[i] + '%')
            )
          );
        })
      )
    );
  }

  window.EmergenceJump = EmergenceJump;
})();


// === 2. MetricMagic ===
// Toggle between Exact Match and Token-Level Accuracy
(function() {
  var h = React.createElement;

  function MetricMagic() {
    var _s = React.useState('exact');
    var mode = _s[0], setMode = _s[1];

    var W = 520, H = 280, PAD = 50, PADR = 20, PADT = 20, PADB = 40;
    var plotW = W - PAD - PADR;
    var plotH = H - PADT - PADB;

    var xMin = 7, xMax = 11.5;
    function xToSvg(v) { return PAD + ((v - xMin) / (xMax - xMin)) * plotW; }
    function yToSvg(v) { return PADT + (1 - v) * plotH; }

    // Exact match: sharp sigmoid
    // Token-level: smooth linear-ish rise
    var tasks = [
      { name: 'Arithmetik', color: '#22d3ee', thresh: 9.2 },
      { name: 'Wortprobleme', color: '#f59e0b', thresh: 10.0 },
    ];

    function genPoints(task) {
      var pts = [];
      for (var x = xMin; x <= xMax; x += 0.05) {
        var y;
        if (mode === 'exact') {
          y = 1 / (1 + Math.exp(-6 * (x - task.thresh)));
        } else {
          // Smooth rise — logistic with much lower steepness + earlier start
          y = 1 / (1 + Math.exp(-1.2 * (x - (task.thresh - 2))));
        }
        y = y * 0.93 + 0.02;
        pts.push({ x: xToSvg(x), y: yToSvg(y) });
      }
      return pts;
    }

    var curves = tasks.map(function(t) { return genPoints(t); });

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Metrik-Magie'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-3' }, 'Dieselben Daten — zwei verschiedene Geschichten'),

      // Toggle
      h('div', { className: 'flex justify-center gap-2 mb-4' },
        h('button', {
          onClick: function() { setMode('exact'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (mode === 'exact' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, 'Exact Match (0/1)'),
        h('button', {
          onClick: function() { setMode('token'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (mode === 'token' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, 'Token-Level Accuracy')
      ),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '520px', margin: '0 auto', display: 'block' } },
        // Grid
        [0, 25, 50, 75, 100].map(function(v) {
          var y = yToSvg(v / 100);
          return h('g', { key: 'g' + v },
            h('line', { x1: PAD, y1: y, x2: W - PADR, y2: y, stroke: '#1f2937', strokeWidth: 1 }),
            h('text', { x: PAD - 6, y: y + 3, fill: '#6b7280', fontSize: 9, textAnchor: 'end' }, v + '%')
          );
        }),
        // X labels
        [7, 8, 9, 10, 11].map(function(v) {
          var sup = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹'];
          var label = '10' + (v >= 10 ? sup[1] + sup[v - 10] : sup[v]);
          return h('text', { key: 'x' + v, x: xToSvg(v), y: H - 8, fill: '#6b7280', fontSize: 9, textAnchor: 'middle' }, label);
        }),

        // Curves
        curves.map(function(pts, i) {
          var d = 'M' + pts.map(function(p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join('L');
          return h('path', { key: 'c' + i, d: d, fill: 'none', stroke: tasks[i].color, strokeWidth: 2.5, opacity: 0.85 });
        }),

        // Annotation
        mode === 'exact' ?
          h('text', { x: W / 2, y: PADT + 18, fill: '#f87171', fontSize: 11, textAnchor: 'middle', fontWeight: 600 }, '↑ Sprunghafter Anstieg — „Emergenz"!') :
          h('text', { x: W / 2, y: PADT + 18, fill: '#4ade80', fontSize: 11, textAnchor: 'middle', fontWeight: 600 }, '↑ Glatter Anstieg — keine „Emergenz"?')
      ),

      // Legend
      h('div', { className: 'mt-3 flex justify-center gap-6 text-xs' },
        tasks.map(function(t, i) {
          return h('div', { key: 'l' + i, className: 'flex items-center gap-1.5' },
            h('div', { className: 'w-2.5 h-2.5 rounded-full', style: { background: t.color } }),
            h('span', { className: 'text-gray-400' }, t.name)
          );
        })
      )
    );
  }

  window.MetricMagic = MetricMagic;
})();


// === 3. IsingTransformer ===
// Split-view: 2D Ising model (left) + Transformer analogy (right)
(function() {
  var h = React.createElement;
  var GRID = 24;

  function randomGrid() {
    var g = [];
    for (var i = 0; i < GRID * GRID; i++) g.push(Math.random() < 0.5 ? 1 : -1);
    return g;
  }

  function IsingTransformer() {
    var _temp = React.useState(3.5);
    var temp = _temp[0], setTemp = _temp[1];
    var _grid = React.useState(randomGrid);
    var grid = _grid[0], setGrid = _grid[1];
    var _running = React.useState(true);
    var running = _running[0], setRunning = _running[1];

    // Ising simulation step (Metropolis algorithm)
    React.useEffect(function() {
      if (!running) return;
      var id = setInterval(function() {
        setGrid(function(prev) {
          var next = prev.slice();
          // Do multiple flips per frame
          for (var s = 0; s < 200; s++) {
            var i = Math.floor(Math.random() * GRID);
            var j = Math.floor(Math.random() * GRID);
            var idx = i * GRID + j;
            var spin = next[idx];
            // Sum neighbors (periodic boundary)
            var up = next[((i - 1 + GRID) % GRID) * GRID + j];
            var down = next[((i + 1) % GRID) * GRID + j];
            var left = next[i * GRID + ((j - 1 + GRID) % GRID)];
            var right = next[i * GRID + ((j + 1) % GRID)];
            var dE = 2 * spin * (up + down + left + right);
            if (dE <= 0 || Math.random() < Math.exp(-dE / temp)) {
              next[idx] = -spin;
            }
          }
          return next;
        });
      }, 50);
      return function() { clearInterval(id); };
    }, [temp, running]);

    // Calculate magnetization
    var mag = React.useMemo(function() {
      var sum = 0;
      for (var i = 0; i < grid.length; i++) sum += grid[i];
      return Math.abs(sum / grid.length);
    }, [grid]);

    // Transformer "ability" curve (mirrors temperature)
    // Lower temp → more order → higher ability
    var ability = Math.max(0, Math.min(100, Math.round((1 - temp / 5) * 100 * 1.2)));

    var cellSize = 7;
    var gridPx = GRID * cellSize;

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Ising-Modell ↔ Transformer'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Schiebe die Temperatur nach unten → Ordnung emergiert in beiden Systemen'),

      h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6' },
        // Left: Ising Grid
        h('div', { className: 'text-center' },
          h('p', { className: 'text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wider' }, 'Ising-Modell (Physik)'),
          h('svg', {
            viewBox: '0 0 ' + gridPx + ' ' + gridPx,
            className: 'w-full border border-gray-700 rounded-lg',
            style: { maxWidth: gridPx + 'px', margin: '0 auto', imageRendering: 'pixelated' }
          },
            grid.map(function(spin, idx) {
              var row = Math.floor(idx / GRID);
              var col = idx % GRID;
              return h('rect', {
                key: idx,
                x: col * cellSize, y: row * cellSize,
                width: cellSize, height: cellSize,
                fill: spin === 1 ? '#22d3ee' : '#1e1b4b'
              });
            })
          ),
          h('div', { className: 'mt-2 text-xs text-gray-400' },
            'Magnetisierung: ',
            h('span', { className: 'font-semibold', style: { color: mag > 0.5 ? '#22d3ee' : '#6b7280' } },
              (mag * 100).toFixed(0) + '%'
            )
          )
        ),

        // Right: Transformer Ability
        h('div', { className: 'text-center flex flex-col items-center justify-center' },
          h('p', { className: 'text-xs text-amber-400 font-semibold mb-2 uppercase tracking-wider' }, 'Transformer (KI)'),
          h('div', { className: 'relative w-32 h-32 mx-auto mb-2' },
            h('svg', { viewBox: '0 0 120 120', className: 'w-full' },
              // Background circle
              h('circle', { cx: 60, cy: 60, r: 52, fill: 'none', stroke: '#1f2937', strokeWidth: 8 }),
              // Progress circle
              h('circle', {
                cx: 60, cy: 60, r: 52, fill: 'none',
                stroke: ability > 60 ? '#f59e0b' : '#374151',
                strokeWidth: 8,
                strokeDasharray: (2 * Math.PI * 52).toFixed(0),
                strokeDashoffset: ((1 - ability / 100) * 2 * Math.PI * 52).toFixed(0),
                strokeLinecap: 'round',
                transform: 'rotate(-90 60 60)',
                style: { transition: 'stroke-dashoffset 0.3s, stroke 0.3s' }
              }),
              h('text', { x: 60, y: 55, fill: '#f1f5f9', fontSize: 22, fontWeight: 700, textAnchor: 'middle' }, ability + '%'),
              h('text', { x: 60, y: 72, fill: '#6b7280', fontSize: 9, textAnchor: 'middle' }, 'Fähigkeit')
            )
          ),
          h('p', { className: 'text-xs text-gray-500 mt-1' },
            ability > 70 ? '✓ Emergente Fähigkeit aktiv' :
            ability > 30 ? '… Aufgabe teilweise lösbar' :
            '✗ Zufallsleistung'
          )
        )
      ),

      // Temperature slider
      h('div', { className: 'mt-4 px-2' },
        h('div', { className: 'flex justify-between text-xs text-gray-500 mb-1' },
          h('span', null, 'Niedrig (geordnet)'),
          h('span', null, 'T = ' + temp.toFixed(1)),
          h('span', null, 'Hoch (chaotisch)')
        ),
        h('input', {
          type: 'range', min: 0.5, max: 5, step: 0.1, value: temp,
          onChange: function(e) { setTemp(parseFloat(e.target.value)); },
          className: 'w-full accent-cyan-400',
          style: { direction: 'rtl' }
        }),
        h('p', { className: 'text-xs text-gray-600 text-center mt-2' },
          'Kritischer Punkt (Tc ≈ 2.27): Bei dieser Temperatur findet der Phasenübergang statt'
        )
      ),

      // Reset
      h('div', { className: 'mt-3 text-center' },
        h('button', {
          onClick: function() { setGrid(randomGrid()); },
          className: 'text-xs text-gray-500 hover:text-gray-300 transition px-3 py-1 rounded border border-gray-700 hover:border-gray-500'
        }, 'Reset')
      )
    );
  }

  window.IsingTransformer = IsingTransformer;
})();


// === 4. GrokkingLive ===
// Animated training curves showing memorization → generalization
(function() {
  var h = React.createElement;

  // Pre-compute curves
  var STEPS = 300;
  var trainData = [];
  var testData = [];
  for (var i = 0; i <= STEPS; i++) {
    // Train: fast rise to 100%
    trainData.push(Math.min(1, 1 / (1 + Math.exp(-0.15 * (i - 20)))));
    // Test: stays near 0, then sudden jump around step 200
    var base = 1 / (1 + Math.exp(-0.12 * (i - 210)));
    testData.push(base * 0.97);
  }

  function GrokkingLive() {
    var _step = React.useState(0);
    var step = _step[0], setStep = _step[1];
    var _playing = React.useState(false);
    var playing = _playing[0], setPlaying = _playing[1];

    React.useEffect(function() {
      if (!playing) return;
      if (step >= STEPS) { setPlaying(false); return; }
      var id = setInterval(function() {
        setStep(function(s) {
          if (s >= STEPS) { setPlaying(false); return s; }
          return s + 1;
        });
      }, 30);
      return function() { clearInterval(id); };
    }, [playing, step]);

    var W = 520, H = 280, PAD = 50, PADR = 20, PADT = 25, PADB = 40;
    var plotW = W - PAD - PADR;
    var plotH = H - PADT - PADB;

    function xToSvg(s) { return PAD + (s / STEPS) * plotW; }
    function yToSvg(v) { return PADT + (1 - v) * plotH; }

    // Build visible path up to current step
    function buildPath(data, maxStep) {
      var pts = [];
      for (var i = 0; i <= maxStep; i++) {
        pts.push(xToSvg(i).toFixed(1) + ',' + yToSvg(data[i]).toFixed(1));
      }
      return 'M' + pts.join('L');
    }

    var phase = step < 40 ? 'Memorisierung' : step < 180 ? 'Circuit-Formation' : 'Generalisierung';
    var phaseColor = step < 40 ? '#f87171' : step < 180 ? '#fbbf24' : '#4ade80';

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Grokking — live'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Beobachte den plötzlichen Moment der Generalisierung'),

      // Phase indicator
      h('div', { className: 'text-center mb-3' },
        h('span', { className: 'px-3 py-1 rounded-full text-xs font-semibold', style: { background: phaseColor + '22', color: phaseColor, border: '1px solid ' + phaseColor + '44' } }, phase)
      ),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '520px', margin: '0 auto', display: 'block' } },
        // Grid
        [0, 25, 50, 75, 100].map(function(v) {
          var y = yToSvg(v / 100);
          return h('g', { key: 'g' + v },
            h('line', { x1: PAD, y1: y, x2: W - PADR, y2: y, stroke: '#1f2937', strokeWidth: 1 }),
            h('text', { x: PAD - 6, y: y + 3, fill: '#6b7280', fontSize: 9, textAnchor: 'end' }, v + '%')
          );
        }),

        // Phase backgrounds
        h('rect', { x: PAD, y: PADT, width: (40 / STEPS) * plotW, height: plotH, fill: '#f8717108' }),
        h('rect', { x: PAD + (40 / STEPS) * plotW, y: PADT, width: (140 / STEPS) * plotW, height: plotH, fill: '#fbbf2408' }),
        h('rect', { x: PAD + (180 / STEPS) * plotW, y: PADT, width: (120 / STEPS) * plotW, height: plotH, fill: '#4ade8008' }),

        // Phase labels
        h('text', { x: PAD + (20 / STEPS) * plotW, y: PADT + 14, fill: '#f87171', fontSize: 8, textAnchor: 'middle', opacity: 0.6 }, 'Mem.'),
        h('text', { x: PAD + (110 / STEPS) * plotW, y: PADT + 14, fill: '#fbbf24', fontSize: 8, textAnchor: 'middle', opacity: 0.6 }, 'Circuit-Formation'),
        h('text', { x: PAD + (240 / STEPS) * plotW, y: PADT + 14, fill: '#4ade80', fontSize: 8, textAnchor: 'middle', opacity: 0.6 }, 'Generalis.'),

        // X axis label
        h('text', { x: W / 2, y: H - 4, fill: '#9ca3af', fontSize: 10, textAnchor: 'middle' }, 'Trainingsschritte'),

        // Train curve (up to current step)
        step > 0 ? h('path', { d: buildPath(trainData, step), fill: 'none', stroke: '#f87171', strokeWidth: 2.5 }) : null,
        // Test curve
        step > 0 ? h('path', { d: buildPath(testData, step), fill: 'none', stroke: '#4ade80', strokeWidth: 2.5 }) : null,

        // Current position dots
        step > 0 ? h('circle', { cx: xToSvg(step), cy: yToSvg(trainData[step]), r: 4, fill: '#f87171', stroke: '#0a0a14', strokeWidth: 2 }) : null,
        step > 0 ? h('circle', { cx: xToSvg(step), cy: yToSvg(testData[step]), r: 4, fill: '#4ade80', stroke: '#0a0a14', strokeWidth: 2 }) : null
      ),

      // Controls
      h('div', { className: 'mt-4 flex items-center gap-4 justify-center' },
        h('button', {
          onClick: function() {
            if (step >= STEPS) { setStep(0); }
            setPlaying(!playing);
          },
          className: 'px-4 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30 transition'
        }, playing ? 'Pause' : (step >= STEPS ? 'Neustart' : 'Abspielen')),
        h('input', {
          type: 'range', min: 0, max: STEPS, value: step,
          onChange: function(e) { setStep(parseInt(e.target.value)); setPlaying(false); },
          className: 'flex-1 accent-cyan-400', style: { maxWidth: '300px' }
        })
      ),

      // Legend
      h('div', { className: 'mt-3 flex justify-center gap-6 text-xs' },
        h('div', { className: 'flex items-center gap-1.5' },
          h('div', { className: 'w-2.5 h-2.5 rounded-full', style: { background: '#f87171' } }),
          h('span', { className: 'text-gray-400' }, 'Training (' + Math.round(trainData[step] * 100) + '%)')
        ),
        h('div', { className: 'flex items-center gap-1.5' },
          h('div', { className: 'w-2.5 h-2.5 rounded-full', style: { background: '#4ade80' } }),
          h('span', { className: 'text-gray-400' }, 'Test (' + Math.round(testData[step] * 100) + '%)')
        )
      )
    );
  }

  window.GrokkingLive = GrokkingLive;
})();


// === 5. InductionHeads ===
// Attention matrix before/after induction head formation
(function() {
  var h = React.createElement;

  var TOKENS = ['Die', 'Katze', 'saß', 'auf', 'der', 'Matte', '.', 'Die', 'Katze', 'saß', 'auf', 'der', '?'];
  var N = TOKENS.length;

  function InductionHeads() {
    var _mode = React.useState('before');
    var mode = _mode[0], setMode = _mode[1];

    // Generate attention matrices
    var matrix = React.useMemo(function() {
      var m = [];
      for (var i = 0; i < N; i++) {
        var row = [];
        for (var j = 0; j < N; j++) {
          if (mode === 'before') {
            // Before: mostly attending to nearby + uniform noise
            var dist = Math.abs(i - j);
            row.push(Math.exp(-dist * 0.5) * 0.3 + Math.random() * 0.15);
          } else {
            // After: strong induction head pattern
            // Token 12 ('?') should strongly attend to token 5 ('Matte') — because the previous pattern ended with 'Matte'
            // Each token in the second occurrence should attend to the corresponding position after the first occurrence
            var val = Math.random() * 0.05;
            if (j <= i) {
              // Induction head: look for matching prefix, attend to what comes after
              if (i >= 7 && j < 7) {
                // Second occurrence tokens attending to first occurrence
                var offset = i - 7;
                if (j === offset) {
                  val = 0.15; // slight attention to matching token
                }
                if (j === offset + 1 && offset + 1 < 7) {
                  val = 0.85; // STRONG attention to next token after match
                }
              }
              // Also some local attention
              if (Math.abs(i - j) <= 1) val = Math.max(val, 0.12);
            }
            row.push(val);
          }
        }
        // Normalize row
        var sum = row.reduce(function(a, b) { return a + b; }, 0);
        m.push(row.map(function(v) { return v / sum; }));
      }
      return m;
    }, [mode]);

    var cellSize = 28;
    var labelW = 50;
    var svgW = labelW + N * cellSize + 5;
    var svgH = labelW + N * cellSize + 5;

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Induction Heads — Attention-Matrix'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-3' },
        mode === 'before' ? 'Vor der Formation: diffuse, lokale Attention' : 'Nach der Formation: das Modell „sieht" das Muster'
      ),

      // Toggle
      h('div', { className: 'flex justify-center gap-2 mb-4' },
        h('button', {
          onClick: function() { setMode('before'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (mode === 'before' ? 'bg-gray-600/30 text-gray-200 border border-gray-500/40' : 'bg-gray-800/50 text-gray-500 border border-gray-700 hover:text-gray-300')
        }, 'Vorher'),
        h('button', {
          onClick: function() { setMode('after'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (mode === 'after' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-gray-800/50 text-gray-500 border border-gray-700 hover:text-gray-300')
        }, 'Nachher')
      ),

      // Matrix
      h('div', { style: { overflowX: 'auto' } },
        h('svg', { viewBox: '0 0 ' + svgW + ' ' + svgH, className: 'mx-auto', style: { maxWidth: Math.min(svgW, 520) + 'px', width: '100%' } },
          // Column labels (top)
          TOKENS.map(function(tok, j) {
            return h('text', {
              key: 'cl' + j,
              x: labelW + j * cellSize + cellSize / 2,
              y: labelW - 6,
              fill: j >= 7 ? '#22d3ee' : '#6b7280',
              fontSize: 8,
              textAnchor: 'middle',
              fontWeight: j >= 7 ? 600 : 400
            }, tok);
          }),
          // Row labels (left)
          TOKENS.map(function(tok, i) {
            return h('text', {
              key: 'rl' + i,
              x: labelW - 4,
              y: labelW + i * cellSize + cellSize / 2 + 3,
              fill: i >= 7 ? '#22d3ee' : '#6b7280',
              fontSize: 8,
              textAnchor: 'end',
              fontWeight: i >= 7 ? 600 : 400
            }, tok);
          }),
          // Cells
          matrix.map(function(row, i) {
            return row.map(function(val, j) {
              var alpha = Math.min(1, val * 2.5);
              return h('rect', {
                key: i + '-' + j,
                x: labelW + j * cellSize + 1,
                y: labelW + i * cellSize + 1,
                width: cellSize - 2,
                height: cellSize - 2,
                rx: 2,
                fill: val > 0.3 ? '#22d3ee' : '#60a5fa',
                opacity: alpha,
                style: { transition: 'opacity 0.4s' }
              });
            });
          }),
          // Label: "Query" on left, "Key" on top
          h('text', { x: 4, y: svgH / 2, fill: '#4b5563', fontSize: 9, textAnchor: 'middle', transform: 'rotate(-90,8,' + (svgH / 2) + ')' }, 'Query (von)'),
          h('text', { x: svgW / 2 + labelW / 2, y: labelW - 20, fill: '#4b5563', fontSize: 9, textAnchor: 'middle' }, 'Key (zu)')
        )
      ),

      // Explanation
      h('div', { className: 'mt-4 text-xs text-gray-500 text-center max-w-md mx-auto' },
        mode === 'after' ?
          'Helle Zellen = starke Attention. Beachte: Token „?" (Zeile 13) schaut stark auf „Matte" (Spalte 6) — weil es das Muster „Die Katze saß auf der → Matte" erkannt hat.' :
          'Ohne Induction Heads schaut jedes Token vor allem auf seine direkten Nachbarn. Es gibt kein Muster-Erkennen über lange Distanzen.'
      )
    );
  }

  window.InductionHeads = InductionHeads;
})();


// === 6. EmergenceTaxonomy ===
// Three-level emergence diagram
(function() {
  var h = React.createElement;

  var LEVELS = [
    {
      name: 'Epistemisch',
      desc: 'Wir staunen — aber im Prinzip berechenbar',
      example: 'Wasser ist nass, Schneeflocken',
      color: '#60a5fa',
      bg: '#60a5fa11'
    },
    {
      name: 'Computational',
      desc: 'Beweisbar nicht abkürzbar (NP-hart)',
      example: 'Kohärenz, LLM-Fähigkeiten',
      color: '#f59e0b',
      bg: '#f59e0b11',
      highlight: true
    },
    {
      name: 'Stark',
      desc: 'Prinzipiell nicht ableitbar?',
      example: 'Bewusstsein (?)',
      color: '#a78bfa',
      bg: '#a78bfa11'
    }
  ];

  function EmergenceTaxonomy() {
    var _active = React.useState(1);
    var active = _active[0], setActive = _active[1];

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Emergenz-Taxonomie'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, 'Drei Stufen — LLM-Emergenz sitzt in der Mitte'),

      // Stacked boxes
      h('div', { className: 'max-w-md mx-auto space-y-3' },
        LEVELS.map(function(level, i) {
          var isActive = active === i;
          return h('button', {
            key: i,
            onClick: function() { setActive(i); },
            className: 'w-full text-left p-4 rounded-xl border transition-all duration-200 ' +
              (isActive ? 'border-opacity-60 scale-[1.02]' : 'border-gray-800 hover:border-gray-700'),
            style: {
              background: isActive ? level.bg : 'transparent',
              borderColor: isActive ? level.color + '66' : undefined
            }
          },
            h('div', { className: 'flex items-center gap-3' },
              h('div', { className: 'flex-shrink-0' },
                h('div', {
                  className: 'w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold',
                  style: { background: level.color + '22', color: level.color }
                }, (i + 1).toString())
              ),
              h('div', { className: 'flex-1 min-w-0' },
                h('div', { className: 'flex items-center gap-2' },
                  h('span', { className: 'font-semibold text-sm', style: { color: level.color } }, level.name),
                  level.highlight ? h('span', { className: 'text-xs px-1.5 py-0.5 rounded-full', style: { background: level.color + '22', color: level.color, fontSize: '0.65rem' } }, 'LLMs hier') : null
                ),
                h('p', { className: 'text-xs text-gray-400 mt-0.5' }, level.desc),
                isActive ? h('p', { className: 'text-xs text-gray-500 mt-1' }, 'Beispiele: ' + level.example) : null
              )
            )
          );
        })
      ),

      // Arrow flow at bottom
      h('div', { className: 'mt-5 flex items-center justify-center gap-2 text-xs text-gray-600' },
        h('span', null, 'Überraschung'),
        h('span', null, '→'),
        h('span', null, 'Komplexität'),
        h('span', null, '→'),
        h('span', null, 'Mysterium')
      )
    );
  }

  window.EmergenceTaxonomy = EmergenceTaxonomy;
})();


// === 7. TokensToMeaning ===
// Layer-by-layer exploration of the transformer pipeline
(function() {
  var h = React.createElement;

  var LAYERS = [
    {
      name: 'Tokens',
      desc: 'Der Rohtext wird in kleine Stücke zerlegt — Wörter, Wortteile, Satzzeichen. Jedes bekommt eine Nummer.',
      color: '#6b7280',
      icon: 'Aa',
      detail: '„Die Katze" → [„Die", „ Kat", „ze"] → [1204, 8823, 2091]'
    },
    {
      name: 'Embeddings',
      desc: 'Jede Nummer wird in einen hochdimensionalen Vektor übersetzt — einen Punkt im Bedeutungsraum. Ähnliche Wörter liegen nah beieinander.',
      color: '#60a5fa',
      icon: '→',
      detail: '„Katze" und „Hund" liegen nah. „Katze" und „Algebra" weit weg.'
    },
    {
      name: 'Attention',
      desc: 'Jedes Token „schaut sich um" — welche anderen Tokens sind relevant für meine Bedeutung? Induction Heads entstehen hier.',
      color: '#22d3ee',
      icon: '⟷',
      detail: '„saß" achtet auf „Katze" (wer saß?) und „Matte" (worauf?).'
    },
    {
      name: 'Semantik',
      desc: 'Durch Dutzende Schichten verdichtet sich die Information. Das Modell extrahiert Bedeutung, Zusammenhänge, Implikationen.',
      color: '#a78bfa',
      icon: '◈',
      detail: 'Nicht mehr „Wort neben Wort", sondern: wer tut was, wo, warum.'
    },
    {
      name: 'Emergenz',
      desc: 'Bei ausreichender Größe emergieren Fähigkeiten, die niemand programmiert hat: logisches Schließen, Analogiebildung, Kreativität.',
      color: '#f59e0b',
      icon: '✦',
      detail: 'Chain-of-Thought, Grokking, In-Context Learning — das „Mehr" aus „More is Different".'
    }
  ];

  function TokensToMeaning() {
    var _active = React.useState(0);
    var active = _active[0], setActive = _active[1];
    var layer = LAYERS[active];

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Von Tokens zu Bedeutung'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, 'Klicke dich durch die Schichten eines Sprachmodells'),

      // Layer buttons
      h('div', { className: 'flex justify-center gap-1.5 sm:gap-2 mb-5 flex-wrap' },
        LAYERS.map(function(l, i) {
          var isActive = active === i;
          return h('button', {
            key: i,
            onClick: function() { setActive(i); },
            className: 'px-2.5 py-1.5 rounded-lg text-xs font-medium transition border ' +
              (isActive ? 'border-opacity-60' : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'),
            style: isActive ? { background: l.color + '22', color: l.color, borderColor: l.color + '55' } : {}
          }, l.name);
        })
      ),

      // Active layer detail
      h('div', {
        className: 'text-center p-5 rounded-xl border transition-all duration-300',
        style: { background: layer.color + '08', borderColor: layer.color + '33' }
      },
        h('div', { className: 'text-3xl mb-3', style: { color: layer.color } }, layer.icon),
        h('h4', { className: 'text-sm font-semibold mb-2', style: { color: layer.color } }, layer.name),
        h('p', { className: 'text-sm text-gray-300 mb-3 max-w-md mx-auto leading-relaxed' }, layer.desc),
        h('div', { className: 'text-xs text-gray-500 italic max-w-sm mx-auto' }, layer.detail)
      ),

      // Progress indicator
      h('div', { className: 'mt-4 flex justify-center items-center gap-1' },
        LAYERS.map(function(l, i) {
          return h('div', {
            key: i,
            className: 'rounded-full transition-all duration-200',
            style: {
              width: active === i ? '24px' : '6px',
              height: '6px',
              background: active === i ? l.color : '#374151'
            }
          });
        })
      ),

      // Navigation arrows
      h('div', { className: 'mt-3 flex justify-center gap-4' },
        h('button', {
          onClick: function() { setActive(Math.max(0, active - 1)); },
          disabled: active === 0,
          className: 'text-xs text-gray-500 hover:text-gray-300 disabled:opacity-30 disabled:hover:text-gray-500 transition px-2'
        }, '← Zurück'),
        h('span', { className: 'text-xs text-gray-600' }, (active + 1) + ' / ' + LAYERS.length),
        h('button', {
          onClick: function() { setActive(Math.min(LAYERS.length - 1, active + 1)); },
          disabled: active === LAYERS.length - 1,
          className: 'text-xs text-gray-500 hover:text-gray-300 disabled:opacity-30 disabled:hover:text-gray-500 transition px-2'
        }, 'Weiter →')
      )
    );
  }

  window.TokensToMeaning = TokensToMeaning;
})();


// === 8. MetaFlow ===
// How this text was created — flow diagram
(function() {
  var h = React.createElement;

  var STEPS_DATA = [
    { label: '20+ Papers', sub: 'Wei, Schaeffer, Anderson, Hopfield, Olsson, Nanda, ...', color: '#6b7280', count: '~1200 Seiten' },
    { label: 'Claude Code', sub: 'Lesen, Verdichten, Widerspüche identifizieren', color: '#22d3ee', count: 'Emergenz' },
    { label: 'Mathias', sub: 'Richtung, Didaktik, Reihenfolge, Sprache', color: '#f59e0b', count: 'Mensch' },
    { label: '8 Kapitel', sub: 'Prolog → Rätsel → Mirage → Physik → Grokking → ...', color: '#60a5fa', count: '~10.000 Wörter' },
    { label: '8 Visualisierungen', sub: 'React-Komponenten, interaktiv, responsive', color: '#a78bfa', count: '~1400 Zeilen JS' },
    { label: 'Dieser Text', sub: 'Den du gerade liest.', color: '#4ade80', count: '~35 Min.' },
  ];

  function MetaFlow() {
    var _hover = React.useState(-1);
    var hover = _hover[0], setHover = _hover[1];

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Wie dieser Text entstand'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, 'Der Prozess, den dieser Text beschreibt, hat diesen Text erzeugt'),

      h('div', { className: 'max-w-sm mx-auto space-y-2' },
        STEPS_DATA.map(function(step, i) {
          var isHover = hover === i;
          var isLast = i === STEPS_DATA.length - 1;
          return h('div', { key: i },
            h('div', {
              className: 'flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-default',
              style: {
                background: isHover ? step.color + '11' : 'transparent',
                borderColor: isHover ? step.color + '44' : '#1f2937'
              },
              onMouseEnter: function() { setHover(i); },
              onMouseLeave: function() { setHover(-1); }
            },
              // Number circle
              h('div', {
                className: 'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0',
                style: { background: step.color + '22', color: step.color }
              }, (i + 1).toString()),
              // Content
              h('div', { className: 'flex-1 min-w-0' },
                h('div', { className: 'flex items-center justify-between' },
                  h('span', { className: 'text-sm font-semibold', style: { color: step.color } }, step.label),
                  h('span', { className: 'text-xs text-gray-600 flex-shrink-0 ml-2' }, step.count)
                ),
                isHover ? h('p', { className: 'text-xs text-gray-400 mt-0.5' }, step.sub) : null
              )
            ),
            // Arrow between steps
            !isLast ? h('div', { className: 'flex justify-center py-0.5' },
              h('div', { className: 'w-px h-3', style: { background: '#374151' } })
            ) : null
          );
        })
      ),

      h('div', { className: 'mt-5 text-center' },
        h('p', { className: 'text-xs text-gray-600 italic max-w-sm mx-auto' },
          'Diese Grafik ist selbst ein Produkt des Prozesses, den sie darstellt.'
        )
      )
    );
  }

  window.MetaFlow = MetaFlow;
})();
