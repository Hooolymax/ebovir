import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { Mission } from "@/components/home/Mission";
import { Science } from "@/components/home/Science";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FinalCta } from "@/components/home/FinalCta";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";
import { isLocale } from "@/i18n/routing";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);
  return (
    <>
      <Hero content={content.hero} headlineLines={ui[locale].heroHeadline} />
      <StatsBand content={content.stats} />
      <Mission content={content.mission} labels={ui[locale]} />
      <Ecosystem content={content.ecosystem} labels={ui[locale]} />
      <Science content={content.scienceCards} labels={ui[locale]} />
      <FinalCta content={content.finalCta} />
    </>
  );
}
