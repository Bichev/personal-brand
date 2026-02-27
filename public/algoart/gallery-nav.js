(function () {
  'use strict';

  var GALLERY = [
    { file: 'nautilus.html', title: 'The Golden Chamber' },
    { file: 'harmonic-emergence.html', title: 'Harmonic Emergence' },
    { file: 'morphogenesis.html', title: 'Morphogenesis' },
    { file: 'collective-intelligence.html', title: 'Collective Intelligence' },
    { file: 'deterministic-chaos.html', title: 'Deterministic Chaos' },
    { file: 'recursive-growth.html', title: 'Recursive Growth' },
    { file: 'infinite-depth.html', title: 'Infinite Depth' },
    { file: 'invisible-currents.html', title: 'Invisible Currents' },
    { file: 'gravitational-ballet.html', title: 'Gravitational Ballet' },
    { file: 'resonant-traces.html', title: 'Resonant Traces' },
    { file: 'territories.html', title: 'Territories' },
    { file: 'cellular-worlds.html', title: 'Cellular Worlds' }
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
  var prevHref = '/algoart/' + prev.file;
  var nextHref = '/algoart/' + next.file;

  // ── Inject styles ──

  var css = [
    '.gallery-nav-side {',
    '  position: fixed;',
    '  top: 50%;',
    '  transform: translateY(-50%);',
    '  z-index: 999;',
    '  width: 36px;',
    '  height: 72px;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  text-decoration: none;',
    '  background: rgba(13, 13, 15, 0.55);',
    '  backdrop-filter: blur(6px);',
    '  -webkit-backdrop-filter: blur(6px);',
    '  border: 1px solid rgba(201, 165, 90, 0.12);',
    '  cursor: pointer;',
    '  opacity: 0;',
    '  transition: opacity 0.5s ease, background 0.3s, border-color 0.3s;',
    '}',
    '.gallery-nav-side--prev { left: 4px; border-radius: 3px; }',
    '.gallery-nav-side--next { right: 4px; border-radius: 3px; }',
    '@media (hover: hover) and (min-width: 769px) {',
    '  .gallery-nav-side { opacity: 0.2; }',
    '}',
    '@media (max-width: 768px) {',
    '  .gallery-nav-side { opacity: 0.3; width: 26px; height: 52px; }',
    '}',
    '.gallery-nav-side:hover {',
    '  opacity: 1;',
    '  background: rgba(13, 13, 15, 0.85);',
    '  border-color: rgba(201, 165, 90, 0.35);',
    '}',
    '.gallery-nav-side__icon {',
    '  font-family: "EB Garamond", serif;',
    '  font-size: 26px;',
    '  color: #c9a55a;',
    '  line-height: 1;',
    '  user-select: none;',
    '}',
    '@media (max-width: 768px) {',
    '  .gallery-nav-side__icon { font-size: 20px; }',
    '}',
    '',
    '/* Article bottom prev/next */',
    '.gallery-nav-bottom {',
    '  display: flex;',
    '  justify-content: space-between;',
    '  align-items: center;',
    '  margin-top: 24px;',
    '  padding-top: 24px;',
    '  border-top: 1px solid rgba(201, 165, 90, 0.08);',
    '}',
    '.gallery-nav-bottom a {',
    '  font-family: "Crimson Pro", serif;',
    '  font-size: 13px;',
    '  font-weight: 300;',
    '  letter-spacing: 1px;',
    '  color: #c9a55a;',
    '  text-decoration: none;',
    '  opacity: 0.5;',
    '  transition: opacity 0.3s;',
    '}',
    '.gallery-nav-bottom a:hover { opacity: 1; }',
    '.gallery-nav-bottom__prev { text-align: left; }',
    '.gallery-nav-bottom__next { text-align: right; }',
    '@media (max-width: 768px) {',
    '  .gallery-nav-bottom a { font-size: 11px; letter-spacing: 0.5px; }',
    '}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

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
    prevLink.innerHTML = '&larr; ' + prev.title;

    var nextLink = document.createElement('a');
    nextLink.href = nextHref;
    nextLink.className = 'gallery-nav-bottom__next';
    nextLink.innerHTML = next.title + ' &rarr;';

    bottom.appendChild(prevLink);
    bottom.appendChild(nextLink);
    articleNav.parentNode.insertBefore(bottom, articleNav.nextSibling);
  }
})();
