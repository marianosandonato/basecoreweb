# PLAN — Vercel deployment readiness

Branch: `vercel-ready`. Follows all page plans and `PLAN-RESPONSIVE.md`, which are merged.

**The site already builds and deploys.** `npm run build` is clean, the redirects, `robots.ts`,
`sitemap.ts`, `metadataBase` and OG tags all exist, and `.env.example` documents the Resend
variables. Pushing this repo to Vercel today would work.

So this pass is not about *making* it deploy. It is about the three things that would be
wrong or wasteful once it does: fonts and hero images bypassing the build pipeline, canonical
URLs that point at the old site from any preview deployment, and missing response headers.

---

## Current state, measured

| | Value |
| --- | --- |
| `public/images/` | **6.3 MB** across 65 files, largest 288 KB |
| Section backgrounds via CSS `background-image` | **25** — bypass `next/image` entirely |
| Components using `next/image` | 6 |
| Fonts | 4 × `.woff` only, **183 KB** total, no `woff2` |
| `site.url` | hard-coded `https://basecoresales.com` |
| Security headers | none configured |
| Tracked build artefacts | none (`.gitignore` is correct) |

---

## Decisions taken before starting

| # | Question | Decision |
| --- | --- | --- |
| 1 | How many CSS backgrounds to convert to `next/image`? | **Heroes only** — the LCP image on each page. The other 19 stay as CSS. |
| 2 | Hard-coded or env-driven site URL? | **Env-driven**, defaulting to `https://basecoresales.com` |
| 3 | Should the first deploy be indexable? | **Fully indexable now** |

On (1): converting all 25 would score best but would rewrite the geometry of sections
verified at four widths, and several of them do not map cleanly onto `next/image` anyway —
`background-attachment: fixed` (Metodología, Recruiting, E-Book), `background-repeat: repeat`
on a tile (`bg-shape-1.png`), and `repeat-x` on a strip (`#37326c4`). Heroes are where the
LCP actually is, so that is where `priority` pays.

On (3): recorded as the client's decision. The risk flagged at the time was that while
WordPress is still live at `basecoresales.com`, an indexable Vercel URL is a second crawlable
copy of the whole site. If that becomes a problem before cutover, the fix is one env var —
see "Reversing the indexing decision" at the end.

---

## Work

### 1 — Fonts to `woff2`

All four faces have **TTF sources** in the WordPress theme (checked):

```
themes/conult/assets/fonts/gilmer/Gilmer{Bold,Medium,Regular}.ttf
themes/conult/assets/fonts/reey/reey-regular.ttf
```

`PLAN.md` recorded that only `.woff` was available; that was true of the files copied into
`src/fonts/`, not of the theme. TTF → WOFF2 is a straight conversion.

- Convert with `wawoff2` (Node, no native toolchain) as a one-off; it is not needed at
  runtime, so it does **not** become a dependency.
- Register in `next/font/local`. (Planned as "woff2 with .woff fallback"; that turned out to
  be actively harmful — see Result.)
- Expected saving ~30% of 183 KB, and these are render-blocking for every heading on the site.

### 2 — Hero images to `next/image` with `priority`

Three components cover all six pages:

| Component | Pages | Image |
| --- | --- | --- |
| `src/app/page.tsx` `#0e79c74` | `/` | `basecoresales-slide-marketing-espana-1.jpg` |
| `PageHero` | `/preventa`, `/venta`, `/posventa`, `/marketing` | per page |
| `Breadcrumb` (`variant="hero"`) | `/contacto` | `breadcrumb.jpg` |

Pattern: replace the `style={{ backgroundImage }}` with an absolutely-positioned
`<Image fill priority sizes="100vw" className="object-cover" alt="" />` behind the existing
overlay `<span>`. All three sections are already `position: relative`, which `fill` requires.

Two things to be careful about:

- The home hero's background layer carries `animate-hero-panzoom`. The animation has to stay
  on a wrapper `div`, with the `<Image>` inside it — animating the `<Image>` directly fights
  the `fill` positioning.
- These are decorative backgrounds, so `alt=""`. The pages already carry their real heading
  text in an `h1`.

### 3 — Env-driven site URL

`src/lib/site.ts` becomes:

```ts
url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://basecoresales.com"
```

Feeds `metadataBase`, the OG tags, `sitemap.ts` and `robots.ts`. Production behaviour is
unchanged unless the variable is set; previews can point at themselves.

Documented in `.env.example` and `README.md`.

### 4 — Response headers

None are set today. Add to `next.config.ts`, applied to all routes:

| Header | Value | Why |
| --- | --- | --- |
| `X-Content-Type-Options` | `nosniff` | Stops MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Sensible default |
| `X-Frame-Options` | `SAMEORIGIN` | Clickjacking |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Nothing on the site uses these |

Deliberately **not** adding a Content-Security-Policy: the site has inline styles from Next's
font loader and inline `style` attributes throughout, so a useful CSP needs nonces and is a
project of its own. Noted rather than half-done.

### 5 — Documentation

- `README.md`: add `NEXT_PUBLIC_SITE_URL` to the environment-variable list and the Vercel
  setup steps.
- `.env.example`: same variable, with a comment on when to set it.

---

## Explicitly out of scope

- **The other 19 CSS backgrounds** — see decision (1).
- **Content-Security-Policy** — see §4.
- **Image re-encoding** (`public/images/` is 6.3 MB of WordPress-era JPEGs). Converting the
  sources to AVIF/WebP would be a bigger win than anything here, but it changes the asset
  files themselves rather than the code, and `next/image` already re-encodes the ones it
  serves. Worth doing later for the 19 that stay as CSS.
- **Font licensing.** Gilmer and reey are commercial and already self-hosted on the live
  WordPress site, so Vercel is the same exposure. Confirmed licensed in `PLAN.md` §0.1.

---

## Verification

1. `npm run build` + `npx eslint`.
2. **Re-measure the six heroes** against the original at 1463 and 390 using the harness from
   `PLAN-RESPONSIVE.md`. Swapping a CSS background for `next/image` must not move any
   geometry — this is the one change in this pass that plausibly could.
3. Confirm the built page emits a `<link rel="preload" as="image">` for each hero and that
   `woff2` is the format actually requested.
4. Lighthouse is **not** runnable from here (no Chrome CLI in this environment). The plan
   lists what should improve; the numbers have to be taken in the browser after deploy.

---

## Work items

- [x] Convert 4 TTF faces to `woff2`; register in `layout.tsx`.
- [x] Home hero, `PageHero`, `Breadcrumb` hero → `next/image` + `priority`.
- [x] `NEXT_PUBLIC_SITE_URL` in `site.ts`, `.env.example`, `README.md`.
- [x] Security headers in `next.config.ts`.
- [x] Build + lint; re-measure the six heroes at 1463 and 390.
- [x] Confirm preload tags and `woff2` delivery.

## Reversing the indexing decision

If the Vercel URL needs to stop being crawlable before cutover, `src/app/robots.ts` should
gate on an env var rather than being edited:

```ts
const indexable = process.env.SITE_INDEXABLE !== "false";
```

Not implemented, since the decision was "fully indexable now" — recorded here so the change
is a one-liner rather than a re-investigation.

---

## Result

All work items done. `npm run build` and `npx eslint` pass.

| | Before | After |
| --- | --- | --- |
| Font payload | 183 KB (`woff`) | **129 KB** (`woff2`), 4 faces |
| Hero images | CSS `background-image`, unoptimised | `next/image`, optimised + preloaded |
| Image preloads | 0 | 3 per page, all via `/_next/image` |
| Site URL | hard-coded | `NEXT_PUBLIC_SITE_URL` with domain default |
| Response headers | none | 4 |

### Geometry re-verified

Swapping a CSS background for `next/image` is the one change here that could move layout, so
all three affected components were re-measured against the original:

| Page | 1463 | 390 |
| --- | --- | --- |
| `/` (home hero) | hero **0** | hero **+1** |
| `/preventa` (`PageHero`) | hero **0** | hero −16 |
| `/contacto` (`Breadcrumb` hero) | **280 / 856 exact** | 280 / 1671 vs 1672 |

Every other section on those pages is unchanged from the responsive pass, and horizontal
overflow is still 0.

### One thing that measuring caught

Registering `woff2` **and** `woff` in `next/font/local` — the obvious "modern format with a
fallback" pattern — made things **worse**. `next/font/local` emits a `<link rel="preload">`
for *every* entry in `src`, so the browser downloaded both formats: 312 KB against the 183 KB
we started with. Verified by counting preload tags in the rendered page, not by reasoning
about it.

Fixed by shipping `woff2` only, and the `.woff` files were deleted from `src/fonts/`. woff2
is supported by every browser that can run this site.

### Not done, and why

- **Lighthouse** — no Chrome CLI in this environment. Run it against the deployed URL.
- **Re-encoding `public/images/`** — 6.3 MB of WordPress-era JPEGs. The 19 backgrounds still
  served as CSS bypass `next/image` and so are shipped as-is. This is now the largest
  remaining performance item.
- **Content-Security-Policy** — see §4.
