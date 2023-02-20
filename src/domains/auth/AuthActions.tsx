import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../state/store';
import forgotUserPassword from '../../data/adapters/forgotUserPassword';
import getUser from '../../data/adapters/getUser';
import loginUser from '../../data/adapters/loginUser';
import logoutUser from '../../data/adapters/logoutUser';
import reauthenticateUser from '../../data/adapters/reauthenticateUser';
import getCurrentUser from '../../data/adapters/getCurrentUser';
import { ICurrentUserData } from './types';

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REAUTHENTICATE_FAIL = 'REAUTHENTICATE_FAIL';
export const REAUTHENTICATE_SUCCESS = 'REAUTHENTICATE_SUCCESS';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_LOADING_USER = 'SET_IS_LOADING_USER';
export const SET_IS_REAUTHENTICATED = 'SET_IS_REAUTHENTICATED';
export const GET_USER_AUTH_SUCCESS = 'GET_USER_AUTH_SUCCESS';
export const GET_USER_AUTH_FAIL = 'GET_USER_AUTH_FAIL';

interface IFirebaseUser {
  uid: string;
}

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}

interface ForgotPasswordFailAction {
  type: typeof FORGOT_PASSWORD_FAIL;
  error: string;
}

interface ForgotPasswordSucessAction {
  type: typeof FORGOT_PASSWORD_SUCCESS;
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  error: string;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: IFirebaseUser;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface ReauthenticateFailAction {
  type: typeof REAUTHENTICATE_FAIL;
  error: string;
}

interface ReauthenticateSuccessAction {
  type: typeof REAUTHENTICATE_SUCCESS;
  user: IFirebaseUser;
}

interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  isLoading: boolean;
}

interface SetIsLoadingUserAction {
  type: typeof SET_IS_LOADING_USER;
  isLoadingUser: boolean;
}

interface SetIsReauthenticatedAction {
  type: typeof SET_IS_REAUTHENTICATED;
  isReauthenticated: boolean;
}

interface GetUserAuthSuccessAction {
  type: typeof GET_USER_AUTH_SUCCESS;
  data: {
    firebase: IFirebaseUser;
    saferAPI: ICurrentUserData;
  };
}

interface GetUserAuthFailAction {
  type: typeof GET_USER_AUTH_FAIL;
}

export type AuthActionTypes =
  | ClearErrorAction
  | ForgotPasswordFailAction
  | ForgotPasswordSucessAction
  | LoginFailAction
  | LoginSuccessAction
  | LogoutAction
  | ReauthenticateFailAction
  | ReauthenticateSuccessAction
  | SetIsLoadingAction
  | SetIsLoadingUserAction
  | SetIsReauthenticatedAction
  | GetUserAuthSuccessAction
  | GetUserAuthFailAction;

export const clearError = (): ThunkAction<
  void,
  RootState,
  unknown,
  AuthActionTypes
> => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

export const forgotPassword = ({
  email,
}: {
  email: string;
}): ThunkAction<
  Promise<{ success: boolean }>,
  RootState,
  unknown,
  AuthActionTypes
> => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error } = await forgotUserPassword({
      email,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
    });

    return { success: true };
  } catch (err) {
    const stringError = typeof err === 'string' ? err : 'error';
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      error: stringError,
    });

    return { success: false };
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getUserAuth = (): ThunkAction<
  void,
  RootState,
  unknown,
  AuthActionTypes
> => async (dispatch) => {
  dispatch(setIsLoadingUser(true));

  try {
    const {
      success: getUserSuccess,
      error: getUserError,
      data: getUserData,
    } = await getUser();

    if (!getUserSuccess) throw getUserError;

    const {
      success: currentUserSucces,
      error: currentUserError,
      data: currentUserData,
    } = await getCurrentUser();

    if (!currentUserSucces) throw currentUserError;

    const data = {
      firebase: getUserData,
      saferAPI: currentUserData,
    };

    dispatch({
      type: GET_USER_AUTH_SUCCESS,
      data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_AUTH_FAIL,
    });
  } finally {
    dispatch(setIsLoadingUser(false));
  }
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): ThunkAction<void, RootState, unknown, AuthActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error, data } = await loginUser({
      email,
      password,
    });

    if (!success) {
      throw error;
    }

    dispatch(getUserAuth());

    dispatch({
      type: LOGIN_SUCCESS,
      user: data.user,
    });
  } catch (err) {
    const stringError = typeof err === 'string' ? err : 'error';
    dispatch({
      type: LOGIN_FAIL,
      error: stringError,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const logout = (): ThunkAction<
  void,
  RootState,
  unknown,
  AuthActionTypes
> => async (dispatch) => {
  try {
    const { success, error } = await logoutUser();

    if (!success) {
      throw error;
    }

    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    console.error(err);
  }
};

export const reauthenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): ThunkAction<
  Promise<{ success: boolean }>,
  RootState,
  unknown,
  AuthActionTypes
> => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error, data } = await reauthenticateUser({
      email,
      password,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: REAUTHENTICATE_SUCCESS,
      user: data.user,
    });

    dispatch(setIsReauthenticated(true));

    return { success: true };
  } catch (err) {
    const stringError = typeof err === 'string' ? err : 'error';
    dispatch({
      type: REAUTHENTICATE_FAIL,
      error: stringError,
    });

    dispatch(setIsReauthenticated(false));

    return { success: false };
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const setIsLoading = (isLoading: boolean): AuthActionTypes => {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
};

export const setIsLoadingUser = (isLoadingUser: boolean): AuthActionTypes => {
  return {
    type: SET_IS_LOADING_USER,
    isLoadingUser,
  };
};

export const setIsReauthenticated = (
  isReauthenticated: boolean,
): AuthActionTypes => {
  return {
    type: SET_IS_REAUTHENTICATED,
    isReauthenticated,
  };
};
