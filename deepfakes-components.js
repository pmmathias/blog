/**
 * deepfakes-components.js
 * Interactive React components for "Deepfakes & Dimensionen" blog post.
 * Components: MatrixTransformViz, PCAPlayground, KernelTrickViz, DimensionProjector,
 *             AutoencoderMNIST, LatentSpaceExplorer
 */

(function () {
  'use strict';
  var e = React.createElement;
  var useState = React.useState;
  var useRef = React.useRef;
  var useEffect = React.useEffect;
  var useMemo = React.useMemo;
  var useCallback = React.useCallback;

  // ============================================================
  // 1. MatrixTransformViz
  //    Interactive: drag a 2D vector, apply rotation/scale matrix
  // ============================================================
  function MatrixTransformViz() {
    var _angle = useState(45);
    var angle = _angle[0], setAngle = _angle[1];
    var _scale = useState(1.0);
    var scaleFactor = _scale[0], setScale = _scale[1];
    var _vec = useState([2, 1.5]);
    var vec = _vec[0], setVec = _vec[1];

    var W = 500, H = 400, cx = W / 2, cy = H / 2, unit = 40;

    var rad = angle * Math.PI / 180;
    var cosA = Math.cos(rad), sinA = Math.sin(rad);
    var m00 = scaleFactor * cosA, m01 = -scaleFactor * sinA;
    var m10 = scaleFactor * sinA, m11 = scaleFactor * cosA;
    var tx = m00 * vec[0] + m01 * vec[1];
    var ty = m10 * vec[0] + m11 * vec[1];

    function toSvg(x, y) { return [cx + x * unit, cy - y * unit]; }
    var p0 = toSvg(0, 0);
    var pA = toSvg(vec[0], vec[1]);
    var pB = toSvg(tx, ty);

    // Grid lines
    var gridLines = [];
    for (var i = -6; i <= 6; i++) {
      var xp = cx + i * unit;
      var yp = cy + i * unit;
      gridLines.push(e('line', { key: 'gx' + i, x1: xp, y1: 0, x2: xp, y2: H, stroke: '#1e293b', strokeWidth: 0.5 }));
      gridLines.push(e('line', { key: 'gy' + i, x1: 0, y1: yp, x2: W, y2: yp, stroke: '#1e293b', strokeWidth: 0.5 }));
    }

    return e('div', { className: 'bg-gray-900 rounded-2xl p-4 my-8' },
      e('div', { className: 'flex flex-wrap gap-4 mb-3 items-center' },
        e('label', { className: 'text-sm text-gray-400' }, 'Rotation: ',
          e('input', { type: 'range', min: 0, max: 360, value: angle,
            onChange: function (ev) { setAngle(Number(ev.target.value)); },
            className: 'ml-2 w-32 accent-cyan-400' }),
          e('span', { className: 'ml-1 text-cyan-400 font-mono text-xs' }, angle + '\u00B0')
        ),
        e('label', { className: 'text-sm text-gray-400' }, 'Skalierung: ',
          e('input', { type: 'range', min: 0.2, max: 2.5, step: 0.1, value: scaleFactor,
            onChange: function (ev) { setScale(Number(ev.target.value)); },
            className: 'ml-2 w-32 accent-amber-400' }),
          e('span', { className: 'ml-1 text-amber-400 font-mono text-xs' }, scaleFactor.toFixed(1) + '\u00D7')
        )
      ),
      e('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full max-w-lg mx-auto' },
        // Grid
        gridLines,
        // Axes
        e('line', { x1: 0, y1: cy, x2: W, y2: cy, stroke: '#475569', strokeWidth: 1 }),
        e('line', { x1: cx, y1: 0, x2: cx, y2: H, stroke: '#475569', strokeWidth: 1 }),
        // Original vector
        e('line', { x1: p0[0], y1: p0[1], x2: pA[0], y2: pA[1], stroke: '#60a5fa', strokeWidth: 2.5, markerEnd: 'url(#arrowBlue)' }),
        e('circle', { cx: pA[0], cy: pA[1], r: 5, fill: '#60a5fa' }),
        e('text', { x: pA[0] + 8, y: pA[1] - 8, fill: '#60a5fa', fontSize: 13, fontFamily: 'monospace' },
          '(' + vec[0].toFixed(1) + ', ' + vec[1].toFixed(1) + ')'),
        // Transformed vector
        e('line', { x1: p0[0], y1: p0[1], x2: pB[0], y2: pB[1], stroke: '#fbbf24', strokeWidth: 2.5, strokeDasharray: '6 3' }),
        e('circle', { cx: pB[0], cy: pB[1], r: 5, fill: '#fbbf24' }),
        e('text', { x: pB[0] + 8, y: pB[1] - 8, fill: '#fbbf24', fontSize: 13, fontFamily: 'monospace' },
          '(' + tx.toFixed(1) + ', ' + ty.toFixed(1) + ')'),
        // Arc showing rotation
        (function () {
          var r = 30;
          var startAngle = Math.atan2(vec[1], vec[0]);
          var endAngle = Math.atan2(ty, tx);
          var sx = cx + r * Math.cos(-startAngle), sy = cy + r * Math.sin(-startAngle);
          var ex = cx + r * Math.cos(-endAngle), ey = cy + r * Math.sin(-endAngle);
          var largeArc = Math.abs(rad) > Math.PI ? 1 : 0;
          var sweep = rad > 0 ? 0 : 1;
          return e('path', {
            d: 'M ' + sx + ' ' + sy + ' A ' + r + ' ' + r + ' 0 ' + largeArc + ' ' + sweep + ' ' + ex + ' ' + ey,
            fill: 'none', stroke: '#fbbf24', strokeWidth: 1, strokeOpacity: 0.6
          });
        })(),
        // Arrow marker
        e('defs', null,
          e('marker', { id: 'arrowBlue', markerWidth: 8, markerHeight: 6, refX: 8, refY: 3, orient: 'auto' },
            e('path', { d: 'M0,0 L8,3 L0,6', fill: '#60a5fa' })
          )
        )
      ),
      e('p', { className: 'text-xs text-gray-500 mt-2 text-center' },
        'Matrix: R = ',
        e('span', { className: 'font-mono' }, '[' + m00.toFixed(2) + ', ' + m01.toFixed(2) + '; ' + m10.toFixed(2) + ', ' + m11.toFixed(2) + ']')
      )
    );
  }

  // ============================================================
  // 2. PCAPlayground
  //    Draw 2D points, see PCA axes live
  // ============================================================
  function PCAPlayground() {
    var _points = useState(function () {
      // Generate default correlated data
      var pts = [];
      for (var i = 0; i < 60; i++) {
        var x = (Math.random() - 0.5) * 3;
        var y = 0.7 * x + (Math.random() - 0.5) * 1.2;
        pts.push([x, y]);
      }
      return pts;
    });
    var points = _points[0], setPoints = _points[1];
    var _nComp = useState(2);
    var nComp = _nComp[0], setNComp = _nComp[1];

    var W = 500, H = 400, cx = W / 2, cy = H / 2, unit = 50;

    // Compute PCA
    var pca = useMemo(function () {
      if (points.length < 2) return null;
      var n = points.length;
      var mx = 0, my = 0;
      points.forEach(function (p) { mx += p[0]; my += p[1]; });
      mx /= n; my /= n;

      var cxx = 0, cxy = 0, cyy = 0;
      points.forEach(function (p) {
        var dx = p[0] - mx, dy = p[1] - my;
        cxx += dx * dx; cxy += dx * dy; cyy += dy * dy;
      });
      cxx /= n; cxy /= n; cyy /= n;

      // Eigenvalues of 2x2 covariance
      var trace = cxx + cyy;
      var det = cxx * cyy - cxy * cxy;
      var disc = Math.sqrt(Math.max(0, trace * trace / 4 - det));
      var l1 = trace / 2 + disc;
      var l2 = trace / 2 - disc;

      // Eigenvectors
      function eigvec(lambda) {
        var vx = cxy, vy = lambda - cxx;
        var len = Math.sqrt(vx * vx + vy * vy);
        return len > 1e-10 ? [vx / len, vy / len] : [1, 0];
      }

      var totalVar = l1 + l2;
      return {
        mean: [mx, my],
        eigenvalues: [l1, l2],
        eigenvectors: [eigvec(l1), eigvec(l2)],
        explained: totalVar > 0 ? [l1 / totalVar * 100, l2 / totalVar * 100] : [50, 50]
      };
    }, [points]);

    function toSvg(x, y) { return [cx + x * unit, cy - y * unit]; }

    function handleClick(ev) {
      var rect = ev.currentTarget.getBoundingClientRect();
      var sx = ev.clientX - rect.left;
      var sy = ev.clientY - rect.top;
      var svgW = rect.width, svgH = rect.height;
      var x = (sx / svgW * W - cx) / unit;
      var y = -(sy / svgH * H - cy) / unit;
      setPoints(points.concat([[x, y]]));
    }

    function reset() {
      var pts = [];
      for (var i = 0; i < 60; i++) {
        var x = (Math.random() - 0.5) * 3;
        var y = 0.7 * x + (Math.random() - 0.5) * 1.2;
        pts.push([x, y]);
      }
      setPoints(pts);
    }

    // Draw PCA axes
    var pcaLines = [];
    if (pca) {
      var colors = ['#22d3ee', '#f59e0b'];
      for (var k = 0; k < nComp; k++) {
        var ev = pca.eigenvectors[k];
        var scale = Math.sqrt(pca.eigenvalues[k]) * 3;
        var p1 = toSvg(pca.mean[0] - ev[0] * scale, pca.mean[1] - ev[1] * scale);
        var p2 = toSvg(pca.mean[0] + ev[0] * scale, pca.mean[1] + ev[1] * scale);
        pcaLines.push(e('line', {
          key: 'pca' + k, x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1],
          stroke: colors[k], strokeWidth: 2.5, strokeOpacity: 0.8
        }));
        pcaLines.push(e('text', {
          key: 'pcal' + k, x: p2[0] + 5, y: p2[1] - 5,
          fill: colors[k], fontSize: 12, fontFamily: 'monospace'
        }, 'PC' + (k + 1) + ' (' + pca.explained[k].toFixed(0) + '%)'));
      }
    }

    return e('div', { className: 'bg-gray-900 rounded-2xl p-4 my-8' },
      e('div', { className: 'flex flex-wrap gap-4 mb-3 items-center' },
        e('label', { className: 'text-sm text-gray-400' }, 'Komponenten: ',
          e('input', { type: 'range', min: 1, max: 2, value: nComp,
            onChange: function (ev) { setNComp(Number(ev.target.value)); },
            className: 'ml-2 w-20 accent-cyan-400' }),
          e('span', { className: 'ml-1 text-cyan-400 font-mono text-xs' }, nComp)
        ),
        e('button', {
          onClick: reset,
          className: 'text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700'
        }, 'Neue Daten'),
        e('span', { className: 'text-xs text-gray-500' }, points.length + ' Punkte \u2014 Klick = neuer Punkt')
      ),
      e('svg', {
        viewBox: '0 0 ' + W + ' ' + H, className: 'w-full max-w-lg mx-auto cursor-crosshair',
        onClick: handleClick
      },
        // Grid
        e('line', { x1: 0, y1: cy, x2: W, y2: cy, stroke: '#334155', strokeWidth: 0.5 }),
        e('line', { x1: cx, y1: 0, x2: cx, y2: H, stroke: '#334155', strokeWidth: 0.5 }),
        // Points
        points.map(function (p, i) {
          var s = toSvg(p[0], p[1]);
          return e('circle', { key: i, cx: s[0], cy: s[1], r: 3.5, fill: '#60a5fa', fillOpacity: 0.6 });
        }),
        // PCA axes
        pcaLines,
        // Mean point
        pca && (function () {
          var m = toSvg(pca.mean[0], pca.mean[1]);
          return e('circle', { cx: m[0], cy: m[1], r: 5, fill: '#f1f5f9', stroke: '#22d3ee', strokeWidth: 2 });
        })()
      ),
      pca && e('p', { className: 'text-xs text-gray-500 mt-2 text-center font-mono' },
        '\u03BB\u2081 = ' + pca.eigenvalues[0].toFixed(3) +
        '  \u03BB\u2082 = ' + pca.eigenvalues[1].toFixed(3) +
        '  \u2014  Erkl\u00E4rte Varianz: ' + pca.explained[0].toFixed(0) + '% / ' + pca.explained[1].toFixed(0) + '%'
      )
    );
  }

  // ============================================================
  // 3. KernelTrickViz
  //    2D non-separable data → lifted to pseudo-3D view
  // ============================================================
  function KernelTrickViz() {
    var _lifted = useState(false);
    var lifted = _lifted[0], setLifted = _lifted[1];
    var _rotY = useState(0.5);
    var rotY = _rotY[0], setRotY = _rotY[1];

    var W = 500, H = 420, cx = W / 2, cy = H / 2;

    // Generate ring data
    var data = useMemo(function () {
      var pts = [];
      for (var i = 0; i < 80; i++) {
        var theta = Math.random() * Math.PI * 2;
        var r = 0.4 + Math.random() * 0.15;
        pts.push({ x: r * Math.cos(theta), y: r * Math.sin(theta), cls: 0 });
      }
      for (var j = 0; j < 80; j++) {
        var theta2 = Math.random() * Math.PI * 2;
        var r2 = 1.0 + Math.random() * 0.2;
        pts.push({ x: r2 * Math.cos(theta2), y: r2 * Math.sin(theta2), cls: 1 });
      }
      return pts;
    }, []);

    function project3d(x, y, z) {
      // Simple isometric-ish projection
      var cosR = Math.cos(rotY), sinR = Math.sin(rotY);
      var px = x * cosR - z * sinR;
      var py = -y + (x * sinR + z * cosR) * 0.3;
      return [cx + px * 130, cy + py * 130];
    }

    var colors = ['#60a5fa', '#f87171'];

    return e('div', { className: 'bg-gray-900 rounded-2xl p-4 my-8' },
      e('div', { className: 'flex flex-wrap gap-4 mb-3 items-center' },
        e('button', {
          onClick: function () { setLifted(!lifted); },
          className: 'text-sm px-4 py-1.5 rounded font-medium ' +
            (lifted ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700')
        }, lifted ? '\u2193 Zur\u00FCck in 2D' : '\u2191 In 3D heben (Kernel-Trick)'),
        lifted && e('label', { className: 'text-sm text-gray-400' }, 'Rotation: ',
          e('input', { type: 'range', min: 0, max: 3.14, step: 0.05, value: rotY,
            onChange: function (ev) { setRotY(Number(ev.target.value)); },
            className: 'ml-2 w-28 accent-cyan-400' })
        )
      ),
      e('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full max-w-lg mx-auto' },
        // Data points
        data.map(function (p, i) {
          var pos;
          if (!lifted) {
            pos = [cx + p.x * 130, cy - p.y * 130];
          } else {
            var z = p.x * p.x + p.y * p.y;
            pos = project3d(p.x, p.y, z);
          }
          return e('circle', {
            key: i, cx: pos[0], cy: pos[1], r: 3,
            fill: colors[p.cls], fillOpacity: 0.7
          });
        }),
        // Separating plane (when lifted)
        lifted && (function () {
          var planeZ = 0.6;
          var corners = [[-1.5, -1.5], [1.5, -1.5], [1.5, 1.5], [-1.5, 1.5]];
          var projected = corners.map(function (c) { return project3d(c[0], c[1], planeZ); });
          var pathD = 'M' + projected.map(function (p) { return p[0] + ',' + p[1]; }).join(' L') + ' Z';
          return e('path', { d: pathD, fill: '#22d3ee', fillOpacity: 0.12, stroke: '#22d3ee', strokeWidth: 1, strokeOpacity: 0.4 });
        })(),
        // Labels
        e('text', { x: W / 2, y: H - 10, textAnchor: 'middle', fill: '#94a3b8', fontSize: 13 },
          lifted ? 'z = x\u00B2 + y\u00B2 \u2014 linear trennbar!' : '2D: nicht linear trennbar'
        )
      )
    );
  }

  // ============================================================
  // 4. DimensionProjector
  //    Interactive rotating tesseract (4D → 2D)
  // ============================================================
  function DimensionProjector() {
    var _angleXW = useState(0);
    var angleXW = _angleXW[0], setAngleXW = _angleXW[1];
    var _angleYZ = useState(0);
    var angleYZ = _angleYZ[0], setAngleYZ = _angleYZ[1];
    var _auto = useState(true);
    var autoRotate = _auto[0], setAuto = _auto[1];
    var rafRef = useRef(null);
    var timeRef = useRef(0);

    var W = 500, H = 450, cx = W / 2, cy = H / 2;

    // 16 vertices of tesseract
    var vertices4d = useMemo(function () {
      var v = [];
      for (var x = -1; x <= 1; x += 2)
        for (var y = -1; y <= 1; y += 2)
          for (var z = -1; z <= 1; z += 2)
            for (var w = -1; w <= 1; w += 2)
              v.push([x, y, z, w]);
      return v;
    }, []);

    // 32 edges
    var edges = useMemo(function () {
      var ed = [];
      for (var i = 0; i < 16; i++)
        for (var j = i + 1; j < 16; j++) {
          var diff = 0;
          for (var k = 0; k < 4; k++) diff += Math.abs(vertices4d[i][k] - vertices4d[j][k]);
          if (diff === 2) ed.push([i, j]);
        }
      return ed;
    }, [vertices4d]);

    // Animation loop
    useEffect(function () {
      if (!autoRotate) { cancelAnimationFrame(rafRef.current); return; }
      function tick() {
        timeRef.current += 0.015;
        setAngleXW(timeRef.current);
        setAngleYZ(timeRef.current * 0.7);
        rafRef.current = requestAnimationFrame(tick);
      }
      rafRef.current = requestAnimationFrame(tick);
      return function () { cancelAnimationFrame(rafRef.current); };
    }, [autoRotate]);

    // Project 4D → 2D
    var projected = useMemo(function () {
      var c1 = Math.cos(angleXW), s1 = Math.sin(angleXW);
      var c2 = Math.cos(angleYZ), s2 = Math.sin(angleYZ);
      return vertices4d.map(function (v) {
        // Rotate in xw plane
        var x = v[0] * c1 - v[3] * s1;
        var y = v[1];
        var z = v[2];
        var w = v[0] * s1 + v[3] * c1;
        // Rotate in yz plane
        var y2 = y * c2 - z * s2;
        var z2 = y * s2 + z * c2;
        // Perspective from 4D
        var dist = 3;
        var sc = dist / (dist - w);
        return [cx + x * sc * 80, cy - y2 * sc * 80, sc];
      });
    }, [angleXW, angleYZ, vertices4d]);

    return e('div', { className: 'bg-gray-900 rounded-2xl p-4 my-8' },
      e('div', { className: 'flex flex-wrap gap-4 mb-3 items-center' },
        e('button', {
          onClick: function () { setAuto(!autoRotate); },
          className: 'text-sm px-3 py-1 rounded ' +
            (autoRotate ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300')
        }, autoRotate ? 'Stop' : 'Rotieren'),
        !autoRotate && e('label', { className: 'text-sm text-gray-400' }, 'XW: ',
          e('input', { type: 'range', min: 0, max: 6.28, step: 0.05, value: angleXW % 6.28,
            onChange: function (ev) { setAngleXW(Number(ev.target.value)); },
            className: 'ml-1 w-24 accent-cyan-400' })
        ),
        !autoRotate && e('label', { className: 'text-sm text-gray-400' }, 'YZ: ',
          e('input', { type: 'range', min: 0, max: 6.28, step: 0.05, value: angleYZ % 6.28,
            onChange: function (ev) { setAngleYZ(Number(ev.target.value)); },
            className: 'ml-1 w-24 accent-amber-400' })
        )
      ),
      e('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full max-w-lg mx-auto' },
        // Edges (sorted by average depth)
        edges.slice().sort(function (a, b) {
          var za = (projected[a[0]][2] + projected[a[1]][2]) / 2;
          var zb = (projected[b[0]][2] + projected[b[1]][2]) / 2;
          return za - zb;
        }).map(function (ed, i) {
          var p1 = projected[ed[0]], p2 = projected[ed[1]];
          var avgSc = (p1[2] + p2[2]) / 2;
          var opacity = 0.15 + avgSc * 0.25;
          return e('line', {
            key: i, x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1],
            stroke: '#60a5fa', strokeWidth: 1.2, strokeOpacity: Math.min(1, opacity)
          });
        }),
        // Vertices
        projected.map(function (p, i) {
          var r = 2 + p[2] * 1.5;
          return e('circle', {
            key: i, cx: p[0], cy: p[1], r: Math.max(1, r),
            fill: '#fbbf24', fillOpacity: 0.3 + p[2] * 0.25
          });
        }),
        e('text', { x: W / 2, y: H - 10, textAnchor: 'middle', fill: '#64748b', fontSize: 12 },
          'Tesserakt \u2014 4D \u2192 2D Projektion')
      )
    );
  }

  // ============================================================
  // 5. AutoencoderMNIST (placeholder — needs TF.js model)
  //    Draw a digit → encode → decode → show reconstruction
  // ============================================================
  function AutoencoderMNIST() {
    var canvasRef = useRef(null);
    var _drawing = useState(false);
    var drawing = _drawing[0], setDrawing = _drawing[1];
    var _latent = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    var latent = _latent[0], setLatent = _latent[1];
    var _reconstructed = useState(null);
    var reconstructed = _reconstructed[0], setReconstructed = _reconstructed[1];
    var _modelLoaded = useState(false);
    var modelLoaded = _modelLoaded[0], setModelLoaded = _modelLoaded[1];

    // Draw on canvas
    useEffect(function () {
      var canvas = canvasRef.current;
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, 140, 140);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }, []);

    function getPos(ev) {
      var rect = canvasRef.current.getBoundingClientRect();
      var x = (ev.clientX || ev.touches[0].clientX) - rect.left;
      var y = (ev.clientY || ev.touches[0].clientY) - rect.top;
      return [x * (140 / rect.width), y * (140 / rect.height)];
    }

    function startDraw(ev) {
      ev.preventDefault();
      setDrawing(true);
      var ctx = canvasRef.current.getContext('2d');
      var pos = getPos(ev);
      ctx.beginPath();
      ctx.moveTo(pos[0], pos[1]);
    }

    function doDraw(ev) {
      if (!drawing) return;
      ev.preventDefault();
      var ctx = canvasRef.current.getContext('2d');
      var pos = getPos(ev);
      ctx.lineTo(pos[0], pos[1]);
      ctx.stroke();
    }

    function endDraw() { setDrawing(false); }

    function clearCanvas() {
      var ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, 140, 140);
      setReconstructed(null);
      setLatent([0, 0, 0, 0, 0, 0, 0, 0]);
    }

    return e('div', { className: 'bg-gray-900 rounded-2xl p-4 my-8' },
      e('div', { className: 'flex flex-wrap gap-6 items-start justify-center' },
        // Input canvas
        e('div', null,
          e('p', { className: 'text-xs text-gray-500 mb-1 text-center' }, 'Zeichne eine Ziffer'),
          e('canvas', {
            ref: canvasRef, width: 140, height: 140,
            className: 'border border-gray-700 rounded-lg cursor-crosshair bg-black',
            style: { width: 140, height: 140, touchAction: 'none' },
            onMouseDown: startDraw, onMouseMove: doDraw, onMouseUp: endDraw, onMouseLeave: endDraw,
            onTouchStart: startDraw, onTouchMove: doDraw, onTouchEnd: endDraw
          }),
          e('button', {
            onClick: clearCanvas,
            className: 'mt-2 text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded hover:bg-gray-700 block mx-auto'
          }, 'L\u00F6schen')
        ),
        // Latent space
        e('div', { className: 'text-center' },
          e('p', { className: 'text-xs text-gray-500 mb-1' }, 'Latent Space (8D)'),
          e('div', { className: 'flex flex-col gap-1' },
            latent.map(function (val, i) {
              return e('div', { key: i, className: 'flex items-center gap-1' },
                e('span', { className: 'text-xs text-gray-600 w-4 font-mono' }, 'z' + i),
                e('div', {
                  className: 'w-20 h-3 bg-gray-800 rounded overflow-hidden'
                },
                  e('div', {
                    className: 'h-full rounded',
                    style: {
                      width: Math.abs(val) * 50 + '%',
                      marginLeft: val < 0 ? (50 - Math.abs(val) * 50) + '%' : '50%',
                      backgroundColor: val >= 0 ? '#22d3ee' : '#f59e0b'
                    }
                  })
                )
              );
            })
          )
        ),
        // Reconstructed output
        e('div', { className: 'text-center' },
          e('p', { className: 'text-xs text-gray-500 mb-1' }, 'Rekonstruktion'),
          e('div', {
            className: 'w-[140px] h-[140px] border border-gray-700 rounded-lg bg-black flex items-center justify-center'
          },
            !modelLoaded
              ? e('span', { className: 'text-xs text-gray-600' }, 'TF.js Modell\nkommt bald')
              : reconstructed
                ? e('canvas', { width: 28, height: 28, className: 'w-[140px] h-[140px] image-rendering-pixelated' })
                : e('span', { className: 'text-xs text-gray-600' }, 'Zeichne links')
          )
        )
      ),
      e('p', { className: 'text-xs text-gray-500 mt-3 text-center' },
        'Das TensorFlow.js-Modell wird in K\u00FCrze geladen. Aktuell: UI-Preview.')
    );
  }

  // ============================================================
  // 6. LatentSpaceExplorer
  //    Click on 2D latent space → see generated digit
  // ============================================================
  function LatentSpaceExplorer() {
    var _pos = useState([0, 0]);
    var pos = _pos[0], setPos = _pos[1];
    var W = 500, H = 400;

    // Pre-computed digit positions in latent space (mock data until model loaded)
    var digitClusters = useMemo(function () {
      var clusters = [];
      var labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var centers = [
        [-2, 2], [3, 1], [0, -2], [2, -1], [-1, 0],
        [1, 2], [-3, -1], [2, 3], [0, 1], [1, -2]
      ];
      labels.forEach(function (label, idx) {
        var cx = centers[idx][0], cy = centers[idx][1];
        for (var i = 0; i < 15; i++) {
          clusters.push({
            x: cx + (Math.random() - 0.5) * 1.5,
            y: cy + (Math.random() - 0.5) * 1.5,
            label: label,
            color: 'hsl(' + (idx * 36) + ', 70%, 60%)'
          });
        }
      });
      return clusters;
    }, []);

    var unit = 55;
    function toSvg(x, y) { return [W / 2 + x * unit, H / 2 - y * unit]; }

    function handleClick(ev) {
      var rect = ev.currentTarget.getBoundingClientRect();
      var sx = ev.clientX - rect.left;
      var sy = ev.clientY - rect.top;
      var x = (sx / rect.width * W - W / 2) / unit;
      var y = -(sy / rect.height * H - H / 2) / unit;
      setPos([x, y]);
    }

    // Find nearest digit
    var nearest = useMemo(function () {
      var minDist = Infinity, best = null;
      digitClusters.forEach(function (d) {
        var dist = Math.pow(d.x - pos[0], 2) + Math.pow(d.y - pos[1], 2);
        if (dist < minDist) { minDist = dist; best = d; }
      });
      return best;
    }, [pos, digitClusters]);

    var cursorSvg = toSvg(pos[0], pos[1]);

    return e('div', { className: 'bg-gray-900 rounded-2xl p-4 my-8' },
      e('p', { className: 'text-xs text-gray-500 mb-2' },
        'Klick im Latent Space \u2192 n\u00E4chste Ziffer. Jede Farbe = eine Ziffernklasse (0\u20139).'),
      e('div', { className: 'flex gap-4 items-start justify-center flex-wrap' },
        e('svg', {
          viewBox: '0 0 ' + W + ' ' + H, className: 'w-full max-w-md cursor-crosshair',
          onClick: handleClick
        },
          // Cluster dots
          digitClusters.map(function (d, i) {
            var p = toSvg(d.x, d.y);
            return e('circle', { key: i, cx: p[0], cy: p[1], r: 4, fill: d.color, fillOpacity: 0.5 });
          }),
          // Cursor crosshair
          e('circle', { cx: cursorSvg[0], cy: cursorSvg[1], r: 8, fill: 'none', stroke: '#f1f5f9', strokeWidth: 2 }),
          e('line', { x1: cursorSvg[0] - 12, y1: cursorSvg[1], x2: cursorSvg[0] + 12, y2: cursorSvg[1], stroke: '#f1f5f9', strokeWidth: 1 }),
          e('line', { x1: cursorSvg[0], y1: cursorSvg[1] - 12, x2: cursorSvg[0], y2: cursorSvg[1] + 12, stroke: '#f1f5f9', strokeWidth: 1 }),
          // Axes
          e('line', { x1: 0, y1: H / 2, x2: W, y2: H / 2, stroke: '#334155', strokeWidth: 0.5 }),
          e('line', { x1: W / 2, y1: 0, x2: W / 2, y2: H, stroke: '#334155', strokeWidth: 0.5 }),
          e('text', { x: W - 5, y: H / 2 - 5, textAnchor: 'end', fill: '#64748b', fontSize: 11 }, 'z\u2081'),
          e('text', { x: W / 2 + 5, y: 12, fill: '#64748b', fontSize: 11 }, 'z\u2082')
        ),
        // Result display
        e('div', { className: 'text-center' },
          e('p', { className: 'text-xs text-gray-500 mb-1' }, 'Generiert:'),
          e('div', {
            className: 'w-32 h-32 bg-black rounded-lg flex items-center justify-center border border-gray-700'
          },
            e('span', {
              className: 'text-6xl font-bold',
              style: { color: nearest ? nearest.color : '#666' }
            }, nearest ? nearest.label : '?')
          ),
          e('p', { className: 'text-xs text-gray-500 mt-1 font-mono' },
            'z = (' + pos[0].toFixed(2) + ', ' + pos[1].toFixed(2) + ')')
        )
      )
    );
  }

  // ============================================================
  // Export all components
  // ============================================================
  window.MatrixTransformViz = MatrixTransformViz;
  window.PCAPlayground = PCAPlayground;
  window.KernelTrickViz = KernelTrickViz;
  window.DimensionProjector = DimensionProjector;
  window.AutoencoderMNIST = AutoencoderMNIST;
  window.LatentSpaceExplorer = LatentSpaceExplorer;
})();
