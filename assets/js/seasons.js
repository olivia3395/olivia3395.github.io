/* ==========================================================================
   Four Seasons Theme (+ Normal) — controller & particle generator
   Drop this in: assets/js/seasons.js
   Include via <script> in _includes/head/custom.html (after seasons.css)
   ========================================================================== */

(function () {
  'use strict';

  // ---------- 1. Per-season config & particle factories ----------
  // "normal" intentionally has count=0 and no make function: picking it
  // just clears the body attribute and removes all particles.
  const seasons = {
    spring: { emoji: '🌸', count: 22, label: 'Spring',  make: makePetal    },
    summer: { emoji: '🌿', count: 18, label: 'Summer',  make: makeFirefly  },
    autumn: { emoji: '🍂', count: 24, label: 'Autumn',  make: makeLeaf     },
    winter: { emoji: '❄️', count: 40, label: 'Winter',  make: makeSnow     }
  };

  const rand = (a, b) => Math.random() * (b - a) + a;

  function makePetal() {
    const el = document.createElement('div');
    const s  = rand(9, 15);
    el.innerHTML =
      '<svg width="' + s + '" height="' + s + '" viewBox="0 0 20 20">' +
        '<path d="M10 2 C 14 5, 16 10, 10 18 C 4 10, 6 5, 10 2 Z" fill="#f7a8c5" opacity="0.9"/>' +
        '<path d="M10 2 C 14 5, 16 10, 10 18 C 4 10, 6 5, 10 2 Z" fill="#fce0eb" opacity="0.4"/>' +
      '</svg>';
    return el;
  }

  function makeFirefly() {
    const el = document.createElement('div');
    const s  = rand(4, 8);
    const glow = document.createElement('div');
    glow.style.cssText =
      'width:' + s + 'px;height:' + s + 'px;border-radius:50%;' +
      'background:#9fd67a;box-shadow:0 0 ' + (s * 1.8) + 'px #b8e39a;' +
      'animation:season-twinkle ' + rand(1.5, 3).toFixed(2) + 's ease-in-out infinite';
    el.appendChild(glow);
    return el;
  }

  function makeLeaf() {
    const el = document.createElement('div');
    const s  = rand(11, 18);
    const colors = ['#d97706', '#c2410c', '#b45309', '#92400e', '#eab308'];
    const c = colors[Math.floor(Math.random() * colors.length)];
    el.innerHTML =
      '<svg width="' + s + '" height="' + s + '" viewBox="0 0 20 20">' +
        '<path d="M10 1 L15 6 L18 10 L15 14 L10 19 L5 14 L2 10 L5 6 Z" fill="' + c + '" opacity="0.88"/>' +
        '<line x1="10" y1="1" x2="10" y2="19" stroke="#5c2c08" stroke-width="0.5" opacity="0.5"/>' +
      '</svg>';
    return el;
  }

  function makeSnow() {
    const el = document.createElement('div');
    const s  = rand(5, 11);
    const flake = document.createElement('div');
    flake.style.cssText =
      'width:' + s + 'px;height:' + s + 'px;border-radius:50%;' +
      'background:white;opacity:0.88;box-shadow:0 0 3px rgba(255,255,255,0.95)';
    el.appendChild(flake);
    return el;
  }

  // ---------- 2. Render particles for current season ----------
  function renderParticles(season) {
    const layer = document.getElementById('season-particles');
    if (!layer) return;
    layer.innerHTML = '';
    // Normal mode: no particles at all
    if (season === 'normal' || !seasons[season]) return;
    const cfg = seasons[season];
    for (let i = 0; i < cfg.count; i++) {
      const p = cfg.make();
      p.classList.add('season-particle');
      p.style.left = rand(0, 100) + 'vw';
      p.style.setProperty('--drift', rand(-80, 80)   + 'px');
      p.style.setProperty('--spin',  rand(-360, 360) + 'deg');
      p.style.animationDuration = rand(9, 18).toFixed(1) + 's';
      p.style.animationDelay    = rand(-18, 0).toFixed(1) + 's';
      layer.appendChild(p);
    }
  }

  // ---------- 3. Apply a mode ----------
  function setSeason(s) {
    const valid = s === 'normal' || seasons[s];
    if (!valid) s = 'normal';

    if (s === 'normal') {
      // Remove the attribute so CSS rules gated on [data-season="..."] don't fire
      document.body.removeAttribute('data-season');
    } else {
      document.body.setAttribute('data-season', s);
    }

    try { localStorage.setItem('site-season', s); } catch (e) {}

    document.querySelectorAll('.season-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.season === s);
    });
    renderParticles(s);
  }

  // ---------- 4. Build DOM: particle layer + picker ----------
  function init() {
    if (document.getElementById('season-picker')) return;   // avoid duplicates

    const layer = document.createElement('div');
    layer.id = 'season-particles';
    document.body.appendChild(layer);

    const picker = document.createElement('div');
    picker.id = 'season-picker';
    picker.setAttribute('role', 'group');
    picker.setAttribute('aria-label', 'Seasonal theme');

    // Order: Normal | divider | Spring | Summer | Autumn | Winter
    const parts = [
      '<button class="season-btn" data-season="normal" title="Normal" aria-label="Normal">Normal</button>',
      '<span class="season-divider" aria-hidden="true"></span>'
    ];
    Object.keys(seasons).forEach(function (key) {
      const cfg = seasons[key];
      parts.push(
        '<button class="season-btn" data-season="' + key +
        '" title="' + cfg.label + '" aria-label="' + cfg.label +
        '">' + cfg.emoji + '</button>'
      );
    });
    picker.innerHTML = parts.join('');
    document.body.appendChild(picker);

    picker.addEventListener('click', function (e) {
      const btn = e.target.closest('.season-btn');
      if (btn) setSeason(btn.dataset.season);
    });

    // Default = Normal (white). User's previous choice is remembered if any.
    let saved = null;
    try { saved = localStorage.getItem('site-season'); } catch (e) {}
    setSeason(saved || 'normal');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
