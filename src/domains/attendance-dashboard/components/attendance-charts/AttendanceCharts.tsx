import React from 'react';
import { Container } from './AttendanceChartsStyles';
import { ITimeGroup } from '../../hooks/useDateRangeBreakpoints';
import AttendanceChart from './components/attendance-chart/AttendanceChart';
import DayGraph from './components/day-graph/DayGraph';

interface Props {
  chartData: {
    totalPresentByTimeGroup: number[];
    totalAbsentByTimeGroup: number[];
    timeGroupCount: number;
  };
  dimensions: {
    height: number;
    width: number;
  };
  dateRangeRef: React.Ref<HTMLDivElement>;
  dimensionRef: React.Ref<HTMLDivElement>;
  graphSeries: [number, number][];
  highestValue: number;
  isAbsentSelected: boolean;
  isLoading: boolean;
  isPresentSelected: boolean;
  timeGroup: ITimeGroup | null;
  view: string;
}

const AttendanceCharts: React.FC<Props> = ({
  chartData,
  dateRangeRef,
  dimensionRef,
  dimensions,
  graphSeries,
  highestValue,
  isAbsentSelected,
  isLoading,
  isPresentSelected,
  timeGroup,
  view,
}: Props) => {
  return (
    <Container>
      <AttendanceChart
        chartData={chartData}
        dateRangeRef={dateRangeRef}
        dimensionRef={dimensionRef}
        dimensions={dimensions}
        isAbsentSelected={isAbsentSelected}
        isLoading={isLoading}
        isPresentSelected={isPresentSelected}
        timeGroup={timeGroup}
        view={view}
      />
      <DayGraph
        highestValue={highestValue}
        isAbsentSelected={isAbsentSelected}
        isPresentSelected={isPresentSelected}
        series={graphSeries}
      />
    </Container>
  );
};

export default AttendanceCharts;
