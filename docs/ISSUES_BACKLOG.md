# Pendientes

Copia cada bloque como un issue en GitHub (plantilla en `.github/ISSUE_TEMPLATE/pendiente.md`) o dime y los creo con `gh` cuando lo tengas instalado.

## Para dejar el dominio funcionando

### 1. Crear 3 registros DNS en Cloudflare
`A @ → 199.36.158.100`, `TXT @ → hosting-site=fabioai-landing`, `CNAME www → fabioai-landing.web.app`, todos en **DNS only** (nube gris). Detalle en `docs/DEPLOY_FIREBASE.md`. Los dominios ya están creados en Firebase. `Labels: infra, P1`

### 2. Comprobar el destino del formulario
El formulario usa Formspree (`mqpklabq`). Confirmar en formspree.io que las notificaciones llegan a `fabioaioficial@gmail.com` y enviar una consulta de prueba desde el sitio publicado. `Labels: feature, P1`

## Contenido de plantilla (visible mientras no se rellene)

### 3. Piezas de portafolio
Solo la 1ª tarjeta es real (reel de Instagram). Quedan 5 tarjetas `[Client 02…06]`. Recomendado subir cada pieza a Vimeo o YouTube (no listado) y enlazarla. `Labels: contenido, media, P1`

### 4. Caso de estudio
La sección sigue como en el diseño, pero **sus cifras (5 días / 18 piezas / −40 %) son de ejemplo**: no publicarlas como reales. Rellenar con un caso real o activar el interruptor `hide-pending`. `Labels: contenido, P1`

### 5. Tres respuestas de FAQ
White label con agencias · Rondas de revisión incluidas · Qué necesito del cliente para arrancar. `Labels: contenido, P2`

### 6. Ciudad en el footer
Sigue con su chip "Pending" (`[City] · GMT-4`). `Labels: contenido, P2`

### 7. Testimonios
El diseño no incluye la sección (a propósito, hasta tener citas reales). `Labels: contenido, P3`

> Todo lo anterior se puede ocultar de una vez con `class="hide-pending"` en `<html>` (ver `docs/GUIA_EDICION.md`).

## Textos que redacté yo (confirmar)

- Frase destacada de "Sobre mí": *"No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien."*
- Bio en inglés: pasé tu texto original a primera persona para que suene igual que el español.
- Respuestas del FAQ sobre tiempos y sobre trabajo remoto/presencial, y el bloque "¿Cliente en otro país…?" del proceso: escritos a partir de lo que me contaste.
- Pregunta del FAQ "¿Trabajas en remoto o solo de forma presencial?": reemplaza la original, que tenía `[city]`.

## Mejoras opcionales

- Política de privacidad (el diseño tiene un enlace "Privacy" que apunta a `#`).
- Correo con dominio (`contacto@fabionogales.com`).
- Search Console + sitemap tras conectar el dominio.

## Hecho

- Diseño de `fabioai-landing` publicado respetando su estructura (mismas 14 secciones) con el contenido real.
- Carrusel de logos de 7 clientes (Bransign, Itacamba, Yango, Grazia, Kinia, Wallbit, Clarita) con la misma velocidad lenta del diseño.
- Calendario de `fabioaioficial@gmail.com`, formulario (Formspree), cambio ES/EN, redes reales, imagen para compartir (`og.jpg`), `robots.txt` y `sitemap.xml`.
- Dominios `fabionogales.com` y `www` creados en Firebase Hosting.
