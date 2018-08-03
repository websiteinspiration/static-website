import React from 'react'
import styled, { css } from 'styled-components'

// Local
import { Container, Wrapper } from './Containers'
import Nav from './Nav'
import TicketButton from './Buttons/TicketButton'
import photoBg1 from '../../static/images/hive-logo.png'
import photoBg2 from '../../static/images/honeypot-logo.png'

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
  --mascot-bg: url(${photoBg2}) no-repeat right 119px bottom;

  min-height: 542px;
  padding-bottom: 40px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  background: url(${photoBg1}) no-repeat right 100px, var(--mascot-bg),
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
  font-family: Courier, monospace;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.47px;
  text-shadow: 0 0 8px #1779dd;
  margin-bottom: 26px;

  ${mobile(css`
    font-size: 20px;
    font-family: Montserrat;
    font-weight: bold;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.53px;
  line-height: 27px;
  max-width: 540px;
  margin-top: 25px;

  ${mobile(css`
    margin-top: 38px;
    padding: 0 25px;
  `)};
`
