import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

class Seo extends Component {
  static propTypes = {
    pageTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const { pageTitle, description } = this.props

    return (
      <Helmet>
        <title>{pageTitle} | Honeypot</title>
        <meta name="description" content={description} />
      </Helmet>
    )
  }
}

export default Seo
