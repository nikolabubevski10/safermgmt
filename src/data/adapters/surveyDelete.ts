import { Adapter } from './types';
import surveyDelete from '../api/mutations/surveyDelete';

interface IGetAllSurveys {
  id: string;
}

export default async ({ id }: IGetAllSurveys): Promise<Adapter> => {
  try {
    const { data, error, success } = await surveyDelete({
      id,
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
