/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        welcomeMeditate: "black",
      },
    },
  },
  plugins: [require("daisyui")],
};
