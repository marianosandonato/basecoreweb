# SEO — Cambios de contenido (copy, headings, metadata, internal linking)

Este documento cubre solo cambios de **texto visible o metadata**, no de markup/estructura técnica (eso vive en `SEO-TECHNICAL-CHANGES.md`). Ningún texto acá es definitivo: donde depende de la investigación de keywords vigente (Mapa de Keywords), lo marco explícitamente para que `seo-marketing` lo confirme antes de publicar — no inventé keywords, clientes, testimonios ni estadísticas.

---

## C-1 — H1 de Home: el texto visible NO cambia, solo el markup

**Importante:** este cambio (ligado a `H-1` en la auditoría) es 100% técnico — el texto visible en pantalla sigue siendo exactamente el mismo, en las mismas dos líneas. Lo único que cambia es cómo se arma el salto de línea en el código, para que `textContent` no una las palabras. Lo incluyo acá solo para que quede documentado el texto final esperado:

- **ES (`/`):** línea 1 "Consultoría Comercial", línea 2 "y Marketing" → texto plano correcto: "Consultoría Comercial y Marketing".
- **EN (`/en`):** línea 1 "Commercial & Marketing", línea 2 "Consulting" → texto plano correcto: "Commercial & Marketing Consulting".

No se propone cambiar la redacción del H1 en sí (es la línea de marca del sitio, ya usada en `site.name`/`site.description`). Ver implementación en `SEO-TECHNICAL-CHANGES.md#T-2`.

**Nota aparte, de menor prioridad (`C-1b`, no incluida en `SEO-ACTIONS.md` como ítem separado, es opcional):** el H1 de Home es genérico/de marca ("Consultoría Comercial y Marketing"), mientras que el `<title>` de esa misma página ya incluye el calificador "para Pymes" ("Consultoría Comercial para Pymes – Base Core Sales") y los H1 de las 5 páginas de servicio sí están redactados con keyword explícita (ej. "gestión comercial", "prospectar y captar clientes B2B"). Es una decisión de marca válida mantener el H1 de Home genérico — lo señalo como oportunidad, no como defecto. Si `seo-marketing` quiere alinear el H1 de Home más de cerca con "para Pymes", debería validarlo contra el Mapa de Keywords antes de tocarlo — no lo propongo como cambio concreto acá.

**Decisión `seo-marketing` (3/9):** confirmado, sin objeción de copy/keyword. El texto visible no cambia y el Plan de SEO (Fase 1.6) dejó el H1 de Home intacto en su momento por el riesgo de romper el salto de línea a pixel, no por una objeción de contenido — la primaria "consultoría comercial" ya está cubierta igual. Como el propio código ya tiene en `PageHero.tsx` el patrón que preserva saltos de línea sin romper `textContent`, no hace falta copy adicional ni captura de control de mi parte; queda en manos de `web-lead` verificar visualmente que el layout no se mueva un pixel antes de mergear. C-1b (alinear el H1 con "para Pymes") se descarta por ahora — no hay evidencia en el Mapa de que valga la pena resignar la línea de marca genérica por eso.

---

## C-2 — Nuevo H2 para la sección "Metodología" de Home

**Contexto:** hoy la sección que agrupa Diagnóstico / Plan de Ruta / Estrategia / Mejora Continua no tiene ningún heading de sección (ver `SEO-AUDIT.md#C-2`). El resto de la Home usa el patrón `SectionHeading` con un "eyebrow" corto + un H2.

**Propuesta de texto (a validar por `seo-marketing`):**
- **ES:** eyebrow "Cómo trabajamos" + H2 "Nuestra metodología" (o "Metodología de trabajo").
- **EN:** eyebrow "How we work" + H2 "Our methodology".

No tengo evidencia de que "metodología"/"methodology" sea una keyword priorizada en el Mapa de Keywords — es una propuesta funcional (resolver el hueco de accesibilidad/jerarquía) más que una optimización de keyword. Si `seo-marketing` prefiere una redacción distinta que sí capture una keyword del mapa (ej. algo con "proceso comercial", que sí aparece en otras partes del sitio), tiene prioridad esa versión sobre la mía.

**Decisión `seo-marketing` (3/9):** se confirma la opción funcional, sin keyword forzada. "Proceso comercial" ya está asignado como secundaria de `/venta` y `/ebook` en el Mapa de Keywords — reutilizarlo acá en Home arriesga canibalización entre tres páginas del mismo sitio, y no hay ninguna keyword propia del Mapa que aplique bien a esta sección. Texto final:
- **ES:** eyebrow "Cómo trabajamos" + H2 "Nuestra metodología".
- **EN:** eyebrow "How we work" + H2 "Our methodology".

Se descarta la alternativa "Metodología de trabajo" por ser más larga sin aportar señal de keyword adicional.

---

## C-3 — Enlaces internos nuevos hacia `/ebook` desde páginas de servicio

**Contexto:** `/ebook` y `/en/ebook` hoy solo se enlazan desde el teaser de la propia Home (ver `SEO-AUDIT.md#C-3`). El e-book se llama "Proceso de Ventas desde Cero" — temáticamente afín a `/preventa` (captación/calificación) y `/venta` (armado del proceso comercial).

**Propuesta (anchor text, a validar por `seo-marketing` antes de publicar):**
- Desde `/preventa`: un CTA o mención en línea tipo *"Si estás armando tu proceso de ventas desde cero, descargá nuestro e-book gratuito"* enlazando a `/ebook`.
- Desde `/venta`: mención equivalente, ajustada al contexto de esa página (más orientada a estructurar/profesionalizar un proceso ya existente que a arrancar de cero — el anchor no debería sonar idéntico al de `/preventa`).
- EN: mismo criterio, enlazando `/en/presales` y `/en/sales` → `/en/ebook`.

No propongo el copy completo del párrafo/CTA porque depende del layout específico de cada página de servicio (`src/content/preventa.ts`, `src/content/venta.ts`) y de cómo `seo-marketing` quiera integrarlo visualmente — esto es una recomendación de *dónde* y *por qué*, no el texto final cerrado.

**Decisión `seo-marketing` (3/9):** confirmado el criterio de "anchor distinto en cada página", con un ajuste: el anchor text de un enlace interno debe reforzar la keyword de la página de **destino** (`/ebook`), no repetir la keyword de la página de origen — así no le resta señal a "gestión comercial" (primaria de Venta) ni a "prospección B2B"/"ventas B2B" (Preventa). El propio Mapa ya advierte que "proceso de ventas"/"procesos comerciales" son secundarias compartidas entre Venta y E-Book, así que en `/venta` conviene evitar repetir esa frase genérica como anchor y usar en su lugar el título propio del e-book (nombre propio, no keyword genérica).

- **Desde `/preventa` (ES):** *"Si estás armando tu proceso de ventas desde cero, descargá nuestro e-book gratuito."* — anchor: **"proceso de ventas desde cero"** (coincide con la keyword propia del e-book, no con las de Preventa; contexto natural porque Preventa es la etapa de arranque).
- **Desde `/venta` (ES):** *"¿Ya tenés un proceso pero necesitás ordenarlo? Descargá gratis nuestro e-book, Proceso de Ventas desde Cero."* — anchor: **"e-book Proceso de Ventas desde Cero"** (nombre propio del recurso, evita repetir "procesos comerciales"/"proceso de ventas" que ya son secundarias de la propia página de Venta).
- **Desde `/en/presales` (EN):** *"If you're building your sales process from scratch, download our free e-book."* — anchor: **"sales process from scratch"**.
- **Desde `/en/sales` (EN):** *"Already have a process but need to structure it? Download our free e-book, Sales Process from Scratch."* — anchor: **"e-book, Sales Process from Scratch"**.

El texto final de párrafo/CTA queda a implementación (`web-lead`/dev), pero el anchor text de cada uno queda fijado como arriba.

---

## C-4 — Title/description de `/basehub` y title de `/blog`

### `/basehub` y `/en/basehub`

**Problema:** title actual "BaseHub: Plataforma de Gestión de Proyectos" (61 caracteres con el sufijo) y description actual de 167 caracteres — ambos por encima del rango seguro antes de arriesgar truncamiento en SERP.

**Propuesta de recorte (mismo mensaje, más corto — no cambia el claim):**
- Title ES: "BaseHub: Gestión de Proyectos" (sin el sufijo del template ya queda en ~46 caracteres con "– Base Core Sales").
- Description ES: recortar a algo como *"BaseHub: la plataforma de seguimiento de proyectos de Base Core, incluida en tu consultoría — sin pagar una herramienta aparte."* (~127 caracteres) — mantiene el mismo claim que ya está en el copy actual, solo más compacto.
- Mismo criterio para la versión EN, manteniendo el mensaje ya validado en el copy existente de `/en/basehub`.

`seo-marketing` debería confirmar el título recortado no pierde ninguna keyword que estuviera deliberadamente puesta ahí por el Mapa de Keywords antes de aplicar el recorte.

**Decisión `seo-marketing` (3/9) — se descarta el recorte por completo.** El Mapa de Keywords se cerró hoy mismo (3/9) y dice textualmente: *"Qué NO cambia en el código: title, meta description, H1 y eyebrows de /basehub y /en/basehub quedan tal cual están — ya usan la primaria y secundaria validadas."* Es la decisión más reciente de todo el plan, tomada horas antes de esta auditoría, y es explícita sobre estos campos puntuales — no solo sobre las keywords que contienen. Aunque el recorte propuesto preserva el mismo claim y las mismas keywords, cambiar el texto de todos modos contradice la instrucción literal recién cerrada, y el riesgo de truncamiento en SERP no justifica reabrir algo que se cerró el mismo día. Se deja el copy vigente tal cual, sin cambios:
- Title ES: "BaseHub: Plataforma de Gestión de Proyectos" (sin cambios).
- Title EN: "BaseHub: Project Management Platform" (sin cambios).
- Description ES/EN: sin cambios.

Si en el futuro se quiere revisar el riesgo de truncamiento, debería tratarse como una revalidación del Mapa, no como un ajuste unilateral de copy.

### `/blog` y `/en/blog`

**Problema:** title actual "Blog" (rinde "Blog – Base Core Sales", 22 caracteres) — el único title del sitio sin ninguna keyword, notoriamente distinto al resto (que sí llevan keyword, ej. "Gestión Comercial para Pymes").

**Propuesta:** no tengo la keyword exacta que corresponde acá porque no pude leer el Mapa de Keywords real (ver limitación al inicio de `SEO-AUDIT.md`). El copy actual de la propia página describe el blog como *"Artículos sobre procesos comerciales, CRM y tecnología aplicada a ventas para pymes en España y Latinoamérica"* — una dirección razonable sería algo en la línea de "Blog de Gestión Comercial y CRM para Pymes", que reutiliza "gestión comercial" (ya confirmado como término fuerte en ES+AR según el contexto que me pasó `web-lead`) y "CRM" (también usado en `/tecnologia` y `/venta`). **`seo-marketing` debe confirmar esta keyword contra el Mapa de Keywords real antes de aplicarla** — la marco como propuesta, no como decisión cerrada.

**Decisión `seo-marketing` (3/9):** confirmado el uso de "gestión comercial" (primaria validada, sin conflicto con el Mapa — la propia página `/blog` no tiene keyword propia asignada). Se acorta la propuesta de la auditoría para mantener la convención de longitud del sitio: los títulos de servicio actuales (ej. "Gestión Comercial para Pymes", "Prospección de Clientes B2B") rondan 29-30 caracteres antes del sufijo " – Base Core Sales"; la versión "Blog de Gestión Comercial y CRM para Pymes" propuesta por la auditoría llega a 62 caracteres con sufijo, fuera de ese rango. Se quita "para Pymes" (ya implícito en el posicionamiento general del sitio) para quedar en 51 caracteres con sufijo. Texto final:
- **ES (`/blog`):** "Blog de Gestión Comercial y CRM" (→ "Blog de Gestión Comercial y CRM – Base Core Sales").
- **EN (`/en/blog`):** "Commercial Management & CRM Blog" (→ "Commercial Management & CRM Blog – Base Core Sales"), en línea con "Commercial Management Consulting" ya usado como título EN de `/en/sales`.

---

## Recordatorios para quien implemente estos cambios

- No inventar clientes, testimonios ni estadísticas de resultados — el sitio hoy no tiene casos de éxito propios (ver `HANDOFF.md`).
- Corregir ortografía/acentuación en cualquier texto nuevo antes de publicar (regla vigente del proyecto).
- Todo copy dependiente de keywords (C-2, C-3, C-4) debe validarse contra el Mapa de Keywords real antes de publicarse — esta auditoría no tuvo acceso directo a ese documento (ver limitación al inicio de `SEO-AUDIT.md`). **Estado (3/9): `seo-marketing` ya validó los cuatro puntos (C-1 a C-4) contra el Mapa de Keywords y el Plan de SEO vigentes — ver decisiones finales en cada sección arriba. El recorte de title/description de `/basehub` propuesto en C-4 queda descartado explícitamente; el resto de las propuestas quedan confirmadas o ajustadas con texto final ES/EN, listas para implementación por `web-lead`.**
