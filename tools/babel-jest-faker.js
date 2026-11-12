const babelJest = require('babel-jest')

// Faker 10 ships ESM that Jest 26 cannot execute. The root .babelrc is not
// applied inside node_modules, and Jest 26 caches one babel-jest instance, so
// this separate transformer compiles just that package to CommonJS.
module.exports = babelJest.createTransformer({
  babelrc: false,
  configFile: false,
  presets: [['@babel/preset-env', { modules: 'commonjs', targets: { node: '14' } }]]
})
