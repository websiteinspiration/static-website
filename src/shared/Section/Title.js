import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const littleRect = css`
  padding-bottom: 25px;

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

const Title = styled.h1`
  position: relative;
  margin: 20px 0 20px 0;
  text-align: ${p => p.align};
  line-height: 1.5;
  font-size: ${p => p.theme.font22}px;
  font-weight: bold;
  color: black;

  ${p => (p.rect ? littleRect : null)};
`

Title.defaultProps = {
  align: 'center',
  rect: true,
}

Title.propTypes = {
  align: PropTypes.oneOf(['center', 'right', 'left']),
  rect: PropTypes.bool /* control whether to show the little rect */,
}

export default Title
