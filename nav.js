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
      icon: '\uD83E\uDDE0',  // 🧠
      de: { title: 'Emergenz in Sprachmodellen', subtitle: 'Phasen\u00FCberg\u00E4nge \u00B7 Grokking \u00B7 Ising', href: '/emergenz.html' },
      en: { title: 'Emergence in Language Models', subtitle: 'Phase transitions \u00B7 Grokking \u00B7 Ising', href: '/en/emergence.html' }
    },
    {
      icon: '\uD83E\uDD85',  // 🦅
      de: { title: 'Vogelsimulator', subtitle: '3D \u00B7 Webcam \u00B7 Gestensteuerung', href: '/vogelsimulator.html' },
      en: { title: 'Bird Simulator', subtitle: '3D \u00B7 Webcam \u00B7 Gesture Control', href: '/en/flight-simulator.html' }
    },
    {
      icon: '\u03BB',  // λ
      de: { title: 'Eigenwerte & KI', subtitle: 'Kernel \u00B7 PageRank \u00B7 Neumann-Reihe', href: '/eigenwerte.html' },
      en: { title: 'Eigenvalues & AI', subtitle: 'Kernels \u00B7 PageRank \u00B7 Neumann Series', href: '/en/eigenvalues.html' }
    },
    {
      icon: '\u2728',  // ✨
      de: { title: 'Gott als Emergenzph\u00E4nomen', subtitle: 'Whitehead \u00B7 Spinoza \u00B7 Koh\u00E4renz', href: '/gott.html' },
      en: { title: 'God as Emergent Phenomenon', subtitle: 'Whitehead \u00B7 Spinoza \u00B7 Coherence', href: '/en/god.html' }
    }
  ];

  // ============================================================
  // META LINKS
  // ============================================================
  var META = isEN
    ? { imprint: '/en/imprint.html', privacy: '/en/privacy.html', imprintLabel: 'Imprint', privacyLabel: 'Privacy' }
    : { imprint: '/impressum.html', privacy: '/datenschutz.html', imprintLabel: 'Impressum', privacyLabel: 'Datenschutz' };

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
      tocHTML =
        '<div class="p-3">' +
          '<p class="text-xs uppercase tracking-widest text-gray-500 px-2 mb-2">' + (isEN ? 'This Post' : 'Diesen Beitrag') + '</p>' +
          tocSlot.innerHTML +
        '</div>' +
        '<div class="h-px bg-gray-800 mx-3"></div>';
      tocSlot.remove();
    }

    navDropdown.innerHTML =
      '<div id="nav-backdrop" class="absolute inset-0 bg-black/40" style="min-height:100vh;"></div>' +
      '<div class="relative max-w-xs mx-4 sm:mx-8 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto">' +
        tocHTML +
        '<div class="p-3">' +
          '<p class="text-xs uppercase tracking-widest text-gray-500 px-2 mb-2">' + postsLabel + '</p>' +
          postsHTML +
        '</div>' +
        '<div class="sm:hidden">' +
          '<div class="h-px bg-gray-800 mx-3"></div>' +
          '<div class="p-3 flex gap-1">' +
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
})();
