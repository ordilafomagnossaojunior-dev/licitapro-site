/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta neutra da marca (usada no dark)
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
        // Paleta principal (para bg-primary-600, text-primary-700, etc.)
        primary: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
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
