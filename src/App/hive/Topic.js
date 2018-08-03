import React from 'react'
import styled, { css } from 'styled-components'

const Topic = ({ maxWidth = 500, title, children, ...props }) => (
  <Container maxWidth={maxWidth} {...props}>
    <Title>{title}</Title>
    <Desc>{children}</Desc>
  </Container>
)

export default Topic

const Container = styled.div`
  margin-top: 30px;
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
  opacity: 0.87;
  font-family: ${p => p.theme.systemFont};
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.67px;
  text-align: center;
  font-weight: 400;
  line-height: 1.4;
`

const Desc = styled.p`
  margin-top: 7px;
  font-family: ${p => p.theme.systemFont};
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.58px;
  text-align: center;
  line-height: 23px;
`
