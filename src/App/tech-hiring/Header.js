import React from 'react'

// Local
import MainHeader from '../../shared/MainHeader'
import Button from '../../shared/Button'

const Header = () => (
  <MainHeader
    bg="linear-gradient(-170deg, #FF5A91 0%, #DB0F53 62%)"
    navTextColor="#EE1B6F"
    title="Build Your Tech Team."
    desc="Honeypot is the easiest way to hire Software Developers, DevOps Engineers, Data Scientists, Product Owners, QA Testers and Engineering Leaders."
    renderButtons={() => [
      <Button key={1} white={true} href="#plans" textColor="#EE1B6F">
        Start Hiring!
      </Button>,
      <Button key={2} white={true} linkStyle={true} to="/">
        I’m Looking for a Job!
      </Button>,
    ]}
  />
)

export default Header
