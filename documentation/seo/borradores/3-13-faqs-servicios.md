# FAQs de páginas de servicio (ES) — borrador para revisión de Mariano

Estado: borrador, nada aplicado al repo. Versión en inglés pendiente.

## Cómo leer este documento

- Cada respuesta sale de lo que la página o el sitio ya dicen (se cita de dónde en la línea "Fuente"). No hay precios, plazos, cifras de clientes ni garantías inventados: donde falta el dato, hay un marcador `[CONFIRMAR MARIANO: ...]`.
- Voz: tuteo neutro ("tu", "tus", "contáctanos"), que es lo que domina en el H1, los CTA y la sección de contacto del sitio. Ojo: el sitio mezcla tuteo y voseo (ver inconsistencias en el resumen), hay que decidir una sola.
- Keyword por pregunta: tomada del Mapa de Keywords (`documentation/seo/mapa-keywords.md`, sección 3 y apéndice 8). Cuando una frase no está en el mapa, lo aclaro.
- Evité repetir preguntas entre páginas. Las dos que se parecen (costo/plazos) tienen respuesta distinta por página porque lo que se cotiza es distinto, y todas usan el mismo marcador para que lo respondas una sola vez.
- Para el schema `FAQPage` (JSON-LD): el texto del JSON-LD tiene que ser idéntico al visible en la página. Cuando se implemente, conviene hacerlo desde la misma fuente de datos para que no se desincronicen. Nota de expectativa: desde 2023 Google solo muestra el rich result de FAQ a sitios gubernamentales y de salud, así que el valor acá es de contenido citable (Google e IA), no de snippet desplegable.
- Ubicación sugerida en la página: sección visible "Preguntas frecuentes" justo antes del bloque de contacto (`ContactSection`), no escondida en acordeón cerrado.

---

## 1. Home (/)

Keyword primaria del mapa: "consultoría comercial". Secundarias: consultoría para pymes, consultoría empresarial, consultoría de ventas. No usé "gestión comercial" porque la resolución de canibalización del mapa la reserva para /venta (ver inconsistencias).

**H2 sugerido:** Preguntas frecuentes sobre la consultoría comercial de Base Core

### 1.1 ¿Qué es una consultoría comercial y qué hace Base Core por una pyme?

Una consultoría comercial ordena y mejora la forma en que una empresa consigue, cierra y conserva clientes. Base Core la ofrece como "proceso como servicio" para pymes de España y Latinoamérica: trabaja los cuatro ciclos (marketing, preventa, venta y posventa) con un diagnóstico, un plan de ruta, la implementación acompañada y mejora continua. [CONFIRMAR MARIANO: rango de tamaño de empresa con el que trabajan, por ejemplo cantidad de empleados o vendedores, o si hay un mínimo].

- Keyword: consultoría comercial, consultoría para pymes.
- Fuente: Home ("Proceso como servicio", "ciclo completo", metodología de 4 pasos), meta description.

### 1.2 ¿Cómo es el proceso de trabajo?

Empieza con un diagnóstico y sigue en cuatro etapas: Diagnóstico, Plan de Ruta, Estrategia y Mejora Continua. En la etapa de estrategia se presenta el diagnóstico, se adapta el plan, se asigna un project leader y se arma un sprint de reuniones semanales; durante todo el proyecto puedes ver el estado tarea por tarea en BaseHub, la plataforma de seguimiento de Base Core incluida en el servicio.

- Keyword: consultoría de ventas (el proceso es el de una consultoría de ventas y marketing; la frase aparece solo como secundaria en el mapa, no hace falta forzarla).
- Fuente: Home (Metodología: Diagnóstico, Plan de Ruta, Estrategia, Mejora Continua), BaseHubTeaser.

### 1.3 ¿El primer diagnóstico tiene costo?

No: el primer paso es un diagnóstico gratuito. Dejas tus datos, se programa un llamado para relevar la situación actual del negocio y después Base Core propone un plan de ruta para mejorar procesos y metodologías. [CONFIRMAR MARIANO: duración aproximada del llamado de diagnóstico y si el plan de ruta queda sin compromiso de contratación].

- Keyword: diagnóstico comercial gratuito (primaria de /contacto en el mapa; refuerza la conversión desde la Home).
- Fuente: ContactSection ("Diagnóstico Gratuito"), Home ("Auditoría gratuita").
- Nota: el sitio llama a lo mismo "Auditoría gratuita", "Diagnóstico Gratuito" y "Agendar relevamiento". Acá usé "diagnóstico gratuito" (la frase del mapa); conviene unificar.

### 1.4 ¿Cuánto cuesta y cómo se cotiza?

[CONFIRMAR MARIANO: modelo de cotización (mensual, por proyecto, por etapa), rango de precios publicable o, si no se publican precios, qué factores determinan el presupuesto y en qué momento del proceso se entrega]. Hasta confirmarlo, la respuesta de cierre puede decir: "El presupuesto se define después del diagnóstico, porque depende del alcance del plan de ruta."

- Keyword: asesoría comercial (secundaria en Argentina según el mapa), consultoría empresarial.
- Fuente: no hay precios ni modelo de cotización en el sitio.

### 1.5 ¿En qué se diferencia de contratar un gerente comercial, una agencia o un software?

Base Core cubre el ciclo completo en un solo servicio, en vez de una sola pieza: el marketing atrae, la preventa califica, la venta cierra y la posventa fideliza. Además de definir los procesos, ofrece las herramientas (CRM, software a medida, agentes de IA), la selección y formación de equipos, y el seguimiento del proyecto en BaseHub sin pagar una herramienta de gestión aparte. [CONFIRMAR MARIANO: si el servicio puede reemplazar o complementar a un gerente comercial interno, y qué pasa cuando termina el proyecto, por ejemplo si hay etapa de transferencia al equipo del cliente].

- Keyword: consultoría de ventas, consultoría empresarial.
- Fuente: Home (bloque "ciclo completo", checklist "Qué hacemos", Recruiting), BaseHubTeaser.

### 1.6 ¿En qué países trabajan y el servicio es remoto?

Base Core trabaja con empresas de España y Latinoamérica, con base en Buenos Aires y Barcelona y teléfono de contacto en ambos países. [CONFIRMAR MARIANO: si el servicio es 100% remoto o hay modalidad presencial, y en qué países tienen clientes hoy, por ejemplo si es válido decir "toda Latinoamérica" o solo Argentina y España].

- Keyword: consultoría para pymes (con mención de mercado).
- Fuente: meta description de Home, `site.ts` (`location: "Bs.As. - Barcelona"`, dos teléfonos). `ServiceJsonLd` solo declara `areaServed: ["ES","AR"]`.

---

## 2. /preventa

Keyword primaria del mapa: "prospección B2B". Secundarias: ventas B2B (la de mayor volumen del cluster, hoy solo está en la meta description), generación de leads B2B, captación de clientes, prospección comercial. Mantengo siempre el calificador "B2B" para no canibalizar con /marketing.

**H2 sugerido:** Preguntas frecuentes sobre prospección B2B

### 2.1 ¿Qué incluye el servicio de prospección B2B?

Incluye todo el trabajo previo a la primera reunión de venta: el armado de la base de datos de empresas objetivo, la calificación de los leads, los modelos de contactación (emails personalizados, material comercial, llamados en frío) y la agenda de reuniones con tu ejecutivo de venta. Cada etapa se trabaja sobre un CRM, con campos mínimos definidos por empresa y por prospecto.

- Keyword: prospección B2B, ventas B2B.
- Fuente: /preventa (cuatro etapas: Armado de base de datos, Calificación de Leads, Relevamiento multidimensional, Detección de oportunidad comercial).

### 2.2 ¿Cómo califican a los leads antes de pasarlos al equipo de ventas?

Primero enriquecen los datos (tomadores de decisión, sitio web, redes, verificación de email) y después aplican BANT: presupuesto, autoridad, necesidad y plazos. Solo los prospectos que pasan ese filtro se convierten en una reunión agendada con el ejecutivo de venta y entran al funnel de ventas. Si quieres comparar métodos, tienes la guía [cómo calificar leads B2B](/blog/como-calificar-leads-b2b).

- Keyword: generación de leads B2B (leads cualificados está en el mapa solo como observación, CPC alto y volumen bajo).
- Fuente: /preventa (etapas 2, 3 y 4, mención explícita de BANT). Enlace interno al post, hoy no existe desde /preventa hacia el post.

### 2.3 ¿Qué resultado concreto entregan: cuántas reuniones puedo esperar?

El entregable de la preventa es una agenda de reuniones con clientes potenciales ya calificados, no una lista de contactos. [CONFIRMAR MARIANO: si se compromete un volumen mínimo de reuniones por mes, si hay una métrica típica que se pueda publicar, o si es mejor no prometer cifras y decir que depende del mercado y del ticket].

- Keyword: captación de clientes (secundaria del mapa; el mapa pide re-chequear el volumen, dato inconsistente entre corridas).
- Fuente: /preventa (hero: "Consigue reuniones con tus clientes potenciales"). La página cita a McKinsey con cifras (40-50% en negocios nuevos); no la usé en la respuesta porque es una estadística general, no un resultado de Base Core.

### 2.4 ¿La prospección la hace Base Core o mi propio equipo?

[CONFIRMAR MARIANO: si Base Core ejecuta directamente los envíos y los llamados en frío, si solo diseña el modelo y capacita, o ambas opciones según el cliente]. Lo que la página sí afirma es que Base Core define el modelo de contactación y arma el equipo de preventa: descripciones de puesto, fuentes de reclutamiento, direccionamiento de entrevistas y presentación de candidatos.

- Keyword: prospección comercial.
- Fuente: /preventa (etapa 3 "Modelos de contactación", bloque recruiting).

### 2.5 ¿Qué diferencia hay entre prospección inbound y outbound?

En la prospección inbound se atiende y desarrolla a los leads que llegan a tu empresa; en la outbound se sale a buscar activamente a las empresas que encajan con tu cliente ideal. Base Core estructura ambos esquemas de preventa: para inbound los puestos son Inbound Sales Representative, Lead Development Representative y Lead Response Representative, y para outbound Sales Development Representative, Business Development Representative y Account Development Representative.

- Keyword: ventas B2B (con calificador B2B, para diferenciar de la captación inbound por campañas de /marketing).
- Fuente: /preventa (sección "Estructura comercial de preventa": Inbound y Outbound). La definición de una oración es general, no figura así en la página.

### 2.6 ¿Cuánto cuesta y cuánto tarda en estar funcionando?

[CONFIRMAR MARIANO: modelo de cobro de la preventa (mensual, por reunión agendada, por proyecto), tiempo típico desde el diagnóstico hasta las primeras reuniones, y tamaño mínimo de base de datos o de equipo]. Se puede enlazar a la Home ("Diagnóstico gratuito") para el primer paso.

- Keyword: captación de clientes B2B.
- Fuente: no hay precios ni plazos en la página.

---

## 3. /venta

Keyword primaria del mapa: "gestión comercial" (ya está en title, H1 y description). Secundarias: procesos comerciales, procesos de ventas, estrategia de ventas, consultoría de ventas, implementación CRM. Nota del mapa: /tecnologia es la "dueña" de CRM; acá /venta mantiene el contenido de apoyo y enlaza.

**H2 sugerido:** Preguntas frecuentes sobre gestión comercial

### 3.1 ¿Qué incluye la consultoría de gestión comercial?

Incluye un diagnóstico de la situación actual y la definición de nueve áreas de trabajo: modelo comercial, pipeline y funnel, metas y objetivos, KPIs, forecast, modelos de inducción y supervisión, esquemas de compensación e implementación de CRM. El objetivo es que tu equipo pueda responder en cualquier momento en qué etapa está cada oportunidad y qué empuja el cierre.

- Keyword: gestión comercial, consultoría de ventas.
- Fuente: /venta (nueve etapas y párrafo "Ordenar la venta").

### 3.2 ¿Cómo se define un proceso de ventas para mi empresa?

Se parte de entrevistas y relevamiento con tus equipos y se define el modelo comercial (esquema de actuación, prioridades, tipo de venta, metodología). Después se arma el proceso de ventas: las etapas del pipeline, sus temporalidades, los requisitos obligatorios para avanzar de una etapa a otra y las tasas de conversión del funnel.

- Keyword: procesos de ventas, procesos comerciales (en Argentina estos dos pierden un escalón de volumen según el mapa, por eso la primaria sigue siendo "gestión comercial").
- Fuente: /venta (etapas "Diagnóstico de situación actual", "Modelo comercial", "Pipeline & Funnel").

### 3.3 ¿Qué metas, KPIs y forecast se definen?

Se definen la meta general, los objetivos de resultado y de gestión, y la meta por vendedor, separando venta nueva, up y cross sell y recurrencia. Los KPIs se eligen para medir lo que sirve a decisiones estratégicas, y el forecast se construye con datos históricos de venta, gasto promedio por cliente, tendencias y datos de mercado.

- Keyword: estrategia de ventas.
- Fuente: /venta (etapas "Metas y Objetivos", "KPI's", "Forecast").

### 3.4 ¿Pueden trabajar con mi equipo de ventas actual?

Sí: el trabajo incluye un modelo de formación para vendedores, auditoría de llamados, coaching en formato sprint, un modelo de supervisión y los temarios de reunión y seguimiento. También se diseñan los esquemas de compensación (fija y variable, comisiones, bonos y aceleradores), y si tu equipo necesita crecer, Base Core arma la búsqueda de perfiles: descripción de puesto, fuentes, entrevistas y presentación de candidatos.

- Keyword: consultoría de ventas.
- Fuente: /venta (etapas "Modelos de inducción y supervisión", "Esquemas de compensación", bloque recruiting).

### 3.5 ¿También implementan el CRM?

Sí, la implementación de CRM es una de las etapas de /venta: base de datos para prospección, procesos de preventa y venta, acciones, tareas y seguimiento, presupuestos, y reportes y paneles. El detalle de plataformas y de desarrollos a medida está en [CRM e IA para empresas](/tecnologia).

- Keyword: implementación CRM (la keyword real de esa búsqueda es de /tecnologia: no la refuerces acá más allá de esta respuesta).
- Fuente: /venta (etapa "Implementación CRM"), /tecnologia (HubSpot, Pipedrive, Zoho).

### 3.6 ¿Cuánto cuesta y en cuánto tiempo se ven resultados?

[CONFIRMAR MARIANO: modelo de cotización de gestión comercial, duración típica del proyecto desde el diagnóstico hasta que el proceso queda andando, y si se puede mencionar algún resultado medido en un cliente con su autorización]. La Home habla de "un plan de trabajo detallado y plazos concretos"; esa respuesta necesita al menos un orden de magnitud para no quedar vacía.

- Keyword: estrategia comercial (secundaria fuerte en ES y AR).
- Fuente: no hay precios, plazos ni resultados medidos en el sitio. El código de `clientProjects` dice expresamente que no se agreguen resultados sin verificarlos con el cliente.

---

## 4. /posventa

Keyword primaria del mapa: "fidelización de clientes". Secundarias: customer success, retención de clientes, gestión de cartera de clientes, servicio postventa (Argentina). Evité usar "CRM" como palabra ancla para no canibalizar con /tecnologia, como indica el mapa.

**H2 sugerido:** Preguntas frecuentes sobre fidelización y retención de clientes

### 4.1 ¿Qué incluye el servicio de fidelización de clientes?

Incluye tres líneas de trabajo: desarrollo de cuentas (facturación ABC, mix de productos, ticket, estacionalidad y potencial comercial), medición histórica de altas y bajas (churn) y segmentación de cartera. Sobre eso se arman las acciones de cross selling, up selling, recupero, captación, retención y fidelización.

- Keyword: fidelización de clientes.
- Fuente: /posventa (tres etapas con sus taglines).

### 4.2 ¿Qué es customer success y en qué se diferencia de la fidelización?

Customer success es la función dedicada a que cada cliente use y siga viendo valor en lo que compró; la fidelización es el objetivo que esa función persigue. En la estructura de posventa que arma Base Core, el equipo de retención incluye roles como Customer Success Manager, Customer Success Rep y Customer Support Executive, y el de crecimiento incluye Account Manager y KAM.

- Keyword: customer success.
- Fuente: /posventa (estructura comercial de posventa, H1 "fortalecer tu customer success"). La definición de la primera oración es general, no figura así en la página: revisar si coincide con cómo lo explicarías tú.

### 4.3 ¿Cómo miden cuántos clientes se pierden y por qué?

Se hace una medición histórica de altas y bajas (churn): su impacto en la meta, segmentada por tipo de venta, canal y cliente, y con provisionamiento por caídas. A partir de esa medición se definen las acciones de recupero y de captación, para que la retención deje de ser una intuición y pase a ser un número que se sigue.

- Keyword: retención de clientes.
- Fuente: /posventa (etapa "Medición histórica de altas y bajas (CHURN)"). El post del blog sobre churn (`/blog/como-prevenir-el-churn`) es un buen enlace interno para esta respuesta.

### 4.4 ¿Cómo se hace crecer a un cliente que ya compra?

Se analiza cuánto factura cada cliente, qué productos compra, su ticket, su estacionalidad y su potencial comercial, y con eso se define dónde hay espacio para cross selling y up selling. La cartera se segmenta con la lógica "analizar, desarrollar, sostener", para destinar el esfuerzo de gestión de cartera de clientes donde más rinde.

- Keyword: gestión de cartera de clientes.
- Fuente: /posventa (etapas "Desarrollo de Cuentas" y "Segmentación de Cartera").

### 4.5 ¿Pueden armar o formar mi equipo de posventa?

Sí: Base Core define las descripciones de puesto, las fuentes de reclutamiento, el direccionamiento de las entrevistas y la presentación de candidatos para el equipo de posventa, con dos estructuras posibles: retención (customer success y soporte) y crecimiento (cuentas clave y canales). [CONFIRMAR MARIANO: si la formación de ese equipo está incluida en el servicio de posventa o se cotiza aparte].

- Keyword: servicio postventa (secundaria en Argentina).
- Fuente: /posventa (recruiting y estructura comercial).

### 4.6 ¿Cuánto cuesta y cuándo se nota la mejora en retención?

[CONFIRMAR MARIANO: modelo de cotización de posventa y en qué plazo es razonable ver el primer indicador de retención o recompra mejorado]. No usar ninguna de las cifras de la página ("hasta 7 veces más caro", "60% a 70%") como promesa de resultado: son estadísticas generales, y en la página no tienen fuente enlazada.

- Keyword: retención de clientes, fidelización de clientes.
- Fuente: no hay precios ni plazos en el sitio.

---

## 5. /marketing

Keyword primaria del mapa: "marketing digital para pymes" (ya es el title). Secundarias: agencia de marketing (el mayor volumen del cluster), marketing B2B, marketing para pymes, consultoría de marketing (candidata a primaria en la tabla 2.7, aún sin uso en la página).

**H2 sugerido:** Preguntas frecuentes sobre marketing digital para pymes

### 5.1 ¿Qué incluye el servicio de marketing digital para pymes?

Incluye ocho pilares: plan de trabajo, estrategia creativa, IA y software, SEO y buscadores de IA, sitios web, redes sociales, pauta publicitaria y diseño gráfico y contenido. Cada pilar parte de objetivos y métricas definidos, con un equipo de trabajo y un project leader.

- Keyword: marketing digital para pymes.
- Fuente: /marketing (pilares comunicacionales).

### 5.2 ¿Base Core es una consultora o una agencia de marketing que ejecuta?

Ejecuta: además de diseñar la estrategia, Base Core produce los sitios web, el SEO, las redes sociales, las campañas de pauta y las piezas de diseño, apoyándose en herramientas de IA. Es una agencia de marketing con enfoque de consultoría: primero se define el concepto de comunicación y el público objetivo, y después se generan las campañas para atraer leads.

- Keyword: agencia de marketing, consultoría de marketing.
- Fuente: /marketing (hero: "Creamos conceptos de comunicación. Generamos campañas para atraer leads"), mapa de keywords (corrección del 30/8 confirmada por Mariano).

### 5.3 ¿Cómo se organiza el trabajo y cómo se miden los resultados?

Todo arranca con un plan de trabajo: objetivos, acciones por pilar, un Gantt con la calendarización, el equipo y el project leader. La medición es semanal, con analítica y reporting, y el seguimiento del proyecto se ve en BaseHub, la plataforma de Base Core incluida en el servicio.

- Keyword: marketing B2B (el contenido de la página es de marketing para empresas que venden a otras empresas: "El 90% de los compradores B2B...").
- Fuente: /marketing (pilar "Plan de trabajo"), BaseHubTeaser.

### 5.4 ¿La pauta publicitaria está incluida? ¿Quién paga los anuncios?

Base Core arma la estrategia de campaña y crea y gestiona los anuncios en Google, Instagram, Facebook y LinkedIn Ads, con retargeting, pruebas A/B y análisis de ROAS, CPA y costo por lead. [CONFIRMAR MARIANO: si el presupuesto de medios lo paga el cliente directamente a las plataformas y si hay una inversión mínima recomendada o tarifa de gestión].

- Keyword: marketing para pymes.
- Fuente: /marketing (pilar "Pauta publicitaria").

### 5.5 ¿Hacen sitios web y SEO, también para aparecer en buscadores de IA?

Sí: se desarrollan sitios web y landing pages (con Claude Code), multilenguaje y responsive, con formularios, CTAs y botón de WhatsApp. El SEO incluye auditoría de posicionamiento en Google y en buscadores de IA, palabras clave, optimización técnica, schema markup para ser citado, y las etiquetas y píxeles de medición.

- Keyword: marketing digital (el SEO no figura como keyword propia en el mapa; mantengo la respuesta como contenido de apoyo).
- Fuente: /marketing (pilares "Sitios Web" y "SEO + Buscadores IA").

### 5.6 ¿Cuánto cuesta y hay permanencia mínima?

[CONFIRMAR MARIANO: modelo de cotización de marketing (abono mensual, por pilar, por proyecto), si hay permanencia mínima y qué se incluye en el abono frente a lo que se cobra aparte]. Esta es la pregunta que más suele frenar a un dueño de pyme que compara agencias.

- Keyword: agencia de marketing digital para pymes (frase de meta, sin señal fuerte propia en el mapa; no hace falta forzarla).
- Fuente: no hay precios en el sitio.

---

## 6. /tecnologia

Keyword primaria del mapa: "CRM para empresas" e "IA para empresas" (ya en title, description y cuerpo, una vez cada una). Secundarias: automatización de procesos, consultoría CRM, agentes de IA para empresas, automatización de ventas. Evitar "automatización comercial" (competencia Alta en ambos mercados).

**H2 sugerido:** Preguntas frecuentes sobre CRM e IA para empresas

### 6.1 ¿Qué incluye la implementación de un CRM para empresas?

Incluye la implementación de HubSpot, Pipedrive, Zoho u otras plataformas: la configuración del pipeline, las etapas y los criterios de avance, la automatización de asignaciones, seguimientos y alertas, la migración de datos y la adopción del equipo. El trabajo se apoya en la consultoría CRM previa: se define el proceso comercial antes de instalar la herramienta.

- Keyword: CRM para empresas, consultoría CRM.
- Fuente: /tecnologia (flip card "CRM", párrafo sobre adopción).

### 6.2 ¿Qué CRM me recomiendan y por qué fallan tantas implementaciones?

No hay un CRM ideal para todos: la elección depende de tu proceso comercial, no de la marca. Las implementaciones fallan, según plantea la página, por falta de adopción, roles poco claros o flujos que nunca se ordenaron, por eso Base Core define el proceso primero y recién después configura la herramienta. Si estás comparando opciones, tienes la guía [qué CRM elegir para una pyme](/blog/que-crm-elegir-para-pyme). [CONFIRMAR MARIANO: si Base Core cobra o revende licencias, o si la licencia la contrata siempre el cliente].

- Keyword: CRM para empresas.
- Fuente: /tecnologia (párrafo "Un CRM no ordena un proceso comercial, lo refleja"). No uso la cifra "más de la mitad" de la página porque no tiene fuente enlazada.

### 6.3 ¿Qué es un agente de IA para empresas y qué puede hacer en mi equipo comercial?

Un agente de IA es un sistema que ejecuta tareas de un proceso con cierta autonomía, siguiendo criterios que tú defines. Base Core implementa agentes para calificar y enriquecer leads, para chatbots y formularios inteligentes de primer filtro, para analizar tu base y detectar oportunidades, y para generar y adaptar contenido comercial. La premisa es que primero se hace explícito el criterio que hoy vive en la cabeza de alguien del equipo, y después se automatiza.

- Keyword: agentes de IA para empresas, IA para empresas.
- Fuente: /tecnologia (flip card "Agentes de IA", párrafo sobre "delegar decisiones"), `AiSystemSection` ("Agentes de IA que investigan, deciden y proponen antes de ejecutar"). La primera oración es una definición general, no figura así en la página.

### 6.4 ¿Qué procesos conviene automatizar primero?

Los que más tiempo manual consumen y menos criterio requieren, y eso se decide en un diagnóstico tecnológico: inventario de herramientas, mapeo de cómo funcionan hoy tus procesos, brechas y prioridades según impacto y esfuerzo. Entre las automatizaciones habituales están la captura y asignación de leads, las secuencias de seguimiento y nurturing, la sincronización entre CRM, marketing y operación, y los reportes de campañas. Para profundizar, tienes el artículo [qué automatizar con IA en un equipo comercial](/blog/que-automatizar-con-ia-equipo-comercial).

- Keyword: automatización de procesos, automatización de ventas.
- Fuente: /tecnologia (flip cards "Automatización" y "Diagnóstico tecnológico").

### 6.5 ¿Desarrollan software de gestión a medida?

Sí: se desarrollan sistemas de gestión comercial, operativa o de proyectos, portales de cliente, aplicaciones internas y tableros con los KPIs que dirección realmente usa (pipeline, forecast, conversión entre etapas). El desarrollo es ágil, con Claude Code, y se puede integrar con tu CRM, tu ERP y tus plataformas de campañas. [CONFIRMAR MARIANO: si hay un tamaño mínimo de proyecto de software a medida y quién es el titular del código al finalizar].

- Keyword: software de gestión (no figura en el mapa; "software de ventas" está descartada por intención de comprar software).
- Fuente: /tecnologia (flip cards "Softwares de gestión" y "Tableros y reporting").

### 6.6 ¿Cuánto cuesta y por dónde se empieza?

Se empieza por un diagnóstico tecnológico, que ordena qué herramientas tienes, qué está duplicado y dónde conviene automatizar primero. [CONFIRMAR MARIANO: modelo de cotización de tecnología (por proyecto, por hora, abono de mantenimiento), si el diagnóstico tecnológico es gratuito como el comercial o tiene costo, y si el costo de licencias de CRM o de IA va aparte].

- Keyword: implementación CRM, consultoría CRM.
- Fuente: /tecnologia (card "Diagnóstico tecnológico"); no hay precios.
