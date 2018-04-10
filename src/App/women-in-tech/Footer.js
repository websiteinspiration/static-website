import React from 'react'
import styled from 'styled-components'

// Local
import Container from './Container'

// Images
import bg from '../../static/images/women-in-tech.jpg'
import logo from '../../static/honeypot-white-logo.svg'

const Footer = props => (
  <Wrapper {...props}>
    <Container wide={true}>
      <LogoWrapper>
        <img src={logo} />
      </LogoWrapper>
    </Container>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  margin-top: 100px;
  padding-top: 40px;
  padding-bottom: 90px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${bg});
  background-repeat: repeat, no-repeat;
  background-position: center, bottom center;
  background-size: auto, cover;
`

const LogoWrapper = styled.div``
