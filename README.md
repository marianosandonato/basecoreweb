# Base Core Sales – Next.js

Migración de [basecoresales.com](https://basecoresales.com/) (WordPress + Elementor) a **Next.js 16 + Tailwind CSS**, lista para desplegar gratis en Vercel.

Todo el contenido es estático y vive en el código (`src/content/` y las páginas de `src/app/`). No hay base de datos.

## Cómo funciona esto: GitHub y Vercel

El sitio usa dos servicios, y cada uno cumple un rol distinto.

**GitHub — es donde vive el código.**
Funciona como un Google Drive del proyecto, pero pensado para programadores: guarda todos los
archivos y, además, el historial completo de cambios. Se puede ver quién cambió qué, cuándo, y
volver atrás si algo se rompe. El repositorio es
[github.com/marianosandonato/basecoreweb](https://github.com/marianosandonato/basecoreweb).
GitHub **no** publica el sitio: nadie que entre a basecoresales.com está viendo GitHub.

**Vercel — es donde vive el sitio publicado.**
Es el servidor que atiende a los visitantes. Vercel está conectado al repositorio de GitHub y
vigila los cambios: cada vez que se sube código a la rama `master`, Vercel lo compila solo y
publica la versión nueva en unos minutos. No hay que subir archivos a mano ni tocar un FTP.
El sitio en vivo es [basecoresales.com](https://basecoresales.com/).

El flujo completo, entonces, es:

```
editás el código  →  se sube a GitHub  →  Vercel lo detecta, compila y publica
   (tu máquina)         (el archivo)          (lo que ve el visitante)
```

Dos consecuencias prácticas de esto:

- **Para cambiar un texto o una imagen del sitio no se entra a Vercel**, se cambia el código y se
  sube a GitHub. Vercel se encarga del resto.
- **Las claves secretas no van en GitHub.** Cosas como la API key de Resend (el servicio de email
  del formulario) se cargan dentro del panel de Vercel, en *Settings → Environment Variables*.
  Eso mantiene el repositorio público sin credenciales adentro.

Si mandás cambios en una rama distinta de `master`, Vercel genera además una **preview**: una URL
temporal con esa versión, para revisarla antes de que llegue al sitio real.

Las instrucciones paso a paso de configuración están más abajo, en
[Deploy en Vercel](#deploy-en-vercel-plan-gratuito).

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción (lo mismo que ejecuta Vercel)
```

## Estructura

| Ruta | Contenido |
|---|---|
| `src/app/` | Páginas: `/`, `/preventa`, `/venta`, `/posventa`, `/marketing`, `/contacto` + `api/contact` |
| `src/content/` | Contenido tipado de las páginas de ciclo (textos, tarjetas, imágenes) |
| `src/components/` | Header, Footer, botón WhatsApp, formulario, tarjetas flip, etc. |
| `src/lib/site.ts` | Datos globales: teléfonos, email, redes, navegación |
| `public/images/` | Imágenes originales migradas desde WordPress |
| `documentation/` | Planes de trabajo: un documento por página, con todos los valores medidos sobre el original |

Para editar textos: buscar el texto en `src/content/*.ts` (páginas de servicios) o en `src/app/<página>/page.tsx`.

## Documentación

Antes de tocar el diseño de una página, leer su plan en **[`documentation/`](documentation/README.md)**.
Cada plan registra los valores medidos sobre el sitio original de WordPress (paddings,
tipografías, anchos, identificadores de Elementor) y las decisiones tomadas. La mayoría de
los números "raros" del CSS están explicados ahí.

## Formulario de contacto (Resend)

El formulario envía por email usando [Resend](https://resend.com) (plan gratuito: 100 emails/día).

1. Crear cuenta gratis en resend.com y generar una **API Key**.
2. (Recomendado) Verificar el dominio `basecoresales.com` en Resend → Domains, y usar
   `CONTACT_FROM_EMAIL=web@basecoresales.com` (o similar).
   Sin dominio verificado, `onboarding@resend.dev` solo entrega al email del dueño de la cuenta Resend.
3. Configurar las variables de entorno (ver `.env.example`).

Si `RESEND_API_KEY` no está configurada, el sitio funciona igual: el formulario muestra un aviso con enlaces de WhatsApp y email como alternativa.

## Deploy en Vercel (plan gratuito)

1. Subir esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importar el repositorio.
   Vercel detecta Next.js automáticamente; no hace falta configurar nada.
3. En **Settings → Environment Variables** agregar:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (ej. `info@basecoresales.com`)
   - `CONTACT_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` — **solo en Preview**, con la URL de Vercel. En producción
     no hace falta: por defecto usa `https://basecoresales.com`. Sin esto, los deploys
     de preview declaran como canónica la URL del WordPress viejo.
4. Deploy. Luego, en **Settings → Domains**, agregar `basecoresales.com` y apuntar el DNS
   del dominio a Vercel (A `76.76.21.21` o CNAME `cname.vercel-dns.com`, Vercel lo indica).

### Redirecciones incluidas (SEO)

Las URLs antiguas de WordPress redirigen de forma permanente:
`/inicio → /`, `/presales → /preventa`, `/sales → /venta`, `/support → /posventa`.
Además se generan `sitemap.xml` y `robots.txt` automáticamente.

## WhatsApp

El botón flotante abre `wa.me/5491155643798`. Para cambiar el número, editar `whatsappUrl` en `src/lib/site.ts`.
