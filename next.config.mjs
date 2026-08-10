import createNextIntlPlugin from "next-intl/plugin";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const withNextIntl = createNextIntlPlugin();
const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    const englishRoutes = [
      "/our-company",
      "/our-science",
      "/platforms",
      "/business-areas",
      "/products",
      "/medical-center",
      "/news",
      "/contact",
    ];

    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        ...englishRoutes.map((source) => ({
          source,
          destination: `/en${source}`,
        })),
        {
          source: "/products/:slug",
          destination: "/en/products/:slug",
        },
      ],
    };
  },
};

export default withNextIntl(nextConfig);
