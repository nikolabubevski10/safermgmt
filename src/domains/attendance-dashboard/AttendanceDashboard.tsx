import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../state/hooks';
import {
  Container,
  TopContainer,
  ViewContainer,
} from './AttendanceDashboardStyles';
import AttendanceCharts from './components/attendance-charts/AttendanceCharts';
import Menu from './components/menu/Menu';
import DatePicker from './components/date-picker/DatePicker';
import views from './state/assets/views';
import StudentsTable from './components/students-table/StudentsTable';
import MostAbsences from './components/most-absences/MostAbsences';
import { launchAttendanceDashboard } from './state/AttendanceDashboardActions';
import { handleDateRangeChange } from './state/AttendanceDashboardActions';
import { IDate, TStudentsData } from './state/types';
import FilterButtons from './components/filter-buttons/FilterButtons';
import useDateRangeBreakpoints from './hooks/useDateRangeBreakpoints';
import getChartData from './utils/getChartData';
import useDimensions from './hooks/useDimensions';
import getGraphData from './utils/getGraphData';
import getStudentsData from './utils/getStudentsData';

const header = 'Dashboard';

const AttendanceDashboard: React.FC = () => {
  const { t } = useTranslation();
  const tHeader = t(header);
  const dispatch = useAppDispatch();

  const {
    attendances,
    endDate,
    isAbsentSelected,
    isLoading,
    isPresentSelected,
    startDate,
    view,
  } = useAppSelector(({ attendanceDashboard }) => attendanceDashboard);

  const { currentSchoolId } = useAppSelector(({ navigation }) => navigation);

  const isInTotalView = view === views.totals;
  const isInStudentsView = view === views.students;
  const isInMostAbsencesView = view === views.mostAbsences;
  const shouldShowFilterButtons = isInTotalView || isInStudentsView;

  const onDateChange = (date: IDate) => dispatch(handleDateRangeChange(date));

  const { ref: dateRangeRef, timeGroup } = useDateRangeBreakpoints({
    minCategoryWidth: 29,
    startDate,
    endDate,
    triggerVars: [isLoading, view],
  });

  const { ref: dimensionRef, dimensions } = useDimensions();

  const {
    timeGroupCount,
    totalAbsentByTimeGroup,
    totalPresentByTimeGroup,
    attendancesInTimeRange,
  } = useMemo(() => {
    return getChartData({
      attendances,
      endDate,
      startDate,
      timeGroup,
    });
  }, [attendances, timeGroup, startDate, endDate]);

  const { graphSeries, highestValue } = useMemo(() => {
    return getGraphData({
      attendances,
      isAbsentSelected,
      isPresentSelected,
    });
  }, [attendances, isPresentSelected, isAbsentSelected]);

  const chartData = {
    timeGroupCount,
    totalAbsentByTimeGroup,
    totalPresentByTimeGroup,
  };

  const studentsData: TStudentsData = useMemo(() => {
    return getStudentsData({
      attendances,
      endDate,
      startDate,
    });
  }, [attendances]);

  useEffect(() => {
    dispatch(launchAttendanceDashboard());
  }, [currentSchoolId]);

  return (
    <Container>
      <TopContainer>
        <h1>{tHeader}</h1>
      </TopContainer>
      <Menu />
      <DatePicker onDateChange={onDateChange} />
      {shouldShowFilterButtons && (
        <FilterButtons
          totalAbsentByTimeGroup={totalAbsentByTimeGroup}
          totalPresentByTimeGroup={totalPresentByTimeGroup}
        />
      )}
      <ViewContainer>
        {isInTotalView && (
          <AttendanceCharts
            chartData={chartData}
            dateRangeRef={dateRangeRef}
            dimensionRef={dimensionRef}
            dimensions={dimensions}
            graphSeries={graphSeries}
            highestValue={highestValue}
            isAbsentSelected={isAbsentSelected}
            isLoading={isLoading}
            isPresentSelected={isPresentSelected}
            timeGroup={timeGroup}
            view={view}
          />
        )}
        {isInStudentsView && (
          <StudentsTable
            attendancesInTimeRange={attendancesInTimeRange}
            isPresentSelected={isPresentSelected}
            isAbsentSelected={isAbsentSelected}
          />
        )}
        {isInMostAbsencesView && <MostAbsences studentsData={studentsData} />}
      </ViewContainer>
    </Container>
  );
};

export default AttendanceDashboard;
