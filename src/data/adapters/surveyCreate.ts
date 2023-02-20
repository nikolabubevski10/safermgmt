import { Adapter } from './types';
import surveyCreate from '../api/mutations/surveyCreate';
import { TQuestion } from '../../domains/surveys/types';

interface IGetAllSurveys {
  districtId: string;
  name: string;
  header: string;
  questions: TQuestion[];
  isActive: boolean;
}

export default async ({
  districtId,
  name,
  header,
  questions,
  isActive,
}: IGetAllSurveys): Promise<Adapter> => {
  try {
    const { data, error, success } = await surveyCreate({
      districtId,
      name,
      header,
      questions,
      isActive,
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
