import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'

// Utilities
import theme from '../utils/style/theme'

// Styles
import 'normalize.css/normalize.css'

// Images
import favicon from '../static/favicon.ico'

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      {children()}
    </div>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout

// Global styles
injectGlobal`
  html,
  body {
    padding: 0;
    margin: 0;
  }
`
