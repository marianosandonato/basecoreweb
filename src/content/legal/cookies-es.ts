import type { LegalDoc } from "./types";

/**
 * Transcribed verbatim from documentation/legal/publicar/cookies-es.md
 * (lawyer-reviewed text, plan-seo 4.5.4/4.5.5) — do not edit wording,
 * punctuation or order here. The only substitution made at build time is
 * the publication date placeholder, replaced by LEGAL_PUBLICATION_DATE
 * (see src/lib/legalDates.ts) in the page component, not in this file.
 */
export const cookiesEs: LegalDoc = {
  title: "Política de Cookies",
  updatedLabel: "Última actualización",
  blocks: [
    { type: "h2", text: "1. ¿Qué son las cookies?" },
    { type: "p", text: "Son archivos o tecnologías similares que permiten recordar determinadas preferencias o generar información sobre el uso de un sitio web." },
    { type: "h2", text: "2. Tecnologías utilizadas" },
    {
      type: "table",
      headers: ["Tecnología", "Proveedor", "Categoría", "Finalidad", "Duración", "Consentimiento"],
      rows: [
        ["basecore_lang", "Base Core", "Técnica / preferencia", "Recordar la preferencia de idioma elegida por la persona", "12 meses", "No, es necesaria para esa finalidad"],
        ["bc_consent", "Base Core", "Técnica", "Recordar la elección de la persona sobre las cookies analíticas", "12 meses", "No, es necesaria para respetar esa elección"],
        ["_ga", "Google Analytics 4", "Analítica", "Medición estadística del uso del sitio", "13 meses", "Sí"],
        ["_ga_0NRE1KWMBM", "Google Analytics 4", "Analítica", "Mantener el estado de sesión/medición de GA4", "13 meses", "Sí"],
      ],
    },
    { type: "p", text: "Cloudflare Turnstile, que utilizamos para prevenir envíos automatizados en los formularios, funciona dentro de un marco propio de Cloudflare y no instala cookies ni almacenamiento en basecoresales.com. Procesa las señales técnicas estrictamente necesarias para distinguir personas de bots y no accede al contenido de los formularios." },
    { type: "p", text: "Cloudflare Web Analytics, que utilizamos para medir de forma agregada las visitas y el rendimiento técnico del sitio, tampoco instala cookies ni utiliza almacenamiento local, y no identifica a la persona entre sesiones. Por eso no requiere consentimiento ni figura en la tabla. El detalle de los datos que procesa está en la Política de Privacidad." },
    { type: "p", text: "Si una herramienta cambia su comportamiento o se incorpora una nueva herramienta, esta tabla se actualizará." },
    { type: "h2", text: "3. Google Analytics 4" },
    { type: "p", text: "GA4 solo se activa después de que la persona acepta las cookies analíticas mediante el banner de cookies. Hasta ese momento no se carga ni se instalan sus cookies. La configuración impide que el contenido introducido en los formularios se envíe a Analytics." },
    { type: "h2", text: "4. Gestión del consentimiento" },
    { type: "p", text: "El banner de cookies ofrece opciones equivalentes de Aceptar, Rechazar y Configurar. La persona puede modificar o retirar su decisión en cualquier momento desde el enlace \"Configurar cookies\" del pie de página. Si retira el consentimiento, se eliminan las cookies de Google Analytics." },
    { type: "h2", text: "5. Cookies de terceros" },
    { type: "p", text: "Al utilizar servicios de terceros pueden existir tecnologías técnicas propias de esos proveedores, dentro de sus propios dominios. Solo se documentan como cookies o almacenamiento del sitio aquellas efectivamente presentes en producción y relevantes para el tratamiento." },
    { type: "h2", text: "6. Cambios" },
    { type: "p", text: "La política se actualizará antes de activar nuevas tecnologías que impliquen cookies, almacenamiento local o mecanismos equivalentes." },
  ],
};
