import removeRolesFromUserAccount, {
  IRemoveRolesFromUserAccount,
} from 'data/api/mutations/removeRolesFromUserAccount';
import { Adapter } from './types';

export default async (args: IRemoveRolesFromUserAccount): Promise<Adapter> => {
  try {
    const { data, error, success } = await removeRolesFromUserAccount(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
