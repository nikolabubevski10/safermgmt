import React from 'react';
import { Container, MenuButton } from './MenuStyles';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import { setView } from '../../state/StudentProfileActions';
import views from '../../state/assets/views';

const infoText = 'Info';
const attendanceText = 'Attendance';
const coursesScheduleText = 'Courses & schedule';
const contactsText = 'Contacts';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const tinfoText = t(infoText);
  const dispatch = useAppDispatch();
  const tattendanceText = t(attendanceText);
  const tcoursesScheduleText = t(coursesScheduleText);
  const tcontactsText = t(contactsText);

  const { view } = useAppSelector(({ studentProfile }) => studentProfile);

  const isInfoView = view === views.info;
  const isAttendanceView = view === views.attendance;
  const isScheduleView = view === views.schedule;
  const isContactsView = view === views.contacts;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElem = e.target as HTMLButtonElement;
    dispatch(setView(buttonElem.value));
  };

  return (
    <Container>
      <MenuButton
        isActive={isInfoView}
        value={views.info}
        onClick={handleButtonClick}
      >
        {tinfoText}
      </MenuButton>
      <MenuButton
        isActive={isAttendanceView}
        value={views.attendance}
        onClick={handleButtonClick}
      >
        {tattendanceText}
      </MenuButton>
      <MenuButton
        isActive={isScheduleView}
        value={views.schedule}
        onClick={handleButtonClick}
      >
        {tcoursesScheduleText}
      </MenuButton>
      <MenuButton
        isActive={isContactsView}
        value={views.contacts}
        onClick={handleButtonClick}
      >
        {tcontactsText}
      </MenuButton>
    </Container>
  );
};

export default Menu;
