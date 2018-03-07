import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Local
import { countries } from './data'
import { NumberCell, CountryCell, BodyCell } from './helpers'
import Language from '../../../shared/Language'

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
      <Language>
        {lang => (
          <tbody>
            {rows.map((row, i) => {
              const country = countries[lang][i]
              console.log(country)
              return (
                <tr key={country}>
                  <NumberCell>{i + 1}</NumberCell>
                  <CountryCell>{country}</CountryCell>
                  {row.map((cell, i) => <BodyCell key={i}>{cell}</BodyCell>)}
                </tr>
              )
            })}
          </tbody>
        )}
      </Language>
    )
  }
}
