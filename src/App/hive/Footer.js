import React from 'react'
import styled, { css } from 'styled-components'

// Local
import { LargeWrapper } from './Containers'
import Nav from './Nav'
import photoBg1 from '../../static/about-bg.png'
import {
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  YouTube,
} from '../../vectors/social'

// Utils
import { mobile } from '../../utils/style/media'

const Header = () => (
  <FooterContainer>
    <NavWrapper>
      <Nav logo="honeypot" />
    </NavWrapper>
    <LargeWrapper>
      <FooterStack>
        <Co>© 2018 Honeypot GmbH</Co>

        <Social>
          <SocialLink href="https://www.linkedin.com/company/honeypot/">
            <LinkedIn />
          </SocialLink>
          <SocialLink href="https://twitter.com/honeypotio">
            <Twitter />
          </SocialLink>
          <SocialLink href="https://facebook.com/honeypotio">
            <Facebook />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/honeypot.io/">
            <Instagram />
          </SocialLink>
          <SocialLink href="https://www.youtube.com/channel/UCsUalyRg43M8D60mtHe6YcA">
            <YouTube />
          </SocialLink>
        </Social>
      </FooterStack>
    </LargeWrapper>
  </FooterContainer>
)

export default Header

// Styles
const FooterContainer = styled.footer`
  height: 220px;
  padding-bottom: 35px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  background: url(${photoBg1}) no-repeat 95% bottom,
    radial-gradient(47% 91%, #005ebe 49%, #0652a5 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mobile(css`
    padding-top: 50px;
  `)};
`

const NavWrapper = styled.div`
  ${mobile(css`
    display: none;
  `)};
`

const FooterStack = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `)};
`

const Co = styled.div`
  font-size: 13px;
  line-height: 1.77;
  font-weight: bold;
  color: white;

  ${mobile(css`
    font-size: 20px;
    font-weight: normal;
    order: 2;
    margin-top: 65px;
  `)};
`

const Social = styled.div`
  display: flex;
  justify-content: center;
`

const SocialLink = styled.a`
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }

  ${mobile(css`
    svg {
      height: 19px;
      width: auto;
    }
  `)};
`
