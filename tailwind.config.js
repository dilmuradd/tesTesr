/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-yellow': 'rgba(255, 255, 0, 0.94) 0px 3px 8px',
      },
    },
  },
  plugins: [],
}
