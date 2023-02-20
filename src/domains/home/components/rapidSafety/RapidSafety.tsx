import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  CloudImg,
  Frame,
  CloudContainer,
} from './RapidSafetyStyles';
import cloud from './assets/cloud.png';

const p1 = `The cloud-based Safer Management 
Rapid Notification System makes it easier 
for college leaders to implement a 
comprehensive communication strategy to 
engage, inform and protect their campus 
population by utilizing mass & targeted SMS 
and Email messaging.`;

const p2 = `Our system allows you to send 
messages to selected audiences, scheduled 
messaging, view the analytics-related 
previous sent messages. Administrators 
will have the ability to schedule and 
send messages from the Safer Web Platform 
or the Safer mobileLarge application.`;

const titleText = 'Rapid Safety Notification';

const RapidSafety: React.FC = () => {
  const { t } = useTranslation();

  const tp1 = t(p1);
  const tp2 = t(p2);
  const tTitleText = t(titleText);

  return (
    <Container>
      <CloudContainer>
        <CloudImg src={cloud} />
      </CloudContainer>
      <Frame>
        <h2>{tTitleText}</h2>
        <p>{tp1}</p>
        <p>{tp2}</p>
      </Frame>
    </Container>
  );
};

export default RapidSafety;
