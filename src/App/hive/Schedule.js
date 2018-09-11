import React from 'react';
import styled, { css } from 'styled-components';

import { mobile } from '../../utils/style/media'
import SectionTitle from './SectionTitle';
import { Container, LargeWrapper } from './Containers';

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

const Schedule = () => (
  <SectionWrapper id="schedule">
    <Container>
      <LargeWrapper>
        <SectionTitle color="dark">Schedule.</SectionTitle>
      </LargeWrapper>
      <TableHeader>
        <HeaderIcon>Breaks</HeaderIcon>
        <HeaderIcon>Keynotes</HeaderIcon>
        <HeaderIcon>Case Studies</HeaderIcon>
        <HeaderIcon>Panel</HeaderIcon>
        <HeaderIcon>Workshop</HeaderIcon>
      </TableHeader>
    </Container>
  </SectionWrapper>
);

export default Schedule;
