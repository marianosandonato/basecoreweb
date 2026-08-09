# PLAN — Responsive parity

Branch: `feat/responsive`. Follows every page plan; all seven pages are built and merged, and
all were verified at **1463 only**. This closes the largest open risk in the project.

---

## Method: the original *can* be measured at any width

Every previous plan recorded that this was impossible — `resize_window` silently fails
(the window is maximized; it reports success but `innerWidth` stays 1463), and the original
sends `X-Frame-Options`, so it cannot be framed.

There is a way around both, and it is now built:

1. `curl` each original page to `public/_rwd/orig-<page>.html` and inject
   `<base href="https://basecoresales.com/">` into `<head>`. All CSS, fonts and images still
   load from the origin; only the **document** becomes same-origin.
2. Load it in an `<iframe>` of the target width alongside our own page at the same width
   (`public/_rwd/diff.html?page=<name>&w=1024,768,390`).
3. Because the framed document is same-origin, `getBoundingClientRect()` works inside it —
   so both sides are measurable at any viewport.

**The iframe must be short enough to force a vertical scrollbar** (`h=700`). A real browser
window at `innerWidth` W has a scrollbar, so its layout viewport is W−15; an iframe without
one lays out at the full W and shifts every centred element by ~7px.

**Harness validated before use:** framed original at 1463 reproduces the live page exactly —
sections 280 / 856, columns 600 @ x=124 / 724, form 570 × 646 @ x=739, breadcrumb tab
202 × 62 @ x=1110. Identical to the values measured directly on the live site.

Caveat: Font Awesome's webfonts fail CORS inside the frame, so FA icon glyphs render as
fallback boxes. Section geometry is unaffected (verified at 1463), but any measurement of an
FA icon's own box should be taken on the live page instead.

`public/_rwd/` is gitignored and gets deleted before the final commit.

---

## Root cause: our breakpoints do not line up with Elementor's

Confirmed from the Elementor kit (`post-22.css`): the only breakpoints in play are
**767**, **1024** and **1200**.

| Elementor | Range |
| --- | --- |
| Desktop | ≥ 1025px |
| Tablet | 768 – 1024px |
| Mobile | ≤ 767px |

Tailwind's defaults are `sm 640`, `md 768`, `lg 1024`, `xl 1280`. Two consequences, and they
explain most of the survey below:

1. **`lg` fires one pixel early.** `lg:` is `min-width: 1024px`, but Elementor's desktop
   starts at **1025**. At exactly 1024 we render desktop styling where the original renders
   tablet.
2. **We used `lg:` as the stack/unstack boundary, but the original's is 768.** Between 768
   and 1023 the original still renders its *tablet* layout — multi-column, side-by-side —
   while we have already collapsed to the mobile stack. This is the single biggest source of
   error, and it is why almost every section is far too tall at 768.

`md` (`min-width: 768px`) is exactly Elementor's tablet floor, so it is the correct
stack/unstack boundary. A custom breakpoint is needed for the desktop edge:

```css
@theme {
  --breakpoint-dt: 1025px;   /* Elementor desktop */
}
```

Then: `md:` = "tablet and up", `dt:` = "desktop only". `lg:` should disappear from layout
code that maps to an Elementor breakpoint.

---

## Survey — measured, both sides, at 1024 / 768 / 390

Section heights in document order. The breadcrumb is excluded from judgement on the four
cycle/marketing pages: the original's widget is empty there (0–20px) and ours is a
deliberate 68px bar.

### `/contacto`

| Width | Original | Ours |
| --- | --- | --- |
| 1024 | 280 / **686** | 280 / **856** |
| 768 | 280 / **674** | 280 / **1173** |
| 390 | **280** / 1672 | **202** / 1648 |

The contact section stays two-column down to 768 on the original; we stack at 1024.
The breadcrumb hero keeps its `160px / 120px` padding at every width — ours shrinks it.

### `/preventa`

| Width | Original | Ours |
| --- | --- | --- |
| 1024 | 20, **700**, 125, 520, 575, 594, 308, 686 | 68, **560**, 117, 520, 753, 770, 300, 786 |
| 768 | 20, 700, 118, **520**, 562, 521, 296, 674 | 68, 560, 110, **1020**, 484, 666, 283, 1243 |
| 390 | 1, 428, 111, 2080, 588, 938, 316, 1602 | 68, 498, 103, 2020, 600, 990, 322, 1718 |

Flip boxes stay **4-across at 768** on the original (520). We drop to 2-across (1020).

### `/venta`

| Width | Original | Ours |
| --- | --- | --- |
| 1024 | 20, 700, 225, **270 / 270 / 270**, 575, 624, 308, 686 | 68, 560, 197, **830**, 753, 750, 300, 786 |
| 768 | 20, 700, 218, **270 / 270 / 270**, 562, 551, 296, 674 | 68, 560, 190, **1370**, 484, 646, 283, 1243 |
| 390 | 0, 440, 211, 810 / 810 / 810, 588, 938, 316, 1602 | 68, 444, 183, 2450, 600, 970, 322, 1718 |

3-across down to 768, 1-across at 390. We are 3-across at 1024, 2-across at 768.

### `/posventa`

| Width | Original | Ours |
| --- | --- | --- |
| 1024 | 20, **700**, 210, 420, 575, 629, 686 | 68, **560**, 182, 440, 753, 780, 786 |
| 768 | 20, 700, 203, **420**, 562, 556, 674 | 68, 560, 175, **860**, 484, 676, 1243 |
| 390 | 1, 424, 171, 1260, 588, 938, 1602 | 68, 434, 168, 1280, 600, 1000, 1718 |

### `/marketing`

Ours has 13 top-level children to the original's 11, because the two 100px spacers are
separate elements on our side (the original carries them as section margins). Compare by
name, not by index.

| Width | Original | Ours |
| --- | --- | --- |
| 1024 | 1, **700**, 133, 470, 470, 455, 1078, 260, 673, 353, 690 | 68, **560**, 100, 133, 470, 454, 100, 448, 849, 263, 638, 285, 786 |
| 768 | 1, 700, 126, **470 / 470**, 476, 1290, 260, 789, 353, 674 | 68, 560, 100, 126, **900 / 884**, 100, 464, 630, 247, 516, 278, 1243 |
| 390 | 0, 461, 119, 1780, 1800, 585, 1090, 375, 671, 277, 1668 | 68, 434, 100, 155, 1760, 1744, 100, 631, 867, 363, 637, 314, 1718 |

Flip rows hold 4-across at 768 (470) on the original; ours nearly doubles (900).

### `/` (home)

| Width | Original | Ours |
| --- | --- | --- |
| 1024 | 620, **1086**, 545, 530, 623, 607, 403, 682 | 620, **596**, 515, 574, 790, 938, 404, 856 |
| 768 | **543**, 1106, 545, **984**, 738, 639, 453, 674 | **350**, 1052, 890, **965**, 927, 561, 384, 1173 |
| 390 | 284, 860, 1730, 1340, 1024, 710, 463, 1672 | 350, 809, 1640, 1322, 936, 675, 464, 1648 |

**Home has 17px of horizontal overflow at 1024** (`scrollWidth − clientWidth = 17`) — a real
bug: the page scrolls sideways. Every other page/width measured zero overflow on both sides.

---

## Fix list

### Foundations

1. Add `--breakpoint-dt: 1025px` to `@theme` in `globals.css`.
2. Sweep layout code for `lg:` used as an Elementor boundary and re-map:
   - stack/unstack → `md:`
   - desktop-only values → `dt:`
   `lg:` may stay only where it is genuinely ours and maps to nothing in the original.

### Components

3. **`FlipCardGrid`** — `grid-cols-1 md:grid-cols-{3,4}`; drop `sm:grid-cols-2`. The original
   never renders a 2-up flip grid at any width.
4. **`PageHero`** — tablet height is **700**, not 560; mobile ≈ 424–461 and varies per page
   because it is content-driven (spacer + Montserrat sizes), not a fixed `min-height`.
   Measure each page rather than assuming one value.
5. **`ContactSection`** — two columns down to 768 (`md:flex`), section padding `0 0 70px` at
   ≤1024 and `70px 0` at ≤767 (from `post-27.css`), and the left column's inner rows
   (founder 3-col, e-book + list 2-col) need their own tablet/mobile behaviour.
6. **`Breadcrumb`** (`hero`) — keep `160px / 120px` at all widths; drop the `max-md` shrink.
7. **`ServiceCards` / `MethodologyGrid` / `Counters`** — audit column counts against the same
   768 boundary.
8. **Home hero** — 620 at 1024, **543** at 768, 284 at 390; ours is 350 below 1024.

### Then

9. Find and fix the 17px overflow on home at 1024.
10. Re-verify **all seven pages at 1463** — this touches shared components, so desktop parity
    must be proven unchanged, using the baseline-then-diff method already used twice.

---

## Work items

- [ ] Harness (done — `public/_rwd/`, gitignored).
- [ ] `--breakpoint-dt: 1025px`; re-map `lg:` across layout components.
- [ ] `FlipCardGrid` column counts.
- [ ] `PageHero` + home hero tablet/mobile heights.
- [ ] `ContactSection` + `Breadcrumb` hero.
- [ ] Remaining grids (`ServiceCards`, `MethodologyGrid`, `Counters`).
- [ ] Home 1024 horizontal overflow.
- [ ] Iterate per page at 1024 / 768 / 390 until deltas are padding-level.
- [ ] Re-verify all seven pages at 1463 (baseline → diff).
- [ ] `npm run build` + `npx eslint`; delete `public/_rwd/`.

## Open questions

1. **How close is close enough?** Desktop reached 0px on most sections. Three widths × seven
   pages is a much larger surface, and some of it is content-driven (text wrapping at narrow
   widths differs with font rendering). Proposing: **structural parity** — same column counts,
   same stacking order, same section paddings, no overflow — with residual deltas under ~20px
   per section treated as acceptable, rather than chasing 0 everywhere.
2. **Breadcrumb at mobile.** Ours is 68px where the original is 0–20px on five pages. Already
   a deliberate deviation at desktop; assumed to stay.

## Not in scope

The social-icon discrepancy from `PLAN-CONTACTO.md` (salmon `#E67370` + red outline on the
live site) is still unresolved and is not part of this pass.

---

## Progress — two implementation passes done

### Fixed

| Area | Result |
| --- | --- |
| Breakpoint mapping | `md:` = tablet and up, `dt:` = desktop only, across every layout component |
| `--breakpoint-dt` | **must be rem** (`64.0625rem`); as `1025px` Tailwind emitted it above `md` and `md:` silently won at desktop |
| Flip grids | Exact at 1463 / 1024 / 768 / 390 on `/preventa` and `/venta` |
| Inner-page heroes | `height: 100vh` at ≥768, content-driven at ≤767 — exact at three widths |
| Horizontal overflow | 0 at every width on every page (was 15–17px on home) |
| Puestos / Ciclos grids | Percentage cells, matching the original at every width |
| Contacto | Exact at 1463 and 1024 |

### Found at desktop while doing this

Four things that were wrong at 1463 and that section-height checks could not catch,
because a `min-height` or a coincidence masked them:

1. Heroes are `100vh`, not 746px / 690px. `/marketing`'s hero is 746 on the live site
   right now, not the 690 recorded in `PLAN-MARKETING.md`.
2. The hero tagline is DM Sans 18px/32.4px, not Montserrat 30px/40px.
3. The Puestos grid is 35% cells, not `max-w-[994px]` — that matched only at 1463.
4. A flip row's extra 20px is cell padding, not section padding. The old `pb-[20px]`
   added a spurious +20 to every extra row on `/venta` and `/posventa`; both are now exact.

### Remaining (all mobile)

| Page | Section | Δ at 390 |
| --- | --- | --- |
| home | hero | +66 (Revolution Slider scales fluidly below 480; ours is a flat 350) |
| home | Metodología / NaN / Recruiting | −80 / −88 / −85 |
| cycle pages | contacto | +46 |
| cycle pages | recruiting | −38 after the mobile padding fix |
| `/marketing`, `/posventa` | not re-swept since the shared-component fixes | — |

Nothing here is structural — column counts, stacking order and paddings match; these
are content-height differences at one width. Per the standard agreed in this plan
(structural parity, ~20px tolerance) they are the tail, not the body, of the work.

### Note on the harness

`__measure()` reads **stale values** if called too soon after an edit or a reload —
several readings during this pass were wrong by hundreds of px and corrected on a
second call. Always measure twice, or wait ~1.5s after `__ready`, before believing a
number. Every figure recorded above was confirmed by a second read.

---

## Final state (390px pass complete)

Verified at 1463 and 390 on all six page templates, both sides measured.

| | 1463 | 390 |
| --- | --- | --- |
| Flip grids | **0** on all four pages | **0** on all four pages |
| Contacto | **0** | **−1** |
| Heroes (inner pages) | **0** | −36 to −113 (content-driven) |
| Horizontal overflow | **0** | **0** |
| Home | hero 0, contacto 0 | hero **+1**, metodología **0**, NaN +8, contacto −1 |

### Still open, all content-height at 390 only

| Page | Section | Δ |
| --- | --- | --- |
| cycle pages | hero | −36 (`/preventa`) to −113 (`/venta`) |
| cycle pages | recruiting | −38 |
| cycle pages | puestos | −18 |
| cycle pages | next-cycle | +27 |
| home | Nosotros / Recruiting | −31 / −35 |

These are text-wrapping differences inside sections whose column counts, stacking
order and paddings all match. The heroes are the largest and are content-driven at
≤767 — the original has no min-height there, so the section is exactly as tall as
its text wraps, and Gilmer/Montserrat wrap slightly differently from the original's
rendering of the same strings.

Pre-existing desktop deltas untouched by this work: `etapasHd` −30 on `/venta` and
`/posventa`, `puestos` −35/−40 on the same two.
