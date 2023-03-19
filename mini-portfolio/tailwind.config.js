/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      monserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
