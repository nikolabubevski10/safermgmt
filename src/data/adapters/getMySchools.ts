import { Adapter } from './types';
import mySchools from '../api/queries/mySchools';

export default async (): Promise<Adapter> => {
  try {
    const { success, error, data } = await mySchools();

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
