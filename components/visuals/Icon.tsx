/**
 * Minimal line icons for science / ecosystem cards. Decorative.
 */
type IconName =
  | "molecule"
  | "dna"
  | "ai"
  | "lab"
  | "shield"
  | "globe"
  | "spark"
  | "users";

export function Icon({
  name,
  className = "h-7 w-7",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "molecule":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="12" cy="17" r="2.2" />
          <path d="M7.6 7.4 10.6 15M16.4 8.6 13.4 15M8 6.5h8" />
        </svg>
      );
    case "dna":
      return (
        <svg {...common}>
          <path d="M7 3c0 5 10 5 10 10S7 18 7 23M17 3c0 5-10 5-10 10s10 5 10 10" />
          <path d="M8.5 6h7M8.5 18h7M7 12h10" />
        </svg>
      );
    case "ai":
      // Neural-network node diagram
      return (
        <svg {...common}>
          <path d="M6.4 6.8 10.4 11M6.4 17.2 10.4 13M13.6 11 17.6 6.8M13.6 13 17.6 17.2" />
          <circle cx="5" cy="6" r="1.7" />
          <circle cx="5" cy="18" r="1.7" />
          <circle cx="12" cy="12" r="2.1" />
          <circle cx="19" cy="6" r="1.7" />
          <circle cx="19" cy="18" r="1.7" />
        </svg>
      );
    case "lab":
      return (
        <svg {...common}>
          <path d="M9 3h6M10 3v6l-4.5 8.5A2 2 0 0 0 7.3 21h9.4a2 2 0 0 0 1.8-2.9L14 9V3" />
          <path d="M7.8 15h8.4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9.5 12 1.8 1.8 3.5-3.6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.5a3 3 0 0 1 0 5.8M21 20c0-2.5-1.5-4.7-3.7-5.6" />
        </svg>
      );
    default:
      return null;
  }
}
