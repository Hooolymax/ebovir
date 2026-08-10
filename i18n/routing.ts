import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "zh-CN"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // Existing unprefixed URLs are permanently English. Language changes are
  // explicit, preventing browsers/cookies from redirecting indexed URLs.
  localeDetection: false,
  // The URL is the source of truth. No locale cookie means static responses
  // remain cache-friendly and unprefixed English URLs never change implicitly.
  localeCookie: false,
  // Metadata emits regional hreflang values (en-CA/fr-CA/zh-CN), so avoid a
  // second, less-specific Link header from the middleware.
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];

export function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}
