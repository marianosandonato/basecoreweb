> **Espejo de trabajo, no fuente de verdad.** Copia en texto plano del artifact real. Es la única vía de acceso real para los agentes (`web-lead`, `seo-marketing`, `performance`) — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes (restricción de plataforma, no de configuración), así que solo la sesión principal puede leer el artifact directo. Si hay conflicto entre este archivo y el artifact, gana el artifact — actualizalo ahí primero y después sincronizá esta copia.
>
> - Fuente de verdad: https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9
> - Última sincronización: 2026-09-03

---

Mapa de Keywords Basecore

basecoresales.com · Fase 3.5 · validación con Google Keyword Planner

# Mapa de keywords validado con datos reales

Investigación cruda de Keyword Planner (España + Argentina) contrastada contra el negocio real de Basecore, el código en producción y el plan SEO vigente. Propuesta de reestructuración para revisar — sin cambios aplicados todavía.

**Sobre la fuente:** los datos crudos vienen de una conversación con otra IA usada solo como contenedor de resultados de Keyword Planner. Sus conclusiones y su plan de acción no se adoptan acá — se parte de cero contra CLAUDE.md, el código real y el plan SEO vigente.

**Actualización 30/8 (ronda 2):** se suma la validación completa en inglés (Home/Preventa/Venta/Posventa/Marketing/Tecnología, España + Argentina) y una recomendación de copy para Contacto y E-Book — ver [Inglés](#ingles) y [Contacto/E-Book](#contacto-ebook). Esta ronda la investigó Mariano directamente en Keyword Planner, sin pasar por otro chat de IA.

**Actualización 3/9 (BaseHub, Fase 7.3/7.4):** se suma la validación de `/basehub` y `/en/basehub`, la primera página del sitio que nunca había pasado por Keyword Planner antes de publicarse — ver [BaseHub](#basehub).

01/tecnologia no está en el mapa — es el cluster con mejor volumen/competencia de todo el research

02España y Argentina no coinciden en el cluster de procesos/gestión de ventas

03"gestión comercial" supera a "proceso de ventas" como eje de /venta

04"customer success" está validado y sin usar en /posventa

05La investigación en inglés nunca se hizo — vacío real de la Fase 3.5

[Resumen](#resumen)
[Análisis](#analisis)
[Arquitectura](#arquitectura)
[Contenidos](#contenidos)
[Canibalizaciones](#canibalizaciones)
[Descartadas](#descartadas)
[Preguntas](#preguntas)
[Apéndice](#apendice)
[Inglés](#ingles)
[Contacto/E-Book](#contacto-ebook)
[BaseHub](#basehub)

01

## Resumen ejecutivo

El mapa vigente (Fase 3.1, aplicado el 18/8 sin datos de volumen) acertó en la mayoría de sus apuestas — los datos reales las confirman razonablemente bien. Aparecen cinco cambios de fondo que el mapa actual no contempla, en orden de impacto:

1

#### Falta una página entera del mapa: /tecnologia

Existe en producción, está indexada, tiene contenido propio (agentes de IA, CRM, automatización, software de gestión) — pero nunca entró a la Fase 3.1 ni a la 3.5. Es, además, uno de los clusters con **mejor relación volumen/competencia de todo el research** ("CRM para empresas", "IA para empresas" y "automatización de procesos" con 100–1.000 búsquedas/mes y competencia Baja-Media en España y Argentina). Su title actual ("Implementaciones Tecnológicas: IA + Software") no está validado por ningún dato. Es la oportunidad más grande que este research destapó y que nadie había detectado antes.

2

#### Argentina y España no siempre coinciden

Varias de las keywords más fuertes del mapa vigente (procesos comerciales, procesos de ventas, gestión de ventas) pierden un escalón entero de volumen en Argentina (100–1.000 en España → 10–100 en Argentina) justo cuando Mariano evalúa mudar la base legal de Basecore a Buenos Aires. En cambio, **"gestión comercial" y "estrategia comercial" se sostienen fuertes en ambos mercados** — mejores candidatas para el copy que debe funcionar igual en los dos países.

3

#### /venta tiene una keyword principal más fuerte disponible

"Gestión comercial" (100–1.000 en ambos mercados) supera en consistencia a "procesos de ventas para pymes" (el title actual), sin perder nada del contenido ya escrito — de hecho encaja mejor con lo que la página ya describe (modelo comercial, pipeline, KPIs, compensación, CRM).

4

#### "Customer success" validado y sin usar

Tiene volumen real (100–1.000, competencia Baja en ambos mercados) y ya aparece en el contenido de /posventa (los puestos "Customer Success Manager", "Customer Success Rep") — pero no aparece ni en el title, ni en el meta, ni en el H1. Es una ganancia gratis: no hay que escribir contenido nuevo, solo nombrarlo donde ya está.

5

#### La investigación en inglés nunca se hizo

Se pidió tres veces a lo largo de la conversación y las tres veces quedó pospuesta. Las 7 páginas en inglés del sitio (la mitad de las URLs indexadas) siguen con keywords 100% direccionales, nunca pasadas por Keyword Planner. Es un vacío real de la Fase 3.5, no un detalle menor.

Además: la keyword que hoy está literalmente en el title y el meta de Home ("consultoría comercial para pymes") y de Marketing ("agencia de marketing digital para pymes") son, paradójicamente, las **peor validadas** de sus respectivos clusters — casi sin señal de volumen en ningún mercado — mientras que términos más simples ("consultoría comercial", "consultoría de marketing") sí tienen datos reales sólidos. No se recomienda sacarlas (funcionan como frase de marca/posicionamiento y ya están indexadas), pero sí bajarlas de "keyword SEO principal" a "frase de posicionamiento comercial", dejando que el peso SEO real lo lleven los términos con datos.

No se propone tocar la arquitectura de fondo (Home / Preventa / Venta / Posventa / Marketing / Tecnología / Contacto / E-Book es la estructura correcta); se proponen ajustes de keyword principal/secundaria dentro de cada página, la incorporación formal de Tecnología al mapa, y un plan de blog ampliado con datos reales donde antes solo había hipótesis.

02

## Análisis por dimensión

### 2.1Intención de búsqueda por keyword/cluster

El research crudo mezcla, en casi cada bloque, tres tipos de intención bien distintos:

* **Transaccional/comercial directa** — alguien busca contratar ayuda: "consultoría comercial", "consultoría de ventas", "implementación crm", "consultoría crm", "diagnóstico comercial gratuito". Volumen bajo (10–100 en general) pero es el tráfico que puede convertirse.
* **Informacional con ángulo de servicio** — busca entender o resolver un problema, puede convertir si el contenido lo lleva bien: "procesos comerciales", "gestión comercial", "fidelización de clientes", "qué es un CRM", "cómo hacer un forecast". Volumen medio (100–1.000), la capa que debería vivir en el blog y alimentar las páginas de servicio.
* **Informacional pura / equivocada de categoría** — quiere una definición, un PDF, un curso, una marca de software o un negocio de otro rubro. Alto volumen agregado, pero no aporta a Basecore (ver 2.9 y el apéndice).

El mapa vigente (3.1) ya intuía esta separación sin datos; los datos confirman que es correcta y que el volumen real está concentrado en el segundo grupo — razón de más para construir el blog (3.4) en paralelo a las páginas de servicio, no como algo secundario.

### 2.2Relevancia comercial real (no todo lo que tiene volumen sirve)

Ejemplos de "mucho volumen, poca relevancia" que aparecieron en el research y que hay que resistir la tentación de perseguir:

* **"estrategia de marketing"** (1.000–10.000, España): volumen altísimo pero intención puramente educativa/genérica — mejor destino blog que keyword de página de servicio.
* **"churn" / "cross selling" / "up selling"** (1.000–10.000, ambos mercados): el propio research crudo llega a la conclusión correcta — intención demasiado amplia/académica para ser keyword principal, mejor como vocabulario dentro del contenido de /posventa (ya lo son).
* **"crm para pymes" / "crm gratis" / "crm para inmobiliarias" / "salesforce qué es"**: mucho volumen agregado, pero es tráfico de alguien evaluando qué software comprar, no de alguien buscando un consultor. Basecore no vende ni revende CRM.

**Corrección 30/8:** "agencia de marketing" (1.000–10.000, ambos mercados) había quedado acá como ejemplo de "mucho volumen, poca relevancia", asumiendo que Basecore solo asesora y no ejecuta. Verificado el código real de `/marketing` (sitios web, SEO, redes sociales, pauta publicitaria, diseño gráfico, todo prestado por Mariano con herramientas/IA) y confirmado por él directamente: sí ejecuta. La keyword pasa a ser relevante — ver el bloque de Marketing en la sección 3 y el apéndice 8.5.

La relevancia real la da la combinación intención transaccional + encaje textual con lo que la página ya ofrece — no el volumen aislado.

### 2.3Volumen, competencia y CPC — síntesis

(Detalle completo por keyword en el [apéndice](#apendice).) Patrones que emergen al mirar el dataset completo:

* La inmensa mayoría de las keywords **realmente relevantes** vive en 10–100 o 100–1.000 búsquedas/mes con competencia Baja o Media. No hay ninguna keyword relevante con volumen alto (1.000+) y competencia baja — es un nicho, esperable para una consultoría B2B sin marca instalada. Valida la premisa original: no competir por volumen, competir por intención.
* El cluster de **Tecnología (CRM/IA/automatización)** es sistemáticamente el de mejor relación volumen/competencia de todo el dataset.
* El **CPC** confirma valor comercial en casi todo el dataset (rango típico €1–15, con picos en CRM: "crm para clientes" llega a €119, "crm gestión comercial" ronda €47–55). Es señal de "hay anunciantes pagando por esto", no un KPI de SEO orgánico en sí mismo, pero refuerza que son mercados con presupuesto.
* **España vs. Argentina:** de las ~45 keywords comparables en ambos mercados, unas 12 muestran una caída de un escalón completo de volumen en Argentina. El resto se mantiene equivalente. La asimetría corre en una sola dirección — no hay keywords fuertes en Argentina y débiles en España.

### 2.4Clusters temáticos (por intención, no por página actual)

| Cluster | Contenido | Página destino |
| --- | --- | --- |
| Consultoría / posicionamiento de marca | consultoría comercial, consultoría de ventas, consultoría empresarial, consultoría para pymes/empresas, asesoría comercial/empresarial | Home + vocabulario transversal |
| Gestión y procesos comerciales | gestión comercial, procesos comerciales, procesos de ventas, estrategia comercial/de ventas, gestión de ventas, organización comercial, planificación comercial, productividad comercial/de ventas | Venta |
| Captación y B2B | prospección B2B/comercial/de clientes, generación de leads B2B, captación de clientes B2B, ventas B2B, venta consultiva B2B | Preventa |
| Clientes y retención | fidelización de clientes, retención de clientes, gestión de clientes/cartera, customer success, experiencia del cliente, servicio postventa | Posventa |
| Marketing B2B | consultoría de marketing, marketing B2B, marketing para empresas/pymes, marketing digital, estrategia de marketing | Marketing |
| Tecnología comercial | CRM para empresas, implementación/consultoría CRM, automatización de procesos/ventas, IA para empresas, agentes de IA | Tecnología (hoy fuera del mapa) |
| Ruido de software/vendors y sectorial | Salesforce, Zoho, HubSpot, Dynamics, Bitrix24; retail/e-commerce; académico | No forman cluster de negocio — ver 2.9 |

### 2.5Oportunidades SEO priorizadas

1. Sumar /tecnologia al mapa de keywords y reescribir su title/meta/H1 alrededor de "CRM para empresas" + "IA para empresas" + "automatización de procesos" — cero contenido nuevo que escribir, la página ya cubre exactamente estos temas.
2. Nombrar "customer success" en /posventa (title, meta o H1) — el contenido ya existe, falta la palabra.
3. Revisar la keyword principal de /venta hacia "gestión comercial" en vez de (o además de) "proceso de ventas" — mejor volumen, mejor resistencia entre mercados.
4. Reforzar "ventas B2B" en /preventa como secundaria de mayor volumen que "prospección B2B" (la actual).
5. Reforzar /marketing alrededor de "marketing digital para pymes" (ya es el title vigente y tiene volumen real) + "agencia de marketing" como secundaria fuerte (corregido 30/8 — Mariano confirmó que ejecuta él mismo, la keyword ya no está en tensión con el modelo de negocio).
6. Cerrar el vacío de inglés — sin esto, Fase 3.5 queda incompleta para la mitad del sitio.
7. Arrancar el blog (3.4) con los dos temas que el research sí valida con volumen real (CRM/adopción en pymes) primero, y sumar 3 temas nuevos que el research destapó.

### 2.6Arquitectura web: ¿el mapa de 7 páginas sigue siendo el correcto?

**Sí, con una corrección de fondo: son 8 páginas, no 7.** El plan vigente (3.1) describe la arquitectura como Home/Preventa/Venta/Posventa/Marketing/Contacto/E-Book. Pero el sitio real (`src/app/tecnologia/`, en el sitemap, indexado, con su propio `ServiceJsonLd`) tiene una octava página de servicio con contenido propio y sustancial (agentes de IA, automatización, CRM, software de gestión, tableros, diagnóstico tecnológico). No es una omisión menor: es la página con mejor dato de demanda de todo el research y no tiene keyword principal asignada en ningún documento del plan.

No se recomienda **dividir** Tecnología en dos páginas (p. ej. separar CRM de IA) todavía — el volumen de cada sub-tema no justifica fragmentar audiencia ni presupuesto de contenido con cero autoridad de dominio construida. Sí se recomienda que la página deje de leerse como un anexo técnico y pase a tener el mismo tratamiento SEO que Preventa/Venta/Posventa/Marketing.

No se recomienda crear páginas geográficas (/argentina, /espana) — el propio research crudo llega a esta conclusión: el volumen no lo justifica y generaría contenido duplicado sin valor real. La segmentación por mercado, si hace falta, debería resolverse con señales locales (GBP, testimonios, casos — Fase 4), no con URLs nuevas.

No se recomienda crear página propia para "CRM por sector" (inmobiliarias, clínicas, aseguradoras, etc.) — hay volumen real en varios verticales, pero sin ningún caso de éxito o especialización sectorial declarada, sería prematuro. Queda como oportunidad futura (ver pregunta abierta 5).

### 2.7Ajustes a las páginas de servicio existentes

| Página | Keyword principal hoy (sin datos) | Cambio propuesto con datos reales | Motivo |
| --- | --- | --- | --- |
| Home | consultoría comercial para pymes | Mantener como frase de marca (title/H1), pero que **"consultoría comercial"** (validada, ambos mercados, comp. Baja) lleve el peso SEO real en cuerpo/H2. "Consultoría para pymes" y "gestión comercial" como secundarias de volumen. | La frase larga combinada casi no tiene señal propia en ningún mercado; sus componentes sí. |
| Preventa | prospección de clientes B2B | Mantener primaria (correcta). Subir **"ventas B2B"** (100–1.000, Baja-Media, ambos mercados) a secundaria de mayor peso — hoy no está mencionada y tiene más volumen que la propia primaria. | "Ventas B2B" es más buscada que "prospección B2B" y el contenido la sostiene igual de bien. |
| Venta | proceso de ventas para pymes | Evaluar mover el peso principal a **"gestión comercial"** (100–1.000 en España y Argentina) y dejar "procesos comerciales/de ventas"/"consultoría de ventas" como secundarias que ya cubren los H3 existentes (Pipeline & Funnel, KPI's, Forecast, Implementación CRM). | "Procesos comerciales/de ventas" pierden un escalón de volumen en Argentina; "gestión comercial" no. |
| Posventa | fidelización y retención de clientes | Mantener "fidelización de clientes" primaria. Sumar **"customer success"** como secundaria visible (title o H1) — validada, y el contenido ya la sostiene. | Ganancia de bajo esfuerzo: nombrar algo que la página ya es. |
| Marketing | agencia de marketing digital para pymes | Migrar el eje a **"marketing digital para pymes"** (ya es el title vigente, con volumen real) + **"agencia de marketing"** como secundaria fuerte (1.000–10.000, el mayor volumen del cluster). "Agencia de marketing digital para pymes" se mantiene como frase de meta, sin señal fuerte propia pero ya sin tensión de fondo. | Corregido 30/8: Mariano confirmó que ejecuta él mismo (sitios web, SEO, redes, pauta, diseño) — coincide con lo que ya promete el código real de `/marketing`. |
| Tecnología | *(sin asignar)* | Asignar primaria **"CRM para empresas" / "IA para empresas"** (ambas validadas) y secundarias "automatización de procesos", "consultoría CRM" (mejor competencia que "implementación CRM"), "agentes de IA para empresas". Evitar "automatización comercial" (competencia Alta ambos mercados). | Es la corrección de mayor impacto de todo este research. |
| Contacto | diagnóstico comercial gratuito | Sin cambios — es CTA transaccional/de marca, no un término de volumen genérico. | Casi todos los competidores usan la misma fórmula como CTA, no como keyword de posicionamiento. |
| E-Book | cómo armar un proceso de ventas desde cero | Sin cambios — validado por análisis de SERP/competencia, no aplica bien a Keyword Planner. | El research confirmó competidores atacando esa frase casi textual. |

### 2.8Plan de blog: los 5 temas de 3.4 a la luz de los datos

* **"Por qué tus clientes compran una vez y no vuelven"** — validado indirectamente: no hay keyword exacta, pero el cluster de posventa lo sostiene. Se valida sin cambios.
* **"~27% de las pymes españolas usa CRM"** — se refuerza fuertemente: "CRM para empresas/pymes" es de los clusters con más volumen validado del dataset. Sube de prioridad.
* **"Qué CRM elegir para una pyme"** — mismo refuerzo, con CPC muy alto en variantes de comparación de marca (hasta €17,94) — señal de negocio real detrás. Sube de prioridad, y ahora enlaza a /tecnologia, no solo a /venta.
* **"Diferencia entre pipeline y funnel de ventas"** — sin keyword que la confirme ni la contradiga. Queda direccional, sin sobreestimar su potencial de tráfico.
* **"Cómo hacer seguimiento comercial sin perder oportunidades"** — "seguimiento comercial/de clientes" sí aparecen con volumen 10–100 en Argentina. Se valida parcialmente.

**Temas nuevos que el research destapa** (orden completo en la sección 4): "Qué es un CRM y para qué sirve", "Cómo elegir entre HubSpot, Pipedrive y Zoho", "Qué automatizar primero con IA en un equipo comercial", "Customer Success vs. fidelización: no es lo mismo".

### 2.9Keywords irrelevantes o inconvenientes (con volumen, igual descartadas)

Detalle completo con ejemplos y conteos en la sección [6](#descartadas) y el [apéndice](#apendice). Categorías: software/vendors de CRM en modo "qué es/gratis/opiniones"; CRM por vertical sin relación declarada con Basecore hoy; retail/e-commerce puro; material académico/formativo; nombres de consultoras ajenas; fidelización B2C-telecomunicaciones o retail de marca; fidelización/retención de *empleados* (homónimo de RR.HH.). **Corrección 30/8:** el cluster de "ejecución de marketing digital" (SEO/SEM, redes sociales, diseño, pauta) ya no se descarta — Mariano confirmó que sí presta esos servicios de ejecución él mismo, ver 2.2 y sección 3.

### 2.10Oportunidades que ni el research ni el mapa anterior habían detectado

1. /tecnologia sin dueño de keyword (2.6) — la más importante.
2. "Customer success" validado y sin usar (2.7).
3. El patrón España > Argentina en "procesos/gestión de ventas", relevante justo ahora que se evalúa mudar la base legal a Argentina.
4. "Ventas B2B" con más volumen que "prospección B2B" en ambos mercados — el research nunca lo señaló como alternativa a la principal de /preventa.
5. La brecha de inglés como vacío de auditoría, no solo "trabajo pendiente" — la Fase 3.5 no puede darse por cerrada mientras 7 de 16 URLs siguen sin ningún dato.

### 2.11 / 2.12Canibalizaciones y preguntas abiertas

Ver secciones [5](#canibalizaciones) y [7](#preguntas).

03

## Arquitectura + mapa de keywords revisado

8 páginas de servicio + Contacto + E-Book + Blog (nuevo), sin cambios de URL.

```
Home (/,  /en)
├── Preventa   (/preventa,   /en/presales)
├── Venta      (/venta,      /en/sales)
├── Posventa   (/posventa,   /en/post-sales)
├── Marketing  (/marketing,  /en/marketing)
├── Tecnología (/tecnologia, /en/tecnologia)   ← formalmente incorporada al mapa
├── Contacto   (/contacto,   /en/contact)
├── E-Book     (/ebook,      /en/ebook)
├── BaseHub    (/basehub,    /en/basehub)     ← validada 3/9
└── Blog       (nuevo — /blog o /recursos)
```

### Mapa revisado (ES — España + Argentina, salvo aclaración)

| Página | Primaria (dato real) | Secundarias (dato real) | Nota de mercado |
| --- | --- | --- | --- |
| Home | consultoría comercial *(marca: "...para pymes")* | consultoría para pymes · gestión comercial · consultoría empresarial · consultoría de ventas | Todas sostenidas en ambos mercados. |
| Preventa | prospección B2B *(como ya está)* | ventas B2B · generación de leads B2B · captación de clientes · prospección comercial | "Ventas B2B" tiene más volumen que la propia primaria. |
| Venta | gestión comercial *(candidata a reemplazar "proceso de ventas")* | procesos comerciales · procesos de ventas · estrategia de ventas · consultoría de ventas · automatización de ventas · implementación CRM | "Procesos comerciales/de ventas" y "gestión de ventas" caen a 10–100 en AR; "gestión/estrategia comercial" se sostienen en ambos. |
| Posventa | fidelización de clientes | customer success · retención de clientes · gestión de cartera de clientes · gestión de clientes | "Gestión de clientes" cae a 10–100 en AR — terciaria, no secundaria fuerte. |
| Marketing | marketing digital para pymes | agencia de marketing · marketing B2B · marketing para pymes · generación de leads | Corregido 30/8 — Mariano ejecuta él mismo (sitios web, SEO, redes, pauta, diseño), coincide con el código real de `/marketing`. "Agencia de marketing" (1.000–10.000) pasa a secundaria fuerte. |
| Tecnología | CRM para empresas · IA para empresas | automatización de procesos · consultoría CRM · agentes de IA para empresas · automatización de ventas | Página nueva en el mapa. Evitar "automatización comercial" (competencia Alta). |
| Contacto | diagnóstico comercial gratuito | — (CTA de marca) | Sin cambios. |
| E-Book | cómo armar un proceso de ventas desde cero | proceso comercial efectivo pyme | Validado por SERP/competencia, no por KWP. |
| BaseHub | gestión de proyectos *(confirma el title/eyebrow vigente)* | herramienta de gestión de proyectos · PMO (blog) | Validada 3/9 — sin cambios de copy necesarios, ver sección 11. |
| Blog | *(ver sección 4)* | — | — |

**Inglés:** no incluido en esta tabla — no hay datos de Keyword Planner para EN en todo el research. Las keywords EN vigentes siguen siendo 100% direccionales, igual que estaba toda la Fase 3.1 antes de esta validación.

04

## Plan de contenidos priorizado

### Páginas de servicio a ajustar (orden por impacto/esfuerzo)

1. **/tecnologia** (+ /en/tecnologia) — reescribir title, meta y H1 alrededor de CRM/IA/automatización. Impacto alto, esfuerzo bajo (contenido ya existe).
2. **/posventa** — sumar "customer success" a title o H1. Impacto medio, esfuerzo mínimo.
3. **/venta** — evaluar y, si se aprueba, migrar keyword principal a "gestión comercial". Impacto medio-alto, esfuerzo bajo.
4. **/marketing** — reforzar "marketing digital para pymes" (ya vigente) + sumar "agencia de marketing" como secundaria fuerte. Impacto medio, esfuerzo bajo (metadatos; el copy visible ya coincide con el encuadre de ejecución confirmado 30/8).
5. **/preventa** — sumar "ventas B2B" como secundaria visible. Impacto bajo-medio, esfuerzo mínimo.
6. **/home** — bajar peso de la frase larga, subir "consultoría comercial" en el cuerpo. Impacto bajo, esfuerzo mínimo.

### Posts de blog (orden priorizado)

1. "¿Qué CRM elegir para una pyme?" (comparativa neutral) — 3.4 #3, reforzado con datos, enlaza a /tecnologia.
2. "Solo ~27% de las pymes españolas usa un CRM" — 3.4 #2, reforzado con datos.
3. "Qué es un CRM y para qué sirve" (nuevo) — volumen informacional alto, tope de embudo hacia /tecnologia.
4. "Qué automatizar primero con IA en un equipo comercial" (nuevo) — monta sobre keywords de IA validadas.
5. "Customer Success vs. fidelización de clientes: no es lo mismo" (nuevo) — conecta keyword validada con contenido ya escrito en /posventa.
6. "Cómo hacer seguimiento comercial sin perder oportunidades" — 3.4 #5, validación parcial.
7. "Por qué tus clientes compran una vez y no vuelven" — 3.4 #1, sostenido por el cluster.
8. "Diferencia entre pipeline y funnel de ventas" — 3.4 #4, mantener sin sobreestimar tráfico esperado.

05

## Canibalizaciones detectadas

| Conflicto | Páginas | Riesgo | Resolución propuesta |
| --- | --- | --- | --- |
| CRM / implementación CRM | /venta (H3 "Implementación CRM") vs. /tecnologia (dueña de "CRM para empresas"/"consultoría CRM") | Alto una vez que /tecnologia se optimice. | /tecnologia pasa a ser la página "dueña" de CRM/implementación. /venta mantiene su H3 como contenido de apoyo y enlaza internamente a /tecnologia ("implementamos tu CRM"). |
| Generación de leads | /marketing ("generación de leads") vs. /preventa ("generación de leads B2B", "prospección B2B") | Medio — se solapan en la palabra raíz. | Mantener el calificador "B2B" siempre en /preventa para diferenciar intención (outbound/1:1) de /marketing (inbound/campañas). |
| Gestión de clientes | /posventa (relación/retención) vs. /tecnologia (herramienta) | Bajo-medio — mismo campo semántico, ángulo distinto. | /posventa enfoca en estrategia de relación; /tecnologia en la herramienta/implementación. Evitar que /posventa use "CRM" como palabra ancla. |
| Procesos comerciales / gestión comercial | /home (vocabulario de marca) vs. /venta (keyword principal candidata) | Bajo si se respeta el rol de cada página. | Mantener "gestión comercial"/"procesos comerciales" fuera del H1 de Home; exclusivos de /venta. |
| Blog CRM vs. /tecnologia | Posts nuevos ("qué es un CRM", "qué CRM elegir") vs. /tecnologia | Bajo si se mantiene la separación de intención — es sinergia, no canibalización. | Enlace interno obligatorio desde cada post hacia /tecnologia con CTA de diagnóstico. |

06

## Keywords descartadas y motivo

Lista completa de ejemplos en el [apéndice](#apendice); acá el criterio por categoría.

| Categoría | Ejemplos | Motivo del descarte |
| --- | --- | --- |
| Software/vendors ("qué es/gratis") | salesforce qué es, zoho para qué sirve, hubspot es gratis, microsoft dynamics qué es, crm gratis para pymes | Intención de comprador/evaluador de software, no de contratar consultoría. Basecore no vende ni revende CRM. |
| CRM por vertical sin foco declarado | crm para inmobiliarias, clínicas, aseguradoras, bancos, logística, hostelería | Volumen real en varios casos, pero sin especialización sectorial hoy — prematuro, diluiría el posicionamiento genérico B2B. |
| Retail / e-commerce | estrategia de venta de ropa/zapatos/restaurantes, control de stock, Black Friday | Modelo de negocio distinto (retail/e-commerce B2C), no es el cliente de Basecore. |
| Académico/formativo | administración de ventas PDF, UF0349, UF0350, MF1000\_3, SEPE, "según autores" | Intención de estudiar/certificarse, no de contratar. |
| Marcas/empresas de terceros | Aztec consultoría empresarial, Bastis consultores, CBRE inmobiliaria | Búsquedas navegacionales a negocios ajenos concretos. |
| Fidelización B2C / telecom | fidelización Orange, Yoigo, MasMovil, Amazon, Starbucks, Coca-Cola | Consumidor final, sector telecomunicaciones/retail de marca — no aplica a consultoría B2B. |
| Fidelización de RR.HH. | fidelización de empleados, fidelización laboral, retención de personal | Homónimo de "fidelización de clientes" pero de recursos humanos — tema distinto. |
| "Consultoría comercial para pymes" (como único eje) | — | Sin señal propia en Keyword Planner en ningún mercado; sus componentes sí tienen datos. Se conserva como frase de marca, no como keyword SEO principal. |
| "Agencia de marketing digital para pymes" (como único eje) | — | Sin señal propia fuerte en Keyword Planner — se mantiene como frase de meta, no como keyword SEO principal. (Ya no se descarta por modelo de negocio: corregido 30/8.) |
| Volumen alto pero intención demasiado amplia | churn, cross selling, up selling, estrategia de marketing | El propio research crudo llega a esta conclusión: buen vocabulario de contenido, mala keyword principal. |

**Corrección 30/8:** esta tabla tenía una fila "Ejecución de marketing digital" (SEO/SEM, email marketing, redes sociales, influencer marketing) descartada por asumir que Basecore no presta esos servicios directamente. Mariano confirmó que sí los ejecuta él mismo con herramientas/IA, y el código real de `/marketing` los promete explícitamente — esa categoría deja de descartarse. "Agencia de marketing" pasa a secundaria fuerte (ver sección 3); el resto del cluster de ejecución (antes agrupado en bloque en el apéndice 8.7) queda como oportunidad de contenido, no como descarte.

07

## Preguntas abiertas para Mariano

1 · Inglés

La investigación en Keyword Planner para EN nunca se hizo (se pospuso tres veces en la conversación). ¿Se prioriza antes de tocar title/meta/H1 en inglés, o queda como Fase 3.5-bis de menor prioridad mientras se valida ES/AR primero?

2 · Peso Argentina vs. España

Varias keywords centrales (procesos comerciales, procesos de ventas, gestión de ventas) pierden un escalón de volumen en Argentina justo cuando se evalúa mudar la base legal ahí. ¿El copy por defecto debería inclinarse hacia los términos que se sostienen en ambos mercados (gestión comercial, estrategia comercial, CRM/IA), dejando los términos más fuertes en España para contenido o landing específicos más adelante?

3 · Rol de /tecnologia

Hoy no forma parte del framing "Preventa → Venta → Posventa" del resto del sitio. ¿Se la trata como octavo pilar de igual jerarquía (con su propia entrada de navegación/posicionamiento equivalente), o se mantiene como servicio transversal de apoyo, con menor prominencia en menú pero igual peso SEO?

**4 · Posicionamiento real de /marketing — resuelto 30/8:** esta pregunta asumía que Mariano solo asesora. Se verificó el código real de `/marketing` (sitios web, SEO, redes sociales, pauta publicitaria, diseño gráfico) y él confirmó que ejecuta directamente con herramientas/IA. Encuadre correcto: agencia de ejecución con IA, no asesoría pura. "Agencia de marketing" pasa a secundaria fuerte y el cluster de ejecución deja de descartarse — ver sección 3 y la corrección en 2.2.

5 · Verticales de CRM

Hay volumen real en varios sectores (inmobiliarias, clínicas, aseguradoras, etc.) que hoy se descartan por falta de especialización declarada. ¿Existe algún vertical donde Basecore ya tenga experiencia o interés concreto, que justifique una landing dedicada más adelante?

6 · Alcance de validación en Contacto/E-Book

¿Confirmás que esas dos páginas quedan exentas de validación por Keyword Planner (por ser CTA de marca / lead magnet con nombre propio), cerrando así ese punto de la Fase 3.5, o querés una pasada igual antes de dar por cerrado el research?

08

## Apéndice — todas las keywords extraídas del research

Convenciones: **Mercado** ES = España, AR = Argentina (moneda mostrada en € en ambos casos — confirmado en la propia conversación que es un artefacto de la cuenta de Google Ads, no indica que el volumen sea de España). **Decisión**: página/cluster asignado, "Descartada" + motivo corto, o "Observación" (sin dato suficiente para decidir, mantener en radar).

Primaria
Secundaria
Terciaria / observación de asignación
Observación (sin señal suficiente)
Blog
Descartada / evitar

8.1  Home / Consultoría comercial 31 keywords

| Keyword | Idioma | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| consultoría comercial | ES | ES | 10–100 | Baja | €1,73–2,49 | Home (primaria) |
| consultoría comercial | ES | AR | 10–100 | (variable entre corridas: Alta / declive) | €0,61–2,53 | Home (primaria) |
| consultoría comercial para pymes | ES | ES | 10–100 | Media | — | Home (frase de marca, no eje SEO) |
| consultoría comercial para pymes | ES | AR | 10–100 | — | — | Home (frase de marca, no eje SEO) |
| consultoría comercial empresas | ES | ES | — | — | — | Observación (sin señal) |
| consultoría comercial y ventas | ES | ES/AR | 10–100 / 0–100 | — | — | Observación (sin señal) |
| consultoría estrategia comercial | ES | ES | — | — | — | Observación (sin señal) |
| consultoría gestión comercial | ES | ES/AR | — | — | — | Observación (sin señal) |
| consultoría de ventas | ES | ES | 10–100 | Baja | €1,14–3,53 | Home / Venta (secundaria) |
| consultoría de ventas | ES | AR | 10–100 | Alta | €0,61–2,53 | Home / Venta (secundaria) |
| consultoría ventas | ES | ES | 10–100 | Baja | €2,05–5,22 | Secundaria |
| consultoria en ventas | ES | ES | 10–100 | Media | €1,97–8,19 | Secundaria |
| consultoría en ventas | ES | AR | 10–100 | Alta | — | Secundaria |
| consultoría fuerza de ventas | ES | ES | — | — | — | Observación (sin señal) |
| consultoría empresarial | ES | ES | 100–1.000 | Baja | €1,97–3,98 | Home (secundaria) |
| consultoría empresarial | ES | AR | 10–100 | Alta (pico +900%) | €0,67–3,25 | Home (secundaria, más débil en AR) |
| consultoría empresarial para pymes | ES | ES/AR | 10–100 | Baja | — | Observación |
| consultoría empresarial pymes | ES | ES | — | — | — | Observación (sin señal) |
| consultoría para empresas | ES | ES | 10–100 | Media | €1,51–5,90 | Home (secundaria) |
| consultoría para empresas | ES | AR | 10–100 | Alta | €0,57–3,15 | Home (secundaria) |
| consultoría para pymes | ES | ES | 100–1.000 | Baja | €1,57–4,40 | Home (secundaria fuerte) |
| consultoría para pymes | ES | AR | 100–1.000 | Alta | €0,54–4,08 | Home (secundaria, más competida en AR) |
| consultoría pymes | ES | ES | 100–1.000 | Baja | €2,40–13,25 | Secundaria |
| consultoría pymes | ES | AR | 10–100 | Alta | €0,55–3,83 | Secundaria |
| consultoría para medianas empresas | ES | ES/AR | — | — | — | Observación (sin señal) |
| consultoría para pequeñas empresas | ES | ES/AR | — | — | — | Observación (sin señal) |
| consultor de pymes | ES | ES | 10–100 | Baja | — | Observación |
| consultora para empresas | ES | AR | 10–1.000 | Alta | €2,14–4,33 | Observación |
| asesoría comercial | ES | AR | 100–1.000 | Baja | €0,27–1,63 | Secundaria (calza con "consultoría comercial") |
| asesoría empresarial | ES | AR | 10–100 | Media (pico +900%) | €1,04–4,90 | Observación |
| asesoramiento empresarial | ES | AR | 10–100 | Media | €0,57–1,82 | Observación |
| consultoría estratégica | ES | AR | 10–100 | Media | €0,39–1,16 | Observación |
| consultoria comercio exterior / internacional | ES | ES/AR | 10–100 / 100–1.000 | Baja | €1,20–11,52 | Descartada — rubro distinto (comercio exterior, no consultoría comercial B2B) |

8.2  Venta / Procesos y gestión comercial 34 keywords

| Keyword | Idioma | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| gestión comercial | ES | ES | 100–1.000 | Baja | €2,52–14,18 | Venta (candidata a primaria) |
| gestión comercial | ES | AR | 100–1.000 | Media | €0,42–2,60 | Venta (candidata a primaria — se sostiene en AR) |
| procesos comerciales | ES | ES | 100–1.000 | Baja | €1,41–4,07 | Venta (secundaria fuerte en ES) |
| procesos comerciales | ES | AR | 10–100 | Baja | — | Venta (secundaria más débil en AR — market split) |
| procesos de ventas | ES | ES | 100–1.000 | Baja | — | Venta (secundaria fuerte en ES) |
| procesos de ventas | ES | AR | 10–100 | Baja | €0,50–1,50 | Venta (secundaria más débil en AR — market split) |
| gestión de procesos comerciales | ES | ES/AR | 10–100 | Baja | — | Terciaria |
| optimización de procesos comerciales | ES | ES/AR | 10–100 | Baja | — | Terciaria |
| mejora de procesos comerciales | ES | ES/AR | — | — | — | Observación (sin señal) |
| estrategia comercial | ES | ES | 100–1.000 | Baja (declive -90%) | €1,10–5,32 | Venta (secundaria fuerte) |
| estrategia comercial | ES | AR | 100–1.000 | Media | €0,37–2,92 | Venta (secundaria fuerte, ambos mercados) |
| estrategia comercial b2b | ES | AR | 10–100 | Media | €0,51–1,76 | Terciaria |
| estrategia comercial y ventas | ES | ES/AR | 10–100 | Alta / — | — | Observación |
| gestión de ventas | ES | ES | 100–1.000 | Media (declive -90%) | €2,65–11,77 | Venta (secundaria, más débil en AR) |
| gestión de ventas | ES | AR | 10–100 | Media | €0,54–1,92 | Venta (secundaria, más débil en AR — market split) |
| estrategia de ventas | ES | AR | 100–1.000 | Media | €0,31–1,47 | Venta (secundaria fuerte) |
| consultoría de ventas | (ver 8.1) | — | — | — | — | Venta (secundaria, compartida con Home) |
| automatización de ventas | ES | ES/AR | 10–100 | Baja/Media | — | Venta / Tecnología (secundaria) |
| automatización comercial | ES | ES/AR | 10–100 | **Alta** (ambos mercados) | — | Evitar como target — competencia alta, preferir "automatización de ventas/de procesos" |
| automatización de procesos | ES | ES | 100–1.000 | Media | €1,97–5,71 | Tecnología (secundaria fuerte) |
| automatización de procesos | ES | AR | 100–1.000 | Media | €0,82–3,84 | Tecnología (secundaria fuerte, ambos mercados) |
| organización comercial | ES | AR | 10–100 | Baja | €0,49–6,24 | Terciaria |
| organización de ventas | ES | AR | 10–100 | Baja | — | Terciaria |
| planificación comercial | ES | AR | 10–100 | Media | — | Terciaria |
| planificación de ventas | ES | AR | 10–100 | — | — | Observación (sin señal) |
| productividad comercial | ES | AR | 10–100 | Baja | — | Terciaria |
| productividad de ventas | ES | AR | 10–100 | Baja | — | Terciaria |
| mejorar ventas / optimización de ventas | ES | AR | 10–100 | Alta / — | — | Observación |
| sistema de ventas | ES | AR | 100–1.000 | Media | €0,71–3,41 | Observación — ambiguo (¿software o proceso?) |
| software de ventas | ES | AR | 10–100 | Alta | €0,65–4,66 | Descartada — intención de comprar software |
| implementación crm | ES | ES/AR | 10–100 | Alta | — | Venta (H3 existente) / Tecnología (keyword target real) |
| consultoría crm | ES | ES/AR | 10–100 | Baja | — | Tecnología (mejor competencia que "implementación crm") |
| venta consultiva b2b | ES | ES/AR | 10–100 | Media | €1,08–5,07 (ES) / €0,49–2,05 (AR) | Terciaria (Venta o Preventa) |
| sistema automatizado de ventas | ES | ES | 10–100 | Media | €2,36–7,65 | Descartada — intención de software |

8.3  Preventa / Captación B2B 19 keywords

| Keyword | Idioma | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| prospección b2b | ES | ES | 10–100 | Baja | €2,13–11,08 | Preventa (primaria) |
| prospección b2b | ES | AR | 10–100 | Alta | €1,07–7,05 | Preventa (primaria, más competida en AR) |
| prospección de clientes | ES | ES | 10–100 | Baja | €1,63–8,66 | Preventa (secundaria) |
| prospección de clientes | ES | AR | 10–100 | Baja | €0,57–3,80 | Preventa (secundaria) |
| prospección comercial | ES | ES/AR | 10–100 | Baja/Media | €1,54–13,49 (ES) / €0,81–3,22 (AR) | Preventa (secundaria) |
| prospección de clientes b2b | ES | AR | 10–100 | Alta | — | Terciaria |
| generación de leads b2b | ES | ES | 10–100 | Media | €1,93–7,07 | Preventa (secundaria) |
| generación de leads b2b | ES | AR | 10–100 | Alta | — | Preventa (secundaria) |
| generación de leads | ES | ES/AR | 100–1.000 | Media | €2,38–15,90 (ES) / €0,36–5,46 (AR) | Preventa/Marketing (compartida — diferenciar con "B2B") |
| captación de clientes | ES | AR | 10–100 a 100–1.000 (inconsistente entre corridas) | Media | €0,53–14,04 | Preventa (secundaria, dato a re-chequear) |
| captación de clientes b2b | ES | ES/AR | — | — | — | Observación (sin señal directo, sí como frase compuesta en el contenido) |
| captación de leads | ES | AR | 10–100 a 100–1.000 | Media | €0,66–19,97 | Terciaria |
| leads cualificados | ES | AR | 10–100 | Media | €4,82–15,47 | Observación — CPC alto, volumen bajo |
| leads b2b | ES | AR | 10–100 | Alta | €1,62–11,01 | Terciaria |
| ventas b2b / venta b2b | ES | ES/AR | 100–1.000 | Baja/Media | €0,16–3,26 (ES) / €0,27–1,70 (AR) | Preventa (secundaria de mayor volumen que la propia primaria — evaluar promover) |
| venta consultiva b2b | (ver 8.2) | — | — | — | — | Preventa/Venta (secundaria compartida) |
| desarrollo de negocio b2b | ES | ES | 10–100 | Media | €0,98–4,18 | Terciaria |
| generar leads / generación de clientes | ES | ES/AR | 10–100 | Media (declive) | €2,71–15,97 | Descartada como target — intención muy genérica, mejor para blog |
| cómo conseguir clientes / cómo conseguir clientes b2b | ES | AR | 10–100 | Alta | €1,26–6,91 | Blog (informacional) |

8.4  Posventa / Clientes 20 keywords

| Keyword | Idioma | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| fidelización de clientes | ES | ES | 100–1.000 | Media | €1,54–6,89 | Posventa (primaria) |
| fidelización de clientes | ES | AR | 100–1.000 | Media | €0,57–4,20 | Posventa (primaria, ambos mercados) |
| customer success | ES | ES | 100–1.000 | Baja | €1,36–6,39 | Posventa (secundaria — sin usar hoy, contenido ya la sostiene) |
| customer success | ES | AR | 100–1.000 | Baja | €0,22–0,83 | Posventa (secundaria, ambos mercados) |
| retención de clientes | ES | ES | 10–100 | Baja | €0,99–8,73 | Posventa (secundaria) |
| retención de clientes | ES | AR | 10–100 | Baja | — | Posventa (secundaria) |
| gestión de clientes | ES | ES | 100–1.000 | Media (declive -90%) | €3,18–28,40 | Posventa (terciaria — ambiguo con CRM) |
| gestión de clientes | ES | AR | 10–100 | Media | €1,05–7,18 | Posventa (terciaria, más débil en AR) |
| gestión de cartera de clientes | ES | ES/AR | 10–100 | Baja | — | Posventa (secundaria — calza con "Segmentación de Cartera" ya en contenido) |
| desarrollo de cuentas | ES | ES/AR | — | — | — | Observación (sin señal, pero calza exacto con contenido — mantener en copy, no como target SEO) |
| experiencia del cliente | ES | AR | 100–1.000 | Media | €0,21–1,04 | Terciaria |
| servicio postventa | ES | AR | 100–1.000 | Baja | €0,29–1,92 | Secundaria |
| gestión postventa | ES | AR | — | — | — | Observación (sin señal) |
| seguimiento de clientes | ES | AR | 10–100 | Media | €1,13–9,54 | Terciaria / Blog |
| seguimiento comercial | ES | AR | 10–100 | Media | €0,44–3,64 | Blog (post #6) |
| gestión de relaciones con clientes | ES | AR | 10–100 | Media | €0,45–4,31 | Terciaria — ambiguo con CRM |
| churn | ES | ES/AR | 1.000–10.000 | Baja | €0,04–2,47 (ES) / €0,06–1,70 (AR) | Descartada como target (intención amplia) — vocabulario dentro de la página |
| cross selling | ES | ES/AR | 1.000–10.000 | Baja | €0,02–1,63 (ES) / €0,15–1,51 (AR) | Descartada como target — vocabulario |
| up selling | ES | ES/AR | 100–1.000 | Baja | €0,02–1,31 (ES) / €0,30–4,04 (AR) | Descartada como target — vocabulario |
| satisfacción del cliente | ES | AR | 100–1.000 | Baja (declive -90%) | — | Observación |

8.5  Marketing 19 keywords

| Keyword | Idioma | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| consultoría de marketing | ES | ES | 100–1.000 | Media | €1,78–3,57 | Marketing (candidata a primaria) |
| consultoría de marketing | ES | AR | 10–100 | Media | €0,41–0,85 | Marketing (candidata a primaria, más débil en AR) |
| consultoría de marketing para pymes | ES | AR | 10–100 | Baja | — | Secundaria |
| marketing b2b | ES | ES | 100–1.000 | Media (declive -90%) | €1,60–5,68 | Marketing (secundaria fuerte) |
| marketing b2b | ES | AR | 100–1.000 | Media (declive -90%) | €0,45–2,66 | Marketing (secundaria fuerte, ambos mercados) |
| marketing para pymes | ES | ES | 100–1.000 | Baja | €0,99–4,65 | Marketing (secundaria) |
| marketing para pymes | ES | AR | 10–100 | Media | €0,61–4,07 | Marketing (secundaria) |
| marketing digital para pymes | ES | ES | 100–1.000 | Baja (declive -90%) | €1,96–8,77 | Marketing (secundaria — es el title actual, mantener) |
| marketing digital para pymes | ES | AR | 10–1.000 | Media | €0,69–8,15 | Marketing (secundaria) |
| marketing para empresas | ES | ES | 10–100 | Media | €2,24–11,38 | Terciaria |
| marketing para empresas | ES | AR | 10–100 | Media | €0,85–9,80 | Terciaria |
| marketing digital para empresas | ES | AR | 10–100 | Alta | €0,26–2,96 | Descartada como primaria — competencia alta, poco diferenciador |
| generación de leads | (ver 8.3) | — | — | — | — | Marketing/Preventa (compartida) |
| agencia de marketing digital para pymes | ES | ES/AR | 10–100 (declive -100%) | — | — | Marketing (frase de meta, sin señal fuerte propia — corregido 30/8) |
| agencia de marketing | ES | ES/AR | 1.000–10.000 | Media | €1,63–5,50 (ES) / €0,79–3,84 (AR) | Marketing (secundaria fuerte — corregido 30/8: Mariano ejecuta él mismo, mayor volumen del cluster) |
| estrategia de marketing | ES | ES | 1.000–10.000 | Baja | €1,29–5,36 | Descartada como target (demasiado amplia) — usar en blog |
| estrategia de marketing | ES | AR | 100–1.000 | Media | €0,43–2,19 | Blog |
| marketing y ventas | ES | AR | 100–1.000 | Media (declive -90%) | €0,33–2,34 | Terciaria |
| marketing empresarial | ES | AR | 10–100 | Media | €0,53–2,40 | Terciaria |

8.6  Tecnología / CRM / IA 26 keywords

| Keyword | Idioma | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| crm para empresas | ES | ES | 100–1.000 | Media | €4,23–28,27 | Tecnología (primaria) |
| crm para empresas | ES | AR | 10–100 | Media | €2,23–9,78 | Tecnología (primaria, algo más débil en AR) |
| ia para empresas | ES | ES | 100–1.000 | Media | €3,44–12,07 | Tecnología (primaria) |
| ia para empresas | ES | AR | 10–100 | Alta | €1,64–7,13 | Tecnología (primaria, más competida en AR) |
| inteligencia artificial para empresas | ES | AR | 100–1.000 | Media (declive -90%) | €4,31–13,76 | Tecnología (secundaria fuerte) |
| inteligencia artificial en empresas | ES | AR | 100–1.000 | Media | €2,78–7,31 | Tecnología (secundaria) |
| ia empresarial | ES | AR | 10–100 | Media | €2,03–5,97 | Terciaria |
| ia en los negocios / ia en empresas | ES | AR | 10–100 | Alta/Baja | €2,88–10,05 / €3,29–7,88 | Terciaria |
| agentes de ia para empresas | ES | ES | 10–100 | Media | €3,70–14,49 | Tecnología (secundaria — calza con módulo "Agentes de IA") |
| agentes de ia para empresas | ES | AR | 10–100 | Alta | €1,45–10,86 | Tecnología (secundaria) |
| automatización de procesos | (ver 8.2) | — | — | — | — | Tecnología (secundaria fuerte, compartida con Venta) |
| automatización comercial | (ver 8.2) | — | — | — | — | Evitar — competencia Alta ambos mercados |
| automatización de ventas | (ver 8.2) | — | — | — | — | Tecnología/Venta (secundaria, mejor competencia) |
| implementación crm | (ver 8.2) | — | — | — | — | Tecnología (secundaria) |
| consultoría crm | (ver 8.2) | — | — | — | — | Tecnología (secundaria — mejor competencia del cluster CRM) |
| crm para pymes / crm pymes / crm para pyme | ES | AR | 100–1.000 | Media | €3,94–34,58 | Tecnología (terciaria — volumen bueno, pero compite con directorios comparativos de software) |
| crm para empresas de servicios | ES | AR | 10–100 | Alta | — | Terciaria |
| crm para empresas b2b | ES | AR | 10–100 | Alta (pico) | — | Terciaria |
| crm para pequeñas empresas / empresas pequeñas | ES | AR | 10–100 | Alta | €1,85–13,53 | Terciaria |
| soluciones crm para empresas | ES | AR | 10–100 | Baja | — | Terciaria (mejor competencia que variantes "para pymes") |
| crm gestión comercial | ES | AR | 10–100 | Baja | — | Terciaria |
| crm gestión de clientes | ES | AR | 10–1.000 | Media | €2,55–46,98 | Observación — CPC muy alto, revisar si vale la pena como terciaria |
| implementar crm en una empresa | ES | AR | 10–100 | Alta | €1,09–9,34 | Blog (informacional, alimenta a Tecnología) |
| software crm para pymes | ES | AR | 10–100 | Media | — | Descartada como target — intención de compra de software |
| crm para [inmobiliarias/clínicas/aseguradoras/bancos/logística/hostelería/concesionarios/…] | ES | AR | 10–100 en general | Alta en la mayoría | variable | Descartadas — verticales sin foco declarado |
| salesforce / zoho / hubspot / microsoft dynamics / bitrix24 (variantes "qué es", "para qué sirve", "gratis", "opiniones", "que hace", "plataforma") | ES | AR | variable, algunas 1.000–10.000 (ej. "salesforce que es") | variable | variable | Descartadas en bloque — intención de comprador/evaluador de software de marca específica |

8.7  Bloques descartados en lote (por volumen de variantes) 9 bloques, ~830 variantes

| Bloque | Variantes aprox. | Ejemplos representativos | Motivo |
| --- | --- | --- | --- |
| Retail/e-commerce: "estrategia de venta/marketing de [producto/marca/canal]" | ~350 | estrategia de venta de ropa, de zapatos, de un restaurante, de Coca-Cola/Apple/Starbucks/Zara/Nike, control de stock y ventas, software de inventario, Black Friday, venta omnicanal Liverpool | Modelo de negocio B2C retail/e-commerce, no es el cliente de Basecore |
| CRM software — variantes de marca y "qué es/gratis/para qué sirve" | ~180 | salesforce que es, zoho para que sirve, hubspot es gratis, crm gratis para pymes, sistema crm sap, cuadrante de gartner | Intención de comprador/evaluador de herramienta, no de consultoría |
| CRM por vertical/sector | ~50 | crm para inmobiliarias, clínicas, aseguradoras, bancos, logística, farmacéutica, hostelería, concesionarios, distribuidores | Sin foco sectorial declarado por Basecore hoy |
| Fidelización B2C / marcas de consumo | ~40 | fidelización Orange/Yoigo/MasMovil/Amazon/Starbucks/Coca-Cola, programas de puntos, tarjetas de fidelidad | Consumidor final / telecomunicaciones / retail de marca |
| Fidelización/retención de personal (RR.HH.) | ~10 | fidelización de empleados, fidelización laboral, retener trabajadores | Tema de RR.HH., homónimo de fidelización de clientes |
| Académico/formativo | ~15 | administración de ventas PDF, UF0349, UF0350, MF1000\_3, SEPE, comt0411, "según autores" | Intención de estudiar, no de contratar |
| Marcas/consultoras de terceros | ~25 | Aztec, Bastis, CBRE, CE, CEO, GPF, GSN, ICEC, JJJ, JS, KHA, Logs, Optimum, PGA, SOI, SOLMG, Vértice — todas "consultores/consultoría empresarial" | Búsquedas navegacionales a negocios ajenos concretos |
| Ecosistema de agencia de marketing digital (ejecución) | ~120 | SEO/SEM como servicio, email marketing, marketing de influencers, gestión de redes sociales, diseño gráfico, campañas Google Ads, marketing para [rubro específico] | Ya no se descarta en bloque (corregido 30/8: Mariano confirmó que ejecuta estos canales él mismo, coincide con el código real de `/marketing`). Las variantes genéricas quedan como oportunidad de secundaria/blog; las de rubro específico (gimnasios, veterinarias, etc.) siguen fuera de foco, mismo criterio que los verticales de CRM. |
| Ciclo/etapas de venta genérico + "pasos de la venta" | ~40 | 5/6/7/8 pasos de la venta, AIDA, ciclo de venta ejemplo/PDF | Intención puramente informacional/educativa sin ángulo B2B propio — se prioriza el blog ya definido |

**Nota metodológica:** ninguna keyword individual fue descartada por tener bajo volumen (0–100) o por parecer duplicada de otra — las tablas 8.1 a 8.6 conservan intactas todas las variantes con relevancia real de negocio, incluidas las de menor volumen ("desarrollo de cuentas", "gestión de cartera de clientes", "consultoría fuerza de ventas" quedan registradas como "Observación" en vez de eliminadas). El descarte en bloque de 8.7 aplica exclusivamente a variantes que caen fuera de categoría de negocio (retail, software de terceros, RR.HH., académico, marcas ajenas) — no a keywords de bajo volumen dentro del negocio real de Basecore.

09

## Inglés — validación completa (30/8)

Mariano corrió el mismo research en Keyword Planner para las 6 páginas pendientes, en inglés, filtrando por idioma en España y Argentina. ~3.100 keywords extraídas, ~1.488 términos distintos analizados.

1

#### El volumen en inglés es dramáticamente más bajo que en español

El 95%+ de las keywords cae en 0–10 o 0–100 en Home, Preventa, Venta, Posventa y Marketing. Confirma que el sitio en inglés sigue siendo prioridad secundaria frente al español.

2

#### Tecnología vuelve a ser el cluster más fuerte, también en inglés

"ai for businesses" llega a 100–1.000 (Media, España, CPC €3,57–11,65) — la mejor keyword individual de todo el research en inglés fuera del cluster de software genérico. Nunca había tenido keyword propia en inglés.

3

#### A diferencia del español, España y Argentina no se dividen en inglés

Los volúmenes y la competencia son casi idénticos entre los dos mercados para la enorme mayoría de los términos. La brecha real en inglés es de idioma, no de país — no hace falta pensar "¿se sostiene en ambos mercados?" como sí hace falta en español.

4

#### Home, Venta y Posventa tenían señal nula — resuelto para dos de las tres (30/8)

Sus primarias vigentes en inglés tenían señal prácticamente nula (0–10) en los dos mercados — mismo patrón que en español. Una segunda pasada corta de Keyword Planner (30/8) confirmó reemplazos reales para Venta ("commercial management", 10–100 ambos mercados) y Posventa ("customer success", 100–1.000 ambos mercados, idénticos números que en español). Home se mantiene sin reemplazo — "commercial consulting for small business" queda como frase de marca, igual que su equivalente en español.

5

#### "Appointment setting" es el hallazgo accionable más fuerte

100–1.000, Media, España (CPC €0,96–4,94) — bastante más volumen que la propia primaria vigente de Preventa ("B2B lead generation for small business", 0–100 sin dato de competencia). Encaja directo con el contenido ya existente de la página.

### Ruido específico de inglés

Dos tipos de ruido que casi no aparecían en español: **"quiero abrir mi propia consultora"** (starting your own consulting business, ~20 variantes — error de categoría, Google confunde "contratar consultoría" con "montar una consultora") y **vocabulario administrativo de EE.UU.** (sba consultant, sbdc consultant — programas de la Small Business Administration, sin equivalente en España/Argentina).

### Mapa de keywords en inglés revisado, por página

| Página | Primaria vigente (sin datos) | Con datos reales | Nota |
| --- | --- | --- | --- |
| Home | commercial consulting for small business | Sin señal (0–10) — mantener como frase de marca. Secundaria con más señal real: **business consulting for small business** (10–100, Media). | Mismo patrón que "consultoría comercial para pymes" en español. |
| Preventa | B2B lead generation for small business | Señal débil (0–100). Candidata fuerte: **appointment setting** (100–1.000, Media, España). Secundaria: lead qualification (CPC alto, €5,58–17,88). | Nuevo cluster de blog: BANT/MEDDIC/qualified leads. |
| Venta | sales process consulting for small business | Sin señal (0–10) en ningún mercado. **Reemplazo validado 30/8: "commercial management"** (10–100, Baja/Media, ambos mercados) — mismo equivalente en inglés que "gestión comercial" en español. Secundarias con señal: sales pipeline management · sales KPIs · CRM implementation consulting. | "Pipeline crm" (100–1.000, España) es intención de software — mejor destino Tecnología, no Venta. |
| Posventa | customer retention consulting for small business | Sin señal (0–10). **Reemplazo validado 30/8: "customer success"** (100–1.000, Baja, ambos mercados — números idénticos a la versión en español, es la misma frase). Secundaria con señal: account development (10–100, Baja, ambos mercados). | Ganancia gratis, igual que en español: el contenido ya usa "Customer Success Manager/Rep". |
| Marketing | marketing consulting for small business | Señal débil pero real (10–100, ambos mercados) — se mantiene como una de las primarias. Secundarias: branding for small business · **web design for small business** · **seo and social media agency**. | Corregido 30/8: Mariano confirmó que ejecuta él mismo (sitios web, SEO, redes) — estas keywords de ejecución ya no se descartan, mismo criterio que "agencia de marketing" en español. |
| Tecnología | *(nunca tuvo mapa direccional en EN)* | Primaria: **ai for businesses** (100–1.000, Media, España). Secundarias: crm consulting · business process automation · ai agents for businesses · artificial intelligence in business. | El cluster más fuerte de todo el research en inglés. |

### Canibalizaciones en inglés

| Conflicto | Páginas | Resolución propuesta |
| --- | --- | --- |
| CRM / software de gestión | /en/sales ("CRM implementation consulting") vs. /en/tecnologia (dueña de "CRM consulting"/"ai for businesses") | Igual que en español: Tecnología pasa a ser la página dueña de CRM/IA; Venta mantiene su contenido de implementación como apoyo. |
| "Pipeline crm" / "pipe crm" | /en/sales (proceso) vs. intención real de herramienta/software | No perseguir en Venta — mismo criterio que "sistema de ventas" en español. |
| Lead qualification / qualified leads | /en/presales vs. futuro blog en inglés | Sinergia si el blog apunta a la definición (BANT, MEDDIC) y la página al servicio. |

### Keywords descartadas en inglés, por categoría

| Categoría | Ejemplos | Motivo | Aprox. |
| --- | --- | --- | --- |
| Marcas/vendors de software | salesforce essentials, zoho bigin, crm software zoho, hubspot, pipedrive, sap/ibm business automation | Intención de comprador de una marca puntual | ~155 |
| Búsquedas "near me" | small business consultant near me, business advisor near me | Basecore es remoto/consultivo | ~42 |
| Vertical financiero sin foco | ai in finance, ai and finance, financial consulting services | Sin especialización declarada | ~26 |
| Vertical inmobiliario sin foco | crm system for real estate, real estate agent crm software | Sin especialización declarada | ~26 |
| "Quiero abrir mi propia consultora" | starting your own consulting business, start your own it consulting business | Error de categoría — no buscan contratar | ~20 |
| Perfil de empresa fuera de rango | women owned consulting firms, non profit small business consulting | Perfil distinto al target de Basecore | ~16 |
| Vocabulario gubernamental de EE.UU. | sba consultant, sbdc consultant | Sin equivalente en España/Argentina | ~10 |
| Deriva a asesoría legal (bloque Contacto) | free legal advice for small business | No es consultoría comercial | ~8 |

### Oportunidades nuevas detectadas solo en inglés

1. "Appointment setting" en Preventa — no estaba en el mapa direccional y es el hallazgo con más volumen del cluster de captación en inglés.
2. "AI for businesses" como primaria de Tecnología en inglés — la página nunca tuvo keyword asignada en este idioma.
3. El vacío de reemplazo para Venta y Posventa en inglés — **resuelto 30/8** con una segunda pasada corta: "commercial management" (Venta) y "customer success" (Posventa), ambas con volumen real en los dos mercados.
4. Dos temas nuevos de blog en inglés que hoy no existen ni en la versión en español del plan 3.4: un post sobre el marco BANT/MEDDIC, y una versión en inglés de "qué CRM elegir" apalancada en "customer relation management software"/"crm software zoho" (1.000–10.000, el volumen más alto de todo el dataset en inglés).

9.1–9.6  Apéndice completo — todas las keywords en inglés extraídas ~1.488 términos, 6 páginas

Home, Preventa, Venta, Posventa, Marketing y Tecnología, España + Argentina — sin omitir ninguna por bajo volumen. Mismo criterio de decisión que el mapa en español (Primaria/Secundaria/Terciaria/Observación/Descartada/Blog). Dataset completo y scripts de parseo en el research de respaldo; se listan acá los términos con relevancia real de negocio página por página.

| Keyword | Página | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- | --- |
| commercial consulting for small business | Home | ES/AR | 0–10 | — | — | Home (frase de marca, sin señal) |
| business consulting for small business | Home | ES | 10–100 | Media | — | Home (secundaria — más señal que la primaria) |
| business consulting for small business | Home | AR | 10–100 | — | — | Home (secundaria) |
| sales process consulting for smb | Home | ES/AR | 0–10 | — | — | Descartada como target — sin señal |
| business advisor near me | Home | ES/AR | 10–100 | — | — | Descartada — intención local ("near me") |
| business development consulting / business development advisor | Home | ES/AR | 10–100 | Baja/Media | — | Terciaria (informacional) |
| ~100 variantes más (small business advisor/consultant + calificador: near me, cost, packages, industry...) | Home | ES/AR | 0–10 a 10–100 | mayormente sin dato | — | Descartadas en bloque — long-tail sin señal medible |
| appointment setting | Preventa | ES | 100–1.000 | Media | €0,96–4,94 | Preventa (candidata a primaria/secundaria fuerte) |
| appointment setting | Preventa | AR | 10–100 | Baja | €0,27–1,92 | Preventa (candidata a primaria/secundaria fuerte) |
| b2b lead generation for small business | Preventa | ES/AR | 0–100 | — | — | Preventa (primaria vigente, señal débil) |
| lead qualification | Preventa | ES | 10–100 | Media | €5,58–17,88 | Preventa (secundaria — CPC alto, valor comercial real) |
| lead qualification | Preventa | AR | 10–100 | Baja | €0,76–2,18 | Preventa (secundaria) |
| b2b prospecting consultant | Preventa | ES/AR | 0–10 | — | — | Descartada como target — sin señal, conservar como vocabulario |
| bant for sales / bant qualification / meddic qualification | Preventa | ES | 10–100 | Baja | €0,07–4,52 | Blog (marco BANT/MEDDIC) |
| leads qualified / qualified leads | Preventa | ES | 10–100 | Media | €5,58–17,88 | Blog / Terciaria — CPC alto |
| leads qualified / qualified leads | Preventa | AR | 10–100 | Baja | €0,76–2,18 | Blog / Terciaria |
| marketing qualified lead / sales qualified lead | Preventa | ES/AR | 10–100 | Baja/Media | — | Blog |
| sales process consulting for small business | Venta | ES/AR | 0–10 | — | — | Descartada — sin señal, reemplazada |
| commercial management | Venta | ES | 10–100 | Baja | sin dato | **Venta (primaria — validado 30/8)** |
| commercial management | Venta | AR | 10–100 | Media | sin dato | **Venta (primaria — validado 30/8)** |
| business management for small business | Venta | ES | 10–100 | Baja | sin dato | Observación — no supera a "commercial management" |
| business management for small business | Venta | AR | 10–100 (declive -100%) | sin dato | — | Descartada — sin señal real en Argentina |
| sales pipeline management | Venta | ES/AR | 10–100 | Baja | €1,53–12,59 (ES) | Venta (secundaria) |
| sales kpis | Venta | ES/AR | 10–100 | Baja/Media | — | Venta (secundaria) |
| crm implementation consulting | Venta | ES/AR | 10–100 | — | — | Venta (secundaria) |
| sales forecasting for smb | Venta | ES/AR | 0–10 | — | — | Descartada como target — sin señal |
| pipeline crm / pipe crm | Venta | ES | 100–1.000 | Media | €3,33–28,60 | Observación — intención de software, mejor destino Tecnología |
| pipeline crm / pipe crm | Venta | AR | 10–100 | Media | €1,19–6,49 | Observación |
| sales kpi definition/meaning/examples | Venta | ES/AR | 10–100 | Baja | — | Blog (definiciones) |
| customer retention consulting for small business | Posventa | ES/AR | 0–10 | — | — | Posventa (primaria vigente, sin señal — se mantiene como frase de marca) |
| customer success | Posventa | ES | 100–1.000 | Baja | €1,36–6,39 | **Posventa (secundaria fuerte — validado 30/8)** |
| customer success | Posventa | AR | 100–1.000 | Baja | €0,22–0,83 | **Posventa (secundaria fuerte — validado 30/8)** |
| account development | Posventa | ES/AR | 10–100 | Baja | — | Posventa (secundaria con señal — antes "Observación" en español) |
| reduce customer churn b2b / cross selling and up selling strategy | Posventa | ES/AR | 0–10 | — | — | Descartada como target — vocabulario |
| upsell y cross sell | Posventa | ES | 100–1.000 | Baja | €0,01–0,21 | Observación — término mixto ES/EN, poco fiable |
| cross sell & up sell (y ~6 variantes) | Posventa | ES/AR | 10–100 | Baja/Media | €0,01–6,52 | Descartadas como target — vocabulario de contenido |
| marketing consulting for small business | Marketing | ES/AR | 10–100 | — | — | Marketing (primaria, mejor disponible) |
| branding for small business | Marketing | ES/AR | 10–100 | Media | — | Marketing (secundaria — asesoría, no ejecución) |
| web design for small business | Marketing | ES/AR | 10–100 | Baja | — | Marketing (secundaria — corregido 30/8, Mariano sí ejecuta) |
| seo and social media agency | Marketing | ES/AR | 0–10 | — | — | Marketing (secundaria de baja señal — corregido 30/8, ya no descartada por modelo de negocio) |
| website/web design for small business (~10 variantes: affordable, cheap, redesign, developers, packages...) | Marketing | ES/AR | 10–100 | Baja | — | Marketing (terciaria/oportunidad de contenido — corregido 30/8) |
| branding agency for small business / branding companies / small branding | Marketing | ES | 10–100 | Baja/Media | — | Marketing (terciaria — corregido 30/8, branding es parte del pilar "Diseño Gráfico") |
| ai for businesses | Tecnología | ES | 100–1.000 | Media | €3,57–11,65 | Tecnología (primaria) |
| ai for businesses | Tecnología | AR | 10–100 | Media | €0,69–5,95 | Tecnología (primaria) |
| crm consulting | Tecnología | ES/AR | 10–100 | Baja | — | Tecnología (secundaria — mejor competencia del cluster CRM) |
| ai agents for businesses | Tecnología | ES/AR | 10–100 | Media | — | Tecnología (secundaria — calza con módulo "AI Agents") |
| business process automation / process automation | Tecnología | ES | 10–100 | Baja | — | Tecnología (secundaria) |
| business process automation | Tecnología | AR | 10–100 | Alta | €0,58–4,26 | Tecnología (secundaria, más competida en AR) |
| artificial intelligence in business | Tecnología | ES/AR | 10–100 | Media | €0,69–5,95 | Tecnología (secundaria) |
| customer relation management software / crm software zoho / crm system zoho | Tecnología | ES/AR | 1.000–10.000 | Baja/Media | €0,74–6,89 | Observación/Descartada — volumen más alto del dataset EN, pero intención de compra de software (Zoho = marca puntual). Buen tema de Blog. |
| ai agency | Tecnología | ES/AR | 100–1.000 | Media | €0,55–3,67 | Terciaria — busca proveedor de IA, no asesor |
| chatgpt businesses | Tecnología | ES/AR | 100–1.000 | Media | €0,91–8,47 | Blog |
| power bi ai | Tecnología | ES/AR | 100–1.000 | Media | €0,41–3,36 | Descartada — herramienta específica (Power BI) |
| ai and finance / ai in finance | Tecnología | ES/AR | 100–1.000 | Media | €0,67–10,36 | Descartada — vertical financiero sin foco |
| crm system for real estate (y variantes) | Tecnología | ES/AR | 10–100 | Baja | — | Descartadas — vertical inmobiliario sin foco |
| salesforce essentials / zoho bigin / bigin crm / ibm baw / sap business process automation | Tecnología | ES/AR | 10–100 | Baja/Media | variable | Descartadas — marca puntual |
| best crm for small business (y ~4 variantes) | Tecnología | ES/AR | 10–100 | Baja | €1,13–8,31 | Observación / Blog — comparativa de software |

**Decisiones de esta sección — Fase 3.5 en inglés cerrada del todo (30/8):** (1) Segunda pasada corta de Keyword Planner corrida y confirmada — "commercial management" reemplaza la primaria de Venta y "customer success" se suma como secundaria fuerte de Posventa, ambas con volumen real en España y Argentina. (2) "Appointment setting" promovido a keyword con protagonismo real en title/H1/meta de /en/presales. (3) "Web design for small business" y "seo and social media agency" **no** se descartan: Mariano confirmó que ejecuta esos servicios él mismo, coincide con el código real de `/marketing` (ver la corrección de Marketing más arriba).

10

## Contacto y E-Book — copy pendiente de aprobación

Keyword Planner no arrojó volumen aprovechable para estas dos páginas en ningún idioma o mercado — esperable, son páginas de CTA/lead magnet, no de posicionamiento genérico. En su lugar, se investigó qué frases usa la competencia y qué convierte mejor en este tipo de formulario.

**Decidido 30/8:** Contacto queda sin cambios en ambos idiomas. En /ebook y /en/ebook se implementa la Opción A (nuevo H1, botón de descarga sin cambios) — ver detalle marcado abajo. El cajón de e-book en el Home queda sin tocar por ahora, no formó parte de este research.

### Estado actual en el sitio

| Página | Idioma | H1/Título | CTA |
| --- | --- | --- | --- |
| Contacto | ES | Diagnóstico Gratuito | PROGRAMAR REUNIÓN / ENVIAR MENSAJE |
| Contacto | EN | Free Diagnostic | BOOK MEETING / SEND MESSAGE |
| E-Book | ES | Primeros pasos para un proceso comercial efectivo. | DESCARGAR |
| E-Book | EN | First steps to an effective sales process. | DOWNLOAD |

### Qué dice la competencia y las buenas prácticas (research 30/8)

* **Back In Town** (competencia directa, España): CTA principal "Solicitar diagnóstico gratuito", variantes en primera persona: "Quiero ventas más previsibles", "Quiero mi diagnóstico".
* **Resultae** (competencia directa, España): CTA de baja fricción "¿Hablamos?", con reductor de riesgo explícito "sin compromiso".
* **Consultingsuccess.com** (guía de landing pages para consultores, EN): un genérico "contact me for a free consultation" no convierte solo — hay que nombrar el beneficio específico.
* Consultoras B2B en inglés (A Sales Growth Company, TheSchuck.Agency, SellMeWell) usan "free sales audit/assessment" + "book a call" como estándar.
* Dato propio de Keyword Planner: "free business consultation" tiene más señal real que "free sales consultation" (la primaria vigente en inglés) en los dos mercados.
* Para e-books: título orientado a beneficio futuro, botón que nombra la acción y dice "gratis/free" explícitamente, y CTA en primera persona ("Get my guide") — todo esto suma persuasión medible según la literatura revisada.

### Contacto — opciones

| Idioma | Opción | H1 | CTA | Por qué |
| --- | --- | --- | --- | --- |
| ES | A | Diagnóstico comercial gratuito, sin compromiso | Quiero mi diagnóstico | Combina lo que ya usa Basecore + validado por competencia, con el reductor de riesgo de Resultae y el CTA en primera persona de Back In Town. Cambio mínimo. |
| ES | B | ¿Hablamos de tu proceso comercial? | Agendar una reunión | Tono conversacional de Resultae, más bajo en fricción que un CTA formal. |
| ES | C | Pedí tu diagnóstico comercial gratuito (voseo) | Quiero mi diagnóstico | Igual que A pero en voseo — solo relevante si se quiere tono rioplatense por defecto (ver pregunta de tono). |
| EN | A | Get your free sales diagnostic | Book my diagnostic | Mantiene "diagnostic" (más peso de marca que "consultation"), suma primera persona al botón. |
| EN | B | Free business diagnostic. No strings attached. | Book a call | "No strings attached" = equivalente idiomático de "sin compromiso"; "book a call" es la frase más citada de alta conversión en CTAs B2B. "Business" tiene mejor señal en KWP que "sales". |
| EN | C | Let's talk about your sales process | Schedule a call | Espejo en inglés de la opción B en español — mismo tono consultivo. |

### E-Book — opciones

| Idioma | Opción | H1 | CTA | Por qué |
| --- | --- | --- | --- | --- |
| ES | A — Elegida 30/8 | Guía gratis: cómo armar tu proceso de ventas desde cero | — | Mantiene casi textual la frase ya validada por competencia, nombra el formato y dice "gratis" explícitamente. |
| ES | B | El proceso de ventas que le falta a tu pyme | Quiero el e-book | Más provocador — nombra a la audiencia y plantea el e-book como solución a algo que falta. |
| ES | C | *(sin cambios)* | Quiero mi e-book gratis | Cambio mínimo: no toca el H1, suma primera persona + "gratis" al CTA, donde la literatura ubica el mayor impacto de bajo esfuerzo. |
| EN | A — Elegida 30/8 | Free guide: how to build a sales process from scratch | — | Espejo de la opción A en español, usa la frase semilla ya presente en el sitio. |
| EN | B | The sales process your small business is missing | Get the e-book | Espejo de la opción B en español — "Get the ebook" es de los CTA de alta conversión citados en la investigación. |
| EN | C | *(sin cambios)* | Get my free e-book | Cambio mínimo — primera persona + "free" en el CTA. |

9.7  Apéndice — Contacto y E-Book, ambos idiomas sin volumen aprovechable, como se esperaba

| Keyword | Página | Idioma | Mercado | Volumen | Decisión |
| --- | --- | --- | --- | --- | --- |
| diagnóstico comercial gratuito | Contacto | ES | ES/AR | 0–10 / sin dato | Contacto (CTA de marca, sin cambios de keyword) |
| consultoría de ventas primera reunión / asesoría comercial pyme contacto | Contacto | ES | ES/AR | 0–10 / sin dato | Contacto (secundaria de marca) |
| free sales consultation | Contacto | EN | ES/AR | sin dato / 0–10 | Contacto (primaria vigente, sin señal) |
| free business consultation | Contacto | EN | ES | 10–100 | Contacto (más señal que la primaria vigente) |
| free business consultation | Contacto | EN | AR | 0–100 | Contacto |
| book a sales strategy call | Contacto | EN | ES/AR | sin dato | Contacto (secundaria) |
| free legal advice for small business (y variantes) | Contacto | EN | ES/AR | 0–100 | Descartadas — deriva a asesoría legal, no comercial |
| cómo armar un proceso de ventas desde cero | E-Book | ES | ES/AR | 0–10 | E-Book (título vigente, validado por SERP) |
| guía proceso de ventas pyme / proceso comercial efectivo pyme | E-Book | ES | ES/AR | 0–10 | E-Book (secundarias) |
| how to build a sales process from scratch | E-Book | EN | AR | sin dato | E-Book (título vigente) |
| sales process guide for small business | E-Book | EN | AR | sin dato | E-Book (secundaria) |

**Nota:** se detectó "seo and social media agency" dentro del bloque de Contacto en inglés (España) — probablemente arrastre de sesión en Google Ads desde la búsqueda de Marketing, no un dato real sobre Contacto. No se le da peso.

11

## BaseHub — validación completa (3/9)

`/basehub` y `/en/basehub` se mergearon a producción el 1/9 con title/meta/H1 escritos "a ojo" (la frase más natural disponible), sin pasar por Keyword Planner como sí pasaron las otras 7 páginas de servicio (Fase 3.1/3.5). Esta sección cierra ese gap (Fase 7.3 del plan SEO) e incorpora BaseHub al mapa como noveno pilar (Fase 7.4). Investigado por Mariano directamente en Keyword Planner, España + Argentina, ES y EN — mismo método que el resto del research.

**Resultado: el copy vigente ya está bien encaminado, no hace falta reescribir title/H1/meta.** La primaria ya usada ("gestión de proyectos" / "project management") tiene volumen real confirmado en los dos mercados y los dos idiomas, y la secundaria ya usada en la meta description ("herramienta de gestión de proyectos") también valida. El hallazgo de fondo no es un error de copy — es una keyword con mejor número que la primaria que hoy no se está usando en ningún lado del sitio: **"PMO"**.

1

#### "PMO" es el mejor número de todo este research — pero como ángulo de blog, no de página

1.000–10.000 de volumen con competencia **Baja** en España *y* en Argentina — ningún otro término de BaseHub, ni de ningún otro cluster ya cerrado del sitio, tiene esa combinación en los dos mercados a la vez. Pero la intención detrás de "PMO" está mezclada: una parte busca software/consultoría de PMO, otra busca certificación (PMBOK, CAPM, PMI) — no es un target limpio para title/H1. Encaja mejor como **ángulo de blog**, y de hecho ya estaba flotando como idea en la Fase 7.8 del plan SEO ("por qué no pagar un PMO aparte") antes de tener el dato que lo respalda.

2

#### "software de gestión de proyectos" / "project management software" — intención contaminada por compradores de herramienta suelta

Volumen decente en superficie (100–1.000 / 1.000–10.000), pero las ideas relacionadas que devolvió Keyword Planner están dominadas por comparación de herramientas de venta directa: jira, asana, clickup, monday, trello, "gratis", "pricing". BaseHub no se vende suelto — es un portal de seguimiento incluido en la consultoría (confirmado en el código: `ServiceJsonLd`, no `SoftwareApplication`). Alguien buscando esto está evaluando reemplazar Monday, no contratar a Base Core. En español además pierde fuerza en Argentina (10–100, competencia Alta). Se recomienda no usarlo como ancla en ningún idioma.

3

#### "portal de clientes" tiene volumen real, pero está contaminado por búsquedas de marca ajena — a diferencia de "client portal" en inglés

100–1.000 en ambos mercados parece atractivo, pero las ideas relacionadas revelan el problema: "onvio portal clientes", "portal clientes coca cola", "grupo castilla portal clientes", "a3hrgo portal empleado", "endesa portal" — gente buscando el login de un proveedor específico, no una herramienta genérica de portal de cliente. Se descarta como target en español. La versión en inglés ("client portal") no tiene ese problema — sus ideas relacionadas ("client portal software", "crm with client portal", "customer care portal") sí describen intención genérica de herramienta — se mantiene como secundaria válida solo en EN.

### Mapa validado — Español (España + Argentina)

| Keyword | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- |
| gestión de proyectos | ES | 1.000–10.000 | Media | €2,07–6,16 | BaseHub (primaria — confirma el title/eyebrow vigente) |
| gestión de proyectos | AR | 100–1.000 | Media | €0,28–1,70 | BaseHub (primaria, algo más débil en AR pero se sostiene) |
| herramienta de gestión de proyectos | ES | 100–1.000 | Media | €1,14–5,76 | BaseHub (secundaria — ya vive en la meta description vigente) |
| herramienta de gestión de proyectos | AR | 100–1.000 | Media | €0,80–4,68 | BaseHub (secundaria, ambos mercados) |
| pmo | ES | 1.000–10.000 | Baja | €0,97–4,83 | Mejor volumen/competencia de todo el research — blog, ver Fase 7.8 |
| pmo | AR | 1.000–10.000 | Baja | €0,25–2,51 | Mismo patrón en AR — blog, ver Fase 7.8 |
| seguimiento de proyectos | ES | 10–100 | Baja | €2,72–7,88 | BaseHub (terciaria — volumen bajo, intención exacta) |
| seguimiento de proyectos | AR | 10–100 | Media | €0,49–4,88 | BaseHub (terciaria) |
| software de gestión de proyectos | ES | 100–1.000 | Media | €1,97–10,23 | Evitar como ancla — intención de comparar/comprar herramienta standalone |
| software de gestión de proyectos | AR | 10–100 | Alta | €0,59–2,96 | Evitar como ancla — más débil y más competido en AR |
| portal de clientes | ES | 100–1.000 | Baja | €3,02–6,47 | Descartada como target — contaminada por portales de marca ajena (onvio, Coca-Cola, Endesa, Grupo Castilla, a3hrgo) |
| portal de clientes | AR | 100–1.000 | Media | €0,30–1,31 | Descartada — mismo motivo |
| tablero de mando | ES | 10–100 | Baja | sin dato | Observación — deriva a BI/balanced scorecard; se mantiene solo como eyebrow de sección |
| tablero de mando | AR | 10–100 | Baja | €0,41–3,68 | Observación — mismo motivo |
| seguimiento de implementación | ES/AR | sin dato | — | — | Sin dato en Keyword Planner — se mantiene como vocabulario natural, no como target SEO |

### Mapa validado — Inglés (España + Argentina)

| Keyword | Mercado | Volumen | Competencia | CPC | Decisión |
| --- | --- | --- | --- | --- | --- |
| project management | ES | 1.000–10.000 | Baja | €2,56–7,35 | BaseHub (primaria — confirma el title vigente) |
| project management | AR | 1.000–10.000 | Media | €0,33–1,70 | BaseHub (primaria, ambos mercados) |
| project tracking | ES | 100–1.000 | Baja | €2,31–9,33 | BaseHub (secundaria — coincide con el valor real del producto) |
| project tracking | AR | 10–100 | Media | €1,29–6,15 | BaseHub (secundaria) |
| client portal | ES | 10–100 | Baja | €1,91–6,47 | BaseHub (secundaria — sin la contaminación de marca que sí tiene "portal de clientes" en español) |
| client portal | AR | 10–100 | Baja | sin dato | BaseHub (secundaria) |
| project management software | ES | 1.000–10.000 | Baja | €3,89–11,94 | Evitar como ancla — ideas relacionadas dominadas por comparación de herramientas (jira, asana, clickup, monday, trello); el crecimiento +900% es artefacto de base baja |
| project management software | AR | 1.000–10.000 | Baja | €0,57–3,78 | Evitar como ancla — mismo motivo |
| project management tool | ES | 10–100 | Alta | €3,79–16,40 | Evitar como ancla — volumen bajo y competencia Alta |
| project management tool | AR | 10–100 | Media | sin dato | Evitar como ancla — volumen bajo |
| implementation tracking | ES/AR | 10–100 | Baja | sin dato | Sin dato aprovechable — se mantiene como vocabulario natural, no como target SEO |

**Qué NO cambia en el código:** title, meta description, H1 y eyebrows de `/basehub` y `/en/basehub` quedan tal cual están — ya usan la primaria y secundaria validadas. La única acción que sale de esta validación es de contenido, no de metadatos: evaluar el post de blog sobre PMO (Fase 7.8), que ahora tiene el mejor dato de todo este research detrás.

### Por dónde seguir

**Fase 3.5 cerrada del todo el 30/8.** Este documento no modifica el sitio ni el plan SEO vigente — es insumo ya decidido, pendiente de implementar. Quedaron resueltas: el mapa completo en español e inglés para las 6 páginas de servicio (incluida la segunda pasada que cerró Venta con "commercial management" y Posventa con "customer success" en inglés), el copy de Contacto (sin cambios) y de E-Book (Opción A en ambos idiomas), y la corrección de fondo del encuadre de Marketing (Mariano ejecuta con IA, no solo asesora — "agencia de marketing" y el cluster de ejecución dejan de descartarse). Próximo paso: implementar en el código todo lo confirmado — nada de esto se tocó todavía en el sitio.

Última actualización: 2026-09-03 (BaseHub, Fase 7.3/7.4) · ronda anterior: 2026-08-30 (inglés + Contacto/E-Book) · fuente: Google Keyword Planner (España + Argentina) vía research directo de Mariano + CLAUDE.md + código en producción de basecoreweb.