import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { I18nextProvider } from 'react-i18next'

// Utilities
import theme from '../utils/style/theme'
import i18n from '../utils/i18n'

// Local
import Language from '../shared/Language'
import CookieBanner from '../shared/CookieBanner'

// Styles
import 'normalize.css/normalize.css'

// Images
import favicon from '../static/favicon.ico'

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Language>
      {langKey => (
        <I18nextProvider i18n={i18n} initialLanguage={langKey}>
          <div>
            <Helmet>
              <meta charSet="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

              <link rel="shortcut icon" href={favicon} />
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />

              {/* TypeKit */}
              <script src="https://use.typekit.net/fkv8pfd.js" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `try{Typekit.load({ async: true });}catch(e){}`,
                }}
              />
            </Helmet>

            {children()}

            <CookieBanner />
          </div>
        </I18nextProvider>
      )}
    </Language>
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
