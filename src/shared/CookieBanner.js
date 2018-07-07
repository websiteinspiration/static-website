import React from 'react'
import styled from 'styled-components'

// Local
import CloseIcon from '../vectors/Close'

export default class CookieBanner extends React.PureComponent {
  keyInStorage = 'dismissedCookieBanner'
  state = {
    dismissed: false,
  }

  componentDidMount() {
    const dismissed =
      typeof localStorage !== 'undefined'
        ? localStorage[this.keyInStorage]
        : false

    this.setState({ dismissed })
  }

  dismissed = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage[this.keyInStorage] = true
    }

    this.setState({ dismissed: true })
  }

  render() {
    return this.state.dismissed ? null : (
      <Wrapper>
        By using this website you agree to our <a href="/privacy">policy</a> on
        cookies.
        <CloseBtn onClick={this.dismissed}>
          <CloseIcon />
        </CloseBtn>
      </Wrapper>
    )
  }
}

// Styles
const Wrapper = styled.aside`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  padding: 10px 14px 8px 14px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  color: #555;

  a {
    color: ${p => p.theme.blue};
  }
`

const CloseBtn = styled.button`
  display: inline-block;
  margin-left: 15px;
  padding: 3px;
  line-height: 1;
  vertical-align: middle;

  border: none;
  background: none;
  opacity: 0.4;
  transition: opacity 100ms ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
