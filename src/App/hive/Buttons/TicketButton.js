import React from 'react'

// Local
import Button from './'

const TicketButton = ({ color = 'yellow', ...props }) => (
  <Button
    href="https://hiveconference2018.eventbrite.ie"
    color={color}
    {...props}
  >
    Get Tickets
  </Button>
)

export default TicketButton
