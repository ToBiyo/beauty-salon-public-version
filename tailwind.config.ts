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
        tortora: "rgba(199,162,139,0.79)",
        cream: "rgb(247, 228, 198)",
        blue: "rgb(198,211,226)",
        avorio: "rgb(255, 250, 247)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        ...defaultTheme.screens,
        lg: "1025px",
      },
    },
  },
  plugins: [],
};
export default config;
