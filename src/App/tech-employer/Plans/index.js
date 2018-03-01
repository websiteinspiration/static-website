import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile, retina } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import Plan from './Plan'

// Images
import bg from '../../../static/graphics/curved-bg-red.png'
import retinaBg from '../../../static/graphics/curved-bg-red@2x.png'

const basicSpecs = [
  '15% Per Hire',
  'Free Visa Support',
  'Dedicated Customer Succes Manager',
]

const customOnlySpecs = [
  'Acces to Passive Candidates',
  'Educational Training',
  'Employer Branding',
]

const Plans = props => (
  <Wrapper id="plans" {...props}>
    <Container>
      <Title styleType="light">
        Honeypot has Payment Options Depending on your Hiring Plan
      </Title>

      <Desc>
        Hiring more than one talent? Sync your hiring plan with our Team
        Building Plan and benefit from customized pricing and additional
        recruitment support.
      </Desc>

      <PlansWrapper>
        <PlanWrapper>
          <Plan
            title="Basic"
            desc="Pay per Hire"
            specs={basicSpecs}
            disabledSpecs={customOnlySpecs}
            planColor="rgba(73, 151, 221, 0.45)"
          />
        </PlanWrapper>
        <PlanWrapper>
          <Plan
            title="Pro"
            desc="Custom Plan"
            specs={[...basicSpecs, ...customOnlySpecs]}
            planColor="#4997DD"
          />
        </PlanWrapper>
      </PlansWrapper>
    </Container>
  </Wrapper>
)

export default Plans

const Wrapper = styled.section`
  padding-top: 170px;
  padding-bottom: 100px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 1920px 733px;

  ${retina(css`
    background-image: url(${retinaBg});
  `)};
`

const Desc = styled.p`
  max-width: 600px;
  margin: 40px auto 0 auto;

  font-size: ${p => p.theme.fontBase};
  line-height: 1.9;
  text-align: center;
  color: white;
`

const PlansWrapper = styled.div`
  margin-top: 65px;
  display: flex;
  justify-content: center;

  ${mobile(css`
    flex-direction: column;
    justify-content: unset;
  `)};
`

const PlanWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 275px;
  margin-right: 60px;

  ${mobile(css`
    width: 100%;
    max-width: 100%;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`
