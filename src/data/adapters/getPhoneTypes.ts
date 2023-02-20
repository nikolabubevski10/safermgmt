import { Adapter } from './types';
import phoneTypes from '../api/queries/getPhoneTypes';

export default async (): Promise<Adapter> => {
  try {
    const { data, error, success } = await phoneTypes();

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
