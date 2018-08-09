import React from 'react'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Local
// import HiveLogo from '../../vectors/HiveLogo'
import { LargeWrapper } from './Containers'
import MobileNav from './MobileNav'
import hiveLogoWhite from '../../static/logos/hive-logo-white.png'
import HoneypotLogoWhite from '../../static/logos/Honeypot-Logo-white.png'

// Utils
import { mobile } from '../../utils/style/media'

const Nav = props => (
  <NavWrapper>
    <LargeWrapper style={{ overflow: 'visible' }}>
      <InnerWrapper>
        {props.logo == 'honeypot' ? (
          <Logo
            alt="Hive Conference by Honeypot"
            title="Hive Conference by Honeypot"
            src={HoneypotLogoWhite}
            height="30"
          />
        ) : (
          <Logo
            alt="Hive Conference by Honeypot"
            title="Hive Conference by Honeypot"
            src={hiveLogoWhite}
            height="30"
          />
        )}

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
      <NavItem href="#speakers">Speakers</NavItem>
      <NavItem href="#topics">Topics</NavItem>
      <NavItem href="#location">Location</NavItem>
      <NavItem href="#s-ponsor">Sponsor</NavItem>
    </NavItems>
    <GetTicketButton href="#tickets">Tickets</GetTicketButton>
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

const Logo = styled.img`
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

const NavItem = styled(AnchorLink)`
  margin-right: 35px;
  text-decoration: none;
  color: #fff;

  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.4px;
  text-shadow: 0 0 8px rgba(7, 39, 167, 0.24);
`

const GetTicketButton = styled(AnchorLink)`
  width: 86px;
  height: 30px;
  line-height: 30px;
  background: #ffbc2a;
  border-radius: 100px;
  color: #fff;

  text-align: center;
  text-decoration: none;
  font-weight: bold;

  transition: background 150ms ease-in-out;

  &:hover {
    background: #eab808;
  }
`
