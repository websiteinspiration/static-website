import React from 'react'
import { Provider } from 'unstated'
import Helmet from 'react-helmet'

import Header from '../App/hive/Header'
import Speakers from '../App/hive/Speakers'
import Topics from '../App/hive/Topics'
import Location from '../App/hive/Location'
import Map from '../App/hive/Map'
import Tickets from '../App/hive/Tickets'
import Sponsor from '../App/hive/Sponsor'
import About from '../App/hive/About'
import Footer from '../App/hive/Footer'
import hiveLogo from '../static/logos/hive-logo-only.png'

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
          <meta property="og:image:url" content={hiveLogo} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={pageTitle} />
          <meta
            property="og:url"
            content="https://www.honeypot.io/hive-conference-2018"
          />
          <meta property="og:description" content={description} />
          <meta property="og:image:url" content={hiveLogo} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:site" content="@honeypotio" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={hiveLogo} />
        </Helmet>

        <Header />
        <Speakers />
        <Topics />
        <Location />
        <Map />
        <Tickets />
        <Sponsor />
        <About />
        <Footer />
      </div>
    </Provider>
  )
}
