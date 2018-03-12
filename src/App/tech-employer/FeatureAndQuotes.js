import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'
import Anchor from '../../shared/Anchor'

// Images
import featuresBg from '../../static/graphics/curved-bg-pink.svg'
import photo1 from '../../static/images/maud-aretsen.jpg'
import photo2 from '../../static/images/dineke-mulder.jpg'
import photo3 from '../../static/images/thijs.jpg'

const EmployerFeaturesAndQuotes = () => (
  <div>
    <Anchor id="user-stories" />
    <SharedFeatureAndQuotes rows={featuresAndQuotes} bg={featuresBg} />
  </div>
)

export default EmployerFeaturesAndQuotes

const featuresAndQuotes = [
  {
    red: true,
    textsFlexAlign: 'flex-end',
    title: 'Innovative Recruitment of Tech Talent',
    desc: 'The workplace is changing. Honeypot is candidate-led recruitment.',
    quote: `Very innovative way of recruitment. High quality candidates. The profiles we look for continuously change and with Honeypot I don't have to inform an agency, because we are free to approach the people that are interesting for us at any time`,
    quotee: 'Maud Aertsen',
    position: 'Talent Manager',
    company: 'MediaMonks',
    photoUrl: photo1,
    littleRectColor: p => p.theme.blue,
  },
  {
    red: true,
    reverse: true,
    title: 'Fill your Pipeline with Pre-qualified Candidates',
    desc: 'Find the best tech talent on Honeypot. Fast.',
    quote: `The platform is well designed and easy to use. We've hired great frontend and backend developers through Honeypot!`,
    quotee: 'Dineke Mulder',
    position: 'Global Recruiter',
    company: 'Adyen',
    photoUrl: photo2,
    littleRectColor: p => p.theme.blue,
  },
  {
    red: true,
    title: 'Build your Employer Brand',
    desc:
      'Find candidates when they want to be found! No more brand-damaging direct sourcing.',
    quote: `We love Honeypot, not only for their refreshing view on developer recruitment, but also for their active participation in the developer community.`,
    quotee: 'Thijs Slijkhuis',
    position: 'CTO',
    company: 'United Wardrobe',
    photoUrl: photo3,
    littleRectColor: p => p.theme.blue,
  },
]
