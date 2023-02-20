import { Reducer } from 'redux';
import * as Actions from './SurveyReportsActions';
import views from './assets/views';
import { ISurveyReport } from './types';
import { sub } from 'date-fns';
import prepareSurveyResponseData from './utils/prepareSurveyResponseData';

export type State = {
  view: string;
  isLoading: boolean;
  reports: ISurveyReport[];
  isTotalCompletedSelected: boolean;
  isTotalIncompletedSelected: boolean;
  isFilterActive: boolean;
  startDate: Date;
  endDate: Date;
};

const initialState = {
  view: views.dailyParticipation,
  isLoading: false,
  reports: [],
  isTotalCompletedSelected: true,
  isTotalIncompletedSelected: true,
  isFilterActive: false,
  startDate: sub(new Date(), { days: 1, months: 2 }),
  endDate: new Date(),
};

const SurveyReportsReducer: Reducer<State, Actions.SurveyReportsActionTypes> = (
  state: State = initialState,
  action: Actions.SurveyReportsActionTypes,
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

    case Actions.LAUNCH_SURVEY_REPORTS_SUCCESS: {
      const preparedData = prepareSurveyResponseData(action.data);
      return {
        ...state,
        reports: preparedData,
      };
    }

    case Actions.TOGGLE_IS_TOTAL_COMPLETED_SELECTED: {
      return {
        ...state,
        isTotalCompletedSelected: !state.isTotalCompletedSelected,
      };
    }

    case Actions.TOGGLE_IS_TOTAL_INCOMPLETED_SELECTED: {
      return {
        ...state,
        isTotalIncompletedSelected: !state.isTotalIncompletedSelected,
      };
    }

    case Actions.TOGGLE_IS_FILTER_ACTIVE: {
      return {
        ...state,
        isFilterActive: !state.isFilterActive,
      };
    }

    case Actions.GET_SURVEY_RESPONSES_IN_DATE_RANGE_SUCCESS: {
      return {
        ...state,
      };
    }

    case Actions.GET_SURVEY_RESPONSES_IN_DATE_RANGE_FAIL: {
      return {
        ...state,
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

export default SurveyReportsReducer;
