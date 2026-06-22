import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { businessAreas, finalCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Areas",
  description:
    "The business areas EBOVIR covers — precision diagnostics & omics, AI healthcare, regenerative medicine, RNA/LNP drug development, exosome & aesthetic biotechnology, and premium medical services.",
};

export default function BusinessAreasPage() {
  return (
    <>
      <PageHero
        eyebrow={businessAreas.eyebrow}
        title={businessAreas.title}
        subtitle={businessAreas.intro}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {businessAreas.items.map((area, i) => (
              <Reveal key={area.id} delay={(i % 2) * 0.08}>
                <div
                  id={area.id}
                  className="glass-card glass-card-hover group relative flex h-full scroll-mt-28 flex-col overflow-hidden p-8 sm:p-10"
                >
                  <div
                    className="absolute right-0 top-0 h-32 w-32 rounded-bl-[3.5rem] bg-gradient-to-br from-bio-cyan/10 to-transparent"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bio-teal/80">
                    {area.audience}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900">
                    {area.name}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {area.body}
                  </p>
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
                <Button href="/contact#partnership" withArrow>
                  Partner With EBOVIR
                </Button>
                <Button href="/platforms" variant="secondary">
                  Explore our platforms
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
