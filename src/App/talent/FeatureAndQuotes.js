import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'

// Images
import featuresBg from '../../static/graphics/curved-bg-lightblue.svg'
import photo1 from '../../static/images/peter_ringelmann.jpg'
import photo2 from '../../static/images/tanja-heffner.jpg'
import photo3 from '../../static/images/janko-ferlic.jpg'

const IndexPage = () => (
  <SharedFeatureAndQuotes
    rows={featuresAndQuotes}
    joinButton={true}
    bg={featuresBg}
  />
)

export default IndexPage

const featuresAndQuotes = [
  {
    smallQuote: true,
    textsFlexAlign: 'flex-end',
    title: 'Free Career Support and Guidance',
    desc:
      'Your Talent Rep will guide you through from start to finish, providing guidance on resume and interviews, helping you benchmark your salary, evaluate offers and find a job you love',
    quote: `Honeypot was fantastic! I was surprised by the sheer amount of interview offers and the diversity of companies. My Talent Rep gave me solid advice on how to structure a professional-looking CV, which is something I've always struggled with in the past.`,
    quotee:
      'Peter Ringelmann, Hired as Frontend Developer at Deutsche Post E-Post Development',
    photoUrl: photo1,
  },
  {
    reverse: true,
    title: 'Top Jobs for Top Tech Talent',
    desc:
      'Be part of the top 10% and connect with Europe’s top tech companies.',
    quote: `After only two weeks I received 12 interview invites from a great selection of companies.`,
    quotee: 'Name Surname',
    photoUrl: photo2,
  },
  {
    title: 'Know your worth!',
    desc: `Companies apply directly to you so you can compare offers side by side. No more job applications or clumsy back and forths with headhunters.`,
    quote: 'Honeypot helped me find my dream job in my dream country',
    quotee: 'Name Surname',
    photoUrl: photo3,
  },
]
