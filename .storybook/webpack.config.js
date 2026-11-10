const webpack = require('webpack')

module.exports = ({ config: storybookBaseConfig }) => {
  // Return the altered config
  return {
    ...storybookBaseConfig,
    plugins: [
      ...storybookBaseConfig.plugins,
      new webpack.LoaderOptionsPlugin({
        debug: true
      })
    ],
    module: {
      ...storybookBaseConfig.module,
      rules: [
        ...storybookBaseConfig.module.rules,
        {
          test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(blob)/,
          loader: 'file-loader'
        },
        {
          // Faker 10 is ESM and uses syntax Webpack 4 cannot parse.
          test: /\.js$/,
          include: /node_modules\/@faker-js\/faker/,
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            presets: [['@babel/preset-env', { modules: false, targets: { chrome: '63' } }]]
          }
        }
      ]
    }
  }
}
