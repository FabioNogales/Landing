# Blog y newsletter (Fabio AI Lab)

El blog vive en `https://fabionogales.com/blog/` (solo español). Se genera con **Eleventy 3.1.7** desde `blog-src/` y la salida (`blog/` y `sitemap.xml`) **se commitea**: Firebase sigue publicando la raíz del repo sin build. La landing (`index.html`) no pasa por Eleventy.

```
blog-src/
  eleventy.config.mjs        config (filtros, borradores, shortcodes)
  _data/site.json            URL, textos del blog, páginas del sitemap, NEWSLETTER
  _data/categories.json      categorías (hoy: herramientas-y-flujos)
  _includes/                 layouts (base, post), nav, footer, newsletter, tarjetas
  posts/*.md                 artículos (posts.11tydata.mjs = valores por defecto)
  index.njk · categoria.njk · feed.njk · sitemap.njk
assets/css/blog.css · assets/js/blog.js (formulario de la newsletter; solo se carga si hay formAction)
  email.njk                  versión email de cada post → blog-src/email-out/<slug>.html (no se publica)
```

## Crear un artículo

Archivo nuevo en `blog-src/posts/mi-articulo.md` (el nombre del archivo es la URL: `/blog/mi-articulo/`):

```markdown
---
title: "Título del artículo"
description: "Una o dos frases (meta description, tarjeta y feed)."
date: 2026-11-20
category: herramientas-y-flujos
cover: /assets/img/blog/mi-articulo.jpg   # opcional (ideal 1600x900); si falta se usa og.jpg en redes
coverAlt: "Descripción de la portada"
tags: ["IA", "edición"]
draft: true                                # true = no se publica
# updated: 2026-12-01                      # opcional, fecha de actualización
# slug: otra-url                           # opcional, cambia la URL
---

Texto en Markdown: ## subtítulos, listas, > citas, `código`, ![alt](/ruta.jpg)

{% figura "/assets/img/process/post-01.jpg", "Texto alternativo", "Pie de foto" %}
{% reel "https://www.instagram.com/reel/XXXX/", "Título del reel", "Descripción opcional" %}
```

`blog-src/posts/ejemplo.md` es una plantilla con todos los elementos (siempre `draft: true`).
Para añadir una categoría: nueva entrada en `_data/categories.json` (slug, name, description) y usar ese slug en `category`.

**Borradores:** con `draft: true` el post no genera página ni aparece en el listado, el feed ni el sitemap.

## Build y vista previa local

```powershell
npm install                 # solo la primera vez
npm run build:blog          # limpia y regenera blog/ y sitemap.xml (SIN borradores). Hacerlo siempre antes de commit/deploy
npm run dev:blog            # servidor local http://localhost:8089/blog/ (sin borradores)
npm run dev:blog:drafts     # igual pero CON borradores; escribe en .blog-preview/ (no se versiona ni se publica)
```

## Publicar

```powershell
npm run build:blog
firebase.cmd hosting:channel:deploy blog-preview --project fabioai-landing --expires 30d   # URL de revisión
firebase.cmd deploy --only hosting --project fabioai-landing                              # en vivo
```
Luego commit + push de `blog-src/` y `blog/` + `sitemap.xml`. El sitemap se genera desde Eleventy: si cambia la landing o la privacidad, actualiza su `lastmod` en `site.json` → `pages`.

## Newsletter Fabio AI Lab (MailerLite)

### Configuración (`blog-src/_data/site.json` → `newsletter`)

- `formAction`: `https://assets.mailerlite.com/jsonp/2787665/forms/203962865767417853/subscribe` (formulario embebido de MailerLite).
- `emailFieldName`: `fields[email]` · `hiddenFields`: `ml-submit=1`, `anticsrf=true`.
- `recaptchaSiteKey`: clave pública de reCAPTCHA v2 que usa el embed de MailerLite (`6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD`).
- `successMessage` / `errorMessage`: textos que ve el visitante.

Si `formAction` queda vacío, el bloque de suscripción no se muestra.

### Cómo funciona el formulario (`_includes/newsletter.njk` + `assets/js/blog.js`)

1. El visitante toca el campo de correo → recién entonces se carga Google reCAPTCHA (`recaptcha/api.js`, render explícito, tema oscuro). Antes no se conecta con Google.
2. Al enviar: validación del correo en el navegador, honeypot oculto (`nl_website`, nunca se envía), comprobación de la casilla «No soy un robot» y botón desactivado mientras se envía.
3. Envío con `fetch` (FormData + `g-recaptcha-response`) a MailerLite. MailerLite responde con CORS abierto (`Access-Control-Allow-Origin: *`) y JSON `{ success: true/false }`, así que el resultado se muestra en la página ("Revisa tu correo para confirmar tu suscripción"; doble opt-in activo).
4. Si la petición falla a nivel de red, se reenvía el mismo formulario en un iframe oculto. Navegadores sin `fetch`: envío normal en pestaña nueva.

Si desactivas el reCAPTCHA del formulario en MailerLite (Forms → el formulario → ajustes), deja `recaptchaSiteKey` vacío (`""`) y reconstruye: el bloque deja de cargar Google y envía sin la casilla. Mientras siga activo en MailerLite, la clave debe estar puesta o MailerLite rechazará las altas.

## Enviar un artículo por correo (versión email)

`npm run build:blog` genera, además del blog, una versión email de cada artículo publicado en `blog-src/email-out/<slug>.html` (HTML de 600 px con estilos en línea, imágenes con URL absoluta, cabecera con el símbolo, botones "Leer el artículo en el blog" y "Hablemos de tu proyecto", pie con `{$unsubscribe}`). Esa carpeta no se versiona ni se publica. Plantilla: `blog-src/email.njk`; estilos del contenido: filtro `emailHtml` en `eleventy.config.mjs`.

Para probar con borradores: `npm run email:drafts` (genera también los `draft: true`; la página HTML va a `.blog-preview/`, nunca a `blog/`). Ojo: `npm run build:blog` borra `blog-src/email-out/` antes de regenerar.

### Paso a paso en MailerLite

1. `npm run build:blog` y abre `blog-src/email-out/<slug>.html` en un editor de texto; copia todo.
2. MailerLite → **Campaigns → Create campaign** → tipo **Regular**.
3. Asunto (por ejemplo `Fabio AI Lab: <título del artículo>`), preheader (la descripción del post), remitente (Fabio Nogales · correo verificado del dominio).
4. Destinatarios: el grupo de suscriptores del formulario Fabio AI Lab.
5. Editor de contenido: **Custom HTML editor** → pega el HTML. Revisa que MailerLite reconozca `{$unsubscribe}` (enlace "Darme de baja" del pie).
6. **Send test** a tu propio correo (revisar en Gmail web, Gmail móvil y Outlook si puedes: imágenes, botones, enlaces).
7. **Schedule** (programar día y hora) o enviar ahora.

### Límites del plan gratuito de MailerLite

- Hasta **250 suscriptores**.
- Hasta **2.500 correos al mes**.
- **Sin campañas RSS automáticas** (son de pago): en el plan gratuito cada artículo se envía como campaña normal con el HTML de arriba. El feed `https://fabionogales.com/blog/feed.xml` queda listo por si más adelante se pasa a un plan de pago (Campaigns → RSS campaign → esa URL).
- **Comprueba en tu cuenta si el «Custom HTML editor» está disponible en el plan gratuito** (MailerLite lo ha ofrecido como función de pago). Si no aparece: usa el editor de arrastrar y soltar con el bloque **Custom HTML** (si está disponible) y pega solo la parte del cuerpo, o arma la campaña con bloques de texto/imagen/botón copiando el contenido del artículo.

## Publicar en Firebase (blog + newsletter)

```powershell
npm run build:blog                                                                         # regenera blog/, sitemap.xml y blog-src/email-out/
firebase.cmd hosting:channel:deploy blog-preview --project fabioai-landing --expires 30d   # 1) vista previa: probar suscripción con tu correo
firebase.cmd deploy --only hosting --project fabioai-landing                              # 2) en vivo (solo desde main, después de revisar)
```
Después: commit + push de `blog-src/`, `blog/` y `sitemap.xml`. Si cambias la landing o la privacidad, actualiza su `lastmod` en `site.json` → `pages`.
