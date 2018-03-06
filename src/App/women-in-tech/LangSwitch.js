import React, { Component } from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/style/media'
import siteConfig from '../../../config/SiteConfig'

// Local
import CircleSwitch from '../../shared/CircleSwitch'
import Language from '../../shared/Language'

export default class LangSwitch extends Component {
  render() {
    const { langs, defaultLangKey } = siteConfig
    return (
      <Language>
        {currentLangKey => (
          <Wrapper>
            {langs.map(lang => (
              <SwitchWrapper key={lang}>
                <CircleSwitch
                  outline={currentLangKey !== lang}
                  to={this.getUrlForLang(lang, defaultLangKey)}
                >
                  {lang}
                </CircleSwitch>
              </SwitchWrapper>
            ))}
          </Wrapper>
        )}
      </Language>
    )
  }

  getUrlForLang(lang, defaultLang = '') {
    const url = `women-in-tech-2018`
    if (lang === defaultLang) {
      return `/${url}`
    }

    return `/${lang}/${url}`
  }
}

// Variables
const marginToText = 75

export const Placeholder = styled.div`
  flex: 0 0 auto;
  height: 1px;
  width: ${p => p.theme.circleSwitchSize}px;
  margin-right: ${marginToText}px;

  ${mobile(css`
    display: none;
  `)};
`

const Wrapper = styled.div`
  flex: 0 0 auto;
  padding-top: 10px;
  margin-right: ${marginToText}px;
  display: flex;
  flex-direction: column;

  ${mobile(css`
    flex-direction: row;
    padding-top: 0;
    margin-right: 0;
    margin-bottom: 20px;
  `)};
`

const SwitchWrapper = styled.div`
  margin-bottom: 10px;

  ${mobile(css`
    margin-bottom: 0;
    margin-right: 10px;
  `)};
`
