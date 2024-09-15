/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',               /* Chrome, Safari, and Opera */
        },
      }, ['responsive', 'hover'])
    }
  ],
}
