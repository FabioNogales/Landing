# Backlog de issues — contenido pendiente

Generado a partir de cada marca `[PENDIENTE]` en `index.html`. Copia cada bloque como un issue nuevo en GitHub (usa la plantilla `.github/ISSUE_TEMPLATE/pendiente.md`), o pégalos todos de una si más adelante conectas `gh` CLI:

```bash
gh issue create --title "TÍTULO" --body "CUERPO" --label "contenido,P1"
```

Están ordenados por prioridad: **P1** bloquea publicar el sitio, **P2** mejora la conversión pero no bloquea.

---

## P1 — bloquean publicar

### 1. Metadatos de dominio
**Archivo:** `index.html:16`
Descomentar `<link rel="canonical">`, `og:url` y `twitter:url` con la URL real una vez comprado el dominio.
`Labels: infra, P1`

### 2. Foto de "Sobre mí" — bloqueado
**Archivo:** `index.html` (`.about__photo`)
Se compartió el retrato en el chat, pero no llegó como archivo accesible en disco — solo texto y contenido pudieron editarse directo. Falta: guardar la foto en `assets/img/fabio.jpg` (o similar) y avisar la ruta, o arrastrarla directo a esa carpeta.
`Labels: contenido, media, P1`

### 3. ~~Bio de "Sobre mí"~~ — hecho, a confirmar
**Archivo:** `index.html` (sección `#sobre-mi`)
Bio traducida al español desde el original en inglés. La frase pull-quote ("No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien.") es un borrador propuesto, no algo que Fabio haya escrito — confirmar o reemplazar.
`Labels: contenido, copy, P1`

### 4. ~~Email de contacto en footer~~ — hecho
`fabioaioficial@gmail.com`.
`Labels: contenido, P1`

### 5. ~~Embed del calendario~~ — hecho
Google Calendar (`calendar.app.google/tJ7RTz2SGqrbMKpdA`) embebido vía `<iframe>` en `.calendar-embed`, con link de respaldo si el navegador del visitante bloquea el iframe. Verificado que carga.
`Labels: feature, P1`

### 6. Endpoint del formulario de contacto — pendiente de cuenta
**Archivo:** `assets/js/main.js` (función `onSubmit`)
Recomendado: **Formspree** (plan gratuito, 50 envíos/mes, sin backend). Requiere que Fabio cree la cuenta él mismo (no es algo que se pueda hacer por él) y comparta el endpoint/ID del formulario para conectarlo en una línea.
`Labels: feature, P1`

### 7. Piezas de portafolio (Trabajo) — pendiente de definir plataforma
**Archivo:** `index.html` (6 tarjetas `.work__card`)
Google Drive no es ideal para embeber video con autoplay en hover (permisos, sin control de thumbnail). Recomendado: subir a Vimeo (no listado) o YouTube (no listado) por pieza. Alternativa rápida mientras tanto: enlazar directo al archivo de Drive abriendo en pestaña nueva.
`Labels: contenido, media, P1`

---

## P2 — mejoran conversión, no bloquean

### 8. ~~Estadística de confianza del hero~~ — hecho
"+40 piezas entregadas en 2026 para Bransign, Itacamba y Grazia.ai."
`Labels: contenido, copy, P2`

### 9. Logos de marcas/agencias (marquee) — texto listo, imágenes pendientes
**Archivo:** `index.html` (`.logos__track`)
El marquee ya muestra los nombres reales (Bransign, Itacamba, Yango, Grazia.ai) en vez de placeholders. Faltan los archivos de logo en sí — se compartieron en el chat pero, igual que la foto (issue #2), no llegaron como archivos en disco. Guardarlos en `assets/img/logos/` y avisar para reemplazar el texto por las imágenes.

⚠️ Los nombres de marca se infirieron visualmente de las imágenes compartidas (wordmark turquesa → Bransign, logo de montaña/triángulos → Itacamba, logo rojo → Yango, wordmark negro → Grazia.ai) — confirmar que la asociación es correcta.
`Labels: contenido, media, P2`

### 10. Tiempos reales del proceso — necesita respuesta
**Archivo:** `index.html` (sección `#proceso`)
Pregunta sin resolver: ¿el timeline actual (Día 0 Brief → Días 1–3 Preproducción con IA → Día 4 Rodaje → Días 5–7 Post automatizada → Día 7 Entrega) refleja tus tiempos reales, o hay que ajustarlo?
`Labels: contenido, P2`

### 11. ~~Caso de estudio~~ — sección retirada
No hay un caso de estudio claro todavía. Se quitó la sección completa de `index.html` (antes vacía con `[PENDIENTE]`) siguiendo el mismo criterio que testimonios: un placeholder resta más que la ausencia. Volver a agregarla cuando haya un caso real con métricas sostenibles.
`Labels: contenido, copy, P2`

### 12. ~~Testimonios~~ — sección retirada
Sin testimonios reales todavía. Se quitó la sección completa de `index.html`. Volver a agregarla en cuanto haya 2-3 citas reales.
`Labels: contenido, P2`

### 13. Respuestas de FAQ — 1 de 6 resuelta
**Archivo:** `index.html` (`#faq`)
- ✅ Rangos de inversión: resuelto ($20–$400 USD, ver la pregunta 3).
- ⬜ Modelo white label con agencias.
- ⬜ Rondas de revisión incluidas.
- ⬜ Qué se necesita del cliente para arrancar.
- ⬜ Disponibilidad remoto / local.
- ⬜ Duración de una producción de principio a fin.

La respuesta sobre IA ya estaba redactada desde antes — no tocar el encuadre ("eficiencia operativa, no sustituto de la dirección").
`Labels: contenido, copy, P2`

---

## Infraestructura (fuera de `index.html`)

### 14. Comprar y conectar dominio
Aún no comprado. Cuando esté listo: actualizar issue #1, el `mailto:` del issue #4 si cambia, y conectarlo en Firebase Hosting → Add custom domain.
`Labels: infra, P1`

### 15. ~~Deploy inicial a Firebase Hosting~~ — hecho
Sitio en vivo en https://fabioai-landing.web.app.
`Labels: infra, P1`
