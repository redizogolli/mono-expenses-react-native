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
        'orange': '#FFAB7B',
        'info': '#2F7E79',
        'lighter-gray': '#D0E5E4',
        'lighter-black': '#222222',
        'money-green': '#25A969',
        'money-red': '#F95B51',
        'transaction-bg': '#F0F6F5',
      },
      opacity: {
        '6' : '0.06',
      },
    },
  },
  plugins: [],
}