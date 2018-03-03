import React, { PureComponent } from 'react'

// Local
import { NumberCell, CountryCell, BodyCell } from './helpers'
import data from './data'

export default class TableBody extends PureComponent {
  render() {
    return (
      <tbody>
        {data.map((row, i) => {
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
