/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101D35',
        teal: '#16B8A6',
      },
    },
  },
  plugins: [],
};
