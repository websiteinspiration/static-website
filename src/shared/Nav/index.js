import React from 'react'

// Utilities
import theme from '../../utils/style/theme'
import { mobileMediaString } from '../../utils/style/media'

// Local
import Nav from './Nav'

export default class StickyNav extends React.Component {
  mediaIntervalId = null
  state = { sticky: false, isMobile: true }

  render() {
    const { isMobile, sticky } = this.state
    return <Nav sticky={!isMobile && sticky} {...this.props} />
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolled)
    this.mediaIntervalId = window.setInterval(() => this.checkMedia(), 1000)
    this.checkMedia()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolled)
    clearInterval(this.mediaIntervalId)
  }

  scrolled = () => {
    if (this.state.isMobile) {
      return
    }

    const windowsScrollTop = window.pageYOffset
    const threshold = theme.navHeight + 40

    if (windowsScrollTop >= threshold && this.state.sticky === false) {
      this.setState(() => ({ sticky: true }))
    } else if (windowsScrollTop < threshold && this.state.sticky === true) {
      this.setState(() => ({ sticky: false }))
    }
  }

  checkMedia = () => {
    const isMobile = window.matchMedia(mobileMediaString).matches
    if (isMobile && this.state.isMobile === false) {
      this.setState({ isMobile: true })
    } else if (!isMobile && this.state.isMobile === true) {
      this.setState({ isMobile: false })
    }
  }
}
