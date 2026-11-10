/* Fabio AI — ES/EN switch for privacidad.html. Same mechanism as main.js: Spanish is native HTML
   (stored in data-es), English lives in EN keyed by data-i18n; same localStorage key. */
(function () {
  'use strict';

  var EN = {
    "pv.back": "← Back to home",
    "pv.title": "Privacy policy",
    "pv.date": "Last updated: November 11, 2026",
    "pv.intro": "This page explains, in plain language, what data is handled when you use fabionogales.com and why. It only describes what the site does today.",
    "pv.h1": "1. Who is responsible",
    "pv.p1": "Fabio Nogales (Fabio AI), Santa Cruz de la Sierra, Bolivia. Contact for any privacy matter: <a href=\"mailto:contacto@fabionogales.com\">contacto@fabionogales.com</a> (this address also reaches fabioaioficial@gmail.com).",
    "pv.h2": "2. Data I collect and why",
    "pv.p2a": "The only form on the site is the contact form. It asks for this data:",
    "pv.l1": "Name",
    "pv.l2": "Email address",
    "pv.l3": "Company or brand (optional)",
    "pv.l4": "Type of content you need (optional)",
    "pv.l5": "Ideal launch date (optional)",
    "pv.p2b": "I use it only to answer your inquiry and send you a quote. The form also includes a hidden anti-spam field that people do not see. The submission is processed by Formspree (formspree.io), which receives this data and forwards it to me by email.",
    "pv.p2c": "If you write to me by email or WhatsApp, I use what you send only to handle your message.",
    "pv.h3": "3. Third-party services",
    "pv.p3a": "The site relies on these services, each with its own privacy policy:",
    "pv.t1": "<strong>Formspree:</strong> receives the contact form data.",
    "pv.t2": "<strong>Google Calendar:</strong> if you book an appointment, the booking data (for example name, email and time slot) is handled by Google under its own privacy policy.",
    "pv.t3": "<strong>WhatsApp (Meta):</strong> if you tap the WhatsApp button, the conversation happens on that platform and is governed by its terms.",
    "pv.t4": "<strong>Firebase Hosting (Google):</strong> hosts the site and may process technical data, such as your IP address, in its server logs.",
    "pv.t5": "<strong>Google Fonts:</strong> typefaces are loaded from Google servers, so your browser connects to them when the page opens.",
    "pv.t6": "<strong>Social networks:</strong> the site links to Instagram, TikTok, LinkedIn, Facebook and X. Once you leave the site, each network's policies apply.",
    "pv.h4": "4. Cookies and browser storage",
    "pv.p4": "The site uses no advertising or analytics cookies, and no tracking scripts or pixels. It only saves your language preference (ES/EN) in your browser's local storage (localStorage) to remember it on your next visit. You can clear it from your browser settings.",
    "pv.h5": "5. I do not sell your data",
    "pv.p5": "I do not sell or rent your personal data. I only share it with the services listed above, as far as needed for them to work.",
    "pv.h6": "6. How long I keep it",
    "pv.p6": "I keep inquiries for as long as needed to handle your request and any commercial relationship that may follow. If you ask, I delete them.",
    "pv.h7": "7. Your rights",
    "pv.p7": "You can ask me for access to your data, to correct or delete it, or to object to its use. Write to <a href=\"mailto:contacto@fabionogales.com\">contacto@fabionogales.com</a> and I will reply.",
    "pv.h8": "8. Data outside Bolivia",
    "pv.p8": "The providers mentioned (Formspree, Google, Meta) may process data on servers located outside Bolivia.",
    "pv.h9": "9. Changes to this policy",
    "pv.p9": "If anything changes, I will update this page and the date above.",
    "ft.rights": "All rights reserved.",
    "meta.title": "Privacy policy | Fabio Nogales",
    "meta.desc": "What data fabionogales.com collects, what it is used for, which third-party services are involved and how to exercise your rights.",
    "meta.locale": "en_US"
  };

  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  function setLang(l, persist) {
    var lang = l === 'en' ? 'en' : 'es';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (n) {
      if (n.dataset.es == null) n.dataset.es = n.innerHTML;
      var en = EN[n.dataset.i18n];
      var v = (lang === 'en' && en != null) ? en : n.dataset.es;
      if (n.innerHTML !== v) n.innerHTML = v;
    });
    [['title', 'meta.title'], ['meta[name="description"]', 'meta.desc'], ['meta[property="og:title"]', 'meta.title'],
     ['meta[property="og:description"]', 'meta.desc'], ['meta[property="og:locale"]', 'meta.locale']].forEach(function (h) {
      var el = document.querySelector(h[0]);
      if (!el) return;
      var isTitle = el.tagName === 'TITLE';
      var cur = isTitle ? document.title : el.getAttribute('content');
      if (el.dataset.es == null) el.dataset.es = cur;
      var v = (lang === 'en' && EN[h[1]] != null) ? EN[h[1]] : el.dataset.es;
      if (cur === v) return;
      if (isTitle) document.title = v; else el.setAttribute('content', v);
    });
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
  setLang(store.get('fabioai-lang') || 'es', false);
})();
