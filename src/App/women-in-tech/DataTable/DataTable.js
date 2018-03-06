import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import {
  Table,
  TableScrollWrapper,
  NumberColumn,
  CountryColumn,
} from './helpers'
import { rows } from './data'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: rows[props.currency],
      sortedIndex: 19,
      isReversed: false,
    }
  }

  render() {
    const { rows, sortedIndex, isReversed } = this.state

    return (
      <Wrapper>
        <TableScrollWrapper>
          <Table>
            <colgroup>
              <NumberColumn />
              <CountryColumn />
            </colgroup>
            <TableHead
              onHeadClick={this.headClicked}
              sortedIndex={sortedIndex}
              isReversed={isReversed}
            />
            <TableBody rows={rows} />
          </Table>
        </TableScrollWrapper>
      </Wrapper>
    )
  }

  headClicked = i => {
    const { sortedIndex } = this.state

    this.setState(prev => {
      if (i !== sortedIndex) {
        return {
          rows: this.sortRows(prev.rows, i, false),
          sortedIndex: i,
          isReversed: false,
        }
      } else {
        return {
          rows: this.sortRows(prev.rows, i, !prev.isReversed),
          isReversed: !prev.isReversed,
        }
      }
    })
  }

  sortRows = (rows, i, reverse) => {
    let rowsClone = [...rows]
    const reverserNum = reverse ? 1 : -1 /* reverse this if you prefer */

    rowsClone.sort((a, b) => {
      // Remove commas from numbers
      var valueA = a[i].replace(/,/g, '')
      var valueB = b[i].replace(/,/g, '')

      if (!isNaN(parseInt(valueA, 10))) {
        // Number
        return (parseFloat(valueA, 10) - parseFloat(valueB, 10)) * reverserNum
      } else {
        // String / Not Number
        if (valueA < valueB) {
          return -1 * reverserNum
        } else if (valueA > valueB) {
          return 1 * reverserNum
        } else {
          return 0
        }
      }
    })

    return rowsClone
  }
}

const Wrapper = styled.div`
  margin: 30px 0 75px 0;
`
