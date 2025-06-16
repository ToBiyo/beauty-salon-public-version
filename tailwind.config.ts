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
        secondaryAccent: "#B8856B",
        sectionBg: "#4B5563",
        grayBackground: "#f7f7f7",
        accent: "#D8C9B5",
        background: "#F9FBFD",
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

//palette 2
/* 
        secondaryAccent: #205B4F
        sectionBg: "#D9E8E5",
        accent: "#CEA892",
        background: "#FFFFFF",

*/
//palette 1
/* 
      
       secondaryAccent: "#8B9A8C",
        sectionBg: "#4B5563",
        accent: "#D8C9B5",
        background: "#F9FBFD",

*/
//palette 3
/* 
     
        sectionBg: "#5F7161",
        accent: "#C8A39E",
        background: "#F5F7F6",

*/
//palette 4
/* 
        
        sectionBg: "#5C5F66",
        accent: "#A8B8A5",
        background: "#E5EDF0",

*/
//palette 5
/* 
        
        sectionBg: "#F3EEE8",
        accent: "#A8B8A5",
        background: "#DCEBF1",

*/
