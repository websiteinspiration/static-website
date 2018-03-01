import React from 'react'

// Local
import Seo from '../shared/Seo'
import Footer from '../shared/Footer'
import TalentBenefits from '../App/talent/TalentBenefits'
import Header from '../App/tech-employer/Header'
import FeatureAndQuotes from '../App/tech-employer/FeatureAndQuotes'
import TalentSteps from '../App/talent/TalentSteps'
import JoinCommunity from '../App/JoinCommunity'
import JoinCommunityBg from '../App/JoinCommunity/Bg'

const TechEmployerPage = () => (
  <div>
    <Seo
      pageTitle="Hire IT talents in Germany and Netherlands"
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

export default TechEmployerPage
