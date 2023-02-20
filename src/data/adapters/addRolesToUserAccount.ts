import addRolesToUserAccount, {
  IAddRolesToUserAccount,
} from 'data/api/mutations/addRolesToUserAccount';
import { Adapter } from './types';

export default async (args: IAddRolesToUserAccount): Promise<Adapter> => {
  try {
    const { data, error, success } = await addRolesToUserAccount(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
