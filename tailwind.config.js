import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
    },
    colors: {
      primary: {
        100: "#F2F9FD",
        200: "#E5F0F9",
        300: "#C4E2F3",
        400: "#90CAE9",
        500: "#55AEDB",
        600: "#3094C7",
        700: "#2076A9",
        800: "#1B5F89",
        900: "#1C5679",
        1000: "#1B445F",
      },
      grayscale: {
        50: "#DADADB",
        100: "#D0CFCA",
        200: "#D3D4CC",
        300: "#BFBFBF",
        400: "#AFB0B2",
        500: "#939391",
        600: "#626461",
        700: "#424242",
        800: "#3F3F3F",
        900: "#3F4147",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
