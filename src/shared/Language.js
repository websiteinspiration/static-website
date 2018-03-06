import React from 'react'
import { getCurrentLangKey } from 'ptz-i18n'

// Config
import siteConfig from '../../config/SiteConfig'

export default class Language extends React.Component {
  render() {
    const { children } = this.props
    const { langs, defaultLangKey } = siteConfig
    const pathname =
      typeof window !== 'undefined' ? window.location.pathname : ''

    // Get current active language key
    const currentLangKey = getCurrentLangKey(langs, defaultLangKey, pathname)

    // Render children and pass down properties
    return typeof children === 'function' ? children(currentLangKey) : null
  }
}
