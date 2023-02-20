import addTeachersToSchool, {
  IAddTeachersToSchool,
} from 'data/api/mutations/addTeachersToSchool';
import { Adapter } from './types';

export default async (args: IAddTeachersToSchool): Promise<Adapter> => {
  try {
    const { data, error, success } = await addTeachersToSchool(args);

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
