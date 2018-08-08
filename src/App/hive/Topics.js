import React from 'react'
import styled from 'styled-components'

// Local
import { Container, LargeWrapper } from './Containers'
import SectionTitle from './SectionTitle'
import TicketButton from './Buttons/TicketButton'
import Topic from './Topic'

// Photos
import topicsBg from '../../static/images/topics-bg.png'

const Topics = () => (
  <StyledContainer id="topics">
    <LargeWrapper>
      <SectionTitle>Topics.</SectionTitle>
      <TopicList>
        <Topic title="Recruit the Best People" maxWidth={470}>
          Through keynote speeches, lightning talks and interactive workshops,
          learn how to go from your first tech hire to making hundreds of hires
          a year. Topics include talent analytics, candidate experience and
          employer branding.
        </Topic>
        <Topic
          title={
            <div>
              Scale Your<br />Engineering Team
            </div>
          }
          alignSelf="flex-end"
          maxWidth={440}
        >
          Listen to CTOs, Engineering Leaders and HR Leaders who have built
          products and scaled teams through booms and busts. From onboarding and
          training to feedback, promotion and employee experience.
        </Topic>

        <Topic
          title={
            <div>
              Optimize Your<br />Organizational Design
            </div>
          }
          alignSelf="flex-start"
          maxWidth={440}
          top={-10}
        >
          How should HR and Tech work together to build the most effective
          processes to recruit and retain top engineering teams?
        </Topic>

        <Topic
          title={
            <div>
              Prepare your Engineering <br />Management Pipeline
            </div>
          }
          maxWidth={470}
          top={15}
        >
          Learn how to build an organization which rewards technical
          contributors and those interested in management.
        </Topic>
      </TopicList>
      <ButtonWrapper>
        <TicketButton />
      </ButtonWrapper>
    </LargeWrapper>
  </StyledContainer>
)

export default Topics

const StyledContainer = styled(Container)`
  background: url(${topicsBg}) no-repeat right -200px,
    radial-gradient(50% 50%, #2b90f7 20%, #004d9b 100%) no-repeat 200px 200px;
  background-color: #004d9b;
  /* background-position: right top; */
`

const TopicList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  color: #fff;
`

const ButtonWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
`
