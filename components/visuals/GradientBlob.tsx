/**
 * Vivid, luminous blue gradient "cloud" — the hero visual
 * (Binomix/Webflow-style). Two layered meshes drift on offset timing
 * to create a slowly shifting, saturated blue glow. Decorative only.
 */
export function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div
        className="absolute inset-0 animate-drift rounded-full blur-[54px]"
        style={{
          background:
            "radial-gradient(32% 32% at 50% 46%, rgba(56,189,248,0.70), transparent 70%)," +
            "radial-gradient(44% 44% at 42% 38%, rgba(59,130,246,0.58), transparent 72%)," +
            "radial-gradient(48% 48% at 62% 60%, rgba(99,102,241,0.52), transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0 animate-drift rounded-full blur-[54px] [animation-delay:-7s]"
        style={{
          background:
            "radial-gradient(40% 40% at 70% 66%, rgba(168,85,247,0.46), transparent 72%)," +
            "radial-gradient(38% 38% at 32% 62%, rgba(96,165,250,0.52), transparent 72%)",
        }}
      />
    </div>
  );
}
