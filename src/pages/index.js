import React from 'react'
import styled from 'styled-components'

// Local
import Seo from '../shared/Seo'
import Nav from '../App/Nav'

const IndexPage = () => (
  <div>
    <Seo
      pageTitle="Top technology jobs in Germany,Netherlands and Europe"
      description="Honeypot is Europe’s tech job platform for Software Developers, DevOps, Data Scientists, Product Owners, QA and Engineering Leaders"
    />

    <Header>
      <Nav />

      <h1>Honeypot!</h1>
      <p>Now go build something great.</p>
    </Header>
  </div>
)

export default IndexPage

const Header = styled.header`
  /* Rectangle 3: */
  background-image: linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%);
  color: white;
`
