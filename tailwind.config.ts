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
          DEFAULT: '#007D79',
          50: '#E6F5F4',
          100: '#CCEBE9',
          200: '#99D7D3',
          300: '#66C3BD',
          400: '#33AFA7',
          500: '#007D79',
          600: '#00645F',
          700: '#004B45',
          800: '#00322C',
          900: '#001912',
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

