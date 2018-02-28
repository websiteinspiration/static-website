import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

// Local
import Container from '../../shared/Container'
import NavButton from './NavButton'
import NavItem from './NavItem'

// Images
import logo from '../../static/honeypot-white-logo.svg'

const Nav = () => (
  <Wrapper>
    <Container wide={true}>
      <NavItems>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Honeypot logo" />
          </Link>
        </Logo>

        <Space />

        <NavItem>Talent</NavItem>
        <NavItem>Employers</NavItem>
        <NavItem>Community</NavItem>
        <NavItem>Invite a friend</NavItem>

        <Separator />

        <NavButton outline={true}>login</NavButton>
        <NavButton>sign up</NavButton>
      </NavItems>
    </Container>
  </Wrapper>
)

export default Nav

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: flex-end;
`

const NavItems = styled.nav`
  flex: 1 1 auto;
  width: 100%;
  height: ${p => p.theme.innerNavHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  height: ${p => p.theme.logoHeight}px;
`

const Space = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Separator = styled.div`
  width: 20px;
`
