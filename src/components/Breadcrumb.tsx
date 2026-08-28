import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Lang } from "@/lib/site";
import { site } from "@/lib/site";

/**
 * The theme's `gva_post_breadcrumb` widget.
 *
 * It renders **empty** on /preventa, /venta, /posventa and /marketing, and as a
 * full 280px hero on /contacto (#0a10a20). Hence two variants:
 *
 *   "bar"  (default) — our own compact navy strip, kept on the four pages where
 *          the original shows nothing at all. A deliberate deviation for UX/SEO,
 *          recorded in documentation/PLAN-PREVENTA.md.
 *   "hero" — a faithful reproduction of the real thing, used on /contacto:
 *          280px of `breadcrumb.jpg` over #1B1F2E with no overlay, and the trail
 *          in a white tab absolutely anchored to the bottom-right corner.
 */
export default function Breadcrumb({
  current,
  variant = "bar",
  lang = "es",
  title,
  path,
}: {
  current: string;
  variant?: "bar" | "hero";
  lang?: Lang;
  /** Only used by the "hero" variant — grows the box to fit a headline
      above the corner trail tab (/ebook). /contacto passes none, so its
      280px box is untouched. */
  title?: ReactNode;
  /** This page's own canonical path (e.g. "/preventa"), for the BreadcrumbList
      schema below. Omit on pages with no indexable canonical of their own
      (e.g. not-found.tsx) to skip the schema entirely. */
  path?: string;
}) {
  const homeHref = lang === "en" ? "/en" : "/";

  const breadcrumbJsonLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}${homeHref}` },
          { "@type": "ListItem", position: 2, name: current, item: `${site.url}${path}` },
        ],
      }
    : null;

  const jsonLdScript = breadcrumbJsonLd ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  ) : null;

  if (variant === "hero") {
    return (
      <div className="relative bg-heading">
        {/* LCP image on /contacto and /ebook. */}
        <Image
          src="/images/breadcrumb.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* .container is 1200 with 12px padding; the inner is padded 160/0/120
            and is the positioning context for the corner tab. When `title` is
            given, the extra in-flow text before the (still absolutely
            positioned) tab grows the nav's height to fit it — /contacto's
            280px stays exact since it renders nothing there. */}
        <div className="relative mx-auto w-full max-w-[1200px] px-[12px]">
          <nav
            aria-label="Breadcrumb"
            className={`relative pb-[120px] pt-[160px] ${title ? "dt:pt-[300px]" : ""}`}
          >
            {/* dt:pt-[300px]: from 1025 up, Header overlays this box with a
                transparent zone holding the 200x200 logo (top 61-261px) — the
                extra top padding clears it so the title text doesn't run
                under the tree. Below dt the header is in normal flow (not
                overlaid), so the base 160px is enough. */}
            {title && (
              <p className="max-w-[820px] pb-[40px] font-heading text-[22px] font-bold leading-[32px] text-white md:text-[28px] md:leading-[40px] dt:text-[32px] dt:leading-[44px]">
                {title}
              </p>
            )}
            <ol className="flex items-center rounded-t-[10px] bg-white px-[25px] pb-[22px] pt-[25px] absolute bottom-0 right-0 font-sans text-[15px] font-bold leading-[15px]">
              <li className="px-[10px]">
                <Link href={homeHref} className="text-heading transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              {/* The separator sits inside the 20px the two items' padding
                  already leaves between them, so it adds no width — the whole
                  list is 202px wide on the original. */}
              <li className="relative px-[10px] text-primary before:absolute before:-left-[3px] before:text-[#CCCCCC] before:content-['/']">
                {current}
              </li>
            </ol>
          </nav>
        </div>
        {jsonLdScript}
      </div>
    );
  }

  return (
    <div className="absolute inset-x-0 top-0 z-30 flex h-[58px] items-center bg-navy">
      {/* Flat navy, no photo texture, and taken out of flow (absolute, like
          Header itself): this strip lives inside the header's transparent
          zone (Bar B), on top of the hero photo. Three bugs in one fixed
          here: a flat fill matching Bar A's solid #00294b (else the seam
          between "solid navy" and "navy + photo" shows as a visible line);
          `absolute` so it doesn't push the hero section down (in flow it
          added ~68px the home page's hero never has); and a height pinned to
          Bar A's own 58px (was ~68px via `py-6`) so this strip sits exactly
          behind Bar A with none of it poking into Bar B's transparent zone —
          otherwise the visible navy band above the hero photo ends up 10px
          taller than home's. The original's breadcrumb widget renders empty
          on these pages; ours is kept deliberately for UX/SEO (see
          documentation/PLAN-PREVENTA.md). */}
      <nav aria-label="Breadcrumb" className="container-bc">
        <ol className="flex items-center gap-2 text-sm text-white/80">
          <li>
            <Link href={homeHref} className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="font-semibold text-white">{current}</li>
        </ol>
      </nav>
      {jsonLdScript}
    </div>
  );
}
