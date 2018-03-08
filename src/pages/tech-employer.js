import React from 'react'

// Local
import Seo from '../shared/Seo'
import Footer from '../shared/Footer'
import Header from '../App/tech-employer/Header'
import Benefits from '../App/tech-employer/Benefits'
import Mission from '../App/tech-employer/Mission'
import Plans from '../App/tech-employer/Plans'
import FeatureAndQuotes from '../App/tech-employer/FeatureAndQuotes'
import JoinCommunity from '../App/JoinCommunity'
import JoinCommunityBg from '../App/JoinCommunity/Bg'

const TechEmployerPage = () => (
  <div>
    <Seo
      pageTitle="Hire IT talents in Germany and Netherlands"
      description="Honeypot is  the easiest way to hire Software Developers, DevOps Engineers, Data Scientists, Product Owners, QA Testers and Engineering Leaders."
    />

    <Header />
    <Benefits />
    <FeatureAndQuotes />
    <Mission />

    <JoinCommunityBg top="-1700%">
      {/* Both share one background */}
      <Plans />
      <JoinCommunity />
    </JoinCommunityBg>

    <Footer />
  </div>
)

export default TechEmployerPage
