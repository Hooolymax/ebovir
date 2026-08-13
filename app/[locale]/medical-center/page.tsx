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

      {/* Strategic partners */}
      <section id={medicalCenter.strategicPartners.id} className="section scroll-mt-28 bg-white">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">{medicalCenter.strategicPartners.eyebrow}</span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {medicalCenter.strategicPartners.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {medicalCenter.strategicPartners.intro}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
              <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-bio-indigo to-bio-cyan p-8 text-white sm:p-10">
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/15" />
                  <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/10" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      {medicalCenter.strategicPartners.eyebrow}
                    </p>
                    <p className="mt-16 font-display text-3xl font-semibold leading-tight">
                      Dr. Jerry Leung
                    </p>
                    <p className="mt-2 text-sm text-cyan-50/80">Medical Club</p>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-bio-teal">
                    {medicalCenter.strategicPartners.partner.location}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {medicalCenter.strategicPartners.partner.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {medicalCenter.strategicPartners.partner.summary}
                  </p>
                  <div className="mt-7">
                    <Button href={medicalCenter.strategicPartners.partner.href} withArrow>
                      {medicalCenter.strategicPartners.partner.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section bg-mist">
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
      <section id={medicalCenter.book.id} className="section scroll-mt-28 bg-white">
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
