/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueDark: "#1E6F9F",
        blueLight: "#4EA8DE",
        purpleDark: "#5E60CE",
        purpleLight: "#8284FA",
        headerBackground: "#0D0D0D",
        gray100: "#F2F2F2",
        gray200: "#D9D9D9",
        gray300: "#808080",
        gray400: "#333333",
        gray500: "#262626",
        gray600: "#1a1a1a",
        gray700: "#0d0d0d",
        danger: "#e25858",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
