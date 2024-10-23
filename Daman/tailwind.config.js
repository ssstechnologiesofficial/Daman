/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-dragen': "url('/public/Image/bj-0907ace0.png')", // Adjust path if needed
      },
    },
  },
  plugins: [],
};
