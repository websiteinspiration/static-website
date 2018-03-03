import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import {
  Table,
  TableScrollWrapper,
  NumberColumn,
  CountryColumn,
} from './helpers'
import data from './data'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default class DataTable extends Component {
  render() {
    return (
      <Wrapper>
        <TableScrollWrapper>
          <Table>
            <colgroup>
              <NumberColumn />
              <CountryColumn />
            </colgroup>
            <TableHead />
            <TableBody />
          </Table>
        </TableScrollWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 30px 0 75px 0;
  padding: 0 15px;
`
