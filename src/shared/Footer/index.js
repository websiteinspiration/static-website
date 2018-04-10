import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

// Local
import Container from '../../shared/Container'
import { Instagram, Twitter, Facebook, LinkedIn, Github } from './vectors'

// Images
import logo from '../../static/honeypot-white-logo.svg'
import { mobile } from '../../utils/style/media'

const Footer = props => (
  <Wrapper {...props}>
    <Container wide={true}>
      <Columns>
        <Column fullOnMobile={true}>
          <Logo>
            <Link to="/">
              <img src={logo} alt="Honeypot logo" />
            </Link>
          </Logo>
        </Column>
        <Column>
          <Title>Talent</Title>
          <LinkItem href="/#success-stories">Success Stories</LinkItem>
        </Column>
        <Column>
          <Title>Employers</Title>
          <LinkItem href="/tech-hiring#plans">Pricing</LinkItem>
          <LinkItem href="/tech-hiring#user-stories">User Stories</LinkItem>
        </Column>
        <Column>
          <Title>Community</Title>
          <LinkItem href="/#ss">Events</LinkItem>
          <LinkItem href="/#ss">GraphQL Europe</LinkItem>
          <LinkItem href="/#ss">Blog</LinkItem>
          <LinkItem href="/#ss">FAQ</LinkItem>
          <LinkItem href="/#ss">Careers</LinkItem>
        </Column>
        <Column>
          <LinkItem href="/#ss" bold={true}>
            About
          </LinkItem>
          <LinkItem href="/#ss" bold={true}>
            Terms of Legal Notice
          </LinkItem>
          <LinkItem href="/#ss" bold={true}>
            Privacy Policy
          </LinkItem>
          <LinkItem href="/#ss" bold={true}>
            AutoTech
          </LinkItem>
        </Column>
        <Column>
          <Social>
            <a href="https://instagram.com/honeypotio">
              <Instagram />
            </a>
            <a href="https://twitter.com/honeypotio">
              <Twitter />
            </a>
            <a href="https://facebook.com/honeypotio">
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/company/honeypot">
              <LinkedIn />
            </a>
            <a href="https://github.com/honeypotio">
              <Github />
            </a>
          </Social>
        </Column>
      </Columns>
    </Container>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  padding: 50px 0 60px 0;
  background-image: linear-gradient(159deg, #007bc2 0%, #0062bf 80%);
  color: white;
`

const Logo = styled.div`
  height: ${p => p.theme.logoHeight}px;
`

const Columns = styled.div`
  display: flex;

  ${mobile(css`
    flex-wrap: wrap;
  `)};
`

const Column = styled.div`
  flex: 1 1 auto;

  ${mobile(css`
    padding-right: 20px;
    padding-bottom: 40px;

    ${p =>
      p.fullOnMobile &&
      css`
        width: 100%;
      `};
  `)};
`

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
`

const LinkItem = styled.a`
  display: block;
  font-size: 14px;
  margin-bottom: 12px;
  color: white;
  text-decoration-color: transparent;
  transition: text-decoration-color 90ms ease;

  &:hover {
    text-decoration-color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  ${p =>
    p.bold &&
    css`
      font-weight: bold;
    `};
`

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 11px;
  }
`
