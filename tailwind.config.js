/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        halfxl: "1440px",
      },
      colors: {
        primary: "hsl(172, 67%, 45%)",
        secondary_100: "hsl(0, 0%, 100%)",
        secondary_200: "hsl(189, 41%, 97%)",
        secondary_300: "hsl(185, 41%, 84%)",
        secondary_500: "hsl(184, 14%, 56%)",
        secondary_700: "hsl(186, 14%, 43%)",
        secondary_800: "hsl(183, 100%, 15%)",
      },
      fontFamily: {
        primary: "Space Mono",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
