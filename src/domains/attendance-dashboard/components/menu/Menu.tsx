import React from 'react';
import { Container, MenuButton } from './MenuStyles';
import { useTranslation } from 'react-i18next';
import views from '../../state/assets/views';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import { setView } from '../../state/AttendanceDashboardActions';

const totalsText = 'Totals';
const studentsText = 'Students';
const mostAbsenceText = 'Most Absences';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const tTotalsText = t(totalsText);
  const tStudentsText = t(studentsText);
  const tMostAbsenceText = t(mostAbsenceText);

  const { view } = useAppSelector(
    ({ attendanceDashboard }) => attendanceDashboard,
  );

  const isInTotalView = view === views.totals;
  const isInStudentsView = view === views.students;
  const isInMostAbsencesView = view === views.mostAbsences;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElem = e.target as HTMLButtonElement;
    dispatch(setView(buttonElem.value));
  };

  return (
    <Container>
      <MenuButton
        isActive={isInTotalView}
        value={views.totals}
        onClick={handleButtonClick}
      >
        {tTotalsText}
      </MenuButton>
      <MenuButton
        isActive={isInStudentsView}
        value={views.students}
        onClick={handleButtonClick}
      >
        {tStudentsText}
      </MenuButton>
      <MenuButton
        isActive={isInMostAbsencesView}
        value={views.mostAbsences}
        onClick={handleButtonClick}
      >
        {tMostAbsenceText}
      </MenuButton>
    </Container>
  );
};

export default Menu;
