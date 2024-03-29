/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        changebg: {
          "0%": {
            background:
              "url(/images/hero_circle11.svg) left no-repeat,url(/images/hero_circle21.svg) center no-repeat,url(/images/hero_circle31.svg) right no-repeat",
          },
          "25%": {
            background:
              "url(/images/hero_circle11.svg) center no-repeat, url(/images/hero_circle21.svg) right no-repeat, url(/images/hero_circle31.svg) left no-repeat",
          },
          "50%": {
            background:
              "url(/images/hero_circle11.svg) right no-repeat, url(/images/hero_circle21.svg) left no-repeat, url(/images/hero_circle31.svg) center no-repeat",
          },
          "75%": {
            background:
              "url(/images/hero_circle11.svg) right no-repeat, url(/images/hero_circle21.svg) center no-repeat, url(/images/hero_circle31.svg) left no-repeat",
          },
          "100%": {
            background:
              "url(/images/hero_circle11.svg) left no-repeat, url(/images/hero_circle21.svg) center no-repeat, url(/images/hero_circle31.svg) right no-repeat",
          },
        },
      },
      animation: {
        "bg-animate": "changebg 5s ease infinite",
      },
      borderRadius: {
        ["2_5"]: "0.625rem",
        circle: "50%",
      },
      padding: {
        ["5_5"]: "1.375rem",
        ["12_5"]: "3.125rem",
        15: "3.75rem",
        26: "6.5rem",
      },
      backgroundImage: {
        homesection: "url('/images/edgebg.svg'),url('/images/edgebg.svg')",
        homesection_desk: "url('/images/edgebgdsk.svg'),url('/images/edgebgdsk.svg')",
        homeheroedge:
          "url('/images/hero_leftband.svg'),url('/images/hero_rightband.svg')",
        homeheroedgemobile:
          "url('/images/heromb_leftband.svg'),url('/images/heromb_rightband.svg')",
        homeimgedge: "url('/images/imageedge.svg')",
        homeimgedgedsk: "url('/images/imageedgedesk.svg')",
        accordionimg: "url('/images/arrowdown.svg')",
      },
      backgroundPosition: {
        howitworkssm: "-40% -7%, 146% 106%",
        howitworksmd: "-16% -6%, 116% 106%;",
        howitworkslg: "-14% -7%, 118% 106%",
        howitworksxl: "-15% -50%, 115% 150%",
        homeheromb: "0% 85%, 150% 55%",
        homeherolg: "-30% 95%, 150% 55%",
        homeimgedgesm: "150% 58%",
        homeimgedgemd: "100% -5%",
        homeimgedgexl: "100% 0%",
        unset: "unset",
      },
      boxShadow: {
        home_core_card: "0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
        home_why_card: " 0px 3px 7px 0px rgba(130, 130, 130, 0.1)",
        home_why_img: " 0px 4px 30px 0px rgba(0, 0, 0, 0.25)",
        home_how: " 0px 3px 7px 0px rgba(52, 52, 52, 0.1)",
        home_what: " 0px 2px 20px 1px rgba(0, 0, 102, 0.1)",
        home_testimony:
          " 0px 1.2817314863204956px 12.817315101623535px 0.6408657431602478px #0000661A",
        xl: "6px 5px 17px rgba(156, 149, 149, 0.06)",
        "2xl": "0px 8px 25px rgba(130, 130, 130, 0.15)",
        "3xl": "6px 5px 22px rgba(0, 0, 0, 0.1)",
        hero_mobile: "10px 15px 30px 0px #29292A80",
        hamburger: "0px 1px 20px 0px #0000000F",
        header: "0px 0.6525956988334656px 15.662297248840332px -0.6525956988334656px #0000001A",
        pricing_card: "box-shadow: 6px 5px 17px rgba(156, 149, 149, 0.06);"
      },
    },

    colors: {
      nav_bg: "#F2F7FF",
      body_bg: "#F5F5FF",
      btn_bg: "#00003D",
      white: "#FFFFFF",
      black_1: "#0E0A1E",
      black_2: "#11171D",
      black_3: "#0A0A0A",
      primary_1: "#17395C",
      primary_2: "#00003D",
      primary_4: "#044DA1",
      primary_5: "#0096E0",
      primary_8: "#C2EBFF",
      primary_9: "#D6D6FF",
      grey_1: "#333333",
      grey_2: "#4F4F4F",
      grey_3: "#828282",
      grey_4: "#BDBDBD",
      grey_5: "#D4DDDF",
      grey_6: "#F8F8F8",
      gray_9: "#18191F",
      footer_bg: "#0E0A1E",
      footer_border_color: "#4F4F4F",
      home_sec: "#F0F5FB",
      scam_contact: "#4737FF",
      light_d1: "#EEEEEF",
      light_ruler_1: "rgba(192, 204, 218, 0.1)",
      light_ruler_2: "rgba(192, 204, 218, 0.6)",
    },
  },
  plugins: [],
};
