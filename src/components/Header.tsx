"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerNav, headerNavEn, site, siteEn } from "@/lib/site";
import {
  ChevronDownIcon,
  CloseIcon,
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapMarkerIcon,
  MenuIcon,
  PhoneIcon,
} from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * Site header — Elementor template 1137 (see documentation/PLAN-HEADER.md).
 *
 * The original renders two mutually exclusive headers off `header.wp-site-header`:
 *   .header_default_screen  > 1024px — inside `.header-builder-inner`, which is
 *                             position:absolute, so it OVERLAYS the hero
 *   .header-mobile         <= 1024px — a sibling of that wrapper, so it stays in
 *                             normal flow and PUSHES the hero down
 * The original's breakpoint is 1024px, not 767px. Ours is bumped to 1200px:
 * once the nav grew to 7 items, the desktop bar's info column (location/email/
 * phone, fixed at 45%) no longer fit next to the nav below ~1150-1200px and
 * wrapped to two lines, so the off-canvas mobile header now covers that band
 * instead — it already handles arbitrary content width with no such bug.
 */

const socials = [
  { href: site.social.linkedin, label: "Linkedin", Icon: LinkedinIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [desktopOpenHref, setDesktopOpenHref] = useState<string | null>(null);
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const items = lang === "en" ? headerNavEn : headerNav;
  const homeHref = lang === "en" ? "/en" : "/";
  const homeLabel = lang === "en" ? "Base Core – Home" : "Base Core – Inicio";
  const openMenuLabel = lang === "en" ? "Open menu" : "Abrir menú";
  const closeMenuLabel = lang === "en" ? "Close menu" : "Cerrar menú";

  const isActive = (href: string) =>
    href === "/" || href === "/en" ? pathname === href : pathname.startsWith(href);

  const isActiveEntry = (item: { href: string; children?: readonly { href: string }[] }) =>
    isActive(item.href) || (item.children?.some((c) => isActive(c.href)) ?? false);

  const closeOffCanvas = () => {
    setOpen(false);
    setSubOpen(false);
  };

  // Next's <Link> only resets scroll on an actual route change. Clicking the
  // nav item for the page you're already on is a no-op navigation-wise, so
  // without this the page stays wherever the user had scrolled to.
  const scrollToTopIfSamePage = (href: string) => {
    if (isActive(href)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Desktop (≥1200px) — absolute overlay ─────────────────────────── */}
      <header className="absolute inset-x-0 top-0 z-40 hidden min-[1200px]:block">
        {/* Bar A — navy, 58px. The original swaps to position:fixed via JS on
            scroll; since it already sits at y=0, fixed from the start is
            visually identical and needs no script. */}
        <div className="fixed inset-x-0 top-0 z-[999] bg-navy">
          {/* px-0: the Elementor container is a flush 1200px and the 15px inset
              lives on each column, so the 45/41.333/13 split is of 1200, not 1170.
              Widened to container-bc-wide (1400) once the nav grew to 7 items —
              at 1200 the info column (fixed 45%) got squeezed by the nav's
              unshrinkable (whitespace-nowrap) content and wrapped to 2 lines. */}
          <div className="container-bc-wide flex h-[58px] items-center px-0">
            {/* Info — 45% */}
            <div className="w-[45%] px-[15px]">
              <ul className="flex items-center gap-[14px]">
                <li className="flex items-center text-[13px] text-muted">
                  <MapMarkerIcon className="mr-[0.25em] pr-px text-[12px] text-white" />
                  {site.location}
                </li>
                <li className="flex items-center text-[13px]">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center text-muted transition-colors hover:text-accent-light"
                  >
                    <EnvelopeIcon className="mr-[0.25em] pr-px text-[12px] text-white" />
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center text-[13px]">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted transition-colors hover:text-accent-light"
                  >
                    <PhoneIcon className="mr-[0.25em] pr-px text-[12px] text-white" />
                    {site.phoneArgentina.display}
                  </a>
                </li>
              </ul>
            </div>

            {/* Nav — fills the space left by Info (45%) and Social+switcher
                (auto width). Was a fixed 41.333%; freed up so the language
                switcher has room without ever overlapping the nav links. */}
            <nav className="flex-1 px-[10px]" aria-label="Principal">
              <ul className="flex items-center justify-end">
                {items.map((item, i) => {
                  const dropdownOpen = item.children !== undefined && desktopOpenHref === item.href;
                  return (
                  <li
                    key={item.href}
                    className="relative flex items-center"
                    onMouseEnter={() => item.children && setDesktopOpenHref(item.href)}
                    onMouseLeave={() =>
                      setDesktopOpenHref((h) => (h === item.href ? null : h))
                    }
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setDesktopOpenHref((h) => (h === item.href ? null : h));
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActiveEntry(item) ? "page" : undefined}
                      aria-expanded={item.children ? dropdownOpen : undefined}
                      onFocus={() => item.children && setDesktopOpenHref(item.href)}
                      onClick={() => {
                        scrollToTopIfSamePage(item.href);
                        setDesktopOpenHref(null);
                      }}
                      className={`flex items-center gap-[5px] whitespace-nowrap px-[7px] py-[13px] font-sans text-[14px] font-light leading-none transition-colors hover:text-accent-light ${
                        isActiveEntry(item) ? "text-accent-light" : "text-white"
                      }`}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDownIcon
                          className={`text-[9px] transition-transform duration-150 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {item.children && (
                      <ul
                        className={`absolute left-0 top-full z-10 w-max translate-y-[6px] rounded-[4px] bg-navy py-[6px] shadow-lg transition-[opacity,visibility] duration-150 ${
                          dropdownOpen ? "visible opacity-100" : "invisible opacity-0"
                        }`}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={isActive(child.href) ? "page" : undefined}
                              onClick={() => {
                                scrollToTopIfSamePage(child.href);
                                setDesktopOpenHref(null);
                              }}
                              className={`block whitespace-nowrap px-[16px] py-[9px] font-sans text-[14px] font-light transition-colors hover:text-accent-light ${
                                isActive(child.href) ? "text-accent-light" : "text-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {i < items.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="h-4 w-px bg-white/[0.08]"
                      />
                    )}
                  </li>
                  );
                })}
              </ul>
            </nav>

            {/* Social + language switcher — auto width, switcher immediately
                to the right of the social icons. */}
            <div className="flex shrink-0 items-center justify-end gap-[10px] px-[10px] py-[10px]">
              <div className="flex items-center">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-[10%] text-[19px] text-white transition-colors hover:bg-primary"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <span aria-hidden="true" className="h-4 w-px bg-white/[0.08]" />
              <LanguageSwitcher className="text-white" />
            </div>
          </div>
        </div>

        {/* Bar B — transparent, holds the 200x200 white logo. Scrolls away. */}
        <div className="mt-[58px]">
          <div className="container-bc px-0">
            <div className="w-1/4 px-[15px] pt-[3px]">
              <Link href={homeHref} aria-label={homeLabel} className="block">
                <Image
                  src="/images/logotipo-base-core-sales-marketing-espana-latam.png"
                  alt={site.name}
                  width={200}
                  height={200}
                  className="mx-auto h-[200px] w-[200px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile / tablet (≤1199px) — in normal flow ───────────────────── */}
      <div className="relative z-40 bg-white shadow-[0_5px_10px_0_rgba(0,0,0,0.05)] min-[1200px]:hidden">
        {/* Topbar */}
        <div className="bg-[#1b1f2e] px-[15px] py-[5px] text-[14px] text-muted">
          <div className="flex items-center justify-between gap-3">
            <div className="hidden min-[311px]:block">
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-accent-light"
              >
                {site.email}
              </a>
            </div>
            <ul className="ml-auto flex items-center gap-4">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[16px] transition-colors hover:text-accent-light"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="h-4 w-px bg-white/20" />
            <LanguageSwitcher className="text-white" />
          </div>
        </div>

        {/* Logo + hamburger */}
        <div className="px-[20px] py-[20px]">
          <div className="flex items-center justify-between">
            <Link href={homeHref} aria-label={homeLabel} className="w-1/2">
              <Image
                src="/images/logo-movil-base-core-sales.webp"
                alt={lang === "en" ? siteEn.name : site.name}
                width={2000}
                height={552}
                sizes="170px"
                className="h-auto w-full max-w-[170px]"
              />
            </Link>
            <div className="flex w-1/2 justify-end">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-[30px] text-heading"
                aria-label={openMenuLabel}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Off-canvas menu ──────────────────────────────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-50 min-[1200px]:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label={closeMenuLabel}
            onClick={() => closeOffCanvas()}
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85%] overflow-y-auto bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <Image
                src="/images/logo-movil-base-core-sales.webp"
                alt={lang === "en" ? siteEn.name : site.name}
                width={2000}
                height={552}
                sizes="150px"
                className="h-auto w-[150px]"
              />
              <button
                type="button"
                onClick={() => closeOffCanvas()}
                className="text-xl text-heading"
                aria-label={closeMenuLabel}
              >
                <CloseIcon />
              </button>
            </div>
            <ul className="divide-y divide-line/40">
              {items.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    {/* Toggle, not a Link (#7 ajustes estéticos, punto 7):
                        this row used to be a Link to item.href (here, "/venta"
                        -- the parent is just a proxy label standing in for
                        its own Preventa/Venta/Posventa children) plus a
                        separate small arrow button that actually toggled the
                        submenu. Most of the row's tap target navigated away
                        instead of expanding, so the submenu was easy to miss.
                        One full-width button now both toggles and carries
                        the visible label. */}
                    <button
                      type="button"
                      onClick={() => setSubOpen((v) => !v)}
                      aria-expanded={subOpen}
                      className={`flex w-full items-center justify-between py-3 font-sans text-[15px] ${
                        isActiveEntry(item) ? "text-primary" : "text-navy"
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`text-[11px] transition-transform duration-150 ${
                          subOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {subOpen && (
                      <ul className="ml-[10px] border-l border-line/40 pb-[6px] pl-[16px]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => {
                                closeOffCanvas();
                                scrollToTopIfSamePage(child.href);
                              }}
                              className={`block py-2 font-sans text-[14px] ${
                                isActive(child.href) ? "text-primary" : "text-body"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        closeOffCanvas();
                        scrollToTopIfSamePage(item.href);
                      }}
                      className={`block py-3 font-sans text-[15px] ${
                        isActive(item.href) ? "text-primary" : "text-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6 space-y-2 text-[14px]">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-body hover:text-primary"
              >
                <EnvelopeIcon className="text-primary" /> {site.email}
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body hover:text-primary"
              >
                <PhoneIcon className="text-primary" /> {site.phoneArgentina.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
