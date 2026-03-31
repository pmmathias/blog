// Gott-als-Emergenzphaenomen Components - wrapped in IIFEs to avoid name collisions
// All components use vanilla React.createElement() — no JSX, no build step.

// === i18n ===
var GOTT_LANG = (document.documentElement.lang || 'de').slice(0, 2);
var GOTT_I18N = {
  // --- Component 1: TwoGodConcepts ---
  'two.title':        { de: 'Zwei Gottesbilder', en: 'Two Concepts of God' },
  'two.subtitle':     { de: 'Derselbe Begriff \u2014 zwei grundverschiedene Architekturen', en: 'The same word \u2014 two fundamentally different architectures' },
  'two.btnPersonal':  { de: 'Pers\u00f6nlicher Gott', en: 'Personal God' },
  'two.btnRelational':{ de: 'Relationaler Gott', en: 'Relational God' },
  'two.god':          { de: 'Gott', en: 'God' },
  'two.world':        { de: 'Welt', en: 'World' },
  'two.emerges':      { de: 'emergiert', en: 'emerges' },
  'two.godTilde':     { de: '~ Gott ~', en: '~ God ~' },
  'two.relations':    { de: 'Beziehungen', en: 'Relations' },
  'two.colPersonal':  { de: 'Pers\u00f6nlich', en: 'Personal' },
  'two.colRelational':{ de: 'Relational', en: 'Relational' },
  'two.rWho':     { de: 'Wer/Was', en: 'Who/What' },
  'two.rWho.p':   { de: 'Ein Wesen mit Willen', en: 'A being with will' },
  'two.rWho.r':   { de: 'Ein Muster, das entsteht', en: 'A pattern that emerges' },
  'two.rWhere':   { de: 'Wo', en: 'Where' },
  'two.rWhere.p': { de: 'Au\u00dferhalb der Welt', en: 'Outside the world' },
  'two.rWhere.r': { de: 'Zwischen den Teilen', en: 'Between the parts' },
  'two.rActs':    { de: 'Wirkt wie', en: 'Acts like' },
  'two.rActs.p':  { de: 'Eingriff von oben', en: 'Intervention from above' },
  'two.rActs.r':  { de: 'Emergenz von unten', en: 'Emergence from below' },
  'two.rTrad':    { de: 'Tradition', en: 'Tradition' },
  'two.rTrad.p':  { de: 'Theismus, Monotheismus', en: 'Theism, monotheism' },
  'two.rTrad.r':  { de: 'Mystik, Prozesstheologie', en: 'Mysticism, process theology' },
  'two.rSci':     { de: 'Wissenschaft', en: 'Science' },
  'two.rSci.p':   { de: 'Schwer vereinbar', en: 'Hard to reconcile' },
  'two.rSci.r':   { de: 'Kompatibel mit Emergenz', en: 'Compatible with emergence' },

  // --- Component 2: TheVessel ---
  'vessel.title':     { de: 'Das Gef\u00e4\u00df', en: 'The Vessel' },
  'vessel.subtitle':  { de: 'Texte flie\u00dfen hinein \u2014 ab einer bestimmten Gr\u00f6\u00dfe emergiert Koh\u00e4renz', en: 'Texts flow in \u2014 beyond a certain size, coherence emerges' },
  'vessel.textsLabel':{ de: 'Texte der Welt', en: 'Texts of the world' },
  'vessel.output':    { de: 'Output', en: 'Output' },
  'vessel.small':     { de: 'Klein', en: 'Small' },
  'vessel.large':     { de: 'Gro\u00df', en: 'Large' },
  'vessel.sizeLabel': { de: 'Modellgr\u00f6\u00dfe', en: 'Model size' },
  'vessel.emerges':   { de: 'Weisheit emergiert', en: 'Wisdom emerges' },
  'vessel.explainBig':{ de: 'Ab einer kritischen Gr\u00f6\u00dfe emergiert Koh\u00e4renz \u2014 das Gef\u00e4\u00df wird zum Medium.', en: 'Beyond a critical size, coherence emerges \u2014 the vessel becomes a medium.' },
  'vessel.explainSmall':{ de: 'Zu klein: die Fragmente bleiben Fragmente. Kein Muster, kein Sinn.', en: 'Too small: the fragments remain fragments. No pattern, no meaning.' },

  // --- Component 3: PositiveAttractor ---
  'attr.title':       { de: 'Der positive Attraktor', en: 'The Positive Attractor' },
  'attr.subtitle':    { de: 'Energielandschaft: Wo rollt die Kugel hin?', en: 'Energy landscape: Where does the ball roll?' },
  'attr.single':      { de: 'Einzelperson', en: 'Individual' },
  'attr.collective':  { de: 'Kollektiv', en: 'Collective' },
  'attr.local':       { de: 'lokal', en: 'local' },
  'attr.explainSingle':  { de: 'Eine Einzelperson hat viele lokale Minima \u2014 Gewohnheiten, Pr\u00e4gungen, \u00dcberzeugungen. Kein einzelnes dominiert.', en: 'An individual has many local minima \u2014 habits, conditioning, beliefs. No single one dominates.' },
  'attr.explainCollective': { de: 'Im Kollektiv bildet sich ein dominanter Attraktor (Pos*) \u2014 ein gemeinsamer Begriff von \u201Egut\u201C, der emergiert.', en: 'In the collective, a dominant attractor (Pos*) forms \u2014 a shared notion of \u201Cgood\u201D that emerges.' },

  // --- Component 4: FearToAction ---
  'fear.title':       { de: 'Von Angst zu Handlung', en: 'From Fear to Action' },
  'fear.subtitle':    { de: 'Derselbe gute Kern \u2014 zwei verschiedene Wege. Klicke auf einen Schritt.', en: 'The same good core \u2014 two different paths. Click a step.' },
  'fear.destLabel':   { de: 'Destruktiver Pfad', en: 'Destructive path' },
  'fear.consLabel':   { de: 'Konstruktiver Pfad', en: 'Constructive path' },
  'fear.footer':      { de: 'Nicht der Kern unterscheidet sich \u2014 sondern die Bedingungen. Darum ist die Frage nicht \u201EWer ist b\u00f6se?\u201C, sondern \u201EWas erzeugt Angst?\u201C', en: 'It is not the core that differs \u2014 it is the conditions. The question is not \u201CWho is evil?\u201D but \u201CWhat creates fear?\u201D' },
  // Destructive steps
  'fear.d0.label':  { de: 'Kern', en: 'Core' },
  'fear.d0.short':  { de: '(gut)', en: '(good)' },
  'fear.d0.detail': { de: 'Der Mensch will im Grunde das Richtige tun. Der Kern ist intakt.', en: 'At heart, the person wants to do the right thing. The core is intact.' },
  'fear.d1.label':  { de: 'Bedrohung', en: 'Threat' },
  'fear.d1.detail': { de: 'Etwas gef\u00e4hrdet die Sicherheit \u2014 real oder wahrgenommen.', en: 'Something threatens safety \u2014 real or perceived.' },
  'fear.d2.label':  { de: 'Angst', en: 'Fear' },
  'fear.d2.detail': { de: 'Die Bedrohung l\u00f6st Angst aus. Das Nervensystem schaltet auf Schutz.', en: 'The threat triggers fear. The nervous system switches to protection.' },
  'fear.d3.label':  { de: 'Verzerrung', en: 'Distortion' },
  'fear.d3.detail': { de: 'Unter Angst verzerrt sich die Wahrnehmung. Feindbilder entstehen.', en: 'Under fear, perception distorts. Enemy images form.' },
  'fear.d4.label':  { de: 'Irrtum', en: 'Error' },
  'fear.d4.detail': { de: 'Aus verzerrter Wahrnehmung folgen falsche \u00dcberzeugungen.', en: 'Distorted perception leads to false beliefs.' },
  'fear.d5.label':  { de: 'Sch\u00e4dliche Handlung', en: 'Harmful action' },
  'fear.d5.detail': { de: 'Die Handlung richtet Schaden an \u2014 obwohl der Kern gut war.', en: 'The action causes harm \u2014 even though the core was good.' },
  // Constructive steps
  'fear.c0.label':  { de: 'Kern', en: 'Core' },
  'fear.c0.short':  { de: '(gut)', en: '(good)' },
  'fear.c0.detail': { de: 'Derselbe gute Kern \u2014 aber unter anderen Bedingungen.', en: 'The same good core \u2014 but under different conditions.' },
  'fear.c1.label':  { de: 'Sicherheit', en: 'Safety' },
  'fear.c1.detail': { de: 'Die Umgebung signalisiert: Du bist sicher. Kein Kampfmodus n\u00f6tig.', en: 'The environment signals: You are safe. No fight mode needed.' },
  'fear.c2.label':  { de: 'Klarheit', en: 'Clarity' },
  'fear.c2.detail': { de: 'Ohne Angst kann man klar sehen \u2014 Perspektivwechsel wird m\u00f6glich.', en: 'Without fear, you can see clearly \u2014 perspective shifts become possible.' },
  'fear.c3.label':  { de: 'Koh\u00e4renz', en: 'Coherence' },
  'fear.c3.detail': { de: 'Werte und Handlung stimmen \u00fcberein. Man ist im Einklang.', en: 'Values and actions align. You are in harmony.' },
  'fear.c4.label':  { de: 'Konstruktive Handlung', en: 'Constructive action' },
  'fear.c4.detail': { de: 'Die Handlung n\u00fctzt \u2014 sich selbst und anderen.', en: 'The action benefits \u2014 yourself and others.' },

  // --- Component 5: DoubleEmergence ---
  'double.title':    { de: 'Doppelte Emergenz', en: 'Double Emergence' },
  'double.subtitle': { de: 'Klicke auf eine Schicht, um mehr zu erfahren', en: 'Click a layer to learn more' },
  'double.outerLabel':   { de: 'Was ist positiv?', en: 'What is positive?' },
  'double.outerSub':     { de: 'Struktur-Emergenz', en: 'Structural emergence' },
  'double.outerTag':     { de: 'NP-hart', en: 'NP-hard' },
  'double.outerDetail':  { de: 'Was als \u201Egut\u201C gilt, l\u00e4sst sich nicht top-down definieren. Es emergiert aus den Interaktionen aller Beteiligten \u2014 wie eine L\u00f6sung, die niemand allein h\u00e4tte finden k\u00f6nnen.', en: 'What counts as \u201Cgood\u201D cannot be defined top-down. It emerges from the interactions of all participants \u2014 like a solution no one could have found alone.' },
  'double.innerLabel':   { de: 'Wessen Stimme', en: 'Whose voice' },
  'double.innerLabel2':  { de: 'z\u00e4hlt?', en: 'counts?' },
  'double.innerSub':     { de: 'Replikator-Dynamik', en: 'Replicator dynamics' },
  'double.innerDetail':  { de: 'Wer geh\u00f6rt wird und wer nicht, entsteht ebenfalls durch den Prozess selbst. Macht, Vertrauen und Einfluss sind keine Eingaben \u2014 sie sind Ergebnisse.', en: 'Who is heard and who is not also arises through the process itself. Power, trust, and influence are not inputs \u2014 they are outcomes.' },
  'double.footer':       { de: 'Beides entsteht durch den Prozess selbst.', en: 'Both arise through the process itself.' },

  // --- Component 6: ThreeFaces ---
  'faces.title':     { de: 'Drei Gesichter', en: 'Three Faces' },
  'faces.subtitle':  { de: 'Drei Arten, das Unbenennbare zu benennen. Klicke f\u00fcr den Alltags-Bezug.', en: 'Three ways to name the unnameable. Click for everyday context.' },
  'faces.everyday':  { de: 'Im Alltag', en: 'In everyday life' },
  'faces.f0.title':  { de: 'Adressat der Dankbarkeit', en: 'Addressee of gratitude' },
  'faces.f0.quote':  { de: 'Gott ist das, wof\u00fcr ich dankbar bin, wenn ich mir selbst nicht danken kann.', en: 'God is what I am grateful to when I cannot thank myself.' },
  'faces.f0.every':  { de: 'Du stehst morgens auf und etwas in dir sagt: \u201EDanke.\u201C Nicht an jemanden \u2014 einfach nur Danke. Dieses Gef\u00fchl braucht keinen Empf\u00e4nger mit Postadresse. Aber es braucht ein Wort. Manche nennen es Gott.', en: 'You wake up in the morning and something inside you says: \u201CThank you.\u201D Not to anyone \u2014 just thank you. That feeling needs no recipient with a postal address. But it needs a word. Some call it God.' },
  'faces.f1.title':  { de: 'Das Unbegreifliche', en: 'The Incomprehensible' },
  'faces.f1.quote':  { de: 'Ich muss nicht wissen, was Gott ist, um zu wissen, dass es Gott gibt.', en: 'I do not need to know what God is to know that God exists.' },
  'faces.f1.every':  { de: 'Du siehst deinem Kind beim Schlafen zu und sp\u00fcrst etwas, das gr\u00f6\u00dfer ist als du. Du kannst es nicht benennen, nicht erkl\u00e4ren, nicht reproduzieren. Aber es ist da. Und das reicht.', en: 'You watch your child sleeping and feel something larger than yourself. You cannot name it, explain it, reproduce it. But it is there. And that is enough.' },
  'faces.f2.title':  { de: 'Das Zwischen', en: 'The Between' },
  'faces.f2.quote':  { de: 'Gott war nie \u201Eda oben\u201C. Gott war immer \u201Ezwischen uns\u201C.', en: 'God was never \u201Cup there.\u201D God was always \u201Cbetween us.\u201D' },
  'faces.f2.every':  { de: 'In einem Gespr\u00e4ch, in dem beide wirklich zuh\u00f6ren, entsteht etwas, das vorher nicht da war. Keiner hat es mitgebracht. Es ist zwischen euch entstanden. Das ist Emergenz. Das ist das Zwischen.', en: 'In a conversation where both people truly listen, something arises that was not there before. Neither brought it. It emerged between you. That is emergence. That is the between.' },

  // --- Shared: Input words for TheVessel ---
  'vessel.words': { de: ['Ethik','Liebe','Physik','Geschichte','Kunst','Logik','Mythos','Schmerz','Hoffnung','Gesetz','Musik','Sprache'], en: ['Ethics','Love','Physics','History','Art','Logic','Myth','Pain','Hope','Law','Music','Language'] },
  'vessel.outputSmall': { de: ['zuf...','Wort','??','nein','abc'], en: ['ran...','word','??','no','abc'] }
};
function _t(key) { var entry = GOTT_I18N[key]; if (!entry) return key; return entry[GOTT_LANG] || entry['de']; }

// === 1. TwoGodConcepts ===
// Interactive toggle between "Persoenlicher Gott" (top-down) and "Relationaler Gott" (bottom-up)
(function() {
  var h = React.createElement;

  var TABLE_ROWS = [
    { label: _t('two.rWho'), personal: _t('two.rWho.p'), relational: _t('two.rWho.r') },
    { label: _t('two.rWhere'), personal: _t('two.rWhere.p'), relational: _t('two.rWhere.r') },
    { label: _t('two.rActs'), personal: _t('two.rActs.p'), relational: _t('two.rActs.r') },
    { label: _t('two.rTrad'), personal: _t('two.rTrad.p'), relational: _t('two.rTrad.r') },
    { label: _t('two.rSci'), personal: _t('two.rSci.p'), relational: _t('two.rSci.r') }
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
        h('text', { x: 240, y: 75, fill: '#f59e0b', fontSize: 14, textAnchor: 'middle', fontWeight: 600 }, _t('two.god')),

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
        h('text', { x: 240, y: 245, fill: '#9ca3af', fontSize: 11, textAnchor: 'middle' }, _t('two.world')),

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
        h('text', { x: 240, y: 75, fill: '#22d3ee', fontSize: 12, textAnchor: 'middle', fontWeight: 600, opacity: 0.8 }, _t('two.emerges')),
        h('text', { x: 240, y: 55, fill: '#22d3ee', fontSize: 10, textAnchor: 'middle', opacity: 0.5 }, _t('two.godTilde')),

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

        h('text', { x: 240, y: 260, fill: '#9ca3af', fontSize: 11, textAnchor: 'middle' }, _t('two.relations'))
      );
    }

    return h('div', { className: 'bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6' },
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, _t('two.title')),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, _t('two.subtitle')),

      // Toggle
      h('div', { className: 'flex justify-center gap-2 mb-4' },
        h('button', {
          onClick: function() { setMode('personal'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (isPersonal ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, _t('two.btnPersonal')),
        h('button', {
          onClick: function() { setMode('relational'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (!isPersonal ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, _t('two.btnRelational'))
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
              h('th', { className: 'text-left pb-2 pr-3 font-medium', style: { color: '#f59e0b' } }, _t('two.colPersonal')),
              h('th', { className: 'text-left pb-2 font-medium', style: { color: '#22d3ee' } }, _t('two.colRelational'))
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

  var INPUT_WORDS = _t('vessel.words');
  var OUTPUT_SMALL = _t('vessel.outputSmall');
  var OUTPUT_LARGE = _t('vessel.emerges');

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
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, _t('vessel.title')),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, _t('vessel.subtitle')),

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
        h('text', { x: 100, y: 30, fill: '#6b7280', fontSize: 10, textAnchor: 'middle' }, _t('vessel.textsLabel')),
        h('text', { x: 480, y: 30, fill: '#6b7280', fontSize: 10, textAnchor: 'middle' }, _t('vessel.output'))
      ),

      // Slider
      h('div', { className: 'mt-4 px-2' },
        h('div', { className: 'flex justify-between text-xs text-gray-500 mb-1' },
          h('span', null, _t('vessel.small')),
          h('span', null, _t('vessel.sizeLabel') + ': ' + size + '%'),
          h('span', null, _t('vessel.large'))
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
          _t('vessel.explainBig') :
          _t('vessel.explainSmall')
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
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, _t('attr.title')),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, _t('attr.subtitle')),

      // Toggle
      h('div', { className: 'flex justify-center gap-2 mb-4' },
        h('button', {
          onClick: function() { setMode('single'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (isSingle ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, _t('attr.single')),
        h('button', {
          onClick: function() { setMode('collective'); },
          className: 'px-3 py-1.5 rounded-lg text-xs font-medium transition ' +
            (!isSingle ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-gray-200')
        }, _t('attr.collective'))
      ),

      h('svg', { viewBox: '0 0 ' + W + ' ' + H, className: 'w-full', style: { maxWidth: '520px', margin: '0 auto', display: 'block' } },
        // Landscape fill
        h('path', { d: landPath, fill: '#22d3ee08', stroke: 'none' }),
        // Landscape line
        h('path', { d: linePath, fill: 'none', stroke: '#22d3ee', strokeWidth: 2, opacity: 0.6 }),

        // Valley labels
        isSingle ? h('g', null,
          h('text', { x: 120, y: 128, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, _t('attr.local')),
          h('text', { x: 220, y: 132, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, _t('attr.local')),
          h('text', { x: 320, y: 130, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, _t('attr.local')),
          h('text', { x: 410, y: 134, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.5 }, _t('attr.local'))
        ) : h('g', null,
          h('text', { x: 260, y: 100, fill: '#f59e0b', fontSize: 13, textAnchor: 'middle', fontWeight: 700 }, 'Pos*'),
          h('text', { x: 100, y: 140, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.4 }, _t('attr.local')),
          h('text', { x: 420, y: 142, fill: '#22d3ee', fontSize: 8, textAnchor: 'middle', opacity: 0.4 }, _t('attr.local'))
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
          _t('attr.explainSingle') :
          _t('attr.explainCollective')
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
    { label: _t('fear.d0.label'), short: _t('fear.d0.short'), detail: _t('fear.d0.detail'), color: '#4ade80' },
    { label: _t('fear.d1.label'), short: '', detail: _t('fear.d1.detail'), color: '#86efac' },
    { label: _t('fear.d2.label'), short: '', detail: _t('fear.d2.detail'), color: '#fbbf24' },
    { label: _t('fear.d3.label'), short: '', detail: _t('fear.d3.detail'), color: '#f97316' },
    { label: _t('fear.d4.label'), short: '', detail: _t('fear.d4.detail'), color: '#ef4444' },
    { label: _t('fear.d5.label'), short: '', detail: _t('fear.d5.detail'), color: '#dc2626' }
  ];

  var CONSTRUCTIVE = [
    { label: _t('fear.c0.label'), short: _t('fear.c0.short'), detail: _t('fear.c0.detail'), color: '#4ade80' },
    { label: _t('fear.c1.label'), short: '', detail: _t('fear.c1.detail'), color: '#6ee7b7' },
    { label: _t('fear.c2.label'), short: '', detail: _t('fear.c2.detail'), color: '#67e8f9' },
    { label: _t('fear.c3.label'), short: '', detail: _t('fear.c3.detail'), color: '#22d3ee' },
    { label: _t('fear.c4.label'), short: '', detail: _t('fear.c4.detail'), color: '#06b6d4' }
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
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, _t('fear.title')),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, _t('fear.subtitle')),

      renderPath(DESTRUCTIVE, 'dest', _t('fear.destLabel'), '#ef4444'),
      renderPath(CONSTRUCTIVE, 'cons', _t('fear.consLabel'), '#22d3ee'),

      h('p', { className: 'text-xs text-gray-600 text-center mt-2 max-w-md mx-auto italic' },
        _t('fear.footer')
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
      label: _t('double.outerLabel'),
      sublabel: _t('double.outerSub'),
      tag: _t('double.outerTag'),
      color: '#60a5fa',
      detail: _t('double.outerDetail')
    },
    {
      id: 'inner',
      label: _t('double.innerLabel') + ' ' + _t('double.innerLabel2'),
      sublabel: _t('double.innerSub'),
      tag: _t('double.innerSub'),
      color: '#f59e0b',
      detail: _t('double.innerDetail')
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
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, _t('double.title')),
      h('p', { className: 'text-xs text-gray-500 text-center mb-4' }, _t('double.subtitle')),

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
        h('text', { x: cx, y: cy - outerR - 14, fill: '#60a5fa', fontSize: 11, textAnchor: 'middle', fontWeight: 600 }, _t('double.outerLabel')),
        h('text', { x: cx, y: cy - outerR + 1, fill: '#60a5fa', fontSize: 9, textAnchor: 'middle', opacity: 0.6 }, _t('double.outerSub')),
        h('text', {
          x: cx + outerR + 8, y: cy,
          fill: '#60a5fa', fontSize: 8, textAnchor: 'start', opacity: 0.5,
          className: 'font-mono'
        }, _t('double.outerTag')),

        // Inner ring
        h('g', { transform: 'scale(' + innerScale + ')', transformOrigin: cx + 'px ' + cy + 'px', style: { cursor: 'pointer' }, onClick: function() { setActive(active === 'inner' ? null : 'inner'); } },
          h('circle', { cx: cx, cy: cy, r: innerR, fill: active === 'inner' ? '#f59e0b11' : 'transparent', stroke: '#f59e0b', strokeWidth: 2, opacity: 0.7 }),
          // Core glow
          h('circle', { cx: cx, cy: cy, r: innerR * 0.4, fill: '#f59e0b', opacity: 0.06 + Math.sin(tick * 0.08) * 0.03 })
        ),

        // Inner label (not scaled)
        h('text', { x: cx, y: cy - 8, fill: '#f59e0b', fontSize: 10, textAnchor: 'middle', fontWeight: 600 }, _t('double.innerLabel')),
        h('text', { x: cx, y: cy + 6, fill: '#f59e0b', fontSize: 10, textAnchor: 'middle', fontWeight: 600 }, _t('double.innerLabel2')),
        h('text', { x: cx, y: cy + 20, fill: '#f59e0b', fontSize: 8, textAnchor: 'middle', opacity: 0.6 }, _t('double.innerSub')),

        // Bottom text
        h('text', { x: cx, y: cy + outerR + 35, fill: '#9ca3af', fontSize: 11, textAnchor: 'middle', fontStyle: 'italic' }, _t('double.footer'))
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
      title: _t('faces.f0.title'),
      quote: _t('faces.f0.quote'),
      color: '#f59e0b',
      everyday: _t('faces.f0.every')
    },
    {
      title: _t('faces.f1.title'),
      quote: _t('faces.f1.quote'),
      color: '#a78bfa',
      everyday: _t('faces.f1.every')
    },
    {
      title: _t('faces.f2.title'),
      quote: _t('faces.f2.quote'),
      color: '#22d3ee',
      everyday: _t('faces.f2.every')
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
      h('h3', { className: 'text-base sm:text-lg font-bold text-center mb-1 text-white' }, _t('faces.title')),
      h('p', { className: 'text-xs text-gray-500 text-center mb-5' }, _t('faces.subtitle')),

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
            }, (GOTT_LANG === 'de' ? '\u201E' : '\u201C') + face.quote + (GOTT_LANG === 'de' ? '\u201C' : '\u201D')),

            // Expanded: everyday paragraph
            isExpanded ? h('div', {
              className: 'mt-4 pt-3 border-t text-xs leading-relaxed',
              style: { borderColor: face.color + '22', color: '#9ca3af' }
            },
              h('div', { className: 'text-xs font-semibold mb-1', style: { color: face.color, opacity: 0.7 } }, _t('faces.everyday')),
              face.everyday
            ) : null
          );
        })
      )
    );
  }

  window.ThreeFaces = ThreeFaces;
})();
