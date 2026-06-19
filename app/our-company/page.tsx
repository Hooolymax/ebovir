import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Team } from "@/components/Team";
import { company, links } from "@/lib/content";
import cqib from "@/public/assets/images/cqib.jpg";

export const metadata: Metadata = {
  title: "Our Company",
  description:
    "Ebovir Biotechnologies Inc. — a Montreal biotechnology company founded in 2021 and incubated from McGill University, driving innovation in precision medicine.",
};

export default function OurCompanyPage() {
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
                <Link
                  href={links.science}
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore our science
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
                </Link>
              </Reveal>
            </div>

            {/* Photo */}
            <Reveal delay={0.1}>
              <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 shadow-card lg:h-full">
                <Image
                  src={cqib}
                  alt="CQIB Life Sciences Incubator building in the Greater Montreal area, where Ebovir is located"
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
                Explore our platforms
              </Button>
              <Button href={links.contact} variant="secondary">
                Contact us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Team */}
      <Team />
    </>
  );
}
