import { IPerson, TDataSchoolUser } from './types';
import { RootState } from '../../../../state/store';
import { ThunkAction } from 'redux-thunk';
import getSchoolUsers from '../../../../data/adapters/getSchoolUsers';

export const SET_PERSON = 'SET_PERSON';
export const GET_SCHOOL_USERS_SUCCESS = 'GET_SCHOOL_USERS_SUCCESS';
export const GET_SCHOOL_USERS_FAIL = 'GET_SCHOOL_USERS_FAIL';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const HANDLE_SEARCH_TEXT_CHANGE = 'HANDLE_SEARCH_TEXT_CHANGE';
export const SELECT_SEARCH_RESULT = 'SELECT_SEARCH_RESULT';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';
export const SET_ROLE_FILTER = 'SET_ROLE_FILTER';
export const TOGGLE_PERSON_RESULT_SELECTION = 'TOGGLE_PERSON_RESULT_SELECTION';
export const TOGGLE_STUDENT_CONTACT_SELECTION =
  'TOGGLE_STUDENT_CONTACT_SELECTION';
export const SELECT_STUDENT_CONTACT_RESULT = 'SELECT_STUDENT_CONTACT_RESULT';

export interface SetPersonAction {
  type: typeof SET_PERSON;
  newPerson: IPerson;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface GetPersonsSuccessAction {
  type: typeof GET_SCHOOL_USERS_SUCCESS;
  data: TDataSchoolUser[];
  schoolId: string;
}

export interface GetPersonsFailAction {
  type: typeof GET_SCHOOL_USERS_FAIL;
}

export interface HandleSearchInputChangeAction {
  type: typeof HANDLE_SEARCH_TEXT_CHANGE;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface SelectSearchResultAction {
  type: typeof SELECT_SEARCH_RESULT;
  newCurrentPersonId: string | null;
}

export interface ClearSearchTextAction {
  type: typeof CLEAR_SEARCH_TEXT;
}

export interface SetRoleFilterAction {
  type: typeof SET_ROLE_FILTER;
  role: string;
}

export interface ToggleResultSelectionAction {
  type: typeof TOGGLE_PERSON_RESULT_SELECTION;
  id: string;
}

export interface ToggleStudentContactSelectionAction {
  type: typeof TOGGLE_STUDENT_CONTACT_SELECTION;
  studentId: string;
  contactId: string;
}

export interface SelectStudentContactResultAction {
  type: typeof SELECT_STUDENT_CONTACT_RESULT;
  newCurrentPersonId: string | null;
  newCurrentContactId: string | null;
}

export type GeneratorActionTypes =
  | SetPersonAction
  | SetIsLoadingAction
  | GetPersonsSuccessAction
  | GetPersonsFailAction
  | HandleSearchInputChangeAction
  | SelectSearchResultAction
  | ClearSearchTextAction
  | SetRoleFilterAction
  | ToggleResultSelectionAction
  | ToggleStudentContactSelectionAction
  | SelectStudentContactResultAction;

export const setPerson = (newPerson: IPerson): SetPersonAction => ({
  type: SET_PERSON,
  newPerson,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const handleSearchInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
): HandleSearchInputChangeAction => {
  return {
    type: HANDLE_SEARCH_TEXT_CHANGE,
    e,
  };
};

export const selectSearchResult = (
  newCurrentPersonId: string | null,
): SelectSearchResultAction => ({
  type: SELECT_SEARCH_RESULT,
  newCurrentPersonId,
});

export const selectStudentContactResult = ({
  newCurrentPersonId,
  newCurrentContactId,
}: {
  newCurrentPersonId: string | null;
  newCurrentContactId: string | null;
}): SelectStudentContactResultAction => ({
  type: SELECT_STUDENT_CONTACT_RESULT,
  newCurrentPersonId,
  newCurrentContactId,
});

export const clearSearchText = (): ClearSearchTextAction => ({
  type: CLEAR_SEARCH_TEXT,
});

export const setRoleFilter = (role: string): SetRoleFilterAction => ({
  type: SET_ROLE_FILTER,
  role,
});

export const togglePersonResultSelection = (
  id: string,
): ToggleResultSelectionAction => ({
  type: TOGGLE_PERSON_RESULT_SELECTION,
  id,
});

export const toggleStudentContactSelection = ({
  studentId,
  contactId,
}: {
  studentId: string;
  contactId: string;
}): ToggleStudentContactSelectionAction => ({
  type: TOGGLE_STUDENT_CONTACT_SELECTION,
  studentId,
  contactId,
});

export const launchQRGenerator = (): ThunkAction<
  void,
  RootState,
  unknown,
  GeneratorActionTypes
> => async (dispatch, getState) => {
  dispatch(setIsLoading(true));
  try {
    const { currentSchoolId } = getState().navigation;

    if (currentSchoolId) {
      const { success, error, data } = await getSchoolUsers({
        schoolId: currentSchoolId,
      });
      if (!success) throw error;

      dispatch({
        type: GET_SCHOOL_USERS_SUCCESS,
        data,
        schoolId: currentSchoolId,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SCHOOL_USERS_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};
