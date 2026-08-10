import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en", "news", "/news");
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);
  const { newsInsights } = content;
  const labels = ui[locale];
  return (
    <>
      <PageHero
        eyebrow={newsInsights.eyebrow}
        title={newsInsights.title}
        subtitle={newsInsights.intro}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsInsights.categories.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 0.08}>
                <div
                  id={c.id}
                  className="glass-card glass-card-hover flex h-full scroll-mt-28 flex-col p-8"
                >
                  <h2 className="text-lg font-semibold text-slate-900">
                    {c.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {c.body}
                  </p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    {labels.articlesComing}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-mist p-8 sm:flex-row sm:p-10">
              <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                {newsInsights.emptyState}
              </p>
              <Button href="/contact#general" withArrow>
                {labels.contactTeam}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
