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

### 4. Creadores e influencers
Las cifras ya mencionan "creadores e influencers", pero "Con quién trabajo mejor" solo habla de agencias, marcas y startups. ¿Agregamos un cuarto perfil? `Labels: contenido, P3`

### 5. FAQ 2 y las producciones con IA
La respuesta dice que la IA vive "en el proceso, no en el resultado" (con una excepción al final). Revisar la redacción para que sea coherente con las producciones con IA (avatares y B-roll generados). `Labels: contenido, P2`

## Contenido de plantilla (visible mientras no se rellene)

### 6. Trabajo seleccionado
Solo la 1ª tarjeta es real (reel de Instagram, "Reel destacado"). Quedan 5 tarjetas `[Client 02…06]`; tú elegirás qué piezas van. Recomendado subirlas a Vimeo o YouTube (no listado) y enlazarlas. `Labels: contenido, media, P1`

### 7. Fotos de Detrás de cámaras (3)
Subir `assets/img/bts/bts-1.jpg`, `bts-2.jpg`, `bts-3.jpg` (JPG, horizontal o 4:3, ~1600 px, < 300 KB) y cambiar `data-src` por `src` en las 3 etiquetas `<img>` de `index.html`. Ver `docs/GUIA_EDICION.md`. `Labels: contenido, media, P1`

### 8. Ciudad en el footer
Sigue con su chip "Pending" (`[City] · GMT-4`). `Labels: contenido, P2`

### 9. Testimonios
El diseño no incluye la sección (a propósito, hasta tener citas reales). `Labels: contenido, P3`

> Todo lo pendiente se puede ocultar de una vez con `class="hide-pending"` en `<html>` (ver `docs/GUIA_EDICION.md`).

## Textos que redacté yo (confirmar)

- Frase destacada de "Sobre mí": *"No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien."*
- Bio en inglés: pasé tu texto original a primera persona para que suene igual que el español.
- Preproducción: "hasta 3 días según revisiones" (concilia el estándar de ≈ 6 días y el rango de 3 a 6 días).
- Producciones con IA: "se trabaja a distancia, también para clientes en otros países" une lo que me contaste en dos mensajes.
- Pregunta del FAQ "¿Trabajas en remoto o solo de forma presencial?": reemplaza la original, que tenía `[city]`.

## Mejoras opcionales

- Política de privacidad (el diseño tiene un enlace "Privacy" que apunta a `#`).
- Correo con dominio (`contacto@fabionogales.com`).
- Search Console + sitemap: ya se puede hacer, el dominio está activo (propiedad de dominio, verificación por DNS en Cloudflare; enviar `https://fabionogales.com/sitemap.xml`).
- Limpieza opcional de clases CSS sin uso: `.ticks` y `.pull`.

## Hecho

- Diseño de `fabioai-landing` publicado respetando su estructura con el contenido real.
- Carrusel de logos de 7 clientes (Bransign, Itacamba, Yango, Grazia, Kinia, Wallbit, Clarita) con la misma velocidad lenta del diseño.
- Cifras reales: 6 piezas por jornada de 5 h, 7–8 piezas con 6 h (creadores) y +30 % de rendimiento por video (ej. Bransign). La métrica de −30 % en costos se retiró (ya no hace falta su base de comparación).
- Proceso en 3 etapas (preproducción hasta 3 días, producción 1 día de 5–7 h, postproducción ≈ 2): estándar ≈ 6 días, más producciones sistematizadas y con IA en 3 días, con 2 rondas de revisión.
- Portada: reels enlazados a `instagram.com/reel/DctRV_Agm3n/`, nombre y rol bajo la foto, nota "+250 piezas…" y 3–6 días.
- "El problema": recuadro de propuesta de valor. Pilares condensados (título + una línea), pilar 02 reformulado ("IA y automatización para producir y escalar más rápido"; coherencia del mensaje de IA resuelta) y galería "Detrás de cámaras" preparada.
- Caso de estudio eliminado de la página.
- FAQ completas: inversión 20–500 USD por proyecto estratégico de marketing digital, white label, necesidades del cliente y rondas de revisión.
- Ayuda de CSS `.band--seam` y versionado de assets `?v=20260930`.
- Calendario de `fabioaioficial@gmail.com`, formulario (Formspree), cambio ES/EN, redes reales, imagen para compartir, `robots.txt` y `sitemap.xml`.
- Dominio `fabionogales.com` y `www` **activos** en Firebase Hosting (HTTPS; `www` y `http` redirigen). Los 3 registros DNS de Cloudflare están puestos y no deben borrarse (renovación del certificado).
