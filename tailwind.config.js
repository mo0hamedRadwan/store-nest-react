/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "3xl": "1800px",
      },
    },
    extend: {
      colors: {
        primary: {
          default: "#3BB77E",
          light: "#DEF9EC",
          dark: "#29A56C",
        },
        font: {
          default: "#253D4E",
        },
      },
      fontFamily: {
        custom: ["Quicksand", "sans-serif"],
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
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      // DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.9rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
