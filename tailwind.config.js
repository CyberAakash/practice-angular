/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montreau: ["Montreau"],
        azaro: ["Azaro"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
