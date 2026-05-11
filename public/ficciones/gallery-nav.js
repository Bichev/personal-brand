(function () {
  'use strict';

  // The twelve pieces, in the narrative order of Ficciones (1944).
  // First six: "El jardín de senderos que se bifurcan" (1941).
  // Last six: "Artificios" (1944).
  var GALLERY = [
    { file: 'tlon-uqbar.html',         title: 'Tlön, Uqbar, Orbis Tertius' },
    { file: 'pierre-menard.html',      title: 'Pierre Menard' },
    { file: 'circular-ruins.html',     title: 'The Circular Ruins' },
    { file: 'lottery-babylon.html',    title: 'The Lottery in Babylon' },
    { file: 'library-babel.html',      title: 'The Library of Babel' },
    { file: 'forking-paths.html',      title: 'The Garden of Forking Paths' },
    { file: 'funes.html',              title: 'Funes the Memorious' },
    { file: 'shape-of-sword.html',     title: 'The Shape of the Sword' },
    { file: 'traitor-and-hero.html',   title: 'The Traitor and the Hero' },
    { file: 'death-compass.html',      title: 'Death and the Compass' },
    { file: 'secret-miracle.html',     title: 'The Secret Miracle' },
    { file: 'the-south.html',          title: 'The South' }
  ];

  var path = window.location.pathname;
  var currentFile = path.split('/').pop() || '';
  var currentIndex = -1;
  for (var i = 0; i < GALLERY.length; i++) {
    if (GALLERY[i].file === currentFile) { currentIndex = i; break; }
  }
  if (currentIndex === -1) return;

  var prevIndex = (currentIndex - 1 + GALLERY.length) % GALLERY.length;
  var nextIndex = (currentIndex + 1) % GALLERY.length;
  var prev = GALLERY[prevIndex];
  var next = GALLERY[nextIndex];
  var prevHref = '/ficciones/' + prev.file;
  var nextHref = '/ficciones/' + next.file;

  // ── Inject styles (brass palette) ──

  var css = [
    '/* Top nav prev/next */',
    '.gallery-nav-top {',
    '  display: flex;',
    '  align-items: center;',
    '  gap: 14px;',
    '  pointer-events: auto;',
    '}',
    '.gallery-nav-top__btn {',
    '  font-family: "Cormorant Garamond", serif;',
    '  font-style: italic;',
    '  font-size: 22px;',
    '  line-height: 1;',
    '  color: #c69654;',
    '  text-decoration: none;',
    '  opacity: 0.55;',
    '  transition: opacity 0.3s, color 0.3s;',
    '  padding: 2px 4px;',
    '  pointer-events: auto;',
    '}',
    '.gallery-nav-top__btn:hover { opacity: 1; color: #e0b478; }',
    '@media (max-width: 768px) {',
    '  .gallery-nav-top { gap: 8px; }',
    '  .gallery-nav-top__btn { font-size: 18px; }',
    '}',
    '',
    '/* Side arrows — always visible */',
    '.gallery-nav-side {',
    '  position: fixed;',
    '  top: 50%;',
    '  transform: translateY(-50%);',
    '  z-index: 90;',
    '  width: 38px;',
    '  height: 72px;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  text-decoration: none;',
    '  background: rgba(12, 10, 8, 0.78);',
    '  backdrop-filter: blur(8px);',
    '  -webkit-backdrop-filter: blur(8px);',
    '  border: 1px solid rgba(198, 150, 84, 0.25);',
    '  cursor: pointer;',
    '  opacity: 0.55;',
    '  transition: opacity 0.3s ease, background 0.3s, border-color 0.3s;',
    '}',
    '.gallery-nav-side--prev { left: 6px; border-radius: 1px; }',
    '.gallery-nav-side--next { right: 6px; border-radius: 1px; }',
    '.gallery-nav-side:hover {',
    '  opacity: 1;',
    '  background: rgba(12, 10, 8, 0.92);',
    '  border-color: rgba(198, 150, 84, 0.55);',
    '}',
    '.gallery-nav-side__icon {',
    '  font-family: "Cormorant Garamond", serif;',
    '  font-style: italic;',
    '  font-size: 28px;',
    '  color: #c69654;',
    '  line-height: 1;',
    '  user-select: none;',
    '}',
    '@media (max-width: 768px) {',
    '  .gallery-nav-side { width: 30px; height: 56px; }',
    '  .gallery-nav-side__icon { font-size: 22px; }',
    '}',
    '',
    '/* Article bottom prev/next */',
    '.gallery-nav-bottom {',
    '  display: flex;',
    '  justify-content: space-between;',
    '  align-items: center;',
    '  margin-top: 28px;',
    '  padding-top: 28px;',
    '  border-top: 1px solid rgba(198, 150, 84, 0.12);',
    '}',
    '.gallery-nav-bottom a {',
    '  font-family: "IBM Plex Mono", monospace;',
    '  font-size: 11px;',
    '  font-weight: 400;',
    '  letter-spacing: 1.5px;',
    '  color: #c69654;',
    '  text-decoration: none;',
    '  opacity: 0.7;',
    '  text-transform: uppercase;',
    '  transition: opacity 0.3s, color 0.3s;',
    '}',
    '.gallery-nav-bottom a:hover { opacity: 1; color: #e0b478; }',
    '.gallery-nav-bottom__prev { text-align: left; max-width: 45%; }',
    '.gallery-nav-bottom__next { text-align: right; max-width: 45%; }',
    '@media (max-width: 768px) {',
    '  .gallery-nav-bottom a { font-size: 10px; letter-spacing: 1px; }',
    '}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Top nav prev/next buttons ──

  var backNav = document.querySelector('.back-nav');
  if (backNav) {
    var backLink = backNav.querySelector('a');
    if (backLink) {
      var wrapper = document.createElement('div');
      wrapper.className = 'gallery-nav-top';

      var prevBtn = document.createElement('a');
      prevBtn.href = prevHref;
      prevBtn.className = 'gallery-nav-top__btn';
      prevBtn.textContent = '\u2039';
      prevBtn.title = prev.title;

      var nextBtn = document.createElement('a');
      nextBtn.href = nextHref;
      nextBtn.className = 'gallery-nav-top__btn';
      nextBtn.textContent = '\u203A';
      nextBtn.title = next.title;

      backLink.parentNode.insertBefore(wrapper, backLink);
      wrapper.appendChild(prevBtn);
      wrapper.appendChild(backLink);
      wrapper.appendChild(nextBtn);
    }
  }

  // ── Side navigation arrows ──

  function createSideNav(dir, item, href) {
    var a = document.createElement('a');
    a.href = href;
    a.className = 'gallery-nav-side gallery-nav-side--' + dir;
    a.title = item.title;
    var icon = document.createElement('span');
    icon.className = 'gallery-nav-side__icon';
    icon.textContent = dir === 'prev' ? '\u2039' : '\u203A';
    a.appendChild(icon);
    return a;
  }

  document.body.appendChild(createSideNav('prev', prev, prevHref));
  document.body.appendChild(createSideNav('next', next, nextHref));

  // ── Bottom article navigation ──

  var articleNav = document.querySelector('.article-nav');
  if (articleNav) {
    var bottom = document.createElement('div');
    bottom.className = 'gallery-nav-bottom';

    var prevLink = document.createElement('a');
    prevLink.href = prevHref;
    prevLink.className = 'gallery-nav-bottom__prev';
    prevLink.innerHTML = '\u2190 ' + prev.title;

    var nextLink = document.createElement('a');
    nextLink.href = nextHref;
    nextLink.className = 'gallery-nav-bottom__next';
    nextLink.innerHTML = next.title + ' \u2192';

    bottom.appendChild(prevLink);
    bottom.appendChild(nextLink);
    articleNav.parentNode.insertBefore(bottom, articleNav.nextSibling);
  }
})();
