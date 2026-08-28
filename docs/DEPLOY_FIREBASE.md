# Deploy a Firebase Hosting

`firebase.json` ya está configurado en la raíz del repo (`public: "."`, ignora `.git`, `.github`, `.claude`, `docs`, y los `.md`). No hace falta mover ni duplicar archivos: se publica el repo tal como está.

Los primeros tres pasos requieren tu navegador y tu cuenta de Google — no se pueden ejecutar desde una sesión no interactiva. Córrelos tú en una terminal (PowerShell o Git Bash) parada en la carpeta del proyecto.

## 1. Instalar Firebase CLI

```bash
npm install -g firebase-tools
```

Verifica que quedó instalado:

```bash
firebase --version
```

## 2. Iniciar sesión

```bash
firebase login
```

Abre el navegador, elige la cuenta de Google con la que quieres administrar el proyecto y autoriza. La sesión queda cacheada en tu equipo — no hay que repetir este paso salvo que cierres sesión o cambies de máquina.

## 3. Crear el proyecto "FabioAI Landing"

**Opción A — Firebase Console (recomendada, más simple):**
1. Ve a [console.firebase.google.com](https://console.firebase.google.com) → **Agregar proyecto**.
2. Nombre del proyecto: `FabioAI Landing`. Firebase genera un ID único (algo como `fabioai-landing` o `fabioai-landing-a1b2c`) — anótalo, lo necesitas en el paso 4.
3. Puedes desactivar Google Analytics si no lo vas a usar; no afecta Hosting.

**Opción B — desde la CLI:**
```bash
firebase projects:create --display-name "FabioAI Landing"
```
Te pedirá o generará un project ID único (debe ser global en todo Firebase, así que si `fabioai-landing` ya está tomado, te sugiere una variante).

## 4. Vincular el repo local al proyecto

Parado en la carpeta del proyecto (`F:\PROYECTOS\FabioAI\LANDING PAGE`):

```bash
firebase use --add
```

Selecciona el proyecto que acabas de crear y, cuando pregunte el alias, escribe `default`. Esto crea un `.firebaserc` local — súbelo a git, no tiene datos sensibles (solo el mapeo alias → project ID).

## 5. Deploy

```bash
firebase deploy --only hosting
```

Al terminar imprime la **Hosting URL** (algo como `https://fabioai-landing.web.app`). Esa es la URL pública — pégala en `README.md` en el campo "Sitio en vivo".

## Deploys siguientes

Cada vez que quieras publicar cambios, desde la raíz del proyecto:

```bash
firebase deploy --only hosting
```

No hace falta repetir login ni `use --add` — quedan guardados.

## Cuando compres el dominio

Firebase Hosting conecta dominios propios sin salir de su panel:

1. Firebase Console → tu proyecto → **Hosting** → **Add custom domain**.
2. Sigue las instrucciones para verificar propiedad y apuntar los registros DNS (Firebase te da los valores exactos según tu proveedor de dominio).
3. Descomenta y completa `canonical`, `og:url` y `twitter:url` en `index.html:16` con el dominio real.
4. Actualiza el `mailto:` del footer (`index.html`) si tu email pasa a usar ese dominio.

## Una vez que hayas hecho login una vez

Si ya corriste `firebase login` en este equipo, la sesión queda en tu perfil de usuario. A partir de ahí, pídeme directamente "haz el deploy" y puedo correr `firebase deploy --only hosting` yo mismo desde esta sesión sin volver a pedirte nada — el comando no necesita interacción si ya hay una sesión cacheada.
