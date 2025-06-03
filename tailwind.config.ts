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
        tortora: "rgba(206,161,124)",
        cream: "rgb(223, 191, 163)",
        blue: "rgb(253, 248, 243)",
        avorio: "rgb(252, 248, 237)",
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

/*  */
