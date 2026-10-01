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

## Pendiente de decidir: `fabioai-landing.web.app`

La URL `fabioai-landing.web.app` sigue activa. Opciones (a la espera de tu decisión): añadir otro sitio de Hosting en el mismo proyecto para reutilizarlo con otros proyectos, redirigir `web.app` al dominio, o mover la landing a otro host.

## Con el dominio ya conectado

- Probar la vista previa al compartir el enlace (WhatsApp / LinkedIn / X): debe salir la tarjeta con tu foto y el titular.
- Dar de alta el sitio en **Google Search Console** (propiedad de dominio, verificación por DNS en Cloudflare) y enviar `https://fabionogales.com/sitemap.xml`.
- Opcional: correo con el dominio (`contacto@fabionogales.com`) requiere un servicio de correo aparte (Google Workspace, Zoho…) y registros MX en Cloudflare.
