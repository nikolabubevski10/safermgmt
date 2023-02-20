import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../state/store';
import getSurveyResponses from '../../../../data/adapters/getSurveyResponses';
import { IDataSurveyResponse } from './types';

export const SET_VIEW = 'SET_VIEW';
export const LAUNCH_SURVEY_REPORTS_SUCCESS = 'LAUNCH_SURVEY_REPORTS_SUCCESS';
export const LAUNCH_SURVEY_REPORTS_FAIL = 'LAUNCH_SURVEY_REPORTS_FAIL';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const TOGGLE_IS_TOTAL_INCOMPLETED_SELECTED =
  'TOGGLE_IS_TOTAL_INCOMPLETED_SELECTED';
export const TOGGLE_IS_TOTAL_COMPLETED_SELECTED =
  'TOGGLE_IS_TOTAL_COMPLETED_SELECTED';
export const TOGGLE_IS_FILTER_ACTIVE = 'TOGGLE_IS_FILTER_ACTIVE';
export const GET_SURVEY_RESPONSES_IN_DATE_RANGE_SUCCESS =
  'GET_SURVEY_RESPONSES_IN_DATE_RANGE_SUCCESS';
export const GET_SURVEY_RESPONSES_IN_DATE_RANGE_FAIL =
  'GET_SURVEY_RESPONSES_IN_DATE_RANGE_FAIL';
export const HANDLE_DATE_RANGE_CHANGE = 'HANDLE_DATE_RANGE_CHANGE';

export interface SetViewAction {
  type: typeof SET_VIEW;
  view: string;
}

export interface LaunchSurveyReportsSuccessAction {
  type: typeof LAUNCH_SURVEY_REPORTS_SUCCESS;
  data: IDataSurveyResponse[];
}

export interface LaunchSurveyReportsFailAction {
  type: typeof LAUNCH_SURVEY_REPORTS_FAIL;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface ToggleIsTotalCompletedSelectedAction {
  type: typeof TOGGLE_IS_TOTAL_COMPLETED_SELECTED;
}

export interface ToggleIsTotalIncompletedSelectedAction {
  type: typeof TOGGLE_IS_TOTAL_INCOMPLETED_SELECTED;
}

export interface ToggleIsFilterActiveAction {
  type: typeof TOGGLE_IS_FILTER_ACTIVE;
}

export interface GetSurveyReportsInDateRangeSuccessAction {
  type: typeof GET_SURVEY_RESPONSES_IN_DATE_RANGE_SUCCESS;
  startDate: Date;
  endDate: Date;
}

export interface GetSurveyReportsInDateRangeFailAction {
  type: typeof GET_SURVEY_RESPONSES_IN_DATE_RANGE_FAIL;
}

export interface HandleDateRangeChangeAction {
  type: typeof HANDLE_DATE_RANGE_CHANGE;
  startDate: Date;
  endDate: Date;
}

export type SurveyReportsActionTypes =
  | SetViewAction
  | LaunchSurveyReportsSuccessAction
  | LaunchSurveyReportsFailAction
  | SetIsLoadingAction
  | ToggleIsTotalCompletedSelectedAction
  | ToggleIsTotalIncompletedSelectedAction
  | ToggleIsFilterActiveAction
  | GetSurveyReportsInDateRangeSuccessAction
  | GetSurveyReportsInDateRangeFailAction
  | HandleDateRangeChangeAction;

export const setView = (view: string): SetViewAction => ({
  type: SET_VIEW,
  view,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const toggleIsTotalCompletedSelected = (): ToggleIsTotalCompletedSelectedAction => ({
  type: TOGGLE_IS_TOTAL_COMPLETED_SELECTED,
});

export const toggleIsTotalIncompletedSelected = (): ToggleIsTotalIncompletedSelectedAction => ({
  type: TOGGLE_IS_TOTAL_INCOMPLETED_SELECTED,
});

export const toggleIsFilterActive = (): ToggleIsFilterActiveAction => ({
  type: TOGGLE_IS_FILTER_ACTIVE,
});

export const launchSurveyReports = ({
  districtId,
}: {
  districtId: string;
}): ThunkAction<void, RootState, unknown, SurveyReportsActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));
  try {
    const { success, error, data } = await getSurveyResponses({
      districtId,
    });

    if (!success) throw error;

    dispatch({
      type: LAUNCH_SURVEY_REPORTS_SUCCESS,
      data,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_SURVEY_REPORTS_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getSurveyReportsInDateRange = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}): ThunkAction<void, RootState, unknown, SurveyReportsActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));
  try {
    dispatch({
      type: GET_SURVEY_RESPONSES_IN_DATE_RANGE_SUCCESS,
      startDate,
      endDate,
    });
  } catch (err) {
    dispatch({
      type: GET_SURVEY_RESPONSES_IN_DATE_RANGE_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const handleDateRangeChange = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}): HandleDateRangeChangeAction => ({
  type: HANDLE_DATE_RANGE_CHANGE,
  startDate,
  endDate,
});
