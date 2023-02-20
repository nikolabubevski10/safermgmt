import { Adapter } from './types';

import addStudentsToSchool, {
  IAddStudentsToSchool,
} from 'data/api/mutations/addStudentsToSchool';

export default async (args: IAddStudentsToSchool): Promise<Adapter> => {
  try {
    const { data, error, success } = await addStudentsToSchool(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
