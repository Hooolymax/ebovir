import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { team } from "@/lib/content";

type Member = { name: string; role: string; bio?: string };

function initials(name: string) {
  const cleaned = name.replace(/^(Dr|MSs|Ms|Mr|Mrs|Prof)\.?\s+/i, "");
  const parts = cleaned.split(/[\s-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function MemberCard({ m, delay = 0 }: { m: Member; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="glass-card glass-card-hover h-full p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-bio-cyan/15 to-bio-indigo/15 font-display text-sm font-semibold text-bio-teal ring-1 ring-bio-cyan/20">
          {initials(m.name)}
        </div>
        <h4 className="mt-4 text-base font-semibold text-slate-900">{m.name}</h4>
        <p className="mt-1 text-sm font-medium text-bio-teal">{m.role}</p>
        {m.bio && (
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{m.bio}</p>
        )}
      </div>
    </Reveal>
  );
}

function MemberGrid({ members }: { members: readonly Member[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((m, i) => (
        <MemberCard key={m.name + m.role} m={m} delay={(i % 4) * 0.06} />
      ))}
    </div>
  );
}

export function Team() {
  return (
    <section className="section bg-mist">
      <Container>
        <SectionHeading
          eyebrow={team.eyebrow}
          heading={team.heading}
          body={team.intro}
          align="center"
          gradient
        />

        <div className="mt-16 space-y-16">
          {team.sections.map((section) => (
            <div key={section.title}>
              <Reveal>
                <div className="mb-8 border-l-2 border-bio-cyan pl-4">
                  <h3 className="font-display text-2xl font-semibold text-slate-900">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {section.subtitle}
                  </p>
                </div>
              </Reveal>

              {"members" in section && section.members ? (
                <MemberGrid members={section.members} />
              ) : null}

              {"subgroups" in section && section.subgroups ? (
                <div className="space-y-12">
                  {section.subgroups.map((sg) => (
                    <div key={sg.title}>
                      <Reveal>
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {sg.title}
                        </h4>
                      </Reveal>
                      <MemberGrid members={sg.members} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
