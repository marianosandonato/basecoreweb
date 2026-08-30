import Image from "next/image";
import Link from "next/link";
import { nav, navEn, site, siteEn, type Lang } from "@/lib/site";
import EbookForm from "./EbookForm";
import SectionHeading from "./SectionHeading";
import { CheckCircleIcon, LinkedinIcon } from "./icons";

/** Marketing/Preventa/Venta/Posventa/Tecnología — same order and labels as `nav`/`navEn`. */
const cycleLinks = nav.slice(1, 6);
const cycleLinksEn = navEn.slice(1, 6);

const copy = {
  es: {
    eyebrow: "E-BOOK",
    title: "Guía gratis: cómo armar tu proceso de ventas desde cero",
    description: (
      <>
        Desde Base Core trabajamos en la reorganización de todo tu equipo y proceso
        comercial. Contratamos y/o capacitamos a tu equipo actual, sistematizamos un proceso
        para la atracción de nuevos clientes potenciales, redefinimos y separamos los ciclos
        comerciales para un correcto abordaje y definimos metas y objetivos para que el
        equipo alcance los resultados esperados.
      </>
    ),
    founderRole: site.founder.role,
    ebookAlt: "E-Book Base Core Sales: Primeros pasos para un proceso comercial efectivo",
    linkedinAria: "LinkedIn de Mariano Sandonato",
    formTitle: "Descarga nuestro E-book",
    formIntro:
      "Completa nuestro formulario para recibir nuestro E-book y obtener gratis toda la información relacionada al tema.",
    file: "/ebook/base-core-primeros-pasos-proceso-comercial-efectivo.pdf",
    fileName: "Base Core - Primeros pasos para un proceso comercial efectivo.pdf",
  },
  en: {
    eyebrow: "E-BOOK",
    title: "Free guide: how to build a sales process from scratch",
    description: (
      <>
        At Base Core we work on reorganizing your entire team and sales process. We hire
        and/or train your current team, systematize a process to attract new potential
        clients, redefine and separate the sales cycles for the right approach, and set
        goals and objectives so your team reaches the results you expect.
      </>
    ),
    founderRole: siteEn.founderRole,
    ebookAlt: "Base Core Sales E-Book: First steps to an effective sales process",
    linkedinAria: "Mariano Sandonato's LinkedIn",
    formTitle: "Download our E-book",
    formIntro:
      "Fill out our form to receive our E-book and get all the related information for free.",
    file: "/ebook/base-core-first-steps-effective-sales-process.pdf",
    fileName: "Base Core - First Steps to an Effective Sales Process.pdf",
  },
} as const;

/**
 * "/ebook" section — same 50/50 split and left-column furniture as
 * ContactSection (signature/LinkedIn, e-book thumbnail + cycle list), but
 * the right column gets its own heading above a trimmed, download-flavoured
 * form instead of the full contact form.
 */
export default function EbookSection({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];
  const items = lang === "en" ? cycleLinksEn : cycleLinks;

  return (
    <section
      id="ebook"
      className="relative bg-white bg-cover bg-center bg-no-repeat py-[70px] md:pb-[70px] md:pt-0 dt:pb-[120px] dt:pt-[90px]"
    >
      <div className="container-bc relative px-0 md:flex md:items-center">
        {/* Left column */}
        <div className="px-[15px] md:w-1/2">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            as="h1"
            maxWidth={530}
            align="left"
            className="md:mb-[40px]"
            titleClassName="mb-[6px] !text-[26px] md:!text-[32px] dt:!text-[38px]"
            descriptionClassName="!pt-[10px] md:!pt-[20px]"
            description={t.description}
          />

          {/* Signature + LinkedIn (#a3d8b65) */}
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

        {/* Right column — form */}
        <div className="px-[15px] md:w-1/2">
          <SectionHeading
            title={t.formTitle}
            description={t.formIntro}
            showLine={false}
            align="left"
            maxWidth={530}
            className="mb-[20px]"
            titleClassName="!text-[26px] md:!text-[32px] dt:!text-[38px]"
            descriptionClassName="!pt-[10px] md:!pt-[15px]"
          />
          <div className="border-x border-b border-t-4 border-solid border-line border-t-primary px-[15px] py-[30px] dt:p-[45px]">
            <EbookForm lang={lang} file={t.file} fileName={t.fileName} />
          </div>
        </div>
      </div>
    </section>
  );
}
