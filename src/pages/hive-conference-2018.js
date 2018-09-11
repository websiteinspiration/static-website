import React from 'react'
import { Provider } from 'unstated'
import Helmet from 'react-helmet'

import Header from '../App/hive/Header'
import Speakers from '../App/hive/Speakers'
import Schedule from '../App/hive/Schedule'
import Topics from '../App/hive/Topics'
import Location from '../App/hive/Location'
import Map from '../App/hive/Map'
import Tickets from '../App/hive/Tickets'
import Sponsor from '../App/hive/Sponsor'
import About from '../App/hive/About'
import Footer from '../App/hive/Footer'

const gtmCode = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PJX579');`
export default () => {
  const pageTitle = 'Hive Conference by Honeypot | Hire. Scale. Develop.'
  const description =
    'A one-day conference for HR Leaders, Technical Hiring Managers, CTOs and VPs of Engineering focused on all aspects of building and scaling great engineering teams.'
  return (
    <Provider>
      <div>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={pageTitle} />
          <meta
            property="og:url"
            content="https://hive.honeypot.io/hive-conference-2018/"
          />
          <meta property="og:description" content={description} />
          <meta property="og:image" content='https://image.ibb.co/dhM6Xp/social_hive_828x315_2x.png' />
          <meta property="og:image:url" content='https://image.ibb.co/dhM6Xp/social_hive_828x315_2x.png' />
          <meta property="og:image:alt" content="Hive by Honeypot Conference 2018" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:site" content="@honeypotio" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content='https://image.ibb.co/dhM6Xp/social_hive_828x315_2x.png' />
        </Helmet>

        <Header />
        <Speakers />
        <Topics />
        <Schedule />
        <Location />
        <Map />
        <Tickets />
        <Sponsor />
        <About />
        <Footer />

        <script async dangerouslySetInnerHTML={{ __html: gtmCode }} />
      </div>
    </Provider>
  )
}
