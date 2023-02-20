import React, { useEffect } from 'react';
import { Container } from './SurveyEditorStyles';
import { PATHS } from '../../../../globals';
import { Prompt } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../state/hooks';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ConfirmDenyModal from '../shared/confirm-deny-modal/ConfirmDenyModal';
import General from './components/general/General';
import Menu from './components/menu/Menu';
import Questions from './components/questions/Questions';
import Screening from './components/screening/Screening';
import SimpleModal from '../shared/simple-modal/SimpleModal';
import Spinner from '../shared/spinner/Spinner';
import TopBar from './components/top-bar/TopBar';
import views from '../state/assets/views';
import {
  getSurvey,
  launchNewSurvey,
  save,
  setShowNeedsUniqueNameModal,
  setShowSaveErrorModal,
  setShowSaveModal,
  setShowTitleRequiredModal,
} from '../state/SurveysActions';

const needsUniqueNamePrompt =
  'This survey name is not unique. Please choose a unique name.';
const promptMessage =
  'You have unsaved changes, are you sure you want to leave?';
const saveErrorPrompt = 'There was a problem saving your survey.';
const savePrompt = 'Do you want to save your changes?';
const titleRequiredPrompt = 'Survey title is required';

const SurveyEditor: React.FC = () => {
  const { surveyId } = useParams<{ surveyId: string }>();
  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const surveysStore = useAppSelector(({ surveys }) => surveys);
  const tPromptMessage = t(promptMessage);
  const {
    currentQuestionSequence,
    hasBeenChanged,
    isCreatingNewSurvey,
    isLoading,
    isSaved,
    questionUnderEdit,
    showNeedsUniqueNameModal,
    showSaveErrorModal,
    showSaveModal,
    showTitleRequiredModal,
    surveyWithChanges,
    view,
  } = surveysStore;
  const { currentDistrictId } = useAppSelector(({ navigation }) => navigation);

  const hasQuestions = surveyWithChanges.questions.length > 0;
  const isInGeneralView = view === views.general;
  const isInQuestionsView = view === views.questions;
  const isInScreeningView = view === views.screening;
  const showExitPrompt =
    !isSaved && hasBeenChanged && !showSaveModal && !showTitleRequiredModal;
  const showSaveSuccess = isSaved && !isLoading;
  const districtId = currentDistrictId || '';

  const closeSaveErrorModal = () => dispatch(setShowSaveErrorModal(false));
  const closeSaveModal = () => dispatch(setShowSaveModal(false));
  const closeShowNeedsUniqueNameModal = () =>
    dispatch(setShowNeedsUniqueNameModal(false));
  const closeTitleRequiredModal = () =>
    dispatch(setShowTitleRequiredModal(false));
  const confirmSaveModal = () => dispatch(save(goBackToAllSurveys));
  const goBackToAllSurveys = () => history.push(PATHS.surveysAll);
  const handleSaveClick = () => dispatch(save());

  useEffect(() => {
    if (!isCreatingNewSurvey && surveyId) {
      dispatch(getSurvey({ surveyId, districtId }));
    } else if (location.pathname === PATHS.surveysNew) {
      dispatch(launchNewSurvey({ districtId }));
    }
  }, [districtId]);

  useEffect(() => {
    window.onbeforeunload = () => {
      if (!isSaved && hasBeenChanged) return confirm('Confirm refresh');
    };
  }, [isSaved, hasBeenChanged]);

  return (
    <Container>
      <Prompt when={showExitPrompt} message={tPromptMessage} />
      <ConfirmDenyModal
        closeModal={closeSaveModal}
        isLoading={isLoading}
        onConfirm={confirmSaveModal}
        onDeny={goBackToAllSurveys}
        prompt={savePrompt}
        shouldShow={showSaveModal}
      />
      <SimpleModal
        closeModal={closeTitleRequiredModal}
        onConfirm={closeTitleRequiredModal}
        prompt={titleRequiredPrompt}
        shouldShow={showTitleRequiredModal}
      />
      <SimpleModal
        closeModal={closeSaveErrorModal}
        onConfirm={closeSaveErrorModal}
        prompt={saveErrorPrompt}
        shouldShow={showSaveErrorModal}
      />
      <SimpleModal
        closeModal={closeShowNeedsUniqueNameModal}
        onConfirm={closeShowNeedsUniqueNameModal}
        prompt={needsUniqueNamePrompt}
        shouldShow={showNeedsUniqueNameModal}
      />
      <TopBar
        save={handleSaveClick}
        showSaveSuccess={showSaveSuccess}
        surveyName={surveyWithChanges.name}
      />
      <Menu view={view} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {isInGeneralView && (
            <General
              headerTextInputValue={surveyWithChanges.header}
              nameInputValue={surveyWithChanges.name}
            />
          )}
          {isInQuestionsView && (
            <Questions
              currentQuestionSequence={currentQuestionSequence}
              isEmpty={!hasQuestions}
              questions={surveyWithChanges.questions}
              questionUnderEdit={questionUnderEdit}
            />
          )}
          {isInScreeningView && <Screening />}
        </>
      )}
    </Container>
  );
};

export default SurveyEditor;
