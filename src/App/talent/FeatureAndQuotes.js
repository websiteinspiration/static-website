import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'

// Images
import featuresBg from '../../static/graphics/curved-bg-lightblue.svg'
import photo1 from '../../static/images/peter_ringelmann.jpg'
import photo2 from '../../static/images/emil.jpg'
import photo3 from '../../static/images/shuhei.jpg'

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
    smallQuote: true,
    reverse: true,
    title: 'Top Jobs for Top Tech Talent',
    desc:
      'Be part of the top 10% and connect with Europe’s top tech companies.',
    quote: `After only two weeks I received 13 interview invites from a great selection of companies. From these I could choose the cones that best suited me and wound up finding the perfect startup job.`,
    quotee: 'Emil Ahlbäck, Senior Frontend Developer',
    photoUrl: photo2,
  },
  {
    smallQuote: true,
    title: 'Know your worth!',
    desc: `Companies apply directly to you so you can compare offers side by side. No more job applications or clumsy back and forths with headhunters.`,
    quote:
      "I like Honeypot because companies offer interviews with minimum salary. It saved the effort of applying for jobs, doing interviews, getting offers, and finally finding out that the salary didn't meet my requirements",
    quotee: 'Shuhei Kagawa, Frontend at Zalando',
    photoUrl: photo3,
  },
]
