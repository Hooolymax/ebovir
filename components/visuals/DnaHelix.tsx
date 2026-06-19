/**
 * Lightweight SVG DNA double-helix — a scientific visual placeholder.
 * Decorative only (aria-hidden).
 */
export function DnaHelix({ className = "" }: { className?: string }) {
  const rungs = Array.from({ length: 18 });
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 520"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="helixA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="helixB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Two sine-wave backbones */}
      <path
        d="M60 0 C 140 60, 140 120, 60 180 C -20 240, -20 300, 60 360 C 140 420, 140 480, 60 520"
        stroke="url(#helixA)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M140 0 C 60 60, 60 120, 140 180 C 220 240, 220 300, 140 360 C 60 420, 60 480, 140 520"
        stroke="url(#helixB)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Connecting base pairs */}
      {rungs.map((_, i) => {
        const y = (i + 0.5) * (520 / rungs.length);
        const phase = Math.sin((i / rungs.length) * Math.PI * 4);
        const x1 = 100 - phase * 40;
        const x2 = 100 + phase * 40;
        return (
          <line
            key={i}
            x1={x1}
            y1={y}
            x2={x2}
            y2={y}
            stroke="rgba(15,23,42,0.16)"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}
