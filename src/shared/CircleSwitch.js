import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

const CircleSwitch = ({ children, ...props }) => {
  let Wrapper
  if (props.href) {
    Wrapper = WrapperA
  } else if (props.to) {
    Wrapper = WrapperLink
  } else {
    Wrapper = WrapperButton
  }

  return (
    <Wrapper {...props}>
      <span>{children}</span>
    </Wrapper>
  )
}

CircleSwitch.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

export default CircleSwitch

const styles = css`
  display: inline-block;
  width: ${p => p.theme.circleSwitchSize}px;
  height: ${p => p.theme.circleSwitchSize}px;
  line-height: ${p => p.theme.circleSwitchSize}px;
  border-radius: 38px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-appearance: none;
  text-decoration: none;
  outline: 0;

  &:active {
    transform: scale(0.95);
  }

  ${p =>
    p.outline
      ? css`
          color: ${p.theme.blue};
          box-shadow: inset 0 0 0 2px ${p.theme.blue};

          &:focus {
            box-shadow: inset 0 0 0 4px ${p => p.theme.blue};
          }
        `
      : css`
          color: white;
          background: ${p.theme.blue};
        `};
`

const WrapperButton = styled.button`
  ${styles};
`

const WrapperA = styled.a`
  ${styles};
`

const WrapperLink = WrapperA.withComponent(Link)
