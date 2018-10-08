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
import drinksIcon from '../../static/icons/Drinks-Icon.svg';

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
import OddurMagnusson from '../../static/OddurMagnusson.png'
import ErikaEnberg from '../../static/images/ErikaEnberg.png'
import Dasa from '../../static/images/Dasa.png'
import Emma from '../../static/images/Emma.png'
import Kaya from '../../static/images/Kaya.png'
import Eyal from '../../static/images/Eyal.png'
import Teddy from '../../static/images/Teddy.png'
import Jan from '../../static/images/Jan.png'
import Magdalena from '../../static/images/Magdalena.png'
import Katie from '../../static/images/Katie.png'
import Debbie from '../../static/images/Debbie.png'
import Kuba from '../../static/images/Kuba.png'
import Katharina from '../../static/images/katharina-waeschenbach.jpg'

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
  welcome: {
    color: '204, 229, 255',
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
  },
  drinks: {
    color: '247, 246, 246',
    icon: drinksIcon,
    colorIcon: drinksIcon
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

  ${props => (props.kind === 'break' || props.kind === 'drinks'
    || props.kind === 'welcome') && css`
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

  if(TopicKind[kind].icon) {
    return <Img src={ TopicKind[kind].icon } title={ kind } />;
  }

  return null;

};


class Topic extends React.Component {
  constructor(props) {
    super(props);
    const hide = props.hide === undefined ? true : props.hide;
    this.state = {
      hide
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
      border-radius: 50%;
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
              9.15
            </TimeCell>
            <TopicCell>
              <Topic kind={ "welcome" }>
                <Summary>
                  Welcome Talk
                </Summary>
                <Description>
                  Emma Tracey, Co-Founder, Honeypot
                </Description>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              9.20
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [MarkLevy] }>
                <Summary>Mark Levy, Employee Experience Pioneer (formerly at
                  Airbnb)
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
                  Daniel Krauss, CIO and Co-Founder, FlixBus
                </Summary>
                <Description>
                  <b>How to Drive Rapid Growth in Tech through Smart Leadership
                  </b><br />
                  Daniel Krauss is one of the three founders of FlixBus and
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
                  <b>How to Build a Employer Brand to attract Tech Talent</b>
                  <br />
                  Sergej will talk about how ProSiebenSat1 adapted its approach
                  to become more attractive to tech talent. He will focus in
                  particular on changes implemented at SevenOne Media in Berlin.
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
              <Topic kind={ "panel" } avatars={ [MargeauxPelen, Teddy, Jan,
                Magdalena, Kuba, Debbie] }>
                <Summary>
                  Margaux Pelen, Founder, The Learning Studio<br />
                  Teddy Dimitrova, Tech Talent Manager, Bloomon<br />
                  Jan Werth, Senior IT Recruiter, MYTOYS Group<br />
                  Dr. Magdalena Masluk-Meller, Talent Sourcing Lead, Zalando SE
                  <br />
                  Kuba Kucharski, Developer Evangelist, Codility<br />
                  Moderator: Debora Lasoen, Head of Talent Management, Honeypot
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
              12.00
            </TimeCell>
            <TopicCell>
              <Topic kind={ "keynote" } avatars={ [JeriDoris] }>
                <Summary>
                  Jeri Doris, Chief People Officer, Delivery Hero
                </Summary>
                <Description>
                  <b>Improving the Candidate Experience, One Hire at a Time</b>
                  <br />
                  Drawing on her experience from the Bay Area and the recent
                  hyper growth at Delivery Hero, Jeri will explore Candidate
                  Experience in tech recruiting. Zoning in on learnings from
                  Delivery Hero's core people strategy, Jeri will answer three
                  key questions: How does Delivery Hero guarantee an amazing
                  candidate experience?; how does the company hire as many
                  engineers as possible?; and finally, how do Jeri and her team
                  ensure their process is not impacted by hyper growth?
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
                  <Topic kind={ "panel" } avatars={ [
                    AmirFriedman, OddurMagnusson, ErikaEnberg, Eyal, Katie] }>
                    <Summary>
                      Amir Friedman, VP Engineering, kloeckner.i<br />
                      Oddur Snær Magnússon, CTO, Klang Games<br />
                      Erika Enberg, Director, People and Culture,
                      Blacklane<br /> 
                      Eyal Matzkel, Senior Engineering Manager, GoEuro<br />
                      Moderator: Katharina Kretschmer, Customer Success Manager,
                      Honeypot
                    </Summary>
                    <Description>
                      <b>When Engineers become Managers: How, Who and When</b>
                      <br />
                      Managing requires a different skill set from technical
                      work, yet many companies promote their best technical
                      workers to management positions. So what skills and traits
                      make a great engineering leader? And how do you build an
                      organization that reward skilled technical talent that
                      don't want to manage people? Our panelists will discuss
                      leadership development; cultivating a culture that rewards
                      leadership and technical skills equally and how HR and
                      technical leaders can work together to build the
                      organization of the future.
                    </Description>
                  </Topic>
                </TopicCell>
              </TableRow>
              <TableRow>
                <TimeCell>
                  14.30
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "casestudy" } avatars={ [Katharina] }>
                    <Summary>
                      Katharina Wäschenbach, Head of People & Culture, HeyCar
                    </Summary>
                    <Description>
                      <b>Re-designing the Engineering Team While Still on Hyper
                      (business) growth</b>
                      <br />
                      Within six months, BCG Digital Ventures developed, built
                      and launched heycar, an online used car platform in
                      partnership with Volkswagen Financial Services in Germany.
                      A year later the organization is still growing fast while
                      facing challenges along the way that remain while moving
                      fast with the business, but also after more than 60
                      people joined the company and foster a culture to
                      constantly innovate. One of this main challenges reflects
                      the organizational design, which we have recently changed
                      in the engineering team. Here we explicitly changed into
                      working in squads. Changes like this doesn’t come as
                      surprise, it needs to be communicated and implemented
                      while business can’t stop either. We have recognized paint
                      points as well as positive learnings, while implementing
                      the squad logic and which we want to share with a broader
                      audience.
                    </Description>
                  </Topic>
                </TopicCell>
              </TableRow>
              <TableRow>
                <TimeCell>
                  14.45
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "casestudy" } avatars={ [Dasa] }>
                    <Summary>
                      Daša Rupar, Senior Manager, HR Analytics, AUTO1
                    </Summary>
                    <Description>
                      <b>How We Build Data-driven Culture in HR at AUTO1</b>
                      <br />
                      By moving from reactive to proactive business partner,
                      encouraging data-driven culture in HR is essential. Data
                      and analytics allows HR at Auto1 to work on projects that
                      add value to the business. Daša Rupar will present how
                      Auto1 made important steps towards greater efficiency of
                      the recruitment process through the use of analytics. 
                    </Description>
                  </Topic>
                </TopicCell>
              </TableRow>
              <TableRow>
                <TimeCell>
                  15.00
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
                  15.15
                </TimeCell>
                <TopicCell>
                  <Topic kind={ "casestudy" } avatars={ [Kaya, Emma] }>
                    <Summary>
                      Kaya Taner and Emma Tracey, Co-Founders, Honeypot
                    </Summary>
                    <Description>
                      <b>Data Driven Recruitment </b>
                      <br />
                      Benchmark your hiring process with data directly from
                      Honeypot.
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
                      Antonio Arias Lopez, Talent Acquisition Lead, Tipico<br />
                      Jose Arteaga, Tech Talent Acquisition Specialist, Tipico
                      <br />
                      Nico Bräutigam, Tech Talent Acquisition Specialist, Tipico
                    </Summary>
                    <Description>
                      <b>From Agency to Automation: How We Cut Tech
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
                <Topic kind={ "workshop" } avatars={ [MarkLevy] } hide={ false }>
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
                  <b>HR Transformation at Lufthansa</b><br />
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
                  <b>Using Agile Techniques to Build a More Inclusive Team</b>
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
              <Topic kind={ "welcome" }>
                <Summary>
                  Closing
                </Summary>
              </Topic>
            </TopicCell>
          </TableRow>
          <TableRow>
            <TimeCell>
              18.00
            </TimeCell>
            <TopicCell>
              <Topic kind={ "drinks" }>
                <Summary>
                  Drinks
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
