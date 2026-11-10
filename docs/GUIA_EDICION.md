# Guía de edición — textos, fotos, logos y secciones

## Dónde está cada cosa

| Carpeta | Qué es |
|---|---|
| `fabioai-landing` | **Tu diseño original** (intacto). Es la referencia; no se publica desde ahí. |
| `LANDING PAGE` (esta) | **El sitio publicado**: tu diseño + el contenido real + Firebase + GitHub. |

Si vuelves a cambiar el diseño en `fabioai-landing`, avísame y traigo esos cambios aquí conservando los datos reales.

## 1. Cómo funcionan los textos (el sitio es bilingüe)

El **español es el idioma nativo**: vive directamente en `index.html` (es lo que leen Google y quien no tiene JavaScript). El **inglés** vive en `assets/js/main.js`, en el objeto `EN = { ... }`, unido al elemento por una clave `data-i18n`.

| Idioma | Dónde está | Cómo encontrarlo |
|---|---|---|
| Español (por defecto) | `index.html` | el texto dentro del elemento con `data-i18n="clave"` |
| Inglés | `assets/js/main.js`, objeto `EN` | la misma `"clave"` |

**Ejemplo — cambiar el subtítulo del hero:** en `index.html` busca `data-i18n="hero.sub"` y cambia el español; en `assets/js/main.js` busca `"hero.sub"` dentro de `EN` y cambia el inglés.

Reglas rápidas:
- Cambia cada texto **en los dos sitios**, o un idioma queda desactualizado.
- Palabra en naranja: `<span class="accent">palabra</span>` (en ambos idiomas).
- Placeholders de campos: `data-i18n-ph="clave"`, con su entrada en `EN`.
- Textos **sin** `data-i18n` (nombres de redes y marcas, el email) solo están en `index.html`.
- Texto nuevo: pon `data-i18n="mi.clave"` en el elemento (con el español dentro) y añade `"mi.clave": "text in English",` dentro de `EN`.
- Textos sin elemento en el HTML (mensajes del formulario `js.*`, botón de WhatsApp `wa.btn`, etiqueta del calendario `cal.btn`, título y descripción en inglés) están en `STR = { es, en }`, en `main.js`.
- Enlaces de WhatsApp (número +591 62165130, con mensaje prellenado por idioma): `WA_URL = { es, en }`, en `main.js`.
- `setLang('en')` aplica `EN`; `setLang('es')` restaura el español que lee del DOM la primera vez.

| Prefijo de clave | Sección |
|---|---|
| `nav.` | menú superior |
| `hero.` `ph.` | portada (título "Producción Audiovisual & Contenido con IA para Marcas", subtítulo, botones, nombre y rol bajo la foto `hero.role`, nota "+250 piezas…", "3–6 días", tarjeta del reel) |
| `cmp.` | "El problema" (barras, 3 columnas y recuadro de propuesta de valor `vpT` / `vpB`) |
| `pil.` | "Por qué esto funciona distinto" (cada pilar: título + una línea) y collage "Detrás de cámaras" (`pil.bts`) |
| `proc.` | proceso: 3 etapas (`1`, `2`, `3`: `t` título, `d` resumen, `a b c` viñetas, `x` chip de tiempo) + producciones con IA (`altT`, `altB`) y etiquetas de las fotos (`proc.tag1` "Preproducción", `proc.tag2` "Producción", `proc.tag3` "Postproducción") |
| `num.` | banda "En cifras" (hoy una sola cifra, `num.3`) |
| `cta.text` | banda naranja |
| `srv.` | servicios |
| `wrk.` `todo.` | trabajo y chips "Pending" (`todo.video`) |
| `fit.` | "Con quién trabajo mejor" |
| `ab.` | sobre mí |
| `faq.` | preguntas frecuentes (`1q` pregunta, `1a` respuesta) |
| `bk.` | agendar y formulario (incluye el texto de WhatsApp `bk.alt`) |
| `ft.` `js.` | footer y mensajes del formulario |

## 2. Contenido que aún es de plantilla (marcado con chips "Pending")

Tu diseño trae bloques de ejemplo. Hoy siguen **visibles**, tal como los diseñaste:

Hoy no queda contenido de plantilla visible: el portafolio ya tiene 16 piezas reales, y tampoco quedan FAQ pendientes, caso de estudio, huecos de foto ni ciudad del footer. No existe sección de testimonios (a propósito, hasta tener citas reales).

Si añades nuevos bloques de plantilla: rellena el texto (español en el HTML + inglés en `EN` de `main.js`), y borra el chip `<span class="todo">…</span>` y la clase `is-pending`.

**Interruptor para ocultarlos todos de una vez** (sin borrar nada): en `index.html`, cambia `<html lang="es">` por `<html lang="es" class="hide-pending">`. Para volver a mostrarlos, quita la clase.

## 3. Tareas frecuentes

**Cambiar una cifra** — la banda "En cifras" (`id="numbers"`) usa `.metrics--single` y hoy tiene **una sola cifra**: `<p class="metric__value" data-count="30" data-prefix="+" data-suffix="%">+30%</p>`. `data-count` es el número (o el primero de un rango), `data-count2` el segundo del rango (si es único, no lo pongas); `data-prefix` / `data-suffix` añaden símbolos (`+`, `%`). Cambia también el texto entre las etiquetas, que es lo que ven quienes no tienen JavaScript. La etiqueta (`num.3`) va en español en el HTML y en inglés en `EN`. Hoy: **+30 %** de mejora en rendimiento por video (ej. Bransign). Para volver a varias cifras, quita `metrics--single` y añade más bloques. Los tiempos aparecen en la portada ("3–6"), en la barra del "problema" ("≈ 3 a 6 días · multiformato") y en el FAQ de tiempos; mantenlos coherentes.

**Cambiar el proceso** — las 3 etapas están en `id="process"`. Cada etapa tiene título (`proc.1t`), resumen (`proc.1d`), viñetas (`proc.1a`, `1b`, `1c`) y un chip de tiempo (`proc.1x`); para quitar o añadir una viñeta, borra o copia un `<li>` y su clave. El estándar es ≈ 6 días (preproducción hasta 3, producción 1 día de 5–7 h, postproducción ≈ 2) con 2 rondas de revisión. El bloque "Producciones sistematizadas y con IA · 3 días" es `proc.altT` / `proc.altB`.

**Fotos de proceso / detrás de cámaras** — hay 14 imágenes en `assets/img/process/`: el collage inclinado de la sección de pilares (`bts-01…03`, 3 tarjetas `.bts__card`, con parallax), las fotos de las 3 etapas del proceso (`pre-01` Preproducción, `prod-01…03` Producción, `post-01` Postproducción; etiquetas `proc.tag1…3`) y la tira continua `.film` entre "En cifras" y la banda naranja (`strip-01…06`; 75 s por vuelta, se pausa al pasar el cursor; se clona y arranca solo al acercarse, para no cargar fotos por adelantado; la velocidad está en `.film.is-on .film__track` de `styles.css`). Para añadir o cambiar una foto: optimízala a ≈ 1400–1600 px en el lado largo, < 250 KB, sin EXIF/GPS; guarda la copia en `assets/img/process/` y apunta el `src` de la etiqueta `<img>` correspondiente en `index.html` (con su `alt` en español). Los originales van en `assets/img/bts/` (no se publican ni se suben a git). O pásame la foto y la agrego.

**Etapa de producción** — la viñeta `proc.2c` indica rodaje en 4K con iluminación profesional y asistente de cámara cuando el proyecto lo requiere (español en el HTML, inglés en `EN`).

**Página de privacidad** — `privacidad.html` (español nativo) + `assets/js/privacidad.js` (inglés en su objeto `EN`, claves `pv.*`; usa la misma clave `fabioai-lang` de localStorage, así que respeta el idioma elegido en la landing). Se edita igual que el resto: español en el HTML, inglés en `privacidad.js`. Está enlazada desde el footer (`ft.privacy`) y en `sitemap.xml`. Declara que el sitio no usa cookies publicitarias ni de analítica: si añades analítica o píxeles, actualízala.

**Redirección del dominio de Firebase** — al inicio del `<head>` de `index.html` hay un script en línea que manda `fabioai-landing.web.app` y `fabioai-landing.firebaseapp.com` a `fabionogales.com` (conserva ruta, query y hash). Hay que mantenerlo: ese dominio por defecto no se puede eliminar.

**Separador `.band--seam`** — línea fina entre dos bandas claras consecutivas (añádela a la segunda `<section class="band …">`).

**Portafolio (Trabajo seleccionado)** — 16 tarjetas `<a class="wcard">` de Instagram en 4 categorías (`data-tag` = `data-filter` del botón): `ugc` 5, `eventos` 4, `producto` 2, `agencia` 5. Son tarjetas compactas de referencia (sin miniatura) y se muestran todas; no hay botón "Ver más". Para **agregar**: copia una tarjeta `a.wcard`, pon su `data-tag` (`ugc`, `eventos`, `producto` o `agencia`), cambia el `href` por el enlace del reel **sin parámetros** (`https://www.instagram.com/reel/XXXX/`, sin `?igsh=…`) y ajusta el número tras el `·`. El título de la tarjeta es la categoría (`wrk.f1…f4`, ya traducida en `EN`); si creas una categoría nueva, añade su botón `data-filter`, su clave `wrk.fN` en el HTML y en `EN`. Para **quitar**: borra la tarjeta y renumera las de esa categoría. El texto común "Ver en Instagram" es `wrk.ig`.

**Agregar un logo de cliente** — el carrusel usa los PNG optimizados de `assets/img/clients/` (fondo transparente, ~2× el tamaño visible, < 40 KB). Copia una línea `<img class="logo logo--nombre" …>` con su `<i></i>` dentro de **cada uno de los 3 bloques** de la franja en `index.html`, y define su alto en `assets/css/styles.css` (`.logo--nombre { height: 36px; }`). Tus originales viven en `assets/img/logos/` y **no se publican**. Lo más simple: pásame el logo y yo lo optimizo y lo agrego.

**Cambiar la velocidad del carrusel** — `animation: marquee 99s …` en `.strip__track` (más segundos = más lento; 99 s ≈ 38 px/s, la misma velocidad de tu diseño).

**Cambiar fotos** — reemplaza `assets/img/fabio.jpg` (portada, mejor 4:5) y `assets/img/fabio-about.jpg` (sobre mí) conservando el nombre.

**Cambiar el calendario** — el botón lo dibuja `main.js` dentro de `<div id="calBtn" data-url="…">` (en `.calslot`); cambia la URL en `data-url`. Hoy usa la agenda de `fabioaioficial@gmail.com`. La etiqueta sigue el idioma (`cal.btn` en `STR`). Debajo hay un botón de WhatsApp (+591 62165130) con el mismo criterio: texto en `STR` (`wa.btn`) y enlace en `WA_URL`.

**Formulario** — envía a Formspree (`data-endpoint` en `<form id="contactForm">`). Destino confirmado: `fabioaioficial@gmail.com`. Con `data-endpoint=""` el formulario abre el correo del visitante.

## 4. Probar y publicar

```bash
python -m http.server 4321      # probar en http://localhost:4321
```
```powershell
firebase.cmd deploy --only hosting                    # publicar (Git Bash: firebase deploy --only hosting)
firebase.cmd hosting:channel:deploy vista-previa      # URL temporal para revisar sin tocar el sitio en vivo
```
Al cambiar CSS o JS, sube el número de versión en las URLs de `index.html` (hoy `styles.css?v=20261111b` y `main.js?v=20261111b`) para evitar la caché.
Después guarda en GitHub: `git add -A`, `git commit -m "descripción"`, `git push`.

> Atajo: dime "cambia X por Y y publícalo" y lo hago en los dos idiomas, lo pruebo y lo publico.

`firebase.json` no publica `CLAUDE.md` ni `assets/img/Logo FabioAI/**` (además de los originales de `bts/` y `logos/`).
