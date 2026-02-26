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
        ink:   { DEFAULT: "#0d0d0d", 2: "#141416", 3: "#1c1c1f" },
        amber: "#e8a030",
        green: "#4db87a",
        muted: "#888480",
        dim:   "#484540",
      },
    },
  },
  plugins: [],
};

export default config;
