// euler-components.js — Interactive React components for the Euler's number (e) post
// SVG visualizations, no JSX, no external libraries
// Pattern: IIFE → React.createElement (no JSX) → window.ComponentName

// ════════════════════════════════════════════════════════════════
// 1. CompoundInterestSlider — (1+1/n)^n converging to e
// ════════════════════════════════════════════════════════════════
(function() {
  var E = Math.E; // 2.718281828...

  var KEY_VALUES = [
    { n: 1,    label: 'n = 1',    val: 2.0 },
    { n: 2,    label: 'n = 2',    val: 2.25 },
    { n: 4,    label: 'n = 4',    val: Math.pow(1 + 1/4, 4) },
    { n: 12,   label: 'n = 12',   val: Math.pow(1 + 1/12, 12) },
    { n: 365,  label: 'n = 365',  val: Math.pow(1 + 1/365, 365) },
    { n: Infinity, label: 'n → ∞', val: E }
  ];

  // Logarithmic slider: sliderVal 0..1 → n 1..10000
  function sliderToN(v) {
    return Math.round(Math.pow(10000, v));
  }
  function nToSlider(n) {
    return Math.log(n) / Math.log(10000);
  }

  function CompoundInterestSlider() {
    var h = React.createElement;
    var sliderVal = React.useState(nToSlider(1)), setSliderVal = sliderVal[1]; sliderVal = sliderVal[0];
    var n = React.useMemo(function() { return Math.max(1, sliderToN(sliderVal)); }, [sliderVal]);
    var currentVal = React.useMemo(function() { return Math.pow(1 + 1/n, n); }, [n]);

    // SVG chart: log scale x from 1 to 10000, y from 1.9 to 2.8
    var SVG_W = 560, SVG_H = 220;
    var PAD = { left: 46, right: 20, top: 18, bottom: 36 };
    var chartW = SVG_W - PAD.left - PAD.right;
    var chartH = SVG_H - PAD.top - PAD.bottom;
    var Y_MIN = 1.9, Y_MAX = 2.8;

    function xPos(nv) {
      return PAD.left + (Math.log(nv) / Math.log(10000)) * chartW;
    }
    function yPos(v) {
      return PAD.top + chartH - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * chartH;
    }

    // Build curve points
    var points = React.useMemo(function() {
      var pts = [];
      // sample 200 points log-spaced from 1 to 10000
      for (var i = 0; i <= 200; i++) {
        var t = i / 200;
        var nv = Math.max(1, Math.round(Math.pow(10000, t)));
        var v = Math.pow(1 + 1/nv, nv);
        pts.push(xPos(nv) + ',' + yPos(v));
      }
      return pts.join(' ');
    }, []);

    var cx = xPos(n);
    var cy = yPos(currentVal);
    var eLine = yPos(E);

    // Y-axis ticks
    var yTicks = [2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.71828];

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Zinseszins und die Entdeckung von e'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'Bewege den Regler — beobachte, wie (1 + 1/n)ⁿ gegen e konvergiert.'),

      // Big current value display
      h('div', { className: 'flex justify-center gap-8 mb-3' },
        h('div', { className: 'text-center' },
          h('div', { className: 'text-2xl font-mono font-bold text-teal-400' }, currentVal.toFixed(6)),
          h('div', { className: 'text-xs text-gray-500' }, '(1 + 1/' + n + ')^' + n)
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-2xl font-mono font-bold text-amber-400' }, E.toFixed(6)),
          h('div', { className: 'text-xs text-gray-500' }, 'e (exakt)')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-2xl font-mono font-bold text-gray-300' },
            (Math.abs(currentVal - E) * 100 / E).toFixed(4) + '%'),
          h('div', { className: 'text-xs text-gray-500' }, 'Abweichung')
        )
      ),

      // SVG chart
      h('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3',
        style: { maxWidth: '560px', margin: '0 auto', display: 'block' }
      },
        // Grid lines
        yTicks.map(function(v, i) {
          var y = yPos(v);
          var isE = Math.abs(v - E) < 0.001;
          return h('g', { key: 'yt-' + i },
            h('line', { x1: PAD.left, y1: y, x2: SVG_W - PAD.right, y2: y,
              stroke: isE ? '#f59e0b' : '#1e293b', strokeWidth: isE ? 1.5 : 0.5,
              strokeDasharray: isE ? '5 3' : '2 4' }),
            h('text', { x: PAD.left - 4, y: y + 4, textAnchor: 'end', fill: isE ? '#f59e0b' : '#475569',
              fontSize: isE ? 9 : 8, fontFamily: 'monospace' },
              isE ? 'e' : v.toFixed(1))
          );
        }),
        // X-axis label ticks
        [1, 10, 100, 1000, 10000].map(function(nv, i) {
          var x = xPos(nv);
          return h('g', { key: 'xt-' + i },
            h('line', { x1: x, y1: PAD.top + chartH, x2: x, y2: PAD.top + chartH + 4,
              stroke: '#475569', strokeWidth: 1 }),
            h('text', { x: x, y: PAD.top + chartH + 14, textAnchor: 'middle',
              fill: '#475569', fontSize: 8 }, nv >= 1000 ? (nv/1000 + 'k') : String(nv))
          );
        }),
        // Axis lines
        h('line', { x1: PAD.left, y1: PAD.top, x2: PAD.left, y2: PAD.top + chartH,
          stroke: '#334155', strokeWidth: 1 }),
        h('line', { x1: PAD.left, y1: PAD.top + chartH, x2: SVG_W - PAD.right, y2: PAD.top + chartH,
          stroke: '#334155', strokeWidth: 1 }),
        // Axis label
        h('text', { x: SVG_W / 2, y: SVG_H - 4, textAnchor: 'middle', fill: '#475569', fontSize: 9 }, 'n (logarithmisch)'),
        // Curve
        h('polyline', { points: points, fill: 'none', stroke: '#2dd4bf', strokeWidth: 2 }),
        // e dashed line label
        h('text', { x: SVG_W - PAD.right - 2, y: eLine - 4, textAnchor: 'end',
          fill: '#f59e0b', fontSize: 9, fontWeight: 700 }, 'e ≈ 2.71828'),
        // Current point marker
        h('circle', { cx: cx, cy: cy, r: 5, fill: '#2dd4bf', stroke: '#0f172a', strokeWidth: 2 }),
        h('line', { x1: cx, y1: PAD.top, x2: cx, y2: PAD.top + chartH,
          stroke: '#2dd4bf', strokeWidth: 1, strokeDasharray: '3 3', opacity: 0.5 })
      ),

      // Slider
      h('div', { className: 'mb-4 px-2' },
        h('label', { className: 'text-xs text-gray-400 block mb-1' }, 'n = ' + n.toLocaleString()),
        h('input', {
          type: 'range', min: 0, max: 1, step: 0.001,
          value: sliderVal,
          onChange: function(ev) { setSliderVal(parseFloat(ev.target.value)); },
          className: 'w-full accent-teal-400'
        })
      ),

      // Key values table
      h('div', { className: 'overflow-x-auto' },
        h('table', { className: 'w-full text-xs border-collapse' },
          h('thead', null,
            h('tr', null,
              h('th', { className: 'text-left text-gray-500 font-medium py-1 px-2 border-b border-gray-800' }, 'n'),
              h('th', { className: 'text-right text-gray-500 font-medium py-1 px-2 border-b border-gray-800' }, '(1+1/n)ⁿ'),
              h('th', { className: 'text-right text-gray-500 font-medium py-1 px-2 border-b border-gray-800' }, 'Abweichung')
            )
          ),
          h('tbody', null,
            KEY_VALUES.map(function(row) {
              var diff = row.n === Infinity ? 0 : Math.abs(row.val - E) / E * 100;
              return h('tr', { key: row.label, className: 'border-b border-gray-900' },
                h('td', { className: 'py-1 px-2 font-mono text-teal-400' }, row.label),
                h('td', { className: 'py-1 px-2 text-right font-mono text-gray-200' }, row.val.toFixed(6)),
                h('td', { className: 'py-1 px-2 text-right font-mono text-gray-500' },
                  row.n === Infinity ? '0.000000%' : diff.toFixed(4) + '%')
              );
            })
          )
        )
      )
    );
  }

  window.CompoundInterestSlider = CompoundInterestSlider;
})();


// ════════════════════════════════════════════════════════════════
// 2. DerivativeExplorer — f(x)=aˣ and its derivative a^x·ln(a)
// ════════════════════════════════════════════════════════════════
(function() {
  var E = Math.E;

  function DerivativeExplorer() {
    var h = React.createElement;
    var base = React.useState(E), setBase = base[1]; base = base[0];

    var SVG_W = 560, SVG_H = 260;
    var PAD = { left: 44, right: 20, top: 16, bottom: 36 };
    var chartW = SVG_W - PAD.left - PAD.right;
    var chartH = SVG_H - PAD.top - PAD.bottom;
    var X_MIN = -2, X_MAX = 3;
    var Y_MIN = 0, Y_MAX = 15;

    function xPos(x) { return PAD.left + ((x - X_MIN) / (X_MAX - X_MIN)) * chartW; }
    function yPos(y) {
      var clamped = Math.min(Math.max(y, Y_MIN), Y_MAX);
      return PAD.top + chartH - ((clamped - Y_MIN) / (Y_MAX - Y_MIN)) * chartH;
    }

    var lnA = Math.log(base);

    // Build polyline points for f(x) = a^x
    var fPoints = React.useMemo(function() {
      var pts = [];
      for (var i = 0; i <= 200; i++) {
        var x = X_MIN + (i / 200) * (X_MAX - X_MIN);
        var y = Math.pow(base, x);
        if (y > Y_MAX + 1) continue;
        pts.push(xPos(x) + ',' + yPos(y));
      }
      return pts.join(' ');
    }, [base]);

    // Build polyline points for f'(x) = a^x * ln(a)
    var dPoints = React.useMemo(function() {
      var pts = [];
      for (var i = 0; i <= 200; i++) {
        var x = X_MIN + (i / 200) * (X_MAX - X_MIN);
        var y = Math.pow(base, x) * lnA;
        if (y > Y_MAX + 1 || y < Y_MIN - 1) continue;
        pts.push(xPos(x) + ',' + yPos(y));
      }
      return pts.join(' ');
    }, [base, lnA]);

    var isAtE = Math.abs(base - E) < 0.012;

    // Y-axis ticks
    var yTicks = [0, 2, 4, 6, 8, 10, 12, 14];
    // X-axis ticks
    var xTicks = [-2, -1, 0, 1, 2, 3];
    var xZero = xPos(0);
    var yZero = yPos(0);

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Die einzigartige Ableitung von eˣ'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'Bewege den Regler — nur bei a = e sind Funktion und Ableitung identisch.'),

      // Info display
      h('div', { className: 'flex justify-center gap-6 mb-3' },
        h('div', { className: 'text-center' },
          h('div', { className: 'font-mono text-teal-400 font-bold' }, 'f(x) = ' + base.toFixed(3) + 'ˣ'),
          h('div', { className: 'text-xs text-gray-500' }, 'Funktion (durchgezogen)')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'font-mono text-amber-400 font-bold' }, "f'(x) = " + base.toFixed(3) + 'ˣ · ' + lnA.toFixed(3)),
          h('div', { className: 'text-xs text-gray-500' }, 'Ableitung (gestrichelt)')
        )
      ),

      isAtE ? h('div', { className: 'text-center text-sm font-semibold text-teal-300 mb-2 bg-teal-900/30 rounded-lg py-1.5 px-3' },
        '✓ Bei a = e gilt: f(x) = f\'(x) — die Ableitung ist sich selbst gleich!'
      ) : null,

      // SVG chart
      h('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3',
        style: { maxWidth: '560px', margin: '0 auto', display: 'block' }
      },
        // Grid lines y
        yTicks.map(function(v, i) {
          return h('g', { key: 'y' + i },
            h('line', { x1: PAD.left, y1: yPos(v), x2: SVG_W - PAD.right, y2: yPos(v),
              stroke: '#1e293b', strokeWidth: 0.5 }),
            h('text', { x: PAD.left - 4, y: yPos(v) + 4, textAnchor: 'end',
              fill: '#475569', fontSize: 8 }, v)
          );
        }),
        // Grid lines x
        xTicks.map(function(v, i) {
          return h('g', { key: 'x' + i },
            h('line', { x1: xPos(v), y1: PAD.top, x2: xPos(v), y2: PAD.top + chartH,
              stroke: v === 0 ? '#334155' : '#1e293b', strokeWidth: v === 0 ? 1 : 0.5 }),
            h('text', { x: xPos(v), y: PAD.top + chartH + 14, textAnchor: 'middle',
              fill: '#475569', fontSize: 8 }, v)
          );
        }),
        // Axes
        h('line', { x1: PAD.left, y1: PAD.top, x2: PAD.left, y2: PAD.top + chartH, stroke: '#334155', strokeWidth: 1 }),
        h('line', { x1: PAD.left, y1: PAD.top + chartH, x2: SVG_W - PAD.right, y2: PAD.top + chartH, stroke: '#334155', strokeWidth: 1 }),
        // Axis labels
        h('text', { x: SVG_W / 2, y: SVG_H - 4, textAnchor: 'middle', fill: '#475569', fontSize: 9 }, 'x'),
        h('text', { x: 10, y: PAD.top + chartH / 2, textAnchor: 'middle', fill: '#475569', fontSize: 9,
          transform: 'rotate(-90 10 ' + (PAD.top + chartH / 2) + ')' }, 'y'),
        // f(x) curve (solid teal)
        h('polyline', { points: fPoints, fill: 'none', stroke: '#2dd4bf', strokeWidth: 2.5 }),
        // f'(x) curve (dashed amber) — rendered on top
        h('polyline', { points: dPoints, fill: 'none', stroke: '#f59e0b', strokeWidth: 2,
          strokeDasharray: '6 4' }),
        // Highlight: when curves overlap
        isAtE ? h('polyline', { points: fPoints, fill: 'none', stroke: '#ffffff', strokeWidth: 1, opacity: 0.15 }) : null,
        // Legend
        h('rect', { x: PAD.left + 8, y: PAD.top + 6, width: 130, height: 38, rx: 5,
          fill: '#0f172a', stroke: '#334155', strokeWidth: 0.5, opacity: 0.9 }),
        h('line', { x1: PAD.left + 14, y1: PAD.top + 18, x2: PAD.left + 30, y2: PAD.top + 18,
          stroke: '#2dd4bf', strokeWidth: 2 }),
        h('text', { x: PAD.left + 34, y: PAD.top + 22, fill: '#94a3b8', fontSize: 8 }, 'f(x) = aˣ'),
        h('line', { x1: PAD.left + 14, y1: PAD.top + 32, x2: PAD.left + 30, y2: PAD.top + 32,
          stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5 3' }),
        h('text', { x: PAD.left + 34, y: PAD.top + 36, fill: '#94a3b8', fontSize: 8 }, "f'(x) = aˣ · ln(a)")
      ),

      // Slider
      h('div', { className: 'px-2' },
        h('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Basis a = ' + base.toFixed(3)),
        h('div', { className: 'flex items-center gap-2' },
          h('span', { className: 'text-xs text-gray-600' }, '1.5'),
          h('input', {
            type: 'range', min: 1.5, max: 4.0, step: 0.01,
            value: base,
            onChange: function(ev) { setBase(parseFloat(ev.target.value)); },
            className: 'flex-1 accent-teal-400'
          }),
          h('span', { className: 'text-xs text-gray-600' }, '4.0')
        ),
        h('div', { className: 'flex justify-center mt-2' },
          h('button', {
            className: 'text-xs px-3 py-1 bg-teal-700 hover:bg-teal-600 text-white rounded-lg transition-colors',
            onClick: function() { setBase(E); }
          }, 'Auf e setzen (' + E.toFixed(5) + ')')
        )
      )
    );
  }

  window.DerivativeExplorer = DerivativeExplorer;
})();


// ════════════════════════════════════════════════════════════════
// 3. GrowthDecaySimulator — e in nature and technology
// ════════════════════════════════════════════════════════════════
(function() {
  var PHENOMENA = {
    bakterien: {
      label: 'Bakterien (Verdopplung alle 20 min)',
      color: '#2dd4bf',
      unit: 'Bakterien',
      timeUnit: 'Minuten',
      xMax: 120,
      y0: 1000,
      k: Math.log(2) / 20, // doubling every 20 min
      formula: function(t) { return 'N(t) = 1000 · e^(' + (Math.log(2)/20).toFixed(4) + '·t)'; },
      compute: function(t) { return 1000 * Math.exp(Math.log(2) / 20 * t); },
      yLabel: 'Anzahl'
    },
    radioaktiv: {
      label: 'Radioaktivität (C-14, t½ = 5730 Jahre)',
      color: '#f59e0b',
      unit: '%',
      timeUnit: 'Jahre',
      xMax: 20000,
      y0: 100,
      k: -Math.log(2) / 5730,
      formula: function(t) { return 'N(t) = 100% · e^(−' + (Math.log(2)/5730).toFixed(6) + '·t)'; },
      compute: function(t) { return 100 * Math.exp(-Math.log(2) / 5730 * t); },
      yLabel: 'Restmenge (%)'
    },
    kaffee: {
      label: 'Kaffee abkühlen (Newton)',
      color: '#fb923c',
      unit: '°C',
      timeUnit: 'Minuten',
      xMax: 60,
      y0: 90,
      k: -0.04,
      formula: function(t) { return 'T(t) = 20 + 70 · e^(−0.04·t)'; },
      compute: function(t) { return 20 + 70 * Math.exp(-0.04 * t); },
      yLabel: 'Temperatur (°C)'
    },
    kondensator: {
      label: 'Kondensator Entladung (RC = 2s)',
      color: '#a78bfa',
      unit: 'V',
      timeUnit: 'Sekunden',
      xMax: 10,
      y0: 5,
      k: -1/2,
      formula: function(t) { return 'U(t) = 5V · e^(−t/2)'; },
      compute: function(t) { return 5 * Math.exp(-t / 2); },
      yLabel: 'Spannung (V)'
    }
  };

  function GrowthDecaySimulator() {
    var h = React.createElement;
    var selected = React.useState('bakterien'), setSelected = selected[1]; selected = selected[0];
    var sliderVal = React.useState(0.5), setSliderVal = sliderVal[1]; sliderVal = sliderVal[0];

    var ph = PHENOMENA[selected];
    var tCurrent = sliderVal * ph.xMax;
    var yCurrent = ph.compute(tCurrent);

    var SVG_W = 560, SVG_H = 220;
    var PAD = { left: 52, right: 16, top: 16, bottom: 36 };
    var chartW = SVG_W - PAD.left - PAD.right;
    var chartH = SVG_H - PAD.top - PAD.bottom;

    // Compute y range
    var yValues = React.useMemo(function() {
      var vals = [];
      for (var i = 0; i <= 100; i++) {
        vals.push(ph.compute(i / 100 * ph.xMax));
      }
      return vals;
    }, [selected]);

    var yMax = Math.max.apply(null, yValues);
    var yMin = Math.min.apply(null, yValues);
    var yRange = yMax - yMin || 1;
    // Pad 10%
    var yHi = yMax + yRange * 0.08;
    var yLo = Math.max(0, yMin - yRange * 0.05);

    function xPos(t) { return PAD.left + (t / ph.xMax) * chartW; }
    function yPos(y) {
      return PAD.top + chartH - ((Math.min(Math.max(y, yLo), yHi) - yLo) / (yHi - yLo)) * chartH;
    }

    var curvePoints = React.useMemo(function() {
      var pts = [];
      for (var i = 0; i <= 200; i++) {
        var t = (i / 200) * ph.xMax;
        var y = ph.compute(t);
        pts.push(xPos(t) + ',' + yPos(y));
      }
      return pts.join(' ');
    }, [selected, yHi, yLo]);

    // Y ticks: 5 evenly spaced
    var yTicks = React.useMemo(function() {
      var tks = [];
      for (var i = 0; i <= 4; i++) {
        tks.push(yLo + (yHi - yLo) * i / 4);
      }
      return tks;
    }, [yLo, yHi]);

    var cx = xPos(tCurrent);
    var cy = yPos(yCurrent);

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Wachstum & Zerfall — e in der Natur'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'Wähle ein Phänomen und bewege den Zeitregler.'),

      // Dropdown
      h('div', { className: 'flex justify-center mb-3' },
        h('select', {
          value: selected,
          onChange: function(ev) { setSelected(ev.target.value); setSliderVal(0.5); },
          className: 'bg-gray-800 text-gray-200 text-xs rounded-lg px-3 py-1.5 border border-gray-700 focus:outline-none focus:border-teal-500'
        },
          Object.keys(PHENOMENA).map(function(k) {
            return h('option', { key: k, value: k }, PHENOMENA[k].label);
          })
        )
      ),

      // Formula display
      h('div', { className: 'text-center mb-3 font-mono text-sm rounded-lg py-2 px-3 bg-gray-900 border border-gray-800' },
        h('span', { style: { color: ph.color } }, ph.formula(tCurrent))
      ),

      // SVG chart
      h('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3',
        style: { maxWidth: '560px', margin: '0 auto', display: 'block' }
      },
        // Y grid + ticks
        yTicks.map(function(v, i) {
          var fmt = Math.abs(v) >= 1000 ? (v/1000).toFixed(1) + 'k' : v.toFixed(v < 10 ? 2 : 1);
          return h('g', { key: 'yt' + i },
            h('line', { x1: PAD.left, y1: yPos(v), x2: SVG_W - PAD.right, y2: yPos(v),
              stroke: '#1e293b', strokeWidth: 0.5 }),
            h('text', { x: PAD.left - 4, y: yPos(v) + 4, textAnchor: 'end', fill: '#475569', fontSize: 7.5 }, fmt)
          );
        }),
        // Axes
        h('line', { x1: PAD.left, y1: PAD.top, x2: PAD.left, y2: PAD.top + chartH, stroke: '#334155', strokeWidth: 1 }),
        h('line', { x1: PAD.left, y1: PAD.top + chartH, x2: SVG_W - PAD.right, y2: PAD.top + chartH, stroke: '#334155', strokeWidth: 1 }),
        // X ticks (5)
        [0, 0.25, 0.5, 0.75, 1].map(function(f, i) {
          var t = f * ph.xMax;
          var fmt = t >= 1000 ? (t/1000).toFixed(1) + 'k' : t.toFixed(0);
          return h('g', { key: 'xt' + i },
            h('text', { x: xPos(t), y: PAD.top + chartH + 14, textAnchor: 'middle', fill: '#475569', fontSize: 8 }, fmt)
          );
        }),
        // Axis labels
        h('text', { x: SVG_W / 2, y: SVG_H - 2, textAnchor: 'middle', fill: '#475569', fontSize: 9 }, ph.timeUnit),
        // Y label
        h('text', { x: 10, y: PAD.top + chartH / 2, textAnchor: 'middle', fill: '#475569', fontSize: 8,
          transform: 'rotate(-90 10 ' + (PAD.top + chartH / 2) + ')' }, ph.yLabel),
        // Curve
        h('polyline', { points: curvePoints, fill: 'none', stroke: ph.color, strokeWidth: 2.5 }),
        // Current time marker
        h('line', { x1: cx, y1: PAD.top, x2: cx, y2: PAD.top + chartH,
          stroke: ph.color, strokeWidth: 1, strokeDasharray: '3 3', opacity: 0.5 }),
        h('circle', { cx: cx, cy: cy, r: 5, fill: ph.color, stroke: '#0f172a', strokeWidth: 2 }),
        // Current value tooltip
        h('rect', { x: Math.min(cx + 6, SVG_W - PAD.right - 80), y: Math.max(PAD.top + 2, cy - 18),
          width: 72, height: 16, rx: 4, fill: '#1e293b', stroke: ph.color, strokeWidth: 0.5, opacity: 0.95 }),
        h('text', { x: Math.min(cx + 10, SVG_W - PAD.right - 76), y: Math.max(PAD.top + 13, cy - 5),
          fill: ph.color, fontSize: 8, fontFamily: 'monospace' },
          't=' + tCurrent.toFixed(1) + ' → ' + yCurrent.toFixed(2) + ph.unit)
      ),

      // Slider
      h('div', { className: 'px-2' },
        h('label', { className: 'text-xs text-gray-400 block mb-1' },
          'Zeit: ' + tCurrent.toFixed(1) + ' ' + ph.timeUnit),
        h('input', {
          type: 'range', min: 0, max: 1, step: 0.001,
          value: sliderVal,
          onChange: function(ev) { setSliderVal(parseFloat(ev.target.value)); },
          className: 'w-full accent-teal-400'
        })
      )
    );
  }

  window.GrowthDecaySimulator = GrowthDecaySimulator;
})();


// ════════════════════════════════════════════════════════════════
// 4. PrimeDensityVisualizer — Prime counting vs x/ln(x)
// ════════════════════════════════════════════════════════════════
(function() {
  // Sieve of Eratosthenes up to maxN
  function sieve(maxN) {
    var isComposite = new Uint8Array(maxN + 1);
    var primes = [];
    for (var i = 2; i <= maxN; i++) {
      if (!isComposite[i]) {
        primes.push(i);
        for (var j = i * i; j <= maxN; j += i) {
          isComposite[j] = 1;
        }
      }
    }
    return primes;
  }

  var ALL_PRIMES = sieve(10000);

  function PrimeDensityVisualizer() {
    var h = React.createElement;
    var N = React.useState(1000), setN = N[1]; N = N[0];

    // Filter primes up to N
    var primes = React.useMemo(function() {
      var result = [];
      for (var i = 0; i < ALL_PRIMES.length; i++) {
        if (ALL_PRIMES[i] <= N) result.push(ALL_PRIMES[i]);
        else break;
      }
      return result;
    }, [N]);

    var piN = primes.length;
    var approx = N / Math.log(N);
    var relErr = Math.abs(piN - approx) / piN * 100;

    var SVG_W = 560, SVG_H = 220;
    var PAD = { left: 52, right: 16, top: 20, bottom: 36 };
    var chartW = SVG_W - PAD.left - PAD.right;
    var chartH = SVG_H - PAD.top - PAD.bottom;

    function xPos(x) { return PAD.left + (x / N) * chartW; }
    function yPos(y, yMax) {
      return PAD.top + chartH - (y / yMax) * chartH;
    }

    var yMax = Math.ceil(piN * 1.1) || 10;

    // π(x) step curve
    var piCurve = React.useMemo(function() {
      if (primes.length === 0) return '';
      var pts = [PAD.left + ',,' + (PAD.top + chartH)];
      // Build cumulative count
      var pts2 = [];
      var count = 0;
      var prevX = PAD.left;
      for (var i = 0; i < primes.length; i++) {
        var x = xPos(primes[i]);
        pts2.push(x + ',' + yPos(count, yMax)); // horizontal step
        count++;
        pts2.push(x + ',' + yPos(count, yMax)); // vertical step
      }
      pts2.push((PAD.left + chartW) + ',' + yPos(count, yMax));
      return pts2.join(' ');
    }, [primes, yMax, N]);

    // x/ln(x) smooth curve
    var approxCurve = React.useMemo(function() {
      var pts = [];
      var start = Math.max(2, N * 0.01);
      for (var i = 0; i <= 200; i++) {
        var x = start + (i / 200) * (N - start);
        var y = x / Math.log(x);
        pts.push(xPos(x) + ',' + yPos(y, yMax));
      }
      return pts.join(' ');
    }, [N, yMax]);

    // Y ticks
    var yStep = Math.ceil(yMax / 5 / 10) * 10 || 1;
    var yTicks = [];
    for (var v = 0; v <= yMax; v += yStep) yTicks.push(v);

    // X ticks (5 evenly spaced)
    var xTicks = [0, 0.25, 0.5, 0.75, 1].map(function(f) { return Math.round(f * N); });

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Primzahldichte und der Primzahlsatz'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'Bewege den Regler — die Primzahldichte nähert sich x/ln(x).'),

      // Stats
      h('div', { className: 'flex justify-center gap-6 mb-3' },
        h('div', { className: 'text-center' },
          h('div', { className: 'text-xl font-mono font-bold text-teal-400' }, piN.toLocaleString()),
          h('div', { className: 'text-xs text-gray-500' }, 'π(' + N.toLocaleString() + ') — exakt')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-xl font-mono font-bold text-amber-400' }, approx.toFixed(1)),
          h('div', { className: 'text-xs text-gray-500' }, N.toLocaleString() + '/ln(' + N.toLocaleString() + ')')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-xl font-mono font-bold text-gray-300' }, relErr.toFixed(2) + '%'),
          h('div', { className: 'text-xs text-gray-500' }, 'Relativer Fehler')
        )
      ),

      // SVG chart
      h('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3',
        style: { maxWidth: '560px', margin: '0 auto', display: 'block' }
      },
        // Y grid
        yTicks.map(function(v, i) {
          var fmt = v >= 1000 ? (v/1000).toFixed(1) + 'k' : String(v);
          return h('g', { key: 'yg' + i },
            h('line', { x1: PAD.left, y1: yPos(v, yMax), x2: SVG_W - PAD.right, y2: yPos(v, yMax),
              stroke: '#1e293b', strokeWidth: 0.5 }),
            h('text', { x: PAD.left - 4, y: yPos(v, yMax) + 4, textAnchor: 'end', fill: '#475569', fontSize: 8 }, fmt)
          );
        }),
        // Prime tick marks
        primes.length <= 200 ? primes.map(function(p, i) {
          var x = xPos(p);
          return h('line', { key: 'p' + i, x1: x, y1: PAD.top + chartH - 6, x2: x, y2: PAD.top + chartH,
            stroke: '#2dd4bf', strokeWidth: 1, opacity: 0.5 });
        }) : null,
        // Axes
        h('line', { x1: PAD.left, y1: PAD.top, x2: PAD.left, y2: PAD.top + chartH, stroke: '#334155', strokeWidth: 1 }),
        h('line', { x1: PAD.left, y1: PAD.top + chartH, x2: SVG_W - PAD.right, y2: PAD.top + chartH, stroke: '#334155', strokeWidth: 1 }),
        // X ticks
        xTicks.map(function(v, i) {
          var fmt = v >= 1000 ? (v/1000).toFixed(1) + 'k' : String(v);
          return h('text', { key: 'xt' + i, x: xPos(v), y: PAD.top + chartH + 14, textAnchor: 'middle', fill: '#475569', fontSize: 8 }, fmt);
        }),
        // π(x) step curve
        h('polyline', { points: piCurve, fill: 'none', stroke: '#2dd4bf', strokeWidth: 2 }),
        // x/ln(x) smooth curve
        h('polyline', { points: approxCurve, fill: 'none', stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '6 4' }),
        // Legend
        h('rect', { x: PAD.left + 8, y: PAD.top + 4, width: 140, height: 38, rx: 4,
          fill: '#0f172a', stroke: '#334155', strokeWidth: 0.5, opacity: 0.9 }),
        h('line', { x1: PAD.left + 14, y1: PAD.top + 16, x2: PAD.left + 30, y2: PAD.top + 16, stroke: '#2dd4bf', strokeWidth: 2 }),
        h('text', { x: PAD.left + 34, y: PAD.top + 20, fill: '#94a3b8', fontSize: 8 }, 'π(x) — Anzahl der Primzahlen'),
        h('line', { x1: PAD.left + 14, y1: PAD.top + 30, x2: PAD.left + 30, y2: PAD.top + 30, stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5 3' }),
        h('text', { x: PAD.left + 34, y: PAD.top + 34, fill: '#94a3b8', fontSize: 8 }, 'x / ln(x) — Näherung'),
        // Axis labels
        h('text', { x: SVG_W / 2, y: SVG_H - 2, textAnchor: 'middle', fill: '#475569', fontSize: 9 }, 'Zahl')
      ),

      // Slider
      h('div', { className: 'px-2' },
        h('label', { className: 'text-xs text-gray-400 block mb-1' }, 'N = ' + N.toLocaleString()),
        h('div', { className: 'flex items-center gap-2' },
          h('span', { className: 'text-xs text-gray-600' }, '100'),
          h('input', {
            type: 'range', min: 100, max: 10000, step: 100,
            value: N,
            onChange: function(ev) { setN(parseInt(ev.target.value)); },
            className: 'flex-1 accent-teal-400'
          }),
          h('span', { className: 'text-xs text-gray-600' }, '10k')
        )
      )
    );
  }

  window.PrimeDensityVisualizer = PrimeDensityVisualizer;
})();


// ════════════════════════════════════════════════════════════════
// 5. HatShuffleSimulator — Derangements and 1/e probability
// ════════════════════════════════════════════════════════════════
(function() {
  // Check if permutation is a derangement (no fixed points)
  function isDerangement(perm) {
    for (var i = 0; i < perm.length; i++) {
      if (perm[i] === i) return false;
    }
    return true;
  }

  // Fisher-Yates shuffle
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function randomPerm(n) {
    var arr = [];
    for (var i = 0; i < n; i++) arr.push(i);
    return shuffle(arr);
  }

  // Hat icons as SVG paths in text form
  var HAT_COLORS = ['#2dd4bf','#f59e0b','#a78bfa','#f472b6','#60a5fa','#34d399','#fb923c','#e879f9','#22d3ee','#facc15',
    '#4ade80','#f87171','#c084fc','#38bdf8','#fb7185','#fbbf24','#86efac','#93c5fd','#d8b4fe','#fca5a5'];

  function HatShuffleSimulator() {
    var h = React.createElement;
    var n = React.useState(6), setN = n[1]; n = n[0];
    var perm = React.useState(null), setPerm = perm[1]; perm = perm[0];
    var totalShuffles = React.useState(0), setTotalShuffles = totalShuffles[1]; totalShuffles = totalShuffles[0];
    var derangements = React.useState(0), setDerangements = derangements[1]; derangements = derangements[0];
    var history = React.useState([]), setHistory = history[1]; history = history[0];

    var ratio = totalShuffles > 0 ? derangements / totalShuffles : null;

    function doShuffle() {
      var p = randomPerm(n);
      var isDer = isDerangement(p);
      setPerm(p);
      var newTotal = totalShuffles + 1;
      var newDer = derangements + (isDer ? 1 : 0);
      setTotalShuffles(newTotal);
      setDerangements(newDer);
      setHistory(function(prev) {
        var next = prev.concat(isDer ? 1 : 0);
        if (next.length > 80) next = next.slice(next.length - 80);
        return next;
      });
    }

    function doMany() {
      var count = 1000;
      var newPerm = null;
      var newDer = 0;
      for (var i = 0; i < count; i++) {
        var p = randomPerm(n);
        if (isDerangement(p)) newDer++;
        if (i === count - 1) newPerm = p;
      }
      setPerm(newPerm);
      var newTotal = totalShuffles + count;
      var newDerangements = derangements + newDer;
      setTotalShuffles(newTotal);
      setDerangements(newDerangements);
      setHistory(function(prev) {
        // Add last 80 results — just track: add 1000, but only show 80
        var arr = [];
        // Regenerate last 80 for display
        for (var i = 0; i < Math.min(80, count); i++) {
          arr.push(Math.random() < newDerangements / newTotal ? 1 : 0);
        }
        return arr;
      });
    }

    function reset() {
      setPerm(null);
      setTotalShuffles(0);
      setDerangements(0);
      setHistory([]);
    }

    // Determine current derangement state
    var isDer = perm ? isDerangement(perm) : null;

    // SVG for hat visualization
    var SVG_W = 560;
    var itemW = Math.min(56, (SVG_W - 20) / n);
    var SVG_H = 120;
    var startX = (SVG_W - n * itemW) / 2;

    // Ratio chart
    var CHART_W = 560, CHART_H = 80;
    var CPAD = { left: 40, right: 16, top: 8, bottom: 28 };
    var cW = CHART_W - CPAD.left - CPAD.right;
    var cH = CHART_H - CPAD.top - CPAD.bottom;

    // Build running ratio chart (up to last 80 shuffles)
    var ratioPoints = '';
    if (history.length > 1) {
      var pts = [];
      var running = 0;
      for (var i = 0; i < history.length; i++) {
        running += history[i];
        var r = running / (i + 1);
        var x = CPAD.left + (i / Math.max(history.length - 1, 1)) * cW;
        var y = CPAD.top + cH - r * cH;
        pts.push(x + ',' + y);
      }
      ratioPoints = pts.join(' ');
    }
    var eLine = CPAD.top + cH - (1/Math.E) * cH;

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Das Hutproblem — Derangements und 1/e'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'n Personen werfen ihre Hüte durcheinander. Wie oft bekommt niemand seinen eigenen? → 1/e ≈ 36.79%'),

      // Controls
      h('div', { className: 'flex flex-wrap gap-3 justify-center items-center mb-3' },
        h('div', { className: 'flex items-center gap-2' },
          h('label', { className: 'text-xs text-gray-400' }, 'n = ' + n + ' Personen'),
          h('input', {
            type: 'range', min: 3, max: 20, step: 1, value: n,
            onChange: function(ev) { setN(parseInt(ev.target.value)); reset(); },
            className: 'w-24 accent-teal-400'
          })
        ),
        h('button', {
          className: 'px-3 py-1.5 bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold rounded-lg transition-colors',
          onClick: doShuffle
        }, 'Einmal mischen'),
        h('button', {
          className: 'px-3 py-1.5 bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors',
          onClick: doMany
        }, '1000× mischen'),
        h('button', {
          className: 'px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold rounded-lg transition-colors',
          onClick: reset
        }, 'Reset')
      ),

      // Stats bar
      h('div', { className: 'flex justify-center gap-6 mb-3' },
        h('div', { className: 'text-center' },
          h('div', { className: 'text-lg font-mono font-bold text-gray-200' }, totalShuffles.toLocaleString()),
          h('div', { className: 'text-xs text-gray-500' }, 'Versuche')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-lg font-mono font-bold text-teal-400' }, derangements.toLocaleString()),
          h('div', { className: 'text-xs text-gray-500' }, 'Derangements')
        ),
        h('div', { className: 'text-center' },
          h('div', { className: 'text-lg font-mono font-bold ' + (ratio !== null && Math.abs(ratio - 1/Math.E) < 0.02 ? 'text-amber-400' : 'text-gray-200') },
            ratio !== null ? (ratio * 100).toFixed(1) + '%' : '—'),
          h('div', { className: 'text-xs text-gray-500' }, 'Anteil (Ziel: 36.79%)')
        )
      ),

      // Hat visualization (only if perm exists and n ≤ 20)
      perm ? h('div', { className: 'mb-3' },
        h('div', {
          className: 'text-center text-sm font-semibold rounded-lg py-1.5 px-3 mb-2 ' +
            (isDer ? 'bg-teal-900/40 text-teal-300 border border-teal-700' : 'bg-rose-900/30 text-rose-400 border border-rose-800')
        }, isDer ? '✓ Derangement! Niemand hat seinen eigenen Hut.' : '✗ Kein Derangement — mindestens eine Person hat ihren eigenen Hut.'),
        h('svg', {
          viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
          className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
          style: { maxWidth: '560px', margin: '0 auto', display: 'block' }
        },
          // Person labels + hat positions
          perm.map(function(dest, i) {
            var srcX = startX + i * itemW + itemW / 2;
            var destX = startX + dest * itemW + itemW / 2;
            var isFixed = dest === i;
            var col = HAT_COLORS[i % HAT_COLORS.length];
            return h('g', { key: 'p' + i },
              // Person circle at bottom
              h('circle', { cx: srcX, cy: 88, r: 10, fill: '#1e293b', stroke: col, strokeWidth: 1.5 }),
              h('text', { x: srcX, y: 92, textAnchor: 'middle', fill: col, fontSize: 9, fontWeight: 700 }, i + 1),
              // Hat at top — where it goes
              h('text', { x: destX, y: 22, textAnchor: 'middle', fontSize: 14 }, '\uD83C\uDFA9'),
              // Arrow: arc from srcX to destX
              (function() {
                var ay = 50;
                var dx = destX - srcX;
                var cy2 = isFixed ? 62 : Math.max(20, 50 - Math.abs(dx) * 0.15);
                var d = 'M ' + srcX + ' 78 Q ' + ((srcX + destX) / 2) + ' ' + cy2 + ' ' + destX + ' 28';
                return h('path', {
                  d: d, fill: 'none',
                  stroke: isFixed ? '#f87171' : col,
                  strokeWidth: 1.2, opacity: 0.7,
                  markerEnd: 'none'
                });
              })()
            );
          })
        )
      ) : null,

      // Running ratio chart
      totalShuffles > 1 ? h('div', { className: 'mt-3' },
        h('p', { className: 'text-xs text-gray-500 text-center mb-1' }, 'Laufende Derangement-Rate (letzte 80 Versuche)'),
        h('svg', {
          viewBox: '0 0 ' + CHART_W + ' ' + CHART_H,
          className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
          style: { maxWidth: '560px', margin: '0 auto', display: 'block' }
        },
          // 1/e dashed line
          h('line', { x1: CPAD.left, y1: eLine, x2: CHART_W - CPAD.right, y2: eLine,
            stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '6 4' }),
          h('text', { x: CPAD.left + 4, y: eLine - 4, fill: '#f59e0b', fontSize: 8 }, '1/e ≈ 36.79%'),
          // Ratio line
          ratioPoints ? h('polyline', { points: ratioPoints, fill: 'none', stroke: '#2dd4bf', strokeWidth: 2 }) : null,
          // Axes
          h('line', { x1: CPAD.left, y1: CPAD.top, x2: CPAD.left, y2: CPAD.top + cH, stroke: '#334155', strokeWidth: 1 }),
          h('line', { x1: CPAD.left, y1: CPAD.top + cH, x2: CHART_W - CPAD.right, y2: CPAD.top + cH, stroke: '#334155', strokeWidth: 1 }),
          // Y ticks
          [0, 0.25, 0.5, 0.75, 1].map(function(v, i) {
            return h('text', { key: i, x: CPAD.left - 4, y: CPAD.top + cH - v * cH + 4,
              textAnchor: 'end', fill: '#475569', fontSize: 7.5 }, (v * 100).toFixed(0) + '%');
          })
        )
      ) : null
    );
  }

  window.HatShuffleSimulator = HatShuffleSimulator;
})();


// ════════════════════════════════════════════════════════════════
// 6. SecretaryProblemGame — The 37% / 1/e optimal stopping rule
// ════════════════════════════════════════════════════════════════
(function() {
  var E = Math.E;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function generateCandidates(n) {
    var scores = [];
    for (var i = 0; i < n; i++) scores.push(i + 1); // ranks 1..n
    return shuffle(scores);
  }

  // Optimal 1/e strategy: skip first floor(n/e) candidates, then take first better
  function optimalChoice(candidates) {
    var n = candidates.length;
    var skipCount = Math.floor(n / E);
    var bestInSkip = 0;
    for (var i = 0; i < skipCount; i++) {
      if (candidates[i] > bestInSkip) bestInSkip = candidates[i];
    }
    for (var i = skipCount; i < n; i++) {
      if (candidates[i] > bestInSkip) return i;
    }
    return n - 1; // last resort
  }

  function SecretaryProblemGame() {
    var h = React.createElement;
    var n = React.useState(10), setN = n[1]; n = n[0];
    // Game state
    var phase = React.useState('setup'), setPhase = phase[1]; phase = phase[0];
    // 'setup' | 'playing' | 'result'
    var candidates = React.useState([]), setCandidates = candidates[1]; candidates = candidates[0];
    var currentIdx = React.useState(0), setCurrentIdx = currentIdx[1]; currentIdx = currentIdx[0];
    var chosenIdx = React.useState(null), setChosenIdx = chosenIdx[1]; chosenIdx = chosenIdx[0];
    var maxSeenSoFar = React.useState(0), setMaxSeenSoFar = maxSeenSoFar[1]; maxSeenSoFar = maxSeenSoFar[0];

    // Statistics
    var playerWins = React.useState(0), setPlayerWins = playerWins[1]; playerWins = playerWins[0];
    var optimalWins = React.useState(0), setOptimalWins = optimalWins[1]; optimalWins = optimalWins[0];
    var totalGames = React.useState(0), setTotalGames = totalGames[1]; totalGames = totalGames[0];

    var skipCount = Math.floor(n / E);

    function startGame() {
      var cands = generateCandidates(n);
      setCandidates(cands);
      setCurrentIdx(0);
      setChosenIdx(null);
      setMaxSeenSoFar(0);
      setPhase('playing');
    }

    function accept() {
      setChosenIdx(currentIdx);
      setTotalGames(function(t) { return t + 1; });
      // Compute result
      var best = Math.max.apply(null, candidates);
      var playerPicked = candidates[currentIdx];
      var optIdx = optimalChoice(candidates);
      var optPicked = candidates[optIdx];
      if (playerPicked === best) setPlayerWins(function(w) { return w + 1; });
      if (optPicked === best) setOptimalWins(function(w) { return w + 1; });
      setPhase('result');
    }

    function reject() {
      var cur = candidates[currentIdx];
      setMaxSeenSoFar(function(m) { return Math.max(m, cur); });
      var nextIdx = currentIdx + 1;
      if (nextIdx >= n) {
        // Forced to take last
        setChosenIdx(n - 1);
        setTotalGames(function(t) { return t + 1; });
        var best = Math.max.apply(null, candidates);
        var playerPicked = candidates[n - 1];
        var optIdx = optimalChoice(candidates);
        var optPicked = candidates[optIdx];
        if (playerPicked === best) setPlayerWins(function(w) { return w + 1; });
        if (optPicked === best) setOptimalWins(function(w) { return w + 1; });
        setPhase('result');
      } else {
        setCurrentIdx(nextIdx);
      }
    }

    // Result info
    var bestScore = candidates.length ? Math.max.apply(null, candidates) : 0;
    var playerScore = chosenIdx !== null ? candidates[chosenIdx] : null;
    var optIdx = candidates.length ? optimalChoice(candidates) : null;
    var optScore = optIdx !== null ? candidates[optIdx] : null;
    var playerWon = playerScore === bestScore;
    var optWon = optScore === bestScore;

    var current = phase === 'playing' && candidates.length ? candidates[currentIdx] : null;
    var isInSkipPhase = phase === 'playing' && currentIdx < skipCount;

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Das Sekretärinnenproblem — optimales Stoppen'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'n Kandidaten erscheinen nacheinander. Du siehst den Wert, musst sofort entscheiden. Die optimale Strategie: ersten 37% überspringen, dann ersten Besseren wählen.'),

      // Setup / Stats header
      h('div', { className: 'flex flex-wrap gap-4 justify-center items-center mb-3' },
        phase === 'setup' ? h('div', { className: 'flex items-center gap-2' },
          h('label', { className: 'text-xs text-gray-400' }, 'Kandidaten: ' + n),
          h('input', {
            type: 'range', min: 5, max: 30, step: 1, value: n,
            onChange: function(ev) { setN(parseInt(ev.target.value)); },
            className: 'w-28 accent-teal-400'
          })
        ) : null,
        totalGames > 0 ? h('div', { className: 'flex gap-4' },
          h('div', { className: 'text-center' },
            h('div', { className: 'font-mono font-bold text-teal-400' }, totalGames > 0 ? (playerWins / totalGames * 100).toFixed(0) + '%' : '—'),
            h('div', { className: 'text-xs text-gray-500' }, 'Du')
          ),
          h('div', { className: 'text-center' },
            h('div', { className: 'font-mono font-bold text-amber-400' }, totalGames > 0 ? (optimalWins / totalGames * 100).toFixed(0) + '%' : '—'),
            h('div', { className: 'text-xs text-gray-500' }, '1/e-Strategie')
          ),
          h('div', { className: 'text-center' },
            h('div', { className: 'font-mono font-bold text-gray-400' }, '~37%'),
            h('div', { className: 'text-xs text-gray-500' }, 'Theoretisch')
          ),
          h('div', { className: 'text-center' },
            h('div', { className: 'font-mono font-bold text-gray-300' }, totalGames),
            h('div', { className: 'text-xs text-gray-500' }, 'Spiele')
          )
        ) : null
      ),

      // Setup phase
      phase === 'setup' ? h('div', { className: 'text-center' },
        h('div', { className: 'text-xs text-gray-500 mb-4 max-w-sm mx-auto' },
          'Strategie: Erste ', skipCount, ' Kandidaten ablehnen (Beobachtungsphase), danach den ersten wählen, der besser als alle bisherigen ist.'),
        h('button', {
          className: 'px-6 py-2 bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors',
          onClick: startGame
        }, 'Spiel starten')
      ) : null,

      // Playing phase
      phase === 'playing' ? h('div', null,
        // Progress bar
        h('div', { className: 'mb-3' },
          h('div', { className: 'flex justify-between text-xs text-gray-500 mb-1' },
            h('span', null, 'Kandidat ' + (currentIdx + 1) + ' von ' + n),
            h('span', null, isInSkipPhase ? 'Beobachtungsphase (überspringen!)' : 'Entscheidungsphase')
          ),
          h('div', { className: 'w-full bg-gray-800 rounded-full h-2' },
            h('div', {
              className: 'h-2 rounded-full transition-all ' + (isInSkipPhase ? 'bg-gray-500' : 'bg-teal-500'),
              style: { width: ((currentIdx + 1) / n * 100) + '%' }
            }),
            // Skip zone marker
            h('div', {
              className: 'h-2 bg-amber-500/20 rounded-full absolute',
              style: { width: (skipCount / n * 100) + '%', left: 0, top: 0 }
            })
          ),
          // Skip zone indicator
          h('div', { className: 'flex mt-1' },
            h('div', {
              className: 'text-xs text-gray-600 border-r border-amber-600/30',
              style: { width: (skipCount / n * 100) + '%' }
            }, skipCount + ' überspringen →'),
            h('div', { className: 'text-xs text-teal-600 pl-1' }, '← ' + (n - skipCount) + ' auswählen')
          )
        ),

        // Current candidate card
        h('div', { className: 'flex justify-center mb-4' },
          h('div', { className: 'bg-gray-900 border ' + (isInSkipPhase ? 'border-gray-700' : 'border-teal-600') + ' rounded-2xl p-6 text-center min-w-32' },
            h('div', { className: 'text-xs text-gray-500 mb-1' }, 'Kandidat #' + (currentIdx + 1)),
            h('div', { className: 'text-4xl font-mono font-bold ' + (isInSkipPhase ? 'text-gray-400' : 'text-teal-400') },
              current),
            h('div', { className: 'text-xs text-gray-600 mt-1' },
              currentIdx > 0 ? 'Bisheriges Beste: ' + maxSeenSoFar : 'Erster Kandidat'),
            isInSkipPhase ? h('div', { className: 'text-xs text-amber-600 mt-2' }, 'Beobachte nur — noch nicht auswählen') : null,
            current > maxSeenSoFar && currentIdx >= skipCount ?
              h('div', { className: 'text-xs text-teal-400 mt-2 font-semibold' }, '★ Bester bisher!') : null
          )
        ),

        // Action buttons
        h('div', { className: 'flex gap-3 justify-center' },
          isInSkipPhase ?
            h('button', {
              className: 'px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors',
              onClick: reject
            }, 'Weiter →') :
            h('div', { className: 'flex gap-3' },
              h('button', {
                className: 'px-6 py-2 bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors',
                onClick: accept
              }, '✓ Annehmen'),
              h('button', {
                className: 'px-6 py-2 bg-rose-800 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors',
                onClick: reject
              }, '✗ Ablehnen')
            )
        )
      ) : null,

      // Result phase
      phase === 'result' ? h('div', { className: 'text-center' },
        h('div', { className: 'grid grid-cols-2 gap-3 mb-4' },
          h('div', { className: 'rounded-xl p-3 border ' + (playerWon ? 'bg-teal-900/30 border-teal-700' : 'bg-gray-900 border-gray-700') },
            h('div', { className: 'text-xs text-gray-500 mb-1' }, 'Deine Wahl'),
            h('div', { className: 'text-2xl font-mono font-bold ' + (playerWon ? 'text-teal-400' : 'text-gray-300') }, playerScore),
            h('div', { className: 'text-xs mt-1 ' + (playerWon ? 'text-teal-400' : 'text-rose-400') },
              playerWon ? '✓ Der Beste!' : '✗ Nicht der Beste')
          ),
          h('div', { className: 'rounded-xl p-3 border ' + (optWon ? 'bg-amber-900/30 border-amber-700' : 'bg-gray-900 border-gray-700') },
            h('div', { className: 'text-xs text-gray-500 mb-1' }, '1/e-Strategie'),
            h('div', { className: 'text-2xl font-mono font-bold ' + (optWon ? 'text-amber-400' : 'text-gray-300') }, optScore),
            h('div', { className: 'text-xs mt-1 ' + (optWon ? 'text-amber-400' : 'text-rose-400') },
              optWon ? '✓ Der Beste!' : '✗ Nicht der Beste')
          )
        ),
        h('div', { className: 'text-xs text-gray-600 mb-3' }, 'Tatsächlich bester Kandidat: ' + bestScore),
        // Show all candidates revealed
        h('div', { className: 'flex flex-wrap gap-1 justify-center mb-4' },
          candidates.map(function(s, i) {
            var isBest = s === bestScore;
            var isChosen = i === chosenIdx;
            var isOptChosen = i === optIdx;
            return h('div', { key: i,
              className: 'w-8 h-8 rounded flex items-center justify-center text-xs font-mono font-bold border ' +
                (isBest && isChosen ? 'bg-teal-900 border-teal-500 text-teal-300' :
                 isChosen ? 'bg-rose-900/50 border-rose-700 text-rose-300' :
                 isBest ? 'bg-amber-900/40 border-amber-600 text-amber-300' :
                 'bg-gray-900 border-gray-700 text-gray-400')
            },
              s,
              isChosen ? h('span', { className: 'text-[0.5rem] ml-0.5' }, '↑') : null
            );
          })
        ),
        h('div', { className: 'flex gap-3 justify-center' },
          h('button', {
            className: 'px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition-colors',
            onClick: startGame
          }, 'Nochmal spielen'),
          h('button', {
            className: 'px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors',
            onClick: function() { setPhase('setup'); }
          }, 'Einstellungen')
        )
      ) : null
    );
  }

  window.SecretaryProblemGame = SecretaryProblemGame;
})();


// ════════════════════════════════════════════════════════════════
// 7. CatenaryDrawer — The hanging chain: y = a·cosh(x/a)
// ════════════════════════════════════════════════════════════════
(function() {
  function CatenaryDrawer() {
    var h = React.createElement;
    var a = React.useState(80), setA = a[1]; a = a[0];
    var showParabola = React.useState(true), setShowParabola = showParabola[1]; showParabola = showParabola[0];
    var leftY = React.useState(0), setLeftY = leftY[1]; leftY = leftY[0];
    var rightY = React.useState(0), setRightY = rightY[1]; rightY = rightY[0];
    var dragging = React.useState(null), setDragging = dragging[1]; dragging = dragging[0];

    var SVG_W = 560, SVG_H = 320;
    var PAD = { left: 40, right: 40, top: 20, bottom: 40 };
    var chartW = SVG_W - PAD.left - PAD.right;
    var chartH = SVG_H - PAD.top - PAD.bottom;

    // Coordinate system: x from -xHalf to +xHalf
    var xHalf = 200; // math units
    var baselineY = PAD.top + chartH * 0.35; // SVG y of the anchor points

    function mathToSVGx(mx) { return PAD.left + chartW / 2 + (mx / xHalf) * (chartW / 2); }
    function mathToSVGy(my) { return baselineY + my * (chartH / 200); }

    // Catenary: y = a*(cosh(x/a) - 1) relative to lowest point, endpoints at x = ±xHalf
    // With adjustable endpoint heights: left endpoint offset leftY, right offset rightY (SVG downward)
    // We parameterize as: at x, SVG_y = anchor_SVG_y + a*(cosh(x/a) - cosh(xHalf/a)) scaled
    // Simple approach: catenary dips down, endpoints at the sides

    // Catenary value at x (centered, minimum at 0)
    function catenaryY(x) {
      return a * (Math.cosh(x / a) - Math.cosh(xHalf / a));
    }

    // Parabola matching same endpoints: y = (1/a) * (x^2 - xHalf^2) ≈ similar
    function parabolaY(x) {
      return (x * x - xHalf * xHalf) / (2 * a);
    }

    // Build catenary path
    var catPoints = React.useMemo(function() {
      var pts = [];
      var steps = 200;
      for (var i = 0; i <= steps; i++) {
        var mx = -xHalf + (i / steps) * 2 * xHalf;
        var my = catenaryY(mx);
        // Blend endpoint offsets
        var t = (mx + xHalf) / (2 * xHalf); // 0..1 left to right
        var yOffset = leftY * (1 - t) + rightY * t;
        var svgX = mathToSVGx(mx);
        var svgY = mathToSVGy(my) + yOffset;
        pts.push(svgX + ',' + svgY);
      }
      return pts.join(' ');
    }, [a, leftY, rightY]);

    var parPoints = React.useMemo(function() {
      if (!showParabola) return '';
      var pts = [];
      for (var i = 0; i <= 200; i++) {
        var mx = -xHalf + (i / 200) * 2 * xHalf;
        var my = parabolaY(mx);
        var t = (mx + xHalf) / (2 * xHalf);
        var yOffset = leftY * (1 - t) + rightY * t;
        var svgX = mathToSVGx(mx);
        var svgY = mathToSVGy(my) + yOffset;
        pts.push(svgX + ',' + svgY);
      }
      return pts.join(' ');
    }, [a, showParabola, leftY, rightY]);

    // Endpoint positions in SVG
    var leftEndX = mathToSVGx(-xHalf);
    var leftEndY = baselineY + leftY;
    var rightEndX = mathToSVGx(xHalf);
    var rightEndY = baselineY + rightY;

    // Catenary minimum point
    var minSVGX = mathToSVGx(0);
    var minSVGY = mathToSVGy(catenaryY(0)) + (leftY + rightY) / 2;

    // Formula info
    var coshMax = Math.cosh(xHalf / a).toFixed(3);
    var formulaStr = 'y = ' + a.toFixed(0) + ' · cosh(x / ' + a.toFixed(0) + ')';

    // Drag handlers
    function handleSVGMouseMove(ev) {
      if (!dragging) return;
      var rect = ev.currentTarget.getBoundingClientRect();
      var svgY = (ev.clientY - rect.top) * (SVG_H / rect.height);
      var dy = svgY - baselineY;
      var clamped = Math.min(Math.max(dy, -60), 120);
      if (dragging === 'left') setLeftY(clamped);
      else setRightY(clamped);
    }

    function handleSVGMouseUp() { setDragging(null); }

    return h('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      h('h3', { className: 'text-base font-bold text-center mb-1 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent' },
        'Die Kettenlinie (Katenaría)'),
      h('p', { className: 'text-xs text-gray-400 text-center mb-3' },
        'Eine frei hängende Kette bildet keine Parabel, sondern y = a·cosh(x/a). Ziehe die Endpunkte oder ändere den Parameter a.'),

      // Formula display
      h('div', { className: 'text-center mb-3' },
        h('span', { className: 'font-mono text-sm text-teal-400 bg-gray-900 rounded-lg px-3 py-1.5 border border-gray-800' }, formulaStr),
        h('span', { className: 'text-xs text-gray-600 ml-2' }, '(cosh(x) = (eˣ + e⁻ˣ)/2)')
      ),

      // SVG canvas
      h('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3 touch-none',
        style: { maxWidth: '560px', margin: '0 auto', display: 'block', cursor: dragging ? 'grabbing' : 'default' },
        onMouseMove: handleSVGMouseMove,
        onMouseUp: handleSVGMouseUp,
        onMouseLeave: handleSVGMouseUp
      },
        // Grid lines
        [-200, -150, -100, -50, 0, 50, 100, 150, 200].map(function(mx, i) {
          var x = mathToSVGx(mx);
          return h('line', { key: 'vg' + i, x1: x, y1: PAD.top, x2: x, y2: SVG_H - PAD.bottom,
            stroke: '#1e293b', strokeWidth: 0.5 });
        }),
        // Horizontal baseline
        h('line', { x1: PAD.left, y1: baselineY, x2: SVG_W - PAD.right, y2: baselineY,
          stroke: '#334155', strokeWidth: 1, strokeDasharray: '4 4' }),

        // Parabola (dashed amber)
        showParabola && parPoints ? h('polyline', { points: parPoints, fill: 'none', stroke: '#f59e0b',
          strokeWidth: 2, strokeDasharray: '6 4', opacity: 0.7 }) : null,

        // Catenary (solid teal)
        h('polyline', { points: catPoints, fill: 'none', stroke: '#2dd4bf', strokeWidth: 3 }),

        // Rope lines from ceiling to endpoints (decorative poles)
        h('line', { x1: leftEndX, y1: PAD.top + 10, x2: leftEndX, y2: leftEndY,
          stroke: '#475569', strokeWidth: 3, strokeLinecap: 'round' }),
        h('line', { x1: rightEndX, y1: PAD.top + 10, x2: rightEndX, y2: rightEndY,
          stroke: '#475569', strokeWidth: 3, strokeLinecap: 'round' }),
        h('line', { x1: leftEndX - 10, y1: PAD.top + 10, x2: leftEndX + 10, y2: PAD.top + 10,
          stroke: '#475569', strokeWidth: 2 }),
        h('line', { x1: rightEndX - 10, y1: PAD.top + 10, x2: rightEndX + 10, y2: PAD.top + 10,
          stroke: '#475569', strokeWidth: 2 }),

        // Draggable endpoints
        h('circle', {
          cx: leftEndX, cy: leftEndY, r: 8,
          fill: '#2dd4bf', stroke: '#0f172a', strokeWidth: 2,
          style: { cursor: 'grab' },
          onMouseDown: function(ev) { ev.stopPropagation(); setDragging('left'); }
        }),
        h('circle', {
          cx: rightEndX, cy: rightEndY, r: 8,
          fill: '#2dd4bf', stroke: '#0f172a', strokeWidth: 2,
          style: { cursor: 'grab' },
          onMouseDown: function(ev) { ev.stopPropagation(); setDragging('right'); }
        }),
        // Drag hint labels
        h('text', { x: leftEndX, y: leftEndY + 20, textAnchor: 'middle', fill: '#2dd4bf', fontSize: 8 }, '⬆⬇ ziehen'),
        h('text', { x: rightEndX, y: rightEndY + 20, textAnchor: 'middle', fill: '#2dd4bf', fontSize: 8 }, '⬆⬇ ziehen'),

        // Minimum point
        h('circle', { cx: minSVGX, cy: minSVGY, r: 4, fill: '#f59e0b', stroke: '#0f172a', strokeWidth: 1.5 }),
        h('text', { x: minSVGX + 8, y: minSVGY + 4, fill: '#f59e0b', fontSize: 8 }, 'Tiefpunkt'),

        // Axis x labels
        [-200, -100, 0, 100, 200].map(function(mx, i) {
          return h('text', { key: 'xl' + i, x: mathToSVGx(mx), y: SVG_H - PAD.bottom + 14,
            textAnchor: 'middle', fill: '#475569', fontSize: 8 }, mx);
        }),
        h('text', { x: SVG_W / 2, y: SVG_H - 4, textAnchor: 'middle', fill: '#475569', fontSize: 9 }, 'x'),

        // Legend
        h('rect', { x: SVG_W - PAD.right - 120, y: PAD.top + 4, width: 118, height: showParabola ? 44 : 26, rx: 4,
          fill: '#0f172a', stroke: '#334155', strokeWidth: 0.5, opacity: 0.9 }),
        h('line', { x1: SVG_W - PAD.right - 112, y1: PAD.top + 16, x2: SVG_W - PAD.right - 96, y2: PAD.top + 16,
          stroke: '#2dd4bf', strokeWidth: 2 }),
        h('text', { x: SVG_W - PAD.right - 92, y: PAD.top + 20, fill: '#94a3b8', fontSize: 8 }, 'Kettenlinie (cosh)'),
        showParabola ? h('g', null,
          h('line', { x1: SVG_W - PAD.right - 112, y1: PAD.top + 32, x2: SVG_W - PAD.right - 96, y2: PAD.top + 32,
            stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5 3' }),
          h('text', { x: SVG_W - PAD.right - 92, y: PAD.top + 36, fill: '#94a3b8', fontSize: 8 }, 'Parabel (Vergleich)')
        ) : null
      ),

      // Controls
      h('div', { className: 'flex flex-wrap gap-4 items-center justify-center' },
        h('div', { className: 'flex items-center gap-2 flex-1 min-w-48' },
          h('label', { className: 'text-xs text-gray-400 whitespace-nowrap' }, 'Parameter a = ' + a.toFixed(0)),
          h('input', {
            type: 'range', min: 30, max: 200, step: 1, value: a,
            onChange: function(ev) { setA(parseInt(ev.target.value)); },
            className: 'flex-1 accent-teal-400'
          })
        ),
        h('label', { className: 'flex items-center gap-2 text-xs text-gray-400 cursor-pointer' },
          h('input', {
            type: 'checkbox', checked: showParabola,
            onChange: function(ev) { setShowParabola(ev.target.checked); },
            className: 'accent-amber-400'
          }),
          'Parabel anzeigen'
        )
      ),

      // Math note
      h('div', { className: 'mt-3 text-xs text-gray-600 text-center' },
        'cosh(x) = (eˣ + e⁻ˣ) / 2 — der hyperbolische Kosinus entsteht direkt aus Eulers Zahl e'
      )
    );
  }

  window.CatenaryDrawer = CatenaryDrawer;
})();
