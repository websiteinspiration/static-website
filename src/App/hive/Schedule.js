import React from 'react';
import styled, { css } from 'styled-components';

import { mobile } from '../../utils/style/media'
import SectionTitle from './SectionTitle';
import { Container, LargeWrapper } from './Containers';

// icons
import breakIcon from '../../static/icons/coffee-black.svg';
import keynoteIcon from '../../static/icons/keynote-white.svg';
import casestudyIcon from '../../static/icons/casestudy-white.svg';
import panelIcon from '../../static/icons/line-person-icon.svg';
import workshopIcon from '../../static/icons/workshop-white.svg';
import breakColorIcon from '../../static/icons/coffee-black.svg';
import keynoteColorIcon from '../../static/icons/keynote-blue.svg';
import casestudyColorIcon from '../../static/icons/casestudy-teal.svg';
import panelColorIcon from '../../static/icons/line-person-icon.svg';
import workshopColorIcon from '../../static/icons/workshop-purple.svg';

const SectionWrapper = styled.div`
  padding-bottom: 50px;
`;

const TopicKind = {
  break: {
    color: '247, 246, 246',
    icon: breakIcon,
    colorIcon: breakColorIcon
  },
  keynote: {
    color: '54, 142, 215',
    icon: keynoteIcon,
    colorIcon: keynoteColorIcon
  },
  casestudy: {
    color: '4, 190, 187',
    icon: casestudyIcon,
    colorIcon: casestudyColorIcon
  },
  panel: {
    color: '246, 199, 36',
    icon: panelIcon,
    colorIcon: panelColorIcon
  },
  workshop: {
    color: '202, 150, 250',
    icon: workshopIcon,
    colorIcon: workshopColorIcon
  }
};

const TableHeader = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const HeaderIcon = styled.div`
  padding: 5px 20px;
  height: 30px;
  line-height: 20px;
  font-weight: 600;

  ${mobile(css`
    padding: 5px 7px;
  `)}

  ${ props => props.kind && css`
    color: rgb(${ TopicKind[props.kind].color });
    color: ${ props.kind === 'break' && '#000000' };
  `}
`;

const TableBody = styled.div`
  padding: 20px 0;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

const TimeCell = styled.div`
  flex: 0 0 130px;
  padding: 2px 5px;
`;

const TopicCell = styled.div`
  flex: 1 1 auto;
  padding: 2px 5px;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 3px;
  color: #ffffff;
  font-weight: 500;

  ${
    props => (props.kind === 'break') && css`
      color: #3c3c3c;
    `
  }

  ${props => props.kind && css`
    background-image: linear-gradient(rgba(${TopicKind[props.kind].color},0.7), rgba(${TopicKind[props.kind].color},1));
  `}
`;

const TopicIcon = (kind, key = false) => {
  const Img = styled.img`
    margin-bottom: 0;
    padding-right: 20px;

    ${key && css`
      padding-right: 5px;
      height: 16px;
      float: left;
      margin-top: 2px;
    `}
  `;

  if (key) {
    return <Img src={ TopicKind[kind].colorIcon } title={ kind } />;
  }

  return <Img src={ TopicKind[kind].icon } title={ kind } />;
};

const Schedule = () => (
  <SectionWrapper id="schedule">
    <Container>
      <LargeWrapper>
        <SectionTitle color="dark">Schedule.</SectionTitle>
      </LargeWrapper>
      <LargeWrapper>
        <TableHeader>
          <HeaderIcon kind="break">
            { TopicIcon("break", true) }
            Breaks
          </HeaderIcon>
          <HeaderIcon kind="keynote">
            { TopicIcon("keynote", true) }
            Keynotes
          </HeaderIcon>
          <HeaderIcon kind="casestudy">
            { TopicIcon("casestudy", true) }
            Case Studies
          </HeaderIcon>
          <HeaderIcon kind="panel">
            { TopicIcon("panel", true) }
            Panel
          </HeaderIcon>
          <HeaderIcon kind="workshop">
            { TopicIcon("workshop", true) }
            Workshop
          </HeaderIcon>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TimeCell>
              8.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "break" }>
                { TopicIcon("break") }
                Registration and Breakfast
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              9.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "keynote" }>
                { TopicIcon("keynote") }
                Mark Levy, Employee Experience Pioneer (formerly at AirBnB)
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              10.00
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "keynote" }>
                { TopicIcon("keynote") }
                Daniel Krauss, CIO and Co-Founder, FlixMobility
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              10.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "casestudy" }>
                { TopicIcon("casestudy") }
                Sergej Zimpel, Senior Recruiter, ProSiebenSat.1 Media SE
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              11.00
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "break" }>
                { TopicIcon("break") }
                Coffee Break
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              11.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "keynote" }>
                { TopicIcon("keynote") }
                Jeri Doris, Chief People Officer, Delivery Hero
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              12.00
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "panel" }>
                { TopicIcon("panel") }
                Margaux Pelen, Founder at The Learning Studio<br />
                Teddy Dimitrova, Tech Talent Manager at Bloomon<br />
                Jan Wirth, IT Recruiter at MYTOYS Group
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              12.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "break" }>
                { TopicIcon("break") }
                Lunch
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              14.00 - 16.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "workshop" }>
                { TopicIcon("workshop") }
                Mark Levy, Employee Experience Pioneer (formerly at AirBnB)
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              14.00 - 14.15
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "casestudy" }>
                { TopicIcon("casestudy") }
                Amir Friedman, VP Engineering, kloeckner.i
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              15.05
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "casestudy" }>
                { TopicIcon("casestudy") }
                Aleksandra Gavrilovska, Engineering Manager, SoundCloud, Director at Women Who Code Berlin
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              15.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "break" }>
                { TopicIcon("break") }
                Coffee Break
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              16.00
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "casestudy" }>
                { TopicIcon("casestudy") }
                Antonio Arias Lopez, Talent Acquisition Lead, Jose Arteaga, Tech Talent Acquisition Specialist, Nico Bräutigam, Tech Talent Acquisition Specialist, Tipico
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              16.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "keynote" }>
                { TopicIcon("keynote") }
                Martina Niemann, Vice President HR Management, Lufthansa
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              17.00
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "keynote" }>
                { TopicIcon("keynote") }
                Kevin Goldsmith, VP of Engineering, AstrumU
              </RowWrapper>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              17.45
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "break" }>
                { TopicIcon("break") }
                Closing
              </RowWrapper>
            </TopicCell>
          </TableRow>
        </TableBody>
      </LargeWrapper>
    </Container>
  </SectionWrapper>
);

export default Schedule;
