> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-14
> - Nota: este documento se reorganizó el 5/9 — ahora es el tablero activo (solo tareas pendientes/bloqueadas/en progreso en detalle). El registro completo de tareas ya resueltas vive en `documentation/seo/historial-seo.md` (SEO general) o en `Performance Web` (tareas de performance, sin espejo propio). El 14/9 se cerraron los 6 hallazgos de la auditoría del 13/9 (1.26, 1.27, 5.5, 5.6, 5.7, 5.8), deployados a producción y verificados; el mismo día se resolvió también el acceso a GA4 para 1.25, que pasa de Bloqueado a En progreso (esperando acumular tráfico nuevo, ya que la custom dimension registrada no es retroactiva). También el 14/9 se abrió la Fase 8 "Base Core en motores de búsqueda": 8.1 (naming) en pausa, y 8.2 (visibilidad de marca) con el análisis de seo-marketing ya entregado — hay competencia real por el término "Base Core" (Base Power, empresa de baterías con ronda de US$1.000M), Mariano confirmó avanzar con #1, #2 y #4: #1/#2 (alternateName + alias en llms.txt, PR #41) mergeados y confirmados en vivo en basecoresales.com; #4 (chequeo mensual) establecido con primera lectura de referencia.

---

Plan de SEO de Base Core

basecoresales.com · auditoría & hoja de ruta

# Plan de SEO de Base Core

Tablero activo: qué falta hacer, con el detalle completo solo de lo que sigue abierto. Las tareas ya resueltas quedan en la tabla de estado como una línea — el registro completo de cómo se resolvió cada una vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), sin perder ni un dato.

📋 [Ver Historial Técnico SEO (detalle de las 59 tareas ya resueltas)](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)

59 / 70 tareas · 1 en progreso (1.25) · +4 bloqueadas (4.1, 4.3, 4.4, 4.5) · Fase 8 nueva (8.1, 8.2)

[Diagnóstico](#diagnostico)
[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)
[Fase 8 · Base Core en buscadores](#fase8)
[Por dónde seguir](#seguir)

## Diagnóstico inicial

Esto es lo que el sitio tiene implementado *hoy*.

| Elemento | Estado | Detalle |
| --- | --- | --- |
| Title tags | Hecho | Únicos por página, en ES y EN (1.1) |
| Meta descriptions | Hecho | Únicas por página, con keywords relevantes (1.2) |
| Canonical + hreflang | Hecho | Cada página declara su URL canónica y su par ES/EN (1.3) |
| Sitemap.xml | Hecho | Generado dinámicamente, 16 páginas + posts de blog (1.4) |
| Robots.txt | Hecho | Permite rastreo total, bloquea solo `/api/` (1.5) |
| H1 único por página | Hecho | Un solo H1 por página (1.6) |
| Imágenes optimizadas | Hecho | `next/image` en los componentes clave (1.7) |
| Open Graph / Twitter Card | Hecho | Imagen propia por página de servicio (1.9, 1.10) |
| Datos estructurados (JSON-LD) | Hecho | `ProfessionalService` + `Service` + `BreadcrumbList` (1.11) |
| Bots de IA (GPTBot, ClaudeBot...) | Hecho | Sin bloqueo, ni en robots.txt ni en Cloudflare (1.5) |
| Core Web Vitals (LCP/CLS/TBT) | Hecho | Mobile 88 confirmado, TBT 40ms, LCP 3.5s (1.14) |
| `lang` correcto en `/en/*` | Hecho | Route groups separados por idioma, resuelto 5/9 (1.18) |
| Contraste de color (WCAG AA) | Hecho | Accessibility 100/100 en PageSpeed (1.15) |
| Google Search Console | Hecho | Propiedad de Dominio, 16/16 páginas indexadas (1.12, 2.2) — error de redirección en 2 slugs legacy corregido 11/9, detalle en 1.14 |
| Google Analytics / GA4 | Hecho | ID `G-0NRE1KWMBM`, eventos clave marcados (2.1, 2.3) |
| Palabras clave con volumen real | Hecho | Mapa validado con Keyword Planner en ES, AR e inglés (3.5) |
| Google Business Profile | Bloqueado | Verificación rechazada, requiere viaje — ver 4.1 |
| Blog / contenido informativo | Hecho | 7 artículos publicados, carrusel en Home (3.4) |
| /basehub + /en/basehub | Hecho | On-page, keywords, indexación y post de blog cerrados (Fase 7) |

Fase 1

## Cimientos técnicos (on-page)

Cerrada en lo esencial — 1.14 (Core Web Vitals) se confirmó el 11/9. 1.24 (retina) se investigó a fondo y cerró sin acción de código — `next/image` ya lo resolvía; 1.25 (INP de campo) ya tiene acceso a GA4 resuelto el 14/9 — queda en progreso, esperando acumular tráfico nuevo. 1.26 y 1.27, encontrados en la auditoría de performance del 13/9, se resolvieron el 14/9. Detalle técnico completo en el artifact [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929). Detalle completo del resto de las tareas ya resueltas de esta fase en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

| # | Tarea | Estado |
| --- | --- | --- |
| 1.1 | Title tag por página | Hecho |
| 1.2 | Meta description por página | Hecho |
| 1.3 | Canonical + hreflang ES/EN | Hecho |
| 1.4 | Sitemap.xml dinámico | Hecho |
| 1.5 | Robots.txt | Hecho |
| 1.6 | Un solo H1 por página | Hecho |
| 1.7 | Imágenes optimizadas | Hecho |
| 1.8 | Texto alternativo (alt) en imágenes | Hecho |
| 1.9 | Open Graph | Hecho |
| 1.10 | Twitter Card | Hecho |
| 1.11 | Datos estructurados (JSON-LD) | Hecho |
| 1.12 | Verificación en Google Search Console | Hecho |
| 1.13 | Bug de dominio canónico | Hecho |
| 1.14 | Core Web Vitals / Rendimiento | Hecho |
| 1.15 | Contraste de color (WCAG AA) | Hecho |
| 1.16 | Texto de enlaces + bug link EN | Hecho |
| 1.17 | H1 de Home rompe texto plano | Hecho |
| 1.18 | `lang` incorrecto en `/en/*` | Hecho |
| 1.19 | Formularios sin `<label>` | Hecho |
| 1.20 | Housekeeping técnico menor | Hecho |
| 1.21 | Documento desincronizado | Hecho |
| 1.22 | Bug de `<br/>` en tarjeta de cliente | Hecho |
| 1.23 | JS legacy: polyfills de Next (25KB reportados por PSI) | Hecho |
| 1.24 | Imágenes 2x-DPR (retina) | Hecho |
| 1.25 | INP real de campo | En progreso |
| 1.26 | Cap de `sizes` en el hero de Home | Hecho |
| 1.27 | Bajar `quality` en logos (Header/Footer) | Hecho |

1.25 — INP real de campo

En progreso · esperando tráfico

INP (Interaction to Next Paint) reemplazó a FID como métrica de Core Web Vitals — mide qué tan rápido responde el sitio a una interacción real de un visitante, algo que un laboratorio no puede simular fielmente.

**Acceso a GA4 resuelto (14/9):** se creó una service account de solo lectura (`ga4-readonly@basecore-seo.iam.gserviceaccount.com`, rol Viewer en la propiedad GA4) y se agregó `scripts/seo/ga4.py` — CLI que consulta la GA4 Data API para traer la distribución real de `metric_rating` (good/needs-improvement/poor) de LCP/CLS/INP, ya que GA4 no expone percentiles p75 por API para custom dimensions. Verificado funcionando con el Property ID real (`550444799`): 381 eventos LCP, 374 CLS, 128 INP en los últimos 28 días.

**Por qué sigue en progreso, no Hecho:** la custom dimension `metric_rating` se registró en GA4 Admin recién el 14/9, y no es retroactiva — el 100% del tráfico de los últimos 28 días (previo al registro) muestra `(not set)` para esa dimensión. Necesita tráfico nuevo, posterior al registro, para traer rating real. Sin fecha estimada — depende del volumen de visitas orgánico del sitio.

**Para qué sirve:** confirmar con datos de campo (no solo de laboratorio) que la interactividad del sitio es buena para visitantes reales.

Fase 2

## Medición

Cerrada del todo. Detalle completo en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

| # | Tarea | Estado |
| --- | --- | --- |
| 2.1 | Instalar Google Analytics 4 | Hecho |
| 2.2 | Verificar dominio en Search Console y enviar sitemap | Hecho |
| 2.3 | Medir conversiones clave | Hecho |

Fase 3

## Palabras clave y contenido

Cerrada del todo. Detalle completo (incluido el mapa de keywords por página) en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8) y el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

| # | Tarea | Estado |
| --- | --- | --- |
| 3.1 | Investigación de palabras clave | Hecho |
| 3.2 | Sacar a Not-a-Numb3r como partner | Hecho |
| 3.3 | Ampliar el contenido de las páginas de servicio | Hecho |
| 3.4 | Sección de blog/recursos (7/7 publicados) | Hecho |
| 3.5 | Validar el mapa de keywords con Keyword Planner | Hecho |
| 3.6 | Decisiones de arquitectura confirmadas | Hecho |
| 3.7 | H2 para la sección "Metodología" de Home | Hecho |
| 3.8 | Enlaces internos hacia /ebook | Hecho |
| 3.9 | Title de /blog sin keyword | Hecho |
| 3.10 | H1 de /ebook y /en/ebook | Hecho |

Fase 4

## SEO local y autoridad

Base Core tiene presencia física en Barcelona y Buenos Aires — ventaja de SEO local que hoy no se está usando. La fase con más tareas activas del plan.

| # | Tarea | Estado |
| --- | --- | --- |
| 4.1 | Google Business Profile | Bloqueado |
| 4.2 | Consistencia NAP (nombre/dirección/teléfono) | Hecho |
| 4.3 | Primeros enlaces entrantes (backlinks) | Bloqueado |
| 4.4 | Testimonios y prueba social | Bloqueado |
| 4.5 | Política de privacidad (GDPR/LOPDGDD) | Bloqueado |
| 4.6 | Decisión de canal social | Pendiente |

4.1 — Google Business Profile

Bloqueado · en pausa, sin viaje previsto

Verificación de Buenos Aires rechazada (29/8): Google pidió cartelería del negocio, algo que no aplica a una ficha de zona de servicio. Google exige grabar el video de verificación en vivo desde el propio local, sin aceptar uno pregrabado — y Mariano ya no está en Buenos Aires. Barcelona (oficina activa, confirmada) tiene el mismo bloqueo de fondo: requiere estar físicamente ahí.

**Decisión (5/9):** queda en pausa hasta que haya un viaje previsto a alguna de las dos ciudades — no hay nada que avanzar mientras tanto.

**Para qué sirve:** aparecer en el mapa y en el bloque local de resultados; señal fuerte de "negocio real" para quien investiga antes de contratar.

4.3 — Primeros enlaces entrantes (backlinks)

Bloqueado · decisión pendiente de Mariano

Dominio nuevo, sin enlaces externos todavía. El plan original apuntaba a not-a-numb3r.com, pero ya no tiene sentido (ver 3.2). Puntos de partida a evaluar: directorios de consultoría/negocio en España y Argentina, menciones en medios/newsletters del rubro.

**Estado (13/9):** pasa a Bloqueado — Mariano decidirá más adelante si avanza con backlinks o no, sin fecha definida.

**Para qué sirve:** una de las señales más fuertes de autoridad para Google.

4.4 — Testimonios y prueba social

Bloqueado · decisión pendiente de Mariano

Barfer, Don Seitán y W Profesional dieron el OK para un testimonio, sin saber qué escribir — Mariano pidió redactarlo junto con el equipo. `seo-marketing` investigó buenas prácticas (estructura antes/durante/después, sin superlativos genéricos) y redactó 3 copys en ES/EN basados solo en el servicio real prestado a cada cliente (sin métricas inventadas). Atribución con nombre de pila + cargo, sin apellido en los 3 — decisión deliberada pareja (uno de los clientes es familiar del dueño de Base Core).

**Implementado (6/9):** nueva sección "Testimonios" en el Home (ES/EN), debajo del carrusel de logos — grid de 3 tarjetas (cita + logo + nombre + rol), sin schema.org Review/AggregateRating (Google no muestra estrellas en reseñas "self-serving" publicadas por la propia empresa). Código completo en la rama `feat/client-testimonials` (commit `4c62ac7`), verificado con tsc/lint/build y revisado visualmente (desktop/mobile, ES/EN) en un preview de Vercel.

**Estado (13/9):** pasa a Bloqueado explícitamente — sigue desarrollado y probado, sin mergear a `master` ni pushear a producción, hasta que Mariano decida más adelante si avanza. No hay apuro: la rama y el preview no afectan producción ni se autoborran.

**Matiz de encaje:** la tensión "prueba social B2C vs. posicionamiento B2B" está acotada a `/preventa` (única página donde "B2B" es keyword validada) — ninguno de estos 3 testimonios se usó ahí. Sigue faltando la reseña en Google Business Profile (bloqueada, ver 4.1).

**Para qué sirve:** señal directa de "esto ya funcionó para alguien", clave para el desafío de credibilidad del negocio.

4.5 — Política de privacidad y consentimiento (GDPR/LOPDGDD)

Bloqueado · requiere expertise legal externa

Cero rutas legales, cero menciones a privacidad/GDPR, ningún checkbox de consentimiento. En España, GDPR (Art. 13) + LOPDGDD exige aviso de privacidad y consentimiento inequívoco para procesar datos de formularios — obligación legal, no recomendación.

**Confirmado con Mariano:** nada por ahora, ni siquiera el andamiaje técnico — se retoma cuando haya texto legal listo o alguien con esa expertise lo revise. Ningún agente de este equipo tiene autoridad legal para redactarlo.

**Para qué sirve:** cierra un riesgo de cumplimiento real.

4.6 — Decisión de canal social: no activar Instagram/LinkedIn de empresa

Pendiente · decisión tomada, sin ejecutar

Instagram (@basecoresales) prácticamente inactivo (41 seguidores, 1 post); LinkedIn de empresa sin poder confirmar actividad. Decisión ya tomada, con research citado (Edelman-LinkedIn B2B Thought Leadership Impact Report): no activar ninguno de los dos todavía — reforzar el LinkedIn **personal** de Mariano con contenido educativo, más sistematizar pedidos de referidos específicos.

**Para qué sirve:** en consultoría B2B de alto involucramiento, un perfil corporativo casi vacío resta confianza en vez de sumarla.

Fase 5

## Mantenimiento continuo

El SEO no es un proyecto que se termina — esto es lo que se revisa de forma recurrente. 5.3, 5.4 y ahora 5.5-5.8, ya cerrados, tienen detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

| # | Tarea | Estado |
| --- | --- | --- |
| 5.1 | Revisión mensual de posiciones y tráfico | Pendiente |
| 5.2 | Actualización periódica de contenido | Pendiente |
| 5.3 | Evaluar el gate del e-book | Hecho |
| 5.4 | Re-correr auditoría SEO/accesibilidad | Hecho |
| 5.5 | Bug de `<br/>` sin espacio en TechStageMatrix | Hecho |
| 5.6 | Jerarquía de headings salteada en BaseCore AI System | Hecho |
| 5.7 | H3 duplicado por tarjeta en ServiceCards | Hecho |
| 5.8 | Corregir `lastModified` de sitemap | Hecho |

5.1 — Revisión mensual de posiciones y tráfico

Pendiente, en pausa

Revisar en Search Console qué términos traen impresiones/clics, y en GA4 qué páginas generan más contacto. `scripts/seo/gsc.py` ya da acceso por comando al lado de Search Console.

**Estado:** en pausa hasta acumular más tráfico real — el sitio es nuevo y todavía no hay volumen suficiente para que el primer chequeo diga algo útil.

**Para qué sirve:** detectar qué contenido funciona y qué páginas no reciben visitas.

5.2 — Actualización periódica de contenido

Pendiente, tarea recurrente

Sumar artículos nuevos al blog y refrescar las páginas de servicio con datos o ejemplos nuevos cada pocos meses. Sin acción puntual — es un hábito a sostener, no una tarea que se cierra una vez.

**Para qué sirve:** Google favorece sitios que se mantienen activos.

Fase 6

## Posicionamiento en buscadores de IA (AEO/GEO)

4 de 5 tareas cerradas el 31/8 — detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). Solo 6.5 sigue activo.

| # | Tarea | Estado |
| --- | --- | --- |
| 6.1 | Bots de IA sin bloquear en robots.txt | Hecho |
| 6.2 | Datos estructurados con autoría | Hecho |
| 6.3 | Firma visible del autor en los posts | Hecho |
| 6.4 | Archivo /llms.txt | Hecho |
| 6.5 | Seguimiento manual de visibilidad en IA | Pendiente, recurrente |

6.5 — Seguimiento manual de visibilidad en IA

Primera ronda hecha, repetir mensualmente

Sin herramientas pagas todavía (Otterly, Peec AI) — con el volumen de tráfico actual no se justifican. En su lugar: una vez por mes, probar en ChatGPT/Perplexity/Google 5-10 búsquedas reales de las páginas de servicio y del blog, y anotar si Base Core aparece citado.

Primera ronda (5/9) — resultado

```
1 de 8 queries con citación real: "cómo calificar leads B2B" citó
/blog/como-calificar-leads-b2b junto a Pipedrive — buena señal de que
el formato funciona, aunque el dominio recién arranca. El resto (CRM,
automatización IA, seguimiento comercial, churn, estrategia de
marketing, consultoría comercial, PMO) no citó a Base Core todavía —
esperable para un dominio nuevo.
```

**Para qué sirve:** única forma de saber si el contenido se está citando de verdad, sin gastar en herramientas prematuras.

**Qué NO hacer acá** (Google lo marca como contraproducente): no escribir una versión del contenido "para IA" separada de la que lee una persona, no trocear los artículos pensando en snippets, no bloquear los bots de IA para "proteger" el contenido de entrenamiento.

Fase 7

## BaseHub en el sitio

Cerrada del todo el 5/9 — `/basehub` y `/en/basehub` en producción desde el 1/9, sin ningún pendiente propio. Detalle completo en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

| # | Tarea | Estado |
| --- | --- | --- |
| 7.1 | Fundamentos on-page | Hecho |
| 7.2 | Enlazado interno | Hecho |
| 7.3 | Validar keywords con Keyword Planner | Hecho |
| 7.4 | Sumar BaseHub al Mapa de Keywords | Hecho |
| 7.5 | Confirmar indexación en Search Console | Hecho |
| 7.6 | Imagen Open Graph propia | Hecho |
| 7.7 | Auditoría de rendimiento y accesibilidad | Hecho |
| 7.8 | Evaluar un artículo de blog relacionado | Hecho |
| 7.9 | H1 rompe el texto plano | Hecho |

Fase 8

## Base Core en motores de búsqueda

Fase nueva, abierta el 14/9. Dos temas relacionados pero separados: una decisión de naming en pausa, y un problema de visibilidad de marca que Mariano detectó y quiere resolver con prioridad.

| # | Tarea | Estado |
| --- | --- | --- |
| 8.1 | Decisión de naming: "Base Core" vs "BaseCore" | Pendiente, en pausa |
| 8.2 | Visibilidad de marca: no aparece buscando "Base Core" solo | En progreso · #1/#2/#4 en producción |

8.1 — Decisión de naming: "Base Core" vs "BaseCore"

Pendiente · en pausa, decisión de Mariano

Mariano propuso unificar todo el copy del sitio a "BaseCore" (junto, B y C mayúscula) en vez de "Base Core" (separado). Antes de tocar nada, se relevaron los 46 lugares del código donde aparece "Base Core" separado (40 de copy visible, 6 comentarios internos) y se analizó la implicancia real.

**Hallazgos del análisis (14/9):** no hay riesgo de ranking — "Base Core"/"BaseCore" nunca fue investigado como keyword en el [Mapa de Keywords](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9), no es un término de búsqueda genérica. El riesgo real es de consistencia de entidad (E-E-A-T/NAP): si el sitio cambia pero LinkedIn (`linkedin.com/company/base-core/`), el nombre de la propiedad de GA4 ("Base Core Sales") y la futura Google Business Profile (4.1, bloqueada) siguen con el nombre viejo, se fragmenta la señal de marca en vez de reforzarla. Verificado en el código: ningún H1 usa "Base Core"; sí lo usan 2 H2 (subtítulos del post de blog "PMO", ES/EN). El `` y el JSON-LD de las 16 páginas salen de una sola fuente (<code>site.ts</code>) — se actualizarían solos. Los otros ~37 casos (alt text, meta description de /basehub, footer, e-book, teasers) requieren edición manual uno por uno. Cero backlinks todavía (4.3 bloqueada) — es el momento más barato para hacer este cambio, si se hace.</p>
<p><strong>Decisión (14/9):</strong> Mariano pide dejarlo en pausa por ahora, sin implementar nada — queda documentado acá para retomar cuando decida.</p>
<p><strong>Para qué sirve:</strong> tener registrada la implicancia completa antes de decidir, sin tener que re-investigar desde cero la próxima vez que se retome.</p>
</div>
<div class="task">
<div class="task-top"><div class="task-title">8.2 — Visibilidad de marca: no aparece buscando "Base Core" solo</div><span class="chip progress"><span class="dot"></span>En progreso · #1/#2/#4 en producción, #7 bloqueado</span></div>
<p>Mariano detectó que buscando "Base Core" solo en Google, el sitio no aparece — solo aparece buscando "Base Core Sales" completo. Le preocupa que gente que solo recuerda "Base Core" no pueda encontrar la página, y quiere entender también cómo lo manejarían los buscadores de IA (ChatGPT, Perplexity, etc.) ante la misma búsqueda.</p>
<p><strong>Análisis de <code>seo-marketing</code> (14/9):</strong> el término desnudo "Base Core" tiene competencia real y grande — <strong>Base Power</strong>, empresa estadounidense de baterías domésticas, lanzó en agosto de 2026 un producto llamado "Base Core" junto con una ronda Serie D de US$1.000M y cobertura masiva de prensa (Business Wire, WSJ, Yahoo Finance). También compiten un personaje de videojuego, una plataforma de trading (BASECORE) y un theme de Drupal. Contra Base Power específicamente no hay acción de SEO propio que gane ese término en el corto/mediano plazo — es una diferencia de escala estructural, no un problema de configuración.</p>
<p><strong>Con contexto de negocio, el sitio sí aparece</strong> (2º resultado buscando "Base Core consultoría"). Dato duro de Search Console (<code>scripts/seo/gsc.py analytics</code>, 90 días): la query exacta "base core" tiene 33 impresiones con posición promedio <strong>4.1</strong> — no está ausente del índice, pierde visibilidad porque Base Power ocupa los primeros lugares con noticias recientes. Muestra chica (52 consultas totales en 90 días, dominio nuevo).</p>
<p><strong>La causa que sí es resoluble:</strong> el sitio nunca declara "Base Core" como alias en ningún lugar máquina-legible — `site.shortName` en `src/lib/site.ts` es siempre "Base Core Sales" completo (title, JSON-LD `ProfessionalService.name`, Open Graph, encabezado de `/llms.txt`), sin ningún campo `alternateName`. Confirmado también con IA: Perplexity, preguntado "¿Qué es Base Core?" sin contexto, no identificó ni a Base Power ni a Base Core Sales — la ambigüedad del término afecta igual a buscadores de IA, mismo mecanismo de fondo (falta de señal de alias + autoridad externa), no algo distinto a resolver.</p>
<div class="exact-label">Recomendaciones priorizadas (ninguna implementada — esperando confirmar con cuáles avanzar)</div>
<pre class="exact">1. alternateName: "Base Core" en el JSON-LD ProfessionalService — Bajo esfuerzo, accionable ya
2. Alias "también conocida como Base Core" en /llms.txt — Bajo esfuerzo, accionable ya
3. Bajar la expectativa de competir por el término desnudo — Decisión, no requiere trabajo
contra Base Power
4. Chequeo mensual de la query "base core" con gsc.py (junto — Bajo esfuerzo, accionable ya
a 6.5)
5. Definir ya el nombre exacto para GBP ("Base Core Sales", — Bajo esfuerzo, depende de 4.1 (bloqueada)
no "Base Core")
6. Usar "Base Core" como variante de anchor text al retomar — Esfuerzo medio, depende de 4.3 (bloqueada)
backlinks
7. Mención puntual de "Base Core" en copy acotado (footer/meta), — Esfuerzo bajo-medio, independiente
sin tocar H1 ni mezclar con la decisión de naming de 8.1 pero separado de 8.1
No recomendado por ahora: Wikidata/Wikipedia (se rechazaría, falta
notoriedad con fuentes secundarias independientes).</pre>
<p><strong>Implementado y en producción (14/9):</strong> Mariano confirmó avanzar con #1, #2 y #4 (invisibles/sin riesgo, sin dependencias). #1 y #2 — <code>alternateName: "Base Core"</code> en el JSON-LD <code>ProfessionalService</code> y la línea "Also known as: Base Core" en <code>/llms.txt</code> — mergeados vía <a href="https://github.com/marianosandonato/basecoreweb/pull/41" target="\_blank" rel="noopener">PR #41</a>, verificado con tsc/eslint/build, con <code>next start</code> local, y confirmado en vivo contra <code>basecoresales.com</code> (ES y EN): `alternateName` presente en el JSON-LD, línea nueva en `/llms.txt`, y `name` principal ("Base Core Sales") intacto sin cambios. #4 (chequeo mensual de la query "base core") queda establecido junto a 5.1/6.5; primera lectura de referencia (14/9, <code>gsc.py analytics --days 90 --query "base core"</code>): 30 impresiones en Home (posición 3.7), 2 en /contacto (9.5) y 3 en /en (8.3) — línea de base para comparar en el próximo chequeo.</p>
<p><strong>Sin implementar:</strong> #3 (bajar expectativa, ya incorporado al análisis, sin acción pendiente), #5 y #6 (dependen de 4.1 y 4.3, bloqueadas — quedan documentadas como qué hacer cuando se desbloqueen, sin acción disponible hoy). <strong>#7 — Bloqueada (14/9):</strong> Mariano decide no avanzar con ninguna mención de "Base Core" en copy visible — cualquier cosa que toque texto del sitio queda descartada para esta tarea.</p>
<p><strong>Para qué sirve:</strong> que cualquiera que conozca el negocio como "Base Core" (sin el "Sales") pueda encontrar el sitio igual, dentro de lo que es realmente posible frente a la competencia por el término.</p>
</div>
</section>
<!-- ============ POR DÓNDE SEGUIR ============ -->
<div class="callout" id="seguir">
<h3>Por dónde seguir</h3>
<p>Fases 2, 3, 5 (salvo mantenimiento recurrente), 6 y 7 quedaron cerradas del todo o en lo esencial; Fase 1 quedó cerrada en lo esencial, con una sola cola de performance en progreso (1.25, esperando tráfico) — los 6 hallazgos de la auditoría del 13/9 (1.26, 1.27, 5.5-5.8) se resolvieron y deployaron el 14/9. Fase 8 es nueva, abierta el mismo día. Toda la cronología de cómo se llegó hasta acá vive en el <a href="https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8">Historial Técnico SEO</a> (SEO general) y en <a href="https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929">Performance Web</a> (performance específicamente), no en este documento.</p>
<p>Lo activo hoy, en orden de qué depende de qué:</p>
<ul>
<li><strong>8.2 (visibilidad de marca "Base Core" en buscadores):</strong> #1, #2 y #4 en producción (<a href="https://github.com/marianosandonato/basecoreweb/pull/41" target="\_blank" rel="noopener">PR #41</a>, mergeado y verificado en vivo el 14/9). #7 bloqueada por decisión de Mariano (no tocar copy visible); #5 y #6 siguen dependiendo de 4.1 y 4.3.</li>
<li><strong>4.1 (GBP), 4.3 (backlinks), 4.4 (testimonios), 4.5 (GDPR):</strong> bloqueadas — 4.1 sin viaje previsto, 4.3 y 4.4 a la espera de que Mariano decida más adelante si avanza (13/9), 4.5 sin expertise legal disponible.</li>
<li><strong>8.1 (naming "Base Core" vs "BaseCore"):</strong> en pausa por decisión explícita de Mariano (14/9) — análisis completo ya hecho y documentado, sin implementar nada hasta que decida retomarlo.</li>
<li><strong>1.25 (INP de campo):</strong> ya no bloqueada — acceso a GA4 resuelto el 14/9 (service account, custom dimension registrada, script <code>scripts/seo/ga4.py</code> funcionando con datos reales). En progreso, esperando que se acumule tráfico posterior al registro de la custom dimension (no es retroactiva).</li>
<li><strong>4.6 (LinkedIn/referidos), 5.1 (revisión mensual), 5.2 (contenido periódico), 6.5 (visibilidad IA):</strong> en pausa por decisión explícita o esperando datos/tráfico — ninguno bloqueado por otro, se retoman cuando corresponda.</li>
</ul>
<p>Con 4 tareas bloqueadas dependiendo de decisiones externas, 1.25 esperando solo tráfico, 8.1 en pausa por decisión de Mariano y 8.2 en análisis activo, no queda ningún pendiente propio sin dueño para retomar mañana sin una nueva instrucción de Mariano.</p>
</div>
<footer class="note">
Última actualización: 2026-09-14 (Fase 8 "Base Core en motores de búsqueda": 8.1 naming en pausa (Mariano pide retomar el análisis), 8.2 con #1/#2 (PR #41) en producción, #4 establecido, y #7 bloqueada por decisión de no tocar copy visible; antes, el mismo día, se resolvió el acceso a GA4 para 1.25 y se cerraron los 6 hallazgos de la auditoría del 13/9) · se irá marcando como Hecho a medida que avancemos.
</footer>
</div>
</body></html>