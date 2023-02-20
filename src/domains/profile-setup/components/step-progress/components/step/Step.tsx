import React from 'react';
import { CheckSvg, Unchecked, Container, Connector } from './StepStyles';

interface Props {
  currentStepIndex: number;
  stepIndex: number;
}

const Step: React.FC<Props> = ({ currentStepIndex, stepIndex }: Props) => {
  const isChecked = stepIndex < currentStepIndex;
  const isCurrentStep = currentStepIndex === stepIndex;
  const isFirst = stepIndex === 0;
  return (
    <Container isFirst={isFirst}>
      {!isFirst && (
        <Connector isChecked={isChecked} isCurrentStep={isCurrentStep} />
      )}
      {isChecked ? (
        <CheckSvg
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 13C0 5.83208 5.83208 0 13 0C20.1679 0 26 5.83208 26 13C26 20.1679 20.1679 26 13 26C5.83208 26 0 20.1679 0 13ZM12.1241 18.5639L19.7105 11.0526C20.312 10.4511 20.312 9.51128 19.7105 8.90977C19.109 8.30827 18.1692 8.30827 17.5677 8.90977L10.9962 15.4812L7.97368 12.797C7.37218 12.2331 6.43233 12.2707 5.86842 12.8722C5.34211 13.4737 5.3797 14.4135 5.9812 14.9774L10.0564 18.6015C10.6579 19.1654 11.5602 19.1278 12.1241 18.5639Z"
          />
        </CheckSvg>
      ) : (
        <Unchecked isCurrentStep={isCurrentStep} />
      )}
    </Container>
  );
};

export default Step;
