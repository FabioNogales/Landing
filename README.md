# Fabio AI — Landing de producción audiovisual

Landing page de una sola página (bilingüe ES/EN) para el portafolio de Fabio Nogales: producción audiovisual end-to-end para marcas y agencias, potenciada con IA. Sitio estático, sin build step.

- **Sitio en vivo:** https://fabionogales.com (ver `docs/DEPLOY_FIREBASE.md`; `fabioai-landing.web.app` redirige aquí)
- **Diseño original:** carpeta `fabioai-landing` (referencia intacta); este repo es el sitio publicado.

## Estructura

```
index.html                Toda la página (textos en español + marcado)
privacidad.html           Política de privacidad (ES nativo; EN en assets/js/privacidad.js)
assets/css/styles.css     Estilos (paleta y tipografías al inicio del archivo)
assets/js/main.js         Interacciones, cambio ES/EN y diccionario en inglés (objeto EN)
assets/js/privacidad.js   Cambio ES/EN de la página de privacidad
assets/img/               fabio.jpg, fabio-about.jpg, og.jpg (vista previa al compartir)
assets/img/bts/           Originales de fotos de rodaje (NO se publican ni se suben a git)
assets/img/process/       14 fotos de proceso optimizadas (se publican)
assets/img/clients/       Logos optimizados del carrusel (se publican)
assets/img/logos/         Logos originales (fuente; NO se publican)
robots.txt, sitemap.xml   SEO
firebase.json             Configuración de Firebase Hosting
docs/GUIA_EDICION.md      Cómo editar textos, fotos, logos y secciones
docs/DEPLOY_FIREBASE.md   Publicar y dominio (registros DNS de Cloudflare)
docs/ISSUES_BACKLOG.md    Pendientes
estructura-landing.md     Wireframe y copy original de referencia
```

## Empezar rápido

```bash
python -m http.server 4321        # probar en http://localhost:4321
firebase deploy --only hosting    # publicar (PowerShell: firebase.cmd)
```

- **Editar textos, logos y secciones:** `docs/GUIA_EDICION.md`
- **Publicar y dominio:** `docs/DEPLOY_FIREBASE.md`
- **Qué falta:** `docs/ISSUES_BACKLOG.md`

## Stack

HTML + CSS + JS vanilla, sin frameworks ni bundler. Tipografías: Bricolage Grotesque, Geist e Instrument Serif (Google Fonts). Formulario de contacto: Formspree. Agenda: Google Calendar (citas programadas de `fabioaioficial@gmail.com`).
