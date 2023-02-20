import { Reducer } from 'redux';
import * as Actions from './BusAttendanceActions';
import { sub } from 'date-fns';
import { IBusAttendance } from '../types';

export type State = {
  list: IBusAttendance[];
  startDate: Date;
  endDate: Date;
  isLoading: boolean;
};

const initialState = {
  list: [],
  startDate: sub(new Date(), { days: 1, months: 2 }),
  endDate: new Date(),
  isLoading: false,
};

const BusAttendenceReducer: Reducer<State, Actions.BusAttendenceActionTypes> = (
  state: State = initialState,
  action: Actions.BusAttendenceActionTypes,
) => {
  switch (action.type) {
    case Actions.LOAD_BUS_ATTENDENCES_SUCCESS: {
      const busAttendances = action.data;
      return {
        ...state,
        list: busAttendances,
      };
    }
    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }
    case Actions.HANDLE_DATE_RANGE_CHANGE: {
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    }

    default:
      return state;
  }
};

export default BusAttendenceReducer;
