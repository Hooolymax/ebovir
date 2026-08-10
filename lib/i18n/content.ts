import "server-only";

import * as english from "@/lib/content";
import type { Locale } from "@/i18n/routing";
import { frCA } from "./translations/fr-CA";
import { zhCN } from "./translations/zh-CN";

const translations: Record<Exclude<Locale, "en">, Record<string, string>> = {
  fr: frCA,
  "zh-CN": zhCN,
};

export type LocalizedContent = typeof english;

function setPath(target: Record<string, unknown>, path: string, value: string) {
  const parts = path.split(".");
  let cursor: unknown = target;

  for (let index = 0; index < parts.length - 1; index += 1) {
    const key = parts[index];
    cursor = Array.isArray(cursor)
      ? cursor[Number(key)]
      : (cursor as Record<string, unknown>)[key];
  }

  const finalKey = parts.at(-1)!;
  if (Array.isArray(cursor)) cursor[Number(finalKey)] = value;
  else (cursor as Record<string, unknown>)[finalKey] = value;
}

export function getContent(locale: Locale): LocalizedContent {
  if (locale === "en") return english;

  const localized = JSON.parse(JSON.stringify(english)) as Record<string, unknown>;
  for (const [path, value] of Object.entries(translations[locale])) {
    setPath(localized, path, value);
  }

  // This value is derived in the English source; derive it again after
  // translating mainNav so the footer always matches the current language.
  localized.nav = (localized.mainNav as Array<{ label: string; href: string }>).map(
    ({ label, href }) => ({ label, href })
  );

  return localized as LocalizedContent;
}
