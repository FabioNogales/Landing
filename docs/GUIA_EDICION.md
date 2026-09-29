# Guía de edición — textos, fotos, logos y secciones

## Dónde está cada cosa

| Carpeta | Qué es |
|---|---|
| `fabioai-landing` | **Tu diseño original** (intacto). Es la referencia; no se publica desde ahí. |
| `LANDING PAGE` (esta) | **El sitio publicado**: tu diseño + el contenido real + Firebase + GitHub. |

Si vuelves a cambiar el diseño en `fabioai-landing`, avísame y traigo esos cambios aquí conservando los datos reales.

## 1. Cómo funcionan los textos (el sitio es bilingüe)

Cada texto vive en **dos sitios** unidos por una clave:

| Idioma | Dónde está | Cómo encontrarlo |
|---|---|---|
| Inglés | `index.html` | el elemento con `data-i18n="clave"` |
| Español (idioma por defecto) | `assets/js/main.js`, objeto `ES = { ... }` | la misma `'clave'` |

**Ejemplo — cambiar el subtítulo del hero:** en `index.html` busca `data-i18n="hero.sub"` y cambia el inglés; en `assets/js/main.js` busca `'hero.sub'` y cambia el español.

Reglas rápidas:
- Cambia cada texto **en los dos sitios**, o un idioma queda desactualizado.
- Palabra en naranja: `<span class="accent">palabra</span>` (en ambos idiomas).
- Textos **sin** `data-i18n` (nombres de redes y marcas, el email) solo están en `index.html`.
- Texto nuevo: pon `data-i18n="mi.clave"` en el elemento y añade `'mi.clave': 'texto en español',` dentro de `ES`.

| Prefijo de clave | Sección |
|---|---|
| `nav.` | menú superior |
| `hero.` `ph.` | portada (título, subtítulo, botones, "5 días", tarjeta del reel) |
| `cmp.` | "El problema" (barras y 3 columnas) |
| `pil.` | "Por qué esto funciona distinto" |
| `proc.` | proceso (5 pasos + bloque para clientes en otros países) |
| `cta.text` | banda naranja |
| `srv.` | servicios |
| `wrk.` `todo.` | trabajo |
| `case.` `met.` | caso de estudio |
| `fit.` | "Con quién trabajo mejor" |
| `ab.` | sobre mí |
| `faq.` | preguntas frecuentes (`1q` pregunta, `1a` respuesta) |
| `bk.` | agendar y formulario |
| `ft.` `js.` | footer y mensajes del formulario |

## 2. Contenido que aún es de plantilla (marcado con chips "Pending")

Tu diseño trae bloques de ejemplo. Hoy siguen **visibles**, tal como los diseñaste:

- Trabajo: 5 tarjetas `[Client 02…06]` ("Video pending") — la 1ª ya es el reel real.
- Caso de estudio completo (⚠️ sus cifras 5 / 18 / −40 % son de ejemplo, no tuyas).
- FAQ: white label, revisiones y qué necesito del cliente.
- Footer: la ciudad.

Para cada uno: rellena el texto (inglés en el HTML + español en `main.js`), y borra el chip `<span class="todo">…</span>` y la clase `is-pending`.

**Interruptor para ocultarlos todos de una vez** (sin borrar nada): en `index.html`, cambia `<html lang="es">` por `<html lang="es" class="hide-pending">`. Para volver a mostrarlos, quita la clase.

## 3. Tareas frecuentes

**Agregar una pieza de portafolio** — copia la tarjeta 1 (`<a class="wcard" …>`), cambia `data-tag` (Brand film / Social / Product / Testimonial), el enlace (Vimeo / YouTube / Instagram), la etiqueta y los dos textos. Para una tarjeta con enlace, usa la etiqueta `<a>`; las de plantilla son `<article>`.

**Agregar un logo de cliente** — el carrusel usa los PNG optimizados de `assets/img/clients/` (fondo transparente, ~2× el tamaño visible, < 40 KB). Copia una línea `<img class="logo logo--nombre" …>` con su `<i></i>` dentro de **cada uno de los 3 bloques** de la franja en `index.html`, y define su alto en `assets/css/styles.css` (`.logo--nombre { height: 36px; }`). Tus originales viven en `assets/img/logos/` y **no se publican**. Lo más simple: pásame el logo y yo lo optimizo y lo agrego.

**Cambiar la velocidad del carrusel** — `animation: marquee 99s …` en `.strip__track` (más segundos = más lento; 99 s ≈ 38 px/s, la misma velocidad de tu diseño).

**Cambiar fotos** — reemplaza `assets/img/fabio.jpg` (portada, mejor 4:5) y `assets/img/fabio-about.jpg` (sobre mí) conservando el nombre.

**Cambiar el calendario** — en `index.html`, dentro de `.calslot`, la constante `url:` del script de Google Calendar. Hoy usa la agenda de `fabioaioficial@gmail.com`.

**Formulario** — envía a Formspree (`data-endpoint` en `<form id="contactForm">`). Revisa en formspree.io que las notificaciones lleguen a `fabioaioficial@gmail.com`. Con `data-endpoint=""` el formulario abre el correo del visitante.

## 4. Probar y publicar

```bash
python -m http.server 4321      # probar en http://localhost:4321
```
```powershell
firebase.cmd deploy --only hosting                    # publicar (Git Bash: firebase deploy --only hosting)
firebase.cmd hosting:channel:deploy vista-previa      # URL temporal para revisar sin tocar el sitio en vivo
```
Después guarda en GitHub: `git add -A`, `git commit -m "descripción"`, `git push`.

> Atajo: dime "cambia X por Y y publícalo" y lo hago en los dos idiomas, lo pruebo y lo publico.
