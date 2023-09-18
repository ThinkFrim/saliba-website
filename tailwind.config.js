/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: '#2E3090',
        main: '#FFEFC6',
        btnColor: '#FEC32e'
      },
    },
  },
  plugins: [],
}

