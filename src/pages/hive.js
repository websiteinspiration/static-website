import React from 'react'
import { Provider } from 'unstated'

import Header from '../App/hive/Header'
import Speakers from '../App/hive/Speakers'
import Topics from '../App/hive/Topics'

export default () => {
  return (
    <Provider>
      <div>
        <Header />
        <Speakers />
        <Topics />
      </div>
    </Provider>
  )
}
