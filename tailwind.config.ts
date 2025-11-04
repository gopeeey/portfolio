import type { Config } from "tailwindcss";

const customLengths = {
  xs: "2.3rem",
  sm: "4rem",
  lg: "7rem",
  "2xl": "12rem",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        flamenco: ["var(--font-flamenco)"],
        montserrat: ["var(--font-montserrat)"],
      },
      fontWeight: {
        flamenco_light: "300",
        flamenco_regular: "400",
      },
      colors: {
        primary: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        secondary: "rgb(75 85 99 / <alpha-value>)",
        foreground_transparent:
          "rgb(var(--transparent-foreground) / <alpha-value>)",
        light_grey: "#65737E",
        lighter_grey: "#859099",
      },
      backgroundColor: {
        secondary: "rgb(var(--foreground) / <alpha-value>)",
      },
      padding: { ...customLengths },
      margin: { ...customLengths },
    },
  },
  plugins: [],
} satisfies Config;
