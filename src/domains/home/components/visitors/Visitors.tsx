import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Frame, CheckInImg } from './VisitorsStyles';
import checkIn from './assets/checkIn.png';

const headerText = 'Visitor Management';

const p1 = `The Safer Management mobile application 
allows on-campus visitors to be tracked upon 
entering campus by collecting information from each 
visitor.`;

const p2 = `Once information is collected at 
security checkpoints, a system of records keeps 
track of all visitors that have visited the 
campus.`;

const p3 = `The Safer Management web platform 
allows reports to be generated related to visitor 
logs.`;

const Visitors: React.FC = () => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tp1 = t(p1);
  const tp2 = t(p2);
  const tp3 = t(p3);

  return (
    <Container>
      <Frame>
        <h2>{tHeaderText}</h2>
        <p>{tp1}</p>
        <p>{tp2}</p>
        <p>{tp3}</p>
      </Frame>
      <CheckInImg src={checkIn} />
    </Container>
  );
};

export default Visitors;
