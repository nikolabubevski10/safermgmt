import {
  Options,
  PlotOptions,
  ResponsiveOptions,
  SeriesOptionsType,
  TooltipOptions,
  XAxisOptions,
  YAxisOptions,
} from 'highcharts';
import { Theme } from '../../../../../../../assets/styles/Theme';
import { ITimeGroup } from '../../../../../hooks/useDateRangeBreakpoints';

interface IGetChartOptions {
  isAbsentSelected: boolean;
  isPresentSelected: boolean;
  timeGroup: ITimeGroup | null;
  timeGroupCount: number;
  totalAbsentByTimeGroup: number[];
  totalPresentByTimeGroup: number[];
}

const getChartOptions = ({
  isAbsentSelected,
  isPresentSelected,
  timeGroup,
  timeGroupCount,
  totalAbsentByTimeGroup,
  totalPresentByTimeGroup,
}: IGetChartOptions): Options => {
  const largest = Math.max(
    ...totalPresentByTimeGroup,
    ...totalAbsentByTimeGroup,
  );
  const neitherSelected = !isPresentSelected && !isAbsentSelected;

  const series: SeriesOptionsType[] = [
    {
      name: 'Present',
      data: isPresentSelected ? totalPresentByTimeGroup : [],
      color: Theme.secondaryGreenDark,
      type: 'areaspline',
      lineWidth: 3,
      fillColor: Theme.secondaryGreenDarkTrans,
    },
    {
      name: 'Absent',
      data: isAbsentSelected ? totalAbsentByTimeGroup : [],
      color: Theme.secondaryRed,
      type: 'areaspline',
      lineWidth: 3,
      fillColor: Theme.secondaryRedTrans,
    },
    {
      data: neitherSelected
        ? Array.from(Array(timeGroupCount), () => largest)
        : [],
      fillColor: 'transparent',
      type: 'areaspline',
      lineWidth: 0,
    },
  ];

  const tooltip: TooltipOptions = {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0,
    enabled: !neitherSelected,
    hideDelay: 500,
    padding: 10,
    shadow: true,
    shared: true,
    useHTML: true,
  };

  const plotOptions: PlotOptions = {
    series: {
      animation: false,
      pointStart: 0,
      states: {
        hover: {
          enabled: !neitherSelected,
        },
        inactive: {
          opacity: 1,
        },
      },
      showInLegend: false,
      marker: {
        enabled: true,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
            fillColor: Theme.primaryBlueDark,
            radius: 5,
            enabled: true,
            lineWidth: 1,
          },
        },
      },
    },
  };

  const yAxis: YAxisOptions = {
    title: {
      text: '',
    },
    gridLineDashStyle: 'LongDash',
    gridLineWidth: 1,
  };

  const xAxis: XAxisOptions = {
    title: {
      text: '',
    },
    categories: timeGroup?.formattedCategories,
  };

  const responsive: ResponsiveOptions = {
    rules: [
      {
        condition: {
          maxWidth: 700,
          minWidth: 300,
        },
      },
    ],
  };

  const title = {
    text: '',
  };

  const credits = {
    enabled: false,
  };

  const chart = {
    reflow: true,
    animation: false,
  };

  return {
    plotOptions,
    tooltip,
    title,
    credits,
    chart,
    yAxis,
    xAxis,
    series,
    responsive,
  };
};

export default getChartOptions;
