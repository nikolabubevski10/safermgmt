import { RootState } from '../../../../state/store';
import { ThunkAction } from 'redux-thunk';
import getStudents from '../../../../data/adapters/getStudents';
import { IDataStudent } from './types';

export const SET_VIEW = 'SET_VIEW';
export const LAUNCH_STUDENT_SELECTION_SUCCESS =
  'LAUNCH_STUDENT_SELECTION_SUCCESS';
export const LAUNCH_STUDENT_SELECTION_FAIL = 'LAUNCH_STUDENT_SELECTION_FAIL';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SELECT_STUDENT = 'SELECT_STUDENT';
export const SET_SHOW_SAVE_MODAL = 'SET_SHOW_SAVE_MODAL';
export const SET_SHOW_SAVE_ERROR_MODAL = 'SET_SHOW_SAVE_ERROR_MODAL';
export const LAUNCH_STUDENT_SUCCESS = 'LAUNCH_STUDENT_SUCCESS';
export const LAUNCH_STUDENT_FAIL = 'LAUNCH_STUDENT_FAIL';
export const LAUNCH_NEW_STUDENT_SUCCESS = 'LAUNCH_NEW_STUDENT_SUCCESS';
export const LAUNCH_NEW_STUDENT_FAIL = 'LAUNCH_NEW_STUDENT_FAIL';
export const HANDLE_SEARCH_TEXT_CHANGE = 'HANDLE_SEARCH_TEXT_CHANGE';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';

export interface SetViewAction {
  type: typeof SET_VIEW;
  newView: string;
}

export interface LaunchStudentSelectionSuccessAction {
  type: typeof LAUNCH_STUDENT_SELECTION_SUCCESS;
  data: IDataStudent[];
}

export interface LaunchStudentSelectionFailAction {
  type: typeof LAUNCH_STUDENT_SELECTION_FAIL;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface SelectStudentAction {
  type: typeof SELECT_STUDENT;
  id: number;
}

export interface SetShowSaveModalAction {
  type: typeof SET_SHOW_SAVE_MODAL;
  bool: boolean;
}

export interface SetShowSaveErrorModalAction {
  type: typeof SET_SHOW_SAVE_ERROR_MODAL;
  bool: boolean;
}

export interface LaunchStudentSuccessAction {
  type: typeof LAUNCH_STUDENT_SUCCESS;
  data: IDataStudent[];
  id: number;
}

export interface LaunchStudentFailAction {
  type: typeof LAUNCH_STUDENT_FAIL;
}

export interface LaunchNewStudentSuccessAction {
  type: typeof LAUNCH_NEW_STUDENT_SUCCESS;
}

export interface LaunchNewStudentFailAction {
  type: typeof LAUNCH_NEW_STUDENT_FAIL;
}

export interface HandleSearchInputChangeAction {
  type: typeof HANDLE_SEARCH_TEXT_CHANGE;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface ClearSearchTextAction {
  type: typeof CLEAR_SEARCH_TEXT;
}

export type OrgStudentsActions =
  | SetViewAction
  | LaunchStudentSelectionSuccessAction
  | LaunchStudentSelectionFailAction
  | SetIsLoadingAction
  | SelectStudentAction
  | SetShowSaveModalAction
  | SetShowSaveErrorModalAction
  | LaunchStudentSuccessAction
  | LaunchStudentFailAction
  | LaunchNewStudentSuccessAction
  | LaunchNewStudentFailAction
  | HandleSearchInputChangeAction
  | ClearSearchTextAction;

export const setView = (newView: string): SetViewAction => ({
  type: SET_VIEW,
  newView,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const selectStudent = (id: number): SelectStudentAction => ({
  type: SELECT_STUDENT,
  id,
});

export const setShowSaveModal = (bool: boolean): SetShowSaveModalAction => ({
  type: SET_SHOW_SAVE_MODAL,
  bool,
});

export const setShowSaveErrorModal = (
  bool: boolean,
): SetShowSaveErrorModalAction => ({
  type: SET_SHOW_SAVE_ERROR_MODAL,
  bool,
});

export const clearSearchText = (): ClearSearchTextAction => ({
  type: CLEAR_SEARCH_TEXT,
});

export const handleSearchInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
): HandleSearchInputChangeAction => {
  return {
    type: HANDLE_SEARCH_TEXT_CHANGE,
    e,
  };
};

export const launchStudentSelection = ({
  schoolId,
}: {
  schoolId: number;
}): ThunkAction<void, RootState, unknown, OrgStudentsActions> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  const { success, data, error } = await getStudents({ schoolId });

  if (!success) throw error;

  try {
    dispatch({
      type: LAUNCH_STUDENT_SELECTION_SUCCESS,
      data: data,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_STUDENT_SELECTION_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const launchStudent = ({
  schoolId,
  id,
}: {
  schoolId: number;
  id: number;
}): ThunkAction<void, RootState, unknown, OrgStudentsActions> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  const { success, error, data } = await getStudents({ schoolId });

  if (!success) throw error;

  try {
    dispatch({
      type: LAUNCH_STUDENT_SUCCESS,
      data,
      id,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_STUDENT_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const launchNewStudent = ({
  schoolId,
}: {
  schoolId: number;
}): ThunkAction<void, RootState, unknown, OrgStudentsActions> => async (
  dispatch,
  getState,
) => {
  try {
    const { students } = getState().orgStudents;
    if (students.length === 0) dispatch(launchStudentSelection({ schoolId }));
    dispatch({
      type: LAUNCH_NEW_STUDENT_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_NEW_STUDENT_FAIL,
    });
  }
};
