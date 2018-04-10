import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import Card from './Card'

const TalentSteps = props => (
  <Wrapper {...props}>
    <Container>
      <Title align="left">A Simple and Quick Sign Up Process!</Title>

      <CardsWrapper>
        <CardWrapper>
          <Card
            title="Create a Profile"
            text="It’s your chance to tell us what you want in your next role - and it takes less than 5 minutes!"
            topLineBackground="linear-gradient(-180deg, #95EDC9 0%, #5CD798 100%)"
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Join the Community"
            text="Pass our code screening and take an optional call with your Talent Rep, who positions you to receive the best offers!"
            topLineBackground="linear-gradient(-180deg, #FFEBB1 0%, #FEC829 100%)"
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Become Visible"
            text="Become visible on Honeypot so that companies can find your profile and make you offers with salary and tech stack up front."
            topLineBackground="linear-gradient(-180deg, #7CB9F1 0%, #418FD9 100%)"
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title="Get Hired!"
            text="Interview with companies that interest you! And choose the one you like the best!"
            topLineBackground="linear-gradient(-180deg, #F796BF 0%, #FF0A71 100%)"
          />
        </CardWrapper>
      </CardsWrapper>
    </Container>
  </Wrapper>
)

export default TalentSteps

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 20px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 50px;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 33%;
  margin-right: 25px;
  display: flex;
  align-items: stretch;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    margin-right: 0;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`
