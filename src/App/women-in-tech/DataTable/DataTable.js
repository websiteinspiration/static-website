import React, { PureComponent } from 'react'
import styled from 'styled-components'

// Local
import { Table, Row, Cell } from '../../../shared/Table'

export default class DataTable extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Table>
          <Row>
            <Cell>Hellllllo1</Cell>
            <Cell>Hellllllo2</Cell>
            <Cell>Hellllllo3</Cell>
          </Row>
          <Row>
            <Cell>Byyyyyye1</Cell>
            <Cell>Byyyyyye2</Cell>
            <Cell>Byyyyyye3</Cell>
          </Row>
        </Table>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 30px 0 75px 0;
  padding: 0 15px;
`
