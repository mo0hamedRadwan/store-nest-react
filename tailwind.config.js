/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1610px",
      },
    },
    extend: {
      colors: {
        mainColor: "#253D4E",
        rateColor: "#B6B6B6",
        priceNowColor: "#3BB77E",
        priceOldColor: "#adadad",
        primary: {
          default: "#3BB77E",
          light: "#DEF9EC",
          dark: "#29A56C",
          hover: "#FDC040",
        },
        category: {
          1: "#f2fce4",
          2: "#fffceb",
          3: "#ecffec",
          4: "#feefea",
          5: "#fff3eb",
          6: "#fff3ff",
        },
        font: {
          default: "#253D4E",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      translate: {
        "-5px": "-5px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
