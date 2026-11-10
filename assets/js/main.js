/* Fabio AI — interactions + EN/ES switch.
   English lives in the HTML (good for SEO / no-JS); Spanish lives in the ES map below. */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  var WA_URL = 'https://wa.me/59162165130?text=' + encodeURIComponent('Hola Fabio, vi tu web y me gustaría recibir más información sobre tus servicios de producción audiovisual y contenido con IA.');

  /* ───────── Spanish copy ───────── */
  var ES = {
    'meta.title': 'Fabio Nogales — Producción Audiovisual & Estrategia de Contenido con IA',
    'meta.desc': 'Dirección audiovisual y flujos de trabajo con IA para marcas, agencias y creadores. Contenido realista, eficiente y diseñado para retener y convertir.',
    'nav.work': 'Portafolio', 'nav.process': 'Proceso', 'nav.services': 'Servicios', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto',
    'nav.cta': 'Agenda un diagnóstico', 'nav.ctaShort': 'Agendar',
    'hero.chip': 'Dirección audiovisual + <b>Flujos de trabajo con IA</b>',
    'hero.title': 'Calidad cinematográfica. Tiempos de <span class="accent">startup.</span>',
    'hero.sub': 'Producción de video estratégica para marcas y agencias que buscan contenido realista y de alto impacto sin los plazos ni costos de una productora tradicional. Uno el criterio de rodaje profesional con inteligencia artificial generativa.',
    'hero.cta': 'Agenda una sesión de diagnóstico', 'hero.reel': 'Ver el reel',
    'hero.role': 'AI Video Producer & Short-Form Content Strategist',
    'hero.note': '+250 piezas entregadas para marcas y agencias como Bransign, Itacamba y Grazia.ai.',
    'hero.stat': 'días de preproducción a entrega final',
    'todo': 'Pendiente', 'todo.confirm': 'Confirmar', 'todo.video': 'Video pendiente',
    'ph.reel': 'Último reel', 'ph.photo': 'Fabio Nogales',
    'cmp.eyebrow': 'El problema',
    'cmp.title': 'Publicar por publicar <span class="accent">ya no convierte.</span>',
    'cmp.body': 'Tu marca necesita volumen constante sin perder autoridad visual. Una productora tradicional tarda semanas en entregar una sola pieza; un editor genérico entrega volumen sin dirección ni retención. Mi modelo resuelve ambos frentes: criterio cinematográfico y flujos de IA para escalar con realismo.',
    'cmp.trad': 'Productora tradicional', 'cmp.tradVal': '≈ 6 semanas · 1 pieza',
    'cmp.me': 'Flujo Fabio AI', 'cmp.meVal': '≈ 3 a 6 días · multiformato',
    'cmp.c1': 'Productora tradicional', 'cmp.c1a': 'Alta calidad, entrega lenta', 'cmp.c1b': 'Costos fijos elevados', 'cmp.c1c': 'Poca adaptabilidad a redes',
    'cmp.c2': 'Freelance tradicional', 'cmp.c2a': 'Rápido, sin visión comercial', 'cmp.c2b': 'Sin dirección creativa', 'cmp.c2c': 'Resultados inconsistentes',
    'cmp.c3': 'Mi sistema de trabajo', 'cmp.c3a': 'Estética de agencia en días', 'cmp.c3b': 'Dirección integral de principio a fin', 'cmp.c3c': 'Múltiples piezas listas para convertir',
    'cmp.vpT': 'Dirección humana y eficiencia con IA. <span class="accent">Contenido realista que escala.</span>',
    'cmp.vpB': 'Diseño y produzco piezas audiovisuales pensadas en retención, narrativa clara y objetivos comerciales para tu cliente ideal.',
    'pil.title': 'Por qué este enfoque <span class="accent">funciona</span>',
    'pil.1t': 'Visión comercial y estética de marca',
    'pil.1b': 'Cada guion, encuadre y corte responde a métricas de retención y conversión, respaldado por mi base en Ingeniería Comercial.',
    'pil.2t': 'Flujos de trabajo con IA integrados',
    'pil.2b': 'Acelero la preproducción, el desarrollo de B-roll hiperrealista y la adaptación de formatos manteniendo un acabado orgánico.',
    'pil.3t': 'Un solo responsable creativo',
    'pil.3b': 'Tratas directamente con quien diseña la estrategia, dirige el rodaje y supervisa la postproducción.',
    'pil.bts': 'Detrás de cámaras',
    'proc.tag1': 'Preproducción', 'proc.tag2': 'Rodaje',
    'proc.title': 'Un proceso creativo <span class="accent">claro y ágil</span>',
    'proc.intro': 'Elimino la fricción operativa. Una producción con rodaje presencial toma ≈ 6 días; una producción 100% asistida por IA toma 3 días. Ambos caminos siguen un proceso estructurado con 2 rondas de revisión incluidas.',
    'proc.kind1': 'Producción presencial · ≈ 6 días',
    'proc.1t': '1. Preproducción y Guion', 'proc.1d': 'Aterrizamos el mensaje antes de encender la cámara.',
    'proc.1a': 'Diseño de ganchos (hooks) y estructura narrativa enfocada en retención.',
    'proc.1b': 'Definición de locaciones, referencias visuales y plan de rodaje.',
    'proc.1c': 'Preparación técnica de cámara, óptica, iluminación y sonido.',
    'proc.1x': '1 a 2 días',
    'proc.2t': '2. Rodaje y Dirección', 'proc.2d': 'Captura ágil en 4K con dirección en set.',
    'proc.2a': 'Dirección de talento frente a cámara para lograr naturalidad y autoridad.',
    'proc.2b': 'Esquema de iluminación y audio profesional adaptado a tu espacio o estudio.',
    'proc.2x': '1 jornada (4 a 7 horas)',
    'proc.3t': '3. Postproducción + IA', 'proc.3d': 'Edición de ritmo preciso y acabado visual.',
    'proc.3a': 'Montaje dinámico, corrección de color y diseño sonoro.',
    'proc.3b': 'Integración de apoyos visuales (B-roll generativo o motion graphics) cuando la narrativa lo pide.',
    'proc.3c': 'Entrega optimizada para Reels, TikTok, Shorts o pauta publicitaria.',
    'proc.3x': '≈ 2 a 3 días',
    'proc.altT': 'Producción remota con IA · 3 días',
    'proc.altB': 'A partir de material base o grabaciones previas, desarrollo piezas completas integrando B-roll realista, síntesis de voz y avatares digitales orgánicos. Ideal para escalar contenido de producto y campañas UGC desde cualquier país.',
    'cta.text': '¿Tienes una campaña o lanzamiento en puerta? Revisemos tu calendario.',
    'srv.title': 'Qué <span class="accent">ofrezco</span>',
    'srv.1t': 'Estrategia y guion de video corto', 'srv.1d': 'Conceptos, ganchos y estructuras diseñadas para captar atención en los primeros 3 segundos.',
    'srv.2t': 'Producción y rodaje audiovisual', 'srv.2d': 'Grabación profesional en locación o estudio con dirección técnica y narrativa.',
    'srv.3t': 'Postproducción y ritmo de retención', 'srv.3d': 'Edición avanzada, diseño sonoro, colorimetría y gráficas que sostienen el interés.',
    'srv.4t': 'Creación y escalado con IA', 'srv.4d': 'Generación de B-roll hiperrealista, activos visuales y réplicas multiformato para anuncios y redes.',
    'wrk.title': 'Trabajo <span class="accent">seleccionado</span>',
    'wrk.f0': 'Todos', 'wrk.f1': 'Brand film', 'wrk.f2': 'Social 9:16', 'wrk.f3': 'Producto & IA', 'wrk.f4': 'UGC / Testimonial',
    'wrk.r1c': 'Reel destacado', 'wrk.r1l': 'Social · Dirección y Postproducción', 'wrk.l2': 'Social · Lote de 12 piezas 9:16', 'wrk.l3': 'Producto · Integración visual IA',
    'wrk.l4': 'UGC · Producción remota', 'wrk.l5': 'Paid Ads · Creativos de conversión', 'wrk.l6': 'Brand film · Campaña multiformato',
    'wrk.empty': 'Próximamente nuevas piezas en esta categoría.', 'wrk.reel': 'Ver el reel completo',
    'num.eyebrow': 'Resultados',
    'num.title': 'El rendimiento de una <span class="accent">producción bien dirigida</span>',
    'num.1': 'piezas verticales de alta retención obtenidas en una sola jornada de rodaje',
    'num.2': 'piezas de storytelling o UGC listas para pauta y crecimiento orgánico',
    'num.3': 'de mejora en retención y entrega frente a flujos tradicionales en proyectos para agencias',
    'fit.title': 'Para quién es <span class="accent">este servicio</span>',
    'fit.1': 'Agencias de marketing que necesitan un socio audiovisual puntual, resolutivo y con criterio de marca.',
    'fit.2': 'Marcas y empresas que buscan profesionalizar su presencia en video corto y anuncios sin contratar un equipo interno.',
    'fit.3': 'Startups y creadores que requieren escalar su producción combinando video real e inteligencia artificial.',
    'fit.cta': '30 minutos para evaluar tus objetivos, tiempos de entrega y presupuesto.',
    'fit.no': 'No soy el proveedor adecuado si buscas edición genérica por volumen al menor precio o piezas sin un objetivo comercial claro.',
    'ab.title': 'Sobre <span class="accent">mí</span>',
    'ab.body': 'Soy Fabio Nogales, productor audiovisual, estratega de contenido con IA e Ingeniero Comercial. Co-fundé la productora Studio 404 y he liderado la creación de cientos de piezas para marcas corporativas, agencias y startups internacionales de IA como Grazia.ai. Mi enfoque une la dirección de cámara e iluminación tradicional con flujos de inteligencia artificial generativa para crear videos realistas, rentables y diseñados para convertir.',
    'ab.pull': 'No reemplazo el criterio humano con IA: uso la IA para multiplicar el impacto de una buena dirección.',
    'faq.title': 'Preguntas <span class="accent">frecuentes</span>',
    'faq.1q': '¿Cuánto tarda una producción de principio a fin?',
    'faq.1a': 'Una producción presencial toma alrededor de 6 días hábiles (1–2 de preproducción, 1 día de rodaje y 2–3 de postproducción). Las producciones remotas potenciadas con IA se entregan en 3 días hábiles.',
    'faq.2q': '¿Usar IA hace que los videos se vean artificiales o genéricos?',
    'faq.2a': 'No. El problema del contenido genérico con IA es la falta de dirección audiovisual. Aplico criterio de fotografía, ritmo de edición y narrativa real para que el B-roll generativo, la voz o los avatares se integren con naturalidad y mantengan la identidad de tu marca.',
    'faq.3q': '¿Cómo se estructura la inversión?',
    'faq.3a': 'Trabajo por paquete de piezas o por proyecto específico según el nivel de producción requerido (rodaje presencial, edición avanzada o flujo 100% con IA). En nuestra llamada de diagnóstico o vía WhatsApp te entrego un presupuesto cerrado y sin costos ocultos.',
    'faq.4q': '¿Trabajas con agencias en modalidad marca blanca (White Label)?',
    'faq.4a': 'Sí. Me integro al flujo de tu agencia como brazo de producción y postproducción, respetando tus tiempos y manuales de cliente.',
    'faq.5q': '¿Cuántas rondas de ajustes incluye cada entrega?',
    'faq.5a': 'Cada proyecto incluye 2 rondas de revisión estructuradas para asegurar que el corte final cumpla exactamente con lo acordado en preproducción.',
    'faq.6q': '¿Qué necesitas de mi parte para iniciar?',
    'faq.6a': 'Tener claro el objetivo comercial de las piezas, referencias visuales o manual de marca, y definir una persona responsable de aprobar el guion y los cortes.',
    'faq.7q': '¿Trabajas de forma presencial o remota?',
    'faq.7a': 'Realizo rodajes presenciales en Santa Cruz de la Sierra (con disponibilidad para viajar) y trabajo 100% en remoto para clientes y agencias de cualquier país mediante flujos de postproducción e IA.',
    'bk.title': 'Hablemos de tu <span class="accent">próximo proyecto.</span>',
    'bk.sub': 'Agenda una llamada de 30 minutos o escríbeme directo por WhatsApp para evaluar qué formato se adapta mejor a tu marca.',
    'bk.cal': 'Reunión de diagnóstico',
    'bk.calHint': 'Elige el horario en el calendario o contáctame por WhatsApp para una respuesta rápida.',
    'bk.calBtn': 'Agendar reunión',
    'bk.alt': '¿Prefieres contacto directo? <a href="' + WA_URL + '" target="_blank" rel="noopener" class="accent" style="text-decoration:underline;font-weight:600;">Escríbeme por WhatsApp (+591 62165130)</a> o completa el formulario:',
    'bk.f1': 'Nombre', 'bk.f2': 'Email', 'bk.f3': 'Empresa o Marca', 'bk.f4': '¿Qué tipo de contenido necesitas?', 'bk.f5': 'Fecha ideal de lanzamiento',
    'bk.p1': 'Tu nombre', 'bk.p3': 'Nombre de tu marca o agencia', 'bk.p4': 'Ej. Lote de Reels, video de producto con IA, cobertura...', 'bk.p5': 'Ej. Esta semana / Próximo mes',
    'bk.send': 'Enviar consulta',
    'ft.tag': 'Dirección audiovisual y estrategia de contenido con IA para marcas y agencias.',
    'ft.email': 'fabioaioficial@gmail.com', 'ft.privacy': 'Privacidad', 'ft.city': 'Santa Cruz, Bolivia · Disponible Global (GMT-4)', 'ft.rights': 'Todos los derechos reservados.',
    'js.needs': 'Por favor, completa tu nombre y un correo válido.',
    'js.sending': 'Enviando…',
    'js.ok': 'Recibido. Te responderé en menos de 24 horas.',
    'js.fail': 'No se pudo enviar. Escríbeme por WhatsApp al +591 62165130 o a fabioaioficial@gmail.com.',
    'js.noEndpoint': 'Abriendo tu cliente de correo con el mensaje listo…'
  };
  var EN_MSG = {
    'js.needs': 'Please add your name and a valid email.',
    'js.sending': 'Sending…',
    'js.ok': "Received. I'll reply within 24 hours.",
    'js.fail': 'Could not send. Message me on WhatsApp (+591 62165130) or fabioaioficial@gmail.com.',
    'js.noEndpoint': 'Opening your email app with the message ready to send…'
  };

  /* ───────── i18n ───────── */
  var lang = 'es';
  var metaDesc = $('meta[name="description"]');
  var EN_META = { title: 'Fabio Nogales — AI Video Producer & Short-Form Content Strategist', desc: 'Audiovisual direction and AI workflows for brands and agencies. Realistic, high-retention video production at startup speed.' };

  $$('[data-i18n]').forEach(function (n) { n.dataset.en = n.innerHTML; });
  $$('[data-i18n-ph]').forEach(function (n) { n.dataset.enPh = n.getAttribute('placeholder'); });

  function msg(k) { return lang === 'es' ? ES[k] : EN_MSG[k]; }

  function setLang(l, persist) {
    lang = l === 'es' ? 'es' : 'en';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (n) {
      var k = n.dataset.i18n;
      n.innerHTML = (lang === 'es' && ES[k] != null) ? ES[k] : n.dataset.en;
    });
    $$('[data-i18n-ph]').forEach(function (n) {
      var k = n.dataset.i18nPh;
      n.setAttribute('placeholder', (lang === 'es' && ES[k] != null) ? ES[k] : n.dataset.enPh);
    });
    document.title = lang === 'es' ? ES['meta.title'] : EN_META.title;
    if (metaDesc) metaDesc.content = lang === 'es' ? ES['meta.desc'] : EN_META.desc;
    $$('.lang__btn').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    var waBtn = $('#waDirectBtn');
    if (waBtn) {
      waBtn.textContent = lang === 'es' ? 'Contactar por WhatsApp' : 'Chat on WhatsApp';
    }
    if (persist) store.set('fabioai-lang', lang);
  }

  $$('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang, true); });
  });

  /* Direct WhatsApp CTA injection next to main booking button */
  var calBtn = $('[data-i18n="bk.calBtn"]');
  if (calBtn && calBtn.parentNode && !$('#waDirectBtn')) {
    var waLink = document.createElement('a');
    waLink.id = 'waDirectBtn';
    waLink.href = WA_URL;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    waLink.className = calBtn.className;
    waLink.style.marginTop = '0.75rem';
    waLink.style.display = 'inline-flex';
    waLink.style.alignItems = 'center';
    waLink.style.justifyContent = 'center';
    waLink.textContent = 'Contactar por WhatsApp';
    calBtn.parentNode.appendChild(waLink);
  }

  /* Marquee: clone the track once so the loop is seamless (after EN capture, so clones translate too). */
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
  var filters = $$('.filter'), cards = $$('.wcard'), empty = $('#workEmpty');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      filters.forEach(function (x) { x.classList.toggle('is-active', x === f); x.setAttribute('aria-pressed', String(x === f)); });
      var tag = f.dataset.filter, shown = 0;
      cards.forEach(function (c) {
        var show = tag === 'all' || c.dataset.tag === tag;
        c.hidden = !show; if (show) shown++;
      });
      empty.hidden = shown > 0;
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