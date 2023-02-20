import React from 'react';
import { Container } from './StepProgressStyles';
import Step from './components/step/Step';
import { IAnswer, IQuestion } from '../../hooks/types';

export interface Props {
  answers: IAnswer[];
  questions: IQuestion[];
  currentStepIndex: number | null;
  maxStepIndex: number | null;
  numberOfSteps: number;
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ProfileSetup: React.FC<Props> = ({
  answers,
  currentStepIndex,
  setCurrentStepIndex,
  numberOfSteps,
  maxStepIndex,
  questions,
}: Props) => {
  const stepArray = Array.from(Array(numberOfSteps));
  return (
    <Container>
      {stepArray.map((_, stepIndex) => (
        <Step
          answers={answers}
          key={stepIndex}
          stepIndex={stepIndex}
          maxStepIndex={maxStepIndex}
          currentStepIndex={currentStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
          questions={questions}
        />
      ))}
    </Container>
  );
};

export default ProfileSetup;
