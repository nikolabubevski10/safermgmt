import { ISurvey } from '../../types';
import * as Actions from './SurveysActions';
import _ from 'lodash';
import updateSurveysHistory from './utils/updateSurveysHistory';
import { Reducer } from 'redux';
import views from './assets/views';

export const emptySurvey = {
  header: '',
  id: '',
  isActive: false,
  name: 'New Survey',
  questions: [],
};

export type SurveysHistory = ISurvey[][];

export type State = {
  currentQuestionSequence: number | null;
  hasBeenChanged: boolean;
  isCreatingNewSurvey: boolean;
  isLoading: boolean;
  isSaved: boolean;
  questionUnderEdit: string;
  showSaveModal: boolean;
  showSaveErrorModal: boolean;
  showTitleRequiredModal: boolean;
  showDeleteFailModal: boolean;
  showNeedsUniqueNameModal: boolean;
  showConfirmDeleteSurveyModal: boolean;
  surveyIdUnderEdit: string;
  surveysHistory: SurveysHistory;
  surveyWithChanges: ISurvey;
  view: string;
};

export const initialState = {
  currentQuestionSequence: null,
  hasBeenChanged: false,
  isCreatingNewSurvey: false,
  isLoading: false,
  isSaved: true,
  questionUnderEdit: '',
  showSaveModal: false,
  showSaveErrorModal: false,
  showTitleRequiredModal: false,
  showDeleteFailModal: false,
  showNeedsUniqueNameModal: false,
  showConfirmDeleteSurveyModal: false,
  surveyIdUnderEdit: '',
  surveysHistory: [],
  surveyWithChanges: emptySurvey,
  view: views.questions,
};

const surveysReducer: Reducer<State, Actions.SurveysActionTypes> = (
  state: State = initialState,
  action: Actions.SurveysActionTypes,
) => {
  const surveys = state.surveysHistory[0] || [];

  switch (action.type) {
    case Actions.SET_SURVEY_ID_UNDER_EDIT: {
      if (!action.id)
        return {
          ...state,
          surveyIdUnderEdit: '',
        };
      return {
        ...state,
        surveyIdUnderEdit: action.id,
      };
    }

    case Actions.SET_IS_CREATING_NEW_SURVEY: {
      return {
        ...state,
        isCreatingNewSurvey: action.bool,
        surveyWithChanges: emptySurvey,
      };
    }

    case Actions.ADD_SURVEY_SUCCESS: {
      const { surveyWithChanges } = state;
      const newSurveys = _.cloneDeep(surveys);
      const newSurvey = _.cloneDeep(surveyWithChanges);
      newSurvey.id = action.data.id;
      const newQuestions = newSurvey.questions.map((q) => {
        q.surveyId = action.data.id;
        return q;
      });
      newSurvey.questions = newQuestions;
      newSurveys.push(newSurvey);
      const newSurveysHistory = updateSurveysHistory(
        state.surveysHistory,
        newSurveys,
      );
      return {
        ...state,
        isCreatingNewSurvey: false,
        isSaved: true,
        surveyWithChanges: newSurvey,
        surveysHistory: newSurveysHistory,
        surveyIdUnderEdit: action.data.id,
      };
    }

    case Actions.ADD_SURVEY_FAIL: {
      return {
        ...state,
        isSaved: false,
        hasBeenChanged: true,
        showSaveErrorModal: true,
        showSaveModal: false,
        showTitleRequiredModal: false,
      };
    }

    case Actions.SET_VIEW: {
      return {
        ...state,
        view: action.view,
      };
    }

    case Actions.GET_ALL_SURVEYS_SUCCESS: {
      const newSurveysHistory = updateSurveysHistory(
        state.surveysHistory,
        action.data,
      );
      return {
        ...state,
        surveysHistory: newSurveysHistory,
      };
    }

    case Actions.GET_SURVEYS_FAIL: {
      return state;
    }

    case Actions.GET_SURVEY_SUCCESS: {
      return {
        ...state,
        surveyWithChanges: action.data,
        isSaved: false,
        hasBeenChanged: false,
        surveyIdUnderEdit: action.data.id,
        questionUnderEdit: '',
        currentQuestionSequence: null,
        showSaveModal: false,
      };
    }

    case Actions.REGISTER_CHANGE:
      return {
        ...state,
        hasBeenChanged: true,
        isSaved: false,
      };

    case Actions.HANDLE_NAME_INPUT_CHANGE: {
      const { surveyWithChanges } = state;
      const newSurveyWithChanges = { ...surveyWithChanges };
      newSurveyWithChanges.name = action.e.target.value;
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.HANDLE_HEADER_TEXT_INPUT_CHANGE: {
      const { surveyWithChanges } = state;
      const newSurveyWithChanges = { ...surveyWithChanges };
      newSurveyWithChanges.header = action.e.target.value;
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_SHOW_SAVE_MODAL: {
      return {
        ...state,
        showSaveModal: action.bool,
      };
    }

    case Actions.SET_SHOW_TITLE_REQUIRED_MODAL: {
      return {
        ...state,
        showTitleRequiredModal: action.bool,
      };
    }

    case Actions.TOGGLE_QUESTION_VISIBILITY: {
      const { surveyWithChanges } = state;
      const newSurveyWithChanges = _.cloneDeep(surveyWithChanges);
      const questionToChange = newSurveyWithChanges.questions.find(
        (q) => q.sequence === action.questionSequence,
      );
      if (questionToChange)
        questionToChange.isActive = !questionToChange.isActive;
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.UPDATE_QUESTION: {
      const {
        surveyWithChanges,
        questionUnderEdit,
        currentQuestionSequence,
      } = state;
      if (currentQuestionSequence === null) return state;
      const newSurveyWithChanges = _.cloneDeep(surveyWithChanges);
      const questionIndex = newSurveyWithChanges.questions.findIndex(
        (q) => q.sequence === state.currentQuestionSequence,
      );
      if (questionIndex >= 0) {
        newSurveyWithChanges.questions[questionIndex].text = questionUnderEdit;
      }
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        currentQuestionSequence: null,
        showSaveModal: false,
        showTitleRequiredModal: false,
        showSaveErrorModal: false,
        hasBeenChanged: true,
        isSaved: false,
        questionUnderEdit: '',
      };
    }

    case Actions.DELETE_QUESTION: {
      const { surveyWithChanges } = state;
      const { questionSequence } = action;
      const newSurveyWithChanges = _.cloneDeep(surveyWithChanges);
      const questionIndex = newSurveyWithChanges.questions.findIndex(
        (q) => q.sequence === questionSequence,
      );
      newSurveyWithChanges.questions.splice(questionIndex, 1);
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_CURRENT_QUESTION_SEQUENCE: {
      return {
        ...state,
        currentQuestionSequence: action.questionIndex,
      };
    }

    case Actions.SELECT_QUESTION: {
      const {
        questionUnderEdit,
        currentQuestionSequence,
        surveyWithChanges,
      } = state;
      const newSurveyWithChanges = _.cloneDeep(surveyWithChanges);
      const noChange =
        currentQuestionSequence !== null
          ? newSurveyWithChanges.questions[currentQuestionSequence].text ===
            questionUnderEdit
          : true;
      if (currentQuestionSequence === null || noChange) {
        return {
          ...state,
          currentQuestionSequence: action.questionSequence,
          questionUnderEdit: action.questionText,
        };
      }
      const question = newSurveyWithChanges.questions.find(
        (q) => q.sequence === currentQuestionSequence,
      );
      if (question) question.text = questionUnderEdit;
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        currentQuestionSequence: action.questionSequence,
        questionUnderEdit: action.questionText,
        isSaved: false,
      };
    }

    case Actions.ON_QUESTION_CHANGE: {
      return {
        ...state,
        questionUnderEdit: action.e.target.value,
      };
    }

    case Actions.SET_QUESTION_UNDER_EDIT: {
      return {
        ...state,
        questionUnderEdit: action.value,
      };
    }

    case Actions.ADD_QUESTION: {
      const newQuestion = {
        id: '',
        isActive: false,
        sequence: action.questionIndex,
        surveyId: state.surveyIdUnderEdit,
        text: 'New Question',
      };

      const newSurveyWithChanges = _.cloneDeep(state.surveyWithChanges);
      newSurveyWithChanges.questions.push(newQuestion);
      return {
        ...state,
        surveyWithChanges: newSurveyWithChanges,
        isSaved: false,
        hasBeenChanged: true,
      };
    }

    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }

    case Actions.LAUNCH_NEW_SURVEY_SUCCESS: {
      return {
        ...state,
        isSaved: false,
        hasBeenChanged: false,
        isCreatingNewSurvey: true,
        surveyWithChanges: emptySurvey,
        showSaveModal: false,
        surveyIdUnderEdit: '',
        questionUnderEdit: '',
      };
    }

    case Actions.LAUNCH_NEW_SURVEY_FAIL: {
      return state;
    }

    case Actions.SET_SHOW_SAVE_ERROR_MODAL: {
      return {
        ...state,
        showSaveErrorModal: action.bool,
      };
    }

    case Actions.DELETE_SURVEY_SUCCESS: {
      const newSurveys = _.cloneDeep(surveys);
      const filtered = newSurveys.filter((s) => s.id !== action.id);
      const newSurveysHistory = updateSurveysHistory(
        state.surveysHistory,
        filtered,
      );
      return {
        ...state,
        surveysHistory: newSurveysHistory,
        showConfirmDeleteSurveyModal: false,
      };
    }

    case Actions.DELETE_SURVEY_FAIL: {
      return {
        ...state,
        showDeleteFailModal: true,
        isSaved: false,
      };
    }

    case Actions.UPDATE_SURVEY_FAIL: {
      return {
        ...state,
        showSaveErrorModal: true,
        isSaved: false,
      };
    }

    case Actions.UPDATE_SURVEY_SUCCESS: {
      const surveys = state.surveysHistory[0] || [];
      const newSurveys = _.cloneDeep(surveys);
      const surveyUnderEditIndex = newSurveys.findIndex(
        (s) => s.id === state.surveyWithChanges.id,
      );
      if (surveyUnderEditIndex < 0)
        return {
          ...state,
          hasBeenChanged: true,
          isSaved: true,
          showSaveModal: false,
          surveysHistory: [],
        };
      newSurveys.splice(surveyUnderEditIndex, 1, state.surveyWithChanges);
      const newSurveysHistory = updateSurveysHistory(
        state.surveysHistory,
        newSurveys,
      );

      return {
        ...state,
        hasBeenChanged: true,
        isSaved: true,
        showSaveModal: false,
        surveysHistory: newSurveysHistory,
      };
    }

    case Actions.TOGGLE_VISIBILITY: {
      const newSurveys = _.cloneDeep(surveys);
      const idx = newSurveys.findIndex((survey) => survey.id === action.id);
      newSurveys[idx].isActive = !newSurveys[idx].isActive;
      const newSurveysHistory = updateSurveysHistory(
        state.surveysHistory,
        newSurveys,
      );
      return {
        ...state,
        surveysHistory: newSurveysHistory,
      };
    }

    case Actions.TOGGLE_SURVEY_VISIBILITY_SUCCESS: {
      return state;
    }

    case Actions.TOGGLE_SURVEY_VISIBILITY_FAIL: {
      return {
        ...state,
        showSaveErrorModal: true,
      };
    }

    case Actions.SET_SHOW_NEEDS_UNIQUE_NAME_MODAL: {
      return {
        ...state,
        showNeedsUniqueNameModal: action.bool,
      };
    }

    case Actions.HANDLE_NEEDS_UNIQUE_NAME: {
      return {
        ...state,
        showNeedsUniqueNameModal: true,
        view: views.general,
        showSaveModal: false,
        showTitleRequiredModal: false,
        showDeleteFailModal: false,
      };
    }

    case Actions.SET_SHOW_CONFIRM_DELETE_SURVEY_MODAL: {
      return {
        ...state,
        showConfirmDeleteSurveyModal: action.bool,
      };
    }

    case Actions.LAUNCH_SURVEY_SELECTION: {
      return {
        ...state,
        isCreatingNewSurvey: false,
        isSaved: true,
        hasBeenChanged: false,
        showSaveModal: false,
        questionUnderEdit: '',
        currentQuestionSequence: null,
      };
    }

    default:
      return state;
  }
};

export default surveysReducer;
