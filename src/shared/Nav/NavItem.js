import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

const NavItem = ({ active, sticky, ...props }) => (
  <Wrapper active={active} sticky={sticky} {...props} />
)

export default NavItem

const Wrapper = styled(Link)`
  position: relative;
  height: ${p => p.theme.innerNavHeight}px;
  line-height: ${p => p.theme.innerNavHeight}px;
  padding-right: 12px;
  padding-left: 12px;
  margin-left: 12px;

  font-size: ${p => p.theme.fontTiny}px;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: ${p => (p.sticky ? 'black' : 'white')};
  transition: all 120ms ease-out;
  cursor: pointer;

  /* Active indicator border */
  &:after {
    height: 2px;
    width: 100%;
    background-image: linear-gradient(-180deg, #79c6f0 0%, #4494dd 100%);
    /* stick to the bottom */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  /* Active style when it's sticky and when it's not */
  ${({ active, sticky }) => {
    if (sticky) {
      // Styles when sticky mode is enabled
      return active
        ? css`
            font-weight: 700;
            &:after {
              content: '';
            }
          `
        : css`
            font-weight: normal;
          `
    } else {
      // When it's not sticky mode
      return active
        ? css`
            font-weight: 700;
          `
        : css`
            font-weight: 600;
          `
    }
  }}};
`
