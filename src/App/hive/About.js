import React from 'react'
import styled, { css } from 'styled-components'

// Local
import { Wrapper, LargeWrapper } from './Containers'
import SectionTitle from './SectionTitle'
import { mobile } from '../../utils/style/media'
import Paragraph from './Paragraph'

import bear from '../../static/images/honeypot-logo.png'

const About = () => (
  <StyledLargeWrapper>
    <Container id="about">
      <Wrapper>
        <StyledSectionTitle color="dark">About.</StyledSectionTitle>
        <Paragraph textColor="black" maxWidth="100%">
          Honeypot is Europe’s leading tech job platform, on a mission to build
          great engineering teams. On Honeypot, software developers state their
          job preferences upfront and companies apply directly to them. We
          believe everybody should choose a job they love: whether that’s based
          on a cutting-edge tech stack, an inspiring team or just good
          old-fashioned salary.
        </Paragraph>
      </Wrapper>
    </Container>
  </StyledLargeWrapper>
)

export default About

// Styles
const Container = styled.section``

const StyledSectionTitle = styled(SectionTitle)`
  text-align: left;
  ${mobile(css`
    text-align: center;
  `)};
`

const StyledLargeWrapper = styled(LargeWrapper)`
  background: url(${bear}) no-repeat right bottom;
  padding-bottom: 100px;

  ${mobile(css`
    background: url(${bear}) no-repeat center bottom;
    padding: 0; /* override wrapper padding on mobile as we nest two of them */
    padding-bottom: 135px;
  `)};
`

const Text = styled.div`
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.54px;
  line-height: 1.77;
  font-weight: bold;
  color: black;

  ${mobile(css`
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    font-weight: normal;
  `)};
`
