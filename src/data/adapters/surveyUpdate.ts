import { Adapter } from './types';
import surveyUpdate from '../api/mutations/surveyUpdate';
import { TQuestion } from '../../domains/surveys/types';

interface IUpdateSurvey {
  id: string;
  name?: string;
  header?: string;
  questions?: TQuestion[];
  isActive?: boolean;
}

export default async ({
  id,
  name,
  header,
  questions,
  isActive,
}: IUpdateSurvey): Promise<Adapter> => {
  try {
    const { data, error, success } = await surveyUpdate({
      id,
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
