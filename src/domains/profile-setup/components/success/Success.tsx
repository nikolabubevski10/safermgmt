import React from 'react';
import Hands from './components/hands/Hands';
import { Container } from './SuccessStyles';
import { MainActionButton } from '../../shared/SharedStyles';
import { useTranslation } from 'react-i18next';

const healthCheckText = 'Health check';
const messageText = 'Your profile set up is now complete';
const thanksText = 'Thank You!';

const Success: React.FC = () => {
  const { t } = useTranslation();
  const tHealthCheckText = t(healthCheckText);
  const tMessageText = t(messageText);
  const tThanksText = t(thanksText);
  return (
    <Container>
      <Hands />
      <h2>{tThanksText}</h2>
      <p>{tMessageText}</p>
      <MainActionButton>{tHealthCheckText}</MainActionButton>
    </Container>
  );
};

export default Success;
