import React from 'react';
import { Dot, Container, AverageContainer, Label } from './DailyAveragesSytles';

const DailyAverages: React.FC = () => {
  const isPresentDailyAvg = 0.9;
  const isAbsentDailyAvg = 0.8;

  const isPresentLabel = `${isPresentDailyAvg} daily avg.`;
  const isAbsentLabel = `${isAbsentDailyAvg} daily avg.`;

  return (
    <Container>
      <AverageContainer>
        <Dot green />
        <Label>{isPresentLabel}</Label>
      </AverageContainer>
      <AverageContainer>
        <Dot red />
        <Label>{isAbsentLabel}</Label>
      </AverageContainer>
    </Container>
  );
};

export default DailyAverages;
