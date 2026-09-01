import Image from "next/image";

/**
 * Laptop mockup (asset from Mariano) with the real BaseHub dashboard shown
 * inside it — used on /basehub between "Cómo funciona" and the feature grid.
 *
 * The mockup's "screen" is an opaque light-grey fill, not a transparent
 * cutout, so the frame paints first and the screenshot paints on top,
 * clipped to the screen's measured rect (119,39)-(708,373) of the 829x427
 * asset. The screenshot (2559x1388) is proportionally wider than that rect
 * (1.844 vs 1.763), so it's fit with `object-contain` rather than `cover`:
 * `cover` would center-crop ~56px off each side, slicing straight through
 * the "BaseHub" wordmark on the left and the "Salir" button on the right of
 * the real header — checked with a direct pixel composite before choosing
 * this over cropping. `contain` leaves a ~7px sliver of the screen's own
 * light-grey fill at top/bottom instead, which is imperceptible next to the
 * screenshot's own near-white background.
 */
const SCREEN = {
  left: `${((119 / 829) * 100).toFixed(4)}%`,
  top: `${((39 / 427) * 100).toFixed(4)}%`,
  width: `${((589 / 829) * 100).toFixed(4)}%`,
  height: `${((334 / 427) * 100).toFixed(4)}%`,
};

export default function BaseHubMockup({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[760px] ${className}`} style={{ aspectRatio: "829 / 427" }}>
      <Image
        src="/images/basehub-mockup.png"
        alt=""
        fill
        sizes="(min-width: 1200px) 760px, 90vw"
        className="object-contain"
      />
      <div className="absolute overflow-hidden" style={SCREEN}>
        <Image
          src="/images/basehub-dashboard.webp"
          alt={alt}
          fill
          sizes="(min-width: 1200px) 540px, 65vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
