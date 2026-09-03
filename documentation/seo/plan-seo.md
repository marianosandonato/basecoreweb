> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-03

---

Plan SEO Base Core

basecoresales.com · auditoría & hoja de ruta

# Plan de SEO de Base Core

Diagnóstico completo del estado actual del sitio (código real, revisado hoy) y plan paso a paso para posicionarlo en buscadores. Cada tarea indica su estado, el texto o código exacto involucrado, y para qué sirve.

35 / 50 tareas · +1 bloqueada (GBP)

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
| Core Web Vitals (LCP/CLS/TBT) | Hecho | Mobile 95, Desktop 99 en PageSpeed — ver 1.14 |
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

Hecho · reescrito con keyword research

Reescritos el 18/8 usando el mapa de palabras clave de la Fase 3.1 — antes eran genéricos ("Preventa", "Venta"), sin validar contra ninguna búsqueda real. Patrón **"Palabra clave – Base Core Sales"** (Home es la excepción técnica: al compartir segmento con el layout raíz, Next.js no le aplica ese sufijo automático, así que va escrito a mano).

Texto exacto en producción

```
Home:      Consultoría Comercial para Pymes – Base Core Sales
Preventa:  Prospección de Clientes B2B – Base Core Sales
Venta:     Proceso de Ventas para Pymes – Base Core Sales
Posventa:  Fidelización y Retención de Clientes – Base Core Sales
Marketing: Marketing Digital para Pymes – Base Core Sales
Contacto:  Diagnóstico Comercial Gratuito – Base Core Sales
E-Book:    Proceso de Ventas desde Cero – Base Core Sales
```

**Para qué sirve:** es el texto azul y clickeable que aparece en los resultados de Google. Es la señal más fuerte de "de qué trata esta página" para el buscador, y lo primero que decide si alguien hace clic.

1.2 — Meta description por página

Hecho · reescrito con keyword research

Texto exacto en producción

```
Home:      Consultoría comercial para pymes en España y Latinoamérica:
           procesos como servicio para preventa, venta, posventa y
           marketing. Creamos bases productivas.

Preventa:  Prospección y captación de clientes B2B: armado de base de
           datos, calificación de leads y detección de oportunidades
           comerciales para conseguir más reuniones.

Venta:     Proceso de ventas para pymes: modelo comercial, pipeline y
           funnel, KPIs comerciales, forecast, esquemas de
           compensación e implementación de CRM.

Posventa:  Fidelización y retención de clientes: reducción de churn,
           cross selling y up selling, desarrollo de cuentas y
           segmentación de cartera.

Marketing: Agencia de marketing digital para pymes junto a
           Not-a-Numb3r: estrategia de marca, SEO, redes sociales,
           pauta publicitaria, diseño gráfico y sitios web.

Contacto:  Solicita un diagnóstico comercial gratuito: dejanos tus
           datos y te proponemos un plan de ruta para mejorar tus
           procesos y metodologías.

E-Book:    Descarga gratis nuestro e-book: cómo armar un proceso de
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

Hecho · texto reescrito con keyword research

Cada página tiene exactamente un H1 (vía los componentes `PageHero` / `ServiceCyclePage`), y las secciones internas usan H2/H3 de forma consistente. El texto del H1 de Preventa/Venta/Posventa/Marketing se reescribió el 18/8 para incorporar la palabra clave validada, manteniendo el estilo de pregunta ("¿Buscas...?") ya existente en la marca:

H1 en producción (ES)

```
Preventa:  ¿Buscas prospectar y captar clientes B2B?
Venta:     ¿Buscas mejorar tu proceso de ventas?
Posventa:  ¿Buscas fidelizar y retener a tus clientes?
Marketing: ¿Buscas potenciar tu marketing digital?
Contacto:  Diagnóstico Comercial Gratuito
Home:      Consultoría Comercial y Marketing (sin cambios — hero con
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

Hecho · Mobile 95 · Desktop 99

Auditoría completa el 28-29/8 con varias vueltas de PageSpeed. El LCP en mobile llegó a estar en 8.6s en la primera medición — la causa real fue la competencia de imágenes con prioridad alta descripta en 1.7, no algo estructural del sitio. Durante el proceso, los números de mobile saltaron mucho entre corridas (3.2s, 7.9s, 11.3s, 2.8s) — se confirmó que era ruido de la simulación de red lenta de Lighthouse combinado con estar testeando a veces la versión sin `www` (que redirige, sumando ~1.35s reales antes de arrancar a cargar). Con la URL correcta y todo corregido, el resultado quedó estable.

Resultado final (URL correcta, 29/8)

```
              Mobile    Desktop
Performance     95        99
LCP            2.8s      0.9s
CLS              0         0
TBT            60ms      20ms
```

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

Pendiente

El texto visible en pantalla es correcto ("Consultoría Comercial y Marketing", en dos líneas), pero `src/app/page.tsx` (y su par `/en`) arma el salto de línea con un `<br />` pegado a la palabra siguiente sin espacio — el `textContent` del H1 (lo que lee Google, lo que se copia/pega) da "Consultoría Comercialy Marketing", sin espacio real. Mismo bug en `/en` ("MarketingConsulting").

La Fase 1.6 (18/8) había dejado este H1 deliberadamente intacto por temor a "romper el layout a pixel" — pero el fix real no toca el layout ni el texto visible: `PageHero.tsx` (ya usado en las 5 páginas de servicio) resuelve este mismo caso con un patrón que preserva el salto de línea visual sin romper el texto plano. Replicarlo en Home no cambia una sola palabra del hero.

**Para qué sirve:** es el H1 más visible del sitio, en los dos idiomas — cualquier herramienta de SEO/scraping, o alguien copiando el titular, ve una palabra rota.

1.18 — `<html lang="es">` incorrecto en todo `/en/*` durante la carga inicial

Pendiente · requiere spike de Next.js 16

`src/app/layout.tsx` fija `<html lang="es">` de forma estática; en `/en`, un client component corrige el atributo recién en un `useEffect`, después de la hidratación. `curl` sobre `/en` (sin ejecutar JavaScript) confirma que el HTML que sirve el servidor dice `lang="es"` con contenido 100% en inglés — falla WCAG 3.1.1 (nivel A) en las 8+ rutas `/en`. Impacto en SEO bajo (hreflang ya está bien implementado), pero cualquier auditor de accesibilidad automatizado lo marca.

Requiere decidir el enfoque en Next.js 16 (posible reestructuración de `/en` como route group con su propio layout) antes de tocar código, coordinado con `performance` por el posible impacto en renderizado estático — no aplicar un parche rápido que no resuelva el HTML servido.

**Para qué sirve:** el atributo `lang` debe coincidir con el idioma real del contenido durante toda la carga, no solo después de hidratar.

1.19 — Formularios de Contacto y E-Book: campos sin `<label>`, solo `placeholder`

Pendiente

`ContactForm.tsx` y `EbookForm.tsx` etiquetan nombre/apellidos/empresa/whatsapp/email (y mensaje en Contacto) solo con `placeholder` — sin `<label>`, `aria-label` ni `aria-labelledby` (el único campo bien resuelto es el `<select>` de "Servicio", que sí tiene `aria-label`). Es el patrón de fallo WCAG 3.3.2 (técnica F89): el placeholder no es persistente, así que apenas alguien empieza a escribir pierde la referencia del campo. Pega directo en los dos únicos formularios cuyo objetivo es generar un lead.

**Para qué sirve:** es a la vez un problema de accesibilidad y de CRO. Fix de bajo esfuerzo: agregar label `sr-only` o `aria-label` por campo, mismo criterio ya usado en el select.

1.20 — Housekeeping técnico menor (sitemap, imágenes OG, redirect del apex)

Pendiente · bajo esfuerzo, ninguno bloqueante

Tres hallazgos de bajo impacto agrupados para no inflar el plan — detalle completo en `SEO-AUDIT.md`: (1) `sitemap.ts` pone `lastModified: new Date()` en las 32 URLs en cada request, en vez de una fecha real por página — Google puede terminar ignorando la señal; (2) `/blog`, `/en/blog`, `/tecnologia` y `/en/tecnologia` no tienen imagen Open Graph propia, a diferencia del resto del sitio; (3) `http://basecoresales.com` (sin `www`) hace un redirect de doble salto en vez de uno — configuración de Cloudflare/DNS, no código, a evaluar por `performance`.

**Para qué sirve:** higiene técnica de bajo esfuerzo — quick wins para cuando se toque cualquiera de esas áreas, sin necesidad de una tanda de trabajo dedicada.

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

Pendiente

Configurar como eventos en GA4: envío del formulario de `/contacto` y descarga del e-book.

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

Hecho · 6/6 publicados y en producción, cerrada 31/8

Hoy el único contenido "de captación" es el e-book. Un blog con artículos permite capturar búsquedas informativas antes de que la persona esté lista para contratar. Mariano fijó un orden propio de 5 artículos el 30/8 — uno por página de servicio en vez de apilar todo en CRM/Tecnología — que reparte la señal de autoridad entre Preventa, Venta, Marketing y Tecnología en la primera tanda del blog; el 31/8 se sumó un sexto para Posventa y se validó cada título contra keyword research antes de escribirlo (detalle completo en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9)). Los 6 están escritos en ES y EN, con QA de contenido propio (sin estadísticas inventadas, sin relleno genérico) antes de mergear.

1. **Publicado (6/9)** — "Qué automatizar con IA en un equipo comercial (y qué no)" → */tecnologia*. Keyword principal: "ia para empresas" + "automatización de procesos".
2. **Publicado (20/9)** — "Cómo calificar leads B2B: BANT, MEDDIC y otros métodos" → */preventa*. Keyword principal: "calificación de leads" (respaldada por "lead qualification", CPC alto pese a volumen chico); BANT/MEDDIC quedan como vocabulario del cuerpo, no como ancla.
3. **Publicado (13/9)** — "Cómo hacer seguimiento comercial: proceso para no perder oportunidades de venta" → */venta*. Keyword principal: "gestión comercial" / "procesos comerciales" (más fuerte que "seguimiento comercial" solo).
4. **Publicado (4/10)** — "Cómo prevenir el churn: señales de que un cliente está por irse" → */posventa*. Sexto artículo, sumado el 31/8. Keyword principal: "retención de clientes"; "churn" aparece en el título por ser vocabulario real ya en uso en la página, no por volumen validado como ancla.
5. **Publicado (27/9)** — "Cómo crear una estrategia de marketing para una pyme" → */marketing*. Keyword principal: "estrategia de marketing", la de mayor volumen de todo el dataset — título accionable en vez de la definición genérica, para no captar tráfico académico sin intención comercial.
6. **Publicado (30/8)** — "¿Qué CRM elegir para una pyme?" (HubSpot, Zoho, Bitrix24, Pipedrive, Salesforce, ordenados por adopción real en pymes, no por market share global) → */tecnologia*. Primer post, formato comparativo — ver [Fase 6](#fase6).

El orden de arriba es cronológico por fecha editorial de cada post; el **orden de exhibición** en el carrusel del Home y en `/blog` es curado a mano (IA → Preventa → Venta → Posventa → Marketing → CRM, fijado 31/8) y vive en `src/content/blog/posts.ts`, independiente de `publishedAt`. El teaser del Home dejó de mostrar solo los 3 posts más recientes en una grilla estática: ahora es un carrusel (`BlogCarousel.tsx`, scroll-snap nativo sin dependencias nuevas) que navega los 6, con flechas a los costados de las imágenes en vez de debajo.

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

Pendiente · copy ya definido

La sección de Home que agrupa Diagnóstico / Plan de Ruta / Estrategia / Mejora Continua no tiene ningún heading propio — salta de H1 a cuatro H3 sueltos, sin H2 intermedio. `seo-marketing` confirmó el texto sin forzar una keyword ("proceso comercial" ya está tomado por Venta y E-Book — reutilizarlo acá arriesgaba canibalizar esas dos páginas):

Texto final

```
ES: eyebrow "Cómo trabajamos" + H2 "Nuestra metodología"
EN: eyebrow "How we work"   + H2 "Our methodology"
```

**Para qué sirve:** cierra un salto de jerarquía de headings (accesibilidad) y le da a Google una unidad de sección clara donde antes no había ninguna.

3.8 — Enlaces internos hacia /ebook desde /preventa y /venta

Pendiente · anchors ya definidos

`/ebook` y `/en/ebook` hoy solo se enlazan desde el teaser del propio Home. `seo-marketing` definió el anchor text final, ajustado para no repetir (y así canibalizar) la keyword propia de cada página de origen:

Texto final (ES)

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

Pendiente · title ya definido

`/blog` y `/en/blog` tenían el único title del sitio sin ninguna keyword ("Blog" / "Blog – Base Core Sales"). `seo-marketing` confirmó "gestión comercial" (sin conflicto con el Mapa) y lo acortó para respetar la convención de longitud del sitio (~30 caracteres antes del sufijo):

Texto final

```
ES (/blog):     Blog de Gestión Comercial y CRM
EN (/en/blog):  Commercial Management & CRM Blog
```

**Oportunidad separada, no un defecto:** ninguna página de servicio tiene contenido de preguntas frecuentes ni schema `FAQPage` — captaría long-tail y rich results, pero necesita contenido real (preguntas/respuestas genuinas, no inventadas). Queda para que `seo-marketing` lo evalúe como iniciativa de una fase futura, no forma parte de esta tanda.

**Para qué sirve:** el title de `/blog` era lo único del sitio sin señal de keyword; FAQPage es una oportunidad real pendiente de contenido, no de código.

Fase 4

## SEO local y autoridad

Base Core tiene presencia física en Barcelona y Buenos Aires — eso es una ventaja de SEO local que hoy no se está usando. Esta fase también es la que más ayuda al reto de credibilidad de la marca.

4.1 — Google Business Profile

Bloqueado · verificación rechazada

**Alcance ajustado a un solo local:** Mariano opera desde Australia sin oficina propia en ninguna de las dos ciudades. Se descartó Barcelona (sin domicilio real que la respalde). Buenos Aires sí tiene respaldo legítimo: domicilio legal en CABA. Ficha creada como **negocio de zona de servicio** (sin dirección pública), categoría "Consultoría de negocios", zona de servicio CABA, teléfono `+54 11 5564-3798`.

Qué pasó (29/8)

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

**Punto abierto real, no solo un trámite pendiente:** antes de reintentar hay que resolver si vale la pena — implica otro viaje a Buenos Aires, o evaluar si un negocio de zona de servicio sin domicilio propio en la ciudad es siquiera viable para Google en este formato. Vale la pena decidir el enfoque antes de invertir tiempo en otro intento.

**Para qué sirve:** es lo que hace aparecer en el mapa y en el bloque local de resultados cuando alguien busca "consultoría comercial" + Buenos Aires. También es una de las señales más fuertes de "negocio real" para alguien que investiga antes de contratar.

4.2 — Consistencia de nombre/dirección/teléfono (NAP)

Hecho · teléfonos verificados

Confirmado el 18/8: el teléfono de Argentina (`+54 11 5564-3798`) es el mismo en el sitio, Instagram, LinkedIn y Facebook. Sin acción pendiente en ese frente — quedó como recuperación de acceso a Instagram en el camino, ya resuelto.

Punto abierto, menor: el sitio todavía dice "Barcelona - Bs.As." como ubicación, que ya no refleja la realidad (sin oficina en Barcelona, ver 4.1) — a revisar si conviene ajustarlo cuando se retome el copy del sitio.

**Para qué sirve:** Google usa esa coherencia como señal de confianza. Datos que no coinciden entre plataformas debilitan el SEO local.

4.3 — Primeros enlaces entrantes (backlinks)

Pendiente

Dominio nuevo, sin enlaces externos todavía. El plan original apuntaba a pedirle un backlink a not-a-numb3r.com, pero con la decisión de sacarlos como partner (ver 3.2) ya no tiene sentido. Puntos de partida a evaluar de nuevo: directorios de consultoría/negocio en España y Argentina, y notas o menciones en medios/newsletters del rubro.

**Para qué sirve:** los enlaces desde otros sitios siguen siendo una de las señales más fuertes de autoridad para Google — sin ellos, incluso el mejor contenido tarda mucho más en posicionar.

4.4 — Testimonios y prueba social

Pendiente

Sin case studies formales todavía, pero un testimonio corto en texto de un primer cliente (aunque sea informal) ya suma. Se puede incorporar como reseña en Google Business Profile y como sección en el sitio.

**Para qué sirve:** combina SEO (Google valora reseñas en la ficha local) con el problema de fondo de credibilidad — es la señal más directa de "esto ya funcionó para alguien".

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

Pendiente · a decidir, no urgente

Mismo patrón que 3.4: un post sobre seguimiento/gestión de la implementación (o el propio ángulo de "por qué no pagar un PMO aparte") podría capturar búsquedas informativas del cluster de 7.3 antes de que la persona esté lista para contratar — pero recién tiene sentido definir el ángulo una vez validado el volumen real en 7.3, para no escribir a ciegas.

**Para qué sirve:** mismo razonamiento que el resto del blog (3.4) — contenido útil construye autoridad frente a alguien que todavía no conoce BaseHub.

### Por dónde seguir

**Fase 1 (técnica) mayormente cerrada, con 4 hallazgos nuevos del 3/9** (1.17-1.20: H1 de Home rompe el texto plano, `lang` incorrecto en `/en`, formularios sin label, housekeeping menor) que la auditoría del sistema de agentes nuevo encontró después de que la fase se hubiera dado por cerrada — ninguno bloqueante, pero corrigen la foto de "cerrada por completo". Aparte de eso, sigue incluyendo la vuelta a fondo de rendimiento, accesibilidad y el bloqueo de Cloudflare a bots de IA que nadie sabía que existía (1.5, 1.14, 1.15, 1.16). PageSpeed hoy: Accessibility, Best Practices y SEO en 100/100 en mobile y desktop; Performance en 95/99. Fase 2 (medición) también cerrada salvo el seguimiento de conversiones puntuales (2.3). Not-a-Numb3r ya no aparece en ningún lugar del sitio (3.2).

Google Business Profile (4.1) quedó **bloqueado**, no solo pendiente: la verificación fue rechazada y Mariano ya no está en Buenos Aires para regrabar el video que Google exige en vivo. Necesita una decisión de enfoque antes de reintentar, no solo tiempo.

**Fase 3.5 cerrada e implementada en producción el 30/8** (PR #5, mergeado a `master`): el mapa de keywords de la 3.1 quedó validado con datos reales de Keyword Planner en español (España + Argentina) e inglés para las 6 páginas de servicio, más Contacto/E-Book en ambos idiomas — análisis completo en el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9). De paso se corrigió un error de fondo en el encuadre de Marketing (Mariano ejecuta con IA, no es solo asesor) que había hecho descartar keywords de ejecución sin motivo real, y se confirmó que Tecnología ya estaba en el menú principal (3.6) — no hizo falta tocar navegación.

**Blog (3.4) cerrado el 31/8:** 6 posts publicados y en producción (IA, calificación de leads, seguimiento comercial, churn/posventa, estrategia de marketing, CRM), cada título validado contra keyword research antes de escribirse. El teaser del Home pasó de mostrar 3 posts fijos en grilla a un carrusel que navega los 6, con orden de exhibición curado a mano y flechas al costado de las imágenes.

**Fase 6 (buscadores de IA) cerrada el 31/8:** las 5 tareas resueltas — bots de IA sin bloquear (6.1), schema BlogPosting con autoría (6.2), firma visible del autor en cada post (6.3), y `/llms.txt` generado dinámicamente desde `blogPosts` (6.4). Solo queda 6.5 (seguimiento manual mensual de visibilidad en IA), que recién tiene sentido arrancar ahora que hay 6 posts publicados para probar en ChatGPT/Perplexity/Google.

1. **Próxima sesión — decidido explícitamente el 3/9:** arrancar con 2.3 (medir conversiones clave: eventos de formulario de contacto y descarga de e-book en GA4). Es la tarea de mayor apalancamiento pendiente — sin esto, cualquier otra decisión del plan se sigue tomando sin saber si el sitio genera leads, y además desbloquea 5.1.
2. Arrancar el seguimiento mensual de visibilidad en IA (6.5) — sin herramientas pagas, probar 5-10 búsquedas reales y anotar si Base Core aparece citado.
3. Decidir el enfoque de Google Business Profile (4.1) antes de invertir tiempo en un segundo intento de verificación.
4. Primeros backlinks (4.3) y testimonios/prueba social (4.4), ambos sin arrancar todavía.
5. Mantenimiento continuo (5.1): revisión mensual de posiciones/tráfico recién puede arrancar cuando Fase 2 esté lista (falta 2.3) — ya tiene la mitad del trabajo hecha con `scripts/seo/gsc.py` (ver 7.5) para el lado de Search Console; falta el lado de GA4.
6. Siete hallazgos nuevos del 3/9 (1.17-1.20 técnicos, 3.7-3.9 de contenido con copy ya confirmado por `seo-marketing`) quedaron documentados y listos para implementar cuando corresponda — no compiten con la prioridad de 2.3.

**Fase 7 (BaseHub) avanzada:** `/basehub` y `/en/basehub` están en producción desde el 1/9 con los mismos fundamentos on-page y el mismo enlazado interno que el resto del sitio (7.1, 7.2). El 3/9 se cerraron cinco tareas más: la validación de keywords confirmó el copy vigente sin necesidad de reescribirlo (7.3) y sumó BaseHub al Mapa de Keywords como noveno pilar (7.4); la imagen Open Graph propia ya usa la captura real del dashboard (7.6); y PageSpeed dio Accessibility/Best Practices/SEO en 100/100 y Desktop en 98, con el número de Performance mobile pendiente de una remedición limpia por ruido de infraestructura en la sesión de testeo, no por un problema real de la página (7.7). De paso se montó acceso propio a la API de Search Console (service account + `scripts/seo/gsc.py` en el repo) — con eso se detectó que `/basehub` en español nunca había sido rastreada (el sitemap llevaba desde el 31/8 sin releerse) y se resolvió: sitemap reenviado e indexación solicitada, Google ya la rastreó el mismo 3/9 y está en proceso normal de indexación (7.5, en curso — `/en/basehub` ya está indexada). Solo queda evaluar un post de blog sobre PMO — la keyword con mejor volumen/competencia de todo el research de BaseHub, ver 7.3 — como ángulo de contenido (7.8, no urgente).

Última actualización: 2026-09-03 · se irá marcando como Hecho a medida que avancemos.