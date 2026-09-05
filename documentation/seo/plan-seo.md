> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-05

---

Plan SEO Base Core

basecoresales.com · auditoría & hoja de ruta

# Plan de SEO de Base Core

Diagnóstico completo del estado actual del sitio (código real, revisado hoy) y plan paso a paso para posicionarlo en buscadores. Cada tarea indica su estado, el texto o código exacto involucrado, y para qué sirve.

48 / 58 tareas · +2 en progreso (1.14, 4.4) · +2 bloqueadas (GBP, 4.5)

[Diagnóstico](#diagnostico)
[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)

## Diagnóstico inicial

Esto es lo que el sitio tiene implementado *hoy*, verificado leyendo el código del repo (`basecoreweb`) y la web en vivo.

| Elemento | Estado | Detalle |
| --- | --- | --- |
| Title tags | Hecho | Únicos por página, en ES y EN (ver Fase 1.1) |
| Meta descriptions | Hecho | Únicas por página, con keywords relevantes (ver Fase 1.2) |
| Canonical + hreflang | Hecho | Cada página declara su URL canónica y su par ES/EN |
| Sitemap.xml | Hecho | Generado dinámicamente, incluye las 14 páginas (7 ES + 7 EN) |
| Robots.txt | Hecho | Permite rastreo total, bloquea solo `/api/` |
| H1 único por página | Hecho | Un solo H1 por página vía componentes `PageHero` / `ServiceCyclePage` |
| Imágenes optimizadas | Hecho | `next/image` en los componentes clave (WebP automático, lazy load) |
| Open Graph (redes) | Hecho | Cada página de servicio usa su propia foto; e-book usa la tapa real |
| Twitter Card | Hecho | Agregada globalmente en `layout.tsx` |
| Datos estructurados (JSON-LD) | Hecho | `ProfessionalService` sitio entero + `Service` y `BreadcrumbList` por página (ver 1.11) |
| Bots de IA (Google-Extended, GPTBot, ClaudeBot...) | Hecho | Cloudflare los bloqueaba en robots.txt sin que nadie lo hubiera configurado a propósito (ver 1.5) |
| Core Web Vitals (LCP/CLS/TBT) | Parcial | Mobile 88 en recuperación (regresión a 57-60 el 4/9, remontando con 4 fixes deployados) — ver 1.14 |
| Contraste de color (WCAG AA) | Hecho | Accessibility 100/100 en PageSpeed — ver 1.15 |
| Google Search Console | Hecho | Solo queda la propiedad de Dominio (se borró la vieja de Prefijo de URL, nunca vio tráfico real) |
| Google Analytics / GA4 | Hecho | Instalado y confirmado en tiempo real (ID `G-0NRE1KWMBM`) |
| Palabras clave con volumen real (Keyword Planner) | Hecho | Mapa validado con datos reales de volumen/competencia/CPC en ES, AR e inglés — ver 3.5 |
| Google Business Profile | Bloqueado | Rechazado por Google — ver 4.1 |
| Blog / contenido informativo | Hecho | 6 artículos publicados (uno por página de servicio + Tecnología×2), carrusel navegable en Home — ver 3.4 |
| /basehub + /en/basehub (nuevo, 1/9) | Parcial | On-page, keywords, OG e imagen ya validados; en inglés ya indexada, en español Google la rastreó el 3/9 pero todavía no la indexó — ver 7.5 |

Fase 1

## Cimientos técnicos (on-page)

Que Google pueda rastrear, entender e indexar cada página correctamente. Es la base sin la cual el resto del SEO no sirve de nada. **Ya está mayormente resuelta** por cómo está construido el sitio (Next.js con metadata por página).

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

Generado automáticamente en `src/app/sitemap.ts`, incluye las 8 páginas en español y sus 8 pares en inglés (16 en total — sumó el E-Book desde la última revisión), con prioridad 1.0 para el home y 0.8 para el resto. Cada entrada incluye su propio `hreflang` recíproco y ahora también `x-default` (ver 1.3).

**Para qué sirve:** es el "índice" que le entregás a Google para que sepa qué páginas existen y las rastree, en lugar de depender de que las descubra solo siguiendo enlaces.

1.5 — Robots.txt

Hecho · bloqueo de Cloudflare encontrado y corregido (28/8)

El código del sitio (`src/app/robots.ts`) siempre estuvo bien. El problema apareció en el robots.txt *en vivo*: Cloudflare le agregaba por su cuenta un bloque completo bloqueando a `Google-Extended`, `GPTBot`, `ClaudeBot`, `Amazonbot` y otros — justo cuando la página de Marketing promete "ser citado por Google y por IA". No afectaba la indexación normal (Googlebot no estaba bloqueado), pero sí la visibilidad en respuestas de IA. Causa: dos configuraciones separadas y superpuestas en Cloudflare (Security → AI Crawl Control): el toggle "Block Crawler" por bot, y por separado el toggle "Managed robots.txt" — apagar solo uno de los dos no alcanza, hay que apagar ambos.

Texto exacto (generado en /robots.txt, ya corregido)

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.basecoresales.com/sitemap.xml
```

**Para qué sirve:** confirma a los buscadores (y ahora también a los bots de IA) que pueden rastrear todo el sitio salvo las rutas internas de API, y les señala dónde está el sitemap.

1.6 — Un solo H1 por página, con jerarquía H2/H3

Hecho · resincronizado 5/9 (ver 1.21)

Cada página tiene exactamente un H1 (vía los componentes `PageHero` / `ServiceCyclePage`), y las secciones internas usan H2/H3 de forma consistente. El texto del H1 de Preventa/Venta/Posventa/Marketing se reescribió el 18/8 para incorporar la palabra clave validada, manteniendo el estilo de pregunta ("¿Buscas...?") ya existente en la marca. **Resincronizado el 5/9:** Venta y Contacto cambiaron en producción el 30/8 y 19/8 respectivamente sin que este documento se actualizara; se suma Tecnología, que nunca había entrado a esta tabla.

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

De paso se encontró que la sección de "Etapas" de Venta ya tenía un H3 propio por subtema (Pipeline & Funnel, KPI's, Forecast, Implementación CRM...) casi calcado a las palabras clave secundarias — la reestructuración que sugería la investigación ya estaba resuelta de fábrica, no hizo falta tocarla.

**Para qué sirve:** el H1 es la señal más clara del tema principal de la página. Tener varios (o ninguno) diluye esa señal para Google.

1.7 — Imágenes optimizadas

Hecho · afinado a fondo (29/8)

Uso de `next/image` en los componentes principales: conversión automática a WebP, carga diferida (lazy load) y tamaños responsivos. El 29/8 se investigó a fondo por qué el LCP en mobile llegaba a 8.6s en PageSpeed: los dos logos del header también tenían `priority`, así que competían por ancho de banda con la foto del hero (la imagen que realmente importa) en vez de dejarle todo el ancho de banda a ella. Se les sacó la prioridad. También se probó servir AVIF adicional a WebP — se revirtió: en Vercel, generar un AVIF nuevo tarda ~1.7s contra ~0.37s de WebP, un costo mucho mayor que el ahorro de bytes. Se agregó `sizes` a dos imágenes que no lo tenían (pedían un archivo mucho más grande del que se mostraba) y se convirtieron a WebP 4 imágenes de la sección "Metodología" que usaban CSS en vez del optimizador de Next.

**Para qué sirve:** la velocidad de carga es un factor de posicionamiento directo (Core Web Vitals) y de experiencia de usuario. Imágenes livianas = página rápida = mejor ranking. Resultado final: ver 1.14.

1.8 — Texto alternativo (alt) en imágenes

Hecho · revisado, todo correcto

Revisadas una por una las 5 imágenes con `alt=""`: las 5 son fondos puramente decorativos detrás de un H1/H3 real (hero de home, hero de páginas internas, fondo de breadcrumb, fondo de las tarjetas de "Puestos") — el contenido real ya existe como texto en la página, así que el alt vacío es lo correcto según las pautas de accesibilidad, no un error. Las imágenes de las tarjetas flip (Pipeline & Funnel, Forecast, etc.) son `background-image` en CSS, no `<img>`, así que no aplican alt — su título ya está en el H3 visible.

**Para qué sirve:** el alt describe la imagen a buscadores y a personas con lectores de pantalla. Ayuda a posicionar en Google Imágenes y es un factor de accesibilidad.

1.9 — Open Graph (vista previa en redes sociales)

Hecho

Cada página de servicio ahora usa su propia foto de hero como imagen OG (sin crear assets nuevos, se reutilizaron las que ya existían) — Preventa, Venta, Posventa y Marketing dejaron de compartir la imagen genérica del home. El E-Book usa la tapa real del e-book. Home y Contacto mantienen la imagen de marca general, al no tener una foto propia distintiva.

**Para qué sirve:** es lo que se ve cuando alguien comparte el link en WhatsApp, LinkedIn o Instagram. Una imagen genérica repetida hace que todos los links se vean iguales y reduce el clic.

1.10 — Twitter Card

Hecho

Agregado globalmente en `src/app/layout.tsx`, reutilizando el mismo título/descripción/imagen de marca que ya usa Open Graph.

**Para qué sirve:** controla cómo se ve el link al compartirlo en X/Twitter.

1.11 — Datos estructurados (JSON-LD)

Hecho · en 3 capas

El `ProfessionalService` de sitio entero se agregó en una sesión anterior. El 28/8 se sumaron dos capas más: `Service` en cada una de las 5 páginas de servicio (describe esa oferta puntual, no solo el negocio) y `BreadcrumbList` en toda página con miga de pan visible — antes había breadcrumbs en pantalla sin su schema correspondiente. Validado con el propio checker de Google en PageSpeed ("Structured data is valid").

Las 3 capas activas hoy

```
1. ProfessionalService (layout.tsx, sitio entero)
   name, url, logo, description, email, sameAs (LinkedIn/IG/Facebook)

2. Service (nuevo componente ServiceJsonLd.tsx, 5 páginas x ES/EN)
   name + description de esa página puntual, provider -> ProfessionalService

3. BreadcrumbList (componente Breadcrumb.tsx, 14 páginas internas)
   Home -> página actual, con sus URLs absolutas
```

**Para qué sirve:** es información en un formato que Google entiende sin ambigüedad. Habilita resultados enriquecidos (rich snippets, como la miga de pan en el resultado de búsqueda) y refuerza la ficha de Google Business Profile — clave para dar señales de negocio real y confiable.

1.12 — Verificación en Google Search Console

Hecho · propiedad vieja borrada (29/8)

Se agregó una **propiedad de Dominio** (cubre `www`, sin `www`, http y https en una sola vista). Verificada vía registro TXT en Cloudflare. El 29/8 se borró la propiedad vieja de "Prefijo de URL" (`https://basecoresales.com/`, sin www): por su alcance, nunca pudo ver tráfico real en sus 4 años de existencia — cualquier visitante a esa versión es redirigido al toque a la versión con www, así que solo veía el propio redirect. La de Dominio queda como la única y la que siempre debe usarse.

**Para qué sirve:** es el panel oficial de Google para ver qué páginas están indexadas, qué errores de rastreo hay, y qué términos de búsqueda ya traen visitas al sitio. Sin esto, se trabaja a ciegas.

1.13 — Bug encontrado: dominio canónico contradecía el redirect real

Hecho (corregido)

Al auditar la propiedad vieja de Search Console (activa desde antes de esta migración) aparecieron 9 páginas marcadas "Página con redirección" — `/venta`, `/preventa`, `/posventa`, `/marketing`, `/contacto` y variantes. Causa real: el hosting redirige `basecoresales.com` (sin `www`) → `www.basecoresales.com`, pero el sitio declaraba el dominio sin `www` como canonical en metadatos, sitemap y robots.txt. Cada URL del sitemap rebotaba en vez de cargar directo.

Cambio aplicado en src/lib/site.ts

```
- url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://basecoresales.com",
+ url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.basecoresales.com",
```

**Para qué sirve:** alinea lo que el sitio le declara a Google (canonical, sitemap, robots.txt, Open Graph) con lo que el servidor realmente sirve sin redirect — condición para que esas 9 páginas se indexen bajo la URL correcta en vez de quedar excluidas por "redirección". Los 404 viejos de `/presales/` y `/sales/` que también aparecían resultaron ser datos de rastreos anteriores a que el dominio quedara bien configurado — se confirmó en vivo que hoy redirigen correctamente.

1.14 — Core Web Vitals / Rendimiento (PageSpeed Insights)

En recuperación · Mobile 88, LCP 3.6s

Auditoría completa el 28-29/8 con varias vueltas de PageSpeed. El LCP en mobile llegó a estar en 8.6s en la primera medición — la causa real fue la competencia de imágenes con prioridad alta descripta en 1.7, no algo estructural del sitio. Durante el proceso, los números de mobile saltaron mucho entre corridas (3.2s, 7.9s, 11.3s, 2.8s) — se confirmó que era ruido de la simulación de red lenta de Lighthouse combinado con estar testeando a veces la versión sin `www` (que redirige, sumando ~1.35s reales antes de arrancar a cargar). Con la URL correcta y todo corregido, el resultado quedó estable.

Resultado final (URL correcta, 29/8)

```
              Mobile    Desktop
Performance     95        99
LCP            2.8s      0.9s
CLS              0         0
TBT            60ms      20ms
```

**Regresión detectada 4/9, vía Test 5 del Plan de Agentes:** remedido con Lighthouse CLI real (PSI sin cuota disponible) contra `www.basecoresales.com`, 3 corridas consistentes. Los números de arriba ya no están vigentes: **Mobile Performance cayó a 57-60, LCP mobile a 10.3-12.9s** (era 2.8s). Desktop bajó menos: 99→93, LCP 0.9s→1.7s. CLS se mantuvo en 0 — los carruseles nuevos (logos, blog) quedan descartados como causa. Causa con evidencia: ~1.9s de trabajo de CPU compartido entre páginas antes de pintar el hero, con Cloudflare Turnstile (carga en las 12 páginas con formulario, aunque nadie llegue a verlo) y GTM como los componentes con más peso confirmado — sin cifra limpia de cuánto pesa cada uno por separado. Nada de esto se corrigió todavía, a pedido explícito de no tocar producción. Detalle técnico completo y plan de acción propuesto (sin aplicar) en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929), sección 01/03/04.

**Recuperación en curso, confirmada con PSI real (5/9):** se implementaron y deployaron 4 fixes, uno a la vez, cada uno medido antes de sumar el próximo — (1) Cloudflare Turnstile diferido con `IntersectionObserver` (ya no carga hasta que el formulario entra en viewport); (2) `sizes` corregido en el carrusel de logos de clientes, un bug nuevo no incluido en el diagnóstico original (61 KiB de más por un `sizes` mal calibrado); (3) `preload:false` en las fuentes `sora`/`reey`, que se preloadeaban en las 16 páginas aunque solo se usan en algunas y siempre debajo del fold; (4) `TECNOLOGIA-BASECORE.jpg` migrada de CSS `background-image` a `next/image` (192KB→41KB en mobile; en desktop subió a 263KB por el `deviceSizes` por defecto de Next — matiz sin resolver antes de decidir si migrar las otras 8 imágenes de fondo). Progresión medida con PSI real: **Perf mobile 57-60 (4/9) → 84 → 88, LCP mobile 10-13s → 4.1s → 3.6s.** LCP sigue sin llegar a "bueno" (≤2.5s). Quedan sin tocar: JS sin usar (GTM 71KiB + bundle app 28KiB), JS legacy/polyfills de features ya baseline (25KiB), CSS render-blocking (160ms), la decisión de las otras 8 imágenes de fondo, y el paso 6 del plan de acción (instrumentar INP real con `web-vitals`). Detalle técnico completo en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929), actualizado 5/9.

**3 pasos más, 5/9 (sesión de la tarde):** (5) el trade-off de desktop de `TECNOLOGIA-BASECORE.jpg` (192KB→263KB) se resolvió: no era el `sizes` mal calibrado, era un salto del `deviceSizes` por defecto de Next (1200→1920 sin paso intermedio) — capado a 1200px para 1x-DPR (262KB→128KB, pixel-diff imperceptible bajo el overlay). Mismo fix replicado en `PageHero` en 5 de 6 páginas (Tecnología, Marketing, Preventa, Venta, Posventa, ES+EN) — `/basehub` quedó sin tocar a propósito: su imagen es nativamente 1200×801px, así que el cap sería un no-op. (6) Instrumentado INP real (paso 6 del plan de acción): Next.js 16 ya trae `useReportWebVitals`, sin instalar ninguna librería nueva — LCP/CLS/INP ahora se mandan a GA4 como eventos en las 16 páginas, +3KB gzip medidos. Dos decisiones tomadas, sin aplicar código: **JS legacy (25KiB de polyfills)** se ignora — el único fix depende de una ruta interna no soportada de Next.js (bug conocido, reportado en GitHub); **imágenes 2x-DPR (retina) y el cambio global de `next.config.ts`** quedan en pausa — Lighthouse/PSI miden a 1x-DPR, así que ese caso ni siquiera es visible para la herramienta que estamos usando de referencia, y tocar la config global arriesga las 16 páginas por un problema no medido. Pendiente de remedir con PSI real.

**Para qué sirve:** Core Web Vitals es un factor de posicionamiento directo desde 2021, y además es la experiencia real de cualquiera que entra desde el celular con mala señal — justo el escenario más común para alguien buscando "consultoría comercial" desde el traslado o el trabajo.

1.15 — Accesibilidad: contraste de color (WCAG AA)

Hecho · Accessibility 100/100

PageSpeed señaló que dos colores de marca no cumplían el contraste mínimo: el gris secundario (`#7A838B`, usado en textos chicos) y el azul principal (`#0787D9`, fondo de todos los botones con texto blanco encima) — ambos eran los valores exactos medidos del diseño original en WordPress. Se consultó antes de tocarlos porque implicaba apartarse de esa fidelidad al pixel. Aprobado, se oscurecieron ambos lo justo para pasar el mínimo sin cambiar el aspecto general. Efecto secundario descubierto: el mismo azul se usaba también como texto (no fondo) en el nav activo y el selector de idioma sobre el navy del header — ahí necesitaba ser más claro, no más oscuro, así que se sumó un tercer color solo para ese caso.

Cambios de color (src/app/globals.css)

```
--color-body:          #7A838B -> #686F76  (texto secundario, fondo blanco)
--color-primary:       #0787D9 -> #056CB0  (fondo de botones, texto blanco)
--color-primary-dark:  #056CB0 -> #04568D  (hover de botones)
--color-accent-light:  nuevo, #4FA8E0      (nav activo / selector de idioma sobre navy)
```

**Para qué sirve:** no es solo un check de Google — es gente real con baja visión o en pantallas con mucho sol que no podía leer bien el texto. Google también lo usa como señal de calidad de página.

1.16 — Texto de enlaces genérico + bug de link roto en EN

Hecho · SEO 100/100

PageSpeed marcaba dos botones con texto "MÁS INFORMACIÓN" (a `/marketing` y a `/tecnologia`) como no descriptivos — ese chequeo puntual mira el texto visible del botón, no una etiqueta oculta de accesibilidad. Se consultó porque implicaba cambiar copy visible del diseño original; aprobado, ahora dicen "AGENCIA DE MARKETING" e "IMPLEMENTACIONES TECNOLÓGICAS". De paso, revisando esto, apareció un bug real sin relación con SEO: el botón "LEARN MORE" de la home en inglés apuntaba a la página en español (`/marketing`) en vez de `/en/marketing` — cualquier visitante en inglés que lo tocara terminaba en la versión equivocada.

**Para qué sirve:** un texto de enlace descriptivo ayuda tanto a Google (entiende mejor de qué trata la página de destino) como a alguien usando lector de pantalla (navega la lista de links sin contexto visual). El link roto era, directamente, una fuga de visitantes en inglés.

**Hallazgos nuevos del 3/9 (1.17–1.20):** salen de la primera auditoría SEO completa corrida por el sistema de agentes nuevo (`web-lead` + `seo-marketing`, Test 2 del Plan de Agentes) — no de un chequeo manual. Documentación completa en `SEO-AUDIT.md`, `SEO-ACTIONS.md` y `SEO-TECHNICAL-CHANGES.md`, en la raíz del repo `basecoreweb`.

1.17 — H1 de Home rompe el texto plano: "Comercialy Marketing" / "MarketingConsulting"

Resuelto 4/9

El texto visible en pantalla es correcto ("Consultoría Comercial y Marketing", en dos líneas), pero `src/app/page.tsx` (y su par `/en`) armaba el salto de línea con un `<br />` pegado a la palabra siguiente sin espacio — el `textContent` del H1 (lo que lee Google, lo que se copia/pega) daba "Consultoría Comercialy Marketing", sin espacio real. Mismo bug en `/en` ("MarketingConsulting").

**Resuelto:** se agregó el espacio real después del `<br />` en ambos archivos (ES y EN) — el salto de línea visual no cambió, solo el texto plano subyacente. Verificado con Playwright: `h1.textContent` ya da "Consultoría Comercial y Marketing" / "Commercial & Marketing Consulting". Parte de la resolución de la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) (tema 6).

**Para qué sirve:** es el H1 más visible del sitio, en los dos idiomas — cualquier herramienta de SEO/scraping, o alguien copiando el titular, ya no ve una palabra rota.

1.18 — `<html lang="es">` incorrecto en todo `/en/*` durante la carga inicial

Resuelto 5/9

`src/app/layout.tsx` fijaba `<html lang="es">` de forma estática; en `/en`, un client component corregía el atributo recién en un `useEffect`, después de la hidratación. `curl` confirmaba que el HTML servido decía `lang="es"` con contenido 100% en inglés — falla WCAG 3.1.1 (nivel A) en las 16 rutas `/en/*` reales (no 8, como decía la versión original de este punto — alcance corregido el 5/9 al investigar, incluye `/en/blog` y `/en/basehub`, que no existían cuando se documentó por primera vez).

**Resuelto:** investigado primero (sin tocar código) para confirmar el enfoque correcto dado que `/en` no era un route group sino un layout anidado, que nunca puede declarar `<html>`. Aplicado el 5/9: se separaron dos root layouts hermanos — `src/app/(es)/layout.tsx` (`lang="es"`) y `src/app/(en)/en/layout.tsx` (`lang="en"`) — sin duplicar Header/Footer/GA4/JSON-LD/WhatsApp/LanguageBanner/WebVitals (factorizados en `src/components/AppShell.tsx`) ni las fuentes/metadata compartidas (`src/lib/fonts.ts`, `src/lib/metadata.ts`). `SyncHtmlLang.tsx`, el parche client-side, se eliminó. Las 16 páginas siguen 100% prerenderizadas (build sin cambios de estático a dinámico), cero cambios de URL/copy/metadata por página. Verificado con `curl` contra `next start`: el HTML crudo del servidor ya dice `lang="en"`/`lang="es"` según corresponda, sin depender de hidratación.

**Trade-off encontrado y validado con Playwright:** dos root layouts hermanos hacen que cruzar de una ruta ES a una EN (o viceversa) sea ahora una recarga completa de página en vez de una transición cliente — comportamiento documentado de Next.js al cruzar root layouts distintos, no un bug. Confirmado en desktop y mobile: sin flash visible, sin contenido cortado, header/footer/nav íntegros en ambos idiomas.

**Hallazgo colateral, no introducido por este cambio, sin acción:** cuando `notFound()` se lanza dentro de un slug dinámico fuera de `generateStaticParams` (ej. `/blog/no-existe`), Next.js 16.2.10 renderiza `<html id="__next_error__">` sin atributo `lang` — se confirmó que este comportamiento ya existía idéntico antes de la reestructuración (reproducido en el commit anterior vía `git worktree`). Queda como posible ítem futuro, no bloquea el cierre de este punto.

**Para qué sirve:** el atributo `lang` ahora coincide con el idioma real del contenido desde que el servidor responde, no solo después de hidratar.

1.19 — Formularios de Contacto y E-Book: campos sin `<label>`, solo `placeholder`

Resuelto 4/9

`ContactForm.tsx` y `EbookForm.tsx` etiquetaban nombre/apellidos/empresa/whatsapp/email (y mensaje en Contacto) solo con `placeholder` — sin `<label>`, `aria-label` ni `aria-labelledby` (el único campo bien resuelto era el `<select>` de "Servicio", que sí tiene `aria-label`). Era el patrón de fallo WCAG 3.3.2 (técnica F89): el placeholder no es persistente, así que apenas alguien empieza a escribir pierde la referencia del campo.

**Resuelto:** se agregó un `<label> sr-only` por campo en ambos formularios (11 campos en total, ES/EN vía el objeto `copy` ya existente) — mismo criterio que ya usaba el select, sin cambiar el diseño visual. Verificado con Playwright: los 11 campos ya exponen nombre accesible vía `el.labels[0]`. Parte de la resolución de la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) (tema 2).

**Para qué sirve:** era a la vez un problema de accesibilidad y de CRO — resuelto con el mismo fix de bajo esfuerzo previsto acá.

1.20 — Housekeeping técnico menor (sitemap, imágenes OG, redirect del apex)

Hecho · 3/3 resueltos 5/9

Tres hallazgos de bajo impacto agrupados para no inflar el plan — detalle completo en `SEO-AUDIT.md`. **Resuelto (5/9):** (1) `sitemap.ts` ya no pone `lastModified: new Date()` en cada request — cada URL tiene ahora una fecha real fija, tomada de cuándo se tocó por última vez esa página según el propio historial de este plan (los posts del blog usan su `publishedAt` real); (2) `/blog`/`/en/blog` y `/tecnologia`/`/en/tecnologia` ya tienen imagen Open Graph propia, reusando assets existentes (la foto de `/tecnologia` para ambas versiones de esa página, la imagen del post "¿Qué CRM elegir?" para el blog — no se generó ningún asset nuevo); (3) el redirect de doble salto en `http://basecoresales.com` (sin `www`) también se cerró — diagnosticado por `performance` (Cloudflare resolvía http→https y recién Vercel hacía apex→www, dos sistemas en serie) y corregido con una **Redirect Rule** propia en Cloudflare (`Hostname equals basecoresales.com` → `301` a `concat("https://www.basecoresales.com", http.request.uri.path)`, aplicada por Mariano en el dashboard). Verificado con `curl -IL`: un solo salto `301` directo a `https://www.basecoresales.com/`.

**Para qué sirve:** higiene técnica de bajo esfuerzo — quick wins para cuando se toque cualquiera de esas áreas, sin necesidad de una tanda de trabajo dedicada.

1.21 — Este documento desincronizado del código real en Venta y Contacto

Hecho · resincronizado 5/9, vía auditoría 5.4

Auditado primero por `seo-marketing` el 4/9 (Test 5, comparando 1.1/1.2/1.6 contra el código real y `git log -p`), y cerrado del todo el 5/9 con una pasada completa de las 8 páginas (Home, Preventa, Venta, Posventa, Marketing, Contacto, Tecnología, E-Book) vía la auditoría 5.4. Total: **6 casos confirmados**, ya corregidos en 1.1/1.2/1.6.

**Encontrados el 4/9** — **Venta** (title "Proceso de Ventas para Pymes" → real "Gestión Comercial para Pymes" desde el 30/8; H1 "¿Buscas mejorar tu proceso de ventas?" → real "¿Buscas mejorar tu gestión comercial?"; meta sin "esquemas de compensación") y **Contacto** (title/H1 "Diagnóstico Comercial Gratuito" → real "Diagnóstico Gratuito" desde el **19/8**, el caso más viejo de todos). Además, **Tecnología** nunca se había agregado a la tabla de 1.1 (no era contradicción, era un vacío: su title/meta/H1 se implementó el 30/8 vía 3.6, pero 1.1/1.2/1.6 nunca se actualizaron para incluirla).

**Encontrados el 5/9, en la pasada completa** — 3 casos nuevos, los tres en meta description (no en title ni H1): **Preventa** (doc: "Prospección y captación de clientes B2B..." → real: "Prospección y ventas B2B...", commit `2fa5c5c` del 30/8, coherente con subir "ventas B2B" ya documentado en el Mapa de Keywords); **Posventa** (doc: "Fidelización y retención de clientes..." → real: "Fidelización de clientes y customer success...", mismo commit `2fa5c5c`, implementa la ganancia "customer success" ya recomendada); **Marketing** (doc: "...junto a Not-a-Numb3r..." → real: sin esa mención, commit `c5133b4` del 19/8 — es la ejecución en código de la decisión 3.2, ya marcada Hecho, pero 1.2 nunca reflejó el texto nuevo).

**Para qué sirve:** cualquier decisión de copy que se apoye en 1.1/1.2/1.6 ahora parte de texto verificado línea por línea contra el código real, no de memoria — y confirma que ninguno de los 6 casos era un bug real del sitio, todos eran el plan sin actualizar después de un cambio ya implementado.

1.22 — Bug de `<br/>` en tarjeta de cliente (W Profesional), misma familia que 1.17/7.9

Resuelto 5/9, vía auditoría 5.4

Encontrado por `seo-marketing` en la auditoría 5.4, redescubriendo por su cuenta la misma familia de bug que 1.17 (Home) y 7.9 (/basehub): en `ClientCard.tsx`, la tarjeta de "W Profesional Hair Therapy" en el carrusel de clientes de Home (ES y EN, mismo dato compartido) — el único cliente con `nameSecondLine` — renderizaba el `<br />` pegado directo a la segunda línea, dando `textContent` "W ProfesionalHair Therapy" sin espacio.

**Resuelto:** mismo fix que 1.17/7.9 — agregado un espacio real después del `<br />`, sin tocar el salto de línea visual. Verificado con `curl` contra el HTML servido. La auditoría revisó el resto del árbol de componentes buscando la misma familia: `PageHero.tsx` ya inserta espacios reales entre líneas de H1 (resuelto de origen); `FlipCardGrid.tsx` tiene la misma vulnerabilidad latente pero no se dispara hoy (ningún título en `flipGrids.ts` tiene salto de línea) — riesgo a futuro, no bug activo, sin acción por ahora. También encontró 2 casos de menor severidad (`<br/>` pegado a un punto y seguido, no a mitad de palabra) en el párrafo del ciclo de Home y en la intro de `ContactSection.tsx` (ES/EN) — igual de aplicable el mismo fix, aplicado también el 5/9 por prolijidad aunque el impacto real era menor (el texto seguía siendo legible como dos oraciones, solo sin el espacio).

**Para qué sirve:** mismo razonamiento que 1.17/7.9 — el nombre accesible/textContent no debe concatenar palabras, y esta vez el hallazgo salió del propio ciclo de auditoría del agente, no de un chequeo manual.

Fase 2

## Medición

Hoy no hay ninguna forma de saber cuánta gente visita el sitio, de dónde viene, ni si el formulario de contacto o la descarga del e-book realmente convierten. Sin esto, cualquier trabajo de SEO posterior no se puede medir.

2.1 — Instalar Google Analytics 4

Hecho

Propiedad GA4 "Base Core Sales" creada, moneda EUR. Etiqueta instalada vía `next/script` en el layout raíz, confirmada en Informes en tiempo real.

ID de medición

```
G-0NRE1KWMBM  (guardado como site.gaId en src/lib/site.ts)
```

**Para qué sirve:** mide visitas, de dónde vienen (Google, redes, directo), qué páginas ven y cuánto tiempo se quedan. Es el termómetro base de todo el trabajo de SEO. Medición mejorada activada: formularios y descargas de archivo (el e-book) se miden automáticamente sin configuración extra.

2.2 — Verificar dominio en Search Console y enviar sitemap

Hecho · 16/16 indexadas

Propiedad de Dominio verificada por DNS (Cloudflare) — hoy es la única propiedad activa (ver 1.12). Sitemap detectado automáticamente vía `robots.txt`, estado "Correcto". Se limpiaron dos sitemaps muertos heredados de WordPress (`page-sitemap.xml`, `sitemap.rss`) y se pidió indexación manual de las páginas de contenido principal. Confirmado el 27/8: 16 de 16 páginas reales indexadas (100%); las entradas "no indexadas" que mostraba el reporte eran todas explicables (fuentes precargadas, favicon, una URL con parámetro de tracking de LinkedIn correctamente excluida) — cero bugs de código detrás de esas.

**Para qué sirve:** muestra qué búsquedas ya traen tráfico al sitio (aunque sea poco todavía), qué páginas indexó Google y qué errores encontró.

2.3 — Medir conversiones clave

Hecho · evento clave marcado 4/9

Configurar como eventos en GA4: envío del formulario de `/contacto` y descarga del e-book.

**Código hecho y confirmado en producción (4/9):** `ContactForm.tsx` dispara `gtag('event', 'generate_lead', ...)` en el envío exitoso; `EbookForm.tsx` dispara `generate_lead` y `file_download` al descargar el PDF. Verificado en build/navegador, y confirmado por git que el commit está pusheado a `origin/master` (deployado).

**Primer intento (4/9, mañana) — bloqueado por falta de datos, no de acceso:** Mariano entró a GA4 Admin → Eventos. `file_download` ya figuraba como evento clave (viene de la medición mejorada estándar de GA4 — no confirma que el código nuevo haya corrido, cualquier descarga de PDF ya lo disparaba antes). `generate_lead` no aparecía en ningún lado: ni en eventos clave ni en los 8 eventos recientes de los últimos 28 días, porque todavía no se había disparado ni una vez en producción.

**Confirmado en Tiempo real (4/9, más tarde):** Mariano completó 2 envíos reales (con captcha real) en el sitio en vivo y `generate_lead` apareció en Informes → Tiempo real — confirma que el código funciona en producción, tal como estaba escrito.

**Cerrado (4/9, mismo día):** Mariano marcó `generate_lead` como evento clave en GA4 Admin → Eventos, junto a `file_download`. Las dos conversiones que importan (envío del formulario de contacto y descarga del e-book) ya están medidas como eventos clave. Parte de la resolución de la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) (tema 1, el de mayor prioridad de todo el documento).

**Para qué sirve:** saber no solo cuánta gente entra, sino cuánta efectivamente deja sus datos o se interesa — la métrica que realmente importa para un negocio de consultoría.

Fase 3

## Palabras clave y contenido

El sitio técnicamente está listo para posicionar, pero posiciona lo que ya dice — y hoy dice poco en comparación con lo que alguien busca en Google. Esta fase amplía el contenido con las palabras que usan los clientes potenciales.

3.1 — Investigación de palabras clave

Hecho · mapa direccional, ya aplicado

Investigación hecha analizando qué frases usa realmente la competencia y qué contenido posiciona hoy para cada tema, en español (España y Argentina/LatAm) e inglés. **Sin volúmenes de búsqueda verificados** — no hay acceso a Keyword Planner/Ahrefs todavía, así que esto es un mapa direccional para priorizar, no cifras exactas. Ya se usó para reescribir title, meta description y H1 de las 7 páginas (ver 1.1, 1.2 y 1.6). **29/8: arranca la validación con Keyword Planner, ver 3.5.**

**Actualización 30/8 (Fase 3.5, validado con Keyword Planner):** a diferencia de lo que sugería esta ronda inicial sin datos, sí hay una diferencia real de volumen entre mercados en el cluster de procesos/gestión de ventas — "procesos comerciales", "procesos de ventas" y "gestión de ventas" pierden un escalón completo de volumen en Argentina frente a España. Decisión tomada: el copy por defecto del sitio prioriza los términos que se sostienen fuertes en **ambos** mercados ("gestión comercial", "estrategia comercial", "CRM para empresas", "IA para empresas"), justo ahora que se evalúa mudar la base legal a Buenos Aires. "Posventa" (una palabra) se mantiene sin cambios. Detalle completo en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

#### Home

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | consultoría comercial |
| Secundarias | consultoría para pymes · gestión comercial · consultoría empresarial · consultoría de ventas |
| Intención | Investigación comercial |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | commercial consulting for small business |
| Secundarias | sales process consulting for SMB · business consulting for small business |
| Intención | Investigación comercial |

"Consultoría comercial para pymes" casi no tiene señal propia en Keyword Planner en ningún mercado — se conserva como frase de marca en title/H1 (la usa también la competencia directa: Back in Town, Resultae, Eneas Consultores), pero el peso SEO real en el cuerpo/H2 lo lleva "consultoría comercial", validada con volumen real en ambos mercados.

#### Preventa

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | prospección B2B (prospección de clientes B2B) |
| Secundarias | ventas B2B · generación de leads B2B · captación de clientes · prospección comercial |
| Intención | Mixta: informacional + comercial |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | B2B lead generation for small business |
| Secundarias | B2B prospecting consultant · lead qualification · appointment setting |
| Intención | Mixta |

"Ventas B2B" tiene más volumen real que la propia primaria ("prospección B2B") en ambos mercados — se suma como secundaria de mayor peso visible en el copy, sin reemplazar la primaria porque sigue encajando mejor con el contenido de la página.

#### Venta

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | gestión comercial |
| Secundarias | procesos comerciales · procesos de ventas · estrategia de ventas · consultoría de ventas · automatización de ventas · implementación CRM |
| Intención | Informacional con ángulo comercial |

EN · validado 30/8

|  |  |
| --- | --- |
| Primaria | commercial management |
| Secundarias | sales pipeline management · sales forecasting for SMB · CRM implementation consulting · sales KPIs |
| Intención | Igual patrón |

"Gestión comercial" reemplaza a "proceso de ventas para pymes" como eje principal: mismo volumen que en España pero se sostiene en Argentina, mientras que "procesos comerciales/de ventas" y "gestión de ventas" pierden un escalón ahí. El contenido no cambia — los H3 existentes (Pipeline & Funnel, KPI's, Forecast, Implementación CRM) ya cubren las secundarias. En inglés, "sales process consulting for small business" no tenía señal en ningún mercado (0–10); la segunda pasada de Keyword Planner del 30/8 confirmó "commercial management" (10–100, Baja/Media, ambos mercados) como equivalente real — mismo criterio y misma consistencia entre idiomas que "gestión comercial" en español.

#### Posventa

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | fidelización de clientes |
| Secundarias | customer success · retención de clientes · gestión de cartera de clientes · gestión de clientes |
| Intención | Informacional + comercial |

EN · validado 30/8

|  |  |
| --- | --- |
| Primaria | customer retention consulting for small business |
| Secundarias | customer success · reduce customer churn B2B · cross-selling and up-selling strategy · account development |
| Intención | Igual patrón |

"Customer success" está validado con volumen real y competencia baja en ambos mercados, y ya vive en el contenido de la página (los puestos "Customer Success Manager/Rep") — sumarla como secundaria visible en title o H1 es la ganancia más barata de toda la validación: no requiere escribir nada nuevo. La segunda pasada de Keyword Planner del 30/8 confirmó exactamente los mismos números en inglés (100–1.000, Baja, mismo CPC en ambos mercados) — es la misma frase en los dos idiomas, así que también entra como secundaria fuerte en la versión EN de la página.

#### Marketing

ES · validado 30/8, corregido 30/8

|  |  |
| --- | --- |
| Primaria | marketing digital para pymes |
| Secundarias | agencia de marketing · marketing B2B · marketing para pymes · generación de leads |
| Intención | Investigación comercial |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | marketing consulting for small business |
| Secundarias | branding for small business · SEO and social media agency · web design for small business |
| Intención | Investigación comercial |

Corregido 30/8: la primera pasada había bajado "agencia de marketing digital para pymes" y descartado "agencia de marketing" asumiendo que Mariano solo asesora y no ejecuta. Verificado el código real de `/marketing`: la página sí promete ejecución (sitios web con Claude Code, SEO, redes sociales, pauta publicitaria, diseño gráfico) — Mariano confirmó que ejecuta él mismo con herramientas/IA. Con ese dato, "agencia de marketing" (1.000–10.000, Media, ambos mercados — el mayor volumen de todo el cluster) deja de ser una keyword mal encajada y pasa a secundaria fuerte. "Marketing digital para pymes" (con volumen real validado y ya siendo el title vigente) reemplaza a "consultoría de marketing" como primaria. "Agencia de marketing digital para pymes" se mantiene como frase de meta — sigue sin señal propia fuerte, pero ya no por incoherencia de modelo de negocio.

#### Tecnología — nueva en el mapa, 30/8

ES · validado 30/8

|  |  |
| --- | --- |
| Primaria | CRM para empresas · IA para empresas |
| Secundarias | automatización de procesos · consultoría CRM · agentes de IA para empresas · automatización de ventas |
| Intención | Informacional + comercial |

EN · pendiente

|  |  |
| --- | --- |
| Primaria | *(sin definir — nunca tuvo mapa direccional)* |
| Secundarias | — |
| Intención | — |

La página existe en producción (agentes de IA, CRM, automatización, software de gestión) pero nunca había entrado al mapa de keywords — es el cluster con mejor relación volumen/competencia de todo el research en ambos mercados. Se incorpora formalmente como octavo pilar, con la misma jerarquía de navegación que Preventa/Venta/Posventa/Marketing (ver 3.6). Evitar "automatización comercial" como target (competencia Alta en ambos mercados).

#### Contacto

ES

|  |  |
| --- | --- |
| Primaria | diagnóstico comercial gratuito |
| Secundarias | consultoría de ventas primera reunión · asesoría comercial pyme contacto |
| Intención | Transaccional |

EN

|  |  |
| --- | --- |
| Primaria | free sales consultation |
| Secundarias | free business consultation · book a sales strategy call |
| Intención | Transaccional |

"Diagnóstico gratuito" es casi universal como CTA entre competidores directos — mucho más fuerte para conversión que un genérico "Contacto".

**Pendiente 30/8:** Mariano pidió una pasada de Keyword Planner igual para esta página antes de cerrar la Fase 3.5 por completo — no se da por exenta.

#### E-Book

ES

|  |  |
| --- | --- |
| Primaria | cómo armar un proceso de ventas desde cero |
| Secundarias | proceso comercial efectivo pyme · guía proceso de ventas pyme |
| Intención | Informacional |

EN

|  |  |
| --- | --- |
| Primaria | how to build a sales process from scratch |
| Secundarias | sales process guide for small business |
| Intención | Informacional |

Esta frase exacta ya es un tema activamente targeteado por competencia en español — buena validación de que es un ángulo real y buscado, y coincide casi textual con el contenido que ya tiene el e-book.

**Pendiente 30/8:** misma pasada de Keyword Planner pedida para Contacto — no se da por exenta.

**Para qué sirve:** sin esto, se escribe contenido "a ciegas". Con esto, se sabe exactamente qué frases usar en títulos, H2 y párrafos para que coincidan con la búsqueda real.

3.2 — Sacar a Not-a-Numb3r como partner y reposicionar Marketing como servicio propio

Hecho

Decisión de negocio (18/8): Not-a-Numb3r no tiene sitio operativo hoy, funciona solo como "pantalla momentánea" de ese servicio. Mariano hace el marketing él mismo en vez de tercerizarlo. Confirmado en el código: no queda ninguna mención visible a Not-a-Numb3r en ningún lugar del sitio (solo sobreviven comentarios internos del código que documentan el diseño original de Elementor, invisibles para cualquier visitante).

**Para qué sirve:** el sitio ya no vende el servicio de Marketing como si lo entregara un partner externo — lo que promete coincide con lo que realmente pasa al contratar.

3.3 — Ampliar el contenido de las páginas de servicio

Hecho · cerrada 30/8

Mariano sumó 2 párrafos nuevos por página (ES + EN, con paridad completa) a Preventa, Venta, Posventa, Marketing y Tecnología, cada uno respondiendo la pregunta real que trae a alguien a esa página y citando una estadística con fuente: preventa (McKinsey, 40–50%/80–90% tasa de éxito), venta (80% de las ventas necesita 5+ contactos, 44% de los vendedores abandona tras el primero), posventa (retener cuesta 7x menos que adquirir, 60–70% vs. 5–20% de recompra), marketing (90% de compradores B2B investiga antes de hablar con ventas), tecnología (más de la mitad de las implementaciones de CRM falla por adopción). Verificado en el código real (`about.paragraphs` en `src/content/*.ts` y los bloques navy de `marketing/page.tsx` y `tecnologia/page.tsx`).

**Para qué sirve:** más contenido relevante = más oportunidades de coincidir con búsquedas long-tail (frases largas y específicas), que suelen convertir mejor que términos genéricos. Calidad sobre extensión: se prefirieron 2 párrafos con dato citable antes que rellenar palabras.

3.4 — Sección de blog/recursos

Hecho · 7/7 publicados y en producción

Hoy el único contenido "de captación" es el e-book. Un blog con artículos permite capturar búsquedas informativas antes de que la persona esté lista para contratar. Mariano fijó un orden propio de 5 artículos el 30/8 — uno por página de servicio en vez de apilar todo en CRM/Tecnología — que reparte la señal de autoridad entre Preventa, Venta, Marketing y Tecnología en la primera tanda del blog; el 31/8 se sumó un sexto para Posventa y el 5/9 un séptimo para BaseHub (ver 7.8), cada título validado contra keyword research antes de escribirlo (detalle completo en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9)). Los 7 están escritos en ES y EN, con QA de contenido propio (sin estadísticas inventadas, sin relleno genérico) antes de mergear.

1. **Publicado (6/9)** — "Qué automatizar con IA en un equipo comercial (y qué no)" → */tecnologia*. Keyword principal: "ia para empresas" + "automatización de procesos".
2. **Publicado (20/9)** — "Cómo calificar leads B2B: BANT, MEDDIC y otros métodos" → */preventa*. Keyword principal: "calificación de leads" (respaldada por "lead qualification", CPC alto pese a volumen chico); BANT/MEDDIC quedan como vocabulario del cuerpo, no como ancla.
3. **Publicado (13/9)** — "Cómo hacer seguimiento comercial: proceso para no perder oportunidades de venta" → */venta*. Keyword principal: "gestión comercial" / "procesos comerciales" (más fuerte que "seguimiento comercial" solo).
4. **Publicado (4/10)** — "Cómo prevenir el churn: señales de que un cliente está por irse" → */posventa*. Sexto artículo, sumado el 31/8. Keyword principal: "retención de clientes"; "churn" aparece en el título por ser vocabulario real ya en uso en la página, no por volumen validado como ancla.
5. **Publicado (27/9)** — "Cómo crear una estrategia de marketing para una pyme" → */marketing*. Keyword principal: "estrategia de marketing", la de mayor volumen de todo el dataset — título accionable en vez de la definición genérica, para no captar tráfico académico sin intención comercial.
6. **Publicado (30/8)** — "¿Qué CRM elegir para una pyme?" (HubSpot, Zoho, Bitrix24, Pipedrive, Salesforce, ordenados por adopción real en pymes, no por market share global) → */tecnologia*. Primer post, formato comparativo — ver [Fase 6](#fase6).
7. **Publicado (11/10)** — "PMO: por qué tu pyme no necesita pagar uno aparte" → */basehub*. Séptimo artículo, sumado el 5/9 (ver 7.8). Keyword principal: "PMO", la de mejor volumen/competencia de todo el research de BaseHub.

El orden de arriba es cronológico por fecha editorial de cada post; el **orden de exhibición** en el carrusel del Home y en `/blog` es curado a mano (IA → Preventa → Venta → Posventa → Marketing → CRM → PMO, el nuevo agregado al final) y vive en `src/content/blog/posts.ts`, independiente de `publishedAt`. El teaser del Home dejó de mostrar solo los 3 posts más recientes en una grilla estática: ahora es un carrusel (`BlogCarousel.tsx`, scroll-snap nativo sin dependencias nuevas) que navega los 7, con flechas a los costados de las imágenes en vez de debajo.

**Para qué sirve:** esto ataca directamente el desafío de **credibilidad** — contenido útil y recurrente construye autoridad frente a alguien que todavía no conoce a Base Core, mucho antes de pedirle que confíe sin case studies. Ver también [Fase 6](#fase6): el formato comparativo del primer post es además el que más se cita en motores de IA.

3.5 — Validar el mapa de keywords con Google Keyword Planner

Hecho · cerrada del todo 30/8

Validación completa con Keyword Planner: español (España + Argentina) para Home, Preventa, Venta, Posventa, Marketing y Tecnología; inglés (mismos dos mercados) para las mismas 6 páginas; y Contacto/E-Book en ambos idiomas y mercados (sin volumen aprovechable, esperable — quedó documentado igual). Una segunda pasada corta cerró los dos huecos que quedaban en inglés: "commercial management" para Venta y "customer success" para Posventa. Análisis completo, con todas las keywords extraídas y la decisión sobre cada una, en el artifact [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9). El mapa de la 3.1 ya quedó actualizado con todo lo confirmado.

**Para qué sirve:** pasar de "esto probablemente se busca" a "esto se busca X veces por mes con esta competencia" — permite priorizar en qué páginas y qué artículos del blog (3.4) invertir primero, en vez de repartir el esfuerzo parejo entre términos que capaz nadie busca.

3.6 — Decisiones de arquitectura confirmadas (30/8)

Hecho · title/meta/H1 implementados 30/8

**Tecnología pasa a ser un octavo pilar de igual jerarquía** que Preventa/Venta/Posventa/Marketing. Al revisar el código para implementarlo se encontró que `nav`/`navEn` en `src/lib/site.ts` ya incluían Tecnología entre Marketing y Contacto, y `Header.tsx` ya renderiza la lista completa sin recortarla — el menú ya estaba bien armado, no hizo falta tocar nada ahí. Lo que sí faltaba (title/meta/H1 propios) se implementó y mergeó a producción el 30/8 (PR #5).

**Verticales de CRM** (inmobiliarias, clínicas, aseguradoras, etc.): hay volumen real pero Mariano confirmó que no tiene especialización ni caso de éxito en ninguno todavía — se mantiene el posicionamiento genérico B2B, sin landings por vertical por ahora.

**Encuadre de Marketing (corregido 30/8):** Mariano ejecuta él mismo con herramientas/IA (sitios web con Claude Code, SEO, redes sociales, pauta publicitaria, diseño gráfico) — coincide con lo que ya promete el código real de `/marketing`. No se posiciona como asesoría pura: "agencia de marketing" y el resto del cluster de ejecución vuelven a ser keywords legítimas (ver el bloque de Marketing en 3.1).

**Para qué sirve:** deja registrado en el plan qué se decidió y por qué, para que la implementación de Fase 3.3 y cualquier cambio de navegación no dependa de memoria — se ejecuta directamente sobre esto.

**3.7 a 3.9 — mismo origen:** auditoría del 3/9 (ver nota en Fase 1); el copy de cada una ya fue confirmado por `seo-marketing` contra este mismo Mapa de Keywords — detalle completo de cada decisión en `SEO-CONTENT-CHANGES.md`, en la raíz del repo.

3.7 — H2 para la sección "Metodología" de Home

Hecho · 5/9

La sección de Home que agrupa Diagnóstico / Plan de Ruta / Estrategia / Mejora Continua no tenía ningún heading propio — saltaba de H1 a cuatro H3 sueltos, sin H2 intermedio. `seo-marketing` confirmó el texto sin forzar una keyword ("proceso comercial" ya está tomado por Venta y E-Book — reutilizarlo acá arriesgaba canibalizar esas dos páginas):

Texto en producción (ES y EN)

```
ES: eyebrow "Cómo trabajamos" + H2 "Nuestra metodología"
EN: eyebrow "How we work"   + H2 "Our methodology"
```

**Para qué sirve:** cierra un salto de jerarquía de headings (accesibilidad) y le da a Google una unidad de sección clara donde antes no había ninguna.

3.8 — Enlaces internos hacia /ebook desde /preventa y /venta

Hecho · 5/9

`/ebook` y `/en/ebook` antes solo se enlazaban desde el teaser del propio Home. Se sumó un tercer párrafo con link contextual en `/preventa` y `/venta` (y sus pares `/en/presales`, `/en/sales`), con el anchor text definido por `seo-marketing`, ajustado para no repetir (y así canibalizar) la keyword propia de cada página de origen. Implementado vía una función nueva `renderRich()` (en `src/lib/renderBold.tsx`) que soporta `[texto](url)` en el copy de contenido, sin tocar el helper `renderBold` existente.

Texto en producción (ES)

```
Desde /preventa: "Si estás armando tu proceso de ventas desde cero,
  descargá nuestro e-book gratuito." — anchor: "proceso de ventas desde cero"

Desde /venta: "¿Ya tenés un proceso pero necesitás ordenarlo? Descargá
  gratis nuestro e-book, Proceso de Ventas desde Cero." — anchor:
  "e-book Proceso de Ventas desde Cero"
```

Mismo criterio en inglés desde `/en/presales` y `/en/sales` — texto completo en `SEO-CONTENT-CHANGES.md`.

**Para qué sirve:** un lead magnet con un solo punto de entrada es una arquitectura de enlazado débil, tanto para SEO (PageRank interno) como para conversión contextual.

3.9 — Title de /blog sin keyword + oportunidad de FAQPage schema

Hecho (title) · 5/9

`/blog` y `/en/blog` tenían el único title del sitio sin ninguna keyword ("Blog" / "Blog – Base Core Sales"). `seo-marketing` confirmó "gestión comercial" (sin conflicto con el Mapa) y lo acortó para respetar la convención de longitud del sitio (~30 caracteres antes del sufijo). Ya en producción:

Texto en producción

```
ES (/blog):     Blog de Gestión Comercial y CRM
EN (/en/blog):  Commercial Management & CRM Blog
```

**Oportunidad separada, no un defecto:** ninguna página de servicio tiene contenido de preguntas frecuentes ni schema `FAQPage` — captaría long-tail y rich results, pero necesita contenido real (preguntas/respuestas genuinas, no inventadas). Queda para que `seo-marketing` lo evalúe como iniciativa de una fase futura, no forma parte de esta tanda.

**Para qué sirve:** el title de `/blog` era lo único del sitio sin señal de keyword; FAQPage es una oportunidad real pendiente de contenido, no de código.

3.10 — Implementar el H1 de /ebook y /en/ebook decidido en el Mapa de Keywords (Opción A)

Hecho · 5/9, premisa corregida

**Premisa original incorrecta, corregida el 5/9:** este punto decía que el H1 real "nunca se llevó a código", basado en el texto de `src/app/ebook/page.tsx` línea 31 y `src/app/en/ebook/page.tsx` línea 34. Al implementarlo, `seo-marketing` encontró que ese `<h1>` real (en `EbookSection.tsx`, `as="h1"`) **ya tenía el texto nuevo desde el 30/8** — confirmado por `git log -p`. La línea 31/34 que este documento citaba es el título decorativo del `Breadcrumb` (variant="hero", se renderiza como `<p>`, no como H1) — ese sí seguía con la pregunta vieja. El gap real estaba ahí, no en el H1.

Título de Breadcrumb actualizado (ES y EN)

```
ES actual:    ¿Cuáles son los primeros pasos para un proceso comercial
              efectivo y la importancia de definir un ciclo de preventa
              para atraer nuevos clientes?
ES nuevo:     Guía gratis: cómo armar tu proceso de ventas desde cero

EN actual:    What are the first steps to an effective sales process
              and the importance of defining a presales cycle to
              attract new clients?
EN nuevo:     Free guide: how to build a sales process from scratch
```

Botón de descarga sin cambios en ambos casos — solo se tocó el título del breadcrumb, para que no conviva con un H1 real que ya decía otra cosa.

**Para qué sirve:** mantiene casi textual la frase ya validada por competencia, nombra el formato y dice "gratis/free" explícito — cierra el gap entre lo que ya se investigó y lo que el sitio realmente muestra (ahora en las dos piezas de texto, no solo en el H1). Detalle completo de la decisión: [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9), sección 10.

Fase 4

## SEO local y autoridad

Base Core tiene presencia física en Barcelona y Buenos Aires — eso es una ventaja de SEO local que hoy no se está usando. Esta fase también es la que más ayuda al reto de credibilidad de la marca.

4.1 — Google Business Profile

Bloqueado · verificación rechazada

**Corregido 4/9:** la nota anterior de este punto ("se descartó Barcelona, sin domicilio real que la respalde") era incorrecta — la oficina de Barcelona **sí está activa**, confirmado por Mariano. El dato original nunca se validó bien, mismo tipo de problema de fondo que tuvo la ficha de Buenos Aires con Google (ver abajo): una afirmación se dio por cierta sin la verificación que le correspondía.

**Sinergia con Buenos Aires:** con las dos oficinas confirmadas activas, el mismo bloqueo que frenó el intento de CABA aplica en espejo a Barcelona — Mariano opera desde Australia, y Google Business Profile exige grabar el video de verificación en vivo desde el propio local, sin aceptar uno pregrabado. Intentar Barcelona hoy tiene el mismo problema de fondo que reintentar Buenos Aires: ninguno de los dos se puede verificar sin estar físicamente ahí. Ficha de Buenos Aires ya creada como **negocio de zona de servicio** (sin dirección pública), categoría "Consultoría de negocios", zona de servicio CABA, teléfono `+54 11 5564-3798` — Barcelona todavía no tiene ficha creada.

Qué pasó con Buenos Aires (29/8)

```
Video grabado el 21/8 en Buenos Aires. Google lo rechazó: pidió
ver algún cartel o señalización del negocio en el domicilio.
Operando como negocio de zona de servicio desde un departamento,
no hay obligación de tener cartelería — el motivo del rechazo no
encaja con el tipo de ficha que se creó.

Complicación adicional: Mariano ya se mudó a Australia. Google
Business Profile exige grabar el video en vivo desde su propio
link (no acepta subir uno grabado antes) — no se puede reintentar
sin estar físicamente en Buenos Aires de nuevo.
```

**Punto abierto real, no solo un trámite pendiente:** antes de reintentar cualquiera de las dos ciudades hay que resolver si vale la pena — implica un viaje físico a Barcelona o a Buenos Aires, o evaluar si conviene priorizar una sola. Vale la pena decidir el enfoque (y cuál ciudad primero) antes de invertir tiempo en un nuevo intento.

**Para qué sirve:** es lo que hace aparecer en el mapa y en el bloque local de resultados cuando alguien busca "consultoría comercial" + la ciudad. También es una de las señales más fuertes de "negocio real" para alguien que investiga antes de contratar.

4.2 — Consistencia de nombre/dirección/teléfono (NAP)

Hecho · teléfonos verificados

Confirmado el 18/8: el teléfono de Argentina (`+54 11 5564-3798`) es el mismo en el sitio, Instagram, LinkedIn y Facebook. Sin acción pendiente en ese frente — quedó como recuperación de acceso a Instagram en el camino, ya resuelto.

**Corregido 4/9:** "Barcelona - Bs.As." en `site.location` (header y footer) es correcto — la oficina de Barcelona está activa. La nota anterior de este punto, que la daba por desactualizada, se apoyaba en el error de 4.1 (ya corregido). Sin acción de código pendiente.

**Para qué sirve:** Google usa esa coherencia como señal de confianza. Datos que no coinciden entre plataformas debilitan el SEO local.

4.3 — Primeros enlaces entrantes (backlinks)

Pendiente

Dominio nuevo, sin enlaces externos todavía. El plan original apuntaba a pedirle un backlink a not-a-numb3r.com, pero con la decisión de sacarlos como partner (ver 3.2) ya no tiene sentido. Puntos de partida a evaluar de nuevo: directorios de consultoría/negocio en España y Argentina, y notas o menciones en medios/newsletters del rubro.

**Para qué sirve:** los enlaces desde otros sitios siguen siendo una de las señales más fuertes de autoridad para Google — sin ellos, incluso el mejor contenido tarda mucho más en posicionar.

4.4 — Testimonios y prueba social

En progreso

**Actualizado 4/9:** la sección en el sitio ya existe y no era nueva — 5 logos de clientes reales con link (Barfer, Don Seitán, W Profesional Hair Therapy, Grand Market Open, Street Market Norte) en "Empresas con las que trabajamos" (`ClientsCarousel`). Este ítem había quedado marcado "Pendiente" por error: la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) (tema 4) encontró que `.agents/product-marketing.md` también decía que no existían — las dos memorias estaban desactualizadas contra el código real. Se corrigió `product-marketing.md` y se reposicionó la sección más arriba en la Home (ES/EN, antes estaba entre Recruiting y el CTA del e-book, ahora justo después de "Nosotros") vía `seo-marketing`. Sigue pendiente lo que sí falta: un testimonio corto en texto y una reseña en Google Business Profile — ninguna de las dos existe todavía.

**Precisado 4/9, vía Test 5:** `seo-marketing` auditó los 5 logos contra el Mapa de Keywords y encontró que la tensión "prueba social B2C vs. posicionamiento B2B" no es un problema de todo el sitio — está acotada a `/preventa`, la única página donde "B2B" es keyword primaria/secundaria validada con volumen real (el resto del sitio usa keywords agnósticas al tipo de cliente final del cliente de Base Core). Los 5 clientes actuales (mascotas, comida vegana, peluquería, mercados) no contradicen esa promesa, pero tampoco la refuerzan — ninguno está etiquetado como caso B2B. No recomienda reencuadrar el copy hacia "pymes de consumo y servicios" (esa frase no tiene research/volumen detrás, sería inventar una keyword nueva). Recomienda conseguir y etiquetar al menos un cliente con perfil B2B real antes de seguir escalando keywords B2B específicamente en `/preventa` — mismo testimonio pendiente de arriba, con este matiz de encaje agregado.

**Para qué sirve:** combina SEO (Google valora reseñas en la ficha local) con el problema de fondo de credibilidad — es la señal más directa de "esto ya funcionó para alguien".

4.6 — Decisión de canal social: no activar Instagram/LinkedIn de empresa

Pendiente · decisión tomada 4/9, sin ejecutar

Encontrado y resuelto en el mismo Test 5: Instagram (`@basecoresales`) tiene 41 seguidores, sigue a 7 cuentas y 1 solo post publicado — prácticamente inactivo, pese a que `/marketing` vende "Social Media" como servicio a los propios clientes. LinkedIn de empresa quedó bloqueado por authwall, sin poder confirmar actividad desde afuera. `social-content` verificó el dato por su cuenta y recomendó, con research citado (Edelman-LinkedIn B2B Thought Leadership Impact Report): **no activar ninguno de los dos todavía** — en consultoría B2B de alto involucramiento el comprador evalúa a la persona antes que al perfil corporativo, y un perfil casi vacío resta confianza en vez de sumarla. Recomienda en su lugar reforzar el LinkedIn **personal** de Mariano con contenido educativo, más sistematizar pedidos de referidos específicos (no genéricos) — no abrir ningún canal nuevo. Pauta paga queda para después: sin prueba social publicada todavía, sería gastar en algo que no convierte.

**Para qué sirve:** cierra una decisión que venía flotando sin resolver (¿vale la pena reactivar redes?) con evidencia en vez de intuición — nada de esto se ejecutó todavía, sigue siendo una decisión de dirección, no un cambio de contenido.

4.5 — Política de privacidad y consentimiento (GDPR/LOPDGDD)

Bloqueado · requiere expertise legal externa

Cero rutas legales en `src/app`, cero menciones a "privacidad/privacy/gdpr/rgpd/consentimiento" en `src/`, ningún checkbox de consentimiento en ningún formulario. Verificado por research externo (Lawwwing, Mariscal Abogados, Securiti): en España, GDPR (Art. 13) + LOPDGDD, supervisado por la AEPD, exige aviso de privacidad accesible y consentimiento inequívoco para procesar datos de formularios — no es una recomendación de buena práctica, es una obligación legal.

**Propuesta:** página de privacidad + checkbox de consentimiento en ambos formularios. El texto legal necesita revisión de alguien con expertise real en protección de datos española/argentina antes de publicarse — ningún agente de este equipo tiene autoridad legal para redactarlo por su cuenta. Sin dependencias técnicas: puede avanzar en paralelo a todo lo demás.

**Confirmado con el usuario (4/9):** nada por ahora, ni siquiera el andamiaje técnico (ruta + checkbox) — se retoma cuando haya texto legal listo o alguien con esa expertise lo revise.

**Para qué sirve:** cierra un riesgo de cumplimiento real y suma una señal de confianza donde el negocio ya identificó su desafío de credibilidad (ver 4.4). Trasladado el 4/9 desde el tema 3 de la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) — dueño único de este dato de acá en adelante.

Fase 5

## Mantenimiento continuo

El SEO no es un proyecto que se termina — una vez lanzadas las fases 1 a 4, esto es lo que se revisa de forma recurrente.

5.1 — Revisión mensual de posiciones y tráfico

Pendiente (arranca cuando Fase 2 esté lista)

Revisar en Search Console qué términos traen impresiones/clics, y en GA4 qué páginas generan más contacto.

**Para qué sirve:** permite detectar qué contenido funciona (para reforzarlo) y qué páginas no reciben visitas (para revisarlas o reescribirlas).

5.2 — Actualización periódica de contenido

Pendiente

Sumar artículos nuevos al blog (Fase 3.4) y refrescar las páginas de servicio con datos o ejemplos nuevos cada pocos meses.

**Para qué sirve:** Google favorece los sitios que se mantienen activos frente a los que quedan estáticos; además da motivos para que alguien vuelva a visitar el sitio.

5.3 — Evaluar el gate del e-book y el campo WhatsApp obligatorio

Pendiente · bloqueado hasta tener datos reales de 2.3

`whatsapp` es `required` en ambos formularios; `email` no lo es. `EbookForm.tsx` exige nombre, empresa y WhatsApp para un e-book que se descarga client-side sin depender de esos datos para nada funcional. Además, `/ebook` abre con un headline de valor claro pero sin ningún adelanto visible de "qué incluye" antes del formulario. Ambos formularios muestran Cloudflare Turnstile visible antes de habilitar el envío — fricción menor pero real, más notoria en mobile (ver también [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929)).

**Propuesta:** que `seo-marketing` decida qué campos son realmente necesarios, y evalúe si vale la pena A/B testear un gate más liviano (solo nombre + email) contra el actual, y sumar un adelanto de contenido en `/ebook`.

**Para qué sirve:** hipótesis razonable, no confirmada, de que agrega fricción evitable frente a lo que necesita un lead magnet de bajo compromiso — no se puede medir el efecto real sin 2.3 resuelto primero, ni antes ni después del cambio. Trasladado el 4/9 desde el tema 5 de la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) — dueño único de este dato de acá en adelante.

5.4 — Re-correr auditoría SEO/accesibilidad con `seo-marketing`

Pendiente · sin bloqueo

La única auditoría SEO/on-page/accesibilidad completa que corrió el equipo de agentes fue el Test 2 del [Plan de Agentes](https://claude.ai/code/artifact/73487516-6e4f-4227-a068-463ba9ea9939) (3/9) — `seo-marketing.md` recibió su regla "no inventes keywords/volúmenes/resultados de clientes" recién *después* de esa corrida, así que nunca actuó con ella desde el arranque. Desde entonces el sitio cambió (GA4, labels de formulario, H1 de Home, logos de clientes) y aparecieron dos gaps (3.10, 7.9) que se encontraron por chequeo manual de sincronía entre documentos, no por el propio ciclo del agente.

**Para qué sirve:** valida los fixes de hoy con mirada fresca y prompt ya corregido, y es la oportunidad de que el agente redescubra 3.10/7.9 por su cuenta como chequeo cruzado de su propio proceso. Sumado el 4/9, sin bloqueo — se puede correr cuando se decida.

Fase 6

## Posicionamiento en buscadores de IA (AEO/GEO)

Nueva desde el 30/8 — no existía en el plan hasta que Mariano preguntó si seguía valiendo la pena escribir para buscadores tal como está el ecosistema hoy (ChatGPT, Perplexity, AI Overviews, Gemini). Respuesta corta: sí, y el blog (3.4) es la pieza central de esta fase, no una tarea aparte.

### ¿Sigue siendo productivo armar un blog para SEO?

Sí, y por algo que cambió desde que se pensó la Fase 3.4: Google confirma que sus AI Overviews rankean sobre el mismo índice y los mismos criterios de calidad que la búsqueda tradicional — no hay una "versión IA" separada del contenido que optimizar. Lo que sí cambió es **quién más termina citando ese contenido**: ChatGPT, Perplexity y Claude arman su propia selección de fuentes, no solo el top 1 de Google, y ahí el formato que mejor entra son justo las **comparativas neutrales** — el tipo de contenido con mayor tasa de citación en motores de IA de todo el research (~33%, más que guías, listados o páginas de producto). El primer post de Base Core ("¿Qué CRM elegir?") ya es, sin haberlo buscado, el formato que más pesa.

6.1 — Bots de IA sin bloquear en robots.txt

Hecho · verificado 30/8

`robots.txt` ya permite todo (`Allow: /`, sin reglas específicas) — GPTBot, ClaudeBot, PerplexityBot, Google-Extended y Bingbot pueden rastrear el sitio sin restricción. Sumado al bloqueo de Cloudflare que ya se había encontrado y corregido (1.5), el acceso queda resuelto de los dos lados (red + robots.txt).

**Para qué sirve:** si un motor de IA no puede rastrear el sitio, no puede citarlo — es el requisito previo a cualquier otra optimización de esta fase.

6.2 — Datos estructurados con autoría (schema Article/BlogPosting)

Hecho

Cada post ya emite JSON-LD `BlogPosting` con `author`, `datePublished`, `publisher` e imagen — son justo las señales de autoría/E-E-A-T que la investigación de Princeton (KDD 2024) mide como más efectivas para citación en IA.

**Para qué sirve:** los motores de IA prefieren citar contenido con autoría verificable antes que contenido anónimo — ya está resuelto a nivel de datos; falta el paso 6.3 para que también se vea en pantalla.

6.3 — Firma visible del autor en los posts

Hecho · deployado 31/8

El schema ya declaraba a Mariano como autor (6.2), pero no aparecía como texto visible en la página del artículo. Cada post ahora muestra "Por Mariano Sandonato, Fundador de Base Core Sales" bajo el título ("By ... Founder ..." en inglés), linkeado a su LinkedIn — cierra la brecha entre lo que dice el schema y lo que efectivamente se ve/lee.

**Para qué sirve:** autoría visible es una de las señales de E-E-A-T más citadas, y no depende de tener case studies o clientes todavía — es gratis.

6.4 — Archivo /llms.txt

Hecho · deployado 31/8

Implementado como route handler (`src/app/llms.txt/route.ts`), no como archivo estático — arma sus links de blog directo desde `blogPosts`, así un artículo nuevo nunca lo deja desactualizado. Sigue el estándar [llmstxt.org](https://llmstxt.org): resumen del negocio, servicios y blog en español e inglés, con links absolutos a cada página.

**Para qué sirve:** le da a los motores de IA no-Google un resumen directo del negocio en vez de forzarlos a inferirlo rastreando todo el sitio.

6.5 — Seguimiento manual de visibilidad en IA

Pendiente (ya hay 6 posts publicados — arrancar este mes)

Sin herramientas pagas todavía (Otterly, Peec AI) — con el volumen de tráfico actual no se justifican. En su lugar: una vez por mes, probar en ChatGPT/Perplexity/Google 5-10 búsquedas reales de las páginas de servicio y del blog ("qué CRM elegir para una pyme", "cómo automatizar procesos comerciales con IA") y anotar si Base Core aparece citado, y quién aparece en su lugar.

**Para qué sirve:** es la única forma de saber si el contenido nuevo se está citando de verdad, sin gastar en herramientas prematuras para el tamaño actual del sitio.

**Qué NO hacer acá** (Google lo marca explícitamente como contraproducente): no escribir una versión del contenido "para IA" separada de la que lee una persona, no trocear los artículos en fragmentos sueltos pensando en snippets, y no bloquear los bots de IA para "proteger" el contenido de entrenamiento — bloquear también bloquea la posibilidad de que citen. El mismo contenido bien escrito para personas ya sirve para los dos.

Fase 7

## BaseHub en el sitio

Nueva desde el 1/9: `/basehub` y `/en/basehub` se mergearon a producción ese día — página propia, teaser en Home + las 5 páginas de servicio, nav/footer/sitemap actualizados. Se replicó el mismo patrón on-page que ya tiene el resto del sitio. El 3/9 se cerró el gap que tenía frente a las otras 7 páginas (validación de keywords, Fase 3.1/3.5) más los pendientes mecánicos (imagen OG, PageSpeed) — solo queda la indexación en español terminando de resolverse sola (7.5, en curso) y evaluar un post de blog (7.8). Detalle completo de copy/arquitectura en el artifact [BaseHub en el sitio](https://claude.ai/code/artifact/732c517a-8ea1-4176-a9e5-fdcb0aa2e1d7).

7.1 — Fundamentos on-page, mismo patrón que el resto del sitio

Hecho · 1/9

Title/meta description propios, canonical + hreflang (ES ↔ EN, con x-default), agregadas al sitemap dinámico, un solo H1 con jerarquía H2 vía los mismos componentes (`PageHero`/`SectionHeading`), y datos estructurados en las mismas 2 capas que las otras 5 páginas de servicio: `Service` (no `SoftwareApplication` — decisión deliberada, BaseHub va incluido en la consultoría, sin pricing público ni reviews, así que `Service` es lo honesto) y `BreadcrumbList`. `robots.txt` no necesitó cambios, ya permite todo.

**Para qué sirve:** es la misma base técnica que ya tiene el resto del sitio (Fase 1) — sin esto Google ni siquiera puede rastrear e indexar bien la página nueva.

7.2 — Enlazado interno

Hecho · 1/9

`/basehub` quedó en el nav principal, el header (entre Tecnología y Blog) y el pie de página, más un teaser propio (foto + texto) en el Home *y* en las 5 páginas de servicio existentes — 6 puntos de entrada en total, en los dos idiomas.

**Para qué sirve:** son enlaces internos reales desde páginas que ya reciben tráfico, no solo un link perdido en el footer — ayuda a que Google la rastree rápido y reparte autoridad de página hacia la nueva.

7.3 — Validar keywords con Google Keyword Planner

Hecho · validado 3/9, sin cambios de copy

Validación completa en Keyword Planner (España + Argentina, ES y EN) para "gestión de proyectos", "herramienta de gestión de proyectos", "software de gestión de proyectos", "PMO", "portal de clientes", "tablero de mando", "seguimiento de proyectos"/"seguimiento de implementación" y sus equivalentes en inglés ("project management", "project management software/tool", "project tracking", "client portal", "implementation tracking"). Resultado: **el title/meta/H1 vigentes ya estaban bien encaminados** — "gestión de proyectos"/"project management" confirma como primaria en los dos mercados y los dos idiomas, y "herramienta de gestión de proyectos" (ya usada en la meta description) valida como secundaria. No hizo falta reescribir nada. El hallazgo real es una keyword sin usar: "PMO" tiene el mejor volumen/competencia de todo este research (1.000–10.000, Baja, España *y* Argentina) — mejor encaje como ángulo de blog (ver 7.8) que como target de página, por intención mezclada (software vs. certificación). Se descartaron como ancla "software de gestión de proyectos"/"project management software" (intención de comparar herramientas sueltas tipo Monday/Trello, no de contratar consultoría) y "portal de clientes" (contaminada por búsquedas de portales de marca ajena: onvio, Coca-Cola, Endesa). Detalle completo, con las cifras de volumen/competencia/CPC de cada término, en la nueva sección 11 del [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

**Para qué sirve:** pasar de "esta parece la frase correcta" a "esta frase se busca X veces por mes con esta competencia" — en este caso confirmó el copy actual en vez de pedir cambiarlo, y de paso destapó una keyword de alto valor (PMO) que no estaba en ningún radar.

7.4 — Sumar BaseHub al Mapa de Keywords como cluster propio

Hecho · 3/9

BaseHub ya tiene su propia sección (11) en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9), mismo formato que los otros 8 pilares: tabla ES (España + Argentina) y tabla EN (España + Argentina) con volumen/competencia/CPC/decisión por keyword, más el árbol de arquitectura y la tabla resumen de la sección 3 actualizados para incluirla como noveno pilar.

**Para qué sirve:** mantiene un solo lugar con la decisión de keywords de cada página del sitio, para que ningún cambio futuro de copy dependa de memoria.

7.5 — Confirmar indexación en Google Search Console

En curso · 3/9

`/en/basehub` ya está indexada (confirmado 3/9, "Submitted and indexed", rastreada 2/9 — Google la encontró sola por los enlaces internos de 7.2, sin depender del sitemap). `/basehub` en español no: el sitemap no se había vuelto a leer desde el 31/8 (un día antes de que la página existiera), así que Google nunca la había visto. El 3/9 se reenvió el sitemap y se pidió indexación manual desde la Inspección de URLs — Google ya la rastreó ese mismo día (pasó de "URL desconocida" a "Crawled - currently not indexed"), pero todavía no decidió indexarla. Es la parte normal del proceso que ya no depende de ninguna acción más; falta solo tiempo. Se agregó `scripts/seo/gsc.py` al repo (cuenta de servicio propia, credencial fuera del repo) para consultar esto por comando en vez de entrar a la interfaz — sirve también para la Fase 5.1.

**Para qué sirve:** confirma que las páginas nuevas realmente entraron al índice de Google en vez de asumirlo porque el sitemap las lista — son cosas distintas.

7.6 — Imagen Open Graph propia

Hecho · 3/9

`/basehub` y `/en/basehub` ahora usan la captura real del dashboard (`/images/basehub-dashboard.webp`, la misma que ya se veía en el mockup de la página) como imagen OG, en vez de la imagen de marca genérica del layout raíz.

**Para qué sirve:** es lo que se ve al compartir el link de `/basehub` en LinkedIn o WhatsApp — ya no se confunde con compartir el home.

7.7 — Auditoría de rendimiento y accesibilidad (PageSpeed)

Hecho (parcial) · 3/9 — mobile a remedir

Corrida el 3/9: **Accessibility, Best Practices y SEO en 100/100** (mobile y desktop, cuatro corridas sin excepción). Desktop Performance en **98**, LCP 1,15s. Se revisó puntualmente el riesgo de que el mockup del dashboard compitiera por `priority` con el hero (la causa raíz del problema en 1.7) — no está presente, el componente ya carga sin prioridad. Mobile Performance osciló entre 63 y 87 en cuatro corridas de la misma tarde; se confirmó que es ruido de red/infraestructura de la sesión de testeo (la Home, con 95 documentado, dio el mismo tipo de degradación al re-testearla en la misma ventana) y no algo propio de `/basehub`. Falta repetir la medición mobile con la API oficial de PSI en una sesión limpia, y auditar `/en/basehub` (no llegó a correrse).

**Para qué sirve:** confirma que la página nueva no arrastra el puntaje general del sitio hacia abajo antes de que Google la rastree con tráfico real.

7.8 — Evaluar un artículo de blog relacionado

Hecho · publicado 5/9

Ángulo elegido: **"PMO: por qué tu pyme no necesita pagar uno aparte"** / **"PMO: Why Your Small Business Doesn't Need to Pay for One"** — usa directamente la keyword "PMO" (7.3: mejor volumen/competencia de todo el research de BaseHub) en vez del ángulo genérico de "seguimiento de la implementación" que también sugería este punto, porque el título resuelve de frente la intención mezclada del término (software/consultoría de PMO vs. certificación PMP/CAPM) en lugar de ignorarla. Apunta a `/basehub` y `/en/basehub`, mismo CTA que el resto del blog.

**Estadística citada:** PM Solutions, informe "State of the PMO" (2025) — verificada contra la fuente primaria, no un agregador: PMO típica con equipo de 8 personas y presupuesto anual de US$500.000, para sostener una cartera de US$10M/año. Mismo orden de magnitud en ediciones anteriores del estudio (2016, 2010). Se buscó un dato localizado (España/Argentina) y no se encontró ninguno con solidez suficiente — se optó por no inventar uno y dejarlo explícito en el propio texto, mismo criterio que los otros 6 posts (3.4).

**Gap conocido, aprobado por Mariano antes de publicar:** la validación de Keyword Planner de "PMO" (sección 11 del Mapa de Keywords) solo corrió en español — el título EN reutiliza la misma sigla sin ese dato propio en inglés (consistente con el research en inglés sistemáticamente más débil, ver sección 9 del Mapa). Publicado igual: "PMO" es vocabulario de negocios corriente también en inglés.

**Implementado:** séptimo post del blog — `src/content/blog/es/pmo-por-que-tu-pyme-no-necesita-pagar-uno-aparte.ts` y su par `src/content/blog/en/pmo-why-your-small-business-doesnt-need-to-pay-for-one.ts`, sumado a `posts.ts`. `publishedAt: "2026-10-11"`, siguiendo la misma cadencia semanal que los 6 anteriores. Verificado con `curl` en ES y EN (H1 correcto, "**BaseHub**" renderiza en negrita) y confirmado en el listado de `/blog`.

**Para qué sirve:** mismo razonamiento que el resto del blog (3.4) — contenido útil construye autoridad frente a alguien que todavía no conoce BaseHub, y de paso captura la keyword de mejor volumen/competencia de todo el cluster de BaseHub que no tenía ningún hogar en el sitio.

7.9 — H1 de /basehub y /en/basehub rompe el texto plano (misma familia que 1.17)

Resuelto 5/9

Documentado por `performance` en el Test 3 (Performance Web), señalado como "fuera de scope" de ese test y nunca trasladado acá hasta el 4/9. Mismo bug que 1.17 (ya resuelto en Home) en el `SectionHeading` de `/basehub` y `/en/basehub`: `src/app/basehub/page.tsx` línea 100 y `src/app/en/basehub/page.tsx` línea 101 — el `<br />` pegado a la palabra siguiente daba "Tu implementación, visiblede principio a fin" / "Your implementation, visiblefrom day one" en el texto plano.

**Resuelto:** mismo fix que 1.17 — agregado un espacio real después del `<br />` en los 2 archivos, sin tocar el salto de línea visual. Verificado con `curl` contra el HTML servido.

**Para qué sirve:** mismo razonamiento que 1.17 — el nombre accesible/textContent del heading no debe concatenar palabras. Detalle original del hallazgo: [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929).

### Por dónde seguir

**Fase 1 (técnica) cerrada del todo el 5/9** — los 4 hallazgos del 3/9 (1.17 H1 de Home, 1.19 formularios sin label, 1.20 housekeeping menor, 1.18 `lang` en `/en`) están todos resueltos, más 1.21 (documento resincronizado) y 1.22 (bug nuevo, misma familia que 1.17). Sin ningún pendiente técnico abierto en Fase 1. PageSpeed hoy: Accessibility, Best Practices y SEO en 100/100 en mobile y desktop; Performance en 95/99 (ver 1.14 para el detalle de la recuperación en curso). Fase 2 (medición) cerrada: 2.3 quedó resuelta el 4/9, con `generate_lead` y `file_download` marcados como eventos clave en GA4. Not-a-Numb3r ya no aparece en ningún lugar del sitio (3.2).

Google Business Profile (4.1) quedó **bloqueado**, no solo pendiente: la verificación fue rechazada y Mariano ya no está en Buenos Aires para regrabar el video que Google exige en vivo. Necesita una decisión de enfoque antes de reintentar, no solo tiempo.

**Fase 3.5 cerrada e implementada en producción el 30/8** (PR #5, mergeado a `master`): el mapa de keywords de la 3.1 quedó validado con datos reales de Keyword Planner en español (España + Argentina) e inglés para las 6 páginas de servicio, más Contacto/E-Book en ambos idiomas — análisis completo en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9). De paso se corrigió un error de fondo en el encuadre de Marketing (Mariano ejecuta con IA, no es solo asesor) que había hecho descartar keywords de ejecución sin motivo real, y se confirmó que Tecnología ya estaba en el menú principal (3.6) — no hizo falta tocar navegación.

**Blog (3.4) cerrado el 31/8:** 6 posts publicados y en producción (IA, calificación de leads, seguimiento comercial, churn/posventa, estrategia de marketing, CRM), cada título validado contra keyword research antes de escribirse. El teaser del Home pasó de mostrar 3 posts fijos en grilla a un carrusel que navega los 6, con orden de exhibición curado a mano y flechas al costado de las imágenes.

**Fase 6 (buscadores de IA) cerrada el 31/8:** las 5 tareas resueltas — bots de IA sin bloquear (6.1), schema BlogPosting con autoría (6.2), firma visible del autor en cada post (6.3), y `/llms.txt` generado dinámicamente desde `blogPosts` (6.4). Solo queda 6.5 (seguimiento manual mensual de visibilidad en IA), que recién tiene sentido arrancar ahora que hay 6 posts publicados para probar en ChatGPT/Perplexity/Google.

1. **Hecho el 4/9, vía la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826) (Test 4 del Plan de Agentes):** código de 2.3 (eventos GA4 `generate_lead`/`file_download`), 1.17 (H1) y 1.19 (labels de formulario) resueltos y pusheados a `master`. También se reposicionó la sección de logos de clientes (4.4) y se corrigió `.agents/product-marketing.md`, que decía por error que no había prueba social publicada.
2. **Cerrado 4/9:** `generate_lead` y `file_download` ya están marcados como eventos clave en GA4 — ver 2.3.
3. Arrancar el seguimiento mensual de visibilidad en IA (6.5) — sin herramientas pagas, probar 5-10 búsquedas reales y anotar si Base Core aparece citado.
4. Decidir el enfoque de Google Business Profile (4.1) antes de invertir tiempo en un segundo intento de verificación.
5. Primeros backlinks (4.3) siguen sin arrancar. De 4.4 solo falta el testimonio corto y la reseña en Google Business Profile — la sección en el sitio ya está (ver 4.4).
6. Mantenimiento continuo (5.1): con 2.3 ya cerrado, puede arrancar la revisión mensual de posiciones/tráfico — ya tiene la mitad del trabajo hecha con `scripts/seo/gsc.py` (ver 7.5) para el lado de Search Console.
7. De los hallazgos técnicos del 3/9, 1.20 y 1.18 quedaron 100% cerrados el 5/9 (ver ítems 14 y 15) — Fase 1 no tiene ningún pendiente técnico abierto.
8. **Nuevo el 4/9:** 4.5 (política de privacidad/GDPR) y 5.3 (gate del e-book) se trasladaron acá desde la [Auditoría General](https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826), que dejó de repetir su detalle — 4.5 bloqueado por expertise legal externa, 5.3 bloqueado hasta tener datos reales de 2.3.
9. **Nuevo el 4/9, encontrados auditando sincronía entre documentos:** 3.10 (H1 de `/ebook` decidido en el Mapa de Keywords el 30/8, nunca implementado) y 7.9 (mismo bug de `<br/>` que 1.17, replicado en `/basehub`, señalado por `performance` pero nunca trasladado al plan) — ninguno de los dos estaba trackeado acá hasta hoy pese a estar ya documentados en otro lado.
10. **Nuevo el 4/9:** 5.4, re-correr la auditoría SEO/accesibilidad completa con `seo-marketing` — el prompt corregido (regla "no inventes") nunca se probó desde el arranque de una corrida real, y sirve de paso para validar los fixes de hoy y redescubrir 3.10/7.9 por cuenta propia.
11. **Nuevo el 4/9, vía el Test 5 del [Plan de Agentes](https://claude.ai/code/artifact/73487516-6e4f-4227-a068-463ba9ea9939) (coordinación multi-especialista):** 1.14 pasa de "Hecho" a regresión detectada — Mobile Performance cayó de 95 a 57-60 (detalle en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929)). Se suma 1.21 (este documento desincronizado en Venta y Contacto, más el vacío de Tecnología en 1.1) y 4.6 (decisión de no activar Instagram/LinkedIn de empresa, reforzar el LinkedIn personal de Mariano). 4.4 se precisa: el hueco de prueba social B2B es específico de `/preventa`, no de todo el sitio. A pedido explícito de Mariano, nada de esto se implementó — todo queda como tarea pendiente, no como cambio aplicado.
12. **Nuevo el 5/9:** 1.14 pasa de "regresión sin tocar" a recuperación en curso — 4 fixes de performance deployados uno a la vez (Turnstile diferido, `sizes` de logos, `preload:false` en fuentes, imagen de Tecnología migrada a `next/image`), cada uno confirmado con PSI real antes del siguiente. Mobile pasó de 57-60 a 88, LCP de 10-13s a 3.6s — mejora real pero todavía no llega a "bueno" (≤2.5s). Quedan JS sin usar/legacy, CSS render-blocking, la decisión de las otras 8 imágenes de fondo, e instrumentar INP — detalle en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929).
13. **Nuevo el 5/9, segunda tanda:** el trade-off de desktop de la imagen de Tecnología se resolvió (era un salto del `deviceSizes` de Next, no el `sizes` — cap a 1200px, 262KB→128KB) y se replicó el mismo fix en `PageHero` (5 de 6 páginas; `/basehub` excluida porque su imagen no tiene margen de optimización). Se instrumentó INP real a GA4 con el hook nativo de Next 16 (paso 6 del plan cerrado). JS legacy se decidió ignorar (bug de Next sin fix seguro) y las imágenes 2x-DPR/cambio global de `next.config.ts` quedan en pausa (Lighthouse no las mide). Pendiente: remedir todo esto con PSI real. Detalle en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929).
14. **Nuevo el 5/9, vía `seo-marketing`:** 7 quick wins de contenido/técnicos implementados y comiteados de una — 3.7 (H2 "Metodología" en Home), 3.8 (links a /ebook desde /preventa y /venta), 3.9 (title de /blog), 3.10 (título de `/ebook` — con la premisa corregida: el H1 real ya estaba bien desde el 30/8, el gap era el título del breadcrumb), 7.9 (`<br/>` pegado en /basehub) y 2 de los 3 puntos de 1.20 (sitemap con fechas reales, OG de /blog y /tecnologia). Del resto del housekeeping técnico queda 1.18/1.21.
15. **Nuevo el 5/9, cierre de 1.20:** el tercer punto (redirect de doble salto del apex sin `www`) quedó resuelto — `performance` diagnosticó que Cloudflare resolvía http→https y recién Vercel hacía el salto apex→www en un segundo hop; Mariano aplicó una Redirect Rule propia en Cloudflare (host del apex → `301` directo a `https://www.basecoresales.com` con el path preservado) y quedó verificado con `curl` en un solo salto. 1.20 pasa a Hecho del todo.
16. **Nuevo el 5/9, auditoría 5.4 completa (`seo-marketing`, mirada fresca con el prompt ya corregido):** 1.21 cerrado del todo — pasada completa de las 8 páginas encontró 3 casos nuevos de meta description desincronizada (Preventa, Posventa, Marketing), sumados a los 3 ya conocidos (Venta, Contacto, Tecnología ausente de la tabla); las 3 secciones 1.1/1.2/1.6 quedaron resincronizadas con texto verificado. De paso se redescubrió por cuenta propia un bug nuevo de la familia 1.17/7.9 (`<br/>` sin espacio en la tarjeta de cliente "W Profesional", ver 1.22, más 2 casos menores en Home/Contacto arreglados de paso) y se confirmó que 1.18 (`lang` en `/en`) también afecta a `/en/blog` y `/en/basehub`. Confirmado que sigue resuelto: 1.17, 7.9, 1.19, 1.15, 3.9, 1.20.
17. **Nuevo el 5/9, cierre de 1.18:** investigado y resuelto — `/en` era un layout anidado, no un route group, así que nunca pudo declarar `<html>` y el `lang` se corregía recién en el cliente. Separados en dos root layouts hermanos (`src/app/(es)/layout.tsx`, `src/app/(en)/en/layout.tsx`), con Header/Footer/GA4/fuentes/metadata factorizados para no duplicar nada. Cero cambios de URL/copy/SEO, las 16 páginas siguen estáticas, verificado con `curl` y validado con Playwright. Único trade-off: cambiar de idioma ahora recarga la página completa en vez de navegación cliente (comportamiento esperado de Next.js con root layouts distintos). Fase 1 queda sin ningún pendiente técnico abierto.
18. **Nuevo el 5/9, cierre de 7.8:** publicado el séptimo post del blog, sobre "PMO" (mejor keyword de todo el research de BaseHub, 7.3) — título resuelve de frente la intención mezclada del término en vez del ángulo genérico alternativo. Estadística real citada (PM Solutions, "State of the PMO" 2025), sin datos inventados. Gap conocido y aprobado por Mariano: el título EN no tiene validación propia de Keyword Planner (solo corrió en español), publicado igual por ser vocabulario de negocios también en inglés. Fase 7 queda sin ningún pendiente propio.

**Fase 7 (BaseHub) avanzada:** `/basehub` y `/en/basehub` están en producción desde el 1/9 con los mismos fundamentos on-page y el mismo enlazado interno que el resto del sitio (7.1, 7.2). El 3/9 se cerraron cinco tareas más: la validación de keywords confirmó el copy vigente sin necesidad de reescribirlo (7.3) y sumó BaseHub al Mapa de Keywords como noveno pilar (7.4); la imagen Open Graph propia ya usa la captura real del dashboard (7.6); y PageSpeed dio Accessibility/Best Practices/SEO en 100/100 y Desktop en 98, con el número de Performance mobile pendiente de una remedición limpia por ruido de infraestructura en la sesión de testeo, no por un problema real de la página (7.7). De paso se montó acceso propio a la API de Search Console (service account + `scripts/seo/gsc.py` en el repo) — con eso se detectó que `/basehub` en español nunca había sido rastreada (el sitemap llevaba desde el 31/8 sin releerse) y se resolvió: sitemap reenviado e indexación solicitada, Google ya la rastreó el mismo 3/9 y confirmado indexado el 5/9 (7.5, cerrado — `/en/basehub` ya estaba indexada desde antes). El 5/9 se publicó también el séptimo post del blog, sobre PMO — la keyword con mejor volumen/competencia de todo el research de BaseHub (7.3) — como séptima pieza de contenido (7.8, cerrado). Fase 7 queda sin ningún pendiente propio.

Última actualización: 2026-09-05 (quick wins + auditoría 5.4 + cierre de 1.18 + post de blog sobre PMO) · se irá marcando como Hecho a medida que avancemos.