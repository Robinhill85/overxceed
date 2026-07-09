/** @type {import('next').NextConfig} */
const nextConfig = {
  // All routes are statically generated (SSG). No server-only rendering of content:
  // crawlers get full HTML — the whole point of this rebuild.
  reactStrictMode: true,
};

export default nextConfig;
