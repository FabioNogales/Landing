# Estructura de Landing Page — Portafolio Creador Digital

**Objetivo de la página:** una sola acción — agendar una sesión de diagnóstico de 30 min.
**Tipo de página:** landing larga de respuesta directa (one-pager con scroll), no un portafolio-galería.
**Referencia estructural:** juliangoldie.com → página larga, CTA repetido cada 1–2 secciones, prueba social densa, formulario + booking al cierre.

---

## 0. Convenciones

- **CTA principal (repetido, mismo texto siempre):** `Agenda una sesión de diagnóstico`
- **CTA secundario:** `Ver portafolio`
- **Aparición del CTA principal:** mínimo 6 veces (nav, hero, tras pilares, tras servicios, tras prueba social, cierre) + barra sticky en mobile.
- **Ancho de contenido:** 1200px máx.; texto en columna de 680–720px.
- **Jerarquía tipográfica:** H1 único (hero), H2 por sección, H3 en tarjetas.
- `[PENDIENTE]` = contenido que aún debes producir antes de publicar.

---

## 1. Wireframe — orden de secciones

```
01  Nav sticky (logo + menú + CTA)
02  Hero (titular + subtitular + CTA doble + reel de fondo)
03  Barra de prueba social (logos de marcas / agencias)
04  Bloque de tensión ("Producir bonito ya no alcanza")
05  Los tres pilares (diferenciación)
06  Diagrama de proceso (brief → entrega)          ← ventaja invisible, hazla visible
07  CTA intermedio #1
08  Servicios (4 tarjetas)
09  Portafolio / reel de trabajos                  ← [PENDIENTE]
10  Caso de estudio destacado con números          ← [PENDIENTE]
11  Para quién es esto / para quién no
12  CTA intermedio #2
13  Sobre mí (foto + bio corta + credenciales)     ← [PENDIENTE]
14  Testimonios
15  FAQ (objeciones: precio, IA, tiempos, alcance)
16  Cierre / CTA final + calendario embebido
17  Footer
18  Barra CTA sticky en mobile (persistente)
```

---

## 2. Detalle por sección

### 01 — Navegación (sticky)

| Elemento | Contenido |
|---|---|
| Logo | Nombre / marca personal |
| Menú | Trabajo · Proceso · Servicios · Sobre mí · Contacto |
| Botón derecha | `Agenda una sesión de diagnóstico` |

- Fondo transparente sobre el hero → sólido con blur al hacer scroll.
- En mobile: logo + botón CTA compacto (`Agendar`), menú hamburguesa.

---

### 02 — Hero

**H1:**
> Calidad cinematográfica. Tiempos de startup.

**Subtitular:**
> Producción audiovisual end-to-end para marcas y agencias que necesitan piezas de alto nivel estético sin los plazos ni los costos de una productora tradicional. Dirección, rodaje y post potenciados con IA y automatización.

**Botones:**
- Primario: `Agenda una sesión de diagnóstico`
- Secundario (ghost / outline): `Ver portafolio` → ancla a sección 09

**Elementos visuales:**
- Video reel en loop de fondo (mute, autoplay, ≤10 s, poster estático como fallback, versión ligera en mobile).
- Overlay oscuro degradado para contraste del texto.
- Micro-línea de confianza bajo los botones (una sola, sin adornos):
  `[PENDIENTE] Piezas producidas para [marca], [marca] y [marca]` o `+XX piezas entregadas en 2025`.

**Nota:** el hero es lo único que ve el 60% de las visitas. Titular + subtitular + botón deben caber sin scroll en 1366×768 y en mobile.

---

### 03 — Barra de prueba social

- Fila de logos en escala de grises (5–8), opacidad ~60%, hover a color.
- Etiqueta pequeña encima: `Marcas y agencias con las que he trabajado`.
- `[PENDIENTE]` — si aún no tienes logos, sustituye por una franja con 3 métricas: piezas entregadas · días promedio de brief a primer corte · formatos por producción.

---

### 04 — Bloque de tensión

**H2:**
> Producir bonito ya no alcanza.

**Párrafo:**
> Hoy una marca necesita 20 piezas donde antes necesitaba una. La productora tradicional te entrega una obra maestra en seis semanas. El freelance te entrega volumen sin criterio. Yo resuelvo las dos cosas: dirección con lenguaje de marca y una infraestructura de trabajo diseñada para escalar.

**Layout:** texto centrado, columna angosta, mucho aire, fondo contrastante respecto al hero (bloque oscuro o claro pleno). Sin imagen — que respire.

**Refuerzo opcional:** tres columnas comparativas debajo.

| Productora tradicional | Freelance | Este modelo |
|---|---|---|
| Calidad alta, 6 semanas | Rápido, sin criterio | Calidad de agencia, tiempos de startup |
| Costo estructural | Sin dirección | Un solo interlocutor |
| 1 pieza | Volumen inconsistente | Multiformato desde una producción |

---

### 05 — Los tres pilares

**H2 de sección:** `Por qué esto funciona distinto`

Layout: tres bloques apilados (no tarjetas pequeñas — el texto es largo), cada uno con número grande a la izquierda y texto a la derecha. Alternar alineación en desktop.

#### 01 — Estética de agencia, ejecución comercial
> Vengo de la producción ejecutiva y la dirección para agencias de branding, y trabajo con la agilidad del ecosistema tech. El resultado: piezas con precisión narrativa, código visual consistente y una métrica clara detrás de cada decisión creativa. La belleza no es el objetivo; es el vehículo de la conversión.

#### 02 — IA y automatización aplicadas al proceso, no al resultado
> Las productoras tradicionales operan 100% manual. Yo diseño flujos automatizados que comprimen el cronograma sin tocar el estándar de calidad:

- **Preproducción acelerada:** ideación, escaletas y guionización en días, no semanas.
- **Postproducción escalable:** sistemas que multiplican el volumen de piezas manteniendo el mismo acabado.
- **Menos tiempos muertos**, menos costo logístico, menos fricción en cada revisión.

> La IA no reemplaza la dirección. Elimina lo que nunca debió consumir tu presupuesto.

*(Destacar esa última línea como cita visual: tipografía mayor, borde izquierdo o fondo propio.)*

#### 03 — Un solo interlocutor de principio a fin
> Sin coordinación entre tres proveedores. Sin culpas cruzadas cuando algo se retrasa. Estrategia, rodaje, post y adaptación de formatos bajo una sola dirección creativa y una sola responsabilidad.

---

### 06 — Diagrama de proceso

**H2:** `Cómo se ve el proceso`
**Bajada:** `De brief a entrega multiformato, con un solo responsable en cada etapa.`

Flujo horizontal en desktop (5 nodos), vertical en mobile:

```
BRIEF  →  PREPRODUCCIÓN CON IA  →  RODAJE  →  POST AUTOMATIZADA  →  ENTREGA MULTIFORMATO
         (ideación, escaleta,      (dirección,   (edición, color,     (versiones por canal:
          guion, referencias)       cámara, luz,  motion, sistema      16:9 / 9:16 / 1:1,
                                    sonido)       de plantillas)       cortes de 6s a 60s)
```

Bajo cada nodo, un dato de tiempo cuando lo tengas:
`[PENDIENTE] Día 0 · Días 1–3 · Día 4 · Días 5–7 · Día 7`

**Por qué importa:** tu ventaja real es invisible en un portafolio. Este diagrama comunica más que cualquier párrafo — trátalo como pieza gráfica, no como texto.

---

### 07 — CTA intermedio #1

- Banda a todo el ancho, fondo de acento.
- Línea: `¿Tienes un lanzamiento en el calendario? Veamos si los tiempos dan.`
- Botón: `Agenda una sesión de diagnóstico`

---

### 08 — Servicios

**H2:** `Servicios`
Layout: grid de 4 tarjetas (2×2 en desktop, 1 columna en mobile). Cada tarjeta: ícono o miniatura + título + una línea.

| Servicio | Descripción |
|---|---|
| **Estrategia y dirección creativa** | Concepto, tono y narrativa alineados al objetivo de negocio, no al gusto personal. |
| **Rodaje profesional** | Dirección de cámara, iluminación, sonido y estabilización. Locación o estudio. |
| **Postproducción y motion graphics** | Edición, construcción de código visual, corrección de color y animación digital. |
| **Escalabilidad multiformato** | Una producción, múltiples entregables optimizados por canal para maximizar alcance y rendimiento del pauta. |

---

### 09 — Portafolio / reel `[PENDIENTE]`

- Grid de 6–9 piezas, thumbnail en video-loop al hover.
- Cada ítem: cliente · tipo de pieza · rol. Click → lightbox con el video, no navegación a otra página.
- Filtros opcionales por formato (Brand film · Social · Producto · Testimonial).
- Al final del grid: `Ver reel completo` + CTA principal.

---

### 10 — Caso de estudio destacado `[PENDIENTE]`

Estructura de una sola historia, en 4 pasos: **Contexto → Reto → Cómo se resolvió → Resultado.**

Fila de métricas grandes al cierre del caso (reemplaza adjetivos por números en cuanto tengas 2–3 casos medidos):

```
7 días            18 piezas             -40%
de brief a        entregadas desde      en costo vs.
primer corte      un solo rodaje        cotización tradicional
```

> Regla: "reduzco tiempos" es débil; "de brief a primer corte en 7 días" vende. Ninguna cifra que no puedas sostener en la llamada.

---

### 11 — Para quién es esto

**H2:** `Con quién trabajo mejor`

Lista con check (✓):
- Agencias que necesitan un socio de producción confiable y que entienda briefs de marca.
- Marcas con calendario de contenido constante que hoy dependen de proveedores lentos.
- Startups y empresas tech que necesitan piezas de nivel sin estructura interna de producción.

**Sub-bloque con tratamiento visual distinto (fondo tenue, ícono ✕):**
> No soy la mejor opción si buscas el precio más bajo del mercado o una pieza suelta sin objetivo definido.

*Este bloque filtra clientes malos y sube la percepción de valor. No lo suavices al maquetarlo — mantenlo tan visible como la lista positiva.*

---

### 12 — CTA intermedio #2

- Repetición del bloque 07 con copy distinto: `30 minutos. Alcance, tiempos reales y una estimación honesta.`
- Botón: `Agenda una sesión de diagnóstico`

---

### 13 — Sobre mí `[PENDIENTE]`

- Foto en dos columnas (imagen izquierda, texto derecha).
- Bio de 3–4 líneas: de dónde vienes (producción ejecutiva y dirección para agencias de branding), qué haces hoy, por qué el enfoque híbrido.
- Enlaces: LinkedIn · Instagram/Vimeo · Behance.
- Cierra con una frase en primera persona, no corporativa.

---

### 14 — Testimonios `[PENDIENTE]`

- 3–6 tarjetas: foto + nombre + cargo/empresa + cita corta (máx. 3 líneas).
- Prioriza citas que mencionen **tiempos** y **facilidad de coordinación** — son tus dos promesas centrales.
- Si tienes video-testimonios, uno solo, arriba del grid, vale más que seis en texto.
- Si aún no tienes testimonios: omite la sección entera. Un placeholder vacío daña más que su ausencia.

---

### 15 — FAQ

Acordeón de 5–7 preguntas. Sugeridas (redacta las respuestas con tus condiciones reales):

1. ¿Cuánto tarda una producción de principio a fin?
2. ¿Qué significa exactamente que uses IA? ¿El resultado es contenido genérico?
3. ¿Cómo funcionan los rangos de inversión?
4. ¿Trabajas con agencias en modelo white label?
5. ¿Cuántas rondas de revisión incluye?
6. ¿Qué necesitas de mi parte para arrancar?
7. ¿Trabajas en remoto o solo en [ciudad]?

**Nota sobre la pregunta 2 — crítica:** muchos decisores asocian IA a contenido genérico. La respuesta debe posicionarla siempre como **eficiencia operativa que protege el presupuesto creativo**, nunca como sustituto de la dirección. Mismo criterio en toda la página: la IA aparece en el *proceso*, jamás como argumento de venta del *resultado*.

---

### 16 — Cierre / CTA final

**H2:**
> Hablemos de tu próximo lanzamiento.

**Párrafo:**
> En 30 minutos definimos alcance, tiempos reales y una estimación honesta. Si no soy la solución correcta, te lo digo en esa llamada.

**Botón:** `Agendar diagnóstico`

**Elementos:**
- Calendario embebido (Calendly / Cal.com) directamente en la sección — sin salto a otra página.
- Alternativa debajo para quien no quiere llamada: formulario corto (Nombre · Email · Empresa · Qué necesitas · Fecha estimada de entrega).
- Máximo 5 campos. Cada campo extra cuesta conversión.

---

### 17 — Footer

- Logo + una línea de posicionamiento.
- Enlaces: Trabajo · Proceso · Servicios · Contacto · Privacidad.
- Redes: LinkedIn · Instagram · Vimeo/YouTube.
- Email directo y ciudad/zona horaria.
- Copyright.

---

### 18 — Barra sticky (mobile)

Barra fija inferior con un único botón `Agendar diagnóstico`, visible después de pasar el hero.

---

## 3. Notas de implementación

**Ritmo visual:** alterna fondos claro/oscuro por sección para marcar bloques. La página es larga; sin ese ritmo se lee como un muro.

**Video:** el reel del hero es lo más pesado del sitio. `preload="none"` fuera del viewport, poster en WebP, y en mobile reemplaza el loop por imagen estática. Objetivo: LCP < 2.5 s.

**Medición mínima:** eventos en click de cada CTA (identificando la sección de origen), scroll depth al 25/50/75/100% y envío de formulario. Sin esto no sabrás qué bloque convierte.

**SEO / metadatos:**
- `<title>`: Producción audiovisual para marcas y agencias | [Tu nombre]
- `meta description`: Piezas de calidad cinematográfica en tiempos de startup. Dirección, rodaje y post end-to-end potenciados con IA. Agenda un diagnóstico de 30 minutos.
- Open Graph con frame del reel + el H1.
- Schema.org: `Person` + `Service`.

**Accesibilidad:** contraste AA sobre el video del hero (usa overlay, no confíes en el frame), `alt` en todo el portafolio, foco visible en botones, video sin autoplay con sonido.

---

## 4. Checklist antes de publicar

- [ ] Reel del hero editado (≤10 s, loop limpio, versión mobile)
- [ ] 6–9 piezas de portafolio con thumbnails en video
- [ ] Al menos 1 caso de estudio con 3 métricas reales
- [ ] Logos de clientes o, en su defecto, franja de métricas
- [ ] 3 testimonios (o eliminar la sección)
- [ ] Respuestas de FAQ redactadas
- [ ] Calendario conectado y probado end-to-end
- [ ] Diagrama de proceso diseñado como pieza gráfica
- [ ] Números reemplazando adjetivos en hero, pilar 02 y caso de estudio
