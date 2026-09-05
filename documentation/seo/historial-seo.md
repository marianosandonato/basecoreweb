> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8
> - Última sincronización: 2026-09-05
> - Nota: documento nuevo, creado el 5/9 al separar el detalle histórico del Plan de SEO (`documentation/seo/plan-seo.md`), que ahora es el tablero activo.

---

Historial Técnico SEO

basecoresales.com · registro histórico

# Historial Técnico SEO

Detalle completo de cada tarea del [Plan de SEO](https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90) ya resuelta — texto exacto, commits, hallazgos y el razonamiento detrás de cada decisión. Este documento no se usa para saber "qué falta": para eso está el Plan de SEO, que solo detalla las tareas activas. Acá vive el registro permanente de todo lo que ya se hizo, para que nada se pierda al sacarlo del tablero activo.

← [Volver al Plan de SEO](https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90)

[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)
[Cronología completa](#cronologia)

Fase 1

## Cimientos técnicos (on-page)

Que Google pueda rastrear, entender e indexar cada página correctamente. Cerrada del todo el 5/9 — sin ningún pendiente técnico abierto (el único ítem activo de esta fase, 1.14 Core Web Vitals, sigue en el Plan de SEO por estar en progreso).

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

Fase 5

## Mantenimiento continuo

Único ítem cerrado de esta fase — los demás (5.1, 5.2, 5.3) siguen activos en el Plan de SEO.

5.4 — Re-correr auditoría SEO/accesibilidad con `seo-marketing`

Hecho · corrida 5/9

Única auditoría completa desde que `seo-marketing.md` recibió la regla "no inventes keywords/volúmenes/resultados de clientes" desde el arranque. Resultado: cerró 1.21 del todo (3 casos nuevos de meta description), encontró y resolvió 1.22 (bug de W Profesional) por cuenta propia, y confirmó el alcance real de 1.18.

**Para qué sirve:** validó los fixes del día con mirada fresca y confirmó que el resto seguía resuelto (1.17, 7.9, 1.19, 1.15, 3.9, 1.20).

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

Historial Técnico SEO · Base Core · creado el 5 de septiembre de 2026, a partir del Plan de SEO original · espejo de trabajo en `documentation/seo/historial-seo.md`