import styled from 'styled-components'

export default styled.h1`
  position: relative;
  padding-bottom: 25px;
  margin: 20px 0 20px 0;
  text-align: center;
  font-size: ${p => p.theme.font22}px;
  font-weight: bold;
  color: black;

  &:after {
    content: '';
    width: 50px;
    height: 5px;
    border-radius: 5px;
    background: ${p => p.theme.lightGray};
    /* center */
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
  }
`
