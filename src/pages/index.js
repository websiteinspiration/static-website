import React from 'react'

// Local
import Seo from '../shared/Seo'
import MainHeader from '../App/MainHeader'
import TalentBenefits from '../App/TalentBenefits'
import FeatureAndQuotes from '../App/FeatureAndQuotes'
import TalentSteps from '../App/TalentSteps'
import JoinCommunity from '../App/JoinCommunity'
import JoinCommunityBg from '../App/JoinCommunity/Bg'

const IndexPage = () => (
  <div>
    <Seo
      pageTitle="Top technology jobs in Germany,Netherlands and Europe"
      description="Honeypot is Europe’s tech job platform for Software Developers, DevOps, Data Scientists, Product Owners, QA and Engineering Leaders"
    />

    <MainHeader />
    <TalentBenefits />
    <FeatureAndQuotes />

    {/* Both share one background */}
    <JoinCommunityBg>
      <TalentSteps />
      <JoinCommunity />
    </JoinCommunityBg>
  </div>
)

export default IndexPage
