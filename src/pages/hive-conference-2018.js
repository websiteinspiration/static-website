import React from 'react'
import { Provider } from 'unstated'

import Header from '../App/hive/Header'
import Speakers from '../App/hive/Speakers'
import Topics from '../App/hive/Topics'
import Location from '../App/hive/Location'
import Map from '../App/hive/Map'
import Tickets from '../App/hive/Tickets'
import Sponsor from '../App/hive/Sponsor'

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
      </div>
    </Provider>
  )
}
