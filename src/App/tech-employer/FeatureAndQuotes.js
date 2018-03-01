import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'

// Images
import featuresBg from '../../static/graphics/curved-bg-pink.svg'
import photo1 from '../../static/images/rokas-niparavicius.jpg'
import photo2 from '../../static/images/tanja-heffner.jpg'
import photo3 from '../../static/images/janko-ferlic.jpg'

const IndexPage = () => (
  <SharedFeatureAndQuotes rows={featuresAndQuotes} bg={featuresBg} />
)

export default IndexPage

const featuresAndQuotes = [
  {
    smallQuote: true,
    textsFlexAlign: 'flex-end',
    title: 'Innovative Recruitment of Tech Talent',
    desc: 'The workplace is changing. Honeypot is candidate-led recruitment.',
    quote: `Very innovative way of Recruitment.
      High quality candidates. The profiles
      we look for continuously change and by
      Honeypot I don't have to inform an
      agency, because we are free to
      approach the people that are
      interesting for us at that particular time`,
    quotee: 'Name Surname',
    photoUrl: photo1,
    littleRectColor: p => p.theme.blue,
  },
  {
    reverse: true,
    smallQuote: true,
    title: 'Fill your Pipeline with Pre-qualified Candidates',
    desc: 'Find the best tech talent on Honeypot. Fast.',
    quote: `The platform is well designed and
      easy to use. We've hired great
      frontend and backend developers
      through Honeypot!`,
    quotee: 'Name Surname',
    photoUrl: photo2,
    littleRectColor: p => p.theme.blue,
  },
  {
    smallQuote: true,
    title: 'Build your Employer Brand.',
    desc:
      'Companies apply directly to you so you can compare offers side by side. No more job applications or clumsy back and forths with headhunters. ',
    quote: `We love Honeypot because it has put
      everything into one place and the team
      behind it is great! Thank you for creating
      a platform that's so easy to use and
      helping us hire a kickass developer`,
    quotee: 'Name Surname',
    photoUrl: photo3,
    littleRectColor: p => p.theme.blue,
  },
]
