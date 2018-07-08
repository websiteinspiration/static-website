import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'
import Anchor from '../../shared/Anchor'
import Button from '../../shared/Button'
import I18n from '../../shared/I18n'

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
  <I18n ns="employer">
    {t => (
      <div>
        <Anchor id="user-stories" />
        <SharedFeatureAndQuotes
          bg={featuresBg}
          rows={featuresAndQuotes(t)}
          quoteCards={quoteCards(t)}
          renderButton={() => (
            <Button
              href="https://www.honeypot.io/users/sign_up"
              style={{ paddingRight: 58, paddingLeft: 58 }}
            >
              {t('Join')}
            </Button>
          )}
        />
      </div>
    )}
  </I18n>
)

export default EmployerFeaturesAndQuotes

const featuresAndQuotes = t => [
  {
    red: true,
    textsFlexAlign: 'flex-end',
    title: t('quotes.1-title'),
    desc: t('quotes.1-desc'),
    quote: t('quotes.1-quote'),
    quotee: t('quotes.1-quotee'),
    position: t('quotes.1-position'),
    company: t('quotes.1-company'),
    photoUrl: photo1,
    littleRectColor: p => p.theme.blue,
  },
  {
    red: true,
    reverse: true,
    title: t('quotes.2-title'),
    desc: t('quotes.2-desc'),
    quote: t('quotes.2-quote'),
    quotee: t('quotes.2-quotee'),
    position: t('quotes.2-position'),
    company: t('quotes.2-company'),
    photoUrl: photo2,
    littleRectColor: p => p.theme.blue,
  },
  {
    red: true,
    title: t('quotes.3-title'),
    desc: t('quotes.3-desc'),
    quote: t('quotes.3-quote'),
    quotee: t('quotes.3-quotee'),
    position: t('quotes.3-position'),
    company: t('quotes.3-company'),
    photoUrl: photo3,
    littleRectColor: p => p.theme.blue,
  },
]

const quoteCards = t => [
  {
    quote: t('quotes.4-quote'),
    quotee: t('quotes.4-quotee'),
    quoteeFirstLine: t('quotes.4-first-line'),
    quoteeSecondLine: t('quotes.4-second-line'),
    photoUrl: cardPhoto1,
  },
  {
    quote: t('quotes.5-quote'),
    quotee: t('quotes.5-quotee'),
    quoteeFirstLine: t('quotes.5-first-line'),
    quoteeSecondLine: t('quotes.5-second-line'),
    photoUrl: cardPhoto2,
  },
  {
    quote: t('quotes.6-quote'),
    quotee: t('quotes.6-quotee'),
    quoteeFirstLine: t('quotes.6-first-line'),
    quoteeSecondLine: t('quotes.6-second-line'),
    photoUrl: cardPhoto3,
  },
  {
    quote: t('quotes.7-quote'),
    quotee: t('quotes.7-quotee'),
    quoteeFirstLine: t('quotes.7-first-line'),
    quoteeSecondLine: t('quotes.7-second-line'),
    photoUrl: cardPhoto4,
  },
]
