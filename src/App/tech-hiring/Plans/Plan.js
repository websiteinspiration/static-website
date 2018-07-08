import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Local
import Button from '../../../shared/Button'

// Images
import check from '../../../static/icons/check.svg'

const Plan = ({
  title,
  desc,
  specs,
  disabledSpecs,
  planColor,
  buttonText,
  buttonProps,
  ...props
}) => (
  <Wrapper {...props}>
    <Title planColor={planColor}>{title}</Title>
    <HugeDesc>{desc}</HugeDesc>
    <Specs>
      {specs.map((s, i) => <Spec key={i}>{s}</Spec>)}
      {disabledSpecs.map((s, i) => (
        <Spec key={i} disabled={true}>
          {s}
        </Spec>
      ))}
    </Specs>
    <ButtonWrapper>
      <Button style={{ paddingRight: 50, paddingLeft: 50 }} {...buttonProps}>
        {buttonText}
      </Button>
    </ButtonWrapper>
  </Wrapper>
)

Plan.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  specs: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledSpecs: PropTypes.arrayOf(PropTypes.string),
  planColor: PropTypes.string,
  buttonProps: PropTypes.object,
}

Plan.defaultProps = {
  planColor: 'black',
  buttonProps: {},
  disabledSpecs: [],
}

export default Plan

const Wrapper = styled.div`
  padding: 35px 20px 25px 30px;
  background: white;
  border-radius: 1px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
  margin: 0 0 18px 0;
  line-height: 1.8;
  font-size: ${p => p.theme.font16}px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${p => p.planColor};
`

const HugeDesc = styled.h3`
  color: black;
  font-size: 33px;
  margin: 0 0 37px 0;
  font-weight: normal;
`

const Specs = styled.ul`
  padding: 0;
`

const Spec = styled.li`
  padding-left: 13px;
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: ${p => p.theme.fontBase}px;
  color: ${p => (!p.disabled ? `black` : `rgba(0, 0, 0, 0.5)`)};
  list-style: ${p => (p.disabled ? `none` : `url(${check})`)};

  &:last-child {
    margin-bottom: 0;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 35px;
  text-align: center;
`
