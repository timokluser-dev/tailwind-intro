// reference: https://tailwindcss.com/docs/configuration
module.exports = {
  mode: (process.env.NODE_ENV === 'production') ? 'jit' : '',
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vue-blue': '#2c3e50',
        'vue-green': '#42b983',
      },
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
