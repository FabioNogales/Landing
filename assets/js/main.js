/* Fabio AI — interactions + ES/EN switch.
   Spanish is the native language: all copy lives in index.html (what crawlers and no-JS visitors get).
   English lives in the EN map below, keyed by data-i18n / data-i18n-ph. setLang('en') swaps it in;
   setLang('es') restores the Spanish read from the DOM on first run. STR holds runtime-only strings
   (form messages, WhatsApp, calendar label, English head tags) that have no DOM element. */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  var WA_URL = {
    es: 'https://wa.me/59162165130?text=' + encodeURIComponent('Hola Fabio, vi tu web y me gustaría recibir más información sobre tus servicios de producción audiovisual y contenido con IA.'),
    en: 'https://wa.me/59162165130?text=' + encodeURIComponent("Hi Fabio, I saw your website and I'd like more information about your audiovisual production and AI content services.")
  };

  /* ───────── English copy (DOM), keyed by data-i18n / data-i18n-ph ───────── */
  var EN = {
    "nav.work": "Portfolio",
    "nav.process": "Process",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Book a diagnostic",
    "nav.ctaShort": "Book",
    "hero.chip": "Video Production & <b>AI Content Workflows</b>",
    "hero.title": "Video Production & <span class=\"accent\">AI Content</span> for Brands",
    "hero.sub": "Audiovisual direction, shooting and AI-powered post-production for brands and agencies. Scale your vertical content and ad campaigns with realistic results, without the costs or delays of a traditional production company.",
    "hero.cta": "Let's talk about your project",
    "hero.reel": "Watch the reel (1 min)",
    "hero.note": "+250 pieces delivered for brands and agencies such as Bransign, Itacamba and Grazia.ai.",
    "ph.reel": "Latest reel",
    "ph.photo": "Fabio Nogales",
    "hero.role": "AI Video Producer &amp; Short-Form Content Strategist",
    "hero.stat": "days from pre-production to final delivery",
    "cmp.eyebrow": "The problem",
    "cmp.title": "Generic content burns your ad spend. <span class=\"accent\">Slow production stalls sales.</span>",
    "cmp.body": "Today you face two options that hold your business back: pay high retainers and wait weeks for a traditional studio, or hire fast editors who deliver directionless videos nobody finishes watching. My system combines human creative direction with AI workflows to deliver agency-grade pieces in days, built to convert.",
    "cmp.trad": "Traditional production company",
    "cmp.tradVal": "≈ 4–6 weeks · 1 single piece · High friction",
    "cmp.me": "My work system",
    "cmp.meVal": "≈ 3–6 days · Multi-format pack · Ad-ready",
    "cmp.c1": "Traditional studio",
    "cmp.c1a": "Weeks of waiting for a single piece",
    "cmp.c1b": "Rigid budgets that are hard to scale",
    "cmp.c1c": "Slow pacing built for TV, not social",
    "cmp.c2": "Generic freelance editor",
    "cmp.c2a": "Fast turnaround, zero commercial vision",
    "cmp.c2b": "Requires you to micromanage every cut",
    "cmp.c2c": "Low-retention edits that dilute your brand",
    "cmp.c3": "My work system",
    "cmp.c3a": "Agency-grade quality delivered in 3–6 days",
    "cmp.c3b": "You approve the concept; I execute end-to-end",
    "cmp.c3c": "Hook & format variations ready to scale ads",
    "cmp.vpT": "Human creative direction meets AI speed. <span class=\"accent\">Content that converts and scales.</span>",
    "cmp.vpB": "You don't need an in-house video department or months of filming to project authority. Get a steady stream of ads and vertical videos engineered with retention psychology to hook viewers in the first 3 seconds and turn attention into clients.",
    "pil.title": "Why this approach <span class=\"accent\">works</span>",
    "pil.1t": "Commercial vision and brand aesthetics",
    "pil.1b": "Every script, frame and cut answers to retention and conversion metrics, backed by my background in Business Engineering.",
    "pil.2t": "Integrated AI workflows",
    "pil.2b": "I speed up pre-production, hyper-realistic B-roll development and format adaptation while keeping an organic finish.",
    "pil.3t": "One creative owner",
    "pil.3b": "You deal directly with the person who designs the strategy, directs the shoot and oversees post-production.",
    "pil.bts": "Behind the scenes",
    "proc.title": "A clear and agile <span class=\"accent\">creative process</span>",
    "proc.intro": "I remove operational friction. An on-site shoot takes ≈ 6 days; a 100% AI-assisted production takes 3 days. Both paths follow a structured process with 2 revision rounds included.",
    "proc.kind1": "On-site production · ≈ 6 days",
    "proc.tag1": "Pre-production",
    "proc.1t": "1. Pre-production &amp; Script",
    "proc.1d": "We pin down the message before turning on the camera.",
    "proc.1a": "Hook design and narrative structure focused on retention.",
    "proc.1b": "Locations, visual references and shooting plan.",
    "proc.1c": "Technical prep of camera, optics, lighting and sound.",
    "proc.1x": "1 to 2 days",
    "proc.tag2": "On set",
    "proc.2t": "2. Shooting &amp; Direction",
    "proc.2d": "Agile 4K capture with on-set direction.",
    "proc.2a": "Directing on-camera talent for naturalness and authority.",
    "proc.2b": "Professional lighting and audio setup adapted to your space or studio.",
    "proc.2c": "4K shooting with professional lighting and a camera assistant when the project requires it.",
    "proc.2x": "1 shoot day (4 to 7 hours)",
    "proc.tag3": "Post-production",
    "proc.3t": "3. Post-production + AI",
    "proc.3d": "Precisely paced editing and visual finish.",
    "proc.3a": "Dynamic editing, color correction and sound design.",
    "proc.3b": "Visual support (generative B-roll or motion graphics) when the story calls for it.",
    "proc.3c": "Delivery optimized for Reels, TikTok, Shorts or paid ads.",
    "proc.3x": "≈ 2 to 3 days",
    "proc.altT": "Remote AI production · 3 days",
    "proc.altB": "From base material or earlier recordings, I develop complete pieces with realistic B-roll, voice synthesis and organic digital avatars. Ideal for scaling product content and UGC campaigns from any country.",
    "num.eyebrow": "Results",
    "num.title": "The performance of a <span class=\"accent\">well-directed production</span>",
    "num.3": "improvement in per-video performance: higher retention and better delivery",
    "cta.text": "Got a campaign or launch coming up? Let's check your calendar.",
    "srv.title": "What I <span class=\"accent\">offer</span>",
    "srv.1t": "Short-form video strategy &amp; scripting",
    "srv.1d": "Concepts, hooks and structures designed to grab attention in the first 3 seconds.",
    "srv.2t": "Audiovisual production &amp; shooting",
    "srv.2d": "Professional filming on location or in studio, with technical and narrative direction.",
    "srv.3t": "Post-production &amp; retention pacing",
    "srv.3d": "Advanced editing, sound design, color grading and graphics that sustain interest.",
    "srv.4t": "AI creation &amp; scaling",
    "srv.4d": "Hyper-realistic B-roll, visual assets and multi-format versions for ads and social.",
    "wrk.title": "Selected <span class=\"accent\">work</span>",
    "wrk.f0": "All",
    "wrk.f1": "AI UGC",
    "wrk.f2": "Events &amp; brands",
    "wrk.f3": "Product &amp; AI",
    "wrk.f4": "Agency",
    "wrk.ig": "View on Instagram",
    "wrk.reel": "See the full reel",
    "fit.title": "Who this service <span class=\"accent\">is for</span>",
    "fit.1": "Marketing agencies that need a timely, resourceful audiovisual partner with brand judgment.",
    "fit.2": "Brands and companies looking to professionalize their short-form video and ads without hiring an in-house team.",
    "fit.3": "Startups and creators who need to scale production by combining real video and generative AI.",
    "fit.cta": "30 minutes to assess your goals, delivery times and budget.",
    "fit.no": "I'm not the right provider if you want generic bulk editing at the lowest price, or pieces with no clear commercial goal.",
    "ab.title": "About <span class=\"accent\">me</span>",
    "ab.body": "I'm Fabio Nogales, audiovisual producer, AI content strategist and Business Engineer. I co-founded the production company Studio 404 and have led the creation of hundreds of pieces for corporate brands, agencies and international AI startups such as Grazia.ai. My approach joins traditional camera and lighting direction with generative AI workflows to create realistic, profitable videos designed to convert.",
    "ab.pull": "I don't replace human judgment with AI: I use AI to multiply the impact of good direction.",
    "faq.title": "Frequently asked <span class=\"accent\">questions</span>",
    "faq.1q": "How long does a production take, start to finish?",
    "faq.1a": "An on-site production takes around 6 business days (1–2 of pre-production, 1 shoot day and 2–3 of post-production). Remote AI-powered productions are delivered in 3 business days.",
    "faq.2q": "Does using AI make videos look artificial or generic?",
    "faq.2a": "No. The problem with generic AI content is the lack of audiovisual direction. I apply cinematography judgment, editing rhythm and real storytelling so generative B-roll, voice or avatars blend in naturally and keep your brand identity.",
    "faq.3q": "How is the investment structured?",
    "faq.3a": "I work per package of pieces or per specific project, depending on the production level required (on-site shoot, advanced editing or 100% AI workflow). On our diagnostic call or via WhatsApp I give you a fixed quote with no hidden costs.",
    "faq.4q": "Do you work with agencies on a white-label basis?",
    "faq.4a": "Yes. I plug into your agency's workflow as a production and post-production arm, respecting your timelines and client guidelines.",
    "faq.5q": "How many revision rounds does each delivery include?",
    "faq.5a": "Every project includes 2 structured revision rounds to make sure the final cut matches exactly what was agreed in pre-production.",
    "faq.6q": "What do you need from me to get started?",
    "faq.6a": "A clear commercial goal for the pieces, visual references or a brand guide, and one person responsible for approving the script and the cuts.",
    "faq.7q": "Do you work on-site or remotely?",
    "faq.7a": "I shoot on-site in Santa Cruz de la Sierra (available to travel) and work 100% remotely for clients and agencies in any country through post-production and AI workflows.",
    "bk.title": "Let's talk about your <span class=\"accent\">next project.</span>",
    "bk.sub": "Book a 30-minute call or message me directly on WhatsApp to see which format fits your brand best.",
    "bk.cal": "Diagnostic meeting",
    "bk.calHint": "Pick a time on the calendar, or contact me on WhatsApp for a quick reply.",
    "bk.alt": "Prefer direct contact? <a href=\"" + WA_URL.en + "\" target=\"_blank\" rel=\"noopener\" class=\"accent\" style=\"text-decoration:underline;font-weight:600;\">Message me on WhatsApp (+591 62165130)</a> or fill in the form:",
    "bk.f1": "Name",
    "bk.f2": "Email",
    "bk.f3": "Company or Brand",
    "bk.f4": "What type of content do you need?",
    "bk.f5": "Ideal launch date",
    "bk.send": "Send inquiry",
    "ft.tag": "Audiovisual direction and AI content strategy for brands and agencies.",
    "ft.privacy": "Privacy",
    "ft.city": "Santa Cruz, Bolivia · Available worldwide (GMT-4)",
    "ft.rights": "All rights reserved.",
    "bk.p1": "Your name",
    "bk.p3": "Your brand or agency name",
    "bk.p4": "E.g. batch of Reels, AI product video, coverage…",
    "bk.p5": "E.g. this week / next month"
  };

  /* ───────── Runtime strings (no DOM element holds their Spanish) ───────── */
  var STR = {
    es: {
      'wa.btn': 'Contactar por WhatsApp',
      'cal.btn': 'Programar una cita',
      'js.needs': 'Por favor, completa tu nombre y un correo válido.',
      'js.sending': 'Enviando…',
      'js.ok': 'Recibido. Te responderé en menos de 24 horas.',
      'js.fail': 'No se pudo enviar. Escríbeme por WhatsApp al +591 62165130 o a fabioaioficial@gmail.com.',
      'js.noEndpoint': 'Abriendo tu cliente de correo con el mensaje listo…'
    },
    en: {
      'meta.title': 'Fabio Nogales | Video Production & AI Content Creation',
      'meta.desc': 'Video producer and short-form strategist (Reels, TikTok & Ads) powered by AI. 4K shooting, hyperrealistic B-roll and post-production in 3 to 6 days.',
      'meta.locale': 'en_US',
      'meta.localeAlt': 'es_LA',
      'wa.btn': 'Chat on WhatsApp',
      'cal.btn': 'Book a 30-min call',
      'js.needs': 'Please add your name and a valid email.',
      'js.sending': 'Sending…',
      'js.ok': "Received. I'll reply within 24 hours.",
      'js.fail': 'Could not send. Message me on WhatsApp (+591 62165130) or fabioaioficial@gmail.com.',
      'js.noEndpoint': 'Opening your email app with the message ready to send…'
    }
  };

  /* ───────── i18n ───────── */
  var lang = 'es';
  /* Head tags that follow the language; their Spanish value is read from the HTML on first use. */
  var HEAD = [
    ['title', 'meta.title'],
    ['meta[name="description"]', 'meta.desc'],
    ['meta[property="og:title"]', 'meta.title'],
    ['meta[property="og:description"]', 'meta.desc'],
    ['meta[property="og:image:alt"]', 'meta.title'],
    ['meta[property="og:locale"]', 'meta.locale'],
    ['meta[property="og:locale:alternate"]', 'meta.localeAlt']
  ];

  function msg(k) { return STR[lang][k]; }

  /* The native Spanish of each node is stored once (data-es / data-es-ph) and restored for 'es'.
     A node is only written when its value really changes, so a Spanish page load rewrites nothing. */
  function setLang(l, persist) {
    lang = l === 'en' ? 'en' : 'es';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (n) {
      if (n.dataset.es == null) n.dataset.es = n.innerHTML;
      var en = EN[n.dataset.i18n];
      var v = (lang === 'en' && en != null) ? en : n.dataset.es;
      if (n.innerHTML !== v) n.innerHTML = v;
    });
    $$('[data-i18n-ph]').forEach(function (n) {
      if (n.dataset.esPh == null) n.dataset.esPh = n.getAttribute('placeholder') || '';
      var en = EN[n.dataset.i18nPh];
      var v = (lang === 'en' && en != null) ? en : n.dataset.esPh;
      if (n.getAttribute('placeholder') !== v) n.setAttribute('placeholder', v);
    });
    HEAD.forEach(function (h) {
      var el = $(h[0]);
      if (!el) return;
      var isTitle = el.tagName === 'TITLE';
      var cur = isTitle ? document.title : el.getAttribute('content');
      if (el.dataset.es == null) el.dataset.es = cur;
      var en = STR.en[h[1]];
      var v = (lang === 'en' && en != null) ? en : el.dataset.es;
      if (cur === v) return;
      if (isTitle) document.title = v; else el.setAttribute('content', v);
    });
    $$('.lang__btn').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    var waBtn = $('#waDirectBtn');
    if (waBtn) {
      if (waBtn.textContent !== msg('wa.btn')) waBtn.textContent = msg('wa.btn');
      if (waBtn.getAttribute('href') !== WA_URL[lang]) waBtn.setAttribute('href', WA_URL[lang]);
    }
    renderCal();
    if (persist) store.set('fabioai-lang', lang);
  }

  /* ───────── Google Calendar appointment button ─────────
     Google's script renders one <button> right after `target` and never updates its label, so on each
     language change #calBtn is emptied and the button rendered again with the new label.
     #calBtn is display:contents, so the button still lays out as a direct item of .calslot's grid. */
  var calBox = $('#calBtn'), calReady = false, calLabel = null;
  function renderCal() {
    if (!calReady || !calBox || !window.calendar || !calendar.schedulingButton) return;
    var label = msg('cal.btn');
    if (label === calLabel) return;
    calLabel = label;
    calBox.textContent = '';
    var mark = document.createElement('span');
    mark.hidden = true;
    calBox.appendChild(mark);
    calendar.schedulingButton.load({ url: calBox.dataset.url, color: '#EF6C00', label: label, target: mark });
  }
  function calStart() { calReady = true; renderCal(); }
  if (document.readyState === 'complete') calStart(); else window.addEventListener('load', calStart);

  $$('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang, true); });
  });

  /* Marquee: clone the track once so the loop is seamless (the strip holds no translatable copy). */
  var strip = $('#stripInner');
  if (strip && strip.firstElementChild) {
    var clone = strip.firstElementChild.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    strip.appendChild(clone);
  }

  /* Film strip */
  var film = $('#filmInner');
  if (film && film.firstElementChild) {
    var filmStart = function () {
      if (!reduce) {
        for (var fc = 0; fc < 2; fc++) {
          var filmClone = film.firstElementChild.cloneNode(true);
          filmClone.setAttribute('aria-hidden', 'true');
          film.appendChild(filmClone);
        }
        film.parentNode.classList.add('is-on');
      }
      $$('img', film).forEach(function (im) { im.loading = 'eager'; });
    };
    if ('IntersectionObserver' in window) {
      var filmIO = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return;
        filmIO.disconnect();
        filmStart();
      }, { rootMargin: '800px 0px' });
      filmIO.observe(film);
    } else {
      filmStart();
    }
  }

  var saved = store.get('fabioai-lang');
  setLang(saved || 'es', false);

  /* ───────── Nav ───────── */
  var header = $('#header'), burger = $('#burger'), mmenu = $('#mmenu');
  function closeMenu() { burger.setAttribute('aria-expanded', 'false'); mmenu.classList.remove('is-open'); }
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    mmenu.classList.toggle('is-open', !open);
  });
  $$('a', mmenu).forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ───────── Scroll: progress, header state, sticky CTA ───────── */
  var progress = $('#progress'), sticky = $('#sticky'), book = $('#book');
  var bookVisible = false;
  if ('IntersectionObserver' in window && book) {
    new IntersectionObserver(function (es) { bookVisible = es[0].isIntersecting; onScroll(); }, { threshold: 0.15 }).observe(book);
  }
  function onScroll() {
    var y = window.scrollY || 0;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    header.classList.toggle('is-scrolled', y > 40);
    sticky.classList.toggle('is-visible', y > 700 && !bookVisible);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ───────── Reveal + count-up ───────── */
  function countUp(el) {
    var end = parseFloat(el.dataset.count), end2 = el.dataset.count2 != null ? parseFloat(el.dataset.count2) : null, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    var fmt = function (k) { return pre + Math.round(end * k) + (end2 !== null ? '–' + Math.round(end2 * k) : '') + suf; };
    if (reduce || isNaN(end)) { el.textContent = fmt(1); return; }
    var t0 = null, dur = 1100;
    function tick(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(e);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var targets = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        $$('[data-count]', en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
  }

  /* ───────── Collage parallax ───────── */
  var plxBoxes = $$('.bts__collage, .proc__cluster');
  if (plxBoxes.length && !reduce) {
    var plxQueued = false;
    var plxApply = function () {
      plxQueued = false;
      var vh = window.innerHeight;
      plxBoxes.forEach(function (box) {
        var r = box.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
        $$('[data-plx]', box).forEach(function (c) { c.style.translate = '0 ' + (p * c.dataset.plx).toFixed(1) + 'px'; });
      });
    };
    window.addEventListener('scroll', function () {
      if (!plxQueued) { plxQueued = true; requestAnimationFrame(plxApply); }
    }, { passive: true });
    plxApply();
  }

  /* ───────── Work filters ───────── */
  var filters = $$('.filter'), cards = $$('.wcard');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      filters.forEach(function (x) { x.classList.toggle('is-active', x === f); x.setAttribute('aria-pressed', String(x === f)); });
      cards.forEach(function (c) { c.hidden = f.dataset.filter !== 'all' && c.dataset.tag !== f.dataset.filter; });
    });
  });

  /* ───────── FAQ ───────── */
  $$('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var open = q.getAttribute('aria-expanded') === 'true';
      $$('.faq__q').forEach(function (o) { o.setAttribute('aria-expanded', 'false'); });
      q.setAttribute('aria-expanded', String(!open));
    });
  });

  /* ───────── Contact form ───────── */
  var form = $('#contactForm'), status = $('#formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = String(v).trim(); });
    var badName = !data.name, badMail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '');
    $('[name="name"]', form).classList.toggle('is-invalid', badName);
    $('[name="email"]', form).classList.toggle('is-invalid', badMail);
    status.classList.remove('is-ok');
    if (badName || badMail) { status.textContent = msg('js.needs'); return; }
    if (data.website) { status.classList.add('is-ok'); status.textContent = msg('js.ok'); form.reset(); return; }
    var url = form.dataset.endpoint;
    if (!url) {
      var body = (lang === 'es' ? ['Nombre: ' + data.name, 'Correo: ' + data.email, 'Empresa: ' + (data.company || '-'), 'Necesito: ' + (data.need || '-'), 'Fecha de entrega: ' + (data.date || '-')] : ['Name: ' + data.name, 'Email: ' + data.email, 'Company: ' + (data.company || '-'), 'Need: ' + (data.need || '-'), 'Delivery date: ' + (data.date || '-')]).join('\n');
      status.classList.add('is-ok'); status.textContent = msg('js.noEndpoint');
      window.location.href = 'mailto:fabioaioficial@gmail.com?subject=' + encodeURIComponent((lang === 'es' ? 'Nuevo proyecto — ' : 'New project — ') + data.name) + '&body=' + encodeURIComponent(body);
      return;
    }
    status.textContent = msg('js.sending');
    data.lang = lang; data.source = 'fabionogales.com';
    data._subject = (lang === 'es' ? 'Nueva consulta desde fabionogales.com — ' : 'New inquiry from fabionogales.com — ') + data.name;
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); status.classList.add('is-ok'); status.textContent = msg('js.ok'); form.reset(); })
      .catch(function () { status.textContent = msg('js.fail'); });
  });
})();