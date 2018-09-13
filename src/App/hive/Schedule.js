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
import arrowWhiteIcon from '../../static/icons/arrow-white.svg';

// avatars
import AleksandraGavril from '../../static/avatars/AleksandraGavril.png'
import AmirFriedman from '../../static/avatars/AmirFriedman.png'
import AntonioLopez from '../../static/avatars/AntonioLopez.png'
import DanielKrauss from '../../static/avatars/DanielKrauss.png'
import JeriDoris from '../../static/avatars/JeriDoris.png'
import JoseArtega from '../../static/avatars/JoseArtega.png'
import KevinGoldsmith from '../../static/avatars/KevinGoldsmith.png'
import MargeauxPelen from '../../static/avatars/MargeauxPelen.png'
import MarkLevy from '../../static/avatars/MarkLevy.png'
import MartinaNiemann from '../../static/avatars/MartinaNiemann.png'
import NicoBrautigam from '../../static/avatars/NicoBrautigam.png'
import SergejZimpel from '../../static/avatars/SergejZimpel.png'

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
    color: '24, 116, 204',
    icon: keynoteIcon,
    colorIcon: keynoteColorIcon
  },
  casestudy: {
    color: '4, 190, 187',
    icon: casestudyIcon,
    colorIcon: casestudyColorIcon
  },
  panel: {
    color: '213, 170, 19',
    icon: panelIcon,
    colorIcon: panelColorIcon
  },
  workshop: {
    color: '169, 85, 245',
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
  align-items: stretch;
`;

const TimeCell = styled.div`
  flex: 0 0 60px;
  padding: 2px 5px;
`;

const TopicCell = styled.div`
  flex: 1 1 auto;
`;

const RowWrapper = styled.div`
  #display: flex;
  #justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 3px;
  color: #ffffff;
  font-weight: 500;
  margin: 2px 2px;

  ${props => (props.kind === 'break') && css`
      color: #3c3c3c;
  `}

  ${props => props.kind && css`
    background-image: linear-gradient(rgba(${TopicKind[props.kind].color},0.7),
      rgba(${TopicKind[props.kind].color},1));
  `}

  ${props => props.kind === 'workshop' && css`
    height: 100%;
  ` }

`;

const TopicIcon = (kind, key = false) => {
  const Img = styled.img`
    margin-bottom: 0;
    padding-right: 20px;
    flex: 0 0 30px;
    max-height: 30px;

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


class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
  }

  handleClick() {
    const {hide} = this.state;
    this.setState({ hide: !hide });
  }
  render() {
    const Img = styled.img`
      margin-bottom: 0;
      flex: 0 1 15px;
      ${props => !props.hide && css`
        transform: rotate(180deg);
      ` }
    `;

    const ImgAvatar = styled.img`
      margin-bottom: 0;
      max-width: 25px;
    `

    const Text = styled.span`
      flex: 1 1 auto;
      #float: left;
    `
    
    const Summary = styled.div`
      display: flex;
      justify-content: space-between;
    `

    const Description = styled.div`
      display: block;
      ${props => props.hide && css`
        display: none;
      `}
    `;
    const Avatar = styled.div`
      flex: 0 0 auto;
      margin-right: 20px;
    `;
    const multiple = Array.isArray(this.props.children);
    let Sum, Detail;
    // If Summary and Description are given, split them
    if(multiple) {
      Sum = this.props.children[0];
      Detail = this.props.children[1];
    } else {
      // Otherwise assume, that it is only the summary
      Sum = this.props.children;
    }
    return <RowWrapper kind={ this.props.kind }>
      <Summary>
        { TopicIcon(this.props.kind) }
        {this.props.avatars &&
          <Avatar>
            {this.props.avatars.map((i, k) => <ImgAvatar src={ i } key={k} />)}
          </Avatar>
        }
        <Text>
          { Sum }
        </Text>
        {multiple &&
          <Img
            hide={ this.state.hide }
            onClick={ () => this.handleClick() }
            src={ arrowWhiteIcon } />
        }
      </Summary>
      <Description hide={ this.state.hide }>
        { Detail }
      </Description>
    </RowWrapper>
  }
}

const Summary = styled.p`
  margin: 0;
`;
const Description = styled.p`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 20px;
  # For firefox
  # margin-left: 30px;
`;


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
              <Topic kind={ "break" }>
                <Summary>
                  Registration and Breakfast
                </Summary>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              9.30
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [MarkLevy] }>
                <Summary>Mark Levy, Employee Experience Pioneer (formerly at
                  AirBnB)
                </Summary>
                <Description>
                  <b>From HR to Employee Experience</b><br />
                  Mark was the pioneer at Airbnb for more than four years of
                  shifting the function, the mindset and ways of working to
                  treating the employee like the business treats their customer.
                  Mark will share how the shift started, what it is through
                  stories about the way Airbnb created belonging through the
                  employee experience.
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              10.00
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [DanielKrauss] }>
                <Summary>
                  Daniel Krauss, CIO and Co-Founder, FlixMobility
                </Summary>
                <Description>
                  <b>From HR to Employee Experience</b><br />
                  Daniel Krauss is one of the three founders of FlixMobility and
                  the current CIO where he is responsible for all technological
                  aspects of FlixBus including Business Intelligence, Online
                  Product, Infrastructure and Software Engineering. Prior to
                  launching FlixBus, Daniel worked as technical manager for
                  Microsoft, Siemens and Marquardt. Daniel studied business
                  information systems at universities in Germany and China. He
                  was born in 1983 in Neheim-Hüsten, Germany, and currently
                  resides in Munich.
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              10.30
            </TimeCell>
            <TopicCell>
              <Topic kind={ "casestudy" } avatars={ [SergejZimpel] }>
                <Summary>
                  Sergej Zimpel, Senior Recruiter, ProSiebenSat.1 Media SE
                </Summary>
                <Description>
                  To be announced
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              11.00
            </TimeCell>
            <TopicCell>
              <Topic kind={ "break" }>
                <Summary>
                  Coffee Break
                </Summary>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              11.30
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [JeriDoris] }>
                <Summary>
                  Jeri Doris, Chief People Officer, Delivery Hero
                </Summary>
                <Description>
                  To be announced
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              12.00
            </TimeCell>
            <TopicCell>
              <Topic kind={ "panel" } avatars={ [MargeauxPelen] }>
                <Summary>
                  Margaux Pelen, Founder at The Learning Studio<br />
                  Teddy Dimitrova, Tech Talent Manager at Bloomon<br />
                  Jan Werth, IT Recruiter at MYTOYS Group
                </Summary>
                <Description>
                  <b>Screening Developers: Setting up a Frictionless Screening
                    Process for Tech Candidates </b><br />
                  Having a well defined screening process is essential to hiring
                  the right tech talent and limiting organizational overhead.
                  Our panelists will discuss developer's educational background,
                  how to understand their interests from an application, how to
                  automate screening and how to choose which technical screening
                  is most suited to the position you are hiring for. 
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              12.30
            </TimeCell>
            <TopicCell>
              <Topic kind={ "break" }>
                <Summary>
                  Lunch
                </Summary>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <div style={{width: "50%"}}>
              <TableRow>
                <TimeCell>
                  14.00
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "casestudy" } avatars={ [AmirFriedman] }>
                    <Summary>
                      Amir Friedman, VP Engineering, kloeckner.i
                    </Summary>
                    <Description>
                      <b>How we Recruit and Retain Developers at Kloeckner.i</b>
                      <br />
                      Amir is VP of Engineering at kloeckner.i, where he leads
                      30 developers. He is passionate about building high
                      performing teams. In this talk, Amir will talk about how
                      he recruits the right people for the right teams, how
                      kloeckner.i are building their developer brand and most
                      importantly how they have kept turnover on their
                      engineering team at close to zero. kloeckner.i is the
                      digital arm of Klöckner & Co, Germany's largest steel and
                      metal distributor. The company has over 8,000 employees
                      and €6.3 billion revenue in 2017.
                    </Description>
                  </Topic>
                </TopicCell>
              </TableRow>
              <TableRow>
                <TimeCell>
                  15.05
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "casestudy" } avatars={ [AleksandraGavril] }>
                    <Summary>
                      Aleksandra Gavrilovska, Engineering Manager, SoundCloud,
                      Director at Women Who Code Berlin
                    </Summary>
                    <Description>
                      <b>Using Retrospectives to Build Teams at SoundCloud</b>
                      <br />
                      Functional teams are based on trust, communication and
                      empathy. Those can grow and improve as the time goes or
                      they can be catalysed by using different tools, for
                      example a retrospective activity. In this case study
                      Aleksandra will show various retrospectives and the impact
                      they had on her team at SoundCloud. Aleksandra Gavrilovska
                      is an Engineering Manager at SoundCloud and Director at
                      Women Who Code Berlin. She has been working in software
                      development for 10 years and has a Master and Bachelor in
                      Computer Science. 
                    </Description>
                  </Topic>
                </TopicCell>
              </TableRow>
              <TableRow>
                <TimeCell>
                  15.30
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "break" }>
                    <Summary>
                      Coffee Break
                    </Summary>
                  </Topic>
                </TopicCell>
              </TableRow>
              <TableRow>
                <TimeCell>
                  16.00
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "casestudy" } avatars={ [AntonioLopez,
                    JoseArtega, NicoBrautigam] }>
                    <Summary>
                      Antonio Arias Lopez, Talent Acquisition Lead,<br />
                      Jose Arteaga, Tech Talent Acquisition Specialist,<br />
                      Nico Bräutigam, Tech Talent Acquisition Specialist, Tipico
                    </Summary>
                    <Description>
                      <b>Case Study: From Agency to Automation: How We Cut Tech
                      Time to Hire and Cost per Hire in Half in One Year.</b>
                      <br />
                      Antonio Arias Lopez is leading Talent Acquisition at
                      Tipico, the market leader in sports betting in Germany.
                      Antonio set up the Group Talent Acquisition function and
                      leads a team of 11 recruiters, spread across 4 locations
                      Since joining, Antonio and his team have reduced time to
                      hire by 51%, reduced agency spend by 82%, and increased
                      inbound tech applications by five times. Learn how Tipico
                      implemented state of the art HR Tech, like automated
                      referencing, asynchronous interviewing, best-in-class tech
                      assessments to transform recruitment and build a
                      digitally-powered system.
                    </Description>
                  </Topic>
                </TopicCell>
              </TableRow>
            </div>
            <div style={{width: "50%", paddingBottom: '4px'}}>
              <TopicCell style={{height: '100%'}}>
                <Topic kind={ "workshop" } avatars={ [MarkLevy] }>
                  <Summary>
                     Mark Levy, Employee Experience Pioneer (formerly at
                     Airbnb)
                  </Summary>
                  <Description>
                    <b>A Deeper Dive into what it takes to Shift from HR to
                    Employee Experience</b><br />
                    In this workshop, participants will analyze their own
                    organization, how they work with their employees and start
                    to consider what it will take to create more two way
                    dialog, to co-create with their employees, and to help the
                    entire company shift towards a new way of working where you
                    set your employees up for success by helping them
                    understand the business needs and treat them the way you
                     want the employees to treat your customer
                  </Description>
                </Topic>
              </TopicCell>
            </div>
          </TableRow>
          <TableRow>
            <TimeCell>
              16.30
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [MartinaNiemann] }>
                <Summary>
                  Martina Niemann, Vice President HR Management, Lufthansa
                </Summary>
                <Description>
                  To be announced
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              17.00
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [KevinGoldsmith] }>
                <Summary>
                  Kevin Goldsmith, VP of Engineering, AstrumU
                </Summary>
                <Description>
                  Building psychological safety in your teams is critical if you
                  want them to perform at their best. The challenge is how to
                  develop and encourage the trust and collaboration and to make
                  sure that all voices are heard. The agile community has
                  developed facilitation exercises and tools that make
                  conversations more democratic and inclusive. I have used some
                  of these techniques with my teams for years and have found
                  them incredibly valuable. I will teach you some of the agile
                  methods that I use for large and small team meetings,
                  brainstorms, and one-on-ones that encourage all team members
                  to participate. These tools also help make sure that all
                  voices are respected and valued.
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              17.45
            </TimeCell>
            <TopicCell>
              <Topic kind={ "break" }>
                <Summary>
                  Closing
                </Summary>
              </Topic>
            </TopicCell>
          </TableRow>
        </TableBody>
      </LargeWrapper>
    </Container>
  </SectionWrapper>
);

export default Schedule;
