import React from 'react'
import styled from 'styled-components'
import RetinaImage from 'react-retina-image'

// Images
import mask from '../../static/graphics/curved-mask.png'
import retinaMask from '../../static/graphics/curved-mask@2x.png'

export default () => (
  <ImageWrapper>
    <RetinaImage src={[mask, retinaMask]} />
  </ImageWrapper>
)

const ImageWrapper = styled.div`
  width: ${p => p.theme.headerMaskWidth}px;
  position: absolute;
  bottom: 0;
  margin-left: -${p => p.theme.headerMaskWidth / 2}px;
  left: 50%;
  z-index: ${p => p.theme.maskZIndex};
  pointer-events: none;

  img {
    display: block;
    margin: 0;
  }

  @media (min-width: ${p => p.theme.headerMaskWidth}px) {
    width: 100%;
    left: 0;
    margin-left: 0;
  }
`
