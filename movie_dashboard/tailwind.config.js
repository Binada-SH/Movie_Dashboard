/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#0f0f0f',
        'custom-red': '#DC2626',
      },
    },
  },
  plugins: [],
}
