---
# PLANTILLA DE EJEMPLO. draft: true => nunca se publica (ni página, ni feed, ni sitemap).
# Verla en local: npm run dev:blog:drafts  ->  http://localhost:8089/blog/ejemplo/
title: "Ejemplo de formato: todos los elementos de un artículo"
description: "Artículo de muestra (borrador) que enseña cómo se ven los títulos, listas, citas, imágenes con pie y tarjetas de reels."
date: 2026-11-11
category: herramientas-y-flujos
cover: /assets/img/process/prod-01.jpg
coverAlt: "Set de rodaje con cámara e iluminación"
tags: ["plantilla", "formato"]
draft: true
---

Este archivo es solo una **plantilla de formato**. No es un artículo real: sirve para revisar cómo se ve cada elemento antes de escribir los primeros posts. El primer párrafo funciona como entrada y puede llevar *énfasis* o [enlaces internos](/#services).

## Un subtítulo de sección (H2)

Los párrafos tienen un ancho máximo cómodo para leer. Este es texto de relleno para comprobar el interlineado, el color y el tamaño de la fuente en pantallas grandes y pequeñas.

### Un subtítulo menor (H3)

Lista con viñetas:

- Primer punto de la lista.
- Segundo punto, con un poco más de texto para ver cómo se comporta cuando ocupa dos líneas en móvil.
- Tercer punto con `código en línea`.

Lista numerada:

1. Paso uno.
2. Paso dos.
3. Paso tres.

> Una cita destacada se ve así. Sirve para resaltar una idea clave del artículo.

## Imagen con pie de foto

{% figura "/assets/img/process/post-01.jpg", "Pantalla de edición en postproducción", "Pie de foto: describe brevemente lo que se ve en la imagen." %}

También funciona la sintaxis normal de Markdown para imágenes sin pie:

![Detalle del proceso de producción](/assets/img/process/strip-01.jpg)

## Tarjeta de reel de Instagram

Las tarjetas enlazan al reel sin cargar scripts de Instagram:

{% reel "https://www.instagram.com/reel/DawDRbUDK4L/", "Título del reel", "Una línea opcional que explica qué muestra el reel." %}

## Bloque de código

```
Ejemplo de bloque de código o de un prompt:
línea 1
línea 2
```

---

Cierre del artículo. Después de este texto aparecen automáticamente el bloque de suscripción a Fabio AI Lab, la llamada a la acción y los enlaces al artículo anterior y siguiente.
