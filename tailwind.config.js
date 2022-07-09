/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "xl": "6px 5px 17px rgba(156, 149, 149, 0.06)",
        '2xl': '0px 8px 25px rgba(130, 130, 130, 0.15)',
      }
    },
    colors: {
      "nav_bg": "#F2F7FF",
      "body_bg": "#F5F5FF",
      "btn_bg": "#00003D",
      "white": "#FFFFFF",
      "black_1": "#0E0A1E",
      "black_2": "#11171D",
      "black_3": "#0A0A0A",
      "primary_1": "#17395C",
      "primary_2": "#00003D",
      "primary_4": "#044DA1",
      "primary_5": "#0096E0",
      "primary_8": "#C2EBFF",
      "primary_9": "#D6D6FF",
      "grey_1": "#333333",
      "grey_2" : "#4F4F4F",
      "grey_3": "#828282",
      "grey_4": "#BDBDBD",
      "grey_6": "#F8F8F8",
      "gray_9": "#18191F",
      "footer_bg": "#0E0A1E",
      "scam_contact": "#4737FF"
    },
    backgroundImage: {
      "hero_img": "url('/images/hero_bg.svg')",
    }
  },
  plugins: [],
}
