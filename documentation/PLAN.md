# PLAN — Home page pixel parity (`/`)

Goal: make `http://localhost:3000/` an exact visual replica of `https://basecoresales.com/`.

**Scope of this document: the home page only.** Header, Footer, WhatsApp button and the
inner pages (`/preventa`, `/venta`, `/posventa`, `/marketing`, `/contacto`) are deliberately
out of scope here and will get their own plans. Note however that the **Global foundations**
(fonts, colors, container width, type scale) in Part 0 are site-wide and will change every
page once applied.

---

## Reference sources used

| Source | What was taken from it |
| --- | --- |
| `https://basecoresales.com/` (live DOM + computed styles) | Ground-truth typography, colors, box metrics |
| `wp-content/uploads/elementor/css/post-1369.css` | Per-section padding, overlays, background images, breakpoints |
| `wp-content/uploads/elementor/css/post-22.css` | Elementor global kit: palette + 1200px container |
| `themes/conult/assets/css/template.css` | Theme widget CSS (`gsc-heading`, `gsc-image-content`, `service-item.style-2`), `@font-face` for Gilmer / reey |
| `plugins/elementor-pro/assets/css/widget-flip-box.min.css` | Flip-box `zoom-in` effect |
| Revolution Slider markup in the page source | Hero geometry, layer order, animation timings |

Elementor element IDs are quoted (e.g. `#3b58066`) so any value can be re-verified against
`post-1369.css`.

---

## Status legend

- ✅ **Done** — matches the original
- 🟡 **Partial** — present but visually off
- ❌ **Missing / wrong** — needs to be built or rebuilt

---

## Summary

**All home-page work in this document is implemented.** The sections below keep the
original spec so every value stays traceable; the status column records the result.

| # | Section | Status | How it was checked |
| --- | --- | --- | --- |
| 0 | Global foundations (fonts, colors, container, type scale) | ✅ | **Measured** — computed styles diffed against the live DOM |
| 1 | Hero slider | ✅ | **Measured** — title at `left:154 top:349`, 880px tall, exact |
| 2 | Nosotros — Proceso como servicio | ✅ | **Measured** — title on one line via the 112.132% widget width |
| 3 | Metodología (flip boxes) | ✅ | **Measured** — boxes at x=134/434/734/1034, 280×375, exact |
| 4 | Ciclos de Venta | ✅ | **Measured** — cards at x=139/539/939, 370×386 (±1px) |
| 5 | Partner Estratégico (Not-a-Numb3r) | ✅ | *Visual only* — 50/50 split, Montserrat-200 eyebrow |
| 6 | Recruiting | ✅ | *Visual only* — no overlay, dark text on the light half |
| 7 | E-Book CTA | ✅ | *Visual only* — navy 82% overlay, centred stack |
| 8 | Contacto | ✅ | *Visual only*, except the 4px blue top border (measured) |

`npm run build`, `tsc --noEmit` and `eslint` all pass.

**Hover states verified** (Elementor `zoom-in` flip and the Ciclos hover layer both behave
like the original). This pass found two real defects, now fixed:

- The Ciclos content box's 30px bottom margin was **collapsing out** of the article (353px
  instead of 386px), so the hover layer — `height: calc(100% - 30px)` — stopped short and
  left a strip of the white box visible. `overflow-hidden` on the article fixes it, which is
  exactly what `.gsc-services-group .service-item` does on the original.
- The card icon needed a 60px box, not 58: the original's `<i>` line box is 58×60 and those
  2px are part of the 116px content-box height.

### Known limits of the verification so far

Worth being explicit, because "✅" above does not mean equally well proven:

- **Responsive was never diffed against the original.** Layout was confirmed sane at 1449 /
  1024 / 768 / 390px, but only against itself. The responsive values were read out of
  `post-1369.css`, not measured on the live site at those widths. This is the largest
  remaining correctness risk in work already marked done.
- **Sections 5–8 were eyeballed, not measured.** Their paddings and heights have not been
  numerically compared.
- **Chrome only.** No Safari/Firefox pass. `background-attachment: fixed` (Metodología,
  Recruiting, E-Book) is a known iOS Safari failure mode; it is gated to `lg+`, which still
  includes iPads.
- **No automated regression net.** Every check has been manual browser driving.

### Still outstanding

- **Header** — the one genuine gap left on the home page. See "Remaining work" at the end.
- Footer and the inner pages, as originally scoped out.
- Deployability items never in this plan's scope: five sections use CSS `background-image`
  and so bypass `next/image` (no optimization, no LCP preload on the hero); Gilmer ships as
  `woff` only because the WP theme has no `woff2`, costing roughly 30% in font bytes.

### Already correct — do not change

- Section order, all copy (Spanish text) and all image assets are correct.
- All 8 sections exist and are responsive.
- Contact form fields, `POST /api/contact`, Resend integration.
- Routes, redirects (`/presales` → `/preventa`, …), sitemap, robots, metadata.
- WhatsApp floating button.

### Two corrections to the original analysis

1. **Inner-section grids span the full 1200px container**, not the 1170px content box.
   Measured on the original: flip boxes sit at x=134 (1200/4 = 300 columns, 10px cell
   padding → 280px); Ciclos cards at x=139 (1200/3 = 400 columns, 15px padding → 370px).
   Both grids therefore use `container-bc px-0`.
2. **Tailwind v4 cascade layers.** Base element styles written outside `@layer` beat every
   layered utility regardless of specificity, which silently turned the white hero headline
   dark. All custom CSS now lives in `@layer base` / `@layer components`.

---

## Part 0 — Global foundations (do this first)

Everything below depends on these. Fixing sections before this will produce work that has to
be redone.

### 0.1 ❌ Missing fonts: **Gilmer** and **reey**

The site does **not** use Montserrat/Roboto for headings and body. It uses two self-hosted
custom fonts that are currently absent from the replica.

| Role | Original | Replica now |
| --- | --- | --- |
| All headings + buttons | **Gilmer** (Bold 700, Medium 500, Regular 400) | Montserrat |
| Body / paragraphs / lists | **DM Sans** | Roboto |
| Founder signature | **reey** (script) | none |
| "Not-a-Numb3r" eyebrow only | Montserrat 200 | — |

Font files exist locally and can be copied straight in:

```
WORDPRESS/themes/conult/assets/fonts/gilmer/GilmerBold.woff   (700)
WORDPRESS/themes/conult/assets/fonts/gilmer/GilmerMedium.woff (500)
WORDPRESS/themes/conult/assets/fonts/gilmer/GilmerRegular.woff(400)
WORDPRESS/themes/conult/assets/fonts/reey/reey-regular.woff   (400)
```

**Action**

1. Copy the four `.woff` files to `public/fonts/`.
2. Register them with `next/font/local` in `layout.tsx` as `--font-heading` (Gilmer) and
   `--font-signature` (reey), `display: swap`.
3. Keep `DM_Sans` from `next/font/google` and make it the **body** font.
4. Keep `Montserrat` (weight 200 only) — used solely by the NaN eyebrow.
5. Drop `Roboto` — it is not used anywhere on the rendered page.

> ⚠️ Licensing: Gilmer and reey are commercial fonts. They are already self-hosted on the
> production WordPress site, so the client evidently holds a licence — worth confirming
> before deploying to Vercel, but this does not block implementation.

### 0.2 ❌ Wrong body typography

| Token | Original | Replica now |
| --- | --- | --- |
| Body font-size | `18px` | 16px (Tailwind default) |
| Body line-height | `1.8` (32.4px) | 1.5 |
| Body color | `#7A838B` | `#696969` |
| Heading color | `#1B1F2E` | `#00294B` (navy) |

`--color-body` in `globals.css` is `#696969`; the rendered value is `#7A838B`. Headings are
`#1B1F2E`, **not** navy — navy `#00294B` is used for section backgrounds and check-list text
only.

**Action** — update `@theme` in `globals.css`:

```css
--color-body:    #7A838B;  /* was #696969 */
--color-heading: #1B1F2E;  /* new — default h1..h6 color */
--color-navy:    #00294B;
--color-primary: #0787D9;
--color-soft:    #EDF3F6;
--color-line:    #C9D5DB;
```

Set `body { font-size: 18px; line-height: 1.8; }`, and `h1..h6 { font-family: gilmer; color: var(--color-heading); }`.

### 0.3 ❌ Container width is 80px too wide

Original: `max-width: 1200px` with `15px` column padding → **1170px** of content.
Replica: `max-w-7xl` (1280px) + `px-4` (16px) → 1248px.

**Action** — add a `.container-bc { max-width: 1200px; margin-inline: auto; padding-inline: 15px; }`
utility and replace every `mx-auto max-w-7xl px-4` on the home page with it.

### 0.4 ❌ Section heading component does not match `gsc-heading`

`SectionHeading.tsx` renders eyebrow-then-title with the eyebrow in **primary blue**. The
original renders **three** stacked parts:

1. `.heading-line` — two decorative dashes: `13px × 2px`, background `#0787D9`, `5px` gap,
   `margin-bottom: 10px`. **Currently missing entirely.**
2. `.sub-title` (eyebrow) — DM Sans `14px` / `30px`, weight `500`, `letter-spacing: 1.5px`,
   `text-transform: uppercase`, color **`#7A838B`** (grey, *not* blue).
3. `.title` — Gilmer `700`, line-height `1.3`, color `#1B1F2E`, responsive size:

   | Viewport | Size |
   | --- | --- |
   | ≥ 1025px | `45px` |
   | ≤ 1024.98px | `39px` |
   | ≤ 991.98px | `34px` |
   | ≤ 767.98px | `30px` |
   | ≤ 575.98px | `28px` |

4. `.title-desc` — DM Sans `18px` / `1.8`, color `#7A838B`, `padding-top: 25px`
   (`10px` ≤ 1024px).

**Action** — rewrite `SectionHeading.tsx` to emit the dashes + eyebrow + title + description
with the values above, keeping the `align`/`dark` props. Several sections override the title
size/color; expose `titleClassName` (or equivalent) so they can.

### 0.5 ❌ Button component does not match

| Property | Original | Replica now |
| --- | --- | --- |
| Font | Gilmer `16px` / weight `500` | Montserrat `14px` / `600` |
| Letter-spacing | `2px` | `0.05em` |
| `text-transform` | **none** (labels are typed in caps) | `uppercase` |
| Radius | `4px` | `4px` ✅ |
| Background | `#0787D9` | ✅ |
| Hover | `#000000C4` (black @ 77%) | `#056cb0` |

Two padding variants are in use:

- `padding: 17px 23px` → 50px tall — **CONTÁCTANOS** (`#6b8fb4a`)
- `padding: 15px 30px` → 46px tall — **MÁS INFORMACIÓN** (`#df899e2`), **DESCARGAR** (`#4eed6ba`)

The `outline` variant does not exist in the original — every button is solid blue.

**Action** — rewrite `Button.tsx`: Gilmer/16/500/ls-2px, no `uppercase`, hover to
`rgba(0,0,0,0.77)`, and a `size` prop for the two paddings. Remove the `outline` variant
usage on this page.

### 0.6 ❌ Check-list (`icon-list`) styling

| Property | Original | Replica now |
| --- | --- | --- |
| Icon | Font Awesome **solid** `fa-check-circle`, `14px`, `#0787D9` | inline SVG |
| Text | DM Sans `17px`, weight `500` | 18px/400 |
| Text color (light bg) | `#00294B` navy | `#7A838B` body grey |
| Text color (dark bg) | `#FFFFFF` | `rgba(255,255,255,.9)` |
| Row height | `line-height: 1.8` | `space-y-3` |

**Action** — update `CheckList.tsx`: 17px/500, navy on light, pure white on dark, 14px blue
filled check icon, no extra row gap (the 1.8 line-height provides the rhythm).

### 0.7 ❌ Missing icon font for the Ciclos cards

The three "Ciclos de Venta" card icons are line-art glyphs from the theme's custom icon
fonts, not Font Awesome:

| Card | Class | Font |
| --- | --- | --- |
| Preventa | `flaticon-entrepreneur` | `flaticon.woff` |
| Venta | `icon-conult-point-of-sale` | `icomoon.woff` |
| Posventa | `icon-conult-consultant` | `icomoon.woff` |

Files: `WORDPRESS/plugins/conult-themer/assets/icons/{flaticon,icomoon}.woff` + `style.css`
(contains the codepoint mapping).

**Action** — preferred: extract the three glyphs as SVG and inline them (avoids shipping two
full icon fonts for 3 icons). Fallback: copy both `.woff` files to `public/fonts/` and port
the three `@font-face` + `:before` rules.

---

## Part 1 — Hero slider `#0e79c74` 🟡

**Original**

- Height **880px** desktop; `620px` ≤1024, `550px` ≤778, `350px` ≤480.
- Background `basecoresales-slide-marketing-espana-1.jpg`, **no color overlay at all**, with a
  slow Ken-Burns pan-zoom (`scale 100% → 110%` over 10s).
- Content is **left-aligned**, anchored to the 1170px grid + `15px`, vertically centred.
- Layer order, top to bottom:
  1. `H1` — "Consultoría Comercial / y Marketing" — **Gilmer 70px / 74px, weight 700, white**
  2. `CREAMOS BASES PRODUCTIVAS` — **DM Sans 43px / 28px, weight 400, white**
  3. `AUDITORÍA GRATIS` button — Montserrat 16px/60px, weight 600, `ls 1px`, white on
     `#0787d9`, `padding: 0 35px`, **radius 0**, hover `rgba(5,117,188,0.9)`
- Entrance animations: H1 scales `0.9 → 1` @ 850ms; tagline rises 50px @ 1480ms; button
  wipes in from the left @ 1960ms.
- Responsive H1 sizes: `70 / 82 / 60 / 38px` (line-height `74 / 88 / 64 / 45`).
  Tagline: `43 / 20 / 20 / 20px`.

**Replica now**

- ❌ Everything is **centre-aligned**; original is left-aligned.
- ❌ Tagline is rendered **above** the title; original has it **below**.
- ❌ A `bg-navy-deep/50` overlay darkens the photo; the original has none.
- ❌ H1 is Montserrat `font-light` 4xl/6xl; should be Gilmer Bold 70px.
- ❌ Tagline is 14px uppercase tracked-out; should be DM Sans 43px.
- ❌ Min-height 480/600px; should be 880px.
- ❌ Button is rounded + uppercase-transformed; should be square, 60px tall, `padding 0 35px`.
- ❌ No pan-zoom on the background.
- 🟡 Entrance animation exists but the order/timing differs.

**Action** — rebuild the hero section in `src/app/page.tsx`: remove the overlay, switch to a
left-aligned flex column inside `.container-bc`, reorder to title → tagline → button, apply
the exact type scale, set the responsive heights, add a `hero-zoom` keyframe
(`scale(1) → scale(1.1)`, 10s ease-out) on the background layer, and re-time the three
entrance animations.

---

## Part 2 — Nosotros / Proceso como servicio `#3b58066` 🟡

**Original**

- Section padding `115px 0 100px` (`0 0 30px` ≤1024, `0 0 10px` ≤767).
- Two columns: left `50%`, right `49.546%`. Right column padding `0 15px 45px 85px`.
- Left column is **hidden on mobile** (`elementor-hidden-mobile`); a plain
  `Process-as-a-Service.jpg` image is shown instead on mobile only (`#0144309`).
- The image composition (`gsc-image-content.skin-v5`, max-width **560px**, centred) is four
  layered pieces:

  | Piece | Spec |
  | --- | --- |
  | `.image` (`image-15.jpg`) | top-left, `max-width: calc(100% - 170px)`, `padding-bottom: 105px`, `z-index: 11` |
  | `.image-second` (`Process-as-a-Service.jpg`) | absolute `right: 0; bottom: 0`, width `370px`, `z-index: 11` |
  | `.line-2` | blue bar `6px × 75px`, `#0787D9`, absolute `bottom: 0; left: -36px` of `.image-second` |
  | `.line-1` | **outlined rectangle** `180 × 200px`, `border: 5px solid #0787D9`, absolute `top: -50px; right: 100px`, `z-index: 6` |

  Both images scale to `1.1` over `5s` on hover.
- Heading `#fdde924`: eyebrow "Nosotros", title "Proceso como servicio" (45px Gilmer 700),
  `margin-bottom: 10px`.
- Below it an **icon-box** `#a20a695`, not a heading description: "Base Core ofrece servicios
  de consultoría para todos los ciclos de ventas." — **Gilmer 20px / 32px, weight 500,
  color `#1B1F2E`**, `margin-bottom: 12px` (18px/24px ≤767).
- Check-list `#4a70955`: 17px / 500 / navy, blue 14px checks.
- `h4` `#1404829`: "Implementamos procesos…" — **DM Sans 20px / 26px, weight 400,
  color `#7A838B`**, `margin-top: 28px` (20px ≤1024).
- Button CONTÁCTANOS, `padding 17px 23px`.

**Replica now**

- ❌ Image composition is a plain big image + a small bordered thumbnail bottom-right.
  Missing the `line-1` outlined rectangle, the `line-2` blue bar, and the correct
  overlap geometry. The two images are also swapped relative to the original layering.
- ❌ "Base Core ofrece…" is rendered as the heading's grey description; should be a
  20px/32px Gilmer 500 near-black statement directly under the title.
- ❌ "Implementamos procesos…" is `text-lg font-semibold text-navy`; should be DM Sans
  20px/26px regular grey.
- ❌ Section padding `py-20` (80px) vs `115px / 100px`.
- ❌ Left column not hidden on mobile, no mobile-only fallback image.
- ✅ Copy, images, column order, check-list contents.

**Action** — build a dedicated `ProcessImageStack` component reproducing the four layers
with the exact offsets; split the icon-box out of `SectionHeading`; fix the `h4` styling and
the section padding; add the `hidden md:block` / mobile-fallback pair.

---

## Part 3 — Metodología (flip boxes) `#a72b136` ❌

This is the largest visual mismatch on the page.

**Original**

- Section background: **`footer-base-core-sales.jpg`** (a blue-toned skyscraper photo),
  `background-attachment: fixed` ≥1025px, `background-size: cover`.
- Overlay `#00294B` at **alpha 0** × opacity `0.82` → effectively **no tint**; the photo shows
  through at full strength.
- Section padding `110px 0 90px` (`80px 0 70px` ≤1024).
- Four Elementor **flip-boxes**, `280 × 375px` each, `effect: zoom-in`:
  - **Front** — background `#FFFFFF` + the numbered artwork
    `01/02/03/04-base-core-sales.jpg` (a white card with a faint outlined numeral), overlay
    padding `35px`, contents centred:
    - icon — `50px`, `#0787D9` (`far fa-paper-plane`, `far fa-chart-bar`, `fas fa-cogs`,
      `fas fa-chart-line`)
    - title — **Gilmer 21px / 21px, weight 600, color `#1B1F2E`**, `margin-bottom: 20px`
  - **Back** — background `1-diagnostico…`, `2-plan-de-rutas…`, `3-estrategia…`,
    `4-mejora-continua-base-core-sales.jpg`, overlay `rgba(0,41,75,0.24)`, padding `35px`,
    description **DM Sans 14px / 1.8, white**, centred.
  - Transition: back layer `opacity 0 → 1` (`.5s`) and `scale(.7) → scale(1)` (`.7s`);
    the front layer stays in place underneath.

**Replica now**

- ❌ Section background is flat `bg-soft` `#EDF3F6` — should be the fixed skyscraper photo.
- ❌ Cards are **not flip boxes**: they show the icon, title *and* all description lines at
  once, over a dark `bg-navy-deep/75` overlay on the back-side image.
- ❌ Front should be a **white** card with the numbered artwork and dark text; currently dark
  with white text.
- ❌ Card height `min-h-72` (288px); should be `375px`.
- ❌ Title 20px semibold; should be Gilmer 21px/21px 600 `#1B1F2E`.
- ❌ Icon `text-4xl` (36px); should be 50px.
- 🟡 `FlipCardGrid.tsx` exists and implements a **3D rotateY flip** — the wrong effect, and
  it is not used on the home page.

**Action** — replace the current static grid with a `zoom-in` flip-box component (front
white + numeral art, back photo + `rgba(0,41,75,0.24)`, `scale(.7)→(1)` + fade). Set the
section background to `footer-base-core-sales.jpg` with `bg-fixed` at `lg` and no tint.
Add `focus-within` so the back layer is reachable by keyboard, and reveal it on tap for
touch devices (Elementor uses `cursor: pointer` + tap on ≤1024px).

---

## Part 4 — Ciclos de Venta `#6ff6d2e` ❌

**Original** (`service-item.style-2`)

- Section padding `120px 0 90px` (`70px 0 40px` ≤1024), white background.
- Centred heading: eyebrow "mentoring comercial" + title "Ciclos de Venta", widget
  `margin-bottom: 30px`.
- 3-up grid, each item **370px** wide inside the 1200px container.
- Card anatomy:
  - Photo on top, **370 × 280px**, `object-fit: cover`.
  - A **white content box floating over the photo**: `margin: -40px 20px 30px`,
    `padding: 30px 30px 25px`, `box-shadow: 0 0 30px rgba(0,0,0,.06)`, `z-index: 9`.
    Inside, a flex row `justify-content: space-between; align-items: center`:
    - title — **Gilmer 20px / 26px, weight 700, `#1B1F2E`**, `margin-top: -6px`
    - icon — custom line-art glyph, **58px**, `#0787D9`, with a `38 × 38px` `#EDF3F6`
      square behind it offset `left: -15px`
  - **Hover overlay** — absolutely positioned, `height: calc(100% - 30px)`, starts
    `opacity: 0; scale(.9)` → `opacity: 1; scale(1)` over `.35s` (`.1s` delay). Contains the
    same photo as background with a `#00294B @ 0.8` tint, and centred content
    (`max-width: 280px`, `padding: 20px 15px`):
    - icon 62px white → title **Gilmer 22px / 700 white**, `margin: 18px 0` →
      description **DM Sans 15px / 18px, white, opacity .82**

**Replica now** (`ServiceCards.tsx`)

- ❌ Fixed `h-80` (320px) photo card with a bottom gradient and the title sitting on the
  photo. The original has a **separate white box overlapping the photo**.
- ❌ No icons at all — the three custom glyphs and the `#EDF3F6` square are missing.
- ❌ Hover overlay is a plain `bg-navy-deep/85` fade; should be image + `#00294B @ .8` with a
  `scale(.9) → 1` zoom.
- ❌ Description font 14px; should be 15px / 18px at `opacity .82`.
- ❌ Cards are wrapped in `<Link>`; the original card is not a link (the whole page section
  has no click target on the card — verify against `/preventa` navigation intent before
  removing).
- ❌ Section padding `py-20` vs `120px / 90px`.
- ✅ Photos, titles, description text.

**Action** — rewrite `ServiceCards.tsx` to the `style-2` anatomy. Requires the icons from
§0.7.

---

## Part 5 — Partner Estratégico / Not-a-Numb3r `#5f421622` ❌

**Original** — a full-width **50 / 50 split**, each half styled independently:

| Half | Spec |
| --- | --- |
| **Left** `#5985947d` | background `MARKETING-NAN.jpg` (`center left`, `cover`) + **black overlay at `0.74`**. Padding `0 15px`. Height comes from a `420px` spacer (`10px` ≤1024). Contains `NaN-blanco.png` (35% col, `padding-left: 15px`) and, below, `not-a-numb3r-light.png` full width (`padding: 0 15px`). |
| **Right** `#2823f10f` | **solid `#00294B`**, padding `106px 15px 106px 100px` (`60px 15px` ≤1024, `60px 15px 60px 35px` ≤767). Children capped at `max-width: 680px`. |

Right-hand content:
- dashes + eyebrow "Not-a-Numb3r" — **Montserrat 26px / 30px, weight 200,
  `letter-spacing: 2.2px`, color `#D2DCE5`, `text-transform: none`** (this is the only
  Montserrat on the page)
- title "Partner Estratégico / Agencia de Marketing" — Gilmer **44px** / 57.2px, 700, white
- check-list, white text, **single column** (7 items stacked)
- button MÁS INFORMACIÓN, `padding 15px 30px`, `margin-top: 15px`

**Replica now**

- ❌ One background image spans the whole section with a uniform `bg-navy-deep/85` overlay.
  Should be a hard 50/50 split: photo+black-74% on the left, flat navy on the right.
- ❌ The two NaN logos are centred and stacked in the middle of the left column; the original
  places the `NaN` mark at the **top-left** and the `Not-a-Numb3r` wordmark at the
  **bottom**, separated by a 420px spacer.
- ❌ Eyebrow is 14px uppercase blue; should be Montserrat 26px weight 200, `#D2DCE5`,
  not uppercase.
- ❌ Title 3xl/4xl; should be 44px Gilmer 700.
- ❌ Check-list rendered in **2 columns**; original is 1 column.
- ❌ Right column padding — needs the asymmetric `100px` left inset.

**Action** — restructure into two `lg:w-1/2` panels with independent backgrounds; position
the logos with the spacer; add a `montserrat` weight-200 subset for the eyebrow only.

---

## Part 6 — Recruiting `#e610736` ❌

**Original**

- Full-width section, background `Fondo-Base-Core-01.jpg`, `background-position: center right`,
  `background-attachment: fixed` ≥1025px. **No color overlay** — both column overlays are
  colorless (opacity `0.5` / `0.9` applied to nothing). The image itself is dark on the left
  (interview photo) and light on the right (dotted white pattern).
- Columns: left `55%` (empty, just a `160px` spacer — `10px` ≤1024), right `45%` with
  padding `100px 15px 100px 85px`.
- Right column content, **left-aligned, dark text on the light part of the photo**:
  - dashes + eyebrow "RECRUITING: FUERZA DE VENTAS" — 14px, `ls 1.5px`, `#7A838B`
  - title "Te acompañamos en la búsqueda y selección de perfiles acordes a tu negocio." —
    Gilmer **45px / 58.5px, 700, `#1B1F2E`**
  - description — DM Sans 18px / 1.8, `#7A838B`, `padding-top: 25px`
  - check-list — navy 17px/500, **single column**, 5 items
  - Heading widget has `padding-right: 50px`.
- Mobile (≤767): background `center right`, section padding 0, left column `70px 0 0`,
  right column `margin: 1px 0 70px; padding: 0 15px 1px 25px`.

**Replica now**

- ❌ Renders as a **centred, full-width, dark navy panel with white text**. The original is a
  right-aligned 45% column of **dark text on the light half of the photo**, with no overlay.
- ❌ `bg-navy-deep/80` overlay must be removed entirely.
- ❌ Check-list is 2 columns and centred; should be 1 column, left-aligned.
- ❌ Title is centred and `3xl/4xl`; should be left-aligned Gilmer 45px.
- ❌ No `background-attachment: fixed`.
- ✅ Copy and the background image file.

**Action** — rebuild as a 55/45 grid with no overlay, dark text, `bg-fixed lg:`, and the
asymmetric right-column padding.

---

## Part 7 — E-Book CTA `#1ee6de6` ❌

**Original**

- Background `base-core-sales-ebook.jpg`, `bg-fixed` ≥1025px, overlay **`#00294B` @ `0.82`**.
- Section padding `90px 0 75px` (`80px 0 70px` ≤1024).
- **Everything centred, stacked vertically** (`align-center`), `content-inner` max-width `900px`:
  1. title "Optimiza tus procesos: Primeros pasos para una estructura comercial efectiva" —
     Gilmer **44px / 68px, weight 700, white** (`40px / 50px` ≤1024, `26px / 40px` ≤767)
  2. description "Descarga nuestro E-Book" — DM Sans **24px / 1.8, `#C6C6C6`**,
     `padding-top: 20px`, **not uppercase, not letter-spaced**
  3. button DESCARGAR — solid blue, `padding 15px 30px`, `margin-top: 15px`
- Note: the heading widget has no eyebrow and no dashes here.

**Replica now**

- ❌ Overlay is `bg-primary/90` (**blue**); should be navy `#00294B` @ 82%.
- ❌ Layout is a horizontal `md:flex-row justify-between` with the button on the right;
  should be a centred vertical stack.
- ❌ Subtitle is uppercase + `tracking-widest` at ~16px; should be 24px sentence-case `#C6C6C6`.
- ❌ Title `text-3xl`; should be 44px / 68px.
- ❌ Button uses the `outline` variant; should be the standard solid blue button.
- ❌ No `bg-fixed`.

**Action** — straightforward rewrite of the section block in `page.tsx`.

---

## Part 8 — Contacto `#53c4e9ca` 🟡

**Original**

- Background: white overlay at `0.97` over nothing → effectively **white**, not `#EDF3F6`.
- Section padding `90px 0 120px` (`0 0 70px` ≤1024, `70px 0` ≤767), columns vertically centred.
- Two columns, `50 / 50`.

**Left column** `#641919af`:
- dashes + eyebrow "Escríbenos" + title "Contacto" (Gilmer 45px, `#1B1F2E`,
  `margin-bottom: 6px`) + description (DM Sans 18px/1.8 `#7A838B`, `padding-top: 20px`),
  `content-inner` max-width **530px**.
- Then a 3-column inner row (`72% / 10% / 17.3%`), `padding-bottom: 50px`:
  - **"Mariano Sandonato"** in the **reey script font, 24px, color `#0787D9`**, followed by
    "- Fundador" in plain black text. No avatar, no card, no box.
  - a single LinkedIn social icon — `34 × 34px`, `border-radius: 10%`, icon `17px`,
    `elementor-animation-shrink` on hover.
- Then a 2-column row (`43.7% / 56.3%`): `base-core-sales-ebook.jpg` thumbnail (left,
  `padding-right: 30px`) and a 4-item check-list (Preventa / Venta / Posventa / Marketing),
  17px / 500 / navy, **zero row gap**.

**Right column** `#137ff65f` — the form `#67f127e9`:
- Container `padding: 45px` (`30px 15px` ≤1024), `border: solid`,
  `border-width: 4px 1px 1px 1px`, `border-color: #C9D5DB` — i.e. a **thick blue-grey top
  edge** and hairline sides. Transparent background.
  *(The top border renders blue in the live page — confirm whether `#C9D5DB` is overridden by
  the `top-color-theme` class on the widget before finalising.)*
- Fields: 2-up grid — Nombre / Apellidos, Empresa / Servicio (select), WhatsApp / Email, then
  a full-width Mensaje textarea.
- Input style: height `60px`, background `#EDF3F6`, no radius, no visible border,
  `padding: 0 15px`, DM Sans `14px`, color `#7A838B`, placeholders in **UPPERCASE**.
- Submit "ENVIAR MENSAJE": Gilmer **14px / 700**, `ls 2px`, **uppercase**,
  `padding: 18px 30px`, **radius 0**, `#0787D9`, ~`211 × 58px` — note this differs from the
  page's other buttons (smaller, bolder, square).

**Replica now**

- ❌ Section background `bg-soft`; should be white.
- ❌ Heading is **centred**; should be left-aligned in the left column.
- ❌ Founder block is a white rounded card with a circular avatar icon and a "Linkedin" text
  link. Should be the reey-script signature + "- Fundador" + a small square LinkedIn icon.
- ❌ E-book thumbnail + check-list sit under the founder card in a 2-col grid — close, but the
  order/proportions (43.7 / 56.3) and the zero-gap list need matching.
- ❌ Form is a white rounded card with a shadow; should be transparent with the
  `4px 1px 1px 1px` border.
- 🟡 Input styling — verify height 60px, `#EDF3F6` fill, square corners, uppercase placeholders.
- ❌ Submit button uses the standard Button style; needs the form-specific 14px/700/square variant.
- ✅ Field set, layout order, form submission logic.

**Action** — restyle `ContactSection.tsx` and `ContactForm.tsx`; add the `reey` font from §0.1.

---

## Files touched

| File | Change |
| --- | --- |
| `src/fonts/*.woff` | Gilmer Bold/Medium/Regular + reey, copied from the WP theme |
| `src/app/layout.tsx` | `next/font/local` for Gilmer + reey; DM Sans as body; Montserrat 200; Roboto dropped |
| `src/app/globals.css` | Palette, 18px/1.8 body, `.container-bc`, `gsc-heading`, flip-box, service-card and full hero geometry — all layered |
| `src/app/page.tsx` | All 8 sections rebuilt |
| `src/components/SectionHeading.tsx` | Dashes + eyebrow + responsive title + description |
| `src/components/Button.tsx` | Gilmer 16/500, ls 2px, no uppercase, `md`/`sm` paddings |
| `src/components/CheckList.tsx` | 17px/500 navy, 14px blue check |
| `src/components/FlipBox.tsx` | **new** — Elementor "zoom in" primitive |
| `src/components/MethodologyGrid.tsx` | **new** — the four Metodología boxes |
| `src/components/ProcessImageStack.tsx` | **new** — `skin-v5` four-layer composition |
| `src/components/cycleIcons.tsx` | **new** — 3 glyphs extracted from the icon fonts as SVG |
| `src/components/ServiceCards.tsx` | Rebuilt to `service-item.style-2` |
| `src/components/FlipCardGrid.tsx` | Re-based on `FlipBox` (was a wrong 3D flip) |
| `src/components/ContactSection.tsx` | White bg, left-aligned, reey signature, bordered form |
| `src/components/ContactForm.tsx` | 60px `#EDF3F6` square fields, square bold submit |
| `src/components/Header.tsx` | `position: absolute` only — see below |

### Follow-up commit (`b5f7978`)

| File | Change |
| --- | --- |
| `src/components/ServiceCards.tsx` | `overflow-hidden` on the article (stops the margin collapse that broke hover coverage); 60px icon box |
| `src/app/globals.css` | Removed the dead `.flip-box.is-open` selector |

## Resolved questions

1. **Font licensing** — confirmed licensed; Gilmer and reey are self-hosted via
   `next/font/local`.
2. **Fixed backgrounds** — confirmed acceptable; `bg-fixed` applies from `lg` up, matching
   WordPress's ≥1025px rule.
3. **Ciclos cards as links** — links kept.
4. **Contact form top border** — resolved by measuring the live DOM: the top border **is**
   primary blue `#0787D9` (4px); the other three sides are `#C9D5DB` (1px). Implemented
   that way. (`post-1369.css` alone was misleading — the `top-color-theme` class overrides
   the top edge.)

---

## Remaining work — the Header

The header is the one visible gap left on the home page, and it is a **prerequisite for the
hero to read correctly**, so one structural change was made now:

- WordPress renders the header with `header-position-absolute` — it floats over the page and
  the hero starts at `y: 0`. `Header.tsx` was switched to `absolute inset-x-0 top-0` to match
  (this is also what makes the hero's measured geometry line up). Its `sticky` nav row was
  removed, since sticky-inside-absolute does not work.

Everything else about the header is **untouched and still wrong**:

| | Original | Replica now |
| --- | --- | --- |
| Structure | **One** navy bar, ~61px tall | Two rows: navy strip + tall white nav block |
| Contents | location · email · phone — nav — social icons, all in one row | same items, split across two rows |
| Logo | none visible in the bar | a large (and apparently invisible — likely the white-on-transparent variant) logo occupies the left half |
| Height | 61px | ~310px, which currently covers most of the hero |

At 390px and 768px the white block covers nearly the whole hero. **This is the next piece of
work** and is being done on the `feat/header` branch, with its own plan in `PLAN-HEADER.md`.

---

## Suggested order after the header

1. **Verification sweep** — numerically diff sections 5–8, and compare mobile/tablet against
   the live site rather than against ourselves. Based on the hover bug found in this pass,
   this is where more defects are likely to surface.
2. **Footer** — never analyzed; needs its own gap list.
3. **Inner pages** (`/preventa`, `/venta`, `/posventa`, `/marketing`, `/contacto`). These
   should be much cheaper now: `/preventa`'s markup confirms it reuses the same
   `service-item.style-2` and `flip-box zoom-in` widgets that are already correct here.
4. **Pre-deploy pass** — convert the fonts to `woff2`, move the hero background to
   `next/image` with `priority`, run Lighthouse.

Worth considering before step 3: a **screenshot-diff harness** (Playwright, our page vs the
live site at four widths). Manual checking works but only finds what you go looking for;
with five more pages to build, an automated diff would pay for itself and make every later
change self-checking.
