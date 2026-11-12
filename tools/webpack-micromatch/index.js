const isGlob = require('is-glob')
const micromatch = require('micromatch-v4')

const compatible = (...args) => micromatch(...args)
Object.assign(compatible, micromatch)

compatible.isMatch = (file, pattern, options) => {
  const normalizedFile = options && options.stripPrefix === false ? file : file.replace(/^\.\//, '')
  // Webpack 4 only matches basenames for glob patterns without a slash.
  if (options && options.matchBase && (pattern.includes('/') || !isGlob(pattern))) {
    return micromatch.isMatch(normalizedFile, pattern, { ...options, matchBase: false })
  }

  return micromatch.isMatch(normalizedFile, pattern, options)
}

module.exports = compatible
