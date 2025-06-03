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
        tortora: "rgba(206,161,124,1)",
        cream: "rgba(233, 201, 168, 0.50)",
        blue: "rgb(198,211,226)",
        avorio: "rgb(250,242,238)",
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
