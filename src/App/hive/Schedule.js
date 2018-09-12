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

const SectionWrapper = styled.div`
  padding-bottom: 50px;
`;

const TableHeader = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const HeaderIcon = styled.div`
  padding: 5px 20px;

  ${mobile(css`
    padding: 5px 7px;
  `)}
`;

const TableBody = styled.div`
  padding: 20px 0;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch; `

const TimeCell = styled.div`
  flex: 0 0 60px;
  padding: 2px 5px;
`;

const TopicCell = styled.div`
  flex: 1 1 auto;
`;

const TopicKind = {
  break: {
    color: '#f7f6f6',
    icon: breakIcon
  },
  keynote: {
    color: '#6aabe0',
    icon: keynoteIcon
  },
  casestudy: {
    color: '#4bd4d2',
    icon: casestudyIcon
  },
  panel: {
    color: '#f6c724',
    icon: panelIcon
  },
  workshop: {
    color: '#ca96fa',
    icon: workshopIcon
  }
};

const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 3px;
  margin: 2px 5px;

  ${props => props.kind && css`
    background-color: ${ TopicKind[props.kind].color };
  `}

  ${props => props.kind === 'workshop' && css`
    height: 100%;
  ` }

`;

const TopicIcon = kind => {
  const Img = styled.img`
    margin-bottom: 0;
    padding-right: 20px;
    flex: 0 0 30px;
  `;

  return <Img src={ TopicKind[kind].icon } />;
};

const TimeWrapper = styled.div`
  display: flex;
	flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  flex: 0 0 30px;
`;

const Schedule = () => (
  <SectionWrapper id="schedule">
    <Container>
      <LargeWrapper>
        <SectionTitle color="dark">Schedule.</SectionTitle>
      </LargeWrapper>
      <LargeWrapper>
        <TableHeader>
          <HeaderIcon>Breaks</HeaderIcon>
          <HeaderIcon>Keynotes</HeaderIcon>
          <HeaderIcon>Case Studies</HeaderIcon>
          <HeaderIcon>Panel</HeaderIcon>
          <HeaderIcon>Workshop</HeaderIcon>
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
	  {/*
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
		*/
	  }
          <TableRow>
            <div style={{width: "50%"}}>
              <TableRow>
                <TimeCell>
                  14.00
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
            </div>
            <div style={{width: "50%", height: '100%' }}>
              <TopicCell>
                <RowWrapper kind={ "workshop" }>
                  { TopicIcon("workshop") }
                  Mark Levy, Employee Experience Pioneer (formerly at AirBnB)
                </RowWrapper>
              </TopicCell>
            </div>
          </TableRow>
          <TableRow>
            <TimeCell>
              15.30
            </TimeCell>
            <TopicCell>
              <RowWrapper kind={ "break" }>
                { TopicIcon("break") }
                Cofee Break
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
