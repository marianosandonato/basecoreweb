> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-05
> - Nota: este documento se reorganizó el 5/9 — ahora es el tablero activo (solo tareas pendientes/bloqueadas/en progreso en detalle). El registro completo de tareas ya resueltas vive en `documentation/seo/historial-seo.md`.

---

Plan SEO Base Core

basecoresales.com · auditoría & hoja de ruta

# Plan de SEO de Base Core

Tablero activo: qué falta hacer, con el detalle completo solo de lo que sigue abierto. Las tareas ya resueltas quedan en la tabla de estado como una línea — el registro completo de cómo se resolvió cada una vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), sin perder ni un dato.

📋 [Ver Historial Técnico SEO (detalle de las 49 tareas ya resueltas)](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)

49 / 59 tareas · +2 en progreso (1.14, 4.4) · +2 bloqueadas (4.1, 4.5)

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
| Core Web Vitals (LCP/CLS/TBT) | Parcial | Mobile 88 en recuperación, LCP 3.6s — ver 1.14 |
| `lang` correcto en `/en/*` | Hecho | Route groups separados por idioma, resuelto 5/9 (1.18) |
| Contraste de color (WCAG AA) | Hecho | Accessibility 100/100 en PageSpeed (1.15) |
| Google Search Console | Hecho | Propiedad de Dominio, 16/16 páginas indexadas (1.12, 2.2) |
| Google Analytics / GA4 | Hecho | ID `G-0NRE1KWMBM`, eventos clave marcados (2.1, 2.3) |
| Palabras clave con volumen real | Hecho | Mapa validado con Keyword Planner en ES, AR e inglés (3.5) |
| Google Business Profile | Bloqueado | Verificación rechazada, requiere viaje — ver 4.1 |
| Blog / contenido informativo | Hecho | 7 artículos publicados, carrusel en Home (3.4) |
| /basehub + /en/basehub | Hecho | On-page, keywords, indexación y post de blog cerrados (Fase 7) |

Fase 1

## Cimientos técnicos (on-page)

Cerrada del todo el 5/9 — sin ningún pendiente técnico abierto. Detalle completo de las 21 tareas resueltas en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

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
| 1.14 | Core Web Vitals / Rendimiento | En progreso |
| 1.15 | Contraste de color (WCAG AA) | Hecho |
| 1.16 | Texto de enlaces + bug link EN | Hecho |
| 1.17 | H1 de Home rompe texto plano | Hecho |
| 1.18 | `lang` incorrecto en `/en/*` | Hecho |
| 1.19 | Formularios sin `<label>` | Hecho |
| 1.20 | Housekeeping técnico menor | Hecho |
| 1.21 | Documento desincronizado | Hecho |
| 1.22 | Bug de `<br/>` en tarjeta de cliente | Hecho |

1.14 — Core Web Vitals / Rendimiento (PageSpeed Insights)

En recuperación · Mobile 88, LCP 3.6s

Regresión detectada 4/9 (Mobile Performance cayó de 95 a 57-60, LCP a 10-13s). Recuperación con 6 fixes deployados uno a la vez, cada uno medido con PSI real antes de sumar el siguiente: Turnstile diferido, `sizes` de logos, `preload:false` en fuentes, imagen de Tecnología a `next/image`, cap de `deviceSizes` replicado en `PageHero` (5 de 6 páginas), e INP instrumentado a GA4 vía `useReportWebVitals` nativo de Next.js 16.

Progresión medida con PSI real

```
Mobile Performance:  57-60 (4/9) → 84 → 88
LCP mobile:          10-13s → 4.1s → 3.6s
Desktop Performance: 93 (sin regresión mayor)
```

**Todavía sin remedir:** los últimos 2 fixes (cap de deviceSizes + INP) fueron deployados el 5/9 por la tarde, después de la última medición de PSI real (Perf 88, LCP 3.6s) — falta confirmar si movieron la aguja.

**Decisiones tomadas, sin código:** JS legacy (13.7KB de polyfills) se ignora — depende de una ruta interna no soportada de Next.js, bug conocido y abierto en `vercel/next.js`. Imágenes 2x-DPR y el cambio global de `next.config.ts` quedan en pausa — Lighthouse mide a 1x-DPR, así que ese caso no es visible con la herramienta de referencia actual.

**Sin decidir todavía:** JS sin usar de GTM (~71KB) + bundle de la app (~28KB) — requiere cambiar cuándo/cómo carga GTM, mayor alcance que un ajuste puntual. CSS render-blocking (11.8KB, 160ms) — bajo impacto, no prioritario. Detalle técnico completo en [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929).

**Próximo paso:** remedir con PageSpeed Insights real (sesión limpia, sin extensiones de Chrome) para confirmar el efecto de los últimos 2 fixes antes de decidir si vale la pena encarar GTM/bundle.

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
| 4.3 | Primeros enlaces entrantes (backlinks) | Pendiente |
| 4.4 | Testimonios y prueba social | En progreso |
| 4.5 | Política de privacidad (GDPR/LOPDGDD) | Bloqueado |
| 4.6 | Decisión de canal social | Pendiente |

4.1 — Google Business Profile

Bloqueado · en pausa, sin viaje previsto

Verificación de Buenos Aires rechazada (29/8): Google pidió cartelería del negocio, algo que no aplica a una ficha de zona de servicio. Google exige grabar el video de verificación en vivo desde el propio local, sin aceptar uno pregrabado — y Mariano ya no está en Buenos Aires. Barcelona (oficina activa, confirmada) tiene el mismo bloqueo de fondo: requiere estar físicamente ahí.

**Decisión (5/9):** queda en pausa hasta que haya un viaje previsto a alguna de las dos ciudades — no hay nada que avanzar mientras tanto.

**Para qué sirve:** aparecer en el mapa y en el bloque local de resultados; señal fuerte de "negocio real" para quien investiga antes de contratar.

4.3 — Primeros enlaces entrantes (backlinks)

Pendiente, en pausa

Dominio nuevo, sin enlaces externos todavía. El plan original apuntaba a not-a-numb3r.com, pero ya no tiene sentido (ver 3.2). Puntos de partida a evaluar: directorios de consultoría/negocio en España y Argentina, menciones en medios/newsletters del rubro.

**Para qué sirve:** una de las señales más fuertes de autoridad para Google.

4.4 — Testimonios y prueba social

En progreso · esperando testimonio

La sección de logos de clientes reales (Barfer, Don Seitán, W Profesional Hair Therapy, Grand Market Open, Street Market Norte) ya existe y está reposicionada en Home. Falta un testimonio corto en texto y una reseña en Google Business Profile — ninguna de las dos existe todavía.

**Matiz de encaje:** la tensión "prueba social B2C vs. posicionamiento B2B" está acotada a `/preventa` (única página donde "B2B" es keyword validada). Conviene que el próximo testimonio sea de un cliente con perfil B2B real antes de seguir escalando esas keywords ahí.

**Estado:** se preparó un mensaje (WhatsApp/email) para pedirle el testimonio a cualquiera de los 5 clientes — a la espera de la respuesta.

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

El SEO no es un proyecto que se termina — esto es lo que se revisa de forma recurrente. Único ítem cerrado (5.4) tiene detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

| # | Tarea | Estado |
| --- | --- | --- |
| 5.1 | Revisión mensual de posiciones y tráfico | Pendiente |
| 5.2 | Actualización periódica de contenido | Pendiente |
| 5.3 | Evaluar el gate del e-book | Pendiente |
| 5.4 | Re-correr auditoría SEO/accesibilidad | Hecho |

5.1 — Revisión mensual de posiciones y tráfico

Pendiente, en pausa

Revisar en Search Console qué términos traen impresiones/clics, y en GA4 qué páginas generan más contacto. `scripts/seo/gsc.py` ya da acceso por comando al lado de Search Console.

**Estado:** en pausa hasta acumular más tráfico real — el sitio es nuevo y todavía no hay volumen suficiente para que el primer chequeo diga algo útil.

**Para qué sirve:** detectar qué contenido funciona y qué páginas no reciben visitas.

5.2 — Actualización periódica de contenido

Pendiente, tarea recurrente

Sumar artículos nuevos al blog y refrescar las páginas de servicio con datos o ejemplos nuevos cada pocos meses. Sin acción puntual — es un hábito a sostener, no una tarea que se cierra una vez.

**Para qué sirve:** Google favorece sitios que se mantienen activos.

5.3 — Evaluar el gate del e-book y el campo WhatsApp obligatorio

Pendiente, ya no bloqueado

`whatsapp` es `required` en ambos formularios; `email` no lo es. Hipótesis: agrega fricción evitable a un lead magnet de bajo compromiso. Antes bloqueado hasta tener datos reales de 2.3 (conversiones medidas) — ese punto ya cerró, así que esto puede evaluarse cuando se decida.

**Propuesta:** decidir qué campos son realmente necesarios, evaluar A/B test de un gate más liviano (nombre + email), sumar un adelanto de contenido en `/ebook`.

**Para qué sirve:** reducir fricción en la conversión del lead magnet.

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

### Por dónde seguir

Fases 1, 2, 3, 6 y 7 quedaron cerradas — sin ningún pendiente técnico ni de contenido abierto salvo lo que se detalla abajo. Toda la cronología de cómo se llegó hasta acá vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), no en este documento.

Lo activo hoy, en orden de qué depende de qué:

* **4.4 — Testimonio:** único punto con una acción tuya esperando respuesta activa (mensaje ya preparado para pedírselo a alguno de los 5 clientes).
* **1.14 — Performance:** falta remedir con PSI real (sesión limpia, sin extensiones) los últimos 2 fixes deployados el 5/9, antes de decidir si vale la pena encarar GTM/bundle sin usar.
* **4.1 (GBP), 4.3 (backlinks), 4.6 (LinkedIn/referidos), 5.1 (revisión mensual), 5.2 (contenido periódico), 5.3 (gate del e-book), 6.5 (visibilidad IA):** todos en pausa por decisión explícita — ninguno bloqueado por otro, se retoman cuando decidas.
* **4.5 — GDPR:** bloqueado hasta tener texto legal revisado por alguien con expertise real en protección de datos española/argentina.

Última actualización: 2026-09-05 (reorganización del documento — separado el detalle histórico al [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)) · se irá marcando como Hecho a medida que avancemos.