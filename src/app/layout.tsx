import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageBanner from "@/components/LanguageBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

/** Headings, buttons and card titles. Licensed, self-hosted (see documentation/PLAN.md §0.1). */
const gilmer = localFont({
  variable: "--font-gilmer",
  display: "swap",
  // woff2 only. Listing .woff as a fallback looks harmless but next/font/local
  // *preloads every entry*, so shipping both formats downloaded 312 KB instead
  // of 129 KB -- worse than before the conversion. woff2 is universally
  // supported by anything that can run this site.
  src: [
    { path: "../fonts/GilmerRegular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GilmerMedium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GilmerBold.woff2", weight: "700", style: "normal" },
  ],
});

/** Founder signature in the contact section only. */
const reey = localFont({
  variable: "--font-signature",
  display: "swap",
  src: [{ path: "../fonts/reey-regular.woff2", weight: "400", style: "normal" }],
});

/**
 * Body copy, eyebrows, descriptions, form fields. Self-hosted instead of
 * `next/font/google`: that loader fetches from fonts.gstatic.com *during
 * the Vercel build*, and a stale build-cache entry pointing at a since-
 * rotated Google asset hash reliably breaks the build with no code change
 * on our side (happened twice — see the redeploy history around Aug 2026).
 * DM Sans and Montserrat below are shipped as variable fonts (a single
 * woff2 covering their whole weight range), same "latin"-only, woff2-only
 * rule as Gilmer/reey (see that comment on `gilmer` above).
 */
const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [{ path: "../fonts/DMSans-Variable.woff2", weight: "400 700", style: "normal" }],
});

/** "Not-a-Numb3r" eyebrow (200), cycle-page heroes (300), hero button (600). */
const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [{ path: "../fonts/Montserrat-Variable.woff2", weight: "200 600", style: "normal" }],
});

/** Flip-box titles on the service cycle pages. */
const sora = localFont({
  variable: "--font-sora",
  display: "swap",
  src: [{ path: "../fonts/Sora-200.woff2", weight: "200", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s – ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: "/images/cropped-FAVICON-BASE-CORE-SALES-32x32.png",
    apple: "/images/cropped-FAVICON-BASE-CORE-SALES-192x192.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.shortName,
    title: site.name,
    description: site.description,
    images: ["/images/basecoresales-slide-marketing-espana-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Reading the path here (e.g. via headers()) would make every route
  // dynamic just to pick "es" vs "en" for one segment. Header/Footer derive
  // it themselves client-side via usePathname() instead, so the site stays
  // statically prerendered; only the /en layout patches <html lang> after
  // hydration (see src/app/en/layout.tsx).
  return (
    <html
      lang="es"
      className={`${gilmer.variable} ${dmSans.variable} ${montserrat.variable} ${sora.variable} ${reey.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LanguageBanner />
      </body>
    </html>
  );
}
