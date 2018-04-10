import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile, notMobile } from '../../utils/style/media'

// Local
import Container from '../../shared/Container'

// Images
import zalando from '../../static/logos/zalando.svg'
import travisCi from '../../static/logos/Travisci-logo.svg'
import zenmate from '../../static/logos/Zenmate-logo.svg'
import n26 from '../../static/logos/N26-logo.svg'
import helping from '../../static/logos/Helpling-logo.svg'
import onefootball from '../../static/logos/onefootball.svg'

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
      <img src={travisCi} draggable={false} />
    </Logo>
    <Logo>
      <img src={n26} draggable={false} />
    </Logo>
    <Logo>
      <img src={onefootball} draggable={false} />
    </Logo>
    <Logo>
      <img src={zenmate} draggable={false} />
    </Logo>
    <Logo>
      <img src={helping} draggable={false} />
    </Logo>
  </LogosWrapper>
)

export const CompaniesNote = () => (
  <Note>Over 1000 Companies Are Hiring on Honeypot</Note>
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
  width: 1250px;
  padding-top: 20px;
  padding-bottom: 25px;
  transition: transform 600ms ease-in-out;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${Logo}:nth-child(n+5) {
    opacity: 0;
    transition-delay: 200ms;
  }

  ${notMobile(css`
    &:hover {
      transform: translateX(-650px);

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
