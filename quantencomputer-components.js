// Quantencomputer Blog Components
// Four interactive visualizations, IIFE-wrapped, vanilla React.createElement — no JSX, no build step.
//
// 1. BlochSphereViz — θ/φ sliders, Hadamard button, SVG pseudo-3D sphere
// 2. QuantumCircuitBuilder — click-to-place gates on 2 qubit lines, live state vector
// 3. MeasurementSimulator — Bell state measurements accumulating histogram
// 4. QiskitPlayground — readonly code + simulated histogram + link to IBM Quantum


// ============================================================
// Complex number helpers (shared)
// ============================================================
var _qcComplex = (function() {
  function c(re, im) { return { re: re, im: im || 0 }; }
  function add(a, b) { return { re: a.re + b.re, im: a.im + b.im }; }
  function sub(a, b) { return { re: a.re - b.re, im: a.im - b.im }; }
  function mul(a, b) { return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }; }
  function scale(a, s) { return { re: a.re * s, im: a.im * s }; }
  function abs2(a) { return a.re * a.re + a.im * a.im; }
  function phase(a) { return Math.atan2(a.im, a.re); }
  function fromPolar(r, ph) { return { re: r * Math.cos(ph), im: r * Math.sin(ph) }; }
  return { c: c, add: add, sub: sub, mul: mul, scale: scale, abs2: abs2, phase: phase, fromPolar: fromPolar };
})();


// ============================================================
// 1. BlochSphereViz
// Shows a qubit state as a point on the Bloch sphere.
// Sliders for θ (polar) and φ (azimuth). Buttons: |0>, |1>, H, X, Y, Z.
// ============================================================
(function() {
  var h = React.createElement;
  var C = _qcComplex;

  function BlochSphereViz() {
    var _t = React.useState(Math.PI / 3), theta = _t[0], setTheta = _t[1];
    var _p = React.useState(Math.PI / 4), phi = _p[0], setPhi = _p[1];
    var _v = React.useState(0.4), viewTilt = _v[0], setViewTilt = _v[1]; // view tilt for 3D feel
    var _r = React.useState(-0.5), viewRot = _r[0], setViewRot = _r[1]; // view rotation

    var W = 420, H = 340, CX = 210, CY = 165, R = 120;

    // Qubit state from θ, φ
    var a_re = Math.cos(theta / 2);
    var b_re = Math.cos(phi) * Math.sin(theta / 2);
    var b_im = Math.sin(phi) * Math.sin(theta / 2);
    var p0 = a_re * a_re;
    var p1 = b_re * b_re + b_im * b_im;

    // 3D point on sphere, Bloch convention: x = sin θ cos φ, y = sin θ sin φ, z = cos θ
    function blochPoint() {
      return [
        Math.sin(theta) * Math.cos(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(theta)
      ];
    }

    // Project 3D to 2D with simple rotation (viewTilt around x, viewRot around z)
    function project(p) {
      var cT = Math.cos(viewTilt), sT = Math.sin(viewTilt);
      var cR = Math.cos(viewRot), sR = Math.sin(viewRot);
      // Rotate around z first (view rotation about vertical)
      var x1 = p[0] * cR - p[1] * sR;
      var y1 = p[0] * sR + p[1] * cR;
      var z1 = p[2];
      // Tilt around x
      var y2 = y1 * cT - z1 * sT;
      var z2 = y1 * sT + z1 * cT;
      // Screen coordinates: x = x1*R, y = -z2*R (y axis flipped because SVG y grows downward)
      return { x: CX + x1 * R, y: CY - z2 * R, depth: y2 };
    }

    function applyGate(gate) {
      // Apply gate to current state and update θ, φ
      var a = C.c(a_re, 0);
      var b = C.c(b_re, b_im);
      var na, nb;
      if (gate === 'H') {
        na = C.scale(C.add(a, b), 1 / Math.sqrt(2));
        nb = C.scale(C.sub(a, b), 1 / Math.sqrt(2));
      } else if (gate === 'X') {
        na = b; nb = a;
      } else if (gate === 'Y') {
        na = C.mul(C.c(0, -1), b);
        nb = C.mul(C.c(0, 1), a);
      } else if (gate === 'Z') {
        na = a; nb = C.scale(b, -1);
      } else if (gate === 'RESET0') {
        na = C.c(1, 0); nb = C.c(0, 0);
      } else if (gate === 'RESET1') {
        na = C.c(0, 0); nb = C.c(1, 0);
      } else return;

      // Recover θ, φ. Rotate away global phase from na so it's real positive.
      var ph0 = C.phase(na);
      na = C.mul(na, C.fromPolar(1, -ph0));
      nb = C.mul(nb, C.fromPolar(1, -ph0));
      // na is now real; theta/2 = acos(na.re), assuming |na| in [0,1]
      var r0 = Math.sqrt(Math.max(0, C.abs2(na)));
      var th = 2 * Math.acos(Math.min(1, r0));
      var ph = C.phase(nb);
      if (th < 1e-9) ph = 0;
      setTheta(th);
      setPhi(ph);
    }

    // Sphere geometry: circles for equator, meridian, outline
    var outline = h('circle', { cx: CX, cy: CY, r: R, fill: 'rgba(34, 211, 238, 0.03)', stroke: '#374151', strokeWidth: 1, key: 'outline' });

    // Equator (z=0 circle)
    var equatorPts = [];
    for (var i = 0; i <= 64; i++) {
      var t = (2 * Math.PI * i) / 64;
      equatorPts.push(project([Math.cos(t), Math.sin(t), 0]));
    }
    var eqFront = equatorPts.filter(function(p) { return p.depth >= 0; });
    var eqBack = equatorPts.filter(function(p) { return p.depth < 0; });
    function pointsStr(arr) { return arr.map(function(p) { return p.x.toFixed(2) + ',' + p.y.toFixed(2); }).join(' '); }
    var equatorBack = h('polyline', { points: pointsStr(eqBack), fill: 'none', stroke: '#374151', strokeWidth: 1, strokeDasharray: '3,3', key: 'eqb' });
    var equatorFront = h('polyline', { points: pointsStr(eqFront), fill: 'none', stroke: '#6b7280', strokeWidth: 1.2, key: 'eqf' });

    // Meridian (y=0 plane)
    var meridianPts = [];
    for (var i = 0; i <= 64; i++) {
      var t = (2 * Math.PI * i) / 64;
      meridianPts.push(project([Math.cos(t), 0, Math.sin(t)]));
    }
    var mFront = meridianPts.filter(function(p) { return p.depth >= 0; });
    var mBack = meridianPts.filter(function(p) { return p.depth < 0; });
    var meridianBack = h('polyline', { points: pointsStr(mBack), fill: 'none', stroke: '#374151', strokeWidth: 1, strokeDasharray: '3,3', key: 'mb' });
    var meridianFront = h('polyline', { points: pointsStr(mFront), fill: 'none', stroke: '#6b7280', strokeWidth: 1.2, key: 'mf' });

    // Axes
    var northP = project([0, 0, 1]);
    var southP = project([0, 0, -1]);
    var posXP = project([1.15, 0, 0]);
    var posYP = project([0, 1.15, 0]);
    var negXP = project([-1.15, 0, 0]);
    var negYP = project([0, -1.15, 0]);

    function axisLabel(p, text, color) {
      return h('text', { x: p.x, y: p.y, fill: color, fontSize: 12, textAnchor: 'middle', fontWeight: 600, key: 'lbl' + text }, text);
    }

    // State point
    var sp = project(blochPoint());
    var originP = { x: CX, y: CY };

    // Arrow from origin to state point
    function arrow(p1, p2, color, sw) {
      var dx = p2.x - p1.x, dy = p2.y - p1.y;
      var len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1) return null;
      var ux = dx / len, uy = dy / len;
      var hs = 10;
      return [
        h('line', { x1: p1.x, y1: p1.y, x2: p2.x - ux * hs, y2: p2.y - uy * hs, stroke: color, strokeWidth: sw || 2.5, key: 'al' }),
        h('polygon', {
          points: [
            p2.x + ',' + p2.y,
            (p2.x - ux * hs - uy * hs * 0.4) + ',' + (p2.y - uy * hs + ux * hs * 0.4),
            (p2.x - ux * hs + uy * hs * 0.4) + ',' + (p2.y - uy * hs - ux * hs * 0.4)
          ].join(' '),
          fill: color, key: 'ap'
        })
      ];
    }

    // Buttons
    var gates = ['H', 'X', 'Y', 'Z'];
    var gateButtons = gates.map(function(g) {
      return h('button', {
        key: g,
        className: 'px-3 py-1.5 text-xs font-mono rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-200 transition cursor-pointer',
        onClick: function() { applyGate(g); }
      }, g);
    });

    var resetButtons = [
      h('button', {
        key: 'r0',
        className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-gray-200 transition cursor-pointer',
        onClick: function() { applyGate('RESET0'); }
      }, '|0\u27E9'),
      h('button', {
        key: 'r1',
        className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-gray-200 transition cursor-pointer',
        onClick: function() { applyGate('RESET1'); }
      }, '|1\u27E9')
    ];

    var controls = h('div', { className: 'flex flex-wrap gap-2 mb-3 items-center', key: 'ctrl' }, [
      h('span', { className: 'text-xs text-gray-500 mr-1', key: 'l1' }, 'Setzen:'),
      resetButtons[0], resetButtons[1],
      h('span', { className: 'text-xs text-gray-500 ml-2 mr-1', key: 'l2' }, 'Gatter:'),
      gateButtons[0], gateButtons[1], gateButtons[2], gateButtons[3]
    ]);

    // Sliders
    var thetaSlider = h('div', { className: 'flex items-center gap-2 text-xs text-gray-400', key: 'ts' }, [
      h('label', { className: 'w-16 font-mono', key: 'lt' }, '\u03B8'),
      h('input', {
        type: 'range', min: 0, max: Math.PI, step: 0.01, value: theta,
        onChange: function(e) { setTheta(parseFloat(e.target.value)); },
        className: 'flex-1 accent-cyan-400', key: 'it'
      }),
      h('span', { className: 'w-16 text-right font-mono text-cyan-400', key: 'vt' }, (theta * 180 / Math.PI).toFixed(0) + '\u00B0')
    ]);
    var phiSlider = h('div', { className: 'flex items-center gap-2 text-xs text-gray-400 mt-1', key: 'ps' }, [
      h('label', { className: 'w-16 font-mono', key: 'lp' }, '\u03C6'),
      h('input', {
        type: 'range', min: -Math.PI, max: Math.PI, step: 0.01, value: phi,
        onChange: function(e) { setPhi(parseFloat(e.target.value)); },
        className: 'flex-1 accent-cyan-400', key: 'ip'
      }),
      h('span', { className: 'w-16 text-right font-mono text-cyan-400', key: 'vp' }, (phi * 180 / Math.PI).toFixed(0) + '\u00B0')
    ]);
    var viewSlider = h('div', { className: 'flex items-center gap-2 text-xs text-gray-500 mt-2', key: 'vs' }, [
      h('label', { className: 'w-16 font-mono', key: 'lv' }, 'Ansicht'),
      h('input', {
        type: 'range', min: -Math.PI, max: Math.PI, step: 0.01, value: viewRot,
        onChange: function(e) { setViewRot(parseFloat(e.target.value)); },
        className: 'flex-1 accent-gray-600', key: 'iv'
      }),
      h('span', { className: 'w-16 text-right text-gray-600', key: 'vv' }, '\u21BB')
    ]);

    // State readout (KaTeX-free, inline)
    var stateLabel = '|\u03C8\u27E9 = ' + a_re.toFixed(3) + ' |0\u27E9 + (' +
      b_re.toFixed(3) + (b_im >= 0 ? ' + ' : ' \u2212 ') + Math.abs(b_im).toFixed(3) + 'i) |1\u27E9';

    var probLabel = 'P(0) = ' + (p0 * 100).toFixed(1) + '%    P(1) = ' + (p1 * 100).toFixed(1) + '%';

    var stateReadout = h('div', { className: 'mt-3 text-xs text-gray-400 font-mono text-center', key: 'sr' }, [
      h('div', { key: 'sr1' }, stateLabel),
      h('div', { className: 'mt-1 text-gray-500', key: 'sr2' }, probLabel)
    ]);

    var svg = h('svg', {
      viewBox: '0 0 ' + W + ' ' + H,
      width: '100%', className: 'select-none',
      style: { maxWidth: W + 'px', margin: '0 auto', display: 'block' }, key: 'svg'
    }, [
      outline,
      equatorBack, meridianBack,
      // Axes (back)
      h('line', { x1: CX, y1: CY, x2: negXP.x, y2: negXP.y, stroke: '#374151', strokeWidth: 1, strokeDasharray: '2,3', key: 'ax1' }),
      h('line', { x1: CX, y1: CY, x2: negYP.x, y2: negYP.y, stroke: '#374151', strokeWidth: 1, strokeDasharray: '2,3', key: 'ax2' }),
      // Axes (front)
      h('line', { x1: CX, y1: CY, x2: posXP.x, y2: posXP.y, stroke: '#4b5563', strokeWidth: 1, key: 'ax3' }),
      h('line', { x1: CX, y1: CY, x2: posYP.x, y2: posYP.y, stroke: '#4b5563', strokeWidth: 1, key: 'ax4' }),
      h('line', { x1: CX, y1: CY, x2: northP.x, y2: northP.y, stroke: '#4b5563', strokeWidth: 1, key: 'axz1' }),
      h('line', { x1: CX, y1: CY, x2: southP.x, y2: southP.y, stroke: '#374151', strokeWidth: 1, strokeDasharray: '2,3', key: 'axz2' }),
      // Labels
      axisLabel({ x: northP.x, y: northP.y - 8 }, '|0\u27E9', '#f59e0b'),
      axisLabel({ x: southP.x, y: southP.y + 16 }, '|1\u27E9', '#f59e0b'),
      axisLabel({ x: posXP.x + 10, y: posXP.y + 4 }, 'x', '#6b7280'),
      axisLabel({ x: posYP.x + 8, y: posYP.y + 4 }, 'y', '#6b7280'),
      equatorFront, meridianFront,
      // State vector
      arrow(originP, sp, '#22d3ee', 3),
      h('circle', { cx: sp.x, cy: sp.y, r: 5, fill: '#22d3ee', stroke: '#0ea5e9', strokeWidth: 1.5, key: 'spd' }),
      h('text', { x: sp.x + 10, y: sp.y - 10, fill: '#22d3ee', fontSize: 12, fontWeight: 600, key: 'splbl' }, '|\u03C8\u27E9')
    ]);

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-5 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      controls,
      svg,
      thetaSlider, phiSlider, viewSlider,
      stateReadout
    ]);
  }

  window.BlochSphereViz = BlochSphereViz;
})();


// ============================================================
// 2. QuantumCircuitBuilder
// 2 qubits, click-to-place gates. Shows state vector amplitudes as bars.
// Gates: H, X, Z on each qubit + CNOT (2-qubit)
// ============================================================
(function() {
  var h = React.createElement;
  var C = _qcComplex;

  // 1-qubit gates as 2x2 complex matrices
  var GATE_H = [[C.c(1 / Math.sqrt(2), 0), C.c(1 / Math.sqrt(2), 0)], [C.c(1 / Math.sqrt(2), 0), C.c(-1 / Math.sqrt(2), 0)]];
  var GATE_X = [[C.c(0, 0), C.c(1, 0)], [C.c(1, 0), C.c(0, 0)]];
  var GATE_Z = [[C.c(1, 0), C.c(0, 0)], [C.c(0, 0), C.c(-1, 0)]];
  var GATE_I = [[C.c(1, 0), C.c(0, 0)], [C.c(0, 0), C.c(1, 0)]];

  function zeroState(n) {
    var dim = 1 << n;
    var s = new Array(dim);
    for (var i = 0; i < dim; i++) s[i] = C.c(0, 0);
    s[0] = C.c(1, 0);
    return s;
  }

  function applySingle(state, gate, qubit, n) {
    var dim = 1 << n;
    var out = new Array(dim);
    for (var i = 0; i < dim; i++) out[i] = C.c(0, 0);
    var mask = 1 << qubit;
    for (var i = 0; i < dim; i++) {
      var bit = (i & mask) ? 1 : 0;
      var iFlip = i ^ mask;
      var i0 = bit === 0 ? i : iFlip;
      var i1 = bit === 0 ? iFlip : i;
      // Only process each pair once (when bit == 0)
      if (bit === 0) {
        var a0 = state[i0];
        var a1 = state[i1];
        var new0 = C.add(C.mul(gate[0][0], a0), C.mul(gate[0][1], a1));
        var new1 = C.add(C.mul(gate[1][0], a0), C.mul(gate[1][1], a1));
        out[i0] = new0;
        out[i1] = new1;
      }
    }
    return out;
  }

  function applyCNOT(state, ctrl, target, n) {
    var dim = 1 << n;
    var out = new Array(dim);
    var cMask = 1 << ctrl;
    var tMask = 1 << target;
    for (var i = 0; i < dim; i++) {
      if ((i & cMask) !== 0) {
        out[i ^ tMask] = state[i];
      } else {
        out[i] = state[i];
      }
    }
    return out;
  }

  var N_QUBITS = 2;
  var N_SLOTS = 5;

  function QuantumCircuitBuilder() {
    // circuit: array of slots; each slot is an array indexed by qubit:
    // 0 => nothing, 'H','X','Z' => single-qubit gate, 'CNOT_C' => control, 'CNOT_T' => target
    var initial = [];
    for (var i = 0; i < N_SLOTS; i++) initial.push([null, null]);
    var _c = React.useState(initial), circuit = _c[0], setCircuit = _c[1];
    var _g = React.useState('H'), selectedGate = _g[0], setSelectedGate = _g[1];
    var _cnot = React.useState(null), cnotPending = _cnot[0], setCnotPending = _cnot[1];

    function placeGate(slot, qubit) {
      var copy = circuit.map(function(s) { return s.slice(); });
      if (selectedGate === 'CLEAR') {
        copy[slot][qubit] = null;
        // Also clear other half of CNOT in same slot if needed
        var other = 1 - qubit;
        if (copy[slot][other] === 'CNOT_C' || copy[slot][other] === 'CNOT_T') copy[slot][other] = null;
        setCircuit(copy);
        return;
      }
      if (selectedGate === 'CNOT') {
        // Two-stage: first click = control, second click = target (must be other qubit, same slot)
        if (cnotPending === null || cnotPending.slot !== slot) {
          // Clear slot first
          copy[slot] = [null, null];
          copy[slot][qubit] = 'CNOT_C';
          setCircuit(copy);
          setCnotPending({ slot: slot, ctrl: qubit });
        } else {
          if (qubit === cnotPending.ctrl) { setCnotPending(null); return; }
          copy[slot][qubit] = 'CNOT_T';
          setCircuit(copy);
          setCnotPending(null);
        }
        return;
      }
      // Normal single-qubit gate
      copy[slot][qubit] = selectedGate;
      setCircuit(copy);
    }

    function resetCircuit() {
      var fresh = [];
      for (var i = 0; i < N_SLOTS; i++) fresh.push([null, null]);
      setCircuit(fresh);
      setCnotPending(null);
    }

    function presetBell() {
      var p = [];
      for (var i = 0; i < N_SLOTS; i++) p.push([null, null]);
      p[0][0] = 'H';
      p[1][0] = 'CNOT_C';
      p[1][1] = 'CNOT_T';
      setCircuit(p);
      setCnotPending(null);
    }

    // Simulate
    var state = zeroState(N_QUBITS);
    for (var s = 0; s < N_SLOTS; s++) {
      var slot = circuit[s];
      // CNOT?
      var cIdx = -1, tIdx = -1;
      for (var q = 0; q < N_QUBITS; q++) {
        if (slot[q] === 'CNOT_C') cIdx = q;
        if (slot[q] === 'CNOT_T') tIdx = q;
      }
      if (cIdx >= 0 && tIdx >= 0) {
        state = applyCNOT(state, cIdx, tIdx, N_QUBITS);
        continue;
      }
      // Single-qubit gates
      for (var q = 0; q < N_QUBITS; q++) {
        var g = slot[q];
        if (g === 'H') state = applySingle(state, GATE_H, q, N_QUBITS);
        else if (g === 'X') state = applySingle(state, GATE_X, q, N_QUBITS);
        else if (g === 'Z') state = applySingle(state, GATE_Z, q, N_QUBITS);
      }
    }

    var gateSelect = ['H', 'X', 'Z', 'CNOT', 'CLEAR'].map(function(g) {
      var active = selectedGate === g;
      var cls = 'px-2.5 py-1 text-xs font-mono rounded-md border transition cursor-pointer ';
      if (g === 'CLEAR') {
        cls += active ? 'bg-red-500/20 border-red-500/50 text-red-300' : 'border-gray-700 hover:border-red-500/40 text-gray-300';
      } else if (g === 'CNOT') {
        cls += active ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'border-gray-700 hover:border-purple-500/40 text-gray-300';
      } else {
        cls += active ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'border-gray-700 hover:border-cyan-500/40 text-gray-300';
      }
      return h('button', {
        key: g, className: cls,
        onClick: function() { setSelectedGate(g); setCnotPending(null); }
      }, g);
    });

    var presets = h('div', { className: 'flex gap-2 items-center text-xs text-gray-400', key: 'presets' }, [
      h('span', { className: 'text-gray-500 mr-1', key: 'pl' }, 'Preset:'),
      h('button', {
        key: 'bell',
        className: 'px-2.5 py-1 rounded-md border border-amber-600/40 text-amber-300 hover:bg-amber-500/10 transition cursor-pointer',
        onClick: presetBell
      }, 'Bell'),
      h('button', {
        key: 'reset',
        className: 'px-2.5 py-1 rounded-md border border-gray-700 text-gray-400 hover:bg-gray-800/40 transition cursor-pointer',
        onClick: resetCircuit
      }, 'Reset')
    ]);

    // Draw circuit
    var cellW = 52, cellH = 50, padLeft = 42, padTop = 20;
    var svgW = padLeft + N_SLOTS * cellW + 20;
    var svgH = padTop + N_QUBITS * cellH + 20;

    var svgChildren = [];
    // Qubit lines
    for (var q = 0; q < N_QUBITS; q++) {
      var y = padTop + q * cellH + cellH / 2;
      svgChildren.push(h('line', {
        x1: padLeft, y1: y, x2: padLeft + N_SLOTS * cellW, y2: y,
        stroke: '#4b5563', strokeWidth: 1, key: 'ql' + q
      }));
      svgChildren.push(h('text', {
        x: padLeft - 10, y: y + 4, fill: '#94a3b8', fontSize: 12, textAnchor: 'end', fontFamily: 'monospace', key: 'qlbl' + q
      }, 'q' + q + ' |0\u27E9'));
    }

    // Gates
    for (var si = 0; si < N_SLOTS; si++) {
      var slot = circuit[si];
      var cx = padLeft + si * cellW + cellW / 2;
      var cIdx = -1, tIdx = -1;
      for (var qq = 0; qq < N_QUBITS; qq++) {
        if (slot[qq] === 'CNOT_C') cIdx = qq;
        if (slot[qq] === 'CNOT_T') tIdx = qq;
      }
      if (cIdx >= 0 && tIdx >= 0) {
        var cy1 = padTop + cIdx * cellH + cellH / 2;
        var cy2 = padTop + tIdx * cellH + cellH / 2;
        svgChildren.push(h('line', {
          x1: cx, y1: cy1, x2: cx, y2: cy2, stroke: '#a855f7', strokeWidth: 2, key: 'cnline' + si
        }));
        svgChildren.push(h('circle', { cx: cx, cy: cy1, r: 5, fill: '#a855f7', key: 'ctl' + si }));
        svgChildren.push(h('circle', { cx: cx, cy: cy2, r: 11, fill: 'none', stroke: '#a855f7', strokeWidth: 2, key: 'tgt' + si }));
        svgChildren.push(h('line', { x1: cx - 7, y1: cy2, x2: cx + 7, y2: cy2, stroke: '#a855f7', strokeWidth: 2, key: 'tgth' + si }));
        svgChildren.push(h('line', { x1: cx, y1: cy2 - 7, x2: cx, y2: cy2 + 7, stroke: '#a855f7', strokeWidth: 2, key: 'tgtv' + si }));
      }
      // Single-qubit gates
      for (var qq = 0; qq < N_QUBITS; qq++) {
        var g = slot[qq];
        if (g === 'H' || g === 'X' || g === 'Z') {
          var yy = padTop + qq * cellH + cellH / 2;
          var gcolor = g === 'H' ? '#22d3ee' : (g === 'X' ? '#f59e0b' : '#fb7185');
          svgChildren.push(h('rect', {
            x: cx - 15, y: yy - 15, width: 30, height: 30,
            fill: 'rgba(15,23,42,0.8)', stroke: gcolor, strokeWidth: 1.5, rx: 5, key: 'gr' + si + '_' + qq
          }));
          svgChildren.push(h('text', {
            x: cx, y: yy + 5, fill: gcolor, fontSize: 14, fontWeight: 700, textAnchor: 'middle', fontFamily: 'monospace', key: 'gt' + si + '_' + qq
          }, g));
        }
      }
      // Click zones
      for (var qq = 0; qq < N_QUBITS; qq++) {
        var yy = padTop + qq * cellH + cellH / 2;
        (function(slotIdx, qIdx) {
          svgChildren.push(h('rect', {
            x: cx - cellW / 2 + 4, y: yy - cellH / 2 + 4, width: cellW - 8, height: cellH - 8,
            fill: 'transparent', stroke: 'transparent', className: 'cursor-pointer',
            onClick: function() { placeGate(slotIdx, qIdx); },
            key: 'cz' + slotIdx + '_' + qIdx
          }));
        })(si, qq);
      }
    }

    // State vector bars
    var dim = 1 << N_QUBITS;
    var probs = state.map(function(a) { return C.abs2(a); });
    var basisLabels = [];
    for (var i = 0; i < dim; i++) {
      var bin = i.toString(2).padStart(N_QUBITS, '0');
      basisLabels.push('|' + bin + '\u27E9');
    }
    var bars = [];
    for (var i = 0; i < dim; i++) {
      var pct = (probs[i] * 100).toFixed(1);
      var filled = probs[i] > 0.001;
      bars.push(h('div', { key: 'b' + i, className: 'flex items-center gap-2 text-xs font-mono' }, [
        h('span', { className: 'w-14 text-gray-400', key: 'l' }, basisLabels[i]),
        h('div', { className: 'flex-1 h-4 bg-gray-800 rounded overflow-hidden', key: 'bg' },
          h('div', {
            className: filled ? 'h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300' : '',
            style: { width: pct + '%' }
          })
        ),
        h('span', { className: 'w-12 text-right text-gray-400', key: 'p' }, pct + '%')
      ]));
    }

    // Amplitude readout
    var ampStr = state.map(function(a, i) {
      var r = a.re, im = a.im;
      if (Math.abs(r) < 0.001 && Math.abs(im) < 0.001) return null;
      var part = '';
      if (Math.abs(im) < 0.001) part = r.toFixed(3);
      else if (Math.abs(r) < 0.001) part = im.toFixed(3) + 'i';
      else part = '(' + r.toFixed(3) + (im >= 0 ? '+' : '') + im.toFixed(3) + 'i)';
      return part + ' |' + i.toString(2).padStart(N_QUBITS, '0') + '\u27E9';
    }).filter(function(x) { return x; }).join(' + ');

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-5 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      h('div', { className: 'flex flex-wrap gap-2 mb-3 items-center', key: 'top' }, [
        h('span', { className: 'text-xs text-gray-500', key: 'gl' }, 'Gatter:'),
        gateSelect[0], gateSelect[1], gateSelect[2], gateSelect[3], gateSelect[4],
        h('span', { className: 'mx-2 text-gray-700', key: 'sep' }, '|'),
        presets
      ]),
      h('svg', { viewBox: '0 0 ' + svgW + ' ' + svgH, width: '100%', style: { maxWidth: svgW + 'px', margin: '0 auto', display: 'block' }, key: 'svg' }, svgChildren),
      h('p', { className: 'text-xs text-gray-500 mt-2 text-center italic', key: 'hint' },
        cnotPending !== null ? 'Jetzt Zielqubit f\u00FCr CNOT anklicken…' :
        (selectedGate === 'CNOT' ? 'CNOT: erst Steuer-Qubit anklicken, dann Ziel' :
        (selectedGate === 'CLEAR' ? 'Klicke auf ein Gatter, um es zu entfernen' :
        'W\u00E4hle ein Gatter oben und klicke auf eine Position'))
      ),
      h('div', { className: 'mt-4 text-xs font-mono text-gray-500 text-center break-all', key: 'amp' }, '|\u03C8\u27E9 = ' + (ampStr || '0')),
      h('div', { className: 'mt-3 space-y-1.5', key: 'bars' }, bars)
    ]);
  }

  window.QuantumCircuitBuilder = QuantumCircuitBuilder;
})();


// ============================================================
// 3. MeasurementSimulator
// Simulates measurements of a Bell state with animated histogram
// ============================================================
(function() {
  var h = React.createElement;

  function MeasurementSimulator() {
    var _c = React.useState([0, 0, 0, 0]), counts = _c[0], setCounts = _c[1];
    var _t = React.useState(0), total = _t[0], setTotal = _t[1];
    var _a = React.useState(false), autoRun = _a[0], setAutoRun = _a[1];
    var _s = React.useState('bell'), stateName = _s[0], setStateName = _s[1];
    var timerRef = React.useRef(null);

    // Probabilities for the chosen state:
    // Bell |Φ+> = (|00>+|11>)/sqrt 2  => P00 = P11 = 0.5
    // Product |++> = (|00>+|01>+|10>+|11>)/2 => uniform 0.25
    // Product |00> => [1,0,0,0]
    var P = stateName === 'bell' ? [0.5, 0, 0, 0.5] :
            stateName === 'plus_plus' ? [0.25, 0.25, 0.25, 0.25] :
            [1, 0, 0, 0];

    function doShots(n) {
      var c = counts.slice();
      for (var i = 0; i < n; i++) {
        var r = Math.random();
        var cum = 0;
        for (var k = 0; k < 4; k++) {
          cum += P[k];
          if (r < cum) { c[k]++; break; }
        }
      }
      setCounts(c);
      setTotal(total + n);
    }

    function reset() {
      setCounts([0, 0, 0, 0]);
      setTotal(0);
      setAutoRun(false);
    }

    React.useEffect(function() {
      if (!autoRun) { if (timerRef.current) clearInterval(timerRef.current); return; }
      timerRef.current = setInterval(function() {
        setCounts(function(prev) {
          var c = prev.slice();
          for (var i = 0; i < 20; i++) {
            var r = Math.random();
            var cum = 0;
            for (var k = 0; k < 4; k++) {
              cum += P[k];
              if (r < cum) { c[k]++; break; }
            }
          }
          return c;
        });
        setTotal(function(prev) { return prev + 20; });
      }, 100);
      return function() { if (timerRef.current) clearInterval(timerRef.current); };
    }, [autoRun, stateName]);

    // Stop auto when we reach 1000
    React.useEffect(function() {
      if (autoRun && total >= 1000) setAutoRun(false);
    }, [total, autoRun]);

    // State buttons
    var stateButtons = [
      { id: 'bell', label: 'Bell |\u03A6+\u27E9', desc: '(|00\u27E9+|11\u27E9)/\u221A2' },
      { id: 'plus_plus', label: '|++\u27E9', desc: '2 unabh. H-Gatter' },
      { id: 'zero', label: '|00\u27E9', desc: 'Nichts gemacht' }
    ].map(function(s) {
      var active = stateName === s.id;
      return h('button', {
        key: s.id,
        className: 'px-2.5 py-1.5 text-xs rounded-md border transition cursor-pointer ' +
          (active ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'border-gray-700 hover:border-cyan-500/40 text-gray-300'),
        onClick: function() { setStateName(s.id); reset(); }
      }, s.label);
    });

    var bars = [0, 1, 2, 3].map(function(i) {
      var label = '|' + i.toString(2).padStart(2, '0') + '\u27E9';
      var ct = counts[i];
      var pct = total > 0 ? (ct / total * 100) : 0;
      var expected = P[i] * 100;
      return h('div', { key: 'b' + i, className: 'flex items-center gap-2 text-xs font-mono mb-2' }, [
        h('span', { className: 'w-12 text-gray-300', key: 'l' }, label),
        h('div', { className: 'flex-1 h-6 bg-gray-800 rounded overflow-hidden relative', key: 'bg' }, [
          h('div', {
            className: 'h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-150',
            style: { width: Math.min(pct, 100) + '%' },
            key: 'fill'
          }),
          // Expected marker
          expected > 0 ? h('div', {
            className: 'absolute top-0 h-full w-0.5 bg-amber-400',
            style: { left: expected + '%' }, key: 'e'
          }) : null
        ]),
        h('span', { className: 'w-20 text-right text-gray-400', key: 'c' },
          ct + ' (' + pct.toFixed(1) + '%)')
      ]);
    });

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-5 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      h('div', { className: 'flex flex-wrap gap-2 mb-3 items-center', key: 't' }, [
        h('span', { className: 'text-xs text-gray-500 mr-1', key: 'sl' }, 'Zustand:'),
        stateButtons[0], stateButtons[1], stateButtons[2]
      ]),
      h('div', { className: 'flex flex-wrap gap-2 mb-4 items-center', key: 'b' }, [
        h('button', {
          key: '1',
          className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-200 transition cursor-pointer',
          onClick: function() { doShots(1); }
        }, '1 Messung'),
        h('button', {
          key: '10',
          className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-200 transition cursor-pointer',
          onClick: function() { doShots(10); }
        }, '10 Messungen'),
        h('button', {
          key: '100',
          className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-200 transition cursor-pointer',
          onClick: function() { doShots(100); }
        }, '100 Messungen'),
        h('button', {
          key: 'auto',
          className: 'px-3 py-1.5 text-xs rounded-lg border transition cursor-pointer ' +
            (autoRun ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : 'border-gray-700 hover:border-amber-500/50 text-gray-200'),
          onClick: function() { setAutoRun(!autoRun); }
        }, autoRun ? 'Stop' : 'Bis 1000 laufen lassen'),
        h('button', {
          key: 'r',
          className: 'px-3 py-1.5 text-xs rounded-lg border border-gray-700 hover:border-red-500/50 hover:bg-red-500/10 text-gray-400 transition cursor-pointer',
          onClick: reset
        }, 'Zur\u00FCcksetzen')
      ]),
      h('div', { key: 'bars' }, bars),
      h('p', { className: 'text-xs text-gray-500 mt-3 text-center', key: 'tot' },
        'Gesamt: ' + total + ' Messungen   \u00B7   gelbe Linie = theoretisch erwartet'),
      stateName === 'bell' && total > 50 && (counts[1] + counts[2]) === 0 ?
        h('p', { className: 'text-xs text-emerald-400 mt-2 text-center font-semibold', key: 'hint' },
          '\u2713 Nur |00\u27E9 und |11\u27E9 \u2013 das ist die Signatur der Verschr\u00E4nkung!') : null
    ]);
  }

  window.MeasurementSimulator = MeasurementSimulator;
})();


// ============================================================
// 4. QiskitPlayground
// Readonly Qiskit-like code with a "Run simulation" button
// ============================================================
(function() {
  var h = React.createElement;

  var EXAMPLES = [
    {
      id: 'bell',
      name: 'Bell-Zustand',
      code: [
        'from qiskit import QuantumCircuit',
        'from qiskit_aer import AerSimulator',
        '',
        'qc = QuantumCircuit(2, 2)',
        'qc.h(0)         # Hadamard auf Qubit 0',
        'qc.cx(0, 1)     # CNOT: Qubit 0 -> Qubit 1',
        'qc.measure([0,1], [0,1])',
        '',
        'sim = AerSimulator()',
        'result = sim.run(qc, shots=1024).result()',
        'print(result.get_counts())'
      ].join('\n'),
      expected: { '00': 0.5, '11': 0.5 }
    },
    {
      id: 'ghz',
      name: 'GHZ-Zustand (3 Qubits)',
      code: [
        'from qiskit import QuantumCircuit',
        'from qiskit_aer import AerSimulator',
        '',
        'qc = QuantumCircuit(3, 3)',
        'qc.h(0)',
        'qc.cx(0, 1)',
        'qc.cx(1, 2)',
        'qc.measure([0,1,2], [0,1,2])',
        '',
        'sim = AerSimulator()',
        'print(sim.run(qc, shots=1024).result().get_counts())'
      ].join('\n'),
      expected: { '000': 0.5, '111': 0.5 }
    },
    {
      id: 'super',
      name: 'Superposition (1 Qubit)',
      code: [
        'from qiskit import QuantumCircuit',
        'from qiskit_aer import AerSimulator',
        '',
        'qc = QuantumCircuit(1, 1)',
        'qc.h(0)         # Hadamard -> |+>',
        'qc.measure(0, 0)',
        '',
        'sim = AerSimulator()',
        'print(sim.run(qc, shots=1024).result().get_counts())'
      ].join('\n'),
      expected: { '0': 0.5, '1': 0.5 }
    }
  ];

  function QiskitPlayground() {
    var _e = React.useState(0), exIdx = _e[0], setExIdx = _e[1];
    var _r = React.useState(null), result = _r[0], setResult = _r[1];
    var _ru = React.useState(false), running = _ru[0], setRunning = _ru[1];

    var ex = EXAMPLES[exIdx];

    function simulate() {
      setRunning(true);
      setTimeout(function() {
        var counts = {};
        var keys = Object.keys(ex.expected);
        keys.forEach(function(k) { counts[k] = 0; });
        var shots = 1024;
        for (var i = 0; i < shots; i++) {
          var r = Math.random();
          var cum = 0;
          for (var k = 0; k < keys.length; k++) {
            cum += ex.expected[keys[k]];
            if (r < cum) { counts[keys[k]]++; break; }
          }
        }
        setResult({ counts: counts, shots: shots });
        setRunning(false);
      }, 500);
    }

    function selectExample(i) {
      setExIdx(i);
      setResult(null);
    }

    var ibmLink = 'https://quantum.cloud.ibm.com/';

    var tabs = EXAMPLES.map(function(e, i) {
      var active = i === exIdx;
      return h('button', {
        key: e.id,
        className: 'px-3 py-1.5 text-xs rounded-md border transition cursor-pointer ' +
          (active ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'border-gray-700 hover:border-cyan-500/40 text-gray-400'),
        onClick: function() { selectExample(i); }
      }, e.name);
    });

    var codeLines = ex.code.split('\n');
    var codeEl = h('pre', {
      className: 'bg-gray-900 border border-gray-800 rounded-lg p-4 text-xs overflow-x-auto font-mono leading-relaxed',
      style: { color: '#e2e8f0' }, key: 'code'
    }, codeLines.map(function(line, i) {
      // Simple highlighting
      var colored;
      if (line.startsWith('#') || line.indexOf('#') > 0) {
        var idx = line.indexOf('#');
        colored = [
          h('span', { key: 'c1' }, line.substring(0, idx)),
          h('span', { style: { color: '#6b7280' }, key: 'c2' }, line.substring(idx))
        ];
      } else if (line.startsWith('from') || line.startsWith('import')) {
        colored = h('span', { style: { color: '#c084fc' } }, line);
      } else if (line.startsWith('print')) {
        colored = h('span', { style: { color: '#fbbf24' } }, line);
      } else {
        colored = line || '\u00A0';
      }
      return h('div', { key: 'l' + i }, colored);
    }));

    var resultEl = null;
    if (result) {
      var keys = Object.keys(result.counts).sort();
      var maxCount = Math.max.apply(null, keys.map(function(k) { return result.counts[k]; }));
      resultEl = h('div', { className: 'mt-4 p-3 bg-gray-900/50 border border-gray-800 rounded-lg', key: 'res' }, [
        h('p', { className: 'text-xs text-emerald-400 mb-2 font-mono', key: 'rh' },
          '> ' + JSON.stringify(result.counts)),
        h('div', { className: 'space-y-1', key: 'rb' }, keys.map(function(k) {
          var ct = result.counts[k];
          var pct = (ct / result.shots * 100).toFixed(1);
          var w = (ct / maxCount * 100).toFixed(1);
          return h('div', { key: 'r' + k, className: 'flex items-center gap-2 text-xs font-mono' }, [
            h('span', { className: 'w-16 text-gray-400', key: 'l' }, '|' + k + '\u27E9'),
            h('div', { className: 'flex-1 h-4 bg-gray-800 rounded overflow-hidden', key: 'bg' },
              h('div', {
                className: 'h-full bg-gradient-to-r from-cyan-500 to-blue-500',
                style: { width: w + '%' }
              })
            ),
            h('span', { className: 'w-20 text-right text-gray-500', key: 'c' }, ct + ' (' + pct + '%)')
          ]);
        }))
      ]);
    }

    return h('div', { className: 'bg-gray-950 text-white p-3 sm:p-5 rounded-2xl max-w-2xl mx-auto border border-gray-800/50' }, [
      h('div', { className: 'flex flex-wrap gap-2 mb-3', key: 'tabs' }, tabs),
      codeEl,
      h('div', { className: 'flex flex-wrap gap-2 mt-3', key: 'btns' }, [
        h('button', {
          key: 'run',
          className: 'px-4 py-2 rounded-lg text-xs font-semibold transition ' +
            (running ? 'bg-gray-700 text-gray-400 cursor-wait' : 'bg-cyan-500 hover:bg-cyan-400 text-white cursor-pointer'),
          onClick: simulate,
          disabled: running
        }, running ? '\u25F7 L\u00E4uft...' : '\u25B6 Simulation starten (1024 Shots)'),
        h('a', {
          key: 'ibm',
          href: ibmLink, target: '_blank', rel: 'noopener',
          className: 'px-4 py-2 rounded-lg text-xs font-semibold border border-amber-500/50 text-amber-300 hover:bg-amber-500/10 transition cursor-pointer'
        }, 'Auf IBM Quantum \u00F6ffnen \u2197'),
        h('a', {
          key: 'repo',
          href: 'https://github.com/pmmathias/quantum-computing', target: '_blank', rel: 'noopener',
          className: 'px-4 py-2 rounded-lg text-xs font-semibold border border-gray-700 text-gray-300 hover:bg-gray-800/40 transition cursor-pointer'
        }, 'Notebooks \u2197')
      ]),
      resultEl
    ]);
  }

  window.QiskitPlayground = QiskitPlayground;
})();
