// Hopfield-Netze Blog Components
// Interactive React components for hopfield.html.
// Vanilla React.createElement — no JSX, no build step.
// All math (Hebb, Pseudoinverse, Modern Hopfield) computed client-side
// from a 15 KB JSON of 10 MNIST patterns.

(function() {
  'use strict';

  // ====================================================================
  // i18n — locale-aware UI strings (driven by <html lang="...">)
  // Strings are written full-length per locale; `t(key, vars)` interpolates
  // {name}-placeholders. Falls back to German if a key is missing in EN.
  // ====================================================================

  var LANG = (typeof document !== 'undefined'
    && document.documentElement
    && document.documentElement.lang === 'en') ? 'en' : 'de';

  var STRINGS = {
    de: {
      loading: 'Lade MNIST-Daten ...',
      energy_hint: 'Energie-Verlauf erscheint hier, sobald die Iteration läuft.',
      energy_x: 'Flip-Nr.',
      energy_y: 'Energie',

      // Recall demo
      recall_title: 'Demo: Hopfield-Recall live',
      digit_pick: 'Ziffer zum Speichern und Abrufen:',
      digit_aria: 'Ziffer {d} auswählen',
      learning_rule: 'Lernregel: ',
      noise: 'Rauschen: ',
      btn_start: 'Start',
      btn_running: 'Läuft …',
      btn_restart: 'Neu starten',
      btn_reset: 'Zurücksetzen',
      btn_reseed: 'Anderes Rauschmuster',
      label_original: 'Original {d}',
      label_noisy: '{p} % verrauscht',
      label_endstate_sim: 'Endzustand · sim={s}',
      label_iter_flips: 'Iteration · {f} Flips',
      panel_no_energy_title: 'Keine Energie-Treppe',
      panel_no_energy_part1: 'Modern Hopfield arbeitet nicht mit der quadratischen Energie ',
      panel_no_energy_part2: ', sondern mit einer log-sum-exp-Form. Die Konvergenz erfolgt in einem Schritt — eine Treppe entsteht nicht. Die zugrundeliegende Mathematik folgt in Kapitel 5.',
      status_done_modern: 'Modern Hopfield konvergiert in einem Schritt — keine Treppe sichtbar.',
      status_done_classical: 'Konvergiert nach {f} Flips. Endzustand-Ähnlichkeit zum Original: {p} %.',
      status_idle: 'Bereit. „Start“ drücken.',

      // Bias sink demo
      bs_title: 'Demo: Bias-Sink — zehn Anfragen, ein Attraktor',
      bs_stored: 'Gespeicherte Muster (Original-Ziffern):',
      bs_noise_per_query: 'Rauschen pro Anfrage: ',
      bs_btn_recall_all: 'Alle zurückrufen',
      bs_btn_busy: 'Rechne …',
      bs_results_prefix: 'Endzustände nach Recall (',
      bs_hebb_matrix: 'Hebb-Matrix',
      bs_pi_matrix: 'Pseudoinverse-Matrix',
      bs_results_empty: 'Noch keine Resultate. „Alle zurückrufen“ drücken.',
      bs_hebb_collapse: 'Mittlere paarweise Ähnlichkeit der zehn Endzustände: {s}. Sämtliche Anfragen kollabieren in nahezu denselben Zustand — den Bias-Sink. Dieser Zustand ist visuell keine der gespeicherten Ziffern.',
      bs_hebb_partial: 'Mittlere paarweise Ähnlichkeit: {s}. Die Endzustände liegen alle im selben Tal der Energie-Landschaft (Bias-Sink), mit kleinen Variationen durch die unterschiedlichen verrauschten Startpunkte.',
      bs_pi_text: 'Mittlere paarweise Ähnlichkeit der zehn Endzustände: {s} — sie sind also strukturell verschieden. Jede Anfrage findet ihren eigenen Attraktor zurück — die Endzustände reproduzieren die gespeicherten Ziffern. Warum, ist Thema von Kapitel 4.',

      // Spectral slider
      spec_title: 'Demo: Spektrum-Slider — vom Bias-Sink zur Pseudoinverse',
      spec_alpha_left: 'α = 0  (reines Hebb)',
      spec_alpha_right: 'α = 1  (Pseudoinverse)',
      spec_top_eig: 'Top-Eigenwert  λ₁(W)',
      spec_gap: 'Spektrale Lücke  λ₁ / λ₂',
      spec_recall_class: 'Recall → Klasse',
      spec_digit_pick: 'Zu rekonstruierende Ziffer:',
      spec_label_original: 'Original  {d}',
      spec_label_noise: '{p} % Rauschen',
      spec_label_recall: 'Recall (α = {a}, sim = {s})',
      spec_caption: 'Mit wachsendem α schrumpft λ₁ von etwa 6,7 auf 1,0, und die spektrale Lücke λ₁/λ₂ fällt von rund 10× auf 1× — die Energie-Landschaft wird gleichmäßig. Bis etwa α = 0,8 erkennt der Klassifikator den Recall noch nicht als Zielziffer (rot); bei α nahe 1 kippt das Bild um (grün). Die sim-Zahl am Recall-Bild bleibt unterdessen wegen des dunklen Hintergrundes oberhalb 0,8 — sie ist ein schlechter Indikator für Klassen-Recall, was den Klassifikator-Vergleich didaktisch nötig macht.',

      // Beta slider
      beta_title: 'Demo: β-Slider — von weicher Mittelung zur scharfen Wahl',
      beta_left: 'β klein  (weiche Mittelung)',
      beta_right: 'β groß  (scharfe Wahl)',
      beta_softmax_intro: 'softmax-Verteilung über die zehn gespeicherten Ziffern ',
      beta_entropy_paren: '(Entropie {e} nat)',
      beta_recall_cont_prefix: 'Recall (kontinuierlich) → ',
      beta_cap_high: 'Hohe Entropie: die softmax-Verteilung ist breit, das Recall-Bild ist eine Mischung mehrerer Ziffern (graue Mitteltöne).',
      beta_cap_mid: 'Mittlere Entropie: einige wenige Ziffern dominieren die Mischung — das Recall-Bild beginnt eine erkennbare Form anzunehmen.',
      beta_cap_low: 'Niedrige Entropie: die softmax konzentriert sich auf eine einzelne Ziffer — das Recall-Bild ist nahezu identisch zu einem gespeicherten Muster (1-NN-artig).',

      // Three phases
      phases_title: 'Demo: Drei Phasen — Storage, Learning, Generalisierung',
      phases_rule_label: 'Lernregel:',
      phases_L_label: 'Sparsity  L: ',
      phases_busy: 'Berechne Phasendiagramm …',
      phases_busy_short: 'Berechne …',
      phases_cursor_label: 'α-Cursor (gelb): ',
      phases_band_storage: 'Storage',
      phases_band_learning: 'Learning',
      phases_band_generalisation: 'Generalisierung',
      phases_xaxis: 'Speicherlast  α = p / N',
      phases_yaxis: 'mittlere Magnetisierung',
      phases_stat_train: 'Train',
      phases_stat_features: 'Features',
      phases_stat_test: 'Test (ungesehen)',
      phases_caption: 'N = {N}, D = {D}, L = {L} Bauteile pro Muster, {S} Stichproben je Pool. Bei kleinem α (Storage-Phase) ist Train hoch, Features und Test niedrig. Bei mittlerem α (Learning-Phase) übernehmen die Features. Bei großem α werden auch ungesehene Mischungen (Test) zu Attraktoren — echte Generalisierung. Mit der Pseudoinverse-Regel ist der Effekt deutlich stärker als mit Hebb.'
    },
    en: {
      loading: 'Loading MNIST data ...',
      energy_hint: 'The energy trace will appear here once the iteration starts.',
      energy_x: 'Flip #',
      energy_y: 'Energy',

      recall_title: 'Demo: Hopfield recall, live',
      digit_pick: 'Digit to store and recall:',
      digit_aria: 'Select digit {d}',
      learning_rule: 'Learning rule: ',
      noise: 'Noise: ',
      btn_start: 'Start',
      btn_running: 'Running …',
      btn_restart: 'Restart',
      btn_reset: 'Reset',
      btn_reseed: 'New noise pattern',
      label_original: 'Original {d}',
      label_noisy: '{p} % noisy',
      label_endstate_sim: 'Final state · sim={s}',
      label_iter_flips: 'Iteration · {f} flips',
      panel_no_energy_title: 'No energy staircase',
      panel_no_energy_part1: 'Modern Hopfield does not use the quadratic energy ',
      panel_no_energy_part2: ', but a log-sum-exp form. Convergence happens in a single step — no staircase appears. The underlying mathematics follows in Chapter 5.',
      status_done_modern: 'Modern Hopfield converges in one step — no staircase to be seen.',
      status_done_classical: 'Converged after {f} flips. Final-state similarity to the original: {p} %.',
      status_idle: 'Ready. Press “Start”.',

      bs_title: 'Demo: bias sink — ten queries, one attractor',
      bs_stored: 'Stored patterns (original digits):',
      bs_noise_per_query: 'Noise per query: ',
      bs_btn_recall_all: 'Recall all',
      bs_btn_busy: 'Computing …',
      bs_results_prefix: 'Final states after recall (',
      bs_hebb_matrix: 'Hebb matrix',
      bs_pi_matrix: 'Pseudoinverse matrix',
      bs_results_empty: 'No results yet. Press “Recall all”.',
      bs_hebb_collapse: 'Mean pairwise similarity of the ten final states: {s}. All queries collapse into nearly the same state — the bias sink. Visually, this state is none of the stored digits.',
      bs_hebb_partial: 'Mean pairwise similarity: {s}. All final states sit in the same valley of the energy landscape (bias sink), with small variations from the different noisy starting points.',
      bs_pi_text: 'Mean pairwise similarity of the ten final states: {s} — they are structurally distinct. Each query returns to its own attractor; the final states reproduce the stored digits. Why, is the subject of Chapter 4.',

      spec_title: 'Demo: spectrum slider — from bias sink to pseudoinverse',
      spec_alpha_left: 'α = 0  (pure Hebb)',
      spec_alpha_right: 'α = 1  (pseudoinverse)',
      spec_top_eig: 'Top eigenvalue  λ₁(W)',
      spec_gap: 'Spectral gap  λ₁ / λ₂',
      spec_recall_class: 'Recall → class',
      spec_digit_pick: 'Digit to reconstruct:',
      spec_label_original: 'Original  {d}',
      spec_label_noise: '{p} % noise',
      spec_label_recall: 'Recall (α = {a}, sim = {s})',
      spec_caption: 'As α grows, λ₁ shrinks from about 6.7 to 1.0, and the spectral gap λ₁/λ₂ falls from roughly 10× to 1× — the energy landscape becomes uniform. Up to about α = 0.8 the classifier does not yet recognise the recall as the target digit (red); for α close to 1 the picture flips over (green). Meanwhile the sim value on the recall image stays above 0.8 because of the dark background — a poor indicator for class recall, which is what makes the classifier comparison didactically necessary.',

      beta_title: 'Demo: β-slider — from soft averaging to a sharp choice',
      beta_left: 'β small  (soft averaging)',
      beta_right: 'β large  (sharp choice)',
      beta_softmax_intro: 'softmax distribution over the ten stored digits ',
      beta_entropy_paren: '(entropy {e} nat)',
      beta_recall_cont_prefix: 'Recall (continuous) → ',
      beta_cap_high: 'High entropy: the softmax distribution is broad, the recall image is a blend of several digits (grey mid-tones).',
      beta_cap_mid: 'Medium entropy: a few digits dominate the blend — the recall image begins to take on a recognisable shape.',
      beta_cap_low: 'Low entropy: the softmax concentrates on a single digit — the recall image is almost identical to a stored pattern (1-NN-like).',

      phases_title: 'Demo: three phases — storage, learning, generalisation',
      phases_rule_label: 'Learning rule:',
      phases_L_label: 'Sparsity  L: ',
      phases_busy: 'Computing phase diagram …',
      phases_busy_short: 'Computing …',
      phases_cursor_label: 'α cursor (yellow): ',
      phases_band_storage: 'Storage',
      phases_band_learning: 'Learning',
      phases_band_generalisation: 'Generalisation',
      phases_xaxis: 'Storage load  α = p / N',
      phases_yaxis: 'mean magnetisation',
      phases_stat_train: 'Train',
      phases_stat_features: 'Features',
      phases_stat_test: 'Test (unseen)',
      phases_caption: 'N = {N}, D = {D}, L = {L} components per pattern, {S} samples per pool. At small α (storage phase) Train is high, Features and Test are low. At medium α (learning phase) the features take over. At large α even unseen mixtures (Test) become attractors — genuine generalisation. With the pseudoinverse rule the effect is markedly stronger than with Hebb.'
    }
  };

  function t(key, vars) {
    var dict = STRINGS[LANG] || STRINGS.de;
    var s = dict[key];
    if (s === undefined) s = STRINGS.de[key];
    if (s === undefined) return key;
    if (vars) {
      for (var k in vars) {
        s = s.split('{' + k + '}').join(String(vars[k]));
      }
    }
    return s;
  }


  // ====================================================================
  // Shared math helpers
  // ====================================================================

  // Convert compressed {0,1} pattern to bipolar {-1,+1} Float32Array
  function toBipolar(bits) {
    var arr = new Float32Array(bits.length);
    for (var i = 0; i < bits.length; i++) arr[i] = bits[i] * 2 - 1;
    return arr;
  }

  // Build Hebb weight matrix: W = (1/N) * sum_p xi xi^T, diagonal zero
  function buildHebbWeights(patterns, N) {
    var p = patterns.length;
    var W = new Float32Array(N * N);
    for (var mu = 0; mu < p; mu++) {
      var xi = patterns[mu];
      for (var i = 0; i < N; i++) {
        var xi_i = xi[i];
        if (xi_i === 0) continue;
        for (var j = 0; j < N; j++) {
          W[i * N + j] += xi_i * xi[j];
        }
      }
    }
    var invN = 1.0 / N;
    for (var k = 0; k < N * N; k++) W[k] *= invN;
    for (var d = 0; d < N; d++) W[d * N + d] = 0; // diagonal zero
    return W;
  }

  // Build Pseudoinverse weight matrix: W = X (X^T X)^{-1} X^T
  // patterns: array of p Float32Arrays of length N
  // For p << N (here p=10, N=784), this is cheap: invert a p×p matrix.
  function buildPseudoInverseWeights(patterns, N) {
    var p = patterns.length;
    // Gram matrix G = X^T X, shape (p, p), where columns of X are patterns
    var G = [];
    for (var mu = 0; mu < p; mu++) {
      G[mu] = new Float32Array(p);
      for (var nu = 0; nu < p; nu++) {
        var s = 0;
        for (var i = 0; i < N; i++) s += patterns[mu][i] * patterns[nu][i];
        G[mu][nu] = s;
      }
    }
    // Invert G via Gauss-Jordan
    var Ginv = invertSmallMatrix(G, p);
    // W = X * Ginv * X^T = sum_{mu,nu} xi_mu Ginv[mu,nu] xi_nu^T
    var W = new Float32Array(N * N);
    for (var mu2 = 0; mu2 < p; mu2++) {
      for (var nu2 = 0; nu2 < p; nu2++) {
        var c = Ginv[mu2][nu2];
        if (Math.abs(c) < 1e-12) continue;
        var xi_mu = patterns[mu2];
        var xi_nu = patterns[nu2];
        for (var i2 = 0; i2 < N; i2++) {
          var v_i = xi_mu[i2] * c;
          for (var j2 = 0; j2 < N; j2++) {
            W[i2 * N + j2] += v_i * xi_nu[j2];
          }
        }
      }
    }
    return W;
  }

  // Gauss-Jordan inversion for small (p×p) symmetric positive-semi-definite matrices
  function invertSmallMatrix(A, n) {
    var M = [];
    for (var i = 0; i < n; i++) {
      M[i] = new Float32Array(2 * n);
      for (var j = 0; j < n; j++) M[i][j] = A[i][j];
      M[i][n + i] = 1;
    }
    for (var col = 0; col < n; col++) {
      var pivot = col;
      for (var r = col + 1; r < n; r++) {
        if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
      }
      if (pivot !== col) { var tmp = M[col]; M[col] = M[pivot]; M[pivot] = tmp; }
      var diag = M[col][col];
      if (Math.abs(diag) < 1e-10) continue;
      for (var k = 0; k < 2 * n; k++) M[col][k] /= diag;
      for (var rr = 0; rr < n; rr++) {
        if (rr === col) continue;
        var factor = M[rr][col];
        for (var kk = 0; kk < 2 * n; kk++) M[rr][kk] -= factor * M[col][kk];
      }
    }
    var inv = [];
    for (var ii = 0; ii < n; ii++) {
      inv[ii] = new Float32Array(n);
      for (var jj = 0; jj < n; jj++) inv[ii][jj] = M[ii][n + jj];
    }
    return inv;
  }

  // Hopfield energy: E = -0.5 * v^T W v
  function energy(W, v, N) {
    var sum = 0;
    for (var i = 0; i < N; i++) {
      var vi = v[i];
      if (vi === 0) continue;
      for (var j = 0; j < N; j++) sum += vi * W[i * N + j] * v[j];
    }
    return -0.5 * sum;
  }

  // Modern Hopfield single-step update: v_new = sign(X * softmax(beta * X^T v))
  function modernHopfieldStep(patterns, v, beta, N) {
    var p = patterns.length;
    var scores = new Float32Array(p);
    var maxS = -Infinity;
    for (var mu = 0; mu < p; mu++) {
      var s = 0;
      for (var i = 0; i < N; i++) s += patterns[mu][i] * v[i];
      scores[mu] = beta * s;
      if (scores[mu] > maxS) maxS = scores[mu];
    }
    var sumExp = 0;
    var weights = new Float32Array(p);
    for (var mu2 = 0; mu2 < p; mu2++) {
      weights[mu2] = Math.exp(scores[mu2] - maxS);
      sumExp += weights[mu2];
    }
    var vNew = new Float32Array(N);
    for (var i2 = 0; i2 < N; i2++) {
      var acc = 0;
      for (var mu3 = 0; mu3 < p; mu3++) acc += weights[mu3] * patterns[mu3][i2];
      vNew[i2] = acc >= 0 ? 1 : -1;
    }
    return vNew;
  }

  // Cosine similarity between two ±1 vectors
  function cosineSim(a, b, N) {
    var s = 0;
    for (var i = 0; i < N; i++) s += a[i] * b[i];
    return s / N;
  }

  // Permutation
  function shuffle(arr, rng) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
  }

  // Simple seeded PRNG (Mulberry32)
  function makeRng(seed) {
    var s = seed >>> 0;
    return function() {
      s = (s + 0x6D2B79F5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Synchronous asynchronous-update recall — runs to fixed point in one call.
  // For the Bias-Sink demo we don't need animation; just the end state.
  function recallSync(W, v0, N, maxSweeps, seed) {
    var v = new Float32Array(N);
    for (var k = 0; k < N; k++) v[k] = v0[k];
    var rng = makeRng(seed);
    var order = []; for (var k2 = 0; k2 < N; k2++) order.push(k2);
    for (var sweep = 0; sweep < maxSweeps; sweep++) {
      shuffle(order, rng);
      var changed = false;
      for (var idx = 0; idx < N; idx++) {
        var i = order[idx];
        var s = 0;
        for (var j = 0; j < N; j++) s += W[i * N + j] * v[j];
        var nw = s >= 0 ? 1 : -1;
        if (nw !== v[i]) { v[i] = nw; changed = true; }
      }
      if (!changed) break;
    }
    return v;
  }


  // ====================================================================
  // Data loader (singleton — fetched once, shared across components)
  // ====================================================================

  var _dataPromise = null;
  function loadHopfieldData() {
    if (_dataPromise) return _dataPromise;
    _dataPromise = fetch('/img/hopfield-mnist-data.json')
      .then(function(r) { return r.json(); })
      .then(function(raw) {
        var patterns = raw.patterns_compressed.map(toBipolar);
        return { N: raw.N, p: raw.p, patterns: patterns, labels: raw.labels };
      });
    return _dataPromise;
  }


  // ====================================================================
  // PatternView — render a 28×28 ±1 vector as SVG
  // ====================================================================

  function PatternView(props) {
    var h = React.createElement;
    var v = props.v;
    var label = props.label;
    var highlight = props.highlight || null;  // optional: array of indices to highlight (red)
    var px = 6;  // pixel size in SVG units
    var rects = [];
    for (var i = 0; i < 784; i++) {
      var row = Math.floor(i / 28), col = i % 28;
      var on = v[i] > 0;
      var fill = on ? '#e2e8f0' : '#1f2937';
      if (highlight && highlight[i]) fill = '#f87171';
      rects.push(h('rect', { key: i,
        x: col * px, y: row * px, width: px, height: px, fill: fill }));
    }
    return h('div', { className: 'flex flex-col items-center' },
      h('svg', {
        viewBox: '0 0 ' + (28 * px) + ' ' + (28 * px),
        width: '100%',
        style: { maxWidth: '140px', background: '#0f172a', borderRadius: '4px' }
      }, rects),
      h('div', { className: 'text-xs text-gray-400 mt-2 text-center' }, label)
    );
  }


  // ====================================================================
  // EnergyChart — plot of energy vs. flip number
  // ====================================================================

  function EnergyChart(props) {
    var h = React.createElement;
    var history = props.history;  // [[flipNumber, energy], ...]
    if (!history || history.length === 0) {
      return h('div', { className: 'text-xs text-gray-500 text-center py-8' },
        t('energy_hint'));
    }
    var W = 260, H = 140, pad = 28;
    var xs = history.map(function(p) { return p[0]; });
    var ys = history.map(function(p) { return p[1]; });
    var xmin = 0, xmax = Math.max(1, xs[xs.length - 1]);
    var ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys);
    if (ymax === ymin) { ymax += 1; ymin -= 1; }
    function sx(x) { return pad + (x - xmin) / (xmax - xmin) * (W - pad - 8); }
    function sy(y) { return H - pad - (y - ymin) / (ymax - ymin) * (H - pad - 8); }
    var path = history.map(function(p, i) {
      return (i === 0 ? 'M' : 'L') + sx(p[0]) + ',' + sy(p[1]);
    }).join(' ');
    return h('svg', {
      viewBox: '0 0 ' + W + ' ' + H,
      width: '100%',
      style: { maxWidth: '320px', background: '#0f172a', borderRadius: '4px' }
    },
      h('line', { x1: pad, y1: H - pad, x2: W - 8, y2: H - pad, stroke: '#374151', strokeWidth: 1 }),
      h('line', { x1: pad, y1: 8, x2: pad, y2: H - pad, stroke: '#374151', strokeWidth: 1 }),
      h('text', { x: W / 2, y: H - 6, fill: '#6b7280', fontSize: 10, textAnchor: 'middle' }, t('energy_x')),
      h('text', { x: 8, y: H / 2, fill: '#6b7280', fontSize: 10, textAnchor: 'middle',
                  transform: 'rotate(-90 8 ' + (H / 2) + ')' }, t('energy_y')),
      h('path', { d: path, stroke: '#22d3ee', strokeWidth: 1.5, fill: 'none' }),
      h('circle', { cx: sx(xs[xs.length - 1]), cy: sy(ys[ys.length - 1]),
                    r: 3, fill: '#fbbf24' }),
      h('text', { x: W - 8, y: 20, fill: '#94a3b8', fontSize: 10, textAnchor: 'end' },
        'E = ' + ys[ys.length - 1].toFixed(1))
    );
  }


  // ====================================================================
  // HopfieldRecallDemo — main interactive component for chapter 2 + 5
  // ====================================================================

  function HopfieldRecallDemo() {
    var h = React.createElement;
    var dataState = React.useState(null);
    var data = dataState[0], setData = dataState[1];

    React.useEffect(function() {
      loadHopfieldData().then(setData);
    }, []);

    // UI state
    var digitState = React.useState(7);
    var digit = digitState[0], setDigit = digitState[1];
    var noiseState = React.useState(0.20);
    var noise = noiseState[0], setNoise = noiseState[1];
    var ruleState = React.useState('hebb');
    var rule = ruleState[0], setRule = ruleState[1];
    var seedState = React.useState(42);
    var seed = seedState[0], setSeed = seedState[1];

    // Dynamic state
    var runStateS = React.useState('idle');  // idle | running | done
    var runState = runStateS[0], setRunState = runStateS[1];
    var vCurS = React.useState(null);
    var vCur = vCurS[0], setVCur = vCurS[1];
    var energyHistS = React.useState([]);
    var energyHist = energyHistS[0], setEnergyHist = energyHistS[1];
    var flipCountS = React.useState(0);
    var flipCount = flipCountS[0], setFlipCount = flipCountS[1];

    // Precomputed weight matrices, keyed by rule. Recomputed when data loads.
    var weightsRef = React.useRef({});
    React.useEffect(function() {
      if (!data) return;
      var N = data.N;
      weightsRef.current = {
        hebb: buildHebbWeights(data.patterns, N),
        pi: buildPseudoInverseWeights(data.patterns, N),
      };
    }, [data]);

    // The animation loop ref
    var animRef = React.useRef(null);

    // Generate noisy initial state
    function makeNoisy() {
      if (!data) return null;
      var orig = data.patterns[digit];
      var N = data.N;
      var v = new Float32Array(N);
      for (var i = 0; i < N; i++) v[i] = orig[i];
      var nFlip = Math.round(noise * N);
      var rng = makeRng(seed);
      var indices = [];
      for (var k = 0; k < N; k++) indices.push(k);
      shuffle(indices, rng);
      for (var f = 0; f < nFlip; f++) v[indices[f]] *= -1;
      return v;
    }

    function handleStart() {
      if (!data) return;
      if (animRef.current) { clearInterval(animRef.current); animRef.current = null; }

      var N = data.N;
      var v = makeNoisy();
      var rng = makeRng(seed + 1);

      if (rule === 'modern') {
        // Modern Hopfield: single-step, kein iteratives sign-Update mit
        // quadratischer Energie. Die mathematisch korrekte Energie ist
        // log-sum-exp, eine andere Funktionalform; sie wird in Kapitel 5
        // eingeführt. Hier kein Energie-Plot, stattdessen ein Hinweis-Panel.
        var vNew = modernHopfieldStep(data.patterns, v, 8.0, N);
        setVCur(vNew);
        setEnergyHist([]);  // leer → skip plot, show explanation
        setFlipCount(0);
        setRunState('done');
        return;
      }

      // Classical: animate asynchronous flips
      var W = weightsRef.current[rule];
      if (!W) return;

      var e0 = energy(W, v, N);
      setVCur(v);
      setEnergyHist([[0, e0]]);
      setFlipCount(0);
      setRunState('running');

      // Tick: do a batch of mikroschritte per tick. Wert hoch genug gewählt,
      // damit ein voller Sweep (N=784 Mikroschritte) in unter einer Sekunde
      // durchläuft. Mobile-Erkennung verdoppelt den Wert, damit auch auf
      // schwächeren Geräten die Konvergenz unter ~5 s bleibt.
      var isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
      var STEPS_PER_TICK = isMobile ? 128 : 64;
      var maxSweeps = 30;
      var sweepCount = 0;
      var sweepFlips = 0;
      var order = []; for (var i = 0; i < N; i++) order.push(i);
      shuffle(order, rng);
      var orderPos = 0;
      var curEnergy = e0;
      var curFlipCount = 0;

      var energyAcc = [[0, e0]];

      animRef.current = setInterval(function() {
        for (var step = 0; step < STEPS_PER_TICK; step++) {
          if (orderPos >= N) {
            sweepCount++;
            if (sweepFlips === 0 || sweepCount >= maxSweeps) {
              clearInterval(animRef.current); animRef.current = null;
              setRunState('done');
              setEnergyHist(energyAcc.slice());
              setVCur(new Float32Array(v));
              setFlipCount(curFlipCount);
              return;
            }
            sweepFlips = 0;
            shuffle(order, rng);
            orderPos = 0;
          }
          var nIdx = order[orderPos++];
          var s = 0;
          for (var j = 0; j < N; j++) s += W[nIdx * N + j] * v[j];
          var newVal = s >= 0 ? 1 : -1;
          if (newVal !== v[nIdx]) {
            v[nIdx] = newVal;
            curFlipCount++;
            sweepFlips++;
            // Incrementally update energy (less expensive than full recompute);
            // for now recompute occasionally
            if (curFlipCount % 4 === 0) {
              curEnergy = energy(W, v, N);
              energyAcc.push([curFlipCount, curEnergy]);
            }
          }
        }
        // Push end-of-tick state
        setVCur(new Float32Array(v));
        setEnergyHist(energyAcc.slice());
        setFlipCount(curFlipCount);
      }, 40);
    }

    function handleReset() {
      if (animRef.current) { clearInterval(animRef.current); animRef.current = null; }
      setVCur(null);
      setEnergyHist([]);
      setFlipCount(0);
      setRunState('idle');
    }

    // Cleanup on unmount
    React.useEffect(function() {
      return function() { if (animRef.current) clearInterval(animRef.current); };
    }, []);

    if (!data) {
      return h('div', { className: 'p-8 text-center text-gray-500 text-sm' },
        t('loading'));
    }

    var orig = data.patterns[digit];
    var noisy = vCur ? null : makeNoisy();
    var displayCurrent = vCur || makeNoisy();

    var simToOrig = displayCurrent ? cosineSim(displayCurrent, orig, data.N) : 0;

    var ruleLabel = { hebb: 'Hebb', pi: 'Pseudoinverse', modern: 'Modern Hopfield (β=8)' }[rule];

    // Digit-picker buttons (10 small pattern previews)
    var digitButtons = [];
    for (var d = 0; d < 10; d++) {
      var pat = data.patterns[d];
      var thumbRects = [];
      var px2 = 3;
      for (var k = 0; k < 784; k++) {
        var r = Math.floor(k / 28), c = k % 28;
        thumbRects.push(h('rect', { key: k,
          x: c * px2, y: r * px2, width: px2, height: px2,
          fill: pat[k] > 0 ? '#e2e8f0' : '#1f2937' }));
      }
      var isSel = d === digit;
      digitButtons.push(h('button', {
        key: d,
        onClick: (function(dd) { return function() { setDigit(dd); handleReset(); }; })(d),
        className: 'p-1 rounded ' + (isSel ? 'ring-2 ring-cyan-400' : 'ring-1 ring-gray-700 hover:ring-gray-500'),
        style: { background: '#0f172a' },
        'aria-label': t('digit_aria', { d: d })
      },
        h('svg', { viewBox: '0 0 ' + (28 * px2) + ' ' + (28 * px2),
                   width: 44, height: 44 }, thumbRects)
      ));
    }

    return h('div', {
      className: 'border border-gray-700 rounded-lg p-4 sm:p-6',
      style: { background: 'rgba(17, 24, 39, 0.5)' }
    },
      // ----- Header -----
      h('h4', { className: 'text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4' },
        t('recall_title')),

      // ----- Digit picker -----
      h('div', { className: 'mb-4' },
        h('label', { className: 'block text-xs text-gray-400 mb-2' }, t('digit_pick')),
        h('div', { className: 'flex flex-wrap gap-2' }, digitButtons)
      ),

      // ----- Rule and noise -----
      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-4' },
        h('div', null,
          h('label', { className: 'block text-xs text-gray-400 mb-2' },
            t('learning_rule'), h('span', { className: 'text-cyan-400 font-semibold' }, ruleLabel)),
          h('div', { className: 'flex gap-2' },
            [['hebb', 'Hebb'], ['pi', 'Pseudoinverse'], ['modern', 'Modern Hopfield']].map(function(r) {
              return h('button', {
                key: r[0],
                onClick: function() { setRule(r[0]); handleReset(); },
                className: 'px-3 py-1.5 text-xs rounded transition ' +
                  (rule === r[0]
                    ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500'
                    : 'bg-gray-800 text-gray-400 ring-1 ring-gray-700 hover:bg-gray-700')
              }, r[1]);
            })
          )
        ),
        h('div', null,
          h('label', { className: 'block text-xs text-gray-400 mb-2' },
            t('noise'), h('span', { className: 'text-cyan-400 font-semibold' },
              Math.round(noise * 100) + ' %')),
          h('input', {
            type: 'range', min: 0, max: 50, step: 1,
            value: Math.round(noise * 100),
            onChange: function(e) { setNoise(parseInt(e.target.value, 10) / 100); handleReset(); },
            className: 'w-full',
            style: { accentColor: '#22d3ee' }
          })
        )
      ),

      // ----- Action buttons -----
      h('div', { className: 'flex gap-2 mb-4' },
        h('button', {
          onClick: handleStart,
          disabled: runState === 'running',
          className: 'px-4 py-2 text-sm font-medium rounded transition ' +
            (runState === 'running'
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-cyan-600 hover:bg-cyan-500 text-white')
        }, runState === 'running' ? t('btn_running') : (runState === 'done' ? t('btn_restart') : t('btn_start'))),
        h('button', {
          onClick: handleReset,
          className: 'px-4 py-2 text-sm font-medium rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition'
        }, t('btn_reset')),
        h('button', {
          onClick: function() { setSeed(seed + 1); handleReset(); },
          className: 'px-4 py-2 text-sm font-medium rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition'
        }, t('btn_reseed'))
      ),

      // ----- Three patterns + energy chart -----
      h('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-3 items-start' },
        h(PatternView, { v: orig, label: t('label_original', { d: digit }) }),
        h(PatternView, { v: makeNoisy(), label: t('label_noisy', { p: Math.round(noise * 100) }) }),
        h(PatternView, {
          v: displayCurrent,
          label: runState === 'done'
            ? t('label_endstate_sim', { s: simToOrig.toFixed(2) })
            : (runState === 'running' ? t('label_iter_flips', { f: flipCount }) : '—')
        }),
        h('div', { className: 'col-span-2 md:col-span-1' },
          rule === 'modern'
            ? h('div', {
                style: {
                  background: '#0f172a', borderRadius: '4px',
                  border: '1px solid #1f2937',
                  padding: '1rem', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'center',
                  fontSize: '11px', color: '#94a3b8',
                  lineHeight: '1.5'
                }
              },
                h('div', { style: { color: '#c4b5fd', fontWeight: 600, marginBottom: '6px' } },
                  t('panel_no_energy_title')),
                h('div', null,
                  t('panel_no_energy_part1'),
                  h('span', { style: { fontFamily: 'monospace', color: '#cbd5e1' } },
                    '−½ vᵀWv'),
                  t('panel_no_energy_part2')))
            : h(EnergyChart, { history: energyHist })
        )
      ),

      // ----- Status -----
      h('div', { className: 'mt-4 text-xs text-gray-500' },
        runState === 'done'
          ? (rule === 'modern'
              ? t('status_done_modern')
              : t('status_done_classical', { f: flipCount, p: (simToOrig * 100).toFixed(0) }))
          : (runState === 'running'
              ? t('btn_running')
              : t('status_idle'))
      )
    );
  }


  // ====================================================================
  // BiasSinkDemo — Chapter 3: all 10 queries collapse into one state (Hebb)
  // vs. each query finds its own attractor (Pseudoinverse).
  // ====================================================================

  function BiasSinkDemo() {
    var h = React.createElement;

    var dataState = React.useState(null);
    var data = dataState[0], setData = dataState[1];

    React.useEffect(function() {
      loadHopfieldData().then(setData);
    }, []);

    var ruleState = React.useState('hebb');
    var rule = ruleState[0], setRule = ruleState[1];
    var noiseState = React.useState(0.15);
    var noise = noiseState[0], setNoise = noiseState[1];
    var seedState = React.useState(123);
    var seed = seedState[0], setSeed = seedState[1];
    var resultsState = React.useState(null);  // null | Array of Float32Array
    var results = resultsState[0], setResults = resultsState[1];
    var busyState = React.useState(false);
    var busy = busyState[0], setBusy = busyState[1];

    var weightsRef = React.useRef({});
    React.useEffect(function() {
      if (!data) return;
      weightsRef.current = {
        hebb: buildHebbWeights(data.patterns, data.N),
        pi: buildPseudoInverseWeights(data.patterns, data.N),
      };
      setResults(null);
    }, [data]);

    function handleRecallAll() {
      if (!data || busy) return;
      setBusy(true);
      // Defer so the UI can update to "busy" before the heavy loop
      setTimeout(function() {
        var N = data.N;
        var W = weightsRef.current[rule];
        var nFlip = Math.round(noise * N);
        var rng = makeRng(seed);
        var idx = []; for (var i = 0; i < N; i++) idx.push(i);

        var out = [];
        for (var d = 0; d < data.patterns.length; d++) {
          // Per-digit noise: shuffle a fresh index list with a derived seed
          var v0 = new Float32Array(N);
          for (var k = 0; k < N; k++) v0[k] = data.patterns[d][k];
          var rng2 = makeRng(seed + d * 17);
          shuffle(idx, rng2);
          for (var f = 0; f < nFlip; f++) v0[idx[f]] *= -1;
          var v_end = recallSync(W, v0, N, 30, seed + d * 31 + 100);
          out.push(v_end);
        }
        setResults(out);
        setBusy(false);
      }, 30);
    }

    function handleReset() {
      setResults(null);
    }

    if (!data) {
      return h('div', { className: 'p-8 text-center text-gray-500 text-sm' },
        t('loading'));
    }

    // Helper: render a row of 10 small pattern thumbnails
    function patternRow(arr, accent) {
      var pxs = 3;
      var cells = [];
      for (var d = 0; d < 10; d++) {
        var pat = arr[d];
        var rects = [];
        if (pat) {
          for (var k = 0; k < 784; k++) {
            var rr = Math.floor(k / 28), cc = k % 28;
            rects.push(h('rect', { key: k,
              x: cc * pxs, y: rr * pxs, width: pxs, height: pxs,
              fill: pat[k] > 0 ? '#e2e8f0' : '#1f2937' }));
          }
        } else {
          rects.push(h('rect', { key: 'bg',
            x: 0, y: 0, width: 28 * pxs, height: 28 * pxs, fill: '#0f172a' }));
        }
        cells.push(h('div', { key: d, className: 'flex flex-col items-center gap-1' },
          h('svg', { viewBox: '0 0 ' + (28 * pxs) + ' ' + (28 * pxs),
                     width: 56, height: 56,
                     style: { background: '#0f172a', borderRadius: '3px',
                              border: accent ? '1px solid ' + accent : '1px solid #1f2937' } },
            rects),
          h('div', { className: 'text-[10px] text-gray-500' }, '' + d)
        ));
      }
      return h('div', { className: 'grid grid-cols-5 sm:grid-cols-10 gap-2 justify-items-center' }, cells);
    }

    // Mittlere paarweise Cosinus-Ähnlichkeit aller Endzustände (45 Paare).
    // = 1.0 → alle identisch. > 0.95 → kollabierter Bias-Sink. < 0.5 → separate Attraktoren.
    var avgSim = null;
    if (results) {
      var sumSim = 0, nPairs = 0;
      for (var a = 0; a < results.length; a++) {
        for (var b = a + 1; b < results.length; b++) {
          var dot = 0;
          for (var k = 0; k < data.N; k++) dot += results[a][k] * results[b][k];
          sumSim += dot / data.N;
          nPairs++;
        }
      }
      avgSim = nPairs > 0 ? sumSim / nPairs : 1.0;
    }

    return h('div', {
      className: 'border border-gray-700 rounded-lg p-4 sm:p-6',
      style: { background: 'rgba(17, 24, 39, 0.5)' }
    },
      h('h4', { className: 'text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4' },
        t('bs_title')),

      // Stored patterns (originals)
      h('div', { className: 'mb-4' },
        h('div', { className: 'text-xs text-gray-400 mb-2' }, t('bs_stored')),
        patternRow(data.patterns, null)
      ),

      // Controls
      h('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-4' },
        h('div', null,
          h('label', { className: 'block text-xs text-gray-400 mb-2' },
            t('learning_rule'),
            h('span', { className: 'text-cyan-400 font-semibold' },
              rule === 'hebb' ? 'Hebb' : 'Pseudoinverse')),
          h('div', { className: 'flex gap-2' },
            [['hebb', 'Hebb'], ['pi', 'Pseudoinverse']].map(function(r) {
              return h('button', {
                key: r[0],
                onClick: function() { setRule(r[0]); setResults(null); },
                className: 'px-3 py-1.5 text-xs rounded transition ' +
                  (rule === r[0]
                    ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500'
                    : 'bg-gray-800 text-gray-400 ring-1 ring-gray-700 hover:bg-gray-700')
              }, r[1]);
            })
          )
        ),
        h('div', null,
          h('label', { className: 'block text-xs text-gray-400 mb-2' },
            t('bs_noise_per_query'),
            h('span', { className: 'text-cyan-400 font-semibold' },
              Math.round(noise * 100) + ' %')),
          h('input', {
            type: 'range', min: 0, max: 30, step: 1,
            value: Math.round(noise * 100),
            onChange: function(e) { setNoise(parseInt(e.target.value, 10) / 100); setResults(null); },
            className: 'w-full',
            style: { accentColor: '#22d3ee' }
          })
        )
      ),

      h('div', { className: 'flex gap-2 mb-5' },
        h('button', {
          onClick: handleRecallAll,
          disabled: busy,
          className: 'px-4 py-2 text-sm font-medium rounded transition ' +
            (busy
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-cyan-600 hover:bg-cyan-500 text-white')
        }, busy ? t('bs_btn_busy') : t('bs_btn_recall_all')),
        h('button', {
          onClick: function() { setSeed(seed + 1); setResults(null); },
          className: 'px-4 py-2 text-sm font-medium rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition'
        }, t('btn_reseed')),
        h('button', {
          onClick: handleReset,
          className: 'px-4 py-2 text-sm font-medium rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition'
        }, t('btn_reset'))
      ),

      // Results row
      h('div', { className: 'mb-2' },
        h('div', { className: 'text-xs text-gray-400 mb-2' },
          t('bs_results_prefix')
            + (rule === 'hebb' ? t('bs_hebb_matrix') : t('bs_pi_matrix'))
            + '):'),
        results
          ? patternRow(results, rule === 'hebb' ? '#f59e0b' : '#22d3ee')
          : h('div', { className: 'text-xs text-gray-500 py-6 text-center border border-dashed border-gray-700 rounded' },
              t('bs_results_empty'))
      ),

      // Status / interpretation
      results && h('div', { className: 'mt-4 text-xs',
        style: { color: rule === 'hebb' ? '#fbbf24' : '#86efac' } },
        rule === 'hebb'
          ? (avgSim >= 0.95
              ? t('bs_hebb_collapse', { s: avgSim.toFixed(2) })
              : t('bs_hebb_partial', { s: avgSim.toFixed(2) }))
          : t('bs_pi_text', { s: avgSim.toFixed(2) })
      )
    );
  }


  // ====================================================================
  // SpectralSliderDemo — Chapter 4: interpolate W between Hebb and PI,
  // show top eigenvalue, cosine to bias vector, and recall behaviour.
  // Layout uses inline styles to avoid Tailwind-cache hazards.
  // ====================================================================

  // Power iteration for the dominant eigenpair of a symmetric N×N matrix.
  function topEigenpair(W, N, maxIter, seed) {
    var rng = makeRng(seed || 7);
    var v = new Float32Array(N);
    var nrm = 0;
    for (var i = 0; i < N; i++) { v[i] = rng() - 0.5; nrm += v[i] * v[i]; }
    nrm = Math.sqrt(nrm);
    for (var i2 = 0; i2 < N; i2++) v[i2] /= nrm;
    var lambda = 0;
    var w = new Float32Array(N);
    for (var iter = 0; iter < maxIter; iter++) {
      for (var ii = 0; ii < N; ii++) {
        var s = 0;
        for (var j = 0; j < N; j++) s += W[ii * N + j] * v[j];
        w[ii] = s;
      }
      var nrm2 = 0;
      for (var i3 = 0; i3 < N; i3++) nrm2 += w[i3] * w[i3];
      lambda = Math.sqrt(nrm2);
      if (lambda < 1e-12) break;
      for (var i4 = 0; i4 < N; i4++) v[i4] = w[i4] / lambda;
    }
    return { value: lambda, vector: new Float32Array(v) };
  }

  function interpolateW(W_hebb, W_pi, alpha, target) {
    for (var k = 0; k < W_hebb.length; k++) {
      target[k] = (1 - alpha) * W_hebb[k] + alpha * W_pi[k];
    }
  }

  function inlinePatternView(v, label, sizePx) {
    var h = React.createElement;
    var px = sizePx || 4;
    var rects = [];
    for (var k = 0; k < 784; k++) {
      var rr = Math.floor(k / 28), cc = k % 28;
      rects.push(h('rect', { key: k,
        x: cc * px, y: rr * px, width: px, height: px,
        fill: v && v[k] > 0 ? '#e2e8f0' : '#1f2937' }));
    }
    return h('div', { style: { display: 'flex', flexDirection: 'column',
                                 alignItems: 'center', gap: '4px' } },
      h('svg', {
        viewBox: '0 0 ' + (28 * px) + ' ' + (28 * px),
        width: 28 * px, height: 28 * px,
        style: { background: '#0f172a', borderRadius: '4px',
                  border: '1px solid #1f2937' }
      }, rects),
      h('div', { style: { fontSize: '11px', color: '#9ca3af',
                           textAlign: 'center' } }, label)
    );
  }

  function SpectralSliderDemo() {
    var h = React.createElement;
    var dataState = React.useState(null);
    var data = dataState[0], setData = dataState[1];
    React.useEffect(function() { loadHopfieldData().then(setData); }, []);

    var alphaState = React.useState(0);
    var alpha = alphaState[0], setAlpha = alphaState[1];
    var digitState = React.useState(7);
    var digit = digitState[0], setDigit = digitState[1];
    var noiseState = React.useState(0.15);
    var noise = noiseState[0], setNoise = noiseState[1];
    var seedState = React.useState(11);
    var seed = seedState[0], setSeed = seedState[1];

    var statsState = React.useState(null);
    var stats = statsState[0], setStats = statsState[1];

    var wRef = React.useRef({ hebb: null, pi: null, scratch: null, biasUnit: null });

    React.useEffect(function() {
      if (!data) return;
      var N = data.N;
      var W_h = buildHebbWeights(data.patterns, N);
      var W_p = buildPseudoInverseWeights(data.patterns, N);
      var bias = new Float32Array(N);
      for (var i = 0; i < N; i++) {
        var s = 0;
        for (var m = 0; m < data.patterns.length; m++) s += data.patterns[m][i];
        bias[i] = s / data.patterns.length;
      }
      var bnrm = 0; for (var i2 = 0; i2 < N; i2++) bnrm += bias[i2] * bias[i2];
      bnrm = Math.sqrt(bnrm);
      if (bnrm > 0) for (var i3 = 0; i3 < N; i3++) bias[i3] /= bnrm;
      wRef.current = { hebb: W_h, pi: W_p,
                        scratch: new Float32Array(N * N), biasUnit: bias };
      // Initial compute for alpha=0
      doCompute(0, digit, noise, seed);
    }, [data]);

    function doCompute(a, d, ns, sd) {
      var refs = wRef.current;
      if (!refs.hebb || !data) return;
      var N = data.N;
      interpolateW(refs.hebb, refs.pi, a, refs.scratch);

      // Top eigenpair via Power Iteration
      var ep1 = topEigenpair(refs.scratch, N, 25, 17);

      // Second eigenvalue via deflation: W' = W - λ_1 v_1 v_1^T, then power iter.
      // Speichern wir die deflierte Matrix nicht persistent — nur skalare Ausgabe.
      // Approximation per "shifted power iteration" auf Kopie: hier deflate inline.
      var deflated = new Float32Array(N * N);
      for (var kk = 0; kk < N * N; kk++) deflated[kk] = refs.scratch[kk];
      for (var i = 0; i < N; i++) {
        var vi = ep1.vector[i];
        for (var j = 0; j < N; j++) deflated[i * N + j] -= ep1.value * vi * ep1.vector[j];
      }
      var ep2 = topEigenpair(deflated, N, 25, 23);
      var spectralGap = ep2.value > 1e-6 ? ep1.value / ep2.value : Infinity;

      // Recall der gewählten Ziffer aus verrauschtem Start
      var v0 = new Float32Array(N);
      for (var k = 0; k < N; k++) v0[k] = data.patterns[d][k];
      var nFlip = Math.round(ns * N);
      var idx = []; for (var i2 = 0; i2 < N; i2++) idx.push(i2);
      var rng = makeRng(sd);
      shuffle(idx, rng);
      for (var f = 0; f < nFlip; f++) v0[idx[f]] *= -1;
      var noisy = new Float32Array(v0);
      var recalled = recallSync(refs.scratch, v0, N, 30, sd + 100);

      // Ähnlichkeit zum Original (für Caption)
      var dotOrig = 0;
      for (var i4 = 0; i4 < N; i4++) dotOrig += recalled[i4] * data.patterns[d][i4];
      var sim = dotOrig / N;

      // Klassen-Identifikation: best match über alle 10 gespeicherten Muster
      var bestClass = -1, bestSim = -Infinity;
      for (var c = 0; c < data.patterns.length; c++) {
        var dot = 0;
        for (var p = 0; p < N; p++) dot += recalled[p] * data.patterns[c][p];
        var s = dot / N;
        if (s > bestSim) { bestSim = s; bestClass = c; }
      }

      setStats({
        alpha: a, topEig: ep1.value, spectralGap: spectralGap,
        noisy: noisy, recalled: recalled, sim: sim,
        bestClass: bestClass, bestSim: bestSim, targetClass: d
      });
    }

    React.useEffect(function() {
      if (!data || !wRef.current.hebb) return;
      var t = setTimeout(function() { doCompute(alpha, digit, noise, seed); }, 90);
      return function() { clearTimeout(t); };
    }, [alpha, digit, noise, seed, data]);

    if (!data) {
      return h('div', { style: { padding: '2rem', textAlign: 'center',
                                   color: '#6b7280', fontSize: '0.875rem' } },
        t('loading'));
    }

    var statBox = function(label, valueStr, color) {
      return h('div', { style: {
          flex: '1 1 0', minWidth: '110px',
          padding: '0.75rem 1rem', background: '#0f172a',
          border: '1px solid #1f2937', borderRadius: '6px', textAlign: 'center'
      } },
        h('div', { style: { fontSize: '11px', color: '#6b7280',
                             marginBottom: '4px' } }, label),
        h('div', { style: { fontSize: '20px', fontWeight: 600,
                             color: color || '#e2e8f0' } }, valueStr));
    };

    var digitButtons = [];
    for (var d = 0; d < 10; d++) {
      var pat = data.patterns[d];
      var thumbRects = [];
      var px = 2;
      for (var k = 0; k < 784; k++) {
        var rr = Math.floor(k / 28), cc = k % 28;
        thumbRects.push(h('rect', { key: k,
          x: cc * px, y: rr * px, width: px, height: px,
          fill: pat[k] > 0 ? '#e2e8f0' : '#1f2937' }));
      }
      var isSel = d === digit;
      digitButtons.push(h('button', {
        key: d,
        onClick: (function(dd) { return function() { setDigit(dd); }; })(d),
        style: { padding: '2px', background: '#0f172a',
                  border: isSel ? '2px solid #22d3ee' : '1px solid #1f2937',
                  borderRadius: '4px', cursor: 'pointer' }
      }, h('svg', { viewBox: '0 0 ' + (28 * px) + ' ' + (28 * px),
                     width: 32, height: 32 }, thumbRects)));
    }

    var topEig = stats ? stats.topEig.toFixed(2) : '–';
    var gap = stats ? (isFinite(stats.spectralGap) ? stats.spectralGap.toFixed(1) + '×' : '∞') : '–';
    var classHit = stats && stats.bestClass === stats.targetClass;
    var classStr = stats ? ('→ ' + stats.bestClass + (classHit ? ' ✓' : ' ✗')) : '–';
    var sim = stats ? stats.sim.toFixed(2) : '–';
    var orig = data.patterns[digit];

    return h('div', { style: {
        border: '1px solid #374151', borderRadius: '8px',
        padding: '1.25rem 1.5rem', background: 'rgba(17, 24, 39, 0.5)'
    } },
      h('h4', { style: { fontSize: '13px', fontWeight: 600, color: '#22d3ee',
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                          margin: '0 0 1rem 0' } },
        t('spec_title')),

      h('div', { style: { marginBottom: '1.25rem' } },
        h('div', { style: { display: 'flex', justifyContent: 'space-between',
                             fontSize: '11px', color: '#9ca3af',
                             marginBottom: '4px' } },
          h('span', null, t('spec_alpha_left')),
          h('span', { style: { color: '#22d3ee', fontWeight: 600 } },
            'α = ' + alpha.toFixed(2)),
          h('span', null, t('spec_alpha_right'))
        ),
        h('input', { type: 'range', min: 0, max: 100, step: 1,
          value: Math.round(alpha * 100),
          onChange: function(e) { setAlpha(parseInt(e.target.value, 10) / 100); },
          style: { width: '100%', accentColor: '#22d3ee' } })
      ),

      h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
                           marginBottom: '1.25rem' } },
        statBox(t('spec_top_eig'), topEig,
          stats && stats.topEig > 3 ? '#fbbf24' : '#86efac'),
        statBox(t('spec_gap'), gap,
          stats && stats.spectralGap > 3 ? '#fbbf24' : '#86efac'),
        statBox(t('spec_recall_class'), classStr,
          classHit ? '#86efac' : '#f87171')
      ),

      h('div', { style: { marginBottom: '1rem' } },
        h('label', { style: { display: 'block', fontSize: '11px',
                                color: '#9ca3af', marginBottom: '6px' } },
          t('spec_digit_pick')),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
          digitButtons)
      ),

      h('div', { style: { display: 'grid',
                           gridTemplateColumns: '1fr 1fr', gap: '1rem',
                           marginBottom: '1.25rem' } },
        h('div', null,
          h('label', { style: { display: 'block', fontSize: '11px',
                                  color: '#9ca3af', marginBottom: '4px' } },
            t('noise'), h('span', { style: { color: '#22d3ee',
                                                 fontWeight: 600 } },
              Math.round(noise * 100) + ' %')),
          h('input', { type: 'range', min: 0, max: 40, step: 1,
            value: Math.round(noise * 100),
            onChange: function(e) { setNoise(parseInt(e.target.value, 10) / 100); },
            style: { width: '100%', accentColor: '#22d3ee' } })
        ),
        h('div', { style: { alignSelf: 'end' } },
          h('button', {
            onClick: function() { setSeed(seed + 1); },
            style: { padding: '0.4rem 0.8rem', fontSize: '12px',
                      borderRadius: '4px', background: '#1f2937',
                      color: '#d1d5db', border: '1px solid #374151',
                      cursor: 'pointer' }
          }, t('btn_reseed'))
        )
      ),

      h('div', { style: { display: 'grid',
                           gridTemplateColumns: 'repeat(3, 1fr)',
                           gap: '1rem', justifyItems: 'center' } },
        inlinePatternView(orig, t('spec_label_original', { d: digit }), 4),
        inlinePatternView(stats ? stats.noisy : null,
          t('spec_label_noise', { p: Math.round(noise * 100) }), 4),
        inlinePatternView(stats ? stats.recalled : null,
          t('spec_label_recall', { a: alpha.toFixed(2), s: sim }), 4)
      ),

      h('p', { style: { fontSize: '11px', color: '#9ca3af',
                          marginTop: '1rem', marginBottom: 0 } },
        t('spec_caption'))
    );
  }


  // ====================================================================
  // BetaSliderDemo — Chapter 5: softmax distribution and continuous recall
  // depending on β. At low β: blurry average. At high β: sharp 1-NN lookup.
  // Layout uses inline styles throughout.
  // ====================================================================

  function BetaSliderDemo() {
    var h = React.createElement;
    var dataState = React.useState(null);
    var data = dataState[0], setData = dataState[1];
    React.useEffect(function() { loadHopfieldData().then(setData); }, []);

    // β log-scale via state-as-exponent in [-1, 1.5] → β ∈ [0.1, ~31]
    var logBetaState = React.useState(0.3);  // β ≈ 2 (default, between blur and sharp)
    var logBeta = logBetaState[0], setLogBeta = logBetaState[1];
    var digitState = React.useState(7);
    var digit = digitState[0], setDigit = digitState[1];
    var noiseState = React.useState(0.20);
    var noise = noiseState[0], setNoise = noiseState[1];
    var seedState = React.useState(31);
    var seed = seedState[0], setSeed = seedState[1];

    var statsState = React.useState(null);
    var stats = statsState[0], setStats = statsState[1];

    function doCompute(logB, d, ns, sd) {
      if (!data) return;
      var beta = Math.pow(10, logB);
      var N = data.N;
      // Transformer-Konvention: effektives β wird durch √N skaliert
      // (entspricht dem 1/√d_k aus "Attention is All You Need"). Ohne diese
      // Skalierung wäre softmax bei MNIST schon bei β=0.1 voll konzentriert.
      var betaEff = beta / Math.sqrt(N);
      // Build noisy input
      var v = new Float32Array(N);
      for (var k = 0; k < N; k++) v[k] = data.patterns[d][k];
      var nFlip = Math.round(ns * N);
      var idx = []; for (var i = 0; i < N; i++) idx.push(i);
      var rng = makeRng(sd);
      shuffle(idx, rng);
      for (var f = 0; f < nFlip; f++) v[idx[f]] *= -1;
      var noisy = new Float32Array(v);

      // softmax weights w_μ ∝ exp(β_eff · ξ_μ · v), log-space for stability
      var scores = new Float32Array(data.patterns.length);
      var maxS = -Infinity;
      for (var mu = 0; mu < data.patterns.length; mu++) {
        var s = 0;
        for (var i2 = 0; i2 < N; i2++) s += data.patterns[mu][i2] * v[i2];
        scores[mu] = betaEff * s;
        if (scores[mu] > maxS) maxS = scores[mu];
      }
      var weights = new Float32Array(data.patterns.length);
      var sumExp = 0;
      for (var m = 0; m < data.patterns.length; m++) {
        weights[m] = Math.exp(scores[m] - maxS);
        sumExp += weights[m];
      }
      for (var m2 = 0; m2 < data.patterns.length; m2++) weights[m2] /= sumExp;

      // Continuous recall: weighted average of patterns. This is the raw
      // Modern-Hopfield update *before* sign — relevant to show the softness.
      var recallCont = new Float32Array(N);
      for (var mm = 0; mm < data.patterns.length; mm++) {
        var w = weights[mm];
        for (var i3 = 0; i3 < N; i3++) recallCont[i3] += w * data.patterns[mm][i3];
      }
      // Binarised version (sign)
      var recallBin = new Float32Array(N);
      for (var i4 = 0; i4 < N; i4++) recallBin[i4] = recallCont[i4] >= 0 ? 1 : -1;

      // Argmax class and similarity to target
      var bestClass = 0, bestW = -1;
      for (var mu3 = 0; mu3 < weights.length; mu3++) {
        if (weights[mu3] > bestW) { bestW = weights[mu3]; bestClass = mu3; }
      }
      // Entropy of the distribution (in nats)
      var entropy = 0;
      for (var mu4 = 0; mu4 < weights.length; mu4++) {
        if (weights[mu4] > 1e-12) entropy -= weights[mu4] * Math.log(weights[mu4]);
      }

      setStats({
        beta: beta, weights: weights, noisy: noisy,
        recallCont: recallCont, recallBin: recallBin,
        bestClass: bestClass, bestWeight: bestW, entropy: entropy
      });
    }

    React.useEffect(function() {
      if (!data) return;
      var t = setTimeout(function() { doCompute(logBeta, digit, noise, seed); }, 50);
      return function() { clearTimeout(t); };
    }, [logBeta, digit, noise, seed, data]);

    if (!data) {
      return h('div', { style: { padding: '2rem', textAlign: 'center',
                                   color: '#6b7280', fontSize: '0.875rem' } },
        t('loading'));
    }

    var beta = Math.pow(10, logBeta);

    // Render the softmax distribution as 10 bars
    function softmaxBars() {
      var bars = [];
      var maxH = 90;
      for (var d = 0; d < 10; d++) {
        var w = stats ? stats.weights[d] : 0.1;
        var height = Math.max(1, Math.round(w * maxH));
        var isMax = stats && d === stats.bestClass;
        bars.push(h('div', {
          key: d,
          style: { display: 'flex', flexDirection: 'column',
                    alignItems: 'center', flex: '1 1 0' }
        },
          h('div', {
            style: {
              fontSize: '9px', color: '#6b7280', marginBottom: '2px',
              height: '12px'
            }
          }, stats ? w.toFixed(2) : ''),
          h('div', {
            style: {
              width: '70%', height: maxH + 'px',
              background: '#0f172a', border: '1px solid #1f2937',
              borderRadius: '2px', position: 'relative',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center'
            }
          },
            h('div', {
              style: {
                width: '100%', height: height + 'px',
                background: isMax ? '#22d3ee' : '#475569',
                borderRadius: '1px',
                transition: 'height 0.15s ease-out, background 0.15s ease-out'
              }
            })
          ),
          h('div', { style: { fontSize: '11px',
                                color: isMax ? '#22d3ee' : '#9ca3af',
                                marginTop: '4px',
                                fontWeight: isMax ? 600 : 400 } }, '' + d)
        ));
      }
      return h('div', { style: { display: 'flex', alignItems: 'flex-end',
                                   gap: '6px', padding: '0.5rem 0' } }, bars);
    }

    var orig = data.patterns[digit];

    return h('div', { style: {
        border: '1px solid #374151', borderRadius: '8px',
        padding: '1.25rem 1.5rem', background: 'rgba(17, 24, 39, 0.5)'
    } },
      h('h4', { style: { fontSize: '13px', fontWeight: 600, color: '#c4b5fd',
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                          margin: '0 0 1rem 0' } },
        t('beta_title')),

      // β slider
      h('div', { style: { marginBottom: '1.25rem' } },
        h('div', { style: { display: 'flex', justifyContent: 'space-between',
                             fontSize: '11px', color: '#9ca3af',
                             marginBottom: '4px' } },
          h('span', null, t('beta_left')),
          h('span', { style: { color: '#c4b5fd', fontWeight: 600 } },
            'β = ' + beta.toFixed(beta < 1 ? 2 : 1)),
          h('span', null, t('beta_right'))
        ),
        h('input', { type: 'range', min: -10, max: 15, step: 1,
          value: Math.round(logBeta * 10),
          onChange: function(e) { setLogBeta(parseInt(e.target.value, 10) / 10); },
          style: { width: '100%', accentColor: '#c4b5fd' } })
      ),

      // softmax distribution bars
      h('div', { style: { marginBottom: '1.25rem' } },
        h('div', { style: { fontSize: '11px', color: '#9ca3af',
                              marginBottom: '6px' } },
          t('beta_softmax_intro')
          + (stats ? t('beta_entropy_paren', { e: stats.entropy.toFixed(2) }) : '')),
        softmaxBars()
      ),

      // Digit picker
      h('div', { style: { marginBottom: '1rem' } },
        h('label', { style: { display: 'block', fontSize: '11px',
                                color: '#9ca3af', marginBottom: '6px' } },
          t('spec_digit_pick')),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } },
          (function() {
            var btns = [];
            for (var d = 0; d < 10; d++) {
              var pat = data.patterns[d];
              var thumbRects = [];
              var px = 2;
              for (var k = 0; k < 784; k++) {
                var rr = Math.floor(k / 28), cc = k % 28;
                thumbRects.push(h('rect', { key: k,
                  x: cc * px, y: rr * px, width: px, height: px,
                  fill: pat[k] > 0 ? '#e2e8f0' : '#1f2937' }));
              }
              var isSel = d === digit;
              btns.push(h('button', {
                key: d,
                onClick: (function(dd) { return function() { setDigit(dd); }; })(d),
                style: { padding: '2px', background: '#0f172a',
                          border: isSel ? '2px solid #c4b5fd' : '1px solid #1f2937',
                          borderRadius: '4px', cursor: 'pointer' }
              }, h('svg', { viewBox: '0 0 ' + (28 * px) + ' ' + (28 * px),
                             width: 32, height: 32 }, thumbRects)));
            }
            return btns;
          })()
        )
      ),

      // Noise + reseed
      h('div', { style: { display: 'grid',
                           gridTemplateColumns: '1fr 1fr',
                           gap: '1rem', marginBottom: '1.25rem' } },
        h('div', null,
          h('label', { style: { display: 'block', fontSize: '11px',
                                  color: '#9ca3af', marginBottom: '4px' } },
            t('noise'), h('span', { style: { color: '#c4b5fd',
                                                 fontWeight: 600 } },
              Math.round(noise * 100) + ' %')),
          h('input', { type: 'range', min: 0, max: 40, step: 1,
            value: Math.round(noise * 100),
            onChange: function(e) { setNoise(parseInt(e.target.value, 10) / 100); },
            style: { width: '100%', accentColor: '#c4b5fd' } })
        ),
        h('div', { style: { alignSelf: 'end' } },
          h('button', {
            onClick: function() { setSeed(seed + 1); },
            style: { padding: '0.4rem 0.8rem', fontSize: '12px',
                      borderRadius: '4px', background: '#1f2937',
                      color: '#d1d5db', border: '1px solid #374151',
                      cursor: 'pointer' }
          }, t('btn_reseed'))
        )
      ),

      // Three patterns row: Original, Noisy, Continuous recall (the "soft average")
      h('div', { style: { display: 'grid',
                           gridTemplateColumns: 'repeat(3, 1fr)',
                           gap: '1rem', justifyItems: 'center',
                           marginBottom: '0.75rem' } },
        inlinePatternView(orig, t('spec_label_original', { d: digit }), 4),
        inlinePatternView(stats ? stats.noisy : null,
          t('spec_label_noise', { p: Math.round(noise * 100) }), 4),
        (function() {
          // Continuous recall: greyscale visualisation.
          // Local interpolation factor named `gT` so we don't shadow the i18n `t()` helper.
          var rc = stats ? stats.recallCont : null;
          var px = 4;
          var rects = [];
          for (var k = 0; k < 784; k++) {
            var rr = Math.floor(k / 28), cc = k % 28;
            // Map ±1 to greyscale: -1 → #1f2937, 0 → #404956, +1 → #e2e8f0
            var val = rc ? Math.max(-1, Math.min(1, rc[k])) : -1;
            var gT = (val + 1) / 2;  // 0..1
            var grey = Math.round(31 + gT * (226 - 31));
            var fill = 'rgb(' + grey + ',' + grey + ',' + grey + ')';
            rects.push(h('rect', { key: k,
              x: cc * px, y: rr * px, width: px, height: px, fill: fill }));
          }
          return h('div', { style: { display: 'flex', flexDirection: 'column',
                                       alignItems: 'center', gap: '4px' } },
            h('svg', { viewBox: '0 0 ' + (28 * px) + ' ' + (28 * px),
                       width: 28 * px, height: 28 * px,
                       style: { background: '#0f172a', borderRadius: '4px',
                                 border: '1px solid #1f2937' } }, rects),
            h('div', { style: { fontSize: '11px', color: '#9ca3af',
                                  textAlign: 'center' } },
              t('beta_recall_cont_prefix') + (stats ? stats.bestClass : '–')
                + (stats && stats.bestClass === digit ? ' ✓' : ' ✗'))
          );
        })()
      ),

      // Caption
      h('p', { style: { fontSize: '11px', color: '#9ca3af',
                          marginTop: '0.5rem', marginBottom: 0 } },
        stats && stats.entropy > 1.5
          ? t('beta_cap_high')
          : (stats && stats.entropy > 0.3
              ? t('beta_cap_mid')
              : t('beta_cap_low')))
    );
  }


  // ====================================================================
  // ThreePhasesDemo — Chapter 6: Random Features Hopfield (Negri 2024)
  // Three phases (Storage / Learning / Generalization) on synthetic data.
  // Pre-compute the magnetisation curves at mount-time so the slider is fast.
  // ====================================================================

  // Random ±1 feature matrix F ∈ {-1, +1}^(N×D)
  function makeFeatureMatrix(N, D, seed) {
    var F = new Float32Array(N * D);
    var rng = makeRng(seed);
    for (var k = 0; k < N * D; k++) F[k] = rng() < 0.5 ? -1 : 1;
    return F;
  }

  // Build one mixture pattern ξ = sign(F · c), c sparse with L=ones
  function makeMixturePattern(F, N, D, L, seed) {
    var rng = makeRng(seed);
    // Pick L random feature indices without replacement
    var idx = []; for (var k = 0; k < D; k++) idx.push(k);
    shuffle(idx, rng);
    var chosen = idx.slice(0, L);
    // ξ_i = sign(Σ_{d in chosen} F[i, d])
    var v = new Float32Array(N);
    for (var i = 0; i < N; i++) {
      var s = 0;
      for (var c = 0; c < L; c++) s += F[i * D + chosen[c]];
      v[i] = s >= 0 ? 1 : -1;
    }
    return v;
  }

  // Build Hebb W for a set of small patterns (re-using buildHebbWeights but
  // we need an alternative that takes Float32Array list).
  function buildHebbWeightsSmall(patterns, N) {
    var p = patterns.length;
    var W = new Float32Array(N * N);
    for (var mu = 0; mu < p; mu++) {
      var xi = patterns[mu];
      for (var i = 0; i < N; i++) {
        var v = xi[i];
        if (v === 0) continue;
        for (var j = 0; j < N; j++) W[i * N + j] += v * xi[j];
      }
    }
    var invN = 1.0 / N;
    for (var k = 0; k < N * N; k++) W[k] *= invN;
    for (var d = 0; d < N; d++) W[d * N + d] = 0;
    return W;
  }

  // Pseudoinverse for small N, p. Optimiert über Zwischenmatrix:
  //   W = X·Ginv·X^T  über  GX = Ginv·X^T  (Komplexität N·p·(N+p) statt N²·p²)
  function buildPISmall(patterns, N) {
    var p = patterns.length;
    var G = [];
    for (var mu = 0; mu < p; mu++) {
      G[mu] = new Float32Array(p);
      for (var nu = 0; nu < p; nu++) {
        var s = 0;
        for (var i = 0; i < N; i++) s += patterns[mu][i] * patterns[nu][i];
        G[mu][nu] = s;
      }
    }
    var Ginv = invertSmallMatrix(G, p);

    // Schritt 1: GX[k][j] = Σ_μ Ginv[k][μ] · patterns[μ][j]    — shape (p, N)
    var GX = [];
    for (var k = 0; k < p; k++) {
      GX[k] = new Float32Array(N);
      for (var mu2 = 0; mu2 < p; mu2++) {
        var c = Ginv[k][mu2];
        if (Math.abs(c) < 1e-12) continue;
        var pat = patterns[mu2];
        for (var j = 0; j < N; j++) GX[k][j] += c * pat[j];
      }
    }

    // Schritt 2: W[i][j] = Σ_k patterns[k][i] · GX[k][j]       — shape (N, N)
    var W = new Float32Array(N * N);
    for (var i2 = 0; i2 < N; i2++) {
      for (var k2 = 0; k2 < p; k2++) {
        var xki = patterns[k2][i2];
        if (xki === 0) continue;
        var gxk = GX[k2];
        for (var j2 = 0; j2 < N; j2++) W[i2 * N + j2] += xki * gxk[j2];
      }
    }
    return W;
  }

  // Mean magnetisation: m = ⟨ sign(W·ξ)·ξ ⟩ / N over a sample of patterns
  function meanMagnetisation(W, samples, N) {
    if (samples.length === 0) return 0;
    var total = 0;
    for (var s = 0; s < samples.length; s++) {
      var xi = samples[s];
      var dot = 0;
      for (var i = 0; i < N; i++) {
        var h = 0;
        for (var j = 0; j < N; j++) h += W[i * N + j] * xi[j];
        var sgn = h >= 0 ? 1 : -1;
        dot += sgn * xi[i];
      }
      total += dot / N;
    }
    return total / samples.length;
  }

  function ThreePhasesDemo() {
    var h = React.createElement;

    // Mobile-aware sizing: smaller N + fewer samples to keep precompute under
    // ~5 s on a throttled iPhone. The qualitative phase pattern is sichtbar
    // auch bei N=120; bei größerem Viewport mehr Auflösung.
    var isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    var N = isMobile ? 120 : 200;
    var D = isMobile ? 24 : 40;
    var sampleSize = isMobile ? 18 : 25;

    var LState = React.useState(3);
    var L = LState[0], setL = LState[1];
    var ruleState = React.useState('hebb');
    var rule = ruleState[0], setRule = ruleState[1];
    var alphaCursorState = React.useState(2.0);
    var alphaCursor = alphaCursorState[0], setAlphaCursor = alphaCursorState[1];

    var dataRef = React.useRef({ F: null, features: null, testPatterns: null });
    var curvesState = React.useState(null);
    var curves = curvesState[0], setCurves = curvesState[1];
    var busyState = React.useState(false);
    var busy = busyState[0], setBusy = busyState[1];

    // PI ist nur invertierbar für p ≤ N (Gram-Matrix p×p singular sonst).
    // Daher zwei Grids: Hebb deckt das volle Phasenbild bis α=8 ab,
    // PI bleibt unter p = 0.8·N — der Generalisierungs-Effekt zeigt sich
    // dort eindeutig genug.
    var alphaGrid = rule === 'pi'
      ? [0.1, 0.2, 0.3, 0.5, 0.7]
      : [0.1, 0.3, 0.5, 1.0, 2.0, 4.0, 8.0];

    // (Re-)compute curves whenever L or rule changes
    React.useEffect(function() {
      setBusy(true);
      setTimeout(function() {
        // Build features and test pool once for this L
        var F = makeFeatureMatrix(N, D, 7);
        var features = [];
        for (var d = 0; d < D; d++) {
          var col = new Float32Array(N);
          for (var i = 0; i < N; i++) col[i] = F[i * D + d];
          features.push(col);
        }
        var testPatterns = [];
        for (var t = 0; t < sampleSize; t++) {
          testPatterns.push(makeMixturePattern(F, N, D, L, 9000 + t));
        }
        dataRef.current = { F: F, features: features, testPatterns: testPatterns };

        // For each alpha, build train set, build W, measure 3 magnetisations
        var train_m = [], feat_m = [], test_m = [];
        for (var a = 0; a < alphaGrid.length; a++) {
          var alpha = alphaGrid[a];
          var p = Math.max(1, Math.round(alpha * N));
          var trainPatterns = [];
          for (var pi = 0; pi < p; pi++) {
            trainPatterns.push(makeMixturePattern(F, N, D, L, 1000 + pi));
          }
          var W = rule === 'hebb'
            ? buildHebbWeightsSmall(trainPatterns, N)
            : buildPISmall(trainPatterns, N);

          // Train sample: random subset of trainPatterns
          var trainSampleIdx = []; for (var ti = 0; ti < p; ti++) trainSampleIdx.push(ti);
          shuffle(trainSampleIdx, makeRng(101 + a));
          var trainSample = [];
          for (var ts = 0; ts < Math.min(sampleSize, p); ts++) {
            trainSample.push(trainPatterns[trainSampleIdx[ts]]);
          }

          // Features sample
          var featSampleIdx = []; for (var fi = 0; fi < D; fi++) featSampleIdx.push(fi);
          shuffle(featSampleIdx, makeRng(202 + a));
          var featSample = [];
          for (var fs = 0; fs < Math.min(sampleSize, D); fs++) {
            featSample.push(features[featSampleIdx[fs]]);
          }

          train_m.push(meanMagnetisation(W, trainSample, N));
          feat_m.push(meanMagnetisation(W, featSample, N));
          test_m.push(meanMagnetisation(W, testPatterns, N));
        }
        setCurves({ alphas: alphaGrid, train: train_m, feat: feat_m, test: test_m });
        setBusy(false);
      }, 50);
    }, [L, rule]);

    // Find magnetisations at the slider cursor via linear interpolation
    function interpAt(alphas, ys, a) {
      if (a <= alphas[0]) return ys[0];
      if (a >= alphas[alphas.length - 1]) return ys[ys.length - 1];
      for (var i = 1; i < alphas.length; i++) {
        if (alphas[i] >= a) {
          var t = (a - alphas[i-1]) / (alphas[i] - alphas[i-1]);
          return ys[i-1] + t * (ys[i] - ys[i-1]);
        }
      }
      return ys[ys.length - 1];
    }

    // SVG plot: log-x from 0.1 to 8.0, y from -0.1 to 1.05
    function PhasePlot() {
      var Wpx = 540, Hpx = 220, pad = 40;
      var xMin = Math.log10(0.1), xMax = Math.log10(8.0);
      var yMin = -0.1, yMax = 1.05;
      function sx(a) { return pad + (Math.log10(a) - xMin) / (xMax - xMin) * (Wpx - pad - 8); }
      function sy(y) { return Hpx - pad - (y - yMin) / (yMax - yMin) * (Hpx - pad - 8); }

      if (!curves) return h('div', { style: { padding: '2rem', textAlign: 'center', color: '#6b7280' } }, busy ? t('phases_busy_short') : '');

      var lines = [];

      // Phase-Hintergrund-Bänder
      var alphaStorage = 0.5, alphaLearning = 2.0;  // grobe Schwellenwerte
      lines.push(h('rect', { key: 'b1', x: sx(0.1), y: 8,
        width: sx(alphaStorage) - sx(0.1), height: Hpx - pad - 8,
        fill: 'rgba(34, 211, 238, 0.04)' }));
      lines.push(h('rect', { key: 'b2', x: sx(alphaStorage), y: 8,
        width: sx(alphaLearning) - sx(alphaStorage), height: Hpx - pad - 8,
        fill: 'rgba(34, 197, 94, 0.04)' }));
      lines.push(h('rect', { key: 'b3', x: sx(alphaLearning), y: 8,
        width: sx(8.0) - sx(alphaLearning), height: Hpx - pad - 8,
        fill: 'rgba(248, 113, 113, 0.04)' }));
      lines.push(h('text', { key: 'bl1',
        x: (sx(0.1) + sx(alphaStorage)) / 2, y: 20,
        fill: '#22d3ee', fontSize: 10, textAnchor: 'middle' }, t('phases_band_storage')));
      lines.push(h('text', { key: 'bl2',
        x: (sx(alphaStorage) + sx(alphaLearning)) / 2, y: 20,
        fill: '#86efac', fontSize: 10, textAnchor: 'middle' }, t('phases_band_learning')));
      lines.push(h('text', { key: 'bl3',
        x: (sx(alphaLearning) + sx(8.0)) / 2, y: 20,
        fill: '#fca5a5', fontSize: 10, textAnchor: 'middle' }, t('phases_band_generalisation')));

      // Y-Achse & Beschriftung
      for (var iy = 0; iy <= 5; iy++) {
        var yv = iy / 5;
        lines.push(h('line', { key: 'gy' + iy, x1: pad, y1: sy(yv),
          x2: Wpx - 8, y2: sy(yv), stroke: '#1f2937', strokeWidth: 0.5 }));
        lines.push(h('text', { key: 'gt' + iy, x: pad - 5, y: sy(yv) + 3,
          fill: '#6b7280', fontSize: 9, textAnchor: 'end' }, yv.toFixed(1)));
      }
      // X-Achse Beschriftung
      [0.1, 0.3, 1, 3, 8].forEach(function(a) {
        lines.push(h('text', { key: 'xt' + a, x: sx(a), y: Hpx - pad + 14,
          fill: '#6b7280', fontSize: 9, textAnchor: 'middle' }, '' + a));
      });
      lines.push(h('text', { key: 'xlabel',
        x: Wpx / 2, y: Hpx - 6, fill: '#9ca3af', fontSize: 10,
        textAnchor: 'middle' }, t('phases_xaxis')));
      lines.push(h('text', { key: 'ylabel',
        x: 12, y: Hpx / 2, fill: '#9ca3af', fontSize: 10,
        transform: 'rotate(-90, 12, ' + (Hpx / 2) + ')',
        textAnchor: 'middle' }, t('phases_yaxis')));

      // Achsen-Linien
      lines.push(h('line', { key: 'ax', x1: pad, y1: Hpx - pad,
        x2: Wpx - 8, y2: Hpx - pad, stroke: '#374151', strokeWidth: 1 }));
      lines.push(h('line', { key: 'ay', x1: pad, y1: 8,
        x2: pad, y2: Hpx - pad, stroke: '#374151', strokeWidth: 1 }));

      // Drei Kurven
      var series = [
        { ys: curves.train, color: '#3b82f6', label: t('phases_stat_train') },
        { ys: curves.feat, color: '#22c55e', label: t('phases_stat_features') },
        { ys: curves.test, color: '#ef4444', label: 'Test' }
      ];
      series.forEach(function(s, si) {
        var pts = curves.alphas.map(function(a, idx) {
          return sx(a) + ',' + sy(s.ys[idx]);
        }).join(' ');
        lines.push(h('polyline', { key: 'p' + si, points: pts,
          fill: 'none', stroke: s.color, strokeWidth: 2 }));
        curves.alphas.forEach(function(a, idx) {
          lines.push(h('circle', { key: 'c' + si + '_' + idx,
            cx: sx(a), cy: sy(s.ys[idx]), r: 3, fill: s.color }));
        });
      });

      // Cursor
      lines.push(h('line', { key: 'cursor', x1: sx(alphaCursor), y1: 8,
        x2: sx(alphaCursor), y2: Hpx - pad,
        stroke: '#fbbf24', strokeWidth: 1.5, strokeDasharray: '3 3' }));

      // Legend
      lines.push(h('g', { key: 'legend',
        transform: 'translate(' + (Wpx - 110) + ', 35)' },
        series.map(function(s, si) {
          return h('g', { key: 'lg' + si, transform: 'translate(0, ' + (si * 16) + ')' },
            h('line', { x1: 0, y1: 5, x2: 16, y2: 5, stroke: s.color, strokeWidth: 2 }),
            h('text', { x: 22, y: 9, fill: '#cbd5e1', fontSize: 10 }, s.label));
        })
      ));

      return h('svg', { viewBox: '0 0 ' + Wpx + ' ' + Hpx,
                          width: '100%', style: { maxWidth: Wpx + 'px',
                                                    background: '#0f172a',
                                                    borderRadius: '4px' } },
        lines);
    }

    // Stats at cursor
    var statTrain = curves ? interpAt(curves.alphas, curves.train, alphaCursor) : 0;
    var statFeat  = curves ? interpAt(curves.alphas, curves.feat,  alphaCursor) : 0;
    var statTest  = curves ? interpAt(curves.alphas, curves.test,  alphaCursor) : 0;

    function statBox(label, color, value) {
      return h('div', { style: {
          flex: '1 1 0', minWidth: '100px',
          padding: '0.6rem 0.9rem', background: '#0f172a',
          border: '1px solid #1f2937', borderRadius: '6px', textAlign: 'center'
      } },
        h('div', { style: { fontSize: '10px', color: color, fontWeight: 600,
                             marginBottom: '4px', textTransform: 'uppercase',
                             letterSpacing: '0.05em' } }, label),
        h('div', { style: { fontSize: '20px', fontWeight: 600,
                             color: '#e2e8f0' } },
          value.toFixed(2)));
    }

    return h('div', { style: {
        border: '1px solid #374151', borderRadius: '8px',
        padding: '1.25rem 1.5rem', background: 'rgba(17, 24, 39, 0.5)'
    } },
      h('h4', { style: { fontSize: '13px', fontWeight: 600, color: '#22d3ee',
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                          margin: '0 0 1rem 0' } },
        t('phases_title')),

      // Rule + L controls
      h('div', { style: { display: 'grid',
                           gridTemplateColumns: '1fr 1fr', gap: '1rem',
                           marginBottom: '1rem' } },
        h('div', null,
          h('label', { style: { display: 'block', fontSize: '11px',
                                  color: '#9ca3af', marginBottom: '6px' } },
            t('phases_rule_label')),
          h('div', { style: { display: 'flex', gap: '6px' } },
            [['hebb', 'Hebb'], ['pi', 'Pseudoinverse']].map(function(r) {
              return h('button', {
                key: r[0],
                onClick: function() { setRule(r[0]); },
                style: {
                  padding: '0.35rem 0.7rem', fontSize: '12px',
                  borderRadius: '4px',
                  background: rule === r[0] ? 'rgba(34,211,238,0.15)' : '#1f2937',
                  color: rule === r[0] ? '#67e8f9' : '#9ca3af',
                  border: '1px solid ' + (rule === r[0] ? '#22d3ee' : '#374151'),
                  cursor: 'pointer'
                }
              }, r[1]);
            })
          )
        ),
        h('div', null,
          h('label', { style: { display: 'block', fontSize: '11px',
                                  color: '#9ca3af', marginBottom: '6px' } },
            t('phases_L_label'),
            h('span', { style: { color: '#22d3ee', fontWeight: 600 } }, L)),
          h('input', { type: 'range', min: 1, max: 12, step: 1, value: L,
            onChange: function(e) { setL(parseInt(e.target.value, 10)); },
            style: { width: '100%', accentColor: '#22d3ee' } })
        )
      ),

      // Plot
      h('div', { style: { marginBottom: '1rem',
                           opacity: busy ? 0.4 : 1, position: 'relative' } },
        PhasePlot(),
        busy && h('div', { style: {
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fbbf24', fontSize: '13px', fontWeight: 600
        } }, t('phases_busy'))
      ),

      // α-Cursor slider
      h('div', { style: { marginBottom: '1rem' } },
        h('label', { style: { display: 'block', fontSize: '11px',
                                color: '#9ca3af', marginBottom: '6px' } },
          t('phases_cursor_label'),
          h('span', { style: { color: '#fbbf24', fontWeight: 600 } },
            'α = ' + alphaCursor.toFixed(2))),
        h('input', { type: 'range', min: -10, max: 9, step: 1,
          value: Math.round(Math.log10(alphaCursor) * 10),
          onChange: function(e) {
            setAlphaCursor(Math.pow(10, parseInt(e.target.value, 10) / 10));
          },
          style: { width: '100%', accentColor: '#fbbf24' } })
      ),

      // Three stat boxes at cursor
      h('div', { style: { display: 'flex', flexWrap: 'wrap',
                           gap: '0.6rem', marginBottom: '0.5rem' } },
        statBox(t('phases_stat_train'), '#3b82f6', statTrain),
        statBox(t('phases_stat_features'), '#22c55e', statFeat),
        statBox(t('phases_stat_test'), '#ef4444', statTest)
      ),

      // Caption
      h('p', { style: { fontSize: '11px', color: '#9ca3af',
                          marginTop: '0.75rem', marginBottom: 0 } },
        t('phases_caption', { N: N, D: D, L: L, S: sampleSize }))
    );
  }


  // ====================================================================
  // Mount
  // ====================================================================

  function mount() {
    var el = document.getElementById('mount-hopfield-recall');
    if (el && window.React && window.ReactDOM) {
      ReactDOM.render(React.createElement(HopfieldRecallDemo), el);
    }
    var biasEl = document.getElementById('mount-bias-sink');
    if (biasEl && window.React && window.ReactDOM) {
      ReactDOM.render(React.createElement(BiasSinkDemo), biasEl);
    }
    var specEl = document.getElementById('mount-spectral-slider');
    if (specEl && window.React && window.ReactDOM) {
      ReactDOM.render(React.createElement(SpectralSliderDemo), specEl);
    }
    var betaEl = document.getElementById('mount-beta-slider');
    if (betaEl && window.React && window.ReactDOM) {
      ReactDOM.render(React.createElement(BetaSliderDemo), betaEl);
    }
    var phasesEl = document.getElementById('mount-three-phases');
    if (phasesEl && window.React && window.ReactDOM) {
      ReactDOM.render(React.createElement(ThreePhasesDemo), phasesEl);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
