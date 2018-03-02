import styled from 'styled-components'

const narrower = p => p.theme.narrowerContainer
const normal = 970
const wider = 1120

const Container = styled.div`
  max-width: ${p => (p.wide ? wider : p.narrow ? narrower : normal)}px;
  margin: 0 auto;
  padding: 0 25px;
  box-sizing: content-box;

  > * {
    box-sizing: border-box;
  }
`

export default Container
