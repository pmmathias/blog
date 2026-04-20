/**
 * nav.js — Shared navigation for ki-mathias.de
 *
 * Add new blog posts here. The nav dropdown and header links
 * are generated automatically on all pages.
 *
 * To add a new post: Add an entry to the POSTS array below.
 * That's it. All 12+ pages update automatically.
 */

(function() {
  'use strict';

  var LANG = document.documentElement.lang || 'de';
  var isEN = LANG === 'en';

  // ============================================================
  // BLOG POSTS — edit this array when adding new posts
  // ============================================================
  var POSTS = [
    {
      icon: '\u03C8',  // ψ
      de: { title: 'Quantenphysik mit Pfeilen', subtitle: 'Doppelspalt \u00B7 Pfadintegral \u00B7 Verschr\u00E4nkung', href: '/quanten.html' },
      en: { title: 'Quantum Physics with Arrows', subtitle: 'Double slit \u00B7 Path integral \u00B7 Entanglement', href: '/en/quantum.html' }
    },
    {
      icon: '\u269B',  // ⚛
      de: { title: 'Was Quantencomputer k\u00F6nnen', subtitle: 'Qubit \u00B7 Bloch-Kugel \u00B7 Qiskit', href: '/quantencomputer.html' },
      en: { title: 'What Quantum Computers Do', subtitle: 'Qubit \u00B7 Bloch sphere \u00B7 Qiskit', href: '/en/quantum-computing.html' }
    },
    {
      icon: '\uD83E\uDD85',  // 🦅
      de: { title: 'Fourier & Ozeanwellen', subtitle: 'FFT \u00B7 Octree \u00B7 Ozean-Shader', href: '/vogelsimulator.html' },
      en: { title: 'Fourier & Ocean Waves', subtitle: 'FFT \u00B7 Octree \u00B7 Ocean Shader', href: '/en/flight-simulator.html' }
    },
    {
      icon: '\u03BB',  // λ
      de: { title: 'Eigenwerte & KI', subtitle: 'Kernel \u00B7 PageRank \u00B7 Neumann-Reihe', href: '/eigenwerte.html' },
      en: { title: 'Eigenvalues & AI', subtitle: 'Kernels \u00B7 PageRank \u00B7 Neumann Series', href: '/en/eigenvalues.html' }
    },
    {
      icon: '\uD83D\uDCAC',  // 💬
      de: { title: 'KRR Chat: Unter der Haube', subtitle: 'RAG \u00B7 Float64 \u00B7 Drei-Farben-Code', href: '/krr-chat-erklaert.html' },
      en: { title: 'KRR Chat: Under the Hood', subtitle: 'RAG \u00B7 Float64 \u00B7 Three-Color Code', href: '/en/krr-chat-explained.html' }
    },
    {
      icon: '\uD83E\uDDE0',  // 🧠
      de: { title: 'Emergenz in Sprachmodellen', subtitle: 'Phasen\u00FCberg\u00E4nge \u00B7 Grokking \u00B7 Ising', href: '/emergenz.html' },
      en: { title: 'Emergence in Language Models', subtitle: 'Phase transitions \u00B7 Grokking \u00B7 Ising', href: '/en/emergence.html' }
    },
    {
      icon: '\u2728',  // ✨
      de: { title: 'Gott als Emergenzph\u00E4nomen', subtitle: 'Whitehead \u00B7 Spinoza \u00B7 Koh\u00E4renz', href: '/gott.html' },
      en: { title: 'God as Emergent Phenomenon', subtitle: 'Whitehead \u00B7 Spinoza \u00B7 Coherence', href: '/en/god.html' }
    },
    {
      icon: '\uD83C\uDFB5',  // 🎵
      de: { title: 'Warum Dur fr\u00F6hlich klingt', subtitle: 'Harmonik \u00B7 Stimmung \u00B7 Psychoakustik', href: '/musik.html' },
      en: { title: 'Why Major Sounds Happy', subtitle: 'Harmony \u00B7 Tuning \u00B7 Psychoacoustics', href: '/en/music.html' }
    },
    {
      icon: '\uD83E\uDDE9',  // 🧩
      de: { title: 'Die Grenzen des Beweisbaren', subtitle: 'G\u00F6del \u00B7 Turing \u00B7 Selbstreferenz', href: '/logik.html' },
      en: { title: 'The Limits of Provability', subtitle: 'G\u00F6del \u00B7 Turing \u00B7 Self-Reference', href: '/en/logic.html' }
    },
    {
      icon: '\uD83C\uDFB2',  // 🎲
      de: { title: 'Das Glasperlenspiel', subtitle: 'Meta-Reise \u00B7 Achtsamkeit \u00B7 Hesse', href: '/glasperlenspiel.html' },
      en: { title: 'The Glass Bead Game', subtitle: 'Meta-Journey \u00B7 Mindfulness \u00B7 Hesse', href: '/en/glass-bead-game.html' }
    },
    {
      icon: '\uD83E\uDEB7',  // 🪷
      de: { title: 'Im Augenblick verweilen', subtitle: 'Achtsamkeit \u00B7 Hardy \u00B7 Husserl', href: '/achtsamkeit.html' },
      en: { title: 'Dwelling in the Moment', subtitle: 'Mindfulness \u00B7 Hardy \u00B7 Husserl', href: '/en/mindfulness.html' }
    },
    {
      icon: '\uD835\uDE52',  // 𝑒
      de: { title: 'Warum e besonders ist', subtitle: 'Wachstum \u00B7 Primzahlen \u00B7 Zufall', href: '/euler.html' },
      en: { title: 'Why e Is Special', subtitle: 'Growth \u00B7 Primes \u00B7 Probability', href: '/en/euler.html' }
    },
    {
      icon: '\uD83C\uDFB8',  // 🎸
      de: { title: 'Tommy the Cat \u2014 Bass Cover', subtitle: 'Primus \u00B7 210 BPM \u00B7 FFT-Sync', href: '/tommy-practice.html' },
      en: { title: 'Tommy the Cat \u2014 Bass Cover', subtitle: 'Primus \u00B7 210 BPM \u00B7 FFT Sync', href: '/en/tommy-practice.html' }
    },
    {
      icon: '\uD83C\uDFAD',  // 🎭
      de: { title: 'Deepfakes erkl\u00E4rt', subtitle: 'Autoencoder \u00B7 PCA \u00B7 Kernel-Trick', href: '/deepfakes.html' },
      en: { title: 'Deepfakes Explained', subtitle: 'Autoencoders \u00B7 PCA \u00B7 Kernel Trick', href: '/en/deepfakes.html' }
    }
  ];

  // ============================================================
  // META LINKS
  // ============================================================
  var META = isEN
    ? { about: '/en/about.html', imprint: '/en/imprint.html', privacy: '/en/privacy.html', aboutLabel: 'About', imprintLabel: 'Imprint', privacyLabel: 'Privacy' }
    : { about: '/ueber-mich.html', imprint: '/impressum.html', privacy: '/datenschutz.html', aboutLabel: '\u00DCber mich', imprintLabel: 'Impressum', privacyLabel: 'Datenschutz' };

  // ============================================================
  // Detect which page we're on (for language toggle + TOC)
  // ============================================================
  var path = window.location.pathname;

  // Find matching post for language toggle
  var langToggleHref = isEN ? '/' : '/en/';
  var langToggleLabel = isEN ? 'DE' : 'EN';
  POSTS.forEach(function(p) {
    var mine = isEN ? p.en.href : p.de.href;
    var other = isEN ? p.de.href : p.en.href;
    if (path === mine || path.endsWith(mine)) {
      langToggleHref = other;
    }
  });
  // Special cases for meta pages
  if (path.match(/ueber-mich|about/)) langToggleHref = isEN ? '/ueber-mich.html' : '/en/about.html';
  if (path.match(/impressum|imprint/)) langToggleHref = isEN ? '/impressum.html' : '/en/imprint.html';
  if (path.match(/datenschutz|privacy/)) langToggleHref = isEN ? '/datenschutz.html' : '/en/privacy.html';
  if (path === '/' || path === '/index.html' || path === '/en/' || path === '/en/index.html') {
    langToggleHref = isEN ? '/' : '/en/';
  }

  // ============================================================
  // Build nav HTML
  // ============================================================
  var postsLabel = isEN ? 'Posts' : 'Beitr\u00E4ge';

  // Header bar
  var navBar = document.getElementById('nav-bar');
  if (navBar) {
    navBar.innerHTML =
      '<div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">' +
        '<button id="nav-toggle" class="flex items-center gap-2 text-white font-semibold text-sm hover:text-cyan-400 transition group">' +
          '<span class="text-cyan-400 text-lg transition-transform duration-200 group-[.open]:rotate-90">&rang;</span>' +
          ' KI-Mathias' +
        '</button>' +
        '<div class="flex items-center gap-3 text-xs text-gray-500">' +
          '<a href="' + META.about + '" class="hover:text-gray-300 transition hidden sm:inline">' + META.aboutLabel + '</a>' +
          '<a href="' + META.imprint + '" class="hover:text-gray-300 transition hidden sm:inline">' + META.imprintLabel + '</a>' +
          '<a href="' + META.privacy + '" class="hover:text-gray-300 transition hidden sm:inline">' + META.privacyLabel + '</a>' +
          '<a href="' + langToggleHref + '" class="hover:text-gray-300 transition">' + langToggleLabel + '</a>' +
        '</div>' +
      '</div>';
  }

  // Dropdown
  var navDropdown = document.getElementById('nav-dropdown');
  if (navDropdown) {
    var postsHTML = '';
    POSTS.forEach(function(p) {
      var post = isEN ? p.en : p.de;
      postsHTML +=
        '<a href="' + post.href + '" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800/60 transition group">' +
          '<span class="text-xl opacity-50 group-hover:opacity-80">' + p.icon + '</span>' +
          '<div>' +
            '<div class="text-sm text-gray-200 font-medium">' + post.title + '</div>' +
            '<div class="text-xs text-gray-500">' + post.subtitle + '</div>' +
          '</div>' +
        '</a>';
    });

    // Check for TOC (article pages have #nav-toc-items)
    var tocSlot = document.getElementById('nav-toc-items');
    var tocHTML = '';
    if (tocSlot) {
      // Ensure each toc-link is displayed as block
      var tocItems = tocSlot.querySelectorAll('a');
      var tocLinksHTML = '';
      tocItems.forEach(function(a) {
        // Ensure proper styling for each TOC link
        a.style.display = 'block';
        a.className = 'toc-link block text-sm py-1.5 px-3 text-gray-300 rounded-lg hover:bg-gray-800/60 transition';
        tocLinksHTML += a.outerHTML;
      });
      tocHTML =
        '<div class="p-3">' +
          '<p class="text-xs uppercase tracking-widest text-gray-500 px-2 mb-2">' + (isEN ? 'This Article' : 'Kapitel') + '</p>' +
          tocLinksHTML +
        '</div>' +
        '<div class="h-px bg-gray-800 mx-3"></div>';
      tocSlot.remove();
    }

    // Home link
    var homeHref = isEN ? '/en/' : '/';
    var homeLabel = isEN ? '&larr; Home' : '&larr; Startseite';

    navDropdown.innerHTML =
      '<div id="nav-backdrop" class="absolute inset-0 bg-black/40" style="min-height:100vh;"></div>' +
      '<div class="relative max-w-xs mx-4 sm:mx-8 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto">' +
        tocHTML +
        '<div class="p-3">' +
          '<p class="text-xs uppercase tracking-widest text-gray-500 px-2 mb-2">' + postsLabel + '</p>' +
          postsHTML +
        '</div>' +
        '<div class="h-px bg-gray-800 mx-3"></div>' +
        '<div class="p-3">' +
          '<a href="' + homeHref + '" class="block text-sm py-1.5 px-3 text-gray-400 rounded-lg hover:bg-gray-800/60 hover:text-white transition">' + homeLabel + '</a>' +
        '</div>' +
        '<div class="sm:hidden">' +
          '<div class="h-px bg-gray-800 mx-3"></div>' +
          '<div class="p-3 flex gap-1">' +
            '<a href="' + META.about + '" class="flex-1 text-center text-xs text-gray-400 hover:text-white py-2 rounded-lg hover:bg-gray-800/40 transition">' + META.aboutLabel + '</a>' +
            '<a href="' + META.imprint + '" class="flex-1 text-center text-xs text-gray-400 hover:text-white py-2 rounded-lg hover:bg-gray-800/40 transition">' + META.imprintLabel + '</a>' +
            '<a href="' + META.privacy + '" class="flex-1 text-center text-xs text-gray-400 hover:text-white py-2 rounded-lg hover:bg-gray-800/40 transition">' + META.privacyLabel + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ============================================================
  // Toggle behavior
  // ============================================================
  var toggle = document.getElementById('nav-toggle');
  var dropdown = document.getElementById('nav-dropdown');
  var backdrop;

  if (toggle && dropdown) {
    toggle.addEventListener('click', function() {
      dropdown.classList.toggle('hidden');
      toggle.classList.toggle('open');
    });

    // Backdrop close (dynamic, since it was just created)
    backdrop = document.getElementById('nav-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', function() {
        dropdown.classList.add('hidden');
        toggle.classList.remove('open');
      });
    }

    // Close on link click
    dropdown.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        dropdown.classList.add('hidden');
        toggle.classList.remove('open');
      });
    });
  }

  // ============================================================
  // GoatCounter analytics (privacy-friendly, no cookies)
  // Script served locally, only the ping goes to goatcounter.com
  // ============================================================
  if (!window.goatcounter) {
    var gc = document.createElement('script');
    gc.async = true;
    gc.src = '/js/count.js';
    gc.setAttribute('data-goatcounter', 'https://kimathias.goatcounter.com/count');
    document.body.appendChild(gc);
  }
})();
