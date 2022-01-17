// reference: https://tailwindcss.com/docs/configuration
module.exports = {
  mode: (process.env.NODE_ENV === 'production') ? 'jit' : '',
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vue-blue': {
          '50': '#f4f5f6',
          '100': '#eaecee',
          '200': '#cacfd3',
          '300': '#abb2b9',
          '400': '#6b7885',
          // 500 = default color
          '500': '#2c3e50',
          '600': '#283848',
          '700': '#212f3c',
          '800': '#1a2530',
          '900': '#161e27'
        },
        'vue-green': {
          '50': '#f6fcf9',
          '100': '#ecf8f3',
          '200': '#d0eee0',
          '300': '#b3e3cd',
          '400': '#7bcea8',
          // 500 = default color
          '500': '#42b983',
          '600': '#3ba776',
          '700': '#328b62',
          '800': '#286f4f',
          '900': '#205b40'
        }
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
