import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import I18n from '../../../shared/I18n'
import Card from './Card'

// Icons
import CheckCircle from '../../../vectors/CheckCircle'
import BubbleLine from '../../../vectors/BubbleLine'
import VisaLine from '../../../vectors/VisaLine'
import CogLine from '../../../vectors/CogLine'

const Benefits = props => (
  <I18n ns="employer">
    {t => (
      <Wrapper {...props}>
        <Container>
          <Title>{t('benefits.title')}</Title>

          <CardsWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.1-title')}
                text={t('benefits.1-desc')}
                renderIcon={() => <CogLine />}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.2-title')}
                text={t('benefits.2-desc')}
                renderIcon={() => <CheckCircle />}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.3-title')}
                text={t('benefits.3-desc')}
                renderIcon={() => <VisaLine />}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.4-title')}
                text={t('benefits.4-desc')}
                renderIcon={() => <BubbleLine />}
              />
            </CardWrapper>
          </CardsWrapper>
        </Container>
      </Wrapper>
    )}
  </I18n>
)

export default Benefits

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 45%;
  margin-right: 70px;
  margin-bottom: 40px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    margin-right: 0;

    &:nth-last-child(2) {
      margin-bottom: 40px;
    }
  `)};
`
