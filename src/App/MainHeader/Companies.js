import React from 'react'
import styled, { css } from 'styled-components'
import Draggable from 'react-draggable'
import MediaQuery from 'react-responsive'

// Utilities
import { notMobileMediaString, mobile } from '../../utils/style/media'

// Local
import Container from '../../shared/Container'

// Images
import zalando from '../../static/logos/zalando.svg'
import goup from '../../static/logos/goup.svg'
import onefootball from '../../static/logos/onefootball.svg'
import kiwi from '../../static/logos/kiwi.svg'

const Companies = () => (
  <Wrapper>
    <MediaQuery query={notMobileMediaString}>
      {matches =>
        matches ? (
          <Draggable
            axis="x"
            defaultPosition={{ x: 130, y: 0 }}
            bounds={{ left: -130, right: 130 }}
          >
            <div>
              <Logos />
            </div>
          </Draggable>
        ) : (
          <Container>
            <Logos />
          </Container>
        )
      }
    </MediaQuery>
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
  justify-content: flex-end;
  overflow: hidden;
  padding-bottom: 25px;
  /* TODO calc based on container width */
  padding-right: calc((100% - 720px) / 2);

  ${mobile(css`
    padding-right: 0;
  `)};
`

const LogosWrapper = styled.div`
  width: 850px;
  flex: 0 0 auto;

  ${mobile(css`
    width: auto;
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
    filter: drop-shadow(0 2px 4px rgba(7, 89, 166, 0.5));
  }

  ${mobile(css`
    margin-right: 30px;
    margin-bottom: 20px;
    height: 25px;
  `)};
`

const Note = styled.p`
  margin: 18px 0 0 0;
  font-size: ${p => p.theme.fontBase}px;
  font-weight: bold;
  color: ${p => p.theme.headerDarkBlue};
`
