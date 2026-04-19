import type { NextConfig } from "next";

/**
 * Static export for hosts like Cloudflare Pages / Netlify / a custom domain at `/`.
 * For GitHub Project Pages (e.g. username.github.io/repo-name/), set env:
 *   GITHUB_PAGES=true
 * and uncomment/configure basePath + assetPrefix to match your repo name.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        basePath: "/sr-enterprises",
        assetPrefix: "/sr-enterprises/"
      }
    : {})
};

export default nextConfig;
