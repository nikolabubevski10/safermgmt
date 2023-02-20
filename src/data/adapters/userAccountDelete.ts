import { Adapter } from './types';
import userDelete from '../api/mutations/userAccountDelete';

interface IDeleteUserAccount {
  id: string;
}

export default async ({ id }: IDeleteUserAccount): Promise<Adapter> => {
  try {
    const { data, error, success } = await userDelete({
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
