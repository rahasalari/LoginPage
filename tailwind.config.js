/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        54: "14rem",
        128: "32rem",
        200: "34rem",
        144: "36rem",
        1034: "1034px",
        1500: "1315px",
        392: "392px",
      },
      colors: {
        primary: " #7B9FC0",
        aliceprimary: "#ECF0F3",
        snow: "#FBFBFB",
        red: "#CB0E0E",
        info: "#007BFF",
        warning: "#F29059",
        success: "#87D97A",
      },
      height: {
        "8/9": "90%",
        "2/5": "37%",
      },
      width: {
        "8/9": "90%",
      },
      fontSize: {
        9: "9px",
        12: "12px",
      },
    },
  },
  plugins: [],
};
