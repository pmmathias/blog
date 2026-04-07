// logik-components.js — Interactive React components for the logic/computability post
// SVG visualizations, no JSX, React.createElement only
// Pattern: IIFE → React.createElement (no JSX) → window.ComponentName

// ════════════════════════════════════════════════════════════════
// 1. CantorDiagonalExplorer — Cantor's diagonal argument visualized
// ════════════════════════════════════════════════════════════════
(function() {
  var SEQ_LEN = 8;

  function randomBinaryString(len) {
    var s = '';
    for (var i = 0; i < len; i++) s += Math.random() < 0.5 ? '0' : '1';
    return s;
  }

  function makeInitialRows() {
    var rows = [];
    for (var i = 0; i < 5; i++) rows.push(randomBinaryString(SEQ_LEN));
    return rows;
  }

  function flipBit(b) { return b === '0' ? '1' : '0'; }

  function CantorDiagonalExplorer() {
    var s = React.useState;
    var rows = s(makeInitialRows), setRows = rows[1]; rows = rows[0];
    var stepMode = s(false), setStepMode = stepMode[1]; stepMode = stepMode[0];
    var currentStep = s(-1), setCurrentStep = currentStep[1]; currentStep = currentStep[0];

    // Compute diagonal string (flip of diagonal)
    var diagLen = Math.min(rows.length, SEQ_LEN);
    var diagonal = '';
    var flipped = '';
    for (var d = 0; d < diagLen; d++) {
      diagonal += rows[d][d] || '0';
      flipped += flipBit(rows[d][d] || '0');
    }
    // Pad rest if rows < SEQ_LEN
    for (var p = diagLen; p < SEQ_LEN; p++) {
      flipped += '0';
    }

    function addRow() {
      if (rows.length < SEQ_LEN) {
        setRows(rows.concat([randomBinaryString(SEQ_LEN)]));
        setCurrentStep(-1);
      }
    }

    function randomize() {
      setRows(makeInitialRows());
      setCurrentStep(-1);
      setStepMode(false);
    }

    function reset() {
      setRows([
        '01010101',
        '11001100',
        '10101010',
        '00110011',
        '11110000',
      ]);
      setCurrentStep(-1);
      setStepMode(false);
    }

    function startStepMode() {
      setStepMode(true);
      setCurrentStep(0);
    }

    function nextStep() {
      if (currentStep < diagLen - 1) setCurrentStep(currentStep + 1);
      else setCurrentStep(diagLen); // show final
    }

    function prevStep() {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
    }

    var stepExplanation = '';
    if (stepMode && currentStep >= 0 && currentStep < diagLen) {
      var origBit = rows[currentStep][currentStep] || '0';
      var flipBitVal = flipBit(origBit);
      stepExplanation = 'Zeile ' + (currentStep + 1) + ', Spalte ' + (currentStep + 1) + ': Diagonale = ' + origBit + ' → Flip = ' + flipBitVal;
    } else if (stepMode && currentStep >= diagLen) {
      stepExplanation = 'Die neue Sequenz ' + flipped.substring(0, diagLen) + '... unterscheidet sich von JEDER Zeile in mindestens einer Stelle!';
    }

    // SVG dimensions
    var cellSize = 32;
    var headerH = 28;
    var leftMargin = 40;
    var svgW = leftMargin + SEQ_LEN * cellSize + 10;
    var svgH = headerH + (rows.length + 2) * cellSize + 10;

    var e = React.createElement;

    var cells = [];
    // Column headers
    for (var c = 0; c < SEQ_LEN; c++) {
      cells.push(e('text', {
        key: 'hdr-' + c, x: leftMargin + c * cellSize + cellSize / 2, y: headerH - 8,
        textAnchor: 'middle', fill: '#9ca3af', fontSize: 10, fontFamily: 'monospace'
      }, '' + (c + 1)));
    }

    // Grid rows
    for (var r = 0; r < rows.length; r++) {
      // Row label
      cells.push(e('text', {
        key: 'rl-' + r, x: leftMargin - 8, y: headerH + r * cellSize + cellSize / 2 + 4,
        textAnchor: 'end', fill: '#9ca3af', fontSize: 10, fontFamily: 'monospace'
      }, 's' + (r + 1)));

      for (var c2 = 0; c2 < SEQ_LEN; c2++) {
        var bit = rows[r][c2] || '';
        var isDiag = r === c2 && r < diagLen;
        var isHighlightedStep = stepMode && isDiag && currentStep >= r;
        var isCurrentDiag = stepMode && isDiag && currentStep === r;

        var bgColor = 'transparent';
        if (isDiag && !stepMode) bgColor = 'rgba(245, 158, 11, 0.3)';
        if (isHighlightedStep) bgColor = 'rgba(245, 158, 11, 0.4)';
        if (isCurrentDiag) bgColor = 'rgba(245, 158, 11, 0.7)';

        var strokeColor = '#374151';
        if (isCurrentDiag) strokeColor = '#f59e0b';

        cells.push(e('rect', {
          key: 'bg-' + r + '-' + c2,
          x: leftMargin + c2 * cellSize, y: headerH + r * cellSize,
          width: cellSize, height: cellSize,
          fill: bgColor, stroke: strokeColor, strokeWidth: isCurrentDiag ? 2 : 0.5
        }));
        cells.push(e('text', {
          key: 'txt-' + r + '-' + c2,
          x: leftMargin + c2 * cellSize + cellSize / 2,
          y: headerH + r * cellSize + cellSize / 2 + 5,
          textAnchor: 'middle', fill: isDiag ? '#fbbf24' : '#d1d5db',
          fontSize: 14, fontWeight: isDiag ? 'bold' : 'normal', fontFamily: 'monospace'
        }, bit));
      }
    }

    // Flipped diagonal row
    var flipRowY = headerH + rows.length * cellSize + cellSize * 0.5;
    // Separator line
    cells.push(e('line', {
      key: 'sep', x1: leftMargin, y1: flipRowY - 4, x2: leftMargin + SEQ_LEN * cellSize, y2: flipRowY - 4,
      stroke: '#f43f5e', strokeWidth: 1.5, strokeDasharray: '4,3'
    }));
    // Label
    cells.push(e('text', {
      key: 'flip-label', x: leftMargin - 8, y: flipRowY + cellSize / 2 + 4,
      textAnchor: 'end', fill: '#f43f5e', fontSize: 10, fontWeight: 'bold', fontFamily: 'monospace'
    }, 'd\''));

    for (var f = 0; f < SEQ_LEN; f++) {
      var showFlip = !stepMode || (stepMode && currentStep >= f);
      var isFlipCurrent = stepMode && currentStep === f;
      cells.push(e('rect', {
        key: 'flip-bg-' + f,
        x: leftMargin + f * cellSize, y: flipRowY,
        width: cellSize, height: cellSize,
        fill: f < diagLen ? (isFlipCurrent ? 'rgba(244, 63, 94, 0.6)' : 'rgba(244, 63, 94, 0.2)') : 'transparent',
        stroke: isFlipCurrent ? '#f43f5e' : '#374151', strokeWidth: isFlipCurrent ? 2 : 0.5
      }));
      cells.push(e('text', {
        key: 'flip-txt-' + f,
        x: leftMargin + f * cellSize + cellSize / 2,
        y: flipRowY + cellSize / 2 + 5,
        textAnchor: 'middle',
        fill: showFlip && f < diagLen ? '#fb7185' : '#4b5563',
        fontSize: 14, fontWeight: 'bold', fontFamily: 'monospace'
      }, showFlip && f < diagLen ? flipped[f] : '?'));
    }

    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent' },
        'Cantors Diagonalargument'),
      // SVG
      e('div', { className: 'overflow-x-auto mb-3' },
        e('svg', {
          viewBox: '0 0 ' + svgW + ' ' + svgH,
          className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
          style: { maxWidth: '500px', margin: '0 auto', display: 'block' }
        }, cells)
      ),
      // Step explanation
      stepMode ? e('p', { className: 'text-sm text-center text-amber-300 mb-3 min-h-[2.5em] font-mono' }, stepExplanation) : null,
      // Controls
      e('div', { className: 'flex flex-wrap gap-2 justify-center mb-2' },
        !stepMode
          ? e('button', {
              className: 'px-3 py-1.5 text-xs rounded-full border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white transition-colors',
              onClick: startStepMode
            }, 'Schritt-Modus')
          : [
              e('button', {
                key: 'prev',
                className: 'px-3 py-1.5 text-xs rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
                onClick: prevStep, disabled: currentStep <= 0
              }, '← Zurück'),
              e('button', {
                key: 'next',
                className: 'px-3 py-1.5 text-xs rounded-full border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white transition-colors',
                onClick: nextStep, disabled: currentStep >= diagLen
              }, 'Weiter →'),
              e('button', {
                key: 'exit',
                className: 'px-3 py-1.5 text-xs rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
                onClick: function() { setStepMode(false); setCurrentStep(-1); }
              }, 'Beenden')
            ],
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors',
          onClick: addRow, disabled: rows.length >= SEQ_LEN
        }, '+ Zeile'),
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
          onClick: randomize
        }, 'Zufall'),
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
          onClick: reset
        }, 'Reset')
      ),
      e('p', { className: 'text-xs text-gray-500 text-center mt-2' },
        'Die Diagonale (amber) wird Bit-für-Bit invertiert. Das Ergebnis (rot) kann in keiner Zeile stehen — die Liste ist immer unvollständig.')
    );
  }
  window.CantorDiagonalExplorer = CantorDiagonalExplorer;
})();


// ════════════════════════════════════════════════════════════════
// 2. GoedelNumberCalculator — Gödel numbering for simple formulas
// ════════════════════════════════════════════════════════════════
(function() {
  var SYMBOL_MAP = {
    '0': 1, 'S': 3, '+': 5, '\u00d7': 7, '=': 9, '(': 11, ')': 13, 'x': 17, 'y': 19
  };

  var PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  var PRESETS = [
    { label: '0=0', formula: '0=0' },
    { label: 'S(0)=S(0)', formula: 'S(0)=S(0)' },
    { label: 'S(0)+S(0)=S(S(0))', formula: 'S(0)+S(0)=S(S(0))' },
    { label: '0+0=0', formula: '0+0=0' },
    { label: 'x=0', formula: 'x=0' },
  ];

  function symbolName(ch) {
    if (ch === '\u00d7') return '\u00d7 (Mal)';
    var names = { '0': '0 (Null)', 'S': 'S (Nachfolger)', '+': '+ (Plus)', '=': '= (Gleich)',
      '(': '( (Klammer auf)', ')': ') (Klammer zu)', 'x': 'x (Variable)', 'y': 'y (Variable)' };
    return names[ch] || ch;
  }

  function bigPow(base, exp) {
    var result = BigInt(1);
    var b = BigInt(base);
    for (var i = 0; i < exp; i++) result *= b;
    return result;
  }

  function encodeFormula(formula) {
    var steps = [];
    var goedel = BigInt(1);
    var valid = true;
    for (var i = 0; i < formula.length; i++) {
      var ch = formula[i];
      if (ch === ' ') continue;
      var code = SYMBOL_MAP[ch];
      if (code === undefined) { valid = false; break; }
      if (i >= PRIMES.length) { valid = false; break; }
      var prime = PRIMES[i];
      var factor = bigPow(prime, code);
      steps.push({ symbol: ch, code: code, prime: prime, factor: factor });
      goedel *= factor;
    }
    return { steps: steps, goedel: goedel, valid: valid };
  }

  // Simple factorization for small numbers
  function factorize(n) {
    if (n <= BigInt(1)) return [];
    var factors = [];
    for (var i = 0; i < PRIMES.length; i++) {
      var p = BigInt(PRIMES[i]);
      var count = 0;
      while (n % p === BigInt(0)) {
        n = n / p;
        count++;
      }
      if (count > 0) factors.push({ prime: PRIMES[i], exp: count });
      if (n === BigInt(1)) break;
    }
    if (n > BigInt(1)) factors.push({ prime: '...', exp: '?' });
    return factors;
  }

  // Reverse: exponent → symbol
  var CODE_TO_SYMBOL = {};
  Object.keys(SYMBOL_MAP).forEach(function(k) {
    CODE_TO_SYMBOL[SYMBOL_MAP[k]] = k;
  });

  function GoedelNumberCalculator() {
    var s = React.useState;
    var formula = s('0=0'), setFormula = formula[1]; formula = formula[0];
    var reverseInput = s(''), setReverseInput = reverseInput[1]; reverseInput = reverseInput[0];
    var tab = s('encode'), setTab = tab[1]; tab = tab[0];

    var result = encodeFormula(formula);

    var reverseResult = null;
    if (tab === 'decode' && reverseInput.trim() !== '') {
      try {
        var num = BigInt(reverseInput.trim());
        if (num > BigInt(0)) {
          var factors = factorize(num);
          var decoded = '';
          var decodable = true;
          for (var i = 0; i < factors.length; i++) {
            // Check if prime index matches position
            var sym = CODE_TO_SYMBOL[factors[i].exp];
            if (sym) decoded += sym;
            else { decodable = false; decoded += '?'; }
          }
          reverseResult = { factors: factors, decoded: decoded, decodable: decodable };
        }
      } catch(ex) {
        reverseResult = null;
      }
    }

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent' },
        'Gödel-Nummerierung'),
      // Tabs
      e('div', { className: 'flex justify-center gap-2 mb-4' },
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
            (tab === 'encode' ? 'border-cyan-400 text-cyan-400' : 'border-gray-700 text-gray-400 hover:border-cyan-500'),
          onClick: function() { setTab('encode'); }
        }, 'Kodieren'),
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
            (tab === 'decode' ? 'border-amber-400 text-amber-400' : 'border-gray-700 text-gray-400 hover:border-amber-500'),
          onClick: function() { setTab('decode'); }
        }, 'Dekodieren')
      ),

      tab === 'encode' ? e('div', null,
        // Symbol table
        e('div', { className: 'mb-3 overflow-x-auto' },
          e('table', { className: 'mx-auto text-xs' },
            e('thead', null,
              e('tr', null,
                Object.keys(SYMBOL_MAP).map(function(k) {
                  return e('th', { key: k, className: 'px-2 py-1 text-gray-400 font-mono border-b border-gray-800' }, k === '\u00d7' ? '\u00d7' : k);
                })
              )
            ),
            e('tbody', null,
              e('tr', null,
                Object.keys(SYMBOL_MAP).map(function(k) {
                  return e('td', { key: k, className: 'px-2 py-1 text-cyan-400 font-mono text-center border-b border-gray-800' }, '' + SYMBOL_MAP[k]);
                })
              )
            )
          )
        ),
        // Input
        e('div', { className: 'mb-3' },
          e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Formel eingeben:'),
          e('input', {
            type: 'text', value: formula,
            onChange: function(ev) { setFormula(ev.target.value); },
            className: 'w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none',
            placeholder: 'z.B. 0=0, S(0)+S(0)'
          })
        ),
        // Presets
        e('div', { className: 'flex flex-wrap gap-1.5 justify-center mb-4' },
          PRESETS.map(function(p) {
            return e('button', {
              key: p.label,
              className: 'px-2 py-1 text-[0.65rem] rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors font-mono',
              onClick: function() { setFormula(p.formula); }
            }, p.label);
          })
        ),
        // Result
        result.valid ? e('div', { className: 'bg-gray-900 rounded-xl p-3 border border-gray-800' },
          e('p', { className: 'text-xs text-gray-400 mb-2 font-semibold' }, 'Kodierung Schritt für Schritt:'),
          e('div', { className: 'space-y-1 mb-3' },
            result.steps.map(function(st, i) {
              return e('div', { key: i, className: 'flex items-center gap-2 text-xs font-mono' },
                e('span', { className: 'text-amber-400 w-6' }, '\'' + st.symbol + '\''),
                e('span', { className: 'text-gray-500' }, '→'),
                e('span', { className: 'text-cyan-400' }, 'Code ' + st.code),
                e('span', { className: 'text-gray-500' }, '→'),
                e('span', { className: 'text-gray-300' }, st.prime + '^' + st.code)
              );
            })
          ),
          e('div', { className: 'border-t border-gray-800 pt-2' },
            e('p', { className: 'text-xs text-gray-400 mb-1' }, 'Gödelnummer = Produkt aller Primzahlpotenzen:'),
            e('p', { className: 'text-xs font-mono text-gray-500 mb-1' },
              result.steps.map(function(st) { return st.prime + '^' + st.code; }).join(' \u00d7 ')
            ),
            e('p', { className: 'text-sm font-mono font-bold text-amber-400 break-all' },
              result.goedel.toString().length > 60
                ? result.goedel.toString().substring(0, 30) + '...' + result.goedel.toString().substring(result.goedel.toString().length - 30) + ' (' + result.goedel.toString().length + ' Stellen)'
                : result.goedel.toString()
            )
          )
        ) : e('p', { className: 'text-sm text-rose-400 text-center' },
          'Unbekanntes Symbol in der Formel. Erlaubt: 0, S, +, \u00d7, =, (, ), x, y')
      ) : // Decode tab
      e('div', null,
        e('div', { className: 'mb-3' },
          e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Gödelnummer eingeben:'),
          e('input', {
            type: 'text', value: reverseInput,
            onChange: function(ev) { setReverseInput(ev.target.value); },
            className: 'w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-amber-500 focus:outline-none',
            placeholder: 'z.B. 243000000'
          })
        ),
        // Quick test buttons
        e('div', { className: 'flex flex-wrap gap-1.5 justify-center mb-4' },
          ['5184', '8748', '72'].map(function(n) {
            return e('button', {
              key: n,
              className: 'px-2 py-1 text-[0.65rem] rounded-full border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-400 transition-colors font-mono',
              onClick: function() { setReverseInput(n); }
            }, n);
          })
        ),
        reverseResult ? e('div', { className: 'bg-gray-900 rounded-xl p-3 border border-gray-800' },
          e('p', { className: 'text-xs text-gray-400 mb-2 font-semibold' }, 'Faktorisierung:'),
          e('div', { className: 'space-y-1 mb-3' },
            reverseResult.factors.map(function(f, i) {
              var sym = CODE_TO_SYMBOL[f.exp];
              return e('div', { key: i, className: 'flex items-center gap-2 text-xs font-mono' },
                e('span', { className: 'text-gray-300' }, f.prime + '^' + f.exp),
                e('span', { className: 'text-gray-500' }, '→'),
                e('span', { className: 'text-amber-400' }, sym ? 'Code ' + f.exp + ' = \'' + sym + '\'' : 'Code ' + f.exp + ' = ?')
              );
            })
          ),
          reverseResult.decodable
            ? e('p', { className: 'text-sm font-mono font-bold text-cyan-400' }, 'Formel: ' + reverseResult.decoded)
            : e('p', { className: 'text-sm text-gray-500' }, 'Nicht alle Exponenten entsprechen bekannten Symbolen.')
        ) : (reverseInput.trim() !== '' ? e('p', { className: 'text-sm text-rose-400 text-center' }, 'Bitte eine gültige Zahl eingeben.') : null)
      )
    );
  }
  window.GoedelNumberCalculator = GoedelNumberCalculator;
})();


// ════════════════════════════════════════════════════════════════
// 3. TuringMachineSimulator — Visual Turing machine with presets
// ════════════════════════════════════════════════════════════════
(function() {
  var PRESETS = {
    increment: {
      name: 'Binär-Inkrement',
      description: 'Addiert 1 zu einer Binärzahl. Liest von rechts nach links.',
      tape: ['B', '1', '0', '1', '1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
      head: 4,
      state: 'seek_right',
      halts: true,
      // transitions: { 'state,symbol': [write, move, nextState] }
      transitions: {
        'seek_right,0': ['0', 'R', 'seek_right'],
        'seek_right,1': ['1', 'R', 'seek_right'],
        'seek_right,B': ['B', 'L', 'add'],
        'add,0': ['1', 'L', 'done'],
        'add,1': ['0', 'L', 'add'],
        'add,B': ['1', 'L', 'done'],
        'done,0': ['0', 'L', 'done'],
        'done,1': ['1', 'L', 'done'],
        'done,B': ['B', 'R', 'HALT'],
      }
    },
    busybeaver: {
      name: 'Busy Beaver (3)',
      description: 'BB(3): Schreibt 6 Einsen in 14 Schritten, dann Halt.',
      tape: ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
      head: 7,
      state: 'A',
      halts: true,
      transitions: {
        'A,B': ['1', 'R', 'B'],
        'A,1': ['1', 'L', 'C'],
        'B,B': ['1', 'L', 'A'],
        'B,1': ['1', 'R', 'B'],
        'C,B': ['1', 'L', 'B'],
        'C,1': ['1', 'R', 'HALT'],
      }
    },
    infinite: {
      name: 'Endlos nach rechts',
      description: 'Schreibt 1en und bewegt sich endlos nach rechts. Hält nie an!',
      tape: ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
      head: 0,
      state: 'go',
      halts: false,
      transitions: {
        'go,B': ['1', 'R', 'go'],
        'go,1': ['1', 'R', 'go'],
      }
    }
  };

  function TuringMachineSimulator() {
    var s = React.useState;
    var presetKey = s('increment'), setPresetKey = presetKey[1]; presetKey = presetKey[0];
    var tape = s(PRESETS.increment.tape.slice()), setTape = tape[1]; tape = tape[0];
    var head = s(PRESETS.increment.head), setHead = head[1]; head = head[0];
    var state = s(PRESETS.increment.state), setState = state[1]; state = state[0];
    var steps = s(0), setSteps = steps[1]; steps = steps[0];
    var halted = s(false), setHalted = halted[1]; halted = halted[0];
    var running = s(false), setRunning = running[1]; running = running[0];
    var speed = s(300), setSpeed = speed[1]; speed = speed[0];
    var intervalRef = React.useRef(null);

    var preset = PRESETS[presetKey];

    function loadPreset(key) {
      stopRunning();
      var p = PRESETS[key];
      setPresetKey(key);
      setTape(p.tape.slice());
      setHead(p.head);
      setState(p.state);
      setSteps(0);
      setHalted(false);
    }

    function doStep() {
      if (halted) return false;
      var sym = tape[head] || 'B';
      var key = state + ',' + sym;
      var trans = preset.transitions[key];
      if (!trans || state === 'HALT') {
        setHalted(true);
        return false;
      }
      var newTape = tape.slice();
      // Expand tape if needed
      while (head >= newTape.length) newTape.push('B');
      newTape[head] = trans[0];
      var newHead = head + (trans[1] === 'R' ? 1 : -1);
      if (newHead < 0) {
        newTape.unshift('B');
        newHead = 0;
      }
      while (newHead >= newTape.length) newTape.push('B');
      setTape(newTape);
      setHead(newHead);
      setState(trans[2]);
      setSteps(function(s) { return s + 1; });
      if (trans[2] === 'HALT') {
        setHalted(true);
        return false;
      }
      return true;
    }

    function stepOnce() {
      doStep();
    }

    function startRunning() {
      if (halted) return;
      setRunning(true);
    }

    function stopRunning() {
      setRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    function resetMachine() {
      stopRunning();
      loadPreset(presetKey);
    }

    // Auto-step interval
    React.useEffect(function() {
      if (running && !halted) {
        intervalRef.current = setInterval(function() {
          // We need to use functional updates for proper state
          setTape(function(prevTape) {
            setHead(function(prevHead) {
              setState(function(prevState) {
                if (prevState === 'HALT') {
                  setHalted(true);
                  setRunning(false);
                  return prevState;
                }
                var sym = prevTape[prevHead] || 'B';
                var key = prevState + ',' + sym;
                var trans = preset.transitions[key];
                if (!trans) {
                  setHalted(true);
                  setRunning(false);
                  return prevState;
                }
                var newTape = prevTape.slice();
                while (prevHead >= newTape.length) newTape.push('B');
                newTape[prevHead] = trans[0];
                var newHead = prevHead + (trans[1] === 'R' ? 1 : -1);
                if (newHead < 0) {
                  newTape.unshift('B');
                  newHead = 0;
                }
                while (newHead >= newTape.length) newTape.push('B');
                setSteps(function(s) { return s + 1; });
                // Actually update tape outside
                // We'll use a ref-based approach instead
                setTape(newTape);
                setHead(newHead);
                if (trans[2] === 'HALT') {
                  setHalted(true);
                  setRunning(false);
                }
                return trans[2];
              });
              return prevHead; // will be overridden
            });
            return prevTape; // will be overridden
          });
        }, speed);
        return function() {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }
    }, [running, halted, speed, presetKey]);

    // Cleanup
    React.useEffect(function() {
      return function() { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    // Stop if max steps for infinite
    React.useEffect(function() {
      if (!preset.halts && steps >= 200) {
        stopRunning();
      }
    }, [steps]);

    // SVG tape visualization
    var cellW = 36, cellH = 40;
    var visibleCells = Math.min(tape.length, 15);
    var startIdx = Math.max(0, head - 7);
    var endIdx = Math.min(tape.length, startIdx + visibleCells);
    if (endIdx - startIdx < visibleCells) startIdx = Math.max(0, endIdx - visibleCells);
    var svgW = (endIdx - startIdx) * cellW + 20;
    var svgH = cellH + 40;

    var tapeCells = [];
    for (var i = startIdx; i < endIdx; i++) {
      var cx = 10 + (i - startIdx) * cellW;
      var isHead = i === head;
      tapeCells.push(React.createElement('rect', {
        key: 'cell-' + i, x: cx, y: 20, width: cellW, height: cellH,
        fill: isHead ? 'rgba(34, 211, 238, 0.2)' : 'rgba(31, 41, 55, 0.8)',
        stroke: isHead ? '#22d3ee' : '#4b5563', strokeWidth: isHead ? 2 : 1,
        rx: 3
      }));
      tapeCells.push(React.createElement('text', {
        key: 'sym-' + i, x: cx + cellW / 2, y: 20 + cellH / 2 + 6,
        textAnchor: 'middle', fill: tape[i] === 'B' ? '#6b7280' : '#e5e7eb',
        fontSize: 16, fontFamily: 'monospace', fontWeight: isHead ? 'bold' : 'normal'
      }, tape[i] || 'B'));
      // Head arrow
      if (isHead) {
        tapeCells.push(React.createElement('polygon', {
          key: 'arrow',
          points: (cx + cellW / 2 - 6) + ',14 ' + (cx + cellW / 2 + 6) + ',14 ' + (cx + cellW / 2) + ',20',
          fill: '#22d3ee'
        }));
        tapeCells.push(React.createElement('text', {
          key: 'head-label', x: cx + cellW / 2, y: 10,
          textAnchor: 'middle', fill: '#22d3ee', fontSize: 9, fontWeight: 'bold'
        }, 'HEAD'));
      }
    }

    // Transition table
    var transKeys = Object.keys(preset.transitions);
    var states = [];
    var symbols = [];
    transKeys.forEach(function(k) {
      var parts = k.split(',');
      if (states.indexOf(parts[0]) < 0) states.push(parts[0]);
      if (symbols.indexOf(parts[1]) < 0) symbols.push(parts[1]);
    });

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent' },
        'Turing-Maschine'),
      // Preset selector
      e('div', { className: 'flex flex-wrap gap-2 justify-center mb-4' },
        Object.keys(PRESETS).map(function(k) {
          return e('button', {
            key: k,
            className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
              (presetKey === k ? 'border-cyan-400 text-cyan-400' : 'border-gray-700 text-gray-400 hover:border-cyan-500'),
            onClick: function() { loadPreset(k); }
          }, PRESETS[k].name);
        })
      ),
      // Description
      e('p', { className: 'text-xs text-gray-500 text-center mb-3' }, preset.description),
      // SVG Tape
      e('div', { className: 'overflow-x-auto mb-3' },
        e('svg', {
          viewBox: '0 0 ' + svgW + ' ' + svgH,
          className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
          style: { maxWidth: '580px', margin: '0 auto', display: 'block' }
        }, tapeCells)
      ),
      // State + Steps display
      e('div', { className: 'flex justify-center gap-6 mb-3' },
        e('div', { className: 'text-center' },
          e('span', { className: 'text-xs text-gray-500 block' }, 'Zustand'),
          e('span', { className: 'text-lg font-mono font-bold ' + (state === 'HALT' ? 'text-emerald-400' : 'text-cyan-400') }, state)
        ),
        e('div', { className: 'text-center' },
          e('span', { className: 'text-xs text-gray-500 block' }, 'Schritte'),
          e('span', { className: 'text-lg font-mono font-bold text-amber-400' }, '' + steps)
        ),
        halted ? e('div', { className: 'text-center' },
          e('span', { className: 'text-xs text-gray-500 block' }, 'Status'),
          e('span', { className: 'text-sm font-bold text-emerald-400' }, 'HALT!')
        ) : (running ? e('div', { className: 'text-center' },
          e('span', { className: 'text-xs text-gray-500 block' }, 'Status'),
          e('span', { className: 'text-sm font-bold text-amber-400 animate-pulse' },
            !preset.halts && steps >= 200 ? 'Gestoppt bei 200' : 'Läuft...')
        ) : null)
      ),
      // Controls
      e('div', { className: 'flex flex-wrap gap-2 justify-center mb-3' },
        e('button', {
          className: 'px-4 py-1.5 text-xs rounded-lg border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors',
          onClick: stepOnce, disabled: halted || running
        }, '→ Schritt'),
        e('button', {
          className: 'px-4 py-1.5 text-xs rounded-lg border transition-colors ' +
            (running ? 'border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white'
                     : 'border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white'),
          onClick: running ? stopRunning : startRunning, disabled: halted
        }, running ? '⏸ Pause' : '▶ Start'),
        e('button', {
          className: 'px-4 py-1.5 text-xs rounded-lg border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
          onClick: resetMachine
        }, '↺ Reset')
      ),
      // Speed slider
      e('div', { className: 'flex items-center gap-2 justify-center mb-3' },
        e('span', { className: 'text-xs text-gray-500' }, 'Schnell'),
        e('input', {
          type: 'range', min: 50, max: 800, step: 50, value: speed,
          onChange: function(ev) { setSpeed(+ev.target.value); },
          className: 'w-32 accent-cyan-400'
        }),
        e('span', { className: 'text-xs text-gray-500' }, 'Langsam')
      ),
      // Transition table
      e('details', { className: 'mt-2' },
        e('summary', { className: 'text-xs text-gray-500 cursor-pointer hover:text-gray-300 text-center' }, 'Übergangstabelle anzeigen'),
        e('div', { className: 'overflow-x-auto mt-2' },
          e('table', { className: 'mx-auto text-xs border-collapse' },
            e('thead', null,
              e('tr', null,
                e('th', { className: 'px-2 py-1 text-gray-500 border border-gray-800' }, 'Zustand \\ Symbol'),
                symbols.map(function(sym) {
                  return e('th', { key: sym, className: 'px-2 py-1 text-gray-400 font-mono border border-gray-800' }, sym);
                })
              )
            ),
            e('tbody', null,
              states.map(function(st) {
                return e('tr', { key: st },
                  e('td', { className: 'px-2 py-1 text-cyan-400 font-mono font-bold border border-gray-800' }, st),
                  symbols.map(function(sym) {
                    var t = preset.transitions[st + ',' + sym];
                    var isCurrent = st === state && sym === (tape[head] || 'B');
                    return e('td', {
                      key: sym,
                      className: 'px-2 py-1 font-mono border border-gray-800 text-center ' +
                        (isCurrent ? 'bg-cyan-900/50 text-cyan-300' : 'text-gray-400')
                    }, t ? t[0] + ',' + t[1] + ',' + t[2] : '-');
                  })
                );
              })
            )
          )
        )
      )
    );
  }
  window.TuringMachineSimulator = TuringMachineSimulator;
})();


// ════════════════════════════════════════════════════════════════
// 4. AutomataExplorer — DFA + CFG in tabs
// ════════════════════════════════════════════════════════════════
(function() {
  // DFA that accepts strings ending in "01"
  var DFA_STATES = ['q0', 'q1', 'q2'];
  var DFA_ACCEPT = ['q2'];
  var DFA_START = 'q0';
  var DFA_TRANS = {
    'q0,0': 'q1',
    'q0,1': 'q0',
    'q1,0': 'q1',
    'q1,1': 'q2',
    'q2,0': 'q1',
    'q2,1': 'q0',
  };

  function runDFA(input) {
    var path = [DFA_START];
    var st = DFA_START;
    for (var i = 0; i < input.length; i++) {
      var ch = input[i];
      if (ch !== '0' && ch !== '1') return { path: path, accepted: false, error: true };
      var next = DFA_TRANS[st + ',' + ch];
      if (!next) return { path: path, accepted: false };
      st = next;
      path.push(st);
    }
    return { path: path, accepted: DFA_ACCEPT.indexOf(st) >= 0 };
  }

  // CFG for balanced parentheses: S → (S) | SS | ε
  function checkBalanced(input) {
    var depth = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i] === '(') depth++;
      else if (input[i] === ')') depth--;
      else return { accepted: false, error: true };
      if (depth < 0) return { accepted: false };
    }
    return { accepted: depth === 0 };
  }

  function AutomataExplorer() {
    var s = React.useState;
    var tab = s('dfa'), setTab = tab[1]; tab = tab[0];
    var dfaInput = s('1001'), setDfaInput = dfaInput[1]; dfaInput = dfaInput[0];
    var cfgInput = s('(()())'), setCfgInput = cfgInput[1]; cfgInput = cfgInput[0];
    var animStep = s(-1), setAnimStep = animStep[1]; animStep = animStep[0];
    var animRunning = s(false), setAnimRunning = animRunning[1]; animRunning = animRunning[0];
    var intervalRef = React.useRef(null);

    var dfaResult = runDFA(dfaInput);
    var cfgResult = checkBalanced(cfgInput);

    function startDFAAnimation() {
      setAnimStep(0);
      setAnimRunning(true);
    }

    React.useEffect(function() {
      if (animRunning && animStep >= 0) {
        intervalRef.current = setTimeout(function() {
          if (animStep < dfaInput.length) {
            setAnimStep(animStep + 1);
          } else {
            setAnimRunning(false);
          }
        }, 600);
        return function() { clearTimeout(intervalRef.current); };
      }
    }, [animStep, animRunning, dfaInput]);

    // Reset animation when input changes
    React.useEffect(function() {
      setAnimStep(-1);
      setAnimRunning(false);
    }, [dfaInput]);

    // DFA SVG
    var svgW = 360, svgH = 160;
    var statePositions = {
      q0: { x: 60, y: 80 },
      q1: { x: 180, y: 80 },
      q2: { x: 300, y: 80 },
    };
    var R = 28;

    var currentDFAState = animStep >= 0 ? dfaResult.path[Math.min(animStep, dfaResult.path.length - 1)] : null;

    function dfaSvgElements() {
      var els = [];

      // Arrows (transitions)
      var arrows = [
        { from: 'q0', to: 'q1', label: '0', curve: 0 },
        { from: 'q1', to: 'q2', label: '1', curve: 0 },
        { from: 'q2', to: 'q0', label: '1', curve: -40 },
        { from: 'q2', to: 'q1', label: '0', curve: 20 },
      ];

      // Self-loops
      var selfLoops = [
        { state: 'q0', label: '1' },
        { state: 'q1', label: '0' },
      ];

      // Draw arrows
      arrows.forEach(function(a, i) {
        var p1 = statePositions[a.from];
        var p2 = statePositions[a.to];
        var dx = p2.x - p1.x, dy = p2.y - p1.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var nx = dx / dist, ny = dy / dist;
        var sx = p1.x + nx * R, sy = p1.y + ny * R;
        var ex = p2.x - nx * R, ey = p2.y - ny * R;

        if (a.curve !== 0) {
          var mx = (sx + ex) / 2 + (-ny) * a.curve;
          var my = (sy + ey) / 2 + nx * a.curve;
          els.push(React.createElement('path', {
            key: 'arr-' + i,
            d: 'M' + sx + ',' + sy + ' Q' + mx + ',' + my + ' ' + ex + ',' + ey,
            fill: 'none', stroke: '#6b7280', strokeWidth: 1.5, markerEnd: 'url(#arrowhead)'
          }));
          els.push(React.createElement('text', {
            key: 'arrl-' + i, x: mx, y: my - 4,
            textAnchor: 'middle', fill: '#9ca3af', fontSize: 11, fontFamily: 'monospace'
          }, a.label));
        } else {
          els.push(React.createElement('line', {
            key: 'arr-' + i, x1: sx, y1: sy - 2, x2: ex, y2: ey - 2,
            stroke: '#6b7280', strokeWidth: 1.5, markerEnd: 'url(#arrowhead)'
          }));
          els.push(React.createElement('text', {
            key: 'arrl-' + i, x: (sx + ex) / 2, y: sy - 12,
            textAnchor: 'middle', fill: '#9ca3af', fontSize: 11, fontFamily: 'monospace'
          }, a.label));
        }
      });

      // Self-loops
      selfLoops.forEach(function(sl, i) {
        var p = statePositions[sl.state];
        els.push(React.createElement('path', {
          key: 'self-' + i,
          d: 'M' + (p.x - 12) + ',' + (p.y - R) + ' C' + (p.x - 20) + ',' + (p.y - R - 35) + ' ' + (p.x + 20) + ',' + (p.y - R - 35) + ' ' + (p.x + 12) + ',' + (p.y - R),
          fill: 'none', stroke: '#6b7280', strokeWidth: 1.5, markerEnd: 'url(#arrowhead)'
        }));
        els.push(React.createElement('text', {
          key: 'selfl-' + i, x: p.x, y: p.y - R - 28,
          textAnchor: 'middle', fill: '#9ca3af', fontSize: 11, fontFamily: 'monospace'
        }, sl.label));
      });

      // Start arrow
      els.push(React.createElement('line', {
        key: 'start-arr', x1: 10, y1: 80, x2: statePositions.q0.x - R, y2: 80,
        stroke: '#9ca3af', strokeWidth: 1.5, markerEnd: 'url(#arrowhead)'
      }));

      // State circles
      DFA_STATES.forEach(function(st) {
        var p = statePositions[st];
        var isAccept = DFA_ACCEPT.indexOf(st) >= 0;
        var isCurrent = currentDFAState === st;
        var fillColor = isCurrent ? (isAccept && animStep >= dfaInput.length ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 211, 238, 0.3)') : 'rgba(31, 41, 55, 0.8)';
        var strokeColor = isCurrent ? (isAccept && animStep >= dfaInput.length ? '#22c55e' : '#22d3ee') : '#6b7280';

        els.push(React.createElement('circle', {
          key: 'state-' + st, cx: p.x, cy: p.y, r: R,
          fill: fillColor, stroke: strokeColor, strokeWidth: 2
        }));
        if (isAccept) {
          els.push(React.createElement('circle', {
            key: 'accept-' + st, cx: p.x, cy: p.y, r: R - 4,
            fill: 'none', stroke: strokeColor, strokeWidth: 1
          }));
        }
        els.push(React.createElement('text', {
          key: 'stlbl-' + st, x: p.x, y: p.y + 5,
          textAnchor: 'middle', fill: isCurrent ? '#ffffff' : '#d1d5db',
          fontSize: 14, fontFamily: 'monospace', fontWeight: 'bold'
        }, st));
      });

      return els;
    }

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' },
        'Automaten-Explorer'),
      // Tabs
      e('div', { className: 'flex justify-center gap-2 mb-4' },
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
            (tab === 'dfa' ? 'border-cyan-400 text-cyan-400' : 'border-gray-700 text-gray-400 hover:border-cyan-500'),
          onClick: function() { setTab('dfa'); }
        }, 'Regulär (DFA)'),
        e('button', {
          className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
            (tab === 'cfg' ? 'border-purple-400 text-purple-400' : 'border-gray-700 text-gray-400 hover:border-purple-500'),
          onClick: function() { setTab('cfg'); }
        }, 'Kontextfrei (CFG)')
      ),

      tab === 'dfa' ? e('div', null,
        e('p', { className: 'text-xs text-gray-500 text-center mb-3' }, 'DFA: Akzeptiert Binärstrings die auf "01" enden'),
        // SVG DFA diagram
        e('div', { className: 'overflow-x-auto mb-3' },
          e('svg', {
            viewBox: '0 0 ' + svgW + ' ' + svgH,
            className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
            style: { maxWidth: '450px', margin: '0 auto', display: 'block' }
          },
            e('defs', null,
              e('marker', { id: 'arrowhead', markerWidth: 8, markerHeight: 6, refX: 8, refY: 3, orient: 'auto' },
                e('polygon', { points: '0 0, 8 3, 0 6', fill: '#6b7280' })
              )
            ),
            dfaSvgElements()
          )
        ),
        // Input
        e('div', { className: 'mb-3' },
          e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Eingabe (0en und 1en):'),
          e('div', { className: 'flex gap-2' },
            e('input', {
              type: 'text', value: dfaInput,
              onChange: function(ev) { setDfaInput(ev.target.value.replace(/[^01]/g, '')); },
              className: 'flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none',
              placeholder: '1001'
            }),
            e('button', {
              className: 'px-3 py-1.5 text-xs rounded-lg border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors',
              onClick: startDFAAnimation
            }, '▶ Animate')
          )
        ),
        // Animation step display
        animStep >= 0 ? e('div', { className: 'flex items-center justify-center gap-1 mb-2 font-mono text-sm' },
          dfaInput.split('').map(function(ch, i) {
            var color = i < animStep ? '#6b7280' : (i === animStep ? '#22d3ee' : '#4b5563');
            var weight = i === animStep ? 'bold' : 'normal';
            return e('span', { key: i, style: { color: color, fontWeight: weight, fontSize: i === animStep ? '1.1em' : '1em' } }, ch);
          }),
          animStep >= dfaInput.length ? e('span', {
            className: dfaResult.accepted ? 'text-emerald-400 ml-2 font-bold' : 'text-rose-400 ml-2 font-bold'
          }, dfaResult.accepted ? ' ✓ Akzeptiert!' : ' ✗ Abgelehnt!') : null
        ) : null,
        // Quick result (when not animating)
        animStep < 0 ? e('p', {
          className: 'text-sm text-center font-mono ' + (dfaResult.accepted ? 'text-emerald-400' : 'text-rose-400')
        }, dfaInput.length === 0 ? 'Leerer String → Abgelehnt' :
          '"' + dfaInput + '" → ' + (dfaResult.accepted ? 'Akzeptiert ✓' : 'Abgelehnt ✗')
        ) : null,
        // Preset inputs
        e('div', { className: 'flex flex-wrap gap-1.5 justify-center mt-2' },
          ['01', '1001', '111', '0101', '10', '001'].map(function(inp) {
            return e('button', {
              key: inp,
              className: 'px-2 py-1 text-[0.65rem] rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors font-mono',
              onClick: function() { setDfaInput(inp); setAnimStep(-1); setAnimRunning(false); }
            }, inp);
          })
        )
      ) : // CFG tab
      e('div', null,
        e('p', { className: 'text-xs text-gray-500 text-center mb-3' }, 'Kontextfreie Grammatik für balancierte Klammern'),
        // Grammar display
        e('div', { className: 'bg-gray-900 rounded-xl p-3 border border-gray-800 mb-3 text-center' },
          e('p', { className: 'text-sm font-mono text-purple-300 mb-1' }, 'S → (S) | SS | ε'),
          e('p', { className: 'text-xs text-gray-500' }, 'S erzeugt verschachtelte und verkettete Klammerpaare. ε = leerer String.')
        ),
        // Derivation example
        e('div', { className: 'bg-gray-900/50 rounded-xl p-3 border border-gray-800 mb-3' },
          e('p', { className: 'text-xs text-gray-400 mb-2 font-semibold' }, 'Beispiel-Ableitung für "(()())":'),
          e('div', { className: 'space-y-0.5 text-xs font-mono text-center' },
            ['S', '(S)', '(SS)', '((S)S)', '((S)(S))', '(( )(S))', '(( )( ))'].map(function(step, i) {
              return e('p', { key: i, className: 'text-purple-300' },
                (i > 0 ? '→ ' : '  ') + step
              );
            })
          )
        ),
        // Input
        e('div', { className: 'mb-3' },
          e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Klammerausdruck testen:'),
          e('input', {
            type: 'text', value: cfgInput,
            onChange: function(ev) { setCfgInput(ev.target.value.replace(/[^()]/g, '')); },
            className: 'w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-purple-500 focus:outline-none',
            placeholder: '(()())'
          })
        ),
        // Result
        e('p', {
          className: 'text-sm text-center font-mono ' +
            (cfgInput.length === 0 ? 'text-emerald-400' : (cfgResult.accepted ? 'text-emerald-400' : 'text-rose-400'))
        }, cfgInput.length === 0
          ? 'ε (leerer String) → Akzeptiert ✓'
          : '"' + cfgInput + '" → ' + (cfgResult.accepted ? 'Balanciert ✓' : 'Nicht balanciert ✗')
        ),
        // Presets
        e('div', { className: 'flex flex-wrap gap-1.5 justify-center mt-2' },
          ['()', '(())', '(()())', '((()))', '()()', '(()', '())(', ''].map(function(inp) {
            return e('button', {
              key: inp || 'eps',
              className: 'px-2 py-1 text-[0.65rem] rounded-full border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-colors font-mono',
              onClick: function() { setCfgInput(inp); }
            }, inp || 'ε');
          })
        )
      )
    );
  }
  window.AutomataExplorer = AutomataExplorer;
})();


// ════════════════════════════════════════════════════════════════
// 5. SelfReferencePlayground — Liar paradox, quines, cobweb
// ════════════════════════════════════════════════════════════════
(function() {
  function SelfReferencePlayground() {
    var s = React.useState;
    var section = s('liar'), setSection = section[1]; section = section[0];
    // Liar state
    var liarVal = s(true), setLiarVal = liarVal[1]; liarVal = liarVal[0];
    var liarFlips = s(0), setLiarFlips = liarFlips[1]; liarFlips = liarFlips[0];
    var liarAnimating = s(false), setLiarAnimating = liarAnimating[1]; liarAnimating = liarAnimating[0];
    var flipTimerRef = React.useRef(null);
    // Cobweb state
    var paramA = s(2.8), setParamA = paramA[1]; paramA = paramA[0];
    var x0 = s(0.2), setX0 = x0[1]; x0 = x0[0];

    // Liar auto-flip
    function toggleLiar() {
      setLiarVal(!liarVal);
      setLiarFlips(function(f) { return f + 1; });
    }

    function startLiarLoop() {
      setLiarAnimating(true);
      setLiarFlips(0);
    }

    function stopLiarLoop() {
      setLiarAnimating(false);
      if (flipTimerRef.current) clearInterval(flipTimerRef.current);
    }

    React.useEffect(function() {
      if (liarAnimating) {
        flipTimerRef.current = setInterval(function() {
          setLiarVal(function(v) { return !v; });
          setLiarFlips(function(f) {
            if (f >= 20) {
              setLiarAnimating(false);
              return f;
            }
            return f + 1;
          });
        }, 400);
        return function() { clearInterval(flipTimerRef.current); };
      }
    }, [liarAnimating]);

    // Quine code
    var quineCode = 'var q="var q=%22"+q.replace(/%22/g,"%5C%22")+"%22;console.log(q)";console.log(q)';
    var realQuine = '(function q(){console.log("("+q+")()")})()';

    // Cobweb diagram computation
    var cobwebW = 300, cobwebH = 300;
    function f(x) { return paramA * x * (1 - x); }

    var cobwebPaths = React.useMemo(function() {
      var els = [];
      var pad = 0;
      var scale = cobwebW;

      // y = x line
      els.push({ type: 'line', x1: pad, y1: cobwebH - pad, x2: pad + scale, y2: cobwebH - pad - scale, color: '#6b7280', dash: '4,4' });

      // y = f(x) parabola
      var parabolaPts = [];
      for (var i = 0; i <= 100; i++) {
        var xv = i / 100;
        var yv = f(xv);
        yv = Math.max(0, Math.min(1, yv));
        parabolaPts.push((i === 0 ? 'M' : 'L') + (pad + xv * scale).toFixed(1) + ',' + (cobwebH - pad - yv * scale).toFixed(1));
      }
      els.push({ type: 'path', d: parabolaPts.join(' '), color: '#22d3ee' });

      // Cobweb iteration
      var x = x0;
      var cobwebPts = [];
      // start at (x0, 0)
      cobwebPts.push({ x: x, y: 0 });
      for (var step = 0; step < 30; step++) {
        var y = f(x);
        y = Math.max(0, Math.min(1, y));
        cobwebPts.push({ x: x, y: y }); // vertical to curve
        cobwebPts.push({ x: y, y: y }); // horizontal to y=x
        x = y;
        if (x < 0.001 || x > 0.999) break;
      }
      var cobwebPath = cobwebPts.map(function(p, i) {
        return (i === 0 ? 'M' : 'L') + (pad + p.x * scale).toFixed(1) + ',' + (cobwebH - pad - p.y * scale).toFixed(1);
      }).join(' ');
      els.push({ type: 'path', d: cobwebPath, color: '#f59e0b' });

      // Fixed points
      // f(x*) = x* → ax*(1-x*) = x* → x*(a(1-x*) - 1) = 0 → x* = 0 or x* = 1 - 1/a
      var fp1 = 0;
      var fp2 = paramA > 1 ? 1 - 1 / paramA : 0;
      els.push({ type: 'fixedpoint', x: fp2, y: fp2 });

      return els;
    }, [paramA, x0]);

    var e = React.createElement;

    // Section navigation
    var sections = [
      { key: 'liar', label: 'Lügner-Paradoxon' },
      { key: 'quine', label: 'Quine' },
      { key: 'cobweb', label: 'Fixpunkt-Diagramm' },
    ];

    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent' },
        'Selbstreferenz-Spielplatz'),
      // Section tabs
      e('div', { className: 'flex flex-wrap justify-center gap-2 mb-4' },
        sections.map(function(sec) {
          return e('button', {
            key: sec.key,
            className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
              (section === sec.key ? 'border-rose-400 text-rose-400' : 'border-gray-700 text-gray-400 hover:border-rose-500'),
            onClick: function() { setSection(sec.key); }
          }, sec.label);
        })
      ),

      // ─── a) Liar Paradox ───
      section === 'liar' ? e('div', { className: 'text-center' },
        e('div', { className: 'bg-gray-900 rounded-xl p-6 border border-gray-800 mb-3 inline-block mx-auto' },
          e('p', { className: 'text-lg sm:text-xl font-serif text-gray-200 mb-4' },
            '„Dieser Satz ist ',
            e('span', {
              className: 'font-bold cursor-pointer px-2 py-0.5 rounded transition-colors ' +
                (liarVal ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'),
              onClick: toggleLiar
            }, liarVal ? 'WAHR' : 'FALSCH'),
            '."'
          ),
          e('p', { className: 'text-sm text-gray-400 mb-4' },
            liarVal
              ? 'Wenn er wahr ist, dann sagt er die Wahrheit — aber er behauptet, wahr zu sein, also...'
              : 'Wenn er falsch ist, dann lügt er — aber sein Inhalt ist dann richtig, also...'
          ),
          // Cycle animation SVG
          e('svg', { viewBox: '0 0 200 60', className: 'w-48 mx-auto mb-3' },
            // TRUE box
            e('rect', { x: 10, y: 15, width: 55, height: 30, rx: 6,
              fill: liarVal ? 'rgba(34, 197, 94, 0.2)' : 'transparent',
              stroke: '#22c55e', strokeWidth: 1.5
            }),
            e('text', { x: 37.5, y: 35, textAnchor: 'middle', fill: '#22c55e', fontSize: 12, fontWeight: 'bold' }, 'WAHR'),
            // FALSE box
            e('rect', { x: 135, y: 15, width: 55, height: 30, rx: 6,
              fill: !liarVal ? 'rgba(244, 63, 94, 0.2)' : 'transparent',
              stroke: '#f43f5e', strokeWidth: 1.5
            }),
            e('text', { x: 162.5, y: 35, textAnchor: 'middle', fill: '#f43f5e', fontSize: 12, fontWeight: 'bold' }, 'FALSCH'),
            // Arrows
            e('path', { d: 'M 68 22 Q 100 5 132 22', fill: 'none', stroke: '#9ca3af', strokeWidth: 1.2, markerEnd: 'url(#liar-arrow)' }),
            e('path', { d: 'M 132 38 Q 100 55 68 38', fill: 'none', stroke: '#9ca3af', strokeWidth: 1.2, markerEnd: 'url(#liar-arrow)' }),
            e('defs', null,
              e('marker', { id: 'liar-arrow', markerWidth: 6, markerHeight: 4, refX: 6, refY: 2, orient: 'auto' },
                e('polygon', { points: '0 0, 6 2, 0 4', fill: '#9ca3af' })
              )
            ),
            // Labels on arrows
            e('text', { x: 100, y: 10, textAnchor: 'middle', fill: '#6b7280', fontSize: 8 }, 'impliziert'),
            e('text', { x: 100, y: 58, textAnchor: 'middle', fill: '#6b7280', fontSize: 8 }, 'impliziert')
          ),
          // Controls
          e('div', { className: 'flex gap-2 justify-center' },
            e('button', {
              className: 'px-3 py-1.5 text-xs rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
              onClick: toggleLiar
            }, 'Umschalten'),
            !liarAnimating
              ? e('button', {
                  className: 'px-3 py-1.5 text-xs rounded-full border border-rose-600 text-rose-400 hover:bg-rose-600 hover:text-white transition-colors',
                  onClick: startLiarLoop
                }, '∞ Endlosschleife')
              : e('button', {
                  className: 'px-3 py-1.5 text-xs rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 transition-colors',
                  onClick: stopLiarLoop
                }, '■ Stopp')
          ),
          liarFlips > 0 ? e('p', { className: 'text-xs text-gray-600 mt-2' }, 'Wechsel: ' + liarFlips + (liarFlips >= 20 ? ' — Unendlicher Regress!' : '')) : null
        )
      ) : null,

      // ─── b) Quine ───
      section === 'quine' ? e('div', null,
        e('div', { className: 'bg-gray-900 rounded-xl p-4 border border-gray-800 mb-3' },
          e('p', { className: 'text-xs text-gray-400 mb-2 font-semibold' }, 'Ein Quine gibt seinen eigenen Quellcode aus:'),
          e('pre', { className: 'text-xs font-mono text-amber-300 bg-gray-950 p-3 rounded-lg overflow-x-auto mb-3 whitespace-pre-wrap' },
            realQuine
          ),
          e('p', { className: 'text-xs text-gray-400 mb-2 font-semibold' }, 'So funktioniert es:'),
          e('div', { className: 'space-y-2 text-xs text-gray-300' },
            e('p', null,
              e('span', { className: 'text-cyan-400 font-mono' }, 'function q()'),
              ' — Die Funktion kennt ihren eigenen Namen.'
            ),
            e('p', null,
              e('span', { className: 'text-cyan-400 font-mono' }, 'q.toString()'),
              ' — In JavaScript kann jede Funktion ihren Quellcode als String zurückgeben.'
            ),
            e('p', null,
              e('span', { className: 'text-cyan-400 font-mono' }, '"("+q+")()"'),
              ' — Rekonstruiert den vollständigen Aufruf: Definition + Selbstaufruf.'
            ),
            e('p', null,
              e('span', { className: 'text-amber-400' }, 'Prinzip:'),
              ' Ein Quine ist ein Programm, das eine Darstellung von sich selbst enthält — genau wie Gödels Satz eine Formel konstruiert, die über sich selbst spricht.'
            )
          )
        ),
        e('div', { className: 'bg-gray-900/50 rounded-xl p-3 border border-gray-800' },
          e('p', { className: 'text-xs text-gray-400 mb-1 font-semibold' }, 'Zusammenhang zu Gödels Satz:'),
          e('p', { className: 'text-xs text-gray-400' },
            'Gödels Beweis nutzt die gleiche Technik: Er konstruiert eine Formel G, die (via Gödelnummer) sagt: ',
            e('span', { className: 'text-rose-400 font-mono' }, '"Diese Formel ist nicht beweisbar."'),
            ' — ein mathematisches Quine, das sich selbst referenziert.'
          )
        )
      ) : null,

      // ─── c) Cobweb / Fixed-point diagram ───
      section === 'cobweb' ? e('div', null,
        e('p', { className: 'text-xs text-gray-500 text-center mb-3' },
          'Fixpunkt-Iteration: f(x) = ax(1−x). Der Spinnwebplot zeigt Konvergenz oder Chaos.'),
        // SVG cobweb diagram
        e('div', { className: 'overflow-x-auto mb-3' },
          e('svg', {
            viewBox: '0 0 ' + cobwebW + ' ' + cobwebH,
            className: 'w-full bg-gray-900 rounded-xl border border-gray-800',
            style: { maxWidth: '350px', margin: '0 auto', display: 'block' }
          },
            // Grid lines
            [0.25, 0.5, 0.75].map(function(v) {
              return [
                e('line', { key: 'gv-' + v, x1: v * cobwebW, y1: 0, x2: v * cobwebW, y2: cobwebH, stroke: '#1f2937', strokeWidth: 0.5 }),
                e('line', { key: 'gh-' + v, x1: 0, y1: v * cobwebH, x2: cobwebW, y2: v * cobwebH, stroke: '#1f2937', strokeWidth: 0.5 }),
              ];
            }),
            // Axis labels
            e('text', { x: cobwebW - 5, y: cobwebH - 5, fill: '#4b5563', fontSize: 9, textAnchor: 'end' }, 'x'),
            e('text', { x: 5, y: 12, fill: '#4b5563', fontSize: 9 }, 'y'),
            // y = x line (dashed)
            cobwebPaths.filter(function(p) { return p.type === 'line'; }).map(function(p, i) {
              return e('line', { key: 'diag-' + i, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2, stroke: p.color, strokeWidth: 1, strokeDasharray: p.dash });
            }),
            // Parabola
            cobwebPaths.filter(function(p) { return p.type === 'path'; }).map(function(p, i) {
              var isCobweb = i === 1; // second path is cobweb
              return e('path', { key: 'path-' + i, d: p.d, fill: 'none', stroke: p.color, strokeWidth: isCobweb ? 1 : 2, opacity: isCobweb ? 0.7 : 1 });
            }),
            // Fixed point marker
            cobwebPaths.filter(function(p) { return p.type === 'fixedpoint'; }).map(function(p, i) {
              if (p.x <= 0 || p.x >= 1) return null;
              return e('circle', { key: 'fp-' + i, cx: p.x * cobwebW, cy: cobwebH - p.y * cobwebH, r: 4, fill: '#f43f5e', stroke: '#fecdd3', strokeWidth: 1.5 });
            }),
            // Legend
            e('rect', { x: 5, y: 5, width: 8, height: 3, fill: '#22d3ee' }),
            e('text', { x: 16, y: 10, fill: '#22d3ee', fontSize: 8 }, 'y = ax(1-x)'),
            e('rect', { x: 5, y: 15, width: 8, height: 3, fill: '#6b7280' }),
            e('text', { x: 16, y: 20, fill: '#6b7280', fontSize: 8 }, 'y = x'),
            e('rect', { x: 5, y: 25, width: 8, height: 3, fill: '#f59e0b' }),
            e('text', { x: 16, y: 30, fill: '#f59e0b', fontSize: 8 }, 'Iteration')
          )
        ),
        // Sliders
        e('div', { className: 'space-y-2 mb-3' },
          e('div', null,
            e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Parameter a = ' + paramA.toFixed(2) +
              (paramA < 1 ? ' (→ 0)' : paramA < 3 ? ' (stabiler Fixpunkt)' : paramA < 3.57 ? ' (Periodenverdopplung)' : ' (Chaos!)')),
            e('input', { type: 'range', min: 0.5, max: 4, step: 0.01, value: paramA,
              onChange: function(ev) { setParamA(+ev.target.value); },
              className: 'w-full accent-cyan-400' })
          ),
          e('div', null,
            e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'Startwert x₀ = ' + x0.toFixed(2)),
            e('input', { type: 'range', min: 0.01, max: 0.99, step: 0.01, value: x0,
              onChange: function(ev) { setX0(+ev.target.value); },
              className: 'w-full accent-amber-400' })
          )
        ),
        // Quick presets
        e('div', { className: 'flex flex-wrap gap-1.5 justify-center' },
          [
            { label: 'Stabil (a=2.5)', a: 2.5 },
            { label: 'Periode 2 (a=3.2)', a: 3.2 },
            { label: 'Periode 4 (a=3.5)', a: 3.5 },
            { label: 'Chaos (a=3.9)', a: 3.9 },
            { label: 'Maximum (a=4)', a: 4.0 },
          ].map(function(p) {
            return e('button', {
              key: p.label,
              className: 'px-2 py-1 text-[0.65rem] rounded-full border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-400 transition-colors',
              onClick: function() { setParamA(p.a); }
            }, p.label);
          })
        ),
        // Fixed point info
        paramA > 1 ? e('p', { className: 'text-xs text-gray-500 text-center mt-2' },
          'Fixpunkt x* = 1 − 1/a = ' + (1 - 1 / paramA).toFixed(4) +
          (paramA < 3 ? ' (stabil)' : ' (instabil → Bifurkation)')
        ) : e('p', { className: 'text-xs text-gray-500 text-center mt-2' },
          'Für a < 1 konvergiert alles gegen 0.'
        )
      ) : null
    );
  }
  window.SelfReferencePlayground = SelfReferencePlayground;
})();
