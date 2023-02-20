import { Adapter } from './types';
import attendances from '../api/queries/attendances';

interface GetAttendancesArgs {
  endDate: string;
  schoolId: string;
  startDate: string;
}

export default async ({
  endDate,
  schoolId,
  startDate,
}: GetAttendancesArgs): Promise<Adapter> => {
  try {
    const { data, error, success } = await attendances({
      endDate,
      startDate,
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
