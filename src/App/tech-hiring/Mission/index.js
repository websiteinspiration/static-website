import React from 'react'
import styled, { css } from 'styled-components'
import RetinaImage from 'react-retina-image'

// Utilities
import { mobile } from '../../../utils/style/media'

// Local
import Container from '../../../shared/Container'
import Title from '../../../shared/Section/Title'
import I18n from '../../../shared/I18n'
import Item from './Item'

// Images
import stack from '../../../static/graphics/stack.png'
import retinaStack from '../../../static/graphics/stack@2x.png'

const Benefits = props => (
  <I18n ns="employer">
    {t => (
      <Wrapper {...props}>
        <Container>
          <Title align="left">{t('mission.title')}</Title>

          <Flex>
            <ItemsWrapper>
              <ItemWrapper>
                <Item title={t('mission.1-title')} text={t('mission.1-desc')} />
              </ItemWrapper>
              <ItemWrapper>
                <Item title={t('mission.2-title')} text={t('mission.2-desc')} />
              </ItemWrapper>
              <ItemWrapper>
                <Item title={t('mission.3-title')} text={t('mission.3-desc')} />
              </ItemWrapper>
              <ItemWrapper>
                <Item title={t('mission.4-title')} text={t('mission.4-desc')} />
              </ItemWrapper>
            </ItemsWrapper>

            <ImageWrapper>
              <RetinaImage src={[stack, retinaStack]} />
            </ImageWrapper>
          </Flex>
        </Container>
      </Wrapper>
    )}
  </I18n>
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
