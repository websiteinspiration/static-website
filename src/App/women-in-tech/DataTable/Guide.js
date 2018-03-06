import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'
import { headings } from './data'

// Local
import Language from '../../../shared/Language'

const Guide = ({ currency, ...props }) => {
  return (
    <Language>
      {lang => {
        const itemProps = {
          currency: currency === '$' ? 'USD$' : currency,
          lang,
        }
        return (
          <Wrapper {...props}>
            <Column>
              <Item {...itemProps} {...headings[0]} />
              <Item {...itemProps} {...headings[1]} />
              <Item {...itemProps} {...headings[2]} />
            </Column>
            <Column>
              <Item {...itemProps} {...headings[3]} />
              <Item {...itemProps} {...headings[4]} />
              <Item {...itemProps} {...headings[5]} />
            </Column>
            <Column>
              <Item {...itemProps} {...headings[6]} />
              <Item {...itemProps} {...headings[7]} />
              <Item {...itemProps} {...headings[8]} />
            </Column>
            <Column>
              <Item {...itemProps} {...headings[9]} />
              <Item {...itemProps} {...headings[10]} />
              <Item {...itemProps} {...headings[11]} />
            </Column>
            <Column>
              <Item {...itemProps} {...headings[12]} />
              <Item {...itemProps} {...headings[13]} />
              <Item {...itemProps} {...headings[14]} />
            </Column>
            <Column>
              <Item {...itemProps} {...headings[15]} />
              <Item {...itemProps} {...headings[16]} />
              <Item {...itemProps} {...headings[17]} />
              <Item {...itemProps} {...headings[18]} />
            </Column>
            <Column>
              <Item {...itemProps} {...headings[19]} />
              <Item {...itemProps} {...headings[20]} />
              <Item {...itemProps} {...headings[21]} />
            </Column>
          </Wrapper>
        )
      }}
    </Language>
  )
}
export default Guide

const Item = ({ icon, title, bg, lang, currency, ...props }) => (
  <ItemWrapper {...props} borderColor={bg}>
    <IconWrapper bg={bg}>
      <img src={icon} />
    </IconWrapper>
    <Label>
      {typeof title === 'object'
        ? title[lang]
        : typeof title === 'function' ? title(currency)[lang] : title}
    </Label>
  </ItemWrapper>
)

const ItemWrapper = styled.div`
  min-height: ${p => p.theme.guideIconSize}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom 1px solid ${p => p.borderColor || `white`};
`

const IconWrapper = styled.div`
  flex: 0 0 auto;
  width: ${p => p.theme.guideIconSize}px;
  min-height: ${p => p.theme.guideIconSize}px;
  line-height: ${p => p.theme.guideIconSize}px;
  text-align: center;
  align-self: stretch;
  background: ${p => p.bg || `white`};
  box-shadow: 0 1px 0 white;

  img {
    margin: 0;
    display: inline;
    vertical-align: middle;
  }
`

const Label = styled.div`
  flex: 1 1 auto;
  padding-left: 10px;
  padding-right: 5px;

  line-height: 1.14;
  font-size: 12px;
  white-space: wrap;
`

// ------
const Wrapper = styled.div`
  display: flex;

  ${mobile(css`
    flex-wrap: wrap;
  `)};
`

const Column = styled.div`
  flex: 0 1 14.27%;

  ${mobile(css`
    flex: 0 0 49%;
    white-space: wrap;
    word-break: break-all;
  `)};
`
