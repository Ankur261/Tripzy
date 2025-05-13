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
    animation: {
        fly: 'fly 2s linear',
        progress: 'progress 2s linear',
      },
      keyframes: {
        fly: {
          '0%': { transform: 'translateY(-50%) translateX(0)' },
          '100%': { transform: 'translateY(-50%) translateX(calc(100% - 24px))' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
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

