# PLAN — `/contacto` parity

Branch: `feat/contacto`. The last page. Follows `PLAN.md`, `PLAN-HEADER.md`,
`PLAN-FOOTER.md`, `PLAN-PREVENTA.md`, `PLAN-VENTA.md`, `PLAN-POSVENTA.md`,
`PLAN-MARKETING.md` — all merged.

The original is Elementor page template **27** (`post-27.css`) and is the simplest page on
the site: **two sections, 1136px total**. All values measured on the live DOM at viewport
**1463**.

But it is *not* a small job, because it is the only page where two long-standing
approximations become directly visible and measurable. Both are shared-component fixes that
will change the four already-merged inner pages — for the better, and this plan says exactly
how much.

---

## Section map

| # | Elementor id | What it is | Width | y | Height | Padding | Background |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `#0a10a20` | Breadcrumb — **a real 280px hero** | full | 0 | **280** | — | `breadcrumb.jpg` over `#1B1F2E` |
| 2 | `#28113bfd` | Contacto | boxed | 280 | **856** | `90px 0 120px` | **none** + white @ 0.97 |

Total 1136.

---

## 1 — The breadcrumb is real on this page only `#0a10a20`

This is the find that matters most. On `/preventa`, `/venta`, `/posventa` and `/marketing`
the `gva_post_breadcrumb` widget renders **empty** (1–20px), which is why we substituted our
own compact navy bar and recorded it as a deliberate deviation. On `/contacto` the same
widget renders a **full 280px hero**.

| Part | Spec |
| --- | --- |
| `.custom-breadcrumb` | `breadcrumb.jpg`, `cover`, `center`, over `background-color: #1B1F2E`. **No overlay** — the widget has no `:before`/`:after`; the photo is simply navy-toned. 280px tall. |
| `.container` | 1200px, `padding: 0 12px` |
| `.breadcrumb-container-inner` | 1176px, `padding: 160px 0 120px`, `position: relative` |
| `ol.breadcrumb` | **`position: absolute; right: 0; bottom: 0`** — a white tab anchored to the bottom-right corner. `background: #FFFFFF`, `border-radius: 10px 10px 0 0`, `padding: 25px 25px 22px`, measured **202 × 62** at x=1110. |
| `li` | `float: left`, `padding: 0 10px`, DM Sans **15px / 15px weight 700** |
| `li a` ("Home") | `#1B1F2E`, no underline |
| `li.active` ("Contacto") | `#0787D9` |
| separator | `li:after { content: "/" }`, `#CCCCCC`, suppressed on the first item so exactly one slash renders between the two |

### Decision: keep both breadcrumbs

`Breadcrumb.tsx` is shared by all five inner pages. Making it match this 280px hero
everywhere would add ~212px to four pages whose geometry is verified and merged, on pages
where **the original shows no breadcrumb at all**.

So the component gets a `variant`:

- `"bar"` (default) — the existing 68px navy bar, kept on the four pages where the original
  renders nothing. Already a documented deviation; unchanged, so those pages cannot move.
- `"hero"` — this 280px reproduction, used only on `/contacto`, where the original really
  does render it.

That keeps us faithful wherever the original actually exists, and leaves the deliberate
deviation exactly where it already was.

---

## 2 — Contacto `#28113bfd`

Boxed 1200, padding `90px 0 120px` (`0 0 70px` ≤1024, `70px 0` ≤767), columns vertically
centred (`align-items: center`).

**No background image.** Only the white `0.97` overlay over nothing — so effectively white.
This matches the *home* page's contact section, not the cycle pages' (`bg-5.jpg` behind the
same overlay). Our `/contacto` already passes no `backgroundImage`, so this is already right.

Two columns of **600px** at x=124 and x=724, each with `padding: 0 15px` → **570px** of
content. Both columns measure 646 tall; the section is 90 + 646 + 120 = **856**.

### Left column (x=139, 570 wide)

| Widget | Geometry |
| --- | --- |
| `gva-heading-block` | 570 × 280, `margin-block-end: 20px` |
| `html` (founder signature) | 390 × 85 @ x=149, y=732 |
| `social-icons` (LinkedIn) | 37 × 34 @ x=560, y=732 |
| `image` (e-book thumb) | 219 × 137 @ x=139, y=827 |
| `icon-list` (4 cycles) | 321 × 130 @ x=388, y=825 |

### Right column — the form (x=739, 570 wide, 646 tall)

Bordered box: `padding: 45px`, `border-width: 4px 1px 1px 1px`, top edge `#0787D9`, the
other three `#C9D5DB`. 646 = 551 (form) + 45 + 45 + 4 + 1.

| Part | Spec |
| --- | --- |
| `.row` | 499 × 459, `margin: 0 -10px` (20px gutters) |
| six `col-md-6` | 249 × **82** each (60px field + 22px gap), `padding: 0 10px`, at y=419 / 501 / 583 |
| text inputs | 229 × 60, `padding: 0 15px`, `line-height: 40px`, DM Sans 14px, `#EDF3F6`, no radius |
| select | 229 × 60, `padding: 0 35px 0 12px`, **`line-height: 60px`** |
| textarea | 475 × **180**, `padding: 10px 20px`, `line-height: 40px`, `rows="10"` |
| textarea wrap | 499 × **191**, `padding: 0 12px`, `margin-bottom: 22px` |
| submit block (`col-md-3`) | 120 × **93** = 35px top padding + the button |
| submit button | **211 × 58**, Gilmer **14px / 22px weight 700**, `ls 2px`, uppercase, `padding: 18px 30px`, radius 0, `#0787D9` |

---

## The −18px that has been on every page since `/preventa`

Every inner page's Contacto section has measured exactly **−18** against the original, and it
was written off four times as "padding nuance". It is not. This page isolates it, because
here the contact section *is* the page.

Our form box is **555 × 628** against the original's **570 × 646**. Three separate causes:

### a) Columns are 15px too narrow (−15 wide)

`ContactSection` uses `container-bc` (1200 max-width, 15px padding → 1170 content) and then
`lg:w-1/2` + `px-[15px]`, giving 555. The original's columns are **600 = half of the full
1200**, with the 15px padding *inside* them → 570.

This is the same "inner grids span the full 1200, not the 1170 content box" rule already
recorded in `PLAN.md` for the flip boxes and the Ciclos cards. The contact section was never
converted. Fix: `container-bc px-0` with the 15px on each column.

### b) The submit button is 8px short (−8 tall)

Ours renders **50px**; the original is **58px**. Padding is right (`18px 30px`); the
line-height is not — the original is **`22px`**, ours is `leading-none` (14px).
18 + 18 + 22 = 58.

This is the same `btn-cta` line-height found on `/marketing` last commit, where `SquareCta`
already uses `leading-[22px]`. The contact submit is the same theme button and was simply
missed.

### c) The textarea's line box adds 11px (−11 tall)

The textarea itself is **180px in both** — that value was already tuned correctly. But the
original's `.wpcf7-form-control-wrap` measures **191**. The extra 11px is the descender gap
under an inline-block inside a block with `line-height: 32.4px`.

Ours does not have it because our textarea is a direct grid child, and grid items are
blockified — no line box, no gap.

This one is an artifact of the original's markup rather than a designed value, so it is worth
being explicit: **we reproduce it**, by wrapping the textarea in a plain block that carries
the inherited `line-height: 32.4px`. It is not a defect like `/marketing`'s PHP warning — it
is simply how the original lays out, it is load-bearing for the 646px form height, and
reproducing it makes five pages match instead of four being 18px short. Flagging it rather
than silently absorbing it.

(a) + (b) + (c) = 15 wide, 19 tall — and 628 + 19 = 647 against 646, i.e. the residual
becomes ±1 rounding.

### Consequence: four merged pages will move

`/preventa`, `/venta`, `/posventa` and `/marketing` all render `ContactSection`. Fixing this
changes each of their Contacto sections from 868 to ~886 — **which is the original's value on
all four**. So every page gets *more* correct, but four verified pages change, and every one
of them must be re-measured before this merges.

---

## Work items

- [x] `Breadcrumb`: add the `"hero"` variant (280px, absolute white corner tab).
- [x] `ContactSection`: `container-bc px-0` + 15px per column, so columns are 600/570.
- [x] `ContactForm`: submit `leading-[22px]` (58px tall); wrap the textarea so its 11px line
      box is reproduced.
- [x] `/contacto/page.tsx`: hero breadcrumb, `h1` title, section padding `90px 0 120px`.
- [x] Founder row as a 3-column inner section (72% / 10% / 17.3%).
- [x] Cycle list at 32.4px rows.
- [x] Verify `/contacto` at 1463.
- [x] Re-measure `/preventa`, `/venta`, `/posventa`, `/marketing`.
- [x] `npm run build` + `npx eslint`.
- [ ] Verify 1024 / 768 / 390px.

## Result — `/contacto` is pixel-exact at 1463

Every measured element matches the original:

| Element | Original | Replica |
| --- | --- | --- |
| Breadcrumb hero | 280 | **280** |
| Contacto section | 856 | **856** |
| Breadcrumb tab | 202 × 62 @ x=1110 | **202 × 62 @ x=1110** |
| Columns | 600 @ x=124 / 724 | **600 @ x=124 / 724** |
| Heading block | @ y=422 | **@ y=422** |
| Founder row | 570 × 105 @ y=722 | **570 × 105 @ y=722** |
| LinkedIn icon | @ x=560 | 34 × 34 @ x=559 |
| Cycle row | 570 × 137 @ y=827 | **570 × 137 @ y=827** |
| E-book image | 219 × 137 @ x=139 y=827 | **219 × 137 @ x=139 y=827** |
| Cycle list | 321 × 130 @ x=388 y=825 | **321 × 130 @ x=388 y=825** |
| Form box | 570 × 646 @ x=739 y=370 | **570 × 646 @ x=739 y=370** |
| Submit button | 211 × 58 | **211 × 58** |

Beyond the three causes above, two further fixes were needed and found by measuring:

- The founder signature rendered 43px tall instead of 35 — `reey` at 24px was inheriting the
  body's `1.8` line-height (43.2px) instead of the original's flat **32.4px**.
- The heading needed **40px** of space below it, not 20: the original has the
  `.gsc-heading`'s own 20px `margin-bottom` *inside* the widget box **plus** Elementor's 20px
  `--widgets-spacing` between widgets. Only one of the two was present.

## The four merged pages, re-measured

Baselines were recorded before the change, then diffed after — same method as the
`FlipGridSpec` refactor:

| Page | Sections changed | Contacto before | after | original |
| --- | --- | --- | --- | --- |
| `/preventa` | Contacto only | 868 | **886** | 886 |
| `/venta` | Contacto only | 868 | **886** | 886 |
| `/posventa` | Contacto only | 868 | **886** | 886 |
| `/marketing` | Contacto only | 868 | **886** | 886 |

Every other section on all four is byte-identical, and all flip-box geometry is unchanged
(4 × 342×500, 9 × 380×250, 3 × 380×400, 8 × 270×430). The long-standing −18 is gone from
every page.

## Resolved questions

1. **Contacto title level** — measured: **`h1`** on this page (the only `h1` in template 27).
   Our code already did this.

## Unresolved: the original's social icons have changed since we built the header

Measuring this page's LinkedIn button turned up something that is **not** a `/contacto`
issue but a site-wide one, so it is left untouched here and flagged for a decision.

Every social icon on the live site — header (template 1137), this page (27) and the footer
(866) — now computes to:

- `background-color: #E67370` (salmon)
- white glyph
- **`outline: rgb(255, 0, 0) solid 2.857px`** — a thick red outline, on all of them

Confirmed visually, not just in computed styles: the header's three icons render as salmon
squares inside red boxes. 13 elements on the page carry that red outline.

This contradicts what was measured when those pages were built — `PLAN-HEADER.md` records
"transparent social icons" and `PLAN-FOOTER.md` records `48×48`, `background #FFFFFF`, icon
`#00294B`. Both were verified at the time, which points to the **original having changed
since**, most likely an edit to the Elementor global social-icon style that also introduced
the red outline by accident.

Our replica currently renders three different treatments, matching what each plan recorded:
transparent in the header, white in the footer, `#0077b5` LinkedIn blue in the contact
section. None of them matches the live site today.

Deliberately **not** changed as part of this page, because it affects two merged, verified
areas and because the red outline is very likely a mistake on their side rather than a design
decision. Needs a call: match the live site exactly (salmon + red outline), match the salmon
but drop the outline, or leave our current treatment.

## Deviations from the original, recorded

| # | Original | What we do | Why |
| --- | --- | --- | --- |
| 1 | Breadcrumb renders empty on the other four inner pages | Compact navy bar there, faithful 280px hero here | Pre-existing decision (`PLAN-PREVENTA.md`); this page is the one place the original has a real breadcrumb, so it gets the real one |

## After this page

Every page will be built and verified at 1463. Remaining across the project:

1. **Responsive has never been diffed against the originals** — all seven pages verified at
   one width only. Now the single largest open risk, and the agreed next task.
   `resize_window` does not work here; use fixed-width `<iframe>`s in a temp page under
   `public/`, noting the original blocks framing so only our side can be inspected that way.
2. Pre-deploy: Gilmer/reey → `woff2`, hero backgrounds from CSS `background-image` to
   `next/image` with `priority`, Lighthouse.
3. A Playwright screenshot-diff harness. Four pages carried the same −18px form defect
   undetected because manual checking only finds what you go looking for.
