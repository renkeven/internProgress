import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

const watch = process.env.ROLLUP_WATCH

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "iife"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    resolve(),
    babel({
      presets: ["@babel/preset-react"]
    }),
    commonjs(),
    watch && serve('dist'),
    watch && livereload()
  ]
};