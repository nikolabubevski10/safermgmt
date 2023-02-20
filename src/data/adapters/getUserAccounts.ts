import { Adapter } from './types';
import users, { GetUserAccountsArgs } from '../api/queries/organization-users';

export default async ({ schoolId }: GetUserAccountsArgs): Promise<Adapter> => {
  try {
    const { data, error, success } = await users({ schoolId });

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
