import babel from 'rollup-plugin-babel'

var babelOptions = {
  presets: ["es2015-rollup"],
  exclude: 'node_modules/**'
}

export default {
  entry: 'src/main.js',
  format: 'umd',
  dest: 'dist/lodestar-ractive.js',
  moduleName: 'LodeRactive',
  plugins: [ babel(babelOptions) ]
}