import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

const NavButton = ({ outline = false, sticky, ...props }) => (
  <Wrapper outline={outline} sticky={sticky} {...props} />
)

export default NavButton

const Wrapper = styled(Link)`
  box-sizing: border-box;
  padding: 7px 20px;
  margin-left: 10px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-decoration: none;

  border-radius: 16px;
  color: ${p => (p.sticky ? 'black' : 'white')};
  transition: all 120ms ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:first-child {
    margin-left: 0;
  }

  ${mobile(css`
    margin-left: 0;
    margin-bottom: 10px;
  `)}

  /* Active style when it's sticky and when it's not */
  ${({ outline, sticky }) => {
    if (sticky) {
      // Styles when sticky mode is enabled
      return outline
        ? css`
            color: currentColor;
            box-shadow: inset 0 0 0 2px currentColor;
          `
        : css``
    } else {
      // When it's not sticky mode
      return outline
        ? css`
            color: white;
            box-shadow: inset 0 0 0 2px currentColor;
          `
        : css`
            color: currentColor;
            background: rgba(255, 255, 255, 0.9);
          `
    }
  }}};
`
