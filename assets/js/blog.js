/* Fabio AI — blog: Fabio AI Lab newsletter form (MailerLite + Google reCAPTCHA v2).
   - reCAPTCHA (https://www.google.com/recaptcha/api.js) is loaded only when the visitor first focuses,
     taps or types in the email field (privacy + performance), then rendered explicitly in [data-nl-captcha].
   - Submission: fetch POST (multipart FormData, no custom headers) to the MailerLite form action. MailerLite
     answers with CORS "Access-Control-Allow-Origin: *" and JSON { success: true|false }, so the result is read
     and shown inline. If the request fails at network level, the form is posted into a hidden iframe instead
     (the response can't be read there, so the confirmation message is shown when the iframe loads).
     Browsers without fetch/FormData do a normal post in a new tab (form target="_blank").
   - Client-side email validation, hidden honeypot (nl_website, never sent), button disabled while sending. */
(function () {
  'use strict';
  var forms = Array.prototype.slice.call(document.querySelectorAll('form[data-nl-form]'));
  if (!forms.length) return;

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var MSG = {
    invalid: 'Escribe un correo electrónico válido, por ejemplo nombre@correo.com.',
    captcha: 'Marca la casilla «No soy un robot» para continuar.',
    captchaLoading: 'Cargando la verificación antispam… marca la casilla «No soy un robot» cuando aparezca.',
    captchaExpired: 'La verificación caducó. Vuelve a marcar la casilla «No soy un robot».',
    captchaFail: 'No se pudo cargar la verificación antispam (reCAPTCHA). Revisa tu conexión o desactiva el bloqueador para este sitio y vuelve a intentarlo.',
    sending: 'Enviando…'
  };
  var CAPTCHA_W = 304, CAPTCHA_H = 78; // reCAPTCHA v2 checkbox size (fixed by Google)

  var state = 'idle'; // idle | loading | ready | failed
  var widgets = [];   // { form, el, id }

  function setStatus(form, text, kind) {
    var s = form.querySelector('.nl__status');
    s.classList.remove('is-ok', 'is-err');
    if (kind) s.classList.add(kind === 'ok' ? 'is-ok' : 'is-err');
    s.textContent = text || '';
  }

  // Keep the fixed-width widget inside narrow blocks (it is 304px wide)
  function fit(w) {
    var avail = w.form.clientWidth;
    var scale = avail && avail < CAPTCHA_W ? avail / CAPTCHA_W : 1;
    var inner = w.el.firstElementChild;
    if (inner) {
      inner.style.transform = scale < 1 ? 'scale(' + scale.toFixed(3) + ')' : '';
      inner.style.transformOrigin = '0 0';
    }
    w.el.style.height = Math.ceil(CAPTCHA_H * scale) + 'px';
  }
  function fitAll() { widgets.forEach(fit); }

  function widgetFor(form) {
    for (var i = 0; i < widgets.length; i++) if (widgets[i].form === form) return widgets[i];
    return null;
  }

  window.__nlRecaptchaReady = function () {
    state = 'ready';
    forms.forEach(function (form) {
      var el = form.querySelector('[data-nl-captcha]');
      if (!el || !form.dataset.sitekey) return;
      el.hidden = false;
      var w = { form: form, el: el, id: null };
      w.id = window.grecaptcha.render(el, {
        sitekey: form.dataset.sitekey,
        theme: 'dark',
        callback: function () {
          var s = form.querySelector('.nl__status');
          if (s.classList.contains('is-err')) setStatus(form, '');
        },
        'expired-callback': function () { setStatus(form, MSG.captchaExpired, 'err'); }
      });
      widgets.push(w);
      fit(w);
    });
    window.addEventListener('resize', fitAll);
  };

  function loadRecaptcha() {
    if (state !== 'idle') return;
    state = 'loading';
    var s = document.createElement('script');
    s.src = 'https://www.google.com/recaptcha/api.js?onload=__nlRecaptchaReady&render=explicit&hl=es';
    s.async = true;
    s.defer = true;
    s.onerror = function () {
      state = 'failed';
      forms.forEach(function (f) { setStatus(f, MSG.captchaFail, 'err'); });
    };
    document.head.appendChild(s);
  }

  // Hidden iframe fallback (network-level fetch failure)
  var iframeSeq = 0;
  function postViaIframe(form, done) {
    var name = 'nl-frame-' + (++iframeSeq);
    var frame = document.createElement('iframe');
    frame.name = name;
    frame.title = 'Envío de la suscripción';
    frame.setAttribute('aria-hidden', 'true');
    frame.tabIndex = -1;
    frame.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden';
    document.body.appendChild(frame);
    var prevTarget = form.target;
    var hp = form.querySelector('[name="nl_website"]');
    var finished = false;
    var timer = setTimeout(function () { finish(false); }, 20000);
    function finish(ok) {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      done(ok);
      setTimeout(function () { frame.remove(); }, 1000);
    }
    frame.addEventListener('load', function () { finish(true); });
    if (hp) hp.disabled = true;
    form.target = name;
    HTMLFormElement.prototype.submit.call(form);
    form.target = prevTarget;
    if (hp) hp.disabled = false;
  }

  forms.forEach(function (form) {
    var input = form.querySelector('input[type="email"]');
    var btn = form.querySelector('button[type="submit"]');
    var hp = form.querySelector('[name="nl_website"]');
    var status = form.querySelector('.nl__status');

    var useCaptcha = !!form.dataset.sitekey; // empty recaptchaSiteKey in site.json = no reCAPTCHA
    if (useCaptcha) ['focus', 'pointerdown', 'input'].forEach(function (ev) { input.addEventListener(ev, loadRecaptcha); });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && EMAIL_RE.test(input.value.trim())) {
        input.removeAttribute('aria-invalid');
        setStatus(form, '');
      }
    });

    function succeed() {
      setStatus(form, status.dataset.ok, 'ok');
      form.reset();
      var w = widgetFor(form);
      if (w && window.grecaptcha) window.grecaptcha.reset(w.id);
    }
    function fail(text) {
      setStatus(form, text || status.dataset.err, 'err');
      var w = widgetFor(form);
      if (w && window.grecaptcha) window.grecaptcha.reset(w.id);
    }
    function unlock() { btn.disabled = false; form.removeAttribute('aria-busy'); }

    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) {
        // Old browser: native post in a new tab (validation via the browser)
        if (!form.checkValidity()) { e.preventDefault(); form.reportValidity(); }
        return;
      }
      e.preventDefault();
      if (btn.disabled) return;

      var email = input.value.trim();
      if (!EMAIL_RE.test(email)) {
        input.setAttribute('aria-invalid', 'true');
        setStatus(form, MSG.invalid, 'err');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');

      if (hp && hp.value) { succeed(); return; } // bot: pretend success, send nothing

      var token = '';
      if (useCaptcha) {
        if (state === 'idle' || state === 'loading') { loadRecaptcha(); setStatus(form, MSG.captchaLoading, 'err'); return; }
        if (state === 'failed') { setStatus(form, MSG.captchaFail, 'err'); return; }
        var w = widgetFor(form);
        token = w && window.grecaptcha ? window.grecaptcha.getResponse(w.id) : '';
        if (!token) { setStatus(form, MSG.captcha, 'err'); return; }
      }

      btn.disabled = true;
      form.setAttribute('aria-busy', 'true');
      setStatus(form, MSG.sending);

      var fd = new FormData(form);
      fd.delete('nl_website');
      fd.set(input.name, email);
      if (token) fd.set('g-recaptcha-response', token);

      fetch(form.action, { method: 'POST', body: fd })
        .then(function (r) {
          return r.json().then(function (data) { return data; }, function () { return { success: r.ok }; });
        })
        .then(function (data) {
          if (data && data.success) succeed(); else fail();
          unlock();
        }, function () {
          // Network/CORS failure: post the same form into a hidden iframe
          postViaIframe(form, function (loaded) {
            if (loaded) succeed(); else fail();
            unlock();
          });
        });
    });
  });
})();
