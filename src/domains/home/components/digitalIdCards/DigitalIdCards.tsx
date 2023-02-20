import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Frame,
  Screens,
  DotContainer,
} from './DigitalIdCardsStyles';
// import LinkButton from '../shared/linkButton/LinkButton';
import DotGroup1 from './components/dots/dotGroup1/DotGroup1';
import screens from './assets/screens.png';

const headerText = 'Mobile Identification Cards';
const subheaderText = 'Apple & Google Wallet';

const p1 = `Safer Management mobile identification card 
solution makes it easy for students, staff, faculty, 
parents, and visitors to check in using our attendance 
tracking solution.`;

const p2 = `Digital wallet passes are stored in the 
user's Apple Wallet for iPhone users and Google Wallet 
for Android users. No additional software is required 
to use our digital ID system.`;

// const showMoreText = 'show more';

const DigitalIdCards: React.FC = () => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tSubheadertText = t(subheaderText);
  const tp1 = t(p1);
  const tp2 = t(p2);

  return (
    <Container>
      <Frame>
        <DotContainer>
          <DotGroup1 />
        </DotContainer>
        <h2>{tHeaderText}</h2>
        <h3>{tSubheadertText}</h3>
        <p>{tp1}</p>
        <p>{tp2}</p>
      </Frame>
      <Screens src={screens} />
    </Container>
  );
};

export default DigitalIdCards;
