import Image from "next/image";

/**
 * Left column of the "Qué hacemos" three-column block (preventa/venta/
 * posventa/marketing/tecnologia) — the blue, no-slogan BaseCore mark with
 * the page name underneath. Same format as the white logo+label pair on
 * the home page's "Agencia de Marketing" cajon (and TechnologyBlock), just
 * sized up 35% (140/190px mark, Sora 24/30 label -> 189/257px, Sora 32/41).
 *
 * No fixed width or side padding here: the grid track is `auto` (see the
 * three-column sections that render this), so it hugs the mark's real
 * rendered width and the row's `gap-x` is the only space before the next
 * column — the same gutter used between every other pair of columns.
 */
export default function AboutLogoBlock({
  label,
  dark = false,
}: {
  label: string;
  /** White mark + white label, for the navy/photo "Qué hacemos" treatment
      (same asset as the home page's "Agencia de Marketing" cajón). */
  dark?: boolean;
}) {
  return (
    <div className="hidden flex-col items-center gap-[16px] text-center md:flex">
      <Image
        src={
          dark
            ? "/images/base-core-logo-blanco-sin-slogan.webp"
            : "/images/base-core-logo-azul-sin-slogan.webp"
        }
        alt="Base Core"
        width={900}
        height={927}
        className="h-auto w-[189px] md:w-[257px]"
      />
      <span
        className={`font-sora text-[32px] font-extralight tracking-[2px] md:text-[41px] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
