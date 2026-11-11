/* Fabio AI — blog: Fabio AI Lab newsletter form (only loaded when site.newsletter.formAction is set).
   Sends the form to MailerLite in the background and shows the result inline.
   If the request can't be made from the page (network/CORS), falls back to a normal submit in a new tab. */
(function () {
  'use strict';
  var forms = document.querySelectorAll('form[data-nl-form]');
  Array.prototype.forEach.call(forms, function (form) {
    var status = form.querySelector('.nl__status');
    var btn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return; // native submit
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      btn.disabled = true;
      status.textContent = 'Enviando…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json().catch(function () { return { success: r.ok }; }); })
        .then(function (data) {
          if (data && data.success) {
            status.textContent = status.dataset.ok;
            form.reset();
          } else {
            status.textContent = status.dataset.err;
          }
        })
        .catch(function () {
          status.textContent = '';
          form.submit(); // fallback: browser posts the form (target=_blank)
        })
        .then(function () { btn.disabled = false; });
    });
  });
})();
