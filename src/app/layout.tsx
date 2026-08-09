import type { Metadata } from "next";
import { DM_Sans, Montserrat, Sora } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

/** Body copy, eyebrows, descriptions, form fields. */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/** "Not-a-Numb3r" eyebrow (200), cycle-page heroes (300), hero button (600). */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "600"],
});

/** Flip-box titles on the service cycle pages. */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["200"],
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
      </body>
    </html>
  );
}
