import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
