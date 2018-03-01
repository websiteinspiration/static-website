import React from 'react'

// Local
import Seo from '../shared/Seo'
import Footer from '../shared/Footer'
import Header from '../App/talent/Header'
import TalentBenefits from '../App/talent/TalentBenefits'
import FeatureAndQuotes from '../App/talent/FeatureAndQuotes'
import TalentSteps from '../App/talent/TalentSteps'
import JoinCommunity from '../App/JoinCommunity'
import JoinCommunityBg from '../App/JoinCommunity/Bg'

const IndexPage = () => (
  <div>
    <Seo
      pageTitle="Top technology jobs in Germany,Netherlands and Europe"
      description="Honeypot is Europe’s tech job platform for Software Developers, DevOps, Data Scientists, Product Owners, QA and Engineering Leaders"
    />

    <Header />
    <TalentBenefits />
    <FeatureAndQuotes />

    {/* Both share one background */}
    <JoinCommunityBg>
      <TalentSteps />
      <JoinCommunity />
    </JoinCommunityBg>

    <Footer />
  </div>
)

export default IndexPage
