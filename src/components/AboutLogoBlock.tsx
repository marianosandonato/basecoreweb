import Image from "next/image";

/**
 * Left column of the "Qué hacemos" three-column block (preventa/venta/
 * posventa/marketing/tecnologia) — the blue, no-slogan BaseCore mark with
 * the page name underneath, styled like the white logo+label pair in
 * TechnologyBlock. Replaces the old ProcessImageStack composition.
 */
export default function AboutLogoBlock({ label }: { label: string }) {
  return (
    <div className="hidden flex-col items-center gap-[16px] px-[15px] text-center md:flex">
      <Image
        src="/images/base-core-logo-azul-sin-slogan.webp"
        alt="Base Core"
        width={900}
        height={750}
        className="h-auto w-[140px] md:w-[170px]"
      />
      <span className="font-sora text-[22px] font-extralight tracking-[2px] text-navy md:text-[26px]">
        {label}
      </span>
    </div>
  );
}
