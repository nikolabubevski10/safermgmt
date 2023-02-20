import { Reducer } from 'redux';
import * as Actions from './AuthActions';
import { IUser, RolesEnum, TRoleEntry } from './types';

export interface State {
  error: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoadingUser: boolean;
  isReauthenticated: boolean;
  user: IUser;
}

export const initialState = {
  error: '',
  isAuthenticated: false,
  isLoading: false,
  isLoadingUser: true,
  isReauthenticated: false,
  user: {
    uid: null,
    roles: [],
    userAccountId: null,
  },
};

const authReducer: Reducer<State> = (
  state: State = initialState,
  action: Actions.AuthActionTypes,
) => {
  switch (action.type) {
    case Actions.CLEAR_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    case Actions.FORGOT_PASSWORD_FAIL:
    case Actions.REAUTHENTICATE_FAIL: {
      return {
        ...state,
        error: action.error,
      };
    }
    case Actions.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        error: '',
      };
    }

    case Actions.SET_IS_REAUTHENTICATED: {
      return {
        ...state,
        isReauthenticated: action.isReauthenticated,
      };
    }

    case Actions.REAUTHENTICATE_SUCCESS:
    case Actions.LOGIN_SUCCESS: {
      const { uid } = action.user;
      const newUid = uid || null;

      const newUser = {
        ...state.user,
        uid: newUid,
      };

      return {
        ...state,
        user: newUser,
        error: '',
        isAuthenticated: true,
      };
    }

    case Actions.LOGIN_FAIL: {
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
        isReauthenticated: false,
        user: initialState.user,
      };
    }
    case Actions.LOGOUT: {
      return {
        ...state,
        error: '',
        isAuthenticated: false,
        isReauthenticated: false,
        user: initialState.user,
      };
    }
    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case Actions.SET_IS_LOADING_USER: {
      return {
        ...state,
        isLoadingUser: action.isLoadingUser,
      };
    }

    case Actions.GET_USER_AUTH_SUCCESS: {
      const { firebase, saferAPI } = action.data;
      const newUid = firebase.uid || null;

      const { roles, id } = saferAPI;

      const rolesEntries = Object.entries(roles);

      const newRoles = rolesEntries.reduce(
        (
          ac: (keyof typeof RolesEnum)[],
          role: TRoleEntry,
        ): (keyof typeof RolesEnum)[] => {
          const key = role[0];
          const value = role[1];
          if (key === '__typename') return ac;

          let staffRoles: (keyof typeof RolesEnum)[] = [];
          if (key === 'staff' && !!value) {
            const subRoles = value.staffRoles as (keyof typeof RolesEnum)[];
            staffRoles = subRoles || [];
          }

          const keyToAdd = key as keyof typeof RolesEnum;
          if (value) return [...ac, keyToAdd, ...staffRoles];
          else return ac;
        },
        [],
      );

      return {
        ...state,
        user: {
          uid: newUid,
          roles: newRoles,
          userAccountId: id,
        },
        error: '',
        isAuthenticated: true,
      };
    }

    case Actions.GET_USER_AUTH_FAIL: {
      return state;
    }

    default:
      return state;
  }
};

export default authReducer;
