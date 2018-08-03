import styled from 'styled-components'

const Button = styled.a`
  display: block;
  width: 131px;
  height: 36px;
  line-height: 36px;
  margin-top: 26px;

  background: ${p =>
    p.color === 'blue'
      ? '#0066CE'
      : p.color === 'yellow' ? '#f6c724' : p.color};
  color: ${p => (p.color === 'blue' ? '#fff' : '#0066CE')};
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.43px;
  transition: background 150ms ease-in-out;

  &:hover {
    background: ${p =>
      p.color === 'blue'
        ? '#0A55A1'
        : p.color === 'yellow' ? `#EAB808` : p.color};
  }
`

export default Button
