import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { mission, links } from "@/lib/content";
import { ui, type UiMessages } from "@/lib/i18n/ui";

export function Mission({ content = mission, labels = ui.en }: { content?: typeof mission; labels?: UiMessages }) {
  return (
    <section className="section bg-mist">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={content.eyebrow}
              heading={content.heading}
              body={content.shortBody}
            />
            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button href={links.company} withArrow>
                  {labels.aboutCompany}
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover h-full p-7">
                  <span className="font-display text-sm font-semibold text-bio-teal">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {p.short}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
