/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f6f8",
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
