import React from 'react'
import styled from 'styled-components'

// Local
import Nav from './Nav'
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
        <GetTicketButton href="#">Get Tickets</GetTicketButton>
      </Main>
    </Wrapper>
  </HeaderContainer>
)

export default Header

// Styles
const HeaderContainer = styled.header`
  width: 100%;
  min-height: 542px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  /* bg */
  background: url(${photoBg1}) no-repeat right 100px,
    url(${photoBg2}) no-repeat right 119px bottom,
    linear-gradient(36deg, #6fb6fe 0%, #2d91f7 100%);
`

const Wrapper = styled.div`
  max-width: 860px;
  min-height: 10px;
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

const GetTicketButton = styled.a`
  display: block;
  width: 131px;
  height: 36px;
  line-height: 36px;
  margin-top: 26px;

  background: #f6c724;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  font-family: 'halevatica';
  font-size: 13px;
  text-align: center;
  color: #0066ce;
  letter-spacing: 0.43px;
`
