import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile, retina } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import I18n from '../../../shared/I18n'
import Plan from './Plan'

// Images
import bg from '../../../static/graphics/curved-bg-red.png'
import retinaBg from '../../../static/graphics/curved-bg-red@2x.png'

const basicSpecs = t => [
  t('plans.15%-Per-Hire'),
  t('plans.free-visa'),
  t('plans.dedicated-customer-success'),
]

const customOnlySpecs = t => [
  t('plans.access-all-candidates'),
  t('plans.access-honeypot-academy'),
  t('plans.custom-branding'),
]

const Plans = props => (
  <I18n ns="employer">
    {t => (
      <Wrapper id="plans" {...props}>
        <Container>
          <Title styleType="light">{t('plans.title')}</Title>

          <Desc>{t('plans.desc')}</Desc>

          <PlansWrapper>
            <PlanWrapper>
              <Plan
                title={t('plans.Basic')}
                desc={t('plans.Pay-Per-Hire')}
                specs={basicSpecs(t)}
                disabledSpecs={customOnlySpecs(t)}
                planColor="rgba(73, 151, 221, 0.45)"
                buttonText={t('plans.Start-Now')}
              />
            </PlanWrapper>
            <PlanWrapper>
              <Plan
                title={t('plans.Pro')}
                desc={t('plans.Custom-Plan')}
                specs={[...basicSpecs(t), ...customOnlySpecs(t)]}
                planColor="#4997DD"
                buttonText={t('plans.Start-Now')}
              />
            </PlanWrapper>
          </PlansWrapper>
        </Container>
      </Wrapper>
    )}
  </I18n>
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
