import React from 'react';
import { Container, MenuButton } from './MenuStyles';
import { useTranslation } from 'react-i18next';
import views from '../../state/assets/views';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { setView } from '../../state/SurveyReportsActions';

const audit = 'Audit';
const dailyParticipation = 'Daily Participation';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { view } = useAppSelector(({ surveyReports }) => surveyReports);
  const { t } = useTranslation();
  const tAudit = t(audit);
  const tDailyParticipation = t(dailyParticipation);

  const isInAuditView = view === views.audit;
  const isInDailyParticipationView = view === views.dailyParticipation;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElem = e.target as HTMLButtonElement;
    dispatch(setView(buttonElem.value));
  };

  return (
    <Container>
      <MenuButton
        isActive={isInDailyParticipationView}
        value={views.dailyParticipation}
        onClick={handleButtonClick}
      >
        {tDailyParticipation}
      </MenuButton>
      <MenuButton
        isActive={isInAuditView}
        value={views.audit}
        onClick={handleButtonClick}
      >
        {tAudit}
      </MenuButton>
    </Container>
  );
};

export default Menu;
