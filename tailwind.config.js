const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orangeAccent: "#C76000",
        mainText: "#F3F7F6",
        accentText: "#89b3a9",
        mainBg: "#385750",
        accentBg: "#58897D",
        moss: "#89b3a9"
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
