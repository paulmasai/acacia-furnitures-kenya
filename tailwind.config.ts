import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Neutral Earth-Tone Design System Tokens
        brand: {
          bg: "#F7F5F0",
          card: "#EFECE6",
          accent: "#705335",
          "accent-hover": "#5A4228",
          text: "#2C2A29",
          muted: "#8C857B",
          border: "#E5E0D8",
        },
        acacia: {
          50: "#F7F5F0",
          100: "#EFECE6",
          200: "#E5E0D8",
          300: "#C9BEAF",
          400: "#A7937F",
          500: "#705335", // Primary accent
          600: "#5A4228",
          700: "#47331F",
          800: "#362617",
          900: "#2C2A29", // Primary text
          950: "#1A1715",
        },
        savannah: {
          50: "#FAF8F5",
          100: "#F7F5F0",
          200: "#EFECE6",
          300: "#E5E0D8",
          400: "#C3BCB0",
          500: "#8C857B", // Muted subtext
          600: "#726A61",
          700: "#5A524A",
          800: "#443D36",
          900: "#2C2A29",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
