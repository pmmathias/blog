/* eigenprinzip-components.js — React-Widgets für "Das Eigenprinzip"
 *
 * Pattern: IIFE, jede Komponente als window.ComponentName, gemountet per
 * IntersectionObserver aus eigenprinzip.html. React 18 global (kein JSX —
 * React.createElement via h-Helper).
 *
 * Farben (Dark Theme): bg #030712, teal #2dd4bf, cyan #22d3ee,
 * amber #f59e0b, blau #60a5fa, text #e2e8f0, grid #1f2937.
 */
(function () {
  'use strict';
  if (typeof React === 'undefined') return;

  var h = React.createElement;
  var useState = React.useState;
  var useRef = React.useRef;
  var useEffect = React.useEffect;

  var C = {
    bg: '#030712', panel: '#0b1220', grid: '#1f2937',
    teal: '#2dd4bf', cyan: '#22d3ee', amber: '#f59e0b',
    blue: '#60a5fa', text: '#e2e8f0', dim: '#94a3b8', track: '#334155'
  };

  // ---- i18n: one file serves both DE and EN ------------------------------
  var LANG = (typeof document !== 'undefined' && document.documentElement.lang === 'en') ? 'en' : 'de';
  function t(de, en) { return LANG === 'en' ? en : de; }

  // ---- shared UI helpers --------------------------------------------------
  function Panel(props) {
    return h('div', {
      style: {
        background: C.panel, border: '1px solid ' + C.grid,
        borderRadius: '0.75rem', padding: '1rem 1.1rem',
        margin: '0 0.5rem'
      }
    }, props.children);
  }

  function Slider(props) {
    return h('div', { style: { margin: '0.6rem 0' } },
      h('div', {
        style: {
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.8rem', color: C.dim, marginBottom: '0.25rem'
        }
      },
        h('span', null, props.label),
        h('span', { style: { color: C.cyan, fontVariantNumeric: 'tabular-nums' } }, props.display)
      ),
      h('input', {
        type: 'range', min: props.min, max: props.max, step: props.step,
        value: props.value,
        onChange: function (e) { props.onChange(parseFloat(e.target.value)); },
        style: { width: '100%', accentColor: C.cyan, cursor: 'pointer' }
      })
    );
  }

  function Button(props) {
    return h('button', {
      onClick: props.onClick,
      style: {
        background: props.active ? C.cyan : 'transparent',
        color: props.active ? C.bg : C.cyan,
        border: '1px solid ' + C.cyan, borderRadius: '0.5rem',
        padding: '0.35rem 0.8rem', fontSize: '0.8rem', cursor: 'pointer',
        fontWeight: 600, transition: 'all 0.15s'
      }
    }, props.children);
  }

  function caption(txt) {
    return h('p', {
      style: { fontSize: '0.78rem', color: C.dim, textAlign: 'center', marginTop: '0.6rem', lineHeight: 1.5 }
    }, txt);
  }

  // =========================================================================
  // 1. NextStepOscillator — "Regel fürs nächste Mal"
  //    Zeigt, wie aus zwei Euler-Update-Regeln eine Sinusschwingung emergiert.
  //    Links: Zeitreihe x(t). Rechts: Phasenraum (x, v) -> geschlossene Ellipse.
  // =========================================================================
  function NextStepOscillator() {
    var W = 760, Hh = 300;
    var canvasRef = useRef(null);
    var stateRef = useRef({ x: 1, v: 0, trail: [], phase: [] });
    var rafRef = useRef(null);
    var kmRef = useRef(8);
    var dtRef = useRef(0.05);
    var runRef = useRef(true);

    var km = useState(8); var setKm = km[1]; km = km[0];
    var dt = useState(0.05); var setDt = dt[1]; dt = dt[0];
    var running = useState(true); var setRunning = running[1]; running = running[0];

    useEffect(function () { kmRef.current = km; }, [km]);
    useEffect(function () { dtRef.current = dt; }, [dt]);
    useEffect(function () { runRef.current = running; }, [running]);

    function reset() {
      stateRef.current = { x: 1, v: 0, trail: [], phase: [] };
    }

    useEffect(function () {
      var canvas = canvasRef.current;
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.scale(dpr, dpr);

      // layout: left = time series, right = phase space, clear divider
      var DIV = 384;                       // divider x-coordinate
      var tsX0 = 14, tsX1 = DIV - 20, tsW = tsX1 - tsX0, midY = Hh / 2;
      var AMP = Hh / 2 - 38;               // fixed displacement scale
      var phX = DIV + (W - DIV) / 2, phY = Hh / 2, phR = Hh / 2 - 34;

      function draw() {
        var s = stateRef.current;
        var kmv = kmRef.current, dtv = dtRef.current;
        var omega = Math.sqrt(kmv);

        if (runRef.current) {
          // symplectic (semi-implicit) Euler: update v first, then x with the
          // new v. This conserves energy, so a normal step gives a closed
          // ellipse; only a genuinely large Δt makes it spiral out.
          var steps = 2;                   // a couple of substeps for smoothness
          for (var st = 0; st < steps; st++) {
            s.v = s.v - kmv * s.x * (dtv / steps);
            s.x = s.x + s.v * (dtv / steps);
          }
          s.trail.push(s.x);
          if (s.trail.length > 240) s.trail.shift();
          s.phase.push([s.x, s.v]);
          if (s.phase.length > 900) s.phase.shift();
        }

        // background
        ctx.clearRect(0, 0, W, Hh);
        ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);

        // divider
        ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(DIV, 8); ctx.lineTo(DIV, Hh - 8); ctx.stroke();

        // ===== left panel: time series (clipped) =====
        ctx.save();
        ctx.beginPath(); ctx.rect(0, 0, DIV - 1, Hh); ctx.clip();
        ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(tsX0, midY); ctx.lineTo(tsX1, midY); ctx.stroke();
        ctx.fillStyle = C.dim; ctx.font = '11px Inter, sans-serif';
        ctx.fillText(t('Auslenkung x über die Zeit', 'Displacement x over time'), tsX0, 18);

        ctx.strokeStyle = C.cyan; ctx.lineWidth = 2; ctx.beginPath();
        var n = s.trail.length;
        for (var i = 0; i < n; i++) {
          var px = tsX0 + (i / 240) * tsW;
          var py = midY - Math.max(-1.6, Math.min(1.6, s.trail[i])) * AMP;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.restore();

        // ===== right panel: phase space (clipped) =====
        ctx.save();
        ctx.beginPath(); ctx.rect(DIV + 1, 0, W - DIV, Hh); ctx.clip();
        ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(phX - phR, phY); ctx.lineTo(phX + phR, phY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(phX, phY - phR); ctx.lineTo(phX, phY + phR); ctx.stroke();
        ctx.fillStyle = C.dim; ctx.font = '11px Inter, sans-serif';
        ctx.fillText(t('Phasenraum (x, v)', 'Phase space (x, v)'), DIV + 14, 18);

        // scale: x -> phR, v/omega -> phR  (so a unit-amplitude orbit is a circle)
        var sc = phR / 1.55;
        ctx.strokeStyle = C.amber; ctx.lineWidth = 1.5; ctx.beginPath();
        for (var j = 0; j < s.phase.length; j++) {
          var qx = phX + s.phase[j][0] * sc;
          var qy = phY - (s.phase[j][1] / omega) * sc;
          if (j === 0) ctx.moveTo(qx, qy); else ctx.lineTo(qx, qy);
        }
        ctx.stroke();
        if (s.phase.length) {
          var last = s.phase[s.phase.length - 1];
          ctx.fillStyle = C.teal;
          ctx.beginPath();
          ctx.arc(phX + last[0] * sc, phY - (last[1] / omega) * sc, 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        rafRef.current = requestAnimationFrame(draw);
      }
      draw();
      return function () { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    return h('div', null,
      h(Panel, null,
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '0.8rem' } },
          h(Slider, {
            label: t('Steifigkeit k/m', 'Stiffness k/m'), display: km.toFixed(1),
            min: 1, max: 30, step: 0.5, value: km, onChange: setKm
          }),
          h(Slider, {
            label: t('Zeitschritt Δt', 'Time step Δt'), display: dt.toFixed(3),
            min: 0.01, max: 0.25, step: 0.005, value: dt, onChange: setDt
          })
        ),
        h('div', { style: { display: 'flex', gap: '0.6rem', marginTop: '0.4rem' } },
          h(Button, { active: running, onClick: function () { setRunning(!running); } }, running ? t('Pause', 'Pause') : t('Weiter', 'Resume')),
          h(Button, { active: false, onClick: reset }, t('Zurücksetzen', 'Reset'))
        ),
        caption(t(
          'Zwei Update-Regeln, viele Tausend Mal angewandt: v_neu = v − (k/m)·x·Δt, dann x_neu = x + v_neu·Δt. ' +
          'Die geschlossene Ellipse im Phasenraum ist das stabile Eigenmuster: Nach jedem Umlauf kehrt das System in seinen Ausgangszustand zurück. Eine größere Steifigkeit k/m staucht die Ellipse, ein größerer Zeitschritt Δt macht den Bahnverlauf gröber.',
          'Two update rules, applied many thousands of times: v_new = v − (k/m)·x·Δt, then x_new = x + v_new·Δt. ' +
          'The closed ellipse in phase space is the stable eigenpattern: after each cycle the system returns to its initial state. A larger stiffness k/m compresses the ellipse, a larger time step Δt makes the orbit coarser.'))
      )
    );
  }
  window.NextStepOscillator = NextStepOscillator;

  // =========================================================================
  // 2. EigenDirections — richtungstreue Vektoren einer linearen Abbildung
  //    Eingabevektor per Slider drehen; an den Eigenrichtungen rasten Ein-
  //    und Ausgabe parallel ein. Presets zeigen auch den Fall ohne reelle
  //    Eigenrichtungen (Drehung).
  // =========================================================================
  function EigenDirections() {
    var W = 460, Hh = 380, CX = 230, CY = 195, S = 58;
    var canvasRef = useRef(null);

    var PRESETS = [
      { name: t('Streckung', 'Stretch'), m: [[2, 1], [1, 2]] },
      { name: t('Scherung', 'Shear'), m: [[1, 0.9], [0, 1]] },
      { name: t('Drehung', 'Rotation'), m: [[0.5, -0.87], [0.87, 0.5]] }
    ];
    var pre = useState(0); var setPre = pre[1]; pre = pre[0];
    var ang = useState(0.5); var setAng = ang[1]; ang = ang[0];

    var m = PRESETS[pre].m;
    var a = m[0][0], b = m[0][1], c = m[1][0], d = m[1][1];

    // 2x2 eigen-decomposition
    var tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
    var real = disc >= -1e-9;
    var evecs = [];
    var evals = [];
    if (real) {
      var sq = Math.sqrt(Math.max(0, disc));
      [(tr + sq) / 2, (tr - sq) / 2].forEach(function (lam) {
        evals.push(lam);
        var ex = b, ey = lam - a;
        if (Math.abs(ex) < 1e-6 && Math.abs(ey) < 1e-6) { ex = lam - d; ey = c; }
        var n = Math.hypot(ex, ey) || 1;
        evecs.push([ex / n, ey / n]);
      });
    }

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, W, Hh);
      ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);

      // grid + axes
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
      for (var g = -3; g <= 3; g++) {
        ctx.beginPath(); ctx.moveTo(CX + g * S, 30); ctx.lineTo(CX + g * S, Hh - 30); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(30, CY + g * S); ctx.lineTo(W - 30, CY + g * S); ctx.stroke();
      }
      ctx.strokeStyle = '#374151'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(CX, 30); ctx.lineTo(CX, Hh - 30); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(30, CY); ctx.lineTo(W - 30, CY); ctx.stroke();

      function toCanvas(v) { return [CX + v[0] * S, CY - v[1] * S]; }
      function arrow(v, color, width) {
        var p = toCanvas(v);
        ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width;
        ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(p[0], p[1]); ctx.stroke();
        var anG = Math.atan2(p[1] - CY, p[0] - CX);
        ctx.beginPath();
        ctx.moveTo(p[0], p[1]);
        ctx.lineTo(p[0] - 9 * Math.cos(anG - 0.4), p[1] - 9 * Math.sin(anG - 0.4));
        ctx.lineTo(p[0] - 9 * Math.cos(anG + 0.4), p[1] - 9 * Math.sin(anG + 0.4));
        ctx.closePath(); ctx.fill();
      }

      // eigen-direction lines
      if (real) {
        evecs.forEach(function (ev) {
          ctx.strokeStyle = 'rgba(245,158,11,0.35)'; ctx.lineWidth = 1.5;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.moveTo(CX - ev[0] * S * 3, CY + ev[1] * S * 3);
          ctx.lineTo(CX + ev[0] * S * 3, CY - ev[1] * S * 3);
          ctx.stroke(); ctx.setLineDash([]);
        });
      }

      // input + output vectors
      var vx = Math.cos(ang), vy = Math.sin(ang);
      var ov = [a * vx + b * vy, c * vx + d * vy];

      var aligned = false;
      if (real) {
        evecs.forEach(function (ev) {
          if (Math.abs(vx * ev[0] + vy * ev[1]) > 0.985) aligned = true;
        });
      }

      arrow(ov, aligned ? C.teal : C.amber, 2.5);     // output
      arrow([vx, vy], aligned ? C.teal : C.cyan, 2.5); // input

      // label
      ctx.fillStyle = C.dim; ctx.font = '12px Inter, sans-serif';
      ctx.fillText(t('Eingabe', 'Input'), 36, 46);
      ctx.fillStyle = C.amber;
      ctx.fillText(t('Ausgabe = Matrix · Eingabe', 'Output = matrix · input'), 36, 64);
      if (aligned) {
        ctx.fillStyle = C.teal; ctx.font = '600 13px Inter, sans-serif';
        ctx.fillText(t('Eigenrichtung — Ein- und Ausgabe sind parallel', 'Eigendirection — input and output are parallel'), 36, Hh - 16);
      }
    }, [pre, ang, real]);

    return h('div', null,
      h(Panel, null,
        h('div', { style: { display: 'flex', gap: '0.5rem', marginBottom: '0.7rem', flexWrap: 'wrap' } },
          PRESETS.map(function (p, i) {
            return h(Button, { key: i, active: i === pre, onClick: function () { setPre(i); } }, p.name);
          })
        ),
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h(Slider, {
          label: t('Eingabewinkel', 'Input angle'), display: (ang * 180 / Math.PI).toFixed(0) + '°',
          min: 0, max: 6.283, step: 0.01, value: ang, onChange: setAng
        }),
        real
          ? caption(t('Eigenwerte: ', 'Eigenvalues: ') + 'λ₁ = ' + evals[0].toFixed(2) + ', λ₂ = ' + evals[1].toFixed(2) +
              t('. An den gestrichelten Eigenrichtungen behält der Vektor seine Richtung — er wird nur um λ gestreckt.',
                '. Along the dashed eigendirections the vector keeps its direction — it is only scaled by λ.'))
          : caption(t('Diese Drehung besitzt keine reellen Eigenrichtungen: kein Vektor bleibt richtungstreu, weil jeder gedreht wird. Die Eigenwerte sind komplex.',
                'This rotation has no real eigendirections: no vector stays direction-true, because every vector is turned. The eigenvalues are complex.'))
      )
    );
  }
  window.EigenDirections = EigenDirections;

  // =========================================================================
  // 3a. ChladniFigures — 2D-Eigenmoden einer quadratischen Membran
  //     sin(mπx)·sin(nπy); Knotenlinien (Nullstellen) sind die Chladni-Figur.
  // =========================================================================
  function ChladniFigures() {
    var N = 240;
    var canvasRef = useRef(null);
    var mm = useState(2); var setMm = mm[1]; mm = mm[0];
    var nn = useState(3); var setNn = nn[1]; nn = nn[0];

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = N * dpr; canvas.height = N * dpr;
      canvas.style.width = '100%'; canvas.style.maxWidth = N + 'px'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var img = ctx.createImageData(N, N);
      for (var py = 0; py < N; py++) {
        for (var px = 0; px < N; px++) {
          var x = px / (N - 1), y = py / (N - 1);
          var amp = Math.sin(mm * Math.PI * x) * Math.sin(nn * Math.PI * y);
          var near = Math.abs(amp) < 0.06; // node line
          var idx = (py * N + px) * 4;
          if (near) {
            img.data[idx] = 245; img.data[idx + 1] = 158; img.data[idx + 2] = 11; // amber node
          } else {
            var v = amp > 0 ? amp : -amp;
            var t = Math.floor(v * 90);
            if (amp > 0) { img.data[idx] = 12; img.data[idx + 1] = 40 + t; img.data[idx + 2] = 60 + t; }
            else { img.data[idx] = 12; img.data[idx + 1] = 18; img.data[idx + 2] = 40 + t; }
          }
          img.data[idx + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    }, [mm, nn]);

    return h('div', null,
      h(Panel, null,
        h('div', { style: { textAlign: 'center' } },
          h('canvas', { ref: canvasRef, style: { display: 'inline-block', borderRadius: '0.5rem', border: '1px solid ' + C.grid } })
        ),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '0.8rem' } },
          h(Slider, { label: t('Mode m (x-Richtung)', 'Mode m (x-direction)'), display: String(mm), min: 1, max: 7, step: 1, value: mm, onChange: function (v) { setMm(Math.round(v)); } }),
          h(Slider, { label: t('Mode n (y-Richtung)', 'Mode n (y-direction)'), display: String(nn), min: 1, max: 7, step: 1, value: nn, onChange: function (v) { setNn(Math.round(v)); } })
        ),
        caption(t('Eigenmode (m, n) einer schwingenden Platte: ψ(x,y) = sin(mπx)·sin(nπy). Die orangenen Linien sind die Knotenlinien, auf denen die Platte ruht — die Chladni-Figur. Nur diskrete (m, n) sind erlaubt; das ist dieselbe Quantisierung wie bei den Energieniveaus eines Atoms.',
          'Eigenmode (m, n) of a vibrating plate: ψ(x,y) = sin(mπx)·sin(nπy). The orange lines are the nodal lines on which the plate stays at rest — the Chladni figure. Only discrete (m, n) are allowed; this is the same quantisation as the energy levels of an atom.'))
      )
    );
  }
  window.ChladniFigures = ChladniFigures;

  // =========================================================================
  // 3b. FourierSynthesis — beliebige Welle aus Sinus-Eigenfunktionen
  //     Rechteck- bzw. Sägezahnwelle, Term für Term aufgebaut.
  // =========================================================================
  function FourierSynthesis() {
    var W = 720, Hh = 280;
    var canvasRef = useRef(null);
    var terms = useState(3); var setTerms = terms[1]; terms = terms[0];
    var wave = useState('square'); var setWave = wave[1]; wave = wave[0];

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, W, Hh); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);
      var midY = Hh / 2, ampPx = Hh / 2 - 30, x0 = 20, ww = W - 40;

      ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x0, midY); ctx.lineTo(x0 + ww, midY); ctx.stroke();

      function target(u) { // u in [0,1)
        if (wave === 'square') return u < 0.5 ? 1 : -1;
        return 1 - 2 * u; // sawtooth
      }
      function partial(u) {
        var s = 0, x = 2 * Math.PI * u;
        for (var k = 1; k <= terms; k++) {
          if (wave === 'square') {
            var n = 2 * k - 1; s += (4 / Math.PI) * Math.sin(n * x) / n;
          } else {
            s += (2 / Math.PI) * Math.sin(k * x) / k * (k % 2 ? 1 : -1) * -1;
          }
        }
        return s;
      }

      // target (faint)
      ctx.strokeStyle = 'rgba(148,163,184,0.35)'; ctx.lineWidth = 1.5; ctx.beginPath();
      for (var i = 0; i <= ww; i++) {
        var u0 = i / ww, yy = midY - target(u0) * ampPx;
        if (i === 0) ctx.moveTo(x0 + i, yy); else ctx.lineTo(x0 + i, yy);
      }
      ctx.stroke();

      // partial sum (bright)
      ctx.strokeStyle = C.cyan; ctx.lineWidth = 2.5; ctx.beginPath();
      for (var j = 0; j <= ww; j++) {
        var tt = j / ww, y2 = midY - partial(tt) * ampPx;
        if (j === 0) ctx.moveTo(x0 + j, y2); else ctx.lineTo(x0 + j, y2);
      }
      ctx.stroke();

      ctx.fillStyle = C.dim; ctx.font = '11px Inter, sans-serif';
      ctx.fillText(t('grau: Zielkurve · cyan: Summe aus ' + terms + ' Sinus-Termen', 'grey: target curve · cyan: sum of ' + terms + ' sine terms'), x0, 16);
    }, [terms, wave]);

    return h('div', null,
      h(Panel, null,
        h('div', { style: { display: 'flex', gap: '0.5rem', marginBottom: '0.7rem' } },
          h(Button, { active: wave === 'square', onClick: function () { setWave('square'); } }, t('Rechteck', 'Square')),
          h(Button, { active: wave === 'saw', onClick: function () { setWave('saw'); } }, t('Sägezahn', 'Sawtooth'))
        ),
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h(Slider, { label: t('Anzahl Sinus-Terme', 'Number of sine terms'), display: String(terms), min: 1, max: 40, step: 1, value: terms, onChange: function (v) { setTerms(Math.round(v)); } }),
        caption(t('Jede periodische Kurve ist eine Summe von Sinus-Eigenfunktionen. Mit wachsender Termzahl nähert sich die Summe der Zielkurve; an den Sprungstellen bleibt das Gibbs-Überschwingen sichtbar.',
          'Every periodic curve is a sum of sine eigenfunctions. As the number of terms grows, the sum approaches the target curve; at the jumps the Gibbs overshoot remains visible.'))
      )
    );
  }
  window.FourierSynthesis = FourierSynthesis;

  // =========================================================================
  // 4a. PCARotation — Hauptachsen einer Datenwolke
  //     Korrelations-Slider streckt/dreht die Wolke; die zwei Hauptachsen
  //     sind die Eigenvektoren der Kovarianzmatrix, Länge ~ sqrt(Eigenwert).
  // =========================================================================
  function PCARotation() {
    var W = 460, Hh = 380, CX = 230, CY = 190, S = 26;
    var canvasRef = useRef(null);
    var rho = useState(0.8); var setRho = rho[1]; rho = rho[0];

    // fixed gaussian sample (deterministic) reshaped by correlation
    var base = React.useMemo(function () {
      var pts = [], seed = 1234;
      function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
      function gauss() { var u = rnd() || 1e-9, v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
      for (var i = 0; i < 220; i++) pts.push([gauss(), gauss()]);
      return pts;
    }, []);

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, Hh); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);

      // shape data: x' = x, y' = rho*x + sqrt(1-rho^2)*y  (correlation rho)
      var sx = 3.0, sy = 1.4;
      var data = base.map(function (p) {
        var x = p[0] * sx;
        var y = (rho * p[0] + Math.sqrt(Math.max(0, 1 - rho * rho)) * p[1]) * sy * 2.2;
        return [x, y];
      });

      // covariance
      var mx = 0, my = 0; data.forEach(function (d) { mx += d[0]; my += d[1]; });
      mx /= data.length; my /= data.length;
      var cxx = 0, cyy = 0, cxy = 0;
      data.forEach(function (d) { var dx = d[0] - mx, dy = d[1] - my; cxx += dx * dx; cyy += dy * dy; cxy += dx * dy; });
      cxx /= data.length; cyy /= data.length; cxy /= data.length;

      // eigen of symmetric 2x2 [[cxx,cxy],[cxy,cyy]]
      var tr = cxx + cyy, det = cxx * cyy - cxy * cxy;
      var disc = Math.sqrt(Math.max(0, tr * tr - 4 * det));
      var l1 = (tr + disc) / 2, l2 = (tr - disc) / 2;
      function evec(l) { var ex = cxy, ey = l - cxx; if (Math.abs(ex) < 1e-6 && Math.abs(ey) < 1e-6) { ex = 1; ey = 0; } var n = Math.hypot(ex, ey); return [ex / n, ey / n]; }
      var v1 = evec(l1), v2 = evec(l2);

      // axes grid
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(20, CY); ctx.lineTo(W - 20, CY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(CX, 20); ctx.lineTo(CX, Hh - 20); ctx.stroke();

      // points
      ctx.fillStyle = 'rgba(34,211,238,0.55)';
      data.forEach(function (d) {
        ctx.beginPath(); ctx.arc(CX + (d[0] - mx) * S, CY - (d[1] - my) * S, 2.4, 0, Math.PI * 2); ctx.fill();
      });

      // principal axes
      function drawAxis(v, l, color, label) {
        var len = Math.sqrt(Math.max(l, 0)) * S * 1.4;
        ctx.strokeStyle = color; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(CX - v[0] * len, CY + v[1] * len);
        ctx.lineTo(CX + v[0] * len, CY - v[1] * len);
        ctx.stroke();
        ctx.fillStyle = color; ctx.font = '600 12px Inter, sans-serif';
        ctx.fillText(label, CX + v[0] * len + 6, CY - v[1] * len);
      }
      drawAxis(v1, l1, C.amber, t('1. Hauptachse', '1st principal axis'));
      drawAxis(v2, l2, C.teal, t('2. Hauptachse', '2nd principal axis'));

      var pctTotal = l1 + l2;
      ctx.fillStyle = C.dim; ctx.font = '11px Inter, sans-serif';
      ctx.fillText(t('erste Achse erklärt ' + (100 * l1 / pctTotal).toFixed(0) + ' % der Streuung', 'first axis explains ' + (100 * l1 / pctTotal).toFixed(0) + ' % of the variance'), 24, Hh - 14);
    }, [rho, base]);

    return h('div', null,
      h(Panel, null,
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h(Slider, { label: t('Korrelation der Daten', 'Correlation of the data'), display: rho.toFixed(2), min: 0, max: 0.98, step: 0.02, value: rho, onChange: setRho }),
        caption(t('Die Hauptachsen sind die Eigenvektoren der Kovarianzmatrix. Die erste Achse (orange) zeigt in die Richtung größter Streuung, die zweite (teal) steht senkrecht dazu. Je stärker die Korrelation, desto mehr Information steckt allein in der ersten Achse.',
          'The principal axes are the eigenvectors of the covariance matrix. The first axis (orange) points along the direction of greatest spread, the second (teal) is perpendicular to it. The stronger the correlation, the more information sits in the first axis alone.'))
      )
    );
  }
  window.PCARotation = PCARotation;

  // =========================================================================
  // 4b. EigenfacesExplorer — Gesicht als Mittelwert + Σ Gewicht·Eigengesicht
  //     Prozedurale Demonstration: wenige Achsen erzeugen viele Gesichter.
  // =========================================================================
  function EigenfacesExplorer() {
    var c1 = useState(0); var setC1 = c1[1]; c1 = c1[0];
    var c2 = useState(0); var setC2 = c2[1]; c2 = c2[0];
    var c3 = useState(0); var setC3 = c3[1]; c3 = c3[0];
    var canvasRef = useRef(null);

    function drawFace(ctx, ox, oy, sc, w, eyeGap, smile, label, dim) {
      ctx.save(); ctx.translate(ox, oy);
      ctx.strokeStyle = dim ? C.track : C.cyan; ctx.lineWidth = 2; ctx.fillStyle = 'rgba(34,211,238,0.05)';
      // head
      ctx.beginPath(); ctx.ellipse(0, 0, 34 * sc * w, 44 * sc, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      // eyes
      ctx.fillStyle = dim ? C.track : C.cyan;
      ctx.beginPath(); ctx.arc(-13 * sc * eyeGap, -8 * sc, 3.5 * sc, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(13 * sc * eyeGap, -8 * sc, 3.5 * sc, 0, Math.PI * 2); ctx.fill();
      // nose
      ctx.strokeStyle = dim ? C.track : C.cyan; ctx.beginPath(); ctx.moveTo(0, -2 * sc); ctx.lineTo(0, 8 * sc); ctx.stroke();
      // mouth
      ctx.beginPath(); ctx.moveTo(-12 * sc, 20 * sc); ctx.quadraticCurveTo(0, (20 + smile * 12) * sc, 12 * sc, 20 * sc); ctx.stroke();
      if (label) { ctx.fillStyle = C.dim; ctx.font = '10px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.fillText(label, 0, 64 * sc); ctx.textAlign = 'left'; }
      ctx.restore();
    }

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var W = 460, Hh = 300;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, Hh); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);

      // basis row (mean + 3 eigenfaces), dimmed
      drawFace(ctx, 70, 70, 0.5, 1, 1, 0, t('Mittelwert', 'Mean'), false);
      drawFace(ctx, 170, 70, 0.5, 1.35, 1, 0, t('Eigengesicht 1', 'Eigenface 1'), true);
      drawFace(ctx, 270, 70, 0.5, 1, 1.6, 0, t('Eigengesicht 2', 'Eigenface 2'), true);
      drawFace(ctx, 370, 70, 0.5, 1, 1, 1, t('Eigengesicht 3', 'Eigenface 3'), true);

      ctx.strokeStyle = C.grid; ctx.beginPath(); ctx.moveTo(20, 130); ctx.lineTo(W - 20, 130); ctx.stroke();
      ctx.fillStyle = C.amber; ctx.font = '600 12px Inter, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(t('= rekonstruiertes Gesicht', '= reconstructed face'), W / 2, 150); ctx.textAlign = 'left';

      // reconstruction
      var w = 1 + 0.35 * c1, eyeGap = 1 + 0.6 * c2, smile = c3;
      drawFace(ctx, W / 2, 225, 1.0, w, eyeGap, smile, '', false);
    }, [c1, c2, c3]);

    return h('div', null,
      h(Panel, null,
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '0.7rem' } },
          h(Slider, { label: t('Gewicht c₁', 'Weight c₁'), display: c1.toFixed(1), min: -1, max: 1, step: 0.1, value: c1, onChange: setC1 }),
          h(Slider, { label: t('Gewicht c₂', 'Weight c₂'), display: c2.toFixed(1), min: -1, max: 1, step: 0.1, value: c2, onChange: setC2 }),
          h(Slider, { label: t('Gewicht c₃', 'Weight c₃'), display: c3.toFixed(1), min: -1, max: 1, step: 0.1, value: c3, onChange: setC3 })
        ),
        caption(t('Jedes Gesicht entsteht als Mittelwertgesicht plus gewichtete Summe weniger Eigengesichter: Gesicht = Mittel + c₁·E₁ + c₂·E₂ + c₃·E₃. Drei Zahlen genügen hier für eine ganze Familie von Gesichtern — bei echten Systemen sind es einige Dutzend. Dies ist PCA, angewandt auf Bilder.',
          'Each face is the mean face plus a weighted sum of a few eigenfaces: face = mean + c₁·E₁ + c₂·E₂ + c₃·E₃. Three numbers suffice here for a whole family of faces — in real systems it is a few dozen. This is PCA applied to images.'))
      )
    );
  }
  window.EigenfacesExplorer = EigenfacesExplorer;

  // =========================================================================
  // 5a. MarkovConvergence — Verteilung konvergiert zur stationären (λ=1)
  // =========================================================================
  function MarkovConvergence() {
    var labels = [t('Sonne', 'Sun'), t('Wolke', 'Cloud'), t('Regen', 'Rain')];
    var colors = [C.amber, C.dim, C.blue];
    // transition matrix P[from][to]
    var P = [[0.7, 0.2, 0.1], [0.3, 0.4, 0.3], [0.2, 0.45, 0.35]];
    var canvasRef = useRef(null);
    var dist = useState([1, 0, 0]); var setDist = dist[1]; dist = dist[0];
    var steps = useState(0); var setSteps = steps[1]; steps = steps[0];

    // stationary (power iteration, once)
    var stat = React.useMemo(function () {
      var d = [1 / 3, 1 / 3, 1 / 3];
      for (var it = 0; it < 500; it++) {
        var nd = [0, 0, 0];
        for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) nd[j] += d[i] * P[i][j];
        d = nd;
      }
      return d;
    }, []);

    function step() {
      var nd = [0, 0, 0];
      for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) nd[j] += dist[i] * P[i][j];
      setDist(nd); setSteps(steps + 1);
    }
    function reset() { setDist([1, 0, 0]); setSteps(0); }

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var W = 460, Hh = 240;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, Hh); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);

      var bw = 90, gap = 50, x0 = 60, base = Hh - 40, maxH = Hh - 80;
      for (var i = 0; i < 3; i++) {
        var x = x0 + i * (bw + gap);
        // stationary marker
        var sy = base - stat[i] * maxH;
        ctx.strokeStyle = C.track; ctx.setLineDash([4, 3]); ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(x - 6, sy); ctx.lineTo(x + bw + 6, sy); ctx.stroke(); ctx.setLineDash([]);
        // bar
        var bh = dist[i] * maxH;
        ctx.fillStyle = colors[i];
        ctx.fillRect(x, base - bh, bw, bh);
        ctx.fillStyle = C.text; ctx.font = '12px Inter, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(labels[i], x + bw / 2, base + 18);
        ctx.fillText((dist[i] * 100).toFixed(0) + ' %', x + bw / 2, base - bh - 8);
      }
      ctx.textAlign = 'left'; ctx.fillStyle = C.dim; ctx.font = '11px Inter, sans-serif';
      ctx.fillText(t('gestrichelt: stationäre Verteilung (Eigenvektor zu λ = 1)', 'dashed: stationary distribution (eigenvector for λ = 1)'), 20, 18);
    }, [dist, stat]);

    return h('div', null,
      h(Panel, null,
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h('div', { style: { display: 'flex', gap: '0.6rem', marginTop: '0.6rem', alignItems: 'center' } },
          h(Button, { active: false, onClick: step }, t('Ein Schritt', 'One step')),
          h(Button, { active: false, onClick: reset }, t('Zurücksetzen', 'Reset')),
          h('span', { style: { color: C.dim, fontSize: '0.8rem' } }, t('Schritt ', 'Step ') + steps)
        ),
        caption(t('Start: ganz sicher Sonne (100 %). Jeder Schritt multipliziert die Verteilung mit der Übergangsmatrix. Unabhängig vom Start konvergiert sie gegen dieselbe stationäre Verteilung — den Eigenvektor zum Eigenwert eins.',
          'Start: certainly sun (100 %). Each step multiplies the distribution by the transition matrix. Regardless of the start, it converges to the same stationary distribution — the eigenvector for eigenvalue one.'))
      )
    );
  }
  window.MarkovConvergence = MarkovConvergence;

  // =========================================================================
  // 5b. PageRankSurfer — Random Walk auf einem kleinen Web-Graph
  // =========================================================================
  function PageRankSurfer() {
    var nodes = [
      { x: 110, y: 70 }, { x: 250, y: 50 }, { x: 360, y: 110 },
      { x: 300, y: 230 }, { x: 150, y: 220 }, { x: 60, y: 150 }
    ];
    var edges = [[0, 1], [0, 5], [1, 2], [1, 3], [2, 3], [3, 4], [4, 0], [4, 5], [5, 0], [2, 1], [3, 1]];
    var canvasRef = useRef(null);
    var visitsRef = useRef(nodes.map(function () { return 0; }));
    var curRef = useRef(0);
    var rafRef = useRef(null);
    var dampRef = useRef(0.85);
    var damp = useState(0.85); var setDamp = damp[1]; damp = damp[0];
    var running = useState(true); var setRunning = running[1]; running = running[0];
    var runRef = useRef(true);
    useEffect(function () { dampRef.current = damp; }, [damp]);
    useEffect(function () { runRef.current = running; }, [running]);

    var outl = React.useMemo(function () {
      return nodes.map(function (_, i) { return edges.filter(function (e) { return e[0] === i; }).map(function (e) { return e[1]; }); });
    }, []);

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var W = 420, Hh = 290;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var tick = 0;

      function frame() {
        if (runRef.current) {
          tick++;
          if (tick % 6 === 0) {
            var cur = curRef.current;
            var jump = Math.random() > dampRef.current || outl[cur].length === 0;
            if (jump) curRef.current = Math.floor(Math.random() * nodes.length);
            else curRef.current = outl[cur][Math.floor(Math.random() * outl[cur].length)];
            visitsRef.current[curRef.current]++;
          }
        }
        var visits = visitsRef.current;
        var total = visits.reduce(function (a, b) { return a + b; }, 0) || 1;

        ctx.clearRect(0, 0, W, Hh); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);
        // edges
        ctx.strokeStyle = C.grid; ctx.lineWidth = 1.2;
        edges.forEach(function (e) {
          var a = nodes[e[0]], b = nodes[e[1]];
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          var anG = Math.atan2(b.y - a.y, b.x - a.x);
          var mx = a.x + (b.x - a.x) * 0.66, my = a.y + (b.y - a.y) * 0.66;
          ctx.fillStyle = C.track;
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(mx - 7 * Math.cos(anG - 0.4), my - 7 * Math.sin(anG - 0.4));
          ctx.lineTo(mx - 7 * Math.cos(anG + 0.4), my - 7 * Math.sin(anG + 0.4));
          ctx.closePath(); ctx.fill();
        });
        // nodes sized by visit frequency
        nodes.forEach(function (n, i) {
          var frac = visits[i] / total;
          var r = 8 + frac * 90;
          ctx.fillStyle = (i === curRef.current) ? C.teal : 'rgba(96,165,250,0.5)';
          ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = C.text; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'center';
          ctx.fillText((frac * 100).toFixed(0) + '%', n.x, n.y + 4);
        });
        ctx.textAlign = 'left';
        rafRef.current = requestAnimationFrame(frame);
      }
      frame();
      return function () { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    return h('div', null,
      h(Panel, null,
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h(Slider, { label: t('Dämpfungsfaktor d', 'Damping factor d'), display: damp.toFixed(2), min: 0.5, max: 0.99, step: 0.01, value: damp, onChange: setDamp }),
        h('div', { style: { display: 'flex', gap: '0.6rem', marginTop: '0.3rem' } },
          h(Button, { active: running, onClick: function () { setRunning(!running); } }, running ? t('Pause', 'Pause') : t('Weiter', 'Resume'))
        ),
        caption(t('Ein zufällig surfender Besucher folgt mit Wahrscheinlichkeit d einem Link und springt sonst auf eine zufällige Seite. Die Aufenthaltshäufigkeit der Knoten konvergiert gegen den PageRank — den dominanten Eigenvektor der Google-Matrix.',
          'A random surfer follows a link with probability d and otherwise jumps to a random page. The visit frequency of the nodes converges to the PageRank — the dominant eigenvector of the Google matrix.'))
      )
    );
  }
  window.PageRankSurfer = PageRankSurfer;

  // =========================================================================
  // 7. GaltonBoard — Normalverteilung emergiert aus Zufall
  // =========================================================================
  function GaltonBoard() {
    var ROWS = 12, BINS = 13;
    var canvasRef = useRef(null);
    var binsRef = useRef(new Array(BINS).fill(0));
    var ballsRef = useRef([]);
    var rafRef = useRef(null);
    var runRef = useRef(true);
    var running = useState(true); var setRunning = running[1]; running = running[0];
    useEffect(function () { runRef.current = running; }, [running]);

    function reset() { binsRef.current = new Array(BINS).fill(0); ballsRef.current = []; }

    useEffect(function () {
      var canvas = canvasRef.current; if (!canvas) return;
      var W = 460, Hh = 380;
      var ctx = canvas.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr; canvas.height = Hh * dpr;
      canvas.style.width = '100%'; canvas.style.height = 'auto';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var topY = 30, pegGap = 26, cx = W / 2, histY = Hh - 90, spawn = 0;

      function frame() {
        spawn++;
        if (runRef.current && spawn % 10 === 0 && ballsRef.current.length < 60) {
          ballsRef.current.push({ x: cx, y: topY, row: 0, off: 0 });
        }
        ctx.clearRect(0, 0, W, Hh); ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, Hh);
        // pegs
        ctx.fillStyle = C.grid;
        for (var r = 0; r < ROWS; r++) {
          for (var p = 0; p <= r; p++) {
            var px = cx + (p - r / 2) * pegGap;
            var py = topY + r * pegGap * 0.7 + 14;
            if (py < histY) { ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill(); }
          }
        }
        // balls
        ctx.fillStyle = C.amber;
        var still = [];
        ballsRef.current.forEach(function (b) {
          if (runRef.current) {
            b.y += 2.2;
            var r2 = Math.floor((b.y - topY) / (pegGap * 0.7));
            if (r2 > b.row && r2 <= ROWS) { b.row = r2; b.off += (Math.random() < 0.5 ? -1 : 1); b.x = cx + b.off * (pegGap / 2); }
          }
          if (b.y >= histY) {
            var bin = Math.round((b.x - cx) / (pegGap / 2) / 1) + Math.floor(BINS / 2);
            bin = Math.max(0, Math.min(BINS - 1, bin));
            binsRef.current[bin]++;
          } else {
            still.push(b);
            ctx.beginPath(); ctx.arc(b.x, b.y, 3.5, 0, Math.PI * 2); ctx.fill();
          }
        });
        ballsRef.current = still;
        // histogram
        var maxB = Math.max(1, Math.max.apply(null, binsRef.current));
        var binW = W / BINS;
        for (var k = 0; k < BINS; k++) {
          var hh = (binsRef.current[k] / maxB) * 70;
          ctx.fillStyle = C.cyan;
          ctx.fillRect(k * binW + 3, Hh - 20 - hh, binW - 6, hh);
        }
        // gaussian overlay
        var total = binsRef.current.reduce(function (a, b) { return a + b; }, 0);
        if (total > 20) {
          ctx.strokeStyle = C.amber; ctx.lineWidth = 2; ctx.beginPath();
          var mu = (BINS - 1) / 2, sigma = Math.sqrt(ROWS) / 2;
          for (var xx = 0; xx <= BINS - 1; xx += 0.1) {
            var g = Math.exp(-0.5 * Math.pow((xx - mu) / sigma, 2));
            var gx = xx * binW + binW / 2;
            var gy = Hh - 20 - g * 70;
            if (xx === 0) ctx.moveTo(gx, gy); else ctx.lineTo(gx, gy);
          }
          ctx.stroke();
        }
        rafRef.current = requestAnimationFrame(frame);
      }
      frame();
      return function () { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    return h('div', null,
      h(Panel, null,
        h('canvas', { ref: canvasRef, style: { display: 'block', width: '100%' } }),
        h('div', { style: { display: 'flex', gap: '0.6rem', marginTop: '0.5rem' } },
          h(Button, { active: running, onClick: function () { setRunning(!running); } }, running ? t('Pause', 'Pause') : t('Weiter', 'Resume')),
          h(Button, { active: false, onClick: reset }, t('Zurücksetzen', 'Reset'))
        ),
        caption(t('Jede Kugel trifft an jedem Nagel eine zufällige Links-rechts-Entscheidung. Die Summe vieler solcher unabhängiger Entscheidungen ergibt fast immer dieselbe Form: die Glockenkurve (orange). Das ist der Zentrale Grenzwertsatz.',
          'At each peg every ball makes a random left-right decision. The sum of many such independent decisions almost always yields the same shape: the bell curve (orange). This is the Central Limit Theorem.'))
      )
    );
  }
  window.GaltonBoard = GaltonBoard;

})();
