# Notes for using npm/rollup

Rollup is a package bundler, allowing easy management of loading in multiple libraries and dependencies.

Shortcut in package.json to quickly use npm run dev,

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rollup -c",
    "dev": "rollup -c -w"
  },
```

To use:
    npm init
-> default -> results in a package.json file

    npm install --save-dev
-> dev only packages

Several useful "packages" to load for dev:
    rollup
    rollup-plugin-serve
    rollup-plugin-livereload

bash:
    npm i rollup rollup-plugin-serve rollup-plugin-livereload --save-dev

These plugins allow live display of the compiled code. To use, create a rollup.config.js with the following minimum code placed in it

```javascript
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
```
If you plan on using JSX syntax with React with the rollup build system, then you need Babel which compiles scripts into browser readable JS for current+older browsers.
    @babel/core
    @rollup/plugin-babel

To enable babel, you need to go to rollup.config.js and add into the presets:

```javascript
import babel from '@rollup/plugin-babel';

    plugins: [
    babel({
      presets: ["@babel/preset-react"],
    })
    ]
```

Where you possibly also need to install
    npm install @babel/preset-react --save-dev

Likewise for other presets, like ES2015+, then you can simply do the similar process
    npm install @babel/preset-env --save-dev

with
```javascript
    {
        "presets": ["@babel/preset-env"]
    }
```

