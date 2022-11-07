/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dracula", "dark", "cmyk"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
