import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { exosomeProducts, links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ebovir's line of naturally derived exosome products — botanical and fungal sources. Order through the EboGenes store.",
};

export default function ProductsPage() {
  return (
    <section className="bg-white pb-20 pt-36 sm:pt-44">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_220px] lg:gap-16">
          {/* Left — title + product list */}
          <div>
            <Reveal>
              <span className="eyebrow">{exosomeProducts.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                {exosomeProducts.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {exosomeProducts.subtitle}
              </p>
            </Reveal>

            {/* List */}
            <div className="mt-14 border-t border-slate-200">
              {exosomeProducts.items.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 6) * 0.04}>
                  <Link
                    href={`/products/${p.slug}`}
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
                          {p.kind}
                        </span>{" "}
                        · {p.sourceShort}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="self-center text-slate-300 transition group-hover:translate-x-1 group-hover:text-bio-teal"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

              {/* CTA */}
            <Reveal>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Button href={links.eboGenesStore} withArrow>
                  Order on EboGenes Store
                </Button>
                <Button href={links.contact} variant="secondary">
                  Contact for specifications
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right-edge directory — aligned with the title */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Product list
              </p>
              <ul className="mt-4 space-y-1 border-l border-slate-200">
                {exosomeProducts.items.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-slate-500 transition hover:border-bio-cyan hover:text-bio-teal"
                    >
                      {p.name}
                    </Link>
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
