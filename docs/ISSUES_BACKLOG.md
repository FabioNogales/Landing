# Pendientes

Copia cada bloque como un issue en GitHub (plantilla en `.github/ISSUE_TEMPLATE/pendiente.md`) o dime y los creo con `gh` cuando lo tengas instalado.

## Pendiente

### 1. Correo con dominio: "Enviar como" (dueño)
`contacto@fabionogales.com` ya recibe (Cloudflare Email Routing → `fabioaioficial@gmail.com`). Falta configurar en Gmail "Enviar como" con `smtp.gmail.com`, puerto 587 y contraseña de aplicación. Opcional: mostrar `contacto@` en el sitio en lugar del Gmail. `Labels: infra, P2`

### 2. Portadas para las tarjetas del portafolio (opcional)
Las 16 tarjetas son referenciales, sin miniatura. Si se quiere, añadir capturas de portada. `Labels: contenido, media, P3`

### 3. Testimonios
El diseño no incluye la sección (a propósito, hasta tener citas reales). `Labels: contenido, P3`

## Textos que redacté yo (confirmar)

- Frase destacada de "Sobre mí": *"No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien."*
- Preproducción: "hasta 3 días según revisiones" (concilia el estándar de ≈ 6 días y el rango de 3 a 6 días).
- Producciones con IA: "se trabaja a distancia, también para clientes en otros países" une lo que me contaste en dos mensajes.
- Pregunta del FAQ "¿Trabajas en remoto o solo de forma presencial?": reemplaza la original, que tenía `[city]`.

## Mejoras opcionales

- Traducir al español los `aria-label` y `alt` que siguen en inglés (p. ej. `aria-label="Sections"`, `"Social"`).
- Página `/en/` con `hreflang` si se quiere tráfico de búsqueda en inglés (hoy el inglés solo existe vía JavaScript y Google indexa el español).
- Limpieza opcional de clases CSS sin uso: `.ticks` y `.pull`.

## Hecho

- Destino del formulario confirmado: Formspree notifica a `fabioaioficial@gmail.com`.
- Portafolio real: 16 reels de Instagram en 4 categorías (UGC con IA 5, Eventos y marcas 4, Producto e IA 2, Agencia 5), tarjetas compactas sin "Ver más".
- Producción: viñeta `proc.2c` (4K, iluminación profesional y asistente de cámara cuando se requiere); cierra el pendiente de requerimientos.
- `fabioai-landing.web.app` / `firebaseapp.com` redirigen a `fabionogales.com` (no se pueden eliminar y el sitio corre en Firebase: el proyecto se mantiene).
- Página de privacidad `privacidad.html` (ES/EN), enlazada en el footer y en el sitemap.
- Search Console: propiedad de dominio verificada y sitemap enviado como URL completa.
- Correo `contacto@fabionogales.com` recibiendo vía Cloudflare Email Routing.
- Sección de testimonios: decidido no incluirla hasta tener citas reales.
- Diseño de `fabioai-landing` publicado respetando su estructura con el contenido real.
- Carrusel de logos de 7 clientes (Bransign, Itacamba, Yango, Grazia, Kinia, Wallbit, Clarita) con la misma velocidad lenta del diseño.
- Cifras reales: 6 piezas por jornada de 5 h, 7–8 piezas con 6 h (creadores) y +30 % de rendimiento por video (ej. Bransign). La métrica de −30 % en costos se retiró (ya no hace falta su base de comparación).
- Proceso en 3 etapas (preproducción hasta 3 días, producción 1 día de 5–7 h, postproducción ≈ 2): estándar ≈ 6 días, más producciones sistematizadas y con IA en 3 días, con 2 rondas de revisión.
- Portada: reels enlazados a `instagram.com/reel/DctRV_Agm3n/`, nombre y rol bajo la foto, nota "+250 piezas…" y 3–6 días.
- "El problema": recuadro de propuesta de valor. Pilares condensados (título + una línea), pilar 02 reformulado ("IA y automatización para producir y escalar más rápido"; coherencia del mensaje de IA resuelta) y galería "Detrás de cámaras" preparada.
- Fotos reales de proceso (14 en `assets/img/process/`; originales en `assets/img/bts/`, sin publicar): collage en pilares, una foto por etapa (incluida postproducción) y tira continua.
- FAQ completas: inversión 20–500 USD por proyecto estratégico de marketing digital, white label, necesidades del cliente y rondas de revisión.
- Ayuda de CSS `.band--seam` y versionado de assets (hoy `?v=20261111b`).
- Calendario de `fabioaioficial@gmail.com`, formulario (Formspree), cambio ES/EN (español nativo en el HTML, inglés en `EN` de `main.js`), redes reales, imagen para compartir, `robots.txt` y `sitemap.xml`.
- Dominio `fabionogales.com` y `www` **activos** en Firebase Hosting (HTTPS; `www` y `http` redirigen). Los 3 registros DNS de Cloudflare están puestos y no deben borrarse (renovación del certificado).
- Botón de WhatsApp (+591 62165130) bajo el calendario, con mensaje prellenado por idioma; el botón del calendario cambia de idioma.
- SEO base en español: HTML nativo en español, título y descripción nuevos, `og:locale` es_LA + alternate en_US, `sitemap.xml` actualizado.
- Cifras simplificadas a una sola métrica (+30 %) y hero "Producción Audiovisual & Contenido con IA para Marcas".
- Ciudad del footer rellenada (Santa Cruz, Bolivia). Perfil de creadores ya incluido en "Para quién es este servicio". FAQ 2 coherente con las producciones con IA.
- `firebase.json` no publica `CLAUDE.md` ni `assets/img/Logo FabioAI/**`.
