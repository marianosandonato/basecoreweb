import Image from "next/image";

/**
 * Left column of the "Qué hacemos" three-column block (preventa/venta/
 * posventa/marketing/tecnologia) — the blue, no-slogan BaseCore mark with
 * the page name underneath. Same format as the white logo+label pair on
 * the home page's "Agencia de Marketing" cajon (and TechnologyBlock), just
 * sized up 35% (140/190px mark, Sora 24/30 label -> 189/257px, Sora 32/41).
 *
 * `justify-self-start` keeps the (internally centered) mark+label unit
 * flush against the grid's own left padding instead of centering inside
 * the whole 340px track — centering there read as a stray left margin.
 */
export default function AboutLogoBlock({ label }: { label: string }) {
  return (
    <div className="hidden w-fit flex-col items-center gap-[16px] justify-self-start px-[15px] text-center md:flex">
      <Image
        src="/images/base-core-logo-azul-sin-slogan.webp"
        alt="Base Core"
        width={900}
        height={927}
        className="h-auto w-[189px] md:w-[257px]"
      />
      <span className="font-sora text-[32px] font-extralight tracking-[2px] text-navy md:text-[41px]">
        {label}
      </span>
    </div>
  );
}
