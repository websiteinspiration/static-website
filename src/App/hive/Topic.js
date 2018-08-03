import React from 'react'
import styled, { css } from 'styled-components'

const Topic = ({ maxWidth = 500, title, children, top = 30, ...props }) => (
  <Container maxWidth={maxWidth} top={top} {...props}>
    <Title>{title}</Title>
    <Desc>{children}</Desc>
  </Container>
)

export default Topic

const Container = styled.div`
  margin-top: ${p => p.top}px;
  max-width: ${p => p.maxWidth}px;
  text-align: center;

  ${p =>
    p.alignSelf
      ? css`
          align-self: ${p.alignSelf};
        `
      : css`
          align-self: center;
        `};
`

const Title = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.67px;
  text-align: center;
  line-height: 1.4;
  color: #ffffff;
  opacity: 0.87;
  padding-top: 0;
  margin-top: 0;
`

const Desc = styled.p`
  margin-top: 7px;
  font-family: ${p => p.theme.systemFont};
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.58px;
  text-align: center;
  line-height: 23px;
  margin-bottom: 7px;
`
