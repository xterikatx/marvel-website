var babelConfig = require('./babel.config')

module.exports = require('babel-jest').default.createTransformer(babelConfig)