import Script from "next/script";
import Footer from "@/components/Footer";
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.gaId}');
        `}
      </Script>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <LanguageBanner />
      <WebVitals />
    </>
  );
}
