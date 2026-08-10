import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://www.ebovir.ca";

const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Ebovir",
    "precision medicine",
    "biotechnology",
    "genomics",
    "whole genome sequencing",
    "early cancer screening",
    "molecular diagnostics",
    "AI health",
    "Montreal biotech",
    "EboGenes",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return baseMetadata;
  const locale = localeParam;
  const localizedSite = getContent(locale).site;
  const prefix = locale === "en" ? "" : `/${locale}`;

  return {
    ...baseMetadata,
    title: {
      default: `${localizedSite.name} — ${localizedSite.tagline}`,
      template: `%s — ${localizedSite.shortName}`,
    },
    description: localizedSite.description,
    alternates: {
      canonical: prefix || "/",
      languages: { "en-CA": "/", "fr-CA": "/fr", "zh-CN": "/zh-CN", "x-default": "/" },
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${localizedSite.name} — ${localizedSite.tagline}`,
      description: localizedSite.description,
      locale: locale === "fr" ? "fr_CA" : locale === "zh-CN" ? "zh_CN" : "en_CA",
      alternateLocale: locale === "en" ? ["fr_CA", "zh_CN"] : ["en_CA"],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${localizedSite.name} — ${localizedSite.tagline}`,
      description: localizedSite.description,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const content = getContent(locale);
  const labels = ui[locale];

  return (
    <html lang={locale === "fr" ? "fr-CA" : locale} className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={{}}>
          <Navbar navItems={content.mainNav} labels={labels} />
          <main>{children}</main>
          <Footer
            navItems={content.nav}
            contactInfo={content.contact}
            siteInfo={content.site}
            labels={labels}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
