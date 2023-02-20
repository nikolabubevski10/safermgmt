import { Adapter } from './types';
import userAccountUpdate, {
  IUpdateUserAccount,
} from '../api/mutations/userAccountUpdate';

export default async (args: IUpdateUserAccount): Promise<Adapter> => {
  try {
    const { data, error, success } = await userAccountUpdate(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
