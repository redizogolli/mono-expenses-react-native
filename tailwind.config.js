/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      spacing:{
        'nav-btn': '75px',
        'nav-btn-top': '70px',
      },
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