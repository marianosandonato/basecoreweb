import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AVIF first: content-negotiated via Accept, so browsers without AVIF
  // support (rare) still get the existing WebP fallback. No visual/quality
  // trade-off, just a smaller transfer for the ~90%+ of traffic that supports
  // it -- directly targets PageSpeed's "Improve image delivery" finding on
  // the hero image (the page's LCP element on every route).
  images: {
    formats: ["image/avif", "image/webp"],
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
