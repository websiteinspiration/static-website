import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile, notMobile } from '../../utils/style/media'

// Images
import quoteeCurvedBg from '../../static/graphics/person-curved-bg.svg'
import quoteeCurvedBgRed from '../../static/graphics/person-curved-bg-red.svg'

const Row = ({
  title,
  desc,
  quote,
  quotee,
  position,
  company,
  photoUrl,
  reverse,
  textsFlexAlign = 'center',
  littleRectColor = p => p.theme.primary,
  red = false,
  ...props
}) => (
  <Wrapper {...props} reverse={reverse}>
    <QuoteBox>
      <QuoteText>“{quote}”</QuoteText>
      <QuoteeLowerRow red={red}>
        <QuoteeTexts>
          <QuoteeName>{quotee}</QuoteeName>
          <QuoteePosition>
            {position}
            <br />
            {company}
          </QuoteePosition>
        </QuoteeTexts>
        <QuoteeImage src={photoUrl} />
      </QuoteeLowerRow>
    </QuoteBox>

    <Texts reverse={reverse} flexAlign={textsFlexAlign}>
      <Title littleRectColor={littleRectColor}>{title}</Title>
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
  height: auto;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;

  background: white;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.07);

  ${mobile(css`
    max-width: 100%;
  `)};
`

const QuoteText = styled.p`
  flex: 1 1 auto;
  padding: 40px 30px 0 30px;
  margin: 0;
  margin-bottom: 30px;

  font-size: ${p => p.theme.font15}px;
  font-weight: bold;
  line-height: 1.85;
  color: #7d6666;
`

const QuoteeLowerRow = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1 1 100px;
  padding: 0 25px 20px 30px;
  background: url(${p => (p.red ? quoteeCurvedBgRed : quoteeCurvedBg)})
    no-repeat;
  background-size: cover;
`

const QuoteeTexts = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: -5px;
`

const QuoteeName = styled.div`
  font-size: ${p => p.theme.font15}px;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
`

const QuoteePosition = styled.div`
  font-size: ${p => p.theme.font14}px;
  color: white;
`

const QuoteeImage = styled.img`
  width: 75px;
  height: 75px;
  display: block;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
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
  max-width: 300px;
  line-height: 1.5;

  font-size: ${p => p.theme.font18}px;
  font-weight: bold;
  color: black;

  &:after {
    --width: 30px;
    content: '';
    width: var(--width);
    height: 3px;
    border-radius: 5px;
    background: ${p => p.littleRectColor(p)};
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
  opacity: 0.6;
`
