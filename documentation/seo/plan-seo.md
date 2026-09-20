> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-20
> - Nota: sesión del 19-20/9 — a pedido de Mariano, ronda de 5 recomendaciones pendientes de la tarea 8.2 (visibilidad de marca "Base Core"). #7 (mención en el footer, antes bloqueada el 14/9 y reabierta a propósito) implementada el 20/9: en vez de "también conocida como Base Core", Mariano decidió reemplazar directo "Base Core Sales" por "Base Core" en la línea de copyright del footer — commit `2376868`. #8 (disambiguatingDescription en el JSON-LD) implementado el 19/9, commit `fbcad13`. Quedan #9 (Bing Webmaster Tools, paso a paso listo para que Mariano lo haga), #10 (ficha de Crunchbase, inconcluso por límites de acceso a herramientas) y #11 (frase de desambiguación para LinkedIn/Facebook, propuesta lista para que Mariano la pegue).

---

Plan SEO

basecoresales.com · auditoría & hoja de ruta

# Plan de SEO de Base Core

Tablero activo: lo que está Pendiente o En progreso vive arriba de todo, agrupado por fase, para no tener que bajar a cada una a buscarlo. Cada fase conserva su tabla de estado completa (incluidas las tareas Bloqueadas) — el registro de lo ya resuelto vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), sin perder ni un dato.

📋 [Ver Historial Técnico SEO (detalle de las 60 tareas ya resueltas)](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)

71 / 84 tareas · 2 en progreso (1.25, 8.2) · +4 bloqueadas (4.1, 4.3, 4.4, 4.5) · Fase 1 y 3 sin pendientes propios (18/9, sesión posterior)

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

### Fase 1 · Cimientos técnicos (on-page)

1.25 — INP real de campo

En progreso · esperando tráfico

INP (Interaction to Next Paint) reemplazó a FID como métrica de Core Web Vitals — mide qué tan rápido responde el sitio a una interacción real de un visitante, algo que un laboratorio no puede simular fielmente.

**Acceso a GA4 resuelto (14/9):** se creó una service account de solo lectura (`ga4-readonly@basecore-seo.iam.gserviceaccount.com`, rol Viewer en la propiedad GA4) y se agregó `scripts/seo/ga4.py` — CLI que consulta la GA4 Data API para traer la distribución real de `metric_rating` (good/needs-improvement/poor) de LCP/CLS/INP, ya que GA4 no expone percentiles p75 por API para custom dimensions. Verificado funcionando con el Property ID real (`550444799`): 381 eventos LCP, 374 CLS, 128 INP en los últimos 28 días.

**Por qué sigue en progreso, no Hecho:** la custom dimension `metric_rating` se registró en GA4 Admin recién el 14/9, y no es retroactiva — el 100% del tráfico de los últimos 28 días (previo al registro) muestra `(not set)` para esa dimensión. Necesita tráfico nuevo, posterior al registro, para traer rating real. Sin fecha estimada — depende del volumen de visitas orgánico del sitio.

**Para qué sirve:** confirmar con datos de campo (no solo de laboratorio) que la interactividad del sitio es buena para visitantes reales.

1.28 — Performance con PageSpeed Insights (mobile/desktop)

Pendiente, tarea recurrente · ronda del 18/9 cerrada (regresión desestimada, 3 hallazgos resueltos)

Tarea nueva (14/9), recurrente — no se cierra de una vez como 1.14, sino que se va revisando cada vez que aparece un reporte nuevo de PageSpeed Insights. 1.14 ya dejó Mobile en 88 y Desktop en 93-98 (confirmado 11/9), pero Mariano señala que sigue habiendo "ruidos" puntuales en mobile y desktop que vale la pena seguir bajando.

**Mecánica (actualizada 18/9):** ya no depende de que Mariano pase un reporte a mano — `scripts/seo/psi.py` consulta la PageSpeed Insights API directo (API key de Mariano, guardada fuera del repo en `~/.config/basecoreweb-seo/psi-api-key`, mismo patrón que GA4/GSC). `performance` corre `uv run scripts/seo/psi.py check --url <url> --strategy mobile|desktop|both` cuando haga falta, sin esperar un reporte manual. Mismo criterio que antes: hallazgos concretos con impacto estimado, se resuelven de a uno, no cambios especulativos sin medir antes/después con PSI real (mismo criterio que 1.26/1.27).

Reporte PSI de Home, 14/9 17:25 — resultados

```
Mobile:  Performance 87 · Accessibility 100 · Best Practices 100 · SEO 100
         FCP 2.0s · LCP 3.8s · TBT 70ms · CLS 0.003 · SI 3.1s
Desktop: Performance 98 · FCP 0.5s · LCP 0.9s · TBT 20ms · CLS 0.001 · SI 1.3s
```

Reporte PSI de Home, 18/9 — vía psi.py (dos corridas de mobile, para descartar ruido de laboratorio)

```
Mobile (corrida 1): Performance 65 · Accessibility 100 · Best Practices 100 · SEO 100
                    FCP 2.8s · LCP 5.0s · TBT 310ms · CLS 0.003 · SI 6.5s
Mobile (corrida 2): Performance 74 · Accessibility 100 · Best Practices 100 · SEO 100
                    FCP 2.8s · LCP 5.2s · TBT 70ms · CLS 0.003 · SI 4.1s
Desktop:            Performance 97 · Accessibility 100 · Best Practices 100 · SEO 100
                    FCP 0.8s · LCP 1.2s · TBT 50ms · CLS 0 · SI 1.1s

Lectura: Performance/TBT tienen ruido normal de laboratorio entre
corridas (65 vs 74, TBT 310ms vs 70ms) — no es señal por sí solo.
Pero FCP (2.8s, antes 2.0s) y sobre todo LCP (5.0-5.2s, antes 3.8s)
salieron CONSISTENTES en las dos corridas — eso sí es señal real de
regresión en mobile desde el 14/9, no ruido. Desktop se mantiene en
línea con el baseline (97 vs 98). Sin investigar la causa todavía —
queda pendiente de que Mariano confirme si quiere que se investigue
ahora o se acumule con el resto de 1.28.
```

**Análisis de `performance` (14/9), contra código real + inspección en vivo de producción con Playwright — nada implementado, esperando confirmación de Mariano mañana:**

Nuevo y accionable

```
1. Falta `sizes` en el logo de TechnologyBlock.tsx (alt="Base Core",
   140/190px) — confirmado en vivo: sin ese prop, Next.js pide el
   candidato de 1920px de ancho para un logo que se ve a 190px. Fix:
   copiar el mismo `sizes="(min-width: 768px) 190px, 140px"` que ya
   usa el logo gemelo del Home. Esfuerzo bajo, riesgo cero.
   Bonus: AboutLogoBlock.tsx (usado en 5 páginas más) tiene el mismo
   bug, mismo fix de una línea — resolver junto si se aprueba éste.

2. Logo 200x200 del Header (desktop) — la cifra de PSI no coincide
   con lo medido en vivo (ya tiene quality={60} desde el PR #40 de
   1.27). Probablemente el reporte es de antes de que ese deploy se
   propagara del todo. Antes de tocar quality de nuevo: correr un PSI
   nuevo para confirmar si sigue flaggeado.

3. Animación del hero (panzoom, 10s, único candidato a "animación no
   compositada" que marca PSI) — el código ya usa transform puro, no
   hay certeza de que el fix resuelva el finding sin ver la traza
   cruda de Lighthouse. Experimento barato: agregar
   `will-change: transform` a .animate-hero-panzoom y remedir.
```

Ya resuelto o fuera de alcance del repo, sin acción

```
- JS legacy (polyfills, ~25 KiB): mismo hallazgo de siempre, ya
  decidido ignorar (1.23), sin nada nuevo que lo contradiga.
- JS no usado de GTM (~70 KiB): ya diferido fuera del critical path
  (1.14) — lo que queda es inherente a la librería de Google.
- Fuentes en la cadena crítica (reey_regular, Sora_200): ya tienen
  preload:false + display:swap desde el 5/9, decisión ya tomada.
- Scripts de Cloudflare (beacon.min.js, email-decode, /cdn-cgi/rum):
  cero referencias en el repo — features del borde de Cloudflare, no
  algo que Vercel despliegue. Ajustar cache TTL es config de
  Cloudflare, no código.
- Long main-thread tasks (4 mobile/3 desktop): TBT ya en 70ms/20ms,
  muy por debajo del umbral — no amerita perseguirlo.
```

**Orden sugerido para retomar mañana:** 1) fix de `sizes` en TechnologyBlock.tsx + AboutLogoBlock.tsx (nuevo, bajo esfuerzo, sin riesgo) — 2) re-correr PSI post-deploy de 1.27 para confirmar el logo del Header antes de tocar `quality` — 3) experimento `will-change` en el panzoom del hero.

**Resolución de la ronda del 18/9 (sesión siguiente), por `performance` — regresión de LCP investigada + los 3 hallazgos de arriba resueltos:**

**Regresión de LCP mobile (3.8s → 5.0-5.2s) — investigada y desestimada, no confirmada como causada por código.** `git log --since="2026-09-14" --until="2026-09-19"` no muestra ningún commit que toque el elemento LCP real (`src/app/(es)/page.tsx:137-150`, imagen del hero) ni el critical path de arranque de Home. 9 corridas frescas de mobile (cache-busting por query string, necesario porque PSI sirve el mismo reporte cacheado sin eso) dieron un rango de **3.9-5.5s con el mismo código y mismo TTFB** (`x-vercel-cache: HIT` constante) — consistente con ruido de laboratorio de PSI en la simulación de throttling mobile, no con una regresión real. Desktop se mantuvo estable en 97-99 en todas las corridas. **Criterio corregido de ahora en más:** las 2 corridas del 18/9 no eran suficientes para declarar señal — usar 4-5 corridas frescas antes de declarar cualquier cambio futuro como regresión o mejora real de LCP mobile. Sin datos de campo (CrUX) todavía para contrastar — `originLoadingExperience` vacío por tráfico insuficiente, chequear en la próxima ronda.

**1. `sizes` en TechnologyBlock.tsx + AboutLogoBlock.tsx — implementado.** Mismo fix de una línea en los dos (`sizes="(min-width: 768px) 190px, 140px"` y `sizes="257px"` respectivamente), verificado en vivo en /marketing y /tecnologia.

**2. Logo 200x200 del Header — confirmado que no hace falta ningún cambio.** PSI real de hoy: `uses-responsive-images`/`uses-optimized-images`/`modern-image-formats` con `score=None` (sin hallazgos) — `quality={60}` del PR #40 ya lo resolvió.

**3. Animación no compositada — el hallazgo original estaba mal atribuido, corregido con la traza real.** La traza cruda de Lighthouse (`non-composited-animations`) apuntaba a `body.flex > a.fixed`, `nodeLabel: "WhatsApp us"` — **no era el panzoom del hero** (que ya usa `transform` puro y nunca estuvo mal). Causa real: `WhatsAppButton.tsx` transicionaba `bottom` (propiedad de layout) junto con `transform` para deslizarse cuando cambia `--lang-banner-height`. Fix: sacar `bottom` de la transición, dejar solo `transition-transform`. Confirmado con la API cruda de PSI: `non-composited-animations` pasó de `score=1` a `score=None`. Efecto colateral menor aceptado: el botón salta en vez de deslizarse solo en la visita donde cambia el banner de idioma. No se aplicó el experimento `will-change` original porque, con la traza real en mano, el hero nunca fue el elemento flageado.

Métricas antes/después (ronda 18/9)

```
Baseline 14/9 17:25 — Mobile: Performance 87 · FCP 2.0s · LCP 3.8s · TBT 70ms
Regresión 18/9 (2 corridas) — Mobile LCP: 5.0s / 5.2s (Performance 65/74, ruido ya señalado)
Pre-fix, 6 corridas frescas — Mobile LCP: 5.3 / 4.1 / 3.9 / 4.5 / 4.1 / 5.5s
Post-fix (sizes + WhatsApp), 3 corridas frescas — Mobile LCP: 3.9 / 4.7 / 4.1s
Desktop, post-fix: Performance 99 · FCP 0.5s · LCP 0.9s · TBT 40ms · CLS 0
```

El ruido de LCP mobile (3.9-5.5s) es prácticamente igual antes y después de los 3 fixes — esperable, ninguno toca el elemento LCP. No hay evidencia de que estos cambios hayan movido el LCP; sí hay evidencia dura (API cruda de PSI) de que resolvieron sus propios hallazgos puntuales.

**Commit:** `a00ddcc` — pusheado a `master`, deployado y verificado en vivo. Archivos: `TechnologyBlock.tsx`, `AboutLogoBlock.tsx`, `WhatsAppButton.tsx`. Verificado con tsc/eslint/build antes de commitear.

**Pendiente para la próxima ronda:** nada nuevo con riesgo/ambigüedad. Seguir el hábito de medir LCP mobile con 4-5 corridas frescas (no 1-2), y chequear si ya hay datos de campo CrUX (`originLoadingExperience`, hoy vacío por poco tráfico). `unused-javascript` (GTM + chunk propio) sigue apareciendo en el audit, ya descartado/fuera de alcance en rondas previas — no se reabrió.

**Automatización pedida por Mariano (18/9), migrada desde la Auditoría Final de UX/diseño (era `perf-psi-pendiente` ahí):** en vez de pasar reportes de PSI a mano cada vez, ofreció dar acceso a una API key para que `performance` pueda consultar Core Web Vitals de forma autónoma cuando haga falta, sin depender de que Mariano genere y pegue el reporte. Pendiente: definir con Mariano cuál API (PageSpeed Insights API, más simple de dar de alta, o sumar CrUX History API para series históricas) y que genere/comparta la key — una vez configurada, este mecanismo (Mariano pasa reporte → `performance` analiza) pasa a ser autoservicio.

**Nota (18/9):** el hallazgo `perf-cloudflare-script` de la misma auditoría (script de Cloudflare sin async/defer) es el mismo caso que "Scripts de Cloudflare" en la lista de arriba — cero referencias en el repo, feature del borde de Cloudflare que Vercel no despliega. Ya cerrado acá, sin tarea nueva.

**Para qué sirve:** Core Web Vitals es señal directa de ranking de Google, y la primera impresión real de cualquier visitante — bajar "ruido" de performance no tiene techo fijo, siempre hay margen de mejora incremental.

1.37 — Turnstile queda colgado en iOS (iCloud Private Relay / ITP) en /contacto

Pendiente · esperando confirmación en iPhone real

Hallazgo original (Auditoría Final, cat. Responsive): en /contacto, el widget de Cloudflare Turnstile podía quedar "verificando" para siempre en iPhones con iCloud Private Relay / "Evitar rastreo entre sitios" activado, sin disparar ningún callback de error propio del widget. Confirmado por foros de Apple y de Cloudflare: es un conflicto conocido y sin resolución del lado de Cloudflare, no un bug de nuestro código.

**Fix real (18/9), ya deployado a producción:**

* `Turnstile.tsx` tiene ahora su propio temporizador (`onStuck`, 12s) que no depende de que Cloudflare avise ningún error.
* `ContactForm.tsx` y `EbookForm.tsx` habilitan el botón de envío si el widget queda confirmado colgado, con un mensaje visible explicando que se puede enviar igual.
* `turnstile.ts` (servidor) ya no rechaza cuando no llega token — el honeypot existente queda como filtro anti-spam para ese caso puntual. Si sí llega un token, se sigue validando estricto como siempre.

Verificado end-to-end local (Playwright, viewport mobile, site key real): botón deshabilitado en t=0, habilitado + mensaje visible en t=13s, el POST pasa la verificación de captcha. Confirmado en producción (basecoresales.com) que el JS deployado ya tiene el string del mensaje nuevo. Commit: `a7b6948`.

**Por qué sigue Pendiente, no Hecho:** falta que Mariano lo confirme en su iPhone real con Private Relay activado — a los ~12 segundos debería aparecer "No pudimos verificar la seguridad automáticamente" y el botón ENVIAR MENSAJE debería habilitarse igual.

### Fase 4 · SEO local y autoridad

4.6 — Decisión de canal social: no activar Instagram/LinkedIn de empresa

Pendiente · decisión tomada, sin ejecutar

Instagram (@basecoresales) prácticamente inactivo (41 seguidores, 1 post); LinkedIn de empresa sin poder confirmar actividad. Decisión ya tomada, con research citado (Edelman-LinkedIn B2B Thought Leadership Impact Report): no activar ninguno de los dos todavía — reforzar el LinkedIn **personal** de Mariano con contenido educativo, más sistematizar pedidos de referidos específicos.

**Para qué sirve:** en consultoría B2B de alto involucramiento, un perfil corporativo casi vacío resta confianza en vez de sumarla.

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

### Fase 6 · Posicionamiento en buscadores de IA (AEO/GEO)

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

### Fase 8 · Base Core en motores de búsqueda

8.2 — Visibilidad de marca: no aparece buscando "Base Core" solo

En progreso · #7/#8 hechos (19-20/9), #11 esperando que Mariano pegue el copy, #9 con instrucciones listas, #10 bloqueado por acceso

Mariano detectó que buscando "Base Core" solo en Google, el sitio no aparece — solo aparece buscando "Base Core Sales" completo. Le preocupa que gente que solo recuerda "Base Core" no pueda encontrar la página, y quiere entender también cómo lo manejarían los buscadores de IA (ChatGPT, Perplexity, etc.) ante la misma búsqueda.

**Análisis de `seo-marketing` (14/9):** el término desnudo "Base Core" tiene competencia real y grande — **Base Power**, empresa estadounidense de baterías domésticas, lanzó en agosto de 2026 un producto llamado "Base Core" junto con una ronda Serie D de US$1.000M y cobertura masiva de prensa (Business Wire, WSJ, Yahoo Finance). También compiten un personaje de videojuego, una plataforma de trading (BASECORE) y un theme de Drupal. Contra Base Power específicamente no hay acción de SEO propio que gane ese término en el corto/mediano plazo — es una diferencia de escala estructural, no un problema de configuración.

**Con contexto de negocio, el sitio sí aparece** (2º resultado buscando "Base Core consultoría"). Dato duro de Search Console (`scripts/seo/gsc.py analytics`, 90 días): la query exacta "base core" tiene 33 impresiones con posición promedio **4.1** — no está ausente del índice, pierde visibilidad porque Base Power ocupa los primeros lugares con noticias recientes. Muestra chica (52 consultas totales en 90 días, dominio nuevo).

**La causa que sí es resoluble:** el sitio nunca declara "Base Core" como alias en ningún lugar máquina-legible — `site.shortName` en `src/lib/site.ts` es siempre "Base Core Sales" completo (title, JSON-LD `ProfessionalService.name`, Open Graph, encabezado de `/llms.txt`), sin ningún campo `alternateName`. Confirmado también con IA: Perplexity, preguntado "¿Qué es Base Core?" sin contexto, no identificó ni a Base Power ni a Base Core Sales — la ambigüedad del término afecta igual a buscadores de IA, mismo mecanismo de fondo (falta de señal de alias + autoridad externa), no algo distinto a resolver.

Recomendaciones priorizadas (ninguna implementada — esperando confirmar con cuáles avanzar)

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

No recomendado por ahora: Wikidata/Wikipedia (se rechazaría, falta
notoriedad con fuentes secundarias independientes).
```

**Implementado y en producción (14/9):** Mariano confirmó avanzar con #1, #2 y #4 (invisibles/sin riesgo, sin dependencias). #1 y #2 — `alternateName: "Base Core"` en el JSON-LD `ProfessionalService` y la línea "Also known as: Base Core" en `/llms.txt` — mergeados vía [PR #41](https://github.com/marianosandonato/basecoreweb/pull/41), verificado con tsc/eslint/build, con `next start` local, y confirmado en vivo contra `basecoresales.com` (ES y EN): `alternateName` presente en el JSON-LD, línea nueva en `/llms.txt`, y `name` principal ("Base Core Sales") intacto sin cambios. #4 (chequeo mensual de la query "base core") queda establecido junto a 5.1/6.5; primera lectura de referencia (14/9, `gsc.py analytics --days 90 --query "base core"`): 30 impresiones en Home (posición 3.7), 2 en /contacto (9.5) y 3 en /en (8.3) — línea de base para comparar en el próximo chequeo.

**Sin implementar:** #3 (bajar expectativa, ya incorporado al análisis, sin acción pendiente), #5 y #6 (dependen de 4.1 y 4.3, bloqueadas — quedan documentadas como qué hacer cuando se desbloqueen, sin acción disponible hoy). **#7 — Bloqueada (14/9):** Mariano decide no avanzar con ninguna mención de "Base Core" en copy visible — cualquier cosa que toque texto del sitio queda descartada para esta tarea.

**Auditoría de seguimiento (18/9), a pedido de Mariano — mismo tema, sin research repetido:** se verificó en vivo que `alternateName` y la línea de `/llms.txt` siguen en producción sin regresión desde el 14/9. Hallazgo no anotado hasta ahora: el `sameAs` del JSON-LD ya apunta a [linkedin.com/company/base-core](https://linkedin.com/company/base-core/) (perfil que ya se llama literalmente "Base Core"), a Instagram y a Facebook — señal de entidad propia que ya estaba ahí, ahora documentada.

Comparación GSC, query "base core" (18/9 vs. línea de base del 14/9)

```
Página      14/9                18/9
Home        30 impr / pos 3.7   34 impr / pos 3.6
/contacto    2 impr / pos 9.5    2 impr / pos 9.5
/en          3 impr / pos 8.3    5 impr / pos 7.6
/basehub     —                   1 impr / pos 8.0 (nuevo)

Movimiento leve y positivo, pero 4 días de ventana sobre una query
de bajo volumen no es evidencia causal del alternateName — es ruido
normal. Nueva línea de base para la query "basecore" (sin espacio,
nunca chequeada antes): basecoresales.com/ 1 impr/pos 9.0,
www.basecoresales.com/ 5 impr/pos 4.8 — sumar a los chequeos
mensuales de #4 junto con "base core".
```

**SERP y buscadores de IA (18/9), sin cambio respecto al 14/9:** Google sigue dominado por Base Power y BaseCore™ (geoceldas) para "base core" y "basecore" sin contexto — basecoresales.com no entra en la página 1. Perplexity, preguntado de nuevo "What is Base Core?"/"what is basecore", sigue respondiendo solo sobre la batería de Base Power (y geoceldas/Drupal/Minecraft para "basecore"), sin mención de Base Core Sales — a 4 días el alternateName/llms.txt todavía no tuvo efecto medible, esperable dado lo reciente del cambio y que Base Power sigue generando prensa fresca que refuerza su dominancia.

Recomendaciones nuevas (18/9) — ninguna implementada, esperando confirmar con cuáles avanzar

```
8. disambiguatingDescription en el JSON-LD ProfessionalService —    Bajo esfuerzo, accionable ya
   propiedad de schema.org creada para este caso exacto (desambiguar
   entidades de nombre similar), sin la política estricta de
   FAQPage/rich-results de Google, no toca copy visible del sitio.
9. Verificar el sitio en Bing Webmaster Tools + enviar sitemap —     Bajo esfuerzo, accionable ya,
   no depende de GBP (4.1, bloqueada), cubre el índice que usa       requiere que Mariano verifique
   Bing/Microsoft Copilot, canal de IA todavía no chequeado.         el dominio
10. Revisar/reclamar crunchbase.com/organization/base-core —         Bajo esfuerzo, pendiente de
    aparece indexado para "basecore" pero no se pudo confirmar       verificación manual (403 al
    quién lo ocupa hoy.                                              intentar leerlo)
11. Frase de desambiguación en el "About" de LinkedIn/Facebook       Bajo esfuerzo, pero es copy —
    ya creados (no son el sitio: la restricción de Mariano del       confirmar con Mariano antes
    14/9 fue sobre copy visible del sitio, no de perfiles externos)  de tocar perfiles externos

Conclusión honesta del seguimiento: fuera de estas 4, no hay una
palanca de SEO/AEO nueva capaz de mover la aguja contra Base Power
en el corto plazo — sigue siendo una diferencia estructural de
escala y frescura de prensa, no un problema de configuración, tal
como ya se documentó el 14/9.
```

**Ronda del 19/9, a pedido de Mariano — avanza con las 5 recomendaciones pendientes, incluida #7 (reabierta a propósito, ya no bloqueada):**

**#8 — implementado y en producción.** Se agregó `disambiguatingDescription` al JSON-LD `professionalServiceJsonLd` (`src/lib/metadata.ts`) — propiedad de schema.org pensada para desambiguar entidades de nombre similar, sin nombrar a Base Power ni a BaseCore™ (no hace falta, y evita fricción de marca mientras 8.3 sigue sin resolver): "Base Core Sales es una consultoría de ventas, marketing y tecnología B2B para empresas de España y Latinoamérica, con foco en preventa, venta, posventa y marketing." Verificado con tsc/eslint/build. Commit `fbcad13`.

**#7 — reabierta por Mariano (ya no bloqueada), implementada.** En vez de "también conocida como Base Core", Mariano prefirió una solución más simple: reemplazar directo "Base Core Sales" por "Base Core" en la línea de copyright del footer (ES/EN) — sin agregar texto extra, ya que el logo del footer, justo arriba, sigue diciendo "Base Core Sales", así que la asociación entre ambos nombres queda clara igual. Cambio de una línea en `copy.es.rights`/`copy.en.rights` de `Footer.tsx`. Verificado con ESLint (limpio); `tsc --noEmit` bloqueado por un archivo generado de otra sesión con `next dev` corriendo en paralelo (`.next/dev/types/validator.ts`, gitignorado, sin relación con este cambio). Commit `2376868`, pusheado a `master`.

**#9 — confirmado: Bing Webmaster Tools permite importar la propiedad directo desde Google Search Console** (ya verificado ahí), sin pasar por verificación manual de DNS/meta tag/archivo — evita tocar código. Paso a paso documentado para que Mariano lo haga con su cuenta (Bing → Mis sitios → Importar desde GSC → loguearse con la cuenta de Google que es propietaria de `basecoresales.com` en GSC → confirmar). Si esa vía fallara, alternativa es meta tag o archivo de verificación, pendiente del código que generaría Bing.

**#10 — inconcluso, bloqueado por acceso a herramientas, no por el sitio de Crunchbase en sí.** Playwright devolvió "Browser is already in use" en 5 intentos (navegador compartido ocupado por otro proceso), WebFetch repitió el mismo 403 ya visto, y Perplexity no tiene indexada esa URL puntual. A reintentar con el navegador libre, o revisión manual directa de Mariano (es una página pública).

**#11 — propuesta de copy lista para LinkedIn/Facebook (perfiles ya creados), sin implementar (no requiere código, la pega Mariano):**

2 opciones de frase de desambiguación (ES/EN)

```
Opción A — breve, solo el alias:
  ES: "También conocida como Base Core: consultoría de ventas,
       marketing y tecnología B2B para empresas de España y
       Latinoamérica."
  EN: "Also known as Base Core: B2B sales, marketing and technology
       consulting for companies across Spain and Latin America."

Opción B — frase completa de "about" (mejor si el campo está vacío):
  ES: "Base Core Sales, también conocida como Base Core, es una
       consultoría comercial y de marketing para todos los ciclos
       de venta: preventa, venta, posventa y marketing."
  EN: "Base Core Sales, also known as Base Core, is a commercial
       and marketing consultancy covering every stage of the sales
       cycle: presales, sales, post-sales and marketing."
```

**Para qué sirve:** que cualquiera que conozca el negocio como "Base Core" (sin el "Sales") pueda encontrar el sitio igual, dentro de lo que es realmente posible frente a la competencia por el término.

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

Cerrada en lo esencial — 1.14 (Core Web Vitals) se confirmó el 11/9. 1.24 (retina) se investigó a fondo y cerró sin acción de código — `next/image` ya lo resolvía; 1.25 (INP de campo) ya tiene acceso a GA4 resuelto el 14/9 — queda en progreso, esperando acumular tráfico nuevo. 1.26 y 1.27, encontrados en la auditoría de performance del 13/9, se resolvieron el 14/9. 1.28 es recurrente: la ronda del 18/9 cerró con la regresión de LCP mobile desestimada (ruido de laboratorio de PSI, no una regresión real) y sus 3 hallazgos pendientes resueltos — detalle completo en "Activo hoy", sigue Pendiente por ser tarea sin cierre único. 1.29-1.35 y 1.38 (title de /en sin sufijo; OG/Twitter de /contacto; Breadcrumb y nav del Header en español; H2 faltante en /blog; title/description de /basehub; title de /en/presales cerrado sin cambio; 4 meta descriptions cortas) se cerraron el 18/9, detalle movido al Historial Técnico SEO — de las 9 tareas migradas de la Auditoría Final (1.29-1.37), solo 1.37 queda sin cerrar del todo, esperando que Mariano lo confirme en su iPhone. 1.36 (18/9, también migrada de esa auditoría, ahí era `perf-hero-tecnologia`) se cerró directo sin tarea activa: la imagen que marcaba como "hero (LCP)" de /tecnologia (bg-5.jpg, 68KB) es en realidad el fondo de la sección de Contacto al final de la página — no la imagen visible al cargar, así que no pesa en el LCP real. El hero real de /tecnologia usa el componente PageHero compartido, ya cubierto por 1.26/1.27. Sigue como CSS background a propósito (decisión ya tomada en PLAN-VERCEL.md: solo los heroes reales pasan a next/image, el resto de fondos se queda así). 1.37 es nueva (18/9): fix real de Turnstile atascado por el conflicto Private Relay/ITP de iOS en /contacto, ya deployado a producción — queda Pendiente hasta que Mariano lo confirme en su iPhone real. Detalle técnico de performance completo en el artifact [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929). Detalle completo del resto de las tareas ya resueltas de esta fase en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

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
| 1.28 | Performance con PageSpeed Insights (mobile/desktop, recurrente) | Pendiente · ronda del 18/9 cerrada |
| 1.29 | Title de /en sin sufijo de marca | Hecho |
| 1.30 | /contacto sin Open Graph / Twitter Card propio | Hecho |
| 1.31 | Breadcrumb dice "Home" en inglés en páginas ES | Hecho |
| 1.32 | /blog salta de H1 a H3 sin H2 | Hecho |
| 1.33 | Title/description largos de /basehub | Hecho |
| 1.34 | Title de /en/presales cerca del límite | Hecho |
| 1.35 | 4 meta descriptions cortas | Hecho |
| 1.36 | Imagen de fondo de ContactSection en /tecnologia, mal etiquetada como "hero" | Hecho |
| 1.37 | Turnstile colgado en iOS (Private Relay/ITP) en /contacto | Pendiente · esperando confirmación en iPhone real |
| 1.38 | Nav principal (Header) dice "Home" en inglés en páginas ES | Hecho |

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

Fase abierta el 14/9. 8.1 se cerró el mismo día (decisión tomada: no avanzar) — detalle completo en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8). 8.2 y 8.3 siguen activas.

| # | Tarea | Estado |
| --- | --- | --- |
| 8.1 | Decisión de naming: "Base Core" vs "BaseCore" | Hecho |
| 8.2 | Visibilidad de marca: no aparece buscando "Base Core" solo | En progreso · #1/#2/#4/#7/#8 en producción, #9-#11 en curso |
| 8.3 | Auditoría de marca: registro, riesgo legal y sociedad | Pendiente · esperando decisión de Mariano |

Última actualización: 2026-09-20 (8.2 — Mariano decide la implementación de #7: en vez de "también conocida como Base Core", reemplazar directo "Base Core Sales" por "Base Core" en la línea de copyright del footer — más simple, y el logo justo arriba sigue diciendo "Base Core Sales" así que la asociación queda clara igual. Implementado en `Footer.tsx` (copy ES/EN), verificado con ESLint, `tsc` bloqueado por un archivo generado de otra sesión en paralelo sin relación con el cambio. Commit `2376868`, pusheado a `master`. Quedan #9, #10 y #11 de la misma ronda. Antes, el 19/9 (8.2 — ronda de 5 recomendaciones pendientes a pedido de Mariano, que reabrió #7 explícitamente (antes bloqueada el 14/9): #8 (disambiguatingDescription en el JSON-LD) implementado y pusheado a producción, commit `fbcad13`, verificado tsc/eslint/build; #7 (mención en el footer) y #11 (frase de desambiguación en LinkedIn/Facebook) con propuestas de copy listas (3 y 2 opciones respectivamente), esperando que Mariano elija antes de tocar código o pegar texto; #9 confirmado que Bing Webmaster Tools permite importar la propiedad directo desde Google Search Console sin verificación manual, paso a paso documentado para que Mariano lo haga con su cuenta; #10 (ficha de Crunchbase) inconcluso — Playwright con el navegador compartido ocupado en 5 intentos, WebFetch con el mismo 403 ya conocido, Perplexity sin esa URL indexada, a reintentar con el navegador libre o revisión manual directa. Antes, el 18/9 (sesión posterior: 3.12 — `seo-marketing` suma "CRM para empresas" e "IA para empresas" (ES) y "AI for businesses" (EN) como frases exactas, una vez cada una, en párrafos ya existentes del bloque "Qué hacemos" de /tecnologia y /en/tecnologia — cambio mínimo invasivo, título/description sin tocar (decisión ya tomada). No se sumó "CRM for businesses" en EN: no es keyword validada en el Mapa de Keywords. Verificado en vivo sin redundancia. Commit `de94b2e`. Con esto, Fase 3 queda cerrada del todo. Antes, ese mismo día: 3.11 — Mariano decide sumar la keyword al H1 (más peso de posicionamiento, aunque toca copy visible) en vez de dejarla solo en metadata. `seo-marketing` reescribe el H1 de /posventa ("¿Buscas fidelizar clientes y fortalecer tu customer success?") y /en/post-sales ("Looking to retain customers and strengthen your customer success?"), confirmado contra el Mapa de Keywords que "customer success" es la misma frase validada en ES y EN (100-1.000 volumen, competencia Baja). Verificado en vivo sin perder el concepto de retención/fidelización, que sigue en el cuerpo de la página. Commit `fb9cfba`. Antes, ese mismo día: 1.35 — `seo-marketing` amplía las 4 meta descriptions cortas (/blog, /en/blog, /en/contact, /en/marketing) al copy exacto que Mariano confirmó, quedando en 158/151/154/150 caracteres — verificado en vivo, `openGraph`/JSON-LD reusan la misma constante donde aplica, sin regresión en H1 ni contenido visible. Commit `f823002`. Con esto, la Fase 1 queda sin pendientes propios salvo 1.25 (en progreso, esperando tráfico) y 1.37 (esperando confirmación de Mariano en su iPhone) — las 9 tareas migradas el 18/9 desde la Auditoría Final de UX/diseño (1.29-1.37) quedan todas resueltas salvo esa última. Antes, ese mismo día: 1.34 — Mariano confirma cerrar sin cambio: el title de /en/presales ya mide 59 caracteres con sufijo, dentro del rango seguro de ~60; la única forma de bajarlo más sería sacar "& Appointment Setting", pero es keyword validada en el Mapa de Keywords, no se justifica sacrificarla por margen extra que no hace falta. Sin cambio de código. Antes, ese mismo día: 1.33 — Mariano eligió "BaseHub: Plataforma de Proyectos" (50 caracteres, sobre la alternativa de 47) por mantener "Plataforma", consistente con cómo se describe BaseHub en el resto del sitio; `seo-marketing` implementó ese title + la description acortada a 155 caracteres en `src/app/(es)/basehub/page.tsx` — `openGraph`/JSON-LD reusan las mismas constantes, quedaron consistentes sin tocarlos aparte. Verificado en vivo: title 50 caracteres exactos con sufijo, description 155, H1/contenido visible sin cambios. Commit `47bd5ab`. Antes, ese mismo día: 1.32 — `seo-marketing` agrega un H2 ("Últimos artículos"/"Latest articles", con eyebrow) antes de la grilla de posts en /blog y /en/blog, mismo componente `SectionHeading` y patrón eyebrow+H2 que ya usa la sección "Metodología" de Home — prefirió esto a bajar los H3 de las cards, para no perder la semántica de título-por-card. Verificado sin overlap ni regresión visual. Commit `b0be1e5`. Antes, ese mismo día: 1.38 — `seo-marketing` corrige el mismo bug que 1.31 pero en el nav principal del Header (`src/lib/site.ts:40`), label "Home"→"Inicio" en el array ES, sin tocar el array EN. Verificado sin regresión en el resto del menú (ES y EN) ni en el Breadcrumb/logo, ya correctos por separado. Commit `65edacd`. Tarea abierta y cerrada el mismo día. Antes, ese mismo día: 1.31 — `seo-marketing` corrige `Breadcrumb.tsx` para usar "Inicio" en vez de "Home" hardcodeado en las 9 páginas ES (texto visible + JSON-LD), mismo condicional por `lang` que ya usaba el componente para el `href`. Verificado sin regresión en EN. Commit `5207030`. De paso encontró el mismo bug en el nav principal del Header (`src/lib/site.ts`), fuera del alcance de 1.31 — se abre como 1.38 nueva, sin implementar. Antes, ese mismo día: 1.30 — `seo-marketing` agregó bloque `openGraph` propio a /contacto (title/description ya existentes de la página, imagen `/images/breadcrumb.jpg` que ya usa la página como hero real) — heredaba el genérico del Home. Verificado en vivo sin regresión en Home/preventa/en-contact. Commit `91ad85c`. Nota: `twitter:\*` sigue heredado del Home en /contacto, pero es el comportamiento site-wide — ninguna de las 8 páginas de referencia declara bloque `twitter` propio, no es una regresión de esta tarea. Hallazgo colateral sin acción: `/en/contact` usa una imagen distinta a su par ES para OG (única asimetría imagen-por-imagen del sitio), fuera de alcance de esta tarea. Antes, ese mismo día: 1.28 y 1.29 resueltas en esta ronda. 1.28 — `performance` investigó la regresión de LCP mobile detectada más temprano ese día y la desestimó con evidencia (9 corridas frescas con cache-busting dieron 3.9-5.5s con el mismo código, sin ningún commit del rango 14-18/9 que toque el critical path de Home; conclusión: ruido de laboratorio de PSI, no regresión real — criterio corregido a 4-5 corridas frescas antes de declarar señal de ahora en más) y resolvió los 3 hallazgos que quedaban del 14/9: `sizes` en TechnologyBlock.tsx/AboutLogoBlock.tsx, confirmación de que el logo del Header ya no necesita cambios, y el hallazgo de animación no compositada — mal atribuido al panzoom del hero, la traza real de Lighthouse apuntaba al botón de WhatsApp transicionando `bottom`, corregido. Commit `a00ddcc`, deployado y verificado. Sigue Pendiente por ser tarea recurrente. 1.29 — `seo-marketing` confirmó la causa real (root layout de `(en)/en` resuelve el mismo segmento que su `page.tsx`, mismo motivo por el que Next.js no aplica `title.template` ahí, documentado en `node\_modules/next/dist/docs`) e implementó el título completo hardcodeado, mismo patrón que la Home ES. Commit `44cf2da`, deployado y verificado sin regresión en otras páginas — movida a Hecho, detalle completo en el Historial Técnico SEO. Antes, ese mismo día: 1.28: Mariano generó su propia API key de PageSpeed Insights — nuevo script scripts/seo/psi.py consulta la API directo, sin depender de reportes manuales; primera corrida real encontró una regresión de LCP en mobile de Home, ~3.8s a ~5.0-5.2s desde el 14/9, consistente en dos corridas — sin investigar la causa todavía, esperando confirmación de Mariano. Antes, ese mismo día: los 3 hallazgos de Performance de la Auditoría Final de UX/diseño se sumaron a 1.28 — dos ya tenían dueño ahí (el script de Cloudflare ya estaba cerrado en la lista de "fuera de alcance", y el pedido de API key para PSI/CrUX autónomo se agregó como nota a la misma tarea recurrente) y el tercero, 1.36, se verificó como mal etiquetado (no es la imagen hero/LCP real de /tecnologia, sino el fondo de la sección de Contacto) y se cerró directo sin abrir tarea activa. Antes, ese mismo día: 9 hallazgos SEO de la Auditoría Final de UX/diseño migrados acá a pedido de Mariano, para no pisar el seguimiento con dos artifacts distintos sobre el mismo tema — Fase 1 suma 1.29-1.35, Fase 3 suma 3.11 y 3.12; en 1.33, 1.34 y 1.35 la migración ya incluye la propuesta exacta de copy que Mariano había pedido ver antes de decidir, en vez de dejarla pendiente; el artifact de origen queda con esos 9 ítems marcados como resueltos/migrados, sin duplicar el detalle). Antes, ese mismo día (reorden a pedido de Mariano: nueva sección "Activo hoy" arriba de todo con el detalle completo de cada tarea Pendiente/En progreso agrupado por fase — las tareas Bloqueadas se quedan documentadas en su fase de origen, sin subir; se sacó la sección "Por dónde seguir" del final por quedar redundante con la nueva sección de arriba; cada fase conserva intacta su tabla de estado). Antes, el mismo día: 8.2: auditoría de seguimiento a pedido de Mariano — verificado en vivo que alternateName/llms.txt siguen en producción, comparación de GSC contra la línea de base del 14/9 (movimiento leve y positivo, sin evidencia causal por la ventana corta), nueva línea de base para la query "basecore" sin espacio, SERP y Perplexity sin cambio respecto al 14/9, y 4 recomendaciones nuevas —#8 a #11— sin implementar, esperando confirmar con cuáles avanzar; antes, el 14/9: 8.3 nueva (auditoría de marca completa — registro en INPI/OEPM, riesgo legal frente a BaseCore™ y Base Power, viabilidad de sociedad y nombre de fantasía — artifact dedicado publicado, esperando revisión de Mariano); 1.28 con reporte de PSI de Home analizado por `performance`, 3 hallazgos listos para confirmar — sin implementar, a retomar mañana; 8.1 cerrada — Mariano decide no avanzar con el naming, análisis completo movido al Historial; 8.2 con #1/#2 (PR #41) en producción, #4 establecido, #7 bloqueada; antes de eso, se resolvió el acceso a GA4 para 1.25 y se cerraron los 6 hallazgos de la auditoría del 13/9 · se irá marcando como Hecho a medida que avancemos.