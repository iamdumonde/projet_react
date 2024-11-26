/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        primaryColor : "#5dbdd2",
        secondColor: "#005367",
        tertiaryColor: "#f1f5f9",
        headerTextColor: "#5dbdd2",
      }
    },
  },
  plugins: [],
}

