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
    },
  },
  plugins: [],
};

