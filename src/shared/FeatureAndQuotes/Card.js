import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

const Row = ({
  quote,
  quotee,
  quoteeFirstLine,
  quoteeSecondLine,
  photoUrl,
  ...props
}) => (
  <Wrapper {...props}>
    <QuoteText>“{quote}”</QuoteText>
    <QuoteeLowerRow>
      <QuoteeImage src={photoUrl} />
      <QuoteeTexts>
        <QuoteeName>{quotee}</QuoteeName>
        <QuoteePosition>
          {quoteeFirstLine}
          <br />
          {quoteeSecondLine}
        </QuoteePosition>
      </QuoteeTexts>
    </QuoteeLowerRow>
  </Wrapper>
)

export default Row

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 18px 12px 12px 16px;

  background: white;
  box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.07);

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const QuoteText = styled.p`
  flex: 1 1 auto;
  margin-bottom: 30px;
  margin: 0;
  margin-bottom: 18px;

  font-size: 12.6px;
  line-height: 1.6;
  color: black;
`

const QuoteeLowerRow = styled.div`
  flex: 0 1 50px;
  display: flex;
`

const QuoteeTexts = styled.div`
  flex: 1 1 auto;
  margin-bottom: -2px;
  margin-left: 9px;
`

const QuoteeName = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #db0f53;
  margin-bottom: 6px;
`

const QuoteePosition = styled.div`
  font-size: 12px;
  line-height: 1.33;
  color: #a3a3a3;
`

const QuoteeImage = styled.img`
  width: 47px;
  height: 47px;
  display: block;
`
