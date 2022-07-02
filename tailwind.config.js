/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      "nav_bg": "#F2F7FF",
      "btn_bg": "#00003D",
      "white": "#FFFFFF",
      "black_1": "#0E0A1E",
      "black_2": "#11171D",
      "black_3": "#0A0A0A",
      "primary_1": "#17395C",
      "primary_2": "#00003D",
      "primary_4": "#044DA1",
      "primary_9": "#D6D6FF",
      "grey_3": "#828282",
      "grey_4": "#BDBDBD",
      "grey_6": "#F8F8F8",
      "gray_9": "#18191F",
      "footer_bg": "#0E0A1E",
      "footer_border_color": "#4F4F4F"
    },
    backgroundImage: {
      "hero_img": "url('/images/hero_bg.svg')",
    }
  },
  plugins: [],
}
