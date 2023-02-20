import React from 'react';
import { useTranslation } from 'react-i18next';
import Day from './components/day/Day';
import { Container, Title } from './DayGraphStyles';

const titleText = 'Daily Breakdown';

type TSeries = [number, number][];

interface Props {
  highestValue: number;
  series: TSeries;
  isPresentSelected: boolean;
  isAbsentSelected: boolean;
}

const AttendanceGraph: React.FC<Props> = ({
  highestValue,
  series,
  isPresentSelected,
  isAbsentSelected,
}: Props) => {
  const { t } = useTranslation();

  const tTitle = t(titleText);

  return (
    <Container>
      <Title>{tTitle}</Title>
      {series.map((day, index) => (
        <Day
          day={day}
          index={index}
          key={index}
          highestValue={highestValue}
          isPresentSelected={isPresentSelected}
          isAbsentSelected={isAbsentSelected}
        />
      ))}
    </Container>
  );
};

export default AttendanceGraph;
