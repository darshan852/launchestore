/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 575px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1320px) { ... }
    },
    fontFamily: {
      helvetica: ["Inter", "Poppins"],
      display: ["Inter", "Poppins"],
      body: ["Inter", "Poppins"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        Primary: "#28B469",
        Secondary: "#FFCA1D",
        lightgreen: "#F4F9F6",
        inputbg: "#ecf2f7",
        inputtext: "#464653",
        lightyellow:
          "linear-gradient(to right, var(--secondary-color), #FFE9A0)",
        lightblue: "#4167B0",
      },
      colors: {
        Primary: "#28B469",
        Secondary: "#FFCA1D",
        black: "#1C1C1F",
        gray: "#5D5D65",
        inputtext: "#464653",
        bordercolor: "#F1F1F4",
        lable: "#071437",
        lightgreen: "#F4F9F6",
        lightborder: "rgba(0,0,0,0.3)",
      },
      padding: {
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        4.5: "18px",
        5: "20px",
      },
    },
  },
  plugins: [],
}
