/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          1: '#FFC107',
          2: '#FFD037'
        },
        neutral: '#808080'
      },
      boxShadow:{
        'default': '0px 10px 30px rgba(128, 128, 128, 0.25)'
      },
      fontFamily: {
        nunitoSans : ["Nunito Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}
