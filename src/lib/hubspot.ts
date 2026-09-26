/**
 * Server-side sync of website leads to HubSpot (Marketing Strategy 5.1).
 *
 * Runs alongside the Resend email, never instead of it: every failure here
 * is logged and swallowed, so a HubSpot outage or a bad token can't break the
 * form. Auth is a HubSpot Service Key with only crm.objects.contacts.read /
 * write (no notes or schema scopes were available/needed), stored in Vercel
 * as HUBSPOT_ACCESS_TOKEN. Without the variable the sync is a no-op.
 *
 * The custom contact properties used here were created by hand in HubSpot on
 * 25/9: fuente_del_lead (dropdown), servicio_de_interes, utm_source,
 * utm_medium, utm_campaign. consentimiento_marketing and
 * fecha_consentimiento_marketing are only sent when the visitor ticks the
 * marketing checkbox that the privacy work (SEO plan 4.5.4) will add — until
 * then the payload never carries it, so those properties are never written.
 */

const API = "https://api.hubapi.com";
const TIMEOUT_MS = 8_000;
// HubSpot-defined association type for note → contact.
const NOTE_TO_CONTACT = 202;

export type LeadSource = "Web-contacto" | "Web-ebook";

export type Lead = {
  source: LeadSource;
  nombre: string;
  apellidos?: string;
  empresa?: string;
  email?: string;
  whatsapp?: string;
  servicio?: string;
  mensaje?: string;
  utm?: Partial<Record<"utm_source" | "utm_medium" | "utm_campaign", string>>;
  marketingConsent?: boolean;
};

async function hubspot(token: string, path: string, init: RequestInit) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`HubSpot ${init.method} ${path} → ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

/** Drops empty values so an upsert never blanks a field HubSpot already has. */
function compact(props: Record<string, string | undefined>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(props)
      .map(([k, v]) => [k, v?.trim()] as const)
      .filter((entry): entry is readonly [string, string] => Boolean(entry[1])),
  );
}

export async function syncLeadToHubSpot(lead: Lead): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return;

  try {
    const properties = compact({
      firstname: lead.nombre,
      lastname: lead.apellidos,
      company: lead.empresa,
      // HubSpot matches emails case-insensitively but rejects an upsert whose
      // email property differs from the idProperty value, so lowercase once.
      email: lead.email?.toLowerCase(),
      phone: lead.whatsapp,
      fuente_del_lead: lead.source,
      servicio_de_interes: lead.servicio,
      ...lead.utm,
      ...(lead.marketingConsent
        ? {
            consentimiento_marketing: "true",
            fecha_consentimiento_marketing: new Date().toISOString().slice(0, 10),
          }
        : {}),
    });

    // With an email, upsert so a repeat visitor updates their existing
    // contact instead of creating a duplicate. The contact form's email is
    // optional, so without one there's nothing to dedupe on: plain create.
    const email = properties.email;
    const contactId: string = email
      ? (
          await hubspot(token, "/crm/v3/objects/contacts/batch/upsert", {
            method: "POST",
            body: JSON.stringify({
              inputs: [{ idProperty: "email", id: email, properties }],
            }),
          })
        ).results[0].id
      : (
          await hubspot(token, "/crm/v3/objects/contacts", {
            method: "POST",
            body: JSON.stringify({ properties }),
          })
        ).id;

    const mensaje = lead.mensaje?.trim();
    if (!mensaje) {
      console.info(`HubSpot: ${lead.source} lead synced (contact ${contactId})`);
      return;
    }

    // A note keeps every message on the contact's timeline. If the Service
    // Key can't create notes, fall back to HubSpot's built-in "message"
    // property (latest message only; the email still has all of them).
    try {
      await hubspot(token, "/crm/v3/objects/notes", {
        method: "POST",
        body: JSON.stringify({
          properties: {
            hs_timestamp: new Date().toISOString(),
            hs_note_body: `Mensaje del formulario (${lead.source}):\n\n${mensaje}`,
          },
          associations: [
            {
              to: { id: contactId },
              types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: NOTE_TO_CONTACT }],
            },
          ],
        }),
      });
      console.info(`HubSpot: ${lead.source} lead synced with note (contact ${contactId})`);
    } catch (noteError) {
      console.error("HubSpot note failed, falling back to the message property:", noteError);
      await hubspot(token, `/crm/v3/objects/contacts/${contactId}`, {
        method: "PATCH",
        body: JSON.stringify({ properties: { message: mensaje } }),
      });
      console.info(`HubSpot: ${lead.source} lead synced, message on property (contact ${contactId})`);
    }
  } catch (error) {
    console.error("HubSpot sync failed:", error);
  }
}

/** Reads the three UTM keys the lead properties store, ignoring anything else. */
export function pickUtm(data: Record<string, unknown>): Lead["utm"] {
  const utm: Lead["utm"] = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign"] as const) {
    const value = data[key];
    if (typeof value === "string" && value.trim()) utm[key] = value.trim().slice(0, 200);
  }
  return utm;
}
