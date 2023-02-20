import { Reducer } from 'redux';
import * as Actions from './AttendanceActions';

const duplicateCheckInText = (name: string) =>
  `Dont' worry, ${name}, you've already been checked in!`;
const duplicateCheckOutText = (name: string) =>
  `Dont' worry, ${name}, you've already been checked out!`;
const faceScanSuccesText = 'Face scanned successfully';
const scanFailText = 'Error, Please check in with teacher';

export interface State {
  isLoading: boolean;
  isSuccessful: boolean;
  mostRecentPerson: Actions.Person | null;
  notification?: {
    text: string;
    type: Actions.NotificationType;
  };
  checkedInPersons: Actions.Person[];
  checkedOutPersons: Actions.Person[];
  shouldShowStatus?: boolean;
}

export const initialState = {
  isLoading: false,
  isSuccessful: false,
  mostRecentPerson: null,
  notification: undefined,
  checkedInPersons: [],
  checkedOutPersons: [],
  shouldShowStatus: false,
};

const authReducer: Reducer<State> = (
  state: State = initialState,
  action: Actions.AttendanceActionTypes,
) => {
  switch (action.type) {
    case Actions.DUPLICATE_FACE_SCAN:
    case Actions.DUPLICATE_QR_SCAN: {
      return {
        ...state,
        mostRecentPerson: action.person,
        notification: {
          text: action.checkOut
            ? duplicateCheckOutText(action.name)
            : duplicateCheckInText(action.name),
          type: Actions.NotificationType.success,
        },
      };
    }

    case Actions.FACE_SCAN_FAIL:
    case Actions.QR_SCAN_FAIL: {
      return {
        ...state,
        isSuccessful: false,
        mostRecentPerson: null,
        notification: {
          text: scanFailText,
          type: Actions.NotificationType.error,
        },
      };
    }

    // TODO: update Face Scan Success to accomodate check-out
    case Actions.FACE_SCAN_SUCCESS: {
      return {
        ...state,
        isSuccessful: true,
        mostRecentPerson: action.person,
        notification: {
          text: faceScanSuccesText,
          type: Actions.NotificationType.success,
        },
        checkedInPersons: [...state.checkedInPersons, action.person],
      };
    }

    case Actions.QR_CHECK_IN_SUCCESS: {
      const {
        eventDate: dataEventDate,
        userAccount: dataUserAccount,
      } = action.data;

      const eventDate = dataEventDate || '';
      const id = dataUserAccount.id || '';

      const mostRecentPerson = {
        eventDate,
        id,
        name: action.name,
      };

      return {
        ...state,
        checkedInPersons: [...state.checkedInPersons, mostRecentPerson],
        isSuccessful: true,
        mostRecentPerson,
        notification: {
          text: `${action.name}, you have been successfully checked in!`,
          type: Actions.NotificationType.success,
        },
      };
    }

    case Actions.QR_CHECK_OUT_SUCCESS: {
      const {
        eventDate: dataEventDate,
        userAccount: dataUserAccount,
      } = action.data;

      const eventDate = dataEventDate || '';
      const id = dataUserAccount.id || '';

      const mostRecentPerson = {
        eventDate,
        id,
        name: action.name,
      };

      return {
        ...state,
        isSuccessful: true,
        mostRecentPerson,
        notification: {
          text: `${action.name}, you have been successfully checked out!`,
          type: Actions.NotificationType.success,
        },
        checkedOutPersons: [...state.checkedOutPersons, mostRecentPerson],
      };
    }

    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }

    case Actions.SET_NOTIFICATION: {
      return {
        ...state,
        notification: {
          text: action.notification.text,
          type: action.notification.type,
        },
      };
    }
    case Actions.SET_SHOULD_SHOW_STATUS: {
      return {
        ...state,
        shouldShowStatus: action.shouldShowStatus,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
