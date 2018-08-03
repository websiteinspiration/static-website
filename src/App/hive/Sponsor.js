import React from 'react'
import styled, { css } from 'styled-components'

// Local
import { Wrapper } from './Containers'
import SectionTitle from './SectionTitle'
import Button from './Buttons'

// Photos
import sponsorBg from '../../static/sponsor-bg.png'
import { mobile } from '../../utils/style/media'

const Sponsor = () => (
  <Container>
    <Wrapper>
      <SponsorWrapper>
        <SectionTitle color="dark">Sponsor.</SectionTitle>
        <Text>
          Hive is an excellent opportunity to reach CTOs, CHROs, VPs of
          Engineering, and Talent Acquisition Leaders in the industry. Contact
          our sponsor team for more information regarding sponsor packages
        </Text>
        <Button color="blue">Contact us</Button>
      </SponsorWrapper>
    </Wrapper>
  </Container>
)

export default Sponsor

// Styles
const Container = styled.section`
  background-image: url(${sponsorBg}),
    linear-gradient(50deg, #dfdfdf 3%, #efefef 100%);
  background-repeat: no-repeat;
  background-position: left -275px, center;
`

const SponsorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-bottom: 46px;
`

const Text = styled.div`
  max-width: 675px;
  font-size: 16px;
  line-height: 1.45;
  margin-bottom: 11px;

  ${mobile(css`
    margin-bottom: 0;
  `)};
`
