import React from 'react'

// Local
import Button from './'

const TicketButton = ({ color = 'yellow', ...props }) => (
  <Button
    href="https://hiveconference2018.eventbrite.ie"
    color={color}
    normalPadding
    {...props}
  >
    Get Tickets
  </Button>
)

export default TicketButton
