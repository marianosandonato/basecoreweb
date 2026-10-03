import type { FaqData } from "./types";

/*
 * "Preguntas frecuentes" blocks for the six ES service pages (seo-plan 3.13).
 * Source: documentation/seo/borradores/3-13-faqs-servicios-FINAL.md, with
 * Mariano's answers of 3/10/2026 (no prices, no promised figures; the free
 * first step is the "relevamiento inicial", branded "diagnóstico gratuito").
 * Rendered by FaqSection, which also emits the FAQPage JSON-LD from this data.
 */

export const homeFaq: FaqData = {
  path: "/",
  title: "Preguntas frecuentes sobre la consultoría comercial de Base Core",
  items: [
    {
      question: "¿Qué es una consultoría comercial y qué hace Base Core por una pyme?",
      answer:
        "Una consultoría comercial ordena y mejora la forma en que una empresa consigue, cierra y conserva clientes. Base Core trabaja con pymes y empresas medianas B2B, es decir, que venden a otras empresas, sin un mínimo de empleados ni de vendedores. Cubre los cuatro ciclos (marketing, preventa, venta y posventa) con diagnóstico, plan de ruta, implementación acompañada y mejora continua.",
    },
    {
      question: "¿Cómo es el proceso de trabajo?",
      answer:
        "El proceso avanza en cuatro etapas: Diagnóstico, Plan de Ruta, Estrategia y Mejora Continua. En la etapa de estrategia se presenta el diagnóstico, se adapta el plan, se asigna un project leader y se arma un sprint de reuniones semanales. Durante todo el proyecto puedes ver el estado de cada tarea en BaseHub, la plataforma de seguimiento de Base Core incluida en el servicio.",
    },
    {
      question: "¿Qué es el diagnóstico gratuito y qué pasa después?",
      answer:
        "El diagnóstico gratuito es una primera reunión de relevamiento inicial, sin costo y sin compromiso de contratación. En ella se evalúa la viabilidad del proyecto y se presenta la propuesta de valor; después Base Core te envía una propuesta comercial. Si decides avanzar, los diagnósticos en profundidad (comercial, tecnológico, de equipo o de marketing, según lo que amerite) son parte del proyecto y están incluidos en el servicio.",
    },
    {
      question: "¿Cómo se cotiza la consultoría y qué determina el presupuesto?",
      answer:
        "El presupuesto se define en la propuesta comercial que enviamos después del relevamiento inicial, porque depende del alcance del proyecto. El alcance cambia, por ejemplo, según abarque marketing, venta y tecnología o solo una de esas áreas. Los plazos concretos se establecen en el plan de trabajo, también según el alcance.",
    },
    {
      question: "¿Reemplaza a mi gerente comercial o complementa a mi equipo?",
      answer:
        "Complementa a tu dirección comercial, no la reemplaza. Base Core cubre el ciclo completo en un solo servicio, en lugar de una sola pieza como una agencia o un software, y suma las herramientas, la selección de equipos y el seguimiento en BaseHub. Al cierre del proyecto, los procesos, las herramientas y el seguimiento quedan en manos de tu equipo, que además puede contratar un abono de mejora continua.",
    },
    {
      question: "¿En qué países trabajan y el servicio es remoto?",
      answer:
        "Base Core trabaja de forma remota con empresas de España y Latinoamérica, con base en Buenos Aires y Barcelona. Puedes contactarnos por el formulario o por cualquiera de los dos teléfonos del sitio.",
    },
  ],
};

export const preventaFaq: FaqData = {
  path: "/preventa",
  title: "Preguntas frecuentes sobre prospección B2B",
  items: [
    {
      question: "¿Qué incluye el servicio de prospección B2B?",
      answer:
        "Base Core diseña el modelo de preventa y tu equipo lo ejecuta. El modelo cubre el armado de la base de empresas objetivo, la calificación de leads, los modelos de contactación (emails personalizados, material comercial, llamados en frío) y la agenda de reunión con tu ejecutivo de venta. Todo se organiza en un CRM, con campos mínimos definidos por empresa y por prospecto.",
    },
    {
      question: "¿Cómo se califican los leads antes de pasarlos al equipo de ventas?",
      answer:
        "El modelo primero enriquece los datos (tomadores de decisión, sitio web, redes, verificación de email) y después aplica BANT: presupuesto, autoridad, necesidad y plazos. Solo los prospectos que pasan ese filtro llegan a una reunión con el ejecutivo de venta y se abren al funnel de ventas. Si quieres comparar métodos, tienes la guía [cómo calificar leads B2B](/blog/como-calificar-leads-b2b).",
    },
    {
      question: "¿Qué recibo de la preventa si la ejecuta mi equipo?",
      answer:
        "Recibes un sistema de preventa listo para operar y un equipo preparado para hacerlo: el modelo de contactación, los criterios de calificación, la base de prospección en el CRM y el equipo de preventa armado y capacitado. Base Core no promete un número de reuniones; las reuniones con clientes potenciales son el resultado de que tu equipo ejecute el modelo.",
    },
    {
      question: "¿La prospección la hace Base Core o mi propio equipo?",
      answer:
        "La ejecuta tu propio equipo. Base Core diseña el modelo de contactación, arma el equipo de preventa y lo capacita. Para armarlo define las descripciones de puesto, las fuentes de reclutamiento, el direccionamiento de las entrevistas y la presentación de candidatos.",
    },
    {
      question: "¿Qué diferencia hay entre prospección inbound y outbound?",
      answer:
        "En la prospección inbound se atiende y desarrolla a los leads que llegan a tu empresa; en la outbound se sale a buscar activamente a las empresas que encajan con tu cliente ideal. Base Core estructura ambos esquemas: para inbound, los puestos Inbound Sales Representative, Lead Development Representative y Lead Response Representative; para outbound, Sales Development Representative, Business Development Representative y Account Development Representative.",
    },
    {
      question: "¿Cómo empiezo y cómo se cotiza la preventa?",
      answer:
        "Se empieza con el diagnóstico gratuito: una primera reunión de relevamiento inicial, sin costo ni compromiso, donde se evalúa la viabilidad y se presenta la propuesta de valor. Después recibes una propuesta comercial, cuyo presupuesto depende del alcance del proyecto. Los plazos concretos se definen en el plan de trabajo. [Solicita tu diagnóstico gratuito](#contacto).",
    },
  ],
};

export const ventaFaq: FaqData = {
  path: "/venta",
  title: "Preguntas frecuentes sobre gestión comercial",
  items: [
    {
      question: "¿Qué incluye la consultoría de gestión comercial?",
      answer:
        "Incluye un diagnóstico de la situación actual, incluido en el servicio, y la definición de nueve áreas de trabajo: modelo comercial, pipeline y funnel, metas y objetivos, KPIs, forecast, modelos de inducción y supervisión, esquemas de compensación e implementación de CRM. El objetivo es que tu equipo pueda responder en cualquier momento en qué etapa está cada oportunidad y qué empuja el cierre.",
    },
    {
      question: "¿Cómo se define un proceso de ventas para mi empresa?",
      answer:
        "Se parte de entrevistas y relevamiento con tus equipos para definir el modelo comercial: esquema de actuación, prioridades, tipo de venta y metodología. Después se arma el proceso de ventas, con las etapas del pipeline, sus temporalidades, los requisitos obligatorios para avanzar de una etapa a otra y las tasas de conversión del funnel.",
    },
    {
      question: "¿Qué metas, KPIs y forecast se definen?",
      answer:
        "Se definen la meta general, los objetivos de resultado y de gestión y la meta por vendedor, separando venta nueva, up y cross sell y recurrencia. Los KPIs se eligen para medir lo que sirve a las decisiones estratégicas, y el forecast se construye con datos históricos de venta, gasto promedio por cliente, tendencias y datos de mercado.",
    },
    {
      question: "¿Pueden trabajar con mi equipo de ventas actual?",
      answer:
        "Sí, el trabajo parte de tu equipo actual. Incluye un modelo de formación para vendedores, auditoría de llamados, coaching en formato sprint, un modelo de supervisión y los temarios de reunión y seguimiento. También se diseñan los esquemas de compensación (fija y variable, comisiones, bonos y aceleradores) y, si necesitas crecer, Base Core arma la búsqueda de perfiles.",
    },
    {
      question: "¿También implementan el CRM?",
      answer:
        "Sí, la implementación de CRM es una de las etapas de la gestión comercial: base de datos para prospección, procesos de preventa y venta, acciones, tareas y seguimiento, presupuestos, y reportes y paneles. El detalle de plataformas y de desarrollos a medida está en [CRM e IA para empresas](/tecnologia).",
    },
    {
      question: "¿Cómo se cotiza la gestión comercial y por dónde se empieza?",
      answer:
        "Se empieza con el diagnóstico gratuito, una primera reunión de relevamiento inicial sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después del relevamiento inicial, porque depende del alcance del proyecto, y los plazos concretos se fijan en el plan de trabajo. Si avanzas, el diagnóstico comercial en profundidad está incluido en el servicio. Solicita tu [diagnóstico gratuito](#contacto).",
    },
  ],
};

export const posventaFaq: FaqData = {
  path: "/posventa",
  title: "Preguntas frecuentes sobre fidelización y retención de clientes",
  items: [
    {
      question: "¿Qué incluye el servicio de fidelización de clientes?",
      answer:
        "Incluye tres líneas de trabajo: desarrollo de cuentas (facturación ABC, mix de productos, ticket, estacionalidad y potencial comercial), medición histórica de altas y bajas (churn) y segmentación de cartera. Sobre eso se arman las acciones de cross selling, up selling, recupero, captación, retención y fidelización.",
    },
    {
      question: "¿Qué es customer success y en qué se diferencia de la fidelización?",
      answer:
        "Customer success es la función dedicada a que cada cliente use y siga viendo valor en lo que compró; la fidelización es el objetivo que esa función persigue. En la estructura de posventa que arma Base Core, el equipo de retención incluye roles como Customer Success Manager, Customer Success Rep y Customer Support Executive, y el de crecimiento incluye Account Manager y KAM.",
    },
    {
      question: "¿Cómo se mide cuántos clientes se pierden y por qué?",
      answer:
        "Se hace una medición histórica de altas y bajas (churn): su impacto en la meta, segmentada por tipo de venta, canal y cliente, y con provisionamiento por caídas. Con esa medición se definen las acciones de recupero y de captación. Para profundizar, tienes la guía [cómo prevenir el churn](/blog/como-prevenir-el-churn).",
    },
    {
      question: "¿Cómo se hace crecer a un cliente que ya compra?",
      answer:
        "Se analiza cuánto factura cada cliente, qué productos compra, su ticket, su estacionalidad y su potencial comercial, y con eso se define dónde hay espacio para cross selling y up selling. La cartera se segmenta con la lógica \"analizar, desarrollar, sostener\", para destinar el esfuerzo de gestión de cartera de clientes donde más rinde.",
    },
    {
      question: "¿Pueden armar o formar mi equipo de posventa?",
      answer:
        "Sí, el equipo de posventa se puede sumar al proyecto según lo que surja del diagnóstico. Base Core define las descripciones de puesto, las fuentes de reclutamiento, el direccionamiento de las entrevistas y la presentación de candidatos, con dos estructuras posibles: retención (customer success y soporte) y crecimiento (cuentas clave y canales).",
    },
    {
      question: "¿Cómo empiezo y qué determina el alcance del servicio de posventa?",
      answer:
        "Se empieza con el diagnóstico gratuito: una primera reunión de relevamiento inicial, sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después de esa reunión, porque depende del alcance del proyecto. Si avanzas, el diagnóstico correspondiente es parte del proyecto, está incluido en el servicio, y los plazos se fijan en el plan de trabajo.",
    },
  ],
};

export const marketingFaq: FaqData = {
  path: "/marketing",
  title: "Preguntas frecuentes sobre marketing digital para pymes",
  items: [
    {
      question: "¿Qué incluye el servicio de marketing digital para pymes?",
      answer:
        "Incluye ocho pilares: plan de trabajo, estrategia creativa, IA y software, SEO y buscadores de IA, sitios web, redes sociales, pauta publicitaria y diseño gráfico y contenido. Cada pilar parte de objetivos y métricas definidos, con un equipo de trabajo y un project leader.",
    },
    {
      question: "¿Base Core es una consultora o una agencia de marketing que ejecuta?",
      answer:
        "Base Core ejecuta: además de diseñar la estrategia, produce los sitios web, el SEO, las redes sociales, las campañas de pauta y las piezas de diseño, apoyándose en herramientas de IA. Es una agencia de marketing con enfoque de consultoría: primero se define el concepto de comunicación y el público objetivo, y después se generan las campañas para atraer leads.",
    },
    {
      question: "¿Cómo se organiza el trabajo y cómo se miden los resultados?",
      answer:
        "Todo arranca con un plan de trabajo: objetivos, acciones por pilar, un Gantt con la calendarización, el equipo y el project leader. La medición es semanal, con analítica y reporting, y el seguimiento del proyecto se ve en BaseHub, la plataforma de Base Core incluida en el servicio.",
    },
    {
      question: "¿Quién paga la pauta publicitaria?",
      answer:
        "La inversión en medios la pagas tú directamente a cada plataforma; Base Core cobra la estrategia y la gestión. No se exige una inversión mínima. Base Core arma la estrategia de campaña y crea y gestiona los anuncios en Google, Instagram, Facebook y LinkedIn Ads, con retargeting, pruebas A/B y análisis de ROAS, CPA y costo por lead.",
    },
    {
      question: "¿Hacen sitios web y SEO, también para aparecer en buscadores de IA?",
      answer:
        "Sí. Se desarrollan sitios web y landing pages, multilenguaje y responsive, con formularios, CTAs y botón de WhatsApp. El SEO incluye auditoría de posicionamiento en Google y en buscadores de IA, palabras clave, optimización técnica, schema markup para ser citado, y las etiquetas y píxeles de medición.",
    },
    {
      question: "¿Cómo se cotiza el servicio de marketing y por dónde se empieza?",
      answer:
        "Se empieza con el diagnóstico gratuito, una primera reunión de relevamiento inicial sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después de esa reunión, porque depende del alcance del proyecto, y los plazos se fijan en el plan de trabajo. Si avanzas, el diagnóstico de marketing está incluido en el servicio. Solicita tu [diagnóstico gratuito](#contacto).",
    },
  ],
};

export const tecnologiaFaq: FaqData = {
  path: "/tecnologia",
  title: "Preguntas frecuentes sobre CRM e IA para empresas",
  items: [
    {
      question: "¿Qué incluye la implementación de un CRM para empresas?",
      answer:
        "Incluye la implementación de HubSpot, Pipedrive, Zoho u otras plataformas: configuración del pipeline, las etapas y los criterios de avance, automatización de asignaciones, seguimientos y alertas, migración de datos y adopción del equipo. El trabajo se apoya en la consultoría CRM previa: se define el proceso comercial antes de instalar la herramienta.",
    },
    {
      question: "¿Qué CRM me recomiendan y quién contrata la licencia?",
      answer:
        "No hay un CRM ideal para todos: la elección depende de tu proceso comercial, no de la marca. La licencia la contratas tú, a tu nombre, y Base Core implementa y configura la plataforma. Un CRM refleja un proceso, no lo ordena, por eso primero se define el proceso. Para comparar opciones, tienes la guía [qué CRM elegir para una pyme](/blog/que-crm-elegir-para-pyme).",
    },
    {
      question: "¿Qué es un agente de IA para empresas y qué puede hacer en mi equipo comercial?",
      answer:
        "Un agente de IA es un sistema que ejecuta tareas de un proceso con cierta autonomía, siguiendo criterios que tú defines. Base Core implementa agentes para calificar y enriquecer leads, chatbots y formularios inteligentes de primer filtro, análisis de tu base para detectar oportunidades y generación de contenido comercial. Primero se hace explícito el criterio de tu equipo y después se automatiza.",
    },
    {
      question: "¿Qué procesos conviene automatizar primero?",
      answer:
        "Los que consumen más tiempo manual y requieren menos criterio, y eso se decide en un diagnóstico tecnológico: inventario de herramientas, mapeo de tus procesos, brechas y prioridades según impacto y esfuerzo. Son habituales la captura y asignación de leads, las secuencias de seguimiento y la sincronización entre CRM, marketing y operación. Más detalle en [qué automatizar con IA en un equipo comercial](/blog/que-automatizar-con-ia-equipo-comercial).",
    },
    {
      question: "¿Desarrollan software de gestión a medida?",
      answer:
        "Sí. Se desarrollan sistemas de gestión comercial, operativa o de proyectos, portales de cliente, aplicaciones internas y tableros con los KPIs que dirección usa (pipeline, forecast, conversión entre etapas), integrables con tu CRM, tu ERP y tus plataformas de campañas. El software queda a nombre de tu empresa al finalizar el proyecto.",
    },
    {
      question: "¿Por dónde se empieza y cómo se cotiza un proyecto de tecnología?",
      answer:
        "Se empieza con el diagnóstico gratuito, una primera reunión de relevamiento inicial sin costo ni compromiso. El presupuesto se define en la propuesta comercial que enviamos después de esa reunión, porque depende del alcance del proyecto. Si avanzas, el diagnóstico tecnológico (inventario de herramientas, procesos y prioridades) es parte del proyecto y está incluido en el servicio. Escríbenos desde [contacto](#contacto).",
    },
  ],
};
