import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { desktop, mobile } from '../../utils/style/media'

// Local
import Container from '../../shared/Container'
import Row from './Row'
import Button from '../../shared/Button'

// Images
import bg from '../../static/graphics/curved-bg-lightblue.svg'
import photo1 from '../../static/images/rokas-niparavicius.jpg'
import photo2 from '../../static/images/tanja-heffner.jpg'
import photo3 from '../../static/images/janko-ferlic.jpg'

const FeatureAndQuotes = props => (
  <Wrapper {...props}>
    <Container>
      <RowWrapper>
        <Row
          textsFlexAlign="flex-end"
          title="Free Career Support and Guidance"
          desc="Your Talent Rep will guide you through from start to finish, providing guidance on resume and interviews, helping you benchmark your salary, evaluate offers and find a job you love"
          quote="Two weeks from starting my profile for getting a job offer and low-stress weeks at that Pretty Amazing!"
          quotee="Name Surname"
          photoUrl={photo1}
        />
      </RowWrapper>
      <RowWrapper>
        <Row
          reverse={true}
          title="Top Jobs for Top Developers"
          desc="Be part of the top 10% of developers and connect with Europe’s top tech companies."
          quote="After only two weeks I received 12 interview invites from a great selection of companies."
          quotee="Name Surname"
          photoUrl={photo2}
        />
      </RowWrapper>
      <RowWrapper>
        <Row
          title="Know your Worth!"
          desc="Companies apply directly to you so you can compare offers side by side. No more job applications or clumsy back and forths with headhunters. "
          quote="Honeypot helped me find my dream job in my dream country"
          quotee="Name Surname"
          photoUrl={photo3}
        />
      </RowWrapper>

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

export default FeatureAndQuotes

const Wrapper = styled.section`
  background-image: url(${bg});
  background-size: auto auto;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 50px;
  padding-bottom: 50px;

  ${desktop(css`
    background-size: auto 100%;
  `)};

  ${mobile(css`
    background-size: auto 100%;
  `)};
`

const RowWrapper = styled.div`
  margin-bottom: 80px;
`

const ButtonWrapper = styled.div`
  margin-top: 80px;
  text-align: center;
`
