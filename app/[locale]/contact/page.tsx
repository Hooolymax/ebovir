import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/visuals/Icon";
import { getContent } from "@/lib/i18n/content";
import { ui } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(isLocale(locale) ? locale : "en", "contact", "/contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);
  const { contact, inquiryTypes, links } = content;
  const labels = ui[locale];
  return (
    <>
      <PageHero
        eyebrow={labels.contact}
        title={locale === "fr" ? "Parlons de santé de précision" : locale === "zh-CN" ? "让我们聊聊精准健康" : "Let's talk precision health"}
        subtitle={locale === "fr" ? "Communiquez avec l’équipe d’Ebovir pour les partenariats, les services de recherche et les demandes générales, ou visitez la boutique EboGenes pour commander des tests génétiques." : locale === "zh-CN" ? "如需洽谈合作、科研服务或一般咨询，请联系 Ebovir 团队；如需订购基因检测产品，请访问 EboGenes 商店。" : "Reach the Ebovir team for partnerships, research services, and general enquiries — or visit the EboGenes store to order genetic testing products."}
      />

      <section id="request-information" className="section scroll-mt-28 bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Email */}
            <Reveal>
              <div className="glass-card h-full p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bio-cyan/10 text-bio-teal ring-1 ring-bio-cyan/20">
                  <Icon name="spark" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">{labels.email}</h2>
                <ul className="mt-3 space-y-2">
                  {contact.emails.map((e) => (
                    <li key={e}>
                      <a
                        href={`mailto:${e}`}
                        className="text-sm text-slate-600 transition hover:text-bio-teal"
                      >
                        {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.08}>
              <div className="glass-card h-full p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bio-cyan/10 text-bio-teal ring-1 ring-bio-cyan/20">
                  <Icon name="globe" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">{labels.phone}</h2>
                <ul className="mt-3 space-y-2">
                  {contact.phones.map((p) => (
                    <li key={p} className="text-sm text-slate-600">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={0.16}>
              <div className="glass-card h-full p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bio-cyan/10 text-bio-teal ring-1 ring-bio-cyan/20">
                  <Icon name="lab" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">
                  {labels.location}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.country}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Inquiry routing */}
          <div className="mt-16">
            <Reveal>
              <span className="eyebrow">{inquiryTypes.eyebrow}</span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {inquiryTypes.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">{inquiryTypes.body}</p>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {inquiryTypes.items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 0.08}>
                  <div
                    id={item.id}
                    className="glass-card glass-card-hover flex h-full scroll-mt-28 flex-col p-7"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.body}
                    </p>
                    <a
                      href={`mailto:${item.email}?subject=${encodeURIComponent(
                        item.name + " — EBOVIR"
                      )}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bio-teal transition hover:text-bio-indigo"
                    >
                      {item.email}
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Store CTA band */}
          <Reveal>
            <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-mist p-8 sm:flex-row sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-semibold text-slate-900">
                  {labels.orderQuestion}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {labels.orderHelp}
                </p>
              </div>
              <Button href={links.eboGenesStore} withArrow>
                {labels.visitStore}
              </Button>
            </div>
          </Reveal>

        </Container>
      </section>
    </>
  );
}
