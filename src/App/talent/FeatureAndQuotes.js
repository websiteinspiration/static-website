import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'

// Images
import featuresBg from '../../static/graphics/curved-bg-lightblue.svg'
import photo1 from '../../static/images/rokas-niparavicius.jpg'
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
    textsFlexAlign: 'flex-end',
    title: 'Free Career Support and Guidance',
    desc:
      'Your Talent Rep will guide you through from start to finish, providing guidance on resume and interviews, helping you benchmark your salary, evaluate offers and find a job you love',
    quote: `Your Talent Rep will guide you through from start to finish. They help build your resume, ace your interviews, evaluate offers and find a job you love!`,
    quotee: 'Name Surname',
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
