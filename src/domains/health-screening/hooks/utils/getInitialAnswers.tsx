import { IQuestion, IAnswer } from '../types';

const getInitialAnswers = (questions: IQuestion[]): IAnswer[] => {
  return questions.map(() => ({
    value: null,
    yesExplanation: '',
    noExplanation: '',
  }));
};

export default getInitialAnswers;
