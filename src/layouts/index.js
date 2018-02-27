import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const MainLayout = ({ children }) => (
  <div>
    <Helmet
      title="Honeypot"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    {children()}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout
