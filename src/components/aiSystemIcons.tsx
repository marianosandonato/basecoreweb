import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Small stroke-style icon set for the "BaseCore AI System" cajón only.
 * Deliberately different construction from `icons.tsx` (solid FontAwesome-style
 * silhouettes): these three are simple enough to hand-draw as clean line icons,
 * and a stroke style reads as more "systemic/technical" for this one section
 * without needing a whole second icon font.
 */
function strokeBase(props: IconProps): IconProps {
  return {
    width: "1em",
    height: "1em",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

/** Research capability — magnifying glass. */
export function ResearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.3" y1="15.3" x2="21" y2="21" />
    </svg>
  );
}

/** Observation capability — eye. */
export function ObservationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase(props)}>
      <path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

/** Memory capability — stacked project documents. */
export function MemoryIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase(props)}>
      <rect x="4.5" y="3.5" width="12" height="4.5" rx="1" />
      <rect x="7.5" y="9.75" width="12" height="4.5" rx="1" />
      <rect x="4.5" y="16" width="12" height="4.5" rx="1" />
    </svg>
  );
}
