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
import avatar4 from '../../static/images/daniel-krauss.png'
import avatar5 from '../../static/images/margaux-pelen.png'
import avatar6 from '../../static/images/sergej-zimpel.png'
import avatar7 from '../../static/images/martina-niemann.jpg'
import avatar8 from '../../static/images/nico-brautigam.png'
import avatar9 from '../../static/images/jan-werth.jpg'
import avatar10 from '../../static/images/jose-arteaga.png'
import avatar11 from '../../static/images/teddy-dimitrova.jpg'
import avatar12 from '../../static/images/amir-friedman.jpg'
import avatar13 from '../../static/images/antonio-arias.png'
import avatar14 from '../../static/images/aleksandra-gavrilovska.png'

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
              Adobe)
            </Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar3} />
            </Avatar>
            <Name>Mark Levy</Name>
            <Info>Former Airbnb Employee Experience Pioneer.</Info>
          </SpeakersItem>
        </SpeakersContainer>

        <SpeakersContainer>
          <SpeakersItem>
            <Avatar>
              <img src={avatar4} />
            </Avatar>
            <Name>Daniel Krauss</Name>
            <Info>CIO and Co-Founder @ FlixBus.</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar5} />
            </Avatar>
            <Name>Margaux Pelen</Name>
            <Info>Founder @ The Learning Studio</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar6} />
            </Avatar>
            <Name>Sergej Zimpel</Name>
            <Info>Senior Recruiter @ ProSiebenSat.1 Media SE</Info>
          </SpeakersItem>
        </SpeakersContainer>

        <SpeakersContainer>
          <SpeakersItem>
            <Avatar>
              <img src={avatar7} />
            </Avatar>
            <Name>Martina Niemann</Name>
            <Info>Vice President HR Management @ Lufthansa</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar8} />
            </Avatar>
            <Name>Nico Bräutigam</Name>
            <Info>Tech Talent Acquisition Specialist @ Tipico</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar9} />
            </Avatar>
            <Name>Jan Werth</Name>
            <Info>IT Recruiter @ MYTOYS Group</Info>
          </SpeakersItem>
        </SpeakersContainer>

        <SpeakersContainer>
          <SpeakersItem>
            <Avatar>
              <img src={avatar10} />
            </Avatar>
            <Name>Jose Arteaga</Name>
            <Info>Tech Talent Acquisition Specialist @ Tipico</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar11} />
            </Avatar>
            <Name>Teddy Dimitrova</Name>
            <Info>Tech Talent Manager @ Bloomon</Info>
          </SpeakersItem>
          <SpeakersItem>
            <Avatar>
              <img src={avatar12} />
            </Avatar>
            <Name>Amir Friedman</Name>
            <Info>VP Engineering @ kloeckner.i</Info>
          </SpeakersItem>
        </SpeakersContainer>

        <SpeakersContainer>
          <Center>
            <SpeakersItem>
              <Avatar>
                <img src={avatar13} />
              </Avatar>
              <Name>Antonio Arias Lopez</Name>
              <Info>Talent Acquisition Lead @ Tipico</Info>
            </SpeakersItem>
            <SpeakersItem>
              <Avatar>
                <img src={avatar14} />
              </Avatar>
              <Name>Aleksandra Gavrilovska</Name>
              <Info>Engineering Manager @ SoundCloud, Director at Women Who Code
                Berlin</Info>
            </SpeakersItem>
          </Center>
        </SpeakersContainer>

        { /*<Text>… and many more to be announced.</Text>*/ }
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
    width: 170px;
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

  ${mobile(css`
    width: 170px;
    height: 170px;
  `)};
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

  ${mobile(css`
    margin-top: 14px;
  `)};
`

const Info = styled.div`
  margin-top: 8px;
  font-family: ${p => p.theme.systemFont};
  font-size: 14px;
  color: #000000;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 19px;
`

{/*
const Text = styled.div`
  margin-top: 30px;
  font-family: ${p => p.theme.systemFont};
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.53px;
  text-align: center;
  line-height: 27px;
`
*/}

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
