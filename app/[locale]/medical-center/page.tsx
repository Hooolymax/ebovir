import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { getContent } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en", "medicalCenter", "/medical-center");
}

export default async function MedicalCenterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);
  const { medicalCenter } = content;
  return (
    <>
      <PageHero
        eyebrow={medicalCenter.eyebrow}
        title={medicalCenter.title}
        subtitle={medicalCenter.intro}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {medicalCenter.sections.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 0.08}>
                <div
                  id={s.id}
                  className="glass-card glass-card-hover flex h-full scroll-mt-28 flex-col p-8 sm:p-10"
                >
                  <h2 className="font-display text-2xl font-semibold text-slate-900">
                    {s.name}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Book a consultation */}
      <section id={medicalCenter.book.id} className="section scroll-mt-28 bg-mist">
        <Container>
          <Reveal>
            <div className="rounded-[2.5rem] border border-slate-200 bg-white px-8 py-14 text-center shadow-card sm:px-16">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {medicalCenter.book.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                {medicalCenter.book.body}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={medicalCenter.book.cta.href} withArrow>
                  {medicalCenter.book.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
