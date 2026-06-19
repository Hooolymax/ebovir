import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  gradient = false,
  className = "",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  gradient?: boolean;
  className?: string;
}) {
  const alignCls =
    align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-6 font-display text-3xl font-bold leading-[1.04] tracking-tight sm:text-4xl lg:text-5xl ${
            gradient ? "text-gradient" : "text-slate-900"
          }`}
        >
          {heading}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-relaxed text-slate-600 sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
