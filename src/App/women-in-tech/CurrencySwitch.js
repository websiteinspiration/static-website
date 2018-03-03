import React, { Component } from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

// Local
import CircleSwitch from '../../shared/CircleSwitch'
import CurrnecyContainer from './CurrencyContainer'

const currencyList = ['$', '€', '£']

export default class CurrencySwitch extends Component {
  render() {
    return (
      <Subscribe to={[CurrnecyContainer]}>
        {currencyState => (
          <Wrapper>
            {currencyList.map((c, i) => (
              <SwitchWrapper key={i}>
                <CircleSwitch
                  onClick={() => currencyState.switch(c)}
                  outline={currencyState.state.active !== c}
                >
                  {c}
                </CircleSwitch>
              </SwitchWrapper>
            ))}
          </Wrapper>
        )}
      </Subscribe>
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
