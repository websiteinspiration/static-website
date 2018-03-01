import React from 'react'
import styled from 'styled-components'

const Card = ({ title, text, renderIcon, ...props }) => (
  <Wrapper {...props}>
    <Title>
      {typeof renderIcon === 'function' ? <Icon>{renderIcon()}</Icon> : null}
      {title}
    </Title>
    <Text>{text}</Text>
  </Wrapper>
)

export default Card

const Wrapper = styled.article``

const Title = styled.h3`
  margin-bottom: 18px;
  padding-left: 3px;
  line-height: 1.8;
  font-size: ${p => p.theme.font16}px;
`

const Icon = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`

const Text = styled.p`
  margin-bottom: 0;
  line-height: 1.64;
  font-size: ${p => p.theme.fontBase}px;
  color: rgba(0, 0, 0, 0.5);
`
