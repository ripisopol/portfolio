import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        ink:   { DEFAULT: "#18181b", 2: "#1f1f23", 3: "#27272a" },
        amber: "#e8a030",
        green: "#4db87a",
        muted: "#a9a39b",
        dim:   "#6b6660",
      },
    },
  },
  plugins: [],
};

export default config;
