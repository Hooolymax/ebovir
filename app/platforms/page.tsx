import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ecosystem, finalCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Ebovir's integrated ecosystem: EboGenes genetic health, EboScience wellness, AI health intelligence, and the Ebovir diagnostic lab.",
};

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow={ecosystem.eyebrow}
        title="An integrated biotechnology ecosystem"
        subtitle={ecosystem.body}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {ecosystem.cards.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="glass-card glass-card-hover group relative flex h-full flex-col overflow-hidden p-8 sm:p-10">
                  <div
                    className="absolute right-0 top-0 h-32 w-32 rounded-bl-[3.5rem] bg-gradient-to-br from-bio-cyan/10 to-transparent"
                    aria-hidden
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-3xl font-semibold text-slate-900">
                      {c.name}
                    </h2>
                    {c.needsConfirmation && (
                      <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-600">
                        Needs confirmation
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.16em] text-bio-teal/80">
                    {c.tag}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {c.body}
                  </p>
                  <div className="mt-7">
                    <Button
                      href={c.href}
                      variant={c.external ? "primary" : "secondary"}
                      withArrow={!c.external}
                    >
                      {c.cta}
                      {c.external ? " ↗" : ""}
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
                <Button href={finalCta.primary.href} withArrow>
                  {finalCta.primary.label}
                </Button>
                <Button href={finalCta.secondary.href} variant="secondary">
                  {finalCta.secondary.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
