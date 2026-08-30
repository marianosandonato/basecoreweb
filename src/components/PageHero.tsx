import Image from "next/image";
import Button from "./Button";

/**
 * Inner-page hero (#7f215f0 on the cycle pages, #6be773a9 on /marketing).
 *
 * Measured on the live site and in the responsive harness:
 *
 *   height   `elementor-section-height-full` => **height: 100vh** at >=768,
 *            content-driven at <=767. It is NOT a fixed 746/690 — those numbers
 *            are just what 100vh happened to be in the browser window the
 *            desktop passes were measured in.
 *   spacer   50px, the first widget in the stack, at every width
 *   h1       Montserrat 300, 50px/59px down to 768, then 35px/42px
 *   tagline  **DM Sans 400, 18px/32.4px at every width** — not Montserrat 30/40
 *   gaps     20px between widgets (Elementor --widgets-spacing)
 *
 * Everything is centred, over the photo with a #01294B @ 14% tint.
 */
type Props = {
  title: string[];
  lines: readonly string[];
  image: string;
  cta?: { label: string; href: string };
  /** Every page uses the original's 14% tint; /tecnologia's busier AI photo
      needs a bit more to keep the title readable, so this can override it. */
  overlayOpacity?: number;
};

export default function PageHero({ title, lines, image, cta, overlayOpacity = 0.14 }: Props) {
  return (
    <section className="relative">
      {/* The LCP image on four of the six pages, so it goes through next/image
          with `priority` rather than a CSS background. Decorative -- the page's
          real heading is the h1 below -- hence the empty alt. */}
      <Image
        src={image}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#01294B]"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative flex min-h-[482px] flex-col items-center justify-center px-[15px] pb-[70px] text-center md:h-screen md:min-h-0 md:pb-0">
        {/* The 50px spacer is a widget in the original's stack, so it is part of
            what gets vertically centred rather than section padding. Below
            md, the section has no explicit height (it's md:h-screen only from
            768 up), so it shrinks to exactly the content's height — min-h-[482px]
            (measured on /preventa, the tallest of the four hero pages, whose
            3-line title+tagline naturally need that much room) makes every
            page's box that same height below md instead of each one shrinking
            to fit its own shorter text. pb-[70px] mirrors the top spacer
            (50px + 20px gap) so the button doesn't sit flush against the
            image's bottom edge. */}
        <div aria-hidden="true" className="mb-[20px] h-[50px] shrink-0" />

        <h1 className="animate-hero-title font-montserrat text-[35px] font-light leading-[42px] text-white md:text-[50px] md:leading-[59px]">
          {/* The original's h1 is one text run that re-wraps; the line breaks
              only exist because of the desktop width. So the parts flow inline
              below 1025 and become hard breaks from there up. */}
          {title.map((line, i) => (
            <span key={line} className="inline dt:block">
              {line}
              {i < title.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <div className="animate-hero-tagline mt-[20px] max-w-[859px] font-sans text-[18px] leading-[32.4px] text-white">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {cta && (
          <div className="animate-hero-button mt-[20px]">
            <Button href={cta.href} size="sm">
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
