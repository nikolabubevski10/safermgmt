import { Adapter } from './types';
import users from '../api/queries/user-account';

interface IGetUserAccount {
  id: string;
}

export default async ({ id }: IGetUserAccount): Promise<Adapter> => {
  try {
    const { data, error, success } = await users({
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
