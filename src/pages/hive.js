import React from 'react'
import { Provider } from 'unstated'

import Header from '../App/hive/Header'
import Speakers from '../App/hive/Speakers'

export default () => {
  return (
    <Provider>
      <div>
        <Header />
        <Speakers />
      </div>
    </Provider>
  )
}
