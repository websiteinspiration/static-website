import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

// Images
import zalando from '../../static/logos/zalando.svg'
import goup from '../../static/logos/goup.svg'
import onefootball from '../../static/logos/onefootball.svg'
import kiwi from '../../static/logos/kiwi.svg'

const Companies = () => (
  <Wrapper>
    <Draggable
      axis="x"
      defaultPosition={{ x: 130, y: 0 }}
      bounds={{ left: -130, right: 130 }}
    >
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
    </Draggable>
  </Wrapper>
)

export default Companies

export const CompaniesNote = () => (
  <Note>Over 1000 Companies are Hiring on Honeypot</Note>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  padding-bottom: 25px;
  padding-right: calc((100% - 720px) / 2); /*TODO calc*/
`

const LogosWrapper = styled.div`
  width: 850px;
  flex: 0 0 auto;
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
    filter: drop-shadow(0 2px 4px rgba(7, 89, 166, 0.5));
  }
`

const Note = styled.p`
  margin: 18px 0 0 0;
  font-size: ${p => p.theme.fontBase}px;
  font-weight: bold;
  color: ${p => p.theme.headerDarkBlue};
`
