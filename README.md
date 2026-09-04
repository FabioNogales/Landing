# FabioAI — Landing de producción audiovisual

Landing page one-page de respuesta directa para portafolio de creador digital / producción audiovisual. Sitio estático, sin build step.

**Sitio en vivo:** https://fabioai-landing.web.app (dominio propio: [PENDIENTE], ver `docs/DEPLOY_FIREBASE.md`)

## Estructura del proyecto

```
index.html                   Toda la página (15 secciones, ver estructura-landing.md)
assets/css/tokens.css        Tokens del design system (color, tipografía, espaciado, efectos)
assets/css/styles.css        Estilos del sitio, consumiendo los tokens
assets/js/main.js            Header sticky, reveal on scroll, FAQ, filtro de portafolio, contadores
.claude/launch.json          Config del servidor de preview local
firebase.json                Config de Firebase Hosting (public: raíz del repo)
estructura-landing.md        Wireframe y copy original de referencia, sección por sección
docs/ISSUES_BACKLOG.md       Lista de pendientes lista para crear como Issues en GitHub
.github/ISSUE_TEMPLATE/      Plantilla para nuevos issues de contenido/pendientes
```

## Cómo correrlo en local

No requiere instalación. Cualquier servidor estático sirve:

```bash
python -m http.server 4321
```

Y abrir `http://localhost:4321`.

## Stack

HTML + CSS + JS vanilla, sin framework ni bundler. Tokens de diseño tomados 1:1 del proyecto `FabioAI` en Claude Design (`FabioAIDesignSystem`).

## Deploy (Firebase Hosting)

Proyecto Firebase: **FabioAI Landing**. `firebase.json` ya está configurado (`public: "."`, ignora todo lo que no es el sitio).

```bash
npm install -g firebase-tools   # una sola vez
firebase login                  # una sola vez, abre el navegador
firebase use --add              # una sola vez, vincula este repo al proyecto
firebase deploy --only hosting  # cada vez que quieras publicar
```

Detalle completo en `docs/DEPLOY_FIREBASE.md`.

## Control de pendientes

Todo el contenido que falta por definir está marcado `[PENDIENTE]` directamente en `index.html` (grep rápido: `grep -n PENDIENTE index.html`). Cada uno tiene su issue correspondiente en `docs/ISSUES_BACKLOG.md` — listo para copiar a GitHub Issues o crear con `gh issue create` una vez tengas la CLI autenticada.

## Pendientes generales (no ligados a una sección)

- [ ] Comprar y conectar el dominio (ver comentario `[PENDIENTE]` en `<head>` de `index.html`)
- [x] Deploy inicial a Firebase Hosting
- [ ] Foto de perfil y logos de marcas (archivos, ver `docs/ISSUES_BACKLOG.md` #2 y #9)
- [ ] Conectar endpoint del formulario de contacto (Formspree u otro)
- [ ] Definir plataforma de video para el portafolio y subir las 6 piezas
- [ ] Terminar de completar la FAQ (5 de 6 preguntas restantes)
- [ ] Reemplazar cada `[PENDIENTE]` restante (ver `docs/ISSUES_BACKLOG.md`)
