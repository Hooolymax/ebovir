import type { Metadata } from "next";
import { LocalizedLink } from "@/components/LocalizedLink";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en", "researchViruses", "/research-viruses");
}

export default async function ResearchVirusesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);
  const { virusProducts, links } = content;
  const labels = ui[locale];
  return (
    <section className="bg-white pb-20 pt-36 sm:pt-44">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_220px] lg:gap-16">
          {/* Left — title + product list */}
          <div>
            <Reveal>
              <span className="eyebrow">{virusProducts.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                {virusProducts.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {virusProducts.subtitle}
              </p>
            </Reveal>

            {/* Research-use-only notice — deliberately placed above the list */}
            <Reveal delay={0.16}>
              <div className="mt-8 max-w-2xl rounded-2xl border border-amber-300/70 bg-amber-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  {labels.researchUseOnly}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-amber-900/90">
                  {labels.researchUseOnlyBody}
                </p>
              </div>
            </Reveal>

            {/* List */}
            <div className="mt-14 border-t border-slate-200">
              {virusProducts.items.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 6) * 0.04}>
                  <LocalizedLink
                    href={`/research-viruses/${p.slug}`}
                    className="group flex items-baseline gap-4 border-b border-slate-200 py-7 transition"
                  >
                    <span className="font-display text-sm font-semibold text-bio-teal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 transition group-hover:text-bio-teal sm:text-2xl">
                        {p.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-500">
                        <span className="font-medium text-bio-teal/80">
                          {p.reporter}
                        </span>{" "}
                        · {p.concentration}
                      </p>
                    </div>
                    <span className="hidden self-center text-sm font-semibold text-slate-900 sm:block">
                      {p.price}
                    </span>
                    <span
                      aria-hidden
                      className="self-center text-slate-300 transition group-hover:translate-x-1 group-hover:text-bio-teal"
                    >
                      →
                    </span>
                  </LocalizedLink>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-500">
                {virusProducts.note}
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Button href={links.contact} withArrow>
                  {labels.requestPricing}
                </Button>
                <Button href={links.contact} variant="secondary">
                  {labels.contactSpecifications}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right-edge directory — aligned with the title */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {labels.productList}
              </p>
              <ul className="mt-4 space-y-1 border-l border-slate-200">
                {virusProducts.items.map((p) => (
                  <li key={p.slug}>
                    <LocalizedLink
                      href={`/research-viruses/${p.slug}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-slate-500 transition hover:border-bio-cyan hover:text-bio-teal"
                    >
                      {p.name}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
