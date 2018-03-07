import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

// Images
import mascot from '../../static/mascot.svg'
import mascotHappy from '../../static/mascot-happy.svg'

export default ({ happy, ...props }) => (
  <ImageWrapper {...props}>
    <FloatingImg src={mascotHappy} isVisible={happy} />
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

const FloatingImg = styled.img`
  position: absolute;
  opacity: ${p => (p.isVisible ? 1 : 0)};
  transition: opacity 150ms ease;
`
