import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      padding: {
        xs: "2rem",
        lg: "9rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
