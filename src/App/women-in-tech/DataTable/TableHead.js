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

export default class DataTable extends PureComponent {
  render() {
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
          <CountryHeadCell>Country</CountryHeadCell>
          <IconHeadCell bg={theme.blueHeadBg1}>
            <img src={totalWorkforce} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg1}>
            <img src={femaleWorkforce} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg1}>
            <img src={percentWomen} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg2}>
            <img src={legislators} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg2}>
            <img src={womenInParl} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg2}>
            <img src={womenInMinis} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg1}>
            <img src={overallAverageWage} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg1}>
            <img src={womenAverageWage} />
          </IconHeadCell>
          <IconHeadCell bg={theme.blueHeadBg1}>
            <img src={genderPayGapBlack} />
          </IconHeadCell>

          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={techWorkforce} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={workforceInTech} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={femaleTechWorkforce} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={womenInTech} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={diffWorkforceAndTech} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={STEM} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={techAverageWage} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={techWomenAverageWage} />
          </IconHeadCell>
          <IconHeadCell bg={theme.greenHeadBg1}>
            <img src={genderPayGapBlack} />
          </IconHeadCell>
          <IconHeadCell light={true} bg={theme.greenGroupBg}>
            <img src={overallPayGap} />
          </IconHeadCell>

          <IconHeadCell bg={theme.orangeHeadBg1}>
            <img src={genderInequality} />
          </IconHeadCell>
          <IconHeadCell bg={theme.orangeHeadBg1}>
            <img src={payGap5YearsAgo} />
          </IconHeadCell>
          <IconHeadCell bg={theme.orangeHeadBg1}>
            <img src={payGapComparison} />
          </IconHeadCell>
        </tr>
      </thead>
    )
  }
}
