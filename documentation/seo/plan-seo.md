> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-13
> - Nota: este documento se reorganizó el 5/9 — ahora es el tablero activo (solo tareas pendientes/bloqueadas/en progreso en detalle). El registro completo de tareas ya resueltas vive en `documentation/seo/historial-seo.md` (SEO general) o en `Performance Web` (tareas de performance, sin espejo propio). El 13/9, además del cierre de 4.3/4.4/1.24/1.25/5.3, una auditoría de SEO y performance de alcance completo sumó 6 pendientes nuevos (1.26, 1.27, 5.5, 5.6, 5.7, 5.8) a resolver a partir de mañana.

---

Plan SEO Base Core

basecoresales.com · auditoría & hoja de ruta

# Plan de SEO de Base Core

Tablero activo: qué falta hacer, con el detalle completo solo de lo que sigue abierto. Las tareas ya resueltas quedan en la tabla de estado como una línea — el registro completo de cómo se resolvió cada una vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), sin perder ni un dato.

📋 [Ver Historial Técnico SEO (detalle de las 53 tareas ya resueltas)](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)

53 / 68 tareas · +5 bloqueadas (1.25, 4.1, 4.3, 4.4, 4.5)

[Diagnóstico](#diagnostico)
[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)
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

## Fase 1 · Cimientos técnicos (on-page)

Cerrada en lo esencial — 1.14 (Core Web Vitals) se confirmó el 11/9. 1.24 (retina) se investigó a fondo y cerró sin acción de código — `next/image` ya lo resolvía; 1.25 (INP de campo) se confirmó bloqueado por falta total de acceso a la API de GA4. La auditoría de performance de alcance completo del 13/9 sumó dos pendientes nuevos (1.26, 1.27) a partir de un reporte real de PageSpeed Insights. Detalle técnico completo en el artifact [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929). Detalle completo del resto de las tareas ya resueltas de esta fase en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

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
| 1.25 | INP real de campo | Bloqueado |
| 1.26 | Cap de `sizes` en el hero de Home | Pendiente |
| 1.27 | Bajar `quality` en logos (Header/Footer) | Pendiente |

**1.25 — INP real de campo** · Bloqueado · sin acceso a GA4

INP (Interaction to Next Paint) reemplazó a FID como métrica de Core Web Vitals — mide qué tan rápido responde el sitio a una interacción real de un visitante, algo que un laboratorio no puede simular fielmente.

**Estado (13/9):** instrumentado y funcionando (Next.js 16 trae `useReportWebVitals` integrado, sin librería aparte), enviando a GA4 desde el 5/9. Confirmado que no hay ninguna vía de acceso a la API de GA4 en este repo (el único script de Google APIs, `scripts/seo/gsc.py`, está scopeado solo a Search Console) — bloqueado por acceso, no solo por tráfico. Necesita que Mariano comparta el dato del dashboard directamente o habilite una credencial de lectura de GA4.

**Para qué sirve:** confirmar con datos de campo (no solo de laboratorio) que la interactividad del sitio es buena para visitantes reales.

**1.26 — Cap de `sizes` en el hero de Home** · Pendiente

Encontrado en la auditoría de performance de alcance completo del 13/9, a partir de un reporte real de PageSpeed Insights (Home, mobile 78 / desktop 94 — "Improve image delivery", ~107KB de ahorro estimado en desktop). El hero de Home (`src/app/(es)/page.tsx:147` y `src/app/(en)/en/page.tsx:166`, el LCP de la página) es la única imagen full-bleed del sitio que quedó sin el cap `sizes="(max-width: 1199px) 100vw, 1200px"` que ya tiene el resto (Footer, PageHero, TechnologyBlock, ContactSection, BaseHubTeaser, ServiceCyclePage). Confirmado en vivo: a 1350px de ancho pide la variante de 1920w en vez de 1200w — la fuente es 1917×1264 para un área mostrada de 1337×880.

**Nota menor relacionada:** el hero de `/contacto` y `/ebook` (`Breadcrumb.tsx:71`) tiene el mismo `sizes="100vw"` sin cap, pero la fuente es liviana (26.8KB) — ahorro marginal, se suma a la misma tarea por consistencia.

**Para qué sirve:** reducir el peso del LCP de la página de mayor tráfico del sitio, mismo patrón ya verificado sin riesgo visual en 5+ lugares.

**1.27 — Bajar `quality` en logos (Header/Footer)** · Pendiente

Encontrado en la misma auditoría del 13/9. Ningún `<Image>` del repo define `quality` explícito (todos corren en el default de Next, 75). El reporte de PageSpeed marcó 2 logos con margen de compresión (~26.5KB combinados) — candidatos más probables: el logo de header desktop (PNG 923×923, `Header.tsx:229`) y el logo de footer/mobile (webp). Al ser arte de logo (plano, sin degradés finos), tolera compresión más agresiva que una foto sin que se note.

**Antes de aplicar:** verificar visualmente (no a ciegas) que un `quality` más bajo (punto de partida sugerido: 60) no genere artifacts en el texto pequeño del logo.

**Para qué sirve:** el logo de header sale en todas las páginas del sitio — el ahorro se repite en cada carga.

## Fase 2 · Medición

Cerrada del todo. Detalle completo en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

| # | Tarea | Estado |
| --- | --- | --- |
| 2.1 | Instalar Google Analytics 4 | Hecho |
| 2.2 | Verificar dominio en Search Console y enviar sitemap | Hecho |
| 2.3 | Medir conversiones clave | Hecho |

## Fase 3 · Palabras clave y contenido

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

## Fase 4 · SEO local y autoridad

Base Core tiene presencia física en Barcelona y Buenos Aires — ventaja de SEO local que hoy no se está usando. La fase con más tareas activas del plan.

| # | Tarea | Estado |
| --- | --- | --- |
| 4.1 | Google Business Profile | Bloqueado |
| 4.2 | Consistencia NAP (nombre/dirección/teléfono) | Hecho |
| 4.3 | Primeros enlaces entrantes (backlinks) | Bloqueado |
| 4.4 | Testimonios y prueba social | Bloqueado |
| 4.5 | Política de privacidad (GDPR/LOPDGDD) | Bloqueado |
| 4.6 | Decisión de canal social | Pendiente |

**4.1 — Google Business Profile** · Bloqueado · en pausa, sin viaje previsto

Verificación de Buenos Aires rechazada (29/8): Google pidió cartelería del negocio, algo que no aplica a una ficha de zona de servicio. Google exige grabar el video de verificación en vivo desde el propio local, sin aceptar uno pregrabado — y Mariano ya no está en Buenos Aires. Barcelona (oficina activa, confirmada) tiene el mismo bloqueo de fondo: requiere estar físicamente ahí.

**Decisión (5/9):** queda en pausa hasta que haya un viaje previsto a alguna de las dos ciudades — no hay nada que avanzar mientras tanto.

**Para qué sirve:** aparecer en el mapa y en el bloque local de resultados; señal fuerte de "negocio real" para quien investiga antes de contratar.

**4.3 — Primeros enlaces entrantes (backlinks)** · Bloqueado · decisión pendiente de Mariano

Dominio nuevo, sin enlaces externos todavía. El plan original apuntaba a not-a-numb3r.com, pero ya no tiene sentido (ver 3.2). Puntos de partida a evaluar: directorios de consultoría/negocio en España y Argentina, menciones en medios/newsletters del rubro.

**Estado (13/9):** pasa a Bloqueado — Mariano decidirá más adelante si avanza con backlinks o no, sin fecha definida.

**Para qué sirve:** una de las señales más fuertes de autoridad para Google.

**4.4 — Testimonios y prueba social** · Bloqueado · decisión pendiente de Mariano

Barfer, Don Seitán y W Profesional dieron el OK para un testimonio, sin saber qué escribir — Mariano pidió redactarlo junto con el equipo. `seo-marketing` investigó buenas prácticas (estructura antes/durante/después, sin superlativos genéricos) y redactó 3 copys en ES/EN basados solo en el servicio real prestado a cada cliente (sin métricas inventadas). Atribución con nombre de pila + cargo, sin apellido en los 3 — decisión deliberada pareja (uno de los clientes es familiar del dueño de Base Core).

**Implementado (6/9):** nueva sección "Testimonios" en el Home (ES/EN), debajo del carrusel de logos — grid de 3 tarjetas (cita + logo + nombre + rol), sin schema.org Review/AggregateRating (Google no muestra estrellas en reseñas "self-serving" publicadas por la propia empresa). Código completo en la rama `feat/client-testimonials` (commit `4c62ac7`), verificado con tsc/lint/build y revisado visualmente (desktop/mobile, ES/EN) en un preview de Vercel.

**Estado (13/9):** pasa a Bloqueado explícitamente — sigue desarrollado y probado, sin mergear a `master` ni pushear a producción, hasta que Mariano decida más adelante si avanza. No hay apuro: la rama y el preview no afectan producción ni se autoborran.

**Matiz de encaje:** la tensión "prueba social B2C vs. posicionamiento B2B" está acotada a `/preventa` (única página donde "B2B" es keyword validada) — ninguno de estos 3 testimonios se usó ahí. Sigue faltando la reseña en Google Business Profile (bloqueada, ver 4.1).

**Para qué sirve:** señal directa de "esto ya funcionó para alguien", clave para el desafío de credibilidad del negocio.

**4.5 — Política de privacidad y consentimiento (GDPR/LOPDGDD)** · Bloqueado · requiere expertise legal externa

Cero rutas legales, cero menciones a privacidad/GDPR, ningún checkbox de consentimiento. En España, GDPR (Art. 13) + LOPDGDD exige aviso de privacidad y consentimiento inequívoco para procesar datos de formularios — obligación legal, no recomendación.

**Confirmado con Mariano:** nada por ahora, ni siquiera el andamiaje técnico — se retoma cuando haya texto legal listo o alguien con esa expertise lo revise. Ningún agente de este equipo tiene autoridad legal para redactarlo.

**Para qué sirve:** cierra un riesgo de cumplimiento real.

**4.6 — Decisión de canal social: no activar Instagram/LinkedIn de empresa** · Pendiente · decisión tomada, sin ejecutar

Instagram (@basecoresales) prácticamente inactivo (41 seguidores, 1 post); LinkedIn de empresa sin poder confirmar actividad. Decisión ya tomada, con research citado (Edelman-LinkedIn B2B Thought Leadership Impact Report): no activar ninguno de los dos todavía — reforzar el LinkedIn **personal** de Mariano con contenido educativo, más sistematizar pedidos de referidos específicos.

**Para qué sirve:** en consultoría B2B de alto involucramiento, un perfil corporativo casi vacío resta confianza en vez de sumarla.

## Fase 5 · Mantenimiento continuo

El SEO no es un proyecto que se termina — esto es lo que se revisa de forma recurrente. 5.3 y 5.4, ya cerrados, tienen detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). La auditoría de SEO de alcance completo del 13/9 sumó 4 pendientes nuevos (5.5-5.8), todos ligados al trío de cajones nuevos de `/tecnologia` más un patrón heredado nunca revisado.

| # | Tarea | Estado |
| --- | --- | --- |
| 5.1 | Revisión mensual de posiciones y tráfico | Pendiente |
| 5.2 | Actualización periódica de contenido | Pendiente |
| 5.3 | Evaluar el gate del e-book | Hecho |
| 5.4 | Re-correr auditoría SEO/accesibilidad | Hecho |
| 5.5 | Bug de `<br/>` sin espacio en TechStageMatrix | Pendiente |
| 5.6 | Jerarquía de headings salteada en BaseCore AI System | Pendiente |
| 5.7 | H3 duplicado por tarjeta en ServiceCards | Pendiente |
| 5.8 | Corregir `lastModified` de sitemap | Pendiente |

**5.1 — Revisión mensual de posiciones y tráfico** · Pendiente, en pausa

Revisar en Search Console qué términos traen impresiones/clics, y en GA4 qué páginas generan más contacto. `scripts/seo/gsc.py` ya da acceso por comando al lado de Search Console.

**Estado:** en pausa hasta acumular más tráfico real — el sitio es nuevo y todavía no hay volumen suficiente para que el primer chequeo diga algo útil.

**Para qué sirve:** detectar qué contenido funciona y qué páginas no reciben visitas.

**5.2 — Actualización periódica de contenido** · Pendiente, tarea recurrente

Sumar artículos nuevos al blog y refrescar las páginas de servicio con datos o ejemplos nuevos cada pocos meses. Sin acción puntual — es un hábito a sostener, no una tarea que se cierra una vez.

**Para qué sirve:** Google favorece sitios que se mantienen activos.

**5.5 — Bug de `<br/>` sin espacio en TechStageMatrix** · Pendiente

Encontrado en la auditoría de SEO de alcance completo del 13/9 — misma familia que 3 bugs ya corregidos antes (1.17, 1.22, 7.9). En `src/components/TechStageMatrix.tsx:153-158`, el título se arma concatenando las dos mitades con un `<br />` entre medio, sin espacio real después del salto de línea. Confirmado en vivo con Playwright, en ambos idiomas: ES `/tecnologia` da `textContent` "La misma tecnología,en todo el ciclo comercial"; EN `/en/tecnologia` da "The same technology,across your entire sales cycle". Contenido nuevo del 13/9, nunca había pasado por una auditoría.

**Para qué sirve:** el nombre accesible/textContent no debe concatenar palabras (mismo criterio que los 3 casos anteriores).

**5.6 — Jerarquía de headings salteada en BaseCore AI System** · Pendiente

Encontrado en la misma auditoría. En `/tecnologia` y `/en/tecnologia`, la sección "BaseCore AI System" salta de H2 directo a H4 (las 5 tarjetas "Agentes en producción" usan `<h4>` en `AiSystemSection.tsx:202`) sin H3 intermedio, y luego vuelve a H3 para "Investigación en tiempo real"/"Un mismo proceso, en cada tarea". Secuencia real medida: H2 → H4×5 → H3×5. No rompe nada visualmente, pero es una mala práctica de accesibilidad/SEO. Contenido nuevo del 13/9 (rediseño de agentes), nunca auditado.

**Fix sugerido:** bajar las 5 tarjetas a H3, o insertar un H3 propio para "Agentes en producción" antes de ellas.

**Para qué sirve:** una jerarquía de encabezados lógica ayuda a Google y a lectores de pantalla a entender la estructura de la página.

**5.7 — H3 duplicado por tarjeta en ServiceCards** · Pendiente

Encontrado en la misma auditoría — patrón heredado del theme original, nunca señalado antes (no es contenido nuevo). `src/components/ServiceCards.tsx` renderiza el título de cada tarjeta dos veces como `<h3>`: una en la caja blanca visible y otra dentro de la capa de hover, que está siempre presente en el DOM (sin `aria-hidden`, sin `sr-only`) y solo se oculta visualmente al no estar en hover. Confirmado en vivo en Home ("Ciclos de Venta"): la lista de headings trae "Preventa"/"Preventa", "Venta"/"Venta", "Posventa"/"Posventa" duplicados. El mismo componente se reutiliza en las 5 páginas de ciclo (sección "Puestos"), así que el patrón se repite ahí también.

**Fix sugerido:** agregar `aria-hidden="true"` a la capa de hover completa, o bajar su título a un elemento no-heading con `aria-hidden`.

**Para qué sirve:** un lector de pantalla no debería anunciar cada título dos veces al navegar por encabezados.

**5.8 — Corregir `lastModified` de sitemap** · Pendiente

Encontrado en la misma auditoría. `src/app/sitemap.ts` trae un comentario explícito de mantener `lastModified` al día en cada cambio de copy real, pero no se cumplió en los commits recientes: `/tecnologia` y `/en/tecnologia` siguen en "2026-09-05" pese a los 3 rediseños del 13/9 (TechStageMatrix, Agentes en producción, TechnologyBlock); `/marketing`, `/en/marketing` y las 3 páginas de ciclo siguen en "2026-08-30" pese al rediseño de `TechnologyBlock` del 13/9 (afecta su copy visible); Home sigue en "2026-09-05" pese al cambio de hero mobile + cajón "Nosotros" del 12/9.

**Para qué sirve:** no es un error técnico grave (Google no penaliza fechas viejas), pero socava la señal de frescura real que el propio código dice perseguir — housekeeping de bajo esfuerzo, mismo criterio que 1.20.

## Fase 6 · Posicionamiento en buscadores de IA (AEO/GEO)

4 de 5 tareas cerradas el 31/8 — detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). Solo 6.5 sigue activo.

| # | Tarea | Estado |
| --- | --- | --- |
| 6.1 | Bots de IA sin bloquear en robots.txt | Hecho |
| 6.2 | Datos estructurados con autoría | Hecho |
| 6.3 | Firma visible del autor en los posts | Hecho |
| 6.4 | Archivo /llms.txt | Hecho |
| 6.5 | Seguimiento manual de visibilidad en IA | Pendiente, recurrente |

**6.5 — Seguimiento manual de visibilidad en IA** · Primera ronda hecha, repetir mensualmente

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

## Fase 7 · BaseHub en el sitio

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

## Por dónde seguir

Fases 2, 3, 5 (salvo mantenimiento recurrente y los 4 hallazgos nuevos de la auditoría), 6 y 7 quedaron cerradas del todo o en lo esencial; Fase 1 quedó cerrada en lo esencial, con una cola de performance bloqueada (1.25) y dos pendientes nuevos (1.26, 1.27). Toda la cronología de cómo se llegó hasta acá vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8) (SEO general) y en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929) (performance específicamente), no en este documento.

Lo activo hoy, en orden de qué depende de qué:

- **1.26 (cap de sizes en el hero de Home), 1.27 (quality de logos), 5.5 (bug de <br/> en TechStageMatrix), 5.6 (jerarquía de headings en BaseCore AI System), 5.7 (H3 duplicado en ServiceCards), 5.8 (lastModified de sitemap):** Pendiente — 6 hallazgos nuevos de la auditoría de SEO y performance de alcance completo del 13/9, priorizados por Mariano para empezar a resolver mañana. Sin bloqueos entre sí.
- **4.1 (GBP), 4.3 (backlinks), 4.4 (testimonios), 4.5 (GDPR), 1.25 (INP de campo):** bloqueadas — 4.1 sin viaje previsto, 4.3 y 4.4 a la espera de que Mariano decida más adelante si avanza (13/9), 4.5 sin expertise legal disponible, 1.25 sin ninguna vía de acceso a la API de GA4 en el repo (13/9).
- **4.6 (LinkedIn/referidos), 5.1 (revisión mensual), 5.2 (contenido periódico), 6.5 (visibilidad IA):** en pausa por decisión explícita o esperando datos/tráfico — ninguno bloqueado por otro, se retoman cuando corresponda.

Última actualización: 2026-09-13 (auditoría de SEO y performance de alcance completo: se suman 6 pendientes nuevos — 1.26, 1.27, 5.5, 5.6, 5.7, 5.8 — a resolver a partir de mañana; ver también el cierre de 4.3/4.4/1.24/1.25/5.3 antes en el día) · se irá marcando como Hecho a medida que avancemos.