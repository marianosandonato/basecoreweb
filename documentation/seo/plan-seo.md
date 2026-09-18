> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90
> - Última sincronización: 2026-09-18
> - Nota: se agregó la tarea 1.37 (18/9) — fix real de Turnstile atascado por el conflicto iCloud Private Relay/ITP en /contacto, ya deployado a producción (commit a7b6948), queda Pendiente hasta que Mariano lo confirme en su iPhone real.

---

# Plan de SEO de Base Core

Tablero activo: lo que está Pendiente o En progreso vive arriba de todo, agrupado por fase, para no tener que bajar a cada una a buscarlo. Cada fase conserva su tabla de estado completa (incluidas las tareas Bloqueadas) — el registro de lo ya resuelto vive en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8), sin perder ni un dato.

📋 [Ver Historial Técnico SEO (detalle de las 60 tareas ya resueltas)](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8)

61 / 83 tareas · 2 en progreso (1.25, 8.2) · +4 bloqueadas (4.1, 4.3, 4.4, 4.5) · 10 nuevas migradas de la Auditoría Final (1.29–1.36, 3.11–3.12) + 1.37 nueva (fix de Turnstile)

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

Pendiente · API de PSI automatizada, señal de regresión de LCP mobile (18/9)

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

**Automatización pedida por Mariano (18/9), migrada desde la Auditoría Final de UX/diseño (era `perf-psi-pendiente` ahí):** en vez de pasar reportes de PSI a mano cada vez, ofreció dar acceso a una API key para que `performance` pueda consultar Core Web Vitals de forma autónoma cuando haga falta, sin depender de que Mariano genere y pegue el reporte. Pendiente: definir con Mariano cuál API (PageSpeed Insights API, más simple de dar de alta, o sumar CrUX History API para series históricas) y que genere/comparta la key — una vez configurada, este mecanismo (Mariano pasa reporte → `performance` analiza) pasa a ser autoservicio.

**Nota (18/9):** el hallazgo `perf-cloudflare-script` de la misma auditoría (script de Cloudflare sin async/defer) es el mismo caso que "Scripts de Cloudflare" en la lista de arriba — cero referencias en el repo, feature del borde de Cloudflare que Vercel no despliega. Ya cerrado acá, sin tarea nueva.

**Para qué sirve:** Core Web Vitals es señal directa de ranking de Google, y la primera impresión real de cualquier visitante — bajar "ruido" de performance no tiene techo fijo, siempre hay margen de mejora incremental.

1.29 — Title de /en sin sufijo de marca

Pendiente

El `<title>` de `/en` (Home en inglés) es "Commercial Consulting for Small Business" — sin el sufijo " – Base Core Sales" que sí llevan las otras 7 páginas EN y la Home ES. El propio comentario en `src/app/(en)/en/page.tsx:25-32` documenta el comportamiento esperado (el `title.template` del root layout debería aplicarse porque `/en` no es el segmento raíz), pero en producción pasa lo contrario.

**Recomendación:** investigar por qué `title.template` no se aplica a este segmento (posible causa: `/en` comparte segmento con su propio root layout, igual que "/" con el suyo, invalidando la premisa del comentario) y corregir para que incluya el sufijo, igual que el resto del sitio.

**Migrado (18/9):** hallazgo de la Auditoría Final de UX/diseño (14-18/9), movido acá para no duplicar seguimiento SEO en dos artifacts (regla Camino B) — en el artifact de origen queda marcado como resuelto/migrado.

1.30 — /contacto sin Open Graph / Twitter Card propio

Pendiente

`src/app/(es)/contacto/page.tsx` no declara bloque `openGraph`/`twitter` propio — hereda el genérico del Home ("Base Core – Consultoría Comercial y Marketing") al compartir el link. Asimetría real: `/en/contact` sí declara el suyo ("Free Diagnostic").

**Recomendación:** agregar `openGraph`/`twitter` específicos, mismo patrón que preventa/venta/posventa/marketing/tecnologia/basehub/blog/ebook.

**Migrado (18/9)** de la Auditoría Final de UX/diseño.

1.31 — Breadcrumb dice "Home" en inglés en las 9 páginas ES

Pendiente

`src/components/Breadcrumb.tsx` hardcodea el string "Home" en ambas variantes (texto visible y `BreadcrumbList` del JSON-LD, líneas 46/97/133), sin usar el prop `lang` que ya recibe (y sí usa correctamente para el `href`). Se ve en /preventa, /venta, /posventa, /marketing, /tecnologia, /basehub, /blog, /contacto, /ebook.

**Recomendación:** traducir a "Inicio" cuando `lang === "es"`, en el texto del link y en el `name` del JSON-LD.

**Migrado (18/9)** de la Auditoría Final de UX/diseño.

1.32 — /blog salta de H1 a H3 sin H2 intermedio

Pendiente

`BlogListPage.tsx` renderiza el H1 y pasa directo a los `<h3>` de cada `BlogCard` — mismo patrón en /blog y /en/blog.

**Recomendación:** agregar un H2 antes de la grilla ("Últimos artículos"/"Latest articles"), o bajar los títulos de las tarjetas a H2.

**Migrado (18/9)** de la Auditoría Final de UX/diseño.

1.33 — Title/description de /basehub exceden el largo cómodo para SERP

Pendiente · propuesta lista, esperando confirmar con Mariano

Title 61 caracteres, description 167 — ambos superan ~60/~160, riesgo de truncamiento en el resultado de Google. Mariano pidió ver la propuesta exacta de acortado antes de aplicar, y entender si el cambio se ve en la página o es solo metadata.

**Es metadata invisible en la página:** ni el title ni la description de `<head>` aparecen en el cuerpo visible de /basehub — el H1 de la página es otro texto, sin tocar. Solo cambia lo que Google muestra en el resultado de búsqueda y lo que se ve al compartir el link.

Propuesta (sin implementar)

```
Title actual (61):  "BaseHub: Plataforma de Gestión de Proyectos" + sufijo
Title propuesto (50): "BaseHub: Plataforma de Proyectos" + sufijo
  (o, más corto, 47): "BaseHub: Gestión de Proyectos" + sufijo

Description actual (167):
  "BaseHub: la plataforma de seguimiento e implementación de
  proyectos de Base Core, incluida en tu consultoría. Sin pagar
  una herramienta de gestión de proyectos aparte."

Description propuesta (155):
  "BaseHub: la plataforma de seguimiento e implementación de
  proyectos de Base Core, incluida en tu consultoría — sin pagar
  una herramienta de gestión aparte."
```

**Para qué sirve:** que Google no trunque el resultado de búsqueda a mitad de palabra.

**Migrado (18/9)** de la Auditoría Final de UX/diseño, con la propuesta que Mariano había pedido ya resuelta acá.

1.34 — Title de /en/presales, cerca del límite de largo

Pendiente · propuesta lista, esperando confirmar con Mariano

Title: "B2B Lead Generation & Appointment Setting" + sufijo " – Base Core Sales". Medido directo: 41 + 18 = **59 caracteres** (la Auditoría Final había anotado 63 — pequeña diferencia de conteo, no cambia la conclusión). 59 ya está dentro del rango seguro de ~60 que recomienda Google.

**Es metadata invisible en la página:** mismo caso que 1.33 — el H1 real de /en/presales no cambia, solo lo que se ve en el resultado de Google.

Conclusión

```
Title actual, medido: 59 caracteres con sufijo — ya seguro.
No hace falta acortarlo. Si Mariano igual prefiere más margen,
la única forma de bajarlo más es sacar "& Appointment Setting",
pero esa frase es keyword validada en el Mapa de Keywords — no
se recomienda sacarla solo por unos caracteres de margen extra.
```

**Migrado (18/9)** de la Auditoría Final de UX/diseño, con la medición que Mariano había pedido ya resuelta acá — recomendación: cerrar sin cambio.

1.35 — 4 meta descriptions por debajo de ~120 caracteres

Pendiente · propuesta lista, esperando confirmar con Mariano

/blog (110), /en/blog (114), /en/contact (113) y /en/marketing (116) — no es error, dejan espacio sin aprovechar en el resultado de Google (rango cómodo: 140-160). Mariano pidió ver la propuesta exacta de qué agregar antes de aplicar, y confirmar que es solo metadata.

**Es metadata invisible en la página:** las 4 son `const description` de `<head>` — ninguna aparece en el cuerpo visible de esas 4 páginas.

Propuesta (sin implementar)

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

**Migrado (18/9)** de la Auditoría Final de UX/diseño, con la propuesta que Mariano había pedido ya resuelta acá.

1.37 — Turnstile queda colgado en iOS (iCloud Private Relay / ITP) en /contacto

Pendiente · esperando confirmación en iPhone real

Hallazgo original (Auditoría Final, cat. Responsive): en /contacto, el widget de Cloudflare Turnstile podía quedar "verificando" para siempre en iPhones con iCloud Private Relay / "Evitar rastreo entre sitios" activado, sin disparar ningún callback de error propio del widget. Confirmado por foros de Apple y de Cloudflare: es un conflicto conocido y sin resolución del lado de Cloudflare, no un bug de nuestro código.

**Fix real (18/9), ya deployado a producción:**

* `Turnstile.tsx` tiene ahora su propio temporizador (`onStuck`, 12s) que no depende de que Cloudflare avise ningún error.
* `ContactForm.tsx` y `EbookForm.tsx` habilitan el botón de envío si el widget queda confirmado colgado, con un mensaje visible explicando que se puede enviar igual.
* `turnstile.ts` (servidor) ya no rechaza cuando no llega token — el honeypot existente queda como filtro anti-spam para ese caso puntual. Si sí llega un token, se sigue validando estricto como siempre.

Verificado end-to-end local (Playwright, viewport mobile, site key real): botón deshabilitado en t=0, habilitado + mensaje visible en t=13s, el POST pasa la verificación de captcha. Confirmado en producción (basecoresales.com) que el JS deployado ya tiene el string del mensaje nuevo. Commit: `a7b6948`.

**Por qué sigue Pendiente, no Hecho:** falta que Mariano lo confirme en su iPhone real con Private Relay activado — a los ~12 segundos debería aparecer "No pudimos verificar la seguridad automáticamente" y el botón ENVIAR MENSAJE debería habilitarse igual.

### Fase 3 · Palabras clave y contenido

3.11 — Keyword validada "customer success" ausente del title/H1 de /posventa

Pendiente

Title "Fidelización y Retención de Clientes" / H1 "¿Buscas fidelizar y retener a tus clientes?" — sin la keyword secundaria validada. Mismo patrón en `/en/post-sales`. El Mapa de Keywords ya marca esto como ganancia de bajo esfuerzo, sin implementar.

**Recomendación:** sumar "customer success" al H1 o al title en ambos idiomas.

**Migrado (18/9)** de la Auditoría Final de UX/diseño.

3.12 — Frase exacta de keyword diluida por la conjunción "e"/"&" en /tecnologia

Pendiente

Title/description: "CRM e IA para Empresas" / "AI & CRM for Businesses" — el Mapa de Keywords valida "CRM para empresas" e "IA para empresas" (ES) / "AI for businesses" (EN) como frases exactas separadas, y se pierde el match textual exacto de ambas.

**Recomendación:** evaluar sumar ambas frases exactas una vez cada una en cuerpo/H2, sin tocar el title si se prefiere mantener el copy actual — impacto bajo.

**Migrado (18/9)** de la Auditoría Final de UX/diseño.

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

En progreso · #1/#2/#4 en producción, #7 bloqueado, #8-#11 nuevas (18/9)

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

Cerrada en lo esencial — 1.14 (Core Web Vitals) se confirmó el 11/9. 1.24 (retina) se investigó a fondo y cerró sin acción de código — `next/image` ya lo resolvía; 1.25 (INP de campo) ya tiene acceso a GA4 resuelto el 14/9 — queda en progreso, esperando acumular tráfico nuevo. 1.26 y 1.27, encontrados en la auditoría de performance del 13/9, se resolvieron el 14/9. 1.28 es nueva (14/9): seguimiento recurrente de performance con PageSpeed Insights, esperando el próximo análisis de Mariano. 1.29-1.35 son nuevas (18/9), migradas desde la Auditoría Final de UX/diseño para no duplicar seguimiento SEO en dos artifacts — detalle completo de cada una en "Activo hoy". 1.36 (18/9, también migrada de esa auditoría, ahí era `perf-hero-tecnologia`) se cerró directo sin tarea activa: la imagen que marcaba como "hero (LCP)" de /tecnologia (bg-5.jpg, 68KB) es en realidad el fondo de la sección de Contacto al final de la página — no la imagen visible al cargar, así que no pesa en el LCP real. El hero real de /tecnologia usa el componente PageHero compartido, ya cubierto por 1.26/1.27. Sigue como CSS background a propósito (decisión ya tomada en PLAN-VERCEL.md: solo los heroes reales pasan a next/image, el resto de fondos se queda así). 1.37 es nueva (18/9): fix real de Turnstile atascado por el conflicto Private Relay/ITP de iOS en /contacto, ya deployado a producción — queda Pendiente hasta que Mariano lo confirme en su iPhone real. Detalle técnico de performance completo en el artifact [Performance Web](https://claude.ai/code/artifact/63c7e1d6-16c6-4b2c-8259-186ea93a6929). Detalle completo del resto de las tareas ya resueltas de esta fase en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8).

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
| 1.28 | Performance con PageSpeed Insights (mobile/desktop, recurrente) | Pendiente · API de PSI automatizada, señal de regresión de LCP mobile (18/9) |
| 1.29 | Title de /en sin sufijo de marca | Pendiente |
| 1.30 | /contacto sin Open Graph / Twitter Card propio | Pendiente |
| 1.31 | Breadcrumb dice "Home" en inglés en páginas ES | Pendiente |
| 1.32 | /blog salta de H1 a H3 sin H2 | Pendiente |
| 1.33 | Title/description largos de /basehub | Pendiente · propuesta lista |
| 1.34 | Title de /en/presales cerca del límite | Pendiente · propuesta lista |
| 1.35 | 4 meta descriptions cortas | Pendiente · propuesta lista |
| 1.36 | Imagen de fondo de ContactSection en /tecnologia, mal etiquetada como "hero" | Hecho |
| 1.37 | Turnstile colgado en iOS (Private Relay/ITP) en /contacto | Pendiente · esperando confirmación en iPhone real |

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

Cerrada en lo esencial — 3.11 y 3.12 son nuevas (18/9), migradas desde la Auditoría Final de UX/diseño, sin implementar. Detalle completo de esas dos en "Activo hoy". El resto de la fase, y el mapa de keywords por página, en el [Historial Técnico SEO](https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8) y el [Mapa de Keywords Basecore](https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9).

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
| 3.11 | Keyword "customer success" ausente en /posventa | Pendiente |
| 3.12 | Keyword diluida por "e"/"&" en /tecnologia | Pendiente |

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
| 8.2 | Visibilidad de marca: no aparece buscando "Base Core" solo | En progreso · #1/#2/#4 en producción, #8-#11 nuevas |
| 8.3 | Auditoría de marca: registro, riesgo legal y sociedad | Pendiente · esperando decisión de Mariano |

Última actualización: 2026-09-18 (1.28: Mariano generó su propia API key de PageSpeed Insights — nuevo script scripts/seo/psi.py consulta la API directo, sin depender de reportes manuales; primera corrida real encontró una regresión de LCP en mobile de Home, ~3.8s a ~5.0-5.2s desde el 14/9, consistente en dos corridas — sin investigar la causa todavía, esperando confirmación de Mariano. Antes, ese mismo día: los 3 hallazgos de Performance de la Auditoría Final de UX/diseño se sumaron a 1.28 — dos ya tenían dueño ahí (el script de Cloudflare ya estaba cerrado en la lista de "fuera de alcance", y el pedido de API key para PSI/CrUX autónomo se agregó como nota a la misma tarea recurrente) y el tercero, 1.36, se verificó como mal etiquetado (no es la imagen hero/LCP real de /tecnologia, sino el fondo de la sección de Contacto) y se cerró directo sin abrir tarea activa. Antes, ese mismo día: 9 hallazgos SEO de la Auditoría Final de UX/diseño migrados acá a pedido de Mariano, para no pisar el seguimiento con dos artifacts distintos sobre el mismo tema — Fase 1 suma 1.29-1.35, Fase 3 suma 3.11 y 3.12; en 1.33, 1.34 y 1.35 la migración ya incluye la propuesta exacta de copy que Mariano había pedido ver antes de decidir, en vez de dejarla pendiente; el artifact de origen queda con esos 9 ítems marcados como resueltos/migrados, sin duplicar el detalle). Antes, ese mismo día (reorden a pedido de Mariano: nueva sección "Activo hoy" arriba de todo con el detalle completo de cada tarea Pendiente/En progreso agrupado por fase — las tareas Bloqueadas se quedan documentadas en su fase de origen, sin subir; se sacó la sección "Por dónde seguir" del final por quedar redundante con la nueva sección de arriba; cada fase conserva intacta su tabla de estado). Antes, el mismo día: 8.2: auditoría de seguimiento a pedido de Mariano — verificado en vivo que alternateName/llms.txt siguen en producción, comparación de GSC contra la línea de base del 14/9 (movimiento leve y positivo, sin evidencia causal por la ventana corta), nueva línea de base para la query "basecore" sin espacio, SERP y Perplexity sin cambio respecto al 14/9, y 4 recomendaciones nuevas —#8 a #11— sin implementar, esperando confirmar con cuáles avanzar; antes, el 14/9: 8.3 nueva (auditoría de marca completa — registro en INPI/OEPM, riesgo legal frente a BaseCore™ y Base Power, viabilidad de sociedad y nombre de fantasía — artifact dedicado publicado, esperando revisión de Mariano); 1.28 con reporte de PSI de Home analizado por `performance`, 3 hallazgos listos para confirmar — sin implementar, a retomar mañana; 8.1 cerrada — Mariano decide no avanzar con el naming, análisis completo movido al Historial; 8.2 con #1/#2 (PR #41) en producción, #4 establecido, #7 bloqueada; antes de eso, se resolvió el acceso a GA4 para 1.25 y se cerraron los 6 hallazgos de la auditoría del 13/9 · se irá marcando como Hecho a medida que avancemos.