import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Motion, spring } from 'react-motion'

// Utilities
import theme from '../../utils/style/theme'
import { mobile } from '../../utils/style/media'

// Images
import zalando from '../../static/logos/zalando.svg'
import travisCi from '../../static/logos/Travisci-logo.svg'
import zenmate from '../../static/logos/Zenmate-logo.svg'
import n26 from '../../static/logos/N26-logo.svg'
import helping from '../../static/logos/Helpling-logo.svg'
import onefootball from '../../static/logos/onefootball.svg'
import zeiss from '../../static/logos/zeiss.png'
import xing from '../../static/logos/XING.png'
import kauferportal from '../../static/logos/kauferportal.png'
import catawiki from '../../static/logos/catawiki.png'
import ayden from '../../static/logos/ayden.png'
import aperto from '../../static/logos/Aperto.png'

// Local
import I18n from '../I18n'

class Companies extends PureComponent {
  state = {
    isMobile: false,
    hovered: false,
    rightHandleHovered: false,
    leftHandleHovered: false,
    // Sizes
    containerWidth: 0,
    logosRegularLeft: 0,
    // - For animation (the only source of truth)
    targetOffset: 0,
  }

  logosWrapperWidth = 2650
  middleArea = theme.narrowerContainer + 40
  step = 250

  render() {
    const {
      containerWidth,
      logosRegularLeft,
      targetOffset,
      hovered,
    } = this.state

    return (
      <div>
        <Wrapper
          style={{ width: containerWidth }}
          onMouseEnter={this.mouseEntered}
          onMouseLeave={this.mouseLeft}
        >
          <Motion
            defaultStyle={{ offset: logosRegularLeft }}
            style={{
              offset: spring(targetOffset, { stiffness: 90, damping: 25 }),
            }}
          >
            {({ offset }) => (
              <LogosWrapper
                style={{
                  transform: `translateX(${offset}px)`,
                  width: this.logosWrapperWidth,
                }}
              >
                <Logos />
              </LogosWrapper>
            )}
          </Motion>

          {hovered && (
            <Handle
              position="right"
              onMouseLeave={() => this.setState({ rightHandleHovered: false })}
              onMouseEnter={() => {
                this.setState(
                  { rightHandleHovered: true },
                  this.triggerSideAnimation
                )
              }}
            />
          )}

          {hovered && (
            <Handle
              position="left"
              onMouseLeave={() => this.setState({ leftHandleHovered: false })}
              onMouseEnter={() => {
                this.setState(
                  { leftHandleHovered: true },
                  this.triggerSideAnimation
                )
              }}
            />
          )}
        </Wrapper>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('resize', this.resized)
    this.updateSizes()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resized)
  }

  resized = () => {
    this.setState(this.calculateSizes())
  }

  updateSizes = () => {
    this.setState(this.calculateSizes())
  }

  calculateSizes = givenHovered => {
    const { hovered } = this.state
    const windowWidth = window.innerWidth
    const equalSideArea = (windowWidth - this.middleArea) / 2

    let sizes = {
      containerWidth: equalSideArea + this.middleArea,
      logosRegularLeft: equalSideArea,
    }

    if (givenHovered === false || !hovered) {
      sizes.targetOffset = equalSideArea
    }

    return sizes
  }

  mouseEntered = () => {
    this.setState({ hovered: true, targetOffset: 0 })
  }

  mouseLeft = () => {
    this.setState(state => ({
      hovered: false,
      targetOffset: state.logosRegularLeft,
    }))
  }

  triggerSideAnimation = () => {
    this.sideAnimationStep()
  }

  sideAnimationStep = () => {
    const {
      leftHandleHovered,
      rightHandleHovered,
      targetOffset,
      containerWidth,
    } = this.state

    if (!rightHandleHovered && !leftHandleHovered) {
      return
    }

    const nextTargetOffset = rightHandleHovered
      ? targetOffset - this.step
      : targetOffset + this.step

    if (leftHandleHovered) {
      if (targetOffset >= 0) {
        return
      } else if (nextTargetOffset >= 0) {
        this.setState({ targetOffset: 0 })
        return
      }
    }

    if (rightHandleHovered) {
      const offsetEnd =
        (this.logosWrapperWidth - containerWidth) * -1 - 150 /* mascot covers */

      if (targetOffset <= offsetEnd) {
        return
      } else if (nextTargetOffset <= offsetEnd) {
        this.setState({ targetOffset: offsetEnd })
        return
      }
    }

    this.setState({ targetOffset: nextTargetOffset })
    window.setTimeout(this.sideAnimationStep, 500)
  }
}

export default Companies

class Logos extends PureComponent {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div>
        <Logo>
          <img src={zalando} draggable={false} />
        </Logo>
        <Logo>
          <img src={travisCi} draggable={false} />
        </Logo>
        <Logo>
          <img src={n26} draggable={false} />
        </Logo>
        <Logo>
          <img src={onefootball} draggable={false} />
        </Logo>
        <Logo>
          <img src={zenmate} draggable={false} />
        </Logo>
        <Logo>
          <img src={helping} draggable={false} />
        </Logo>
        <Logo>
          <img src={zeiss} draggable={false} height="30" />
        </Logo>
        <Logo>
          <img src={xing} draggable={false} height="40" />
        </Logo>
        <Logo>
          <img src={kauferportal} draggable={false} height="35" />
        </Logo>
        <Logo>
          <img src={catawiki} draggable={false} height="35" />
        </Logo>
        <Logo>
          <img src={ayden} draggable={false} height="38" />
        </Logo>
        <Logo>
          <img src={aperto} draggable={false} height="33" />
        </Logo>
      </div>
    )
  }
}

export const CompaniesNote = () => (
  <I18n ns="shared">{t => <Note>{t('companies-hiring')}</Note>}</I18n>
)

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`

const Logo = styled.div`
  display: inline-block;
  margin-right: 60px;
  opacity: 0.7;
  transition: opacity 120ms;
  -webkit-user-drag: none;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 1;
  }

  img {
    display: block;
    margin: 0;
    max-height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  ${mobile(css`
    margin-right: 30px;
    margin-bottom: 20px;
    height: 25px;
  `)};
`

const LogosWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 25px;
  padding-right: 20px;
  padding-left: 20px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${mobile(css`
    width: auto;
  `)};
`

const Note = styled.p`
  margin: 18px 0 0 0;
  font-size: ${p => p.theme.fontBase}px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`

const Handle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;

  ${p =>
    p.position === 'right'
      ? css`
          right: 60px;
          cursor: e-resize;
        `
      : p.position === 'left'
        ? css`
            left: 0;
            cursor: w-resize;
          `
        : null};
`
