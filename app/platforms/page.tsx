import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { platformsPage, ecosystem, finalCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "The four public-facing EBOVIR platforms — EboGenes, EboScience, EboMed AI, and EBOVIR Lab — spanning genetic health, exosome biotechnology, AI healthcare, and laboratory services.",
};

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow={platformsPage.eyebrow}
        title={platformsPage.title}
        subtitle={platformsPage.intro}
      />

      {/* The four platforms / portals */}
      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {ecosystem.cards.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 0.08}>
                <div
                  id={c.id}
                  className="glass-card glass-card-hover group relative flex h-full scroll-mt-28 flex-col p-8 sm:p-10"
                >
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                      {c.name}
                    </h2>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-bio-teal/80">
                      {c.tag}
                    </p>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {c.blurb}
                  </p>
                  <div className="mt-7">
                    <Button
                      href={c.href}
                      variant={c.external ? "primary" : "secondary"}
                      withArrow={!c.external}
                    >
                      {c.external ? `Visit ${c.name} ↗` : "Explore EBOVIR Lab"}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-mist">
        <Container>
          <Reveal>
            <div className="rounded-[2.5rem] border border-slate-200 bg-white px-8 py-14 text-center shadow-card sm:px-16">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {finalCta.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                {finalCta.body}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/business-areas" withArrow>
                  Explore business areas
                </Button>
                <Button href="/products" variant="secondary">
                  View products & solutions
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
