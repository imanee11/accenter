/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006BFF',
        secondary: '#FFF100',
        accent: '#cab6b2',
        likeblack: '#3D3D3D',
      },
      fontFamily: {
        // sans: ['Lato', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        baloo: ['"Baloo Thambi 2"', 'cursive'], 

      },
    },
  },
  plugins: [],
}

