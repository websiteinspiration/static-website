import React, { PureComponent } from 'react'

// Utilities
import theme from '../../../utils/style/theme'

// Local
import {
  GroupHeadCell,
  NumberHeadCell,
  CountryHeadCell,
  IconHeadCell,
} from './helpers'

// Icons
import {
  totalWorkforce,
  femaleWorkforce,
  percentWomen,
  legislators,
  womenInParl,
  womenInMinis,
  overallAverageWage,
  womenAverageWage,
  genderPayGapBlack,
  techWorkforce,
  workforceInTech,
  femaleTechWorkforce,
  womenInTech,
  diffWorkforceAndTech,
  STEM,
  techAverageWage,
  techWomenAverageWage,
  overallPayGap,
  genderInequality,
  payGap5YearsAgo,
  payGapComparison,
} from './icons'

const iconHeadCells = [
  { icon: totalWorkforce, bg: theme.blueHeadBg1 },
  { icon: femaleWorkforce, bg: theme.blueHeadBg1 },
  { icon: percentWomen, bg: theme.blueHeadBg1 },

  { icon: legislators, bg: theme.blueHeadBg2 },
  { icon: womenInParl, bg: theme.blueHeadBg2 },
  { icon: womenInMinis, bg: theme.blueHeadBg2 },

  { icon: overallAverageWage, bg: theme.blueHeadBg1 },
  { icon: womenAverageWage, bg: theme.blueHeadBg1 },
  { icon: genderPayGapBlack, bg: theme.blueHeadBg1 },

  { icon: techWorkforce, bg: theme.greenHeadBg1 },
  { icon: workforceInTech, bg: theme.greenHeadBg1 },
  { icon: femaleTechWorkforce, bg: theme.greenHeadBg1 },
  { icon: womenInTech, bg: theme.greenHeadBg1 },
  { icon: diffWorkforceAndTech, bg: theme.greenHeadBg1 },
  { icon: STEM, bg: theme.greenHeadBg1 },
  { icon: techAverageWage, bg: theme.greenHeadBg1 },
  { icon: techWomenAverageWage, bg: theme.greenHeadBg1 },
  { icon: genderPayGapBlack, bg: theme.greenHeadBg1 },

  { icon: overallPayGap, bg: theme.greenGroupBg, light: true },

  { icon: genderInequality, bg: theme.orangeHeadBg1 },
  { icon: payGap5YearsAgo, bg: theme.orangeHeadBg1 },
  { icon: payGapComparison, bg: theme.orangeHeadBg1 },
]

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

          {iconHeadCells.map(({ icon, ...cellProps }, i) => {
            const index = i + 1
            /* `+ 1` because 0 is country head */
            const isActive = sortedIndex === index
            return (
              <IconHeadCell
                key={i}
                {...cellProps}
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
