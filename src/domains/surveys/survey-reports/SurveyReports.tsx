import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from './components/menu/Menu';
import FilterButtons from './components/filter-buttons/FilterButtons';
import { Container, TopContainer } from './SurveyReportsStyles';
import SurveyReportsTable from './components/survey-reports-table/surveyReportsTable';
import DailyParticipation from './components/daily-participation/DailyParticipation';
import { useAppSelector, useAppDispatch } from '../../../state/hooks';
import views from './state/assets/views';
import {
  launchSurveyReports,
  handleDateRangeChange,
} from './state/SurveyReportsActions';
import DatePicker from './components/date-picker/DatePicker';

const header = 'Survey Reports';

const SurveyReports: React.FC = () => {
  const { t } = useTranslation();
  const tHeader = t(header);
  const dispatch = useAppDispatch();
  const { view } = useAppSelector(({ surveyReports }) => surveyReports);
  const isInDailyParticipationView = view === views.dailyParticipation;
  const { currentDistrictId } = useAppSelector(({ navigation }) => navigation);

  const onDateChange = (newDates: { startDate: Date; endDate: Date }) => {
    dispatch(handleDateRangeChange(newDates));
  };

  useEffect(() => {
    if (currentDistrictId) {
      dispatch(launchSurveyReports({ districtId: currentDistrictId }));
    }
  }, [currentDistrictId]);

  return (
    <Container>
      <TopContainer>
        <h1>{tHeader}</h1>
      </TopContainer>
      <Menu />
      <DatePicker onDateChange={onDateChange} />
      <FilterButtons />
      <SurveyReportsTable />
      {isInDailyParticipationView && <DailyParticipation />}
    </Container>
  );
};

export default SurveyReports;
