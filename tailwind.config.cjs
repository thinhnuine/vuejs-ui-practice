/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'primary': '#FFFAF9',
    }
  },
  // fontSize: {
  //   normal: ['15px', '25px'],
  //   mobile: ['13px', '26px'],
  //   smobile: ['11px', '22px'],
  //   xs: '.75rem',
  //   sm: '.875rem',
  //   tiny: '.875rem',
  //   base: '1rem',
  //   lg: '1.125rem',
  //   xl: '1.25rem',
  //   '2xl': '1.5rem',
  //   '3xl': '1.875rem',
  //   '4xl': '2.25rem',
  //   '5xl': '3rem',
  //   '6xl': '4rem',
  //   '7xl': '5rem',
  // },
  plugins: [],
}
