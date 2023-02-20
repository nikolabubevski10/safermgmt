export const SET_VISITOR_FIELD = 'SET_VISITOR_FIELD';
export const SET_SHOW_SAVE_MODAL = 'SET_SHOW_SAVE_MODAL';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_OPTIONS = 'SET_OPTIONS';

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface SetOptionsAction {
  type: typeof SET_OPTIONS;
}
export interface SetVisitorFieldActionType {
  type: typeof SET_VISITOR_FIELD;
  id: number;
  status: boolean;
}

export interface SetShowSaveModalAction {
  type: typeof SET_SHOW_SAVE_MODAL;
  bool: boolean;
}

export type AttendanceVisitorFieldsActionTypes =
  | SetIsLoadingAction
  | SetVisitorFieldActionType
  | SetOptionsAction
  | SetShowSaveModalAction;

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const setFieldsOptions = (): SetOptionsAction => ({
  type: SET_OPTIONS,
});

export const setShowSaveModal = (bool: boolean): SetShowSaveModalAction => ({
  type: SET_SHOW_SAVE_MODAL,
  bool,
});

export const setVisitorField = (
  id: number,
  status: boolean,
): SetVisitorFieldActionType => ({
  type: SET_VISITOR_FIELD,
  id,
  status,
});
