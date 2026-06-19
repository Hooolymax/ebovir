import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { exosomeProducts, exosomeCommon, links } from "@/lib/content";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return exosomeProducts.items.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = exosomeProducts.items.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: `${product.productName} (${product.catNo}) — ${product.sourceShort} Ebovir datasheet summary.`,
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = exosomeProducts.items.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const specs = [
    { label: "Catalogue No.", value: product.catNo },
    { label: "Source", value: product.source },
    { label: "Contains", value: product.contains },
    { label: "Form", value: exosomeCommon.form },
    { label: "Concentration", value: exosomeCommon.concentration },
    { label: "Storage & handling", value: exosomeCommon.storage },
    { label: "Defrost", value: exosomeCommon.defrost },
    { label: "Safety", value: exosomeCommon.safety },
    { label: "Intended use", value: exosomeCommon.intendedUse },
  ];

  return (
    <section className="bg-white pb-20 pt-36 sm:pt-44">
      <Container>
        {/* Back link */}
        <Reveal>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-bio-teal"
          >
            <span aria-hidden>←</span> All products
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <span className="eyebrow mt-6">{product.kind} exosome</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            {product.name}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-base text-slate-500">
            {product.productName} · {product.catNo}
          </p>
        </Reveal>

        {/* Body: overview/efficacy + spec table */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Left — overview, efficacy, CTA */}
          <div>
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-slate-900">
                Product overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {exosomeCommon.overview}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 rounded-2xl border border-bio-cyan/20 bg-bio-cyan/[0.06] p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bio-teal">
                  Efficacy
                </h2>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {exosomeCommon.efficacy}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={links.eboGenesStore} withArrow>
                  Order on EboGenes Store
                </Button>
                <Button href={links.contact} variant="secondary">
                  Contact for specifications
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right — spec sheet */}
          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                  <h2 className="text-sm font-semibold text-slate-900">
                    Datasheet
                  </h2>
                </div>
                <dl className="divide-y divide-slate-200">
                  {specs.map((s) => (
                    <div key={s.label} className="px-6 py-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {s.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
