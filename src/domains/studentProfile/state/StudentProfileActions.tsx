export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_VIEW = 'SET_VIEW';
export interface SetViewActionType {
  type: typeof SET_VIEW;
  view: string;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export type StudentProfileActionTypes = SetIsLoadingAction | SetViewActionType;

export const setView = (view: string): SetViewActionType => ({
  type: SET_VIEW,
  view,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});
