import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import MediaQuery from 'react-responsive'

// Utilities
import { mobileMediaString, mobile } from '../../utils/style/media'

// Local
import Title from '../../shared/Section/Title'
import Container from './Container'

// Images
import bg from '../../static/images/women-in-tech.jpg'
import mask from '../../static/graphics/curved-mask-flat.svg'
import logo from '../../static/honeypot-white-logo.svg'

const Header = props => (
  <Wrapper {...props}>
    <Container wide={true}>
      <LogoWrapper>
        <a href="https://honeypot.io" title="Tech Jobs in Europe - Honeypot">
          <img src={logo} alt="Honeypot" />
        </a>
      </LogoWrapper>
    </Container>

    <Container>
      <TitleWrapper>
        <MediaQuery query={mobileMediaString}>
          {matches => (
            <Title
              styleType="light"
              align="left"
              style={matches ? mobileTitleStyles : titleStyles}
            >
              {props.title}
            </Title>
          )}
        </MediaQuery>
      </TitleWrapper>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header

const Wrapper = styled.header`
  min-height: 400px;
  padding-top: 30px;
  margin-bottom: 30px;
  background: bottom center no-repeat / auto auto url(${mask}),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.37) 100%),
    top 20% center no-repeat / cover url(${bg});

  ${mobile(css`
    min-height: 260px;
    background: top 20% center no-repeat / cover url(${bg});
    margin-bottom: 50px;
  `)};
`

const LogoWrapper = styled.div``

const TitleWrapper = styled.div`
  margin-top: 35px;

  ${mobile(css`
    margin-top: 10px;
  `)};
`

const titleStyles = {
  fontSize: 65,
  fontWeight: 600,
  lineHeight: 1.1,
  maxWidth: 590,
}

const mobileTitleStyles = {
  fontSize: 40,
  fontWeight: 600,
  lineHeight: 1.1,
  maxWidth: 'auto',
}
