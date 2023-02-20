import React, { useEffect } from 'react';
import { Container, Inner } from './AttendanceChartStyles';
import { ITimeGroup } from '../../../../hooks/useDateRangeBreakpoints';
import getChartOptions from './utils/getChartOptions';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Spinner from './components/spinner/Spinner';

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
  isAbsentSelected: boolean;
  isLoading: boolean;
  isPresentSelected: boolean;
  timeGroup: ITimeGroup | null;
  view: string;
}

const AttendanceChart: React.FC<Props> = ({
  chartData,
  dateRangeRef,
  dimensionRef,
  dimensions,
  isAbsentSelected,
  isLoading,
  isPresentSelected,
  timeGroup,
  view,
}: Props) => {
  const {
    timeGroupCount,
    totalAbsentByTimeGroup,
    totalPresentByTimeGroup,
  } = chartData;

  const options = getChartOptions({
    isAbsentSelected,
    isPresentSelected,
    timeGroup,
    timeGroupCount,
    totalAbsentByTimeGroup,
    totalPresentByTimeGroup,
  });

  useEffect(() => {
    for (let i = 0; i < Highcharts.charts.length; i++) {
      if (Highcharts.charts[i] !== undefined) {
        const { width, height } = dimensions;

        if (width && height) {
          Highcharts.charts[i]?.setSize(width, height);
        }
      }
    }
  }, [dimensions, totalAbsentByTimeGroup, view]);

  return (
    <Container ref={dimensionRef}>
      <Inner ref={dateRangeRef} width={dimensions.width}>
        {isLoading ? (
          <Spinner />
        ) : (
          <HighchartsReact highcharts={Highcharts} options={options} />
        )}
      </Inner>
    </Container>
  );
};

export default AttendanceChart;
