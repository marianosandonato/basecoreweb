import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

const title = "Free Diagnostic";
const description =
  "Book a free diagnostic: share your details and we'll propose a roadmap to improve your processes and methodology.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/contact",
    languages: { es: "/contacto", en: "/en/contact", "x-default": "/contacto" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/contact`,
    title,
    description,
    images: ["/images/basecoresales-slide-marketing-espana-1.jpg"],
  },
};

export default function ContactPageEn() {
  return (
    <>
      <Breadcrumb current="Contact" variant="hero" lang="en" path="/en/contact" />
      <ContactSection
        titleAs="h1"
        className="py-[70px] md:pb-[70px] md:pt-0 dt:pb-[120px] dt:pt-[90px]"
        lang="en"
      />
    </>
  );
}
