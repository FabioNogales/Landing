# FabioAI — Landing de producción audiovisual

Landing page one-page de respuesta directa para portafolio de creador digital / producción audiovisual. Sitio estático, sin build step.

**Sitio en vivo:** [PENDIENTE] agregar URL cuando esté desplegado y el dominio esté comprado.

## Estructura del proyecto

```
index.html                   Toda la página (15 secciones, ver estructura-landing.md)
assets/css/tokens.css        Tokens del design system (color, tipografía, espaciado, efectos)
assets/css/styles.css        Estilos del sitio, consumiendo los tokens
assets/js/main.js            Header sticky, reveal on scroll, FAQ, filtro de portafolio, contadores
.claude/launch.json          Config del servidor de preview local
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

## Control de pendientes

Todo el contenido que falta por definir está marcado `[PENDIENTE]` directamente en `index.html` (grep rápido: `grep -n PENDIENTE index.html`). Cada uno tiene su issue correspondiente en `docs/ISSUES_BACKLOG.md` — listo para copiar a GitHub Issues o crear con `gh issue create` una vez tengas la CLI autenticada.

## Pendientes generales (no ligados a una sección)

- [ ] Comprar y conectar el dominio (ver comentario `[PENDIENTE]` en `<head>` de `index.html`)
- [ ] Definir hosting y despliegue (GitHub Pages / Vercel / Netlify)
- [ ] Reemplazar cada `[PENDIENTE]` de contenido (ver `docs/ISSUES_BACKLOG.md`)
