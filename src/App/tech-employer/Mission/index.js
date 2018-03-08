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
        Honeypot Helps You Build Great Engineering Teams
      </Title>

      <Flex>
        <ItemsWrapper>
          <ItemWrapper>
            <Item
              title="Hire Software Developers"
              text="Find frontend, backend, devops, mobile and game developers on Honeypot, with skills ranging from JavaScript, Ruby, PHP, Android, iOS, Scala, Java and many more."
            />
          </ItemWrapper>
          <ItemWrapper>
            <Item
              title="Hire Product Talent"
              text="Build your pipeline of QA Testers and Product Owners to give vision and direction to your product. "
            />
          </ItemWrapper>
          <ItemWrapper>
            <Item
              title="Hire Engineering Leaders"
              text="Hire CTOs, VPs of Engineering, Technical Leads and all other senior Engineering Leaders on Honeypot. "
            />
          </ItemWrapper>
          <ItemWrapper>
            <Item
              title="Hire Data Experts"
              text="Hire Data Scientists and Data Engineers to help you draw actionable insights from your company’s data."
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
