import Image from "next/image";

/**
 * Theme `gsc-image-content.skin-v5` — the layered image composition in the
 * "Proceso como servicio" section (#4eb85df).
 *
 * Shrunk to a 320px-wide box (57% of the original 560px) for the section's
 * three-column layout — every fixed offset below is scaled by that same
 * factor so the composition keeps its original proportions:
 *   .image         image-15.jpg, top-left, max-width calc(100% - 97px), padding-bottom 60px
 *   .image-second  Process-as-a-Service.jpg, absolute bottom-right, 211px wide
 *   .line-2        3x43px primary bar, bottom-left of .image-second (left: -21px)
 *   .line-1        103x114px outlined rectangle, top: -29px / right: 57px, 3px primary border
 *
 * Both photos scale to 1.1 over 5s on hover.
 */
export default function ProcessImageStack() {
  return (
    <div className="relative mx-auto mb-[30px] w-full max-w-[320px] text-center">
      {/* .line-1 — outlined rectangle */}
      <span
        aria-hidden="true"
        className="absolute right-[57px] top-[-29px] z-[6] h-[114px] w-[103px] border-[3px] border-solid border-primary"
      />

      {/* .image */}
      <div className="relative z-[11] max-w-[calc(100%-97px)] overflow-hidden pb-[60px]">
        <Image
          src="/images/image-15.jpg"
          alt="Equipo de Base Core en reunión de trabajo"
          width={640}
          height={485}
          sizes="(max-width: 1024px) 30vw, 220px"
          className="h-auto w-full transition-transform duration-[5s] hover:scale-110"
        />
      </div>

      {/* .image-second */}
      <div className="absolute bottom-0 right-0 z-[11] w-[211px] max-w-[calc(100%-97px)]">
        {/* .line-2 — blue bar */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[-21px] z-[1] h-[43px] w-[3px] bg-primary"
        />
        <div className="overflow-hidden">
          <Image
            src="/images/Process-as-a-Service.jpg"
            alt="Proceso como servicio"
            width={850}
            height={567}
            sizes="(max-width: 1024px) 30vw, 211px"
            className="h-auto w-full transition-transform duration-[5s] hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
