import React from 'react'
import styled, { css } from 'styled-components'
import MediaQuery from 'react-responsive'

// Utilities
import { mobile, mobileMediaString } from '../../utils/style/media'

// Local
import Container from '../Container'
import Title from '../Section/Title'
import Button from '../Button'
import I18n from '../I18n'

const JoinCommunity = props => (
  <I18n ns="shared">
    {t => (
      <Wrapper {...props}>
        <Container>
          <Flex>
            <Texts>
              <MediaQuery
                query={mobileMediaString}
                children={matches => (
                  <Title align={matches ? `center` : 'left'} rect={false}>
                    {t('join-community')}
                  </Title>
                )}
              />
              <Desc>{t('devs-signing-up')}</Desc>
            </Texts>
            <ButtonWrapper>
              <Button
                href="https://www.honeypot.io/users/sign_up"
                style={{ paddingRight: 58, paddingLeft: 58 }}
              >
                {t('Join')}
              </Button>
            </ButtonWrapper>
          </Flex>
        </Container>
      </Wrapper>
    )}
  </I18n>
)

export default JoinCommunity

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
    align-items: unset;
    justify-content: center;
    text-align: center;
  `)};
`

const Texts = styled.div`
  flex: 1 1 auto;
`

const Desc = styled.p`
  margin: 20px 0 0 0;
  color: ${p => p.theme.dimText};
  font-size: ${p => p.theme.font16};
`

const ButtonWrapper = styled.div`
  flex: 0 0 auto;

  ${mobile(css`
    margin-top: 30px;
  `)};
`
