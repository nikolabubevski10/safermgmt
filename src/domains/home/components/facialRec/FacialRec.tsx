import React from 'react';
import { useTranslation } from 'react-i18next';
import useScreenSizes from '../../../../hooks/screenSizes/useScreenSizes';
import { Container, WomanImg, Frame } from './FacialRecStyles';
import DotGroup2 from './components/dogGroup2/DotGroup2';
import woman from './assets/woman.png';

const p1 = `It is our mission to provide schools, 
districts, and states with an accurate and 
complete picture of student attendance data. To 
do that, our staff of data scientists develops 
algorithms in partnership with mathematicians and 
statisticians that are powered by the latest 
advances in Artificial Intelligence and Machine 
Learning.ded in the Safer Management online 
platform.`;

const titleText = ' Track Attendance with Facial Recognition';

const FacialRec: React.FC = () => {
  const { tablet } = useScreenSizes();
  const showDotGroup2 = tablet;

  const { t } = useTranslation();

  const tp1 = t(p1);
  const tTitleText = t(titleText);

  return (
    <Container>
      {showDotGroup2 && <DotGroup2 />}
      <WomanImg src={woman} />
      <Frame>
        <h2>{tTitleText}</h2>
        <p>{tp1}</p>
      </Frame>
    </Container>
  );
};

export default FacialRec;
