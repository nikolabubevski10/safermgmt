import { Reducer } from 'redux';
import * as Actions from './NavigationActions';
import { ISchool } from './types';
import alphabetizeSchoolArray from './utils/alphabetizeSchoolArray';

interface State {
  schools: ISchool[];
  currentSchoolId: string | null;
  currentDistrictId: string | null;
  isLoading: boolean;
}

const initialState = {
  schools: [],
  currentSchoolId: null,
  currentDistrictId: null,
  isLoading: false,
};

const NavigationReducer: Reducer<State, Actions.NavigationActionTypes> = (
  state: State = initialState,
  action: Actions.NavigationActionTypes,
) => {
  switch (action.type) {
    case Actions.LAUNCH_NAVIGATION_SUCCESS: {
      const alphabetized = alphabetizeSchoolArray(action.data);
      const first = alphabetized.length > 0 ? alphabetized[0] : null;
      const currentSchoolId = first ? first.id : null;

      return {
        ...state,
        schools: action.data,
        currentSchoolId,
        currentDistrictId: action.districtId,
      };
    }

    case Actions.LAUNCH_NAVIGATION_FAIL: {
      return state;
    }

    case Actions.SET_CURRENT_SCHOOL_ID: {
      return {
        ...state,
        currentSchoolId: action.id,
      };
    }

    default:
      return state;
  }
};

export default NavigationReducer;
