# Pendientes

Copia cada bloque como un issue en GitHub (plantilla en `.github/ISSUE_TEMPLATE/pendiente.md`) o dime y los creo con `gh` cuando lo tengas instalado.

## Infra y formulario

### 1. Comprobar el destino del formulario
El formulario usa Formspree (`mqpklabq`). Sigue **sin verificar**: confirmar en formspree.io que las notificaciones llegan a `fabioaioficial@gmail.com` y enviar una consulta de prueba desde `fabionogales.com`. `Labels: feature, P1`

### 2. Decidir qué hacer con `fabioai-landing.web.app` y el proyecto Firebase
Opciones: añadir otro sitio de Hosting en el mismo proyecto (para otros proyectos), redirigir `web.app` al dominio, o mover la landing a otro host. A la espera de la decisión del dueño. `Labels: infra, P2`

## Por confirmar (datos que me diste con reservas)

### 3. Requerimientos de la etapa de producción (4K)
Publiqué "cámara 4K; los requerimientos se confirman contigo antes del rodaje" y "asistencia de cámara e iluminación según la magnitud del evento". Si ya tienes definido el equipo (cámara, iluminación, asistente), conviene concretarlo. `Labels: contenido, P2`

## Contenido de plantilla (visible mientras no se rellene)

### 4. Trabajo seleccionado
Solo la 1ª tarjeta es real (reel de Instagram, "Reel destacado"). Quedan 5 tarjetas `[Client 02…06]`; tú elegirás qué piezas van. Recomendado subirlas a Vimeo o YouTube (no listado) y enlazarlas. `Labels: contenido, media, P1`

### 5. Testimonios
El diseño no incluye la sección (a propósito, hasta tener citas reales). `Labels: contenido, P3`

> Todo lo pendiente se puede ocultar de una vez con `class="hide-pending"` en `<html>` (ver `docs/GUIA_EDICION.md`).

## Textos que redacté yo (confirmar)

- Frase destacada de "Sobre mí": *"No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien."*
- Preproducción: "hasta 3 días según revisiones" (concilia el estándar de ≈ 6 días y el rango de 3 a 6 días).
- Producciones con IA: "se trabaja a distancia, también para clientes en otros países" une lo que me contaste en dos mensajes.
- Pregunta del FAQ "¿Trabajas en remoto o solo de forma presencial?": reemplaza la original, que tenía `[city]`.

## Mejoras opcionales

- Política de privacidad (el diseño tiene un enlace "Privacy" que apunta a `#`).
- Correo con dominio (`contacto@fabionogales.com`).
- Search Console + sitemap: el dominio está activo; crear la propiedad de dominio (verificación por DNS en Cloudflare) y enviar `https://fabionogales.com/sitemap.xml`.
- Traducir al español los `aria-label` y `alt` que siguen en inglés (p. ej. `aria-label="Sections"`, `"Social"`).
- Página `/en/` con `hreflang` si se quiere tráfico de búsqueda en inglés (hoy el inglés solo existe vía JavaScript y Google indexa el español).
- Limpieza opcional de clases CSS sin uso: `.ticks` y `.pull`.

## Hecho

- Diseño de `fabioai-landing` publicado respetando su estructura con el contenido real.
- Carrusel de logos de 7 clientes (Bransign, Itacamba, Yango, Grazia, Kinia, Wallbit, Clarita) con la misma velocidad lenta del diseño.
- Cifras reales: 6 piezas por jornada de 5 h, 7–8 piezas con 6 h (creadores) y +30 % de rendimiento por video (ej. Bransign). La métrica de −30 % en costos se retiró (ya no hace falta su base de comparación).
- Proceso en 3 etapas (preproducción hasta 3 días, producción 1 día de 5–7 h, postproducción ≈ 2): estándar ≈ 6 días, más producciones sistematizadas y con IA en 3 días, con 2 rondas de revisión.
- Portada: reels enlazados a `instagram.com/reel/DctRV_Agm3n/`, nombre y rol bajo la foto, nota "+250 piezas…" y 3–6 días.
- "El problema": recuadro de propuesta de valor. Pilares condensados (título + una línea), pilar 02 reformulado ("IA y automatización para producir y escalar más rápido"; coherencia del mensaje de IA resuelta) y galería "Detrás de cámaras" preparada.
- Fotos reales de proceso (14 en `assets/img/process/`; originales en `assets/img/bts/`, sin publicar): collage en pilares, una foto por etapa (incluida postproducción) y tira continua.
- FAQ completas: inversión 20–500 USD por proyecto estratégico de marketing digital, white label, necesidades del cliente y rondas de revisión.
- Ayuda de CSS `.band--seam` y versionado de assets (hoy `?v=20261110c`).
- Calendario de `fabioaioficial@gmail.com`, formulario (Formspree), cambio ES/EN (español nativo en el HTML, inglés en `EN` de `main.js`), redes reales, imagen para compartir, `robots.txt` y `sitemap.xml`.
- Dominio `fabionogales.com` y `www` **activos** en Firebase Hosting (HTTPS; `www` y `http` redirigen). Los 3 registros DNS de Cloudflare están puestos y no deben borrarse (renovación del certificado).
- Botón de WhatsApp (+591 62165130) bajo el calendario, con mensaje prellenado por idioma; el botón del calendario cambia de idioma.
- SEO base en español: HTML nativo en español, título y descripción nuevos, `og:locale` es_LA + alternate en_US, `sitemap.xml` actualizado.
- Cifras simplificadas a una sola métrica (+30 %) y hero "Producción Audiovisual & Contenido con IA para Marcas".
- Ciudad del footer rellenada (Santa Cruz, Bolivia). Perfil de creadores ya incluido en "Para quién es este servicio". FAQ 2 coherente con las producciones con IA.
- `firebase.json` no publica `CLAUDE.md` ni `assets/img/Logo FabioAI/**`.
