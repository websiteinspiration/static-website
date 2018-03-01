import React from 'react'
import styled, { css } from 'styled-components'
import RetinaImage from 'react-retina-image'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import Item from './Item'

// Images
import stack from '../../../static/graphics/stack.png'
import retinaStack from '../../../static/graphics/stack@2x.png'

const Benefits = props => (
  <Wrapper {...props}>
    <Container>
      <Title align="left">
        Honeypots Mission is to Build Great Engineering Teams
      </Title>

      <Flex>
        <ItemsWrapper>
          <ItemWrapper>
            <Item
              title="Acces the Top 10% of Tech Candidates "
              text="Our candidates are prescreened through a video call and a technical assessment. You only pay when you hire. And for growing teams we offer competitive pricing!  "
            />
          </ItemWrapper>
          <ItemWrapper>
            <Item
              title="Tech Recruitment Education"
              text="Your Customer Success Manager will guide you through the hiring process, provide active support and help you benchmark your salaries and processes."
            />
          </ItemWrapper>
          <ItemWrapper>
            <Item
              title="Free Visa Support"
              text="70% of Honeypot talents are European, but if you do hire somebody from outside the EU, we offer full visa support for free! "
            />
          </ItemWrapper>
          <ItemWrapper>
            <Item
              title="Hire Quicker"
              text="With 95% response rates, you can fill your pipeline and build your team quicker than other channels. 80% of companies hire within 4 weeks."
            />
          </ItemWrapper>
        </ItemsWrapper>

        <ImageWrapper>
          <RetinaImage src={[stack, retinaStack]} />
        </ImageWrapper>
      </Flex>
    </Container>
  </Wrapper>
)

export default Benefits

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 5px;
`

const Flex = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
    align-items: unset;
  `)};
`

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;

  ${mobile(css`
    justify-content: center;
    text-align: center;
  `)};
`

const ItemWrapper = styled.div`
  flex: 1 1 auto;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`

const ImageWrapper = styled.div`
  flex: 1 0 auto;

  img {
    width: 310px;
    height: auto;
    display: block;
    line-height: 1;
  }

  ${mobile(css`
    margin-bottom: 50px;
    order: -1;
  `)};
`
