import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/visuals/Icon";
import { scienceCards, services, products, links } from "@/lib/content";
import dna3 from "@/public/assets/images/dna3.jpg";

export const metadata: Metadata = {
  title: "Our Science",
  description:
    "Molecular biology, whole genome sequencing, early cancer screening, and AI interpretation — the science behind Ebovir's precision-health platform.",
};

const iconMap: Record<string, "molecule" | "dna" | "ai"> = {
  molecule: "molecule",
  dna: "dna",
  ai: "ai",
};

export default function OurSciencePage() {
  return (
    <>
      {/* Hero — title + intro left, DNA photo right (50:50) */}
      <section className="relative border-b border-slate-200/70 bg-white pb-20 pt-36 sm:pt-44">
        <Container>
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <span className="eyebrow">{scienceCards.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                  The science behind precision health
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-500">
                  {scienceCards.body}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href={links.products}
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View our products
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
                  src={dna3}
                  alt="DNA double helix illustrating Ebovir's genomic science"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  placeholder="blur"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {scienceCards.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover h-full p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-bio-cyan/15 to-bio-indigo/15 text-bio-teal ring-1 ring-bio-cyan/20">
                    <Icon name={iconMap[c.icon]} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CRO services */}
      <section id="services" className="section scroll-mt-28 bg-mist">
        <Container>
          <SectionHeading
            eyebrow="CRO Platform"
            heading={services.heading}
            body={services.body}
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="glass-card glass-card-hover h-full p-7">
                  <span className="font-display text-sm font-semibold text-bio-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Research products */}
      <section className="section bg-white">
        <Container>
          <SectionHeading
            eyebrow="Research Products"
            heading={products.heading}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {products.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass-card h-full p-7">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href={links.eboGenesStore} withArrow>
              Shop genetic testing on EboGenes
            </Button>
            <Button href={links.contact} variant="secondary">
              Discuss research services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
