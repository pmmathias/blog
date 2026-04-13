// vogelsimulator-components.js — Interactive React components for the Vogelsimulator post
// Fourier decomposition, Octree/Quadtree query, Ocean wave spectrum
// Pattern: IIFE → React.createElement (no JSX) → window.ComponentName

// ════════════════════════════════════════════════════════════════
// 1. FourierDecompositionViz — Waveform synthesis from harmonics
// ════════════════════════════════════════════════════════════════
(function() {
  var TWO_PI = Math.PI * 2;
  var SAMPLES = 300;
  var SVG_W = 560, SVG_H = 260;
  var PAD_L = 30, PAD_R = 10, PAD_T = 18, PAD_B = 18;
  var PLOT_W = SVG_W - PAD_L - PAD_R;
  var PLOT_H = (SVG_H - PAD_T * 2 - PAD_B * 2) / 2;
  var TOP_CY = PAD_T + PLOT_H / 2;
  var BOT_CY = PAD_T + PLOT_H + PAD_T + PLOT_H / 2 + 10;

  var WAVE_TYPES = ['Rechteckwelle', 'Sägezahn', 'Dreieckwelle'];

  function computeHarmonics(type, n, samples) {
    var result = [];
    for (var k = 1; k <= n; k++) {
      var pts = [];
      for (var i = 0; i < samples; i++) {
        var x = (i / (samples - 1)) * TWO_PI;
        var y = 0;
        if (type === 0) { // Square: sin((2k-1)x)/(2k-1), scale 4/π
          y = (Math.sin((2 * k - 1) * x) / (2 * k - 1)) * (4 / Math.PI);
        } else if (type === 1) { // Sawtooth: (-1)^(k+1) sin(kx)/k, scale 2/π
          y = (Math.pow(-1, k + 1) * Math.sin(k * x) / k) * (2 / Math.PI);
        } else { // Triangle: (-1)^k sin((2k+1)x)/(2k+1)^2, scale 8/π²
          y = (Math.pow(-1, k - 1) * Math.sin((2 * k - 1) * x) / Math.pow(2 * k - 1, 2)) * (8 / (Math.PI * Math.PI));
        }
        pts.push(y);
      }
      result.push(pts);
    }
    return result;
  }

  function targetWave(type, samples) {
    var pts = [];
    for (var i = 0; i < samples; i++) {
      var x = (i / (samples - 1)) * TWO_PI;
      var y;
      if (type === 0) { // Square
        y = x < Math.PI ? 1 : -1;
      } else if (type === 1) { // Sawtooth
        y = 1 - x / Math.PI;
      } else { // Triangle
        y = x < Math.PI ? (2 * x / Math.PI - 1) : (3 - 2 * x / Math.PI);
      }
      pts.push(y);
    }
    return pts;
  }

  function ptsToPolyline(pts, cy, scale) {
    return pts.map(function(y, i) {
      var px = PAD_L + (i / (pts.length - 1)) * PLOT_W;
      var py = cy - y * scale;
      return px + ',' + py;
    }).join(' ');
  }

  function FourierDecompositionViz() {
    var s = React.useState;
    var waveType = s(0), setWaveType = waveType[1]; waveType = waveType[0];
    var numHarmonics = s(1), setNumHarmonics = numHarmonics[1]; numHarmonics = numHarmonics[0];

    var SCALE = PLOT_H * 0.42;

    var harmonics = React.useMemo(function() {
      return computeHarmonics(waveType, numHarmonics, SAMPLES);
    }, [waveType, numHarmonics]);

    var target = React.useMemo(function() {
      return targetWave(waveType, SAMPLES);
    }, [waveType]);

    // Sum of all harmonics
    var sumPts = React.useMemo(function() {
      var sum = new Array(SAMPLES).fill(0);
      for (var k = 0; k < harmonics.length; k++) {
        for (var i = 0; i < SAMPLES; i++) {
          sum[i] += harmonics[k][i];
        }
      }
      return sum;
    }, [harmonics]);

    var e = React.createElement;

    // Axis helpers
    function hAxis(cy) {
      return e('line', { x1: PAD_L, y1: cy, x2: PAD_L + PLOT_W, y2: cy,
        stroke: '#374151', strokeWidth: 0.8, key: 'ax' + cy });
    }

    return e('div', { className: 'bg-gray-900 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      e('h3', { className: 'text-sm font-bold text-center mb-3',
        style: { color: '#2dd4bf' } }, 'Fourier-Zerlegung'),

      // Controls row
      e('div', { className: 'flex flex-wrap gap-3 items-center justify-center mb-3' },
        e('select', {
          value: waveType,
          onChange: function(ev) { setWaveType(parseInt(ev.target.value)); },
          className: 'bg-gray-800 border border-gray-700 text-gray-200 text-xs rounded px-2 py-1 cursor-pointer'
        },
          WAVE_TYPES.map(function(label, i) {
            return e('option', { key: i, value: i }, label);
          })
        ),
        e('div', { className: 'flex items-center gap-2' },
          e('label', { className: 'text-xs text-gray-400' }, 'Anzahl Harmonische'),
          e('input', {
            type: 'range', min: 1, max: 50, value: numHarmonics,
            onChange: function(ev) { setNumHarmonics(parseInt(ev.target.value)); },
            className: 'w-28 accent-teal-400',
            style: { cursor: 'pointer' }
          }),
          e('span', { className: 'text-xs font-mono', style: { color: '#2dd4bf', minWidth: '2.5rem' } },
            'n = ' + numHarmonics)
        )
      ),

      e('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full rounded-xl border border-gray-700',
        style: { background: '#1f2937' }
      },
        // --- TOP PANEL: individual harmonics ---
        e('text', { x: PAD_L, y: PAD_T - 4, fill: '#6b7280', fontSize: 9 }, 'Einzelne Harmonische'),
        hAxis(TOP_CY),
        harmonics.map(function(pts, k) {
          return e('polyline', {
            key: 'h' + k,
            points: ptsToPolyline(pts, TOP_CY, SCALE),
            fill: 'none', stroke: '#9ca3af', strokeWidth: 0.8, opacity: 0.35
          });
        }),

        // --- BOT PANEL: sum vs target ---
        e('text', { x: PAD_L, y: PAD_T + PLOT_H + PAD_T - 4 + 10, fill: '#6b7280', fontSize: 9 }, 'Summe vs. Zielwelle'),
        hAxis(BOT_CY),
        // Target (dashed amber)
        e('polyline', {
          key: 'target',
          points: ptsToPolyline(target, BOT_CY, SCALE),
          fill: 'none', stroke: '#f59e0b', strokeWidth: 1.4,
          strokeDasharray: '4 3', opacity: 0.7
        }),
        // Sum (teal bold)
        e('polyline', {
          key: 'sum',
          points: ptsToPolyline(sumPts, BOT_CY, SCALE),
          fill: 'none', stroke: '#2dd4bf', strokeWidth: 2, opacity: 0.95
        }),

        // x-axis labels
        e('text', { x: PAD_L, y: SVG_H - 2, fill: '#4b5563', fontSize: 8 }, '0'),
        e('text', { x: PAD_L + PLOT_W / 2, y: SVG_H - 2, fill: '#4b5563', fontSize: 8, textAnchor: 'middle' }, 'π'),
        e('text', { x: PAD_L + PLOT_W, y: SVG_H - 2, fill: '#4b5563', fontSize: 8, textAnchor: 'end' }, '2π'),

        // Legend
        e('rect', { x: PAD_L + PLOT_W - 110, y: PAD_T + PLOT_H + PAD_T + 10, width: 8, height: 3, fill: '#f59e0b', opacity: 0.7 }),
        e('text', { x: PAD_L + PLOT_W - 99, y: PAD_T + PLOT_H + PAD_T + 14, fill: '#f59e0b', fontSize: 8, opacity: 0.8 }, 'Zielwelle'),
        e('rect', { x: PAD_L + PLOT_W - 50, y: PAD_T + PLOT_H + PAD_T + 10, width: 8, height: 3, fill: '#2dd4bf' }),
        e('text', { x: PAD_L + PLOT_W - 39, y: PAD_T + PLOT_H + PAD_T + 14, fill: '#2dd4bf', fontSize: 8 }, 'Summe')
      ),

      e('p', { className: 'text-xs text-gray-500 text-center mt-2' },
        'Bewege den Regler, um mehr Frequenzen hinzuzufügen.')
    );
  }

  window.FourierDecompositionViz = FourierDecompositionViz;
})();


// ════════════════════════════════════════════════════════════════
// 2. OctreeQueryViz — Quadtree frustum culling visualization
// ════════════════════════════════════════════════════════════════
(function() {
  var WORLD = 400; // SVG world size
  var NUM_OBJECTS = 200;
  var FOV_HALF = 30 * Math.PI / 180; // 60° total FOV
  var FRUSTUM_LEN = 240;
  var MAX_DEPTH = 4;

  // Seeded random for stable object positions
  function seededRand(seed) {
    var s = seed;
    return function() {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
  }

  var rng = seededRand(42);
  var OBJECTS = [];
  for (var i = 0; i < NUM_OBJECTS; i++) {
    OBJECTS.push({ x: rng() * WORLD, y: rng() * WORLD });
  }

  // Build quadtree cells (recursive subdivision to MAX_DEPTH)
  function buildQuadtree(x, y, w, h, depth) {
    var cell = { x: x, y: y, w: w, h: h, depth: depth, children: null };
    if (depth < MAX_DEPTH) {
      var hw = w / 2, hh = h / 2;
      cell.children = [
        buildQuadtree(x,      y,      hw, hh, depth + 1),
        buildQuadtree(x + hw, y,      hw, hh, depth + 1),
        buildQuadtree(x,      y + hh, hw, hh, depth + 1),
        buildQuadtree(x + hw, y + hh, hw, hh, depth + 1)
      ];
    }
    return cell;
  }

  var QUADTREE = buildQuadtree(0, 0, WORLD, WORLD, 0);

  // Frustum: origin (ox, oy), direction angle, half-angle
  function frustumContainsPoint(ox, oy, angle, px, py) {
    var dx = px - ox, dy = py - oy;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 1 || dist > FRUSTUM_LEN) return false;
    var ptAngle = Math.atan2(dy, dx);
    var diff = ptAngle - angle;
    // Normalize to [-π, π]
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    return Math.abs(diff) <= FOV_HALF;
  }

  // AABB vs frustum: returns 'outside', 'overlap', or 'inside'
  function aabbVsFrustum(ox, oy, angle, cx, cy, cw, ch) {
    // Test 4 corners
    var corners = [
      [cx,      cy     ],
      [cx + cw, cy     ],
      [cx,      cy + ch],
      [cx + cw, cy + ch]
    ];
    var allIn = true, anyIn = false;
    for (var i = 0; i < 4; i++) {
      var p = corners[i];
      var inside = frustumContainsPoint(ox, oy, angle, p[0], p[1]);
      if (!inside) allIn = false;
      if (inside) anyIn = true;
    }
    // Also check if frustum apex is inside cell
    if (ox >= cx && ox <= cx + cw && oy >= cy && oy <= cy + ch) {
      anyIn = true; allIn = false;
    }
    // Check midpoints of edges too
    var midpts = [
      [cx + cw / 2, cy],
      [cx + cw / 2, cy + ch],
      [cx, cy + ch / 2],
      [cx + cw, cy + ch / 2]
    ];
    for (var j = 0; j < midpts.length; j++) {
      if (frustumContainsPoint(ox, oy, angle, midpts[j][0], midpts[j][1])) {
        anyIn = true;
      }
    }
    if (allIn) return 'inside';
    if (anyIn) return 'overlap';
    return 'outside';
  }

  // Collect all leaf cells with their frustum classification
  function classifyCells(cell, ox, oy, angle, result) {
    var status = aabbVsFrustum(ox, oy, angle, cell.x, cell.y, cell.w, cell.h);
    if (status === 'outside') {
      if (cell.depth >= 2) result.push({ cell: cell, status: 'outside' });
      return;
    }
    if (!cell.children) {
      result.push({ cell: cell, status: status });
      return;
    }
    // Push parent outline for overlap cells at depth ≤ 2
    if (cell.depth <= 2) {
      result.push({ cell: cell, status: status, parentOnly: true });
    }
    for (var i = 0; i < cell.children.length; i++) {
      classifyCells(cell.children[i], ox, oy, angle, result);
    }
  }

  function buildFrustumPath(ox, oy, angle) {
    var x1 = ox + FRUSTUM_LEN * Math.cos(angle - FOV_HALF);
    var y1 = oy + FRUSTUM_LEN * Math.sin(angle - FOV_HALF);
    var x2 = ox + FRUSTUM_LEN * Math.cos(angle + FOV_HALF);
    var y2 = oy + FRUSTUM_LEN * Math.sin(angle + FOV_HALF);
    return 'M' + ox + ',' + oy + ' L' + x1 + ',' + y1 + ' A' + FRUSTUM_LEN + ',' + FRUSTUM_LEN + ' 0 0,1 ' + x2 + ',' + y2 + ' Z';
  }

  function OctreeQueryViz() {
    var s = React.useState;
    var camPos = s({ x: 200, y: 320 }), setCamPos = camPos[1]; camPos = camPos[0];
    var camAngle = s(-Math.PI / 2), setCamAngle = camAngle[1]; camAngle = camAngle[0];
    var dragging = s(false), setDragging = dragging[1]; dragging = dragging[0];
    var svgRef = React.useRef(null);

    var cells = React.useMemo(function() {
      var result = [];
      classifyCells(QUADTREE, camPos.x, camPos.y, camAngle, result);
      return result;
    }, [camPos, camAngle]);

    var visibleObjects = React.useMemo(function() {
      return OBJECTS.filter(function(o) {
        return frustumContainsPoint(camPos.x, camPos.y, camAngle, o.x, o.y);
      });
    }, [camPos, camAngle]);

    var visitedCells = React.useMemo(function() {
      return cells.filter(function(c) { return c.status !== 'outside'; }).length;
    }, [cells]);

    function getSVGPoint(ev) {
      var svg = svgRef.current;
      if (!svg) return null;
      var rect = svg.getBoundingClientRect();
      var clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
      var clientY = ev.touches ? ev.touches[0].clientY : ev.clientY;
      var scaleX = WORLD / rect.width;
      var scaleY = WORLD / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    }

    function handleDown(ev) {
      ev.preventDefault();
      setDragging(true);
      var pt = getSVGPoint(ev);
      if (pt) {
        setCamPos({ x: Math.max(0, Math.min(WORLD, pt.x)), y: Math.max(0, Math.min(WORLD, pt.y)) });
      }
    }

    function handleMove(ev) {
      if (!dragging) return;
      ev.preventDefault();
      var pt = getSVGPoint(ev);
      if (pt) {
        var nx = Math.max(5, Math.min(WORLD - 5, pt.x));
        var ny = Math.max(5, Math.min(WORLD - 5, pt.y));
        // Update angle to point from prev pos toward movement direction
        var dx = pt.x - camPos.x, dy = pt.y - camPos.y;
        if (Math.abs(dx) + Math.abs(dy) > 3) {
          setCamAngle(Math.atan2(dy, dx));
        }
        setCamPos({ x: nx, y: ny });
      }
    }

    function handleUp() { setDragging(false); }

    var e = React.createElement;
    var frustumPath = buildFrustumPath(camPos.x, camPos.y, camAngle);

    return e('div', { className: 'bg-gray-900 p-3 sm:p-4 rounded-2xl max-w-lg mx-auto' },
      e('h3', { className: 'text-sm font-bold text-center mb-2',
        style: { color: '#2dd4bf' } }, 'Octree-Abfrage (Quadtree-Demo)'),

      e('svg', {
        ref: svgRef,
        viewBox: '0 0 ' + WORLD + ' ' + WORLD,
        className: 'w-full rounded-xl border border-gray-700 touch-none',
        style: { background: '#1f2937', cursor: dragging ? 'grabbing' : 'grab', display: 'block' },
        onMouseDown: handleDown, onMouseMove: handleMove, onMouseUp: handleUp, onMouseLeave: handleUp,
        onTouchStart: handleDown, onTouchMove: handleMove, onTouchEnd: handleUp
      },
        // Quadtree cell backgrounds
        cells.map(function(item, idx) {
          var c = item.cell;
          var fill, stroke, strokeW, opacity;
          if (item.parentOnly) {
            fill = 'none'; stroke = '#374151'; strokeW = 0.5; opacity = 1;
          } else if (item.status === 'outside') {
            fill = '#111827'; stroke = '#1f2937'; strokeW = 0.5; opacity = 0.8;
          } else if (item.status === 'overlap') {
            fill = 'none'; stroke = '#f59e0b'; strokeW = 1; opacity = 0.6;
          } else {
            fill = 'none'; stroke = '#374151'; strokeW = 0.5; opacity = 1;
          }
          return e('rect', {
            key: 'cell' + idx,
            x: c.x + 0.5, y: c.y + 0.5, width: c.w - 1, height: c.h - 1,
            fill: fill, stroke: stroke, strokeWidth: strokeW, opacity: opacity
          });
        }),

        // Frustum
        e('path', {
          d: frustumPath,
          fill: '#2dd4bf', fillOpacity: 0.06,
          stroke: '#2dd4bf', strokeWidth: 1, strokeOpacity: 0.4
        }),

        // Objects — outside
        OBJECTS.map(function(o, i) {
          var vis = frustumContainsPoint(camPos.x, camPos.y, camAngle, o.x, o.y);
          if (vis) return null;
          return e('circle', { key: 'o' + i, cx: o.x, cy: o.y, r: 2.5,
            fill: '#374151', opacity: 0.5 });
        }),
        // Objects — inside (drawn on top)
        OBJECTS.map(function(o, i) {
          var vis = frustumContainsPoint(camPos.x, camPos.y, camAngle, o.x, o.y);
          if (!vis) return null;
          return e('circle', { key: 'ov' + i, cx: o.x, cy: o.y, r: 3,
            fill: '#2dd4bf', opacity: 0.9 });
        }),

        // Camera origin handle
        e('circle', {
          cx: camPos.x, cy: camPos.y, r: 9,
          fill: '#f59e0b', fillOpacity: 0.25,
          stroke: '#f59e0b', strokeWidth: 1.8
        }),
        e('circle', { cx: camPos.x, cy: camPos.y, r: 3.5, fill: '#f59e0b' })
      ),

      // Stats bar
      e('div', { className: 'flex flex-wrap gap-2 justify-center mt-2 text-xs font-mono' },
        e('span', { style: { color: '#6b7280' } },
          'Objekte: ' + NUM_OBJECTS),
        e('span', { style: { color: '#2dd4bf' } },
          '| Sichtbar: ' + visibleObjects.length),
        e('span', { style: { color: '#f59e0b' } },
          '| Octree-Knoten besucht: ' + visitedCells)
      ),

      e('p', { className: 'text-xs text-gray-500 text-center mt-2' },
        'Ziehe den Kreis, um die Kamera zu bewegen.')
    );
  }

  window.OctreeQueryViz = OctreeQueryViz;
})();


// ════════════════════════════════════════════════════════════════
// 3. WaveSpectrumViz — Phillips ocean wave spectrum + animated surface
// ════════════════════════════════════════════════════════════════
(function() {
  var G = 9.81;
  var ALPHA = 0.0081;
  var K_SAMPLES = 120;
  var K_MIN = 0.01, K_MAX = 1.2;
  var NUM_WAVES = 24;

  // Phillips spectrum S(k) = α * exp(-1/(kL)²) / k⁴
  function phillipsSpectrum(k, windSpeed) {
    var L = (windSpeed * windSpeed) / G;
    if (k < 0.0001) return 0;
    var kL = k * L;
    return ALPHA * Math.exp(-1.0 / (kL * kL)) / Math.pow(k, 4);
  }

  function buildSpectrum(windSpeed) {
    var pts = [];
    for (var i = 0; i < K_SAMPLES; i++) {
      var k = K_MIN + (K_MAX - K_MIN) * (i / (K_SAMPLES - 1));
      var s = phillipsSpectrum(k, windSpeed);
      pts.push({ k: k, s: s });
    }
    return pts;
  }

  // Precompute wave components from spectrum (stable per wind speed)
  function buildWaveComponents(windSpeed) {
    var components = [];
    for (var i = 0; i < NUM_WAVES; i++) {
      var t = (i + 0.5) / NUM_WAVES;
      var k = K_MIN + (K_MAX - K_MIN) * Math.pow(t, 1.5); // bias toward lower k
      var s = phillipsSpectrum(k, windSpeed);
      var amplitude = Math.sqrt(s * (K_MAX - K_MIN) / NUM_WAVES) * 6.0;
      var omega = Math.sqrt(G * k); // dispersion relation
      var phase = (i * 2.399) % (2 * Math.PI); // golden angle offset
      components.push({ k: k, amplitude: amplitude, omega: omega, phase: phase });
    }
    return components;
  }

  // Estimate sig wave height from spectrum
  function sigWaveHeight(windSpeed) {
    var m0 = 0;
    for (var i = 0; i < K_SAMPLES; i++) {
      var k = K_MIN + (K_MAX - K_MIN) * (i / (K_SAMPLES - 1));
      var dk = (K_MAX - K_MIN) / (K_SAMPLES - 1);
      m0 += phillipsSpectrum(k, windSpeed) * dk;
    }
    return (4 * Math.sqrt(m0) * 6).toFixed(1);
  }

  var SVG_W = 560, SVG_H = 200;
  var PANEL_W = (SVG_W - 10) / 2;
  var SPEC_PAD = { l: 32, r: 8, t: 20, b: 24 };
  var WAVE_PAD = { l: 8, r: 8, t: 20, b: 24 };
  var SPEC_PLOT_W = PANEL_W - SPEC_PAD.l - SPEC_PAD.r;
  var SPEC_PLOT_H = SVG_H - SPEC_PAD.t - SPEC_PAD.b;
  var WAVE_PLOT_W = PANEL_W - WAVE_PAD.l - WAVE_PAD.r;
  var WAVE_PLOT_H = SVG_H - WAVE_PAD.t - WAVE_PAD.b;
  var WAVE_ORIGIN_X = PANEL_W + 5 + WAVE_PAD.l;
  var WAVE_CY = WAVE_PAD.t + WAVE_PLOT_H / 2;
  var WAVE_SAMPLES = 200;

  function WaveSpectrumViz() {
    var s = React.useState;
    var windSpeed = s(15), setWindSpeed = windSpeed[1]; windSpeed = windSpeed[0];
    var time = s(0), setTime = time[1]; time = time[0];

    var rafRef = React.useRef(null);
    var prevRef = React.useRef(null);

    React.useEffect(function() {
      var tick = function(now) {
        if (prevRef.current !== null) {
          var dt = (now - prevRef.current) / 1000;
          setTime(function(t) { return t + dt; });
        }
        prevRef.current = now;
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return function() {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        prevRef.current = null;
      };
    }, []);

    var specPts = React.useMemo(function() {
      return buildSpectrum(windSpeed);
    }, [windSpeed]);

    var waveComponents = React.useMemo(function() {
      return buildWaveComponents(windSpeed);
    }, [windSpeed]);

    var sigH = React.useMemo(function() {
      return sigWaveHeight(windSpeed);
    }, [windSpeed]);

    // Max spectrum value for normalization
    var specMax = React.useMemo(function() {
      var m = 0;
      for (var i = 0; i < specPts.length; i++) {
        if (specPts[i].s > m) m = specPts[i].s;
      }
      return m || 1;
    }, [specPts]);

    // Build spectrum polyline
    var specPolyline = React.useMemo(function() {
      return specPts.map(function(pt, i) {
        var px = SPEC_PAD.l + (pt.k - K_MIN) / (K_MAX - K_MIN) * SPEC_PLOT_W;
        var py = SPEC_PAD.t + SPEC_PLOT_H - (pt.s / specMax) * SPEC_PLOT_H;
        return px + ',' + py;
      }).join(' ');
    }, [specPts, specMax]);

    // Build wave surface polyline (depends on time)
    var wavePts = [];
    for (var i = 0; i < WAVE_SAMPLES; i++) {
      var xNorm = i / (WAVE_SAMPLES - 1);
      var wx = WAVE_ORIGIN_X + xNorm * WAVE_PLOT_W;
      var xWorld = xNorm * 100; // world units
      var wy = 0;
      for (var j = 0; j < waveComponents.length; j++) {
        var wc = waveComponents[j];
        wy += wc.amplitude * Math.sin(wc.k * xWorld - wc.omega * time + wc.phase);
      }
      // Scale to plot height
      var scale = WAVE_PLOT_H * 0.2;
      var py = WAVE_CY - wy * scale;
      wavePts.push(wx + ',' + py);
    }
    var wavePolyline = wavePts.join(' ');

    var e = React.createElement;

    return e('div', { className: 'bg-gray-900 p-3 sm:p-4 rounded-2xl max-w-2xl mx-auto' },
      e('h3', { className: 'text-sm font-bold text-center mb-2',
        style: { color: '#2dd4bf' } }, 'Wellenspektrum (Phillips)'),

      e('div', { className: 'flex items-center justify-center gap-3 mb-3' },
        e('label', { className: 'text-xs text-gray-400' }, 'Windgeschwindigkeit'),
        e('input', {
          type: 'range', min: 5, max: 30, value: windSpeed,
          onChange: function(ev) { setWindSpeed(parseInt(ev.target.value)); },
          className: 'w-28 accent-teal-400',
          style: { cursor: 'pointer' }
        }),
        e('span', { className: 'text-xs font-mono', style: { color: '#f59e0b', minWidth: '5rem' } },
          windSpeed + ' m/s | ~' + sigH + ' m')
      ),

      e('svg', {
        viewBox: '0 0 ' + SVG_W + ' ' + SVG_H,
        className: 'w-full rounded-xl border border-gray-700',
        style: { background: '#1f2937' }
      },
        // --- LEFT: Frequency spectrum ---
        e('text', { x: SPEC_PAD.l, y: 13, fill: '#6b7280', fontSize: 9 }, 'Frequenzspektrum S(k)'),
        // Axes
        e('line', { x1: SPEC_PAD.l, y1: SPEC_PAD.t, x2: SPEC_PAD.l, y2: SPEC_PAD.t + SPEC_PLOT_H,
          stroke: '#374151', strokeWidth: 0.8 }),
        e('line', { x1: SPEC_PAD.l, y1: SPEC_PAD.t + SPEC_PLOT_H,
          x2: SPEC_PAD.l + SPEC_PLOT_W, y2: SPEC_PAD.t + SPEC_PLOT_H,
          stroke: '#374151', strokeWidth: 0.8 }),
        // x-axis labels
        e('text', { x: SPEC_PAD.l, y: SVG_H - 8, fill: '#4b5563', fontSize: 7 }, K_MIN),
        e('text', { x: SPEC_PAD.l + SPEC_PLOT_W, y: SVG_H - 8, fill: '#4b5563', fontSize: 7, textAnchor: 'end' }, K_MAX.toFixed(1)),
        e('text', { x: SPEC_PAD.l + SPEC_PLOT_W / 2, y: SVG_H - 1, fill: '#4b5563', fontSize: 7, textAnchor: 'middle' }, 'k (Wellenzahl)'),
        // y label
        e('text', { x: 6, y: SPEC_PAD.t + SPEC_PLOT_H / 2, fill: '#4b5563', fontSize: 7,
          textAnchor: 'middle', transform: 'rotate(-90, 6, ' + (SPEC_PAD.t + SPEC_PLOT_H / 2) + ')' }, 'S(k)'),
        // Fill area under curve
        e('polyline', {
          points: (SPEC_PAD.l + ',' + (SPEC_PAD.t + SPEC_PLOT_H) + ' ') + specPolyline +
            (' ' + (SPEC_PAD.l + SPEC_PLOT_W) + ',' + (SPEC_PAD.t + SPEC_PLOT_H)),
          fill: '#f59e0b', fillOpacity: 0.12, stroke: 'none'
        }),
        // Spectrum curve
        e('polyline', {
          points: specPolyline,
          fill: 'none', stroke: '#f59e0b', strokeWidth: 1.8, opacity: 0.9
        }),

        // Divider
        e('line', { x1: PANEL_W + 2, y1: 10, x2: PANEL_W + 2, y2: SVG_H - 8,
          stroke: '#374151', strokeWidth: 0.8 }),

        // --- RIGHT: Wave surface ---
        e('text', { x: WAVE_ORIGIN_X, y: 13, fill: '#6b7280', fontSize: 9 }, 'Wellenoberfläche'),
        // Baseline
        e('line', { x1: WAVE_ORIGIN_X, y1: WAVE_CY, x2: WAVE_ORIGIN_X + WAVE_PLOT_W, y2: WAVE_CY,
          stroke: '#374151', strokeWidth: 0.6, strokeDasharray: '3 3' }),
        // Water fill
        e('polyline', {
          points: (WAVE_ORIGIN_X + ',') + (WAVE_CY + WAVE_PLOT_H * 0.5) + ' ' + wavePolyline +
            ' ' + (WAVE_ORIGIN_X + WAVE_PLOT_W) + ',' + (WAVE_CY + WAVE_PLOT_H * 0.5),
          fill: '#2dd4bf', fillOpacity: 0.07, stroke: 'none'
        }),
        // Wave surface
        e('polyline', {
          points: wavePolyline,
          fill: 'none', stroke: '#2dd4bf', strokeWidth: 1.8, opacity: 0.9
        })
      ),

      e('p', { className: 'text-xs text-gray-500 text-center mt-2' },
        'Ändere die Windgeschwindigkeit und beobachte, wie sich Spektrum und Wellen verändern.')
    );
  }

  window.WaveSpectrumViz = WaveSpectrumViz;
})();
