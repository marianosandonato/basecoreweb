# PLAN — `/venta` parity

Branch: `feat/venta`. Follows `PLAN.md`, `PLAN-HEADER.md`, `PLAN-FOOTER.md`,
`PLAN-PREVENTA.md` — all merged.

The original is Elementor page template **1718** (`post-1718.css`). It shares
`ServiceCyclePage` with `/preventa`, so it already inherited every fix from that pass. What
remains is the ways `/venta` genuinely *differs* — and they are more substantial than expected.

---

## Section map

| # | Elementor id | What it is | Width | Height | Background |
| --- | --- | --- | --- | --- | --- |
| 1 | `#2f40ee6` | Breadcrumb | full | 20 | — |
| 2 | `#7f215f0` | Hero | full | 746 | `sales-base-core-sales.jpg`, `#01294B` @ 0.14 |
| 3 | `#1058b5f` | "MENTORING COMERCIAL / Etapas" + 80px spacer | **boxed** | 235 | — |
| 4 | `#9a1d78f` | Flip boxes, row 1 | **boxed** | 270 | — |
| 5 | `#20949cf` | Flip boxes, row 2 | **boxed** | 270 | — |
| 6 | `#2afe01f` | Flip boxes, row 3 | **boxed** | 270 | — |
| 7 | `#d4a8da7` | Recruiting | full | 704 | `Fondo-Base-Core-01.jpg`, no overlay |
| 8 | `#e55ea54` | Puestos, padding `90px 0` | full | 821 | — |
| 9 | `#60e50265` | Next-cycle CTA, padding `110px 0 100px` | boxed | 454 | `redireccionamiento.jpg` @ 0.82 |
| 10 | `#71f8f2e1` | Contacto, padding `120px 0` | boxed | 886 | `bg-5.jpg`, white @ 0.97 |

Sections 7, 9 and 10 are identical to `/preventa` and already correct.

---

## The three real differences from `/preventa`

### 1. The flip boxes are a completely different shape

| | `/preventa` | `/venta` |
| --- | --- | --- |
| Section width | `full_width` | **boxed, 1200px** |
| Grid | 4 across, one row | **3 across, three rows** (9 cards) |
| Box size | 342 × 500 | **380 × 250** |
| Position | x=10 / 372 / 734 / 1096 | **x=134 / 534 / 934** |
| Front overlay | `rgba(0,0,0,0.47)` | `rgba(0,0,0,0.49)` |
| Back overlay | `rgba(0,41,75,0.83)` | `rgba(0,41,75,0.84)` |

On the original the nine boxes live in **three separate sections of three**, each 270px tall
(250 box + 10px cell padding top and bottom). A single 3-column grid with the same cell
padding produces an identical result, so one grid is fine.

### 2. Front and back layers carry different content

| | `/preventa` | `/venta` |
| --- | --- | --- |
| Front | title **+ tagline** | **title only** |
| Back | icon list with `fa-check-circle` | **plain text lines** separated by `<br>` |

The first back line on `/venta` ("Relevamiento", "Esquema de actuación", …) is what reads as
a subtitle. Our `venta.ts` already models this correctly — no `tagline`, and the subtitle is
simply the first `items` entry. **No content changes needed.**

Titles are Sora 21px / weight 200, white, on both pages.

### 3. The Contacto title is an `h2`, not an `h3`

`/preventa` uses `h3`; `/venta` uses `h2`. Small, but it is a heading-level difference.

---

## Puestos

Padding `90px 0` (vs `110px 0 90px` on `/preventa`). Two cards, **467 × 456 at x=238 / 735** —
same geometry as `/preventa`, and the same two glyphs:

| Card | Icon |
| --- | --- |
| Cerradores | `icon-conult-strategy` |
| Nuevos Negocios | `icon-conult-point-of-sale` |

Both are already extracted (`EstrategiaIcon`, `VentaIcon` in `cycleIcons.tsx`), so this is
just wiring them into `venta.ts`.

---

## Work items

- [x] `types.ts`: `etapas.variant`, `etapas.spacerTop`, `puestos.paddingTop`, `contactTitleAs`.
- [x] `FlipCardGrid`: both variants (boxed 3-up 250px vs full-width 4-up 500px) and both
      content shapes (tagline + check list vs plain lines).
- [x] `ServiceCyclePage`: boxed vs full-width flip section, per-page contact heading level,
      Puestos padding, Elementor's 10px column padding.
- [x] `venta.ts`: Puestos icons, boxed variant, 80px spacer, h2 contact title.
- [x] `preventa.ts`: variant marked explicitly.
- [x] Verify geometry at 1449px.
- [x] Re-check `/preventa` — flip boxes still exactly `[10, 342, 500]`, no regression.
- [ ] Verify 1024 / 768 / 390px.

## Result — section heights vs the original (viewport 1463)

| Section | Original | Replica | Δ |
| --- | --- | --- | --- |
| Hero | 746 | **746** | 0 |
| Next-cycle CTA | 454 | 451 | −3 |
| Recruiting | 704 | 694 | −10 |
| Contacto | 886 | 868 | −18 |
| Flip rows | 810 | 830 | +20 |
| Etapas heading | 235 | 205 | −30 |
| Puestos | 821 | 783 | −38 |
| Puestos card | 456 | **458** | +2 |

**Flip boxes are pixel-identical: 380 × 250 at x=134 / 534 / 934, nine of them.**

The breadcrumb (68px here vs the original's empty 20px) is a deliberate difference.
Remaining deltas are section-padding nuance, not structure.

## Note on `/posventa`

It shares the same component and will be affected by the variant work. Its own layout has
not been inspected yet — it needs its own pass, including Puestos icons.
