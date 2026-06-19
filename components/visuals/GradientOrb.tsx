/**
 * Soft animated gradient orb used as a background visual placeholder.
 * Tuned for light backgrounds. Decorative only.
 */
export function GradientOrb({
  className = "",
  from = "rgba(14,165,233,0.18)",
  to = "rgba(59,130,246,0.12)",
}: {
  className?: string;
  from?: string;
  to?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl animate-drift ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${from}, ${to} 60%, transparent 75%)`,
      }}
    />
  );
}
