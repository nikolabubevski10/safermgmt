import { Adapter } from './types';
import surveys from '../api/queries/surveys';

interface IGetAllSurveys {
  districtId: string;
}

export default async ({ districtId }: IGetAllSurveys): Promise<Adapter> => {
  try {
    const { data, error, success } = await surveys({
      districtId,
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
