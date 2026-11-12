const cssLoader = require.resolve('css-loader')

module.exports = config => {
  for (const rule of config.module.rules) {
    if (!Array.isArray(rule.use)) continue

    for (const loader of rule.use) {
      if (loader.loader === cssLoader) {
        // Keep css-loader 3 defaults when using its PostCSS 8 replacement.
        loader.options = { ...loader.options, modules: false, esModule: false }
      }
    }
  }

  return config
}
