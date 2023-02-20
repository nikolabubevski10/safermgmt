import React from 'react';
import { Container, Text } from './SaveSuccessStyles';
import { useTranslation } from 'react-i18next';
import Check from './components/check/Check';

const message = 'Updates saved';

const SaveSuccess: React.FC = () => {
  const { t } = useTranslation();
  const tMessage = t(message);
  return (
    <Container>
      <Check />
      <Text>{tMessage}</Text>
    </Container>
  );
};

export default SaveSuccess;
