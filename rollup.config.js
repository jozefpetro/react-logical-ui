import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonJS from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    eslint(),
    nodeResolve(),
    commonJS({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
