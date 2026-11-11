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
assets/css/blog.css · assets/js/blog.js (solo se carga si la newsletter está activa)
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

## Newsletter: dónde pegar los datos de MailerLite

En `blog-src/_data/site.json` → `newsletter`:

- `formAction`: URL `action` del formulario embebido de MailerLite (Forms → Embedded form → código HTML; algo como `https://assets.mailerlite.com/jsonp/<cuenta>/forms/<id>/subscribe`).
- `emailFieldName`: nombre del campo de correo en ese HTML (normalmente `fields[email]`).
- `hiddenFields`: campos ocultos del HTML (normalmente `ml-submit=1` y `anticsrf=true`).

Mientras `formAction` esté vacío, el bloque aparece con el botón desactivado y el texto "Muy pronto". Al rellenarlo: `npm run build:blog`, probar una suscripción real en el canal de vista previa y publicar.
**Antes de activarlo**, añade MailerLite a `privacidad.html` (datos de la newsletter, proveedor, baja).

## Campaña RSS en MailerLite

1. Campaigns → Create campaign → **RSS campaign**.
2. Feed URL: `https://fabionogales.com/blog/feed.xml` (RSS 2.0 con contenido completo e imágenes absolutas).
3. Frecuencia: cada 2 semanas (o "cuando haya artículos nuevos"), día y hora; número máximo de artículos por envío.
4. Destinatarios: el grupo de suscriptores del formulario Fabio AI Lab.
5. Asunto, por ejemplo `Fabio AI Lab: {$rss_item_title}`; diseño con los bloques RSS (título, imagen, resumen o contenido, enlace).
6. Enviar prueba, revisar y activar. MailerLite solo envía artículos publicados después de activar la campaña.
