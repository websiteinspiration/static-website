import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import Button from '../../../shared/Button'
import Card from './Card'

// Icons
import PersonLine from '../../../shared/vectors/PersonLine'
import ToolLine from '../../../shared/vectors/ToolLine'
import PinLine from '../../../shared/vectors/PinLine'

const TalentBenefits = props => (
  <Wrapper {...props}>
    <Container>
      <Title>Create a Profile and Let Companies Apply to You</Title>

      <CardsWrapper>
        <CardWrapper>
          <Card
            title="Join an Engineering Team in Your Ideal Role"
            text="On Honeypot, over 1000 companies are hiring Software Developers, DevOps Engineers, Data Scientists, Product Owners, QA Testers and Engineering Leaders just like you!"
            renderIcon={() => <PersonLine />}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Work with a Tech Stack You Love"
            text="Whether it’s Ruby, Scala, JavaScript or anything else, on Honeypot you only get offers from companies for your preferred tech stack and desired salary."
            renderIcon={() => <ToolLine />}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Choose the Locations that Suit You"
            text="Honeypot operates in Europe’s most exciting tech cities, across Germany, the Netherlands. Set your location preference and companies apply to you!"
            renderIcon={() => <PinLine />}
          />
        </CardWrapper>
      </CardsWrapper>

      <ButtonWrapper>
        <Button
          href="https://www.honeypot.io/users/sign_up"
          style={{ paddingRight: 58, paddingLeft: 58 }}
        >
          Join
        </Button>
      </ButtonWrapper>
    </Container>
  </Wrapper>
)

export default TalentBenefits

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 45px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 33%;
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    margin-right: 0;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

const ButtonWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`
