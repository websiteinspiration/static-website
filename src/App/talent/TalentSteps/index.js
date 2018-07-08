import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import I18n from '../../../shared/I18n'
import Card from './Card'

const TalentSteps = props => (
  <I18n ns="talent">
    {t => (
      <Wrapper {...props}>
        <Container>
          <Title align="left">{t('steps.title')}</Title>

          <CardsWrapper>
            <CardWrapper>
              <Card
                title={t('steps.1-title')}
                text={t('steps.1-desc')}
                topLineBackground="linear-gradient(-180deg, #95EDC9 0%, #5CD798 100%)"
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('steps.2-title')}
                text={t('steps.2-desc')}
                topLineBackground="linear-gradient(-180deg, #FFEBB1 0%, #FEC829 100%)"
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('steps.3-title')}
                text={t('steps.3-desc')}
                topLineBackground="linear-gradient(-180deg, #7CB9F1 0%, #418FD9 100%)"
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('steps.4-title')}
                text={t('steps.4-desc')}
                topLineBackground="linear-gradient(-180deg, #F796BF 0%, #FF0A71 100%)"
              />
            </CardWrapper>
          </CardsWrapper>
        </Container>
      </Wrapper>
    )}
  </I18n>
)

export default TalentSteps

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 20px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 50px;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 33%;
  margin-right: 25px;
  display: flex;
  align-items: stretch;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    margin-right: 0;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`
