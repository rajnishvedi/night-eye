const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 16.23px 0px rgba(168, 85, 247, 0.55),0px 5.9px 5.9px 0px rgba(0, 0, 0, 0.4)'
      },
      colors: {
        'custom-purple': '#A855F7',
        'white-transparent': '#ffffffcf'
      },
    },
  },
  plugins: [],
};

