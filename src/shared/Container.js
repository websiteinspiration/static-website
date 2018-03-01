import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../utils/style/media'

const narrower = p => p.theme.narrowerContainer
const normal = p => p.theme.normalContainer
const wider = p => p.theme.widerContainer

const Container = styled.div`
  width: 100%;
  max-width: ${p => (p.wide ? wider : p.narrow ? narrower : normal)}px;
  margin: 0 auto;

  ${mobile(css`
    padding: 0 25px;
  `)};
`

export default Container
