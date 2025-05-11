/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      josefin: ['"Josefin Sans"', 'sans-serif'],
    },
    colors: {
      brandBlue: '#000099', 
      footerbg:"#000076",
      boldGreen:"#209326"   
    },
  },
  },
  plugins: [],
}

