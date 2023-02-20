import { Reducer } from 'redux';

import { IUserAccount, IAccessLevel, IEmployee, IPhoneType } from './types';
import * as Actions from './OrganizationUsersActions';

export type State = {
  userAccounts: IUserAccount[];
  isUsersAccountsLoading: boolean;
  userAccount: IUserAccount;
  isUserAccountLoading: boolean;
  newAccountId: string;
  securityRoles: IAccessLevel[] | [];
  isSecurityRolesLoading: boolean;
  employees: IEmployee[] | [];
  isEmployeesLoading: boolean;
  employee: IEmployee;
  isEmployeeLoading: boolean;
  phoneTypes: IPhoneType[];
};

export const initialState = {
  userAccounts: [],
  isUsersAccountsLoading: true,
  userAccount: {
    email: '',
    name: {
      first: '',
      last: '',
    },
    id: '',
    isActive: false,
    roles: undefined,
  },
  isUserAccountLoading: false,
  phoneTypes: [],
  newAccountId: '',
  securityRoles: [],
  isSecurityRolesLoading: false,
  employees: [],
  isEmployeesLoading: false,
  employee: {
    firstName: '',
    id: '',
    lastName: '',
    emailAddress: [{ emailAddress: '' }],
    phoneNumber: [{ phoneNumber: '', id: '' }],
  },
  isEmployeeLoading: false,
};

const organizationUsersReducer: Reducer<
  State,
  Actions.OrganizationUsersActionTypes
> = (
  state: State = initialState,
  action: Actions.OrganizationUsersActionTypes,
) => {
  switch (action.type) {
    case Actions.GET_USER_ACCOUNTS: {
      return {
        ...state,
        isUsersAccountsLoading: true,
        newAccountId: '',
      };
    }
    case Actions.GET_USER_ACCOUNTS_SUCCESS: {
      return {
        ...state,
        userAccounts: action.data,
        isUsersAccountsLoading: false,
      };
    }
    case Actions.GET_USER_ACCOUNTS_FAIL: {
      return {
        ...state,
        userAccounts: [],
        isUsersAccountsLoading: false,
      };
    }

    case Actions.GET_USER_ACCOUNT: {
      return {
        ...state,
        isUserAccountLoading: true,
        newAccountId: '',
      };
    }
    case Actions.GET_USER_ACCOUNT_SUCCESS: {
      return {
        ...state,
        userAccount: { ...action.data },
        isUserAccountLoading: false,
      };
    }
    case Actions.GET_USER_ACCOUNT_FAIL: {
      return {
        ...state,
        isUserAccountLoading: false,
      };
    }

    case Actions.CREATE_USER_ACCOUNT: {
      return {
        ...state,
        isUserAccountLoading: true,
        newAccountId: '',
      };
    }
    case Actions.CREATE_USER_ACCOUNT_SUCCESS: {
      console.log({ action });
      return {
        ...state,
        newAccountId: action.id,
        isUserAccountLoading: false,
        userAccounts: [...state.userAccounts, { ...action.data }],
      };
    }
    case Actions.CREATE_USER_ACCOUNT_FAIL: {
      return {
        ...state,
        isUserAccountLoading: false,
        newAccountId: '',
      };
    }

    case Actions.DELETE_USER_ACCOUNT_SUCCESS: {
      const newUserAccounts: IUserAccount[] = state.userAccounts.filter(
        (account: IUserAccount) => account.id !== action.data,
      );

      return {
        ...state,
        userAccounts: newUserAccounts,
      };
    }

    case Actions.GET_SECURITY_ROLES: {
      return {
        ...state,
        isSecurityRolesLoading: true,
      };
    }
    case Actions.GET_SECURITY_ROLES_SUCCESS: {
      console.log(action.data);

      return {
        ...state,
        securityRoles: action.data,
        isSecurityRolesLoading: false,
      };
    }
    case Actions.GET_SECURITY_ROLES_FAIL: {
      return {
        ...state,
        userAccounts: [],
        isSecurityRolesLoading: false,
      };
    }

    case Actions.UPDATE_USER_ACCOUNT: {
      return {
        ...state,
        isUserAccountLoading: true,
        newAccountId: '',
      };
    }
    case Actions.UPDATE_USER_ACCOUNT_SUCCESS: {
      const newUserAccounts: IUserAccount[] = state.userAccounts.map(
        (userAcc: IUserAccount) => {
          if (userAcc.id === action.data.id) {
            return {
              ...userAcc,
              ...action.data,
            };
          }
          return userAcc;
        },
      );

      return {
        ...state,
        isUserAccountLoading: false,
        newAccountId: action.data.id as string,
        userAccounts: newUserAccounts,
        userAccount: {
          ...state.userAccount,
          ...action.data,
        },
      };
    }
    case Actions.UPDATE_USER_ACCOUNT_FAIL: {
      return {
        ...state,
        isUserAccountLoading: false,
        newAccountId: '',
      };
    }

    case Actions.UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES: {
      return {
        ...state,
        isUserAccountLoading: true,
      };
    }
    case Actions.UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_SUCCESS: {
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          organizationSecurityRoles: action.data,
        },
        isUserAccountLoading: false,
      };
    }
    case Actions.UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_FAIL: {
      return {
        ...state,
        isUserAccountLoading: false,
      };
    }

    case Actions.GET_EMPLOYEES: {
      return {
        ...state,
        isEmployeesLoading: false,
      };
    }
    case Actions.GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        isEmployeesLoading: false,
        employees: action.data,
      };
    }
    case Actions.GET_EMPLOYEES_FAIL: {
      return {
        ...state,
        isEmployeesLoading: false,
      };
    }

    case Actions.GET_EMPLOYEE: {
      return {
        ...state,
        isEmployeeLoading: false,
      };
    }
    case Actions.GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        isEmployeeLoading: false,
        employee: action.data,
      };
    }
    case Actions.GET_EMPLOYEE_FAIL: {
      return {
        ...state,
        isEmployeeLoading: false,
      };
    }

    case Actions.GET_PHONE_TYPES_SUCCESS: {
      return {
        ...state,
        phoneTypes: action.data,
      };
    }

    default:
      return state;
  }
};

export default organizationUsersReducer;
