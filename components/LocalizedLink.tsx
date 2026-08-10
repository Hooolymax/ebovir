"use client";

import NextLink from "next/link";
import { useLocale } from "next-intl";
import type { ComponentProps } from "react";
import { isLocale, type Locale } from "@/i18n/routing";

type LocalizedLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
};

function localizeHref(href: string, locale: Locale) {
  if (
    locale === "en" ||
    !href.startsWith("/") ||
    href.startsWith("//") ||
    /^\/(?:en|fr|zh-CN)(?:\/|$|[?#])/.test(href)
  ) {
    return href;
  }

  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

/**
 * Locale-aware link for content rendered by Server Components.
 * English keeps the existing unprefixed URLs; French and Chinese receive
 * their explicit locale prefix.
 */
export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const currentLocale = useLocale();
  const locale = isLocale(currentLocale) ? currentLocale : "en";

  return <NextLink href={localizeHref(href, locale)} {...props} />;
}
