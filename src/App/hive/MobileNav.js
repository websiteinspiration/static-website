import React, { Component } from 'react'
import styled, { css } from 'styled-components'

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
      <MobilePopup open={this.state.open}>
        <NavItem href="#speakers">Speakers</NavItem>
        <NavItem href="#locations">Locations</NavItem>
        <NavItem href="#topics">Topics</NavItem>
        <NavItem href="#sponsor">Sponsor</NavItem>
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

  position: relative;

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
`

const MobilePopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 200px;
  z-index: 100;
  padding: 8px 0;

  position: absolute;
  top: 30px;
  right: 0;

  user-select: none;
  background: #357;
  border-radius: 8px;
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

const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  display: block;
  text-align: center;
  padding: 12px 0;
  margin-bottom: 3px;

  font-family: Courier, monospace;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0.4px;
  text-shadow: 0 0 8px rgba(7, 39, 167, 0.24);

  &:last-child {
    margin-bottom: 0;
  }
`
