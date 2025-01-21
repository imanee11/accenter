/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64929f',
        secondary: '#F5ECD5',
        accent: '#c3748a',
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

