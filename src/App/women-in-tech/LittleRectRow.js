import React from 'react'
import styled from 'styled-components'

export default props => (
  <Row {...props}>
    <LittleReact />
  </Row>
)

const Row = styled.div`
  flex: 1 1 auto;
  padding: 10px 0;
`

const LittleReact = styled.span`
  display: inline-block;
  width: 50px;
  height: 5px;

  opacity: 0.5;
  background: #bdbdbd;
  border-radius: 5px;
`
