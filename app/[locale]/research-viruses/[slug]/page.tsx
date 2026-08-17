import type { Metadata } from "next";
import { LocalizedLink } from "@/components/LocalizedLink";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProductRequestForm } from "@/components/ProductRequestForm";
import { virusProducts as englishViruses } from "@/lib/content";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import { pageAlternates } from "@/lib/i18n/metadata";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    englishViruses.items.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return { title: "Product" };
  const { virusProducts } = getContent(locale);
  const product = virusProducts.items.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  const suffix = locale === "fr"
    ? "Réservé à la recherche en laboratoire."
    : locale === "zh-CN"
      ? "仅供实验室研究使用。"
      : "For laboratory research use only.";
  return {
    title: product.name,
    description: `${product.productName} — ${product.reporter}, ${product.concentration}. ${suffix}`,
    alternates: pageAlternates(locale, `/research-viruses/${product.slug}`),
  };
}

export default async function VirusDetailPage({ params }: Params) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const { virusProducts, virusCommon } = getContent(locale);
  const labels = ui[locale];
  const product = virusProducts.items.find((p) => p.slug === slug);
  if (!product) notFound();

  // Catalogue numbers have not been issued for this line yet, so the row is
  // omitted rather than shown empty. It appears automatically once `catNo` is set.
  const specs = [
    ...(product.catNo ? [{ label: labels.catalogueNo, value: product.catNo }] : []),
    { label: labels.reporter, value: product.reporter },
    { label: labels.concentration, value: product.concentration },
    { label: labels.price, value: product.price },
    { label: labels.form, value: virusCommon.form },
    { label: labels.storage, value: virusCommon.storage },
    { label: labels.defrost, value: virusCommon.defrost },
    { label: labels.safety, value: virusCommon.safety },
    { label: labels.intendedUse, value: virusCommon.intendedUse },
  ];

  return (
    <section className="bg-white pb-20 pt-36 sm:pt-44">
      <Container>
        {/* Back link */}
        <Reveal>
          <LocalizedLink
            href="/research-viruses"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-bio-teal"
          >
            <span aria-hidden>←</span> {labels.allProducts}
          </LocalizedLink>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <span className="eyebrow mt-6">{product.kind}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            {product.name}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-base text-slate-500">
            {product.productName}
            {product.catNo ? ` · ${product.catNo}` : ""}
          </p>
        </Reveal>

        {/* Research-use-only notice — directly under the title, before any detail */}
        <Reveal delay={0.14}>
          <div className="mt-8 max-w-3xl rounded-2xl border border-amber-300/70 bg-amber-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              {labels.researchUseOnly}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-amber-900/90">
              {labels.researchUseOnlyBody}
            </p>
          </div>
        </Reveal>

        {/* Body: overview/applications + spec table */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Left — overview, applications, request form */}
          <div>
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-slate-900">
                {labels.productOverview}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {virusCommon.overview}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {product.summary}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 rounded-2xl border border-bio-cyan/20 bg-bio-cyan/[0.06] p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bio-teal">
                  {labels.applications}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {virusCommon.applications}
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
