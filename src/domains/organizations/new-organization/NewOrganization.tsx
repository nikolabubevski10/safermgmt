import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../state/hooks';
import Menu from '../components/menu/Menu';
import views from '../state/assets/views';
import General from './components/general/General';
import PersonConfig from './components/person-config/PersonConfig';
import PreScreen from './components/pre-screen/PreScreen';
import ProfileSetup from './components/profile-setup/ProfileSetup';
import SurveyAlert from './components/survey-alert/SurveyAlert';
import {
  Container,
  TopContainer,
  MainActionButton,
  StyledLink,
  OrganizationsTabs,
} from './NewOrganizationStyle';

const NewOrganization: React.FC = () => {
  const OrganizationsStore = useAppSelector(
    ({ organizations }) => organizations,
  );
  const { view, organizationWithChanges } = OrganizationsStore;

  const { t } = useTranslation();

  const tOrgNameTxt = t(organizationWithChanges.name);
  const tOrgSaveTxt = t('Save updates');

  const isInGeneralView = view === views.general;
  const isInPreScreenView = view === views.preScreen;
  const isInPersonConfigView = view === views.personConfig;
  const isInProfileSetupView = view === views.profileSetup;
  const isInSurveyAlertsView = view === views.surveyAlerts;

  return (
    <Container>
      <TopContainer>
        <h1>{tOrgNameTxt}</h1>
        <StyledLink>
          <MainActionButton>{tOrgSaveTxt}</MainActionButton>
        </StyledLink>
      </TopContainer>

      <OrganizationsTabs>
        <Menu />
        {isInGeneralView && <General />}
        {isInPreScreenView && <PreScreen />}
        {isInPersonConfigView && <PersonConfig />}
        {isInProfileSetupView && <ProfileSetup />}
        {isInSurveyAlertsView && <SurveyAlert />}
      </OrganizationsTabs>
    </Container>
  );
};

export default NewOrganization;
