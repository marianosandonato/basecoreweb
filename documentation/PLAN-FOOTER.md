# PLAN — Footer parity

Branch: `feat/footer`. Companion to `PLAN.md` (home page) and `PLAN-HEADER.md`, both merged.

The footer is Elementor template **866** and is shared by every page.

---

## Reference sources

| Source | Used for |
| --- | --- |
| Live DOM at 1449px (computed styles + measured rects) | Geometry, typography, colours |
| `wp-content/uploads/elementor/css/post-866.css` | Column widths, paddings, breakpoints |
| `themes/conult/.../line-awesome/fonts/la-solid-900.svg` | `la-envelope-open`, `la-map-marker` glyphs |
| `plugins/conult-themer/assets/icons/icomoon.svg` | `icon-conult-phone` glyph (U+E902) |

---

## Structure

```
footer.clearfix                       bg #00294B, 1449x665
├── section #5043f31                  padding 110px 0 70px, 582px tall
│   ├── background: #00294B + footer-base-core-sales.jpg (cover, center)
│   ├── overlay:    #00294B @ 0.40
│   └── container 1200 (flush — the 15px inset lives on the columns)
│       ├── col #c46371a  39%   padding 0 25px 0 15px   → logo 290x290
│       └── col #688c23f  61%   padding 6px 15px 0
│           ├── inner section #5b79510   (3 columns)
│           │   ├── #d8f7e10  26%      "Servicios" + link list
│           │   ├── #8755679  25.662%  (empty spacer)
│           │   └── #a4e6704  48%      "Contacto" + 2 icon-boxes
│           └── inner section #69de51e   border-top 1px #FFFFFF1A,
│               │                        margin-top 25px, padding-top 25px
│               ├── #ae40c76  (empty)
│               └── #e5a4404  justify-end, padding-left 29px
│                   ├── social icons (3)
│                   └── icon-box "Dónde estamos"
└── section #d01ae78                  bg #00294B, 83px
    └── centered copyright, widget padding 25px 0, border-top 1px #FFFFFF1A
```

## Values

**Logo** — `LOGO-BASE-CORE-SALES-CON-SLOGAN.png`, `max-width: 290px` → renders 290×290,
centred in its 418px widget. Inner section `margin-bottom: 40px` (30px ≤1024).

**Headings** ("Servicios", "Contacto") — Gilmer `20px` / `700`, `#FFFFFF`; widget
`padding-bottom: 2px`.

**Link list** — DM Sans `16px` / `400`, line-height `32.4px`, colour `#C5D2DD`, hover
`#FFFFFF`. No bullet icon. Items: Preventa · Venta · Posventa · Marketing.

**Icon boxes** (Email, Contactanos, Dónde estamos) — icon `22px` inside `13px` padding →
a `48×48` circle, background `#0787D9`, icon white; gap to text `16px`; title `14px`/`400`
`#C5D2DD` with `margin-bottom: 5px` (the "Dónde estamos" one is `15px`); description
`17px`/`500` `#FFFFFF`; widget `margin: 2px 0`.

| Box | Title | Value | Icon |
| --- | --- | --- | --- |
| `#e16a445` | Email | info@basecoresales.com | `las la-envelope-open` |
| `#d668fce` | Contactanos | +54 11 5564-3798 | `icon-conult-phone` |
| `#fd5ab33` | Dónde estamos | Barcelona - España | `las la-map-marker` |

**Social icons** — `48×48`, background `#FFFFFF`, icon `15px` `#00294B`, **square**
(`border-radius: 0`), `15px` gap. Hover: background `#0787D9`, icon white.

**Copyright bar** — DM Sans `16px`, `#C5D2DD`, centred:
`Base Core Sales © 2022 Todos los Derechos Reservados`.

## Responsive

| Breakpoint | Changes |
| --- | --- |
| ≤1024 | Section padding `70px 0`; both top columns go 100%; left column padding `0 15px 50px`; logo section margin-bottom 30px; copyright padding `20px 0` |
| ≤767 | Section padding `70px 0 50px`; headings centre; icon-box wrappers centre with `margin-left: 25px`; socials centre and left-align; spacer column gets `padding-top: 40px`, Contacto column `50px` |

---

## Deliberate deviations

1. **Service links.** The original points at the *old* slugs (`/presales/`, `/sales/`,
   `/support/`) — which our `next.config.ts` already redirects — so the replica links
   straight to `/preventa`, `/venta`, `/posventa`. Same destination, one less redirect.
2. **Marketing link.** On the original the footer's "Marketing" goes to the **external**
   `not-a-numb3r.com`, while the *header's* Marketing goes to the internal `/marketing`
   page. That looks like an oversight rather than intent. I have linked it internally to
   match the header — flagging it as an open question.

## Open questions

1. **Copyright year is hard-coded to 2022** on the original. I have replicated it exactly,
   on the principle that a stale year is cosmetic (unlike the header's `tel:` link, which
   actively dialled the wrong number). If you would rather it read the current year, it is a
   one-line change.
2. **Footer "Marketing" link** — external partner site, or the internal `/marketing` page?
   (see deviation 2)

## Work items

- [x] Extract the three footer glyphs as inline SVG (`src/components/footerIcons.tsx`).
- [x] Rebuild `Footer.tsx` to the structure above.
- [x] Verify geometry against the original at 1449px.
- [x] Check ≤1024 and ≤767 layouts.

## Result — measured against the original (offsets relative to container left)

| Element | Original | Replica |
| --- | --- | --- |
| Container width | 1200 | **1200** |
| Logo | x=79, 290×290 | **identical** |
| "Servicios" heading | x=483, w=168 | **identical** |
| "Contacto" heading | x=861, w=322 | **identical** |
| Icon-box circle | x=861, 48×48 | **identical** |
| Icon-box height | 70 | **70** |
| Social icons | x=863 / 926 / 989, 48×48 | **identical** |
| Section 1 height | 582 | **584** (+2) |
| Copyright bar height | 83 | **83** |

Three things caught during verification, all worth remembering for the inner pages:

1. **Elementor puts `margin-block-end: 20px` between widgets** (`--widgets-spacing` in the
   global kit, `post-22.css`). Missing it left section 1 short by 43px. Applied via flex
   `gap` rather than margins so it cannot collapse.
2. **Icon-box title and description inherit the body `line-height: 32.4px`** (18px × 1.8),
   not a compact leading — that alone accounted for most of the height gap.
3. **The socials and "Dónde estamos" are left-aligned** at the column start (+29px padding),
   despite the column carrying `justify-content: flex-end`: the widgets are full-width, so
   the flex alignment has no visible effect and `text-align: left` wins.

Also of note: `.elementor-element-fd5ab33` ("Dónde estamos") is the only one of the three
icon-boxes *without* the `margin: 2px 0` widget-container gutter, hence the `gutter` prop.
