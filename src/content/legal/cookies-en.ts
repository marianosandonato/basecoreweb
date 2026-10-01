import type { LegalDoc } from "./types";

/**
 * Transcribed verbatim from documentation/legal/publicar/cookies-en.md
 * (lawyer-reviewed text, plan-seo 4.5.4/4.5.5) — do not edit wording,
 * punctuation or order here. The only substitution made at build time is
 * the publication date placeholder, replaced by LEGAL_PUBLICATION_DATE
 * (see src/lib/legalDates.ts) in the page component, not in this file.
 */
export const cookiesEn: LegalDoc = {
  title: "Cookie Policy",
  updatedLabel: "Last updated",
  blocks: [
    { type: "h2", text: "1. What are cookies?" },
    { type: "p", text: "Cookies and similar technologies allow a website to remember certain preferences or generate information about how the site is used." },
    { type: "h2", text: "2. Technologies used" },
    {
      type: "table",
      headers: ["Technology", "Provider", "Category", "Purpose", "Duration", "Consent"],
      rows: [
        ["basecore_lang", "Base Core", "Technical / preference", "Remembers the language chosen by the person", "12 months", "No, it is necessary for that purpose"],
        ["bc_consent", "Base Core", "Technical", "Remembers the person's choice about analytics cookies", "12 months", "No, it is necessary to respect that choice"],
        ["_ga", "Google Analytics 4", "Analytics", "Statistical measurement of website use", "13 months", "Yes"],
        ["_ga_0NRE1KWMBM", "Google Analytics 4", "Analytics", "Keeps GA4 session/measurement state", "13 months", "Yes"],
      ],
    },
    { type: "p", text: "Cloudflare Turnstile, which we use to prevent automated form submissions, runs inside Cloudflare's own frame and does not set cookies or storage on basecoresales.com. It processes the technical signals strictly necessary to tell people from bots and does not access form contents." },
    { type: "p", text: "Cloudflare Web Analytics, which we use to measure visits and the technical performance of the website in aggregate, also does not set cookies or use local storage, and does not identify the person across sessions. It therefore does not require consent and is not listed in the table. The data it processes is described in the Privacy Policy." },
    { type: "p", text: "If a tool changes its behaviour or a new tool is added, this table will be updated." },
    { type: "h2", text: "3. Google Analytics 4" },
    { type: "p", text: "GA4 is only activated after the person accepts analytics cookies through the cookie banner. Until then it is not loaded and its cookies are not set. Our configuration prevents form contents from being sent to Analytics." },
    { type: "h2", text: "4. Consent management" },
    { type: "p", text: "The cookie banner offers equivalent Accept, Reject and Settings options. The person can change or withdraw their choice at any time through the \"Cookie settings\" link in the footer. If consent is withdrawn, Google Analytics cookies are deleted." },
    { type: "h2", text: "5. Third-party cookies" },
    { type: "p", text: "Third-party services may use their own technical technologies within their own domains. Only cookies or storage actually present in production and relevant to the processing are documented as cookies or storage of this website." },
    { type: "h2", text: "6. Changes" },
    { type: "p", text: "This policy will be updated before activating new technologies involving cookies, local storage or equivalent mechanisms." },
  ],
};
