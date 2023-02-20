import { Reducer } from 'redux';
import * as Actions from './OrgStudentsActions';
import views from './assets/views';
import prepareData from './utils/prepareData';
import { IStudent } from './types';
export interface State {
  view: string;
  isLoading: boolean;
  students: IStudent[];
  currentStudentId: number | null;
  showSaveModal: boolean;
  showSaveErrorModal: boolean;
  showExitPrompt: boolean;
  showSaveSuccess: boolean;
  hasBeenChanged: boolean;
  isSaved: boolean;
  isCreatingNewStudent: boolean;
  searchText: string;
}

export const initialState = {
  view: views.info,
  isLoading: false,
  students: [],
  currentStudentId: null,
  showSaveModal: false,
  showSaveErrorModal: false,
  showExitPrompt: false,
  showSaveSuccess: false,
  hasBeenChanged: false,
  isSaved: false,
  isCreatingNewStudent: false,
  searchText: '',
};

const OrgStudentsReducer: Reducer<State, Actions.OrgStudentsActions> = (
  state: State = initialState,
  action: Actions.OrgStudentsActions,
) => {
  switch (action.type) {
    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }

    case Actions.LAUNCH_STUDENT_SELECTION_SUCCESS: {
      const students = prepareData(action.data);
      return {
        ...state,
        students,
      };
    }

    case Actions.SELECT_STUDENT: {
      return {
        ...state,
        currentStudentId: action.id,
      };
    }

    case Actions.SET_SHOW_SAVE_ERROR_MODAL: {
      return {
        ...state,
        showSaveErrorModal: action.bool,
      };
    }

    case Actions.SET_SHOW_SAVE_MODAL: {
      return {
        ...state,
        showSaveModal: action.bool,
      };
    }

    case Actions.SET_VIEW: {
      return {
        ...state,
        view: action.newView,
      };
    }

    case Actions.LAUNCH_STUDENT_SUCCESS: {
      const students = prepareData(action.data);
      return {
        ...state,
        currentStudentId: action.id,
        students,
      };
    }

    case Actions.LAUNCH_STUDENT_FAIL: {
      return {
        ...state,
      };
    }

    case Actions.LAUNCH_NEW_STUDENT_SUCCESS: {
      return {
        ...state,
        isSaved: false,
        hasBeenChanged: false,
        isCreatingNewSurvey: true,
        showSaveModal: false,
      };
    }

    case Actions.LAUNCH_NEW_STUDENT_FAIL: {
      return {
        ...state,
      };
    }

    case Actions.CLEAR_SEARCH_TEXT: {
      return {
        ...state,
        searchText: '',
        isShowingResults: false,
      };
    }

    case Actions.HANDLE_SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        searchText: action.e.target.value,
        isShowingResults: !!action.e.target.value,
        resultHasBeenSelected: false,
      };
    }

    default:
      return state;
  }
};

export default OrgStudentsReducer;
