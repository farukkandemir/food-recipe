/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",

    // "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: "#000000",
          white: "#ffffff",
          "gray-1": "#484848",
          "gray-2": "#797979",
          "gray-3": "#a9a9a9",
          "gray-4": "#d9d9d9",
        },
        primary: {
          "primary-20": "#F6FAF9",
          "primary-40": "#DBEBE7",
          "primary-60": "#AFD3CA",
          "primary-80": "#71B1A1",
          "primary-100": "#129575",
        },
        secondary: {
          20: "#FFE1B3",
          40: "#FFCE80",
          60: "#FFBA4D",
          80: "#FFA61A",
          100: "#FF9C00",
        },
        rating: "#FFAD30",
        warning: {
          red: "#804E00",
          pink: "#995E00",
        },
        green: {
          success: "#31B057",
        },
      },
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        poppinsBold: ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
