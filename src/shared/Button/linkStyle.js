import { css } from 'styled-components'

export default css`
  display: inline-block;
  padding: 9px 38px;
  font-weight: bold;
  font-size: ${p => p.theme.fontBase};

  color: ${p => (p.white ? `white` : p.theme.blue)};
  border-radius: 20px;
  background: transparent;
  transition: all 120ms ease-out;
  cursor: pointer;
`
