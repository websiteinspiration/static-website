import styled from 'styled-components'

const SectionTitle = styled.h2`
  margin-top: 55px;
  font-weight: 500;
  font-size: 38px;
  color: ${p => (p.color === 'dark' ? 'black' : 'white')};
  letter-spacing: 1.58px;
  text-align: center;
  line-height: 65px;
`

export default SectionTitle
