import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/visuals/Icon";
import { ecosystem } from "@/lib/content";

type IconName = "dna" | "molecule" | "ai" | "lab";

function EntryCard({
  name,
  tag,
  href,
  external,
  icon,
}: {
  name: string;
  tag: string;
  href: string;
  external: boolean;
  icon: string;
}) {
  const inner = (
    <>
      {/* connector tick from the rail (desktop only) */}
      <span
        aria-hidden
        className="absolute -top-6 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-slate-200 lg:block"
      />
      <span className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-bio-cyan to-bio-indigo opacity-70" />
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-bio-cyan/15 to-bio-indigo/15 text-bio-teal ring-1 ring-bio-cyan/20">
        <Icon name={icon as IconName} className="h-6 w-6" />
      </span>
      <span className="mt-4 font-display text-lg font-semibold text-slate-900">
        {name}
      </span>
      <span className="mt-1 text-xs leading-snug text-slate-500">{tag}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-bio-teal transition group-hover:gap-1.5">
        {external ? "Visit" : "Explore"}
        <span aria-hidden>{external ? "↗" : "→"}</span>
      </span>
    </>
  );

  const cls =
    "glass-card glass-card-hover group relative flex h-full flex-col items-center overflow-hidden p-6 pt-7 text-center";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="section relative scroll-mt-28 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
      <Container className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bio-teal">
              {ecosystem.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {ecosystem.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {ecosystem.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Parent node */}
        <Reveal delay={0.06}>
          <div className="mt-14 flex flex-col items-center">
            <div className="relative rounded-2xl border border-bio-cyan/30 bg-white px-8 py-5 text-center shadow-glow">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bio-teal">
                Parent platform
              </p>
              <p className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-900">
                {ecosystem.parent.name}
              </p>
              <p className="mx-auto mt-1 max-w-xs text-sm text-slate-500">
                {ecosystem.parent.label}
              </p>
            </div>
            {/* vertical connector down to the rail (desktop only) */}
            <span aria-hidden className="hidden h-10 w-px bg-slate-200 lg:block" />
          </div>
        </Reveal>

        {/* Entry points (connected rail on desktop) */}
        <div className="relative mt-10 lg:mt-0 lg:pt-6">
          <span
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.cards.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <EntryCard
                  name={c.name}
                  tag={c.tag}
                  href={c.href}
                  external={c.external}
                  icon={c.icon}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Hierarchy bridge — keeps platforms/business areas conceptually separate */}
        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm sm:flex-row">
            <Link
              href="/business-areas"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-600 transition hover:text-bio-teal"
            >
              Business areas <span aria-hidden>→</span>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-600 transition hover:text-bio-teal"
            >
              Products &amp; solutions <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
