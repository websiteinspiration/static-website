import React from 'react'
import styled from 'styled-components'

// Images
import mascot from '../../static/mascot.svg'

export default () => (
  <ImageWrapper>
    <img src={mascot} />
  </ImageWrapper>
)

const ImageWrapper = styled.div`
  position: absolute;
  bottom: -150px;
  right: -150px;
  z-index: ${p => p.theme.mascotZIndex};

  img {
    display: block;
    margin: 0;
  }
`
