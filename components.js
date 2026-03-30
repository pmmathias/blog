// QuantenBlog Components - wrapped in IIFEs to avoid name collisions

// === DoubleSlitExplorer ===
(function() {
const SR = 40, WL = 170, SC = 365, CY = 165, SVG_H = 330;

function dst(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

 function DoubleSlitExplorer() {
  const [gap, setGap] = React.useState(60);
  const [wl, setWl] = React.useState(35);
  const [detY, setDetY] = React.useState(CY);
  const [meas, setMeas] = React.useState(false);
  const [drag, setDrag] = React.useState(false);
  const [partMode, setPartMode] = React.useState(false);
  const [parts, setParts] = React.useState([]);
  const [showHow, setShowHow] = React.useState(false);

  const s1 = CY - gap / 2;
  const s2 = CY + gap / 2;
  const k = (2 * Math.PI) / wl;

  const pl1 = dst(SR, CY, WL, s1) + dst(WL, s1, SC, detY);
  const pl2 = dst(SR, CY, WL, s2) + dst(WL, s2, SC, detY);
  const a1 = { x: Math.cos(k * pl1), y: Math.sin(k * pl1) };
  const a2 = { x: Math.cos(k * pl2), y: Math.sin(k * pl2) };
  const aS = { x: a1.x + a2.x, y: a1.y + a2.y };
  const inten = (aS.x ** 2 + aS.y ** 2) / 4;

  const calcI = React.useCallback((y) => {
    const d1 = dst(SR, CY, WL, s1) + dst(WL, s1, SC, y);
    const d2 = dst(SR, CY, WL, s2) + dst(WL, s2, SC, y);
    if (meas) {
      return (Math.exp(-((y - s1) ** 2) / 2200) + Math.exp(-((y - s2) ** 2) / 2200)) / 2;
    }
    const env = Math.exp(-((y - CY) ** 2) / 16000);
    return env * Math.cos((k * (d2 - d1)) / 2) ** 2;
  }, [s1, s2, k, meas]);

  const pattern = React.useMemo(() => {
    const pts = [];
    for (let y = 20; y <= SVG_H - 20; y += 1.5) pts.push({ y, I: calcI(y) });
    return pts;
  }, [calcI]);

  React.useEffect(() => {
    if (!partMode) return;
    const iv = setInterval(() => {
      for (let a = 0; a < 30; a++) {
        const y = 22 + Math.random() * (SVG_H - 44);
        if (Math.random() < calcI(y)) {
          setParts(p => [...p.slice(-800), { y, x: SC + 2 + Math.random() * 15, id: Date.now() + Math.random() }]);
          break;
        }
      }
    }, 35);
    return () => clearInterval(iv);
  }, [partMode, calcI]);

  React.useEffect(() => { setParts([]); }, [meas, gap, wl]);

  const onPtr = (e) => {
    if (!drag) return;
    const svg = e.currentTarget;
    const r = svg.getBoundingClientRect();
    setDetY(Math.max(28, Math.min(SVG_H - 28, ((e.clientY - r.top) / r.height) * SVG_H)));
  };

  const R = 34, sR = R * 0.47;

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto"      ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent"          ,}, "Der Doppelspalt – Interaktiv"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-4"   ,}, "Verschiebe den gelben Punkt am Schirm · Verändere die Regler · Schalte den Detektor ein"

      )

      /* ─── MAIN SVG ─── */
      , React.createElement('svg', { viewBox: `0 0 430 ${SVG_H}`,
        className: "w-full bg-gray-900 rounded-xl border border-gray-800 touch-none select-none"      ,
        onPointerMove: onPtr, onPointerUp: () => setDrag(false), onPointerLeave: () => setDrag(false),}

        , React.createElement('text', { x: SR, y: 14, textAnchor: "middle", fill: "#64748b", fontSize: 8.5,}, "Quelle")
        , React.createElement('text', { x: WL, y: 14, textAnchor: "middle", fill: "#64748b", fontSize: 8.5,}, "Wand")
        , React.createElement('text', { x: SC + 8, y: 14, textAnchor: "middle", fill: "#64748b", fontSize: 8.5,}, "Schirm")

        /* Pattern glow */
        , !partMode && pattern.map((p, i) => (
          React.createElement('rect', { key: i, x: SC, y: p.y - 0.75, width: 18, height: 1.8,
            fill: meas ? '#f59e0b' : '#22d3ee', opacity: p.I * 0.85 + 0.03,} )
        ))

        /* Particles */
        , partMode && parts.map((p) => (
          React.createElement('circle', { key: p.id, cx: p.x, cy: p.y, r: 1.3,
            fill: meas ? '#fbbf24' : '#67e8f9', opacity: 0.85,} )
        ))

        /* Screen edge */
        , React.createElement('line', { x1: SC - 1, y1: 20, x2: SC - 1, y2: SVG_H - 20, stroke: "#475569", strokeWidth: 1,} )

        /* Wall segments */
        , React.createElement('line', { x1: WL, y1: 20, x2: WL, y2: s1 - 9, stroke: "#94a3b8", strokeWidth: 3,} )
        , React.createElement('line', { x1: WL, y1: s1 + 9, x2: WL, y2: s2 - 9, stroke: "#94a3b8", strokeWidth: 3,} )
        , React.createElement('line', { x1: WL, y1: s2 + 9, x2: WL, y2: SVG_H - 20, stroke: "#94a3b8", strokeWidth: 3,} )

        /* Slit openings */
        , React.createElement('line', { x1: WL, y1: s1 - 9, x2: WL, y2: s1 + 9, stroke: "#60a5fa", strokeWidth: 3.5, opacity: 0.7,} )
        , React.createElement('line', { x1: WL, y1: s2 - 9, x2: WL, y2: s2 + 9, stroke: "#a78bfa", strokeWidth: 3.5, opacity: 0.7,} )
        , React.createElement('text', { x: WL + 14, y: s1 + 3, fill: "#60a5fa", fontSize: 7.5, opacity: 0.8,}, "Spalt 1" )
        , React.createElement('text', { x: WL + 14, y: s2 + 3, fill: "#a78bfa", fontSize: 7.5, opacity: 0.8,}, "Spalt 2" )

        /* Source → slits (faint) */
        , React.createElement('line', { x1: SR, y1: CY, x2: WL, y2: s1, stroke: "#60a5fa", strokeWidth: 0.8, opacity: 0.2, strokeDasharray: "4,3",} )
        , React.createElement('line', { x1: SR, y1: CY, x2: WL, y2: s2, stroke: "#a78bfa", strokeWidth: 0.8, opacity: 0.2, strokeDasharray: "4,3",} )

        /* Slits → detection point */
        , React.createElement('line', { x1: WL, y1: s1, x2: SC - 1, y2: detY, stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.55,} )
        , React.createElement('line', { x1: WL, y1: s2, x2: SC - 1, y2: detY, stroke: "#a78bfa", strokeWidth: 1.5, opacity: 0.55,} )

        /* Path labels */
        , React.createElement('text', { x: (WL + SC) / 2 - 22, y: (s1 + detY) / 2 - 7, fill: "#60a5fa", fontSize: 7, opacity: 0.65,}, "Weg 1" )
        , React.createElement('text', { x: (WL + SC) / 2 + 10, y: (s2 + detY) / 2 + 11, fill: "#a78bfa", fontSize: 7, opacity: 0.65,}, "Weg 2" )

        /* Source dot */
        , React.createElement('circle', { cx: SR, cy: CY, r: 6, fill: "#f59e0b", stroke: "#fbbf24", strokeWidth: 1.5,} )

        /* Detector eyes */
        , meas && React.createElement(React.Fragment, null
          , React.createElement('circle', { cx: WL, cy: s1, r: 12, fill: "none", stroke: "#ef4444", strokeWidth: 1.5, strokeDasharray: "3,2",} )
          , React.createElement('circle', { cx: WL, cy: s2, r: 12, fill: "none", stroke: "#ef4444", strokeWidth: 1.5, strokeDasharray: "3,2",} )
          , React.createElement('text', { x: WL, y: s1 - 16, textAnchor: "middle", fill: "#ef4444", fontSize: 11,}, "👁")
          , React.createElement('text', { x: WL, y: s2 - 16, textAnchor: "middle", fill: "#ef4444", fontSize: 11,}, "👁")
        )

        /* Draggable detection point */
        , React.createElement('line', { x1: SC - 8, y1: detY, x2: SC + 19, y2: detY, stroke: "#f59e0b", strokeWidth: 0.5, opacity: 0.3, strokeDasharray: "2,2",} )
        , React.createElement('circle', { cx: SC - 1, cy: detY, r: 8, fill: "#f59e0b", fillOpacity: 0.15, stroke: "#fbbf24", strokeWidth: 2,
          className: "cursor-grab", onPointerDown: () => setDrag(true),} )
        , React.createElement('circle', { cx: SC - 1, cy: detY, r: 3, fill: "#fbbf24", onPointerDown: () => setDrag(true), className: "cursor-grab",} )
      )

      /* ─── PHASOR SECTION ─── */
      , React.createElement('div', { className: "mt-4",}
        , React.createElement('div', { className: "text-xs text-center font-medium mb-2"   , style: { color: meas ? '#f87171' : '#6ee7b7' },}
          , meas
            ? '🔴 Detektor AN → Welcher Spalt ist bekannt → Pfeile werden NICHT addiert → Keine Interferenz'
            : '🟢 Beide Wege ununterscheidbar → Pfeile addieren → Interferenz!'
        )

        , React.createElement('div', { className: "flex flex-wrap justify-center items-end gap-2 sm:gap-3"     ,}
          /* Arrow 1 */
          , React.createElement('div', { className: "flex flex-col items-center"  ,}
            , React.createElement('div', { className: "text-xs text-blue-400 mb-1"  ,}, "Pfeil 1" )
            , React.createElement('svg', { viewBox: "-42 -42 84 84"   , className: "w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-lg border border-gray-800"       ,}
              , React.createElement('circle', { cx: 0, cy: 0, r: R, fill: "none", stroke: "#1e293b", strokeWidth: 0.5,} )
              , React.createElement('line', { x1: -R, y1: 0, x2: R, y2: 0, stroke: "#1e293b", strokeWidth: 0.3,} )
              , React.createElement('line', { x1: 0, y1: -R, x2: 0, y2: R, stroke: "#1e293b", strokeWidth: 0.3,} )
              , React.createElement('line', { x1: 0, y1: 0, x2: R * 0.9 * a1.x, y2: R * 0.9 * a1.y,
                stroke: "#60a5fa", strokeWidth: 2.5, strokeLinecap: "round",} )
              , React.createElement('circle', { cx: R * 0.9 * a1.x, cy: R * 0.9 * a1.y, r: 2.5, fill: "#93c5fd",} )
            )
          )

          , React.createElement('span', { className: "text-lg text-gray-600 pb-5 font-bold"   ,}, meas ? '  ' : '+')

          /* Arrow 2 */
          , React.createElement('div', { className: "flex flex-col items-center"  ,}
            , React.createElement('div', { className: "text-xs text-purple-400 mb-1"  ,}, "Pfeil 2" )
            , React.createElement('svg', { viewBox: "-42 -42 84 84"   , className: "w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-lg border border-gray-800"       ,}
              , React.createElement('circle', { cx: 0, cy: 0, r: R, fill: "none", stroke: "#1e293b", strokeWidth: 0.5,} )
              , React.createElement('line', { x1: -R, y1: 0, x2: R, y2: 0, stroke: "#1e293b", strokeWidth: 0.3,} )
              , React.createElement('line', { x1: 0, y1: -R, x2: 0, y2: R, stroke: "#1e293b", strokeWidth: 0.3,} )
              , React.createElement('line', { x1: 0, y1: 0, x2: R * 0.9 * a2.x, y2: R * 0.9 * a2.y,
                stroke: "#a78bfa", strokeWidth: 2.5, strokeLinecap: "round",} )
              , React.createElement('circle', { cx: R * 0.9 * a2.x, cy: R * 0.9 * a2.y, r: 2.5, fill: "#c4b5fd",} )
            )
          )

          , React.createElement('span', { className: "text-lg text-gray-600 pb-5 font-bold"   ,}, "=")

          /* Sum */
          , React.createElement('div', { className: "flex flex-col items-center"  ,}
            , React.createElement('div', { className: "text-xs mb-1" , style: { color: meas ? '#ef4444' : '#fbbf24' },}
              , meas ? 'Keine Addition' : 'Ergebnis'
            )
            , React.createElement('svg', { viewBox: "-42 -42 84 84"   , className: "w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-lg border border-gray-800"       ,}
              , React.createElement('circle', { cx: 0, cy: 0, r: R, fill: "none", stroke: "#1e293b", strokeWidth: 0.5,} )
              , React.createElement('line', { x1: -R, y1: 0, x2: R, y2: 0, stroke: "#1e293b", strokeWidth: 0.3,} )
              , React.createElement('line', { x1: 0, y1: -R, x2: 0, y2: R, stroke: "#1e293b", strokeWidth: 0.3,} )
              , !meas ? (React.createElement(React.Fragment, null
                /* Tip-to-tail: arrow1 from origin */
                , React.createElement('line', { x1: 0, y1: 0, x2: sR * a1.x, y2: sR * a1.y,
                  stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.45, strokeDasharray: "2,1.5",} )
                /* Arrow2 from tip of arrow1 */
                , React.createElement('line', { x1: sR * a1.x, y1: sR * a1.y, x2: sR * aS.x, y2: sR * aS.y,
                  stroke: "#a78bfa", strokeWidth: 1.5, opacity: 0.45, strokeDasharray: "2,1.5",} )
                /* Small dots at joints */
                , React.createElement('circle', { cx: sR * a1.x, cy: sR * a1.y, r: 1.5, fill: "#94a3b8", opacity: 0.5,} )
                /* Sum arrow */
                , React.createElement('line', { x1: 0, y1: 0, x2: sR * aS.x, y2: sR * aS.y,
                  stroke: "#f59e0b", strokeWidth: 3, strokeLinecap: "round",} )
                , React.createElement('circle', { cx: sR * aS.x, cy: sR * aS.y, r: 2.5, fill: "#fbbf24",} )
              )) : (React.createElement(React.Fragment, null
                , React.createElement('line', { x1: -10, y1: -10, x2: 10, y2: 10, stroke: "#ef4444", strokeWidth: 2.5, strokeLinecap: "round",} )
                , React.createElement('line', { x1: 10, y1: -10, x2: -10, y2: 10, stroke: "#ef4444", strokeWidth: 2.5, strokeLinecap: "round",} )
              ))
            )
            , React.createElement('div', { className: "text-xs mt-1 font-mono font-bold"   , style: { color: meas ? '#ef4444' : '#fbbf24' },}
              , meas ? 'P = P₁ + P₂' : `|Pfeil|² = ${inten.toFixed(2)}`
            )
          )

          /* Intensity bar */
          , !meas && (
            React.createElement('div', { className: "flex flex-col items-center pb-5 ml-1"    ,}
              , React.createElement('div', { className: "text-xs text-gray-500 mb-1"  ,}, "Helligkeit")
              , React.createElement('div', { className: "w-4 h-16 sm:h-20 bg-gray-800 rounded overflow-hidden border border-gray-700 relative"        ,}
                , React.createElement('div', { className: "absolute bottom-0 left-0 right-0 rounded-b transition-all duration-150"      ,
                  style: { height: `${inten * 100}%`, backgroundColor: '#22d3ee', opacity: 0.8 + inten * 0.2 },} )
              )
            )
          )
        )
      )

      /* ─── CONTROLS ─── */
      , React.createElement('div', { className: "mt-4 bg-gray-900 rounded-xl p-4 border border-gray-800 space-y-3"      ,}
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-gray-400 flex justify-between"   ,}
            , React.createElement('span', null, "Spaltabstand")
            , React.createElement('span', { className: "text-gray-600",}, '◻'.repeat(Math.round(gap / 20)))
          )
          , React.createElement('input', { type: "range", min: 20, max: 140, value: gap,
            onChange: e => setGap(+e.target.value), className: "w-full accent-blue-500 mt-0.5"  ,} )
        )
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-gray-400 flex justify-between"   ,}
            , React.createElement('span', null, "Wellenlänge")
            , React.createElement('span', { className: "text-gray-600",}, '〰'.repeat(Math.max(1, Math.round(wl / 20))))
          )
          , React.createElement('input', { type: "range", min: 12, max: 80, value: wl,
            onChange: e => setWl(+e.target.value), className: "w-full accent-purple-500 mt-0.5"  ,} )
        )
        , React.createElement('div', { className: "flex gap-2" ,}
          , React.createElement('button', { onClick: () => { setMeas(!meas); },
            className: `flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${meas
              ? 'bg-red-950 text-red-300 border border-red-800 hover:bg-red-900'
              : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'}`,}
            , meas ? '👁 Detektor AN' : '🔬 Detektor einschalten'
          )
          , React.createElement('button', { onClick: () => { setPartMode(!partMode); setParts([]); },
            className: `flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${partMode
              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800 hover:bg-cyan-900'
              : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'}`,}
            , partMode ? '⚡ Elektronen AN' : '⚡ Einzelne Elektronen'
          )
        )
      )

      /* ─── EXPLANATION ─── */
      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"     ,}
        , React.createElement('button', { onClick: () => setShowHow(!showHow),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center transition-colors"         ,}
          , React.createElement('span', { className: "font-semibold",}
            , !meas && !partMode && '💡 So liest du die Grafik'
            , !meas && partMode && '⚡ Klick. Klick. Klick.'
            , meas && !partMode && '🔴 Warum sind die Streifen weg?'
            , meas && partMode && '🔴 Teilchen ohne Interferenz'
          )
          , React.createElement('span', { className: "text-gray-600",}, showHow ? '▲' : '▼')
        )
        , showHow && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed"    ,}
            , !meas && !partMode && (React.createElement(React.Fragment, null, "Das Elektron fliegt von der gelben "
                    , React.createElement('strong', { className: "text-amber-400",}, "Quelle"), " durch"
              , ' ', React.createElement('strong', { className: "text-blue-400",}, "Spalt 1" ), " und" , ' '
              , React.createElement('strong', { className: "text-purple-400",}, "Spalt 2" ), " zum gelben Messpunkt am Schirm. Jeder Weg erzeugt einen "
                  , React.createElement('strong', null, "Pfeil"), " – einen Zeiger mit Richtung. Die Pfeile werden "
                 , React.createElement('em', null, "Spitze an Ende"  ), " gelegt, und der"   , ' '
              , React.createElement('strong', { className: "text-amber-400",}, "goldene Ergebnispfeil" ), " bestimmt die Wahrscheinlichkeit (seine Länge zum Quadrat)."

              , React.createElement('br', null ), React.createElement('br', null ), "Zeigen beide Pfeile ähnlich → langer Ergebnispfeil → "
                      , React.createElement('strong', { className: "text-cyan-400",}, "heller Streifen" ), ".", ' ', "Zeigen sie entgegengesetzt → kurzer Pfeil → "
                     , React.createElement('strong', null, "dunkler Streifen" ), ". Das ist das ganze Geheimnis der Interferenz!"

              , React.createElement('br', null ), React.createElement('br', null )
              , React.createElement('span', { className: "text-gray-500",}, "→ Verschiebe den gelben Punkt und beobachte, wie sich die Pfeile drehen. → Ändere die Wellenlänge und sieh, wie sich der Streifenabstand ändert."
                        )
            ))
            , !meas && partMode && (React.createElement(React.Fragment, null, "Jetzt siehst du, was im echten Experiment passiert: Elektronen kommen "
                        , React.createElement('em', null, "einzeln"), " an. Jedes „Klick\" ist ein Punkt auf dem Schirm. Die ersten Treffer sehen zufällig aus – aber nach Hunderten, nach Tausenden formt sich das Interferenzmuster."


              , React.createElement('br', null ), React.createElement('br', null ), "Jedes einzelne Elektron ist ein unteilbares Teilchen. Und trotzdem entsteht ein Wellenmuster. Die Pfeile erklären, warum: Sie bestimmen die "

                      , React.createElement('em', null, "Wahrscheinlichkeit"), ", wo jedes einzelne Elektron ankommt."

              , React.createElement('br', null ), React.createElement('br', null )
              , React.createElement('span', { className: "text-gray-500",}, "→ Lass es laufen und beobachte, wie die Streifen langsam entstehen."          )
            ))
            , meas && !partMode && (React.createElement(React.Fragment, null, "Der Detektor stellt fest, durch "
                   , React.createElement('em', null, "welchen"), " Spalt das Elektron geht. Damit gibt es keine zwei ununterscheidbaren Alternativen mehr – und ohne Alternativen werden die Pfeile "

                 , React.createElement('strong', { className: "text-red-400",}, "nicht addiert" ), "."
              , React.createElement('br', null ), React.createElement('br', null ), "Stattdessen berechnet man die Wahrscheinlichkeit für jeden Spalt einzeln und addiert "

                , React.createElement('em', null, "die Wahrscheinlichkeiten" ), " (nicht die Pfeile!). Ergebnis: Zwei langweilige Kleckse, keine Streifen. Die Interferenz ist zerstört."

              , React.createElement('br', null ), React.createElement('br', null )
              , React.createElement('span', { className: "text-gray-500",}, "→ Schalte den Detektor wieder aus – die Streifen kehren sofort zurück!"           )
            ))
            , meas && partMode && (React.createElement(React.Fragment, null, "Elektronen kommen einzeln an, und der Detektor verrät, durch welchen Spalt jedes ging. Die Punkte häufen sich hinter den beiden Spalten – aber es bilden sich "

                           , React.createElement('strong', { className: "text-red-400",}, "keine Streifen" ), "."
              , React.createElement('br', null ), React.createElement('br', null ), "Das ist der dramatische Unterschied: "
                   , React.createElement('em', null, "Wissen"), ", welchen Weg das Teilchen genommen hat, verhindert die Addition der Pfeile. Keine Pfeil-Addition → keine Interferenz."

              , React.createElement('br', null ), React.createElement('br', null )
              , React.createElement('span', { className: "text-gray-500",}, "→ Schalte den Detektor aus und vergleiche das Muster!"        )
            ))
          )
        )
      )
    )
  );
}
window.DoubleSlitExplorer = DoubleSlitExplorer;
})();

// === BellTestExplorer ===
(function() {
const toRad = d => d * Math.PI / 180;
const CW = 380, CH = 195;
const pad = { t: 16, r: 16, b: 28, l: 40 };
const plotW = CW - pad.l - pad.r;
const plotH = CH - pad.t - pad.b;
const xSc = a => pad.l + (a / 180) * plotW;
const ySc = v => pad.t + ((1 - v) / 2) * plotH;

 function BellTestExplorer() {
  const [aA, setAA] = React.useState(0);
  const [bA, setBA] = React.useState(67);
  const [on, setOn] = React.useState(false);
  const [res, setRes] = React.useState([]);
  const [saved, setSaved] = React.useState([]);
  const [info, setInfo] = React.useState(false);
  const [chsh, setChsh] = React.useState(null);
  const [chshOpen, setChshOpen] = React.useState(false);

  const eDiff = React.useMemo(() => {
    let d = Math.abs(aA - bA) % 360;
    return d > 180 ? 360 - d : d;
  }, [aA, bA]);

  const qPred = -Math.cos(toRad(eDiff));

  const gen = React.useCallback(() => {
    const t = toRad(aA - bA);
    const a = Math.random() < 0.5 ? 1 : -1;
    const b = Math.random() < Math.sin(t / 2) ** 2 ? a : -a;
    return { a, b };
  }, [aA, bA]);

  React.useEffect(() => {
    if (!on) return;
    const iv = setInterval(() => {
      setRes(p => {
        const batch = Array.from({ length: 14 }, () => gen());
        return [...p, ...batch];
      });
    }, 55);
    return () => clearInterval(iv);
  }, [on, gen]);

  const corr = res.length > 0 ? res.reduce((s, r) => s + r.a * r.b, 0) / res.length : null;

  const save = () => {
    if (res.length < 30) return;
    setSaved(p => [...p, { angle: eDiff, corr }]);
    setRes([]);
  };

  const runCHSH = () => {
    const cfgs = [[0, 45], [0, 135], [90, 45], [90, 135]];
    const N = 10000;
    const Es = cfgs.map(([a, b]) => {
      let sum = 0;
      const t = toRad(a - b);
      for (let i = 0; i < N; i++) {
        const ao = Math.random() < 0.5 ? 1 : -1;
        sum += ao * (Math.random() < Math.sin(t / 2) ** 2 ? ao : -ao);
      }
      return sum / N;
    });
    setChsh({ Es, S: Math.abs(Es[0] - Es[1] + Es[2] + Es[3]), cfgs });
  };

  const qPath = React.useMemo(() => {
    let d = '';
    for (let a = 0; a <= 180; a++) {
      d += (a === 0 ? 'M' : 'L') + `${xSc(a)},${ySc(-Math.cos(toRad(a)))}`;
    }
    return d;
  }, []);

  const fillPath = React.useMemo(() => {
    let d = `M${xSc(0)},${ySc(-1)} L${xSc(180)},${ySc(1)}`;
    for (let a = 180; a >= 0; a--) {
      d += ` L${xSc(a)},${ySc(-Math.cos(toRad(a)))}`;
    }
    return d + ' Z';
  }, []);

  const cPath = `M${xSc(0)},${ySc(-1)} L${xSc(180)},${ySc(1)}`;
  const last = res.length > 0 ? res[res.length - 1] : null;

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto"      ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-0.5 bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"          ,}, "Bell-Test – Verschränkung live"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-4"   ,}, "Wähle Messwinkel für Alice & Bob · Sammle Daten · Durchbrich die Bell-Grenze"

      )

      /* ─── EXPERIMENT ─── */
      , React.createElement('svg', { viewBox: "0 0 400 185"   , className: "w-full bg-gray-900 rounded-xl border border-gray-800"    ,}
        , React.createElement('text', { x: 75, y: 20, textAnchor: "middle", fill: "#f472b6", fontSize: 10, fontWeight: "bold",}, "Alice")
        , React.createElement('text', { x: 325, y: 20, textAnchor: "middle", fill: "#22d3ee", fontSize: 10, fontWeight: "bold",}, "Bob")
        , React.createElement('text', { x: 200, y: 20, textAnchor: "middle", fill: "#fbbf24", fontSize: 9,}, "Quelle")

        , React.createElement('line', { x1: 185, y1: 88, x2: 108, y2: 88, stroke: "#f472b6", strokeWidth: 0.8, opacity: 0.15, strokeDasharray: "4 3" ,} )
        , React.createElement('line', { x1: 215, y1: 88, x2: 292, y2: 88, stroke: "#22d3ee", strokeWidth: 0.8, opacity: 0.15, strokeDasharray: "4 3" ,} )

        , React.createElement('circle', { cx: 200, cy: 88, r: 18, fill: "#fbbf24", opacity: 0.04,} )
        , React.createElement('circle', { cx: 200, cy: 88, r: 8, fill: "#fbbf24", opacity: 0.1,} )
        , React.createElement('circle', { cx: 200, cy: 88, r: 4, fill: "#fbbf24", opacity: 0.7,} )
        , on && React.createElement('circle', { cx: 200, cy: 88, r: 8, fill: "none", stroke: "#fbbf24", strokeWidth: 1, opacity: 0.4,}
          , React.createElement('animate', { attributeName: "r", from: "5", to: "22", dur: "0.9s", repeatCount: "indefinite",} )
          , React.createElement('animate', { attributeName: "opacity", from: "0.4", to: "0", dur: "0.9s", repeatCount: "indefinite",} )
        )

        /* Alice polarizer */
        , React.createElement('circle', { cx: 75, cy: 88, r: 28, fill: "#f472b6", opacity: 0.03,} )
        , React.createElement('circle', { cx: 75, cy: 88, r: 28, fill: "none", stroke: "#f472b6", strokeWidth: 1.2, opacity: 0.25,} )
        , React.createElement('line', { x1: 75 - 23 * Math.cos(toRad(aA)), y1: 88 - 23 * Math.sin(toRad(aA)),
              x2: 75 + 23 * Math.cos(toRad(aA)), y2: 88 + 23 * Math.sin(toRad(aA)),
              stroke: "#f472b6", strokeWidth: 3, strokeLinecap: "round",} )
        , React.createElement('text', { x: 75, y: 128, textAnchor: "middle", fill: "#94a3b8", fontSize: 8.5,}, aA, "°")

        /* Bob polarizer */
        , React.createElement('circle', { cx: 325, cy: 88, r: 28, fill: "#22d3ee", opacity: 0.03,} )
        , React.createElement('circle', { cx: 325, cy: 88, r: 28, fill: "none", stroke: "#22d3ee", strokeWidth: 1.2, opacity: 0.25,} )
        , React.createElement('line', { x1: 325 - 23 * Math.cos(toRad(bA)), y1: 88 - 23 * Math.sin(toRad(bA)),
              x2: 325 + 23 * Math.cos(toRad(bA)), y2: 88 + 23 * Math.sin(toRad(bA)),
              stroke: "#22d3ee", strokeWidth: 3, strokeLinecap: "round",} )
        , React.createElement('text', { x: 325, y: 128, textAnchor: "middle", fill: "#94a3b8", fontSize: 8.5,}, bA, "°")

        /* Flying particles */
        , on && React.createElement(React.Fragment, null
          , React.createElement('circle', { r: 3.5, fill: "#f472b6", opacity: 0.75,}
            , React.createElement('animate', { attributeName: "cx", from: "196", to: "103", dur: "0.5s", repeatCount: "indefinite",} )
            , React.createElement('animate', { attributeName: "cy", values: "88;86;88;90;88", dur: "0.5s", repeatCount: "indefinite",} )
          )
          , React.createElement('circle', { r: 3.5, fill: "#22d3ee", opacity: 0.75,}
            , React.createElement('animate', { attributeName: "cx", from: "204", to: "297", dur: "0.5s", repeatCount: "indefinite",} )
            , React.createElement('animate', { attributeName: "cy", values: "88;90;88;86;88", dur: "0.5s", repeatCount: "indefinite",} )
          )
        )

        /* Results */
        , last && React.createElement(React.Fragment, null
          , React.createElement('text', { x: 75, y: 153, textAnchor: "middle", fontSize: 16, fontWeight: "bold",
                fill: last.a > 0 ? '#f472b6' : '#818cf8',}, last.a > 0 ? '+1' : '−1')
          , React.createElement('text', { x: 325, y: 153, textAnchor: "middle", fontSize: 16, fontWeight: "bold",
                fill: last.b > 0 ? '#22d3ee' : '#a78bfa',}, last.b > 0 ? '+1' : '−1')
          , React.createElement('text', { x: 200, y: 153, textAnchor: "middle", fontSize: 9.5,
                fill: last.a * last.b > 0 ? '#4ade80' : '#fb923c',}
            , last.a * last.b > 0 ? '= gleich' : '≠ verschieden'
          )
        )
        , React.createElement('text', { x: 200, y: 175, textAnchor: "middle", fill: "#475569", fontSize: 8,}, "Δθ = "  , eDiff.toFixed(1), "°")
      )

      /* ─── CONTROLS ─── */
      , React.createElement('div', { className: "mt-4 bg-gray-900 rounded-xl p-4 border border-gray-800 space-y-3"      ,}
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-rose-400 flex justify-between"   ,}
            , React.createElement('span', null, "Alice's Messwinkel" ), React.createElement('span', { className: "font-mono",}, aA, "°")
          )
          , React.createElement('input', { type: "range", min: 0, max: 180, value: aA,
            onChange: e => { setAA(+e.target.value); setRes([]); },
            className: "w-full accent-rose-500 mt-0.5"  ,} )
        )
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-cyan-400 flex justify-between"   ,}
            , React.createElement('span', null, "Bob's Messwinkel" ), React.createElement('span', { className: "font-mono",}, bA, "°")
          )
          , React.createElement('input', { type: "range", min: 0, max: 180, value: bA,
            onChange: e => { setBA(+e.target.value); setRes([]); },
            className: "w-full accent-cyan-500 mt-0.5"  ,} )
        )

        , React.createElement('div', { className: "flex gap-2" ,}
          , React.createElement('button', { onClick: () => setOn(!on),
            className: `flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all border ${
              on ? 'bg-amber-950 text-amber-300 border-amber-800 hover:bg-amber-900'
                 : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'}`,}
            , on ? '⏸ Pause' : '▶ Messen'
          )
          , React.createElement('button', { onClick: save,
            className: `flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all border ${
              res.length >= 30
                ? 'bg-amber-950 text-amber-300 border-amber-800 hover:bg-amber-900'
                : 'bg-gray-800 text-gray-600 border-gray-700 opacity-50'}`,
            disabled: res.length < 30,}, "📌 Punkt speichern"

          )
          , React.createElement('button', { onClick: () => { setRes([]); setOn(false); },
            className: "px-4 py-2.5 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-all"          ,}, "↺"

          )
        )

        , res.length > 0 && (
          React.createElement('div', { className: "flex justify-between text-xs pt-0.5"   ,}
            , React.createElement('span', { className: "text-gray-500",}, "Paare: " , React.createElement('span', { className: "text-white font-mono" ,}, res.length))
            , React.createElement('span', { className: "text-gray-500",}, "Gemessen: " , React.createElement('span', { className: "text-amber-400 font-mono font-bold"  ,}, corr?.toFixed?.(3)))
            , React.createElement('span', { className: "text-gray-500",}, "Vorhersage: " , React.createElement('span', { className: "text-emerald-400 font-mono" ,}, qPred.toFixed(3)))
          )
        )
      )

      /* ─── CHART ─── */
      , React.createElement('div', { className: "mt-4 bg-gray-900 rounded-xl p-3 sm:p-4 border border-gray-800"      ,}
        , React.createElement('div', { className: "text-xs text-gray-400 mb-2 font-semibold text-center"    ,}, "Korrelation E(Δθ) – Quantenkurve vs. klassische Grenze"

        )
        , React.createElement('svg', { viewBox: `0 0 ${CW} ${CH}`, className: "w-full",}
          , [0, 45, 90, 135, 180].map(a => (
            React.createElement('line', { key: `gx${a}`, x1: xSc(a), y1: pad.t, x2: xSc(a), y2: CH - pad.b, stroke: "#1e293b", strokeWidth: 0.5,} )
          ))
          , [-1, -0.5, 0, 0.5, 1].map(v => (
            React.createElement('g', { key: `gy${v}`,}
              , React.createElement('line', { x1: pad.l, y1: ySc(v), x2: CW - pad.r, y2: ySc(v), stroke: "#1e293b", strokeWidth: 0.5,} )
              , React.createElement('text', { x: pad.l - 5, y: ySc(v) + 3, textAnchor: "end", fill: "#64748b", fontSize: 7.5,}, v)
            )
          ))
          , [0, 45, 90, 135, 180].map(a => (
            React.createElement('text', { key: `xl${a}`, x: xSc(a), y: CH - pad.b + 13, textAnchor: "middle", fill: "#64748b", fontSize: 7.5,}, a, "°")
          ))
          , React.createElement('text', { x: pad.l + plotW / 2, y: CH - 2, textAnchor: "middle", fill: "#475569", fontSize: 7,}, "Winkeldifferenz Δθ" )

          /* Violation region shading */
          , React.createElement('path', { d: fillPath, fill: "#f59e0b", opacity: 0.05,} )

          /* Classical line */
          , React.createElement('path', { d: cPath, fill: "none", stroke: "#f87171", strokeWidth: 1.8, strokeDasharray: "6 3" , opacity: 0.6,} )

          /* Quantum curve */
          , React.createElement('path', { d: qPath, fill: "none", stroke: "#22d3ee", strokeWidth: 2.2,} )

          /* Zero line */
          , React.createElement('line', { x1: pad.l, y1: ySc(0), x2: CW - pad.r, y2: ySc(0), stroke: "#334155", strokeWidth: 0.7,} )

          /* Label: violation zone */
          , React.createElement('text', { x: xSc(50), y: ySc(-0.45), fill: "#f59e0b", fontSize: 7, opacity: 0.5,}, "Verletzungszone")

          /* Saved points */
          , saved.map((s, i) => (
            React.createElement('circle', { key: `sp${i}`, cx: xSc(s.angle), cy: ySc(s.corr), r: 4.5,
              fill: "#f59e0b", stroke: "#fbbf24", strokeWidth: 1.2, opacity: 0.9,} )
          ))

          /* Live point */
          , res.length > 15 && corr !== null && (
            React.createElement(React.Fragment, null
              , React.createElement('line', { x1: xSc(eDiff), y1: pad.t, x2: xSc(eDiff), y2: CH - pad.b,
                stroke: "#fbbf24", strokeWidth: 0.5, opacity: 0.2, strokeDasharray: "3 3" ,} )
              , React.createElement('circle', { cx: xSc(eDiff), cy: ySc(corr), r: 6,
                fill: "#f59e0b", stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.9,}
                , on && React.createElement('animate', { attributeName: "r", values: "5;7;5", dur: "1s", repeatCount: "indefinite",} )
              )
            )
          )
        )

        , React.createElement('div', { className: "flex gap-3 sm:gap-5 justify-center mt-2 text-xs flex-wrap"      ,}
          , React.createElement('span', { className: "flex items-center gap-1.5"  ,}
            , React.createElement('svg', { width: "16", height: "6",}, React.createElement('line', { x1: "0", y1: "3", x2: "16", y2: "3", stroke: "#22d3ee", strokeWidth: "2",} ))
            , React.createElement('span', { className: "text-gray-400",}, "Quantenmechanik")
          )
          , React.createElement('span', { className: "flex items-center gap-1.5"  ,}
            , React.createElement('svg', { width: "16", height: "6",}, React.createElement('line', { x1: "0", y1: "3", x2: "16", y2: "3", stroke: "#f87171", strokeWidth: "2", strokeDasharray: "4 2" ,} ))
            , React.createElement('span', { className: "text-gray-400",}, "Klassische Grenze" )
          )
          , React.createElement('span', { className: "flex items-center gap-1.5"  ,}
            , React.createElement('span', { className: "w-2.5 h-2.5 bg-amber-400 rounded-full inline-block"    ,})
            , React.createElement('span', { className: "text-gray-400",}, "Gemessen")
          )
        )
        , saved.length > 0 && (
          React.createElement('button', { onClick: () => setSaved([]),
            className: "text-xs text-gray-600 hover:text-gray-400 mt-2 w-full text-center transition-colors"      ,}, "Gespeicherte Punkte löschen"

          )
        )
      )

      /* ─── CHSH TEST ─── */
      , React.createElement('div', { className: "mt-4 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"     ,}
        , React.createElement('button', { onClick: () => { setChshOpen(!chshOpen); if (!chsh) runCHSH(); },
          className: "w-full px-4 py-3 text-xs font-semibold text-purple-300 hover:bg-gray-800 transition-all flex justify-between items-center"          ,}
          , React.createElement('span', null, "🔔 CHSH Bell-Test (40.000 Paare)"    )
          , React.createElement('span', { className: "text-gray-600",}, chshOpen ? '▲' : '▼')
        )
        , chshOpen && chsh && (
          React.createElement('div', { className: "px-4 pb-4 space-y-3"  ,}
            , React.createElement('div', { className: "grid grid-cols-2 gap-2 text-xs"   ,}
              , chsh.cfgs.map(([a, b], i) => (
                React.createElement('div', { key: i, className: "bg-gray-800 rounded-lg px-3 py-2"   ,}
                  , React.createElement('span', { className: "text-gray-500",}, "E(", a, "°,", b, "°) = "  )
                  , React.createElement('span', { className: "font-mono font-bold text-white"  ,}, chsh.Es[i].toFixed(3))
                )
              ))
            )
            , React.createElement('div', { className: "text-center",}
              , React.createElement('div', { className: "text-xs text-gray-500 mb-1 font-mono"   ,}, "S = |E(0,45) − E(0,135) + E(90,45) + E(90,135)|"

              )
              , React.createElement('div', { className: "text-3xl font-black font-mono"  , style: { color: chsh.S > 2 ? '#fbbf24' : '#ef4444' },}, "S = "
                  , chsh.S.toFixed(3)
              )
              , React.createElement('div', { className: "mt-1.5 flex justify-center gap-6 text-xs"    ,}
                , React.createElement('span', { className: "text-gray-500",}, "Klassisch: " , React.createElement('span', { className: "text-red-400 font-bold" ,}, "S ≤ 2"  ))
                , React.createElement('span', { className: "text-gray-500",}, "Quanten: " , React.createElement('span', { className: "text-cyan-400 font-bold" ,}, "S = 2√2 ≈ 2.83"    ))
              )
              , chsh.S > 2 && (
                React.createElement('div', { className: "mt-3 py-2.5 px-5 bg-amber-950 rounded-lg border border-amber-800 inline-block"       ,}
                  , React.createElement('div', { className: "text-sm font-bold text-amber-300"  ,}, "⚡ Bell-Ungleichung VERLETZT!"  )
                  , React.createElement('div', { className: "text-xs text-amber-500 mt-0.5"  ,}, "Keine versteckten Variablen können diese Korrelationen erklären."

                  )
                )
              )
            )
            , React.createElement('button', { onClick: runCHSH,
              className: "w-full text-xs text-gray-600 hover:text-gray-300 transition-colors text-center pt-1"      ,}, "↺ Erneut würfeln"

            )
          )
        )
      )

      /* ─── INFO ─── */
      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"     ,}
        , React.createElement('button', { onClick: () => setInfo(!info),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center transition-colors"         ,}
          , React.createElement('span', { className: "font-semibold",}, "💡 So funktioniert das Experiment"    )
          , React.createElement('span', { className: "text-gray-600",}, info ? '▲' : '▼')
        )
        , info && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed"    ,}, "Die "
             , React.createElement('strong', { className: "text-amber-400",}, "Quelle"), " in der Mitte sendet"
            , ' ', React.createElement('em', null, "verschränkte"), " Photonenpaare aus – eins zu"
            , ' ', React.createElement('strong', { className: "text-rose-400",}, "Alice"), ", eins zu"
            , ' ', React.createElement('strong', { className: "text-cyan-400",}, "Bob"), ". Jeder misst die Polarisation entlang seines eingestellten Winkels und erhält +1 oder −1."


            , React.createElement('br', null ), React.createElement('br', null ), "Die "
             , React.createElement('strong', { className: "text-cyan-400",}, "türkise Kurve" ), " im Diagramm zeigt die Quanten-Vorhersage: Wie stark Alice' und Bobs Ergebnisse zusammenhängen, je nach Winkeldifferenz. Bei 0° sind sie perfekt anti-korreliert (E = −1): immer entgegengesetzt. Bei 90° unkorreliert (E = 0): völlig zufällig. Die Kurve folgt einem Kosinus."



            , React.createElement('br', null ), React.createElement('br', null ), "Die "
             , React.createElement('strong', { className: "text-red-400",}, "gestrichelte rote Linie"  ), " zeigt das Beste, was ein Modell mit „versteckten Variablen\" erreichen könnte – also die Handschuh-Theorie. Die Quantenkurve biegt sich in die "

                  , React.createElement('strong', { className: "text-amber-500",}, "goldene Zone" ), " hinein – die Korrelationen sind "
               , React.createElement('em', null, "stärker"), " als klassisch möglich."
            , React.createElement('br', null ), React.createElement('br', null )
            , React.createElement('strong', null, "Anleitung:"), " Stell verschiedene Winkel ein, drücke "      , React.createElement('em', null, "▶ Messen" ), ", und speichere Datenpunkte mit "
                , React.createElement('em', null, "📌"), ". Die goldenen Punkte landen auf der Quantenkurve, nicht auf der klassischen Linie. Der "

             , React.createElement('strong', { className: "text-purple-300",}, "CHSH-Test"), " fasst alles in einer Zahl zusammen: S > 2 bedeutet, dass die Natur keine lokalen versteckten Variablen benutzt."

          )
        )
      )
    )
  );
}
window.BellTestExplorer = BellTestExplorer;
})();

// === PathIntegralExplorer ===
(function() {
const TAU = Math.PI * 2;

 function PathIntegralExplorer() {
  const [hbarSlider, setHbarSlider] = React.useState(50);
  const [nPaths, setNPaths] = React.useState(61);
  const [showClassical, setShowClassical] = React.useState(true);
  const [info, setInfo] = React.useState(false);

  const hbarEff = Math.pow(10, -2.5 + hbarSlider / 20);

  const startX = 0.08, startY = 0.85;
  const endX = 0.92, endY = 0.15;

  const paths = React.useMemo(() => {
    const result = [];
    const half = Math.floor(nPaths / 2);
    for (let i = 0; i < nPaths; i++) {
      const dev = (i - half) / half;
      const pts = [];
      const steps = 40;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const baseX = startX + (endX - startX) * t;
        const baseY = startY + (endY - startY) * t;
        const env = Math.sin(Math.PI * t);
        const perpX = -(endY - startY);
        const perpY = (endX - startX);
        const len = Math.sqrt(perpX * perpX + perpY * perpY);
        const nx = perpX / len;
        const ny = perpY / len;
        const displacement = dev * 0.38 * env;
        const wiggle = dev !== 0
          ? Math.sin(t * Math.PI * (2 + Math.abs(dev) * 3)) * dev * 0.06 * env
          : 0;
        pts.push({
          x: baseX + (displacement + wiggle) * nx,
          y: baseY + (displacement + wiggle) * ny,
        });
      }
      let pathLen = 0;
      for (let s = 1; s < pts.length; s++) {
        const dx = pts[s].x - pts[s - 1].x;
        const dy = pts[s].y - pts[s - 1].y;
        pathLen += Math.sqrt(dx * dx + dy * dy);
      }
      const action = pathLen * pathLen * 50;
      const phase = action / hbarEff;
      result.push({ pts, action, phase, dev: Math.abs(dev) });
    }
    return result;
  }, [nPaths, hbarEff]);

  const arrows = React.useMemo(() => {
    let cx = 0, cy = 0;
    const segs = [];
    const arrowLen = 0.9 / nPaths;
    for (const p of paths) {
      const dx = Math.cos(p.phase) * arrowLen;
      const dy = Math.sin(p.phase) * arrowLen;
      segs.push({ x1: cx, y1: cy, x2: cx + dx, y2: cy + dy, dev: p.dev });
      cx += dx;
      cy += dy;
    }
    return { segs, totalX: cx, totalY: cy };
  }, [paths, nPaths]);

  const arrowBounds = React.useMemo(() => {
    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    for (const s of arrows.segs) {
      minX = Math.min(minX, s.x1, s.x2);
      maxX = Math.max(maxX, s.x1, s.x2);
      minY = Math.min(minY, s.y1, s.y2);
      maxY = Math.max(maxY, s.y1, s.y2);
    }
    minX = Math.min(minX, arrows.totalX);
    maxX = Math.max(maxX, arrows.totalX);
    minY = Math.min(minY, arrows.totalY);
    maxY = Math.max(maxY, arrows.totalY);
    const pad = 0.08;
    return { minX: minX - pad, maxX: maxX + pad, minY: minY - pad, maxY: maxY + pad };
  }, [arrows]);

  const mapArrow = (x, y) => {
    const { minX, maxX, minY, maxY } = arrowBounds;
    const w = maxX - minX || 1;
    const h = maxY - minY || 1;
    const scale = Math.min(280 / w, 280 / h);
    return {
      sx: 160 + (x - (minX + maxX) / 2) * scale,
      sy: 160 + (y - (minY + maxY) / 2) * scale,
    };
  };

  const totalLen = Math.sqrt(arrows.totalX ** 2 + arrows.totalY ** 2);
  const prob = totalLen * totalLen;
  const maxProb = (0.9 / nPaths * nPaths) ** 2;

  const classicalIdx = Math.floor(nPaths / 2);

  const getColor = (dev) => {
    if (dev < 0.15) return '#22d3ee';
    if (dev < 0.4) return '#a78bfa';
    if (dev < 0.7) return '#f472b6';
    return '#f87171';
  };

  const getOpacity = (dev) => {
    return Math.max(0.08, 0.6 - dev * 0.5);
  };

  const hbarLabel = hbarEff > 1 ? hbarEff.toFixed(1) : hbarEff < 0.01 ? hbarEff.toExponential(1) : hbarEff.toFixed(3);

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto"      ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent"          ,}, "Pfadintegral – Summe über alle Wege"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-4"   ,}, "Jeder Weg hat einen Pfeil · Addiere alle Pfeile · Sieh, wie Klassik aus Quanten entsteht"

      )

      , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3"   ,}
        /* LEFT: Paths */
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Wege von A nach B"    )
          , React.createElement('svg', { viewBox: "0 0 320 320"   , className: "w-full",}
            , React.createElement('defs', null
              , React.createElement('radialGradient', { id: "gA",}, React.createElement('stop', { offset: "0%", stopColor: "#fbbf24", stopOpacity: "0.3",} ), React.createElement('stop', { offset: "100%", stopColor: "#fbbf24", stopOpacity: "0",} ))
              , React.createElement('radialGradient', { id: "gB",}, React.createElement('stop', { offset: "0%", stopColor: "#fbbf24", stopOpacity: "0.3",} ), React.createElement('stop', { offset: "100%", stopColor: "#fbbf24", stopOpacity: "0",} ))
            )

            , paths.map((p, i) => {
              const d = p.pts.map((pt, j) => `${j === 0 ? 'M' : 'L'}${pt.x * 300 + 10},${pt.y * 300 + 10}`).join(' ');
              const col = getColor(p.dev);
              const op = getOpacity(p.dev);
              return React.createElement('path', { key: i, d: d, fill: "none", stroke: col, strokeWidth: i === classicalIdx ? 2.5 : 1, opacity: i === classicalIdx && showClassical ? 1 : op,} );
            })

            , showClassical && (
              React.createElement('path', {
                d: paths[classicalIdx].pts.map((pt, j) => `${j === 0 ? 'M' : 'L'}${pt.x * 300 + 10},${pt.y * 300 + 10}`).join(' '),
                fill: "none", stroke: "#fbbf24", strokeWidth: 2.8, opacity: 0.9,}
              )
            )

            , React.createElement('circle', { cx: startX * 300 + 10, cy: startY * 300 + 10, r: 20, fill: "url(#gA)",} )
            , React.createElement('circle', { cx: startX * 300 + 10, cy: startY * 300 + 10, r: 7, fill: "#fbbf24", opacity: 0.9,} )
            , React.createElement('text', { x: startX * 300 + 10, y: startY * 300 + 30, textAnchor: "middle", fill: "#fbbf24", fontSize: 11, fontWeight: "bold",}, "A")

            , React.createElement('circle', { cx: endX * 300 + 10, cy: endY * 300 + 10, r: 20, fill: "url(#gB)",} )
            , React.createElement('circle', { cx: endX * 300 + 10, cy: endY * 300 + 10, r: 7, fill: "#fbbf24", opacity: 0.9,} )
            , React.createElement('text', { x: endX * 300 + 10, y: endY * 300 - 15, textAnchor: "middle", fill: "#fbbf24", fontSize: 11, fontWeight: "bold",}, "B")
          )
          , React.createElement('div', { className: "flex gap-3 justify-center mt-1 text-xs flex-wrap"     ,}
            , React.createElement('span', { className: "flex items-center gap-1"  ,}, React.createElement('span', { className: "w-3 h-0.5 bg-cyan-400 inline-block rounded"    ,}), React.createElement('span', { className: "text-gray-500",}, "klassisch nah" ))
            , React.createElement('span', { className: "flex items-center gap-1"  ,}, React.createElement('span', { className: "w-3 h-0.5 bg-purple-400 inline-block rounded"    ,}), React.createElement('span', { className: "text-gray-500",}, "mittel"))
            , React.createElement('span', { className: "flex items-center gap-1"  ,}, React.createElement('span', { className: "w-3 h-0.5 bg-rose-400 inline-block rounded"    ,}), React.createElement('span', { className: "text-gray-500",}, "verrückt"))
            , showClassical && React.createElement('span', { className: "flex items-center gap-1"  ,}, React.createElement('span', { className: "w-3 h-0.5 bg-amber-400 inline-block rounded"    ,}), React.createElement('span', { className: "text-gray-500",}, "klassisch"))
          )
        )

        /* RIGHT: Arrows */
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Pfeile addiert (Spitze an Ende)"    )
          , React.createElement('svg', { viewBox: "0 0 320 320"   , className: "w-full",}
            , arrows.segs.map((s, i) => {
              const a = mapArrow(s.x1, s.y1);
              const b = mapArrow(s.x2, s.y2);
              return (
                React.createElement('line', { key: i, x1: a.sx, y1: a.sy, x2: b.sx, y2: b.sy,
                  stroke: getColor(s.dev), strokeWidth: 1.2,
                  opacity: Math.max(0.15, 0.7 - s.dev * 0.5),} )
              );
            })

            , (() => {
              const o = mapArrow(0, 0);
              const e = mapArrow(arrows.totalX, arrows.totalY);
              return (
                React.createElement(React.Fragment, null
                  , React.createElement('line', { x1: o.sx, y1: o.sy, x2: e.sx, y2: e.sy,
                    stroke: "#fbbf24", strokeWidth: 3, opacity: 0.9,} )
                  , React.createElement('circle', { cx: o.sx, cy: o.sy, r: 4, fill: "#fbbf24", opacity: 0.8,} )
                  , React.createElement('circle', { cx: e.sx, cy: e.sy, r: 4, fill: "#fbbf24", opacity: 0.8,} )
                  , React.createElement('text', { x: (o.sx + e.sx) / 2 + 10, y: (o.sy + e.sy) / 2,
                    fill: "#fbbf24", fontSize: 9, fontWeight: "bold",}, "Gesamt")
                )
              );
            })()
          )
          , React.createElement('div', { className: "text-center text-xs mt-1"  ,}
            , React.createElement('span', { className: "text-gray-500",}, "|Gesamtpfeil|² ∝ "  )
            , React.createElement('span', { className: "text-amber-400 font-mono font-bold"  ,}, prob.toFixed(4))
          )
        )
      )

      /* CONTROLS */
      , React.createElement('div', { className: "mt-4 bg-gray-900 rounded-xl p-4 border border-gray-800 space-y-3"      ,}
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-cyan-400 flex justify-between"   ,}
            , React.createElement('span', null, "ℏ effektiv (Quantenstärke)"  )
            , React.createElement('span', { className: "font-mono",}, hbarLabel)
          )
          , React.createElement('input', { type: "range", min: 1, max: 100, value: hbarSlider,
            onChange: e => setHbarSlider(+e.target.value),
            className: "w-full accent-cyan-500 mt-0.5"  ,} )
          , React.createElement('div', { className: "flex justify-between text-xs text-gray-600 mt-0.5"    ,}
            , React.createElement('span', null, "← Alltagswelt (klassisch)"  )
            , React.createElement('span', null, "Quantenwelt →" )
          )
        )
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-purple-400 flex justify-between"   ,}
            , React.createElement('span', null, "Anzahl Wege" )
            , React.createElement('span', { className: "font-mono",}, nPaths)
          )
          , React.createElement('input', { type: "range", min: 11, max: 121, step: 2, value: nPaths,
            onChange: e => setNPaths(+e.target.value),
            className: "w-full accent-purple-500 mt-0.5"  ,} )
        )
        , React.createElement('div', { className: "flex gap-3" ,}
          , React.createElement('button', { onClick: () => setShowClassical(!showClassical),
            className: `flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${
              showClassical ? 'bg-amber-950 text-amber-300 border-amber-800' : 'bg-gray-800 text-gray-400 border-gray-700'
            }`,}
            , showClassical ? '★ Klassischer Weg sichtbar' : '☆ Klassischen Weg einblenden'
          )
          , React.createElement('button', { onClick: () => { setHbarSlider(50); setNPaths(61); },
            className: "px-4 py-2 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-all"          ,}, "↺ Reset"

          )
        )
      )

      /* Interpretation bar */
      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 p-4"     ,}
        , React.createElement('div', { className: "text-xs text-gray-400 leading-relaxed"  ,}
          , hbarSlider < 20 ? (
            React.createElement('span', null, React.createElement('strong', { className: "text-amber-400",}, "Klassische Welt:" ), " ℏ ist winzig. Nur Wege nahe am klassischen Pfad (gelb) haben ähnliche Pfeile. Alles andere löscht sich aus. Die Pfeil-Spirale rechts ist eng zusammengezogen – fast nur der Gesamtpfeil zählt. "                               , React.createElement('strong', { className: "text-gray-300",}, "Newton gewinnt." ))
          ) : hbarSlider < 55 ? (
            React.createElement('span', null, React.createElement('strong', { className: "text-purple-400",}, "Übergangszone:"), " ℏ ist moderat. Eine breite Nachbarschaft um den klassischen Weg trägt bei. Die Spirale rechts ist offen – mehrere Wege beeinflussen das Ergebnis. "                        , React.createElement('strong', { className: "text-gray-300",}, "Quanteneffekte beginnen sichtbar zu werden."    ))
          ) : (
            React.createElement('span', null, React.createElement('strong', { className: "text-cyan-400",}, "Quantenwelt:"), " ℏ ist groß. Selbst „verrückte\" Wege tragen bei, weil sich benachbarte Pfeile nicht mehr gegenseitig auslöschen. Die Spirale rechts ist weit offen. "                       , React.createElement('strong', { className: "text-gray-300",}, "Es gibt keinen bevorzugten Weg mehr – volle Quanteninterferenz."        ))
          )
        )
      )

      /* INFO */
      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"     ,}
        , React.createElement('button', { onClick: () => setInfo(!info),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center transition-colors"         ,}
          , React.createElement('span', { className: "font-semibold",}, "💡 Was du hier siehst"    )
          , React.createElement('span', { className: "text-gray-600",}, info ? '▲' : '▼')
        )
        , info && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed"    ,}
            , React.createElement('strong', { className: "text-white",}, "Links:"), " Mögliche Wege eines Teilchens von A nach B. Türkise Wege liegen nahe am klassischen (geraden) Pfad. Rosa und rote Wege weichen stark ab. Der gelbe Weg ist der klassische – der Weg, den Newton vorhersagen würde."


            , React.createElement('br', null ), React.createElement('br', null )
            , React.createElement('strong', { className: "text-white",}, "Rechts:"), " Die Pfeile (Amplituden) aller Wege, hintereinander gezeichnet. Jeder Pfeil hat dieselbe Länge, aber seine Richtung hängt von der Wirkung des Weges ab. Wege mit ähnlicher Wirkung → Pfeile in ähnliche Richtung → Verstärkung. Wege mit sehr verschiedener Wirkung → Pfeile in alle Richtungen → Auslöschung. Der "



             , React.createElement('strong', { className: "text-amber-400",}, "gelbe Gesamtpfeil" ), " zeigt das Endergebnis."
            , React.createElement('br', null ), React.createElement('br', null )
            , React.createElement('strong', { className: "text-white",}, "Der ℏ-Regler:" ), " Bestimmt, wie „quantenhaft\" die Welt ist. Bei kleinem ℏ dreht jede Abweichung vom klassischen Weg den Pfeil sofort wild im Kreis – nur der klassische Weg überlebt. Bei großem ℏ drehen sich die Pfeile langsamer, und auch weit entfernte Wege tragen bei."



            , React.createElement('br', null ), React.createElement('br', null )
            , React.createElement('strong', { className: "text-white",}, "Probier es:" ), " Schieb ℏ ganz nach links. Die Spirale rechts kollabiert zum Gesamtpfeil – klassische Physik. Schieb ℏ nach rechts. Die Spirale öffnet sich – Quantenwelt. Der Übergang ist fließend, nicht abrupt. Genau so ist es in der Natur."


          )
        )
      )
    )
  );
}
window.PathIntegralExplorer = PathIntegralExplorer;
})();

// === PropagatorExplorer ===
(function() {
const TAU = Math.PI * 2;

 function PropagatorExplorer() {
  const [numScreens, setNumScreens] = React.useState(1);
  const [numSlits, setNumSlits] = React.useState(5);
  const [showArrows, setShowArrows] = React.useState(true);
  const [info, setInfo] = React.useState(false);
  const [selectedPath, setSelectedPath] = React.useState(null);

  const slitPositions = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < numSlits; i++) {
      positions.push(0.15 + (0.7 * i) / (numSlits - 1 || 1));
    }
    return positions;
  }, [numSlits]);

  const screenXPositions = React.useMemo(() => {
    const xs = [];
    for (let s = 0; s < numScreens; s++) {
      xs.push((s + 1) / (numScreens + 1));
    }
    return xs;
  }, [numScreens]);

  const startY = 0.5;
  const endY = 0.5;

  // Generate all paths (combinations of slit choices at each screen)
  const paths = React.useMemo(() => {
    const maxPaths = 800;
    const totalCombinations = Math.pow(numSlits, numScreens);

    let stride = 1;
    if (totalCombinations > maxPaths) {
      stride = Math.ceil(totalCombinations / maxPaths);
    }

    const result = [];
    for (let combo = 0; combo < totalCombinations; combo += stride) {
      const slitChoices = [];
      let rem = combo;
      for (let s = 0; s < numScreens; s++) {
        slitChoices.push(rem % numSlits);
        rem = Math.floor(rem / numSlits);
      }

      // Build points: start -> screen1_slit -> screen2_slit -> ... -> end
      const points = [{ x: 0, y: startY }];
      for (let s = 0; s < numScreens; s++) {
        points.push({ x: screenXPositions[s], y: slitPositions[slitChoices[s]] });
      }
      points.push({ x: 1, y: endY });

      // Calculate phase: sum of segment phases
      // Phase for each segment proportional to path length squared (simplified action)
      let totalPhase = 0;
      let totalLength = 0;
      for (let i = 1; i < points.length; i++) {
        const dx = points[i].x - points[i - 1].x;
        const dy = points[i].y - points[i - 1].y;
        const segLen = Math.sqrt(dx * dx + dy * dy);
        totalLength += segLen;
        // Phase ~ (dy^2 / dx) to approximate kinetic action
        totalPhase += (dy * dy) / dx * 45;
      }

      result.push({
        points,
        phase: totalPhase,
        slitChoices,
        length: totalLength,
        combo,
      });
    }
    return result;
  }, [numScreens, numSlits, screenXPositions, slitPositions]);

  // Compute arrow segments for addition diagram
  const arrowData = React.useMemo(() => {
    const arrowLen = 0.85 / paths.length;
    let cx = 0, cy = 0;
    const segs = [];

    for (const p of paths) {
      const dx = Math.cos(p.phase) * arrowLen;
      const dy = Math.sin(p.phase) * arrowLen;
      segs.push({ x1: cx, y1: cy, x2: cx + dx, y2: cy + dy, phase: p.phase });
      cx += dx;
      cy += dy;
    }
    return { segs, totalX: cx, totalY: cy };
  }, [paths]);

  // Bounding box for arrow diagram
  const arrowBounds = React.useMemo(() => {
    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    for (const s of arrowData.segs) {
      minX = Math.min(minX, s.x1, s.x2);
      maxX = Math.max(maxX, s.x1, s.x2);
      minY = Math.min(minY, s.y1, s.y2);
      maxY = Math.max(maxY, s.y1, s.y2);
    }
    minX = Math.min(minX, arrowData.totalX) - 0.06;
    maxX = Math.max(maxX, arrowData.totalX) + 0.06;
    minY = Math.min(minY, arrowData.totalY) - 0.06;
    maxY = Math.max(maxY, arrowData.totalY) + 0.06;
    return { minX, maxX, minY, maxY };
  }, [arrowData]);

  const mapArrow = React.useCallback((x, y) => {
    const { minX, maxX, minY, maxY } = arrowBounds;
    const w = maxX - minX || 1;
    const h = maxY - minY || 1;
    const scale = Math.min(270 / w, 270 / h);
    return {
      sx: 155 + (x - (minX + maxX) / 2) * scale,
      sy: 155 + (y - (minY + maxY) / 2) * scale,
    };
  }, [arrowBounds]);

  const totalLen = Math.sqrt(arrowData.totalX ** 2 + arrowData.totalY ** 2);
  const prob = totalLen * totalLen;

  const getPathColor = (idx) => {
    const hue = (idx / paths.length) * 270;
    return `hsl(${hue}, 70%, 60%)`;
  };

  const pathsSVGWidth = 340;
  const pathsSVGHeight = 310;
  const pxMargin = 20;

  const mapPath = (x, y) => ({
    px: pxMargin + x * (pathsSVGWidth - 2 * pxMargin),
    py: pxMargin + y * (pathsSVGHeight - 2 * pxMargin),
  });

  const labelForScreens = numScreens === 1
    ? 'Doppelspalt aus Teil 1'
    : numScreens <= 3
    ? `${numScreens} Zwischenwände`
    : `${numScreens} Zwischenwände → Wege formen sich`;

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto"      ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"          ,}, "Von Spalten zu Wegen – der Propagator"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-4"   ,}, "Zwei Regeln · Beliebig viele Zwischenpunkte · So entsteht die Summe über alle Wege"

      )

      /* Two rules reminder */
      , React.createElement('div', { className: "grid grid-cols-2 gap-2 mb-4"   ,}
        , React.createElement('div', { className: "bg-emerald-950 border border-emerald-800 rounded-xl p-3 text-center"     ,}
          , React.createElement('div', { className: "text-xs text-emerald-300 font-bold mb-1"   ,}, "Regel 1: Alternativen"  )
          , React.createElement('div', { className: "text-lg",}, "➕")
          , React.createElement('div', { className: "text-xs text-emerald-400 mt-1"  ,}, "Pfeile addieren" )
        )
        , React.createElement('div', { className: "bg-purple-950 border border-purple-800 rounded-xl p-3 text-center"     ,}
          , React.createElement('div', { className: "text-xs text-purple-300 font-bold mb-1"   ,}, "Regel 2: Nacheinander"  )
          , React.createElement('div', { className: "text-lg",}, "✖️")
          , React.createElement('div', { className: "text-xs text-purple-400 mt-1"  ,}, "Pfeile multiplizieren" )
        )
      )

      , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3"   ,}
        /* LEFT: Paths through screens */
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}
            , labelForScreens
          )
          , React.createElement('svg', { viewBox: `0 0 ${pathsSVGWidth} ${pathsSVGHeight}`, className: "w-full",}
            /* Screens */
            , screenXPositions.map((sx, si) => {
              const mapped = mapPath(sx, 0);
              return (
                React.createElement('g', { key: `scr${si}`,}
                  /* Wall segments between slits */
                  , React.createElement('line', {
                    x1: mapped.px, y1: pxMargin - 5,
                    x2: mapped.px, y2: pathsSVGHeight - pxMargin + 5,
                    stroke: "#334155", strokeWidth: 2.5, opacity: 0.5,}
                  )
                  /* Slits */
                  , slitPositions.map((sy, sli) => {
                    const sm = mapPath(sx, sy);
                    return (
                      React.createElement('g', { key: `slit${si}_${sli}`,}
                        , React.createElement('rect', { x: sm.px - 3, y: sm.py - 6, width: 6, height: 12,
                          fill: "#0f172a", stroke: "#475569", strokeWidth: 0.7, rx: 1,} )
                        , React.createElement('line', { x1: sm.px, y1: sm.py - 4, x2: sm.px, y2: sm.py + 4,
                          stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.6,} )
                      )
                    );
                  })
                )
              );
            })

            /* Paths */
            , paths.map((p, pi) => {
              const d = p.points.map((pt, j) => {
                const m = mapPath(pt.x, pt.y);
                return `${j === 0 ? 'M' : 'L'}${m.px},${m.py}`;
              }).join(' ');
              const isSelected = selectedPath === pi;
              return (
                React.createElement('path', { key: pi, d: d, fill: "none",
                  stroke: getPathColor(pi),
                  strokeWidth: isSelected ? 2.5 : 0.8,
                  opacity: selectedPath !== null ? (isSelected ? 1 : 0.07) : Math.min(0.5, 8 / paths.length),
                  onMouseEnter: () => setSelectedPath(pi),
                  onMouseLeave: () => setSelectedPath(null),
                  style: { cursor: 'pointer' },}
                )
              );
            })

            /* Start and end */
            , (() => {
              const s = mapPath(0, startY);
              const e = mapPath(1, endY);
              return (
                React.createElement(React.Fragment, null
                  , React.createElement('circle', { cx: s.px, cy: s.py, r: 6, fill: "#22d3ee", opacity: 0.9,} )
                  , React.createElement('text', { x: s.px, y: s.py + 18, textAnchor: "middle", fill: "#22d3ee", fontSize: 10, fontWeight: "bold",}, "A")
                  , React.createElement('circle', { cx: e.px, cy: e.py, r: 6, fill: "#f472b6", opacity: 0.9,} )
                  , React.createElement('text', { x: e.px, y: e.py + 18, textAnchor: "middle", fill: "#f472b6", fontSize: 10, fontWeight: "bold",}, "C")
                )
              );
            })()

            /* Screen labels */
            , screenXPositions.map((sx, si) => {
              const m = mapPath(sx, 0);
              return (
                React.createElement('text', { key: `sl${si}`, x: m.px, y: pxMargin - 10,
                  textAnchor: "middle", fill: "#64748b", fontSize: 7.5,}
                  , numScreens <= 8 ? `B${si + 1}` : ''
                )
              );
            })

            /* Equation overlay */
            , React.createElement('text', { x: pathsSVGWidth / 2, y: pathsSVGHeight - 4,
              textAnchor: "middle", fill: "#475569", fontSize: 7.5,}
              , numScreens === 1
                ? 'K(C,A) = Σ_B K(C,B)·K(B,A)'
                : numScreens === 2
                ? 'K(D,A) = Σ_B Σ_C K(D,C)·K(C,B)·K(B,A)'
                : `${numScreens} Summen · ${numScreens + 1} Faktoren`
            )
          )
          , React.createElement('div', { className: "text-center text-xs text-gray-600 mt-0.5"   ,}
            , paths.length, " Wege gezeigt · Hover für Einzelweg"
          )
        )

        /* RIGHT: Arrow addition */
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Pfeile addiert (Regel 1)"

          )
          , React.createElement('svg', { viewBox: "0 0 310 310"   , className: "w-full",}
            , showArrows && arrowData.segs.map((s, i) => {
              const a = mapArrow(s.x1, s.y1);
              const b = mapArrow(s.x2, s.y2);
              const isSelected = selectedPath === i;
              return (
                React.createElement('line', { key: i, x1: a.sx, y1: a.sy, x2: b.sx, y2: b.sy,
                  stroke: getPathColor(i),
                  strokeWidth: isSelected ? 2.5 : 0.9,
                  opacity: selectedPath !== null ? (isSelected ? 1 : 0.1) : Math.min(0.6, 10 / paths.length),
                  onMouseEnter: () => setSelectedPath(i),
                  onMouseLeave: () => setSelectedPath(null),
                  style: { cursor: 'pointer' },}
                )
              );
            })

            /* Total arrow */
            , (() => {
              const o = mapArrow(0, 0);
              const e = mapArrow(arrowData.totalX, arrowData.totalY);
              return (
                React.createElement(React.Fragment, null
                  , React.createElement('line', { x1: o.sx, y1: o.sy, x2: e.sx, y2: e.sy,
                    stroke: "#fbbf24", strokeWidth: 3.5, opacity: 0.9,} )
                  , React.createElement('circle', { cx: o.sx, cy: o.sy, r: 4, fill: "#22d3ee", opacity: 0.8,} )
                  , React.createElement('circle', { cx: e.sx, cy: e.sy, r: 4, fill: "#fbbf24", opacity: 0.9,} )
                )
              );
            })()

            , React.createElement('text', { x: 155, y: 300, textAnchor: "middle", fill: "#475569", fontSize: 8,}, "|Gesamtpfeil|² = "
                , prob.toFixed(4)
            )
          )
          , React.createElement('div', { className: "flex gap-2 justify-center mt-1 text-xs"    ,}
            , React.createElement('span', { className: "flex items-center gap-1"  ,}
              , React.createElement('span', { className: "w-3 h-0.5 bg-amber-400 inline-block rounded"    ,})
              , React.createElement('span', { className: "text-gray-500",}, "Gesamtpfeil K(C,A)" )
            )
          )
        )
      )

      /* CONTROLS */
      , React.createElement('div', { className: "mt-4 bg-gray-900 rounded-xl p-4 border border-gray-800 space-y-3"      ,}
        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-emerald-400 flex justify-between"   ,}
            , React.createElement('span', null, "Zwischenwände")
            , React.createElement('span', { className: "font-mono font-bold" ,}, numScreens)
          )
          , React.createElement('input', { type: "range", min: 1, max: 20, value: numScreens,
            onChange: e => setNumScreens(+e.target.value),
            className: "w-full accent-emerald-500 mt-0.5"  ,} )
          , React.createElement('div', { className: "flex justify-between text-xs text-gray-600 mt-0.5"    ,}
            , React.createElement('span', null, "1 (Doppelspalt)" )
            , React.createElement('span', null, "20 → Wege!"  )
          )
        )

        , React.createElement('div', null
          , React.createElement('label', { className: "text-xs text-purple-400 flex justify-between"   ,}
            , React.createElement('span', null, "Positionen pro Wand"  )
            , React.createElement('span', { className: "font-mono",}, numSlits)
          )
          , React.createElement('input', { type: "range", min: 2, max: 9, value: numSlits,
            onChange: e => setNumSlits(+e.target.value),
            className: "w-full accent-purple-500 mt-0.5"  ,} )
          , React.createElement('div', { className: "flex justify-between text-xs text-gray-600 mt-0.5"    ,}
            , React.createElement('span', null, "2 (Doppelspalt)" )
            , React.createElement('span', null, "9 → fast kontinuierlich"   )
          )
        )

        , React.createElement('div', { className: "flex gap-2" ,}
          , React.createElement('button', { onClick: () => setShowArrows(!showArrows),
            className: `flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${
              showArrows ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-gray-800 text-gray-400 border-gray-700'
            }`,}
            , showArrows ? '⟵ Pfeile sichtbar' : '⟵ Pfeile einblenden'
          )
          , React.createElement('button', { onClick: () => { setNumScreens(1); setNumSlits(5); },
            className: "px-4 py-2 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-all"          ,}, "↺ Reset"

          )
        )
      )

      /* Interpretation */
      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 p-4"     ,}
        , React.createElement('div', { className: "text-xs text-gray-400 leading-relaxed"  ,}
          , numScreens === 1 && numSlits <= 3 ? (
            React.createElement('span', null, React.createElement('strong', { className: "text-emerald-400",}, "Vertrautes Terrain:" ), " Das ist der Doppelspalt aus Teil 1. Zwei (oder drei) Alternativen, Pfeile addieren. Die Propagator-Gleichung hat eine einzige Summe: K(C,A) = Σ_B K(C,B)·K(B,A). Jeder Term ist ein Produkt (Regel 2), die Gesamtheit eine Summe (Regel 1)."                                    )
          ) : numScreens <= 3 ? (
            React.createElement('span', null, React.createElement('strong', { className: "text-cyan-400",}, "Mehrere Zwischenschritte:" ), " Jetzt gibt es "    , numScreens, " Wände mit je "    , numSlits, " Positionen. Die Gleichung hat "     , numScreens, " verschachtelte Summen. Jeder Weg ist ein Produkt aus "         , numScreens + 1, " Pfeilen. Aber die Logik ist identisch: Nacheinander → multipliziere, Alternativen → addiere."            )
          ) : numScreens <= 10 ? (
            React.createElement('span', null, React.createElement('strong', { className: "text-purple-400",}, "Wege werden sichtbar:"  ), " Mit "  , numScreens, " Zwischenwänden verbinden sich die Punkte zu erkennbaren Pfaden von A nach C. Die einzelnen Spalte werden unwichtig – was zählt, ist der *gesamte Weg*. Die Summe über Spaltkombinationen wird zur Summe über Wege."                                 )
          ) : (
            React.createElement('span', null, React.createElement('strong', { className: "text-rose-400",}, "Fast ein Integral:"  ), " Bei "  , numScreens, " Zwischenschritten sind die Linien fast glatte Kurven. Stell dir vor, du lässt die Anzahl gegen Unendlich gehen – dann wird jede Spaltkombination zu einem durchgehenden Weg durch den Raum, und die Summe über alle Kombinationen zur "                                     , React.createElement('em', null, "Summe über alle Wege"   ), ". Das ist Feynmans Pfadintegral – und genau davon handelt nächste Woche."           )
          )
        )
      )

      /* Quick-Preset Buttons */
      , React.createElement('div', { className: "mt-3 flex gap-2 flex-wrap justify-center"    ,}
        , [
          { label: '① Doppelspalt', s: 1, n: 2 },
          { label: '② 3 Spalte', s: 1, n: 3 },
          { label: '③ 2 Wände', s: 2, n: 5 },
          { label: '④ 5 Wände', s: 5, n: 5 },
          { label: '⑤ 12 Wände', s: 12, n: 4 },
          { label: '⑥ 20 → Wege!', s: 20, n: 4 },
        ].map(p => (
          React.createElement('button', { key: p.label,
            onClick: () => { setNumScreens(p.s); setNumSlits(p.n); },
            className: `px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              numScreens === p.s && numSlits === p.n
                ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                : 'bg-gray-800 text-gray-500 border-gray-700 hover:bg-gray-700 hover:text-gray-300'
            }`,}
            , p.label
          )
        ))
      )

      /* INFO */
      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"     ,}
        , React.createElement('button', { onClick: () => setInfo(!info),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center transition-colors"         ,}
          , React.createElement('span', { className: "font-semibold",}, "💡 So liest du die Visualisierung"     )
          , React.createElement('span', { className: "text-gray-600",}, info ? '▲' : '▼')
        )
        , info && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed"    ,}
            , React.createElement('strong', { className: "text-white",}, "Links – Die Wege:"   ), " Du siehst das Teilchen, das von "
              , React.createElement('strong', { className: "text-cyan-400",}, "A"), " nach "  , React.createElement('strong', { className: "text-rose-400",}, "C"), " fliegt. Dazwischen stehen graue Wände mit gelben Spalten. Jede farbige Linie ist ein möglicher Weg – eine bestimmte Kombination von Spaltwahlen. Bei 1 Wand mit 5 Spalten gibt es 5 Wege. Bei 5 Wänden mit 5 Spalten gibt es 5⁵ = 3125 Wege. Hover über einen Weg, um ihn hervorzuheben."



            , React.createElement('br', null ), React.createElement('br', null )
            , React.createElement('strong', { className: "text-white",}, "Rechts – Die Pfeile:"   ), " Jeder Weg hat einen Pfeil (berechnet durch Multiplikation der Teilpfeile – Regel 2). Alle Pfeile werden Spitze an Ende addiert (Regel 1). Der "

                , React.createElement('strong', { className: "text-amber-400",}, "gelbe Gesamtpfeil" ), " ist K(C,A) – die Gesamtamplitude. Sein Quadrat ist die Wahrscheinlichkeit."

            , React.createElement('br', null ), React.createElement('br', null )
            , React.createElement('strong', { className: "text-white",}, "Klick die Presets:"  ), " Starte bei ① (vertrauter Doppelspalt) und arbeite dich durch bis ⑥. Beobachte, wie aus einzelnen Spaltwahlen durchgehende "

             , React.createElement('em', null, "Wege"), " werden – und wie die Pfeilspirale sich mit jeder Stufe verändert."
          )
        )
      )
    )
  );
}
window.PropagatorExplorer = PropagatorExplorer;
})();

// === ActionPhaseViz ===
(function() {
const PI = Math.PI;

function classicalY(t, grav) {
  const g = grav ? 2.5 : 0;
  return 0.5 + 0.5 * g * t * (1 - t);
}

function pathY(t, alpha, grav) {
  return classicalY(t, grav) + alpha * Math.sin(PI * t);
}

function computeAction(alpha, grav, N = 50) {
  const g = grav ? 2.5 : 0;
  const dt = 1 / N;
  let S = 0;
  for (let i = 0; i < N; i++) {
    const y1 = pathY(i * dt, alpha, grav);
    const y2 = pathY((i + 1) * dt, alpha, grav);
    const v = (y2 - y1) / dt;
    const yMid = (y1 + y2) / 2;
    S += (0.5 * v * v - g * yMid) * dt;
  }
  return S;
}

 function ActionPhaseViz() {
  const [tab, setTab] = React.useState(0);
  const [nSegs, setNSegs] = React.useState(12);
  const [alpha, setAlpha] = React.useState(0.15);
  const [hSlider, setHSlider] = React.useState(35);
  const [grav, setGrav] = React.useState(true);
  const [hover, setHover] = React.useState(null);
  const [info, setInfo] = React.useState(false);

  const hInv = 3 + (hSlider / 100) * 85;
  const AMAX = 0.38;
  const NP = 121;

  const t0 = React.useMemo(() => {
    const h = 25;
    const dt = 1 / nSegs;
    const pts = [];
    const dPh = [];
    const cum = [];
    let c = 0;
    for (let i = 0; i <= nSegs; i++) {
      pts.push({ t: i / nSegs, y: pathY(i / nSegs, alpha, false) });
    }
    for (let i = 0; i < nSegs; i++) {
      const v = (pts[i + 1].y - pts[i].y) / dt;
      const dp = 0.5 * v * v * dt * h;
      dPh.push(dp);
      c += dp;
      cum.push(c);
    }
    return { pts, dPh, cum, total: c };
  }, [alpha, nSegs]);

  const t1 = React.useMemo(() => {
    const paths = [];
    for (let i = 0; i < NP; i++) {
      const a = -AMAX + (2 * AMAX * i) / (NP - 1);
      const S = computeAction(a, grav);
      const ph = S * hInv;
      const pts = [];
      for (let j = 0; j <= 30; j++) {
        const t = j / 30;
        pts.push({ t, y: pathY(t, a, grav) });
      }
      paths.push({ a, S, ph, pts });
    }
    const aL = 0.5 / NP;
    let cx = 0, cy = 0;
    const spi = [{ x: 0, y: 0 }];
    for (const p of paths) {
      cx += Math.cos(p.ph) * aL;
      cy += Math.sin(p.ph) * aL;
      spi.push({ x: cx, y: cy });
    }
    return { paths, spi, tx: cx, ty: cy, ci: Math.floor(NP / 2) };
  }, [hInv, grav]);

  const distCol = (a) => {
    const d = Math.abs(a) / AMAX;
    return d < 0.12 ? '#22d3ee' : d < 0.35 ? '#34d399' : d < 0.65 ? '#fbbf24' : '#f87171';
  };
  const phHue = (p) => (((p % (2 * PI)) + 2 * PI) % (2 * PI)) / (2 * PI) * 300;

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto select-none"       ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-1 bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 bg-clip-text text-transparent"          ,}, "Die Wirkung S und der klassische Grenzfall"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-4"   ,}, "Phasen addieren sich · Die Wirkung S entsteht · Stationäre Phase erklärt Newton"

      )

      , React.createElement('div', { className: "flex gap-2 mb-4"  ,}
        , ['① Vom Produkt zur Wirkung', '② Stationäre Phase'].map((l, i) => (
          React.createElement('button', { key: i, onClick: () => setTab(i),
            className: `flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
              tab === i
                ? (i === 0 ? 'bg-amber-950 text-amber-300 border-amber-700' : 'bg-violet-950 text-violet-300 border-violet-700')
                : 'bg-gray-900 text-gray-500 border-gray-700 hover:text-gray-300'
            }`,}, l)
        ))
      )

      , tab === 0 && (
        React.createElement('div', null
          , React.createElement('div', { className: "grid grid-cols-2 gap-2 mb-3"   ,}
            , React.createElement('div', { className: "bg-emerald-950 border border-emerald-800 rounded-xl p-2.5 text-center"     ,}
              , React.createElement('div', { className: "text-xs text-emerald-300 font-bold mb-0.5"   ,}, "Regel 2: Nacheinander"  )
              , React.createElement('div', { className: "text-xs text-emerald-400" ,}, "Pfeile multiplizieren = "   , React.createElement('strong', { className: "text-white",}, "Winkel addieren" ))
            )
            , React.createElement('div', { className: "bg-amber-950 border border-amber-800 rounded-xl p-2.5 text-center"     ,}
              , React.createElement('div', { className: "text-xs text-amber-300 font-bold mb-0.5"   ,}, "Konsequenz")
              , React.createElement('div', { className: "text-xs text-amber-400" ,}, "Σ aller Winkel = "    , React.createElement('strong', { className: "text-white",}, "Wirkung S/ℏ" ))
            )
          )

          , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3 mb-3"    ,}
            , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
              , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Weg in "
                  , nSegs, " Schritte zerlegt"
              )
              , React.createElement('svg', { viewBox: "0 0 300 200"   , className: "w-full",}
                , React.createElement('line', { x1: "25", y1: "180", x2: "280", y2: "180", stroke: "#1e293b", strokeWidth: "0.5",} )
                , React.createElement('text', { x: "150", y: "195", textAnchor: "middle", fill: "#475569", fontSize: "7",}, "Zeit t →"  )
                , React.createElement('line', { x1: "25", y1: "100", x2: "280", y2: "100", stroke: "#334155", strokeWidth: "0.6", strokeDasharray: "3,3",} )
                , React.createElement('text', { x: "284", y: "98", fill: "#334155", fontSize: "6",}, "klassisch")

                , t0.pts.map((pt, i) => {
                  if (i === 0) return null;
                  const prev = t0.pts[i - 1];
                  const x1 = 25 + prev.t * 255, y1 = 180 - prev.y * 160;
                  const x2 = 25 + pt.t * 255, y2 = 180 - pt.y * 160;
                  return React.createElement('line', { key: i, x1: x1, y1: y1, x2: x2, y2: y2,
                    stroke: `hsl(${phHue(t0.cum[i - 1])},65%,55%)`, strokeWidth: "3", strokeLinecap: "round",} );
                })

                , t0.pts.map((pt, i) => {
                  const x = 25 + pt.t * 255, y = 180 - pt.y * 160;
                  const isEnd = i === 0 || i === t0.pts.length - 1;
                  return React.createElement('circle', { key: i, cx: x, cy: y, r: isEnd ? 5 : 2,
                    fill: i === 0 ? '#22d3ee' : i === t0.pts.length - 1 ? '#f472b6' : '#64748b',} );
                })

                , React.createElement('text', { x: "18", y: 180 - t0.pts[0].y * 160 + 14, fill: "#22d3ee", fontSize: "10", fontWeight: "bold",}, "A")
                , React.createElement('text', { x: "282", y: 180 - t0.pts[t0.pts.length - 1].y * 160 + 14, fill: "#f472b6", fontSize: "10", fontWeight: "bold",}, "B")

                , t0.dPh.map((dp, i) => {
                  const midT = (i + 0.5) / nSegs;
                  const midY = pathY(midT, alpha, false);
                  const cx = 25 + midT * 255;
                  const cy = 180 - midY * 160 - 16;
                  const phase = t0.cum[i];
                  return (
                    React.createElement('g', { key: `a${i}`,}
                      , React.createElement('circle', { cx: cx, cy: cy, r: "7", fill: "none", stroke: "#334155", strokeWidth: "0.4",} )
                      , React.createElement('line', { x1: cx, y1: cy,
                        x2: cx + Math.cos(phase) * 6, y2: cy + Math.sin(phase) * 6,
                        stroke: "#fbbf24", strokeWidth: "1.5",} )
                      , React.createElement('circle', { cx: cx, cy: cy, r: "1", fill: "#fbbf24",} )
                    )
                  );
                })
              )
            )

            , React.createElement('div', { className: "sm:w-36 bg-gray-900 rounded-xl border border-gray-800 p-2 flex flex-col items-center justify-center"         ,}
              , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-2"    ,}, "Ergebnis-Pfeil")
              , React.createElement('svg', { viewBox: "0 0 100 100"   , className: "w-full max-w-xs" ,}
                , React.createElement('circle', { cx: "50", cy: "50", r: "38", fill: "none", stroke: "#1e293b", strokeWidth: "0.5",} )
                , t0.cum.map((ph, i) => {
                  const frac = (i + 1) / nSegs;
                  return React.createElement('line', { key: i, x1: "50", y1: "50",
                    x2: 50 + Math.cos(ph) * 34 * frac, y2: 50 + Math.sin(ph) * 34 * frac,
                    stroke: `hsl(${phHue(ph)},50%,45%)`, strokeWidth: "0.7", opacity: "0.35",} );
                })
                , React.createElement('line', { x1: "50", y1: "50",
                  x2: 50 + Math.cos(t0.total) * 36, y2: 50 + Math.sin(t0.total) * 36,
                  stroke: "#fbbf24", strokeWidth: "3",} )
                , React.createElement('circle', { cx: "50", cy: "50", r: "3", fill: "#22d3ee",} )
                , (() => {
                  const r = 18;
                  const a = t0.total;
                  const n = Math.max(2, Math.abs(Math.round(a / 0.08)));
                  const pts = [];
                  for (let i = 0; i <= n; i++) {
                    const ang = (a * i) / n;
                    pts.push(`${50 + Math.cos(ang) * r},${50 + Math.sin(ang) * r}`);
                  }
                  return React.createElement('polyline', { points: pts.join(' '), fill: "none", stroke: "#fbbf24", strokeWidth: "0.7", opacity: "0.4",} );
                })()
              )
              , React.createElement('div', { className: "text-center mt-1" ,}
                , React.createElement('div', { className: "text-sm text-amber-400 font-bold font-mono"   ,}, (t0.total / PI).toFixed(2), "π")
                , React.createElement('div', { className: "text-xs text-gray-500" ,}, "= S/ℏ" )
              )
            )
          )

          , React.createElement('div', { className: "bg-gray-900 rounded-xl border border-gray-800 p-2 mb-3"     ,}
            , React.createElement('div', { className: "text-xs text-gray-400 text-center mb-1"   ,}, "Winkel addieren sich: dφ₁ + dφ₂ + ··· + dφ_N = S/ℏ"           )
            , React.createElement('svg', { viewBox: "0 0 400 40"   , className: "w-full",}
              , t0.dPh.map((dp, i) => {
                const w = 340 / nSegs;
                const x = 30 + i * w;
                return (
                  React.createElement('g', { key: i,}
                    , React.createElement('rect', { x: x, y: "5", width: w - 1, height: "18", rx: "2",
                      fill: `hsl(${phHue(t0.cum[i])},50%,30%)`, stroke: `hsl(${phHue(t0.cum[i])},60%,45%)`, strokeWidth: "0.5",} )
                    , nSegs <= 15 && (
                      React.createElement('text', { x: x + w / 2, y: "17", textAnchor: "middle", fill: "white", fontSize: "5", opacity: "0.8",}
                        , (dp / PI).toFixed(1), "π"
                      )
                    )
                  )
                );
              })
              , React.createElement('text', { x: "200", y: "36", textAnchor: "middle", fill: "#fbbf24", fontSize: "8", fontWeight: "bold",}, "Σ = "
                  , (t0.total / PI).toFixed(2), "π — das ist S/ℏ für diesen Weg"
              )
            )
          )

          , React.createElement('div', { className: "bg-gray-900 rounded-xl p-4 border border-gray-800 space-y-3"     ,}
            , React.createElement('div', null
              , React.createElement('label', { className: "text-xs text-amber-400 flex justify-between"   ,}
                , React.createElement('span', null, "Verformung α (Abweichung vom geraden Weg)"     )
                , React.createElement('span', { className: "font-mono",}, alpha.toFixed(2))
              )
              , React.createElement('input', { type: "range", min: "-40", max: "40", value: Math.round(alpha * 100),
                onChange: e => setAlpha(+e.target.value / 100), className: "w-full accent-amber-500" ,} )
              , React.createElement('div', { className: "flex justify-between text-xs text-gray-600"   ,}
                , React.createElement('span', null, "↓")
                , React.createElement('span', { className: "text-amber-700",}, "α = 0 ist der klassische Weg"      )
                , React.createElement('span', null, "↑")
              )
            )
            , React.createElement('div', null
              , React.createElement('label', { className: "text-xs text-cyan-400 flex justify-between"   ,}
                , React.createElement('span', null, "Schritte N" ), React.createElement('span', { className: "font-mono",}, nSegs)
              )
              , React.createElement('input', { type: "range", min: "3", max: "25", value: nSegs,
                onChange: e => setNSegs(+e.target.value), className: "w-full accent-cyan-500" ,} )
            )
          )

          , React.createElement('div', { className: "mt-3 text-xs text-gray-400 bg-gray-900 rounded-xl p-3 border border-gray-800 leading-relaxed"        ,}
            , React.createElement('strong', { className: "text-amber-300",}, "Was du siehst:"  ), " Jeder Abschnitt liefert einen kleinen Winkel dφ. Die goldenen Zeiger entlang des Weges zeigen die "
                  , React.createElement('em', null, "kumulative"), " Phase — wie der Gesamtwinkel wächst. Rechts: der Ergebnis-Pfeil mit Winkel S/ℏ. Verschiebe α und beobachte: der gerade Weg (α=0) hat die "

                  , React.createElement('strong', { className: "text-white",}, "kleinste Wirkung" ), ". Jede Abweichung erhöht S."

          )
        )
      )

      , tab === 1 && (
        React.createElement('div', null
          , React.createElement('div', { className: "grid grid-cols-2 gap-2 mb-3"   ,}
            , React.createElement('div', { className: "bg-cyan-950 border border-cyan-800 rounded-xl p-2.5 text-center"     ,}
              , React.createElement('div', { className: "text-xs text-cyan-300 font-bold mb-0.5"   ,}, "Nahe am klassischen Weg"   )
              , React.createElement('div', { className: "text-xs text-cyan-400" ,}, "S ändert sich kaum → Pfeile "      , React.createElement('strong', { className: "text-white",}, "verstärken"), " sich" )
            )
            , React.createElement('div', { className: "bg-rose-950 border border-rose-800 rounded-xl p-2.5 text-center"     ,}
              , React.createElement('div', { className: "text-xs text-rose-300 font-bold mb-0.5"   ,}, "Fern vom klassischen Weg"   )
              , React.createElement('div', { className: "text-xs text-rose-400" ,}, "S ändert sich wild → Pfeile "      , React.createElement('strong', { className: "text-white",}, "löschen sich aus"  ))
            )
          )

          , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3 mb-3"    ,}
            , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
              , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}
                , NP, " Wege" , grav ? ' · mit Schwerkraft' : ' · kräftefrei'
              )
              , React.createElement('svg', { viewBox: "0 0 220 200"   , className: "w-full", onMouseLeave: () => setHover(null),}
                , t1.paths.map((p, i) => {
                  const d = p.pts.map((pt, j) => {
                    const x = 15 + pt.t * 190;
                    const y = 190 - pt.y * 170;
                    return `${j === 0 ? 'M' : 'L'}${x},${y}`;
                  }).join(' ');
                  const isCl = i === t1.ci;
                  const isH = hover === i;
                  return React.createElement('path', { key: i, d: d, fill: "none",
                    stroke: isCl ? '#22d3ee' : distCol(p.a),
                    strokeWidth: isCl ? 2.5 : isH ? 2.2 : 0.6,
                    opacity: hover !== null ? (isH || isCl ? 1 : 0.07) : isCl ? 1 : 0.3,
                    onMouseEnter: () => setHover(i), style: { cursor: 'pointer' },} );
                })
                , (() => {
                  const sy = 190 - classicalY(0, grav) * 170;
                  const ey = 190 - classicalY(1, grav) * 170;
                  return React.createElement(React.Fragment, null
                    , React.createElement('circle', { cx: 15, cy: sy, r: 5, fill: "#22d3ee",} )
                    , React.createElement('text', { x: 7, y: sy + 14, fill: "#22d3ee", fontSize: "9", fontWeight: "bold",}, "A")
                    , React.createElement('circle', { cx: 205, cy: ey, r: 5, fill: "#f472b6",} )
                    , React.createElement('text', { x: 210, y: ey + 4, fill: "#f472b6", fontSize: "9", fontWeight: "bold",}, "B")
                  );
                })()
                , [
                  { c: '#22d3ee', l: 'klassisch', x: 10 },
                  { c: '#34d399', l: 'nah', x: 60 },
                  { c: '#fbbf24', l: 'mittel', x: 93 },
                  { c: '#f87171', l: 'fern', x: 133 },
                ].map(({ c, l, x }) => (
                  React.createElement('g', { key: l,}
                    , React.createElement('rect', { x: x, y: 193, width: 7, height: 3, rx: 1, fill: c,} )
                    , React.createElement('text', { x: x + 10, y: 196, fill: "#64748b", fontSize: "5.5",}, l)
                  )
                ))
              )
            )

            , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
              , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Cornu-Spirale (Pfeiladdition)" )
              , React.createElement('svg', { viewBox: "0 0 220 200"   , className: "w-full", onMouseLeave: () => setHover(null),}
                , (() => {
                  const sp = t1.spi;
                  let mnx = Infinity, mxx = -Infinity, mny = Infinity, mxy = -Infinity;
                  for (const pt of sp) {
                    mnx = Math.min(mnx, pt.x); mxx = Math.max(mxx, pt.x);
                    mny = Math.min(mny, pt.y); mxy = Math.max(mxy, pt.y);
                  }
                  const pd = 0.15;
                  const rx = (mxx - mnx) || 0.01, ry = (mxy - mny) || 0.01;
                  mnx -= rx * pd; mxx += rx * pd; mny -= ry * pd; mxy += ry * pd;
                  const sc = Math.min(190 / (mxx - mnx), 170 / (mxy - mny));
                  const cxo = 110, cyo = 92;
                  const m = (x, y) => ({
                    sx: cxo + (x - (mnx + mxx) / 2) * sc,
                    sy: cyo + (y - (mny + mxy) / 2) * sc
                  });
                  const els = [];
                  for (let i = 1; i < sp.length; i++) {
                    const a = m(sp[i - 1].x, sp[i - 1].y);
                    const b = m(sp[i].x, sp[i].y);
                    const pp = t1.paths[i - 1];
                    const isH = hover === i - 1;
                    const isCl = i - 1 === t1.ci;
                    els.push(
                      React.createElement('line', { key: i, x1: a.sx, y1: a.sy, x2: b.sx, y2: b.sy,
                        stroke: isCl ? '#22d3ee' : distCol(pp.a),
                        strokeWidth: isCl ? 2.5 : isH ? 2.5 : 0.8,
                        opacity: hover !== null ? (isH || isCl ? 1 : 0.1) : 0.65,
                        onMouseEnter: () => setHover(i - 1), style: { cursor: 'pointer' },} )
                    );
                  }
                  const s = m(0, 0), e = m(t1.tx, t1.ty);
                  els.push(React.createElement('line', { key: "t", x1: s.sx, y1: s.sy, x2: e.sx, y2: e.sy,
                    stroke: "#fbbf24", strokeWidth: "3.5", opacity: "0.9",} ));
                  els.push(React.createElement('circle', { key: "cs", cx: s.sx, cy: s.sy, r: "3.5", fill: "#22d3ee",} ));
                  els.push(React.createElement('circle', { key: "ce", cx: e.sx, cy: e.sy, r: "3.5", fill: "#fbbf24",} ));
                  const tl = Math.sqrt(t1.tx ** 2 + t1.ty ** 2);
                  els.push(
                    React.createElement('text', { key: "p", x: "110", y: "195", textAnchor: "middle", fill: "#64748b", fontSize: "7",}, "Gesamtpfeil (gelb) · |K|² = "
                           , (tl * tl).toFixed(4)
                    )
                  );
                  return els;
                })()
              )
            )
          )

          , React.createElement('div', { className: "bg-gray-900 rounded-xl border border-gray-800 p-2 mb-3"     ,}
            , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Wirkung S(α) — stationär beim klassischen Weg (α = 0)"

            )
            , React.createElement('svg', { viewBox: "0 0 400 80"   , className: "w-full",}
              , React.createElement('line', { x1: "30", y1: "65", x2: "370", y2: "65", stroke: "#334155", strokeWidth: "0.5",} )
              , React.createElement('line', { x1: "200", y1: "5", x2: "200", y2: "68", stroke: "#334155", strokeWidth: "0.5", strokeDasharray: "2,2",} )
              , React.createElement('text', { x: "200", y: "78", textAnchor: "middle", fill: "#22d3ee", fontSize: "7",}, "α = 0 (klassisch)"   )
              , React.createElement('text', { x: "375", y: "78", textAnchor: "end", fill: "#475569", fontSize: "6",}, "Verformung α →"  )
              , (() => {
                const sMin = t1.paths[t1.ci].S;
                const sMax = t1.paths[0].S;
                const range = sMax - sMin || 1;
                const pts = t1.paths.map(p => {
                  const x = 200 + (p.a / AMAX) * 170;
                  const y = 62 - ((p.S - sMin) / range) * 50;
                  return `${x},${y}`;
                }).join(' ');
                return React.createElement('polyline', { points: pts, fill: "none", stroke: "#c084fc", strokeWidth: "2",} );
              })()
              , React.createElement('text', { x: "200", y: "59", textAnchor: "middle", fill: "#22d3ee", fontSize: "6.5",}, "← dS/dα ≈ 0 →"    )
              , React.createElement('text', { x: "55", y: "15", fill: "#f87171", fontSize: "6",}, "↻ Phasen drehen wild"   )
              , React.createElement('text', { x: "345", y: "15", fill: "#f87171", fontSize: "6", textAnchor: "end",}, "Phasen drehen wild ↻"   )
              , hover !== null && (() => {
                const p = t1.paths[hover];
                const sMin = t1.paths[t1.ci].S;
                const sMax = t1.paths[0].S;
                const range = sMax - sMin || 1;
                const x = 200 + (p.a / AMAX) * 170;
                const y = 62 - ((p.S - sMin) / range) * 50;
                return React.createElement('circle', { cx: x, cy: y, r: "4", fill: "#fbbf24", stroke: "#000", strokeWidth: "0.8",} );
              })()
            )
          )

          , React.createElement('div', { className: "bg-gray-900 rounded-xl p-4 border border-gray-800 space-y-3"     ,}
            , React.createElement('div', null
              , React.createElement('label', { className: "text-xs text-violet-400 flex justify-between"   ,}
                , React.createElement('span', null, "1/ℏ — von Quantenwelt zu klassischer Welt"      )
                , React.createElement('span', { className: "font-mono",}, hInv.toFixed(0))
              )
              , React.createElement('input', { type: "range", min: "0", max: "100", value: hSlider,
                onChange: e => setHSlider(+e.target.value), className: "w-full accent-violet-500" ,} )
              , React.createElement('div', { className: "flex justify-between text-xs text-gray-600"   ,}
                , React.createElement('span', null, "ℏ groß (Quanten)"  ), React.createElement('span', null, "ℏ klein (Klassisch)"  )
              )
            )
            , React.createElement('div', { className: "flex gap-2" ,}
              , React.createElement('button', { onClick: () => setGrav(!grav),
                className: `flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${
                  grav ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-gray-800 text-gray-400 border-gray-700'
                }`,}
                , grav ? '🌍 Schwerkraft AN' : '○ Schwerkraft AUS'
              )
              , React.createElement('button', { onClick: () => { setHSlider(35); setGrav(true); setHover(null); },
                className: "px-4 py-2 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"         ,}, "↺ Reset"

              )
            )
          )

          , React.createElement('div', { className: "mt-3 flex gap-2 flex-wrap justify-center"    ,}
            , [
              { l: '🔬 Quantenwelt', h: 3, g: false },
              { l: '⚖️ Übergang', h: 30, g: false },
              { l: '🎯 Klassisch (frei)', h: 88, g: false },
              { l: '⚽ Ball (Quanten)', h: 12, g: true },
              { l: '⚽ Ball → Parabel', h: 88, g: true },
            ].map((p, i) => (
              React.createElement('button', { key: i, onClick: () => { setHSlider(p.h); setGrav(p.g); },
                className: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 text-gray-500 border border-gray-700 hover:bg-gray-700 hover:text-gray-300 transition-all"           ,}
                , p.l
              )
            ))
          )

          , React.createElement('div', { className: "mt-3 text-xs text-gray-400 bg-gray-900 rounded-xl p-3 border border-gray-800 leading-relaxed"        ,}
            , hSlider < 15 ? (
              React.createElement('span', null, React.createElement('strong', { className: "text-emerald-400",}, "Quantenregime:"), " ℏ ist groß, die Phasen drehen langsam. Selbst wilde Wege tragen bei – die Spirale ist weit offen, kein Weg dominiert. So „sieht\" ein Elektron die Welt: es nimmt alle Wege gleichzeitig."

                          )
            ) : hSlider < 55 ? (
              React.createElement('span', null, React.createElement('strong', { className: "text-cyan-400",}, "Übergangsbereich:"), " Die Spiralenden rollen sich ein. Wege fern vom klassischen Pfad (rot) löschen sich gegenseitig aus – ihre Pfeile drehen zu schnell und spiralen. Nahe Wege (grün/cyan) verstärken sich. Der klassische Pfad kristallisiert sich heraus."

                          )
            ) : (
              React.createElement('span', null, React.createElement('strong', { className: "text-amber-400",}, "Klassischer Grenzfall:" ), " Die Spiralen sind eng aufgerollt – alles außer dem schmalen Korridor um den klassischen Weg löscht sich aus. Der Gesamtpfeil wird vom klassischen Weg bestimmt. Newton gewinnt."


                , grav && React.createElement(React.Fragment, null, " " , React.createElement('strong', { className: "text-white",}, " Der Ball fliegt auf der Parabel"      ), " – nicht weil die Natur den Weg „auswählt\", sondern weil sich alle anderen Wege gegenseitig vernichten."
                       ))
            )
          )
        )
      )

      , React.createElement('div', { className: "mt-3 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"     ,}
        , React.createElement('button', { onClick: () => setInfo(!info),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center transition-colors"         ,}
          , React.createElement('span', { className: "font-semibold",}, "💡 Lesetipps für die Visualisierung"    )
          , React.createElement('span', { className: "text-gray-600",}, info ? '▲' : '▼')
        )
        , info && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed space-y-2"     ,}
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-amber-300",}, "Tab ①:" ), " Ein einzelner Weg, zerlegt in Schritte. Die goldenen Zeiger entlang des Weges zeigen die "
                      , React.createElement('em', null, "kumulative Phase" ), " – wie der Gesamtwinkel Schritt für Schritt wächst. Die farbigen Blöcke darunter zeigen die Einzelbeiträge dφ. Der Ergebnis-Pfeil rechts hat den Gesamtwinkel S/ℏ. Verschiebe α: bei α=0 ist S minimal."


            )
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-violet-300",}, "Tab ②:" ), " 121 Wege gleichzeitig. Links farbcodiert nach Abstand zum klassischen Weg. Rechts die "
                   , React.createElement('strong', { className: "text-white",}, "Cornu-Spirale"), ": Jeder Weg liefert einen Pfeil, alle addiert. In der Mitte (cyan) zeigen sie gleich → gerade Strecke. An den Rändern (rot) spiralen sie → Aufrollung. Der gelbe Gesamtpfeil zeigt: nur die Mitte zählt. Hover über einen Weg, um ihn in beiden Diagrammen zu finden."



            )
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-white",}, "Probier die Presets:"  ), " Starte bei „Quantenwelt\" (offene Spirale) und arbeite dich zu „Ball → Parabel\" durch. Beobachte, wie die Spirale sich zusammenzieht und der klassische Weg dominiert."


            )
          )
        )
      )
    )
  );
}
window.ActionPhaseViz = ActionPhaseViz;
})();

// === FourierExplorer ===
(function() {
const PI = Math.PI;
const NH = 7;
const COLS = ['#f87171','#fb923c','#fbbf24','#34d399','#22d3ee','#818cf8','#c084fc'];
const NAMES = ['1×','2×','3×','4×','5×','6×','7×'];

const PRESETS = [
  { n: 'Grundton', a: [1,0,0,0,0,0,0] },
  { n: 'Grundton+Oktave', a: [1,0.6,0,0,0,0,0] },
  { n: '≈ Rechteck', a: [1,0,0.33,0,0.2,0,0.14] },
  { n: '≈ Sägezahn', a: [1,0.5,0.33,0.25,0.2,0.17,0.14] },
  { n: 'Glocke', a: [0.15,0.5,1,0.7,0.4,0.2,0.08] },
  { n: 'Alle gleich', a: [0.5,0.5,0.5,0.5,0.5,0.5,0.5] },
];

 function FourierExplorer() {
  const [amps, setAmps] = React.useState([1,0,0.33,0,0.2,0,0.14]);
  const [phase, setPhase] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [showParts, setShowParts] = React.useState(true);
  const [probeT, setProbeT] = React.useState(18);
  const [info, setInfo] = React.useState(false);
  const rafRef = React.useRef(null);
  const prevRef = React.useRef(0);

  React.useEffect(() => {
    if (!playing) {
      prevRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (now) => {
      if (prevRef.current) {
        const dt = (now - prevRef.current) * 0.001;
        setPhase(p => p + dt * 0.7);
      }
      prevRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing]);

  const setAmp = (i, v) => { const a = [...amps]; a[i] = v; setAmps(a); };
  const probeX = probeT / 100;

  const wv = (x, i) => amps[i] * Math.sin((i+1) * 2 * PI * x + (i+1) * phase);
  const sumW = (x) => { let s = 0; for (let i = 0; i < NH; i++) s += wv(x, i); return s; };

  const maxR = amps.reduce((s, a) => s + Math.abs(a), 0) || 0.5;
  const wSc = 65 / maxR;

  const mkP = (fn, steps = 220) => {
    let d = '';
    for (let j = 0; j <= steps; j++) {
      const x = j / steps;
      d += (j === 0 ? 'M' : 'L') + (10 + x * 380).toFixed(1) + ',' + (85 - fn(x) * wSc).toFixed(1);
    }
    return d;
  };

  const eSc = 40 / maxR;
  const epi = React.useMemo(() => {
    const arr = [];
    let cx = 0, cy = 0;
    for (let i = 0; i < NH; i++) {
      const ang = (i+1) * (2 * PI * probeX + phase);
      const r = amps[i];
      const nx = cx + r * Math.cos(ang);
      const ny = cy + r * Math.sin(ang);
      arr.push({ x1: cx, y1: cy, x2: nx, y2: ny, r, i, ang });
      cx = nx; cy = ny;
    }
    return { arr, tx: cx, ty: cy };
  }, [amps, phase, probeX]);

  const probeVal = sumW(probeX);

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto select-none"       ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-1 bg-gradient-to-r from-rose-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent"          ,}, "Fourier: Jeder Klang ist eine Summe"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-3"   ,}, "Obertöne mischen · Signale zerlegen · Rotierende Pfeile"       )

      , React.createElement('div', { className: "bg-amber-950 border border-amber-800 rounded-xl p-2.5 text-center mb-3"      ,}
        , React.createElement('div', { className: "text-xs text-amber-300 font-bold mb-0.5"   ,}, "Fouriers Erkenntnis" )
        , React.createElement('div', { className: "text-xs text-amber-400" ,}, "Jedes Signal = "   , React.createElement('strong', { className: "text-white",}, "Summe von Sinuswellen"  ), " · Jede Sinuswelle = "     , React.createElement('strong', { className: "text-white",}, "ein rotierender Pfeil"  ))
      )

      , React.createElement('div', { className: "flex flex-wrap gap-1.5 mb-3 justify-center"    ,}
        , PRESETS.map((p, i) => (
          React.createElement('button', { key: i, onClick: () => setAmps([...p.a]),
            className: "px-2 py-1 rounded-lg text-xs font-semibold bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-white transition-all"           ,}
            , p.n
          )
        ))
      )

      , React.createElement('div', { className: "bg-gray-900 rounded-xl border border-gray-800 p-2 mb-3"     ,}
        , React.createElement('div', { className: "text-xs text-gray-500 text-center mb-1"   ,}
          , React.createElement('span', { className: "text-white font-semibold" ,}, "Weiß"), " = Summe aller Obertöne · "      , React.createElement('span', { className: "text-gray-300",}, "Farbig"), " = einzelne Harmonische"
        )
        , React.createElement('svg', { viewBox: "0 0 400 170"   , className: "w-full",}
          , React.createElement('line', { x1: "10", y1: "85", x2: "390", y2: "85", stroke: "#334155", strokeWidth: "0.5",} )
          , showParts && amps.map((a, i) => (
            Math.abs(a) > 0.005 && (
              React.createElement('path', { key: i, d: mkP(x => wv(x, i)),
                fill: "none", stroke: COLS[i], strokeWidth: "1.3", opacity: "0.3",} )
            )
          ))
          , React.createElement('path', { d: mkP(sumW), fill: "none", stroke: "white", strokeWidth: "2.5",} )

          , React.createElement('line', { x1: 10 + probeX * 380, y1: "5", x2: 10 + probeX * 380, y2: "165",
            stroke: "#fbbf24", strokeWidth: "0.8", strokeDasharray: "3,3", opacity: "0.45",} )
          , React.createElement('circle', { cx: 10 + probeX * 380, cy: 85 - probeVal * wSc, r: "4.5", fill: "#fbbf24", stroke: "#111", strokeWidth: "0.7",} )

          , showParts && amps.map((a, i) => {
            if (Math.abs(a) < 0.02) return null;
            const v = wv(probeX, i);
            return React.createElement('circle', { key: `d${i}`, cx: 10 + probeX * 380, cy: 85 - v * wSc, r: "2", fill: COLS[i], opacity: "0.55",} );
          })

          , React.createElement('text', { x: "200", y: "167", textAnchor: "middle", fill: "#475569", fontSize: "7",}, "Zeit →" )
        )
        , React.createElement('div', { className: "px-2 mt-1" ,}
          , React.createElement('input', { type: "range", min: "2", max: "98", value: probeT,
            onChange: e => setProbeT(+e.target.value), className: "w-full accent-amber-500" ,} )
          , React.createElement('div', { className: "text-xs text-gray-600 text-center -mt-0.5"   ,}, "↔ Messpunkt verschieben"  )
        )
      )

      , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3 mb-3"    ,}
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-3"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold mb-2"   ,}, "🎛 Mischpult – Obertöne regeln"    )
          , amps.map((a, i) => (
            React.createElement('div', { key: i, className: "flex items-center gap-2 mb-1"   ,}
              , React.createElement('div', { className: "w-6 text-right text-xs font-bold font-mono"    , style: { color: COLS[i] },}, NAMES[i])
              , React.createElement('div', { className: "flex-1 relative h-5 flex items-center"    ,}
                , React.createElement('div', { className: "absolute left-0 top-1 bottom-1 rounded-full opacity-20 transition-all"      ,
                  style: { width: `${a * 100}%`, backgroundColor: COLS[i] },} )
                , React.createElement('input', { type: "range", min: "0", max: "100", value: Math.round(a * 100),
                  onChange: e => setAmp(i, +e.target.value / 100),
                  className: "w-full relative z-10"  , style: { accentColor: COLS[i] },} )
              )
              , React.createElement('div', { className: "w-7 text-right text-xs font-mono text-gray-500"    ,}, a.toFixed(2))
            )
          ))
          , React.createElement('div', { className: "text-xs text-gray-600 text-center mt-2"   ,}
            , amps.filter(a => a > 0.01).length, " von 7 Obertönen aktiv"
          )
        )

        , React.createElement('div', { className: "sm:w-48 bg-gray-900 rounded-xl border border-gray-800 p-2 flex flex-col items-center"        ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-1"    ,}, "Rotierende Pfeile (Zeiger)"  )
          , React.createElement('svg', { viewBox: "0 0 130 130"   , className: "w-full",}
            , React.createElement('circle', { cx: "65", cy: "65", r: "48", fill: "none", stroke: "#1e293b", strokeWidth: "0.3",} )
            , React.createElement('line', { x1: "15", y1: "65", x2: "115", y2: "65", stroke: "#1e293b", strokeWidth: "0.3",} )
            , React.createElement('line', { x1: "65", y1: "15", x2: "65", y2: "115", stroke: "#1e293b", strokeWidth: "0.3",} )

            , epi.arr.map((ar) => {
              if (ar.r < 0.005) return null;
              const sx = 65 + ar.x1 * eSc, sy = 65 - ar.y1 * eSc;
              const ex = 65 + ar.x2 * eSc, ey = 65 - ar.y2 * eSc;
              return (
                React.createElement('g', { key: ar.i,}
                  , React.createElement('circle', { cx: sx, cy: sy, r: ar.r * eSc, fill: "none", stroke: COLS[ar.i], strokeWidth: "0.5", opacity: "0.2",} )
                  , React.createElement('line', { x1: sx, y1: sy, x2: ex, y2: ey, stroke: COLS[ar.i], strokeWidth: "2.5", strokeLinecap: "round", opacity: "0.8",} )
                  , React.createElement('circle', { cx: ex, cy: ey, r: "1.5", fill: COLS[ar.i], opacity: "0.6",} )
                )
              );
            })

            , (() => {
              const ex = 65 + epi.tx * eSc, ey = 65 - epi.ty * eSc;
              return React.createElement(React.Fragment, null
                , React.createElement('line', { x1: ex, y1: ey, x2: "125", y2: ey, stroke: "#fbbf24", strokeWidth: "0.5", strokeDasharray: "2,1.5", opacity: "0.4",} )
                , React.createElement('circle', { cx: ex, cy: ey, r: "4", fill: "#fbbf24", stroke: "#111", strokeWidth: "0.7",} )
                , React.createElement('circle', { cx: "65", cy: "65", r: "2", fill: "#64748b",} )
                , React.createElement('text', { x: "127", y: ey + 2.5, fill: "#fbbf24", fontSize: "6", fontWeight: "bold", opacity: "0.6",}
                  , probeVal >= 0 ? '+' : '', probeVal.toFixed(2)
                )
              );
            })()

            , React.createElement('text', { x: "65", y: "126", textAnchor: "middle", fill: "#475569", fontSize: "5",}, "↑ Höhe = Wert am Messpunkt"

            )
          )
          , React.createElement('div', { className: "text-xs text-gray-500 text-center leading-snug mt-1"    ,}, "Jeder Oberton = ein Pfeil."
                , React.createElement('br', null ), "Schnellere Obertöne drehen schneller."
               , React.createElement('br', null )
            , React.createElement('strong', { className: "text-amber-400",}, "Gelb"), " = Endpunkt der Kette."
          )
        )
      )

      , React.createElement('div', { className: "flex gap-2 flex-wrap justify-center mb-3"    ,}
        , React.createElement('button', { onClick: () => { setPlaying(!playing); if (!playing) prevRef.current = 0; },
          className: `px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
            playing ? 'bg-rose-950 text-rose-300 border-rose-700' : 'bg-emerald-950 text-emerald-300 border-emerald-700'
          }`,}, playing ? '⏸ Stopp' : '▶ Abspielen')
        , React.createElement('button', { onClick: () => setShowParts(!showParts),
          className: `px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
            showParts ? 'bg-violet-950 text-violet-300 border-violet-700' : 'bg-gray-800 text-gray-400 border-gray-700'
          }`,}, showParts ? '🌈 Einzeltöne AN' : '○ Einzeltöne AUS')
        , React.createElement('button', { onClick: () => { setAmps([1,0,0.33,0,0.2,0,0.14]); setPhase(0); setPlaying(false); setProbeT(18); },
          className: "px-4 py-2 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"         ,}, "↺ Reset" )
      )

      , React.createElement('div', { className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"    ,}
        , React.createElement('button', { onClick: () => setInfo(!info),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center"        ,}
          , React.createElement('span', { className: "font-semibold",}, "💡 Experimente zum Ausprobieren"   )
          , React.createElement('span', { className: "text-gray-600",}, info ? '▲' : '▼')
        )
        , info && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed space-y-2"     ,}
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-rose-300",}, "Experiment 1:" ), " Starte mit „Grundton\" (ein Pfeil). Drück Abspielen. Rechts dreht sich ein einzelner Pfeil im Kreis – links siehst du die Sinuswelle laufen. Die Höhe des Pfeils IST der Wert der Kurve am Messpunkt."


            )
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-amber-300",}, "Experiment 2:" ), " Wähle „Grundton+Oktave\" (zwei Pfeile). Der zweite dreht sich "
                  , React.createElement('em', null, "doppelt so schnell"  ), ". Beobachte, wie die beiden Pfeile manchmal in dieselbe Richtung zeigen (Verstärkung) und manchmal gegeneinander (Auslöschung)."

            )
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-cyan-300",}, "Experiment 3:" ), " Wähle „≈ Rechteck\". Schalte die Einzeltöne AUS und beobachte nur die weiße Summe. Dann schalte sie wieder AN und sieh: Die Ecken entstehen, weil sich viele Sinuswellen an den richtigen Stellen verstärken."


            )
            , React.createElement('p', null
              , React.createElement('strong', { className: "text-emerald-300",}, "Experiment 4:" ), " Wähle „Alle gleich\" und drück Abspielen. Alle Pfeile gleich lang, aber verschieden schnell. Beobachte das komplexe Muster, das entsteht – und wie der gelbe Endpunkt wild herumspringt, weil die Pfeile sich ständig anders überlagern."


            )
          )
        )
      )
    )
  );
}
window.FourierExplorer = FourierExplorer;
})();

// === StandingWaves ===
(function() {
const PI = Math.PI;

 function StandingWaves() {
  const [nSlider, setNSlider] = React.useState(100);
  const [playing, setPlaying] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [showProb, setShowProb] = React.useState(false);
  const [isQuantum, setIsQuantum] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const rafRef = React.useRef(null);
  const prevRef = React.useRef(0);

  const n = nSlider / 100;
  const nInt = Math.round(n);
  const fits = Math.abs(n - nInt) < 0.05 && nInt >= 1 && nInt <= 7;

  React.useEffect(() => {
    if (!playing) {
      prevRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (now) => {
      if (prevRef.current) {
        setTime(t => t + (now - prevRef.current) * 0.001);
      }
      prevRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing]);

  const LX = 45, RX = 355, MY = 88, AMP = 55;

  const getWave = (x) => {
    const s = Math.sin(n * PI * x);
    if (showProb && isQuantum) return s * s;
    const tFactor = playing ? Math.cos(n * 1.8 * time) : 1;
    return s * tFactor;
  };

  const wavePath = () => {
    let d = '';
    const steps = 250;
    for (let i = 0; i <= steps; i++) {
      const x = i / steps;
      const v = getWave(x);
      const sx = LX + x * (RX - LX);
      const sy = (showProb && isQuantum) ? MY - v * AMP * 0.9 : MY - v * AMP;
      d += (i === 0 ? 'M' : 'L') + sx.toFixed(1) + ',' + sy.toFixed(1);
    }
    return d;
  };

  const fillPath = () => {
    return wavePath() + ` L${RX},${MY} L${LX},${MY} Z`;
  };

  const maxE = 49;
  const eY = (e) => 192 - (Math.min(e, maxE) / maxE) * 172;
  const waveColor = fits ? '#34d399' : '#f87171';

  const tFactor = playing ? Math.cos(n * 1.8 * time) : 1;
  const rightDotY = MY - Math.sin(n * PI) * tFactor * AMP;

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto select-none"       ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"          ,}, "Stehende Wellen: Warum nur bestimmte Töne erlaubt sind"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-3"   ,}, "Randbedingungen · Eigenfrequenzen · Energiequantisierung"    )

      , React.createElement('div', { className: "bg-cyan-950 border border-cyan-800 rounded-xl p-2.5 text-center mb-3"      ,}
        , React.createElement('div', { className: "text-xs text-cyan-300 font-bold mb-0.5"   ,}, "Das Prinzip" )
        , React.createElement('div', { className: "text-xs text-cyan-400" ,}, "Welle + Begrenzung = "
              , React.createElement('strong', { className: "text-white",}, "nur bestimmte Muster passen"   ), " → Diskrete Energien"
        )
      )

      , React.createElement('div', { className: "flex gap-2 justify-center mb-3"   ,}
        , React.createElement('button', { onClick: () => { setIsQuantum(false); setShowProb(false); },
          className: `px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            !isQuantum ? 'bg-amber-950 text-amber-300 border-amber-700' : 'bg-gray-800 text-gray-500 border-gray-700'
          }`,}, "🎸 Gitarrensaite" )
        , React.createElement('button', { onClick: () => setIsQuantum(true),
          className: `px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isQuantum ? 'bg-violet-950 text-violet-300 border-violet-700' : 'bg-gray-800 text-gray-500 border-gray-700'
          }`,}, "⚛ Quantenteilchen" )
      )

      , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3 mb-3"    ,}
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 text-center mb-1"   ,}
            , isQuantum
              ? (showProb ? 'Aufenthaltswahrscheinlichkeit |ψ|² im Kasten' : 'Wellenfunktion ψ im Kasten')
              : 'Schwingung einer Saite zwischen zwei festen Enden'
          )
          , React.createElement('svg', { viewBox: "0 0 400 175"   , className: "w-full",}
            , React.createElement('line', { x1: LX, y1: MY, x2: RX, y2: MY, stroke: "#334155", strokeWidth: "0.5", strokeDasharray: "3,3",} )

            , React.createElement('rect', { x: LX - 7, y: "18", width: "7", height: "140", rx: "2",
              fill: isQuantum ? '#4c1d95' : '#78350f', opacity: "0.7",} )
            , React.createElement('rect', { x: RX, y: "18", width: "7", height: "140", rx: "2",
              fill: isQuantum ? '#4c1d95' : '#78350f', opacity: "0.7",} )
            , React.createElement('text', { x: LX - 3, y: "14", textAnchor: "middle", fill: "#64748b", fontSize: "6",}
              , isQuantum ? 'Wand' : 'Steg'
            )
            , React.createElement('text', { x: RX + 3, y: "14", textAnchor: "middle", fill: "#64748b", fontSize: "6",}
              , isQuantum ? 'Wand' : 'Sattel'
            )

            , fits && !(showProb && isQuantum) && Array.from({ length: nInt - 1 }, (_, i) => {
              const nx = LX + ((i + 1) / nInt) * (RX - LX);
              return (
                React.createElement('g', { key: i,}
                  , React.createElement('circle', { cx: nx, cy: MY, r: "3.5", fill: "none", stroke: "#94a3b8", strokeWidth: "0.7", opacity: "0.4",} )
                  , React.createElement('text', { x: nx, y: MY + 11, textAnchor: "middle", fill: "#64748b", fontSize: "5", opacity: "0.5",}, "Knoten")
                )
              );
            })

            , showProb && isQuantum && React.createElement('path', { d: fillPath(), fill: waveColor, opacity: "0.12",} )
            , React.createElement('path', { d: wavePath(), fill: "none", stroke: waveColor, strokeWidth: "2.5",} )

            , !(showProb && isQuantum) && (
              React.createElement('g', null
                , React.createElement('circle', { cx: RX, cy: rightDotY, r: "5", fill: fits ? '#34d399' : '#f87171', opacity: "0.8",} )
                , fits ? (
                  React.createElement('text', { x: RX + 14, y: MY + 3, fill: "#34d399", fontSize: "8", fontWeight: "bold",}, "✓")
                ) : (
                  React.createElement('text', { x: RX + 12, y: rightDotY + 3, fill: "#f87171", fontSize: "7", fontWeight: "bold",}, "≠ 0" )
                )
              )
            )

            , React.createElement('text', { x: (LX + RX) / 2, y: "170", textAnchor: "middle",
              fill: fits ? '#34d399' : '#f87171', fontSize: "7.5", fontWeight: "bold",}
              , fits
                ? `n = ${nInt}: ${nInt} ${nInt === 1 ? 'Halbwelle passt' : 'Halbwellen passen'} exakt ✓`
                : `n = ${n.toFixed(2)}: passt NICHT — Welle ≠ 0 am Rand`
            )
          )

          , React.createElement('div', { className: "px-3 mt-1" ,}
            , React.createElement('div', { className: "flex justify-between text-xs mb-0.5"   ,}
              , React.createElement('span', { className: "text-gray-500",}, "n = "  , React.createElement('strong', { className: fits ? 'text-emerald-400' : 'text-rose-400',}, n.toFixed(2)))
              , React.createElement('span', { className: `font-bold ${fits ? 'text-emerald-400' : 'text-rose-400'}`,}
                , fits ? '✓ Eigenzustand!' : '✗ Verboten'
              )
            )
            , React.createElement('input', { type: "range", min: "30", max: "750", value: nSlider,
              onChange: e => setNSlider(+e.target.value),
              className: "w-full accent-cyan-500" ,} )
            , React.createElement('div', { className: "text-xs text-gray-600 text-center"  ,}, "← Wellenlänge stufenlos variieren →"    )
          )

          , React.createElement('div', { className: "flex gap-1 justify-center mt-2 flex-wrap"    ,}
            , [1, 2, 3, 4, 5, 6, 7].map(nn => (
              React.createElement('button', { key: nn, onClick: () => setNSlider(nn * 100),
                className: `w-8 h-8 rounded-lg text-xs font-bold border transition-all ${
                  fits && nInt === nn
                    ? 'bg-emerald-900 text-emerald-300 border-emerald-600 ring-1 ring-emerald-500'
                    : 'bg-gray-800 text-gray-500 border-gray-700 hover:bg-gray-700 hover:text-gray-300'
                }`,}, "n=", nn)
            ))
          )
        )

        , React.createElement('div', { className: "sm:w-36 bg-gray-900 rounded-xl border border-gray-800 p-2"     ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-0.5"    ,}, "Energieniveaus")
          , React.createElement('div', { className: "text-xs text-gray-600 text-center mb-1"   ,}, "E"
            , React.createElement('sub', null, "n"), " = n² · E"    , React.createElement('sub', null, "1")
          )
          , React.createElement('svg', { viewBox: "0 0 100 205"   , className: "w-full",}
            , React.createElement('line', { x1: "12", y1: "195", x2: "12", y2: "10", stroke: "#334155", strokeWidth: "0.5",} )
            , React.createElement('polygon', { points: "12,8 10,14 14,14"  , fill: "#475569",} )
            , React.createElement('text', { x: "6", y: "8", fill: "#64748b", fontSize: "6",}, "E")

            , [1, 2, 3, 4, 5, 6, 7].map(nn => {
              const e = nn * nn;
              const y = eY(e);
              const active = fits && nInt === nn;
              return (
                React.createElement('g', { key: nn, onClick: () => setNSlider(nn * 100), style: { cursor: 'pointer' },}
                  , React.createElement('line', { x1: "18", y1: y, x2: "68", y2: y,
                    stroke: active ? '#34d399' : '#475569', strokeWidth: active ? 2.5 : 0.8,
                    opacity: active ? 1 : 0.5,} )
                  , React.createElement('text', { x: "74", y: y + 2.5, fill: active ? '#34d399' : '#64748b',
                    fontSize: active ? '7' : '6', fontWeight: active ? 'bold' : 'normal',}, "n="
                    , nn
                  )
                  , React.createElement('text', { x: "16", y: y - 3.5, fill: active ? '#34d399' : '#64748b',
                    fontSize: "5", textAnchor: "end", opacity: active ? 1 : 0.4,}, e)
                  , active && (
                    React.createElement('circle', { cx: "43", cy: y, r: "3.5", fill: "#34d399", opacity: "0.4",}
                      , React.createElement('animate', { attributeName: "r", values: "3.5;5.5;3.5", dur: "1.2s", repeatCount: "indefinite",} )
                      , React.createElement('animate', { attributeName: "opacity", values: "0.4;0.1;0.4", dur: "1.2s", repeatCount: "indefinite",} )
                    )
                  )
                )
              );
            })

            , !fits && n >= 0.3 && n * n <= maxE * 1.05 && (
              React.createElement('line', { x1: "18", y1: eY(n * n), x2: "68", y2: eY(n * n),
                stroke: "#f87171", strokeWidth: "1.5", strokeDasharray: "3,2", opacity: "0.6",} )
            )
          )
          , React.createElement('div', { className: "text-xs text-gray-600 text-center mt-0.5 leading-tight"    ,}, "Abstände wachsen"
             , React.createElement('br', null ), "quadratisch!"
          )
        )
      )

      , React.createElement('div', { className: "flex gap-2 flex-wrap justify-center mb-3"    ,}
        , React.createElement('button', { onClick: () => { setPlaying(!playing); if (!playing) prevRef.current = 0; },
          className: `px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
            playing ? 'bg-rose-950 text-rose-300 border-rose-700' : 'bg-emerald-950 text-emerald-300 border-emerald-700'
          }`,}, playing ? '⏸ Stopp' : '▶ Schwingung')
        , isQuantum && (
          React.createElement('button', { onClick: () => setShowProb(!showProb),
            className: `px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
              showProb ? 'bg-amber-950 text-amber-300 border-amber-700' : 'bg-gray-800 text-gray-400 border-gray-700'
            }`,}, showProb ? '|ψ|² Aufenthaltsort' : 'ψ Wellenfunktion')
        )
        , React.createElement('button', { onClick: () => { setNSlider(100); setTime(0); setPlaying(false); setShowProb(false); },
          className: "px-4 py-2 rounded-lg text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"         ,}, "↺ Reset"

        )
      )

      , isQuantum && showProb && fits && (
        React.createElement('div', { className: "bg-violet-950 border border-violet-800 rounded-lg p-2 mb-3 text-xs text-violet-300 text-center"        ,}, "💡 |ψ|² zeigt, wo das Teilchen wahrscheinlich ist. Diese Verteilung ändert sich "
                      , React.createElement('strong', { className: "text-white",}, "nicht"), " mit der Zeit — ein reiner Eigenzustand ist stationär!"
          , nInt >= 2 && React.createElement('span', null, " Beachte die "   , nInt - 1, " " , nInt === 2 ? 'Nullstelle' : 'Nullstellen', ": dort ist das Teilchen "     , React.createElement('strong', { className: "text-white",}, "nie"), ".")
        )
      )

      , React.createElement('div', { className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"    ,}
        , React.createElement('button', { onClick: () => setShowInfo(!showInfo),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center"        ,}
          , React.createElement('span', { className: "font-semibold",}, "💡 Experimente zum Ausprobieren"   )
          , React.createElement('span', { className: "text-gray-600",}, showInfo ? '▲' : '▼')
        )
        , showInfo && (
          React.createElement('div', { className: "px-4 pb-3 text-xs text-gray-400 leading-relaxed space-y-2"     ,}
            , React.createElement('p', null, React.createElement('strong', { className: "text-emerald-300",}, "Experiment 1 – Durchstimmen:"   ), " Zieh den Regler langsam von links nach rechts. Der Punkt am rechten Rand zeigt, ob die Welle dort null wird (grün ✓) oder nicht (rot ≠ 0). Nur bei ganzzahligem n passt sie — alles dazwischen ist verboten."                                      )
            , React.createElement('p', null, React.createElement('strong', { className: "text-amber-300",}, "Experiment 2 – Stehende Welle:"    ), " Wähle n=3 und drücke ▶. Die Welle schwingt auf und ab, aber die Knotenpunkte bleiben fest. Nichts wandert — die Welle steht am Ort und vibriert."                          )
            , React.createElement('p', null, React.createElement('strong', { className: "text-cyan-300",}, "Experiment 3 – Aufenthaltsort:"   ), " Wechsle zu ⚛, wähle n=2, schalte auf |ψ|². Die Kurve zeigt die Aufenthaltswahrscheinlichkeit. In der Mitte: eine Nullstelle — dort ist das Teilchen "                        , React.createElement('em', null, "nie"), "! Drücke ▶: Die Verteilung bleibt fest."      )
            , React.createElement('p', null, React.createElement('strong', { className: "text-violet-300",}, "Experiment 4 – Energieleiter:"   ), " Klicke rechts auf die Niveaus n=1 bis n=7. Die Abstände: 1, 4, 9, 16, 25, 36, 49. Quadratisches Wachstum — kürzere Wellen kosten überproportional mehr Energie."                          )
            , React.createElement('p', null, React.createElement('strong', { className: "text-rose-300",}, "Experiment 5 – Gitarre vs. Quant:"     ), " Wechsle zwischen den Tabs. Mathematisch identisch! Bei der Gitarre ist es die Auslenkung der Saite, beim Teilchen die Wellenfunktion."                   )
          )
        )
      )
    )
  );
}
window.StandingWaves = StandingWaves;
})();

// === ThreeLanguages ===
(function() {
const PI = Math.PI;
const TAU = 2 * PI;

const languages = [
  {
    id: 'paths',
    label: 'Summe über Wege',
    icon: '🔀',
    color: 'from-blue-500 to-cyan-400',
    border: 'border-blue-500',
    bg: 'bg-blue-950',
    text: 'text-blue-300',
    accent: '#60a5fa',
    formula: 'K = Σ e^{iS/ℏ}',
    subtitle: 'Feynmans Pfadintegral',
    desc: 'Jeder mögliche Weg von A nach B trägt einen Pfeil bei. Die Wirkung S bestimmt den Winkel. Alle Pfeile addieren sich zur Gesamtamplitude.',
    thinks: 'Wege, Trajektorien, Wirkung',
    ignores: 'Energieniveaus, Eigenzustände',
    strength: 'Intuition für Interferenz und den klassischen Grenzfall',
  },
  {
    id: 'eigen',
    label: 'Summe über Eigenzustände',
    icon: '🎵',
    color: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-500',
    bg: 'bg-emerald-950',
    text: 'text-emerald-300',
    accent: '#34d399',
    formula: 'K = Σ ψₙ(B)·ψₙ*(A)·e^{-iωₙt}',
    subtitle: 'Spektrale Zerlegung',
    desc: 'Jeder Eigenzustand ψₙ trägt einen Pfeil bei, der sich mit der Eigenfrequenz ωₙ = Eₙ/ℏ dreht. Die „Lautstärke" hängt davon ab, wie stark der Eigenzustand an A und B lebt.',
    thinks: 'Energieniveaus, stehende Wellen, Obertöne',
    ignores: 'Wege, Trajektorien',
    strength: 'Berechnung von Spektren und Übergängen',
  },
  {
    id: 'fourier',
    label: 'Fourier-Zerlegung',
    icon: '〰️',
    color: 'from-violet-500 to-purple-400',
    border: 'border-violet-500',
    bg: 'bg-violet-950',
    text: 'text-violet-300',
    accent: '#a78bfa',
    formula: 'K ~ ∫ K̃(ω)·e^{-iωt} dω',
    subtitle: 'Frequenzanalyse',
    desc: 'Der Propagator als Zeitfunktion wird in Frequenzanteile zerlegt. Die Peaks im Spektrum sitzen genau bei den Eigenfrequenzen – die Fourier-Analyse findet das Spektrum automatisch.',
    thinks: 'Frequenzen, Spektrum, Signalzerlegung',
    ignores: 'Physikalische Wege, räumliche Muster',
    strength: 'Universelle Mathematik, verbindet alle Bereiche',
  },
];

const connections = [
  { from: 'paths', to: 'eigen', label: 'Umgruppieren der Wege → Eigenzustände', x: 50, y: 72 },
  { from: 'eigen', to: 'fourier', label: 'Eigenfrequenzen = Fourier-Frequenzen', x: 78, y: 42 },
  { from: 'fourier', to: 'paths', label: 'Summe über alles: Wege ↔ Frequenzen', x: 22, y: 42 },
];

const chapters = [
  { n: '1', title: 'Pfeile, die sich addieren', topic: 'Amplituden & Interferenz', done: true },
  { n: '2', title: 'Jeder Weg zählt', topic: 'Pfade & Wirkung', done: true },
  { n: '3', title: 'Warum der Ball einer Parabel folgt', topic: 'Klassischer Grenzfall', done: true },
  { n: '4a', title: 'Jedes Signal ist eine Summe von Schwingungen', topic: 'Fourier & rotierende Pfeile', done: true },
  { n: '4b', title: 'Die Töne eines Quantensystems', topic: 'Eigenzustände & Energiequantisierung', done: true },
  { n: '4c', title: 'Drei Sprachen, eine Physik', topic: 'Synthese & Äquivalenz', done: true },
  { n: '5', title: 'Was passiert, wenn du hinschaust?', topic: 'Messung & Kollaps', done: false },
  { n: '6', title: 'Verschränkung und das Ende der Einsamkeit', topic: 'Nichtlokalität & Bell', done: false },
];

 function ThreeLanguages() {
  const [active, setActive] = React.useState(null);
  const [showChapters, setShowChapters] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const rafRef = React.useRef(null);
  const prevRef = React.useRef(0);

  React.useEffect(() => {
    const tick = (now) => {
      if (prevRef.current) setTime(t => t + (now - prevRef.current) * 0.001);
      prevRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const propagatorAngle = time * 1.4;
  const pLen = 28;

  const triPos = [
    { x: 50, y: 82 },
    { x: 82, y: 22 },
    { x: 18, y: 22 },
  ];

  const eigFreqs = [1.0, 2.3, 3.7, 5.2, 7.1];
  const eigAmps = [1.0, 0.6, 0.35, 0.2, 0.1];

  const pathAngles = Array.from({ length: 12 }, (_, i) => {
    const base = propagatorAngle * (0.7 + i * 0.15);
    return base + Math.sin(i * 1.3) * 0.8;
  });

  const activeData = active !== null ? languages[active] : null;

  return (
    React.createElement('div', { className: "bg-gray-950 text-white p-2 sm:p-3 rounded-2xl max-w-4xl mx-auto select-none"       ,}
      , React.createElement('h2', { className: "text-lg sm:text-xl font-bold text-center mb-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent"          ,}, "Drei Sprachen, eine Physik"

      )
      , React.createElement('p', { className: "text-xs text-gray-500 text-center mb-4"   ,}, "Derselbe Propagator K(B,A) — drei Wege, ihn zu berechnen"

      )

      , React.createElement('div', { className: "flex flex-col sm:flex-row gap-3 mb-3"    ,}
        , React.createElement('div', { className: "flex-1 bg-gray-900 rounded-xl border border-gray-800 p-3"     ,}
          , React.createElement('svg', { viewBox: "0 0 100 100"   , className: "w-full max-w-xs mx-auto"  ,}
            , connections.map((c, i) => {
              const f = triPos[languages.findIndex(l => l.id === c.from)];
              const t = triPos[languages.findIndex(l => l.id === c.to)];
              return (
                React.createElement('line', { key: i, x1: f.x, y1: f.y, x2: t.x, y2: t.y,
                  stroke: "#334155", strokeWidth: "0.5", strokeDasharray: "2,2",} )
              );
            })

            , languages.map((lang, i) => {
              const p = triPos[i];
              const isActive = active === i;
              return (
                React.createElement('g', { key: lang.id, onClick: () => setActive(isActive ? null : i),
                  style: { cursor: 'pointer' },}
                  , React.createElement('circle', { cx: p.x, cy: p.y, r: isActive ? 11 : 9,
                    fill: isActive ? lang.accent + '30' : '#1e293b',
                    stroke: isActive ? lang.accent : '#475569',
                    strokeWidth: isActive ? 1.5 : 0.7,} )
                  , isActive && (
                    React.createElement('circle', { cx: p.x, cy: p.y, r: "14", fill: "none",
                      stroke: lang.accent, strokeWidth: "0.5", opacity: "0.3",}
                      , React.createElement('animate', { attributeName: "r", values: "14;18;14", dur: "2s", repeatCount: "indefinite",} )
                      , React.createElement('animate', { attributeName: "opacity", values: "0.3;0;0.3", dur: "2s", repeatCount: "indefinite",} )
                    )
                  )
                  , React.createElement('text', { x: p.x, y: p.y + 1.5, textAnchor: "middle", fontSize: "6", dominantBaseline: "middle",}
                    , lang.icon
                  )
                  , React.createElement('text', { x: p.x, y: p.y + (i === 0 ? 17 : -14), textAnchor: "middle",
                    fill: isActive ? lang.accent : '#94a3b8', fontSize: "3.5", fontWeight: isActive ? 'bold' : 'normal',}
                    , lang.label
                  )
                )
              );
            })

            , React.createElement('circle', { cx: "50", cy: "44", r: "7", fill: "#0f172a", stroke: "#64748b", strokeWidth: "0.5",} )
            , React.createElement('line', { x1: "50", y1: "44",
              x2: 50 + Math.cos(propagatorAngle) * 5,
              y2: 44 - Math.sin(propagatorAngle) * 5,
              stroke: "#fbbf24", strokeWidth: "1.5", strokeLinecap: "round",} )
            , React.createElement('circle', { cx: "50", cy: "44", r: "1", fill: "#fbbf24",} )
            , React.createElement('text', { x: "50", y: "55", textAnchor: "middle", fill: "#fbbf24", fontSize: "3", fontWeight: "bold",}, "K(B,A)")

            , connections.map((c, i) => (
              React.createElement('text', { key: i, x: c.x, y: c.y, textAnchor: "middle", fill: "#475569", fontSize: "2.2", opacity: "0.7",}
                , c.label
              )
            ))
          )

          , React.createElement('p', { className: "text-xs text-gray-500 text-center mt-1"   ,}, "Klicke auf eine Ecke, um die Perspektive zu erkunden"        )
        )

        , React.createElement('div', { className: "sm:w-64 space-y-2" ,}
          , React.createElement(framerMotion.AnimatePresence, { mode: "wait",}
            , activeData ? (
              React.createElement(framerMotion.motion.div, { key: activeData.id,
                initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 }, transition: { duration: 0.25 },
                className: `${activeData.bg} border ${activeData.border} border-opacity-30 rounded-xl p-3`,}
                , React.createElement('div', { className: "flex items-center gap-2 mb-2"   ,}
                  , React.createElement('span', { className: "text-lg",}, activeData.icon)
                  , React.createElement('div', null
                    , React.createElement('div', { className: `text-sm font-bold ${activeData.text}`,}, activeData.label)
                    , React.createElement('div', { className: "text-xs text-gray-500" ,}, activeData.subtitle)
                  )
                )
                , React.createElement('div', { className: "bg-black bg-opacity-40 rounded-lg px-2.5 py-1.5 mb-2 font-mono text-xs text-center"        , style: { color: activeData.accent },}
                  , activeData.formula
                )
                , React.createElement('p', { className: "text-xs text-gray-300 leading-relaxed mb-2"   ,}, activeData.desc)
                , React.createElement('div', { className: "text-xs space-y-1" ,}
                  , React.createElement('div', null, React.createElement('span', { className: "text-gray-500",}, "Denkt in:" ), " " , React.createElement('span', { className: activeData.text,}, activeData.thinks))
                  , React.createElement('div', null, React.createElement('span', { className: "text-gray-500",}, "Ignoriert:"), " " , React.createElement('span', { className: "text-gray-600",}, activeData.ignores))
                  , React.createElement('div', null, React.createElement('span', { className: "text-gray-500",}, "Stärke:"), " " , React.createElement('span', { className: "text-gray-400",}, activeData.strength))
                )
              )
            ) : (
              React.createElement(framerMotion.motion.div, { key: "none",
                initial: { opacity: 0 }, animate: { opacity: 1 },
                exit: { opacity: 0 }, transition: { duration: 0.2 },
                className: "bg-gray-900 border border-gray-800 rounded-xl p-4 text-center"     ,}
                , React.createElement('div', { className: "text-2xl mb-2" ,}, "🔻")
                , React.createElement('p', { className: "text-xs text-gray-500 leading-relaxed"  ,}, "Drei Formeln. Drei Denkweisen. "
                      , React.createElement('strong', { className: "text-gray-300",}, "Ein Ergebnis." )
                )
                , React.createElement('p', { className: "text-xs text-gray-600 mt-2"  ,}, "Wähle eine Ecke des Dreiecks, um die Details zu sehen."         )
              )
            )
          )

          , React.createElement('div', { className: "bg-amber-950 border border-amber-800 border-opacity-30 rounded-xl p-2.5"     ,}
            , React.createElement('div', { className: "text-xs text-amber-400 font-bold text-center mb-1"    ,}, "Der Propagator in der Mitte"    )
            , React.createElement('div', { className: "flex items-center justify-center gap-3"   ,}
              , React.createElement('svg', { viewBox: "0 0 50 50"   , className: "w-12 h-12" ,}
                , React.createElement('circle', { cx: "25", cy: "25", r: "20", fill: "none", stroke: "#78350f", strokeWidth: "0.5",} )
                , React.createElement('line', { x1: "25", y1: "25",
                  x2: 25 + Math.cos(propagatorAngle) * 16,
                  y2: 25 - Math.sin(propagatorAngle) * 16,
                  stroke: "#fbbf24", strokeWidth: "2", strokeLinecap: "round",} )
                , React.createElement('circle', { cx: "25", cy: "25", r: "2", fill: "#fbbf24",} )
              )
              , React.createElement('div', { className: "text-xs text-amber-300 leading-relaxed"  ,}, "Egal welche Sprache — "
                    , React.createElement('br', null )
                , React.createElement('strong', { className: "text-white",}, "derselbe Pfeil" ), " kommt heraus."
              )
            )
          )
        )
      )

      , React.createElement('div', { className: "flex gap-1 justify-center mb-3"   ,}
        , languages.map((l, i) => (
          React.createElement('button', { key: l.id, onClick: () => setActive(active === i ? null : i),
            className: `flex-1 px-2 py-2 rounded-lg text-xs font-semibold border transition-all ${
              active === i
                ? `${l.bg} ${l.text} ${l.border} border-opacity-50`
                : 'bg-gray-800 text-gray-500 border-gray-700 hover:bg-gray-750'
            }`,}
            , l.icon, " " , l.label.split(' ').slice(-1)[0]
          )
        ))
      )

      , active !== null && (
        React.createElement(framerMotion.motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' },
          className: "bg-gray-900 rounded-xl border border-gray-800 p-3 mb-3 overflow-hidden"      ,}
          , React.createElement('div', { className: "text-xs text-gray-400 font-semibold text-center mb-2"    ,}
            , active === 0 && '12 Wege → ihre Pfeile addieren sich'
            , active === 1 && '5 Eigenzustände → ihre Pfeile addieren sich'
            , active === 2 && 'Frequenzspektrum → Peaks bei Eigenfrequenzen'
          )
          , React.createElement('svg', { viewBox: "0 0 300 70"   , className: "w-full",}
            , active === 0 && (() => {
              let sx = 0, sy = 0;
              const arrs = pathAngles.map((a, i) => {
                const len = 8 + Math.random() * 4;
                const x1 = 20 + sx;
                const y1 = 35 - sy;
                const dx = Math.cos(a) * len;
                const dy = -Math.sin(a) * len;
                sx += dx; sy += dy;
                return { x1, y1, x2: x1 + dx, y2: y1 + dy, i };
              });
              return (
                React.createElement('g', null
                  , arrs.map(a => (
                    React.createElement('line', { key: a.i, x1: a.x1, y1: a.y1, x2: a.x2, y2: a.y2,
                      stroke: "#60a5fa", strokeWidth: "1.2", opacity: "0.5", strokeLinecap: "round",} )
                  ))
                  , React.createElement('line', { x1: "20", y1: "35", x2: 20 + sx, y2: 35 - sy,
                    stroke: "#fbbf24", strokeWidth: "2", strokeLinecap: "round",} )
                  , React.createElement('circle', { cx: 20 + sx, cy: 35 - sy, r: "2.5", fill: "#fbbf24",} )
                  , React.createElement('text', { x: "260", y: "38", textAnchor: "middle", fill: "#94a3b8", fontSize: "6",}, "Σ Pfade → K(B,A)"

                  )
                )
              );
            })()

            , active === 1 && (() => {
              let sx = 0, sy = 0;
              return (
                React.createElement('g', null
                  , eigFreqs.map((f, i) => {
                    const ang = f * time * 1.4;
                    const amp = eigAmps[i] * 18;
                    const x1 = 20 + sx;
                    const y1 = 35 - sy;
                    const dx = Math.cos(ang) * amp;
                    const dy = -Math.sin(ang) * amp;
                    sx += dx; sy += dy;
                    return (
                      React.createElement('g', { key: i,}
                        , React.createElement('line', { x1: x1, y1: y1, x2: x1 + dx, y2: y1 + dy,
                          stroke: "#34d399", strokeWidth: "1.5", opacity: 0.4 + eigAmps[i] * 0.5, strokeLinecap: "round",} )
                        , React.createElement('text', { x: x1 + dx / 2 - 3, y: y1 + dy / 2 - 3, fill: "#34d399", fontSize: "3.5", opacity: "0.5",}, "ψ"
                          , i + 1
                        )
                      )
                    );
                  })
                  , React.createElement('line', { x1: "20", y1: "35", x2: 20 + sx, y2: 35 - sy,
                    stroke: "#fbbf24", strokeWidth: "2", strokeLinecap: "round",} )
                  , React.createElement('circle', { cx: 20 + sx, cy: 35 - sy, r: "2.5", fill: "#fbbf24",} )
                  , React.createElement('text', { x: "260", y: "38", textAnchor: "middle", fill: "#94a3b8", fontSize: "6",}, "Σ Eigenzustände → K(B,A)"

                  )
                )
              );
            })()

            , active === 2 && (() => {
              const barW = 8;
              return (
                React.createElement('g', null
                  , React.createElement('line', { x1: "20", y1: "60", x2: "220", y2: "60", stroke: "#334155", strokeWidth: "0.5",} )
                  , React.createElement('text', { x: "120", y: "68", textAnchor: "middle", fill: "#64748b", fontSize: "4",}, "Frequenz ω" )
                  , React.createElement('text', { x: "15", y: "10", textAnchor: "middle", fill: "#64748b", fontSize: "4",}, "|K̃|")
                  , eigFreqs.map((f, i) => {
                    const cx = 30 + f * 24;
                    const h = eigAmps[i] * 50;
                    const pulse = 1 + 0.1 * Math.sin(time * 3 + i);
                    return (
                      React.createElement('g', { key: i,}
                        , React.createElement('rect', { x: cx - barW / 2, y: 60 - h * pulse, width: barW, height: h * pulse,
                          fill: "#a78bfa", opacity: 0.3 + eigAmps[i] * 0.5, rx: "1",} )
                        , React.createElement('text', { x: cx, y: 60 - h * pulse - 3, textAnchor: "middle", fill: "#a78bfa", fontSize: "3.5",}, "ω"
                          , i + 1
                        )
                      )
                    );
                  })
                  , React.createElement('text', { x: "260", y: "38", textAnchor: "middle", fill: "#94a3b8", fontSize: "6",}, "Peaks = Eigenfrequenzen"

                  )
                )
              );
            })()
          )
        )
      )

      , React.createElement('div', { className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"    ,}
        , React.createElement('button', { onClick: () => setShowChapters(!showChapters),
          className: "w-full px-4 py-2.5 text-xs text-gray-400 hover:text-gray-200 flex justify-between items-center"        ,}
          , React.createElement('span', { className: "font-semibold",}, "📖 Alle Kapitel auf einen Blick"     )
          , React.createElement('span', { className: "text-gray-600",}, showChapters ? '▲' : '▼')
        )
        , React.createElement(framerMotion.AnimatePresence, null
          , showChapters && (
            React.createElement(framerMotion.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 },
              exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 },
              className: "overflow-hidden",}
              , React.createElement('div', { className: "px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5"     ,}
                , chapters.map((ch) => (
                  React.createElement('div', { key: ch.n,
                    className: `px-3 py-2 rounded-lg border text-xs ${
                      ch.done
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-gray-900 border-gray-800 opacity-50'
                    }`,}
                    , React.createElement('div', { className: "flex items-center gap-2"  ,}
                      , React.createElement('span', { className: `font-bold ${ch.done ? 'text-emerald-400' : 'text-gray-600'}`,}
                        , ch.done ? '✓' : '○', " Teil "  , ch.n
                      )
                      , React.createElement('span', { className: ch.done ? 'text-gray-300' : 'text-gray-600',}, ch.title)
                    )
                    , React.createElement('div', { className: "text-gray-500 ml-6" ,}, ch.topic)
                  )
                ))
              )
            )
          )
        )
      )
    )
  );
}
window.ThreeLanguages = ThreeLanguages;
})();

