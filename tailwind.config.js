/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ habilita variantes dark:
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // sua paleta existente
        brand: {
          50:  "#f5f6f8",
          100: "#eceef2",
          200: "#ced3dd",
          300: "#aeb8c8",
          400: "#8292a9",
          500: "#4a5a75",
          600: "#2f3b50",
          700: "#232c3c",
          800: "#171e29",
          900: "#0f151c",
        },
        accent: { 500: "#0ea5e9" },

        // ✅ alias 'primary' apontando para 'brand' (assim classes primary-* funcionam)
        primary: {
          50:  "#f5f6f8",
          100: "#eceef2",
          200: "#ced3dd",
          300: "#aeb8c8",
          400: "#8292a9",
          500: "#4a5a75",
          600: "#2f3b50",
          700: "#232c3c",
          800: "#171e29",
          900: "#0f151c",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
