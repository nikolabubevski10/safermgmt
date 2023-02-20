import { Adapter } from './types';
import survey from '../api/queries/survey';

interface IGetSurveyQuestions {
  surveyId: string;
}

export default async ({ surveyId }: IGetSurveyQuestions): Promise<Adapter> => {
  try {
    const { data, error, success } = await survey({
      surveyId,
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
