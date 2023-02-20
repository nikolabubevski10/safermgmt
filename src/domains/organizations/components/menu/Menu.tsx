import React from 'react';
import { Container, MenuButton } from './MenuStyles';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import { setView } from '../../state/OrganizationsActions';
import views from '../../state/assets/views';

const generalText = 'General';
const preScreenText = 'Pre-Screen';
const personConfigText = 'Person Config';
const profileSetupText = 'Profile Setup';
const surveyAlertsText = 'Survey & Alerts';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { view } = useAppSelector(({ organizations }) => organizations);

  const tgeneralText = t(generalText);
  const tpreScreenText = t(preScreenText);
  const tpersonConfigText = t(personConfigText);
  const tprofileSetupText = t(profileSetupText);
  const tsurveyAlertsText = t(surveyAlertsText);

  const isInGeneralView = view === views.general;
  const isInPreScreenView = view === views.preScreen;
  const isInPersonConfigView = view === views.personConfig;
  const isInProfileSetupView = view === views.profileSetup;
  const isInSurveyAlertsView = view === views.surveyAlerts;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElem = e.target as HTMLButtonElement;
    dispatch(() => {
      dispatch(setView(buttonElem.value));
    });
  };

  return (
    <Container>
      <MenuButton
        isActive={isInGeneralView}
        value={views.general}
        onClick={handleButtonClick}
      >
        {tgeneralText}
      </MenuButton>
      <MenuButton
        isActive={isInPreScreenView}
        value={views.preScreen}
        onClick={handleButtonClick}
      >
        {tpreScreenText}
      </MenuButton>
      <MenuButton
        isActive={isInPersonConfigView}
        value={views.personConfig}
        onClick={handleButtonClick}
      >
        {tpersonConfigText}
      </MenuButton>
      <MenuButton
        isActive={isInProfileSetupView}
        value={views.profileSetup}
        onClick={handleButtonClick}
      >
        {tprofileSetupText}
      </MenuButton>
      <MenuButton
        isActive={isInSurveyAlertsView}
        value={views.surveyAlerts}
        onClick={handleButtonClick}
      >
        {tsurveyAlertsText}
      </MenuButton>
    </Container>
  );
};

export default Menu;
