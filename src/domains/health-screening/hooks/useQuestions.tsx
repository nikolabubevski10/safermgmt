import { useState } from 'react';
import getInitialAnswers from './utils/getInitialAnswers';
import {
  IQuestion,
  IAnswer,
  IUseQuestions,
  IUpdateExplanation,
  IOnExplanationInputChange,
} from './types';
import _ from 'lodash';

const useQuestions = (questions: IQuestion[]): IUseQuestions => {
  const [stepIndex, setStepIndex] = useState<number | null>(null);
  const [maxStepIndex, setMaxStepIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<IAnswer[]>(
    getInitialAnswers(questions),
  );

  const updateAnswer = (stepIndex: number | null, newAnswerValue: boolean) => {
    if (stepIndex === null || stepIndex > questions.length - 1) return;
    const newAnswers = _.cloneDeep(answers);
    const newAnswer = newAnswers[stepIndex];
    newAnswer.value = newAnswerValue;
    setAnswers(newAnswers);
  };

  const updateExplanation = ({
    explaination,
    isNoExplanation = false,
    isYesExplanation = false,
    stepIndex,
  }: IUpdateExplanation) => {
    if (stepIndex === null || stepIndex >= questions.length) return;
    const newAnswers = _.cloneDeep(answers);
    if (isYesExplanation) {
      newAnswers[stepIndex].yesExplanation = explaination;
    } else if (isNoExplanation) {
      newAnswers[stepIndex].noExplanation = explaination;
    }
    setAnswers(newAnswers);
  };

  const onExplanationInputChange = ({
    e,
    isNoExplanation,
    isYesExplanation,
    stepIndex,
  }: IOnExplanationInputChange) => {
    updateExplanation({
      explaination: e.target.value,
      isNoExplanation,
      isYesExplanation,
      stepIndex,
    });
  };

  const goToNextStep = () => {
    if (stepIndex === maxStepIndex) {
      setMaxStepIndex((prev) => (prev === null ? 0 : prev + 1));
    }
    setStepIndex((prev) => (prev === null ? 0 : prev + 1));
  };

  return {
    answers,
    questions,
    goToNextStep,
    onExplanationInputChange,
    stepIndex,
    updateAnswer,
    updateExplanation,
    setStepIndex,
    maxStepIndex,
  };
};

export default useQuestions;
