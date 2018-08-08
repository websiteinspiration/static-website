import React from 'react'
import styled, { css } from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// Local
import { Container, LargeWrapper } from './Containers'
import SectionTitle from './SectionTitle'
import TicketButton from './Buttons/TicketButton'

// Photos
import plan1 from '../../static/plan1.svg'
import plan2 from '../../static/plan2.svg'
import plan3 from '../../static/plan3.svg'
import { mobile, notMobile } from '../../utils/style/media'

const ticketsList = [
  {
    plan: 1,
    price: 359,
    name: 'Early Bird',
    desc: 'First come, first served',
  },
  {
    plan: 2,
    price: 459,
    name: 'Regular',
    desc: 'The normal price for conference tickets.',
  },
  {
    plan: 3,
    price: 559,
    name: 'Late Bird',
    desc: 'Last chance to grab your tickets.',
    whiteLine: true,
  },
]

const Ticket = ({ plan, price = 0, name, desc, whiteLine }) => (
  <TicketWrapper plan={plan}>
    <Price>€{price}</Price>
    <Name>{name}</Name>
    <Desc>{desc}</Desc>
    <Line white={whiteLine} />
    <ButtonWrapper>
      <TicketButton fontSize={15.5} />
    </ButtonWrapper>
  </TicketWrapper>
)

const Carousel = () => {
  return (
    <AliceCarousel
      responsive={{ 0: { items: 1 }, 515: { items: 2 } }}
      mouseDragEnabled={true}
      buttonsDisabled={true}
      infinite={false}
    >
      {ticketsList.map(ticket => <Ticket {...ticket} key={ticket.plan} />)}
    </AliceCarousel>
  )
}

const Tickets = () => {
  return (
    <Container id="tickets" style={{ paddingBottom: 80 }}>
      <LargeWrapper>
        <SectionTitle color="dark">Tickets.</SectionTitle>
      </LargeWrapper>

      <MobileTicketsWrapper>
        <Carousel />
      </MobileTicketsWrapper>

      <DesktopTicketsWrapper>
        {ticketsList.map(ticket => <Ticket {...ticket} key={ticket.plan} />)}
      </DesktopTicketsWrapper>
    </Container>
  )
}

export default Tickets

const MobileTicketsWrapper = styled.div`
  .alice-carousel {
    padding-right: 0;
    padding-left: 0;
  }

  .alice-carousel__wrapper {
    border: none;
  }

  .alice-carousel__stage-item {
    display: inline-flex;
    justify-content: center;
  }

  ${notMobile(
    css`
      display: none;
    `
  )};
`

const DesktopTicketsWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  ${mobile(css`
    justify-content: flex-start;
    margin-left: 55px;
    padding-right: 55px;
    margin-bottom: 10px;

    display: none;
  `)};
`

const Line = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  margin-left: -85px;
  width: 170px;
  height: 2px;
  opacity: 0.1;
  border-bottom: 1px solid ${p => (p.white ? '#fff' : '#0656a9')};

  ${mobile(css`
    top: 205px;
  `)};
`

const TicketWrapper = styled.div`
  width: 235px;
  height: 250px;

  padding: 48px 10px 10px 10px;
  position: relative;
  flex-shrink: 0;
  text-align: center;
  user-select: none;

  ${p =>
    p.plan == 1 &&
    css`
      background: url(${plan1}) no-repeat center center;
    `};

  ${p =>
    p.plan == 2 &&
    css`
      background: url(${plan2}) no-repeat center center;
      span {
        opacity: 1;
      }
    `};

  ${p =>
    p.plan == 3 &&
    css`
      background: url(${plan3}) no-repeat center center;
      h2 {
        color: #b2d8ff;
        opacity: 0.6;
      }
      span {
        color: #fff;
        opacity: 1;
      }
    `};

  ${mobile(css`
    width: 258px;
    height: 277px;
    background-size: cover;
  `)};
`

const Price = styled.div`
  font-size: 30px;
  color: #0d62b8;
  letter-spacing: 1.25px;
  text-align: center;
  font-weight: bold;

  ${mobile(css`
    font-size: 36px;
  `)};
`

const Name = styled.h2`
  margin-top: 15px;
  margin-bottom: 0;
  opacity: 0.4;
  font-size: 25px;
  color: #0d62b8;
  letter-spacing: 1.04px;
  text-align: center;
  font-weight: bold;

  ${mobile(css`
    font-size: 30px;
  `)};
`

const Desc = styled.span`
  margin: 15px 15px 0 15px;
  display: block;
  opacity: 0.47;
  font-size: 14px;
  color: #0d62b8;
  letter-spacing: 0.58px;
  text-align: center;

  ${mobile(css`
    font-size: 16.8px;
  `)};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 165px;
  left: 50%;
  margin-left: -85px;
  width: 170px;
  height: 2px;

  ${mobile(css`
    top: 185px;
  `)};
`
