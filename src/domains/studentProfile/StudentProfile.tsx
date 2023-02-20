import React from 'react';
import { Container, TitleHeader, Wrap } from './StudentProfileStyle';
import BackButton from './components/back-button/BackButton';
import Menu from './components/menu/Menu';
import Info from './components/info/Info';
import Attendance from './components/attendance/Attendance';
import Button from './components/button/Button';
import Contacts from './components/contacts/Contacts';
import { useAppSelector } from '../../state/hooks';
import views from './state/assets/views';
import Schedule from './components/schedule/Schedule';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const StudentProfile: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  const handleSettingsClick = () => {
    return null;
  };

  const studentsProfileStore = useAppSelector(
    ({ studentProfile }) => studentProfile,
  );

  const { view } = studentsProfileStore;
  const { t } = useTranslation();
  const tStudentName = t('Student Name');
  const tExportReport = t('Export Report');

  const isInfoView = view === views.info;
  const isAttendanceView = view === views.attendance;
  const isScheduleView = view === views.schedule;
  const isContactsView = view === views.contacts;

  return (
    <Container>
      <TitleHeader>
        <Wrap>
          <BackButton onClick={handleClick} />
          <h2>{tStudentName}</h2>
        </Wrap>
        {!isInfoView && (
          <Button onClick={handleSettingsClick}>{tExportReport}</Button>
        )}
      </TitleHeader>
      <Menu />
      {isInfoView && <Info />}
      {isAttendanceView && <Attendance />}
      {isContactsView && <Contacts />}
      {isScheduleView && <Schedule />}
    </Container>
  );
};

export default StudentProfile;
