/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "black",
        customgreen: "#00866A",
        customgrey: "#394B56"
      }
    },
  },
  plugins: [],
}
