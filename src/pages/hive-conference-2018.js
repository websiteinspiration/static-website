import React from 'react'
import { Provider } from 'unstated'

import Header from '../App/hive/Header'
import Speakers from '../App/hive/Speakers'
import Topics from '../App/hive/Topics'
import Location from '../App/hive/Location'
import Map from '../App/hive/Map'
import Tickets from '../App/hive/Tickets'
import Sponsor from '../App/hive/Sponsor'
import About from '../App/hive/About'
import Footer from '../App/hive/Footer'

export default () => {
  return (
    <Provider>
      <div>
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
