import { ThunkAction } from 'redux-thunk';
import store, { RootState } from '../../../state/store';
import attendance from '../../../data/adapters/attendance';
import isDuplicate from './utils/isDuplicate';
import { IDataAttendance } from './types';

export const DUPLICATE_FACE_SCAN = 'DUPLICATE_FACE_SCAN';
export const DUPLICATE_QR_SCAN = 'DUPLICATE_QR_SCAN';
export const FACE_SCAN_FAIL = 'FACE_SCAN_FAIL';
export const FACE_SCAN_SUCCESS = 'FACE_SCAN_SUCCESS';
export const QR_SCAN_FAIL = 'QR_SCAN_FAIL';
export const QR_CHECK_IN_SUCCESS = 'QR_CHECK_IN_SUCCESS';
export const QR_CHECK_OUT_SUCCESS = 'QR_CHECK_OUT_SUCCESS';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const SET_SHOULD_SHOW_STATUS = 'SET_SHOULD_SHOW_STATUS';

export enum NotificationType {
  error = 'error',
  success = 'success',
}

export interface Person {
  eventDate: string;
  id: string;
  name: string;
}

interface DuplicateFaceScanAction {
  type: typeof DUPLICATE_FACE_SCAN;
  person: Person;
  name: string;
  checkOut: boolean;
}

interface DuplicateQrScanAction {
  type: typeof DUPLICATE_QR_SCAN;
  person: Person;
  name: string;
  checkOut: boolean;
}

interface FaceScanFailAction {
  type: typeof FACE_SCAN_FAIL;
}

interface FaceScanSuccessAction {
  type: typeof FACE_SCAN_SUCCESS;
  person: Person;
}

interface QrScanFailAction {
  type: typeof QR_SCAN_FAIL;
}

interface QrCheckInSuccessAction {
  type: typeof QR_CHECK_IN_SUCCESS;
  data: IDataAttendance;
  name: string;
}

interface QrCheckOutSuccessAction {
  type: typeof QR_CHECK_OUT_SUCCESS;
  data: IDataAttendance;
  name: string;
}

interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  isLoading: boolean;
}

interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  notification: {
    text: string;
    type: NotificationType;
  };
}

interface SetShouldShowStatusAction {
  type: typeof SET_SHOULD_SHOW_STATUS;
  shouldShowStatus?: boolean;
}

export type AttendanceActionTypes =
  | DuplicateFaceScanAction
  | DuplicateQrScanAction
  | FaceScanFailAction
  | FaceScanSuccessAction
  | QrScanFailAction
  | QrCheckInSuccessAction
  | QrCheckOutSuccessAction
  | SetIsLoadingAction
  | SetNotificationAction
  | SetShouldShowStatusAction;

export const duplicateFaceScan = (
  person: Person,
  name: string,
  checkOut: boolean,
): AttendanceActionTypes => ({
  type: DUPLICATE_FACE_SCAN,
  person,
  name,
  checkOut,
});

export const duplicateQrScan = (
  person: Person,
  name: string,
  checkOut: boolean,
): AttendanceActionTypes => ({
  type: DUPLICATE_QR_SCAN,
  person,
  name,
  checkOut,
});

export const scanFace = ({
  eventDate,
  userAccountId,
  name,
  checkOut = false,
}: {
  eventDate?: string;
  userAccountId: string;
  name: string;
  checkOut: boolean;
}): ThunkAction<void, RootState, unknown, AttendanceActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  // avoid duplicate attendance records
  let personAlreadyAccountedFor = null;
  const { checkedInPersons, checkedOutPersons } = store.getState().attendance;
  const accountedForList = checkOut ? checkedOutPersons : checkedInPersons;

  personAlreadyAccountedFor = accountedForList.find(
    (person) => person.id === userAccountId,
  );

  if (personAlreadyAccountedFor) {
    const isDuplicateAttendanceRecord = isDuplicate({
      currentDate: new Date().toISOString(),
      eventDate: personAlreadyAccountedFor.eventDate,
      timeFrame: 300000, // 5 minutes
    });

    if (isDuplicateAttendanceRecord) {
      dispatch(duplicateFaceScan(personAlreadyAccountedFor, name, checkOut));
      return dispatch(setIsLoading(false));
    }
  }

  try {
    const { success, error, data } = await attendance({
      eventDate,
      eventType: checkOut ? 'CHECK_OUT' : 'CHECK_IN',
      schoolId: '102',
      status: 'ON_CAMPUS_PRESENT',
      userAccountId,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: FACE_SCAN_SUCCESS,
      person: { ...data.person, eventDate: data.eventDate },
    });

    dispatch(setShouldShowStatus(true));
  } catch (err) {
    dispatch({
      type: FACE_SCAN_FAIL,
    });

    dispatch(setShouldShowStatus(true));
  } finally {
    dispatch(setIsLoading(false));

    setTimeout(() => {
      dispatch(setShouldShowStatus(false));
    }, 3000);
  }
};

export const scanQr = ({
  eventDate,
  userAccountId,
  name,
  schoolId,
  checkOut = false,
}: {
  eventDate?: string;
  userAccountId: string;
  schoolId: string;
  name: string;
  checkOut: boolean;
}): ThunkAction<void, RootState, unknown, AttendanceActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  // avoid duplicate attendance records
  let personAlreadyAccountedFor = null;
  const { checkedInPersons, checkedOutPersons } = store.getState().attendance;
  const accountedForList = checkOut ? checkedOutPersons : checkedInPersons;

  personAlreadyAccountedFor = accountedForList.find(
    (person) => person.id === userAccountId,
  );

  if (personAlreadyAccountedFor) {
    const isDuplicateAttendanceRecord = isDuplicate({
      currentDate: new Date().toISOString(),
      eventDate: personAlreadyAccountedFor.eventDate,
      timeFrame: 300000, // 5 minutes
    });

    if (isDuplicateAttendanceRecord) {
      dispatch(duplicateQrScan(personAlreadyAccountedFor, name, checkOut));

      return dispatch(setIsLoading(false));
    }
  }

  try {
    const { success, error, data } = await attendance({
      eventDate,
      eventType: checkOut ? 'CHECK_OUT' : 'CHECK_IN',
      schoolId,
      status: 'ON_CAMPUS_PRESENT',
      userAccountId,
    });

    if (!success) {
      throw error;
    }

    if (checkOut) {
      dispatch({
        type: QR_CHECK_OUT_SUCCESS,
        data,
        name,
      });
    } else {
      dispatch({
        type: QR_CHECK_IN_SUCCESS,
        data,
        name,
      });
    }

    dispatch(setShouldShowStatus(true));
  } catch (err) {
    dispatch({
      type: QR_SCAN_FAIL,
    });

    dispatch(setShouldShowStatus(true));
  } finally {
    dispatch(setIsLoading(false));

    setTimeout(() => {
      dispatch(setShouldShowStatus(false));
    }, 3000);
  }
};

export const failQR = (): QrScanFailAction => ({
  type: QR_SCAN_FAIL,
});

export const failFaceScan = (): FaceScanFailAction => ({
  type: FACE_SCAN_FAIL,
});

export const setIsLoading = (isLoading: boolean): AttendanceActionTypes => {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
};

export const setNotification = ({
  text,
  type,
}: {
  text: string;
  type: NotificationType;
}): AttendanceActionTypes => {
  return {
    type: SET_NOTIFICATION,
    notification: {
      text,
      type,
    },
  };
};

export const setShouldShowStatus = (
  shouldShowStatus: boolean,
): AttendanceActionTypes => {
  return {
    type: SET_SHOULD_SHOW_STATUS,
    shouldShowStatus,
  };
};
