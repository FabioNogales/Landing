# Guía de edición — cómo cambiar textos, fotos y secciones

**Dónde se edita:** siempre en esta carpeta (`F:\PROYECTOS\FabioAI\LANDING PAGE`). La carpeta `fabioai-landing` es solo la copia original del rediseño: cualquier cambio hecho ahí **no** llega al sitio.

## 1. Cómo funcionan los textos (el sitio es bilingüe)

Cada texto existe en dos idiomas y vive en **dos lugares**, unidos por una clave:

| Idioma | Dónde está | Cómo encontrarlo |
|---|---|---|
| Inglés | `index.html` | el elemento que tiene `data-i18n="clave"` |
| Español (idioma por defecto) | `assets/js/main.js`, objeto `ES = { ... }` | buscar la misma `'clave'` |

**Ejemplo — cambiar el subtítulo del hero:**
1. En `index.html` busca `data-i18n="hero.sub"` y cambia el texto en inglés.
2. En `assets/js/main.js` busca `'hero.sub'` y cambia el texto en español.

Reglas rápidas:
- Si cambias un texto, cámbialo **en los dos sitios**; si no, un idioma queda desactualizado.
- Para poner una palabra en naranja: `<span class="accent">palabra</span>` (funciona en ambos idiomas).
- Textos **sin** `data-i18n` (nombres de marcas, redes, el email) solo están en `index.html`.
- Texto nuevo: pon `data-i18n="mi.clave"` en el elemento y añade `'mi.clave': 'texto en español',` dentro de `ES`.

### Mapa de claves → sección

| Prefijo | Sección |
|---|---|
| `nav.` | menú superior |
| `hero.` `ph.` | portada (título, subtítulo, botones, cifra de 5 días, tarjeta del reel) |
| `s.label` | franja de logos |
| `cmp.` | "El problema" (barras de comparación y 3 columnas) |
| `pil.` | "Por qué esto funciona distinto" (3 pilares) |
| `proc.` | proceso (5 pasos + bloque para clientes en otros países) |
| `cta.text` | banda naranja |
| `srv.` | servicios |
| `wrk.` | trabajo |
| `fit.` | "Con quién trabajo mejor" |
| `ab.` | sobre mí (bio y frase destacada) |
| `faq.` | preguntas frecuentes (`1q` = pregunta, `1a` = respuesta) |
| `bk.` | agendar y formulario |
| `ft.` `js.` | footer y mensajes del formulario |

## 2. Cosas que se hacen seguido

**Agregar un logo de cliente** — pon el archivo en `assets/img/logos/`, copia una de las líneas `<img class="logo ...">` de la franja de logos en `index.html` (incluida su `<i></i>`), cambia `src` y `alt`. Repite la línea en los 3 bloques de la franja para que el carrusel no deje huecos. Si el logo se ve muy grande o pequeño, añade una regla `.logo--nombre { height: 40px; }` en `assets/css/styles.css`.

**Agregar una pieza de portafolio** — en la sección `id="work"` hay una tarjeta y, debajo, un comentario con instrucciones. Copia la tarjeta, cambia el enlace (Vimeo / YouTube / Instagram), la etiqueta y los dos textos. Al llegar a 4 piezas, descomenta los filtros y quita la clase `work--few`.

**Mostrar una pregunta oculta del FAQ** — las de *white label*, *revisiones* y *qué necesito del cliente* están dentro de un comentario `<!-- ... -->` al final de `#faq`. Escribe la respuesta (inglés en el HTML, español en `main.js`), borra el `<span class="todo">…</span>` y mueve la pregunta fuera del comentario.

**Mostrar el caso de estudio** — está comentado en `index.html` (busca `CASE STUDY`); su texto en español ya está en `main.js` (`case.*`, `met.*`). Descoméntalo cuando tengas un caso real con cifras que puedas sostener.

**Cambiar la foto** — reemplaza `assets/img/fabio.jpg` (portada, mejor 4:5) y `assets/img/fabio-about.jpg` (sobre mí) conservando el nombre.

## 3. Probar antes de publicar

```bash
python -m http.server 4321
```
y abre <http://localhost:4321> (o pídeme que levante la vista previa).

## 4. Publicar

Desde la carpeta del proyecto:

```powershell
firebase.cmd deploy --only hosting
```
(en PowerShell usa `firebase.cmd`; en Git Bash basta `firebase`). Para revisar primero en una URL temporal sin tocar el sitio en vivo:

```powershell
firebase.cmd hosting:channel:deploy vista-previa
```

Después guarda el trabajo en GitHub: `git add -A`, `git commit -m "descripción"`, `git push`.

> Atajo: puedes decirme "cambia X por Y y publícalo" y lo hago en los dos idiomas, lo pruebo y lo publico.
