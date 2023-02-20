import React from 'react';
import { Story } from '@storybook/react';
import StepProgress from './StepProgress';
import { TestContainer } from './StepProgressStyles';

interface Props {
  currentStepIndex?: number;
  numberOfSteps?: number;
}

export default {
  title: 'profile-setup/stepProgress',
  component: StepProgress,
};

const Wrapper: React.FC<Props> = ({
  currentStepIndex,
  numberOfSteps,
}: Props) => {
  const steps = numberOfSteps || 0;
  const currentIndex = currentStepIndex || 0;
  return (
    <TestContainer>
      <StepProgress numberOfSteps={steps} currentStepIndex={currentIndex} />
    </TestContainer>
  );
};

const Template: Story = (args) => <Wrapper {...args} />;

export const LotsOfSteps = Template.bind({});
LotsOfSteps.args = {
  numberOfSteps: 20,
  currentStepIndex: 10,
};

export const OneStep = Template.bind({});
OneStep.args = {
  numberOfSteps: 1,
  currentStepIndex: 0,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfSteps: 5,
  currentStepIndex: 0,
};

export const PartialProgress = Template.bind({});
PartialProgress.args = {
  numberOfSteps: 5,
  currentStepIndex: 3,
};

export const OnLastStep = Template.bind({});
OnLastStep.args = {
  numberOfSteps: 5,
  currentStepIndex: 4,
};

export const Complete = Template.bind({});
Complete.args = {
  numberOfSteps: 5,
  currentStepIndex: 9999,
};
