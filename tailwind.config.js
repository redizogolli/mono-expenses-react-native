/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      width:{
        'man': '277px'
      },
      colors:{
        'light-primary': '#EEF8F7',
        'primary-text': '#438883',
      }
    },
  },
  plugins: [],
}