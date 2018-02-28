import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

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

  /* Active style when it's sticky and when it's not */
  ${({ outline, sticky, theme }) => {
    if (sticky) {
      // Styles when sticky mode is enabled
      return outline
        ? css`
            color: ${theme.blue};
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
            color: ${theme.blue};
            background: rgba(255, 255, 255, 0.9);
          `
    }
  }}};
`
