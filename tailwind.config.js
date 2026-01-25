/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7a73d1",
      },
      keyframes: {
        pageIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(6px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "page-in": "pageIn 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};
