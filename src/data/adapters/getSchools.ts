import { Adapter } from './types';
import schools from '../api/queries/schools';

interface IGetSchoolsInput {
  districtId: string;
}

export default async ({ districtId }: IGetSchoolsInput): Promise<Adapter> => {
  try {
    const { success, error, data } = await schools({ districtId });

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};
