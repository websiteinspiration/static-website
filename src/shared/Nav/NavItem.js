import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

const NavItem = props => {
  if (props.to) {
    return <ItemLink {...props} />
  } else if (props.href) {
    return <ItemA {...props} />
  } else {
    return <ItemDiv {...props} />
  }
}

NavItem.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  sticky: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  subItemsClassName: PropTypes.any,
}

export default NavItem

const styles = css`
  position: relative;
  min-height: ${p => p.theme.innerNavHeight}px;
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
  &::after {
    content: '';
    height: 2px;
    width: 0;
    background-image: linear-gradient(-180deg, #79c6f0 0%, #4494dd 100%);
    /* stick to the bottom */
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 0;
    transition: all 100ms ease;
  }

  &:hover {
    ${p =>
      p.subItemsClassName
        ? css`
            ${p.subItemsClassName} {
              opacity: 1;
              transform: scale(1);
            }
          `
        : css`
            &::after {
              width: 100%;
              left: 0;
            }
          `}
  }

  ${mobile(css`
    margin-left: 0;
    margin-bottom: 5px;
  `)}

  /* Active style when it's sticky and when it's not */
  ${({ active, sticky }) => {
    if (sticky) {
      // Styles when sticky mode is enabled
      return active
        ? css`
            font-weight: 700;
            &:after {
              width: 100%;
              left: 0;
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
            &:after {
              background: white;
            }
          `
        : css`
            font-weight: 600;
            &:after {
              background: white;
            }
          `
    }
  }}};
`

const ItemA = styled.a`
  ${styles};
`
const ItemLink = styled(Link)`
  ${styles};
`
const ItemDiv = styled.div`
  ${styles};
`
