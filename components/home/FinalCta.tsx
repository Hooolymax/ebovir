import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { GradientOrb } from "@/components/visuals/GradientOrb";
import { finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="section bg-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-mist to-white px-8 py-16 text-center shadow-card sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
            <GradientOrb className="left-1/2 top-[-30%] h-[420px] w-[420px] -translate-x-1/2" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {finalCta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {finalCta.body}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={finalCta.primary.href} withArrow>
                  {finalCta.primary.label}
                </Button>
                <Button href={finalCta.secondary.href} variant="secondary">
                  {finalCta.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
