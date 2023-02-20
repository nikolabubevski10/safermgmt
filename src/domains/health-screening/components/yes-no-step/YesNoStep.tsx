import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Subtext,
  QuestionText,
  ExplanationInput,
} from './YesNoStepStyles';
import {
  IQuestion,
  IAnswer,
  TUpdateAnswer,
  TOnExplanationInputChange,
} from '../../hooks/types';
import { MainActionButton } from '../../shared/SharedStyles';
import RadioButtons from './components/radio-buttons/RadioButtons';
import getIsAnswered from '../../hooks/utils/getIsAnswered';

const next = 'Next';
const placeholder = 'Please explain...';

interface Props {
  questions: IQuestion[];
  stepIndex: number | null;
  goToNextStep: () => void;
  answers: IAnswer[];
  updateAnswer: TUpdateAnswer;
  onExplanationInputChange: TOnExplanationInputChange;
}

const YesNoStep: React.FC<Props> = ({
  questions,
  stepIndex,
  goToNextStep,
  answers,
  updateAnswer,
  onExplanationInputChange,
}: Props) => {
  const { t } = useTranslation();
  const tNext = t(next);
  const displayNone = stepIndex === null;
  const currentQuestion =
    stepIndex !== null && questions ? questions[stepIndex] || null : null;
  const answer =
    stepIndex !== null
      ? answers[stepIndex]
        ? answers[stepIndex]
        : null
      : null;
  const answerValue = answer ? answer.value : null;
  const answerIsNo = answerValue === false && answerValue !== null;
  const answerIsYes = answerValue === true && answerValue !== null;
  const requiresYesExplanation = currentQuestion && currentQuestion.explainYes;
  const requiresNoExplanation = currentQuestion && currentQuestion.explainNo;
  const showInput =
    (answerIsNo && requiresNoExplanation) ||
    (answerIsYes && requiresYesExplanation);
  const isAnswered = getIsAnswered({ answer, question: currentQuestion });
  const tQuestionText = currentQuestion ? t(currentQuestion.text) : '';
  const tQuestionSubtext =
    currentQuestion && currentQuestion.subtext
      ? t(currentQuestion.subtext)
      : '';
  const tPlaceholder = t(placeholder);

  const handleRadioOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAnswer(stepIndex, !!e.target.value);
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onExplanationInputChange({
      e,
      isNoExplanation: answerIsNo,
      isYesExplanation: answerIsYes,
      stepIndex,
    });
  };

  const inputValue =
    answerIsNo && answer
      ? answer.noExplanation
      : answerIsYes && answer
      ? answer.yesExplanation
      : '';

  return (
    <Container displayNone={displayNone}>
      <QuestionText>{tQuestionText}</QuestionText>
      {tQuestionSubtext && <Subtext>{tQuestionSubtext}</Subtext>}
      <RadioButtons answer={answerValue} onChange={handleRadioOnChange} />
      {showInput && (
        <ExplanationInput
          placeholder={tPlaceholder}
          onChange={handleInputOnChange}
          value={inputValue}
        />
      )}
      {isAnswered && (
        <MainActionButton onClick={goToNextStep}>{tNext}</MainActionButton>
      )}
    </Container>
  );
};

export default YesNoStep;
