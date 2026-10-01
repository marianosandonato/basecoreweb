import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { cookiesEn } from "@/content/legal/cookies-en";
import { LEGAL_PUBLICATION_DATE } from "@/lib/legalDates";

const title = "Cookie Policy";
const description =
  "Base Core's cookie policy: which technologies basecoresales.com uses, why, how long they last and how to manage your consent.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/cookies",
    languages: { es: "/cookies", en: "/en/cookies", "x-default": "/cookies" },
  },
  openGraph: {
    locale: "en_US",
    title,
    description,
  },
};

export default function CookiesEnPage() {
  return (
    <LegalPage
      doc={cookiesEn}
      updatedDate={LEGAL_PUBLICATION_DATE.en}
      lang="en"
      path="/en/cookies"
      breadcrumbCurrent="Cookies"
    />
  );
}
