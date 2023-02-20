import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  PContainer,
  BgImg,
  CardContainer,
  ButtonContainer,
} from './SurverysStyles';
import { MainActionButton, ButtonText } from '../shared/sharedStyles';
import Card from './components/card/Card';
import curvyBg from './assets/curvyBg.png';
import avatar1 from './assets/demoCards/avatars/avatar1.png';
import avatar2 from './assets/demoCards/avatars/avatar2.png';
import avatar3 from './assets/demoCards/avatars/avatar3.png';
import cards from './assets/demoCards/cards';
const avatars = [avatar1, avatar2, avatar3];

const p1 = `Our survey platform allows your 
organizations to capture meaningful data. 
From capturing COVID-19 symptoms to Voting 
on the next Homecoming Queen. Your 
organization can customize each survey by 
adding questions, setting the title, 
enabling signature capture and temperature 
capture. All surveys are configured from 
the Safer Management web platform.`;

const headerText = 'Surveys';

const subHeaderText = `You will be able 
to instantly capture such information`;

const actionButtonText = 'Request Free Demo';

const Surveys: React.FC = () => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tSubheaderText = t(subHeaderText);
  const tp1 = t(p1);
  const tActionButtonText = t(actionButtonText);

  return (
    <Container>
      <BgImg src={curvyBg} />
      <h2>{tHeaderText}</h2>
      <PContainer>
        <p>{tp1}</p>
      </PContainer>
      <h3>{tSubheaderText}</h3>
      <CardContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            avatarSrc={avatars[index]}
            title={card.title}
            questionList={card.questionList}
          />
        ))}
      </CardContainer>
      <ButtonContainer>
        <MainActionButton>
          <ButtonText>{tActionButtonText}</ButtonText>
        </MainActionButton>
      </ButtonContainer>
    </Container>
  );
};

export default Surveys;
