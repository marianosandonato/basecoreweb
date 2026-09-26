import { after } from "next/server";
import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { pickUtm, syncLeadToHubSpot } from "@/lib/hubspot";

type EbookPayload = {
  nombre?: string;
  apellidos?: string;
  empresa?: string;
  whatsapp?: string;
  email?: string;
  idioma?: string;
  website?: string; // honeypot
  turnstileToken?: string;
  marketingConsent?: boolean | string; // checkbox from SEO plan 4.5.4, not in the form yet
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: EbookPayload;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending anything
  if (data.website) {
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const captchaOk = await verifyTurnstile(data.turnstileToken, ip);
  if (!captchaOk) {
    return Response.json(
      { error: "Verificación de seguridad fallida. Volvé a intentarlo." },
      { status: 400 },
    );
  }

  const nombre = data.nombre?.trim();
  const empresa = data.empresa?.trim();
  const email = data.email?.trim();
  if (!nombre || !empresa || !email) {
    return Response.json(
      { error: "Nombre, empresa y email son obligatorios." },
      { status: 400 },
    );
  }

  // HubSpot runs after the response and independently of the email below:
  // it can't slow the download down or make it fail.
  after(() =>
    syncLeadToHubSpot({
      source: "Web-ebook",
      nombre,
      apellidos: data.apellidos,
      empresa,
      email,
      whatsapp: data.whatsapp,
      utm: pickUtm(data),
      marketingConsent: data.marketingConsent === true || data.marketingConsent === "on",
    }),
  );

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "El formulario no está disponible en este momento." },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "info@basecoresales.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const rows: Array<[string, string | undefined]> = [
    ["Nombre", nombre],
    ["Apellidos", data.apellidos],
    ["Empresa", empresa],
    ["WhatsApp", data.whatsapp],
    ["Email", email],
    ["Idioma del E-Book", data.idioma],
  ];

  const html = `
    <h2>Nueva descarga de E-Book desde basecoresales.com</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .filter(([, v]) => v?.trim())
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd"><strong>${k}</strong></td><td style="border:1px solid #ddd">${escapeHtml(v!.trim())}</td></tr>`,
        )
        .join("")}
    </table>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `Base Core Sales <${from}>`,
    to,
    replyTo: email,
    subject: `Descarga E-Book: ${nombre} (${empresa})`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "No se pudo procesar la descarga. Inténtalo nuevamente." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
