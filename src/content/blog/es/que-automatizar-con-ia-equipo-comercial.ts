import type { BlogPost } from "../types";

export const queAutomatizarConIaEquipoComercial: BlogPost = {
  title: "Qué automatizar con IA en un equipo comercial (y qué no)",
  description:
    "Prospección, calificación, seguimiento, reporting, forecast, negociación y relación estratégica: qué conviene automatizar con IA en cada etapa y qué se pierde si se automatiza de más.",
  publishedAt: "2026-09-06",
  readingMinutes: 8,
  image: "/images/automatizacion-base-core-sales-1.webp",
  imageAlt: "Mano tocando una pantalla iluminada entre varios dispositivos sobre una mesa, representando procesos comerciales automatizados",
  body: [
    {
      type: "p",
      text: "Cada vez más equipos comerciales de pymes prueban IA en algún punto del proceso: un asistente que resume llamadas, un bot que responde el primer mensaje, una herramienta que arma el forecast solo. El problema casi nunca es la tecnología en sí. Es que se automatiza por moda antes de preguntarse dónde el error se nota a tiempo y dónde no. Esa pregunta, más que cualquier lista de herramientas, es la que separa a los equipos que ganan horas reales de los que terminan corrigiendo a mano lo que la IA hizo mal.",
    },
    {
      type: "h2",
      text: "Automatizar no es lo mismo que delegar sin criterio",
    },
    {
      type: "p",
      text: "Automatizar bien es sacarle a una persona una tarea repetitiva y de bajo criterio, para que dedique ese tiempo a algo que sí lo necesita. Delegar sin criterio es sacarle a una persona una decisión que todavía requiere su juicio, y enterarse del error tres pasos después, con el cliente ya adentro de una conversación mal encaminada. El resto de este artículo recorre etapa por etapa dónde está esa línea en un proceso comercial típico.",
    },
    {
      type: "h2",
      text: "Prospección: automatizar la primera criba, no el vínculo",
    },
    {
      type: "p",
      text: "Buscar, enriquecer datos de contacto y armar la primera lista de empresas que encajan con tu ICP es terreno ganado para la IA: es trabajo mecánico, de volumen, sin componente de relación. Donde conviene frenar es en el primer mensaje. Un outreach que suena claramente generado en masa se nota, y quema el contacto antes de que exista una conversación real. La automatización acá funciona mejor como filtro previo (a quién sí vale la pena escribirle) que como redactor final del mensaje.",
    },
    {
      type: "h2",
      text: "Calificación de leads: el terreno más maduro para IA",
    },
    {
      type: "p",
      text: "Cruzar datos firmográficos, comportamiento en el sitio y señales de intención para puntuar leads es, de todas las etapas, donde la IA tiene el mejor cociente entre valor y riesgo. Un modelo de scoring alimentado con los criterios de un método como BANT o MEDDIC no reemplaza el criterio comercial, pero sí evita que un vendedor abra la mañana sin saber a quién llamar primero. El riesgo real acá no es automatizar de más: es automatizar sobre datos sucios y confiar el resultado sin revisarlo las primeras semanas.",
    },
    {
      type: "h2",
      text: "Seguimiento: recordatorios y secuencias sí, el contenido de la conversación no",
    },
    {
      type: "p",
      text: "Que un sistema recuerde que hay que volver a escribirle a alguien el día 7 y no el día 27 es una automatización de bajísimo riesgo: si falla, el peor escenario es un recordatorio de más. Automatizar el contenido de esa conversación (qué decirle, cómo responder a una objeción puntual) es otra historia: ahí es donde la IA todavía comete errores de contexto que un vendedor con dos minutos de lectura no comete.",
    },
    {
      type: "h2",
      text: "Reporting: el que más conviene automatizar del todo",
    },
    {
      type: "p",
      text: "Armar el tablero semanal, cruzar el pipeline con los objetivos del mes, mandar el resumen a quien corresponda: es la etapa con menos motivo para dejarla en manos humanas. La razón no es solo el ahorro de tiempo, es que un error de reporting se nota casi al instante (un número que no cierra salta a la vista), mientras que un error en, por ejemplo, un mensaje de seguimiento ya salió y ya lo leyó el cliente antes de que alguien lo note.",
    },
    {
      type: "h2",
      text: "Forecast: un asistente, no un oráculo",
    },
    {
      type: "p",
      text: "La IA es buena detectando patrones en el historial de deals cerrados y perdidos: qué señales suelen anticipar un cierre, qué oportunidades \"probables\" en realidad casi nunca cierran. Lo que no tiene es el contexto puntual de una negociación específica: que ese cliente cambió de gerente de compras la semana pasada, o que el presupuesto del área quedó congelado por una razón que no está en ningún CRM. El forecast bien armado usa la IA como segunda opinión, no como numerito final que nadie cuestiona.",
    },
    {
      type: "h2",
      text: "Negociación: por qué conviene frenar la automatización acá",
    },
    {
      type: "p",
      text: "Negociar bien depende de leer tono, urgencia y lo que el cliente no dice explícitamente, tres cosas que hoy siguen siendo terreno humano. Automatizar respuestas en esta etapa (aunque sea con la mejor herramienta) tiende a producir intercambios correctos en la forma y torpes en el fondo: responden lo que se preguntó, no lo que realmente estaba en juego. Acá el rol razonable de la IA es de apoyo (resumir el historial de la cuenta antes de la llamada, sugerir objeciones probables), nunca de reemplazo de quien está del otro lado de la mesa.",
    },
    {
      type: "h2",
      text: "La relación estratégica: lo que no se delega nunca",
    },
    {
      type: "p",
      text: "Con las cuentas que sostienen una parte importante de la facturación, o con las que tienen potencial de crecer mucho, el vínculo humano no es un lujo: es el activo. Ninguna automatización reemplaza la llamada de alguien que conoce la cuenta hace tres años y detecta un problema antes de que el cliente lo mencione. Automatizar la administración de esa relación (recordatorios, seguimiento de renovación, alertas de inactividad) tiene sentido; automatizar la relación en sí, no.",
    },
    {
      type: "h2",
      text: "La pregunta que conviene hacerse antes de automatizar cualquier paso",
    },
    {
      type: "p",
      text: "**Antes de sumar una herramienta de IA a una etapa del proceso, tres preguntas sencillas ahorran la mayoría de los dolores de cabeza:**",
    },
    {
      type: "ul",
      items: [
        "¿Esta tarea es repetitiva y de bajo criterio, o repetitiva pero con juicio real detrás?",
        "Si la IA se equivoca acá, ¿el error se nota antes o después de llegar al cliente?",
        "¿El proceso que estoy por automatizar ya está definido, o estoy por automatizar un desorden?",
      ],
    },
    {
      type: "p",
      text: "Esa última pregunta es la que más se salta. Automatizar un proceso mal definido no lo arregla, lo escala: ahora el desorden ocurre más rápido y con menos gente mirando. Antes de automatizar, conviene tener ordenado el proceso comercial que la IA va a ejecutar, no al revés.",
    },
  ],
  cta: {
    label: "VER CÓMO IMPLEMENTAMOS AUTOMATIZACIÓN CON IA",
    href: "/tecnologia",
  },
};
