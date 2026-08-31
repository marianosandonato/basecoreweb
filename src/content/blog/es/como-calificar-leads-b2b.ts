import type { BlogPost } from "../types";

export const comoCalificarLeadsB2b: BlogPost = {
  title: "Cómo calificar leads B2B: BANT, MEDDIC y otros métodos",
  description:
    "BANT, MEDDIC, CHAMP y GPCTBA/C&I explicados y comparados: qué método de calificación de leads conviene según el tamaño de tu equipo y tu ciclo de venta.",
  publishedAt: "2026-09-20",
  readingMinutes: 8,
  image: "/images/Deteccion-de-oportunidad-comercial.jpg",
  imageAlt: "Dos personas de perfil comercial revisando datos de un lead en una tablet",
  body: [
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
      text: "Un equipo comercial sin criterio de calificación trata a todos los leads igual: la misma cantidad de llamadas, la misma propuesta armada, el mismo seguimiento. El costo no se ve en el lead que se descarta rápido, se ve en el que se arrastra seis semanas hasta que alguien admite que nunca tuvo presupuesto ni autoridad para decidir. Calificar temprano no es desconfiar del lead, es dejar de tratarlo como una incógnita y empezar a tratarlo como una hipótesis que se puede confirmar o descartar con preguntas concretas.",
    },
    {
      type: "h2",
      text: "BANT: los cuatro criterios clásicos",
    },
    {
      type: "p",
      text: "BANT nació en IBM hace más de cinco décadas y sigue siendo el punto de partida más simple: Budget (¿hay presupuesto real, o recién se está explorando la idea?), Authority (¿la persona con la que hablás decide, o tiene que convencer a alguien más?), Need (¿el problema que resolvés es una prioridad, o una mejora que puede esperar?) y Timeline (¿hay un plazo concreto para resolverlo, o es \"en algún momento\"). Su ventaja es la velocidad: cuatro preguntas alcanzan para descartar a la mayoría de los leads que no van a avanzar. Su límite es que asume que el proceso de compra es lineal, y en ventas B2B complejas, con varias personas influyendo en la decisión, rara vez lo es.",
    },
    {
      type: "h2",
      text: "MEDDIC: cuándo conviene un método más granular",
    },
    {
      type: "p",
      text: "MEDDIC suma tres capas que BANT no cubre: Metrics (¿qué impacto medible espera el cliente, en números?), Decision criteria y Decision process (¿cómo evalúan las opciones, y en qué orden pasan por cada instancia de aprobación?), Identify pain (¿cuál es el dolor real detrás del pedido, más allá de lo que se dice en la primera reunión?), además de Economic buyer (quién firma el gasto, que no siempre es la misma persona que tiene Authority en el sentido de BANT) y Champion (quién dentro de la cuenta empuja la compra cuando el vendedor no está en la sala). Tiene sentido cuando el ciclo de venta es largo, hay varios stakeholders, y el ticket promedio justifica invertir más tiempo por lead calificado. Para un ciclo corto y transaccional, MEDDIC suele ser más proceso del que el negocio necesita.",
    },
    {
      type: "h2",
      text: "Otras variantes: CHAMP y GPCTBA/C&I",
    },
    {
      type: "p",
      text: "CHAMP invierte el orden de BANT: empieza por Challenges (el problema del cliente) y recién después mira Authority, Money y Prioritization, partiendo de la idea de que el dolor real importa más que confirmar quién firma el cheque. GPCTBA/C&I (Goals, Plans, Challenges, Timeline, Budget, Authority, Negative consequences, Positive implications) es la versión más extensa, pensada para ventas consultivas donde vale la pena entender el costo de no resolver el problema y el beneficio de resolverlo, no solo los datos duros. Ninguna de las dos reemplaza a BANT o MEDDIC para la mayoría de las pymes: son variantes a conocer, no un tercer método que sumar a la pila.",
    },
    {
      type: "h2",
      text: "Cómo elegir un método según tu equipo y tu ciclo de venta",
    },
    {
      type: "p",
      text: "La decisión depende de dos variables, no de cuál método suena más profesional. Primero, el tamaño del equipo: un equipo de una o dos personas necesita algo rápido de aplicar en la primera llamada, no una planilla con diez criterios. Segundo, la duración y complejidad del ciclo de venta: si la decisión la toma una sola persona en pocas semanas, BANT alcanza; si intervienen varias áreas y el proceso se extiende meses, MEDDIC empieza a justificar el esfuerzo adicional de completarlo.",
    },
    {
      type: "ul",
      items: [
        "Equipo chico, ciclo corto, decisor único → BANT",
        "Equipo con varios vendedores, ciclo largo, múltiples stakeholders → MEDDIC",
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
      text: "El método de calificación falla en la práctica cuando se convierte en un formulario largo que nadie completa del todo. Funciona cuando los criterios quedan como campos simples en el CRM (una sección con los cuatro o seis puntos del método elegido), se completan a medida que la información aparece en las conversaciones reales, y sirven para una sola cosa concreta: decidir a quién llamar primero esta semana. Si el método no ayuda a tomar esa decisión todas las semanas, está mal implementado, sin importar cuán completo sea en el papel.",
    },
  ],
  cta: {
    label: "VER CÓMO ESTRUCTURAMOS TU PROSPECCIÓN B2B",
    href: "/preventa",
  },
};
