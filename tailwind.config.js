/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway','"Open Sans"']
      }
    },
  },
  plugins: [],
}
