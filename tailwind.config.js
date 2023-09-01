/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'Montserrat': ["Montserrat", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        "primary-maroon": {
          DEFAULT: "#790000",
          1:  "#790000",
          2: "#580000",
        },
        "primary-yellow": {
          DEFAULT: "#F9A51A",
          1: "#F9A51A",
          2: "#FDDBA3",
        },
        "primary-red": {
          DEFAULT: "#EC1C24",
          1: "#EC1C24",
          2: "#F1555B",
        },
        "primary-orange": {
          DEFAULT: "#F05A22",
          1: "#F05A22",
          2: "#F9BDA7",
        },
        // "primary-maroon-1": "#790000",
        // "primary-yellow-1": "#F9A51A",
        // "primary-red-1": "#EC1C24",
        // "primary-orange-1": "#F05A22",
        // "primary-maroon-2": "#580000",
        // "primary-red-2": "#F1555B",
        // "primary-orange-2": "#F9BDA7",
        // "primary-yellow-2": "#FDDBA3",
      },
      fontSize: {
        "heading-1": ["4.75rem", {
          fontWeight: '700',
          lineHeight: "112%"
        }],
        "heading-2": ["3.8125rem", {
          fontWeight: '700',
          lineHeight: "120%"
        }],
        "heading-3": ["3.0625rem", {
          fontWeight: '700',
          lineHeight: "112%"
        }],
        "heading-4": ["2.4375rem", {
          fontWeight: 700,
          lineHeight: "112%"
        }],
        "heading-5": ["1.9375rem", {
          fontWeight: 700,
          lineHeight: "120%"
        }],
        "heading-6": ["1.5625rem", {
          fontWeight: 700,
          lineHeight: "150%"
        }],
        "subheading-regular": ["1.25rem", {
          fontWeight: 400,
          lineHeight: "120%"
        }],
        "subheading": ["1.25rem", {
          fontWeight: 700,
          lineHeight: "120%"
        }],
        "body": ["1.25rem", {
          fontWeight: 400,
          lineHeight: "150%"
        }],
        "caption": ["0.8125rem", {
          fontWeight: 400,
          lineHeight: "150%"
        }]
      },
      spacing: {
        "md": "1rem",
        "large": "1.5rem",
        "xl": "2.625rem",
        "2xl": "3.75rem",
        "3xl": "4.5rem",
      }
    },
  },
  plugins: [],
}
