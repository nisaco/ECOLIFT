import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The EcoLift admin dashboard lives entirely under /admin/*
   * (see src/app/admin). Every other path is served by the Expo
   * web build, which is copied into /public at build time (see the
   * "vercel-build" script in package.json). This "fallback" rewrite
   * only kicks in when a request doesn't match an admin route AND
   * doesn't match a real static file already in /public — e.g. the
   * Expo SPA's own JS/CSS bundles are served directly as real files
   * and never hit this rewrite. Anything else (/, /login, /profile,
   * deep client-side routes, etc.) falls back to the Expo app's
   * single-page index.html so its own router can take over.
   */
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: "/:path*",
          destination: "/index.html",
        },
      ],
    };
  },
};

export default nextConfig;
