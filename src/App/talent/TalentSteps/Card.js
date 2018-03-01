import React from 'react'
import styled from 'styled-components'

const Card = ({ title, text, topLineBackground, ...props }) => (
  <Wrapper {...props} topLineBackground={topLineBackground}>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Wrapper>
)

export default Card

const Wrapper = styled.article`
  position: relative;
  padding: 32px 10px 25px 18px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  background: white;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background: ${p => p.topLineBackground || p.theme.primary};
  }
`

const Title = styled.h3`
  margin-bottom: 15px;
  padding-left: 3px;
  line-height: 1.8;
  font-size: ${p => p.theme.font16}px;
  color: ${p => p.theme.grayText};
`

const Text = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.75;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`
