/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#64748b",
        dark: "#020617",
        orange: "#ea580c",
        putihTulang: "#f8f1e4",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
