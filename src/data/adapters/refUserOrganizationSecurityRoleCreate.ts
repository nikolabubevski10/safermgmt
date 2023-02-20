import { Adapter } from './types';
import refUserOrganizationSecurityRoleCreate from '../api/mutations/refUserOrganizationSecurityRoleCreate';

interface IRefUserOrganizationSecurityRoleCreate {
  organizationId: string;
  userAccountId: string;
  securityRoleId: string;
}

export default async ({
  organizationId,
  userAccountId,
  securityRoleId,
}: IRefUserOrganizationSecurityRoleCreate): Promise<Adapter> => {
  try {
    const {
      data,
      error,
      success,
    } = await refUserOrganizationSecurityRoleCreate({
      organizationId,
      userAccountId,
      securityRoleId,
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
