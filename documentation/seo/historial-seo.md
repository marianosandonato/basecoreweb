> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8
> - Última sincronización: 2026-10-04
> - Nota 4/10 (2): se suma 4.5 completa (privacidad y consentimiento); la 4.5.8 sigue como 4.8 en el Plan.
> - Nota 4/10: se suman 3.14 (post de leads B2B, 473a9e3) y 1.45 (margen del logo, ca5038d).
> - Nota 3/10 (3): 4.1 — sitio conectado con la ficha vía sameAs y telephone del JSON-LD (commit be5342b).
> - Nota 3/10 (3.13): se suma 3.13 (FAQs + FAQPage ES/EN, estadísticas con fuente, tuteo) con notas en 3.3 y 3.9.
> - Nota 3/10: 4.1 agregada a la Fase 4 (ficha de Google Business Profile publicada; la verificación de los cambios sigue en 4.7 del Plan de SEO).
> - Nota 28/9 (3): 1.44 agregada a la Fase 1 (slogan "Creando" en las meta descriptions y logo del schema con slogan en inglés, commit 61668f2); texto de la Home en 1.2 actualizado.
> - Nota 28/9 (2): 1.43 agregada a la Fase 1 (Twitter Card propia por página e idioma, commit ad44955).
> - Nota 28/9: el artifact pasa a llamarse "Historial Técnico WEB" y unifica todo el historial: suma completas la Auditoría Final Base Core (14-19/9, 25 hallazgos, prefijo AF) y la Mejora Estética Web (21-28/9, 20 tareas, prefijo ME; ME 1.8 descartada). Esos dos artifacts quedan para eliminar. El nombre de este archivo espejo no cambia, para no romper las referencias de los agentes.
> - Nota 26/9: 1.42 agregada (header desktop superpuesto en páginas sin hero, commit 30067e5).
> - Nota 25/9: 1.37 cerrada del todo — reapertura del 24/9 (cartel falso por el temporizador de Turnstile.tsx), fix efc5266 y regla de rate limiting en Cloudflare, con su verificación en producción.
> - Nota: nota agregada a 3.10 — el título del hero de /ebook se sacó el 24/9 (tarea 1.7 de Mejora Estética Web, commit f9e94d3) por repetir el H1; el H1 con la keyword no cambió.

Historial Técnico WEB

basecoresales.com · registro histórico

# Historial Técnico WEB

Registro unificado y permanente de todo el trabajo técnico ya resuelto en basecoresales.com — texto exacto, commits, hallazgos y el razonamiento detrás de cada decisión. Reúne tres fuentes: las tareas cerradas del [BaseCoreWeb: SEO y Performance](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT) (Fases 1 a 8), la [Auditoría Final](#auditoria-final) de UX/diseño (14-19/9) y la [Mejora Estética Web](#mejora-estetica) (21-28/9). Las dos auditorías se sumaron completas el 28/9, a pedido de Mariano, para poder eliminar sus artifacts. Este documento no se usa para saber "qué falta": para eso está el tablero activo, que solo detalla lo pendiente.

← [Volver a BaseCoreWeb: SEO y Performance](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT)

[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)
[Fase 8 · Base Core en buscadores](#fase8)
[Auditoría Final (14-19/9)](#auditoria-final)
[Mejora Estética Web (21-28/9)](#mejora-estetica)
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
            marketing. Creando bases productivas.
            (hasta el 28/9 decía "Creamos", ver 1.44)

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

1.42 — Header desktop superpuesto en páginas sin hero (blog, legales, 404)

Hecho · en producción 26/9

Encontrado el 26/9 al verificar con Playwright las páginas legales nuevas de la 4.5.4, y ya presente en producción: en desktop (≥1200px) el `Header` es un overlay absoluto pensado para ir sobre un hero oscuro (barra A navy de 58px + barra B con el logo blanco de 200×200, en y≈61-261). En las páginas sin hero (artículos y listado del blog, las 404 y las páginas legales nuevas), esa zona quedaba transparente. El logo, invisible sobre el fondo blanco, pintaba sus píxeles encima del contenido y corrompía las primeras letras: el "¿" del H1 y el "Por" de la firma en `/blog/que-crm-elegir-para-pyme`, y en las legales la "Ú" de "Última actualización" y el primer H2. Además, la franja navy del `Breadcrumb` "bar" quedaba tapada por la barra A. Confirmado con `document.elementsFromPoint`: sobre el primer carácter del H1 aparecía el `IMG` del logo del header.

**Fix (`web-lead`):** nueva variante `"solid"` en `src/components/Breadcrumb.tsx`. Por debajo de 1200px es idéntica a `"bar"`. Desde 1200px reserva 261px reales en el flujo del documento con fondo navy, así el logo queda sobre navy (igual que en las páginas con hero), el contenido arranca debajo y las migas de pan quedan visibles abajo a la derecha. Aplicada en `BlogPostPage.tsx`, `BlogListPage.tsx` y las tres 404 (`(es)/not-found.tsx`, `(en)/en/not-found.tsx`, `global-not-found.tsx`). Las páginas legales la usan desde la 4.5.4. Las páginas con hero y el header mobile no cambian.

**Verificación:** Playwright a 1366, 1920 y 390px y en el corte de 1199/1200px, con capturas de antes y después del artículo del blog, y de control en Home, `/preventa` y `/contacto`, sin cambios. `elementsFromPoint` sobre el primer carácter del H1 ya no devuelve ninguna imagen del header. `tsc`, `eslint` y `build` limpios. Separado de la 4.5.4, que sigue en preview, y subido solo, a pedido de Mariano. Commit `30067e5`, pusheado a `master`. Verificado en vivo en producción con la misma prueba de `elementsFromPoint`.

**Para qué sirve:** que el blog, las 404 y las páginas legales se lean bien en desktop, con el logo visible, en vez de tener las primeras letras pisadas por una imagen invisible.

1.43 — Twitter Card y title por defecto en español en las páginas /en/\*

Hecho · en producción 28/9

Encontrado el 28/9 en la auditoría de las páginas en inglés ([ME 1.13](#me-1-13)). En **todas** las páginas, `twitter:title` y `twitter:description` salían con el texto genérico del home en español ("Base Core – Consultoría Comercial y Marketing"), aunque el `<title>` y el `og:*` de cada página fueran propios. Y los 404 en inglés mostraban la pestaña y la vista previa en español.

**Causa:** `buildRootMetadata()` (`src/lib/metadata.ts`) fijaba el bloque `twitter` con `site.name`/`site.description` (el objeto en español) para los dos layouts raíz, y ninguna página declara su propio `twitter`. Leyendo el código de Next 16 (`postProcessMetadata` en `next/dist/lib/metadata/resolve-metadata.js`): cuando el bloque `twitter` no trae título, descripción o imagen, Next los copia del `openGraph` de cada ruta. El bloque fijo lo impedía. Es el mismo comportamiento que había quedado anotado en la 1.30 (18/9) como "twitter heredado del Home en todo el sitio".

**Implementado:** el bloque `twitter` de la raíz queda solo con `card: "summary_large_image"`, así cada página comparte con su propio título, descripción e imagen, en su idioma. Además, el layout de `/en` usa `siteEn` como respaldo (title por defecto, description y `og:*`), lo que arregla los 404 en inglés.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Comparadas 22 páginas de un build local contra producción: el `<title>` y el `og:*` de todas las páginas normales no cambiaron; `twitter:title` pasó de "Base Core – Consultoría Comercial y Marketing" en las 22 a su propio título (por ejemplo "Prospección de Clientes B2B" en `/preventa` y "B2B Lead Generation & Appointment Setting" en `/en/presales`); `/en/nope` y `/en/blog/nope` pasan a "Base Core – Commercial Consulting & Marketing"; el 404 en español no cambió. Commit `ad44955`, pusheado a `master` con el OK de Mariano, y verificado en producción en `/preventa`, `/en/presales`, `/en/contact`, un post en inglés y `/en/nope`.

**Para qué sirve:** que al compartir cualquier página en X/Twitter (o en cualquier lector de esas etiquetas) la vista previa muestre esa página y en su idioma, no la del home en español.

1.44 — Slogan "Creamos" en las meta descriptions y logo del schema con el tagline viejo

Hecho · en producción 28/9

Encontrado el 28/9 al ordenar los logos originales para las piezas de redes (prueba de Instagram con Claude Design, [Marketing Strategy](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp) 4.1). El slogan oficial en español es **"Creando bases productivas"**: así lo dicen los logos originales en español y el hero de la Home (`src/app/(es)/page.tsx:161`). Pero quedaban tres lugares con "Creamos", ninguno visible en la página: la meta description de la Home (`src/app/(es)/page.tsx:27`), la descripción general del sitio (`src/lib/site.ts:11`, que usan las páginas sin descripción propia y el `description` del schema) y el logo del JSON-LD `ProfessionalService` (`src/lib/metadata.ts:65`, `LOGO-BASE-CORE-SALES-CON-SLOGAN.png`), que decía "CREAMOS BASES PRODUCTIVAS". Ese logo era además blanco sobre fondo transparente: sobre el fondo blanco que usa Google casi no se habría visto.

**Decisión de Mariano (28/9):** corregir los dos textos a "Creando", y usar en el schema el logo con el slogan en inglés ("Building productive foundations"), el mismo que decidió el 24/9 para todas las piezas.

Cambios aplicados

```
src/app/(es)/page.tsx:27   "... marketing. Creamos bases productivas."
                            → "... marketing. Creando bases productivas."
src/lib/site.ts:11         "... marketing. Creamos bases productivas."
                            → "... marketing. Creando bases productivas."
src/lib/metadata.ts:65     logo: /images/LOGO-BASE-CORE-SALES-CON-SLOGAN.png
                            → /images/logo-base-core-building-productive-foundations.png
public/images/             nuevo PNG 700×700, logo azul con slogan en inglés
                           centrado sobre fondo blanco (77 KB), generado del
                           original de Mariano; el PNG viejo se borró (sin uso)
```

**Verificado:** `next build` limpio. Contra un build local: la meta description de la Home termina en "Creando bases productivas.", el `logo` del JSON-LD apunta al archivo nuevo en `/` y en `/en`, y la imagen responde 200 como PNG. Sin otras apariciones de "Creamos bases" en `src/`. Preview de Vercel (`basecoreweb-cx8smpiqd-base-core.vercel.app`). Commit `61668f2`, pusheado a `master` con el OK de Mariano, y verificado en `www.basecoresales.com`: descripción nueva, logo nuevo en el JSON-LD y la imagen en 200.

**Para qué sirve:** que el slogan en español sea uno solo en todo lo que lee Google, y que el logo que Google puede mostrar junto al nombre de la empresa se vea sobre fondo blanco y coincida con el de redes.

1.45 — Logo sin margen inferior en la franja navy de las páginas sin foto

Hecho · en producción 4/10

Reportado por Mariano el 3/10, navegando el sitio: en el blog (listado y posts), las páginas legales y las 404, la franja navy de arriba (variante `"solid"` de `Breadcrumb.tsx`, ver 1.42) termina justo donde termina el logo del header, así que el logo queda pegado al recuadro blanco del contenido, mientras que el breadcrumb de la derecha sí tiene 20px de aire abajo. Pidió darle al logo el mismo margen que el breadcrumb, alargando la franja, y revisar todo el sitio.

**Medido (Playwright, 1440px):** logo de y 61 a 261, franja hasta 261 (margen 0), breadcrumb con `pb-[20px]` (su texto terminaba en 241). Revisadas también las páginas con foto: /contacto y /ebook ya tienen unos 19px bajo el logo (hero de 280px), y /preventa, /tecnologia y el resto tienen la foto debajo, sin recuadro blanco pegado. Por debajo de 1200px el header va en el flujo y no hay superposición. El problema estaba solo en la variante `"solid"`, así que un cambio la arregla en todas sus páginas (ES y EN).

**Implementado:** la franja de escritorio pasa de `min-[1200px]:h-[261px]` a `h-[281px]`. El breadcrumb se queda con su `pb-[20px]`, así que baja 20px y su texto termina en y 261, a la misma altura que el borde inferior del logo: los dos quedan con 20px de margen y alineados abajo.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Contra un build local a 1440px: logo hasta 261, breadcrumb hasta 261, franja hasta 281; tablet (1100px) sin cambios. Mariano lo vio en el preview de Vercel junto con la 3.14. Commit `ca5038d`, pusheado a `master` con el ok de Mariano.

**Para qué sirve:** que el logo no quede pegado al contenido en las páginas sin foto, con el mismo aire que ya tenía el breadcrumb.

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

El sitio técnicamente listo para posicionar, ampliado con las palabras que usan los clientes potenciales. Cerrada el 18/9 y reabierta el 2/10 con 3.13 (cerrada el 3/10) y 3.14 (cerrada el 4/10), las dos abajo. Vuelve a quedar cerrada del todo.

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

**Nota posterior (3/10, tarea 3.13):** salvo McKinsey, ninguna de estas cifras tenía una fuente verificable. Se reformularon con fuente enlazada (HBR "5 a 25 veces" en Posventa, 6sense 2024 "81%" en Marketing), se enlazó McKinsey, y se quitaron las cifras de Venta y Tecnología. Detalle en 3.13.

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

**Oportunidad separada, no un defecto:** schema `FAQPage` sigue ausente en páginas de servicio — necesita contenido real, queda para fase futura. *Resuelto el 3/10 en 3.13.*

3.10 — H1 de /ebook y /en/ebook

Hecho · 5/9, premisa corregida

**Premisa original incorrecta:** el H1 real (`EbookSection.tsx`) ya tenía el texto nuevo desde el 30/8. El gap real estaba en el título decorativo del `Breadcrumb` (se renderiza como `<p>`, no H1).

Título de Breadcrumb actualizado

```
ES nuevo: Guía gratis: cómo armar tu proceso de ventas desde cero
EN nuevo: Free guide: how to build a sales process from scratch
```

**Para qué sirve:** cierra el gap entre lo investigado y lo que el sitio muestra.

**Nota posterior (24/9):** el título del hero se sacó en ES y EN en la tarea 1.7 de [Mejora Estética Web](#me-1-7) (ME 1.7, más abajo en este documento) (commit `f9e94d3`). Repetía textualmente al H1 de la sección de abajo, así que la misma frase se veía dos veces seguidas en la primera pantalla. El hero de /ebook quedó igual que el de /contacto (foto + breadcrumb). **El H1 con la keyword no cambió**, así que el objetivo SEO de esta tarea se mantiene: el título del Breadcrumb era un `<p>` decorativo, sin peso de encabezado.

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

3.13 — Preguntas frecuentes + schema FAQPage en las páginas de servicio

Hecho · ES y EN en producción 3/10

Abierta el 2/10 a partir de la segunda ronda de 5.10: "consultoría comercial para pymes" no traía ninguna página de servicio ni en Perplexity ni en Google (Search Console: 0 impresiones con "consultoría" en 90 días; el blog sí aparecía, posiciones 11-47). Las páginas de servicio vendían pero respondían poco, y buscadores e IA citan respuestas directas de 2-4 líneas. Es además la oportunidad que 3.9 había dejado anotada: `FAQPage` "necesita contenido real".

**Proceso:** `seo-marketing` redactó el 2/10 un borrador de 36 preguntas a partir del contenido real del sitio, con marcadores donde faltaba un dato (precio, plazos, resultados). El 3/10 Mariano respondió con selector, una pregunta a la vez; con eso `seo-marketing` escribió el texto final y la sesión principal lo implementó. Preview de Vercel → ok de Mariano → producción, primero en español y después en inglés.

Decisiones de Mariano (3/10)

```
Formato   Acordeón <details>/<summary> nativo, renderizado en el
          servidor, todas las preguntas cerradas, antes del bloque
          de contacto. Mariano prefirió el acordeón a la lista
          abierta; se confirmó que Google indexa el contenido
          plegado con el mismo peso, y el texto viaja en el HTML
          inicial (los bots de IA casi no ejecutan JS).
Voz       Tuteo (y después, todo el sitio ES en tuteo, ver abajo).
 1 Precio      Sin precio ni modelo de cobro: "El presupuesto se
               define en la propuesta comercial que enviamos después
               del relevamiento inicial, porque depende del alcance".
 2 Plazos      Sin cifras, volúmenes ni tiempos de resultado
               prometidos; los plazos van en el plan de trabajo.
 3 Gratuito    Corrección de Mariano: lo gratuito es el RELEVAMIENTO
               INICIAL (primera reunión: viabilidad + propuesta de
               valor, después propuesta comercial), sin compromiso.
               Los diagnósticos (comercial, tecnológico, de equipo,
               de marketing, según el proyecto) son parte del
               proyecto contratado, incluidos en el servicio.
               Nombre mixto: botones "Diagnóstico gratuito"
               (keyword del Mapa) y la FAQ explica qué es.
 4 Cliente     Pymes y empresas medianas B2B, sin mínimo.
 5 Geografía   Remoto, España y Latinoamérica (areaServed del schema
               suma "Latinoamérica").
 6 Preventa    La ejecuta el equipo del cliente; Base Core diseña el
               modelo, arma el equipo y lo capacita.
 7 Gerente     Complementa, no reemplaza; al cierre, traspaso al
               equipo o abono de mejora continua.
 8 Posventa    El equipo "se puede sumar según el diagnóstico".
 9 Marketing   La pauta la paga el cliente a cada plataforma, sin
               mínimos; no se menciona permanencia.
10 Tecnología  Licencias a nombre del cliente; el software a medida
               queda del cliente.
```

Implementado

```
ef58591 (ES, 3/10)
- FaqSection.tsx + src/content/faqs.ts: una sola fuente para el
  texto visible y el JSON-LD FAQPage (el schema quita el markdown
  de los enlaces). 36 preguntas: Home, /preventa, /venta,
  /posventa, /marketing, /tecnologia.
- Márgenes (pedido de Mariano tras el primer preview): sin padding
  inferior, porque ContactSection aporta el suyo (antes sumaban
  ~210px); en Home sin padding superior porque el blog aporta el
  suyo. Medido: 90/120 px en escritorio en las páginas de
  servicio, 90/90 en Home, 65-70 en celular.
- "Auditoría gratuita" / "Agendar relevamiento" → "Diagnóstico
  gratuito" en todo el sitio ES (7 lugares).
- "BaseCore AI System" → "Base Core AI System" (ES y EN), la
  grafía que 8.1/8.2 decidió evitar por BaseCore™.
- Estadísticas sin fuente (ver nota en 3.3): /posventa HBR "5 a 25
  veces" enlazada y 60-70% quitada; /venta sin 80%/44%;
  /tecnologia sin "más de la mitad"; /marketing 6sense 2024
  (81% / ~70%) enlazada; /preventa McKinsey enlazada ("win
  rates"). Mismo ajuste en el post de churn ES/EN. Cifras de
  McKinsey y 6sense verificadas por Mariano en su navegador.
- ContactSection: columnas alineadas arriba (md:items-start) en
  todas las páginas, pedido de Mariano (la columna izquierda
  quedaba más abajo que el formulario).

4c9d316 (EN + tuteo, 3/10)
- src/content/faqs.en.ts: mismas 36 preguntas en /en,
  /en/presales, /en/sales, /en/post-sales, /en/marketing,
  /en/tecnologia, con keywords EN del Mapa (commercial
  management, customer success, AI for businesses, CRM
  consulting, appointment setting). "Free audit" → "Free
  diagnostic" en /en; los botones EN siguen "BOOK A DISCOVERY
  CALL".
- Todo el sitio ES pasa de voseo a tuteo neutro (decisión de
  Mariano: el voseo suena raro en España): 41 líneas en 17
  archivos (páginas, formularios, banner de cookies, Turnstile,
  errores de API, 4 posts), más "acá" → "aquí". Legales sin
  voseo, sin tocar. Registro línea por línea en
  documentation/seo/borradores/tuteo-cambios.md. Pendiente
  fuera del código: el PDF del e-book ES podría tener voseo.
```

**Verificado:** `tsc`, `eslint` y `next build` limpios en los dos commits. Contra un build local: las 12 páginas traen 6 `<details>` cerrados con las respuestas en el HTML inicial y un `FAQPage` con el texto idéntico al visible; las páginas EN sin FAQs antes del segundo commit; sin voseo en el HTML servido. En producción: `FAQPage` en `/`, `/venta`, `/tecnologia` y `/en/sales`, "Descubre cómo continúan los ciclos" y "déjanos" en vivo. Borradores y fuentes de las estadísticas en `documentation/seo/borradores/`.

**Nota de expectativa:** desde 2023 Google solo muestra el rich result de FAQ a sitios de gobierno y salud; el valor es el texto citable por Google e IA. Se mide en la próxima ronda de 5.10 (principios de noviembre) con la query "consultoría comercial para pymes". Mariano pidió indexación de las URLs en Search Console el 3/10.

**Para qué sirve:** dar a las páginas de servicio respuestas citables para las búsquedas de contratación, que no aparecían en ningún motor.

3.14 — Refuerzo del post de leads B2B

Hecho · ES y EN en producción 4/10

Abierta el 2/10: `/blog/como-calificar-leads-b2b` fue la única citación en Perplexity de la ronda 1 de 5.10 (5/9) y no apareció en la ronda 2 (2/10). Sin reescribir el post: una respuesta directa al principio, una tabla comparativa de los métodos que ya trata y algunas preguntas frecuentes. Borrador del 2/10 en `documentation/seo/borradores/3-14-refuerzo-leads-b2b.md` (estaba en voseo; se pasó a tuteo).

**Proceso:** primer preview el 3/10 con el borrador aplicado por la sesión principal. Mariano pidió cambios y, desde esta tarea, una regla nueva para todo el blog: el contenido lo escribe el agente de copywriting (`seo-marketing`, con los skills de copy) y lo coordina y revisa `web-lead` antes del preview. Así se hicieron las dos rondas siguientes (dos pasadas de cada agente).

Decisiones de Mariano (3-4/10)

```
B Tabla      Tabla real (bloque nuevo "table"), no lista. Estilo
             igual a la tabla de las páginas legales.
  Columna    "Equipo y ticket" sacada: seo-marketing no encontró
             consenso verificable (HubSpot, Salesforce, Gong); los
             cortes en US$ son reglas de blogs de proveedores. Queda
             Método / Qué evalúa / Cuándo conviene.
  Criterio   Fuera "tamaño de equipo" como criterio para elegir el
             método (misma falta de fuente): H2 "Cómo elegir un
             método según tu ciclo de venta y la cantidad de
             decisores", meta, párrafo, bullets, respuesta corta y
             FAQ. Analizadas las keywords antes de decidir: ninguna
             frase en juego estaba en el Mapa de Keywords y "ciclo
             de venta" se mantiene.
  MEDDIC     Seis elementos: cuatro sin equivalente en BANT
             (Metrics, Decision criteria, Decision process,
             Champion) y dos que profundizan (Economic buyer,
             Identify pain). Antes decía "tres capas".
  BANT       "nació en IBM hace más de cinco décadas" → "se
             popularizó desde IBM hace décadas" (sin fuente firme).
  Links      Dos links contextuales por idioma a /preventa y
             /en/presales.
  Fecha      Sin dateModified: queda la fecha original (viene una
             tanda de 6 posts nuevos).
```

Implementado (commit 473a9e3)

```
src/content/blog/types.ts   bloque "table" (caption, headers, rows;
                            la 1.ª celda de cada fila es th scope=row)
src/components/BlogPostPage.tsx
                            render de la tabla (estilo de LegalPage,
                            caption sr-only, contenedor con scroll
                            horizontal enfocable con teclado) y p/ul
                            por renderRich (links [texto](url))
Post ES y EN                "Respuesta corta" al inicio, H2 + tabla
                            comparativa antes de "Cómo elegir", 3 FAQs
                            al final (h2 + p con pregunta en negrita),
                            MEDDIC, BANT, criterio y links de arriba;
                            lectura 8 → 9 min; em dashes del EN
                            limpiados; "implicaciones" (no
                            "implicancias")
```

**Verificado:** `tsc`, `eslint` y `next build` limpios. Contra un build local: tabla a 1440px y a 390px (scroll dentro del recuadro, sin scroll horizontal de la página), meta ES 155 y EN 151 caracteres, H2 nuevo en los dos idiomas, links a `/preventa` y `/en/presales`, sin voseo. Previews de Vercel `basecoreweb-gbv2fhuhh` y `basecoreweb-531j7woo6`; Mariano aprobó y pidió producción el 4/10. Pusheado a `master`.

**Pendiente fuera de esta tarea:** que el refuerzo recupere la cita es hipótesis, no dato; se mide en la próxima ronda de 5.10 con la query 1 exacta. Mejora opcional anotada por `web-lead`: las FAQs como H3 (y `FAQPage` en el post) pedirían un bloque nuevo en el renderer.

**Para qué sirve:** darle al post que ya se había citado una respuesta directa y una comparativa escaneable, el formato que más citan Google y los motores de IA.

Fase 4

## SEO local y autoridad

Cerradas 4.1, 4.2, 4.5 (4/10) y 4.6. El resto (4.3, 4.4, 4.7, 4.8) sigue activo o Bloqueado, con su detalle en el [Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT).

4.1 — Google Business Profile

Hecho · ficha publicada, cerrada 3/10 (sigue en 4.7)

**3/10: ajustes 1-4 retenidos por Google, se evaluó revertirlos (al final se dejaron cargados, ver Cierre).** Mariano hizo los 6 ajustes; en la vista pública (Google y Maps) solo salieron las fotos (5). Dirección, horario, categoría y sitio siguen con los datos viejos: Google los retiene hasta una nueva verificación y el único método que ofrece es el **video en vivo desde la app**, imposible desde Australia (no se puede subir un video grabado y, filmado lejos de Buenos Aires, lo rechazarían; cada rechazo reduce los métodos disponibles y suma riesgo de suspensión). **Decisión de Mariano: opción 3**: volver a los valores originales en los campos clave (dirección visible, categoría "Asesor", sitio sin UTM) para que la ficha siga verificada y publicada; se quedan las fotos y, si sale, el horario. Google no documenta que revertir cancele el pedido de verificación; en la práctica suele desaparecer. Riesgo aceptado: la dirección del departamento queda visible sin atender clientes ahí (contra las pautas, riesgo bajo de suspensión). **Descartado borrar la ficha y crear otra:** una ficha nueva arranca sin verificar (pediría el mismo video), borrar una ficha verificada no tiene vuelta atrás, y crear fichas repetidas para el mismo negocio y teléfono es señal de spam para Google. Los ajustes 1-4 completos se retoman cuando Mariano esté en Argentina (video en el lugar) o con alguien de confianza en Buenos Aires como administrador de la ficha. Las reseñas (6) siguen, no dependen de la verificación.

**Desbloqueada el 2/10.** La verificación de Buenos Aires de agosto había sido rechazada (Google pedía cartelería y video en vivo desde el local). Mariano creó una ficha nueva y la verificó. Ficha pública: Google kgmid `/g/11zy0wvdzb` (link para compartir `share.google/VkfGjWpjxH2XQaTk1`). En Maps aparece una sola ficha "Base Core", sin duplicado visible de la vieja.

**Revisión del 2/10 (vista pública, Google + Maps):** bien el nombre "Base Core", el teléfono +54 9 11 5564-3798 (coincide con el sitio y WhatsApp), el sitio web y la descripción. Mariano avisa que Google le pide **verificar de nuevo** (pasa al editar datos clave como dirección o categoría): completar esa verificación en esta misma ficha, no crear otra.

Ajustes propuestos el 2/10 (los hizo Mariano en el panel el 3/10)

```
1 Dirección visible: La Pampa 3000 6 c (su departamento). Google
  pide ocultarla si no se atiende a clientes ahí (riesgo de
  suspensión) → "Mostrar la dirección": desactivado + Zona de
  servicio (CABA, Gran Buenos Aires, Argentina).
2 Horario: lunes a sábado 6-22 h (parece cargado en hora de
  Australia). Pasar a un horario real de Argentina, p. ej. lunes
  a viernes 9-18 h. Definir con Mariano.
3 Categoría: "Asesor"/"Consultant", genérica. Principal tipo
  "Consultor empresarial" / "Consultor de gestión empresarial" +
  secundaria "Consultor de marketing" (nombres exactos según el
  panel).
4 Sitio web: basecoresales.com sin www ni UTM → cambiar a
  https://www.basecoresales.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp
  para distinguir en GA4 las visitas desde la ficha.
5 Fotos: ninguna. Logo, portada y fotos de Mariano (Windows:
  DISEÑO/BRANDKIT/LOGOS y FOTOS BANCO/FOTOS MIAS).
6 Reseñas: ninguna. "Pedir reseñas" a 3-5 clientes (cruza con 4.4).
Opcional: Servicios (5 ciclos con link a su página) y
publicaciones periódicas.
```

**Cierre (3/10):** Mariano completó la carga de los 6 ajustes. Como Google retiene los cambios de datos clave hasta una nueva verificación, al principio se decidió revertirlos (opción 3). Después quedó claro que la ficha sigue publicada aunque los cambios estén pendientes, y que las fotos también esperan la validación (solo salió el logo). Mariano decidió dejar todo cargado y cerrar 4.1 con la ficha publicada. La verificación por video en vivo desde Buenos Aires, imposible desde Australia, pasa a la tarea nueva **4.7 — Validar Google Business Profile**, Bloqueada, en el tablero activo. Descartado borrar la ficha y crear otra con los datos correctos.

**Sitio conectado con la ficha (3/10, commit `be5342b`):** el JSON-LD `ProfessionalService` suma la ficha de Maps al `sameAs` (`https://maps.google.com/?cid=8098302433778327757`, verificado que abre la ficha de Base Core) y `telephone` `+54 9 11 5564-3798`, el mismo de la ficha. Sin dirección, a propósito. URL en `site.googleBusinessProfileUrl` (`src/lib/site.ts`). tsc, eslint y build OK; verificado en producción en Home, `/en`, `/preventa` y `/blog`. Sin cambio visible.

**Para qué sirve:** aparecer en el mapa y en el bloque local de resultados; señal fuerte de "negocio real" para quien investiga antes de contratar.

4.5 — Política de privacidad y consentimiento (GDPR/LOPDGDD)

Hecho · en producción 1/10, cerrada 4/10 (sigue en 4.8)

**Cierre (4/10), decisión de Mariano:** la 4.5 pasa a Hecho; el paquete está en producción desde el 1/10 (commit `befbf58`). Lo único abierto, la subtarea 4.5.8 (correcciones a la presentación de la base en la AAIP), pasa a ser la tarea **4.8** del Plan de SEO, En progreso hasta que la AAIP apruebe la presentación.

**1/10: paquete PUBLICADO en producción (commit `befbf58`), verificado en vivo.** Mariano revisó el preview y pidió un solo cambio: cursor de mano en "Configurar cookies" del footer (aplicado también a los botones del banner). Solo queda 4.5.8 (correcciones a la presentación de la AAIP); al cerrarla, el detalle de 4.5 pasa al Historial Técnico WEB.

**1/10: pendientes de 4.5.6 resueltos y preview listo.** Contador y abogado dieron el ok, las propiedades de HubSpot existen, el responsable y la base quedaron inscriptos en la AAIP y el párrafo de Cloudflare Web Analytics está redactado. Preview del paquete completo, al día con master: `basecoreweb-357m4aogb-base-core.vercel.app`. Solo falta el ok de Mariano para publicar (4.5.7). Quedan correcciones menores a la presentación de la AAIP (4.5.8), que no bloquean la publicación.

**En suspenso (26/9), por decisión de Mariano.** Todo el paquete de privacidad queda armado y sin publicar hasta que Mariano dé el ok: banner de cookies (4.5.3, retirado de producción con el revert `1ead6e8`), páginas legales, links, aviso bajo los formularios y checkbox de marketing (4.5.4, preview revisado y aprobado por Mariano el 26/9). Se publica todo junto, en un solo paso, cuando estén resueltos los pendientes de 4.5.6. Quedan en producción, fuera del paquete: el arreglo del header (1.42, `30067e5`) y Cloudflare Web Analytics (decisión: mantenerlo).

Cero rutas legales, cero menciones a privacidad/GDPR, ningún checkbox de consentimiento. En España, GDPR (Art. 13) + LOPDGDD exige aviso de privacidad y consentimiento inequívoco para procesar datos de formularios, y la LSSI (art. 22.2) exige consentimiento previo para cookies no necesarias — obligación legal, no recomendación.

**Desbloqueada (25/9) a pedido de Mariano**, porque traba la 5.1 (formularios → HubSpot), la 5.3 (consentimiento) y la 6.2 (doble opt-in) del [Marketing Strategy](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp). Reemplaza la decisión anterior ("nada por ahora, ni el andamiaje técnico"). Decisiones de Mariano:

· **Vía:** borrador propio basado en un inventario real de tratamientos y en las guías de la AEPD (Facilita RGPD, guía de cookies), marcado como borrador. Antes de publicarlo lo revisa un abogado, o Mariano decide publicarlo bajo su criterio. No es asesoría legal.
· **Responsable del tratamiento:** Mariano Sandonato, persona física, CUIT y domicilio en CABA (datos en `documentation/legal/`); se cambia si se constituye una sociedad (ver 8.3).
· **Enfoque (25/9, noche): base 100% en Argentina**, sin radicación en España por ahora. Marco principal: Ley 25.326 + Decreto 1558/2001, con la AAIP como autoridad de control; el RGPD queda como sección secundaria para visitantes del EEE. El banner de cookies se mantiene como buena práctica y por los visitantes de la UE.
· **Cookies:** banner con Aceptar / Rechazar / Configurar al mismo nivel, y GA4 se carga solo después de un "Aceptar". Se acepta perder los datos de GA4 de quien rechaza o ignora el banner (típico 30-50%); Search Console no se afecta.

Inventario de tratamientos (25/9, leído del código)

```
Formularios (ContactForm, EbookForm → /api/contact, /api/ebook):
nombre, apellidos, empresa, servicio, WhatsApp, email, mensaje
→ email vía Resend (EE.UU.) + HubSpot (en producción desde
  2193af7, 5.1 del Marketing): suma UTM leídos de la URL, sin
  cookies; consentimiento de marketing solo si se tilda el checkbox
Turnstile (Cloudflare): anti-bot, necesario → sin consentimiento
Cookie de idioma (LanguageBanner/LanguageSwitcher): técnica → exenta
GA4 G-0NRE1KWMBM (GtmLoader.tsx): analítica → HOY carga para todas
las visitas: el banner que lo condiciona (eed9e24) se retiró de
producción el 26/9 (1ead6e8) y vuelve con el paquete
Cloudflare Web Analytics: medición sin cookies, inyectada desde el
panel de Cloudflare (no está en el código). Se mantiene; hay que
declararla en la política antes de publicar
Hosting: Vercel (EE.UU.)
Sin píxeles de Meta ni de LinkedIn.
```

Subtareas

```
4.5.1  Inventario de tratamientos                          Hecho (25/9)
4.5.2  Borrador de política de privacidad y cookies ES/EN + Hecho (25/9)
     primera capa de formularios → documentation/legal/
     (placeholders del titular + [VERIFICAR] para el revisor)
4.5.3  Banner de cookies + Consent Mode v2 básico, GA4 solo En suspenso
     tras "Aceptar", link "Configurar cookies" en el footer.
     Estuvo en producción el 26/9 (eed9e24, verificado en
     vivo); Mariano pidió retirarlo hasta publicar la política
     completa: revert 1ead6e8, verificado (sin banner, GA4 para
     todas las visitas). Para reactivarlo: revertir 1ead6e8
4.5.4  Páginas /privacidad, /en/privacy, /cookies,         En suspenso
     /en/cookies con el texto del abogado; links en el       (aprobado)
     footer y en el banner; primera capa y checkbox
     marketingConsent en contacto y e-book. Preview
     basecoreweb-mr1tzvefk-base-core.vercel.app, revisado y
     aprobado por Mariano el 26/9. Código sin commitear en el
     worktree .claude/worktrees/agent-a7aeb211238a63018 (NO
     borrarlo). Incluye también el fix del header, ya en
     producción por separado (1.42).
4.5.5  Versión maestra del abogado recibida (26/9):          Hecho (26/9)
     documentation/legal/final/. Texto público en
     documentation/legal/publicar/ con 13 ajustes de forma
     listados en cambios-vs-version-abogado.md (Gmail como
     proveedor del email, bc_consent en la tabla de
     cookies, ubicación real de cada proveedor).
4.5.6  Pendientes de Mariano antes de publicar:              Hecho (1/10)
     a) HECHO (1/10): contador y abogado dieron el ok
        (CUIT y domicilio en la política).
     b) HECHO (1/10): Mariano creó en HubSpot
        consentimiento_marketing (casilla única, sin valor
        predeterminado) y fecha_consentimiento_marketing
        (selector de fecha), nombres internos verificados
        contra src/lib/hubspot.ts.
     c) HECHO (1/10): inscripción en la AAIP por TAD.
        Paso 1, responsable privado, persona humana:
        EX-2026-96066523-APN-DNPDP#AAIP, legajo/código
        RL-2026-96066568-APN-DNPDP#AAIP. Paso 2, base
        "Contactos comerciales y leads":
        EX-2026-96082495-APN-DNPDP#AAIP, presentada y en
        revisión. No se pidió estatuto. PDFs en la carpeta
        de Windows PAQUETE SEGURIDAD/paso 1 y paso2.
        Inscripción sin vencimiento según la AAIP: se
        modifica solo si cambia lo declarado. Ver 4.5.8.
     d) HECHO (1/10): párrafo de Cloudflare Web Analytics
        redactado por pedido de Mariano, sin revisión del
        abogado: final de 3.5 de privacidad (título
        ampliado), fila de Cloudflare ampliada en la tabla
        de proveedores y párrafo en cookies junto al de
        Turnstile, ES/EN. Verificado en producción: el
        beacon carga en todas las páginas, sin cookies ni
        storage. Registrado en el punto 13 de
        cambios-vs-version-abogado.md.
     e) Documentación interna, sin bloquear la publicación:
        registro de DPA por proveedor y medidas de seguridad
        (accesos, backups, incidentes), según el abogado.
4.5.7  Publicar (el día del ok de Mariano):                  Hecho (1/10)
     revertir 1ead6e8 (vuelve el banner) + aplicar el
     worktree de 4.5.4 al día con master + párrafo de
     Cloudflare en /privacidad y /cookies + fecha en
     LEGAL_PUBLICATION_DATE + tsc/lint/build + push +
     verificación en vivo con Playwright.
     1/10: hecho todo menos commit/push. Worktree nuevo
     desde master: .claude/worktrees/privacy-4-5-7 (sin
     commitear; el de 4.5.4 queda intacto). Conflicto
     único en Breadcrumb.tsx, resuelto con la versión de
     master. Fecha: 1 de octubre de 2026 (cambiarla si se
     publica otro día). tsc, lint y build OK. Banner
     verificado en un build local: sin cookies ni GA4 al
     entrar; Rechazar deja solo bc_consent; Configurar →
     analíticas → Guardar pone _ga y _ga_0NRE1KWMBM.
     Preview: basecoreweb-357m4aogb-base-core.vercel.app.
     Cambio pedido por Mariano tras el preview: cursor-pointer
     en "Configurar cookies" (footer) y en los botones del
     banner. Commit befbf58, pusheado a master. Verificado
     en vivo: banner sin cookies ni GA4 al entrar, Rechazar
     deja solo bc_consent, cursor de mano, párrafo de
     Cloudflare y fecha 1/10 en /privacidad, checkbox en
     /contacto, /cookies y /en/* responden 200.
4.5.8  Corregir la presentación de la base en la AAIP       → 4.8 del Plan
     (EX-2026-96082495). Esperar la aprobación y hacer
     UNA sola "Modificación de datos del Registro de
     Bases de Datos Privadas" con todo junto (o
     corregir en la respuesta si la AAIP manda una
     observación antes). No bloquea la publicación.
     A corregir (declaración jurada):
     1) Seguridad: quedó el corchete literal "usuario y
        contraseña [y verificación en dos pasos]" y el
        campo cortó el final ("acceso limitado al tit").
        Dejar el texto sin corchete, con o sin 2FA según
        lo que Mariano tenga activo en HubSpot y Gmail, y
        más corto para que entre.
     2) Tipo de datos: solo "Datos identificatorios".
        Sumar "Datos comerciales, económicos y financieros"
        (empresa, servicio de interés) y "Otros" (UTM de
        origen y consentimiento de marketing con fecha).
        La ley prohíbe tener datos de otra naturaleza que
        la declarada.
     Menores, en la misma modificación:
     3) Finalidad: quedó "Publicidad, venta directa y
        similares". Aceptable; cambiarla solo si la lista
        tiene una opción tipo gestión de clientes o
        atención de consultas.
     4) Forma de actualización: sumar "Manual".
     5) Transferencias: sumar Alemania/UE (HubSpot);
        hoy solo figura EE.UU.
     6) Contacto para derechos: quedaron
        marianosandonato@gmail.com y 5491155643798, pero
        el procedimiento y la política dicen
        info@basecoresales.com. Unificar en info@.
```

**Auditoría técnica en producción (26/9, Playwright, sesión limpia):** GA4 (`gtag.js`, sin contenedor GTM) carga al entrar y pone `_ga` y `_ga_0NRE1KWMBM`, de 13 meses; son las únicas cookies de una visita normal. No hay Meta Pixel, LinkedIn Insight, Hotjar ni Clarity, ni cookies de terceros, y el almacenamiento local está vacío. Cloudflare Web Analytics (sin cookies) carga en todas las páginas y Turnstile en las páginas con formulario, sin cookies en el dominio. "Configurar cookies" no existe hoy en producción (vuelve con el banner). La tabla de cookies de la política ya se ajustó a los 13 meses reales, en `documentation/legal/publicar/` y en el worktree de 4.5.4. Texto de la auditoría entregado a Mariano para su abogado.

**Cruce con el Marketing Strategy:** formularios → HubSpot ya en producción (5.1), sin checkbox. Guardar en el CRM a quien pidió que lo contacten está justificado; mandarle newsletters o secuencias no, hasta que se publique este paquete (checkbox) y exista la 6.2 (doble opt-in). La 5.3 y la 6.2 del Marketing Strategy dependen de esta tarea.

**Para qué sirve:** cierra un riesgo de cumplimiento real (el más visible desde afuera: GA4 sin consentimiento) y destraba la captura de leads con permiso para email marketing.

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

Auditoría

## Auditoría Final Base Core (14-19/9)

Auditoría integral de solo diagnóstico corrida el 14/9 sobre el sitio real: 10 páginas en español × 4 viewports (1440/1280/390/375px) con Playwright, más código fuente, SEO técnico y performance. 25 hallazgos priorizados sin inflar (P1 alto impacto de UX/SEO/accesibilidad, P2 inconsistencia o mejora significativa, P3 detalle menor; ningún P0: nada roto a nivel funcional). Mariano revisó los 25 en el widget del artifact (22 OK, 3 No, con aclaraciones) y se trabajaron fase por fase entre el 17 y el 19/9. Se sumó completa a este documento el 28/9 para poder eliminar el artifact de origen; el detalle día a día del proceso de cierre también está en `documentation/PLAN-AUDITORIA-FINAL.md`.

**Cómo terminó (19/9), los 25 hallazgos cerrados:** **9** implementados con código real y verificados (SquareCta, footer, padding de Metodología, 4 de flip cards, Turnstile, Puestos); **10** migrados al Plan de SEO, dueño de SEO y performance (1.29-1.35, 3.11-3.12 y dos notas en 1.28); **2** falsos positivos (tabla sticky, hero de /tecnologia, este último cerrado como 1.36); **1** descartado por desproporción de alcance (`aria-expanded`); **3** "no tocar" por decisión de Mariano (H1 de Home, gap de logos, script de Cloudflare). El 19/9 se cerró el último cabo suelto: una nota de Mariano sobre el margen del cajón "Etapas" (commit `d93b6a1`).

Estado general del sitio al 14/9

| Área | Evaluación |
| --- | --- |
| UX | Sólido en general — un problema real de accesibilidad (Puestos) y fricción real en flip cards (el tap no revierte). |
| UI | Consistente en la mayoría — los componentes compartidos se reutilizan bien; un puñado de inconsistencias de escala tipográfica. |
| Responsive | Limpio — sin overflow horizontal ni elementos rotos en 10 páginas × 4 viewports. |
| Spacing | Funcional pero sin sistema — valores ad hoc por sección, calibrados a mano para igualar el diseño original. |
| Flip interactions | Funcionan visualmente; el modelo por foco (no un toggle) genera fricción real en mobile. |
| Navigation | Sin links rotos; menú mobile funcional con submenú. |
| Conversion | CTAs consistentes; no se auditó copy en profundidad (fuera del alcance). |
| SEO | Técnicamente sano (canonical, hreflang, sitemap, schema) con hallazgos puntuales (title de /en, breadcrumb, H2 del blog). |
| Performance | Limpio en todo lo medible desde el entorno; faltaba el dato de campo real de PSI/CWV. |
| Accessibility | Foco visible y reduced-motion bien resueltos en flip cards; el hallazgo fuerte fue el contenido de Puestos inalcanzable. |

Spacing y márgenes

AF · Padding vertical de sección sin patrón en Home (0 a 120px)

P2 · ajuste puntual 18/9 + cabo suelto 19/9

**Home, 12 secciones.** pt/pb medidos por sección: 0/90, 0/0, 90/90, 90/90, 50/50, 0/0, 90/90, 90/90, 0/0, 90/75, 90/90, 90/120 px. Causa: sin escala de spacing compartida; cada sección calibrada a mano en píxeles para igualar el diseño original de Elementor. Recomendación original: definir 4-5 valores estándar (50/70/90/120) solo para spacing nuevo.

**Revisión de Mariano:** primero pidió una recomendación de medidas y un test antes de tocar nada; el 17/9 se propuso la escala 0/50/90/120. Después preguntó si era necesario o si alcanzaba con corregir los "2 o 3 márgenes que están mal". Se eligió lo segundo.

**Implementado (18/9, commit `dd8392f`):** la sección "Nuestra metodología" pasó de `dt:pt-[110px]` a `dt:py-[90px]`, el único 110 de la Home, para emparejar con las secciones simétricas (90/90). El resto de los valores se dejó: están documentados como intencionales o se repiten en otras secciones.

**Cabo suelto (19/9, commit `d93b6a1`, `web-lead`):** una nota posterior de Mariano ("en preventa, venta y posventa, el cajón de Etapas tiene un margen superior muy chico") había quedado sin retomar. El `SectionHeading` de "Etapas" en `ServiceCyclePage.tsx` no tenía margen inferior: 10px reales antes del grid. Se le agregó `mb-[20px]`, igual que "Puestos" en la misma página. De paso se revisó "Pilares comunicacionales" de /marketing: ya tenía 66px de aire, sin acción. El margen *superior* del mismo cajón se corrigió después como tarea 1.39 del Plan de SEO (Fase 1, arriba).

AF · H1 de Home (70/40px) más grande que el resto (50/35px)

P3 · no tocar, decisión de Mariano

**Home vs. /tecnologia, /marketing, /preventa, /venta, /posventa, /basehub.** Home no usa el `PageHero` compartido y tiene su propia escala tipográfica.

**Decisión de Mariano:** "es jerarquía intencional, no modificar".

AF · H2 de SquareCta (60px) más grande que el resto de los H2 (45px)

P3 · implementado

**/preventa, /venta.** El H2 "Descubrí cómo continúan los ciclos" (componente `SquareCta`) no reutilizaba la clase de H2 estándar.

**Implementado (sesión previa al 18/9):** bajado de 60px a 45px en desktop, igual que el resto de los H2 de la página.

AF · Footer de 1373px en mobile, más de 2× su alto en desktop

P3 · implementado, alcance acotado

**Todas las páginas.** Desktop 667px; mobile 390px: 1373px, por apilar los 11 links en una sola columna. Recomendación original: acordeón o grilla de 2 columnas.

**Implementado (sesión previa al 18/9), sin reorganizar el footer:** el texto de los 5 links de "Servicios" pasó de 16px a 18px.

**No tocar (spacing):** container `.container-bc` (1200px + 15px laterales) idéntico en las 10 páginas y 4 viewports; gap `PageHero` → siguiente sección exactamente 50px en las 6 páginas que lo comparten; entre las 12 secciones de Home el spacing es 100% interno (padding), no márgenes colapsados.

Flip cards

AF · El segundo tap sobre la misma card no revertía el flip

P1 · implementado 18/9

**Home, /tecnologia, /marketing, /preventa, /venta, /posventa (`FlipBox` vía `FlipCardGrid`).** Trigger por CSS `:hover`/`:focus-within`, sin toggle: el segundo tap no cerraba la card, solo moverse a otra.

**Causa real (18/9):** además del foco, en touch el elemento quedaba "pegado" en `:hover` (los navegadores táctiles no tienen gesto de "unhover"), así que un toggle con `blur()` no alcanzaba. Fix: todas las reglas `:hover` de `.flip-box`/`.service-card` viven dentro de `@media (hover: hover)`; en touch el estado lo controla solo el toggle. Verificado con Playwright en emulación táctil (iPhone 13). Commit `9ef3ca8` (fase 2 completa), en producción. El bug reapareció el 19-20/9 con otra causa y se resolvió como 1.41 del Plan de SEO (Fase 1, arriba).

AF · Auto-reveal por scroll inconsistente y abrupto (incluye el riesgo de scroll interno en /venta)

P2 · implementado 18/9

**Todas las páginas con `FlipBox` (mobile/touch).** El teaser por `IntersectionObserver` (60% visible, solo touch real, sin reduced-motion) corría una sola vez por carga. Un segundo hallazgo, "riesgo de scroll interno compitiendo con el scroll de la página en la cara trasera de /venta" (`boxHeight` 250, lista con `overflow-y-auto`), terminó con el mismo pedido.

**Revisión de Mariano:** "al scrollear no siempre se flipean las cards y las que sí se flipean se sienten abruptas"; "si vuelvo a scrollear para arriba el flip automático se pierde. Quiero que esté siempre presente y que sea menos abrupto".

**Implementado (18/9, commit `9ef3ca8`):** el observer ya no se desconecta: se re-arma cada vez que la card vuelve a cruzar el 60% visible, en cualquier dirección, con una transición propia más lenta. Verificado con Playwright.

AF · ServiceCards sin el teaser automático de las flip cards

P2 · implementado 18/9

**Home ("Ciclos") y /preventa, /venta, /posventa ("Puestos").** `ServiceCards` usaba hover/focus sin JS ni teaser.

**Pedido de Mariano:** sumar el mismo flip, siempre presente al scrollear en ambas direcciones y sin ser abrupto.

**Implementado (18/9, commit `9ef3ca8`):** hook compartido nuevo, `useFlipTeaser.ts`, aplicado a `ServiceCards`. De paso, las cards de "Puestos" (sin link) pasaron a ser tocables y enfocables por primera vez. Refactor: `ServiceCards.tsx` se dividió en un Server Component y `ServiceCard.tsx` cliente, porque Next no deja pasar el ícono (una función) de servidor a cliente.

AF · role="group" no comunica el estado abierto/cerrado

P3 · evaluado, descartado

**Todas las páginas con `FlipBox`.** Recomendación opcional: `aria-expanded`. Impacto real bajo: las dos caras viven siempre en el DOM.

**Evaluado (18/9), no implementado:** `aria-expanded` sobre `role="group"` es ARIA inválido (`jsx-a11y/role-supports-aria-props`). Hacerlo bien pide pasar a `role="button"` con Enter/Espacio, alcance desproporcionado para un hallazgo opcional. Se retoma solo como pedido propio.

**No tocar (flip cards):** el scroll de la página nunca se bloquea; foco visible (sin `outline:none`); `prefers-reduced-motion` respetado en CSS y en el teaser de JS; animan solo con `transform`/`opacity`.

Responsive y UX/UI

AF · Tabla "Capacidad × Etapa" sin columna sticky en mobile

P3 · falso positivo

**/tecnologia, 390/375px.** **Verificado (18/9):** la columna "Capacidad" tiene `sticky left-0` desde el commit original de `TechStageMatrix.tsx` (`6214384`), como decisión documentada. Playwright con scroll horizontal real de 200px: la columna no se mueve. Sin cambio de código.

AF · Turnstile en /contacto: warnings en consola, y en realidad formulario trabado en mobile

P3 → P1 de hecho · seguido en 1.37

**/contacto, 390/375px.** El hallazgo era ruido de consola (2 errores + 8 warnings de Turnstile). **Mariano encontró el problema real:** en mobile el captcha a veces no aparecía o quedaba procesando para siempre, y sin captcha el formulario no se podía enviar.

**18/9, primer fix (commit `dd8392f`):** manejo de error de carga del script, `error-callback`/`timeout-callback` y un link "Reintentar" a los 12 s. No alcanzó en su iPhone real: la causa es un conflicto documentado entre Turnstile e iCloud Private Relay / "Evitar rastreo entre sitios" de Safari, que no dispara ningún callback. **Segundo fix, con OK de Mariano:** si el widget queda colgado 12 s, el formulario se habilita igual, con el honeypot como filtro. Mariano: "lo doy como OK ya que este punto vive en el Plan SEO". Detalle completo, confirmación en dos iPhones y el cierre del 25/9 en la tarea 1.37 (Fase 1, arriba).

AF · Grid de logos de clientes con gap:0

P2 · no tocar, decisión de Mariano

**Home, "Empresas con las que trabajamos".** gap medido 0px, contra 16-64px en el resto de los grids. **Decisión de Mariano:** "es intencional, dejar como está".

**No tocar (responsive):** cero overflow horizontal en 10 páginas × 4 viewports; ningún botón se sale del viewport; menú mobile con submenú funcional.

SEO técnico (migrado al Plan de SEO)

Mariano, en el widget: "Todos los OK correspondientes a SEO técnico y performance son porque los voy a trabajar en el Plan SEO". Cada uno tiene su detalle completo, con commit, en su tarea de la Fase 1 o 3 de este documento.

AF · Title de /en sin sufijo de marca

P1 · migrado a 1.29

**/en (Home en inglés).** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Resuelto el 18/9: ver **1.29** en la Fase 1.

AF · /contacto sin Open Graph / Twitter Card propio

P2 · migrado a 1.30

**/contacto.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Resuelto el 18/9: ver **1.30**. La parte de Twitter Card por página sigue abierta en el tablero activo como 1.43 (28/9).

AF · Breadcrumb dice "Home" en las páginas ES

P2 · migrado a 1.31

**9 páginas en español.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Resuelto el 18/9: ver **1.31** (y 1.38, mismo bug en el nav).

AF · /blog salta de H1 a H3

P2 · migrado a 1.32

**/blog, /en/blog.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Resuelto el 18/9: ver **1.32**.

AF · Keyword "customer success" ausente del title/H1

P3 · migrado a 3.11

**/posventa, /en/post-sales.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Resuelto el 18/9: ver **3.11** en la Fase 3.

AF · Frase exacta de keyword diluida por "e"/"&"

P3 · migrado a 3.12

**/tecnologia, /en/tecnologia.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Resuelto el 18/9: ver **3.12** en la Fase 3.

AF · Title/description largos de /basehub

P3 · migrado a 1.33

**/basehub.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Mariano había pedido ver la propuesta exacta de copy antes de decidir; se resolvió en la migración. Ver **1.33**.

AF · Title de /en/presales cerca del límite

P3 · migrado a 1.34

**/en/presales.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Medido de nuevo: 59 caracteres, dentro del rango. Cerrado sin cambio: ver **1.34**.

AF · 4 meta descriptions cortas

P3 · migrado a 1.35

**/blog, /en/blog, /en/contact, /en/marketing.** Hallazgo de SEO/performance de la auditoría. Por decisión de Mariano (18/9) no se trabajó desde la Auditoría Final: se migró al Plan de SEO, su dueño correcto (criterio Camino B, un solo dueño por dato). Copy propuesto y aprobado en la migración: ver **1.35**.

**No tocar (SEO técnico):** canonical correctos en las 20 páginas (apex → www 301, barra final → 308); hreflang recíproco (es/en/x-default); robots.txt y sitemap (34 URLs) coinciden con las páginas públicas; JSON-LD bien tipado; alt="" solo en imágenes decorativas; sin 404 en links internos ni externos; las 20 imágenes OG responden 200; un solo H1 por página.

Performance (migrado al Plan de SEO)

AF · "Imagen hero (LCP)" de /tecnologia más pesada que el resto

P3 · falso positivo, cerrado como 1.36

**/tecnologia.** Mariano pidió ajustar la calidad con un preview de Vercel. **Investigado (18/9):** `bg-5.jpg` (68KB) no es el hero sino el fondo de `ContactSection`, al final de la página; el hero real usa `PageHero`, ya optimizado en 1.26/1.27. Sin preview ni cambio: ver **1.36** en el tablero de SEO (cerrada directo como Hecho).

AF · Script email-decode de Cloudflare sin async/defer

P3 · no tocar, decisión de Mariano

**Todas las páginas.** 661 bytes inyectados por Cloudflare (Scrape Shield), no por el código. Mariano: "no hacer nada con esto". Ya estaba cerrado en 1.28 desde el 14/9.

AF · Falta un dato real de Core Web Vitals

P2 · resuelto con la API key de PSI (18/9)

**Todas las páginas.** El entorno no podía correr PSI confiable (cuota en 0, banda muy limitada). **Pedido de Mariano:** dar una API key para consultar PSI de forma autónoma. Anotado en 1.28; ese mismo día Mariano generó la key y se creó `scripts/seo/psi.py` (commit `61931b6`). Ver **1.28** en la Fase 1.

**No tocar (performance):** `next/image` con srcset/sizes y lazy loading en todo lo que no es hero; CSS de Tailwind inline; JS propio ~233KB comprimidos, async salvo el polyfill `noModule`; fuentes woff2 con `preload:false` donde compiten con el hero; terceros limitados a GA4 y Cloudflare; Recruiting con `bg-fixed` es decisión ya tomada.

Accesibilidad

AF · Contenido de "Puestos" inalcanzable por teclado y en mobile

P1 · implementado 18/9

**/preventa, /venta, /posventa** (un solo componente, `ServiceCyclePage`/`ServiceCards`). Las cards no tenían href, tabindex ni nada enfocable; los roles reales (ej. "Inbound Sales Representative") tenían `aria-hidden="true"` y solo se veían con `:hover`.

**Implementado en dos partes:** la fase de flip cards (`9ef3ca8`) las hizo tocables y enfocables. La segunda parte agregó, solo en cards sin link, una lista `sr-only` con los roles, presente para lectores de pantalla y sin cambio visual. Verificado con Playwright y en el HTML de producción. Commit `8851d29`.

**Problemas sistémicos identificados:** (1) sin escala de spacing compartida, estructural en las 10 páginas; (2) dos sistemas de breakpoints conviviendo (md/dt de 768/1025px vs. los 4 propios de `.heading-title`), candidato a saltos de tamaño en 992-1024px; (3) "Puestos" era un solo problema en un componente compartido, no tres; (4) dos implementaciones de "hover-reveal" sin paridad (`FlipBox` con soporte táctil vs. `ServiceCards` básico), resuelto al compartir `useFlipTeaser`; (5) contraejemplo positivo: `PageHero` + gap de 50px, perfectamente consistente donde hay componente compartido.

Auditoría

## Mejora Estética Web (21-28/9)

Tablero de mejora visual del sitio, abierto el 21/9 a partir de una auditoría de `design-review` (gstack) corrida por `web-lead` en modo solo lectura sobre las 10 páginas en español, y ampliado el 28/9 con una auditoría enfocada de las páginas en inglés (ME 1.13, que dejó ME 1.16-1.20). Cada hallazgo se resolvió de a uno, con decisión de Mariano, un commit por hallazgo y, para los cambios visibles, un preview de Vercel antes de producción. Se sumó completo a este documento el 28/9 para poder eliminar el artifact de origen. Las tareas llevan el prefijo "ME" para no confundirse con la Fase 1 del Plan de SEO.

**Cómo terminó (28/9), 20 de 20 cerradas:** **13 resueltas con código**, en producción: ME 1.2 (`ef45f7e`), 1.3 (`3ca280d`), 1.14 (`b916a18`), 1.5 (`5f71767`), 1.7 (`f9e94d3`), 1.10 (`7ff5427`), 1.12 (`4f8089f`), 1.15 (`511684a`), 1.16 (`17dbc4f`), 1.17 (`a6767c6`), 1.18 (`6bd209d`), 1.19 (`ab9cb62`) y 1.20 (`3b0f61b`). **5 cerradas sin código:** 1.1, 1.6 y 1.9 fueron falsos positivos (la auditoría capturó antes de que cargaran las fotos), y 1.4 y 1.11 se cerraron por decisión de Mariano. **1.13** fue la auditoría de las páginas en inglés. **1.8** (hero de /tecnologia) quedó descartada el 28/9. La Twitter Card en español de `/en/*`, encontrada en 1.13, sigue abierta en el tablero activo como 1.43.

Diagnóstico inicial (21/9)

Resultado de la auditoría corrida el 21/9 por `web-lead` con el skill `design-review` (gstack) sobre `www.basecoresales.com`, 10 páginas en español. Navegador usado: Playwright MCP (ni Aside ni el navegador headless propio de gstack estaban disponibles en este entorno). Motor determinístico de Impeccable no instalado (se ofreció y se difirió). Sin segunda voz de modelo cruzado (Codex no disponible). Categoría "Performance as Design" fuera de alcance a propósito — es dominio del agente `performance`, trackeado en el Plan de SEO.

| Score | Nota | Lectura |
| --- | --- | --- |
| Design Score | B | Fundamentos sólidos — fotografía consistente, paleta coherente, copy sin relleno |
| AI Slop Score | B | Sin grids de relleno ni testimonios falsos; un solo hero (1.8) rompe el registro |

| Categoría | Peso | Nota | Motivo |
| --- | --- | --- | --- |
| Jerarquía Visual y Composición | 15% | A | Sin hallazgos propios; foco claro por sección |
| Tipografía | 15% | B | 1.4 — cerrada: Montserrat/Sora se conservan como acento intencional (decisión de Mariano, 24/9) |
| Color y Contraste | 10% | A | Paleta coherente, sin violación de contraste confirmada |
| Spacing y Layout | 15% | A | Sin hallazgos alto/medio; 1.9 (pulido) resultó falso positivo |
| Interaction States | 10% | **D** | 1.2 y 1.3 (ambos alto, ya resueltos) cayeron acá |
| Responsive | 10% | A | Menú mobile con criterio: 51px de touch target, sin scroll horizontal |
| Contenido y Microcopy | 10% | B | 1.7 — título duplicado en /ebook (resuelto 24/9); resto sin "happy talk" |
| AI Slop Detection | 5% | B | 1.8 — hero de /tecnologia genérico |
| Motion & Animation | 5% | A | Sin bounce/elástico detectado; `prefers-reduced-motion` sin confirmar en este entorno |
| Performance as Design | 5% | No evaluado | Fuera de alcance — dominio del agente `performance` |

Goodwill — flujos recorridos

```
Flujo 1: "Diagnóstico Gratuito" (Home → formulario de contacto)
Goodwill: 70 → 65/100 — saludable, al límite (medido antes de 1.2/1.3)
  Home → CTA visible          70 → 80  (+10 CTA primario obvio)
  Primera visita → banner     80 → 65  (-15 banner tapa contenido, 1.2 — resuelto 22/9)
  Formulario → labels ocultos 65 → 55  (-10 label desaparece al escribir, 1.3 — resuelto 23/9)
  Alternativa directa         55 → 60  (+5 "PROGRAMAR REUNIÓN" evita el form)
  Contacto visible en header  60 → 65  (+5 email/whatsapp/tel siempre arriba)

Flujo 2: "Leer un artículo del blog" (Home → Blog → artículo)
Goodwill: 70 → 75/100 — saludable
  Home → carrusel + CTA claro   70 → 75  (+5 tarjetas bien etiquetadas)
  Índice del blog               75 → 80  (+5 tiempo de lectura, sin relleno)
  Artículo: contenido real      80 → 85  (+5 jerarquía clara, sin AI slop)
  Formulario al pie del artículo 85 → 75 (-10 mismo problema de 1.3 — resuelto 23/9)

Los dos flujos perdían puntos en el mismo lugar exacto: el formulario de
contacto reutilizado en todo el sitio (1.2 y 1.3, ambos ya resueltos).
Medición no repetida todavía tras los fixes.
```

Fortalezas confirmadas

Cero errores de consola propios en las 10 páginas (el único ruido, en /contacto, es 100% de Cloudflare Turnstile). Paleta coherente, sin colores que choquen. Sin lorem ipsum ni copy de relleno en ninguna página. /tecnologia y /basehub son las páginas mejor resueltas en estructura de contenido (tabla comparativa real, captura de producto real, metodología propia). Menú mobile ejecutado con criterio. Sin testimonios falsos ni métricas de relleno en ningún lado.

Quick Wins (<30 min cada uno)

1. Completar las 3 fotos faltantes en /venta (1.1 — cerrado, falso positivo). 2. Borrar el H2 duplicado en /ebook (1.7 — cerrado: se sacó el texto del hero, no un H2). 3. `padding-bottom` mientras el banner de idioma está visible (1.2 — cerrado). 4. Ampliar el área clicable del nav desktop/footer/íconos a 44px (1.5 — cerrado, acotado al selector ES | EN). 5. Migrar el CTA del hero y 2 labels de montserrat/sora a gilmer/dmSans (1.4 — cerrado sin acción, se conservan las tipografías).

Reporte completo, 16 screenshots y baseline para una futura auditoría de regresión: `~/.gstack/projects/marianosandonato-basecoreweb/designs/design-audit-20260921/` (local, no publicado como artifact).

Tareas

ME 1.1 — Tarjetas sin foto en la grilla "Etapas" de /venta

Hecho · confirmado falso positivo, cerrado sin acción (22/9)

El hallazgo original (auditoría 21/9): de las 9 tarjetas de "Etapas", las últimas 3 ("Modelos de inducción y supervisión", "Esquemas de compensación", "Implementación CRM") se veían como bloques grises lisos en el screenshot de la auditoría, sin foto.

**Investigado (22/9):** Mariano revisó /venta en vivo y las 9 tarjetas se ven correctas, con foto. Confirmado en el código: `src/content/venta.ts` define imagen para las 9 (incluidas las 3 señaladas), y los 3 archivos existen en `public/images/` con tamaño normal (70-95KB, igual que el resto). Navegando la página real con Playwright: al cargar, **ninguna** de las 9 tarjetas tiene la imagen cargada todavía (`naturalWidth: 0` en las 9, no solo en las 3 señaladas) — `FlipBox.tsx` usa `next/image` sin `priority`, carga diferida por diseño. Al hacer scroll hasta la fila y esperar, las 3 cargan perfecto (`naturalWidth: 400`, confirmado con captura real).

**Causa raíz:** carrera de tiempos de la auditoría automatizada — el screenshot de esa fila se capturó antes de que terminara de resolver la imagen optimizada de Next.js (`/_next/image?...&w=3840&q=75`) para las últimas 3 tarjetas, mientras las primeras 6 ya habían tenido más tiempo de red. No es una condición que un visitante real llegue a ver — el lazy-load nativo carga la imagen bastante antes de que la tarjeta entre al viewport real durante un scroll normal.

**Cerrado sin acción de código** — no hay ningún asset faltante ni bug de layout.

**Para qué sirve:** confirma que no todo hallazgo de una auditoría automatizada es un bug real — vale la verificación manual antes de gastar tiempo arreglando algo que ya funciona.

ME 1.2 — Banner de idioma tapa contenido real en la primera visita

Hecho · en producción (22/9)

El banner "This site is also available in English" es `position: fixed` en la parte inferior del viewport y no reservaba espacio para sí mismo — se superponía directo sobre el contenido en vez de convivir con él. En desktop tapaba la firma y el ícono de LinkedIn de la sección de contacto; en mobile tapaba el final del footer.

**Implementado por `web-lead`:** el banner ya exponía su altura real vía la variable CSS `--lang-banner-height` (seteada por `ResizeObserver` en `LanguageBanner.tsx`, ya consumida por `WhatsAppButton.tsx` para no chocar con el banner) — pero ningún `<body>` la estaba usando. Se agregó `pb-[var(--lang-banner-height,0px)]` a la clase del `<body>` en los dos root layouts (`src/app/(es)/layout.tsx` y `src/app/(en)/en/layout.tsx`) — reserva exactamente la altura del banner al final del documento (0px cuando está dismisseado). No se tocó el componente del banner ni su lógica de dismiss/cookie.

**Verificado por `web-lead`:** `tsc`/`eslint`/`build` limpios; verificación visual con Playwright en desktop y mobile en `/contacto` y Home — firma, LinkedIn y footer completo visibles arriba del banner; dismiss (cookie `basecore_lang`) intacto.

**Verificado de forma independiente en producción (sesión principal, mismo día):** navegación real a `www.basecoresales.com/contacto` con Playwright — `padding-bottom` computado de 49px, exactamente igual a la altura real del banner (`getBoundingClientRect`). Capturas en desktop y mobile confirman el footer completo (firma, íconos sociales, copyright) visible arriba del banner. Los 2 errores de consola presentes son 100% de Cloudflare Turnstile (ruido de tercero ya documentado en el Historial Técnico SEO), sin relación con este cambio.

**Commit:** `ef45f7e` — "fix(a11y): reserve space for the language banner so it never covers content" — pusheado directo a `master`.

**Para qué sirve:** que ningún visitante nuevo (la primera visita es la que más importa) llegue a ver contenido real tapado por el banner.

ME 1.3 — Labels del formulario de contacto invisibles al escribir

Hecho · en producción (23/9)

El formulario de contacto (reutilizado en Home, /contacto y el CTA de pie de cada página de servicio) tenía `<label>` reales asociados a los 6 campos de texto vía `label[for]`, pero posicionados con el patrón "sr-only" — accesibles para lector de pantalla, invisibles para un usuario vidente. El único identificador visible era el placeholder, que desaparecía apenas se empezaba a escribir. El select "Servicio" tenía el mismo problema vía una opción deshabilitada como placeholder.

**Implementado por `web-lead`:** componente tocado, `src/components/ContactForm.tsx` — el único reutilizado (vía `ContactSection` → `ContactFormLazy`) en Home, /contacto y el CTA de /preventa, /venta, /posventa, /marketing y /tecnologia. Enfoque elegido: **floating label** en vez de label persistente, porque el formulario tiene alturas pixel-exactas documentadas como invariantes frágiles (ej. el alto del wrapper del textarea es load-bearing para el total de 646px) — el floating label vive dentro de la altura ya existente de cada campo, sin tocar esa aritmética. Inputs y textarea resueltos 100% con CSS (`peer` + `:placeholder-shown`, placeholder vacío). El select "Servicio" no soporta `:placeholder-shown` nativamente, así que sumó un estado local mínimo solo para la posición del label (el valor enviado se sigue leyendo de `FormData` igual que antes) y agregó el `id`/`label[for]` que el select nunca había tenido (antes solo `aria-label`). El textarea necesitó además que su `padding-top` crezca al enfocar/llenar, para que texto y label no arranquen en el mismo punto. Se agregó `motion-reduce:transition-none` a las transiciones nuevas.

**Bugs encontrados y corregidos durante la verificación visual** (no eran evidentes en el diff de código): el label del select se superponía con el valor elegido por un conflicto de especificidad entre clases Tailwind; el label del textarea se superponía con el texto tipeado hasta que se ajustó el `padding-top` descrito arriba.

**Verificado por `web-lead`:** `tsc`/`eslint`/`build` limpios. Playwright en /contacto: estado vacío, foco+tipeo y blur-con-contenido en los 7 campos (6 inputs/textarea + select), en desktop (1440px) y mobile (390px), sin overflow horizontal. `label[for]` verificado programáticamente contra los 7 ids. Propagación confirmada en /preventa (mismo componente vía `ContactSection`).

**Hallazgo relacionado sin resolver:** /ebook usa un componente de formulario distinto, `EbookForm.tsx` (no la misma instancia), con el mismo bug — no estaba en el alcance de este fix. Documentado como tarea nueva, [ME 1.14](#me-1-14).

**Commit:** `3ca280d` — "fix(a11y): make contact form labels visible on focus/fill" — pusheado directo a `master`.

**Para qué sirve:** resuelve, junto con 1.2, el punto exacto donde los dos flujos de usuario recorridos en la auditoría perdían más goodwill (ver Diagnóstico).

ME 1.4 — Dos familias tipográficas sueltas sin razón clara

Hecho · validado por Mariano, cerrado sin cambios (24/9)

El hallazgo original (auditoría 21/9): **montserrat** aparecía solo en el botón CTA del hero de Home y **sora** solo en 2 labels verticales ("Marketing"/"Tecnología"). Se proponía migrarlos a gilmer/dmSans y dejar de cargar esas dos fuentes.

**Investigado (24/9):** la auditoría había medido mal el alcance. Montserrat 300 es también el **H1 del hero** de /preventa, /venta, /posventa, /marketing, /tecnologia y /basehub (`PageHero.tsx`, ES y EN), y Sora 200 es el título de las **tarjetas que se dan vuelta** en las 3 páginas del ciclo (`FlipCardGrid.tsx`), además de los labels de `AboutLogoBlock.tsx`/`TechnologyBlock.tsx`. Gilmer solo tiene grosores 400/500/700 y DM Sans 400-700, así que el estilo finito de esos títulos no se puede reproducir con las fuentes "oficiales". Unificar todo habría cambiado el carácter visual de 6 páginas.

**Probado:** se aplicó solo el alcance acotado (el botón "AGENDAR RELEVAMIENTO"/"BOOK A DISCOVERY CALL" de Montserrat 600 a Gilmer 700, igual que los demás botones del sitio) y se publicó un preview en Vercel, sin commit ni push, para comparar contra producción.

**Decisión de Mariano:** no le gustó cómo quedaba. Se conservan las tipografías tal como están (Montserrat y Sora como acento intencional del diseño). El cambio se revirtió en el working tree y no llegó a producción. La tarea queda cerrada sin cambios de código.

**Para qué sirve:** deja registrado que Montserrat/Sora son parte deliberada del sistema tipográfico. Una futura auditoría no debería volver a marcarlas como "familias sueltas".

ME 1.5 — Touch targets por debajo de 44px en nav/footer de escritorio

Hecho · en producción, alcance acotado a ES | EN (24/9)

El hallazgo original (auditoría 21/9): varios elementos clicables de escritorio por debajo de 44px (nav, íconos sociales, links del footer/contacto, selector ES/EN). Se propuso llevarlos a 44px.

**Medido en producción (24/9, 1440px):** 24 elementos por debajo de 44px, pero 44px es el criterio AAA de WCAG (pensado sobre todo para táctil). Contra el mínimo AA de WCAG 2.2 (24px, o espacio suficiente alrededor) casi todo cumple: nav de 40-43px de alto, íconos de 38×38, links del footer y del contacto del header de 22-23px bien espaciados. **El único caso flojo de verdad era el selector ES | EN**: 15-17 × 23px cada opción, pegadas y separadas solo por la barra. Mobile ya estaba bien (51px).

**Decisión de Mariano:** acotar el alcance al selector ES | EN, sin cambio visual.

**Implementado (sesión principal):** en `src/components/LanguageSwitcher.tsx`, cada link recibe un `::before` absoluto e invisible (`-inset-x-[7px] -inset-y-[11px]`) que amplía el área clicable a unos 29-31 × 45px sin mover nada visible. Con 7px por lado, las áreas de ES y EN no se pisan (hay unos 16px entre las dos). Durante la verificación apareció que la barra "|" (con `opacity-40`, que crea su propio contexto de apilamiento) tapaba 2px del área de ES: se le agregó `pointer-events-none`, ya que es decorativa.

**Verificado:** `tsc`/`eslint`/`build` limpios. Playwright contra un build de producción local: los 4 bordes de cada área responden al clic, sin superposición entre ES y EN, el ícono de Instagram vecino sigue respondiendo, el área queda dentro del header, y en mobile (390px) también se amplía y no hay desborde horizontal. Mariano lo aprobó en un preview de Vercel. Después del push, verificado en `www.basecoresales.com/contacto`, con los 4 bordes de ES y de EN respondiendo. Los errores de consola son todos de Cloudflare Turnstile.

**Commit:** `5f71767` — "fix(a11y): enlarge ES/EN language switcher hit area without visual change" — pusheado a `master`.

**Para qué sirve:** resuelve el único target realmente difícil de acertar con el mouse, sin tocar el diseño del header.

ME 1.6 — Bloque "IA+CRM" con 3 tratamientos visuales distintos según la página

Hecho · confirmado falso positivo, cerrado sin acción (24/9)

El hallazgo original (auditoría 21/9): el bloque "IA + CRM" se veía como grilla 2×2 en Home, como lista angosta sobre fondo blanco en /preventa y /venta, y como lista sobre foto en /posventa, /marketing y /tecnologia. Se proponía unificarlo en la grilla 2×2.

**Investigado (24/9):** es **un solo componente**, `src/components/TechnologyBlock.tsx`, que no se toca desde el 18/9 (antes de la auditoría). Lo usan Home, /preventa, /venta, /posventa y /marketing (ES y EN) con el mismo tratamiento: foto de fondo `Base-Core-Sales-estrategia-tecnologia.jpeg`, logo con "Tecnología" a la izquierda, panel de vidrio esmerilado con las 4 filas con ícono (IA / Automatización / Software a medida / CRM) y el botón "IMPLEMENTACIONES TECNOLÓGICAS". Solo cambian el eyebrow y el texto de cada fila por página (prop `stage`), más el nombre de la etapa bajo el logo en las páginas de servicio. **No existe ninguna grilla 2×2**, y **/tecnologia no tiene este bloque**.

**Verificado en producción:** se obtuvo el HTML de las 6 páginas y en las 5 que tienen el bloque aparecen la misma foto y el mismo panel (`backdrop-blur-sm`). Las capturas de Home y /preventa a 1440px, con la foto ya cargada, muestran un tratamiento idéntico.

**Causa probable:** la misma de 1.1. Las capturas de página completa de la auditoría se tomaron antes de que la foto de fondo (`next/image`, carga diferida) terminara de cargar, así que en algunas páginas el bloque se vio "sobre fondo blanco" y se leyó como un tratamiento distinto.

**Cerrado sin acción de código**, con confirmación de Mariano.

ME 1.7 — Título repetido en /ebook

Hecho · en producción (24/9)

El hallazgo original (auditoría 21/9): el H1 del hero de /ebook se repetía textualmente como H2 de la sección de abajo. Se proponía borrar ese H2.

**Investigado (24/9):** la auditoría lo describió al revés. El texto sobre la foto del hero no es un heading: es un `<p>` decorativo que `Breadcrumb.tsx` renderiza con la prop `title`. El **H1 real** es el de la sección blanca (`EbookSection.tsx`), con la keyword. "Descarga nuestro E-book" es un H2 distinto, así que no había nada que borrar ahí. La repetición venía de la tarea SEO 3.10 (5/9), que le puso al hero el mismo texto que el H1. Resultado: la misma frase dos veces seguidas en la primera pantalla.

**Decisión de Mariano:** sacar el texto del hero, igual que en /contacto, sin tocar el H1.

**Implementado (sesión principal):** se sacó la prop `title` del `Breadcrumb` en `src/app/(es)/ebook/page.tsx` y `src/app/(en)/en/ebook/page.tsx`. El hero queda solo con la foto y el breadcrumb "Inicio / E-Book" y baja de ~490px a 280px, el mismo alto que /contacto. El H1, el H2 "Descarga nuestro E-book" y el formulario no se tocaron.

**Verificado:** `tsc`/`eslint`/`build` limpios. Playwright contra un build de producción local: la frase aparece una sola vez (como H1) en ES y EN; en desktop el H1 ahora entra en la primera pantalla; en mobile el hero mide 280px y no hay desborde horizontal. Mariano lo aprobó en un preview de Vercel ("buen cambio"). Después del push, verificado en `www.basecoresales.com/ebook` y `/en/ebook`: ya no está el texto del hero y el H1 sigue intacto.

**Commit:** `f9e94d3` — "fix(ui): drop the hero copy on /ebook that repeated the H1" — pusheado a `master`. Se agregó una nota a la tarea 3.10 del Historial Técnico SEO, porque este cambio revierte el texto del hero que se había puesto ahí.

ME 1.8 — Hero de /tecnologia rompe el registro visual del resto del sitio

Descartado (28/9) · decisión de Mariano

El hero usa una imagen de cabeza robótica brillante con overlay de partículas digitales — uno de los clichés visuales más reconocibles del marketing genérico de "IA" — mientras que Home, Preventa, Venta, Posventa y Marketing usan fotografía documental consistente de personas en contextos de negocio reales. Es la única página cuya primera impresión no se siente parte de la misma familia visual que las otras cinco.

**Corrección sugerida:** reemplazar por una foto consistente con el estilo documental del resto del sitio (ej. un equipo trabajando con dashboards reales del BaseCore AI System), sin imaginería literal de robots/circuitos en ningún punto del sitio.

**Por qué importa:** es el único hallazgo de la categoría "AI Slop" con peso real — el resto del sitio no tiene grids de relleno ni testimonios falsos.

**Investigado (24/9):** la imagen es `/images/TECNOLOGIA-BASECORE.jpg` y se usa en dos lugares: el hero (`PageHero`) y la imagen Open Graph de /tecnologia y /en/tecnologia. Cambiarla afecta también la vista previa al compartir el link. En el repo no hay una foto de reemplazo que sirva sin repetirse: de las fotos con ancho de hero (≥1600px), la única sin usar es `Project-Management-Base-Core-Sales.webp`, casi blanca (fundido a blanco), y no se leería bajo el H1 blanco; todas las demás ya se usan en otras páginas.

**Decisión de Mariano (24/9):** por ahora se conserva el robot. **No se cancela**: queda en pausa como posible cambio futuro. Para retomarla hace falta decidir de dónde sale la foto nueva (una foto propia de Mariano o de su equipo trabajando con BaseHub o un dashboard real, o 3-4 opciones con licencia libre en el estilo documental del resto del sitio) y pasar por un preview de Vercel antes de producción.

**Descartado (28/9), decisión de Mariano:** al unificar los historiales se da por descartado como posible cambio. El hero de /tecnologia conserva la imagen actual (`/images/TECNOLOGIA-BASECORE.jpg`, también imagen Open Graph de /tecnologia y /en/tecnologia) y no queda en ningún tablero como pendiente. Si en el futuro se quisiera cambiar, se abre como tarea nueva, partiendo de lo investigado arriba.

ME 1.9 — Espacio en blanco desproporcionado en la sección "Puestos"

Hecho · confirmado falso positivo, cerrado sin acción (24/9)

El hallazgo original (auditoría 21/9): la sección "Puestos" de /preventa, /venta y /posventa tenía un espacio en blanco desproporcionado arriba y alrededor de las tarjetas. Se proponía reducir padding/min-height o sumar texto por tarjeta.

**Investigado (24/9):** en la captura original de la auditoría (`preventa-desktop-full.jpg`) el hueco entre el título "Puestos" y las tarjetas es el espacio de las **fotos de cada tarjeta, que todavía no habían cargado**: se cargan de forma diferida (`next/image`) y la captura de página completa se tomó antes. En producción, a 1440px, cada tarjeta muestra su foto y el espaciado coincide con el resto de las secciones (sección con padding 50/50, unos 65px arriba del eyebrow y unos 90px debajo de las tarjetas, sin `min-height`).

**Verificado en las 3 páginas:** /preventa (Inbound, Outbound), /venta (Cerradores, Nuevos Negocios) y /posventa (Retención, Crecimiento). Todas las imágenes cargan (`naturalWidth > 0`) al hacer scroll hasta la sección.

**Cerrado sin acción de código**, con confirmación de Mariano. Es la misma causa que 1.1: la auditoría automatizada capturó antes de que terminara el lazy-load.

ME 1.10 — Escala de headings no sistemática

Hecho · en producción (24/9)

El hallazgo original (auditoría 21/9): H1 70px, H2 45px (con algunas secciones en 44px) y H3 20-22px. Se proponía unificar el H2 en un solo valor y considerar un tamaño intermedio entre H2 y H3.

**Investigado (24/9):** no era un tema de redondeo. Cuatro bloques pisaban el tamaño del título con 44px fijo: Agencia de Marketing y el banner del ebook en el home, `TechnologyBlock` (IA + CRM) y `BaseHubTeaser`. En total eran 6 lugares en el código, contando el home en ES y EN. El resto del sitio usa 45px (`.heading-title`).

**Decisión de Mariano (24/9):** unificar en 45px. El tamaño intermedio entre H2 y H3 queda afuera.

**Implementado:** 44px pasa a 45px en los 6 lugares, sin otros cambios. Medido contra un build de producción local a 1440px: los 11 H2 del home quedan en 45px, en ES y EN. Mariano lo aprobó en un preview de Vercel.

**Commit:** `7ff5427` — "fix(ui): unify side-block H2s at 45px to match the rest of the site" — pusheado a `master`.

**Hallazgo relacionado:** al medir en tablet y celular aparecieron bloques que no se achican como el resto de los títulos. Ya pasaba antes de este cambio. Quedó como tarea nueva, [ME 1.15](#me-1-15).

ME 1.11 — Ritmo de secciones muy uniforme entre páginas

Hecho · cerrado sin cambios, decisión de Mariano (24/9)

El hallazgo original (auditoría 21/9): las secciones a todo el ancho alternando oscuro/claro tenían un ritmo muy uniforme en Home, /marketing y /tecnologia. Se proponía variar 1-2 secciones por página (layout asimétrico, una cita destacada o un dato destacado).

**Revisado en producción (24/9, 1440px, con todas las fotos cargadas):**

* **Home:** ya tiene variedad real. Hay fotos a todo el ancho, bloques de 2 columnas asimétricos (Proceso como servicio, Agencia de Marketing, Recruiting), tarjetas, carrusel y el banner del ebook. La propia auditoría usaba "Agencia de Marketing" como ejemplo de lo que está bien.
* **/tecnologia:** es la página con más variedad del sitio: tabla comparativa, las etapas del BaseCore AI System, pasos numerados y un recuadro destacado.
* **/marketing:** es la única que sigue la plantilla tal cual (hero, bloque azul, grilla de 8 tarjetas, IA + CRM, BaseHub, Recruiting, contacto). Es una cuestión de gusto, no un defecto.

**Por qué no se aplicó la corrección sugerida:** el sitio no tiene testimonios a propósito, así que no hay citas reales para usar. El único dato disponible en /marketing ("el 90% de los compradores B2B empieza investigando por su cuenta") no tiene fuente citada, así que no conviene destacarlo como número grande.

**Decisión de Mariano (24/9):** cerrar sin cambios. Si más adelante se quiere darle un momento propio a /marketing, es un proyecto de diseño aparte, no pulido. Para destacar el dato del 90% primero hace falta su fuente.

ME 1.12 — Anillo de foco sutil en el formulario

Hecho · en producción (24/9)

El hallazgo original (auditoría 21/9): el anillo de foco de los campos del formulario era un box-shadow de 1px, fácil de perder de vista al navegar con teclado. Se proponía subirlo a 2px con buen contraste.

**Investigado (24/9):** el color ya cumplía. El azul del anillo (`#056cb0`) tiene un contraste de unos 4.8:1 contra el fondo del campo (`#edf3f6`), y WCAG pide 3:1 para indicadores de foco. El problema era solo el grosor. Los campos están separados 20-22px entre sí, así que un anillo de 2px no choca con nada.

**Implementado:** `focus:ring-1` pasa a `focus:ring-2` en `ContactForm.tsx` (home, /contacto y las páginas de servicio) y `EbookForm.tsx` (/ebook). Mismo color. Como el anillo es un box-shadow, no mueve el layout.

**Verificado:** build limpio. Playwright contra un build de producción local en /contacto (1440px y 390px) y /ebook (1440px): el campo enfocado muestra el anillo de 2px y el alto del formulario no cambia con el foco. Mariano lo aprobó en un preview de Vercel.

**Commit:** `4f8089f` — "fix(a11y): thicken form focus ring from 1px to 2px" — pusheado a `master`.

ME 1.13 — Páginas /en/\* sin auditar

Hecho · auditoría enfocada (28/9)

La ronda 1 (21/9) auditó solo las 10 páginas en español. **Decisión de Mariano (28/9):** auditoría enfocada en lo propio del inglés, en vez de una ronda 2 completa de `design-review`. Motivo: las páginas `/en/*` usan exactamente los mismos componentes que las de español (verificado en el código), así que los fixes de la ronda 1 ya se aplicaban.

**Cómo se hizo:** `web-lead`, solo lectura, contra producción: `/en`, `/en/presales`, `/en/sales`, `/en/post-sales`, `/en/marketing`, `/en/tecnologia`, `/en/basehub`, `/en/ebook`, `/en/contact`, `/en/blog` y 2 posts, a 1440, 768 y 390px, esperando la carga de las imágenes antes de marcar una como faltante. La sesión principal verificó en el código y en producción los hallazgos de los links, la Twitter Card y el alt del logo.

**Lo que está bien:** sin scroll horizontal en ninguna página ni ancho; sin textos sin traducir ni mezcla de idiomas en lo visible (el único "falso" fue Don Seitán, nombre propio de un cliente); fechas del blog en formato inglés; menú y submenú traducidos; mensaje de respaldo de Turnstile en inglés. Los fixes de la ronda 1 se ven igual en inglés: labels flotantes (1.3/1.14), selector ES | EN (1.5), hero de /en/ebook (1.7), H2 45/34/28px (1.10/1.15) y anillo de foco de 2px (1.12).

**No verificado en vivo:** el banner de idioma (1.2) no se pudo forzar a aparecer, porque depende del idioma del navegador; el componente es el mismo que en español. Tampoco se vieron los mensajes de éxito o error del formulario, porque no se envió ninguno.

**Hallazgos:** 1.16 (links del home a páginas en español), 1.17 (404 global en español), 1.18 (alt del logo), y dos problemas que también existen en español: 1.19 (Recruiting en tablet) y 1.20 (breadcrumb de los posts). La Twitter Card y el title por defecto en español son metadata, así que su dueño es el [Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT), tarea 1.43. Pulido sin acción: "Recruiting" ocupa 5 líneas en inglés contra 4 en español a 1440px, sin romper nada.

ME 1.14 — Mismo problema de 1.3 en el formulario de /ebook

Hecho · en producción (23/9)

Al implementar 1.3, `web-lead` encontró que /ebook no usa `ContactForm.tsx` (ya arreglado) sino un componente separado, `EbookForm.tsx`, con el mismo patrón de labels "sr-only" invisibles al escribir. Los 5 campos del formulario (nombre, apellido, empresa, whatsapp, email) tenían el bug — no tiene select ni textarea, a diferencia de ContactForm.

**Implementado por `web-lead`:** se reutilizó tal cual el patrón ya validado en el commit `3ca280d` (floating label vía CSS, `peer` + `:placeholder-shown`, placeholder vacío). Al no haber select ni textarea, no hizo falta el estado local para tracking de relleno ni el ajuste de `padding-top` que sí necesitó ContactForm — el fix quedó más simple. Los `label[for]` existentes no se tocaron.

**Verificado por `web-lead`:** `tsc`/`eslint`/`build` limpios. Playwright contra build de producción local en /ebook, desktop (1440px) y mobile (390px), estado vacío y con los 5 campos completados — label flota arriba del campo sin superposición, sin cambio de layout/altura en reposo. `label[for]` confirmado programáticamente contra los 5 ids (`ebook-nombre`, `ebook-apellidos`, `ebook-empresa`, `ebook-whatsapp`, `ebook-email`).

**Commit:** `b916a18` — "fix(a11y): make ebook form labels visible on focus/fill" — pusheado directo a `master`.

**Para qué sirve:** cierra el mismo problema de 1.3 en el único formulario de descarga del ebook, que había quedado afuera del fix original por ser una instancia de componente separada.

ME 1.15 — Títulos que no se achican en tablet y celular

Hecho · en producción (24/9)

Encontrado el 24/9 al medir 1.10. Los H2 del sitio se achican con la pantalla (45 → 39 → 34 → 30 → 28px), pero cuatro bloques tenían tamaños fijos propios: Agencia de Marketing y el banner del ebook (home), `TechnologyBlock` (IA + CRM) y `BaseHubTeaser`. En celular, Agencia de Marketing e IA + CRM quedaban en 45px contra 28px del resto, BaseHub en 36px y el banner del ebook con su propia escala (40/26px).

**Implementado:** se sacaron los tamaños forzados de los 4 bloques (6 lugares en el código, contando el home en ES y EN), así que ahora heredan la escala estándar de `.heading-title`. En desktop no cambia nada: siguen en 45px, y el banner del ebook conserva su interlineado de 68px.

**Verificado:** build limpio. Medido contra un build de producción local en el home ES y EN, /preventa y /marketing, a 1440, 1024, 800, 600 y 390px: en cada ancho los 4 bloques quedan exactamente igual que el título de referencia ("Proceso como servicio"), sin scroll horizontal. Capturas en 390px con los títulos en una o pocas líneas, sin cortes. Mariano lo aprobó en un preview de Vercel.

**Commit:** `511684a` — "fix(ui): let side-block H2s follow the standard responsive scale" — pusheado a `master`.

ME 1.16 — Tarjetas "Sales Cycles" del home en inglés llevan a las páginas en español

Hecho · en producción (28/9)

En `/en`, las tarjetas Presales / Sales / Post-Sales linkeaban a `/preventa`, `/venta` y `/posventa`. Un comentario en `src/app/(en)/en/page.tsx` decía que esas páginas todavía no tenían versión en inglés (citando `documentation/PLAN-I18N.md`, que ya no existe); hoy `/en/presales`, `/en/sales` y `/en/post-sales` existen, así que el visitante en inglés terminaba en español sin motivo.

**Implementado (28/9, sesión principal):** los 3 `href` pasan a `/en/presales`, `/en/sales` y `/en/post-sales`, y se borró el comentario obsoleto. De paso se borró el mismo comentario obsoleto en `Footer.tsx`, cuyos links en inglés ya estaban bien. Sin cambio visible, así que no hace falta preview de Vercel.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Contra un build de producción local: el home en inglés solo tiene links a las rutas `/en/*` de las 3 etapas, las 3 responden 200, y el home en español sigue apuntando a `/preventa`, `/venta` y `/posventa`.

**Commit:** `17dbc4f` — "fix(i18n): point the English home's sales-cycle cards to the /en pages" — pusheado a `master` con el OK de Mariano. Verificado en `www.basecoresales.com/en`: solo links a las rutas `/en/*` de las 3 etapas, las 3 responden 200, y el home en español sin cambios.

ME 1.17 — El 404 de una dirección /en/\* mal escrita sale en español

Hecho · en producción (28/9)

Si alguien entra a una dirección `/en/...` que no existe (por ejemplo, un typo), ve `src/app/global-not-found.tsx`, que está todo en español: pestaña "404 - Página no encontrada", breadcrumb "Inicio", H1 "Página no encontrada" y botón "Volver al inicio" que lleva al home en español. Verificado en producción con `/en/this-page-does-not-exist-xyz`.

**Contexto:** es una limitación conocida y comentada en el propio archivo. Next 16 no le pasa a `global-not-found.tsx` la dirección que falló, así que no puede saber si era una ruta en inglés. El 404 de rutas dinámicas en inglés (`(en)/en/not-found.tsx`) sí está en inglés; su title de pestaña en español es parte de la 1.43 del [Plan de SEO](https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT).

**Implementado (28/9, sesión principal):** no hizo falta tocar `proxy.ts`. Se agregó una ruta comodín, `src/app/(en)/en/[...slug]/page.tsx`, que solo llama a `notFound()`. Así cualquier dirección `/en/...` que no exista cae en el 404 en inglés que ya existía (`(en)/en/not-found.tsx`), dentro del layout en inglés, en vez del 404 global en español. Es el mecanismo que indica la documentación de Next 16. Las rutas fijas y `blog/[slug]` tienen prioridad sobre el comodín, así que solo recibe direcciones que igual iban a dar 404.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Contra un build de producción local: `/en/this-page-does-not-exist-xyz`, `/en/a/b/c`, `/en/blog/a/b` y `/en/services/old-page` devuelven 404 con `noindex`, `lang="en"`, header y footer en inglés, breadcrumb "Home › Page not found" y botón "Back to home" a `/en`, sin scroll horizontal (Playwright, 1440px y celular). Las páginas reales en inglés siguen dando 200, `/en/blog/nope` sigue igual, el 404 en español no cambió y la barra final sigue redirigiendo (308). El HTML servido es el mismo tipo de respuesta que ya da en producción el 404 de un post inexistente.

**Queda para la 1.43 del Plan de SEO:** la pestaña sigue mostrando el title por defecto en español, igual que el 404 de posts inexistentes.

**Commit:** `a6767c6` — "fix(i18n): serve the English 404 for unknown /en/\* URLs" — pusheado a `master` con el OK de Mariano (sin preview de Vercel: la página ya existía en producción). Verificado en vivo: `/en/this-page-does-not-exist-xyz`, `/en/a/b/c` y `/en/services/old-page` dan 404 con `noindex`, `lang="en"`, H1 "Page not found" y botón a `/en`; las páginas reales siguen en 200 y el 404 en español no cambió. El texto "Page not found" aparece dentro de los datos internos de Next de cada página en inglés, pero no se ve: es normal y pasa igual en español con "Página no encontrada".

ME 1.18 — Texto alternativo del logo del header en español en las páginas en inglés

Hecho · en producción (28/9)

El logo del header de escritorio (a partir de 1200px) usa `alt={site.name}` fijo en `src/components/Header.tsx:235`, así que en todas las páginas `/en/*` dice "Base Core – Consultoría Comercial y Marketing". El logo del celular (líneas 286 y 320) ya elige el texto según el idioma.

**Implementado (28/9, sesión principal):** el logo de escritorio usa el mismo condicional que el del celular (`lang === "en" ? siteEn.name : site.name`). Sin cambio visible. No queda ningún otro `alt` fijo en español en los componentes.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Commit `6bd209d` — "fix(i18n): translate the desktop header logo's alt text on /en pages" — pusheado a `master` con el OK de Mariano. En vivo, en `/en` y `/en/contact` los dos logos dicen "Base Core – Commercial Consulting & Marketing"; en el home en español siguen en español.

ME 1.19 — Texto de "Recruiting" ilegible sobre la foto en tablet (home)

Hecho · en producción (28/9)

En el home, a 768px, el texto de la sección "Recruiting" queda encima de la foto de la entrevista y en partes no se lee. Pasa igual en español y en inglés: no es un problema de traducción, apareció de paso en la auditoría de 1.13.

**Medido (28/9, build local):** el problema va de unos 500px a 1024px. En ese rango la sección apila el texto sobre la foto, que se recorta desde la derecha, y las dos personas de la entrevista quedan detrás del título y el párrafo (lo peor, a 1024px). En celular (hasta ~440px) se ve solo la parte clara de la foto, y en escritorio (desde 1025px) el texto va al lado de la foto: los dos se ven bien.

**Decisión de Mariano (28/9):** panel de vidrio detrás del texto, el mismo recurso que el bloque IA + CRM (entre las opciones había también un velo blanco sobre toda la foto, o la foto como franja arriba y el texto abajo).

**Implementado:** en el home ES y EN (`src/app/(es)/page.tsx` y `src/app/(en)/en/page.tsx`), un panel `bg-white/75` + `backdrop-blur-sm`, borde y sombra iguales a los de `TechnologyBlock`, solo entre 480 y 1024px (`min-[480px]:max-dt:`). Celular y escritorio no cambian.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Playwright contra un build local en ES y EN a 390, 479, 480, 600, 768, 1024, 1025 y 1440px: el panel aparece solo entre 480 y 1024, entra entero en la sección y no hay scroll horizontal. Preview de Vercel para comparar: `basecoreweb-2zaiwtp7w-base-core.vercel.app`.

**Commit:** `ab9cb62` — "fix(ui): frosted panel behind the home Recruiting copy on tablet" — pusheado a `master` después de que Mariano aprobó el preview. Verificado en vivo en el home ES y EN: el panel aparece a 768px y no a 390 ni a 1440, sin scroll horizontal.

ME 1.20 — Breadcrumb invisible en los posts del blog en celular y tablet

Hecho · en producción (28/9)

En celular y tablet, el breadcrumb de cada post (`nav[aria-label="Breadcrumb"]`, texto blanco) queda dentro de una barra oscura que el header fijo, del mismo color, tapa por completo. Pasa igual en español y en inglés; apareció de paso en la auditoría de 1.13. Hay que confirmar si es un efecto de la 1.42 del Plan de SEO (header en páginas sin hero, 26/9).

**Medido en producción (28/9):** el alcance era más grande. Por debajo de 1200px el breadcrumb no se ve en **ninguna** página salvo /contacto (blog, posts, /preventa, /marketing, /en/presales…): las variantes "bar" y "solid" de `Breadcrumb.tsx` son una franja `absolute top-0` que queda detrás del header de celular. No lo causó la 1.42 (solo tocó escritorio). En escritorio, en las páginas con foto el breadcrumb queda a propósito detrás de la barra superior, y en el blog se ve pero el link "Inicio" no se podía cliquear: la capa transparente del header (`<header>` absoluto de 261px) se quedaba con el clic. Los datos estructurados del breadcrumb sí están en todas las páginas.

**Decisión de Mariano (28/9):** hacerlo visible solo en el blog y las páginas sin foto (variante "solid": /blog, posts, 404), donde se llega desde Google a leer; las páginas de servicio quedan como están, porque su hero con el H1 ya orienta. Más el arreglo del clic en escritorio. (Las otras opciones eran hacerlo visible en todo el sitio, o cerrar sin cambios visibles.)

**Implementado:** en `Breadcrumb.tsx`, la variante "solid" por debajo de 1200px pasa a ir en el flujo de la página, debajo del header, como franja navy de 48px como mínimo que crece si el título es largo. En `Header.tsx`, el header de escritorio deja pasar los clics (`pointer-events-none`) salvo la barra superior y el logo. En escritorio no cambia nada a la vista.

**Verificado:** `tsc`, `eslint` y `next build` limpios. Playwright contra un build local a 390, 768, 1100, 1199, 1200 y 1440px en posts ES/EN, /blog, un 404 en inglés, /preventa, /en/presales, /contacto y el home: el breadcrumb se ve y se puede cliquear en las páginas "solid" en todos los anchos; /preventa, /contacto y el home quedan igual; sin scroll horizontal. En escritorio siguen funcionando el logo, el menú, el submenú de Venta y el selector de idioma, y el clic real en "Inicio" del breadcrumb lleva al home. Preview de Vercel: `basecoreweb-byni233jz-base-core.vercel.app`.

**Commit:** `3b0f61b` — "fix(ui): show the breadcrumb on hero-less pages below 1200px, make it clickable on desktop" — pusheado a `master` después de que Mariano aprobó el preview. Verificado en vivo a 390, 768 y 1440px: el breadcrumb se ve y se puede cliquear en /blog y en los posts ES/EN, /preventa queda igual, sin scroll horizontal; en escritorio funcionan el logo, el submenú de Venta y el clic en "Inicio" del breadcrumb.

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
30. **26/9, cierre de 1.42:** al verificar las páginas legales de la 4.5.4 se encontró que, en desktop, el logo blanco del header (overlay pensado para heros oscuros) pisaba las primeras letras del contenido en las páginas sin hero, bug ya presente en producción en todos los artículos del blog. Fix con la variante `"solid"` del Breadcrumb, subido solo, separado de la 4.5.4, a pedido de Mariano. Commit `30067e5`, verificado en vivo.
31. **14/9, Auditoría Final de UX/diseño:** auditoría integral de solo diagnóstico (10 páginas × 4 viewports, código, SEO y performance), 25 hallazgos. Mariano los revisa en el widget del artifact. Detalle completo en [Auditoría Final](#auditoria-final).
32. **17-19/9, cierre de la Auditoría Final, fase por fase:** padding de Metodología y primer fix de Turnstile (`dd8392f`), flip cards y ServiceCards (`9ef3ca8`), Puestos accesible (`8851d29`); SEO y performance migrados al Plan de SEO; el 19/9 se cierra el último cabo suelto, el margen de "Etapas" (`d93b6a1`). Artifact archivado ese día.
33. **21-24/9, Mejora Estética Web, ronda 1:** auditoría de `design-review` sobre las 10 páginas en español (15 tareas con las que surgieron en el camino). Resueltas de a una, con preview de Vercel para lo visible. Detalle en [Mejora Estética Web](#mejora-estetica).
34. **28/9, Mejora Estética Web, páginas en inglés:** auditoría enfocada de `/en/*` (ME 1.13); ME 1.16-1.20 resueltas y en producción el mismo día; la Twitter Card en español pasa al tablero activo como 1.43. ME 1.8 queda descartada.
35. **28/9, cierre de 1.43:** el bloque `twitter` de `buildRootMetadata()` queda solo con el tipo de tarjeta y el layout en inglés usa textos en inglés como respaldo: cada página comparte con su propio título y en su idioma. Commit `ad44955`, verificado en producción.
36. **28/9, cierre de 1.44:** las meta descriptions de la Home y la general del sitio pasan de "Creamos" a "Creando bases productivas", el slogan oficial en español, y el logo del schema pasa al azul con slogan en inglés sobre fondo blanco. Commit `61668f2`, verificado en producción.
37. **28/9, historial unificado:** a pedido de Mariano, este documento pasa a llamarse "Historial Técnico WEB" y suma completas la Auditoría Final y la Mejora Estética Web, para poder eliminar esos dos artifacts.
38. **2-3/10, cierre de 4.1:** ficha nueva de Google Business Profile publicada (la verificación de agosto había sido rechazada). Los ajustes de dirección, horario, categoría, sitio y fotos quedan cargados pero retenidos hasta una verificación por video en vivo desde Buenos Aires; esa verificación pasa a la nueva 4.7, Bloqueada.
39. **3/10, cierre de 3.13:** preguntas frecuentes con `FAQPage` en las 6 páginas de servicio, ES y EN, a partir de las respuestas de Mariano (lo gratuito es el relevamiento inicial; sin precios ni cifras prometidas). En el camino: botones unificados en "Diagnóstico gratuito", estadísticas sin fuente corregidas, formulario de contacto alineado y todo el sitio ES en tuteo. Commits `ef58591` y `4c9d316`, verificados en producción.
40. **4/10, cierre de 3.14 y 1.45:** el post de leads B2B suma respuesta corta, tabla comparativa y 3 FAQs, con MEDDIC corregido, el criterio de elección por ciclo y decisores y links a /preventa (commit `473a9e3`). Desde esta tarea, el contenido de blog lo escribe `seo-marketing` y lo revisa `web-lead`. De paso, el logo del header gana margen inferior en las páginas sin foto (commit `ca5038d`). Verificados en producción.
41. **4/10, cierre de 4.5:** política de privacidad, banner de cookies y consentimiento en producción desde el 1/10 (`befbf58`). Las correcciones a la presentación de la base en la AAIP (antes subtarea 4.5.8) pasan a la nueva 4.8 del Plan de SEO, En progreso hasta la aprobación.

Historial Técnico WEB (antes Historial Técnico SEO) · Base Core · creado el 5 de septiembre de 2026, a partir del Plan de SEO original · actualizado el 4 de octubre (4.5 cerrada: detalle completo movido acá desde el Plan de SEO; las correcciones de la AAIP siguen como 4.8 en el Plan) · antes, el mismo día (3.14 cerrada: post de leads B2B reforzado, commit `473a9e3`; 1.45 nueva y cerrada: margen inferior del logo en las páginas sin foto, commit `ca5038d`) · antes, el 3 de octubre (4.1: sitio conectado con la ficha vía `sameAs` y `telephone` del JSON-LD, commit `be5342b`) · antes, el mismo día (3.13 cerrada: FAQs con FAQPage ES y EN, estadísticas con fuente, sitio ES en tuteo, commits `ef58591` y `4c9d316`; notas en 3.3 y 3.9) · antes, el mismo día (4.1 cerrada: ficha de Google Business Profile publicada; la verificación por video de los cambios pasa a 4.7 en el Plan de SEO) · antes, el 28 de septiembre (1.44 nueva y cerrada: slogan "Creamos" → "Creando" en las meta descriptions y logo del schema con slogan en inglés sobre fondo blanco, commit `61668f2`) · antes, el mismo día (1.43 cerrada: Twitter Card propia por página e idioma y respaldos en inglés en `/en`, commit `ad44955`) · antes, el mismo día (historial unificado: se suman completas la Auditoría Final Base Core, 25 hallazgos del 14-19/9, y la Mejora Estética Web, 20 tareas del 21-28/9, con ME 1.8 descartada; los dos artifacts quedan listos para eliminarse) · antes, el 26 de septiembre (1.42 nueva y cerrada: header desktop superpuesto en páginas sin hero, fix con la variante "solid" del Breadcrumb, commit `30067e5`) · antes, el 25 de septiembre (1.37 cerrada del todo: causa del cartel falso en el temporizador de `Turnstile.tsx`, fix `efc5266` verificado en producción, y regla de rate limiting en Cloudflare para los envíos sin token) · antes, el 24 de septiembre (nota en 3.10: se sacó el título del hero de /ebook porque repetía el H1, tarea 1.7 de Mejora Estética Web, commit `f9e94d3`) · antes, el 21 de septiembre (consolidación del artifact Performance Web: se suman acá el detalle completo de 1.23-1.27, la cronología punto a punto de la regresión de Core Web Vitals, el cierre de los dos hallazgos que 1.14 tenía abiertos — Recruiting se queda en CSS a propósito, JS sin usar del bundle propio medido y sin acción — y una nota de método para la próxima medición de performance; el artifact Performance Web quedó sin contenido propio y se eliminó) · antes, el mismo día: 8.2 movida acá del todo — cerrada tras confirmar que la ficha de crunchbase.com/organization/base-core la ocupa BaseCore™, geoceldas de Scottsdale AZ, no Base Power; detalle completo de las 11 recomendaciones en la Fase 8) · antes, el mismo día: 4.6 movida acá — Mariano revierte la decisión del 5/9 de no activar canales secundarios; LinkedIn empresa, Instagram y Facebook pasan a desarrollo urgente, gestionado desde el Plan de Marketing/Social, no acá — primera tarea de una nueva Fase 4 en este documento · antes, el mismo día: 1.28 movida acá del todo — Mariano decidió no seguir persiguiendo el objetivo de mobile +90 en el score de laboratorio de PSI; queda reemplazada por 5.9 en el Plan de SEO, un chequeo mensual recurrente sin objetivo activo de score) · antes: 20 de septiembre (1.40 movida acá — el overlay de /marketing necesitó una 3ra ronda: medido el color de las 5 fotos de hero, la de /marketing resultó la más saturada de azul con diferencia, así que el overlay nunca fue la causa principal; fix real con filtro de color sobre la propia imagen + overlay neutro, confirmado por Mariano en un preview de Vercel y llevado a producción. De paso se retiró el widget de revisión interactiva del Plan de SEO — duplicaba el archivo y dejaba una línea sin poder leer, forzando un publish con `force` en otra sesión; el veredicto de revisión se registra por chat de acá en más) · antes, el mismo día: 1.37, 1.39 y 1.41 movidas acá — 1.37 confirmada por Mariano en iPhone real; 1.39 y 1.41 marcadas OK en el (todavía vigente en ese momento) widget de revisión interactiva del Plan de SEO, ahora "BaseCoreWeb: SEO y Performance" · antes: 18 de septiembre, sesión posterior (1.29-1.35, 1.38, 3.11 y 3.12 movidas acá) · antes, el mismo día: migración de 9 hallazgos SEO desde la Auditoría Final de UX/diseño (1.29-1.35, 3.11-3.12) · antes: 14 de septiembre (Fase 8 nueva, 8.1 cerrada — decisión de no unificar el naming a "BaseCore") · espejo de trabajo en `documentation/seo/historial-seo.md`