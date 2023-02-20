import { ThunkAction } from 'redux-thunk';
import { RootState } from 'state/store';
import currentUser from '../../../data/adapters/currentUser';
import getMySchools from '../../../data/adapters/getMySchools';
import { ISchool } from './types';

export const LAUNCH_NAVIGATION_SUCCESS = 'LAUNCH_NAVIGATION_SUCCESS';
export const LAUNCH_NAVIGATION_FAIL = 'LAUNCH_NAVIGATION_FAIL';
export const SET_CURRENT_SCHOOL_ID = 'SET_CURRENT_SCHOOL_ID';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export interface LaunchNavigationSuccessAction {
  type: typeof LAUNCH_NAVIGATION_SUCCESS;
  data: ISchool[];
  districtId: string;
}

export interface LaunchNavigationFailAction {
  type: typeof LAUNCH_NAVIGATION_FAIL;
}

export interface SetCurrentSchoolIdAction {
  type: typeof SET_CURRENT_SCHOOL_ID;
  id: string;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export type NavigationActionTypes =
  | LaunchNavigationSuccessAction
  | LaunchNavigationFailAction
  | SetCurrentSchoolIdAction
  | SetIsLoadingAction;

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const launchNavigation = (): ThunkAction<
  void,
  RootState,
  unknown,
  NavigationActionTypes
> => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const {
      success: currentUserSuccess,
      error: currentUserError,
      data: currentUserData,
    } = await currentUser();

    if (!currentUserSuccess) throw currentUserError;

    const { district } = currentUserData;
    const districtId = district.id || '';

    const {
      success: mySchoolsSuccess,
      error: mySchoolsError,
      data: mySchoolsData,
    } = await getMySchools();

    if (!mySchoolsSuccess) throw mySchoolsError;

    dispatch({
      type: LAUNCH_NAVIGATION_SUCCESS,
      data: mySchoolsData,
      districtId,
    });
  } catch (err) {
    dispatch({
      type: LAUNCH_NAVIGATION_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const setCurrentSchoolId = (id: string): SetCurrentSchoolIdAction => ({
  type: SET_CURRENT_SCHOOL_ID,
  id,
});
