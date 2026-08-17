import type { MetadataRoute } from "next";
import { exosomeProducts, virusProducts } from "@/lib/content";
import { routing, type Locale } from "@/i18n/routing";
import { localizedUrl } from "@/lib/i18n/metadata";

const baseUrl = "https://www.ebovir.com";
const routes = [
  "/",
  "/our-company",
  "/our-science",
  "/platforms",
  "/business-areas",
  "/products",
  "/research-viruses",
  "/medical-center",
  "/medical-center/strategic-partners/dr-jerry-leung-clinic",
  "/news",
  "/contact",
  ...exosomeProducts.items.map((product) => `/products/${product.slug}`),
  ...virusProducts.items.map((product) => `/research-viruses/${product.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) =>
    routing.locales.map((locale: Locale) => ({
      url: `${baseUrl}${localizedUrl(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority:
        path === "/"
          ? 1
          : path.startsWith("/products/") || path.startsWith("/research-viruses/")
            ? 0.7
            : 0.8,
    }))
  );
}
