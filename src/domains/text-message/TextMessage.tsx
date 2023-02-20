import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import sendTextMessage from '../../data/twilio/sendTextMessage';
import usePhoneNumber from '../../hooks/usePhoneNumber';
import { ContentContainer, Footer, Header } from '../page-layouts';
import { Container, Input, Button, Message } from './TextMessageStyle';

const TextMessage: React.FC = () => {
  const { t } = useTranslation();
  const inputPlaceholder = t('phone number');
  const sendButtonText = t('send text message');
  const invalidPhoneNumber = t('please enter a valid phone number');
  const successMessage = t('textSent!');

  const [message, setMessage] = useState<string>('');

  const { handleInput, inputValue, isValid } = usePhoneNumber();

  const sendText = () => {
    if (!isValid) {
      setMessage(invalidPhoneNumber);
    } else {
      sendTextMessage({
        message: 'hello',
        to: 'xxxxxxxxxxx',
      });
      setMessage(successMessage);
    }
  };

  return (
    <>
      <Header />

      <ContentContainer>
        <Container>
          <Input
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={handleInput}
          />
          <Message isError={!isValid}>{message}</Message>
          <Button onClick={sendText}>{sendButtonText}</Button>
        </Container>
      </ContentContainer>

      <Footer />
    </>
  );
};

export default TextMessage;
