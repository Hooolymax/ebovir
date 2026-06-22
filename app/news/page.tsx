import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { newsInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "News and insights from the EBOVIR group — company updates, scientific insights, product announcements, industry perspectives, and clinical & research news.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow={newsInsights.eyebrow}
        title={newsInsights.title}
        subtitle={newsInsights.intro}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsInsights.categories.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 0.08}>
                <div
                  id={c.id}
                  className="glass-card glass-card-hover flex h-full scroll-mt-28 flex-col p-8"
                >
                  <h2 className="text-lg font-semibold text-slate-900">
                    {c.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {c.body}
                  </p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Articles coming soon
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-mist p-8 sm:flex-row sm:p-10">
              <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                {newsInsights.emptyState}
              </p>
              <Button href="/contact#general" withArrow>
                Contact the team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
