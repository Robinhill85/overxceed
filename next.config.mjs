// Content-Security-Policy scoped to the third parties this site actually uses:
// - Vercel Analytics: prod script + beacons are same-origin (/_vercel/insights/*);
//   the dev/debug script loads from va.vercel-scripts.com.
// - Formspree: BriefForm submits via fetch() POST to formspree.io (connect-src).
// - Fonts are self-hosted via next/font; no iframes, no external images.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // All routes are statically generated (SSG). No server-only rendering of content:
  // crawlers get full HTML — the whole point of this rebuild.
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
