import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  TopContainer,
  SurveyColumn,
  StyledLink,
  ColumnContainer,
} from './SurveySelectionStyles';
import { MainActionButton } from '../shared/SharedStyles';
import SurveyCard from './components/surveyCard/SurveyCard';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import {
  launchSurveySelection,
  launchNewSurvey,
  deleteSurvey,
  setShowConfirmDeleteSurveyModal,
} from '../state/SurveysActions';
import Spinner from '../shared/spinner/Spinner';
import ConfirmDenyModal from '../shared/confirm-deny-modal/ConfirmDenyModal';

const newText = 'New Survey';
const allText = 'All Surveys';
const confirmDeleteSurveyPrompt =
  'Are you sure you want to delete this survey?';

const SurveySelection: React.FC = () => {
  const [idToDelete, setIdToDelete] = useState<string>('');
  const { t } = useTranslation();
  const tNewText = t(newText);
  const tAllText = t(allText);
  const tConfirmDeleteSurveyPrompt = t(confirmDeleteSurveyPrompt);
  const dispatch = useAppDispatch();

  const {
    surveysHistory,
    isLoading,
    showConfirmDeleteSurveyModal,
  } = useAppSelector(({ surveys }) => surveys);
  const surveys = surveysHistory[0] || [];
  const { currentDistrictId } = useAppSelector(({ navigation }) => navigation);
  const districtId = currentDistrictId || '';

  const closeConfirmDeleteSurveyModal = () =>
    dispatch(setShowConfirmDeleteSurveyModal(false));

  const handleDeleteClick = (id: string) => {
    setIdToDelete(id);
    dispatch(setShowConfirmDeleteSurveyModal(true));
  };

  const confirmDeleteSurveyModal = () =>
    dispatch(deleteSurvey({ id: idToDelete }));

  const handleNewSurveyClick = useCallback(() => {
    dispatch(launchNewSurvey({ districtId }));
  }, [districtId]);

  useEffect(() => {
    dispatch(launchSurveySelection({ districtId }));
  }, [districtId]);

  return (
    <Container>
      <ConfirmDenyModal
        shouldShow={showConfirmDeleteSurveyModal}
        closeModal={closeConfirmDeleteSurveyModal}
        onConfirm={confirmDeleteSurveyModal}
        onDeny={closeConfirmDeleteSurveyModal}
        prompt={tConfirmDeleteSurveyPrompt}
      />
      <TopContainer>
        <h1>{tAllText}</h1>
        <StyledLink to={'new-survey'}>
          {isLoading ? (
            <Spinner />
          ) : (
            <MainActionButton onClick={handleNewSurveyClick}>
              {tNewText}
            </MainActionButton>
          )}
        </StyledLink>
      </TopContainer>
      <ColumnContainer>
        <SurveyColumn>
          {surveys.map((survey, i) =>
            i % 2 === 0 ? (
              <SurveyCard
                key={i}
                survey={survey}
                handleDeleteClick={handleDeleteClick}
              />
            ) : null,
          )}
        </SurveyColumn>
        <SurveyColumn>
          {surveys.map((survey, i) =>
            i % 2 !== 0 ? (
              <SurveyCard
                key={i}
                survey={survey}
                handleDeleteClick={handleDeleteClick}
              />
            ) : null,
          )}
        </SurveyColumn>
      </ColumnContainer>
    </Container>
  );
};

export default SurveySelection;
