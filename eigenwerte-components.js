// Eigenwerte & KI Blog Components
// Three interactive visualizations, IIFE-wrapped, vanilla React.createElement — no JSX, no build step.

// === Shared: Small matrix solver (Gaussian elimination with partial pivoting) ===
var _eigenSolve = (function() {
  // Solve Ax = b for small n×n systems. Returns x.
  function solve(A, b) {
    var n = b.length;
    // Augmented matrix
    var M = [];
    for (var i = 0; i < n; i++) {
      M[i] = [];
      for (var j = 0; j < n; j++) M[i][j] = A[i][j];
      M[i][n] = b[i];
    }
    // Forward elimination with partial pivoting
    for (var col = 0; col < n; col++) {
      var maxRow = col, maxVal = Math.abs(M[col][col]);
      for (var row = col + 1; row < n; row++) {
        if (Math.abs(M[row][col]) > maxVal) { maxVal = Math.abs(M[row][col]); maxRow = row; }
      }
      var tmp = M[col]; M[col] = M[maxRow]; M[maxRow] = tmp;
      if (Math.abs(M[col][col]) < 1e-12) continue;
      for (var row = col + 1; row < n; row++) {
        var f = M[row][col] / M[col][col];
        for (var j = col; j <= n; j++) M[row][j] -= f * M[col][j];
      }
    }
    // Back substitution
    var x = new Array(n);
    for (var i = n - 1; i >= 0; i--) {
      x[i] = M[i][n];
      for (var j = i + 1; j < n; j++) x[i] -= M[i][j] * x[j];
      x[i] /= M[i][i];
    }
    return x;
  }
  return { solve: solve };
})();


// === 1. EigenTransformViz ===
// Shows how a 2×2 matrix transforms vectors; eigenvectors highlighted.
(function() {
  var h = React.createElement;

  var PRESETS = [
    { name: 'Streckung', m: [[2, 0], [0, 0.5]], desc: 'Eigenwerte: 2 und 0,5' },
    { name: 'Scherung', m: [[2, 1], [0, 3]], desc: 'Eigenwerte: 2 und 3' },
    { name: 'Drehung', m: [[0.5, -1], [1, 0.5]], desc: 'Komplexe Eigenwerte — keine reellen Eigenvektoren!' }
  ];

  function eigenvalues2x2(a, b, c, d) {
    var tr = a + d, det = a * d - b * c;
    var disc = tr * tr - 4 * det;
    if (disc < 0) return null; // complex
    var sq = Math.sqrt(disc);
    return [(tr + sq) / 2, (tr - sq) / 2];
  }

  function eigenvector2x2(a, b, c, d, lam) {
    // (A - λI)v = 0
    var a1 = a - lam, b1 = b, c1 = c, d1 = d - lam;
    if (Math.abs(a1) > 1e-10 || Math.abs(b1) > 1e-10) {
      if (Math.abs(b1) > Math.abs(a1)) return [b1, -a1];
      return [1, -a1 / b1]; // Avoid div by zero edge cases below
    }
    return [1, 0];
  }

  function normalize(v) {
    var len = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    return len > 1e-10 ? [v[0] / len, v[1] / len] : [1, 0];
  }

  function EigenTransformViz() {
    var _p = React.useState(1), preset = _p[0], setPreset = _p[1];
    var _a = React.useState(Math.PI / 5), angle = _a[0], setAngle = _a[1];
    var _d = React.useState(false), dragging = _d[0], setDragging = _d[1];
    var svgRef = React.useRef(null);

    var mat = PRESETS[preset].m;
    var a = mat[0][0], b = mat[0][1], c = mat[1][0], d = mat[1][1];

    var CX = 230, CY = 180, S = 55;
    var W = 460, H = 360;

    var evals = eigenvalues2x2(a, b, c, d);
    var evecs = evals ? [normalize(eigenvector2x2(a, b, c, d, evals[0])), normalize(eigenvector2x2(a, b, c, d, evals[1]))] : null;

    // Unit circle points
    var circleN = 80;
    var circle = React.useMemo(function() {
      var pts = [];
      for (var i = 0; i <= circleN; i++) {
        var t = (2 * Math.PI * i) / circleN;
        pts.push([Math.cos(t), Math.sin(t)]);
      }
      return pts;
    }, []);

    function transform(v) { return [a * v[0] + b * v[1], c * v[0] + d * v[1]]; }
    function toSvg(v) { return [CX + v[0] * S, CY - v[1] * S]; }

    // Transformed circle
    var transCircle = circle.map(transform);
    var circlePath = circle.map(function(p) { var s = toSvg(p); return s[0] + ',' + s[1]; }).join(' ');
    var transPath = transCircle.map(function(p) { var s = toSvg(p); return s[0] + ',' + s[1]; }).join(' ');

    // Test vector
    var vx = Math.cos(angle), vy = Math.sin(angle);
    var tv = transform([vx, vy]);
    var vSvg = toSvg([vx, vy]);
    var tvSvg = toSvg(tv);

    // Check alignment with eigenvector
    var aligned = false;
    if (evecs) {
      for (var ei = 0; ei < 2; ei++) {
        var dot = Math.abs(vx * evecs[ei][0] + vy * evecs[ei][1]);
        if (dot > 0.97) { aligned = true; break; }
      }
    }

    function handlePointer(e) {
      if (!svgRef.current) return;
      var rect = svgRef.current.getBoundingClientRect();
      var mx = (e.clientX - rect.left) * (W / rect.width) - CX;
      var my = CY - (e.clientY - rect.top) * (H / rect.height);
      setAngle(Math.atan2(my, mx));
    }

    function onDown(e) { setDragging(true); handlePointer(e); }
    function onMove(e) { if (dragging) handlePointer(e); }
    function onUp() { setDragging(false); }

    React.useEffect(function() {
      function up() { setDragging(false); }
      window.addEventListener('pointerup', up);
      return function() { window.removeEventListener('pointerup', up); };
    }, []);

    function arrow(x1, y1, x2, y2, color, sw) {
      var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy);
      if (len < 2) return null;
      var ux = dx / len, uy = dy / len;
      var hs = 8;
      return h('g', { key: color + x1 + y1 }, [
        h('line', { x1: x1, y1: y1, x2: x2 - ux * hs, y2: y2 - uy * hs, stroke: color, strokeWidth: sw || 2, key: 'l' }),
        h('polygon', {
          points: [
            (x2) + ',' + (y2),
            (x2 - ux * hs - uy * hs * 0.4) + ',' + (y2 - uy * hs + ux * hs * 0.4),
            (x2 - ux * hs + uy * hs * 0.4) + ',' + (y2 - uy * hs - ux * hs * 0.4)
          ].join(' '),
          fill: color, key: 'p'
        })
      ]);
    }

    // Buttons
    var buttons = PRESETS.map(function(pr, i) {
      var active = i === preset;
      return h('button', {
        key: i,
        className: 'px-3 py-1.5 text-xs rounded-lg border transition cursor-pointer ' +
          (active ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300'),
        onClick: function() { setPreset(i); }
      }, pr.name);
    });

    var matDisplay = h('div', { className: 'text-xs font-mono text-gray-400 mt-2' },
      'A = [' + a + ', ' + b + '; ' + c + ', ' + d + ']  —  ' + PRESETS[preset].desc
    );

    var svgEl = h('svg', {
      ref: svgRef, viewBox: '0 0 ' + W + ' ' + H, width: '100%',
      className: 'touch-none select-none cursor-crosshair',
      onPointerDown: onDown, onPointerMove: onMove, onPointerUp: onUp
    }, [
      // Grid
      h('line', { x1: 30, y1: CY, x2: W - 30, y2: CY, stroke: '#1f2937', strokeWidth: 1, key: 'gx' }),
      h('line', { x1: CX, y1: 20, x2: CX, y2: H - 20, stroke: '#1f2937', strokeWidth: 1, key: 'gy' }),
      // Unit circle
      h('polyline', { points: circlePath, fill: 'none', stroke: '#374151', strokeWidth: 1, strokeDasharray: '4,4', key: 'uc' }),
      // Transformed circle
      h('polyline', { points: transPath, fill: 'rgba(34,211,238,0.08)', stroke: '#22d3ee', strokeWidth: 1.5, key: 'tc' }),
      // Eigenvectors (if real)
      evecs ? [
        arrow(CX, CY, CX + evecs[0][0] * S * 1.8, CY - evecs[0][1] * S * 1.8, '#22d3ee', 1.5),
        arrow(CX, CY, CX + evecs[1][0] * S * 1.8, CY - evecs[1][1] * S * 1.8, '#f59e0b', 1.5),
        h('text', { x: CX + evecs[0][0] * S * 2, y: CY - evecs[0][1] * S * 2, fill: '#22d3ee', fontSize: 11, textAnchor: 'middle', key: 'el1' }, 'λ₁=' + evals[0].toFixed(1)),
        h('text', { x: CX + evecs[1][0] * S * 2, y: CY - evecs[1][1] * S * 2, fill: '#f59e0b', fontSize: 11, textAnchor: 'middle', key: 'el2' }, 'λ₂=' + evals[1].toFixed(1)),
      ] : h('text', { x: CX, y: 30, fill: '#f87171', fontSize: 12, textAnchor: 'middle', key: 'noev' }, 'Keine reellen Eigenvektoren!'),
      // Test vector v
      arrow(CX, CY, vSvg[0], vSvg[1], aligned ? '#34d399' : '#e2e8f0', 2.5),
      h('text', { x: vSvg[0] + 8, y: vSvg[1] - 8, fill: aligned ? '#34d399' : '#e2e8f0', fontSize: 12, fontWeight: 600, key: 'vl' }, 'v'),
      // Transformed vector Av
      arrow(CX, CY, tvSvg[0], tvSvg[1], aligned ? '#34d399' : '#a78bfa', 2.5),
      h('text', { x: tvSvg[0] + 8, y: tvSvg[1] - 8, fill: aligned ? '#34d399' : '#a78bfa', fontSize: 12, fontWeight: 600, key: 'avl' }, 'Av'),
      // Drag hint
      h('circle', { cx: vSvg[0], cy: vSvg[1], r: 10, fill: 'rgba(255,255,255,0.1)', stroke: 'rgba(255,255,255,0.3)', strokeWidth: 1, key: 'dh' }),
    ]);

    var hint = h('p', { className: 'text-xs text-gray-500 mt-2 text-center' },
      aligned
        ? h('span', { className: 'text-emerald-400 font-semibold' }, '✓ Eigenvektor getroffen! Av zeigt in dieselbe Richtung wie v.')
        : 'Ziehe den weißen Vektor (v). Wenn er auf einen Eigenvektor trifft, zeigen v und Av in dieselbe Richtung.'
    );

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      h('div', { className: 'flex flex-wrap gap-2 mb-2', key: 'btns' }, buttons),
      matDisplay,
      svgEl,
      hint
    ]);
  }

  window.EigenTransformViz = EigenTransformViz;
})();


// === 2. NeumannSeriesViz ===
// Iterative convergence of residual correction to least-squares solution.
(function() {
  var h = React.createElement;

  // Hardcoded: X = [1, 0.5]^T, y = [3, 4]^T
  // X^TX = 1.25, exact c=4, ŷ* = [4, 2]
  var X = [1, 0.5];
  var Y = [3, 4];
  var XTX = X[0] * X[0] + X[1] * X[1]; // 1.25
  var EXACT = [4, 2]; // ŷ* = c*X where c = X^Ty / X^TX = 5/1.25 = 4

  function dot(a, b) { return a[0] * b[0] + a[1] * b[1]; }
  function vsub(a, b) { return [a[0] - b[0], a[1] - b[1]]; }
  function vadd(a, b) { return [a[0] + b[0], a[1] + b[1]]; }
  function vscale(a, s) { return [a[0] * s, a[1] * s]; }
  function vnorm(v) { return Math.sqrt(v[0] * v[0] + v[1] * v[1]); }

  function computeIterations(maxN) {
    var iters = [{ yhat: [0, 0], residual: Y.slice(), rnorm: vnorm(Y) }];
    var yhat = [0, 0];
    for (var i = 0; i < maxN; i++) {
      var r = vsub(Y, yhat);
      var proj = vscale(X, dot(X, r)); // X * (X^T * r)
      yhat = vadd(yhat, proj);
      var newR = vsub(Y, yhat);
      iters.push({ yhat: yhat.slice(), residual: newR.slice(), rnorm: vnorm(newR) });
    }
    return iters;
  }

  var MAX_ITER = 20;

  function NeumannSeriesViz() {
    var _n = React.useState(0), step = _n[0], setStep = _n[1];
    var _a = React.useState(false), autoPlay = _a[0], setAutoPlay = _a[1];
    var timerRef = React.useRef(null);

    var allIters = React.useMemo(function() { return computeIterations(MAX_ITER); }, []);

    React.useEffect(function() {
      if (autoPlay && step < MAX_ITER) {
        timerRef.current = setTimeout(function() { setStep(function(s) { return Math.min(s + 1, MAX_ITER); }); }, 600);
      }
      if (step >= MAX_ITER) setAutoPlay(false);
      return function() { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [autoPlay, step]);

    var cur = allIters[step];

    // LEFT: Vector space
    var VW = 240, VH = 240, VCX = 30, VCY = VH - 30, VS = 42;
    function vToSvg(v) { return [VCX + v[0] * VS, VCY - v[1] * VS]; }

    var ySvg = vToSvg(Y);
    var yhatSvg = vToSvg(cur.yhat);
    var exactSvg = vToSvg(EXACT);

    // Column space line (direction X)
    var lineEnd1 = vToSvg(vscale(X, -0.5));
    var lineEnd2 = vToSvg(vscale(X, 5.5));

    function arrowSvg(x1, y1, x2, y2, color, sw, dash) {
      var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy);
      if (len < 3) return null;
      var ux = dx / len, uy = dy / len, hs = 6;
      return h('g', { key: color + '-' + x1.toFixed(0) + y1.toFixed(0) }, [
        h('line', { x1: x1, y1: y1, x2: x2 - ux * hs, y2: y2 - uy * hs, stroke: color, strokeWidth: sw || 1.5, strokeDasharray: dash || 'none', key: 'l' }),
        h('polygon', {
          points: [x2 + ',' + y2, (x2 - ux * hs - uy * hs * 0.35) + ',' + (y2 - uy * hs + ux * hs * 0.35), (x2 - ux * hs + uy * hs * 0.35) + ',' + (y2 - uy * hs - ux * hs * 0.35)].join(' '),
          fill: color, key: 'p'
        })
      ]);
    }

    var vecSvg = h('svg', { viewBox: '0 0 ' + VW + ' ' + VH, width: '100%', className: 'max-w-[260px]' }, [
      // Axes
      h('line', { x1: VCX, y1: 10, x2: VCX, y2: VH - 10, stroke: '#1f2937', strokeWidth: 1, key: 'ax' }),
      h('line', { x1: 10, y1: VCY, x2: VW - 10, y2: VCY, stroke: '#1f2937', strokeWidth: 1, key: 'ay' }),
      // Column space
      h('line', { x1: lineEnd1[0], y1: lineEnd1[1], x2: lineEnd2[0], y2: lineEnd2[1], stroke: '#374151', strokeWidth: 1, strokeDasharray: '6,3', key: 'cs' }),
      h('text', { x: lineEnd2[0] + 4, y: lineEnd2[1] - 4, fill: '#4b5563', fontSize: 9, key: 'csl' }, 'Spaltenraum'),
      // Exact projection (green dot)
      h('circle', { cx: exactSvg[0], cy: exactSvg[1], r: 5, fill: '#34d399', key: 'ex' }),
      h('text', { x: exactSvg[0] + 8, y: exactSvg[1] - 6, fill: '#34d399', fontSize: 10, key: 'exl' }, 'ŷ*'),
      // y vector
      arrowSvg(VCX, VCY, ySvg[0], ySvg[1], '#9ca3af', 1.5),
      h('text', { x: ySvg[0] + 6, y: ySvg[1] - 6, fill: '#9ca3af', fontSize: 11, fontWeight: 600, key: 'yl' }, 'y'),
      // Current ŷ_n (blue dot)
      h('circle', { cx: yhatSvg[0], cy: yhatSvg[1], r: 5, fill: '#3b82f6', stroke: '#fff', strokeWidth: 1, key: 'yh' }),
      h('text', { x: yhatSvg[0] + 8, y: yhatSvg[1] + 4, fill: '#3b82f6', fontSize: 10, key: 'yhl' }, 'ŷ' + step),
      // Residual (red dashed)
      step > 0 ? arrowSvg(yhatSvg[0], yhatSvg[1], ySvg[0], ySvg[1], '#f87171', 1, '4,3') : null,
      step > 0 ? h('text', { x: (yhatSvg[0] + ySvg[0]) / 2 + 6, y: (yhatSvg[1] + ySvg[1]) / 2, fill: '#f87171', fontSize: 9, key: 'rl' }, 'r' + step) : null,
    ]);

    // RIGHT: Convergence chart
    var CW = 240, CH = 180, CPL = 40, CPB = 25, CPT = 10, CPR = 10;
    var cpW = CW - CPL - CPR, cpH = CH - CPT - CPB;
    var maxR = 5.5;
    function cToSvg(n, r) { return [CPL + (n / MAX_ITER) * cpW, CPT + (1 - r / maxR) * cpH]; }

    var chartPoints = [];
    for (var i = 0; i <= step; i++) {
      var p = cToSvg(i, allIters[i].rnorm);
      chartPoints.push(p[0] + ',' + p[1]);
    }

    var chartSvg = h('svg', { viewBox: '0 0 ' + CW + ' ' + CH, width: '100%', className: 'max-w-[260px]' }, [
      // Axes
      h('line', { x1: CPL, y1: CPT, x2: CPL, y2: CH - CPB, stroke: '#4b5563', strokeWidth: 1, key: 'ca1' }),
      h('line', { x1: CPL, y1: CH - CPB, x2: CW - CPR, y2: CH - CPB, stroke: '#4b5563', strokeWidth: 1, key: 'ca2' }),
      h('text', { x: CW / 2, y: CH - 4, fill: '#6b7280', fontSize: 9, textAnchor: 'middle', key: 'cxl' }, 'Iteration n'),
      h('text', { x: 8, y: CPT + cpH / 2, fill: '#6b7280', fontSize: 9, textAnchor: 'middle', transform: 'rotate(-90,' + 8 + ',' + (CPT + cpH / 2) + ')', key: 'cyl' }, '||rₙ||'),
      // Zero line
      h('line', { x1: CPL, y1: cToSvg(0, 0)[1], x2: CW - CPR, y2: cToSvg(0, 0)[1], stroke: '#34d399', strokeWidth: 0.5, strokeDasharray: '3,3', key: 'z0' }),
      // Residual norm of exact (should be ~2.24)
      h('line', { x1: CPL, y1: cToSvg(0, vnorm(vsub(Y, EXACT)))[1], x2: CW - CPR, y2: cToSvg(0, vnorm(vsub(Y, EXACT)))[1], stroke: '#34d399', strokeWidth: 0.5, strokeDasharray: '2,4', key: 'rexact' }),
      h('text', { x: CW - CPR - 2, y: cToSvg(0, vnorm(vsub(Y, EXACT)))[1] - 4, fill: '#34d399', fontSize: 8, textAnchor: 'end', key: 'rexl' }, '||r*||'),
      // Points and line
      chartPoints.length > 1 ? h('polyline', { points: chartPoints.join(' '), fill: 'none', stroke: '#f87171', strokeWidth: 1.5, key: 'cl' }) : null,
    ].concat(
      chartPoints.map(function(_, idx) {
        var pp = cToSvg(idx, allIters[idx].rnorm);
        return h('circle', { cx: pp[0], cy: pp[1], r: 3, fill: '#f87171', key: 'cp' + idx });
      })
    ));

    // Controls
    var controls = h('div', { className: 'flex flex-wrap items-center gap-2 mt-3', key: 'ctrl' }, [
      h('button', {
        className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300 transition cursor-pointer',
        onClick: function() { if (step < MAX_ITER) setStep(step + 1); },
        disabled: step >= MAX_ITER, key: 'next'
      }, 'Nächster Schritt'),
      h('button', {
        className: 'px-3 py-1.5 text-xs rounded-lg border transition cursor-pointer ' +
          (autoPlay ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'border-gray-700 hover:border-cyan-500/50 text-gray-300'),
        onClick: function() { setAutoPlay(!autoPlay); }, key: 'auto'
      }, autoPlay ? '⏸ Pause' : '▶ Auto'),
      h('button', {
        className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300 transition cursor-pointer',
        onClick: function() { setStep(0); setAutoPlay(false); }, key: 'reset'
      }, '↺ Reset'),
      h('span', { className: 'text-xs text-gray-500 ml-2', key: 'info' },
        'Iteration ' + step + '  ·  ||rₙ|| = ' + cur.rnorm.toFixed(3)
      ),
    ]);

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      h('div', { className: 'flex flex-col sm:flex-row gap-2 items-center justify-center', key: 'panels' }, [
        h('div', { key: 'left' }, [
          h('p', { className: 'text-xs text-gray-500 text-center mb-1', key: 't1' }, 'Vektorraum'),
          vecSvg
        ]),
        h('div', { key: 'right' }, [
          h('p', { className: 'text-xs text-gray-500 text-center mb-1', key: 't2' }, 'Residuum-Norm'),
          chartSvg
        ])
      ]),
      controls
    ]);
  }

  window.NeumannSeriesViz = NeumannSeriesViz;
})();


// === 3. KernelRegressionViz ===
// Interactive Kernel Ridge Regression with adjustable λ and σ.
(function() {
  var h = React.createElement;

  // 8 data points: y = sin(x) + noise
  var DATA_X = [0.4, 1.1, 1.8, 2.5, 3.2, 3.9, 4.6, 5.4];
  var DATA_Y = [0.39, 0.93, 0.87, 0.56, -0.12, -0.72, -0.95, -0.65];
  var N = DATA_X.length;

  function rbf(xi, xj, sigma) {
    var d = xi - xj;
    return Math.exp(-(d * d) / (2 * sigma * sigma));
  }

  function buildKernel(sigma) {
    var K = [];
    for (var i = 0; i < N; i++) {
      K[i] = [];
      for (var j = 0; j < N; j++) K[i][j] = rbf(DATA_X[i], DATA_X[j], sigma);
    }
    return K;
  }

  function predict(alpha, sigma, xStar) {
    var sum = 0;
    for (var i = 0; i < N; i++) sum += alpha[i] * rbf(DATA_X[i], xStar, sigma);
    return sum;
  }

  var PRESETS = [
    { name: 'Überanpassung', lambda: 0.001, sigma: 0.3 },
    { name: 'Optimal', lambda: 0.1, sigma: 0.8 },
    { name: 'Unteranpassung', lambda: 2.0, sigma: 2.0 },
  ];

  function KernelRegressionViz() {
    var _l = React.useState(0.1), lambda = _l[0], setLambda = _l[1];
    var _s = React.useState(0.8), sigma = _s[0], setSigma = _s[1];

    // Solve (K + λI)α = y
    var result = React.useMemo(function() {
      var K = buildKernel(sigma);
      var Kreg = K.map(function(row, i) {
        return row.map(function(val, j) { return val + (i === j ? lambda : 0); });
      });
      var alpha;
      try {
        alpha = _eigenSolve.solve(Kreg, DATA_Y.slice());
      } catch (e) {
        alpha = new Array(N).fill(0);
      }

      // Predict at many points
      var nPred = 150;
      var predX = [], predY = [];
      for (var i = 0; i <= nPred; i++) {
        var x = 0 + (6.0 * i) / nPred;
        predX.push(x);
        predY.push(predict(alpha, sigma, x));
      }
      return { alpha: alpha, predX: predX, predY: predY };
    }, [lambda, sigma]);

    // SVG layout
    var W = 500, H = 280, PL = 40, PR = 15, PT = 15, PB = 30;
    var pW = W - PL - PR, pH = H - PT - PB;
    var xMin = -0.2, xMax = 6.2, yMin = -1.6, yMax = 1.6;

    function toSvgX(x) { return PL + ((x - xMin) / (xMax - xMin)) * pW; }
    function toSvgY(y) { return PT + ((yMax - y) / (yMax - yMin)) * pH; }

    // Prediction curve
    var curvePath = result.predX.map(function(x, i) {
      var y = Math.max(yMin, Math.min(yMax, result.predY[i]));
      return (i === 0 ? 'M' : 'L') + toSvgX(x).toFixed(1) + ',' + toSvgY(y).toFixed(1);
    }).join(' ');

    // Basis functions (faint)
    var basisPaths = result.alpha.map(function(ai, idx) {
      var pts = [];
      for (var xi = 0; xi <= 100; xi++) {
        var x = xMin + (xMax - xMin) * xi / 100;
        var y = ai * rbf(DATA_X[idx], x, sigma);
        y = Math.max(yMin, Math.min(yMax, y));
        pts.push((xi === 0 ? 'M' : 'L') + toSvgX(x).toFixed(1) + ',' + toSvgY(y).toFixed(1));
      }
      return h('path', { d: pts.join(' '), fill: 'none', stroke: '#22d3ee', strokeWidth: 0.7, opacity: 0.2, key: 'b' + idx });
    });

    // Data points
    var dataPoints = DATA_X.map(function(x, i) {
      return h('circle', { cx: toSvgX(x), cy: toSvgY(DATA_Y[i]), r: 5, fill: '#1e293b', stroke: '#e2e8f0', strokeWidth: 1.5, key: 'd' + i });
    });

    // Grid lines
    var gridLines = [];
    for (var gx = 0; gx <= 6; gx++) {
      gridLines.push(h('line', { x1: toSvgX(gx), y1: PT, x2: toSvgX(gx), y2: H - PB, stroke: '#1f2937', strokeWidth: 0.5, key: 'gx' + gx }));
      gridLines.push(h('text', { x: toSvgX(gx), y: H - PB + 14, fill: '#4b5563', fontSize: 9, textAnchor: 'middle', key: 'gxl' + gx }, gx));
    }
    for (var gy = -1; gy <= 1; gy++) {
      gridLines.push(h('line', { x1: PL, y1: toSvgY(gy), x2: W - PR, y2: toSvgY(gy), stroke: '#1f2937', strokeWidth: 0.5, key: 'gy' + gy }));
      gridLines.push(h('text', { x: PL - 6, y: toSvgY(gy) + 3, fill: '#4b5563', fontSize: 9, textAnchor: 'end', key: 'gyl' + gy }, gy));
    }

    var svgEl = h('svg', { viewBox: '0 0 ' + W + ' ' + H, width: '100%' }, [
      // Axes
      h('line', { x1: PL, y1: H - PB, x2: W - PR, y2: H - PB, stroke: '#4b5563', strokeWidth: 1, key: 'xa' }),
      h('line', { x1: PL, y1: PT, x2: PL, y2: H - PB, stroke: '#4b5563', strokeWidth: 1, key: 'ya' }),
    ].concat(gridLines, basisPaths, [
      // Prediction curve
      h('path', { d: curvePath, fill: 'none', stroke: '#22d3ee', strokeWidth: 2.5, key: 'curve' }),
    ], dataPoints));

    // Slider for lambda (log scale)
    var logLam = Math.log10(lambda);
    function setLogLam(e) { setLambda(Math.pow(10, parseFloat(e.target.value))); }

    // Slider for sigma
    function setSig(e) { setSigma(parseFloat(e.target.value)); }

    var nIter = Math.round(1 / lambda);

    var controls = h('div', { className: 'mt-3 space-y-3', key: 'ctrl' }, [
      h('div', { className: 'flex items-center gap-3', key: 'lam' }, [
        h('label', { className: 'text-xs text-gray-500 w-8', key: 'll' }, 'λ'),
        h('input', { type: 'range', min: -3, max: 0.3, step: 0.05, value: logLam, onChange: setLogLam, className: 'flex-1 accent-cyan-500', key: 'lr' }),
        h('span', { className: 'text-xs text-cyan-400 font-mono w-32 text-right', key: 'lv' }, 'λ = ' + lambda.toFixed(3) + (lambda > 0.005 ? '  (≈' + nIter + ' Iter.)' : '')),
      ]),
      h('div', { className: 'flex items-center gap-3', key: 'sig' }, [
        h('label', { className: 'text-xs text-gray-500 w-8', key: 'sl' }, 'σ'),
        h('input', { type: 'range', min: 0.2, max: 3.0, step: 0.05, value: sigma, onChange: setSig, className: 'flex-1 accent-amber-500', key: 'sr' }),
        h('span', { className: 'text-xs text-amber-400 font-mono w-32 text-right', key: 'sv' }, 'σ = ' + sigma.toFixed(2)),
      ]),
      h('div', { className: 'flex flex-wrap gap-2', key: 'presets' },
        PRESETS.map(function(pr) {
          var active = Math.abs(lambda - pr.lambda) < 0.01 && Math.abs(sigma - pr.sigma) < 0.05;
          return h('button', {
            key: pr.name,
            className: 'px-3 py-1.5 text-xs rounded-lg border transition cursor-pointer ' +
              (active ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300'),
            onClick: function() { setLambda(pr.lambda); setSigma(pr.sigma); }
          }, pr.name);
        })
      ),
    ]);

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      svgEl,
      controls
    ]);
  }

  window.KernelRegressionViz = KernelRegressionViz;
})();


// === 4. ConvergenceExplorer ===
// Shows λ^n for adjustable |λ| — why eigenvalue magnitude determines convergence.
(function() {
  var h = React.createElement;

  function ConvergenceExplorer() {
    var _l = React.useState(0.7), lam = _l[0], setLam = _l[1];
    var _a = React.useState(false), anim = _a[0], setAnim = _a[1];
    var _n = React.useState(0), step = _n[0], setStep = _n[1];
    var timerRef = React.useRef(null);

    var MAX_N = 20;
    var W = 420, H = 220, PL = 45, PR = 15, PT = 15, PB = 30;
    var pW = W - PL - PR, pH = H - PT - PB;

    // Compute λ^n values
    var vals = React.useMemo(function() {
      var v = [];
      for (var i = 0; i <= MAX_N; i++) v.push(Math.pow(lam, i));
      return v;
    }, [lam]);

    React.useEffect(function() {
      if (anim && step < MAX_N) {
        timerRef.current = setTimeout(function() { setStep(function(s) { return s + 1; }); }, 300);
      }
      if (step >= MAX_N) setAnim(false);
      return function() { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [anim, step]);

    // Determine y-axis range
    var yMax = lam > 1 ? Math.max(Math.pow(lam, step), 2) : 1.2;
    var yMin = -0.1;

    function toX(n) { return PL + (n / MAX_N) * pW; }
    function toY(v) { return PT + ((yMax - v) / (yMax - yMin)) * pH; }

    // Color based on convergence
    var curveColor = lam < 0.99 ? '#34d399' : (lam > 1.01 ? '#f87171' : '#fbbf24');
    var label = lam < 0.99 ? 'Konvergenz' : (lam > 1.01 ? 'Explosion!' : 'Grenzfall');

    // Points up to current step
    var points = [];
    for (var i = 0; i <= step; i++) {
      var val = Math.min(vals[i], yMax * 1.5);
      points.push(h('circle', { cx: toX(i), cy: toY(val), r: 3.5, fill: curveColor, key: 'p' + i }));
    }

    // Line through points
    var linePts = [];
    for (var i = 0; i <= step; i++) {
      linePts.push(toX(i) + ',' + toY(Math.min(vals[i], yMax * 1.5)));
    }

    // Grid
    var gridEls = [];
    for (var n = 0; n <= MAX_N; n += 5) {
      gridEls.push(h('line', { x1: toX(n), y1: PT, x2: toX(n), y2: H - PB, stroke: '#1f2937', strokeWidth: 0.5, key: 'gn' + n }));
      gridEls.push(h('text', { x: toX(n), y: H - PB + 14, fill: '#4b5563', fontSize: 9, textAnchor: 'middle', key: 'gnl' + n }, n));
    }

    var svgEl = h('svg', { viewBox: '0 0 ' + W + ' ' + H, width: '100%' }, [
      // Axes
      h('line', { x1: PL, y1: H - PB, x2: W - PR, y2: H - PB, stroke: '#4b5563', strokeWidth: 1, key: 'xa' }),
      h('line', { x1: PL, y1: PT, x2: PL, y2: H - PB, stroke: '#4b5563', strokeWidth: 1, key: 'ya' }),
      h('text', { x: W / 2, y: H - 4, fill: '#6b7280', fontSize: 10, textAnchor: 'middle', key: 'xlab' }, 'n (Iterationen)'),
      h('text', { x: 8, y: PT + pH / 2, fill: '#6b7280', fontSize: 10, textAnchor: 'middle', transform: 'rotate(-90,8,' + (PT + pH / 2) + ')', key: 'ylab' }, '\u03BB\u207F'),
      // 1-line
      h('line', { x1: PL, y1: toY(1), x2: W - PR, y2: toY(1), stroke: '#fbbf24', strokeWidth: 0.5, strokeDasharray: '4,4', key: 'one' }),
      h('text', { x: PL - 4, y: toY(1) + 3, fill: '#fbbf24', fontSize: 9, textAnchor: 'end', key: 'onel' }, '1'),
      // Zero line
      h('line', { x1: PL, y1: toY(0), x2: W - PR, y2: toY(0), stroke: '#374151', strokeWidth: 0.5, key: 'zero' }),
    ].concat(gridEls, [
      linePts.length > 1 ? h('polyline', { points: linePts.join(' '), fill: 'none', stroke: curveColor, strokeWidth: 1.5, key: 'line' }) : null,
    ], points, [
      // Status label
      h('text', { x: W - PR - 5, y: PT + 15, fill: curveColor, fontSize: 12, fontWeight: 600, textAnchor: 'end', key: 'status' }, label),
    ]));

    var controls = h('div', { className: 'flex flex-wrap items-center gap-3 mt-2', key: 'ctrl' }, [
      h('label', { className: 'text-xs text-gray-500', key: 'll' }, '|\u03BB|'),
      h('input', { type: 'range', min: 0.1, max: 1.5, step: 0.01, value: lam,
        onChange: function(e) { setLam(parseFloat(e.target.value)); setStep(0); setAnim(false); },
        className: 'flex-1 accent-cyan-500', key: 'lr' }),
      h('span', { className: 'text-xs font-mono w-20 text-right', style: { color: curveColor }, key: 'lv' }, '|\u03BB| = ' + lam.toFixed(2)),
      h('button', {
        className: 'px-3 py-1.5 text-xs rounded-lg border transition cursor-pointer ' +
          (anim ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'border-gray-700 hover:border-cyan-500/50 text-gray-300'),
        onClick: function() { if (step >= MAX_N) setStep(0); setAnim(!anim); }, key: 'play'
      }, anim ? '\u23F8 Pause' : '\u25B6 Start'),
      h('button', {
        className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-cyan-500/50 text-gray-300 transition cursor-pointer',
        onClick: function() { setStep(0); setAnim(false); }, key: 'reset'
      }, '\u21BA Reset'),
    ]);

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-4 rounded-2xl max-w-xl mx-auto border border-gray-800/50' }, [
      svgEl, controls
    ]);
  }

  window.ConvergenceExplorer = ConvergenceExplorer;
})();


// === 5. RegularizationCompare ===
// Side-by-side: iteration filter 1-(1-μ)^n vs Ridge filter μ/(μ+λ).
(function() {
  var h = React.createElement;

  function RegularizationCompare() {
    var _n = React.useState(5), nIter = _n[0], setNIter = _n[1];

    var W = 240, H = 180, PL = 35, PR = 10, PT = 15, PB = 28;
    var pW = W - PL - PR, pH = H - PT - PB;
    var muMax = 1.2;

    function toX(mu) { return PL + (mu / muMax) * pW; }
    function toY(v) { return PT + (1 - v) * pH; }

    // Derived λ
    var lambda = 1 / nIter;

    // Iteration filter: 1 - (1-μ)^n
    function iterFilter(mu) { return 1 - Math.pow(Math.max(0, 1 - mu), nIter); }
    // Ridge filter: μ / (μ + λ)
    function ridgeFilter(mu) { return mu / (mu + lambda); }

    function makePath(fn) {
      var pts = [];
      for (var i = 0; i <= 60; i++) {
        var mu = (muMax * i) / 60;
        var v = Math.max(0, Math.min(1, fn(mu)));
        pts.push((i === 0 ? 'M' : 'L') + toX(mu).toFixed(1) + ',' + toY(v).toFixed(1));
      }
      return pts.join(' ');
    }

    var iterPath = makePath(iterFilter);
    var ridgePath = makePath(ridgeFilter);

    function makePanel(title, path, color, isRight) {
      var gridEls = [];
      for (var g = 0; g <= 1; g += 0.5) {
        gridEls.push(h('line', { x1: PL, y1: toY(g), x2: W - PR, y2: toY(g), stroke: '#1f2937', strokeWidth: 0.5, key: 'g' + g }));
      }
      return h('div', { key: title }, [
        h('p', { className: 'text-xs text-center mb-1', style: { color: color }, key: 't' }, title),
        h('svg', { viewBox: '0 0 ' + W + ' ' + H, width: '100%', className: 'max-w-[240px]', key: 's' }, [
          h('line', { x1: PL, y1: H - PB, x2: W - PR, y2: H - PB, stroke: '#4b5563', strokeWidth: 1, key: 'xa' }),
          h('line', { x1: PL, y1: PT, x2: PL, y2: H - PB, stroke: '#4b5563', strokeWidth: 1, key: 'ya' }),
          h('text', { x: (PL + W - PR) / 2, y: H - 5, fill: '#6b7280', fontSize: 9, textAnchor: 'middle', key: 'xl' }, '\u03BC (Eigenwert)'),
          h('text', { x: PL - 4, y: toY(1) + 3, fill: '#6b7280', fontSize: 8, textAnchor: 'end', key: 'yl1' }, '1'),
          h('text', { x: PL - 4, y: toY(0) + 3, fill: '#6b7280', fontSize: 8, textAnchor: 'end', key: 'yl0' }, '0'),
          // 100% line
          h('line', { x1: PL, y1: toY(1), x2: W - PR, y2: toY(1), stroke: '#374151', strokeWidth: 0.5, strokeDasharray: '3,3', key: 'max' }),
        ].concat(gridEls, [
          h('path', { d: path, fill: 'none', stroke: color, strokeWidth: 2.5, key: 'curve' }),
        ]))
      ]);
    }

    var leftPanel = makePanel('Iteration: 1\u2009\u2212\u2009(1\u2212\u03BC)\u207F', iterPath, '#22d3ee');
    var rightPanel = makePanel('Ridge: \u03BC/(\u03BC+\u03BB)', ridgePath, '#f59e0b');

    var controls = h('div', { className: 'flex items-center gap-3 mt-2', key: 'ctrl' }, [
      h('label', { className: 'text-xs text-gray-500', key: 'nl' }, 'n'),
      h('input', { type: 'range', min: 1, max: 50, step: 1, value: nIter,
        onChange: function(e) { setNIter(parseInt(e.target.value)); },
        className: 'flex-1 accent-cyan-500', key: 'nr' }),
      h('span', { className: 'text-xs text-cyan-400 font-mono w-40 text-right', key: 'nv' },
        'n = ' + nIter + '  \u2192  \u03BB \u2248 ' + lambda.toFixed(3)),
    ]);

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      h('div', { className: 'flex flex-col sm:flex-row gap-2 items-center justify-center', key: 'panels' }, [
        leftPanel,
        h('span', { className: 'text-2xl text-emerald-400 font-bold hidden sm:block', key: 'eq' }, '\u2248'),
        rightPanel
      ]),
      controls,
      h('p', { className: 'text-xs text-gray-500 text-center mt-2', key: 'hint' },
        'Beide Kurven haben dieselbe Form \u2014 fr\u00fches Aufh\u00f6ren und Ridge Regression tun dasselbe!'
      )
    ]);
  }

  window.RegularizationCompare = RegularizationCompare;
})();
