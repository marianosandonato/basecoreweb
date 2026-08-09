# PLAN — `/marketing` parity

Branch: `feat/marketing`. Follows `PLAN.md`, `PLAN-HEADER.md`, `PLAN-FOOTER.md`,
`PLAN-PREVENTA.md`, `PLAN-VENTA.md`, `PLAN-POSVENTA.md` — all merged.

The original is Elementor page template **20** (`post-20.css`), `wp-page`, **11 top-level
sections**. Unlike the three cycle pages this one does *not* use `ServiceCyclePage`; our
`/marketing` is a bespoke `page.tsx` that was written before the home-page parity pass and
still uses the pre-parity components and `mx-auto max-w-7xl px-4` containers.

**This is a bigger job than `/venta` or `/posventa`.** Those inherited a corrected shared
component and only needed their inputs fixed. This page has to be rebuilt section by section,
and it introduces a flip-box shape and a widget (counters) that do not exist anywhere else.

All values below measured on the live DOM at viewport **1463** unless stated.

---

## Section map

| # | Elementor id | What it is | Width | y | Height | Padding / margin | Background |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `#31a24d1` | Breadcrumb (renders **empty**) | full | 0 | 1 | — | — |
| 2 | `#6be773a9` | Hero | full | 1 | **690** | — | `marketing-slide-base-core-sales.jpg`, `#01294B` @ 0.14 |
| 3 | `#9b0a6dc` | "AGENCIA DE MARKETING / Pilares comunicacionales" | boxed | 791 | 141 | `margin-top: 100px` | — |
| 4 | `#fd651a4` | Flip boxes, **row 1 of 4** | boxed | 972 | 430 | `margin: 40px 0 24px` | — |
| 5 | `#e8a47dc` | Flip boxes, **row 2 of 4** | boxed | 1426 | 430 | `margin: 0 0 100px` | — |
| 6 | `#931c3da` | "Concepto como Servicio" | boxed | 1956 | 533 | `110px 0 100px` | **none** + `#00294B` @ 0.9 |
| 7 | `#dc71230` | "NaN" + 3 counters | boxed **1400** | 2489 | 1056 | `115px 0` | `Project-Management-Base-Core-Sales.jpeg`, fixed ≥1025 |
| 8 | `#afebda8` | "Proceso" banner | boxed | 3546 | 358 | `100px 0` | `#00294B` + `bg-shape-1.png` (repeat) |
| 9 | `#3df3f2d` | "Hacemos crecer tu negocio" | boxed **1400** | 3904 | 689 | `115px 0` | `Base-Core-Sales-estrategia-tecnologia.jpeg`, fixed ≥1025 |
| 10 | `#37326c4` | "¿Qué esperas para contactarnos?" | boxed | 4593 | 393 | `150px 0 90px` | `#00294BED` + `footer-base-core-sales.jpg` (repeat-x, scroll) |
| 11 | `#437d5e49` | Contacto | boxed | 4986 | 886 | `120px 0` | `bg-5.jpg`, white @ 0.97 |

Total content height **5872**.

Note sections 3–5 carry their spacing as **section margins**, not padding — the 100px above
the heading and the 100px below the second flip row are `margin-top` / `margin-bottom` on the
sections themselves. Given the margin-collapse bugs this project has already hit twice,
these become explicit spacer elements or flex gaps, not margins.

---

## The flip boxes are a **fourth** distinct shape — and a different effect

This is the finding that matters most. Across four pages the original now varies every
dimension:

| | `/preventa` | `/venta` | `/posventa` | **`/marketing`** |
| --- | --- | --- | --- | --- |
| Section | full-width | boxed | boxed | **boxed** |
| Grid | 4 × 1 | 3 × 3 | 3 × 1 | **4 × 2** |
| Box | 342 × 500 | 380 × 250 | 380 × 400 | **270 × 430** |
| Cell padding | 10px | 10px | 10px | **15px** |
| x positions | 10/372/734/1096 | 134/534/934 | 134/534/934 | **139/439/739/1039** |
| Effect | `zoom-in` | `zoom-in` | `zoom-in` | **`slide` / `direction-up`** |
| Title font | Sora 21 w200 | Sora 21 w200 | Sora 21 w200 | **Gilmer 21/21 w600** |
| Front | title + tagline | title | title + tagline | **title only** |
| Back | check-icon list | plain lines | plain lines | **single description** |
| Front tint | `rgba(0,0,0,0.47)` | `rgba(0,0,0,0.49)` | `rgba(0,0,0,0.47)` | **`rgba(0,0,0,0.48)`** |
| Back tint | `rgba(0,41,75,0.83)` | `rgba(0,41,75,0.84)` | `rgba(0,41,75,0.83)` | **`rgba(0,41,75,0.95)`** |

Three things are genuinely new, not just new numbers:

1. **The effect is `slide`, not `zoom-in`.** From `widget-flip-box.min.css`: the back layer
   starts at `transform: translateY(100%)` and animates to `none`; the front layer does *not*
   move (only the `push` effect moves the front). `overflow: hidden` on the box. Transition is
   `all .6s ease-in-out` on `.elementor-flip-box__layer`. Our `FlipBox` only implements
   `zoom-in`.
2. **The title is Gilmer 21px/21px weight 600**, margin `15px 0 20px` — the *home page's*
   Metodología styling, not the cycle pages' Sora 200.
3. **Cell padding is 15px**, not 10px: 1200 / 4 = 300 columns, minus 15px each side = 270.

### Consequence: `variant` has to be split

This is exactly the risk flagged in the `/posventa` commit. `FlipCardGrid`'s `variant`
(`"full" | "boxed"`) currently encodes *page archetype* and has been wrong or insufficient on
every page since: `/venta` needed a second variant, `/posventa` needed `boxHeight` bolted on,
and `/marketing` now varies four more axes independently. Adding a fourth knob is no longer
defensible.

**Replace `variant` with explicit orthogonal props:**

```ts
type FlipGridSpec = {
  layout: "full" | "boxed";   // viewport-spanning vs 1200px container
  columns: 3 | 4;
  boxWidth: number;           // derived, but asserted in tests/measurement
  boxHeight: number;
  cellPadding: 10 | 15;
  effect: "zoom-in" | "slide-up";
  titleFont: "sora" | "gilmer";
  frontOverlay: string;
  backOverlay: string;
  backStyle: "check-list" | "lines" | "description";
};
```

The three existing pages keep their current rendering by construction — each gets a spec
object that spells out what `variant` used to imply. This is a refactor of merged, verified
code, so **every one of `/preventa`, `/venta`, `/posventa` must be re-measured afterwards**,
not just `/marketing`.

---

## Section detail

### 2 — Hero `#6be773a9`

Same component as the cycle pages' `PageHero`, three differences:

| | Cycle pages | `/marketing` |
| --- | --- | --- |
| Height | 746 | **690** |
| Overlay | `#01294B` @ 0.14 | same |
| Content width | — | 859px, centred (x=290) |

50px spacer, `h1` Montserrat **50px / 59px weight 300** white centred, subtitle heading,
button "AUDITORÍA GRATIS" Gilmer 16/500, `padding: 15px 30px` (the `sm` size), 241 × 46.
`PageHero` needs a `height` prop.

### 3 — Pilares heading `#9b0a6dc`

Standard `gsc-heading`, centred, `content-inner` 800px wide (x=324):
dashes + `.sub-title` "AGENCIA DE MARKETING" DM Sans 14/30 w500 `#7A838B`
+ `h2.title` Gilmer **45px / 58.5px** w700 `#1B1F2E`. No description.

### 6 — Concepto como Servicio `#931c3da`

Boxed 1200, single column, padding `110px 0 100px` (`80px 0 70px` ≤1024).

**Correction to the current replica:** there is **no background image** —
`background-image: none`, `background-color: transparent`. The only paint is the overlay
`#00294B` at opacity **0.9** over the page's white body. Our replica puts
`Base-Core-Sales-estrategia-tecnologia.jpeg` here; that image actually belongs to section 9.
The `bg-attachment: fixed` rule at ≥1025px is present but moot with no image.

Content, centred, `content-inner` 900px (x=274), **no `.heading-line` dashes** on this one:
`.sub-title` "NOT-A NUMB3R" DM Sans 14/30 w500 `#7A838B` (stays grey on the dark panel) →
`h2.title` Gilmer **60px / 68px** w700 **white** → `.title-desc` DM Sans 18px / 32.4px
`#D7D7D7`, `padding-top: 20px` → `.heading-action`, `margin-top: 30px`.

> **Corrected mid-implementation.** An earlier draft of this plan said this section has no
> button, because a `.elementor-button` query returned nothing. It does have one: "HAGAMOS
> NEGOCIOS" → `https://not-a-numb3r.com/`, rendered as a `.heading-action` **inside the
> heading widget's `content-inner`**, not as a sibling widget. It is the theme's
> `btn-cta.btn-theme`: Gilmer 14px/700, `ls 2px`, uppercase, `padding: 18px 30px`, square,
> `#0787D9`, 244 × 58. So the replica's existing button was right all along and is kept.
> This is the same styling as the cycle pages' next-cycle CTA, so both now share `SquareCta`.

### 7 — NaN + counters `#dc71230`

Container `max-width: 1400px` (not 1200). Three columns: **140 spacer / 560 content / 695
empty** — the right 695 is empty so the background photo reads through. Padding `115px 0`
(`65px 0 35px` ≤1024), `Project-Management-Base-Core-Sales.jpeg`, `bg-fixed` ≥1025,
`background-position: center left` ≤767. No overlay.

Content column (x=164, 560 wide): `gva-heading-block` 530 × 335 — "NOSOTROS" / "NaN" /
description — then **three counters side by side**, 157 × 160 at x=189 / 366 / 543 (20px gap).

Counter anatomy (`.milestone-block.style-1`):

| Part | Spec |
| --- | --- |
| Icon | **60px**, `#0787D9` |
| Number | DM Sans **35px / 32.4px weight 700** `#1B1F2E`, value `100` |
| Symbol | same style, `%`, in a separate span after the number |
| Label | DM Sans **16px / 24px weight 500** `#1B1F2E` |

Icons, all to be extracted as inline SVG per the project's existing approach:

| Counter | Class | Font | Codepoint |
| --- | --- | --- | --- |
| Brand | `icon-conult-customer-review` | icomoon | U+E90C |
| Content | `flaticon-contact` | flaticon | U+F133 |
| Adds | `icon-conult-report` | icomoon | U+E915 |

**Two deliberate deviations here — both confirmed with the client:**

1. **The original prints a raw PHP warning inside each counter.**
   `Warning: Undefined array key "desc_text" in /var/www/.../conult-themer/elementor/views/general/counter.php on line 12`
   renders as visible text above every milestone block, inflating each counter from 160px to
   **451px** and the whole section to 1056px. **We omit it.** Consequence to record: with
   clean counters this section will measure roughly **660px against the original's 1056px**,
   so its height delta is expected and is *not* a parity signal. Every other section's delta
   still is.
2. **`flaticon-contact` is broken on the original.** Its computed `font-family` is
   `"DM Sans", sans-serif` rather than `flaticon`, so U+F133 renders as a missing-glyph box
   while its two icomoon neighbours render correctly. **We render the intended glyph**,
   extracted from `flaticon.woff` at 60px `#0787D9` to match the neighbours.

### 8 — Proceso banner `#afebda8`

Boxed 1200, padding `100px 0` (`60px 0` ≤1024).
Background **`#00294B` + `bg-shape-1.png` repeating** (`background-repeat: repeat`) — our
replica uses `Project-Management-Base-Core-Sales.jpeg` at 80% navy, which belongs to section 7.

Two columns, **780 (x=124) / 420 (x=904)**:
- left: heading block 750 × 158, **text-align centre** — `.sub-title` "Proceso" DM Sans
  **18px** / 30px w500 white, `margin-bottom: 8px`; `h2.title` Gilmer **40px / 52px** w700 white.
- right: button "CONTACTANOS" 390 × 52.

### 9 — Hacemos crecer tu negocio `#3df3f2d`

Same 1400 container and 140 / 560 / 695 three-column shape as section 7, padding `115px 0`,
background `Base-Core-Sales-estrategia-tecnologia.jpeg`, `bg-fixed` ≥1025, no overlay.

Content **left-aligned** in the 560 column (widget 530 at x=179):
`.sub-title` "BASE CORE SALES" → `h2.title` Gilmer **45px / 58.5px** w700 `#1B1F2E` →
`.title-desc` DM Sans 18 / 32.4 `#7A838B`, `padding-top: 20px`.

Our replica centres this on a flat `bg-soft` panel and merges section 10 into it. Both wrong.

### 10 — ¿Qué esperas para contactarnos? `#37326c4`

Its own section, padding `150px 0 90px` (`160px 0 40px` ≤1024, `70px 0 20px` ≤767).
Background `#00294BED` + `footer-base-core-sales.jpg`, `background-repeat: repeat-x`,
**`background-attachment: scroll`** at ≥1025 (explicitly *not* fixed, unlike 7 and 9).

Boxed 1200, single column, centred, `content-inner` 800 (x=324):
`.sub-title` "BASE CORE SALES" DM Sans 14/30 w500 **white** → `h3.title` Gilmer
**40px / 52px** w700 white. Note this title is an **`h3`**.

The section also contains an empty `gva-posts` widget contributing 20px of widget spacing.
Height checks out: 150 + 113 + 20 + 20 + 90 = 393. We reproduce the 20px as spacing, not as
an empty widget.

### 11 — Contacto `#437d5e49`

Identical to the cycle pages: `bg-5.jpg`, white @ 0.97, padding `120px 0`, columns vertically
centred. Reuse `ContactSection`'s inner-page variant. Title level to be confirmed by
measurement — the cycle pages split `h3` (`/preventa`) vs `h2` (`/venta`, `/posventa`).

---

## Content

The eight `pilares` in the current `page.tsx` are **already correct** — titles, images and
descriptions all match the original, in order. No content changes needed there.

The counters' values (`100% Brand / Content / Adds`) are also correct; they only need the
icons and the real typography.

---

## Work items

- [x] Split `FlipCardGrid`'s `variant` into an explicit spec (layout, columns, boxHeight,
      cellPadding, effect, titleFont, overlays, backStyle) — `FlipGridSpec` in `types.ts`,
      the four instances in `src/content/flipGrids.ts`.
- [x] `FlipBox`: add the `slide-up` effect (`translateY(100%) → none`, `.6s ease-in-out`,
      `overflow: hidden`, front stationary).
- [x] Re-measure `/preventa`, `/venta`, `/posventa` after the refactor.
- [x] Extract 3 counter glyphs (U+E90C, U+F133, U+E915) as inline SVG; confirmed on a temp
      page under `public/`, since deleted.
- [x] New `Counters` component (`milestone-block.style-1`).
- [x] `PageHero`: `height` prop (690 here vs 746).
- [x] Rebuild `marketing/page.tsx`: 11 sections, correct backgrounds, `container-bc-wide`
      for sections 7 and 9.
- [x] Split section 10 out of section 9.
- [x] Verify geometry at 1463.
- [x] `npm run build` + `npx eslint`.
- [ ] Verify 1024 / 768 / 390px.

## Result — section heights vs the original (viewport 1463)

| Section | Original | Replica | Δ |
| --- | --- | --- | --- |
| Hero | 690 | **690** | 0 |
| Spacer | 100 | **100** | 0 |
| Pilares heading | 141 | **141** | 0 |
| Flip row 1 | 470 | **470** | 0 |
| Flip row 2 | 454 | **454** | 0 |
| Spacer | 100 | **100** | 0 |
| Concepto como Servicio | 533 | **533** | 0 |
| NaN + counters | 1056 | 745 | −311 † |
| Proceso | 358 | **358** | 0 |
| Hacemos crecer | 689 | 688 | −1 |
| ¿Qué esperas? | 393 | **393** | 0 |
| Contacto | 886 | 868 | −18 ‡ |

**Flip boxes are pixel-identical: 270 × 430 at x=139 / 439 / 739 / 1039, eight of them**,
and the `slide` effect verified: back layer rests at `translateY(100%)`, computes to
`translateY(0)` under a real hover, `.6s ease-in-out`, front stationary, `overflow: hidden`.

† **Expected and by design.** The original's three counters are 451px tall instead of 160
because each prints a PHP warning; dropping it removes 291px, so the like-for-like figure is
765 vs our 745. The remaining −20 is Elementor wrapper padding, in line with every other page.

‡ The Contacto section is −18 on all four inner pages — a pre-existing, consistent
padding nuance in `ContactSection`, not something this page introduced.

Nine of the eleven sections are exact. Three defects were found and fixed by measuring
rather than by reading:

1. **`PageHero`'s new height prop did nothing.** It was implemented as a `.page-hero-body`
   rule in `@layer components`, which Tailwind's `md:min-h-[560px]` utility outranks — the
   hero rendered 560 instead of 690. Now an `xl:min-h-[var(--page-hero-h)]` utility.
2. **The zoom-in flip rules bled onto the slide-up boxes** through a specificity tie. Both
   effects are now scoped explicitly (`.flip-box:not(.flip-box--slide-up)`).
3. **Margin collapse** between the NaN heading's 16px `margin-bottom` and the counters' 20px
   `margin-top` swallowed 16px. The column is now `flex flex-col`. This is the third
   margin-collapse bug in the project; flex gaps really are the right default here.

Also worth recording: `.gsc-heading` carries a per-section `margin-bottom` (16px on
`#9b0a6dc` / `#dc71230` / `#3df3f2d`, 20px on `#931c3da`, 15px on `#37326c4`, 0 on
`#afebda8`), and `.title-desc` uses `padding-top: 20px` throughout this page rather than the
25px our `SectionHeading` defaults to at `lg`. Those two account for most of the initial gaps.

## Resolved questions

1. **Contacto title level** — measured: **`h2`**, same as `/venta` and `/posventa`.
2. **The 1400px container** — added as `.container-bc-wide`; only sections 7 and 9 use it.

## Note on the sibling plans' result tables

`PLAN-PREVENTA.md` and `PLAN-VENTA.md` record Puestos at 783 and the next-cycle CTA at 421
for `/preventa`. Measured on the committed tree before any of this work, those sections are
**803** and **451**. The plan tables are stale — later commits moved them closer to the
original and the tables were never updated. Recorded here rather than rewritten there, since
those numbers are the historical record of when they were taken.

## Deviations from the original, recorded

| # | Original behaviour | What we do | Why |
| --- | --- | --- | --- |
| 1 | PHP warning printed in all 3 counters | Omitted | Confirmed with client. Section 7 measures 745 vs 1056 as a result (765 like-for-like) |
| 2 | `flaticon-contact` renders as a tofu box | Render the intended glyph | Confirmed with client |
| 3 | Breadcrumb widget renders empty (1px) | Real breadcrumb | Same decision as every other inner page |

## After this page

1. `/contacto` — the last page.
2. **Responsive has never been diffed against the originals.** Every page, including this
   one, verified at 1463 only. Still the largest open risk.
3. Pre-deploy: `woff2` conversion, hero backgrounds to `next/image`, Lighthouse.
4. A Playwright screenshot-diff harness would now be paying for itself — this page alone
   found three misassigned backgrounds and a phantom button by manual inspection.
