/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        full_hd: "1920px",
        ultra_wide: "2560px",
      },
    },
  },
  plugins: [],
};
