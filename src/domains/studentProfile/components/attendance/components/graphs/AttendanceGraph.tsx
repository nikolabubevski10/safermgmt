import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Container,
  GraphHeader,
  DotSuccess,
  HeaderTitle,
  GraphContent,
  GraphData,
  GraphBar,
  SubHead,
  DotFail,
  SubHeadText,
  SubHeadWrap,
  Graph,
  GraphName,
} from './AttendanceGraphStyles';

const AttendanceGraph: React.FC = () => {
  const showAbsentAttendance = true;
  const showPresentAttendance = true;

  const GraphDays = [
    {
      name: 'Mo',
    },
    {
      name: 'Tu',
    },
    {
      name: 'We',
    },
    {
      name: 'Th',
    },
    {
      name: 'Fr',
    },
  ];

  const { t } = useTranslation();

  const tDailyBreakDown = t('Daily BreakDown');
  const tDailyAvg = t('daily avg');

  const graphData = {
    presentAvg: 92,
    absentAvg: 8,
    totalPresent: 430,
    presentGraphProgress: '88%',
    absanceGraphProgress: '15%',
    totalAbsent: 71,
  };

  // The abow graphData is hardcoded now, Graph will be render live data after API changes.

  return (
    <Container className="graph-container">
      <GraphHeader className="graph-header">
        <HeaderTitle>{tDailyBreakDown}</HeaderTitle>
        <SubHeadWrap>
          <SubHead className="graph-subheader">
            <DotSuccess></DotSuccess>
            <SubHeadText className="graph-header-text">
              {graphData.presentAvg}% {tDailyAvg}.
            </SubHeadText>
          </SubHead>
          <SubHead className="graph-subheader">
            <DotFail></DotFail>
            <SubHeadText className="graph-header-text">
              {graphData.absentAvg}% {tDailyAvg}.
            </SubHeadText>
          </SubHead>
        </SubHeadWrap>
      </GraphHeader>
      <GraphContent className="graph-content">
        {GraphDays.map((data, index) => (
          <Graph key={index}>
            <GraphName>{data.name}</GraphName>
            <GraphData>
              {showPresentAttendance && (
                <GraphBar width={graphData.presentGraphProgress}>
                  {graphData.totalPresent}
                </GraphBar>
              )}
              {showAbsentAttendance && (
                <GraphBar width={graphData.absanceGraphProgress} Absent={true}>
                  {graphData.totalAbsent}
                </GraphBar>
              )}
            </GraphData>
          </Graph>
        ))}
      </GraphContent>
    </Container>
  );
};

export default AttendanceGraph;
