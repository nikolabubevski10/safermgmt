import React from 'react';
import {
  Container,
  TitleHeader,
  Wrap,
} from './AttendanceVisitorsSettingsStyles';
import VisitorsSettings from '../components/visitorsSettings/VisitorsSettings';
import Button from '../components/button/Button';
import BackButton from '../components/back-button/BackButton';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../globals';
import { useTranslation } from 'react-i18next';
import ConfirmDenyModal from '../modals/confirm-deny-modal/ConfirmDenyModal';
import { useAppSelector, useAppDispatch } from '../../../state/hooks';
import { setShowSaveModal } from '../state/AttendanceVisitorsActions';

const savePrompt = 'Do you want to save your changes?';

const AttendanceVisitorsSettings: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const visotorsStore = useAppSelector(
    ({ attendanceVisitors }) => attendanceVisitors,
  );

  const { isLoading, showSaveModal } = visotorsStore;

  const handleClick = () => {
    // currently sowing save modal directly , API is not ready.
    dispatch(setShowSaveModal(true));
  };

  const goBackToVisitorsPage = () => {
    history.push(PATHS.attendanceVisitors);
    dispatch(setShowSaveModal(false));
  };

  const confirmSaveModal = () => {
    goBackToVisitorsPage();
  };

  const closeSaveModal = () => dispatch(setShowSaveModal(false));

  const tOptionText = t('Option settings');
  const tSaveText = t('Save Updates');
  return (
    <Container>
      <ConfirmDenyModal
        isLoading={isLoading}
        closeModal={closeSaveModal}
        onConfirm={confirmSaveModal}
        onDeny={goBackToVisitorsPage}
        shouldShow={showSaveModal}
        prompt={savePrompt}
      />
      <TitleHeader>
        <Wrap>
          <BackButton onClick={handleClick} />
          <h1>{tOptionText}</h1>
        </Wrap>
        <Button>{tSaveText}</Button>
      </TitleHeader>
      <VisitorsSettings />
    </Container>
  );
};

export default AttendanceVisitorsSettings;
