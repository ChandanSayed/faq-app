/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "8%": "8%",
        "5%": "5%"
      },
      fontFamily: {
        Ageo: "Ageo",
        AgeoSemiBold: "Ageo-semiBold",
        AgeoBold: "Ageo-Bold"
      },
      colors: {
        "black": "#1F2123",
        "light-gray": "#dbdbdb",
        "buttonColor": "#6666FF"
      }
    },
  },
  plugins: [],
}