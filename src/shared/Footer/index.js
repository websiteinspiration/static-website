import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

// Local
import Container from '../../shared/Container'

// Images
import logo from '../../static/honeypot-white-logo.svg'

const Footer = props => (
  <Wrapper {...props}>
    <Container wide={true}>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Honeypot logo" />
        </Link>
      </Logo>
    </Container>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  padding: 25px 0;
  background-image: linear-gradient(-175deg, #007bc2 10%, #0062bf 180%);
`

const Logo = styled.div`
  height: ${p => p.theme.logoHeight}px;
`
