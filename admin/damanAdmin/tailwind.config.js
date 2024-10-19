/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkSidebar: "#343a40",
        grayCustom: "#4f5962",
      },

      boxShadow: {
        custom:
          "0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
