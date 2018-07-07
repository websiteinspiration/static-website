import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import Card from './Card'

// Icons
import CheckCircle from '../../../vectors/CheckCircle'
import BubbleLine from '../../../vectors/BubbleLine'
import VisaLine from '../../../vectors/VisaLine'
import CogLine from '../../../vectors/CogLine'

const Benefits = props => (
  <Wrapper {...props}>
    <Container>
      <Title>Create a Profile and Let Companies Apply to You!</Title>

      <CardsWrapper>
        <CardWrapper>
          <Card
            title="Access the Top 10% of Tech Candidates on the Market"
            text="Our candidates are prescreened through a video call and a technical assessment. You only pay when you hire. And for growing teams we offer competitive pricing!"
            renderIcon={() => <CogLine />}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Hire Quicker"
            text="With 95% response rates, you can fill your pipeline and build your team quicker than other channels. 80% of companies hire within 4 weeks."
            renderIcon={() => <CheckCircle />}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Free Visa Support"
            text="70% of Honeypot talents are European, but if you do hire somebody from outside the EU, we offer full visa support for free!"
            renderIcon={() => <VisaLine />}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Tech Recruitment Education"
            text="Your Customer Success Manager will guide you through the hiring process, provide active support and help you benchmark your salaries and processes."
            renderIcon={() => <BubbleLine />}
          />
        </CardWrapper>
      </CardsWrapper>
    </Container>
  </Wrapper>
)

export default Benefits

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 45%;
  margin-right: 70px;
  margin-bottom: 40px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    margin-right: 0;

    &:nth-last-child(2) {
      margin-bottom: 40px;
    }
  `)};
`
