import React from 'react'
import styled, { css } from 'styled-components'

// Local
import { Container, Wrapper } from './Containers'
import SectionTitle from './SectionTitle'
import MapPin from '../../vectors/MapPin'

// Photos
import locationBg from '../../static/images/venue.jpg'
import Paragraph from './Paragraph'

// Utils
import { mobile } from '../../utils/style/media'

const Location = () => (
  <StyledContainer id="locations">
    <Wrapper>
      <SectionTitle>Location.</SectionTitle>
      <Center>
        <Paragraph TextAlign="center">
          Join us at Festsaal Kreuzberg, one of Berlin’s coolest venues. Located
          close to the Spree in the heart of the city, Festsaal is the perfect
          location for intimate talks, interactive workshops and networking. The
          conference runs from 9am to 6pm.
        </Paragraph>
      </Center>
      <Center>
        <LocationDetails>
          <MapPin />
          <LocationName>Festsaal Kreuzberg, Berlin</LocationName>
        </LocationDetails>
      </Center>
    </Wrapper>
  </StyledContainer>
)

export default Location

const StyledContainer = styled(Container)`
  background: linear-gradient(
      -12deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${locationBg}) no-repeat center center;
  /* background-size: cover; */
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: relative;

  padding-bottom: 22px;

  ${mobile(css`
    padding-bottom: 40px;
  `)};
`

const Text = styled.p`
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.53px;
  text-align: center;
  line-height: 27px;
`

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`

const LocationDetails = styled.div`
  margin-top: 30px;
  width: 202px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LocationName = styled.span`
  color: #fff;
`
