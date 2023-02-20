import { ThunkAction } from 'redux-thunk';

import { IAccessLevel, IUserAccount, IEmployee, IPhoneType } from './types';
import { RootState } from '../../../state/store';
import getPhoneTypesAdapter from '../../../data/adapters/getPhoneTypes';
import getUserAccountsAdapter from '../../../data/adapters/getUserAccounts';
import getUserAccountAdapter from '../../../data/adapters/getUserAccount';
import userAccountUpdate from '../../../data/adapters/userAccountUpdate';
import userAccountCreate from '../../../data/adapters/userAccountCreate';
import addStudentsToSchool from 'data/adapters/addStudentsToSchool';
import userAccountDelete from '../../../data/adapters/userAccountDelete';
import getSecurityRolesAdapter from '../../../data/adapters/getSecurityRoles';
import createRefUserOrganizationAdapter from '../../../data/adapters/refUserOrganizationCreate';
import deleteRefUserOrganizationSecurityRolesAdapter from '../../../data/adapters/refUserOrganizationSecurityRoleDelete';
import addStaffRolesToUserAccount from '../../../data/adapters/addStaffRolesToUserAccount';
import getEmployeesAdapter from '../../../data/adapters/getEmployees';
import getEmployeeAdapter from '../../../data/adapters/getEmployee';
import { GetUserAccountsArgs } from 'data/api/queries/organization-users';
import { ICreateUserAccount } from 'data/api/mutations/userAccountCreate';
import { IUpdateUserAccount } from 'data/api/mutations/userAccountUpdate';
import addRolesToUserAccount from 'data/adapters/addRolesToUserAccount';
import addTeachersToSchool from 'data/adapters/addTeachersToSchool';
import addStaffToSchool from 'data/adapters/addStaffToSchool';
import removeRolesFromUserAccount from 'data/adapters/removeRolesFromUserAccount';

export const GET_USER_ACCOUNTS = 'GET_USER_ACCOUNTS';
export const GET_USER_ACCOUNTS_FAIL = 'GET_USER_ACCOUNTS_FAIL';
export const GET_USER_ACCOUNTS_SUCCESS = 'GET_USER_ACCOUNTS_SUCCESS';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const GET_USER_ACCOUNT = 'GET_USER_ACCOUNT';
export const GET_USER_ACCOUNT_FAIL = 'GET_USER_ACCOUNT_FAIL';
export const GET_USER_ACCOUNT_SUCCESS = 'GET_USER_ACCOUNT_SUCCESS';

export const UPDATE_USER_ACCOUNT = 'UPDATE_USER_ACCOUNT';
export const UPDATE_USER_ACCOUNT_FAIL = 'UPDATE_USER_ACCOUNT_FAIL';
export const UPDATE_USER_ACCOUNT_SUCCESS = 'UPDATE_USER_ACCOUNT_SUCCESS';

export const CREATE_USER_ACCOUNT = 'CREATE_USER_ACCOUNT';
export const CREATE_USER_ACCOUNT_FAIL = 'CREATE_USER_ACCOUNT_FAIL';
export const CREATE_USER_ACCOUNT_SUCCESS = 'CREATE_USER_ACCOUNT_SUCCESS';

export const DELETE_USER_ACCOUNT = 'DELETE_USER_ACCOUNT';
export const DELETE_USER_ACCOUNT_FAIL = 'DELETE_USER_ACCOUNT_FAIL';
export const DELETE_USER_ACCOUNT_SUCCESS = 'DELETE_USER_ACCOUNT_SUCCESS';

export const GET_SECURITY_ROLES = 'GET_SECURITY_ROLES';
export const GET_SECURITY_ROLES_SUCCESS = 'GET_SECURITY_ROLES_SUCCESS';
export const GET_SECURITY_ROLES_FAIL = 'GET_SECURITY_ROLES_FAIL';

export const CREATE_REF_USER_ORGANIZATION = 'CREATE_REF_USER_ORGANIZATION';
export const CREATE_REF_USER_ORGANIZATION_SUCCESS =
  'CREATE_REF_USER_ORGANIZATION_SUCCESS';
export const CREATE_REF_USER_ORGANIZATION_FAIL =
  'CREATE_REF_USER_ORGANIZATION_FAIL';

export const UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES =
  'UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES';
export const UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_SUCCESS =
  'UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_SUCCESS';
export const UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_FAIL =
  'UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_FAIL';

export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAIL = 'GET_EMPLOYEES_FAIL';

export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_FAIL = 'GET_EMPLOYEE_FAIL';

export const GET_PHONE_TYPES = 'GET_PHONE_TYPES';
export const GET_PHONE_TYPES_SUCCESS = 'GET_PHONE_TYPES_SUCCESS';
export const GET_PHONE_TYPES_FAIl = 'GET_PHONE_TYPES_FAIL';

export interface GetEmployeeAction {
  type: typeof GET_EMPLOYEE;
}
export interface GetEmployeeActionFail {
  type: typeof GET_EMPLOYEE_FAIL;
  errorMessage: string;
}
export interface GetEmployeeActionSuccess {
  type: typeof GET_EMPLOYEE_SUCCESS;
  data: IEmployee;
}

export interface GetEmployeesAction {
  type: typeof GET_EMPLOYEES;
}
export interface GetEmployeesActionFail {
  type: typeof GET_EMPLOYEES_FAIL;
  errorMessage: string;
}
export interface GetEmployeesActionSuccess {
  type: typeof GET_EMPLOYEES_SUCCESS;
  data: IEmployee[];
}

export interface UpdateRefUserOrganizationSecurityRolesAction {
  type: typeof UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES;
}

export interface UpdateRefUserOrganizationSecurityRolesActionFail {
  type: typeof UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_FAIL;
  errorMessage: string;
}

export interface UpdateRefUserOrganizationSecurityRolesActionSuccess {
  type: typeof UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_SUCCESS;
  data: IAccessLevel[];
}

export interface CreateRefUserOrganizationAction {
  type: typeof CREATE_REF_USER_ORGANIZATION;
}

export interface CreateRefUserOrganizationActionFail {
  type: typeof CREATE_REF_USER_ORGANIZATION_FAIL;
  errorMessage: string;
}

export interface CreateRefUserOrganizationActionSuccess {
  type: typeof CREATE_REF_USER_ORGANIZATION_SUCCESS;
  data: IAccessLevel[];
}

export interface GetSecurityRolesAction {
  type: typeof GET_SECURITY_ROLES;
}

export interface GetSecurityRolesActionFail {
  type: typeof GET_SECURITY_ROLES_FAIL;
  errorMessage: string;
}

export interface GetSecurityRolesActionSuccess {
  type: typeof GET_SECURITY_ROLES_SUCCESS;
  data: IAccessLevel[];
}

export interface DeleteUserAccountAction {
  type: typeof DELETE_USER_ACCOUNT;
}

export interface DeleteUserAccountActionFail {
  type: typeof DELETE_USER_ACCOUNT_FAIL;
  errorMessage: string;
}

export interface DeleteUserAccountActionSuccess {
  type: typeof DELETE_USER_ACCOUNT_SUCCESS;
  data: string;
}

export interface CreateUserAccountAction {
  type: typeof CREATE_USER_ACCOUNT;
}

export interface CreateUserAccountActionFail {
  type: typeof CREATE_USER_ACCOUNT_FAIL;
  errorMessage: string;
}

export interface CreateUserAccountActionSuccess {
  type: typeof CREATE_USER_ACCOUNT_SUCCESS;
  data: IUserAccount;
  id: string;
}

export interface UpdateUserAccountAction {
  type: typeof UPDATE_USER_ACCOUNT;
}

export interface UpdateUserAccountActionFail {
  type: typeof UPDATE_USER_ACCOUNT_FAIL;
  errorMessage: string;
}

export interface UpdateUserAccountActionSuccess {
  type: typeof UPDATE_USER_ACCOUNT_SUCCESS;
  data: IUserAccount;
}

export interface GetUserAccountsAction {
  type: typeof GET_USER_ACCOUNTS;
}

export interface GetUserAccountsActionFail {
  type: typeof GET_USER_ACCOUNTS_FAIL;
  errorMessage: string;
}

export interface GetUserAccountsActionSuccess {
  type: typeof GET_USER_ACCOUNTS_SUCCESS;
  data: IUserAccount[];
}

export interface GetUserAccountAction {
  type: typeof GET_USER_ACCOUNT;
}

export interface GetUserAccountActionFail {
  type: typeof GET_USER_ACCOUNT_FAIL;
}

export interface GetUserAccountActionSuccess {
  type: typeof GET_USER_ACCOUNT_SUCCESS;
  data: IUserAccount;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export interface GetPhoneTypesAction {
  type: typeof GET_PHONE_TYPES;
}

export interface GetPhoneTypesActionSuccess {
  type: typeof GET_PHONE_TYPES_SUCCESS;
  data: IPhoneType[];
}

export interface GetPhoneTypesActionFail {
  type: typeof GET_PHONE_TYPES_FAIl;
}

export type OrganizationUsersActionTypes =
  | SetIsLoadingAction
  | GetUserAccountsAction
  | GetUserAccountsActionFail
  | GetUserAccountsActionSuccess
  | GetUserAccountAction
  | GetUserAccountActionFail
  | GetUserAccountActionSuccess
  | UpdateUserAccountAction
  | UpdateUserAccountActionSuccess
  | UpdateUserAccountActionFail
  | CreateUserAccountAction
  | CreateUserAccountActionSuccess
  | CreateUserAccountActionFail
  | DeleteUserAccountAction
  | DeleteUserAccountActionSuccess
  | DeleteUserAccountActionFail
  | GetSecurityRolesAction
  | GetSecurityRolesActionFail
  | GetSecurityRolesActionSuccess
  | CreateRefUserOrganizationAction
  | CreateRefUserOrganizationActionFail
  | CreateRefUserOrganizationActionSuccess
  | UpdateRefUserOrganizationSecurityRolesAction
  | UpdateRefUserOrganizationSecurityRolesActionSuccess
  | UpdateRefUserOrganizationSecurityRolesActionFail
  | GetEmployeesAction
  | GetEmployeesActionSuccess
  | GetEmployeesActionFail
  | GetEmployeeAction
  | GetEmployeeActionSuccess
  | GetEmployeeActionFail
  | GetPhoneTypesAction
  | GetPhoneTypesActionSuccess
  | GetPhoneTypesActionFail;

export const getPhoneTypes = (): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  try {
    const { success, error, data } = await getPhoneTypesAdapter();
    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_PHONE_TYPES_SUCCESS,
      data,
    });
  } catch (error) {
    const errorMessage = 'Error retrieving user accounts';
    dispatch({
      type: GET_PHONE_TYPES_FAIl,
      errorMessage,
    });
  }
};

export const getUserAccounts = ({
  schoolId,
}: GetUserAccountsArgs): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: GET_USER_ACCOUNTS,
  });

  try {
    const { success, error, data } = await getUserAccountsAdapter({ schoolId });

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_USER_ACCOUNTS_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving user accounts';
    dispatch({
      type: GET_USER_ACCOUNTS_FAIL,
      errorMessage,
    });
  }
};

export const getUserAccount = ({
  id,
}: {
  id: string;
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: GET_USER_ACCOUNT,
  });

  try {
    const { success, error, data } = await getUserAccountAdapter({
      id,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_USER_ACCOUNT_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving user account';
    dispatch({
      type: GET_USER_ACCOUNTS_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const updateUserAccount = (
  args: IUpdateUserAccount,
): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: UPDATE_USER_ACCOUNT,
  });

  try {
    const { success, error, data } = await userAccountUpdate(args);

    if (!success) {
      throw error;
    }

    dispatch({
      type: UPDATE_USER_ACCOUNT_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error updating user account';
    dispatch({
      type: UPDATE_USER_ACCOUNT_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const updateUserAccountRole = ({
  userAccountId,
  oldAccessRoles,
  newAccessRoles,
}: {
  userAccountId: string;
  oldAccessRoles: IAccessLevel[];
  newAccessRoles: IAccessLevel[];
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  const oldRoleIds = oldAccessRoles
    .filter(({ isActive }) => isActive)
    .map(({ id }) => id as string);
  try {
    const { success, error } = await removeRolesFromUserAccount({
      userAccountId,
      roleIds: oldRoleIds,
    });

    if (!success) {
      throw error;
    }

    const newRoleIds = newAccessRoles
      .filter(({ isActive }) => isActive)
      .map(({ id }) => id as string);
    const response = await addRolesToUserAccount({
      roleIds: newRoleIds,
      userAccountId,
    });
    console.log({ response });
  } catch (error) {
    const errorMessage = 'Error updating user account';
    dispatch({
      type: UPDATE_USER_ACCOUNT_FAIL,
      errorMessage,
    });
  }
};

export const updateUserOrganizationsSecurityRoles = ({
  id,
  organizationSecurityRoles,
}: {
  id: string;
  organizationSecurityRoles: IAccessLevel[];
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES,
  });

  try {
    if (id) {
      await deleteRefUserOrganizationSecurityRolesAdapter({
        id,
      });
    }

    const activeSecurityRoles: IAccessLevel[] = organizationSecurityRoles.filter(
      (role: IAccessLevel) => role.isActive,
    );

    const activeSecurityRolesIds: string[] = activeSecurityRoles
      .map((role: IAccessLevel) => role.id || '')
      .filter((item) => typeof item === 'string' && item.length > 0);

    if (activeSecurityRolesIds?.length > 0) {
      await addRolesToUserAccount({
        userAccountId: id,
        roleIds: activeSecurityRolesIds,
      });

      await addStaffRolesToUserAccount({
        userAccountId: id,
        roleIds: activeSecurityRolesIds,
      });
    }

    dispatch({
      type: UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_SUCCESS,
      data: activeSecurityRoles,
    });
  } catch (err) {
    const errorMessage = 'Error updating user security roles';
    dispatch({
      type: UPDATE_REF_USER_ORGANIZATION_SECURITY_ROLES_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const createUserAccount = (
  args: ICreateUserAccount & {
    schoolId: string;
    accessRoles: { id: string; name: string }[];
  },
): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: CREATE_USER_ACCOUNT,
  });

  try {
    const { success, error, data } = await userAccountCreate(args);

    if (!success) {
      throw error;
    }

    const roleIds = args.accessRoles.map((role) => role.id);

    await addRolesToUserAccount({ roleIds, userAccountId: data.id });

    if (args.accessRoles.some((role) => role.name === 'Student')) {
      await addStudentsToSchool({
        schoolId: args.schoolId,
        userAccountIds: [data.id],
      });
    } else if (args.accessRoles.some((role) => role.name === 'Teacher')) {
      await addTeachersToSchool({
        schoolId: args.schoolId,
        userAccountIds: [data.id],
      });
    } else if (args.accessRoles.some((role) => role.name === 'Staff')) {
      await addStaffToSchool({
        schoolId: args.schoolId,
        userAccountIds: [data.id],
      });
    }

    dispatch({
      type: CREATE_USER_ACCOUNT_SUCCESS,
      data: {
        id: data.id,
        email: data.email,
        name: data.name,
        isActive: false,
      },
      id: data.id,
    });
  } catch (err) {
    const errorMessage = 'Error creating user account';
    dispatch({
      type: CREATE_USER_ACCOUNT_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const deleteUserAccount = ({
  id,
}: {
  id: string;
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error, data } = await userAccountDelete({
      id,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: DELETE_USER_ACCOUNT_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error deleting user account';
    dispatch({
      type: DELETE_USER_ACCOUNT_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getSecurityRoles = (): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: GET_SECURITY_ROLES,
  });

  try {
    const { success, error, data } = await getSecurityRolesAdapter();

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_SECURITY_ROLES_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving user account';
    dispatch({
      type: GET_SECURITY_ROLES_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const createRefUserOrganization = ({
  organizationId,
  userAccountId,
}: {
  organizationId: string;
  userAccountId: string;
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: CREATE_REF_USER_ORGANIZATION,
  });

  try {
    const { success, error, data } = await createRefUserOrganizationAdapter({
      organizationId,
      userAccountId,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: CREATE_REF_USER_ORGANIZATION_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error creating ref user organization';
    dispatch({
      type: CREATE_REF_USER_ORGANIZATION_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getEmployees = ({
  schoolId,
}: {
  schoolId: number;
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: GET_EMPLOYEES,
  });

  try {
    const { success, error, data } = await getEmployeesAdapter({
      schoolId,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_EMPLOYEES_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving employees';
    dispatch({
      type: GET_EMPLOYEES_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const getEmployee = ({
  id,
}: {
  id: number;
}): ThunkAction<
  void,
  RootState,
  unknown,
  OrganizationUsersActionTypes
> => async (dispatch) => {
  dispatch({
    type: GET_EMPLOYEE,
  });

  try {
    const { success, error, data } = await getEmployeeAdapter({
      id,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: GET_EMPLOYEE_SUCCESS,
      data,
    });
  } catch (err) {
    const errorMessage = 'Error retrieving employee';
    dispatch({
      type: GET_EMPLOYEES_FAIL,
      errorMessage,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};
