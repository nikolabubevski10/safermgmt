import { Adapter } from './types';
import employees from '../api/queries/getEmployees';

interface IGetEmployees {
  schoolId: number;
}

export default async ({ schoolId }: IGetEmployees): Promise<Adapter> => {
  try {
    const { data, error, success } = await employees({
      schoolId,
    });

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
