/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      rotate: {
        30: "30deg",
      },
      colors: {
        primary: "#4731D3",
        secondary: "#6B7280",
        tertiary: "#3730A3",

        light: {
          black: "#1F2937",
          blue: "#4338CA",
          red: "#AF0C48",
          dark: "#0A0A14",
          green: "#00AB6B",
          azure: "#0077B5",
          beige: "#F9F9F9",
          lavender: "#EEEBFF",
          lightpink: "#7B61FF",
          yellow: "#FFE86E",
        },

        dark: {
          bg: "#252128",
          purple: "#8F88FF",
          gray: "#D9D9D9",
          white: "#FFFFFF",
          lightPurple: "#BAB2E7",
          softPurple: "#B7AAFF",
          lightGray: "#E1E1FF",
          black: "#000000",
          blueGray: "#AEBCCF",
          lightLavender: "#CFCBFF",
          darkGray: "#383838",
          darkerGray: "#141414",
          aquaBlue: "#0BA6F6",
          green: "#17D18B",
          lightGray2: "#E1E1FF",
          periwinkle: "#8F88FF",
          buttonColor: "#3A3A3A",
          languageDark: "#777777",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

