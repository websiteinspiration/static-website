import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile, desktop, notMobile } from '../../utils/style/media'

const Row = ({
  title,
  desc,
  quote,
  quotee,
  photoUrl,
  reverse,
  textsFlexAlign = 'center',
  ...props
}) => (
  <Wrapper {...props} reverse={reverse}>
    <QuoteBox photoUrl={photoUrl}>
      <QuoteText>“{quote}”</QuoteText>
      <Quotee>{quotee}</Quotee>
    </QuoteBox>

    <Texts reverse={reverse} flexAlign={textsFlexAlign}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Texts>
  </Wrapper>
)

export default Row

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const QuoteBox = styled.blockquote`
  flex: 0 0 auto;
  width: 365px;
  height: 315px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 22px 55px 32px 42px;
  box-sizing: border-box;
  margin: 0;

  box-shadow: 0 2px 10px 0 rgba(3, 54, 96, 0.15);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    center / cover no-repeat url(${p => p.photoUrl});

  ${mobile(css`
    max-width: 100%;
  `)};
`

const QuoteText = styled.p`
  margin: 0;
  color: white;
  font-size: ${p => p.theme.font20}px;
  font-weight: bold;
  line-height: 1.64;
`

const Quotee = styled.div`
  margin-top: 18px;
  padding-left: 5px;
  font-size: ${p => p.theme.font16}px;
  color: rgba(255, 255, 255, 0.7);
`

const Texts = styled.div`
  flex: 1 0 auto;
  margin-top: 50px;

  ${notMobile(css`
    padding: ${p => (p.reverse ? `0 0 0 70px` : `0 70px 0 0`)};
    margin: ${p => (p.reverse ? `0 110px 0 0` : `0 0 0 110px`)};
    order: ${p => (p.reverse ? `-1` : `1`)};
    align-self: ${p => p.flexAlign};
  `)};
`

const Title = styled.h3`
  position: relative;
  padding-bottom: 18px;
  margin: 0 0 30px 0;

  font-size: ${p => p.theme.font18}px;
  font-weight: bold;
  color: black;

  &:after {
    --width: 30px;
    content: '';
    width: var(--width);
    height: 3px;
    border-radius: 5px;
    background: ${p => p.theme.primary};
    /* center */
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Desc = styled.p`
  max-width: 253px;
  font-size: ${p => p.theme.fontBase}px;
  line-height: 1.64;
`
