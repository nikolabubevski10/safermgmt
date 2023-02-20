import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Greeting } from './IntroductionStyles';
import { MainActionButton } from '../../shared/SharedStyles';

const begin = 'Begin';
const welcome = 'Welcome';
const intro = `Please answer a few questions 
before returning to school or work`;

interface Props {
  onBeginClick: () => void;
}

const HealthScreening: React.FC<Props> = ({ onBeginClick }: Props) => {
  const { t } = useTranslation();
  const tBegin = t(begin);
  const tWelcome = t(welcome);
  const tIntro = t(intro);
  const greeting = `${tWelcome}, User!`;
  return (
    <Container>
      <Greeting>{greeting}</Greeting>
      <p>{tIntro}</p>
      <MainActionButton onClick={onBeginClick}>{tBegin}</MainActionButton>
    </Container>
  );
};

export default HealthScreening;
