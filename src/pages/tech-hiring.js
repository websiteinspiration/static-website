import React from 'react'

// Local
import Seo from '../shared/Seo'
import Footer from '../shared/Footer'
import JoinCommunity from '../shared/JoinCommunity'
import JoinCommunityBg from '../shared/JoinCommunity/Bg'
import Header from '../App/tech-hiring/Header'
import Benefits from '../App/tech-hiring/Benefits'
import Mission from '../App/tech-hiring/Mission'
import Plans from '../App/tech-hiring/Plans'
import FeatureAndQuotes from '../App/tech-hiring/FeatureAndQuotes'

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
