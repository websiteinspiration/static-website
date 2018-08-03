import React from 'react'
import styled, { css } from 'styled-components'

// Local
import HiveLogo from '../../vectors/HiveLogo'
import { LargeWrapper } from './Containers'
import MobileNav from './MobileNav'

// Utils
import { mobile } from '../../utils/style/media'

const Nav = () => (
  <NavWrapper>
    <LargeWrapper style={{ overflow: 'visible' }}>
      <InnerWrapper>
        <Logo>
          <HiveLogo />
        </Logo>
        <NormalNav />
        <MobileNav />
      </InnerWrapper>
    </LargeWrapper>
  </NavWrapper>
)

export default Nav

const NormalNav = () => (
  <NormalNavWrapper>
    <NavItems>
      <NavItem href="#">Speakers</NavItem>
      <NavItem href="#">Topics</NavItem>
      <NavItem href="#">Location</NavItem>
      <NavItem href="#">Sponsor</NavItem>
    </NavItems>
    <GetTicketButton href="#">Tickets</GetTicketButton>
  </NormalNavWrapper>
)

// Styles
const NavWrapper = styled.div`
  padding-top: 38px;

  ${mobile(css`
    padding-top: 22px;
  `)};
`

const InnerWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  ${mobile(css`
    .nav-logo-text {
      display: none;
    }
  `)};
`

const NormalNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile(css`
    display: none;
  `)};
`

const NavItems = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

const NavItem = styled.a`
  margin-right: 35px;
  text-decoration: none;
  color: #fff;

  font-family: Courier;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.4px;
  text-shadow: 0 0 8px rgba(7, 39, 167, 0.24);
`

const GetTicketButton = styled.a`
  width: 86px;
  height: 30px;
  line-height: 30px;
  background: #ffbc2a;
  border-radius: 100px;
  color: #fff;

  text-align: center;
  text-decoration: none;

  transition: background 150ms ease-in-out;

  &:hover {
    background: #eab808;
  }
`
