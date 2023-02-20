import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../state/store';
import getAttendances from '../../../data/adapters/getAttendances';
import {
  IDataAttendanceRecord,
  ISchoolsRecord,
  TDataSchoolUser,
} from './types';
import getSchoolUsers from '../../../data/adapters/getSchoolUsers';

export const LAUNCH_ATTENDANCE_DASHBOARD_FAIL =
  'LAUNCH_ATTENDANCE_DASHBOARD_FAIL';
export const LAUNCH_ATTENDANCE_DASHBOARD_SUCCESS =
  'LAUNCH_ATTENDANCE_DASHBOARD_SUCCESS';

export const LAUNCH_GET_SCHOOLS_DATA_SUCCESS =
  'LAUNCH_GET_SCHOOLS_DATA_SUCCESS';
export const LAUNCH_GET_SCHOOLS_DATA_FAIL = 'LAUNCH_GET_SCHOOLS_DATA_FAIL';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_VIEW = 'SET_VIEW';
export const SET_ATTENDANCE_VIEW = 'SET_ATTENDANCE_VIEW';
export const SHOW_ABSENT_ATTENDANCE = 'SHOW_ABSENT_ATTENDANCE';
export const SHOW_PRESENT_ATTENDANCE = 'SHOW_PRESENT_ATTENDANCE';
export const HANDLE_DATE_RANGE_CHANGE = 'HANDLE_DATE_RANGE_CHANGE';
export const TOGGLE_IS_PRESENT_SELECTED = 'TOGGLE_IS_PRESENT_SELECTED';
export const TOGGLE_IS_ABSENT_SELECTED = 'TOGGLE_IS_ABSENT_SELECTED';
export const TOGGLE_IS_FILTER_ACTIVE = 'TOGGLE_IS_FILTER_ACTIVE';

export interface SetViewAction {
  type: typeof SET_VIEW;
  view: string;
}

export interface LaunchAttendanceDashboardSuccessAction {
  type: typeof LAUNCH_ATTENDANCE_DASHBOARD_SUCCESS;
  attendancesData: IDataAttendanceRecord[];
  schoolUsersData: TDataSchoolUser[];
}

export interface LaunchAttendanceDashboardFailAction {
  type: typeof LAUNCH_ATTENDANCE_DASHBOARD_FAIL;
}

export interface GetSchoolsDataSuccessAction {
  type: typeof LAUNCH_GET_SCHOOLS_DATA_SUCCESS;
  data: ISchoolsRecord[];
}

export interface GetSchoolsDataFailAction {
  type: typeof LAUNCH_GET_SCHOOLS_DATA_FAIL;
}
export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface HandleDateRangeChangeAction {
  type: typeof HANDLE_DATE_RANGE_CHANGE;
  startDate: Date;
  endDate: Date;
}

export interface SetAttendanceViewAction {
  type: typeof SET_ATTENDANCE_VIEW;
  view: string;
}

export interface ToggleIsAbsentSelectedAction {
  type: typeof TOGGLE_IS_ABSENT_SELECTED;
}

export interface ToggleIsPresentSelectedAction {
  type: typeof TOGGLE_IS_PRESENT_SELECTED;
}

export interface ToggleIsFilterActiveAction {
  type: typeof TOGGLE_IS_FILTER_ACTIVE;
}

export type AttendanceActionTypes =
  | GetSchoolsDataFailAction
  | GetSchoolsDataSuccessAction
  | HandleDateRangeChangeAction
  | LaunchAttendanceDashboardFailAction
  | LaunchAttendanceDashboardSuccessAction
  | SetAttendanceViewAction
  | SetIsLoadingAction
  | SetViewAction
  | ToggleIsAbsentSelectedAction
  | ToggleIsPresentSelectedAction
  | ToggleIsFilterActiveAction;

export const setView = (view: string): SetViewAction => ({
  type: SET_VIEW,
  view,
});

export const SetAttendanceView = (view: string): SetAttendanceViewAction => ({
  type: SET_ATTENDANCE_VIEW,
  view,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

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

export const toggleIsPresentSelected = (): ToggleIsPresentSelectedAction => ({
  type: TOGGLE_IS_PRESENT_SELECTED,
});

export const toggleIsAbsentSelected = (): ToggleIsAbsentSelectedAction => ({
  type: TOGGLE_IS_ABSENT_SELECTED,
});

export const toggleIsFilterActive = (): ToggleIsFilterActiveAction => ({
  type: TOGGLE_IS_FILTER_ACTIVE,
});

export const launchAttendanceDashboard = (): ThunkAction<
  void,
  RootState,
  unknown,
  AttendanceActionTypes
> => async (dispatch, getState) => {
  try {
    dispatch(setIsLoading(true));

    const { startDate, endDate } = getState().attendanceDashboard;

    const startDateISOString = startDate.toISOString();
    const endDateISOString = endDate.toISOString();

    const { currentSchoolId } = getState().navigation;
    const schoolId = currentSchoolId || '';

    if (!schoolId) return;

    const {
      success: schoolUsersSuccess,
      error: schoolUsersError,
      data: schoolUsersData,
    } = await getSchoolUsers({
      schoolId,
    });

    if (!schoolUsersSuccess) throw schoolUsersError;

    const {
      success: attendancesSuccess,
      error: attendancesError,
      data: attendancesData,
    } = await getAttendances({
      endDate: endDateISOString,
      startDate: startDateISOString,
      schoolId,
    });

    if (!attendancesSuccess) throw attendancesError;

    dispatch({
      type: LAUNCH_ATTENDANCE_DASHBOARD_SUCCESS,
      attendancesData,
      schoolUsersData,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_ATTENDANCE_DASHBOARD_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};
