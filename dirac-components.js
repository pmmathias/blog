/* dirac-components.js — React-Widgets für "Vom Pfeil zum Positron" (dirac.html / en/dirac-equation.html)
 *
 * Pattern wie eigenprinzip-components.js: IIFE, React 18 global, kein JSX (h-Helper),
 * jede Komponente als window.DiracXxx, gemountet per IntersectionObserver aus der Seite.
 * Eine Datei trägt DE + EN über t(de, en) (Sprache aus <html lang>).
 *
 * Teil 1 (dieses Ticket, D-04): gemeinsame Basis
 *   - Farben, i18n, UI-Bausteine (Panel, Slider, Button, Toggle, GuessBox, Chip)
 *   - SVG-Bausteine (Arrow, Parallelogram mit Drehsinn, Grid, ziehbare Punkte)
 *   - Mathe (DiracMath): komplexe Zahlen, komplexe Matrizen, geometrische Algebra Cl(p,q)
 *   - Mini-3D: Projektion + Orbit-Drag
 * Teil 2 ff.: die Widgets (D-10 …), jeweils in eigenem Block unten.
 *
 * Konventionen: plans/dirac-konventionen.md · Begründungskette: plans/dirac-begruendungskette.md
 */
(function () {
  'use strict';

  // =========================================================================
  // MATHE — ohne React nutzbar (auch für Node-Tests: window.DiracMath)
  // =========================================================================

  // ---- komplexe Zahlen als [re, im] ----------------------------------------
  var Cx = {
    of: function (re, im) { return [re, im || 0]; },
    add: function (a, b) { return [a[0] + b[0], a[1] + b[1]]; },
    sub: function (a, b) { return [a[0] - b[0], a[1] - b[1]]; },
    mul: function (a, b) { return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]]; },
    scale: function (a, s) { return [a[0] * s, a[1] * s]; },
    conj: function (a) { return [a[0], -a[1]]; },
    abs2: function (a) { return a[0] * a[0] + a[1] * a[1]; },
    abs: function (a) { return Math.hypot(a[0], a[1]); },
    arg: function (a) { return Math.atan2(a[1], a[0]); },
    expi: function (th) { return [Math.cos(th), Math.sin(th)]; },      // e^{iθ}
    pow: function (a, n) {                                              // ganzzahlig n ≥ 0
      var r = [1, 0], b = a;
      while (n > 0) { if (n & 1) r = Cx.mul(r, b); b = Cx.mul(b, b); n >>= 1; }
      return r;
    },
    fmt: function (a, d) {
      d = d === undefined ? 2 : d;
      var re = a[0], im = a[1], eps = Math.pow(10, -d) / 2;
      if (Math.abs(im) < eps) return re.toFixed(d);
      if (Math.abs(re) < eps) return im.toFixed(d) + 'i';
      return re.toFixed(d) + (im < 0 ? ' − ' : ' + ') + Math.abs(im).toFixed(d) + 'i';
    }
  };

  // ---- komplexe Matrizen: Array von Zeilen, Einträge [re, im] --------------
  var Mx = {
    zeros: function (n, m) {
      var A = [];
      for (var i = 0; i < n; i++) { A.push([]); for (var j = 0; j < (m || n); j++) A[i].push([0, 0]); }
      return A;
    },
    eye: function (n) { var A = Mx.zeros(n); for (var i = 0; i < n; i++) A[i][i] = [1, 0]; return A; },
    fromReal: function (R) { return R.map(function (row) { return row.map(function (x) { return [x, 0]; }); }); },
    mul: function (A, B) {
      var n = A.length, m = B[0].length, k = B.length, C = Mx.zeros(n, m);
      for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) {
        var s = [0, 0];
        for (var l = 0; l < k; l++) s = Cx.add(s, Cx.mul(A[i][l], B[l][j]));
        C[i][j] = s;
      }
      return C;
    },
    add: function (A, B) { return A.map(function (r, i) { return r.map(function (x, j) { return Cx.add(x, B[i][j]); }); }); },
    scale: function (A, s) {   // s komplex [re, im]
      return A.map(function (r) { return r.map(function (x) { return Cx.mul(x, s); }); });
    },
    apply: function (A, v) {   // Matrix × Vektor (Vektor = Array von [re, im])
      return A.map(function (row) {
        var s = [0, 0];
        for (var j = 0; j < v.length; j++) s = Cx.add(s, Cx.mul(row[j], v[j]));
        return s;
      });
    },
    pow: function (A, N) {
      var R = Mx.eye(A.length), B = A;
      while (N > 0) { if (N & 1) R = Mx.mul(R, B); B = Mx.mul(B, B); N >>= 1; }
      return R;
    },
    approxEq: function (A, B, tol) {
      tol = tol || 1e-9;
      for (var i = 0; i < A.length; i++) for (var j = 0; j < A[0].length; j++)
        if (Cx.abs(Cx.sub(A[i][j], B[i][j])) > tol) return false;
      return true;
    }
  };

  // ---- Geometrische Algebra Cl(n) mit Metrik-Signatur ------------------------
  // Basisblades als Bitmasken: Bit k = e_{k+1}. Multivektor = Float64Array(2^n).
  // metric[k] = +1 oder −1 = Quadrat von e_{k+1} (Raum: +1; Raumzeit: [+1,−1,−1,−1]).
  function popcount(x) { var c = 0; while (x) { x &= x - 1; c++; } return c; }

  function reorderSign(a, b) {
    // Vorzeichen, das beim Sortieren von (blade a)(blade b) in kanonische Reihenfolge entsteht:
    // jeder Tausch zweier verschiedener Basisvektoren kostet ein Minus (Begründungskette I.6).
    a >>= 1;
    var swaps = 0;
    while (a) { swaps += popcount(a & b); a >>= 1; }
    return (swaps & 1) ? -1 : 1;
  }

  function Algebra(metric) {
    var n = metric.length, size = 1 << n;
    function bladeProduct(a, b) {
      var s = reorderSign(a, b), common = a & b;
      for (var k = 0; k < n; k++) if (common & (1 << k)) s *= metric[k];
      return { blade: a ^ b, sign: s };
    }
    var alg = {
      n: n, size: size, metric: metric,
      zero: function () { return new Float64Array(size); },
      scalar: function (x) { var m = new Float64Array(size); m[0] = x; return m; },
      vec: function (v) { var m = new Float64Array(size); for (var k = 0; k < n; k++) m[1 << k] = v[k] || 0; return m; },
      basis: function (mask, x) { var m = new Float64Array(size); m[mask] = x === undefined ? 1 : x; return m; },
      mul: function (A, B) {
        var C = new Float64Array(size);
        for (var a = 0; a < size; a++) {
          if (!A[a]) continue;
          for (var b = 0; b < size; b++) {
            if (!B[b]) continue;
            var p = bladeProduct(a, b);
            C[p.blade] += p.sign * A[a] * B[b];
          }
        }
        return C;
      },
      add: function (A, B) { var C = new Float64Array(size); for (var i = 0; i < size; i++) C[i] = A[i] + B[i]; return C; },
      sub: function (A, B) { var C = new Float64Array(size); for (var i = 0; i < size; i++) C[i] = A[i] - B[i]; return C; },
      scale: function (A, s) { var C = new Float64Array(size); for (var i = 0; i < size; i++) C[i] = A[i] * s; return C; },
      grade: function (A, g) { var C = new Float64Array(size); for (var i = 0; i < size; i++) if (popcount(i) === g) C[i] = A[i]; return C; },
      // Reverse: kehrt die Reihenfolge in jedem Blade um (für Rotoren: R̃)
      reverse: function (A) {
        var C = new Float64Array(size);
        for (var i = 0; i < size; i++) { var g = popcount(i); C[i] = ((g * (g - 1) / 2) & 1) ? -A[i] : A[i]; }
        return C;
      },
      sandwich: function (R, v) { return alg.mul(alg.mul(R, v), alg.reverse(R)); },
      vecPart: function (A) { var out = []; for (var k = 0; k < n; k++) out.push(A[1 << k]); return out; },
      bladeName: function (mask, names) {
        if (mask === 0) return '1';
        var s = '';
        for (var k = 0; k < n; k++) if (mask & (1 << k)) s += (names ? names[k] : 'e' + (k + 1));
        return s;
      },
      approxEq: function (A, B, tol) {
        tol = tol || 1e-9;
        for (var i = 0; i < size; i++) if (Math.abs(A[i] - B[i]) > tol) return false;
        return true;
      }
    };
    return alg;
  }

  var G2 = Algebra([1, 1]);           // Ebene
  var G3 = Algebra([1, 1, 1]);        // Raum
  var STA = Algebra([1, -1, -1, -1]); // Raumzeit (γ0..γ3), Metrik (+,−,−,−)

  // ---- 2D-Vektor-Helfer -----------------------------------------------------
  var V2 = {
    add: function (a, b) { return [a[0] + b[0], a[1] + b[1]]; },
    sub: function (a, b) { return [a[0] - b[0], a[1] - b[1]]; },
    scale: function (a, s) { return [a[0] * s, a[1] * s]; },
    dot: function (a, b) { return a[0] * b[0] + a[1] * b[1]; },
    wedge: function (a, b) { return a[0] * b[1] - a[1] * b[0]; },   // Koeffizient von e1e2
    len: function (a) { return Math.hypot(a[0], a[1]); },
    angle: function (a) { return Math.atan2(a[1], a[0]); },
    rot: function (a, th) { var c = Math.cos(th), s = Math.sin(th); return [c * a[0] - s * a[1], s * a[0] + c * a[1]]; }
  };

  // ---- Mini-3D: Projektion -------------------------------------------------
  // yaw um die z-Achse, pitch um die Bildschirm-x-Achse; z zeigt nach oben.
  function camera(yaw, pitch, scale, cx, cy) {
    var cyw = Math.cos(yaw), syw = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return function (p) {
      var x = cyw * p[0] - syw * p[1];
      var y = syw * p[0] + cyw * p[1];
      var z = p[2];
      var y2 = cp * y - sp * z;      // Tiefe (positiv = hinten)
      var z2 = sp * y + cp * z;      // Bildschirm-oben
      return [cx + scale * x, cy - scale * z2, y2];
    };
  }

  var DiracMath = { Cx: Cx, Mx: Mx, Algebra: Algebra, G2: G2, G3: G3, STA: STA, V2: V2, camera: camera, popcount: popcount };
  if (typeof window !== 'undefined') window.DiracMath = DiracMath;
  if (typeof module !== 'undefined' && module.exports) module.exports = DiracMath;

  if (typeof React === 'undefined' || typeof window === 'undefined') return;

  // =========================================================================
  // UI-BASIS
  // =========================================================================
  var h = React.createElement;
  var useState = React.useState;
  var useRef = React.useRef;
  var useEffect = React.useEffect;
  var useCallback = React.useCallback;

  var C = {
    bg: '#030712', panel: '#0b1220', grid: '#1f2937', gridSoft: '#111827',
    teal: '#2dd4bf', cyan: '#22d3ee', amber: '#f59e0b', blue: '#60a5fa',
    red: '#f87171', green: '#4ade80', violet: '#a78bfa',
    text: '#e2e8f0', dim: '#94a3b8', faint: '#64748b', track: '#334155'
  };

  var LANG = document.documentElement.lang === 'en' ? 'en' : 'de';
  function t(de, en) { return LANG === 'en' ? en : de; }
  function num(x, d) {   // Zahl mit Dezimalkomma im Deutschen, echtes Minuszeichen
    var s = x.toFixed(d === undefined ? 2 : d);
    if (LANG === 'de') s = s.replace('.', ',');
    return s.replace('-', '−');
  }

  function Panel(props) {
    return h('div', {
      style: Object.assign({
        background: C.panel, border: '1px solid ' + C.grid,
        borderRadius: '0.75rem', padding: '1rem 1.1rem', margin: '0 0.5rem'
      }, props.style || {})
    }, props.children);
  }

  function Title(props) {
    return h('div', { style: { fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.dim, marginBottom: '0.6rem' } }, props.children);
  }

  function Slider(props) {
    return h('div', { style: { margin: '0.6rem 0' } },
      h('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: C.dim, marginBottom: '0.25rem' } },
        h('span', null, props.label),
        h('span', { style: { color: props.color || C.cyan, fontVariantNumeric: 'tabular-nums' } }, props.display)
      ),
      h('input', {
        type: 'range', min: props.min, max: props.max, step: props.step, value: props.value,
        'aria-label': typeof props.label === 'string' ? props.label : undefined,
        onChange: function (e) { props.onChange(parseFloat(e.target.value)); },
        style: { width: '100%', accentColor: props.color || C.cyan, cursor: 'pointer', touchAction: 'pan-y' }
      })
    );
  }

  function Button(props) {
    var col = props.color || C.cyan;
    return h('button', {
      type: 'button', onClick: props.onClick, disabled: props.disabled,
      style: {
        background: props.active ? col : 'transparent', color: props.active ? C.bg : col,
        border: '1px solid ' + col, borderRadius: '0.5rem', padding: '0.4rem 0.85rem',
        fontSize: '0.82rem', cursor: props.disabled ? 'default' : 'pointer', fontWeight: 600,
        opacity: props.disabled ? 0.4 : 1, transition: 'all 0.15s', minHeight: '2.1rem'
      }
    }, props.children);
  }

  function Row(props) {
    return h('div', { style: Object.assign({ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', margin: '0.6rem 0' }, props.style || {}) }, props.children);
  }

  function Toggle(props) {   // Segment-Schalter: options = [{value, label}]
    return h(Row, null, props.options.map(function (o) {
      return h(Button, { key: o.value, active: props.value === o.value, color: props.color, onClick: function () { props.onChange(o.value); } }, o.label);
    }));
  }

  // Chip für die Begründungskette: kind = 'z' (zwingend) | 'e' (Eingabe) | 'k' (Konvention)
  var CHIP = {
    z: { col: C.green, de: 'folgt zwingend', en: 'follows necessarily' },
    e: { col: C.amber, de: 'Eingabe', en: 'input' },
    k: { col: C.faint, de: 'Konvention', en: 'convention' }
  };
  function Chip(props) {
    var c = CHIP[props.kind];
    return h('span', {
      style: {
        display: 'inline-block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.04em',
        color: c.col, border: '1px solid ' + c.col, borderRadius: '999px', padding: '0.05rem 0.5rem',
        marginRight: '0.4rem', verticalAlign: 'middle', whiteSpace: 'nowrap'
      }
    }, t(c.de, c.en));
  }

  // Erst raten, dann aufdecken. options: [{label, correct}], children = Auflösung
  function GuessBox(props) {
    var st = useState(null), pick = st[0], setPick = st[1];
    return h('div', { style: { border: '1px dashed ' + C.track, borderRadius: '0.6rem', padding: '0.75rem 0.9rem', margin: '0.6rem 0' } },
      h('div', { style: { fontSize: '0.88rem', color: C.text, marginBottom: '0.5rem' } }, props.question),
      h(Row, { style: { margin: 0 } }, props.options.map(function (o, i) {
        var col = pick === null ? C.blue : (o.correct ? C.green : (pick === i ? C.red : C.faint));
        return h(Button, { key: i, color: col, active: pick === i || (pick !== null && o.correct), onClick: function () { if (pick === null) setPick(i); } }, o.label);
      })),
      pick !== null && h('div', { style: { marginTop: '0.6rem', fontSize: '0.85rem', color: C.dim, lineHeight: 1.6 } },
        h('span', { style: { color: props.options[pick].correct ? C.green : C.amber, fontWeight: 600 } },
          props.options[pick].correct ? t('Richtig. ', 'Correct. ') : t('Nicht ganz. ', 'Not quite. ')),
        props.children)
    );
  }

  function Caption(props) {
    return h('p', { style: { fontSize: '0.78rem', color: C.dim, textAlign: 'center', marginTop: '0.6rem', lineHeight: 1.5 } }, props.children);
  }

  // =========================================================================
  // SVG-BASIS
  // =========================================================================

  // Koordinatensystem: Mathe-Koordinaten (y nach oben) ↔ SVG (y nach unten)
  function makeView(width, height, unit, ox, oy) {
    ox = ox === undefined ? width / 2 : ox;
    oy = oy === undefined ? height / 2 : oy;
    return {
      w: width, h: height, unit: unit,
      px: function (p) { return [ox + p[0] * unit, oy - p[1] * unit]; },
      math: function (sx, sy) { return [(sx - ox) / unit, (oy - sy) / unit]; }
    };
  }

  // Ziehbare Punkte: liefert onPointerDown-Handler; ruft onMove(mathPoint) während des Ziehens.
  function useDrag(svgRef, view, onMove) {
    var activeRef = useRef(false);
    var cb = useRef(onMove); cb.current = onMove;
    useEffect(function () {
      function toMath(e) {
        var svg = svgRef.current; if (!svg) return null;
        var pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        var m = svg.getScreenCTM(); if (!m) return null;
        var p = pt.matrixTransform(m.inverse());
        return view.math(p.x, p.y);
      }
      function move(e) { if (!activeRef.current) return; var p = toMath(e); if (p) { e.preventDefault(); cb.current(p); } }
      function up() { activeRef.current = false; }
      window.addEventListener('pointermove', move, { passive: false });
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
      return function () {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
      };
    }, [view.unit, view.w, view.h]);
    return function onPointerDown(e) { activeRef.current = true; e.preventDefault(); };
  }

  function Svg(props) {
    return h('svg', {
      ref: props.svgRef, viewBox: '0 0 ' + props.view.w + ' ' + props.view.h, width: '100%',
      style: { display: 'block', maxWidth: (props.maxWidth || props.view.w) + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem', touchAction: 'none', userSelect: 'none' },
      role: 'img', 'aria-label': props.label
    }, props.children);
  }

  function Grid(props) {
    var v = props.view, lines = [], k;
    var xmin = Math.ceil(v.math(0, 0)[0]), xmax = Math.floor(v.math(v.w, 0)[0]);
    var ymin = Math.ceil(v.math(0, v.h)[1]), ymax = Math.floor(v.math(0, 0)[1]);
    for (k = xmin; k <= xmax; k++) {
      var a = v.px([k, 0]);
      lines.push(h('line', { key: 'x' + k, x1: a[0], y1: 0, x2: a[0], y2: v.h, stroke: k === 0 ? C.track : C.gridSoft, strokeWidth: 1 }));
    }
    for (k = ymin; k <= ymax; k++) {
      var b = v.px([0, k]);
      lines.push(h('line', { key: 'y' + k, x1: 0, y1: b[1], x2: v.w, y2: b[1], stroke: k === 0 ? C.track : C.gridSoft, strokeWidth: 1 }));
    }
    return h('g', null, lines);
  }

  // Pfeil von from nach to (Mathe-Koordinaten)
  function Arrow(props) {
    var v = props.view, a = v.px(props.from || [0, 0]), b = v.px(props.to);
    var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    var col = props.color || C.cyan, w = props.width || 2.5;
    if (L < 1) return null;
    var ux = dx / L, uy = dy / L, hl = Math.min(12, L * 0.45), hw = hl * 0.5;
    var bx = b[0] - ux * hl, by = b[1] - uy * hl;
    return h('g', { opacity: props.opacity === undefined ? 1 : props.opacity },
      h('line', { x1: a[0], y1: a[1], x2: bx, y2: by, stroke: col, strokeWidth: w, strokeLinecap: 'round', strokeDasharray: props.dashed ? '5 4' : null }),
      h('polygon', { points: [b[0], b[1], bx - uy * hw, by + ux * hw, bx + uy * hw, by - ux * hw].join(','), fill: col }),
      props.label && h('text', {
        x: b[0] + ux * 24 + (props.labelDx || 0), y: b[1] + uy * 24 + 5 + (props.labelDy || 0),
        fill: col, fontSize: 14, fontWeight: 600, textAnchor: 'middle', fontFamily: 'Inter, sans-serif'
      }, props.label)
    );
  }

  // Containerbreite messen (für responsive viewBoxen statt reinem Skalieren)
  function useContainerWidth(fallback) {
    var ref = useRef(null);
    var st = useState(fallback || 600), w = st[0], setW = st[1];
    useEffect(function () {
      var el = ref.current; if (!el) return;
      function upd() { var cw = el.clientWidth; if (cw > 0) setW(cw); }
      upd();
      if (typeof ResizeObserver === 'undefined') { window.addEventListener('resize', upd); return function () { window.removeEventListener('resize', upd); }; }
      var ro = new ResizeObserver(upd); ro.observe(el);
      return function () { ro.disconnect(); };
    }, []);
    return [ref, w];
  }

  // Ziehgriff (sichtbarer Ring + größere unsichtbare Trefferfläche für Finger)
  function Handle(props) {
    var p = props.view.px(props.at);
    return h('g', { style: { cursor: 'grab' }, onPointerDown: props.onPointerDown },
      h('circle', { cx: p[0], cy: p[1], r: 22, fill: 'rgba(255,255,255,0.001)' }),
      h('circle', { cx: p[0], cy: p[1], r: 12, fill: 'none', stroke: props.color || C.cyan, strokeWidth: 1.5, strokeDasharray: '3 3' }));
  }

  // Orientiertes Parallelogramm u, v mit Drehsinn-Bogen (von u nach v)
  function Parallelogram(props) {
    var v = props.view, u = props.u, w = props.v, o = props.origin || [0, 0];
    var pts = [o, V2.add(o, u), V2.add(o, V2.add(u, w)), V2.add(o, w)].map(v.px);
    var area = V2.wedge(u, w);
    var col = props.color || (area >= 0 ? C.amber : C.violet);
    var arc = null;
    if (props.showOrientation !== false && Math.abs(area) > 1e-3) {
      var c = v.px(V2.add(o, V2.scale(V2.add(u, w), 0.5)));
      var r = Math.max(10, Math.min(22, Math.sqrt(Math.abs(area)) * v.unit * 0.22));
      var dir = area >= 0 ? -1 : 1;   // SVG-y ist gespiegelt: positiver Drehsinn = gegen Uhrzeiger
      var a0 = -0.2 * Math.PI, a1 = a0 + dir * 1.45 * Math.PI;
      var p0 = [c[0] + r * Math.cos(a0), c[1] + r * Math.sin(a0)];
      var p1 = [c[0] + r * Math.cos(a1), c[1] + r * Math.sin(a1)];
      var tang = [-Math.sin(a1) * dir, Math.cos(a1) * dir];
      var hs = 6;
      arc = h('g', null,
        h('path', { d: 'M' + p0[0] + ',' + p0[1] + ' A' + r + ',' + r + ' 0 1,' + (dir > 0 ? 1 : 0) + ' ' + p1[0] + ',' + p1[1], fill: 'none', stroke: col, strokeWidth: 1.8 }),
        h('polygon', {
          points: [p1[0] + tang[0] * hs, p1[1] + tang[1] * hs,
            p1[0] - tang[0] * hs * 0.3 - tang[1] * hs * 0.6, p1[1] - tang[1] * hs * 0.3 + tang[0] * hs * 0.6,
            p1[0] - tang[0] * hs * 0.3 + tang[1] * hs * 0.6, p1[1] - tang[1] * hs * 0.3 - tang[0] * hs * 0.6].join(','),
          fill: col
        }));
    }
    return h('g', null,
      h('polygon', { points: pts.map(function (p) { return p.join(','); }).join(' '), fill: col, fillOpacity: props.opacity || 0.18, stroke: col, strokeOpacity: 0.5, strokeWidth: 1 }),
      arc);
  }

  // Unendliche Gerade {p : n·p = c} im sichtbaren Bereich zeichnen
  function LevelLine(props) {
    var v = props.view, n = props.normal, c = props.value;
    var L = V2.len(n); if (L < 1e-9) return null;
    var nn = V2.scale(n, 1 / L), p0 = V2.scale(nn, c / L), d = [-nn[1], nn[0]], R = 50;
    var a = v.px(V2.add(p0, V2.scale(d, -R))), b = v.px(V2.add(p0, V2.scale(d, R)));
    return h('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: props.color || C.blue, strokeWidth: props.width || 1.5, strokeDasharray: props.dashed === false ? null : '6 5', opacity: props.opacity || 0.9 });
  }

  // Orbit-Steuerung für Mini-3D (Ziehen dreht die Kamera)
  function useOrbit(initYaw, initPitch) {
    var st = useState({ yaw: initYaw, pitch: initPitch }), cam = st[0], setCam = st[1];
    var drag = useRef(null);
    var onPointerDown = useCallback(function (e) { drag.current = { x: e.clientX, y: e.clientY, cam: cam }; }, [cam]);
    useEffect(function () {
      function move(e) {
        if (!drag.current) return;
        var d = drag.current;
        setCam({
          yaw: d.cam.yaw + (e.clientX - d.x) * 0.01,
          pitch: Math.max(-1.4, Math.min(1.4, d.cam.pitch + (e.clientY - d.y) * 0.01))
        });
      }
      function up() { drag.current = null; }
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      return function () { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
    }, []);
    return { yaw: cam.yaw, pitch: cam.pitch, onPointerDown: onPointerDown };
  }

  // Gemeinsamer Export für die Widget-Blöcke unten (und für Debugging im Browser)
  var UI = {
    h: h, C: C, t: t, num: num, LANG: LANG,
    Panel: Panel, Title: Title, Slider: Slider, Button: Button, Row: Row, Toggle: Toggle, Chip: Chip,
    GuessBox: GuessBox, Caption: Caption,
    makeView: makeView, useDrag: useDrag, useContainerWidth: useContainerWidth, Svg: Svg, Grid: Grid, Arrow: Arrow, Handle: Handle,
    Parallelogram: Parallelogram, LevelLine: LevelLine, useOrbit: useOrbit
  };
  window.DiracUI = UI;

  // =========================================================================
  // WIDGETS — werden ticketweise ergänzt (D-10 ff.)
  // =========================================================================

  // -------------------------------------------------------------------------
  // Widget 1 (D-11) · DiracProductLoss — „Was wirft das Produkt weg?"
  // Schritt 1: alle v mit gleichem u·v liegen auf einer Geraden ⟂ u.
  // Schritt 2: alle v mit gleichem u∧v liegen auf einer Geraden ∥ u.
  // Schritt 3: beide zusammen → Schnittpunkt → v eindeutig.
  // -------------------------------------------------------------------------
  function DiracProductLoss() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(600, cw[1]));
    var narrow = W < 480;
    // schmal: gleicher Mathe-Ausschnitt (ca. −2 … 7), größere Einheit relativ zur Breite
    var view = narrow ? makeView(W, Math.round(W * 0.9), W / 10.5, W * 0.27, W * 0.62) : makeView(600, 380, 46, 190, 250);
    var svgRef = useRef(null);
    var su = useState([3, 1]), u = su[0], setU = su[1];
    var sv = useState([1, 2]), v = sv[0], setV = sv[1];
    var ss = useState('dot'), step = ss[0], setStep = ss[1];

    function snap(p) {
      var q = [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
      var lim = function (x, a, b) { return Math.max(a, Math.min(b, x)); };
      var lo = view.math(20, view.h - 20), hi = view.math(view.w - 20, 20);   // im sichtbaren Bereich halten
      return [lim(q[0], lo[0], hi[0]), lim(q[1], lo[1], hi[1])];
    }
    var dragU = useDrag(svgRef, view, function (p) { var q = snap(p); if (V2.len(q) > 0.4) setU(q); });
    var dragV = useDrag(svgRef, view, function (p) { var q = snap(p); if (V2.len(q) > 0.4) setV(q); });

    var d = V2.dot(u, v), w = V2.wedge(u, v), Lu = V2.len(u);
    var uHat = V2.scale(u, 1 / Lu), perp = [-uHat[1], uHat[0]];
    var showDot = step === 'dot' || step === 'both';
    var showWedge = step === 'wedge' || step === 'both';

    // Geister: andere v mit gleichem Wert
    var ghosts = [];
    [-2.2, -1.1, 1.1, 2.2].forEach(function (s, i) {
      if (step === 'dot') ghosts.push(h(Arrow, { key: 'gd' + i, view: view, to: V2.add(v, V2.scale(perp, s)), color: C.blue, opacity: 0.35, width: 1.8 }));
      if (step === 'wedge') ghosts.push(h(Arrow, { key: 'gw' + i, view: view, to: V2.add(v, V2.scale(uHat, s)), color: C.amber, opacity: 0.35, width: 1.8 }));
    });
    // Schatten von v auf u (Skalarprodukt-Anschauung)
    var proj = V2.scale(uHat, d / Lu);
    var pv = view.px(v), pp = view.px(proj);

    var texts = {
      dot: t('Das Skalarprodukt u·v misst nur, wie weit v in Richtung u reicht (blauer Schatten). Jede Pfeilspitze auf der gestrichelten Linie liefert denselben Wert: Aus u und u·v lässt sich v nicht zurückgewinnen.',
        'The dot product u·v only measures how far v reaches along u (blue shadow). Every arrow tip on the dashed line gives the same value: from u and u·v you cannot recover v.'),
      wedge: t('Die Fläche u∧v misst, wie stark v von u wegstrebt, und in welchem Drehsinn. Auch sie allein legt v nicht fest: Scheren entlang u ändert die Fläche nicht, alle Spitzen auf der gestrichelten Linie passen.',
        'The area u∧v measures how strongly v turns away from u, and in which sense. On its own it does not pin down v either: shearing along u leaves the area unchanged; every tip on the dashed line fits.'),
      both: t('Zusammen schneiden sich die beiden Linien in genau einem Punkt: der Spitze von v. Skalarprodukt und Fläche gemeinsam verlieren nichts. Ob es ein einziges Produkt gibt, das beides enthält, und ob man es erzwingen kann, statt es zu erfinden, ist die Frage der nächsten Abschnitte.',
        'Together the two lines meet in exactly one point: the tip of v. Dot product and area together lose nothing. Whether there is a single product containing both, and whether it can be forced rather than invented, is the question of the next sections.')
    };

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Was wirft das Produkt weg?', 'Try it · What does the product throw away?')),
      h(Toggle, {
        value: step, onChange: setStep, options: [
          { value: 'dot', label: t('1 · Skalarprodukt', '1 · Dot product') },
          { value: 'wedge', label: t('2 · Fläche', '2 · Area') },
          { value: 'both', label: t('3 · Beides', '3 · Both') }
        ]
      }),
      h('div', { ref: wrapRef }, h(Svg, { svgRef: svgRef, view: view, label: t('Zwei Vektoren u und v mit Skalarprodukt und aufgespannter Fläche', 'Two vectors u and v with dot product and spanned area') },
        h(Grid, { view: view }),
        showWedge && h(Parallelogram, { view: view, u: u, v: v }),
        showDot && h('g', null,
          h('line', { x1: pv[0], y1: pv[1], x2: pp[0], y2: pp[1], stroke: C.blue, strokeWidth: 1, strokeDasharray: '2 3', opacity: 0.7 }),
          h('line', { x1: view.px([0, 0])[0], y1: view.px([0, 0])[1], x2: pp[0], y2: pp[1], stroke: C.blue, strokeWidth: 6, strokeLinecap: 'round', opacity: 0.35 })),
        showDot && h(LevelLine, { view: view, normal: u, value: d, color: C.blue }),
        showWedge && h(LevelLine, { view: view, normal: [-u[1], u[0]], value: w, color: C.amber }),
        ghosts,
        h(Arrow, { view: view, to: u, color: C.cyan, label: 'u', width: 3 }),
        h(Arrow, { view: view, to: v, color: C.teal, label: 'v', width: 3 }),
        step === 'both' && h('circle', { cx: pv[0], cy: pv[1], r: 7, fill: 'none', stroke: C.green, strokeWidth: 2.5 }),
        h(Handle, { view: view, at: u, color: C.cyan, onPointerDown: dragU }),
        h(Handle, { view: view, at: v, color: C.teal, onPointerDown: dragV })
      )),
      h('div', { style: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.4rem', marginTop: '0.7rem', fontSize: '0.9rem', fontVariantNumeric: 'tabular-nums' } },
        h('span', { style: { color: showDot ? C.blue : C.faint } }, 'u·v = ' + num(d, 1)),
        h('span', { style: { color: showWedge ? C.amber : C.faint } }, 'u∧v = ' + num(w, 1) + ' e₁e₂'),
        h('span', { style: { color: C.dim } }, 'u = (' + num(u[0], 1) + '; ' + num(u[1], 1) + ')  v = (' + num(v[0], 1) + '; ' + num(v[1], 1) + ')')
      ),
      h(Caption, null, texts[step]),
      h(Caption, null, t('Pfeilspitzen von u und v lassen sich ziehen.', 'Drag the tips of u and v.'))
    );
  }
  window.DiracProductLoss = DiracProductLoss;

  // -------------------------------------------------------------------------
  // Widget 2 (D-13) · DiracSwapPuzzle — „Tausch-Puzzle"
  // Eine Engine, mehrere Level. Regeln (Begründungskette I.6, III.6):
  //   verschiedene Nachbarn tauschen → Vorzeichen kippt (senkrecht = antikommutiert)
  //   gleiche Nachbarn verschmelzen  → ihr Quadrat (+1 oder −1)
  // -------------------------------------------------------------------------
  var SWAP_TILES = {
    e1: { label: 'e₁', sq: 1, col: C.cyan }, e2: { label: 'e₂', sq: 1, col: C.teal }, e3: { label: 'e₃', sq: 1, col: C.blue },
    g0: { label: 'γ₀', sq: 1, col: C.amber }, g1: { label: 'γ₁', sq: -1, col: C.cyan },
    g2: { label: 'γ₂', sq: -1, col: C.teal }, g3: { label: 'γ₃', sq: -1, col: C.blue }
  };
  var SWAP_LEVELS = {
    i: [{
      title: t('Die Fläche e₁e₂ mal sich selbst', 'The area e₁e₂ times itself'),
      expr: '(e₁e₂)(e₁e₂)', tiles: ['e1', 'e2', 'e1', 'e2']
    }],
    ijk: [{
      title: t('Hamiltons Regel ijk = −1, mit i = e₃e₂, j = e₁e₃, k = e₂e₁', "Hamilton's rule ijk = −1, with i = e₃e₂, j = e₁e₃, k = e₂e₁"),
      expr: 'i · j · k = (e₃e₂)(e₁e₃)(e₂e₁)', tiles: ['e3', 'e2', 'e1', 'e3', 'e2', 'e1']
    }, {
      title: t('Eine einzelne Fläche: i²', 'A single area: i²'),
      expr: 'i · i = (e₃e₂)(e₃e₂)', tiles: ['e3', 'e2', 'e3', 'e2']
    }],
    gamma: [{
      title: t('Raum-Raum-Fläche: (γ₁γ₂)²', 'Space-space area: (γ₁γ₂)²'),
      expr: '(γ₁γ₂)(γ₁γ₂)', tiles: ['g1', 'g2', 'g1', 'g2']
    }, {
      title: t('Zeit-Raum-Fläche: (γ₀γ₁)²', 'Time-space area: (γ₀γ₁)²'),
      expr: '(γ₀γ₁)(γ₀γ₁)', tiles: ['g0', 'g1', 'g0', 'g1']
    }]
  };

  function DiracSwapPuzzle(props) {
    var levels = SWAP_LEVELS[props.level] || SWAP_LEVELS.i;
    var sl = useState(0), li = sl[0], setLi = sl[1];
    var lvl = levels[li];
    var st = useState({ tiles: lvl.tiles.slice(), sign: 1, log: [] }), s = st[0], setS = st[1];
    var isGamma = props.level === 'gamma';

    function reset(i) {
      var L = levels[i === undefined ? li : i];
      setS({ tiles: L.tiles.slice(), sign: 1, log: [] });
    }
    function act(k) {
      var a = s.tiles[k], b = s.tiles[k + 1], tiles = s.tiles.slice(), sign = s.sign, msg;
      if (a === b) {
        var sq = SWAP_TILES[a].sq;
        tiles.splice(k, 2); sign *= sq;
        msg = SWAP_TILES[a].label + SWAP_TILES[a].label + ' → ' + (sq > 0 ? '+1' : '−1') + '  ' +
          (sq > 0 ? t('(Quadrat = Längenquadrat +1)', '(square = squared length +1)') : t('(Quadrat = −1)', '(square = −1)'));
      } else {
        tiles[k] = b; tiles[k + 1] = a; sign = -sign;
        msg = SWAP_TILES[a].label + SWAP_TILES[b].label + ' → −' + SWAP_TILES[b].label + SWAP_TILES[a].label + '  ' +
          t('(senkrecht: Tausch kostet ein Minus)', '(perpendicular: a swap costs a minus)');
      }
      setS({ tiles: tiles, sign: sign, log: s.log.concat([msg]) });
    }

    var done = s.tiles.length === 0;
    var tileStyle = function (name) {
      return {
        minWidth: '2.3rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '0.5rem', border: '1.5px solid ' + SWAP_TILES[name].col, color: SWAP_TILES[name].col,
        fontSize: '1.05rem', fontWeight: 600, background: 'rgba(255,255,255,0.02)'
      };
    };
    var row = [];
    s.tiles.forEach(function (name, k) {
      row.push(h('div', { key: 't' + k, style: tileStyle(name) }, SWAP_TILES[name].label));
      if (k < s.tiles.length - 1) {
        var same = s.tiles[k] === s.tiles[k + 1];
        row.push(h('button', {
          key: 'c' + k, type: 'button', onClick: function () { act(k); },
          title: same ? t('verschmelzen', 'merge') : t('tauschen', 'swap'),
          'aria-label': same ? t('verschmelzen', 'merge') : t('tauschen', 'swap'),
          style: {
            width: '1.6rem', height: '2.5rem', border: 'none', background: 'transparent', cursor: 'pointer',
            color: same ? C.green : C.dim, fontSize: same ? '1.1rem' : '0.95rem', fontWeight: 700, padding: 0
          }
        }, same ? '✕' : '⇄'));
      }
    });

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Tausch-Puzzle', 'Try it · Swap puzzle')),
      levels.length > 1 && h(Toggle, {
        value: li, onChange: function (i) { setLi(i); reset(i); },
        options: levels.map(function (L, i) { return { value: i, label: L.title }; })
      }),
      h('div', { style: { fontSize: '0.88rem', color: C.dim, margin: '0.4rem 0 0.2rem' } },
        levels.length === 1 ? lvl.title + ': ' : '', h('span', { style: { color: C.text } }, lvl.expr)),
      h('div', { style: { fontSize: '0.8rem', color: C.faint, marginBottom: '0.6rem' } },
        t('Tippe auf ⇄, um zwei verschiedene Nachbarn zu tauschen (kostet ein Minus), oder auf ✕, um zwei gleiche zu verschmelzen.',
          'Tap ⇄ to swap two different neighbours (costs a minus), or ✕ to merge two equal ones.')),
      h('div', { style: { display: 'flex', alignItems: 'center', flexWrap: 'nowrap', justifyContent: 'center', gap: '0.15rem', minHeight: '3rem', overflowX: 'auto' } },
        h('div', { style: { fontSize: '1.5rem', fontWeight: 700, color: s.sign > 0 ? C.green : C.red, width: '1.6rem', textAlign: 'center' } }, s.sign > 0 ? '+' : '−'),
        done ? h('div', { style: { fontSize: '1.5rem', fontWeight: 700, color: s.sign > 0 ? C.green : C.red } }, '1') : row
      ),
      s.log.length > 0 && h('div', { style: { fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '0.76rem', color: C.dim, margin: '0.6rem auto 0', maxWidth: '30rem', lineHeight: 1.6 } },
        s.log.slice(-4).map(function (m, i) { return h('div', { key: i }, m); })),
      done && h('div', { style: { textAlign: 'center', marginTop: '0.7rem', fontSize: '0.92rem', color: C.text } },
        h('strong', { style: { color: s.sign > 0 ? C.green : C.red } }, lvl.expr + ' = ' + (s.sign > 0 ? '+1' : '−1')),
        h('div', { style: { color: C.dim, fontSize: '0.84rem', marginTop: '0.35rem', lineHeight: 1.55 } },
          isGamma
            ? (s.sign > 0
              ? t('Eine Fläche, die Zeit und Raum verbindet, quadriert zu +1 – nicht zu −1. Das wird in Abschnitt 12 den Unterschied zwischen Kreis und Hyperbel erklären.',
                'An area joining time and space squares to +1, not −1. In section 12 this will explain the difference between circle and hyperbola.')
              : t('Eine rein räumliche Fläche quadriert wie in Akt I zu −1.', 'A purely spatial area squares to −1, as in Act I.'))
            : t('Kein Rechentrick, keine neue Regel: nur „senkrecht heißt antikommutiert" und „normiert heißt quadriert zu 1".',
              'No trick and no new rule: only "perpendicular means anticommuting" and "normalised means squares to 1".'))
      ),
      h(Row, { style: { justifyContent: 'center' } }, h(Button, { onClick: function () { reset(); }, color: C.faint }, t('Zurücksetzen', 'Reset')))
    );
  }
  window.DiracSwapPuzzle = DiracSwapPuzzle;

  // -------------------------------------------------------------------------
  // Widget 3 (D-14) · DiracQuarterTurn — „Mal e₁e₂ ist eine Vierteldrehung"
  // Rechtsmultiplikation: v · e₁e₂ dreht um +90° (gegen den Uhrzeigersinn),
  // Linksmultiplikation e₁e₂ · v um −90° (Konvention I.10). Slider: v·e^(e₁e₂θ).
  // -------------------------------------------------------------------------
  function DiracQuarterTurn() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(600, cw[1])), narrow = W < 480;
    var view = narrow ? makeView(W, Math.round(W * 0.95), W / 7.4) : makeView(600, 400, 62);
    var svgRef = useRef(null);
    var sv = useState([2, 0.8]), v0 = sv[0], setV0 = sv[1];
    var sk = useState(0), k = sk[0], setK = sk[1];           // Anzahl Rechtsmultiplikationen (mod 4)
    var sa = useState(0), anim = sa[0], setAnim = sa[1];      // laufender Animationswinkel
    var sth = useState(0), th = sth[0], setTh = sth[1];
    var sside = useState('right'), side = sside[0], setSide = sside[1];
    var rafRef = useRef(null);

    var drag = useDrag(svgRef, view, function (p) {
      var q = [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
      if (V2.len(q) > 0.3 && V2.len(q) < 3) { setV0(q); setK(0); setTh(0); }
    });

    function multiply() {
      if (rafRef.current) return;
      var dir = side === 'right' ? 1 : -1, t0 = null;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var f = Math.min(1, (ts - t0) / 450);
        var e = f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
        setAnim(dir * e * Math.PI / 2);
        if (f < 1) rafRef.current = requestAnimationFrame(step);
        else { rafRef.current = null; setAnim(0); setK(function (x) { return (x + 1) % 4; }); }
      }
      rafRef.current = requestAnimationFrame(step);
    }
    useEffect(function () { return function () { if (rafRef.current) cancelAnimationFrame(rafRef.current); }; }, []);

    var dirS = side === 'right' ? 1 : -1;
    var cur = V2.rot(v0, dirS * k * Math.PI / 2 + anim);
    var factorLabels = ['1', 'e₁e₂', '−1', '−e₁e₂'];
    // Spur der bisherigen Lagen
    var trail = [];
    for (var j = 0; j < 4; j++) {
      trail.push(h(Arrow, { key: 'tr' + j, view: view, to: V2.rot(v0, j * Math.PI / 2), color: C.faint, opacity: 0.35, width: 1.5, dashed: true }));
    }
    var thVec = V2.rot(v0, th);
    var o = view.px([0, 0]);
    var r0 = V2.len(v0) * view.unit * 0.35;

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Multiplizieren mit e₁e₂', 'Try it · Multiplying by e₁e₂')),
      h(Toggle, {
        value: side, onChange: function (x) { setSide(x); setK(0); setTh(0); }, options: [
          { value: 'right', label: t('v · e₁e₂ (von rechts)', 'v · e₁e₂ (from the right)') },
          { value: 'left', label: t('e₁e₂ · v (von links)', 'e₁e₂ · v (from the left)') }
        ]
      }),
      h('div', { ref: wrapRef }, h(Svg, { svgRef: svgRef, view: view, label: t('Ein Vektor, der durch Multiplikation mit e₁e₂ gedreht wird', 'A vector rotated by multiplying with e₁e₂') },
        h(Grid, { view: view }),
        trail,
        th !== 0 && h('path', {
          d: 'M' + (o[0] + r0 * Math.cos(-V2.angle(v0))) + ',' + (o[1] + r0 * Math.sin(-V2.angle(v0))) +
            ' A' + r0 + ',' + r0 + ' 0 ' + (Math.abs(th) > Math.PI ? 1 : 0) + ',0 ' +
            (o[0] + r0 * Math.cos(-V2.angle(thVec))) + ',' + (o[1] + r0 * Math.sin(-V2.angle(thVec))),
          fill: 'none', stroke: C.violet, strokeWidth: 1.5
        }),
        th !== 0 && h(Arrow, { view: view, to: thVec, color: C.violet, width: 2.5, label: 'θ' }),
        h(Arrow, { view: view, to: cur, color: C.cyan, width: 3, label: 'v' }),
        k === 0 && anim === 0 && th === 0 && h(Handle, { view: view, at: v0, color: C.cyan, onPointerDown: drag })
      )),
      h('div', { style: { textAlign: 'center', fontSize: '0.95rem', margin: '0.6rem 0 0.2rem', color: C.text, fontVariantNumeric: 'tabular-nums' } },
        t('bisher multipliziert mit: ', 'multiplied so far by: '),
        h('strong', { style: { color: k === 2 ? C.red : C.amber } }, factorLabels[k])),
      h(Row, { style: { justifyContent: 'center' } },
        h(Button, { onClick: multiply, color: C.amber }, side === 'right' ? t('× e₁e₂ von rechts', '× e₁e₂ from the right') : t('e₁e₂ × von links', 'e₁e₂ × from the left')),
        h(Button, { onClick: function () { setK(0); setTh(0); }, color: C.faint }, t('Zurücksetzen', 'Reset'))
      ),
      h(Slider, {
        label: t('Beliebiger Winkel: v · (cos θ + e₁e₂ sin θ)', 'Any angle: v · (cos θ + e₁e₂ sin θ)'),
        min: 0, max: 360, step: 1, value: Math.round(th * 180 / Math.PI), color: C.violet,
        display: Math.round(th * 180 / Math.PI) + '°', onChange: function (d) { setK(0); setTh(d * Math.PI / 180); }
      }),
      h(Caption, null, k === 2
        ? t('Zweimal mit e₁e₂ multipliziert: Der Pfeil zeigt in die Gegenrichtung. Das ist die Multiplikation mit −1 – zwei Vierteldrehungen ergeben eine halbe.',
          'Multiplied by e₁e₂ twice: the arrow points the opposite way. That is multiplication by −1 – two quarter turns make a half turn.')
        : side === 'right'
          ? t('Von rechts multipliziert dreht e₁e₂ jeden Vektor der Ebene um 90° gegen den Uhrzeigersinn. Die gestrichelten Pfeile zeigen die vier Lagen; nach vier Schritten ist man zurück.',
            'Multiplied from the right, e₁e₂ turns every vector in the plane by 90° anticlockwise. The dashed arrows show the four positions; after four steps you are back.')
          : t('Von links multipliziert dreht e₁e₂ im Uhrzeigersinn. Welche Seite man als „positiv" ansieht, ist eine Konvention; die Physik hängt nicht davon ab.',
            'Multiplied from the left, e₁e₂ turns clockwise. Which side counts as "positive" is a convention; the physics does not depend on it.'))
    );
  }
  window.DiracQuarterTurn = DiracQuarterTurn;

  // Kreisbogen um den Ursprung (Mathe-Winkel, gegen den Uhrzeigersinn von a0 um delta ≥ 0)
  function ArcPath(props) {
    var v = props.view, o = v.px(props.center || [0, 0]), r = props.r, a0 = props.a0, d = props.delta;
    if (Math.abs(d) < 1e-3) return null;
    if (d >= 2 * Math.PI - 1e-3) d = 2 * Math.PI - 1e-3;
    var p0 = [o[0] + r * Math.cos(a0), o[1] - r * Math.sin(a0)];
    var p1 = [o[0] + r * Math.cos(a0 + d), o[1] - r * Math.sin(a0 + d)];
    return h('path', {
      d: 'M' + p0[0] + ',' + p0[1] + ' A' + r + ',' + r + ' 0 ' + (d > Math.PI ? 1 : 0) + ',0 ' + p1[0] + ',' + p1[1],
      fill: 'none', stroke: props.color, strokeWidth: props.width || 1.6, opacity: props.opacity || 1
    });
  }

  // -------------------------------------------------------------------------
  // Widget 4 (D-15) · DiracRotor — „Zwei Spiegel ergeben eine Drehung"
  // Spiegel ⟂ m (m = e₁ fest) und ⟂ n (Winkel α). v → −m v m → −n(−m v m)n = R v R̃, R = n m.
  // Drehwinkel θ = 2α (Begründungskette I.11–I.14). Bei α = 180° ist der zweite Spiegel
  // wieder derselbe, die Drehung 360°, aber R = −1.
  // -------------------------------------------------------------------------
  function DiracRotor() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(600, cw[1])), narrow = W < 520;
    var mainW = narrow ? W : 400;
    var view = makeView(mainW, narrow ? Math.round(W * 0.85) : 360, narrow ? W / 7 : 58);
    var dial = makeView(narrow ? W : 190, narrow ? 190 : 360, 1, narrow ? W / 2 : 95, narrow ? 95 : 150);
    var svgRef = useRef(null);
    var sa = useState(40), aDeg = sa[0], setA = sa[1];
    var sv = useState([2.2, 0.9]), v = sv[0], setV = sv[1];
    var drag = useDrag(svgRef, view, function (p) {
      var q = [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
      if (V2.len(q) > 0.4 && V2.len(q) < 2.9) setV(q);
    });

    var al = aDeg * Math.PI / 180;
    var m = [1, 0], n = [Math.cos(al), Math.sin(al)];
    function reflect(x, nn) { return V2.sub(x, V2.scale(nn, 2 * V2.dot(x, nn))); }
    var v1 = reflect(v, m), v2 = reflect(v1, n);
    var rd = function (x) { return Math.abs(x) < 0.005 ? 0 : x; };
    var R0 = rd(Math.cos(al)), R2 = rd(-Math.sin(al));   // R = cos α − e₁e₂ sin α
    var full = Math.abs(aDeg - 180) < 0.5;
    var thetaDeg = 2 * aDeg;

    function mirrorLine(nn, col) {
      var d = [-nn[1], nn[0]], a = view.px(V2.scale(d, -6)), b = view.px(V2.scale(d, 6));
      return h('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: col, strokeWidth: 2, strokeDasharray: '7 5', opacity: 0.75 });
    }

    // Zifferblatt: Vektor-Drehung θ (amber) und Rotor θ/2 (violett)
    var dc = dial.px([0, 0]), dr = 70;
    function hand(angle, len, col, w) {
      return h('line', { x1: dc[0], y1: dc[1], x2: dc[0] + len * Math.cos(angle), y2: dc[1] - len * Math.sin(angle), stroke: col, strokeWidth: w, strokeLinecap: 'round' });
    }
    var dialSvg = h('svg', {
      viewBox: '0 0 ' + dial.w + ' ' + dial.h, width: '100%',
      style: { display: 'block', maxWidth: dial.w + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem' },
      role: 'img', 'aria-label': t('Zifferblatt: Drehwinkel und Rotorwinkel', 'Dial: rotation angle and rotor angle')
    },
      h('circle', { cx: dc[0], cy: dc[1], r: dr, fill: 'none', stroke: C.track }),
      h('text', { x: dc[0] + dr + 6, y: dc[1] + 4, fill: C.dim, fontSize: 12 }, '1'),
      h('text', { x: dc[0] - dr - 18, y: dc[1] + 4, fill: full ? C.red : C.dim, fontSize: 12, fontWeight: full ? 700 : 400 }, '−1'),
      hand(2 * al, dr - 4, C.amber, 3),
      hand(al, dr - 20, C.violet, 5),
      h('circle', { cx: dc[0], cy: dc[1], r: 4, fill: C.text }),
      h('text', { x: dc[0], y: dc[1] + dr + 22, fill: C.amber, fontSize: 12, textAnchor: 'middle' }, t('Vektor: θ = ', 'vector: θ = ') + thetaDeg + '°'),
      h('text', { x: dc[0], y: dc[1] - dr - 12, fill: C.violet, fontSize: 12, textAnchor: 'middle' }, t('Rotor R: θ/2 = ', 'rotor R: θ/2 = ') + aDeg + '°')
    );

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Zwei Spiegel ergeben eine Drehung', 'Try it · Two mirrors make a rotation')),
      h('div', { ref: wrapRef, style: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' } },
        h('div', { style: { flex: narrow ? '1 1 100%' : '0 0 ' + mainW + 'px' } },
          h(Svg, { svgRef: svgRef, view: view, label: t('Vektor v, an zwei Spiegeln gespiegelt', 'Vector v reflected in two mirrors') },
            h(Grid, { view: view }),
            mirrorLine(m, C.blue), mirrorLine(n, C.green),
            h(Arrow, { view: view, to: V2.scale(m, 0.9), color: C.blue, width: 2, label: 'm' }),
            h(Arrow, { view: view, to: V2.scale(n, 0.9), color: C.green, width: 2, label: 'n' }),
            h(ArcPath, { view: view, r: view.unit * 0.55, a0: 0, delta: al, color: C.violet, width: 2 }),
            h(ArcPath, { view: view, r: view.unit * 1.35, a0: V2.angle(v), delta: (2 * al) % (2 * Math.PI), color: C.amber, opacity: 0.8 }),
            h(Arrow, { view: view, to: v1, color: C.teal, width: 1.8, dashed: true, opacity: 0.6, label: "v'" }),
            h(Arrow, { view: view, to: v2, color: C.amber, width: 3, label: "v''" }),
            h(Arrow, { view: view, to: v, color: C.cyan, width: 3, label: 'v' }),
            h(Handle, { view: view, at: v, color: C.cyan, onPointerDown: drag })
          )),
        h('div', { style: { flex: narrow ? '1 1 100%' : '0 0 190px' } }, dialSvg)
      ),
      h(Slider, {
        label: t('Winkel α zwischen den Spiegeln', 'Angle α between the mirrors'), min: 0, max: 360, step: 1, value: aDeg,
        color: C.violet, display: aDeg + '°  →  ' + t('Drehung um ', 'rotation by ') + thetaDeg + '°', onChange: setA
      }),
      h(Row, { style: { justifyContent: 'center' } },
        h(Button, { color: C.violet, onClick: function () { setA((aDeg + 180) % 360); } }, t('Spiegel n um 180° weiterdrehen', 'Turn mirror n on by 180°'))),
      h('div', { style: { textAlign: 'center', fontSize: '0.92rem', color: C.text, fontVariantNumeric: 'tabular-nums', margin: '0.3rem 0' } },
        'R = n m = ', h('span', { style: { color: full ? C.red : C.violet, fontWeight: 600 } },
          num(R0, 2) + (R2 < 0 ? ' − ' : ' + ') + num(Math.abs(R2), 2) + ' e₁e₂')),
      h(Caption, null, full
        ? t('Der zweite Spiegel steht wieder genau dort, wo der erste steht, und v\'\' ist wieder v: eine volle Umdrehung. Der Rotor aber ist R = −1, nicht +1. Vektoren merken davon nichts, denn R steht in R v R̃ zweimal.',
          'The second mirror is back exactly where the first one is, and v\'\' is v again: a full turn. But the rotor is R = −1, not +1. Vectors do not notice, because R appears twice in R v R̃.')
        : t('Erst an der blauen Spiegellinie (senkrecht zu m), dann an der grünen (senkrecht zu n) gespiegelt: v\'\' ist v, gedreht um den doppelten Winkel zwischen den Spiegeln. Der Rotor R = n m läuft deshalb nur mit dem halben Drehwinkel mit.',
          'Reflected first in the blue mirror line (perpendicular to m), then in the green one (perpendicular to n): v\'\' is v turned by twice the angle between the mirrors. The rotor R = n m therefore only moves with half the rotation angle.'))
    );
  }
  window.DiracRotor = DiracRotor;

  // -------------------------------------------------------------------------
  // Widget 0 (D-10) · DiracEquationMap — „Gleichungs-Landkarte" (sticky)
  // Symbole leuchten auf, sobald der Abschnitt gelesen ist, in dem sie verdient werden
  // (data-earns="i" / "hbar,d,psi" / "gamma,m,c" an den <section>-Elementen).
  // -------------------------------------------------------------------------
  var EQ_SYMBOLS = [
    { key: 'i', sym: 'i', sec: 'i', n: 4, col: C.amber,
      de: 'das orientierte Einheitsquadrat einer Ebene. Mit ihm zu multiplizieren heißt drehen.',
      en: 'the oriented unit square of a plane. Multiplying by it means rotating.' },
    { key: 'hbar', sym: 'ħ', sec: 'drehgeschwindigkeit', n: 8, col: C.teal,
      de: 'der Umrechnungsfaktor zwischen der Drehgeschwindigkeit eines Zeigers und der Energie.',
      en: 'the conversion factor between the rotation speed of a phasor and energy.' },
    { key: 'gamma', sym: 'γ', sup: 'μ', sec: 'gleichung', n: 15, col: C.cyan,
      de: 'vier Basisvektoren der Raumzeit. Sie sind die Wurzel, die Dirac suchte.',
      en: 'four basis vectors of spacetime. They are the square root Dirac was looking for.' },
    { key: 'd', sym: '∂', sub: 'μ', sec: 'drehgeschwindigkeit', n: 8, col: C.blue,
      de: 'Ableiten nach Zeit und Ort. Es holt die Drehgeschwindigkeiten der Zeiger heraus.',
      en: 'differentiation with respect to time and space. It extracts the rotation speeds of the phasors.' },
    { key: 'm', sym: 'm', sec: 'gleichung', n: 15, col: C.violet,
      de: 'die Masse: die „Länge" des Energie-Impuls-Vektors – und im Schachbrett der Grund für jede Ecke.',
      en: 'the mass: the "length" of the energy-momentum vector – and on the checkerboard the reason for every corner.' },
    { key: 'c', sym: 'c', sec: 'gleichung', n: 15, col: C.violet,
      de: 'die Lichtgeschwindigkeit. Sie macht Zeit und Raum in denselben Einheiten messbar.',
      en: 'the speed of light. It makes time and space measurable in the same units.' },
    { key: 'psi', sym: 'ψ', sec: 'drehgeschwindigkeit', n: 8, col: C.green,
      de: 'der Zustand: eine Liste von Zeigern, beim Elektron vier davon.',
      en: 'the state: a list of phasors – four of them for the electron.' }
  ];

  function DiracEquationMap() {
    var se = useState({}), earned = se[0], setEarned = se[1];
    var so = useState(null), open = so[0], setOpen = so[1];
    var sv = useState(false), visible = sv[0], setVisible = sv[1];

    useEffect(function () {
      var secs = Array.prototype.slice.call(document.querySelectorAll('section[data-earns]'));
      function check() {
        var mid = window.innerHeight * 0.45, add = {};
        secs.forEach(function (s) {
          var r = s.getBoundingClientRect();
          if (r.bottom < mid) s.getAttribute('data-earns').split(',').forEach(function (k) { add[k.trim()] = true; });
        });
        var hero = document.getElementById('hero');
        setVisible(!hero || hero.getBoundingClientRect().bottom < 60);
        setEarned(function (prev) {
          var changed = false, next = Object.assign({}, prev);
          Object.keys(add).forEach(function (k) { if (!next[k]) { next[k] = true; changed = true; } });
          return changed ? next : prev;
        });
      }
      check();
      window.addEventListener('scroll', check, { passive: true });
      window.addEventListener('resize', check);
      return function () { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
    }, []);

    var count = EQ_SYMBOLS.filter(function (s) { return earned[s.key]; }).length;
    function symSpan(s) {
      var on = !!earned[s.key];
      return h('button', {
        key: s.key, type: 'button', onClick: function () { setOpen(open === s.key ? null : s.key); },
        'aria-label': s.sym + (on ? t(' (verdient)', ' (earned)') : t(' (noch nicht verdient)', ' (not yet earned)')),
        style: {
          background: open === s.key ? 'rgba(255,255,255,0.06)' : 'transparent', border: 'none', cursor: 'pointer', padding: '0 0.08em',
          color: on ? s.col : '#475569', textShadow: on ? '0 0 10px ' + s.col + '66' : 'none',
          fontFamily: 'KaTeX_Main, "Times New Roman", serif', fontStyle: s.key === 'hbar' || s.key === 'gamma' || s.key === 'd' || s.key === 'psi' ? 'normal' : 'italic',
          fontSize: 'inherit', transition: 'color 0.6s, text-shadow 0.6s', borderRadius: '0.25rem'
        }
      }, s.sym, s.sup && h('sup', { style: { fontSize: '0.6em' } }, s.sup), s.sub && h('sub', { style: { fontSize: '0.6em' } }, s.sub));
    }
    var bySym = {}; EQ_SYMBOLS.forEach(function (s) { bySym[s.key] = s; });
    var plain = function (x) { return h('span', { style: { color: C.dim, fontFamily: 'KaTeX_Main, "Times New Roman", serif' } }, x); };
    var cur = open && bySym[open];

    return h('div', {
      style: {
        opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.3s',
        background: 'rgba(3,7,18,0.88)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        borderBottom: '1px solid ' + C.grid, padding: '0.35rem 0.5rem', display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center', gap: '0.75rem'
      }
    },
      h('div', { style: { fontSize: '1.35rem', whiteSpace: 'nowrap', lineHeight: 1.4 } },
        plain('('), symSpan(bySym.i), symSpan(bySym.hbar), symSpan(bySym.gamma), symSpan(bySym.d), plain(' − '),
        symSpan(bySym.m), symSpan(bySym.c), plain(')'), symSpan(bySym.psi), plain(' = 0')),
      h('div', { style: { fontSize: '0.72rem', color: C.faint, whiteSpace: 'nowrap' } },
        count + ' / 7 ' + t('Symbole verdient', 'symbols earned')),
      cur && h('div', { style: { flexBasis: '100%', textAlign: 'center', fontSize: '0.82rem', color: C.dim, lineHeight: 1.5, padding: '0.2rem 0.5rem 0.3rem' } },
        h('strong', { style: { color: earned[cur.key] ? cur.col : C.text } }, cur.sym + (cur.sup || '') + (cur.sub ? '_' + cur.sub : '') + ': '),
        earned[cur.key]
          ? t(cur.de, cur.en) + ' '
          : t('Noch nicht verdient. ', 'Not yet earned. '),
        h('a', { href: '#' + cur.sec, style: { color: C.cyan }, onClick: function () { setOpen(null); } },
          (earned[cur.key] ? t('Verdient in Abschnitt ', 'Earned in section ') : t('Kommt in Abschnitt ', 'Comes in section ')) + cur.n))
    );
  }
  window.DiracEquationMap = DiracEquationMap;

  // -------------------------------------------------------------------------
  // Hilfen für Akt II: Zeiger zeichnen, Ansicht an Punktmenge anpassen, Matrix-Exponential
  // -------------------------------------------------------------------------
  function fitView(points, W, H, pad) {   // points: Array von [x, y] (Mathe), liefert makeView
    var xs = points.map(function (p) { return p[0]; }), ys = points.map(function (p) { return p[1]; });
    var x0 = Math.min.apply(null, xs.concat([0])), x1 = Math.max.apply(null, xs.concat([0]));
    var y0 = Math.min.apply(null, ys.concat([0])), y1 = Math.max.apply(null, ys.concat([0]));
    var span = Math.max(x1 - x0, y1 - y0, 0.4);
    var unit = (Math.min(W, H) - 2 * pad) / span;
    var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    return makeView(W, H, unit, W / 2 - cx * unit, H / 2 + cy * unit);
  }
  function expmC(A) {   // komplexe Matrix-Exponentialfunktion per Taylor-Reihe (kleine Matrizen)
    var n = A.length, R = Mx.eye(n), T = Mx.eye(n);
    for (var k = 1; k < 40; k++) { T = Mx.scale(Mx.mul(T, A), [1 / k, 0]); R = Mx.add(R, T); }
    return R;
  }

  // -------------------------------------------------------------------------
  // Widget 5 (D-20) · DiracPlaneWave — „Ebene Welle als Zeigerreihe"
  // ψ(x,t) = e^{i(kx − ωt)} mit ω = E/ħ, k = p/ħ (ħ = 1). ∂ₜψ = −iω ψ, ∂ₓψ = ik ψ.
  // -------------------------------------------------------------------------
  function DiracPlaneWave() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(640, cw[1]));
    var nArrows = W < 480 ? 11 : 15;
    var se = useState(1.2), E = se[0], setE = se[1];
    var sp = useState(0.9), p = sp[0], setP = sp[1];
    var sd = useState('none'), deriv = sd[0], setDeriv = sd[1];
    var sr = useState(true), run = sr[0], setRun = sr[1];
    var st = useState(0), tt = st[0], setT = st[1];
    var rafRef = useRef(null), runRef = useRef(run); runRef.current = run;

    useEffect(function () {
      var last = null;
      function loop(ts) {
        if (last !== null && runRef.current) { var dt = Math.min(0.05, (ts - last) / 1000); setT(function (x) { return x + dt; }); }
        last = ts; rafRef.current = requestAnimationFrame(loop);
      }
      rafRef.current = requestAnimationFrame(loop);
      return function () { cancelAnimationFrame(rafRef.current); };
    }, []);

    var rowH = 92, H = deriv === 'none' ? rowH + 30 : 2 * rowH + 44;
    var gap = (W - 40) / (nArrows - 1), L = Math.min(34, gap * 0.9);
    var xs = []; for (var j = 0; j < nArrows; j++) xs.push(j * 0.8);   // Orte (Mathe-Einheiten)

    function arrowAt(cx, cy, ang, len, col, key, op) {
      var ex = cx + len * Math.cos(ang), ey = cy - len * Math.sin(ang);
      var hl = Math.min(8, len * 0.4), ux = Math.cos(ang), uy = -Math.sin(ang);
      var bx = ex - ux * hl, by = ey - uy * hl, hw = hl * 0.55;
      return h('g', { key: key, opacity: op === undefined ? 1 : op },
        h('circle', { cx: cx, cy: cy, r: L * 1.0, fill: 'none', stroke: C.gridSoft }),
        len > 1 && h('line', { x1: cx, y1: cy, x2: bx, y2: by, stroke: col, strokeWidth: 2.2, strokeLinecap: 'round' }),
        len > 1 && h('polygon', { points: [ex, ey, bx - uy * hw, by + ux * hw, bx + uy * hw, by - ux * hw].join(','), fill: col }));
    }
    var omega = E, k = p, rows = [];
    var maxRate = 2.0;
    xs.forEach(function (x, j) {
      var ang = k * x - omega * tt, cx = 20 + j * gap;
      rows.push(arrowAt(cx, rowH / 2 + 10, ang, L * 0.95, C.cyan, 'a' + j));
      if (deriv !== 'none') {
        var rate = deriv === 't' ? omega : k;
        var dang = ang + (deriv === 't' ? -Math.PI / 2 : Math.PI / 2);   // −i bzw. +i
        rows.push(arrowAt(cx, rowH + 34 + rowH / 2, dang, L * 0.95 * Math.min(1.4, rate / maxRate * 1.4), deriv === 't' ? C.amber : C.violet, 'd' + j));
      }
    });
    // Markierung: ein fester Ort (Zeitverlauf) – mittlerer Zeiger
    var mid = Math.floor(nArrows / 2), mcx = 20 + mid * gap;

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Ein Zustand mit fester Energie und festem Impuls', 'Try it · A state with fixed energy and momentum')),
      h('div', { ref: wrapRef }, h('svg', {
        viewBox: '0 0 ' + W + ' ' + H, width: '100%',
        style: { display: 'block', maxWidth: W + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem' },
        role: 'img', 'aria-label': t('Reihe von Zeigern entlang des Ortes', 'Row of phasors along space')
      },
        h('rect', { x: mcx - L - 4, y: 10 + rowH / 2 - L - 4, width: 2 * L + 8, height: 2 * L + 8, fill: 'none', stroke: C.green, strokeDasharray: '3 3', rx: 6 }),
        h('text', { x: 8, y: 16, fill: C.dim, fontSize: 12 }, 'ψ(x, t)'),
        h('text', { x: W - 8, y: rowH + 24, fill: C.faint, fontSize: 11, textAnchor: 'end' }, t('Ort x →', 'position x →')),
        deriv !== 'none' && h('text', { x: 8, y: rowH + 50, fill: deriv === 't' ? C.amber : C.violet, fontSize: 12 },
          deriv === 't' ? '∂ψ/∂t' : '∂ψ/∂x'),
        rows)),
      h(Row, null,
        h(Button, { onClick: function () { setRun(!run); }, color: C.faint }, run ? t('Anhalten', 'Pause') : t('Abspielen', 'Play')),
        h(Toggle, {
          value: deriv, onChange: setDeriv, options: [
            { value: 'none', label: t('nur ψ', 'ψ only') },
            { value: 't', label: t('nach der Zeit ableiten', 'differentiate in time') },
            { value: 'x', label: t('nach dem Ort ableiten', 'differentiate in space') }
          ]
        })),
      h(Slider, { label: t('Energie E (Drehgeschwindigkeit in der Zeit)', 'Energy E (rotation speed in time)'), min: 0, max: 2, step: 0.05, value: E, color: C.amber, display: 'E/ħ = ' + num(E, 2), onChange: setE }),
      h(Slider, { label: t('Impuls p (Drehgeschwindigkeit entlang des Ortes)', 'Momentum p (rotation speed along space)'), min: -2, max: 2, step: 0.05, value: p, color: C.violet, display: 'p/ħ = ' + num(p, 2), onChange: setP }),
      h(Caption, null, deriv === 't'
        ? t('Die Zeitableitung ist an jedem Ort derselbe Zeiger, um 90° im Uhrzeigersinn gedreht und mit E/ħ gestreckt: ∂ψ/∂t = −i(E/ħ)ψ, also iħ ∂ψ/∂t = E ψ.',
          'The time derivative is, at every position, the same phasor turned by 90° clockwise and stretched by E/ħ: ∂ψ/∂t = −i(E/ħ)ψ, hence iħ ∂ψ/∂t = E ψ.')
        : deriv === 'x'
          ? t('Die Ortsableitung ist an jedem Ort derselbe Zeiger, um 90° gegen den Uhrzeigersinn gedreht und mit p/ħ gestreckt: ∂ψ/∂x = i(p/ħ)ψ, also −iħ ∂ψ/∂x = p ψ.',
            'The space derivative is, at every position, the same phasor turned by 90° anticlockwise and stretched by p/ħ: ∂ψ/∂x = i(p/ħ)ψ, hence −iħ ∂ψ/∂x = p ψ.')
          : t('Jeder Zeiger dreht sich in der Zeit mit E/ħ (grün markiert: ein fester Ort). Zu einem festen Zeitpunkt sind die Zeiger entlang des Ortes um p/ħ pro Längeneinheit gegeneinander verdreht.',
            'Every phasor turns in time at E/ħ (green: one fixed position). At a fixed instant the phasors along space are twisted against each other by p/ħ per unit length.'))
    );
  }
  window.DiracPlaneWave = DiracPlaneWave;

  // -------------------------------------------------------------------------
  // Widget 6 (D-21) · DiracPathSum — „Matrix = Summe über alle Wege"
  // Modus A: 3 Zustände, U = exp(−i·0,7·H). (U^N)_{ij} = Σ über Ketten j→…→i.
  // Modus B: zwei Mulden, U = [[cos φ, −i sin φ], [−i sin φ, cos φ]]: Pfadweg vs. Eigenwertweg.
  // -------------------------------------------------------------------------
  var PS_U = (function () {
    var H = Mx.fromReal([[0.3, 1, 0], [1, 0, 1], [0, 1, -0.2]]);
    return expmC(Mx.scale(H, [0, -0.7]));
  })();

  function ComplexPanel(props) {   // kleines Feld der komplexen Ebene mit Pfeilen
    var arrows = props.arrows, pts = [];
    arrows.forEach(function (a) { pts.push(a.from || [0, 0]); pts.push(a.to); });
    var view = props.view || fitView(pts, props.w, props.h, 26);
    return h('svg', {
      viewBox: '0 0 ' + props.w + ' ' + props.h, width: '100%',
      style: { display: 'block', maxWidth: props.w + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem' },
      role: 'img', 'aria-label': props.label
    },
      h('line', { x1: 0, y1: view.px([0, 0])[1], x2: props.w, y2: view.px([0, 0])[1], stroke: C.gridSoft }),
      h('line', { x1: view.px([0, 0])[0], y1: 0, x2: view.px([0, 0])[0], y2: props.h, stroke: C.gridSoft }),
      arrows.map(function (a, i) { return h(Arrow, { key: i, view: view, from: a.from, to: a.to, color: a.color, width: a.width || 2, opacity: a.opacity, dashed: a.dashed, label: a.label }); }),
      props.children && props.children(view));
  }

  function DiracPathSum(props) {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(640, cw[1])), narrow = W < 520;
    var sm = useState((props && props.initialMode) || 'three'), mode = sm[0], setMode = sm[1];
    // ---- Modus A
    var sn = useState(3), N = sn[0], setN = sn[1];
    var sk = useState(0), kk = sk[0], setK = sk[1];
    var start = 0, end = 2;
    var paths = [];
    (function enumerate(prefix) {
      if (prefix.length === N) { paths.push(prefix.concat([end])); return; }
      for (var s = 0; s < 3; s++) enumerate(prefix.concat([s]));
    })([start]);
    // prefix enthält Start + N−1 Zwischenstationen; letzte Station = end
    paths = paths.map(function (ch) {
      var amp = [1, 0];
      for (var q = 0; q < ch.length - 1; q++) amp = Cx.mul(amp, PS_U[ch[q + 1]][ch[q]]);
      return { chain: ch, amp: amp };
    });
    var shown = Math.min(kk, paths.length);
    var chainArrows = [], acc = [0, 0];
    for (var q = 0; q < shown; q++) {
      var nxt = Cx.add(acc, paths[q].amp);
      chainArrows.push({ from: acc, to: nxt, color: q === shown - 1 ? C.amber : C.teal, width: q === shown - 1 ? 2.5 : 1.6, opacity: q === shown - 1 ? 1 : 0.7 });
      acc = nxt;
    }
    var target = Mx.pow(PS_U, N)[end][start];
    var allPts = [[0, 0], target];
    (function () { var a = [0, 0]; paths.forEach(function (pp) { a = Cx.add(a, pp.amp); allPts.push(a); }); })();
    var sumView = fitView(allPts, narrow ? W : 300, 260, 24);

    // Gitter (Trellis): Zustände 1–3 über Zeitschritte 0…N
    var tw = narrow ? W : 300, th = 200;
    function tPos(step, state) { return [26 + step * (tw - 52) / N, th - 30 - state * (th - 60) / 2]; }
    var trellis = [];
    for (var s0 = 0; s0 < N; s0++) for (var a1 = 0; a1 < 3; a1++) for (var b1 = 0; b1 < 3; b1++) {
      var P0 = tPos(s0, a1), P1 = tPos(s0 + 1, b1);
      trellis.push(h('line', { key: 'g' + s0 + a1 + b1, x1: P0[0], y1: P0[1], x2: P1[0], y2: P1[1], stroke: C.gridSoft, strokeWidth: 1 }));
    }
    var hi = shown > 0 ? paths[shown - 1].chain : null;
    if (hi) for (var s1 = 0; s1 < hi.length - 1; s1++) {
      var A0 = tPos(s1, hi[s1]), A1 = tPos(s1 + 1, hi[s1 + 1]);
      trellis.push(h('line', { key: 'h' + s1, x1: A0[0], y1: A0[1], x2: A1[0], y2: A1[1], stroke: C.amber, strokeWidth: 3, strokeLinecap: 'round' }));
    }
    for (var s2 = 0; s2 <= N; s2++) for (var a2 = 0; a2 < 3; a2++) {
      var Pp = tPos(s2, a2);
      trellis.push(h('circle', { key: 'n' + s2 + a2, cx: Pp[0], cy: Pp[1], r: 4.5, fill: (s2 === 0 && a2 === start) || (s2 === N && a2 === end) ? C.cyan : C.track }));
    }
    for (var a3 = 0; a3 < 3; a3++) trellis.push(h('text', { key: 'l' + a3, x: 4, y: tPos(0, a3)[1] + 4, fill: C.faint, fontSize: 11 }, String(a3 + 1)));

    // ---- Modus B
    var sphi = useState(12), phiDeg = sphi[0], setPhi = sphi[1];
    var sN2 = useState(6), N2 = sN2[0], setN2 = sN2[1];
    var phi = phiDeg * Math.PI / 180, a = [Math.cos(phi), 0], b = [0, -Math.sin(phi)];
    var termArrows = [], acc2 = [0, 0], binomPts = [[0, 0]], row = 0, dy = 0.22;
    for (var kj = 0; kj <= N2; kj += 2) {
      var coef = 1; for (var r = 0; r < kj; r++) coef = coef * (N2 - r) / (r + 1);
      var term = Cx.scale(Cx.mul(Cx.pow(a, N2 - kj), Cx.pow(b, kj)), coef);
      var nx2 = Cx.add(acc2, term);
      // Wasserfall: jeder Term eine Zeile tiefer (die Terme sind hier reell und lägen sonst übereinander)
      var y0 = -row * dy;
      termArrows.push({ from: [acc2[0], acc2[1] + y0], to: [nx2[0], nx2[1] + y0], color: C.teal, width: 2, label: N2 <= 8 ? 'k=' + kj : null });
      binomPts.push([acc2[0], y0], [nx2[0], nx2[1] + y0]);
      acc2 = nx2; row++;
    }
    var yRes = -row * dy - 0.1;
    termArrows.push({ from: [0, yRes], to: [acc2[0], acc2[1] + yRes], color: C.green, width: 3, label: 'ψ₁' });
    binomPts.push([0, yRes], [acc2[0], yRes]);
    var ePlus = Cx.scale(Cx.pow(Cx.add(a, b), N2), 0.5), eMinus = Cx.scale(Cx.pow(Cx.sub(a, b), N2), 0.5);
    var eigArrows = [
      { from: [0, 0], to: ePlus, color: C.violet, width: 2.2, label: '½(a+b)ᴺ' },
      { from: ePlus, to: Cx.add(ePlus, eMinus), color: C.blue, width: 2.2, label: '½(a−b)ᴺ' },
      { from: [0, 0], to: Cx.add(ePlus, eMinus), color: C.green, width: 3, dashed: true, label: 'ψ₁' }
    ];
    var pw = narrow ? W : 300;
    var pv0 = fitView(binomPts.concat([[-1, 0], [1, 0]]), pw, 240, 30);
    var ev0 = fitView([[0, 0], ePlus, Cx.add(ePlus, eMinus), [1, 0], [-1, 0], [0, 0.6], [0, -0.6]], pw, 240, 30);
    var uC = Math.min(pv0.unit, ev0.unit);   // gleicher Maßstab in beiden Feldern
    var yTop = Math.max.apply(null, binomPts.map(function (q) { return q[1]; })), yBot = Math.min.apply(null, binomPts.map(function (q) { return q[1]; }));
    var pathView = makeView(pw, 240, uC, pw / 2, 120 + (yTop + yBot) / 2 * uC);
    var eigView = makeView(pw, 240, uC, pw / 2, 120);
    var amp1 = acc2;
    // Pendel-Plot
    var plotW = W, plotH = 110, NMAX = 40, pts2 = [];
    for (var nn = 0; nn <= NMAX; nn++) pts2.push([20 + nn * (plotW - 40) / NMAX, plotH - 20 - Math.pow(Math.sin(nn * phi), 2) * (plotH - 40)]);

    var modeToggle = h(Toggle, {
      value: mode, onChange: setMode, options: [
        { value: 'three', label: t('A · Drei Orte, alle Wege', 'A · Three places, all paths') },
        { value: 'two', label: t('B · Zwei Mulden, zwei Rechenwege', 'B · Two wells, two methods') }
      ]
    });

    if (mode === 'three') {
      return h(Panel, null,
        h(Title, null, t('Ausprobieren · Matrixmultiplikation ist Summieren über Wege', 'Try it · Matrix multiplication is summing over paths')),
        modeToggle,
        h('div', { ref: wrapRef, style: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' } },
          h('div', { style: { flex: narrow ? '1 1 100%' : '0 0 300px' } },
            h('svg', { viewBox: '0 0 ' + tw + ' ' + th, width: '100%', style: { display: 'block', maxWidth: tw + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem' }, role: 'img', 'aria-label': t('Alle Wege von Ort 1 nach Ort 3', 'All paths from place 1 to place 3') },
              trellis,
              h('text', { x: tw / 2, y: th - 8, fill: C.faint, fontSize: 11, textAnchor: 'middle' }, t('Zeitschritte 0 … ', 'time steps 0 … ') + N))),
          h('div', { style: { flex: narrow ? '1 1 100%' : '0 0 300px' } },
            h(ComplexPanel, {
              w: narrow ? W : 300, h: 260, view: sumView, label: t('Zeiger der Wege, aneinandergehängt', 'Phasors of the paths, chained'),
              arrows: [{ from: [0, 0], to: target, color: C.green, width: 2, dashed: true, label: '(Uᴺ)₃₁' }].concat(chainArrows)
            }))),
        h(Slider, { label: t('Anzahl Zeitschritte N', 'Number of time steps N'), min: 1, max: 4, step: 1, value: N, display: 'N = ' + N + ' · ' + paths.length + t(' Wege', ' paths'), onChange: function (x) { setN(x); setK(0); } }),
        h(Slider, { label: t('Wege aufaddiert', 'Paths added'), min: 0, max: paths.length, step: 1, value: shown, color: C.amber, display: shown + ' / ' + paths.length, onChange: setK }),
        h(Row, { style: { justifyContent: 'center' } },
          h(Button, { onClick: function () { setK(paths.length); }, color: C.amber }, t('Alle Wege addieren', 'Add all paths'))),
        h(Caption, null, shown === paths.length
          ? t('Alle ' + paths.length + ' Wege von Ort 1 nach Ort 3 sind addiert. Die Spitze der Kette trifft genau den gestrichelten Zeiger: den Eintrag (Uᴺ)₃₁ der Matrixpotenz.',
            'All ' + paths.length + ' paths from place 1 to place 3 have been added. The tip of the chain lands exactly on the dashed phasor: the entry (Uᴺ)₃₁ of the matrix power.')
          : t('Links ist ein Weg durch die Zustände hervorgehoben. Sein Zeiger ist das Produkt der Übergangszeiger entlang des Weges; rechts werden die Zeiger aller Wege Kopf an Schwanz aneinandergehängt.',
            'On the left one path through the states is highlighted. Its phasor is the product of the transition phasors along the path; on the right the phasors of all paths are chained head to tail.'))
      );
    }

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Zwei Mulden: Wege zählen oder diagonalisieren', 'Try it · Two wells: count paths or diagonalise')),
      modeToggle,
      h('div', { ref: wrapRef, style: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' } },
        h('div', { style: { flex: narrow ? '1 1 100%' : '0 0 300px' } },
          h('div', { style: { fontSize: '0.78rem', color: C.teal, textAlign: 'center', marginBottom: '0.3rem' } }, t('Pfadweg: Σ über gerade k von C(N,k) aᴺ⁻ᵏ bᵏ', 'Path way: Σ over even k of C(N,k) aᴺ⁻ᵏ bᵏ')),
          h(ComplexPanel, { w: pw, h: 240, view: pathView, arrows: termArrows, label: t('Summe der Pfadklassen', 'Sum of path classes') })),
        h('div', { style: { flex: narrow ? '1 1 100%' : '0 0 300px' } },
          h('div', { style: { fontSize: '0.78rem', color: C.violet, textAlign: 'center', marginBottom: '0.3rem' } }, t('Eigenwertweg: ½(a+b)ᴺ + ½(a−b)ᴺ', 'Eigenvalue way: ½(a+b)ᴺ + ½(a−b)ᴺ')),
          h(ComplexPanel, { w: pw, h: 240, view: eigView, arrows: eigArrows, label: t('Summe der Eigenanteile', 'Sum of eigen-parts') }))),
      h('div', { style: { textAlign: 'center', fontSize: '0.88rem', color: C.text, margin: '0.5rem 0', fontVariantNumeric: 'tabular-nums' } },
        t('Amplitude in Mulde 1: ', 'Amplitude in well 1: '), h('strong', { style: { color: C.green } }, Cx.fmt(amp1, 3).replace('.', LANG === 'de' ? ',' : '.')),
        '   ·   P(' + t('Mulde 2', 'well 2') + ') = sin²(Nφ) = ', h('strong', { style: { color: C.amber } }, num(Math.pow(Math.sin(N2 * phi), 2), 3))),
      h('svg', { viewBox: '0 0 ' + plotW + ' ' + plotH, width: '100%', style: { display: 'block', maxWidth: plotW + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem' }, role: 'img', 'aria-label': t('Aufenthaltswahrscheinlichkeit in Mulde 2 über die Zeitschritte', 'Probability of being in well 2 over the time steps') },
        h('polyline', { points: pts2.map(function (q) { return q.join(','); }).join(' '), fill: 'none', stroke: C.amber, strokeWidth: 1.8 }),
        h('circle', { cx: pts2[Math.min(N2, NMAX)][0], cy: pts2[Math.min(N2, NMAX)][1], r: 5, fill: C.amber }),
        h('text', { x: 20, y: 14, fill: C.dim, fontSize: 11 }, t('Wahrscheinlichkeit für Mulde 2 nach N Schritten', 'Probability for well 2 after N steps')),
        h('text', { x: plotW - 20, y: plotH - 4, fill: C.faint, fontSize: 11, textAnchor: 'end' }, 'N = 0 … ' + NMAX)),
      h(Slider, { label: t('Sprungwinkel φ (a = cos φ, b = −i sin φ)', 'Hopping angle φ (a = cos φ, b = −i sin φ)'), min: 1, max: 45, step: 1, value: phiDeg, display: 'φ = ' + phiDeg + '°', onChange: setPhi }),
      h(Slider, { label: t('Anzahl Zeitschritte N', 'Number of time steps N'), min: 0, max: 20, step: 1, value: N2, color: C.amber, display: 'N = ' + N2, onChange: setN2 }),
      h(Caption, null, t('Links werden die Wege nach der Zahl k ihrer Sprünge gruppiert und Term für Term addiert (jeder Term eine Zeile tiefer), rechts nur zwei Eigenanteile. Der grüne Pfeil ψ₁ ist in beiden Feldern derselbe – für jedes φ und jedes N.',
        'On the left the paths are grouped by their number k of jumps and added term by term (each term one row lower); on the right just two eigen-parts. The green arrow ψ₁ is the same in both panels – for every φ and every N.'))
    );
  }
  window.DiracPathSum = DiracPathSum;

  // -------------------------------------------------------------------------
  // Widget 7 (D-30) · DiracSpacetime — „Karte drehen / Raumzeit kippen"
  // Ein fester Punkt, beschrieben von gedrehten bzw. bewegten Beobachtern.
  // Karte: Koordinaten wandern auf einem Kreis (x² + y² bleibt).
  // Raumzeit: Koordinaten wandern auf einer Hyperbel ((ct)² − x² bleibt).
  // Energie: Zustand eines Teilchens wandert auf E² − p²c² = m²c⁴.
  // -------------------------------------------------------------------------
  function DiracSpacetime() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(560, cw[1]));
    var view = makeView(W, Math.round(W * 0.78), W / 8.2, W / 2, W * 0.78 * 0.62);
    var sm = useState('map'), mode = sm[0], setMode = sm[1];
    var sa = useState(0), par = sa[0], setPar = sa[1];   // Drehwinkel (Grad) bzw. Geschwindigkeit β
    var P = [1.4, 1.1];                                    // Karte: (x, y)
    var E0 = [0.9, 1.8];                                   // Raumzeit: (x, ct)

    function mapCoords(deg) {      // Koordinaten von P in einer um deg gedrehten Karte
      var a = -deg * Math.PI / 180;
      return [Math.cos(a) * P[0] - Math.sin(a) * P[1], Math.sin(a) * P[0] + Math.cos(a) * P[1]];
    }
    function boostCoords(b) {      // (x', ct') für Beobachter mit Geschwindigkeit βc
      var g = 1 / Math.sqrt(1 - b * b);
      return [g * (E0[0] - b * E0[1]), g * (E0[1] - b * E0[0])];
    }
    function energyCoords(b) {     // (p, E) eines Teilchens der Masse 1 mit Geschwindigkeit βc (c = 1)
      var g = 1 / Math.sqrt(1 - b * b);
      return [g * b, g];
    }
    var cur, trail = [], curve = null, readout, axes;
    if (mode === 'map') {
      for (var d = -180; d <= 180; d += 4) trail.push(mapCoords(d));
      cur = mapCoords(par);
      var r = V2.len(P), o = view.px([0, 0]);
      curve = h('circle', { cx: o[0], cy: o[1], r: r * view.unit, fill: 'none', stroke: C.green, strokeWidth: 1.5, strokeDasharray: '5 4' });
      axes = ['x', 'y'];
      readout = [
        ['x² + y²', cur[0] * cur[0] + cur[1] * cur[1], true],
        ['x + y²', cur[0] + cur[1] * cur[1], Math.abs(cur[0] + cur[1] * cur[1] - (P[0] + P[1] * P[1])) < 0.005]
      ];
    } else {
      var fn = mode === 'boost' ? boostCoords : energyCoords;
      for (var b = -0.9; b <= 0.9001; b += 0.02) trail.push(fn(b));
      cur = fn(par);
      var s2 = mode === 'boost' ? E0[1] * E0[1] - E0[0] * E0[0] : 1;
      var pts = [];
      for (var x = -4.5; x <= 4.5; x += 0.1) pts.push(view.px([x, Math.sqrt(x * x + s2)]));
      curve = h('polyline', { points: pts.map(function (q) { return q.join(','); }).join(' '), fill: 'none', stroke: C.green, strokeWidth: 1.5, strokeDasharray: '5 4' });
      axes = mode === 'boost' ? ['x', 'ct'] : ['pc', 'E'];
      readout = mode === 'boost'
        ? [['(ct)² − x²', cur[1] * cur[1] - cur[0] * cur[0], true], ['ct', cur[1], Math.abs(cur[1] - E0[1]) < 0.005]]
        : [['E² − (pc)²', cur[1] * cur[1] - cur[0] * cur[0], true], ['E', cur[1], Math.abs(cur[1] - 1) < 0.005]];
    }
    var lightCone = mode !== 'map' && h('g', null, [-1, 1].map(function (sg) {
      var a = view.px([0, 0]), bb = view.px([sg * 6, 6]);
      return h('line', { key: sg, x1: a[0], y1: a[1], x2: bb[0], y2: bb[1], stroke: C.amber, strokeWidth: 1, opacity: 0.5 });
    }));
    var tp = trail.map(view.px);
    var axLbl = [view.px([3.9, 0]), view.px([0, 3.2])];

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Was bleibt, wenn man den Standpunkt wechselt?', 'Try it · What stays the same when you change viewpoint?')),
      h(Toggle, {
        value: mode, onChange: function (m) { setMode(m); setPar(0); }, options: [
          { value: 'map', label: t('Karte drehen', 'Rotate a map') },
          { value: 'boost', label: t('Raumzeit: bewegter Beobachter', 'Spacetime: moving observer') },
          { value: 'energy', label: t('Energie und Impuls', 'Energy and momentum') }
        ]
      }),
      h('div', { ref: wrapRef }, h(Svg, { view: view, label: t('Koordinaten eines festen Punkts für verschiedene Beobachter', 'Coordinates of a fixed point for different observers') },
        h(Grid, { view: view }),
        lightCone, curve,
        h('polyline', { points: tp.map(function (q) { return q.join(','); }).join(' '), fill: 'none', stroke: C.cyan, strokeWidth: 3, opacity: 0.18 }),
        h(Arrow, { view: view, to: cur, color: C.cyan, width: 2.5 }),
        h('circle', { cx: view.px(cur)[0], cy: view.px(cur)[1], r: 6, fill: C.cyan }),
        h('text', { x: axLbl[0][0], y: axLbl[0][1] - 6, fill: C.dim, fontSize: 13 }, axes[0]),
        h('text', { x: axLbl[1][0] + 6, y: axLbl[1][1], fill: C.dim, fontSize: 13 }, axes[1]),
        mode !== 'map' && h('text', { x: view.px([2.6, 2.6])[0] + 4, y: view.px([2.6, 2.6])[1], fill: C.amber, fontSize: 11, opacity: 0.8 }, t('Licht', 'light'))
      )),
      mode === 'map'
        ? h(Slider, { label: t('Drehwinkel der Karte', 'Rotation of the map'), min: -180, max: 180, step: 1, value: par, display: par + '°', onChange: setPar })
        : h(Slider, { label: t('Geschwindigkeit des Beobachters (in Einheiten von c)', 'Speed of the observer (in units of c)'), min: -0.9, max: 0.9, step: 0.01, value: par, display: num(par, 2) + ' c', onChange: setPar }),
      h('div', { style: { display: 'flex', justifyContent: 'center', gap: '1.6rem', flexWrap: 'wrap', fontSize: '0.92rem', fontVariantNumeric: 'tabular-nums' } },
        readout.map(function (rr, i) {
          return h('span', { key: i, style: { color: rr[2] ? C.green : C.red } }, rr[0] + ' = ' + num(rr[1], 2) + (rr[2] ? t('  (bleibt)', '  (stays)') : t('  (ändert sich)', '  (changes)')));
        })),
      h(Caption, null, mode === 'map'
        ? t('Ein fester Punkt, beschrieben in einer gedrehten Karte: Seine Koordinaten wandern auf einem Kreis. x² + y² ist für alle gleich, x + y² nicht.',
          'A fixed point described in a rotated map: its coordinates move along a circle. x² + y² is the same for everyone, x + y² is not.')
        : mode === 'boost'
          ? t('Ein festes Ereignis, beschrieben von Beobachtern mit verschiedener Geschwindigkeit: Seine Koordinaten wandern nicht auf einem Kreis, sondern auf einer Hyperbel. Erhalten bleibt (ct)² − x², mit Minuszeichen.',
            'A fixed event described by observers moving at different speeds: its coordinates move not on a circle but on a hyperbola. What stays is (ct)² − x², with a minus sign.')
          : t('Dasselbe Teilchen, von verschiedenen Beobachtern aus gesehen: Energie und Impuls ändern sich, aber E² − (pc)² = (mc²)² bleibt. Die Masse ist die „Länge" dieses Raumzeit-Pfeils.',
            'The same particle seen by different observers: energy and momentum change, but E² − (pc)² = (mc²)² stays. Mass is the "length" of this spacetime arrow.'))
    );
  }
  window.DiracSpacetime = DiracSpacetime;

  // -------------------------------------------------------------------------
  // Widget 8 (D-31) · DiracRoot — „Finde die Wurzel"
  // Zahlen: (ax + by)² = x² + y² unmöglich (Kreuzterm 2ab). Pauli: (xσx + yσy)² = (x²+y²)·1.
  // Vierte: M = m₀1 + m·σ; {M, σk} = 2(m₀σk + m_k·1) verschwindet nur für M = 0.
  // -------------------------------------------------------------------------
  var PAULI = {
    x: Mx.fromReal([[0, 1], [1, 0]]),
    y: [[[0, 0], [0, -1]], [[0, 1], [0, 0]]],
    z: Mx.fromReal([[1, 0], [0, -1]])
  };
  function MatrixView(props) {
    var M = props.m, fmt = function (z) {
      var s = Cx.fmt(z, props.d === undefined ? 2 : props.d);
      if (LANG === 'de') s = s.replace(/\./g, ',');
      return s.replace(/-/g, '−');
    };
    return h('div', { style: { display: 'inline-flex', alignItems: 'center', gap: '0.3rem', margin: '0.2rem 0.4rem', verticalAlign: 'middle' } },
      props.label && h('span', { style: { color: props.color || C.text, fontSize: '0.9rem' } }, props.label),
      h('div', { style: { borderLeft: '1.5px solid ' + C.dim, borderRight: '1.5px solid ' + C.dim, borderRadius: '4px', padding: '0.1rem 0.45rem', display: 'grid', gridTemplateColumns: 'repeat(' + M.length + ', auto)', columnGap: '0.8rem', fontSize: '0.82rem', fontVariantNumeric: 'tabular-nums', color: props.color || C.text } },
        M.map(function (row, i) { return row.map(function (z, j) { return h('span', { key: i + '-' + j, style: { textAlign: 'right' } }, fmt(z)); }); })));
  }

  function DiracRoot() {
    var sm = useState('numbers'), mode = sm[0], setMode = sm[1];
    var sa = useState(1), a = sa[0], setA = sa[1];
    var sb = useState(0.5), b = sb[0], setB = sb[1];
    var sx = useState(0.8), X = sx[0], setX = sx[1];
    var sy = useState(0.6), Y = sy[0], setY = sy[1];
    var sm4 = useState([0.4, 0.3, -0.2, 0.5]), m4 = sm4[0], setM4 = sm4[1];

    var body;
    if (mode === 'numbers') {
      var ok1 = Math.abs(a * a - 1) < 0.02, ok2 = Math.abs(b * b - 1) < 0.02, ok3 = Math.abs(2 * a * b) < 0.02;
      var chk = function (ok, txt) { return h('div', { style: { color: ok ? C.green : C.red, fontSize: '0.9rem', margin: '0.15rem 0' } }, (ok ? '✓ ' : '✗ ') + txt); };
      body = h('div', null,
        h('div', { style: { textAlign: 'center', fontSize: '1rem', color: C.text, margin: '0.4rem 0 0.6rem', fontVariantNumeric: 'tabular-nums' } },
          '(ax + by)² = ', h('span', { style: { color: ok1 ? C.green : C.amber } }, num(a * a, 2)), ' x² + ',
          h('span', { style: { color: ok3 ? C.green : C.red, fontWeight: 700 } }, num(2 * a * b, 2)), ' xy + ',
          h('span', { style: { color: ok2 ? C.green : C.amber } }, num(b * b, 2)), ' y²'),
        h(Slider, { label: 'a', min: -1.5, max: 1.5, step: 0.01, value: a, display: num(a, 2), onChange: setA }),
        h(Slider, { label: 'b', min: -1.5, max: 1.5, step: 0.01, value: b, display: num(b, 2), onChange: setB, color: C.teal }),
        h('div', { style: { margin: '0.5rem auto', maxWidth: '24rem' } },
          chk(ok1, t('a² = 1 (Koeffizient von x²)', 'a² = 1 (coefficient of x²)')),
          chk(ok2, t('b² = 1 (Koeffizient von y²)', 'b² = 1 (coefficient of y²)')),
          chk(ok3, t('2ab = 0 (kein Kreuzterm)', '2ab = 0 (no cross term)'))),
        h(Caption, null, t('Sind a² und b² beide 1, ist der Kreuzterm 2ab = ±2. Ist er null, muss a oder b null sein. Mit gewöhnlichen Zahlen lassen sich die drei Bedingungen nicht zugleich erfüllen – weil Zahlen kommutieren und ab + ba deshalb 2ab ist.',
          'If a² and b² are both 1, the cross term 2ab is ±2. If it is zero, a or b must be zero. Ordinary numbers cannot meet all three conditions at once – because numbers commute, so ab + ba is 2ab.')));
    } else if (mode === 'pauli') {
      var S = Mx.add(Mx.scale(PAULI.x, [X, 0]), Mx.scale(PAULI.y, [Y, 0]));
      var S2 = Mx.mul(S, S);
      body = h('div', null,
        h('div', { style: { textAlign: 'center', margin: '0.5rem 0' } },
          h(MatrixView, { label: 'σₓ =', m: PAULI.x, d: 0, color: C.cyan }), h(MatrixView, { label: 'σᵧ =', m: PAULI.y, d: 0, color: C.teal })),
        h('div', { style: { textAlign: 'center', margin: '0.5rem 0' } },
          h(MatrixView, { label: '(x σₓ + y σᵧ)² =', m: S2, color: C.green }),
          h('span', { style: { color: C.dim, fontSize: '0.9rem' } }, ' = (' + num(X * X + Y * Y, 2) + ') · 1')),
        h(Slider, { label: 'x', min: -1.5, max: 1.5, step: 0.01, value: X, display: num(X, 2), onChange: setX }),
        h(Slider, { label: 'y', min: -1.5, max: 1.5, step: 0.01, value: Y, display: num(Y, 2), onChange: setY, color: C.teal }),
        h(Caption, null, t('Die Pauli-Matrizen quadrieren zu 1 und antikommutieren: σₓσᵧ = −σᵧσₓ. Damit verschwindet der Kreuzterm, und (x σₓ + y σᵧ)² ist für jedes x, y genau (x² + y²) mal die Einheitsmatrix. Es sind die Regeln für e₁ und e₂ aus Akt I.',
          'The Pauli matrices square to 1 and anticommute: σₓσᵧ = −σᵧσₓ. The cross term vanishes, and (x σₓ + y σᵧ)² is exactly (x² + y²) times the identity for every x, y. These are the rules for e₁ and e₂ from Act I.')));
    } else {
      var M = Mx.add(Mx.add(Mx.scale(Mx.eye(2), [m4[0], 0]), Mx.scale(PAULI.x, [m4[1], 0])), Mx.add(Mx.scale(PAULI.y, [m4[2], 0]), Mx.scale(PAULI.z, [m4[3], 0])));
      var norms = ['x', 'y', 'z'].map(function (k) {
        var A = Mx.add(Mx.mul(M, PAULI[k]), Mx.mul(PAULI[k], M)), n = 0;
        A.forEach(function (row) { row.forEach(function (z) { n += Cx.abs2(z); }); });
        return Math.sqrt(n);
      });
      var allZero = norms.every(function (n) { return n < 0.03; });
      var names = ['m₀ (· 1)', 'mₓ (· σₓ)', 'mᵧ (· σᵧ)', 'm_z (· σ_z)'];
      body = h('div', null,
        h('div', { style: { textAlign: 'center', margin: '0.5rem 0' } }, h(MatrixView, { label: 'M =', m: M, color: C.violet })),
        m4.map(function (v, i) {
          return h(Slider, { key: i, label: names[i], min: -1, max: 1, step: 0.01, value: v, display: num(v, 2), color: C.violet, onChange: function (x) { var c = m4.slice(); c[i] = x; setM4(c); } });
        }),
        h('div', { style: { display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap', fontSize: '0.88rem', fontVariantNumeric: 'tabular-nums', margin: '0.4rem 0' } },
          ['σₓ', 'σᵧ', 'σ_z'].map(function (nm, i) {
            return h('span', { key: i, style: { color: norms[i] < 0.03 ? C.green : C.red } }, '|M' + nm + ' + ' + nm + 'M| = ' + num(norms[i], 2));
          })),
        h(Caption, null, allZero
          ? t('Alle drei Antikommutatoren verschwinden – aber nur, weil M jetzt die Nullmatrix ist. Eine vierte Matrix mit Quadrat ±1 gibt es in 2×2 nicht.',
            'All three anticommutators vanish – but only because M is now the zero matrix. A fourth matrix with square ±1 does not exist in 2×2.')
          : t('Jede 2×2-Matrix lässt sich als M = m₀·1 + mₓσₓ + mᵧσᵧ + m_zσ_z schreiben. Ihr Antikommutator mit σₓ ist 2(m₀σₓ + mₓ·1): Er verschwindet nur, wenn m₀ = mₓ = 0. Schiebe alle Regler auf null, um mit allen drei Pauli-Matrizen zu antikommutieren.',
            'Every 2×2 matrix can be written as M = m₀·1 + mₓσₓ + mᵧσᵧ + m_zσ_z. Its anticommutator with σₓ is 2(m₀σₓ + mₓ·1): it vanishes only if m₀ = mₓ = 0. Move all sliders to zero to anticommute with all three Pauli matrices.')));
    }

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Eine Wurzel aus x² + y²', 'Try it · A square root of x² + y²')),
      h(Toggle, {
        value: mode, onChange: setMode, options: [
          { value: 'numbers', label: t('1 · mit Zahlen', '1 · with numbers') },
          { value: 'pauli', label: t('2 · mit Matrizen', '2 · with matrices') },
          { value: 'fourth', label: t('3 · eine vierte?', '3 · a fourth one?') }
        ]
      }),
      body);
  }
  window.DiracRoot = DiracRoot;

  // -------------------------------------------------------------------------
  // Widget 9 (D-32) · DiracBelt — „Gürteltrick"
  // Ein Band verbindet die Wand (unten) mit einer Platte (oben), die um θ gedreht ist.
  // Orientierung des Bandes in Höhe s: Quaternion q(s) = Q(z, θs).
  // Bei θ = 720° Entwirrung: q_λ(s) = Q(z, 2πs) · Q(n_λ, 2πs), n_λ von +z nach −z.
  // An beiden Enden ist q_λ = 1 für jedes λ, weil Q(n, 2π) = −1 für jede Achse n.
  // -------------------------------------------------------------------------
  function Qt(n, a) { var s = Math.sin(a / 2); return [Math.cos(a / 2), n[0] * s, n[1] * s, n[2] * s]; }
  function Qmul(p, q) {
    return [p[0] * q[0] - p[1] * q[1] - p[2] * q[2] - p[3] * q[3],
      p[0] * q[1] + p[1] * q[0] + p[2] * q[3] - p[3] * q[2],
      p[0] * q[2] - p[1] * q[3] + p[2] * q[0] + p[3] * q[1],
      p[0] * q[3] + p[1] * q[2] - p[2] * q[1] + p[3] * q[0]];
  }
  function Qrot(q, v) {   // Vektor v mit Quaternion q drehen
    var w = q[0], x = q[1], y = q[2], z = q[3];
    return [
      (1 - 2 * (y * y + z * z)) * v[0] + 2 * (x * y - w * z) * v[1] + 2 * (x * z + w * y) * v[2],
      2 * (x * y + w * z) * v[0] + (1 - 2 * (x * x + z * z)) * v[1] + 2 * (y * z - w * x) * v[2],
      2 * (x * z - w * y) * v[0] + 2 * (y * z + w * x) * v[1] + (1 - 2 * (x * x + y * y)) * v[2]];
  }

  function DiracBelt() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(560, cw[1])), H = Math.round(W * 0.95);
    var sth = useState(0), thDeg = sth[0], setTh = sth[1];
    var sl = useState(0), lam = sl[0], setLam = sl[1];
    var orbit = useOrbit(0.65, 0.32);
    var is720 = thDeg === 720;
    var lamEff = is720 ? lam : 0;

    function q(s) {
      if (is720) {
        var nl = [Math.sin(Math.PI * lamEff), 0, Math.cos(Math.PI * lamEff)];
        return Qmul(Qt([0, 0, 1], 2 * Math.PI * s), Qt(nl, 2 * Math.PI * s));
      }
      return Qt([0, 0, 1], thDeg * Math.PI / 180 * s);
    }
    var proj = camera(orbit.yaw, orbit.pitch, W / 4.2, W / 2, H * 0.7);
    var Hb = 2.2, half = 0.42, Ns = 48, quads = [];
    var prev = null;
    for (var i = 0; i <= Ns; i++) {
      var s = i / Ns, qq = q(s), c = [0, 0, s * Hb];
      var wv = Qrot(qq, [half, 0, 0]), nv = Qrot(qq, [0, 1, 0]);
      var cur = { a: [c[0] + wv[0], c[1] + wv[1], c[2] + wv[2]], b: [c[0] - wv[0], c[1] - wv[1], c[2] - wv[2]], n: nv };
      if (prev) {
        var pts = [prev.a, cur.a, cur.b, prev.b].map(proj);
        var depth = (pts[0][2] + pts[1][2] + pts[2][2] + pts[3][2]) / 4;
        // Vorder- oder Rückseite: Normale gegen Blickrichtung (Kamera schaut entlang +y nach Drehung)
        var nproj = proj([prev.n[0], prev.n[1], prev.n[2]]), o = proj([0, 0, 0]);
        var front = (nproj[2] - o[2]) < 0;
        quads.push({ d: depth, el: h('polygon', { key: 'q' + i, points: pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' '), fill: front ? C.amber : C.violet, fillOpacity: 0.85, stroke: C.bg, strokeWidth: 0.4 }) });
      }
      prev = cur;
    }
    quads.sort(function (A, B) { return B.d - A.d; });

    // Wand (unten) und Platte (oben)
    function square(z, size, qq) {
      var corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(function (p) {
        var v = qq ? Qrot(qq, [p[0] * size, p[1] * size, 0]) : [p[0] * size, p[1] * size, 0];
        return proj([v[0], v[1], z + v[2]]);
      });
      return corners.map(function (p) { return p[0] + ',' + p[1]; }).join(' ');
    }
    var top = q(1), mark = Qrot(top, [0.75, 0, 0]);
    var topC = proj([0, 0, Hb]), markP = proj([mark[0], mark[1], Hb + mark[2]]);
    var rotor = Math.cos(thDeg * Math.PI / 180 / 2);

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Diracs Gürteltrick', "Try it · Dirac's belt trick")),
      h('div', { ref: wrapRef }, h('svg', {
        viewBox: '0 0 ' + W + ' ' + H, width: '100%', onPointerDown: orbit.onPointerDown,
        style: { display: 'block', maxWidth: W + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem', touchAction: 'none', cursor: 'grab' },
        role: 'img', 'aria-label': t('Ein Band zwischen Wand und drehbarer Platte', 'A belt between a wall and a rotatable plate')
      },
        h('polygon', { points: square(0, 0.9), fill: C.track, fillOpacity: 0.5, stroke: C.dim }),
        quads.map(function (qd) { return qd.el; }),
        h('polygon', { points: square(Hb, 0.7, top), fill: C.cyan, fillOpacity: 0.25, stroke: C.cyan, strokeWidth: 1.5 }),
        h('line', { x1: topC[0], y1: topC[1], x2: markP[0], y2: markP[1], stroke: C.cyan, strokeWidth: 3, strokeLinecap: 'round' }),
        h('text', { x: 10, y: 18, fill: C.faint, fontSize: 11 }, t('Ziehen dreht die Ansicht', 'Drag to rotate the view'))
      )),
      h('div', { style: { fontSize: '0.72rem', color: C.faint, textAlign: 'center', marginTop: '0.3rem' } }, t('Vereinfachte Darstellung: Gezeigt wird die Ausrichtung der Bandquerschnitte. Ein echter Gürtel weicht beim Entwirren zusätzlich seitlich aus.', 'Simplified: the picture shows the orientation of the belt cross-sections. A real belt also swings sideways while being untangled.')),
      h(Slider, {
        label: t('Drehung der Platte', 'Rotation of the plate'), min: 0, max: 720, step: 5, value: thDeg, color: C.cyan,
        display: thDeg + '°', onChange: function (x) { setTh(x); setLam(0); }
      }),
      h(Row, { style: { justifyContent: 'center' } },
        [0, 360, 720].map(function (d) { return h(Button, { key: d, active: thDeg === d, onClick: function () { setTh(d); setLam(0); } }, d + '°'); })),
      h(Slider, {
        label: is720 ? t('Band entwirren (Platte bleibt, wie sie ist)', 'Untangle the belt (plate stays as it is)') : t('Entwirren – nur bei 720° möglich', 'Untangle – only possible at 720°'),
        min: 0, max: 1, step: 0.01, value: lamEff, color: C.amber, display: is720 ? Math.round(lamEff * 100) + ' %' : '—',
        onChange: function (x) { if (is720) setLam(x); }
      }),
      h('div', { style: { textAlign: 'center', fontSize: '0.9rem', color: C.text, fontVariantNumeric: 'tabular-nums' } },
        t('Rotor der Platte: R = cos(θ/2) = ', 'Rotor of the plate: R = cos(θ/2) = '),
        h('strong', { style: { color: Math.abs(rotor + 1) < 1e-6 ? C.red : C.violet } }, num(rotor, 2))),
      h(Caption, null, thDeg === 360
        ? t('Die Platte steht nach 360° wieder wie am Anfang, das Band ist aber einmal verdrillt. Keine Bewegung des Bandes, bei der Wand und Platte festbleiben, löst diese Verdrillung. Der Rotor ist −1.',
          'After 360° the plate is back where it started, but the belt is twisted once. No motion of the belt that keeps wall and plate fixed removes this twist. The rotor is −1.')
        : is720
          ? (lamEff > 0.98
            ? t('Entwirrt: Nach 720° lässt sich das Band glatt ziehen, ohne die Platte zu drehen. Der Rotor ist wieder +1.',
              'Untangled: after 720° the belt can be straightened without turning the plate. The rotor is +1 again.')
            : t('Zweimal gedreht. Ziehe den unteren Regler: Das Band lässt sich jetzt stetig entwirren, während Wand und Platte festbleiben.',
              'Turned twice. Move the lower slider: the belt can now be untangled continuously while wall and plate stay fixed.'))
          : t('Drehe die Platte und beobachte das Band. Gelb ist die Vorderseite des Bandes, violett die Rückseite.',
            'Turn the plate and watch the belt. Yellow is the front of the belt, violet the back.'))
    );
  }
  window.DiracBelt = DiracBelt;

  // -------------------------------------------------------------------------
  // Widget 10 (D-33) · DiracSea — „Dirac-See, Paarerzeugung, Annihilation"
  // E(p) = ±√(p²c² + m²c⁴), mc² = 0,511 MeV. Untere Zustände gefüllt (Diracs Deutung 1930).
  // Photon mit Energie ≥ 2mc² hebt ein Elektron aus dem See → Elektron + Loch (Positron).
  // -------------------------------------------------------------------------
  function DiracSea() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(560, cw[1])), H = Math.round(W * 0.8);
    var M = 0.511, Pmax = 2.6, Emax = 2.9;
    var sx = function (p) { return W / 2 + p / Pmax * (W / 2 - 20); };
    var sy = function (E) { return H / 2 - E / Emax * (H / 2 - 18); };
    var sg = useState(1.4), Eg = sg[0], setEg = sg[1];
    var sp = useState('vacuum'), phase = sp[0], setPhase = sp[1];
    var sf = useState(false), field = sf[0], setField = sf[1];
    var sm = useState(''), msg = sm[0], setMsg = sm[1];
    var pPair = phase === 'pair' ? Math.sqrt(Math.max(0, Math.pow(Eg / 2, 2) - M * M)) : 0;

    var grid = [];
    for (var p = -2.4; p <= 2.4001; p += 0.3) grid.push(Math.round(p * 10) / 10);
    function branch(sign) {
      var pts = [];
      for (var q = -Pmax; q <= Pmax; q += 0.05) pts.push(sx(q) + ',' + sy(sign * Math.sqrt(q * q + M * M)));
      return pts.join(' ');
    }
    // Elektron auf dem oberen Zweig mit E = Eγ/2; Loch auf dem Rasterplatz bei −p (Gesamtimpuls ≈ 0).
    // Im elektrischen Feld werden alle Elektronen nach links geschoben: e⁻ nach links, Loch nach rechts.
    var shift = field ? 0.3 : 0;
    var pE = pPair - shift;
    var holeP = phase === 'pair' ? Math.round((-pPair + shift) / 0.3) * 0.3 : null;
    var balls = grid.map(function (q, i) {
      var E = -Math.sqrt(q * q + M * M);
      var isHole = holeP !== null && Math.abs(q - holeP) < 0.01;
      return h('circle', { key: 'b' + i, cx: sx(q), cy: sy(E), r: 6, fill: isHole ? 'none' : C.blue, stroke: isHole ? C.red : 'none', strokeWidth: 2.5, opacity: isHole ? 1 : 0.75 });
    });
    var elec = null;
    if (phase === 'pair') {
      elec = h('circle', { cx: sx(pE), cy: sy(Math.sqrt(pE * pE + M * M)), r: 7, fill: C.cyan });
    }

    function shoot() {
      if (Eg < 2 * M) { setMsg(t('Nichts passiert: ' + num(Eg, 2) + ' MeV reichen nicht, um ein Elektron über die Lücke von 2mc² = 1,02 MeV zu heben.', 'Nothing happens: ' + num(Eg, 2) + ' MeV is not enough to lift an electron across the gap of 2mc² = 1.02 MeV.')); setPhase('vacuum'); return; }
      setPhase('pair'); setField(false);
      setMsg(t('Paarerzeugung: Das Photon hebt ein Elektron aus dem See. Zurück bleibt ein Loch – es verhält sich wie ein Teilchen mit der Masse des Elektrons und positiver Ladung, ein Positron.',
        'Pair creation: the photon lifts an electron out of the sea. A hole is left behind – it behaves like a particle with the electron mass and positive charge, a positron.'));
    }
    function annihilate() {
      setPhase('vacuum'); setField(false);
      setMsg(t('Annihilation: Das Elektron fällt ins Loch zurück. Die Energie 2mc² wird als zwei Lichtquanten von je 511 keV frei, die in entgegengesetzte Richtungen fliegen – das Signal im PET-Scanner.',
        'Annihilation: the electron drops back into the hole. The energy 2mc² is released as two photons of 511 keV each, flying in opposite directions – the signal in a PET scanner.'));
    }

    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Der Dirac-See', 'Try it · The Dirac sea')),
      h('div', { ref: wrapRef }, h('svg', {
        viewBox: '0 0 ' + W + ' ' + H, width: '100%', style: { display: 'block', maxWidth: W + 'px', margin: '0 auto', background: C.bg, borderRadius: '0.5rem' },
        role: 'img', 'aria-label': t('Energiezweige der Dirac-Gleichung mit gefülltem See', 'Energy branches of the Dirac equation with filled sea')
      },
        h('rect', { x: 0, y: sy(M), width: W, height: sy(-M) - sy(M), fill: C.amber, opacity: 0.06 }),
        h('line', { x1: 0, y1: sy(0), x2: W, y2: sy(0), stroke: C.gridSoft }),
        h('line', { x1: sx(0), y1: 0, x2: sx(0), y2: H, stroke: C.gridSoft }),
        h('polyline', { points: branch(1), fill: 'none', stroke: C.cyan, strokeWidth: 2 }),
        h('polyline', { points: branch(-1), fill: 'none', stroke: C.blue, strokeWidth: 2 }),
        h('text', { x: W - 10, y: sy(M) - 6, fill: C.amber, fontSize: 11, textAnchor: 'end' }, t('Lücke 2mc² = 1,022 MeV', 'gap 2mc² = 1.022 MeV')),
        h('text', { x: 8, y: 16, fill: C.dim, fontSize: 11 }, t('Energie E', 'energy E')),
        h('text', { x: W - 8, y: sy(0) - 6, fill: C.dim, fontSize: 11, textAnchor: 'end' }, t('Impuls p', 'momentum p')),
        h('text', { x: 10, y: H - 10, fill: C.blue, fontSize: 11 }, t('See: alle Zustände negativer Energie besetzt', 'sea: all negative-energy states filled')),
        balls, elec,
        phase === 'pair' && field && h('g', null,
          h('text', { x: sx(pE) - 10, y: sy(Math.sqrt(pE * pE + M * M)) - 10, fill: C.cyan, fontSize: 13, textAnchor: 'end' }, '← e⁻'),
          h('text', { x: sx(holeP) + 10, y: sy(-Math.sqrt(holeP * holeP + M * M)) + 18, fill: C.red, fontSize: 13 }, t('Loch → (+)', 'hole → (+)')))
      )),
      h(Slider, { label: t('Energie des Photons', 'Photon energy'), min: 0.2, max: 3, step: 0.01, value: Eg, color: C.amber, display: num(Eg, 2) + ' MeV', onChange: setEg }),
      h(Row, { style: { justifyContent: 'center' } },
        h(Button, { onClick: shoot, color: C.amber }, t('Photon einstrahlen', 'Send in photon')),
        h(Button, { onClick: function () { if (phase === 'pair') setField(!field); }, disabled: phase !== 'pair', active: field }, t('Elektrisches Feld', 'Electric field')),
        h(Button, { onClick: annihilate, disabled: phase !== 'pair', color: C.red }, t('Annihilation', 'Annihilation'))),
      h(Caption, null, msg || t('Nach Dirac ist das Vakuum ein voll besetzter See von Zuständen negativer Energie. Weil nach dem Pauli-Prinzip jeder Zustand nur einmal besetzt sein kann, kann kein Elektron hineinfallen. Strahle ein Photon ein.',
        'According to Dirac, the vacuum is a completely filled sea of negative-energy states. Since by the Pauli principle each state can only be occupied once, no electron can fall into it. Send in a photon.')),
      field && phase === 'pair' && h(Caption, null, t('Im elektrischen Feld werden alle Elektronen – auch die im See – in dieselbe Richtung beschleunigt. Die Lücke im See wandert dadurch in die Gegenrichtung: Das Loch verhält sich wie eine positive Ladung.',
        'In an electric field all electrons – including those in the sea – are pushed the same way. The gap in the sea therefore moves the opposite way: the hole behaves like a positive charge.'))
    );
  }
  window.DiracSea = DiracSea;

  // -------------------------------------------------------------------------
  // Widget 11 (D-34) · DiracCheckerboard — „Feynmans Schachbrett"
  // Zwei Komponenten R (läuft nach rechts) und L (läuft nach links), ħ = c = 1.
  // Pro Schritt: Zwei-Mulden-Matrix [[cos φ, −i sin φ], [−i sin φ, cos φ]] (φ = mε, „Ecke"),
  // dann Lichtlauf um eine Zelle. Unitär, konvergiert gegen die exakte Dirac-Lösung (D-01).
  // -------------------------------------------------------------------------
  function DiracCheckerboard() {
    var cw = useContainerWidth(600), wrapRef = cw[0];
    var W = Math.max(300, Math.min(600, cw[1]));
    var T = W < 480 ? 80 : 110, NX = 2 * T + 1;
    var sphi = useState(0.12), phi = sphi[0], setPhi = sphi[1];
    var sseed = useState(1), seed = sseed[0], setSeed = sseed[1];
    var canvasRef = useRef(null);
    var Hc = Math.round(W * 0.62);

    // Amplituden berechnen (Startzustand: am Ursprung, nach rechts laufend)
    var rows = React.useMemo(function () {
      var Rre = new Float64Array(NX), Rim = new Float64Array(NX), Lre = new Float64Array(NX), Lim = new Float64Array(NX);
      Rre[T] = 1;
      var c = Math.cos(phi), s = Math.sin(phi), out = [];
      for (var n = 0; n <= T; n++) {
        var prob = new Float64Array(NX), mx = 0;
        for (var j = 0; j < NX; j++) { prob[j] = Rre[j] * Rre[j] + Rim[j] * Rim[j] + Lre[j] * Lre[j] + Lim[j] * Lim[j]; if (prob[j] > mx) mx = prob[j]; }
        out.push({ p: prob, mx: mx });
        // Ecke: R' = cR − i sL, L' = −i sR + cL
        var nRre = new Float64Array(NX), nRim = new Float64Array(NX), nLre = new Float64Array(NX), nLim = new Float64Array(NX);
        for (var k = 0; k < NX; k++) {
          var rr = c * Rre[k] + s * Lim[k], ri = c * Rim[k] - s * Lre[k];
          var lr = s * Rim[k] + c * Lre[k], li = -s * Rre[k] + c * Lim[k];
          if (k + 1 < NX) { nRre[k + 1] = rr; nRim[k + 1] = ri; }      // R läuft nach rechts
          if (k - 1 >= 0) { nLre[k - 1] = lr; nLim[k - 1] = li; }      // L läuft nach links
        }
        Rre = nRre; Rim = nRim; Lre = nLre; Lim = nLim;
      }
      return out;
    }, [phi, T]);

    useEffect(function () {
      var cv = canvasRef.current; if (!cv) return;
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = Hc * dpr;
      var ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hc);
      var cwid = W / NX, rh = Hc / (T + 1);
      for (var n = 0; n <= T; n++) {
        var row = rows[n], y = Hc - (n + 1) * rh;
        for (var j = 0; j < NX; j++) {
          if (row.p[j] <= 0) continue;
          var v = Math.sqrt(row.p[j] / row.mx);          // zeilenweise normiert, Wurzel für Kontrast
          if (v < 0.02) continue;
          ctx.fillStyle = 'rgba(' + Math.round(34 + 200 * v * v) + ',' + Math.round(150 + 90 * v) + ',' + Math.round(200 + 40 * v) + ',' + Math.min(1, 0.15 + v) + ')';
          ctx.fillRect(j * cwid, y, cwid + 0.6, rh + 0.6);
        }
      }
      // Lichtkegel
      ctx.strokeStyle = 'rgba(245,158,11,0.55)'; ctx.lineWidth = 1; ctx.setLineDash([5, 4]);
      ctx.beginPath(); ctx.moveTo(W / 2, Hc); ctx.lineTo(W / 2 - T * cwid, Hc - T * rh); ctx.moveTo(W / 2, Hc); ctx.lineTo(W / 2 + T * cwid, Hc - T * rh); ctx.stroke();
      ctx.setLineDash([]);
      // Zufällige Zickzack-Pfade: Richtungswechsel mit Wahrscheinlichkeit sin²φ (nur zur Anschauung)
      var rnd = (function (a) { return function () { a = (a * 16807) % 2147483647; return a / 2147483647; }; })(seed * 7919 + 13);
      var cols = ['#f87171', '#a78bfa', '#4ade80'];
      for (var pth = 0; pth < 3; pth++) {
        var x = T, dir = 1, corners = 0;
        ctx.strokeStyle = cols[pth]; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo((x + 0.5) * cwid, Hc);
        var pc = Math.max(0.0, Math.min(0.5, Math.pow(Math.sin(phi), 2) * 3));
        for (var n2 = 1; n2 <= T; n2++) {
          if (rnd() < pc) { dir = -dir; corners++; }
          x += dir; ctx.lineTo((x + 0.5) * cwid, Hc - n2 * rh);
        }
        ctx.stroke();
      }
    }, [rows, W, Hc, seed, phi]);

    var mass0 = phi < 0.005;
    return h(Panel, null,
      h(Title, null, t('Ausprobieren · Feynmans Schachbrett', "Try it · Feynman's checkerboard")),
      h('div', { ref: wrapRef, style: { position: 'relative' } },
        h('canvas', { ref: canvasRef, style: { width: '100%', maxWidth: W + 'px', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '0.5rem' }, role: 'img', 'aria-label': t('Aufenthaltswahrscheinlichkeit über Ort und Zeit', 'Probability over space and time') }),
        h('div', { style: { position: 'absolute', left: '0.6rem', top: '0.4rem', fontSize: '0.72rem', color: C.dim } }, t('Zeit ↑', 'time ↑')),
        h('div', { style: { position: 'absolute', right: '0.6rem', bottom: '0.4rem', fontSize: '0.72rem', color: C.dim } }, t('Ort →', 'position →'))),
      h(Slider, {
        label: t('Masse (Ecken-Amplitude φ = mc²ε/ħ pro Schritt)', 'Mass (corner amplitude φ = mc²ε/ħ per step)'), min: 0, max: 0.4, step: 0.005, value: phi, color: C.violet,
        display: mass0 ? t('masselos', 'massless') : 'φ = ' + num(phi, 3), onChange: setPhi
      }),
      h(Row, { style: { justifyContent: 'center' } },
        h(Button, { onClick: function () { setPhi(0); }, active: mass0 }, t('masselos (m = 0)', 'massless (m = 0)')),
        h(Button, { onClick: function () { setPhi(0.12); }, active: Math.abs(phi - 0.12) < 1e-9 }, t('Elektron-artig', 'electron-like')),
        h(Button, { onClick: function () { setSeed(seed + 1); }, color: C.faint }, t('andere Beispielpfade', 'other sample paths'))),
      h(Caption, null, mass0
        ? t('Ohne Masse gibt es keine Ecken: Das Teilchen fliegt mit Lichtgeschwindigkeit geradeaus, die gesamte Wahrscheinlichkeit bleibt auf dem Lichtkegel.',
          'Without mass there are no corners: the particle flies straight at the speed of light, all probability stays on the light cone.')
        : t('Mit Masse trägt jede Ecke einen um 90° gedrehten Faktor. Die Summe über alle Zickzack-Pfade füllt das Innere des Lichtkegels mit Interferenzstreifen: Das Teilchen kommt im Mittel langsamer voran als das Licht. Die farbigen Linien sind einzelne Beispielpfade; die Helligkeit ist zeilenweise normiert.',
          'With mass every corner carries a factor turned by 90°. The sum over all zigzag paths fills the inside of the light cone with interference fringes: on average the particle advances more slowly than light. The coloured lines are individual sample paths; brightness is normalised row by row.'))
    );
  }
  window.DiracCheckerboard = DiracCheckerboard;

})();
