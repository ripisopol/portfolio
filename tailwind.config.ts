import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono:  ["JetBrains Mono", "monospace"],
        sans:  ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        ink:   { DEFAULT: "#18181b", 2: "#1f1f23", 3: "#27272a" },
        amber: "#e8a030",
        green: "#4db87a",
        muted: "#888480",
        dim:   "#52524e",
      },
    },
  },
  plugins: [],
};

export default config;
