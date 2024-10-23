import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#DEDEDE",
        foreground: "#DEDEDE",
        accent: "#930F00",
        accent2: "#490600",
        accent2opaque: "#490600EE",
        accent3: "#CD9C73",
        accent3shade: "#A16D45",
        accent3shade2: "#976138",
      },
      transitionDuration: {
        '400': '400ms',
      },
      width: {
        'content': '67.5rem'
      },
      keyframes: {
        slideFromRight: {
          '0%': { 
            translate: '100vw',
            opacity: '0',
          },
          '100%': {
            translate: '0vw',
            opacity: '1',
          },
        },
        showUp: {
          '0%': { 
            translate: '0 20dvh',
            opacity: '0',
          },
          '100%': {
            translate: '0 0dvh',
            opacity: '1',
          },
        },
      },
      animation: {
        slideFromRight: 'slideFromRight 400ms ease-in-out 1 forwards',
        showUp: 'showUp 400ms ease-out 1 forwards',
      },
    },
  },
  plugins: [],
};
export default config;
