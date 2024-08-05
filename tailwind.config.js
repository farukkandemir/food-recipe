/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
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
          "secondary-20": "#FFE1B3",
          "secondary-40": "#FFCE80",
          "secondary-60": "#FFBA4D",
          "secondary-80": "#FFA61A",
          "secondary-100": "#FF9C00",
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
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
