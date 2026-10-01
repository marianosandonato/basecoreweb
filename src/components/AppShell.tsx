import Script from "next/script";
import DynamicCookieConsent from "@/components/DynamicCookieConsent";
import DynamicLanguageBanner from "@/components/DynamicLanguageBanner";
import Footer from "@/components/Footer";
import GtmLoader from "@/components/GtmLoader";
import Header from "@/components/Header";
import WebVitals from "@/components/WebVitals";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import { professionalServiceJsonLd } from "@/lib/metadata";
import { CONSENT_COOKIE_NAME, CONSENT_VERSION } from "@/lib/consent";

/**
 * Everything that used to live inside <body> in the single root layout,
 * factored out so both root layouts (src/app/(es)/layout.tsx, lang="es",
 * and src/app/(en)/en/layout.tsx, lang="en" — see
 * documentation/seo/plan-seo.md 1.18) render the exact same Header/Footer/
 * GA4/JSON-LD/WhatsApp/LanguageBanner/WebVitals stack without duplicating
 * any of it by hand. Header/Footer/LanguageBanner already derive the active
 * language from the URL path client-side (usePathname), so this needs no
 * `lang` prop of its own.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/*
        The dataLayer/gtag() shim stays eager (no network cost, a few bytes
        of inline JS) so window.gtag(...) exists and queues correctly the
        moment WebVitals.tsx/ContactForm.tsx/EbookForm.tsx call it -- they
        use `window.gtag?.(...)`, which silently no-ops (drops the call,
        doesn't queue it) if `gtag` isn't defined yet, so this can't be
        deferred. It's the actual gtag/js *library* (~166KB, GtmLoader below)
        that competed with LCP; deferring only that keeps every gtag() call
        landing in dataLayer as before, just processed once the library loads
        a beat later.

        Consent Mode v2, Basic (plan-seo 4.5.3): `consent default` is pushed
        before `config` so the very first thing GA4 ever sees for this
        visitor is its consent state, per Google's own ordering requirement.
        Reading `bc_consent` here (plain string cookie, no JSON) instead of
        hard-coding `denied` lets a *returning* visitor who already accepted
        get `analytics_storage: 'granted'` from the very first paint --
        GtmLoader.tsx's own `hasAnalyticsConsent()` check (same cookie, same
        format) then starts its normal idle/timeout load immediately too, so
        a returning visitor's experience is unchanged from before this task.
        A first-time visitor (no cookie yet) gets `denied`, and GtmLoader
        never requests the library until CookieConsent.tsx calls
        `setAnalyticsConsent(true)`, which pushes its own `consent update`.
        `ad_*` stay denied unconditionally -- this site has no advertising
        use of GA4, only Basic analytics consent is ever asked for.
      */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var bcConsentCookie = document.cookie.match(/(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)/);
          var bcConsentGranted = !!bcConsentCookie && decodeURIComponent(bcConsentCookie[1]) === '${CONSENT_VERSION}:granted';
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: bcConsentGranted ? 'granted' : 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${site.gaId}');
        `}
      </Script>
      <GtmLoader gaId={site.gaId} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <DynamicLanguageBanner />
      <DynamicCookieConsent />
      <WebVitals />
    </>
  );
}
