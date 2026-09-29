# Fabio AI — Landing de producción audiovisual

Landing page de una sola página (bilingüe ES/EN) para el portafolio de Fabio Nogales: producción audiovisual end-to-end para marcas y agencias, potenciada con IA. Sitio estático, sin build step.

- **Sitio en vivo:** https://fabioai-landing.web.app
- **Dominio propio:** https://fabionogales.com (ver `docs/DEPLOY_FIREBASE.md`)

## Estructura

```
index.html                Toda la página (textos en inglés + marcado)
assets/css/styles.css     Estilos (paleta y tipografías al inicio del archivo)
assets/js/main.js         Interacciones, cambio ES/EN y diccionario en español (objeto ES)
assets/img/               fabio.jpg, fabio-about.jpg, og.jpg (vista previa al compartir), logos/
robots.txt, sitemap.xml   SEO
firebase.json             Configuración de Firebase Hosting
docs/GUIA_EDICION.md      Cómo editar textos, fotos, logos y secciones
docs/DEPLOY_FIREBASE.md   Publicar y conectar el dominio
docs/ISSUES_BACKLOG.md    Pendientes
estructura-landing.md     Wireframe y copy original de referencia
```

## Empezar rápido

```bash
python -m http.server 4321        # probar en http://localhost:4321
firebase deploy --only hosting    # publicar (PowerShell: firebase.cmd)
```

- **Editar textos:** `docs/GUIA_EDICION.md`
- **Publicar y dominio:** `docs/DEPLOY_FIREBASE.md`
- **Qué falta:** `docs/ISSUES_BACKLOG.md`

## Stack

HTML + CSS + JS vanilla, sin frameworks ni bundler. Tipografías: Bricolage Grotesque, Geist e Instrument Serif (Google Fonts). Formulario de contacto: Formspree. Agenda: Google Calendar (citas programadas).
