import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'

// Images
import blueBullet from '../../static/graphics/blue-bullet.svg'

export default props => <Wrapper {...props} />

const Wrapper = styled.div`
  flex: 1 1 auto;
  font-size: 16px;
  line-height: 1.85;

  ul {
    padding-top: 5px;
    margin-left: 15px;
  }

  li {
    list-style-image: url(${blueBullet});
    padding-left: 14px;
    margin-bottom: 5px;
  }
`

/**
 * Wrapper around TextContent and LangSwitch on the side
 */
export const FlexWrapper = styled.div`
  display: flex;

  ${mobile(css`
    flex-direction: column;
  `)};
`
