import React from 'react'
import styled, { css } from 'styled-components'

// Local
import { Container, Wrapper } from './Containers'
import TicketButton from './Buttons/TicketButton'
import SectionTitle from './SectionTitle'

// Speakers photos
import avatar1 from '../../static/images/jeri-doris.jpg'
import avatar2 from '../../static/images/kevin-goldsmith.jpg'
import avatar3 from '../../static/images/mark-levy.jpg'

// Utils
import { mobile } from '../../utils/style/media'

const Speakers = () => (
  <SectionWrapper id="speakers">
    <Container>
      <Wrapper>
        <SectionTitle color="dark">Speakers.</SectionTitle>
        <SpeakersContainer>
          <SpeakersItem>
            <Avatar>
              <img src={avatar1} />
            </Avatar>
            <Name>Jeri Doris</Name>
            <Info>Chief People Officer @ Delivery Hero.</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar2} />
            </Avatar>

            <Name>Kevin Goldsmith</Name>
            <Info>
              VPE @ AstrumU (Former CTO @ Avvo, Former VPE @ Spotify, DoE @
              Adobe
            </Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar3} />
            </Avatar>
            <Name>Mark Levy</Name>
            <Info>Former AirBnb Employee Experience Pioneer.</Info>
          </SpeakersItem>
        </SpeakersContainer>
        <Text>… and many more to be announced.</Text>
        <Center>
          <TicketButton color="blue" />
        </Center>
      </Wrapper>
    </Container>
  </SectionWrapper>
)

export default Speakers

// Styles
const SectionWrapper = styled.div`
  padding-bottom: 50px;
`

const SpeakersContainer = styled.div`
  max-width: 590px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
  `)};
`

const SpeakersItem = styled.div`
  width: 140px;
  margin-right: 85px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    margin-right: 0;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

const Avatar = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background: #d8d8d8;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

const Name = styled.div`
  margin-top: 22px;
  opacity: 0.87;
  font-family: ${p => p.theme.systemFont};
  font-size: 15px;
  color: #2c91f7;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 26px;
`

const Info = styled.div`
  margin-top: 12px;
  font-family: ${p => p.theme.systemFont};
  font-size: 14px;
  color: #000000;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 19px;
`

const Text = styled.div`
  margin-top: 30px;
  font-family: ${p => p.theme.systemFont};
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.53px;
  text-align: center;
  line-height: 27px;
`

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
