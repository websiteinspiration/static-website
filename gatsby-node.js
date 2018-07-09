/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.modifyBabelrc = ({ babelrc }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat(['styled-components']),
// })

var fs = require('fs-extra')
var path = require('path')

exports.postBuild = (pages, callback) => {
  // Copy _redirects
  fs.copySync(
    path.join(__dirname, '/_redirects'),
    path.join(__dirname, '/public/_redirects')
  )

  // Next callback.
  callback()
}
