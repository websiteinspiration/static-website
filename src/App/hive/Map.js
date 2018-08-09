import React from 'react'
import styled from 'styled-components'

// Local
import { Container } from './Containers'

const Map = () => (
  <StyledContainer id="map">
    <StyledIframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9716.118371794813!2d13.4515843!3d52.4967039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc26594a9f6726b2e!2sFestsaal+Kreuzberg!5e0!3m2!1sen!2s!4v1533318256540"
      width="auto"
      height="auto"
      frameBorder="0"
      allowFullScreen
    />
  </StyledContainer>
)

export default Map

const StyledContainer = styled(Container)`
  position: relative;
  background: rgba(0, 0, 0, 0.15);

  .place-card {
    display: none;
  }
`

const StyledIframe = styled.iframe`
  display: block;
  margin: 0;
  border: none;
  width: 100%;
  height: 290px;
`
