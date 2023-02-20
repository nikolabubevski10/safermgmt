import { Adapter } from './types';
import refUserOrganizationSecurityRoleDelete from '../api/mutations/refUserOrganizationSecurityRoleDelete';

interface IRefUserOrganizationSecurityRoleDelete {
  id: string;
}

export default async ({
  id,
}: IRefUserOrganizationSecurityRoleDelete): Promise<Adapter> => {
  try {
    const {
      data,
      error,
      success,
    } = await refUserOrganizationSecurityRoleDelete({
      id,
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
