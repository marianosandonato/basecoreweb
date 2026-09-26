import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Lang } from "@/lib/site";
import { site } from "@/lib/site";

/**
 * The theme's `gva_post_breadcrumb` widget.
 *
 * It renders **empty** on /preventa, /venta, /posventa and /marketing, and as a
 * full 280px hero on /contacto (#0a10a20). Hence three variants:
 *
 *   "bar"  (default) — our own compact navy strip, kept on the four pages where
 *          the original shows nothing at all. A deliberate deviation for UX/SEO,
 *          recorded in documentation/PLAN-PREVENTA.md. Relies on a dark
 *          PageHero photo rendering immediately after it — see "solid" below
 *          for pages that have none.
 *   "hero" — a faithful reproduction of the real thing, used on /contacto:
 *          280px of `breadcrumb.jpg` over #1B1F2E with no overlay, and the trail
 *          in a white tab absolutely anchored to the bottom-right corner.
 *   "solid" — same compact trail as "bar", but for pages with no hero/photo
 *          of their own at all (blog articles, /blog, the legal pages,
 *          not-found). Fix for a real bug Mariano found (26/9): from 1200px
 *          up, Header.tsx is an absolute overlay expecting a dark hero
 *          right underneath it — its 200x200 white logo (Bar B, y 61-261,
 *          see Header.tsx's own comment) sits on nothing when there's no
 *          hero, so its opaque pixels painted directly over this page's own
 *          H1/date/first H2 instead of just tinting a photo, and this same
 *          trail sat fully hidden behind Bar A (identical navy, same
 *          z-order). "solid" reserves that same 261px in real document flow
 *          with an actual navy fill, so the logo gets a proper backdrop
 *          (visible, not corrupting) and this page's content starts below
 *          it instead of underneath it. Below 1200px it's pixel-identical to
 *          "bar" (Header is in normal flow there, so neither variant has
 *          this problem to begin with).
 */
export default function Breadcrumb({
  current,
  variant = "bar",
  lang = "es",
  title,
  path,
}: {
  current: string;
  variant?: "bar" | "hero" | "solid";
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
  const homeLabel = lang === "en" ? "Home" : "Inicio";

  const breadcrumbJsonLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeLabel, item: `${site.url}${homeHref}` },
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
          fetchPriority="high"
          sizes="(max-width: 1199px) 100vw, 1200px"
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
                  {homeLabel}
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

  /** Shared by "bar" and "solid" — same trail markup either way. */
  const trail = (
    <ol className="flex items-center gap-2 font-sans text-sm text-white/80">
      <li>
        <Link href={homeHref} className="transition-colors hover:text-primary">
          {homeLabel}
        </Link>
      </li>
      <li aria-hidden>›</li>
      <li className="font-semibold text-white">{current}</li>
    </ol>
  );

  if (variant === "solid") {
    return (
      <>
        {/* <1200px: Header is in normal flow (not an overlay) at this width,
            so this has nothing to fix — pixel-identical to "bar" below. */}
        <div className="absolute inset-x-0 top-0 z-30 flex h-[58px] items-center bg-navy min-[1200px]:hidden">
          <nav aria-label="Breadcrumb" className="container-bc">
            {trail}
          </nav>
        </div>

        {/* >=1200px: real document-flow height (not absolute), so this
            pushes the page's own content down instead of letting Header's
            absolute overlay paint over it. 261px = Bar A's 58px + Bar B's
            offset/logo (58 + 3 + 200) — see Header.tsx's own comment for
            that math. Filled navy so the white logo lands on a proper
            backdrop, same as it does on every hero page, instead of on
            this page's plain background. The trail sits bottom-right,
            clear of the logo's column on the left. */}
        <div className="relative hidden bg-navy min-[1200px]:block min-[1200px]:h-[261px]">
          <nav aria-label="Breadcrumb" className="container-bc flex h-full items-end justify-end px-0 pb-[20px]">
            {trail}
          </nav>
          {jsonLdScript}
        </div>
      </>
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
          documentation/PLAN-PREVENTA.md). This variant assumes a dark
          PageHero renders right after it — see "solid" above for pages with
          no hero of their own. */}
      <nav aria-label="Breadcrumb" className="container-bc">
        {trail}
      </nav>
      {jsonLdScript}
    </div>
  );
}
