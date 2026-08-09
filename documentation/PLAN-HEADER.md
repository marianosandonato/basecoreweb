# PLAN — Header parity

Branch: `feat/header`. Companion to `PLAN.md` (home page), which is complete.

Goal: make the site header match `https://basecoresales.com/` exactly. The header is shared
by every page, so this also moves the inner pages closer to parity.

---

## Reference sources

| Source | Used for |
| --- | --- |
| Live DOM at 1449px (computed styles + measured rects) | Desktop geometry, typography, colours |
| `wp-content/uploads/elementor/css/post-1137.css` | The header is Elementor template **1137** — column widths, breakpoints |
| `themes/conult/assets/css/template.css` | `.header-mobile`, `.header-position-absolute`, sticky rules |

---

## The key structural finding

`header.wp-site-header.header-builder-frontend.header-position-absolute` has **two** children,
and only one is visible at a time:

```
header.wp-site-header
├── div.header-mobile.header_mobile_screen   ← display:block ONLY at <= 1024px
└── div.header_default_screen                ← the Elementor template
    └── div.header-builder-inner             ← position: absolute; width: 100%
        ├── section  navy bar, 58px          ← becomes position:fixed on scroll
        └── section  transparent, 203px      ← holds a 200x200 logo, scrolls away
```

Two consequences the current replica gets wrong:

1. **Only the desktop header overlays the page.** `position: absolute` lives on
   `.header-builder-inner`, and `.header-mobile` is *outside* it — so at ≤1024px the header
   is in normal flow and pushes the hero down. Our `Header.tsx` is currently absolute at
   every width.
2. **There is a second, transparent bar carrying the logo**, sitting over the hero below the
   navy bar. This is why our logo looks invisible: the asset
   (`logotipo-base-core-sales-marketing-espana-latam.png`) is white-on-transparent and we
   render it on white.

---

## Desktop spec (≥ 1025px)

### Bar A — navy, 58px, sticky

- Full-bleed `#00294B`; inner container 1200px centred; height 58px.
- On scroll it becomes `position: fixed; top: 0; z-index: 999` (background stays `#00294B`).
  A plain `position: sticky; top: 0` reproduces this, since it already sits at y=0.
- Three columns, all vertically centred:

| Column | Width | Padding | Contents |
| --- | --- | --- | --- |
| Info | `45%` | `0 15px` | inline icon-list |
| Nav | `41.333%` | `0 15px` | nav menu, right-aligned |
| Social | `13%` | `10px 15px` | 3 icons, `justify-content: flex-end` |

**Info list** (`#f2ea8dc`) — inline items, `margin: 0 10px` each side
(`calc(20px/2)`), icons `12px` `#FFFFFF`, `padding-right: 1px`, icon→text gap
`0.25em`, text `13px` `#D2DCE5`:

| Icon | Text | Link |
| --- | --- | --- |
| `fas fa-map-marker-alt` | Barcelona - España | — |
| `far fa-envelope` | info@basecoresales.com | `mailto:` |
| `fas fa-phone` | +54 11 5564 3798 | `tel:` |

> ⚠️ On the original the phone **text** is the Argentina number (+54 11 5564 3798) but the
> `tel:` href points at the Spain number (+34 607 206 559). That is a bug on the live site —
> the link dials a different number than the one displayed. I am linking the displayed
> number instead of replicating the defect. Flagging it so the client can confirm which
> number should be the contact point.

**Nav** (`#1ba26a2c`) — DM Sans `14px` / weight `300`, `#FFFFFF`, `padding: 13px 10px`,
hover + active `#0787D9`. A `1px` divider `rgba(255,255,255,0.08)` (~16px tall) sits between
items. Right-aligned within the column. Items: Home · Preventa · Venta · Posventa ·
Marketing · Contacto.

**Social** (`#c5cb0a4`) — LinkedIn, Facebook, Instagram. Each `38×38`, `border-radius: 10%`,
**transparent** background (`#FFFFFF00`), icon `19px` white, hover background `#0787D9`.

### Bar B — transparent, 203px

- Sits directly below Bar A, over the hero, and scrolls away (not sticky).
- Column `25%`, padding `0 15px` → a 270px content box.
- Logo `logotipo-base-core-sales-marketing-espana-latam.png` (source 923×923), rendered
  `200×200`, `margin-top: 3px`, horizontally centred in the 270px box → lands at x=174 when
  the container starts at x=124.

---

## Mobile / tablet spec (≤ 1024px)

Entirely different markup — white, **in normal flow** (so it pushes the hero down), with a
`0 5px 10px rgba(0,0,0,0.05)` shadow.

- **`.topbar-mobile`** — background `#1b1f2e`, padding `5px 15px`, font `14px`, colour
  `#d2dce5`, links hover `#0787D9`. Flex, space-between: info on the left (hidden ≤310px),
  social icons on the right.
- **`.header-mobile-content`** — padding `15px 20px 13px` (≤800px) / `17px 30px 15px`.
  - left 50%: `logo-movil-base-core-sales.png`, `max-width: 150px`, `padding-top: 6px`
  - right 50%: search + hamburger, icons `#1b1f2e`, hamburger `30px`

> The original has a **search** control here. The replica has no search feature, so it is
> being omitted rather than faked. Worth confirming this is wanted.

---

## Work items

- [x] Split `Header.tsx` into a desktop bar (≥1025px, absolute overlay) and a mobile bar
      (≤1024px, in flow).
- [x] Bar A: navy 58px, 45/41.333/13 columns, pinned on scroll.
- [x] Bar A: info icon-list, nav with dividers, transparent social icons.
- [x] Bar B: transparent with the 200×200 white logo.
- [x] Mobile header: `#1b1f2e` topbar + white row with 150px logo and hamburger.
- [x] Keep the existing off-canvas mobile menu; restyle to match.
- [x] Verify at 1449 / 1024 / 768 / 390px.
- [x] Confirm the hero still measures `left:154 top:349` on desktop after the change.

## Result — measured against the original (offsets relative to container left)

| Element | Original | Replica |
| --- | --- | --- |
| Info list, first item | x=15 | **x=15** |
| Nav, last item | x=940, w=81 | **x=940, w=81** |
| Social icons | x=1063 / 1101 / 1139, 38×38 | **identical** |
| Logo | x=50, y=61, 200×200 | **identical** |
| Bar height | 58px | **58px** |
| Hero after the change | `top:0`, h1 at `154,349` | **unchanged** |

Only deviation: the *first* nav item sits at x=580 vs 577 — 3px accumulated across the five
1px dividers. The nav is right-aligned and its last item is exact, so this is not visible.

Two container notes worth remembering (same class of bug as the home-page grids): the
Elementor header container is a **flush 1200px** with the 15px inset on each column, so the
row uses `container-bc px-0`; and the logo's `margin-top: 3px` had to become `padding-top`
on the column, because as a first-child top margin it collapsed through its parent.

## Open questions

1. **Phone number mismatch** — the original displays the Argentina number but its `tel:`
   href dials the Spain one. I linked the displayed number. Which should it be?
2. **Search** — the original's mobile header has a search control. Omitted, since the
   replica has no search. Add one, or leave it out?
3. **Mobile topbar content** — the original shows contact info on the left; at 390px there
   is only room for the email, so that is what is rendered. Confirm that is acceptable, or
   specify what should be dropped first.
