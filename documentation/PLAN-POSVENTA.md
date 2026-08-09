# PLAN — `/posventa` parity

Branch: `feat/posventa`. Last of the three service cycle pages. Follows `PLAN.md`,
`PLAN-HEADER.md`, `PLAN-FOOTER.md`, `PLAN-PREVENTA.md`, `PLAN-VENTA.md` — all merged.

The original is Elementor page template **1835**. It shares `ServiceCyclePage`, so it has
already inherited both previous passes. What remains are its own differences.

---

## Section map

| # | Elementor id | What it is | Width | Height | Background |
| --- | --- | --- | --- | --- | --- |
| 1 | `#2f40ee6` | Breadcrumb | full | 20 | — |
| 2 | `#7f215f0` | Hero | full | 746 | `…-Support.jpg`, `#01294B` @ 0.14 |
| 3 | `#1058b5f` | "MENTORING POSVENTA / Etapas" + **65px** spacer | boxed | 220 | — |
| 4 | `#9a1d78f` | Flip boxes — **one row of 3** | boxed | 420 | — |
| 5 | `#d4a8da7` | Recruiting | full | 704 | `Fondo-Base-Core-01.jpg`, no overlay |
| 6 | `#e55ea54` | Puestos, padding **`120px 0 90px`** | full | 856 | — |
| 7 | `#71f8f2e1` | Contacto, padding `120px 0` | boxed | 886 | `bg-5.jpg`, white @ 0.97 |

**There is no next-cycle CTA** — posventa is the last cycle, so `#60e50265` does not exist.
Our `posventa.ts` already omits `nextCycle`, so this is handled.

---

## The flip boxes are a third distinct shape

Across the three cycle pages the boxes now differ in every dimension that matters:

| | `/preventa` | `/venta` | `/posventa` |
| --- | --- | --- | --- |
| Section | full-width | boxed | **boxed** |
| Grid | 4 × 1 | 3 × 3 | **3 × 1** |
| Box | 342 × 500 | 380 × 250 | **380 × 400** |
| Front | title + tagline | title only | **title + tagline** |
| Back | check-icon list | plain lines | **plain lines** |
| Front tint | `rgba(0,0,0,0.47)` | `rgba(0,0,0,0.49)` | `rgba(0,0,0,0.47)` |
| Back tint | `rgba(0,41,75,0.83)` | `rgba(0,41,75,0.84)` | `rgba(0,41,75,0.83)` |

So `/posventa` combines the **boxed layout** of `/venta` with the **tagline front** of
`/preventa`, at a height neither uses.

The current `variant` prop conflates layout with back style. That mapping happens to still
hold — boxed pages both use plain-text backs — and the front tagline is already data-driven
(rendered only when `card.tagline` exists). **The only thing missing is a per-page box
height**, so `etapas.boxHeight` is being added rather than a third variant.

Positions are x=134 / 534 / 934, same as `/venta`.

---

## Puestos

Padding `120px 0 90px` (vs `110/90` on `/preventa` and `90/90` on `/venta`). Two cards,
**467 × 456 at x=238 / 735** — identical geometry to both siblings, and the same two glyphs:

| Card | Icon |
| --- | --- |
| Retención | `icon-conult-strategy` |
| Crecimiento | `icon-conult-point-of-sale` |

Both already extracted, so this is wiring only.

## Contacto

Title is an **`h2`**, matching `/venta` (`/preventa` is the odd one with `h3`).

---

## Work items

- [x] `types.ts`: add `etapas.boxHeight`.
- [x] `FlipCardGrid`: honour `boxHeight` for the boxed variant.
- [x] `posventa.ts`: boxed variant, 65px spacer, 400px boxes, Puestos icons,
      `puestos.paddingTop: 120`, `contactTitleAs: "h2"`.
- [x] Verify geometry against the original at 1449px.
- [x] Re-check `/preventa` and `/venta` for regressions.
- [ ] Verify 1024 / 768 / 390px.

## Result — section heights vs the original (viewport 1463)

| Section | Original | Replica | Δ |
| --- | --- | --- | --- |
| Hero | 746 | **746** | 0 |
| Etapas heading | 220 | 190 | −30 |
| Flip boxes | 420 | 440 | +20 |
| Recruiting | 704 | 694 | −10 |
| Puestos | 856 | 813 | −43 |
| Contacto | 886 | 868 | −18 |
| Puestos card | 456 | **458** | +2 |

**Flip boxes are pixel-identical: 380 × 400 at x=134 / 534 / 934, three of them.**
The Contacto title renders as `h2`, and there is no next-cycle section.

Remaining deltas are section-padding nuance, not structure — and they track the same
pattern as the two sibling pages (heading −30, recruiting −10, contacto −18 are
identical to `/venta`).

## Regression check on the sibling pages

`boxHeight` is optional and falls back to the previous literal (`boxHeight ?? (boxed ? 250 : 500)`),
so neither sibling could shift. Confirmed by measurement rather than by reading:

| Page | Boxes | Geometry | Expected |
| --- | --- | --- | --- |
| `/preventa` | 4 | 342 × 500 at x=10 / 372 / 734 / 1096 | ✅ unchanged |
| `/venta` | 9 | 380 × 250 at x=134 / 534 / 934 | ✅ unchanged |

## After this page

All three cycle pages will be done at desktop width. Still outstanding across the project:

1. **Responsive has never been diffed against the originals** — every page has only been
   verified at 1449px. This is the largest open risk.
2. `/marketing` and `/contacto` have not been looked at.
3. Deployability: five sections use CSS `background-image` and bypass `next/image`; Gilmer
   ships as `woff` only.
