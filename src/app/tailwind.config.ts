// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Jost", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        gold:    "#c8a45a",
        "gold-2": "#e8d5a0",
        surface: "#111116",
        "surface-2": "#181820",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
