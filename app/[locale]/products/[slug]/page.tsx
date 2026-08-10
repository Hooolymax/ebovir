import type { Metadata } from "next";
import { LocalizedLink } from "@/components/LocalizedLink";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProductRequestForm } from "@/components/ProductRequestForm";
import { exosomeProducts as englishProducts } from "@/lib/content";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import { pageAlternates } from "@/lib/i18n/metadata";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    englishProducts.items.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return { title: "Product" };
  const { exosomeProducts } = getContent(locale);
  const product = exosomeProducts.items.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  const suffix = locale === "fr"
    ? "Résumé de la fiche technique Ebovir."
    : locale === "zh-CN"
      ? "Ebovir 产品数据表摘要。"
      : "Ebovir datasheet summary.";
  return {
    title: product.name,
    description: `${product.productName} (${product.catNo}) — ${product.sourceShort} ${suffix}`,
    alternates: pageAlternates(locale, `/products/${product.slug}`),
  };
}

export default async function ProductDetailPage({ params }: Params) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const { exosomeProducts, exosomeCommon } = getContent(locale);
  const labels = ui[locale];
  const product = exosomeProducts.items.find((p) => p.slug === slug);
  if (!product) notFound();

  const specs = [
    { label: labels.catalogueNo, value: product.catNo },
    { label: labels.source, value: product.source },
    { label: labels.contains, value: product.contains },
    { label: labels.form, value: exosomeCommon.form },
    { label: labels.concentration, value: exosomeCommon.concentration },
    { label: labels.storage, value: exosomeCommon.storage },
    { label: labels.defrost, value: exosomeCommon.defrost },
    { label: labels.safety, value: exosomeCommon.safety },
    { label: labels.intendedUse, value: exosomeCommon.intendedUse },
  ];

  return (
    <section className="bg-white pb-20 pt-36 sm:pt-44">
      <Container>
        {/* Back link */}
        <Reveal>
          <LocalizedLink
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-bio-teal"
          >
            <span aria-hidden>←</span> {labels.allProducts}
          </LocalizedLink>
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
                {labels.productOverview}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {exosomeCommon.overview}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 rounded-2xl border border-bio-cyan/20 bg-bio-cyan/[0.06] p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bio-teal">
                  {labels.efficacy}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {exosomeCommon.efficacy}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <ProductRequestForm
                locale={locale}
                product={{
                  name: product.name,
                  productName: product.productName,
                  catNo: product.catNo,
                  slug: product.slug,
                }}
                labels={labels.productRequest}
                turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
              />
            </Reveal>
          </div>

          {/* Right — spec sheet */}
          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {labels.datasheet}
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
