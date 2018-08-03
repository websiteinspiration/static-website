import React from 'react'
import styled from 'styled-components'

const TicketButton = ({ color = '#F6C724', ...props }) => (
  <StyledButton
    href="https://hiveconference2018.eventbrite.ie"
    color={color}
    {...props}
  >
    Get Tickets
  </StyledButton>
)

const StyledButton = styled.a`
  display: block;
  width: 131px;
  height: 36px;
  line-height: 36px;
  margin-top: 26px;

  background: ${p => (p.color === 'blue' ? '#0066CE' : p.color)};
  color: ${p => (p.color === 'blue' ? '#fff' : '#0066CE')};
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.43px;
`

export default TicketButton
