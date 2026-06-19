import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft blue-tinted neutral for alternating sections
        mist: "#f3f8ff",
        // Light-blue brand accent scale
        bio: {
          teal: "#0284c7", // readable accent text on white (sky-600)
          cyan: "#0ea5e9", // sky-500
          indigo: "#2563eb", // blue-600
          violet: "#3b82f6", // blue-500
        },
      },
      fontFamily: {
        // Body: Inter → Helvetica Neue
        sans: [
          "var(--font-inter)",
          '"Helvetica Neue"',
          "system-ui",
          "Arial",
          "sans-serif",
        ],
        // Headings: Neue Haas Grotesk → Helvetica Now → Satoshi (Fontshare)
        display: [
          '"Neue Haas Grotesk Display Pro"',
          '"Neue Haas Grotesk Display"',
          '"Helvetica Now Display"',
          "Satoshi",
          '"Helvetica Neue"',
          "var(--font-inter)",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 18px 50px -18px rgba(14, 165, 233, 0.45)",
        card: "0 12px 40px -20px rgba(15, 23, 42, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.06)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "spin-slow": "spinSlow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
