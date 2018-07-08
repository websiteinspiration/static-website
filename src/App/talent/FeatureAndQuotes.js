import React from 'react'

// Local
import SharedFeatureAndQuotes from '../../shared/FeatureAndQuotes'
import Anchor from '../../shared/Anchor'
import Button from '../../shared/Button'
import I18n from '../../shared/I18n'

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
  <I18n ns="talent">
    {t => (
      <div>
        <Anchor id="success-stories" />
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

export default TalentFeaturesAndQuotes

const featuresAndQuotes = t => [
  {
    textsFlexAlign: 'flex-end',
    title: t('quotes.1-title'),
    desc: t('quotes.1-desc'),
    quote: t('quotes.1-quote'),
    quotee: t('quotes.1-quotee'),
    position: t('quotes.1-position'),
    company: t('quotes.1-company'),
    photoUrl: photo1,
  },
  {
    reverse: true,
    title: t('quotes.2-title'),
    desc: t('quotes.2-desc'),
    quote: t('quotes.2-quote'),
    quotee: t('quotes.2-quotee'),
    position: t('quotes.2-position'),
    company: t('quotes.2-company'),
    photoUrl: photo2,
  },
  {
    title: t('quotes.3-title'),
    desc: t('quotes.3-desc'),
    quote: t('quotes.3-quote'),
    quotee: t('quotes.3-quotee'),
    position: t('quotes.3-position'),
    company: t('quotes.3-company'),
    photoUrl: photo3,
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
