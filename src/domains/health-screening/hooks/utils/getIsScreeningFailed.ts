import { IAnswer, IQuestion } from '../types';

const getIsScreeningFailed = (
  answers: IAnswer[],
  questions: IQuestion[],
): boolean =>
  !!answers.reduce((ac, answer, i) => {
    const question: IQuestion = questions[i];
    if (answer === null) return ac;
    let isFailed = false;
    if (answer.value !== null) {
      isFailed = question.failAnswers.includes(answer.value);
    }
    return ac || isFailed;
  }, false);

export default getIsScreeningFailed;
