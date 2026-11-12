const preserveCssLoaderDefaults = require('./css-loader-defaults')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  managerWebpack: preserveCssLoaderDefaults
}
