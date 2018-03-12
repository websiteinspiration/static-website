import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'
import Anchor from '../../shared/Anchor'
import Button from '../../shared/Button'

// Images
import featuresBg from '../../static/graphics/curved-bg-pink.svg'
import photo1 from '../../static/images/maud-aretsen.jpg'
import photo2 from '../../static/images/dineke-mulder.jpg'
import photo3 from '../../static/images/thijs.jpg'
// -- quote cards
import cardPhoto1 from '../../static/images/raphael.jpg'
import cardPhoto2 from '../../static/images/selin.jpg'
import cardPhoto3 from '../../static/images/rebecca.jpg'
import cardPhoto4 from '../../static/images/michal.jpg'

const EmployerFeaturesAndQuotes = () => (
  <div>
    <Anchor id="user-stories" />
    <SharedFeatureAndQuotes
      bg={featuresBg}
      rows={featuresAndQuotes}
      quoteCards={quoteCards}
      renderButton={() => (
        <Button
          href="https://www.honeypot.io/users/sign_up"
          style={{ paddingRight: 58, paddingLeft: 58 }}
        >
          Join
        </Button>
      )}
    />
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

const quoteCards = [
  {
    quote: `I logged into Honeypot, screened ten profiles, and within two weeks found the ideal German-speaking candidate who we ended up hiring for our Java Developer position.`,
    quotee: 'Raphael Seitz',
    quoteeFirstLine: 'Talent Manager',
    quoteeSecondLine: 'Optivo',
    photoUrl: cardPhoto1,
  },
  {
    quote: `We love Honeypot because it has put everything into one place and the team behind it is great! Thank you for creating a platform that's so easy to use and helping us hire a kickass developer.`,
    quotee: 'Selin Songur',
    quoteeFirstLine: 'Tech Recruiting',
    quoteeSecondLine: 'SoundCloud',
    photoUrl: cardPhoto2,
  },
  {
    quote: `Honeypot is easy and efficient. It is a great tool for any company looking to hire good, international developers in a short amount of time and at a very reasonable price.`,
    quotee: 'Rebecca Belknap',
    quoteeFirstLine: 'Talent Manager',
    quoteeSecondLine: 'Payconiq',
    photoUrl: cardPhoto3,
  },
  {
    quote: `Thanks to Honeypot and their match-making process, we were able to hire our Frontend Developer in only 8 days!`,
    quotee: 'Michal Franczak',
    quoteeFirstLine: 'Head of IT',
    quoteeSecondLine: 'Vimeda',
    photoUrl: cardPhoto4,
  },
]
