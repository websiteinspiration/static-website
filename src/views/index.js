import React from 'react'

// Local
import Seo from '../shared/Seo'
import Footer from '../shared/Footer'
import JoinCommunity from '../shared/JoinCommunity'
import JoinCommunityBg from '../shared/JoinCommunity/Bg'
import Header from '../App/talent/Header'
import TalentBenefits from '../App/talent/TalentBenefits'
import FeatureAndQuotes from '../App/talent/FeatureAndQuotes'
import TalentSteps from '../App/talent/TalentSteps'

const IndexPage = () => (
  <div>
    <Seo
      pageTitle="Top technology jobs in Germany,Netherlands and Europe"
      description="Honeypot is Europe’s tech job platform for Software Developers, DevOps, Data Scientists, Product Owners, QA and Engineering Leaders"
    />

    <Header />
    <TalentBenefits />
    <FeatureAndQuotes />

    <JoinCommunityBg top="-60%">
      {/* Both share one background */}
      <TalentSteps />
      <JoinCommunity />
    </JoinCommunityBg>

    <Footer />
  </div>
)

export default IndexPage
