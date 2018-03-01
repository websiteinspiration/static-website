import React from 'react'

// Local
import MainHeader from '../../shared/MainHeader'
import Button from '../../shared/Button'

const Header = () => (
  <MainHeader
    bg="linear-gradient(-170deg, #FF5A91 0%, #DB0F53 62%)"
    navTextColor="red"
    title="Build Your Tech Team."
    desc="Honeypot is Europe’s tech job platform for Software Developers, DevOps,
    Data Scientists, Product Owners, QA and Engineering Leaders."
    renderButtons={() => [
      <Button key={1} white={true} href="#plans" textColor="red">
        Our plans
      </Button>,
      <Button key={2} white={true} linkStyle={true} to="/">
        Find a job
      </Button>,
    ]}
  />
)

export default Header
