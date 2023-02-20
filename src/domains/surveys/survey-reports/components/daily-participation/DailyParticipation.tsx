import React from 'react';
import { Container, ToolTipStyles } from './DailyParticipationStyles';
import { useAppSelector } from '../../../../../state/hooks';
import useDateRangeBreakPoints from './hooks/useDateRangeBreakpoints';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { isWithinInterval, add } from 'date-fns';
import { ISurveyReport } from '../../state/types';
import { Theme } from '../../../../../assets/styles/Theme';

const DailyParticipation: React.FC = () => {
  const {
    reports,
    startDate,
    endDate,
    isTotalCompletedSelected,
    isTotalIncompletedSelected,
  } = useAppSelector(({ surveyReports }) => surveyReports);

  const { ref, timeGroup } = useDateRangeBreakPoints({
    minCategoryWidth: 29,
    startDate,
    endDate,
  });

  const reportsInTimeRange = reports.filter((r) => {
    return isWithinInterval(r.date, { start: startDate, end: endDate });
  });

  const timeGroupCount = timeGroup ? timeGroup.dates.length : 0;
  const farInTheFuture = add(new Date(), { years: 50 });
  const maxDates = timeGroup ? [...timeGroup.dates, farInTheFuture] : [];

  const reportsSortedByTimeGroup = Array.from(
    Array(timeGroupCount),
  ).map((): ISurveyReport[] => []);
  for (let i = 0; i < reportsInTimeRange.length; i++) {
    const report = reportsInTimeRange[i];

    const indexOfNextTimeGroup = maxDates.findIndex(
      (date) => date.getTime() >= report.date.getTime(),
    );
    const indexOfTimeGroup =
      indexOfNextTimeGroup >= 0
        ? indexOfNextTimeGroup - 1
        : timeGroup
        ? timeGroup.dates.length - 1
        : undefined;

    if (indexOfTimeGroup !== undefined && indexOfTimeGroup >= 0) {
      reportsSortedByTimeGroup[indexOfTimeGroup].push(report);
    }
  }

  const totalCompletedByTimeGroup = reportsSortedByTimeGroup.map(
    (tg) => tg.filter((report: ISurveyReport) => report.isComplete).length,
  );
  const totalIncompletedByTimeGroup = reportsSortedByTimeGroup.map(
    (tg) => tg.filter((report: ISurveyReport) => !report.isComplete).length,
  );

  let series = [];
  if (isTotalCompletedSelected && isTotalIncompletedSelected) {
    series = [
      {
        name: '1',
        data: totalCompletedByTimeGroup,
        color: Theme.secondaryGreenDark,
        tooltip: {
          pointFormat: `<div classname="bob">Complete: {point.y}</div>`,
          headerFormat: `<div>{point.key}</div>`,
        },
      },
      {
        name: '2',
        data: totalIncompletedByTimeGroup,
        color: Theme.secondaryRed,
        tooltip: {
          pointFormat: `<div classname="bob" >Incomplete: {point.y}</div>`,
          headerFormat: `<div>{point.key}</div>`,
        },
      },
    ];
  } else if (isTotalCompletedSelected) {
    series = [
      {
        name: '1',
        data: totalCompletedByTimeGroup,
        color: Theme.secondaryGreenDark,
        tooltip: {
          pointFormat: `<div classname="bob" >Complete: {point.y}</div>`,
          headerFormat: `<div>{point.key}</div>`,
        },
      },
    ];
  } else if (isTotalIncompletedSelected) {
    series = [
      {
        name: '2',
        data: totalIncompletedByTimeGroup,
        color: Theme.secondaryRed,
        tooltip: {
          pointFormat: `<div classname="bob" >Incomplete: {point.y}</div>`,
          headerFormat: `<div>{point.key}</div>`,
        },
      },
    ];
  } else {
    series = [
      {
        name: '',
        data: Array.from(Array(timeGroup ? timeGroup.dates.length : 0)).map(
          () => 0,
        ),
      },
    ];
  }

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: timeGroup?.formattedCategories,
      title: null,
    },
    yAxis: {
      title: null,
      visible: false,
    },
    series,
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: 5,
      },
    },
    tooltip: {
      borderWidth: 0,
      borderRadius: 15,
      useHTML: true,
      className: 'daily-participation-tooltip-container',
      shape: 'callout',
    },
  };

  return (
    <Container ref={ref}>
      <ToolTipStyles />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

export default DailyParticipation;
