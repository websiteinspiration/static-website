import React from 'react'

// Local
import Seo from '../shared/Seo'
import MainHeader from '../App/MainHeader'
import TalentBenefits from '../App/TalentBenefits'
import FeatureAndQuotes from '../App/FeatureAndQuotes'

const IndexPage = () => (
  <div>
    <Seo
      pageTitle="Top technology jobs in Germany,Netherlands and Europe"
      description="Honeypot is Europe’s tech job platform for Software Developers, DevOps, Data Scientists, Product Owners, QA and Engineering Leaders"
    />

    <MainHeader />
    <TalentBenefits />
    <FeatureAndQuotes />
  </div>
)

export default IndexPage
