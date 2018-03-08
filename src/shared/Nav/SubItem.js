import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

const NavItem = props => {
  if (props.to) {
    return <ItemLink {...props} />
  } else {
    return <ItemA {...props} />
  }
}

NavItem.propTypes = {
  children: PropTypes.string,
  active: PropTypes.bool,
  sticky: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  subItemsClassName: PropTypes.any,
}

export default NavItem

const styles = css`
  display: block;
  position: relative;
  line-height: 1.2;
  padding: 7px 7px;

  font-size: ${p => p.theme.fontTiny}px;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  transition: all 120ms ease-out;
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.blue};
    background: rgba(0, 0, 0, 0.03);
  }
`

const ItemA = styled.a`
  ${styles};
`
const ItemLink = styled(Link)`
  ${styles};
`

export const NavSubItemsWrapper = styled.div`
  position: absolute;
  width: 150px;
  height: auto;
  padding: 10px 10px;
  left: 50%;
  margin-left: -75px;
  background: white;
  z-index: 999;
  transform: scale(0);
  opacity: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform-origin: center -5%;
  transition: all 150ms cubic-bezier(0.25, 0.46, 0.45, 1.1);

  &::before {
    content: '';
    border: 7px solid white;
    border-bottom-color: transparent;
    border-right-color: transparent;
    transform: rotate(45deg);
    position: absolute;
    top: -7px;
    left: 50%;
    margin-left: -4px;
  }
`
