# PLAN — `/preventa` parity

Branch: `feat/preventa`. Follows `PLAN.md` (home), `PLAN-HEADER.md`, `PLAN-FOOTER.md` — all merged.

The original is Elementor page template **24** (`post-24.css`). Much of this page is built
from components the home page already fixed, so the work is mostly correcting *inputs*
(backgrounds, sizes, variants) rather than writing new structure.

---

## Reference sources

| Source | Used for |
| --- | --- |
| `https://basecoresales.com/preventa/` live DOM | Geometry, typography, colours |
| `wp-content/uploads/elementor/css/post-24.css` | Section paddings, overlays, breakpoints |

---

## Section map

| # | Elementor id | What it is | Background | Overlay |
| --- | --- | --- | --- | --- |
| 1 | `#2f40ee6` | Breadcrumb | — | — |
| 2 | `#7f215f0` | Hero, 746px | `base-core-sales-consegui-reuniones-con-tus-clientes-potenciales.jpg` | `#01294B` @ **0.14** |
| 3 | `#41a6ea0c` | "PREVENTA / Etapas" heading, 135px | — | — |
| 4 | `#81be2e9` | 4 flip boxes, **full-width**, 520px | per-card image | see below |
| 5 | `#27c2ba5f` | Recruiting, 704px | `Fondo-Base-Core-01.jpg` | **none** |
| 6 | `#e55ea54` | "Puestos", padding `110px 0 90px` | — | — |
| 7 | `#60e50265` | Next-cycle CTA, padding `110px 0 100px` | `redireccionamiento.jpg` | `#00294B` @ 0.82 |
| 8 | `#71f8f2e1` | Contacto, padding `120px 0` | `bg-5.jpg` | `#FFFFFF` @ 0.97 |

### ⚠️ The three background images are currently on the wrong sections

`ServiceCyclePage.tsx` assigns them like this today:

| Section | Replica now | Should be |
| --- | --- | --- |
| Recruiting | `redireccionamiento.jpg` + navy 85% | `Fondo-Base-Core-01.jpg`, **no overlay** |
| Next-cycle CTA | `bg-5.jpg` + navy 80% | `redireccionamiento.jpg` + navy 82% |
| Contacto | none (white) | `bg-5.jpg` + white 97% |

---

## Details

### 2 — Hero

Full-width container, everything **centre-aligned**, 50px spacer on top.

| Element | Spec |
| --- | --- |
| `h1` | **Montserrat 50px / 59px, weight 300**, white |
| Subtitle | **Montserrat 30px / 40px, weight 300**, white |
| Button | "AUDITORÍA GRATIS", Gilmer 16/500, `padding 15px 30px` (the `sm` size) |

Note the hero uses **Montserrat Light**, not Gilmer.

### 4 — Flip boxes (`elementor-section-full_width`)

Four boxes, **342 × 500**, 10px padding per cell, spanning the full viewport (not the
1200px container). Front and back share the same photo.

| Layer | Overlay | Contents |
| --- | --- | --- |
| Front | `rgba(0,0,0,0.47)`, padding 35px | `h3` **Sora 21px / weight 200**, white + description DM Sans 14px/32.4px white |
| Back | `rgba(0,41,75,0.83)`, padding 35px | icon list: `fa-check-circle` 14px `#0787D9` + DM Sans text |

### 5 — Recruiting

Structurally **identical to the home page's Recruiting section**: 55% / 45% split, right
column padding `100px 15px 100px 85px`, `Fondo-Base-Core-01.jpg` with **no overlay**, dark
text on the light half of the photo.

List here is DM Sans **18px / 400**, `#7A838B` — *not* the 17px/500 navy used in "Nosotros".

### 6 — Puestos

Padding `110px 0 90px`. Heading "ESTRUCTURA COMERCIAL DE PREVENTA" / "Puestos", then two
`service-item.style-2` cards (467px wide) — the component is already correct from the home page.

### 7 — Next-cycle CTA

Centred. Title **Gilmer 60px / 68px, 700**, white. Link "VER FUNNEL  VENTAS" (two spaces in
the original) styled like the contact form's submit: Gilmer **14px / 700**, white on
`#0787D9`, `padding 18px 30px`, square.

### 8 — Contacto

Same layout as the home page but the title is an `h3`, the section has `bg-5.jpg` behind a
97% white overlay, and padding is `120px 0`.

---

## Shared-component changes (these also affect pages already merged)

1. **`CheckList` needs a size variant.** The original uses two different list styles and our
   component currently applies one everywhere:
   - `17px / 500`, navy — "Nosotros" (`#4a70955`), contact cycle list (`#1ba3c267`)
   - `18px / 400`, inherited colour — Recruiting (`#3e239de2`, `#11397e5f`), NaN partner (`#a4af108`, white)

   So the **home page's Recruiting and Not-a-Numb3r lists are currently wrong** and will be
   corrected by this change.

2. **`ContactSection` needs a variant** for the inner pages: background image + overlay,
   `120px 0` padding, `h3` title.

3. **`FlipCardGrid` needs the real spec** — Sora title, the two overlay colours, a check-icon
   list on the back, 500px height, and a full-width 4-up grid.

4. **`PageHero` references dead animation classes.** It still uses `animate-hero`,
   `animate-hero-delay-1/2`, which were replaced during the home-page work
   (`animate-hero-title` / `-tagline` / `-button`). Currently a no-op — needs rewiring.

5. **New fonts:** **Sora** (weight 200) for flip-box titles, and **Montserrat 300** for the
   hero. Montserrat is already loaded but only at weights 200/600.

6. **Breadcrumb.** The original's breadcrumb widget renders **empty** (a 20px spacer). Ours
   renders a full navy bar with "Home › Preventa". Needs confirming — see open questions.

---

## Work items

- [x] Add Sora 200 and Montserrat 300 to the font stack.
- [x] `CheckList`: add the size variant; audit home-page usages.
- [x] `PageHero`: Montserrat 300 50/30, centred, 746px, 0.14 overlay, fix animations.
- [x] `FlipCardGrid`: Sora titles, correct overlays, check-list back, full-width 4-up.
- [x] `ServiceCyclePage`: fix the three backgrounds, section widths, next-cycle CTA.
- [x] `ContactSection`: inner-page variant.
- [x] Puestos card icons (`icon-conult-strategy`, `icon-conult-point-of-sale`).
- [x] Contact form metrics (22px row gap, 20px gutter, 180px textarea, 93px submit block).
- [x] Verify geometry at 1449px.
- [ ] Verify 1024 / 768 / 390px.

## Result — section heights vs the original (viewport 1463)

| Section | Original | Replica | Δ |
| --- | --- | --- | --- |
| Hero | 746 | **746** | 0 |
| Etapas heading | 135 | 125 | −10 |
| Flip boxes | 520 | **520** | 0 |
| Recruiting | 704 | 694 | −10 |
| Puestos | 811 | 783 | −28 |
| Next-cycle CTA | 454 | 421 | −33 |
| Contacto | 886 | 868 | −18 |
| Puestos card | 456 | **458** | +2 |
| Contact form box | 646 | 628 | −18 |

Flip boxes are also pixel-exact horizontally (342×500 at x=10/372/734/1096), as are the
Puestos cards (467px wide).

Remaining deltas are 10–33px of section padding nuance, not structural.

## Notes for the sibling cycle pages

`/venta` and `/posventa` share `ServiceCyclePage`, so they picked up all of the above. Two
things still specific to them:

- Their `puestos` cards have **no `icon`** set, so they render without the line-art glyph and
  sit ~40px shorter than they should. Each needs its own icon identified from the original.
- Their section content has not been measured against the originals at all.

## Resolved questions

1. **Breadcrumb** — keep ours. The original's widget renders empty; ours shows "Home ›
   Preventa", which is better for UX and SEO. Left in place, now using the shared container.
2. **Next-cycle link text** — tidied to a single space. The content files already read
   "VER FUNNEL VENTAS" / "VER FUNNEL POSVENTA", so no change was needed.
