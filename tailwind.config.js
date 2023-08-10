/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      brown: {
        100: '#802E27',
      },
      cream: {
        100: '#ECD9C7',
      },
      beige: {
        100: '#F4F0ED',
      },
    },
    fontFamily: {
      heading: ['Optima'],
    },
  },
  plugins: [],
};
