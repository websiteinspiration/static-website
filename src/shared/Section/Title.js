import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Title = styled.h1`
  position: relative;
  padding-bottom: 25px;
  margin: 20px 0 20px 0;
  text-align: ${p => p.align};
  line-height: 1.5;
  font-size: ${p => p.theme.font22}px;
  font-weight: bold;
  color: black;

  &:after {
    content: '';
    width: 50px;
    height: 5px;
    border-radius: 5px;
    background: ${p => p.theme.lightGray};
    /* align */
    position: absolute;
    bottom: 0;
    ${({ align }) =>
      align === 'center'
        ? css`
            left: 50%;
            margin-left: -25px;
          `
        : align === 'left'
          ? css`
              left: 0;
            `
          : css`
              right: 0;
            `};
  }
`

Title.defaultProps = {
  align: 'center',
}

Title.propTypes = {
  align: PropTypes.oneOf(['center', 'right', 'left']),
}

export default Title
