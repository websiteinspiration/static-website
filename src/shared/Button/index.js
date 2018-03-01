import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

// Local
import buttonStyle from './buttonStyle'
import linkStyle from './linkStyle'

const Button = props => {
  if (props.href) {
    return <WrapperA {...props} />
  } else if (props.to) {
    return <WrapperLink {...props} />
  } else {
    return <WrapperButton {...props} />
  }
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  linkStyle: PropTypes.bool,
  white: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default Button

const common = css`
  ${p => (p.linkStyle ? linkStyle : buttonStyle)};
`

const WrapperButton = styled.button`
  border: none;
  outline: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0 0 0 3px ${p => p.theme.blue};
  }

  ${common};
`
const WrapperA = styled.a`
  ${common};
  text-decoration: none;
`

const WrapperLink = WrapperA.withComponent(Link)
