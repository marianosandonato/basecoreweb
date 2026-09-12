import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next resolves its own trailing-slash redirect before `redirects()` below
  // or src/proxy.ts ever run, so there was no way to collapse the 3-redirect
  // chain GSC flagged for /sales/ and /presales/ (see src/proxy.ts) without
  // taking over trailing-slash handling ourselves. proxy.ts reproduces
  // Next's default strip-the-slash behavior for every other route.
  skipTrailingSlashRedirect: true,

  images: {
    // Next 16 requires an explicit allowlist for `quality` -- unconfigured,
    // every next/image on the site (not just this one) is silently clamped
    // to 75. Added 90 for Recruiting (src/app/(es)/page.tsx and friends):
    // at the default 75, the re-encode was visibly softer than the original
    // CSS background on the PR #32 preview -- a person's face shows
    // compression artifacts a lot more than the site's other backgrounds
    // do. 75 stays the default for every other <Image> (untouched).
    qualities: [75, 90],
  },

  experimental: {
    // Required now that /(es) and /(en)/en are two separate root layouts
    // (see documentation/seo/plan-seo.md 1.18) -- Next.js has no single
    // layout left to compose a 404 from for a URL that matches neither
    // group (e.g. a typo'd link), so it needs its own full document. See
    // src/app/global-not-found.tsx.
    globalNotFound: true,
    // PSI (mobile) flags one render-blocking request on every page: the
    // single compiled globals.css chunk (~49KB raw / ~10.4KB gzip, verified
    // in `.next/static/chunks/` and against the live `<link>` tag), shared
    // across every route because Tailwind's atomic classes collapse into
    // one global stylesheet. The bytes aren't the problem -- it's the extra
    // request+round-trip the browser must do before it can paint anything,
    // which is exactly what this flag removes: it inlines that CSS into a
    // <style> tag in the initial HTML instead of a <link>, so first paint
    // doesn't wait on a second request. Next's docs warn that client-side
    // <Link> navigations between prerendered pages fall back to a <link>
    // tag to avoid duplication -- but verified with Playwright (production
    // build, `next start`) that a Home -> /preventa client-side nav fires
    // zero CSS requests and never adds a <link>: because there's only ever
    // one global stylesheet here (not per-route chunks), the initial
    // inlined <style> stays mounted for the whole session. Good fit per
    // Next's own guidance ("enable if you use atomic CSS and want to
    // optimize first-load for new visitors") since this is a marketing site
    // where most sessions are first-time, search/ad-driven landings --
    // exactly what PSI is measuring.
    inlineCss: true,
  },

  // Applied to every route. No Content-Security-Policy: the font loader and the
  // inline `style` attributes used throughout would need nonces, which is a
  // project of its own rather than something to half-do here.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Old WordPress slugs → new routes (SEO continuity)
      { source: "/inicio", destination: "/", permanent: true },
      { source: "/presales", destination: "/preventa", permanent: true },
      { source: "/sales", destination: "/venta", permanent: true },
      { source: "/support", destination: "/posventa", permanent: true },
    ];
  },
};

export default nextConfig;
