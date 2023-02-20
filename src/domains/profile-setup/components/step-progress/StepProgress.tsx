import React from 'react';
import { Container } from './StepProgressStyles';
import { Props } from './types';
import Step from './components/step/Step';

const ProfileSetup: React.FC<Props> = ({
  currentStepIndex,
  numberOfSteps,
}: Props) => {
  const stepArray = Array.from(Array(numberOfSteps));
  return (
    <Container>
      {stepArray.map((_, stepIndex) => (
        <Step
          key={stepIndex}
          stepIndex={stepIndex}
          currentStepIndex={currentStepIndex}
        />
      ))}
    </Container>
  );
};

export default ProfileSetup;
