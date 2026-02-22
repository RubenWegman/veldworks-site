/* VeldWorks — main.js */

(function () {
  'use strict';

  // ── Hamburger menu ────────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        toggle.classList.remove('open');
        links.classList.remove('open');
      }
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // ── Active nav link ───────────────────────────────────────
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0];
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Nav hide on scroll down, show on scroll up ────────────
  var nav      = document.querySelector('nav');
  var lastY    = 0;
  var threshold = 80;

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > threshold) {
      if (y > lastY) {
        nav.style.transform = 'translateY(-100%)';
        nav.style.transition = 'transform 0.25s ease';
      } else {
        nav.style.transform = 'translateY(0)';
      }
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastY = y;
  }, { passive: true });

})();
