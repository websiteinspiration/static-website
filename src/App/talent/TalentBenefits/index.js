import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import Button from '../../../shared/Button'
import I18n from '../../../shared/I18n'
import Card from './Card'

// Icons
import PersonLine from '../../../vectors/PersonLine'
import ToolLine from '../../../vectors/ToolLine'
import PinLine from '../../../vectors/PinLine'

const TalentBenefits = props => (
  <I18n ns="talent">
    {t => (
      <Wrapper {...props}>
        <Container>
          <Title>{t('benefits.title')}</Title>

          <CardsWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.ideal-role-title')}
                text={t('benefits.ideal-role-desc')}
                renderIcon={() => <PersonLine />}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.tech-stack-title')}
                text={t('benefits.tech-stack-desc')}
                renderIcon={() => <ToolLine />}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={t('benefits.location-title')}
                text={t('benefits.location-desc')}
                renderIcon={() => <PinLine />}
              />
            </CardWrapper>
          </CardsWrapper>

          <ButtonWrapper>
            <Button
              href="https://www.honeypot.io/users/sign_up"
              style={{ paddingRight: 58, paddingLeft: 58 }}
            >
              {t('Join')}
            </Button>
          </ButtonWrapper>
        </Container>
      </Wrapper>
    )}
  </I18n>
)

export default TalentBenefits

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 45px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 33%;
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    margin-right: 0;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

const ButtonWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`
