import { Adapter } from './types';
import addStaffRolesToUserAccount from '../api/mutations/addStaffRolesToUserAccount';

interface IRefUserOrganizationSecurityRoleCreate {
  userAccountId: string;
  roleIds: string[];
}

export default async ({
  userAccountId,
  roleIds,
}: IRefUserOrganizationSecurityRoleCreate): Promise<Adapter> => {
  try {
    const { data, error, success } = await addStaffRolesToUserAccount({
      userAccountId,
      roleIds,
    });

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
