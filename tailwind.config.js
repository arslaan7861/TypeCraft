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
        "3d": "5px 5px 15px 2px #00000080, inset -5px -5px 15px 5px #00000020 ,inset 5px 5px 15px 2px #ffffff15 ",
      },
      animation: {
        pop: "pop .5s linear ",
      },
      keyframes: {
        pop: {
          "0%": { bottom: "-100px" },

          "90%": { bottom: "70px" },

          "100%": { bottom: "64px" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
