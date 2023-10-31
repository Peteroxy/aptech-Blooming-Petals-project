/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        mooli: ['Mooli', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
        'allura': ['Allura', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
       
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'spin-short': 'spin 1s ease-in-out 1'
      },
    },
  },
  plugins: [],
};

