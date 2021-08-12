import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const watch = process.env.ROLLUP_WATCH

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    watch && serve('dist'),
    watch && livereload()
  ]
}