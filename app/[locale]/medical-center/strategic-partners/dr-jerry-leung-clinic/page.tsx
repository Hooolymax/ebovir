import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LocalizedLink } from "@/components/LocalizedLink";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/visuals/Icon";
import { getContent } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, routing } from "@/i18n/routing";

const path = "/medical-center/strategic-partners/dr-jerry-leung-clinic";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en", "strategicPartner", path);
}

export default async function DrJerryLeungClinicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const { medicalCenter } = getContent(locale);
  const partner = medicalCenter.partnerDetail;
  const backLabel = locale === "fr" ? "Centre médical" : locale === "zh-CN" ? "医疗中心" : "Medical Center";

  return (
    <>
      <section className="relative border-b border-slate-200/70 bg-white pb-16 pt-36 sm:pt-44">
        <Container>
          <Reveal>
            <span className="eyebrow">{partner.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {partner.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {partner.intro}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-7">
              <Button href="https://www.drjerryleung.ca/" withArrow>
                {partner.heroCta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-5">
        <Container>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <LocalizedLink href="/medical-center" className="transition hover:text-bio-teal">
              {backLabel}
            </LocalizedLink>
            <span aria-hidden>/</span>
            <span className="font-medium text-slate-700">{partner.badge}</span>
            <span aria-hidden>/</span>
            <span className="text-slate-700">{partner.title}</span>
          </nav>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">{partner.badge}</span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {partner.overviewHeading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {partner.overviewBody}
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-10 rounded-3xl border border-bio-cyan/20 bg-bio-cyan/[0.05] p-7 sm:p-9">
                  <h2 className="font-display text-2xl font-semibold text-slate-900">
                    {partner.partnershipHeading}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {partner.partnershipBody}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <aside className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-card">
                <div className="relative overflow-hidden bg-gradient-to-br from-bio-indigo to-bio-cyan p-8 sm:p-10">
                  <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/20" />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-cyan-50">
                    {partner.badge}
                  </p>
                  <p className="relative mt-16 font-display text-3xl font-semibold leading-tight">
                    Dr. Jerry Leung
                  </p>
                  <p className="relative mt-2 text-sm text-cyan-50/80">Medical Club</p>
                </div>
                <dl className="divide-y divide-white/10 px-8 py-3">
                  {partner.facts.map((fact) => (
                    <div key={fact.label} className="py-5">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-slate-200">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-mist">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {partner.servicesHeading}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {partner.services.map((service, index) => (
              <Reveal key={service.name} delay={index * 0.06}>
                <article className="glass-card h-full p-7 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bio-cyan/10 text-bio-teal">
                    <Icon name={index === 0 ? "shield" : index === 1 ? "users" : "spark"} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-card sm:p-12">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
                {partner.founderHeading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {partner.founderBody}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section bg-slate-950 text-white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {partner.visitHeading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
                {partner.visitBody}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="https://www.drjerryleung.ca/" withArrow>
                  {partner.visitCta}
                </Button>
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-slate-400">
                {partner.sourceNote}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
