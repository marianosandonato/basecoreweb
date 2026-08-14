import Image from "next/image";
import { site, siteEn, type Lang } from "@/lib/site";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { CheckCircleIcon, LinkedinIcon } from "./icons";

const cycleItems = ["Preventa", "Venta", "Posventa", "Marketing"];
const cycleItemsEn = ["Presales", "Sales", "Post-Sales", "Marketing"];

const copy = {
  es: {
    eyebrow: "Escríbenos",
    title: "Contacto",
    description: (
      <>
        Deja tus datos, programaremos un llamado para relevar tu situación actual.
        <br />
        Te propondremos un plan de ruta para la mejora de procesos y metodologías.
      </>
    ),
    founderRole: site.founder.role,
    ebookAlt: "E-Book Base Core Sales: Optimiza tus procesos",
    linkedinAria: "LinkedIn de Mariano Sandonato",
  },
  en: {
    eyebrow: "Get in Touch",
    title: "Contact",
    description: (
      <>
        Share your details and we&apos;ll schedule a call to assess where your business
        stands today.
        <br />
        We&apos;ll come back with a roadmap to improve your processes and methodology.
      </>
    ),
    founderRole: siteEn.founderRole,
    ebookAlt: "Base Core Sales E-Book: Optimize your processes",
    linkedinAria: "Mariano Sandonato's LinkedIn",
  },
} as const;

/**
 * "Contacto" section — 50/50 split.
 *
 * Home (#53c4e9ca): no photo, plain white, padding 90px 0 120px.
 * Cycle pages (#71f8f2e1): `bg-5.jpg` behind a 97% white overlay, padding 120px 0,
 * and the title is an h3.
 */
export default function ContactSection({
  titleAs = "h2",
  backgroundImage,
  className = "py-[70px] md:pb-[70px] md:pt-0 dt:pb-[120px] dt:pt-[90px]",
  lang = "es",
}: {
  titleAs?: "h1" | "h2" | "h3";
  backgroundImage?: string;
  className?: string;
  lang?: Lang;
}) {
  const t = copy[lang];
  const items = lang === "en" ? cycleItemsEn : cycleItems;

  return (
    <section
      id="contacto"
      className={`relative bg-white bg-cover bg-center bg-no-repeat ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && (
        <span aria-hidden="true" className="absolute inset-0 bg-white opacity-[0.97]" />
      )}
      {/* px-0: the original's two columns are 600px each — half of the full 1200
          container, not of the 1170 content box — with the 15px padding inside
          them, giving 570px of content. Same rule as the flip boxes and the
          Ciclos cards (documentation/PLAN.md). */}
      <div className="container-bc relative px-0 md:flex md:items-center">
        {/* Left column */}
        <div className="px-[15px] md:w-1/2">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            as={titleAs}
            maxWidth={530}
            align="left"
            /* 40 = the .gsc-heading's own 20px margin-bottom (inside the widget
               box on the original) plus Elementor's 20px --widgets-spacing. */
            className="md:mb-[40px]"
            titleClassName="mb-[6px]"
            descriptionClassName="!pt-[10px] md:!pt-[20px]"
            description={t.description}
          />

          {/* Signature + LinkedIn (#a3d8b65) — a 3-column inner section,
              72% / 10% / 17.3% of 570 with 10px column padding, so the icon
              sits at x=560 rather than flush right. The third column is empty. */}
          <div className="py-[10px] max-md:flex max-md:items-center max-md:gap-4 md:flex">
            <div className="md:w-[71.93%] md:px-[10px]">
              <p className="pb-[18px] leading-[32.4px] md:pb-[50px]">
                <span className="font-signature text-[18px] text-primary md:text-[24px]">
                  {site.founder.name}
                </span>{" "}
                <span className="font-sans text-[18px] text-heading">
                  - {t.founderRole}
                </span>
              </p>
            </div>
            <div className="md:w-[10%] md:px-[10px]">
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10%] bg-[#0077b5] text-[17px] text-white transition-transform duration-300 hover:scale-90"
                aria-label={t.linkedinAria}
              >
                <LinkedinIcon />
              </a>
            </div>
            <div className="max-md:hidden md:w-[17.37%]" />
          </div>

          {/* E-book thumbnail + cycle list (#43a3e1) */}
          <div className="md:flex">
            <div className="md:w-[43.684%] md:pr-[30px]">
              <Image
                src="/images/base-core-sales-ebook.webp"
                alt={t.ebookAlt}
                width={1920}
                height={1204}
                sizes="(max-width: 768px) 100vw, 240px"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-[30px] pb-[40px] md:-mt-[2px] md:w-[56.316%] md:pb-0">
              <ul>
                {items.map((item) => (
                  /* 32.4px rows (the original's items measure 32 tall), and the
                     text starts at 28px: a 23px icon box plus 5px of text
                     padding on the original, 16px icon plus a 12px gap here. */
                  <li
                    key={item}
                    className="flex items-start gap-[12px] font-sans text-[17px] font-medium leading-[32.4px] text-navy"
                  >
                    <CheckCircleIcon className="mt-[8px] shrink-0 text-[16px] text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right column — form (#67f127e9) */}
        <div className="px-[15px] md:w-1/2">
          <div className="border-x border-b border-t-4 border-solid border-line border-t-primary px-[15px] py-[30px] dt:p-[45px]">
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
