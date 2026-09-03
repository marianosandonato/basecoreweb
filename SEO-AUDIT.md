# Auditoría SEO técnica + on-page + accesibilidad de markup + estructura — basecoresales.com

**Fecha:** 2026-09-03
**Alcance:** SEO técnico, on-page, accesibilidad de HTML/markup, navegación y arquitectura de contenido.
**Tipo de tarea:** investigación y planificación. No se modificó ningún archivo de código ni se hizo ningún deploy.
**Dominio medido:** `https://www.basecoresales.com` (confirmado como el dominio canónico real — ver hallazgo T-9).

## Cómo leer este documento

Cada hallazgo separa:
- **FACTS** — verificado directamente (código, producción, Search Console).
- **OBSERVATIONS** — lo que se vio en el sitio real (Playwright, curl, GSC CLI).
- **INFERENCES** — interpretación propia a partir de lo anterior.
- **RECOMMENDATION** — acción propuesta.

Los IDs (`H-1`, `T-1`, `C-1`...) se usan también en `SEO-ACTIONS.md`, `SEO-CONTENT-CHANGES.md`, `SEO-TECHNICAL-CHANGES.md` y `SEO-IMPLEMENTATION-PLAN.md` para que los cuatro documentos se puedan cruzar entre sí.

## Limitación de esta auditoría — leer antes de usar el resto del documento

No pude abrir directamente los dos artifacts de Claude.ai listados en `CLAUDE.md` (Plan de SEO, Mapa de Keywords) — el entorno de este sub-agente no tiene sesión autenticada en claude.ai (confirmado: `WebFetch` devolvió una página de artifact sin contenido real, y `Playwright` contra `claude.ai/code` redirigió a un logout/login). Esta auditoría se apoya en cambio en:

1. El resumen de esos documentos que me pasó `web-lead` en la consigna de esta tarea (estado de Fase 1/3, prioridades de keywords vigentes).
2. El historial real de git, en particular el commit `2fa5c5c` ("SEO: actualizar keywords validadas con Keyword Planner — Fase 3.5") que ya aplicó los cambios de title/meta/H1 surgidos de esa investigación, y los commits `cdb2096`/`8640e83` que reorganizaron el menú.
3. Inspección directa del código y del sitio en producción.

**Antes de implementar cualquier cambio de copy dependiente de keywords** (sección `SEO-CONTENT-CHANGES.md`), `seo-marketing` debería releer el Plan de SEO y el Mapa de Keywords reales desde `CLAUDE.md` para confirmar que las recomendaciones de este documento no contradicen algo más reciente o más granular que no me fue resumido.

---

## A. Resumen ejecutivo

El sitio tiene una base técnica de SEO sólida: hreflang correcto y recíproco en las 17 rutas pareadas ES/EN, canonicals correctos, sitemap.xml y robots.txt bien formados, JSON-LD (`ProfessionalService`, `Service` por página de ciclo, `BlogPosting`, `BreadcrumbList`) implementado de forma consistente, un H1 único por página, redirects 301 de las URLs viejas de WordPress, y — confirmado con Search Console vía `scripts/seo/gsc.py` — casi todas las páginas principales están efectivamente indexadas ("Submitted and indexed"). Esto es consistente con que Fase 1 y Fase 3.5 del Plan de SEO estén cerradas.

Dicho esto, la auditoría encontró **2 problemas de severidad High** que no habían sido detectados antes (uno de accesibilidad estructural en toda la sección `/en`, otro en los dos formularios de conversión del sitio) y **confirmó, con evidencia nueva, uno de los dos antecedentes puntuales que pidió Mariano**:

- **El H1 "Comercialy Marketing" SIGUE EXISTIENDO** en producción, en Home ES y también en Home EN (con el mismo bug: "MarketingConsulting"). No es un problema de espaciado CSS ni de copy — es un `<br />` puesto entre dos palabras en el JSX, que hace que el texto plano del H1 (lo que lee Google, lo que se copia/pega, lo que devuelve `textContent`) quede sin espacio. Ver `H-1`.
- **El menú "Venta" YA NO tiene la inconsistencia reportada.** Se verificó desktop, mobile (acordeón), footer, y las listas de servicios en Contacto/E-book: en las cinco ubicaciones dice "Venta" (singular), de forma consistente, con el link correcto a `/venta`. Todo indica que esto se resolvió en los commits `cdb2096`/`8640e83` (30/8) al reorganizar el header. Ver `H-2` — recomiendo cerrar este antecedente, no requiere desarrollo.

Los hallazgos High nuevos:
- **`<html lang="es">` en todo `/en/*`** en el HTML que devuelve el servidor (confirmado con `curl`, sin ejecutar JavaScript) — se corrige recién en el cliente, después de la hidratación. Es una falla de WCAG 3.1.1 (nivel A) y una señal de idioma inconsistente para cualquier crawler o herramienta que no ejecute JS. Ver `T-1`.
- **Los dos formularios de conversión del sitio** (Contacto y E-book) etiquetan sus campos únicamente con `placeholder`, sin `<label>` ni `aria-label` en 5 de 6 campos cada uno. Es un patrón de fallo documentado (WCAG 3.3.2 / técnica F89): el usuario pierde el nombre del campo apenas empieza a escribir. Afecta justo a las dos páginas cuyo único objetivo es convertir. Ver `A-1`.

El resto son hallazgos Medium/Low de higiene técnica y oportunidad (jerarquía de headings sin H2 en una sección de Home, `lastmod` del sitemap sin sentido real, `/basehub` sin indexar todavía, `/ebook` con un solo enlace interno, algunos title/description fuera de rango, imágenes sin OG en 2 páginas). Ninguno es bloqueante.

**Contexto de negocio a tener en cuenta al priorizar:** los datos de Search Console (28 días) muestran tráfico orgánico casi nulo — clics en 0, impresiones de un dígito, y casi todas las queries son de marca ("base core", "basecore") en vez de comerciales. Esto es coherente con un sitio que recién terminó de validar su mapa de keywords (Fase 3.5, cerrada hace ~4 días al momento de esta auditoría) y todavía no acumuló autoridad ni contenido suficiente — no es un síntoma de que algo técnico esté roto.

---

## B–G. Problemas encontrados, por severidad

### CRITICAL

Ninguno. No se encontró nada que bloquee indexación, rompa navegación o impida convertir.

### HIGH

#### H-1 — H1 de Home (ES y EN) rompe la palabra en el texto plano: "Comercialy Marketing" / "MarketingConsulting"

- **Página:** `/` y `/en`.
- **FACTS:** el JSX de `src/app/page.tsx` (línea 154-157) es:
  ```jsx
  <h1 className="hero-title ...">
    Consultoría Comercial
    <br />y Marketing
  </h1>
  ```
  `src/app/en/page.tsx` (línea 173-176) tiene el mismo patrón: `Commercial & Marketing<br />Consulting`.
- **OBSERVATIONS:** evaluado en producción con Playwright sobre `https://www.basecoresales.com/`:
  - `h1.innerHTML` → `"Consultoría Comercial<br>y Marketing"`
  - `h1.textContent` → `"Consultoría Comercialy Marketing"` (sin espacio)
  - `h1.innerText` → `"Consultoría Comercial\ny Marketing"` (con salto de línea, sin espacio real tampoco)
  - El nombre accesible calculado por el árbol de accesibilidad del navegador sí normaliza a "Consultoría Comercial y Marketing" (con espacio) — así que un lector de pantalla probablemente lo anuncia bien.
- **INFERENCES:** el impacto real no es tanto "accesibilidad para lectores de pantalla" (que en general sí insertan una pausa/espacio en un `<br>`) sino **extracción de texto plano**: es lo que usa Google para mostrar el H1 en fragmentos, lo que devuelve cualquier herramienta de SEO/scraping que lea `textContent`, y lo que queda si alguien copia y pega el titular. "Comercialy" es una palabra inexistente que degrada la calidad percibida del H1 más importante del sitio.
- **Impacto SEO/accesibilidad/conversión:** bajo-medio en ranking directo (Google es tolerante a esto), pero es un defecto visible de calidad en la página más importante del sitio y en su versión en inglés. Cualquier auditoría automática (Lighthouse, Screaming Frog, herramientas de terceros) lo va a marcar.
- **RECOMENDACIÓN:** el propio código ya tiene el patrón correcto para este caso — `src/components/PageHero.tsx` (usado en `/venta`, `/preventa`, `/posventa`, `/marketing`, `/tecnologia`) arma el H1 con un array de líneas y agrega explícitamente un espacio (`{" "}`) entre cada segmento antes de decidir con CSS si el salto es visual o no, evitando este problema. La Home debería replicar ese patrón en vez del `<br />` a mano. Ver `T-2` (technical changes) y `C-1` (content changes) para el texto exacto ES/EN.
- **Prioridad:** High. **Esfuerzo:** Bajo (cambio de markup, no de copy — el texto visible no cambia).
- **Dependencias:** ninguna. Es independiente de todo lo demás.

#### H-2 — Menú "Venta": verificado de nuevo, **ya no hay inconsistencia** (antecedente cerrado)

- **Páginas:** header desktop, header mobile (acordeón), footer, `ContactSection`, `EbookSection`.
- **FACTS:** `src/lib/site.ts` define un único `nav` plano (`Marketing, Preventa, Venta, Posventa, Tecnología...`) y `headerNav` colapsa Preventa/Venta/Posventa en un dropdown rotulado "Venta" (línea 76) — mismo dato fuente para desktop y mobile, sin duplicación de strings.
- **OBSERVATIONS:**
  - Desktop (Playwright, `basecoresales.com/`, listado de todos los `<a>` de header/nav): `..., "Marketing", "Venta", "Preventa", "Venta", "Posventa", "Tecnología", ...` — el item padre del dropdown dice "Venta" y el hijo también dice "Venta", ambos singular, ambos apuntan a `/venta`.
  - Mobile (viewport 390×844, menú hamburguesa abierto, snapshot de accesibilidad completo): el acordeón de nivel superior muestra un único item "Venta" (link a `/venta` + botón "Mostrar submenú"), consistente con desktop.
  - Footer: sección "Servicios" lista "Venta" (singular), link a `/venta`.
  - `ContactSection`/`EbookSection` (checklist "Marketing, Preventa, Venta, Posventa, Tecnología"): "Venta" singular en ambos.
- **INFERENCES:** todo apunta a que esto se corrigió en los commits `cdb2096` y `8640e83` (30 de agosto — "agrupar Preventa/Venta/Posventa en el header" y "Marketing antes que Venta en la nav"), cuando se reorganizó el header en un dropdown. No encontré ningún lugar del sitio (código o producción) donde diga "Ventas" (plural) o donde el label difiera entre desktop y mobile.
- **RECOMENDACIÓN:** cerrar este antecedente como resuelto. No requiere ningún cambio de código. Si Mariano recuerda una inconsistencia específica que no reproduje (por ejemplo, un estado intermedio de un deploy anterior, o un caché de CDN viejo), pedirle la URL/captura exacta para volver a mirar — pero contra la producción actual, no hay inconsistencia.
- **Prioridad:** N/A (no es una acción, es una confirmación). **Esfuerzo:** N/A.

#### A-1 — Formularios de Contacto y E-book: campos sin `<label>`, solo `placeholder`

- **Páginas:** `/contacto`, `/en/contact`, `/ebook`, `/en/ebook` (y el bloque de contacto embebido en Home).
- **FACTS:** `src/components/ContactForm.tsx` (líneas 106-152) y `src/components/EbookForm.tsx` (líneas 133-137): los campos `nombre`, `apellidos`, `empresa`, `whatsapp`, `email` (y `mensaje` en Contacto) son `<input>`/`<textarea>` con `placeholder={...}` y **sin** `<label>`, `aria-label` ni `aria-labelledby`. El único campo correctamente etiquetado en ambos formularios es el `<select>` de "SERVICIO" (tiene `aria-label` explícito, línea 122 de `ContactForm.tsx`).
- **OBSERVATIONS:** el snapshot de accesibilidad de Playwright resuelve el nombre accesible de esos inputs a partir del `placeholder` (ej. `textbox "NOMBRE"`), lo cual confirma que hoy el placeholder es la única fuente del nombre accesible.
- **INFERENCES:** esto es el patrón de fallo documentado como WCAG 2.1 técnica **F89** ("usar el atributo placeholder como sustituto de un label real") — criterio 3.3.2 (Labels or Instructions). El problema no es que el lector de pantalla no anuncie nada (sí anuncia el placeholder la primera vez), sino que **el usuario pierde la referencia del campo en cuanto empieza a escribir** — placeholder no es persistente. Para alguien con dificultad de memoria de trabajo, o que revisa el formulario ya completado, o que usa zoom/magnificación, el campo "EMPRESA" con un valor tipeado adentro es indistinguible de "APELLIDO" con un valor tipeado adentro.
- **Impacto:** esto pega directamente en los dos formularios cuyo único propósito es generar un lead — es a la vez un problema de accesibilidad y de CRO (fricción/errores de llenado).
- **RECOMENDACIÓN:** agregar `<label>` visualmente oculto (patrón `sr-only`, ya que el diseño visual actual con placeholder-only se puede mantener) o `aria-label` explícito por campo, igual que ya se hizo con el `<select>`. Ver `T-3`.
- **Prioridad:** High. **Esfuerzo:** Bajo.
- **Dependencias:** ninguna.

#### T-1 — `<html lang="es">` en todas las páginas `/en/*` del HTML que sirve el servidor

- **Páginas:** todas las de `/en/*` (8 rutas + posts de blog EN).
- **FACTS:** `src/app/layout.tsx` fija `<html lang="es">` de forma estática (comentario explícito en el código: leer el pathname ahí forzaría toda la app a renderizado dinámico). `src/app/en/layout.tsx` monta `<SyncHtmlLang lang="en" />`, un client component que hace `document.documentElement.lang = "en"` **dentro de un `useEffect`** — es decir, después de la hidratación en el navegador.
- **OBSERVATIONS:** `curl -s https://www.basecoresales.com/en` (sin ejecutar JavaScript, igual que vería cualquier crawler que no renderice JS, o un lector de pantalla leyendo el DOM antes de que React hidrate) devuelve `<html lang="es" class="...">` — con contenido 100% en inglés.
- **INFERENCES:** esto es una falla de **WCAG 2.1 3.1.1 (Language of Page)**, nivel A — el atributo `lang` debe coincidir con el idioma real del contenido, y durante la ventana entre el primer byte y la hidratación no coincide. Para SEO el impacto es menor (Google usa mayormente `hreflang` + detección de contenido, que están bien implementados), pero es una señal más que queda inconsistente, y cualquier auditor de accesibilidad automatizado (Lighthouse, axe) lo va a marcar como fallo en todas las páginas EN.
- **RECOMENDACIÓN:** esto requiere una solución estructural, no un parche — ver `SEO-TECHNICAL-CHANGES.md` (`T-1`) y `SEO-IMPLEMENTATION-PLAN.md`. Antes de tocar código hay que leer las guías de Next.js 16 en `node_modules/next/dist/docs/` sobre layouts anidados / route groups / metadata por-locale, porque puede requerir reestructurar `/en` como su propio route group con root layout dedicado (lo cual tiene implicancias de performance/build que hay que evaluar junto con el agente `performance` antes de decidir el enfoque). No recomiendo intentar un parche rápido (por ejemplo, correr el `useEffect` más temprano) porque no resuelve el problema real: seguiría sin estar en el HTML servido.
- **Prioridad:** High. **Esfuerzo:** Medio-Alto (requiere investigación de Next.js 16 antes de decidir el approach; posible impacto en la estrategia de renderizado estático).
- **Dependencias:** decidir el enfoque técnico antes de implementar — no depende de otros hallazgos, pero sí necesita luz verde explícita de `web-lead` + `performance` por el trade-off de renderizado.

### MEDIUM

#### C-2 — Home: sección "Metodología" (Diagnóstico / Plan de Ruta / Estrategia / Mejora Continua) sin H2 que la titule

- **Página:** `/` y `/en`.
- **FACTS:** en `src/app/page.tsx` (línea 245-257), la sección que envuelve `<MethodologyGrid steps={methodology} />` no tiene ningún heading propio — ni visible ni oculto. `MethodologyGrid.tsx` renderiza 4 `<h3>` ("Diagnóstico", "Plan de Ruta", "Estrategia", "Mejora Continua") directamente.
- **OBSERVATIONS:** en el snapshot de accesibilidad de la Home mobile, la secuencia de headings salta de un `<h3>` de la sección anterior directo a cuatro `<h3>` nuevos sin ningún `<h2>` intermedio que indique "esto es una sección nueva" (a diferencia del resto de la página, donde cada sección nueva abre con un `<h2>`, ej. "Ciclos de Venta", "Agencia de Marketing").
- **INFERENCES:** para alguien que navega por headings con un lector de pantalla (una forma común de explorar una página), estos 4 títulos aparecen "sueltos", sin contexto de sección. Es un salto de jerarquía (H1→H3 sin H2 en esa rama del árbol) y también le resta claridad estructural a Google sobre qué agrupa esos 4 bloques.
- **RECOMENDACIÓN:** agregar un `<h2>` (puede ser visualmente discreto, tipo eyebrow + heading, consistente con el patrón `SectionHeading` que ya usa el resto de la página) antes del grid — por ejemplo "Nuestra metodología" / "Cómo trabajamos". Ver `C-2` en `SEO-CONTENT-CHANGES.md`.
- **Prioridad:** Medium. **Esfuerzo:** Bajo.

#### T-4 — `lastmod` del sitemap es la hora de la request, no la fecha real de cambio de cada página

- **Página:** `sitemap.xml` (afecta las 32 URLs).
- **FACTS:** `src/app/sitemap.ts` asigna `lastModified: new Date()` sin condicionar por página.
- **OBSERVATIONS:** `curl https://www.basecoresales.com/sitemap.xml` devuelve, para **todas** las URLs, un `<lastmod>` idéntico al momento exacto de la request (verificado dos veces con timestamps distintos). Coincide además con el timestamp de "descargado" que reportó Search Console al pedir el sitemap.
- **INFERENCES:** Google documenta explícitamente que un `lastmod` que no refleja cambios reales de contenido pierde valor como señal y puede hacer que Google directamente lo ignore para ese dominio. Hoy el sitemap le está diciendo a Google "las 32 páginas cambiaron ahora mismo" en cada crawl, lo cual no es cierto.
- **RECOMENDACIÓN:** usar una fecha real por entrada — para los posts del blog ya existe `publishedAt` en el contenido (se puede reusar o agregar un `updatedAt`); para las páginas de servicio, una fecha estática que se actualice a mano cada vez que se edita esa página de verdad (aunque sea aproximada) es preferible a recalcularla en cada build/request. Ver `T-4` en technical changes.
- **Prioridad:** Medium. **Esfuerzo:** Bajo-Medio (requiere decidir de dónde sale la fecha por página, no solo el código).

#### T-5 — `/basehub` (ES) todavía no está indexado; `/en/basehub` sí

- **Página:** `/basehub`.
- **FACTS/OBSERVATIONS:** `scripts/seo/gsc.py inspect https://www.basecoresales.com/basehub` → `Estado cobertura: Crawled - currently not indexed` (rastreada hoy mismo, 2026-09-03). `/en/basehub` → `Submitted and indexed`.
- **INFERENCES:** "Crawled – currently not indexed" es el veredicto que da Google cuando evaluó la página y, por ahora, decidió no indexarla — típicamente por señales de calidad/profundidad de contenido todavía insuficientes o pocos enlaces internos/externos apuntando a ella, no por un bloqueo técnico (la indexación está `ALLOWED`). Es consistente con que la página es nueva y con que, según `CLAUDE.md`, la estrategia completa de "BaseHub en el sitio" todavía está en definición, no implementada del todo.
- **RECOMENDACIÓN:** no es un fix de una línea — mejora con más enlaces internos entrantes (ver `T-6`/`C-3`, la falta de linking a `/ebook` es un patrón similar) y con que la página tenga más profundidad de contenido único. Coordinar con la estrategia ya planificada en el artifact "BaseHub en el sitio" antes de tocar esta página — no duplicar esa planificación acá.
- **Prioridad:** Medium. **Esfuerzo:** Medio (no es solo código, es contenido + tiempo + señales).

#### C-3 — `/ebook` y `/en/ebook` dependen de un único enlace interno (el propio teaser de Home)

- **Páginas:** `/ebook`, `/en/ebook`.
- **FACTS:** búsqueda exhaustiva de `href="/ebook"` en todo `src/`: aparece una sola vez, en la sección de e-book de `src/app/page.tsx` (línea 384). Mismo patrón para `/en/ebook` en `src/app/en/page.tsx` (línea 391). No está en `nav`, no está en el footer, no está enlazado desde ninguna de las 5 páginas de servicio.
- **INFERENCES:** para una página cuyo único objetivo es capturar un lead a cambio de un recurso gratuito, depender de un solo punto de entrada (la Home) es una arquitectura de enlazado interno débil — reduce tanto el "PageRank interno" que llega a esa página como las oportunidades de conversión contextual. `/preventa`, por ejemplo, habla explícitamente de "proceso de ventas desde cero" en su copy — sería un lugar natural para linkear al e-book, que se llama justamente "Proceso de Ventas desde Cero".
- **RECOMENDACIÓN:** agregar 1-2 enlaces contextuales al e-book desde las páginas de servicio más afines (`/preventa` y/o `/venta`), con anchor text natural, no forzado. Ver `C-3` en content changes.
- **Prioridad:** Medium. **Esfuerzo:** Bajo.

#### C-4 — Title/description fuera de rango: `/basehub` y title genérico en `/blog`

- **Páginas:** `/basehub`, `/en/basehub`, `/blog`, `/en/blog`.
- **FACTS (largo real, con el sufijo `– Base Core Sales` que aplica el template):**
  - `/basehub`: title 61 caracteres, description 167 caracteres — ambos por encima del rango seguro habitual (~50-60 / ~120-158) antes de arriesgar truncamiento en el snippet de Google.
  - `/blog`: title "Blog – Base Core Sales" (22 caracteres) — válido pero genérico, no lleva ninguna keyword, a diferencia de todos los demás titles del sitio que sí las llevan (ej. "Gestión Comercial para Pymes").
- **RECOMENDACIÓN:** acortar title/description de `/basehub`; reforzar el title de `/blog` con una keyword relevante del Mapa de Keywords (ej. algo en la línea de "Blog de Gestión Comercial y CRM para Pymes" — a validar por `seo-marketing` contra el mapa real, no inventar la keyword acá). Ver `C-4`.
- **Prioridad:** Medium. **Esfuerzo:** Bajo.

### LOW

#### T-6 — Sin imagen Open Graph en `/blog`, `/tecnologia` y `/en/tecnologia`

- **FACTS:** de todas las páginas con `export const metadata`, `/blog`, `/en/blog`\*, `/tecnologia` y `/en/tecnologia` son las únicas sin bloque `openGraph.images`. (\*`/en/blog` sí tiene `openGraph` pero tampoco imagen.)
- **RECOMENDACIÓN:** agregar una imagen genérica de OG a esas 4 rutas, mismo criterio que ya se usó recientemente para `/basehub`/`/en/basehub` (commit `4ba89ee`). **Prioridad:** Low. **Esfuerzo:** Bajo.

#### T-7 — Redirect de doble salto para `http://basecoresales.com` (sin www)

- **FACTS:** `curl -I http://basecoresales.com/` → 308 a `https://basecoresales.com/` → 308 a `https://www.basecoresales.com/`. Dos saltos en vez de uno.
- **INFERENCES:** impacto mínimo (poco tráfico entra por ese punto exacto), pero es colapsable a un solo salto. Es más una nota de eficiencia de crawl/performance que de SEO puro.
- **RECOMENDACIÓN:** flag para el agente `performance` — no priorizar sin su visto bueno, ya que toca configuración de dominio/Cloudflare, no código de la app. **Prioridad:** Low. **Esfuerzo:** Bajo (fuera del repo, es config de DNS/Cloudflare).

#### C-5 — URL en inglés de Tecnología no está en inglés (`/en/tecnologia`, no `/en/technology`)

- **FACTS:** `routeMap` en `src/lib/site.ts` mapea `/tecnologia` ↔ `/en/tecnologia` — es la única ruta EN que no tradujo el slug (comparar con `/en/presales`, `/en/sales`, `/en/post-sales`; "marketing" coincidentalmente es la misma palabra en ambos idiomas, así que no cuenta).
- **RECOMENDACIÓN:** **no** migrar ahora — el costo (redirect 301 + reescritura de hreflang + posible pérdida temporal de señal en una URL que ya está indexada) supera el beneficio dado el tráfico en inglés actual (casi nulo, ver datos de GSC en la sección de contexto). Dejarlo documentado como oportunidad futura si el tráfico EN crece. **Prioridad:** Low — explícitamente no accionar todavía.

#### I-1 (informativo, no accionable) — El reporte de "Sitemaps" de GSC dice "0 indexadas"; la inspección por URL dice lo contrario

- **OBSERVATIONS:** `uv run scripts/seo/gsc.py sitemaps` → `32 enviadas, 0 indexadas`. Pero `inspect` sobre 10 URLs puntuales (home, venta, marketing, preventa, posventa, tecnologia, blog, en, ebook, blog posts) devolvió `Submitted and indexed` en 9 de 10 (la única excepción real es `/basehub`, ver `T-5`).
- **INFERENCES:** el contador "indexadas" del reporte de Sitemaps de Search Console es conocido por quedar desactualizado/con lag respecto al estado real — no hay que tomarlo como la fuente de verdad de indexación. La fuente confiable es la Inspección por URL (o el reporte de Cobertura/Páginas en la UI de GSC).
- **RECOMENDACIÓN:** ninguna acción de código. Dejar esto documentado para que nadie interprete ese "0 indexadas" como una alarma real en el futuro.

#### I-2 (informativo) — Tráfico orgánico casi nulo, casi todo de marca

- **OBSERVATIONS:** `analytics --days 28` — clics = 0 en absolutamente todas las queries reportadas; impresiones de un dígito o bajas decenas; posiciones mayormente >9, varias >40; la gran mayoría de las queries son de marca ("base core", "basecore") o ruido de indexación de nicho ("bant meddic", con 1 impresión).
- **INFERENCES:** consistente con un sitio que recién cerró Fase 3.5 (keywords validadas hace pocos días). No hay nada técnico que explique esto por sí solo — es esperable en esta etapa. No es un hallazgo de auditoría, es contexto para no sobre-reaccionar y no confundir "todavía no hay autoridad/contenido acumulado" con "algo está roto".

---

## Otras áreas cubiertas (sin hallazgos relevantes)

- **Enlaces rotos:** se verificaron con `curl` las 26 URLs principales del sitio (todas las páginas ES/EN + 6 posts de blog) — todas devuelven 200. Una URL inexistente de prueba devuelve 404 real (no un soft-404).
- **robots.txt:** correcto, permite todo salvo `/api/`, apunta al sitemap real.
- **JSON-LD:** válido en estructura — `ProfessionalService` (root), `Service` (páginas de ciclo), `BlogPosting` (posts), `BreadcrumbList` (la mayoría de páginas internas). No hay `FAQPage` en ningún lado (ver oportunidad más abajo).
- **Canonicals:** cada página declara su propio canonical relativo, sin duplicados detectados.
- **Redirects:** los 4 redirects 301 de slugs viejos de WordPress (`/inicio`, `/presales`, `/sales`, `/support`) están vigentes y correctos.
- **Noindex:** no se encontró ningún `noindex` en el código — todo el sitio es indexable por diseño, consistente con lo verificado en GSC.

## Oportunidad (no defecto): FAQPage schema

Ninguna página de servicio tiene contenido de preguntas frecuentes ni schema `FAQPage`. Es una oportunidad real para capturar long-tail y rich results, pero **requiere contenido real** (preguntas y respuestas genuinas, no inventadas) — queda para que `seo-marketing` lo evalúe como iniciativa de contenido, no como un fix técnico de esta auditoría.

---

## H. Dependencias entre cambios

- `T-1` (html lang en `/en`) es el único cambio que requiere una decisión de arquitectura antes de tocar código — no depende de otro hallazgo, pero todo lo demás puede avanzar en paralelo sin esperarlo.
- `H-1` (H1 Home) es independiente y puede implementarse primero: es el fix de menor esfuerzo y mayor visibilidad.
- `A-1` (labels de formularios) es independiente, mismo componente reusado en 2 formularios (`ContactForm.tsx`, `EbookForm.tsx`) — un solo cambio de patrón, aplicado dos veces.
- `C-3` (linking a `/ebook`) y `T-5` (`/basehub` sin indexar) comparten la misma causa raíz (enlazado interno débil) — conviene abordarlos en la misma pasada de "internal linking", aunque son páginas distintas.
- `T-4` (lastmod del sitemap) es independiente pero de menor esfuerzo si se resuelve junto con cualquier trabajo futuro sobre `src/content/blog/posts.ts` (ya tiene fechas por post).
- `C-4` (title/description `/basehub` y `/blog`) depende de que `seo-marketing` confirme las keywords contra el Mapa de Keywords real antes de escribir el texto final.

## I. Qué debería hacerse primero

Ver el orden completo y razonado en `SEO-IMPLEMENTATION-PLAN.md`. En síntesis: primero los 3 fixes High de bajo esfuerzo y sin dependencias (`H-1`, `A-1`, más los quick wins Low de `T-6`), después el spike de investigación de `T-1` (sin bloquear lo demás), y en paralelo la limpieza de contenido/linking (`C-2`, `C-3`, `C-4`, `T-4`) coordinada con `seo-marketing`.

## J. Qué debería revisar específicamente `seo-marketing` en la implementación

- Confirmar contra el Plan de SEO y el Mapa de Keywords reales (no el resumen que usé acá) que las propuestas de `SEO-CONTENT-CHANGES.md` no contradicen nada más reciente.
- El texto exacto de los nuevos H2 (`C-2`), el ajuste de title/description (`C-4`) y el anchor text de los nuevos enlaces internos (`C-3`) — no soy la autoridad de copy dependiente de keywords.
- Evaluar si vale la pena el contenido de FAQ (oportunidad, no defecto) como iniciativa de Fase futura.
- Ortografía/acentuación de cualquier copy nuevo antes de publicar.

## K. Qué debería revisar `web-lead` en la implementación

- Secuenciar `T-1` (html lang) con cuidado — es el único cambio con riesgo real de tocar la estrategia de renderizado estático del sitio; no ejecutarlo a la ligera.
- Que SEO y performance no se toquen en la misma tanda de trabajo (regla ya vigente, ver `HANDOFF.md`).
- Que ningún copy nuevo (H2 de metodología, anchors de e-book, FAQ si se hace) invente claims, clientes o estadísticas.
- Validar con Playwright (desktop + mobile) cada cambio de markup antes de darlo por cerrado, en particular `A-1` (formularios) y `T-1` (lang).

## L. Qué debería revisar `performance`, si corresponde

- `T-7` (redirect de doble salto en el apex sin www) — es configuración de dominio, no código de la app; performance es quien mide y decide si vale la pena tocarlo.
- Cualquier cambio de arquitectura para resolver `T-1` (html lang) que implique volver dinámica una ruta hoy estática — necesita su visto bueno antes de decidir el enfoque, por el impacto potencial en Core Web Vitals/build.
