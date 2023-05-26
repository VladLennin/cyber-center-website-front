/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': 'repeat(21, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}