/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futurama-title': ['futurama-title-font', 'sans-serif'],
        'futurama-bold': ['futurama-bold-font', 'sans-serif']
      }
    },
  },
  plugins: [],
}
