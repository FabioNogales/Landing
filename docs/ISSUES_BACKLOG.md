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

### 2. Foto de "Sobre mí"
**Archivo:** `index.html:404`
Reemplazar el placeholder `.about__photo` por una foto real (retrato, 4:5).
`Labels: contenido, media, P1`

### 3. Bio de "Sobre mí"
**Archivo:** `index.html:407-408`
Redactar el párrafo de bio y la frase pull-quote en primera persona.
`Labels: contenido, copy, P1`

### 4. Email de contacto en footer
**Archivo:** `index.html:606`
Reemplazar `hola@tudominio.com` por el email real (y actualizar el dominio del `mailto:` cuando esté comprado).
`Labels: contenido, P1`

### 5. Embed del calendario
**Archivo:** `index.html:548`
Conectar Calendly o Cal.com en `.calendar-slot`, sin salto a otra página.
`Labels: feature, P1`

### 6. Endpoint del formulario de contacto
**Archivo:** `assets/js/main.js` (función `onSubmit`)
El formulario no envía datos todavía — conectar Formspree, Resend o un endpoint propio.
`Labels: feature, P1`

### 7. Piezas de portafolio (Trabajo)
**Archivo:** `index.html:269-317` (6 tarjetas `.work__card`)
Reemplazar cada placeholder "[PENDIENTE] video" con el video/thumbnail real, cliente real y meta descriptiva.
`Labels: contenido, media, P1`

---

## P2 — mejoran conversión, no bloquean

### 8. Estadística de confianza del hero
**Archivo:** `index.html:76`
Reemplazar "+XX piezas entregadas en 2025 para [marca]..." con una cifra real y sostenible.
`Labels: contenido, copy, P2`

### 9. Logos de marcas/agencias (marquee)
**Archivo:** `index.html:80-91`
Reemplazar los 6 `[Marca 0X]` con logos reales (o, si aún no hay, sustituir la sección entera por 3 métricas — ver `estructura-landing.md` sección 03).
`Labels: contenido, media, P2`

### 10. Tiempos reales del proceso
**Archivo:** `index.html:219`
Confirmar que los tiempos de cada nodo (Día 0, Días 1–3, Día 4, Días 5–7, Día 7) reflejan tu operación real.
`Labels: contenido, P2`

### 11. Caso de estudio completo
**Archivo:** `index.html:334-355`
Completar cliente, contexto, reto, resolución y resultado. Las métricas (7 días / 18 piezas / −40%) ya están, deben quedar sostenibles en una llamada real.
`Labels: contenido, copy, P2`

### 12. Testimonios reales
**Archivo:** `index.html:428-451`
Reemplazar las 3 citas placeholder con testimonios reales, o eliminar la sección completa si no hay ninguno todavía (un placeholder vacío resta más que la ausencia).
`Labels: contenido, P2`

### 13. Respuestas de FAQ
**Archivo:** `index.html:475-529` (6 de las 7 preguntas)
Redactar rangos de inversión, política de revisiones, modelo white label, qué se necesita para arrancar y disponibilidad remota/local. La respuesta sobre IA (`index.html:484`) ya está redactada — no tocar el encuadre ("eficiencia operativa, no sustituto de la dirección").
`Labels: contenido, copy, P2`

---

## Infraestructura (fuera de `index.html`)

### 14. Comprar y conectar dominio
Aún no comprado. Cuando esté listo: actualizar issue #1, el `mailto:` del issue #4, y configurar DNS/CNAME según el hosting elegido.
`Labels: infra, P1`

### 15. Elegir hosting y desplegar
GitHub Pages, Vercel o Netlify. Sitio 100% estático, sin build step — cualquiera sirve.
`Labels: infra, P1`
