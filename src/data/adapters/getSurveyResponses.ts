import { Adapter } from './types';
import surveyResponses from '../api/queries/surveyResponses';

interface IGetSurveyQuestions {
  districtId: string;
}

export default async ({
  districtId,
}: IGetSurveyQuestions): Promise<Adapter> => {
  try {
    const { data, error, success } = await surveyResponses({
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
