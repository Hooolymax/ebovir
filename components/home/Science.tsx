import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/visuals/Icon";
import { GradientOrb } from "@/components/visuals/GradientOrb";
import { scienceCards, links } from "@/lib/content";
import { ui, type UiMessages } from "@/lib/i18n/ui";

const iconMap: Record<string, "molecule" | "dna" | "ai"> = {
  molecule: "molecule",
  dna: "dna",
  ai: "ai",
};

export function Science({ content = scienceCards, labels = ui.en }: { content?: typeof scienceCards; labels?: UiMessages }) {
  return (
    <section className="section relative overflow-hidden bg-white">
      <GradientOrb className="left-1/2 top-[-20%] h-[420px] w-[420px] -translate-x-1/2" />
      <Container className="relative">
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          body={content.shortBody}
          align="center"
          gradient
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {content.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass-card glass-card-hover group h-full p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-bio-cyan/15 to-bio-indigo/15 text-bio-teal ring-1 ring-bio-cyan/20">
                  <Icon name={iconMap[c.icon]} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {c.short}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Button href={links.science} withArrow>
              {labels.exploreScience}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
