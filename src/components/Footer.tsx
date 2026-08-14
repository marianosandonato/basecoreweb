"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { site, siteEn } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { FooterEmailIcon, FooterPhoneIcon, FooterPinIcon } from "./footerIcons";

/**
 * Site footer — Elementor template 866 (see documentation/PLAN-FOOTER.md).
 *
 * Section 1: photo + #00294B @ 40% overlay; logo (39%) beside a 61% column that
 * holds "Servicios" / "Contacto" and, below a hairline rule, the socials and
 * "Dónde estamos". Section 2 is the centred copyright bar.
 */

const services = [
  { label: "Preventa", href: "/preventa" },
  { label: "Venta", href: "/venta" },
  { label: "Posventa", href: "/posventa" },
  // The original links this to not-a-numb3r.com while the header links it
  // internally; matching the header. See documentation/PLAN-FOOTER.md.
  { label: "Marketing", href: "/marketing" },
];

// Same routes as the Spanish list — those pages don't have an /en version
// yet (see documentation/PLAN-I18N.md), so the label translates but the
// destination stays the closest available content.
const servicesEn = [
  { label: "Presales", href: "/en/presales" },
  { label: "Sales", href: "/en/sales" },
  { label: "Post-Sales", href: "/en/post-sales" },
  { label: "Marketing", href: "/en/marketing" },
];

const copy = {
  es: {
    homeLabel: "Base Core – Inicio",
    servicios: "Servicios",
    contacto: "Contacto",
    contactanos: "Contactanos",
    dondeEstamos: "Dónde estamos",
    rights: "Base Core Sales © 2022 Todos los Derechos Reservados",
  },
  en: {
    homeLabel: "Base Core – Home",
    servicios: "Services",
    contacto: "Contact",
    contactanos: "Contact us",
    dondeEstamos: "Where we are",
    rights: "Base Core Sales © 2022 All Rights Reserved",
  },
} as const;

const socials = [
  { href: site.social.linkedin, label: "Linkedin", Icon: LinkedinIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
];

/** Elementor icon-box: 48px primary circle + 16px gap + title/description. */
function IconBox({
  Icon,
  title,
  children,
  href,
  external = false,
  titleSize = "text-[14px]",
  gutter = true,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  titleSize?: string;
  /** e16a445 / d668fce carry `margin: 2px 0` on the widget container; fd5ab33 does not. */
  gutter?: boolean;
}) {
  return (
    <div className={`flex max-[767px]:ml-[25px] ${gutter ? "my-[2px]" : ""}`}>
      <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-primary text-[22px] text-white">
        <Icon />
      </span>
      <div className="ml-[16px]">
        <p className={`mb-[5px] font-sans ${titleSize} font-normal leading-[32.4px] text-[#C5D2DD]`}>
          {title}
        </p>
        <p className="font-sans text-[17px] font-medium leading-[32.4px] text-white">
          {href ? (
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-primary"
            >
              {children}
            </a>
          ) : (
            children
          )}
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = copy[lang];
  const homeHref = lang === "en" ? "/en" : "/";
  const serviceItems = lang === "en" ? servicesEn : services;

  return (
    <footer className="bg-navy text-white">
      {/* ── Section 1 (#5043f31) ─────────────────────────────────────────── */}
      <div
        className="relative bg-navy bg-cover bg-center bg-no-repeat py-[70px] xl:pb-[70px] xl:pt-[110px]"
        style={{ backgroundImage: "url(/images/footer-base-core-sales.webp)" }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-40" />

        <div className="container-bc relative px-0 lg:flex">
          {/* Logo — 39% */}
          <div className="px-[15px] pb-[50px] lg:w-[39%] lg:pb-0 lg:pl-[15px] lg:pr-[25px]">
            <div className="mb-[30px] flex items-center pr-[10px] xl:mb-[40px]">
              <Link href={homeHref} aria-label={t.homeLabel} className="block w-full">
                <Image
                  src={
                    lang === "en"
                      ? "/images/logo-footer-base-core-sales-en.webp"
                      : "/images/logo-footer-base-core-sales-es.webp"
                  }
                  alt={lang === "en" ? siteEn.name : site.name}
                  width={lang === "en" ? 1792 : 1781}
                  height={2000}
                  className="mx-auto h-auto w-full max-w-[290px]"
                />
              </Link>
            </div>
          </div>

          {/* Links + contact — 61% */}
          <div className="px-[15px] pt-[6px] lg:w-[61%]">
            {/* Inner section A */}
            <div className="md:flex">
              <div className="md:w-[26%] md:pr-[15px]">
                <h4 className="mb-[20px] pb-[2px] font-heading text-[20px] font-bold leading-none text-white max-[767px]:text-center">
                  {t.servicios}
                </h4>
                <ul>
                  {serviceItems.map((s) => (
                    <li key={s.href} className="max-[767px]:text-center">
                      <Link
                        href={s.href}
                        className="font-sans text-[16px] leading-[32.4px] text-[#C5D2DD] transition-colors hover:text-white"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer column */}
              <div className="max-[767px]:pt-[40px] md:w-[25.662%] md:px-[15px]" />

              <div className="max-[767px]:pt-[50px] md:w-[48%] md:pl-[15px]">
                <h4 className="mb-[20px] pb-[2px] font-heading text-[20px] font-bold leading-none text-white max-[767px]:text-center">
                  {t.contacto}
                </h4>
                <div className="flex flex-col gap-[20px]">
                  <IconBox Icon={FooterEmailIcon} title="Email" href={`mailto:${site.email}`}>
                    {site.email}
                  </IconBox>
                  <IconBox
                    Icon={FooterPhoneIcon}
                    title={t.contactanos}
                    href={site.whatsappUrl}
                    external
                  >
                    {site.phoneArgentina.display}
                  </IconBox>
                </div>
              </div>
            </div>

            {/* Inner section B */}
            <div className="mt-[25px] border-t border-white/10 pt-[25px] md:flex">
              <div className="md:w-1/2" />
              <div className="max-[767px]:pt-[20px] md:w-1/2 md:pl-[29px]">
                <div className="flex gap-[15px] max-[767px]:justify-center">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-[48px] w-[48px] items-center justify-center bg-white text-[15px] text-navy transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
                <div className="mt-[20px]">
                  <IconBox
                    Icon={FooterPinIcon}
                    title={t.dondeEstamos}
                    titleSize="text-[15px]"
                    gutter={false}
                  >
                    {site.location}
                  </IconBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2 — copyright (#d01ae78) ─────────────────────────────── */}
      <div className="bg-navy">
        <div className="container-bc px-0">
          <div className="px-[15px]">
            {/* Year is hard-coded on the original — see documentation/PLAN-FOOTER.md. */}
            <p className="border-t border-white/10 py-[20px] text-center font-sans text-[16px] leading-[32.4px] text-[#C5D2DD] xl:py-[25px]">
              {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
