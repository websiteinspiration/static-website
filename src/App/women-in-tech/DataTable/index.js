import React from 'react'

// Local
import Guide from './Guide'
import DataTable from './DataTable'

export default props => (
  <div {...props} style={{ padding: `0 15px` }}>
    <Guide />
    <DataTable />
  </div>
)
