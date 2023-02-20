import * as Actions from './AttendanceDashboardActions';
import view from './assets/views';
import { Reducer } from 'redux';
import { sub } from 'date-fns';
import { IAttendanceRecord, ISchoolsRecord } from './types';
import prepareAttendanceRecordData from './utils/prepareAttendanceRecordData';

export interface State {
  view: string;
  isLoading: boolean;
  startDate: Date;
  endDate: Date;
  attendances: IAttendanceRecord[];
  schools: ISchoolsRecord[];
  attendanceview: string;
  isAbsentSelected: boolean;
  isPresentSelected: boolean;
  studentCount: number;
  isFilterActive: boolean;
}

const initialState = {
  view: view.totals,
  isLoading: false,
  startDate: sub(new Date(), { days: 100 }),
  endDate: new Date(),
  attendances: [],
  schools: [],
  attendanceview: '',
  isAbsentSelected: true,
  isPresentSelected: true,
  studentCount: 0,
  isFilterActive: false,
};

const AttendanceDashboardReducer: Reducer<
  State,
  Actions.AttendanceActionTypes
> = (state: State = initialState, action: Actions.AttendanceActionTypes) => {
  switch (action.type) {
    case Actions.SET_VIEW: {
      return {
        ...state,
        view: action.view,
      };
    }

    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }

    case Actions.LAUNCH_ATTENDANCE_DASHBOARD_SUCCESS: {
      const preparedData = prepareAttendanceRecordData(action.attendancesData);

      const studentCount = action.schoolUsersData
        ? action.schoolUsersData.length
        : 0;

      return {
        ...state,
        attendances: preparedData,
        studentCount,
      };
    }

    case Actions.LAUNCH_ATTENDANCE_DASHBOARD_FAIL: {
      return state;
    }

    case Actions.LAUNCH_GET_SCHOOLS_DATA_SUCCESS: {
      return {
        ...state,
        schools: action.data,
      };
    }

    case Actions.LAUNCH_GET_SCHOOLS_DATA_FAIL: {
      return state;
    }

    case Actions.SET_ATTENDANCE_VIEW: {
      return {
        ...state,
        attendanceview: action.view,
      };
    }

    case Actions.HANDLE_DATE_RANGE_CHANGE: {
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    }

    case Actions.TOGGLE_IS_ABSENT_SELECTED: {
      return {
        ...state,
        isAbsentSelected: !state.isAbsentSelected,
      };
    }

    case Actions.TOGGLE_IS_PRESENT_SELECTED: {
      return {
        ...state,
        isPresentSelected: !state.isPresentSelected,
      };
    }

    case Actions.TOGGLE_IS_FILTER_ACTIVE: {
      return {
        ...state,
        isFilterActive: !state.isFilterActive,
      };
    }

    default:
      return state;
  }
};

export default AttendanceDashboardReducer;
