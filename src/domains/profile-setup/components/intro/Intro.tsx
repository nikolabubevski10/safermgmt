import React from 'react';
import { Container, Subheading } from './IntroStyles';
import { MainActionButton } from '../../shared/SharedStyles';
import { useTranslation } from 'react-i18next';

interface Props {
  setHasBegun: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}

const beginText = 'Begin';
const greeting = 'Hi';
const text1 = `Please complete your Safer check in profile`;
const text2 = `You’ll be asked to take a photo of your face, 
verify your phone number and take a daily health check survey.`;

const Intro: React.FC<Props> = ({ setHasBegun, name }: Props) => {
  const { t } = useTranslation();
  const tBeginText = t(beginText);
  const tGreeting = t(greeting);
  const tText1 = t(text1);
  const tText2 = t(text2);
  const handleBeginClick = () => setHasBegun(true);
  return (
    <Container>
      <h2>{`${tGreeting} ${name}`}</h2>
      <Subheading>{tText1}</Subheading>
      <p>{tText2}</p>
      <MainActionButton onClick={handleBeginClick}>
        {tBeginText}
      </MainActionButton>
    </Container>
  );
};

export default Intro;
