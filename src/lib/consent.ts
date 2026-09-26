/**
 * Cookie-consent shared state (plan-seo 4.5.3 — Google Consent Mode v2,
 * Basic implementation: `gtag/js` itself never downloads until someone has
 * accepted analytics cookies, so there is no ad-hoc "cookieless ping" path
 * to reason about here, only whether the *library* gets requested).
 *
 * This module is imported from both a Server Component (AppShell.tsx, to
 * read the two string constants below into its inline eager gtag shim) and
 * several Client Components (CookieConsent.tsx, GtmLoader.tsx, Footer.tsx) —
 * every function that actually touches `document`/`window` guards against
 * running in a server context, but none of them are called at module-eval
 * time, so the plain constant imports stay safe either way.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const CONSENT_COOKIE_NAME = "bc_consent";

/**
 * Bump this (and re-deploy) to make everyone re-consent — e.g. if the
 * cookie/privacy policy changes what's collected. A stored cookie whose
 * version doesn't match this is treated as if no choice had been made.
 */
export const CONSENT_VERSION = "1";

// 12 months, same cadence as LanguageBanner.tsx's own cookie.
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

/**
 * TODO (plan-seo 4.5.4): once /privacidad-cookies (ES) and the /en
 * equivalent exist, point this at the real path so CookieConsent.tsx can
 * link to it instead of leaving the policy unlinked. Left `null` on purpose
 * for now — no page exists yet.
 */
export const PRIVACY_POLICY_HREF: { es: string; en: string } | null = null;

export type ConsentStatus = "granted" | "denied";

/** Dispatched on `window` any time the stored choice changes (banner Accept/
 * Reject, the settings panel's Guardar, or a footer-triggered withdrawal) —
 * GtmLoader.tsx listens for `granted: true` to start its idle-load schedule
 * without needing a page reload. */
export const CONSENT_EVENT = "bc-consent-changed";
export type ConsentChangeDetail = { granted: boolean };

/** Dispatched by Footer.tsx's "Configurar cookies" link; CookieConsent.tsx
 * listens for this to reopen its settings panel on demand. */
export const OPEN_SETTINGS_EVENT = "bc-open-cookie-settings";

function readCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

/** `${version}:${status}` (e.g. "1:granted") — same plain-string format as
 * LanguageBanner.tsx's `basecore_lang` cookie, no JSON/encoding needed. */
function parseConsentCookie(raw: string | undefined): ConsentStatus | undefined {
  if (!raw) return undefined;
  const [version, status] = raw.split(":");
  if (version !== CONSENT_VERSION) return undefined;
  return status === "granted" || status === "denied" ? status : undefined;
}

export function getStoredConsent(): ConsentStatus | undefined {
  if (typeof document === "undefined") return undefined;
  return parseConsentCookie(readCookie(CONSENT_COOKIE_NAME));
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === "granted";
}

function storeConsent(status: ConsentStatus) {
  document.cookie = `${CONSENT_COOKIE_NAME}=${CONSENT_VERSION}:${status}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; samesite=lax; secure`;
}

/** Best-effort deletion of every GA cookie the gtag/js library may have set
 * (`_ga` plus one `_ga_<container-id>` per GA4 stream) — used on withdrawal.
 * The library itself can't be "unloaded" once fetched (see GtmLoader.tsx), so
 * denying consent again + wiping these is the actual achievable outcome
 * (plan-seo 4.5.3, point 5). Tries both host-only and explicit-domain forms
 * since we don't know which one gtag/js used to set them. */
function deleteGaCookies() {
  if (typeof document === "undefined") return;
  const names = document.cookie
    .split("; ")
    .map((row) => row.split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  if (names.length === 0) return;
  const host = window.location.hostname;
  const domainVariants = [undefined, host, `.${host}`, host.replace(/^www\./, ""), `.${host.replace(/^www\./, "")}`];
  for (const name of names) {
    for (const domain of domainVariants) {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

function dispatchConsentChange(granted: boolean) {
  window.dispatchEvent(new CustomEvent<ConsentChangeDetail>(CONSENT_EVENT, { detail: { granted } }));
}

/**
 * Single entry point for every consent transition (Aceptar, Rechazar, the
 * settings panel's Guardar, and a footer-triggered withdrawal are all just
 * this call with `granted` true/false) — stores the first-party cookie,
 * pushes `consent update` for GA4 to pick up whether or not the library has
 * loaded yet, cleans up GA cookies on denial, and notifies GtmLoader.tsx.
 */
export function setAnalyticsConsent(granted: boolean) {
  const status: ConsentStatus = granted ? "granted" : "denied";
  storeConsent(status);
  window.gtag?.("consent", "update", { analytics_storage: status });
  if (!granted) deleteGaCookies();
  dispatchConsentChange(granted);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
