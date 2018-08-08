import styled from 'styled-components'

const Paragraph = styled.p`
  margin-top: ${p => (p.top ? p.top : 0)}px;
  color: ${p => (p.textColor ? p.textColor : 'white')};
  max-width: ${p => (p.maxWidth ? p.maxWidth : '540px')};
  font-size: 16px;
  letter-spacing: 0.53px;
  line-height: 27px;
`

export default Paragraph
