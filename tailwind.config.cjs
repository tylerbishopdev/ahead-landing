/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      ezgreen1: "#71CF25",
      ezgreen2: "#8AFF37",
      ezgreen3: "#ABFF66",
      oggreen: "#5FA624",
      orange: "#f98a07",
      blue: "#1b75f5",
      purple: "#9238ff",
      yellow: "#dcb716",
      lgray: "#E4E4E4",
      dgray: "#434242",
      pink: "#ff5252",
      red: "#ff4242",
      notezgreen: "#4eb22a",
      cyan: "#2ab2a2"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderOpacity: ({ theme }) => theme("opacity"),

    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.15rem",
      md: "0.25rem",
      lg: "0.375rem",
      full: "9999px"
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Source Sans Pro", "monospace"]
    },
    fontSize: {
      xs: ["0.775rem", { lineHeight: "0.875rem" }],
      sm: ["0.875rem", { lineHeight: "1.15rem" }],
      base: ["1.15rem", { lineHeight: "1.55rem" }],
      lg: ["1.3rem", { lineHeight: "1.85rem" }],
      xl: ["1.45rem", { lineHeight: "1.9rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.55rem", { lineHeight: "2.5rem" }],
      "5xl": ["3.25rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["7.5rem", { lineHeight: "1" }]
    },
    fontWeight: {
      light: "300",
      normal: "500",
      medium: "600",
      semibold: "700",
      bold: "800",
      extrabold: "900"
    },
    letterSpacing: {
      tighter: "-0.07em",
      tight: "-0.05em",
      normal: "-0.035em",
      wide: "0.025em"
    },
    lineHeight: {
      none: "0.9",
      tight: "1.25",
      normal: "1.35",
      loose: "2"
    },
    extend: {
      backgroundImage: {
        ezgrad:
          "linear-gradient(174deg, rgba(113,207,37,1) 0%, rgba(138,255,55,1) 73%, rgba(171,255,102,1) 100%)"
      },
      animation: {
        "star-animation": "star-animation 18s linear infinite",
        "fade-in-down": "fade-in-down 15s ease-out",
        "fade-out-down": "fade-out-down 15s ease-out",
        "fade-in-up": "fade-in-up 15s ease-out",
        "fade-out-up": "fade-out-up 15s ease-out"
      },
      keyframes: {
        "star-animation": {
          "80%": { transform: "scale(0) translateZ(100px)" },
          "100%": { transform: "scale(1) translateZ(100px)" }
        },
        "fade-in-down": {
          "0%": {
            from: {
              opacity: "0",
              transform: "translateY(-10px)"
            }
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)"
          }
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(10px)"
          },
          to: {
            opacity: "0",
            transform: "translateY(0px)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)"
          }
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(10px)"
          },
          to: {
            opacity: "0",
            transform: "translateY(0px)"
          }
        }
      }
    }
  },
  variants: {},
  corePlugins: {
    preflight: false
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
