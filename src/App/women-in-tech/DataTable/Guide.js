import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Data
import { headings } from './data'

const Guide = props => (
  <Wrapper {...props}>
    <Column>
      <Item {...headings[0]} />
      <Item {...headings[1]} />
      <Item {...headings[2]} />
    </Column>
    <Column>
      <Item {...headings[3]} />
      <Item {...headings[4]} />
      <Item {...headings[5]} />
    </Column>
    <Column>
      <Item {...headings[6]} />
      <Item {...headings[7]} />
      <Item {...headings[8]} />
    </Column>
    <Column>
      <Item {...headings[9]} />
      <Item {...headings[10]} />
      <Item {...headings[11]} />
    </Column>
    <Column>
      <Item {...headings[12]} />
      <Item {...headings[13]} />
      <Item {...headings[14]} />
    </Column>
    <Column>
      <Item {...headings[15]} />
      <Item {...headings[16]} />
      <Item {...headings[17]} />
      <Item {...headings[18]} />
    </Column>
    <Column>
      <Item {...headings[19]} />
      <Item {...headings[20]} />
      <Item {...headings[21]} />
    </Column>
  </Wrapper>
)

export default Guide

const Item = ({ icon, title, bg, ...props }) => (
  <ItemWrapper {...props} borderColor={bg}>
    <IconWrapper bg={bg}>
      <img src={icon} />
    </IconWrapper>
    <Label>{title}</Label>
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
    flex-basis: 50%;
  `)};
`
