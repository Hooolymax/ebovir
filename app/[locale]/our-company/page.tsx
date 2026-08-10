import type { Metadata } from "next";
import Image from "next/image";
import { LocalizedLink } from "@/components/LocalizedLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Team } from "@/components/Team";
import { getContent } from "@/lib/i18n/content";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale } from "@/i18n/routing";
import { ui } from "@/lib/i18n/ui";
import cqib from "@/public/assets/images/cqib.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en", "company", "/our-company");
}

export default async function OurCompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);
  const { company, mission, labExpertise, links } = content;
  const labels = ui[locale];
  return (
    <>
      {/* Hero — big headline + intro left, large photo right (50:50) */}
      <section className="relative border-b border-slate-200/70 bg-white pb-20 pt-36 sm:pt-44">
        <Container>
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                  {company.title}
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-500">
                  {company.lead}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
                  {company.paragraphs[0]}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <LocalizedLink
                  href={links.science}
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {locale === "fr" ? "Découvrir notre science" : locale === "zh-CN" ? "探索我们的科学" : "Explore our science"}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </LocalizedLink>
              </Reveal>
            </div>

            {/* Photo */}
            <Reveal delay={0.1}>
              <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 shadow-card lg:h-full">
                <Image
                  src={cqib}
                  alt={locale === "fr" ? "Édifice de l’Incubateur des sciences de la vie du CQIB dans la grande région de Montréal, où se trouve Ebovir" : locale === "zh-CN" ? "Ebovir 所在的大蒙特利尔地区 CQIB 生命科学孵化器大楼" : "CQIB Life Sciences Incubator building in the Greater Montreal area, where Ebovir is located"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  placeholder="blur"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="section bg-white">
        <Container>
          {/* Highlights */}
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
              {company.highlights.map((h) => (
                <div key={h.label} className="bg-white p-6">
                  <dt className="text-xs uppercase tracking-[0.16em] text-bio-teal">
                    {h.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Narrative (remaining paragraphs) */}
          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {company.paragraphs.slice(1).map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:flex-row">
              <Button href={links.platforms} withArrow>
                {labels.explorePlatforms}
              </Button>
              <Button href={links.contact} variant="secondary">
                Contact us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="section scroll-mt-28 bg-mist">
        <Container>
          <SectionHeading
            eyebrow={mission.eyebrow}
            heading={mission.heading}
            body={mission.body}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {mission.pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="glass-card h-full p-8">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities & Labs */}
      <section id="facilities" className="section scroll-mt-28 bg-white">
        <Container>
          <SectionHeading
            eyebrow={labExpertise.eyebrow}
            heading={labExpertise.heading}
            body={labExpertise.body}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {labExpertise.points.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="glass-card glass-card-hover h-full p-8">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality & Compliance */}
      <section id="quality" className="section scroll-mt-28 bg-mist">
        <Container>
          <SectionHeading
            eyebrow={locale === "fr" ? "Qualité et conformité" : locale === "zh-CN" ? "质量与合规" : "Quality & Compliance"}
            heading={locale === "fr" ? "Des activités conformes aux normes de laboratoire reconnues" : locale === "zh-CN" ? "按照公认实验室标准运营" : "Operating to recognized laboratory standards"}
            body={locale === "fr" ? "Les travaux de laboratoire d’EBOVIR sont réalisés selon des pratiques établies de biosécurité et de qualité adaptées à ses capacités BSL-2 et BSL-3. Sauf indication contraire, les produits de recherche sont réservés à la recherche (RUO)." : locale === "zh-CN" ? "EBOVIR 的实验室工作遵循与其 BSL-2 和 BSL-3 能力相适应的既定生物安全和质量规范；除非另有说明，科研产品仅供研究使用（RUO）。" : "EBOVIR's laboratory work is conducted under established biosafety and quality practices appropriate to its BSL-2 and BSL-3 capabilities, with research products provided for research use only (RUO) unless otherwise specified."}
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            <Reveal>
              <p className="text-base leading-relaxed text-slate-600">
                {locale === "fr" ? "Les activités de laboratoire suivent les précautions universelles de manipulation et une supervision de la biosécurité, avec l’appui d’un responsable désigné de la biosécurité au sein de notre réseau de recherche affilié." : locale === "zh-CN" ? "实验室运营遵循通用防护处理要求并接受生物安全监督，由合作科研网络内的专职生物安全官提供支持。" : "Laboratory operations follow universal-precaution handling and biosafety oversight, supported by a dedicated biosafety officer within our affiliated research network."}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-base leading-relaxed text-slate-600">
                {locale === "fr" ? "EBOVIR est membre de BioQuébec et de RNACanada et exerce ses activités à l’Incubateur des sciences de la vie du CQIB, au sein de la communauté québécoise des sciences de la vie." : locale === "zh-CN" ? "EBOVIR 是 BioQuébec 和 RNACanada 的成员，并在魁北克生命科学产业中的 CQIB 生命科学孵化器开展运营。" : "EBOVIR is a member of BioQuébec and RNACanada, and operates within the CQIB Life Sciences Incubator in Québec's life-sciences community."}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team */}
      <div id="team" className="scroll-mt-28">
        <Team content={content.team} />
      </div>
    </>
  );
}
