module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#2C3639',
      'pri': '#A27B5C',
      'sec': '#DCD7C9'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}