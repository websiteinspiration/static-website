import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'
import Anchor from '../../shared/Anchor'
import Button from '../../shared/Button'

// Images
import featuresBg from '../../static/graphics/curved-bg-lightblue.svg'
import photo1 from '../../static/images/peter-ringelmann.jpg'
import photo2 from '../../static/images/emil-ahlback.jpg'
import photo3 from '../../static/images/shuhei-kagawa.jpg'
// -- quote cards
import cardPhoto1 from '../../static/images/alvean.jpg'
import cardPhoto2 from '../../static/images/nilufar.jpg'
import cardPhoto3 from '../../static/images/tonis.jpg'
import cardPhoto4 from '../../static/images/hemerson.jpg'

const TalentFeaturesAndQuotes = () => (
  <div>
    <Anchor id="success-stories" />
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

export default TalentFeaturesAndQuotes

const featuresAndQuotes = [
  {
    textsFlexAlign: 'flex-end',
    title: 'Free Career Support and Guidance',
    desc:
      'Your Talent Rep will guide you through from start to finish, providing guidance on resume and interviews, helping you benchmark your salary, evaluate offers and find a job you love',
    quote: `Honeypot was fantastic! I was surprised by the sheer amount of interview offers and the diversity of companies. My Talent Rep gave me solid advice on how to structure a professional-looking CV, which is something I've always struggled with in the past.`,
    quotee: 'Peter Ringelmann',
    position: 'Frontend Developer',
    company: 'Deutsche Post E-Post Development',
    photoUrl: photo1,
  },
  {
    reverse: true,
    title: 'Top Jobs for Top Tech Talent',
    desc:
      'Be part of the top 10% and connect with Europe’s top tech companies.',
    quote: `After only two weeks I received 13 interview invites from a great selection of companies. From these I could choose the cones that best suited me and wound up finding the perfect startup job.`,
    quotee: 'Emil Ahlbäck',
    position: 'Senior Frontend Developer',
    company: 'Weissmaler',
    photoUrl: photo2,
  },
  {
    title: 'Know your worth!',
    desc: `Companies apply directly to you so you can compare offers side by side. No more job applications or clumsy back and forths with headhunters.`,
    quote:
      "I like Honeypot because companies offer interviews with minimum salary. It saved the effort of applying for jobs, doing interviews, getting offers, and finally finding out that the salary didn't meet my requirements",
    quotee: 'Shuhei Kagawa',
    position: 'Frontend Developer',
    company: 'Zalando',
    photoUrl: photo3,
  },
]

const quoteCards = [
  {
    quote: `Honeypot makes me feel valued and supported in my search for new opportunities at interesting technological and modern companies.`,
    quotee: 'Alvean Ekman',
    quoteeFirstLine: 'Java Developer',
    quoteeSecondLine: 'Idealo',
    photoUrl: cardPhoto1,
  },
  {
    quote: `Honeypot helped me find my dream job in my dream country! Honeypot puts their developers first - even the CEO called me personally to address all my queries!`,
    quotee: 'Nilufar Bava',
    quoteeFirstLine: 'International Talent',
    quoteeSecondLine: 'Acquisition, Glispa',
    photoUrl: cardPhoto2,
  },
  {
    quote: `Getting interviews through Honeypot was a breeze. For a person who wanted to find a job and relocate first time it was superb experience!`,
    quotee: 'Tönis Anton',
    quoteeFirstLine: 'Javascript',
    quoteeSecondLine: 'ProfitBricks',
    photoUrl: cardPhoto3,
  },
  {
    quote: `Honeypot helps with every aspect of the hiring process. It feels so great to have a bunch of companies interested in your profile and all the information about the role and salary upfront.`,
    quotee: 'Hemerson Carlin',
    quoteeFirstLine: 'Fullstack',
    quoteeSecondLine: 'Signavio',
    photoUrl: cardPhoto4,
  },
]
