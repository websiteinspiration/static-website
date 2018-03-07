import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import theme from '../../utils/style/theme'
import { mobile } from '../../utils/style/media'

// Local
import Nav from '../Nav'
import Container from '../Container'
import Companies, { CompaniesNote } from './Companies'
import BottomMask from './BottomMask'
import Mascot from './Mascot'

const MainHeader = ({
  bg = `linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%)`,
  title = 'Choose a Job You Love',
  desc = `Choose a Job You Love Description as a placeholder!`,
  navTextColor = `black`,
  mascotProps = {},
  renderButtons = () => {},
  ...props
}) => (
  <Wrapper {...props} bg={bg}>
    <Nav style={{ color: navTextColor }} />

    <Container
      narrow={true}
      style={{ position: 'relative', zIndex: theme.relativeZIndex }}
    >
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <ButtonsWrapper>{renderButtons()}</ButtonsWrapper>
    </Container>

    <CompaniesWrapper>
      <Companies />
      <Container narrow={true}>
        <CompaniesNote />
      </Container>
    </CompaniesWrapper>

    <Container
      wide={true}
      style={{ position: 'relative', zIndex: theme.mascotZIndex }}
    >
      <Mascot {...mascotProps} />
    </Container>

    <BottomMask />
  </Wrapper>
)

export default MainHeader

const Wrapper = styled.header`
  background: ${p => p.bg};
  color: white;
  /* For making space for bottom mask */
  padding-bottom: 120px;
  position: relative;
  overflow: hidden;
`

const Title = styled.h1`
  max-width: 620px;
  margin: 80px 0 0 0;

  line-height: 1.1;
  font-size: ${p => p.theme.fontExtraBig}px;
  font-weight: 700;
  color: white;

  ${mobile(css`
    font-size: ${p => p.theme.fontBig}px;
  `)};
`

const Desc = styled.p`
  max-width: 590px;
  margin: 40px 0 0 0;

  line-height: ${p => p.theme.lineHeightBase};
  font-size: ${p => p.theme.fontSecondary}px;
  font-weight: 500;
  color: white;
`

const ButtonsWrapper = styled.div`
  margin-top: 45px;
  display: flex;
`

const CompaniesWrapper = styled.div`
  margin-top: 40px;
`
