import { ISurvey } from '../../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../state/store';
import getSurveyQuestionsAdapter from '../../../../data/adapters/getSurvey';
import getAllSurveysAdapter from '../../../../data/adapters/getAllSurveys';
import surveyDelete from '../../../../data/adapters/surveyDelete';
import surveyCreate from '../../../../data/adapters/surveyCreate';
import surveyUpdate from '../../../../data/adapters/surveyUpdate';
import { TQuestion } from '../../types';
import _ from 'lodash';
import prepareNewSurveyQuestions from './utils/prepareNewSurveyQuestions';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_SURVEY_FAIL = 'ADD_SURVEY_FAIL';
export const ADD_SURVEY_SUCCESS = 'ADD_SURVEY_SUCCESS';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DELETE_SURVEY_FAIL = 'DELETE_SURVEY_FAIL';
export const DELETE_SURVEY_SUCCESS = 'DELETE_SURVEY_SUCCESS';
export const GET_ALL_SURVEYS_SUCCESS = 'GET_ALL_SURVEYS_SUCCESS';
export const GET_SURVEY_QUESTIONS = 'GET_SURVEY_QUESTIONS';
export const GET_SURVEY_SUCCESS = 'GET_SURVEY_SUCCESS';
export const GET_SURVEYS_FAIL = 'GET_SURVEYS_FAIL';
export const HANDLE_HEADER_TEXT_INPUT_CHANGE =
  'HANDLE_HEADER_TEXT_INPUT_CHANGE';
export const HANDLE_NAME_INPUT_CHANGE = 'HANDLE_NAME_INPUT_CHANGE';
export const LAUNCH_NEW_SURVEY_SUCCESS = 'LAUNCH_NEW_SURVEY_SUCCESS';
export const LAUNCH_NEW_SURVEY_FAIL = 'LAUNCH_NEW_SURVEY_FAIL';
export const LAUNCH_SURVEY_SELECTION = 'LAUNCH_SURVEY_SELECTION';
export const ON_QUESTION_CHANGE = 'ON_QUESTION_CHANGE';
export const REGISTER_CHANGE = 'REGISTER_CHANGE';
export const RESET_SAVE_STATE = 'RESET_SAVE_STATE';
export const RESET_SURVEY_WITH_CHANGES = 'RESET_SURVEY_WITH_CHANGES';
export const SAVE = 'SAVE';
export const SELECT_QUESTION = 'SELECT_QUESTION';
export const SET_CURRENT_QUESTION_SEQUENCE = 'SET_CURRENT_QUESTION_SEQUENCE';
export const SET_IS_CREATING_NEW_SURVEY = 'SET_IS_CREATING_NEW_SURVEY';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_QUESTION_UNDER_EDIT = 'SET_QUESTION_UNDER_EDIT';
export const SET_SHOW_CONFIRM_DELETE_SURVEY_MODAL =
  'SET_SHOW_CONFIRM_DELETE_SURVEY_MODAL';
export const SET_SHOW_NEEDS_UNIQUE_NAME_MODAL =
  'SET_SHOW_NEEDS_UNIQUE_NAME_MODAL';
export const SET_SHOW_SAVE_ERROR_MODAL = 'SET_SHOW_SAVE_ERROR_MODAL';
export const SET_SHOW_SAVE_MODAL = 'SET_SHOW_SAVE_MODAL';
export const SET_SHOW_TITLE_REQUIRED_MODAL = 'SET_SHOW_TITLE_REQUIRED_MODAL';
export const SET_SURVEY_ID_UNDER_EDIT = 'SET_SURVEY_ID_UNDER_EDIT';
export const SET_VIEW = 'SET_VIEW';
export const TOGGLE_QUESTION_VISIBILITY = 'TOGGLE_QUESTION_VISIBILITY';
export const TOGGLE_SURVEY_VISIBILITY_FAIL = 'TOGGLE_SURVEY_VISIBILITY_FAIL';
export const TOGGLE_SURVEY_VISIBILITY_SUCCESS =
  'TOGGLE_SURVEY_VISIBILITY_SUCCESS';
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const UPDATE_SURVEY_FAIL = 'UPDATE_SURVEY_FAIL';
export const UPDATE_SURVEY_SUCCESS = 'UPDATE_SURVEY_SUCCESS';
export const HANDLE_NEEDS_UNIQUE_NAME = 'HANDLE_NEEDS_UNIQUE_NAME';

export interface IdAction {
  type: typeof SET_SURVEY_ID_UNDER_EDIT | typeof TOGGLE_VISIBILITY;
  id: string;
}

export interface SetIsCreatingNewSurveyAction {
  type: typeof SET_IS_CREATING_NEW_SURVEY;
  bool: boolean;
}

export interface SetViewAction {
  type: typeof SET_VIEW;
  view: string;
}

export interface GetAllSurveysSuccessAction {
  type: typeof GET_ALL_SURVEYS_SUCCESS;
  data: [];
}

export interface GetSurveysFailAction {
  type: typeof GET_SURVEYS_FAIL;
  errorMessage: string;
}

export interface GetSurveyQuestionsSuccessAction {
  type: typeof GET_SURVEY_SUCCESS;
  data: ISurvey;
}

export interface GetSurveyQuestionsFailAction {
  type: typeof GET_SURVEY_QUESTIONS;
  errorMessage: string;
}

export interface RegisterChangeAction {
  type: typeof REGISTER_CHANGE;
}

export interface HandleNameInputChangeAction {
  type: typeof HANDLE_NAME_INPUT_CHANGE;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface HandleHeaderTextInputChangeAction {
  type: typeof HANDLE_HEADER_TEXT_INPUT_CHANGE;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface SetShowSaveModalAction {
  type: typeof SET_SHOW_SAVE_MODAL;
  bool: boolean;
}

export interface ToggleQuestionVisibilityAction {
  type: typeof TOGGLE_QUESTION_VISIBILITY;
  questionSequence: number;
}

export interface UpdateQuestionAction {
  type: typeof UPDATE_QUESTION;
}

export interface DeleteQuestionAction {
  type: typeof DELETE_QUESTION;
  questionSequence: number;
}

export interface SetShowTitleRequiredModalAction {
  type: typeof SET_SHOW_TITLE_REQUIRED_MODAL;
  bool: boolean;
}

export interface SetCurrentQuestionSequenceAction {
  type: typeof SET_CURRENT_QUESTION_SEQUENCE;
  questionIndex: number | null;
}

export interface SelectQuestionAction {
  type: typeof SELECT_QUESTION;
  questionSequence: number | null;
  questionText: string;
}

export interface OnQuestionChangeAction {
  type: typeof ON_QUESTION_CHANGE;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface SetQuestionUnderEditAction {
  type: typeof SET_QUESTION_UNDER_EDIT;
  value: string;
}

export interface AddSurveySuccessAction {
  type: typeof ADD_SURVEY_SUCCESS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export interface ToggleSurveyVisibilitySuccessAction {
  type: typeof TOGGLE_SURVEY_VISIBILITY_SUCCESS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export interface ToggleSurveyVisibilityFailAction {
  type: typeof TOGGLE_SURVEY_VISIBILITY_FAIL;
  errorMessage: string;
}

export interface AddSurveyFailAction {
  type: typeof ADD_SURVEY_FAIL;
  errorMessage: string;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface AddQuestionAction {
  type: typeof ADD_QUESTION;
  questionIndex: number;
}

export interface LaunchNewSurveySuccessAction {
  type: typeof LAUNCH_NEW_SURVEY_SUCCESS;
}

export interface LaunchNewSurveyFailAction {
  type: typeof LAUNCH_NEW_SURVEY_FAIL;
}

export interface SetShowSaveErrorModalAction {
  type: typeof SET_SHOW_SAVE_ERROR_MODAL;
  bool: boolean;
}

export interface DeleteSurveySuccessAction {
  type: typeof DELETE_SURVEY_SUCCESS;
  id: string;
}

export interface DeleteSurveyFailAction {
  type: typeof DELETE_SURVEY_FAIL;
  errorMessage: string;
}

export interface UpdateSurveySuccessAction {
  type: typeof UPDATE_SURVEY_SUCCESS;
}

export interface UpdateSurveyFailAction {
  type: typeof UPDATE_SURVEY_FAIL;
  errorMessage: string;
}

export interface SetShowNeedsUniqueNameModalAction {
  type: typeof SET_SHOW_NEEDS_UNIQUE_NAME_MODAL;
  bool: boolean;
}

export interface SaveAction {
  type: typeof SAVE;
}

export interface HandleNeedsUniqueNameAction {
  type: typeof HANDLE_NEEDS_UNIQUE_NAME;
}

export interface SetShowConfirmDeleteSurveyModal {
  type: typeof SET_SHOW_CONFIRM_DELETE_SURVEY_MODAL;
  bool: boolean;
}

export interface LaunchSurveySelectionAction {
  type: typeof LAUNCH_SURVEY_SELECTION;
}

export type SurveysActionTypes =
  | AddQuestionAction
  | AddSurveyFailAction
  | AddSurveySuccessAction
  | DeleteQuestionAction
  | DeleteSurveyFailAction
  | DeleteSurveySuccessAction
  | GetAllSurveysSuccessAction
  | GetSurveyQuestionsFailAction
  | GetSurveysFailAction
  | GetSurveyQuestionsSuccessAction
  | HandleHeaderTextInputChangeAction
  | HandleNameInputChangeAction
  | HandleNeedsUniqueNameAction
  | IdAction
  | LaunchNewSurveyFailAction
  | LaunchNewSurveySuccessAction
  | LaunchSurveySelectionAction
  | OnQuestionChangeAction
  | RegisterChangeAction
  | SaveAction
  | SelectQuestionAction
  | SetCurrentQuestionSequenceAction
  | SetIsCreatingNewSurveyAction
  | SetIsLoadingAction
  | SetQuestionUnderEditAction
  | SetShowConfirmDeleteSurveyModal
  | SetShowNeedsUniqueNameModalAction
  | SetShowSaveErrorModalAction
  | SetShowSaveModalAction
  | SetShowTitleRequiredModalAction
  | SetViewAction
  | ToggleQuestionVisibilityAction
  | ToggleSurveyVisibilityFailAction
  | ToggleSurveyVisibilitySuccessAction
  | UpdateQuestionAction
  | UpdateSurveyFailAction
  | UpdateSurveySuccessAction;

export const setSurveyIdUnderEdit = (id: string): SurveysActionTypes => ({
  type: SET_SURVEY_ID_UNDER_EDIT,
  id,
});

export const setIsCreatingNewSurvey = (
  bool: boolean,
): SetIsCreatingNewSurveyAction => ({
  type: SET_IS_CREATING_NEW_SURVEY,
  bool,
});

export const setView = (view: string): SetViewAction => ({
  type: SET_VIEW,
  view,
});

export const registerChangeAction = (): RegisterChangeAction => ({
  type: REGISTER_CHANGE,
});

export const onNameInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
): HandleNameInputChangeAction => ({
  type: HANDLE_NAME_INPUT_CHANGE,
  e,
});

export const onHeaderTextInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
): HandleHeaderTextInputChangeAction => ({
  type: HANDLE_HEADER_TEXT_INPUT_CHANGE,
  e,
});

export const setShowSaveModal = (bool: boolean): SetShowSaveModalAction => ({
  type: SET_SHOW_SAVE_MODAL,
  bool,
});

export const updateQuestion = (): UpdateQuestionAction => ({
  type: UPDATE_QUESTION,
});

export const deleteQuestion = (
  questionSequence: number,
): DeleteQuestionAction => ({
  type: DELETE_QUESTION,
  questionSequence,
});

export const setShowTitleRequiredModal = (
  bool: boolean,
): SetShowTitleRequiredModalAction => ({
  type: SET_SHOW_TITLE_REQUIRED_MODAL,
  bool,
});

export const setCurrentQuestionSequence = (
  questionIndex: number | null,
): SetCurrentQuestionSequenceAction => ({
  type: SET_CURRENT_QUESTION_SEQUENCE,
  questionIndex,
});

export const selectQuestion = (
  questionSequence: number | null,
  questionText: string,
): SelectQuestionAction => ({
  type: SELECT_QUESTION,
  questionSequence,
  questionText,
});

export const onQuestionChange = (
  e: React.ChangeEvent<HTMLInputElement>,
): OnQuestionChangeAction => ({
  type: ON_QUESTION_CHANGE,
  e,
});

export const setQuestionUnderEdit = (
  value: string,
): SetQuestionUnderEditAction => ({
  type: SET_QUESTION_UNDER_EDIT,
  value,
});

export const setShowNeedsUniqueNameModal = (
  bool: boolean,
): SetShowNeedsUniqueNameModalAction => ({
  type: SET_SHOW_NEEDS_UNIQUE_NAME_MODAL,
  bool,
});

export const registerChange = (): RegisterChangeAction => ({
  type: REGISTER_CHANGE,
});

export const addQuestion = (questionIndex: number): AddQuestionAction => ({
  type: ADD_QUESTION,
  questionIndex,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const setShowSaveErrorModal = (
  bool: boolean,
): SetShowSaveErrorModalAction => ({
  type: SET_SHOW_SAVE_ERROR_MODAL,
  bool,
});

export const setShowConfirmDeleteSurveyModal = (
  bool: boolean,
): SetShowConfirmDeleteSurveyModal => ({
  type: SET_SHOW_CONFIRM_DELETE_SURVEY_MODAL,
  bool,
});

export const handleNeedsUniqueName = (): HandleNeedsUniqueNameAction => ({
  type: HANDLE_NEEDS_UNIQUE_NAME,
});

export const launchSurveySelection = ({
  districtId,
}: {
  districtId: string;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
  getState,
) => {
  const { surveysHistory } = getState().surveys;
  if (surveysHistory.length === 0) dispatch(getAllSurveys({ districtId }));
  dispatch({
    type: LAUNCH_SURVEY_SELECTION,
  });
};

export const launchNewSurvey = ({
  districtId,
}: {
  districtId: string;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
  getState,
) => {
  try {
    const { surveysHistory } = getState().surveys;
    if (surveysHistory.length === 0) dispatch(getAllSurveys({ districtId }));
    dispatch({
      type: LAUNCH_NEW_SURVEY_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_NEW_SURVEY_FAIL,
    });
  }
};

export const save = (
  onSuccess?: () => void,
): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
  getState,
) => {
  const {
    hasBeenChanged,
    surveyWithChanges,
    showSaveModal,
    isCreatingNewSurvey,
    surveysHistory,
  } = getState().surveys;
  const { currentDistrictId } = getState().navigation;
  const districtId = currentDistrictId || '';
  const surveys = surveysHistory[0] || [];

  if (!hasBeenChanged) return;
  const hasUniqueName =
    surveys.filter((survey) => {
      return (
        survey.name === surveyWithChanges.name &&
        (survey.id !== surveyWithChanges.id || isCreatingNewSurvey)
      );
    }).length === 0;

  if (!hasUniqueName) return dispatch(handleNeedsUniqueName());

  if (surveyWithChanges.name.length === 0) {
    if (showSaveModal) dispatch(setShowSaveModal(false));
    return dispatch(setShowTitleRequiredModal(true));
  }
  if (isCreatingNewSurvey) {
    const preparedQuestions = prepareNewSurveyQuestions(
      surveyWithChanges.questions,
    );
    await dispatch(
      addNewSurvey({
        districtId,
        name: surveyWithChanges.name,
        header: surveyWithChanges.header,
        questions: preparedQuestions,
        isActive: true,
      }),
    );
  } else {
    await dispatch(updateSurvey({ survey: surveyWithChanges }));
  }

  if (onSuccess) onSuccess();
};

export const addNewSurvey = ({
  districtId,
  name,
  header,
  questions,
  isActive,
}: {
  districtId: string;
  name: string;
  header: string;
  questions: TQuestion[];
  isActive: boolean;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error, data } = await surveyCreate({
      districtId,
      name,
      header,
      questions,
      isActive,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: ADD_SURVEY_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error adding survey';
    dispatch({
      type: ADD_SURVEY_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getAllSurveys = ({
  districtId,
}: {
  districtId: string;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error, data } = await getAllSurveysAdapter({
      districtId,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_ALL_SURVEYS_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving your surveys';
    dispatch({
      type: GET_SURVEYS_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getSurvey = ({
  surveyId,
  districtId,
}: {
  surveyId: string;
  districtId: string;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
  getState,
) => {
  const { surveysHistory } = getState().surveys;

  if (surveysHistory.length === 0) dispatch(getAllSurveys({ districtId }));
  dispatch(setIsLoading(true));

  try {
    const { success, error, data } = await getSurveyQuestionsAdapter({
      surveyId,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_SURVEY_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving your survey';
    dispatch({
      type: GET_SURVEY_QUESTIONS,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const deleteSurvey = ({
  id,
}: {
  id: string;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));
  dispatch(setShowConfirmDeleteSurveyModal(false));

  try {
    const { success, error } = await surveyDelete({
      id,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: DELETE_SURVEY_SUCCESS,
      id,
    });
  } catch (err) {
    const errorMessage = 'Error deleting your survey';
    dispatch({
      type: DELETE_SURVEY_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const updateSurvey = ({
  survey,
}: {
  survey: ISurvey;
}): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  const { questions, id, name, header, isActive } = survey;

  const reformedQuestions = questions.map((q) => {
    let newQuestion = _.pick(
      q,
      'id',
      'isActive',
      'surveyId',
      'text',
      'sequence',
    );
    if (!q.surveyId) newQuestion.surveyId = id;
    if (!q.id)
      newQuestion = _.pick(q, 'isActive', 'surveyId', 'text', 'sequence');
    return newQuestion;
  });

  try {
    const { success, error } = await surveyUpdate({
      id,
      header,
      name,
      questions: reformedQuestions,
      isActive,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: UPDATE_SURVEY_SUCCESS,
      id,
    });
  } catch (err) {
    const errorMessage = 'Error deleting your survey';
    dispatch({
      type: UPDATE_SURVEY_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const toggleQuestionVisibility = (
  questionSequence: number,
): ToggleQuestionVisibilityAction => ({
  type: TOGGLE_QUESTION_VISIBILITY,
  questionSequence,
});

export const toggleSurveyVisibility = (
  id: string,
): ThunkAction<void, RootState, unknown, SurveysActionTypes> => async (
  dispatch,
  getState,
) => {
  dispatch(setIsLoading(true));
  try {
    dispatch({
      type: TOGGLE_VISIBILITY,
      id,
    });

    const { surveysHistory } = getState().surveys;
    const surveys = surveysHistory[0] || [];
    const survey = surveys.find((survey) => survey.id === id);
    const isActive = !!survey?.isActive;
    const { success, error, data } = await surveyUpdate({
      isActive,
      id,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: TOGGLE_SURVEY_VISIBILITY_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error updating isActive on your survey';
    dispatch({
      type: TOGGLE_SURVEY_VISIBILITY_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};
