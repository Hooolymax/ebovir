import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ecosystem, links } from "@/lib/content";

function CardLink({
  href,
  external,
  cta,
}: {
  href: string;
  external: boolean;
  cta: string;
}) {
  const cls =
    "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bio-teal transition group-hover:gap-2.5";
  const content = (
    <>
      {cta}
      <span aria-hidden>{external ? "↗" : "→"}</span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}

export function Ecosystem() {
  return (
    <section className="section bg-mist">
      <Container>
        <SectionHeading
          eyebrow={ecosystem.eyebrow}
          heading={ecosystem.heading}
          body={ecosystem.body}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {ecosystem.cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="glass-card glass-card-hover group relative h-full overflow-hidden p-8">
                {/* corner accent */}
                <div
                  className="absolute right-0 top-0 h-28 w-28 rounded-bl-[3rem] bg-gradient-to-br from-bio-cyan/10 to-transparent"
                  aria-hidden
                />
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold text-slate-900">
                    {c.name}
                  </h3>
                  {c.needsConfirmation && (
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-600">
                      Needs confirmation
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-bio-teal/80">
                  {c.tag}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {c.short}
                </p>
                <CardLink href={c.href} external={c.external} cta={c.cta} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <Button href={links.platforms} withArrow>
              View all platforms
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
