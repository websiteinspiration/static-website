import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import Link from 'gatsby-link'

// Utilities
import { mobile } from '../../utils/style/media'

// Local
import Menu from '../../shared/vectors/Menu'
import NavButton from './NavButton'
import NavItem from './NavItem'
import SubItem, { NavSubItemsWrapper } from './SubItem'

// Images
import whitelogo from '../../static/honeypot-white-logo.svg'
import blackLogo from '../../static/honeypot-black-logo.svg'

class Nav extends React.Component {
  static propTypes = {
    sticky: PropTypes.bool,
  }

  state = { openOnMobile: false }

  render() {
    const { sticky, ...props } = this.props
    const { openOnMobile } = this.state

    return (
      <div>
        {sticky && <Placeholder key="1" />}
        <Wrapper {...props} sticky={sticky}>
          <InnerNav>
            <Logo>
              <Link to="/">
                <img src={sticky ? blackLogo : whitelogo} alt="Honeypot logo" />
              </Link>
            </Logo>

            <Space />

            <MobileNavHandle onClick={this.toggleMobileNav}>
              <Menu />
            </MobileNavHandle>

            <NavItems openOnMobile={openOnMobile}>
              <NavItem to="/" sticky={sticky}>
                Talent
              </NavItem>
              <NavItem to="/tech-hiring" sticky={sticky}>
                Employers
              </NavItem>
              <NavItem sticky={sticky} subItemsClassName={NavSubItemsWrapper}>
                Community
                <NavSubItemsWrapper>
                  <SubItem href="http://blog.honeypot.io/">Blog</SubItem>
                  <SubItem>Events</SubItem>
                  <SubItem href="https://www.honeypot.io/pages/faq">
                    FAQ
                  </SubItem>
                  <SubItem href="https://jobs.lever.co/honeypot">
                    Careers
                  </SubItem>
                </NavSubItemsWrapper>
              </NavItem>
              {!sticky && <NavItem sticky={sticky}>Invite a friend</NavItem>}
              <Separator />
              <NavButton
                outline={true}
                sticky={sticky}
                href="https://app.honeypot.io/users/login"
              >
                login
              </NavButton>
              <NavButton
                sticky={sticky}
                href="https://www.honeypot.io/users/sign_up"
              >
                sign up
              </NavButton>
            </NavItems>
          </InnerNav>
        </Wrapper>
      </div>
    )
  }

  toggleMobileNav = () => {
    this.setState(prev => ({ openOnMobile: !prev.openOnMobile }))
  }
}

export default Nav

const fadeInDown = keyframes`
  from { opacity: 0; transform: translate3d(0, -100px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`

const Wrapper = styled.div`
  height: ${p => p.theme.navHeight}px;
  display: flex;
  align-items: flex-end;
  padding: 0 50px;

  ${mobile(css`
    padding: 0 25px;
  `)};

  ${p =>
    p.sticky
      ? css`
          height: ${p.theme.innerNavHeight + 10}px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
          z-index: ${p => p.theme.stickyNavZIndex};
          animation: ${fadeInDown} 300ms ease;
        `
      : null};
`

const Placeholder = styled.div`
  height: ${p => p.theme.navHeight}px;
`

const InnerNav = styled.nav`
  flex: 1 1 auto;
  width: 100%;
  height: ${p => p.theme.innerNavHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile(css`
    /* Mobile Nav Box */
    position: absolute;
    top: ${p => p.theme.navHeight + 15}px;
    left: 25px;
    right: 25px;
    width: auto;
    flex: 1 1 auto;
    padding: 20px 0;
    flex-direction: column;
    z-index: ${p => p.theme.mobileNavZIndex};
    border-radius: 10px;
    transition: all 150ms cubic-bezier(0.075, 0.82, 0.165, 1.1);
    box-shadow: 0 4px 10px 3px rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%);
    background-image: linear-gradient(-158deg, #555 0%, #333 75%);

    visibility: ${p => (p.openOnMobile ? `visible` : `hidden`)};
    opacity: ${p => (p.openOnMobile ? 1 : 0)};
    transform: scale(${p => (p.openOnMobile ? 1 : 0)});
    transform-origin: 100% -6%;
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
