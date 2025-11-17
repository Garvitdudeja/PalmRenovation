import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-teal': {
          DEFAULT: '#52B788',
          50: '#F1FAEE',
          100: '#D8F3DC',
          200: '#B7E4C7',
          300: '#95D5B2',
          400: '#74C69D',
          500: '#52B788',
          600: '#40916C',
          700: '#2D6A4F',
          800: '#1B4332',
          900: '#081C15',
        },
        'charcoal-gray': {
          DEFAULT: '#3C3C3C',
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#4F4F4F',
          500: '#3C3C3C',
          600: '#2F2F2F',
          700: '#232323',
          800: '#161616',
          900: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
};
export default config;

