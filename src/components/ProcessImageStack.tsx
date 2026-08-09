import Image from "next/image";

/**
 * Theme `gsc-image-content.skin-v5` — the layered image composition in the
 * "Proceso como servicio" section (#4eb85df).
 *
 * Four pieces inside a 560px-wide relative box:
 *   .image         image-15.jpg, top-left, max-width calc(100% - 170px), padding-bottom 105px
 *   .image-second  Process-as-a-Service.jpg, absolute bottom-right, 370px wide
 *   .line-2        6x75px primary bar, bottom-left of .image-second (left: -36px)
 *   .line-1        180x200px outlined rectangle, top: -50px / right: 100px, 5px primary border
 *
 * Both photos scale to 1.1 over 5s on hover.
 */
export default function ProcessImageStack() {
  return (
    <div className="relative mx-auto mb-[30px] w-full max-w-[560px] text-center">
      {/* .line-1 — outlined rectangle */}
      <span
        aria-hidden="true"
        className="absolute right-[100px] top-[-50px] z-[6] h-[200px] w-[180px] border-[5px] border-solid border-primary"
      />

      {/* .image */}
      <div className="relative z-[11] max-w-[calc(100%-170px)] overflow-hidden pb-[105px]">
        <Image
          src="/images/image-15.jpg"
          alt="Equipo de Base Core en reunión de trabajo"
          width={640}
          height={485}
          sizes="(max-width: 1024px) 50vw, 390px"
          className="h-auto w-full transition-transform duration-[5s] hover:scale-110"
        />
      </div>

      {/* .image-second */}
      <div className="absolute bottom-0 right-0 z-[11] w-[370px] max-w-[calc(100%-170px)]">
        {/* .line-2 — blue bar */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[-36px] z-[1] h-[75px] w-[6px] bg-primary"
        />
        <div className="overflow-hidden">
          <Image
            src="/images/Process-as-a-Service.jpg"
            alt="Proceso como servicio"
            width={850}
            height={567}
            sizes="(max-width: 1024px) 50vw, 370px"
            className="h-auto w-full transition-transform duration-[5s] hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
