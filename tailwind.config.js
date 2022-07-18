/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        ["2_5"]: "0.625rem",
        circle: "50%",
      },
      padding: {
        ["5_5"]: "1.375rem",
        15: "3.75rem",
        26: "6.5rem",
      },
      backgroundImage: {
        homesection: "url('/images/edgebg.svg'),url('/images/edgebg.svg')",
        homeimgedge: "url('/images/imageedge.svg')",
        homeimgedgedsk: "url('/images/imageedgedesk.svg')",
      },
      backgroundPosition: {
        howitworkssm: "-40% -7%, 146% 106%",
        howitworksmd: "-16% -6%, 116% 106%;",
        howitworkslg: "-14% -7%, 118% 106%",
        howitworksxl: "-7% -7%, 106% 106%",
        homeimgedgesm: "150% 58%",
        homeimgedgemd: "100% -5%",
        homeimgedgexl: "100% 0%",
      },
      // gridTemplateColumns:{

      // }
    },
    colors: {
      navtop_bg: "#F2F7FF4D",
      nav_bg: "#F2F7FF",
      btn_bg: "#00003D",
      white: "#FFFFFF",
      black_1: "#0E0A1E",
      black_2: "#11171D",
      black_3: "#0A0A0A",
      primary_1: "#17395C",
      primary_2: "#00003D",
      primary_9: "#D6D6FF",
      grey_2: "#4F4F4F",
      grey_3: "#828282",
      grey_4: "#BDBDBD",
      grey_5: "#D4DDDF",
      grey_6: "#F8F8F8",
      gray_9: "#18191F",
      footer_bg: "#0E0A1E",
      footer_border_color: "#4F4F4F",
      home_sec: "#F0F5FB",
    },
    // backgroundImage: {
    //   hero_img: "url('/images/hero_bg.svg')",
    // },
    boxShadow: {
      home_core_card: "0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
      home_why_card: " 0px 3px 7px 0px rgba(130, 130, 130, 0.1)",
      home_why_img: " 0px 4px 30px 0px rgba(0, 0, 0, 0.25)",
      home_how: " 0px 3px 7px 0px rgba(52, 52, 52, 0.1)",
      home_what: " 0px 2px 20px 1px rgba(0, 0, 102, 0.1)",
      home_testimony:
        " 0px 1.2817314863204956px 12.817315101623535px 0.6408657431602478px #0000661A",
    },
  },
  plugins: [],
};
