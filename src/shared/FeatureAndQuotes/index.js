import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { tablet, mobile, notMobile } from '../../utils/style/media'

// Local
import Container from '../../shared/Container'
import Card from './Card'
import Row from './Row'

// Images
import defaultBg from '../../static/graphics/curved-bg-lightblue.svg'

const FeatureAndQuotes = ({
  rows,
  quoteCards,
  renderButton,
  bg = defaultBg,
  ...props
}) => (
  <Wrapper {...props} bg={bg}>
    <Container>
      {rows.map((rowProps, i) => (
        <RowWrapper key={i}>
          <Row {...rowProps} />
        </RowWrapper>
      ))}

      {quoteCards && (
        <CardsWrapper>
          {quoteCards.map((cardProps, i) => (
            <CardWrapper key={i}>
              <Card {...cardProps} />
            </CardWrapper>
          ))}
        </CardsWrapper>
      )}

      {typeof renderButton === 'function' && (
        <ButtonWrapper>{renderButton()}</ButtonWrapper>
      )}
    </Container>
  </Wrapper>
)

export default FeatureAndQuotes

const Wrapper = styled.section`
  background-image: url(${p => p.bg});
  background-size: auto 92%;

  background-repeat: no-repeat;
  background-position: top center;
  margin-top: 50px;
  padding-bottom: 50px;

  ${tablet(css`
    background-size: auto auto;
  `)};
`

const RowWrapper = styled.div`
  margin-bottom: 70px;
`

const CardsWrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: stretch;

  ${mobile(css`
    flex-direction: column;
  `)};
`

const CardWrapper = styled.div`
  flex: 1 1 24%;

  ${notMobile(css`
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  `)};

  ${mobile(css`
    flex: 1 1 100%;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

const ButtonWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
`
