import React from 'react'
import styled from 'styled-components'

// Local
import { Container, Wrapper } from './Containers'
import Nav from './Nav'
import TicketButton from './Buttons/TicketButton'
import photoBg1 from '../../static/images/hive-logo.png'
import photoBg2 from '../../static/images/honeypot-logo.png'

const Header = () => (
  <HeaderContainer>
    <Wrapper>
      <Nav />
      <Main>
        <PreTitle>Hive Conference by Honeypot</PreTitle>
        <Title>Hire. Scale. Develop.</Title>
        <SubTitle>
          Learn how to build Engineering Organizations from the world’s top
          Talent Acquisition, HR and Engineering Leaders.
        </SubTitle>
        <TicketButton />
      </Main>
    </Wrapper>
  </HeaderContainer>
)

export default Header

// Styles
const HeaderContainer = styled(Container)`
  min-height: 542px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  background: url(${photoBg1}) no-repeat right 100px,
    url(${photoBg2}) no-repeat right 119px bottom,
    linear-gradient(36deg, #6fb6fe 0%, #2d91f7 100%);
`

const Main = styled.div`
  margin-top: 109px;
`

const PreTitle = styled.h2`
  opacity: 0.87;
  font-family: Courier;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.47px;
  text-shadow: 0 0 8px #1779dd;
`

const Title = styled.div`
  font-family: .SFNSDisplay;
  font-size: 62px;
  color: #ffffff;
  letter-spacing: 2.06px;
  line-height: 65px;
`

const SubTitle = styled.div`
  margin-top: 26px;
  font-family: Helvetica;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.53px;
  line-height: 27px;
`
