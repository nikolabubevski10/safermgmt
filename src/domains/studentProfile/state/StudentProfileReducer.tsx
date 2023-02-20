import * as Actions from './StudentProfileActions';
import view from './assets/views';
import { Reducer } from 'redux';

export interface State {
  view: string;
  isLoading: boolean;
}

const initialState = {
  view: view.info,
  isLoading: false,
};

const StudentProfileReducer: Reducer<
  State,
  Actions.StudentProfileActionTypes
> = (
  state: State = initialState,
  action: Actions.StudentProfileActionTypes,
) => {
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

    default:
      return state;
  }
};

export default StudentProfileReducer;
