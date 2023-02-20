import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, MessageText } from './Step2Styles';
import { MainActionButton, Input } from '../../shared/SharedStyles';
import { StepProps } from '../../shared/sharedInterfaces';

const verifyText = `Verify your phone number`;
const messageText = `We need your current phone number 
to send you important information.`;
const nextText = 'Next';

const Step2: React.FC<StepProps> = ({
  form,
  goToNextStep,
  handleInputChange,
}: StepProps) => {
  const { t } = useTranslation();
  const tMessageText = t(messageText);
  const tNext = t(nextText);
  const tVerifyText = t(verifyText);

  const { isValid, text } = form.phoneNumber;
  const isDisabled = !isValid || text.length === 0;

  const handleNextClick = () => {
    const isNonEmpty = text.length > 0;
    if (isValid && isNonEmpty) goToNextStep();
  };

  return (
    <Container>
      <p>{tVerifyText}</p>
      <Input
        isValid={isValid}
        name={'phoneNumber'}
        onChange={handleInputChange}
        type="text"
        value={text}
      />
      <MessageText>{tMessageText}</MessageText>
      <MainActionButton isDisabled={isDisabled} onClick={handleNextClick}>
        {tNext}
      </MainActionButton>
    </Container>
  );
};

export default Step2;
