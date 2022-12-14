/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "black",
        customgreen: "rgb(110, 255, 225)",
        customgrey: "rgb(187, 181, 172)"
      }
    },
  },
  plugins: [],
}
