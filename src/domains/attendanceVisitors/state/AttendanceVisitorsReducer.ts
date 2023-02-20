import * as Actions from './AttendanceVisitorsActions';
import { Reducer } from 'redux';
import { IVisitorFields } from './types';
import fieldOptions from './assets/fieldOptions';

export interface State {
  isLoading: boolean;
  showSaveModal: boolean;
  visitorFieldsOptions: IVisitorFields[];
}

const initialState = {
  isLoading: false,
  showSaveModal: false,
  visitorFieldsOptions: fieldOptions,
};

const AttendanceVisitorsReducer: Reducer<
  State,
  Actions.AttendanceVisitorFieldsActionTypes
> = (
  state: State = initialState,
  action: Actions.AttendanceVisitorFieldsActionTypes,
) => {
  switch (action.type) {
    case Actions.SET_VISITOR_FIELD: {
      const VisitorFields = state.visitorFieldsOptions;
      VisitorFields.map((field) => {
        if (field.id === action.id) {
          field.isActive = action.status;
        }
      });
      return {
        ...state,
        visitorFieldsOptions: VisitorFields,
      };
    }

    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }

    case Actions.SET_SHOW_SAVE_MODAL: {
      return {
        ...state,
        showSaveModal: action.bool,
      };
    }
    default:
      return state;
  }
};

export default AttendanceVisitorsReducer;
