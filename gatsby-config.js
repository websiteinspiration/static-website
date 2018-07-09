/* global module */
module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'any',
      },
    },
    {
      resolve: 'gatsby-plugin-copy',
      options: {
        verbose: true, // outputs a message for each file copied
        _redirects: 'public/_redirects', // Add one entry per file to copy
      },
    },
    'gatsby-plugin-styled-components',
  ],
}
