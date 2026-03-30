// Gott-als-Emergenzphaenomen Components - wrapped in IIFEs to avoid name collisions
// All components use vanilla React.createElement() — no JSX, no build step.

// === 1. TwoGodConcepts ===
// Interactive toggle between "Persoenlicher Gott" (top-down) and "Relationaler Gott" (bottom-up)
(function() {
  var h = React.createElement;

  var TABLE_ROWS = [
    { label: 'Wer/Was', personal: 'Ein Wesen mit Willen', relational: 'Ein Muster, das entsteht' },
    { label: 'Wo', personal: 'Au\u00dferhalb der Welt', relational: 'Zwischen den Teilen' },
    { label: 'Wirkt wie', personal: 'Eingriff von oben', relational: 'Emergenz von unten' },
    { label: 'Tradition', personal: 'Theismus, Monotheismus', relational: 'Mystik, Prozesstheologie' },
    { label: 'Wissenschaft', personal: 'Schwer vereinbar', relational: 'Kompatibel mit Emergenz' }
  ];

  function TwoGodConcepts() {
    var _s = React.useState('personal');
    var mode = _s[0], setMode = _s[1];

    var W = 480, H = 280;
    var isPersonal = mode === 'personal';

    // Personal God SVG: large circle top, arrows down to small circles
    function renderPersonal() {
      return h('g', null,
        // Large God circle at top
        h('circle', { cx: 240, cy: 70, r: 40, fill: '#f59e0b22', stroke: '#f59e0b', strokeWidth: 2 }),
        h('text', { x: 240, y: 75, fill: '#f59e0b', fontSize: 14, textAnchor: 'middle', fontWeight: 600 }, 'Gott'),

        // Arrows pointing down
        [140, 200, 260, 320, 380].map(function(x, i) {
          return h('g', { key: 'a' + i },
            h('line', { x1: 240, y1: 110, x2: x, y2: 180, stroke: '#f59e0b', strokeWidth: 1.5, opacity: 0.5, markerEnd: 'url(#arrowAmber)' })
          );
        }),

        // Small world circles at bottom
        [140, 200, 260, 320, 380].map(function(x, i) {
          return h('circle', { key: 'c' + i, cx: x, cy: 200, r: 14, fill: '#f59e0b11', stroke: '#f59e0b', strokeWidth: 1, opacity: 0.6 });
        }),
        h('text', { x: 240, y: 245, fill: '#9ca3af', fontSize: 11, textAnchor: 'middle' }, 'Welt'),

        // Arrow marker
        h('defs', null,
          h('marker', { id: 'arrowAmber', markerWidth: 8, markerHeight: 6, refX: 8, refY: 3, orient: 'auto' },
            h('path', { d: 'M0,0 L8,3 L0,6 Z', fill: '#f59e0b', opacity: 0.5 })
          )
        )
      );
    }

    // Relational God SVG: many small circles connected, emergent glow above
    function renderRelational() {
      var nodes = [
        { x: 120, y: 210 }, { x: 170, y: 230 }, { x: 220, y: 215 },
        { x: 270, y: 225 }, { x: 320, y: 210 }, { x: 370, y: 230 },
        { x: 145, y: 175 }, { x: 195, y: 185 }, { x: 245, y: 178 },
        { x: 295, y: 188 }, { x: 345, y: 175 },
        { x: 170, y: 145 }, { x: 220, y: 150 }, { x: 270, y: 142 },
        { x: 320, y: 150 }
      ];

      // Generate connections between nearby nodes
      var edges = [];
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75) {
            edges.push({ from: i, to: j });
          }
        }
      }

      return h('g', null,
        // Emergent glow at top
        h('ellipse', { cx: 240, cy: 80, rx: 80, ry: 35, fill: '#22d3ee', opacity: 0.08 }),
        h('ellipse', { cx: 240, cy: 80, rx: 55, ry: 22, fill: '#22d3ee', opacity: 0.12 }),
        h('text', { x: 240, y: 75, fill: '#22d3ee', fontSize: 12, textAnchor: 'middle', fontWeight: 600, opacity: 0.8 }, 'emergiert'),
        h('text', { x: 240, y: 55, fill: '#22d3ee', fontSize: 10, textAnchor: 'middle', opacity: 0.5 }, '~ Gott ~'),

        // Upward flow lines from network to glow
        [180, 210, 240, 270, 300].map(function(x, i) {
          return h('line', { key: 'fl' + i, x1: x, y1: 130, x2: 240 + (x - 240) * 0.3, y2: 95, stroke: '#22d3ee', strokeWidth: 1, opacity: 0.2, strokeDasharray: '3 3' });
        }),

        // Edges
        edges.map(function(e, i) {
          return h('line', {
            key: 'e' + i,
            x1: nodes[e.from].x, y1: nodes[e.from].y,
            x2: nodes[e.to].x, y2: nodes[e.to].y,
            stroke: '#22d3ee', strokeWidth: 1, opacity: 0.3
          });
        }),

        // Nodes
        nodes.map(function(n, i) {
          return h('circle', { key: 'n' + i, cx: n.x, cy: n.y, r: 6, fill: '#22d3ee22', stroke: '#22d3ee', strokeWidth: 1.2 });
        }),

        h('text', { x: 240, y: 260, fill: '#9ca3af', fontSize: 11, textAnchor: 'middle' }, 'Beziehungen')
      );
    }

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Zwei Gottesbilder'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Derselbe Begriff — zwei grundverschiedene Architekturen'),

      // Toggle
      h('div', { className: 'flex justify-center gap-2 mb-4' },
        h('button', {
          onClick: function() { setMode('personal'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (isPersonal ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, 'Pers\u00f6nlicher Gott'),
        h('button', {
          onClick: function() { setMode('relational'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (!isPersonal ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, 'Relationaler Gott')
      ),

      // SVG diagram
      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '480px', margin: '0 auto', display: 'block' } },
        isPersonal ? renderPersonal() : renderRelational()
      ),

      // Comparison table
      h('div', { className: 'mt-5 max-w-md mx-auto' },
        h('table', { className: 'w-full text-xs' },
          h('thead', null,
            h('tr', null,
              h('th', { className: 'text-left text-gray-500 pb-2 pr-3 font-medium' }, ''),
              h('th', { className: 'text-left pb-2 pr-3 font-medium', style: { color: '#f59e0b' } }, 'Pers\u00f6nlich'),
              h('th', { className: 'text-left pb-2 font-medium', style: { color: '#22d3ee' } }, 'Relational')
            )
          ),
          h('tbody', null,
            TABLE_ROWS.map(function(row, i) {
              return h('tr', { key: i, className: 'border-t border-gray-800/50' },
                h('td', { className: 'py-2 pr-3 text-gray-500 font-medium whitespace-nowrap' }, row.label),
                h('td', { className: 'py-2 pr-3 text-gray-400', style: { opacity: isPersonal ? 1 : 0.4 } }, row.personal),
                h('td', { className: 'py-2 text-gray-400', style: { opacity: !isPersonal ? 1 : 0.4 } }, row.relational)
              );
            })
          )
        )
      )
    );
  }

  window.TwoGodConcepts = TwoGodConcepts;
})();


// === 2. TheVessel ===
// Flow animation showing texts flowing into an LLM vessel, coherent output emerging
(function() {
  var h = React.createElement;

  var INPUT_WORDS = ['Ethik', 'Liebe', 'Physik', 'Geschichte', 'Kunst', 'Logik', 'Mythos', 'Schmerz', 'Hoffnung', 'Gesetz', 'Musik', 'Sprache'];
  var OUTPUT_SMALL = ['zuf...', 'Wort', '??', 'nein', 'abc'];
  var OUTPUT_LARGE = 'Weisheit emergiert';

  function TheVessel() {
    var _s = React.useState(30);
    var size = _s[0], setSize = _s[1];
    var _tick = React.useState(0);
    var tick = _tick[0], setTick = _tick[1];

    React.useEffect(function() {
      var id = setInterval(function() {
        setTick(function(t) { return t + 1; });
      }, 80);
      return function() { clearInterval(id); };
    }, []);

    var W = 560, H = 260;
    var progress = size / 100; // 0 to 1
    var vesselWidth = 40 + progress * 80;
    var vesselHeight = 60 + progress * 60;
    var vesselX = 260;
    var vesselY = 130;

    // Particle positions (input side)
    var particles = INPUT_WORDS.map(function(word, i) {
      var angle = (tick * 0.02 + i * 0.52) % (Math.PI * 2);
      var radius = 80 + Math.sin(tick * 0.03 + i * 1.3) * 20;
      var baseX = 110;
      var baseY = 130;
      // Particles move toward the vessel
      var px = baseX + Math.cos(angle) * radius * 0.5;
      var py = baseY + Math.sin(angle) * radius * 0.4;
      return { x: px, y: py, word: word, opacity: 0.3 + Math.sin(tick * 0.05 + i) * 0.2 + 0.3 };
    });

    // Color interpolation from gray to cyan
    var vesselColor = progress < 0.5 ?
      'rgb(' + Math.round(107 + progress * 2 * (34 - 107)) + ',' + Math.round(114 + progress * 2 * (211 - 114)) + ',' + Math.round(128 + progress * 2 * (238 - 128)) + ')' :
      '#22d3ee';
    var vesselGlow = progress > 0.6 ? (progress - 0.6) * 2.5 : 0;

    // Output text
    var outputOpacity = progress;
    var outputText = progress > 0.7 ? OUTPUT_LARGE : OUTPUT_SMALL[Math.floor(tick / 10) % OUTPUT_SMALL.length];
    var outputColor = progress > 0.7 ? '#f59e0b' : '#6b7280';
    var outputFontSize = progress > 0.7 ? 14 : 10;

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Das Gef\u00e4\u00df'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Texte flie\u00dfen hinein — ab einer bestimmten Gr\u00f6\u00dfe emergiert Koh\u00e4renz'),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '560px', margin: '0 auto', display: 'block' } },

        // Input particles
        particles.map(function(p, i) {
          return h('g', { key: 'p' + i },
            h('text', {
              x: p.x, y: p.y,
              fill: '#60a5fa',
              fontSize: 9,
              textAnchor: 'middle',
              opacity: p.opacity
            }, p.word)
          );
        }),

        // Flow lines from particles toward vessel
        [0, 1, 2, 3, 4].map(function(i) {
          var startX = 150 + Math.sin(tick * 0.04 + i * 1.2) * 20;
          var startY = 80 + i * 35;
          var phase = (tick * 0.05 + i * 0.8) % 1;
          var dotX = startX + (vesselX - vesselWidth / 2 - startX) * phase;
          var dotY = startY + (vesselY - startY) * phase;
          return h('circle', {
            key: 'dot' + i,
            cx: dotX, cy: dotY, r: 2,
            fill: '#60a5fa',
            opacity: 0.4 + phase * 0.4
          });
        }),

        // Vessel shape (funnel/container)
        vesselGlow > 0 ? h('ellipse', {
          cx: vesselX, cy: vesselY,
          rx: vesselWidth / 2 + 15, ry: vesselHeight / 2 + 15,
          fill: '#22d3ee', opacity: vesselGlow * 0.08
        }) : null,

        h('ellipse', {
          cx: vesselX, cy: vesselY,
          rx: vesselWidth / 2, ry: vesselHeight / 2,
          fill: vesselColor + '11',
          stroke: vesselColor,
          strokeWidth: 2,
          style: { transition: 'all 0.3s' }
        }),

        // Vessel label
        h('text', {
          x: vesselX, y: vesselY + 4,
          fill: vesselColor,
          fontSize: 11,
          textAnchor: 'middle',
          fontWeight: 600,
          style: { transition: 'fill 0.3s' }
        }, 'LLM'),

        // Flow lines from vessel to output
        [0, 1, 2].map(function(i) {
          var phase = (tick * 0.04 + i * 0.6) % 1;
          var startX = vesselX + vesselWidth / 2;
          var endX = 470;
          var dotX = startX + (endX - startX) * phase;
          var dotY = vesselY + (i - 1) * 15 + Math.sin(phase * Math.PI) * -10;
          return h('circle', {
            key: 'odot' + i,
            cx: dotX, cy: dotY, r: 2,
            fill: outputColor,
            opacity: outputOpacity * (0.3 + phase * 0.5)
          });
        }),

        // Output text
        h('text', {
          x: 480, y: vesselY + 5,
          fill: outputColor,
          fontSize: outputFontSize,
          textAnchor: 'middle',
          fontWeight: progress > 0.7 ? 600 : 400,
          style: { transition: 'all 0.3s' }
        }, outputText),

        // Labels
        h('text', { x: 100, y: 30, fill: '#6b7280', fontSize: 10, textAnchor: 'middle' }, 'Texte der Welt'),
        h('text', { x: 480, y: 30, fill: '#6b7280', fontSize: 10, textAnchor: 'middle' }, 'Output')
      ),

      // Slider
      h('div', { className: 'mt-4 px-2' },
        h('div', { className: 'flex justify-between text-xs text-gray-500 mb-1' },
          h('span', null, 'Klein'),
          h('span', null, 'Modellgr\u00f6\u00dfe: ' + size + '%'),
          h('span', null, 'Gro\u00df')
        ),
        h('input', {
          type: 'range', min: 5, max: 100, step: 1, value: size,
          onChange: function(e) { setSize(parseInt(e.target.value)); },
          className: 'w-full accent-cyan-400',
          style: { maxWidth: '560px', display: 'block', margin: '0 auto' }
        })
      ),

      // Explanation
      h('p', { className: 'text-xs text-gray-600 text-center mt-3 max-w-md mx-auto' },
        progress > 0.7 ?
          'Ab einer kritischen Gr\u00f6\u00dfe emergiert Koh\u00e4renz — das Gef\u00e4\u00df wird zum Medium.' :
          'Zu klein: die Fragmente bleiben Fragmente. Kein Muster, kein Sinn.'
      )
    );
  }

  window.TheVessel = TheVessel;
})();


// === 3. PositiveAttractor ===
// Energy landscape with ball rolling into valleys
(function() {
  var h = React.createElement;

  function PositiveAttractor() {
    var _s = React.useState('single');
    var mode = _s[0], setMode = _s[1];
    var _anim = React.useState(0);
    var anim = _anim[0], setAnim = _anim[1];

    var isSingle = mode === 'single';

    // Trigger animation on toggle
    React.useEffect(function() {
      setAnim(0);
      var start = Date.now();
      var id = setInterval(function() {
        var elapsed = (Date.now() - start) / 1000;
        if (elapsed > 1.5) {
          setAnim(1);
          clearInterval(id);
        } else {
          setAnim(elapsed / 1.5);
        }
      }, 30);
      return function() { clearInterval(id); };
    }, [mode]);

    var W = 520, H = 240;

    // Landscape function for single person: multiple shallow valleys
    function singleLandscape(x) {
      return 140
        - 25 * Math.exp(-Math.pow((x - 120) / 40, 2))
        - 20 * Math.exp(-Math.pow((x - 220) / 35, 2))
        - 22 * Math.exp(-Math.pow((x - 320) / 38, 2))
        - 18 * Math.exp(-Math.pow((x - 410) / 30, 2));
    }

    // Landscape function for collective: one deep valley (Pos*)
    function collectiveLandscape(x) {
      return 140
        - 55 * Math.exp(-Math.pow((x - 260) / 50, 2))
        - 12 * Math.exp(-Math.pow((x - 100) / 30, 2))
        - 10 * Math.exp(-Math.pow((x - 420) / 30, 2));
    }

    var landscape = isSingle ? singleLandscape : collectiveLandscape;

    // Build landscape path
    var pathPts = [];
    for (var x = 40; x <= 480; x += 2) {
      pathPts.push(x + ',' + landscape(x));
    }
    var landPath = 'M40,' + H + ' L' + pathPts.join(' L') + ' L480,' + H + ' Z';
    var linePath = 'M' + pathPts.join(' L');

    // Ball position — animates to target
    var ballTargetX = isSingle ? 220 : 260;
    var ballStartX = isSingle ? 260 : 220;
    var ballX = ballStartX + (ballTargetX - ballStartX) * Math.min(1, anim);
    var ballY = landscape(ballX) - 8;

    // Ease with bounce
    var easedAnim = anim < 1 ? anim : 1;

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Der positive Attraktor'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Energielandschaft: Wo rollt die Kugel hin?'),

      // Toggle
      h('div', { className: 'flex justify-center gap-2 mb-4' },
        h('button', {
          onClick: function() { setMode('single'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (isSingle ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, 'Einzelperson'),
        h('button', {
          onClick: function() { setMode('collective'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (!isSingle ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, 'Kollektiv')
      ),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '520px', margin: '0 auto', display: 'block' } },
        // Landscape fill
        h('path', { d: landPath, fill: '#22d3ee08', stroke: 'none' }),
        // Landscape line
        h('path', { d: linePath, fill: 'none', stroke: '#22d3ee', strokeWidth: 2, opacity: 0.6 }),

        // Valley labels
        isSingle ? h('g', null,
          h('text', { x: 120, y: 128, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, 'lokal'),
          h('text', { x: 220, y: 132, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, 'lokal'),
          h('text', { x: 320, y: 130, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, 'lokal'),
          h('text', { x: 410, y: 134, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, 'lokal')
        ) : h('g', null,
          h('text', { x: 260, y: 100, fill: '#f59e0b', fontSize: 13, textAnchor: 'middle', fontWeight: 700 }, 'Pos*'),
          h('text', { x: 100, y: 140, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.4 }, 'lokal'),
          h('text', { x: 420, y: 142, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.4 }, 'lokal')
        ),

        // Ball
        h('circle', {
          cx: ballX, cy: ballY, r: 8,
          fill: '#f59e0b',
          stroke: '#f59e0b44',
          strokeWidth: 3
        }),

        // Ground line
        h('line', { x1: 40, y1: H - 1, x2: 480, y2: H - 1, stroke: '#374151', strokeWidth: 1 })
      ),

      // Explanation
      h('p', { className: 'text-xs text-gray-600 text-center mt-3 max-w-md mx-auto' },
        isSingle ?
          'Eine Einzelperson hat viele lokale Minima — Gewohnheiten, Pr\u00e4gungen, \u00dcberzeugungen. Kein einzelnes dominiert.' :
          'Im Kollektiv bildet sich ein dominanter Attraktor (Pos*) — ein gemeinsamer Begriff von „gut", der emergiert.'
      )
    );
  }

  window.PositiveAttractor = PositiveAttractor;
})();


// === 4. FearToAction ===
// Two paths from core to action: destructive and constructive
(function() {
  var h = React.createElement;

  var DESTRUCTIVE = [
    { label: 'Kern', short: '(gut)', detail: 'Der Mensch will im Grunde das Richtige tun. Der Kern ist intakt.', color: '#4ade80' },
    { label: 'Bedrohung', short: '', detail: 'Etwas gef\u00e4hrdet die Sicherheit — real oder wahrgenommen.', color: '#86efac' },
    { label: 'Angst', short: '', detail: 'Die Bedrohung l\u00f6st Angst aus. Das Nervensystem schaltet auf Schutz.', color: '#fbbf24' },
    { label: 'Verzerrung', short: '', detail: 'Unter Angst verzerrt sich die Wahrnehmung. Feindbilder entstehen.', color: '#f97316' },
    { label: 'Irrtum', short: '', detail: 'Aus verzerrter Wahrnehmung folgen falsche \u00dcberzeugungen.', color: '#ef4444' },
    { label: 'Sch\u00e4dliche Handlung', short: '', detail: 'Die Handlung richtet Schaden an — obwohl der Kern gut war.', color: '#dc2626' }
  ];

  var CONSTRUCTIVE = [
    { label: 'Kern', short: '(gut)', detail: 'Derselbe gute Kern — aber unter anderen Bedingungen.', color: '#4ade80' },
    { label: 'Sicherheit', short: '', detail: 'Die Umgebung signalisiert: Du bist sicher. Kein Kampfmodus n\u00f6tig.', color: '#6ee7b7' },
    { label: 'Klarheit', short: '', detail: 'Ohne Angst kann man klar sehen — Perspektivwechsel wird m\u00f6glich.', color: '#67e8f9' },
    { label: 'Koh\u00e4renz', short: '', detail: 'Werte und Handlung stimmen \u00fcberein. Man ist im Einklang.', color: '#22d3ee' },
    { label: 'Konstruktive Handlung', short: '', detail: 'Die Handlung n\u00fctzt — sich selbst und anderen.', color: '#06b6d4' }
  ];

  function FearToAction() {
    var _expanded = React.useState(null);
    var expanded = _expanded[0], setExpanded = _expanded[1];

    function toggle(path, index) {
      var key = path + '-' + index;
      setExpanded(expanded === key ? null : key);
    }

    function renderPath(steps, pathKey, label, labelColor) {
      return h('div', { className: 'mb-5' },
        h('div', { className: 'text-xs font-semibold mb-2 uppercase tracking-wider', style: { color: labelColor } }, label),
        h('div', { className: 'flex flex-wrap items-start gap-1' },
          steps.map(function(step, i) {
            var key = pathKey + '-' + i;
            var isExpanded = expanded === key;
            var isLast = i === steps.length - 1;
            return h('div', { key: key, className: 'flex items-start' },
              h('div', null,
                h('button', {
                  onClick: function() { toggle(pathKey, i); },
                  className: 'px-2.5 py-1.5 rounded-lg text-xs font-medium transition border cursor-pointer',
                  style: {
                    background: isExpanded ? step.color + '22' : step.color + '11',
                    borderColor: isExpanded ? step.color + '66' : step.color + '33',
                    color: step.color
                  }
                },
                  step.label,
                  step.short ? h('span', { className: 'ml-1 opacity-60' }, step.short) : null
                ),
                isExpanded ? h('div', {
                  className: 'mt-1 px-2.5 py-2 rounded-lg text-xs leading-relaxed max-w-48',
                  style: { background: step.color + '0a', color: '#d1d5db' }
                }, step.detail) : null
              ),
              !isLast ? h('span', { className: 'mx-1 mt-1.5 text-gray-600 text-xs flex-shrink-0' }, '\u2192') : null
            );
          })
        )
      );
    }

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Von Angst zu Handlung'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, 'Derselbe gute Kern — zwei verschiedene Wege. Klicke auf einen Schritt.'),

      renderPath(DESTRUCTIVE, 'dest', 'Destruktiver Pfad', '#ef4444'),
      renderPath(CONSTRUCTIVE, 'cons', 'Konstruktiver Pfad', '#22d3ee'),

      h('p', { className: 'text-xs text-gray-600 text-center mt-2 max-w-md mx-auto italic' },
        'Nicht der Kern unterscheidet sich — sondern die Bedingungen. Darum ist die Frage nicht „Wer ist b\u00f6se?", sondern „Was erzeugt Angst?"'
      )
    );
  }

  window.FearToAction = FearToAction;
})();


// === 5. DoubleEmergence ===
// Two nested layers showing structure-emergence and weight-emergence
(function() {
  var h = React.createElement;

  var LAYERS = [
    {
      id: 'outer',
      label: 'Was ist positiv?',
      sublabel: 'Struktur-Emergenz',
      tag: 'NP-hart',
      color: '#60a5fa',
      detail: 'Was als „gut" gilt, l\u00e4sst sich nicht top-down definieren. Es emergiert aus den Interaktionen aller Beteiligten — wie eine L\u00f6sung, die niemand allein h\u00e4tte finden k\u00f6nnen.'
    },
    {
      id: 'inner',
      label: 'Wessen Stimme z\u00e4hlt?',
      sublabel: 'Gewichtungs-Emergenz',
      tag: 'Replikator-Dynamik',
      color: '#f59e0b',
      detail: 'Wer geh\u00f6rt wird und wer nicht, entsteht ebenfalls durch den Prozess selbst. Macht, Vertrauen und Einfluss sind keine Eingaben — sie sind Ergebnisse.'
    }
  ];

  function DoubleEmergence() {
    var _active = React.useState(null);
    var active = _active[0], setActive = _active[1];
    var _tick = React.useState(0);
    var tick = _tick[0], setTick = _tick[1];

    React.useEffect(function() {
      var id = setInterval(function() {
        setTick(function(t) { return t + 1; });
      }, 50);
      return function() { clearInterval(id); };
    }, []);

    var W = 400, H = 400;
    var cx = 200, cy = 190;
    var outerR = 140;
    var innerR = 70;

    // Outer rotation angle
    var outerAngle = tick * 0.3;
    // Inner pulse
    var innerScale = 1 + Math.sin(tick * 0.08) * 0.06;

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Doppelte Emergenz'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, 'Klicke auf eine Schicht, um mehr zu erfahren'),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '400px', margin: '0 auto', display: 'block' } },

        // Outer ring
        h('g', { transform: 'rotate(' + outerAngle + ',' + cx + ',' + cy + ')', style: { cursor: 'pointer' }, onClick: function() { setActive(active === 'outer' ? null : 'outer'); } },
          h('circle', { cx: cx, cy: cy, r: outerR, fill: active === 'outer' ? '#60a5fa11' : 'transparent', stroke: '#60a5fa', strokeWidth: 2, strokeDasharray: '8 4', opacity: 0.7 }),
          // Orbit dots on outer ring
          [0, 60, 120, 180, 240, 300].map(function(deg, i) {
            var rad = deg * Math.PI / 180;
            var dx = cx + Math.cos(rad) * outerR;
            var dy = cy + Math.sin(rad) * outerR;
            return h('circle', { key: 'od' + i, cx: dx, cy: dy, r: 4, fill: '#60a5fa', opacity: 0.5 });
          })
        ),

        // Outer label (not rotated)
        h('text', { x: cx, y: cy - outerR - 14, fill: '#60a5fa', fontSize: 11, textAnchor: 'middle', fontWeight: 600 }, 'Was ist positiv?'),
        h('text', { x: cx, y: cy - outerR + 1, fill: '#60a5fa', fontSize: 9, textAnchor: 'middle', opacity: 0.6 }, 'Struktur-Emergenz'),
        h('text', {
          x: cx + outerR + 8, y: cy,
          fill: '#60a5fa', fontSize: 8, textAnchor: 'start', opacity: 0.5,
          className: 'font-mono'
        }, 'NP-hart'),

        // Inner ring
        h('g', { transform: 'scale(' + innerScale + ')', transformOrigin: cx + 'px ' + cy + 'px', style: { cursor: 'pointer' }, onClick: function() { setActive(active === 'inner' ? null : 'inner'); } },
          h('circle', { cx: cx, cy: cy, r: innerR, fill: active === 'inner' ? '#f59e0b11' : 'transparent', stroke: '#f59e0b', strokeWidth: 2, opacity: 0.7 }),
          // Core glow
          h('circle', { cx: cx, cy: cy, r: innerR * 0.4, fill: '#f59e0b', opacity: 0.06 + Math.sin(tick * 0.08) * 0.03 })
        ),

        // Inner label (not scaled)
        h('text', { x: cx, y: cy - 8, fill: '#f59e0b', fontSize: 10, textAnchor: 'middle', fontWeight: 600 }, 'Wessen Stimme'),
        h('text', { x: cx, y: cy + 6, fill: '#f59e0b', fontSize: 10, textAnchor: 'middle', fontWeight: 600 }, 'z\u00e4hlt?'),
        h('text', { x: cx, y: cy + 20, fill: '#f59e0b', fontSize: 8, textAnchor: 'middle', opacity: 0.6 }, 'Replikator-Dynamik'),

        // Bottom text
        h('text', { x: cx, y: cy + outerR + 35, fill: '#9ca3af', fontSize: 11, textAnchor: 'middle', fontStyle: 'italic' }, 'Beides entsteht durch den Prozess selbst.')
      ),

      // Detail panel
      active ? h('div', {
        className: 'mt-4 p-4 rounded-xl border text-sm leading-relaxed max-w-md mx-auto',
        style: {
          background: (active === 'outer' ? '#60a5fa' : '#f59e0b') + '0a',
          borderColor: (active === 'outer' ? '#60a5fa' : '#f59e0b') + '33',
          color: '#d1d5db'
        }
      },
        h('div', { className: 'text-xs font-semibold mb-1', style: { color: active === 'outer' ? '#60a5fa' : '#f59e0b' } },
          active === 'outer' ? LAYERS[0].label : LAYERS[1].label
        ),
        active === 'outer' ? LAYERS[0].detail : LAYERS[1].detail
      ) : null
    );
  }

  window.DoubleEmergence = DoubleEmergence;
})();


// === 6. ThreeFaces ===
// Three meditation-style cards for three faces of relational God
(function() {
  var h = React.createElement;

  var FACES = [
    {
      title: 'Adressat der Dankbarkeit',
      quote: 'Gott ist das, wof\u00fcr ich dankbar bin, wenn ich mir selbst nicht danken kann.',
      color: '#f59e0b',
      everyday: 'Du stehst morgens auf und etwas in dir sagt: „Danke." Nicht an jemanden — einfach nur Danke. Dieses Gef\u00fchl braucht keinen Empf\u00e4nger mit Postadresse. Aber es braucht ein Wort. Manche nennen es Gott.'
    },
    {
      title: 'Das Unbegreifliche',
      quote: 'Ich muss nicht wissen, was Gott ist, um zu wissen, dass es Gott gibt.',
      color: '#a78bfa',
      everyday: 'Du siehst deinem Kind beim Schlafen zu und sp\u00fcrst etwas, das gr\u00f6\u00dfer ist als du. Du kannst es nicht benennen, nicht erkl\u00e4ren, nicht reproduzieren. Aber es ist da. Und das reicht.'
    },
    {
      title: 'Das Zwischen',
      quote: 'Gott war nie „da oben". Gott war immer „zwischen uns".',
      color: '#22d3ee',
      everyday: 'In einem Gespr\u00e4ch, in dem beide wirklich zuh\u00f6ren, entsteht etwas, das vorher nicht da war. Keiner hat es mitgebracht. Es ist zwischen euch entstanden. Das ist Emergenz. Das ist das Zwischen.'
    }
  ];

  // Simple SVG icons
  function renderIcon(index, color) {
    if (index === 0) {
      // Heart / hands
      return h('svg', { viewBox: '0 0 40 40', width: 40, height: 40 },
        h('path', {
          d: 'M20 34 C14 28, 4 22, 4 14 C4 8, 9 4, 14 6 C17 7.5, 19 10, 20 12 C21 10, 23 7.5, 26 6 C31 4, 36 8, 36 14 C36 22, 26 28, 20 34Z',
          fill: 'none', stroke: color, strokeWidth: 1.5, opacity: 0.7
        })
      );
    }
    if (index === 1) {
      // Infinity
      return h('svg', { viewBox: '0 0 40 40', width: 40, height: 40 },
        h('path', {
          d: 'M20 20 C20 14, 26 10, 30 14 C34 18, 30 26, 26 22 C24 20, 20 20, 20 20 C20 20, 16 20, 14 22 C10 26, 6 18, 10 14 C14 10, 20 14, 20 20Z',
          fill: 'none', stroke: color, strokeWidth: 1.5, opacity: 0.7
        })
      );
    }
    // Network / connections
    return h('svg', { viewBox: '0 0 40 40', width: 40, height: 40 },
      h('circle', { cx: 12, cy: 12, r: 3, fill: 'none', stroke: color, strokeWidth: 1.2, opacity: 0.7 }),
      h('circle', { cx: 28, cy: 10, r: 3, fill: 'none', stroke: color, strokeWidth: 1.2, opacity: 0.7 }),
      h('circle', { cx: 20, cy: 28, r: 3, fill: 'none', stroke: color, strokeWidth: 1.2, opacity: 0.7 }),
      h('circle', { cx: 32, cy: 28, r: 3, fill: 'none', stroke: color, strokeWidth: 1.2, opacity: 0.7 }),
      h('circle', { cx: 8, cy: 26, r: 3, fill: 'none', stroke: color, strokeWidth: 1.2, opacity: 0.7 }),
      h('line', { x1: 12, y1: 12, x2: 28, y2: 10, stroke: color, strokeWidth: 1, opacity: 0.3 }),
      h('line', { x1: 12, y1: 12, x2: 20, y2: 28, stroke: color, strokeWidth: 1, opacity: 0.3 }),
      h('line', { x1: 28, y1: 10, x2: 32, y2: 28, stroke: color, strokeWidth: 1, opacity: 0.3 }),
      h('line', { x1: 28, y1: 10, x2: 20, y2: 28, stroke: color, strokeWidth: 1, opacity: 0.3 }),
      h('line', { x1: 20, y1: 28, x2: 8, y2: 26, stroke: color, strokeWidth: 1, opacity: 0.3 }),
      h('line', { x1: 8, y1: 26, x2: 12, y2: 12, stroke: color, strokeWidth: 1, opacity: 0.3 })
    );
  }

  function ThreeFaces() {
    var _expanded = React.useState(null);
    var expanded = _expanded[0], setExpanded = _expanded[1];

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, 'Drei Gesichter'),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, 'Drei Arten, das Unbenennbare zu benennen. Klicke f\u00fcr den Alltags-Bezug.'),

      h('div', { className: 'grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4' },
        FACES.map(function(face, i) {
          var isExpanded = expanded === i;
          return h('button', {
            key: i,
            onClick: function() { setExpanded(isExpanded ? null : i); },
            className: 'text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer',
            style: {
              background: isExpanded ? face.color + '0a' : face.color + '05',
              borderColor: isExpanded ? face.color + '44' : face.color + '18'
            }
          },
            // Icon
            h('div', { className: 'flex justify-center mb-3 opacity-70' },
              renderIcon(i, face.color)
            ),

            // Title
            h('h4', {
              className: 'text-sm font-semibold text-center mb-3',
              style: { color: face.color }
            }, face.title),

            // Quote
            h('p', {
              className: 'text-xs text-center leading-relaxed italic',
              style: { color: '#d1d5db' }
            }, '\u201E' + face.quote + '\u201C'),

            // Expanded: everyday paragraph
            isExpanded ? h('div', {
              className: 'mt-4 pt-3 border-t text-xs leading-relaxed',
              style: { borderColor: face.color + '22', color: '#9ca3af' }
            },
              h('div', { className: 'text-xs font-semibold mb-1', style: { color: face.color, opacity: 0.7 } }, 'Im Alltag'),
              face.everyday
            ) : null
          );
        })
      )
    );
  }

  window.ThreeFaces = ThreeFaces;
})();
