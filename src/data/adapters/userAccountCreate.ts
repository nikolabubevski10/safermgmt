import { Adapter } from './types';
import userAccountCreate, {
  ICreateUserAccount,
} from '../api/mutations/userAccountCreate';

export default async (args: ICreateUserAccount): Promise<Adapter> => {
  try {
    const { data, error, success } = await userAccountCreate(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
