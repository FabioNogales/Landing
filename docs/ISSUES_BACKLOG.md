# Pendientes

Copia cada bloque como un issue en GitHub (plantilla en `.github/ISSUE_TEMPLATE/pendiente.md`) o dime y los creo con `gh` cuando lo tengas instalado.

## Para dejar el dominio funcionando

### 1. Crear 3 registros DNS en Cloudflare
`A @ → 199.36.158.100`, `TXT @ → hosting-site=fabioai-landing`, `CNAME www → fabioai-landing.web.app`, todos en **DNS only** (nube gris). Detalle en `docs/DEPLOY_FIREBASE.md`. Los dominios ya están creados en Firebase. `Labels: infra, P1`

### 2. Comprobar el destino del formulario
El formulario usa Formspree (`mqpklabq`). Confirmar en formspree.io que las notificaciones llegan a `fabioaioficial@gmail.com` y enviar una consulta de prueba desde el sitio publicado. `Labels: feature, P1`

## Por confirmar (datos que me diste con reservas)

### 3. Requerimientos de la etapa de producción
Publiqué "cámara 4K; los requerimientos se confirman contigo antes del rodaje" y "asistencia de cámara e iluminación según la magnitud del evento". Si ya tienes definido el equipo (cámara, iluminación, asistente), conviene concretarlo. `Labels: contenido, P2`

### 4. Base de comparación del −30 % en costos
La etiqueta dice "menos costo, gracias a contenido adaptado a las tendencias de conversión y retención". Falta decir **frente a qué** (¿una producción tradicional?, ¿tu tarifa anterior?). `Labels: contenido, P2`

### 5. Coherencia del mensaje sobre la IA
El pilar 02 ("IA y automatización aplicadas al proceso, no al resultado"), su frase destacada y el FAQ sobre IA dicen que la IA vive en el proceso. Pero en las **producciones con IA** los avatares y las tomas B-roll son contenido generado. Ya aclaré el FAQ; falta decidir cómo redactar el titular del pilar para que sea cierto en ambos casos. `Labels: contenido, P2`

### 6. Creadores e influencers
Las cifras ya mencionan "creadores e influencers", pero "Con quién trabajo mejor" solo habla de agencias, marcas y startups. ¿Agregamos un cuarto perfil? `Labels: contenido, P3`

## Contenido de plantilla (visible mientras no se rellene)

### 7. Trabajo seleccionado
Solo la 1ª tarjeta es real (reel de Instagram). Quedan 5 tarjetas `[Client 02…06]`; tú elegirás qué piezas van. Recomendado subirlas a Vimeo o YouTube (no listado) y enlazarlas. `Labels: contenido, media, P1`

### 8. Caso de estudio
Plantilla de un cliente, ya **sin cifras de ejemplo**. Rellenar con un caso real o activar el interruptor `hide-pending`. `Labels: contenido, P2`

### 9. Dos respuestas de FAQ
White label con agencias · Qué necesito del cliente para arrancar. (Las rondas de revisión ya están: 2 por proyecto y pieza.) `Labels: contenido, P2`

### 10. Ciudad en el footer
Sigue con su chip "Pending" (`[City] · GMT-4`). `Labels: contenido, P2`

### 11. Testimonios
El diseño no incluye la sección (a propósito, hasta tener citas reales). `Labels: contenido, P3`

> Todo lo pendiente se puede ocultar de una vez con `class="hide-pending"` en `<html>` (ver `docs/GUIA_EDICION.md`).

## Textos que redacté yo (confirmar)

- Frase destacada de "Sobre mí": *"No elijo entre dirección de cámara y velocidad de IA — hago las dos cosas bien."*
- Bio en inglés: pasé tu texto original a primera persona para que suene igual que el español.
- Preproducción: "hasta 3 días según revisiones" (tú dijiste "3 días según revisiones"; "hasta" concilia el rango total de 5 a 7 días).
- Producciones con IA: "se trabaja a distancia, también para clientes en otros países" une lo que me contaste en dos mensajes.
- Pregunta del FAQ "¿Trabajas en remoto o solo de forma presencial?": reemplaza la original, que tenía `[city]`.

## Mejoras opcionales

- Política de privacidad (el diseño tiene un enlace "Privacy" que apunta a `#`).
- Correo con dominio (`contacto@fabionogales.com`).
- Search Console + sitemap tras conectar el dominio.

## Hecho

- Diseño de `fabioai-landing` publicado respetando su estructura con el contenido real.
- Carrusel de logos de 7 clientes (Bransign, Itacamba, Yango, Grazia, Kinia, Wallbit, Clarita) con la misma velocidad lenta del diseño.
- Cifras reales: 6–7 videos verticales por jornada de 5 h (marcas), 7–8 piezas de storytelling y UGC con 6 h (creadores), −30 % en costos, 5 a 7 días (estándar) y 3 a 4 días (IA).
- Proceso reorganizado en 3 etapas (preproducción, producción, postproducción) + producciones con IA, con 2 rondas de revisión incluidas.
- Calendario de `fabioaioficial@gmail.com`, formulario (Formspree), cambio ES/EN, redes reales, imagen para compartir, `robots.txt` y `sitemap.xml`.
- Dominios `fabionogales.com` y `www` creados en Firebase Hosting.
