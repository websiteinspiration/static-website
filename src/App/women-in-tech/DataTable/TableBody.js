import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Local
import { NumberCell, CountryCell, BodyCell } from './helpers'

export default class TableBody extends PureComponent {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  }

  static defaultProps = {
    rows: [],
  }

  render() {
    const { rows } = this.props

    return (
      <tbody>
        {rows.map((row, i) => {
          const [country, ...body] = row
          return (
            <tr key={row[0]}>
              <NumberCell>{i + 1}</NumberCell>
              <CountryCell>{country}</CountryCell>
              {body.map((cell, i) => <BodyCell key={i}>{cell}</BodyCell>)}
            </tr>
          )
        })}
      </tbody>
    )
  }
}
