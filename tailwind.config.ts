import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"], // Adjusted to match layout.tsx
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        pattern: "url('/images/pattern.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;