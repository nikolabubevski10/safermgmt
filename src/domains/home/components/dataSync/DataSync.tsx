import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Frame } from './DataSyncStyles';
import LogoOrbit from './components/logoOrbit/LogoOrbit';

const headerText = 'Data Synchronization';

const p1 = `Having the most up to date data for 
your organization is a one of the most vital 
component of our system. We integrate directly 
with your student information system to ensure 
your data is accurate across the board.`;

const p2 = `The Safer Management sync tool is 
also capable of sending attendance information 
back to your student information system. Our 
propriety solution eliminates the use of paper 
and human reporting errors.`;

const DataSync: React.FC = () => {
  const { t } = useTranslation();

  const tHeaderText = t(headerText);
  const tp1 = t(p1);
  const tp2 = t(p2);

  return (
    <Container>
      <Frame>
        <h2>{tHeaderText}</h2>
        <p>{tp1}</p>
        <p>{tp2}</p>
      </Frame>
      <LogoOrbit />
    </Container>
  );
};

export default DataSync;
