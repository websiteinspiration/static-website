import React, { Component } from 'react'
import styled, { css } from 'styled-components'

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
    this.table = null
    this.wrapper = null
    this.state = {
      rows: rows[props.currency],
      sortedIndex: 18,
      isReversed: false,
      // Scroll flags
      scrollEndRight: false,
      scrollEndBottom: false,
    }
  }

  render() {
    const {
      rows,
      sortedIndex,
      isReversed,
      scrollEndRight,
      scrollEndBottom,
    } = this.state
    const wrapperHeight = window.innerHeight - 150

    return (
      <Wrapper>
        <Shadows
          isRightHidden={scrollEndRight}
          isBottomHidden={scrollEndBottom}
        >
          <TableScrollWrapper
            style={{ height: wrapperHeight }}
            onScroll={this.scrolled}
            innerRef={ref => {
              this.wrapper = ref
            }}
          >
            <Table
              innerRef={ref => {
                this.table = ref
              }}
            >
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
        </Shadows>
      </Wrapper>
    )
  }

  componentDidMount() {
    if (this.table && this.wrapper) {
      this.scrolled()
    }
  }

  scrolled = () => {
    const { scrollEndRight, scrollEndBottom } = this.state
    const {
      offsetWidth: wrapperWidth,
      offsetHeight: wrapperHeight,
      scrollTop,
      scrollLeft,
    } = this.wrapper
    const { offsetWidth: tableWidth, offsetHeight: tableHeight } = this.table

    // Horizental scroll
    if (scrollLeft >= tableWidth - wrapperWidth && scrollEndRight === false) {
      this.setState({ scrollEndRight: true })
    } else if (
      scrollLeft < tableWidth - wrapperWidth &&
      scrollEndRight === true
    ) {
      this.setState({ scrollEndRight: false })
    }

    // Vertical scroll
    if (scrollTop >= tableHeight - wrapperHeight && scrollEndBottom === false) {
      this.setState({ scrollEndBottom: true })
    } else if (
      scrollTop < tableHeight - wrapperHeight &&
      scrollEndBottom === true
    ) {
      this.setState({ scrollEndBottom: false })
    }
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

const Shadows = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    z-index: 999;
    height: 100%;
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0.2) -30%,
      rgba(0, 0, 0, 0.02) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 200ms ease;

    ${p =>
      p.isRightHidden &&
      css`
        opacity: 0;
        width: 0;
      `};
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 20px;
    width: 100%;
    z-index: 999;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) -30%,
      rgba(0, 0, 0, 0.02) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 200ms ease;

    ${p =>
      p.isBottomHidden &&
      css`
        opacity: 0;
        width: 0;
      `};
  }
`
