import React from 'react'
import styled from 'styled-components'

// Local
import HiveLogo from '../../vectors/HiveLogo'

const Nav = () => (
  <div>
    <NavWrapper>
      <Logo>
        <HiveLogo />
      </Logo>
      <NavItems>
        <NavItem href="#">Speakers</NavItem>
        <NavItem href="#">Topics</NavItem>
        <NavItem href="#">Location</NavItem>
        <NavItem href="#">Sponsor</NavItem>
      </NavItems>
      <GetTicketBotton href="#">Tickets</GetTicketBotton>
    </NavWrapper>
  </div>
)

export default Nav

// Styles

const NavWrapper = styled.nav`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
`

const Logo = styled.div``

const NavItems = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

const NavItem = styled.a`
  margin-right: 35px;
  text-decoration: none;
  color: #fff;
  /* Speakers: */
  font-family: Courier;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.4px;
  text-shadow: 0 0 8px rgba(7, 39, 167, 0.24);
`

const GetTicketBotton = styled.a`
  width: 86px;
  height: 30px;
  line-height: 30px;
  background: #ffbc2a;
  border-radius: 100px;
  color: #fff;

  text-align: center;
  text-decoration: none;
`
