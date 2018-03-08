import React from 'react'

// Local
import Guide from './Guide'
import DataTable from './DataTable'

export default ({ currency, ...props }) => (
  <div {...props} style={{ padding: `0 15px` }} id="table">
    <Guide currency={currency} />
    <DataTable currency={currency} />
  </div>
)
