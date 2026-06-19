import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/visuals/Icon";
import { contact, links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ebovir Biotechnologie Inc. in the Greater Montreal area, or visit the EboGenes store to order genetic testing products.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk precision health"
        subtitle="Reach the Ebovir team for partnerships, research services, and general enquiries — or visit the EboGenes store to order genetic testing products."
      />

      <section className="section bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Email */}
            <Reveal>
              <div className="glass-card h-full p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bio-cyan/10 text-bio-teal ring-1 ring-bio-cyan/20">
                  <Icon name="spark" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">Email</h2>
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
                <h2 className="mt-5 text-lg font-semibold text-slate-900">Phone</h2>
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
                  Location
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

          {/* Store CTA band */}
          <Reveal>
            <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-mist p-8 sm:flex-row sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-semibold text-slate-900">
                  Looking to order genetic testing?
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Browse and purchase products through the EboGenes store.
                </p>
              </div>
              <Button href={links.eboGenesStore} withArrow>
                Visit EboGenes Store
              </Button>
            </div>
          </Reveal>

        </Container>
      </section>
    </>
  );
}
