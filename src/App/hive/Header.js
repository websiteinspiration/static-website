import React from 'react'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Local
import { Container, Wrapper } from './Containers'
import Nav from './Nav'
import TicketButton from './Buttons/TicketButton'
import photoBg1 from '../../static/images/hive-logo.png'
import photoBg2 from '../../static/images/honeypot-logo.png'
import MapPin from '../../vectors/MapPin'

// Utils
import { mobile } from '../../utils/style/media'

const Header = () => (
  <HeaderContainer>
    <Nav />
    <Wrapper>
      <Main>
        <PreTitle>Hive Conference by Honeypot</PreTitle>
        <Title>Hire. Scale. Develop.</Title>
        <SubTitle>
          A one-day conference for HR Leaders, Technical Hiring Managers, CTOs
          and VPs of Engineering focused on all aspects of building and scaling
          great engineering teams.
        </SubTitle>
        <SubTitle>
          <AnchorLink href="#map">
            <MapPin /> &nbsp; Festsaal Kreuzberg, Berlin, October 18th, 2018
          </AnchorLink>
        </SubTitle>
        <Space size="20" />
        <TicketButton />
      </Main>
    </Wrapper>
  </HeaderContainer>
)

export default Header

// Styles
const HeaderContainer = styled(Container)`
  --mascot-bg: url(${photoBg2}) no-repeat right 119px bottom;

  min-height: 542px;
  padding-bottom: 40px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  background: var(--mascot-bg), url(${photoBg1}) no-repeat right 120px,
    linear-gradient(36deg, #6fb6fe 0%, #2d91f7 100%);

  ${mobile(css`
    background: url(${photoBg1}) no-repeat right 100px,
      linear-gradient(36deg, #6fb6fe 0%, #2d91f7 100%);
  `)};
`

const Main = styled.header`
  margin-top: 109px;

  ${mobile(css`
    margin-top: 45px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `)};
`

const PreTitle = styled.h2`
  opacity: 0.87;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.47px;
  text-shadow: 0 0 8px #1779dd;
  margin-bottom: 26px;

  ${p =>
    p.light &&
    css`
      font-weight: lighter;
    `};

  ${mobile(css`
    font-size: 20px;
    line-height: 1.4;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 45px;
    opacity: 1;
  `)};
`

const Title = styled.h1`
  font-size: 62px;
  font-weight: 300;
  color: white;
  letter-spacing: 2.06px;
  line-height: 1.33;
  margin: 0;
`

const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 16px;
  letter-spacing: 0.53px;
  line-height: 27px;
  max-width: 540px;
  margin-top: 25px;
  color: white;

  > a {
    color: white;
    text-decoration: none;
  }

  ${mobile(css`
    margin-top: 38px;
    padding: 0 25px;
  `)};
`

const Space = styled.div`
  height: ${p => p.size}px;
`
