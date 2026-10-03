# FAQs de páginas de servicio (ES) — texto final listo para implementar

Estado: versión final del 3/10/2026, con todas las respuestas de Mariano aplicadas. No hay marcadores pendientes. Nada aplicado al repo. Solo ES; EN después del ok de Mariano en el preview.

Notas de implementación (resumen, el detalle de formato está en el borrador original):

- Acordeón `<details>/<summary>` nativo, renderizado en el servidor, todas las preguntas cerradas, sección antes de `ContactSection`. `FAQPage` JSON-LD generado desde la misma fuente de datos que el texto visible (el texto del JSON-LD debe ser idéntico al visible; quitar el markdown de los enlaces en el JSON-LD).
- Voz: tuteo neutro. Las estadísticas generales de las páginas no se usan en ninguna respuesta.
- Fórmula de precio (punto 1 de Mariano) y de plazos (punto 2) aplicadas de forma consistente. Los enlaces internos al blog usan slugs verificados en `src/content/blog/es/` (ver tabla al final).
- `areaServed` del schema debe ampliarse a Latinoamérica (punto 5 de Mariano). Hoy `ServiceJsonLd` solo declara `["ES","AR"]`.

---

## /

H2: Preguntas frecuentes sobre la consultoría comercial de Base Core

### ¿Qué es una consultoría comercial y qué hace Base Core por una pyme?

Una consultoría comercial ordena y mejora la forma en que una empresa consigue, cierra y conserva clientes. Base Core trabaja con pymes y empresas medianas B2B, es decir, que venden a otras empresas, sin un mínimo de empleados ni de vendedores. Cubre los cuatro ciclos (marketing, preventa, venta y posventa) con diagnóstico, plan de ruta, implementación acompañada y mejora continua.

### ¿Cómo es el proceso de trabajo?

El proceso avanza en cuatro etapas: Diagnóstico, Plan de Ruta, Estrategia y Mejora Continua. En la etapa de estrategia se presenta el diagnóstico, se adapta el plan, se asigna un project leader y se arma un sprint de reuniones semanales. Durante todo el proyecto puedes ver el estado de cada tarea en BaseHub, la plataforma de seguimiento de Base Core incluida en el servicio.

### ¿Qué es el diagnóstico gratuito y qué pasa después?

El diagnóstico gratuito es una primera reunión de relevamiento inicial, sin costo y sin compromiso de contratación. En ella se evalúa la viabilidad del proyecto y se presenta la propuesta de valor; después Base Core te envía una propuesta comercial. Si decides avanzar, los diagnósticos en profundidad (comercial, tecnológico, de equipo o de marketing, según lo que amerite) son parte del proyecto y están incluidos en el servicio.

### ¿Cómo se cotiza la consultoría y qué determina el presupuesto?

El presupuesto se define en la propuesta comercial que enviamos después del relevamiento inicial, porque depende del alcance del proyecto. El alcance cambia, por ejemplo, según abarque marketing, venta y tecnología o solo una de esas áreas. Los plazos concretos se establecen en el plan de trabajo, también según el alcance.

### ¿Reemplaza a mi gerente comercial o complementa a mi equipo?

Complementa a tu dirección comercial, no la reemplaza. Base Core cubre el ciclo completo en un solo servicio, en lugar de una sola pieza como una agencia o un software, y suma las herramientas, la selección de equipos y el seguimiento en BaseHub. Al cierre del proyecto, los procesos, las herramientas y el seguimiento quedan en manos de tu equipo, que además puede contratar un abono de mejora continua.

### ¿En qué países trabajan y el servicio es remoto?

Base Core trabaja de forma remota con empresas de España y Latinoamérica, con base en Buenos Aires y Barcelona. Puedes contactarnos por el formulario o por cualquiera de los dos teléfonos del sitio.

---

## /preventa

H2: Preguntas frecuentes sobre prospección B2B

### ¿Qué incluye el servicio de prospección B2B?

Base Core diseña el modelo de preventa y tu equipo lo ejecuta. El modelo cubre el armado de la base de empresas objetivo, la calificación de leads, los modelos de contactación (emails personalizados, material comercial, llamados en frío) y la agenda de reunión con tu ejecutivo de venta. Todo se organiza en un CRM, con campos mínimos definidos por empresa y por prospecto.

### ¿Cómo se califican los leads antes de pasarlos al equipo de ventas?

El modelo primero enriquece los datos (tomadores de decisión, sitio web, redes, verificación de email) y después aplica BANT: presupuesto, autoridad, necesidad y plazos. Solo los prospectos que pasan ese filtro llegan a una reunión con el ejecutivo de venta y se abren al funnel de ventas. Si quieres comparar métodos, tienes la guía [cómo calificar leads B2B](/blog/como-calificar-leads-b2b).

### ¿Qué recibo de la preventa si la ejecuta mi equipo?

Recibes un sistema de preventa listo para operar y un equipo preparado para hacerlo: el modelo de contactación, los criterios de calificación, la base de prospección en el CRM y el equipo de preventa armado y capacitado. Base Core no promete un número de reuniones; las reuniones con clientes potenciales son el resultado de que tu equipo ejecute el modelo.

### ¿La prospección la hace Base Core o mi propio equipo?

La ejecuta tu propio equipo. Base Core diseña el modelo de contactación, arma el equipo de preventa y lo capacita. Para armarlo define las descripciones de puesto, las fuentes de reclutamiento, el direccionamiento de las entrevistas y la presentación de candidatos.

### ¿Qué diferencia hay entre prospección inbound y outbound?

En la prospección inbound se atiende y desarrolla a los leads que llegan a tu empresa; en la outbound se sale a buscar activamente a las empresas que encajan con tu cliente ideal. Base Core estructura ambos esquemas: para inbound, los puestos Inbound Sales Representative, Lead Development Representative y Lead Response Representative; para outbound, Sales Development Representative, Business Development Representative y Account Development Representative.

### ¿Cómo empiezo y cómo se cotiza la preventa?

Se empieza con el diagnóstico gratuito: una primera reunión de relevamiento inicial, sin costo ni compromiso, donde se evalúa la viabilidad y se presenta la propuesta de valor. Después recibes una propuesta comercial, cuyo presupuesto depende del alcance del proyecto. Los plazos concretos se definen en el plan de trabajo. [Solicita tu diagnóstico gratuito](/contacto).

---

## /venta

H2: Preguntas frecuentes sobre gestión comercial

### ¿Qué incluye la consultoría de gestión comercial?

Incluye un diagnóstico de la situación actual, incluido en el servicio, y la definición de nueve áreas de trabajo: modelo comercial, pipeline y funnel, metas y objetivos, KPIs, forecast, modelos de inducción y supervisión, esquemas de compensación e implementación de CRM. El objetivo es que tu equipo pueda responder en cualquier momento en qué etapa está cada oportunidad y qué empuja el cierre.

### ¿Cómo se define un proceso de ventas para mi empresa?

Se parte de entrevistas y relevamiento con tus equipos para definir el modelo comercial: esquema de actuación, prioridades, tipo de venta y metodología. Después se arma el proceso de ventas, con las etapas del pipeline, sus temporalidades, los requisitos obligatorios para avanzar de una etapa a otra y las tasas de conversión del funnel.

### ¿Qué metas, KPIs y forecast se definen?

Se definen la meta general, los objetivos de resultado y de gestión y la meta por vendedor, separando venta nueva, up y cross sell y recurrencia. Los KPIs se eligen para medir lo que sirve a las decisiones estratégicas, y el forecast se construye con datos históricos de venta, gasto promedio por cliente, tendencias y datos de mercado.

### ¿Pueden trabajar con mi equipo de ventas actual?

Sí, el trabajo parte de tu equipo actual. Incluye un modelo de formación para vendedores, auditoría de llamados, coaching en formato sprint, un modelo de supervisión y los temarios de reunión y seguimiento. También se diseñan los esquemas de compensación (fija y variable, comisiones, bonos y aceleradores) y, si necesitas crecer, Base Core arma la búsqueda de perfiles.

### ¿También implementan el CRM?

Sí, la implementación de CRM es una de las etapas de la gestión comercial: base de datos para prospección, procesos de preventa y venta, acciones, tareas y seguimiento, presupuestos, y reportes y paneles. El detalle de plataformas y de desarrollos a medida está en [CRM e IA para empresas](/tecnologia).

### ¿Cómo se cotiza la gestión comercial y por dónde se empieza?

Se empieza con el diagnóstico gratuito, una primera reunión de relevamiento inicial sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después del relevamiento inicial, porque depende del alcance del proyecto, y los plazos concretos se fijan en el plan de trabajo. Si avanzas, el diagnóstico comercial en profundidad está incluido en el servicio. Solicita tu [diagnóstico gratuito](/contacto).

---

## /posventa

H2: Preguntas frecuentes sobre fidelización y retención de clientes

### ¿Qué incluye el servicio de fidelización de clientes?

Incluye tres líneas de trabajo: desarrollo de cuentas (facturación ABC, mix de productos, ticket, estacionalidad y potencial comercial), medición histórica de altas y bajas (churn) y segmentación de cartera. Sobre eso se arman las acciones de cross selling, up selling, recupero, captación, retención y fidelización.

### ¿Qué es customer success y en qué se diferencia de la fidelización?

Customer success es la función dedicada a que cada cliente use y siga viendo valor en lo que compró; la fidelización es el objetivo que esa función persigue. En la estructura de posventa que arma Base Core, el equipo de retención incluye roles como Customer Success Manager, Customer Success Rep y Customer Support Executive, y el de crecimiento incluye Account Manager y KAM.

### ¿Cómo se mide cuántos clientes se pierden y por qué?

Se hace una medición histórica de altas y bajas (churn): su impacto en la meta, segmentada por tipo de venta, canal y cliente, y con provisionamiento por caídas. Con esa medición se definen las acciones de recupero y de captación. Para profundizar, tienes la guía [cómo prevenir el churn](/blog/como-prevenir-el-churn).

### ¿Cómo se hace crecer a un cliente que ya compra?

Se analiza cuánto factura cada cliente, qué productos compra, su ticket, su estacionalidad y su potencial comercial, y con eso se define dónde hay espacio para cross selling y up selling. La cartera se segmenta con la lógica "analizar, desarrollar, sostener", para destinar el esfuerzo de gestión de cartera de clientes donde más rinde.

### ¿Pueden armar o formar mi equipo de posventa?

Sí, el equipo de posventa se puede sumar al proyecto según lo que surja del diagnóstico. Base Core define las descripciones de puesto, las fuentes de reclutamiento, el direccionamiento de las entrevistas y la presentación de candidatos, con dos estructuras posibles: retención (customer success y soporte) y crecimiento (cuentas clave y canales).

### ¿Cómo empiezo y qué determina el alcance del servicio de posventa?

Se empieza con el diagnóstico gratuito: una primera reunión de relevamiento inicial, sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después de esa reunión, porque depende del alcance del proyecto. Si avanzas, el diagnóstico correspondiente es parte del proyecto, está incluido en el servicio, y los plazos se fijan en el plan de trabajo.

---

## /marketing

H2: Preguntas frecuentes sobre marketing digital para pymes

### ¿Qué incluye el servicio de marketing digital para pymes?

Incluye ocho pilares: plan de trabajo, estrategia creativa, IA y software, SEO y buscadores de IA, sitios web, redes sociales, pauta publicitaria y diseño gráfico y contenido. Cada pilar parte de objetivos y métricas definidos, con un equipo de trabajo y un project leader.

### ¿Base Core es una consultora o una agencia de marketing que ejecuta?

Base Core ejecuta: además de diseñar la estrategia, produce los sitios web, el SEO, las redes sociales, las campañas de pauta y las piezas de diseño, apoyándose en herramientas de IA. Es una agencia de marketing con enfoque de consultoría: primero se define el concepto de comunicación y el público objetivo, y después se generan las campañas para atraer leads.

### ¿Cómo se organiza el trabajo y cómo se miden los resultados?

Todo arranca con un plan de trabajo: objetivos, acciones por pilar, un Gantt con la calendarización, el equipo y el project leader. La medición es semanal, con analítica y reporting, y el seguimiento del proyecto se ve en BaseHub, la plataforma de Base Core incluida en el servicio.

### ¿Quién paga la pauta publicitaria?

La inversión en medios la pagas tú directamente a cada plataforma; Base Core cobra la estrategia y la gestión. No se exige una inversión mínima. Base Core arma la estrategia de campaña y crea y gestiona los anuncios en Google, Instagram, Facebook y LinkedIn Ads, con retargeting, pruebas A/B y análisis de ROAS, CPA y costo por lead.

### ¿Hacen sitios web y SEO, también para aparecer en buscadores de IA?

Sí. Se desarrollan sitios web y landing pages, multilenguaje y responsive, con formularios, CTAs y botón de WhatsApp. El SEO incluye auditoría de posicionamiento en Google y en buscadores de IA, palabras clave, optimización técnica, schema markup para ser citado, y las etiquetas y píxeles de medición.

### ¿Cómo se cotiza el servicio de marketing y por dónde se empieza?

Se empieza con el diagnóstico gratuito, una primera reunión de relevamiento inicial sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después de esa reunión, porque depende del alcance del proyecto, y los plazos se fijan en el plan de trabajo. Si avanzas, el diagnóstico de marketing está incluido en el servicio. Solicita tu [diagnóstico gratuito](/contacto).

---

## /tecnologia

H2: Preguntas frecuentes sobre CRM e IA para empresas

### ¿Qué incluye la implementación de un CRM para empresas?

Incluye la implementación de HubSpot, Pipedrive, Zoho u otras plataformas: configuración del pipeline, las etapas y los criterios de avance, automatización de asignaciones, seguimientos y alertas, migración de datos y adopción del equipo. El trabajo se apoya en la consultoría CRM previa: se define el proceso comercial antes de instalar la herramienta.

### ¿Qué CRM me recomiendan y quién contrata la licencia?

No hay un CRM ideal para todos: la elección depende de tu proceso comercial, no de la marca. La licencia la contratas tú, a tu nombre, y Base Core implementa y configura la plataforma. Un CRM refleja un proceso, no lo ordena, por eso primero se define el proceso. Para comparar opciones, tienes la guía [qué CRM elegir para una pyme](/blog/que-crm-elegir-para-pyme).

### ¿Qué es un agente de IA para empresas y qué puede hacer en mi equipo comercial?

Un agente de IA es un sistema que ejecuta tareas de un proceso con cierta autonomía, siguiendo criterios que tú defines. Base Core implementa agentes para calificar y enriquecer leads, chatbots y formularios inteligentes de primer filtro, análisis de tu base para detectar oportunidades y generación de contenido comercial. Primero se hace explícito el criterio de tu equipo y después se automatiza.

### ¿Qué procesos conviene automatizar primero?

Los que consumen más tiempo manual y requieren menos criterio, y eso se decide en un diagnóstico tecnológico: inventario de herramientas, mapeo de tus procesos, brechas y prioridades según impacto y esfuerzo. Son habituales la captura y asignación de leads, las secuencias de seguimiento y la sincronización entre CRM, marketing y operación. Más detalle en [qué automatizar con IA en un equipo comercial](/blog/que-automatizar-con-ia-equipo-comercial).

### ¿Desarrollan software de gestión a medida?

Sí. Se desarrollan sistemas de gestión comercial, operativa o de proyectos, portales de cliente, aplicaciones internas y tableros con los KPIs que dirección usa (pipeline, forecast, conversión entre etapas), integrables con tu CRM, tu ERP y tus plataformas de campañas. El software queda a nombre de tu empresa al finalizar el proyecto.

### ¿Por dónde se empieza y cómo se cotiza un proyecto de tecnología?

Se empieza con el diagnóstico gratuito, una primera reunión de relevamiento inicial sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después de esa reunión, porque depende del alcance del proyecto. Si avanzas, el diagnóstico tecnológico (inventario de herramientas, procesos y prioridades) es parte del proyecto y está incluido en el servicio. Escríbenos desde [contacto](/contacto).

---

## Tabla resumen (keyword y criterio de canibalización por pregunta)

Keywords tomadas del Mapa de Keywords (`documentation/seo/mapa-keywords.md`). Donde la frase no figura en el mapa, se indica.

| Página | Pregunta | Keyword | Nota |
|---|---|---|---|
| / | Qué es una consultoría comercial | consultoría comercial, consultoría para pymes | Primaria de la Home |
| / | Cómo es el proceso | consultoría de ventas | Secundaria, sin forzar |
| / | Qué es el diagnóstico gratuito | diagnóstico comercial gratuito | Primaria de /contacto en el mapa; refuerza conversión |
| / | Cómo se cotiza | asesoría comercial, consultoría empresarial | Sin precio |
| / | Reemplaza a gerente comercial | consultoría de ventas, consultoría empresarial | |
| / | Países y remoto | consultoría para pymes | |
| /preventa | Qué incluye prospección B2B | prospección B2B, ventas B2B | Siempre con "B2B" para no canibalizar /marketing |
| /preventa | Cómo se califican los leads | generación de leads B2B | Enlace a blog |
| /preventa | Qué recibo si la ejecuta mi equipo | captación de clientes | El mapa pide re-chequear volumen |
| /preventa | Hace Base Core o mi equipo | prospección comercial | |
| /preventa | Inbound y outbound | ventas B2B | |
| /preventa | Cómo empiezo y cotiza | captación de clientes B2B | |
| /venta | Qué incluye gestión comercial | gestión comercial, consultoría de ventas | Primaria de /venta |
| /venta | Proceso de ventas | procesos de ventas, procesos comerciales | |
| /venta | Metas, KPIs, forecast | estrategia de ventas | |
| /venta | Equipo actual | consultoría de ventas | |
| /venta | CRM | implementación CRM | La dueña de CRM es /tecnologia; enlaza |
| /venta | Cómo se cotiza | estrategia comercial | |
| /posventa | Qué incluye fidelización | fidelización de clientes | Primaria de /posventa |
| /posventa | Customer success | customer success | |
| /posventa | Medir bajas | retención de clientes | Enlace a blog; sin usar "CRM" como ancla |
| /posventa | Crecer a un cliente | gestión de cartera de clientes | |
| /posventa | Equipo de posventa | servicio postventa | |
| /posventa | Cómo empiezo y alcance | retención de clientes | |
| /marketing | Qué incluye | marketing digital para pymes | Primaria de /marketing |
| /marketing | Consultora o agencia | agencia de marketing, consultoría de marketing | |
| /marketing | Organización y medición | marketing B2B | |
| /marketing | Quién paga la pauta | marketing para pymes | |
| /marketing | Sitios web y SEO | marketing digital | SEO sin keyword propia en el mapa; contenido de apoyo |
| /marketing | Cómo se cotiza | agencia de marketing digital para pymes | Sin señal fuerte en el mapa; no forzar |
| /tecnologia | Implementación de CRM | CRM para empresas, consultoría CRM | Primaria de /tecnologia |
| /tecnologia | Qué CRM y licencia | CRM para empresas | Enlace a blog |
| /tecnologia | Agente de IA | agentes de IA para empresas, IA para empresas | |
| /tecnologia | Qué automatizar | automatización de procesos, automatización de ventas | Enlace a blog; evitar "automatización comercial" |
| /tecnologia | Software a medida | software de gestión | No figura en el mapa |
| /tecnologia | Cómo se cotiza | implementación CRM, consultoría CRM | |

Enlaces internos al blog verificados (existen en `src/content/blog/es/` y en `blogSlugPairs`): `como-calificar-leads-b2b`, `como-prevenir-el-churn`, `que-crm-elegir-para-pyme`, `que-automatizar-con-ia-equipo-comercial`. La ruta `/blog/[slug]` existe en `src/app/(es)/blog/[slug]`.

`/contacto` existe como ruta (`src/app/(es)/contacto/page.tsx`). La Home no tiene anclas con `id`, por eso la mención a "mejora continua" va en texto plano.

---

## Bloque 3: reemplazos de nomenclatura en el sitio ES

Alcance: solo sitio ES (`src/app/(es)`, `src/content/*.ts` sin `.en`, `src/components` en su bloque `es`). No incluye `src/app/(en)` ni bloques `en` de componentes compartidos. Se verificó con búsqueda sin distinción de mayúsculas de "auditoría gratuita", "auditoria gratuita" y "agendar relevamiento".

### A. "Auditoría gratuita" / "Agendar relevamiento" por "Diagnóstico gratuito"

| Archivo:línea | Texto actual | Reemplazo propuesto |
|---|---|---|
| `src/app/(es)/page.tsx:49` | `"Auditoría gratuita"` (ítem de la lista de la etapa 1, junto a "Relevamiento del estado actual del negocio") | `"Diagnóstico gratuito"` |
| `src/app/(es)/page.tsx:170` | `AGENDAR RELEVAMIENTO` (botón del hero) | `DIAGNÓSTICO GRATUITO` |
| `src/app/(es)/marketing/page.tsx:156` | `label: "AGENDAR RELEVAMIENTO"` | `label: "DIAGNÓSTICO GRATUITO"` |
| `src/app/(es)/tecnologia/page.tsx:137` | `label: "AGENDAR RELEVAMIENTO"` | `label: "DIAGNÓSTICO GRATUITO"` |
| `src/app/(es)/basehub/page.tsx:119` | `label: "AGENDAR RELEVAMIENTO"` | `label: "DIAGNÓSTICO GRATUITO"` |
| `src/app/(es)/basehub/page.tsx:218` | `AGENDAR RELEVAMIENTO` (botón) | `DIAGNÓSTICO GRATUITO` |
| `src/components/ServiceCyclePage.tsx:21` | `cta: "AGENDAR RELEVAMIENTO"` (bloque `es`, usado por /preventa, /venta y /posventa) | `cta: "DIAGNÓSTICO GRATUITO"` |

Total: 7 apariciones. Todas en mayúsculas salvo la de la Home:49 (formato de frase). No hay apariciones en `src/content/blog/es`, `ContactSection.tsx` ni `ContactForm.tsx`. Ya dicen "Diagnóstico Gratuito" y no hay que tocarlos: `src/components/ContactSection.tsx:47` y `src/app/(es)/contacto/page.tsx:5`.

Observaciones para decidir (fuera del pedido, sin cambiar nada):

- El botón largo "AGENDAR RELEVAMIENTO" pasa a "DIAGNÓSTICO GRATUITO", que es más corto: revisar que no cambie el ancho de los botones en el hero ni en `SquareCta`.
- En `src/app/(es)/page.tsx:49` el ítem "Relevamiento del estado actual del negocio" queda al lado de "Diagnóstico gratuito". Es coherente con la corrección de Mariano (el relevamiento inicial es lo gratuito), pero conviene que lo vea en el preview.
- `src/app/(es)/contacto/page.tsx:7` (meta description) usa voseo: "dejanos tus datos". También hay voseo en `ContactForm.tsx:40`, `Turnstile.tsx:51`, `EbookForm.tsx:28,34`, `venta.ts:30`, `basehub/page.tsx:208`, `que-crm-elegir-para-pyme.ts:22,97` y el título "Descubrí cómo continúan los ciclos" (`ServiceCyclePage.tsx`). Las FAQs usan tuteo; si se quiere consistencia en todo el sitio, es una tarea aparte. La meta description de `/contacto` es texto dependiente de keywords, así que no cambiarla sin validar.

### B. "BaseCore AI System" por "Base Core AI System" (ES)

| Archivo:línea | Tipo | Texto actual | Reemplazo |
|---|---|---|---|
| `src/components/AiSystemSection.tsx:43` | Visible (bloque `es`, título H2) | `title: "BaseCore AI System"` | `title: "Base Core AI System"` |
| `src/app/(es)/tecnologia/page.tsx:225` | Comentario de código | `...between Soluciones and BaseCore AI System.` | `Base Core AI System` (opcional) |
| `src/app/(es)/tecnologia/page.tsx:229` | Comentario de código | `{/* "BaseCore AI System" — ...` | `Base Core AI System` (opcional) |
| `src/components/AiSystemSection.tsx:29` | Comentario de código | `* "BaseCore AI System" — ...` | `Base Core AI System` (opcional) |
| `src/components/TechStageMatrix.tsx:11` | Comentario de código | `"BaseCore AI System"` | `Base Core AI System` (opcional) |
| `src/components/aiSystemIcons.tsx:6` | Comentario de código | `"BaseCore AI System"` | `Base Core AI System` (opcional) |

Solo hay una aparición visible en ES (`AiSystemSection.tsx:43`); el resto son comentarios. Aviso importante: `src/components/AiSystemSection.tsx:115` (bloque `en`, `title: "BaseCore AI System"`) NO se incluyó por estar fuera de alcance, pero tiene la misma grafía y se renderiza en `/en/tecnologia`. Hay que decidir con Mariano si se unifica también en inglés, para no dejar dos grafías de la marca. La grafía "BaseCore" sin espacio es también la que usa la marca de terceros (BaseCore™) citada en la Auditoría de Marca (tarea 8.3), otro motivo para unificarla en todo el sitio.
