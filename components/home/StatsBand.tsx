import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="bg-white pb-8 pt-4 sm:pb-12">
      <Container>
        <div className="grid gap-10 border-t border-slate-200 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-bio-cyan to-bio-indigo" />
                <div className="mt-5 font-display text-5xl font-bold tracking-tight text-gradient lg:text-6xl">
                  {s.value}
                </div>
                <p className="mt-3 text-sm leading-snug text-slate-500">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
