import React, { PureComponent } from 'react'

// Local
import {
  GroupHeadCell,
  NumberHeadCell,
  CountryHeadCell,
  IconHeadCell,
} from './helpers'
import { headings } from './data'

export default class DataTable extends PureComponent {
  static defaultProps = {
    onHeadClick: () => {},
    sortedIndex: -1,
    isReversed: false,
  }

  render() {
    const { onHeadClick, sortedIndex, isReversed } = this.props

    return (
      <thead>
        <tr>
          <GroupHeadCell colSpan="2" topLeftCorner={true}>
            &nbsp;
          </GroupHeadCell>
          <GroupHeadCell colSpan="9" bg="#4A90E2">
            Workforce Today
          </GroupHeadCell>
          <GroupHeadCell colSpan="10" bg="#6DDBA4">
            Tech Industry Today
          </GroupHeadCell>
          <GroupHeadCell colSpan="3" bg="#F3C960">
            Inqualifty & Opportunity
          </GroupHeadCell>
        </tr>
        <tr>
          <NumberHeadCell>#</NumberHeadCell>
          <CountryHeadCell onClick={() => onHeadClick(0)}>
            Country
          </CountryHeadCell>

          {headings.map(({ icon, bg, light }, i) => {
            const index = i + 1
            /* `+ 1` because 0 is country head */
            const isActive = sortedIndex === index
            return (
              <IconHeadCell
                key={i}
                bg={bg}
                light={light}
                active={isActive}
                reverseArrow={isActive && isReversed}
                onClick={() => onHeadClick(index)}
              >
                <img src={icon} />
              </IconHeadCell>
            )
          })}
        </tr>
      </thead>
    )
  }
}
