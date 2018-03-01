import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

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

  ${mobile(css`
    display: none;
  `)};
`
