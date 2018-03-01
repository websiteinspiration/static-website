import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

const NavButton = props => {
  if (props.to) {
    return <ButtonLink {...props} />
  } else if (props.href) {
    return <ButtonA {...props} />
  } else {
    return <Button {...props} />
  }
}

NavButton.propTypes = {
  outline: PropTypes.bool,
  sticky: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default NavButton

const styles = css`
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
  ${({ outline, sticky, theme }) => {
    if (sticky) {
      // Styles when sticky mode is enabled
      return outline
        ? css`
            color: ${theme.blue};
            box-shadow: inset 0 0 0 2px ${theme.blue};
          `
        : css`
            color: white;
            background-size: 200% 200%;
            background-image: linear-gradient(
              -200deg,
              #76c2ee 0%,
              #418fd9 50%,
              #76c2ee 100%
            );

            &:hover {
              background-position: 100%;
            }
          `
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

const Button = styled.button`
  /* Remove default button style */
  background: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;

  ${styles};
`
const ButtonA = styled.a`
  ${styles};
`
const ButtonLink = styled(Link)`
  ${styles};
`
