import React from 'react'
import styled from 'styled-components'

// Local
import { Container, Wrapper } from './Containers'
import TicketButton from './Buttons/TicketButton'
import Topic from './Topic'

// Photos
import topicsBg from '../../static/images/topics-bg.png'

const Topics = () => (
  <StyledContainer>
    <Wrapper min="1100">
      <Title>Topics.</Title>
      <TopicList>
        <Topic title="Recruit the Best People" maxWidth={470}>
          Listen to CTOs, Engineering Leaders and HR Leaders who have built
          products and scaled teams through booms and busts. From onboarding and
          training to feedback, promotion and employee experience.
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
          Listen to CTOs, Engineering Leaders and HR Leaders <br />who have
          built products and scaled teams through<br /> booms and busts. From
          onboarding and training to feedback, promotion and employee
          experience.
        </Topic>
        <Topic
          title={
            <div>
              Optimize Your<br />Organizational Design
            </div>
          }
          alignSelf="flex-start"
          maxWidth={440}
        >
          How should HR and Tech work together to build the<br /> most effective
          processes to recruit and retain top<br /> engineering teams?
        </Topic>
        <Topic
          title={
            <div>
              Prepare your Engineering <br />Management Pipeline
            </div>
          }
          maxWidth={470}
        >
          Learn how to build an organization which rewards technical<br />
          contributors and those interested in management.
        </Topic>
      </TopicList>
      <ButtonWrapper>
        <TicketButton />
      </ButtonWrapper>
    </Wrapper>
  </StyledContainer>
)

export default Topics

const StyledContainer = styled(Container)`
  background: url(${topicsBg}) no-repeat right -200px,
    radial-gradient(50% 50%, #2b90f7 20%, #004d9b 100%) no-repeat 200px 200px;
  background-color: #004d9b;
  /* background-position: right top; */
`

const Title = styled.h1`
  margin-top: 46px;
  font-family: ${p => p.theme.systemFont};
  font-size: 38px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1.58px;
  text-align: center;
  line-height: 65px;
`

const TopicList = styled.div`
  margin-top: 30px;
  width: 860px;
  display: flex;
  flex-direction: column;
  color: #fff;
`

const ButtonWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
`
