/**
 * UTM parameters of the page the form is submitted from, sent with the lead
 * so HubSpot can tell which campaign/link it came from (Marketing Strategy
 * 5.1). Read straight from the current URL on submit, on purpose without
 * sessionStorage/cookies: persisting them across pages is attribution
 * tracking, which needs the visitor's consent once the cookie banner exists
 * (SEO plan 4.5.3). Campaign links (Instagram's Linktree, email signature)
 * point straight at a page with a form, so the URL still carries them.
 */
export function readUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}
