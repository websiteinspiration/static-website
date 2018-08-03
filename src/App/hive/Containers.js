import styled, { css } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  max-width: 860px;
  ${p =>
    p.min &&
    css`
      min-height: ${p.min}px;
    `};
`
