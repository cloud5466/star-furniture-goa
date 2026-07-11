// Configures Tailwind design tokens for the project.
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4a03c",
        "gold-dark": "#9c7224",
        "bg-dark": "#191919",
        "bg-light": "#F2E6D8",
        cream: "#fff8ee",
        ink: "#191919",
        muted: "#6f6254",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        luxury: "0 28px 80px rgba(0, 0, 0, 0.34)",
        card: "0 24px 70px rgba(0, 0, 0, 0.22)",
        focus: "0 0 0 3px rgba(212, 160, 60, 0.28)",
      },
    },
  },
} satisfies Config;

export default config;
