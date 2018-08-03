import styled, { css } from 'styled-components'

export const Container = styled.section``

export const LargeWrapper = styled.div`
  width: 100%;
  max-width: 860px;

  margin: 0 auto;
  padding-right: 22px;
  padding-left: 22px;
  overflow: hidden;

  ${p =>
    p.min &&
    css`
      min-height: ${p.min}px;
    `};
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 690px;

  margin: 0 auto;
  padding-right: 22px;
  padding-left: 22px;
  overflow: hidden;

  ${p =>
    p.min &&
    css`
      min-height: ${p.min}px;
    `};
`
