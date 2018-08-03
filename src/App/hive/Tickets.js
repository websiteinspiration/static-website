import React from 'react'
import styled, { css } from 'styled-components'
// import Slick from 'react-slick'

// Local
import { Container, LargeWrapper } from './Containers'
import SectionTitle from './SectionTitle'
import TicketButton from './Buttons/TicketButton'

// Photos
import plan1 from '../../static/plan1.svg'
import plan2 from '../../static/plan2.svg'
import plan3 from '../../static/plan3.svg'
import { mobile } from '../../utils/style/media'

const Tickets = () => (
  <Container id="tickets" style={{ paddingBottom: 80 }}>
    <LargeWrapper>
      <SectionTitle color="dark">Tickets.</SectionTitle>
    </LargeWrapper>

    <ScrollHider>
      <ScrollWrapper>
        <TicketsWrapper>
          <Ticket plan={1}>
            <Price>€359</Price>
            <Name>Early Bird</Name>
            <Desc>First come, First Served</Desc>
            <Line />
            <ButtonWrapper>
              <TicketButton />
            </ButtonWrapper>
          </Ticket>
          <Ticket plan={2}>
            <Price>€459</Price>
            <Name>Regular</Name>
            <Desc>The normal price for conference tickets.</Desc>
            <Line />
            <ButtonWrapper>
              <TicketButton />
            </ButtonWrapper>
          </Ticket>
          <Ticket plan={3}>
            <Price>€559</Price>
            <Name>Late Bird</Name>
            <Desc>Last chance to grab your tickets.</Desc>
            <Line white />
            <ButtonWrapper>
              <TicketButton />
            </ButtonWrapper>
          </Ticket>
        </TicketsWrapper>
      </ScrollWrapper>
    </ScrollHider>
  </Container>
)

export default Tickets

const ScrollHider = styled.div`
  ${mobile(css`
    overflow-y: hidden;
  `)};
`

const ScrollWrapper = styled.div`
  margin-bottom: -16px;

  ::-webkit-scrollbar {
    opacity: 0;
  }

  ${mobile(css`
    overflow-y: hidden;
    overflow-x: scroll;
  `)};
`

const TicketsWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  ${mobile(css`
    justify-content: flex-start;
    margin-left: 55px;
    padding-right: 55px;
    margin-bottom: 10px;
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
`

const Ticket = styled.div`
  width: 235px;
  height: 250px;
  padding: 48px 10px 10px 10px;
  position: relative;
  flex-shrink: 0;

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
`

const Price = styled.div`
  font-size: 30px;
  color: #0d62b8;
  letter-spacing: 1.25px;
  text-align: center;
  font-weight: bold;
`

const Name = styled.h2`
  margin-top: 15px;
  opacity: 0.4;
  font-size: 25px;
  color: #0d62b8;
  letter-spacing: 1.04px;
  text-align: center;
  font-weight: bold;
`

const Desc = styled.span`
  margin-top: 10px;
  opacity: 0.47;
  font-size: 14px;
  color: #0d62b8;
  letter-spacing: 0.58px;
  text-align: center;
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
    top: 163px;
  `)};
`
