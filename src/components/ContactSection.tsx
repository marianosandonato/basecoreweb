import Image from "next/image";
import Link from "next/link";
import { nav, navEn, site, siteEn, type Lang } from "@/lib/site";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { CheckCircleIcon, LinkedinIcon } from "./icons";

/** Marketing/Preventa/Venta/Posventa/Tecnología — same order and labels as `nav`/`navEn`. */
const cycleLinks = nav.slice(1, 6);
const cycleLinksEn = navEn.slice(1, 6);

const copy = {
  es: {
    eyebrow: "Escríbenos",
    title: "Diagnóstico Gratuito",
    description: (
      <>
        Deja tus datos, programaremos un llamado para relevar tu situación actual.
        <br /> Te propondremos un plan de ruta para la mejora de procesos y metodologías.
      </>
    ),
    scheduleText: "O agenda directamente haciendo clic aquí:",
    scheduleButton: "PROGRAMAR REUNIÓN",
    founderRole: site.founder.role,
    founderPhotoAlt: "Mariano Sandonato, fundador de Base Core",
    linkedinAria: "LinkedIn de Mariano Sandonato",
  },
  en: {
    eyebrow: "Get in Touch",
    title: "Free Diagnostic",
    description: (
      <>
        Share your details and we&apos;ll schedule a call to assess where your business
        stands today.
        <br /> We&apos;ll come back with a roadmap to improve your processes and methodology.
      </>
    ),
    scheduleText: "Or schedule directly by clicking here:",
    scheduleButton: "BOOK MEETING",
    founderRole: siteEn.founderRole,
    founderPhotoAlt: "Mariano Sandonato, founder of Base Core",
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
  const items = lang === "en" ? cycleLinksEn : cycleLinks;

  return (
    <section
      id="contacto"
      className={`relative bg-white ${backgroundImage ? "overflow-hidden" : ""} ${className}`}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="(max-width: 1199px) 100vw, 1200px"
            className="object-cover object-center"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-white opacity-[0.97]" />
        </>
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
          >
            <p className="pt-[10px] font-sans text-[18px] leading-[1.8] text-body">
              {t.scheduleText}
            </p>
            <a
              href={site.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[15px] inline-block w-auto rounded-[4px] bg-primary px-[24px] py-[12px] font-heading text-[14px] font-bold uppercase leading-[22px] tracking-[2px] text-white transition-colors duration-300 hover:bg-[rgba(0,0,0,0.77)] md:px-[30px] md:py-[18px]"
            >
              {t.scheduleButton}
            </a>
          </SectionHeading>

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

          {/* Personal photo (circular avatar, LinkedIn-style) + cycle list
              (#43a3e1). Correction from the previous round: name + LinkedIn
              button below the photo were removed — they duplicated the
              Signature + LinkedIn block right above (flagged, not fixed,
              in that round; now resolved by product decision). With no text
              of its own anymore, the photo goes back to matching the list's
              own rendered height (md:items-stretch on the row + h-full on
              the photo) rather than sizing itself, same mechanism the
              original stock-photo version used — aspect-square keeps it a
              circle at whatever height that resolves to. Mobile has no list
              height to match (stacked layout), so it gets a fixed diameter
              instead. */}
          <div className="md:flex md:items-center md:gap-[30px]">
            {/* Fixed diameter (140px mobile, 162px desktop) rather than
                stretching to match the list's rendered height live:
                tried `md:h-full` on a flex item next to `align-items:
                stretch` first -- against this row's auto (content-based)
                height, `height:100%` resolved to 0 instead of picking up
                the stretch (measured live, not a Tailwind typo), which
                then zeroed the aspect-square width too. 162px is that same
                target height computed directly instead: the list is always
                exactly 5 rows at this component's own fixed 32.4px
                line-height (see the list's own comment below), so it's a
                known constant, not a guess. */}
            <div className="relative mx-auto aspect-square w-[140px] shrink-0 overflow-hidden rounded-full md:mx-0 md:w-[162px]">
              <Image
                src="/images/mariano-sandonato-avatar.webp"
                alt={t.founderPhotoAlt}
                fill
                sizes="(max-width: 768px) 140px, 162px"
                className="object-cover"
              />
            </div>
            <div className="mt-[30px] pb-[40px] md:mt-0 md:w-[56.316%] md:pb-0">
              <ul>
                {items.map((item) => (
                  /* 32.4px rows (the original's items measure 32 tall), and the
                     text starts at 28px: a 23px icon box plus 5px of text
                     padding on the original, 16px icon plus a 12px gap here. */
                  <li
                    key={item.href}
                    className="flex items-start gap-[12px] font-sans text-[17px] font-medium leading-[32.4px] text-navy"
                  >
                    <CheckCircleIcon className="mt-[8px] shrink-0 text-[16px] text-primary" />
                    <Link href={item.href} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
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
