import { TQuestion } from '../../../types';
import _ from 'lodash';

export type TPreparedQuestion = {
  text: string;
  isActive: boolean;
  sequence: number;
  surveyId: string;
};

const prepareNewSurveyQuestions = (
  questions: TQuestion[],
): TPreparedQuestion[] => {
  return questions.map((question) =>
    _.pick(question, 'text', 'isActive', 'sequence', 'surveyId'),
  );
};

export default prepareNewSurveyQuestions;
