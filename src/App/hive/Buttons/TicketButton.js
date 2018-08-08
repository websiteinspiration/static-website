import React from 'react'

// Local
import Button from './'

const TicketButton = ({
  color = 'yellow',
  fontSize,
  sidePadding,
  ...props
}) => (
  <Button
    href="https://hiveconference2018.eventbrite.ie"
    color={color}
    normalPadding
    fontSize={fontSize}
    sidePadding={sidePadding}
    {...props}
  >
    Get Tickets
  </Button>
)

export default TicketButton
