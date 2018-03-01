import { css } from 'styled-components'

export default css`
  display: inline-block;
  padding: 9px 38px;
  font-weight: bold;
  font-size: ${p => p.theme.fontBase};

  color: ${p => (p.textColor ? p.textColor : p.white ? p.theme.blue : `white`)};
  background-image: ${p =>
    p.white
      ? `none`
      : `linear-gradient(-200deg, #76C2EE 0%, #418FD9 50%, #76C2EE 100%)`};
  background-color: ${p => (p.white ? `white` : `none`)};
  background-size: 200% 200%;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: all 100ms;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
    box-shadow: none;
    background-position: 100%;
  }

  &:active {
    transform: scale(0.95);
  }
`
