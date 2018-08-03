import React from 'react'
import { Provider } from 'unstated'

import Header from '../App/hive/Header'

export default () => {
  return (
    <Provider>
      <div>
        <Header />
      </div>
    </Provider>
  )
}
