import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import CircleSwitch from '../../shared/CircleSwitch'

export default class CurrencySwitch extends Component {
  render() {
    return (
      <Wrapper>
        <SwitchWrapper>
          <CircleSwitch outline={false}>$</CircleSwitch>
        </SwitchWrapper>
        <SwitchWrapper>
          <CircleSwitch outline={true}>€</CircleSwitch>
        </SwitchWrapper>
        <SwitchWrapper>
          <CircleSwitch outline={true}>£</CircleSwitch>
        </SwitchWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  flex: 0 0 auto;
  padding-top: 10px;
  display: flex;
  margin-bottom: 20px;
`

const SwitchWrapper = styled.div`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`
