import type { FlipCardData, FlipGridSpec } from "@/content/types";
import FlipBox from "./FlipBox";
import { CheckCircleIcon } from "./icons";

/*
 * The original never renders a 2-up flip grid at any width: it holds the full
 * desktop column count all the way down to 768 (measured — /preventa's row is
 * 520 at both 1024 and 768, /venta's 270, /marketing's 470) and stacks to a
 * single column only at <=767.
 */
const colClasses: Record<3 | 4, string> = {
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-4",
};

const cellX: Record<10 | 15, string> = { 10: "px-[10px]", 15: "px-[15px]" };
const cellY: Record<0 | 10, string> = { 0: "", 10: "py-[10px]" };

type Props = {
  cards: readonly FlipCardData[];
  grid: FlipGridSpec;
};

/**
 * The "Etapas" / "Pilares" flip-box grids.
 *
 * Every axis that differs between the four originals lives in `FlipGridSpec`
 * (see src/content/flipGrids.ts) rather than in a page-archetype name here —
 * the archetype abstraction was wrong on three pages running.
 *
 * One thing stays data-driven rather than spec-driven: the front tagline is
 * rendered whenever `card.tagline` exists. /preventa and /posventa have one,
 * /venta and /marketing do not.
 */
export default function FlipCardGrid({ cards, grid }: Props) {
  const mobileGapY = grid.mobileGapY === 15 ? "gap-y-[15px] md:gap-y-0" : "";

  return (
    <div className={`grid gap-0 ${colClasses[grid.columns]} ${mobileGapY}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${cellX[grid.cellPadding.x]} ${cellY[grid.cellPadding.y]}`}
        >
          <FlipBox
            label={card.title}
            height={grid.boxHeight}
            effect={grid.effect}
            frontImage={card.image}
            backImage={card.image}
            frontColor="transparent"
            frontOverlay={grid.frontOverlay}
            backOverlay={grid.backOverlay}
            front={
              <>
                {grid.titleFont === "gilmer" ? (
                  <h3 className="font-heading text-[21px] font-semibold leading-[21px] text-white">
                    <TitleLines title={card.title} />
                  </h3>
                ) : (
                  <h3 className="font-sora text-[21px] font-extralight leading-none text-white">
                    <TitleLines title={card.title} />
                  </h3>
                )}
                {card.tagline?.map((t) => (
                  <p
                    key={t}
                    className="mt-[20px] font-sans text-[14px] leading-[32.4px] text-white"
                  >
                    {t}
                  </p>
                ))}
              </>
            }
            back={<BackFace card={card} style={grid.backStyle} />}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Renders `title`, turning any embedded "\n" into a hard `<br />` at every
 * width (unlike PageHero's title, this break is a deliberate design choice
 * for the card, not a reproduction of the original's width-driven wrap).
 */
function TitleLines({ title }: { title: string }) {
  const lines = title.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function BackFace({
  card,
  style,
}: {
  card: FlipCardData;
  style: FlipGridSpec["backStyle"];
}) {
  if (style === "check-list") {
    return (
      <ul className="max-h-full overflow-y-auto text-left">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-[10px] font-sans text-[14px] leading-[1.6] text-white"
          >
            <CheckCircleIcon className="mt-[5px] shrink-0 text-[14px] text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (style === "description") {
    // /marketing: a single description paragraph at DM Sans 14/32.4, no title
    // repeated on the back.
    return (
      <div className="max-h-full overflow-y-auto font-sans text-[14px] leading-[32.4px] text-white">
        {card.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="max-h-full overflow-y-auto font-sans text-[14px] leading-[1.6] text-white">
      {card.items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
