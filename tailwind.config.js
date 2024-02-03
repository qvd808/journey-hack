/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "welcomeMeditate": "#33A6A3"
      }
    },
  },
  plugins: [require("daisyui")],
};
