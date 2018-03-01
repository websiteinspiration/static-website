import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

// Local
import Nav from '../../shared/Nav'
import Container from '../../shared/Container'
import Button from '../../shared/Button'
import Companies, { CompaniesNote } from './Companies'
import BottomMask from './BottomMask'
import Mascot from './Mascot'

const MainHeader = () => (
  <Wrapper>
    <Nav />

    <Container narrow={true} style={{ position: 'relative' }}>
      <Title>Choose a Job You Love</Title>
      <Desc>
        Honeypot is Europe’s tech job platform for Software Developers, DevOps,
        Data Scientists, Product Owners, QA and Engineering Leaders.
      </Desc>
      <ButtonsWrapper>
        <Button white={true}>Find a Job</Button>
        <Button white={true} linkStyle={true} to="/employer">
          I'm hiring
        </Button>
      </ButtonsWrapper>
    </Container>

    <CompaniesWrapper>
      <Companies />
      <Container narrow={true}>
        <CompaniesNote />
      </Container>
    </CompaniesWrapper>

    <Container wide={true} style={{ position: 'relative' }}>
      <Mascot />
    </Container>

    <BottomMask />
  </Wrapper>
)

export default MainHeader

const Wrapper = styled.header`
  background-image: linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%);
  color: white;
  /* For making space for bottom mask */
  padding-bottom: 120px;
  position: relative;
  overflow: hidden;
`

const Title = styled.h1`
  max-width: 620px;
  margin: 80px 0 0 0;

  line-height: 1.1;
  font-size: ${p => p.theme.fontExtraBig}px;
  font-weight: 700;
  color: white;

  ${mobile(css`
    font-size: ${p => p.theme.fontBig}px;
  `)};
`

const Desc = styled.p`
  max-width: 590px;
  margin: 40px 0 0 0;

  line-height: ${p => p.theme.lineHeightBase};
  font-size: ${p => p.theme.fontSecondary}px;
  font-weight: 500;
  color: white;
`

const ButtonsWrapper = styled.div`
  margin-top: 45px;
  display: flex;
`

const CompaniesWrapper = styled.div`
  margin-top: 60px;
`
