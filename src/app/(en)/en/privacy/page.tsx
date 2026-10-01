import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyEn } from "@/content/legal/privacy-en";
import { LEGAL_PUBLICATION_DATE } from "@/lib/legalDates";

const title = "Privacy Policy";
const description =
  "Base Core's privacy policy: what data we collect on basecoresales.com, why, which providers process it and how to exercise your rights.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/privacy",
    languages: { es: "/privacidad", en: "/en/privacy", "x-default": "/privacidad" },
  },
  openGraph: {
    locale: "en_US",
    title,
    description,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      doc={privacyEn}
      updatedDate={LEGAL_PUBLICATION_DATE.en}
      lang="en"
      path="/en/privacy"
      breadcrumbCurrent="Privacy"
    />
  );
}
