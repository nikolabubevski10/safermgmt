import { Adapter } from './types';
import refUserOrganizationCreate from '../api/mutations/refUserOrganizationCreate';

interface IRefUserOrganizationCreate {
  organizationId: string;
  userAccountId: string;
}

export default async ({
  organizationId,
  userAccountId,
}: IRefUserOrganizationCreate): Promise<Adapter> => {
  try {
    const { data, error, success } = await refUserOrganizationCreate({
      organizationId,
      userAccountId,
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
