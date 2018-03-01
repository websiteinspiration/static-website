import { css } from 'styled-components'

export const mobileMediaString = `(max-width: 800px)`

export const mobile = body => css`
  @media (max-width: 800px) {
    ${body};
  }
`

export const notMobile = body => css`
  @media (min-width: 800px) {
    ${body};
  }
`

export const tablet = body => css`
  @media (min-width: 800px) and (max-width: 1024px) {
    ${body};
  }
`

export const desktop = body => css`
  @media (min-width: 1024px) {
    ${body};
  }
`
