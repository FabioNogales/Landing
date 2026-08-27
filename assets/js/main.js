/* Landing — Producción audiovisual
   Lógica portada desde el componente DC (Landing Produccion Audiovisual.dc.html):
   header sticky, barra de progreso, menú mobile, reveal on scroll, contadores,
   acordeón de FAQ, filtro de portafolio y CTA fija en mobile. */

(function () {
  'use strict';

  var MOBILE_BP = 860;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var header = document.getElementById('header');
  var progress = document.getElementById('progress');
  var stickyCta = document.getElementById('stickyCta');
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  /* ── Header, progreso y CTA fija ───────────────────── */

  function onScroll() {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;

    header.classList.toggle('is-scrolled', y > 24);
    progress.style.transform = 'scaleX(' + (h > 0 ? (y / h).toFixed(4) : 0) + ')';

    var past = y > window.innerHeight * 0.9;
    stickyCta.classList.toggle('is-visible', past && window.innerWidth < MOBILE_BP);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    closeMenu();
    onScroll();
  });
  onScroll();

  /* ── Menú mobile ───────────────────────────────────── */

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    var open = mobileMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  mobileMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ── Reveal on scroll ──────────────────────────────── */

  var revealNodes = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  revealNodes.forEach(function (n, i) {
    n.style.transitionDelay = (i % 4) * 90 + 'ms';
  });

  function show(n) { n.classList.add('is-visible'); }

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    revealNodes.forEach(function (n) { io.observe(n); });

    // Lo que ya está en pantalla al cargar no espera al observer.
    setTimeout(function () {
      revealNodes.forEach(function (n) {
        if (n.getBoundingClientRect().top < window.innerHeight) show(n);
      });
    }, 60);
  } else {
    revealNodes.forEach(show);
  }

  /* ── Contadores de métricas ────────────────────────── */

  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var pre = el.getAttribute('data-prefix') || '';
    var suf = el.getAttribute('data-suffix') || '';
    var t0 = performance.now();
    var dur = 1400;

    function tick(now) {
      var p = Math.min(1, (now - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(target * eased) + suf;
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCounter(e.target); io2.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { io2.observe(c); });
  }

  /* ── FAQ (un panel abierto a la vez) ───────────────── */

  var questions = Array.prototype.slice.call(document.querySelectorAll('.faq__q'));

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      questions.forEach(function (other) { other.setAttribute('aria-expanded', 'false'); });
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });

  /* ── Filtro de portafolio ──────────────────────────── */

  var filters = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  var workCards = Array.prototype.slice.call(document.querySelectorAll('.work__card'));
  var workEmpty = document.getElementById('workEmpty');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = btn.getAttribute('data-filter');

      filters.forEach(function (f) {
        var active = f === btn;
        f.classList.toggle('is-active', active);
        f.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      var visible = 0;
      workCards.forEach(function (card) {
        var match = tag === 'Todos' || card.getAttribute('data-tag') === tag;
        card.hidden = !match;
        if (match) visible++;
      });

      workEmpty.hidden = visible > 0;
    });
  });

  /* ── Formulario ────────────────────────────────────── */

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = 'Revisa los campos obligatorios: nombre y email.';
      form.reportValidity();
      return;
    }

    // [PENDIENTE] Conecta aquí tu endpoint (Formspree, Resend, API propia…).
    status.textContent = '[PENDIENTE] Formulario sin endpoint conectado. Los datos no se envían todavía.';
  });
})();
