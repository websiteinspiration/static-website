import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile, notMobile } from '../../utils/style/media'

// Local
import Container from '../../shared/Container'

// Images
import zalando from '../../static/logos/zalando.svg'
import goup from '../../static/logos/goup.svg'
import onefootball from '../../static/logos/onefootball.svg'
import kiwi from '../../static/logos/kiwi.svg'

const Companies = () => (
  <Wrapper>
    <Container narrow={true}>
      <Logos />
    </Container>
  </Wrapper>
)

export default Companies

const Logos = () => (
  <LogosWrapper>
    <Logo>
      <img src={zalando} draggable={false} />
    </Logo>
    <Logo>
      <img src={goup} draggable={false} />
    </Logo>
    <Logo>
      <img src={onefootball} draggable={false} />
    </Logo>
    <Logo>
      <img src={kiwi} draggable={false} />
    </Logo>
  </LogosWrapper>
)

export const CompaniesNote = () => (
  <Note>Over 1000 Companies are Hiring on Honeypot</Note>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;

  ${mobile(css`
    padding-right: 0;
  `)};
`

const Logo = styled.div`
  display: inline-block;
  margin-right: 60px;
  opacity: 0.7;
  transition: opacity 120ms;
  -webkit-user-drag: none;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 1;
  }

  img {
    display: block;
    margin: 0;
    max-height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  ${mobile(css`
    margin-right: 30px;
    margin-bottom: 20px;
    height: 25px;
  `)};
`

const LogosWrapper = styled.div`
  width: 930px;
  padding-top: 20px;
  padding-bottom: 25px;
  transition: transform 300ms ease;

  ${notMobile(css`
    &:hover {
      transform: translateX(-190px);

      ${Logo} {
        opacity: 0.95;
      }
    }
  `)};

  ${mobile(css`
    width: auto;
  `)};
`

const Note = styled.p`
  margin: 18px 0 0 0;
  font-size: ${p => p.theme.fontBase}px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`
