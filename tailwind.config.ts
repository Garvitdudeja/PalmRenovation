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
          DEFAULT: '#2E8B57',
          50: '#F0F9F4',
          100: '#D4EDDC',
          200: '#A8DBB8',
          300: '#7CC994',
          400: '#50B770',
          500: '#2E8B57',
          600: '#256F45',
          700: '#1C5333',
          800: '#133721',
          900: '#0A1B0F',
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

