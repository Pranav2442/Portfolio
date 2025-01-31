/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        tertiary: "#151030",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        drop: {
          '0%': { 
            height: '0px', 
            opacity: '0',
            transform: 'scaleY(0)' 
          },
          '100%': { 
            height: '100%', 
            opacity: '1',
            transform: 'scaleY(1)' 
          }
        }
      },
      animation: {
        drop: 'drop 2s ease-out forwards'
      }
    },
  },
  plugins: [],
};