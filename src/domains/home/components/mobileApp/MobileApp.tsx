import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Frame,
  Svg,
  PhoneImg,
  Selection,
  PhoneImgContainer,
  UnselectedItemContainer,
  SelectedItemContainer,
} from './MobileAppStyles';
import phone from './assets/phone.png';

const headerText = 'Mobile App';

const listItem1 = 'Daily Pre-Screening';
const listItem2 = 'Manual Check-In Process';
const listItem3 = 'Real-Time Medical Alerts';
const listItem4 = 'Mobile & Physical ID Badge';

const p = `The main highlight of the mobile app 
- many features to meet your needs. Lorem ipsum 
dolor sit amet, consectetur adipisicing elit, 
sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi 
ut aliquip ex ea commodo consequat.`;

const MobileApp: React.FC = () => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tp = t(p);
  const tListItem1 = t(listItem1);
  const tListItem2 = t(listItem2);
  const tListItem3 = t(listItem3);
  const tListItem4 = t(listItem4);

  return (
    <Container>
      <Frame>
        <h2>{tHeaderText}</h2>
        <p>{tp}</p>
        <SelectedItemContainer>
          <Selection>
            <Svg viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.5" cy="4.5" r="4.5" />
            </Svg>
            <h4>{tListItem1}</h4>
          </Selection>
        </SelectedItemContainer>
        <UnselectedItemContainer>
          <h4>{tListItem2}</h4>
          <h4>{tListItem3}</h4>
          <h4>{tListItem4}</h4>
        </UnselectedItemContainer>
      </Frame>
      <PhoneImgContainer>
        <PhoneImg src={phone} />
      </PhoneImgContainer>
    </Container>
  );
};

export default MobileApp;
