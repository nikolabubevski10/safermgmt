import React, { useState } from 'react';
import {
  Container,
  TitleHeader,
  DatePickerContainer,
} from './AttendanceVisitorsStyles';
import Button from './components/button/Button';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../globals';
import VisitorsTable from './components/visitorsTable/VisitorsTable';
import { useAppDispatch } from '../../state/hooks';
import { setFieldsOptions } from './state/AttendanceVisitorsActions';
import { useTranslation } from 'react-i18next';
import DatePickerCalender from './components/date-picker/DatePickerCalender';
import DatePickerToggle from './components/date-picker/components/icons/DatePickerToggle';
import moment from 'moment';

const AttendanceVisitors: React.FC = () => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useAppDispatch();
  dispatch(setFieldsOptions());
  const { t } = useTranslation();

  const handleSettingsClick = () => {
    history.push(PATHS.attendanceVisitorsSettings);
  };

  const tVisitors = t('Visitors');
  const tOptionText = t('Option settings');

  const handleDateChange = (date: Date) => {
    setStartDate(date);
    setIsOpen(!isOpen);
  };
  const handleOpenPicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <TitleHeader>
        <h1>{tVisitors}</h1>
        <Button onClick={handleSettingsClick}>{tOptionText}</Button>
      </TitleHeader>
      <DatePickerContainer>
        <DatePickerCalender
          startDate={startDate}
          handleDateChange={handleDateChange}
          isOpen={isOpen}
        >
          <DatePickerContainer onClick={handleOpenPicker}>
            {moment(startDate).format('ddd, MMM DD,YYYY')}
            <DatePickerToggle isOpen={!isOpen} />
          </DatePickerContainer>
        </DatePickerCalender>
      </DatePickerContainer>
      <VisitorsTable />
    </Container>
  );
};

export default AttendanceVisitors;
