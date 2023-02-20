import { Adapter } from './types';
import securityRoles from '../api/queries/securyity-roles';

export default async (): Promise<Adapter> => {
  try {
    const { data, error, success } = await securityRoles();

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
