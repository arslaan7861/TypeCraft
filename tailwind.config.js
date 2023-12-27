/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        bgPrimary: "var(--bgPrimary)",
        bgSecondary: "var(--bgSecondary)",
      },
      boxShadow: {
        "3d": "5px 5px 5px 5px #00000080, inset -5px -5px 15px 5px #00000020 ,inset 5px 5px 15px 2px #ffffff15 ",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
