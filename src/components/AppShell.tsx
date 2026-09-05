import Script from "next/script";
import Footer from "@/components/Footer";
import GtmLoader from "@/components/GtmLoader";
import Header from "@/components/Header";
import LanguageBanner from "@/components/LanguageBanner";
import WebVitals from "@/components/WebVitals";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import { professionalServiceJsonLd } from "@/lib/metadata";

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
      */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.gaId}');
        `}
      </Script>
      <GtmLoader gaId={site.gaId} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <LanguageBanner />
      <WebVitals />
    </>
  );
}
