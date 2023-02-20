import React, { useCallback } from 'react';
import { Container } from './Step3Styles';
import { MainActionButton, Input } from '../../shared/SharedStyles';
import { StepProps } from '../../shared/sharedInterfaces';
import { useTranslation } from 'react-i18next';

const confirmText = 'Double check your input';
const completeText = 'Complete';

const Step2: React.FC<StepProps> = ({
  goToNextStep,
  form,
  isValidForm = false,
  handleInputChange,
}: StepProps) => {
  const { t } = useTranslation();
  const tConfirmText = t(confirmText);
  const tCompleteText = t(completeText);

  const { text, isValid } = form.verifiedPhoneNumber;
  const isDisabled = !isValid || text.length === 0;
  const isMatched = isValid && form.phoneNumber.text === text;
  const verifiedPhoneNumberIsValid = isMatched || text === '';

  const handleCompleteClick = useCallback(() => {
    if (isValidForm && isMatched) goToNextStep();
  }, [isValidForm, isMatched]);

  return (
    <Container>
      <p>{tConfirmText}</p>
      <Input
        isValid={verifiedPhoneNumberIsValid}
        name={'verifiedPhoneNumber'}
        onChange={handleInputChange}
        type="text"
        value={text}
      />
      <MainActionButton isDisabled={isDisabled} onClick={handleCompleteClick}>
        {tCompleteText}
      </MainActionButton>
    </Container>
  );
};

export default Step2;
