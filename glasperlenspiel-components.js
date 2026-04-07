// glasperlenspiel-components.js — Interactive React components for the Glasperlenspiel post
// SVG visualizations, network graph, breathing exercise, strange loop
// Pattern: IIFE → React.createElement (no JSX) → window.ComponentName

// ════════════════════════════════════════════════════════════════
// 1. GlasperlenspielGraph — Interactive network diagram
// ════════════════════════════════════════════════════════════════
(function() {
  var W = 600, H = 500;
  var CX = W / 2, CY = 220, R = 170;

  var NODES = [
    { id: 'quanten',   label: 'Quanten',        icon: '\u03C8', color: '#22d3ee', angle: 0,
      title: 'Quantenphysik', summary: 'Superposition, Verschr\u00E4nkung und die Wellenfunktion \u2014 die Grundlage der Realit\u00E4t.' },
    { id: 'eigenwerte', label: 'Eigenwerte',     icon: '\u03BB', color: '#f59e0b', angle: 45,
      title: 'Eigenwerte & KI', summary: 'Wie lineare Algebra KI-Modelle und Quantenmechanik verbindet.' },
    { id: 'emergenz',   label: 'Emergenz',       icon: '\uD83E\uDDE0', color: '#a78bfa', angle: 90,
      title: 'Emergenz in LLMs', summary: 'Wenn das Ganze mehr wird als die Summe seiner Teile.' },
    { id: 'gott',       label: 'Gott',           icon: '\u2728', color: '#f472b6', angle: 135,
      title: 'Gott als Emergenz', summary: 'Selbstreferenz, Bewusstsein und die ultimative Frage.' },
    { id: 'musik',      label: 'Musik',          icon: '\uD83C\uDFB5', color: '#34d399', angle: 180,
      title: 'Musik & Mathematik', summary: 'Fourier, Obertöne und die Mathematik der Harmonie.' },
    { id: 'logik',      label: 'Logik',          icon: '\uD83E\uDDE9', color: '#fb923c', angle: 225,
      title: 'Logik & Selbstreferenz', summary: 'G\u00F6del, Hofstadter und die Grenzen formaler Systeme.' },
    { id: 'vogel',      label: 'Vogelsimulator', icon: '\uD83E\uDD85', color: '#60a5fa', angle: 270,
      title: 'Vogelsimulator', summary: 'Neuronale Netze lernen fliegen \u2014 spielbar im Browser.' },
    { id: 'krr',        label: 'KRR Chat',       icon: '\u03BB', color: '#e879f9', angle: 315,
      title: 'KRR Chat', summary: 'Kernel Ridge Regression als interaktiver Chat.' }
  ];

  // Edge definitions: [fromId, toId, conceptType]
  var EDGE_TYPES = {
    fourier:       { label: 'Fourier / Frequenz', color: '#22d3ee' },
    eigenwerte:    { label: 'Eigenwerte',         color: '#f59e0b' },
    selbstreferenz:{ label: 'Selbstreferenz',     color: '#a78bfa' },
    emergenz:      { label: 'Emergenz',           color: '#f472b6' },
    kohaerenz:     { label: 'Koh\u00E4renz',      color: '#34d399' }
  };

  var EDGES = [
    // Cyan: Fourier/Frequency
    ['quanten', 'musik',      'fourier'],
    ['quanten', 'eigenwerte', 'fourier'],
    ['musik',   'eigenwerte', 'fourier'],
    // Amber: Eigenwerte
    ['eigenwerte', 'quanten', 'eigenwerte'],
    ['eigenwerte', 'musik',   'eigenwerte'],
    ['eigenwerte', 'krr',     'eigenwerte'],
    ['eigenwerte', 'logik',   'eigenwerte'],
    // Purple: Selbstreferenz
    ['logik', 'quanten',      'selbstreferenz'],
    ['logik', 'gott',         'selbstreferenz'],
    ['logik', 'eigenwerte',   'selbstreferenz'],
    // Rose: Emergenz
    ['emergenz', 'gott',      'emergenz'],
    ['emergenz', 'logik',     'emergenz'],
    ['emergenz', 'quanten',   'emergenz'],
    // Green: Kohaerenz
    ['quanten', 'gott',       'kohaerenz'],
    ['musik',   'gott',       'kohaerenz']
  ];

  // Deduplicate edges (A→B and B→A for same type = one line)
  function edgeKey(a, b, t) {
    return [a, b].sort().join('|') + '|' + t;
  }

  function getNodeById(id) {
    for (var i = 0; i < NODES.length; i++) {
      if (NODES[i].id === id) return NODES[i];
    }
    return null;
  }

  function nodePos(node) {
    var a = node.angle * Math.PI / 180;
    return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
  }

  function GlasperlenspielGraph() {
    var s = React.useState;
    var hoveredNode = s(null), setHoveredNode = hoveredNode[1]; hoveredNode = hoveredNode[0];
    var selectedNode = s(null), setSelectedNode = selectedNode[1]; selectedNode = selectedNode[0];
    var hoveredEdge = s(null), setHoveredEdge = hoveredEdge[1]; hoveredEdge = hoveredEdge[0];
    var tooltipPos = s({ x: 0, y: 0 }), setTooltipPos = tooltipPos[1]; tooltipPos = tooltipPos[0];

    var activeNode = selectedNode || hoveredNode;

    // Build unique edges
    var uniqueEdges = React.useMemo(function() {
      var seen = {};
      var result = [];
      for (var i = 0; i < EDGES.length; i++) {
        var edge = EDGES[i];
        var k = edgeKey(edge[0], edge[1], edge[2]);
        if (!seen[k]) {
          seen[k] = true;
          result.push({ from: edge[0], to: edge[1], type: edge[2] });
        }
      }
      return result;
    }, []);

    // Which edges connect to active node?
    function isEdgeActive(edge) {
      if (!activeNode) return false;
      return edge.from === activeNode || edge.to === activeNode;
    }

    function handleNodeClick(nodeId) {
      setSelectedNode(selectedNode === nodeId ? null : nodeId);
    }

    var e = React.createElement;
    var activeNodeData = activeNode ? getNodeById(activeNode) : null;

    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent' },
        'Das Glasperlenspiel \u2014 Netzwerk der Ideen'),
      e('div', { className: 'relative' },
        e('svg', {
          viewBox: '0 0 ' + W + ' ' + (H + 20),
          className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
          style: { maxWidth: '600px', margin: '0 auto', display: 'block' }
        },
          // Edges
          uniqueEdges.map(function(edge, i) {
            var n1 = getNodeById(edge.from);
            var n2 = getNodeById(edge.to);
            if (!n1 || !n2) return null;
            var p1 = nodePos(n1);
            var p2 = nodePos(n2);
            var et = EDGE_TYPES[edge.type];
            var active = isEdgeActive(edge);
            var isHoveredEdge = hoveredEdge === i;
            var opacity = activeNode ? (active ? 0.8 : 0.08) : 0.25;
            if (isHoveredEdge) opacity = 1;

            return e('g', { key: 'edge-' + i },
              // Invisible wider line for hover target
              e('line', {
                x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y,
                stroke: 'transparent', strokeWidth: 12,
                style: { cursor: 'pointer' },
                onMouseEnter: function() { setHoveredEdge(i); },
                onMouseLeave: function() { setHoveredEdge(null); }
              }),
              // Visible line
              e('line', {
                x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y,
                stroke: et.color, strokeWidth: active || isHoveredEdge ? 2.5 : 1.5,
                opacity: opacity,
                style: { transition: 'opacity 0.3s, stroke-width 0.3s', pointerEvents: 'none' }
              }),
              // Edge tooltip
              isHoveredEdge ? e('g', null,
                e('rect', {
                  x: (p1.x + p2.x) / 2 - 60, y: (p1.y + p2.y) / 2 - 14,
                  width: 120, height: 24, rx: 6,
                  fill: '#1e293b', stroke: et.color, strokeWidth: 1
                }),
                e('text', {
                  x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 + 3,
                  textAnchor: 'middle', fill: et.color, fontSize: 10, fontWeight: 600
                }, et.label)
              ) : null
            );
          }),
          // Nodes
          NODES.map(function(node) {
            var pos = nodePos(node);
            var isActive = activeNode === node.id;
            var dimmed = activeNode && !isActive && !uniqueEdges.some(function(edge) {
              return isEdgeActive(edge) && (edge.from === node.id || edge.to === node.id);
            });
            var nodeR = isActive ? 34 : 30;
            return e('g', {
              key: node.id,
              style: { cursor: 'pointer', transition: 'opacity 0.3s' },
              opacity: dimmed ? 0.3 : 1,
              onMouseEnter: function() { setHoveredNode(node.id); },
              onMouseLeave: function() { setHoveredNode(null); },
              onClick: function() { handleNodeClick(node.id); }
            },
              // Glow
              isActive ? e('circle', {
                cx: pos.x, cy: pos.y, r: nodeR + 6,
                fill: 'none', stroke: node.color, strokeWidth: 2, opacity: 0.3
              }) : null,
              // Circle
              e('circle', {
                cx: pos.x, cy: pos.y, r: nodeR,
                fill: '#0f172a', stroke: node.color,
                strokeWidth: isActive ? 2.5 : 1.5,
                style: { transition: 'r 0.2s, stroke-width 0.2s' }
              }),
              // Icon
              e('text', {
                x: pos.x, y: pos.y - 2, textAnchor: 'middle', dominantBaseline: 'middle',
                fontSize: 16, fill: node.color
              }, node.icon),
              // Label
              e('text', {
                x: pos.x, y: pos.y + 15, textAnchor: 'middle',
                fontSize: 8, fill: '#94a3b8', fontWeight: 500
              }, node.label)
            );
          }),
          // Node tooltip
          activeNodeData ? (function() {
            var pos = nodePos(activeNodeData);
            var tx = pos.x;
            var ty = pos.y - 52;
            // Clamp tooltip within SVG bounds
            var tw = 180;
            if (tx - tw / 2 < 10) tx = tw / 2 + 10;
            if (tx + tw / 2 > W - 10) tx = W - tw / 2 - 10;
            if (ty < 10) ty = pos.y + 50;
            return e('g', null,
              e('rect', {
                x: tx - tw / 2, y: ty - 16, width: tw, height: 40, rx: 8,
                fill: '#1e293b', stroke: activeNodeData.color, strokeWidth: 1, opacity: 0.95
              }),
              e('text', {
                x: tx, y: ty, textAnchor: 'middle', fill: activeNodeData.color,
                fontSize: 10, fontWeight: 700
              }, activeNodeData.title),
              e('text', {
                x: tx, y: ty + 14, textAnchor: 'middle', fill: '#94a3b8',
                fontSize: 7
              }, activeNodeData.summary.length > 50 ? activeNodeData.summary.substring(0, 47) + '...' : activeNodeData.summary)
            );
          })() : null
        )
      ),
      // Legend
      e('div', { className: 'flex flex-wrap gap-3 justify-center mt-3' },
        Object.keys(EDGE_TYPES).map(function(k) {
          var t = EDGE_TYPES[k];
          return e('div', { key: k, className: 'flex items-center gap-1.5' },
            e('div', { className: 'w-4 h-0.5 rounded', style: { backgroundColor: t.color } }),
            e('span', { className: 'text-[0.6rem] text-gray-400' }, t.label)
          );
        })
      ),
      e('p', { className: 'text-[0.6rem] text-gray-600 text-center mt-2' },
        'Klicke auf einen Knoten, um seine Verbindungen zu sehen.')
    );
  }

  window.GlasperlenspielGraph = GlasperlenspielGraph;
})();


// ════════════════════════════════════════════════════════════════
// 2. MindfulnessBreathing — Guided breathing with thought bubbles
// ════════════════════════════════════════════════════════════════
(function() {
  var THOUGHTS = [
    'Was esse ich heute?',
    'Die E-Mail...',
    'Hab ich abgeschlossen?',
    'Bin ich gut genug?',
    'Was denken die anderen?',
    'Muss noch einkaufen...',
    'Wann war das nochmal?',
    'Ich sollte anrufen...',
    'Hoffentlich klappt das.',
    'Warum hab ich das gesagt?',
    'Der Termin morgen...',
    'Bin ich zu sp\u00E4t?'
  ];

  var INHALE_DUR = 4000;
  var HOLD_DUR = 2000;
  var EXHALE_DUR = 6000;
  var CYCLE = INHALE_DUR + HOLD_DUR + EXHALE_DUR;

  function MindfulnessBreathing() {
    var s = React.useState;
    var running = s(false), setRunning = running[1]; running = running[0];
    var timeLeft = s(60), setTimeLeft = timeLeft[1]; timeLeft = timeLeft[0];
    var finished = s(false), setFinished = finished[1]; finished = finished[0];
    var breathPhase = s(0), setBreathPhase = breathPhase[1]; breathPhase = breathPhase[0]; // 0-1 in cycle
    var bubbles = s([]), setBubbles = bubbles[1]; bubbles = bubbles[0];

    var rafRef = React.useRef(null);
    var startRef = React.useRef(0);
    var lastBubbleRef = React.useRef(0);
    var bubbleIdRef = React.useRef(0);

    // Breathing circle radius: 40 → 70 during inhale, hold at 70, 70 → 40 during exhale
    var phase = breathPhase;
    var cyclePos = (phase * 1000) % CYCLE;
    var circleR, phaseLabel;
    if (cyclePos < INHALE_DUR) {
      var t = cyclePos / INHALE_DUR;
      circleR = 40 + 30 * t;
      phaseLabel = 'Einatmen...';
    } else if (cyclePos < INHALE_DUR + HOLD_DUR) {
      circleR = 70;
      phaseLabel = 'Halten...';
    } else {
      var t = (cyclePos - INHALE_DUR - HOLD_DUR) / EXHALE_DUR;
      circleR = 70 - 30 * t;
      phaseLabel = 'Ausatmen...';
    }

    React.useEffect(function() {
      if (!running || finished) return;
      var startTime = Date.now();
      startRef.current = startTime;
      lastBubbleRef.current = startTime;

      var tick = function() {
        var now = Date.now();
        var elapsed = (now - startTime) / 1000;
        var remaining = Math.max(0, 60 - elapsed);
        setTimeLeft(Math.ceil(remaining));
        setBreathPhase(elapsed);

        if (remaining <= 0) {
          setRunning(false);
          setFinished(true);
          setBubbles([]);
          return;
        }

        // Spawn thought bubble every 2-4 seconds
        if (now - lastBubbleRef.current > 2000 + Math.random() * 2000) {
          lastBubbleRef.current = now;
          var angle = Math.random() * Math.PI * 2;
          var dist = 90 + Math.random() * 40;
          var bx = 150 + Math.cos(angle) * dist;
          var by = 130 + Math.sin(angle) * dist;
          var text = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];
          var id = ++bubbleIdRef.current;
          setBubbles(function(prev) {
            var next = prev.concat([{ id: id, x: bx, y: by, text: text, born: now }]);
            // Remove bubbles older than 4 seconds
            return next.filter(function(b) { return now - b.born < 4000; });
          });
        } else {
          setBubbles(function(prev) {
            return prev.filter(function(b) { return now - b.born < 4000; });
          });
        }

        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return function() { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [running, finished]);

    function handleToggle() {
      if (finished) {
        setFinished(false);
        setTimeLeft(60);
        setBreathPhase(0);
        setBubbles([]);
      } else if (running) {
        setRunning(false);
        setBubbles([]);
      } else {
        setFinished(false);
        setTimeLeft(60);
        setBreathPhase(0);
        setBubbles([]);
        setRunning(true);
      }
    }

    var e = React.createElement;
    var SVG_W = 300, SVG_H = 260;

    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-lg mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' },
        'Achtsamkeits-Atmung'),
      e('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3',
        style: { maxWidth: '400px', margin: '0 auto', display: 'block' }
      },
        // Breathing circle
        e('circle', {
          cx: SVG_W / 2, cy: 130, r: running ? circleR : 40,
          fill: '#22d3ee', opacity: 0.15,
          stroke: '#22d3ee', strokeWidth: 1.5, strokeOpacity: 0.4,
          style: { transition: running ? 'none' : 'r 0.5s' }
        }),
        // Inner glow
        e('circle', {
          cx: SVG_W / 2, cy: 130, r: running ? circleR * 0.6 : 24,
          fill: '#22d3ee', opacity: 0.08,
          style: { transition: running ? 'none' : 'r 0.5s' }
        }),
        // Phase label
        running ? e('text', {
          x: SVG_W / 2, y: 130, textAnchor: 'middle', dominantBaseline: 'middle',
          fill: '#94a3b8', fontSize: 12, fontWeight: 500
        }, phaseLabel) : null,
        // Thought bubbles
        bubbles.map(function(b) {
          var age = (Date.now() - b.born) / 4000; // 0→1
          var opacity = age < 0.2 ? age / 0.2 : age > 0.7 ? (1 - age) / 0.3 : 1;
          opacity = Math.max(0, Math.min(1, opacity)) * 0.7;
          var tw = b.text.length * 5.5 + 16;
          return e('g', { key: b.id, opacity: opacity, style: { transition: 'opacity 0.3s' } },
            e('rect', {
              x: b.x - tw / 2, y: b.y - 10, width: tw, height: 20, rx: 10,
              fill: '#1e293b', stroke: '#334155', strokeWidth: 0.5
            }),
            e('text', {
              x: b.x, y: b.y + 3, textAnchor: 'middle', fill: '#64748b', fontSize: 8
            }, b.text)
          );
        }),
        // Timer
        e('text', {
          x: SVG_W / 2, y: 24, textAnchor: 'middle',
          fill: '#475569', fontSize: 14, fontFamily: 'monospace'
        }, running ? (timeLeft + 's') : '')
      ),
      // Finished message
      finished ? e('div', { className: 'text-center my-4 px-4' },
        e('p', { className: 'text-sm text-gray-300 italic leading-relaxed' },
          'Was bleibt, wenn die Gedanken vorbeiziehen?'),
        e('p', { className: 'text-base font-semibold mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' },
          'Du. Der Beobachter.')
      ) : null,
      // Button
      e('button', {
        className: 'w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ' +
          (running ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'),
        onClick: handleToggle
      }, running ? '\u25A0 Stopp' : finished ? '\u21BB Nochmal' : '\u25B6 Starten (60s)')
    );
  }

  window.MindfulnessBreathing = MindfulnessBreathing;
})();


// ════════════════════════════════════════════════════════════════
// 3. StrangeLoopVisualizer — Droste effect / self-referential recursion
// ════════════════════════════════════════════════════════════════
(function() {
  var TEXTS = [
    'Wer beobachtet?',
    'Du beobachtest deine Gedanken.',
    'Wer beobachtet den Beobachter?',
    'Du. Gerade jetzt.',
    'Und wer beobachtet DICH dabei?',
    '...'
  ];

  var LEVELS = 6;
  var SVG_W = 300, SVG_H = 300;
  var CX = SVG_W / 2, CY = SVG_H / 2;

  function StrangeLoopVisualizer() {
    var s = React.useState;
    var textIndex = s(0), setTextIndex = textIndex[1]; textIndex = textIndex[0];
    var textOpacity = s(1), setTextOpacity = textOpacity[1]; textOpacity = textOpacity[0];
    var rotation = s(0), setRotation = rotation[1]; rotation = rotation[0];

    var rafRef = React.useRef(null);
    var prevRef = React.useRef(0);

    // Animation loop
    React.useEffect(function() {
      var tick = function(now) {
        if (prevRef.current) {
          var dt = (now - prevRef.current) * 0.001;
          setRotation(function(r) { return r + dt * 8; }); // degrees per second
        }
        prevRef.current = now;
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return function() { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    // Text cycling: fade out → change → fade in every 3 seconds
    React.useEffect(function() {
      var interval = setInterval(function() {
        setTextOpacity(0);
        setTimeout(function() {
          setTextIndex(function(i) { return (i + 1) % TEXTS.length; });
          setTextOpacity(1);
        }, 500);
      }, 3000);
      return function() { clearInterval(interval); };
    }, []);

    var e = React.createElement;

    // Build nested circles with eyes
    var circles = [];
    for (var i = 0; i < LEVELS; i++) {
      var r = 120 - i * 18;
      var opacity = 0.9 - i * 0.12;
      var rot = rotation * (1 + i * 0.3); // Each level rotates faster
      var strokeColor = i % 2 === 0 ? '#22d3ee' : '#a78bfa';

      circles.push(
        e('g', {
          key: 'level-' + i,
          style: {
            transformOrigin: CX + 'px ' + CY + 'px',
            transform: 'rotate(' + rot + 'deg)'
          }
        },
          // Outer circle for this level
          e('circle', {
            cx: CX, cy: CY, r: r,
            fill: 'none', stroke: strokeColor,
            strokeWidth: 1, opacity: opacity * 0.5
          }),
          // Eye: outer ellipse
          e('ellipse', {
            cx: CX, cy: CY, rx: r * 0.7, ry: r * 0.35,
            fill: 'none', stroke: strokeColor,
            strokeWidth: 1.2, opacity: opacity * 0.6
          }),
          // Eye: iris
          e('circle', {
            cx: CX, cy: CY, r: r * 0.15,
            fill: strokeColor, opacity: opacity * 0.4
          }),
          // Eye: pupil
          e('circle', {
            cx: CX, cy: CY, r: r * 0.06,
            fill: '#0f172a', opacity: opacity * 0.8
          })
        )
      );
    }

    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-lg mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent' },
        'Strange Loop \u2014 Wer beobachtet?'),
      e('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3',
        style: { maxWidth: '400px', margin: '0 auto', display: 'block' }
      },
        // Background subtle radial gradient effect
        e('circle', {
          cx: CX, cy: CY, r: 130,
          fill: '#0f172a', opacity: 0.5
        }),
        // All nested levels
        circles
      ),
      // Cycling text
      e('div', { className: 'text-center h-12 flex items-center justify-center' },
        e('p', {
          className: 'text-sm sm:text-base text-gray-300 italic',
          style: {
            opacity: textOpacity,
            transition: 'opacity 0.5s ease-in-out'
          }
        }, TEXTS[textIndex])
      ),
      e('p', { className: 'text-[0.6rem] text-gray-600 text-center mt-1' },
        'Jede Ebene dreht etwas schneller als die \u00E4u\u00DFere \u2014 ein endloser Regress.')
    );
  }

  window.StrangeLoopVisualizer = StrangeLoopVisualizer;
})();
