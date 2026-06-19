import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/visuals/Icon";
import { scienceCards, services, products, links } from "@/lib/content";

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
      <PageHero
        eyebrow={scienceCards.eyebrow}
        title="The science behind precision health"
        subtitle={scienceCards.body}
      />

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
      <section className="section bg-mist">
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
