import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../../utils/style/media'

const Button = styled.a`
  height: 36px;
  line-height: 1.3;
  padding-top: 1px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 26px;

  background: ${p =>
    p.color === 'blue'
      ? '#0066CE'
      : p.color === 'yellow' ? '#f6c724' : p.color};
  color: ${p => (p.color === 'blue' ? '#fff' : '#0066CE')};
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  white-space: nowrap;
  font-size: ${p => p.fontSize || 13}px;
  font-weight: 900;
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

  padding: 0 26px;

  ${mobile(css`
    padding: 0 ${p => p.sidePadding || 55}px;

    height: 45px;
    padding: ${p => (p.normalPadding ? `0 32px` : `0 55px`)};
  `)};
`

export default Button
