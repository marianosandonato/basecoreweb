import type { BlogPost } from "../types";

export const comoCalificarLeadsB2b: BlogPost = {
  title: "Cómo calificar leads B2B: BANT, MEDDIC y otros métodos",
  description:
    "BANT, MEDDIC, CHAMP y GPCTBA/C&I explicados y comparados: qué método de calificación conviene según tu ciclo de venta y cuántas personas deciden la compra.",
  publishedAt: "2026-09-20",
  readingMinutes: 9,
  image: "/images/Deteccion-de-oportunidad-comercial.jpg",
  imageAlt: "Dos personas de perfil comercial revisando datos de un lead en una tablet",
  body: [
    {
      type: "p",
      text: "**Respuesta corta:** para calificar un lead B2B, antes de invertirle tiempo confirmas con preguntas concretas si tiene un problema real, presupuesto, alguien con autoridad para decidir y un plazo. BANT (presupuesto, autoridad, necesidad y plazo) alcanza para ciclos cortos y un solo decisor; MEDDIC conviene cuando el ciclo es largo y participan varias áreas; CHAMP sirve de filtro inicial cuando el problema del cliente no está claro. Sea cual sea el método, lo que lo vuelve útil es dejar los criterios como campos simples en el CRM y usarlos para decidir a quién llamar primero esta semana.",
    },
    {
      type: "p",
      text: "Perseguir a un lead que nunca iba a comprar cuesta más caro que perder ese lead: cuesta el tiempo que ese vendedor no le dedicó a otro que sí estaba listo. La calificación de leads existe para responder una sola pregunta antes de invertir ese tiempo: ¿esta persona, en esta empresa, tiene motivo, autoridad y momento real para avanzar? BANT y MEDDIC son las dos formas más usadas de responderla, pero no son la única opción, y elegir la equivocada para tu proceso genera tanto ruido como no calificar nada.",
    },
    {
      type: "h2",
      text: "Por qué calificar un lead antes de invertirle tiempo",
    },
    {
      type: "p",
      text: "Un equipo comercial sin criterio de calificación trata a todos los leads igual: la misma cantidad de llamadas, la misma propuesta armada, el mismo seguimiento. El costo no se ve en el lead que se descarta rápido, se ve en el que se arrastra seis semanas hasta que alguien admite que nunca tuvo presupuesto ni autoridad para decidir. Calificar temprano no es desconfiar del lead, es dejar de tratarlo como una incógnita y empezar a tratarlo como una hipótesis que se puede confirmar o descartar con preguntas concretas. Es también el primer paso de nuestro servicio de [calificación de leads y prospección B2B](/preventa).",
    },
    {
      type: "h2",
      text: "BANT: los cuatro criterios clásicos",
    },
    {
      type: "p",
      text: "BANT se popularizó desde IBM hace décadas y sigue siendo el punto de partida más simple: Budget (¿hay presupuesto real, o recién se está explorando la idea?), Authority (¿la persona con la que hablas decide, o tiene que convencer a alguien más?), Need (¿el problema que resuelves es una prioridad, o una mejora que puede esperar?) y Timeline (¿hay un plazo concreto para resolverlo, o es \"en algún momento\"?). Su ventaja es la velocidad: cuatro preguntas alcanzan para descartar a la mayoría de los leads que no van a avanzar. Su límite es que asume que el proceso de compra es lineal, y en ventas B2B complejas, con varias personas influyendo en la decisión, rara vez lo es.",
    },
    {
      type: "h2",
      text: "MEDDIC: cuándo conviene un método más granular",
    },
    {
      type: "p",
      text: "MEDDIC tiene seis elementos y va más allá de calificar al lead: mapea cómo decide la cuenta. Cuatro no tienen equivalente directo en BANT: Metrics (¿qué impacto medible espera el cliente, en números?), Decision criteria (¿con qué criterios evalúan las opciones?), Decision process (¿por qué instancias de aprobación pasa la decisión, y en qué orden?) y Champion (quién dentro de la cuenta empuja la compra cuando el vendedor no está en la sala). Los otros dos profundizan lo que BANT ya toca: Economic buyer (quién firma el gasto, que no siempre es la misma persona que tiene Authority en el sentido de BANT) e Identify pain (cuál es el dolor real detrás del pedido, más allá de lo que se dice en la primera reunión), que lleva un paso más allá la Need de BANT. Tiene sentido cuando el ciclo de venta es largo, hay varios stakeholders, y el ticket promedio justifica invertir más tiempo por lead calificado. Para un ciclo corto y transaccional, MEDDIC suele ser más proceso del que el negocio necesita.",
    },
    {
      type: "h2",
      text: "Otras variantes: CHAMP y GPCTBA/C&I",
    },
    {
      type: "p",
      text: "CHAMP invierte el orden de BANT: empieza por Challenges (el problema del cliente) y recién después mira Authority, Money y Prioritization, partiendo de la idea de que el dolor real importa más que confirmar quién firma el cheque. GPCTBA/C&I (Goals, Plans, Challenges, Timeline, Budget, Authority, Negative consequences, Positive implications) es la versión más extensa, pensada para ventas consultivas donde vale la pena entender el costo de no resolver el problema y el beneficio de resolverlo, no solo los datos duros. Ninguna de las dos reemplaza a BANT o MEDDIC en la mayoría de los casos: son variantes a conocer, no un tercer método que sumar a la pila.",
    },
    {
      type: "h2",
      text: "Comparativa: BANT, MEDDIC, CHAMP y GPCTBA/C&I",
    },
    {
      type: "table",
      caption: "Comparativa de métodos de calificación de leads B2B: qué evalúa cada uno y cuándo conviene",
      headers: ["Método", "Qué evalúa", "Cuándo conviene"],
      rows: [
        [
          "BANT",
          "Budget (presupuesto), Authority (autoridad), Need (necesidad) y Timeline (plazo)",
          "Ciclo corto, decisión de una sola persona, primera llamada rápida",
        ],
        [
          "MEDDIC",
          "Metrics (impacto medible), Economic buyer (quién firma), Decision criteria y Decision process, Identify pain (el dolor real) y Champion (quién empuja desde adentro)",
          "Ciclo largo, varios stakeholders, varias instancias de aprobación",
        ],
        [
          "CHAMP",
          "Challenges (el problema del cliente), Authority, Money y Prioritization",
          "Venta consultiva donde el problema del cliente no está del todo claro; sirve como filtro inicial",
        ],
        [
          "GPCTBA/C&I",
          "Goals, Plans, Challenges, Timeline, Budget y Authority, más las consecuencias negativas de no resolver el problema y las implicaciones positivas de resolverlo",
          "Venta consultiva donde vale la pena cuantificar el costo de no resolver y el beneficio de resolver",
        ],
      ],
    },
    {
      type: "h2",
      text: "Cómo elegir un método según tu ciclo de venta y la cantidad de decisores",
    },
    {
      type: "p",
      text: "La decisión depende de dos variables, no de cuál método suena más profesional. Primero, cuántas personas deciden: si firma una sola, alcanza con algo rápido de aplicar en la primera llamada, no una lista larga de criterios. Segundo, la duración del ciclo de venta: si se cierra en pocas semanas, BANT alcanza; si el proceso se extiende meses, MEDDIC empieza a justificar el esfuerzo adicional de completarlo.",
    },
    {
      type: "ul",
      items: [
        "Ciclo corto, decisor único → BANT",
        "Ciclo largo, varios decisores y áreas involucradas → MEDDIC",
        "Venta consultiva donde el problema del cliente no está del todo claro → CHAMP como filtro inicial",
      ],
    },
    {
      type: "h2",
      text: "Errores comunes al calificar",
    },
    {
      type: "ul",
      items: [
        "Calificar una sola vez, al principio, y no revisar si las respuestas cambiaron con el tiempo",
        "Usar el método como cuestionario textual en la primera llamada, en vez de ir completándolo con lo que surge en varias conversaciones",
        "Descartar un lead por no tener presupuesto hoy, sin registrar que sí tiene necesidad real para retomarlo más adelante",
        "Calificar de más: exigirle a un lead chico el mismo nivel de detalle que a una cuenta grande, y perder velocidad donde no hace falta",
      ],
    },
    {
      type: "h2",
      text: "Cómo sostener esto sin que se vuelva burocracia",
    },
    {
      type: "p",
      text: "El método de calificación falla en la práctica cuando se convierte en un formulario largo que nadie completa del todo. Funciona cuando los criterios quedan como campos simples en el CRM (una sección con los cuatro o seis puntos del método elegido), se completan a medida que la información aparece en las conversaciones reales, y sirven para una sola cosa concreta: decidir a quién llamar primero esta semana. Si el método no ayuda a tomar esa decisión todas las semanas, está mal implementado, sin importar cuán completo sea en el papel. Si prefieres delegar esta etapa, nuestro equipo de [preventa](/preventa) puede encargarse de la calificación por ti.",
    },
    {
      type: "h2",
      text: "Preguntas frecuentes sobre calificación de leads B2B",
    },
    {
      type: "p",
      text: "**¿Cuál es la diferencia entre BANT y MEDDIC?** BANT evalúa cuatro criterios (presupuesto, autoridad, necesidad y plazo) y sirve para descartar rápido, mientras que MEDDIC suma las métricas que espera el cliente, sus criterios y proceso de decisión, el dolor real, quién firma el gasto y quién empuja la compra desde adentro. BANT es más ágil para ciclos cortos; MEDDIC rinde más cuando hay varios decisores y el ciclo se extiende meses.",
    },
    {
      type: "p",
      text: "**¿Qué método de calificación le conviene a una pyme?** Depende más del ciclo de venta que del tamaño de la empresa. Si decide una sola persona y el ciclo es corto, BANT alcanza porque es lo bastante simple como para aplicarlo en la primera llamada sin armar una lista larga de criterios. Si tu venta es más compleja, con varias áreas involucradas y un ciclo de meses, MEDDIC empieza a justificar el esfuerzo extra.",
    },
    {
      type: "p",
      text: "**¿Cuándo hay que volver a calificar un lead?** Cada vez que aparece información nueva en una conversación, no una sola vez al principio. Un lead que hoy no tiene presupuesto pero sí una necesidad real se registra y se retoma más adelante, en vez de descartarlo.",
    },
  ],
  cta: {
    label: "VER CÓMO ESTRUCTURAMOS TU PROSPECCIÓN B2B",
    href: "/preventa",
  },
};
