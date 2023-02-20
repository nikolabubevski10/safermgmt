import { Adapter } from './types';
import currentUser from '../api/queries/currentUser';

export default async (): Promise<Adapter> => {
  try {
    const { data, error, success } = await currentUser();

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
