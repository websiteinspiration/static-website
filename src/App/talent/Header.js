import React from 'react'

// Utilities
import theme from '../../utils/style/theme'

// Local
import MainHeader from '../../shared/MainHeader'
import Button from '../../shared/Button'

class Header extends React.Component {
  state = { primaryHovered: false }

  render() {
    const { primaryHovered } = this.state

    return (
      <MainHeader
        bg="linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%)"
        navTextColor={theme.blue}
        title="Choose a Job You Love"
        desc="Honeypot is Europe’s tech job platform for Software Developers, DevOps Engineers, Data Scientists, Product Owners, QA Testers, Engineering Leaders and CTOs."
        mascotProps={{ happy: primaryHovered }}
        renderButtons={() => [
          <Button
            key={1}
            white={true}
            href="https://www.honeypot.io/users/sign_up"
            onMouseOver={this.mouseEntered}
            onMouseOut={this.mouseLeaved}
          >
            Find me a Job!
          </Button>,
          <Button key={2} white={true} linkStyle={true} to="/tech-hiring">
            I'm Hiring!
          </Button>,
        ]}
      />
    )
  }

  mouseEntered = () => this.setState({ primaryHovered: true })
  mouseLeaved = () => this.setState({ primaryHovered: false })
}

export default Header
