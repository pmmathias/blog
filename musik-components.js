// musik-components.js — Interactive React components for the music post
// Web Audio API + SVG visualizations
// Pattern: IIFE → React.createElement (no JSX) → window.ComponentName

// ════════════════════════════════════════════════════════════════
// Shared Audio Context (lazy init on user gesture)
// ════════════════════════════════════════════════════════════════
var _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

// ════════════════════════════════════════════════════════════════
// 1. HarmonicExplorer — Two frequencies → Lissajous + Sound
// ════════════════════════════════════════════════════════════════
(function() {
  var W = 300, H = 300;
  var PRESETS = [
    { name: 'Oktave (2:1)', f1: 440, f2: 880 },
    { name: 'Quinte (3:2)', f1: 440, f2: 660 },
    { name: 'Quarte (4:3)', f1: 440, f2: 586.67 },
    { name: 'Gr. Terz (5:4)', f1: 440, f2: 550 },
    { name: 'Kl. Terz (6:5)', f1: 440, f2: 528 },
    { name: 'Tritonus', f1: 440, f2: 622.25 },
  ];

  function ratioLabel(f1, f2) {
    var r = f2 / f1;
    var best = '', bestErr = 1;
    var rats = [[1,1],[2,1],[3,2],[4,3],[5,4],[6,5],[5,3],[7,4],[8,5],[9,8]];
    for (var i = 0; i < rats.length; i++) {
      var err = Math.abs(r - rats[i][0]/rats[i][1]);
      if (err < bestErr) { bestErr = err; best = rats[i][0]+':'+rats[i][1]; }
    }
    return bestErr < 0.03 ? '≈ ' + best : r.toFixed(3);
  }

  function HarmonicExplorer() {
    var s = React.useState;
    var f1 = s(440), setF1 = f1[1]; f1 = f1[0];
    var f2 = s(660), setF2 = f2[1]; f2 = f2[0];
    var playing = s(false), setPlaying = playing[1]; playing = playing[0];
    var oscsRef = React.useRef(null);
    var timeRef = React.useRef(0);
    var rafRef = React.useRef(null);
    var prevRef = React.useRef(0);

    // Animation loop for Lissajous
    var phase = s(0), setPhase = phase[1]; phase = phase[0];
    React.useEffect(function() {
      var tick = function(now) {
        if (prevRef.current) {
          var dt = (now - prevRef.current) * 0.001;
          timeRef.current += dt;
        }
        prevRef.current = now;
        setPhase(timeRef.current);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return function() { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    // Build Lissajous path
    var path = React.useMemo(function() {
      var pts = [];
      var t = phase;
      for (var i = 0; i <= 500; i++) {
        var s = i / 500 * Math.PI * 2;
        var x = Math.sin(s + t * 0.5) * 0.42 + 0.5;
        var y = Math.sin(s * (f2 / f1) + t * 0.3) * 0.42 + 0.5;
        pts.push((i === 0 ? 'M' : 'L') + (x * W).toFixed(1) + ',' + (y * H).toFixed(1));
      }
      return pts.join(' ');
    }, [phase, f1, f2]);

    function toggleSound() {
      var ctx = getAudioCtx();
      if (playing && oscsRef.current) {
        oscsRef.current.forEach(function(o) { try { o.stop(); } catch(e){} });
        oscsRef.current = null;
        setPlaying(false);
      } else {
        var g = ctx.createGain(); g.gain.value = 0.15; g.connect(ctx.destination);
        var o1 = ctx.createOscillator(); o1.frequency.value = f1; o1.type = 'sine'; o1.connect(g); o1.start();
        var o2 = ctx.createOscillator(); o2.frequency.value = f2; o2.type = 'sine'; o2.connect(g); o2.start();
        oscsRef.current = [o1, o2, g];
        setPlaying(true);
      }
    }

    // Update frequencies if playing
    React.useEffect(function() {
      if (oscsRef.current && oscsRef.current[0]) {
        oscsRef.current[0].frequency.value = f1;
        oscsRef.current[1].frequency.value = f2;
      }
    }, [f1, f2]);

    // Cleanup on unmount
    React.useEffect(function() {
      return function() {
        if (oscsRef.current) oscsRef.current.forEach(function(o) { try { o.stop(); } catch(e){} });
      };
    }, []);

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent' },
        'Harmonic Explorer'),
      e('div', { className: 'flex flex-col sm:flex-row gap-4 items-center' },
        // SVG Lissajous
        e('svg', { viewBox: '0 0 '+W+' '+H, className: 'w-full sm:w-1/2 bg-gray-900 rounded-xl border border-gray-800', style: { maxWidth: '300px' } },
          e('path', { d: path, fill: 'none', stroke: '#22d3ee', strokeWidth: 1.5, opacity: 0.9 })
        ),
        // Controls
        e('div', { className: 'flex-1 w-full space-y-3' },
          e('div', null,
            e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'f₁ = ' + Math.round(f1) + ' Hz'),
            e('input', { type: 'range', min: 200, max: 1000, step: 1, value: f1,
              onChange: function(ev) { setF1(+ev.target.value); },
              className: 'w-full accent-cyan-400' })
          ),
          e('div', null,
            e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'f₂ = ' + Math.round(f2) + ' Hz'),
            e('input', { type: 'range', min: 200, max: 1500, step: 1, value: f2,
              onChange: function(ev) { setF2(+ev.target.value); },
              className: 'w-full accent-amber-400' })
          ),
          e('p', { className: 'text-sm text-center text-gray-300 font-mono' },
            'Verhältnis: ' + ratioLabel(f1, f2)),
          // Presets
          e('div', { className: 'flex flex-wrap gap-1.5 justify-center' },
            PRESETS.map(function(p) {
              return e('button', {
                key: p.name,
                className: 'px-2 py-1 text-[0.65rem] rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors',
                onClick: function() { setF1(p.f1); setF2(p.f2); }
              }, p.name);
            })
          ),
          // Play button
          e('button', {
            className: 'w-full mt-2 py-2 rounded-lg font-semibold text-sm transition-colors ' +
              (playing ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'),
            onClick: toggleSound
          }, playing ? '■ Stopp' : '▶ Anhören')
        )
      )
    );
  }
  window.HarmonicExplorer = HarmonicExplorer;
})();


// ════════════════════════════════════════════════════════════════
// 2. OvertoneVisualizer — String harmonics + additive synthesis
// ════════════════════════════════════════════════════════════════
(function() {
  var W = 600, H = 200;
  var NUM_HARMONICS = 8;

  function OvertoneVisualizer() {
    var s = React.useState;
    var amps = s([1, 0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.05]);
    var setAmps = amps[1]; amps = amps[0];
    var playing = s(false), setPlaying = playing[1]; playing = playing[0];
    var preset = s('custom'), setPreset = preset[1]; preset = preset[0];
    var oscsRef = React.useRef(null);
    var BASE_FREQ = 220; // A3

    var PRESETS = {
      sine: [1, 0, 0, 0, 0, 0, 0, 0],
      sawtooth: [1, 0.5, 0.33, 0.25, 0.2, 0.167, 0.143, 0.125],
      square: [1, 0, 0.33, 0, 0.2, 0, 0.143, 0],
      custom: amps
    };

    function applyPreset(name) {
      setPreset(name);
      if (name !== 'custom') setAmps(PRESETS[name].slice());
    }

    // Waveform path
    var path = React.useMemo(function() {
      var pts = [];
      for (var i = 0; i <= W; i++) {
        var t = i / W * Math.PI * 4;
        var y = 0;
        for (var h = 0; h < NUM_HARMONICS; h++) {
          y += amps[h] * Math.sin(t * (h + 1));
        }
        var maxA = amps.reduce(function(a, b) { return a + Math.abs(b); }, 0) || 1;
        var ny = H / 2 - (y / maxA) * (H * 0.4);
        pts.push((i === 0 ? 'M' : 'L') + i + ',' + ny.toFixed(1));
      }
      return pts.join(' ');
    }, [amps]);

    function toggleSound() {
      var ctx = getAudioCtx();
      if (playing && oscsRef.current) {
        oscsRef.current.forEach(function(o) { try { o.stop(); } catch(e){} });
        oscsRef.current = null;
        setPlaying(false);
      } else {
        var master = ctx.createGain(); master.gain.value = 0.12; master.connect(ctx.destination);
        var oscs = [];
        for (var h = 0; h < NUM_HARMONICS; h++) {
          if (amps[h] < 0.01) continue;
          var o = ctx.createOscillator();
          var g = ctx.createGain();
          o.frequency.value = BASE_FREQ * (h + 1);
          o.type = 'sine';
          g.gain.value = amps[h];
          o.connect(g); g.connect(master); o.start();
          oscs.push(o);
        }
        oscsRef.current = oscs;
        setPlaying(true);
      }
    }

    React.useEffect(function() {
      return function() {
        if (oscsRef.current) oscsRef.current.forEach(function(o) { try { o.stop(); } catch(e){} });
      };
    }, []);

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent' },
        'Oberton-Visualizer'),
      // Waveform
      e('svg', { viewBox: '0 0 '+W+' '+H, className: 'w-full bg-gray-900 rounded-xl border border-gray-800 mb-3' },
        e('line', { x1: 0, y1: H/2, x2: W, y2: H/2, stroke: '#334155', strokeWidth: 0.5 }),
        e('path', { d: path, fill: 'none', stroke: '#22d3ee', strokeWidth: 2 })
      ),
      // Sliders for each harmonic
      e('div', { className: 'grid grid-cols-4 sm:grid-cols-8 gap-2 mb-3' },
        amps.map(function(a, i) {
          return e('div', { key: i, className: 'text-center' },
            e('div', { className: 'text-[0.6rem] text-gray-500 mb-1' }, (i+1) + 'f'),
            e('input', {
              type: 'range', min: 0, max: 1, step: 0.01, value: a,
              orient: 'vertical',
              onChange: function(ev) {
                var n = amps.slice(); n[i] = +ev.target.value; setAmps(n); setPreset('custom');
              },
              className: 'h-16 accent-cyan-400',
              style: { writingMode: 'vertical-lr', direction: 'rtl' }
            }),
            e('div', { className: 'text-[0.55rem] text-gray-600 mt-0.5' }, (a * 100).toFixed(0) + '%')
          );
        })
      ),
      // Presets + Play
      e('div', { className: 'flex flex-wrap items-center gap-2 justify-center' },
        ['sine', 'sawtooth', 'square'].map(function(p) {
          return e('button', {
            key: p,
            className: 'px-3 py-1 text-xs rounded-full border transition-colors ' +
              (preset === p ? 'border-cyan-400 text-cyan-400' : 'border-gray-700 text-gray-400 hover:border-cyan-500'),
            onClick: function() { applyPreset(p); }
          }, p === 'sine' ? 'Sinuston' : p === 'sawtooth' ? 'Sägezahn' : 'Rechteck');
        }),
        e('button', {
          className: 'px-4 py-1.5 rounded-lg font-semibold text-sm transition-colors ml-2 ' +
            (playing ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'),
          onClick: toggleSound
        }, playing ? '■ Stopp' : '▶ Anhören (A3 = 220 Hz)')
      )
    );
  }
  window.OvertoneVisualizer = OvertoneVisualizer;
})();


// ════════════════════════════════════════════════════════════════
// 3. TriadExplorer — Major/Minor/Dim/Aug chords with sound
// ════════════════════════════════════════════════════════════════
(function() {
  var TRIADS = {
    dur:  { name: 'Dur (Dur)', ratio: '4 : 5 : 6', semis: [0, 4, 7], color: '#22d3ee' },
    moll: { name: 'Moll (Moll)', ratio: '10 : 12 : 15', semis: [0, 3, 7], color: '#a78bfa' },
    dim:  { name: 'Vermindert', ratio: '20 : 24 : 29', semis: [0, 3, 6], color: '#f87171' },
    aug:  { name: 'Übermäßig', ratio: '16 : 20 : 25', semis: [0, 4, 8], color: '#f59e0b' },
  };
  var BASE = 261.63; // C4

  function semiToFreq(semi) { return BASE * Math.pow(2, semi / 12); }

  function TriadExplorer() {
    var s = React.useState;
    var type = s('dur'), setType = type[1]; type = type[0];
    var playing = s(false), setPlaying = playing[1]; playing = playing[0];
    var oscsRef = React.useRef(null);

    var triad = TRIADS[type];
    var freqs = triad.semis.map(semiToFreq);
    var noteNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

    function playChord() {
      var ctx = getAudioCtx();
      if (oscsRef.current) oscsRef.current.forEach(function(o) { try { o.stop(); } catch(e){} });
      var g = ctx.createGain(); g.gain.value = 0.12; g.connect(ctx.destination);
      var oscs = freqs.map(function(f) {
        var o = ctx.createOscillator(); o.frequency.value = f; o.type = 'triangle'; o.connect(g); o.start();
        // Auto-stop after 2s
        o.stop(ctx.currentTime + 2);
        return o;
      });
      oscsRef.current = oscs;
      setPlaying(true);
      setTimeout(function() { setPlaying(false); }, 2000);
    }

    React.useEffect(function() {
      return function() {
        if (oscsRef.current) oscsRef.current.forEach(function(o) { try { o.stop(); } catch(e){} });
      };
    }, []);

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' },
        'Dreiklang-Explorer'),
      // Buttons
      e('div', { className: 'flex flex-wrap gap-2 justify-center mb-4' },
        Object.keys(TRIADS).map(function(k) {
          var t = TRIADS[k];
          return e('button', {
            key: k,
            className: 'px-4 py-2 rounded-lg text-sm font-medium border transition-colors ' +
              (type === k ? 'border-current text-white' : 'border-gray-700 text-gray-400 hover:text-white'),
            style: type === k ? { borderColor: t.color, color: t.color } : {},
            onClick: function() { setType(k); }
          }, t.name);
        })
      ),
      // Visualization: frequency bars
      e('div', { className: 'flex items-end justify-center gap-6 h-32 mb-3' },
        freqs.map(function(f, i) {
          var h = 30 + (f - 200) / 5;
          return e('div', { key: i, className: 'text-center' },
            e('div', {
              className: 'w-12 rounded-t-lg transition-all duration-300',
              style: { height: Math.min(h, 100) + 'px', backgroundColor: triad.color, opacity: 0.7 + i * 0.1 }
            }),
            e('p', { className: 'text-xs text-gray-300 mt-1 font-mono' }, Math.round(f) + ' Hz'),
            e('p', { className: 'text-xs font-medium', style: { color: triad.color } },
              noteNames[triad.semis[i] % 12])
          );
        })
      ),
      // Ratio
      e('p', { className: 'text-center text-sm text-gray-400 mb-3' },
        'Frequenzverhältnis: ',
        e('span', { className: 'font-mono font-semibold', style: { color: triad.color } }, triad.ratio)
      ),
      // Play
      e('button', {
        className: 'w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ' +
          (playing ? 'bg-gray-700 text-gray-400' : 'bg-cyan-600 hover:bg-cyan-500 text-white'),
        onClick: playChord,
        disabled: playing
      }, playing ? '♪ klingt...' : '▶ Dreiklang abspielen')
    );
  }
  window.TriadExplorer = TriadExplorer;
})();


// ════════════════════════════════════════════════════════════════
// 4. TuningCompare — Piano in 3 tuning systems
// ════════════════════════════════════════════════════════════════
(function() {
  var NOTES = ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
  var BLACK = [1,3,6,8,10]; // indices of black keys

  // Cent values relative to C for each tuning system
  var EQUAL =       [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
  var JUST =        [0, 112, 204, 316, 386, 498, 590, 702, 814, 884, 1018, 1088];
  var PYTHAGOREAN = [0, 114, 204, 294, 408, 498, 612, 702, 816, 906,  996, 1110];

  var TUNINGS = {
    equal:       { name: 'Gleichstufig', cents: EQUAL, color: '#22d3ee' },
    just:        { name: 'Rein (Just)', cents: JUST, color: '#34d399' },
    pythagorean: { name: 'Pythagoreisch', cents: PYTHAGOREAN, color: '#f59e0b' },
  };

  function centsToFreq(cents) { return 261.63 * Math.pow(2, cents / 1200); }

  function TuningCompare() {
    var s = React.useState;
    var tuning = s('equal'), setTuning = tuning[1]; tuning = tuning[0];
    var active = s(-1), setActive = active[1]; active = active[0];

    function playNote(idx) {
      var ctx = getAudioCtx();
      var cents = TUNINGS[tuning].cents[idx];
      var freq = centsToFreq(cents);
      var g = ctx.createGain(); g.gain.value = 0.2; g.connect(ctx.destination);
      g.gain.setTargetAtTime(0, ctx.currentTime + 0.8, 0.2);
      var o = ctx.createOscillator(); o.frequency.value = freq; o.type = 'triangle';
      o.connect(g); o.start(); o.stop(ctx.currentTime + 1.5);
      setActive(idx);
      setTimeout(function() { setActive(-1); }, 800);
    }

    var t = TUNINGS[tuning];
    var diffs = t.cents.map(function(c, i) { return c - EQUAL[i]; });

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent' },
        'Stimmungssysteme vergleichen'),
      // Tuning selector
      e('div', { className: 'flex flex-wrap gap-2 justify-center mb-4' },
        Object.keys(TUNINGS).map(function(k) {
          return e('button', {
            key: k,
            className: 'px-3 py-1.5 text-xs rounded-full border transition-colors ' +
              (tuning === k ? 'text-white' : 'border-gray-700 text-gray-400 hover:text-white'),
            style: tuning === k ? { borderColor: TUNINGS[k].color, color: TUNINGS[k].color } : {},
            onClick: function() { setTuning(k); }
          }, TUNINGS[k].name);
        })
      ),
      // Piano keys
      e('div', { className: 'flex justify-center gap-0.5 mb-2' },
        NOTES.map(function(n, i) {
          var isBlack = BLACK.indexOf(i) >= 0;
          var diff = diffs[i];
          var diffStr = diff === 0 ? '±0' : (diff > 0 ? '+' : '') + diff.toFixed(0);
          return e('button', {
            key: i,
            className: 'flex flex-col items-center justify-end rounded-b-lg transition-all cursor-pointer ' +
              (isBlack
                ? 'w-7 sm:w-9 h-24 bg-gray-800 hover:bg-gray-700 border border-gray-700'
                : 'w-9 sm:w-11 h-32 bg-gray-200 hover:bg-white border border-gray-300'),
            style: active === i ? { backgroundColor: t.color, transform: 'scale(1.05)' } : {},
            onClick: function() { playNote(i); }
          },
            e('span', {
              className: 'text-[0.55rem] font-mono mb-0.5 ' +
                (Math.abs(diff) > 10 ? 'text-rose-500 font-bold' : (isBlack ? 'text-gray-500' : 'text-gray-500'))
            }, diffStr + '¢'),
            e('span', { className: 'text-[0.6rem] mb-1 ' + (isBlack ? 'text-gray-400' : 'text-gray-700') }, n)
          );
        })
      ),
      // Info
      e('p', { className: 'text-center text-xs text-gray-500 mt-2' },
        tuning === 'equal' ? 'Gleichstufig: alle Halbtöne exakt gleich (100 Cent). Keine reinen Intervalle außer der Oktave.' :
        tuning === 'just' ? 'Reine Stimmung: Terzen perfekt (386¢), aber manche Quinten „heulen". Große Terz: 14 Cent weniger als gleichstufig!' :
        'Pythagoreisch: Quinten perfekt (702¢), aber Terzen zu groß (408¢ statt 386¢). Gut für Melodie, schlecht für Akkorde.'
      )
    );
  }
  window.TuningCompare = TuningCompare;
})();


// ════════════════════════════════════════════════════════════════
// 5. CochleaMapper — Frequency → position on basilar membrane
// ════════════════════════════════════════════════════════════════
(function() {
  // Greenwood function: position (mm from base) → frequency
  // f = 165.4 * (10^(2.1 * (1 - x/35)) - 0.88)
  // Inverse: x = 35 * (1 - log10((f/165.4) + 0.88) / 2.1)
  function freqToPos(f) {
    return 35 * (1 - Math.log10((f / 165.4) + 0.88) / 2.1);
  }

  function CochleaMapper() {
    var s = React.useState;
    var freq = s(1000), setFreq = freq[1]; freq = freq[0];
    var playing = s(false), setPlaying = playing[1]; playing = playing[0];
    var oscRef = React.useRef(null);

    var pos = freqToPos(freq);
    var posFrac = pos / 35; // 0 = base (high freq), 1 = apex (low freq)

    function toggleSound() {
      var ctx = getAudioCtx();
      if (playing && oscRef.current) {
        try { oscRef.current[0].stop(); } catch(e) {}
        oscRef.current = null; setPlaying(false);
      } else {
        var g = ctx.createGain(); g.gain.value = 0.15; g.connect(ctx.destination);
        var o = ctx.createOscillator(); o.frequency.value = freq; o.type = 'sine'; o.connect(g); o.start();
        oscRef.current = [o, g]; setPlaying(true);
      }
    }

    React.useEffect(function() {
      if (oscRef.current && oscRef.current[0]) oscRef.current[0].frequency.value = freq;
    }, [freq]);

    React.useEffect(function() {
      return function() { if (oscRef.current) try { oscRef.current[0].stop(); } catch(e) {} };
    }, []);

    // SVG cochlea spiral
    var W = 300, H = 250;
    var cx = 150, cy = 130;
    // Simple spiral path
    var spiralPts = [];
    for (var i = 0; i <= 200; i++) {
      var t = i / 200;
      var angle = t * 2.8 * Math.PI + Math.PI;
      var r = 30 + t * 70;
      spiralPts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
    }
    var spiralPath = spiralPts.map(function(p, i) {
      return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }).join(' ');

    // Highlight position
    var hlIdx = Math.round(posFrac * 200);
    hlIdx = Math.max(0, Math.min(199, hlIdx));
    var hlPt = spiralPts[hlIdx];

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent' },
        'Cochlea-Mapper'),
      e('div', { className: 'flex flex-col sm:flex-row gap-4 items-center' },
        // SVG
        e('svg', { viewBox: '0 0 '+W+' '+H, className: 'w-full sm:w-1/2 bg-gray-900 rounded-xl border border-gray-800', style: { maxWidth: '300px' } },
          e('path', { d: spiralPath, fill: 'none', stroke: '#334155', strokeWidth: 3 }),
          e('path', { d: spiralPath, fill: 'none', stroke: '#22d3ee', strokeWidth: 3, opacity: 0.4 }),
          // Position marker
          e('circle', { cx: hlPt[0], cy: hlPt[1], r: 8, fill: '#22d3ee', opacity: 0.8 }),
          e('circle', { cx: hlPt[0], cy: hlPt[1], r: 14, fill: 'none', stroke: '#22d3ee', strokeWidth: 1, opacity: 0.4 }),
          // Labels
          e('text', { x: cx - 10, y: cy - 10, fill: '#94a3b8', fontSize: 10, textAnchor: 'middle' }, 'Apex'),
          e('text', { x: spiralPts[0][0], y: spiralPts[0][1] - 10, fill: '#94a3b8', fontSize: 10, textAnchor: 'middle' }, 'Basis')
        ),
        // Controls
        e('div', { className: 'flex-1 w-full space-y-3' },
          e('label', { className: 'text-xs text-gray-400 block' }, 'Frequenz: ' + freq.toLocaleString('de-DE') + ' Hz'),
          e('input', { type: 'range', min: 20, max: 20000, step: 1, value: freq,
            onChange: function(ev) { setFreq(+ev.target.value); },
            className: 'w-full accent-cyan-400' }),
          e('div', { className: 'flex justify-between text-[0.6rem] text-gray-600' },
            e('span', null, '20 Hz'), e('span', null, '20.000 Hz')),
          e('p', { className: 'text-sm text-gray-300' },
            'Position: ', e('span', { className: 'font-mono text-cyan-400' }, pos.toFixed(1) + ' mm'),
            ' vom Eingang (Basis)'),
          e('p', { className: 'text-xs text-gray-500' },
            freq < 300 ? 'Tiefe Töne → Spitze (Apex) der Cochlea' :
            freq > 4000 ? 'Hohe Töne → Basis (Eingang) der Cochlea' :
            'Mittlere Töne → Mitte der Basilarmembran'),
          e('button', {
            className: 'w-full py-2 rounded-lg font-semibold text-sm transition-colors ' +
              (playing ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'),
            onClick: toggleSound
          }, playing ? '■ Stopp' : '▶ Ton abspielen')
        )
      )
    );
  }
  window.CochleaMapper = CochleaMapper;
})();


// ════════════════════════════════════════════════════════════════
// 6. ChladniSimulator — 2D vibration patterns
// ════════════════════════════════════════════════════════════════
(function() {
  var SIZE = 200;

  function ChladniSimulator() {
    var s = React.useState;
    var m = s(3), setM = m[1]; m = m[0];
    var n = s(5), setN = n[1]; n = n[0];

    // Compute Chladni pattern: cos(m*pi*x)*cos(n*pi*y) - cos(n*pi*x)*cos(m*pi*y) = 0
    var pixels = React.useMemo(function() {
      var data = [];
      for (var py = 0; py < SIZE; py++) {
        for (var px = 0; px < SIZE; px++) {
          var x = px / SIZE, y = py / SIZE;
          var val = Math.cos(m * Math.PI * x) * Math.cos(n * Math.PI * y)
                  - Math.cos(n * Math.PI * x) * Math.cos(m * Math.PI * y);
          data.push(Math.abs(val));
        }
      }
      return data;
    }, [m, n]);

    // Render as dots (SVG circles for nodal lines where val ≈ 0)
    var dots = React.useMemo(function() {
      var d = [];
      var step = 3;
      for (var py = 0; py < SIZE; py += step) {
        for (var px = 0; px < SIZE; px += step) {
          var val = pixels[py * SIZE + px];
          if (val < 0.08) {
            d.push({ x: px, y: py, o: 1 - val / 0.08 });
          }
        }
      }
      return d;
    }, [pixels]);

    var freq = Math.round(Math.sqrt(m * m + n * n) * 50);

    var e = React.createElement;
    return e('div', { className: 'bg-gray-950 p-3 sm:p-4 rounded-2xl max-w-4xl mx-auto' },
      e('h3', { className: 'text-base font-bold text-center mb-3 bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent' },
        'Chladni-Figuren'),
      e('div', { className: 'flex flex-col sm:flex-row gap-4 items-center' },
        // SVG pattern
        e('svg', { viewBox: '0 0 '+SIZE+' '+SIZE,
          className: 'w-full sm:w-1/2 bg-gray-900 rounded-xl border border-gray-800',
          style: { maxWidth: '250px' } },
          e('rect', { x: 0, y: 0, width: SIZE, height: SIZE, fill: '#0f172a' }),
          dots.map(function(d, i) {
            return e('circle', { key: i, cx: d.x, cy: d.y, r: 1.2, fill: '#f59e0b', opacity: d.o * 0.9 });
          })
        ),
        // Controls
        e('div', { className: 'flex-1 w-full space-y-3' },
          e('div', null,
            e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'm = ' + m),
            e('input', { type: 'range', min: 1, max: 12, step: 1, value: m,
              onChange: function(ev) { setM(+ev.target.value); },
              className: 'w-full accent-amber-400' })
          ),
          e('div', null,
            e('label', { className: 'text-xs text-gray-400 block mb-1' }, 'n = ' + n),
            e('input', { type: 'range', min: 1, max: 12, step: 1, value: n,
              onChange: function(ev) { setN(+ev.target.value); },
              className: 'w-full accent-cyan-400' })
          ),
          e('p', { className: 'text-sm text-gray-300' },
            'Modus: (' + m + ', ' + n + ') → ca. ' + freq + ' Hz'),
          e('p', { className: 'text-xs text-gray-500' },
            'Die hellen Linien zeigen, wo die Platte nicht schwingt (Knotenlinien). Sand sammelt sich dort — genau wie bei Chladnis Experimenten von 1802.')
        )
      )
    );
  }
  window.ChladniSimulator = ChladniSimulator;
})();
