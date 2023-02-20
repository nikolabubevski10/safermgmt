import { Reducer } from 'redux';
import * as Actions from './ContactModalActions';

export interface State {
  error: string;
  isLoading: boolean;
}

export const initialState = {
  error: '',
  isLoading: false,
};

const authReducer: Reducer<State> = (
  state: State = initialState,
  action: Actions.HomeActionTypes,
) => {
  switch (action.type) {
    case Actions.CLEAR_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    case Actions.CONTACT_US_FAIL: {
      return {
        ...state,
        error: action.error,
      };
    }
    case Actions.CONTACT_US_SUCCESS: {
      return {
        ...state,
        error: '',
      };
    }
    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
