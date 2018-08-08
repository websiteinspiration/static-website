import styled, { css } from 'styled-components'
import { mobile } from '../../utils/style/media'

export const Container = styled.section``

export const LargeWrapper = styled.div`
  width: 100%;
  max-width: 860px;

  margin: 0 auto;
  overflow: hidden;

  ${mobile(css`
    padding-right: 22px;
    padding-left: 22px;
  `)};

  ${p =>
    p.min &&
    css`
      min-height: ${p.min}px;
    `};
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 0 auto;

  overflow: hidden;

  ${mobile(css`
    padding-right: 22px;
    padding-left: 22px;
  `)};

  ${p =>
    p.min &&
    css`
      min-height: ${p.min}px;
    `};
`
