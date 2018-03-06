import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import CircleSwitch from '../../shared/CircleSwitch'

const currencyList = ['$', '€', '£']
const mapSymbolToPage = {
  $: '/women-in-tech-2018',
  '€': '/women-in-tech-2018/eur',
  '£': '/women-in-tech-2018/gbp',
}

export default class CurrencySwitch extends Component {
  render() {
    const { activeCurrency } = this.props
    return (
      <Wrapper>
        {currencyList.map((c, i) => (
          <SwitchWrapper key={i}>
            <CircleSwitch
              to={mapSymbolToPage[c]}
              outline={activeCurrency !== c}
            >
              {c}
            </CircleSwitch>
          </SwitchWrapper>
        ))}
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
