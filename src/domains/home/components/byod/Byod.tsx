import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, ThreeDeviceMashup } from './ByodStyles';
import { MainActionButton, ButtonText } from '../shared/sharedStyles';
import threeDeviceMashup from './assets/threeDeviceMashup.png';
import DotGroup1 from './components/dotGroup1/DotGroup1';
import DotGroup2 from './components/dotGroup2/DotGroup2';
import DotGroup3 from './components/dotGroup3/DotGroup3';

const subHeadingText = 'Bring Your Own Device';
const p1 = `The Safer Management Attendance tracking 
platform is accessible across multiple device types. 
Whether you are using a mobile device, tablet, or 
desktop computer we have you covered. Our software 
solution is compatible with your current internet 
connected devices, there is no need to spend 
additional funds buying hardware devices to get the 
job done. `;
const requestText = 'Request Free Demo';

interface Props {
  openContactModal: () => void;
}

const Byod: React.FC<Props> = ({ openContactModal }: Props) => {
  const { t } = useTranslation();
  const tSubHeadingText = t(subHeadingText);
  const tp1 = t(p1);
  const tRequestText = t(requestText);
  return (
    <Container>
      <h1>BYOD</h1>
      <h3>{tSubHeadingText}</h3>
      <p>{tp1}</p>
      <DotGroup1 />
      <DotGroup2 />
      <DotGroup3 />
      <ThreeDeviceMashup src={threeDeviceMashup} />
      <MainActionButton onClick={openContactModal}>
        <ButtonText>{tRequestText}</ButtonText>
      </MainActionButton>
    </Container>
  );
};

export default Byod;
