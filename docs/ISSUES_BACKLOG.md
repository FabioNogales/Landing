# Pendientes

Copia cada bloque como un issue en GitHub (plantilla en `.github/ISSUE_TEMPLATE/pendiente.md`) o dime y los creo con `gh` cuando lo tengas instalado.

## Antes de dar a conocer el dominio

### 1. Conectar `fabionogales.com`
Pasos en `docs/DEPLOY_FIREBASE.md` (Firebase Console + registros DNS en Cloudflare). `Labels: infra, P1`

### 2. Probar el formulario con un envío real
Formspree ya está conectado (`data-endpoint` en `index.html`). Falta enviar una consulta de prueba desde el sitio publicado y comprobar que llega al correo y al panel de Formspree. `Labels: feature, P1`

### 3. Confirmar textos que redacté yo
- Frase destacada de "Sobre mí": *"No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien."* (`ab.pull`)
- Bio en inglés (`ab.body`, en `index.html`): pasé tu texto original a primera persona para que suene igual que el español.
- Respuesta del FAQ sobre tiempos y sobre trabajo remoto/presencial: escritas a partir de lo que me contaste. `Labels: contenido, P1`

## Mejoran conversión

### 4. Tres respuestas de FAQ (ocultas hasta tenerlas)
White label con agencias · Rondas de revisión incluidas · Qué necesito del cliente para arrancar. Están comentadas al final de `#faq`. `Labels: contenido, P2`

### 5. Más piezas de portafolio
Hoy hay una (el reel de Instagram). Recomendado subir cada pieza a Vimeo o YouTube (no listado) y enlazarla; plantilla en la sección `#work`. `Labels: contenido, media, P2`

### 6. Caso de estudio y testimonios
El caso de estudio está oculto (comentado) y no hay sección de testimonios. Agregarlos cuando existan casos y citas reales. `Labels: contenido, P2`

### 7. Política de privacidad
Se quitó el enlace "Privacidad" del footer (apuntaba a `#`). Crear la página y volver a enlazarla. `Labels: legal, P2`

### 8. Optimizar imágenes
`assets/img/logos/itacamba.png` pesa 1.1 MB y `fabio.jpg` / `fabio-about.jpg` ~0.5 MB cada una. Comprimirlas (p. ej. tinypng.com o convertir a WebP) acelera la carga en celular. `Labels: performance, P2`

### 9. Correo con dominio (opcional)
Pasar de `fabioaioficial@gmail.com` a `contacto@fabionogales.com` (requiere servicio de correo + registros MX). `Labels: infra, P3`

## Hecho

- Rediseño publicado con el contenido real: cifra del hero, logos de clientes, tiempos de 5 días + bloque para clientes en otros países, bio, redes (Instagram, TikTok, LinkedIn, Facebook, X), reel de Instagram, precios del FAQ.
- Calendario de Google, Formspree, cambio ES/EN, imagen para compartir (`og.jpg`), `robots.txt` y `sitemap.xml`.
- Deploy en Firebase Hosting.
