> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8
> - Última sincronización: 2026-09-25
> - Nota 25/9: 1.37 cerrada del todo — reapertura del 24/9 (cartel falso por el temporizador de Turnstile.tsx), fix efc5266 y regla de rate limiting en Cloudflare, con su verificación en producción.
> - Nota: nota agregada a 3.10 — el título del hero de /ebook se sacó el 24/9 (tarea 1.7 de Mejora Estética Web, commit f9e94d3) por repetir el H1; el H1 con la keyword no cambió.

---

Historial Técnico SEO

basecoresales.com · registro histórico

# Historial Técnico SEO

Detalle completo de cada tarea del [Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT) ya resuelta — texto exacto, commits, hallazgos y el razonamiento detrás de cada decisión. Este documento no se usa para saber "qué falta": para eso está el Plan de SEO, que solo detalla las tareas activas. Acá vive el registro permanente de todo lo que ya se hizo, para que nada se pierda al sacarlo del tablero activo.

← [Volver al Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT)

[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)
[Fase 8 · Base Core en buscadores](#fase8)
[Cronología completa](#cronologia)

Fase 1

## Cimientos técnicos (on-page)

Que Google pueda rastrear, entender e indexar cada página correctamente. Cerrada del todo — 1.14 (Core Web Vitals) fue la última en confirmarse, el 11/9.

1.1 — Title tag por página

Hecho · resincronizado 5/9 (ver 1.21)

Reescritos el 18/8 usando el mapa de palabras clave de la Fase 3.1 — antes eran genéricos ("Preventa", "Venta"), sin validar contra ninguna búsqueda real. Patrón **"Palabra clave – Base Core Sales"** (Home es la excepción técnica: al compartir segmento con el layout raíz, Next.js no le aplica ese sufijo automático, así que va escrito a mano). **Resincronizado el 5/9 vía auditoría 5.4** — Venta, Contacto y Tecnología quedaron actualizados con el texto real de producción (ver 1.21 para el detalle de cada cambio y su commit).

Texto exacto en producción (verificado 5/9)

```
Home:       Consultoría Comercial para Pymes – Base Core Sales
Preventa:   Prospección de Clientes B2B – Base Core Sales
Venta:      Gestión Comercial para Pymes – Base Core Sales
Posventa:   Fidelización y Retención de Clientes – Base Core Sales
Marketing:  Marketing Digital para Pymes – Base Core Sales
Contacto:   Diagnóstico Gratuito – Base Core Sales
Tecnología: CRM e IA para Empresas – Base Core Sales
E-Book:     Proceso de Ventas desde Cero – Base Core Sales
```

**Para qué sirve:** es el texto azul y clickeable que aparece en los resultados de Google. Es la señal más fuerte de "de qué trata esta página" para el buscador, y lo primero que decide si alguien hace clic.

1.2 — Meta description por página

Hecho · resincronizado 5/9 (ver 1.21)

**Resincronizado el 5/9 vía auditoría 5.4:** Preventa, Venta, Posventa, Marketing y Contacto tenían texto viejo en este documento — cada uno se había actualizado en producción en distintos commits (30/8 y 19/8) sin que esta sección se tocara. Se suma también Tecnología, que nunca había entrado a esta tabla. Detalle de cada caso, con commit exacto, en 1.21.

Texto exacto en producción (verificado 5/9)

```
Home:       Consultoría comercial para pymes en España y Latinoamérica:
            procesos como servicio para preventa, venta, posventa y
            marketing. Creamos bases productivas.

Preventa:   Prospección y ventas B2B: armado de base de datos,
            calificación de leads y detección de oportunidades
            comerciales para conseguir más reuniones.

Venta:      Gestión comercial para pymes: modelo comercial, procesos
            de ventas, pipeline y funnel, KPIs comerciales, forecast
            e implementación de CRM.

Posventa:   Fidelización de clientes y customer success: reducción
            de churn, cross selling y up selling, desarrollo de
            cuentas y segmentación de cartera.

Marketing:  Agencia de marketing digital para pymes: estrategia de
            marca, SEO, redes sociales, pauta publicitaria, diseño
            gráfico y sitios web.

Contacto:   Solicita un diagnóstico gratuito: dejanos tus datos y te
            proponemos un plan de ruta para mejorar tus procesos y
            metodologías.

Tecnología: CRM e IA para empresas: implementación de agentes de IA,
            automatización de procesos, consultoría CRM y software
            de gestión para tu equipo comercial.

E-Book:     Descarga gratis nuestro e-book: cómo armar un proceso de
            ventas desde cero y la importancia de un buen ciclo de
            preventa para atraer nuevos clientes.
```

**Para qué sirve:** es el texto gris debajo del título en Google. No suma directamente al posicionamiento, pero convence a la persona de hacer clic — funciona como el "copy publicitario" del resultado de búsqueda.

1.3 — Canonical + hreflang ES/EN

Hecho · x-default agregado (28/8)

Cada página declara su URL canónica y su versión en el otro idioma, evitando contenido duplicado entre `basecoresales.com/venta` y `basecoresales.com/en/sales`. El 28/8 se encontró que solo el home declaraba `x-default` (la versión de respaldo cuando el idioma del visitante no coincide con ninguna alternativa) — las otras 14 páginas no lo tenían. Agregado en las 16.

Ejemplo real (página Venta, actualizado)

```
alternates: {
  canonical: "/venta",
  languages: { es: "/venta", en: "/en/sales", "x-default": "/venta" },
}
```

**Para qué sirve:** le dice a Google "esta es la versión oficial de esta URL" y "esta misma página existe en otro idioma acá" — evita que compita contra sí misma en los resultados. El `x-default` cubre al visitante que llega en un tercer idioma sin versión propia.

1.4 — Sitemap.xml dinámico

Hecho

Generado automáticamente en `src/app/sitemap.ts`, incluye las 8 páginas en español y sus 8 pares en inglés (16 en total), con prioridad 1.0 para el home y 0.8 para el resto. Cada entrada incluye su propio `hreflang` recíproco y también `x-default` (ver 1.3).

**Para qué sirve:** es el "índice" que le entregás a Google para que sepa qué páginas existen y las rastree, en lugar de depender de que las descubra solo siguiendo enlaces.

1.5 — Robots.txt

Hecho · bloqueo de Cloudflare encontrado y corregido (28/8)

El código del sitio (`src/app/robots.ts`) siempre estuvo bien. El problema apareció en el robots.txt *en vivo*: Cloudflare le agregaba por su cuenta un bloque completo bloqueando a `Google-Extended`, `GPTBot`, `ClaudeBot`, `Amazonbot` y otros — justo cuando la página de Marketing promete "ser citado por Google y por IA". Causa: dos configuraciones separadas y superpuestas en Cloudflare (Security → AI Crawl Control): el toggle "Block Crawler" por bot, y por separado el toggle "Managed robots.txt" — apagar solo uno de los dos no alcanza.

Texto exacto (generado en /robots.txt, ya corregido)

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.basecoresales.com/sitemap.xml
```

**Para qué sirve:** confirma a los buscadores (y a los bots de IA) que pueden rastrear todo el sitio salvo las rutas internas de API, y les señala dónde está el sitemap.

1.6 — Un solo H1 por página, con jerarquía H2/H3

Hecho · resincronizado 5/9 (ver 1.21)

Cada página tiene exactamente un H1, y las secciones internas usan H2/H3 de forma consistente. El texto del H1 de Preventa/Venta/Posventa/Marketing se reescribió el 18/8 para incorporar la palabra clave validada, manteniendo el estilo de pregunta ("¿Buscas...?") ya existente en la marca. **Resincronizado el 5/9:** Venta y Contacto cambiaron en producción el 30/8 y 19/8 respectivamente sin que este documento se actualizara; se sumó Tecnología, que nunca había entrado a esta tabla.

H1 en producción (ES, verificado 5/9)

```
Preventa:   ¿Buscas prospectar y captar clientes B2B?
Venta:      ¿Buscas mejorar tu gestión comercial?
Posventa:   ¿Buscas fidelizar y retener a tus clientes?
Marketing:  ¿Buscas potenciar tu marketing digital?
Contacto:   Diagnóstico Gratuito
Tecnología: ¿Buscas implementar IA y CRM en tu empresa?
Home:       Consultoría Comercial y Marketing (sin cambios — hero con
            salto de línea fijo por diseño, ya alineado al keyword
            principal, tocarlo arriesgaba romper el layout a pixel)
```

De paso se encontró que la sección de "Etapas" de Venta ya tenía un H3 propio por subtema (Pipeline & Funnel, KPI's, Forecast, Implementación CRM...) casi calcado a las palabras clave secundarias — no hizo falta tocarla.

**Para qué sirve:** el H1 es la señal más clara del tema principal de la página.

1.7 — Imágenes optimizadas

Hecho · afinado a fondo (29/8)

Uso de `next/image`: conversión automática a WebP, carga diferida y tamaños responsivos. El 29/8 se investigó por qué el LCP en mobile llegaba a 8.6s: los dos logos del header también tenían `priority`, compitiendo con la foto del hero. Se les sacó la prioridad. Se probó AVIF adicional a WebP y se revirtió (en Vercel, generar un AVIF nuevo tarda ~1.7s contra ~0.37s de WebP). Se agregó `sizes` a dos imágenes que no lo tenían y se convirtieron a WebP 4 imágenes de "Metodología" que usaban CSS.

**Para qué sirve:** imágenes livianas = página rápida = mejor ranking. Resultado final: ver 1.14 en el Plan de SEO.

1.8 — Texto alternativo (alt) en imágenes

Hecho · revisado, todo correcto

Revisadas una por una las 5 imágenes con `alt=""`: las 5 son fondos puramente decorativos detrás de un H1/H3 real — el alt vacío es lo correcto según las pautas de accesibilidad. Las tarjetas flip (Pipeline & Funnel, Forecast, etc.) son `background-image` en CSS, no `<img>`, así que no aplican alt.

**Para qué sirve:** el alt describe la imagen a buscadores y lectores de pantalla; posiciona en Google Imágenes.

1.9 — Open Graph (vista previa en redes sociales)

Hecho

Cada página de servicio usa su propia foto de hero como imagen OG (reutilizando assets existentes) — Preventa, Venta, Posventa y Marketing dejaron de compartir la imagen genérica del home. El E-Book usa la tapa real. Home y Contacto mantienen la imagen de marca general.

**Para qué sirve:** es lo que se ve al compartir el link en WhatsApp, LinkedIn o Instagram.

1.10 — Twitter Card

Hecho

Agregado globalmente en `src/app/layout.tsx` (ahora factorizado en `src/lib/metadata.ts`, ver 1.18), reutilizando título/descripción/imagen de marca que ya usa Open Graph.

**Para qué sirve:** controla cómo se ve el link al compartirlo en X/Twitter.

1.11 — Datos estructurados (JSON-LD)

Hecho · en 3 capas

El `ProfessionalService` de sitio entero, más dos capas: `Service` en cada una de las 5 páginas de servicio y `BreadcrumbList` en toda página con miga de pan visible. Validado con el checker de Google en PageSpeed.

Las 3 capas activas

```
1. ProfessionalService (src/lib/metadata.ts, sitio entero)
   name, url, logo, description, email, sameAs (LinkedIn/IG/Facebook)

2. Service (ServiceJsonLd.tsx, 5 páginas x ES/EN)
   name + description de esa página puntual, provider -> ProfessionalService

3. BreadcrumbList (Breadcrumb.tsx, 14 páginas internas)
   Home -> página actual, con sus URLs absolutas
```

**Para qué sirve:** habilita resultados enriquecidos y refuerza señales de negocio real.

1.12 — Verificación en Google Search Console

Hecho · propiedad vieja borrada (29/8)

Propiedad de Dominio (cubre www, sin www, http y https en una sola vista), verificada vía TXT en Cloudflare. Se borró la propiedad vieja de "Prefijo de URL" — nunca vio tráfico real por su alcance limitado.

**Para qué sirve:** panel oficial para ver qué páginas están indexadas y qué términos traen visitas.

1.13 — Bug encontrado: dominio canónico contradecía el redirect real

Hecho (corregido)

9 páginas marcadas "Página con redirección" en Search Console. Causa: el hosting redirige `basecoresales.com` (sin www) → `www.basecoresales.com`, pero el sitio declaraba el dominio sin www como canonical.

Cambio aplicado en src/lib/site.ts

```
- url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://basecoresales.com",
+ url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.basecoresales.com",
```

**Para qué sirve:** alinea lo declarado a Google con lo que el servidor sirve sin redirect.

1.14 — Core Web Vitals / Rendimiento (PageSpeed Insights)

Hecho · confirmado 11/9

Regresión detectada 4/9 (Mobile Performance 95→57-60, LCP a 10-13s). Recuperación en 16 commits repartidos en 3 días, cada uno medido con PSI real antes de sumar el siguiente. Detalle completo consolidado acá el 21/9 desde el artifact `Performance Web`, que quedó sin contenido propio y se archivó del todo.

Progresión medida con PSI real

```
Mobile Performance:  57-60 (4/9) → 84 → 88 → 81-88 (asentado) → 88 confirmado (11/9)
LCP mobile:          10-13s → 4.1s → 3.6s → 3.5s (11/9)
TBT mobile:                                       40ms (11/9, el mejor de toda la serie)
Desktop Performance: 93-98, estable en toda la serie
```

Cronología punto a punto (Mobile Performance, PSI real salvo donde se indica)

```
29/8            95  (línea de base, antes de la regresión)
4/9             58  (regresión detectada, 95→58)
5/9 tarde       84  (post: Turnstile diferido + sizes de logos + preload:false + imagen Tecnología a next/image)
5/9 tarde       88  (misma tanda, corrida siguiente)
5/9 noche       69  (post: deviceSizes cap + INP a GA4 + PageHero) — arranca la investigación de 3 días
5/9 noche       65
5/9 noche       69
6/9 tarde       83  (post: primer intento de GTM con requestIdleCallback — mejor LCP de la serie, TBT se dispara)
6/9 tarde       64
6/9 tarde       68
6/9 noche       84  (post: fix de GTM v2, espera de 2s antes del idle callback — TBT confirmado ok)
6/9 noche       71
6/9 noche       83
6/9 noche       84  (post: 8 imágenes de fondo restantes a next/image — sin regresión)
11/9            88  (PSI real independiente, confirma inlineCss sin regresión — cierre de la tarea)
```

**Fixes principales:** Turnstile diferido a `IntersectionObserver` (mayor impacto individual, TBT 1.9s→70ms), `sizes` corregido en logos/imágenes (carrusel de clientes 28.6KB→5.7KB por logo mobile; imagen "Proceso como servicio" de Home no contaba el padding real de la sección), `preload:false` en fuentes `sora`/`reey` no críticas, migración de 9 imágenes de fondo CSS a `next/image` (Tecnología primero, después 8 más: Footer, BaseHubTeaser, ServiceCyclePage x2, ContactSection x3, FlipBox x2 — todas capadas al mismo `sizes` de 1200px), INP instrumentado a GA4 (`useReportWebVitals` nativo de Next 16, +3KB gzip), Google Tag Manager sacado del critical path (2 iteraciones — la primera mejoró LCP pero rompió TBT por competir con el prefetch de `<Link>`, que también usa `requestIdleCallback` sin timeout; la segunda esperó 2s fijos antes del idle callback, TBT 1268ms→633ms bajo contención), `experimental.inlineCss` para eliminar el request bloqueante del CSS global, bundle-split de `blogSlugPairs` (sacó ~80KB del chunk de `LanguageSwitcher`, que importaba el cuerpo completo de los posts solo para resolver el slug ES/EN), y lazy-load de `LanguageBanner`/`EbookForm` con `next/dynamic`.

**De paso, un bug de indexación relacionado:** Google Search Console marcó "Redirect error" en `/sales/` y `/presales/` (mail del 7/9) por una cadena de 3 redirects (Cloudflare apex→www + el redirect automático de barra final de Next + el redirect del slug legacy) — un salto más que el resto del sitio. Resuelto el 11/9 moviendo el manejo de la barra final a `src/proxy.ts` con `skipTrailingSlashRedirect`, colapsando la cadena a los mismos 2 saltos del resto de las páginas. De paso, casi se pisa la lógica de redirect de idioma que ya vivía en ese mismo archivo — detectado a tiempo con `git status` antes de escribir.

**Investigado y descartado en el camino** (con su propia prueba, no una suposición): el componente `WebVitals` como causa de varianza (A/B 5 vs. 5 corridas: 87.6 vs 84.8, dentro del ruido); la región de Vercel (nunca fue Sydney, era el POP de caché de `x-vercel-id`, la región real es `iad1`); el caching de Cloudflare (`cf-cache-status: DYNAMIC` es default esperado, no config rota); una supuesta regresión de código (bisect real con 3 builds en `git worktree` aislados: +1.3% de peso, dentro del ruido — la varianza del propio sandbox compartido, 35-87 puntos en 5 corridas del mismo build, resultó mayor que cualquier diferencia real entre versiones); Lighthouse CLI de este sandbox como fuente de medición (10-50× más ruido que señal real, PSI real siempre gana); y el bug de encuadre de `object-cover` sospechado en `ServiceCyclePage.tsx` (verificado con capturas a 1280-1920px en /preventa, /venta, /posventa: sin problema, esa foto tenía margen de sobra).

**JS sin usar del bundle propio (28KB) — medido con la herramienta real (12/9), no a ojo.** Corrido `npx next experimental-analyze` (Next.js Bundle Analyzer nativo sobre Turbopack, disponible desde 16.1) sobre el build de producción. Route Home: 392KB comprimido, 242 módulos client — 293KB (75%) es framework de Next.js/React, no recortable sin sacar el framework. El código propio (`src/`) pesa apenas 51KB, mayormente `icons.tsx` y `globals.css` inlineado (ya explicado por `inlineCss`). Ningún módulo de terceros pesado escondido en `Header`/`Footer`/`WhatsAppButton`/`AppShell`. Cerrado sin acción — nada seguro para recortar.

**Recruiting (Home + `/marketing`): decisión final, se queda en CSS `background-image`.** PR #32 (12/9) probó migrar a `next/image` y resolvió dos de las tres objeciones sobre un preview real — el recorte que preocupaba no era visible para Mariano, y la pérdida de nitidez se corrigió ajustando `sizes`/`quality` — pero el bloqueante real no tiene arreglo limpio: el fondo usa `background-attachment: fixed` para el efecto de scroll parallax en desktop, una propiedad exclusiva de CSS `background-image` sin equivalente nativo en `next/image`. Replicarlo a mano por scroll vía JS sería el mismo tipo de hack frágil que ya causó el incidente de GTM, para una imagen que ni siquiera es el LCP de la página. PR cerrado sin mergear — decisión a propósito, no un pendiente.

**Para qué sirve:** Core Web Vitals es señal directa de ranking de Google, y la primera impresión real de cualquier visitante.

1.15 — Accesibilidad: contraste de color (WCAG AA)

Hecho · Accessibility 100/100

PageSpeed señaló que el gris secundario (`#7A838B`) y el azul principal (`#0787D9`) no cumplían el contraste mínimo — valores exactos del diseño original en WordPress. Se oscurecieron lo justo para pasar el mínimo sin cambiar el aspecto general. Efecto secundario: el mismo azul usado como texto (nav activo, selector de idioma sobre navy) necesitaba ser más claro, no más oscuro — se sumó un tercer color solo para ese caso.

Cambios de color (src/app/globals.css)

```
--color-body:          #7A838B -> #686F76  (texto secundario, fondo blanco)
--color-primary:       #0787D9 -> #056CB0  (fondo de botones, texto blanco)
--color-primary-dark:  #056CB0 -> #04568D  (hover de botones)
--color-accent-light:  nuevo, #4FA8E0      (nav activo / selector de idioma sobre navy)
```

**Para qué sirve:** gente real con baja visión o en pantallas con sol; también señal de calidad de página.

1.16 — Texto de enlaces genérico + bug de link roto en EN

Hecho · SEO 100/100

Dos botones "MÁS INFORMACIÓN" no descriptivos → "AGENCIA DE MARKETING" e "IMPLEMENTACIONES TECNOLÓGICAS". De paso apareció un bug real: el botón "LEARN MORE" de la home en inglés apuntaba a `/marketing` en vez de `/en/marketing`.

**Para qué sirve:** texto de enlace descriptivo ayuda a Google y a lectores de pantalla; el link roto era una fuga de visitantes en inglés.

**Hallazgos del 3/9 (1.17–1.20):** salen de la primera auditoría SEO completa corrida por `web-lead` + `seo-marketing` (Test 2 del Plan de Agentes) — no de un chequeo manual.

1.17 — H1 de Home rompe el texto plano

Resuelto 4/9

El texto visible era correcto, pero `<br />` pegado a la palabra siguiente daba `textContent` "Consultoría Comercialy Marketing" / "MarketingConsulting" en EN. Se agregó el espacio real después del `<br />` en ambos idiomas — el salto visual no cambió, solo el texto plano subyacente. Verificado con Playwright.

**Para qué sirve:** el H1 más visible del sitio, en los dos idiomas.

1.18 — `<html lang="es">` incorrecto en todo `/en/*`

Resuelto 5/9

`src/app/layout.tsx` fijaba `lang="es"` de forma estática; en `/en`, un client component corregía el atributo recién en un `useEffect`. Falla WCAG 3.1.1 en las 16 rutas `/en/*` reales (no 8, alcance corregido el 5/9 — incluye `/en/blog` y `/en/basehub`).

**Resuelto:** `/en` era un layout anidado, no un route group, y nunca pudo declarar `<html>`. Se separaron dos root layouts hermanos — `src/app/(es)/layout.tsx` (`lang="es"`) y `src/app/(en)/en/layout.tsx` (`lang="en"`) — sin duplicar Header/Footer/GA4/JSON-LD/WhatsApp/LanguageBanner/WebVitals (factorizados en `src/components/AppShell.tsx`) ni fuentes/metadata (`src/lib/fonts.ts`, `src/lib/metadata.ts`). `SyncHtmlLang.tsx` se eliminó. Las 16 páginas siguen 100% prerenderizadas, cero cambios de URL/copy/metadata. Verificado con `curl` contra `next start`.

**Trade-off validado con Playwright:** cruzar de una ruta ES a una EN ahora recarga la página completa en vez de transición cliente — comportamiento documentado de Next.js con root layouts distintos, no un bug. Sin flash visible, sin contenido cortado, en desktop y mobile.

**Hallazgo colateral, no introducido por este cambio:** cuando `notFound()` se lanza dentro de un slug dinámico fuera de `generateStaticParams` (ej. `/blog/no-existe`), Next.js 16.2.10 renderiza `<html id="__next_error__">` sin `lang` — confirmado que ya existía idéntico antes de la reestructuración. Ítem futuro, no bloqueante.

**Para qué sirve:** el atributo `lang` coincide con el idioma real desde que el servidor responde, no solo después de hidratar.

1.19 — Formularios sin `<label>`, solo `placeholder`

Resuelto 4/9

Contacto y E-Book etiquetaban 11 campos solo con `placeholder` — patrón de fallo WCAG 3.3.2. Se agregó un `<label> sr-only` por campo, mismo criterio que ya usaba el select de "Servicio". Verificado con Playwright: los 11 campos exponen nombre accesible vía `el.labels[0]`.

**Para qué sirve:** problema de accesibilidad y CRO a la vez.

1.20 — Housekeeping técnico menor

Hecho · 3/3 resueltos 5/9

Tres hallazgos de bajo impacto: (1) `sitemap.ts` ya no pone `lastModified: new Date()` en cada request — cada URL tiene una fecha real fija; (2) `/blog`/`/en/blog` y `/tecnologia`/`/en/tecnologia` ya tienen imagen OG propia, reusando assets existentes; (3) el redirect de doble salto en `http://basecoresales.com` (sin www) se cerró — diagnosticado por `performance` (Cloudflare resolvía http→https y recién Vercel hacía apex→www) y corregido con una Redirect Rule en Cloudflare (`Hostname equals basecoresales.com` → `301` a `concat("https://www.basecoresales.com", http.request.uri.path)`). Verificado con `curl -IL`: un solo salto.

**Para qué sirve:** higiene técnica de bajo esfuerzo.

1.21 — Documento desincronizado del código real

Hecho · resincronizado 5/9, vía auditoría 5.4

Auditado el 4/9 (Test 5) y cerrado del todo el 5/9 con una pasada completa de las 8 páginas vía la auditoría 5.4. Total: **6 casos confirmados**, ya corregidos en 1.1/1.2/1.6.

**4/9** — Venta (title "Proceso de Ventas para Pymes" → real "Gestión Comercial para Pymes" desde el 30/8) y Contacto (title/H1 "Diagnóstico Comercial Gratuito" → real "Diagnóstico Gratuito" desde el 19/8, el caso más viejo). Tecnología nunca se había agregado a la tabla de 1.1.

**5/9, pasada completa** — 3 casos nuevos en meta description: Preventa (commit `2fa5c5c` del 30/8, "ventas B2B"), Posventa (mismo commit, "customer success"), Marketing (commit `c5133b4` del 19/8, se sacó la mención a Not-a-Numb3r).

**Para qué sirve:** confirma que ninguno de los 6 casos era un bug real del sitio — todos eran el plan sin actualizar después de un cambio ya implementado.

1.22 — Bug de `<br/>` en tarjeta de cliente (W Profesional)

Resuelto 5/9, vía auditoría 5.4

Misma familia que 1.17/7.9: en `ClientCard.tsx`, la tarjeta de "W Profesional Hair Therapy" (único cliente con `nameSecondLine`) renderizaba `textContent` "W ProfesionalHair Therapy" sin espacio. Resuelto con el mismo fix. La auditoría revisó el resto del árbol: `PageHero.tsx` ya resuelto de origen; `FlipCardGrid.tsx` tiene la misma vulnerabilidad latente pero no se dispara hoy (riesgo a futuro, sin acción). También se arreglaron 2 casos menores (`<br/>` pegado a punto y seguido) en Home y `ContactSection.tsx`, de menor severidad pero igual de aplicable.

**Para qué sirve:** el nombre accesible/textContent no debe concatenar palabras.

1.23 — JS legacy: polyfills de Next (25KB reportados por PSI)

Hecho · confirmado falso positivo, cerrado sin acción (12/9)

La auditoría de PageSpeed marcaba "JavaScript legacy" por un chunk de polyfills de ~25KB. Investigado a fondo contra la doc oficial de Next 16 (`node_modules/next/dist/docs/03-architecture/supported-browsers.md`): "Next.js will only load these polyfills for browsers that require them. The majority of the web traffic globally will not download these polyfills."

**Confirmado en el build real:** `build-manifest.json` declara ese chunk (`polyfillFiles`) con el atributo `nomodule` — cualquier navegador moderno (Chrome/Firefox/Safari/Edge de los últimos años) directamente no lo descarga ni lo ejecuta. Lighthouse/PSI lo marca igual porque esa auditoría analiza el manifest de build, no el tráfico de red real — es un falso positivo conocido de esa auditoría contra Next.js, no un bug del sitio.

**Cerrado sin acción de código:** no hay bytes reales que un visitante moderno pague por esto, y no hay ninguna acción de código que tenga sentido tomar.

**Para qué sirve:** evita perseguir un número de auditoría que no representa una experiencia real degradada.

1.24 — Imágenes 2x-DPR (retina)

Hecho · cerrado sin acción de código (13/9)

Tarea bloqueada originalmente por falta de datos reales de resolución de pantalla de los visitantes (GA4/CrUX). A pedido explícito de Mariano de avanzar igual, se investigó leyendo el código fuente real de Next 16.2.10 (`node_modules/next/dist/shared/lib/get-img-props.js`, función `getWidths`, y `image-config.js`) en vez de esperar el dato que faltaba.

**Hallazgos:** (1) `next.config.ts` no sobreescribe `deviceSizes`/`imageSizes` — quedan en los defaults de Next (hasta 3840px), con margen de sobra sobre el hero full-bleed más ancho del sitio (cap de 1200px vía `sizes` ⇒ 2x=2400, 3x=3600, ambos por debajo de 3840); (2) cero `<img>` crudos en `src/` — todo pasa por `next/image`; (3) los usos con `fill` (la mayoría de las imágenes grandes: `PageHero`, `TechnologyBlock`, `ClientCard`, `BlogCard`, `ServiceCards`, `BaseHubMockup`, `EbookSection`) tienen un `sizes` calculado con precisión contra el layout real, lo que hace que Next genere un `srcset` completo — el navegador elige la candidata correcta según su propio DPR real, sin que el sitio necesite saber la resolución de cada visitante; (4) los pocos usos sin `sizes` (imágenes de tamaño fijo, ej. el isotipo en `TechnologyBlock.tsx`/`AboutLogoBlock.tsx`) igual generan candidatas 1x/2x automáticamente — Next deliberadamente no ofrece 3x ahí, con un comentario en su propio código fuente citando research de Twitter Engineering ("even true 3x resolution screens are wasteful as the human eye cannot see that level of detail").

**Cerrado sin acción de código** — nada de esto dependía del dato de resolución real que originalmente bloqueaba la tarea; `next/image` ya lo resuelve por diseño.

**Hallazgo colateral, fuera de alcance, sin urgencia:** el isotipo de Base Core se declara con dimensión intrínseca 900×927 pero se renderiza a 140-257px sin `sizes` — sobre-provisiona bytes en pantallas no-retina (el sentido inverso al de esta tarea), anotado para una futura revisión de peso.

**Para qué sirve:** confirma que las pantallas de alta densidad (retina) ya ven imágenes nítidas sin pagar peso de más en pantallas normales.

1.25 — INP real de campo

Hecho · cerrada 21/9

Instrumentado y funcionando desde el 5/9 (`14172da` — Next.js 16 trae `useReportWebVitals` integrado, sin librería aparte, +3KB gzip medidos), enviando LCP/CLS/INP a GA4. Confirmado el 13/9 que no existía ninguna vía de acceso a la GA4 Data API en este repo — `scripts/seo/gsc.py` (único script de Google APIs existente) estaba scopeado solo a Search Console, sin cliente ni credencial de `analyticsdata`, y ningún MCP de Analytics registrado. Bloqueada por acceso, no solo por tráfico.

**Acceso resuelto (14/9):** Mariano completó la guía de acceso a GA4 (proyecto GCP, service account `ga4-readonly`, Viewer access en la propiedad, custom dimension de evento `metric_rating` registrada, Property ID `550444799`). `scripts/seo/ga4.py` corrió contra datos reales por primera vez: 381 eventos LCP, 374 CLS, 128 INP en 28 días — pero como la custom dimension no es retroactiva, todo ese tráfico traía `(not set)` en el rating. Tarea pasa a En progreso: falta acumular tráfico nuevo posterior al registro.

**Cierre (21/9):** con una semana de tráfico posterior al registro de la custom dimension, `scripts/seo/ga4.py webvitals --days 7` trajo 42 eventos INP con rating real (de 57 totales, el resto todavía `(not set)` de tráfico previo al corte): 41 good (71.9%) y 1 needs-improvement (1.8%) — 97.6% de lo medido. Supera con margen el umbral de 75% "good" que usa Core Web Vitals para dar una métrica por aprobada. Mariano confirmó cerrarla con este resultado — el objetivo era confirmar con datos de campo que la interactividad es buena, no medir un p75 exacto (GA4 tampoco lo expone vía API para custom dimensions).

**Para qué sirve:** el dato de campo real (visitantes reales) es el que Google usa para rankear — más confiable que cualquier corrida de laboratorio (PSI/Lighthouse).

1.26 — Cap de `sizes` en el hero de Home (y hero secundario de Contacto/E-Book)

Hecho · PR #40, 14/9

Encontrado en la auditoría de performance de alcance completo del 13/9 (PageSpeed real: Home mobile 78 / desktop 94, "Improve image delivery", ~107KB de ahorro estimado en desktop). El hero de Home (`src/app/(es)/page.tsx:147` y su espejo `(en)/en/page.tsx:166`, el elemento LCP de la página) era la única imagen full-bleed del sitio sin el cap `sizes="(max-width: 1199px) 100vw, 1200px"` que ya tenía el resto (Footer, PageHero, TechnologyBlock, ContactSection, BaseHubTeaser, ServiceCyclePage) — a 1350px de ancho pedía la variante de 1920w en vez de 1200w, con fuente 1917×1264 para un área mostrada de 1337×880.

**Implementado:** mismo cap de `sizes` aplicado a las 2 páginas del hero de Home; de paso, el hero de `/contacto`/`/ebook` (`Breadcrumb.tsx:71`) recibió el mismo cap por consistencia (fuente liviana, ahorro marginal). Commit `121df4f`, PR #40.

**Para qué sirve:** que el elemento LCP de la página más visitada del sitio no pida una imagen más pesada de la que realmente se muestra.

1.27 — Bajar `quality` en logos de Header/Footer

Hecho · PR #40, 14/9

Encontrado en la misma auditoría del 13/9. Ningún `<Image>` del repo definía `quality` explícito (todos corrían en el default de Next, 75); PageSpeed marcó 2 logos con margen de compresión (~26.5KB combinados) — logo de header desktop (PNG 923×923) y logo de footer/mobile (webp), ambos arte de logo plano que tolera compresión más agresiva que una foto sin notarse.

**Implementado:** `quality={60}` agregado a ambos `<Image>` (`Header.tsx`, `Footer.tsx`), verificado visualmente antes de aplicar que no genera artifacts en el texto pequeño del logo. Requirió sumar `images: { qualities: [60, 75] }` en `next.config.ts` — Next 16 clampea silenciosamente cualquier `quality` no declarado en el allowlist al valor permitido más cercano, sin error; se dejó 75 primero en el array para que el resto de los `<Image>` del sitio, sin `quality` explícito, mantenga exactamente su output actual. Commit `121df4f`, PR #40.

**Para qué sirve:** bajar peso en dos assets que toleran compresión agresiva sin afectar assets fotográficos del resto del sitio.

**Método de medición de performance, para la próxima vez** (consolidado del extinto artifact Performance Web, 21/9): PSI real, nunca Lighthouse CLI de un sandbox compartido (10-50× más ruido que señal). Mínimo 5 corridas, mirar la mediana — la varianza documentada de este sitio en PSI (58 a 95 con el mismo código) hace que 2-3 corridas no separen señal de ruido. Medir LCP y TBT juntos — ya hubo un fix que mejoró uno y rompió el otro sin notarse hasta la corrida siguiente. Para bundle JS, usar `npx next experimental-analyze` (nativo desde Next 16.1) antes de opinar. Antes de asumir que algo depende de un dato externo que falta, leer el código fuente real primero (así se cerró 1.24, retina). Trabajo de performance en ramas propias, no directo en `master`, con varias sesiones en simultáneo. Verificación visual propia antes de pushear cambios de CSS/imágenes — un pixel-diff propio detectó el corrimiento de encuadre de Recruiting que la validación por rects no vio. Un cherry-pick de rama vieja no alcanza con "aplica sin conflictos" — revisar `git show <commit> --stat` completo antes de darlo por cerrado.

1.29 — Title de /en sin sufijo de marca

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: el `<title>` de `/en` (Home en inglés) era "Commercial Consulting for Small Business" — sin el sufijo " – Base Core Sales" que sí llevan las otras 7 páginas EN y la Home ES. El comentario original en `src/app/(en)/en/page.tsx:25-32` tenía la premisa invertida (asumía que el `title.template` del root layout debía aplicarse).

**Causa real, confirmada contra la documentación de Next.js del propio repo** (`node_modules/next/dist/docs`, requisito de `documentation/AGENTS.md` por ser una versión con cambios respecto al conocimiento de entrenamiento): `(en)/en/layout.tsx` no es un layout hijo que cuelgue del root layout ES — es en sí mismo un root layout (`<html lang="en">`, `<body>`), hermano de `(es)/layout.tsx`, no anidado bajo él. Ese root layout resuelve exactamente al mismo segmento de URL (`/en`) que su propio `page.tsx`. Según `generate-metadata.md` (línea 287 de la doc de Next): *"title.template defined in layout.js will not apply to a title defined in a page.js of the same route segment"* — mismo motivo exacto por el que "/" está exenta del template de `(es)/layout.tsx`, y por el que la Home ES ya resolvía esto con el título hardcodeado (ver 1.1). Las otras 7 páginas EN sí son hijas reales del segmento `/en`, por eso a ellas sí les aplica el template.

**Implementado:** en `src/app/(en)/en/page.tsx`, `homeTitle` pasa a ser el string completo `"Commercial Consulting for Small Business – Base Core Sales"` (mismo patrón que la Home ES) — se eliminó la variable separada `homeOgTitle` (ya no hacía falta, el título completo sirve para `title` y `openGraph.title` por igual) y se reescribió el comentario para documentar la causa real.

**Verificación:** `tsc --noEmit` y `eslint` limpios, `npm run build` exitoso (42 páginas). En vivo (`next start` local): `/en` → título corregido con sufijo; confirmado sin regresión en `/` (ES), `/en/marketing` y `/venta`.

**Commit:** `44cf2da`, pusheado a `master`.

**Para qué sirve:** consistencia de marca en el resultado de búsqueda — todas las páginas del sitio deben identificarse con el sufijo " – Base Core Sales", sin excepción no intencional.

1.30 — /contacto sin Open Graph / Twitter Card propio

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: `src/app/(es)/contacto/page.tsx` no declaraba bloque `openGraph`/`twitter` propio — heredaba el genérico del Home ("Base Core – Consultoría Comercial y Marketing") al compartir el link. Asimetría real: `/en/contact` sí declaraba el suyo ("Free Diagnostic").

**Implementado:** bloque `openGraph` agregado a `/contacto`, reusando el title/description que la página ya tenía en su `metadata` (sin inventar copy nuevo) — "Diagnóstico Gratuito" / "Solicita un diagnóstico gratuito: dejanos tus datos y te proponemos un plan de ruta para mejorar tus procesos y metodologías" — con `locale: es_ES` (igual que las 8 páginas de referencia) e imagen `/images/breadcrumb.jpg`, la imagen hero/LCP real que ya renderiza la página vía `Breadcrumb variant="hero"` (compartida con `/ebook`) — no una imagen genérica ni inventada.

**Sobre `twitter`, verificado, no es una regresión:** las etiquetas `twitter:*` de `/contacto` siguen heredando el bloque genérico del Home, pero es el comportamiento site-wide existente — confirmado que ninguna de las 8 páginas de referencia (preventa/venta/posventa/marketing/tecnologia/basehub/blog/ebook, ni `/en/contact`) declara bloque `twitter` propio tampoco. Next.js hace merge shallow por campo top-level, sin fallback automático de `openGraph` a `twitter` (confirmado contra `node_modules/next/dist/docs`). Si se quisiera Twitter Card propio por página, sería una tarea nueva de alcance sitio-completo, no específica de `/contacto`.

**Hallazgo colateral, sin acción (fuera de alcance de esta tarea):** `/en/contact` usa una imagen distinta a su par ES para OG (`basecoresales-slide-marketing-espana-1.jpg`, la genérica del Home, en vez de `breadcrumb.jpg`) — es la única asimetría imagen-por-imagen del sitio entre pares ES/EN, que en las otras 8 páginas comparten exactamente la misma imagen. Queda señalado como posible ítem de limpieza futuro.

**Verificación:** `tsc --noEmit` y `eslint` limpios, `npm run build` exitoso (`/contacto` sigue estático). En vivo (`next start` + `curl`): `og:title`/`og:description`/`og:locale`/`og:image` de `/contacto` ahora propios y distintos del Home; confirmado sin regresión en `/`, `/preventa` y `/en/contact`.

**Commit:** `91ad85c`, pusheado a `master`.

**Para qué sirve:** que compartir el link de `/contacto` en WhatsApp/LinkedIn muestre una vista previa propia de la página, no la genérica del Home.

1.31 — Breadcrumb dice "Home" en inglés en las 9 páginas ES

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: `src/components/Breadcrumb.tsx` hardcodeaba el string "Home" en ambas variantes (texto visible del link y el `name` del `BreadcrumbList` en JSON-LD), sin usar el prop `lang` que ya recibía (y sí usaba correctamente para construir el `href`). Se veía en las 9 páginas ES que usan el breadcrumb: /preventa, /venta, /posventa, /marketing, /tecnologia, /basehub, /blog, /contacto, /ebook.

**Implementado:** se agregó una constante `homeLabel = lang === "en" ? "Home" : "Inicio"`, mismo patrón condicional que ya usaba el componente para `homeHref`. Se reemplazaron las 3 ocurrencias hardcodeadas: el `name` del `BreadcrumbList.itemListElement[0]` en el JSON-LD, el texto visible de la variante `"hero"` (usada en /contacto y /ebook), y el texto visible de la variante `"bar"` (usada en las otras 7 páginas).

Cambios exactos en src/components/Breadcrumb.tsx

```
JSON-LD (antes):    name: "Home"
JSON-LD (después):  name: homeLabel

Variante "hero" (antes):    Home
Variante "hero" (después):  {homeLabel}

Variante "bar" (antes):     Home
Variante "bar" (después):   {homeLabel}
```

**Verificación:** `tsc --noEmit` y `eslint` limpios, `npm run build` exitoso (42 páginas). En vivo (`next start` + Playwright): `/preventa` y `/contacto` muestran "Inicio" en texto visible y JSON-LD; `/en/presales` y `/en/contact` siguen mostrando "Home" sin regresión.

**Commit:** `5207030`, pusheado a `master`.

**Hallazgo colateral, abierto como tarea nueva (1.38):** el mismo patrón de bug existe en el nav principal del Header (`src/lib/site.ts`, líneas 40 y 53) — el array de nav items en español también hardcodea `{ label: "Home", href: "/" }`. Fuera del alcance de esta tarea (acotada a `Breadcrumb.tsx`), se abre aparte para no mezclar el cambio.

**Para qué sirve:** consistencia de idioma en toda la página — un visitante en una página ES no debería ver "Home" en inglés en la navegación.

1.37 — Turnstile: colgado en iOS (18-20/9) y cartel de error falso (reabierta 24/9, cerrada 25/9)

Hecho · cerrada del todo 25/9

Hallazgo original (Auditoría Final, cat. Responsive): en /contacto, el widget de Cloudflare Turnstile podía quedar "verificando" para siempre en iPhones con iCloud Private Relay / "Evitar rastreo entre sitios" activado, sin disparar ningún callback de error propio del widget. Confirmado por foros de Apple y de Cloudflare: es un conflicto conocido y sin resolución del lado de Cloudflare, no un bug de nuestro código.

**Fix (18/9), deployado a producción:**

* `Turnstile.tsx` tiene su propio temporizador (`onStuck`, 12s) que no depende de que Cloudflare avise ningún error.
* `ContactForm.tsx` y `EbookForm.tsx` habilitan el botón de envío si el widget queda confirmado colgado, con un mensaje visible explicando que se puede enviar igual.
* `turnstile.ts` (servidor) ya no rechaza cuando no llega token — el honeypot existente queda como filtro anti-spam para ese caso puntual. Si sí llega un token, se sigue validando estricto como siempre.

Verificado end-to-end el 18/9 en local (Playwright, viewport mobile, site key real) y en producción que el JS deployado ya tenía el string del mensaje nuevo. Commit: `a7b6948`.

**Confirmación real (20/9), Mariano probó en dos iPhones distintos:** desde su propio iPhone el captcha se resolvió normal — el caso sin el conflicto. Desde el iPhone de su pareja, en Safari, el captcha efectivamente quedó sin poder comprobarse — a los ~12s apareció el cartel avisando que igual podía enviar el mensaje, completó el formulario y lo envió, y ambos emails de notificación llegaron a la casilla. Confirma los dos caminos a la vez: el flujo normal sigue intacto, y el fallback funciona en el escenario real que originó el hallazgo.

**Reabierta (24/9):** Mariano reportó que en desktop aparecía el cartel "No pudimos verificar la seguridad automáticamente — podés enviar el formulario igual" aunque la verificación sí se había completado, y que en mobile el captcha seguía fallando.

**Diagnóstico (25/9), sin enviar ningún email durante las pruebas:** Cloudflare y el servidor estaban bien. El dominio pasa por el proxy de Cloudflare (NS de Cloudflare, `server: cloudflare`, apex→www en un salto) y no hay CSP que bloquee el widget. `TURNSTILE_SECRET_KEY` y `NEXT_PUBLIC_TURNSTILE_SITE_KEY` están cargadas en Vercel (Production y Preview). El widget carga en producción sin error de dominio no autorizado, y `/api/contact` y `/api/ebook` rechazan un token inventado con "Verificación de seguridad fallida": la clave secreta valida de verdad contra Cloudflare. El widget ("Captcha BaseCore", `0x4AAAAAAES3L8mLChdIzZUL`, 2 hostnames) está en modo **Managed**, sin pre-clearance, confirmado por Mariano en el panel.

**Causa, reproducida en producción** con un Turnstile simulado que verifica a los 2 segundos: el temporizador de 12 s del fix del 18/9 tenía dos fallas. **(1)** No se cancelaba al verificar: en /contacto el cartel aparecía a los 12,6 s con el ✓ ya puesto. Pasaba en todas las visitas que se quedaban 12 s en la página, no "a veces". **(2)** Arrancaba al cargar la página y no cuando se montaba el widget, que se carga recién cuando el formulario se acerca a la pantalla. En la Home, bajando al formulario a los 14 s, el cartel ya estaba visible antes de que el captcha existiera. En mobile era el mismo bug, más el caso de teléfonos que tardan más de 12 s en verificar.

**Fix (25/9):** en `Turnstile.tsx`, el temporizador arranca cuando se renderiza el widget (y cubre también el caso de que el script no cargue). Se cancela al llegar el token, cuando el widget pasa a pedir un clic (`before-interactive-callback`) y en los callbacks de error y timeout de Cloudflare, que siguen mostrando el cartel de inmediato. Verificado contra un build local con la clave de prueba de Cloudflare en 6 escenarios: desktop y mobile en /contacto, /en/contact, /ebook y la Home con scroll tardío verifican sin cartel. Con el captcha colgado (simulado), el cartel sigue apareciendo a los 12 s y habilita el envío. Mariano aprobó el preview de Vercel. Commit `efc5266`, pusheado a `master`. En producción se repitió la misma prueba que antes reproducía el bug (/contacto, Home con scroll tardío y /ebook en mobile): verifica sin cartel en los tres casos.

**Hueco de seguridad cubierto (25/9):** desde el 18/9, `turnstile.ts` acepta envíos sin token (el fallback para iPhones con Private Relay). Se confirmó en producción que una solicitud sin token se saltaba el captcha y solo la frenaba el honeypot. Se mantuvo el fallback para personas reales, y Mariano creó en Cloudflare una regla de rate limiting (WAF → Rate limiting rules, "Formularios - limite por IP"): POST a `/api/contact` o `/api/ebook`, por IP, 3 solicitudes cada 10 s, Block durante 10 s (en el plan Free, 10 s es la única ventana y la única duración disponibles). Verificado en producción: los envíos 1 a 3 llegan al sitio, del 4.º en adelante Cloudflare responde 429, el contador es compartido entre los dos formularios, las páginas (GET) no se afectan y el bloqueo se levanta a los 10 s.

**Para qué sirve:** que nadie con iCloud Private Relay activado quede bloqueado para contactar a Base Core por un conflicto ajeno a la calidad del sitio, que el prospecto no vea un cartel de error falso justo antes de enviar, y que el fallback sin token no sirva para mandar spam en masa.

1.38 — Nav principal (Header) dice "Home" en inglés en las páginas ES

Hecho · abierta y resuelta 18/9

Encontrado el 18/9 por `seo-marketing` al verificar 1.31 — mismo patrón de bug, componente distinto: `src/lib/site.ts:40` (array `nav` en español, usado por `headerNav`) hardcodeaba `{ label: "Home", href: "/" }` en vez de "Inicio", visible en el menú superior de todas las páginas ES.

**Implementado:** `src/lib/site.ts:40`, `label: "Home"` → `label: "Inicio"`. No se tocó `navEn` (línea 53, `{ label: "Home", href: "/en" }`), que debe seguir en inglés. El `href` de ambos arrays quedó intacto.

**Verificación:** `tsc --noEmit`, `eslint` y `npm run build` limpios. En vivo (Playwright, menú móvil): `/preventa` y `/contacto` muestran "Inicio" como primer item, resto del menú (Marketing, Venta, Tecnología, BaseHub, Blog, Contacto) sin cambios; `/en/presales` y `/en/contact` siguen mostrando "Home" sin regresión. Confirmado que el Breadcrumb (1.31) y el logo (`aria-label` "Base Core – Inicio"/"Base Core – Home", derivado de otro lado) ya estaban correctos y no se vieron afectados. Sin otros usos del mismo patrón en el resto del código.

**Commit:** `65edacd`, pusheado a `master`.

**Para qué sirve:** mismo que 1.31 — consistencia de idioma en la navegación, ahora también en el menú principal, no solo en el breadcrumb.

1.32 — /blog salta de H1 a H3 sin H2 intermedio

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: `BlogListPage.tsx` (compartido por /blog y /en/blog) renderiza el H1 de la página y pasa directo a los `<h3>` de cada `BlogCard` en la grilla, sin H2 intermedio.

**Implementado:** se agregó un H2 nuevo antes de la grilla, usando el mismo componente `SectionHeading` que ya renderiza el H1 de la página, con el mismo patrón eyebrow+título que ya usan la sección "Metodología" de Home (ver 3.7) y "Etapas" de las páginas de ciclo. Se prefirió esta opción a bajar los `<h3>` de las cards a H2, porque `BlogCard` usa H3 para el mismo dato semántico (título del post dentro de una card) en dos variantes (destacada y normal) — bajarlo habría sido más invasivo y menos consistente con el resto del sitio, que reserva el H2 para el título de sección por encima de una grilla, no para el título de cada card individual.

Texto agregado

```
ES: eyebrow "ARTÍCULOS"  + H2 "Últimos artículos"
EN: eyebrow "ARTICLES"   + H2 "Latest articles"
```

No son keywords de investigación (copy estructural/navegacional entre secciones, no términos que compitan por posicionamiento propio) — no se validaron contra el Mapa de Keywords por ese motivo.

**Verificación:** `tsc --noEmit`, `eslint` y `npm run build` limpios (7 posts en ambos idiomas generados sin warnings). En vivo (Playwright + medición de bounding boxes): secuencia H1 → H2 → H3 confirmada en /blog y /en/blog, sin overlap ni salto (30px de espaciado entre H2 y grilla, mismo criterio que otras secciones).

**Commit:** `b0be1e5`, pusheado a `master`.

**Para qué sirve:** una jerarquía de encabezados lógica ayuda a Google y a lectores de pantalla a entender la estructura de la página.

1.33 — Title/description de /basehub exceden el largo cómodo para SERP

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: title 61 caracteres, description 167 — ambos superan ~60/~160, riesgo de truncamiento en el resultado de Google. Es metadata invisible en la página — ni el title ni la description del `<head>` aparecen en el cuerpo visible de /basehub, solo cambia lo que Google muestra en el resultado de búsqueda.

**Decisión de Mariano:** entre las dos alternativas propuestas (50 vs. 47 caracteres), eligió la de 50 — **"BaseHub: Plataforma de Proyectos"** — por mantener la palabra "Plataforma", consistente con cómo se describe BaseHub en el resto del sitio ("la plataforma de seguimiento e implementación de proyectos").

Cambio aplicado en src/app/(es)/basehub/page.tsx

```
Title (61 → 50):
  "BaseHub: Plataforma de Gestión de Proyectos" + sufijo
  → "BaseHub: Plataforma de Proyectos" + sufijo

Description (167 → 155):
  "BaseHub: la plataforma de seguimiento e implementación de
  proyectos de Base Core, incluida en tu consultoría. Sin pagar
  una herramienta de gestión de proyectos aparte."
  →
  "BaseHub: la plataforma de seguimiento e implementación de
  proyectos de Base Core, incluida en tu consultoría — sin pagar
  una herramienta de gestión aparte."
```

**Implementado:** solo la página en español (`/en/basehub` no estaba en el alcance, su title/description no fueron señalados como largos). `openGraph.title`/`openGraph.description` y el JSON-LD de `ServiceJsonLd` reusan las mismas constantes `title`/`description` — quedaron consistentes sin tocarlos aparte.

**Verificación:** `tsc --noEmit`, `eslint` y `npm run build` limpios. En vivo (build de producción + `next start`, HTML real servido): `<title>` "BaseHub: Plataforma de Proyectos – Base Core Sales" = **50 caracteres**; `<meta name="description">` = **155 caracteres**, ambos exactos a lo confirmado. H1 real ("Tu proyecto, en un solo lugar.") y el resto del contenido visible sin cambios.

**Commit:** `47bd5ab`, pusheado a `master`.

**Para qué sirve:** que Google no trunque el resultado de búsqueda a mitad de palabra.

1.34 — Title de /en/presales, cerca del límite de largo

Cerrada 18/9 · sin cambio

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: title "B2B Lead Generation & Appointment Setting" + sufijo " – Base Core Sales". Medido directo: 41 + 18 = **59 caracteres** (la Auditoría Final había anotado 63 — pequeña diferencia de conteo, no cambia la conclusión).

**Decisión de Mariano:** cerrar sin cambio. 59 caracteres ya está dentro del rango seguro de ~60 que recomienda Google. La única forma de bajarlo más sería sacar "& Appointment Setting", pero esa frase es keyword validada en el Mapa de Keywords — no se justifica sacrificarla por margen extra que no hace falta.

**Para qué sirve:** registrar que se midió y evaluó, para no re-investigar este title si el tema vuelve a aparecer.

1.35 — 4 meta descriptions por debajo de ~120 caracteres

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: /blog (110), /en/blog (114), /en/contact (113) y /en/marketing (116) — no era error, dejaban espacio sin aprovechar en el resultado de Google (rango cómodo: 140-160). Es metadata invisible en la página, ninguna de las 4 aparece en el cuerpo visible.

Cambio aplicado (las 4 son const description reusada por metadata + openGraph, y en /en/marketing también por ServiceJsonLd)

```
/blog (110 → 158):
  "Artículos sobre procesos comerciales, CRM y tecnología
  aplicada a ventas para pymes en España y Latinoamérica. Guías
  de marketing, preventa, venta y posventa."

/en/blog (114 → 151):
  "Articles on sales processes, CRM, and technology for small
  businesses in Spain and Latin America. Guides on marketing,
  presales, sales, and post-sales."

/en/contact (113 → 154):
  "Book a free diagnostic: share your details and we'll propose
  a roadmap to improve your commercial processes and
  methodology, from marketing to post-sales."

/en/marketing (116 → 150):
  "Marketing consulting for small business: branding, SEO,
  social media, paid advertising, graphic design, and websites,
  built for your full sales cycle."
```

**Verificación:** `tsc --noEmit`, `eslint` y `npm run build` limpios. En vivo (build de producción + `next start`, HTML real servido): 158/151/154/150 caracteres exactos, coincidiendo con lo confirmado. H1 de las 4 páginas sin cambios.

**Commit:** `f823002`, pusheado a `master`.

**Para qué sirve:** aprovechar el espacio disponible en el resultado de Google para dar más contexto antes del clic.

1.39 — Margen superior corto en el cajón "Etapas" (preventa/venta/posventa)

Hecho · confirmado por Mariano 20/9

Mariano reportó (19-20/9), navegando el sitio, que el margen superior del cajón "Etapas" en /preventa, /venta y /posventa (y sus pares EN) no respetaba el margen superior que usa el resto de los cajones del sitio — un problema distinto al que ya se había cerrado esa misma tarde (el gap entre el heading "Etapas" y las flip cards debajo, commit `d93b6a1`).

**Causa raíz:** en `ServiceCyclePage.tsx` (componente compartido por las 6 páginas), el spacer de 50px de arriba del cajón estaba condicionado a `!data.about` — condición que nunca se cumple, porque las 6 páginas sí tienen bloque "Qué hacemos". El spacer nunca se renderizaba. Medido en vivo con Playwright: /preventa quedaba en 56.4px de gap contra los 106.4px que usa /tecnologia para el mismo patrón (bloque "Qué hacemos" + spacer + heading).

**Implementado:** se saca la condición — el spacer ahora es incondicional. /preventa mide 106.4px, igual que /tecnologia, confirmado en vivo (Playwright, ES y EN, 1280px y 390px).

**Commit:** `9ccbf6f`, pusheado a `master`.

**Revisión de Mariano (20/9):** marcado OK en el artifact BaseCoreWeb: SEO y Performance (widget de revisión interactiva), sin aclaración adicional.

**Para qué sirve:** consistencia visual del ritmo de espaciado entre cajones, mismo criterio que ya se aplicó en la Auditoría Final.

1.41 — Flip cards: hover/clic en desktop y primer tap en mobile

Hecho · confirmado por Mariano 20/9

Mariano reportó (19-20/9) la reaparición de un bug de flip cards ya trabajado antes en la Auditoría Final. En desktop: al sacar el cursor, algunas cards quedaban trabadas mostrando el dorso, y el clic no hacía nada. En mobile: el auto-flip al hacer scroll funciona bien, pero el primer tap no flipeaba la card — recién el segundo. Afecta toda flip card sin redireccionamiento: Home (metodología), /marketing (pilares comunicacionales), /preventa /venta /posventa (etapas y puestos), /tecnologia (soluciones).

**Causa raíz:** un `:hover`/`:focus-within` de CSS y un estado `open` de React controlaban el mismo visual sin coordinarse — el hover forzaba el dorso sin importar lo que un clic acabara de setear, y al sacar el cursor el CSS soltaba pero el estado de React quedaba pisado (se trababa en dorso). En mobile, el primer tap disparaba a la vez un focus/hover sintético y el propio clic, compitiendo por el mismo estado.

**Implementado:** `useFlipTeaser.ts` reemplaza el trigger de hover por estado real: `mouseenter`/focus abre, `mouseleave`/blur siempre cierra (sin condición), clic togglea — todo gateado a punteros hover-capable via `matchMedia`, así el tap en touch sólo dispara `onClick`, sin competencia posible. Las cards con href (sólo "Ciclos" en Home) mantienen su comportamiento CSS-only sin cambios.

**Verificación:** comportamiento exacto verificado en desktop con Playwright (Home, /marketing, /preventa) — hover flipea, mouseleave siempre vuelve al frente incluso después de un clic, clics repetidos togglean. La emulación de tap táctil real no estaba disponible en las herramientas de Playwright del entorno — el mecanismo de mobile se verificó por revisión de código: el gating elimina por construcción cualquier camino que no sea el clic para mutar estado en touch.

**Commit:** `4561e89`, pusheado a `master`.

**Revisión de Mariano (20/9):** marcado OK en el artifact BaseCoreWeb: SEO y Performance (widget de revisión interactiva), sin aclaración adicional.

**Para qué sirve:** que la interacción principal de las flip cards funcione de forma predecible en el primer intento, en desktop y mobile.

1.40 — Overlay azul del hero de /marketing tapaba demasiado la imagen

Hecho · confirmado por Mariano 20/9, tras 3 rondas

Mariano reportó (19-20/9) que la imagen del hero de /marketing quedaba dominada por el overlay navy semitransparente encima — demasiado oscuro, le sacaba presencia a la foto.

**Ronda 1 (19/9):** `overlayOpacity` bajado de 0.14 a 0.112 (20% relativo). Mariano lo revisó y marcó "No": "sigue estando muy azul, corregir". Commit `f2fdf02`.

**Ronda 2 (20/9):** comparadas 0.06/0.08/0.112 en vivo con Playwright — 0.08 elegida por dejar la foto más presente sin perder legibilidad del H1. Mariano lo revisó de nuevo y volvió a marcar "No": seguía leyendo muy azul. Commit `cc7cb8e`.

**Causa real, encontrada en la ronda 3:** medido el color promedio de las 5 fotos de hero del sitio (RGB + saturación), la de /marketing resultó la más saturada de azul con diferencia — 0.53 de saturación contra 0.18-0.35 en preventa/venta/posventa/tecnologia, y la de mayor "dominancia de azul" (canal azul por encima de rojo/verde) de todas. El overlay navy nunca fue la causa principal — solo sumaba tinte azul sobre una foto que ya era azul de por sí. Confirmado además cambiando el overlay a negro plano (sin tinte navy) a la misma opacidad: seguía leyéndose igual de azul, aislando el problema en la foto.

**Ronda 3 (20/9), fix real:** `PageHero.tsx` suma dos props opcionales sin tocar el default de ninguna otra página — `imageClassName` (filtro CSS sobre la propia foto) y `overlayColorClassName` (color del overlay, no solo su opacidad). Solo /marketing (ES/EN) las usa: `saturate-[.45] brightness-[1.12]` en la imagen (corrige el color de base) + overlay `bg-black` a 0.10 en vez de navy (contraste para el H1, sin sumar más tinte). Verificado en vivo con Playwright que el resto de páginas con `PageHero` (preventa, tecnología, etc.) siguen con su navy/0.14 de siempre, sin regresión. Deployado primero a un preview de Vercel para que Mariano lo confirmara antes de producción.

**Confirmación de Mariano (20/9):** "me gusta como quedo, mucho mejor de como estaba" — llevado a `master`, commit `c477c71`, confirmado en vivo en basecoresales.com/marketing.

**Nota de proceso:** el widget de revisión interactiva (OK/No/Sin revisar) que el Plan de SEO usó para las rondas 1 y 2 de esta tarea se retiró después de esta ronda — duplicaba el tamaño del artifact y dejaba una línea de más de 98.000 caracteres, imposible de leer para verificar conflictos entre sesiones, al punto de forzar un publish con `force` en otra sesión para poder registrar un avance de la tarea 8.2. De acá en más, el veredicto de revisión de cualquier tarea se registra por chat, no por un widget en el artifact.

**Para qué sirve:** que la imagen del hero se vea, no solo el tinte de marca encima — y, en términos de proceso, medir la causa real de un problema visual antes de seguir ajustando el mismo número sin resultado.

1.28 — Performance con PageSpeed Insights (mobile/desktop, recurrente)

Hecho · cerrada 21/9, migró a 5.9 (Mantenimiento continuo)

Tarea nueva el 14/9, recurrente — no se cerraba de una vez como 1.14, sino que se iba revisando cada vez que aparecía un reporte nuevo de PageSpeed Insights. 1.14 ya había dejado Mobile en 88 y Desktop en 93-98 (confirmado 11/9), pero Mariano señalaba que seguía habiendo "ruidos" puntuales en mobile y desktop que valía la pena seguir bajando. Cerrada del todo el 21/9 (ver última entrada) y reemplazada por 5.9, un chequeo mensual sin objetivo activo de score.

**Mecánica (actualizada 18/9):** dejó de depender de que Mariano pasara un reporte a mano — `scripts/seo/psi.py` consulta la PageSpeed Insights API directo (API key de Mariano, guardada fuera del repo en `~/.config/basecoreweb-seo/psi-api-key`, mismo patrón que GA4/GSC). `performance` corre `uv run scripts/seo/psi.py check --url <url> --strategy mobile|desktop|both` cuando hace falta, sin esperar un reporte manual.

Reporte PSI de Home, 14/9 17:25 — resultados

```
Mobile:  Performance 87 · Accessibility 100 · Best Practices 100 · SEO 100
         FCP 2.0s · LCP 3.8s · TBT 70ms · CLS 0.003 · SI 3.1s
Desktop: Performance 98 · FCP 0.5s · LCP 0.9s · TBT 20ms · CLS 0.001 · SI 1.3s
```

**Ronda del 18/9 — primera regresión de LCP mobile (3.8s → 5.0-5.2s), investigada y desestimada.** Dos corridas iniciales dieron señal aparente de regresión, pero `git log` no mostró ningún commit que tocara el elemento LCP real ni el critical path de Home. 9 corridas frescas de mobile (cache-busting por query string) dieron un rango de 3.9-5.5s con el mismo código y mismo TTFB (`x-vercel-cache: HIT` constante) — ruido de laboratorio de PSI, no regresión real. Criterio corregido: usar 4-5 corridas frescas antes de declarar señal, no 1-2. De paso se resolvieron 3 hallazgos reales encontrados esa ronda: `sizes` faltante en TechnologyBlock.tsx/AboutLogoBlock.tsx, confirmación de que el logo del Header no necesitaba más cambios, y una animación no compositada mal atribuida al panzoom del hero — la traza real de Lighthouse apuntaba al botón de WhatsApp transicionando `bottom`, corregido dejando solo `transition-transform`. Commit `a00ddcc`.

```
Baseline 14/9 — Mobile: Performance 87 · LCP 3.8s
Pre-fix, 6 corridas frescas — Mobile LCP: 5.3 / 4.1 / 3.9 / 4.5 / 4.1 / 5.5s
Post-fix (sizes + WhatsApp), 3 corridas frescas — Mobile LCP: 3.9 / 4.7 / 4.1s
Desktop, post-fix: Performance 99 · LCP 0.9s
```

**Ronda del 21/9 — segunda regresión aparente (LCP 4.7-5.6s), esta vez confirmada como ruido de PSI con un A/B limpio, no solo repitiendo corridas.** El desglose crudo de la API de PSI (`lcp-breakdown-insight`) mostró que el 83% del tiempo de LCP era "Element render delay" (~2000ms de ~2400ms) — el main-thread-work-breakdown solo sumaba ~700ms simulados, sin explicar del todo el delay. Se armó un A/B con Lighthouse local (`npx lighthouse@13.5.0`, `git worktree` del commit `a00ddcc` del 18/9 vs. HEAD del 21/9, mismo `package-lock.json`, build + `next start` de los dos, sin variable de red/infra de PSI de por medio): baseline 4.5/4.7/4.2s vs. HEAD 4.0/4.7/4.4s — rangos superpuestos, HEAD igual o mejor. Confirma que los commits de código entre el 18/9 y el 21/9 (flip cards, overlay de /marketing) no causaron ninguna regresión real; el ruido es de la infraestructura de PSI. Ajuste de criterio: ante señal ambigua en el desglose crudo, preferir un A/B local con Lighthouse antes de atribuir causa solo con corridas contra producción.

**Ronda del 21/9 (2) — a pedido de Mariano, objetivo explícito: mobile +90 (paridad con desktop, ya en 97+).** Dos fixes implementados y verificados en producción (commit `34cc8f6`): (1) `prefetch={false}` condicional en `Header.tsx`/`LanguageSwitcher.tsx` cuando el link apunta a la página actual (el selector de idioma se monta 2x por mobile+desktop, y precargaba la propia página); (2) lazy-loading real de `BlogCarousel`, `ClientsCarousel` y `ContactForm`+Turnstile vía wrappers "use client" — esta versión de Next no code-splittea `next/dynamic` llamado directo desde un Server Component (`node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`). `ssr: true` mantuvo el contenido completo en el HTML servido, sin regresión de SEO/CLS.

Validado con evidencia determinística (bytes reales de archivo, no el score ruidoso de PSI): los chunks de los 3 componentes dejaron de aparecer en cualquier `<script src>` eager del HTML. JS eager bajó 15,7KB (-2,2%) en Home y 7,2KB (-1%) en /contacto. Confirmado en producción tras el deploy: Mobile, 5 corridas frescas, avg 74 — prácticamente igual al baseline de antes de los fixes (avg 74) — la mejora de bytes no alcanzó a moverse por encima del ruido normal de PSI (±10-15 puntos).

**GTM y fuentes investigados a pedido de Mariano ("explorá pero no rompas nada") — ya estaban optimizados, no se tocó nada.** `GtmLoader.tsx` (dos commits del 5-6/9, `cc6c0a5`/`01528e2`) ya diferían la librería de 166KB con `requestIdleCallback` + timeout de 2.5s, ya había descartado explícitamente `next/script lazyOnload` (sin garantía de cuándo carga) y diferir por interacción del usuario (un page\_view que rebota antes de cargar es un dato perdido para siempre). Confirmado que GTM ya carga después del LCP (~2500ms vs. ~2370ms de LCP) — no compite por el elemento crítico. `src/lib/fonts.ts` ya tenía `preload:false` desde el 5/9 en las 2 fuentes no necesarias arriba del fold (`reey`, `sora`); las 3 restantes (`gilmer`, `dmSans`, `montserrat`) son necesarias para el H1/botón del hero — diferirlas causaría FOUT en el elemento LCP mismo.

**Cierre final (21/9):** Mariano confirma no seguir persiguiendo el objetivo de +90 en el score de laboratorio — el dato de campo real (1.25, 97,6% INP good) ya muestra buen rendimiento donde Google realmente mide para ranking, y lo que queda de peso (runtime de React/Next, GTM ya diferido al máximo razonable, 3 fuentes necesarias arriba del fold) es costo estructural de la arquitectura, no fruta madura sin tocar. La tarea se da por cerrada y se reemplaza por **5.9 — Performance con PageSpeed Mensual**, un chequeo recurrente sin objetivo activo de score.

**Para qué sirve:** Core Web Vitals es señal directa de ranking de Google, y la primera impresión real de cualquier visitante — el score de laboratorio (PSI/Lighthouse, con throttling de CPU simulado) es una aproximación útil pero ruidosa; el dato que realmente cuenta para SEO es el de campo (CrUX, visitantes reales), que 1.25 ya confirma en buen estado.

Fase 2

## Medición

Sin esto, cualquier trabajo de SEO posterior no se puede medir. Cerrada del todo.

2.1 — Instalar Google Analytics 4

Hecho

Propiedad GA4 "Base Core Sales", moneda EUR. Etiqueta instalada vía `next/script`, confirmada en Informes en tiempo real.

ID de medición

```
G-0NRE1KWMBM  (guardado como site.gaId en src/lib/site.ts)
```

**Para qué sirve:** termómetro base de todo el trabajo de SEO. Medición mejorada activada: formularios y descargas se miden automáticamente.

2.2 — Verificar dominio en Search Console y enviar sitemap

Hecho · 16/16 indexadas

Propiedad de Dominio verificada por DNS. Se limpiaron dos sitemaps muertos heredados de WordPress. Confirmado el 27/8: 16 de 16 páginas reales indexadas (100%).

**Para qué sirve:** muestra qué búsquedas traen tráfico y qué errores encontró Google.

2.3 — Medir conversiones clave

Hecho · evento clave marcado 4/9

`ContactForm.tsx` dispara `generate_lead`; `EbookForm.tsx` dispara `generate_lead` y `file_download`. Confirmado en Tiempo real con 2 envíos reales el 4/9, y ambos marcados como eventos clave en GA4 Admin ese mismo día.

**Para qué sirve:** saber cuánta gente efectivamente deja sus datos, no solo cuánta entra.

Fase 3

## Palabras clave y contenido

El sitio técnicamente listo para posicionar, ampliado con las palabras que usan los clientes potenciales. Cerrada del todo.

3.1 — Investigación de palabras clave

Hecho · validado con Keyword Planner 30/8

Mapa direccional inicial (sin volúmenes) ya usado para reescribir title/meta/H1 de las 7 páginas. Validado con Keyword Planner el 30/8: sí hay diferencia real de volumen entre España y Argentina en el cluster de procesos/gestión de ventas — el copy prioriza los términos que se sostienen fuertes en ambos mercados. Detalle completo, con decisión por keyword, en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

**Corrección de documentación (13/9, auditoría SEO de alcance completo):** las keywords EN marcadas "pendiente" más abajo (Home, Preventa, Marketing, Tecnología) no tienen validación de *volumen* propia vía Keyword Planner — eso sigue siendo cierto — pero ya están **implementadas en el copy real de producción** desde hace semanas, confirmado en título/meta/H1 de las 6 páginas EN (ej. Preventa EN ya usa "B2B Lead Generation & Appointment Setting", Tecnología EN ya usa "AI & CRM for Businesses"). "Pendiente" se refiere solo a la validación de volumen, nunca significó que el sitio no tuviera esas keywords implementadas.

#### Home

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | consultoría comercial |
| Secundarias | consultoría para pymes · gestión comercial · consultoría empresarial · consultoría de ventas |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | commercial consulting for small business |
| Secundarias | sales process consulting for SMB · business consulting for small business |

#### Preventa

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | prospección B2B |
| Secundarias | ventas B2B · generación de leads B2B · captación de clientes · prospección comercial |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | B2B lead generation for small business |
| Secundarias | B2B prospecting consultant · lead qualification · appointment setting |

#### Venta

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | gestión comercial |
| Secundarias | procesos comerciales · procesos de ventas · estrategia de ventas · consultoría de ventas · automatización de ventas · implementación CRM |

EN · validado 30/8

|  |  |
| --- | --- |
| Primaria | commercial management |
| Secundarias | sales pipeline management · sales forecasting for SMB · CRM implementation consulting · sales KPIs |

#### Posventa

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | fidelización de clientes |
| Secundarias | customer success · retención de clientes · gestión de cartera de clientes · gestión de clientes |

EN · validado 30/8

|  |  |
| --- | --- |
| Primaria | customer retention consulting for small business |
| Secundarias | customer success · reduce customer churn B2B · cross-selling and up-selling strategy · account development |

#### Marketing

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | marketing digital para pymes |
| Secundarias | agencia de marketing · marketing B2B · marketing para pymes · generación de leads |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | marketing consulting for small business |
| Secundarias | branding for small business · SEO and social media agency · web design for small business |

Corregido 30/8: Mariano ejecuta él mismo con herramientas/IA — "agencia de marketing" (mayor volumen del cluster) pasa a secundaria fuerte.

#### Tecnología

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | CRM para empresas · IA para empresas |
| Secundarias | automatización de procesos · consultoría CRM · agentes de IA para empresas · automatización de ventas |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | *(sin definir)* |

Octavo pilar, cluster con mejor relación volumen/competencia de todo el research. Evitar "automatización comercial" (competencia Alta).

#### Contacto

ES

|  |  |
| --- | --- |
| Primaria | diagnóstico comercial gratuito |

EN

|  |  |
| --- | --- |
| Primaria | free sales consultation |

#### E-Book

ES

|  |  |
| --- | --- |
| Primaria | cómo armar un proceso de ventas desde cero |

EN

|  |  |
| --- | --- |
| Primaria | how to build a sales process from scratch |

3.2 — Sacar a Not-a-Numb3r como partner

Hecho

Decisión de negocio (18/8): Mariano hace el marketing él mismo en vez de tercerizarlo. Confirmado en el código: sin mención visible a Not-a-Numb3r en ningún lugar del sitio.

**Para qué sirve:** el sitio ya no vende Marketing como si lo entregara un partner externo.

3.3 — Ampliar el contenido de las páginas de servicio

Hecho · cerrada 30/8

2 párrafos nuevos por página (ES+EN) citando una estadística con fuente: Preventa (McKinsey, 40–50%/80–90%), Venta (80% necesita 5+ contactos), Posventa (retener cuesta 7x menos), Marketing (90% investiga antes de hablar con ventas), Tecnología (más de la mitad de implementaciones CRM falla por adopción).

**Para qué sirve:** más oportunidades de coincidir con búsquedas long-tail.

3.4 — Sección de blog/recursos

Hecho · 7/7 publicados

1. **Publicado (6/9)** — "Qué automatizar con IA en un equipo comercial (y qué no)" → */tecnologia*.
2. **Publicado (20/9)** — "Cómo calificar leads B2B: BANT, MEDDIC y otros métodos" → */preventa*.
3. **Publicado (13/9)** — "Cómo hacer seguimiento comercial" → */venta*.
4. **Publicado (4/10)** — "Cómo prevenir el churn" → */posventa*.
5. **Publicado (27/9)** — "Cómo crear una estrategia de marketing para una pyme" → */marketing*.
6. **Publicado (30/8)** — "¿Qué CRM elegir para una pyme?" → */tecnologia*. Primer post, formato comparativo.
7. **Publicado (11/10)** — "PMO: por qué tu pyme no necesita pagar uno aparte" → */basehub*. Séptimo, sumado el 5/9 (ver 7.8).

Orden de exhibición curado a mano en `posts.ts` (IA → Preventa → Venta → Posventa → Marketing → CRM → PMO), independiente de `publishedAt`. Carrusel en Home (`BlogCarousel.tsx`).

**Para qué sirve:** ataca el desafío de credibilidad — contenido útil construye autoridad antes de pedir que confíen sin case studies.

3.5 — Validar el mapa de keywords con Keyword Planner

Hecho · cerrada del todo 30/8

Validación completa: español (España + Argentina) e inglés para las 6 páginas de servicio, más Contacto/E-Book. Análisis completo en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

**Para qué sirve:** pasar de "probablemente se busca" a "se busca X veces por mes con esta competencia".

3.6 — Decisiones de arquitectura confirmadas

Hecho · title/meta/H1 implementados 30/8

Tecnología pasa a octavo pilar de igual jerarquía. Sin landings por vertical de CRM (sin caso de éxito todavía). Encuadre de Marketing corregido: Mariano ejecuta con herramientas/IA, no es solo asesoría.

**Para qué sirve:** deja registrado qué se decidió y por qué.

3.7 — H2 para la sección "Metodología" de Home

Hecho · 5/9

La sección saltaba de H1 a cuatro H3 sueltos sin H2 intermedio.

Texto en producción (ES y EN)

```
ES: eyebrow "Cómo trabajamos" + H2 "Nuestra metodología"
EN: eyebrow "How we work"   + H2 "Our methodology"
```

**Para qué sirve:** cierra un salto de jerarquía de headings.

3.8 — Enlaces internos hacia /ebook desde /preventa y /venta

Hecho · 5/9

Tercer párrafo con link contextual, implementado vía `renderRich()` (soporta `[texto](url)` en copy de contenido).

Texto en producción (ES)

```
Desde /preventa: anchor "proceso de ventas desde cero"
Desde /venta: anchor "e-book Proceso de Ventas desde Cero"
```

**Para qué sirve:** un lead magnet con un solo punto de entrada es enlazado débil.

3.9 — Title de /blog sin keyword

Hecho (title) · 5/9

Texto en producción

```
ES (/blog):     Blog de Gestión Comercial y CRM
EN (/en/blog):  Commercial Management & CRM Blog
```

**Oportunidad separada, no un defecto:** schema `FAQPage` sigue ausente en páginas de servicio — necesita contenido real, queda para fase futura.

3.10 — H1 de /ebook y /en/ebook

Hecho · 5/9, premisa corregida

**Premisa original incorrecta:** el H1 real (`EbookSection.tsx`) ya tenía el texto nuevo desde el 30/8. El gap real estaba en el título decorativo del `Breadcrumb` (se renderiza como `<p>`, no H1).

Título de Breadcrumb actualizado

```
ES nuevo: Guía gratis: cómo armar tu proceso de ventas desde cero
EN nuevo: Free guide: how to build a sales process from scratch
```

**Para qué sirve:** cierra el gap entre lo investigado y lo que el sitio muestra.

**Nota posterior (24/9):** el título del hero se sacó en ES y EN en la tarea 1.7 del artifact [Mejora Estética Web](https://claude.ai/artifact/TMjLE1yCsc5kB5nr6DZqEy) (commit `f9e94d3`). Repetía textualmente al H1 de la sección de abajo, así que la misma frase se veía dos veces seguidas en la primera pantalla. El hero de /ebook quedó igual que el de /contacto (foto + breadcrumb). **El H1 con la keyword no cambió**, así que el objetivo SEO de esta tarea se mantiene: el título del Breadcrumb era un `<p>` decorativo, sin peso de encabezado.

3.11 — Keyword validada "customer success" ausente del title/H1 de /posventa

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: title "Fidelización y Retención de Clientes" / H1 "¿Buscas fidelizar y retener a tus clientes?" — sin la keyword secundaria validada "customer success". Mismo patrón en `/en/post-sales`. El Mapa de Keywords ya marcaba esto como ganancia de bajo esfuerzo, sin implementar.

**Decisión de Mariano:** sumar la keyword al H1 (no solo al title/meta) — más peso de posicionamiento, aunque implica tocar el copy visible de la página.

H1 antes/después

```
ES: "¿Buscas fidelizar y retener a tus clientes?"
    → "¿Buscas fidelizar clientes y fortalecer tu customer success?"

EN: "Looking to retain and build customer loyalty?"
    → "Looking to retain customers and strengthen your customer success?"
```

**Razonamiento de la redacción:** mismo patrón de pregunta en dos líneas que usan /preventa y /venta. Se conservó la keyword primaria de la página (fidelización/retención) — el concepto no desapareció, sigue en el cuerpo (bullet "Retención y fidelización de clientes" / "Customer retention & loyalty", sección "Retención"/"Retention"), solo se recorta del H1 para hacer lugar a la keyword nueva sin sobrecargar la línea. Se usó "fortalecer"/"strengthen" en vez de "mejorar"/"improve" para no repetir el verbo que ya usa el subtítulo inmediato ("Mejorá la experiencia..."/"Improve your customers' experience."). También se agregó el objeto explícito "clientes"/"customers" al verbo "fidelizar"/"retain", que en el EN original quedaba elíptico.

**Confirmado contra el Mapa de Keywords** (sección 8.4 y sección Inglés): "customer success" es la misma frase, sin traducir, validada en ambos idiomas con números idénticos (100-1.000 de volumen, competencia Baja, España y Argentina) — sin discrepancia ES/EN a resolver.

**Verificación:** `tsc --noEmit`, `eslint` y `npm run build` limpios. En vivo (Playwright): H1 real servido en `/posventa` y `/en/post-sales` coincide exactamente con lo redactado; subtítulo/cuerpo siguiente confirmado coherente, sin redundancia.

**Commit:** `fb9cfba`, pusheado a `master`. Archivos: `src/content/posventa.ts`, `src/content/posventa.en.ts`.

**Para qué sirve:** sumar match textual exacto con una keyword secundaria validada de bajo esfuerzo, sin perder la keyword primaria ya presente.

3.12 — Frase exacta de keyword diluida por la conjunción "e"/"&" en /tecnologia

Hecho · resuelto 18/9

Hallazgo migrado el 18/9 desde la Auditoría Final de UX/diseño: title/description "CRM e IA para Empresas" / "AI & CRM for Businesses" — el Mapa de Keywords valida "CRM para empresas" e "IA para empresas" (ES) / "AI for businesses" (EN) como frases exactas separadas, y la conjunción diluye el match textual exacto de ambas.

**Decisión de Mariano:** sumar ambas frases exactas una vez cada una en el cuerpo, sin tocar el title/description (se mantiene el copy actual).

Cambio aplicado (bloque "Qué hacemos", src/app/(es)/tecnologia/page.tsx y su par EN)

```
ES: "Más de la mitad de las implementaciones de CRM falla..."
    → "...implementaciones de CRM para empresas falla..."
    "Implementar IA no es sumar una herramienta más..."
    → "Implementar IA para empresas no es sumar..."

EN: "Implementing AI isn't just adding another tool..."
    → "Implementing AI for businesses isn't just adding..."
    (no se sumó "CRM for businesses" — no es frase validada en
    el Mapa de Keywords para EN, solo "AI for businesses" es
    primaria; "CRM consulting" es la secundaria de CRM)
```

Cambio mínimo invasivo: inserción de dos-tres palabras por oración en párrafos ya existentes, sin contenido nuevo, cada frase aparece una sola vez por idioma — sin keyword stuffing.

**Verificación:** `tsc --noEmit`, `eslint` y `npm run build` limpios. En vivo (HTML servido con `next start`): confirmadas "CRM para empresas" e "IA para empresas" en /tecnologia, "AI for businesses" en /en/tecnologia (sin "CRM for businesses"); title/description verificados intactos en ambos idiomas.

**Commit:** `de94b2e`, pusheado a `master`.

**Para qué sirve:** sumar match textual exacto de dos keywords validadas sin tocar el copy de metadata ya decidido.

Fase 4

## SEO local y autoridad

Solo 4.2 y 4.6 cerradas — el resto (4.1, 4.3, 4.4, 4.5) sigue Bloqueado, detalle en el [Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT).

4.6 — Decisión de canal social: LinkedIn empresa, Instagram y Facebook

Hecho · decisión revertida 21/9, migrada al Plan de Marketing/Social

**Decisión original (5/9):** Instagram (@basecoresales) prácticamente inactivo (41 seguidores, 1 post) y LinkedIn de empresa sin actividad confirmable — con research citado (Edelman-LinkedIn B2B Thought Leadership Impact Report), se decidió no activar ninguno de los dos todavía, reforzando en cambio el LinkedIn **personal** de Mariano con contenido educativo y sistematizando pedidos de referidos específicos. Razón: en consultoría B2B de alto involucramiento, un perfil corporativo casi vacío resta confianza en vez de sumarla.

**Decisión revertida (21/9):** Mariano decide que los canales secundarios pasan a tener prioridad urgente de desarrollo, en este orden: **LinkedIn empresa, Instagram, Facebook** (los 3 a "Pendiente"). YouTube queda como "Pendiente futuro" (sin urgencia). Twitter/X, TikTok y Reddit quedan "Bloqueados" (fuera de alcance por ahora).

**Por qué se cierra acá sin ejecutar nada de código:** es una decisión de estrategia de canal/contenido, no de sitio — no hay cambio de código de `basecoresales.com` involucrado. El desarrollo activo (auditoría exhaustiva de cada canal en estado "Pendiente", plan de mejora por plataforma, calendario de contenido) se gestiona desde el [Plan de Marketing/Social](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp), para no duplicar el seguimiento en dos artifacts distintos sobre el mismo tema — mismo criterio que ya se usó para migrar hallazgos entre la Auditoría Final y el Plan de SEO el 18/9.

**Para qué sirve:** mantener el Plan de SEO acotado a SEO/performance del sitio — la estrategia de canales sociales, con su propio ritmo y métricas, vive en su propio documento.

Fase 5

## Mantenimiento continuo

5.3, 5.4 y 5.5-5.8 cerrados — solo 5.1 y 5.2 siguen activos en el Plan de SEO.

5.3 — Evaluar el gate del e-book y el campo WhatsApp obligatorio

Hecho · mergeado 13/9 (PR #37)

`whatsapp` era `required` en el formulario de e-book (`EbookForm.tsx`, único componente, usado por `/ebook` y `/en/ebook` vía el prop `lang`); `email` no lo era, ni en el cliente ni en la validación server-side de `/api/ebook` — al revés de lo esperado para un lead magnet de bajo compromiso. Hallazgo no anticipado por el plan original: esto permitía descargar el e-book sin dejar ningún email de contacto.

**Decisión (13/9, `seo-marketing`):** con criterio de CRO (cada campo tiene costo de conversión; el teléfono debe hacerse opcional en un lead magnet de bajo compromiso), `whatsapp` pasa a opcional — no se elimina, sigue capturando el dato de los leads más calificados que lo completan igual, sin costo de fricción para el resto. `email` pasa a obligatorio (junto con `nombre` y `empresa`, que se mantienen sin cambios) — es el campo mínimo indispensable de cualquier lead magnet, el canal real de entrega/seguimiento.

**Adelanto de contenido en `/ebook`** (parte de la propuesta original del plan): evaluado, no implementado — fuera del alcance acotado de este cambio (solo el gate del formulario). Se extrajo igual el índice real del e-book con `markitdown` (7 secciones: segmentación del ciclo comercial, preventa, IA en preventa, automatización, el puente hacia la venta, errores comunes, panorama de IA) — material genuino disponible para una futura iteración, sin necesidad de nueva investigación.

**Implementado:** `src/components/EbookForm.tsx` + `src/app/api/ebook/route.ts` — solo atributos `required` movidos, sin tocar clases de layout. PR #37, verificado con `tsc`/`eslint`/`build` y funcionalmente (`form.checkValidity()`: válido sin WhatsApp, inválido sin email, ES y EN). Mergeado a `master` y confirmado en producción el 13/9 (`whatsapp.required === false`, `email.required === true`).

**Para qué sirve:** reducir fricción en la conversión del lead magnet sin perder el dato mínimo indispensable para hacer seguimiento real.

5.4 — Re-correr auditoría SEO/accesibilidad con `seo-marketing`

Hecho · corrida 5/9

Única auditoría completa desde que `seo-marketing.md` recibió la regla "no inventes keywords/volúmenes/resultados de clientes" desde el arranque. Resultado: cerró 1.21 del todo (3 casos nuevos de meta description), encontró y resolvió 1.22 (bug de W Profesional) por cuenta propia, y confirmó el alcance real de 1.18.

**Para qué sirve:** validó los fixes del día con mirada fresca y confirmó que el resto seguía resuelto (1.17, 7.9, 1.19, 1.15, 3.9, 1.20).

5.5 — Bug de `<br/>` sin espacio en TechStageMatrix

Hecho · mergeado 14/9 (PR #39)

Misma familia que 1.17, 1.22 y 7.9 — el título de `TechStageMatrix.tsx` (matriz de `/tecnologia`) concatenaba las dos mitades con un `<br />` entre medio sin espacio real después del salto de línea, dando `textContent` "...tecnología,en todo..." (ES) / "...technology,across..." (EN) en vez de leer con un espacio real.

**Implementado:** en `TechStageMatrix.tsx:154-157`, el JSX pasa de `<>{t.title[0]}<br />{t.title[1]}</>` a `<>{t.title[0]}<br /> {t.title[1]}</>` — un espacio literal antes de la segunda expresión, sin tocar el salto de línea visual (JSX colapsa el espacio en blanco entre etiquetas, pero preserva uno explícito después de `<br />`). Verificado con Playwright en ambos idiomas: `textContent` ahora trae el espacio real.

**Para qué sirve:** el nombre accesible/textContent no debe concatenar palabras.

5.6 — Jerarquía de headings salteada en BaseCore AI System

Hecho · mergeado 14/9 (PR #39)

En `/tecnologia` y `/en/tecnologia`, la sección "BaseCore AI System" saltaba de H2 directo a H4 (las 5 tarjetas "Agentes en producción" en `AiSystemSection.tsx`) sin H3 intermedio, y volvía a H3 para las secciones siguientes — secuencia real medida H2 → H4×5 → H3×5.

**Implementado:** las 5 `AgentCard` pasan de `<h4>` a `<h3>` (mismas clases Tailwind, sin cambio visual) en `AiSystemSection.tsx`. Secuencia final: H2 ("BaseCore AI System") → H3×5 (tarjetas de agentes) → H3×3 (Sistema de análisis de capacidades) → H3 (título del Workflow) → H3 (oferta de extensión) — sin ningún nivel salteado.

**Para qué sirve:** una jerarquía de encabezados lógica ayuda a Google y a lectores de pantalla a entender la estructura de la página.

5.7 — H3 duplicado por tarjeta en ServiceCards

Hecho · mergeado 14/9 (PR #39)

Patrón heredado del theme original, nunca señalado antes. `ServiceCards.tsx` renderizaba el título de cada tarjeta dos veces como `<h3>`: uno en la caja blanca visible y otro en la capa de hover, siempre presente en el DOM (solo oculta visualmente sin hover) — confirmado en Home ("Ciclos de Venta") y en la sección "Puestos" de las 5 páginas de ciclo.

**Implementado:** la capa de hover ganó `aria-hidden="true"` en el wrapper Y su título bajó de `<h3>` a `<p>` (mismas clases) — hicieron falta los dos cambios juntos, porque `aria-hidden` solo no alcanza para sacarlo de un `querySelectorAll('h3')` (solo lo saca del árbol de accesibilidad, no del DOM que consultan las herramientas de auditoría de headings).

**Para qué sirve:** un lector de pantalla, o cualquier herramienta que navegue por encabezados, no debería encontrar cada título duplicado.

5.8 — Corregir `lastModified` de sitemap

Hecho · mergeado 14/9 (PR #39)

`src/app/sitemap.ts` traía fechas `lastModified` desactualizadas: `/tecnologia`+EN seguían en "2026-09-05" pese a 3 rediseños del 13/9; `/marketing`+EN y las 3 páginas de ciclo (`/preventa`, `/venta`, `/posventa`)+EN seguían en "2026-08-30" pese al rediseño de `TechnologyBlock` del 13/9; Home+EN seguía en "2026-09-05" pese al cambio de hero mobile + cajón "Nosotros" del 12/9.

**Implementado:** las 12 entradas ES+EN afectadas se corrigieron a la fecha real de su último cambio de copy visible, verificada con `git log --follow` (no asumida): Home/`/en` → 2026-09-13 (el rediseño de `TechnologyBlock` del 13/9 también afecta Home); Marketing y las 3 páginas de ciclo+EN → 2026-09-13; Tecnología+EN → 2026-09-13. Verificado contra `/sitemap.xml` en producción tras el deploy.

**Para qué sirve:** no es un error técnico grave, pero mantiene la señal de frescura real que el propio código dice perseguir.

Fase 6

## Posicionamiento en buscadores de IA (AEO/GEO)

4 de 5 tareas cerradas el 31/8 — solo 6.5 (seguimiento mensual) sigue activo en el Plan de SEO.

6.1 — Bots de IA sin bloquear en robots.txt

Hecho · verificado 30/8

`robots.txt` permite todo — GPTBot, ClaudeBot, PerplexityBot, Google-Extended y Bingbot rastrean sin restricción.

**Para qué sirve:** si un motor de IA no puede rastrear, no puede citar.

6.2 — Datos estructurados con autoría (BlogPosting)

Hecho

Cada post emite JSON-LD `BlogPosting` con `author`, `datePublished`, `publisher` e imagen.

**Para qué sirve:** los motores de IA prefieren citar contenido con autoría verificable.

6.3 — Firma visible del autor en los posts

Hecho · deployado 31/8

"Por Mariano Sandonato, Fundador de Base Core Sales" bajo el título, linkeado a su LinkedIn.

**Para qué sirve:** autoría visible, señal de E-E-A-T gratis.

6.4 — Archivo /llms.txt

Hecho · deployado 31/8

Route handler que arma sus links de blog directo desde `blogPosts`. Sigue el estándar [llmstxt.org](https://llmstxt.org).

**Para qué sirve:** resumen directo del negocio para motores de IA no-Google.

Fase 7

## BaseHub en el sitio

Cerrada del todo el 5/9. `/basehub` y `/en/basehub` en producción desde el 1/9.

7.1 — Fundamentos on-page

Hecho · 1/9

Title/meta/canonical/hreflang propios, un H1 con jerarquía H2, datos estructurados en las mismas 2 capas que el resto (`Service`, no `SoftwareApplication` — decisión deliberada).

7.2 — Enlazado interno

Hecho · 1/9

Nav principal, header, footer, teaser en Home y en las 5 páginas de servicio — 6 puntos de entrada, dos idiomas.

7.3 — Validar keywords con Keyword Planner

Hecho · validado 3/9, sin cambios de copy

Title/meta/H1 vigentes ya estaban bien encaminados. Hallazgo real: "PMO" (1.000–10.000, Baja, España y Argentina) — mejor encaje como ángulo de blog que como target de página (ver 7.8).

7.4 — Sumar BaseHub al Mapa de Keywords

Hecho · 3/9

Sección 11 del [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9), noveno pilar.

7.5 — Confirmar indexación en Google Search Console

Hecho · confirmado 5/9

`/en/basehub` indexada desde el 3/9. `/basehub` en español: el sitemap no se había releído desde el 31/8; reenviado el 3/9, Google la rastreó ese mismo día. **Confirmado indexado el 5/9** vía `scripts/seo/gsc.py inspect` — "Submitted and indexed".

7.6 — Imagen Open Graph propia

Hecho · 3/9

Captura real del dashboard (`/images/basehub-dashboard.webp`) en vez de la imagen de marca genérica.

7.7 — Auditoría de rendimiento y accesibilidad (PageSpeed)

Hecho (parcial) · 3/9

Accessibility, Best Practices y SEO en 100/100. Desktop Performance 98. Mobile con ruido de infraestructura en la sesión de testeo, no un problema propio de la página.

7.8 — Evaluar un artículo de blog relacionado

Hecho · publicado 5/9

Ángulo elegido: **"PMO: por qué tu pyme no necesita pagar uno aparte"** / **"PMO: Why Your Small Business Doesn't Need to Pay for One"** — usa directamente la keyword "PMO" (7.3) en vez del ángulo genérico alternativo, porque resuelve de frente la intención mezclada del término (software/consultoría vs. certificación PMP/CAPM). Apunta a `/basehub` y `/en/basehub`.

**Estadística citada:** PM Solutions, "State of the PMO" (2025) — verificada contra la fuente primaria: PMO típica con equipo de 8 personas, presupuesto anual de US$500.000, cartera de US$10M/año. Mismo orden de magnitud en ediciones 2016 y 2010. No se encontró dato localizado (España/Argentina) con solidez suficiente — se optó por no inventar uno.

**Gap conocido, aprobado por Mariano:** el título EN no tiene validación propia de Keyword Planner (solo corrió en español) — publicado igual, "PMO" es vocabulario de negocios corriente también en inglés.

**Implementado:** `src/content/blog/es/pmo-por-que-tu-pyme-no-necesita-pagar-uno-aparte.ts` + par EN, sumado a `posts.ts`. `publishedAt: "2026-10-11"`.

7.9 — H1 de /basehub y /en/basehub rompe el texto plano

Resuelto 5/9

Documentado por `performance`, señalado "fuera de scope" y nunca trasladado hasta el 4/9. Mismo bug que 1.17: `<br />` pegado daba "Tu implementación, visiblede principio a fin" / "visiblefrom day one". Mismo fix — espacio real, sin tocar el salto visual.

Fase 8

## Base Core en motores de búsqueda

Fase abierta el 14/9. 8.1 (decisión de naming) se cerró el mismo día sin implementar nada. 8.2 (visibilidad de marca) se cerró del todo el 21/9 — detalle completo abajo. 8.3 (auditoría de marca) sigue activa — su detalle en progreso vive en el [Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT), no acá.

8.1 — Decisión de naming: "Base Core" vs "BaseCore"

Cerrada 14/9 · decisión: no avanzar

Mariano propuso unificar todo el copy del sitio de "Base Core" (separado) a "BaseCore" (junto, B y C mayúscula). Antes de tocar nada se relevaron los 46 lugares del código con "Base Core" separado: 40 de copy visible (títulos, meta descriptions, alt text, footer, e-book, teasers de BaseHub, 2 H2 de blog) y 6 comentarios internos de desarrollador.

Hallazgos del primer análisis (14/9)

No hay riesgo de ranking directo: "Base Core"/"BaseCore" nunca fue investigado como keyword en el [Mapa de Keywords](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9) — es término de marca, no genérico. Verificado en el código: ningún H1 usa "Base Core"; sí lo usan 2 H2 (subtítulos del post de blog "PMO", ES/EN). El `<title>` y el JSON-LD de las 16 páginas salen de una sola fuente (`site.ts`) — se actualizarían solos; los otros ~37 casos requerirían edición manual uno por uno. Riesgo real identificado: consistencia de entidad (E-E-A-T/NAP) si el sitio cambia pero LinkedIn (`linkedin.com/company/base-core/`), el nombre de la propiedad de GA4 y la futura Google Business Profile (4.1, bloqueada) siguen con el nombre viejo. Cero backlinks todavía (4.3 bloqueada) — sería el momento más barato para hacerlo, si se hiciera.

**Mariano pide pausa (14/9, primera vuelta):** no avanzar todavía, sin descartarlo — análisis documentado para no re-investigar si se retomaba.

Segundo análisis, con evidencia adicional (14/9, tras cerrar 8.2 #1/#2)

Antes de decidir del todo, Mariano pidió una recomendación con evidencia sobre si "Base Core" o "BaseCore" es más probable que la gente busque, y si el copy visible es independiente de eso. Hallazgo clave, nuevo respecto al primer análisis: **"BaseCore" (junto) ya está tomado por otra empresa, y registrado** — `basecore.co` es BaseCore™, fabricante de geoceldas y estabilización de suelos para construcción, con sitio propio y LinkedIn activos. Es decir, pasar a la forma junta no saca al negocio de una colisión de nombre — la cambia: hoy comparte "Base Core" con Base Power (baterías domésticas, ronda Serie D de US$1.000M, ver 8.2); pasaría a compartir cadena exacta con una marca ya registrada (™) en otro rubro, lo que además de ser un problema de SEO es potencialmente un tema legal de trademark.

No hay evidencia real (Google Trends, Keyword Planner, ni casos comparables como Basecamp/Mailchimp/Dropbox) de que una forma sea más probable que la otra para que la gente la tipee — esas marcas *eligieron* la forma junta como decisión de branding, no está probado que la gente las escriba juntas por instinto al oírlas por primera vez. El mecanismo de `alternateName` + alias en `/llms.txt` (ya implementado en 8.2) sostiene razonablemente bien que se siga encontrando el sitio buscando "Base Core" aunque el copy mostrara "BaseCore" — Google tiene capacidad documentada de reconciliar palabras compuestas pegadas con su forma separada. Pero mostrar una *tercera* grafía que no coincide ni con el `name` principal del schema ("Base Core Sales") ni con el `alternateName` ("Base Core") sería una variante más para que Google concilie, no una simplificación — el riesgo no es "que no te encuentren", es fragmentar la entidad en 3 formas simultáneas sin nexo declarado entre sí, justo lo contrario de lo que 8.1 buscaba lograr.

**Decisión final (14/9):** Mariano cierra 8.1 sin avanzar — no hay evidencia que respalde el cambio, el argumento de "diferenciarse de Base Power" se cae al chocar con BaseCore™, y la necesidad real de negocio (que lo encuentren buscando "Base Core") ya está resuelta por 8.2. Nota para el futuro: si en algún momento se quisiera avanzar por preferencia de marca (no de SEO), la única forma prolija sería declarar "Base Core" en algún punto mínimo de copy visible para no fragmentar la entidad — lo cual chocaría con la decisión ya tomada en 8.2 #7 (no tocar copy visible con "Base Core"). Ambas decisiones tironean en direcciones opuestas; quedó señalado para quien retome el tema.

**Para qué sirve:** registrar la implicancia completa y la evidencia real detrás de una decisión de marca, para no tener que re-investigar desde cero si el tema vuelve a aparecer.

8.2 — Visibilidad de marca: no aparece buscando "Base Core" solo

Cerrada 21/9 · las 11 recomendaciones resueltas

Mariano detectó que buscando "Base Core" solo en Google, el sitio no aparecía — solo aparecía buscando "Base Core Sales" completo. Le preocupaba que gente que solo recuerda "Base Core" no pudiera encontrar la página, y quería entender también cómo lo manejarían los buscadores de IA (ChatGPT, Perplexity, etc.) ante la misma búsqueda.

**Análisis de `seo-marketing` (14/9):** el término desnudo "Base Core" tiene competencia real y grande — **Base Power**, empresa estadounidense de baterías domésticas, lanzó en agosto de 2026 un producto llamado "Base Core" junto con una ronda Serie D de US$1.000M y cobertura masiva de prensa (Business Wire, WSJ, Yahoo Finance). También compiten un personaje de videojuego, una plataforma de trading (BASECORE) y un theme de Drupal. Contra Base Power específicamente no había acción de SEO propio capaz de ganar ese término en el corto/mediano plazo — diferencia de escala estructural, no un problema de configuración.

**Con contexto de negocio, el sitio sí aparecía** (2º resultado buscando "Base Core consultoría"). Dato duro de Search Console (`scripts/seo/gsc.py analytics`, 90 días): la query exacta "base core" tenía 33 impresiones con posición promedio **4.1** — no estaba ausente del índice, perdía visibilidad porque Base Power ocupaba los primeros lugares con noticias recientes. Muestra chica (52 consultas totales en 90 días, dominio nuevo).

**La causa que sí era resoluble:** el sitio nunca declaraba "Base Core" como alias en ningún lugar máquina-legible — `site.shortName` en `src/lib/site.ts` era siempre "Base Core Sales" completo (title, JSON-LD `ProfessionalService.name`, Open Graph, encabezado de `/llms.txt`), sin ningún campo `alternateName`. Confirmado también con IA: Perplexity, preguntado "¿Qué es Base Core?" sin contexto, no identificaba ni a Base Power ni a Base Core Sales — la ambigüedad del término afectaba igual a buscadores de IA, mismo mecanismo de fondo (falta de señal de alias + autoridad externa).

Recomendaciones priorizadas (14/9)

```
1. alternateName: "Base Core" en el JSON-LD ProfessionalService  — Bajo esfuerzo, accionable ya
2. Alias "también conocida como Base Core" en /llms.txt          — Bajo esfuerzo, accionable ya
3. Bajar la expectativa de competir por el término desnudo        — Decisión, no requiere trabajo
   contra Base Power
4. Chequeo mensual de la query "base core" con gsc.py (junto      — Bajo esfuerzo, accionable ya
   a 6.5)
5. Definir ya el nombre exacto para GBP ("Base Core Sales",       — Bajo esfuerzo, depende de 4.1 (bloqueada)
   no "Base Core")
6. Usar "Base Core" como variante de anchor text al retomar       — Esfuerzo medio, depende de 4.3 (bloqueada)
   backlinks
7. Mención puntual de "Base Core" en copy acotado (footer/meta),  — Esfuerzo bajo-medio, independiente
   sin tocar H1 ni mezclar con la decisión de naming de 8.1        pero separado de 8.1

No recomendado: Wikidata/Wikipedia (se rechazaría, falta
notoriedad con fuentes secundarias independientes).
```

**Implementado y en producción (14/9):** Mariano confirmó avanzar con #1, #2 y #4 (invisibles/sin riesgo, sin dependencias). #1 y #2 — `alternateName: "Base Core"` en el JSON-LD `ProfessionalService` y la línea "Also known as: Base Core" en `/llms.txt` — mergeados vía [PR #41](https://github.com/marianosandonato/basecoreweb/pull/41), verificado con tsc/eslint/build y confirmado en vivo contra `basecoresales.com` (ES y EN). #7 quedó Bloqueada (14/9): Mariano decidió no avanzar con ninguna mención de "Base Core" en copy visible.

**Auditoría de seguimiento (18/9):** se verificó en vivo que `alternateName` y la línea de `/llms.txt` seguían en producción sin regresión. Hallazgo nuevo: el `sameAs` del JSON-LD ya apuntaba a [linkedin.com/company/base-core](https://linkedin.com/company/base-core/), Instagram y Facebook — señal de entidad propia ya existente. Comparación GSC 14/9 vs. 18/9: Home 30→34 impresiones (pos 3.7→3.6), /contacto estable, /en 3→5 impresiones (pos 8.3→7.6) — movimiento leve, no evidencia causal en una ventana de 4 días. SERP y Perplexity sin cambio: Google seguía dominado por Base Power y BaseCore™ para "base core"/"basecore" sin contexto. 4 recomendaciones nuevas (#8-#11) quedaron sin implementar, esperando confirmar con Mariano.

**Ronda del 19/9 — Mariano avanza con las 5 recomendaciones pendientes, incluida #7 (reabierta a propósito):** **#8** — `disambiguatingDescription` agregado al JSON-LD `professionalServiceJsonLd` (`src/lib/metadata.ts`), sin nombrar a Base Power ni a BaseCore™. Commit `fbcad13`. **#7** (reabierta) — en vez de "también conocida como Base Core", Mariano reemplazó directo "Base Core Sales" por "Base Core" en la línea de copyright del footer (ES/EN), ya que el logo justo arriba sigue diciendo "Base Core Sales". Commit `2376868`.

**#9 — hecho (20/9).** Mariano importó la propiedad a Bing Webmaster Tools directo desde Google Search Console y confirmó el dominio dado de alta; el sitemap se cargó manual porque no se importó automático, quedando en "Processing".

**#11 — hecho (21/9), con copy final distinto al propuesto el 18/9, y una corrección de grafía en el camino.** En vez de una frase corta de desambiguación en los perfiles de empresa, Mariano definió un perfil completo de LinkedIn personal centrado en "Base Core" como marca (headline "Fundador de Base Core", about, role description) y la descripción de la página de empresa. **Corrección:** el copy pegado originalmente usaba "BaseCore" junto — la grafía que 8.1 había decidido evitar por colisión con BaseCore™ (geoceldas, marca registrada). Señalado antes de cerrar la tarea; Mariano corrigió en LinkedIn a "Base Core" separado. Alcance real distinto del pedido original (que apuntaba a perfiles de empresa con frase explícita de equivalencia con "Base Core Sales", no al perfil personal) — se cerró igual porque la estrategia completa de canales pasó a gestionarse desde el [Plan de Marketing/Social](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp).

Copy final usado (21/9) — LinkedIn personal (headline + about) y página de empresa

```
Headline:
  Fundador de Base Core | Te acompañamos en atraer, calificar,
  cerrar y fidelizar a tus clientes.

About:
  Luego de relevar y entender tu situación actual, te acompaño en
  ordenar la forma en que se consiguen, atienden y mantienen tus
  clientes. A partir de ahí, armamos juntos un plan claro, con pasos
  y fechas concretas, y acompaño su puesta en marcha de principio a
  fin, ajustando el rumbo con el tiempo.

  Incorporo a su vez, tecnología, incluida IA, para que estos
  procesos funcionen de forma más simple y ordenada, sin depender de
  una sola persona ni de la memoria de nadie.

  Si tu empresa vende de forma inconsistente, pierde clientes
  después de cerrarlos, o no tiene claro cómo conseguir más,
  escribime y coordinamos una charla sin costo para revisar tu
  situación.

Role description (Fundador, Base Core — perfil personal):
  En Base Core ayudamos a las pymes a ordenar su proceso comercial
  de punta a punta. El marketing ATRAE. La preventa CALIFICA. La
  venta CIERRA. La posventa FIDELIZA. Trabajamos las cuatro etapas
  como un proceso unificado, en vez de intervenciones aisladas de
  distintos proveedores. El trabajo combina diagnóstico y ejecución:
  un relevamiento gratuito inicial, un plan de ruta con plazos
  concretos y acompañamiento en la implementación, con sprints
  semanales y un project leader asignado. Sumamos tecnología e IA
  aplicada (CRM, automatizaciones, agentes) y damos acceso a
  BaseHub, nuestra plataforma propia de seguimiento de proyectos,
  sin costo adicional. Te invito a agendar un encuentro para
  conocernos!

Página de empresa (about):
  Mismo texto que el role description de arriba, en tono de "nosotros"
  ("Te invitamos" en vez de "Te invito").
```

**#10 — hecho (21/9).** Diagnosticado el 20/9 que Crunchbase bloquea cualquier cliente automatizado con un challenge de Cloudflare (403, Ray ID `a3dcc9e7ea25d717`), incluso a un browser real con JS habilitado — no un problema de reintentos, sino un bot-check sin solución automatizable. Mariano navegó `crunchbase.com/organization/base-core` directo con su propio browser (21/9) y confirmó que la ficha la ocupa **BaseCore™**, la empresa de geoceldas y estabilización de suelos de Scottsdale, Arizona (`basecore.co`) — la misma entidad de terceros ya identificada en el análisis de 8.1/8.2, no Base Power. Legal Name "BaseCore", CB Rank 1162954, rubro Manufacturing. No hay nada que reclamar: la ficha pertenece a otra empresa real en un rubro distinto, no a Base Core Sales.

**Cierre de 8.2 (21/9):** con las 11 recomendaciones resueltas (#1, #2, #4, #7, #8, #9, #10, #11 implementadas o confirmadas; #3 incorporada al análisis como decisión, sin acción; #5 y #6 documentadas para cuando se desbloqueen 4.1/4.3), la tarea pasa de En progreso a Hecho.

**Para qué sirve:** que cualquiera que conozca el negocio como "Base Core"/"BaseCore" (sin el "Sales") pueda encontrarlo igual, dentro de lo que es realmente posible frente a la competencia por el término — y de paso, un perfil de LinkedIn completo en vez de uno vacío, que ya era un objetivo de 4.6.

## Cronología completa

El registro día a día de cómo se llegó al estado actual — el "Por dónde seguir" original del Plan de SEO, movido acá en su totalidad para no repetirlo en el documento activo.

1. **4/9, vía la Auditoría General (Test 4 del Plan de Agentes):** código de 2.3 (eventos GA4), 1.17 (H1) y 1.19 (labels de formulario) resueltos y pusheados a `master`. Se reposicionó la sección de logos de clientes (4.4) y se corrigió `.agents/product-marketing.md`.
2. **Cerrado 4/9:** `generate_lead` y `file_download` marcados como eventos clave en GA4.
3. **4/9:** 4.5 (privacidad/GDPR) y 5.3 (gate del e-book) trasladados desde la Auditoría General.
4. **4/9, sincronía entre documentos:** 3.10 (H1 de `/ebook` decidido el 30/8, nunca implementado) y 7.9 (bug de `<br/>` en `/basehub`, señalado por `performance` pero nunca trasladado).
5. **4/9:** se suma 5.4, re-correr la auditoría SEO/accesibilidad completa.
6. **4/9, vía Test 5 del Plan de Agentes (coordinación multi-especialista):** 1.14 pasa de "Hecho" a regresión detectada — Mobile Performance cayó de 95 a 57-60. Se suma 1.21 (documento desincronizado) y 4.6 (decisión de no activar Instagram/LinkedIn de empresa). 4.4 se precisa: el hueco de prueba social B2B es específico de `/preventa`. A pedido explícito de Mariano, nada de esto se implementó ese día — quedó como tarea pendiente.
7. **5/9:** 1.14 pasa a recuperación en curso — 4 fixes de performance deployados uno a la vez (Turnstile diferido, `sizes` de logos, `preload:false` en fuentes, imagen de Tecnología a `next/image`). Mobile 57-60 → 88, LCP 10-13s → 3.6s.
8. **5/9, segunda tanda:** trade-off de desktop de la imagen de Tecnología resuelto (salto de `deviceSizes`, no `sizes`) y replicado en `PageHero` (5 de 6 páginas). INP instrumentado a GA4. JS legacy se decide ignorar; imágenes 2x-DPR y config global quedan en pausa.
9. **5/9, vía `seo-marketing`:** 7 quick wins de contenido/técnicos — 3.7, 3.8, 3.9, 3.10 (premisa corregida), 7.9, y 2 de los 3 puntos de 1.20.
10. **5/9, cierre de 1.20:** el redirect de doble salto del apex se resuelve con una Redirect Rule en Cloudflare, verificado con `curl` en un solo salto.
11. **5/9, auditoría 5.4 completa:** 1.21 cerrado del todo (3 casos nuevos de meta description); se redescubre 1.22 (bug de W Profesional, más 2 casos menores en Home/Contacto); se confirma que 1.18 también afecta a `/en/blog` y `/en/basehub`.
12. **5/9, cierre de 1.18:** reestructuración a route groups (`(es)`/`(en)`), verificado con `curl` y Playwright. Fase 1 queda sin ningún pendiente técnico abierto.
13. **5/9, cierre de 7.8:** publicado el séptimo post del blog, sobre "PMO". Fase 7 queda sin ningún pendiente propio.
14. **5/9, reorganización del documento:** el Plan de SEO pasó de un único documento de 58 tareas a esta separación entre tablero activo (Plan de SEO) e historial permanente (este documento) — a pedido de Mariano, para que el documento vivo sea fácil de leer y actualizar sin perder ningún registro.
15. **11/9, cierre de 1.14:** PSI real confirma Mobile 88 estable (TBT 40ms, el mejor de la serie) — se cierran de una tacada 4 PRs (redirect de GSC en `/sales/`/`/presales/`, bundle-split de `blogSlugPairs`, 3 de 4 fondos migrados a `next/image`, lazy-load de `LanguageBanner`/`EbookForm`) y se corrige en el momento un bug de encuadre que uno de esos mismos PRs había introducido sin querer en `/marketing` (mismo bug que ya se había revertido en Home, pero se pasó por alto que el commit traído también tocaba esa página). Fase 1 queda cerrada del todo. Detalle técnico completo consolidado en la tarea 1.14, arriba.
16. **13/9:** Mariano pide avanzar con 1.24, 1.25 y 5.3, y pasar 4.3/4.4 a Bloqueado (decide más adelante si avanza con backlinks y con el merge de testimonios). `performance` cierra 1.24 (retina) leyendo el código fuente de Next — `next/image` ya lo resolvía, sin acción de código — y confirma 1.25 (INP) genuinamente bloqueado por falta total de acceso a la API de GA4 en el repo, no solo por tráfico. `seo-marketing` cierra 5.3: PR #37 (email obligatorio, WhatsApp opcional en el gate del e-book), revisado y mergeado a producción el mismo día.
17. **13/9, auditoría de SEO y performance de alcance completo:** a pedido de Mariano, `seo-marketing` y `performance` auditan todo el sitio (ES/EN) con mirada fresca, apoyándose en un reporte real de PageSpeed Insights de Home. Resultado: 6 pendientes nuevos sumados al Plan de SEO (1.26 cap de `sizes` en el hero de Home, 1.27 `quality` de logos, 5.5 bug de `<br/>` en TechStageMatrix, 5.6 jerarquía de headings en BaseCore AI System, 5.7 H3 duplicado en ServiceCards, 5.8 `lastModified` de sitemap) — todos revisados por Mariano y aprobados para resolver a partir del 14/9. De paso, la auditoría de SEO detectó y corrigió acá mismo un gap de documentación: la tabla de keywords EN de 3.1 (ver nota arriba) decía "pendiente" de forma ambigua sobre contenido que en realidad ya estaba implementado en producción.
18. **14/9, cierre de los 6 hallazgos del 13/9:** `seo-marketing` resuelve 5.5-5.8 en un solo PR (#39, `3ecc125`) y `performance` resuelve 1.26-1.27 en otro (#40, `121df4f`) — ambos en preview de Vercel, revisados y aprobados por Mariano, y mergeados a `master` el mismo día. Deploy a producción confirmado (Vercel `success`). Fase 1 queda con una sola cola abierta (1.25, bloqueada por acceso a GA4); Fase 5 queda sin ningún pendiente puntual, solo las 2 tareas recurrentes (5.1, 5.2).
19. **14/9, sesión interrumpida por caída de la VM:** a media guía de acceso a GA4 para 1.25 (creación de proyecto GCP, service account `ga4-readonly`, generación de key), la sesión se corta. Mariano confirma que llegó hasta crear la service account y descargar la key, pero el archivo de key y una captura del chat no habían llegado a guardarse en disco todavía — se pierden con la caída. Retomado en una sesión nueva: se re-verifican los 4 primeros pasos (API habilitada, service account, key), confirmado indirectamente vía un `PERMISSION_DENIED` de la GA4 Data API (en vez de un error de "API deshabilitada") contra un Property ID de prueba.
20. **14/9, cierre de la Fase B de acceso a GA4:** Mariano completa el resto de la guía — Viewer access a la service account en la propiedad GA4, custom dimension de evento `metric_rating` registrada, y Property ID real (`550444799`). `scripts/seo/ga4.py` (creado en la sesión anterior, quedó sin commitear) corre contra datos reales: 381 eventos LCP, 374 CLS, 128 INP en 28 días. Se encuentra y corrige un bug menor del script (no reconocía el literal `"(not set)"` que devuelve GA4 para dimensiones sin dato, mostraba el desglose en blanco en vez de "(sin registrar)") — commit `c4aabf4`. 1.25 pasa de Bloqueado a En progreso: el acceso ya funciona, pero como la custom dimension no es retroactiva, todo el tráfico de los últimos 28 días (previo al registro de hoy) trae `(not set)` — falta acumular tráfico nuevo para tener rating real.
21. **14/9, Mariano pide unificar "Base Core" a "BaseCore" en todo el copy:** se abre la Fase 8. Antes de tocar nada se releva el código (46 hallazgos) y se analiza la implicancia — sin riesgo de ranking, pero con riesgo de fragmentar la entidad de marca si no se actualiza también LinkedIn/GA4/GBP. Mariano pide pausa (8.1).
22. **14/9, Mariano reporta que "Base Core" solo no lo encuentra en Google:** se abre 8.2. `seo-marketing` investiga con búsqueda real y encuentra que el término compite con Base Power (baterías domésticas, ronda Serie D de US$1.000M, producto lanzado en agosto llamado "Base Core"). Recomienda 7 acciones priorizadas; Mariano confirma avanzar con #1 (`alternateName` en JSON-LD), #2 (alias en `/llms.txt`) y #4 (chequeo mensual con `gsc.py`) — bloquea #7 (no tocar copy visible). #1 y #2 se implementan, pasan por PR #41 (código de sitio, no docs) y se mergean y verifican en vivo contra `basecoresales.com` el mismo día.
23. **14/9, cierre de 8.1:** antes de decidir del todo, Mariano pide una segunda vuelta de análisis con evidencia sobre qué forma es más probable que la gente busque. `seo-marketing` encuentra un dato nuevo: "BaseCore" (junto) ya es una marca registrada (BaseCore™, geoceldas, `basecore.co`) — pasar a esa forma no resuelve la colisión de nombre, la cambia por una potencialmente con implicancia legal de trademark. Sin evidencia real de que una forma sea más buscada que la otra. Mariano cierra 8.1 sin avanzar. Se abre 1.28 (Fase 1): seguimiento recurrente de performance con PageSpeed Insights, esperando el próximo análisis de Mariano.
24. **18/9, migración de 9 hallazgos desde la Auditoría Final de UX/diseño:** a pedido de Mariano, para no pisar el seguimiento con dos artifacts sobre el mismo tema, se suman al Plan de SEO 1.29-1.35 (Fase 1) y 3.11-3.12 (Fase 3) — el artifact de origen queda con esos ítems marcados como resueltos/migrados.
25. **19-20/9, Mariano reporta 3 hallazgos de UI/UX navegando el sitio, y el Plan de SEO se renombra:** se abren 1.39 (margen del cajón "Etapas"), 1.40 (overlay del hero de /marketing) y 1.41 (flip cards) — mismo rol que antes cubría la Auditoría Final, ya archivada. El documento pasa a llamarse "BaseCoreWeb: SEO y Performance" y suma un widget de revisión interactiva (OK/No/Sin revisar + aclaración) por hallazgo, con self-publish del propio artifact. Mariano revisa los 3: OK a 1.39 y 1.41 sin aclaración — se cierran acá, detalle completo arriba. 1.40 vuelve con nota ("sigue estando muy azul, corregir") — se compara 0.06/0.08/0.112 en vivo con Playwright y se baja el overlay a 0.08 (commit `cc7cb8e`), queda de nuevo en revisión en el Plan de SEO.
26. **18/9, sesión posterior — cierre de 1.28 (ronda del día) y 1.29:** `performance` investiga la regresión de LCP mobile detectada más temprano ese mismo día (3.8s → 5.0-5.2s) y la desestima con evidencia — 9 corridas frescas con cache-busting dan 3.9-5.5s con el mismo código, sin ningún commit del rango 14-18/9 que toque el critical path de Home; concluye que es ruido de laboratorio de PSI en la simulación de throttling mobile, no una regresión real, y corrige el criterio a 4-5 corridas frescas antes de declarar señal de ahora en más. De paso resuelve los 3 hallazgos que quedaban del 14/9 (`sizes` en TechnologyBlock.tsx/AboutLogoBlock.tsx, confirmación de que el logo del Header ya no necesita cambios, y el hallazgo de animación no compositada — mal atribuido al panzoom del hero, la traza real de Lighthouse apuntaba al botón de WhatsApp transicionando `bottom`, corregido). Commit `a00ddcc`. 1.28 sigue Pendiente por ser tarea recurrente. Aparte, `seo-marketing` cierra 1.29: confirma que el root layout de `(en)/en` resuelve el mismo segmento que su `page.tsx` (documentado en `node_modules/next/dist/docs`), mismo motivo por el que Next.js no aplicaba `title.template` ahí, e implementa el título completo hardcodeado. Commit `44cf2da`. Ambas verificadas y deployadas a producción. Después, `seo-marketing` cierra 1.30: agrega bloque `openGraph` propio a `/contacto` (title/description ya existentes de la página, imagen `breadcrumb.jpg` que ya usa como hero real) — confirma que el gap de `twitter` no es una regresión sino comportamiento site-wide (ninguna de las 8 páginas de referencia lo declara). Commit `91ad85c`. Después, `seo-marketing` cierra 1.31: corrige `Breadcrumb.tsx` para usar "Inicio" en vez de "Home" hardcodeado en las 9 páginas ES (texto visible + JSON-LD), mismo condicional por `lang` que ya usaba el componente para el `href`. Commit `5207030`. De paso encuentra el mismo bug en el nav principal del Header (`src/lib/site.ts`), fuera del alcance de 1.31 — se abre como 1.38 nueva. Mariano decide resolverla en el momento en vez de dejarla pendiente: `seo-marketing` aplica el mismo fix (label "Home"→"Inicio" en el array ES de `site.ts`), verificado sin regresión. Commit `65edacd`. 1.38 queda abierta y cerrada el mismo día. Después, `seo-marketing` cierra 1.32: agrega un H2 ("Últimos artículos"/"Latest articles") antes de la grilla de posts en /blog y /en/blog, mismo componente `SectionHeading` y patrón eyebrow+H2 que ya usa la sección "Metodología" de Home — preferido a bajar los H3 de las cards, que cumplen otra función semántica. Commit `b0be1e5`. Después, Mariano elige entre las dos alternativas de 1.33 ("BaseHub: Plataforma de Proyectos", 50 caracteres, sobre la de 47) por mantener "Plataforma" — `seo-marketing` implementa ese title más la description acortada a 155 caracteres en `/basehub` (ES), verificado en vivo sin regresión en H1/contenido. Commit `47bd5ab`. Después, Mariano cierra 1.34 sin cambio: el title de /en/presales ya mide 59 caracteres con sufijo, dentro del rango seguro — la única forma de bajarlo más sacrificaría una keyword validada, no se justifica. Después, `seo-marketing` cierra 1.35: amplía las 4 meta descriptions cortas al copy exacto que Mariano confirmó (158/151/154/150 caracteres), verificado sin regresión. Commit `f823002`. Con esto, la Fase 1 queda sin pendientes propios salvo 1.25 (en progreso) y 1.37 (esperando confirmación de Mariano en iPhone) — de las 9 tareas migradas el 18/9 desde la Auditoría Final (1.29-1.37), solo 1.37 sigue sin cerrar. Después, Mariano decide sumar "customer success" al H1 de /posventa (3.11, más peso de posicionamiento) en vez de dejarla solo en metadata — `seo-marketing` reescribe el H1 en ES y EN, confirmado contra el Mapa de Keywords, verificado sin perder la keyword primaria de la página. Commit `fb9cfba`. Después, `seo-marketing` cierra 3.12: suma "CRM para empresas"/"IA para empresas" (ES) y "AI for businesses" (EN) como frases exactas en párrafos ya existentes de /tecnologia, sin tocar title/description. Commit `de94b2e`. Con esto, Fase 3 queda cerrada del todo.
27. **20/9, cierre de 1.37:** Mariano prueba el fix del 18/9 en dos iPhones reales — el suyo (captcha resuelto normal) y el de su pareja (captcha quedó sin poder comprobarse, apareció el cartel de fallback a los ~12s, envió el formulario igual y ambos emails de notificación llegaron a la casilla). Confirma en vivo tanto el flujo normal como el escenario del conflicto de iCloud Private Relay que originó el hallazgo. De las 9 tareas migradas el 18/9 desde la Auditoría Final (1.29-1.37), no queda ninguna sin cerrar.
28. **21/9, cierre de 8.2:** Mariano revisó personalmente `crunchbase.com/organization/base-core` (bloqueado para cualquier cliente automatizado por un challenge de Cloudflare desde el 20/9) y confirmó que la ficha pertenece a BaseCore™ (geoceldas, Scottsdale AZ) — no a Base Power ni a Base Core Sales. Sin nada que reclamar, la tarea se cierra con las 11 recomendaciones resueltas.
29. **25/9, cierre definitivo de 1.37:** reabierta el 24/9 por un cartel de error falso. La causa estaba en el temporizador de `Turnstile.tsx` (no se cancelaba al verificar y arrancaba antes de que existiera el widget); Cloudflare y el servidor estaban bien. Fix verificado en local, en un preview aprobado por Mariano y en producción (commit `efc5266`). Además, una regla de rate limiting en Cloudflare cubre el hueco de envíos sin token, verificada en producción.

Historial Técnico SEO · Base Core · creado el 5 de septiembre de 2026, a partir del Plan de SEO original · actualizado el 25 de septiembre (1.37 cerrada del todo: causa del cartel falso en el temporizador de `Turnstile.tsx`, fix `efc5266` verificado en producción, y regla de rate limiting en Cloudflare para los envíos sin token) · antes, el 24 de septiembre (nota en 3.10: se sacó el título del hero de /ebook porque repetía el H1, tarea 1.7 de Mejora Estética Web, commit `f9e94d3`) · antes, el 21 de septiembre (consolidación del artifact Performance Web: se suman acá el detalle completo de 1.23-1.27, la cronología punto a punto de la regresión de Core Web Vitals, el cierre de los dos hallazgos que 1.14 tenía abiertos — Recruiting se queda en CSS a propósito, JS sin usar del bundle propio medido y sin acción — y una nota de método para la próxima medición de performance; el artifact Performance Web quedó sin contenido propio y se eliminó) · antes, el mismo día: 8.2 movida acá del todo — cerrada tras confirmar que la ficha de crunchbase.com/organization/base-core la ocupa BaseCore™, geoceldas de Scottsdale AZ, no Base Power; detalle completo de las 11 recomendaciones en la Fase 8) · antes, el mismo día: 4.6 movida acá — Mariano revierte la decisión del 5/9 de no activar canales secundarios; LinkedIn empresa, Instagram y Facebook pasan a desarrollo urgente, gestionado desde el Plan de Marketing/Social, no acá — primera tarea de una nueva Fase 4 en este documento · antes, el mismo día: 1.28 movida acá del todo — Mariano decidió no seguir persiguiendo el objetivo de mobile +90 en el score de laboratorio de PSI; queda reemplazada por 5.9 en el Plan de SEO, un chequeo mensual recurrente sin objetivo activo de score) · antes: 20 de septiembre (1.40 movida acá — el overlay de /marketing necesitó una 3ra ronda: medido el color de las 5 fotos de hero, la de /marketing resultó la más saturada de azul con diferencia, así que el overlay nunca fue la causa principal; fix real con filtro de color sobre la propia imagen + overlay neutro, confirmado por Mariano en un preview de Vercel y llevado a producción. De paso se retiró el widget de revisión interactiva del Plan de SEO — duplicaba el archivo y dejaba una línea sin poder leer, forzando un publish con `force` en otra sesión; el veredicto de revisión se registra por chat de acá en más) · antes, el mismo día: 1.37, 1.39 y 1.41 movidas acá — 1.37 confirmada por Mariano en iPhone real; 1.39 y 1.41 marcadas OK en el (todavía vigente en ese momento) widget de revisión interactiva del Plan de SEO, ahora "BaseCoreWeb: SEO y Performance" · antes: 18 de septiembre, sesión posterior (1.29-1.35, 1.38, 3.11 y 3.12 movidas acá) · antes, el mismo día: migración de 9 hallazgos SEO desde la Auditoría Final de UX/diseño (1.29-1.35, 3.11-3.12) · antes: 14 de septiembre (Fase 8 nueva, 8.1 cerrada — decisión de no unificar el naming a "BaseCore") · espejo de trabajo en `documentation/seo/historial-seo.md`