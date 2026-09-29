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

  /* ───────── Spanish copy ───────── */
  var ES = {
    'meta.title': 'Fabio AI — Producción audiovisual cinematográfica para marcas y agencias',
    'meta.desc': 'Calidad cinematográfica en tiempos de startup. Dirección, rodaje y post end-to-end potenciados con IA para marcas y agencias. Agenda un diagnóstico de 30 minutos.',
    'nav.work': 'Trabajo', 'nav.process': 'Proceso', 'nav.services': 'Servicios', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto',
    'nav.cta': 'Agenda un diagnóstico', 'nav.ctaShort': 'Agendar',
    'hero.chip': 'Producción end-to-end, <b>potenciada con IA</b>',
    'hero.title': 'Calidad cinematográfica. Tiempos de <span class="accent">startup.</span>',
    'hero.sub': 'Producción audiovisual end-to-end para marcas y agencias que necesitan piezas de alto nivel estético sin los plazos ni los costos de una productora tradicional. Dirección, rodaje y post potenciados con IA y automatización.',
    'hero.cta': 'Agenda una sesión de diagnóstico', 'hero.reel': 'Ver el reel',
    'hero.note': '+40 piezas entregadas en 2026 para Bransign, Itacamba y Grazia.ai.',
    'hero.stat': 'días de preproducción a entrega',
    'todo': 'Pendiente', 'todo.confirm': 'Confirmar', 'todo.video': 'Video pendiente',
    'ph.reel': 'Último reel', 'ph.photo': 'Tu foto — pendiente',
    'cmp.eyebrow': 'El problema',
    'cmp.title': 'Producir bonito <span class="accent">ya no alcanza.</span>',
    'cmp.body': 'Hoy una marca necesita 20 piezas donde antes necesitaba una. La productora tradicional te entrega una obra maestra en seis semanas. El freelance te entrega volumen sin criterio. Yo resuelvo las dos cosas: dirección con lenguaje de marca y una infraestructura de trabajo diseñada para escalar.',
    'cmp.trad': 'Productora tradicional', 'cmp.tradVal': '≈ 6 semanas · 1 pieza',
    'cmp.me': 'Flujo Fabio AI', 'cmp.meVal': '≈ 5 días · multiformato',
    'cmp.c1': 'Productora tradicional', 'cmp.c1a': 'Calidad alta, 6 semanas', 'cmp.c1b': 'Costo estructural', 'cmp.c1c': '1 pieza',
    'cmp.c2': 'Freelance', 'cmp.c2a': 'Rápido, sin criterio', 'cmp.c2b': 'Sin dirección', 'cmp.c2c': 'Volumen inconsistente',
    'cmp.c3': 'Este modelo', 'cmp.c3a': 'Calidad de agencia, tiempos de startup', 'cmp.c3b': 'Un solo interlocutor', 'cmp.c3c': 'Multiformato desde una producción',
    'pil.title': 'Por qué esto funciona <span class="accent">distinto</span>',
    'pil.1t': 'Estética de agencia, ejecución comercial',
    'pil.1b': 'Vengo de la producción ejecutiva y la dirección para agencias de branding, y trabajo con la agilidad del ecosistema tech. El resultado: piezas con precisión narrativa, código visual consistente y una métrica clara detrás de cada decisión creativa. La belleza no es el objetivo; es el vehículo de la conversión.',
    'pil.2t': 'IA y automatización aplicadas al proceso, no al resultado',
    'pil.2b': 'Las productoras tradicionales operan 100% manual. Yo diseño flujos automatizados que comprimen el cronograma sin tocar el estándar de calidad:',
    'pil.2l1': '<strong>Preproducción acelerada:</strong> ideación, escaletas y guionización en días, no semanas.',
    'pil.2l2': '<strong>Postproducción escalable:</strong> sistemas que multiplican el volumen de piezas manteniendo el mismo acabado.',
    'pil.2l3': '<strong>Menos tiempos muertos,</strong> menos costo logístico, menos fricción en cada revisión.',
    'pil.2q': 'La IA no reemplaza la dirección. Elimina lo que nunca debió consumir tu presupuesto.',
    'pil.3t': 'Un solo interlocutor de principio a fin',
    'pil.3b': 'Sin coordinación entre tres proveedores. Sin culpas cruzadas cuando algo se retrasa. Estrategia, rodaje, post y adaptación de formatos bajo una sola dirección creativa y una sola responsabilidad.',
    'proc.title': 'Cómo se ve el <span class="accent">proceso</span>',
    'proc.intro': 'De brief a entrega multiformato, con un solo responsable en cada etapa.',
    'proc.1t': 'Brief', 'proc.1d': 'Objetivo de negocio, canal y métrica de éxito.', 'proc.1x': 'Día 0',
    'proc.2t': 'Preproducción con IA', 'proc.2d': 'Ideación, escaleta, guion y referencias.', 'proc.2x': 'Días 1–2',
    'proc.3t': 'Rodaje', 'proc.3d': 'Dirección, cámara, luz y sonido.', 'proc.3x': 'Día 3',
    'proc.4t': 'Post automatizada', 'proc.4d': 'Edición, color, motion y sistema de plantillas.', 'proc.4x': 'Día 4',
    'proc.5t': 'Entrega multiformato', 'proc.5d': '16:9 / 9:16 / 1:1 · cortes de 6 s a 60 s.', 'proc.5x': 'Día 5',
    'proc.altT': '¿Cliente en otro país o sin necesidad de rodaje?',
    'proc.altB': 'Si el servicio es 100% digital y solo necesitas postproducción, el proceso se automatiza y se potencia con IA para extraer contenido variado del material que envíes — eficiencia desde el primer entregable, pensado para clientes en otros países.',
    'cta.text': '¿Tienes un lanzamiento en el calendario? Veamos si los tiempos dan.',
    'srv.title': 'Qué <span class="accent">hago</span>',
    'srv.1t': 'Estrategia y dirección creativa', 'srv.1d': 'Concepto, tono y narrativa alineados al objetivo de negocio, no al gusto personal.',
    'srv.2t': 'Rodaje profesional', 'srv.2d': 'Dirección de cámara, iluminación, sonido y estabilización. Locación o estudio.',
    'srv.3t': 'Postproducción y motion graphics', 'srv.3d': 'Edición, construcción de código visual, corrección de color y animación digital.',
    'srv.4t': 'Escalabilidad multiformato', 'srv.4d': 'Una producción, múltiples entregables optimizados por canal para maximizar alcance y rendimiento de la pauta.',
    'wrk.title': 'Trabajo <span class="accent">seleccionado</span>',
    'wrk.f0': 'Todos', 'wrk.f1': 'Brand film', 'wrk.f2': 'Social', 'wrk.f3': 'Producto', 'wrk.f4': 'Testimonial',
    'wrk.r1c': 'Último reel', 'wrk.r1l': 'Social · Publicado en @fabioai_', 'wrk.l2': 'Social · 12 piezas 9:16', 'wrk.l3': 'Producto · Estudio',
    'wrk.l4': 'Testimonial · Remoto', 'wrk.l5': 'Social · Campaña de pauta', 'wrk.l6': 'Brand film · Multiformato',
    'wrk.empty': 'No hay piezas en esta categoría todavía.', 'wrk.reel': 'Ver el reel completo',
    'case.eyebrow': 'Caso de estudio',
    'case.title': '[Cliente] — 18 piezas desde un <span class="accent">solo rodaje</span>',
    'case.1t': 'Contexto', 'case.1d': 'Quién es el cliente y qué estaba en juego.',
    'case.2t': 'Reto', 'case.2d': 'La restricción real: tiempo, volumen o presupuesto.',
    'case.3t': 'Cómo se resolvió', 'case.3d': 'Decisión de dirección + qué parte del proceso se automatizó.',
    'case.4t': 'Resultado', 'case.4d': 'Una cifra sostenible en la llamada, no adjetivos.',
    'met.1': 'días de brief a primer corte', 'met.2': 'piezas entregadas desde un solo rodaje', 'met.3': 'en costo vs. cotización tradicional',
    'fit.title': 'Con quién trabajo <span class="accent">mejor</span>',
    'fit.1': 'Agencias que necesitan un socio de producción confiable y que entienda briefs de marca.',
    'fit.2': 'Marcas con calendario de contenido constante que hoy dependen de proveedores lentos.',
    'fit.3': 'Startups y empresas tech que necesitan piezas de nivel sin estructura interna de producción.',
    'fit.cta': '30 minutos. Alcance, tiempos reales y una estimación honesta.',
    'fit.no': 'No soy la mejor opción si buscas el precio más bajo del mercado o una pieza suelta sin objetivo definido.',
    'ab.title': 'Sobre <span class="accent">mí</span>',
    'ab.body': 'Soy editor audiovisual y especialista en contenido con IA, con más de 4 años de experiencia produciendo contenido dinámico de marketing digital para redes sociales. Combino dirección de cámara profesional con edición ágil y aplicaciones de IA generativa. Trabajo a fondo con Adobe Suite, DaVinci Resolve y CapCut, siempre enfocado en entregar narrativas visuales completas y de alta calidad que capturan la atención de la audiencia y escalan la presencia de marcas modernas.',
    'ab.pull': 'No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien.',
    'faq.title': 'Preguntas <span class="accent">frecuentes</span>',
    'faq.1q': '¿Cuánto tarda una producción de principio a fin?',
    'faq.1a': 'Una producción presencial toma 5 días desde la preproducción hasta la entrega: preproducción (2 días), rodaje (1 día), postproducción (1 día) y entrega el día 5. Si estás en otro país y solo necesitas postproducción, se hace en remoto con un flujo automatizado y potenciado con IA que extrae contenido variado de cada material que envíes.',
    'faq.2q': '¿Qué significa exactamente que uses IA? ¿El resultado es contenido genérico?',
    'faq.2a': 'La IA vive en el proceso, no en el resultado. La uso para acelerar ideación, escaletas, organización de material y versionado de cortes: tareas operativas que antes consumían presupuesto sin aportar criterio. La dirección, el rodaje y las decisiones creativas siguen siendo humanas. Lo que se comprime es el cronograma, no el estándar.',
    'faq.3q': '¿Cómo funcionan los rangos de inversión?',
    'faq.3a': 'Van desde $20 USD por video hasta $400 USD para creación específica de avatares y contenido generado por IA de alta calidad, acompañado de una estrategia de funnel de ventas y scripts adaptados específicamente para redes sociales.',
    'faq.4q': '¿Trabajas con agencias en modelo white label?',
    'faq.4a': 'Sí/No y en qué condiciones: crédito, contacto directo con el cliente final, acuerdos de confidencialidad.',
    'faq.5q': '¿Cuántas rondas de revisión incluye?',
    'faq.5a': 'Define el número incluido por etapa y el costo de rondas adicionales.',
    'faq.6q': '¿Qué necesitas de mi parte para arrancar?',
    'faq.6a': 'Brief u objetivo de negocio, manual de marca o referencias, fecha de entrega y un único aprobador del lado del cliente.',
    'faq.7q': '¿Trabajas en remoto o solo de forma presencial?',
    'faq.7a': 'Ambas. Los rodajes son presenciales y locales. Si estás en otro país y solo necesitas postproducción, trabajamos 100% en remoto: me envías el material y de cada pieza que envíes extraigo contenido variado con un flujo automatizado y potenciado con IA.',
    'bk.title': 'Hablemos de tu <span class="accent">próximo lanzamiento.</span>',
    'bk.sub': 'En 30 minutos definimos alcance, tiempos reales y una estimación honesta. Si no soy la solución correcta, te lo digo en esa llamada.',
    'bk.cal': 'Google Calendar',
    'bk.calHint': 'Elige el horario que mejor te quede; recibirás la invitación al instante.',
    'bk.calBtn': 'Agendar diagnóstico',
    'bk.alt': '¿Prefieres no agendar llamada?',
    'bk.f1': 'Nombre', 'bk.f2': 'Email', 'bk.f3': 'Empresa', 'bk.f4': 'Qué necesitas', 'bk.f5': 'Fecha estimada de entrega',
    'bk.p1': 'Tu nombre', 'bk.p3': 'Marca o agencia', 'bk.p4': 'Brand film, social, producto…', 'bk.p5': 'Mes / semana',
    'bk.send': 'Enviar',
    'ft.tag': 'Producción audiovisual end-to-end para marcas y agencias.',
    'ft.email': 'Confirma que este buzón exista', 'ft.privacy': 'Privacidad', 'ft.city': '[Ciudad] · GMT-4', 'ft.rights': 'Todos los derechos reservados.',
    'js.needs': 'Completa tu nombre y un email válido.',
    'js.sending': 'Enviando…',
    'js.ok': 'Recibido. Te respondo en menos de 24 horas.',
    'js.fail': 'No se pudo enviar. Escríbeme directo a fabioaioficial@gmail.com.',
    'js.noEndpoint': 'Abriendo tu app de correo con el mensaje listo para enviar…'
  };
  var EN_MSG = {
    'js.needs': 'Please add your name and a valid email.',
    'js.sending': 'Sending…',
    'js.ok': "Received. I'll reply within 24 hours.",
    'js.fail': 'Could not send. Email me directly at fabioaioficial@gmail.com.',
    'js.noEndpoint': 'Opening your email app with the message ready to send…'
  };

  /* ───────── i18n ───────── */
  var lang = 'es';
  var metaDesc = $('meta[name="description"]');
  var EN_META = { title: 'Fabio AI — Cinematic video production for brands & agencies', desc: 'Cinematic quality at startup speed. End-to-end direction, shooting and AI-assisted post for brands and agencies. Book a 30-minute diagnostic session.' };

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
    if (persist) store.set('fabioai-lang', lang);
  }

  $$('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang, true); });
  });

  /* Marquee: clone the track once so the loop is seamless (after EN capture, so clones translate too). */
  var strip = $('#stripInner');
  if (strip && strip.firstElementChild) {
    var clone = strip.firstElementChild.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    strip.appendChild(clone);
  }

  var saved = store.get('fabioai-lang');
  var browserEs = (navigator.language || '').toLowerCase().indexOf('es') === 0;
  setLang(saved || 'es', false); // Spanish first; English available via the toggle

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
    var end = parseFloat(el.dataset.count), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    if (reduce || isNaN(end)) { el.textContent = pre + end + suf; return; }
    var t0 = null, dur = 1100;
    function tick(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(end * e) + suf;
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

  /* ───────── Contact form (Formspree via data-endpoint; change the endpoint to swap provider) ───────── */
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
    if (data.website) { status.classList.add('is-ok'); status.textContent = msg('js.ok'); form.reset(); return; } // honeypot
    var url = form.dataset.endpoint;
    if (!url) { // no webhook yet: open the visitor's email app with the message prefilled
      var body = (lang === 'es' ? ['Nombre: ' + data.name, 'Correo: ' + data.email, 'Empresa: ' + (data.company || '-'), 'Necesito: ' + (data.need || '-'), 'Fecha de entrega: ' + (data.date || '-')] : ['Name: ' + data.name, 'Email: ' + data.email, 'Company: ' + (data.company || '-'), 'Need: ' + (data.need || '-'), 'Delivery date: ' + (data.date || '-')]).join('\n');
      status.classList.add('is-ok'); status.textContent = msg('js.noEndpoint');
      window.location.href = 'mailto:fabioaioficial@gmail.com?subject=' + encodeURIComponent((lang === 'es' ? 'Nuevo proyecto — ' : 'New project — ') + data.name) + '&body=' + encodeURIComponent(body);
      return;
    }
    status.textContent = msg('js.sending');
    data.lang = lang; data.source = 'fabionogales.com';
    data._subject = (lang === 'es' ? 'Nueva consulta desde fabionogales.com — ' : 'New inquiry from fabionogales.com — ') + data.name; // Formspree email subject
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); status.classList.add('is-ok'); status.textContent = msg('js.ok'); form.reset(); })
      .catch(function () { status.textContent = msg('js.fail'); });
  });
})();
