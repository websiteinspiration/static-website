import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Local
import MenuBars from '../../vectors/MenuBars'

// Utils
import { notMobile } from '../../utils/style/media'

class MobileNav extends Component {
  state = { open: false }
  render = () => (
    <Wrapper>
      <MobileTrigger
        onClick={() => {
          this.setState(({ open }) => ({ open: !open }))
        }}
      >
        <MenuBars />
      </MobileTrigger>
      <MobilePopup
        open={this.state.open}
        onClick={() => this.setState(({ open }) => ({ open: !open }))}
      >
        <NavItem href="#speakers">Speakers</NavItem>
        <NavItem href="#location">Locations</NavItem>
        <NavItem href="#topics">Topics</NavItem>
        {/* #sponser gets removed / blocked by ad blockers */}
        <NavItem href="#s-ponsor">Sponsor</NavItem>
      </MobilePopup>
    </Wrapper>
  )
}

export default MobileNav

// Styles

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* position: relative; */

  ${notMobile(css`
    display: none;
  `)};
`

const MobileTrigger = styled.button`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  display: block;
  margin: 0;
  padding: 5px 0;
  z-index: 999;
`

const MobilePopup = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: auto;
  z-index: 100;
  padding: 48px 0;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  user-select: none;
  background: #357;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transform-origin: top right;
  transition: opacity 150ms ease, transform 150ms ease;

  ${p =>
    p.open &&
    css`
      transform: scale(1);
      opacity: 1;
    `};
`

const NavItem = styled(AnchorLink)`
  text-decoration: none;
  color: #fff;
  display: block;
  text-align: center;
  padding: 30px 0;
  margin-bottom: 3px;

  font-size: 30px;
  color: #ffffff;
  letter-spacing: 0.4px;
  text-shadow: 0 0 8px rgba(7, 39, 167, 0.24);

  &:last-child {
    margin-bottom: 0;
  }
`
