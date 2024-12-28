/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-cream': '#FBF6E9',
        'deepgreen':'#118B50',
        'vivid-blue':'#0077B5',
        'sea-green':'#5DB996'
      },
    },
    fontFamily:{
      'hero-font':'Lobster'
    }
  },
  plugins: [],
}