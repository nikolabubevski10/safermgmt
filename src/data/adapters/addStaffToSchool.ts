import addStaffToSchool, {
  IAddStaffToSchool,
} from 'data/api/mutations/addStaffToSchool';
import { Adapter } from './types';

export default async (args: IAddStaffToSchool): Promise<Adapter> => {
  try {
    const { data, error, success } = await addStaffToSchool(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
