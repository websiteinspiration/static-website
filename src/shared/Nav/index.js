import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

// Utilities
import { mobile } from '../../utils/style/media'

// Local
import Menu from '../../shared/vectors/Menu'
import Container from '../../shared/Container'
import NavButton from './NavButton'
import NavItem from './NavItem'

// Images
import logo from '../../static/honeypot-white-logo.svg'

class Nav extends React.Component {
  state = { openOnMobile: false }

  render() {
    const { openOnMobile } = this.state

    return (
      <Wrapper>
        <Container wide={true}>
          <InnerNav>
            <Logo>
              <Link to="/">
                <img src={logo} alt="Honeypot logo" />
              </Link>
            </Logo>

            <Space />

            <MobileNavHandle onClick={this.toggleMobileNav}>
              <Menu />
            </MobileNavHandle>

            <NavItems openOnMobile={openOnMobile}>
              <NavItem>Talent</NavItem>
              <NavItem>Employers</NavItem>
              <NavItem>Community</NavItem>
              <NavItem>Invite a friend</NavItem>
              <Separator />
              <NavButton outline={true}>login</NavButton>
              <NavButton>sign up</NavButton>
            </NavItems>
          </InnerNav>
        </Container>
      </Wrapper>
    )
  }

  toggleMobileNav = () => {
    this.setState(prev => ({ openOnMobile: !prev.openOnMobile }))
  }
}

export default Nav

const Wrapper = styled.div`
  height: ${p => p.theme.navHeight}px;
  display: flex;
  align-items: flex-end;
`

const InnerNav = styled.nav`
  flex: 1 1 auto;
  width: 100%;
  height: ${p => p.theme.innerNavHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  ${mobile(css``)};
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile(css`
    /* Mobile Nav Box */
    position: absolute;
    top: ${p => p.theme.navHeight}px;
    left: 0;
    right: 0;
    width: 100%;
    flex: 1 1 100%;
    padding: 20px 0;
    flex-direction: column;
    z-index: ${p => p.theme.mobileNavZIndex};
    background-image: linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%);

    display: ${p => (p.openOnMobile ? `flex` : `none`)};
  `)};
`

const MobileNavHandle = styled.button`
  display: none;

  ${mobile(css`
    display: block;
    padding: 10px 10px 10px 5px;
    text-align: center;
    background: transparent;
    border: none;
    outline: none;
    transition: background 100ms;
    border-radius: 10px;

    &:focus {
      background: rgba(0, 0, 0, 0.1);
    }

    svg {
      line-height: 1;
      display: inline-block;
      vertical-align: middle;
    }
  `)};
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
