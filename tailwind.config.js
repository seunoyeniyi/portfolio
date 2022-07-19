/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
// npx tailwindcss -i ./css/input.css -o ./css/output.css --build