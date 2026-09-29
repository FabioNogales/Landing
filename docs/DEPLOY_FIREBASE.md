# Deploy y dominio (Firebase Hosting)

- **Proyecto Firebase:** `fabioai-landing` ("FabioAI Landing") · **URL de Firebase:** https://fabioai-landing.web.app
- **Dominio propio:** `fabionogales.com` (DNS en **Cloudflare**)
- `firebase.json` publica la raíz del repo (`public: "."`) e ignora `.git`, `.github`, `.claude`, `docs` y los `.md`.

## Publicar cambios

```powershell
firebase.cmd deploy --only hosting        # PowerShell (en Git Bash: firebase deploy --only hosting)
firebase.cmd hosting:channel:deploy vista-previa   # URL temporal (7 días) para revisar sin tocar el sitio en vivo
```

Requiere sesión iniciada (`firebase.cmd login`, una vez; si caduca, `firebase.cmd login --reauth`).

## Conectar fabionogales.com (una sola vez)

El dominio ya usa los servidores de nombres de Cloudflare y su zona DNS está vacía, así que basta con agregar los registros que pide Firebase.

**1. En Firebase Console** → proyecto *FabioAI Landing* → **Hosting** → **Add custom domain** → escribe `fabionogales.com` → Continuar. Firebase te mostrará los registros exactos a crear (normalmente un `TXT` de verificación y uno o dos `A`). **Copia los valores tal como aparecen ahí**; los de abajo son solo orientativos.

**2. En Cloudflare** → `fabionogales.com` → **DNS** → **Records** → *Add record*, uno por cada fila que mostró Firebase:

| Tipo | Nombre | Contenido (ejemplo) | Proxy |
|---|---|---|---|
| TXT | `@` | `hosting-site=fabioai-landing` | — |
| A | `@` | `199.36.158.100` | **DNS only** (nube gris) |

> ⚠️ El proxy de Cloudflare (nube **naranja**) debe estar **apagado** en estos registros: con el proxy encendido Firebase no puede verificar el dominio ni emitir el certificado SSL.

**3. Volver a Firebase y pulsar *Verify***. El estado pasa de *Pending* a *Connected*; el certificado HTTPS se emite solo (de minutos a unas horas; como máximo ~24 h).

**4. Versión `www` (recomendado):** en Firebase agrega también `www.fabionogales.com` y elige **Redirect** hacia `fabionogales.com`. Crea en Cloudflare el registro que te indique (DNS only). Así `www` y sin `www` terminan en la misma dirección.

**5. Comprobar:** abre https://fabionogales.com y https://www.fabionogales.com (debe redirigir). El sitio ya trae `canonical`, `og:url`, `og:image`, `robots.txt` y `sitemap.xml` apuntando a `fabionogales.com`.

## Después de conectar el dominio

- Probar la vista previa al compartir el enlace (WhatsApp / LinkedIn / X): debe salir la tarjeta con tu foto y el titular.
- Dar de alta el sitio en **Google Search Console** (propiedad de dominio, verificación por DNS en Cloudflare) y enviar `https://fabionogales.com/sitemap.xml`.
- Opcional: correo con el dominio (`contacto@fabionogales.com`) requiere un servicio de correo aparte (Google Workspace, Zoho…) y registros MX en Cloudflare.
