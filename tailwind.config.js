module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'mono': ['"Roboto Mono"', 'monospace'],
        'serif': ['"Roboto Slab"', 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
