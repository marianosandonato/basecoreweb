import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

const description =
  "Get in touch: share your details and we'll schedule a call to assess where your business stands and propose a roadmap.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/en/contact",
    languages: { es: "/contacto", en: "/en/contact" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/contact`,
    title: "Contact",
    description,
  },
};

export default function ContactPageEn() {
  return (
    <>
      <Breadcrumb current="Contact" variant="hero" lang="en" />
      <ContactSection
        titleAs="h1"
        className="py-[70px] md:pb-[70px] md:pt-0 dt:pb-[120px] dt:pt-[90px]"
        lang="en"
      />
    </>
  );
}
