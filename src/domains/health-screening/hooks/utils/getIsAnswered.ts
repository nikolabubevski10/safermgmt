import { IAnswer, IQuestion } from '../types';

interface IGetIsAnsweredArgs {
  answer: IAnswer | null | undefined;
  question: IQuestion | null | undefined;
  newAnswerValue?: boolean | null;
}

const getIsAnswered = ({
  answer,
  question,
  newAnswerValue,
}: IGetIsAnsweredArgs): boolean => {
  if (!answer || !question) return false;
  const answerValue = newAnswerValue || answer.value;
  const answerIsNo = answerValue === false && answerValue !== null;
  const answerIsYes = answerValue === true && answerValue !== null;
  const isYesExplained =
    (question.explainYes && !!answer.yesExplanation) ||
    !question.explainYes ||
    answerIsNo;
  const isNoExplained =
    (question.explainNo && !!answer.noExplanation) ||
    !question.explainNo ||
    answerIsYes;
  return answerValue !== null && isYesExplained && isNoExplained;
};

export default getIsAnswered;
