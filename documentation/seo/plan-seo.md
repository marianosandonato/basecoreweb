> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/artifact/XPrZBTCe2b7tvbzzNuf1GT
> - Última sincronización: 2026-09-24
> - Nota 24/9: nueva 8.4 (Bloqueada) — parte de sitio/SEO de sumar "IA" al posicionamiento; dueño de la evaluación: tarea 10.2 del Marketing Strategy. 79/90 tareas.
> - Nota: nueva tarea 5.11 "Posicionamiento orgánico Base Core — revisión mensual" (formaliza el chequeo de 8.2 #4), primera ronda corrida. 79/89 tareas.

---

BaseCoreWeb: SEO y Performance

basecoresales.com · auditoría & hoja de ruta

# BaseCoreWeb: SEO y Performance

Tablero activo: lo que está Pendiente o En progreso vive arriba de todo, agrupado por fase, para no tener que bajar a cada una a buscarlo. Cada fase conserva su tabla de estado completa (incluidas las tareas Bloqueadas) — el registro de lo ya resuelto vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), sin perder ni un dato.

📋 [Ver Historial Técnico SEO (detalle de las 68 tareas ya resueltas)](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)

79 / 90 tareas · +5 bloqueadas (4.1, 4.3, 4.4, 4.5, 8.4)

[Activo hoy](#activo)
[Diagnóstico](#diagnostico)
[Fase 1 · Técnico](#fase1)
[Fase 2 · Medición](#fase2)
[Fase 3 · Contenido](#fase3)
[Fase 4 · Local y autoridad](#fase4)
[Fase 5 · Mantenimiento](#fase5)
[Fase 6 · Buscadores de IA](#fase6)
[Fase 7 · BaseHub](#fase7)
[Fase 8 · Base Core en buscadores](#fase8)

## Activo hoy

Todo lo que está Pendiente o En progreso, agrupado por fase — el detalle completo de cada tarea vive acá. Las tareas Bloqueadas se quedan documentadas dentro de su fase, no en esta sección; en la fase de origen de lo que sí está acá queda solo la tabla de estado, sin repetir el detalle.

### Fase 5 · Mantenimiento continuo

5.1 — Revisión mensual de posiciones y tráfico

Pendiente, en pausa

Revisar en Search Console qué términos traen impresiones/clics, y en GA4 qué páginas generan más contacto. `scripts/seo/gsc.py` ya da acceso por comando al lado de Search Console.

**Estado:** en pausa hasta acumular más tráfico real — el sitio es nuevo y todavía no hay volumen suficiente para que el primer chequeo diga algo útil.

**Para qué sirve:** detectar qué contenido funciona y qué páginas no reciben visitas.

5.2 — Actualización periódica de contenido

Pendiente, tarea recurrente

Sumar artículos nuevos al blog y refrescar las páginas de servicio con datos o ejemplos nuevos cada pocos meses. Sin acción puntual — es un hábito a sostener, no una tarea que se cierra una vez.

**Para qué sirve:** Google favorece sitios que se mantienen activos.

5.9 — Performance con PageSpeed Mensual

Pendiente, tarea recurrente

Reemplaza a 1.28 desde el 21/9 — mismo mecanismo (`scripts/seo/psi.py`), cadencia mensual en vez de por cada reporte nuevo, y sin objetivo activo de score. Chequeo de rutina: correr PSI mobile/desktop de Home una vez al mes, y solo actuar si aparece un hallazgo concreto y accionable (no perseguir el número en sí).

**Por qué el cambio de cadencia:** 1.28 se cerró el 21/9 después de confirmar que el mayor peso restante (runtime de React/Next, GTM ya diferido al máximo razonable, fuentes necesarias arriba del fold) es costo estructural de la arquitectura actual, no fruta madura sin tocar — y que el score de laboratorio de PSI es ruidoso (±10-15 puntos entre corridas) frente al dato de campo real que sí usa Google para rankear (ver 1.25, en el Historial Técnico SEO). Detalle completo de la investigación en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

**Para qué sirve:** mantener un ojo sobre regresiones reales de performance sin invertir tiempo en perseguir ruido de laboratorio.

5.10 — Seguimiento manual de visibilidad en IA

Primera ronda hecha, repetir mensualmente

Renumerada desde 6.5 el 21/9 — mismo mantenimiento mensual que el resto de esta fase, no una tarea de una sola vez de Fase 6. Sin herramientas pagas todavía (Otterly, Peec AI) — con el volumen de tráfico actual no se justifican. En su lugar: una vez por mes, probar en ChatGPT/Perplexity/Google 5-10 búsquedas reales de las páginas de servicio y del blog, y anotar si Base Core aparece citado.

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

**Qué NO hacer en 5.10** (Google lo marca como contraproducente): no escribir una versión del contenido "para IA" separada de la que lee una persona, no trocear los artículos pensando en snippets, no bloquear los bots de IA para "proteger" el contenido de entrenamiento.

5.11 — Posicionamiento orgánico Base Core — revisión mensual

Primera ronda hecha, repetir mensualmente

Formaliza como tarea propia y recurrente lo que la #4 de 8.2 había arrancado como chequeo puntual — ahora que 8.2 está cerrada del todo, este seguimiento pasa a vivir acá, mismo criterio que 5.10. Una vez por mes, `scripts/seo/gsc.py analytics` sobre la query "base core" (y la variante sin espacio "basecore") para ver si las mejoras de 8.2 (`alternateName`, `disambiguatingDescription`, alias en `/llms.txt`, mención en el footer, perfil de LinkedIn) mueven la aguja.

Primera ronda (21/9) — query "base core", 90 días

```
Página          Clics  Impr.  CTR    Posición
Home                1     36  2.8%   3.6
/basehub            0      1  0.0%   8.0
/contacto           0      2  0.0%   9.5
/en                 0      5  0.0%   7.6

Sin cambios de fondo respecto a la línea de base del 18/9 (Home 34
impr/pos 3.6, /contacto 2/9.5, /en 5/7.6, /basehub 1/8.0) — Home
sumó +2 impresiones manteniendo la misma posición, el resto quedó
idéntico. Esperable a solo 3 días de la ronda anterior de 8.2.

Corte a 28 días (tendencia más reciente): Home 33 impr, 1 clic,
CTR 3.0%, posición 3.4 — levemente mejor que el acumulado de 90
días (3.6). Dato a confirmar en la próxima ronda, no una tendencia
consolidada todavía.
```

Variante sin espacio "basecore" (90 días)

```
basecoresales.com/ (sin www)      1 impr / pos 9.0
www.basecoresales.com/           5 impr / pos 4.8

Idéntico a la línea de base del 18/9, sin cambios.
```

**Pulso general del sitio (todas las queries, agregado):** 28 días — 337 impresiones, 1 clic, posición promedio ponderada ≈36.8 (60 combinaciones query+página). 90 días — 296 impresiones, 1 clic, posición ≈36.9. Que el acumulado de 90 días sea menor que el de 28 no es una caída real: es un comportamiento conocido de la API de Search Console (umbral de anonimización/reagrupamiento distinto según la ventana, y los últimos días de cualquier rango son datos provisionales) — queda anotado para no malinterpretarlo como regresión en la próxima lectura. Fuera del término de marca, el sitio sigue con clics casi nulos y posiciones mayoritariamente en la segunda/tercera página para las keywords de contenido del blog — consistente con lo ya diagnosticado en fases anteriores, sin sorpresas nuevas.

**Para qué sirve:** confirmar con datos reales, mes a mes, si las señales de desambiguación implementadas en 8.2 empiezan a traducirse en más impresiones o mejor posición para "Base Core" — sin gastar en herramientas pagas de tracking.

### Fase 8 · Base Core en motores de búsqueda

8.3 — Auditoría de marca: registro, riesgo legal y sociedad

Pendiente · esperando decisión de Mariano

Mariano pidió ir más a fondo que 8.1/8.2: no SEO, sino la pregunta de negocio — ¿el nombre "Base Core" se puede conservar a futuro?, ¿hay que registrarlo?, ¿hay riesgo real de disputa legal con BaseCore™ (geoceldas) o Base Power?, ¿conviene dar de alta una sociedad?, ¿esa sociedad debería llevar otra razón social y usar "Base Core" solo como nombre de fantasía?

**Research (14/9):** confirmado que la marca primaria de Base Power ("BASE POWER", no "Base Core") quedó **abandonada** en USPTO por no presentar declaración de uso — nunca llegó a registro. BaseCore™ (geoceldas, basecore.co) usa `™` sin evidencia de registro concedido, en un rubro (construcción) y clase Niza distintos de consultoría (35). Ningún buscador oficial de marcas (INPI, OEPM, EUIPO, USPTO, WIPO) es accesible por herramientas automatizadas — el riesgo se estima "bajo" con la evidencia disponible, pero sin la certeza que solo da una búsqueda profesional de antecedentes.

**Recomendación del análisis:** conservar "Base Core" (refuerza la decisión ya tomada en 8.1); registrar la marca en INPI (Argentina, ~USD 52 por 2 clases) y OEPM (España, ~211 €) a nombre de Mariano como persona física — no hace falta sociedad para eso; tratar la constitución de una sociedad (SAS en Argentina, SL en España) como decisión aparte, de facturación/fiscal, no de protección de marca; si se constituye, usar "Base Core" como nombre de fantasía/nombre comercial con una razón social distinta es totalmente viable en los dos países.

Detalle completo — panorama competitivo, costos y plazos de registro en AR/ES/UE, comparación de sociedades, mecánica legal del nombre de fantasía y plan de acción priorizado en 8 pasos — en el artifact dedicado: [Auditoría de Marca de Base Core](https://claude.ai/code/artifact/47aedb68-5cab-48da-9797-11eb0df79f28).

**Sin implementar:** esto no es asesoría legal — antes de presentar cualquier solicitud de marca o constituir una sociedad, el análisis recomienda pasar por un agente de la propiedad industrial/abogado de marcas (mismo criterio que 4.5, GDPR). Esperando que Mariano revise la auditoría completa y confirme con qué pasos del plan de acción avanzar.

**Para qué sirve:** saber si "Base Core" es un nombre en el que vale la pena seguir invirtiendo (SEO, contenido, marca) o si conviene resolver algo antes de seguir construyendo sobre él.

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

Cerrada en lo esencial — 1.14 (Core Web Vitals) se confirmó el 11/9. 1.24 (retina) se investigó a fondo y cerró sin acción de código — `next/image` ya lo resolvía; 1.25 (INP de campo) cerrada el 21/9 — con una semana de tráfico posterior al registro de la custom dimension (14/9), `scripts/seo/ga4.py` trajo 42 eventos INP con rating real: 41 good (71.9%) y 1 needs-improvement (1.8%), 97.6% de lo medido. Supera con margen el umbral de 75% "good" que usa Core Web Vitals para dar una métrica por aprobada — confirma con datos de campo que la interactividad del sitio es buena para visitantes reales, que era el objetivo de la tarea. 1.26 y 1.27, encontrados en la auditoría de performance del 13/9, se resolvieron el 14/9. 1.28 se dio por cerrada del todo el 21/9 — reemplazada por 5.9 (Fase 5), chequeo mensual sin objetivo activo de score; detalle completo de las 4 rondas de investigación en el Historial Técnico SEO. 1.29-1.35 y 1.38 (title de /en sin sufijo; OG/Twitter de /contacto; Breadcrumb y nav del Header en español; H2 faltante en /blog; title/description de /basehub; title de /en/presales cerrado sin cambio; 4 meta descriptions cortas) se cerraron el 18/9, detalle movido al Historial Técnico SEO — de las 9 tareas migradas de la Auditoría Final (1.29-1.37), no queda ninguna sin cerrar — 1.37 (Turnstile en iOS) confirmada por Mariano en su iPhone real el 20/9, detalle completo en el Historial Técnico SEO. 1.36 (18/9, también migrada de esa auditoría, ahí era `perf-hero-tecnologia`) se cerró directo sin tarea activa: la imagen que marcaba como "hero (LCP)" de /tecnologia (bg-5.jpg, 68KB) es en realidad el fondo de la sección de Contacto al final de la página — no la imagen visible al cargar, así que no pesa en el LCP real. El hero real de /tecnologia usa el componente PageHero compartido, ya cubierto por 1.26/1.27. Sigue como CSS background a propósito (decisión ya tomada en PLAN-VERCEL.md: solo los heroes reales pasan a next/image, el resto de fondos se queda así). Detalle técnico completo de performance (1.14, 1.23-1.27) y del resto de las tareas ya resueltas de esta fase, todo consolidado en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8) — el artifact Performance Web se archivó del todo y se eliminó el 21/9, sin contenido propio fuera del Historial. 1.39-1.41 fueron nuevas el 19-20/9: 3 hallazgos de UI que Mariano encontró navegando el sitio — este documento pasa a ser también el tablero de ese tipo de hallazgos, ya que la Auditoría Final quedó archivada y cerrada del todo el 19/9. Las 3 quedaron cerradas: 1.39 (margen del cajón "Etapas") y 1.41 (flip cards, bug ya trabajado antes en la Auditoría Final) sin objeciones; 1.40 (overlay de /marketing) necesitó 3 rondas — Mariano confirmó la versión final el 20/9 tras revisar un preview de Vercel. Detalle completo de las 3 en el Historial Técnico SEO. Con esto, Fase 1 queda sin ningún pendiente propio de UI/UX. Nota de proceso (20/9): el widget de revisión interactiva que este documento tuvo brevemente se sacó — duplicaba el tamaño del archivo y dejaba una línea sin poder leer por completo, forzando un publish sin la verificación normal de conflictos. De acá en más, el veredicto de revisión se registra por chat, no por un widget en el artifact.

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
| 1.25 | INP real de campo | Hecho |
| 1.26 | Cap de `sizes` en el hero de Home | Hecho |
| 1.27 | Bajar `quality` en logos (Header/Footer) | Hecho |
| 1.28 | Performance con PageSpeed Insights (mobile/desktop, recurrente) | Hecho |
| 1.29 | Title de /en sin sufijo de marca | Hecho |
| 1.30 | /contacto sin Open Graph / Twitter Card propio | Hecho |
| 1.31 | Breadcrumb dice "Home" en inglés en páginas ES | Hecho |
| 1.32 | /blog salta de H1 a H3 sin H2 | Hecho |
| 1.33 | Title/description largos de /basehub | Hecho |
| 1.34 | Title de /en/presales cerca del límite | Hecho |
| 1.35 | 4 meta descriptions cortas | Hecho |
| 1.36 | Imagen de fondo de ContactSection en /tecnologia, mal etiquetada como "hero" | Hecho |
| 1.37 | Turnstile colgado en iOS (Private Relay/ITP) en /contacto | Hecho |
| 1.38 | Nav principal (Header) dice "Home" en inglés en páginas ES | Hecho |
| 1.39 | Margen superior corto en el cajón "Etapas" (preventa/venta/posventa) | Hecho |
| 1.40 | Overlay azul del hero de /marketing tapaba demasiado la imagen | Hecho |
| 1.41 | Flip cards: hover/clic en desktop y primer tap en mobile | Hecho |

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

Cerrada del todo — 3.11 y 3.12 (18/9, migradas de la Auditoría Final) se cerraron el mismo día, detalle movido al Historial Técnico SEO. El resto de la fase, y el mapa de keywords por página, en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8) y el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

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
| 3.11 | Keyword "customer success" ausente en /posventa | Hecho |
| 3.12 | Keyword diluida por "e"/"&" en /tecnologia | Hecho |

Fase 4

## SEO local y autoridad

Base Core tiene presencia física en Barcelona y Buenos Aires — ventaja de SEO local que hoy no se está usando. La fase con más tareas activas del plan. 4.6 cerrada el 21/9 — la decisión de canal social se revirtió y migró al [Plan de Marketing/Social](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp), donde se gestiona el desarrollo activo de los canales secundarios; detalle completo en el Historial Técnico SEO.

| # | Tarea | Estado |
| --- | --- | --- |
| 4.1 | Google Business Profile | Bloqueado |
| 4.2 | Consistencia NAP (nombre/dirección/teléfono) | Hecho |
| 4.3 | Primeros enlaces entrantes (backlinks) | Bloqueado |
| 4.4 | Testimonios y prueba social | Bloqueado |
| 4.5 | Política de privacidad (GDPR/LOPDGDD) | Bloqueado |
| 4.6 | Decisión de canal social | Hecho |

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

Fase 5

## Mantenimiento continuo

El SEO no es un proyecto que se termina — esto es lo que se revisa de forma recurrente. 5.3, 5.4 y 5.5-5.8, ya cerrados, tienen detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). 5.9 es nueva (21/9), reemplaza a 1.28 (Fase 1, cerrada) como chequeo mensual de performance. 5.10 es 6.5 renumerada (21/9) — mismo mantenimiento mensual, movida de Fase 6. 5.11 es nueva (21/9) — formaliza como tarea propia y recurrente el chequeo mensual de posicionamiento orgánico de "Base Core" que la #4 de 8.2 había arrancado, ahora que 8.2 está cerrada del todo.

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
| 5.9 | Performance con PageSpeed Mensual | Pendiente |
| 5.10 | Seguimiento manual de visibilidad en IA | Pendiente, recurrente |
| 5.11 | Posicionamiento orgánico Base Core — revisión mensual | Pendiente, recurrente |

Fase 6

## Posicionamiento en buscadores de IA (AEO/GEO)

Cerrada del todo — detalle en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). 6.5 se renumeró a 5.10 el 21/9 (Fase 5, Mantenimiento continuo) por ser un chequeo mensual, no una tarea de una sola vez de esta fase.

| # | Tarea | Estado |
| --- | --- | --- |
| 6.1 | Bots de IA sin bloquear en robots.txt | Hecho |
| 6.2 | Datos estructurados con autoría | Hecho |
| 6.3 | Firma visible del autor en los posts | Hecho |
| 6.4 | Archivo /llms.txt | Hecho |
| 6.5 | Seguimiento manual de visibilidad en IA | Movida a 5.10 |

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

Fase abierta el 14/9. 8.1 se cerró el mismo día (decisión tomada: no avanzar) y 8.2 se cerró del todo el 21/9 (confirmado que la ficha de Crunchbase es de un tercero, sin nada que reclamar) — detalle completo de ambas en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). 8.3 sigue activa, esperando decisión de Mariano. 8.4 es nueva (24/9): la parte de sitio y SEO de una decisión de posicionamiento cuyo dueño es el Marketing Strategy.

| # | Tarea | Estado |
| --- | --- | --- |
| 8.1 | Decisión de naming: "Base Core" vs "BaseCore" | Hecho |
| 8.2 | Visibilidad de marca: no aparece buscando "Base Core" solo | Hecho |
| 8.3 | Auditoría de marca: registro, riesgo legal y sociedad | Pendiente · esperando decisión de Mariano |
| 8.4 | Sumar "IA" al posicionamiento en el sitio (titles, nombre del sitio, schema, /tecnologia) | Bloqueado |

8.4 — Sumar "IA" al posicionamiento en el sitio

Bloqueado · esperando la decisión 10.2 del Marketing Strategy

El 24/9 Mariano planteó pasar de "Consultoría Comercial y Marketing" a "Consultoría Comercial, Marketing e IA". La evaluación y la decisión viven en la tarea 10.2 del [Marketing Strategy Basecore](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp) (dueño, criterio Camino B); acá solo queda la parte de ejecución en el sitio, si la decisión es cambiarlo.

**Alcance si se decide avanzar:** `src/lib/site.ts` (nombre del sitio, que alimenta titles y schema, y descripción general), `ContactForm.tsx`, titles/meta afectados y chequeo de /tecnologia contra el Mapa de Keywords (8.6: "IA para empresas", "agentes de IA para empresas"). Cambiar el sufijo de marca de todos los titles a la vez es el riesgo SEO a medir antes.

**Para qué sirve:** que el sitio acompañe el posicionamiento que se decida, sin hacerlo antes de tener la auditoría.

Última actualización: 2026-09-24 (8.4 nueva, Bloqueada — parte de sitio/SEO de la evaluación "IA en el posicionamiento", cuyo dueño es la tarea 10.2 del Marketing Strategy; auditoría definida allá, sin lanzar por pedido de Mariano). Antes, el 21/9: (5.11 nueva — "Posicionamiento orgánico Base Core — revisión mensual", tarea propia y recurrente de Fase 5 que formaliza el chequeo mensual que la #4 de 8.2 había arrancado; primera ronda corrida el mismo día vía `scripts/seo/gsc.py`, sin cambios de fondo respecto a la línea de base del 18/9). Antes, el mismo día: consolidación del artifact Performance Web al Historial Técnico SEO — detalle completo de 1.14, 1.23-1.27 y una nota de método para performance; Performance Web quedó sin contenido propio y se eliminó). Antes, el mismo día: 8.2 cerrada del todo — #10 resuelto: Mariano navegó crunchbase.com/organization/base-core con su propio browser y confirmó que la ficha la ocupa BaseCore™, la empresa de geoceldas de Scottsdale AZ (basecore.co) ya identificada en el análisis de 8.1/8.2 — no Base Power. No hay nada que reclamar, la ficha es de un tercero legítimo en otro rubro. Con las 11 recomendaciones de 8.2 resueltas, la tarea pasa de En progreso a Hecho; detalle completo movido al Historial Técnico SEO). Antes, el mismo día: 8.2 — #11 hecho, con copy final distinto al propuesto el 18/9: en vez de una frase corta de desambiguación, Mariano definió un perfil completo de LinkedIn personal (headline "Fundador de Base Core", about, role description) y la descripción de la página de empresa, pegados directo por Mariano sin cambio de código. **Corrección en el camino:** el copy original usaba "BaseCore" junto — la grafía que 8.1 había decidido evitar por colisión con la marca registrada BaseCore™ — señalado antes de cerrar la tarea, corregido por Mariano en LinkedIn a "Base Core" separado. Alcance real distinto del pedido original de #11 (que apuntaba a los perfiles de empresa con una frase explícita de equivalencia con "Base Core Sales", no al perfil personal) — se cierra igual porque la estrategia completa pasa a gestionarse desde el [Plan de Marketing/Social](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp), no por ser literalmente la implementación original. De 8.2 solo queda #10 (bloqueado por Cloudflare en Crunchbase, revisión manual de Mariano). Antes, el mismo día: 6.5 renumerada a 5.10 (Fase 5, Mantenimiento continuo) — es un chequeo mensual recurrente, igual que 5.1/5.2/5.9, no una tarea de una sola vez de Fase 6. Sin cambio de contenido, Fase 6 queda cerrada del todo. Antes, el mismo día: 4.6 cerrada — Mariano revierte la decisión del 5/9 de no activar Instagram/LinkedIn de empresa: los 3 canales secundarios (LinkedIn empresa, Instagram, Facebook, en ese orden de prioridad) pasan a desarrollo urgente, gestionado desde el [Plan de Marketing/Social](https://claude.ai/artifact/5nEdULGfDWCWES17cpptDp) — YouTube queda pendiente futuro, Twitter/TikTok/Reddit bloqueados. 4.6 se da por Hecho acá, sin ejecutar nada de código: es una decisión de estrategia de canal, no de sitio — detalle completo en el Historial Técnico SEO. Antes, el mismo día: 1.28 cerrada del todo y movida al [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8) — reemplazada por 5.9 (Fase 5), chequeo mensual de performance sin objetivo activo de score. Detalle completo de las 4 rondas de investigación (dos regresiones de LCP mobile desestimadas, fix de prefetch inútil, lazy-loading real de 3 componentes, GTM y fuentes ya optimizados de sesiones anteriores) en el Historial. Antes, el mismo día: 1.25 cerrada — con acceso a GA4 ya resuelto desde el 14/9, se corrió `scripts/seo/ga4.py webvitals --days 7` para acotar la ventana al tráfico posterior al registro de la custom dimension `metric_rating`: 57 eventos INP totales, 42 con rating real (26.3% seguía `(not set)`, tráfico previo al corte) — 41 good (71.9%) y 1 needs-improvement (1.8%), es decir 97.6% de lo medido. Supera con margen el umbral del 75% "good" que Core Web Vitals usa para dar una métrica por aprobada, incluso con el margen de error de una muestra de 42; el objetivo de la tarea era confirmar con datos de campo que la interactividad es buena, no medir un p75 exacto (GA4 tampoco lo expone vía API para custom dimensions, ya documentado en el script). Mariano confirmó cerrarla con este resultado. Con esto, Fase 1 queda sin ningún pendiente propio — de las tareas Pendiente/En progreso del plan solo sigue activa 8.2 (#11). Antes, el 20/9: 1.40 cerrada del todo — la ronda 2 (overlay 0.08) seguía leyendo "muy azul" para Mariano; medido el color real de las 5 fotos de hero, la de /marketing resultó la más saturada de azul con diferencia (0.53 vs. 0.18-0.35 en el resto) — el overlay nunca fue la causa principal. Fix real: filtro CSS sobre la propia imagen (`saturate(.45) brightness(1.12)`) + overlay negro neutro a 0.10 en vez de navy, solo en /marketing (ES/EN), sin tocar el resto de páginas con `PageHero`. Deployado vía preview de Vercel, confirmado por Mariano ("me gusta como quedo, mucho mejor") y llevado a `master`, commit `c477c71`. Con esto, Fase 1 vuelve a quedar sin pendientes propios de UI/UX. De paso: se sacó el widget de revisión interactiva que este documento tuvo brevemente (duplicaba el archivo a más del doble y dejaba una línea de más de 98.000 caracteres, imposible de leer para verificar conflictos — forzó un publish con `force` en otra sesión para poder marcar la tarea 8.2 #9). El documento vuelve a ser HTML estático, como el resto de las 88 tareas — el veredicto de revisión se registra por chat de acá en más. Antes, el mismo día: 1.37 confirmada por Mariano en su iPhone real, Turnstile funcionando con Private Relay activado — detalle completo en el Historial Técnico SEO. Antes, el mismo día: 1.39 y 1.41 cerradas — Mariano las revisó en el widget interactivo del artifact y marcó OK a las dos sin aclaración; detalle completo movido al Historial Técnico SEO. 1.40 vino con "No" y una nota ("sigue estando muy azul, corregir") — se compararon 0.06/0.08/0.112 en vivo con Playwright antes de elegir 0.08 (0.112 tapaba de más, 0.06 resentía la legibilidad del H1 blanco), aplicado en ES y EN, commit `cc7cb8e`, pusheado y confirmado en producción; vuelve a quedar en revisión, reseteada a "Sin revisar" para que Mariano la chequee de nuevo. Antes, el mismo día: 8.2 — #9 hecho: Mariano importó la propiedad a Bing Webmaster Tools desde Google Search Console y cargó el sitemap manualmente, queda en "Processing" (normal, hasta 48hs). Con esto, de la ronda de 5 recomendaciones de 8.2 solo falta #11 (pegar el copy de desambiguación en LinkedIn/Facebook), acción pendiente de Mariano. Antes, el mismo día: 8.2 — #10 diagnosticado del todo: liberado el navegador compartido, Playwright confirmó que crunchbase.com/organization/base-core devuelve un challenge de Cloudflare (403, "We must verify your session...", Ray ID `a3dcc9e7ea25d717`) incluso a un browser real — no es un problema de herramientas ni algo para reintentar, es un bot-check que ningún cliente automatizado pasa. Queda para que Mariano la revise manualmente, sin login. Con esto, de la ronda de 5 recomendaciones de 8.2 solo quedan #9 y #11, ambas esperando una acción de Mariano (no de código). Antes, el mismo día: documento renombrado de "Plan de SEO de Base Core" a "BaseCoreWeb: SEO y Performance", a pedido de Mariano — este pasa a ser también el tablero para hallazgos de UI/UX del sitio, ya que la Auditoría Final quedó archivada y cerrada del todo el 19/9 y no se reabre para eso. Se suman 1.39-1.41: 3 hallazgos que Mariano encontró navegando el sitio (margen superior corto del cajón "Etapas" en preventa/venta/posventa, overlay azul del hero de /marketing demasiado oscuro, y la reaparición del bug de flip cards — hover/clic trabado en desktop, primer tap sin efecto en mobile — ya trabajado antes en la Auditoría Final). Los 3 implementados por `web-lead`, verificados visualmente por la sesión principal con Playwright (excepto el tap táctil real en mobile, no emulable con las herramientas de este entorno — verificado por revisión de código), commits `9ccbf6f`/`f2fdf02`/`4561e89`, pusheados a `master` y confirmados en producción. Quedan como Pendiente de revisión hasta que Mariano los chequee en vivo y confirme. Antes, el mismo día: 8.2 — Mariano decide la implementación de #7: en vez de "también conocida como Base Core", reemplazar directo "Base Core Sales" por "Base Core" en la línea de copyright del footer — más simple, y el logo justo arriba sigue diciendo "Base Core Sales" así que la asociación queda clara igual. Implementado en `Footer.tsx` (copy ES/EN), verificado con ESLint, `tsc` bloqueado por un archivo generado de otra sesión en paralelo sin relación con el cambio. Commit `2376868`, pusheado a `master`. Quedan #9, #10 y #11 de la misma ronda. Antes, el 19/9 (8.2 — ronda de 5 recomendaciones pendientes a pedido de Mariano, que reabrió #7 explícitamente (antes bloqueada el 14/9): #8 (disambiguatingDescription en el JSON-LD) implementado y pusheado a producción, commit `fbcad13`, verificado tsc/eslint/build; #7 (mención en el footer) y #11 (frase de desambiguación en LinkedIn/Facebook) con propuestas de copy listas (3 y 2 opciones respectivamente), esperando que Mariano elija antes de tocar código o pegar texto; #9 confirmado que Bing Webmaster Tools permite importar la propiedad directo desde Google Search Console sin verificación manual, paso a paso documentado para que Mariano lo haga con su cuenta; #10 (ficha de Crunchbase) inconcluso — Playwright con el navegador compartido ocupado en 5 intentos, WebFetch con el mismo 403 ya conocido, Perplexity sin esa URL indexada, a reintentar con el navegador libre o revisión manual directa. Antes, el 18/9 (sesión posterior: 3.12 — `seo-marketing` suma "CRM para empresas" e "IA para empresas" (ES) y "AI for businesses" (EN) como frases exactas, una vez cada una, en párrafos ya existentes del bloque "Qué hacemos" de /tecnologia y /en/tecnologia — cambio mínimo invasivo, título/description sin tocar (decisión ya tomada). No se sumó "CRM for businesses" en EN: no es keyword validada en el Mapa de Keywords. Verificado en vivo sin redundancia. Commit `de94b2e`. Con esto, Fase 3 queda cerrada del todo. Antes, ese mismo día: 3.11 — Mariano decide sumar la keyword al H1 (más peso de posicionamiento, aunque toca copy visible) en vez de dejarla solo en metadata. `seo-marketing` reescribe el H1 de /posventa ("¿Buscas fidelizar clientes y fortalecer tu customer success?") y /en/post-sales ("Looking to retain customers and strengthen your customer success?"), confirmado contra el Mapa de Keywords que "customer success" es la misma frase validada en ES y EN (100-1.000 volumen, competencia Baja). Verificado en vivo sin perder el concepto de retención/fidelización, que sigue en el cuerpo de la página. Commit `fb9cfba`. Antes, ese mismo día: 1.35 — `seo-marketing` amplía las 4 meta descriptions cortas (/blog, /en/blog, /en/contact, /en/marketing) al copy exacto que Mariano confirmó, quedando en 158/151/154/150 caracteres — verificado en vivo, `openGraph`/JSON-LD reusan la misma constante donde aplica, sin regresión en H1 ni contenido visible. Commit `f823002`. Con esto, la Fase 1 queda sin pendientes propios salvo 1.25 (en progreso, esperando tráfico) y 1.37 (esperando confirmación de Mariano en su iPhone) — las 9 tareas migradas el 18/9 desde la Auditoría Final de UX/diseño (1.29-1.37) quedan todas resueltas salvo esa última. Antes, ese mismo día: 1.34 — Mariano confirma cerrar sin cambio: el title de /en/presales ya mide 59 caracteres con sufijo, dentro del rango seguro de ~60; la única forma de bajarlo más sería sacar "& Appointment Setting", pero es keyword validada en el Mapa de Keywords, no se justifica sacrificarla por margen extra que no hace falta. Sin cambio de código. Antes, ese mismo día: 1.33 — Mariano eligió "BaseHub: Plataforma de Proyectos" (50 caracteres, sobre la alternativa de 47) por mantener "Plataforma", consistente con cómo se describe BaseHub en el resto del sitio; `seo-marketing` implementó ese title + la description acortada a 155 caracteres en `src/app/(es)/basehub/page.tsx` — `openGraph`/JSON-LD reusan las mismas constantes, quedaron consistentes sin tocarlos aparte. Verificado en vivo: title 50 caracteres exactos con sufijo, description 155, H1/contenido visible sin cambios. Commit `47bd5ab`. Antes, ese mismo día: 1.32 — `seo-marketing` agrega un H2 ("Últimos artículos"/"Latest articles", con eyebrow) antes de la grilla de posts en /blog y /en/blog, mismo componente `SectionHeading` y patrón eyebrow+H2 que ya usa la sección "Metodología" de Home — prefirió esto a bajar los H3 de las cards, para no perder la semántica de título-por-card. Verificado sin overlap ni regresión visual. Commit `b0be1e5`. Antes, ese mismo día: 1.38 — `seo-marketing` corrige el mismo bug que 1.31 pero en el nav principal del Header (`src/lib/site.ts:40`), label "Home"→"Inicio" en el array ES, sin tocar el array EN. Verificado sin regresión en el resto del menú (ES y EN) ni en el Breadcrumb/logo, ya correctos por separado. Commit `65edacd`. Tarea abierta y cerrada el mismo día. Antes, ese mismo día: 1.31 — `seo-marketing` corrige `Breadcrumb.tsx` para usar "Inicio" en vez de "Home" hardcodeado en las 9 páginas ES (texto visible + JSON-LD), mismo condicional por `lang` que ya usaba el componente para el `href`. Verificado sin regresión en EN. Commit `5207030`. De paso encontró el mismo bug en el nav principal del Header (`src/lib/site.ts`), fuera del alcance de 1.31 — se abre como 1.38 nueva, sin implementar. Antes, ese mismo día: 1.30 — `seo-marketing` agregó bloque `openGraph` propio a /contacto (title/description ya existentes de la página, imagen `/images/breadcrumb.jpg` que ya usa la página como hero real) — heredaba el genérico del Home. Verificado en vivo sin regresión en Home/preventa/en-contact. Commit `91ad85c`. Nota: `twitter:\*` sigue heredado del Home en /contacto, pero es el comportamiento site-wide — ninguna de las 8 páginas de referencia declara bloque `twitter` propio, no es una regresión de esta tarea. Hallazgo colateral sin acción: `/en/contact` usa una imagen distinta a su par ES para OG (única asimetría imagen-por-imagen del sitio), fuera de alcance de esta tarea. Antes, ese mismo día: 1.28 y 1.29 resueltas en esta ronda. 1.28 — `performance` investigó la regresión de LCP mobile detectada más temprano ese día y la desestimó con evidencia (9 corridas frescas con cache-busting dieron 3.9-5.5s con el mismo código, sin ningún commit del rango 14-18/9 que toque el critical path de Home; conclusión: ruido de laboratorio de PSI, no regresión real — criterio corregido a 4-5 corridas frescas antes de declarar señal de ahora en más) y resolvió los 3 hallazgos que quedaban del 14/9: `sizes` en TechnologyBlock.tsx/AboutLogoBlock.tsx, confirmación de que el logo del Header ya no necesita cambios, y el hallazgo de animación no compositada — mal atribuido al panzoom del hero, la traza real de Lighthouse apuntaba al botón de WhatsApp transicionando `bottom`, corregido. Commit `a00ddcc`, deployado y verificado. Sigue Pendiente por ser tarea recurrente. 1.29 — `seo-marketing` confirmó la causa real (root layout de `(en)/en` resuelve el mismo segmento que su `page.tsx`, mismo motivo por el que Next.js no aplica `title.template` ahí, documentado en `node\_modules/next/dist/docs`) e implementó el título completo hardcodeado, mismo patrón que la Home ES. Commit `44cf2da`, deployado y verificado sin regresión en otras páginas — movida a Hecho, detalle completo en el Historial Técnico SEO. Antes, ese mismo día: 1.28: Mariano generó su propia API key de PageSpeed Insights — nuevo script scripts/seo/psi.py consulta la API directo, sin depender de reportes manuales; primera corrida real encontró una regresión de LCP en mobile de Home, ~3.8s a ~5.0-5.2s desde el 14/9, consistente en dos corridas — sin investigar la causa todavía, esperando confirmación de Mariano. Antes, ese mismo día: los 3 hallazgos de Performance de la Auditoría Final de UX/diseño se sumaron a 1.28 — dos ya tenían dueño ahí (el script de Cloudflare ya estaba cerrado en la lista de "fuera de alcance", y el pedido de API key para PSI/CrUX autónomo se agregó como nota a la misma tarea recurrente) y el tercero, 1.36, se verificó como mal etiquetado (no es la imagen hero/LCP real de /tecnologia, sino el fondo de la sección de Contacto) y se cerró directo sin abrir tarea activa. Antes, ese mismo día: 9 hallazgos SEO de la Auditoría Final de UX/diseño migrados acá a pedido de Mariano, para no pisar el seguimiento con dos artifacts distintos sobre el mismo tema — Fase 1 suma 1.29-1.35, Fase 3 suma 3.11 y 3.12; en 1.33, 1.34 y 1.35 la migración ya incluye la propuesta exacta de copy que Mariano había pedido ver antes de decidir, en vez de dejarla pendiente; el artifact de origen queda con esos 9 ítems marcados como resueltos/migrados, sin duplicar el detalle). Antes, ese mismo día (reorden a pedido de Mariano: nueva sección "Activo hoy" arriba de todo con el detalle completo de cada tarea Pendiente/En progreso agrupado por fase — las tareas Bloqueadas se quedan documentadas en su fase de origen, sin subir; se sacó la sección "Por dónde seguir" del final por quedar redundante con la nueva sección de arriba; cada fase conserva intacta su tabla de estado). Antes, el mismo día: 8.2: auditoría de seguimiento a pedido de Mariano — verificado en vivo que alternateName/llms.txt siguen en producción, comparación de GSC contra la línea de base del 14/9 (movimiento leve y positivo, sin evidencia causal por la ventana corta), nueva línea de base para la query "basecore" sin espacio, SERP y Perplexity sin cambio respecto al 14/9, y 4 recomendaciones nuevas —#8 a #11— sin implementar, esperando confirmar con cuáles avanzar; antes, el 14/9: 8.3 nueva (auditoría de marca completa — registro en INPI/OEPM, riesgo legal frente a BaseCore™ y Base Power, viabilidad de sociedad y nombre de fantasía — artifact dedicado publicado, esperando revisión de Mariano); 1.28 con reporte de PSI de Home analizado por `performance`, 3 hallazgos listos para confirmar — sin implementar, a retomar mañana; 8.1 cerrada — Mariano decide no avanzar con el naming, análisis completo movido al Historial; 8.2 con #1/#2 (PR #41) en producción, #4 establecido, #7 bloqueada; antes de eso, se resolvió el acceso a GA4 para 1.25 y se cerraron los 6 hallazgos de la auditoría del 13/9 · se irá marcando como Hecho a medida que avancemos.