import styled from 'styled-components'

export const normalWidth = 840
export const widerWidth = 920

const Container = styled.div`
  max-width: ${p => (p.wide ? widerWidth : normalWidth)}px;
  margin: 0 auto;
  padding: 0 25px;
  box-sizing: content-box;
`

export default Container
