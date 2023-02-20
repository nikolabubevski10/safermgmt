import React from 'react';
import { Container, BarContainer, Bar, Label } from './DayStyles';

const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

interface Props {
  day: [number, number];
  index: number;
  highestValue: number;
  isAbsentSelected: boolean;
  isPresentSelected: boolean;
}

const Day: React.FC<Props> = ({
  day,
  index,
  highestValue,
  isAbsentSelected,
  isPresentSelected,
}: Props) => {
  const label = dayLabels[index] || '';

  const presentCount = day[0] || 0;
  const absentCount = day[1] || 0;

  const presentCountPercent = presentCount / highestValue;
  const absentCountPercent = absentCount / highestValue;

  const absentCountText = absentCount ? absentCount : '';
  const presentCountText = presentCount ? presentCount : '';

  return (
    <Container>
      <Label>{label}</Label>
      <BarContainer>
        <Bar green percent={presentCountPercent} shouldShow={isPresentSelected}>
          {presentCountText}
        </Bar>
        <Bar red percent={absentCountPercent} shouldShow={isAbsentSelected}>
          {absentCountText}
        </Bar>
      </BarContainer>
    </Container>
  );
};

export default Day;
