import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import babel from '@rollup/plugin-babel';

const watch = process.env.ROLLUP_WATCH

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    babel({
        presets: ["@babel/preset-react"]
      }),
    watch && serve('dist'),
    watch && livereload()
  ]
}