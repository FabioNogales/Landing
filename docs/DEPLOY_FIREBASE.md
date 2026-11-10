# Deploy y dominio (Firebase Hosting)

- **Proyecto Firebase:** `fabioai-landing` ("FabioAI Landing") · **URL de Firebase:** https://fabioai-landing.web.app
- **Dominio propio:** `fabionogales.com` (+ `www.fabionogales.com`, que redirige al anterior) · **DNS en Cloudflare**
- `firebase.json` publica la raíz del repo (`public: "."`) e ignora `.git`, `.github`, `.claude`, `docs`, los `.md` y los originales de logos (`assets/img/logos/`).

## Publicar cambios

```powershell
firebase.cmd deploy --only hosting                    # PowerShell (Git Bash: firebase deploy --only hosting)
firebase.cmd hosting:channel:deploy vista-previa      # URL temporal (7 días) para revisar sin tocar el sitio en vivo
```
Requiere sesión iniciada (`firebase.cmd login`; si caduca, `firebase.cmd login --reauth`).

## Estado del dominio

**Activo.** `fabionogales.com` y `www.fabionogales.com` están conectados en Firebase Hosting (host, propiedad y certificado activos). `www` redirige al dominio sin `www` y `http` redirige a `https`.

**Registros en Cloudflare** (ya creados; **no los borres**: Firebase los necesita para renovar el certificado):

| Tipo | Nombre | Contenido | Proxy |
|---|---|---|---|
| `A` | `@` | `199.36.158.100` | **DNS only** (nube gris) |
| `TXT` | `@` | `hosting-site=fabioai-landing` | — |
| `CNAME` | `www` | `fabioai-landing.web.app` | **DNS only** (nube gris) |

> ⚠️ Las nubes deben seguir **grises (DNS only)**. Con el proxy de Cloudflare encendido (naranja) Firebase no puede renovar el certificado.
> Los valores salen del asistente de Firebase (API de dominios) y son exactos para este proyecto.

Estado en la consola: Firebase Console → Hosting → *Custom domains*.

Verificación rápida desde una terminal:
```powershell
Resolve-DnsName fabionogales.com -Type A         # debe devolver 199.36.158.100
Resolve-DnsName fabionogales.com -Type TXT       # debe incluir hosting-site=fabioai-landing
Resolve-DnsName www.fabionogales.com -Type CNAME # debe apuntar a fabioai-landing.web.app
```

## `fabioai-landing.web.app`

Decidido: el dominio por defecto de Firebase no se puede eliminar y el sitio corre sobre Firebase Hosting, así que el proyecto debe seguir existiendo. Un script en línea al inicio del `<head>` de `index.html` redirige `fabioai-landing.web.app` y `fabioai-landing.firebaseapp.com` a `https://fabionogales.com` (conserva ruta, query y hash).

## Search Console y correo

- **Search Console:** propiedad de dominio verificada. El sitemap es válido (responde 200 con `application/xml`); envíalo como URL completa `https://fabionogales.com/sitemap.xml`. Al principio puede decir "No se pudo obtener": es normal y se resuelve solo.
- **Correo:** `contacto@fabionogales.com` funciona con Cloudflare Email Routing y reenvía a `fabioaioficial@gmail.com`. Para responder desde esa dirección falta configurar en Gmail "Enviar como" con `smtp.gmail.com`, puerto 587 y una contraseña de aplicación (pendiente del dueño).
- Probar la vista previa al compartir el enlace (WhatsApp / LinkedIn / X): debe salir la tarjeta con tu foto y el titular.
