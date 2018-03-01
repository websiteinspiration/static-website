import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { tablet } from '../../utils/style/media'

// Local
import Container from '../../shared/Container'
import Button from '../../shared/Button'
import Row from './Row'

// Images
import defaultBg from '../../static/graphics/curved-bg-lightblue.svg'

const FeatureAndQuotes = ({ rows, joinButton, bg = defaultBg, ...props }) => (
  <Wrapper {...props} joinButton={joinButton} bg={bg}>
    <Container>
      {rows.map((rowProps, i) => (
        <RowWrapper key={i}>
          <Row {...rowProps} />
        </RowWrapper>
      ))}

      {joinButton && (
        <ButtonWrapper>
          <Button
            href="https://www.honeypot.io/users/sign_up"
            style={{ paddingRight: 58, paddingLeft: 58 }}
          >
            Join
          </Button>
        </ButtonWrapper>
      )}
    </Container>
  </Wrapper>
)

export default FeatureAndQuotes

const Wrapper = styled.section`
  background-image: url(${p => p.bg});
  background-size: auto 100%;

  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 50px;
  padding-bottom: 50px;

  ${tablet(css`
    background-size: auto auto;
  `)};
`

const RowWrapper = styled.div`
  margin-bottom: 80px;
`

const ButtonWrapper = styled.div`
  margin-top: 80px;
  text-align: center;
`
