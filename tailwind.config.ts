import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#faf9f6",
        secondaryBg: "#F8EBE1",
        mainText: "#2c2c2c",
        secondaryText: "#6b6b6b",
        mainAccent: "#d4af37",
        secondaryAccent: "#c19a6b",
        darkBg: "#2b2b2b",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        ...defaultTheme.screens,
        md: "821px",
      },
    },
  },
  plugins: [],
};
export default config;
